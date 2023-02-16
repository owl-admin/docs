---
title: 弹窗操作
---

# 弹窗操作

以下操作在代码生成器生成后默认为页面模式, 可通过配置实现弹窗模式

## 新增

```php
public function list(): Page
{
	// ...

	// 更改 controller 中 list() 方法的返回值
	// 覆盖 list 的 toolbar 属性
	// 给 createButton() 方法添加参数 (默认没有)
	return $this->baseList($crud)->toolbar([$this->createButton(true)]);
}
```

## 修改&详情

```php
public function list(): Page
{
    $crud = $this->baseCRUD()
        ->columns([
            Column::make()->label('ID')->name('id')->sortable(true),
            // ...
            amis('operation')->label('操作')->buttons([
                // 给方法添加参数 true
                $this->rowEditButton(true),
                $this->rowEditButton(true),
            ]),
        ]);

    // ...
}
```

## 其他方法

> 以下两个方法是对操作列的封装, 也可以通过传参控制模式

```php
rowActions($dialog = false)
rowActionsOnlyEditAndDelete($dialog = fals)
```
