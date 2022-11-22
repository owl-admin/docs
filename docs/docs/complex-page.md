---
group: 组件
title: 构建复杂页面
order: 2
---

如果基础 crud 页面满足不了你的需求, 可参考以下代码实现

<img src="./images/complex-page.png" width="100%"></img>

##### 完整代码

```php
<?php

namespace App\Admin\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Services\TaskLogService;
use App\Services\ProjectService;
use Slowlyo\SlowAdmin\Renderers\Flex;
use Slowlyo\SlowAdmin\Renderers\Table;
use Slowlyo\SlowAdmin\Renderers\Grid2d;
use Slowlyo\SlowAdmin\Renderers\Action;
use Slowlyo\SlowAdmin\Renderers\Wrapper;
use Slowlyo\SlowAdmin\Renderers\Service;
use Slowlyo\SlowAdmin\Renderers\Calendar;
use Slowlyo\SlowAdmin\Renderers\Component;
use Slowlyo\SlowAdmin\Renderers\Form\Form;
use Slowlyo\SlowAdmin\Renderers\Form\Select;
use Slowlyo\SlowAdmin\Renderers\Form\Textarea;
use Slowlyo\SlowAdmin\Renderers\Form\InputDate;
use Slowlyo\SlowAdmin\Controllers\AdminController;
use Slowlyo\SlowAdmin\Renderers\Form\InputDateRange;

class TaskLogController extends AdminController
{
    /** @var string */
    protected string $serviceName = TaskLogService::class;

    /** @var string 页面路径 */
    protected string $queryPath = 'task_logs';

    /** @var string 页面标题 */
    protected string $pageTitle = '任务记录';

    /**
     * 构建页面
     *
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Resources\Json\JsonResource
     */
    public function index()
    {
        $page = $this->basePage()->css($this->style())->body([
            // 使用 Grid2d 组件布局页面
            Grid2d::make()->gap(15)->grids([
                // 日历部分
                Wrapper::make()->size('none')->body($this->calendar())->x(1)->y(1)->w(7),
                // 右侧表单部分
                Wrapper::make()->size('none')->body([
                    $this->form(),
                    $this->generator(),
                ])->x(8)->y(1),
            ]),
        ]);

        return $this->response()->success($page);
    }

    /**
     * 构建日历
     *
     * @return mixed
     */
    public function calendar()
    {
        $calendar = Calendar::make()->largeMode(true)->schedules('${calendarData}')->scheduleAction(
            // 此处重写了日历组件原有的点击弹窗内容
            Component::make()->actionType('dialog')->dialog(
                Component::make()->setType('dialog')->body(
                    Table::make()->columns([
                        ['name' => 'project', 'label' => '项目'],
                        ['name' => 'showDate', 'label' => '日期'],
                        ['name' => 'content', 'label' => '内容'],
                    ])->data('${scheduleData}')
                )->actions([])->title('')->size('lg')->closeOnEsc(true)
            )
        )->onEvent([
            // calendar 组件的 change 事件, 触发后将选择的日期赋值给 日期 字段
            'change' => [
                'actions' => [
                    'actionType'  => 'setValue',
                    'componentId' => 'create_form',
                    'args'        => [
                        'value' => [
                            'currentDate' => '${event.data.value}',
                        ],
                    ],
                ],
            ],
        ]);

        // 使用 Service 组件, 实现表单提交后刷新 calendar 数据
        // api() 为获取数据 api 地址
        return Service::make()->api(admin_url('task_logs/calendar'))->body($calendar)->id('calendar_service');
    }

    /**
     * 获取日历数据
     *
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Resources\Json\JsonResource
     */
    public function calendarData()
    {
        $calendarData = $this->service->getDate();

        return $this->response()->success(compact('calendarData'));
    }

    /**
     * 构建表单
     *
     * @return mixed
     */
    public function form()
    {
        return $this->baseForm()
            // 设置 form 的组件 id, 为了让 calendar 的 change 事件能找到目标
            ->id('create_form')
            // 表单提交路径
            ->api($this->getStorePath())
            // 表单数据域
            ->data([
                'currentDate' => today()->timestamp,
            ])->body([
                Select::make()->name('project')->label('项目')->options(ProjectService::make()->getOptions()),
                InputDate::make()->name('date')->label('日期')->value('${currentDate}'),
                Textarea::make()->name('content')->label('内容')->minRows(10),
            ])->onEvent([
                // 表单提交成功事件, 刷新 calendar 外层的 Service, 重新获取日历数据
                'submitSucc' => [
                    'actions' => [
                        'actionType'  => 'reload',
                        'componentId' => 'calendar_service',
                    ],
                ],
            ]);
    }

    /**
     * @return Form
     */
    public function generator()
    {
        // 给 title 和 actions 赋空值, 隐藏原有的 form 标题和提交按钮
        return Form::make()->title('')->actions([])->api(admin_url('task_logs/generate'))->body([
            // 布局
            Flex::make()->alignItems('center')->justify('space-between')->items([
                InputDateRange::make()->name('date_range')->size('full')->required(true),
                // 添加一个行为按钮, 实现提交功能
                Action::make()
                    ->className('ml-3 mb-6')
                    ->label('生成')
                    ->level('success')
                    ->actionType('submit'),
            ]),
            // 用来显示 form 提交后返回的内容
            Textarea::make()->name('content')->minRows(14)->className('my-3'),
        ]);
    }

    /**
     * 保存记录
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Resources\Json\JsonResource
     */
    public function store(Request $request)
    {
        if ($this->service->store($request->all())) {
            // 保存成功后, 重新获取日历数据并返回
            $calendar = $this->service->getDate();

            return $this->response()->success(compact('calendar'), '保存成功');
        }

        return $this->response()->fail($this->service->getError() ?? '保存失败');
    }

    /**
     * 调整日历组件样式
     *
     * @return array
     */
    private function style()
    {
        return [
            '.amis-scope .cxd-ScheduleCalendar .rdt .rdtPicker td.rdtActive' => ['border-top' => '2px solid #2468F2',],
            '.amis-scope .rdtHeader'                                         => ['margin-top' => 0,],
            '.amis-scope .cxd-ScheduleCalendar-large .rdtDay'                => ['height' => '7.7rem',],
            '.amis-scope .rdtPicker td, .amis-scope .rdtPicker th'           => ['line-height' => '1.25rem',],
        ];
    }

    /**
     * 生成数据
     *
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Resources\Json\JsonResource
     */
    public function generate()
    {
        $date = explode(',', request()->date_range);

        $start = Carbon::createFromTimestamp($date[0])->toDateString();
        $end   = Carbon::createFromTimestamp($date[1])->toDateString();

        $logs = $this->service->query()->whereBetween('date', [$start, $end])->get()->groupBy('project_id');

        $projects = ProjectService::make()->query()->pluck('name', 'id');

        $data = '';
        foreach ($logs as $key => $log) {
            $data .= "\n" . $projects[$key];
            foreach ($log as $item) {
                $data .= "\n\t" . $item['content'];
            }
        }

        return $this->response()->success(['content' => trim($data)]);
    }
}

```
