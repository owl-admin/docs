---
nav: 指南
group:
    title: 模块
    order: 5
title: 使用
order: 1
---

## 创建模块

这个命令会创建 `owl-admin` 所需的文件和目录, 以及相关的数据库及基础数据
建议首字母大写, 使用大驼峰格式

```bash
php artisan admin-module:init <module-name>
# eg: php artisan admin-module:init Master
# 支持多个模块同时创建
# eg: php artisan admin-module:init Master Store
```

## 更改配置文件

```php
// file: config/admin.php

// 配置 modules
// 建议首字母大写, 大驼峰格式
// ...
'modules' => [
    'Master' => true // 在这里配置模块名, 以及启用状态
]
```

## 配置 `composer.json`

配置模块目录(admin-modules)自动加载

```json
"autoload": {
"psr-4": {
"App\\": "app/",
"AdminModules\\": "admin-modules/"
}
}
```

重新生成自动加载文件

```bash
composer dump-autoload
```

<br>

__现在, 你可以通过 `/master` 来访问你的新模块了~__

## 目录结构

创建模块后, 会在你的应用根目录生成以下目录结构:

<Tree>
    <ul>
        <li>
            admin-modules
            <small>模块根目录</small>
            <ul>
                <li>
                    Master
                    <ul>
                        <li>
                            Controllers
                            <small>控制器目录</small>
                            <ul>
                                <li>AuthController.php</li>
                                <li>HomeController.php</li>
                                <li>MasterController.php</li>
                                <li>SettingController.php</li>
                            </ul>
                        </li>
                        <li>
                            Models
                            <small>模型目录</small>
                            <ul>
                                <li>AdminCodeGenerator.php</li>
                                <li>AdminMenu.php</li>
                                <li>AdminPermission.php</li>
                                <li>AdminRole.php</li>
                                <li>AdminUser.php</li>
                            </ul>
                        </li>
                        <li>
                            Services
                            <small>Service 目录</small>
                            <ul></ul>
                        </li>
                        <li>
                            bootstrap.php
                            <small>框架会自动加载这个文件, 可以在里面动态添加菜单或导航栏按钮</small>
                        </li>
                        <li>
                            config.php
                            <small>模块的配置文件</small>
                        </li>
                        <li>
                            MasterServiceProvider.php
                            <small>模块的服务提供者, 可以在里面处理一些其他的高级操作</small>
                        </li>
                        <li>
                            routes.php
                            <small>模块的路由文件</small>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</Tree>

<br>

## 数据库

- 初始化模块后, 会自动创建模块所需的数据库及基础数据
- 新建的数据表都会以 `模块名_` 为前缀

<br>

## 注意事项

- __代码生成器 / 扩展__ 这两个功能在所有模块中共通
- 所有模块与主应用都同用一套前端资源, 模块之间依靠 __接口前缀__ 区分

<br>

## 移除模块

- 手动删除模块目录  `Modules/你的模块名`
- 手动删除模块的数据库表, 它们都以 `模块名_` 为前缀
