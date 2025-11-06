"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["7081"],{3951:function(t,e,s){s.r(e),s.d(e,{default:()=>m});var a=s(2676),i=s(7416),l=s(1478),n=s(5271),r=s(4004),o=s(7504),u=s(993),c=s(1106),d=s(7815);let m=()=>{let[t,e]=(0,n.useState)([]),s=async()=>{let t=await fetch("/extension-data.json"),s=await t.json();for(let t of s){let e=new Date(t.latest_update);t.latest=+(7>Math.floor((new Date-e)/864e5))}e(s)};return(0,n.useEffect)(()=>{s()},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
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

              /* \u{5934}\u{90E8}\u{201C}\u{603B}\u{8BA1}\u{201D}\u{5728}\u{6697}\u{8272}\u{4E0B}\u{66F4}\u{9AD8}\u{5BF9}\u{6BD4}\u{5EA6} */
              html.dark .extension-list .total {
                color: rgba(255, 255, 255, 0.88) !important;
                font-variant-numeric: tabular-nums;
              }

              /* \u{6307}\u{6807}\u{6570}\u{5B57}\u{5728}\u{6697}\u{8272}\u{4E0B}\u{66F4}\u{6E05}\u{6670}\u{FF0C}\u{542F}\u{7528}\u{7B49}\u{5BBD}\u{6570}\u{5B57}\u{4FBF}\u{4E8E}\u{5BF9}\u{9F50} */
              html.dark .extension-list .metric {
                color: rgba(255, 255, 255, 0.85) !important;
                font-variant-numeric: tabular-nums;
              }
              html.dark .extension-list .metric-downloads {}
              html.dark .extension-list .metric-favers {}

              /* \u{6807}\u{9898}\u{5728}\u{6697}\u{8272}\u{4E0B}\u{63D0}\u{9AD8}\u{5BF9}\u{6BD4}\u{5EA6}\u{FF08}\u{8986}\u{76D6}\u{94FE}\u{63A5}\u{9ED8}\u{8BA4}\u{84DD}\u{8272}\u{FF09} */
              html.dark .extension-list .ant-list-item-meta-title,
              html.dark .extension-list .ant-list-item-meta-title a,
              html.dark .extension-list .title {
                color: rgba(255, 255, 255, 0.88) !important;
              }

              /* AntD List \u{5206}\u{9694}\u{7EBF}\u{4E0E}\u{5934}\u{90E8}\u{8FB9}\u{6846} */
              html.dark .extension-list .ant-list-header {
                border-bottom-color: #303030 !important;
              }
              html.dark .extension-list .ant-list-item {
                border-block-end: 1px solid #303030 !important;
              }

              /* \u{52A8}\u{4F5C}\u{533A}\u{57DF}\u{4E0E}\u{56FE}\u{6807}\u{989C}\u{8272} */
              html.dark .extension-list .ant-list-item-action {
                color: rgba(255, 255, 255, 0.65);
              }
              html.dark .extension-list .ant-list-item-action .anticon {
                color: inherit;
              }

              /* \u{4E0B}\u{8F7D} & Star \u{56FE}\u{6807}\u{5728}\u{6697}\u{8272}\u{4E0B}\u{66F4}\u{6E05}\u{6670} */
              html.dark .extension-list .icon {
                color: rgba(255, 255, 255, 0.75) !important;
                transition: color 0.2s ease;
              }
              html.dark .extension-list .ant-list-item-action > li:hover .icon {
                color: rgba(255, 255, 255, 0.95) !important;
              }

              /* \u{884C} hover \u{8F7B}\u{5FAE}\u{80CC}\u{666F} */
              html.dark .extension-list .ant-list-items .ant-list-item:hover {
                background: rgba(255, 255, 255, 0.03);
              }
            `}),(0,a.jsx)("div",{className:"extension-list",children:(0,a.jsx)(i.Z,{header:(0,a.jsxs)("div",{className:"list-header",style:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsxs)("div",{className:"total",children:["总计: ",t.length]}),(0,a.jsxs)("div",{className:"subtle-text",style:{color:"#ccc"},children:["数据来自 ",(0,a.jsx)("a",{href:"https://packagist.org/",target:"_blank",children:"Packagist"})," 每天 6:00 更新"]})]}),dataSource:t,itemLayout:"vertical",renderItem:t=>(0,a.jsx)(i.Z.Item,{extra:(0,a.jsx)(l.Z,{children:!!t.latest&&(0,a.jsx)(c.Z,{color:"green",children:"最近更新"})}),actions:[(0,a.jsx)(d.Z,{content:"这只是下载量哦~ 安装扩展请点击右侧链接查看扩展文档",children:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(r.Z,{className:"icon"}),(0,a.jsx)("span",{className:"metric metric-downloads",children:t.downloads})]})}),(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(o.Z,{className:"icon"}),(0,a.jsx)("span",{className:"metric metric-favers",children:t.favers})]}),(0,a.jsx)(l.Z,{children:(0,a.jsxs)("a",{href:t.url,target:"_blank",children:[(0,a.jsx)(u.Z,{style:{marginRight:"6px"}}),"Packagist"]})}),(0,a.jsx)(l.Z,{children:(0,a.jsxs)("a",{href:t.repository,target:"_blank",children:[(0,a.jsx)(u.Z,{style:{marginRight:"6px"}}),"Source Code"]})})],children:(0,a.jsx)(i.Z.Item.Meta,{title:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)("span",{className:"title",style:{fontWeight:"bold",fontSize:"16px"},children:t.name}),!!t.last_version&&(0,a.jsx)(c.Z,{color:"blue",children:t.last_version})]}),description:(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"desc",style:{color:"#666"},children:t.description}),!!t.latest_update&&(0,a.jsxs)("p",{className:"meta",style:{color:"#ccc",fontSize:"12px",paddingTop:20},children:["Last Update: ",t.latest_update]})]})})})})})]})}}}]);