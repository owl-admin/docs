import {Footer} from 'dumi-theme-antd-style'
// @ts-ignore
import React from 'react'

export default () => {
    // @ts-ignore
    return <Footer columns={[
        {
            title: '相关文档',
            items: [
                {
                    title: 'amis',
                    url: 'https://aisuda.bce.baidu.com/amis/zh-CN/components/page',
                    openExternal: true,
                    icon: <img src="/amis.png" alt=""/>
                },
                {
                    title: 'antd',
                    url: 'https://ant.design/index-cn',
                    openExternal: true,
                    icon: <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt=""/>
                },
                {
                    title: 'Laravel',
                    url: 'https://laravel.com/docs',
                    openExternal: true,
                    icon: <img src="/laravel.svg" alt=""/>
                },
                {
                    title: 'Laravel',
                    url: 'https://learnku.com/docs/laravel/10.x',
                    openExternal: true,
                    description: '中文文档',
                    icon: <img src="https://cdn.learnku.com/uploads/images/201802/28/1/Jk8mC7SGI5.jpg!/both/200x200" alt=""/>
                },
            ],
        },
        {
            title: '交流',
            items: [
                {
                    title: 'GitHub Discussions',
                    url: 'https://jq.qq.com/?_wv=1027&k=5La4Ir6c',
                    openExternal: true,
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#fff" d="M128.001 30C72.779 30 28 74.77 28 130.001c0 44.183 28.653 81.667 68.387 94.89c4.997.926 6.832-2.169 6.832-4.81c0-2.385-.093-10.262-.136-18.618c-27.82 6.049-33.69-11.799-33.69-11.799c-4.55-11.559-11.104-14.632-11.104-14.632c-9.073-6.207.684-6.079.684-6.079c10.042.705 15.33 10.305 15.33 10.305c8.919 15.288 23.394 10.868 29.1 8.313c.898-6.464 3.489-10.875 6.349-13.372c-22.211-2.529-45.56-11.104-45.56-49.421c0-10.918 3.906-19.839 10.303-26.842c-1.039-2.519-4.462-12.69.968-26.464c0 0 8.398-2.687 27.508 10.25c7.977-2.215 16.531-3.326 25.03-3.364c8.498.038 17.06 1.149 25.051 3.365c19.087-12.939 27.473-10.25 27.473-10.25c5.443 13.773 2.019 23.945.98 26.463c6.412 7.003 10.292 15.924 10.292 26.842c0 38.409-23.394 46.866-45.662 49.341c3.587 3.104 6.783 9.189 6.783 18.519c0 13.38-.116 24.149-.116 27.443c0 2.661 1.8 5.779 6.869 4.797C199.383 211.64 228 174.169 228 130.001C228 74.771 183.227 30 128.001 30M65.454 172.453c-.22.497-1.002.646-1.714.305c-.726-.326-1.133-1.004-.898-1.502c.215-.512.999-.654 1.722-.311c.727.326 1.141 1.01.89 1.508m4.919 4.389c-.477.443-1.41.237-2.042-.462c-.654-.697-.777-1.629-.293-2.078c.491-.442 1.396-.235 2.051.462c.654.706.782 1.631.284 2.078m3.374 5.616c-.613.426-1.615.027-2.234-.863c-.613-.889-.613-1.955.013-2.383c.621-.427 1.608-.043 2.236.84c.611.904.611 1.971-.015 2.406m5.707 6.504c-.548.604-1.715.442-2.57-.383c-.874-.806-1.118-1.95-.568-2.555c.555-.606 1.729-.435 2.59.383c.868.804 1.133 1.957.548 2.555m7.376 2.195c-.242.784-1.366 1.14-2.499.807c-1.13-.343-1.871-1.26-1.642-2.052c.235-.788 1.364-1.159 2.505-.803c1.13.341 1.871 1.252 1.636 2.048m8.394.932c.028.824-.932 1.508-2.121 1.523c-1.196.027-2.163-.641-2.176-1.452c0-.833.939-1.51 2.134-1.53c1.19-.023 2.163.639 2.163 1.459m8.246-.316c.143.804-.683 1.631-1.864 1.851c-1.161.212-2.236-.285-2.383-1.083c-.144-.825.697-1.651 1.856-1.865c1.183-.205 2.241.279 2.391 1.097"/></g></svg>)
                },
                {
                    title: 'QQ 群',
                    url: 'Ant Design Mobile',
                    openExternal: true,
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><path d="M23.7927 44.5178C20.1344 44.5178 16.7762 43.2933 14.6142 41.4646C13.5161 41.7927 12.1115 42.3204 11.2254 42.9751C10.4664 43.535 10.5613 44.1059 10.6979 44.3362C11.298 45.3491 20.9938 44.9831 23.7927 44.6678V44.5178ZM23.7927 44.5178C27.4516 44.5178 30.8095 43.2933 32.9718 41.4646C34.0693 41.7927 35.4742 42.3204 36.3606 42.9751C37.119 43.535 37.0244 44.1059 36.8875 44.3362C36.2874 45.3491 26.5919 44.9831 23.7927 44.6678V44.5178Z"/><path fill-rule="evenodd" d="M36.3386 20.9326C34.6979 21.3809 29.856 22.5505 23.8144 22.5914H23.7698C17.5753 22.5491 12.6423 21.3214 11.1274 20.8999C10.816 20.8129 10.6458 20.6334 10.6458 20.6334C10.644 20.5785 10.6207 19.6503 10.6207 19.171C10.6207 11.1055 14.4284 3.00029 23.7922 3C33.1561 3.00029 36.9635 11.1052 36.9635 19.1713C36.9635 19.65 36.9402 20.5785 36.9387 20.6337C36.9387 20.6337 36.7297 20.8255 36.3386 20.9326ZM38.8284 25.3504C39.3462 26.7001 39.8573 28.1055 40.2318 29.3107C42.0176 35.0578 41.4388 37.4364 40.9986 37.4898C40.0532 37.6039 37.3187 33.1634 37.3187 33.1634C37.3187 37.6757 33.2448 44.604 23.916 44.6677H23.6685C14.3394 44.604 10.2655 37.6757 10.2655 33.1634C10.2655 33.1634 7.53131 37.6039 6.58588 37.4895C6.14542 37.4364 5.5666 35.0581 7.35268 29.3107C7.72717 28.1058 8.23827 26.7001 8.75609 25.3504C8.75609 25.3504 9.10519 25.3285 9.28207 25.3795C10.7319 25.798 12.2762 26.1689 13.8447 26.4792C13.5776 28.1343 13.4249 30.1827 13.5692 32.6021C13.9533 39.0363 17.7745 43.081 23.6727 43.1394H23.9121C29.8106 43.081 33.6314 39.0363 34.0161 32.6021C34.1604 30.1823 34.0075 28.1345 33.7402 26.4793C35.3363 26.1633 36.9076 25.7848 38.3798 25.3571C38.5307 25.3136 38.8284 25.3504 38.8284 25.3504ZM33.7402 26.4793C30.3004 27.1601 26.7448 27.5502 23.8144 27.5147H23.7698C20.8396 27.5498 17.2841 27.1598 13.8447 26.4792C13.8586 26.3929 13.8728 26.3076 13.8874 26.2234C17.3136 26.8989 20.8513 27.2853 23.769 27.2503H23.8137L23.814 27.25C26.7323 27.2856 30.2709 26.8989 33.6974 26.2231C33.712 26.3074 33.7262 26.3928 33.7402 26.4793ZM18.0376 11.6868C18.1059 13.5266 19.1912 14.9735 20.4615 14.916C21.7309 14.8594 22.7044 13.3208 22.6349 11.4802C22.566 9.6398 21.4811 8.19348 20.2122 8.2504C18.9419 8.30791 17.9687 9.84646 18.0376 11.6868ZM27.1253 14.916C28.3957 14.9735 29.4809 13.5263 29.5489 11.6868C29.6181 9.84646 28.6449 8.30791 27.3746 8.2504C26.1055 8.19378 25.0208 9.64009 24.9519 11.4805C24.8825 13.3208 25.8556 14.8591 27.1253 14.916ZM23.8148 15.9248C28.0469 15.9248 31.4658 16.7625 31.805 17.5141V17.5144C31.821 17.5477 31.8295 17.5841 31.8298 17.621C31.8294 17.6731 31.8131 17.7238 31.7831 17.7663C31.497 18.1835 27.701 20.2436 23.8148 20.2436H23.7692C19.8827 20.2436 16.0867 18.1829 15.8006 17.7663C15.7708 17.7239 15.7545 17.6734 15.7539 17.6216C15.7542 17.5845 15.7627 17.5479 15.7787 17.5144C16.1182 16.7625 19.5368 15.9248 23.7692 15.9248H23.8148Z" clip-rule="evenodd"/><path d="M22.0218 11.7142C22.0799 12.441 21.6812 13.0867 21.1327 13.157C20.5831 13.2277 20.0912 12.6958 20.0329 11.969C19.9754 11.2416 20.3735 10.596 20.9211 10.5259C21.4716 10.4547 21.9643 10.9871 22.0218 11.7139V11.7142ZM25.5117 11.9571C25.624 11.7559 26.3885 10.6984 27.9714 11.0834C28.3874 11.1847 28.5797 11.3336 28.6203 11.392C28.6801 11.4784 28.6968 11.6015 28.6358 11.7673C28.5155 12.096 28.2671 12.087 28.1296 12.0227C28.0406 11.9813 26.9381 11.2463 25.9223 12.3429C25.8523 12.418 25.7274 12.4439 25.6091 12.3546C25.4903 12.2647 25.4416 12.0832 25.5117 11.9571Z"/><path d="M15.5039 26.7117V33.0437C15.5039 33.0437 18.4044 33.6286 21.3105 33.2235V27.383C19.4695 27.2788 17.4841 27.0468 15.5039 26.7117Z"/><path d="M36.9385 20.6337C36.9385 20.6337 31.2962 22.4148 23.8142 22.4653H23.7695C16.2998 22.4151 10.6648 20.6395 10.6456 20.6337L8.75586 25.35C13.4824 26.775 19.3401 27.6933 23.7695 27.6399H23.8142C28.2436 27.6933 34.101 26.775 38.8282 25.35L36.9385 20.6337Z"/></svg>)
                },
            ],
        },
        {
            title: '源码',
            items: [
                {
                    title: 'GitHub',
                    url: 'https://gitee.com/slowlyo/owl-admin',
                    openExternal: true,
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#fff" d="M128.001 30C72.779 30 28 74.77 28 130.001c0 44.183 28.653 81.667 68.387 94.89c4.997.926 6.832-2.169 6.832-4.81c0-2.385-.093-10.262-.136-18.618c-27.82 6.049-33.69-11.799-33.69-11.799c-4.55-11.559-11.104-14.632-11.104-14.632c-9.073-6.207.684-6.079.684-6.079c10.042.705 15.33 10.305 15.33 10.305c8.919 15.288 23.394 10.868 29.1 8.313c.898-6.464 3.489-10.875 6.349-13.372c-22.211-2.529-45.56-11.104-45.56-49.421c0-10.918 3.906-19.839 10.303-26.842c-1.039-2.519-4.462-12.69.968-26.464c0 0 8.398-2.687 27.508 10.25c7.977-2.215 16.531-3.326 25.03-3.364c8.498.038 17.06 1.149 25.051 3.365c19.087-12.939 27.473-10.25 27.473-10.25c5.443 13.773 2.019 23.945.98 26.463c6.412 7.003 10.292 15.924 10.292 26.842c0 38.409-23.394 46.866-45.662 49.341c3.587 3.104 6.783 9.189 6.783 18.519c0 13.38-.116 24.149-.116 27.443c0 2.661 1.8 5.779 6.869 4.797C199.383 211.64 228 174.169 228 130.001C228 74.771 183.227 30 128.001 30M65.454 172.453c-.22.497-1.002.646-1.714.305c-.726-.326-1.133-1.004-.898-1.502c.215-.512.999-.654 1.722-.311c.727.326 1.141 1.01.89 1.508m4.919 4.389c-.477.443-1.41.237-2.042-.462c-.654-.697-.777-1.629-.293-2.078c.491-.442 1.396-.235 2.051.462c.654.706.782 1.631.284 2.078m3.374 5.616c-.613.426-1.615.027-2.234-.863c-.613-.889-.613-1.955.013-2.383c.621-.427 1.608-.043 2.236.84c.611.904.611 1.971-.015 2.406m5.707 6.504c-.548.604-1.715.442-2.57-.383c-.874-.806-1.118-1.95-.568-2.555c.555-.606 1.729-.435 2.59.383c.868.804 1.133 1.957.548 2.555m7.376 2.195c-.242.784-1.366 1.14-2.499.807c-1.13-.343-1.871-1.26-1.642-2.052c.235-.788 1.364-1.159 2.505-.803c1.13.341 1.871 1.252 1.636 2.048m8.394.932c.028.824-.932 1.508-2.121 1.523c-1.196.027-2.163-.641-2.176-1.452c0-.833.939-1.51 2.134-1.53c1.19-.023 2.163.639 2.163 1.459m8.246-.316c.143.804-.683 1.631-1.864 1.851c-1.161.212-2.236-.285-2.383-1.083c-.144-.825.697-1.651 1.856-1.865c1.183-.205 2.241.279 2.391 1.097"/></g></svg>)
                },
                {
                    title: 'Gitee',
                    url: 'https://pro.ant.design/',
                    openExternal: true,
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.59.59 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"/></svg>)
                },
            ],
        },
        {
            title: '其他站点',
            items: [
                {
                    title: '官网',
                    url: 'https://owladmin.com',
                    openExternal: true,
                    icon: <img src="/logo.png" alt=""/>
                },
                {
                    title: 'Demo',
                    url: 'https://demo.owladmin.com',
                    openExternal: true,
                    icon: <img src="/logo.png" alt=""/>
                },
            ],
        },
    ]} bottom="🐘 PHP 是世界上最好的语言 👏"/>
};