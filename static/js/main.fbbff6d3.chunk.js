(this.webpackJsonpsenditff=this.webpackJsonpsenditff||[]).push([[0],{10:function(e,t,n){e.exports={form:"admin_form__2sFkH"}},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(8),i=n.n(r),s=n(4),j=n(2),a=n(3),d=n(9),b=n.n(d),l=n(0);var o=function(){var e=Object(c.useState)(),t=Object(a.a)(e,2),n=t[0],r=t[1],i=Object(c.useRef)();return Object(l.jsxs)("form",{className:b.a.form,onSubmit:function(e){e.preventDefault();var t=i.current.value;fetch("https://web-app-senditb.herokuapp.com/parcel/".concat(t,"/cancel"),{method:"DELETE",mode:"cors",crossDomain:"true",body:JSON.stringify(t),headers:{"Content-Type":"application/json:charset=utf-8"}}).then((function(e){return e.json()})).then((function(e){r(JSON.stringify(e))}))},children:[Object(l.jsx)("label",{htmlFor:"myId",children:" RefID "}),Object(l.jsx)("input",{name:"myId",type:"text",required:!0,ref:i}),Object(l.jsx)("button",{type:"submit",children:" Delete"}),n&&Object(l.jsxs)("div",{role:"alert",children:[Object(l.jsx)("pre",{children:n})," "]})]})};var u=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(),n=Object(c.useState)(),r=Object(a.a)(n,2),i=r[0],s=r[1];return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(n){n.preventDefault();var c=e.current.value,r=t.current.value,i={id:r,destination:c};fetch("https://web-app-senditb.herokuapp.com/parcel/".concat(r,"/destination"),{method:"PUT",body:JSON.stringify(i),mode:"cors",crossDomain:"true",headers:{"Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()})).then((function(e){s(JSON.stringify(e))}))},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"destination",children:" Destination"}),Object(l.jsx)("input",{required:!0,type:"text",id:"destination",name:"destination",ref:e})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"id",children:" RefID "}),Object(l.jsx)("input",{required:!0,type:"text",id:"id",name:"id",ref:t})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",children:" Submit "})}),i&&Object(l.jsx)("div",{children:Object(l.jsx)("pre",{children:i})})]})})};var O=function(){var e=Object(c.useRef)(),t=Object(c.useState)(),n=Object(a.a)(t,2),r=n[0],i=n[1];return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=e.current.value;fetch("https://web-app-senditb.herokuapp.com/parcel/:id/search?name=".concat(n)).then((function(e){return e.json()})).then((function(e){i(e.map((function(e){return e.id,Object(l.jsx)("ul",{children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("li",{children:["Name: ",e.name]}),Object(l.jsxs)("li",{children:["Email: ",e.email]}),Object(l.jsxs)("li",{children:["Location: ",e.location]}),Object(l.jsxs)("li",{children:["destination: ",e.destination]}),Object(l.jsxs)("li",{children:["ID: ",e._id]}),Object(l.jsxs)("li",{children:["password: ",e.password]}),Object(l.jsx)("li",{children:e.status}),Object(l.jsx)(s.b,{to:"/cancel",children:" delete data"}),Object(l.jsx)("br",{}),Object(l.jsx)(s.b,{to:"/location",children:"update Location"})]})})})))}))},children:[Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"text",name:"firstname",id:"firstname",required:!0,placeholder:"firstname",ref:e})}),Object(l.jsx)("button",{type:"submit",children:"submit"}),Object(l.jsx)("br",{}),Object(l.jsx)(s.b,{to:"/",children:" Back to homepage "}),Object(l.jsx)("br",{}),Object(l.jsx)(s.b,{to:"/receive",children:" getall parcel "}),r&&Object(l.jsx)("div",{role:"alert",children:Object(l.jsx)("pre",{children:r})})]})})};var h=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(null),n=Object(c.useState)(),r=Object(a.a)(n,2),i=r[0],s=r[1];return Object(l.jsxs)("div",{children:[Object(l.jsxs)("form",{onSubmit:function(n){n.preventDefault();var c=e.current.value,r=t.current.value,i={location:c,id:r};fetch("https://web-app-senditb.herokuapp.com/parcel/".concat(r,"/location"),{method:"PUT",body:JSON.stringify(i),mode:"cors",crossDomain:"true",headers:{"Content-Type":"application/json;chrset=utf-8"}}).then((function(e){return e.json()})).then((function(e){s(JSON.stringify(e))}))},children:[Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"text",name:"location",id:"location",required:!0,placeholder:"location",ref:e})}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"string",name:"id",id:"id",required:!0,placeholder:"enter id",ref:t})}),Object(l.jsx)("button",{type:"submit",children:"submit"})]}),i&&Object(l.jsxs)("div",{children:[Object(l.jsx)("pre",{children:i})," "]})]})};var x=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)(),r=Object(c.useState)(),i=Object(a.a)(r,2),s=i[0],j=i[1];return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c=t.current.value,r=n.current.value,i={status:c,id:r};fetch("https://web-app-senditb.herokuapp.com/parcel/".concat(r,"/status"),{method:"put",body:JSON.stringify(i),crossDomain:!0,mode:"cors",headers:{"Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()})).then((function(e){j(JSON.stringify(e))}))},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"status",children:" Status"}),Object(l.jsx)("input",{required:!0,type:"text",id:"status",ref:t})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"id",children:" RefID "}),Object(l.jsx)("input",{required:!0,type:"text",id:"id",ref:n})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",children:" Submit "})}),s&&Object(l.jsxs)("div",{children:[Object(l.jsx)("pre",{children:s})," "]})]})})};var p=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:" click on the link below to Register"}),Object(l.jsx)("div",{children:Object(l.jsx)("nav",{children:Object(l.jsx)(s.b,{to:"/register",children:" Register User"})})}),Object(l.jsx)("h2",{children:" login below if you have registered "}),Object(l.jsx)("div",{children:Object(l.jsx)("nav",{children:Object(l.jsx)(s.b,{to:"/login",children:" login user "})})}),Object(l.jsx)("h3",{children:" login as Admin below"}),Object(l.jsx)("div",{children:Object(l.jsx)("nav",{children:Object(l.jsx)(s.b,{to:"/admin",children:" Admin section"})})})]})},m=n(10),f=n.n(m);var v=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)();return Object(l.jsxs)("div",{className:f.a.form,children:[Object(l.jsxs)("form",{onSubmit:function(c){c.preventDefault();var r={username:t.current.value,password:n.current.value};e.sendData(r)},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"username",children:" Username"}),Object(l.jsx)("input",{required:!0,type:"text",id:"username",ref:t})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"password",children:" Password"}),Object(l.jsx)("input",{required:!0,type:"text",id:"password",ref:n})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",children:" Submit "})})]}),Object(l.jsx)("nav",{children:Object(l.jsx)(s.b,{to:"/login",children:" go to login "})})]})};var y=function(){var e=Object(c.useState)(!0),t=Object(a.a)(e,2),n=t[0],r=t[1],i=Object(j.g)();return Object(l.jsxs)("div",{children:[Object(l.jsx)(v,{sendData:function(e){fetch("https://web-app-senditb.herokuapp.com/admin/add",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e&&(console.log(e),i("/get"))})),r("username or password not match")}}),n&&Object(l.jsxs)("div",{role:"alert",children:[Object(l.jsx)("pre",{children:n})," "]})]})};var g=function(){var e=Object(c.useState)(),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("https://web-app-senditb.herokuapp.com/parcel/getall").then((function(e){return e.json()})).then((function(e){r(e.map((function(e){return e.id,Object(l.jsx)("ul",{children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("li",{children:["Name: ",e.name]}),Object(l.jsxs)("li",{children:["Email: ",e.email]}),Object(l.jsxs)("li",{children:["Location: ",e.location]}),Object(l.jsxs)("li",{children:["destination: ",e.destination]}),Object(l.jsxs)("li",{children:["ID: ",e._id]}),Object(l.jsxs)("li",{children:["password: ",e.password]}),Object(l.jsx)("li",{children:e.status}),Object(l.jsx)(s.b,{to:"/cancel",children:" delete data"}),Object(l.jsx)("br",{}),Object(l.jsx)(s.b,{to:"/destination",children:"update Location"}),Object(l.jsx)("br",{}),Object(l.jsx)(s.b,{to:"/status",children:"update status"})]})})})))}))},children:[Object(l.jsx)("button",{type:"submit",children:" Get all parcel "}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)(s.b,{to:"/get",children:" Get a specific parcel"}),n&&Object(l.jsxs)("div",{role:"alert",children:[Object(l.jsx)("pre",{children:n})," "]})]})};var S=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)();return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(c){c.preventDefault();var r={username:t.current.value,password:n.current.value};e.sendData(r)},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"username",children:" Username"}),Object(l.jsx)("input",{required:!0,type:"text",id:"username",ref:t})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"password",children:" Password"}),Object(l.jsx)("input",{required:!0,type:"text",id:"password",ref:n})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",children:" Submit "})})]})})};var w=function(){var e=Object(c.useState)(),t=Object(a.a)(e,2),n=t[0],r=t[1],i=Object(j.g)();return Object(l.jsxs)("div",{children:[Object(l.jsx)(S,{sendData:function(e){fetch("https://web-app-senditb.herokuapp.com/register/login",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e&&(console.log(e),i("/post"))})),r("username or password not match")}}),n&&Object(l.jsx)("div",{children:Object(l.jsx)("pre",{children:n})})]})};var D=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)(),r=Object(c.useRef)(),i=Object(c.useRef)(),j=Object(c.useRef)(),a=Object(c.useRef)();return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(c){c.preventDefault();var s={name:t.current.value,password:n.current.value,destination:r.current.value,location:i.current.value,email:j.current.value,status:a.current.value};e.sendData(s)},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:" Username"}),Object(l.jsx)("input",{required:!0,type:"text",id:"name",ref:t})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"password",children:" Password"}),Object(l.jsx)("input",{required:!0,type:"text",id:"password",ref:n})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"destination",children:" destination "}),Object(l.jsx)("input",{required:!0,type:"text",id:"destination",ref:r})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"location",children:" Location"}),Object(l.jsx)("input",{required:!0,type:"text",id:"location",ref:i})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:" Email"}),Object(l.jsx)("input",{required:!0,type:"email",id:"email",ref:j})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"status",children:" Status"}),Object(l.jsx)("input",{required:!0,type:"status",id:"email",ref:a})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",children:" Submit "})}),Object(l.jsx)("div",{children:Object(l.jsx)(s.b,{to:"/get",children:" Get your ordered parcel"})})]})})};var R=function(){var e=Object(j.g)(),t=Object(c.useState)(),n=Object(a.a)(t,2),r=n[0],i=n[1];return Object(l.jsx)("div",{children:Object(l.jsx)(D,{sendData:function(t){fetch("https://web-app-senditb.herokuapp.com/parcel",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){console.log(t),i(JSON.stringify(t)),e("/get")})),i(r)}})})};var q=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)(),r=Object(c.useRef)(),i=Object(c.useRef)(),s=Object(c.useRef)();return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(c){c.preventDefault();var j={username:t.current.value,password:n.current.value,fistname:r.current.value,lastname:i.current.value,email:s.current.value};e.sendData(j)},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"username",children:" Username"}),Object(l.jsx)("input",{required:!0,type:"text",id:"username",ref:t})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"password",children:" Password"}),Object(l.jsx)("input",{required:!0,type:"text",id:"password",ref:n})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"firstname",children:" Firstname"}),Object(l.jsx)("input",{required:!0,type:"text",id:"firstname",ref:r})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"lastname",children:" Lastname"}),Object(l.jsx)("input",{required:!0,type:"text",id:"lastname",ref:i})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:" Email"}),Object(l.jsx)("input",{required:!0,type:"email",id:"email",ref:s})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",children:" Submit "})})]})})};var F=function(){var e=Object(j.g)();return Object(l.jsx)("div",{children:Object(l.jsx)(q,{sendData:function(t){fetch("https://web-app-senditb.herokuapp.com/register/pass",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json;charset"}}).then((function(t){console.log(t),e("/login")}))}})})};var N=function(){return Object(l.jsxs)("div",{children:[Object(l.jsxs)(j.d,{children:[Object(l.jsx)(j.b,{path:"/admin",element:Object(l.jsx)(y,{})}),Object(l.jsx)(j.b,{path:"/login",element:Object(l.jsx)(w,{})}),Object(l.jsx)(j.b,{path:"/register",element:Object(l.jsx)(F,{})}),Object(l.jsx)(j.b,{path:"/post",element:Object(l.jsx)(R,{})}),Object(l.jsx)(j.b,{path:"/receive",element:Object(l.jsx)(g,{})}),Object(l.jsx)(j.b,{path:"/cancel",element:Object(l.jsx)(o,{})}),Object(l.jsx)(j.b,{index:!0,element:Object(l.jsx)(p,{})}),Object(l.jsx)(j.b,{path:"/admin",element:Object(l.jsx)(y,{})}),Object(l.jsx)(j.b,{path:"/get",element:Object(l.jsx)(O,{})}),Object(l.jsx)(j.b,{path:"/destination",element:Object(l.jsx)(u,{})}),Object(l.jsx)(j.b,{path:"/location",element:Object(l.jsx)(h,{})}),Object(l.jsx)(j.b,{path:"/status",element:Object(l.jsx)(x,{})})]}),Object(l.jsx)(j.a,{})]})};n(16);i.a.render(Object(l.jsx)(s.a,{basename:"/senditff",children:Object(l.jsx)(j.d,{children:Object(l.jsx)(j.b,{exact:!0,path:"*",element:Object(l.jsx)(N,{})})})}),document.getElementById("root"))},9:function(e,t,n){e.exports={form:"delete_form__1GcHF"}}},[[17,1,2]]]);
//# sourceMappingURL=main.fbbff6d3.chunk.js.map