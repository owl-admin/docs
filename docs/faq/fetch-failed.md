---
nav: 常见问题
title: 页面数据回显失败，提示 fetchFailed
---

### 原因:

字段名存在 status 或 no , 与 `amis` 关键字冲突

<a href="https://github.com/baidu/amis/issues/4055" target="_blank">
#4055: form 表单 initApi，服务端返回的 data 中包含 no、status 字段时，客户端处理异常
</a>

### 解决方案:

1. 更改字段名 (比如:state)
2. 使用 `属性修改器`
3. 等待 amis 修复
