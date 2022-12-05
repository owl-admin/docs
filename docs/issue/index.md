---
title: 常见问题
---

### 📁 图片 / 文件, 回显失败?

##### 原因:

默认的文件/图片上传处理方法, 返回的文件路径不包含域名, 导致回显失败

##### 解决方案:

使用 `属性修改器` :

```php
// 你的文件/图片字段
public function image(): Attribute
{
    $storage = Storage::disk(config('admin.upload.disk'));

    return Attribute::make(
        // 获取时, 拼接域名
        get: fn($value) => $storage->url($value),
        // 保存时, 去掉域名
        set: fn($value) => str_replace($storage->url(''), '', $value)
    );
}
```
