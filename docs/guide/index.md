# 介绍

### 项目介绍

基于 `Laravel` 、 `amis` 开发的后台框架, 快速且灵活~

- 基于 amis 以 json 的方式在后端构建页面，减少前端开发工作量，提升开发效率。
- 在 amis 150多个组件都不满足的情况下, 可自行开发前端。
- 框架为前后端分离 (不用再因为框架而束手束脚~)。



### 内置功能

- 基础后台功能
  - 后台用户管理
  - 角色管理
  - 权限管理
  - 菜单管理
- **代码生成器**
  - 保存生成记录
  - 导入/导出生成记录
  - 可使用命令清除生成的内容
  - 无需更改代码即可生成完整功能
- `amis` 全组件封装 150+ , 无需前端开发即可完成复杂页面
- 多模块支持
- 图形化扩展管理



### 截图

![登录](https://doc.owladmin.com/static/images/demo/login.png)
![首页](https://doc.owladmin.com/static/images/demo/home.png)
![可视化编辑器](https://doc.owladmin.com/static/images/demo/editor.png)



### 安装

:::warning 注意
`OwlAdmin` 是 `laravel` 的扩展包, 安装前请确保你会使用 `laravel`
:::

##### 1. 创建 `laravel` 项目

```php
composer create-project laravel/laravel example-app
```

##### 2. 配置数据库信息

```dotenv
# .env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=owl_admin
DB_USERNAME=root
DB_PASSWORD=
```

:::info{title=注意}
如果你使用的是 laravel 11 , 还需要执行: `php artisan install:api`
:::

##### 3. 获取 `Owl Admin`

```shell
composer require slowlyo/owl-admin
```

##### 4. 安装

```shell
# 先发布框架资源
php artisan admin:publish
# 执行安装 (可以在执行安装命令前在 config/admin.php 中修改部分配置)
php artisan admin:install
```

##### 5. 运行项目

启动服务, 访问 `/admin` 路由即可 
_初始账号密码都是 `admin`_



### 小白入门视频

[![入门视频](https://doc.owladmin.com/static/images/demo/video.png)](https://www.bilibili.com/video/BV18w411X7BG)



### 支持项目

你可以通过以下方式支持项目:

- 报告 Bug
- 提交 PR
  - 参见 [贡献文档](https://github.com/Slowlyo/owl-admin/blob/master/CONTRIBUTING.md)
- 点点 Star
  - 如果觉得项目不错，或者已经在使用了，希望你可以去 [Github](https://github.com/Slowlyo/owl-admin)
    或者 [Gitee](https://gitee.com/slowlyo/owl-admin) 帮我们点个 ⭐ Star，这将是对我们极大的鼓励与支持。

[![Stargazers over time](https://starchart.cc/Slowlyo/owl-admin.svg?variant=adaptive)](https://github.com/Slowlyo/owl-admin)



