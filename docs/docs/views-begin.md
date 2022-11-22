---
group: 
  title: 前端
  order: 4
title: 开始
order: 1
---

> 自行更改前端需要你有一定的前端技术~
> 自行更改前端需要你有一定的前端技术~
> 自行更改前端需要你有一定的前端技术~


:::success{title=&nbsp;}
如果你改出了问题, 可以重新发布资源并覆盖
`php artisan admin:publish --assets --force`
:::

### 发布前端文件
```powershell
php artisan admin:publish --views
```
执行后会将前端需要的文件发布至 `resources/admin-views` 下
这是一个标准的前端项目结构

### 记得先安装依赖
```powershell
npm install
```

### 部分命令
#### 运行
```powershell
npm run start
```

#### 打包
```powershell
npm run build
```

> 打包后将打包文件 (默认在 `dist` 目录下), 复制/移动到 `public/admin` 下即可


