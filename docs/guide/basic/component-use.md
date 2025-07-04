# 组件使用指南

本指南将帮助您学会如何在 Owl Admin 中使用各种组件来构建功能丰富的管理界面。

## 基础概念

### 组件创建方式

Owl Admin 提供了多种创建组件的方式：

```php
// 方式一：使用完整类名
$button = \Slowlyo\OwlAdmin\Renderers\Button::make();

// 方式二：使用 amis() 辅助函数（推荐）
$button = amis()->Button();

// 方式三：使用字符串类型
$button = amis('button');
```

### 方法链式调用

所有组件都支持链式调用来设置属性：

```php
$button = amis()->Button()
    ->label('点击我')
    ->level('primary')
    ->size('md')
    ->disabled(false);
```

## 页面组件

### 创建基础页面

```php
public function index()
{
    $page = amis()->Page()
        ->title('用户管理')
        ->subTitle('管理系统用户信息')
        ->body([
            // 页面内容
        ]);

    return $this->response()->success($page);
}
```

### 页面布局配置

```php
$page = amis()->Page()
    ->title('仪表盘')
    ->aside(
        // 侧边栏内容
        amis()->Nav()->links([
            ['label' => '概览', 'to' => '/dashboard'],
            ['label' => '统计', 'to' => '/stats'],
        ])
    )
    ->toolbar([
        // 工具栏按钮
        amis()->Button()->label('刷新')->actionType('reload')
    ])
    ->body([
        // 主要内容区域
    ]);
```

## 表单组件

### 创建表单

```php
public function form()
{
    return amis()->Form()
        ->title('用户信息')
        ->api('/api/users')
        ->body([
            amis()->TextControl('username', '用户名')
                ->required()
                ->placeholder('请输入用户名'),

            amis()->TextControl('email', '邮箱')
                ->required()
                ->type('input-email')
                ->validations(['isEmail' => true])
                ->validationErrors(['isEmail' => '请输入正确的邮箱格式']),

            amis()->TextControl('password', '密码')
                ->type('input-password')
                ->required()
                ->minLength(6),
        ]);
}
```

### 常用表单控件

#### 文本输入框

```php
// 基础文本输入
amis()->TextControl('name', '姓名')
    ->required()
    ->placeholder('请输入姓名')
    ->clearable()
    ->maxLength(50);

// 密码输入
amis()->TextControl('password', '密码')
    ->type('input-password')
    ->required()
    ->showCounter(false);

// 邮箱输入
amis()->TextControl('email', '邮箱')
    ->type('input-email')
    ->required();

// 网址输入
amis()->TextControl('website', '网站')
    ->type('input-url');
```

#### 下拉选择框

```php
// 静态选项
amis()->SelectControl('status', '状态')
    ->options([
        ['label' => '启用', 'value' => 1],
        ['label' => '禁用', 'value' => 0],
    ])
    ->clearable();

// 多选
amis()->SelectControl('tags', '标签')
    ->multiple()
    ->options([
        ['label' => 'PHP', 'value' => 'php'],
        ['label' => 'JavaScript', 'value' => 'js'],
        ['label' => 'Python', 'value' => 'python'],
    ]);

// 远程数据源
amis()->SelectControl('category_id', '分类')
    ->source('/api/categories')
    ->labelField('name')
    ->valueField('id')
    ->searchable();
```

#### 开关控件

```php
amis()->SwitchControl('enabled', '启用状态')
    ->onText('启用')
    ->offText('禁用')
    ->value(1);
```

#### 日期选择器

```php
// 日期选择
amis()->DateControl('birthday', '生日')
    ->format('YYYY-MM-DD')
    ->placeholder('请选择日期');

// 日期时间选择
amis()->DateTimeControl('created_at', '创建时间')
    ->format('YYYY-MM-DD HH:mm:ss');

// 日期范围选择
amis()->DateRangeControl('date_range', '日期范围')
    ->format('YYYY-MM-DD')
    ->clearable();
```

#### 文件上传

```php
amis()->ImageControl('avatar', '头像')
    ->receiver('/api/upload/image')
    ->accept('.jpg,.jpeg,.png,.gif')
    ->maxSize(2 * 1024 * 1024) // 2MB
    ->crop(['aspectRatio' => 1]); // 1:1 裁剪

amis()->FileControl('attachment', '附件')
    ->receiver('/api/upload/file')
    ->multiple()
    ->maxLength(5);
```

## 按钮组件

### 基础按钮

```php
// 不同样式的按钮
amis()->Button()->label('主要按钮')->level('primary');
amis()->Button()->label('成功按钮')->level('success');
amis()->Button()->label('警告按钮')->level('warning');
amis()->Button()->label('危险按钮')->level('danger');
amis()->Button()->label('链接按钮')->level('link');

// 不同尺寸
amis()->Button()->label('小按钮')->size('sm');
amis()->Button()->label('中等按钮')->size('md');
amis()->Button()->label('大按钮')->size('lg');
```

### 按钮动作

```php
// 页面跳转
amis()->Button()
    ->label('查看详情')
    ->actionType('link')
    ->link('/user/detail?id=${id}');

// 弹窗
amis()->Button()
    ->label('编辑')
    ->actionType('dialog')
    ->dialog(
        amis()->Dialog()
            ->title('编辑用户')
            ->body([
                // 表单内容
            ])
    );

// AJAX 请求
amis()->Button()
    ->label('删除')
    ->level('danger')
    ->actionType('ajax')
    ->api('delete:/api/users/${id}')
    ->confirmText('确定要删除吗？');
```

## 数据展示组件

### 表格组件

```php
public function list()
{
    $crud = amis()->CRUD()
        ->api('/api/users')
        ->columns([
            amis()->TableColumn('id', 'ID')->sortable(),
            amis()->TableColumn('username', '用户名'),
            amis()->TableColumn('email', '邮箱'),
            amis()->TableColumn('status', '状态')->type('mapping')->map([
                1 => '<span class="label label-success">启用</span>',
                0 => '<span class="label label-default">禁用</span>',
            ]),
            amis()->TableColumn('created_at', '创建时间')->type('datetime'),
            amis()->Operation('操作')->buttons([
                amis()->Button()->label('编辑')->level('link')->size('sm'),
                amis()->Button()->label('删除')->level('link')->size('sm'),
            ]),
        ]);

    return $this->response()->success($crud);
}
```

### 卡片组件

```php
amis()->Card()
    ->header(['title' => '用户信息'])
    ->body([
        amis()->Property('姓名', '${name}'),
        amis()->Property('邮箱', '${email}'),
        amis()->Property('状态', '${status}'),
    ])
    ->actions([
        amis()->Button()->label('编辑')->size('sm'),
    ]);
```

## 布局组件

### 网格布局

```php
amis()->Grid()->columns([
    [
        'md' => 6,
        'body' => [
            amis()->Card()->header(['title' => '左侧内容']),
        ]
    ],
    [
        'md' => 6,
        'body' => [
            amis()->Card()->header(['title' => '右侧内容']),
        ]
    ],
]);
```

### 选项卡

```php
amis()->Tabs()->tabs([
    [
        'title' => '基本信息',
        'body' => [
            // 基本信息表单
        ]
    ],
    [
        'title' => '高级设置',
        'body' => [
            // 高级设置表单
        ]
    ],
]);
```

## 高级用法

### 条件显示

```php
// 根据数据条件显示/隐藏组件
amis()->Button()
    ->label('管理员操作')
    ->visibleOn('${user.role === "admin"}');

// 根据条件禁用组件
amis()->Button()
    ->label('编辑')
    ->disabledOn('${status === "locked"}');
```

### 数据联动

```php
amis()->Form()->body([
    amis()->SelectControl('province', '省份')
        ->source('/api/provinces')
        ->labelField('name')
        ->valueField('code'),

    amis()->SelectControl('city', '城市')
        ->source('/api/cities?province=${province}')
        ->labelField('name')
        ->valueField('code')
        ->visibleOn('${province}'), // 选择省份后才显示
]);
```

### 自定义组件

如果找不到合适的组件，可以使用通用组件：

```php
// 使用 Component 创建自定义组件
amis()->Component()
    ->setType('custom-component')
    ->set('customProp', 'customValue');

// 或者使用 amis() 函数
amis('custom-component')
    ->customProp('customValue');

// 等效于预定义的组件
amis()->Page()->title('标题');
```

## 组件鉴权

### 权限控制原理

每个组件都支持权限控制，通过 `permission` 方法设置权限标识：

```php
amis()->Button()
    ->label('删除用户')
    ->permission('user.delete'); // 需要 user.delete 权限才显示
```

### 权限控制示例

```php
// 按钮权限控制
amis()->Button()
    ->label('创建用户')
    ->actionType('dialog')
    ->permission('user.create');

// 表格列权限控制
amis()->TableColumn('salary', '薪资')
    ->permission('user.view_salary');

// 表单字段权限控制
amis()->TextControl('admin_note', '管理员备注')
    ->permission('user.admin_edit');
```

### 权限替换值

```php
// 无权限时显示替换内容
amis()->Button()
    ->label('敏感操作')
    ->permission('admin.sensitive', '无权限');

// 无权限时显示空内容（默认）
amis()->TableColumn('secret_data', '机密数据')
    ->permission('admin.view_secret');
```

## 最佳实践

### 1. 使用 amis() 辅助函数

```php
// 推荐：简洁明了
$form = amis()->Form()->body([
    amis()->TextControl('name', '姓名'),
    amis()->SelectControl('status', '状态'),
]);

// 不推荐：冗长
$form = \Slowlyo\OwlAdmin\Renderers\Form::make()->body([
    \Slowlyo\OwlAdmin\Renderers\TextControl::make()->name('name')->label('姓名'),
]);
```

### 2. 合理使用链式调用

```php
// 推荐：逻辑清晰
$button = amis()->Button()
    ->label('提交')
    ->level('primary')
    ->size('md')
    ->actionType('submit');

// 可接受：分步设置
$button = amis()->Button();
$button->label('提交');
$button->level('primary');
```

### 3. 组件复用

```php
// 创建可复用的组件方法
private function createStatusSelect($name = 'status', $label = '状态')
{
    return amis()->SelectControl($name, $label)
        ->options([
            ['label' => '启用', 'value' => 1],
            ['label' => '禁用', 'value' => 0],
        ])
        ->clearable();
}

// 在多个地方使用
$form->body([
    $this->createStatusSelect(),
    $this->createStatusSelect('user_status', '用户状态'),
]);
```

:::info 提示
- 方法名对应 amis 组件的属性名，参数对应属性值
- 基类使用 `__call()` 方法实现动态属性设置
- 即使调用不存在的方法也不会报错，只是不会产生效果
- 建议查阅 [amis 官方文档](https://aisuda.bce.baidu.com/amis/) 了解更多组件属性

:::

:::warning 注意
- 组件权限控制在页面渲染前生效，无权限的组件会被置为空数组
- 使用远程数据源时注意接口的数据格式要求
- 表单验证规则要与后端验证保持一致

:::
