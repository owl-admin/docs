## 📌v1.5.0-beta

<div style="float:right;"> 2023年1月14日17:01:11 </div>

#### 🚀 新增

##### 📦 扩展管理

- [x] 支持 zip / composer 两种方式安装扩展
- [x] 支持在扩展管理中查看扩展文档
- [x] 支持扩展的启用、禁用、卸载等操作
- [x] 支持扩展的配置管理

##### 🌐 多语言

- [x] 完善前端多语言支持

##### 其他

- [x] 增加登录验证码, 可在配置文件中配置是否开启

#### 🐞 修复

- [x] 修复个人设置页面保存路径错误的问题
- [x] 以及其他一些小问题 (记不清了~)

---

## 📌v1.4.0

<div style="float:right;"> 2022年12月24日17:00:50 </div>

#### 对amis组件封装作亿点点优化

这是一个 **船新** 版本, 针对amis封装了 **196** 个类, 涵盖了amis几乎 _所有_ 的组件及其属性

> [!warning|label:注意]
> 此版本与 `v1.3.9` 及以前的版本不完全兼容!! <br>
> 因为组件封装调整过大~ <br>
> 许多组件更改了名称, 如果原本已经开发了一些功能, 升级可能有**一定的工作量**

其实问题不大, 改了名字而已, 属性基本一致~~

---

## 📌v1.3.0

<div style="float:right;"> 2022年11月18日10:22:09</div>

- amis 更新至2.4.0
- 获取列表代码优化
- 前端增加配置项, 增加页面过渡动画

#### 更新后需要重新发布前端资源

```shell
php artisan admin:publish --assets --force
```

> [!warning|label:注意]
> --force 参数会覆盖你自行修改的前端文件, 请注意备份

---

## 📌v1.2.0

<div style="float:right;">2022-11-12 17:57</div>

使用 Ant Design Pro 重构前端

---

## 📌v1.0.0

<div style="float:right;">2022年10月20日22:12:20</div>

- 增加: 多语言
- 增加: 代码生成器可选择已有的数据表生成代码

---

## 📌v0.8.5-beta

<div style="float:right;">2022年9月19日23:29:43</div>

- 增加: 权限 - 自动生成权限功能
- 增加: 个人设置-更改密码需要输入原密码

---

## 📌v0.7.0-beta

<div style="float:right;">2022年9月19日23:29:43</div>

- 增加弹窗操作
- 调整返回列表按钮
- 筛选表单重置按钮调整

---

## 📌v0.6.0-beta

<div style="float:right;">2022年9月15日14:55:11</div>

##### 登录增加图形验证码

可在 `config/admin.php` 中开启/关闭 `admin.auth.captcha` (true/false)

---

## 📌v0.5.0-beta

<div style="float:right;">2022年9月7日11:43:17</div>

##### 部分组件样式优化

需要更新静态资源, 执行以下命令

```shell
php artisan vendor:publish --provider="Slowlyo\SlowAdmin\SlowAdminServiceProvider" --force
```

---

## 📌v0.4.0-beta

<div style="float:right;">2022年9月6日15:05:55</div>

##### 整体UI升级

需要更新静态资源, 执行以下命令

```shell
php artisan vendor:publish --provider="Slowlyo\SlowAdmin\SlowAdminServiceProvider" --force
```

---

## 📌v0.3.0-beta

<div style="float:right;">2022年9月3日16:45:59</div>

#### amis 更新至 `2.2.0`

需要更新静态资源, 执行以下命令

```shell
php artisan vendor:publish --provider="Slowlyo\SlowAdmin\SlowAdminServiceProvider" --force
```

#### 增加主题切换功能

可在 `config/admin.php`, 中配置 `layout.theme` 以更改系统主题

---

## 📌v0.2.0-beta

<div style="float:right;">2022年9月3日15:38:01</div>

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
