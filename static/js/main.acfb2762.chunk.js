(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,,,,function(e,t,c){var n={"./PirateAdviceScreenshot.PNG":22,"./RunBuddyScreenshot.PNG":23,"./VolleyAllScreenshot.PNG":24};function a(e){var t=r(e);return c(t)}function r(e){if(!c.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id=21},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/PirateAdviceScreenshot.1ecc299e.PNG"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/RunBuddyScreenshot.71de40a0.PNG"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/VolleyAllScreenshot.4b141444.PNG"},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(8),s=c.n(r),l=(c(15),c(3)),i=(c(16),c(0)),o=function(){return Object(i.jsxs)("footer",{className:"flex-row justify-space-around",children:[Object(i.jsxs)("ul",{className:"flex-row no-bullets align-center",children:[Object(i.jsxs)("li",{className:"mr-35",children:["Here's my ",Object(i.jsx)("a",{href:"https://github.com/Dkunk7",target:"_blank",rel:"noreferrer",className:"info-link",children:"GitHub"})]}),Object(i.jsxs)("li",{className:"mr-35",children:["Find me on ",Object(i.jsx)("a",{href:"https://www.linkedin.com/in/dylan-kunkel-1a7103211/",target:"_blank",rel:"noreferrer",className:"info-link",children:"LinkedIn"})]}),Object(i.jsxs)("li",{children:["Send me an email ",Object(i.jsx)("a",{href:"mailto:drkunkel7@gmail.com",target:"_blank",rel:"noreferrer",className:"info-link",children:"here"})]})]}),Object(i.jsx)("h3",{children:"Thanks for stopping by!"})]})},j=c(26),d=function(e){e.currentNav,e.setCurrentNav;var t=e.contactSelected,c=e.setContactSelected;return Object(i.jsxs)(j.a,{className:"flex-row align-center",children:[Object(i.jsx)(j.a.Item,{children:Object(i.jsx)(j.a.Link,{className:"nav-link",children:Object(i.jsx)("a",{href:"#about",className:"no-link-highlight",onClick:function(){return c(!1)},children:"Home"})})}),Object(i.jsx)(j.a.Item,{children:Object(i.jsx)(j.a.Link,{className:"nav-link",href:"#project-sect",children:Object(i.jsx)("a",{className:"no-link-highlight",onClick:function(){return c(!1)},children:"Projects"})})}),Object(i.jsx)(j.a.Item,{children:Object(i.jsx)(j.a.Link,{className:"nav-link ".concat(t&&"navActive"),children:Object(i.jsx)("span",{onClick:function(){return c(!0)},children:"Contact me"})})})]})},h=c.p+"static/media/DKLogo1.7dd629ff.png",u=function(e){var t=e.currentNav,c=e.setCurrentNav,n=e.contactSelected,a=e.setContactSelected;return Object(i.jsxs)("header",{children:[Object(i.jsxs)("div",{className:"align-center left-align",children:[Object(i.jsx)("a",{href:"/",className:"logo-img",children:Object(i.jsx)("img",{src:h,style:{width:"20%"},alt:"logo"})}),Object(i.jsx)("h1",{children:"Dylan Kunkel"})]}),Object(i.jsx)(d,{currentNav:t,setCurrentNav:c,contactSelected:n,setContactSelected:a})]})},m=c(4),b=c(7);var O=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(l.a)(e,2),c=t[0],a=t[1],r=c.name,s=c.email,o=c.message,j=Object(n.useState)(""),d=Object(l.a)(j,2),h=d[0],u=d[1];function O(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),u(t?"":"You've entered an invalid email")}else e.target.value.length?u(""):u("".concat(e.target.name," is required."));h||a(Object(b.a)(Object(b.a)({},c),{},Object(m.a)({},e.target.name,e.target.value)))}return Object(i.jsxs)("div",{className:"contact",children:[Object(i.jsx)("h1",{className:"sect-header",children:"Contact me!"}),Object(i.jsx)("p",{children:"(This doesn't work quite yet)"}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(i.jsxs)("div",{className:"label-container",children:[Object(i.jsx)("label",{htmlFor:"name",children:"Name: "}),Object(i.jsx)("input",{type:"text",defaultValue:r,onBlur:O,name:"name"})]}),Object(i.jsxs)("div",{className:"label-container",children:[Object(i.jsx)("label",{htmlFor:"email",children:"Email: "}),Object(i.jsx)("input",{type:"email",defaultValue:s,onBlur:O,name:"email"})]}),Object(i.jsxs)("div",{className:"label-container textarea",children:[Object(i.jsx)("label",{htmlFor:"message",children:"Message: "}),Object(i.jsx)("textarea",{name:"message",defaultValue:o,onBlur:O,rows:"2"})]}),h&&Object(i.jsx)("div",{children:Object(i.jsx)("p",{className:"err-msg",children:h})}),Object(i.jsx)("button",{className:"contact-btn",type:"submit",children:"Submit"})]})]})},x=function(e){var t=e.projects;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{className:"sect-header",id:"project-sect",children:"Projects"}),t.map((function(e){return Object(i.jsxs)("div",{className:"proj-container",children:[Object(i.jsx)("h3",{className:"project-title",children:e.title}),Object(i.jsx)("a",{className:"",href:e.link,target:"_blank",rel:"noreferrer",children:Object(i.jsx)("img",{src:c(21)("./".concat(e.image,".PNG")).default,width:"800",height:"500",alt:"".concat(e.title," sample")})}),Object(i.jsxs)("p",{className:"repo-text",children:["Check out the ",Object(i.jsxs)("a",{className:"repo-link",href:e.repo,target:"_blank",rel:"noreferrer",children:["repository!",Object(i.jsx)("a",{})]})]})]},e.title)}))]})},f=c.p+"static/media/MeHAHA.bd0410c8.png",g=function(){return Object(i.jsxs)("div",{className:"home",children:[Object(i.jsxs)("div",{className:"about-text",children:[Object(i.jsx)("h1",{className:"mt-35 greeting",children:"Hi, I'm Dylan!"}),Object(i.jsx)("p",{className:"dev-talk",children:"I'm a web developer! My skills focus around the MERN stack, but I'm excited to learn anything that comes my way. Below, you'll find my recent work, and feel free to head over to the Contact me section to get in touch!"})]}),Object(i.jsx)("img",{className:"about-img",src:f,alt:"my face"})]})};var p=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)("home"),s=Object(l.a)(r,2),j=s[0],d=s[1],h=Object(n.useState)([{title:"Run Buddy",image:"RunBuddyScreenshot",link:"https://dkunk7.github.io/run-buddy/",repo:"https://github.com/Dkunk7/run-buddy"},{title:"Advice from a Pirate",image:"PirateAdviceScreenshot",link:"https://kait-weishaar.github.io/Pirate-Advice/",repo:"https://github.com/kait-weishaar/Pirate-Advice"},{title:"Volley-All",image:"VolleyAllScreenshot",link:"https://volley-all.herokuapp.com/login",repo:"https://github.com/rrcampbell-exe/volley-all"}]),m=Object(l.a)(h,1)[0];return Object(i.jsx)("div",{className:"App page-container",children:Object(i.jsxs)("div",{className:"content-wrap",children:[Object(i.jsx)(u,{currentNav:j,setCurrentNav:d,contactSelected:c,setContactSelected:a}),Object(i.jsx)("main",{children:c?Object(i.jsx)(O,{}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(g,{}),Object(i.jsx)(x,{projects:m})]})}),Object(i.jsx)(o,{})]})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,27)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),v()}],[[25,1,2]]]);
//# sourceMappingURL=main.acfb2762.chunk.js.map