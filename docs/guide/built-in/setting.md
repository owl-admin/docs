# 系统设置

系统设置功能提供了灵活的配置管理机制，支持动态存储和获取应用程序的各种配置参数。所有设置项都会自动缓存以提升性能，并支持模块化管理。

## 快速开始

通过 `settings()` 辅助函数可以轻松管理系统设置：

```php
// 设置单个配置项
settings()->set('site_name', 'Owl Admin');

// 获取配置项
$siteName = settings()->get('site_name', '默认站点名');

// 批量设置
settings()->setMany([
    'site_name' => 'Owl Admin',
    'site_description' => 'Laravel 后台管理系统',
    'upload_domain' => 'https://cdn.example.com',
]);
```

## 核心方法

### set - 保存设置项

保存单个设置项到数据库，并自动清除相关缓存。

```php
/**
 * @param string $key   设置项键名
 * @param mixed  $value 设置项值（支持任意类型，自动JSON序列化）
 * @return bool
 */
public function set($key, $value = null): bool

// 示例
settings()->set('site_name', 'Owl Admin');
settings()->set('mail_config', [
    'driver' => 'smtp',
    'host' => 'smtp.example.com',
    'port' => 587,
]);
```

### setMany - 批量保存设置

批量保存多个设置项，使用数据库事务确保数据一致性。

```php
/**
 * @param array $data 设置项数组，键为设置名，值为设置值
 * @return bool
 */
public function setMany(array $data): bool

// 示例
settings()->setMany([
    'site_name' => 'Owl Admin',
    'site_description' => 'Laravel 后台管理系统',
    'admin_email' => 'admin@example.com',
    'upload_config' => [
        'max_size' => '10MB',
        'allowed_types' => ['jpg', 'png', 'pdf'],
    ],
]);
```

### adminSetMany - 后台批量保存

专为后台控制器设计的批量保存方法，自动返回标准的后台响应格式。

```php
/**
 * @param array $data 设置项数组
 * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Resources\Json\JsonResource
 */
public function adminSetMany(array $data)

// 在控制器中使用
public function store(Request $request)
{
    $data = $request->only(['site_name', 'site_description', 'upload_domain']);
    return settings()->adminSetMany($data);
}
```

### get - 获取设置项

获取指定的设置项值，支持默认值和强制刷新。

```php
/**
 * @param string     $key     设置项键名
 * @param mixed|null $default 默认值
 * @param bool       $fresh   是否跳过缓存直接从数据库获取
 * @return mixed|null
 */
public function get(string $key, mixed $default = null, bool $fresh = false)

// 示例
$siteName = settings()->get('site_name', '默认站点');
$mailConfig = settings()->get('mail_config', []);

// 强制从数据库获取最新值
$freshValue = settings()->get('site_name', null, true);
```

### getByModule - 获取模块设置

获取当前模块的专属设置项，自动添加模块前缀。

```php
/**
 * @param string     $key     设置项键名
 * @param mixed|null $default 默认值
 * @param bool       $fresh   是否跳过缓存
 * @return mixed|null
 */
public function getByModule(string $key, mixed $default = null, bool $fresh = false)

// 示例：在 user 模块中调用
settings()->getByModule('theme_color', '#1890ff');
// 实际获取的是 'user_theme_color' 设置项
```

### all - 获取所有设置

以关联数组形式返回所有设置项。

```php
/**
 * @return array 所有设置项的键值对数组
 */
public function all(): array

// 示例
$allSettings = settings()->all();
// 返回：['site_name' => 'Owl Admin', 'site_description' => '...', ...]
```

### arrayGet - 获取嵌套值

从数组类型的设置项中获取指定路径的值，支持点号分隔的路径语法。

```php
/**
 * @param string $key     设置项键名
 * @param string $path    点号分隔的路径，如 'user.profile.name'
 * @param mixed  $default 默认值
 * @return mixed
 */
public function arrayGet(string $key, string $path, $default = null)

// 示例
settings()->set('user_config', [
    'profile' => [
        'name' => 'John Doe',
        'email' => 'john@example.com',
    ],
    'preferences' => [
        'theme' => 'dark',
        'language' => 'zh_CN',
    ],
]);

$userName = settings()->arrayGet('user_config', 'profile.name');
$theme = settings()->arrayGet('user_config', 'preferences.theme', 'light');
```

### del - 删除设置项

删除指定的设置项及其缓存。

```php
/**
 * @param string $key 设置项键名
 * @return bool
 */
public function del(string $key): bool

// 示例
settings()->del('old_config');
```

### clearCache - 清除缓存

清除指定设置项的缓存，下次获取时将重新从数据库读取。

```php
/**
 * @param string $key 设置项键名
 * @return void
 */
public function clearCache($key): void

// 示例
settings()->clearCache('site_name');
```

## 实际应用示例

### 创建设置页面控制器

```php
<?php

namespace App\Admin\Controllers;

use Illuminate\Http\Request;
use Slowlyo\OwlAdmin\Controllers\AdminController;

class SettingController extends AdminController
{
    public function index()
    {
        if ($this->actionOfGetData()) {
            return $this->response()->success(settings()->all());
        }

        $page = $this->basePage()->body([
            amis()->Alert()
                ->showIcon()
                ->body('系统设置页面，修改后立即生效'),
            $this->form(),
        ]);

        return $this->response()->success($page);
    }

    public function form()
    {
        return $this->baseForm(false)
            ->redirect('')
            // 也可改为 ->api(admin_url('_settings', true)) 使用内置保存接口
            ->api($this->getStorePath())
            // 读取初始化数据，推荐使用内置接口 `GET /{prefix}/_settings`
            ->initApi(admin_url('system/settings?_action=getData', true))
            ->body(
                amis()->Tabs()->tabs([
                    amis()->Tab()->title('基本设置')->body([
                        amis()->TextControl('site_name', '网站名称')
                            ->required()
                            ->placeholder('请输入网站名称'),
                        amis()->TextareaControl('site_description', '网站描述')
                            ->placeholder('请输入网站描述'),
                        amis()->TextControl('admin_email', '管理员邮箱')
                            ->format('email'),
                    ]),
                    amis()->Tab()->title('上传设置')->body([
                        amis()->TextControl('upload_domain', '上传域名')
                            ->placeholder('https://cdn.example.com'),
                        amis()->TextControl('upload_path', '上传路径')
                            ->placeholder('/uploads'),
                        amis()->NumberControl('max_upload_size', '最大上传大小(MB)')
                            ->min(1)
                            ->max(100),
                    ]),
                    amis()->Tab()->title('邮件设置')->body([
                        amis()->SelectControl('mail_driver', '邮件驱动')
                            ->options([
                                ['label' => 'SMTP', 'value' => 'smtp'],
                                ['label' => 'Sendmail', 'value' => 'sendmail'],
                            ]),
                        amis()->TextControl('mail_host', 'SMTP主机')
                            ->visibleOn('${mail_driver === "smtp"}'),
                        amis()->NumberControl('mail_port', 'SMTP端口')
                            ->visibleOn('${mail_driver === "smtp"}'),
                    ]),
                ])
            );
    }

    public function store(Request $request)
    {
        $data = $request->only([
            'site_name',
            'site_description',
            'admin_email',
            'upload_domain',
            'upload_path',
            'max_upload_size',
            'mail_driver',
            'mail_host',
            'mail_port',
        ]);

        return settings()->adminSetMany($data);
    }
}
```

### 在应用中使用设置

```php
// 在视图中显示网站名称
$siteName = settings()->get('site_name', 'Owl Admin');

// 在邮件服务中使用邮件配置
$mailConfig = settings()->get('mail_config', []);
if ($mailConfig) {
    config(['mail.mailers.smtp' => $mailConfig]);
}

// 在文件上传中使用上传设置
$uploadDomain = settings()->get('upload_domain', '');
$uploadPath = settings()->get('upload_path', '/uploads');
$maxSize = settings()->get('max_upload_size', 10) * 1024 * 1024; // 转换为字节

// 在中间件中使用设置
class CustomMiddleware
{
    public function handle($request, Closure $next)
    {
        $maintenanceMode = settings()->get('maintenance_mode', false);

        if ($maintenanceMode && !auth()->user()?->isAdmin()) {
            return response('系统维护中', 503);
        }

        return $next($request);
    }
}
```

## 数据结构

设置数据存储在 `admin_settings` 表中：

| 字段名 | 类型 | 说明 |
|--------|------|------|
| key | string | 设置项键名（主键） |
| values | json | 设置项值（JSON格式存储） |
| created_at | timestamp | 创建时间 |
| updated_at | timestamp | 更新时间 |

## 缓存机制

- 所有设置项都会自动缓存，缓存键格式为 `app_setting_{key}`
- 使用 Laravel 的永久缓存（`Cache::rememberForever`）
- 设置项更新时自动清除对应缓存
- 可通过 `clearCache()` 方法手动清除指定缓存

## 注意事项

1. **数据类型**：设置值支持任意 PHP 数据类型，会自动进行 JSON 序列化/反序列化
2. **缓存策略**：默认使用缓存提升性能，如需获取最新值请使用 `fresh` 参数
3. **事务安全**：批量操作使用数据库事务，确保数据一致性
4. **模块隔离**：使用 `getByModule()` 可实现模块间设置隔离
5. **性能考虑**：避免频繁调用 `all()` 方法，建议按需获取具体设置项
