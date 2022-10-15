#### 以角色管理控制器举例

```php
<?php

namespace Slowlyo\SlowAdmin\Controllers;

use ...;

class AdminRoleController extends AdminController
{
	// 功能对应的Service
	// 作用: 在 AdminController 中用于实现基础的 CRUD
    protected string $serviceName = AdminRoleService::class;

	// 页面路径, 包括
	//     - 列表页
	//     - 添加页面/添加数据接口请求地址
	//     - 修改页面/修改数据接口请求地址
	//     - 详情页面/详情接口
	// 以上地方都需要这个 queryPath 来生成
	// 具体的使用方式可以自行查看 Slowlyo\SlowAdmin\Traits\QueryPath.php
	// 一般来说不用修改
    protected string $queryPath = 'admin_roles';

	// 代码生成器中填写的功能名称
	// 用作页面标题
    protected string $pageTitle = '角色';

	// 该方法实现了列表页的显示, 以及获取列表数据
    public function index(Request $request): JsonResponse|JsonResource
    {
		// 返回列表数据
        if ($this->actionOfGetData()) {
			// 此处的->query() 等效于 AdminRole::query()
            $items = $this->service
                ->query()
                ->paginate($request->input('perPage', 20))
                ->items();
            $total = $this->service->query()->count();

			// amis 的 crud 组件需要的两个参数
            return $this->response()->success(compact('items', 'total'));
        }

		// 返回页面结构
        return $this->response()->success($this->list());
    }

	// 列表页的页面结构
    public function list(): Page
    {
		// ->baseCRUD() 在AdminController 中
		// 对一些基础的页面配置作了封装
        $crud = $this->baseCRUD()
			// 假如你想单独设置列表页的标题
			// 可以在此处再次调用 ->title() 方法, 他会覆盖 baseCRUD() 中的设置
			// ->title('Title')
			
			// 是否展示筛选折叠按钮
            ->filterTogglable(false)
			// 列表筛选部分表单
			->filter($this->baseFilter()->body([
				// 内容就是 Form 的 body 属性
				// 数据筛选的查询需要再 index() 方法中自行实现
                InputText::make()->name('name')->label('名称')
            ]))
			// 这是数据列
            ->columns([
                Column::make()->label('ID')->name('id')->sortable(true),
                Column::make()->label('名称')->name('name'),
                Column::make()->label('标识')->name('slug')->type('tag'),
                Column::make()->label('创建时间')->name('created_at')->type('datetime')->sortable(true),
                Column::make()->label('更新时间')->name('updated_at')->type('datetime')->sortable(true),
				// 这个方法会添加操作列
				// 默认会生成 ->rowActions()
                $this->rowActionsOnlyEditAndDelete(),
            ]);

		// baseList() 封装了基础的 Page 以及默认的新增按钮
        return $this->baseList($crud);
    }

	// 表单页面结构 (新增/编辑)
    public function form(): Form
    {
        return $this->baseForm()->body([
            InputText::make()->label('名称')->name('name')->required(true),
            InputText::make()->label('标识')->name('slug')->description('角色的唯一标识, 不可重复')->required(true),
            TreeSelect::make()
                ->name('permissions')
                ->label('权限')
                ->searchable(true)
                ->multiple(true)
                ->options(AdminPermissionService::make()->getTree())
                ->labelField('name')
                ->valueField('id')
                ->autoCheckChildren(false)
                ->joinValues(false)
                ->extractValue(true),
        ]);
    }

	// 详情页面结构
    public function detail($id): Form
    {
		// 此处 baseDetail() 需要传入 id , 用于构成获取数据的 api地址
        return $this->baseDetail($id)->body([]);
    }
}

```