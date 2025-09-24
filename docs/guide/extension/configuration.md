# 扩展配置指南

## Composer 配置

### 基本配置

扩展的 `composer.json` 文件是扩展的核心配置文件：

```json
{
    "name": "vendor/package-name",
    "type": "library",
    "description": "扩展描述信息",
    "version": "1.0.0",
    "keywords": ["owl-admin", "extension"],
    "license": "MIT",
    "authors": [
        {
            "name": "作者姓名",
            "email": "author@example.com",
            "homepage": "https://example.com"
        }
    ],
    "homepage": "https://github.com/vendor/package-name",
    "require": {
        "php": ">=8.1",
        "slowlyo/owl-admin": "^2.0"
    },
    "autoload": {
        "psr-4": {
            "Vendor\\PackageName\\": "src/"
        }
    },
    "extra": {
        "owl-admin": "Vendor\\PackageName\\PackageNameServiceProvider",
        "laravel": {
            "providers": [
                "Vendor\\PackageName\\PackageNameServiceProvider"
            ]
        },
        "alias": "扩展显示名称"
    }
}
```

### 重要字段说明

| 字段 | 说明 | 必需 |
|------|------|------|
| `name` | 扩展包名，格式：`vendor/package-name` | ✓ |
| `extra.owl-admin` | 服务提供者类名 | ✓ |
| `extra.laravel.providers` | Laravel 包发现（Composer 安装时用于自动注册 Provider） | 建议 |
| `extra.alias` | 扩展显示名称 | ✓ |
| `description` | 扩展描述 | ✓ |
| `version` | 版本号 | ✓ |
| `authors` | 作者信息 | ✓ |
| `homepage` | 扩展主页 | - |
| `keywords` | 关键词 | - |

## 系统配置

### 扩展目录配置

在 `config/admin.php` 中配置扩展安装目录：

```php
'extension' => [
    // 扩展安装目录（本地扩展会被扫描加载）
    'dir' => base_path('extensions'),
],
```

说明：静态资源发布目录为固定路径 `public/extensions/{package-name}`（见 `Slowlyo\OwlAdmin\Extend\ServiceProvider::getPublishPath()`），不支持通过配置项自定义。

### 权限配置

扩展可以配置无需权限验证的路由：

```php
class PackageNameServiceProvider extends ServiceProvider
{
    protected $exceptRoutes = [
        // 无需权限验证的路由
        'permission' => [
            'package-name/public/*',
            'package-name/api/webhook',
        ],
        // 无需登录验证的路由
        'auth' => [
            'package-name/webhook',
            'package-name/callback',
        ],
    ];
}
```

### 中间件配置

注册扩展专用中间件：

```php
class PackageNameServiceProvider extends ServiceProvider
{
    protected $middleware = [
        'custom' => \Vendor\PackageName\Http\Middleware\CustomMiddleware::class,
        'rate_limit' => \Vendor\PackageName\Http\Middleware\RateLimitMiddleware::class,
    ];
}
```

## 扩展设置

### 设置表单定义

扩展可以提供配置表单供用户设置：

```php
public function settingForm()
{
    return $this->baseSettingForm()->body([
        // 基础配置
        amis()->GroupControl()->label('基础配置')->body([
            TextControl::make()
                ->name('app_name')
                ->label('应用名称')
                ->required(true)
                ->placeholder('请输入应用名称'),
                
            TextControl::make()
                ->name('app_key')
                ->label('应用密钥')
                ->required(true)
                ->type('password'),
        ]),
        
        // 高级配置
        amis()->GroupControl()->label('高级配置')->body([
            SwitchControl::make()
                ->name('debug_mode')
                ->label('调试模式')
                ->value(false),
                
            NumberControl::make()
                ->name('timeout')
                ->label('超时时间（秒）')
                ->value(30)
                ->min(1)
                ->max(300),
                
            SelectControl::make()
                ->name('log_level')
                ->label('日志级别')
                ->options([
                    ['label' => 'DEBUG', 'value' => 'debug'],
                    ['label' => 'INFO', 'value' => 'info'],
                    ['label' => 'WARNING', 'value' => 'warning'],
                    ['label' => 'ERROR', 'value' => 'error'],
                ])
                ->value('info'),
        ]),
        
        // 功能开关
        amis()->GroupControl()->label('功能开关')->body([
            CheckboxesControl::make()
                ->name('features')
                ->label('启用功能')
                ->options([
                    ['label' => '自动同步', 'value' => 'auto_sync'],
                    ['label' => '邮件通知', 'value' => 'email_notify'],
                    ['label' => '数据缓存', 'value' => 'data_cache'],
                ])
                ->value(['auto_sync']),
        ]),
    ]);
}
```

### 配置验证

添加配置验证规则：

```php
public function settingForm()
{
    return $this->baseSettingForm()
        ->rules([
            'app_name' => 'required|string|max:50',
            'app_key' => 'required|string|min:16',
            'timeout' => 'required|integer|min:1|max:300',
        ])
        ->body([
            // 表单控件...
        ]);
}
```

### 配置使用

在扩展中获取和使用配置：

```php
class PackageNameController extends AdminController
{
    public function index()
    {
        // 获取单个配置
        $appName = PackageNameServiceProvider::setting('app_name');
        
        // 获取所有配置
        $config = PackageNameServiceProvider::setting();
        
        // 获取嵌套配置
        $features = PackageNameServiceProvider::setting('features', []);
        
        // 检查功能是否启用
        $autoSync = in_array('auto_sync', $features);
        
        return $this->response()->success([
            'app_name' => $appName,
            'auto_sync_enabled' => $autoSync,
        ]);
    }
}
```

## 环境配置

### 开发环境

在开发环境中启用调试功能：

```php
public function customInitAfter()
{
    if (app()->environment('local')) {
        // 开发环境特定配置
        $this->loadJs('/js/debug.js');
        
        // 启用详细日志
        config(['logging.channels.single.level' => 'debug']);
    }
}
```

### 生产环境

生产环境优化配置：

```php
public function customInitAfter()
{
    if (app()->environment('production')) {
        // 生产环境优化
        $this->loadJs('/js/app.min.js');
        $this->loadCss('/css/app.min.css');
        
        // 启用缓存
        config(['cache.default' => 'redis']);
    }
}
```

## 数据库配置

### 迁移文件

扩展的数据库迁移文件放在 `database/migrations/` 目录：

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('package_name_items', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->json('config')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
            
            $table->index(['is_active', 'created_at']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('package_name_items');
    }
};
```

### 模型配置

创建对应的模型：

```php
<?php

namespace Vendor\PackageName\Models;

use Illuminate\Database\Eloquent\Model;

class PackageNameItem extends Model
{
    protected $fillable = [
        'name',
        'description', 
        'config',
        'is_active',
    ];

    protected $casts = [
        'config' => 'array',
        'is_active' => 'boolean',
    ];
}
```

## 缓存配置

### 配置缓存策略

```php
class PackageNameServiceProvider extends ServiceProvider
{
    public function customInitAfter()
    {
        // 配置扩展专用缓存
        config([
            'cache.stores.extension_cache' => [
                'driver' => 'file',
                'path' => storage_path('framework/cache/extensions/' . $this->getName()),
            ],
        ]);
    }
    
    protected function getCacheKey($key)
    {
        return $this->getName() . ':' . $key;
    }
    
    public function cacheGet($key, $default = null)
    {
        return cache()->store('extension_cache')->get($this->getCacheKey($key), $default);
    }
    
    public function cacheSet($key, $value, $ttl = 3600)
    {
        return cache()->store('extension_cache')->put($this->getCacheKey($key), $value, $ttl);
    }
}
```

## 日志配置

### 扩展专用日志

```php
public function customInitAfter()
{
    // 配置扩展日志通道
    config([
        'logging.channels.extension' => [
            'driver' => 'single',
            'path' => storage_path('logs/extensions/' . $this->getName() . '.log'),
            'level' => $this->config('log_level', 'info'),
        ],
    ]);
}

protected function log($level, $message, $context = [])
{
    \Log::channel('extension')->{$level}($message, $context);
}
```

## 安全配置

### CSRF 保护

```php
// 在路由中启用 CSRF 保护
Route::middleware(['web', 'admin.auth'])->group(function () {
    Route::post('package-name/save', [PackageNameController::class, 'save']);
});
```

### 输入验证

```php
public function save(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email',
        'config' => 'array',
    ]);
    
    // 处理验证后的数据
}
```

## 性能配置

### 资源优化

```php
public function customInitAfter()
{
    // 合并 CSS 文件
    if (app()->environment('production')) {
        $this->loadCss('/css/app.min.css');
    } else {
        $this->loadCss('/css/app.css');
        $this->loadCss('/css/debug.css');
    }
    
    // 延迟加载 JS
    $this->loadJs('/js/app.js', ['defer' => true]);
}
```

### 数据库优化

```php
// 在模型中添加索引（与本示例表结构一致）
Schema::table('package_name_items', function (Blueprint $table) {
    $table->index(['is_active', 'created_at']);
});
```

通过合理的配置，可以确保扩展在各种环境下都能稳定高效地运行。
