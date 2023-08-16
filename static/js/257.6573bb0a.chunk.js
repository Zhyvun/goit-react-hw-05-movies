"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[257],{9257:function(n,e,r){r.r(e),r.d(e,{default:function(){return _}});var t,a,i,s,o,c,u=r(9439),p=r(2791),l=r(7689),d=r(5617),f=r(9468),x=r(168),v=r(1087),h=r(5706),m=(0,h.Z)(v.rU)(t||(t=(0,x.Z)(["\n  text-decoration: none;\n  color: inherit;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  text-align: center;\n  margin-bottom: 24px;\n  padding: 8px 16px;\n  border: 1px solid grey;\n  border-radius: 10px;\n  transition: border-color 400ms ease, color 400ms ease;\n\n  &:hover,\n  &:focus,\n  &:active {\n    border-color: #ff7341;\n    color: #ff7341;\n  }\n"]))),g=h.Z.div(a||(a=(0,x.Z)(["\n  padding: 24px;\n"]))),j=h.Z.div(i||(i=(0,x.Z)(["\n  display: flex;\n  gap: 24px;\n  margin-bottom: 16px;\n"]))),Z=h.Z.div(s||(s=(0,x.Z)(["\n  border-top: 1px solid grey;\n  border-bottom: 1px solid grey;\n"]))),b=h.Z.ul(o||(o=(0,x.Z)(["\n  list-style: none;\n"]))),w=(0,h.Z)(v.rU)(c||(c=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  text-decoration: none;\n  color: inherit;\n  font-size: 24px;\n  transition: color 400ms ease;\n\n  &:hover,\n  &:focus,\n  &:active {\n    color: #ff7341;\n  }\n"]))),y=r(184),_=function(){var n,e,r=(0,p.useState)({}),t=(0,u.Z)(r,2),a=t[0],i=t[1],s=(0,l.TH)(),o=(0,p.useRef)(null!==(n=null===(e=s.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"),c=(0,l.UO)().movieId;(0,p.useEffect)((function(){(0,d.m4)(c).then((function(n){return i(n)})).catch((function(n){console.error(n.message),i({})}))}),[c]);var x=a.genres,v=new Date(a.release_date).getFullYear(),h=a.poster_path,_=a.production_countries;return(0,y.jsxs)(g,{children:[(0,y.jsxs)(m,{to:o.current,children:[(0,y.jsx)(f.A65,{}),"Go back"]}),(0,y.jsxs)(j,{children:[h&&(0,y.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w300").concat(h),alt:a.title}),(0,y.jsxs)("div",{children:[(0,y.jsxs)("h2",{children:[a.title," (",v||a.status,")"]}),(0,y.jsxs)("p",{children:["Made in:"," ",_&&_.map((function(n){return n.name})).join(", ")]}),(0,y.jsxs)("p",{children:["User Score: ",function(){var n=a.vote_average;return Math.round(10*n).toFixed(0)+"%"}()]}),(0,y.jsx)("h3",{children:"Overview"}),(0,y.jsx)("p",{children:a.overview}),(0,y.jsx)("h3",{children:"Genres"}),(0,y.jsxs)("p",{children:[x&&x.map((function(n){return n.name})).join(" ")," "]})]})]}),(0,y.jsxs)(Z,{children:[(0,y.jsx)("h3",{children:"Additional information"}),(0,y.jsxs)(b,{children:[(0,y.jsx)("li",{children:(0,y.jsxs)(w,{to:"cast",children:[(0,y.jsx)(f.RR_,{}),"Cast"]})}),(0,y.jsx)("li",{children:(0,y.jsxs)(w,{to:"reviews",children:[(0,y.jsx)(f.RR_,{}),"Reviews"]})})]}),(0,y.jsx)(l.j3,{})]})]})}},5617:function(n,e,r){r.d(e,{Bt:function(){return d},Tg:function(){return c},iJ:function(){return u},m4:function(){return p},y:function(){return l}});var t=r(5861),a=r(4687),i=r.n(a),s=r(1243);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="6cbea8cece37cf85eba0b83585dd8520",c=function(){var n=(0,t.Z)(i().mark((function n(){var e,r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={api_key:o,page:1},n.next=3,s.Z.get("/trending/movie/day",{params:e});case 3:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={api_key:o,page:1,query:e},n.next=3,s.Z.get("/search/movie",{params:r});case 3:return t=n.sent,a=t.data,n.abrupt("return",a.results.filter((function(n){return n.title.toLowerCase().includes(e.toLowerCase())})));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={api_key:o,page:1},n.next=3,s.Z.get("/movie/".concat(e),{params:r});case 3:return t=n.sent,a=t.data,console.log(a),n.abrupt("return",a);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={api_key:o,page:1,language:"en-US"},n.next=3,s.Z.get("/movie/".concat(e,"/credits"),{params:r});case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={api_key:o,page:1,language:"en-US"},n.next=3,s.Z.get("/movie/".concat(e,"/reviews"),{params:r});case 3:return t=n.sent,a=t.data,n.abrupt("return",a.results);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=257.6573bb0a.chunk.js.map