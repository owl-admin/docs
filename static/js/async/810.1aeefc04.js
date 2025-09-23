"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["810"],{8041:function(t,e,s){s.r(e),s.d(e,{default:function(){return o}});var a=s(2676),i=s(453),n=s(1530);function l(t){return(0,a.jsx)(n.default,{})}function r(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,i.ah)(),t.components);return e?(0,a.jsx)(e,Object.assign({},t,{children:(0,a.jsx)(l,t)})):l(t)}let o=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["ext%2Findex.mdx"]={toc:[],title:"",frontmatter:{footer:!1,sidebar:!1,outline:!1}}},1530:function(t,e,s){s.r(e),s.d(e,{default:function(){return m}});var a=s(2676),i=s(7416),n=s(1478),l=s(5271),r=s(4004),o=s(7504),c=s(993),d=s(1106);let m=()=>{let[t,e]=(0,l.useState)([]),s=async()=>{let t=await fetch("/extension-data.json"),s=await t.json();for(let t of s){let e=new Date(t.latest_update),s=Math.floor((new Date-e)/864e5);t.latest=s<7?1:0}e(s)};return(0,l.useEffect)(()=>{s()},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
              html.dark .extension-list .subtle-text,
              html.dark .extension-list .meta {
                color: rgba(255, 255, 255, 0.45) !important;
              }
              html.dark .extension-list .desc {
                color: rgba(255, 255, 255, 0.75) !important;
              }
              html.dark .extension-list a {
                color: #69b1ff;
              }
              html.dark .extension-list a:hover {
                color: #91caff;
              }

              /* 头部“总计”在暗色下更高对比度 */
              html.dark .extension-list .total {
                color: rgba(255, 255, 255, 0.88) !important;
                font-variant-numeric: tabular-nums;
              }

              /* 指标数字在暗色下更清晰，启用等宽数字便于对齐 */
              html.dark .extension-list .metric {
                color: rgba(255, 255, 255, 0.85) !important;
                font-variant-numeric: tabular-nums;
              }
              html.dark .extension-list .metric-downloads {}
              html.dark .extension-list .metric-favers {}

              /* 标题在暗色下提高对比度（覆盖链接默认蓝色） */
              html.dark .extension-list .ant-list-item-meta-title,
              html.dark .extension-list .ant-list-item-meta-title a,
              html.dark .extension-list .title {
                color: rgba(255, 255, 255, 0.88) !important;
              }

              /* AntD List 分隔线与头部边框 */
              html.dark .extension-list .ant-list-header {
                border-bottom-color: #303030 !important;
              }
              html.dark .extension-list .ant-list-item {
                border-block-end: 1px solid #303030 !important;
              }

              /* 动作区域与图标颜色 */
              html.dark .extension-list .ant-list-item-action {
                color: rgba(255, 255, 255, 0.65);
              }
              html.dark .extension-list .ant-list-item-action .anticon {
                color: inherit;
              }

              /* 下载 & Star 图标在暗色下更清晰 */
              html.dark .extension-list .icon {
                color: rgba(255, 255, 255, 0.75) !important;
                transition: color 0.2s ease;
              }
              html.dark .extension-list .ant-list-item-action > li:hover .icon {
                color: rgba(255, 255, 255, 0.95) !important;
              }

              /* 行 hover 轻微背景 */
              html.dark .extension-list .ant-list-items .ant-list-item:hover {
                background: rgba(255, 255, 255, 0.03);
              }
            `}),(0,a.jsx)("div",{className:"extension-list",children:(0,a.jsx)(i.Z,{header:(0,a.jsxs)("div",{className:"list-header",style:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsxs)("div",{className:"total",children:["总计: ",t.length]}),(0,a.jsxs)("div",{className:"subtle-text",style:{color:"#ccc"},children:["数据来自 ",(0,a.jsx)("a",{href:"https://packagist.org/",target:"_blank",children:"Packagist"})," 每天 6:00 更新"]})]}),dataSource:t,itemLayout:"vertical",renderItem:t=>(0,a.jsx)(i.Z.Item,{extra:(0,a.jsx)(n.Z,{children:!!t.latest&&(0,a.jsx)(d.Z,{color:"green",children:"最近更新"})}),actions:[(0,a.jsxs)(n.Z,{children:[(0,a.jsx)(r.Z,{className:"icon"}),(0,a.jsx)("span",{className:"metric metric-downloads",children:t.downloads})]}),(0,a.jsxs)(n.Z,{children:[(0,a.jsx)(o.Z,{className:"icon"}),(0,a.jsx)("span",{className:"metric metric-favers",children:t.favers})]}),(0,a.jsx)(n.Z,{children:(0,a.jsxs)("a",{href:t.url,target:"_blank",children:[(0,a.jsx)(c.Z,{style:{marginRight:"6px"}}),"Packagist"]})}),(0,a.jsx)(n.Z,{children:(0,a.jsxs)("a",{href:t.repository,target:"_blank",children:[(0,a.jsx)(c.Z,{style:{marginRight:"6px"}}),"Source Code"]})})],children:(0,a.jsx)(i.Z.Item.Meta,{title:(0,a.jsxs)(n.Z,{children:[(0,a.jsx)("span",{className:"title",style:{fontWeight:"bold",fontSize:"16px"},children:t.name}),!!t.last_version&&(0,a.jsx)(d.Z,{color:"blue",children:t.last_version})]}),description:(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"desc",style:{color:"#666"},children:t.description}),!!t.latest_update&&(0,a.jsxs)("p",{className:"meta",style:{color:"#ccc",fontSize:"12px",paddingTop:20},children:["Last Update: ",t.latest_update]})]})})})})})]})}}}]);