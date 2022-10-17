import {defineUserConfig, defaultTheme} from 'vuepress'
import {searchPlugin} from '@vuepress/plugin-search'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Slow Admin',
    description: 'slow admin 中文文档',
    head: [
        ['link', {rel: 'icon', href: '/logo.png'}]
    ],
    port: 8080,
    theme: defaultTheme({
        logo: '/logo.png',
        editLinkText: '在 Gitee 上编辑此页',
        repo: 'https://gitee.com/slowlyo/slow-admin',
        docsRepo: 'https://gitee.com/slowlyo/slow-admin-doc',
        docsBranch: 'master',
        docsDir: 'docs',
        lastUpdatedText: '更新于',
        contributorsText: '贡献者',
        backToHome: '返回首页',
        // 侧边栏数组
        sidebar: [
            {
                text: '介绍',
                link: '/introduce'
            },
            {
                text: '入门',
                collapsible: true,
                children: [
                    {
                        text: '安装',
                        link: '/base/install'
                    },
                    {
                        text: '目录结构',
                        link: '/base/dir'
                    },
                    {
                        text: '助手函数',
                        link: '/base/helper-function'
                    }
                ]
            },
            {
                text: '组件',
                collapsible: true,
                children: [
                    {
                        text: '基础使用',
                        link: '/components/base-use'
                    },
                    {
                        text: '构建复杂页面',
                        link: '/components/complex-page'
                    }
                ]
            },
            {
                text: 'CRUD',
                collapsible: true,
                children: [
                    {
                        text: '自定义业务逻辑',
                        link: '/crud/diy'
                    },
                    {
                        text: 'Controller',
                        link: '/crud/controller'
                    },
                    {
                        text: 'Service',
                        link: '/crud/service'
                    },
                    {
                        text: '弹窗操作',
                        link: '/crud/dialog-action'
                    }
                ]
            },
            {
                text: '高度定制',
                collapsible: true,
                children: [
                    {
                        text: 'plan A',
                        link: '/custom/plan-a'
                    },
                    {
                        text: 'plan B',
                        link: '/custom/plan-b'
                    }
                ]
            },
            {
                text: '开发者工具',
                collapsible: true,
                children: [
                    {
                        text: '代码生成器',
                        link: '/dev-tools/code-generator'
                    }
                ]
            },
            {
                text: '多语言',
                link: '/multi-language'
            },
            {
                text: '更新记录',
                link: '/update-record'
            }
        ]
    }),
    plugins: [
        searchPlugin({
            // 配置项
        })
    ]
})