# 动态加载资源

:::info{title=注意}
仅支持全局加载, 以下方法只能在 `app/admin/bootstrat.php` 中使用
前端会在获取配置信息时, 将这些资源加载到页面中
:::



`Admin` 中提供了以下方法来动态加载资源：



## js()

加载 js 资源，支持单个和多个。

```php
// 加载单个js
Admin::js($js);
// 加载多个js
Admin::js([$js1, $js2]);

// eg:
Admin::js('https://cdn.bootcdn.net/ajax/libs/echarts/4.9.0/echarts.min.js');
Admin::js([
    'https://cdn.bootcdn.net/ajax/libs/echarts/4.9.0/echarts.min.js',
    'https://cdn.bootcdn.net/ajax/libs/echarts/4.9.0/extension/bmap.min.js',
]);
```


## css()

加载 css 资源，支持单个和多个。

```php
// 加载单个css
Admin::css($css);
// 加载多个css
Admin::css([$css1, $css2]);

// eg:
Admin::css('https://cdn.bootcdn.net/ajax/libs/echarts/4.9.0/echarts.min.css');
Admin::css([
    'https://cdn.bootcdn.net/ajax/libs/echarts/4.9.0/echarts.min.css',
    'https://cdn.bootcdn.net/ajax/libs/echarts/4.9.0/extension/bmap.min.css',
]);
```


## styles()

加载 style，支持单个和多个。

```php
// 加载单个style
Admin::styles($style);
// 加载多个style
Admin::styles([$style1, $style2]);

// eg:
Admin::styles('.box { color: red; }');
Admin::styles([
    '.box { color: red; }',
    '.box2 { color: blue; }',
]);
```


## script()

加载 script，支持单个和多个。

```php
// 加载单个script
Admin::scripts($script);
// 加载多个script
Admin::scripts([$script1, $script2]);

// eg:
Admin::scripts('console.log("hello world")');
Admin::scripts([
    'console.log("hello world")',
    'console.log("hello world2")',
]);
```
