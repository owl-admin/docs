# 动态关联

:::warning
在使用此功能前, 请确保你已经熟练掌握了 [Eloquent ORM](https://learnku.com/docs/laravel/9.x/eloquent-relationships/12252) 
:::

### 生成模型

- 打开生成模型界面, 将会展示所有数据表, 以及对应的模型
- 勾选需要生成模型的表, 点击生成按钮, 模型文件将生成在 `app/Models` 目录下



### 新增关联关系

- 选择模型
- 输入关联的名称
- 选择关联类型
- 填写需要的参数
- 保存后, 关联关系会在 `Admin` 启动时注册



:::info{title=Tips}
保存后, 可通过行操作按钮预览定义的关联方法
:::
