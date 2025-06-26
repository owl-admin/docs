"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["1969"],{1212:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var a=t(2676),r=t(453),o=t(5257),i=t(1658);function d(e){let n=Object.assign({h3:"h3",a:"a",p:"p",hr:"hr"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h3,{id:"为什么要打赏",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#为什么要打赏",children:"#"}),"为什么要打赏?"]}),"\n",(0,a.jsx)(n.p,{children:"官网、Demo、文档站点的服务器成本，以及维护和帮助他人的成本。"}),"\n",(0,a.jsx)(n.p,{children:"用爱发电, 终有尽时, 您的支持可以让这个框架走得更远。"}),"\n",(0,a.jsx)(i.default,{}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.h3,{id:"打赏记录",children:[(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#打赏记录",children:"#"}),"打赏记录"]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(o.default,{})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}let l=s;s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["donate%2Findex.mdx"]={toc:[{id:"为什么要打赏",text:"为什么要打赏?",depth:3},{id:"打赏记录",text:"打赏记录",depth:3}],title:"",frontmatter:{footer:!1,sidebar:!1,outline:!1}}},5257:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var a=t(2676),r=t(5271),o=t(7416),i=t(2698),d=t(2623),s=t(8889);let l=()=>{let e=`${window.location.hostname.includes("github.io")?"/docs":""}/donate-data.json`,[n,t]=(0,r.useState)([]);return(0,r.useEffect)(()=>{fetch(e).then(e=>e.json()).then(e=>{let n=Object.values(e.reduce((e,n)=>(!e[n.nickname]&&(e[n.nickname]={nickname:n.nickname,totalAmount:0,donations:[]}),e[n.nickname].totalAmount+=n.amount,e[n.nickname].donations.push(n),e),{})).map(e=>{let n=e.donations.reduce((e,n)=>new Date(n.date)>new Date(e.date)?n:e);return{nickname:e.nickname,amount:e.totalAmount,date:n.date,donations:e.donations.sort((e,n)=>new Date(n.date)-new Date(e.date))}});n.sort((e,n)=>new Date(n.date)-new Date(e.date)),t(n)})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
          @keyframes gold-glow {
            0% {
              box-shadow: 0 4px 12px rgba(250, 173, 20, 0.2);
            }
            50% {
              box-shadow: 0 6px 18px rgba(250, 173, 20, 0.6);
            }
            100% {
              box-shadow: 0 4px 12px rgba(250, 173, 20, 0.2);
            }
          }
          @keyframes red-glow {
            0% {
              box-shadow: 0 4px 12px rgba(255, 77, 79, 0.25);
            }
            50% {
              box-shadow: 0 6px 20px rgba(255, 77, 79, 0.6);
            }
            100% {
              box-shadow: 0 4px 12px rgba(255, 77, 79, 0.25);
            }
          }
        `}),(0,a.jsx)(o.Z,{grid:{gutter:16,xs:3,sm:4,md:5,lg:6,xl:7,xxl:8},dataSource:n,renderItem:e=>{let n=e.amount>=200,t=e.amount>=50&&e.amount<200,r={border:"1px solid #f0f0f0",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.06)",transition:"all 0.3s ease"},l={...r,borderColor:"#faad14",background:"linear-gradient(145deg, #fffaf0 0%, #ffffff 100%)",animation:"gold-glow 2.5s infinite ease-in-out"},c={...r,borderColor:"#ff7875",background:"linear-gradient(145deg, #fff1f0 0%, #ffffff 100%)",animation:"red-glow 2.5s infinite ease-in-out"};return(0,a.jsx)(o.Z.Item,{children:(0,a.jsx)(i.Z,{title:(0,a.jsxs)("div",{style:{textAlign:"left",maxWidth:300},children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("b",{children:"昵称:"})," ",e.nickname]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("b",{children:"总金额:"})," \xa5",e.amount]}),(0,a.jsx)(d.Z,{style:{margin:"8px 0"}}),(0,a.jsx)("div",{style:{maxHeight:200,overflowY:"auto"},children:e.donations.map((e,n)=>(0,a.jsxs)("div",{style:{marginBottom:4},children:[e.date,": \xa5",e.amount,e.remark&&` - ${e.remark}`]},n))})]}),children:(0,a.jsxs)(s.Z,{size:"small",hoverable:!0,style:n?c:t?l:r,bodyStyle:{padding:"12px 8px",textAlign:"center",cursor:"pointer"},children:[(0,a.jsx)("div",{style:{fontSize:"14px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginBottom:"4px"},title:e.nickname,children:e.nickname}),(0,a.jsxs)("div",{style:{fontSize:"13px",color:n?"#f5222d":t?"#faad14":"#1677ff"},children:["\xa5",e.amount]})]})})})}})]})}},1658:function(e,n,t){t.r(n),t.d(n,{default:function(){return r}});var a=t(2676);t(5271);let r=()=>{let e=`${window.location.hostname.includes("github.io")?"/docs":""}/pay.jpg`;return(0,a.jsx)("img",{src:e,width:"500",alt:"支付二维码",style:{borderRadius:"10px"}})}}}]);