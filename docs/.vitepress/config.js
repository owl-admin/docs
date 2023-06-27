import {defineConfig} from "vitepress"
import mdItCustomAttrs from "markdown-it-custom-attrs"

export default defineConfig({
    lastUpdated: true,
    title: "Owl Admin",
    description: "基于 laravel 、amis 的后台管理系统",
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
    // base: "/",
    themeConfig: {
        outline: "deep",
        lastUpdatedText: "最后一次更新",
        logo: "https://slowlyo.gitee.io/static/images/owl-admin/logo.png",
        lang: "zh-CN",
        docFooter: {
            prev: "上一篇",
            next: "下一篇",
        },
        // editLink: {
        //     pattern: "https://gitee.com/slowlyo/owl-admin-doc/docs/:path",
        //     text: "提交改进",
        // },
        socialLinks: [
            {
                icon: {
                    svg: "<svg class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1894\" height=\"128\" width=\"128\"><path d=\"M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z\" fill=\"#888888\" p-id=\"1895\"></path></svg>",
                },
                link: "https://gitee.com/slowlyo/owl-admin",
            },
            {
                icon: 'github',
                link: "https://github.com/Slowlyo/owl-admin",
            },
        ],
        nav: [
            {
                text: "文档",
                link: "http://doc.owladmin.com",
            },
            {
                text: "论坛",
                link: "http://discuss.owladmin.com",
            },
            {
                text: "Demo",
                link: "http://demo.owladmin.com",
            },
            {
                text: "打赏",
                link: "/donate",
            },
        ],
    },
})
