在 `config/app.php` 中更改配置:

```diff
- 'locale' => 'en'       ← 原本长这样
+ 'locale' => 'zh_CN'    ← 改成这样
```

<br><br>
如果不成功
- 检查是否存在 `/lang` 目录
- 检查项目文件是否可写
- 文件权限更改为 `755` 后重试
- 断点检查是否存在 `zh_CN` 语言
