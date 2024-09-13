# 前后端独立部署

## 准备代码

新建一个存放前端代码的文件夹, 内容如下


```
.
└── frontend                              # 前端目录
    ├── admin-assets                      # 从 public 目录原样复制过来
    │   ├── assets
    │   ├── scripts
    │   ├── default-avatar.png
    │   └── logo.png
    └── index.html                        # 从 admin-assets 目录复制出来
```


## 调整入口文件

```diff
- <script>window.$adminApiPrefix = '/admin-api'</script>
+ <script>window.$adminApiPrefix = 'https://domain.com/admin-api'</script>
```

站点目录指向 `frontend` 目录即可
