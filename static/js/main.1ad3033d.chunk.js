(this.webpackJsonpsenditff=this.webpackJsonpsenditff||[]).push([[0],{12:function(e,t,n){e.exports={top:"main_top__2Id-j",mage:"main_mage__3P7_w",bod:"main_bod__1vSBs",footer:"main_footer__1Yv2s",footerCon:"main_footerCon__34zvE"}},25:function(e,t,n){e.exports={form:"delete_form__1GcHF",p:"delete_p__2Zg1q"}},26:function(e,t,n){e.exports={form:"admin_form__2sFkH"}},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(17),s=n.n(r),i=n(6),j=n(3),a=n(4),o=n(25),d=n.n(o),l=n(0);var b=function(){var e=Object(c.useState)(),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useRef)();return Object(l.jsxs)("form",{className:d.a.form,onSubmit:function(e){e.preventDefault();var t=s.current.value;fetch("http://localhost:5000/parcel/".concat(t,"/cancel"),{method:"DELETE",mode:"cors",crossDomain:"true",body:JSON.stringify(t),headers:{"Content-Type":"application/json:charset=utf-8"}}).then((function(e){return e.json()})).then((function(e){r(JSON.stringify(e))}))},children:[Object(l.jsx)("label",{htmlFor:"myId",children:" RefID "}),Object(l.jsx)("input",{name:"myId",type:"text",required:!0,ref:s}),Object(l.jsx)("button",{type:"submit",children:" Delete"}),n&&Object(l.jsxs)("div",{role:"alert",children:[Object(l.jsx)("pre",{children:n})," "]})]})},u=n(5),O=n(11),h=n.n(O);var x=function(e){var t=e.myId,n=Object(c.useRef)(null),r=Object(c.useState)(),s=Object(a.a)(r,2),i=s[0],j=s[1],o=Object(c.useState)(""),d=Object(a.a)(o,2),b=d[0],O=d[1];return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c=n.current.value,r={id:t,destination:c};fetch("https://web-app-senditb.herokuapp.com/parcel/".concat(t,"/destination"),{method:"PUT",body:JSON.stringify(r),mode:"cors",crossDomain:"true",headers:{"Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()})).then((function(e){window.location.reload(),j("")}))},children:[Object(l.jsx)("div",{children:Object(l.jsx)(h.a,{value:b,onChange:O,children:function(e){var t=e.getInputProps,c=e.getSuggestionItemProps,r=e.suggestions,s=e.loading;return Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"destination",children:" Destination"}),Object(l.jsx)("input",Object(u.a)(Object(u.a)({},t({autoFocus:!0})),{},{required:!0,type:"text",id:"destination",name:"destination",ref:n})),Object(l.jsxs)("div",{children:[s&&Object(l.jsx)("div",{children:"loading..."}),r.map((function(e){return Object(l.jsx)("div",Object(u.a)(Object(u.a)({},c(e)),{},{children:Object(l.jsx)("span",{children:e.description},e.id)}))}))]})]})}})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",children:" Submit "})}),i&&Object(l.jsx)("div",{children:Object(l.jsx)("pre",{children:i})})]})})},p=n(7),f=n(18),m=n.n(f);var v=function(e){var t=e.val,n=Object(p.useState)(!1),c=Object(a.a)(n,2),r=c[0],s=c[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:t._id}),Object(l.jsx)("td",{children:t.destination}),Object(l.jsx)("td",{children:t.location}),Object(l.jsx)("td",{children:t.recipient}),Object(l.jsx)("td",{children:t.phone}),Object(l.jsx)("td",{children:t.status}),Object(l.jsx)("td",{children:Object(l.jsx)("button",{onClick:function(){"cancelled"===t.status||"delivered"===t.status?alert("already cancelled or delivered"):s(!0)},children:"edit"})}),Object(l.jsx)("td",{children:Object(l.jsx)("button",{onClick:function(){var e=t._id,n={status:"cancelled",id:e};"delivered"===t.status||"cancelled"===t.status?alert("order already delivered/cancelled"):window.confirm("are you sure you want to cancel")?fetch("https://web-app-senditb.herokuapp.com/parcel/".concat(e,"/status"),{method:"put",body:JSON.stringify(n),crossDomain:!0,mode:"cors",headers:{"Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()})).then((function(e){window.location.reload(),alert("sucessfully cancelled")})):window.document.location="/senditff/get"},children:"cancel"})})]},t._id),Object(l.jsx)(m.a,{title:"enter update",isOpen:r,onRequestClose:function(){s(!1)},style:{content:{top:"10%",left:"50%",right:"50%",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"},overlay:{background:""}},children:Object(l.jsx)(x,{myId:t._id})})]})};var g=function(){var e=JSON.parse(localStorage.getItem("token")),t=Object(c.useState)([]),n=Object(a.a)(t,2),r=n[0],s=n[1],j=Object(c.useState)(),o=Object(a.a)(j,2),d=o[0],b=o[1],u=Object(c.useState)(),O=Object(a.a)(u,2),h=O[0],x=O[1],f=Object(c.useState)(),m=Object(a.a)(f,2),g=m[0],y=m[1],S=Object(c.useState)(),w=Object(a.a)(S,2),C=w[0],_=w[1];return Object(p.useEffect)((function(){fetch("https://web-app-senditb.herokuapp.com/parcel/:id/search?name=".concat(e)).then((function(e){return e.json()})).then((function(e){s(e);var t=e.filter((function(e){return"delivered"===e.status}));x(t.length);var n=e.filter((function(e){return"transit"===e.status}));y(n.length),b(e.length),0===e.length?_("NO ENTRY YET"):_("")}))}),[e]),Object(l.jsxs)("div",{children:["Welcome ",e,Object(l.jsx)("br",{}),Object(l.jsx)(i.b,{to:"/post",children:" create order"}),Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:["Total Number Of Orders: ",Object(l.jsx)("span",{id:"order",children:d&&Object(l.jsx)("span",{children:d})})]}),Object(l.jsxs)("li",{children:["Number Of Orders Delivered: ",Object(l.jsx)("span",{id:"deliver",children:h&&Object(l.jsx)("span",{children:h})})]}),Object(l.jsxs)("li",{children:[" Number Of Orders On Transit:  ",Object(l.jsx)("span",{id:"transit",children:g&&Object(l.jsx)("span",{children:g})})]})]}),Object(l.jsxs)("table",{cellPadding:40,margin:0,children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Order id"}),Object(l.jsx)("th",{children:"destination"}),Object(l.jsx)("th",{children:"Location"}),Object(l.jsx)("th",{children:"recipient name"}),Object(l.jsx)("th",{children:"recipient mobile"}),Object(l.jsx)("th",{children:"status"}),Object(l.jsx)("th",{children:"update destination"}),Object(l.jsx)("th",{children:"cancel"})]})}),Object(l.jsx)("tbody",{children:r.map((function(e){return Object(l.jsx)(v,{val:e},e._id)}))})]}),C&&Object(l.jsx)("div",{children:Object(l.jsx)("pre",{children:C})})]})};var y=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(null),n=Object(c.useState)(),r=Object(a.a)(n,2),s=r[0],i=r[1];return Object(l.jsxs)("div",{children:[Object(l.jsxs)("form",{onSubmit:function(n){n.preventDefault();var c=e.current.value,r=t.current.value,s={location:c,id:r};fetch("https://web-app-senditb.herokuapp.com/parcel/".concat(r,"/location"),{method:"PUT",body:JSON.stringify(s),mode:"cors",crossDomain:"true",headers:{"Content-Type":"application/json;chrset=utf-8"}}).then((function(e){return e.json()})).then((function(e){i(JSON.stringify(e))}))},children:[Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"text",name:"location",id:"location",required:!0,placeholder:"location",ref:e})}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"string",name:"id",id:"id",required:!0,placeholder:"enter id",ref:t})}),Object(l.jsx)("button",{type:"submit",children:"submit"})]}),s&&Object(l.jsxs)("div",{children:[Object(l.jsx)("pre",{children:s})," "]})]})};var S=function(e){var t=e.myne,n=Object(c.useRef)();return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c=n.current.value,r=t;console.log(r);var s={status:c,id:r};fetch("https://web-app-senditb.herokuapp.com/parcel/".concat(r,"/status"),{method:"put",body:JSON.stringify(s),crossDomain:!0,mode:"cors",headers:{"Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()})).then((function(e){window.location.reload(),console.log(e)}))},children:[Object(l.jsx)("label",{htmlFor:"status",children:" Status"}),Object(l.jsxs)("select",{id:"status",name:"status",ref:n,required:!0,children:[Object(l.jsx)("option",{value:"transit",children:" transit"}),Object(l.jsx)("option",{value:"delivered",children:" delivered"})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",children:" Submit "})})]})})},w=n(12),C=n.n(w);var _=function(){var e=Object(p.useState)(),t=Object(a.a)(e,2),n=t[0],c=t[1],r=Object(p.useState)(),s=Object(a.a)(r,2),j=s[0],o=s[1];return Object(p.useEffect)((function(){var e=["You are welcome to our website","We offer the best service ever","A trier will confuse you","Always stay tune for the latest"],t=0;setInterval((function(){t>=e.length&&(t=0),o(e[t]),t++}),2e3)}),[]),setInterval((function(){var e=new Date,t=e.getHours(),n=e.getMinutes(),r=e.getSeconds(),s="AM";t>12&&(t-=12,s="PM"),t<10&&(t="0"+t),n<10&&(n="0"+n),r<10&&(r="0"+r),c(t+":"+n+":"+r+":"+s)})),Object(l.jsxs)("div",{className:C.a.bod,children:[Object(l.jsx)("nav",{className:C.a.top,children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/",children:" Home "})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/register",children:" Register "})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/login",children:" Login "})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/",children:" About "})})]})}),Object(l.jsx)("section",{className:C.a.body,children:Object(l.jsxs)("div",{className:C.a.mage,children:[j&&Object(l.jsx)("div",{children:Object(l.jsx)("pre",{children:j})}),Object(l.jsx)("button",{children:"Learn more"})]})}),n&&Object(l.jsx)("div",{children:Object(l.jsx)("pre",{children:n})}),Object(l.jsx)("footer",{className:C.a.footer,children:Object(l.jsxs)("div",{className:C.a.footerCon,children:[Object(l.jsxs)("div",{id:"about",children:[Object(l.jsx)("h1",{children:"About"}),Object(l.jsx)("p",{children:"SendIt is a superfast delivery company aimed at making life better"})]}),Object(l.jsxs)("div",{id:"contact",children:[Object(l.jsx)("h1",{children:"Contact"}),Object(l.jsx)("p",{children:"customer service: 08086107117"}),Object(l.jsx)("p",{children:"No.32 laula Street, Lagos State"})]}),Object(l.jsxs)("div",{id:"socials",children:[Object(l.jsx)("h1",{children:"Socials"}),Object(l.jsx)("p",{children:"you can get to us via our social media handles:"})]})]})})]})},N=n(26),R=n.n(N);var D=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)();return Object(l.jsxs)("div",{className:R.a.form,children:[Object(l.jsxs)("form",{onSubmit:function(c){c.preventDefault();var r={username:t.current.value,password:n.current.value};e.sendData(r)},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"username",children:" Username"}),Object(l.jsx)("input",{required:!0,type:"text",id:"username",ref:t})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"password",children:" Password"}),Object(l.jsx)("input",{required:!0,type:"text",id:"password",ref:n})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",children:" Submit "})})]}),Object(l.jsx)("nav",{children:Object(l.jsx)(i.b,{to:"/login",children:" go to login "})})]})};var F=function(){var e=Object(c.useState)(!0),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(j.g)();return Object(l.jsxs)("div",{children:[Object(l.jsx)(D,{sendData:function(e){fetch("https://web-app-senditb.herokuapp.com/admin/add",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e&&(console.log(e),s("/get"))})),r("username or password not match")}}),n&&Object(l.jsxs)("div",{role:"alert",children:[Object(l.jsx)("pre",{children:n})," "]})]})},k=n(19),P=n.n(k);P.a.setAppElement("#root");var T=function(e){var t=e.valo,n=(e.editable,e.del,e.myne),r=Object(c.useState)(!1),s=Object(a.a)(r,2),i=s[0],j=s[1],o=n;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:t._id}),Object(l.jsx)("td",{children:t.destination}),Object(l.jsx)("td",{children:t.location}),Object(l.jsx)("td",{children:t.status}),Object(l.jsx)("td",{children:Object(l.jsx)("button",{type:"button",onClick:function(){"cancelled"===t.status||"delivered"===t.status?alert("already cancelled or delivered"):j(!0)},children:"edit"})}),Object(l.jsx)("td",{children:Object(l.jsx)("button",{onClick:function(){"transit"===t.status||"ready for pickup"===t.status?alert("cannot be deleted, Order still in transit and not yet delivered"):window.confirm("are you sure you want to delete")?fetch("https://web-app-senditb.herokuapp.com/parcel/".concat(o,"/cancel"),{method:"DELETE",mode:"cors",crossDomain:"true",body:JSON.stringify(o),headers:{"Content-Type":"application/json:charset=utf-8"}}).then((function(e){return e.json()})).then((function(e){console.log(e),alert("succesfully deleted")})):window.document.location="/senditff/receive"},children:"Delete"})})]}),Object(l.jsx)(P.a,{title:"enter update",isOpen:i,onRequestClose:function(){j(!1)},style:{content:{top:"10%",left:"50%",right:"50%",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"},overlay:{background:""}},children:Object(l.jsx)(S,{myne:o})})]})};var E=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!1),j=Object(a.a)(s,2),o=j[0],d=j[1];function b(){d(!0)}function u(){alert("deleted")}return Object(c.useEffect)((function(){fetch("https://web-app-senditb.herokuapp.com/parcel/getall").then((function(e){return e.json()})).then((function(e){r(e)}))}),[n]),Object(l.jsxs)("div",{children:[Object(l.jsx)(i.b,{to:"../",children:"Logout"}),o?Object(l.jsx)(S,{oncance:function(){d(o)}}):null,Object(l.jsxs)("table",{cellPadding:40,cellSpacing:0,children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"orderid"}),Object(l.jsx)("th",{children:"destination"}),Object(l.jsx)("th",{children:"location"}),Object(l.jsx)("th",{children:"status"}),Object(l.jsx)("th",{children:"Update Status"}),Object(l.jsx)("th",{children:"Delete order"})]})}),Object(l.jsxs)("tbody",{children:[n.map((function(e){return Object(l.jsx)(c.Fragment,{children:Object(l.jsx)(T,{myne:e._id,valo:e,editable:b,del:u})},e._id)})),";"]})]})]})};var q=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)();return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(c){c.preventDefault();var r={email:t.current.value,password:n.current.value};e.sendData(r)},children:[Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:" Email "}),Object(l.jsx)("input",{required:!0,type:"email",id:"email",ref:t})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"password",children:" Password"}),Object(l.jsx)("input",{required:!0,type:"password",id:"password",ref:n})]}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",children:" Submit "})}),"NOT YET A USER?",Object(l.jsx)(i.b,{to:"/register",children:" REGISTER"}),Object(l.jsx)("br",{}),Object(l.jsx)(i.b,{to:"/",children:"Go to homepage"})]})})};var I=function(){var e=Object(c.useState)(),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(j.g)();return Object(l.jsxs)("div",{children:[Object(l.jsx)(q,{sendData:function(e){console.log(e),fetch("https://web-app-senditb.herokuapp.com/admin/login",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){"error"===t.status?r("email or password not match"):"lmn@gmail.com"===e.email&&"toheeb"===e.password?(s("/receive"),r(t)):(s("/get"),r(t),localStorage.setItem("token",JSON.stringify(t)))}))}}),n&&Object(l.jsx)("div",{children:Object(l.jsx)("pre",{children:n})})]})},J=(n(24),n(13));var A=function(e){var t=Object(p.useState)(""),n=Object(a.a)(t,2),r=n[0],s=n[1],i=Object(p.useState)(""),j=Object(a.a)(i,2),o=j[0],d=j[1],b=Object(p.useState)(),O=Object(a.a)(b,2),x=O[0],f=O[1],m=Object(c.useRef)(),v=Object(c.useRef)(),g=Object(c.useRef)(),y=Object(c.useRef)(),S=JSON.parse(localStorage.getItem("token"));return Object(l.jsx)("div",{children:Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=m.current.value,c=v.current.value,r=g.current.value,s=y.current.value,i={destination:n,location:c,status:"ready for pickup",name:S,recipient:s,phone:r};e.sendData(i)},children:[Object(l.jsx)("br",{}),Object(l.jsx)(h.a,{value:r,onChange:s,children:function(e){var t=e.getInputProps,n=e.getSuggestionItemProps,c=e.suggestions,r=e.loading;return Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"destination",children:" destination "}),Object(l.jsx)("input",Object(u.a)(Object(u.a)({},t({autoFocus:!0})),{},{required:!0,type:"text",id:"destination",ref:m})),Object(l.jsxs)("div",{children:[r&&Object(l.jsx)("div",{children:"loading..."}),c.map((function(e){return Object(l.jsx)("div",Object(u.a)(Object(u.a)({},n(e)),{},{children:Object(l.jsx)("span",{children:e.description},e.id)}))}))]})]})}}),Object(l.jsx)("br",{}),Object(l.jsx)(h.a,{value:o,onChange:d,children:function(e){var t=e.getInputProps,n=e.getSuggestionItemProps,c=e.suggestions,r=e.loading;return Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"location",children:"pickup Location"}),Object(l.jsx)("input",Object(u.a)(Object(u.a)({},t({autoFocus:!0})),{},{required:!0,type:"text",id:"location",ref:v})),Object(l.jsxs)("div",{children:[r&&Object(l.jsx)("div",{children:"loading..."}),c.map((function(e){return Object(l.jsx)("div",Object(u.a)(Object(u.a)({},n(e)),{},{children:Object(l.jsx)("span",{children:e.description},e.id)}))}))]})]})}}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"phone"}),Object(l.jsx)(J.a,{international:!0,defaultCountry:"RU",countryCallingCodeEditable:!1,value:x,onChange:f,required:!0,type:"tel",id:"phone",ref:g,placeholders:"phone no"})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"recipient",children:" recipient"}),Object(l.jsx)("input",{required:!0,type:"text",id:"recipient",ref:y})]}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",children:" Submit "})})]})})})};var L=function(){var e=Object(j.g)(),t=Object(c.useState)(),n=Object(a.a)(t,2),r=n[0],s=n[1];return Object(l.jsx)("div",{children:Object(l.jsx)(A,{sendData:function(t){fetch("https://web-app-senditb.herokuapp.com/parcel",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){console.log(t),s(JSON.stringify(t)),e("/get")})),s(r)}})})};var U=function(e){var t=Object(p.useState)(""),n=Object(a.a)(t,2),r=n[0],s=n[1],j=Object(p.useState)(),o=Object(a.a)(j,2),d=o[0],b=o[1],O=Object(p.useState)(),x=Object(a.a)(O,2),f=x[0],m=x[1],v=Object(p.useState)(),g=Object(a.a)(v,2),y=g[0],S=g[1],w=Object(c.useRef)(),C=Object(c.useRef)(),_=Object(c.useRef)(),N=Object(c.useRef)(),R=Object(c.useRef)(),D=Object(c.useRef)(),F=Object(c.useRef)();return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=C.current.value,c=w.current.value,r=_.current.value,s=N.current.value,i=R.current.value,j=F.current.value,a={confirmPassword:n,password:c,nama:r,namo:s,email:i,phone:D.current.value,address:j};e.sendData(a)},children:[Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"nama",children:" Firstname"}),Object(l.jsx)("input",{required:!0,type:"text",id:"nama",ref:_})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"namo",children:" Lastname"}),Object(l.jsx)("input",{required:!0,type:"text",id:"namo",ref:N})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"password",children:" Password"}),Object(l.jsx)("input",{required:!0,type:"password",id:"password",name:"password",ref:w})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"confirmPassword",children:" confirmPassword"}),Object(l.jsx)("input",{required:!0,onChange:function(){var e=C.current.value,t=w.current.value;m(e!==t?"password not match":"")},type:"password",id:"confirmPassword",name:"confirmPassword",ref:C}),f&&Object(l.jsx)("div",{children:Object(l.jsx)("pre",{children:f})})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:" Email"}),Object(l.jsx)("input",{required:!0,onChange:function(){R.current.value.match("^[a-zA-ZO]+@[a-zA-ZO]+\\.[A-Za-z]+$")?S(""):S("Not a valid email")},type:"email",id:"email",ref:R}),y&&Object(l.jsx)("div",{children:Object(l.jsx)("pre",{children:y})})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"phone"}),Object(l.jsx)(J.a,{international:!0,defaultCountry:"RU",countryCallingCodeEditable:!1,value:d,onChange:b,required:!0,type:"tel",id:"phone",ref:D})]}),Object(l.jsx)("br",{}),Object(l.jsx)(h.a,{value:r,onChange:s,children:function(e){var t=e.getInputProps,n=e.getSuggestionItemProps,c=e.suggestions,r=e.loading;return Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"address",children:"address"}),Object(l.jsx)("input",Object(u.a)(Object(u.a)({},t({autoFocus:!0})),{},{required:!0,type:"text",id:"address",ref:F})),Object(l.jsxs)("div",{children:[r&&Object(l.jsx)("div",{children:"loading..."}),c.map((function(e){return Object(l.jsx)("div",Object(u.a)(Object(u.a)({},n(e)),{},{children:Object(l.jsx)("span",{children:e.description},e.id)}))}))]})]})}}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",children:" Submit "})}),"Already have an account:",Object(l.jsx)(i.b,{to:"/login",children:"Login"})]})})};var Y=function(){var e=Object(c.useState)(),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(j.g)();return Object(l.jsxs)("div",{children:[Object(l.jsx)(U,{sendData:function(e){fetch("https://web-app-senditb.herokuapp.com/admin/pass",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){console.log(t),e.confirmPassword!==e.password?alert("password are not the same"):"error"===t.status?(r("Email already exiist"),alert("Email already exist")):s("/login")}))}}),n&&Object(l.jsx)("div",{children:Object(l.jsx)("pre",{children:n})})]})};var z=function(){return Object(l.jsxs)("div",{children:[Object(l.jsxs)(j.d,{children:[Object(l.jsx)(j.b,{path:"/admin",element:Object(l.jsx)(F,{})}),Object(l.jsx)(j.b,{path:"/login",element:Object(l.jsx)(I,{})}),Object(l.jsx)(j.b,{path:"/register",element:Object(l.jsx)(Y,{})}),Object(l.jsx)(j.b,{path:"/post",element:Object(l.jsx)(L,{})}),Object(l.jsx)(j.b,{path:"/receive",element:Object(l.jsx)(E,{})}),Object(l.jsx)(j.b,{path:"/cancel",element:Object(l.jsx)(b,{})}),Object(l.jsx)(j.b,{index:!0,element:Object(l.jsx)(_,{})}),Object(l.jsx)(j.b,{path:"/admin",element:Object(l.jsx)(F,{})}),Object(l.jsx)(j.b,{path:"/get",element:Object(l.jsx)(g,{})}),Object(l.jsx)(j.b,{path:"/destination",element:Object(l.jsx)(x,{})}),Object(l.jsx)(j.b,{path:"/location",element:Object(l.jsx)(y,{})}),Object(l.jsx)(j.b,{path:"/status",element:Object(l.jsx)(S,{})})]}),Object(l.jsx)(j.a,{})]})};n(49);s.a.render(Object(l.jsx)(i.a,{basename:"/senditff",children:Object(l.jsx)(j.d,{children:Object(l.jsx)(j.b,{exact:!0,path:"*",element:Object(l.jsx)(z,{})})})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.1ad3033d.chunk.js.map