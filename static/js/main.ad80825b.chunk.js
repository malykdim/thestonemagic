(this.webpackJsonpthestonemagic=this.webpackJsonpthestonemagic||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(13),i=a.n(s),l=a(5),r=a(17),o=a(6),j=a(7),b=a(9),m=a(8),d=a(3),h=a(22),u=a.n(h),p=a(26),x="https://parseapi.back4app.com",O=function(){return!!sessionStorage.getItem("sessionToken")};function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"GET",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a={method:e,headers:{"X-Parse-Master-Key":"hYC7J1TV3gssZYQXLTvq7ApsVOXUX9KEMbS5PCWn","X-Parse-Application-Id":"xnluxCIpgfIf2tKfzIwpH4jS0GHBfu0RHkBXJJCV","X-Parse-REST-API-Key":"KRF2hY6NahfOt0hsmtO2LlqxZ9xn13TJZmyWmVA5"}},n=sessionStorage.getItem("sessionToken");return null!==n&&(a.headers["X-Parse-Session-Token"]=n),t&&"POST"===e&&(a.headers["Content-Type"]="application/json",a.body=JSON.stringify(t)),a}var g=function(){var e=Object(p.a)(u.a.mark((function e(t,a){var n,c,s,i,l=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=l.length>2&&void 0!==l[2]?l[2]:"",e.prev=1,"POST"!==a){e.next=8;break}return e.next=5,fetch(x+t,f(a,n));case 5:c=e.sent,e.next=11;break;case 8:return e.next=10,fetch(x+t+n,f(a));case 10:c=e.sent;case 11:if(!1!==c.ok){e.next=16;break}return e.next=14,c.json();case 14:throw s=e.sent,new Error(s.message);case 16:return e.prev=16,e.next=19,c.json();case 19:return(i=e.sent).sessionToken&&sessionStorage.setItem("sessionToken",i.sessionToken),e.abrupt("return",i);case 24:return e.prev=24,e.t0=e.catch(16),e.abrupt("return",c);case 27:e.next=33;break;case 29:throw e.prev=29,e.t1=e.catch(1),alert(e.t1.message),e.t1;case 33:case"end":return e.stop()}}),e,null,[[1,29],[16,24]])})));return function(t,a){return e.apply(this,arguments)}}(),v=(a(38),a(0)),y=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(v.jsx)("nav",{className:"AppHeader-Nav",children:Object(v.jsxs)("ul",{className:"AppHeader-Nav-Ul",children:[Object(v.jsx)("li",{children:Object(v.jsx)(l.c,{to:"/",children:Object(v.jsx)("i",{className:this.props.icon})})}),Object(v.jsx)("li",{children:Object(v.jsx)(l.c,{to:"/gallery",children:"Gallery"})}),Object(v.jsx)("li",{children:Object(v.jsx)(l.c,{to:"/contact",children:"Contact"})})]})})}}]),a}(n.Component);y.defaultProps={icon:"fas fa-home"};var N=y,k=(a(45),function(e){return Object(v.jsxs)("header",{className:"AppHeader",children:[Object(v.jsx)("h1",{children:e.title}),Object(v.jsx)(N,{icon:"fas fa-home"})]})}),F=a.p+"static/media/logo.ff30ce05.svg",w=(a(46),function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={mosaics:[]},n}return Object(j.a)(a,[{key:"render",value:function(){return Object(v.jsxs)("main",{className:"AppMain",children:[Object(v.jsx)("h2",{children:"Exquisite Mosaic Panneaux"}),Object(v.jsx)("img",{src:F,className:"App-logo",alt:"logo"}),Object(v.jsx)("span",{}),Object(v.jsxs)("p",{children:[Object(v.jsx)("a",{className:"AppLink",href:"https://www.facebook.com/vladimir.damynov/",target:"_blank",rel:"noopener noreferrer",children:Object(v.jsx)("span",{children:"Vladimir Damyanov"})}),"&",Object(v.jsx)("a",{className:"AppLink",href:"https://www.facebook.com/damyan.damyanov.509/",target:"_blank",rel:"noopener noreferrer",children:Object(v.jsx)("span",{children:"Damyan Damyanov"})})]})]})}}]),a}(n.Component)),C=c.a.createContext();C.displayName="GalleryContext";var A=C,P=(a(47),function(e){var t=e.caption,a=e.picture,n=e.author,c=(e.clickHandler,e.url);return Object(v.jsx)("div",{className:"Card",children:Object(v.jsxs)("figure",{className:"Figure",children:[Object(v.jsx)("div",{className:"image-container",children:Object(v.jsx)(l.b,{to:"/gallery/"+c,children:Object(v.jsx)("img",{src:a,alt:t})})}),Object(v.jsxs)("figcaption",{children:['"',t,'" by ',n]})]})})}),S=(a(48),function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={gallery:[]},n}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;g("/classes/Gallery","GET").then((function(t){e.setState({gallery:t.results})}))}},{key:"render",value:function(){var e={mosaics:this.state.gallery};return Object(v.jsx)("main",{className:"AppMain",children:Object(v.jsx)("section",{className:"AppMain-Gallery",children:Object(v.jsx)(A.Provider,{value:e,children:this.state.gallery.map((function(e){return Object(v.jsx)(P,Object(r.a)({},e),e.objectId)}))})})})}}]),a}(n.Component)),T=(a(49),function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={mosaic:{}},n}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;g("/classes/Gallery","GET","?where=".concat(JSON.stringify({url:this.props.match.params.url}))).then((function(t){e.setState({mosaic:t.results[0]})}))}},{key:"render",value:function(){return this.state.mosaic.author?Object(v.jsx)("main",{className:"AppMain",children:Object(v.jsxs)("section",{className:"AppMain-Panneaux",children:[Object(v.jsx)("div",{className:"PanneauxImageContainer w-4 h-4",children:Object(v.jsx)("div",{className:"imageWrapper",children:Object(v.jsx)("img",{src:this.state.mosaic.picture,alt:this.state.mosaic.caption})})}),Object(v.jsxs)("div",{className:"PanneauxDescriptionContainer w-1 h-4 positionBottom",children:[Object(v.jsx)("h3",{className:"caption",children:this.state.mosaic.caption}),Object(v.jsx)("span",{children:"|"}),Object(v.jsx)("h3",{className:"author",children:this.state.mosaic.author}),Object(v.jsxs)("p",{className:"dimensions",children:[this.state.mosaic.width," x ",this.state.mosaic.height]}),Object(v.jsx)("p",{className:"materials",children:this.state.mosaic.materials})]})]})}):Object(v.jsx)("span",{children:"Loading Panneaux..."})}}]),a}(n.Component)),M=a(32),L=a(29),E=a(30),H=(a(50),function(e){var t=e.text;return Object(v.jsxs)("div",{className:"pin",children:[Object(v.jsx)(L.Icon,{icon:E.a,className:"pin-icon"}),Object(v.jsx)("p",{className:"pin-text",children:t})]})}),D=function(e){var t=e.location,a=e.zoomLevel;return Object(v.jsxs)("div",{className:"map",children:[Object(v.jsx)("h2",{className:"map-h2",children:"Exposition will take place Here in May."}),Object(v.jsx)("div",{className:"google-map",children:Object(v.jsx)(M.a,{bootstrapURLKeys:{key:"AIzaSyDEV6BRDvCQ5qrJ9lAuLCLGbHsRPfYzaIo"},defaultCenter:t,defaultZoom:a,children:Object(v.jsx)(H,{lat:t.lat,lng:t.lng,text:t.address})})})]})},I=(a(16),a(51),function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n}return Object(j.a)(a,[{key:"render",value:function(){return Object(v.jsxs)("main",{className:"AppMain",children:[Object(v.jsx)("h2",{children:"Contact Page"}),Object(v.jsxs)("section",{className:"content",children:[Object(v.jsx)("div",{className:"map",children:Object(v.jsx)(D,{location:{address:'ul. "Hristo G. Danov" 11, 4000 Tsentar, Plovdiv, Bulgaria',lat:42.148215594449134,lng:24.74586854733439},zoomLevel:17})}),Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.fullName.value,a=e.target.email.value,n=e.target.topic.value,c=e.target.content.value;console.log(t),console.log(a),console.log(n),console.log(c)},className:"AppMain-FormContact form",children:[Object(v.jsx)("h3",{children:"Get in touch"}),Object(v.jsxs)("fieldset",{children:[Object(v.jsx)("label",{htmlFor:"fullName"}),Object(v.jsx)("input",{type:"text",id:"fullName",name:"fullName",placeholder:"Full Name"})]}),Object(v.jsxs)("fieldset",{children:[Object(v.jsx)("label",{htmlFor:"email"}),Object(v.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Email"})]}),Object(v.jsxs)("fieldset",{children:[Object(v.jsx)("label",{htmlFor:"topic"}),Object(v.jsx)("input",{type:"text",id:"topic",name:"topic",placeholder:"Topic"})]}),Object(v.jsx)("fieldset",{children:Object(v.jsx)("textarea",{name:"content",id:"content",cols:"75",rows:"12"})}),Object(v.jsx)("fieldset",{children:Object(v.jsx)("input",{type:"submit",className:"send",value:"Send"})})]})]})]})}}]),a}(n.Component)),G=(a(52),function(){Object(d.g)();return Object(v.jsxs)("main",{className:"AppMain",children:[Object(v.jsx)("h2",{children:"Register"}),Object(v.jsx)("h3",{children:"For Admins only"}),Object(v.jsx)("div",{className:"AppMain-Forms",children:Object(v.jsxs)("form",{className:"FormRegister form",children:[Object(v.jsxs)("fieldset",{children:[Object(v.jsx)("label",{htmlFor:"email",children:"Email"}),Object(v.jsx)("input",{type:"email",name:"email",id:"email"})]}),Object(v.jsxs)("fieldset",{children:[Object(v.jsx)("label",{htmlFor:"pass",children:"Password"}),Object(v.jsx)("input",{type:"password",name:"pass",id:"pass",placeholder:""})]}),Object(v.jsx)("fieldset",{children:Object(v.jsx)("input",{type:"submit",className:"send",value:"Send"})})]})}),Object(v.jsx)("p",{children:"Please lonin to gain access to Edit Gallery page..."}),Object(v.jsx)("p",{children:Object(v.jsx)("button",{className:"login",children:Object(v.jsx)(l.b,{to:"/login",className:"Login",children:"Login"})})})]})}),J=(a(53),function(){var e=Object(d.g)();return Object(v.jsxs)("main",{className:"AppMain",children:[Object(v.jsx)("h3",{children:"For Admins only"}),Object(v.jsx)("div",{className:"AppMain-Forms form",children:Object(v.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=t.target.email.value,n=t.target.pass.value;g("/login","GET","?email="+a+"&password="+n).then((function(t){t.sessionToken?e.push("/edit"):e.push("/thestonemagic")}))},className:"FormLogin form",children:[Object(v.jsxs)("fieldset",{children:[Object(v.jsx)("label",{htmlFor:"email"}),Object(v.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Email"})]}),Object(v.jsxs)("fieldset",{children:[Object(v.jsx)("label",{htmlFor:"pass"}),Object(v.jsx)("input",{type:"password",id:"pass",name:"pass",placeholder:"Password"})]}),Object(v.jsx)("fieldset",{children:Object(v.jsx)("button",{className:"toggle",children:"Login"})})]})}),Object(v.jsx)("p",{children:"Please lonin to gain access to Edit page."})]})}),R=a(18),z=a(31),V=a(19);a(54);var q=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={panneauxName:"New Panneaux"},n.onChangeHandler=n.onChangeHandler.bind(Object(V.a)(n)),n}return Object(j.a)(a,[{key:"componentDidMount",value:function(){O()&&this.props.history.push("/edit")}},{key:"onSubmitEditHandler",value:function(e){e.preventDefault();var t=e.target.panneauxName.value,a=e.target.author.value,n=e.target.created.value,c=e.target.width.value,s=e.target.height.value,i=e.target.unit.value;return{url:"/gallery/".concat(t.toLowerCase()),caption:t,author:a,created:n,width:c,height:s,unit:i,materials:Object(z.a)("")}.JSON.stringify}},{key:"onSubmitChangeHandler",value:function(e){console.log(e.target.value),this.setState={panneauxName:e.target.value}}},{key:"onChangeHandler",value:function(e){this.setState(Object(R.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return Object(v.jsxs)("main",{className:"AppMain",children:[Object(v.jsxs)("form",{className:"FormEdit ",onSubmit:this.onSubmitEditHandler,children:[Object(v.jsxs)("fieldset",{className:"left w-1 h-3",children:[Object(v.jsx)("label",{htmlFor:"uploadPicture"}),Object(v.jsx)("input",{type:"file",id:"picture",name:"uploadPicture"})]}),Object(v.jsxs)("div",{className:"middle",children:[Object(v.jsxs)("fieldset",{className:"right",children:[Object(v.jsx)("legend",{htmlFor:"panneauxName",children:"\u0418\u043c\u0435 \u043d\u0430 \u041f\u0430\u043d\u043e\u0442\u043e"}),Object(v.jsx)("input",{type:"text",id:"panneauxName",name:"panneauxName",value:this.state.panneauxName,onChange:this.onChangeHandler,placeholder:"New Panneaux"})]}),Object(v.jsxs)("fieldset",{className:"inline",children:[Object(v.jsx)("legend",{children:"\u0410\u0432\u0442\u043e\u0440"}),Object(v.jsx)("input",{type:"radio",id:"vladimir",name:"author",value:"Vladimir"}),Object(v.jsx)("label",{htmlFor:"vladimir",className:"radio",children:"\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440"}),Object(v.jsx)("input",{type:"radio",id:"damyan",name:"author",value:"Damyan"}),Object(v.jsx)("label",{htmlFor:"damyan",className:"radio",children:"\u0414\u0430\u043c\u044f\u043d"})]}),Object(v.jsxs)("fieldset",{children:[Object(v.jsx)("label",{htmlFor:"created",children:"\u0421\u044a\u0437\u0434\u0430\u0434\u0435\u043d\u0430"}),Object(v.jsx)("input",{type:"date",name:"created",id:"created"})]}),Object(v.jsxs)("fieldset",{children:[Object(v.jsx)("legend",{children:"\u0420\u0430\u0437\u043c\u0435\u0440\u0438 \u043d\u0430 \u043f\u0430\u043d\u043e\u0442\u043e"}),Object(v.jsx)("label",{htmlFor:"width",className:"dim",children:"\u0428\u0438\u0440\u043e\u0447\u0438\u043d\u0430"}),Object(v.jsx)("input",{type:"number",name:"width",defaultValue:"75",id:"width",placeholder:"number"}),Object(v.jsx)("label",{htmlFor:"height",className:"dim",children:"\u0412\u0438\u0441\u043e\u0447\u0438\u043d\u0430"}),Object(v.jsx)("input",{type:"number",name:"height",defaultValue:"75",id:"height",placeholder:"number"}),Object(v.jsx)("input",{type:"radio",id:"cm",name:"unit",value:"cm"}),Object(v.jsx)("label",{htmlFor:"cm",className:"radio",children:"cm"}),Object(v.jsx)("input",{type:"radio",id:"inch",name:"unit",value:"inch"}),Object(v.jsx)("label",{htmlFor:"inch",className:"radio",children:"inch"})]}),Object(v.jsxs)("fieldset",{children:[Object(v.jsx)("legend",{children:"\u0418\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043d\u0438 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0438"}),Object(v.jsx)("input",{type:"checkbox",id:"marbel",name:"marbel",value:"Marbel",className:"material"}),Object(v.jsx)("label",{htmlFor:"marbel",children:"\u041c\u0440\u0430\u043c\u043e\u0440 "}),Object(v.jsx)("input",{type:"checkbox",id:"mountain crystal",name:"mountain crystal",value:"Mountain crystal",className:"material"}),Object(v.jsx)("label",{htmlFor:"mountain crystal",children:"\u041f\u043b\u0430\u043d\u0438\u043d\u0441\u043a\u0438 \u043a\u0440\u0438\u0441\u0442\u0430\u043b"}),Object(v.jsx)("input",{type:"checkbox",id:"amethyst",name:"amethyst",value:"\u0410methyst",className:"material"}),Object(v.jsx)("label",{htmlFor:"amethyst",children:"\u0410\u043c\u0435\u0442\u0438\u0441\u0442"}),Object(v.jsx)("input",{type:"checkbox",id:"jasper",name:"jasper",value:"Jasper",className:"material"}),Object(v.jsx)("label",{htmlFor:"jasper",children:"\u042f\u0441\u043f\u0438\u0441"}),Object(v.jsx)("input",{type:"checkbox",id:"labrador",name:"labrador",value:"Labrador",className:"material"}),Object(v.jsx)("label",{htmlFor:"labrador",children:"\u041b\u0430\u0431\u0440\u0430\u0434\u043e\u0440"}),Object(v.jsx)("input",{type:"checkbox",id:"pyryt",name:"pyryt",value:"Pyryt",className:"material"}),Object(v.jsx)("label",{htmlFor:"pyryt",children:"\u041f\u0438\u0440\u0438\u0442"}),Object(v.jsx)("input",{type:"checkbox",id:"agate",name:"agate",value:"\u0410gate",className:"material"}),Object(v.jsx)("label",{htmlFor:"agate",children:"\u0410\u0445\u0430\u0442"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{type:"checkbox",id:"onyx",name:"onyx",value:"Onyx",className:"material"}),Object(v.jsx)("label",{htmlFor:"onyx",children:"\u041e\u043d\u0438\u043a\u0441"}),Object(v.jsx)("input",{type:"checkbox",id:"jade",name:"jade",value:"Jade",className:"material"}),Object(v.jsx)("label",{htmlFor:"jade",children:"\u041d\u0435\u0444\u0440\u0438\u0442"}),Object(v.jsx)("input",{type:"checkbox",id:"malachite",name:"malachite",value:"malachite",className:"material"}),Object(v.jsx)("label",{htmlFor:"malachite",children:"\u041c\u0430\u043b\u0430\u0445\u0438\u0442"}),Object(v.jsx)("input",{type:"checkbox",id:"citrine",name:"citrine",value:"citrine",className:"material"}),Object(v.jsx)("label",{htmlFor:"citrine",children:"\u0426\u0438\u0442\u0440\u0438\u043d"}),Object(v.jsx)("input",{type:"checkbox",id:"obsidian",name:"obsidian",value:"obsidian",className:"material"}),Object(v.jsx)("label",{htmlFor:"obsidian",children:"\u041e\u0431\u0441\u0438\u0434\u0438\u0430\u043d"}),Object(v.jsx)("input",{type:"checkbox",id:"serpentine",name:"serpentine",value:"serpentine",className:"material"}),Object(v.jsx)("label",{htmlFor:"serpentine",children:"\u0421\u0435\u0440\u043f\u0435\u043d\u0442\u0438\u043d"}),Object(v.jsx)("input",{type:"checkbox",id:"quartz",name:"quartz",value:"quartz",className:"material"}),Object(v.jsx)("label",{htmlFor:"quartz",children:"\u041a\u0432\u0430\u0440\u0446"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{type:"checkbox",id:"firestone",name:"firestone",value:"Firestone",className:"material"}),Object(v.jsx)("label",{htmlFor:"firestone",children:"\u041e\u0433\u043d\u0435\u043d \u043a\u0430\u043c\u044a\u043a"}),Object(v.jsx)("input",{type:"checkbox",id:"tiger's eye",name:"tiger's eye",value:"Tiger's eye",className:"material"}),Object(v.jsx)("label",{htmlFor:"tiger's eye",children:"\u0422\u0438\u0433\u0440\u043e\u0432\u043e \u043e\u043a\u043e"}),Object(v.jsx)("br",{})]})]}),Object(v.jsxs)("fieldset",{className:" right w-1 h-3 flexColumn ",children:[Object(v.jsxs)("div",{className:"flexRow",children:[Object(v.jsx)("input",{type:"reset",name:"reset",value:"\u0418\u0437\u0447\u0438\u0441\u0442\u0438",className:"cta"}),Object(v.jsx)("label",{htmlFor:"reset"})]}),Object(v.jsxs)("div",{className:"flexRow",children:[Object(v.jsx)("input",{type:"reset",name:"edit",value:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0430\u0439",className:"cta"}),Object(v.jsx)("label",{htmlFor:"edit"})]}),Object(v.jsxs)("div",{className:"flexRow",children:[Object(v.jsx)("input",{type:"reset",name:"add",value:"\u0414\u043e\u0431\u0430\u0432\u0438",className:"cta"}),Object(v.jsx)("label",{htmlFor:"add"})]}),Object(v.jsxs)("div",{className:"flexRow",children:[Object(v.jsx)("input",{type:"reset",name:"delete",value:"\u0418\u0437\u0442\u0440\u0438\u0439",className:"cta"}),Object(v.jsx)("label",{htmlFor:"delete"})]})]})]}),Object(v.jsx)("button",{onClick:this.logout,className:"logout",children:"Logout"}),Object(v.jsx)(d.b,{path:"/gallery",component:S})]})}}]),a}(n.Component),X=(a(55),function(){var e=Object(d.g)();return Object(v.jsx)("main",{className:"AppMain",children:Object(v.jsxs)("section",{className:"error",children:[Object(v.jsx)("h2",{children:"There is no such page"}),Object(v.jsx)("h2",{children:Object(v.jsx)("i",{class:"fas fa-map-signs"})}),Object(v.jsx)("button",{onClick:function(){e.push("/thestonemagic")},children:"Home?"})]})})}),B=(a(56),function(){return Object(v.jsx)("div",{className:"Logo",children:Object(v.jsx)("img",{src:"/images/logo.png",alt:"logo"})})}),K=(a(57),function(e){return Object(v.jsxs)("footer",{className:"AppFooter",children:[Object(v.jsx)(B,{}),Object(v.jsx)("p",{children:"\xa9 All rights reserved"}),Object(v.jsx)(l.b,{to:"/login",className:"Login",children:Object(v.jsx)("i",{className:e.icon})})]})}),Y=(a(58),function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(k,{title:"The Stone Magic"}),Object(v.jsx)(n.Suspense,{fallback:Object(v.jsx)("div",{className:"loading",children:"Loading..."}),children:Object(v.jsxs)(d.d,{children:[Object(v.jsx)(d.b,{path:"/",exact:!0,component:w}),Object(v.jsx)(d.b,{path:"/thestonemagic",component:w}),Object(v.jsx)(d.b,{path:"/gallery",exact:!0,component:S}),Object(v.jsx)(d.b,{path:"/gallery/:url",exact:!0,component:T}),Object(v.jsx)(d.b,{path:"/contact",component:I}),Object(v.jsx)(d.b,{path:"/register",component:G}),Object(v.jsx)(d.b,{path:"/login",component:J}),Object(v.jsx)(d.b,{path:"/edit",component:q}),Object(v.jsx)(d.b,{exact:!0,path:"/edit",render:function(){return O?Object(v.jsx)(d.a,{to:"/edit",component:q}):Object(v.jsx)(w,{})}}),Object(v.jsx)(d.b,{render:function(e){return Object(v.jsx)(X,Object(r.a)({},e))}})]})}),Object(v.jsx)(K,{icon:"fas fa-sign-in-alt"})]})}}]),a}(n.Component)),Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,61)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};a(59);i.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(l.a,{children:Object(v.jsx)(Y,{})})}),document.getElementById("root")),Z()}],[[60,1,2]]]);
//# sourceMappingURL=main.ad80825b.chunk.js.map