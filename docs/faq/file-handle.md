# 图片 / 文件, 回显失败

### 原因:

默认的文件/图片上传处理方法, 返回的文件路径不包含域名, 导致回显失败

### 解决方案:

使用 `属性修改器` :

```php
// 你的文件/图片字段
public function image(): Attribute
{
    return file_upload_handle();
}

// 多图/文件
public function images(): Attribute
{
    return file_upload_handle_multi();
}
```



如果你不知道什么是 ___属性修改器___ 请先看 👉 [文档](https://learnku.com/docs/laravel/9.x/eloquent-mutators/12254)
