(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,function(e,t,a){e.exports={input:"TodoList_input__3N5Sm",allNoMatterImportant:"TodoList_allNoMatterImportant__TR7gx",important:"TodoList_important__3arSD",noMatter:"TodoList_noMatter__fBmYT",all:"TodoList_all__mkJno"}},,function(e,t,a){e.exports={label:"SuperCheckBox_label__2m4Nt",checkbox:"SuperCheckBox_checkbox__3D9rh",fake:"SuperCheckBox_fake__34zAb",text:"SuperCheckBox_text__23lgx"}},,,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),c=a.n(r),o=(a(12),a(2)),i=(a(13),a(15));function u(e){return l.a.createElement("div",null,l.a.createElement("button",{style:{minWidth:"40px",height:"30px",borderRadius:"10px",backgroundColor:"deepskyblue"},onClick:e.onClick},e.name))}function m(e){return l.a.createElement("div",null,l.a.createElement("input",{type:"text",style:{borderRadius:"10px",backgroundColor:"LightCyan",padding:"6px 6px 6px 19px"},value:e.value,onChange:e.onChange,onKeyPress:e.onKeyPress}))}var s=a(1),p=a.n(s),d=a(3),E=a.n(d);function v(){return l.a.createElement("label",{className:E.a.label},l.a.createElement("input",{type:"checkbox",className:E.a.checkbox}),l.a.createElement("span",{className:E.a.fake}),l.a.createElement("span",{className:E.a.text}))}var f=[{id:Object(i.a)(),name:"Andrew"},{id:Object(i.a)(),name:"Sveta"}];function h(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1],s=function(){""===r?alert("Enter your name"):alert("Hello "+r),function(e){var t={id:Object(i.a)(),name:e};f.push(t)}(r),c(f.length)};return l.a.createElement("div",null,l.a.createElement("h3",null,"What to do"),l.a.createElement("div",{className:p.a.input},l.a.createElement(m,{value:r,onChange:function(e){c(e.currentTarget.value)},onKeyPress:function(e){"Enter"===e.key&&s()}}),l.a.createElement("div",null,l.a.createElement(u,{onClick:s,name:"+"}))),l.a.createElement("ul",null,e.tasks.map((function(t){return l.a.createElement("li",{key:t.id},l.a.createElement(v,null),l.a.createElement("span",null,t.name),l.a.createElement(u,{onClick:function(){return e.removeTasks(t.id)},name:"delete"}))}))),l.a.createElement("div",{className:p.a.allNoMatterImportant},l.a.createElement("div",{className:p.a.important},l.a.createElement(u,{name:"Important",onClick:function(){e.changeFilter("important")}})),l.a.createElement("div",{className:p.a.noMatter},l.a.createElement(u,{name:"No Matter",onClick:function(){e.changeFilter("noMatter")}})),l.a.createElement("div",{className:p.a.all},l.a.createElement(u,{name:"All",onClick:function(){e.changeFilter("all")}}))))}function b(){return l.a.createElement("div",null,l.a.createElement(m,null),l.a.createElement(v,null),l.a.createElement(u,null))}var k=function(){var e=Object(n.useState)([{id:Object(i.a)(),name:"Family",value:!0},{id:Object(i.a)(),name:"React",value:!0},{id:Object(i.a)(),name:"Job",value:!1},{id:Object(i.a)(),name:"Travels",value:!0},{id:Object(i.a)(),name:"Games",value:!1}]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("all"),u=Object(o.a)(c,2),m=u[0],s=u[1],p=a;return"important"===m&&(p=a.filter((function(e){return e.value}))),"noMatter"===m&&(p=a.filter((function(e){return!e.value}))),l.a.createElement("div",{className:"App"},l.a.createElement(h,{tasks:p,removeTasks:function(e){r(a.filter((function(t){return t.id!==e})))},changeFilter:function(e){s(e)}}),l.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.23cecc95.chunk.js.map