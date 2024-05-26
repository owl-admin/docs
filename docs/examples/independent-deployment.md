## 准备代码

新建一个存放前端代码的文件夹, 内容如下

```dir
frontend
├── admin-assets             # 这个目录从 public 目录下原样复制过来即可
│   ├── assets
│   ├── scripts
│   ├── default-avatar.png
│   └── logo.png
└── index.html               # 将 admin-assets 目录下的 index.html 复制出来
```

## 调整入口文件

```diff
- <script>window.$adminApiPrefix = '/admin-api'</script>
+ <script>window.$adminApiPrefix = 'https://domain.com/admin-api'</script>
```

站点目录指向 `frontend` 目录即可
