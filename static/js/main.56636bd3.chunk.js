(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{79:function(e,a,t){e.exports=t(97)},84:function(e,a,t){},97:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(8),c=t.n(s),o=(t(84),t(19)),l=t(22),i=t(131),m=t(132),u=t(133),d=t(134),g=t(130),E=t(143),p=function(e){var a=e.btnText,t=e.logout;return"Login"===a?r.a.createElement("li",{className:"navbar-nav-item"},r.a.createElement(l.b,{to:"/login"},r.a.createElement(E.a,{title:a},r.a.createElement(g.a,{color:"secondary"},r.a.createElement(i.a,{className:"navbar_icon_btn",color:"secondary"}))))):"Register"===a?r.a.createElement("li",{className:"navbar-nav-item"},r.a.createElement(l.b,{to:"/register"},r.a.createElement(E.a,{title:a},r.a.createElement(g.a,{color:"secondary"},r.a.createElement(m.a,{className:"navbar_icon_btn",color:"secondary"}))))):"Home"===a?r.a.createElement("li",{className:"navbar-nav-item"},r.a.createElement(l.b,{to:"/"},r.a.createElement(E.a,{title:a},r.a.createElement(g.a,{color:"secondary"},r.a.createElement(u.a,{className:"navbar_icon_btn",color:"secondary"}))))):"Logout"===a?r.a.createElement("li",{className:"navbar-nav-item"},r.a.createElement(E.a,{title:a},r.a.createElement(g.a,{color:"secondary",onClick:t},r.a.createElement(d.a,{className:"navbar_icon_btn",color:"secondary"})))):void 0},b=t(135),v=t(144),f=function(e){var a=e.isLogged,t=e.logout,n=e.username;return r.a.createElement("nav",{className:"navbar"},r.a.createElement("ul",{className:"logo"},r.a.createElement(b.a,{className:"navbar_icon_btn"}),r.a.createElement(b.a,{className:"navbar_icon_btn"}),"ArrowMessage",r.a.createElement(b.a,{className:"navbar_icon_btn"})),!0===a&&r.a.createElement("div",{className:"avatar"},r.a.createElement(v.a,{alt:n,className:"avatar-icon",style:{margin:"1rem",backgroundColor:"#f50057",color:"#2d3436"}}),n),r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement(p,{btnText:"Home"}),!1===a&&r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(p,{btnText:"Login"}),r.a.createElement(p,{btnText:"Register"})),!0===a&&r.a.createElement(p,{btnText:"Logout",logout:t})))},h=t(10),y=t(23),x=t.n(y),N=t(29),_=t(136),j=function(e){var a=e.text,t=e.userName,n=e.messageId,s=e.userId;return r.a.createElement("div",{style:{margin:"1rem",display:"flex",width:"fit-content"}},n===s&&r.a.createElement("span",{style:{backgroundColor:"#f50057",color:" #2d3436",borderRadius:"5px",padding:"0.7rem"}},t," - ",a),n!==s&&r.a.createElement("span",{style:{backgroundColor:" #2d3436",color:"#f50057",borderRadius:"5px",padding:"0.7rem"}},t," - ",a))},O=t(64),k=function(e){var a=e.token,t=e.search,s=e.id,c=e.userId,l=Object(n.useState)([]),i=Object(o.a)(l,2),m=i[0],u=i[1];return Object(n.useEffect)((function(){(function(){var e=Object(N.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"api/all",e.next=4,fetch("api/all",{method:"GET",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(a)}});case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,u(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()(),O.animateScroll.scrollToBottom({containerId:"".concat(s)})}),[t]),m.map((function(e){return r.a.createElement(j,{userId:c,key:e._id,text:e.text,messageId:e.user._id,userName:e.user.username})}))},L=function(e){var a=e.isLogged,t=e.token,s=e.userId,c=Object(n.useState)({text:""}),i=Object(o.a)(c,2),m=i[0],u=i[1],d=Object(n.useState)(""),g=Object(o.a)(d,2),E=g[0],p=g[1],b=function(){var e=Object(N.a)(x.a.mark((function e(a){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,n="api/user/".concat(s,"/messages"),e.next=5,fetch(n,{method:"POST",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(E)});case 5:e.sent,u({text:""}),p(""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a){return e.apply(this,arguments)}}();return!1===a?r.a.createElement("div",{className:"form-container"},r.a.createElement("div",{className:"form_container_inner"},r.a.createElement("h1",null,"ArrowMessage Desktop"),r.a.createElement("h3",null,"Welcome to the official ArrowMessage Desktop app."),r.a.createElement("h3",null,"Its fast and secure."),r.a.createElement(l.b,{to:"/login"},r.a.createElement(_.a,{style:{width:"50%",height:60},variant:"contained",color:"secondary"},"START MESSAGING")))):!0===a?r.a.createElement("div",{className:"chat_friends_container"},r.a.createElement("div",{className:"chat_box",id:"chat_box"},r.a.createElement("div",{className:"message_display"},r.a.createElement(k,{userId:s,id:"messages",search:E,token:t})),r.a.createElement("div",{className:"message_form_container"},r.a.createElement("form",{className:"message_form",onSubmit:b},r.a.createElement("input",{type:"text",value:m.text,placeholder:"Write a message...",onChange:function(e){u({text:e.target.value})}}),r.a.createElement("button",{style:{display:"none"},onClick:function(){return p(m)}}))))):void 0},I=t(45),S=t(55),w=t(65),T=t(140),C=t(137),A=t(138),B=t(141),M={username:"",email:"",password:""},R=function(e){var a=e.register,t=e.submitBtnText,s=e.userIsLogged,c=e.history,l=(Object(w.a)(e,["register","submitBtnText","userIsLogged","history"]),Object(n.useState)(M)),i=Object(o.a)(l,2),m=i[0],u=i[1],d=Object(n.useState)({has:!1,msg:""}),g=Object(o.a)(d,2),E=g[0],p=g[1],b=function(e){u(Object(S.a)(Object(S.a)({},m),{},Object(I.a)({},e.currentTarget.name,e.currentTarget.value)))},v=function(){var e=Object(N.a)(x.a.mark((function e(a){var n,r,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n="api/auth/".concat(t),e.next=4,fetch(n,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(m)});case 4:return r=e.sent,e.next=7,r.json();case 7:(o=e.sent).err?(s({},!1),p({has:!0,msg:o.err.message})):(s(o,!0),u(M),c.push("/"));case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();c.listen((function(){p({has:!1,msg:""}),u(M)}));var f=m.username,h=m.email,y=m.password;return r.a.createElement("div",{className:"form-container"},r.a.createElement("div",{className:"user_greeting"},a&&r.a.createElement("div",{className:"user_greeting_register"},r.a.createElement(C.a,{style:{fontSize:100,color:"#f50057"}}),r.a.createElement("h1",null,"Happy to have you join our family!")),!a&&r.a.createElement("div",{className:"user_greeting_register"},r.a.createElement(A.a,{style:{fontSize:100,color:"#f50057"}}),r.a.createElement("h1",null,"Lets start chatting"))),r.a.createElement("form",{className:"form",onSubmit:v},!0===E.has&&r.a.createElement(B.a,{variant:"filled",severity:"error",style:{margin:"0.5rem"}},E.msg),r.a.createElement(T.a,{name:"email",type:"email",required:!0,label:"email",variant:"outlined",value:h,onChange:b}),r.a.createElement(T.a,{name:"password",type:"password",required:!0,label:"password",variant:"outlined",value:y,onChange:b}),a&&r.a.createElement("div",{className:"register"},r.a.createElement(T.a,{name:"username",type:"text",required:!0,label:"username",variant:"outlined",value:f,onChange:b})),r.a.createElement(_.a,{style:{marginTop:"0.5rem",height:"60px"},variant:"contained",color:"secondary",type:"submit"},r.a.createElement("span",{className:"submit"},t))))},z=function(e){var a=e.isLogged,t=e.userIsLogged,n=e.token,s=e.userId;return r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(L,Object.assign({token:n,userId:s,isLogged:a},e))}}),r.a.createElement(h.a,{exact:!0,path:"/login",render:function(e){return r.a.createElement(R,Object.assign({submitBtnText:"login",userIsLogged:t},e))}}),r.a.createElement(h.a,{exact:!0,path:"/register",render:function(e){return r.a.createElement(R,Object.assign({register:!0,submitBtnText:"register",userIsLogged:t},e))}}))};var D=function(){var e=Object(n.useState)({user:{},isLogged:!1}),a=Object(o.a)(e,2),t=a[0],s=a[1];return r.a.createElement(l.a,null,r.a.createElement(f,{userId:t.user.id,token:t.user.token,isLogged:t.isLogged,username:t.user.username,logout:function(){s({user:{},isLogged:!1})}}),r.a.createElement(z,{userId:t.user.id,token:t.user.token,isLogged:t.isLogged,userIsLogged:function(e,a){s({user:e,isLogged:a})}}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,{className:"App"})),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.56636bd3.chunk.js.map