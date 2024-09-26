# 动态 API

### 使用

- 使用场景
    - 零代码实现某些简单的接口
    - 如: 从某个表查询 `options` 列表, 配合 `amis` 的 `select` / `radios`等选项组件的 `source` 属性实现动态选项
- 添加一条 api 记录
- 路由信息将会被注册到 `routes/admin.php` 文件中
    - 可以使用 '/admin-api/路径' 来访问你的 api
    - 在其他模块中也可以使用 '/模块-api/路径' 来访问你的 api
    - 如果是在可视化编辑器中使用, 则不需要添加 '/admin-api/' 前缀, 直接填写你保存的路径即可



### 新建 api 模板

- 可以在 [Owl Hub](https://owladmin.com/site#/hub) 中, 获取他人分享的 api 模板
- 手动创建
    - 在 `app/ApiTemplates` 目录下创建一个新的类
    - 继承 `Slowlyo\OwlAdmin\Support\Apis\AdminBaseApi` 类, 并实现 `handle` 方法

__示例:__

```php
<?php

namespace App\ApiTemplates;

use Slowlyo\OwlAdmin\Support\Apis\AdminBaseApi;

class OptionsApi extends AdminBaseApi
{
    // 请求方式
    public string $method = 'get';
    
    // 模板的名称, 方式一
    public string $title = '获取选项列表';

    // 模板的名称, 方式二
    public function getTitle()
    {
        return '获取选项列表';
    }

    // api 的处理逻辑
    public function handle()
    {
        // getArgs 方法可以获取到创建的 api 的参数
        return $this->service()->query()->get([
            $this->getArgs('value_field') . ' as value',
            $this->getArgs('label_field') . ' as label'
        ]);
    }

    // api 的参数配置, 返回数组格式的 amis 结构
    // 动态 api 的表单中, 将会把 argsSchema 返回的表单放到 Combo 组件中
    public function argsSchema()
    {
        return [
            // 让用户选择从哪个模型获取数据
            amis()->SelectControl('model', __('admin.relationships.model'))
                ->required()
                ->menuTpl('${label} <span class="text-gray-300 pl-2">${table}</span>')
                ->source('/dev_tools/relation/model_options')
                ->searchable(),
            amis()->TextControl('value_field', 'Value字段')->required(),
            amis()->TextControl('label_field', 'Label字段')->required(),
        ];
    }

    protected function service()
    {
        // blankService 方法由父类提供, 返回了一个空白的 AdminService 实例
        $service = $this->blankService();

        // 读取参数, 给 service 设置模型
        $service->setModelName($this->getArgs('model'));

        return $service;
    }
}
```
