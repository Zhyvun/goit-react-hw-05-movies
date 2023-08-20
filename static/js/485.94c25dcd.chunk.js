"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[485],{3174:function(e,n,t){t.d(n,{Z:function(){return d}});var r,a,u,c=t(7689),o=t(168),s=t(5706),i=t(1087),p=s.Z.ul(r||(r=(0,o.Z)(["\n  list-style-type: none;\n"]))),f=s.Z.li(a||(a=(0,o.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),l=(0,s.Z)(i.rU)(u||(u=(0,o.Z)(["\n  text-decoration: none;\n  color: #191d1e;\n\n  &:hover {\n    color: tomato;\n  }\n"]))),v=t(184),d=function(e){var n=e.movies,t=(0,c.TH)();return(0,v.jsx)(p,{children:n.length>0&&n.map((function(e){var n=e.id,r=e.title;return(0,v.jsx)(f,{children:(0,v.jsx)(l,{to:"/movies/".concat(n),state:{from:t},children:r})},n)}))})}},3485:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r,a,u=t(9439),c=t(2791),o=t(5617),s=t(168),i=t(5706),p=i.Z.div(r||(r=(0,s.Z)(["\npadding: 24px;\n"]))),f=i.Z.h1(a||(a=(0,s.Z)(["\nmargin: 0;\n"]))),l=t(3174),v=t(184),d=function(){var e=(0,c.useState)([]),n=(0,u.Z)(e,2),t=n[0],r=n[1];return(0,c.useEffect)((function(){(0,o.Tg)().then((function(e){r(e)})).catch((function(e){return console.error(e.message)}))}),[]),(0,v.jsxs)(p,{children:[(0,v.jsx)(f,{children:"Trending movies"}),!!t.length&&(0,v.jsx)(l.Z,{movies:t})]})}},5617:function(e,n,t){t.d(n,{Bt:function(){return l},Tg:function(){return s},iJ:function(){return i},m4:function(){return p},y:function(){return f}});var r=t(5861),a=t(4687),u=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="6cbea8cece37cf85eba0b83585dd8520",s=function(){var e=(0,r.Z)(u().mark((function e(){var n,t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={api_key:o,page:1},e.prev=1,e.next=4,c.Z.get("/trending/movie/day",{params:n});case 4:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:o,page:1,query:n},e.next=3,c.Z.get("/search/movie",{params:t});case 3:return r=e.sent,a=r.data,console.log(a.results),e.abrupt("return",a.results.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())})));case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:o,page:1},e.next=3,c.Z.get("/movie/".concat(n),{params:t});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:o,page:1,language:"en-US"},e.prev=1,e.next=4,c.Z.get("/movie/".concat(n,"/credits"),{params:t});case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),console.error(e.t0.message),new Error("Failed to fetch cast");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:o,page:1,language:"en-US"},e.next=3,c.Z.get("/movie/".concat(n,"/reviews"),{params:t});case 3:return r=e.sent,a=r.data,console.log(a),e.abrupt("return",a.results);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=485.94c25dcd.chunk.js.map