"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[804],{228:function(n,t,e){function r(n,t,e,r,c,u,a){try{var o=n[u](a),i=o.value}catch(s){return void e(s)}o.done?t(i):Promise.resolve(i).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,u){var a=n.apply(t,e);function o(n){r(a,c,u,o,i,"next",n)}function i(n){r(a,c,u,o,i,"throw",n)}o(void 0)}))}}e.d(t,{fT:function(){return v},ZP:function(){return p},Ny:function(){return h},yJ:function(){return d},qF:function(){return l}});var u=e(757),a=e.n(u),o="a80320dfafec72dcbb6280cf373b1a2a",i="https://api.themoviedb.org/3/";function s(){return(s=c(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"trending/movie/week?api_key=").concat(o));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var f={fetchDataWeek:function(){return s.apply(this,arguments)}},p=f,h=function(){var n=c(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(t,"?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=c(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=c(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=c(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"search/movie?api_key=").concat(o,"&query=").concat(t));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},804:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(439),c=e(791),u=e(689),a=e(228),o=e(87),i=e(184),s=function(n){var t=n.title,e=n.id,r=(0,u.TH)();return(0,i.jsx)("li",{children:(0,i.jsx)(o.rU,{to:"/movies/".concat(e),state:{from:r},children:t})})},f=function(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],o=t[1];return(0,c.useEffect)((function(){a.ZP.fetchDataWeek().then((function(n){var t=n.results;o(t)}))}),[]),(0,i.jsxs)("main",{children:[(0,i.jsx)("h1",{children:"Trends of the week"}),(0,i.jsx)("ul",{children:e.map((function(n){var t=n.title,e=n.id;return(0,i.jsx)(s,{title:t,id:e},e)}))}),(0,i.jsx)(c.Suspense,{children:(0,i.jsx)(u.j3,{})})]})}}}]);
//# sourceMappingURL=804.ca61b114.chunk.js.map