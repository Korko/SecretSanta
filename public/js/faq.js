(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/GqU":function(e,t,n){var r=n("RK3t"),i=n("HYAF");e.exports=function(e){return r(i(e))}},"/b0K":function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,"\n.fade-enter-active, .fade-leave-active {\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s;\n}\n.fade-enter, .fade-leave-to {\n    opacity: 0;\n}\n.card {\n    margin: 10px 60px;\n}\n.card .card-header {\n    cursor: pointer;\n}\n.card .card-header:after {\n    content: '';\n    position: absolute;\n    width: 1.5rem;\n    height: 1.5rem;\n    border-style: solid;\n    border-color: #000;\n    border-width: 0.2rem 0 0 0.2rem;\n    -webkit-transform-origin: 0.5rem 0.5rem;\n            transform-origin: 0.5rem 0.5rem; /* 1/3 width 1/3 height */\n    right: 1.25rem; /* right padding of card-header */\n    top: 1rem; /* top padding of card-header + transform-origin / 2 */\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    -webkit-transition: all 1s;\n    transition: all 1s; /* twice the fade delay */\n}\n.card .card-header[aria-expanded='true']:after {\n    -webkit-transform: rotate(45deg) scaleX(-1) scaleY(-1);\n            transform: rotate(45deg) scaleX(-1) scaleY(-1);\n}\n",""])},"0BK2":function(e,t){e.exports={}},"0Dky":function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},"0GbY":function(e,t,n){var r=n("Qo9l"),i=n("2oRo"),a=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?a(r[e])||a(i[e]):r[e]&&r[e][t]||i[e]&&i[e][t]}},"0eef":function(e,t,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,a=i&&!r.call({1:2},1);t.f=a?function(e){var t=i(this,e);return!!t&&t.enumerable}:r},"2oRo":function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")()}).call(this,n("yLpj"))},"33Wh":function(e,t,n){var r=n("yoRg"),i=n("eDl+");e.exports=Object.keys||function(e){return r(e,i)}},4:function(e,t,n){e.exports=n("DMAi")},"6JNq":function(e,t,n){var r=n("UTVS"),i=n("Vu81"),a=n("Bs8V"),o=n("m/L8");e.exports=function(e,t){for(var n=i(t),s=o.f,u=a.f,c=0;c<n.length;c++){var l=n[c];r(e,l)||s(e,l,u(t,l))}}},"8UG/":function(e,t,n){"use strict";var r=n("uEBS");n.n(r).a},"8oxB":function(e,t){var n,r,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var u,c=[],l=!1,p=-1;function d(){l&&u&&(l=!1,u.length?c=u.concat(c):p=-1,c.length&&f())}function f(){if(!l){var e=s(d);l=!0;for(var t=c.length;t;){for(u=c,c=[];++p<t;)u&&u[p].run();p=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new m(e,t)),1!==c.length||l||s(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"93I0":function(e,t,n){var r=n("VpIT"),i=n("kOOl"),a=r("keys");e.exports=function(e){return a[e]||(a[e]=i(e))}},"9tPo":function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var i,a=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(i=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}},B6y2:function(e,t,n){var r=n("I+eb"),i=n("b1O7").values;r({target:"Object",stat:!0},{values:function(e){return i(e)}})},Bs8V:function(e,t,n){var r=n("g6v/"),i=n("0eef"),a=n("XGwC"),o=n("/GqU"),s=n("wE6v"),u=n("UTVS"),c=n("DPsx"),l=Object.getOwnPropertyDescriptor;t.f=r?l:function(e,t){if(e=o(e),t=s(t,!0),c)try{return l(e,t)}catch(e){}if(u(e,t))return a(!i.f.call(e,t),e[t])}},DMAi:function(e,t,n){"use strict";n.r(t);var r=n("XuX8"),i=n.n(r),a=n("qSUR"),o=n("bjSD"),s=(n("tkto"),n("B6y2"),{props:{questions:{type:Object,required:!0}},data:function(){return{selectedCategory:Object.keys(this.questions)[0],categories:Object.keys(this.questions),qnas:this.questions,showed:{}}},computed:{selectedQuestions:function(){return Object.keys(this.qnas[this.selectedCategory])},selectedAnswers:function(){return Object.values(this.qnas[this.selectedCategory])}},watch:{selectedCategory:function(){this.showed={}}}}),u=(n("8UG/"),n("KHd+")),c=Object(u.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",{staticClass:"nav nav-tabs"},e._l(e.categories,(function(t,r){return n("li",{key:r,staticClass:"nav-item"},[n("a",{class:{"nav-link":!0,active:e.selectedCategory===t},attrs:{href:"#"},on:{click:function(n){e.selectedCategory=t}}},[e._v(e._s(e.$t("faq.categories."+t)))])])})),0),e._v(" "),e._l(e.selectedQuestions,(function(t,r){return n("div",{key:e.selectedCategory+"_"+r,staticClass:"card"},[n("p",{staticClass:"card-header",attrs:{id:"question"+r,"aria-expanded":e.showed[r],"aria-controls":"answer"+r},on:{click:function(t){return e.$set(e.showed,r,!e.showed[r])}}},[e._v(e._s(t))]),e._v(" "),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.showed[r],expression:"showed[i]"}],staticClass:"card-body",attrs:{id:"answer"+r}},[n("p",[e._v(e._s(e.selectedAnswers[r]))])])])],1)}))],2)}),[],!1,null,null,null).exports;i.a.use(a.default);var l=document.documentElement.lang.substr(0,2),p=new a.default({locale:l,messages:o.a});window.app=new i.a({el:"#content",components:{Faq:c},i18n:p})},DPsx:function(e,t,n){var r=n("g6v/"),i=n("0Dky"),a=n("zBJ4");e.exports=!r&&!i((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},HYAF:function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},"I+eb":function(e,t,n){var r=n("2oRo"),i=n("Bs8V").f,a=n("kRJp"),o=n("busE"),s=n("zk60"),u=n("6JNq"),c=n("lMq5");e.exports=function(e,t){var n,l,p,d,f,m=e.target,v=e.global,h=e.stat;if(n=v?r:h?r[m]||s(m,{}):(r[m]||{}).prototype)for(l in t){if(d=t[l],p=e.noTargetGet?(f=i(n,l))&&f.value:n[l],!c(v?l:m+(h?".":"#")+l,e.forced)&&void 0!==p){if(typeof d==typeof p)continue;u(d,p)}(e.sham||p&&p.sham)&&a(d,"sham",!0),o(n,l,d,e)}}},I1BE:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),a=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(a).concat([i]).join("\n")}var o;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<e.length;i++){var o=e[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},I8vh:function(e,t,n){var r=n("ppGB"),i=Math.max,a=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):a(n,t)}},JBy8:function(e,t,n){var r=n("yoRg"),i=n("eDl+").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},"KHd+":function(e,t,n){"use strict";function r(e,t,n,r,i,a,o,s){var u,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),o?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=u):i&&(u=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(e,t){return u.call(t),l(e,t)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,u):[u]}return{exports:e,options:c}}n.d(t,"a",(function(){return r}))},Qo9l:function(e,t,n){var r=n("2oRo");e.exports=r},RK3t:function(e,t,n){var r=n("0Dky"),i=n("xrYK"),a="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?a.call(e,""):Object(e)}:Object},TWQb:function(e,t,n){var r=n("/GqU"),i=n("UMSQ"),a=n("I8vh"),o=function(e){return function(t,n,o){var s,u=r(t),c=i(u.length),l=a(o,c);if(e&&n!=n){for(;c>l;)if((s=u[l++])!=s)return!0}else for(;c>l;l++)if((e||l in u)&&u[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},UMSQ:function(e,t,n){var r=n("ppGB"),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},URgk:function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function a(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new a(i.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new a(i.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n("YBdB"),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("yLpj"))},UTVS:function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},VpIT:function(e,t,n){var r=n("xDBR"),i=n("xs3f");(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},Vu81:function(e,t,n){var r=n("0GbY"),i=n("JBy8"),a=n("dBg+"),o=n("glrk");e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(o(e)),n=a.f;return n?t.concat(n(e)):t}},XGwC:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},YBdB:function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,i,a,o,s,u=1,c={},l=!1,p=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick((function(){m(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((a=new MessageChannel).port1.onmessage=function(e){m(e.data)},r=function(e){a.port2.postMessage(e)}):p&&"onreadystatechange"in p.createElement("script")?(i=p.documentElement,r=function(e){var t=p.createElement("script");t.onreadystatechange=function(){m(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):r=function(e){setTimeout(m,0,e)}:(o="setImmediate$"+Math.random()+"$",s=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(o)&&m(+t.data.slice(o.length))},e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),r=function(t){e.postMessage(o+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var i={callback:e,args:t};return c[u]=i,r(u),u++},d.clearImmediate=f}function f(e){delete c[e]}function m(e){if(l)setTimeout(m,0,e);else{var t=c[e];if(t){l=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{f(e),l=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n("yLpj"),n("8oxB"))},"aET+":function(e,t,n){var r,i,a={},o=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(e,t){return t?t.querySelector(e):document.querySelector(e)},u=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=s.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),c=null,l=0,p=[],d=n("9tPo");function f(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=a[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(y(r.parts[o],t))}else{var s=[];for(o=0;o<r.parts.length;o++)s.push(y(r.parts[o],t));a[r.id]={id:r.id,refs:1,parts:s}}}}function m(e,t){for(var n=[],r={},i=0;i<e.length;i++){var a=e[i],o=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[o]?r[o].parts.push(s):n.push(r[o]={id:o,parts:[s]})}return n}function v(e,t){var n=u(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=p[p.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),p.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=u(e.insertAt.before,n);n.insertBefore(t,i)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=p.indexOf(e);t>=0&&p.splice(t,1)}function b(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return g(t,e.attrs),v(e,t),t}function g(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function y(e,t){var n,r,i,a;if(t.transform&&e.css){if(!(a="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=a}if(t.singleton){var o=l++;n=c||(c=b(t)),r=q.bind(null,n,o,!1),i=q.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(t,e.attrs),v(e,t),t}(t),r=S.bind(null,n,t),i=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(t),r=L.bind(null,n),i=function(){h(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=m(e,t);return f(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var o=n[i];(s=a[o.id]).refs--,r.push(s)}e&&f(m(e,t),t);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete a[s.id]}}}};var x,w=(x=[],function(e,t){return x[e]=t,x.filter(Boolean).join("\n")});function q(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,i);else{var a=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function L(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function S(e,t,n){var r=n.css,i=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||a)&&(r=d(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}},afO8:function(e,t,n){var r,i,a,o=n("f5p1"),s=n("2oRo"),u=n("hh1v"),c=n("kRJp"),l=n("UTVS"),p=n("93I0"),d=n("0BK2"),f=s.WeakMap;if(o){var m=new f,v=m.get,h=m.has,b=m.set;r=function(e,t){return b.call(m,e,t),t},i=function(e){return v.call(m,e)||{}},a=function(e){return h.call(m,e)}}else{var g=p("state");d[g]=!0,r=function(e,t){return c(e,g,t),t},i=function(e){return l(e,g)?e[g]:{}},a=function(e){return l(e,g)}}e.exports={set:r,get:i,has:a,enforce:function(e){return a(e)?i(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!u(t)||(n=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}}},b1O7:function(e,t,n){var r=n("g6v/"),i=n("33Wh"),a=n("/GqU"),o=n("0eef").f,s=function(e){return function(t){for(var n,s=a(t),u=i(s),c=u.length,l=0,p=[];c>l;)n=u[l++],r&&!o.call(s,n)||p.push(e?[n,s[n]]:s[n]);return p}};e.exports={entries:s(!0),values:s(!1)}},bjSD:function(e,t,n){"use strict";t.a={fr:{validation:{accepted:"Le champ {attribute} doit être accepté.",active_url:"Le champ {attribute} n'est pas une URL valide.",after:"Le champ {attribute} doit être une date postérieure au {date}.",alpha:"Le champ {attribute} doit seulement contenir des lettres.",alpha_dash:"Le champ {attribute} doit seulement contenir des lettres, des chiffres et des tirets.",alpha_num:"Le champ {attribute} doit seulement contenir des chiffres et des lettres.",array:"Le champ {attribute} doit être un tableau.",before:"Le champ {attribute} doit être une date antérieure au {date}.",between:{numeric:"La valeur de {attribute} doit être comprise entre {min} et {max}.",file:"Le fichier {attribute} doit avoir une taille entre {min} et {max} kilo-octets.",string:"Le texte {attribute} doit avoir entre {min} et {max} caractères.",array:"Le tableau {attribute} doit avoir entre {min} et {max} éléments."},boolean:"Le champ {attribute} doit être vrai ou faux.",confirmed:"Le champ de confirmation {attribute} ne correspond pas.",date:"Le champ {attribute} n'est pas une date valide.",date_format:"Le champ {attribute} ne correspond pas au format {format}.",different:"Les champs {attribute} et {other} doivent être différents.",digits:"Le champ {attribute} doit avoir {digits} chiffres.",digits_between:"Le champ {attribute} doit avoir entre {min} et {max} chiffres.",email:"Le champ {attribute} doit être une adresse email valide.",exists:"Le champ {attribute} sélectionné est invalide.",filled:"Le champ {attribute} est obligatoire.",image:"Le champ {attribute} doit être une image.",in:"Le champ {attribute} est invalide.",integer:"Le champ {attribute} doit être un entier.",ip:"Le champ {attribute} doit être une adresse IP valide.",json:"Le champ {attribute} doit être un document JSON valide.",max:{numeric:"La valeur de {attribute} ne peut être supérieure à {max}.",file:"Le fichier {attribute} ne peut être plus gros que {max} kilo-octets.",string:"Le texte de {attribute} ne peut contenir plus de {max} caractères.",array:"Le tableau {attribute} ne peut avoir plus de {max} éléments."},mimes:"Le champ {attribute} doit être un fichier de type : {values}.",min:{numeric:"La valeur de {attribute} doit être supérieure à {min}.",file:"Le fichier {attribute} doit être plus gros que {min} kilo-octets.",string:"Le texte {attribute} doit contenir au moins {min} caractères.",array:"Le tableau {attribute} doit avoir au moins {min} éléments."},not_in:"Le champ {attribute} sélectionné n'est pas valide.",numeric:"Le champ {attribute} doit contenir un nombre.",regex:"Le format du champ {attribute} est invalide.",required:"Le champ {attribute} est obligatoire.",required_if:"Le champ {attribute} est obligatoire quand la valeur de {other} est {value}.",required_unless:"Le champ {attribute} est obligatoire sauf si {other} est {values}.",required_with:"Le champ {attribute} est obligatoire quand {values} est présent.",required_with_all:"Le champ {attribute} est obligatoire quand {values} est présent.",required_without:"Le champ {attribute} est obligatoire quand {values} n'est pas présent.",required_without_all:"Le champ {attribute} est requis quand aucun de {values} n'est présent.",same:"Les champs {attribute} et {other} doivent être identiques.",size:{numeric:"La valeur de {attribute} doit être {size}.",file:"La taille du fichier de {attribute} doit être de {size} kilo-octets.",string:"Le texte de {attribute} doit contenir {size} caractères.",array:"Le tableau {attribute} doit contenir {size} éléments."},string:"Le champ {attribute} doit être une chaîne de caractères.",timezone:"Le champ {attribute} doit être un fuseau horaire valide.",unique:"La valeur du champ {attribute} est déjà utilisée.",url:"Le format de l'URL de {attribute} n'est pas valide.",recaptcha:"Le captcha n'a pas pu être validé.",custom:{"g-recaptcha-response":{required:"Le captcha est obligatoire",recaptcha:"Le captcha est invalide"},randomform:{title:{required:"Le titre de l'email est requis."},content:{required:"Le contenu de l'email est requis.",contains:"Le contenu de l'email doit contenir le mot {TARGET} pour indiquer la cible."},expiration:{required:"La date d'expiration est requise.",min:"La date d'expiration ne peut pas précéder demain.",max:"La date d'expiration ne peut pas dépasser un an."},participants:{length:"Il faut au moins 3 participants"},participant:{name:{required:"Ce participant est requis (au moins 3 personnes).",distinct:"Ce participant n'a pas un nom unique."},email:{required:"Cette adresse email est requise.",format:"Le format de cette adresse est invalide."}}},dearsanta:{content:{required:"Le contenu du message est requis."}},organizer:{email:{required:"La nouvelle adresse est requise.",format:"Le format de l'adresse n'est pas valide."}}},attributes:{name:"Nom",username:"Pseudo",email:"E-mail",first_name:"Prénom",last_name:"Nom",password:"Mot de passe",password_confirmation:"Confirmation du mot de passe",city:"Ville",country:"Pays",address:"Adresse",phone:"Téléphone",mobile:"Portable",age:"Age",sex:"Sexe",gender:"Genre",day:"Jour",month:"Mois",year:"Année",hour:"Heure",minute:"Minute",second:"Seconde",title:"Titre",content:"Contenu",description:"Description",excerpt:"Extrait",date:"Date",time:"Heure",available:"Disponible",size:"Taille","g-recaptcha-response":"Recaptcha"}},organizer:{list:{name:"Nom",email:"Adresse Email",status:"Status de réception de l'email"},up_and_sent:"Modifié avec succès !",deleted:"Toutes les données ont été supprimées",purge:{button:"Supprimer tout",confirm:{title:"Êtes-vous sûr de vouloir supprimer la totalité des données avant leur expiration le {expiration} ?",body:"Vous ne recevrez pas le récapitulatif des tirages de cet évènement et les participants ne pourront plus écrire à leur père noël secrêt. Cette action ne peut être annulée.",value:"Supprimer toutes les données",help:'Entrez "[+:verification]" en dessous pour confirmer',ok:"Purger",cancel:"Annuler"}}},common:{internal:"Une erreur est survenue",fetcher:{load:"Charger",loading:"Chargement en cours..."},form:{send:"Envoyer",sending:"Envoi en cours",sent:"Envoyé"},modal:{close:"Fermer"},email:{status:{created:"En attente d'envoi",sent:"Envoyé",received:"Reçu",error:"Erreur"}}},faq:{nav:{go:"Allez, c'est parti !",contact:"J'ai encore une question"},categories:{general:"Générales",technical:"Techniques"},questions:{general:{"Pourquoi avoir développé SecretSanta.fr ?":"Le développeur faisait fréquemment des soirées secret santa avec des amis ou des collègues avec les prénoms de chacun dans un chapeau. Chacun piochait un papier et c'est arrivé plusieurs fois que quelqu'un tombe sur son prénom. Parfois on relançait le tirage, parfois la personne ne le disais pas et je trouvais ça dommage. Alors il a eu l'idée d'en faire un outils. Le but était de faire en sorte que tout soit automatique et que personne ne se pioche soit même. Même l'organisateur participait comme tout le monde puisqu'il ne pouvait pas savoir qui avait pioché qui. Après sont venus les exclusions etc.","Comment ce site peut fonctionner en étant gratuit ?":"SecretSanta.fr est complètement gratuit pour les utilisateurs, pas pour le développeur qui paye les différents frais. Il n'y a aucune publicité ni revente d'informations.","Je me suis trompé dans mon adresse email quand j'ai organisé mon secret santa, comment faire ?":"Pour corriger ce problème, soit vous organizer un autre tirage, soit vous demandez à un des participant de vous transmettre l'adresse web qui lui permet d'écrire à son père noël secret et vous l'envoyez par mail à l'adresse suivante : help@secretsanta.fr. Après vérification et durant son temps libre, le développeur pourra peut-être vous aider.","J'ai supprimé mon email d'accès au panneau d'organisateur, comment faire ?":"Pour corriger ce problème, soit vous organizer un autre tirage, soit vous demandez à un des participant de vous transmettre l'adresse web qui lui permet d'écrire à son père noël secret et vous l'envoyez par mail à l'adresse suivante : help@secretsanta.fr. Après vérification et durant son temps libre, le développeur pourra peut-être vous aider.","Je me suis trompé dans l'adresse d'un participant":"Lorsque vous avez organisé votre secret santa, vous avez dû recevoir un email avec un lien vers un panneau d'organisateur. Vous pourrez modifier l'adresse email de chaque participant depuis cette interface.","Quand sont supprimés mes données personnelles ?":"Toutes vos données d'un tirage sont supprimées 7 jours après la date d'expiration. Ce délai a été fixé afin d'envoyer à l'organisateur la liste des participants avec leur cible piochée par mail afin d'aider à l'organisation d'un secretsanta avec les mêmes personnes plus tard en évitant de retomber sur les mêmes cibles.","J'ai oublié un participant, comment je peux le rajouter ?":"Malheureusement, de par sa conception, SecretSanta.fr ne permet pas de rajouter quelqu'un une fois le tirage effectué. Il vous reste cependant une option, autre que relancer le tirage : vous pouvez attribuez à cette personne votre propre cible et offrir vous même un cadeau à ce nouveau participant.","Qui peut savoir la liste des cibles ?":"Pour faire court : personne. Pour faire long : "},technical:{"Quelles données sont stockées et pourquoi ?":"Sont conservés pour chaque participant : nom et adresse email, pour chaque organisation, le titre et le contenu du mail envoyé ainsi que chaque message envoyé entre participant via le lien reçu par mail (appelé 'cher papa noël'). Elles sont conservées pour deux raisons : d'abord pour permettre cette dernière fonctionnalité qui permet d'écrire à son père noël secret. Ensuite pour permettre de réenvoyer les emails en cas d'erreur d'adresse.","Comment sont stockées les données ?":"Chaque élement est chiffré en AES-256 avec une clef unique par organisation. Cette clef n'est pas stockée et est envoyée à chaque participant. L'administrateur ne peut donc jamais accéder aux données sans action de votre part. Chaque fois que vous effectuez une action, vous utilisez automatiquement cette clef qui n'est que prétée à SecretSanta pour faire l'action demandée sans jamais l'enregistrer.","Je voudrais supprimer mes données, comment faire ?":"De part la façon dont sont stockées les données, l'administrateur est dans l'incapacité de savoir quelle donnée appartient à qui. Seul l'organisateur est en capacité de supprimer les données de tous les participants d'un coup. Sinon, ces données sont automatiquement supprimées peu après la fin de l'évènement.","J'aimerais vérifier par moi même le code source, où puis-je le trouver ?":"Avec grand plaisir ! Le code source se trouve à l'adresse suivante : https://framagit.com/Korko/SecretSanta. Vous pouvez aussi trouver le lien en haut à droite de la page principale, dans le petit ruban rouge."}}},dearsanta:{list:{date:"Date d'envoi",body:"Corps du message",status:"Status de réception de l'email",empty:"Aucun email envoyé pour le moment"},content:{label:"Contenu du mail",placeholder:"Cher Papa Noël..."}},form:{nav:{what:"Qu'est-ce que c'est ?",how:"Comment faire ?",go:"Allez, c'est parti !",faq:"Foire aux questions"},title:"Secret Santa .fr",subtitle:"Offrez-vous des cadeaux... secrètement !",fyi:"Pour votre information",section:{what:{title:"Qu'est-ce que c'est ?",subtitle:"Description du Secret Santa",heading1:"Le principe",content1:"Secret Santa est un moyen drôle et original de s'offrir anonymement des cadeaux entre amis, collègues...\nLe déroulement est simple : chaque participant reçoit, de façon aléatoire, le nom de la personne à qui il devra faire un cadeau.\nLe montant du cadeau est généralement fixé au préalable (2€, 5€, 10€...)\nLe but n'est pas forcément de faire un beau cadeau mais d'être créatif !",notice:"secretsanta.fr est entièrement gratuit et sans publicité.\nTout est payé par le développeur lui-même.\nSi cet outil vous plait, pensez à faire un don.\n{button}"},how:{title:"Comment faire ?",subtitle:"Vous allez voir, c'est simple !",heading1:"Première étape : spécifier le nombre et les noms des participants",content1:'Grâce aux boutons "Ajouter un participant" et "Enlever un participant", il est possible d\'ajuster le nombre de personnes.\nPour chaque personne, indiquez un nom/prénom ou un pseudonyme. Deux participants ne peuvent avoir le même nom, sinon il est impossible de les différencier.\nA noter que secretsanta.fr est conçu de façon à ce qu\'une personne ne puisse pas se piocher elle-même.',heading2:"Deuxième étape : remplir les informations de contact et les exclusions",content2:"(Optionel) Ajoutez des exclusions. Si vous ne voulez pas que deux participants puissent se piocher l'un l'autre, remplissez le champ \"Exclusions\".",heading3:"Troisième étape : préparer l'e-mail",content3:'Il ne vous reste plus qu\'à remplir le titre et le corps du courriel que les participants recevront.\nLe mot clef "{TARGET}" est obligatoire dans le corps du message afin de donner à chaque personne sa "cible".\n(Optionel) Vous pouvez aussi utiliser le mot clef "{SANTA}" qui sera remplacé par le nom du destinataire du message.',notice:"secretsanta.fr ne sauvegarde vos données que lorsque cela est requis.\nCelles-ci sont chiffrées pour être inutilisables sans action de votre part.\nAucune de ces données ne seront partagées et vous avez le contrôle total sur celles-ci.\nLe code source est disponible sur {link}"},go:{title:"À vous de jouer !",subtitle:"Remplissez, cliquez et c'est parti !"}},waiting:'Formulaire en cours de création. Si ce message reste affiché, essayez de rafraichir la page, sinon contactez moi par mail (<a href="mailto:&#x6a;&#x65;&#x72;&#x65;&#x6d;&#x79;&#x2e;&#x6c;&#x65;&#x6d;&#x65;&#x73;&#x6c;&#x65;&#x40;&#x6b;&#x6f;&#x72;&#x6b;&#x6f;&#x2e;&#x66;&#x72;">&#x6a;&#x65;&#x72;&#x65;&#x6d;&#x79;&#x2e;&#x6c;&#x65;&#x6d;&#x65;&#x73;&#x6c;&#x65;&#x40;&#x6b;&#x6f;&#x72;&#x6b;&#x6f;&#x2e;&#x66;&#x72;</a>) ou via <a href="https://github.com/Korko">GitHub</a>. Merci.',success:"Envoyé avec succès !",participants:{title:"Détails des participants",import:"Importer depuis un fichier",importing:"Import en cours"},participant:{organizer:"Organisateur",name:{label:"Nom ou pseudonyme",placeholder:"exemple : Paul ou Korko"},email:{label:"Adresse e-mail",placeholder:"exemple : michel@aol.com"},exclusions:{label:"Exclusions",placeholder:"Aucune exclusion",noOptions:"Liste vide",noResult:"Aucun résultat"},remove:"Enlever",add:"Ajouter un participant"},csv:{title:"Importer une liste de participants depuis un fichier CSV",help:"Comment créer un fichier CSV avec {excel} Microsoft Office Excel {elink} ou {calc} Libre Office Calc {elink}",format:"Afin que votre fichier CSV fonctionne, voici le format attendu :",column1:"Nom du participant",column2:"Adresse e-mail",column3:"Exclusions (noms séparés par une virgule)",warning:"Attention, l'import de ces données supprimera les participants déjà renseignés.",cancel:"Annuler",import:"Importer",importError:"Une erreur est survenue lors de l'import.",importSuccess:"L'import a été effectué avec succès."},mail:{title:{label:"Titre du mail",placeholder:"ex : Soirée secretsanta du 23 décembre chez Martin"},content:{label:"Contenu du mail",placeholder:"ex : Salut {SANTA}, pour la soirée secret santa, ta cible c'est {TARGET}. Pour rappel, le montant du cadeau est de 3€ !",tip1:'Utilisez "{santa}&#123;SANTA&#125;{close}" pour le nom de celui qui recevra le mail et "{target}&#123;TARGET&#125;{close}" pour le nom de sa cible.',tip2:"Conseil : Pensez à rappeler la date, le lieu ainsi que le montant du cadeau."},post:"----\nPour écrire à votre Secret Santa, allez sur la page suivante : {link}\nvia SecretSanta.fr"},"data-expiration":"Date limite de stockage des emails",submit:"Lancez l'aléatoire !",paypal:{alt:"PayPal, le réflexe sécurité pour payer en ligne"}}}}},busE:function(e,t,n){var r=n("2oRo"),i=n("kRJp"),a=n("UTVS"),o=n("zk60"),s=n("iSVu"),u=n("afO8"),c=u.get,l=u.enforce,p=String(String).split("String");(e.exports=function(e,t,n,s){var u=!!s&&!!s.unsafe,c=!!s&&!!s.enumerable,d=!!s&&!!s.noTargetGet;"function"==typeof n&&("string"!=typeof t||a(n,"name")||i(n,"name",t),l(n).source=p.join("string"==typeof t?t:"")),e!==r?(u?!d&&e[t]&&(c=!0):delete e[t],c?e[t]=n:i(e,t,n)):c?e[t]=n:o(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&c(this).source||s(this)}))},"dBg+":function(e,t){t.f=Object.getOwnPropertySymbols},"eDl+":function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},ewvW:function(e,t,n){var r=n("HYAF");e.exports=function(e){return Object(r(e))}},f5p1:function(e,t,n){var r=n("2oRo"),i=n("iSVu"),a=r.WeakMap;e.exports="function"==typeof a&&/native code/.test(i(a))},"g6v/":function(e,t,n){var r=n("0Dky");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},glrk:function(e,t,n){var r=n("hh1v");e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},hh1v:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},iSVu:function(e,t,n){var r=n("xs3f"),i=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return i.call(e)}),e.exports=r.inspectSource},kOOl:function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},kRJp:function(e,t,n){var r=n("g6v/"),i=n("m/L8"),a=n("XGwC");e.exports=r?function(e,t,n){return i.f(e,t,a(1,n))}:function(e,t,n){return e[t]=n,e}},lMq5:function(e,t,n){var r=n("0Dky"),i=/#|\.prototype\./,a=function(e,t){var n=s[o(e)];return n==c||n!=u&&("function"==typeof t?r(t):!!t)},o=a.normalize=function(e){return String(e).replace(i,".").toLowerCase()},s=a.data={},u=a.NATIVE="N",c=a.POLYFILL="P";e.exports=a},"m/L8":function(e,t,n){var r=n("g6v/"),i=n("DPsx"),a=n("glrk"),o=n("wE6v"),s=Object.defineProperty;t.f=r?s:function(e,t,n){if(a(e),t=o(t,!0),a(n),i)try{return s(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},ppGB:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},tkto:function(e,t,n){var r=n("I+eb"),i=n("ewvW"),a=n("33Wh");r({target:"Object",stat:!0,forced:n("0Dky")((function(){a(1)}))},{keys:function(e){return a(i(e))}})},uEBS:function(e,t,n){var r=n("/b0K");"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(r,i);r.locals&&(e.exports=r.locals)},wE6v:function(e,t,n){var r=n("hh1v");e.exports=function(e,t){if(!r(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!r(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},xDBR:function(e,t){e.exports=!1},xrYK:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},xs3f:function(e,t,n){var r=n("2oRo"),i=n("zk60"),a=r["__core-js_shared__"]||i("__core-js_shared__",{});e.exports=a},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},yoRg:function(e,t,n){var r=n("UTVS"),i=n("/GqU"),a=n("TWQb").indexOf,o=n("0BK2");e.exports=function(e,t){var n,s=i(e),u=0,c=[];for(n in s)!r(o,n)&&r(s,n)&&c.push(n);for(;t.length>u;)r(s,n=t[u++])&&(~a(c,n)||c.push(n));return c}},zBJ4:function(e,t,n){var r=n("2oRo"),i=n("hh1v"),a=r.document,o=i(a)&&i(a.createElement);e.exports=function(e){return o?a.createElement(e):{}}},zk60:function(e,t,n){var r=n("2oRo"),i=n("kRJp");e.exports=function(e,t){try{i(r,e,t)}catch(n){r[e]=t}return t}}},[[4,0,3]]]);