## 中 / 英

框架现有功能已接入多语言功能，可在 `config/app.php` 中调整 `locale` 的值。

```php
// 'locale' => 'en',
'locale' => 'zh_CN',
```

> 目前仅实现了中文和英文的翻译，其他语言需要自行补充

## 其他语言

1. 在 `/lang` 目录下创建对应的语言目录。
2. 调整页面配置（参考 [amis多语言](https://aisuda.bce.baidu.com/amis/zh-CN/docs/extend/i18n)）

```js
let amisInstance = amis.embed(
    '#root',
    // {!! $app !!},
    {
        location: history.location,
        // 调整这个参数 eg: {locale: 'zh_CN'}
        locale
    },
    // ...
)
```

> 可重写 `Slowlyo\SlowAdmin\Controllers\IndexController` 中的 `index()` 方法，接管框架页面。

```php
public function index()
{
    // 可复制原本的页面自行修改
    // 路径： vendor/slowlyo/slow-admin/resources/views/index.blade.php
    $view = '你重写的页面路径';
    
    return SlowAdmin::make()->baseApp()->render($view);
}
```
