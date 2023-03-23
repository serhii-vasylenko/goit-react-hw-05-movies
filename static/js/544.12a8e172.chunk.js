"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{668:function(n,t,r){r.d(t,{Z:function(){return h}});var e,a,c,i=r(433),u=r(87),o=r(689),s=r(766),p=r(934),d=p.Z.ul(e||(e=(0,s.Z)(["\n  @media screen and (min-width: 768px) {\n    display: flex;\n    flex-wrap: wrap;\n    column-gap: 16px;\n    row-gap: 28px;\n  }\n"]))),f=p.Z.li(a||(a=(0,s.Z)(["\n  @media screen and (max-width: 767px) {\n    margin-bottom: 24px;\n  }\n\n  @media screen and (min-width: 768px) {\n    flex-basis: calc((100% - 16px) / 2);\n  }\n  @media screen and (min-width: 1280px) {\n    flex-basis: calc((100% - 48px) / 4);\n  }\n"]))),m=p.Z.img(c||(c=(0,s.Z)(["\n  margin-bottom: 12px;\n  width: 100%;\n  @media screen and (min-width: 768px) {\n    height: 540px;\n\n    object-fit: cover;\n  }\n\n  @media screen and (min-width: 1280px) {\n    height: 460px;\n  }\n"]))),x=r(184),h=function(n){var t=n.movies,r=n.flag,e=(0,o.TH)(),a=(0,i.Z)(t).sort((function(n,t){return t.popularity-n.popularity}));return(0,x.jsx)(d,{children:a.map((function(n){var t=n.id,a=n.poster_path,c=n.title;return(0,x.jsx)(f,{children:(0,x.jsxs)(u.rU,{to:"".concat(r).concat(t),state:{from:e},children:[(0,x.jsx)(m,{src:a?"https://image.tmdb.org/t/p/w500".concat(a):"https://www.reelviews.net/resources/img/default_poster.jpg",alt:c}),(0,x.jsx)("p",{children:c})]})},function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,t){return n+((t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_")}),"")}())}))})}},755:function(n,t,r){r.d(t,{Z:function(){return p}});var e,a,c=r(766),i=r(934),u=i.Z.section(e||(e=(0,c.Z)(["\n\n  padding: 24px 16px;\n\n  @media screen and (min-width: 480px){\n    padding: 24px 16px;\n  }\n\n  background-color: #293a36;\n"]))),o=i.Z.h2(a||(a=(0,c.Z)(["\n    margin-bottom: 32px;\n"]))),s=r(184),p=function(n){var t=n.title,r=n.children;return(0,s.jsxs)(u,{children:[t&&(0,s.jsx)(o,{children:t}),r]})}},544:function(n,t,r){r.r(t);var e=r(861),a=r(439),c=r(687),i=r.n(c),u=r(791),o=r(668),s=r(755),p=r(207),d=r(184);t.default=function(){var n=(0,u.useState)([]),t=(0,a.Z)(n,2),r=t[0],c=t[1];return(0,u.useEffect)((function(){var n=function(){var n=(0,e.Z)(i().mark((function n(){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.Hg)();case 3:t=n.sent,r=t.results,c(r),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),(new AbortController).abort();case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,d.jsx)("main",{children:(0,d.jsx)(s.Z,{title:"Trending today",children:(0,d.jsx)(o.Z,{movies:r,flag:"movies/"})})})}},207:function(n,t,r){r.d(t,{Hg:function(){return u},M1:function(){return p},Pg:function(){return s},Ph:function(){return o},tx:function(){return d}});var e=r(861),a=r(687),c=r.n(a),i=r(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"0a5061ab0f3f7e359a07b52243a53d24"}}),u=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/search/movie?query=".concat(encodeURIComponent(t)));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/movie/".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/movie/".concat(t,"/credits"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/movie/".concat(t,"/reviews"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.12a8e172.chunk.js.map