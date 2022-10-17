### _amis()_

调用 Component 类, 实现万能组件

```php
amis('page')->title('title')->body('content');
// 等效于
Page::make()->title('title')->body('content');
```

### _admin_encode()_

加密字符串

```php
admin_encode(string $str, $key = null):string
```

### _admin_decode()_

解密字符串

```php
admin_decode(string $str, $key = null):string
```

### _array2tree()_

递归生成树状数据，确保数组中包含键 `parent_id`

```php
array2tree($arr):array
```