"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[896],{896:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r,c=e(439),a=e(791),u=e(689),o=e(914),i=e(168),s=e(444).ZP.img(r||(r=(0,i.Z)(["\n  width: 100px;\n"]))),f=e(184),p=function(n){var t=n.name,e=n.profile,r=n.character;return(0,f.jsxs)("li",{children:[(0,f.jsx)(s,{src:e?"https://image.tmdb.org/t/p/w500/".concat(e):o,alt:""}),(0,f.jsx)("p",{children:t}),(0,f.jsxs)("p",{children:["Character: ",r]})]})},h=e(228),v=function(){var n=(0,u.UO)().movieId,t=(0,a.useState)(null),e=(0,c.Z)(t,2),r=e[0],o=e[1];if((0,a.useEffect)((function(){(0,h.fT)(n).then((function(n){var t=n.cast;o(t)}))}),[n]),r)return(0,f.jsx)("ul",{children:r.map((function(n){var t=n.original_name,e=n.profile_path,r=n.character,c=n.id;return(0,f.jsx)(p,{name:t,profile:e,character:r},c)}))})}},228:function(n,t,e){function r(n,t,e,r,c,a,u){try{var o=n[a](u),i=o.value}catch(s){return void e(s)}o.done?t(i):Promise.resolve(i).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,a){var u=n.apply(t,e);function o(n){r(u,c,a,o,i,"next",n)}function i(n){r(u,c,a,o,i,"throw",n)}o(void 0)}))}}e.d(t,{fT:function(){return v},ZP:function(){return p},Ny:function(){return h},yJ:function(){return l},qF:function(){return d}});var a=e(757),u=e.n(a),o="a80320dfafec72dcbb6280cf373b1a2a",i="https://api.themoviedb.org/3/";function s(){return(s=c(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"trending/movie/week?api_key=").concat(o));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var f={fetchDataWeek:function(){return s.apply(this,arguments)}},p=f,h=function(){var n=c(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(t,"?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=c(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=c(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=c(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"search/movie?api_key=").concat(o,"&query=").concat(t));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},914:function(n,t,e){n.exports=e.p+"static/media/placeholder.2e99c90def83766f04c2.png"}}]);
//# sourceMappingURL=896.38c5a5d1.chunk.js.map