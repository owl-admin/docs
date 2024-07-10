import {defineConfig} from 'dumi'

export default defineConfig({
    themeConfig: {
        name: 'Owl Admin',
        logo: '/logo.png',
        footer: false,
        editLink: true,
        lastUpdated: true,
        socialLinks: {
            github: 'https://github.com/slowlyo/owl-admin',
        },
        syntaxTheme: {
            shiki: {
                dark: 'dark-plus',
                light: 'github-light',
            },
        },
    },
    // 百度统计
    analytics: {baidu: '12f470dfb27fc3e59676c7397bf99dd8'},
})
