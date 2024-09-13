# 组件管道

> v3.9.3 支持

## 什么是管道

使用 Pipeline 你可以将一个实例对象（object）在多个类之间传递，就像流水顺着管道依次流淌一般，层层传递，你就得到了从头至尾一系列执行操作的 “最终” 结果。

用一段简单的代码演示一下：

```php
$pipeline = new \Illuminate\Pipeline\Pipeline();

// 原始传入数据
$user = [
    'name' => '张三',
    'age' => 18,
    'gender' => '男',
];

$result = $pipeline
            ->send($user)
            // ->via('run') // 你可以通过调用 via 方法指定一个方法名，Pipeline 会调用该方法, 替代默认的 handle 方法
            ->through([
                // 这里如果传入的是一个类名, Pipeline 会默认调用该类中的 handle 方法
                GenderTransition::class, 
                // handle 方法的参数是 $user (原始数据) 和 $next
                function ($user, $next){ // 这里也可以直接传入 闭包
                    // 这里的 $user 是上一个类传递过来的数据
                    
                    // 假设: GenderTransition 类中, 将 gender 设置为了 女
                    // 那么, 这个方法中 $user['gender'] = '女'
                    
                    // 再次给 $user 添加属性
                    $user['address'] = 'M78 星云';
                    
                    // 执行下一个类, 传递 $user
                    return $next($user);
                },
                // ...
            ])
            ->then(function ($user) {
                // 最后一个类执行完后, 会执行 then 方法
                
                // 你可以做你想做的事, 比如:
                $user['address'] .= ' 123456';
            
                // 最后返回 $user
                return $user;
            });
            
var_dump($result);
/*
array(4) {
  ["name"]=>
  string(6) "张三"
  ["age"]=>
  int(18)
  ["gender"]=>
  string(1) "女"
  ["address"]=>
  string(15) "M78 星云 123456"
}
*/
```

## 框架中对管道的封装

### AdminPipeline

```php
<?php

namespace Slowlyo\OwlAdmin\Support\Cores;

use Slowlyo\OwlAdmin\Admin;

class AdminPipeline
{
    /**
     * @param               $key
     * @param               $passable
     * @param callable|null $callback
     *
     * @return mixed
     */
    public static function handle($key, $passable, callable $callback = null)
    {
        $do    = fn($i) => $callback ? $callback($i) : $i; // 如果传入了回调函数, 则执行回调函数, 否则直接返回 $passable
        $pipes = Admin::context()->get($key, []); // 从框架上下文中获取管道内容

        // 管道为空, 则直接返回原始数据, 稍微提升些许性能
        if (blank($pipes)) {
            return $do($passable);
        }

        // 执行管道
        return admin_pipeline($passable)->through($pipes)->then(fn($i) => $do($i));
    }

    /**
     * 该方法用于设置管道, 它们通过 $key 来对应
     * 
     * @param array|mixed $pipes
     *
     * @return void
     */
    public static function through($key, $pipes)
    {
        Admin::context()->set($key, $pipes);
    }
}
```

:::info{title="上下文"}
`Admin::context()` 返回的是 `\Slowlyo\OwlAdmin\Support\Context` 类

它是一个单例类 (在框架的服务提供者中进行了单例绑定), 用于存储全局变量, 你可以通过它来存储和获取全局变量
:::

:::info{title="admin_pipeline"}
由于 laravel 9 中, 官方并没有提供 `Pipeline` 门面类, 所以我们自己封装了一个 `Pipeline` 类

它继承了 Illuminate\Pipeline\Pipeline 类, 与 laravel 10 / 11 中一致
:::

## 对组件进行管道封装

这里用 `createButton` 来举例: 

```php
protected function createButton(bool|string $dialog = false, string $dialogSize = 'md', string $title = '')
{
    // 原本的代码
    // ...

    $action->label($title)->icon('fa fa-add')->level('primary');

    // 这里使用了 AdminPipeline::handle 方法
    // 将处理完的 $action 作为原始数据传入管道
    return AdminPipeline::handle(AdminPipeline::PIPE_CREATE_ACTION, $action);
}
```

现在, 给 `createButton` 添加管道:

```php
<?php
// file: app/Admin/bootstrap.php

use Slowlyo\OwlAdmin\Support\Cores\AdminPipeline;

AdminPipeline::through(
    AdminPipeline::PIPE_CREATE_ACTION, // 这里是框架中定义的 key, 用于从上下文中设置/获取管道内容
    [
        // 这里 $schema 的类型取决于传入的原始数据, 这里传入的是个 Renderer, 所以能直接调用方法
        function ($schema, $next) {
            // 在这里就可以对框架默认的组件进行修改了
            // 比如: 
            $schema->label('创建'); // 修改 label
            $schema->level('success'); // 修改新增按钮的颜色为绿色
            
            // 甚至可以直接返回一个新对象, 比如:
            $schema = amis()->DialogAction()->label('我是个按钮');

            // 进入下一个管道
            return $next($schema);
        },
        // ... 
        // 当然这里也可以以 class 的形式传入管道, 它会自动调用 handle 方法
        RewriteCreateAction::class,
    ]
);
```

:::info{title="为什么要在 bootstrap 中添加管道"}
从原理上来讲, 只要在执行 `AdminPipeline::handle` 方法前, 把管道内容添加到上下文中, 就可以了

框架内最适合的位置就是 bootstrap.php 中, 因为对组件的调整是全局性的, 所以推荐在这里统一处理
:::

## Controller 可用的管道

框架内定义了以下管道:

```php
/** @var string 基础页面 */
const PIPE_BASE_PAGE = 'pipe_schema_base_page';
/** @var string 返回按钮 */
const PIPE_BACK_ACTION = 'pipe_schema_back_action';
/** @var string 批量删除按钮 */
const PIPE_BULK_DELETE_ACTION = 'pipe_schema_bulk_delete_action';
/** @var string 添加按钮 */
const PIPE_CREATE_ACTION = 'pipe_schema_create_action';
/** @var string 编辑按钮 */
const PIPE_EDIT_ACTION = 'pipe_schema_edit_action';
/** @var string 查看按钮 */
const PIPE_SHOW_ACTION = 'pipe_schema_show_action';
/** @var string 删除按钮 */
const PIPE_DELETE_ACTION = 'pipe_schema_delete_action';
/** @var string 行操作按钮 */
const PIPE_ROW_ACTIONS = 'pipe_schema_row_actions';
/** @var string 基础筛选 */
const PIPE_BASE_FILTER = 'pipe_schema_base_filter';
/** @var string 基础CRUD */
const PIPE_BASE_CRUD = 'pipe_schema_base_crud';
/** @var string 基础头部工具栏 */
const PIPE_BASE_HEADER_TOOLBAR = 'pipe_schema_base_header_toolbar';
/** @var string 基础表单 */
const PIPE_BASE_FORM = 'pipe_schema_base_form';
/** @var string 基础详情 */
const PIPE_BASE_DETAIL = 'pipe_schema_base_detail';
/** @var string 基础列表 */
const PIPE_BASE_LIST = 'pipe_schema_base_list';
/** @var string 导出按钮 */
const PIPE_EXPORT_ACTION = 'pipe_schema_export_action';
```

## 给任意组件添加管道

### 原理

在组件结构返回给前端前, 会调用 `AdminPipeline::handle` 方法
```php
\Slowlyo\OwlAdmin\Support\Cores\AdminPipeline::handle(static::class, $this->amisSchema);
```

### 使用

你可以根据对应组件的类名来添加管道, 比如:

给文本框组件添加默认的最大长度:
```php
<?php
// file: app/Admin/bootstrap.php

use Slowlyo\OwlAdmin\Support\Cores\AdminPipeline;

AdminPipeline::through(
    \Slowlyo\OwlAdmin\Renderers\TextControl::class,
    [
        // 由于原始参数传入了 amisSchema, 所以这里的 $schema 类型为数组
        function ($schema, $next) {
            $schema['maxLength'] = 200;
        
            // 进入下一个管道
            return $next($schema);
        },
    ]
);
```

_如果看完这篇文档, 你还没有理解 Pipeline, 请点击_ [这里](https://www.baidu.com/s?wd=laravel%20pipeline)
