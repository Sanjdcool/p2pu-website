webpackJsonp([0],Array(37).concat([function(e,t,r){function n(e,t){for(var r=e.length;r--;)if(o(e[r][0],t))return r;return-1}var o=r(73);e.exports=n},function(e,t,r){function n(e){return null==e?void 0===e?s:i:c&&c in Object(e)?a(e):u(e)}var o=r(71),a=r(209),u=r(233),i="[object Null]",s="[object Undefined]",c=o?o.toStringTag:void 0;e.exports=n},function(e,t,r){function n(e,t){var r=e.__data__;return o(t)?r["string"==typeof t?"string":"hash"]:r.map}var o=r(218);e.exports=n},function(e,t,r){var n=r(72),o=n(Object,"create");e.exports=o},function(e,t,r){var n=r(112),o="object"==typeof self&&self&&self.Object===Object&&self,a=n||o||Function("return this")();e.exports=a},function(e,t){var r=Array.isArray;e.exports=r},function(e,t){function r(e){return null!=e&&"object"==typeof e}e.exports=r},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,r){var n=r(41),o=n.Symbol;e.exports=o},function(e,t,r){function n(e,t){var r=a(e,t);return o(r)?r:void 0}var o=r(197),a=r(210);e.exports=n},function(e,t){function r(e,t){return e===t||e!==e&&t!==t}e.exports=r},function(e,t,r){function n(e){return null!=e&&a(e.length)&&!o(e)}var o=r(116),a=r(117);e.exports=n},function(e,t){function r(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=r},function(e,t,r){function n(e){return"symbol"==typeof e||a(e)&&o(e)==u}var o=r(38),a=r(43),u="[object Symbol]";e.exports=n},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,r){function n(e,t,r){var n=e[t];i.call(e,t)&&a(n,r)&&(void 0!==r||t in e)||o(e,t,r)}var o=r(110),a=r(73),u=Object.prototype,i=u.hasOwnProperty;e.exports=n},function(e,t,r){function n(e,t,r){"__proto__"==t&&o?o(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var o=r(111);e.exports=n},function(e,t,r){var n=r(72),o=function(){try{var e=n(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=o},function(e,t,r){(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;e.exports=r}).call(t,r(49))},function(e,t){function r(e,t){return!!(t=null==t?n:t)&&("number"==typeof e||o.test(e))&&e>-1&&e%1==0&&e<t}var n=9007199254740991,o=/^(?:0|[1-9]\d*)$/;e.exports=r},function(e,t){function r(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||n)}var n=Object.prototype;e.exports=r},function(e,t){function r(e){return e}e.exports=r},function(e,t,r){function n(e){if(!a(e))return!1;var t=o(e);return t==i||t==s||t==u||t==c}var o=r(38),a=r(75),u="[object AsyncFunction]",i="[object Function]",s="[object GeneratorFunction]",c="[object Proxy]";e.exports=n},function(e,t){function r(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}var n=9007199254740991;e.exports=r},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),a=n(o),u=r(6),i=(n(u),r(329)),s=n(i),c=function(){var e=["Master public speaking","Build a website","Start writing fiction","Perfect your resume","Hone your interview skills","Write a business plan","Prep for a citizenship exam","Speak English with confidence","Design an online course","Become a better writer"],t={avgTypingDelay:70,cursor:{hideWhenDone:!0,hideWhenDoneDelay:400}};return a.default.createElement("h1",{className:"bold centered"},a.default.createElement(s.default,{phrases:e,typistProps:t}),a.default.createElement("span",null,"in your neighbourhood, for free. "))};t.default=c},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(0),c=n(s),l=r(6),f=(n(l),r(154)),p=n(f),h=r(51),v=n(h),y=r(153),d=n(y),b=r(11),g=r(27),_=n(g),m=function(e){function t(e){o(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={searchResults:[]},r.api=new _.default("learningCircles"),r.searchByLocation=function(e){return r._searchByLocation(e)},r.populateLearningCircles=function(){return r._populateLearningCircles()},r.showMoreResults=function(e){return r._showMoreResults(e)},r.clearResults=function(){return r._clearResults()},r.generateUrl=function(e){return r._generateUrl(e)},r.fetchLearningCircles=function(e,t){return r._fetchLearningCircles(e,t)},r.searchCallback=function(e,t){return r._searchCallback(e,t)},r.populateLearningCircles(),r}return u(t,e),i(t,[{key:"_populateLearningCircles",value:function(){var e={active:!0,signup:"open",limit:b.LEARNING_CIRCLES_LIMIT},t={params:e,callback:this.searchCallback};this.api.fetchResource(t)}},{key:"_searchByLocation",value:function(e){console.log("query",e);var t={active:!0,signup:"open",limit:b.LEARNING_CIRCLES_LIMIT,city:e},r={params:t,callback:this.searchCallback};this.api.fetchResource(r)}},{key:"_clearResults",value:function(){this.state.searchResults.length>0&&this.setState({searchResults:[]})}},{key:"_showMoreResults",value:function(){var e=void 0;if(this.state.currentQuery){var t=Object.assign({},this.state.currentQuery);e=Object.assign(t,{offset:this.state.searchResults.length})}else e={active:!0,limit:b.LEARNING_CIRCLES_LIMIT,offset:this.state.searchResults.length};var r={params:e,callback:this.searchCallback,appendResults:!0};this.api.fetchResource(r)}},{key:"_searchCallback",value:function(e,t){console.log(e);var r=t.appendResults?this.state.searchResults.concat(e.items):e.items;this.setState({searchResults:r,currentQuery:t.params,totalResults:e.count})}},{key:"render",value:function(){return c.default.createElement("div",{className:"search-and-results"},c.default.createElement(p.default,{searchByLocation:this.searchByLocation,clearResults:this.clearResults}),c.default.createElement(v.default,{learningCircles:this.state.searchResults,showMoreResults:this.showMoreResults}),c.default.createElement(d.default,{visibleSearchResults:this.state.searchResults.length,totalSearchResults:this.state.totalResults,showMoreResults:this.showMoreResults}))}}]),t}(s.Component);t.default=m},,function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),a=n(o),u=r(6),i=(n(u),function(e){return e.visibleSearchResults<e.totalSearchResults?a.default.createElement("div",{className:"load-more"},a.default.createElement("p",{className:"large"},"Showing "+e.visibleSearchResults+" of "+e.totalSearchResults+" results"),a.default.createElement("p",{className:"large"},"Load more results"),a.default.createElement("button",{className:"btn p2pu-btn dark arrow",onClick:e.showMoreResults},a.default.createElement("i",{className:"fa fa-arrow-down","aria-hidden":"true"}))):null});t.default=i},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),a=n(o),u=r(9),i=(n(u),r(52)),s=n(i),c=function(e){return a.default.createElement("div",{className:"course-search"},a.default.createElement("div",{className:"label col-md-1 col-sm-2 col-xs-12"},"I live in"),a.default.createElement(s.default,{name:"search-form",classes:"col-md-6 col-sm-8 col-xs-12",handleSelect:e.searchByLocation,handleInputChange:e.clearResults}))};t.default=c},,function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=r(0),a=n(o),u=r(6),i=n(u),s=r(151),c=n(s),l=r(150),f=n(l);i.default.render(a.default.createElement(f.default,null),document.getElementById("header-text-carousel")),i.default.render(a.default.createElement(c.default,null),document.getElementById("learning-circles-browse"))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,r){function n(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}var o=r(211),a=r(212),u=r(213),i=r(214),s=r(215);n.prototype.clear=o,n.prototype.delete=a,n.prototype.get=u,n.prototype.has=i,n.prototype.set=s,e.exports=n},function(e,t,r){function n(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}var o=r(220),a=r(221),u=r(222),i=r(223),s=r(224);n.prototype.clear=o,n.prototype.delete=a,n.prototype.get=u,n.prototype.has=i,n.prototype.set=s,e.exports=n},function(e,t,r){var n=r(72),o=r(41),a=n(o,"Map");e.exports=a},function(e,t,r){function n(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}var o=r(225),a=r(226),u=r(227),i=r(228),s=r(229);n.prototype.clear=o,n.prototype.delete=a,n.prototype.get=u,n.prototype.has=i,n.prototype.set=s,e.exports=n},function(e,t){function r(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}e.exports=r},function(e,t,r){function n(e,t){var r=u(e),n=!r&&a(e),l=!r&&!n&&i(e),p=!r&&!n&&!l&&c(e),h=r||n||l||p,v=h?o(e.length,String):[],y=v.length;for(var d in e)!t&&!f.call(e,d)||h&&("length"==d||l&&("offset"==d||"parent"==d)||p&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||s(d,y))||v.push(d);return v}var o=r(202),a=r(244),u=r(42),i=r(245),s=r(113),c=r(246),l=Object.prototype,f=l.hasOwnProperty;e.exports=n},function(e,t){function r(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}e.exports=r},function(e,t,r){function n(e,t){t=o(t,e);for(var r=0,n=t.length;null!=e&&r<n;)e=e[a(t[r++])];return r&&r==n?e:void 0}var o=r(205),a=r(239);e.exports=n},function(e,t,r){function n(e){return a(e)&&o(e)==u}var o=r(38),a=r(43),u="[object Arguments]";e.exports=n},function(e,t,r){function n(e){return!(!u(e)||a(e))&&(o(e)?v:c).test(i(e))}var o=r(116),a=r(219),u=r(75),i=r(240),s=/[\\^$.*+?()[\]{}|]/g,c=/^\[object .+?Constructor\]$/,l=Function.prototype,f=Object.prototype,p=l.toString,h=f.hasOwnProperty,v=RegExp("^"+p.call(h).replace(s,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=n},function(e,t,r){function n(e){return u(e)&&a(e.length)&&!!i[o(e)]}var o=r(38),a=r(117),u=r(43),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,e.exports=n},function(e,t,r){function n(e){if(!o(e))return a(e);var t=[];for(var r in Object(e))i.call(e,r)&&"constructor"!=r&&t.push(r);return t}var o=r(114),a=r(231),u=Object.prototype,i=u.hasOwnProperty;e.exports=n},function(e,t,r){function n(e,t){return u(a(e,t,o),e+"")}var o=r(115),a=r(235),u=r(236);e.exports=n},function(e,t,r){var n=r(242),o=r(111),a=r(115),u=o?function(e,t){return o(e,"toString",{configurable:!0,enumerable:!1,value:n(t),writable:!0})}:a;e.exports=u},function(e,t){function r(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}e.exports=r},function(e,t,r){function n(e){if("string"==typeof e)return e;if(u(e))return a(e,n)+"";if(i(e))return l?l.call(e):"";var t=e+"";return"0"==t&&1/e==-s?"-0":t}var o=r(71),a=r(194),u=r(42),i=r(76),s=1/0,c=o?o.prototype:void 0,l=c?c.toString:void 0;e.exports=n},function(e,t){function r(e){return function(t){return e(t)}}e.exports=r},function(e,t,r){function n(e,t){return o(e)?e:a(e,t)?[e]:u(i(e))}var o=r(42),a=r(217),u=r(238),i=r(250);e.exports=n},function(e,t,r){function n(e,t,r,n){var u=!r;r||(r={});for(var i=-1,s=t.length;++i<s;){var c=t[i],l=n?n(r[c],e[c],c,r,e):void 0;void 0===l&&(l=e[c]),u?a(r,c,l):o(r,c,l)}return r}var o=r(109),a=r(110);e.exports=n},function(e,t,r){var n=r(41),o=n["__core-js_shared__"];e.exports=o},function(e,t,r){function n(e){return o(function(t,r){var n=-1,o=r.length,u=o>1?r[o-1]:void 0,i=o>2?r[2]:void 0;for(u=e.length>3&&"function"==typeof u?(o--,u):void 0,i&&a(r[0],r[1],i)&&(u=o<3?void 0:u,o=1),t=Object(t);++n<o;){var s=r[n];s&&e(t,s,n,u)}return t})}var o=r(200),a=r(216);e.exports=n},function(e,t,r){function n(e){var t=u.call(e,s),r=e[s];try{e[s]=void 0;var n=!0}catch(e){}var o=i.call(e);return n&&(t?e[s]=r:delete e[s]),o}var o=r(71),a=Object.prototype,u=a.hasOwnProperty,i=a.toString,s=o?o.toStringTag:void 0;e.exports=n},function(e,t){function r(e,t){return null==e?void 0:e[t]}e.exports=r},function(e,t,r){function n(){this.__data__=o?o(null):{},this.size=0}var o=r(40);e.exports=n},function(e,t){function r(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}e.exports=r},function(e,t,r){function n(e){var t=this.__data__;if(o){var r=t[e];return r===a?void 0:r}return i.call(t,e)?t[e]:void 0}var o=r(40),a="__lodash_hash_undefined__",u=Object.prototype,i=u.hasOwnProperty;e.exports=n},function(e,t,r){function n(e){var t=this.__data__;return o?void 0!==t[e]:u.call(t,e)}var o=r(40),a=Object.prototype,u=a.hasOwnProperty;e.exports=n},function(e,t,r){function n(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=o&&void 0===t?a:t,this}var o=r(40),a="__lodash_hash_undefined__";e.exports=n},function(e,t,r){function n(e,t,r){if(!i(r))return!1;var n=typeof t;return!!("number"==n?a(r)&&u(t,r.length):"string"==n&&t in r)&&o(r[t],e)}var o=r(73),a=r(74),u=r(113),i=r(75);e.exports=n},function(e,t,r){function n(e,t){if(o(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!a(e))||(i.test(e)||!u.test(e)||null!=t&&e in Object(t))}var o=r(42),a=r(76),u=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;e.exports=n},function(e,t){function r(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}e.exports=r},function(e,t,r){function n(e){return!!a&&a in e}var o=r(207),a=function(){var e=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();e.exports=n},function(e,t){function r(){this.__data__=[],this.size=0}e.exports=r},function(e,t,r){function n(e){var t=this.__data__,r=o(t,e);return!(r<0)&&(r==t.length-1?t.pop():u.call(t,r,1),--this.size,!0)}var o=r(37),a=Array.prototype,u=a.splice;e.exports=n},function(e,t,r){function n(e){var t=this.__data__,r=o(t,e);return r<0?void 0:t[r][1]}var o=r(37);e.exports=n},function(e,t,r){function n(e){return o(this.__data__,e)>-1}var o=r(37);e.exports=n},function(e,t,r){function n(e,t){var r=this.__data__,n=o(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}var o=r(37);e.exports=n},function(e,t,r){function n(){this.size=0,this.__data__={hash:new o,map:new(u||a),string:new o}}var o=r(188),a=r(189),u=r(190);e.exports=n},function(e,t,r){function n(e){var t=o(this,e).delete(e);return this.size-=t?1:0,t}var o=r(39);e.exports=n},function(e,t,r){function n(e){return o(this,e).get(e)}var o=r(39);e.exports=n},function(e,t,r){function n(e){return o(this,e).has(e)}var o=r(39);e.exports=n},function(e,t,r){function n(e,t){var r=o(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}var o=r(39);e.exports=n},function(e,t,r){function n(e){var t=o(e,function(e){return r.size===a&&r.clear(),e}),r=t.cache;return t}var o=r(248),a=500;e.exports=n},function(e,t,r){var n=r(234),o=n(Object.keys,Object);e.exports=o},function(e,t,r){(function(e){var n=r(112),o="object"==typeof t&&t&&!t.nodeType&&t,a=o&&"object"==typeof e&&e&&!e.nodeType&&e,u=a&&a.exports===o,i=u&&n.process,s=function(){try{return i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=s}).call(t,r(102)(e))},function(e,t){function r(e){return o.call(e)}var n=Object.prototype,o=n.toString;e.exports=r},function(e,t){function r(e,t){return function(r){return e(t(r))}}e.exports=r},function(e,t,r){function n(e,t,r){return t=a(void 0===t?e.length-1:t,0),function(){for(var n=arguments,u=-1,i=a(n.length-t,0),s=Array(i);++u<i;)s[u]=n[t+u];u=-1;for(var c=Array(t+1);++u<t;)c[u]=n[u];return c[t]=r(s),o(e,this,c)}}var o=r(192),a=Math.max;e.exports=n},function(e,t,r){var n=r(201),o=r(237),a=o(n);e.exports=a},function(e,t){function r(e){var t=0,r=0;return function(){var u=a(),i=o-(u-r);if(r=u,i>0){if(++t>=n)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var n=800,o=16,a=Date.now;e.exports=r},function(e,t,r){var n=r(230),o=/^\./,a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,u=/\\(\\)?/g,i=n(function(e){var t=[];return o.test(e)&&t.push(""),e.replace(a,function(e,r,n,o){t.push(n?o.replace(u,"$1"):r||e)}),t});e.exports=i},function(e,t,r){function n(e){if("string"==typeof e||o(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}var o=r(76),a=1/0;e.exports=n},function(e,t){function r(e){if(null!=e){try{return o.call(e)}catch(e){}try{return e+""}catch(e){}}return""}var n=Function.prototype,o=n.toString;e.exports=r},function(e,t,r){var n=r(109),o=r(206),a=r(208),u=r(74),i=r(114),s=r(247),c=Object.prototype,l=c.hasOwnProperty,f=a(function(e,t){if(i(t)||u(t))return void o(t,s(t),e);for(var r in t)l.call(t,r)&&n(e,r,t[r])});e.exports=f},function(e,t){function r(e){return function(){return e}}e.exports=r},function(e,t,r){function n(e,t,r){var n=null==e?void 0:o(e,t);return void 0===n?r:n}var o=r(195);e.exports=n},function(e,t,r){var n=r(196),o=r(43),a=Object.prototype,u=a.hasOwnProperty,i=a.propertyIsEnumerable,s=n(function(){return arguments}())?n:function(e){return o(e)&&u.call(e,"callee")&&!i.call(e,"callee")};e.exports=s},function(e,t,r){(function(e){var n=r(41),o=r(249),a="object"==typeof t&&t&&!t.nodeType&&t,u=a&&"object"==typeof e&&e&&!e.nodeType&&e,i=u&&u.exports===a,s=i?n.Buffer:void 0,c=s?s.isBuffer:void 0,l=c||o;e.exports=l}).call(t,r(102)(e))},function(e,t,r){var n=r(198),o=r(204),a=r(232),u=a&&a.isTypedArray,i=u?o(u):n;e.exports=i},function(e,t,r){function n(e){return u(e)?o(e):a(e)}var o=r(193),a=r(199),u=r(74);e.exports=n},function(e,t,r){function n(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(a);var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],a=r.cache;if(a.has(o))return a.get(o);var u=e.apply(this,n);return r.cache=a.set(o,u)||a,u};return r.cache=new(n.Cache||o),r}var o=r(191),a="Expected a function";n.Cache=o,e.exports=n},function(e,t){function r(){return!1}e.exports=r},function(e,t,r){function n(e){return null==e?"":o(e)}var o=r(203);e.exports=n},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(e,t,r){for(var n=!0;n;){var o=e,a=t,u=r;i=c=s=void 0,n=!1,null===o&&(o=Function.prototype);var i=Object.getOwnPropertyDescriptor(o,a);if(void 0!==i){if("value"in i)return i.value;var s=i.get;if(void 0===s)return;return s.call(u)}var c=Object.getPrototypeOf(o);if(null===c)return;e=c,t=a,r=u,n=!0}},s=r(0),c=n(s),l=r(6),f=n(l),p=r(330),h=n(p),v=r(241),y=n(v),d=r(243),b=n(d),g=function(e){function t(){var e=this;o(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments),this.state={currentPhraseIndex:0},this.componentDidMount=function(){e.renderWord()},this.componentWillUnmount=function(){clearTimeout(e.timer)},this.setNextPhrase=function(){var t=e.props.phrases,r=e.state.currentPhraseIndex;e.setState({currentPhraseIndex:(r+1)%t.length})},this.handleTypingComplete=function(){var t=(0,b.default)(e.props.typistProps,"cursor.hideWhenDoneDelay",0);e.timer=setTimeout(function(){e.renderWord()},e.props.interval+t)},this.getCurrentPhrase=function(){return e.props.phrases[e.state.currentPhraseIndex]},this.renderWord=function(){var t=e.refs.phraseContainer,r=(0,y.default)({},e.props.typistProps,{onTypingDone:e.handleTypingComplete});f.default.unmountComponentAtNode(t),f.default.render(c.default.createElement(h.default,r,e.getCurrentPhrase()),t),e.setNextPhrase()},this.render=function(){var t=e.props.className||"";return c.default.createElement("span",{className:"textCarouselContainer "+t+"}",ref:"phraseContainer"})}}return a(t,e),u(t,null,[{key:"propTypes",value:{phrases:s.PropTypes.arrayOf(s.PropTypes.string).isRequired,interval:s.PropTypes.number,typistProps:s.PropTypes.object},enumerable:!0},{key:"defaultProps",value:{interval:2e3,typistProps:{}},enumerable:!0}]),t}(s.Component);t.default=g,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(328),o=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=o.default,e.exports=t.default},function(e,t,r){e.exports=function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=function(e,t,r){for(var n=!0;n;){var o=e,a=t,u=r;i=c=s=void 0,n=!1,null===o&&(o=Function.prototype);var i=Object.getOwnPropertyDescriptor(o,a);if(void 0!==i){if("value"in i)return i.value;var s=i.get;if(void 0===s)return;return s.call(u)}var c=Object.getPrototypeOf(o);if(null===c)return;e=c,t=a,r=u,n=!0}},c=r(1),l=n(c),f=r(2),p=n(f),h=r(4),v=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(h),y=function(e){function t(e){var r=this;o(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state={text:[],isDone:!1},this.onTypingDone=function(){r.setState({isDone:!0}),r.props.onTypingDone()},this.delayGenerator=function(e,t,n,o){var a=r.props.avgTypingDelay,u=r.props.stdTypingDelay;return r.props.delayGenerator(a,u,{line:e,lineIdx:t,character:n,charIdx:o,defDelayGenerator:function(){var e=arguments.length<=0||void 0===arguments[0]?a:arguments[0],t=arguments.length<=1||void 0===arguments[1]?u:arguments[1];return v.gaussianRnd(e,t)}})},this.props.children&&(this.toType=v.extractText(this.props.children),this.props.startDelay>0&&(this.typeAll=setTimeout.bind(window,this.typeAll.bind(this),this.props.startDelay)))}return a(t,e),i(t,null,[{key:"propTypes",value:{children:c.PropTypes.node,className:c.PropTypes.string,avgTypingDelay:c.PropTypes.number,stdTypingDelay:c.PropTypes.number,startDelay:c.PropTypes.number,cursor:c.PropTypes.object,onTypingDone:c.PropTypes.func,delayGenerator:c.PropTypes.func},enumerable:!0},{key:"defaultProps",value:{className:"",avgTypingDelay:70,stdTypingDelay:25,startDelay:0,cursor:{},onTypingDone:function(){},delayGenerator:v.gaussianRnd},enumerable:!0}]),i(t,[{key:"componentDidMount",value:function(){this.props.children?this.typeAll():this.onTypingDone()}},{key:"shouldComponentUpdate",value:function(e,t){for(var r=0;r<t.text.length;r++){var n=this.state.text[r],o=t.text[r];if(n!==o&&o.length>0)return!0}return this.state.isDone!==t.isDone}},{key:"typeAll",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]?this.toType:arguments[0];v.asyncEach(t,function(t,r,n){e.setState({text:e.state.text.concat([""])},function(){e.typeStr(t,n,r)})},this.onTypingDone)}},{key:"typeStr",value:function(e,t){var r=this,n=arguments.length<=2||void 0===arguments[2]?function(){}:arguments[2];v.eachRndTimeout(e,function(e,n){var o=r.state.text.slice();o[t]+=e,r.setState({text:o},n)},n,this.delayGenerator.bind(this,e,t))}},{key:"render",value:function(){var e=this.props.className,t=v.extractTreeWithText(this.props.children,this.state.text);return l.default.createElement("div",{className:"Typist "+e},t,l.default.createElement(p.default,u({isDone:this.state.isDone},this.props.cursor)))}}]),t}(c.Component);t.default=y,e.exports=t.default},function(e,t){e.exports=r(0)},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function(e,t,r){for(var n=!0;n;){var o=e,a=t,u=r;i=c=s=void 0,n=!1,null===o&&(o=Function.prototype);var i=Object.getOwnPropertyDescriptor(o,a);if(void 0!==i){if("value"in i)return i.value;var s=i.get;if(void 0===s)return;return s.call(u)}var c=Object.getPrototypeOf(o);if(null===c)return;e=c,t=a,r=u,n=!0}},i=r(1),s=function(e){return e&&e.__esModule?e:{default:e}}(i);r(3);var c=function(e){function t(e){n(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state={shouldRender:this.props.show}}return o(t,e),a(t,null,[{key:"propTypes",value:{blink:i.PropTypes.bool,show:i.PropTypes.bool,element:i.PropTypes.node,hideWhenDone:i.PropTypes.bool,hideWhenDoneDelay:i.PropTypes.number,isDone:i.PropTypes.bool},enumerable:!0},{key:"defaultProps",value:{blink:!0,show:!0,element:"|",hideWhenDone:!1,hideWhenDoneDelay:1e3,isDone:!1},enumerable:!0}]),a(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;!this.props.isDone&&e.isDone&&this.props.hideWhenDone&&setTimeout(function(){return t.setState({shouldRender:!1})},this.props.hideWhenDoneDelay)}},{key:"render",value:function(){if(this.state.shouldRender){var e=this.props.blink?" Cursor--blinking":"";return s.default.createElement("span",{className:"Cursor"+e},this.props.element)}return null}}]),t}(i.Component);t.default=c,e.exports=t.default},function(e,t){},function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function o(e,t){for(var r=0,n=0;n<12;n++)r+=Math.random();return r-=6,Math.round(r*t)+e}function a(e,t){var r=arguments.length<=2||void 0===arguments[2]?function(){}:arguments[2],n=0;!function o(){if(n===e.length)return r();var a=n;n++,t(e[a],o,a)}()}function u(e,t,r,n){a(e,function(e,r,o){t(e,function(){setTimeout(r,n(e,o))})},r)}function i(e,t){var r={};for(var n in e)-1===t.indexOf(n)&&(r[n]=e[n]);return r}function s(e){for(var t=e?[e]:[],r=[];t.length>0;){var n=t.pop();if(h.default.isValidElement(n))h.default.Children.forEach(n.props.children,function(e){t.push(e)});else if(Array.isArray(n)){var o=!0,a=!1,u=void 0;try{for(var i,s=n[Symbol.iterator]();!(o=(i=s.next()).done);o=!0){var c=i.value;t.push(c)}}catch(e){a=!0,u=e}finally{try{!o&&s.return&&s.return()}finally{if(a)throw u}}}else r.unshift(n)}return r}function c(){var e=0;return function(t){var r=t.type,n=i(t.props,["children"]);return n.key="Typist-el-"+e++,h.default.createElement.bind(null,r,n)}}function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];if(t[0]){var o=c();return function e(t,r,a){if(a>=r.length)return[null,a];var u=a,i=function(t){var n=e(t,r,u),o=f(n,2),a=o[0],i=o[1];return u=i,a};if(h.default.isValidElement(t)){var s=o(t),c=h.default.Children.map(t.props.children,i)||[];return[s.apply(void 0,n(c)),u]}if(Array.isArray(t)){var c=t.map(i);return[c,u]}return[r[u],u+1]}.apply(void 0,t.concat([0]))[0]}}Object.defineProperty(t,"__esModule",{value:!0});var f=function(){function e(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&i.return&&i.return()}finally{if(o)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.gaussianRnd=o,t.asyncEach=a,t.eachRndTimeout=u,t.exclude=i,t.extractText=s,t.elementFactoryMaker=c,t.extractTreeWithText=l;var p=r(1),h=function(e){return e&&e.__esModule?e:{default:e}}(p)}])}]),[156]);