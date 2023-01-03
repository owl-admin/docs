> [!warning|label:注意]
> 自行更改前端需要你有对前端有一定了解~ <br>
> 自行更改前端需要你有对前端有一定了解~ <br>
> 自行更改前端需要你有对前端有一定了解~


> [!note|label:提示]
> 如果你改出了问题, 可以重新发布资源并覆盖 <br>
> `php artisan admin:publish --assets --force`

### 发布前端文件

```shell
php artisan admin:publish --views
```

执行后会将前端需要的文件发布至 `resources/admin-views` 下
这是一个标准的前端项目结构

### 记得先安装依赖

```shell
npm install
```

### 部分命令

#### 运行

```shell
npm run start
```

#### 打包

```shell
npm run build
```

?> 打包后将打包文件 (默认在 `dist` 目录下), 复制/移动到 `public/admin` 下即可