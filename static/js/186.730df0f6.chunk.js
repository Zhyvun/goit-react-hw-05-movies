"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(e,r,t){t.r(r);var n=t(9439),a=t(2791),u=t(7689),c=t(8977),s=t(5617),o=t(184);r.default=function(){var e=(0,a.useState)([]),r=(0,n.Z)(e,2),t=r[0],i=r[1],p=(0,u.UO)().movieId;function f(e){var r=new Date(e);return(0,c.Z)(r,"yyyy-MM-dd (HH:mm:ss)")}return(0,a.useEffect)((function(){(0,s.Bt)(p).then((function(e){return i(e)})).catch((function(e){console.error(e.message),i([])}))}),[p]),(0,o.jsx)(o.Fragment,{children:t.length>0?(0,o.jsx)("ul",{children:t.map((function(e){return(0,o.jsxs)("li",{children:[(0,o.jsxs)("h3",{children:["Author: ",e.author]}),(0,o.jsxs)("p",{children:["Date of create: ",f(e.created_at)]}),(0,o.jsx)("p",{children:e.content})]},e.id)}))}):(0,o.jsx)("p",{children:"SORRY! But We don't have any revies for this movie"})})}},5617:function(e,r,t){t.d(r,{Bt:function(){return l},Tg:function(){return o},iJ:function(){return i},m4:function(){return p},y:function(){return f}});var n=t(5861),a=t(4687),u=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="6cbea8cece37cf85eba0b83585dd8520",o=function(){var e=(0,n.Z)(u().mark((function e(){var r,t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:s,page:1},e.next=3,c.Z.get("/trending/movie/day",{params:r});case 3:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:s,page:1,query:r},e.next=3,c.Z.get("/search/movie",{params:t});case 3:return n=e.sent,a=n.data,console.log(a.results),e.abrupt("return",a.results.filter((function(e){return e.title.toLowerCase().includes(r.toLowerCase())})));case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:s,page:1},e.next=3,c.Z.get("/movie/".concat(r),{params:t});case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:s,page:1,language:"en-US"},e.prev=1,e.next=4,c.Z.get("/movie/".concat(r,"/credits"),{params:t});case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),console.error(e.t0.message),new Error("Failed to fetch cast");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:s,page:1,language:"en-US"},e.next=3,c.Z.get("/movie/".concat(r,"/reviews"),{params:t});case 3:return n=e.sent,a=n.data,console.log(a),e.abrupt("return",a.results);case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.730df0f6.chunk.js.map