# 模块使用指南

## 创建模块

使用 Artisan 命令快速创建模块，该命令会自动生成完整的模块结构、数据库表和基础数据。

```bash
php artisan admin-module:init <模块名>
```

**命令特性：**
- 支持同时创建多个模块：`php artisan admin-module:init Master Store`
- 模块名建议使用大驼峰命名（如：`Master`、`UserCenter`）
- 自动创建独立的数据库表（以模块名为前缀）
- 生成完整的 MVC 结构和配置文件

**示例：**
```bash
# 创建单个模块
php artisan admin-module:init Master

# 创建多个模块
php artisan admin-module:init Master Store UserCenter
```

## 配置模块

### 1. 启用模块

在 `config/admin.php` 中配置模块启用状态：

```php
'modules' => [
    'Master' => true,     // 启用 Master 模块
    'Store' => false,     // 禁用 Store 模块
    'UserCenter' => true, // 启用 UserCenter 模块
]
```

### 2. 配置自动加载

在项目根目录的 `composer.json` 中添加模块命名空间：

```json
{
    "autoload": {
        "psr-4": {
            "App\\": "app/",
            "AdminModules\\": "admin-modules/"
        }
    }
}
```

更新自动加载文件：
```bash
composer dump-autoload
```

### 3. 访问模块

模块创建完成后，可通过对应的路由前缀访问：
- Master 模块：`/master-api`
- Store 模块：`/store-api`

## 模块结构

创建模块后，系统会在项目根目录生成标准的模块目录结构：

```
admin-modules/                         # 模块根目录
└── Master/                           # 模块名目录
    ├── Controllers/                  # 控制器目录
    │   ├── AuthController.php       # 认证控制器
    │   ├── HomeController.php       # 首页控制器
    │   └── SettingController.php    # 设置控制器
    ├── Models/                      # 模型目录
    │   ├── AdminUser.php           # 管理员模型
    │   ├── AdminRole.php           # 角色模型
    │   ├── AdminMenu.php           # 菜单模型
    │   └── AdminPermission.php     # 权限模型
    ├── Services/                   # 服务层目录（可扩展）
    ├── bootstrap.php              # 模块引导文件
    ├── config.php                 # 模块配置文件
    ├── routes.php                 # 模块路由文件
    └── MasterServiceProvider.php  # 服务提供者
```

### 核心文件说明

| 文件 | 功能描述 |
|------|----------|
| `bootstrap.php` | 模块引导文件，用于注册菜单、导航等初始化操作 |
| `config.php` | 模块配置文件，包含路由、认证、上传等配置 |
| `routes.php` | 模块路由定义文件 |
| `ServiceProvider.php` | 服务提供者，处理模块的高级注册逻辑 |

## 数据库管理

### 自动创建表结构

模块初始化时会自动创建以下数据表：
- `{模块名}_admin_users` - 管理员表
- `{模块名}_admin_roles` - 角色表
- `{模块名}_admin_menus` - 菜单表
- `{模块名}_admin_permissions` - 权限表
- `{模块名}_admin_role_users` - 角色用户关联表
- `{模块名}_admin_role_permissions` - 角色权限关联表
- `{模块名}_admin_role_menus` - 角色菜单关联表

### 独立初始化数据库

如需单独初始化模块数据库（不创建文件结构）：

```bash
php artisan admin-module:init-db <模块名>
```

## 模块特性

### 独立性
- **数据隔离**：每个模块拥有独立的数据表和用户体系
- **配置隔离**：独立的认证守卫和配置文件
- **路由隔离**：通过不同的路由前缀区分模块

### 共享资源
- **前端资源**：所有模块共享同一套前端界面和组件
- **开发工具**：代码生成器和扩展功能在所有模块中通用
- **核心功能**：基础的 CRUD 操作和权限管理逻辑复用

## 模块管理

### 启用/禁用模块

通过配置文件控制模块状态：
```php
// config/admin.php
'modules' => [
    'Master' => true,  // 启用
    'Store' => false,  // 禁用
]
```

### 移除模块

**注意：移除操作不可逆，请谨慎操作**

1. **删除模块文件**：
   ```bash
   rm -rf admin-modules/ModuleName
   ```

2. **删除数据库表**：
   ```sql
   -- 删除所有以模块名为前缀的表
   DROP TABLE module_name_admin_users;
   DROP TABLE module_name_admin_roles;
   -- ... 其他相关表
   ```

3. **更新配置文件**：
   ```php
   // 从 config/admin.php 中移除模块配置
   'modules' => [
       // 'ModuleName' => true, // 删除此行
   ]
   ```
