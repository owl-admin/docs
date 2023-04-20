---
title: Form 各项说明
---

# Form 各项说明

* 基本form方法如下:
  
  ```php
  ...
  public function form(): Form
  {
          return $this->baseForm()->body([
              TextControl::make()->name('name')->label('姓名'),
              ... 
          ]);
  }
  ...
  ```

* 调试 链式调用 debug(true) 方法

* 默认值 使用data方法，存入对映数组
  
  ```php```
   form 方法中
   $this->baseForm()->data(
              ['price'=>0,'amount'=>0,'re_status'=>'normal','state'=>'wait']
       )
  ```

* 表单验证
  
  * 必填项在body子项中使用 required(true)
  
  ```php
  function form(){
      ...
  ->body([
      ...
      TextControl::make()->name('price')->label('单价')->required(true),
      ...
  ]);
  }
  ```
  
  * 正则校验及错误提示
    
    ```php
    TextControl::make()->name('phone')->label('手机号')->validations('matchRegexp:/^1\d{10}/')->validationErrors(['matchRegexp'=>'必需是手机号']),
    ```

* 字段支持组件有如下几种：
  
  * TextControl
  
  * NumberControl
  
  * ImageControl
  
  * TagControl 使用 options(选项数组) 配置选项
  
  * SelectControl 使用 options(选项数组) 配置选项
  
  * RadioControl 使用 options(选项数组) 配置选项
    
    ```php
    $states=['wait'=>'等待','success'=>'成功','error'=>'错误'];
    
    RadiosControl::make()->name('state')->label('订单状态')->options($states),
    ```
  
  * 。。。



* 表单项支持的通用方法
  
  * id() 组件唯一id
  
  * name 字段名
  
  * label 显示
  
  * value 默认值 不支持变量
  
  * readonly
  
  * static 是否静态显示
  
  * remark 显示小图标，鼠标移上去有提示
  
  * 


