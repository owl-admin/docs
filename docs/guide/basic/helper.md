# 助手函数

## amis

调用 Component 类, 实现万能组件

```php
amis('page')->title('title')->body('content');
// 等效于
Page::make()->title('title')->body('content');
// 等效于
amis()->Page()->title('title')->body('content');
```



## ~~amisMake~~

解决 复杂页面 use 语句过多 的问题

```php
amisMake()->TextControl()->name('name')->label('label');
// 等效于
TextControl::make()->name('name')->label('label');
```



## admin_encode

加密字符串

```php
admin_encode(string $str):string
```



## admin_decode

解密字符串

```php
admin_decode(string $str):string
```



## array2tree

递归生成树状数据，确保数组中包含键 `parent_id`

```php
array2tree($arr):array
```



## admin_url

```php
admin_url($path = null, $needPrefix = false):string

// eg:
admin_url('user');       // /user
admin_url('user', true); // /admin-api/user
```



## table_columns

获取数据表的字段

```php
table_columns(string $table):array
```



## admin_resource_full_path

返回资源完整路径

```php
admin_resource_full_path(string $path):string
```



## admin_path

返回 admin 目录路径

```php
admin_path(string $path = null):string
```



## file_upload_handle

处理文件上传回显问题, set 时去除域名, get 加上域名

```php
file_upload_handle():\Illuminate\Database\Eloquent\Casts\Attribute
// 多文件
file_upload_handle_multi():\Illuminate\Database\Eloquent\Casts\Attribute
```



## is_json

判断是否是 json 字符串

```php
is_json(string $str):bool
```



## settings

```php
settings():\Slowlyo\OwlAdmin\Services\AdminSettingService;
```



## admin_user

获取当前登录用户信息

```php
$userId = admin_user()->id;
```



## admin_abort & admin_abort_if

抛出异常, 并返回错误信息

```php
admin_abort($message = '', $data = [], $doNotDisplayToast = 0);
// 如果条件成了, 则抛出异常
admin_abort_if($flag, $message = '', $data = [], $doNotDisplayToast = 0);
```

## admin_pipeline

为了适配 laravel 9 , 框架内封装了 pipeline 函数
```php
admin_pipeline($passable)->through($pipes)->then(fn($i) => $i);
```
