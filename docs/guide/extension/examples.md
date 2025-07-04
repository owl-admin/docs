# 扩展开发示例

## 简单通知扩展

这是一个完整的通知扩展示例，展示了扩展开发的基本流程。

### 目录结构

```
extensions/slowlyo/notice/
├── composer.json
├── README.md
├── logo.png
├── src/
│   ├── NoticeServiceProvider.php
│   ├── Models/
│   │   └── Notice.php
│   └── Http/
│       ├── Controllers/
│       │   └── NoticeController.php
│       └── routes.php
├── database/
│   └── migrations/
│       └── 2024_01_01_000000_create_notices_table.php
├── lang/
│   ├── zh_CN/
│   │   └── notice.php
│   └── en/
│       └── notice.php
└── public/
    └── extensions/
        └── slowlyo/
            └── notice/
                ├── css/
                │   └── notice.css
                └── js/
                    └── notice.js
```

### 1. Composer 配置

```json
{
    "name": "slowlyo/notice",
    "type": "library",
    "description": "Owl Admin 通知扩展",
    "version": "1.0.0",
    "keywords": ["owl-admin", "notice", "notification"],
    "license": "MIT",
    "authors": [
        {
            "name": "Slowlyo",
            "email": "slowlyo@qq.com"
        }
    ],
    "homepage": "https://github.com/slowlyo/owl-admin-notice",
    "require": {
        "php": ">=8.1",
        "slowlyo/owl-admin": "^2.0"
    },
    "autoload": {
        "psr-4": {
            "Slowlyo\\Notice\\": "src/"
        }
    },
    "extra": {
        "owl-admin": "Slowlyo\\Notice\\NoticeServiceProvider",
        "alias": "系统通知"
    }
}
```

### 2. 服务提供者

```php
<?php

namespace Slowlyo\Notice;

use Slowlyo\OwlAdmin\Renderers\TextControl;
use Slowlyo\OwlAdmin\Renderers\SwitchControl;
use Slowlyo\OwlAdmin\Renderers\NumberControl;
use Slowlyo\OwlAdmin\Extend\ServiceProvider;

class NoticeServiceProvider extends ServiceProvider
{
    protected $middleware = [
        'notice.check' => \Slowlyo\Notice\Http\Middleware\NoticeMiddleware::class,
    ];

    protected $exceptRoutes = [
        'permission' => [
            'notice/api/count',
        ],
    ];

    public function customInitAfter()
    {
        // 加载前端资源
        $this->loadCss('/css/notice.css');
        $this->loadJs('/js/notice.js');

        // 导入菜单
        $this->importMenu([
            [
                'title' => '系统通知',
                'url' => '/notice',
                'icon' => 'fa fa-bell',
                'order' => 100,
            ],
            [
                'parent' => '系统通知',
                'title' => '通知管理',
                'url' => '/notice/manage',
                'icon' => 'fa fa-list',
            ],
            [
                'parent' => '系统通知',
                'title' => '发送通知',
                'url' => '/notice/send',
                'icon' => 'fa fa-paper-plane',
            ],
        ]);
    }

    public function settingForm()
    {
        return $this->baseSettingForm()->body([
            SwitchControl::make()
                ->name('enabled')
                ->label('启用通知')
                ->value(true),

            NumberControl::make()
                ->name('max_notices')
                ->label('最大通知数量')
                ->value(100)
                ->min(10)
                ->max(1000),

            SwitchControl::make()
                ->name('auto_delete')
                ->label('自动删除过期通知')
                ->value(false),

            NumberControl::make()
                ->name('expire_days')
                ->label('过期天数')
                ->value(30)
                ->min(1)
                ->max(365)
                ->visibleOn('${auto_delete}'),
        ]);
    }
}
```

### 3. 数据库迁移

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('notices', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('content');
            $table->string('type')->default('info'); // info, success, warning, error
            $table->json('target_users')->nullable(); // 目标用户ID数组
            $table->boolean('is_global')->default(false); // 是否全局通知
            $table->boolean('is_read')->default(false);
            $table->timestamp('read_at')->nullable();
            $table->unsignedBigInteger('sender_id')->nullable();
            $table->unsignedBigInteger('receiver_id')->nullable();
            $table->timestamp('expires_at')->nullable();
            $table->timestamps();

            $table->index(['receiver_id', 'is_read']);
            $table->index(['is_global', 'created_at']);
            $table->index('expires_at');
        });
    }

    public function down()
    {
        Schema::dropIfExists('notices');
    }
};
```

### 4. 模型定义

```php
<?php

namespace Slowlyo\Notice\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Notice extends Model
{
    protected $fillable = [
        'title',
        'content',
        'type',
        'target_users',
        'is_global',
        'is_read',
        'read_at',
        'sender_id',
        'receiver_id',
        'expires_at',
    ];

    protected $casts = [
        'target_users' => 'array',
        'is_global' => 'boolean',
        'is_read' => 'boolean',
        'read_at' => 'datetime',
        'expires_at' => 'datetime',
    ];

    public function sender(): BelongsTo
    {
        return $this->belongsTo(config('admin.database.users_model'), 'sender_id');
    }

    public function receiver(): BelongsTo
    {
        return $this->belongsTo(config('admin.database.users_model'), 'receiver_id');
    }

    public function scopeForUser($query, $userId)
    {
        return $query->where(function ($q) use ($userId) {
            $q->where('is_global', true)
              ->orWhere('receiver_id', $userId)
              ->orWhereJsonContains('target_users', $userId);
        });
    }

    public function scopeUnread($query)
    {
        return $query->where('is_read', false);
    }

    public function scopeNotExpired($query)
    {
        return $query->where(function ($q) {
            $q->whereNull('expires_at')
              ->orWhere('expires_at', '>', now());
        });
    }
}
```

### 5. 控制器实现

```php
<?php

namespace Slowlyo\Notice\Http\Controllers;

use Illuminate\Http\Request;
use Slowlyo\Notice\Models\Notice;
use Slowlyo\OwlAdmin\Controllers\AdminController;

class NoticeController extends AdminController
{
    public function index()
    {
        if ($this->actionOfGetData()) {
            $query = Notice::query()
                ->forUser(admin_user()->id)
                ->notExpired()
                ->orderBy('created_at', 'desc');

            return $this->response()->success([
                'rows' => $query->paginate(request('perPage', 20)),
            ]);
        }

        $page = $this->basePage()->body($this->list());

        return $this->response()->success($page);
    }

    protected function list()
    {
        return amis()->CRUDTable()
            ->perPage(20)
            ->api($this->getListGetDataPath())
            ->columns([
                amis()->TableColumn('title', '标题'),
                amis()->TableColumn('type', '类型')
                    ->type('mapping')
                    ->map([
                        'info' => '<span class="label label-info">信息</span>',
                        'success' => '<span class="label label-success">成功</span>',
                        'warning' => '<span class="label label-warning">警告</span>',
                        'error' => '<span class="label label-danger">错误</span>',
                    ]),
                amis()->TableColumn('is_read', '状态')
                    ->type('mapping')
                    ->map([
                        true => '<span class="label label-success">已读</span>',
                        false => '<span class="label label-warning">未读</span>',
                    ]),
                amis()->TableColumn('created_at', '创建时间')
                    ->type('datetime'),
                $this->rowActions([
                    amis()->DrawerAction()
                        ->label('查看')
                        ->drawer(
                            amis()->Drawer()
                                ->title('通知详情')
                                ->body([
                                    amis()->Property()
                                        ->title('${title}')
                                        ->column(1)
                                        ->items([
                                            ['label' => '内容', 'content' => '${content}'],
                                            ['label' => '类型', 'content' => '${type}'],
                                            ['label' => '时间', 'content' => '${created_at}'],
                                        ])
                                ])
                        ),
                    amis()->AjaxAction()
                        ->label('标记已读')
                        ->level('link')
                        ->visibleOn('${!is_read}')
                        ->api([
                            'url' => admin_url('notice/mark-read'),
                            'method' => 'post',
                            'data' => ['id' => '${id}'],
                        ]),
                ]),
            ]);
    }

    public function markRead(Request $request)
    {
        $notice = Notice::findOrFail($request->id);
        
        $notice->update([
            'is_read' => true,
            'read_at' => now(),
        ]);

        return $this->response()->successMessage('标记成功');
    }

    public function getUnreadCount()
    {
        $count = Notice::forUser(admin_user()->id)
            ->unread()
            ->notExpired()
            ->count();

        return $this->response()->success(['count' => $count]);
    }
}
```

### 6. 路由定义

```php
<?php

use Illuminate\Support\Facades\Route;
use Slowlyo\Notice\Http\Controllers\NoticeController;

Route::get('notice', [NoticeController::class, 'index']);
Route::post('notice/mark-read', [NoticeController::class, 'markRead']);
Route::get('notice/api/count', [NoticeController::class, 'getUnreadCount']);
```

### 7. 语言包

**zh_CN/notice.php**
```php
<?php

return [
    'title' => '标题',
    'content' => '内容',
    'type' => '类型',
    'status' => '状态',
    'read' => '已读',
    'unread' => '未读',
    'mark_read' => '标记已读',
    'mark_all_read' => '全部已读',
    'delete' => '删除',
    'created_at' => '创建时间',
];
```

### 8. 前端资源

**css/notice.css**
```css
.notice-badge {
    position: relative;
}

.notice-badge .badge {
    position: absolute;
    top: -8px;
    right: -8px;
    background: #ff4757;
    color: white;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
}

.notice-item {
    padding: 10px;
    border-bottom: 1px solid #eee;
}

.notice-item:hover {
    background-color: #f5f5f5;
}

.notice-item.unread {
    background-color: #fff3cd;
}
```

**js/notice.js**
```javascript
(function() {
    // 获取未读通知数量
    function updateNoticeCount() {
        fetch('/admin/notice/api/count')
            .then(response => response.json())
            .then(data => {
                if (data.status === 0) {
                    const badge = document.querySelector('.notice-badge .badge');
                    if (badge) {
                        badge.textContent = data.data.count;
                        badge.style.display = data.data.count > 0 ? 'block' : 'none';
                    }
                }
            });
    }

    // 页面加载时更新通知数量
    document.addEventListener('DOMContentLoaded', updateNoticeCount);

    // 每30秒更新一次
    setInterval(updateNoticeCount, 30000);
})();
```

## 使用示例

### 安装扩展

1. 将扩展代码放置到 `extensions/slowlyo/notice/` 目录
2. 在扩展管理中启用扩展
3. 扩展会自动运行数据库迁移并导入菜单

### 发送通知

```php
use Slowlyo\Notice\Models\Notice;

// 发送全局通知
Notice::create([
    'title' => '系统维护通知',
    'content' => '系统将于今晚22:00-24:00进行维护',
    'type' => 'warning',
    'is_global' => true,
    'sender_id' => admin_user()->id,
]);

// 发送给特定用户
Notice::create([
    'title' => '个人消息',
    'content' => '您的申请已通过审核',
    'type' => 'success',
    'receiver_id' => $userId,
    'sender_id' => admin_user()->id,
]);
```

### 获取通知

```php
// 获取用户未读通知
$notices = Notice::forUser($userId)
    ->unread()
    ->notExpired()
    ->latest()
    ->get();

// 获取通知数量
$count = Notice::forUser($userId)->unread()->count();
```

这个示例展示了一个完整的扩展开发流程，包括数据库设计、业务逻辑、前端交互等各个方面。您可以参考这个示例来开发自己的扩展。
