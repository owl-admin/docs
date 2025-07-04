# 代码生成器

:::tip 启用条件
当 `config/admin.php` 中的 `show_development_tools` 设置为 `true` 时，代码生成器将在后台开发工具菜单中显示。
:::

代码生成器是 Owl Admin 的核心功能之一，能够根据数据库表结构自动生成完整的 CRUD 代码，包括模型、控制器、服务层、数据库迁移文件等，大幅提升开发效率。

## 功能特性

### 智能代码生成
- **完整 MVC 架构**：自动生成 Model、Controller、Service 三层架构代码
- **数据库支持**：支持 MySQL、PostgreSQL、SQLite 等主流数据库
- **字段智能识别**：自动识别表字段类型并生成对应的表单组件
- **关联关系处理**：支持一对一、一对多等关联关系的代码生成

### 可视化配置
- **表单构建器**：可视化配置表单字段和验证规则
- **组件选择器**：支持 150+ Amis 组件的选择和配置
- **页面布局配置**：支持弹窗、抽屉、页面等多种展示方式
- **权限配置**：自动生成权限控制代码

### 代码管理
- **预览功能**：生成前可预览所有代码文件
- **记录管理**：保存生成记录，支持导入/导出配置
- **代码清理**：一键清理生成的代码文件
- **版本控制**：支持代码的增量更新

## 使用流程

### 1. 基础配置

**访问代码生成器**：后台 → 开发工具 → 代码生成器

**基本信息配置**：
- **表名**：选择已存在的数据库表或输入新表名
- **功能名称**：设置功能的显示名称
- **主键字段**：指定表的主键字段（默认为 `id`）
- **保存路径**：选择代码文件的保存位置

### 2. 生成选项

选择需要生成的文件类型：

| 选项 | 说明 | 生成内容 |
|------|------|----------|
| **创建数据库迁移** | 生成 Laravel 迁移文件 | `database/migrations/xxx_create_table.php` |
| **创建数据表** | 执行迁移创建表 | 在数据库中创建对应表结构 |
| **创建模型** | 生成 Eloquent 模型 | `app/Models/ModelName.php` |
| **创建控制器** | 生成控制器文件 | `app/Admin/Controllers/ControllerName.php` |
| **创建服务** | 生成服务层文件 | `app/Admin/Services/ServiceName.php` |

### 3. 字段配置

**字段属性设置**：
- **字段名称**：数据库字段名
- **字段类型**：数据类型（string、integer、text 等）
- **显示名称**：前端显示的字段标签
- **表单组件**：选择对应的 Amis 组件
- **验证规则**：设置字段验证规则
- **默认值**：字段的默认值

**组件配置**：
- **列表显示**：是否在列表页显示
- **表单显示**：是否在表单中显示
- **搜索字段**：是否作为搜索条件
- **排序字段**：是否支持排序

### 4. 路由和菜单配置

**路由设置**：
- **路由前缀**：API 路由的前缀
- **控制器命名空间**：控制器的命名空间
- **中间件**：应用的中间件

**菜单配置**：
- **菜单名称**：在后台菜单中显示的名称
- **父级菜单**：选择父级菜单位置
- **菜单图标**：使用 Iconify 图标选择器
- **排序权重**：菜单的显示顺序

### 5. 页面配置

**表单类型**：
- **弹窗表单**：在弹窗中显示表单
- **抽屉表单**：在侧边抽屉中显示表单
- **页面表单**：独立页面显示表单

**页面布局**：
- **列表页配置**：表格列、筛选器、工具栏等
- **表单页配置**：字段布局、分组、验证等
- **详情页配置**：字段显示方式和布局

## 高级功能

### 代码预览

生成代码前可预览所有文件内容：

```php
// 预览功能支持
- Controller 代码预览
- Service 代码预览
- Model 代码预览
- Migration 代码预览
```

### 记录管理

**保存配置**：每次生成都会保存配置记录，便于后续修改和复用

**导入/导出**：
- 导出配置为 JSON 格式
- 导入已有的配置文件
- 在不同环境间共享配置

**克隆记录**：基于现有记录快速创建相似功能

### 代码清理

**选择性清理**：
- 清理 Model 文件
- 清理 Controller 文件
- 清理 Service 文件
- 清理 Migration 文件
- 清理路由配置

**安全机制**：清理前会显示将要删除的文件列表，确认后执行

## 路由管理

### 自动路由生成

代码生成器会自动管理路由文件 `routes/admin.php`：

- **自动更新**：每次生成新功能时自动更新路由文件
- **增量更新**：只添加新路由，不影响现有路由
- **命名规范**：遵循 RESTful 路由命名规范

### 手动路由管理

**命令行工具**：
```bash
# 手动更新路由文件
php artisan admin:gen-route

# 清理无效路由
php artisan admin:clean-route
```

**手动配置**：
1. 生成代码时关闭"生成路由&菜单"选项
2. 在 `routes/admin.php` 中手动添加路由
3. 在后台菜单管理中手动创建菜单

### 路由结构

生成的路由遵循标准 RESTful 规范：

```php
// 自动生成的路由示例
Route::resource('users', UserController::class);
Route::get('users/{id}/show', [UserController::class, 'show']);
Route::post('users/store', [UserController::class, 'store']);
Route::put('users/{id}', [UserController::class, 'update']);
Route::delete('users/{id}', [UserController::class, 'destroy']);
```

## 数据库支持

### 支持的数据库类型

代码生成器支持多种主流数据库：

| 数据库 | 驱动 | 特性支持 |
|--------|------|----------|
| **MySQL** | `mysql` | 完整支持，包括字段注释、索引等 |
| **PostgreSQL** | `pgsql` | 支持高级数据类型和约束 |
| **SQLite** | `sqlite` | 轻量级支持，适合开发环境 |

### 字段类型映射

系统会自动将数据库字段类型映射为对应的表单组件：

| 数据库类型 | 表单组件 | 说明 |
|------------|----------|------|
| `varchar/char/text` | TextControl | 文本输入框 |
| `int/bigint` | NumberControl | 数字输入框 |
| `decimal/float` | NumberControl | 小数输入框 |
| `date/datetime` | DateTimeControl | 日期时间选择器 |
| `enum` | SelectControl | 下拉选择框 |
| `json` | JsonSchemaControl | JSON 编辑器 |
| `text/longtext` | TextareaControl | 多行文本框 |

### 表结构识别

**自动识别功能**：
- **字段属性**：自动识别字段类型、长度、默认值
- **约束条件**：识别非空、唯一、外键等约束
- **索引信息**：识别主键、普通索引、唯一索引
- **字段注释**：读取数据库字段注释作为显示标签

**智能过滤**：
- 自动跳过系统字段（`id`、`created_at`、`updated_at`、`deleted_at`）
- 识别时间戳字段并自动配置
- 处理软删除字段

## 生成的代码结构

### Model 文件

生成的模型文件包含：

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name', 'email', 'phone', 'status'
    ];

    protected $casts = [
        'status' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // 自动生成的关联关系
    public function profile()
    {
        return $this->hasOne(UserProfile::class);
    }
}
```

### Controller 文件

生成的控制器包含完整的 CRUD 操作：

```php
<?php

namespace App\Admin\Controllers;

use Slowlyo\OwlAdmin\Controllers\AdminController;

class UserController extends AdminController
{
    protected string $serviceName = UserService::class;

    public function list()
    {
        return $this->baseCRUD()
            ->filterTogglable(false)
            ->headerToolbar($this->createButton(true))
            ->columns($this->baseColumns());
    }

    public function form($isEdit = false)
    {
        return $this->baseForm()->body([
            amis()->TextControl('name', '姓名')->required(),
            amis()->EmailControl('email', '邮箱')->required(),
            amis()->TextControl('phone', '手机号'),
            amis()->SelectControl('status', '状态')
                ->options([
                    ['label' => '启用', 'value' => 1],
                    ['label' => '禁用', 'value' => 0],
                ]),
        ]);
    }
}
```

### Service 文件

生成的服务层处理业务逻辑：

```php
<?php

namespace App\Admin\Services;

use App\Models\User;
use Slowlyo\OwlAdmin\Services\AdminService;

class UserService extends AdminService
{
    protected string $modelName = User::class;

    public function listQuery()
    {
        return parent::listQuery()
            ->when(request('name'), function ($query, $name) {
                $query->where('name', 'like', "%{$name}%");
            })
            ->when(request('status'), function ($query, $status) {
                $query->where('status', $status);
            });
    }

    public function store($data)
    {
        // 自定义创建逻辑
        return parent::store($data);
    }

    public function update($primaryKey, $data)
    {
        // 自定义更新逻辑
        return parent::update($primaryKey, $data);
    }
}
```

## 最佳实践

### 1. 表设计规范

**字段命名**：
- 使用下划线命名法：`user_name`、`created_at`
- 布尔字段使用 `is_` 前缀：`is_active`、`is_deleted`
- 状态字段使用 `status` 或 `state`

**字段类型选择**：
- 主键使用 `bigint unsigned auto_increment`
- 字符串字段指定合适的长度
- 金额字段使用 `decimal` 类型
- 时间字段使用 `timestamp` 或 `datetime`

**索引设计**：
- 为常用查询字段添加索引
- 外键字段必须添加索引
- 复合索引考虑字段顺序

### 2. 代码生成策略

**分步生成**：
1. 先生成基础的 Model 和 Migration
2. 创建数据表并填充测试数据
3. 生成 Controller 和 Service
4. 最后配置路由和菜单

**配置管理**：
- 为每个功能模块保存生成配置
- 使用导出功能备份重要配置
- 在团队中共享标准配置模板

### 3. 代码定制

**生成后优化**：
- 根据业务需求调整表单验证规则
- 添加自定义的业务逻辑方法
- 优化查询性能和数据关联
- 完善错误处理和日志记录

**扩展功能**：
- 添加自定义的表单组件
- 实现复杂的数据处理逻辑
- 集成第三方服务和 API
- 添加数据导入导出功能

## 常见问题

### 生成失败

**权限问题**：
- 确保目录具有写入权限
- 检查 `storage` 和 `bootstrap/cache` 目录权限

**文件冲突**：
- 生成前检查是否存在同名文件
- 使用预览功能确认生成内容
- 必要时手动删除冲突文件

**数据库连接**：
- 确认数据库连接配置正确
- 检查数据库用户权限
- 验证表是否存在

### 代码质量

**命名规范**：
- 遵循 PSR 编码规范
- 使用有意义的类名和方法名
- 保持代码注释的完整性

**性能优化**：
- 避免 N+1 查询问题
- 合理使用数据库索引
- 实现适当的缓存策略

### 维护更新

**版本控制**：
- 将生成的代码纳入版本控制
- 记录每次生成的变更内容
- 保留重要的自定义修改

**增量更新**：
- 使用代码生成器的更新功能
- 手动合并自定义代码
- 测试更新后的功能完整性
