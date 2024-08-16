import{u as h,j as i,m as b,a as t,L as n,d as K,as as q,C as R,b as D,az as B,p as N,q as I,P as L,a8 as z,bq as H,r as p,$ as W,F as J,ah as Q,w as Z,S as X,N as ee,bY as te,c0 as ae,I as U,x as se,D as F,A as ne,h as ie,k as re,E as ce,b8 as k,f as le,i as oe,O as x,H as T}from"./index-725ccea5.js";function de(){var v;const e=h(E),l=h(L.PhoneNumber),s=()=>{var a,c;if(!(e!=null&&e.title)||!(e!=null&&e.description)||!(e!=null&&e.price)||!(e!=null&&e.attachments)||((a=e==null?void 0:e.attachments)==null?void 0:a.length)===0){let m;switch(!0){case!(e!=null&&e.title):m=n("APPS.MARKETPLACE.ERROR_POPUP.NO_TITLE");break;case!(e!=null&&e.description):m=n("APPS.MARKETPLACE.ERROR_POPUP.NO_DESCRIPTION");break;case!(e!=null&&e.price):m=n("APPS.MARKETPLACE.ERROR_POPUP.NO_PRICE");break;case(!(e!=null&&e.attachments)||((c=e==null?void 0:e.attachments)==null?void 0:c.length)===0):m=n("APPS.MARKETPLACE.ERROR_POPUP.NO_ATTACHMENTS");break;default:m="Unknown error"}setTimeout(()=>{R.PopUp.set({title:n("APPS.MARKETPLACE.ERROR_POPUP.TITLE"),description:m,buttons:[{title:n("APPS.MARKETPLACE.ERROR_POPUP.OK")}]})},250)}else{let m={...e,number:l};N("MarketPlace",{action:"sendPost",data:m},Math.floor(Math.random()*1e3).toString()).then(d=>{if(!d)return I("warning","Failed to send post, no id could be generated");g.set([{...m,id:d},...g.value]),E.reset()})}};return i(b.div,{initial:{opacity:0,y:100},animate:{opacity:1,y:0},exit:{opacity:0,y:100},transition:{duration:.2,ease:"easeInOut"},className:"new-post-container",children:[i("div",{className:"new-post-header",children:[t("div",{}),t("div",{className:"close",children:t("div",{onClick:()=>E.set(null)})}),t("div",{className:"post",onClick:s,children:n("APPS.MARKETPLACE.POST")})]}),i("div",{className:"new-post-body",children:[i("div",{className:"item",children:[t("div",{className:"title",children:n("APPS.MARKETPLACE.PRICE")}),t(K,{type:"number",placeholder:"0",onChange:a=>{if(!a.target.value.match(/^[0-9]*$/))return a.preventDefault();E.patch({price:parseFloat(a.target.value)})}})]}),i("div",{className:"item",children:[t("div",{className:"title",children:n("APPS.MARKETPLACE.TITLE")}),t(K,{type:"text",placeholder:"Title",maxLength:50,onChange:a=>E.patch({title:a.target.value})})]}),i("div",{className:"item",children:[t("div",{className:"title",children:n("APPS.MARKETPLACE.DESCRIPTION")}),t(q,{type:"text",placeholder:"Your post",maxLength:250,rows:5,onChange:a=>E.patch({description:a.target.value})})]}),i("div",{className:"item",children:[i("div",{className:"title",children:[" ",n("APPS.MARKETPLACE.IMAGES")]}),i("div",{className:"images",children:[(e==null?void 0:e.attachments)&&e.attachments.length>0&&e.attachments.map((a,c)=>t("div",{className:"image",style:{backgroundImage:`url(${a})`},onClick:()=>{E.patch({attachments:e.attachments.filter((m,d)=>d!==c)})}},c)),(!(e!=null&&e.attachments)||((v=e==null?void 0:e.attachments)==null?void 0:v.length)<=3)&&t("div",{className:"image",onClick:()=>{var a,c,m;R.Gallery.set({allowExternal:(m=(c=(a=D)==null?void 0:a.value)==null?void 0:c.AllowExternal)==null?void 0:m.MarketPlace,onSelect:d=>E.patch({attachments:[...(e==null?void 0:e.attachments)??[],d.src]})})},children:t(B,{})})]})]})]})]})}function me({post:e,last:l}){const s=h(D),v=h(L.PhoneNumber),a=h(w);return t(b.div,{id:l,initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},exit:{opacity:0,scale:.9},viewport:{once:!0},transition:{duration:.2,ease:"easeInOut"},className:"post-item",onClick:()=>{f.set(e)},children:i("div",{className:"post-info",children:[i("div",{className:"post-header",children:[t("div",{className:"title",children:e.title}),t("div",{className:"date",children:G(e.timestamp)})]}),i("div",{className:"post-content",children:[i("div",{className:"post-text",children:[t("div",{className:"description",children:z(e.description)}),t("div",{className:"price",children:s==null?void 0:s.CurrencyFormat.replace("%s",e.price.toLocaleString())})]}),t("div",{className:"attachment",children:t("img",{src:e.attachments[0]})})]}),(v===e.number||a)&&t("div",{className:"post-footer",children:t(H,{className:"red",onClick:c=>{c.stopPropagation(),Y(e.id)}})})]})})}const V={posts:[{id:"1",title:"X80 Proto",description:"X80 Proto, white with red details. Has been driven carefully and is in mint condition",number:"0601232354",attachments:["https://www.digitaltrends.com/wp-content/uploads/2020/08/grotti-x80-proto.jpg"],price:2e6,timestamp:Date.now()-1e3*60*60*2},{id:"2",title:"Banshee",description:"Selling my 2020 model Bravado Banshee, low mileage and in perfect condition. Price is negotiable.",number:"0606643134",attachments:["https://static.wikia.nocookie.net/gtawiki/images/e/ea/Penumbra-GTAV-front-Hao.png","https://static.wikia.nocookie.net/gtawiki/images/e/ea/Penumbra-GTAV-front-Hao.png"],price:74999,timestamp:Date.now()-1e3*60*60*24*2},{id:"3",title:"Sanchez, 2018 Model",description:"Selling my 2018 Sanchez. It has low mileage and is in perfect condition. Price is negotiable.",number:"0651566734",attachments:["https://static.wikia.nocookie.net/gtawiki/images/9/93/Sanchez2-GTAV-front.png","https://img.gta5-mods.com/q95/images/honda-crf-450-livery-sanchez/79a3f3-QlX0LDJLBUGUwml4_mil2w_0_0.jpg"],price:1999,timestamp:Date.now()-1e3*60*60*24*3},{id:"4",title:"Dominator",description:"Selling my 2020 model Dominator, low mileage and in perfect condition.",number:"1234567890",attachments:["https://static.wikia.nocookie.net/gtawiki/images/7/78/Dominator-GTAV-front.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMLEjCaWEavvnX3kliYe0gwrIGYljDaPb-KA&s"],price:49999,timestamp:Date.now()-1e3*60*60*24*5}]};function he(){const e=h(L.Settings),l=h(L.PhoneNumber),s=h(g),[v,a]=p.useState([]),c=h(O),[m,d]=p.useState(0),[S,C]=p.useState(!1),[r,P]=p.useState(!1),[u,M]=p.useState(""),[_,j]=p.useState("");p.useEffect(()=>{N("MarketPlace",{action:"getPosts",from:c==="personal_posts"?l:null,page:0},V.posts.filter(o=>c==="personal_posts"?o.number===l:!0)).then(o=>{o&&o.length>0?g.set(o):C(!0)})},[c]),p.useEffect(()=>{u.length>0&&N("MarketPlace",{action:"search",from:c==="personal_posts"?l:null,query:u},V.posts.filter(o=>o.title.toLowerCase().includes(u.toLowerCase())&&(c==="personal_posts"?o.number===l:!0))).then(o=>{o&&a(o)})},[u]),p.useEffect(()=>{const o=setTimeout(()=>M(_),500);return()=>clearTimeout(o)},[_]),p.useEffect(()=>{d(0),C(!1),P(!1),a([]),g.set([])},[c]);const $=()=>{if(S||r)return;let o=document.querySelector("#last");if(!o)return;!ee(o)&&(P(!0),N("MarketPlace",{action:"getPosts",from:c==="personal_posts"?l:null,page:m+1},null).then(A=>{A&&A.length>0?(g.set([...s,...A]),P(!1),A.length<15&&C(!0)):C(!0)}),d(A=>A+1))};return W("marketPlace:newPost",o=>{e.airplaneMode||o.number!==l&&g.set([o,...s])}),i(J,{children:[i("div",{className:"marketplace-header",children:[i("div",{className:"marketplace-header-top",children:[t("div",{className:"title",children:n("APPS.MARKETPLACE.MARKETPLACE")}),t(Q,{onClick:()=>E.set({})})]}),t(Z,{placeholder:n("APPS.MARKETPLACE.SEARCH"),onChange:o=>j(o.target.value)})]}),t("div",{className:"marketplace-wrapper",children:t(b.div,{...X(c==="home"?"left":"right",c,.2),className:"posts",onScroll:$,children:(u.length>0?v:s).map((o,y)=>{let A=y===s.length-1?"last":"";return t(me,{post:o,last:A},o.id)})})})]})}const ue=[{icon:t(te,{}),title:n("APPS.MARKETPLACE.HOME"),value:"home"},{icon:t(ae,{}),title:n("APPS.MARKETPLACE.YOUR_POSTS"),value:"personal_posts"}];function pe(){const e=h(O);return t("div",{className:"marketplace-footer",children:ue.map((l,s)=>i("div",{className:"item","data-active":e===l.value,onClick:()=>O.set(l.value),children:[l.icon,l.title]},s))})}function Pe(){const e=h(f),l=h(D),s=h(L.PhoneNumber),v=h(w),a=p.useRef(null),[c,m]=p.useState(0),d={pos:{startLeft:0,startX:0},onMouseDown:r=>{ce("MarketPlace")&&(d.pos={startLeft:a.current.scrollLeft,startX:r.clientX},a.current.style.userSelect="none",document.addEventListener("mouseup",d.onMouseUp),document.addEventListener("mousemove",d.onMove))},onMove:r=>{const P=(r.clientX-d.pos.startX)/k();a.current.scrollLeft=d.pos.startLeft-P;const u=a.current.getBoundingClientRect();(u.left*k()-5>r.clientX||r.clientX>u.right*k()-5)&&d.onMouseUp()},onMouseUp:()=>{a.current.style.removeProperty("user-select"),document.removeEventListener("mouseup",d.onMouseUp),document.removeEventListener("mousemove",d.onMove);const r=e.attachments,P=a.current.clientWidth;let u=c;const M=a.current.scrollLeft-d.pos.startLeft;M>P/2&&u<r.length-1?u++:M<-P/2&&u>0&&u--,S(u)}},S=r=>{r<0||r>=e.attachments.length||(a.current.scrollTo({left:r*a.current.offsetWidth,behavior:"smooth"}),m(r))},C=r=>{r&&R.PopUp.set({title:n("APPS.SERVICES.CALL_POPUP.TITLE"),description:n("APPS.SERVICES.CALL_POPUP.DESCRIPTION").format({name:le(r)}),buttons:[{title:n("APPS.SERVICES.CALL_POPUP.CANCEL")},{title:n("APPS.SERVICES.CALL_POPUP.PROCEED"),cb:()=>{let P=F(r);oe({...P,number:r})}}]})};return i("div",{className:"post-container",children:[t("div",{className:"marketplace-header",children:t("div",{className:"marketplace-header-top",children:i("div",{className:"back",onClick:()=>f.reset(),children:[t(U,{}),n("APPS.MARKETPLACE.HOME")]})})}),t("div",{className:"marketplace-wrapper",children:i("div",{className:"post-data",children:[i("div",{className:"attachments",children:[t("div",{className:"attachments-grid",ref:a,onMouseDown:d.onMouseDown,children:e.attachments&&e.attachments.map((r,P)=>t("div",{className:"image",children:t("img",{src:r})},P))}),i("div",{className:"arrows",children:[t("div",{className:"arrow","data-disabled":c===0,children:t(U,{onClick:()=>S(c-1)})}),t("div",{className:"arrow","data-disabled":c===e.attachments.length-1,children:t(se,{onClick:()=>S(c+1)})})]}),t("div",{className:"count",children:n("APPS.MARKETPLACE.AMOUNT_OF_TOTAL").format({amount:c+1,total:e.attachments.length})})]}),i("div",{className:"post-content",children:[t("div",{className:"date",children:G(e.timestamp)}),t("div",{className:"title",children:e.title}),t("div",{className:"price",children:l.CurrencyFormat.replace("%s",e.price.toLocaleString())}),t("div",{className:"description",children:e.description}),i("div",{className:"buttons",children:[i("div",{className:"button green",onClick:()=>{let r=F(e.number);ne.patch({active:{name:"Messages",data:{number:e.number,name:r==null?void 0:r.name,avatar:r==null?void 0:r.avatar,view:"messages"}}})},children:[t(ie,{}),n("APPS.MARKETPLACE.MESSAGE")]}),i("div",{className:"button blue",onClick:()=>C(e.number),children:[t(re,{}),n("APPS.MARKETPLACE.CALL")]}),(s===e.number||v)&&i("div",{className:"button red",onClick:()=>Y(e.id),children:[t(H,{}),n("APPS.MARKETPLACE.REMOVE")]})]})]})]})})]})}const O=T("home"),w=T(!1),g=T([]),f=T(null),E=T(null);function ge(){const e=h(f),l=h(E);return p.useEffect(()=>{N("isAdmin").then(s=>w.set(s))},[]),i("div",{className:"marketplace-container",children:[i(b.div,{...X(e?"right":"left",e?"post":"home",.2),className:"marketplace-canister",children:[t(he,{}),t(x,{children:e&&t(Pe,{})}),t(pe,{})]}),t(x,{children:l&&t(de,{})})]})}const Y=e=>{if(!e)return I("error","No id provided to delete post");R.PopUp.set({title:n("APPS.MARKETPLACE.DELETE_POPUP.TITLE"),description:n("APPS.MARKETPLACE.DELETE_POPUP.TEXT"),buttons:[{title:n("APPS.MARKETPLACE.DELETE_POPUP.CANCEL")},{title:n("APPS.MARKETPLACE.DELETE_POPUP.PROCEED"),color:"red",cb:()=>{N("MarketPlace",{action:"deletePost",id:e},!0).then(l=>{if(!l)return I("error","Failed to delete post");g.set(g.value.filter(s=>s.id!==e)),f!=null&&f.value&&f.reset()})}}]})},G=e=>{const l=new Date,s=new Date(e);if(l.getFullYear()===s.getFullYear()&&l.getMonth()===s.getMonth())return l.getDate()===s.getDate()?n("MISC.TODAY_TIME").format({hours:s.getHours(),minutes:s.getMinutes()}):l.getDate()-1===s.getDate()?n("MISC.YESTERDAY_TIME").format({hours:s.getHours(),minutes:s.getMinutes()}):`${s.toLocaleString("default",{month:"long"})} ${s.getDate()}th, ${s.getFullYear()}`};export{f as ActivePost,w as IsAdmin,E as NewPost,g as Posts,O as View,ge as default,Y as deletePost,G as formatDate};
