(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[703,256],{668:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r,o,i,u=t(433),c=t(87),a=t(689),f=t(766),s=t(934),p=s.Z.ul(r||(r=(0,f.Z)(["\n  @media screen and (min-width: 768px) {\n    display: flex;\n    flex-wrap: wrap;\n    column-gap: 16px;\n    row-gap: 28px;\n  }\n"]))),l=s.Z.li(o||(o=(0,f.Z)(["\n  @media screen and (max-width: 767px) {\n    margin-bottom: 24px;\n  }\n\n  @media screen and (min-width: 768px) {\n    flex-basis: calc((100% - 16px) / 2);\n  }\n  @media screen and (min-width: 1280px) {\n    flex-basis: calc((100% - 48px) / 4);\n\n    &:hover img {\n      transform: scale(1.03);\n    }\n  }\n"]))),d=s.Z.img(i||(i=(0,f.Z)(["\n  margin-bottom: 12px;\n  width: 100%;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  @media screen and (min-width: 768px) {\n    height: 540px;\n\n    object-fit: cover;\n  }\n\n  @media screen and (min-width: 1280px) {\n    height: 460px;\n  }\n"]))),v=t(184),h=function(e){var n=e.movies,t=e.flag,r=(0,a.TH)(),o=(0,u.Z)(n).sort((function(e,n){return n.popularity-e.popularity}));return(0,v.jsx)(p,{children:o.map((function(e){var n=e.id,o=e.poster_path,i=e.title;return(0,v.jsx)(l,{children:(0,v.jsxs)(c.rU,{to:"".concat(t).concat(n),state:{from:r},children:[(0,v.jsx)(d,{src:o?"https://image.tmdb.org/t/p/w500".concat(o):"https://www.reelviews.net/resources/img/default_poster.jpg",alt:i}),(0,v.jsx)("p",{children:i})]})},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+((n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_")}),"")}())}))})}},755:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r,o,i=t(766),u=t(934),c=u.Z.section(r||(r=(0,i.Z)(["\n\n  padding: 24px 16px;\n\n  @media screen and (min-width: 480px){\n    padding: 24px 16px;\n  }\n\n  background-color: #293a36;\n"]))),a=u.Z.h2(o||(o=(0,i.Z)(["\n    margin-bottom: 32px;\n"]))),f=t(184),s=function(e){var n=e.title,t=e.children;return(0,f.jsxs)(c,{children:[n&&(0,f.jsx)(a,{children:n}),t]})}},703:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return D}});var r,o,i,u=t(861),c=t(439),a=t(687),f=t.n(a),s=t(791),p=t(668),l=t(766),d=t(934),v=t(628),h=t(128),y=d.Z.div(r||(r=(0,l.Z)(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n"]))),m=(0,d.Z)(v.DebounceInput)(o||(o=(0,l.Z)(["\n  width: 300px;\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  font: inherit;\n"]))),b=(0,d.Z)(h.G4C)(i||(i=(0,l.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 6px;\n  fill: #a8b3a8;\n"]))),g=t(184),x=function(e){var n=e.value,t=e.onChange;return(0,g.jsxs)(y,{children:[(0,g.jsx)(m,{type:"text",debounceTimeout:1e3,value:n,onChange:function(e){return t(e.target.value)},placeholder:"Search movies"}),(0,g.jsx)(b,{})]})},w=t(256),j=t(755),O=t(207),Z=t(87),D=function(){var e,n=(0,s.useState)([]),t=(0,c.Z)(n,2),r=t[0],o=t[1],i=(0,Z.lr)(),a=(0,c.Z)(i,2),l=a[0],d=a[1],v=null!==(e=l.get("name"))&&void 0!==e?e:"";return(0,s.useEffect)((function(){if(v){var e=function(){var e=(0,u.Z)(f().mark((function e(){var n,t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,O.Ph)(v);case 3:n=e.sent,t=n.results,o(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}}),[v]),(0,g.jsx)("main",{children:(0,g.jsxs)(j.Z,{children:[(0,g.jsx)(x,{value:v,onChange:function(e){d(""!==e?{name:e}:{})}}),r.length>0&&(0,g.jsx)(p.Z,{movies:r,flag:""}),v&&0===r.length&&(0,g.jsx)(w.default,{}),!v&&0===r.length&&(0,g.jsx)("div",{style:{height:"100vh"}})]})})}},256:function(e,n,t){"use strict";t.r(n);var r=t(755),o=t(184);n.default=function(){return(0,o.jsx)("main",{children:(0,o.jsx)(r.Z,{children:(0,o.jsx)("img",{src:"https://i.pinimg.com/originals/46/82/88/46828885c28a6bfa34dd4d6bd9986c8d.png",alt:"Not Found Page"})})})}},207:function(e,n,t){"use strict";t.d(n,{Hg:function(){return c},M1:function(){return s},Pg:function(){return f},Ph:function(){return a},tx:function(){return p}});var r=t(861),o=t(687),i=t.n(o),u=t(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"0a5061ab0f3f7e359a07b52243a53d24"}}),c=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("trending/movie/day");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/search/movie?query=".concat(encodeURIComponent(n)));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(n,"/credits"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(n,"/reviews"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},95:function(e,n,t){var r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof t.g&&t.g&&t.g.Object===Object&&t.g,f="object"==typeof self&&self&&self.Object===Object&&self,s=a||f||Function("return this")(),p=Object.prototype.toString,l=Math.max,d=Math.min,v=function(){return s.Date.now()};function h(e){var n=typeof e;return!!e&&("object"==n||"function"==n)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(h(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=h(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var t=i.test(e);return t||u.test(e)?c(e.slice(2),t?2:8):o.test(e)?NaN:+e}e.exports=function(e,n,t){var r,o,i,u,c,a,f=0,s=!1,p=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(n){var t=r,i=o;return r=o=void 0,f=n,u=e.apply(i,t)}function g(e){return f=e,c=setTimeout(w,n),s?b(e):u}function x(e){var t=e-a;return void 0===a||t>=n||t<0||p&&e-f>=i}function w(){var e=v();if(x(e))return j(e);c=setTimeout(w,function(e){var t=n-(e-a);return p?d(t,i-(e-f)):t}(e))}function j(e){return c=void 0,m&&r?b(e):(r=o=void 0,u)}function O(){var e=v(),t=x(e);if(r=arguments,o=this,a=e,t){if(void 0===c)return g(a);if(p)return c=setTimeout(w,n),b(a)}return void 0===c&&(c=setTimeout(w,n)),u}return n=y(n)||0,h(t)&&(s=!!t.leading,i=(p="maxWait"in t)?l(y(t.maxWait)||0,n):i,m="trailing"in t?!!t.trailing:m),O.cancel=function(){void 0!==c&&clearTimeout(c),f=0,r=a=o=c=void 0},O.flush=function(){return void 0===c?u:j(v())},O}},674:function(e,n,t){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.DebounceInput=void 0;var o=c(t(791)),i=c(t(95)),u=["element","onChange","value","minLength","debounceTimeout","forceNotifyByEnter","forceNotifyOnBlur","onKeyDown","onBlur","inputRef"];function c(e){return e&&e.__esModule?e:{default:e}}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){m(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,n){return l=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},l(e,n)}function d(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=y(e);if(n){var o=y(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return v(this,t)}}function v(e,n){if(n&&("object"===r(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var b=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&l(e,n)}(f,e);var n,t,r,c=d(f);function f(e){var n;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,f),m(h(n=c.call(this,e)),"onChange",(function(e){e.persist();var t=n.state.value,r=n.props.minLength;n.setState({value:e.target.value},(function(){var o=n.state.value;o.length>=r?n.notify(e):t.length>o.length&&n.notify(s(s({},e),{},{target:s(s({},e.target),{},{value:""})}))}))})),m(h(n),"onKeyDown",(function(e){"Enter"===e.key&&n.forceNotify(e);var t=n.props.onKeyDown;t&&(e.persist(),t(e))})),m(h(n),"onBlur",(function(e){n.forceNotify(e);var t=n.props.onBlur;t&&(e.persist(),t(e))})),m(h(n),"createNotifier",(function(e){if(e<0)n.notify=function(){return null};else if(0===e)n.notify=n.doNotify;else{var t=(0,i.default)((function(e){n.isDebouncing=!1,n.doNotify(e)}),e);n.notify=function(e){n.isDebouncing=!0,t(e)},n.flush=function(){return t.flush()},n.cancel=function(){n.isDebouncing=!1,t.cancel()}}})),m(h(n),"doNotify",(function(){var e=n.props.onChange;e.apply(void 0,arguments)})),m(h(n),"forceNotify",(function(e){var t=n.props.debounceTimeout;if(n.isDebouncing||!(t>0)){n.cancel&&n.cancel();var r=n.state.value,o=n.props.minLength;r.length>=o?n.doNotify(e):n.doNotify(s(s({},e),{},{target:s(s({},e.target),{},{value:r})}))}})),n.isDebouncing=!1,n.state={value:"undefined"===typeof e.value||null===e.value?"":e.value};var t=n.props.debounceTimeout;return n.createNotifier(t),n}return n=f,(t=[{key:"componentDidUpdate",value:function(e){if(!this.isDebouncing){var n=this.props,t=n.value,r=n.debounceTimeout,o=e.debounceTimeout,i=e.value,u=this.state.value;"undefined"!==typeof t&&i!==t&&u!==t&&this.setState({value:t}),r!==o&&this.createNotifier(r)}}},{key:"componentWillUnmount",value:function(){this.flush&&this.flush()}},{key:"render",value:function(){var e,n,t=this.props,r=t.element,i=(t.onChange,t.value,t.minLength,t.debounceTimeout,t.forceNotifyByEnter),c=t.forceNotifyOnBlur,f=t.onKeyDown,p=t.onBlur,l=t.inputRef,d=a(t,u),v=this.state.value;e=i?{onKeyDown:this.onKeyDown}:f?{onKeyDown:f}:{},n=c?{onBlur:this.onBlur}:p?{onBlur:p}:{};var h=l?{ref:l}:{};return o.default.createElement(r,s(s(s(s({},d),{},{onChange:this.onChange,value:v},e),n),h))}}])&&p(n.prototype,t),r&&p(n,r),Object.defineProperty(n,"prototype",{writable:!1}),f}(o.default.PureComponent);n.DebounceInput=b,m(b,"defaultProps",{element:"input",type:"text",onKeyDown:void 0,onBlur:void 0,value:void 0,minLength:0,debounceTimeout:100,forceNotifyByEnter:!0,forceNotifyOnBlur:!0,inputRef:void 0})},628:function(e,n,t){"use strict";var r=t(674).DebounceInput;r.DebounceInput=r,e.exports=r}}]);
//# sourceMappingURL=703.5d9bbdae.chunk.js.map