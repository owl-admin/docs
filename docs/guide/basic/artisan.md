# 内置命令

Owl Admin 提供了丰富的 Artisan 命令来简化开发和维护工作。您可以使用 `php artisan list` 查看所有可用的命令。

## 用户管理命令

### 创建管理员用户

```bash
# 交互式创建新的管理员用户
# 执行后会提示输入用户名、密码、显示名称和角色

php artisan admin:create-user
```

**使用说明：**
- 支持选择多个角色
- 密码会自动加密存储
- 创建成功后会显示确认信息
- 可通过 `--username`、`--password`、`--name`、`--roles` 非交互创建

### 重置用户密码

```bash
# 重置指定用户的密码
# 执行后会提示选择用户和输入新密码

php artisan admin:reset-password
```

**使用说明：**
- 支持用户名自动补全
- 需要二次确认密码
- 密码会自动加密存储
- 可通过 `--username`、`--password` 非交互重置

## 框架管理命令

### 安装框架

```bash
# 初始化 Owl Admin 框架
# 创建目录结构、运行数据库迁移、填充初始数据

php artisan admin:install
```

**功能说明：**
- 运行数据库迁移
- 创建管理目录结构
- 生成基础控制器文件
- 创建路由文件
- 填充初始管理员数据

### 发布框架资源

```bash
# 发布框架资源文件到项目中

php artisan admin:publish [选项]
```

**可选参数：**
- `--force`：强制覆盖已存在的文件
- `--yes`：确认执行高风险覆盖
- `--dry-run`：预览发布标签，不写入文件
- `--lang`：仅发布语言文件
- `--views`：发布前端源码（通常不需要）
- `--assets`：仅发布静态资源文件
- `--config`：仅发布配置文件

**使用示例：**
```bash
# 发布所有资源
php artisan admin:publish

# 强制发布语言和静态资源
php artisan admin:publish --force --lang --assets

# 仅发布配置文件
php artisan admin:publish --config
```

### 更新框架

```bash
# 更新框架到最新版本

php artisan admin:update [--v=版本号]
```

**可选参数：**
- `--v`：指定版本号（根据 GitHub release 填写）
- `--yes`：确认执行全部升级
- `--list`：查看当前可执行的版本升级脚本
- `--dry-run`：预览升级范围，不执行升级

**使用示例：**
```bash
# 更新到最新版本
php artisan admin:update

# 更新到指定版本
php artisan admin:update --v=257

# 查看可执行升级脚本
php artisan admin:update --list
```

**功能说明：**
- 自动发布最新资源
- 执行版本升级脚本
- 更新配置和语言文件

## 代码生成命令

### 生成路由文件

```bash
# 根据代码生成器记录生成路由文件

php artisan admin:gen-route [--excluded=排除ID]
```

**可选参数：**
- `--excluded`：排除的记录ID，多个用逗号分隔
- `--dry-run`：预览生成内容，不写入 `routes/admin.php`

**使用示例：**
```bash
# 生成所有路由
php artisan admin:gen-route

# 排除指定记录
php artisan admin:gen-route --excluded=1,2,3

# 预览生成结果
php artisan admin:gen-route --dry-run
```

**功能说明：**
- 生成的路由文件位于 `/routes/admin.php`
- 包含代码生成器创建的资源路由
- 包含自定义 API 路由
- 自动排除未启用的菜单
- 控制器或 API 模板缺失时会输出 warning
- 执行完成后会输出生成和跳过数量

:::warning 注意
代码生成器的清理功能已从命令行移至 Web 界面，请在开发工具 > 代码生成器页面中使用清理功能。
:::

## 模块管理命令

### 初始化模块

```bash
# 初始化指定的模块

php artisan admin-module:init 模块名 [模块名2 ...]
```

**使用示例：**
```bash
# 初始化单个模块
php artisan admin-module:init Master --force

# 初始化多个模块
php artisan admin-module:init Master User Product --force
```

**功能说明：**
- 创建模块数据库结构
- 生成模块基础文件
- 创建模块配置
- 填充初始数据

### 初始化模块数据库

```bash
# 仅初始化模块的数据库部分

php artisan admin-module:init-db 模块名 [模块名2 ...]
```

**使用示例：**
```bash
# 初始化模块数据库
php artisan admin-module:init-db Master --force

# 只重新填充默认数据
php artisan admin-module:init-db Master --seed-only
```

**功能说明：**
- 创建模块数据表
- 填充模块初始数据
- 不创建文件结构

## 开发工具命令

### 环境检查

```bash
# 检查系统环境和配置

php artisan admin:check [--zh]
```

**可选参数：**
- `--zh`：使用中文提示信息

**检查项目：**
- APP_KEY 配置
- 语言设置
- 数据库连接
- 框架版本信息

**使用示例：**
```bash
# 英文检查
php artisan admin:check

# 中文检查
php artisan admin:check --zh
```

### 运行健康检查

```bash
# 检查后台运行环境、核心数据表、菜单配置和前端资源

php artisan admin:doctor
```

**检查项目：**
- APP_KEY 配置
- 数据库连接
- 核心数据表
- 菜单 URL 重复
- 首页菜单数量
- 菜单父级关系
- 前端资源发布状态

## 运维命令

### 查看数据库连接

```bash
# 查看 OwlAdmin 当前使用的数据库连接

php artisan admin:db info
```

**功能说明：**
- 默认读取 `admin.database.connection`
- 可通过 `--connection=` 指定连接
- 输出连接名、驱动、主机、端口、库名和表前缀

### 查看数据表

```bash
# 查看当前连接下的数据表

php artisan admin:db tables
```

### 查看表结构

```bash
# 查看指定表字段

php artisan admin:db columns admin_menus
```

### 执行只读查询

```bash
# 执行只读 SQL

php artisan admin:db query "select id,title,url from admin_menus"
```

**使用说明：**
- 仅允许 `select`、`show`、`describe`、`desc`、`explain`、`pragma`
- `select` 未指定 `limit` 时会自动追加 `limit 50`
- 可通过 `--limit=` 调整默认返回行数

### 查看菜单树

```bash
# 查看系统菜单树

php artisan admin:menu list
```

### 查看菜单详情

```bash
# 查看指定菜单完整字段

php artisan admin:menu show 1
```

### 创建菜单

```bash
# 创建路由菜单

php artisan admin:menu create --title=demo --url=/demo --icon=mdi:view-dashboard
```

**常用参数：**
- `--title=`：菜单标题
- `--url=`：菜单 URL
- `--parent=`：父级菜单 ID
- `--icon=`：菜单图标
- `--type=`：URL 类型，`1` 路由，`2` 外链，`3` iframe，`4` 页面
- `--order=`：排序值
- `--visible=`：是否显示
- `--home=`：是否首页

### 更新菜单

```bash
# 更新菜单标题和地址

php artisan admin:menu update 1 --title=dashboard --url=/dashboard
```

### 删除菜单

```bash
# 删除菜单，存在子菜单时会拒绝删除

php artisan admin:menu delete 1

# 跳过确认
php artisan admin:menu delete 1 --force
```

### 导出菜单

```bash
# 输出到终端

php artisan admin:menu export

# 导出到 JSON 文件
php artisan admin:menu export --file=menus.json
```

### 导入菜单

```bash
# 从 JSON 文件导入菜单

php artisan admin:menu import --file=menus.json

# 跳过确认
php artisan admin:menu import --file=menus.json --force
```

### 生成 IDE 辅助文件

```bash
# 生成 IDE 智能提示文件

php artisan admin:ide-helper
```

**功能说明：**
- 生成控制器和服务的类型提示
- 提高 IDE 代码补全准确性
- 文件保存在 `config('admin.directory')/.phpstorm.meta.php` 与项目根目录 `/_admin_ide_helper.php`

## 命令使用技巧

### 1. 查看命令帮助

```bash
# 查看特定命令的详细帮助
php artisan help admin:install

# 查看命令的参数和选项
php artisan admin:publish --help
```

### 2. 批量操作

```bash
# 一次性发布多种资源
php artisan admin:publish --lang --assets --config --force

# 初始化多个模块
php artisan admin-module:init Module1 Module2 Module3
```

### 3. 开发环境快速设置

```bash
# 新项目快速初始化
php artisan admin:install
php artisan admin:create-user
php artisan admin:publish --assets
```

### 4. 生产环境部署

```bash
# 生产环境更新流程
composer update slowlyo/owl-admin
php artisan admin:update
php artisan admin:publish --assets --force
php artisan config:cache
php artisan route:cache
```

## 常见问题

### Q: 命令执行失败怎么办？

**A:** 首先检查：
1. 数据库连接是否正常
2. 文件权限是否正确
3. 使用 `php artisan admin:check` 检查环境

### Q: 如何恢复误删的文件？

**A:** 使用发布命令重新生成：
```bash
php artisan admin:publish --force
```

### Q: 模块初始化失败？

**A:** 确保：
1. 模块已正确安装
2. 数据库权限充足
3. 模块配置正确

:::info 提示
- 大部分命令支持 `--help` 参数查看详细说明
- 建议在开发环境先测试命令效果
- 生产环境执行命令前请备份重要数据

:::

:::warning 重要提醒
- 执行 `admin:install` 会执行数据库迁移；仅当管理员表为空时初始化默认账号（`admin/admin`），不会清空已有数据表
- `--force` 参数会覆盖现有文件，请确认后使用
- 模块相关命令需要先安装对应模块

:::
