# Blade iframe 自定义页面

复杂页面可以使用 Blade 页面，并通过后台 iframe 菜单嵌入。

适合下面这类场景：

- 页面交互超出 amis 表达能力
- 已有 Blade 页面需要接入后台
- 页面依赖大量自定义 CSS 或 JS
- 需要复用 Laravel 视图、组件、表单和模板能力

## 创建页面

```shell
php artisan admin:make-page OrderDashboard --title=订单看板 --menu
```

命令会生成控制器、Blade 视图、独立页面路由，并可同步创建 iframe 菜单。

默认路由写入 `app/Admin/pages.php`，避免覆盖自动生成的 `routes/admin.php`。

生成后的访问关系如下：

- 后台菜单路径：`/order-dashboard`
- iframe 页面地址：`/{admin_prefix}/{route_prefix}/order-dashboard`
- 控制器：`app/Admin/Controllers/OrderDashboardController.php`
- 视图：`resources/views/admin/pages/order_dashboard.blade.php`
- 路由文件：`app/Admin/pages.php`

## 常用参数

```shell
php artisan admin:make-page OrderDashboard \
    --title=订单看板 \
    --path=/reports/order-dashboard \
    --route=reports/order-dashboard \
    --parent=10 \
    --icon=solar:chart-2-outline \
    --menu
```

- `name`：页面类名，会自动补全 `Controller`
- `--title`：页面标题和菜单标题
- `--path`：后台菜单路径
- `--route`：iframe 页面真实路由
- `--menu`：同步创建 iframe 菜单
- `--parent`：菜单父级 ID
- `--icon`：菜单图标
- `--force`：覆盖已存在的控制器和视图

## 手动接入

如果不使用命令，也可以手动添加路由和菜单。

### 添加路由

```php
<?php

use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;
use Slowlyo\OwlAdmin\Admin;

Route::group([
    'domain'     => Admin::config('admin.route.domain'),
    'prefix'     => trim(Admin::config('admin.route.prefix') . '/pages', '/'),
    'middleware' => Admin::config('admin.route.middleware'),
], function (Router $router) {
    $router->view('order-dashboard', 'admin.pages.order_dashboard');
});
```

### 添加菜单

```php
<?php

use Slowlyo\OwlAdmin\Admin;
use Slowlyo\OwlAdmin\Models\AdminMenu;

Admin::menu()->add([
    [
        'id'           => 9901,
        'title'        => '订单看板',
        'url'          => '/order-dashboard',
        'icon'         => 'solar:chart-2-outline',
        'url_type'     => AdminMenu::TYPE_IFRAME,
        'iframe_url'   => admin_url('pages/order-dashboard', true),
        'parent_id'    => 0,
        'custom_order' => 10,
    ],
]);
```

`url` 是后台前端路由地址，`iframe_url` 是 iframe 内真实加载的 Laravel 页面地址。

## Blade 页面示例

```blade
@extends('admin::layout')

@section('content')
    <div class="page">
        <h1>订单看板</h1>

        <form method="get">
            <input name="keyword" value="{{ request('keyword') }}" placeholder="订单号或客户名称">
            <button type="submit">查询</button>
        </form>

        <div class="card">
            当前筛选：{{ request('keyword', '全部') }}
        </div>
    </div>
@endsection

@push('scripts')
    <script>
        (function () {
            function reportHeight() {
                window.parent.postMessage({
                    type: 'owl:iframe-height',
                    height: document.documentElement.scrollHeight || document.body.scrollHeight
                }, window.location.origin);
            }

            window.addEventListener('load', reportHeight);
            window.addEventListener('resize', reportHeight);
            setTimeout(reportHeight, 300);
        })();
    </script>
@endpush
```

iframe 容器会接收 `owl:iframe-height` 消息，并按页面内容高度自动调整。

## 参数传递

后台地址中的 query 会自动透传给同源 iframe 页面。

例如后台访问：

```text
/order-dashboard?keyword=A1001
```

iframe 页面中可以直接读取：

```php
request('keyword')
```

## 登录状态

iframe 页面原生请求不能像接口请求一样自动附加 `Authorization` 请求头。

同源 iframe 页面会自动携带一次 `_iframe_token` 参数，后台中间件会把它转换成 Bearer Token，避免直接展示 401 JSON。

外部系统 iframe 不会自动注入 token，需要外部系统自行处理登录态。

## 配置项

可在 `config/admin.php` 的 `iframe_page` 中调整：

- `namespace`：生成的控制器命名空间
- `view_path`：生成的 Blade 视图目录
- `layout`：生成页面默认继承的 Blade layout
- `section`：生成页面默认填充的 section
- `route_prefix`：iframe 页面路由前缀

## 注意事项

- iframe 菜单类型必须使用 `AdminMenu::TYPE_IFRAME`
- `iframe_url` 建议使用 `admin_url(..., true)` 生成
- 同源 Blade 页面可以复用后台登录态和权限中间件
- 页面背景默认跟随后台普通页面背景
- iframe 顶部不会额外显示工具栏
