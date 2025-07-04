# 动态关联

动态关联功能允许您在不修改模型文件的情况下，通过可视化界面为 Eloquent 模型动态添加关联关系。该功能基于 Laravel 的 `resolveRelationUsing` 方法实现，支持所有标准的 Eloquent 关联类型。

:::warning 前置要求
在使用此功能前，请确保您已经熟练掌握了 [Laravel Eloquent ORM 关联关系](https://learnku.com/docs/laravel/9.x/eloquent-relationships/12252)
:::

## 功能特性

- **可视化配置**：通过友好的界面配置复杂的关联关系
- **动态注册**：无需修改模型文件，关联关系在系统启动时自动注册
- **类型完整**：支持所有 Laravel Eloquent 关联类型
- **参数智能**：自动解析关联方法参数，提供智能提示
- **代码预览**：实时预览生成的关联方法代码
- **缓存优化**：关联配置自动缓存，提升系统性能

## 支持的关联类型

| 关联类型 | 说明 | 使用场景 |
|---------|------|----------|
| **一对一 (hasOne)** | 一个模型拥有一个关联模型 | 用户与个人资料 |
| **一对多 (hasMany)** | 一个模型拥有多个关联模型 | 文章与评论 |
| **一对多反向 (belongsTo)** | 多个模型属于一个模型 | 评论属于文章 |
| **多对多 (belongsToMany)** | 多个模型相互关联 | 用户与角色 |
| **远程一对一 (hasOneThrough)** | 通过中间模型的一对一关联 | 国家通过用户获取最新文章 |
| **远程一对多 (hasManyThrough)** | 通过中间模型的一对多关联 | 国家通过用户获取所有文章 |
| **一对一多态 (morphOne)** | 一个模型与多种类型模型的一对一关联 | 文章或用户与单张图片 |
| **一对多多态 (morphMany)** | 一个模型与多种类型模型的一对多关联 | 文章或用户与多张图片 |
| **多对多多态 (morphToMany)** | 多个模型与多种类型模型的多对多关联 | 文章或视频与标签 |

## 模型管理

### 生成模型

系统提供便捷的模型生成功能，帮助您快速为数据表创建对应的 Eloquent 模型。

**操作步骤：**

1. 点击 **"生成模型"** 按钮
2. 系统将展示所有数据表及其对应的模型状态
3. 勾选需要生成模型的数据表
4. 点击 **"生成"** 按钮

**生成规则：**
- 模型文件生成在 `app/Models` 目录下
- 类名采用表名的单数形式，遵循 StudlyCase 命名规范
- 自动继承 `Slowlyo\OwlAdmin\Models\BaseModel`
- 自动设置 `$table` 属性指向对应数据表

**生成的模型示例：**
```php
<?php

namespace App\Models;

use Slowlyo\OwlAdmin\Models\BaseModel as Model;

class User extends Model
{
    protected $table = 'users';
}
```

:::tip 提示
- 已存在模型的数据表会显示为禁用状态
- 系统会自动检测并防止重复生成
- 生成的模型可以手动扩展添加其他功能

:::

## 关联关系配置

### 新增关联关系

**配置步骤：**

1. **选择源模型**：从下拉列表中选择要添加关联的模型
2. **设置关联名称**：输入关联方法的名称（如：`comments`、`profile`）
3. **选择关联类型**：从支持的 9 种关联类型中选择合适的类型
4. **配置关联参数**：根据选择的关联类型填写相应参数
5. **添加备注说明**：可选，用于描述关联关系的用途
6. **保存配置**：系统将验证配置并保存

**参数配置说明：**

不同的关联类型需要配置不同的参数，系统会根据选择的类型动态显示对应的参数表单：

- **相关模型 (related)**：目标关联模型
- **外键 (foreignKey)**：外键字段名
- **本地键 (localKey)**：本地主键字段名
- **中间表 (table)**：多对多关联的中间表
- **中间模型 (through)**：远程关联的中间模型
- **多态名称 (name)**：多态关联的名称前缀

### 配置验证

系统在保存关联配置时会进行以下验证：

- **唯一性检查**：确保同一模型下的关联名称不重复
- **方法冲突检查**：确保关联名称不与模型现有方法冲突
- **参数有效性**：验证必填参数是否完整
- **模型存在性**：验证相关模型是否存在

### 代码预览

每个配置的关联关系都提供实时代码预览功能：

1. 点击列表中的 **"预览"** 按钮
2. 查看生成的关联方法代码
3. 确认参数配置是否正确

**预览示例：**
```php
<?php

class User extends Model
{
    public function profile() {
        return $this->hasOne('App\Models\Profile', 'user_id', 'id');
    }
}
```

## 工作原理

### 动态注册机制

动态关联基于 Laravel 的 `resolveRelationUsing` 方法实现：

1. **系统启动时**：`Relationships::boot()` 方法被调用
2. **加载配置**：从数据库读取所有关联配置（带缓存）
3. **动态注册**：为每个模型注册对应的关联方法
4. **参数解析**：通过反射自动解析并填充方法参数

### 缓存机制

为了提升性能，系统采用文件缓存存储关联配置：

- **缓存键**：`admin_relationships`
- **缓存驱动**：文件缓存
- **自动更新**：配置变更时自动清除缓存
- **异常处理**：缓存失败时降级到直接查询

### 参数构建

系统通过反射机制智能构建关联方法参数：

```php
public function buildArgs()
{
    $reflection = new \ReflectionClass($this->model);
    $params = $reflection->getMethod($this->method)->getParameters();

    $args = [];
    foreach ($params as $item) {
        $value = data_get($this->args, $item->getName());
        $args[] = [
            'name' => $item->getName(),
            'value' => filled($value) ? $value : $item->getDefaultValue(),
        ];
    }

    return $args;
}
```

## 使用示例

### 示例 1：用户与个人资料（一对一）

**场景**：每个用户有一个个人资料

**配置**：
- 源模型：`App\Models\User`
- 关联名称：`profile`
- 关联类型：一对一 (hasOne)
- 相关模型：`App\Models\Profile`
- 外键：`user_id`
- 本地键：`id`

**使用**：
```php
$user = User::find(1);
$profile = $user->profile; // 获取用户资料
```

### 示例 2：文章与评论（一对多）

**场景**：一篇文章有多个评论

**配置**：
- 源模型：`App\Models\Article`
- 关联名称：`comments`
- 关联类型：一对多 (hasMany)
- 相关模型：`App\Models\Comment`
- 外键：`article_id`
- 本地键：`id`

**使用**：
```php
$article = Article::find(1);
$comments = $article->comments; // 获取文章评论
```

### 示例 3：用户与角色（多对多）

**场景**：用户可以拥有多个角色，角色可以分配给多个用户

**配置**：
- 源模型：`App\Models\User`
- 关联名称：`roles`
- 关联类型：多对多 (belongsToMany)
- 相关模型：`App\Models\Role`
- 中间表：`user_roles`
- 外键：`user_id`
- 相关键：`role_id`

**使用**：
```php
$user = User::find(1);
$roles = $user->roles; // 获取用户角色
```

## 最佳实践

### 命名规范

- **关联名称**：使用小写字母和下划线，遵循 Laravel 约定
- **单数关联**：`profile`、`category`、`author`
- **复数关联**：`comments`、`tags`、`users`

### 性能优化

- **预加载关联**：使用 `with()` 方法避免 N+1 查询问题
- **选择性加载**：只加载需要的关联关系
- **索引优化**：为外键字段添加数据库索引

### 维护建议

- **文档记录**：在备注中详细说明关联关系的用途
- **定期检查**：定期检查关联配置的有效性
- **测试验证**：在开发环境中充分测试关联关系

## 注意事项

:::warning 重要提醒
- 动态关联在系统启动时注册，修改配置后需要清除缓存
- 确保相关模型和数据表存在，否则可能导致错误
- 复杂的关联关系建议在模型中直接定义，以获得更好的 IDE 支持
- 多态关联需要确保数据表结构符合 Laravel 规范

:::

:::tip 性能提示
- 关联配置会被缓存，生产环境中性能影响很小
- 建议在开发完成后将常用关联迁移到模型文件中
- 使用代码预览功能确认生成的关联方法正确

:::
