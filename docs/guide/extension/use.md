# 扩展使用指南

## 环境准备

### 目录权限设置

在使用扩展功能之前，需要确保相关目录具有读写权限，否则可能导致扩展安装失败：

1. `项目目录/extensions` - 扩展安装目录（可通过配置 `admin.extension.dir` 修改）
2. `public/extensions` - 扩展静态资源发布目录
3. `storage/tmp` - 临时文件目录
4. `lang` - 语言包目录

### 数据库表

扩展功能依赖 `admin_extensions` 数据表，系统会自动创建该表。

## 扩展安装

Owl Admin 支持多种扩展安装方式：

### 1. 本地安装

适用于已下载的扩展包：

1. 下载扩展的 `.zip` 压缩包
2. 进入 `开发工具 > 扩展管理`
3. 点击 `本地安装` 按钮
4. 选择并上传 zip 文件
5. 系统自动解压并安装扩展

### 2. Composer 安装

适用于发布到 Packagist 的扩展：

```bash
composer require vendor/package-name
```

安装后扩展会自动注册到系统中（需在扩展的 `composer.json` 中配置 `extra.laravel.providers` 指向扩展的 ServiceProvider，详见“扩展配置指南”）。

### 3. 创建扩展

开发者可直接在管理界面创建新扩展：

1. 点击 `创建扩展` 按钮
2. 填写扩展名称（格式：`vendor/package`）
3. 填写命名空间（如：`Vendor\Package`）
4. 系统自动生成扩展骨架代码

## 扩展管理

### 启用/禁用扩展

安装后的扩展需要手动启用：

1. 在扩展列表中找到目标扩展
2. 点击 `启用` 按钮激活扩展功能
3. 可随时点击 `禁用` 暂停扩展功能

### 扩展配置

支持配置的扩展会显示 `设置` 按钮：

1. 点击扩展的 `设置` 按钮
2. 在弹出的配置表单中修改参数
3. 保存配置后立即生效

### 查看文档

每个扩展都可以查看其 README 文档：

1. 点击扩展的 `查看` 按钮
2. 在弹出窗口中阅读扩展说明

### 卸载扩展

彻底移除不需要的扩展：

1. 点击扩展的 `卸载` 按钮
2. 确认卸载操作
3. 系统会自动：
   - 回滚数据库迁移（`ServiceProvider::runMigrations(true)`）
   - 删除已发布的静态资源（`ServiceProvider::unpublishable()`）
   - 移除菜单项（`ServiceProvider::flushMenu()`）

说明：扩展配置（`Admin::setting()` 存储）不会在卸载时自动清理，如需清除，请在扩展的 `uninstall()` 中自行处理或手动清理。

## 扩展特性

### 自动发现

系统会自动扫描以下位置的扩展：

- `extensions/` 目录下的所有子目录
- 通过 Composer 安装的包（包含 `extra.owl-admin` 并通过 `extra.laravel.providers` 自动注册扩展的 ServiceProvider）

### 生命周期管理

扩展支持完整的生命周期管理：

- **安装**：运行数据库迁移，发布静态资源（`ServiceProvider::install()`）
- **启用**：刷新菜单（`ServiceProvider::doEnable(true)`）；路由与中间件由扩展的 ServiceProvider 在系统启动时统一注册，启用后刷新页面即可生效
- **禁用**：清理菜单（`ServiceProvider::doEnable(false)`），路由与中间件随扩展禁用而不执行初始化
- **卸载**：完全清理（移除菜单、取消发布静态资源），回滚迁移

### 资源管理

扩展可以包含多种资源：

- **静态资源**：CSS、JS、图片等文件
- **语言包**：多语言支持
- **数据库迁移**：表结构变更
- **菜单项**：自动导入到系统菜单

## 常见问题

### 安装失败

1. 检查目录权限是否正确
2. 确认扩展包格式是否符合规范
3. 查看错误日志获取详细信息

### 扩展不显示

1. 确认扩展已正确安装
2. 检查 `composer.json` 中的 `extra.owl-admin` 配置
3. 验证扩展类是否继承自 `ServiceProvider`

### 功能异常

1. 确认扩展已启用
2. 检查扩展配置是否正确
3. 查看扩展文档了解使用方法

## 获取更多扩展

访问 [Owl Admin 扩展市场](https://owladmin.com/ext) 获取更多官方和社区扩展。
