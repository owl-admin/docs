# 助手函数

Owl Admin 提供了丰富的助手函数来简化开发工作，这些函数涵盖了组件创建、数据处理、文件管理、用户认证等各个方面。

## 组件创建函数

### amis()

万能组件创建函数，支持多种调用方式

```php
// 函数签名
amis($type = null): \Slowlyo\OwlAdmin\Renderers\Amis|\Slowlyo\OwlAdmin\Renderers\Component

// 使用示例
amis('page')->title('页面标题')->body('页面内容');
// 等效于
Page::make()->title('页面标题')->body('页面内容');
// 等效于
amis()->Page()->title('页面标题')->body('页面内容');
```

**功能说明：**
- 不传参数时返回 Amis 实例，可链式调用各种组件
- 传入组件类型时直接创建对应组件
- 支持所有 amis 组件类型

**使用场景：**
```php
// 创建表单
$form = amis('form')->api('/api/save')->body([
    amis('text')->name('name')->label('姓名'),
    amis('email')->name('email')->label('邮箱')
]);

// 创建页面
$page = amis()->Page()
    ->title('用户管理')
    ->body($form);
```

### amisMake() (已废弃)

:::warning 废弃提醒
此函数已被标记为废弃，建议使用 `amis()` 函数替代。
:::

```php
// 旧用法（不推荐）
amisMake()->TextControl()->name('name')->label('标签');
// 新用法（推荐）
amis()->TextControl()->name('name')->label('标签');
```

## 加密解密函数

### admin_encode()

使用 Laravel 加密服务加密字符串

```php
// 函数签名
admin_encode(string $str): string

// 使用示例
$encrypted = admin_encode('敏感信息');
// 输出类似：eyJpdiI6IjVqSGJHVjNxM...
```

**功能说明：**
- 基于 Laravel 的 Crypt 门面实现
- 使用应用的 APP_KEY 进行加密
- 返回 Base64 编码的加密字符串

### admin_decode()

解密由 `admin_encode()` 加密的字符串

```php
// 函数签名
admin_decode(string $decodeStr): string

// 使用示例
$decrypted = admin_decode($encrypted);
// 如果解密失败，返回空字符串
```

**功能说明：**
- 自动处理解密异常，失败时返回空字符串
- 与 `admin_encode()` 配对使用
- 适用于敏感数据的临时加密存储

## 数据处理函数

### array2tree()

将平面数组转换为树状结构

```php
// 函数签名
array2tree(array $list, int $parentId = 0): array

// 使用示例
$flatArray = [
    ['id' => 1, 'parent_id' => 0, 'name' => '根节点'],
    ['id' => 2, 'parent_id' => 1, 'name' => '子节点1'],
    ['id' => 3, 'parent_id' => 1, 'name' => '子节点2'],
    ['id' => 4, 'parent_id' => 2, 'name' => '孙节点']
];

$tree = array2tree($flatArray);
// 结果：
// [
//     [
//         'id' => 1,
//         'parent_id' => 0,
//         'name' => '根节点',
//         'children' => [
//             [
//                 'id' => 2,
//                 'parent_id' => 1,
//                 'name' => '子节点1',
//                 'children' => [
//                     ['id' => 4, 'parent_id' => 2, 'name' => '孙节点']
//                 ]
//             ],
//             ['id' => 3, 'parent_id' => 1, 'name' => '子节点2']
//         ]
//     ]
// ]
```

**功能说明：**
- 要求数组元素包含 `id` 和 `parent_id` 字段
- 递归构建树状结构
- 子节点存储在 `children` 字段中
- 常用于菜单、分类等层级数据处理

### map2options()

将关联数组转换为选项格式

```php
// 函数签名
map2options(array $map): array

// 使用示例
$statusMap = [
    'active' => '激活',
    'inactive' => '禁用',
    'pending' => '待审核'
];

$options = map2options($statusMap);
// 结果：
// [
//     ['label' => '激活', 'value' => 'active'],
//     ['label' => '禁用', 'value' => 'inactive'],
//     ['label' => '待审核', 'value' => 'pending']
// ]
```

**功能说明：**
- 键作为 `value`，值作为 `label`
- 返回标准的选项数组格式
- 适用于下拉框、单选框等组件的选项数据

### is_json()

检查字符串是否为有效的 JSON 格式

```php
// 函数签名
is_json(string $string): bool

// 使用示例
is_json('{"name": "张三"}');     // true
is_json('[1, 2, 3]');           // true
is_json('普通字符串');           // false
is_json('{"invalid": json}');   // false
```

**功能说明：**
- 检查字符串格式和 JSON 解析是否成功
- 仅接受能解析为数组的 JSON 字符串
- 常用于数据验证和格式检查

## 路径和 URL 函数

### admin_url()

生成管理后台的 URL 路径

```php
// 函数签名
admin_url(string $path = null, bool $needPrefix = false): string

// 使用示例
admin_url('user');              // /user
admin_url('user', true);        // /admin-api/user
admin_url('user/create');       // /user/create
admin_url('user/create', true); // /admin-api/user/create
```

**参数说明：**
- `$path`：路径字符串
- `$needPrefix`：是否添加 API 前缀

**功能说明：**
- 自动处理路径分隔符
- 根据配置添加管理后台前缀
- 用于生成后台页面和 API 路径

### admin_path()

获取管理后台目录的绝对路径

```php
// 函数签名
admin_path(string $path = ''): string

// 使用示例
admin_path();                    // /path/to/app/Admin
admin_path('Controllers');       // /path/to/app/Admin/Controllers
admin_path('Models/User.php');   // /path/to/app/Admin/Models/User.php
```

**功能说明：**
- 基于 `config('admin.directory')` 配置，返回绝对路径
- 用于文件系统操作和类路径生成

### admin_extension_path()

获取扩展目录的绝对路径

```php
// 函数签名
admin_extension_path(?string $path = null): string

// 使用示例
admin_extension_path();              // /path/to/extensions
admin_extension_path('my-plugin');   // /path/to/extensions/my-plugin
```

**功能说明：**
- 基于 `config('admin.extension.dir')` 配置
- 默认为项目根目录下的 `extensions` 文件夹
- 用于扩展插件的文件管理

### owl_admin_path()

获取 Owl Admin 框架内部文件路径

```php
// 函数签名
owl_admin_path(string $path = ''): string

// 使用示例
owl_admin_path('config/admin.php');  // 框架配置文件路径
```

**功能说明：**
- 指向框架源码目录
- 主要用于框架内部文件访问
- 一般开发者不需要直接使用

## 数据库函数

### table_columns()

获取数据表的字段名列表

```php
// 函数签名
table_columns(string $tableName): array

// 使用示例
$columns = table_columns('users');
// 返回字段名数组，例如：["id", "name", "created_at"]
```

**功能说明：**
- 基于框架内部 `Database::getTableColumns()` 实现
- 仅返回字段名数组
- 常用于代码生成器和动态表单创建

## 文件处理函数

### admin_resource_full_path()

生成资源文件的完整 URL

```php
// 函数签名
admin_resource_full_path(string $path, string $server = null): string

// 使用示例
admin_resource_full_path('uploads/avatar.jpg');
// 输出：https://example.com/storage/uploads/avatar.jpg

admin_resource_full_path('avatar.jpg', 'https://cdn.example.com');
// 输出：https://cdn.example.com/avatar.jpg
```

**功能说明：**
- 自动处理相对路径和绝对路径
- 支持自定义服务器地址
- 根据配置自动选择 HTTP/HTTPS 协议
- 支持 Data URL 格式（base64 图片）

### file_upload_handle()

处理单文件上传的 Eloquent 属性转换

```php
// 函数签名
file_upload_handle(): \Illuminate\Database\Eloquent\Casts\Attribute

// 在模型中使用
class User extends Model
{
    protected function avatar(): Attribute
    {
        return file_upload_handle();
    }
}

// 使用效果
$user = new User();
$user->avatar = '/storage/uploads/avatar.jpg';  // 存储时去除域名
echo $user->avatar;  // 输出完整 URL：https://example.com/storage/uploads/avatar.jpg
```

### file_upload_handle_multi()

处理多文件上传的 Eloquent 属性转换

```php
// 函数签名
file_upload_handle_multi(): \Illuminate\Database\Eloquent\Casts\Attribute

// 在模型中使用
class Product extends Model
{
    protected function images(): Attribute
    {
        return file_upload_handle_multi();
    }
}

// 使用效果
$product = new Product();
$product->images = ['image1.jpg', 'image2.jpg'];  // 存储为逗号分隔的字符串
echo json_encode($product->images);  // 输出完整 URL 数组
```

**功能说明：**
- 自动处理存储和读取时的 URL 转换
- 存储时去除域名，节省存储空间
- 读取时自动添加完整域名
- 多文件版本支持数组和逗号分隔字符串

## 用户和认证函数

### admin_user()

获取当前登录的管理员用户

```php
// 函数签名
admin_user(): ?\Slowlyo\OwlAdmin\Models\AdminUser

// 使用示例
$user = admin_user();
if ($user) {
    echo $user->name;     // 用户名
    echo $user->id;       // 用户ID
    echo $user->email;    // 邮箱
}

// 检查用户权限
if (admin_user()?->can('user.create')) {
    // 有创建用户权限
}
```

**功能说明：**
- 基于当前会话获取用户信息
- 未登录时返回 null
- 返回完整的用户模型实例
- 支持权限检查和角色判断

## 设置管理函数

### settings()

获取系统设置服务实例

```php
// 函数签名
settings(): \Slowlyo\OwlAdmin\Services\AdminSettingService

// 使用示例
// 获取设置
$siteName = settings()->get('site_name', '默认站点名');
$config = settings()->get('mail_config');

// 设置单个值
settings()->set('site_name', '我的站点');

// 批量设置
settings()->setMany([
    'site_name' => '我的站点',
    'site_description' => '站点描述'
]);

// 获取所有设置
$allSettings = settings()->all();

// 删除设置
settings()->del('old_setting');
```

**功能说明：**
- 提供完整的设置管理功能
- 支持缓存机制，提高性能
- 支持模块化设置管理
- 支持数组路径访问（点号分隔）

## 页面管理函数

### admin_pages()

获取自定义页面内容

```php
// 函数签名
admin_pages(string $sign): mixed

// 使用示例
$pageSchema = admin_pages('dashboard');
// 返回页面的 JSON Schema 配置
```

**功能说明：**
- 基于页面标识获取页面配置
- 支持缓存机制
- 用于自定义页面的动态加载
- 返回 amis 页面 Schema

## 异常处理函数

### admin_abort()

抛出管理后台异常

```php
// 函数签名
admin_abort(string $message = '', array $data = [], int $doNotDisplayToast = 1): void

// 使用示例
admin_abort('操作失败');
admin_abort('数据验证失败', ['field' => 'name']);
admin_abort('静默失败', [], 0);  // 不显示 Toast 提示
```

### admin_abort_if()

条件异常抛出

```php
// 函数签名
admin_abort_if(bool $flag, string $message = '', array $data = [], int $doNotDisplayToast = 1): void

// 使用示例
admin_abort_if(empty($user), '用户不存在');
admin_abort_if($user->status !== 'active', '用户已被禁用');
```

### amis_abort() 和 amis_abort_if()

专用于 amis 组件的异常处理

```php
// 使用示例
amis_abort('操作失败');  // 会显示 Toast 提示
amis_abort_if($condition, '条件不满足');
```

**功能说明：**
- `admin_abort` 系列默认不显示 Toast（避免重复提示）
- `amis_abort` 系列会显示 Toast 提示
- 支持携带额外数据
- 统一的错误处理机制

## 国际化函数

### admin_trans()

管理后台专用的翻译函数

```php
// 函数签名
admin_trans(string $key = null, array $replace = [], string $locale = null): string

// 使用示例
admin_trans('admin.save');              // 保存
admin_trans('admin.user_not_found');    // 用户未找到
admin_trans('admin.welcome', ['name' => '张三']);  // 欢迎，张三
```

**功能说明：**
- 优先查找应用的语言文件
- 回退到框架的 `admin::` 命名空间
- 支持参数替换
- 自动处理语言包前缀

## 管道处理函数

### admin_pipeline()

Laravel 管道处理的封装

```php
// 函数签名
admin_pipeline($passable): \Slowlyo\OwlAdmin\Support\Pipeline

// 使用示例
$result = admin_pipeline($data)
    ->through([
        ValidateDataPipe::class,
        ProcessDataPipe::class,
        SaveDataPipe::class
    ])
    ->then(fn($data) => $data);
```

**功能说明：**
- 兼容 Laravel 9+ 的管道处理
- 支持中间件模式的数据处理
- 用于复杂的数据处理流程
- 提供统一的管道接口

## 使用技巧

### 1. 组合使用示例

```php
// 创建带权限检查的表单
if (admin_user()?->can('user.edit')) {
    $form = amis('form')
        ->api(admin_url('users', true))
        ->body([
            amis('text')->name('name')->label(admin_trans('admin.name')),
            amis('select')->name('status')->label(admin_trans('admin.status'))
                ->options(map2options(['active' => '激活', 'inactive' => '禁用']))
        ]);
}

// 处理文件上传
class User extends Model
{
    protected function avatar(): Attribute
    {
        return file_upload_handle();
    }

    protected function documents(): Attribute
    {
        return file_upload_handle_multi();
    }
}

// 设置管理
settings()->setMany([
    'site_name' => admin_trans('admin.default_site_name'),
    'upload_path' => admin_path('uploads')
]);
```

### 2. 错误处理最佳实践

```php
// 数据验证
admin_abort_if(empty($request->name), admin_trans('admin.name_required'));
admin_abort_if(!is_json($request->config), admin_trans('admin.invalid_json'));

// 权限检查
admin_abort_if(!admin_user()?->can('user.delete'), admin_trans('admin.permission_denied'));
```

### 3. 性能优化建议

```php
// 使用缓存获取设置
$config = settings()->get('cache_key', $default, false);  // 使用缓存
$fresh = settings()->get('cache_key', $default, true);    // 强制刷新

// 批量操作
settings()->setMany($data);  // 比多次调用 set() 更高效
```

:::info 提示
- 大部分函数都有完善的错误处理机制
- 建议在生产环境中合理使用缓存功能
- 文件处理函数会自动处理各种边界情况
- 异常处理函数支持国际化消息

:::
