# php 与 amis 无法混用

### 原因

- `OwlAdmin` 是 __前后端分离__ 的项目  
- `list()`、`detail()`、`form()` 只负责构建页面, 在这几个方法内的 `php` 代码, 只能获取数据, 无法与页面产生交互



### 代码示例

```php
// eg: 根据 type 的值, 动态切换 options 的选项数据 
public function form()
{
    return $this->baseForm()->body([
        amisMake()->SelectControl()->name('type')->label('类型')->options([
            'a' => 'A',
            'b' => 'B',
            'c' => 'C',
        ]),
        // 在执行到 getOptinos 方法时, 传入的只是一个字符串, 并不是 type 的值
        amisMake()->SelectControl()
            ->name('options')
            ->label('对应选项')
            ->options(DataModel::getOptions('${type}')),
        // 正确做法
        amisMake()->SelectControl()
            ->name('options')
            ->label('对应选项')
            ->api('/get_options?type=${type}') // 通过 api 动态获取选项
    ]);
}
```
