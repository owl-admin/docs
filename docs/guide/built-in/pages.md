# 动态页面

动态页面是 Owl Admin 提供的一种灵活的页面管理机制，允许开发者通过可视化编辑器创建和管理页面内容，无需编写代码即可构建复杂的管理界面。

## 核心概念

### 页面标识 (Sign)
每个动态页面都有一个唯一的标识符，用于在系统中识别和调用该页面。页面标识必须是唯一的，通常使用有意义的英文字符串，如 `dashboard`、`user_profile` 等。

### 页面结构 (Schema)
页面的具体内容以 JSON Schema 格式存储，基于 amis 框架的组件规范，支持丰富的组件类型和交互功能。

## 创建动态页面

### 1. 通过开发工具创建

在管理后台的开发工具中，可以通过可视化界面创建动态页面：

1. 进入 **开发工具** → **页面管理**
2. 点击 **新增** 按钮
3. 填写页面信息：
   - **页面标题**：页面的显示名称
   - **页面标识**：页面的唯一标识符
   - **页面内容**：使用可视化编辑器设计页面结构

### 2. 页面编辑器功能

内置的页面编辑器提供了丰富的功能：
- 拖拽式组件布局
- 实时预览效果
- 组件属性配置
- 数据绑定设置
- 交互逻辑定义

## 使用动态页面

### 方法一：通过 `admin_pages()` 函数调用

在控制器中使用 `admin_pages()` 函数获取页面内容：

```php
<?php

namespace App\Admin\Controllers;

use Slowlyo\OwlAdmin\Controllers\AdminController;

class DashboardController extends AdminController
{
    public function index()
    {
        // 通过页面标识获取页面结构
        $schema = admin_pages('dashboard');

        // 返回页面数据
        return $this->response()->success($schema);
    }

    public function userProfile()
    {
        // 获取用户资料页面
        $schema = admin_pages('user_profile');

        // 可以在返回前对数据进行处理
        if (!$schema) {
            return $this->response()->fail('页面不存在');
        }

        return $this->response()->success($schema);
    }
}
```

### 方法二：直接绑定到菜单

这是最简单的使用方式，无需编写任何代码：

1. **创建菜单项**
   - 进入 **系统管理** → **菜单管理**
   - 点击 **新增** 按钮

2. **配置菜单信息**
   - **菜单标题**：显示在导航中的名称
   - **菜单图标**：选择合适的图标
   - **菜单类型**：选择 **页面**
   - **关联页面**：选择已创建的动态页面

3. **保存并生效**
   - 保存后，点击该菜单项将自动显示对应的页面内容
   - 系统会自动处理页面加载和渲染

### 方法三：在现有页面中嵌入

可以在现有的 amis 页面中嵌入动态页面：

```php
public function complexPage()
{
    $page = amis()->Page()->body([
        amis()->Alert()->body('这是一个复合页面'),

        // 嵌入动态页面
        admin_pages('embedded_content'),

        amis()->Divider(),
        amis()->Button('操作按钮', 'primary'),
    ]);

    return $this->response()->success($page);
}
```

## 高级特性

### 缓存机制

动态页面内容会被自动缓存，提高页面加载性能：
- 首次访问时从数据库读取
- 后续访问直接从缓存获取
- 页面更新时自动清除相关缓存

### 权限控制

动态页面支持完整的权限控制：
- 通过菜单权限控制页面访问
- 支持角色和用户级别的权限设置
- 可以在页面内部设置组件级权限

### 数据绑定

页面可以绑定动态数据源：

```php
public function dataPage()
{
    // 获取基础页面结构
    $schema = admin_pages('data_template');

    // 注入动态数据
    $schema['data'] = [
        'user_count' => User::count(),
        'order_total' => Order::sum('amount'),
        'recent_activities' => Activity::recent()->limit(10)->get(),
    ];

    return $this->response()->success($schema);
}
```

## 最佳实践

### 1. 命名规范
- 页面标识使用下划线分隔的小写字母
- 标识应该具有描述性，如 `user_dashboard`、`sales_report`
- 避免使用数字开头或特殊字符

### 2. 页面组织
- 按功能模块组织页面
- 使用统一的设计风格
- 合理使用组件层次结构

### 3. 性能优化
- 避免在单个页面中加载过多数据
- 合理使用分页和懒加载
- 定期清理不再使用的页面

### 4. 维护管理
- 为页面添加清晰的标题和描述
- 定期备份重要页面配置
- 建立页面变更记录机制

## 注意事项

1. **页面标识唯一性**：确保每个页面标识在系统中是唯一的
2. **数据安全**：在页面中展示敏感数据时要注意权限控制
3. **兼容性**：页面结构应该兼容不同的屏幕尺寸和设备
4. **备份恢复**：重要页面应该定期备份，避免意外丢失

通过动态页面功能，您可以快速构建功能丰富的管理界面，大大提高开发效率和系统的可维护性。
