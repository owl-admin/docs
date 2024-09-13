# 自定义后台路径

> 日常使用会遇到需要更改后台访问路径的需求, 避免被不相关的人访问到后台.

:::info{title=注意}
`v3.6.1` 及以上的版本, 在 `app/Admin/routes.php` 文件中修改即可
:::

#### 你可以按照以下步骤, 实现自定义访问路径:

1.定义你的自定义访问路径, 如下:
```php
// file: /routes/web.php

app('router')->get('/master', fn() => \Slowlyo\OwlAdmin\Admin::view());
```


2. 处理原本的 `/admin` 访问路径, 让它返回 404:

```php
// file: /routes/web.php

app('router')->get('/admin', function (){
    abort(404);
});
```
