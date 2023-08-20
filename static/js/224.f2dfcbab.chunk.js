"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[224],{3174:function(n,e,r){r.d(e,{Z:function(){return h}});var t,o,a,i=r(7689),s=r(168),u=r(5706),c=r(1087),p=u.Z.ul(t||(t=(0,s.Z)(["\n  list-style-type: none;\n"]))),l=u.Z.li(o||(o=(0,s.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),f=(0,u.Z)(c.rU)(a||(a=(0,s.Z)(["\n  text-decoration: none;\n  color: #191d1e;\n\n  &:hover {\n    color: tomato;\n  }\n"]))),d=r(184),h=function(n){var e=n.movies,r=(0,i.TH)();return(0,d.jsx)(p,{children:e.length>0&&e.map((function(n){var e=n.id,t=n.title;return(0,d.jsx)(l,{children:(0,d.jsx)(f,{to:"/movies/".concat(e),state:{from:r},children:t})},e)}))})}},6224:function(n,e,r){r.r(e),r.d(e,{default:function(){return w}});var t,o,a,i,s=r(9439),u=r(2791),c=r(1087),p=r(5617),l=r(1362),f=r(168),d=r(5706),h=d.Z.form(t||(t=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n"]))),v=d.Z.input(o||(o=(0,f.Z)(["\n  padding: 12px 14px;\n  font: inherit;\n  border: 3px solid #191d1e;\n  font-weight: 600;\n  font-size: 20px;\n  margin-right: 10px;\n  margin-left: 10px;\n  border-radius: 4px;\n  outline: none;\n\n  &:hover {\n    color: #ff7341;\n    border: 3px solid #ff7341;\n    transition: color 400ms ease;\n  }\n"]))),x=d.Z.button(a||(a=(0,f.Z)(["\n  padding: 12px 12px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 3px solid #191d1e;\n  color: #191d1e;\n  font-weight: 600;\n  font-size: 20px;\n  border-radius: 4px;\n  transition: color 400ms ease;\n\n  &:hover {\n    color: #ff7341;\n    border: 3px solid #ff7341;\n\n  }\n"]))),g=r(184),m=function(n){var e=n.setParams,r=(0,u.useState)(""),t=(0,s.Z)(r,2),o=t[0],a=t[1];return(0,g.jsxs)(h,{onSubmit:function(n){n.preventDefault(),e(o)},children:[(0,g.jsx)(v,{type:"text",value:o,placeholder:"Enter movies title ...",onChange:function(n){a(n.target.value.trim().toLowerCase())}}),(0,g.jsx)(x,{type:"submit",children:"Search"})]})},Z=r(3174),b=d.Z.div(i||(i=(0,f.Z)(["\n  /* padding: 24px; */\n  border: 1px solid grey;\n  border-radius: 10px;\n    margin-bottom: 48px;\n    padding: 8px 16px;\n    background-color: #d9dede;\n"]))),w=function(){var n,e=(0,u.useState)([]),r=(0,s.Z)(e,2),t=r[0],o=r[1],a=(0,c.lr)(),i=(0,s.Z)(a,2),f=i[0],d=i[1],h=(0,u.useState)(!1),v=(0,s.Z)(h,2),x=v[0],w=v[1],y=(0,u.useState)(!1),k=(0,s.Z)(y,2),_=k[0],j=k[1],S=null!==(n=f.get("query"))&&void 0!==n?n:"";(0,u.useEffect)((function(){if(""!==S){w(!0);var n=(0,p.iJ)(S).then((function(n){o(n),j(0===n.length)})).catch((function(n){console.error(n.message),o([])})).finally((function(){w(!1)}));console.log(n)}else o([])}),[S]);return(0,g.jsxs)(b,{children:[(0,g.jsx)(m,{setParams:function(n){d(""!==n?{query:n}:{})}}),x&&(0,g.jsx)(l.Z,{}),_&&(0,g.jsx)("h1",{children:"No movies with this request. Please, try again"}),S&&t.length>0&&(0,g.jsx)("h1",{children:"Found movies"}),!!t.length&&(0,g.jsx)(Z.Z,{movies:t})]})}},5617:function(n,e,r){r.d(e,{Bt:function(){return f},Tg:function(){return u},iJ:function(){return c},m4:function(){return p},y:function(){return l}});var t=r(5861),o=r(4687),a=r.n(o),i=r(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="6cbea8cece37cf85eba0b83585dd8520",u=function(){var n=(0,t.Z)(a().mark((function n(){var e,r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={api_key:s,page:1},n.prev=1,n.next=4,i.Z.get("/trending/movie/day",{params:e});case 4:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 9:n.prev=9,n.t0=n.catch(1),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t,o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={api_key:s,page:1,query:e},n.next=3,i.Z.get("/search/movie",{params:r});case 3:return t=n.sent,o=t.data,console.log(o.results),n.abrupt("return",o.results.filter((function(n){return n.title.toLowerCase().includes(e.toLowerCase())})));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t,o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={api_key:s,page:1},n.next=3,i.Z.get("/movie/".concat(e),{params:r});case 3:return t=n.sent,o=t.data,n.abrupt("return",o);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t,o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={api_key:s,page:1,language:"en-US"},n.prev=1,n.next=4,i.Z.get("/movie/".concat(e,"/credits"),{params:r});case 4:return t=n.sent,o=t.data,n.abrupt("return",o);case 9:throw n.prev=9,n.t0=n.catch(1),console.error(n.t0.message),new Error("Failed to fetch cast");case 13:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t,o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={api_key:s,page:1,language:"en-US"},n.next=3,i.Z.get("/movie/".concat(e,"/reviews"),{params:r});case 3:return t=n.sent,o=t.data,console.log(o),n.abrupt("return",o.results);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=224.f2dfcbab.chunk.js.map