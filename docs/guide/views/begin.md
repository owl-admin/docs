---
title: 开始
---

# 开始

::: warning 注意
自行更改前端需要你有对前端有一定了解~ <br>
自行更改前端需要你有对前端有一定了解~ <br>
自行更改前端需要你有对前端有一定了解~
:::


::: tip
如果你改出了问题, 可以重新发布资源并覆盖 <br>
`php artisan admin:publish --assets --force`
:::

## 发布前端文件

```shell
php artisan admin:publish --views
```

执行后会将前端需要的文件发布至 `resources/admin-views` 下
这是一个标准的前端项目结构

### 记得先安装依赖

```shell
# 如果你没有pnpm, 请先安装pnpm (npm i -g pnpm)
pnpm i
```

## 部分命令

<br>

#### 运行

```shell
pnpm run dev
```

#### 打包

```shell
pnpm run build
```

::: tip
打包后将打包文件 (默认在 `dist` 目录下), 复制/移动到 `public/admin` 下即可
:::