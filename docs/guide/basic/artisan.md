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
- 创建路由和配置文件
- 填充初始管理员数据

### 发布框架资源

```bash
# 发布框架资源文件到项目中

php artisan admin:publish [选项]
```

**可选参数：**
- `--force`：强制覆盖已存在的文件
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

**使用示例：**
```bash
# 更新到最新版本
php artisan admin:update

# 更新到指定版本
php artisan admin:update --v=257
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

**使用示例：**
```bash
# 生成所有路由
php artisan admin:gen-route

# 排除指定记录
php artisan admin:gen-route --excluded=1,2,3
```

**功能说明：**
- 生成的路由文件位于 `/routes/admin.php`
- 包含代码生成器创建的资源路由
- 包含自定义 API 路由
- 自动排除未启用的菜单

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
php artisan admin-module:init Master

# 初始化多个模块
php artisan admin-module:init Master User Product
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
php artisan admin-module:init-db Master
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

### 生成 IDE 辅助文件

```bash
# 生成 IDE 智能提示文件

php artisan admin:ide-helper
```

**功能说明：**
- 生成控制器和服务的类型提示
- 提高 IDE 代码补全准确性
- 文件保存在 `config('admin.directory')` 目录下

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
- 执行 `admin:install` 会重置数据库，请谨慎使用
- `--force` 参数会覆盖现有文件，请确认后使用
- 模块相关命令需要先安装对应模块

:::

