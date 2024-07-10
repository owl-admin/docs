---
nav: 示例
title: 前后端独立部署
---

## 准备代码

新建一个存放前端代码的文件夹, 内容如下

<Tree>
    <ul>
        <li>
            frontend
            <small>前端目录</small>
            <ul>
                <li>
                    admin-assets
                    <small>这个目录从 public 目录下原样复制过来即可</small>
                    <ul>
                        <li>
                            assets
                            <ul></ul>
                        </li>
                        <li>
                            scripts
                            <ul></ul>
                        </li>
                        <li> default-avatar.png </li>
                        <li> logo.png </li>
                    </ul>
                </li>
                <li> 
                    index.html 
                    <small>将 admin-assets 目录下的 index.html 复制出来</small>
                </li>
            </ul>
        </li>
    </ul>
</Tree>

## 调整入口文件

```diff
- <script>window.$adminApiPrefix = '/admin-api'</script>
+ <script>window.$adminApiPrefix = 'https://domain.com/admin-api'</script>
```

站点目录指向 `frontend` 目录即可
