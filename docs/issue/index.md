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
    return file_upload_handle();
}
```

---

### 🐛 编辑 / 详情页面数据回显失败?

#### 原因:

amis 的 bug <br>
<a href="https://github.com/baidu/amis/issues/4055" target="_blank">
#4055: form 表单 initApi，服务端返回的 data 中包含 no、status 字段时，客户端处理异常
</a>

#### 解决方案:

1. 更改字段名
2. 使用 `属性修改器`
3. 将编辑和详情操作改成 [弹窗模式](/docs/crud-dialog-action)
4. 等待 amis 修复
