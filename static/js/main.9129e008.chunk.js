(this.webpackJsonpthestonemagic=this.webpackJsonpthestonemagic||[]).push([[0],{19:function(e,t,a){},32:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(20),i=a.n(s),l=a(4),r=a(12),o=a(5),j=a(6),h=a(8),d=a(7),u=a(2),b=(a(32),a(0)),m=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(b.jsx)("nav",{className:"AppHeader-Nav",children:Object(b.jsxs)("ul",{className:"AppHeader-Nav-Ul",children:[Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/",children:Object(b.jsx)("i",{className:this.props.icon})})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/gallery",children:"Gallery"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/contact",children:"Contact"})})]})})}}]),a}(n.Component);m.defaultProps={icon:"fas fa-home"};var x=m,p=(a(39),function(e){return Object(b.jsxs)("header",{className:"AppHeader",children:[Object(b.jsx)("h1",{children:e.title}),Object(b.jsx)(x,{icon:"fas fa-home"})]})}),O=a.p+"static/media/logo.ff30ce05.svg",f=(a(40),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={mosaics:[]},n}return Object(j.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("main",{className:"AppMain",children:[Object(b.jsx)("h2",{children:"Exquisite Mosaic Panneaux"}),Object(b.jsx)("img",{src:O,className:"App-logo",alt:"logo"}),Object(b.jsxs)("p",{children:[Object(b.jsx)("a",{className:"AppLink",href:"https://www.facebook.com/vladimir.damynov/",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("span",{children:"Vladimir Damyanov"})}),Object(b.jsx)("span",{children:"&"}),Object(b.jsx)("a",{className:"AppLink",href:"https://www.facebook.com/damyan.damyanov.509/",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("span",{children:"Damyan Damyanov"})})]})]})}}]),a}(n.Component)),g=a(23),v=a.n(g),y=a(27),k="https://parseapi.back4app.com";function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"GET",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a={method:e,headers:{"X-Parse-Master-Key":"hYC7J1TV3gssZYQXLTvq7ApsVOXUX9KEMbS5PCWn","X-Parse-Application-Id":"xnluxCIpgfIf2tKfzIwpH4jS0GHBfu0RHkBXJJCV","X-Parse-REST-API-Key":"KRF2hY6NahfOt0hsmtO2LlqxZ9xn13TJZmyWmVA5"}},n=sessionStorage.getItem("sessionToken");return null!==n&&(a.headers["X-Parse-Session-Token"]=n),t&&"POST"===e&&(a.headers["Content-Type"]="application/json",a.body=JSON.stringify(t)),a}var F=function(){var e=Object(y.a)(v.a.mark((function e(t,a){var n,c,s,i,l=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=l.length>2&&void 0!==l[2]?l[2]:"",e.prev=1,"POST"!==a){e.next=8;break}return e.next=5,fetch(k+t,N(a,n));case 5:c=e.sent,e.next=11;break;case 8:return e.next=10,fetch(k+t+n,N(a));case 10:c=e.sent;case 11:if(!1!==c.ok){e.next=16;break}return e.next=14,c.json();case 14:throw s=e.sent,new Error(s.message);case 16:return e.prev=16,e.next=19,c.json();case 19:return i=e.sent,e.abrupt("return",i);case 23:return e.prev=23,e.t0=e.catch(16),e.abrupt("return",c);case 26:e.next=32;break;case 28:throw e.prev=28,e.t1=e.catch(1),alert(e.t1),e.t1;case 32:case"end":return e.stop()}}),e,null,[[1,28],[16,23]])})));return function(t,a){return e.apply(this,arguments)}}(),C=(a(42),function(e){var t=e.caption,a=e.picture,n=e.author,c=e.url;return Object(b.jsx)("div",{className:"Card",children:Object(b.jsxs)("figure",{className:"Figure",children:[Object(b.jsx)("div",{className:"image-container",children:Object(b.jsx)(l.b,{to:"/gallery/"+c,children:Object(b.jsx)("img",{src:a,alt:t})})}),Object(b.jsxs)("figcaption",{children:['"',t,'" by ',n]})]})})}),H=(a(43),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={gallery:[]},n}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;F("/classes/Gallery","GET").then((function(t){e.setState({gallery:t.results})}))}},{key:"render",value:function(){var e=this;return Object(b.jsx)("main",{className:"AppMain",children:Object(b.jsx)("section",{className:"AppMain-Gallery",children:this.state.gallery.map((function(t){return Object(b.jsx)(C,Object(r.a)({gallery:e.context},t),t.objectId)}))})})}}]),a}(n.Component)),S=(a(44),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={mosaic:{}},n}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;F("/classes/Gallery","GET","?where=".concat(JSON.stringify({url:this.props.match.params.url}))).then((function(t){e.setState({mosaic:t.results[0]})}))}},{key:"render",value:function(){return this.state.mosaic.author?Object(b.jsx)("main",{className:"AppMain",children:Object(b.jsxs)("section",{className:"AppMain-Panneaux",children:[Object(b.jsx)("div",{className:"PanneauxImageContainer w-4 h-4",children:Object(b.jsx)("div",{className:"imageWrapper",children:Object(b.jsx)("img",{src:this.state.mosaic.picture,alt:this.state.mosaic.caption})})}),Object(b.jsxs)("div",{className:"PanneauxDescriptionContainer w-1 h-4 positionBottom",children:[Object(b.jsx)("h3",{className:"caption",children:this.state.mosaic.caption}),Object(b.jsx)("span",{children:"|"}),Object(b.jsx)("h3",{className:"author",children:this.state.mosaic.author}),Object(b.jsxs)("p",{className:"dimensions",children:[this.state.mosaic.width," x ",this.state.mosaic.height]}),Object(b.jsx)("p",{className:"materials",children:this.state.mosaic.materials})]})]})}):Object(b.jsx)("span",{children:"Loading Panneaux..."})}}]),a}(n.Component)),w=(a(45),function(){return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={sender:e.target.fullName.value,about:e.target.email.value,message:e.target.topic.value,email:e.target.content.value};JSON.stringify(t),console.log(t),F("/classes/Message","POST",t).then((function(e){alert("Your message have being sent."),console.log(e)})),e.target.reset()},className:"AppMain-FormContact form",children:[Object(b.jsx)("h3",{children:"Get in touch"}),Object(b.jsxs)("fieldset",{children:[Object(b.jsx)("label",{htmlFor:"fullName"}),Object(b.jsx)("input",{type:"text",id:"fullName",name:"fullName",placeholder:"Full Name"})]}),Object(b.jsxs)("fieldset",{children:[Object(b.jsx)("label",{htmlFor:"email"}),Object(b.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Email"})]}),Object(b.jsxs)("fieldset",{children:[Object(b.jsx)("label",{htmlFor:"topic"}),Object(b.jsx)("input",{type:"text",id:"topic",name:"topic",placeholder:"Topic"})]}),Object(b.jsx)("fieldset",{children:Object(b.jsx)("textarea",{name:"content",id:"content",cols:"75",rows:"8"})}),Object(b.jsx)("fieldset",{children:Object(b.jsx)("input",{type:"submit",className:"send",value:"Send"})})]})}),P=(a(19),a(48),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("main",{className:"AppMain",children:[Object(b.jsx)("h2",{children:"Contact Page"}),Object(b.jsx)("section",{className:"content",children:Object(b.jsx)(w,{})})]})}}]),a}(n.Component)),A="sessionToken",T=function(){return!!sessionStorage.getItem(A)},M=(a(49),function(){var e=Object(u.f)();return Object(b.jsxs)("main",{className:"AppMain",children:[Object(b.jsx)("h3",{children:"For Admins only"}),Object(b.jsx)("div",{className:"AppMain-Forms form",children:Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=t.target.email.value,n=t.target.pass.value;F("/login","GET","?email="+a+"&password="+n).then((function(t){var a;t.sessionToken?(a=t.sessionToken,sessionStorage.setItem(A,a),e.push("/edit")):e.push("/thestonemagic")})).catch((function(e){alert(e)}))},className:"FormLogin form",children:[Object(b.jsxs)("fieldset",{children:[Object(b.jsx)("label",{htmlFor:"email"}),Object(b.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Email"})]}),Object(b.jsxs)("fieldset",{children:[Object(b.jsx)("label",{htmlFor:"pass"}),Object(b.jsx)("input",{type:"password",id:"pass",name:"pass",placeholder:"Password"})]}),Object(b.jsx)("fieldset",{children:Object(b.jsx)("button",{className:"toggle",children:"Login"})})]})}),Object(b.jsx)("p",{children:"Please lonin to gain access to Edit page."})]})}),B=a(16),I=a(13),L=c.a.createContext();L.displayName="GalleryContext";var D=L,E=a(28),J=function(){return Object(b.jsx)(D.Consumer,{children:function(e){return Object(b.jsxs)("fieldset",{children:[Object(b.jsx)("legend",{children:"Materials Used"}),Object(b.jsx)("input",{onChange:e.checkBoxHandler,type:"checkbox",id:"marbel",name:"marbel",value:"Marbel",className:"material"}),Object(b.jsx)("label",{htmlFor:"marbel",children:"Marbel"}),Object(b.jsx)("input",{onClick:e.checkBoxHandler,type:"checkbox",id:"mountain crystal",name:"mountain crystal",value:"MountainCrystal",className:"material"}),Object(b.jsx)("label",{htmlFor:"mountain crystal",children:"Mountain Crystal"}),Object(b.jsx)("input",{onClick:e.checkBoxHandler,type:"checkbox",id:"amethyst",name:"amethyst",value:"\u0410methyst",className:"material"}),Object(b.jsx)("label",{htmlFor:"amethyst",children:"\u0410methyst"}),Object(b.jsx)("input",{onClick:e.checkBoxHandler,type:"checkbox",id:"jasper",name:"jasper",value:"Jasper",className:"material"}),Object(b.jsx)("label",{htmlFor:"jasper",children:"Jasper"}),Object(b.jsx)("input",{onClick:e.checkBoxHandler,type:"checkbox",id:"labrador",name:"labrador",value:"Labrador",className:"material"}),Object(b.jsx)("label",{htmlFor:"labrador",children:"Labrador"}),Object(b.jsx)("input",{onClick:e.checkBoxHandler,type:"checkbox",id:"pyryt",name:"pyryt",value:"Pyryt",className:"material"}),Object(b.jsx)("label",{htmlFor:"pyryt",children:"Pyryt"}),Object(b.jsx)("input",{onClick:e.checkBoxHandler,type:"checkbox",id:"agate",name:"agate",value:"\u0410gate",className:"material"}),Object(b.jsx)("label",{htmlFor:"agate",children:"\u0410gate"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{onClick:e.checkBoxHandler,type:"checkbox",id:"onyx",name:"onyx",value:"Onyx",className:"material"}),Object(b.jsx)("label",{htmlFor:"onyx",children:"Onyx"}),Object(b.jsx)("input",{onClick:e.checkBoxHandler,type:"checkbox",id:"jade",name:"jade",value:"Jade",className:"material"}),Object(b.jsx)("label",{htmlFor:"jade",children:"Jade"}),Object(b.jsx)("input",{onClick:e.checkBoxHandler,type:"checkbox",id:"malachite",name:"malachite",value:"Malachite",className:"material"}),Object(b.jsx)("label",{htmlFor:"malachite",children:"Malachite"}),Object(b.jsx)("input",{onClick:e.checkBoxHandler,type:"checkbox",id:"citrine",name:"citrine",value:"Citrine",className:"material"}),Object(b.jsx)("label",{htmlFor:"citrine",children:"Citrine"}),Object(b.jsx)("input",{onClick:e.checkBoxHandler,type:"checkbox",id:"obsidian",name:"obsidian",value:"Obsidian",className:"material"}),Object(b.jsx)("label",{htmlFor:"obsidian",children:"Obsidian"}),Object(b.jsx)("input",{onClick:e.checkBoxHandler,type:"checkbox",id:"serpentine",name:"serpentine",value:"serpentine",className:"material"}),Object(b.jsx)("label",{htmlFor:"serpentine",children:"Serpentine"}),Object(b.jsx)("input",{onClick:e.checkBoxHandler,type:"checkbox",id:"quartz",name:"quartz",value:"quartz",className:"material"}),Object(b.jsx)("label",{htmlFor:"quartz",children:"Quartz"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{onClick:e.checkBoxHandler,type:"checkbox",id:"firestone",name:"firestone",value:"Firestone",className:"material"}),Object(b.jsx)("label",{htmlFor:"firestone",children:"Firestone"}),Object(b.jsx)("input",{onClick:e.checkBoxHandler,type:"checkbox",id:"tiger's eye",name:"tiger's eye",value:"Tiger'sEye",className:"material"}),Object(b.jsx)("label",{htmlFor:"tiger's eye",children:"Tiger's Eye"}),Object(b.jsx)("br",{})]})}})},G=function(){var e=function(e){var t=Number(e)/2.54;console.log(t.toFixed(2))},t=e,a=Object(n.useState)(t),c=Object(E.a)(a,2),s=c[0],i=c[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("fieldset",{className:"right",children:[Object(b.jsx)("legend",{children:"Panneaux Name"}),Object(b.jsx)("label",{htmlFor:"panneauxName",children:"Name"}),Object(b.jsx)("input",{type:"text",id:"panneauxName",name:"panneauxName",placeholder:"New Panneaux"})]}),Object(b.jsxs)("fieldset",{className:"inline",children:[Object(b.jsx)("legend",{children:"Author"}),Object(b.jsx)("input",{type:"radio",id:"vladimir",name:"author",value:"Vladimir"}),Object(b.jsx)("label",{htmlFor:"vladimir",className:"radio",children:"Vladimir"}),Object(b.jsx)("input",{type:"radio",id:"damyan",name:"author",value:"Damyan"}),Object(b.jsx)("label",{htmlFor:"damyan",className:"radio",children:"Damyan"})]}),Object(b.jsxs)("fieldset",{children:[Object(b.jsx)("legend",{children:"Panneaux Dimensions"}),Object(b.jsx)("label",{htmlFor:"width",className:"dim",children:"Width"}),Object(b.jsx)("input",{type:"number",name:"width",defaultValue:"75",id:"width",placeholder:"number"}),Object(b.jsx)("label",{htmlFor:"height",className:"dim",children:"Height"}),Object(b.jsx)("input",{type:"number",name:"height",defaultValue:"75",id:"height",placeholder:"number"}),Object(b.jsx)("input",{type:"radio",name:"unit",value:"cm",checked:s===e,defaultChecked:!0,id:"cm"}),Object(b.jsx)("label",{htmlFor:"cm",className:"radio",children:"cm"}),Object(b.jsx)("input",{type:"radio",name:"unit",value:e,checked:s===e,onChange:function(e){return i(e.target.value)},id:"inch"}),Object(b.jsx)("label",{htmlFor:"inch",className:"radio",children:"inch"})]}),Object(b.jsx)(J,{})]})},V=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("legend",{children:"Actions"}),Object(b.jsxs)("div",{className:"flexRow",children:[Object(b.jsx)("input",{type:"reset",name:"reset",value:"Reset",className:"cta"}),Object(b.jsx)("label",{htmlFor:"reset"})]}),Object(b.jsxs)("div",{className:"flexRow",children:[Object(b.jsx)("input",{type:"submit",name:"add",value:"Add",className:"cta"}),Object(b.jsx)("label",{htmlFor:"add"})]}),Object(b.jsxs)("div",{className:"flexRow",children:[Object(b.jsx)("input",{on:!0,type:"submit",name:"delete",value:"Delete",className:"cta"}),Object(b.jsx)("label",{htmlFor:"delete"})]})]})};a(50);var R=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onSelectFileHandler=function(e){return e.preventDefault(),n.fileInput.current.files[0].name},n.checkBoxHandler=function(e){return n.setState((function(t){return{materials:Object(r.a)(Object(r.a)({},t.materials),{},Object(B.a)({},e.target.name,!!e.target.checked))}})),setTimeout((function(){console.log("")})),n.state.materials},n.state={data:{picture:"",caption:"",url:"",author:"",width:"",height:"",materials:{}},context:{data:"",checkBoxHandler:n.checkBoxHandler}},n.onSubmitFormHandler=n.onSubmitFormHandler.bind(Object(I.a)(n)),n.onChangeHandler=n.onChangeHandler.bind(Object(I.a)(n)),n.onSelectFileHandler=n.onSelectFileHandler.bind(Object(I.a)(n)),n.fileInput=c.a.createRef(),n.onClickLogoutHandler=n.onClickLogoutHandler.bind(Object(I.a)(n)),n}return Object(j.a)(a,[{key:"onChangeHandler",value:function(e){this.setState(Object(B.a)({},e.target.name,e.target.value))}},{key:"onSubmitFormHandler",value:function(e){e.preventDefault();var t=this.onSelectFileHandler(e),a=e.target.panneauxName.value,n=e.target.author.value,c=e.target.width.value,s=e.target.height.value,i=Object.keys(this.checkBoxHandler(e)).join(", "),l={picture:"/thestonemagic/images/".concat(t),caption:a,author:"".concat(n," Damyanov"),url:"".concat(a.toLowerCase()),width:c,height:s,materials:i};console.log(JSON.stringify(l)),F("/classes/Gallery","POST",l).then((function(e){alert("New Panneaux added to the Gallery"),console.log(e)}))}},{key:"onClickLogoutHandler",value:function(){F("/logout","POST",{}).then((function(e){console.log("You have been successfully logged out"),sessionStorage.removeItem("username"),sessionStorage.removeItem("sessionToken"),sessionStorage.removeItem("userId"),console.log(e)})),this.props.history.push("/")}},{key:"render",value:function(){return Object(b.jsxs)("main",{className:"AppMain",children:[Object(b.jsx)("h2",{children:"Edit Page"}),Object(b.jsx)(D.Provider,{value:this.state.context,children:Object(b.jsxs)("form",{className:"FormEdit",onSubmit:this.onSubmitFormHandler,children:[Object(b.jsxs)("fieldset",{className:"left w-1 h-3",children:[Object(b.jsx)("legend",{children:"Picture"}),Object(b.jsx)("label",{htmlFor:"upload-picture",children:"Add an Image"}),Object(b.jsx)("input",{ref:this.fileInput,type:"file",id:"picture",name:"upload-picture"})]}),Object(b.jsx)("div",{className:"info",children:Object(b.jsx)(G,{})}),Object(b.jsx)("fieldset",{className:"right w-1 h-3 flexColumn",children:Object(b.jsx)(V,{})})]})}),Object(b.jsx)("button",{onClick:this.onClickLogoutHandler,className:"logout",children:"Logout"})]})}}]),a}(n.Component),X=(a(51),function(){return Object(b.jsxs)("div",{class:"lds-ellipsis",children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{})]})}),q=(a(52),function(){var e=Object(u.f)();return Object(b.jsx)("main",{className:"AppMain",children:Object(b.jsxs)("section",{className:"error",children:[Object(b.jsx)("h2",{children:"There is no such page"}),Object(b.jsx)("h2",{children:Object(b.jsx)("i",{class:"fas fa-map-signs"})}),Object(b.jsx)("button",{onClick:function(){e.push("/thestonemagic")},children:"Home?"})]})})}),z=(a(53),function(){return Object(b.jsx)("div",{className:"Logo",children:Object(b.jsx)("img",{src:"/images/logo.png",alt:"logo"})})}),K=(a(54),function(e){return Object(b.jsxs)("footer",{className:"AppFooter",children:[Object(b.jsx)(z,{}),Object(b.jsx)("p",{children:"\xa9 All rights reserved"}),Object(b.jsx)(l.b,{to:"/login",className:"Login",children:Object(b.jsx)("i",{className:e.icon})})]})}),Y=(a(55),function(e){return function(t){var a=Object(u.f)();return T()?Object(b.jsx)(e,Object(r.a)({},t)):(a.push("/login"),null)}}),W=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(p,{title:"The Stone Magic"}),Object(b.jsx)(n.Suspense,{fallback:X,children:Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{path:"/",exact:!0,component:f}),Object(b.jsx)(u.a,{path:"/thestonemagic",component:f}),Object(b.jsx)(u.a,{path:"/gallery",exact:!0,component:H}),Object(b.jsx)(u.a,{path:"/gallery/:url",exact:!0,component:S}),Object(b.jsx)(u.a,{path:"/contact",component:P}),Object(b.jsx)(u.a,{path:"/login",component:M}),Object(b.jsx)(u.a,{path:"/edit",component:Y(R)}),Object(b.jsx)(u.a,{render:function(e){return Object(b.jsx)(q,Object(r.a)({},e))}})]})}),Object(b.jsx)(K,{icon:"fas fa-sign-in-alt"})]})}}]),a}(n.Component),U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,58)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};a(56);i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(l.a,{children:Object(b.jsx)(W,{})})}),document.getElementById("root")),U()}},[[57,1,2]]]);
//# sourceMappingURL=main.9129e008.chunk.js.map