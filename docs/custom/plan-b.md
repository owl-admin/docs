> 这个 plan B 可能需要你有一定的查阅源码的能力
> 没几行，两下就看完了

## 重构前端

```php
// 覆盖这个路由
$router->get('/', [\Slowlyo\SlowAdmin\Controllers\IndexController::class, 'index']);

// 重写 index() 方法

public function index()
{
    // blade页面的地址
    $view = '你重新写的页面的地址';
    
    // baseApp() 中是框架的页面结构，用的 app 组件，可酌情重写（如果需要的话）
    // 不建议这么做，但是有这种操作
    return SlowAdmin::make()->baseApp()->render($view);
}
```

## 登录

重写 `app/Admin/Controllers/AuthController` 中的方法可实现以下操作

| 方法                  | 操作      |
|---------------------|---------|
| `index()`           | 登录页面    |
| `login()`           | 登录逻辑    |
| `logout()`          | 退出登录    |
| `username()`        | 用户的账号字段 |
| `userSetting()`     | 个人设置页面  |
| `saveUserSetting()` | 保存个人设置  |

## 管理员

```php
// 覆盖这个路由
$router->resource('admin_users', \Slowlyo\SlowAdmin\Controllers\AdminUserController::class);
```

## 角色

```php
// 覆盖这个路由
$router->resource('admin_roles', \Slowlyo\SlowAdmin\Controllers\AdminRoleController::class);
```

## 权限

```php
// 覆盖这个路由
$router->resource('admin_permissions', \Slowlyo\SlowAdmin\Controllers\AdminPermissionController::class);
```

## 菜单

```php
// 覆盖这个路由
$router->resource('admin_menus', \Slowlyo\SlowAdmin\Controllers\AdminMenuController::class);
```

## 页面样式

可以在 `public/vendor/admin/static/css/common.css` 文件中找到对应的 `class` 或者 css变量自行调整