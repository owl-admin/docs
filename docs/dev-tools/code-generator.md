### 代码生成器
当 `config/amdin.php` 中的 `show_development_tools` 设置项为 `true` 时, 你会在后台菜单中看到它.

#### 使用
1. 填上你的表名
2. 填上你的功能名
3. 勾上你需要的功能或需要生成的文件
4. 配置你的字段
5. 点击提交

如果不出意外, 你应该会看到一个 `success` 的提示框, 提示内容如下
- model 文件路径
- migration 文件路径
- controller 文件路径
- service 文件路径
- migrate 执行结果

#### 生成完之后
你还需要两步:
1. 在app/Admin/routes.php 中添加你的路由
```php
	// 使用 resource , 它包含了基础功能需要的所有路由
	// 如:
    $router->resource('home', \App\Admin\Controllers\HomeController::class);
```

2. 在 [菜单管理] 功能中配置你的菜单, 链接/页面api 两项需要与你的controller中的 `$queryPath` 一致