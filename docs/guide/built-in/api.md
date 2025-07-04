# 动态 API

动态 API 是 Owl Admin 提供的零代码接口解决方案，通过可视化配置快速创建和管理 API 接口，无需编写控制器代码即可实现常见的数据操作功能。

## 核心特性

- **零代码开发**：通过可视化界面配置 API，无需编写代码
- **模板化设计**：基于预定义模板快速创建标准化接口
- **动态路由**：自动注册路由到 `routes/admin.php` 文件
- **参数化配置**：支持灵活的参数配置和验证
- **扩展性强**：支持自定义 API 模板

## 使用场景

- **选项数据接口**：为 `select`、`radios`、`checkboxes` 等组件提供动态选项
- **简单 CRUD 操作**：快速实现数据的增删改查功能
- **配置数据管理**：系统设置的读取和保存
- **数据列表查询**：带分页、筛选的数据列表接口
- **原型开发**：快速搭建接口原型进行功能验证

## 路由规则

动态 API 创建后会自动注册路由：

- **管理后台访问**：`/admin-api/{路径}`
- **模块化访问**：`/{模块}-api/{路径}`
- **可视化编辑器**：直接使用配置的路径，无需前缀


## 内置 API 模板

系统提供了多个开箱即用的 API 模板：

| 模板名称 | 请求方法 | 功能描述 | 适用场景 |
|---------|---------|---------|---------|
| **OptionsApi** | GET | 获取选项列表 | 下拉框、单选框等组件的数据源 |
| **DataListApi** | GET | 获取数据列表 | 表格数据展示，支持分页和筛选 |
| **DataCreateApi** | POST | 创建数据记录 | 表单提交创建新记录 |
| **DataUpdateApi** | PUT | 更新数据记录 | 表单提交更新现有记录 |
| **DataDeleteApi** | DELETE | 删除数据记录 | 批量或单个删除操作 |
| **DataDetailApi** | GET | 获取数据详情 | 查看单条记录详细信息 |
| **GetSettingsApi** | GET | 获取系统设置 | 读取配置项数据 |
| **SaveSettingsApi** | POST | 保存系统设置 | 批量保存配置项 |

## 创建自定义 API 模板

### 方式一：社区模板

访问 [GitHub Discussions](https://github.com/slowlyo/owl-admin/discussions/categories/%E5%8A%A8%E6%80%81-api-%E6%A8%A1%E6%9D%BF) 获取社区分享的 API 模板。

### 方式二：手动创建

1. 在 `app/ApiTemplates` 目录下创建新的 PHP 类
2. 继承 `Slowlyo\OwlAdmin\Support\Apis\AdminBaseApi` 基类
3. 实现 `AdminApiInterface` 接口的必需方法

### 基础结构

```php
<?php

namespace App\ApiTemplates;

use Slowlyo\OwlAdmin\Support\Apis\AdminBaseApi;

class CustomApi extends AdminBaseApi
{
    /** @var string HTTP 请求方法 */
    public string $method = 'get';

    /** @var string API 模板名称 */
    public string $title = '自定义接口';

    /**
     * 获取模板名称（可选，优先级高于 $title 属性）
     */
    public function getTitle(): string
    {
        return '自定义接口模板';
    }

    /**
     * 接口处理逻辑（必须实现）
     *
     * @return mixed
     */
    public function handle()
    {
        // 获取配置参数
        $model = $this->getArgs('model');
        $fields = $this->getArgs('fields', ['*']);

        // 执行业务逻辑
        $data = $this->service()->query()->get($fields);

        // 返回响应
        return Admin::response()->success($data);
    }

    /**
     * 参数配置表单（必须实现）
     *
     * @return array Amis 表单结构
     */
    public function argsSchema(): array
    {
        return [
            amis()->SelectControl('model', '数据模型')
                ->required()
                ->menuTpl('${label} <span class="text-gray-300 pl-2">${table}</span>')
                ->source('/dev_tools/relation/model_options')
                ->searchable(),
            amis()->TextControl('fields', '查询字段')
                ->placeholder('多个字段用逗号分隔，默认为 *')
                ->description('指定要查询的字段，如：id,name,email'),
        ];
    }

    /**
     * 获取服务实例
     */
    protected function service()
    {
        $service = $this->blankService();
        $service->setModelName($this->getArgs('model'));
        return $service;
    }
}
```

## 核心方法详解

### 必须实现的方法

#### `handle()` - 接口处理逻辑
- **作用**：定义 API 的核心业务逻辑
- **返回值**：可以是任意数据类型，建议使用 `Admin::response()` 包装
- **示例**：
```php
public function handle()
{
    $data = $this->service()->list();
    return Admin::response()->success($data);
}
```

#### `argsSchema()` - 参数配置表单
- **作用**：定义 API 创建时的参数配置表单
- **返回值**：Amis 表单组件数组
- **示例**：
```php
public function argsSchema(): array
{
    return [
        amis()->TextControl('name', '名称')->required(),
        amis()->SelectControl('type', '类型')->options([
            ['label' => '类型1', 'value' => 'type1'],
            ['label' => '类型2', 'value' => 'type2'],
        ]),
    ];
}
```

### 可选配置属性

#### `$method` - HTTP 请求方法
```php
public string $method = 'get'; // 支持：get, post, put, delete, patch, options, head, any
```

#### `$title` - 模板名称
```php
public string $title = 'API 模板名称';
```

### 辅助方法

#### `getArgs()` - 获取配置参数
```php
// 获取所有参数
$allArgs = $this->getArgs();

// 获取指定参数
$model = $this->getArgs('model');

// 获取嵌套参数，支持点语法
$value = $this->getArgs('config.database.host', 'localhost');
```

#### `blankService()` - 获取空白服务实例
```php
$service = $this->blankService();
$service->setModelName('App\\Models\\User');
```

#### `getApiRecord()` - 获取 API 记录
```php
$apiRecord = $this->getApiRecord();
echo $apiRecord->path; // API 路径
echo $apiRecord->args; // 配置参数
```

## 实际应用示例

### 示例 1：选项列表 API

适用于为下拉框、单选框等组件提供数据源：

```php
<?php

namespace App\ApiTemplates;

use Slowlyo\OwlAdmin\Admin;
use Slowlyo\OwlAdmin\Support\Apis\AdminBaseApi;

class OptionsApi extends AdminBaseApi
{
    public string $method = 'get';
    public string $title = '获取选项列表';

    public function handle()
    {
        $valueField = $this->getArgs('value_field', 'id');
        $labelField = $this->getArgs('label_field', 'name');
        $condition = $this->getArgs('condition', []);

        $query = $this->service()->query();

        // 应用筛选条件
        foreach ($condition as $field => $value) {
            if ($value !== null && $value !== '') {
                $query->where($field, $value);
            }
        }

        $data = $query->get([
            $valueField . ' as value',
            $labelField . ' as label'
        ]);

        return Admin::response()->success($data);
    }

    public function argsSchema(): array
    {
        return [
            amis()->SelectControl('model', '数据模型')
                ->required()
                ->menuTpl('${label} <span class="text-gray-300 pl-2">${table}</span>')
                ->source('/dev_tools/relation/model_options')
                ->searchable(),
            amis()->TextControl('value_field', 'Value 字段')
                ->required()
                ->value('id')
                ->source('/dev_tools/relation/column_options?model=${model}'),
            amis()->TextControl('label_field', 'Label 字段')
                ->required()
                ->value('name')
                ->source('/dev_tools/relation/column_options?model=${model}'),
            amis()->ComboControl('condition', '筛选条件')
                ->items([
                    amis()->TextControl('field', '字段名'),
                    amis()->TextControl('value', '字段值'),
                ])
                ->multiple()
                ->description('可添加多个筛选条件'),
        ];
    }

    protected function service()
    {
        $service = $this->blankService();
        $service->setModelName($this->getArgs('model'));
        return $service;
    }
}
```

### 示例 2：统计数据 API

用于获取各种统计信息：

```php
<?php

namespace App\ApiTemplates;

use Slowlyo\OwlAdmin\Admin;
use Slowlyo\OwlAdmin\Support\Apis\AdminBaseApi;

class StatisticsApi extends AdminBaseApi
{
    public string $method = 'get';
    public string $title = '统计数据接口';

    public function handle()
    {
        $model = $this->getArgs('model');
        $groupBy = $this->getArgs('group_by');
        $countField = $this->getArgs('count_field', '*');
        $dateRange = $this->getArgs('date_range');

        $query = $this->service()->query();

        // 日期范围筛选
        if ($dateRange && isset($dateRange['start'], $dateRange['end'])) {
            $dateField = $this->getArgs('date_field', 'created_at');
            $query->whereBetween($dateField, [$dateRange['start'], $dateRange['end']]);
        }

        // 分组统计
        if ($groupBy) {
            $data = $query->selectRaw("{$groupBy}, COUNT({$countField}) as count")
                         ->groupBy($groupBy)
                         ->get();
        } else {
            $data = ['total' => $query->count()];
        }

        return Admin::response()->success($data);
    }

    public function argsSchema(): array
    {
        return [
            amis()->SelectControl('model', '数据模型')
                ->required()
                ->menuTpl('${label} <span class="text-gray-300 pl-2">${table}</span>')
                ->source('/dev_tools/relation/model_options')
                ->searchable(),
            amis()->SelectControl('group_by', '分组字段')
                ->source('/dev_tools/relation/column_options?model=${model}')
                ->description('不选择则返回总数'),
            amis()->TextControl('count_field', '统计字段')
                ->value('*')
                ->description('默认为 * (计数)'),
            amis()->TextControl('date_field', '日期字段')
                ->value('created_at')
                ->source('/dev_tools/relation/column_options?model=${model}'),
            amis()->DateRangeControl('date_range', '日期范围')
                ->format('YYYY-MM-DD')
                ->description('可选的日期筛选范围'),
        ];
    }

    protected function service()
    {
        $service = $this->blankService();
        $service->setModelName($this->getArgs('model'));
        return $service;
    }
}
```

## 高级用法

### 请求参数处理

在 `handle()` 方法中可以获取和处理各种请求参数：

```php
public function handle()
{
    // 获取 URL 参数
    $id = request('id');
    $page = request('page', 1);

    // 获取所有请求数据
    $requestData = request()->all();

    // 获取配置参数
    $model = $this->getArgs('model');

    // 结合使用
    $query = $this->service()->query();

    if ($id) {
        $query->where('id', $id);
    }

    return Admin::response()->success($query->paginate($page));
}
```

### 错误处理

```php
public function handle()
{
    try {
        $model = $this->getArgs('model');

        if (!$model) {
            return Admin::response()->fail('模型参数不能为空');
        }

        if (!class_exists($model)) {
            return Admin::response()->fail('指定的模型不存在');
        }

        $data = $this->service()->list();

        return Admin::response()->success($data);

    } catch (\Exception $e) {
        return Admin::response()->fail('操作失败：' . $e->getMessage());
    }
}
```

### 数据验证

```php
public function handle()
{
    // 验证必需参数
    $rules = [
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:users',
        'age' => 'integer|min:18|max:100',
    ];

    $validator = validator(request()->all(), $rules);

    if ($validator->fails()) {
        return Admin::response()->fail('验证失败', $validator->errors());
    }

    // 继续处理...
    $result = $this->service()->store(request()->all());

    return Admin::response()->success($result);
}
```

### 复杂查询构建

```php
public function handle()
{
    $query = $this->service()->query();

    // 关联查询
    $with = $this->getArgs('with', []);
    if ($with) {
        $query->with($with);
    }

    // 条件筛选
    $filters = request('filters', []);
    foreach ($filters as $field => $value) {
        if ($value !== null && $value !== '') {
            if (is_array($value)) {
                $query->whereIn($field, $value);
            } else {
                $query->where($field, 'like', "%{$value}%");
            }
        }
    }

    // 排序
    $orderBy = request('orderBy', 'id');
    $orderDir = request('orderDir', 'desc');
    $query->orderBy($orderBy, $orderDir);

    // 分页
    $perPage = request('perPage', 15);
    $data = $query->paginate($perPage);

    return Admin::response()->success($data);
}
```

## 最佳实践

### 1. 命名规范

- **类名**：使用 PascalCase，以 `Api` 结尾，如 `UserOptionsApi`
- **方法名**：使用 camelCase，语义明确
- **参数名**：使用 snake_case，与数据库字段保持一致

### 2. 参数设计

```php
public function argsSchema(): array
{
    return [
        // 必需参数放在前面
        amis()->SelectControl('model', '数据模型')->required(),

        // 提供默认值
        amis()->NumberControl('per_page', '每页数量')->value(15),

        // 添加描述说明
        amis()->TextControl('fields', '查询字段')
            ->placeholder('id,name,email')
            ->description('多个字段用逗号分隔'),

        // 使用动态数据源
        amis()->SelectControl('status', '状态')
            ->source('/api/status-options'),
    ];
}
```

### 3. 性能优化

```php
public function handle()
{
    $query = $this->service()->query();

    // 只查询需要的字段
    $fields = $this->getArgs('fields', ['id', 'name']);
    $query->select($fields);

    // 避免 N+1 查询
    $with = $this->getArgs('with', []);
    if ($with) {
        $query->with($with);
    }

    // 使用索引字段进行筛选
    $indexedField = $this->getArgs('indexed_field');
    if ($indexedField) {
        $query->where($indexedField, request($indexedField));
    }

    return Admin::response()->success($query->get());
}
```

### 4. 安全考虑

```php
public function handle()
{
    // 验证模型权限
    $model = $this->getArgs('model');
    $allowedModels = ['App\\Models\\User', 'App\\Models\\Post'];

    if (!in_array($model, $allowedModels)) {
        return Admin::response()->fail('无权访问该模型');
    }

    // 过滤敏感字段
    $sensitiveFields = ['password', 'secret_key', 'token'];
    $fields = array_diff($this->getArgs('fields', ['*']), $sensitiveFields);

    $data = $this->service()->query()->get($fields);

    return Admin::response()->success($data);
}
```

## 注意事项

### 1. 路径冲突

- API 路径不能与现有路由冲突
- 避免使用系统保留路径（如 `admin`、`api` 等）
- 建议使用有意义的路径名称

### 2. 参数验证

- 在 `argsSchema()` 中定义完整的参数验证规则
- 在 `handle()` 方法中进行二次验证
- 对用户输入进行适当的过滤和转义

### 3. 错误处理

- 使用统一的错误响应格式
- 记录详细的错误日志便于调试
- 向用户返回友好的错误信息

### 4. 性能考虑

- 避免在循环中执行数据库查询
- 合理使用缓存机制
- 对大数据量查询进行分页处理

### 5. 安全性

- 验证用户权限和数据访问范围
- 过滤敏感数据字段
- 防止 SQL 注入和其他安全漏洞

## 调试技巧

### 1. 日志记录

```php
public function handle()
{
    \Log::info('API 调用', [
        'template' => static::class,
        'args' => $this->getArgs(),
        'request' => request()->all(),
    ]);

    // 业务逻辑...
}
```

### 2. 开发模式调试

```php
public function handle()
{
    if (config('app.debug')) {
        return Admin::response()->success([
            'debug_info' => [
                'args' => $this->getArgs(),
                'request' => request()->all(),
                'sql' => \DB::getQueryLog(),
            ]
        ]);
    }

    // 正常逻辑...
}
```

通过以上完整的文档，开发者可以深入理解动态 API 系统的设计理念、使用方法和最佳实践，快速上手并创建高质量的 API 接口。
