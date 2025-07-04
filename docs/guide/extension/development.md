# 扩展开发指南

## 快速开始

### 创建扩展

使用管理界面创建扩展骨架：

1. 进入 `开发工具 > 扩展管理`
2. 点击 `创建扩展` 按钮
3. 填写扩展信息：
   - **扩展名称**：`vendor/package-name`（如：`slowlyo/notice`）
   - **命名空间**：`Vendor\PackageName`（如：`Slowlyo\Notice`）

系统会自动生成完整的扩展目录结构。

### 目录结构

```
extensions/vendor/package-name/
├── composer.json           # Composer 配置文件
├── README.md              # 扩展说明文档
├── logo.png               # 扩展图标（可选）
├── src/                   # 源代码目录
│   ├── PackageNameServiceProvider.php  # 服务提供者
│   └── Http/
│       ├── Controllers/   # 控制器目录
│       │   └── PackageNameController.php
│       └── routes.php     # 路由文件
├── database/
│   └── migrations/        # 数据库迁移文件
├── lang/                  # 语言包目录
│   ├── zh_CN/
│   └── en/
└── public/
    └── extensions/
        └── vendor/
            └── package-name/  # 静态资源目录
                ├── css/
                ├── js/
                └── images/
```

## 核心组件

### 服务提供者

扩展的核心类，继承自 `Slowlyo\OwlAdmin\Extend\ServiceProvider`：

```php
<?php

namespace Vendor\PackageName;

use Slowlyo\OwlAdmin\Renderers\TextControl;
use Slowlyo\OwlAdmin\Extend\ServiceProvider;

class PackageNameServiceProvider extends ServiceProvider
{
    /**
     * 自定义初始化前操作
     */
    public function customInitBefore()
    {
        // 在扩展初始化前执行的代码
    }

    /**
     * 自定义初始化后操作
     */
    public function customInitAfter()
    {
        // 在扩展初始化后执行的代码
        $this->loadJs('/js/app.js');
        $this->loadCss('/css/app.css');
    }

    /**
     * 扩展配置表单
     */
    public function settingForm()
    {
        return $this->baseSettingForm()->body([
            TextControl::make()
                ->name('api_key')
                ->label('API Key')
                ->required(true),
            TextControl::make()
                ->name('secret')
                ->label('Secret')
                ->required(true),
        ]);
    }
}
```

### 控制器

扩展控制器继承自 `Slowlyo\OwlAdmin\Controllers\AdminController`：

```php
<?php

namespace Vendor\PackageName\Http\Controllers;

use Slowlyo\OwlAdmin\Controllers\AdminController;

class PackageNameController extends AdminController
{
    public function index()
    {
        $page = $this->basePage()->body([
            amis()->Card()->header(['title' => '扩展页面'])->body('Hello World!')
        ]);

        return $this->response()->success($page);
    }
}
```

### 路由定义

在 `src/Http/routes.php` 中定义路由：

```php
<?php

use Illuminate\Support\Facades\Route;
use Vendor\PackageName\Http\Controllers\PackageNameController;

Route::get('package-name', [PackageNameController::class, 'index']);
```

## 高级功能

### 中间件注册

在服务提供者中注册中间件：

```php
protected $middleware = [
    'custom' => \Vendor\PackageName\Http\Middleware\CustomMiddleware::class,
];
```

### 权限路由配置

配置无需权限验证的路由：

```php
protected $exceptRoutes = [
    'permission' => [
        'package-name/public/*',
    ],
    'auth' => [
        'package-name/webhook',
    ],
];
```

### 菜单管理

扩展支持自动菜单管理，使用 `CanImportMenu` trait：

```php
// 导入菜单
$this->importMenu([
    [
        'title' => '扩展菜单',
        'url' => '/package-name',
        'icon' => 'fa fa-cube',
    ]
]);

// 刷新菜单（启用时）
$this->refreshMenu();

// 清理菜单（禁用时）
$this->flushMenu();
```

### 配置管理

扩展配置会自动保存到系统设置中：

```php
// 获取配置
$apiKey = $this->config('api_key');
$config = $this->config(); // 获取所有配置

// 静态方法获取配置
$secret = static::setting('secret');

// 保存配置
$this->saveConfig([
    'api_key' => 'new_key',
    'secret' => 'new_secret',
]);
```

### 数据库迁移

创建迁移文件：

```bash
php artisan make:migration create_package_table
```

将生成的迁移文件移动到扩展的 `database/migrations/` 目录。

扩展会自动执行迁移：
- 安装时：运行 `up()` 方法
- 卸载时：运行 `down()` 方法

### 静态资源

将静态资源放置在 `public/extensions/vendor/package-name/` 目录下：

```php
// 加载 CSS
$this->loadCss('/css/style.css');

// 加载 JS
$this->loadJs('/js/script.js');

// 获取资源 URL
$url = $this->assetUrl('/images/logo.png');
```

### 语言包

在 `lang/` 目录下创建语言文件：

```php
// lang/zh_CN/messages.php
return [
    'hello' => '你好',
    'welcome' => '欢迎使用 :name',
];

// 使用翻译
$message = static::trans('messages.hello');
$welcome = static::trans('messages.welcome', ['name' => '扩展']);
```

## 生命周期钩子

### 安装钩子

```php
public function install()
{
    parent::install();
    
    // 自定义安装逻辑
    $this->createDefaultData();
}
```

### 卸载钩子

```php
public function uninstall()
{
    // 自定义卸载逻辑
    $this->cleanupData();
    
    parent::uninstall();
}
```

### 启用/禁用钩子

```php
public function doEnable($enable = true)
{
    parent::doEnable($enable);
    
    if ($enable) {
        // 启用时的逻辑
        $this->enableFeatures();
    } else {
        // 禁用时的逻辑
        $this->disableFeatures();
    }
}
```

## 最佳实践

### 1. 命名规范

- 扩展名称：使用小写字母和连字符，如 `vendor/package-name`
- 命名空间：使用 PascalCase，如 `Vendor\PackageName`
- 类名：遵循 PSR-4 标准

### 2. 版本管理

在 `composer.json` 中正确设置版本号：

```json
{
    "version": "1.0.0",
    "extra": {
        "owl-admin": "Vendor\\PackageName\\PackageNameServiceProvider"
    }
}
```

### 3. 依赖管理

合理声明依赖关系：

```json
{
    "require": {
        "php": ">=8.1",
        "slowlyo/owl-admin": "^2.0"
    }
}
```

### 4. 错误处理

使用系统提供的错误处理机制：

```php
try {
    // 业务逻辑
} catch (\Exception $e) {
    return $this->response()->fail($e->getMessage());
}
```

### 5. 安全考虑

- 验证用户输入
- 使用 CSRF 保护
- 遵循权限控制规范
- 避免 SQL 注入

## 发布扩展

### 1. 完善文档

确保 `README.md` 包含：
- 扩展功能介绍
- 安装说明
- 使用方法
- 配置选项
- 更新日志

### 2. 测试验证

- 安装测试
- 功能测试
- 兼容性测试
- 卸载测试

### 3. 打包发布

```bash
# 创建发布包
zip -r package-name-v1.0.0.zip . -x "*.git*" "node_modules/*" "vendor/*"
```

### 4. 版本发布

- 更新版本号
- 创建 Git 标签
- 发布到 Packagist（可选）
- 提交到扩展市场

## 调试技巧

### 1. 日志记录

```php
\Log::info('Extension debug info', ['data' => $data]);
```

### 2. 开发模式

在开发环境中启用调试：

```php
if (app()->environment('local')) {
    // 开发环境特定代码
}
```

### 3. 错误追踪

使用系统提供的错误追踪功能查看详细错误信息。

## 示例扩展

参考官方示例扩展了解最佳实践：
- [通知扩展](https://github.com/slowlyo/owl-admin-notice)
- [文件管理扩展](https://github.com/slowlyo/owl-admin-file-manager)

通过以上指南，您可以快速开发出功能完善的 Owl Admin 扩展。
