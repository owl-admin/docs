在 `Slowlyo\SlowAdmin\Controllers\AdminController` 中已经实现了以下方法:

| 方法        | 功能          |
|:----------|:------------|
| index()   | 列表页及获取列表数据  |
| create()  | 新增页面        |
| store()   | 新增数据的保存逻辑   |
| show()    | 详情页面及获取详情数据 |
| edit()    | 编辑页面        |
| update()  | 编辑数据的保存逻辑   |
| destroy() | 删除数据的逻辑     |


就是resource路由对应的那几个方法, 如果你还不知道请看[文档](https://learnku.com/docs/laravel/9.x/controllers/12212#restful-naming-resource-routes)

> 当默认的方法不满足你的需求时, 可以在你的controller重写这几个方法