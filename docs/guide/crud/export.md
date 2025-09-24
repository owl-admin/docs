# 数据导出

框架内置基于 FastExcel 的 Excel 导出能力；如需 CSV 或多格式导出，可通过重写 `export()` 自行扩展（见下文“扩展示例，非内置”）。

:::info 依赖说明
Excel 导出需要安装：`composer require rap2hpoutre/fast-excel`
:::



## 使用

```php
// 在列表工具栏添加导出按钮
public function list(): Page
{
    $crud = $this->baseCRUD()
        ->headerToolbar([
            $this->createButton(),
            ...$this->baseHeaderToolBar(),
            // 添加导出按钮
            $this->exportAction(),
        ])
        ->columns([
            // ...
        ]);

    return $this->baseList($crud);
}

```



## 自定义导出信息

### 导出文件名

```php
// 在控制器中重写 exportFileName 方法
protected function exportFileName()
{
    return '此处为导出文件名';
}
```


### 导出列信息

```php
// 在控制器中重写 exportMap 方法
// 注意：$row 可能是数组或 Eloquent 模型，请同时兼容
// 该方法会被循环调用，请不要在里面执行 IO 操作
protected function exportMap($row)
{
    $data = $row instanceof \Illuminate\Database\Eloquent\Model ? $row->toArray() : (array) $row;

    return [
        'ID' => data_get($data, 'id'),
        '用户名' => data_get($data, 'username'),
        '真实姓名' => data_get($data, 'real_name'),
        '邮箱' => data_get($data, 'email'),
        '部门' => data_get($data, 'department.name', ''),
        '状态' => data_get($data, 'status') ? '启用' : '禁用',
        '创建时间' => date('Y-m-d H:i:s', strtotime((string) data_get($data, 'created_at'))),
    ];
}
```


## 完整自定义

如果以上配置不能满足你的需求, 你可以重写 `export` 方法, 自定义导出逻辑

```php
// 在控制器中重写 export 方法
// 此方法在 index() 中被调用, 当请求参数 _action=export 时
protected function export()
{
    // 默认在 storage/app/ 下
    $path = sprintf('%s-%s.xlsx', $this->exportFileName(), date('YmdHis'));

    // 导出本页和导出选中项都是通过 _ids 查询
    $ids = request()->input('_ids');

    // listQuery() 为列表查询条件，与获取列表数据一致
    $query = $this->service->listQuery()
        ->when($ids, fn($query) => $query->whereIn($this->service->primaryKey(), explode(',', $ids)));

    try {
        fastexcel($query->get())->export(storage_path('app/' . $path), fn($row) => $this->exportMap($row));
    } catch (\Throwable $e) {
        admin_abort(__('admin.action_failed'));
    }

    return $this->response()->success(compact('path'));
}
```

## 多格式导出（扩展示例，非内置）

如下为自定义多格式导出的示例：

```php
protected function export()
{
    $format = request('format', 'xlsx'); // 支持 xlsx, csv
    $filename = $this->exportFileName() . '-' . date('YmdHis');

    $ids = request()->input('_ids');
    $query = $this->service->listQuery()
        ->when($ids, fn($query) => $query->whereIn($this->service->primaryKey(), explode(',', $ids)));

    switch ($format) {
        case 'csv':
            return $this->exportCsv($query, $filename);
        default:
            return $this->exportExcel($query, $filename);
    }
}

/**
 * 导出 CSV
 */
protected function exportCsv($query, $filename)
{
    $path = "exports/{$filename}.csv";
    $fullPath = storage_path("app/{$path}");

    // 确保目录存在
    $directory = dirname($fullPath);
    if (!is_dir($directory)) {
        mkdir($directory, 0755, true);
    }

    $file = fopen($fullPath, 'w');

    // 添加 BOM 头，解决中文乱码
    fwrite($file, "\xEF\xBB\xBF");

    $isFirstRow = true;
    $query->chunk(1000, function($rows) use ($file, &$isFirstRow) {
        foreach ($rows as $row) {
            $data = $this->exportMap($row->toArray());

            if ($isFirstRow) {
                fputcsv($file, array_keys($data)); // 写入表头
                $isFirstRow = false;
            }

            fputcsv($file, array_values($data)); // 写入数据
        }
    });

    fclose($file);

    return $this->response()->success(['path' => $path]);
}
```

## 大数据量处理（扩展示例，非内置）

处理大量数据时的优化方案示例：

```php
protected function export()
{
    $query = $this->service->listQuery();
    $count = $query->count();

    // 大数据量分块处理
    if ($count > 5000) {
        return $this->exportLargeData($query);
    }

    // 小数据量直接导出
    return $this->exportNormal($query);
}

/**
 * 大数据量导出
 */
protected function exportLargeData($query)
{
    $filename = $this->exportFileName() . '-' . date('YmdHis') . '.xlsx';
    $path = "exports/{$filename}";
    $fullPath = storage_path("app/{$path}");

    $directory = dirname($fullPath);
    if (!is_dir($directory)) {
        mkdir($directory, 0755, true);
    }

    $isFirstChunk = true;
    $chunkSize = 1000;

    $query->chunk($chunkSize, function($rows) use (&$isFirstChunk, $fullPath) {
        $data = $rows->map(function($row) {
            return $this->exportMap($row->toArray());
        })->toArray();

        if ($isFirstChunk) {
            fastexcel($data)->export($fullPath);
            $isFirstChunk = false;
        } else {
            fastexcel($data)->appendTo($fullPath);
        }
    });

    return $this->response()->success(['path' => $path]);
}
```

## 最佳实践

### 1. 性能优化
- 大数据量使用分块处理（chunk）
- 避免在 `exportMap` 中执行数据库查询
- 预加载必要的关联关系

### 2. 安全考虑
- 控制导出数据量，避免内存溢出
- 验证用户导出权限
- 敏感数据脱敏处理

### 3. 用户体验
- 提供清晰的文件命名
- 支持多种导出格式
- 大文件导出时显示进度提示
