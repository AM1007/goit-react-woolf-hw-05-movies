"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[305],{228:function(n,t,e){function r(n,t,e,r,c,a,u){try{var o=n[a](u),i=o.value}catch(s){return void e(s)}o.done?t(i):Promise.resolve(i).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,a){var u=n.apply(t,e);function o(n){r(u,c,a,o,i,"next",n)}function i(n){r(u,c,a,o,i,"throw",n)}o(void 0)}))}}e.d(t,{fT:function(){return h},ZP:function(){return p},Ny:function(){return v},yJ:function(){return l},qF:function(){return d}});var a=e(757),u=e.n(a),o="473f5e2a5e0f5e4f383690e7c3c60561",i="https://api.themoviedb.org/3/";function s(){return(s=c(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"trending/movie/week?api_key=").concat(o));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var f={fetchDataWeek:function(){return s.apply(this,arguments)}},p=f,v=function(){var n=c(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(t,"?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=c(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=c(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=c(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"search/movie?api_key=").concat(o,"&query=").concat(t));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},305:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var r,c=e(439),a=e(791),u=e(87),o=e(228),i=e(168),s=e(444).ZP.input(r||(r=(0,i.Z)(["\n  width: 300px;\n  margin-top: 10px;\n"]))),f=e(184),p=function(n){var t=n.onSubmit,e=(0,a.useState)(""),r=(0,c.Z)(e,2),u=r[0],o=r[1];return(0,f.jsxs)("form",{onSubmit:function(n){n.preventDefault(),""!==u.trim()&&(t(u),o(""))},children:[(0,f.jsx)(s,{placeholder:"Batman",type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:u,onChange:function(n){o(n.target.value)}}),(0,f.jsx)("button",{type:"submit",children:"Search"})]})},v=e(98),h=function(){var n,t=(0,a.useState)([]),e=(0,c.Z)(t,2),r=e[0],i=e[1],s=(0,u.lr)(),h=(0,c.Z)(s,2),l=h[0],d=h[1],m=null!==(n=l.get("query"))&&void 0!==n?n:"";(0,a.useEffect)((function(){m&&(0,o.qF)(m).then((function(n){var t=n.results;i(t)}))}),[m]);return(0,f.jsxs)("div",{children:[(0,f.jsx)(p,{onSubmit:function(n){d({query:n}),i([])}}),(0,f.jsx)("ul",{children:r.length>0&&r.map((function(n){var t=n.original_title,e=n.id;return(0,f.jsx)(v.Z,{title:t,id:e},e)}))})]})}},98:function(n,t,e){var r=e(689),c=e(87),a=e(184);t.Z=function(n){var t=n.title,e=n.id,u=(0,r.TH)();return(0,a.jsx)("li",{children:(0,a.jsx)(c.rU,{to:"/movies/".concat(e),state:{from:u},children:t})})}}}]);
//# sourceMappingURL=305.07adb2da.chunk.js.map