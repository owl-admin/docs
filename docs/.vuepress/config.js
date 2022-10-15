module.exports = {
    title: 'Slow Admin',
    description: 'slow admin 文档',
    head: [
        ['link', {rel: 'icon', href: '/logo.png'}]
    ],
    port: 8080,
    themeConfig: {
        logo: '/logo.png',
        lastUpdated: 'Last Updated',
        nav: [
            {text: 'Gitee', link: 'https://gitee.com/slowlyo/slow-admin'}
        ],
        sidebar: [
            ['/', '介绍'],
            {
                title: '入门',
                children: [
                    ['/base/install', '安装'],
                    ['/base/dir', '目录结构'],
                    ['/base/helper-function', '助手函数']
                ]
            },
            {
                title: '组件',
                children: [
                    ['/components/base-use', '基础使用'],
                    ['/components/complex-page', '构建复杂页面']
                ]
            },
            {
                title: 'CRUD',
                children: [

                    ['/crud/diy', '自定义业务逻辑'],
                    ['/crud/controller', 'Controller'],
                    ['/crud/service', 'Service'],
                    ['/crud/dialog-action', '弹窗操作']
                ]
            },
            {
                title: '开发者工具',
                children: [
                    ['/dev-tools/code-generator', '代码生成器']
                ]
            },
            ['update-record', '更新记录']
        ]
    }
}