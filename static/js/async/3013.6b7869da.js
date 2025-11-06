"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["3013"],{4028:function(e,a,t){t.r(a),t.d(a,{default:()=>l});var n=t(2676),o=t(5271),r=t(7416),d=t(4076),i=t(2623),s=t(8889);let l=()=>{let e=`${window.location.hostname.includes("github.io")?"/docs":""}/donate-data.json`,[a,t]=(0,o.useState)([]);return(0,o.useEffect)(()=>{fetch(e).then(e=>e.json()).then(e=>{let a=Object.values(e.reduce((e,a)=>(e[a.nickname]||(e[a.nickname]={nickname:a.nickname,totalAmount:0,donations:[]}),e[a.nickname].totalAmount+=a.amount,e[a.nickname].donations.push(a),e),{})).map(e=>{let a=e.donations.reduce((e,a)=>new Date(a.date)>new Date(e.date)?a:e);return{nickname:e.nickname,amount:e.totalAmount,date:a.date,donations:e.donations.sort((e,a)=>new Date(a.date)-new Date(e.date))}});a.sort((e,a)=>new Date(a.date)-new Date(e.date)),t(a)})},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{children:`
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

          /* \u{6697}\u{8272}\u{4E3B}\u{9898}\u{52A8}\u{753B}\u{FF08}\u{66F4}\u{67D4}\u{548C}\u{3001}\u{66F4}\u{6697}\u{7684}\u{5149}\u{6655}\u{FF09} */
          @keyframes gold-glow-dark {
            0% {
              box-shadow: 0 4px 12px rgba(250, 173, 20, 0.15);
            }
            50% {
              box-shadow: 0 6px 18px rgba(250, 173, 20, 0.35);
            }
            100% {
              box-shadow: 0 4px 12px rgba(250, 173, 20, 0.15);
            }
          }
          @keyframes red-glow-dark {
            0% {
              box-shadow: 0 4px 12px rgba(255, 77, 79, 0.18);
            }
            50% {
              box-shadow: 0 6px 20px rgba(255, 77, 79, 0.4);
            }
            100% {
              box-shadow: 0 4px 12px rgba(255, 77, 79, 0.18);
            }
          }

          html.dark .donate-table .donate-card {
            border-color: #303030 !important;
            background: linear-gradient(145deg, #141414 0%, #1f1f1f 100%) !important;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6) !important;
          }
          html.dark .donate-table .donate-card .nickname {
            color: rgba(255, 255, 255, 0.88);
          }
          html.dark .donate-table .donate-card.normal .amount {
            /* \u{9ED8}\u{8BA4}\u{4FDD}\u{6301}\u{54C1}\u{724C}\u{8272}\u{FF0C}\u{6697}\u{8272}\u{4E0B}\u{4EAE}\u{5EA6}\u{8DB3}\u{591F} */
          }
          html.dark .donate-table .donate-card.premium {
            border-color: #d89614 !important;
            background: linear-gradient(145deg, #2a1f00 0%, #141414 100%) !important;
            animation: gold-glow-dark 2.5s infinite ease-in-out !important;
          }
          html.dark .donate-table .donate-card.super-premium {
            border-color: #ff7875 !important;
            background: linear-gradient(145deg, #2a0f0e 0%, #141414 100%) !important;
            animation: red-glow-dark 2.5s infinite ease-in-out !important;
          }
        `}),(0,n.jsx)("div",{className:"donate-table",children:(0,n.jsx)(r.Z,{grid:{gutter:16,xs:3,sm:4,md:5,lg:6,xl:7,xxl:8},dataSource:a,renderItem:e=>{let a=e.amount>=200,t=e.amount>=50&&e.amount<200,o={border:"1px solid #f0f0f0",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.06)",transition:"all 0.3s ease"},l={...o,borderColor:"#faad14",background:"linear-gradient(145deg, #fffaf0 0%, #ffffff 100%)",animation:"gold-glow 2.5s infinite ease-in-out"},m={...o,borderColor:"#ff7875",background:"linear-gradient(145deg, #fff1f0 0%, #ffffff 100%)",animation:"red-glow 2.5s infinite ease-in-out"},u=`donate-card ${a?"super-premium":t?"premium":"normal"}`;return(0,n.jsx)(r.Z.Item,{children:(0,n.jsx)(d.Z,{title:(0,n.jsxs)("div",{style:{textAlign:"left",maxWidth:300},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("b",{children:"昵称:"})," ",e.nickname]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("b",{children:"总金额:"})," \xa5",e.amount]}),(0,n.jsx)(i.Z,{style:{margin:"8px 0"}}),(0,n.jsx)("div",{style:{maxHeight:200,overflowY:"auto"},children:e.donations.map((e,a)=>(0,n.jsxs)("div",{style:{marginBottom:4},children:[e.date,": \xa5",e.amount,e.remark&&` - ${e.remark}`]},a))})]}),children:(0,n.jsxs)(s.Z,{size:"small",hoverable:!0,style:a?m:t?l:o,className:u,bodyStyle:{padding:"12px 8px",textAlign:"center",cursor:"pointer"},children:[(0,n.jsx)("div",{style:{fontSize:"14px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginBottom:"4px"},className:"nickname",title:e.nickname,children:e.nickname}),(0,n.jsxs)("div",{style:{fontSize:"13px",color:a?"#f5222d":t?"#faad14":"#1677ff"},className:"amount",children:["\xa5",e.amount]})]})})})}})})]})}}}]);