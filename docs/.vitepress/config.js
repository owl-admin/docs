import {defineConfig} from "vitepress"
import mdItCustomAttrs from "markdown-it-custom-attrs"

export default defineConfig({
    lastUpdated: true,
    title: "Owl Admin",
    description: "基于 laravel 、amis 和 vue3.0 的后台管理系统",
    lang: "zh-CN",
    cleanUrls: true,
    head: [
        ["link", {rel: "icon", href: "https://slowlyo.gitee.io/static/images/owl-admin/logo.png"}],
        // 图片预览
        ["link", {rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css"}],
        ["script", {src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"}],
    ],
    markdown: {
        config: (md) => {
            md.use(mdItCustomAttrs, "image", {
                "data-fancybox": "gallery",
            })
        },
    },
    base: "/owl-admin-doc/",
    themeConfig: {
        outline: "deep",
        lastUpdatedText: "最后一次更新",
        logo: "https://slowlyo.gitee.io/static/images/owl-admin/logo.png",
        lang: "zh-CN",
        docFooter: {
            prev: "上一篇",
            next: "下一篇",
        },
        editLink: {
            pattern: "https://gitee.com/slowlyo/owl-admin-doc/docs/:path",
            text: "提交改进",
        },
        algolia: {
            appId: "EA17BNGA8H",
            apiKey: "8a05545cf22a2b0527eb31125ae9132a",
            indexName: "slowlyo-gitee",
        },
        socialLinks: [
            {
                icon: {
                    svg: "<svg class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1894\" height=\"128\" width=\"128\"><path d=\"M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z\" fill=\"#888888\" p-id=\"1895\"></path></svg>",
                },
                link: "https://gitee.com/slowlyo/owl-admin",
            },
        ],
        nav: [
            {
                text: "文档",
                // link: "/guide/",
                link: "https://learnku.com/docs/owl-admin",
                activeMatch: "^/guide/",
            },
            // {
            //     text: "常见问题",
            //     link: "https://gitee.com/slowlyo/owl-admin/issues?assignee_id=&author_id=&branch=&collaborator_ids=&issue_search=&label_ids=198700653&label_text=&milestone_id=&priority=&private_issue=&program_id=&project_id=slowlyo%2Fowl-admin&project_type=&scope=&single_label_id=&single_label_text=&sort=&state=all&target_project=",
            // },
            {
                text: "Demo",
                link: "http://admin-demo.slowlyo.top/admin",
            },
        ],
        sidebar: {
            "/guide/": [
                {
                    text: "介绍",
                    link: "/guide/",
                },
                {
                    text: "基本使用",
                    collapsible: true,
                    items: [
                        {text: "安装", link: "/guide/base/install"},
                        {text: "目录结构", link: "/guide/base/dir"},
                        {text: "助手函数", link: "/guide/base/helper-function"},
                        {text: "弹窗操作", link: "/guide/base/crud-dialog-action"},
                        {text: "自定义业务逻辑", link: "/guide/base/crud-diy"},
                        {text: "组件的使用", link: "/guide/base/base-use"},
                        {text: "数据导出", link: "/guide/base/data-export"},
                    ],
                },
                {
                    text: "表单",
                    collapsible: true,
                    items: [
                        {text: "Form介绍", link: "/guide/form/form"},
                    ],
                },
                {
                    text: "前端",
                    collapsible: true,
                    items: [
                        {text: "开始", link: "/guide/views/begin"},
                        {text: "注意事项", link: "/guide/views/remind"},
                        {text: "动态加载资源", link: "/guide/views/dynamic-assets"},
                    ],
                },
                {
                    text: "扩展",
                    collapsible: true,
                    items: [
                        {text: "使用扩展", link: "/guide/extensions/use"},
                        {text: "开发扩展", link: "/guide/extensions/develop"},
                    ],
                },
                {
                    text: "内置模块",
                    collapsible: true,
                    items: [
                        {text: "代码生成器", link: "/guide/modules/code-generator"},
                        {text: "系统设置", link: "/guide/modules/settings"},
                    ],
                },
            ],
        },
    },
})