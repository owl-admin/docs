### amis()

调用 Component 类, 实现万能组件
```php
amis('page')->title('title')->body('content');
// 等效于
Page::make()->title('title')->body('content');
```