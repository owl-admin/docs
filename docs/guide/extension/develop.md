# 扩展开发快速入门

> 详细的开发指南请参考 [扩展开发指南](./development.md)

## 快速创建扩展

### 使用管理界面创建

1. 进入 `开发工具 > 扩展管理`
2. 点击 `创建扩展` 按钮
3. 填写扩展信息：
   - **包名**：`vendor/package-name`（如：`slowlyo/banner`）
   - **命名空间**：`Vendor\PackageName`（如：`Slowlyo\Banner`）
4. 点击确认，系统自动生成扩展骨架

### 目录结构

```
extensions/vendor/package-name/
├── composer.json              # Composer 配置
├── README.md                  # 扩展文档
├── logo.png                   # 扩展图标（可选）
├── src/
│   ├── PackageNameServiceProvider.php  # 服务提供者
│   └── Http/
│       ├── Controllers/
│       │   └── PackageNameController.php
│       ├── Middleware/        # 中间件目录
│       └── routes.php         # 路由文件
├── database/
│   └── migrations/            # 数据库迁移
├── lang/                      # 语言包
│   ├── zh_CN/
│   └── en/
└── public/
    └── extensions/
        └── vendor/
            └── package-name/  # 静态资源
```

## 核心文件说明

### 服务提供者

扩展的核心类，继承自 `Slowlyo\OwlAdmin\Extend\ServiceProvider`：

```php
<?php

namespace Vendor\PackageName;

use Slowlyo\OwlAdmin\Renderers\TextControl;
use Slowlyo\OwlAdmin\Extend\ServiceProvider;

class PackageNameServiceProvider extends ServiceProvider
{
    // 扩展配置表单
    public function settingForm()
    {
        return $this->baseSettingForm()->body([
            TextControl::make()
                ->name('api_key')
                ->label('API Key')
                ->required(true),
        ]);
    }
}
```

### 控制器

```php
<?php

namespace Vendor\PackageName\Http\Controllers;

use Slowlyo\OwlAdmin\Controllers\AdminController;

class PackageNameController extends AdminController
{
    public function index()
    {
        $page = $this->basePage()->body([
            amis()->Card()->header(['title' => '扩展页面'])
        ]);

        return $this->response()->success($page);
    }
}
```

### 路由定义

在 `src/Http/routes.php` 中：

```php
<?php

use Illuminate\Support\Facades\Route;
use Vendor\PackageName\Http\Controllers\PackageNameController;

Route::get('package-name', [PackageNameController::class, 'index']);
```

## 常用功能

### 菜单管理

```php
// 在服务提供者中导入菜单
$this->importMenu([
    [
        'title' => '扩展菜单',
        'url' => '/package-name',
        'icon' => 'fa fa-cube',
    ]
]);
```

### 配置管理

```php
// 获取配置
$value = $this->config('api_key');

// 静态方法获取
$value = static::setting('api_key');
```

### 静态资源

```php
// 加载 CSS/JS
$this->loadCss('/css/style.css');
$this->loadJs('/js/script.js');
```

### 语言包

```php
// 使用翻译
$message = static::trans('messages.hello');
```

## 开发流程

1. **创建扩展骨架**
2. **开发功能代码**
3. **配置路由和菜单**
4. **测试功能**
5. **完善文档**
6. **打包发布**

## 调试技巧

- 使用 `\Log::info()` 记录调试信息
- 在开发环境启用详细错误信息
- 查看系统日志排查问题

## 发布扩展

### 本地打包

```bash
zip -r package-name-v1.0.0.zip . -x "*.git*" "node_modules/*" "vendor/*"
```

### 发布到 Packagist

参考 [Packagist 文档](https://packagist.org/) 将扩展发布到 Composer 仓库。

---

更多详细信息请查看 [完整开发指南](./development.md)。
