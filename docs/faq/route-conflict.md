# 自定义路由不生效

### 原因一：路由顺序冲突

代码生成器生成的路由使用 `resource` 方法，会自动注册 7 个 RESTful 路由：

```php
$router->resource('users', UserController::class);
// 相当于注册了：
// GET    /users          - index
// GET    /users/create   - create  
// POST   /users          - store
// GET    /users/{id}     - show
// GET    /users/{id}/edit - edit
// PUT    /users/{id}     - update
// DELETE /users/{id}     - destroy
```

如果你在 resource 路由**之后**添加自定义路由，且路径与 resource 路由冲突，自定义路由会被忽略。

### 原因二：自动生成文件被覆盖

`routes/admin.php` 是自动生成的文件，每次运行代码生成器时会被**完全重写**，手动添加的路由会丢失。

### 路由加载顺序

系统按以下顺序加载路由：

```php
1. 系统基础路由（登录、菜单、权限等）     - Admin::loadBaseRoute()
2. 扩展路由                                - Admin::extension()->boot()
3. routes/admin.php（代码生成器生成）      - loadRoutesFrom('routes/admin.php')
4. app/Admin/routes.php（自定义路由）      - loadRoutesFrom('app/Admin/routes.php')
5. 模块路由                                - loadRoutesFrom(module routes)
```

### 解决方案

**方案一：自定义路由写在 resource 之前**

```php
// ✅ 正确：自定义路由在前
$router->get('users/export', [UserController::class, 'export']);
$router->resource('users', UserController::class);
```

**方案二：使用不同的路径 (推荐)**

```php
$router->resource('users', UserController::class);
// ✅ 使用不冲突的路径
$router->get('user-export', [UserController::class, 'export']);
```

**方案三：限制 resource 路由**

```php
// 只注册需要的路由
$router->resource('users', UserController::class)->only(['index', 'store', 'update', 'destroy']);
```
