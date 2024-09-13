# 动态页面

### 使用 `admin_pages` 方法

```php
public function index(){
    // admin_pages 方法，传入页面标识, 返回页面结构
    $schema = admin_pages('page_sign');
    
    return $this->response()->success($schema);
}
```



### 直接绑定菜单

- 新建菜单, 类型选择 `页面`
- 保存后, 该菜单打开将会显示对应的页面内容
