webpackJsonp([0xc19374f83753],{82:function(t,e,n){var r=n(83),o=n(49),i=function(t){return o(t)[1]},a=function(t){return o(t)[0]},u={baseFontSize:"16px",baseLineHeight:1.5,rhythmUnit:"rem",defaultRhythmBorderWidth:"1px",defaultRhythmBorderStyle:"solid",roundToNearestHalfLine:!0,minLinePadding:"2px"},c=function(t,e){var n,o=r(e.baseFontSize),i=a(o(t,"px")),u=a(e.baseLineHeightInPx),c=a(o(e.minLinePadding,"px"));return(n=e.roundToNearestHalfLine?Math.ceil(2*i/u)/2:Math.ceil(i/u))*u-i<2*c&&(n+=e.roundToNearestHalfLine?.5:1),n},l=function(t){var e=r(t.baseFontSize);return function(n,r,o){null==n&&(n=1),null==r&&(r=t.baseFontSize),null==o&&(o=0);var u=n*a(t.baseLineHeightInPx)-o+"px",c=e(u,t.rhythmUnit,r);return"px"===i(c)&&(c=Math.floor(a(c))+i(c)),parseFloat(a(c).toFixed(5))+i(c)}};t.exports=function(t){var e=JSON.parse(JSON.stringify(u)),n=Object.assign({},e,t),o=r(n.baseFontSize);return i(n.baseLineHeight)?(a(o(n.baseFontSize,"px")),n.baseLineHeightInPx=o(n.baseLineHeight,"px")):n.baseLineHeightInPx=a(n.baseFontSize)*n.baseLineHeight+"px",{rhythm:l(n),establishBaseline:function(){return function(t){return r(t.baseFontSize),{fontSize:a(t.baseFontSize)/16*100+"%",lineHeight:t.baseLineHeight.toString()}}(n)},linesForFontSize:function(t){return c(t,n)},adjustFontSizeTo:function(t,e,o){return null==e&&(e="auto"),function(t,e,n,o){null==n&&(n=o.baseFontSize),"%"===i(t)&&(t=a(o.baseFontSize)*(a(t)/100)+"px");var u=r(o.baseFontSize);t=u(t,"px",n=u(n,"px"));var f=l(o);return"auto"===e&&(e=c(t,o)),{fontSize:u(t,o.rhythmUnit,n),lineHeight:f(e,n)}}(t,e,o,n)}}}},83:function(t,e,n){var r=n(49),o=function(t){return r(t)[0]};t.exports=function(t){return null==t&&(t=t),function(e,n,i,a){null==i&&(i=t),null==a&&(a=i);var u=function(t){return r(t)[1]}(e);if(u===n)return e;var c=o(e);if("px"!==u)if("em"===u)c=o(e)*o(i);else if("rem"===u)c=o(e)*o(t);else{if("ex"!==u)return e;c=o(e)*o(i)*2}var l=c;if("px"!==n)if("em"===n)l=c/o(a);else if("rem"===n)l=c/o(t);else{if("ex"!==n)return e;l=c/o(a)/2}return parseFloat(l.toFixed(5))+n}}},109:function(t,e){function n(t){return!isNaN(parseFloat(t))&&isFinite(t)}t.exports=function(t,e,r){if("undefined"==typeof e&&(e=0),"undefined"==typeof r&&(r=!1),"cool"===e?e=237:"slate"===e?e=122:"warm"===e&&(e=69),!n(e))throw new Error("Hue is not a number");if(!n(t))throw new Error("Lightness is not a number");t>100&&(t=100),t<0&&(t=0);var o=0;if(0!==e){var i=19.92978,a=-.3651759,u=.001737214;o=i+a*t+u*Math.pow(t,2)}var c=0;return r?(c=t/100,t="100%,"):(c=(100-t)/100,t="0%,"),"hsla("+e+","+o+"%,"+t+c+")"}},111:function(t,e){"use strict";function n(t,e,s){if("string"!=typeof e){if(f){var p=l(e);p&&p!==f&&n(t,p,s)}var d=a(e);u&&(d=d.concat(u(e)));for(var h=0;h<d.length;++h){var b=d[h];if(!(r[b]||o[b]||s&&s[b])){var g=c(e,b);try{i(t,b,g)}catch(t){}}}return t}return t}var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i=Object.defineProperty,a=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,f=l&&l(Object);t.exports=n},49:function(t,e){t.exports=function(t,e){e||(e=[0,""]),t=String(t);var n=parseFloat(t,10);return e[0]=n,e[1]=t.match(/[\d.\-\+]*\s*(.*)/)[1]||"",e}},132:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.LARGER_DISPLAY_WIDTH="1600px",e.LARGE_DISPLAY_WIDTH="1280px",e.DEFAULT_WIDTH="980px",e.TABLET_WIDTH="768px",e.MOBILE_WIDTH="480px",e.LARGER_DISPLAY_MEDIA_QUERY="@media only screen and (max-width:1600px)",e.LARGE_DISPLAY_MEDIA_QUERY="@media only screen and (max-width:1280px)",e.DEFAULT_MEDIA_QUERY="@media only screen and (max-width:980px)",e.TABLET_MEDIA_QUERY="@media only screen and (max-width:768px)",e.MOBILE_MEDIA_QUERY="@media only screen and (max-width:480px)",e.MIN_LARGER_DISPLAY_MEDIA_QUERY="@media (min-width:1600px)",e.MIN_LARGE_DISPLAY_MEDIA_QUERY="@media (min-width:1280px)",e.MIN_DEFAULT_MEDIA_QUERY="@media (min-width:980px)",e.MIN_TABLET_MEDIA_QUERY="@media (min-width:768px)",e.MIN_MOBILE_MEDIA_QUERY="@media (min-width:480px)"},133:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=n(109),u=r(a),c=n(132),l=n(82),f=r(l),s={title:"Fairy Gates",baseFontSize:"20px",baseLineHeight:1.45,googleFonts:[{name:"Work Sans",styles:["600"]},{name:"Quattrocento Sans",styles:["400","400i","700"]}],headerFontFamily:["Work Sans","sans-serif"],bodyFontFamily:["Quattrocento Sans","serif"],headerColor:"hsla(0,0%,0%,0.9)",bodyColor:"hsla(0,0%,0%,0.8)",headerWeight:"600",bodyWeight:400,boldWeight:700,overrideStyles:function(t,e){var n=t.adjustFontSizeTo,r=t.scale,a=t.rhythm,l="#1ca086",s=(0,f.default)({baseFontSize:"17px",baseLineHeight:"24.65px"});return o({a:{color:l,textDecoration:"none",textShadow:".03em 0 #fff,-.03em 0 #fff,0 .03em #fff,0 -.03em #fff,.06em 0 #fff,-.06em 0 #fff,.09em 0 #fff,-.09em 0 #fff,.12em 0 #fff,-.12em 0 #fff,.15em 0 #fff,-.15em 0 #fff",backgroundImage:"linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, "+l+" 1px, "+l+" 2px, rgba(0, 0, 0, 0) 2px)"},"a:hover,a:active":{textShadow:"none",backgroundImage:"none"},"h1,h2,h3,h4,h5,h6":{marginTop:a(1.5),marginBottom:a(.5)},blockquote:i({},r(.2),{borderLeft:a(.375)+" solid "+l,color:(0,u.default)(35),paddingLeft:a(.625),fontStyle:"italic",marginLeft:0,marginRight:0}),"blockquote > :last-child":{marginBottom:0},"blockquote cite":i({},n(e.baseFontSize),{color:e.bodyColor,fontStyle:"normal",fontWeight:e.bodyWeight}),"blockquote cite:before":{content:'"— "'}},c.MOBILE_MEDIA_QUERY,{html:i({},s.establishBaseline()),blockquote:{borderLeft:a(3/16)+" solid "+l,color:(0,u.default)(41),paddingLeft:a(9/16),fontStyle:"italic",marginLeft:a(-.75),marginRight:0}})}};e.default=s},134:function(t,e){(function(e){function n(t){return!isNaN(parseFloat(t))&&isFinite(t)}function r(t,e){return t(e={exports:{}},e.exports),e.exports}function o(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function i(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function a(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function u(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError($t);var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(u.Cache||qt),n}function c(t){var e=this.__data__=new Ht(t);this.size=e.size}function l(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new qt;++e<n;)this.add(t[e])}var f,s,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,b=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,r,o=function(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),i=1;i<arguments.length;i++){for(var a in n=Object(arguments[i]))d.call(n,a)&&(o[a]=n[a]);if(p){r=p(n);for(var u=0;u<r.length;u++)h.call(n,r[u])&&(o[r[u]]=n[r[u]])}}return o},g=function(t,e){e||(e=[0,""]),t=String(t);var n=parseFloat(t,10);return e[0]=n,e[1]=t.match(/[\d.\-\+]*\s*(.*)/)[1]||"",e},y=function(t){return g(t)[0]},m=function(t){return null==t&&(t=t),function(e,n,r,o){null==r&&(r=t),null==o&&(o=r);var i=g(e)[1];if(i===n)return e;var a=y(e);if("px"!==i)if("em"===i)a=y(e)*y(r);else if("rem"===i)a=y(e)*y(t);else{if("ex"!==i)return e;a=y(e)*y(r)*2}var u=a;if("px"!==n)if("em"===n)u=a/y(o);else if("rem"===n)u=a/y(t);else{if("ex"!==n)return e;u=a/y(o)/2}return parseFloat(u.toFixed(5))+n}},v=g,_=function(t){return v(t)[1]},j=function(t){return v(t)[0]},x={baseFontSize:"16px",baseLineHeight:1.5,rhythmUnit:"rem",defaultRhythmBorderWidth:"1px",defaultRhythmBorderStyle:"solid",roundToNearestHalfLine:!0,minLinePadding:"2px"},w=function(t,e){var n,r=m(e.baseFontSize),o=j(r(t,"px")),i=j(e.baseLineHeightInPx),a=j(r(e.minLinePadding,"px"));return(n=e.roundToNearestHalfLine?Math.ceil(2*o/i)/2:Math.ceil(o/i))*i-o<2*a&&(n+=e.roundToNearestHalfLine?.5:1),n},S=function(t){var e=m(t.baseFontSize);return function(n,r,o){null==n&&(n=1),null==r&&(r=t.baseFontSize),null==o&&(o=0);var i=n*j(t.baseLineHeightInPx)-o+"px",a=e(i,t.rhythmUnit,r);return"px"===_(a)&&(a=Math.floor(j(a))+_(a)),parseFloat(j(a).toFixed(5))+_(a)}},O="[object Number]",F=Object.prototype.toString;f=function(t){return"number"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&F.call(t)==O},s={"minor second":16/15,"major second":9/8,"minor third":1.2,"major third":4/3,"diminished fourth":Math.sqrt(2),"perfect fifth":1.5,"minor sixth":1.6,golden:1.61803398875,phi:1.61803398875,"major sixth":5/3,"minor seventh":16/9,"major seventh":15/8,octave:2,"major tenth":2.5,"major eleventh":8/3,"major twelfth":3,"double octave":4};var z,L=function(t,e,r){if(void 0===e&&(e=0),void 0===r&&(r=!1),"cool"===e?e=237:"slate"===e?e=122:"warm"===e&&(e=69),!n(e))throw new Error("Hue is not a number");if(!n(t))throw new Error("Lightness is not a number");t>100&&(t=100),t<0&&(t=0);var o=0;0!==e&&(o=19.92978+-.3651759*t+.001737214*Math.pow(t,2));var i=0;return r?(i=t/100,t="100%,"):(i=(100-t)/100,t="0%,"),"hsla("+e+","+o+"%,"+t+i+")"},E="undefined"!=typeof window?window:"undefined"!=typeof e?e:"undefined"!=typeof self?self:{},k="object"==typeof E&&E&&E.Object===Object&&E,A="object"==typeof self&&self&&self.Object===Object&&self,M=k||A||Function("return this")(),P=M.Symbol,I=Object.prototype,T=I.hasOwnProperty,B=I.toString,H=P?P.toStringTag:void 0,R=function(t){var e=T.call(t,H),n=t[H];try{t[H]=void 0;var r=!0}catch(t){}var o=B.call(t);return r&&(e?t[H]=n:delete t[H]),o},D=Object.prototype.toString,N=function(t){return D.call(t)},W="[object Null]",U="[object Undefined]",C=P?P.toStringTag:void 0,Y=function(t){return null==t?void 0===t?U:W:C&&C in Object(t)?R(t):N(t)},q=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},$="[object AsyncFunction]",Q="[object Function]",G="[object GeneratorFunction]",J="[object Proxy]",V=function(t){if(!q(t))return!1;var e=Y(t);return e==Q||e==G||e==$||e==J},Z=M["__core-js_shared__"],K=(z=/[^.]+$/.exec(Z&&Z.keys&&Z.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"",X=function(t){return!!K&&K in t},tt=Function.prototype.toString,et=function(t){if(null!=t){try{return tt.call(t)}catch(t){}try{return t+""}catch(t){}}return""},nt=/^\[object .+?Constructor\]$/,rt=Function.prototype,ot=Object.prototype,it=RegExp("^"+rt.toString.call(ot.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),at=function(t){return!(!q(t)||X(t))&&(V(t)?it:nt).test(et(t))},ut=function(t,e){return null==t?void 0:t[e]},ct=function(t,e){var n=ut(t,e);return at(n)?n:void 0},lt=function(){try{var t=ct(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),ft=function(t,e,n){"__proto__"==e&&lt?lt(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n},st=function(t,e){return t===e||t!=t&&e!=e},pt=Object.prototype.hasOwnProperty,dt=function(t,e,n){var r=t[e];pt.call(t,e)&&st(r,n)&&(void 0!==n||e in t)||ft(t,e,n)},ht=Array.isArray,bt=function(t){return null!=t&&"object"==typeof t},gt="[object Symbol]",yt=function(t){return"symbol"==typeof t||bt(t)&&Y(t)==gt},mt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,vt=/^\w*$/,_t=function(t,e){if(ht(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!yt(t))||vt.test(t)||!mt.test(t)||null!=e&&t in Object(e)},jt=ct(Object,"create"),xt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},wt="__lodash_hash_undefined__",St=Object.prototype.hasOwnProperty,Ot=function(t){var e=this.__data__;if(jt){var n=e[t];return n===wt?void 0:n}return St.call(e,t)?e[t]:void 0},Ft=Object.prototype.hasOwnProperty,zt=function(t){var e=this.__data__;return jt?void 0!==e[t]:Ft.call(e,t)},Lt="__lodash_hash_undefined__",Et=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=jt&&void 0===e?Lt:e,this};o.prototype.clear=function(){this.__data__=jt?jt(null):{},this.size=0},o.prototype.delete=xt,o.prototype.get=Ot,o.prototype.has=zt,o.prototype.set=Et;var kt=o,At=function(t,e){for(var n=t.length;n--;)if(st(t[n][0],e))return n;return-1},Mt=Array.prototype.splice,Pt=function(t){var e=this.__data__,n=At(e,t);return!(n<0||(n==e.length-1?e.pop():Mt.call(e,n,1),--this.size,0))},It=function(t){var e=this.__data__,n=At(e,t);return n<0?void 0:e[n][1]},Tt=function(t){return At(this.__data__,t)>-1},Bt=function(t,e){var n=this.__data__,r=At(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};i.prototype.clear=function(){this.__data__=[],this.size=0},i.prototype.delete=Pt,i.prototype.get=It,i.prototype.has=Tt,i.prototype.set=Bt;var Ht=i,Rt=ct(M,"Map"),Dt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t},Nt=function(t,e){var n=t.__data__;return Dt(e)?n["string"==typeof e?"string":"hash"]:n.map},Wt=function(t){var e=Nt(this,t).delete(t);return this.size-=e?1:0,e},Ut=function(t){return Nt(this,t).get(t)},Ct=function(t){return Nt(this,t).has(t)},Yt=function(t,e){var n=Nt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};a.prototype.clear=function(){this.size=0,this.__data__={hash:new kt,map:new(Rt||Ht),string:new kt}},a.prototype.delete=Wt,a.prototype.get=Ut,a.prototype.has=Ct,a.prototype.set=Yt;var qt=a,$t="Expected a function";u.Cache=qt;var Qt=u,Gt=500,Jt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Vt=/\\(\\)?/g,Zt=function(t){var e=Qt(t,function(t){return n.size===Gt&&n.clear(),t}),n=e.cache;return e}(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Jt,function(t,n,r,o){e.push(r?o.replace(Vt,"$1"):n||t)}),e}),Kt=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o},Xt=1/0,te=P?P.prototype:void 0,ee=te?te.toString:void 0,ne=function t(e){if("string"==typeof e)return e;if(ht(e))return Kt(e,t)+"";if(yt(e))return ee?ee.call(e):"";var n=e+"";return"0"==n&&1/e==-Xt?"-0":n},re=function(t){return null==t?"":ne(t)},oe=function(t,e){return ht(t)?t:_t(t,e)?[t]:Zt(re(t))},ie=9007199254740991,ae=/^(?:0|[1-9]\d*)$/,ue=function(t,e){var n=typeof t;return!!(e=null==e?ie:e)&&("number"==n||"symbol"!=n&&ae.test(t))&&t>-1&&t%1==0&&t<e},ce=1/0,le=function(t){if("string"==typeof t||yt(t))return t;var e=t+"";return"0"==e&&1/t==-ce?"-0":e},fe=function(t,e,n,r){if(!q(t))return t;for(var o=-1,i=(e=oe(e,t)).length,a=i-1,u=t;null!=u&&++o<i;){var c=le(e[o]),l=n;if(o!=a){var f=u[c];void 0===(l=r?r(f,c,u):void 0)&&(l=q(f)?f:ue(e[o+1])?[]:{})}dt(u,c,l),u=u[c]}return t},se=function(t,e,n){return null==t?t:fe(t,e,n)},pe=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t},de=function(t){return function(e,n,r){for(var o=-1,i=Object(e),a=r(e),u=a.length;u--;){var c=a[t?u:++o];if(!1===n(i[c],c,i))break}return e}}(),he=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r},be="[object Arguments]",ge=function(t){return bt(t)&&Y(t)==be},ye=Object.prototype,me=ye.hasOwnProperty,ve=ye.propertyIsEnumerable,_e=ge(function(){return arguments}())?ge:function(t){return bt(t)&&me.call(t,"callee")&&!ve.call(t,"callee")},je=function(){return!1},xe=r(function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n?M.Buffer:void 0;t.exports=(o?o.isBuffer:void 0)||je}),we=9007199254740991,Se=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=we},Oe={};Oe["[object Float32Array]"]=Oe["[object Float64Array]"]=Oe["[object Int8Array]"]=Oe["[object Int16Array]"]=Oe["[object Int32Array]"]=Oe["[object Uint8Array]"]=Oe["[object Uint8ClampedArray]"]=Oe["[object Uint16Array]"]=Oe["[object Uint32Array]"]=!0,Oe["[object Arguments]"]=Oe["[object Array]"]=Oe["[object ArrayBuffer]"]=Oe["[object Boolean]"]=Oe["[object DataView]"]=Oe["[object Date]"]=Oe["[object Error]"]=Oe["[object Function]"]=Oe["[object Map]"]=Oe["[object Number]"]=Oe["[object Object]"]=Oe["[object RegExp]"]=Oe["[object Set]"]=Oe["[object String]"]=Oe["[object WeakMap]"]=!1;var Fe=function(t){return bt(t)&&Se(t.length)&&!!Oe[Y(t)]},ze=function(t){return function(e){return t(e)}},Le=r(function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n&&k.process,i=function(){try{var t=r&&r.require&&r.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=i}),Ee=Le&&Le.isTypedArray,ke=Ee?ze(Ee):Fe,Ae=Object.prototype.hasOwnProperty,Me=function(t,e){var n=ht(t),r=!n&&_e(t),o=!n&&!r&&xe(t),i=!n&&!r&&!o&&ke(t),a=n||r||o||i,u=a?he(t.length,String):[],c=u.length;for(var l in t)!e&&!Ae.call(t,l)||a&&("length"==l||o&&("offset"==l||"parent"==l)||i&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||ue(l,c))||u.push(l);return u},Pe=Object.prototype,Ie=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Pe)},Te=function(t,e){return function(n){return t(e(n))}},Be=Te(Object.keys,Object),He=Object.prototype.hasOwnProperty,Re=function(t){if(!Ie(t))return Be(t);var e=[];for(var n in Object(t))He.call(t,n)&&"constructor"!=n&&e.push(n);return e},De=function(t){return null!=t&&Se(t.length)&&!V(t)},Ne=function(t){return De(t)?Me(t):Re(t)},We=function(t,e){return function(n,r){if(null==n)return n;if(!De(n))return t(n,r);for(var o=n.length,i=e?o:-1,a=Object(n);(e?i--:++i<o)&&!1!==r(a[i],i,a););return n}}(function(t,e){return t&&de(t,e,Ne)}),Ue=function(t){return t},Ce=function(t){return"function"==typeof t?t:Ue},Ye=function(t,e){return(ht(t)?pe:We)(t,Ce(e))},qe="[object Number]",$e=function(t){return"number"==typeof t||bt(t)&&Y(t)==qe},Qe="[object String]",Ge=function(t){return"string"==typeof t||!ht(t)&&bt(t)&&Y(t)==Qe},Je=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},Ve=function(t){return this.__data__.get(t)},Ze=function(t){return this.__data__.has(t)},Ke=200,Xe=function(t,e){var n=this.__data__;if(n instanceof Ht){var r=n.__data__;if(!Rt||r.length<Ke-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new qt(r)}return n.set(t,e),this.size=n.size,this};c.prototype.clear=function(){this.__data__=new Ht,this.size=0},c.prototype.delete=Je,c.prototype.get=Ve,c.prototype.has=Ze,c.prototype.set=Xe;var tn=c,en=function(t,e,n){(void 0===n||st(t[e],n))&&(void 0!==n||e in t)||ft(t,e,n)},nn=r(function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n?M.Buffer:void 0,i=o?o.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var n=t.length,r=i?i(n):new t.constructor(n);return t.copy(r),r}}),rn=M.Uint8Array,on=function(t){var e=new t.constructor(t.byteLength);return new rn(e).set(new rn(t)),e},an=function(t,e){var n=e?on(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)},un=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e},cn=Object.create,ln=function(){function t(){}return function(e){if(!q(e))return{};if(cn)return cn(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}(),fn=Te(Object.getPrototypeOf,Object),sn=function(t){return"function"!=typeof t.constructor||Ie(t)?{}:ln(fn(t))},pn=function(t){return bt(t)&&De(t)},dn="[object Object]",hn=Function.prototype,bn=Object.prototype,gn=hn.toString,yn=bn.hasOwnProperty,mn=gn.call(Object),vn=function(t){if(!bt(t)||Y(t)!=dn)return!1;var e=fn(t);if(null===e)return!0;var n=yn.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&gn.call(n)==mn},_n=function(t,e){return"__proto__"==e?void 0:t[e]},jn=function(t,e,n,r){var o=!n;n||(n={});for(var i=-1,a=e.length;++i<a;){var u=e[i],c=r?r(n[u],t[u],u,n,t):void 0;void 0===c&&(c=t[u]),o?ft(n,u,c):dt(n,u,c)}return n},xn=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e},wn=Object.prototype.hasOwnProperty,Sn=function(t){if(!q(t))return xn(t);var e=Ie(t),n=[];for(var r in t)("constructor"!=r||!e&&wn.call(t,r))&&n.push(r);return n},On=function(t){return De(t)?Me(t,!0):Sn(t)},Fn=function(t){return jn(t,On(t))},zn=function(t,e,n,r,o,i,a){var u=_n(t,n),c=_n(e,n),l=a.get(c);if(l)en(t,n,l);else{var f=i?i(u,c,n+"",t,e,a):void 0,s=void 0===f;if(s){var p=ht(c),d=!p&&xe(c),h=!p&&!d&&ke(c);f=c,p||d||h?ht(u)?f=u:pn(u)?f=un(u):d?(s=!1,f=nn(c,!0)):h?(s=!1,f=an(c,!0)):f=[]:vn(c)||_e(c)?(f=u,_e(u)?f=Fn(u):(!q(u)||r&&V(u))&&(f=sn(c))):s=!1}s&&(a.set(c,f),o(f,c,r,i,a),a.delete(c)),en(t,n,f)}},Ln=function t(e,n,r,o,i){e!==n&&de(n,function(a,u){if(q(a))i||(i=new tn),zn(e,n,u,r,t,o,i);else{var c=o?o(_n(e,u),a,u+"",e,n,i):void 0;void 0===c&&(c=a),en(e,u,c)}},On)},En=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)},kn=Math.max,An=function(t,e,n){return e=kn(void 0===e?t.length-1:e,0),function(){for(var r=arguments,o=-1,i=kn(r.length-e,0),a=Array(i);++o<i;)a[o]=r[e+o];o=-1;for(var u=Array(e+1);++o<e;)u[o]=r[o];return u[e]=n(a),En(t,this,u)}},Mn=function(t){return function(){return t}},Pn=800,In=16,Tn=Date.now,Bn=function(t){var e=0,n=0;return function(){var r=Tn(),o=In-(r-n);if(n=r,o>0){if(++e>=Pn)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(lt?function(t,e){return lt(t,"toString",{configurable:!0,enumerable:!1,value:Mn(e),writable:!0})}:Ue),Hn=function(t,e){return Bn(An(t,e,Ue),t+"")},Rn=function(t,e,n){if(!q(n))return!1;var r=typeof e;return!!("number"==r?De(n)&&ue(e,n.length):"string"==r&&e in n)&&st(n[e],t)},Dn=function(t){return Hn(function(e,n){var r=-1,o=n.length,i=o>1?n[o-1]:void 0,a=o>2?n[2]:void 0;for(i=t.length>3&&"function"==typeof i?(o--,i):void 0,a&&Rn(n[0],n[1],a)&&(i=o<3?void 0:i,o=1),e=Object(e);++r<o;){var u=n[r];u&&t(e,u,r,i)}return e})}(function(t,e,n){Ln(t,e,n)}),Nn=function(t,e,n,r){var o=-1,i=null==t?0:t.length;for(r&&i&&(n=t[++o]);++o<i;)n=e(n,t[o],o,t);return n},Wn="__lodash_hash_undefined__",Un=function(t){return this.__data__.has(t)};l.prototype.add=l.prototype.push=function(t){return this.__data__.set(t,Wn),this},l.prototype.has=Un;var Cn=l,Yn=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1},qn=function(t,e){return t.has(e)},$n=1,Qn=2,Gn=function(t,e,n,r,o,i){var a=n&$n,u=t.length,c=e.length;if(u!=c&&!(a&&c>u))return!1;var l=i.get(t);if(l&&i.get(e))return l==e;var f=-1,s=!0,p=n&Qn?new Cn:void 0;for(i.set(t,e),i.set(e,t);++f<u;){var d=t[f],h=e[f];if(r)var b=a?r(h,d,f,e,t,i):r(d,h,f,t,e,i);if(void 0!==b){if(b)continue;s=!1;break}if(p){if(!Yn(e,function(t,e){if(!qn(p,e)&&(d===t||o(d,t,n,r,i)))return p.push(e)})){s=!1;break}}else if(d!==h&&!o(d,h,n,r,i)){s=!1;break}}return i.delete(t),i.delete(e),s},Jn=function(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n},Vn=function(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n},Zn=1,Kn=2,Xn="[object Boolean]",tr="[object Date]",er="[object Error]",nr="[object Map]",rr="[object Number]",or="[object RegExp]",ir="[object Set]",ar="[object String]",ur="[object Symbol]",cr="[object ArrayBuffer]",lr="[object DataView]",fr=P?P.prototype:void 0,sr=fr?fr.valueOf:void 0,pr=function(t,e,n,r,o,i,a){switch(n){case lr:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case cr:return!(t.byteLength!=e.byteLength||!i(new rn(t),new rn(e)));case Xn:case tr:case rr:return st(+t,+e);case er:return t.name==e.name&&t.message==e.message;case or:case ar:return t==e+"";case nr:var u=Jn;case ir:if(u||(u=Vn),t.size!=e.size&&!(r&Zn))return!1;var c=a.get(t);if(c)return c==e;r|=Kn,a.set(t,e);var l=Gn(u(t),u(e),r,o,i,a);return a.delete(t),l;case ur:if(sr)return sr.call(t)==sr.call(e)}return!1},dr=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t},hr=function(t,e,n){var r=e(t);return ht(t)?r:dr(r,n(t))},br=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var a=t[n];e(a,n,t)&&(i[o++]=a)}return i},gr=Object.prototype.propertyIsEnumerable,yr=Object.getOwnPropertySymbols,mr=yr?function(t){return null==t?[]:(t=Object(t),br(yr(t),function(e){return gr.call(t,e)}))}:function(){return[]},vr=function(t){return hr(t,Ne,mr)},_r=1,jr=Object.prototype.hasOwnProperty,xr=function(t,e,n,r,o,i){var a=n&_r,u=vr(t),c=u.length;if(c!=vr(e).length&&!a)return!1;for(var l=c;l--;){var f=u[l];if(!(a?f in e:jr.call(e,f)))return!1}var s=i.get(t);if(s&&i.get(e))return s==e;var p=!0;i.set(t,e),i.set(e,t);for(var d=a;++l<c;){var h=t[f=u[l]],b=e[f];if(r)var g=a?r(b,h,f,e,t,i):r(h,b,f,t,e,i);if(!(void 0===g?h===b||o(h,b,n,r,i):g)){p=!1;break}d||(d="constructor"==f)}if(p&&!d){var y=t.constructor,m=e.constructor;y!=m&&"constructor"in t&&"constructor"in e&&!("function"==typeof y&&y instanceof y&&"function"==typeof m&&m instanceof m)&&(p=!1)}return i.delete(t),i.delete(e),p},wr=ct(M,"DataView"),Sr=ct(M,"Promise"),Or=ct(M,"Set"),Fr=ct(M,"WeakMap"),zr=et(wr),Lr=et(Rt),Er=et(Sr),kr=et(Or),Ar=et(Fr),Mr=Y;(wr&&"[object DataView]"!=Mr(new wr(new ArrayBuffer(1)))||Rt&&"[object Map]"!=Mr(new Rt)||Sr&&"[object Promise]"!=Mr(Sr.resolve())||Or&&"[object Set]"!=Mr(new Or)||Fr&&"[object WeakMap]"!=Mr(new Fr))&&(Mr=function(t){var e=Y(t),n="[object Object]"==e?t.constructor:void 0,r=n?et(n):"";if(r)switch(r){case zr:return"[object DataView]";case Lr:return"[object Map]";case Er:return"[object Promise]";case kr:return"[object Set]";case Ar:return"[object WeakMap]"}return e});var Pr,Ir=Mr,Tr=1,Br="[object Arguments]",Hr="[object Array]",Rr="[object Object]",Dr=Object.prototype.hasOwnProperty,Nr=function(t,e,n,r,o,i){var a=ht(t),u=ht(e),c=a?Hr:Ir(t),l=u?Hr:Ir(e),f=(c=c==Br?Rr:c)==Rr,s=(l=l==Br?Rr:l)==Rr,p=c==l;if(p&&xe(t)){if(!xe(e))return!1;a=!0,f=!1}if(p&&!f)return i||(i=new tn),a||ke(t)?Gn(t,e,n,r,o,i):pr(t,e,c,n,r,o,i);if(!(n&Tr)){var d=f&&Dr.call(t,"__wrapped__"),h=s&&Dr.call(e,"__wrapped__");if(d||h){var b=d?t.value():t,g=h?e.value():e;return i||(i=new tn),o(b,g,n,r,i)}}return!!p&&(i||(i=new tn),xr(t,e,n,r,o,i))},Wr=function t(e,n,r,o,i){return e===n||(null==e||null==n||!bt(e)&&!bt(n)?e!=e&&n!=n:Nr(e,n,r,o,t,i))},Ur=1,Cr=2,Yr=function(t,e,n,r){var o=n.length,i=o,a=!r;if(null==t)return!i;for(t=Object(t);o--;){var u=n[o];if(a&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<i;){var c=(u=n[o])[0],l=t[c],f=u[1];if(a&&u[2]){if(void 0===l&&!(c in t))return!1}else{var s=new tn;if(r)var p=r(l,f,c,t,e,s);if(!(void 0===p?Wr(f,l,Ur|Cr,r,s):p))return!1}}return!0},qr=function(t){return t==t&&!q(t)},$r=function(t){for(var e=Ne(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,qr(o)]}return e},Qr=function(t,e){return function(n){return null!=n&&n[t]===e&&(void 0!==e||t in Object(n))}},Gr=function(t){var e=$r(t);return 1==e.length&&e[0][2]?Qr(e[0][0],e[0][1]):function(n){return n===t||Yr(n,t,e)}},Jr=function(t,e){for(var n=0,r=(e=oe(e,t)).length;null!=t&&n<r;)t=t[le(e[n++])];return n&&n==r?t:void 0},Vr=function(t,e,n){var r=null==t?void 0:Jr(t,e);return void 0===r?n:r},Zr=function(t,e){return null!=t&&e in Object(t)},Kr=function(t,e,n){for(var r=-1,o=(e=oe(e,t)).length,i=!1;++r<o;){var a=le(e[r]);if(!(i=null!=t&&n(t,a)))break;t=t[a]}return i||++r!=o?i:!!(o=null==t?0:t.length)&&Se(o)&&ue(a,o)&&(ht(t)||_e(t))},Xr=function(t,e){return null!=t&&Kr(t,e,Zr)},to=1,eo=2,no=function(t,e){return _t(t)&&qr(e)?Qr(le(t),e):function(n){var r=Vr(n,t);return void 0===r&&r===e?Xr(n,t):Wr(e,r,to|eo)}},ro=function(t){return function(e){return null==e?void 0:e[t]}},oo=function(t){return function(e){return Jr(e,t)}},io=function(t){return _t(t)?ro(le(t)):oo(t)},ao=function(t){return"function"==typeof t?t:null==t?Ue:"object"==typeof t?ht(t)?no(t[0],t[1]):Gr(t):io(t)},uo=function(t,e,n,r,o){return o(t,function(t,o,i){n=r?(r=!1,t):e(n,t,o,i)}),n},co=function(t,e,n){var r=ht(t)?Nn:uo,o=arguments.length<3;return r(t,ao(e,4),n,o,We)},lo=function(t,e,n){var r;return void 0===t&&(t={}),r=ht(e)?e:[e],Ye(r,function(e){Ye(n,function(n,r){se(t,e+"."+r,n)})}),t},fo=["inherit","default","serif","sans-serif","monospace","fantasy","cursive","-apple-system"],so=function(t){return-1!==fo.indexOf(t)?t:"'"+t+"'"},po=r(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default="html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,optgroup,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}"}),ho=(Pr=po)&&Pr.__esModule&&Object.prototype.hasOwnProperty.call(Pr,"default")?Pr.default:Pr,bo=function(t){return co(t,function(t,e,n){return t+=n+"{",Ye(e,function(e,n){if(q(e)){var r={};r[n]=e,t+=bo(r)}else{var o=function(t,e){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(/([a-z\d])([A-Z])/g,"$1"+(e=void 0===e?"_":e)+"$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g,"$1"+e+"$2").toLowerCase()}(n,"-")+":"+e+";";["Webkit","ms","Moz","O"].forEach(function(t){n.slice(0,t.length)===t&&(o="-"+o)}),t+=o}}),t+="}"},"")};t.exports=function(t){var e,n,r,o,i=b({},{baseFontSize:"16px",baseLineHeight:1.45,headerLineHeight:1.1,scaleRatio:2,googleFonts:[],headerFontFamily:["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","sans-serif"],bodyFontFamily:["georgia","serif"],
headerColor:"inherit",bodyColor:"hsla(0,0%,0%,0.8)",headerWeight:"bold",bodyWeight:"normal",boldWeight:"bold",includeNormalize:!0,blockMarginBottom:1},t),a=(e=i,n=JSON.parse(JSON.stringify(x)),r=Object.assign({},n,e),o=m(r.baseFontSize),_(r.baseLineHeight)?(j(o(r.baseFontSize,"px")),r.baseLineHeightInPx=o(r.baseLineHeight,"px")):r.baseLineHeightInPx=j(r.baseFontSize)*r.baseLineHeight+"px",{rhythm:S(r),establishBaseline:function(){return m((t=r).baseFontSize),{fontSize:j(t.baseFontSize)/16*100+"%",lineHeight:t.baseLineHeight.toString()};var t},linesForFontSize:function(t){return w(t,r)},adjustFontSizeTo:function(t,e,n){return null==e&&(e="auto"),function(t,e,n,r){null==n&&(n=r.baseFontSize),"%"===_(t)&&(t=j(r.baseFontSize)*(j(t)/100)+"px");var o=m(r.baseFontSize);t=o(t,"px",n=o(n,"px"));var i=S(r);return"auto"===e&&(e=w(t,r)),{fontSize:o(t,r.rhythmUnit,n),lineHeight:i(e,n)}}(t,e,n,r)}});return a.scale=function(t){var e=parseInt(i.baseFontSize,10),n=function(t,e){var n;return null==t&&(t=0),null==e&&(e="golden"),n=f(e)?e:null!=s[e]?s[e]:s.golden,Math.pow(n,t)}(t,i.scaleRatio)*e+"px";return a.adjustFontSizeTo(n)},Object.assign({},{options:i},a,{createStyles:function(){return this.toString()},toJSON:function(){return function(t,e){var n={},r=t.establishBaseline();n=lo(n,"html",{font:r.fontSize+"/"+r.lineHeight+" "+e.bodyFontFamily.map(so).join(","),boxSizing:"border-box",overflowY:"scroll"}),n=lo(n,["*","*:before","*:after"],{boxSizing:"inherit"}),n=lo(n,"body",{color:e.bodyColor,fontFamily:e.bodyFontFamily.map(so).join(","),fontWeight:e.bodyWeight,wordWrap:"break-word",fontKerning:"normal",MozFontFeatureSettings:'"kern", "liga", "clig", "calt"',msFontFeatureSettings:'"kern", "liga", "clig", "calt"',WebkitFontFeatureSettings:'"kern", "liga", "clig", "calt"',fontFeatureSettings:'"kern", "liga", "clig", "calt"'}),n=lo(n,"img",{maxWidth:"100%"});var o="";o=$e(e.blockMarginBottom)?t.rhythm(e.blockMarginBottom):Ge(e.blockMarginBottom)?e.blockMarginBottom:t.rhythm(1),n=lo(n,["h1","h2","h3","h4","h5","h6","hgroup","ul","ol","dl","dd","p","figure","pre","table","fieldset","blockquote","form","noscript","iframe","img","hr","address"],{marginLeft:0,marginRight:0,marginTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,marginBottom:o}),n=lo(n,"blockquote",{marginRight:t.rhythm(1),marginBottom:o,marginLeft:t.rhythm(1)}),n=lo(n,["b","strong","dt","th"],{fontWeight:e.boldWeight}),n=lo(n,"hr",{background:L(80),border:"none",height:"1px",marginBottom:"calc("+o+" - 1px)"}),n=lo(n,["ol","ul"],{listStylePosition:"outside",listStyleImage:"none",marginLeft:t.rhythm(1)}),n=lo(n,"li",{marginBottom:"calc("+o+" / 2)"}),n=lo(n,["ol li","ul li"],{paddingLeft:0}),n=lo(n,["li > ol","li > ul"],{marginLeft:t.rhythm(1),marginBottom:"calc("+o+" / 2)",marginTop:"calc("+o+" / 2)"}),n=lo(n,["blockquote *:last-child","li *:last-child","p *:last-child"],{marginBottom:0}),n=lo(n,["li > p"],{marginBottom:"calc("+o+" / 2)"}),n=lo(n,["code","kbd","pre","samp"],Object.assign({},t.adjustFontSizeTo("85%"))),(n=lo(n,["abbr","acronym"],{borderBottom:"1px dotted "+L(50),cursor:"help"}))["abbr[title]"]={borderBottom:"1px dotted "+L(50),cursor:"help",textDecoration:"none"},n=lo(n,["table"],Object.assign({},t.adjustFontSizeTo(e.baseFontSize),{borderCollapse:"collapse",width:"100%"})),n=lo(n,["thead"],{textAlign:"left"}),n=lo(n,["td,th"],{textAlign:"left",borderBottom:"1px solid "+L(88),fontFeatureSettings:'"tnum"',MozFontFeatureSettings:'"tnum"',msFontFeatureSettings:'"tnum"',WebkitFontFeatureSettings:'"tnum"',paddingLeft:t.rhythm(2/3),paddingRight:t.rhythm(2/3),paddingTop:t.rhythm(.5),paddingBottom:"calc("+t.rhythm(.5)+" - 1px)"}),n=lo(n,"th:first-child,td:first-child",{paddingLeft:0}),n=lo(n,"th:last-child,td:last-child",{paddingRight:0}),n=lo(n,["h1","h2","h3","h4","h5","h6"],{color:e.headerColor,fontFamily:e.headerFontFamily.map(so).join(","),fontWeight:e.headerWeight,textRendering:"optimizeLegibility"});var i=t.scale(1),a=t.scale(.6),u=t.scale(.4),c=t.scale(0),l=t.scale(-.2),f=t.scale(-.3);return Ye([i,a,u,c,l,f],function(t,r){n=se(n,"h"+(r+1)+".fontSize",t.fontSize),n=se(n,"h"+(r+1)+".lineHeight",e.headerLineHeight)}),ht(e.plugins)&&(n=co(e.plugins,function(n,r){return Dn(n,r(t,e,n))},n)),e.overrideStyles&&V(e.overrideStyles)&&(n=Dn(n,e.overrideStyles(t,e,n))),e.overrideThemeStyles&&V(e.overrideThemeStyles)&&(n=Dn(n,e.overrideThemeStyles(t,e,n))),n}(a,i)},toString:function(){return function(t,e,n){var r=bo(n);return e.includeNormalize&&(r=""+ho+r),r}(0,i,this.toJSON())},injectStyles:function(){if("undefined"!=typeof document)if(document.getElementById("typography.js"))document.getElementById("typography.js").innerHTML=this.toString();else{var t=document.createElement("style");t.id="typography.js",t.innerHTML=this.toString(),document.head.appendChild(t)}}})}}).call(e,function(){return this}())},219:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.query=void 0;var o=n(2),i=r(o),a=(n(79),n(47)),u=r(a);e.default=function(t){var e=t.data;return console.log(e),i.default.createElement("div",null,i.default.createElement("h1",null,"Blog"),i.default.createElement("h4",null,e.allMarkdownRemark.totalCount," Posts"),e.allMarkdownRemark.edges.map(function(t){var e=t.node;return i.default.createElement("div",{key:e.id},i.default.createElement(u.default,{to:e.fields.slug,css:{textDecoration:"none",color:"inherit"}},i.default.createElement("h3",{style:{marginBottom:"0"}},e.frontmatter.title," ",i.default.createElement("span",null,"— ",e.frontmatter.date))),i.default.createElement("p",null,e.excerpt))}).reverse())};e.query="** extracted graphql fragment **"},79:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(134),i=r(o),a=n(133),u=r(a),c=new i.default(u.default);e.default=c,t.exports=e.default}});
//# sourceMappingURL=component---src-pages-blog-js-569ddb81758405df2452.js.map