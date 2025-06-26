"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["2994"],{5257:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var a=n(2676),o=n(5271),i=n(7416),r=n(2698),s=n(2623),d=n(8889);let l=()=>{let e=`${window.location.hostname.includes("github.io")?"/docs":""}/donate-data.json`,[t,n]=(0,o.useState)([]);return(0,o.useEffect)(()=>{fetch(e).then(e=>e.json()).then(e=>{let t=Object.values(e.reduce((e,t)=>(!e[t.nickname]&&(e[t.nickname]={nickname:t.nickname,totalAmount:0,donations:[]}),e[t.nickname].totalAmount+=t.amount,e[t.nickname].donations.push(t),e),{})).map(e=>{let t=e.donations.reduce((e,t)=>new Date(t.date)>new Date(e.date)?t:e);return{nickname:e.nickname,amount:e.totalAmount,date:t.date,donations:e.donations.sort((e,t)=>new Date(t.date)-new Date(e.date))}});t.sort((e,t)=>new Date(t.date)-new Date(e.date)),n(t)})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
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
        `}),(0,a.jsx)(i.Z,{grid:{gutter:16,xs:3,sm:4,md:5,lg:6,xl:7,xxl:8},dataSource:t,renderItem:e=>{let t=e.amount>=200,n=e.amount>=50&&e.amount<200,o={border:"1px solid #f0f0f0",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.06)",transition:"all 0.3s ease"},l={...o,borderColor:"#faad14",background:"linear-gradient(145deg, #fffaf0 0%, #ffffff 100%)",animation:"gold-glow 2.5s infinite ease-in-out"},x={...o,borderColor:"#ff7875",background:"linear-gradient(145deg, #fff1f0 0%, #ffffff 100%)",animation:"red-glow 2.5s infinite ease-in-out"};return(0,a.jsx)(i.Z.Item,{children:(0,a.jsx)(r.Z,{title:(0,a.jsxs)("div",{style:{textAlign:"left",maxWidth:300},children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("b",{children:"昵称:"})," ",e.nickname]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("b",{children:"总金额:"})," \xa5",e.amount]}),(0,a.jsx)(s.Z,{style:{margin:"8px 0"}}),(0,a.jsx)("div",{style:{maxHeight:200,overflowY:"auto"},children:e.donations.map((e,t)=>(0,a.jsxs)("div",{style:{marginBottom:4},children:[e.date,": \xa5",e.amount,e.remark&&` - ${e.remark}`]},t))})]}),children:(0,a.jsxs)(d.Z,{size:"small",hoverable:!0,style:t?x:n?l:o,bodyStyle:{padding:"12px 8px",textAlign:"center",cursor:"pointer"},children:[(0,a.jsx)("div",{style:{fontSize:"14px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginBottom:"4px"},title:e.nickname,children:e.nickname}),(0,a.jsxs)("div",{style:{fontSize:"13px",color:t?"#f5222d":n?"#faad14":"#1677ff"},children:["\xa5",e.amount]})]})})})}})]})}}}]);