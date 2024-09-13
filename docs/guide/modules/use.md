# 使用

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



__现在, 你可以通过 `/master` 来访问你的新模块了~__

## 目录结构

创建模块后, 会在你的应用根目录生成以下目录结构:


```
admin-modules                          # 模块根目录
└── Master
    ├── Controllers                    # 控制器目录
    │   ├── AuthController.php
    │   ├── HomeController.php
    │   ├── MasterController.php
    │   └── SettingController.php
    ├── Models                         # 模型目录
    │   ├── AdminCodeGenerator.php
    │   ├── AdminMenu.php
    │   ├── AdminPermission.php
    │   ├── AdminRole.php
    │   └── AdminUser.php
    ├── Services                       # Service 目录
    ├── bootstrap.php                  # 框架会自动加载这个文件, 可以在里面动态添加菜单或导航栏按钮
    ├── config.php                     # 模块的配置文件
    ├── MasterServiceProvider.php      # 模块的服务提供者, 可以在里面处理一些其他的高级操作
    └── routes.php                     # 模块的路由文件
```




## 数据库

- 初始化模块后, 会自动创建模块所需的数据库及基础数据
- 新建的数据表都会以 `模块名_` 为前缀



## 注意事项

- __代码生成器 / 扩展__ 这两个功能在所有模块中共通
- 所有模块与主应用都同用一套前端资源, 模块之间依靠 __接口前缀__ 区分



## 移除模块

- 手动删除模块目录  `Modules/你的模块名`
- 手动删除模块的数据库表, 它们都以 `模块名_` 为前缀
