# v3.9.1

> 2024-07-09 14:26:17 

### 更新内容

- feat: 导出文件下载 api 增加校验
- 
### 低版本升级步骤

- 获取最新版本: `composer update slowlyo/owl-admin`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.9.1)

<br>
<br>
<br>

# v3.9.0

> 2024-07-08 17:21:11 

### 更新内容

- feat: 扩展菜单支持自定义排序 by @khs1001 in https://github.com/slowlyo/owl-admin/pull/132
- feat: 扩展菜单父级支持根据url路径对应 by @khs1001 in https://github.com/slowlyo/owl-admin/pull/133
- feat: `amis` 升级 [v6.6.0](https://github.com/baidu/amis/releases/tag/6.6.0)
- feat: 代码生成器增加克隆记录功能 🌟
- feat: 移除行内按钮的默认图标 ❗️

### 低版本升级步骤

- 获取最新版本: `composer update slowlyo/owl-admin`
- 发布前端资源: `php artisan admin:publish --assets --force`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.9.0)

<br>
<br>
<br>

# v3.8.10

> 2024-07-03 15:07:34 

### 更新内容

- fix: 代码模板内容统一
- feat: 调整默认分页控件
- feat: `config` 部分配置默认从 `env` 取值

### 低版本升级步骤

- 获取最新版本: `composer update slowlyo/owl-admin`
- 发布配置文件: `php artisan admin:publish --config --force` (可选)


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.8.10)

<br>
<br>
<br>

# v3.8.9

> 2024-07-01 09:39:13 

### 更新内容

- feat: 调整保存角色权限的路由

### 低版本升级步骤

- 获取最新版本: `composer update slowlyo/owl-admin`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.8.9)

<br>
<br>
<br>

# v3.8.8

> 2024-06-29 16:21:40 

### 更新内容

- feat: 调整 `service` 中的 `$tableColumn` (#127 )
- fix: 修复滚动区域样式异常

### 低版本升级步骤

- 获取最新版本: `composer update slowlyo/owl-admin`
- 发布前端资源: `php artisan admin:publish --assets --force`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.8.8)

<br>
<br>
<br>

# v3.8.7

> 2024-06-27 14:53:53 

## What's Changed
* 修复扩展卸载列表不更新bug by @maliang in https://github.com/slowlyo/owl-admin/pull/129


**Full Changelog**: https://github.com/slowlyo/owl-admin/compare/v3.8.6...v3.8.7

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.8.7)

<br>
<br>
<br>

# v3.8.6

> 2024-06-22 14:06:00 

### 更新内容

- feat: 优化 update 方法主键获取逻辑


### 低版本升级步骤

- 获取最新版本: `composer update slowlyo/owl-admin`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.8.6)

<br>
<br>
<br>

# v3.8.5

> 2024-06-20 17:49:14 

### 更新内容

- feat: 多语言设置区分模块
- feat: 扩展查询增加缓存机制


### 低版本升级步骤

- 获取最新版本: `composer update slowlyo/owl-admin`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.8.5)

<br>
<br>
<br>

# v3.8.4

> 2024-06-13 22:57:26 

### 更新内容

fix: 模块配置文件补充


### 低版本升级步骤

- 获取最新版本: `composer update slowlyo/owl-admin`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.8.4)

<br>
<br>
<br>

# v3.8.3

> 2024-06-13 09:39:19 

### 更新内容

- feat: 新增/修改/详情, 支持抽屉模式

### 低版本升级步骤

- 获取最新版本: `composer update slowlyo/owl-admin`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.8.3)

<br>
<br>
<br>

# v3.8.2

> 2024-06-11 23:17:01 

### 更新内容

- feat: `amis` 版本更新为 `6.5.0`

### 低版本升级步骤

- 获取最新版本: `composer update slowlyo/owl-admin`
- 发布前端资源: `php artisan admin:publish --assets --force`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.8.2)

<br>
<br>
<br>

# v3.8.1

> 2024-06-11 23:15:54 

### 更新内容

- fix: 代码生成器, 切换路径时更新对应文件路径 
- fix: 菜单管理, 父级菜单不能选择自己

### 低版本升级步骤

- 获取最新版本: `composer update slowlyo/owl-admin`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.8.1)

<br>
<br>
<br>

# v3.8.0

> 2024-06-10 01:50:09 

### 更新内容

- fix: 部分参数注释导致 phpstan 异常
- fix: api 模板目录不存在时, 无法保存模板问题
- fix: 扩展启用参数 bug (@maliang in https://github.com/slowlyo/owl-admin/pull/117)
- feat: 调整组件选择实现 (❗注意: 此项为破坏性更新, 历史数据中的组件结构将 __无法使用__)
- feat: 👏 文件上传组件, 默认支持分块上传
- feat: ✨ 代码生成器支持配置 __筛选项__

### 低版本升级步骤

- 获取最新版本: `composer update slowlyo/owl-admin`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.8.0)

<br>
<br>
<br>

# v3.7.4

> 2024-06-03 16:44:41 

### 更新内容

- fix: `laravel11` 中, 因为 `sqlite` 无法获取字段信息导致的列表报错
    

### 低版本升级步骤

- 获取最新版本: `composer update slowlyo/owl-admin`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.7.4)

<br>
<br>
<br>

# v3.7.3

> 2024-06-02 21:11:10 

### 更新内容

- feat: ❗ 调整排序字段为 `custom_order`
- fix: 部分样式问题修复
    

### 低版本升级步骤

- 获取最新版本: `composer update slowlyo/owl-admin`
- 更新: `php artisan admin:update --v=373`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.7.3)

<br>
<br>
<br>

# v3.7.2

> 2024-05-26 21:30:21 

优化代码生成器表单填充逻辑

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.7.2)

<br>
<br>
<br>

# v3.7.1

> 2024-05-25 09:01:16 

解决原有代码生成记录无法编辑保存的问题 (#114 )

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.7.1)

<br>
<br>
<br>

# v3.7.0

> 2024-05-24 23:31:19 

### 更新内容

- feat: 多语言动态切换 by @luscio in https://github.com/slowlyo/owl-admin/pull/109
    - 框架初始化默认加载中文
- feat: 框架翻译加载逻辑调整 (不用发布翻译文件也能多语言了~)
- feat: 前端部分样式优化, 部分异常样式修复
- feat: 代码生成器优化
    - 文件字段支持配置成多文件
    - 列表 created_at / updated_at 可配置是否显示
    - ✨ 增加 [常用字段] 功能  (可复用已有字段~)
    

### 低版本升级步骤

- 获取最新版本: `composer update slowlyo/owl-admin`
- 发布前端资源: `php artisan admin:publish --assets --config --force`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.7.0)

<br>
<br>
<br>

# v3.6.10

> 2024-05-22 15:15:17 

### 更新内容

- fix: 数据库迁移文件路径处理
- fix: 代码生成器, 编辑时文件路径回显问题处理
    

### 低版本升级步骤

- 获取最新版本: `composer update slowlyo/owl-admin`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.6.10)

<br>
<br>
<br>

# v3.6.9

> 2024-05-22 00:33:53 

### 更新内容

- feat: 主要字体字号 12 -> 14
    

### 低版本升级步骤

- 获取最新版本: `composer update slowlyo/owl-admin`
- 发布前端资源: `php artisan admin:publish --assets --force`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.6.9)

<br>
<br>
<br>

# v3.6.8

> 2024-05-21 23:48:30 

### 更新内容

- feat: 前端样式优化
- fix: 内容区域上边距异常问题修复
- fix: 模块配置文件 bootstrap 设置项生成错误问题
    

### 低版本升级步骤

- 获取最新版本: `composer update slowlyo/owl-admin`
- 发布前端资源: `php artisan admin:publish --assets --force`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.6.8)

<br>
<br>
<br>

# v3.6.7

> 2024-05-11 13:32:22 

- 处理 Alert 组件多语言问题

- 需要执行命令 : `php artisan admin:publish --assets --force`

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.6.7)

<br>
<br>
<br>

# v3.6.6

> 2024-05-11 09:47:36 

- 处理 Alert 组件多语言问题

- 需要执行命令 : `php artisan admin:publish --assets --force`

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.6.6)

<br>
<br>
<br>

# v3.6.5

> 2024-05-11 00:00:57 

代码生成器, 选择生成内容问题修复


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.6.5)

<br>
<br>
<br>

# v3.6.4

> 2024-05-10 14:40:56 

### 更新内容

- feat: amis 更新 v6.4.1
- feat: 调整 ide-helper 文件位置
- fix: 代码生成器勾选生成不生效的问题
- fix: 高分辨率下双栏布局样式异常问题
- fix: 文件大小超限提示问题 (#105 )
    

### 低版本升级步骤

- 获取最新版本: `composer update slowlyo/owl-admin`
- 发布前端资源: `php artisan admin:publish --assets --force`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.6.4)

<br>
<br>
<br>

# v3.6.3

> 2024-05-09 09:29:41 

## What's Changed
* 新增admin-module:init-db命令初始化模块数据库 by @maliang in https://github.com/slowlyo/owl-admin/pull/104

## New Contributors
* @maliang made their first contribution in https://github.com/slowlyo/owl-admin/pull/104

**Full Changelog**: https://github.com/slowlyo/owl-admin/compare/v3.6.2...v3.6.3

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.6.3)

<br>
<br>
<br>

# v3.6.2

> 2024-05-02 10:19:04 

代码生成器编辑页面获取数据问题修复

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.6.2)

<br>
<br>
<br>

# v3.6.1

> 2024-05-02 09:59:07 

### 更新内容

- 入口路由定义到 `app/Admin/routes.php` 中

    

### 低版本升级步骤

- 获取最新版本: `composer update slowlyo/owl-admin`
- 手动添加路由
```php
// file: app/Admin/routes.php
Route::get('/admin', fn() => \Slowlyo\OwlAdmin\Admin::view());
```


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.6.1)

<br>
<br>
<br>

# v3.6.0

> 2024-05-01 11:13:27 

### 更新内容

- feat: `admin:update` 命令根据配置连接数据库
- feat: 代码生成器优化
    - 组件属性填写优化, 组件保存操作优化
    - 增加代码清除功能, 移除 `admin:gen-code-clear` 命令
    - 生成代码按钮增加生成项选择功能
- fix: 分页下拉选项被遮挡问题 (#96)
- fix: 个人设置页面数据不更新问题
- fix: 删除按钮 confirm 弹窗多语言问题
    

### 低版本升级步骤

- 获取最新版本: `composer update slowlyo/owl-admin`
- 发布前端资源: `php artisan admin:publish --lang --force`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.6.0)

<br>
<br>
<br>

# v3.5.8

> 2024-04-16 22:24:08 

- 调整
    - 优化登录页重定向逻辑
    

- 低版本升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 发布前端资源: `php artisan admin:publish --assets --force`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.5.8)

<br>
<br>
<br>

# v3.5.7

> 2024-04-06 09:29:59 

- 调整
    - sqlite 适配
    - 处理记录 `sql` 的全局变量可能存在的内存泄漏问题
    - 修复 `toast` 在事件中无法使用的问题
    

- 低版本升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 发布前端资源: `php artisan admin:publish --assets --force`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.5.7)

<br>
<br>
<br>

# v3.5.6

> 2024-04-02 14:14:08 

- 调整
    - 新增: `admin:ide-helper` 命令, 优化开发体验
    - 修复: `fontawesome` 部分图标显示异常的问题
    

- 低版本升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 发布前端资源: `php artisan admin:publish --assets --force`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.5.6)

<br>
<br>
<br>

# v3.5.5

> 2024-04-01 15:45:01 

- 调整
    - 动态api, 查询/响应逻辑优化
    - 超管禁用选中 by @luscio in https://github.com/slowlyo/owl-admin/pull/88
    

- 低版本升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`


## New Contributors
* @luscio made their first contribution in https://github.com/slowlyo/owl-admin/pull/88

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.5.5)

<br>
<br>
<br>

# v3.5.4

> 2024-03-30 17:10:22 

- 调整
    - renderer 优化
    - queryPath 获取逻辑优化
    

- 低版本升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.5.4)

<br>
<br>
<br>

# v3.5.3

> 2024-03-30 14:16:29 

- 调整
    - amis 更新 `v6.3.0`
    - `Renderer` 优化, phpstorm 中增加部分方法的参数提示
    

- 低版本升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 发布前端资源: `php artisan admin:publish --assets --force`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.5.3)

<br>
<br>
<br>

# v3.5.2

> 2024-03-29 15:17:58 

- 调整
    - 修复: 用户设置页面, 消息提示不显示问题
    - 代码生成器消息提示优化
    - 首页模板调整
    

- 低版本升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.5.2)

<br>
<br>
<br>

# v3.5.1

> 2024-03-27 10:43:24 

- 调整
    - 修复 amis 登录模板无法使用问题
    - api 模板增加导入功能
    

- 低版本升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 发布资源: `php artisan admin:publish --assets --lang --force`



[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.5.1)

<br>
<br>
<br>

# v3.5.0

> 2024-03-26 16:00:25 

- 新增
    - 开发者工具
        - 页面管理
        - 动态 API
        - 动态关联
    - 回到顶部按钮
    - token 过期时间设置项
    
- 调整
    - 优化 queryPath 获取逻辑
    - 菜单管理增加类型: 页面
    

- 低版本升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 更新: `php artisan admin:update --v=350`



[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.5.0)

<br>
<br>
<br>

# v3.4.1

> 2024-03-20 10:46:56 

- 调整
    - add: 菜单页增加 iframe类型 by @lphkxd in https://github.com/slowlyo/owl-admin/pull/86
    - 优化 amis 页面结构加载逻辑
    

- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 更新: `php artisan admin:update --v=341`



[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.4.1)

<br>
<br>
<br>

# v3.4.0

> 2024-03-16 11:58:59 

- 调整
    - 支持 laravel 11
    - 修复amis toast 不显示问题
    - 优化图形验证码逻辑
    
- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 发布资源: `php artisan admin:publish --assets --force`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.4.0)

<br>
<br>
<br>

# v3.3.9

> 2024-03-13 10:29:26 

- 调整
    - 优化后端报错时, 前端的提示
    - 修复 `admin_resource_full_path` 方法中存在的问题
    - 优化: 列表支持自动加载多层级的关联关系

- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 发布资源: `php artisan admin:publish --assets --force`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.3.9)

<br>
<br>
<br>

# v3.3.8

> 2024-03-06 14:39:11 

- 调整
    - `admin-module:init` 命令支持一次性创建多个模块
        - eg: `php artisan admin-module:init Master Store User` 
    - admin-modules 目录及命名空间支持在 `config/admin.php` 配置文件中配置

- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.3.8)

<br>
<br>
<br>

# v3.3.7

> 2024-03-05 23:59:39 

- 调整
    - 文件上传处理辅助函数优化

- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.3.7)

<br>
<br>
<br>

# v3.3.6

> 2024-03-05 13:56:33 

- 调整
    - service  saving 问题修复
    - 系统用户 / 角色 删除增加判断

- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.3.6)

<br>
<br>
<br>

# v3.3.5

> 2024-03-02 11:21:53 

- 调整
    - 导出按钮优化, 增加 loading 效果

- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.3.5)

<br>
<br>
<br>

# v3.3.4

> 2024-03-02 00:06:30 

### ❗ 注意, 此版本更新对于 [ Excel 导出 ] 功能是破坏性的, 从低版本升级需要手动处理历史的导出逻辑代码

<br>

- 调整
    - 默认使用的 Excel 导出扩展替换为 `rap2hpoutre/fast-excel`  ( laravel-excel经常由于各种依赖版本问题导致安装失败 )
        - 新增: exportMap 方法
        - 移除: exportHeadings & exportColumns 方法
    - 优化导出菜单只能点击文字的问题

- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 发布资源: `php artisan admin:publish --lang --assets --force`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.3.4)

<br>
<br>
<br>

# v3.3.3

> 2024-03-01 10:52:28 

- 调整
    - `amis` 更新 `6.2.2`

- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 发布资源: `php artisan admin:publish --assets --force`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.3.3)

<br>
<br>
<br>

# v3.3.2

> 2024-03-01 10:11:36 

- 调整
    - `service` 中新增部分方法, 更方便重写逻辑


- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.3.2)

<br>
<br>
<br>

# v3.3.1

> 2024-02-28 23:59:37 

- 调整
    - 修复 `admin:gen-code-clear` 命令中的错误


- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.3.1)

<br>
<br>
<br>

# v3.3.0

> 2024-02-28 15:18:44 

- 调整
    - `AdminMenu` 模型中, 处理扩展的菜单多语言 (#77 )
    - 修复 `message` 不显示问题 (#76 )


- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 发布资源: `php artisan admin:publish --assets --force`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.3.0)

<br>
<br>
<br>

# v3.2.9

> 2024-02-26 13:57:49 

- 调整
    - 修复收起菜单白屏问题
    - 优化: 关闭用户认证时, 保证系统可正常使用


- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 发布资源: `php artisan admin:publish --assets --force`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.2.9)

<br>
<br>
<br>

# v3.2.8

> 2024-02-25 15:03:30 

- 调整
    - 配置文件优化: 后台数据库连接配置
    - 扩展管理: 更多扩展按钮调整
    - 代码生成器: 替换图标选择器


- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 发布资源: `php artisan admin:publish --config --force`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.2.8)

<br>
<br>
<br>

# v3.2.7

> 2024-02-22 23:27:58 

- 调整
    - 新增: 应用开启 `debug` 时, 接口响应包含 `sql` 执行记录
    - 前端优化
        - 消息气泡优化
        - 系统错误消息提示优化
        - 新增手风琴菜单


- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 发布资源: `php artisan admin:publish --assets --force`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.2.7)

<br>
<br>
<br>

# v3.2.6

> 2024-02-22 15:45:28 

- 调整
    - 重构 `modules` 功能, 弃用 `nwidart/laravel-modules`  (#73 )
    - 移除 `admin-module:update` 命令, 现在视图部分由框架自动处理
    - 各模块之间的主题配置隔离


- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`

- __❗注意__
    - 更新后, `modules` 与之前的版本并不兼容, 如果你已经使用了该功能, 需要手动迁移你的代码

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.2.6)

<br>
<br>
<br>

# v3.2.5

> 2024-02-21 09:14:31 


## What's Changed
* add: 增加生成代码可选保存指定目录 by @lphkxd in https://github.com/Slowlyo/owl-admin/pull/72

- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 执行命令: `php artisan admin:update --v=325`

**Full Changelog**: https://github.com/Slowlyo/owl-admin/compare/v3.2.4...v3.2.5

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.2.5)

<br>
<br>
<br>

# v3.2.4

> 2024-02-19 17:01:21 

- 调整
    - iconify图标选择器: 搜索逻辑本地化, 避免网络原因无法使用


- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.2.4)

<br>
<br>
<br>

# v3.2.3

> 2024-02-19 13:41:05 

- 调整
    - 增加助手函数: 多文件上传处理
    - 菜单管理优化: 列表拖拽排序、图标选择器
    - 系统用户管理: 增加启用禁用字段


- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 执行命令: `php artisan admin:update --v=323`

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.2.3)

<br>
<br>
<br>

# v3.2.2

> 2024-02-19 11:21:30 

- 调整
    - 代码生成器, 代码清理异常问题修复


- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.2.2)

<br>
<br>
<br>

# v3.2.1

> 2024-02-10 15:41:52 

- 调整
    - 首页问题修复


- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 安装 `3.2.0` 出现问题的, 在 `app/Admin/Controllers/HomeController.php`  加上 `use Slowlyo\OwlAdmin\Controllers\AdminController;`

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.2.1)

<br>
<br>
<br>

# v3.2.0

> 2024-02-07 10:22:10 

- 调整
    - 代码生成器优化: 组件值识别 `json 字符串`, 并转换为 `php 数组` (#70)
    - 框架默认首页调整: 原 `一言 卡片`, 更改为 `bing 壁纸轮播`
    - 各 `service` 移除方法返回值类型


- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`

## What's Changed
* optimize:优化代码生成器中需要用到多个数组的字段类型。 by @taotecode in https://github.com/Slowlyo/owl-admin/pull/70

## New Contributors
* @taotecode made their first contribution in https://github.com/Slowlyo/owl-admin/pull/70

**Full Changelog**: https://github.com/Slowlyo/owl-admin/compare/v3.1.11...v3.2.0

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.2.0)

<br>
<br>
<br>

# v3.1.11

> 2024-02-06 14:13:40 

- 调整
    - `listQuery` 新增: 根据 tableColumn 配置, 自动加载关联关系


- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`

## What's Changed
* add:新增自动with功能，根据column配置，字段名以 user.name 方式，只要模型定义的有user这个关联关系，即可自动启用 by @lphkxd in https://github.com/Slowlyo/owl-admin/pull/69

## New Contributors
* @lphkxd made their first contribution in https://github.com/Slowlyo/owl-admin/pull/69

**Full Changelog**: https://github.com/Slowlyo/owl-admin/compare/v3.1.10...v3.1.11

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.1.11)

<br>
<br>
<br>

# v3.1.10

> 2024-02-01 21:01:54 

- 调整
    - 菜单无法快速编辑问题修复


- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.1.10)

<br>
<br>
<br>

# v3.1.9

> 2024-01-31 23:24:18 

- 调整
    - `amis` 更新 `v6.1.0`


- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 发布资源文件: `php artisan admin:publish --assets --force`
   
- __注意:__ `v3.1.8` 版本中需要发布 `--lang` 如果跳过 `v3.1.8` 直接更新 `v3.1.9` 的, 需要发布 `--lang`

**Full Changelog**: https://github.com/Slowlyo/owl-admin/compare/v3.1.8...v3.1.9

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.1.9)

<br>
<br>
<br>

# v3.1.8

> 2024-01-31 13:37:50 

- 调整
    - 菜单增加路径唯一限制


- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 发布语言文件: `php artisan admin:publish --lang --force`

**Full Changelog**: https://github.com/Slowlyo/owl-admin/compare/v3.1.7...v3.1.8

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.1.8)

<br>
<br>
<br>

# v3.1.7

> 2024-01-28 17:38:48 

- 调整
    - 排序异常问题修复


- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`

**Full Changelog**: https://github.com/Slowlyo/owl-admin/compare/v3.1.6...v3.1.7

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.1.7)

<br>
<br>
<br>

# v3.1.6

> 2024-01-15 11:17:22 

- 调整
    - 部分代码优化



- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`

**Full Changelog**: https://github.com/Slowlyo/owl-admin/compare/v3.1.5...v3.1.6

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.1.6)

<br>
<br>
<br>

# v3.1.5

> 2024-01-11 09:26:47 

- 调整
    - 合并 PR (#63 )

- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`

## What's Changed
* 在获取数据前先过滤 null 值 by @NotMings in https://github.com/Slowlyo/owl-admin/pull/63


**Full Changelog**: https://github.com/Slowlyo/owl-admin/compare/v3.1.4...v3.1.5

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.1.5)

<br>
<br>
<br>

# v3.1.4

> 2024-01-05 09:57:28 

- 调整
    - 可独立配置 `admin` 数据库连接

- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`

***

## What's Changed
* 数据库连接可配置 by @NotMings in https://github.com/Slowlyo/owl-admin/pull/61

## New Contributors
* @NotMings made their first contribution in https://github.com/Slowlyo/owl-admin/pull/61

**Full Changelog**: https://github.com/Slowlyo/owl-admin/compare/v3.1.3...v3.1.4

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.1.4)

<br>
<br>
<br>

# v3.1.3

> 2023-12-30 22:18:43 

- 调整
    - `amis` 更新 [v6.0.0](https://github.com/baidu/amis/releases/tag/v6.0.0)
    - 修复 `v3.1.2` 产生的部分问题 (#60)



- 升级步骤
    - 为了避免产生意料以外的问题, 请删除 `/public/admin` 目录
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 发布资源: `php artisan admin:publish --assets --config --force`
        - 如果使用了 `modules` 需要执行: `php artisan admin-module:update` 

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.1.3)

<br>
<br>
<br>

# v3.1.2

> 2023-12-28 10:57:19 

- 调整
    - 更改应用访问逻辑, 适配 `laravel-debugbar`



- 升级步骤
    - 为了避免产生意料以外的问题, 请删除 `/public/admin` 目录
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 发布资源: `php artisan admin:publish --assets --config --force`
        - 如果使用了 `modules` 需要执行: `php artisan admin-module:update` 

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.1.2)

<br>
<br>
<br>

# v3.1.1

> 2023-12-28 10:55:28 

- 调整
    - 顶部菜单异常展开问题修复 (#57 )



- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 发布资源: `php artisan admin:publish --assets --force`
        - 如果使用了 `modules` 需要执行: `php artisan admin-module:update` 

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.1.1)

<br>
<br>
<br>

# v3.1.0

> 2023-12-16 14:48:13 

- 调整
    - 退出登录, 保留当前页面路径
    - 增加自定义组件 `Watermark`



- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 发布资源: `php artisan admin:publish --assets --force`
        - 如果使用了 `modules` 需要执行: `php artisan admin-module:update` 

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.1.0)

<br>
<br>
<br>

# v3.0.9

> 2023-12-16 10:45:25 

- 调整
    - 滚动条样式优化
    - `amis` 更新 [v3.6.3](https://github.com/baidu/amis/releases/tag/v3.6.3)
    - `Top` 布局菜单优化 (#54 )



- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 发布资源: `php artisan admin:publish --assets --force`
        - 如果使用了 `modules` 需要执行: `php artisan admin-module:update` 

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.0.9)

<br>
<br>
<br>

# v3.0.8

> 2023-12-01 23:02:11 

- 调整
    - 整体边框颜色减淡
    - `amis` 更新 [v3.6.1](https://github.com/baidu/amis/releases/tag/v3.6.1)



- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 发布资源: `php artisan admin:publish --assets --force`
        - 如果使用了 `modules` 需要执行: `php artisan admin-module:update` 

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.0.8)

<br>
<br>
<br>

# v3.0.7

> 2023-12-01 09:07:57 

- 调整
    - `双栏布局` 二级菜单顶部展示文字更改为 应用名称
    - 扩展管理&代码生成器, 部分框架代码优化
    - `amis` 更新 [v3.6.0](https://github.com/baidu/amis/releases/tag/v3.6.0)  (#51)



- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 发布资源: `php artisan admin:publish --assets --force`
        - 如果使用了 `modules` 需要执行: `php artisan admin-module:update` 

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.0.7)

<br>
<br>
<br>

# v3.0.6

> 2023-11-24 22:09:00 

- 调整
    - 修复 **双栏布局** 显示不完整问题
    - 补充前端代码注释


- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 发布资源: `php artisan admin:publish --assets --force`
        - 如果使用了 `modules` 需要执行: `php artisan admin-module:update` 

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.0.6)

<br>
<br>
<br>

# v3.0.5

> 2023-11-22 10:21:11 

- 调整
    - `amis` 更新 [v3.5.3](https://github.com/baidu/amis/releases/tag/v3.5.3)


- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 发布资源: `php artisan admin:publish --assets --force`
        - 如果使用了 `modules` 需要执行: `php artisan admin-module:update` 

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.0.5)

<br>
<br>
<br>

# v3.0.4

> 2023-11-13 15:21:25 

- 调整
    - `BaseRenderer` 支持 `Macro`
    - 修复无法导出 `Excel` 问题 (#49)
    - 处理 `Nav` 不会根据地址自动选中的问题

- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 发布资源: `php artisan admin:publish --assets --force`
        - 如果使用了 `modules` 需要执行: `php artisan admin-module:update` 

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.0.4)

<br>
<br>
<br>

# v3.0.3

> 2023-11-08 11:10:43 

- 新增
    - 基于 `condition-builder` 组件实现的条件组合查询
    - 代码生成器-字段配置: 新增字段配置保存功能

- 调整
    - 处理 `WangEditor` 上传文件提示登录问题
    - `laravel-modules` 适配 `v10` 版本

- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 发布资源: `php artisan admin:publish --assets --lang --force`
        - 如果使用了 `modules` 需要执行: `php artisan admin-module:update`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.0.3)

<br>
<br>
<br>

# v3.0.2

> 2023-11-02 13:59:16 

- 变更
    - `amis` 更新 [v3.5.2](https://github.com/baidu/amis/releases/tag/3.5.2)

- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 发布资源: `php artisan admin:publish --assets --force`
        - 如果使用了 `modules` 需要执行: `php artisan admin-module:update`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.0.2)

<br>
<br>
<br>

# v3.0.1

> 2023-11-02 11:19:34 

- 变更
    - 部分样式优化
    - `amis` 更新 `v3.5.1`

- 升级步骤
    - 获取最新版本: `composer update slowlyo/owl-admin`
    - 发布资源: `php artisan admin:publish --assets --force`
        - 如果使用了 `modules` 需要执行: `php artisan admin-module:update`


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.0.1)

<br>
<br>
<br>

# v3.0.0

> 2023-10-31 22:01:52 

### 调整

- __前端__
    - __整体 `layout` 重写优化__
    - 组件库由 `arco-design react` 更换为 `antd`
    - 增加全局 `loading 遮罩`
    - 增加 `深色主题`
    - 弃用 `UnoCSS`, 改用 `TailwindCSS`
    - `amis` 更新 `v3.5.0`
    - `amis` 获取页面时携带当前 url 信息 (#41)
    - 固定底部栏

- __后端__
    - 框架配置: `auth` 和 `permission` 开关分离 (#43)
    - 弃用 `amisMake()`, 由 `amis()` 替代
    - 新增 `admin_abort()` 、`admin_abort_if()` 方法

### 修复

- 多应用模式下, 设置权限不生效, 非超管无菜单 (#40)

### 从低版本升级

1. 获取最新框架代码: `composer require slowlyo/owl-admin:v3.0.0`
2. 升级框架: `php artisan admin:update --v=300` _(如有需要, 请先备份 `config/admin.php`)_
3. 全局搜索 `amisMake(` 替换为 `amis(`  (可选)

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v3.0.0)

<br>
<br>
<br>

# v2.8.2

> 2023-09-26 15:27:56 

## What's Changed
* 代码生成器与权限生成功能修复 by @wowthree in https://github.com/Slowlyo/owl-admin/pull/43

## New Contributors
* @wowthree made their first contribution in https://github.com/Slowlyo/owl-admin/pull/43

**Full Changelog**: https://github.com/Slowlyo/owl-admin/compare/v2.8.1...v2.8.2

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.8.2)

<br>
<br>
<br>

# v2.8.1

> 2023-09-01 10:05:05 

__更新 `amis  v3.4.0`__

### 更新方式
- `composer require slowlyo/owl-admin` 获取最新框架代码
- 执行 `php artisan admin:publish --assets --force` 发布前端资源

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.8.1)

<br>
<br>
<br>

# v2.8.0

> 2023-08-29 14:03:49 

### 修复

- 菜单名称重复, 导致权限自动生成失败 (#34 )
- 查询时携带排序条件, 需要清除默认排序条件 (#33 )

**Full Changelog**: https://github.com/Slowlyo/owl-admin/compare/v2.7.9...v2.8.0

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.8.0)

<br>
<br>
<br>

# v2.7.9

> 2023-08-15 21:16:18 

扩展增加 change 事件

_无需发布资源_

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.7.9)

<br>
<br>
<br>

# v2.7.8

> 2023-08-07 20:55:57 

修复控制器代码生成错误问题

_无需发布资源_

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.7.8)

<br>
<br>
<br>

# v2.7.7

> 2023-08-07 17:26:35 

修复amis更新3.3导致的部分问题

_无需发布资源_

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.7.7)

<br>
<br>
<br>

# v2.7.6

> 2023-08-01 14:09:15 

#### 更新内容

- 支持菜单参数
- 支持自定义菜单对应的组件
- 支持无菜单页面
- amis 更新 `v3.3.0`

#### 更新方式

1. `composer require slowlyo/owl-admin` 获取最新框架代码
2. 执行 `php artisan admin:update --v=276` 升级框架

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.7.6)

<br>
<br>
<br>

# v2.7.5

> 2023-07-24 14:16:23 

优化扩展管理

_无需发布资源~_

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.7.5)

<br>
<br>
<br>

# v2.7.4

> 2023-07-18 15:01:07 

管理员保存问题修复

_无需发布资源_

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.7.4)

<br>
<br>
<br>

# v2.7.3

> 2023-07-17 14:50:01 

多应用, 权限生成功能问题修复, 中间件调整


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.7.3)

<br>
<br>
<br>

# v2.7.2

> 2023-07-04 22:25:01 

#### 更新内容

- 部分框架代码调整
- 移除 Class `OwlAdmin` 
- 优化框架路由加载, 解决模块路由缓存问题

#### 更新方式

1. `composer require slowlyo/owl-admin` 获取最新框架代码

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.7.2)

<br>
<br>
<br>

# v2.7.1

> 2023-07-03 22:58:50 

#### 更新内容

- `amis` 更新 `v3.2.0`
- `crud` 支持基础快速编辑
- 由于3个富文本编辑器上传api各不相同, 移除组件内的默认的 `api` 设置

#### 更新方式

1. `composer require slowlyo/owl-admin` 获取最新框架代码
2. `php artisan admin:publish --assets --force` 发布静态资源``

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.7.1)

<br>
<br>
<br>

# v2.7.0

> 2023-07-02 22:54:52 

#### 更新内容

- ✨ 适配 `laravel-modules` , 现在可以很方便在应用中创建多个全新的后台模块了~
- 移除了控制器中的 `rowActionOnlyEditAndDelete()` 方法
- 调整 `rowActions()` 方法, 可通过向该方法的第一个参数传入 _数组_ 来自定义行操作按钮

#### 更新方式

1. `composer require slowlyo/owl-admin` 获取最新框架代码
2. `php artisan admin:publish --force` 发布静态资源

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.7.0)

<br>
<br>
<br>

# v2.6.10

> 2023-06-26 19:56:03 

修复 `v2.6.9` 引发的中间件异常的问题, 此版本无需发布资源

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.6.10)

<br>
<br>
<br>

# v2.6.9

> 2023-06-26 00:03:10 

#### 更新内容

- ✨ 增加组件鉴权, 更精细化的权限控制
- 框架中间件代码优化
- 前端弹窗提示逻辑优化

#### 更新方式

1. `composer require slowlyo/owl-admin` 获取最新框架代码
2. `php artisan admin:publish --assets --lang --force` 发布静态资源

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.6.9)

<br>
<br>
<br>

# v2.6.8

> 2023-06-24 15:58:13 

#### 更新内容

- 新增: 可动态添加菜单

#### 更新方式

1. `composer require slowlyo/owl-admin` 获取最新框架代码

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.6.8)

<br>
<br>
<br>

# v2.6.7

> 2023-06-21 00:29:28 

#### 更新内容

- ✨ 新开发工具: 可视化编辑器
- 问题修复
    - tab栏未启用时, form报错的问题
    - 编辑/详情页面面包屑不显示问题

#### 更新方式

1. `composer require slowlyo/owl-admin` 获取最新框架代码
2. `php artisan admin:publish --assets --lang --force` 发布静态资源

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.6.7)

<br>
<br>
<br>

# v2.6.6

> 2023-06-18 20:42:42 

#### 更新内容

- 移除暗色模式
- 移除无用的前端代码

#### 更新方式

1. `composer require slowlyo/owl-admin` 获取最新框架代码
2. `php artisan admin:publish --assets --config --force` 发布静态资源

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.6.6)

<br>
<br>
<br>

# v2.6.5

> 2023-06-14 17:28:47 

### 更新内容

- 菜单展开/选中逻辑优化
- amisPage增加loading动画
- 菜单管理功能中, 父级菜单选择框数据优化
- Alert 组件样式优化

### 更新方式

1. `composer require slowlyo/owl-admin` 获取最新框架代码
2. `php artisan admin:publish --assets --force` 发布静态资源

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.6.5)

<br>
<br>
<br>

# v2.6.4

> 2023-06-14 09:28:40 

### 更新内容

- 菜单样式优化
- 修复 `admin:gen-code-clear` 命令的问题

### 更新方式

1. `composer require slowlyo/owl-admin` 获取最新框架代码
2. `php artisan admin:publish --assets --force` 发布静态资源

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.6.4)

<br>
<br>
<br>

# v2.6.3

> 2023-06-09 17:00:32 

### 更新内容

- 部分样式优化
- 消息提醒优化
- 优化生成菜单生成逻辑
- 框架模型类问题修复
- 角色管理中一处多语言问题优化

### 更新方式

1. `composer require slowlyo/owl-admin` 获取最新框架代码
2. `php artisan admin:publish --assets --lang --force` 发布静态资源

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.6.3)

<br>
<br>
<br>

# v2.6.2

> 2023-06-08 17:50:00 

### 修复

- 筛选失效问题 (v2.6.0 产生的bug)
- 框架表格初始化字段补充 (v2.5.9 产生的bug, 仅新安装的应用会有该问题)

### 更新方式

1. `composer require slowlyo/owl-admin` 获取最新框架代码
2. `php artisan admin:publish --assets --force` 发布静态资源

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.6.2)

<br>
<br>
<br>

# v2.6.1

> 2023-06-07 21:36:41 

### 更新内容

- tab栏在新安装的应用中默认启用
- 优化tab栏逻辑
- 页面模式的表单/详情, 适配tab栏交互逻辑
- 新增全局js方法 `window.$owl.closeTabByPath()`

<br>

### 更新方式

1. `composer require slowlyo/owl-admin` 获取最新框架代码
2. `php artisan admin:publish --assets --force` 发布静态资源

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.6.1)

<br>
<br>
<br>

# v2.6.0

> 2023-06-06 22:45:10 

### 更新内容

- `amis` 版本更新至 `v3.1.1`
- 优化
    - 页面刷新保留查询参数
    - 优化部分硬编码

<br>

### 更新方式

1. `composer require slowlyo/owl-admin` 获取最新框架代码
2. `php artisan admin:publish --assets --config --force` 更新框架资源

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.6.0)

<br>
<br>
<br>

# v2.5.9

> 2023-06-05 15:03:11 

### 更新内容

- 代码生成器优化
    - 增加: 表单可配置为页面/弹窗, 可配置弹窗大小
    - 优化记录储存数据
    - 增加单条记录导入导出(方便生成记录共享)

### 更新方式

1. 使用 `composer require slowlyo/owl-admin` 获取最新版本 (v2.5.9)
2. 执行 `php artisan admin:update --v=259` 升级框架

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.5.9)

<br>
<br>
<br>

# v2.5.8

> 2023-06-04 22:32:17 

### 更新内容

✨ ___让一个完整的功能, 召之即来挥之即去~___

- 增加 `artisan` 命令  `admin:gen-code-clear`
    - 作用: 清除代码生成器生成的内容
        - controller 文件
        - model 文件
        - service 文件
        - migration 文件及迁移记录
        - route 文件
        - 创建的数据表
    - 使用: `php artisan admin:gen-code-clear --id=1`
        - 此处 `id` 为代码生成器生成的记录的 `id` 值

### 更新方式

- 通过 `composer` 获取最新版本
    - `composer require slowlyo/owl-admin`

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.5.8)

<br>
<br>
<br>

# v2.5.7

> 2023-06-04 01:48:29 

### 更新内容

- `amis` 升级 `v3.1.0`
- `service` 增加对 `searchable` 属性的支持
    - 原理: 判断请求参数中是否存在字段名, 如果存在则使用 `where` 进行模糊查询
- ️🧨代码生成器升级
    - 支持预览
    - 支持保存记录
    - 支持字段组件配置
    - 支持菜单/路由自动生成
- 增加 `artisan` 命令
    - `admin:update`: 框架升级 
    - `admin:gen-route`: 根据代码生成记录维护框架路由

<br>

### 更新步骤

1. 使用 `composer require slowlyo/owl-admin` 获取最新版本 (v2.5.7)
2. 执行 `php artisan admin:update --v=257` 命令升级框架
3. 执行 `php artisan cache:clear` 清除缓存 (可选)

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.5.7)

<br>
<br>
<br>

# v2.5.6

> 2023-05-17 20:49:05 

__amis 调试工具__  现在可由 `admin.show_development_tools` 控制

#### 注意

此次更新需要重新发布 assets

`php artisan admin:publish --assets --force`

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.5.6)

<br>
<br>
<br>

# v2.5.5

> 2023-05-17 10:18:50 

### 更新内容

- 框架代码优化
- 提供可追加 nav 的方法

### 注意

此次更新涉及 `config`、`lang`、`assets`、`views` 

_**全部**的资源都需要重新发布_

- __覆盖 config 前注意备份自己已有的配置信息__
- __如果自行该更了前端, 发布 views 前注意备份自己的代码__

在清楚注意事项后, 你可以直接执行以下命令

```bash
php artisan admin:publish --config --lang --assets --force

# 如果你需要自行更改前端, 则需要增加 views
php artisan admin:publish --config --lang --assets --views --force
```

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.5.5)

<br>
<br>
<br>

# v2.5.4

> 2023-05-15 08:37:30 

- 代码生成优化

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.5.4)

<br>
<br>
<br>

# v2.5.3

> 2023-05-13 20:11:31 

- 优化样式

### 注意

此次升级需要重新发布 assets

`php artisan admin:publish --assets --force`

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.5.3)

<br>
<br>
<br>

# v2.5.2

> 2023-05-13 19:50:49 

- 升级 amis v3.0
- 页面缓存逻辑优化 [#I71QJ3](https://gitee.com/slowlyo/owl-admin/issues/I71QJ3)
- 增加配置项: 配置某些路由不追加额外路由


### 注意

此次升级需要重新发布资源与配置文件

`php artisan admin:publish --assets --config --force`

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.5.2)

<br>
<br>
<br>

# v2.5.1

> 2023-05-13 19:44:47 

代码生成器问题修复


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.5.1)

<br>
<br>
<br>

# v2.5.0

> 2023-04-27 16:23:35 

修复日期组件显示英文的问题

#### 需要重新发布 assets
`php artisan admin:publish --assets --force`

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.5.0)

<br>
<br>
<br>

# v2.4.9

> 2023-04-27 13:41:33 

代码生成器使用体验优化


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.4.9)

<br>
<br>
<br>

# v2.4.8

> 2023-04-23 15:19:50 

Renderer 优化

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.4.8)

<br>
<br>
<br>

# v2.4.7

> 2023-04-23 15:18:28 

- 左侧菜单模式下菜单滚动问题修复
- Tab 增加定位当前选中项

#### 需要重新发布 assets
`php artisan admin:publish --assets --force`

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.4.7)

<br>
<br>
<br>

# v2.4.6

> 2023-04-21 09:45:20 

#### 样式优化
- 多层级菜单title不显示问题
- inputNumber 暗色悬浮背景问题
- 菜单滚动问题

#### 需要重新发布 assets
`php artisan admin:publish --assets --force`

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.4.6)

<br>
<br>
<br>

# v2.4.5

> 2023-04-20 15:53:19 

#### 优化

- 用户菜单优化
- 登录成功逻辑优化
- tab缓存逻辑优化

##### 注意

此次更新需要重新发布 `assets`
`php artisan admin:publish --assets --force`

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.4.5)

<br>
<br>
<br>

# v2.4.4

> 2023-04-20 14:48:16 

#### 修复
Tab 栏样式问题

#### 新增
- Tab 栏增加滚轮横向滚动
- ✨自定义组件: wangEditor 富文本编辑器

##### 注意

此次更新需要重新发布 `assets`
`php artisan admin:publish --assets --force`

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.4.4)

<br>
<br>
<br>

# v2.4.3

> 2023-04-19 20:24:36 

修复copy失效的问题

首页模板调整


##### 注意
 此次更新需要重新发布 `assets`

`php artisan admin:publish --assets --force`

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.4.3)

<br>
<br>
<br>

# v2.4.2

> 2023-04-19 10:06:47 

移除更多扩展中的去安装操作


[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.4.2)

<br>
<br>
<br>

# v2.4.1

> 2023-04-18 23:12:18 

移除内置的 Terminal

<br>
> 如果你任要使用, 可安装扩展包: `slowlyo/owl-terminal`

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.4.1)

<br>
<br>
<br>

# v2.4.0

> 2023-04-17 21:52:05 

Tab 关闭逻辑优化

##### 注意

此次更新需要重新发布 `assets`

`php artisan admin:publish --assets --force`

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.4.0)

<br>
<br>
<br>

# v2.3.9

> 2023-04-17 16:40:00 

✨ 新增 Tab 栏

#### 注意

此次更新需要重新发布 `assets` 和 `config`

`php artisan admin:publish --assets --config --force`

[View on GitHub](https://github.com/slowlyo/owl-admin/releases/tag/v2.3.9)

<br>
<br>
<br>
