---
title: 更新记录
---

## 📌v1.3.0 <Badge> 2022年11月18日10:22:09</Badge>

- amis 更新至2.4.0
- 获取列表代码优化
- 前端增加配置项, 增加页面过渡动画

#### 更新后需要重新发布前端资源

```shell
php artisan admin:publish --assets --force
```

:::warning
--force 参数会覆盖你自行修改的前端文件, 请注意备份
:::


<br><br>

## 📌v1.2.0 <Badge>2022-11-12 17:57</Badge>

使用 Ant Design Pro 重构前端

<br><br>

## 📌v1.0.0 <Badge>2022年10月20日22:12:20</Badge>

- 增加: 多语言
- 增加: 代码生成器可选择已有的数据表生成代码

<br><br>

## 📌v0.8.5-beta <Badge>2022年9月19日23:29:43</Badge>

- 增加: 权限 - 自动生成权限功能
- 增加: 个人设置-更改密码需要输入原密码

<br><br>

## 📌v0.7.0-beta <Badge>2022年9月19日23:29:43</Badge>

- 增加弹窗操作
- 调整返回列表按钮
- 筛选表单重置按钮调整

<br><br>

## 📌v0.6.0-beta <Badge>2022年9月15日14:55:11</Badge>

##### 登录增加图形验证码

可在 `config/admin.php` 中开启/关闭 `admin.auth.captcha` (true/false)

<br><br>

## 📌v0.5.0-beta <Badge>2022年9月7日11:43:17</Badge>

##### 部分组件样式优化

需要更新静态资源, 执行以下命令

```shell
php artisan vendor:publish --provider="Slowlyo\SlowAdmin\SlowAdminServiceProvider" --force
```

<br><br>

## 📌v0.4.0-beta <Badge>2022年9月6日15:05:55</Badge>

##### 整体UI升级

需要更新静态资源, 执行以下命令

```shell
php artisan vendor:publish --provider="Slowlyo\SlowAdmin\SlowAdminServiceProvider" --force
```

<br><br>

## 📌v0.3.0-beta <Badge>2022年9月3日16:45:59</Badge>

#### amis 更新至 `2.2.0`

需要更新静态资源, 执行以下命令

```shell
php artisan vendor:publish --provider="Slowlyo\SlowAdmin\SlowAdminServiceProvider" --force
```

#### 增加主题切换功能

可在 `config/admin.php`, 中配置 `layout.theme` 以更改系统主题

<br><br>

## 📌v0.2.0-beta <Badge>2022年9月3日15:38:01</Badge>

#### 补充部分组件

- GridItem
- Drawer
- Dialog
- Toast
- ToastItem
- TabItem

#### 部分组件方法添加默认值

- required($value = true)
- searchable($value = true)
- removeable($value = true)
- ...
