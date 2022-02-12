/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */var xr=Object.freeze({});function ue(t){return t==null}function C(t){return t!=null}function Ve(t){return t===!0}function _x(t){return t===!1}function Ua(t){return typeof t=="string"||typeof t=="number"||typeof t=="symbol"||typeof t=="boolean"}function Pt(t){return t!==null&&typeof t=="object"}var Tv=Object.prototype.toString;function Xt(t){return Tv.call(t)==="[object Object]"}function Ex(t){return Tv.call(t)==="[object RegExp]"}function US(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function zd(t){return C(t)&&typeof t.then=="function"&&typeof t.catch=="function"}function Ix(t){return t==null?"":Array.isArray(t)||Xt(t)&&t.toString===Tv?JSON.stringify(t,null,2):String(t)}function ia(t){var e=parseFloat(t);return isNaN(e)?t:e}function yr(t,e){for(var r=Object.create(null),n=t.split(","),i=0;i<n.length;i++)r[n[i]]=!0;return e?function(s){return r[s.toLowerCase()]}:function(s){return r[s]}}yr("slot,component",!0);var Sx=yr("key,ref,slot,slot-scope,is");function nn(t,e){if(t.length){var r=t.indexOf(e);if(r>-1)return t.splice(r,1)}}var Tx=Object.prototype.hasOwnProperty;function Nt(t,e){return Tx.call(t,e)}function $i(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var Ax=/-(\w)/g,hi=$i(function(t){return t.replace(Ax,function(e,r){return r?r.toUpperCase():""})}),Ox=$i(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),Cx=/\B([A-Z])/g,ja=$i(function(t){return t.replace(Cx,"-$1").toLowerCase()});function Rx(t,e){function r(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return r._length=t.length,r}function $x(t,e){return t.bind(e)}var kx=Function.prototype.bind?$x:Rx;function Gd(t,e){e=e||0;for(var r=t.length-e,n=new Array(r);r--;)n[r]=t[r+e];return n}function Oe(t,e){for(var r in e)t[r]=e[r];return t}function jS(t){for(var e={},r=0;r<t.length;r++)t[r]&&Oe(e,t[r]);return e}function jt(t,e,r){}var Ac=function(t,e,r){return!1},BS=function(t){return t};function fi(t,e){if(t===e)return!0;var r=Pt(t),n=Pt(e);if(r&&n)try{var i=Array.isArray(t),s=Array.isArray(e);if(i&&s)return t.length===e.length&&t.every(function(c,u){return fi(c,e[u])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(!i&&!s){var o=Object.keys(t),a=Object.keys(e);return o.length===a.length&&o.every(function(c){return fi(t[c],e[c])})}else return!1}catch{return!1}else return!r&&!n?String(t)===String(e):!1}function VS(t,e){for(var r=0;r<t.length;r++)if(fi(t[r],e))return r;return-1}function Mu(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var uw="data-server-rendered",jl=["component","directive","filter"],qS=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],ir={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:Ac,isReservedAttr:Ac,isUnknownElement:Ac,getTagNamespace:jt,parsePlatformTagName:BS,mustUseProp:Ac,async:!0,_lifecycleHooks:qS},xx=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function Nx(t){var e=(t+"").charCodeAt(0);return e===36||e===95}function Es(t,e,r,n){Object.defineProperty(t,e,{value:r,enumerable:!!n,writable:!0,configurable:!0})}var Px=new RegExp("[^"+xx.source+".$_\\d]");function Dx(t){if(!Px.test(t)){var e=t.split(".");return function(r){for(var n=0;n<e.length;n++){if(!r)return;r=r[e[n]]}return r}}}var Lx="__proto__"in{},Jt=typeof window!="undefined",Av=typeof WXEnvironment!="undefined"&&!!WXEnvironment.platform,WS=Av&&WXEnvironment.platform.toLowerCase(),Tt=Jt&&window.navigator.userAgent.toLowerCase(),eo=Tt&&/msie|trident/.test(Tt),to=Tt&&Tt.indexOf("msie 9.0")>0,Ov=Tt&&Tt.indexOf("edge/")>0;Tt&&Tt.indexOf("android")>0;var Mx=Tt&&/iphone|ipad|ipod|ios/.test(Tt)||WS==="ios";Tt&&/chrome\/\d+/.test(Tt);Tt&&/phantomjs/.test(Tt);var lw=Tt&&Tt.match(/firefox\/(\d+)/),Kd={}.watch,zS=!1;if(Jt)try{var hw={};Object.defineProperty(hw,"passive",{get:function(){zS=!0}}),window.addEventListener("test-passive",null,hw)}catch{}var Oc,Bl=function(){return Oc===void 0&&(!Jt&&!Av&&typeof global!="undefined"?Oc=global.process&&global.process.env.VUE_ENV==="server":Oc=!1),Oc},Fu=Jt&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function Is(t){return typeof t=="function"&&/native code/.test(t.toString())}var Vl=typeof Symbol!="undefined"&&Is(Symbol)&&typeof Reflect!="undefined"&&Is(Reflect.ownKeys),sa;typeof Set!="undefined"&&Is(Set)?sa=Set:sa=function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(r){return this.set[r]===!0},t.prototype.add=function(r){this.set[r]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var Fx=jt,Ux=0,Ht=function(){this.id=Ux++,this.subs=[]};Ht.prototype.addSub=function(e){this.subs.push(e)};Ht.prototype.removeSub=function(e){nn(this.subs,e)};Ht.prototype.depend=function(){Ht.target&&Ht.target.addDep(this)};Ht.prototype.notify=function(){for(var e=this.subs.slice(),r=0,n=e.length;r<n;r++)e[r].update()};Ht.target=null;var fu=[];function Ba(t){fu.push(t),Ht.target=t}function Va(){fu.pop(),Ht.target=fu[fu.length-1]}var Bt=function(e,r,n,i,s,o,a,c){this.tag=e,this.data=r,this.children=n,this.text=i,this.elm=s,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=r&&r.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=c,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},GS={child:{configurable:!0}};GS.child.get=function(){return this.componentInstance};Object.defineProperties(Bt.prototype,GS);var ei=function(t){t===void 0&&(t="");var e=new Bt;return e.text=t,e.isComment=!0,e};function vs(t){return new Bt(void 0,void 0,void 0,String(t))}function Hd(t){var e=new Bt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var KS=Array.prototype,Uu=Object.create(KS),jx=["push","pop","shift","unshift","splice","sort","reverse"];jx.forEach(function(t){var e=KS[t];Es(Uu,t,function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var s=e.apply(this,n),o=this.__ob__,a;switch(t){case"push":case"unshift":a=n;break;case"splice":a=n.slice(2);break}return a&&o.observeArray(a),o.dep.notify(),s})});var Bx=Object.getOwnPropertyNames(Uu),Cv=!0;function Cn(t){Cv=t}var ju=function(e){this.value=e,this.dep=new Ht,this.vmCount=0,Es(e,"__ob__",this),Array.isArray(e)?(Lx?Vx(e,Uu):qx(e,Uu,Bx),this.observeArray(e)):this.walk(e)};ju.prototype.walk=function(e){for(var r=Object.keys(e),n=0;n<r.length;n++)pi(e,r[n])};ju.prototype.observeArray=function(e){for(var r=0,n=e.length;r<n;r++)di(e[r])};function Vx(t,e){t.__proto__=e}function qx(t,e,r){for(var n=0,i=r.length;n<i;n++){var s=r[n];Es(t,s,e[s])}}function di(t,e){if(!(!Pt(t)||t instanceof Bt)){var r;return Nt(t,"__ob__")&&t.__ob__ instanceof ju?r=t.__ob__:Cv&&!Bl()&&(Array.isArray(t)||Xt(t))&&Object.isExtensible(t)&&!t._isVue&&(r=new ju(t)),e&&r&&r.vmCount++,r}}function pi(t,e,r,n,i){var s=new Ht,o=Object.getOwnPropertyDescriptor(t,e);if(!(o&&o.configurable===!1)){var a=o&&o.get,c=o&&o.set;(!a||c)&&arguments.length===2&&(r=t[e]);var u=!i&&di(r);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var h=a?a.call(t):r;return Ht.target&&(s.depend(),u&&(u.dep.depend(),Array.isArray(h)&&YS(h))),h},set:function(h){var f=a?a.call(t):r;h===f||h!==h&&f!==f||a&&!c||(c?c.call(t,h):r=h,u=!i&&di(h),s.notify())}})}}function Rv(t,e,r){if(Array.isArray(t)&&US(e))return t.length=Math.max(t.length,e),t.splice(e,1,r),r;if(e in t&&!(e in Object.prototype))return t[e]=r,r;var n=t.__ob__;return t._isVue||n&&n.vmCount?r:n?(pi(n.value,e,r),n.dep.notify(),r):(t[e]=r,r)}function HS(t,e){if(Array.isArray(t)&&US(e)){t.splice(e,1);return}var r=t.__ob__;t._isVue||r&&r.vmCount||!Nt(t,e)||(delete t[e],!!r&&r.dep.notify())}function YS(t){for(var e=void 0,r=0,n=t.length;r<n;r++)e=t[r],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&YS(e)}var Nr=ir.optionMergeStrategies;function Yd(t,e){if(!e)return t;for(var r,n,i,s=Vl?Reflect.ownKeys(e):Object.keys(e),o=0;o<s.length;o++)r=s[o],r!=="__ob__"&&(n=t[r],i=e[r],Nt(t,r)?n!==i&&Xt(n)&&Xt(i)&&Yd(n,i):Rv(t,r,i));return t}function Xd(t,e,r){return r?function(){var i=typeof e=="function"?e.call(r,r):e,s=typeof t=="function"?t.call(r,r):t;return i?Yd(i,s):s}:e?t?function(){return Yd(typeof e=="function"?e.call(this,this):e,typeof t=="function"?t.call(this,this):t)}:e:t}Nr.data=function(t,e,r){return r?Xd(t,e,r):e&&typeof e!="function"?t:Xd(t,e)};function Wx(t,e){var r=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return r&&zx(r)}function zx(t){for(var e=[],r=0;r<t.length;r++)e.indexOf(t[r])===-1&&e.push(t[r]);return e}qS.forEach(function(t){Nr[t]=Wx});function Gx(t,e,r,n){var i=Object.create(t||null);return e?Oe(i,e):i}jl.forEach(function(t){Nr[t+"s"]=Gx});Nr.watch=function(t,e,r,n){if(t===Kd&&(t=void 0),e===Kd&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};Oe(i,t);for(var s in e){var o=i[s],a=e[s];o&&!Array.isArray(o)&&(o=[o]),i[s]=o?o.concat(a):Array.isArray(a)?a:[a]}return i};Nr.props=Nr.methods=Nr.inject=Nr.computed=function(t,e,r,n){if(!t)return e;var i=Object.create(null);return Oe(i,t),e&&Oe(i,e),i};Nr.provide=Xd;var Kx=function(t,e){return e===void 0?t:e};function Hx(t,e){var r=t.props;if(!!r){var n={},i,s,o;if(Array.isArray(r))for(i=r.length;i--;)s=r[i],typeof s=="string"&&(o=hi(s),n[o]={type:null});else if(Xt(r))for(var a in r)s=r[a],o=hi(a),n[o]=Xt(s)?s:{type:s};t.props=n}}function Yx(t,e){var r=t.inject;if(!!r){var n=t.inject={};if(Array.isArray(r))for(var i=0;i<r.length;i++)n[r[i]]={from:r[i]};else if(Xt(r))for(var s in r){var o=r[s];n[s]=Xt(o)?Oe({from:s},o):{from:o}}}}function Xx(t){var e=t.directives;if(e)for(var r in e){var n=e[r];typeof n=="function"&&(e[r]={bind:n,update:n})}}function vi(t,e,r){if(typeof e=="function"&&(e=e.options),Hx(e),Yx(e),Xx(e),!e._base&&(e.extends&&(t=vi(t,e.extends,r)),e.mixins))for(var n=0,i=e.mixins.length;n<i;n++)t=vi(t,e.mixins[n],r);var s={},o;for(o in t)a(o);for(o in e)Nt(t,o)||a(o);function a(c){var u=Nr[c]||Kx;s[c]=u(t[c],e[c],r,c)}return s}function $v(t,e,r,n){if(typeof r=="string"){var i=t[e];if(Nt(i,r))return i[r];var s=hi(r);if(Nt(i,s))return i[s];var o=Ox(s);if(Nt(i,o))return i[o];var a=i[r]||i[s]||i[o];return a}}function kv(t,e,r,n){var i=e[t],s=!Nt(r,t),o=r[t],a=dw(Boolean,i.type);if(a>-1){if(s&&!Nt(i,"default"))o=!1;else if(o===""||o===ja(t)){var c=dw(String,i.type);(c<0||a<c)&&(o=!0)}}if(o===void 0){o=Qx(n,i,t);var u=Cv;Cn(!0),di(o),Cn(u)}return o}function Qx(t,e,r){if(!!Nt(e,"default")){var n=e.default;return t&&t.$options.propsData&&t.$options.propsData[r]===void 0&&t._props[r]!==void 0?t._props[r]:typeof n=="function"&&Qd(e.type)!=="Function"?n.call(t):n}}var Jx=/^\s*function (\w+)/;function Qd(t){var e=t&&t.toString().match(Jx);return e?e[1]:""}function fw(t,e){return Qd(t)===Qd(e)}function dw(t,e){if(!Array.isArray(e))return fw(e,t)?0:-1;for(var r=0,n=e.length;r<n;r++)if(fw(e[r],t))return r;return-1}function gi(t,e,r){Ba();try{if(e)for(var n=e;n=n.$parent;){var i=n.$options.errorCaptured;if(i)for(var s=0;s<i.length;s++)try{var o=i[s].call(n,t,e,r)===!1;if(o)return}catch(a){pw(a,n,"errorCaptured hook")}}pw(t,e,r)}finally{Va()}}function $s(t,e,r,n,i){var s;try{s=r?t.apply(e,r):t.call(e),s&&!s._isVue&&zd(s)&&!s._handled&&(s.catch(function(o){return gi(o,n,i+" (Promise/async)")}),s._handled=!0)}catch(o){gi(o,n,i)}return s}function pw(t,e,r){if(ir.errorHandler)try{return ir.errorHandler.call(null,t,e,r)}catch(n){n!==t&&vw(n)}vw(t)}function vw(t,e,r){if((Jt||Av)&&typeof console!="undefined")console.error(t);else throw t}var Jd=!1,Zd=[],ep=!1;function Cc(){ep=!1;var t=Zd.slice(0);Zd.length=0;for(var e=0;e<t.length;e++)t[e]()}var qo;if(typeof Promise!="undefined"&&Is(Promise)){var Zx=Promise.resolve();qo=function(){Zx.then(Cc),Mx&&setTimeout(jt)},Jd=!0}else if(!eo&&typeof MutationObserver!="undefined"&&(Is(MutationObserver)||MutationObserver.toString()==="[object MutationObserverConstructor]")){var Rc=1,eN=new MutationObserver(Cc),gw=document.createTextNode(String(Rc));eN.observe(gw,{characterData:!0}),qo=function(){Rc=(Rc+1)%2,gw.data=String(Rc)},Jd=!0}else typeof setImmediate!="undefined"&&Is(setImmediate)?qo=function(){setImmediate(Cc)}:qo=function(){setTimeout(Cc,0)};function xv(t,e){var r;if(Zd.push(function(){if(t)try{t.call(e)}catch(n){gi(n,e,"nextTick")}else r&&r(e)}),ep||(ep=!0,qo()),!t&&typeof Promise!="undefined")return new Promise(function(n){r=n})}var mw=new sa;function Bu(t){tp(t,mw),mw.clear()}function tp(t,e){var r,n,i=Array.isArray(t);if(!(!i&&!Pt(t)||Object.isFrozen(t)||t instanceof Bt)){if(t.__ob__){var s=t.__ob__.dep.id;if(e.has(s))return;e.add(s)}if(i)for(r=t.length;r--;)tp(t[r],e);else for(n=Object.keys(t),r=n.length;r--;)tp(t[n[r]],e)}}var yw=$i(function(t){var e=t.charAt(0)==="&";t=e?t.slice(1):t;var r=t.charAt(0)==="~";t=r?t.slice(1):t;var n=t.charAt(0)==="!";return t=n?t.slice(1):t,{name:t,once:r,capture:n,passive:e}});function rp(t,e){function r(){var n=arguments,i=r.fns;if(Array.isArray(i))for(var s=i.slice(),o=0;o<s.length;o++)$s(s[o],null,n,e,"v-on handler");else return $s(i,null,arguments,e,"v-on handler")}return r.fns=t,r}function XS(t,e,r,n,i,s){var o,a,c,u;for(o in t)a=t[o],c=e[o],u=yw(o),ue(a)||(ue(c)?(ue(a.fns)&&(a=t[o]=rp(a,s)),Ve(u.once)&&(a=t[o]=i(u.name,a,u.capture)),r(u.name,a,u.capture,u.passive,u.params)):a!==c&&(c.fns=a,t[o]=c));for(o in e)ue(t[o])&&(u=yw(o),n(u.name,e[o],u.capture))}function _n(t,e,r){t instanceof Bt&&(t=t.data.hook||(t.data.hook={}));var n,i=t[e];function s(){r.apply(this,arguments),nn(n.fns,s)}ue(i)?n=rp([s]):C(i.fns)&&Ve(i.merged)?(n=i,n.fns.push(s)):n=rp([i,s]),n.merged=!0,t[e]=n}function tN(t,e,r){var n=e.options.props;if(!ue(n)){var i={},s=t.attrs,o=t.props;if(C(s)||C(o))for(var a in n){var c=ja(a);ww(i,o,a,c,!0)||ww(i,s,a,c,!1)}return i}}function ww(t,e,r,n,i){if(C(e)){if(Nt(e,r))return t[r]=e[r],i||delete e[r],!0;if(Nt(e,n))return t[r]=e[n],i||delete e[n],!0}return!1}function rN(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Nv(t){return Ua(t)?[vs(t)]:Array.isArray(t)?QS(t):void 0}function Co(t){return C(t)&&C(t.text)&&_x(t.isComment)}function QS(t,e){var r=[],n,i,s,o;for(n=0;n<t.length;n++)i=t[n],!(ue(i)||typeof i=="boolean")&&(s=r.length-1,o=r[s],Array.isArray(i)?i.length>0&&(i=QS(i,(e||"")+"_"+n),Co(i[0])&&Co(o)&&(r[s]=vs(o.text+i[0].text),i.shift()),r.push.apply(r,i)):Ua(i)?Co(o)?r[s]=vs(o.text+i):i!==""&&r.push(vs(i)):Co(i)&&Co(o)?r[s]=vs(o.text+i.text):(Ve(t._isVList)&&C(i.tag)&&ue(i.key)&&C(e)&&(i.key="__vlist"+e+"_"+n+"__"),r.push(i)));return r}function nN(t){var e=t.$options.provide;e&&(t._provided=typeof e=="function"?e.call(t):e)}function iN(t){var e=JS(t.$options.inject,t);e&&(Cn(!1),Object.keys(e).forEach(function(r){pi(t,r,e[r])}),Cn(!0))}function JS(t,e){if(t){for(var r=Object.create(null),n=Vl?Reflect.ownKeys(t):Object.keys(t),i=0;i<n.length;i++){var s=n[i];if(s!=="__ob__"){for(var o=t[s].from,a=e;a;){if(a._provided&&Nt(a._provided,o)){r[s]=a._provided[o];break}a=a.$parent}if(!a&&"default"in t[s]){var c=t[s].default;r[s]=typeof c=="function"?c.call(e):c}}}return r}}function Pv(t,e){if(!t||!t.length)return{};for(var r={},n=0,i=t.length;n<i;n++){var s=t[n],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,(s.context===e||s.fnContext===e)&&o&&o.slot!=null){var a=o.slot,c=r[a]||(r[a]=[]);s.tag==="template"?c.push.apply(c,s.children||[]):c.push(s)}else(r.default||(r.default=[])).push(s)}for(var u in r)r[u].every(sN)&&delete r[u];return r}function sN(t){return t.isComment&&!t.asyncFactory||t.text===" "}function oa(t){return t.isComment&&t.asyncFactory}function du(t,e,r){var n,i=Object.keys(e).length>0,s=t?!!t.$stable:!i,o=t&&t.$key;if(!t)n={};else{if(t._normalized)return t._normalized;if(s&&r&&r!==xr&&o===r.$key&&!i&&!r.$hasNormal)return r;n={};for(var a in t)t[a]&&a[0]!=="$"&&(n[a]=oN(e,a,t[a]))}for(var c in e)c in n||(n[c]=aN(e,c));return t&&Object.isExtensible(t)&&(t._normalized=n),Es(n,"$stable",s),Es(n,"$key",o),Es(n,"$hasNormal",i),n}function oN(t,e,r){var n=function(){var i=arguments.length?r.apply(null,arguments):r({});i=i&&typeof i=="object"&&!Array.isArray(i)?[i]:Nv(i);var s=i&&i[0];return i&&(!s||i.length===1&&s.isComment&&!oa(s))?void 0:i};return r.proxy&&Object.defineProperty(t,e,{get:n,enumerable:!0,configurable:!0}),n}function aN(t,e){return function(){return t[e]}}function cN(t,e){var r,n,i,s,o;if(Array.isArray(t)||typeof t=="string")for(r=new Array(t.length),n=0,i=t.length;n<i;n++)r[n]=e(t[n],n);else if(typeof t=="number")for(r=new Array(t),n=0;n<t;n++)r[n]=e(n+1,n);else if(Pt(t))if(Vl&&t[Symbol.iterator]){r=[];for(var a=t[Symbol.iterator](),c=a.next();!c.done;)r.push(e(c.value,r.length)),c=a.next()}else for(s=Object.keys(t),r=new Array(s.length),n=0,i=s.length;n<i;n++)o=s[n],r[n]=e(t[o],o,n);return C(r)||(r=[]),r._isVList=!0,r}function uN(t,e,r,n){var i=this.$scopedSlots[t],s;i?(r=r||{},n&&(r=Oe(Oe({},n),r)),s=i(r)||(typeof e=="function"?e():e)):s=this.$slots[t]||(typeof e=="function"?e():e);var o=r&&r.slot;return o?this.$createElement("template",{slot:o},s):s}function lN(t){return $v(this.$options,"filters",t)||BS}function bw(t,e){return Array.isArray(t)?t.indexOf(e)===-1:t!==e}function hN(t,e,r,n,i){var s=ir.keyCodes[e]||r;return i&&n&&!ir.keyCodes[e]?bw(i,n):s?bw(s,t):n?ja(n)!==e:t===void 0}function fN(t,e,r,n,i){if(r&&Pt(r)){Array.isArray(r)&&(r=jS(r));var s,o=function(c){if(c==="class"||c==="style"||Sx(c))s=t;else{var u=t.attrs&&t.attrs.type;s=n||ir.mustUseProp(e,u,c)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var l=hi(c),h=ja(c);if(!(l in s)&&!(h in s)&&(s[c]=r[c],i)){var f=t.on||(t.on={});f["update:"+c]=function(p){r[c]=p}}};for(var a in r)o(a)}return t}function dN(t,e){var r=this._staticTrees||(this._staticTrees=[]),n=r[t];return n&&!e||(n=r[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),ZS(n,"__static__"+t,!1)),n}function pN(t,e,r){return ZS(t,"__once__"+e+(r?"_"+r:""),!0),t}function ZS(t,e,r){if(Array.isArray(t))for(var n=0;n<t.length;n++)t[n]&&typeof t[n]!="string"&&_w(t[n],e+"_"+n,r);else _w(t,e,r)}function _w(t,e,r){t.isStatic=!0,t.key=e,t.isOnce=r}function vN(t,e){if(e&&Xt(e)){var r=t.on=t.on?Oe({},t.on):{};for(var n in e){var i=r[n],s=e[n];r[n]=i?[].concat(i,s):s}}return t}function eT(t,e,r,n){e=e||{$stable:!r};for(var i=0;i<t.length;i++){var s=t[i];Array.isArray(s)?eT(s,e,r):s&&(s.proxy&&(s.fn.proxy=!0),e[s.key]=s.fn)}return n&&(e.$key=n),e}function gN(t,e){for(var r=0;r<e.length;r+=2){var n=e[r];typeof n=="string"&&n&&(t[e[r]]=e[r+1])}return t}function mN(t,e){return typeof t=="string"?e+t:t}function tT(t){t._o=pN,t._n=ia,t._s=Ix,t._l=cN,t._t=uN,t._q=fi,t._i=VS,t._m=dN,t._f=lN,t._k=hN,t._b=fN,t._v=vs,t._e=ei,t._u=eT,t._g=vN,t._d=gN,t._p=mN}function Dv(t,e,r,n,i){var s=this,o=i.options,a;Nt(n,"_uid")?(a=Object.create(n),a._original=n):(a=n,n=n._original);var c=Ve(o._compiled),u=!c;this.data=t,this.props=e,this.children=r,this.parent=n,this.listeners=t.on||xr,this.injections=JS(o.inject,n),this.slots=function(){return s.$slots||du(t.scopedSlots,s.$slots=Pv(r,n)),s.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return du(t.scopedSlots,this.slots())}}),c&&(this.$options=o,this.$slots=this.slots(),this.$scopedSlots=du(t.scopedSlots,this.$slots)),o._scopeId?this._c=function(l,h,f,p){var g=Vu(a,l,h,f,p,u);return g&&!Array.isArray(g)&&(g.fnScopeId=o._scopeId,g.fnContext=n),g}:this._c=function(l,h,f,p){return Vu(a,l,h,f,p,u)}}tT(Dv.prototype);function yN(t,e,r,n,i){var s=t.options,o={},a=s.props;if(C(a))for(var c in a)o[c]=kv(c,a,e||xr);else C(r.attrs)&&Iw(o,r.attrs),C(r.props)&&Iw(o,r.props);var u=new Dv(r,o,i,n,t),l=s.render.call(null,u._c,u);if(l instanceof Bt)return Ew(l,r,u.parent,s);if(Array.isArray(l)){for(var h=Nv(l)||[],f=new Array(h.length),p=0;p<h.length;p++)f[p]=Ew(h[p],r,u.parent,s);return f}}function Ew(t,e,r,n,i){var s=Hd(t);return s.fnContext=r,s.fnOptions=n,e.slot&&((s.data||(s.data={})).slot=e.slot),s}function Iw(t,e){for(var r in e)t[hi(r)]=e[r]}var Lv={init:function(e,r){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;Lv.prepatch(n,n)}else{var i=e.componentInstance=wN(e,ti);i.$mount(r?e.elm:void 0,r)}},prepatch:function(e,r){var n=r.componentOptions,i=r.componentInstance=e.componentInstance;FN(i,n.propsData,n.listeners,r,n.children)},insert:function(e){var r=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,pr(n,"mounted")),e.data.keepAlive&&(r._isMounted?VN(n):Mv(n,!0))},destroy:function(e){var r=e.componentInstance;r._isDestroyed||(e.data.keepAlive?cT(r,!0):r.$destroy())}},Sw=Object.keys(Lv);function Tw(t,e,r,n,i){if(!ue(t)){var s=r.$options._base;if(Pt(t)&&(t=s.extend(t)),typeof t=="function"){var o;if(ue(t.cid)&&(o=t,t=RN(o,s),t===void 0))return CN(o,e,r,n,i);e=e||{},Bv(t),C(e.model)&&EN(t.options,e);var a=tN(e,t);if(Ve(t.options.functional))return yN(t,a,e,r,n);var c=e.on;if(e.on=e.nativeOn,Ve(t.options.abstract)){var u=e.slot;e={},u&&(e.slot=u)}bN(e);var l=t.options.name||i,h=new Bt("vue-component-"+t.cid+(l?"-"+l:""),e,void 0,void 0,void 0,r,{Ctor:t,propsData:a,listeners:c,tag:i,children:n},o);return h}}}function wN(t,e){var r={_isComponent:!0,_parentVnode:t,parent:e},n=t.data.inlineTemplate;return C(n)&&(r.render=n.render,r.staticRenderFns=n.staticRenderFns),new t.componentOptions.Ctor(r)}function bN(t){for(var e=t.hook||(t.hook={}),r=0;r<Sw.length;r++){var n=Sw[r],i=e[n],s=Lv[n];i!==s&&!(i&&i._merged)&&(e[n]=i?_N(s,i):s)}}function _N(t,e){var r=function(n,i){t(n,i),e(n,i)};return r._merged=!0,r}function EN(t,e){var r=t.model&&t.model.prop||"value",n=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[r]=e.model.value;var i=e.on||(e.on={}),s=i[n],o=e.model.callback;C(s)?(Array.isArray(s)?s.indexOf(o)===-1:s!==o)&&(i[n]=[o].concat(s)):i[n]=o}var IN=1,rT=2;function Vu(t,e,r,n,i,s){return(Array.isArray(r)||Ua(r))&&(i=n,n=r,r=void 0),Ve(s)&&(i=rT),SN(t,e,r,n,i)}function SN(t,e,r,n,i){if(C(r)&&C(r.__ob__)||(C(r)&&C(r.is)&&(e=r.is),!e))return ei();Array.isArray(n)&&typeof n[0]=="function"&&(r=r||{},r.scopedSlots={default:n[0]},n.length=0),i===rT?n=Nv(n):i===IN&&(n=rN(n));var s,o;if(typeof e=="string"){var a;o=t.$vnode&&t.$vnode.ns||ir.getTagNamespace(e),ir.isReservedTag(e)?s=new Bt(ir.parsePlatformTagName(e),r,n,void 0,void 0,t):(!r||!r.pre)&&C(a=$v(t.$options,"components",e))?s=Tw(a,r,t,n,e):s=new Bt(e,r,n,void 0,void 0,t)}else s=Tw(e,r,t,n);return Array.isArray(s)?s:C(s)?(C(o)&&nT(s,o),C(r)&&TN(r),s):ei()}function nT(t,e,r){if(t.ns=e,t.tag==="foreignObject"&&(e=void 0,r=!0),C(t.children))for(var n=0,i=t.children.length;n<i;n++){var s=t.children[n];C(s.tag)&&(ue(s.ns)||Ve(r)&&s.tag!=="svg")&&nT(s,e,r)}}function TN(t){Pt(t.style)&&Bu(t.style),Pt(t.class)&&Bu(t.class)}function AN(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,n=r&&r.context;t.$slots=Pv(e._renderChildren,n),t.$scopedSlots=xr,t._c=function(s,o,a,c){return Vu(t,s,o,a,c,!1)},t.$createElement=function(s,o,a,c){return Vu(t,s,o,a,c,!0)};var i=r&&r.data;pi(t,"$attrs",i&&i.attrs||xr,null,!0),pi(t,"$listeners",e._parentListeners||xr,null,!0)}var np=null;function ON(t){tT(t.prototype),t.prototype.$nextTick=function(e){return xv(e,this)},t.prototype._render=function(){var e=this,r=e.$options,n=r.render,i=r._parentVnode;i&&(e.$scopedSlots=du(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;var s;try{np=e,s=n.call(e._renderProxy,e.$createElement)}catch(o){gi(o,e,"render"),s=e._vnode}finally{np=null}return Array.isArray(s)&&s.length===1&&(s=s[0]),s instanceof Bt||(s=ei()),s.parent=i,s}}function ff(t,e){return(t.__esModule||Vl&&t[Symbol.toStringTag]==="Module")&&(t=t.default),Pt(t)?e.extend(t):t}function CN(t,e,r,n,i){var s=ei();return s.asyncFactory=t,s.asyncMeta={data:e,context:r,children:n,tag:i},s}function RN(t,e){if(Ve(t.error)&&C(t.errorComp))return t.errorComp;if(C(t.resolved))return t.resolved;var r=np;if(r&&C(t.owners)&&t.owners.indexOf(r)===-1&&t.owners.push(r),Ve(t.loading)&&C(t.loadingComp))return t.loadingComp;if(r&&!C(t.owners)){var n=t.owners=[r],i=!0,s=null,o=null;r.$on("hook:destroyed",function(){return nn(n,r)});var a=function(h){for(var f=0,p=n.length;f<p;f++)n[f].$forceUpdate();h&&(n.length=0,s!==null&&(clearTimeout(s),s=null),o!==null&&(clearTimeout(o),o=null))},c=Mu(function(h){t.resolved=ff(h,e),i?n.length=0:a(!0)}),u=Mu(function(h){C(t.errorComp)&&(t.error=!0,a(!0))}),l=t(c,u);return Pt(l)&&(zd(l)?ue(t.resolved)&&l.then(c,u):zd(l.component)&&(l.component.then(c,u),C(l.error)&&(t.errorComp=ff(l.error,e)),C(l.loading)&&(t.loadingComp=ff(l.loading,e),l.delay===0?t.loading=!0:s=setTimeout(function(){s=null,ue(t.resolved)&&ue(t.error)&&(t.loading=!0,a(!1))},l.delay||200)),C(l.timeout)&&(o=setTimeout(function(){o=null,ue(t.resolved)&&u(null)},l.timeout)))),i=!1,t.loading?t.loadingComp:t.resolved}}function iT(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var r=t[e];if(C(r)&&(C(r.componentOptions)||oa(r)))return r}}function $N(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&sT(t,e)}var aa;function kN(t,e){aa.$on(t,e)}function xN(t,e){aa.$off(t,e)}function NN(t,e){var r=aa;return function n(){var i=e.apply(null,arguments);i!==null&&r.$off(t,n)}}function sT(t,e,r){aa=t,XS(e,r||{},kN,xN,NN,t),aa=void 0}function PN(t){var e=/^hook:/;t.prototype.$on=function(r,n){var i=this;if(Array.isArray(r))for(var s=0,o=r.length;s<o;s++)i.$on(r[s],n);else(i._events[r]||(i._events[r]=[])).push(n),e.test(r)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(r,n){var i=this;function s(){i.$off(r,s),n.apply(i,arguments)}return s.fn=n,i.$on(r,s),i},t.prototype.$off=function(r,n){var i=this;if(!arguments.length)return i._events=Object.create(null),i;if(Array.isArray(r)){for(var s=0,o=r.length;s<o;s++)i.$off(r[s],n);return i}var a=i._events[r];if(!a)return i;if(!n)return i._events[r]=null,i;for(var c,u=a.length;u--;)if(c=a[u],c===n||c.fn===n){a.splice(u,1);break}return i},t.prototype.$emit=function(r){var n=this,i=n._events[r];if(i){i=i.length>1?Gd(i):i;for(var s=Gd(arguments,1),o='event handler for "'+r+'"',a=0,c=i.length;a<c;a++)$s(i[a],n,s,n,o)}return n}}var ti=null;function oT(t){var e=ti;return ti=t,function(){ti=e}}function DN(t){var e=t.$options,r=e.parent;if(r&&!e.abstract){for(;r.$options.abstract&&r.$parent;)r=r.$parent;r.$children.push(t)}t.$parent=r,t.$root=r?r.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function LN(t){t.prototype._update=function(e,r){var n=this,i=n.$el,s=n._vnode,o=oT(n);n._vnode=e,s?n.$el=n.__patch__(s,e):n.$el=n.__patch__(n.$el,e,r,!1),o(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},t.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){pr(e,"beforeDestroy"),e._isBeingDestroyed=!0;var r=e.$parent;r&&!r._isBeingDestroyed&&!e.$options.abstract&&nn(r.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),pr(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function MN(t,e,r){t.$el=e,t.$options.render||(t.$options.render=ei),pr(t,"beforeMount");var n;return n=function(){t._update(t._render(),r)},new wr(t,n,jt,{before:function(){t._isMounted&&!t._isDestroyed&&pr(t,"beforeUpdate")}},!0),r=!1,t.$vnode==null&&(t._isMounted=!0,pr(t,"mounted")),t}function FN(t,e,r,n,i){var s=n.data.scopedSlots,o=t.$scopedSlots,a=!!(s&&!s.$stable||o!==xr&&!o.$stable||s&&t.$scopedSlots.$key!==s.$key||!s&&t.$scopedSlots.$key),c=!!(i||t.$options._renderChildren||a);if(t.$options._parentVnode=n,t.$vnode=n,t._vnode&&(t._vnode.parent=n),t.$options._renderChildren=i,t.$attrs=n.data.attrs||xr,t.$listeners=r||xr,e&&t.$options.props){Cn(!1);for(var u=t._props,l=t.$options._propKeys||[],h=0;h<l.length;h++){var f=l[h],p=t.$options.props;u[f]=kv(f,p,e,t)}Cn(!0),t.$options.propsData=e}r=r||xr;var g=t.$options._parentListeners;t.$options._parentListeners=r,sT(t,r,g),c&&(t.$slots=Pv(i,n.context),t.$forceUpdate())}function aT(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function Mv(t,e){if(e){if(t._directInactive=!1,aT(t))return}else if(t._directInactive)return;if(t._inactive||t._inactive===null){t._inactive=!1;for(var r=0;r<t.$children.length;r++)Mv(t.$children[r]);pr(t,"activated")}}function cT(t,e){if(!(e&&(t._directInactive=!0,aT(t)))&&!t._inactive){t._inactive=!0;for(var r=0;r<t.$children.length;r++)cT(t.$children[r]);pr(t,"deactivated")}}function pr(t,e){Ba();var r=t.$options[e],n=e+" hook";if(r)for(var i=0,s=r.length;i<s;i++)$s(r[i],t,null,t,n);t._hasHookEvent&&t.$emit("hook:"+e),Va()}var Wr=[],Fv=[],qu={},ip=!1,Uv=!1,gs=0;function UN(){gs=Wr.length=Fv.length=0,qu={},ip=Uv=!1}var uT=0,sp=Date.now;if(Jt&&!eo){var df=window.performance;df&&typeof df.now=="function"&&sp()>document.createEvent("Event").timeStamp&&(sp=function(){return df.now()})}function jN(){uT=sp(),Uv=!0;var t,e;for(Wr.sort(function(i,s){return i.id-s.id}),gs=0;gs<Wr.length;gs++)t=Wr[gs],t.before&&t.before(),e=t.id,qu[e]=null,t.run();var r=Fv.slice(),n=Wr.slice();UN(),qN(r),BN(n),Fu&&ir.devtools&&Fu.emit("flush")}function BN(t){for(var e=t.length;e--;){var r=t[e],n=r.vm;n._watcher===r&&n._isMounted&&!n._isDestroyed&&pr(n,"updated")}}function VN(t){t._inactive=!1,Fv.push(t)}function qN(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Mv(t[e],!0)}function WN(t){var e=t.id;if(qu[e]==null){if(qu[e]=!0,!Uv)Wr.push(t);else{for(var r=Wr.length-1;r>gs&&Wr[r].id>t.id;)r--;Wr.splice(r+1,0,t)}ip||(ip=!0,xv(jN))}}var zN=0,wr=function(e,r,n,i,s){this.vm=e,s&&(e._watcher=this),e._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++zN,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new sa,this.newDepIds=new sa,this.expression="",typeof r=="function"?this.getter=r:(this.getter=Dx(r),this.getter||(this.getter=jt)),this.value=this.lazy?void 0:this.get()};wr.prototype.get=function(){Ba(this);var e,r=this.vm;try{e=this.getter.call(r,r)}catch(n){if(this.user)gi(n,r,'getter for watcher "'+this.expression+'"');else throw n}finally{this.deep&&Bu(e),Va(),this.cleanupDeps()}return e};wr.prototype.addDep=function(e){var r=e.id;this.newDepIds.has(r)||(this.newDepIds.add(r),this.newDeps.push(e),this.depIds.has(r)||e.addSub(this))};wr.prototype.cleanupDeps=function(){for(var e=this.deps.length;e--;){var r=this.deps[e];this.newDepIds.has(r.id)||r.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0};wr.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():WN(this)};wr.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||Pt(e)||this.deep){var r=this.value;if(this.value=e,this.user){var n='callback for watcher "'+this.expression+'"';$s(this.cb,this.vm,[e,r],this.vm,n)}else this.cb.call(this.vm,e,r)}}};wr.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1};wr.prototype.depend=function(){for(var e=this.deps.length;e--;)this.deps[e].depend()};wr.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||nn(this.vm._watchers,this);for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1}};var yn={enumerable:!0,configurable:!0,get:jt,set:jt};function jv(t,e,r){yn.get=function(){return this[e][r]},yn.set=function(i){this[e][r]=i},Object.defineProperty(t,r,yn)}function GN(t){t._watchers=[];var e=t.$options;e.props&&KN(t,e.props),e.methods&&JN(t,e.methods),e.data?HN(t):di(t._data={},!0),e.computed&&QN(t,e.computed),e.watch&&e.watch!==Kd&&ZN(t,e.watch)}function KN(t,e){var r=t.$options.propsData||{},n=t._props={},i=t.$options._propKeys=[],s=!t.$parent;s||Cn(!1);var o=function(c){i.push(c);var u=kv(c,e,r,t);pi(n,c,u),c in t||jv(t,"_props",c)};for(var a in e)o(a);Cn(!0)}function HN(t){var e=t.$options.data;e=t._data=typeof e=="function"?YN(e,t):e||{},Xt(e)||(e={});var r=Object.keys(e),n=t.$options.props;t.$options.methods;for(var i=r.length;i--;){var s=r[i];n&&Nt(n,s)||Nx(s)||jv(t,"_data",s)}di(e,!0)}function YN(t,e){Ba();try{return t.call(e,e)}catch(r){return gi(r,e,"data()"),{}}finally{Va()}}var XN={lazy:!0};function QN(t,e){var r=t._computedWatchers=Object.create(null),n=Bl();for(var i in e){var s=e[i],o=typeof s=="function"?s:s.get;n||(r[i]=new wr(t,o||jt,jt,XN)),i in t||lT(t,i,s)}}function lT(t,e,r){var n=!Bl();typeof r=="function"?(yn.get=n?Aw(e):Ow(r),yn.set=jt):(yn.get=r.get?n&&r.cache!==!1?Aw(e):Ow(r.get):jt,yn.set=r.set||jt),Object.defineProperty(t,e,yn)}function Aw(t){return function(){var r=this._computedWatchers&&this._computedWatchers[t];if(r)return r.dirty&&r.evaluate(),Ht.target&&r.depend(),r.value}}function Ow(t){return function(){return t.call(this,this)}}function JN(t,e){t.$options.props;for(var r in e)t[r]=typeof e[r]!="function"?jt:kx(e[r],t)}function ZN(t,e){for(var r in e){var n=e[r];if(Array.isArray(n))for(var i=0;i<n.length;i++)op(t,r,n[i]);else op(t,r,n)}}function op(t,e,r,n){return Xt(r)&&(n=r,r=r.handler),typeof r=="string"&&(r=t[r]),t.$watch(e,r,n)}function eP(t){var e={};e.get=function(){return this._data};var r={};r.get=function(){return this._props},Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",r),t.prototype.$set=Rv,t.prototype.$delete=HS,t.prototype.$watch=function(n,i,s){var o=this;if(Xt(i))return op(o,n,i,s);s=s||{},s.user=!0;var a=new wr(o,n,i,s);if(s.immediate){var c='callback for immediate watcher "'+a.expression+'"';Ba(),$s(i,o,[a.value],o,c),Va()}return function(){a.teardown()}}}var tP=0;function rP(t){t.prototype._init=function(e){var r=this;r._uid=tP++,r._isVue=!0,e&&e._isComponent?nP(r,e):r.$options=vi(Bv(r.constructor),e||{},r),r._renderProxy=r,r._self=r,DN(r),$N(r),AN(r),pr(r,"beforeCreate"),iN(r),GN(r),nN(r),pr(r,"created"),r.$options.el&&r.$mount(r.$options.el)}}function nP(t,e){var r=t.$options=Object.create(t.constructor.options),n=e._parentVnode;r.parent=e.parent,r._parentVnode=n;var i=n.componentOptions;r.propsData=i.propsData,r._parentListeners=i.listeners,r._renderChildren=i.children,r._componentTag=i.tag,e.render&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns)}function Bv(t){var e=t.options;if(t.super){var r=Bv(t.super),n=t.superOptions;if(r!==n){t.superOptions=r;var i=iP(t);i&&Oe(t.extendOptions,i),e=t.options=vi(r,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function iP(t){var e,r=t.options,n=t.sealedOptions;for(var i in r)r[i]!==n[i]&&(e||(e={}),e[i]=r[i]);return e}function We(t){this._init(t)}rP(We);eP(We);PN(We);LN(We);ON(We);function sP(t){t.use=function(e){var r=this._installedPlugins||(this._installedPlugins=[]);if(r.indexOf(e)>-1)return this;var n=Gd(arguments,1);return n.unshift(this),typeof e.install=="function"?e.install.apply(e,n):typeof e=="function"&&e.apply(null,n),r.push(e),this}}function oP(t){t.mixin=function(e){return this.options=vi(this.options,e),this}}function aP(t){t.cid=0;var e=1;t.extend=function(r){r=r||{};var n=this,i=n.cid,s=r._Ctor||(r._Ctor={});if(s[i])return s[i];var o=r.name||n.options.name,a=function(u){this._init(u)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=vi(n.options,r),a.super=n,a.options.props&&cP(a),a.options.computed&&uP(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,jl.forEach(function(c){a[c]=n[c]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=r,a.sealedOptions=Oe({},a.options),s[i]=a,a}}function cP(t){var e=t.options.props;for(var r in e)jv(t.prototype,"_props",r)}function uP(t){var e=t.options.computed;for(var r in e)lT(t.prototype,r,e[r])}function lP(t){jl.forEach(function(e){t[e]=function(r,n){return n?(e==="component"&&Xt(n)&&(n.name=n.name||r,n=this.options._base.extend(n)),e==="directive"&&typeof n=="function"&&(n={bind:n,update:n}),this.options[e+"s"][r]=n,n):this.options[e+"s"][r]}})}function Cw(t){return t&&(t.Ctor.options.name||t.tag)}function $c(t,e){return Array.isArray(t)?t.indexOf(e)>-1:typeof t=="string"?t.split(",").indexOf(e)>-1:Ex(t)?t.test(e):!1}function Rw(t,e){var r=t.cache,n=t.keys,i=t._vnode;for(var s in r){var o=r[s];if(o){var a=o.name;a&&!e(a)&&ap(r,s,n,i)}}}function ap(t,e,r,n){var i=t[e];i&&(!n||i.tag!==n.tag)&&i.componentInstance.$destroy(),t[e]=null,nn(r,e)}var $w=[String,RegExp,Array],hP={name:"keep-alive",abstract:!0,props:{include:$w,exclude:$w,max:[String,Number]},methods:{cacheVNode:function(){var e=this,r=e.cache,n=e.keys,i=e.vnodeToCache,s=e.keyToCache;if(i){var o=i.tag,a=i.componentInstance,c=i.componentOptions;r[s]={name:Cw(c),tag:o,componentInstance:a},n.push(s),this.max&&n.length>parseInt(this.max)&&ap(r,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)ap(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",function(r){Rw(e,function(n){return $c(r,n)})}),this.$watch("exclude",function(r){Rw(e,function(n){return!$c(r,n)})})},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,r=iT(e),n=r&&r.componentOptions;if(n){var i=Cw(n),s=this,o=s.include,a=s.exclude;if(o&&(!i||!$c(o,i))||a&&i&&$c(a,i))return r;var c=this,u=c.cache,l=c.keys,h=r.key==null?n.Ctor.cid+(n.tag?"::"+n.tag:""):r.key;u[h]?(r.componentInstance=u[h].componentInstance,nn(l,h),l.push(h)):(this.vnodeToCache=r,this.keyToCache=h),r.data.keepAlive=!0}return r||e&&e[0]}},fP={KeepAlive:hP};function dP(t){var e={};e.get=function(){return ir},Object.defineProperty(t,"config",e),t.util={warn:Fx,extend:Oe,mergeOptions:vi,defineReactive:pi},t.set=Rv,t.delete=HS,t.nextTick=xv,t.observable=function(r){return di(r),r},t.options=Object.create(null),jl.forEach(function(r){t.options[r+"s"]=Object.create(null)}),t.options._base=t,Oe(t.options.components,fP),sP(t),oP(t),aP(t),lP(t)}dP(We);Object.defineProperty(We.prototype,"$isServer",{get:Bl});Object.defineProperty(We.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}});Object.defineProperty(We,"FunctionalRenderContext",{value:Dv});We.version="2.6.14";var pP=yr("style,class"),vP=yr("input,textarea,option,select,progress"),gP=function(t,e,r){return r==="value"&&vP(t)&&e!=="button"||r==="selected"&&t==="option"||r==="checked"&&t==="input"||r==="muted"&&t==="video"},hT=yr("contenteditable,draggable,spellcheck"),mP=yr("events,caret,typing,plaintext-only"),yP=function(t,e){return Wu(e)||e==="false"?"false":t==="contenteditable"&&mP(e)?e:"true"},wP=yr("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),cp="http://www.w3.org/1999/xlink",Vv=function(t){return t.charAt(5)===":"&&t.slice(0,5)==="xlink"},fT=function(t){return Vv(t)?t.slice(6,t.length):""},Wu=function(t){return t==null||t===!1};function bP(t){for(var e=t.data,r=t,n=t;C(n.componentInstance);)n=n.componentInstance._vnode,n&&n.data&&(e=kw(n.data,e));for(;C(r=r.parent);)r&&r.data&&(e=kw(e,r.data));return _P(e.staticClass,e.class)}function kw(t,e){return{staticClass:qv(t.staticClass,e.staticClass),class:C(t.class)?[t.class,e.class]:e.class}}function _P(t,e){return C(t)||C(e)?qv(t,Wv(e)):""}function qv(t,e){return t?e?t+" "+e:t:e||""}function Wv(t){return Array.isArray(t)?EP(t):Pt(t)?IP(t):typeof t=="string"?t:""}function EP(t){for(var e="",r,n=0,i=t.length;n<i;n++)C(r=Wv(t[n]))&&r!==""&&(e&&(e+=" "),e+=r);return e}function IP(t){var e="";for(var r in t)t[r]&&(e&&(e+=" "),e+=r);return e}var SP={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},TP=yr("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),zv=yr("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),dT=function(t){return TP(t)||zv(t)};function AP(t){if(zv(t))return"svg";if(t==="math")return"math"}var kc=Object.create(null);function OP(t){if(!Jt)return!0;if(dT(t))return!1;if(t=t.toLowerCase(),kc[t]!=null)return kc[t];var e=document.createElement(t);return t.indexOf("-")>-1?kc[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:kc[t]=/HTMLUnknownElement/.test(e.toString())}var up=yr("text,number,password,search,email,tel,url");function CP(t){if(typeof t=="string"){var e=document.querySelector(t);return e||document.createElement("div")}else return t}function RP(t,e){var r=document.createElement(t);return t!=="select"||e.data&&e.data.attrs&&e.data.attrs.multiple!==void 0&&r.setAttribute("multiple","multiple"),r}function $P(t,e){return document.createElementNS(SP[t],e)}function kP(t){return document.createTextNode(t)}function xP(t){return document.createComment(t)}function NP(t,e,r){t.insertBefore(e,r)}function PP(t,e){t.removeChild(e)}function DP(t,e){t.appendChild(e)}function LP(t){return t.parentNode}function MP(t){return t.nextSibling}function FP(t){return t.tagName}function UP(t,e){t.textContent=e}function jP(t,e){t.setAttribute(e,"")}var BP=Object.freeze({createElement:RP,createElementNS:$P,createTextNode:kP,createComment:xP,insertBefore:NP,removeChild:PP,appendChild:DP,parentNode:LP,nextSibling:MP,tagName:FP,setTextContent:UP,setStyleScope:jP}),VP={create:function(e,r){ms(r)},update:function(e,r){e.data.ref!==r.data.ref&&(ms(e,!0),ms(r))},destroy:function(e){ms(e,!0)}};function ms(t,e){var r=t.data.ref;if(!!C(r)){var n=t.context,i=t.componentInstance||t.elm,s=n.$refs;e?Array.isArray(s[r])?nn(s[r],i):s[r]===i&&(s[r]=void 0):t.data.refInFor?Array.isArray(s[r])?s[r].indexOf(i)<0&&s[r].push(i):s[r]=[i]:s[r]=i}}var Hn=new Bt("",{},[]),Ro=["create","activate","update","remove","destroy"];function Vn(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&C(t.data)===C(e.data)&&qP(t,e)||Ve(t.isAsyncPlaceholder)&&ue(e.asyncFactory.error))}function qP(t,e){if(t.tag!=="input")return!0;var r,n=C(r=t.data)&&C(r=r.attrs)&&r.type,i=C(r=e.data)&&C(r=r.attrs)&&r.type;return n===i||up(n)&&up(i)}function WP(t,e,r){var n,i,s={};for(n=e;n<=r;++n)i=t[n].key,C(i)&&(s[i]=n);return s}function zP(t){var e,r,n={},i=t.modules,s=t.nodeOps;for(e=0;e<Ro.length;++e)for(n[Ro[e]]=[],r=0;r<i.length;++r)C(i[r][Ro[e]])&&n[Ro[e]].push(i[r][Ro[e]]);function o(T){return new Bt(s.tagName(T).toLowerCase(),{},[],void 0,T)}function a(T,A){function D(){--D.listeners===0&&c(T)}return D.listeners=A,D}function c(T){var A=s.parentNode(T);C(A)&&s.removeChild(A,T)}function u(T,A,D,Y,te,ae,ie){if(C(T.elm)&&C(ae)&&(T=ae[ie]=Hd(T)),T.isRootInsert=!te,!l(T,A,D,Y)){var he=T.data,pe=T.children,z=T.tag;C(z)?(T.elm=T.ns?s.createElementNS(T.ns,z):s.createElement(z,T),O(T),g(T,pe,A),C(he)&&I(T,A),p(D,T.elm,Y)):Ve(T.isComment)?(T.elm=s.createComment(T.text),p(D,T.elm,Y)):(T.elm=s.createTextNode(T.text),p(D,T.elm,Y))}}function l(T,A,D,Y){var te=T.data;if(C(te)){var ae=C(T.componentInstance)&&te.keepAlive;if(C(te=te.hook)&&C(te=te.init)&&te(T,!1),C(T.componentInstance))return h(T,A),p(D,T.elm,Y),Ve(ae)&&f(T,A,D,Y),!0}}function h(T,A){C(T.data.pendingInsert)&&(A.push.apply(A,T.data.pendingInsert),T.data.pendingInsert=null),T.elm=T.componentInstance.$el,E(T)?(I(T,A),O(T)):(ms(T),A.push(T))}function f(T,A,D,Y){for(var te,ae=T;ae.componentInstance;)if(ae=ae.componentInstance._vnode,C(te=ae.data)&&C(te=te.transition)){for(te=0;te<n.activate.length;++te)n.activate[te](Hn,ae);A.push(ae);break}p(D,T.elm,Y)}function p(T,A,D){C(T)&&(C(D)?s.parentNode(D)===T&&s.insertBefore(T,A,D):s.appendChild(T,A))}function g(T,A,D){if(Array.isArray(A))for(var Y=0;Y<A.length;++Y)u(A[Y],D,T.elm,null,!0,A,Y);else Ua(T.text)&&s.appendChild(T.elm,s.createTextNode(String(T.text)))}function E(T){for(;T.componentInstance;)T=T.componentInstance._vnode;return C(T.tag)}function I(T,A){for(var D=0;D<n.create.length;++D)n.create[D](Hn,T);e=T.data.hook,C(e)&&(C(e.create)&&e.create(Hn,T),C(e.insert)&&A.push(T))}function O(T){var A;if(C(A=T.fnScopeId))s.setStyleScope(T.elm,A);else for(var D=T;D;)C(A=D.context)&&C(A=A.$options._scopeId)&&s.setStyleScope(T.elm,A),D=D.parent;C(A=ti)&&A!==T.context&&A!==T.fnContext&&C(A=A.$options._scopeId)&&s.setStyleScope(T.elm,A)}function P(T,A,D,Y,te,ae){for(;Y<=te;++Y)u(D[Y],ae,T,A,!1,D,Y)}function q(T){var A,D,Y=T.data;if(C(Y))for(C(A=Y.hook)&&C(A=A.destroy)&&A(T),A=0;A<n.destroy.length;++A)n.destroy[A](T);if(C(A=T.children))for(D=0;D<T.children.length;++D)q(T.children[D])}function G(T,A,D){for(;A<=D;++A){var Y=T[A];C(Y)&&(C(Y.tag)?(k(Y),q(Y)):c(Y.elm))}}function k(T,A){if(C(A)||C(T.data)){var D,Y=n.remove.length+1;for(C(A)?A.listeners+=Y:A=a(T.elm,Y),C(D=T.componentInstance)&&C(D=D._vnode)&&C(D.data)&&k(D,A),D=0;D<n.remove.length;++D)n.remove[D](T,A);C(D=T.data.hook)&&C(D=D.remove)?D(T,A):A()}else c(T.elm)}function x(T,A,D,Y,te){for(var ae=0,ie=0,he=A.length-1,pe=A[0],z=A[he],Q=D.length-1,oe=D[0],ce=D[Q],be,ze,ge,je,tr=!te;ae<=he&&ie<=Q;)ue(pe)?pe=A[++ae]:ue(z)?z=A[--he]:Vn(pe,oe)?(R(pe,oe,Y,D,ie),pe=A[++ae],oe=D[++ie]):Vn(z,ce)?(R(z,ce,Y,D,Q),z=A[--he],ce=D[--Q]):Vn(pe,ce)?(R(pe,ce,Y,D,Q),tr&&s.insertBefore(T,pe.elm,s.nextSibling(z.elm)),pe=A[++ae],ce=D[--Q]):Vn(z,oe)?(R(z,oe,Y,D,ie),tr&&s.insertBefore(T,z.elm,pe.elm),z=A[--he],oe=D[++ie]):(ue(be)&&(be=WP(A,ae,he)),ze=C(oe.key)?be[oe.key]:w(oe,A,ae,he),ue(ze)?u(oe,Y,T,pe.elm,!1,D,ie):(ge=A[ze],Vn(ge,oe)?(R(ge,oe,Y,D,ie),A[ze]=void 0,tr&&s.insertBefore(T,ge.elm,pe.elm)):u(oe,Y,T,pe.elm,!1,D,ie)),oe=D[++ie]);ae>he?(je=ue(D[Q+1])?null:D[Q+1].elm,P(T,je,D,ie,Q,Y)):ie>Q&&G(A,ae,he)}function w(T,A,D,Y){for(var te=D;te<Y;te++){var ae=A[te];if(C(ae)&&Vn(T,ae))return te}}function R(T,A,D,Y,te,ae){if(T!==A){C(A.elm)&&C(Y)&&(A=Y[te]=Hd(A));var ie=A.elm=T.elm;if(Ve(T.isAsyncPlaceholder)){C(A.asyncFactory.resolved)?we(T.elm,A,D):A.isAsyncPlaceholder=!0;return}if(Ve(A.isStatic)&&Ve(T.isStatic)&&A.key===T.key&&(Ve(A.isCloned)||Ve(A.isOnce))){A.componentInstance=T.componentInstance;return}var he,pe=A.data;C(pe)&&C(he=pe.hook)&&C(he=he.prepatch)&&he(T,A);var z=T.children,Q=A.children;if(C(pe)&&E(A)){for(he=0;he<n.update.length;++he)n.update[he](T,A);C(he=pe.hook)&&C(he=he.update)&&he(T,A)}ue(A.text)?C(z)&&C(Q)?z!==Q&&x(ie,z,Q,D,ae):C(Q)?(C(T.text)&&s.setTextContent(ie,""),P(ie,null,Q,0,Q.length-1,D)):C(z)?G(z,0,z.length-1):C(T.text)&&s.setTextContent(ie,""):T.text!==A.text&&s.setTextContent(ie,A.text),C(pe)&&C(he=pe.hook)&&C(he=he.postpatch)&&he(T,A)}}function H(T,A,D){if(Ve(D)&&C(T.parent))T.parent.data.pendingInsert=A;else for(var Y=0;Y<A.length;++Y)A[Y].data.hook.insert(A[Y])}var ne=yr("attrs,class,staticClass,staticStyle,key");function we(T,A,D,Y){var te,ae=A.tag,ie=A.data,he=A.children;if(Y=Y||ie&&ie.pre,A.elm=T,Ve(A.isComment)&&C(A.asyncFactory))return A.isAsyncPlaceholder=!0,!0;if(C(ie)&&(C(te=ie.hook)&&C(te=te.init)&&te(A,!0),C(te=A.componentInstance)))return h(A,D),!0;if(C(ae)){if(C(he))if(!T.hasChildNodes())g(A,he,D);else if(C(te=ie)&&C(te=te.domProps)&&C(te=te.innerHTML)){if(te!==T.innerHTML)return!1}else{for(var pe=!0,z=T.firstChild,Q=0;Q<he.length;Q++){if(!z||!we(z,he[Q],D,Y)){pe=!1;break}z=z.nextSibling}if(!pe||z)return!1}if(C(ie)){var oe=!1;for(var ce in ie)if(!ne(ce)){oe=!0,I(A,D);break}!oe&&ie.class&&Bu(ie.class)}}else T.data!==A.text&&(T.data=A.text);return!0}return function(A,D,Y,te){if(ue(D)){C(A)&&q(A);return}var ae=!1,ie=[];if(ue(A))ae=!0,u(D,ie);else{var he=C(A.nodeType);if(!he&&Vn(A,D))R(A,D,ie,null,null,te);else{if(he){if(A.nodeType===1&&A.hasAttribute(uw)&&(A.removeAttribute(uw),Y=!0),Ve(Y)&&we(A,D,ie))return H(D,ie,!0),A;A=o(A)}var pe=A.elm,z=s.parentNode(pe);if(u(D,ie,pe._leaveCb?null:z,s.nextSibling(pe)),C(D.parent))for(var Q=D.parent,oe=E(D);Q;){for(var ce=0;ce<n.destroy.length;++ce)n.destroy[ce](Q);if(Q.elm=D.elm,oe){for(var be=0;be<n.create.length;++be)n.create[be](Hn,Q);var ze=Q.data.hook.insert;if(ze.merged)for(var ge=1;ge<ze.fns.length;ge++)ze.fns[ge]()}else ms(Q);Q=Q.parent}C(z)?G([A],0,0):C(A.tag)&&q(A)}}return H(D,ie,ae),D.elm}}var GP={create:pf,update:pf,destroy:function(e){pf(e,Hn)}};function pf(t,e){(t.data.directives||e.data.directives)&&KP(t,e)}function KP(t,e){var r=t===Hn,n=e===Hn,i=xw(t.data.directives,t.context),s=xw(e.data.directives,e.context),o=[],a=[],c,u,l;for(c in s)u=i[c],l=s[c],u?(l.oldValue=u.value,l.oldArg=u.arg,$o(l,"update",e,t),l.def&&l.def.componentUpdated&&a.push(l)):($o(l,"bind",e,t),l.def&&l.def.inserted&&o.push(l));if(o.length){var h=function(){for(var f=0;f<o.length;f++)$o(o[f],"inserted",e,t)};r?_n(e,"insert",h):h()}if(a.length&&_n(e,"postpatch",function(){for(var f=0;f<a.length;f++)$o(a[f],"componentUpdated",e,t)}),!r)for(c in i)s[c]||$o(i[c],"unbind",t,t,n)}var HP=Object.create(null);function xw(t,e){var r=Object.create(null);if(!t)return r;var n,i;for(n=0;n<t.length;n++)i=t[n],i.modifiers||(i.modifiers=HP),r[YP(i)]=i,i.def=$v(e.$options,"directives",i.name);return r}function YP(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function $o(t,e,r,n,i){var s=t.def&&t.def[e];if(s)try{s(r.elm,t,r,n,i)}catch(o){gi(o,r.context,"directive "+t.name+" "+e+" hook")}}var XP=[VP,GP];function Nw(t,e){var r=e.componentOptions;if(!(C(r)&&r.Ctor.options.inheritAttrs===!1)&&!(ue(t.data.attrs)&&ue(e.data.attrs))){var n,i,s,o=e.elm,a=t.data.attrs||{},c=e.data.attrs||{};C(c.__ob__)&&(c=e.data.attrs=Oe({},c));for(n in c)i=c[n],s=a[n],s!==i&&Pw(o,n,i,e.data.pre);(eo||Ov)&&c.value!==a.value&&Pw(o,"value",c.value);for(n in a)ue(c[n])&&(Vv(n)?o.removeAttributeNS(cp,fT(n)):hT(n)||o.removeAttribute(n))}}function Pw(t,e,r,n){n||t.tagName.indexOf("-")>-1?Dw(t,e,r):wP(e)?Wu(r)?t.removeAttribute(e):(r=e==="allowfullscreen"&&t.tagName==="EMBED"?"true":e,t.setAttribute(e,r)):hT(e)?t.setAttribute(e,yP(e,r)):Vv(e)?Wu(r)?t.removeAttributeNS(cp,fT(e)):t.setAttributeNS(cp,e,r):Dw(t,e,r)}function Dw(t,e,r){if(Wu(r))t.removeAttribute(e);else{if(eo&&!to&&t.tagName==="TEXTAREA"&&e==="placeholder"&&r!==""&&!t.__ieph){var n=function(i){i.stopImmediatePropagation(),t.removeEventListener("input",n)};t.addEventListener("input",n),t.__ieph=!0}t.setAttribute(e,r)}}var QP={create:Nw,update:Nw};function Lw(t,e){var r=e.elm,n=e.data,i=t.data;if(!(ue(n.staticClass)&&ue(n.class)&&(ue(i)||ue(i.staticClass)&&ue(i.class)))){var s=bP(e),o=r._transitionClasses;C(o)&&(s=qv(s,Wv(o))),s!==r._prevClass&&(r.setAttribute("class",s),r._prevClass=s)}}var JP={create:Lw,update:Lw},vf="__r",gf="__c";function ZP(t){if(C(t[vf])){var e=eo?"change":"input";t[e]=[].concat(t[vf],t[e]||[]),delete t[vf]}C(t[gf])&&(t.change=[].concat(t[gf],t.change||[]),delete t[gf])}var ca;function e1(t,e,r){var n=ca;return function i(){var s=e.apply(null,arguments);s!==null&&pT(t,i,r,n)}}var t1=Jd&&!(lw&&Number(lw[1])<=53);function r1(t,e,r,n){if(t1){var i=uT,s=e;e=s._wrapper=function(o){if(o.target===o.currentTarget||o.timeStamp>=i||o.timeStamp<=0||o.target.ownerDocument!==document)return s.apply(this,arguments)}}ca.addEventListener(t,e,zS?{capture:r,passive:n}:r)}function pT(t,e,r,n){(n||ca).removeEventListener(t,e._wrapper||e,r)}function Mw(t,e){if(!(ue(t.data.on)&&ue(e.data.on))){var r=e.data.on||{},n=t.data.on||{};ca=e.elm,ZP(r),XS(r,n,r1,pT,e1,e.context),ca=void 0}}var n1={create:Mw,update:Mw},xc;function Fw(t,e){if(!(ue(t.data.domProps)&&ue(e.data.domProps))){var r,n,i=e.elm,s=t.data.domProps||{},o=e.data.domProps||{};C(o.__ob__)&&(o=e.data.domProps=Oe({},o));for(r in s)r in o||(i[r]="");for(r in o){if(n=o[r],r==="textContent"||r==="innerHTML"){if(e.children&&(e.children.length=0),n===s[r])continue;i.childNodes.length===1&&i.removeChild(i.childNodes[0])}if(r==="value"&&i.tagName!=="PROGRESS"){i._value=n;var a=ue(n)?"":String(n);i1(i,a)&&(i.value=a)}else if(r==="innerHTML"&&zv(i.tagName)&&ue(i.innerHTML)){xc=xc||document.createElement("div"),xc.innerHTML="<svg>"+n+"</svg>";for(var c=xc.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;c.firstChild;)i.appendChild(c.firstChild)}else if(n!==s[r])try{i[r]=n}catch{}}}}function i1(t,e){return!t.composing&&(t.tagName==="OPTION"||s1(t,e)||o1(t,e))}function s1(t,e){var r=!0;try{r=document.activeElement!==t}catch{}return r&&t.value!==e}function o1(t,e){var r=t.value,n=t._vModifiers;if(C(n)){if(n.number)return ia(r)!==ia(e);if(n.trim)return r.trim()!==e.trim()}return r!==e}var a1={create:Fw,update:Fw},c1=$i(function(t){var e={},r=/;(?![^(]*\))/g,n=/:(.+)/;return t.split(r).forEach(function(i){if(i){var s=i.split(n);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e});function mf(t){var e=vT(t.style);return t.staticStyle?Oe(t.staticStyle,e):e}function vT(t){return Array.isArray(t)?jS(t):typeof t=="string"?c1(t):t}function u1(t,e){var r={},n;if(e)for(var i=t;i.componentInstance;)i=i.componentInstance._vnode,i&&i.data&&(n=mf(i.data))&&Oe(r,n);(n=mf(t.data))&&Oe(r,n);for(var s=t;s=s.parent;)s.data&&(n=mf(s.data))&&Oe(r,n);return r}var l1=/^--/,Uw=/\s*!important$/,jw=function(t,e,r){if(l1.test(e))t.style.setProperty(e,r);else if(Uw.test(r))t.style.setProperty(ja(e),r.replace(Uw,""),"important");else{var n=h1(e);if(Array.isArray(r))for(var i=0,s=r.length;i<s;i++)t.style[n]=r[i];else t.style[n]=r}},Bw=["Webkit","Moz","ms"],Nc,h1=$i(function(t){if(Nc=Nc||document.createElement("div").style,t=hi(t),t!=="filter"&&t in Nc)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),r=0;r<Bw.length;r++){var n=Bw[r]+e;if(n in Nc)return n}});function Vw(t,e){var r=e.data,n=t.data;if(!(ue(r.staticStyle)&&ue(r.style)&&ue(n.staticStyle)&&ue(n.style))){var i,s,o=e.elm,a=n.staticStyle,c=n.normalizedStyle||n.style||{},u=a||c,l=vT(e.data.style)||{};e.data.normalizedStyle=C(l.__ob__)?Oe({},l):l;var h=u1(e,!0);for(s in u)ue(h[s])&&jw(o,s,"");for(s in h)i=h[s],i!==u[s]&&jw(o,s,i==null?"":i)}}var f1={create:Vw,update:Vw},gT=/\s+/;function mT(t,e){if(!(!e||!(e=e.trim())))if(t.classList)e.indexOf(" ")>-1?e.split(gT).forEach(function(n){return t.classList.add(n)}):t.classList.add(e);else{var r=" "+(t.getAttribute("class")||"")+" ";r.indexOf(" "+e+" ")<0&&t.setAttribute("class",(r+e).trim())}}function yT(t,e){if(!(!e||!(e=e.trim())))if(t.classList)e.indexOf(" ")>-1?e.split(gT).forEach(function(i){return t.classList.remove(i)}):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{for(var r=" "+(t.getAttribute("class")||"")+" ",n=" "+e+" ";r.indexOf(n)>=0;)r=r.replace(n," ");r=r.trim(),r?t.setAttribute("class",r):t.removeAttribute("class")}}function wT(t){if(!!t){if(typeof t=="object"){var e={};return t.css!==!1&&Oe(e,qw(t.name||"v")),Oe(e,t),e}else if(typeof t=="string")return qw(t)}}var qw=$i(function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}}),bT=Jt&&!to,hs="transition",yf="animation",pu="transition",zu="transitionend",lp="animation",_T="animationend";bT&&(window.ontransitionend===void 0&&window.onwebkittransitionend!==void 0&&(pu="WebkitTransition",zu="webkitTransitionEnd"),window.onanimationend===void 0&&window.onwebkitanimationend!==void 0&&(lp="WebkitAnimation",_T="webkitAnimationEnd"));var Ww=Jt?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function ET(t){Ww(function(){Ww(t)})}function ri(t,e){var r=t._transitionClasses||(t._transitionClasses=[]);r.indexOf(e)<0&&(r.push(e),mT(t,e))}function zr(t,e){t._transitionClasses&&nn(t._transitionClasses,e),yT(t,e)}function IT(t,e,r){var n=ST(t,e),i=n.type,s=n.timeout,o=n.propCount;if(!i)return r();var a=i===hs?zu:_T,c=0,u=function(){t.removeEventListener(a,l),r()},l=function(h){h.target===t&&++c>=o&&u()};setTimeout(function(){c<o&&u()},s+1),t.addEventListener(a,l)}var d1=/\b(transform|all)(,|$)/;function ST(t,e){var r=window.getComputedStyle(t),n=(r[pu+"Delay"]||"").split(", "),i=(r[pu+"Duration"]||"").split(", "),s=zw(n,i),o=(r[lp+"Delay"]||"").split(", "),a=(r[lp+"Duration"]||"").split(", "),c=zw(o,a),u,l=0,h=0;e===hs?s>0&&(u=hs,l=s,h=i.length):e===yf?c>0&&(u=yf,l=c,h=a.length):(l=Math.max(s,c),u=l>0?s>c?hs:yf:null,h=u?u===hs?i.length:a.length:0);var f=u===hs&&d1.test(r[pu+"Property"]);return{type:u,timeout:l,propCount:h,hasTransform:f}}function zw(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max.apply(null,e.map(function(r,n){return Gw(r)+Gw(t[n])}))}function Gw(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function hp(t,e){var r=t.elm;C(r._leaveCb)&&(r._leaveCb.cancelled=!0,r._leaveCb());var n=wT(t.data.transition);if(!ue(n)&&!(C(r._enterCb)||r.nodeType!==1)){for(var i=n.css,s=n.type,o=n.enterClass,a=n.enterToClass,c=n.enterActiveClass,u=n.appearClass,l=n.appearToClass,h=n.appearActiveClass,f=n.beforeEnter,p=n.enter,g=n.afterEnter,E=n.enterCancelled,I=n.beforeAppear,O=n.appear,P=n.afterAppear,q=n.appearCancelled,G=n.duration,k=ti,x=ti.$vnode;x&&x.parent;)k=x.context,x=x.parent;var w=!k._isMounted||!t.isRootInsert;if(!(w&&!O&&O!=="")){var R=w&&u?u:o,H=w&&h?h:c,ne=w&&l?l:a,we=w&&I||f,T=w&&typeof O=="function"?O:p,A=w&&P||g,D=w&&q||E,Y=ia(Pt(G)?G.enter:G),te=i!==!1&&!to,ae=Gv(T),ie=r._enterCb=Mu(function(){te&&(zr(r,ne),zr(r,H)),ie.cancelled?(te&&zr(r,R),D&&D(r)):A&&A(r),r._enterCb=null});t.data.show||_n(t,"insert",function(){var he=r.parentNode,pe=he&&he._pending&&he._pending[t.key];pe&&pe.tag===t.tag&&pe.elm._leaveCb&&pe.elm._leaveCb(),T&&T(r,ie)}),we&&we(r),te&&(ri(r,R),ri(r,H),ET(function(){zr(r,R),ie.cancelled||(ri(r,ne),ae||(AT(Y)?setTimeout(ie,Y):IT(r,s,ie)))})),t.data.show&&(e&&e(),T&&T(r,ie)),!te&&!ae&&ie()}}}function TT(t,e){var r=t.elm;C(r._enterCb)&&(r._enterCb.cancelled=!0,r._enterCb());var n=wT(t.data.transition);if(ue(n)||r.nodeType!==1)return e();if(C(r._leaveCb))return;var i=n.css,s=n.type,o=n.leaveClass,a=n.leaveToClass,c=n.leaveActiveClass,u=n.beforeLeave,l=n.leave,h=n.afterLeave,f=n.leaveCancelled,p=n.delayLeave,g=n.duration,E=i!==!1&&!to,I=Gv(l),O=ia(Pt(g)?g.leave:g),P=r._leaveCb=Mu(function(){r.parentNode&&r.parentNode._pending&&(r.parentNode._pending[t.key]=null),E&&(zr(r,a),zr(r,c)),P.cancelled?(E&&zr(r,o),f&&f(r)):(e(),h&&h(r)),r._leaveCb=null});p?p(q):q();function q(){P.cancelled||(!t.data.show&&r.parentNode&&((r.parentNode._pending||(r.parentNode._pending={}))[t.key]=t),u&&u(r),E&&(ri(r,o),ri(r,c),ET(function(){zr(r,o),P.cancelled||(ri(r,a),I||(AT(O)?setTimeout(P,O):IT(r,s,P)))})),l&&l(r,P),!E&&!I&&P())}}function AT(t){return typeof t=="number"&&!isNaN(t)}function Gv(t){if(ue(t))return!1;var e=t.fns;return C(e)?Gv(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Kw(t,e){e.data.show!==!0&&hp(e)}var p1=Jt?{create:Kw,activate:Kw,remove:function(e,r){e.data.show!==!0?TT(e,r):r()}}:{},v1=[QP,JP,n1,a1,f1,p1],g1=v1.concat(XP),m1=zP({nodeOps:BP,modules:g1});to&&document.addEventListener("selectionchange",function(){var t=document.activeElement;t&&t.vmodel&&Kv(t,"input")});var OT={inserted:function(e,r,n,i){n.tag==="select"?(i.elm&&!i.elm._vOptions?_n(n,"postpatch",function(){OT.componentUpdated(e,r,n)}):Hw(e,r,n.context),e._vOptions=[].map.call(e.options,Gu)):(n.tag==="textarea"||up(e.type))&&(e._vModifiers=r.modifiers,r.modifiers.lazy||(e.addEventListener("compositionstart",y1),e.addEventListener("compositionend",Qw),e.addEventListener("change",Qw),to&&(e.vmodel=!0)))},componentUpdated:function(e,r,n){if(n.tag==="select"){Hw(e,r,n.context);var i=e._vOptions,s=e._vOptions=[].map.call(e.options,Gu);if(s.some(function(a,c){return!fi(a,i[c])})){var o=e.multiple?r.value.some(function(a){return Xw(a,s)}):r.value!==r.oldValue&&Xw(r.value,s);o&&Kv(e,"change")}}}};function Hw(t,e,r){Yw(t,e),(eo||Ov)&&setTimeout(function(){Yw(t,e)},0)}function Yw(t,e,r){var n=e.value,i=t.multiple;if(!(i&&!Array.isArray(n))){for(var s,o,a=0,c=t.options.length;a<c;a++)if(o=t.options[a],i)s=VS(n,Gu(o))>-1,o.selected!==s&&(o.selected=s);else if(fi(Gu(o),n)){t.selectedIndex!==a&&(t.selectedIndex=a);return}i||(t.selectedIndex=-1)}}function Xw(t,e){return e.every(function(r){return!fi(r,t)})}function Gu(t){return"_value"in t?t._value:t.value}function y1(t){t.target.composing=!0}function Qw(t){!t.target.composing||(t.target.composing=!1,Kv(t.target,"input"))}function Kv(t,e){var r=document.createEvent("HTMLEvents");r.initEvent(e,!0,!0),t.dispatchEvent(r)}function fp(t){return t.componentInstance&&(!t.data||!t.data.transition)?fp(t.componentInstance._vnode):t}var w1={bind:function(e,r,n){var i=r.value;n=fp(n);var s=n.data&&n.data.transition,o=e.__vOriginalDisplay=e.style.display==="none"?"":e.style.display;i&&s?(n.data.show=!0,hp(n,function(){e.style.display=o})):e.style.display=i?o:"none"},update:function(e,r,n){var i=r.value,s=r.oldValue;if(!i!=!s){n=fp(n);var o=n.data&&n.data.transition;o?(n.data.show=!0,i?hp(n,function(){e.style.display=e.__vOriginalDisplay}):TT(n,function(){e.style.display="none"})):e.style.display=i?e.__vOriginalDisplay:"none"}},unbind:function(e,r,n,i,s){s||(e.style.display=e.__vOriginalDisplay)}},b1={model:OT,show:w1},CT={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function dp(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?dp(iT(e.children)):t}function RT(t){var e={},r=t.$options;for(var n in r.propsData)e[n]=t[n];var i=r._parentListeners;for(var s in i)e[hi(s)]=i[s];return e}function Jw(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function _1(t){for(;t=t.parent;)if(t.data.transition)return!0}function E1(t,e){return e.key===t.key&&e.tag===t.tag}var I1=function(t){return t.tag||oa(t)},S1=function(t){return t.name==="show"},T1={name:"transition",props:CT,abstract:!0,render:function(e){var r=this,n=this.$slots.default;if(!!n&&(n=n.filter(I1),!!n.length)){var i=this.mode,s=n[0];if(_1(this.$vnode))return s;var o=dp(s);if(!o)return s;if(this._leaving)return Jw(e,s);var a="__transition-"+this._uid+"-";o.key=o.key==null?o.isComment?a+"comment":a+o.tag:Ua(o.key)?String(o.key).indexOf(a)===0?o.key:a+o.key:o.key;var c=(o.data||(o.data={})).transition=RT(this),u=this._vnode,l=dp(u);if(o.data.directives&&o.data.directives.some(S1)&&(o.data.show=!0),l&&l.data&&!E1(o,l)&&!oa(l)&&!(l.componentInstance&&l.componentInstance._vnode.isComment)){var h=l.data.transition=Oe({},c);if(i==="out-in")return this._leaving=!0,_n(h,"afterLeave",function(){r._leaving=!1,r.$forceUpdate()}),Jw(e,s);if(i==="in-out"){if(oa(o))return u;var f,p=function(){f()};_n(c,"afterEnter",p),_n(c,"enterCancelled",p),_n(h,"delayLeave",function(g){f=g})}}return s}}},$T=Oe({tag:String,moveClass:String},CT);delete $T.mode;var A1={props:$T,beforeMount:function(){var e=this,r=this._update;this._update=function(n,i){var s=oT(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,s(),r.call(e,n,i)}},render:function(e){for(var r=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),i=this.prevChildren=this.children,s=this.$slots.default||[],o=this.children=[],a=RT(this),c=0;c<s.length;c++){var u=s[c];u.tag&&u.key!=null&&String(u.key).indexOf("__vlist")!==0&&(o.push(u),n[u.key]=u,(u.data||(u.data={})).transition=a)}if(i){for(var l=[],h=[],f=0;f<i.length;f++){var p=i[f];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?l.push(p):h.push(p)}this.kept=e(r,null,l),this.removed=h}return e(r,null,o)},updated:function(){var e=this.prevChildren,r=this.moveClass||(this.name||"v")+"-move";!e.length||!this.hasMove(e[0].elm,r)||(e.forEach(O1),e.forEach(C1),e.forEach(R1),this._reflow=document.body.offsetHeight,e.forEach(function(n){if(n.data.moved){var i=n.elm,s=i.style;ri(i,r),s.transform=s.WebkitTransform=s.transitionDuration="",i.addEventListener(zu,i._moveCb=function o(a){a&&a.target!==i||(!a||/transform$/.test(a.propertyName))&&(i.removeEventListener(zu,o),i._moveCb=null,zr(i,r))})}}))},methods:{hasMove:function(e,r){if(!bT)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(s){yT(n,s)}),mT(n,r),n.style.display="none",this.$el.appendChild(n);var i=ST(n);return this.$el.removeChild(n),this._hasMove=i.hasTransform}}};function O1(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function C1(t){t.data.newPos=t.elm.getBoundingClientRect()}function R1(t){var e=t.data.pos,r=t.data.newPos,n=e.left-r.left,i=e.top-r.top;if(n||i){t.data.moved=!0;var s=t.elm.style;s.transform=s.WebkitTransform="translate("+n+"px,"+i+"px)",s.transitionDuration="0s"}}var $1={Transition:T1,TransitionGroup:A1};We.config.mustUseProp=gP;We.config.isReservedTag=dT;We.config.isReservedAttr=pP;We.config.getTagNamespace=AP;We.config.isUnknownElement=OP;Oe(We.options.directives,b1);Oe(We.options.components,$1);We.prototype.__patch__=Jt?m1:jt;We.prototype.$mount=function(t,e){return t=t&&Jt?CP(t):void 0,MN(this,t,e)};Jt&&setTimeout(function(){ir.devtools&&Fu&&Fu.emit("init",We)},0);var ete=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:We}),Xe=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function tte(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function rte(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach(function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})}),e}function Pc(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var k1=function(t){return t.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()},x1=k1,N1=x1,P1=function(t){var e=/[height|width]$/;return e.test(t)},Zw=function(t){var e="",r=Object.keys(t);return r.forEach(function(n,i){var s=t[n];n=N1(n),P1(n)&&typeof s=="number"&&(s=s+"px"),s===!0?e+=n:s===!1?e+="not "+n:e+="("+n+": "+s+")",i<r.length-1&&(e+=" and ")}),e},D1=function(t){var e="";return typeof t=="string"?t:t instanceof Array?(t.forEach(function(r,n){e+=Zw(r),n<t.length-1&&(e+=", ")}),e):Zw(t)},L1=D1;function M1(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function F1(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}else return Array.from(t)}function U1(t){var e=Object.keys(t),r=e.map(function(s){return t[s]}),n=[0].concat(F1(r.slice(0,-1))),i=n.reduce(function(s,o,a){var c=Object.assign({minWidth:o},a<e.length-1?{maxWidth:n[a+1]-1}:{}),u=L1(c);return Object.assign(s,M1({},e[a],u))},{});return i}function j1(t,e,r){var n=function i(s){if(e[s]!==void 0)return e[s];var o=t.findIndex(function(c){return c===s}),a=o!==-1||o!==0?t[o-1]:null;return a?e[a]!==void 0?e[a]:i(a):e[o]};return n(r)}function B1(t,e){var r=t.findIndex(function(n){return n===e});return t.slice(r)}function V1(t,e){var r=window.matchMedia(t),n=function(s){var o=s.matches;o&&e()};r.addListener(n),n(r)}function eb(t){return Object.prototype.toString.call(t)==="[object Array]"}var q1={props:{mq:{required:!0,type:[String,Array]}},computed:{plusModifier:function(){return!eb(this.mq)&&this.mq.slice(-1)==="+"},activeBreakpoints:function(){var e=Object.keys(this.$mqAvailableBreakpoints),r=this.plusModifier?this.mq.slice(0,-1):eb(this.mq)?this.mq:[this.mq];return this.plusModifier?B1(e,r):r}},render:function(e,r){var n=this.activeBreakpoints.includes(this.$mq);return n?e("div",this.$slots.default):e()}},W1={sm:450,md:1250,lg:1/0},z1=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.breakpoints,i=n===void 0?W1:n,s=r.defaultBreakpoint,o=s===void 0?"sm":s,a=!1,c=new e({data:function(){return{currentBreakpoint:o}}});e.filter("mq",function(u,l){return j1(Object.keys(i),l,u)}),e.mixin({computed:{$mq:function(){return c.currentBreakpoint}},created:function(){this.$isServer&&(c.currentBreakpoint=o)},mounted:function(){if(!a){var l=U1(i),h=function(g){var E=l[g],I=function(){c.currentBreakpoint=g};V1(E,I)};for(var f in l)h(f);a=!0}}}),e.prototype.$mqAvailableBreakpoints=i,e.component("MqLayout",q1)},nte={install:z1},Dc=function(t){return t&&t.Math==Math&&t},De=Dc(typeof globalThis=="object"&&globalThis)||Dc(typeof window=="object"&&window)||Dc(typeof self=="object"&&self)||Dc(typeof Xe=="object"&&Xe)||function(){return this}()||Function("return this")(),Hv={},br=function(t){try{return!!t()}catch{return!0}},G1=br,ki=!G1(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),K1=br,kT=!K1(function(){var t=function(){}.bind();return typeof t!="function"||t.hasOwnProperty("prototype")}),H1=kT,Lc=Function.prototype.call,ql=H1?Lc.bind(Lc):function(){return Lc.apply(Lc,arguments)},Yv={},xT={}.propertyIsEnumerable,NT=Object.getOwnPropertyDescriptor,Y1=NT&&!xT.call({1:2},1);Yv.f=Y1?function(e){var r=NT(this,e);return!!r&&r.enumerable}:xT;var Xv=function(t,e){return{enumerable:!(t&1),configurable:!(t&2),writable:!(t&4),value:e}},PT=kT,DT=Function.prototype,X1=DT.bind,pp=DT.call,Q1=PT&&X1.bind(pp,pp),_r=PT?function(t){return t&&Q1(t)}:function(t){return t&&function(){return pp.apply(t,arguments)}},LT=_r,J1=LT({}.toString),Z1=LT("".slice),Qv=function(t){return Z1(J1(t),8,-1)},eD=De,tD=_r,rD=br,nD=Qv,wf=eD.Object,iD=tD("".split),MT=rD(function(){return!wf("z").propertyIsEnumerable(0)})?function(t){return nD(t)=="String"?iD(t,""):wf(t)}:wf,sD=De,oD=sD.TypeError,FT=function(t){if(t==null)throw oD("Can't call method on "+t);return t},aD=MT,cD=FT,Jv=function(t){return aD(cD(t))},Er=function(t){return typeof t=="function"},uD=Er,xi=function(t){return typeof t=="object"?t!==null:uD(t)},bf=De,lD=Er,hD=function(t){return lD(t)?t:void 0},Wl=function(t,e){return arguments.length<2?hD(bf[t]):bf[t]&&bf[t][e]},fD=_r,dD=fD({}.isPrototypeOf),pD=Wl,vD=pD("navigator","userAgent")||"",UT=De,_f=vD,tb=UT.process,rb=UT.Deno,nb=tb&&tb.versions||rb&&rb.version,ib=nb&&nb.v8,lr,Ku;ib&&(lr=ib.split("."),Ku=lr[0]>0&&lr[0]<4?1:+(lr[0]+lr[1]));!Ku&&_f&&(lr=_f.match(/Edge\/(\d+)/),(!lr||lr[1]>=74)&&(lr=_f.match(/Chrome\/(\d+)/),lr&&(Ku=+lr[1])));var Zv=Ku,sb=Zv,gD=br,jT=!!Object.getOwnPropertySymbols&&!gD(function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&sb&&sb<41}),mD=jT,BT=mD&&!Symbol.sham&&typeof Symbol.iterator=="symbol",yD=De,wD=Wl,bD=Er,_D=dD,ED=BT,ID=yD.Object,VT=ED?function(t){return typeof t=="symbol"}:function(t){var e=wD("Symbol");return bD(e)&&_D(e.prototype,ID(t))},SD=De,TD=SD.String,AD=function(t){try{return TD(t)}catch{return"Object"}},OD=De,CD=Er,RD=AD,$D=OD.TypeError,kD=function(t){if(CD(t))return t;throw $D(RD(t)+" is not a function")},xD=kD,ND=function(t,e){var r=t[e];return r==null?void 0:xD(r)},PD=De,Ef=ql,If=Er,Sf=xi,DD=PD.TypeError,LD=function(t,e){var r,n;if(e==="string"&&If(r=t.toString)&&!Sf(n=Ef(r,t))||If(r=t.valueOf)&&!Sf(n=Ef(r,t))||e!=="string"&&If(r=t.toString)&&!Sf(n=Ef(r,t)))return n;throw DD("Can't convert object to primitive value")},eg={exports:{}},ob=De,MD=Object.defineProperty,tg=function(t,e){try{MD(ob,t,{value:e,configurable:!0,writable:!0})}catch{ob[t]=e}return e},FD=De,UD=tg,ab="__core-js_shared__",jD=FD[ab]||UD(ab,{}),rg=jD,cb=rg;(eg.exports=function(t,e){return cb[t]||(cb[t]=e!==void 0?e:{})})("versions",[]).push({version:"3.21.0",mode:"global",copyright:"\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.0/LICENSE",source:"https://github.com/zloirock/core-js"});var BD=De,VD=FT,qD=BD.Object,ng=function(t){return qD(VD(t))},WD=_r,zD=ng,GD=WD({}.hasOwnProperty),Ni=Object.hasOwn||function(e,r){return GD(zD(e),r)},KD=_r,HD=0,YD=Math.random(),XD=KD(1 .toString),qT=function(t){return"Symbol("+(t===void 0?"":t)+")_"+XD(++HD+YD,36)},QD=De,JD=eg.exports,ub=Ni,ZD=qT,lb=jT,WT=BT,Zi=JD("wks"),ni=QD.Symbol,hb=ni&&ni.for,eL=WT?ni:ni&&ni.withoutSetter||ZD,ro=function(t){if(!ub(Zi,t)||!(lb||typeof Zi[t]=="string")){var e="Symbol."+t;lb&&ub(ni,t)?Zi[t]=ni[t]:WT&&hb?Zi[t]=hb(e):Zi[t]=eL(e)}return Zi[t]},tL=De,rL=ql,fb=xi,db=VT,nL=ND,iL=LD,sL=ro,oL=tL.TypeError,aL=sL("toPrimitive"),cL=function(t,e){if(!fb(t)||db(t))return t;var r=nL(t,aL),n;if(r){if(e===void 0&&(e="default"),n=rL(r,t,e),!fb(n)||db(n))return n;throw oL("Can't convert object to primitive value")}return e===void 0&&(e="number"),iL(t,e)},uL=cL,lL=VT,ig=function(t){var e=uL(t,"string");return lL(e)?e:e+""},hL=De,pb=xi,vp=hL.document,fL=pb(vp)&&pb(vp.createElement),dL=function(t){return fL?vp.createElement(t):{}},pL=ki,vL=br,gL=dL,zT=!pL&&!vL(function(){return Object.defineProperty(gL("div"),"a",{get:function(){return 7}}).a!=7}),mL=ki,yL=ql,wL=Yv,bL=Xv,_L=Jv,EL=ig,IL=Ni,SL=zT,vb=Object.getOwnPropertyDescriptor;Hv.f=mL?vb:function(e,r){if(e=_L(e),r=EL(r),SL)try{return vb(e,r)}catch{}if(IL(e,r))return bL(!yL(wL.f,e,r),e[r])};var zl={},TL=ki,AL=br,OL=TL&&AL(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42}),GT=De,CL=xi,RL=GT.String,$L=GT.TypeError,KT=function(t){if(CL(t))return t;throw $L(RL(t)+" is not an object")},kL=De,xL=ki,NL=zT,PL=OL,Mc=KT,gb=ig,DL=kL.TypeError,Tf=Object.defineProperty,LL=Object.getOwnPropertyDescriptor,Af="enumerable",Of="configurable",Cf="writable";zl.f=xL?PL?function(e,r,n){if(Mc(e),r=gb(r),Mc(n),typeof e=="function"&&r==="prototype"&&"value"in n&&Cf in n&&!n[Cf]){var i=LL(e,r);i&&i[Cf]&&(e[r]=n.value,n={configurable:Of in n?n[Of]:i[Of],enumerable:Af in n?n[Af]:i[Af],writable:!1})}return Tf(e,r,n)}:Tf:function(e,r,n){if(Mc(e),r=gb(r),Mc(n),NL)try{return Tf(e,r,n)}catch{}if("get"in n||"set"in n)throw DL("Accessors not supported");return"value"in n&&(e[r]=n.value),e};var ML=ki,FL=zl,UL=Xv,sg=ML?function(t,e,r){return FL.f(t,e,UL(1,r))}:function(t,e,r){return t[e]=r,t},HT={exports:{}},jL=_r,BL=Er,gp=rg,VL=jL(Function.toString);BL(gp.inspectSource)||(gp.inspectSource=function(t){return VL(t)});var og=gp.inspectSource,qL=De,WL=Er,zL=og,mb=qL.WeakMap,GL=WL(mb)&&/native code/.test(zL(mb)),KL=eg.exports,HL=qT,yb=KL("keys"),YL=function(t){return yb[t]||(yb[t]=HL(t))},YT={},XL=GL,XT=De,Rf=_r,QL=xi,JL=sg,$f=Ni,kf=rg,ZL=YL,eM=YT,wb="Object already initialized",mp=XT.TypeError,tM=XT.WeakMap,Hu,ua,Yu,rM=function(t){return Yu(t)?ua(t):Hu(t,{})},nM=function(t){return function(e){var r;if(!QL(e)||(r=ua(e)).type!==t)throw mp("Incompatible receiver, "+t+" required");return r}};if(XL||kf.state){var qn=kf.state||(kf.state=new tM),iM=Rf(qn.get),bb=Rf(qn.has),sM=Rf(qn.set);Hu=function(t,e){if(bb(qn,t))throw new mp(wb);return e.facade=t,sM(qn,t,e),e},ua=function(t){return iM(qn,t)||{}},Yu=function(t){return bb(qn,t)}}else{var es=ZL("state");eM[es]=!0,Hu=function(t,e){if($f(t,es))throw new mp(wb);return e.facade=t,JL(t,es,e),e},ua=function(t){return $f(t,es)?t[es]:{}},Yu=function(t){return $f(t,es)}}var oM={set:Hu,get:ua,has:Yu,enforce:rM,getterFor:nM},yp=ki,aM=Ni,QT=Function.prototype,cM=yp&&Object.getOwnPropertyDescriptor,ag=aM(QT,"name"),uM=ag&&function(){}.name==="something",lM=ag&&(!yp||yp&&cM(QT,"name").configurable),hM={EXISTS:ag,PROPER:uM,CONFIGURABLE:lM},fM=De,_b=Er,dM=Ni,Eb=sg,pM=tg,vM=og,JT=oM,gM=hM.CONFIGURABLE,mM=JT.get,yM=JT.enforce,wM=String(String).split("String");(HT.exports=function(t,e,r,n){var i=n?!!n.unsafe:!1,s=n?!!n.enumerable:!1,o=n?!!n.noTargetGet:!1,a=n&&n.name!==void 0?n.name:e,c;if(_b(r)&&(String(a).slice(0,7)==="Symbol("&&(a="["+String(a).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!dM(r,"name")||gM&&r.name!==a)&&Eb(r,"name",a),c=yM(r),c.source||(c.source=wM.join(typeof a=="string"?a:""))),t===fM){s?t[e]=r:pM(e,r);return}else i?!o&&t[e]&&(s=!0):delete t[e];s?t[e]=r:Eb(t,e,r)})(Function.prototype,"toString",function(){return _b(this)&&mM(this).source||vM(this)});var ZT={},bM=Math.ceil,_M=Math.floor,e0=function(t){var e=+t;return e!==e||e===0?0:(e>0?_M:bM)(e)},EM=e0,IM=Math.max,SM=Math.min,TM=function(t,e){var r=EM(t);return r<0?IM(r+e,0):SM(r,e)},AM=e0,OM=Math.min,CM=function(t){return t>0?OM(AM(t),9007199254740991):0},RM=CM,t0=function(t){return RM(t.length)},$M=Jv,kM=TM,xM=t0,Ib=function(t){return function(e,r,n){var i=$M(e),s=xM(i),o=kM(n,s),a;if(t&&r!=r){for(;s>o;)if(a=i[o++],a!=a)return!0}else for(;s>o;o++)if((t||o in i)&&i[o]===r)return t||o||0;return!t&&-1}},NM={includes:Ib(!0),indexOf:Ib(!1)},PM=_r,xf=Ni,DM=Jv,LM=NM.indexOf,MM=YT,Sb=PM([].push),r0=function(t,e){var r=DM(t),n=0,i=[],s;for(s in r)!xf(MM,s)&&xf(r,s)&&Sb(i,s);for(;e.length>n;)xf(r,s=e[n++])&&(~LM(i,s)||Sb(i,s));return i},n0=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],FM=r0,UM=n0,jM=UM.concat("length","prototype");ZT.f=Object.getOwnPropertyNames||function(e){return FM(e,jM)};var cg={};cg.f=Object.getOwnPropertySymbols;var BM=Wl,VM=_r,qM=ZT,WM=cg,zM=KT,GM=VM([].concat),KM=BM("Reflect","ownKeys")||function(e){var r=qM.f(zM(e)),n=WM.f;return n?GM(r,n(e)):r},Tb=Ni,HM=KM,YM=Hv,XM=zl,QM=function(t,e,r){for(var n=HM(e),i=XM.f,s=YM.f,o=0;o<n.length;o++){var a=n[o];!Tb(t,a)&&!(r&&Tb(r,a))&&i(t,a,s(e,a))}},JM=br,ZM=Er,eF=/#|\.prototype\./,qa=function(t,e){var r=rF[tF(t)];return r==iF?!0:r==nF?!1:ZM(e)?JM(e):!!e},tF=qa.normalize=function(t){return String(t).replace(eF,".").toLowerCase()},rF=qa.data={},nF=qa.NATIVE="N",iF=qa.POLYFILL="P",sF=qa,Nf=De,oF=Hv.f,aF=sg,cF=HT.exports,uF=tg,lF=QM,hF=sF,i0=function(t,e){var r=t.target,n=t.global,i=t.stat,s,o,a,c,u,l;if(n?o=Nf:i?o=Nf[r]||uF(r,{}):o=(Nf[r]||{}).prototype,o)for(a in e){if(u=e[a],t.noTargetGet?(l=oF(o,a),c=l&&l.value):c=o[a],s=hF(n?a:r+(i?".":"#")+a,t.forced),!s&&c!==void 0){if(typeof u==typeof c)continue;lF(u,c)}(t.sham||c&&c.sham)&&aF(u,"sham",!0),cF(o,a,u,t)}},fF=Qv,s0=Array.isArray||function(e){return fF(e)=="Array"},dF=ig,pF=zl,vF=Xv,gF=function(t,e,r){var n=dF(e);n in t?pF.f(t,n,vF(0,r)):t[n]=r},mF=ro,yF=mF("toStringTag"),o0={};o0[yF]="z";var wF=String(o0)==="[object z]",bF=De,_F=wF,EF=Er,vu=Qv,IF=ro,SF=IF("toStringTag"),TF=bF.Object,AF=vu(function(){return arguments}())=="Arguments",OF=function(t,e){try{return t[e]}catch{}},CF=_F?vu:function(t){var e,r,n;return t===void 0?"Undefined":t===null?"Null":typeof(r=OF(e=TF(t),SF))=="string"?r:AF?vu(e):(n=vu(e))=="Object"&&EF(e.callee)?"Arguments":n},RF=_r,$F=br,a0=Er,kF=CF,xF=Wl,NF=og,c0=function(){},PF=[],u0=xF("Reflect","construct"),ug=/^\s*(?:class|function)\b/,DF=RF(ug.exec),LF=!ug.exec(c0),ko=function(e){if(!a0(e))return!1;try{return u0(c0,PF,e),!0}catch{return!1}},l0=function(e){if(!a0(e))return!1;switch(kF(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return LF||!!DF(ug,NF(e))}catch{return!0}};l0.sham=!0;var MF=!u0||$F(function(){var t;return ko(ko.call)||!ko(Object)||!ko(function(){t=!0})||t})?l0:ko,FF=De,Ab=s0,UF=MF,jF=xi,BF=ro,VF=BF("species"),Ob=FF.Array,qF=function(t){var e;return Ab(t)&&(e=t.constructor,UF(e)&&(e===Ob||Ab(e.prototype))?e=void 0:jF(e)&&(e=e[VF],e===null&&(e=void 0))),e===void 0?Ob:e},WF=qF,zF=function(t,e){return new(WF(t))(e===0?0:e)},GF=br,KF=ro,HF=Zv,YF=KF("species"),XF=function(t){return HF>=51||!GF(function(){var e=[],r=e.constructor={};return r[YF]=function(){return{foo:1}},e[t](Boolean).foo!==1})},QF=i0,JF=De,ZF=br,eU=s0,tU=xi,rU=ng,nU=t0,Cb=gF,iU=zF,sU=XF,oU=ro,aU=Zv,h0=oU("isConcatSpreadable"),Rb=9007199254740991,$b="Maximum allowed index exceeded",kb=JF.TypeError,cU=aU>=51||!ZF(function(){var t=[];return t[h0]=!1,t.concat()[0]!==t}),uU=sU("concat"),lU=function(t){if(!tU(t))return!1;var e=t[h0];return e!==void 0?!!e:eU(t)},hU=!cU||!uU;QF({target:"Array",proto:!0,forced:hU},{concat:function(e){var r=rU(this),n=iU(r,0),i=0,s,o,a,c,u;for(s=-1,a=arguments.length;s<a;s++)if(u=s===-1?r:arguments[s],lU(u)){if(c=nU(u),i+c>Rb)throw kb($b);for(o=0;o<c;o++,i++)o in u&&Cb(n,i,u[o])}else{if(i>=Rb)throw kb($b);Cb(n,i++,u)}return n.length=i,n}});var fU=r0,dU=n0,pU=Object.keys||function(e){return fU(e,dU)},xb=ki,vU=_r,gU=ql,mU=br,Pf=pU,yU=cg,wU=Yv,bU=ng,_U=MT,ts=Object.assign,Nb=Object.defineProperty,EU=vU([].concat),IU=!ts||mU(function(){if(xb&&ts({b:1},ts(Nb({},"a",{enumerable:!0,get:function(){Nb(this,"b",{value:3,enumerable:!1})}}),{b:2})).b!==1)return!0;var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach(function(i){e[i]=i}),ts({},t)[r]!=7||Pf(ts({},e)).join("")!=n})?function(e,r){for(var n=bU(e),i=arguments.length,s=1,o=yU.f,a=wU.f;i>s;)for(var c=_U(arguments[s++]),u=o?EU(Pf(c),o(c)):Pf(c),l=u.length,h=0,f;l>h;)f=u[h++],(!xb||gU(a,c,f))&&(n[f]=c[f]);return n}:ts,SU=i0,Pb=IU;SU({target:"Object",stat:!0,forced:Object.assign!==Pb},{assign:Pb});var Fc=function(t){return t&&t.Math==Math&&t},de=Fc(typeof globalThis=="object"&&globalThis)||Fc(typeof window=="object"&&window)||Fc(typeof self=="object"&&self)||Fc(typeof Xe=="object"&&Xe)||function(){return this}()||Function("return this")(),lg={},Le=function(t){try{return!!t()}catch{return!0}},TU=Le,Vr=!TU(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),AU=Le,Gl=!AU(function(){var t=function(){}.bind();return typeof t!="function"||t.hasOwnProperty("prototype")}),OU=Gl,Uc=Function.prototype.call,cr=OU?Uc.bind(Uc):function(){return Uc.apply(Uc,arguments)},hg={},f0={}.propertyIsEnumerable,d0=Object.getOwnPropertyDescriptor,CU=d0&&!f0.call({1:2},1);hg.f=CU?function(e){var r=d0(this,e);return!!r&&r.enumerable}:f0;var Kl=function(t,e){return{enumerable:!(t&1),configurable:!(t&2),writable:!(t&4),value:e}},p0=Gl,v0=Function.prototype,RU=v0.bind,wp=v0.call,$U=p0&&RU.bind(wp,wp),Ce=p0?function(t){return t&&$U(t)}:function(t){return t&&function(){return wp.apply(t,arguments)}},g0=Ce,kU=g0({}.toString),xU=g0("".slice),Pi=function(t){return xU(kU(t),8,-1)},NU=de,PU=Ce,DU=Le,LU=Pi,Df=NU.Object,MU=PU("".split),Hl=DU(function(){return!Df("z").propertyIsEnumerable(0)})?function(t){return LU(t)=="String"?MU(t,""):Df(t)}:Df,FU=de,UU=FU.TypeError,no=function(t){if(t==null)throw UU("Can't call method on "+t);return t},jU=Hl,BU=no,io=function(t){return jU(BU(t))},rt=function(t){return typeof t=="function"},VU=rt,ur=function(t){return typeof t=="object"?t!==null:VU(t)},Lf=de,qU=rt,WU=function(t){return qU(t)?t:void 0},Wa=function(t,e){return arguments.length<2?WU(Lf[t]):Lf[t]&&Lf[t][e]},zU=Ce,fg=zU({}.isPrototypeOf),GU=Wa,KU=GU("navigator","userAgent")||"",m0=de,Mf=KU,Db=m0.process,Lb=m0.Deno,Mb=Db&&Db.versions||Lb&&Lb.version,Fb=Mb&&Mb.v8,hr,Xu;Fb&&(hr=Fb.split("."),Xu=hr[0]>0&&hr[0]<4?1:+(hr[0]+hr[1]));!Xu&&Mf&&(hr=Mf.match(/Edge\/(\d+)/),(!hr||hr[1]>=74)&&(hr=Mf.match(/Chrome\/(\d+)/),hr&&(Xu=+hr[1])));var dg=Xu,Ub=dg,HU=Le,y0=!!Object.getOwnPropertySymbols&&!HU(function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&Ub&&Ub<41}),YU=y0,w0=YU&&!Symbol.sham&&typeof Symbol.iterator=="symbol",XU=de,QU=Wa,JU=rt,ZU=fg,ej=w0,tj=XU.Object,b0=ej?function(t){return typeof t=="symbol"}:function(t){var e=QU("Symbol");return JU(e)&&ZU(e.prototype,tj(t))},rj=de,nj=rj.String,pg=function(t){try{return nj(t)}catch{return"Object"}},ij=de,sj=rt,oj=pg,aj=ij.TypeError,Yl=function(t){if(sj(t))return t;throw aj(oj(t)+" is not a function")},cj=Yl,za=function(t,e){var r=t[e];return r==null?void 0:cj(r)},uj=de,Ff=cr,Uf=rt,jf=ur,lj=uj.TypeError,hj=function(t,e){var r,n;if(e==="string"&&Uf(r=t.toString)&&!jf(n=Ff(r,t))||Uf(r=t.valueOf)&&!jf(n=Ff(r,t))||e!=="string"&&Uf(r=t.toString)&&!jf(n=Ff(r,t)))return n;throw lj("Can't convert object to primitive value")},Xl={exports:{}},jb=de,fj=Object.defineProperty,vg=function(t,e){try{fj(jb,t,{value:e,configurable:!0,writable:!0})}catch{jb[t]=e}return e},dj=de,pj=vg,Bb="__core-js_shared__",vj=dj[Bb]||pj(Bb,{}),gg=vj,Vb=gg;(Xl.exports=function(t,e){return Vb[t]||(Vb[t]=e!==void 0?e:{})})("versions",[]).push({version:"3.21.0",mode:"global",copyright:"\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.0/LICENSE",source:"https://github.com/zloirock/core-js"});var gj=de,mj=no,yj=gj.Object,so=function(t){return yj(mj(t))},wj=Ce,bj=so,_j=wj({}.hasOwnProperty),Ir=Object.hasOwn||function(e,r){return _j(bj(e),r)},Ej=Ce,Ij=0,Sj=Math.random(),Tj=Ej(1 .toString),mg=function(t){return"Symbol("+(t===void 0?"":t)+")_"+Tj(++Ij+Sj,36)},Aj=de,Oj=Xl.exports,qb=Ir,Cj=mg,Wb=y0,_0=w0,rs=Oj("wks"),ii=Aj.Symbol,zb=ii&&ii.for,Rj=_0?ii:ii&&ii.withoutSetter||Cj,Dt=function(t){if(!qb(rs,t)||!(Wb||typeof rs[t]=="string")){var e="Symbol."+t;Wb&&qb(ii,t)?rs[t]=ii[t]:_0&&zb?rs[t]=zb(e):rs[t]=Rj(e)}return rs[t]},$j=de,kj=cr,Gb=ur,Kb=b0,xj=za,Nj=hj,Pj=Dt,Dj=$j.TypeError,Lj=Pj("toPrimitive"),Mj=function(t,e){if(!Gb(t)||Kb(t))return t;var r=xj(t,Lj),n;if(r){if(e===void 0&&(e="default"),n=kj(r,t,e),!Gb(n)||Kb(n))return n;throw Dj("Can't convert object to primitive value")}return e===void 0&&(e="number"),Nj(t,e)},Fj=Mj,Uj=b0,yg=function(t){var e=Fj(t,"string");return Uj(e)?e:e+""},jj=de,Hb=ur,bp=jj.document,Bj=Hb(bp)&&Hb(bp.createElement),wg=function(t){return Bj?bp.createElement(t):{}},Vj=Vr,qj=Le,Wj=wg,E0=!Vj&&!qj(function(){return Object.defineProperty(Wj("div"),"a",{get:function(){return 7}}).a!=7}),zj=Vr,Gj=cr,Kj=hg,Hj=Kl,Yj=io,Xj=yg,Qj=Ir,Jj=E0,Yb=Object.getOwnPropertyDescriptor;lg.f=zj?Yb:function(e,r){if(e=Yj(e),r=Xj(r),Jj)try{return Yb(e,r)}catch{}if(Qj(e,r))return Hj(!Gj(Kj.f,e,r),e[r])};var qr={},Zj=Vr,eB=Le,I0=Zj&&eB(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42}),S0=de,tB=ur,rB=S0.String,nB=S0.TypeError,Zt=function(t){if(tB(t))return t;throw nB(rB(t)+" is not an object")},iB=de,sB=Vr,oB=E0,aB=I0,jc=Zt,Xb=yg,cB=iB.TypeError,Bf=Object.defineProperty,uB=Object.getOwnPropertyDescriptor,Vf="enumerable",qf="configurable",Wf="writable";qr.f=sB?aB?function(e,r,n){if(jc(e),r=Xb(r),jc(n),typeof e=="function"&&r==="prototype"&&"value"in n&&Wf in n&&!n[Wf]){var i=uB(e,r);i&&i[Wf]&&(e[r]=n.value,n={configurable:qf in n?n[qf]:i[qf],enumerable:Vf in n?n[Vf]:i[Vf],writable:!1})}return Bf(e,r,n)}:Bf:function(e,r,n){if(jc(e),r=Xb(r),jc(n),oB)try{return Bf(e,r,n)}catch{}if("get"in n||"set"in n)throw cB("Accessors not supported");return"value"in n&&(e[r]=n.value),e};var lB=Vr,hB=qr,fB=Kl,Di=lB?function(t,e,r){return hB.f(t,e,fB(1,r))}:function(t,e,r){return t[e]=r,t},Dn={exports:{}},dB=Ce,pB=rt,_p=gg,vB=dB(Function.toString);pB(_p.inspectSource)||(_p.inspectSource=function(t){return vB(t)});var bg=_p.inspectSource,gB=de,mB=rt,yB=bg,Qb=gB.WeakMap,T0=mB(Qb)&&/native code/.test(yB(Qb)),wB=Xl.exports,bB=mg,Jb=wB("keys"),_g=function(t){return Jb[t]||(Jb[t]=bB(t))},Ql={},_B=T0,A0=de,zf=Ce,EB=ur,IB=Di,Gf=Ir,Kf=gg,SB=_g,TB=Ql,Zb="Object already initialized",Ep=A0.TypeError,AB=A0.WeakMap,Qu,la,Ju,OB=function(t){return Ju(t)?la(t):Qu(t,{})},CB=function(t){return function(e){var r;if(!EB(e)||(r=la(e)).type!==t)throw Ep("Incompatible receiver, "+t+" required");return r}};if(_B||Kf.state){var Wn=Kf.state||(Kf.state=new AB),RB=zf(Wn.get),e_=zf(Wn.has),$B=zf(Wn.set);Qu=function(t,e){if(e_(Wn,t))throw new Ep(Zb);return e.facade=t,$B(Wn,t,e),e},la=function(t){return RB(Wn,t)||{}},Ju=function(t){return e_(Wn,t)}}else{var ns=SB("state");TB[ns]=!0,Qu=function(t,e){if(Gf(t,ns))throw new Ep(Zb);return e.facade=t,IB(t,ns,e),e},la=function(t){return Gf(t,ns)?t[ns]:{}},Ju=function(t){return Gf(t,ns)}}var oo={set:Qu,get:la,has:Ju,enforce:OB,getterFor:CB},Ip=Vr,kB=Ir,O0=Function.prototype,xB=Ip&&Object.getOwnPropertyDescriptor,Eg=kB(O0,"name"),NB=Eg&&function(){}.name==="something",PB=Eg&&(!Ip||Ip&&xB(O0,"name").configurable),Ig={EXISTS:Eg,PROPER:NB,CONFIGURABLE:PB},DB=de,t_=rt,LB=Ir,r_=Di,MB=vg,FB=bg,C0=oo,UB=Ig.CONFIGURABLE,jB=C0.get,BB=C0.enforce,VB=String(String).split("String");(Dn.exports=function(t,e,r,n){var i=n?!!n.unsafe:!1,s=n?!!n.enumerable:!1,o=n?!!n.noTargetGet:!1,a=n&&n.name!==void 0?n.name:e,c;if(t_(r)&&(String(a).slice(0,7)==="Symbol("&&(a="["+String(a).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!LB(r,"name")||UB&&r.name!==a)&&r_(r,"name",a),c=BB(r),c.source||(c.source=VB.join(typeof a=="string"?a:""))),t===DB){s?t[e]=r:MB(e,r);return}else i?!o&&t[e]&&(s=!0):delete t[e];s?t[e]=r:r_(t,e,r)})(Function.prototype,"toString",function(){return t_(this)&&jB(this).source||FB(this)});var Jl={},qB=Math.ceil,WB=Math.floor,Zl=function(t){var e=+t;return e!==e||e===0?0:(e>0?WB:qB)(e)},zB=Zl,GB=Math.max,KB=Math.min,R0=function(t,e){var r=zB(t);return r<0?GB(r+e,0):KB(r,e)},HB=Zl,YB=Math.min,Sg=function(t){return t>0?YB(HB(t),9007199254740991):0},XB=Sg,Ga=function(t){return XB(t.length)},QB=io,JB=R0,ZB=Ga,n_=function(t){return function(e,r,n){var i=QB(e),s=ZB(i),o=JB(n,s),a;if(t&&r!=r){for(;s>o;)if(a=i[o++],a!=a)return!0}else for(;s>o;o++)if((t||o in i)&&i[o]===r)return t||o||0;return!t&&-1}},eV={includes:n_(!0),indexOf:n_(!1)},tV=Ce,Hf=Ir,rV=io,nV=eV.indexOf,iV=Ql,i_=tV([].push),$0=function(t,e){var r=rV(t),n=0,i=[],s;for(s in r)!Hf(iV,s)&&Hf(r,s)&&i_(i,s);for(;e.length>n;)Hf(r,s=e[n++])&&(~nV(i,s)||i_(i,s));return i},Tg=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],sV=$0,oV=Tg,aV=oV.concat("length","prototype");Jl.f=Object.getOwnPropertyNames||function(e){return sV(e,aV)};var Ag={};Ag.f=Object.getOwnPropertySymbols;var cV=Wa,uV=Ce,lV=Jl,hV=Ag,fV=Zt,dV=uV([].concat),pV=cV("Reflect","ownKeys")||function(e){var r=lV.f(fV(e)),n=hV.f;return n?dV(r,n(e)):r},s_=Ir,vV=pV,gV=lg,mV=qr,yV=function(t,e,r){for(var n=vV(e),i=mV.f,s=gV.f,o=0;o<n.length;o++){var a=n[o];!s_(t,a)&&!(r&&s_(r,a))&&i(t,a,s(e,a))}},wV=Le,bV=rt,_V=/#|\.prototype\./,Ka=function(t,e){var r=IV[EV(t)];return r==TV?!0:r==SV?!1:bV(e)?wV(e):!!e},EV=Ka.normalize=function(t){return String(t).replace(_V,".").toLowerCase()},IV=Ka.data={},SV=Ka.NATIVE="N",TV=Ka.POLYFILL="P",k0=Ka,Yf=de,AV=lg.f,OV=Di,CV=Dn.exports,RV=vg,$V=yV,kV=k0,sn=function(t,e){var r=t.target,n=t.global,i=t.stat,s,o,a,c,u,l;if(n?o=Yf:i?o=Yf[r]||RV(r,{}):o=(Yf[r]||{}).prototype,o)for(a in e){if(u=e[a],t.noTargetGet?(l=AV(o,a),c=l&&l.value):c=o[a],s=kV(n?a:r+(i?".":"#")+a,t.forced),!s&&c!==void 0){if(typeof u==typeof c)continue;$V(u,c)}(t.sham||c&&c.sham)&&OV(u,"sham",!0),CV(o,a,u,t)}},o_=Ce,xV=Yl,NV=Gl,PV=o_(o_.bind),x0=function(t,e){return xV(t),e===void 0?t:NV?PV(t,e):function(){return t.apply(e,arguments)}},DV=Pi,LV=Array.isArray||function(e){return DV(e)=="Array"},MV=Dt,FV=MV("toStringTag"),N0={};N0[FV]="z";var Og=String(N0)==="[object z]",UV=de,jV=Og,BV=rt,gu=Pi,VV=Dt,qV=VV("toStringTag"),WV=UV.Object,zV=gu(function(){return arguments}())=="Arguments",GV=function(t,e){try{return t[e]}catch{}},eh=jV?gu:function(t){var e,r,n;return t===void 0?"Undefined":t===null?"Null":typeof(r=GV(e=WV(t),qV))=="string"?r:zV?gu(e):(n=gu(e))=="Object"&&BV(e.callee)?"Arguments":n},KV=Ce,HV=Le,P0=rt,YV=eh,XV=Wa,QV=bg,D0=function(){},JV=[],L0=XV("Reflect","construct"),Cg=/^\s*(?:class|function)\b/,ZV=KV(Cg.exec),eq=!Cg.exec(D0),xo=function(e){if(!P0(e))return!1;try{return L0(D0,JV,e),!0}catch{return!1}},M0=function(e){if(!P0(e))return!1;switch(YV(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return eq||!!ZV(Cg,QV(e))}catch{return!0}};M0.sham=!0;var tq=!L0||HV(function(){var t;return xo(xo.call)||!xo(Object)||!xo(function(){t=!0})||t})?M0:xo,rq=de,a_=LV,nq=tq,iq=ur,sq=Dt,oq=sq("species"),c_=rq.Array,aq=function(t){var e;return a_(t)&&(e=t.constructor,nq(e)&&(e===c_||a_(e.prototype))?e=void 0:iq(e)&&(e=e[oq],e===null&&(e=void 0))),e===void 0?c_:e},cq=aq,uq=function(t,e){return new(cq(t))(e===0?0:e)},lq=x0,hq=Ce,fq=Hl,dq=so,pq=Ga,vq=uq,u_=hq([].push),fn=function(t){var e=t==1,r=t==2,n=t==3,i=t==4,s=t==6,o=t==7,a=t==5||s;return function(c,u,l,h){for(var f=dq(c),p=fq(f),g=lq(u,l),E=pq(p),I=0,O=h||vq,P=e?O(c,E):r||o?O(c,0):void 0,q,G;E>I;I++)if((a||I in p)&&(q=p[I],G=g(q,I,f),t))if(e)P[I]=G;else if(G)switch(t){case 3:return!0;case 5:return q;case 6:return I;case 2:u_(P,q)}else switch(t){case 4:return!1;case 7:u_(P,q)}return s?-1:n||i?i:P}},Rg={forEach:fn(0),map:fn(1),filter:fn(2),some:fn(3),every:fn(4),find:fn(5),findIndex:fn(6),filterReject:fn(7)},gq=Le,F0=function(t,e){var r=[][t];return!!r&&gq(function(){r.call(null,e||function(){throw 1},1)})},mq=Rg.forEach,yq=F0,wq=yq("forEach"),U0=wq?[].forEach:function(e){return mq(this,e,arguments.length>1?arguments[1]:void 0)},bq=sn,l_=U0;bq({target:"Array",proto:!0,forced:[].forEach!=l_},{forEach:l_});var j0={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},_q=wg,Xf=_q("span").classList,h_=Xf&&Xf.constructor&&Xf.constructor.prototype,B0=h_===Object.prototype?void 0:h_,f_=de,d_=j0,Eq=B0,Qf=U0,Iq=Di,V0=function(t){if(t&&t.forEach!==Qf)try{Iq(t,"forEach",Qf)}catch{t.forEach=Qf}};for(var Jf in d_)d_[Jf]&&V0(f_[Jf]&&f_[Jf].prototype);V0(Eq);var Sq=!!(typeof window!="undefined"&&window.document&&window.document.createElement),$g=Sq,Tq=Le,Aq=Dt,Oq=dg,Cq=Aq("species"),Rq=function(t){return Oq>=51||!Tq(function(){var e=[],r=e.constructor={};return r[Cq]=function(){return{foo:1}},e[t](Boolean).foo!==1})},$q=sn,kq=Rg.filter,xq=Rq,Nq=xq("filter");$q({target:"Array",proto:!0,forced:!Nq},{filter:function(e){return kq(this,e,arguments.length>1?arguments[1]:void 0)}});var q0={},Pq=$0,Dq=Tg,W0=Object.keys||function(e){return Pq(e,Dq)},Lq=Vr,Mq=I0,Fq=qr,Uq=Zt,jq=io,Bq=W0;q0.f=Lq&&!Mq?Object.defineProperties:function(e,r){Uq(e);for(var n=jq(r),i=Bq(r),s=i.length,o=0,a;s>o;)Fq.f(e,a=i[o++],n[a]);return e};var Vq=Wa,qq=Vq("document","documentElement"),Wq=Zt,zq=q0,p_=Tg,Gq=Ql,Kq=qq,Hq=wg,Yq=_g,v_=">",g_="<",Sp="prototype",Tp="script",z0=Yq("IE_PROTO"),Zf=function(){},G0=function(t){return g_+Tp+v_+t+g_+"/"+Tp+v_},m_=function(t){t.write(G0("")),t.close();var e=t.parentWindow.Object;return t=null,e},Xq=function(){var t=Hq("iframe"),e="java"+Tp+":",r;return t.style.display="none",Kq.appendChild(t),t.src=String(e),r=t.contentWindow.document,r.open(),r.write(G0("document.F=Object")),r.close(),r.F},Bc,mu=function(){try{Bc=new ActiveXObject("htmlfile")}catch{}mu=typeof document!="undefined"?document.domain&&Bc?m_(Bc):Xq():m_(Bc);for(var t=p_.length;t--;)delete mu[Sp][p_[t]];return mu()};Gq[z0]=!0;var kg=Object.create||function(e,r){var n;return e!==null?(Zf[Sp]=Wq(e),n=new Zf,Zf[Sp]=null,n[z0]=e):n=mu(),r===void 0?n:zq.f(n,r)},Qq=Dt,Jq=kg,Zq=qr,Ap=Qq("unscopables"),Op=Array.prototype;Op[Ap]==null&&Zq.f(Op,Ap,{configurable:!0,value:Jq(null)});var eW=function(t){Op[Ap][t]=!0},Ha={},tW=Le,rW=!tW(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}),nW=de,iW=Ir,sW=rt,oW=so,aW=_g,cW=rW,y_=aW("IE_PROTO"),Cp=nW.Object,uW=Cp.prototype,K0=cW?Cp.getPrototypeOf:function(t){var e=oW(t);if(iW(e,y_))return e[y_];var r=e.constructor;return sW(r)&&e instanceof r?r.prototype:e instanceof Cp?uW:null},lW=Le,hW=rt,w_=K0,fW=Dn.exports,dW=Dt,Rp=dW("iterator"),H0=!1,mi,ed,td;[].keys&&(td=[].keys(),"next"in td?(ed=w_(w_(td)),ed!==Object.prototype&&(mi=ed)):H0=!0);var pW=mi==null||lW(function(){var t={};return mi[Rp].call(t)!==t});pW&&(mi={});hW(mi[Rp])||fW(mi,Rp,function(){return this});var Y0={IteratorPrototype:mi,BUGGY_SAFARI_ITERATORS:H0},vW=qr.f,gW=Ir,mW=Dt,b_=mW("toStringTag"),xg=function(t,e,r){t&&!r&&(t=t.prototype),t&&!gW(t,b_)&&vW(t,b_,{configurable:!0,value:e})},yW=Y0.IteratorPrototype,wW=kg,bW=Kl,_W=xg,EW=Ha,IW=function(){return this},SW=function(t,e,r,n){var i=e+" Iterator";return t.prototype=wW(yW,{next:bW(+!n,r)}),_W(t,i,!1),EW[i]=IW,t},X0=de,TW=rt,AW=X0.String,OW=X0.TypeError,CW=function(t){if(typeof t=="object"||TW(t))return t;throw OW("Can't set "+AW(t)+" as a prototype")},RW=Ce,$W=Zt,kW=CW,Q0=Object.setPrototypeOf||("__proto__"in{}?function(){var t=!1,e={},r;try{r=RW(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),r(e,[]),t=e instanceof Array}catch{}return function(i,s){return $W(i),kW(s),t?r(i,s):i.__proto__=s,i}}():void 0),xW=sn,NW=cr,J0=Ig,PW=rt,DW=SW,__=K0,E_=Q0,LW=xg,MW=Di,rd=Dn.exports,FW=Dt,UW=Ha,Z0=Y0,jW=J0.PROPER,BW=J0.CONFIGURABLE,I_=Z0.IteratorPrototype,Vc=Z0.BUGGY_SAFARI_ITERATORS,No=FW("iterator"),S_="keys",Po="values",T_="entries",VW=function(){return this},eA=function(t,e,r,n,i,s,o){DW(r,e,n);var a=function(O){if(O===i&&f)return f;if(!Vc&&O in l)return l[O];switch(O){case S_:return function(){return new r(this,O)};case Po:return function(){return new r(this,O)};case T_:return function(){return new r(this,O)}}return function(){return new r(this)}},c=e+" Iterator",u=!1,l=t.prototype,h=l[No]||l["@@iterator"]||i&&l[i],f=!Vc&&h||a(i),p=e=="Array"&&l.entries||h,g,E,I;if(p&&(g=__(p.call(new t)),g!==Object.prototype&&g.next&&(__(g)!==I_&&(E_?E_(g,I_):PW(g[No])||rd(g,No,VW)),LW(g,c,!0))),jW&&i==Po&&h&&h.name!==Po&&(BW?MW(l,"name",Po):(u=!0,f=function(){return NW(h,this)})),i)if(E={values:a(Po),keys:s?f:a(S_),entries:a(T_)},o)for(I in E)(Vc||u||!(I in l))&&rd(l,I,E[I]);else xW({target:e,proto:!0,forced:Vc||u},E);return l[No]!==f&&rd(l,No,f,{name:i}),UW[e]=f,E},qW=io,Ng=eW,A_=Ha,tA=oo,WW=qr.f,zW=eA,GW=Vr,rA="Array Iterator",KW=tA.set,HW=tA.getterFor(rA),YW=zW(Array,"Array",function(t,e){KW(this,{type:rA,target:qW(t),index:0,kind:e})},function(){var t=HW(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):r=="keys"?{value:n,done:!1}:r=="values"?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}},"values"),O_=A_.Arguments=A_.Array;Ng("keys");Ng("values");Ng("entries");if(GW&&O_.name!=="values")try{WW(O_,"name",{value:"values"})}catch{}var C_=Vr,XW=Ce,QW=cr,JW=Le,nd=W0,ZW=Ag,ez=hg,tz=so,rz=Hl,is=Object.assign,R_=Object.defineProperty,nz=XW([].concat),iz=!is||JW(function(){if(C_&&is({b:1},is(R_({},"a",{enumerable:!0,get:function(){R_(this,"b",{value:3,enumerable:!1})}}),{b:2})).b!==1)return!0;var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach(function(i){e[i]=i}),is({},t)[r]!=7||nd(is({},e)).join("")!=n})?function(e,r){for(var n=tz(e),i=arguments.length,s=1,o=ZW.f,a=ez.f;i>s;)for(var c=rz(arguments[s++]),u=o?nz(nd(c),o(c)):nd(c),l=u.length,h=0,f;l>h;)f=u[h++],(!C_||QW(a,c,f))&&(n[f]=c[f]);return n}:is,sz=sn,$_=iz;sz({target:"Object",stat:!0,forced:Object.assign!==$_},{assign:$_});var oz=Og,az=eh,cz=oz?{}.toString:function(){return"[object "+az(this)+"]"},uz=Og,lz=Dn.exports,hz=cz;uz||lz(Object.prototype,"toString",hz,{unsafe:!0});var fz=de,dz=eh,pz=fz.String,Li=function(t){if(dz(t)==="Symbol")throw TypeError("Cannot convert a Symbol value to a string");return pz(t)},nA=`	
\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF`,vz=Ce,gz=no,mz=Li,yz=nA,k_=vz("".replace),Zu="["+yz+"]",wz=RegExp("^"+Zu+Zu+"*"),bz=RegExp(Zu+Zu+"*$"),id=function(t){return function(e){var r=mz(gz(e));return t&1&&(r=k_(r,wz,"")),t&2&&(r=k_(r,bz,"")),r}},_z={start:id(1),end:id(2),trim:id(3)},iA=de,Ez=Le,Iz=Ce,Sz=Li,Tz=_z.trim,x_=nA,Yo=iA.parseInt,N_=iA.Symbol,P_=N_&&N_.iterator,sA=/^[+-]?0x/i,Az=Iz(sA.exec),Oz=Yo(x_+"08")!==8||Yo(x_+"0x16")!==22||P_&&!Ez(function(){Yo(Object(P_))}),Cz=Oz?function(e,r){var n=Tz(Sz(e));return Yo(n,r>>>0||(Az(sA,n)?16:10))}:Yo,Rz=sn,D_=Cz;Rz({global:!0,forced:parseInt!=D_},{parseInt:D_});var Pg=Ce,$z=Zl,kz=Li,xz=no,Nz=Pg("".charAt),L_=Pg("".charCodeAt),Pz=Pg("".slice),M_=function(t){return function(e,r){var n=kz(xz(e)),i=$z(r),s=n.length,o,a;return i<0||i>=s?t?"":void 0:(o=L_(n,i),o<55296||o>56319||i+1===s||(a=L_(n,i+1))<56320||a>57343?t?Nz(n,i):o:t?Pz(n,i,i+2):(o-55296<<10)+(a-56320)+65536)}},oA={codeAt:M_(!1),charAt:M_(!0)},Dz=oA.charAt,Lz=Li,aA=oo,Mz=eA,cA="String Iterator",Fz=aA.set,Uz=aA.getterFor(cA);Mz(String,"String",function(t){Fz(this,{type:cA,string:Lz(t),index:0})},function(){var e=Uz(this),r=e.string,n=e.index,i;return n>=r.length?{value:void 0,done:!0}:(i=Dz(r,n),e.index+=i.length,{value:i,done:!1})});var jz=Dn.exports,uA=function(t,e,r){for(var n in e)jz(t,n,e[n],r);return t},th={exports:{}},lA={},Bz=yg,Vz=qr,qz=Kl,Wz=function(t,e,r){var n=Bz(e);n in t?Vz.f(t,n,qz(0,r)):t[n]=r},zz=de,F_=R0,Gz=Ga,Kz=Wz,Hz=zz.Array,Yz=Math.max,Xz=function(t,e,r){for(var n=Gz(t),i=F_(e,n),s=F_(r===void 0?n:r,n),o=Hz(Yz(s-i,0)),a=0;i<s;i++,a++)Kz(o,a,t[i]);return o.length=a,o},Qz=Pi,Jz=io,hA=Jl.f,Zz=Xz,fA=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],e2=function(t){try{return hA(t)}catch{return Zz(fA)}};lA.f=function(e){return fA&&Qz(e)=="Window"?e2(e):hA(Jz(e))};var t2=Le,r2=t2(function(){if(typeof ArrayBuffer=="function"){var t=new ArrayBuffer(8);Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}}),n2=Le,i2=ur,s2=Pi,U_=r2,yu=Object.isExtensible,o2=n2(function(){yu(1)}),dA=o2||U_?function(e){return!i2(e)||U_&&s2(e)=="ArrayBuffer"?!1:yu?yu(e):!0}:yu,a2=Le,c2=!a2(function(){return Object.isExtensible(Object.preventExtensions({}))}),u2=sn,l2=Ce,h2=Ql,f2=ur,Dg=Ir,d2=qr.f,j_=Jl,p2=lA,Lg=dA,v2=mg,g2=c2,pA=!1,Jr=v2("meta"),m2=0,Mg=function(t){d2(t,Jr,{value:{objectID:"O"+m2++,weakData:{}}})},y2=function(t,e){if(!f2(t))return typeof t=="symbol"?t:(typeof t=="string"?"S":"P")+t;if(!Dg(t,Jr)){if(!Lg(t))return"F";if(!e)return"E";Mg(t)}return t[Jr].objectID},w2=function(t,e){if(!Dg(t,Jr)){if(!Lg(t))return!0;if(!e)return!1;Mg(t)}return t[Jr].weakData},b2=function(t){return g2&&pA&&Lg(t)&&!Dg(t,Jr)&&Mg(t),t},_2=function(){E2.enable=function(){},pA=!0;var t=j_.f,e=l2([].splice),r={};r[Jr]=1,t(r).length&&(j_.f=function(n){for(var i=t(n),s=0,o=i.length;s<o;s++)if(i[s]===Jr){e(i,s,1);break}return i},u2({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:p2.f}))},E2=th.exports={enable:_2,fastKey:y2,getWeakData:w2,onFreeze:b2};h2[Jr]=!0;var I2=Dt,S2=Ha,T2=I2("iterator"),A2=Array.prototype,O2=function(t){return t!==void 0&&(S2.Array===t||A2[T2]===t)},C2=eh,B_=za,R2=Ha,$2=Dt,k2=$2("iterator"),vA=function(t){if(t!=null)return B_(t,k2)||B_(t,"@@iterator")||R2[C2(t)]},x2=de,N2=cr,P2=Yl,D2=Zt,L2=pg,M2=vA,F2=x2.TypeError,U2=function(t,e){var r=arguments.length<2?M2(t):e;if(P2(r))return D2(N2(r,t));throw F2(L2(t)+" is not iterable")},j2=cr,V_=Zt,B2=za,V2=function(t,e,r){var n,i;V_(t);try{if(n=B2(t,"return"),!n){if(e==="throw")throw r;return r}n=j2(n,t)}catch(s){i=!0,n=s}if(e==="throw")throw r;if(i)throw n;return V_(n),r},q2=de,W2=x0,z2=cr,G2=Zt,K2=pg,H2=O2,Y2=Ga,q_=fg,X2=U2,Q2=vA,W_=V2,J2=q2.TypeError,wu=function(t,e){this.stopped=t,this.result=e},z_=wu.prototype,gA=function(t,e,r){var n=r&&r.that,i=!!(r&&r.AS_ENTRIES),s=!!(r&&r.IS_ITERATOR),o=!!(r&&r.INTERRUPTED),a=W2(e,n),c,u,l,h,f,p,g,E=function(O){return c&&W_(c,"normal",O),new wu(!0,O)},I=function(O){return i?(G2(O),o?a(O[0],O[1],E):a(O[0],O[1])):o?a(O,E):a(O)};if(s)c=t;else{if(u=Q2(t),!u)throw J2(K2(t)+" is not iterable");if(H2(u)){for(l=0,h=Y2(t);h>l;l++)if(f=I(t[l]),f&&q_(z_,f))return f;return new wu(!1)}c=X2(t,u)}for(p=c.next;!(g=z2(p,c)).done;){try{f=I(g.value)}catch(O){W_(c,"throw",O)}if(typeof f=="object"&&f&&q_(z_,f))return f}return new wu(!1)},Z2=de,eG=fg,tG=Z2.TypeError,mA=function(t,e){if(eG(e,t))return t;throw tG("Incorrect invocation")},rG=Dt,yA=rG("iterator"),wA=!1;try{var nG=0,G_={next:function(){return{done:!!nG++}},return:function(){wA=!0}};G_[yA]=function(){return this},Array.from(G_,function(){throw 2})}catch{}var iG=function(t,e){if(!e&&!wA)return!1;var r=!1;try{var n={};n[yA]=function(){return{next:function(){return{done:r=!0}}}},t(n)}catch{}return r},sG=rt,oG=ur,K_=Q0,aG=function(t,e,r){var n,i;return K_&&sG(n=e.constructor)&&n!==r&&oG(i=n.prototype)&&i!==r.prototype&&K_(t,i),t},cG=sn,uG=de,lG=Ce,H_=k0,hG=Dn.exports,fG=th.exports,dG=gA,pG=mA,vG=rt,sd=ur,od=Le,gG=iG,mG=xg,yG=aG,wG=function(t,e,r){var n=t.indexOf("Map")!==-1,i=t.indexOf("Weak")!==-1,s=n?"set":"add",o=uG[t],a=o&&o.prototype,c=o,u={},l=function(O){var P=lG(a[O]);hG(a,O,O=="add"?function(G){return P(this,G===0?0:G),this}:O=="delete"?function(q){return i&&!sd(q)?!1:P(this,q===0?0:q)}:O=="get"?function(G){return i&&!sd(G)?void 0:P(this,G===0?0:G)}:O=="has"?function(G){return i&&!sd(G)?!1:P(this,G===0?0:G)}:function(G,k){return P(this,G===0?0:G,k),this})},h=H_(t,!vG(o)||!(i||a.forEach&&!od(function(){new o().entries().next()})));if(h)c=r.getConstructor(e,t,n,s),fG.enable();else if(H_(t,!0)){var f=new c,p=f[s](i?{}:-0,1)!=f,g=od(function(){f.has(1)}),E=gG(function(O){new o(O)}),I=!i&&od(function(){for(var O=new o,P=5;P--;)O[s](P,P);return!O.has(-0)});E||(c=e(function(O,P){pG(O,a);var q=yG(new o,O,c);return P!=null&&dG(P,q[s],{that:q,AS_ENTRIES:n}),q}),c.prototype=a,a.constructor=c),(g||I)&&(l("delete"),l("has"),n&&l("get")),(I||p)&&l(s),i&&a.clear&&delete a.clear}return u[t]=c,cG({global:!0,forced:c!=o},u),mG(c,t),i||r.setStrong(c,t,n),c},bG=Ce,Y_=uA,qc=th.exports.getWeakData,_G=Zt,ad=ur,EG=mA,IG=gA,bA=Rg,X_=Ir,_A=oo,SG=_A.set,TG=_A.getterFor,AG=bA.find,OG=bA.findIndex,CG=bG([].splice),RG=0,Wc=function(t){return t.frozen||(t.frozen=new EA)},EA=function(){this.entries=[]},cd=function(t,e){return AG(t.entries,function(r){return r[0]===e})};EA.prototype={get:function(t){var e=cd(this,t);if(e)return e[1]},has:function(t){return!!cd(this,t)},set:function(t,e){var r=cd(this,t);r?r[1]=e:this.entries.push([t,e])},delete:function(t){var e=OG(this.entries,function(r){return r[0]===t});return~e&&CG(this.entries,e,1),!!~e}};var $G={getConstructor:function(t,e,r,n){var i=t(function(c,u){EG(c,s),SG(c,{type:e,id:RG++,frozen:void 0}),u!=null&&IG(u,c[n],{that:c,AS_ENTRIES:r})}),s=i.prototype,o=TG(e),a=function(c,u,l){var h=o(c),f=qc(_G(u),!0);return f===!0?Wc(h).set(u,l):f[h.id]=l,c};return Y_(s,{delete:function(c){var u=o(this);if(!ad(c))return!1;var l=qc(c);return l===!0?Wc(u).delete(c):l&&X_(l,u.id)&&delete l[u.id]},has:function(u){var l=o(this);if(!ad(u))return!1;var h=qc(u);return h===!0?Wc(l).has(u):h&&X_(h,l.id)}}),Y_(s,r?{get:function(u){var l=o(this);if(ad(u)){var h=qc(u);return h===!0?Wc(l).get(u):h?h[l.id]:void 0}},set:function(u,l){return a(this,u,l)}}:{add:function(u){return a(this,u,!0)}}),i}},Q_=de,zc=Ce,kG=uA,xG=th.exports,NG=wG,IA=$G,Gc=ur,Kc=dA,Hc=oo.enforce,PG=T0,DG=!Q_.ActiveXObject&&"ActiveXObject"in Q_,Do,SA=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},LG=NG("WeakMap",SA,IA);if(PG&&DG){Do=IA.getConstructor(SA,"WeakMap",!0),xG.enable();var Lo=LG.prototype,J_=zc(Lo.delete),Yc=zc(Lo.has),Z_=zc(Lo.get),eE=zc(Lo.set);kG(Lo,{delete:function(t){if(Gc(t)&&!Kc(t)){var e=Hc(this);return e.frozen||(e.frozen=new Do),J_(this,t)||e.frozen.delete(t)}return J_(this,t)},has:function(e){if(Gc(e)&&!Kc(e)){var r=Hc(this);return r.frozen||(r.frozen=new Do),Yc(this,e)||r.frozen.has(e)}return Yc(this,e)},get:function(e){if(Gc(e)&&!Kc(e)){var r=Hc(this);return r.frozen||(r.frozen=new Do),Yc(this,e)?Z_(this,e):r.frozen.get(e)}return Z_(this,e)},set:function(e,r){if(Gc(e)&&!Kc(e)){var n=Hc(this);n.frozen||(n.frozen=new Do),Yc(this,e)?eE(this,e,r):n.frozen.set(e,r)}else eE(this,e,r);return this}})}var tE=de,TA=j0,MG=B0,Wo=YW,ud=Di,AA=Dt,ld=AA("iterator"),rE=AA("toStringTag"),hd=Wo.values,OA=function(t,e){if(t){if(t[ld]!==hd)try{ud(t,ld,hd)}catch{t[ld]=hd}if(t[rE]||ud(t,rE,e),TA[e]){for(var r in Wo)if(t[r]!==Wo[r])try{ud(t,r,Wo[r])}catch{t[r]=Wo[r]}}}};for(var fd in TA)OA(tE[fd]&&tE[fd].prototype,fd);OA(MG,"DOMTokenList");var CA="Expected a function",nE=0/0,FG="[object Symbol]",UG=/^\s+|\s+$/g,jG=/^[-+]0x[0-9a-f]+$/i,BG=/^0b[01]+$/i,VG=/^0o[0-7]+$/i,qG=parseInt,WG=typeof Xe=="object"&&Xe&&Xe.Object===Object&&Xe,zG=typeof self=="object"&&self&&self.Object===Object&&self,GG=WG||zG||Function("return this")(),KG=Object.prototype,HG=KG.toString,YG=Math.max,XG=Math.min,dd=function(){return GG.Date.now()};function QG(t,e,r){var n,i,s,o,a,c,u=0,l=!1,h=!1,f=!0;if(typeof t!="function")throw new TypeError(CA);e=iE(e)||0,el(r)&&(l=!!r.leading,h="maxWait"in r,s=h?YG(iE(r.maxWait)||0,e):s,f="trailing"in r?!!r.trailing:f);function p(x){var w=n,R=i;return n=i=void 0,u=x,o=t.apply(R,w),o}function g(x){return u=x,a=setTimeout(O,e),l?p(x):o}function E(x){var w=x-c,R=x-u,H=e-w;return h?XG(H,s-R):H}function I(x){var w=x-c,R=x-u;return c===void 0||w>=e||w<0||h&&R>=s}function O(){var x=dd();if(I(x))return P(x);a=setTimeout(O,E(x))}function P(x){return a=void 0,f&&n?p(x):(n=i=void 0,o)}function q(){a!==void 0&&clearTimeout(a),u=0,n=c=i=a=void 0}function G(){return a===void 0?o:P(dd())}function k(){var x=dd(),w=I(x);if(n=arguments,i=this,c=x,w){if(a===void 0)return g(c);if(h)return a=setTimeout(O,e),p(c)}return a===void 0&&(a=setTimeout(O,e)),o}return k.cancel=q,k.flush=G,k}function JG(t,e,r){var n=!0,i=!0;if(typeof t!="function")throw new TypeError(CA);return el(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),QG(t,e,{leading:n,maxWait:e,trailing:i})}function el(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function ZG(t){return!!t&&typeof t=="object"}function eK(t){return typeof t=="symbol"||ZG(t)&&HG.call(t)==FG}function iE(t){if(typeof t=="number")return t;if(eK(t))return nE;if(el(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=el(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(UG,"");var r=BG.test(t);return r||VG.test(t)?qG(t.slice(2),r?2:8):jG.test(t)?nE:+t}var sE=JG,tK="Expected a function",oE=0/0,rK="[object Symbol]",nK=/^\s+|\s+$/g,iK=/^[-+]0x[0-9a-f]+$/i,sK=/^0b[01]+$/i,oK=/^0o[0-7]+$/i,aK=parseInt,cK=typeof Xe=="object"&&Xe&&Xe.Object===Object&&Xe,uK=typeof self=="object"&&self&&self.Object===Object&&self,lK=cK||uK||Function("return this")(),hK=Object.prototype,fK=hK.toString,dK=Math.max,pK=Math.min,pd=function(){return lK.Date.now()};function vK(t,e,r){var n,i,s,o,a,c,u=0,l=!1,h=!1,f=!0;if(typeof t!="function")throw new TypeError(tK);e=aE(e)||0,$p(r)&&(l=!!r.leading,h="maxWait"in r,s=h?dK(aE(r.maxWait)||0,e):s,f="trailing"in r?!!r.trailing:f);function p(x){var w=n,R=i;return n=i=void 0,u=x,o=t.apply(R,w),o}function g(x){return u=x,a=setTimeout(O,e),l?p(x):o}function E(x){var w=x-c,R=x-u,H=e-w;return h?pK(H,s-R):H}function I(x){var w=x-c,R=x-u;return c===void 0||w>=e||w<0||h&&R>=s}function O(){var x=pd();if(I(x))return P(x);a=setTimeout(O,E(x))}function P(x){return a=void 0,f&&n?p(x):(n=i=void 0,o)}function q(){a!==void 0&&clearTimeout(a),u=0,n=c=i=a=void 0}function G(){return a===void 0?o:P(pd())}function k(){var x=pd(),w=I(x);if(n=arguments,i=this,c=x,w){if(a===void 0)return g(c);if(h)return a=setTimeout(O,e),p(c)}return a===void 0&&(a=setTimeout(O,e)),o}return k.cancel=q,k.flush=G,k}function $p(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function gK(t){return!!t&&typeof t=="object"}function mK(t){return typeof t=="symbol"||gK(t)&&fK.call(t)==rK}function aE(t){if(typeof t=="number")return t;if(mK(t))return oE;if($p(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=$p(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(nK,"");var r=sK.test(t);return r||oK.test(t)?aK(t.slice(2),r?2:8):iK.test(t)?oE:+t}var cE=vK,yK="Expected a function",RA="__lodash_hash_undefined__",wK="[object Function]",bK="[object GeneratorFunction]",_K=/[\\^$.*+?()[\]{}|]/g,EK=/^\[object .+?Constructor\]$/,IK=typeof Xe=="object"&&Xe&&Xe.Object===Object&&Xe,SK=typeof self=="object"&&self&&self.Object===Object&&self,$A=IK||SK||Function("return this")();function TK(t,e){return t==null?void 0:t[e]}function AK(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}var OK=Array.prototype,CK=Function.prototype,kA=Object.prototype,vd=$A["__core-js_shared__"],uE=function(){var t=/[^.]+$/.exec(vd&&vd.keys&&vd.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),xA=CK.toString,Fg=kA.hasOwnProperty,RK=kA.toString,$K=RegExp("^"+xA.call(Fg).replace(_K,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),kK=OK.splice,xK=NA($A,"Map"),ha=NA(Object,"create");function yi(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function NK(){this.__data__=ha?ha(null):{}}function PK(t){return this.has(t)&&delete this.__data__[t]}function DK(t){var e=this.__data__;if(ha){var r=e[t];return r===RA?void 0:r}return Fg.call(e,t)?e[t]:void 0}function LK(t){var e=this.__data__;return ha?e[t]!==void 0:Fg.call(e,t)}function MK(t,e){var r=this.__data__;return r[t]=ha&&e===void 0?RA:e,this}yi.prototype.clear=NK;yi.prototype.delete=PK;yi.prototype.get=DK;yi.prototype.has=LK;yi.prototype.set=MK;function ao(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function FK(){this.__data__=[]}function UK(t){var e=this.__data__,r=rh(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():kK.call(e,r,1),!0}function jK(t){var e=this.__data__,r=rh(e,t);return r<0?void 0:e[r][1]}function BK(t){return rh(this.__data__,t)>-1}function VK(t,e){var r=this.__data__,n=rh(r,t);return n<0?r.push([t,e]):r[n][1]=e,this}ao.prototype.clear=FK;ao.prototype.delete=UK;ao.prototype.get=jK;ao.prototype.has=BK;ao.prototype.set=VK;function Mi(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function qK(){this.__data__={hash:new yi,map:new(xK||ao),string:new yi}}function WK(t){return nh(this,t).delete(t)}function zK(t){return nh(this,t).get(t)}function GK(t){return nh(this,t).has(t)}function KK(t,e){return nh(this,t).set(t,e),this}Mi.prototype.clear=qK;Mi.prototype.delete=WK;Mi.prototype.get=zK;Mi.prototype.has=GK;Mi.prototype.set=KK;function rh(t,e){for(var r=t.length;r--;)if(JK(t[r][0],e))return r;return-1}function HK(t){if(!PA(t)||XK(t))return!1;var e=ZK(t)||AK(t)?$K:EK;return e.test(QK(t))}function nh(t,e){var r=t.__data__;return YK(e)?r[typeof e=="string"?"string":"hash"]:r.map}function NA(t,e){var r=TK(t,e);return HK(r)?r:void 0}function YK(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function XK(t){return!!uE&&uE in t}function QK(t){if(t!=null){try{return xA.call(t)}catch{}try{return t+""}catch{}}return""}function Ug(t,e){if(typeof t!="function"||e&&typeof e!="function")throw new TypeError(yK);var r=function(){var n=arguments,i=e?e.apply(this,n):n[0],s=r.cache;if(s.has(i))return s.get(i);var o=t.apply(this,n);return r.cache=s.set(i,o),o};return r.cache=new(Ug.Cache||Mi),r}Ug.Cache=Mi;function JK(t,e){return t===e||t!==t&&e!==e}function ZK(t){var e=PA(t)?RK.call(t):"";return e==wK||e==bK}function PA(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}var eH=Ug,si=[],tH=function(){return si.some(function(t){return t.activeTargets.length>0})},rH=function(){return si.some(function(t){return t.skippedTargets.length>0})},lE="ResizeObserver loop completed with undelivered notifications.",nH=function(){var t;typeof ErrorEvent=="function"?t=new ErrorEvent("error",{message:lE}):(t=document.createEvent("Event"),t.initEvent("error",!1,!1),t.message=lE),window.dispatchEvent(t)},fa;(function(t){t.BORDER_BOX="border-box",t.CONTENT_BOX="content-box",t.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(fa||(fa={}));var oi=function(t){return Object.freeze(t)},iH=function(){function t(e,r){this.inlineSize=e,this.blockSize=r,oi(this)}return t}(),DA=function(){function t(e,r,n,i){return this.x=e,this.y=r,this.width=n,this.height=i,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,oi(this)}return t.prototype.toJSON=function(){var e=this,r=e.x,n=e.y,i=e.top,s=e.right,o=e.bottom,a=e.left,c=e.width,u=e.height;return{x:r,y:n,top:i,right:s,bottom:o,left:a,width:c,height:u}},t.fromRect=function(e){return new t(e.x,e.y,e.width,e.height)},t}(),jg=function(t){return t instanceof SVGElement&&"getBBox"in t},LA=function(t){if(jg(t)){var e=t.getBBox(),r=e.width,n=e.height;return!r&&!n}var i=t,s=i.offsetWidth,o=i.offsetHeight;return!(s||o||t.getClientRects().length)},hE=function(t){var e,r;if(t instanceof Element)return!0;var n=(r=(e=t)===null||e===void 0?void 0:e.ownerDocument)===null||r===void 0?void 0:r.defaultView;return!!(n&&t instanceof n.Element)},sH=function(t){switch(t.tagName){case"INPUT":if(t.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},Xo=typeof window!="undefined"?window:{},Xc=new WeakMap,fE=/auto|scroll/,oH=/^tb|vertical/,aH=/msie|trident/i.test(Xo.navigator&&Xo.navigator.userAgent),Or=function(t){return parseFloat(t||"0")},Ss=function(t,e,r){return t===void 0&&(t=0),e===void 0&&(e=0),r===void 0&&(r=!1),new iH((r?e:t)||0,(r?t:e)||0)},dE=oi({devicePixelContentBoxSize:Ss(),borderBoxSize:Ss(),contentBoxSize:Ss(),contentRect:new DA(0,0,0,0)}),MA=function(t,e){if(e===void 0&&(e=!1),Xc.has(t)&&!e)return Xc.get(t);if(LA(t))return Xc.set(t,dE),dE;var r=getComputedStyle(t),n=jg(t)&&t.ownerSVGElement&&t.getBBox(),i=!aH&&r.boxSizing==="border-box",s=oH.test(r.writingMode||""),o=!n&&fE.test(r.overflowY||""),a=!n&&fE.test(r.overflowX||""),c=n?0:Or(r.paddingTop),u=n?0:Or(r.paddingRight),l=n?0:Or(r.paddingBottom),h=n?0:Or(r.paddingLeft),f=n?0:Or(r.borderTopWidth),p=n?0:Or(r.borderRightWidth),g=n?0:Or(r.borderBottomWidth),E=n?0:Or(r.borderLeftWidth),I=h+u,O=c+l,P=E+p,q=f+g,G=a?t.offsetHeight-q-t.clientHeight:0,k=o?t.offsetWidth-P-t.clientWidth:0,x=i?I+P:0,w=i?O+q:0,R=n?n.width:Or(r.width)-x-k,H=n?n.height:Or(r.height)-w-G,ne=R+I+k+P,we=H+O+G+q,T=oi({devicePixelContentBoxSize:Ss(Math.round(R*devicePixelRatio),Math.round(H*devicePixelRatio),s),borderBoxSize:Ss(ne,we,s),contentBoxSize:Ss(R,H,s),contentRect:new DA(h,c,R,H)});return Xc.set(t,T),T},FA=function(t,e,r){var n=MA(t,r),i=n.borderBoxSize,s=n.contentBoxSize,o=n.devicePixelContentBoxSize;switch(e){case fa.DEVICE_PIXEL_CONTENT_BOX:return o;case fa.BORDER_BOX:return i;default:return s}},cH=function(){function t(e){var r=MA(e);this.target=e,this.contentRect=r.contentRect,this.borderBoxSize=oi([r.borderBoxSize]),this.contentBoxSize=oi([r.contentBoxSize]),this.devicePixelContentBoxSize=oi([r.devicePixelContentBoxSize])}return t}(),UA=function(t){if(LA(t))return 1/0;for(var e=0,r=t.parentNode;r;)e+=1,r=r.parentNode;return e},uH=function(){var t=1/0,e=[];si.forEach(function(o){if(o.activeTargets.length!==0){var a=[];o.activeTargets.forEach(function(u){var l=new cH(u.target),h=UA(u.target);a.push(l),u.lastReportedSize=FA(u.target,u.observedBox),h<t&&(t=h)}),e.push(function(){o.callback.call(o.observer,a,o.observer)}),o.activeTargets.splice(0,o.activeTargets.length)}});for(var r=0,n=e;r<n.length;r++){var i=n[r];i()}return t},pE=function(t){si.forEach(function(r){r.activeTargets.splice(0,r.activeTargets.length),r.skippedTargets.splice(0,r.skippedTargets.length),r.observationTargets.forEach(function(i){i.isActive()&&(UA(i.target)>t?r.activeTargets.push(i):r.skippedTargets.push(i))})})},lH=function(){var t=0;for(pE(t);tH();)t=uH(),pE(t);return rH()&&nH(),t>0},gd,jA=[],hH=function(){return jA.splice(0).forEach(function(t){return t()})},fH=function(t){if(!gd){var e=0,r=document.createTextNode(""),n={characterData:!0};new MutationObserver(function(){return hH()}).observe(r,n),gd=function(){r.textContent=""+(e?e--:e++)}}jA.push(t),gd()},dH=function(t){fH(function(){requestAnimationFrame(t)})},bu=0,pH=function(){return!!bu},vH=250,gH={attributes:!0,characterData:!0,childList:!0,subtree:!0},vE=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],gE=function(t){return t===void 0&&(t=0),Date.now()+t},md=!1,mH=function(){function t(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return t.prototype.run=function(e){var r=this;if(e===void 0&&(e=vH),!md){md=!0;var n=gE(e);dH(function(){var i=!1;try{i=lH()}finally{if(md=!1,e=n-gE(),!pH())return;i?r.run(1e3):e>0?r.run(e):r.start()}})}},t.prototype.schedule=function(){this.stop(),this.run()},t.prototype.observe=function(){var e=this,r=function(){return e.observer&&e.observer.observe(document.body,gH)};document.body?r():Xo.addEventListener("DOMContentLoaded",r)},t.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),vE.forEach(function(r){return Xo.addEventListener(r,e.listener,!0)}))},t.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),vE.forEach(function(r){return Xo.removeEventListener(r,e.listener,!0)}),this.stopped=!0)},t}(),kp=new mH,mE=function(t){!bu&&t>0&&kp.start(),bu+=t,!bu&&kp.stop()},yH=function(t){return!jg(t)&&!sH(t)&&getComputedStyle(t).display==="inline"},wH=function(){function t(e,r){this.target=e,this.observedBox=r||fa.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return t.prototype.isActive=function(){var e=FA(this.target,this.observedBox,!0);return yH(this.target)&&(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},t}(),bH=function(){function t(e,r){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=r}return t}(),Qc=new WeakMap,yE=function(t,e){for(var r=0;r<t.length;r+=1)if(t[r].target===e)return r;return-1},Jc=function(){function t(){}return t.connect=function(e,r){var n=new bH(e,r);Qc.set(e,n)},t.observe=function(e,r,n){var i=Qc.get(e),s=i.observationTargets.length===0;yE(i.observationTargets,r)<0&&(s&&si.push(i),i.observationTargets.push(new wH(r,n&&n.box)),mE(1),kp.schedule())},t.unobserve=function(e,r){var n=Qc.get(e),i=yE(n.observationTargets,r),s=n.observationTargets.length===1;i>=0&&(s&&si.splice(si.indexOf(n),1),n.observationTargets.splice(i,1),mE(-1))},t.disconnect=function(e){var r=this,n=Qc.get(e);n.observationTargets.slice().forEach(function(i){return r.unobserve(e,i.target)}),n.activeTargets.splice(0,n.activeTargets.length)},t}(),_H=function(){function t(e){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof e!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Jc.connect(this,e)}return t.prototype.observe=function(e,r){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!hE(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Jc.observe(this,e,r)},t.prototype.unobserve=function(e){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!hE(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Jc.unobserve(this,e)},t.prototype.disconnect=function(){Jc.disconnect(this)},t.toString=function(){return"function ResizeObserver () { [polyfill code] }"},t}(),EH=de,IH=Yl,SH=so,TH=Hl,AH=Ga,OH=EH.TypeError,wE=function(t){return function(e,r,n,i){IH(r);var s=SH(e),o=TH(s),a=AH(s),c=t?a-1:0,u=t?-1:1;if(n<2)for(;;){if(c in o){i=o[c],c+=u;break}if(c+=u,t?c<0:a<=c)throw OH("Reduce of empty array with no initial value")}for(;t?c>=0:a>c;c+=u)c in o&&(i=r(i,o[c],c,s));return i}},CH={left:wE(!1),right:wE(!0)},RH=Pi,$H=de,kH=RH($H.process)=="process",xH=sn,NH=CH.left,PH=F0,bE=dg,DH=kH,LH=PH("reduce"),MH=!DH&&bE>79&&bE<83;xH({target:"Array",proto:!0,forced:!LH||MH},{reduce:function(e){var r=arguments.length;return NH(this,e,r,r>1?arguments[1]:void 0)}});var FH=Vr,UH=Ig.EXISTS,BA=Ce,jH=qr.f,VA=Function.prototype,BH=BA(VA.toString),qA=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,VH=BA(qA.exec),qH="name";FH&&!UH&&jH(VA,qH,{configurable:!0,get:function(){try{return VH(qA,BH(this))[1]}catch{return""}}});var WH=Zt,zH=function(){var t=WH(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e},Bg=Le,GH=de,Vg=GH.RegExp,qg=Bg(function(){var t=Vg("a","y");return t.lastIndex=2,t.exec("abcd")!=null}),KH=qg||Bg(function(){return!Vg("a","y").sticky}),HH=qg||Bg(function(){var t=Vg("^r","gy");return t.lastIndex=2,t.exec("str")!=null}),YH={BROKEN_CARET:HH,MISSED_STICKY:KH,UNSUPPORTED_Y:qg},XH=Le,QH=de,JH=QH.RegExp,ZH=XH(function(){var t=JH(".","s");return!(t.dotAll&&t.exec(`
`)&&t.flags==="s")}),e3=Le,t3=de,r3=t3.RegExp,n3=e3(function(){var t=r3("(?<a>b)","g");return t.exec("b").groups.a!=="b"||"b".replace(t,"$<a>c")!=="bc"}),ys=cr,ih=Ce,i3=Li,s3=zH,o3=YH,a3=Xl.exports,c3=kg,u3=oo.get,l3=ZH,h3=n3,f3=a3("native-string-replace",String.prototype.replace),tl=RegExp.prototype.exec,xp=tl,d3=ih("".charAt),p3=ih("".indexOf),v3=ih("".replace),yd=ih("".slice),Np=function(){var t=/a/,e=/b*/g;return ys(tl,t,"a"),ys(tl,e,"a"),t.lastIndex!==0||e.lastIndex!==0}(),WA=o3.BROKEN_CARET,Pp=/()??/.exec("")[1]!==void 0,g3=Np||Pp||WA||l3||h3;g3&&(xp=function(e){var r=this,n=u3(r),i=i3(e),s=n.raw,o,a,c,u,l,h,f;if(s)return s.lastIndex=r.lastIndex,o=ys(xp,s,i),r.lastIndex=s.lastIndex,o;var p=n.groups,g=WA&&r.sticky,E=ys(s3,r),I=r.source,O=0,P=i;if(g&&(E=v3(E,"y",""),p3(E,"g")===-1&&(E+="g"),P=yd(i,r.lastIndex),r.lastIndex>0&&(!r.multiline||r.multiline&&d3(i,r.lastIndex-1)!==`
`)&&(I="(?: "+I+")",P=" "+P,O++),a=new RegExp("^(?:"+I+")",E)),Pp&&(a=new RegExp("^"+I+"$(?!\\s)",E)),Np&&(c=r.lastIndex),u=ys(tl,g?a:r,P),g?u?(u.input=yd(u.input,O),u[0]=yd(u[0],O),u.index=r.lastIndex,r.lastIndex+=u[0].length):r.lastIndex=0:Np&&u&&(r.lastIndex=r.global?u.index+u[0].length:c),Pp&&u&&u.length>1&&ys(f3,u[0],a,function(){for(l=1;l<arguments.length-2;l++)arguments[l]===void 0&&(u[l]=void 0)}),u&&p)for(u.groups=h=c3(null),l=0;l<p.length;l++)f=p[l],h[f[0]]=u[f[1]];return u});var Wg=xp,m3=sn,_E=Wg;m3({target:"RegExp",proto:!0,forced:/./.exec!==_E},{exec:_E});var EE=Ce,IE=Dn.exports,y3=Wg,SE=Le,zA=Dt,w3=Di,b3=zA("species"),wd=RegExp.prototype,GA=function(t,e,r,n){var i=zA(t),s=!SE(function(){var u={};return u[i]=function(){return 7},""[t](u)!=7}),o=s&&!SE(function(){var u=!1,l=/a/;return t==="split"&&(l={},l.constructor={},l.constructor[b3]=function(){return l},l.flags="",l[i]=/./[i]),l.exec=function(){return u=!0,null},l[i](""),!u});if(!s||!o||r){var a=EE(/./[i]),c=e(i,""[t],function(u,l,h,f,p){var g=EE(u),E=l.exec;return E===y3||E===wd.exec?s&&!p?{done:!0,value:a(l,h,f)}:{done:!0,value:g(h,l,f)}:{done:!1}});IE(String.prototype,t,c[0]),IE(wd,i,c[1])}n&&w3(wd[i],"sham",!0)},_3=oA.charAt,KA=function(t,e,r){return e+(r?_3(t,e).length:1)},E3=de,TE=cr,I3=Zt,S3=rt,T3=Pi,A3=Wg,O3=E3.TypeError,HA=function(t,e){var r=t.exec;if(S3(r)){var n=TE(r,t,e);return n!==null&&I3(n),n}if(T3(t)==="RegExp")return TE(A3,t,e);throw O3("RegExp#exec called on incompatible receiver")},C3=cr,R3=GA,$3=Zt,k3=Sg,bd=Li,x3=no,N3=za,P3=KA,AE=HA;R3("match",function(t,e,r){return[function(i){var s=x3(this),o=i==null?void 0:N3(i,t);return o?C3(o,i,s):new RegExp(i)[t](bd(s))},function(n){var i=$3(this),s=bd(n),o=r(e,i,s);if(o.done)return o.value;if(!i.global)return AE(i,s);var a=i.unicode;i.lastIndex=0;for(var c=[],u=0,l;(l=AE(i,s))!==null;){var h=bd(l[0]);c[u]=h,h===""&&(i.lastIndex=P3(s,k3(i.lastIndex),a)),u++}return u===0?null:c}]});var D3=Gl,YA=Function.prototype,OE=YA.apply,CE=YA.call,L3=typeof Reflect=="object"&&Reflect.apply||(D3?CE.bind(OE):function(){return CE.apply(OE,arguments)}),zg=Ce,M3=so,F3=Math.floor,_d=zg("".charAt),U3=zg("".replace),Ed=zg("".slice),j3=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,B3=/\$([$&'`]|\d{1,2})/g,V3=function(t,e,r,n,i,s){var o=r+t.length,a=n.length,c=B3;return i!==void 0&&(i=M3(i),c=j3),U3(s,c,function(u,l){var h;switch(_d(l,0)){case"$":return"$";case"&":return t;case"`":return Ed(e,0,r);case"'":return Ed(e,o);case"<":h=i[Ed(l,1,-1)];break;default:var f=+l;if(f===0)return u;if(f>a){var p=F3(f/10);return p===0?u:p<=a?n[p-1]===void 0?_d(l,1):n[p-1]+_d(l,1):u}h=n[f-1]}return h===void 0?"":h})},q3=L3,RE=cr,sh=Ce,W3=GA,z3=Le,G3=Zt,K3=rt,H3=Zl,Y3=Sg,ss=Li,X3=no,Q3=KA,J3=za,Z3=V3,eY=HA,tY=Dt,Dp=tY("replace"),rY=Math.max,nY=Math.min,iY=sh([].concat),Id=sh([].push),$E=sh("".indexOf),kE=sh("".slice),sY=function(t){return t===void 0?t:String(t)},oY=function(){return"a".replace(/./,"$0")==="$0"}(),xE=function(){return/./[Dp]?/./[Dp]("a","$0")==="":!1}(),aY=!z3(function(){var t=/./;return t.exec=function(){var e=[];return e.groups={a:"7"},e},"".replace(t,"$<a>")!=="7"});W3("replace",function(t,e,r){var n=xE?"$":"$0";return[function(s,o){var a=X3(this),c=s==null?void 0:J3(s,Dp);return c?RE(c,s,a,o):RE(e,ss(a),s,o)},function(i,s){var o=G3(this),a=ss(i);if(typeof s=="string"&&$E(s,n)===-1&&$E(s,"$<")===-1){var c=r(e,o,a,s);if(c.done)return c.value}var u=K3(s);u||(s=ss(s));var l=o.global;if(l){var h=o.unicode;o.lastIndex=0}for(var f=[];;){var p=eY(o,a);if(p===null||(Id(f,p),!l))break;var g=ss(p[0]);g===""&&(o.lastIndex=Q3(a,Y3(o.lastIndex),h))}for(var E="",I=0,O=0;O<f.length;O++){p=f[O];for(var P=ss(p[0]),q=rY(nY(H3(p.index),a.length),0),G=[],k=1;k<p.length;k++)Id(G,sY(p[k]));var x=p.groups;if(u){var w=iY([P],G,q,a);x!==void 0&&Id(w,x);var R=ss(q3(s,void 0,w))}else R=Z3(P,a,q,G,x,s);q>=I&&(E+=kE(a,I,q)+R,I=q+P.length)}return E+kE(a,I)}]},!aY||!oY||xE);var rl=function(e){var r=Array.prototype.reduce.call(e,function(n,i){var s=i.name.match(/data-simplebar-(.+)/);if(s){var o=s[1].replace(/\W+(.)/g,function(a,c){return c.toUpperCase()});switch(i.value){case"true":n[o]=!0;break;case"false":n[o]=!1;break;case void 0:n[o]=!0;break;default:n[o]=i.value}}return n},{});return r};function dn(t){return!t||!t.ownerDocument||!t.ownerDocument.defaultView?window:t.ownerDocument.defaultView}function _u(t){return!t||!t.ownerDocument?document:t.ownerDocument}var fs=null,NE=null;$g&&window.addEventListener("resize",function(){NE!==window.devicePixelRatio&&(NE=window.devicePixelRatio,fs=null)});function PE(t){if(fs===null){var e=_u(t);if(typeof e=="undefined")return fs=0,fs;var r=e.body,n=e.createElement("div");n.classList.add("simplebar-hide-scrollbar"),r.appendChild(n);var i=n.getBoundingClientRect().right;r.removeChild(n),fs=i}return fs}var qe=function(){function t(r,n){var i=this;this.onScroll=function(){var s=dn(i.el);i.scrollXTicking||(s.requestAnimationFrame(i.scrollX),i.scrollXTicking=!0),i.scrollYTicking||(s.requestAnimationFrame(i.scrollY),i.scrollYTicking=!0)},this.scrollX=function(){i.axis.x.isOverflowing&&(i.showScrollbar("x"),i.positionScrollbar("x")),i.scrollXTicking=!1},this.scrollY=function(){i.axis.y.isOverflowing&&(i.showScrollbar("y"),i.positionScrollbar("y")),i.scrollYTicking=!1},this.onMouseEnter=function(){i.showScrollbar("x"),i.showScrollbar("y")},this.onMouseMove=function(s){i.mouseX=s.clientX,i.mouseY=s.clientY,(i.axis.x.isOverflowing||i.axis.x.forceVisible)&&i.onMouseMoveForAxis("x"),(i.axis.y.isOverflowing||i.axis.y.forceVisible)&&i.onMouseMoveForAxis("y")},this.onMouseLeave=function(){i.onMouseMove.cancel(),(i.axis.x.isOverflowing||i.axis.x.forceVisible)&&i.onMouseLeaveForAxis("x"),(i.axis.y.isOverflowing||i.axis.y.forceVisible)&&i.onMouseLeaveForAxis("y"),i.mouseX=-1,i.mouseY=-1},this.onWindowResize=function(){i.scrollbarWidth=i.getScrollbarWidth(),i.hideNativeScrollbar()},this.hideScrollbars=function(){i.axis.x.track.rect=i.axis.x.track.el.getBoundingClientRect(),i.axis.y.track.rect=i.axis.y.track.el.getBoundingClientRect(),i.isWithinBounds(i.axis.y.track.rect)||(i.axis.y.scrollbar.el.classList.remove(i.classNames.visible),i.axis.y.isVisible=!1),i.isWithinBounds(i.axis.x.track.rect)||(i.axis.x.scrollbar.el.classList.remove(i.classNames.visible),i.axis.x.isVisible=!1)},this.onPointerEvent=function(s){var o,a;i.axis.x.track.rect=i.axis.x.track.el.getBoundingClientRect(),i.axis.y.track.rect=i.axis.y.track.el.getBoundingClientRect(),(i.axis.x.isOverflowing||i.axis.x.forceVisible)&&(o=i.isWithinBounds(i.axis.x.track.rect)),(i.axis.y.isOverflowing||i.axis.y.forceVisible)&&(a=i.isWithinBounds(i.axis.y.track.rect)),(o||a)&&(s.preventDefault(),s.stopPropagation(),s.type==="mousedown"&&(o&&(i.axis.x.scrollbar.rect=i.axis.x.scrollbar.el.getBoundingClientRect(),i.isWithinBounds(i.axis.x.scrollbar.rect)?i.onDragStart(s,"x"):i.onTrackClick(s,"x")),a&&(i.axis.y.scrollbar.rect=i.axis.y.scrollbar.el.getBoundingClientRect(),i.isWithinBounds(i.axis.y.scrollbar.rect)?i.onDragStart(s,"y"):i.onTrackClick(s,"y"))))},this.drag=function(s){var o,a=i.axis[i.draggedAxis].track,c=a.rect[i.axis[i.draggedAxis].sizeAttr],u=i.axis[i.draggedAxis].scrollbar,l=i.contentWrapperEl[i.axis[i.draggedAxis].scrollSizeAttr],h=parseInt(i.elStyles[i.axis[i.draggedAxis].sizeAttr],10);s.preventDefault(),s.stopPropagation(),i.draggedAxis==="y"?o=s.pageY:o=s.pageX;var f=o-a.rect[i.axis[i.draggedAxis].offsetAttr]-i.axis[i.draggedAxis].dragOffset,p=f/(c-u.size),g=p*(l-h);i.draggedAxis==="x"&&(g=i.isRtl&&t.getRtlHelpers().isRtlScrollbarInverted?g-(c+u.size):g,g=i.isRtl&&t.getRtlHelpers().isRtlScrollingInverted?-g:g),i.contentWrapperEl[i.axis[i.draggedAxis].scrollOffsetAttr]=g},this.onEndDrag=function(s){var o=_u(i.el),a=dn(i.el);s.preventDefault(),s.stopPropagation(),i.el.classList.remove(i.classNames.dragging),o.removeEventListener("mousemove",i.drag,!0),o.removeEventListener("mouseup",i.onEndDrag,!0),i.removePreventClickId=a.setTimeout(function(){o.removeEventListener("click",i.preventClick,!0),o.removeEventListener("dblclick",i.preventClick,!0),i.removePreventClickId=null})},this.preventClick=function(s){s.preventDefault(),s.stopPropagation()},this.el=r,this.minScrollbarWidth=20,this.options=Object.assign({},t.defaultOptions,{},n),this.classNames=Object.assign({},t.defaultOptions.classNames,{},this.options.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}}},this.removePreventClickId=null,!t.instances.has(this.el)&&(this.recalculate=sE(this.recalculate.bind(this),64),this.onMouseMove=sE(this.onMouseMove.bind(this),64),this.hideScrollbars=cE(this.hideScrollbars.bind(this),this.options.timeout),this.onWindowResize=cE(this.onWindowResize.bind(this),64,{leading:!0}),t.getRtlHelpers=eH(t.getRtlHelpers),this.init())}t.getRtlHelpers=function(){var n=document.createElement("div");n.innerHTML='<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';var i=n.firstElementChild;document.body.appendChild(i);var s=i.firstElementChild;i.scrollLeft=0;var o=t.getOffset(i),a=t.getOffset(s);i.scrollLeft=999;var c=t.getOffset(s);return{isRtlScrollingInverted:o.left!==a.left&&a.left-c.left!==0,isRtlScrollbarInverted:o.left!==a.left}},t.getOffset=function(n){var i=n.getBoundingClientRect(),s=_u(n),o=dn(n);return{top:i.top+(o.pageYOffset||s.documentElement.scrollTop),left:i.left+(o.pageXOffset||s.documentElement.scrollLeft)}};var e=t.prototype;return e.init=function(){t.instances.set(this.el,this),$g&&(this.initDOM(),this.setAccessibilityAttributes(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},e.initDOM=function(){var n=this;if(Array.prototype.filter.call(this.el.children,function(o){return o.classList.contains(n.classNames.wrapper)}).length)this.wrapperEl=this.el.querySelector("."+this.classNames.wrapper),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector("."+this.classNames.contentWrapper),this.contentEl=this.options.contentNode||this.el.querySelector("."+this.classNames.contentEl),this.offsetEl=this.el.querySelector("."+this.classNames.offset),this.maskEl=this.el.querySelector("."+this.classNames.mask),this.placeholderEl=this.findChild(this.wrapperEl,"."+this.classNames.placeholder),this.heightAutoObserverWrapperEl=this.el.querySelector("."+this.classNames.heightAutoObserverWrapperEl),this.heightAutoObserverEl=this.el.querySelector("."+this.classNames.heightAutoObserverEl),this.axis.x.track.el=this.findChild(this.el,"."+this.classNames.track+"."+this.classNames.horizontal),this.axis.y.track.el=this.findChild(this.el,"."+this.classNames.track+"."+this.classNames.vertical);else{for(this.wrapperEl=document.createElement("div"),this.contentWrapperEl=document.createElement("div"),this.offsetEl=document.createElement("div"),this.maskEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.placeholderEl=document.createElement("div"),this.heightAutoObserverWrapperEl=document.createElement("div"),this.heightAutoObserverEl=document.createElement("div"),this.wrapperEl.classList.add(this.classNames.wrapper),this.contentWrapperEl.classList.add(this.classNames.contentWrapper),this.offsetEl.classList.add(this.classNames.offset),this.maskEl.classList.add(this.classNames.mask),this.contentEl.classList.add(this.classNames.contentEl),this.placeholderEl.classList.add(this.classNames.placeholder),this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl),this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.contentWrapperEl.appendChild(this.contentEl),this.offsetEl.appendChild(this.contentWrapperEl),this.maskEl.appendChild(this.offsetEl),this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),this.wrapperEl.appendChild(this.maskEl),this.wrapperEl.appendChild(this.placeholderEl),this.el.appendChild(this.wrapperEl)}if(!this.axis.x.track.el||!this.axis.y.track.el){var i=document.createElement("div"),s=document.createElement("div");i.classList.add(this.classNames.track),s.classList.add(this.classNames.scrollbar),i.appendChild(s),this.axis.x.track.el=i.cloneNode(!0),this.axis.x.track.el.classList.add(this.classNames.horizontal),this.axis.y.track.el=i.cloneNode(!0),this.axis.y.track.el.classList.add(this.classNames.vertical),this.el.appendChild(this.axis.x.track.el),this.el.appendChild(this.axis.y.track.el)}this.axis.x.scrollbar.el=this.axis.x.track.el.querySelector("."+this.classNames.scrollbar),this.axis.y.scrollbar.el=this.axis.y.track.el.querySelector("."+this.classNames.scrollbar),this.options.autoHide||(this.axis.x.scrollbar.el.classList.add(this.classNames.visible),this.axis.y.scrollbar.el.classList.add(this.classNames.visible)),this.el.setAttribute("data-simplebar","init")},e.setAccessibilityAttributes=function(){var n=this.options.ariaLabel||"scrollable content";this.contentWrapperEl.setAttribute("tabindex","0"),this.contentWrapperEl.setAttribute("role","region"),this.contentWrapperEl.setAttribute("aria-label",n)},e.initListeners=function(){var n=this,i=dn(this.el);this.options.autoHide&&this.el.addEventListener("mouseenter",this.onMouseEnter),["mousedown","click","dblclick"].forEach(function(a){n.el.addEventListener(a,n.onPointerEvent,!0)}),["touchstart","touchend","touchmove"].forEach(function(a){n.el.addEventListener(a,n.onPointerEvent,{capture:!0,passive:!0})}),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl.addEventListener("scroll",this.onScroll),i.addEventListener("resize",this.onWindowResize);var s=!1,o=i.ResizeObserver||_H;this.resizeObserver=new o(function(){!s||n.recalculate()}),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),i.requestAnimationFrame(function(){s=!0}),this.mutationObserver=new i.MutationObserver(this.recalculate),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})},e.recalculate=function(){var n=dn(this.el);this.elStyles=n.getComputedStyle(this.el),this.isRtl=this.elStyles.direction==="rtl";var i=this.heightAutoObserverEl.offsetHeight<=1,s=this.heightAutoObserverEl.offsetWidth<=1,o=this.contentEl.offsetWidth,a=this.contentWrapperEl.offsetWidth,c=this.elStyles.overflowX,u=this.elStyles.overflowY;this.contentEl.style.padding=this.elStyles.paddingTop+" "+this.elStyles.paddingRight+" "+this.elStyles.paddingBottom+" "+this.elStyles.paddingLeft,this.wrapperEl.style.margin="-"+this.elStyles.paddingTop+" -"+this.elStyles.paddingRight+" -"+this.elStyles.paddingBottom+" -"+this.elStyles.paddingLeft;var l=this.contentEl.scrollHeight,h=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=i?"auto":"100%",this.placeholderEl.style.width=s?o+"px":"auto",this.placeholderEl.style.height=l+"px";var f=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=h>o,this.axis.y.isOverflowing=l>f,this.axis.x.isOverflowing=c==="hidden"?!1:this.axis.x.isOverflowing,this.axis.y.isOverflowing=u==="hidden"?!1:this.axis.y.isOverflowing,this.axis.x.forceVisible=this.options.forceVisible==="x"||this.options.forceVisible===!0,this.axis.y.forceVisible=this.options.forceVisible==="y"||this.options.forceVisible===!0,this.hideNativeScrollbar();var p=this.axis.x.isOverflowing?this.scrollbarWidth:0,g=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&h>a-g,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&l>f-p,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el.style.width=this.axis.x.scrollbar.size+"px",this.axis.y.scrollbar.el.style.height=this.axis.y.scrollbar.size+"px",this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")},e.getScrollbarSize=function(n){if(n===void 0&&(n="y"),!this.axis[n].isOverflowing)return 0;var i=this.contentEl[this.axis[n].scrollSizeAttr],s=this.axis[n].track.el[this.axis[n].offsetSizeAttr],o,a=s/i;return o=Math.max(~~(a*s),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(o=Math.min(o,this.options.scrollbarMaxSize)),o},e.positionScrollbar=function(n){if(n===void 0&&(n="y"),!!this.axis[n].isOverflowing){var i=this.contentWrapperEl[this.axis[n].scrollSizeAttr],s=this.axis[n].track.el[this.axis[n].offsetSizeAttr],o=parseInt(this.elStyles[this.axis[n].sizeAttr],10),a=this.axis[n].scrollbar,c=this.contentWrapperEl[this.axis[n].scrollOffsetAttr];c=n==="x"&&this.isRtl&&t.getRtlHelpers().isRtlScrollingInverted?-c:c;var u=c/(i-o),l=~~((s-a.size)*u);l=n==="x"&&this.isRtl&&t.getRtlHelpers().isRtlScrollbarInverted?l+(s-a.size):l,a.el.style.transform=n==="x"?"translate3d("+l+"px, 0, 0)":"translate3d(0, "+l+"px, 0)"}},e.toggleTrackVisibility=function(n){n===void 0&&(n="y");var i=this.axis[n].track.el,s=this.axis[n].scrollbar.el;this.axis[n].isOverflowing||this.axis[n].forceVisible?(i.style.visibility="visible",this.contentWrapperEl.style[this.axis[n].overflowAttr]="scroll"):(i.style.visibility="hidden",this.contentWrapperEl.style[this.axis[n].overflowAttr]="hidden"),this.axis[n].isOverflowing?s.style.display="block":s.style.display="none"},e.hideNativeScrollbar=function(){this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-"+this.scrollbarWidth+"px":0,this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-"+this.scrollbarWidth+"px":0},e.onMouseMoveForAxis=function(n){n===void 0&&(n="y"),this.axis[n].track.rect=this.axis[n].track.el.getBoundingClientRect(),this.axis[n].scrollbar.rect=this.axis[n].scrollbar.el.getBoundingClientRect();var i=this.isWithinBounds(this.axis[n].scrollbar.rect);i?this.axis[n].scrollbar.el.classList.add(this.classNames.hover):this.axis[n].scrollbar.el.classList.remove(this.classNames.hover),this.isWithinBounds(this.axis[n].track.rect)?(this.showScrollbar(n),this.axis[n].track.el.classList.add(this.classNames.hover)):this.axis[n].track.el.classList.remove(this.classNames.hover)},e.onMouseLeaveForAxis=function(n){n===void 0&&(n="y"),this.axis[n].track.el.classList.remove(this.classNames.hover),this.axis[n].scrollbar.el.classList.remove(this.classNames.hover)},e.showScrollbar=function(n){n===void 0&&(n="y");var i=this.axis[n].scrollbar.el;this.axis[n].isVisible||(i.classList.add(this.classNames.visible),this.axis[n].isVisible=!0),this.options.autoHide&&this.hideScrollbars()},e.onDragStart=function(n,i){i===void 0&&(i="y");var s=_u(this.el),o=dn(this.el),a=this.axis[i].scrollbar,c=i==="y"?n.pageY:n.pageX;this.axis[i].dragOffset=c-a.rect[this.axis[i].offsetAttr],this.draggedAxis=i,this.el.classList.add(this.classNames.dragging),s.addEventListener("mousemove",this.drag,!0),s.addEventListener("mouseup",this.onEndDrag,!0),this.removePreventClickId===null?(s.addEventListener("click",this.preventClick,!0),s.addEventListener("dblclick",this.preventClick,!0)):(o.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},e.onTrackClick=function(n,i){var s=this;if(i===void 0&&(i="y"),!!this.options.clickOnTrack){var o=dn(this.el);this.axis[i].scrollbar.rect=this.axis[i].scrollbar.el.getBoundingClientRect();var a=this.axis[i].scrollbar,c=a.rect[this.axis[i].offsetAttr],u=parseInt(this.elStyles[this.axis[i].sizeAttr],10),l=this.contentWrapperEl[this.axis[i].scrollOffsetAttr],h=i==="y"?this.mouseY-c:this.mouseX-c,f=h<0?-1:1,p=f===-1?l-u:l+u,g=function E(){if(f===-1){if(l>p){var I;l-=s.options.clickOnTrackSpeed,s.contentWrapperEl.scrollTo((I={},I[s.axis[i].offsetAttr]=l,I)),o.requestAnimationFrame(E)}}else if(l<p){var O;l+=s.options.clickOnTrackSpeed,s.contentWrapperEl.scrollTo((O={},O[s.axis[i].offsetAttr]=l,O)),o.requestAnimationFrame(E)}};g()}},e.getContentElement=function(){return this.contentEl},e.getScrollElement=function(){return this.contentWrapperEl},e.getScrollbarWidth=function(){try{return getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display==="none"||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:PE(this.el)}catch{return PE(this.el)}},e.removeListeners=function(){var n=this,i=dn(this.el);this.options.autoHide&&this.el.removeEventListener("mouseenter",this.onMouseEnter),["mousedown","click","dblclick"].forEach(function(s){n.el.removeEventListener(s,n.onPointerEvent,!0)}),["touchstart","touchend","touchmove"].forEach(function(s){n.el.removeEventListener(s,n.onPointerEvent,{capture:!0,passive:!0})}),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),i.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),this.recalculate.cancel(),this.onMouseMove.cancel(),this.hideScrollbars.cancel(),this.onWindowResize.cancel()},e.unMount=function(){this.removeListeners(),t.instances.delete(this.el)},e.isWithinBounds=function(n){return this.mouseX>=n.left&&this.mouseX<=n.left+n.width&&this.mouseY>=n.top&&this.mouseY<=n.top+n.height},e.findChild=function(n,i){var s=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector;return Array.prototype.filter.call(n.children,function(o){return s.call(o,i)})[0]},t}();qe.defaultOptions={autoHide:!0,forceVisible:!1,clickOnTrack:!0,clickOnTrackSpeed:40,classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging"},scrollbarMinSize:25,scrollbarMaxSize:0,timeout:1e3};qe.instances=new WeakMap;qe.initDOMLoadedElements=function(){document.removeEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.removeEventListener("load",this.initDOMLoadedElements),Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"),function(t){t.getAttribute("data-simplebar")!=="init"&&!qe.instances.has(t)&&new qe(t,rl(t.attributes))})};qe.removeObserver=function(){this.globalObserver.disconnect()};qe.initHtmlApi=function(){this.initDOMLoadedElements=this.initDOMLoadedElements.bind(this),typeof MutationObserver!="undefined"&&(this.globalObserver=new MutationObserver(qe.handleMutations),this.globalObserver.observe(document,{childList:!0,subtree:!0})),document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll?window.setTimeout(this.initDOMLoadedElements):(document.addEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.addEventListener("load",this.initDOMLoadedElements))};qe.handleMutations=function(t){t.forEach(function(e){Array.prototype.forEach.call(e.addedNodes,function(r){r.nodeType===1&&(r.hasAttribute("data-simplebar")?!qe.instances.has(r)&&document.documentElement.contains(r)&&new qe(r,rl(r.attributes)):Array.prototype.forEach.call(r.querySelectorAll("[data-simplebar]"),function(n){n.getAttribute("data-simplebar")!=="init"&&!qe.instances.has(n)&&document.documentElement.contains(n)&&new qe(n,rl(n.attributes))}))}),Array.prototype.forEach.call(e.removedNodes,function(r){r.nodeType===1&&(r.getAttribute("data-simplebar")==="init"?qe.instances.has(r)&&!document.documentElement.contains(r)&&qe.instances.get(r).unMount():Array.prototype.forEach.call(r.querySelectorAll('[data-simplebar="init"]'),function(n){qe.instances.has(n)&&!document.documentElement.contains(n)&&qe.instances.get(n).unMount()}))})})};qe.getOptions=rl;$g&&qe.initHtmlApi();var cY={name:"simplebar-vue",mounted:function(){var e=qe.getOptions(this.$refs.element.attributes);this.SimpleBar=new qe(this.$refs.element,e)},computed:{scrollElement:function(){return this.$refs.scrollElement},contentElement:function(){return this.$refs.contentElement}}},uY=cY,XA=function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",{ref:"element"},[n("div",{staticClass:"simplebar-wrapper"},[e._m(0),e._v(" "),n("div",{staticClass:"simplebar-mask"},[n("div",{staticClass:"simplebar-offset"},[n("div",e._g({ref:"scrollElement",staticClass:"simplebar-content-wrapper"},Object.assign({},e.$listeners.scroll&&{scroll:e.$listeners.scroll})),[n("div",{ref:"contentElement",staticClass:"simplebar-content"},[e._t("default")],2)])])]),e._v(" "),n("div",{staticClass:"simplebar-placeholder"})]),e._v(" "),e._m(1),e._v(" "),e._m(2)])},lY=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"simplebar-height-auto-observer-wrapper"},[r("div",{staticClass:"simplebar-height-auto-observer"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"simplebar-track simplebar-horizontal"},[r("div",{staticClass:"simplebar-scrollbar"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"simplebar-track simplebar-vertical"},[r("div",{staticClass:"simplebar-scrollbar"})])}];XA._withStripped=!0;var hY=void 0,fY=void 0,dY=!1;function pY(t,e,r,n,i,s,o,a){var c=(typeof r=="function"?r.options:r)||{};return c.__file="/Users/adriendenat/Sites/simplebar/packages/simplebar-vue/index.vue",c.render||(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,i&&(c.functional=!0)),c._scopeId=n,c}var ite=pY({render:XA,staticRenderFns:lY},hY,uY,fY,dY);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);i<128?e[r++]=i:i<2048?(e[r++]=i>>6|192,e[r++]=i&63|128):(i&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++n)&1023),e[r++]=i>>18|240,e[r++]=i>>12&63|128,e[r++]=i>>6&63|128,e[r++]=i&63|128):(e[r++]=i>>12|224,e[r++]=i>>6&63|128,e[r++]=i&63|128)}return e},vY=function(t){const e=[];let r=0,n=0;for(;r<t.length;){const i=t[r++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[r++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[r++],o=t[r++],a=t[r++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const s=t[r++],o=t[r++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},JA={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(f=64)),n.push(r[l],r[h],r[f],r[p])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(QA(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vY(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<t.length;){const s=r[t.charAt(i++)],a=i<t.length?r[t.charAt(i)]:0;++i;const u=i<t.length?r[t.charAt(i)]:64;++i;const h=i<t.length?r[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const f=s<<2|a>>4;if(n.push(f),u!==64){const p=a<<4&240|u>>2;if(n.push(p),h!==64){const g=u<<6&192|h;n.push(g)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},gY=function(t){const e=QA(t);return JA.encodeByteArray(e,!0)},DE=function(t){return gY(t).replace(/\./g,"")},mY=function(t){try{return JA.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function nl(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const r=e;return new Date(r.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const r in e)!e.hasOwnProperty(r)||!yY(r)||(t[r]=nl(t[r],e[r]));return t}function yY(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wY{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bY(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},n=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[DE(JSON.stringify(r)),DE(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ZA(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function Gg(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _Y(){return typeof self=="object"&&self.self===self}function Kg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function oh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function EY(){return ke().indexOf("Electron/")>=0}function Hg(){const t=ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function IY(){return ke().indexOf("MSAppHost/")>=0}function SY(){return!Gg()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function il(){return typeof indexedDB=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TY="FirebaseError";class Yt extends Error{constructor(e,r,n){super(r);this.code=e,this.customData=n,this.name=TY,Object.setPrototypeOf(this,Yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fi.prototype.create)}}class Fi{constructor(e,r,n){this.service=e,this.serviceName=r,this.errors=n}create(e,...r){const n=r[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?AY(s,n):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Yt(i,a,n)}}function AY(t,e){return t.replace(OY,(r,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const OY=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function CY(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Lp(t,e){if(t===e)return!0;const r=Object.keys(t),n=Object.keys(e);for(const i of r){if(!n.includes(i))return!1;const s=t[i],o=e[i];if(ME(s)&&ME(o)){if(!Lp(s,o))return!1}else if(s!==o)return!1}for(const i of n)if(!r.includes(i))return!1;return!0}function ME(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(t){const e=[];for(const[r,n]of Object.entries(t))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function ws(t){const e={};return t.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,s]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function zo(t){const e=t.indexOf("?");if(!e)return"";const r=t.indexOf("#",e);return t.substring(e,r>0?r:void 0)}function eO(t,e){const r=new RY(t,e);return r.subscribe.bind(r)}class RY{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,n){let i;if(e===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");$Y(e,["next","error","complete"])?i=e:i={next:e,error:r,complete:n},i.next===void 0&&(i.next=Sd),i.error===void 0&&(i.error=Sd),i.complete===void 0&&(i.complete=Sd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(n){typeof console!="undefined"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $Y(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function Sd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t){return t&&t._delegate?t._delegate:t}class Zr{constructor(e,r,n){this.name=e,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kY{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const n=new wY;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:r});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(NY(e))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zn){return this.instances.has(e)}getOptions(e=zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);n===a&&o.resolve(i)}return i}onInit(e,r){var n;const i=this.normalizeInstanceIdentifier(r),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,r){const n=this.onInitCallbacks.get(r);if(!!n)for(const i of n)try{i(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:xY(e),options:r}),this.instances.set(e,n),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=zn){return this.component?this.component.multipleInstances?e:zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xY(t){return t===zn?void 0:t}function NY(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PY{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new kY(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=[];var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const tO={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},DY=_e.INFO,LY={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},MY=(t,e,...r)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),i=LY[e];if(i)console[i](`[${n}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ah{constructor(e){this.name=e,this._logLevel=DY,this._logHandler=MY,this._userLogHandler=null,Yg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}function FY(t){Yg.forEach(e=>{e.setLogLevel(t)})}function UY(t,e){for(const r of Yg){let n=null;e&&e.level&&(n=tO[e.level]),t===null?r.userLogHandler=null:r.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(n!=null?n:i.logLevel)&&t({level:_e[s].toLowerCase(),message:a,args:o,type:i.name})}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jY{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(BY(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function BY(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mp="@firebase/app",FE="0.7.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=new ah("@firebase/app"),VY="@firebase/app-compat",qY="@firebase/analytics-compat",WY="@firebase/analytics",zY="@firebase/app-check-compat",GY="@firebase/app-check",KY="@firebase/auth",HY="@firebase/auth-compat",YY="@firebase/database",XY="@firebase/database-compat",QY="@firebase/functions",JY="@firebase/functions-compat",ZY="@firebase/installations",e4="@firebase/installations-compat",t4="@firebase/messaging",r4="@firebase/messaging-compat",n4="@firebase/performance",i4="@firebase/performance-compat",s4="@firebase/remote-config",o4="@firebase/remote-config-compat",a4="@firebase/storage",c4="@firebase/storage-compat",u4="@firebase/firestore",l4="@firebase/firestore-compat",h4="firebase",f4="9.6.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="[DEFAULT]",d4={[Mp]:"fire-core",[VY]:"fire-core-compat",[WY]:"fire-analytics",[qY]:"fire-analytics-compat",[GY]:"fire-app-check",[zY]:"fire-app-check-compat",[KY]:"fire-auth",[HY]:"fire-auth-compat",[YY]:"fire-rtdb",[XY]:"fire-rtdb-compat",[QY]:"fire-fn",[JY]:"fire-fn-compat",[ZY]:"fire-iid",[e4]:"fire-iid-compat",[t4]:"fire-fcm",[r4]:"fire-fcm-compat",[n4]:"fire-perf",[i4]:"fire-perf-compat",[s4]:"fire-rc",[o4]:"fire-rc-compat",[a4]:"fire-gcs",[c4]:"fire-gcs-compat",[u4]:"fire-fst",[l4]:"fire-fst-compat","fire-js":"fire-js",[h4]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new Map,da=new Map;function sl(t,e){try{t.container.addComponent(e)}catch(r){Xg.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function rO(t,e){t.container.addOrOverwriteComponent(e)}function bi(t){const e=t.name;if(da.has(e))return Xg.debug(`There were multiple attempts to register component ${e}.`),!1;da.set(e,t);for(const r of Rn.values())sl(r,t);return!0}function nO(t,e){return t.container.getProvider(e)}function p4(t,e,r=wi){nO(t,e).clearInstance(r)}function v4(){da.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g4={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},pa=new Fi("app","Firebase",g4);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m4{constructor(e,r,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pa.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=f4;function iO(t,e={}){typeof e!="object"&&(e={name:e});const r=Object.assign({name:wi,automaticDataCollectionEnabled:!1},e),n=r.name;if(typeof n!="string"||!n)throw pa.create("bad-app-name",{appName:String(n)});const i=Rn.get(n);if(i){if(Lp(t,i.options)&&Lp(r,i.config))return i;throw pa.create("duplicate-app",{appName:n})}const s=new PY(n);for(const a of da.values())s.addComponent(a);const o=new m4(t,r,s);return Rn.set(n,o),o}function y4(t=wi){const e=Rn.get(t);if(!e)throw pa.create("no-app",{appName:t});return e}function w4(){return Array.from(Rn.values())}async function sO(t){const e=t.name;Rn.has(e)&&(Rn.delete(e),await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function Lr(t,e,r){var n;let i=(n=d4[t])!==null&&n!==void 0?n:t;r&&(i+=`-${r}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xg.warn(a.join(" "));return}bi(new Zr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function oO(t,e){if(t!==null&&typeof t!="function")throw pa.create("invalid-log-argument");UY(t,e)}function aO(t){FY(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b4(t){bi(new Zr("platform-logger",e=>new jY(e),"PRIVATE")),Lr(Mp,FE,t),Lr(Mp,FE,"esm2017"),Lr("fire-js","")}b4("");var _4=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",SDK_VERSION:Ui,_DEFAULT_ENTRY_NAME:wi,_addComponent:sl,_addOrOverwriteComponent:rO,_apps:Rn,_clearComponents:v4,_components:da,_getProvider:nO,_registerComponent:bi,_removeServiceInstance:p4,deleteApp:sO,getApp:y4,getApps:w4,initializeApp:iO,onLog:oO,registerVersion:Lr,setLogLevel:aO,FirebaseError:Yt});/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(e,r){this._delegate=e,this.firebase=r,sl(e,new Zr("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),sO(this._delegate)))}_getService(e,r=wi){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((n=i.getComponent())===null||n===void 0?void 0:n.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:r})}_removeServiceInstance(e,r=wi){this._delegate.container.getProvider(e).clearInstance(r)}_addComponent(e){sl(this._delegate,e)}_addOrOverwriteComponent(e){rO(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I4={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},UE=new Fi("app-compat","Firebase",I4);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S4(t){const e={},r={__esModule:!0,initializeApp:s,app:i,registerVersion:Lr,setLogLevel:aO,onLog:oO,apps:null,SDK_VERSION:Ui,INTERNAL:{registerComponent:a,removeApp:n,useAsService:c,modularAPIs:_4}};r.default=r,Object.defineProperty(r,"apps",{get:o});function n(u){delete e[u]}function i(u){if(u=u||wi,!LE(e,u))throw UE.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,l={}){const h=iO(u,l);if(LE(e,h.name))return e[h.name];const f=new t(h,r);return e[h.name]=f,f}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(bi(u)&&u.type==="PUBLIC"){const f=(p=i())=>{if(typeof p[h]!="function")throw UE.create("invalid-app-argument",{appName:l});return p[h]()};u.serviceProps!==void 0&&nl(f,u.serviceProps),r[h]=f,t.prototype[h]=function(...p){return this._getService.bind(this,l).apply(this,u.multipleInstances?p:[])}}return u.type==="PUBLIC"?r[h]:null}function c(u,l){return l==="serverAuth"?null:l}return r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cO(){const t=S4(E4);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:cO,extendNamespace:e,createSubscribe:eO,ErrorFactory:Fi,deepExtend:nl});function e(r){nl(t,r)}return t}const T4=cO();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE=new ah("@firebase/app-compat"),A4="@firebase/app-compat",O4="0.1.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C4(t){Lr(A4,O4,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(_Y()&&self.firebase!==void 0){jE.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&jE.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Ya=T4;C4();var R4="firebase",$4="9.6.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ya.registerVersion(R4,$4,"app-compat");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Qg(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r}const Mo={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},os={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k4(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function uO(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const x4=k4,N4=uO,lO=new Fi("auth","Firebase",uO());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=new ah("@firebase/auth");function Eu(t,...e){BE.logLevel<=_e.ERROR&&BE.error(`Auth (${Ui}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,...e){throw Jg(t,...e)}function mt(t,...e){return Jg(t,...e)}function hO(t,e,r){const n=Object.assign(Object.assign({},N4()),{[e]:r});return new Fi("auth","Firebase",n).create(e,{appName:t.name})}function uo(t,e,r){const n=r;if(!(e instanceof n))throw n.name!==e.constructor.name&&bt(t,"argument-error"),hO(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Jg(t,...e){if(typeof t!="string"){const r=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(r,...n)}return lO.create(t,...e)}function U(t,e,...r){if(!t)throw Jg(e,...r)}function Pr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Eu(e),new Error(e)}function mr(t,e){t||Pr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE=new Map;function Gt(t){mr(t instanceof Function,"Expected a class definition");let e=VE.get(t);return e?(mr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,VE.set(t,e),e)}function P4(t,e){const r=(e==null?void 0:e.persistence)||[],n=(Array.isArray(r)?r:[r]).map(Gt);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Zg(){return qE()==="http:"||qE()==="https:"}function qE(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D4(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zg()||Kg()||"connection"in navigator)?navigator.onLine:!0}function L4(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,r){this.shortDelay=e,this.longDelay=r,mr(r>e,"Short delay should be less than long delay!"),this.isMobile=ZA()||oh()}get(){return D4()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(t,e){mr(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{static initialize(e,r,n){this.fetchImpl=e,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Pr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Pr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Pr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M4={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F4=new Xa(3e4,6e4);function nt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function lt(t,e,r,n,i={}){return dO(t,i,async()=>{let s={},o={};n&&(e==="GET"?o=n:s={body:JSON.stringify(n)});const a=co(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),fO.fetch()(pO(t,t.config.apiHost,r,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function dO(t,e,r){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},M4),e);try{const i=new U4(t),s=await Promise.race([r(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Iu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Iu(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Iu(t,"email-already-in-use",o);const l=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw hO(t,l,u);bt(t,l)}}catch(i){if(i instanceof Yt)throw i;bt(t,"network-request-failed")}}async function on(t,e,r,n,i={}){const s=await lt(t,e,r,n,i);return"mfaPendingCredential"in s&&bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function pO(t,e,r,n){const i=`${e}${r}?${n}`;return t.config.emulator?em(t.config,i):`${t.config.apiScheme}://${i}`}class U4{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(mt(this.auth,"network-request-failed")),F4.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Iu(t,e,r){const n={appName:t.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=mt(t,e,n);return i.customData._tokenResponse=r,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j4(t,e){return lt(t,"POST","/v1/accounts:delete",e)}async function B4(t,e){return lt(t,"POST","/v1/accounts:update",e)}async function V4(t,e){return lt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function q4(t,e=!1){const r=re(t),n=await r.getIdToken(e),i=ch(n);U(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:Qo(Td(i.auth_time)),issuedAtTime:Qo(Td(i.iat)),expirationTime:Qo(Td(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Td(t){return Number(t)*1e3}function ch(t){const[e,r,n]=t.split(".");if(e===void 0||r===void 0||n===void 0)return Eu("JWT malformed, contained fewer than 3 sections"),null;try{const i=mY(r);return i?JSON.parse(i):(Eu("Failed to decode base64 JWT payload"),null)}catch(i){return Eu("Caught error parsing JWT payload as JSON",i),null}}function W4(t){const e=ch(t);return U(e,"internal-error"),U(typeof e.exp!="undefined","internal-error"),U(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(t,e,r=!1){if(r)return e;try{return await e}catch(n){throw n instanceof Yt&&z4(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function z4({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G4{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var r;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qo(this.lastLoginAt),this.creationTime=Qo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ga(t){var e;const r=t.auth,n=await t.getIdToken(),i=await en(t,V4(r,{idToken:n}));U(i==null?void 0:i.users.length,r,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?Y4(s.providerUserInfo):[],a=H4(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new vO(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function K4(t){const e=re(t);await ga(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function H4(t,e){return[...t.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Y4(t){return t.map(e=>{var{providerId:r}=e,n=Qg(e,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X4(t,e){const r=await dO(t,{},async()=>{const n=co({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=pO(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fO.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken!="undefined","internal-error"),U(typeof e.refreshToken!="undefined","internal-error");const r="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):W4(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}async getToken(e,r=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!r&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:n,refreshToken:i,expiresIn:s}=await X4(e,r);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,r,n){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,r){const{refreshToken:n,accessToken:i,expirationTime:s}=r,o=new ma;return n&&(U(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ma,this.toJSON())}_performRefresh(){return Pr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t,e){U(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class ai{constructor(e){var{uid:r,auth:n,stsTokenManager:i}=e,s=Qg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new G4(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vO(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const r=await en(this,this.stsTokenManager.getToken(this.auth,e));return U(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return q4(this,e)}reload(){return K4(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ai(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),r&&await ga(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await en(this,j4(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var n,i,s,o,a,c,u,l;const h=(n=r.displayName)!==null&&n!==void 0?n:void 0,f=(i=r.email)!==null&&i!==void 0?i:void 0,p=(s=r.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=r.photoURL)!==null&&o!==void 0?o:void 0,E=(a=r.tenantId)!==null&&a!==void 0?a:void 0,I=(c=r._redirectEventId)!==null&&c!==void 0?c:void 0,O=(u=r.createdAt)!==null&&u!==void 0?u:void 0,P=(l=r.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:q,emailVerified:G,isAnonymous:k,providerData:x,stsTokenManager:w}=r;U(q&&w,e,"internal-error");const R=ma.fromJSON(this.name,w);U(typeof q=="string",e,"internal-error"),pn(h,e.name),pn(f,e.name),U(typeof G=="boolean",e,"internal-error"),U(typeof k=="boolean",e,"internal-error"),pn(p,e.name),pn(g,e.name),pn(E,e.name),pn(I,e.name),pn(O,e.name),pn(P,e.name);const H=new ai({uid:q,auth:e,email:f,emailVerified:G,displayName:h,isAnonymous:k,photoURL:g,phoneNumber:p,tenantId:E,stsTokenManager:R,createdAt:O,lastLoginAt:P});return x&&Array.isArray(x)&&(H.providerData=x.map(ne=>Object.assign({},ne))),I&&(H._redirectEventId=I),H}static async _fromIdTokenResponse(e,r,n=!1){const i=new ma;i.updateFromServerResponse(r);const s=new ai({uid:r.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await ga(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}gO.type="NONE";const ks=gO;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(t,e,r){return`firebase:${t}:${e}:${r}`}class Ts{constructor(e,r,n){this.persistence=e,this.auth=r,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=ci(this.userKey,i.apiKey,s),this.fullPersistenceKey=ci("persistence",i.apiKey,s),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ai._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,n="authUser"){if(!r.length)return new Ts(Gt(ks),e,n);const i=(await Promise.all(r.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Gt(ks);const o=ci(n,e.config.apiKey,e.name);let a=null;for(const u of r)try{const l=await u._get(o);if(l){const h=ai._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Ts(s,e,n):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(r.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ts(s,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wO(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mO(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bO(e))return"Blackberry";if(_O(e))return"Webos";if(tm(e))return"Safari";if((e.includes("chrome/")||yO(e))&&!e.includes("edge/"))return"Chrome";if(Qa(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function mO(t=ke()){return/firefox\//i.test(t)}function tm(t=ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yO(t=ke()){return/crios\//i.test(t)}function wO(t=ke()){return/iemobile/i.test(t)}function Qa(t=ke()){return/android/i.test(t)}function bO(t=ke()){return/blackberry/i.test(t)}function _O(t=ke()){return/webos/i.test(t)}function lo(t=ke()){return/iphone|ipad|ipod/i.test(t)}function Q4(t=ke()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function J4(t=ke()){var e;return lo(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function Z4(){return Hg()&&document.documentMode===10}function EO(t=ke()){return lo(t)||Qa(t)||_O(t)||bO(t)||/windows phone/i.test(t)||wO(t)}function e6(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IO(t,e=[]){let r;switch(t){case"Browser":r=WE(ke());break;case"Worker":r=`${WE(ke())}-${t}`;break;default:r=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${Ui}/${n}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t6{constructor(e,r){this.app=e,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zE(this),this.idTokenSubscription=new zE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lO,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=Gt(r)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Ts.create(this,e),!this._deleted)){if((n=this._popupRedirectResolver)===null||n===void 0?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var r;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,s=n==null?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(n=o.user)}return n?n._redirectEventId?(U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await ga(e)}catch(r){if(r.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=L4()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const r=e?re(e):null;return r&&U(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Gt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fi("auth","Firebase",e())}onAuthStateChanged(e,r,n){return this.registerStateListener(this.authStateSubscription,e,r,n)}onIdTokenChanged(e,r,n){return this.registerStateListener(this.idTokenSubscription,e,r,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const n=await this.getOrInitRedirectPersistenceManager(r);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&Gt(e)||this._popupRedirectResolver;U(r,this,"argument-error"),this.redirectPersistenceManager=await Ts.create(this,[Gt(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,n,i){if(this._deleted)return()=>{};const s=typeof r=="function"?r:r.next.bind(r),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof r=="function"?e.addObserver(r,n,i):e.addObserver(r)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=IO(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function ct(t){return re(t)}class zE{constructor(e){this.auth=e,this.observer=null,this.addObserver=eO(r=>this.observer=r)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function r6(t,e,r){const n=ct(t);U(n._canInitEmulator,n,"emulator-config-failed"),U(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!!(r==null?void 0:r.disableWarnings),s=SO(e),{host:o,port:a}=n6(e),c=a===null?"":`:${a}`;n.config.emulator={url:`${s}//${o}${c}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||i6()}function SO(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function n6(t){const e=SO(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:GE(n.substr(s.length+1))}}else{const[s,o]=n.split(":");return{host:s,port:GE(o)}}}function GE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function i6(){function t(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return Pr("not implemented")}_getIdTokenResponse(e){return Pr("not implemented")}_linkToIdToken(e,r){return Pr("not implemented")}_getReauthenticationResolver(e){return Pr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TO(t,e){return lt(t,"POST","/v1/accounts:resetPassword",nt(t,e))}async function AO(t,e){return lt(t,"POST","/v1/accounts:update",e)}async function s6(t,e){return lt(t,"POST","/v1/accounts:update",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o6(t,e){return on(t,"POST","/v1/accounts:signInWithPassword",nt(t,e))}async function uh(t,e){return lt(t,"POST","/v1/accounts:sendOobCode",nt(t,e))}async function a6(t,e){return uh(t,e)}async function c6(t,e){return uh(t,e)}async function u6(t,e){return uh(t,e)}async function l6(t,e){return uh(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h6(t,e){return on(t,"POST","/v1/accounts:signInWithEmailLink",nt(t,e))}async function f6(t,e){return on(t,"POST","/v1/accounts:signInWithEmailLink",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya extends ho{constructor(e,r,n,i=null){super("password",n);this._email=e,this._password=r,this._tenantId=i}static _fromEmailAndPassword(e,r){return new ya(e,r,"password")}static _fromEmailAndCode(e,r,n=null){return new ya(e,r,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;if((r==null?void 0:r.email)&&(r==null?void 0:r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return o6(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return h6(e,{email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}async _linkToIdToken(e,r){switch(this.signInMethod){case"password":return AO(e,{idToken:r,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return f6(e,{idToken:r,email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xr(t,e){return on(t,"POST","/v1/accounts:signInWithIdp",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d6="http://localhost";class Ur extends ho{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const r=new Ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):bt("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=r,s=Qg(r,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Ur(n,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const r=this.buildRequest();return Xr(e,r)}_linkToIdToken(e,r){const n=this.buildRequest();return n.idToken=r,Xr(e,n)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,Xr(e,r)}buildRequest(){const e={requestUri:d6,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=co(r)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p6(t,e){return lt(t,"POST","/v1/accounts:sendVerificationCode",nt(t,e))}async function v6(t,e){return on(t,"POST","/v1/accounts:signInWithPhoneNumber",nt(t,e))}async function g6(t,e){const r=await on(t,"POST","/v1/accounts:signInWithPhoneNumber",nt(t,e));if(r.temporaryProof)throw Iu(t,"account-exists-with-different-credential",r);return r}const m6={USER_NOT_FOUND:"user-not-found"};async function y6(t,e){const r=Object.assign(Object.assign({},e),{operation:"REAUTH"});return on(t,"POST","/v1/accounts:signInWithPhoneNumber",nt(t,r),m6)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends ho{constructor(e){super("phone","phone");this.params=e}static _fromVerification(e,r){return new ui({verificationId:e,verificationCode:r})}static _fromTokenResponse(e,r){return new ui({phoneNumber:e,temporaryProof:r})}_getIdTokenResponse(e){return v6(e,this._makeVerificationRequest())}_linkToIdToken(e,r){return g6(e,Object.assign({idToken:r},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return y6(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:r,verificationId:n,verificationCode:i}=this.params;return e&&r?{temporaryProof:e,phoneNumber:r}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:r,verificationCode:n,phoneNumber:i,temporaryProof:s}=e;return!n&&!r&&!i&&!s?null:new ui({verificationId:r,verificationCode:n,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w6(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function b6(t){const e=ws(zo(t)).link,r=e?ws(zo(e)).deep_link_id:null,n=ws(zo(t)).deep_link_id;return(n?ws(zo(n)).link:null)||n||r||e||t}class lh{constructor(e){var r,n,i,s,o,a;const c=ws(zo(e)),u=(r=c.apiKey)!==null&&r!==void 0?r:null,l=(n=c.oobCode)!==null&&n!==void 0?n:null,h=w6((i=c.mode)!==null&&i!==void 0?i:null);U(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const r=b6(e);try{return new lh(r)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(){this.providerId=Ln.PROVIDER_ID}static credential(e,r){return ya._fromEmailAndPassword(e,r)}static credentialWithLink(e,r){const n=lh.parseLink(r);return U(n,"argument-error"),ya._fromEmailAndCode(e,n.code,n.tenantId)}}Ln.PROVIDER_ID="password";Ln.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ln.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo extends an{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class As extends fo{static credentialFromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;return U("providerId"in r&&"signInMethod"in r,"argument-error"),Ur._fromParams(r)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return U(e.idToken||e.accessToken,"argument-error"),Ur._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return As.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return As.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!n&&!i&&!r&&!s||!a)return null;try{return new As(a)._credential({idToken:r,accessToken:n,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends fo{constructor(){super("facebook.com")}static credential(e){return Ur._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends fo{constructor(){super("google.com");this.addScope("profile")}static credential(e,r){return Ur._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n}=e;if(!r&&!n)return null;try{return Rr.credential(r,n)}catch{return null}}}Rr.GOOGLE_SIGN_IN_METHOD="google.com";Rr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends fo{constructor(){super("github.com")}static credential(e){return Ur._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $r.credential(e.oauthAccessToken)}catch{return null}}}$r.GITHUB_SIGN_IN_METHOD="github.com";$r.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _6="http://localhost";class xs extends ho{constructor(e,r){super(e,e);this.pendingToken=r}_getIdTokenResponse(e){const r=this.buildRequest();return Xr(e,r)}_linkToIdToken(e,r){const n=this.buildRequest();return n.idToken=r,Xr(e,n)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,Xr(e,r)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i,pendingToken:s}=r;return!n||!i||!s||n!==i?null:new xs(n,s)}static _create(e,r){return new xs(e,r)}buildRequest(){return{requestUri:_6,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E6="saml.";class ol extends an{constructor(e){U(e.startsWith(E6),"argument-error");super(e)}static credentialFromResult(e){return ol.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return ol.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const r=xs.fromJSON(e);return U(r,"argument-error"),r}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:r,providerId:n}=e;if(!r||!n)return null;try{return xs._create(n,r)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends fo{constructor(){super("twitter.com")}static credential(e,r){return Ur._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=e;if(!r||!n)return null;try{return kr.credential(r,n)}catch{return null}}}kr.TWITTER_SIGN_IN_METHOD="twitter.com";kr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OO(t,e){return on(t,"POST","/v1/accounts:signUp",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,n,i=!1){const s=await ai._fromIdTokenResponse(e,n,i),o=KE(n);return new or({user:s,providerId:o,_tokenResponse:n,operationType:r})}static async _forOperation(e,r,n){await e._updateTokensIfNecessary(n,!0);const i=KE(n);return new or({user:e,providerId:i,_tokenResponse:n,operationType:r})}}function KE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I6(t){var e;const r=ct(t);if(await r._initializationPromise,(e=r.currentUser)===null||e===void 0?void 0:e.isAnonymous)return new or({user:r.currentUser,providerId:null,operationType:"signIn"});const n=await OO(r,{returnSecureToken:!0}),i=await or._fromIdTokenResponse(r,"signIn",n,!0);return await r._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al extends Yt{constructor(e,r,n,i){var s;super(r.code,r.message);this.operationType=n,this.user=i,Object.setPrototypeOf(this,al.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,r,n,i){return new al(e,r,n,i)}}function CO(t,e,r,n){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?al._fromErrorAndOperation(t,s,e,n):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RO(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S6(t,e){const r=re(t);await hh(!0,r,e);const{providerUserInfo:n}=await B4(r.auth,{idToken:await r.getIdToken(),deleteProvider:[e]}),i=RO(n||[]);return r.providerData=r.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(r.phoneNumber=null),await r.auth._persistUserIfCurrent(r),r}async function rm(t,e,r=!1){const n=await en(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return or._forOperation(t,"link",n)}async function hh(t,e,r){await ga(e);const n=RO(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";U(n.has(r)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $O(t,e,r=!1){const{auth:n}=t,i="reauthenticate";try{const s=await en(t,CO(n,i,e,t),r);U(s.idToken,n,"internal-error");const o=ch(s.idToken);U(o,n,"internal-error");const{sub:a}=o;return U(t.uid===a,n,"user-mismatch"),or._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bt(n,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kO(t,e,r=!1){const n="signIn",i=await CO(t,n,e),s=await or._fromIdTokenResponse(t,n,i);return r||await t._updateCurrentUser(s.user),s}async function fh(t,e){return kO(ct(t),e)}async function xO(t,e){const r=re(t);return await hh(!1,r,e.providerId),rm(r,e)}async function NO(t,e){return $O(re(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T6(t,e){return on(t,"POST","/v1/accounts:signInWithCustomToken",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A6(t,e){const r=ct(t),n=await T6(r,{token:e,returnSecureToken:!0}),i=await or._fromIdTokenResponse(r,"signIn",n);return await r._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,r){this.factorId=e,this.uid=r.mfaEnrollmentId,this.enrollmentTime=new Date(r.enrolledAt).toUTCString(),this.displayName=r.displayName}static _fromServerResponse(e,r){return"phoneInfo"in r?nm._fromServerResponse(e,r):bt(e,"internal-error")}}class nm extends dh{constructor(e){super("phone",e);this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,r){return new nm(r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(t,e,r){var n;U(((n=r.url)===null||n===void 0?void 0:n.length)>0,t,"invalid-continue-uri"),U(typeof r.dynamicLinkDomain=="undefined"||r.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=r.url,e.dynamicLinkDomain=r.dynamicLinkDomain,e.canHandleCodeInApp=r.handleCodeInApp,r.iOS&&(U(r.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=r.iOS.bundleId),r.android&&(U(r.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=r.android.installApp,e.androidMinimumVersionCode=r.android.minimumVersion,e.androidPackageName=r.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O6(t,e,r){const n=re(t),i={requestType:"PASSWORD_RESET",email:e};r&&ph(n,i,r),await c6(n,i)}async function C6(t,e,r){await TO(re(t),{oobCode:e,newPassword:r})}async function R6(t,e){await s6(re(t),{oobCode:e})}async function PO(t,e){const r=re(t),n=await TO(r,{oobCode:e}),i=n.requestType;switch(U(i,r,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":U(n.newEmail,r,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":U(n.mfaInfo,r,"internal-error");default:U(n.email,r,"internal-error")}let s=null;return n.mfaInfo&&(s=dh._fromServerResponse(ct(r),n.mfaInfo)),{data:{email:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.newEmail:n.email)||null,previousEmail:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.email:n.newEmail)||null,multiFactorInfo:s},operation:i}}async function $6(t,e){const{data:r}=await PO(re(t),e);return r.email}async function k6(t,e,r){const n=ct(t),i=await OO(n,{returnSecureToken:!0,email:e,password:r}),s=await or._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(s.user),s}function x6(t,e,r){return fh(re(t),Ln.credential(e,r))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N6(t,e,r){const n=re(t),i={requestType:"EMAIL_SIGNIN",email:e};U(r.handleCodeInApp,n,"argument-error"),r&&ph(n,i,r),await u6(n,i)}function P6(t,e){const r=lh.parseLink(e);return(r==null?void 0:r.operation)==="EMAIL_SIGNIN"}async function D6(t,e,r){const n=re(t),i=Ln.credentialWithLink(e,r||va());return U(i._tenantId===(n.tenantId||null),n,"tenant-id-mismatch"),fh(n,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L6(t,e){return lt(t,"POST","/v1/accounts:createAuthUri",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M6(t,e){const r=Zg()?va():"http://localhost",n={identifier:e,continueUri:r},{signinMethods:i}=await L6(re(t),n);return i||[]}async function F6(t,e){const r=re(t),n=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:n};e&&ph(r.auth,i,e);const{email:s}=await a6(r.auth,i);s!==t.email&&await t.reload()}async function U6(t,e,r){const n=re(t),i=await t.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:e};r&&ph(n.auth,s,r);const{email:o}=await l6(n.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j6(t,e){return lt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B6(t,{displayName:e,photoURL:r}){if(e===void 0&&r===void 0)return;const n=re(t),s={idToken:await n.getIdToken(),displayName:e,photoUrl:r,returnSecureToken:!0},o=await en(n,j6(n.auth,s));n.displayName=o.displayName||null,n.photoURL=o.photoUrl||null;const a=n.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=n.displayName,a.photoURL=n.photoURL),await n._updateTokensIfNecessary(o)}function V6(t,e){return DO(re(t),e,null)}function q6(t,e){return DO(re(t),null,e)}async function DO(t,e,r){const{auth:n}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),r&&(s.password=r);const o=await en(t,AO(n,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W6(t){var e,r;if(!t)return null;const{providerId:n}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!n&&(t==null?void 0:t.idToken)){const o=(r=(e=ch(t.idToken))===null||e===void 0?void 0:e.firebase)===null||r===void 0?void 0:r.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Os(s,a)}}if(!n)return null;switch(n){case"facebook.com":return new z6(s,i);case"github.com":return new G6(s,i);case"google.com":return new K6(s,i);case"twitter.com":return new H6(s,i,t.screenName||null);case"custom":case"anonymous":return new Os(s,null);default:return new Os(s,n,i)}}class Os{constructor(e,r,n={}){this.isNewUser=e,this.providerId=r,this.profile=n}}class LO extends Os{constructor(e,r,n,i){super(e,r,n);this.username=i}}class z6 extends Os{constructor(e,r){super(e,"facebook.com",r)}}class G6 extends LO{constructor(e,r){super(e,"github.com",r,typeof(r==null?void 0:r.login)=="string"?r==null?void 0:r.login:null)}}class K6 extends Os{constructor(e,r){super(e,"google.com",r)}}class H6 extends LO{constructor(e,r,n){super(e,"twitter.com",r,n)}}function Y6(t){const{user:e,_tokenResponse:r}=t;return e.isAnonymous&&!r?{providerId:null,isNewUser:!1,profile:null}:W6(r)}class Yn{constructor(e,r){this.type=e,this.credential=r}static _fromIdtoken(e){return new Yn("enroll",e)}static _fromMfaPendingCredential(e){return new Yn("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var r,n;if(e==null?void 0:e.multiFactorSession){if((r=e.multiFactorSession)===null||r===void 0?void 0:r.pendingCredential)return Yn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((n=e.multiFactorSession)===null||n===void 0?void 0:n.idToken)return Yn._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,r,n){this.session=e,this.hints=r,this.signInResolver=n}static _fromError(e,r){const n=ct(e),i=r.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>dh._fromServerResponse(n,a));U(i.mfaPendingCredential,n,"internal-error");const o=Yn._fromMfaPendingCredential(i.mfaPendingCredential);return new im(o,s,async a=>{const c=await a._process(n,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(r.operationType){case"signIn":const l=await or._fromIdTokenResponse(n,r.operationType,u);return await n._updateCurrentUser(l.user),l;case"reauthenticate":return U(r.user,n,"internal-error"),or._forOperation(r.user,r.operationType,u);default:bt(n,"internal-error")}})}async resolveSignIn(e){const r=e;return this.signInResolver(r)}}function X6(t,e){var r;const n=re(t),i=e;return U(e.customData.operationType,n,"argument-error"),U((r=i.customData._serverResponse)===null||r===void 0?void 0:r.mfaPendingCredential,n,"argument-error"),im._fromError(n,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q6(t,e){return lt(t,"POST","/v2/accounts/mfaEnrollment:start",nt(t,e))}function J6(t,e){return lt(t,"POST","/v2/accounts/mfaEnrollment:finalize",nt(t,e))}function Z6(t,e){return lt(t,"POST","/v2/accounts/mfaEnrollment:withdraw",nt(t,e))}class sm{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(r=>{r.mfaInfo&&(this.enrolledFactors=r.mfaInfo.map(n=>dh._fromServerResponse(e.auth,n)))})}static _fromUser(e){return new sm(e)}async getSession(){return Yn._fromIdtoken(await this.user.getIdToken())}async enroll(e,r){const n=e,i=await this.getSession(),s=await en(this.user,n._process(this.user.auth,i,r));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const r=typeof e=="string"?e:e.uid,n=await this.user.getIdToken(),i=await en(this.user,Z6(this.user.auth,{idToken:n,mfaEnrollmentId:r}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==r),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(s){if(s.code!=="auth/user-token-expired")throw s}}}const Ad=new WeakMap;function eX(t){const e=re(t);return Ad.has(e)||Ad.set(e,sm._fromUser(e)),Ad.get(e)}const cl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(cl,"1"),this.storage.removeItem(cl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tX(){const t=ke();return tm(t)||lo(t)}const rX=1e3,nX=10;class FO extends MO{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=tX()&&e6(),this.fallbackToPolling=EO(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),i=this.localCache[r];n!==i&&e(r,i,n)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const n=e.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(n);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!r)return}const i=()=>{const o=this.storage.getItem(n);!r&&this.localCache[n]===o||this.notifyListeners(n,o)},s=this.storage.getItem(n);Z4()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,nX):i()}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)})},rX)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}FO.type="LOCAL";const om=FO;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO extends MO{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}UO.type="SESSION";const _i=UO;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iX(t){return Promise.all(t.map(async e=>{try{const r=await e;return{fulfilled:!0,value:r}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(i=>i.isListeningto(e));if(r)return r;const n=new vh(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:n,eventType:i,data:s}=r.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const a=Array.from(o).map(async u=>u(r.origin,s)),c=await iX(a);r.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:c})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(t="",e=10){let r="";for(let n=0;n<e;n++)r+=Math.floor(Math.random()*10);return t+r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sX{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,n=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=Ja("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},n);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:r},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return window}function oX(t){Ze().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(){return typeof Ze().WorkerGlobalScope!="undefined"&&typeof Ze().importScripts=="function"}async function aX(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cX(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function uX(){return am()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jO="firebaseLocalStorageDb",lX=1,ul="firebaseLocalStorage",BO="fbase_key";class Za{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function gh(t,e){return t.transaction([ul],e?"readwrite":"readonly").objectStore(ul)}function hX(){const t=indexedDB.deleteDatabase(jO);return new Za(t).toPromise()}function Fp(){const t=indexedDB.open(jO,lX);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(ul,{keyPath:BO})}catch(i){r(i)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(ul)?e(n):(n.close(),await hX(),e(await Fp()))})})}async function HE(t,e,r){const n=gh(t,!0).put({[BO]:e,value:r});return new Za(n).toPromise()}async function fX(t,e){const r=gh(t,!1).get(e),n=await new Za(r).toPromise();return n===void 0?null:n.value}function YE(t,e){const r=gh(t,!0).delete(e);return new Za(r).toPromise()}const dX=800,pX=3;class VO{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fp(),this.db)}async _withRetries(e){let r=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(r++>pX)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return am()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vh._getInstance(uX()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await aX(),!this.activeServiceWorker)return;this.sender=new sX(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);!n||((e=n[0])===null||e===void 0?void 0:e.fulfilled)&&((r=n[0])===null||r===void 0?void 0:r.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cX()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fp();return await HE(e,cl,"1"),await YE(e,cl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>HE(n,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(n=>fX(n,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>YE(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=gh(i,!1).getAll();return new Za(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),r.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),r.push(i));return r}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dX)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}VO.type="LOCAL";const wa=VO;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vX(t,e){return lt(t,"POST","/v2/accounts/mfaSignIn:start",nt(t,e))}function gX(t,e){return lt(t,"POST","/v2/accounts/mfaSignIn:finalize",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mX(t){return(await lt(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yX(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function qO(t){return new Promise((e,r)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=i=>{const s=mt("internal-error");s.customData=i,r(s)},n.type="text/javascript",n.charset="UTF-8",yX().appendChild(n)})}function WO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wX=500,bX=6e4,Zc=1e12;class _X{constructor(e){this.auth=e,this.counter=Zc,this._widgets=new Map}render(e,r){const n=this.counter;return this._widgets.set(n,new EX(e,this.auth.name,r||{})),this.counter++,n}reset(e){var r;const n=e||Zc;(r=this._widgets.get(n))===null||r===void 0||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||Zc;return((r=this._widgets.get(n))===null||r===void 0?void 0:r.getResponse())||""}async execute(e){var r;const n=e||Zc;return(r=this._widgets.get(n))===null||r===void 0||r.execute(),""}}class EX{constructor(e,r,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;U(i,"argument-error",{appName:r}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=IX(50);const{callback:e,"expired-callback":r}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,r)try{r()}catch{}this.isVisible&&this.execute()},bX)},wX))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function IX(t){const e=[],r="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<t;n++)e.push(r.charAt(Math.floor(Math.random()*r.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od=WO("rcb"),SX=new Xa(3e4,6e4),TX="https://www.google.com/recaptcha/api.js?";class AX{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Ze().grecaptcha}load(e,r=""){return U(OX(r),e,"argument-error"),this.shouldResolveImmediately(r)?Promise.resolve(Ze().grecaptcha):new Promise((n,i)=>{const s=Ze().setTimeout(()=>{i(mt(e,"network-request-failed"))},SX.get());Ze()[Od]=()=>{Ze().clearTimeout(s),delete Ze()[Od];const a=Ze().grecaptcha;if(!a){i(mt(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=r,n(a)};const o=`${TX}?${co({onload:Od,render:"explicit",hl:r})}`;qO(o).catch(()=>{clearTimeout(s),i(mt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Ze().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function OX(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class CX{async load(e){return new _X(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zO="recaptcha",RX={theme:"light",type:"image"};class $X{constructor(e,r=Object.assign({},RX),n){this.parameters=r,this.type=zO,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ct(n),this.isInvisible=this.parameters.size==="invisible",U(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;U(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new CX:new AX,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),r=this.getAssertedRecaptcha(),n=r.getResponse(e);return n||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&r.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){U(!this.parameters.sitekey,this.auth,"argument-error"),U(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),U(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return r=>{if(this.tokenChangeListeners.forEach(n=>n(r)),typeof e=="function")e(r);else if(typeof e=="string"){const n=Ze()[e];typeof n=="function"&&n(r)}}}assertNotDestroyed(){U(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const r=document.createElement("div");e.appendChild(r),e=r}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){U(Zg()&&!am(),this.auth,"internal-error"),await kX(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await mX(this.auth);U(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return U(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function kX(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,r){this.verificationId=e,this.onConfirmation=r}confirm(e){const r=ui._fromVerification(this.verificationId,e);return this.onConfirmation(r)}}async function xX(t,e,r){const n=ct(t),i=await mh(n,e,re(r));return new cm(i,s=>fh(n,s))}async function NX(t,e,r){const n=re(t);await hh(!1,n,"phone");const i=await mh(n.auth,e,re(r));return new cm(i,s=>xO(n,s))}async function PX(t,e,r){const n=re(t),i=await mh(n.auth,e,re(r));return new cm(i,s=>NO(n,s))}async function mh(t,e,r){var n;const i=await r.verify();try{U(typeof i=="string",t,"argument-error"),U(r.type===zO,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return U(o.type==="enroll",t,"internal-error"),(await Q6(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{U(o.type==="signin",t,"internal-error");const a=((n=s.multiFactorHint)===null||n===void 0?void 0:n.uid)||s.multiFactorUid;return U(a,t,"missing-multi-factor-info"),(await vX(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await p6(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{r._reset()}}async function DX(t,e){await rm(re(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e){this.providerId=vr.PROVIDER_ID,this.auth=ct(e)}verifyPhoneNumber(e,r){return mh(this.auth,e,re(r))}static credential(e,r){return ui._fromVerification(e,r)}static credentialFromResult(e){const r=e;return vr.credentialFromTaggedObject(r)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:r,temporaryProof:n}=e;return r&&n?ui._fromTokenResponse(r,n):null}}vr.PROVIDER_ID="phone";vr.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t,e){return e?Gt(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um extends ho{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Xr(e,this._buildIdpRequest())}_linkToIdToken(e,r){return Xr(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return Xr(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function LX(t){return kO(t.auth,new um(t),t.bypassAuthState)}function MX(t){const{auth:e,user:r}=t;return U(r,e,"internal-error"),$O(r,new um(t),t.bypassAuthState)}async function FX(t){const{auth:e,user:r}=t;return U(r,e,"internal-error"),rm(r,new um(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e,r,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:n,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:r,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LX;case"linkViaPopup":case"linkViaRedirect":return FX;case"reauthViaPopup":case"reauthViaRedirect":return MX;default:bt(this.auth,"internal-error")}}resolve(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UX=new Xa(2e3,1e4);async function jX(t,e,r){const n=ct(t);uo(t,e,an);const i=ji(n,r);return new Gr(n,"signInViaPopup",e,i).executeNotNull()}async function BX(t,e,r){const n=re(t);uo(n.auth,e,an);const i=ji(n.auth,r);return new Gr(n.auth,"reauthViaPopup",e,i,n).executeNotNull()}async function VX(t,e,r){const n=re(t);uo(n.auth,e,an);const i=ji(n.auth,r);return new Gr(n.auth,"linkViaPopup",e,i,n).executeNotNull()}class Gr extends GO{constructor(e,r,n,i,s){super(e,r,i,s);this.provider=n,this.authWindow=null,this.pollId=null,Gr.currentPopupAction&&Gr.currentPopupAction.cancel(),Gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){mr(this.filter.length===1,"Popup operations only handle one event");const e=Ja();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,n;if((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0?void 0:n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,UX.get())};e()}}Gr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qX="pendingRedirect",Su=new Map;class WX extends GO{constructor(e,r,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n);this.eventId=null}async execute(){let e=Su.get(this.auth._key());if(!e){try{const n=await zX(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}Su.set(this.auth._key(),e)}return this.bypassAuthState||Su.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zX(t,e){const r=HO(e),n=KO(t);if(!await n._isAvailable())return!1;const i=await n._get(r)==="true";return await n._remove(r),i}async function lm(t,e){return KO(t)._set(HO(e),"true")}function GX(){Su.clear()}function KO(t){return Gt(t._redirectPersistence)}function HO(t){return ci(qX,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KX(t,e,r){return HX(t,e,r)}async function HX(t,e,r){const n=ct(t);uo(t,e,an);const i=ji(n,r);return await lm(i,n),i._openRedirect(n,e,"signInViaRedirect")}function YX(t,e,r){return XX(t,e,r)}async function XX(t,e,r){const n=re(t);uo(n.auth,e,an);const i=ji(n.auth,r);await lm(i,n.auth);const s=await YO(n);return i._openRedirect(n.auth,e,"reauthViaRedirect",s)}function QX(t,e,r){return JX(t,e,r)}async function JX(t,e,r){const n=re(t);uo(n.auth,e,an);const i=ji(n.auth,r);await hh(!1,n,e.providerId),await lm(i,n.auth);const s=await YO(n);return i._openRedirect(n.auth,e,"linkViaRedirect",s)}async function ZX(t,e){return await ct(t)._initializationPromise,yh(t,e,!1)}async function yh(t,e,r=!1){const n=ct(t),i=ji(n,e),o=await new WX(n,i,r).execute();return o&&!r&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}async function YO(t){const e=Ja(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eQ=10*60*1e3;class XO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(r=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tQ(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var n;if(e.error&&!QO(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(mt(this.auth,i))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const n=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eQ&&this.cachedEventUids.clear(),this.cachedEventUids.has(XE(e))}saveEventToCache(e){this.cachedEventUids.add(XE(e)),this.lastProcessedEventTime=Date.now()}}function XE(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function QO({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tQ(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return QO(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JO(t,e={}){return lt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rQ=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nQ=/^https?/;async function iQ(t){if(t.config.emulator)return;const{authorizedDomains:e}=await JO(t);for(const r of e)try{if(sQ(r))return}catch{}bt(t,"unauthorized-domain")}function sQ(t){const e=va(),{protocol:r,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&n===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&o.hostname===n}if(!nQ.test(r))return!1;if(rQ.test(t))return n===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oQ=new Xa(3e4,6e4);function QE(){const t=Ze().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function aQ(t){return new Promise((e,r)=>{var n,i,s;function o(){QE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{QE(),r(mt(t,"network-request-failed"))},timeout:oQ.get()})}if((i=(n=Ze().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((s=Ze().gapi)===null||s===void 0?void 0:s.load)o();else{const a=WO("iframefcb");return Ze()[a]=()=>{gapi.load?o():r(mt(t,"network-request-failed"))},qO(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>r(c))}}).catch(e=>{throw Tu=null,e})}let Tu=null;function cQ(t){return Tu=Tu||aQ(t),Tu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uQ=new Xa(5e3,15e3),lQ="__/auth/iframe",hQ="emulator/auth/iframe",fQ={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dQ=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pQ(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?em(e,hQ):`https://${t.config.authDomain}/${lQ}`,n={apiKey:e.apiKey,appName:t.name,v:Ui},i=dQ.get(t.config.apiHost);i&&(n.eid=i);const s=t._getFrameworks();return s.length&&(n.fw=s.join(",")),`${r}?${co(n).slice(1)}`}async function vQ(t){const e=await cQ(t),r=Ze().gapi;return U(r,t,"internal-error"),e.open({where:document.body,url:pQ(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fQ,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const o=mt(t,"network-request-failed"),a=Ze().setTimeout(()=>{s(o)},uQ.get());function c(){Ze().clearTimeout(a),i(n)}n.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gQ={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mQ=500,yQ=600,wQ="_blank",bQ="http://localhost";class JE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _Q(t,e,r,n=mQ,i=yQ){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let a="";const c=Object.assign(Object.assign({},gQ),{width:n.toString(),height:i.toString(),top:s,left:o}),u=ke().toLowerCase();r&&(a=yO(u)?wQ:r),mO(u)&&(e=e||bQ,c.scrollbars="yes");const l=Object.entries(c).reduce((f,[p,g])=>`${f}${p}=${g},`,"");if(J4(u)&&a!=="_self")return EQ(e||"",a),new JE(null);const h=window.open(e||"",a,l);U(h,t,"popup-blocked");try{h.focus()}catch{}return new JE(h)}function EQ(t,e){const r=document.createElement("a");r.href=t,r.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IQ="__/auth/handler",SQ="emulator/auth/handler";function Up(t,e,r,n,i,s){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:n,v:Ui,eventId:i};if(e instanceof an){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",CY(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(s||{}))o[c]=u}if(e instanceof fo){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${TQ(t)}?${co(a).slice(1)}`}function TQ({config:t}){return t.emulator?em(t,SQ):`https://${t.authDomain}/${IQ}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="webStorageSupport";class AQ{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_i,this._completeRedirectFn=yh}async _openPopup(e,r,n,i){var s;mr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Up(e,r,n,va(),i);return _Q(e,o,Ja())}async _openRedirect(e,r,n,i){return await this._originValidation(e),oX(Up(e,r,n,va(),i)),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:i,promise:s}=this.eventManagers[r];return i?Promise.resolve(i):(mr(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(e){const r=await vQ(e),n=new XO(e);return r.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=r,n}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(Cd,{type:Cd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Cd];o!==void 0&&r(!!o),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=iQ(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return EO()||tm()||lo()}}const OQ=AQ;class CQ{constructor(e){this.factorId=e}_process(e,r,n){switch(r.type){case"enroll":return this._finalizeEnroll(e,r.credential,n);case"signin":return this._finalizeSignIn(e,r.credential);default:return Pr("unexpected MultiFactorSessionType")}}}class hm extends CQ{constructor(e){super("phone");this.credential=e}static _fromCredential(e){return new hm(e)}_finalizeEnroll(e,r,n){return J6(e,{idToken:r,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,r){return gX(e,{mfaPendingCredential:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ZO{constructor(){}static assertion(e){return hm._fromCredential(e)}}ZO.FACTOR_ID="phone";var ZE="@firebase/auth",eI="0.19.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RQ{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(n=>{var i;e(((i=n)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);!r||(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $Q(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function kQ(t){bi(new Zr("auth",(e,{options:r})=>{const n=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=n.options;return(o=>{U(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),U(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:IO(t)},c=new t6(o,a);return P4(c,r),c})(n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,n)=>{e.getProvider("auth-internal").initialize()})),bi(new Zr("auth-internal",e=>{const r=ct(e.getProvider("auth").getImmediate());return(n=>new RQ(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lr(ZE,eI,$Q(t)),Lr(ZE,eI,"esm2017")}kQ("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xQ=2e3;async function NQ(t,e,r){var n;const{BuildInfo:i}=Ei();mr(e.sessionId,"AuthEvent did not contain a session ID");const s=await FQ(e.sessionId),o={};return lo()?o.ibi=i.packageName:Qa()?o.apn=i.packageName:bt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Up(t,r,e.type,void 0,(n=e.eventId)!==null&&n!==void 0?n:void 0,o)}async function PQ(t){const{BuildInfo:e}=Ei(),r={};lo()?r.iosBundleId=e.packageName:Qa()?r.androidPackageName=e.packageName:bt(t,"operation-not-supported-in-this-environment"),await JO(t,r)}function DQ(t){const{cordova:e}=Ei();return new Promise(r=>{e.plugins.browsertab.isAvailable(n=>{let i=null;n?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,Q4()?"_blank":"_system","location=yes"),r(i)})})}async function LQ(t,e,r){const{cordova:n}=Ei();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const f=(h=n.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof f=="function"&&f(),typeof(r==null?void 0:r.close)=="function"&&r.close()}function u(){a||(a=window.setTimeout(()=>{o(mt(t,"redirect-cancelled-by-user"))},xQ))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),Qa()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function MQ(t){var e,r,n,i,s,o,a,c,u,l;const h=Ei();U(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),U(typeof((r=h==null?void 0:h.BuildInfo)===null||r===void 0?void 0:r.packageName)!="undefined",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),U(typeof((s=(i=(n=h==null?void 0:h.cordova)===null||n===void 0?void 0:n.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),U(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),U(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function FQ(t){const e=UQ(t),r=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(r)).map(i=>i.toString(16).padStart(2,"0")).join("")}function UQ(t){if(mr(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder!="undefined")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),r=new Uint8Array(e);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jQ=20;class BQ extends XO{constructor(){super(...arguments);this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(r=>r(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function VQ(t,e,r=null){return{type:e,eventId:r,urlResponse:null,sessionId:zQ(),postBody:null,tenantId:t.tenantId,error:mt(t,"no-auth-event")}}function qQ(t,e){return jp()._set(Bp(t),e)}async function tI(t){const e=await jp()._get(Bp(t));return e&&await jp()._remove(Bp(t)),e}function WQ(t,e){var r,n;const i=KQ(e);if(i.includes("/__/auth/callback")){const s=Au(i),o=s.firebaseError?GQ(decodeURIComponent(s.firebaseError)):null,a=(n=(r=o==null?void 0:o.code)===null||r===void 0?void 0:r.split("auth/"))===null||n===void 0?void 0:n[1],c=a?mt(a):null;return c?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function zQ(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<jQ;r++){const n=Math.floor(Math.random()*e.length);t.push(e.charAt(n))}return t.join("")}function jp(){return Gt(om)}function Bp(t){return ci("authEvent",t.config.apiKey,t.name)}function GQ(t){try{return JSON.parse(t)}catch{return null}}function KQ(t){const e=Au(t),r=e.link?decodeURIComponent(e.link):void 0,n=Au(r).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Au(i).link||i||n||r||t}function Au(t){if(!(t==null?void 0:t.includes("?")))return{};const[e,...r]=t.split("?");return ws(r.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HQ=500;class YQ{constructor(){this._redirectPersistence=_i,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=yh}async _initialize(e){const r=e._key();let n=this.eventManagers.get(r);return n||(n=new BQ(e),this.eventManagers.set(r,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){bt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,r,n,i){MQ(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),GX(),await this._originValidation(e);const o=VQ(e,n,i);await qQ(e,o);const a=await NQ(e,o,r),c=await DQ(a);return LQ(e,s,c)}_isIframeWebStorageSupported(e,r){throw new Error("Method not implemented.")}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=PQ(e)),this.originValidationPromises[r]}attachCallbackListeners(e,r){const{universalLinks:n,handleOpenURL:i,BuildInfo:s}=Ei(),o=setTimeout(async()=>{await tI(e),r.onEvent(rI())},HQ),a=async l=>{clearTimeout(o);const h=await tI(e);let f=null;h&&(l==null?void 0:l.url)&&(f=WQ(h,l.url)),r.onEvent(f||rI())};typeof n!="undefined"&&typeof n.subscribe=="function"&&n.subscribe(null,a);const c=i,u=`${s.packageName.toLowerCase()}://`;Ei().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const XQ=YQ;function rI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:mt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QQ(t,e){ct(t)._logFramework(e)}var JQ="@firebase/auth-compat",ZQ="0.2.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eJ=1e3;function ll(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function tJ(){return ll()==="http:"||ll()==="https:"}function eC(t=ke()){return!!((ll()==="file:"||ll()==="ionic:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function rJ(){return oh()||Gg()}function nJ(){return Hg()&&(document==null?void 0:document.documentMode)===11}function iJ(t=ke()){return/Edge\/\d+/.test(t)}function sJ(t=ke()){return nJ()||iJ(t)}function tC(){try{const t=self.localStorage,e=Ja();if(t)return t.setItem(e,"1"),t.removeItem(e),sJ()?il():!0}catch{return fm()&&il()}return!1}function fm(){return typeof global!="undefined"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Rd(){return(tJ()||Kg()||eC())&&!rJ()&&tC()&&!fm()}function rC(){return eC()&&typeof document!="undefined"}async function oJ(){return rC()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},eJ);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function aJ(){return typeof window!="undefined"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt={LOCAL:"local",NONE:"none",SESSION:"session"},Fo=U,nC="persistence";function cJ(t,e){if(Fo(Object.values(Wt).includes(e),t,"invalid-persistence-type"),oh()){Fo(e!==Wt.SESSION,t,"unsupported-persistence-type");return}if(Gg()){Fo(e===Wt.NONE,t,"unsupported-persistence-type");return}if(fm()){Fo(e===Wt.NONE||e===Wt.LOCAL&&il(),t,"unsupported-persistence-type");return}Fo(e===Wt.NONE||tC(),t,"unsupported-persistence-type")}async function Vp(t){await t._initializationPromise;const e=iC(),r=ci(nC,t.config.apiKey,t.name);e&&e.setItem(r,t._getPersistence())}function uJ(t,e){const r=iC();if(!r)return[];const n=ci(nC,t,e);switch(r.getItem(n)){case Wt.NONE:return[ks];case Wt.LOCAL:return[wa,_i];case Wt.SESSION:return[_i];default:return[]}}function iC(){var t;try{return((t=aJ())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lJ=U;class En{constructor(){this.browserResolver=Gt(OQ),this.cordovaResolver=Gt(XQ),this.underlyingResolver=null,this._redirectPersistence=_i,this._completeRedirectFn=yh}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,r,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,r,n,i)}async _openRedirect(e,r,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,r,n,i)}_isIframeWebStorageSupported(e,r){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,r)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return rC()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return lJ(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await oJ();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(t){return t.unwrap()}function hJ(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fJ(t){return oC(t)}function dJ(t,e){var r;const n=(r=e.customData)===null||r===void 0?void 0:r._tokenResponse;if(e.code==="auth/multi-factor-auth-required"){const i=e;i.resolver=new pJ(t,X6(t,e))}else if(n){const i=oC(e),s=e;i&&(s.credential=i,s.tenantId=n.tenantId||void 0,s.email=n.email||void 0,s.phoneNumber=n.phoneNumber||void 0)}}function oC(t){const{_tokenResponse:e}=t instanceof Yt?t.customData:t;if(!e)return null;if(!(t instanceof Yt)&&"temporaryProof"in e&&"phoneNumber"in e)return vr.credentialFromResult(t);const r=e.providerId;if(!r||r===Mo.PASSWORD)return null;let n;switch(r){case Mo.GOOGLE:n=Rr;break;case Mo.FACEBOOK:n=Cr;break;case Mo.GITHUB:n=$r;break;case Mo.TWITTER:n=kr;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?r.startsWith("saml.")?xs._create(r,a):Ur._fromParams({providerId:r,signInMethod:r,pendingToken:a,idToken:i,accessToken:s}):new As(r).credential({idToken:i,accessToken:s,rawNonce:c})}return t instanceof Yt?n.credentialFromError(t):n.credentialFromResult(t)}function Lt(t,e){return e.catch(r=>{throw r instanceof Yt&&dJ(t,r),r}).then(r=>{const n=r.operationType,i=r.user;return{operationType:n,credential:fJ(r),additionalUserInfo:Y6(r),user:Kr.getOrCreate(i)}})}async function qp(t,e){const r=await e;return{verificationId:r.verificationId,confirm:n=>Lt(t,r.confirm(n))}}class pJ{constructor(e,r){this.resolver=r,this.auth=hJ(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Lt(sC(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this._delegate=e,this.multiFactor=eX(e)}static getOrCreate(e){return Kr.USER_MAP.has(e)||Kr.USER_MAP.set(e,new Kr(e)),Kr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Lt(this.auth,xO(this._delegate,e))}async linkWithPhoneNumber(e,r){return qp(this.auth,NX(this._delegate,e,r))}async linkWithPopup(e){return Lt(this.auth,VX(this._delegate,e,En))}async linkWithRedirect(e){return await Vp(ct(this.auth)),QX(this._delegate,e,En)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Lt(this.auth,NO(this._delegate,e))}reauthenticateWithPhoneNumber(e,r){return qp(this.auth,PX(this._delegate,e,r))}reauthenticateWithPopup(e){return Lt(this.auth,BX(this._delegate,e,En))}async reauthenticateWithRedirect(e){return await Vp(ct(this.auth)),YX(this._delegate,e,En)}sendEmailVerification(e){return F6(this._delegate,e)}async unlink(e){return await S6(this._delegate,e),this}updateEmail(e){return V6(this._delegate,e)}updatePassword(e){return q6(this._delegate,e)}updatePhoneNumber(e){return DX(this._delegate,e)}updateProfile(e){return B6(this._delegate,e)}verifyBeforeUpdateEmail(e,r){return U6(this._delegate,e,r)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Kr.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=U;class Wp{constructor(e,r){if(this.app=e,r.isInitialized()){this._delegate=r.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:n}=e.options;Uo(n,"invalid-api-key",{appName:e.name}),Uo(n,"invalid-api-key",{appName:e.name});const i=typeof window!="undefined"?En:void 0;this._delegate=r.initialize({options:{persistence:vJ(n,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(x4),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Kr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,r){r6(this._delegate,e,r)}applyActionCode(e){return R6(this._delegate,e)}checkActionCode(e){return PO(this._delegate,e)}confirmPasswordReset(e,r){return C6(this._delegate,e,r)}async createUserWithEmailAndPassword(e,r){return Lt(this._delegate,k6(this._delegate,e,r))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return M6(this._delegate,e)}isSignInWithEmailLink(e){return P6(this._delegate,e)}async getRedirectResult(){Uo(Rd(),this._delegate,"operation-not-supported-in-this-environment");const e=await ZX(this._delegate,En);return e?Lt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){QQ(this._delegate,e)}onAuthStateChanged(e,r,n){const{next:i,error:s,complete:o}=nI(e,r,n);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,r,n){const{next:i,error:s,complete:o}=nI(e,r,n);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,r){return N6(this._delegate,e,r)}sendPasswordResetEmail(e,r){return O6(this._delegate,e,r||void 0)}async setPersistence(e){cJ(this._delegate,e);let r;switch(e){case Wt.SESSION:r=_i;break;case Wt.LOCAL:r=await Gt(wa)._isAvailable()?wa:om;break;case Wt.NONE:r=ks;break;default:return bt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(r)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Lt(this._delegate,I6(this._delegate))}signInWithCredential(e){return Lt(this._delegate,fh(this._delegate,e))}signInWithCustomToken(e){return Lt(this._delegate,A6(this._delegate,e))}signInWithEmailAndPassword(e,r){return Lt(this._delegate,x6(this._delegate,e,r))}signInWithEmailLink(e,r){return Lt(this._delegate,D6(this._delegate,e,r))}signInWithPhoneNumber(e,r){return qp(this._delegate,xX(this._delegate,e,r))}async signInWithPopup(e){return Uo(Rd(),this._delegate,"operation-not-supported-in-this-environment"),Lt(this._delegate,jX(this._delegate,e,En))}async signInWithRedirect(e){return Uo(Rd(),this._delegate,"operation-not-supported-in-this-environment"),await Vp(this._delegate),KX(this._delegate,e,En)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return $6(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Wp.Persistence=Wt;function nI(t,e,r){let n=t;typeof t!="function"&&({next:n,error:e,complete:r}=t);const i=n;return{next:o=>i(o&&Kr.getOrCreate(o)),error:e,complete:r}}function vJ(t,e){const r=uJ(t,e);if(typeof self!="undefined"&&!r.includes(wa)&&r.push(wa),typeof window!="undefined")for(const n of[om,_i])r.includes(n)||r.push(n);return r.includes(ks)||r.push(ks),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(){this.providerId="phone",this._delegate=new vr(sC(Ya.auth()))}static credential(e,r){return vr.credential(e,r)}verifyPhoneNumber(e,r){return this._delegate.verifyPhoneNumber(e,r)}unwrap(){return this._delegate}}dm.PHONE_SIGN_IN_METHOD=vr.PHONE_SIGN_IN_METHOD;dm.PROVIDER_ID=vr.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gJ=U;class mJ{constructor(e,r,n=Ya.app()){var i;gJ((i=n.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new $X(e,r,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yJ="auth-compat";function wJ(t){t.INTERNAL.registerComponent(new Zr(yJ,e=>{const r=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new Wp(r,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:os.EMAIL_SIGNIN,PASSWORD_RESET:os.PASSWORD_RESET,RECOVER_EMAIL:os.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:os.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:os.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:os.VERIFY_EMAIL}},EmailAuthProvider:Ln,FacebookAuthProvider:Cr,GithubAuthProvider:$r,GoogleAuthProvider:Rr,OAuthProvider:As,SAMLAuthProvider:ol,PhoneAuthProvider:dm,PhoneMultiFactorGenerator:ZO,RecaptchaVerifier:mJ,TwitterAuthProvider:kr,Auth:Wp,AuthCredential:ho,Error:Yt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(JQ,ZQ)}wJ(Ya);var bJ=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},X,pm=pm||{},le=bJ||self;function hl(){}function zp(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ec(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function _J(t){return Object.prototype.hasOwnProperty.call(t,$d)&&t[$d]||(t[$d]=++EJ)}var $d="closure_uid_"+(1e9*Math.random()>>>0),EJ=0;function IJ(t,e,r){return t.call.apply(t.bind,arguments)}function SJ(t,e,r){if(!t)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function yt(t,e,r){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?yt=IJ:yt=SJ,yt.apply(null,arguments)}function eu(t,e){var r=Array.prototype.slice.call(arguments,1);return function(){var n=r.slice();return n.push.apply(n,arguments),t.apply(this,n)}}function _t(t,e){function r(){}r.prototype=e.prototype,t.Z=e.prototype,t.prototype=new r,t.prototype.constructor=t,t.Vb=function(n,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(n,o)}}function Mn(){this.s=this.s,this.o=this.o}var TJ=0,AJ={};Mn.prototype.s=!1;Mn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),TJ!=0)){var t=_J(this);delete AJ[t]}};Mn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const aC=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let r=0;r<t.length;r++)if(r in t&&t[r]===e)return r;return-1},cC=Array.prototype.forEach?function(t,e,r){Array.prototype.forEach.call(t,e,r)}:function(t,e,r){const n=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)s in i&&e.call(r,i[s],s,t)};function OJ(t){e:{var e=y8;const r=t.length,n=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)if(i in n&&e.call(void 0,n[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function iI(t){return Array.prototype.concat.apply([],arguments)}function vm(t){const e=t.length;if(0<e){const r=Array(e);for(let n=0;n<e;n++)r[n]=t[n];return r}return[]}function fl(t){return/^[\s\xa0]*$/.test(t)}var sI=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Rt(t,e){return t.indexOf(e)!=-1}function kd(t,e){return t<e?-1:t>e?1:0}var $t;e:{var oI=le.navigator;if(oI){var aI=oI.userAgent;if(aI){$t=aI;break e}}$t=""}function gm(t,e,r){for(const n in t)e.call(r,t[n],n,t)}function uC(t){const e={};for(const r in t)e[r]=t[r];return e}var cI="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lC(t,e){let r,n;for(let i=1;i<arguments.length;i++){n=arguments[i];for(r in n)t[r]=n[r];for(let s=0;s<cI.length;s++)r=cI[s],Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}}function mm(t){return mm[" "](t),t}mm[" "]=hl;function CJ(t){var e=kJ;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var RJ=Rt($t,"Opera"),Ns=Rt($t,"Trident")||Rt($t,"MSIE"),hC=Rt($t,"Edge"),Gp=hC||Ns,fC=Rt($t,"Gecko")&&!(Rt($t.toLowerCase(),"webkit")&&!Rt($t,"Edge"))&&!(Rt($t,"Trident")||Rt($t,"MSIE"))&&!Rt($t,"Edge"),$J=Rt($t.toLowerCase(),"webkit")&&!Rt($t,"Edge");function dC(){var t=le.document;return t?t.documentMode:void 0}var dl;e:{var xd="",Nd=function(){var t=$t;if(fC)return/rv:([^\);]+)(\)|;)/.exec(t);if(hC)return/Edge\/([\d\.]+)/.exec(t);if(Ns)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if($J)return/WebKit\/(\S+)/.exec(t);if(RJ)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Nd&&(xd=Nd?Nd[1]:""),Ns){var Pd=dC();if(Pd!=null&&Pd>parseFloat(xd)){dl=String(Pd);break e}}dl=xd}var kJ={};function xJ(){return CJ(function(){let t=0;const e=sI(String(dl)).split("."),r=sI("9").split("."),n=Math.max(e.length,r.length);for(let o=0;t==0&&o<n;o++){var i=e[o]||"",s=r[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=kd(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||kd(i[2].length==0,s[2].length==0)||kd(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Kp;if(le.document&&Ns){var uI=dC();Kp=uI||parseInt(dl,10)||void 0}else Kp=void 0;var NJ=Kp,PJ=function(){if(!le.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{le.addEventListener("test",hl,e),le.removeEventListener("test",hl,e)}catch{}return t}();function St(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}St.prototype.h=function(){this.defaultPrevented=!0};function ba(t,e){if(St.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var r=this.type=t.type,n=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(fC){e:{try{mm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else r=="mouseover"?e=t.fromElement:r=="mouseout"&&(e=t.toElement);this.relatedTarget=e,n?(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:DJ[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ba.Z.h.call(this)}}_t(ba,St);var DJ={2:"touch",3:"pen",4:"mouse"};ba.prototype.h=function(){ba.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var tc="closure_listenable_"+(1e6*Math.random()|0),LJ=0;function MJ(t,e,r,n,i){this.listener=t,this.proxy=null,this.src=e,this.type=r,this.capture=!!n,this.ia=i,this.key=++LJ,this.ca=this.fa=!1}function wh(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function bh(t){this.src=t,this.g={},this.h=0}bh.prototype.add=function(t,e,r,n,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Yp(t,e,n,i);return-1<o?(e=t[o],r||(e.fa=!1)):(e=new MJ(e,this.src,s,!!n,i),e.fa=r,t.push(e)),e};function Hp(t,e){var r=e.type;if(r in t.g){var n=t.g[r],i=aC(n,e),s;(s=0<=i)&&Array.prototype.splice.call(n,i,1),s&&(wh(e),t.g[r].length==0&&(delete t.g[r],t.h--))}}function Yp(t,e,r,n){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!r&&s.ia==n)return i}return-1}var ym="closure_lm_"+(1e6*Math.random()|0),Dd={};function pC(t,e,r,n,i){if(n&&n.once)return gC(t,e,r,n,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)pC(t,e[s],r,n,i);return null}return r=_m(r),t&&t[tc]?t.N(e,r,ec(n)?!!n.capture:!!n,i):vC(t,e,r,!1,n,i)}function vC(t,e,r,n,i,s){if(!e)throw Error("Invalid event type");var o=ec(i)?!!i.capture:!!i,a=bm(t);if(a||(t[ym]=a=new bh(t)),r=a.add(e,r,n,o,s),r.proxy)return r;if(n=FJ(),r.proxy=n,n.src=t,n.listener=r,t.addEventListener)PJ||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),n,i);else if(t.attachEvent)t.attachEvent(yC(e.toString()),n);else if(t.addListener&&t.removeListener)t.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return r}function FJ(){function t(r){return e.call(t.src,t.listener,r)}var e=UJ;return t}function gC(t,e,r,n,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)gC(t,e[s],r,n,i);return null}return r=_m(r),t&&t[tc]?t.O(e,r,ec(n)?!!n.capture:!!n,i):vC(t,e,r,!0,n,i)}function mC(t,e,r,n,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)mC(t,e[s],r,n,i);else n=ec(n)?!!n.capture:!!n,r=_m(r),t&&t[tc]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],r=Yp(s,r,n,i),-1<r&&(wh(s[r]),Array.prototype.splice.call(s,r,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=bm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Yp(e,r,n,i)),(r=-1<t?e[t]:null)&&wm(r))}function wm(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[tc])Hp(e.i,t);else{var r=t.type,n=t.proxy;e.removeEventListener?e.removeEventListener(r,n,t.capture):e.detachEvent?e.detachEvent(yC(r),n):e.addListener&&e.removeListener&&e.removeListener(n),(r=bm(e))?(Hp(r,t),r.h==0&&(r.src=null,e[ym]=null)):wh(t)}}}function yC(t){return t in Dd?Dd[t]:Dd[t]="on"+t}function UJ(t,e){if(t.ca)t=!0;else{e=new ba(e,this);var r=t.listener,n=t.ia||t.src;t.fa&&wm(t),t=r.call(n,e)}return t}function bm(t){return t=t[ym],t instanceof bh?t:null}var Ld="__closure_events_fn_"+(1e9*Math.random()>>>0);function _m(t){return typeof t=="function"?t:(t[Ld]||(t[Ld]=function(e){return t.handleEvent(e)}),t[Ld])}function ut(){Mn.call(this),this.i=new bh(this),this.P=this,this.I=null}_t(ut,Mn);ut.prototype[tc]=!0;ut.prototype.removeEventListener=function(t,e,r,n){mC(this,t,e,r,n)};function wt(t,e){var r,n=t.I;if(n)for(r=[];n;n=n.I)r.push(n);if(t=t.P,n=e.type||e,typeof e=="string")e=new St(e,t);else if(e instanceof St)e.target=e.target||t;else{var i=e;e=new St(n,t),lC(e,i)}if(i=!0,r)for(var s=r.length-1;0<=s;s--){var o=e.g=r[s];i=tu(o,n,!0,e)&&i}if(o=e.g=t,i=tu(o,n,!0,e)&&i,i=tu(o,n,!1,e)&&i,r)for(s=0;s<r.length;s++)o=e.g=r[s],i=tu(o,n,!1,e)&&i}ut.prototype.M=function(){if(ut.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var r=t.g[e],n=0;n<r.length;n++)wh(r[n]);delete t.g[e],t.h--}}this.I=null};ut.prototype.N=function(t,e,r,n){return this.i.add(String(t),e,!1,r,n)};ut.prototype.O=function(t,e,r,n){return this.i.add(String(t),e,!0,r,n)};function tu(t,e,r,n){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==r){var a=o.listener,c=o.ia||o.src;o.fa&&Hp(t.i,o),i=a.call(c,n)!==!1&&i}}return i&&!n.defaultPrevented}var Em=le.JSON.stringify;function jJ(){var t=bC;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class BJ{constructor(){this.h=this.g=null}add(e,r){const n=wC.get();n.set(e,r),this.h?this.h.next=n:this.g=n,this.h=n}}var wC=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new VJ,t=>t.reset());class VJ{constructor(){this.next=this.g=this.h=null}set(e,r){this.h=e,this.g=r,this.next=null}reset(){this.next=this.g=this.h=null}}function qJ(t){le.setTimeout(()=>{throw t},0)}function Im(t,e){Xp||WJ(),Qp||(Xp(),Qp=!0),bC.add(t,e)}var Xp;function WJ(){var t=le.Promise.resolve(void 0);Xp=function(){t.then(zJ)}}var Qp=!1,bC=new BJ;function zJ(){for(var t;t=jJ();){try{t.h.call(t.g)}catch(r){qJ(r)}var e=wC;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Qp=!1}function _h(t,e){ut.call(this),this.h=t||1,this.g=e||le,this.j=yt(this.kb,this),this.l=Date.now()}_t(_h,ut);X=_h.prototype;X.da=!1;X.S=null;X.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),wt(this,"tick"),this.da&&(Sm(this),this.start()))}};X.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Sm(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}X.M=function(){_h.Z.M.call(this),Sm(this),delete this.g};function Tm(t,e,r){if(typeof t=="function")r&&(t=yt(t,r));else if(t&&typeof t.handleEvent=="function")t=yt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:le.setTimeout(t,e||0)}function _C(t){t.g=Tm(()=>{t.g=null,t.i&&(t.i=!1,_C(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class GJ extends Mn{constructor(e,r){super();this.m=e,this.j=r,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:_C(this)}M(){super.M(),this.g&&(le.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _a(t){Mn.call(this),this.h=t,this.g={}}_t(_a,Mn);var lI=[];function EC(t,e,r,n){Array.isArray(r)||(r&&(lI[0]=r.toString()),r=lI);for(var i=0;i<r.length;i++){var s=pC(e,r[i],n||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function IC(t){gm(t.g,function(e,r){this.g.hasOwnProperty(r)&&wm(e)},t),t.g={}}_a.prototype.M=function(){_a.Z.M.call(this),IC(this)};_a.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Eh(){this.g=!0}Eh.prototype.Aa=function(){this.g=!1};function KJ(t,e,r,n,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+n+") [attempt "+i+"]: "+e+`
`+r+`
`+o})}function HJ(t,e,r,n,i,s,o){t.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+i+"]: "+e+`
`+r+`
`+s+" "+o})}function bs(t,e,r,n){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+XJ(t,r)+(n?" "+n:"")})}function YJ(t,e){t.info(function(){return"TIMEOUT: "+e})}Eh.prototype.info=function(){};function XJ(t,e){if(!t.g)return e;if(!e)return null;try{var r=JSON.parse(e);if(r){for(t=0;t<r.length;t++)if(Array.isArray(r[t])){var n=r[t];if(!(2>n.length)){var i=n[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Em(r)}catch{return e}}var Bi={},hI=null;function Ih(){return hI=hI||new ut}Bi.Ma="serverreachability";function SC(t){St.call(this,Bi.Ma,t)}_t(SC,St);function Ea(t){const e=Ih();wt(e,new SC(e,t))}Bi.STAT_EVENT="statevent";function TC(t,e){St.call(this,Bi.STAT_EVENT,t),this.stat=e}_t(TC,St);function kt(t){const e=Ih();wt(e,new TC(e,t))}Bi.Na="timingevent";function AC(t,e){St.call(this,Bi.Na,t),this.size=e}_t(AC,St);function rc(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return le.setTimeout(function(){t()},e)}var Sh={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},OC={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Am(){}Am.prototype.h=null;function fI(t){return t.h||(t.h=t.i())}function CC(){}var nc={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Om(){St.call(this,"d")}_t(Om,St);function Cm(){St.call(this,"c")}_t(Cm,St);var Jp;function Th(){}_t(Th,Am);Th.prototype.g=function(){return new XMLHttpRequest};Th.prototype.i=function(){return{}};Jp=new Th;function ic(t,e,r,n){this.l=t,this.j=e,this.m=r,this.X=n||1,this.V=new _a(this),this.P=QJ,t=Gp?125:void 0,this.W=new _h(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new RC}function RC(){this.i=null,this.g="",this.h=!1}var QJ=45e3,Zp={},pl={};X=ic.prototype;X.setTimeout=function(t){this.P=t};function ev(t,e,r){t.K=1,t.v=Oh(tn(e)),t.s=r,t.U=!0,$C(t,null)}function $C(t,e){t.F=Date.now(),sc(t),t.A=tn(t.v);var r=t.A,n=t.X;Array.isArray(n)||(n=[String(n)]),MC(r.h,"t",n),t.C=0,r=t.l.H,t.h=new RC,t.g=nR(t.l,r?e:null,!t.s),0<t.O&&(t.L=new GJ(yt(t.Ia,t,t.g),t.O)),EC(t.V,t.g,"readystatechange",t.gb),e=t.H?uC(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ea(1),KJ(t.j,t.u,t.A,t.m,t.X,t.s)}X.gb=function(t){t=t.target;const e=this.L;e&&Hr(t)==3?e.l():this.Ia(t)};X.Ia=function(t){try{if(t==this.g)e:{const l=Hr(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||Gp||this.g&&(this.h.h||this.g.ga()||gI(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Ea(3):Ea(2)),Ah(this);var r=this.g.ba();this.N=r;t:if(kC(this)){var n=gI(this.g);t="";var i=n.length,s=Hr(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Xn(this),Jo(this);var o="";break t}this.h.i=new le.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(n[e],{stream:s&&e==i-1});n.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=r==200,HJ(this.j,this.u,this.A,this.m,this.X,l,r),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!fl(a)){var u=a;break t}}u=null}if(r=u)bs(this.j,this.m,r,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,tv(this,r);else{this.i=!1,this.o=3,kt(12),Xn(this),Jo(this);break e}}this.U?(xC(this,l,o),Gp&&this.i&&l==3&&(EC(this.V,this.W,"tick",this.fb),this.W.start())):(bs(this.j,this.m,o,null),tv(this,o)),l==4&&Xn(this),this.i&&!this.I&&(l==4?ZC(this.l,this):(this.i=!1,sc(this)))}else r==400&&0<o.indexOf("Unknown SID")?(this.o=3,kt(12)):(this.o=0,kt(13)),Xn(this),Jo(this)}}}catch{}finally{}};function kC(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function xC(t,e,r){let n=!0,i;for(;!t.I&&t.C<r.length;)if(i=JJ(t,r),i==pl){e==4&&(t.o=4,kt(14),n=!1),bs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Zp){t.o=4,kt(15),bs(t.j,t.m,r,"[Invalid Chunk]"),n=!1;break}else bs(t.j,t.m,i,null),tv(t,i);kC(t)&&i!=pl&&i!=Zp&&(t.h.g="",t.C=0),e!=4||r.length!=0||t.h.h||(t.o=1,kt(16),n=!1),t.i=t.i&&n,n?0<r.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+r.length),Mm(e),e.L=!0,kt(11))):(bs(t.j,t.m,r,"[Invalid Chunked Response]"),Xn(t),Jo(t))}X.fb=function(){if(this.g){var t=Hr(this.g),e=this.g.ga();this.C<e.length&&(Ah(this),xC(this,t,e),this.i&&t!=4&&sc(this))}};function JJ(t,e){var r=t.C,n=e.indexOf(`
`,r);return n==-1?pl:(r=Number(e.substring(r,n)),isNaN(r)?Zp:(n+=1,n+r>e.length?pl:(e=e.substr(n,r),t.C=n+r,e)))}X.cancel=function(){this.I=!0,Xn(this)};function sc(t){t.Y=Date.now()+t.P,NC(t,t.P)}function NC(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=rc(yt(t.eb,t),e)}function Ah(t){t.B&&(le.clearTimeout(t.B),t.B=null)}X.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(YJ(this.j,this.A),this.K!=2&&(Ea(3),kt(17)),Xn(this),this.o=2,Jo(this)):NC(this,this.Y-t)};function Jo(t){t.l.G==0||t.I||ZC(t.l,t)}function Xn(t){Ah(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Sm(t.W),IC(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function tv(t,e){try{var r=t.l;if(r.G!=0&&(r.g==t||rv(r.i,t))){if(r.I=t.N,!t.J&&rv(r.i,t)&&r.G==3){try{var n=r.Ca.g.parse(e)}catch{n=null}if(Array.isArray(n)&&n.length==3){var i=n;if(i[0]==0)e:if(!r.u){if(r.g)if(r.g.F+3e3<t.F)yl(r),$h(r);else break e;Lm(r),kt(18)}else r.ta=i[1],0<r.ta-r.U&&37500>i[2]&&r.N&&r.A==0&&!r.v&&(r.v=rc(yt(r.ab,r),6e3));if(1>=jC(r.i)&&r.ka){try{r.ka()}catch{}r.ka=void 0}}else Qn(r,11)}else if((t.J||r.g==t)&&yl(r),!fl(e))for(i=r.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(r.U=u[0],u=u[1],r.G==2)if(u[0]=="c"){r.J=u[1],r.la=u[2];const l=u[3];l!=null&&(r.ma=l,r.h.info("VER="+r.ma));const h=u[4];h!=null&&(r.za=h,r.h.info("SVER="+r.za));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(n=1.5*f,r.K=n,r.h.info("backChannelRequestTimeoutMs_="+n)),n=r;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=n.i;!s.g&&(Rt(g,"spdy")||Rt(g,"quic")||Rt(g,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(km(s,s.h),s.h=null))}if(n.D){const E=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(n.sa=E,Ne(n.F,n.D,E))}}r.G=3,r.j&&r.j.xa(),r.$&&(r.O=Date.now()-t.F,r.h.info("Handshake RTT: "+r.O+"ms")),n=r;var o=t;if(n.oa=rR(n,n.H?n.la:null,n.W),o.J){BC(n.i,o);var a=o,c=n.K;c&&a.setTimeout(c),a.B&&(Ah(a),sc(a)),n.g=o}else QC(n);0<r.l.length&&kh(r)}else u[0]!="stop"&&u[0]!="close"||Qn(r,7);else r.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Qn(r,7):Dm(r):u[0]!="noop"&&r.j&&r.j.wa(u),r.A=0)}}Ea(4)}catch{}}function ZJ(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(zp(t)){for(var e=[],r=t.length,n=0;n<r;n++)e.push(t[n]);return e}e=[],r=0;for(n in t)e[r++]=t[n];return e}function Rm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(zp(t)||typeof t=="string")cC(t,e,void 0);else{if(t.T&&typeof t.T=="function")var r=t.T();else if(t.R&&typeof t.R=="function")r=void 0;else if(zp(t)||typeof t=="string"){r=[];for(var n=t.length,i=0;i<n;i++)r.push(i)}else for(i in r=[],n=0,t)r[n++]=i;n=ZJ(t),i=n.length;for(var s=0;s<i;s++)e.call(void 0,n[s],r&&r[s],t)}}function po(t,e){this.h={},this.g=[],this.i=0;var r=arguments.length;if(1<r){if(r%2)throw Error("Uneven number of arguments");for(var n=0;n<r;n+=2)this.set(arguments[n],arguments[n+1])}else if(t)if(t instanceof po)for(r=t.T(),n=0;n<r.length;n++)this.set(r[n],t.get(r[n]));else for(n in t)this.set(n,t[n])}X=po.prototype;X.R=function(){$m(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};X.T=function(){return $m(this),this.g.concat()};function $m(t){if(t.i!=t.g.length){for(var e=0,r=0;e<t.g.length;){var n=t.g[e];Ii(t.h,n)&&(t.g[r++]=n),e++}t.g.length=r}if(t.i!=t.g.length){var i={};for(r=e=0;e<t.g.length;)n=t.g[e],Ii(i,n)||(t.g[r++]=n,i[n]=1),e++;t.g.length=r}}X.get=function(t,e){return Ii(this.h,t)?this.h[t]:e};X.set=function(t,e){Ii(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};X.forEach=function(t,e){for(var r=this.T(),n=0;n<r.length;n++){var i=r[n],s=this.get(i);t.call(e,s,i,this)}};function Ii(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var PC=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function e8(t,e){if(t){t=t.split("&");for(var r=0;r<t.length;r++){var n=t[r].indexOf("="),i=null;if(0<=n){var s=t[r].substring(0,n);i=t[r].substring(n+1)}else s=t[r];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Si(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Si){this.g=e!==void 0?e:t.g,vl(this,t.j),this.s=t.s,gl(this,t.i),ml(this,t.m),this.l=t.l,e=t.h;var r=new Ia;r.i=e.i,e.g&&(r.g=new po(e.g),r.h=e.h),dI(this,r),this.o=t.o}else t&&(r=String(t).match(PC))?(this.g=!!e,vl(this,r[1]||"",!0),this.s=Zo(r[2]||""),gl(this,r[3]||"",!0),ml(this,r[4]),this.l=Zo(r[5]||"",!0),dI(this,r[6]||"",!0),this.o=Zo(r[7]||"")):(this.g=!!e,this.h=new Ia(null,this.g))}Si.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Go(e,pI,!0),":");var r=this.i;return(r||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Go(e,pI,!0),"@"),t.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r=this.m,r!=null&&t.push(":",String(r))),(r=this.l)&&(this.i&&r.charAt(0)!="/"&&t.push("/"),t.push(Go(r,r.charAt(0)=="/"?s8:i8,!0))),(r=this.h.toString())&&t.push("?",r),(r=this.o)&&t.push("#",Go(r,a8)),t.join("")};function tn(t){return new Si(t)}function vl(t,e,r){t.j=r?Zo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function gl(t,e,r){t.i=r?Zo(e,!0):e}function ml(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function dI(t,e,r){e instanceof Ia?(t.h=e,c8(t.h,t.g)):(r||(e=Go(e,o8)),t.h=new Ia(e,t.g))}function Ne(t,e,r){t.h.set(e,r)}function Oh(t){return Ne(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function t8(t){return t instanceof Si?tn(t):new Si(t,void 0)}function r8(t,e,r,n){var i=new Si(null,void 0);return t&&vl(i,t),e&&gl(i,e),r&&ml(i,r),n&&(i.l=n),i}function Zo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Go(t,e,r){return typeof t=="string"?(t=encodeURI(t).replace(e,n8),r&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function n8(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var pI=/[#\/\?@]/g,i8=/[#\?:]/g,s8=/[#\?]/g,o8=/[#\?@]/g,a8=/#/g;function Ia(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Fn(t){t.g||(t.g=new po,t.h=0,t.i&&e8(t.i,function(e,r){t.add(decodeURIComponent(e.replace(/\+/g," ")),r)}))}X=Ia.prototype;X.add=function(t,e){Fn(this),this.i=null,t=vo(this,t);var r=this.g.get(t);return r||this.g.set(t,r=[]),r.push(e),this.h+=1,this};function DC(t,e){Fn(t),e=vo(t,e),Ii(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Ii(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&$m(t)))}function LC(t,e){return Fn(t),e=vo(t,e),Ii(t.g.h,e)}X.forEach=function(t,e){Fn(this),this.g.forEach(function(r,n){cC(r,function(i){t.call(e,i,n,this)},this)},this)};X.T=function(){Fn(this);for(var t=this.g.R(),e=this.g.T(),r=[],n=0;n<e.length;n++)for(var i=t[n],s=0;s<i.length;s++)r.push(e[n]);return r};X.R=function(t){Fn(this);var e=[];if(typeof t=="string")LC(this,t)&&(e=iI(e,this.g.get(vo(this,t))));else{t=this.g.R();for(var r=0;r<t.length;r++)e=iI(e,t[r])}return e};X.set=function(t,e){return Fn(this),this.i=null,t=vo(this,t),LC(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};X.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function MC(t,e,r){DC(t,e),0<r.length&&(t.i=null,t.g.set(vo(t,e),vm(r)),t.h+=r.length)}X.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),r=0;r<e.length;r++){var n=e[r],i=encodeURIComponent(String(n));n=this.R(n);for(var s=0;s<n.length;s++){var o=i;n[s]!==""&&(o+="="+encodeURIComponent(String(n[s]))),t.push(o)}}return this.i=t.join("&")};function vo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function c8(t,e){e&&!t.j&&(Fn(t),t.i=null,t.g.forEach(function(r,n){var i=n.toLowerCase();n!=i&&(DC(this,n),MC(this,i,r))},t)),t.j=e}var u8=class{constructor(t,e){this.h=t,this.g=e}};function FC(t){this.l=t||l8,le.PerformanceNavigationTiming?(t=le.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(le.g&&le.g.Ea&&le.g.Ea()&&le.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var l8=10;function UC(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function jC(t){return t.h?1:t.g?t.g.size:0}function rv(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function km(t,e){t.g?t.g.add(e):t.h=e}function BC(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}FC.prototype.cancel=function(){if(this.i=VC(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function VC(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const r of t.g.values())e=e.concat(r.D);return e}return vm(t.i)}function xm(){}xm.prototype.stringify=function(t){return le.JSON.stringify(t,void 0)};xm.prototype.parse=function(t){return le.JSON.parse(t,void 0)};function h8(){this.g=new xm}function f8(t,e,r){const n=r||"";try{Rm(t,function(i,s){let o=i;ec(i)&&(o=Em(i)),e.push(n+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(n+"type="+encodeURIComponent("_badmap")),i}}function d8(t,e){const r=new Eh;if(le.Image){const n=new Image;n.onload=eu(ru,r,n,"TestLoadImage: loaded",!0,e),n.onerror=eu(ru,r,n,"TestLoadImage: error",!1,e),n.onabort=eu(ru,r,n,"TestLoadImage: abort",!1,e),n.ontimeout=eu(ru,r,n,"TestLoadImage: timeout",!1,e),le.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=t}else e(!1)}function ru(t,e,r,n,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(n)}catch{}}function oc(t){this.l=t.$b||null,this.j=t.ib||!1}_t(oc,Am);oc.prototype.g=function(){return new Ch(this.l,this.j)};oc.prototype.i=function(t){return function(){return t}}({});function Ch(t,e){ut.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Nm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_t(Ch,ut);var Nm=0;X=Ch.prototype;X.open=function(t,e){if(this.readyState!=Nm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Sa(this)};X.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||le).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};X.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ac(this)),this.readyState=Nm};X.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Sa(this)),this.g&&(this.readyState=3,Sa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof le.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qC(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function qC(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}X.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ac(this):Sa(this),this.readyState==3&&qC(this)}};X.Ua=function(t){this.g&&(this.response=this.responseText=t,ac(this))};X.Ta=function(t){this.g&&(this.response=t,ac(this))};X.ha=function(){this.g&&ac(this)};function ac(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Sa(t)}X.setRequestHeader=function(t,e){this.v.append(t,e)};X.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};X.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var r=e.next();!r.done;)r=r.value,t.push(r[0]+": "+r[1]),r=e.next();return t.join(`\r
`)};function Sa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ch.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var p8=le.JSON.parse;function Je(t){ut.call(this),this.headers=new po,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=WC,this.K=this.L=!1}_t(Je,ut);var WC="",v8=/^https?$/i,g8=["POST","PUT"];X=Je.prototype;X.ea=function(t,e,r,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Jp.g(),this.C=this.u?fI(this.u):fI(Jp),this.g.onreadystatechange=yt(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){vI(this,s);return}t=r||"";const i=new po(this.headers);n&&Rm(n,function(s,o){i.set(o,s)}),n=OJ(i.T()),r=le.FormData&&t instanceof le.FormData,!(0<=aC(g8,e))||n||r||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{KC(this),0<this.B&&((this.K=m8(this.g))?(this.g.timeout=this.B,this.g.ontimeout=yt(this.pa,this)):this.A=Tm(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){vI(this,s)}};function m8(t){return Ns&&xJ()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function y8(t){return t.toLowerCase()=="content-type"}X.pa=function(){typeof pm!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,wt(this,"timeout"),this.abort(8))};function vI(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,zC(t),Rh(t)}function zC(t){t.D||(t.D=!0,wt(t,"complete"),wt(t,"error"))}X.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,wt(this,"complete"),wt(this,"abort"),Rh(this))};X.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Rh(this,!0)),Je.Z.M.call(this)};X.Fa=function(){this.s||(this.F||this.v||this.l?GC(this):this.cb())};X.cb=function(){GC(this)};function GC(t){if(t.h&&typeof pm!="undefined"&&(!t.C[1]||Hr(t)!=4||t.ba()!=2)){if(t.v&&Hr(t)==4)Tm(t.Fa,0,t);else if(wt(t,"readystatechange"),Hr(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var r;if(!(r=e)){var n;if(n=a===0){var i=String(t.H).match(PC)[1]||null;if(!i&&le.self&&le.self.location){var s=le.self.location.protocol;i=s.substr(0,s.length-1)}n=!v8.test(i?i.toLowerCase():"")}r=n}if(r)wt(t,"complete"),wt(t,"success");else{t.m=6;try{var o=2<Hr(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",zC(t)}}finally{Rh(t)}}}}function Rh(t,e){if(t.g){KC(t);const r=t.g,n=t.C[0]?hl:null;t.g=null,t.C=null,e||wt(t,"ready");try{r.onreadystatechange=n}catch{}}}function KC(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(le.clearTimeout(t.A),t.A=null)}function Hr(t){return t.g?t.g.readyState:0}X.ba=function(){try{return 2<Hr(this)?this.g.status:-1}catch{return-1}};X.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};X.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),p8(e)}};function gI(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case WC:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}X.Da=function(){return this.m};X.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function w8(t){let e="";return gm(t,function(r,n){e+=n,e+=":",e+=r,e+=`\r
`}),e}function Pm(t,e,r){e:{for(n in r){var n=!1;break e}n=!0}n||(r=w8(r),typeof t=="string"?r!=null&&encodeURIComponent(String(r)):Ne(t,e,r))}function jo(t,e,r){return r&&r.internalChannelParams&&r.internalChannelParams[t]||e}function HC(t){this.za=0,this.l=[],this.h=new Eh,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=jo("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=jo("baseRetryDelayMs",5e3,t),this.$a=jo("retryDelaySeedMs",1e4,t),this.Ya=jo("forwardChannelMaxRetries",2,t),this.ra=jo("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new FC(t&&t.concurrentRequestLimit),this.Ca=new h8,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}X=HC.prototype;X.ma=8;X.G=1;function Dm(t){if(YC(t),t.G==3){var e=t.V++,r=tn(t.F);Ne(r,"SID",t.J),Ne(r,"RID",e),Ne(r,"TYPE","terminate"),cc(t,r),e=new ic(t,t.h,e,void 0),e.K=2,e.v=Oh(tn(r)),r=!1,le.navigator&&le.navigator.sendBeacon&&(r=le.navigator.sendBeacon(e.v.toString(),"")),!r&&le.Image&&(new Image().src=e.v,r=!0),r||(e.g=nR(e.l,null),e.g.ea(e.v)),e.F=Date.now(),sc(e)}tR(t)}X.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function $h(t){t.g&&(Mm(t),t.g.cancel(),t.g=null)}function YC(t){$h(t),t.u&&(le.clearTimeout(t.u),t.u=null),yl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&le.clearTimeout(t.m),t.m=null)}function Md(t,e){t.l.push(new u8(t.Za++,e)),t.G==3&&kh(t)}function kh(t){UC(t.i)||t.m||(t.m=!0,Im(t.Ha,t),t.C=0)}function b8(t,e){return jC(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=rc(yt(t.Ha,t,e),eR(t,t.C)),t.C++,!0)}X.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new ic(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=uC(s),lC(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,r=0;r<this.l.length;r++){t:{var n=this.l[r];if("__data__"in n.g&&(n=n.g.__data__,typeof n=="string")){n=n.length;break t}n=void 0}if(n===void 0)break;if(e+=n,4096<e){e=r;break e}if(e===4096||r===this.l.length-1){e=r+1;break e}}e=1e3}else e=1e3;e=XC(this,i,e),r=tn(this.F),Ne(r,"RID",t),Ne(r,"CVER",22),this.D&&Ne(r,"X-HTTP-Session-Id",this.D),cc(this,r),this.o&&s&&Pm(r,this.o,s),km(this.i,i),this.Ra&&Ne(r,"TYPE","init"),this.ja?(Ne(r,"$req",e),Ne(r,"SID","null"),i.$=!0,ev(i,r,null)):ev(i,r,e),this.G=2}}else this.G==3&&(t?mI(this,t):this.l.length==0||UC(this.i)||mI(this))};function mI(t,e){var r;e?r=e.m:r=t.V++;const n=tn(t.F);Ne(n,"SID",t.J),Ne(n,"RID",r),Ne(n,"AID",t.U),cc(t,n),t.o&&t.s&&Pm(n,t.o,t.s),r=new ic(t,t.h,r,t.C+1),t.o===null&&(r.H=t.s),e&&(t.l=e.D.concat(t.l)),e=XC(t,r,1e3),r.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),km(t.i,r),ev(r,n,e)}function cc(t,e){t.j&&Rm({},function(r,n){Ne(e,n,r)})}function XC(t,e,r){r=Math.min(t.l.length,r);var n=t.j?yt(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+r];s==-1?0<r?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<r;c++){let u=i[c].h;const l=i[c].g;if(u-=s,0>u)s=Math.max(0,i[c].h-100),a=!1;else try{f8(l,o,"req"+u+"_")}catch{n&&n(l)}}if(a){n=o.join("&");break e}}}return t=t.l.splice(0,r),e.D=t,n}function QC(t){t.g||t.u||(t.Y=1,Im(t.Ga,t),t.A=0)}function Lm(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=rc(yt(t.Ga,t),eR(t,t.A)),t.A++,!0)}X.Ga=function(){if(this.u=null,JC(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=rc(yt(this.bb,this),t)}};X.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,kt(10),$h(this),JC(this))};function Mm(t){t.B!=null&&(le.clearTimeout(t.B),t.B=null)}function JC(t){t.g=new ic(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=tn(t.oa);Ne(e,"RID","rpc"),Ne(e,"SID",t.J),Ne(e,"CI",t.N?"0":"1"),Ne(e,"AID",t.U),cc(t,e),Ne(e,"TYPE","xmlhttp"),t.o&&t.s&&Pm(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var r=t.g;t=t.la,r.K=1,r.v=Oh(tn(e)),r.s=null,r.U=!0,$C(r,t)}X.ab=function(){this.v!=null&&(this.v=null,$h(this),Lm(this),kt(19))};function yl(t){t.v!=null&&(le.clearTimeout(t.v),t.v=null)}function ZC(t,e){var r=null;if(t.g==e){yl(t),Mm(t),t.g=null;var n=2}else if(rv(t.i,e))r=e.D,BC(t.i,e),n=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(n==1){r=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;n=Ih(),wt(n,new AC(n,r,e,i)),kh(t)}else QC(t);else if(i=e.o,i==3||i==0&&0<t.I||!(n==1&&b8(t,e)||n==2&&Lm(t)))switch(r&&0<r.length&&(e=t.i,e.i=e.i.concat(r)),i){case 1:Qn(t,5);break;case 4:Qn(t,10);break;case 3:Qn(t,6);break;default:Qn(t,2)}}}function eR(t,e){let r=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(r*=2),r*e}function Qn(t,e){if(t.h.info("Error code "+e),e==2){var r=null;t.j&&(r=null);var n=yt(t.jb,t);r||(r=new Si("//www.google.com/images/cleardot.gif"),le.location&&le.location.protocol=="http"||vl(r,"https"),Oh(r)),d8(r.toString(),n)}else kt(2);t.G=0,t.j&&t.j.va(e),tR(t),YC(t)}X.jb=function(t){t?(this.h.info("Successfully pinged google.com"),kt(2)):(this.h.info("Failed to ping google.com"),kt(1))};function tR(t){t.G=0,t.I=-1,t.j&&((VC(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,vm(t.l),t.l.length=0),t.j.ua())}function rR(t,e,r){let n=t8(r);if(n.i!="")e&&gl(n,e+"."+n.i),ml(n,n.m);else{const i=le.location;n=r8(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,r)}return t.aa&&gm(t.aa,function(i,s){Ne(n,s,i)}),e=t.D,r=t.sa,e&&r&&Ne(n,e,r),Ne(n,"VER",t.ma),cc(t,n),n}function nR(t,e,r){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=r&&t.Ba&&!t.qa?new Je(new oc({ib:!0})):new Je(t.qa),e.L=t.H,e}function iR(){}X=iR.prototype;X.xa=function(){};X.wa=function(){};X.va=function(){};X.ua=function(){};X.Oa=function(){};function wl(){if(Ns&&!(10<=Number(NJ)))throw Error("Environmental error: no available transport.")}wl.prototype.g=function(t,e){return new Qt(t,e)};function Qt(t,e){ut.call(this),this.g=new HC(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!fl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!fl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new go(this)}_t(Qt,ut);Qt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,r=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Im(yt(t.hb,t,e))),kt(0),t.W=e,t.aa=r||{},t.N=t.X,t.F=rR(t,null,t.W),kh(t)};Qt.prototype.close=function(){Dm(this.g)};Qt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Md(this.g,e)}else this.v?(e={},e.__data__=Em(t),Md(this.g,e)):Md(this.g,t)};Qt.prototype.M=function(){this.g.j=null,delete this.j,Dm(this.g),delete this.g,Qt.Z.M.call(this)};function sR(t){Om.call(this);var e=t.__sm__;if(e){e:{for(const r in e){t=r;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}_t(sR,Om);function oR(){Cm.call(this),this.status=1}_t(oR,Cm);function go(t){this.g=t}_t(go,iR);go.prototype.xa=function(){wt(this.g,"a")};go.prototype.wa=function(t){wt(this.g,new sR(t))};go.prototype.va=function(t){wt(this.g,new oR(t))};go.prototype.ua=function(){wt(this.g,"b")};wl.prototype.createWebChannel=wl.prototype.g;Qt.prototype.send=Qt.prototype.u;Qt.prototype.open=Qt.prototype.m;Qt.prototype.close=Qt.prototype.close;Sh.NO_ERROR=0;Sh.TIMEOUT=8;Sh.HTTP_ERROR=6;OC.COMPLETE="complete";CC.EventType=nc;nc.OPEN="a";nc.CLOSE="b";nc.ERROR="c";nc.MESSAGE="d";ut.prototype.listen=ut.prototype.N;Je.prototype.listenOnce=Je.prototype.O;Je.prototype.getLastError=Je.prototype.La;Je.prototype.getLastErrorCode=Je.prototype.Da;Je.prototype.getStatus=Je.prototype.ba;Je.prototype.getResponseJson=Je.prototype.Qa;Je.prototype.getResponseText=Je.prototype.ga;Je.prototype.send=Je.prototype.ea;var _8=function(){return new wl},E8=function(){return Ih()},Fd=Sh,I8=OC,S8=Bi,yI={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},T8=oc,nu=CC,A8=Je;const wI="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mo="9.6.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new ah("@firebase/firestore");function nv(){return $n.logLevel}function O8(t){$n.setLogLevel(t)}function V(t,...e){if($n.logLevel<=_e.DEBUG){const r=e.map(Fm);$n.debug(`Firestore (${mo}): ${t}`,...r)}}function Ye(t,...e){if($n.logLevel<=_e.ERROR){const r=e.map(Fm);$n.error(`Firestore (${mo}): ${t}`,...r)}}function Ta(t,...e){if($n.logLevel<=_e.WARN){const r=e.map(Fm);$n.warn(`Firestore (${mo}): ${t}`,...r)}}function Fm(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${mo}) INTERNAL ASSERTION FAILED: `+t;throw Ye(e),new Error(e)}function se(t,e){t||ee()}function C8(t,e){t||ee()}function K(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Yt{constructor(e,r){super(e,r),this.code=e,this.message=r,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(){this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e,r){this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class R8{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,r){e.enqueueRetryable(()=>r(dt.UNAUTHENTICATED))}shutdown(){}}class $8{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,r){this.changeListener=r,e.enqueueRetryable(()=>r(this.token.user))}shutdown(){this.changeListener=null}}class k8{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,r){let n=this.i;const i=c=>this.i!==n?(n=this.i,r(c)):Promise.resolve();let s=new st;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new st,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new st)}},0),o()}getToken(){const e=this.i,r=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(r).then(n=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(se(typeof n.accessToken=="string"),new aR(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string"),new dt(e)}}class x8{constructor(e,r,n){this.type="FirstParty",this.user=dt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",r);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class N8{constructor(e,r,n){this.h=e,this.l=r,this.m=n}getToken(){return Promise.resolve(new x8(this.h,this.l,this.m))}start(e,r){e.enqueueRetryable(()=>r(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class P8{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class D8{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,r){this.o=i=>{e.enqueueRetryable(()=>(s=>(s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`),r(s.token)))(i))};const n=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>n(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?n(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(r=>r?(se(typeof r.token=="string"),new P8(r.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,r){this.previousValue=e,r&&(r.sequenceNumberHandler=n=>this.p(n),this.T=n=>r.writeSequenceNumber(n))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L8(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),r=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(r);else for(let n=0;n<t;n++)r[n]=Math.floor(256*Math.random());return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kt.I=-1;class cR{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=L8(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<r&&(n+=e.charAt(i[s]%e.length))}return n}}function me(t,e){return t<e?-1:t>e?1:0}function Ps(t,e,r){return t.length===e.length&&t.every((n,i)=>r(n,e[i]))}function uR(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,r){if(this.seconds=e,this.nanoseconds=r,r<0)throw new M($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new M($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(e<-62135596800)throw new M($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ot.fromMillis(Date.now())}static fromDate(e){return ot.fromMillis(e.getTime())}static fromMillis(e){const r=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*r));return new ot(r,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new fe(e)}static min(){return new fe(new ot(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(t){let e=0;for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&e++;return e}function Vi(t,e){for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&e(r,t[r])}function lR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,r,n){r===void 0?r=0:r>e.length&&ee(),n===void 0?n=e.length-r:n>e.length-r&&ee(),this.segments=e,this.offset=r,this.len=n}get length(){return this.len}isEqual(e){return Aa.comparator(this,e)===0}child(e){const r=this.segments.slice(this.offset,this.limit());return e instanceof Aa?e.forEach(n=>{r.push(n)}):r.push(e),this.construct(r)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}forEach(e){for(let r=this.offset,n=this.limit();r<n;r++)e(this.segments[r])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,r){const n=Math.min(e.length,r.length);for(let i=0;i<n;i++){const s=e.get(i),o=r.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<r.length?-1:e.length>r.length?1:0}}class Ie extends Aa{construct(e,r,n){return new Ie(e,r,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const r=[];for(const n of e){if(n.indexOf("//")>=0)throw new M($.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);r.push(...n.split("/").filter(i=>i.length>0))}return new Ie(r)}static emptyPath(){return new Ie([])}}const M8=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends Aa{construct(e,r,n){return new vt(e,r,n)}static isValidIdentifier(e){return M8.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vt(["__name__"])}static fromServerFormat(e){const r=[];let n="",i=0;const s=()=>{if(n.length===0)throw new M($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);r.push(n),n=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new M($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new M($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(n+=a,i++):(s(),i++)}if(s(),o)throw new M($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(r)}static emptyPath(){return new vt([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.fields=e,e.sort(vt.comparator)}covers(e){for(const r of this.fields)if(r.isPrefixOf(e))return!0;return!1}isEqual(e){return Ps(this.fields,e.fields,(r,n)=>r.isEqual(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F8(){return typeof atob!="undefined"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const r=atob(e);return new et(r)}static fromUint8Array(e){const r=function(n){let i="";for(let s=0;s<n.length;++s)i+=String.fromCharCode(n[s]);return i}(e);return new et(r)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let n=0;n<e.length;n++)r[n]=e.charCodeAt(n);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const U8=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kn(t){if(se(!!t),typeof t=="string"){let e=0;const r=U8.exec(t);if(se(!!r),r[1]){let i=r[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(t);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ls(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(t){var e,r;return((r=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||r===void 0?void 0:r.stringValue)==="server_timestamp"}function hR(t){const e=t.mapValue.fields.__previous_value__;return Um(e)?hR(e):e}function Oa(t){const e=kn(t.mapValue.fields.__local_write_time__.timestampValue);return new ot(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t){return t==null}function bl(t){return t===0&&1/t==-1/0}function fR(t){return typeof t=="number"&&Number.isInteger(t)&&!bl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Ie.fromString(e))}static fromName(e){return new Z(Ie.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,r){return Ie.comparator(e.path,r.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Ie(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Um(t)?4:10:ee()}function jr(t,e){if(t===e)return!0;const r=Ti(t);if(r!==Ti(e))return!1;switch(r){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oa(t).isEqual(Oa(e));case 3:return function(n,i){if(typeof n.timestampValue=="string"&&typeof i.timestampValue=="string"&&n.timestampValue.length===i.timestampValue.length)return n.timestampValue===i.timestampValue;const s=kn(n.timestampValue),o=kn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(n,i){return Ls(n.bytesValue).isEqual(Ls(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(n,i){return He(n.geoPointValue.latitude)===He(i.geoPointValue.latitude)&&He(n.geoPointValue.longitude)===He(i.geoPointValue.longitude)}(t,e);case 2:return function(n,i){if("integerValue"in n&&"integerValue"in i)return He(n.integerValue)===He(i.integerValue);if("doubleValue"in n&&"doubleValue"in i){const s=He(n.doubleValue),o=He(i.doubleValue);return s===o?bl(s)===bl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Ps(t.arrayValue.values||[],e.arrayValue.values||[],jr);case 10:return function(n,i){const s=n.mapValue.fields||{},o=i.mapValue.fields||{};if(bI(s)!==bI(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!jr(s[a],o[a])))return!1;return!0}(t,e);default:return ee()}}function Ca(t,e){return(t.values||[]).find(r=>jr(r,e))!==void 0}function Ms(t,e){if(t===e)return 0;const r=Ti(t),n=Ti(e);if(r!==n)return me(r,n);switch(r){case 0:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=He(i.integerValue||i.doubleValue),a=He(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return _I(t.timestampValue,e.timestampValue);case 4:return _I(Oa(t),Oa(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Ls(i),a=Ls(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=me(o[c],a[c]);if(u!==0)return u}return me(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=me(He(i.latitude),He(s.latitude));return o!==0?o:me(He(i.longitude),He(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Ms(o[c],a[c]);if(u)return u}return me(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),c=s.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=me(a[l],u[l]);if(h!==0)return h;const f=Ms(o[a[l]],c[u[l]]);if(f!==0)return f}return me(a.length,u.length)}(t.mapValue,e.mapValue);default:throw ee()}}function _I(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const r=kn(t),n=kn(e),i=me(r.seconds,n.seconds);return i!==0?i:me(r.nanos,n.nanos)}function jm(t){return iv(t)}function iv(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=kn(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ls(t.bytesValue).toBase64():"referenceValue"in t?(r=t.referenceValue,Z.fromName(r).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(n){let i="[",s=!0;for(const o of n.values||[])s?s=!1:i+=",",i+=iv(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${iv(n.fields[a])}`;return s+"}"}(t.mapValue):ee();var e,r}function _l(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function sv(t){return!!t&&"integerValue"in t}function Bm(t){return!!t&&"arrayValue"in t}function EI(t){return!!t&&"nullValue"in t}function II(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ou(t){return!!t&&"mapValue"in t}function ea(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Vi(t.mapValue.fields,(r,n)=>e.mapValue.fields[r]=ea(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let r=0;r<(t.arrayValue.values||[]).length;++r)e.arrayValue.values[r]=ea(t.arrayValue.values[r]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let r=this.value;for(let n=0;n<e.length-1;++n)if(r=(r.mapValue.fields||{})[e.get(n)],!Ou(r))return null;return r=(r.mapValue.fields||{})[e.lastSegment()],r||null}}set(e,r){this.getFieldsMap(e.popLast())[e.lastSegment()]=ea(r)}setAll(e){let r=vt.emptyPath(),n={},i=[];e.forEach((o,a)=>{if(!r.isImmediateParentOf(a)){const c=this.getFieldsMap(r);this.applyChanges(c,n,i),n={},i=[],r=a.popLast()}o?n[a.lastSegment()]=ea(o):i.push(a.lastSegment())});const s=this.getFieldsMap(r);this.applyChanges(s,n,i)}delete(e){const r=this.field(e.popLast());Ou(r)&&r.mapValue.fields&&delete r.mapValue.fields[e.lastSegment()]}isEqual(e){return jr(this.value,e.value)}getFieldsMap(e){let r=this.value;r.mapValue.fields||(r.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=r.mapValue.fields[e.get(n)];Ou(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},r.mapValue.fields[e.get(n)]=i),r=i}return r.mapValue.fields}applyChanges(e,r,n){Vi(r,(i,s)=>e[i]=s);for(const i of n)delete e[i]}clone(){return new It(ea(this.value))}}function dR(t){const e=[];return Vi(t.fields,(r,n)=>{const i=new vt([r]);if(Ou(n)){const s=dR(n.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ds(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,r,n,i,s){this.key=e,this.documentType=r,this.version=n,this.data=i,this.documentState=s}static newInvalidDocument(e){return new Pe(e,0,fe.min(),It.empty(),0)}static newFoundDocument(e,r,n){return new Pe(e,1,r,n,0)}static newNoDocument(e,r){return new Pe(e,2,r,It.empty(),0)}static newUnknownDocument(e,r){return new Pe(e,3,r,It.empty(),2)}convertToFoundDocument(e,r){return this.version=e,this.documentType=1,this.data=r,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pe(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j8{constructor(e,r=null,n=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=r,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.R=null}}function SI(t,e=null,r=[],n=[],i=null,s=null,o=null){return new j8(t,e,r,n,i,s,o)}function uc(t){const e=K(t);if(e.R===null){let r=e.path.canonicalString();e.collectionGroup!==null&&(r+="|cg:"+e.collectionGroup),r+="|f:",r+=e.filters.map(n=>V8(n)).join(","),r+="|ob:",r+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),qi(e.limit)||(r+="|l:",r+=e.limit),e.startAt&&(r+="|lb:",r+=Il(e.startAt)),e.endAt&&(r+="|ub:",r+=Il(e.endAt)),e.R=r}return e.R}function B8(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(r=>{return`${(n=r).field.canonicalString()} ${n.op} ${jm(n.value)}`;var n}).join(", ")}]`),qi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(r=>function(n){return`${n.field.canonicalString()} (${n.dir})`}(r)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Il(t.startAt)),t.endAt&&(e+=", endAt: "+Il(t.endAt)),`Target(${e})`}function xh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!X8(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(r=t.filters[i],n=e.filters[i],r.op!==n.op||!r.field.isEqual(n.field)||!jr(r.value,n.value))return!1;var r,n;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!AI(t.startAt,e.startAt)&&AI(t.endAt,e.endAt)}function El(t){return Z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class xt extends class{}{constructor(e,r,n){super(),this.field=e,this.op=r,this.value=n}static create(e,r,n){return e.isKeyField()?r==="in"||r==="not-in"?this.P(e,r,n):new q8(e,r,n):r==="array-contains"?new G8(e,n):r==="in"?new K8(e,n):r==="not-in"?new H8(e,n):r==="array-contains-any"?new Y8(e,n):new xt(e,r,n)}static P(e,r,n){return r==="in"?new W8(e,n):new z8(e,n)}matches(e){const r=e.data.field(this.field);return this.op==="!="?r!==null&&this.v(Ms(r,this.value)):r!==null&&Ti(this.value)===Ti(r)&&this.v(Ms(r,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function V8(t){return t.field.canonicalString()+t.op.toString()+jm(t.value)}class q8 extends xt{constructor(e,r,n){super(e,r,n),this.key=Z.fromName(n.referenceValue)}matches(e){const r=Z.comparator(e.key,this.key);return this.v(r)}}class W8 extends xt{constructor(e,r){super(e,"in",r),this.keys=pR("in",r)}matches(e){return this.keys.some(r=>r.isEqual(e.key))}}class z8 extends xt{constructor(e,r){super(e,"not-in",r),this.keys=pR("not-in",r)}matches(e){return!this.keys.some(r=>r.isEqual(e.key))}}function pR(t,e){var r;return(((r=e.arrayValue)===null||r===void 0?void 0:r.values)||[]).map(n=>Z.fromName(n.referenceValue))}class G8 extends xt{constructor(e,r){super(e,"array-contains",r)}matches(e){const r=e.data.field(this.field);return Bm(r)&&Ca(r.arrayValue,this.value)}}class K8 extends xt{constructor(e,r){super(e,"in",r)}matches(e){const r=e.data.field(this.field);return r!==null&&Ca(this.value.arrayValue,r)}}class H8 extends xt{constructor(e,r){super(e,"not-in",r)}matches(e){if(Ca(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const r=e.data.field(this.field);return r!==null&&!Ca(this.value.arrayValue,r)}}class Y8 extends xt{constructor(e,r){super(e,"array-contains-any",r)}matches(e){const r=e.data.field(this.field);return!(!Bm(r)||!r.arrayValue.values)&&r.arrayValue.values.some(n=>Ca(this.value.arrayValue,n))}}class Ra{constructor(e,r){this.position=e,this.before=r}}function Il(t){return`${t.before?"b":"a"}:${t.position.map(e=>jm(e)).join(",")}`}class Cs{constructor(e,r="asc"){this.field=e,this.dir=r}}function X8(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function TI(t,e,r){let n=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?n=Z.comparator(Z.fromName(o.referenceValue),r.key):n=Ms(o,r.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return t.before?n<=0:n<0}function AI(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let r=0;r<t.position.length;r++)if(!jr(t.position[r],e.position[r]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,r=null,n=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=r,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.S=null,this.D=null,this.startAt,this.endAt}}function vR(t,e,r,n,i,s,o,a){return new cn(t,e,r,n,i,s,o,a)}function yo(t){return new cn(t)}function Cu(t){return!qi(t.limit)&&t.limitType==="F"}function Sl(t){return!qi(t.limit)&&t.limitType==="L"}function Vm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function qm(t){for(const e of t.filters)if(e.V())return e.field;return null}function Wm(t){return t.collectionGroup!==null}function Fs(t){const e=K(t);if(e.S===null){e.S=[];const r=qm(e),n=Vm(e);if(r!==null&&n===null)r.isKeyField()||e.S.push(new Cs(r)),e.S.push(new Cs(vt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.S.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new Cs(vt.keyField(),s))}}}return e.S}function ar(t){const e=K(t);if(!e.D)if(e.limitType==="F")e.D=SI(e.path,e.collectionGroup,Fs(e),e.filters,e.limit,e.startAt,e.endAt);else{const r=[];for(const s of Fs(e)){const o=s.dir==="desc"?"asc":"desc";r.push(new Cs(s.field,o))}const n=e.endAt?new Ra(e.endAt.position,!e.endAt.before):null,i=e.startAt?new Ra(e.startAt.position,!e.startAt.before):null;e.D=SI(e.path,e.collectionGroup,r,e.filters,e.limit,n,i)}return e.D}function gR(t,e,r){return new cn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,r,t.startAt,t.endAt)}function lc(t,e){return xh(ar(t),ar(e))&&t.limitType===e.limitType}function mR(t){return`${uc(ar(t))}|lt:${t.limitType}`}function ov(t){return`Query(target=${B8(ar(t))}; limitType=${t.limitType})`}function hc(t,e){return e.isFoundDocument()&&function(r,n){const i=n.key.path;return r.collectionGroup!==null?n.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,n){for(const i of r.explicitOrderBy)if(!i.field.isKeyField()&&n.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,n){for(const i of r.filters)if(!i.matches(n))return!1;return!0}(t,e)&&function(r,n){return!(r.startAt&&!TI(r.startAt,Fs(r),n)||r.endAt&&TI(r.endAt,Fs(r),n))}(t,e)}function yR(t){return(e,r)=>{let n=!1;for(const i of Fs(t)){const s=Q8(i,e,r);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function Q8(t,e,r){const n=t.field.isKeyField()?Z.comparator(e.key,r.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Ms(a,c):ee()}(t.field,e,r);switch(t.dir){case"asc":return n;case"desc":return-1*n;default:return ee()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wR(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bl(e)?"-0":e}}function bR(t){return{integerValue:""+t}}function _R(t,e){return fR(e)?bR(e):wR(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(){this._=void 0}}function J8(t,e,r){return t instanceof Us?function(n,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:n.seconds,nanos:n.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(r,e):t instanceof Ai?IR(t,e):t instanceof Oi?SR(t,e):function(n,i){const s=ER(n,i),o=OI(s)+OI(n.N);return sv(s)&&sv(n.N)?bR(o):wR(n.k,o)}(t,e)}function Z8(t,e,r){return t instanceof Ai?IR(t,e):t instanceof Oi?SR(t,e):r}function ER(t,e){return t instanceof js?sv(r=e)||function(n){return!!n&&"doubleValue"in n}(r)?e:{integerValue:0}:null;var r}class Us extends Nh{}class Ai extends Nh{constructor(e){super(),this.elements=e}}function IR(t,e){const r=TR(e);for(const n of t.elements)r.some(i=>jr(i,n))||r.push(n);return{arrayValue:{values:r}}}class Oi extends Nh{constructor(e){super(),this.elements=e}}function SR(t,e){let r=TR(e);for(const n of t.elements)r=r.filter(i=>!jr(i,n));return{arrayValue:{values:r}}}class js extends Nh{constructor(e,r){super(),this.k=e,this.N=r}}function OI(t){return He(t.integerValue||t.doubleValue)}function TR(t){return Bm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,r){this.field=e,this.transform=r}}function e5(t,e){return t.field.isEqual(e.field)&&function(r,n){return r instanceof Ai&&n instanceof Ai||r instanceof Oi&&n instanceof Oi?Ps(r.elements,n.elements,jr):r instanceof js&&n instanceof js?jr(r.N,n.N):r instanceof Us&&n instanceof Us}(t.transform,e.transform)}class t5{constructor(e,r){this.version=e,this.transformResults=r}}class Qe{constructor(e,r){this.updateTime=e,this.exists=r}static none(){return new Qe}static exists(e){return new Qe(void 0,e)}static updateTime(e){return new Qe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ru(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ph{}function r5(t,e,r){t instanceof dc?function(n,i,s){const o=n.value.clone(),a=$I(n.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,r):t instanceof Un?function(n,i,s){if(!Ru(n.precondition,i))return void i.convertToUnknownDocument(s.version);const o=$I(n.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(AR(n)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,r):function(n,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,r)}function av(t,e,r){t instanceof dc?function(n,i,s){if(!Ru(n.precondition,i))return;const o=n.value.clone(),a=kI(n.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(RI(i),o).setHasLocalMutations()}(t,e,r):t instanceof Un?function(n,i,s){if(!Ru(n.precondition,i))return;const o=kI(n.fieldTransforms,s,i),a=i.data;a.setAll(AR(n)),a.setAll(o),i.convertToFoundDocument(RI(i),a).setHasLocalMutations()}(t,e,r):function(n,i){Ru(n.precondition,i)&&i.convertToNoDocument(fe.min())}(t,e)}function n5(t,e){let r=null;for(const n of t.fieldTransforms){const i=e.data.field(n.field),s=ER(n.transform,i||null);s!=null&&(r==null&&(r=It.empty()),r.set(n.field,s))}return r||null}function CI(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,n){return r===void 0&&n===void 0||!(!r||!n)&&Ps(r,n,(i,s)=>e5(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function RI(t){return t.isFoundDocument()?t.version:fe.min()}class dc extends Ph{constructor(e,r,n,i=[]){super(),this.key=e,this.value=r,this.precondition=n,this.fieldTransforms=i,this.type=0}}class Un extends Ph{constructor(e,r,n,i,s=[]){super(),this.key=e,this.data=r,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}}function AR(t){const e=new Map;return t.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){const n=t.data.field(r);e.set(r,n)}}),e}function $I(t,e,r){const n=new Map;se(t.length===r.length);for(let i=0;i<r.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);n.set(s.field,Z8(o,a,r[i]))}return n}function kI(t,e,r){const n=new Map;for(const i of t){const s=i.transform,o=r.data.field(i.field);n.set(i.field,J8(s,o,e))}return n}class pc extends Ph{constructor(e,r){super(),this.key=e,this.precondition=r,this.type=2,this.fieldTransforms=[]}}class zm extends Ph{constructor(e,r){super(),this.key=e,this.precondition=r,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i5{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,ye;function OR(t){switch(t){default:return ee();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function CR(t){if(t===void 0)return Ye("GRPC error has no .code"),$.UNKNOWN;switch(t){case Ke.OK:return $.OK;case Ke.CANCELLED:return $.CANCELLED;case Ke.UNKNOWN:return $.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return $.INTERNAL;case Ke.UNAVAILABLE:return $.UNAVAILABLE;case Ke.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Ke.NOT_FOUND:return $.NOT_FOUND;case Ke.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Ke.ABORTED:return $.ABORTED;case Ke.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Ke.DATA_LOSS:return $.DATA_LOSS;default:return ee()}}(ye=Ke||(Ke={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,r){this.comparator=e,this.root=r||pt.EMPTY}insert(e,r){return new tt(this.comparator,this.root.insert(e,r,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pt.BLACK,null,null))}get(e){let r=this.root;for(;!r.isEmpty();){const n=this.comparator(e,r.key);if(n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}indexOf(e){let r=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return r+n.left.size;i<0?n=n.left:(r+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((r,n)=>(e(r,n),!1))}toString(){const e=[];return this.inorderTraversal((r,n)=>(e.push(`${r}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new iu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new iu(this.root,e,this.comparator,!1)}getReverseIterator(){return new iu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new iu(this.root,e,this.comparator,!0)}}class iu{constructor(e,r,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=r?n(e.key,r):1,i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const r={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return r}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pt{constructor(e,r,n,i,s){this.key=e,this.value=r,this.color=n!=null?n:pt.RED,this.left=i!=null?i:pt.EMPTY,this.right=s!=null?s:pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,r,n,i,s){return new pt(e!=null?e:this.key,r!=null?r:this.value,n!=null?n:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,r,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,r,n),null):s===0?i.copy(null,r,null,null,null):i.copy(null,null,null,null,i.right.insert(e,r,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,r){let n,i=this;if(r(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,r),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),r(e,i.key)===0){if(i.right.isEmpty())return pt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,r))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),r=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,r)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(t,e,r,n,i){return this}insert(t,e,r){return new pt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((r,n)=>(e(r),!1))}forEachInRange(e,r){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;r(i.key)}}forEachWhile(e,r){let n;for(n=r!==void 0?this.data.getIteratorFrom(r):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const r=this.data.getIteratorFrom(e);return r.hasNext()?r.getNext().key:null}getIterator(){return new xI(this.data.getIterator())}getIteratorFrom(e){return new xI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let r=this;return r.size<e.size&&(r=e,e=this),e.forEach(n=>{r=r.add(n)}),r}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const r=this.data.getIterator(),n=e.data.getIterator();for(;r.hasNext();){const i=r.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(r=>{e.push(r)}),e}toString(){const e=[];return this.forEach(r=>e.push(r)),"SortedSet("+e.toString()+")"}copy(e){const r=new Fe(this.comparator);return r.data=e,r}}class xI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s5=new tt(Z.comparator);function sr(){return s5}const o5=new tt(Z.comparator);function cv(){return o5}const a5=new tt(Z.comparator);function RR(){return a5}const c5=new Fe(Z.comparator);function Ae(...t){let e=c5;for(const r of t)e=e.add(r);return e}const u5=new Fe(me);function Dh(){return u5}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,r,n,i,s){this.snapshotVersion=e,this.targetChanges=r,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,r){const n=new Map;return n.set(e,gc.createSynthesizedTargetChangeForCurrentChange(e,r)),new vc(fe.min(),n,Dh(),sr(),Ae())}}class gc{constructor(e,r,n,i,s){this.resumeToken=e,this.current=r,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,r){return new gc(et.EMPTY_BYTE_STRING,r,Ae(),Ae(),Ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,r,n,i){this.$=e,this.removedTargetIds=r,this.key=n,this.O=i}}class $R{constructor(e,r){this.targetId=e,this.M=r}}class kR{constructor(e,r,n=et.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=r,this.resumeToken=n,this.cause=i}}class NI{constructor(){this.F=0,this.L=DI(),this.B=et.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return this.F!==0}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=Ae(),r=Ae(),n=Ae();return this.L.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:r=r.add(i);break;case 1:n=n.add(i);break;default:ee()}}),new gc(this.B,this.U,e,r,n)}H(){this.q=!1,this.L=DI()}J(e,r){this.q=!0,this.L=this.L.insert(e,r)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class l5{constructor(e){this.et=e,this.nt=new Map,this.st=sr(),this.it=PI(),this.rt=new Fe(me)}ot(e){for(const r of e.$)e.O&&e.O.isFoundDocument()?this.ct(r,e.O):this.at(r,e.key,e.O);for(const r of e.removedTargetIds)this.at(r,e.key,e.O)}ut(e){this.forEachTarget(e,r=>{const n=this.ht(r);switch(e.state){case 0:this.lt(r)&&n.W(e.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(e.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(r);break;case 3:this.lt(r)&&(n.tt(),n.W(e.resumeToken));break;case 4:this.lt(r)&&(this.ft(r),n.W(e.resumeToken));break;default:ee()}})}forEachTarget(e,r){e.targetIds.length>0?e.targetIds.forEach(r):this.nt.forEach((n,i)=>{this.lt(i)&&r(i)})}dt(e){const r=e.targetId,n=e.M.count,i=this.wt(r);if(i){const s=i.target;if(El(s))if(n===0){const o=new Z(s.path);this.at(r,o,Pe.newNoDocument(o,fe.min()))}else se(n===1);else this._t(r)!==n&&(this.ft(r),this.rt=this.rt.add(r))}}gt(e){const r=new Map;this.nt.forEach((s,o)=>{const a=this.wt(o);if(a){if(s.current&&El(a.target)){const c=new Z(a.target.path);this.st.get(c)!==null||this.yt(o,c)||this.at(o,c,Pe.newNoDocument(c,e))}s.j&&(r.set(o,s.G()),s.H())}});let n=Ae();this.it.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.wt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(n=n.add(s))});const i=new vc(e,r,this.rt,this.st,n);return this.st=sr(),this.it=PI(),this.rt=new Fe(me),i}ct(e,r){if(!this.lt(e))return;const n=this.yt(e,r.key)?2:0;this.ht(e).J(r.key,n),this.st=this.st.insert(r.key,r),this.it=this.it.insert(r.key,this.Tt(r.key).add(e))}at(e,r,n){if(!this.lt(e))return;const i=this.ht(e);this.yt(e,r)?i.J(r,1):i.Y(r),this.it=this.it.insert(r,this.Tt(r).delete(e)),n&&(this.st=this.st.insert(r,n))}removeTarget(e){this.nt.delete(e)}_t(e){const r=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let r=this.nt.get(e);return r||(r=new NI,this.nt.set(e,r)),r}Tt(e){let r=this.it.get(e);return r||(r=new Fe(me),this.it=this.it.insert(e,r)),r}lt(e){const r=this.wt(e)!==null;return r||V("WatchChangeAggregator","Detected inactive target",e),r}wt(e){const r=this.nt.get(e);return r&&r.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new NI),this.et.getRemoteKeysForTarget(e).forEach(r=>{this.at(e,r,null)})}yt(e,r){return this.et.getRemoteKeysForTarget(e).has(r)}}function PI(){return new tt(Z.comparator)}function DI(){return new tt(Z.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h5=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),f5=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class d5{constructor(e,r){this.databaseId=e,this.C=r}}function $a(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xR(t,e){return t.C?e.toBase64():e.toUint8Array()}function p5(t,e){return $a(t,e.toTimestamp())}function at(t){return se(!!t),fe.fromTimestamp(function(e){const r=kn(e);return new ot(r.seconds,r.nanos)}(t))}function Gm(t,e){return function(r){return new Ie(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function NR(t){const e=Ie.fromString(t);return se(BR(e)),e}function ka(t,e){return Gm(t.databaseId,e.path)}function Mr(t,e){const r=NR(e);if(r.get(1)!==t.databaseId.projectId)throw new M($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+t.databaseId.projectId);if(r.get(3)!==t.databaseId.database)throw new M($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+t.databaseId.database);return new Z(DR(r))}function uv(t,e){return Gm(t.databaseId,e)}function PR(t){const e=NR(t);return e.length===4?Ie.emptyPath():DR(e)}function xa(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function DR(t){return se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function LI(t,e,r){return{name:ka(t,e),fields:r.value.mapValue.fields}}function LR(t,e,r){const n=Mr(t,e.name),i=at(e.updateTime),s=new It({mapValue:{fields:e.fields}}),o=Pe.newFoundDocument(n,i,s);return r&&o.setHasCommittedMutations(),r?o.setHasCommittedMutations():o}function v5(t,e){return"found"in e?function(r,n){se(!!n.found),n.found.name,n.found.updateTime;const i=Mr(r,n.found.name),s=at(n.found.updateTime),o=new It({mapValue:{fields:n.found.fields}});return Pe.newFoundDocument(i,s,o)}(t,e):"missing"in e?function(r,n){se(!!n.missing),se(!!n.readTime);const i=Mr(r,n.missing),s=at(n.readTime);return Pe.newNoDocument(i,s)}(t,e):ee()}function g5(t,e){let r;if("targetChange"in e){e.targetChange;const n=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.C?(se(u===void 0||typeof u=="string"),et.fromBase64String(u||"")):(se(u===void 0||u instanceof Uint8Array),et.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?$.UNKNOWN:CR(c.code);return new M(u,c.message||"")}(o);r=new kR(n,i,s,a||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=Mr(t,n.document.name),s=at(n.document.updateTime),o=new It({mapValue:{fields:n.document.fields}}),a=Pe.newFoundDocument(i,s,o),c=n.targetIds||[],u=n.removedTargetIds||[];r=new $u(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=Mr(t,n.document),s=n.readTime?at(n.readTime):fe.min(),o=Pe.newNoDocument(i,s),a=n.removedTargetIds||[];r=new $u([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=Mr(t,n.document),s=n.removedTargetIds||[];r=new $u([],s,i,null)}else{if(!("filter"in e))return ee();{e.filter;const n=e.filter;n.targetId;const i=n.count||0,s=new i5(i),o=n.targetId;r=new $R(o,s)}}return r}function Tl(t,e){let r;if(e instanceof dc)r={update:LI(t,e.key,e.value)};else if(e instanceof pc)r={delete:ka(t,e.key)};else if(e instanceof Un)r={update:LI(t,e.key,e.data),updateMask:I5(e.fieldMask)};else{if(!(e instanceof zm))return ee();r={verify:ka(t,e.key)}}return e.fieldTransforms.length>0&&(r.updateTransforms=e.fieldTransforms.map(n=>function(i,s){const o=s.transform;if(o instanceof Us)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ai)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Oi)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof js)return{fieldPath:s.field.canonicalString(),increment:o.N};throw ee()}(0,n))),e.precondition.isNone||(r.currentDocument=function(n,i){return i.updateTime!==void 0?{updateTime:p5(n,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee()}(t,e.precondition)),r}function MI(t,e){const r=e.currentDocument?function(i){return i.updateTime!==void 0?Qe.updateTime(at(i.updateTime)):i.exists!==void 0?Qe.exists(i.exists):Qe.none()}(e.currentDocument):Qe.none(),n=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)se(o.setToServerValue==="REQUEST_TIME"),a=new Us;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new Ai(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new Oi(u)}else"increment"in o?a=new js(s,o.increment):ee();const c=vt.fromServerFormat(o.fieldPath);return new fc(c,a)}(t,i)):[];if(e.update){e.update.name;const i=Mr(t,e.update.name),s=new It({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Ds(c.map(u=>vt.fromServerFormat(u)))}(e.updateMask);return new Un(i,s,o,r,n)}return new dc(i,s,r,n)}if(e.delete){const i=Mr(t,e.delete);return new pc(i,r)}if(e.verify){const i=Mr(t,e.verify);return new zm(i,r)}return ee()}function m5(t,e){return t&&t.length>0?(se(e!==void 0),t.map(r=>function(n,i){let s=n.updateTime?at(n.updateTime):at(i);return s.isEqual(fe.min())&&(s=at(i)),new t5(s,n.transformResults||[])}(r,e))):[]}function MR(t,e){return{documents:[uv(t,e.path)]}}function FR(t,e){const r={structuredQuery:{}},n=e.path;e.collectionGroup!==null?(r.parent=uv(t,n),r.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r.parent=uv(t,n.popLast()),r.structuredQuery.from=[{collectionId:n.lastSegment()}]);const i=function(a){if(a.length===0)return;const c=a.map(u=>function(l){if(l.op==="=="){if(II(l.value))return{unaryFilter:{field:as(l.field),op:"IS_NAN"}};if(EI(l.value))return{unaryFilter:{field:as(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(II(l.value))return{unaryFilter:{field:as(l.field),op:"IS_NOT_NAN"}};if(EI(l.value))return{unaryFilter:{field:as(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:as(l.field),op:b5(l.op),value:l.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);i&&(r.structuredQuery.where=i);const s=function(a){if(a.length!==0)return a.map(c=>function(u){return{field:as(u.field),direction:w5(u.dir)}}(c))}(e.orderBy);s&&(r.structuredQuery.orderBy=s);const o=function(a,c){return a.C||qi(c)?c:{value:c}}(t,e.limit);return o!==null&&(r.structuredQuery.limit=o),e.startAt&&(r.structuredQuery.startAt=FI(e.startAt)),e.endAt&&(r.structuredQuery.endAt=FI(e.endAt)),r}function UR(t){let e=PR(t.parent);const r=t.structuredQuery,n=r.from?r.from.length:0;let i=null;if(n>0){se(n===1);const l=r.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];r.where&&(s=jR(r.where));let o=[];r.orderBy&&(o=r.orderBy.map(l=>function(h){return new Cs(_s(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;r.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,qi(h)?null:h}(r.limit));let c=null;r.startAt&&(c=UI(r.startAt));let u=null;return r.endAt&&(u=UI(r.endAt)),vR(e,i,o,s,a,"F",c,u)}function y5(t,e){const r=function(n,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ee()}}(0,e.purpose);return r==null?null:{"goog-listen-tags":r}}function jR(t){return t?t.unaryFilter!==void 0?[E5(t)]:t.fieldFilter!==void 0?[_5(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>jR(e)).reduce((e,r)=>e.concat(r)):ee():[]}function FI(t){return{before:t.before,values:t.position}}function UI(t){const e=!!t.before,r=t.values||[];return new Ra(r,e)}function w5(t){return h5[t]}function b5(t){return f5[t]}function as(t){return{fieldPath:t.canonicalString()}}function _s(t){return vt.fromServerFormat(t.fieldPath)}function _5(t){return xt.create(_s(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(t.fieldFilter.op),t.fieldFilter.value)}function E5(t){switch(t.unaryFilter.op){case"IS_NAN":const e=_s(t.unaryFilter.field);return xt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const r=_s(t.unaryFilter.field);return xt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const n=_s(t.unaryFilter.field);return xt.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=_s(t.unaryFilter.field);return xt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}function I5(t){const e=[];return t.fields.forEach(r=>e.push(r.canonicalString())),{fieldPaths:e}}function BR(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t){let e="";for(let r=0;r<t.length;r++)e.length>0&&(e=jI(e)),e=S5(t.get(r),e);return jI(e)}function S5(t,e){let r=e;const n=t.length;for(let i=0;i<n;i++){const s=t.charAt(i);switch(s){case"\0":r+="";break;case"":r+="";break;default:r+=s}}return r}function jI(t){return t+""}function Yr(t){const e=t.length;if(se(e>=2),e===2)return se(t.charAt(0)===""&&t.charAt(1)===""),Ie.emptyPath();const r=e-2,n=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>r)&&ee(),t.charAt(o+1)){case"":const a=t.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),n.push(c);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:ee()}s=o+2}return new Ie(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T5{constructor(e,r){this.seconds=e,this.nanoseconds=r}}class qt{constructor(e,r,n){this.ownerId=e,this.allowTabSynchronization=r,this.leaseTimestampMs=n}}qt.store="owner",qt.key="owner";class In{constructor(e,r,n){this.userId=e,this.lastAcknowledgedBatchId=r,this.lastStreamToken=n}}In.store="mutationQueues",In.keyPath="userId";class Re{constructor(e,r,n,i,s){this.userId=e,this.batchId=r,this.localWriteTimeMs=n,this.baseMutations=i,this.mutations=s}}Re.store="mutations",Re.keyPath="batchId",Re.userMutationsIndex="userMutationsIndex",Re.userMutationsKeyPath=["userId","batchId"];class Et{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,r){return[e,gr(r)]}static key(e,r,n){return[e,gr(r),n]}}Et.store="documentMutations",Et.PLACEHOLDER=new Et;class A5{constructor(e,r){this.path=e,this.readTime=r}}class O5{constructor(e,r){this.path=e,this.version=r}}class Me{constructor(e,r,n,i,s,o){this.unknownDocument=e,this.noDocument=r,this.document=n,this.hasCommittedMutations=i,this.readTime=s,this.parentPath=o}}Me.store="remoteDocuments",Me.readTimeIndex="readTimeIndex",Me.readTimeIndexPath="readTime",Me.collectionReadTimeIndex="collectionReadTimeIndex",Me.collectionReadTimeIndexPath=["parentPath","readTime"];class Dr{constructor(e){this.byteSize=e}}Dr.store="remoteDocumentGlobal",Dr.key="remoteDocumentGlobalKey";class Ut{constructor(e,r,n,i,s,o,a){this.targetId=e,this.canonicalId=r,this.readTime=n,this.resumeToken=i,this.lastListenSequenceNumber=s,this.lastLimboFreeSnapshotVersion=o,this.query=a}}Ut.store="targets",Ut.keyPath="targetId",Ut.queryTargetsIndexName="queryTargetsIndex",Ut.queryTargetsKeyPath=["canonicalId","targetId"];class gt{constructor(e,r,n){this.targetId=e,this.path=r,this.sequenceNumber=n}}gt.store="targetDocuments",gt.keyPath=["targetId","path"],gt.documentTargetsIndex="documentTargetsIndex",gt.documentTargetsKeyPath=["path","targetId"];class zt{constructor(e,r,n,i){this.highestTargetId=e,this.highestListenSequenceNumber=r,this.lastRemoteSnapshotVersion=n,this.targetCount=i}}zt.key="targetGlobalKey",zt.store="targetGlobal";class li{constructor(e,r){this.collectionId=e,this.parent=r}}li.store="collectionParents",li.keyPath=["collectionId","parent"];class Qr{constructor(e,r,n,i){this.clientId=e,this.updateTimeMs=r,this.networkEnabled=n,this.inForeground=i}}Qr.store="clientMetadata",Qr.keyPath="clientId";class Bs{constructor(e,r,n){this.bundleId=e,this.createTime=r,this.version=n}}Bs.store="bundles",Bs.keyPath="bundleId";class Vs{constructor(e,r,n){this.name=e,this.readTime=r,this.bundledQuery=n}}Vs.store="namedQueries",Vs.keyPath="name";const C5=[In.store,Re.store,Et.store,Me.store,Ut.store,qt.store,zt.store,gt.store,Qr.store,Dr.store,li.store,Bs.store,Vs.store],VR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(r=>{this.isDone=!0,this.result=r,this.nextCallback&&this.nextCallback(r)},r=>{this.isDone=!0,this.error=r,this.catchCallback&&this.catchCallback(r)})}catch(e){return this.next(void 0,e)}next(e,r){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(r,this.error):this.wrapSuccess(e,this.result):new L((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(r,s).next(n,i)}})}toPromise(){return new Promise((e,r)=>{this.next(e,r)})}wrapUserFunction(e){try{const r=e();return r instanceof L?r:L.resolve(r)}catch(r){return L.reject(r)}}wrapSuccess(e,r){return e?this.wrapUserFunction(()=>e(r)):L.resolve(r)}wrapFailure(e,r){return e?this.wrapUserFunction(()=>e(r)):L.reject(r)}static resolve(e){return new L((r,n)=>{r(e)})}static reject(e){return new L((r,n)=>{n(e)})}static waitFor(e){return new L((r,n)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&r()},c=>n(c))}),o=!0,s===i&&r()})}static or(e){let r=L.resolve(!1);for(const n of e)r=r.next(i=>i?L.resolve(i):n());return r}static forEach(e,r){const n=[];return e.forEach((i,s)=>{n.push(r.call(this,i,s))}),this.waitFor(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,r){this.action=e,this.transaction=r,this.aborted=!1,this.It=new st,this.transaction.oncomplete=()=>{this.It.resolve()},this.transaction.onabort=()=>{r.error?this.It.reject(new ta(e,r.error)):this.It.resolve()},this.transaction.onerror=n=>{const i=Km(n.target.error);this.It.reject(new ta(e,i))}}static open(e,r,n,i){try{return new Lh(r,e.transaction(i,n))}catch(s){throw new ta(r,s)}}get At(){return this.It.promise}abort(e){e&&this.It.reject(e),this.aborted||(V("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(e){const r=this.transaction.objectStore(e);return new $5(r)}}class dr{constructor(e,r,n){this.name=e,this.version=r,this.Rt=n,dr.bt(ke())===12.2&&Ye("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return V("SimpleDb","Removing database:",e),Gn(window.indexedDB.deleteDatabase(e)).toPromise()}static Pt(){if(!il())return!1;if(dr.vt())return!0;const e=ke(),r=dr.bt(e),n=0<r&&r<10,i=dr.Vt(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static vt(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.St)==="YES"}static Dt(e,r){return e.store(r)}static bt(e){const r=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=r?r[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static Vt(e){const r=e.match(/Android ([\d.]+)/i),n=r?r[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Ct(e){return this.db||(V("SimpleDb","Opening database:",this.name),this.db=await new Promise((r,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;r(o)},i.onblocked=()=>{n(new ta(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?n(new M($.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new M($.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new ta(e,o))},i.onupgradeneeded=s=>{V("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.Rt.Nt(o,i.transaction,s.oldVersion,this.version).next(()=>{V("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.kt&&(this.db.onversionchange=r=>this.kt(r)),this.db}xt(e){this.kt=e,this.db&&(this.db.onversionchange=r=>e(r))}async runTransaction(e,r,n,i){const s=r==="readonly";let o=0;for(;;){++o;try{this.db=await this.Ct(e);const a=Lh.open(this.db,e,s?"readonly":"readwrite",n),c=i(a).catch(u=>(a.abort(u),L.reject(u))).toPromise();return c.catch(()=>{}),await a.At,c}catch(a){const c=a.name!=="FirebaseError"&&o<3;if(V("SimpleDb","Transaction failed with error:",a.message,"Retrying:",c),this.close(),!c)return Promise.reject(a)}}}close(){this.db&&this.db.close(),this.db=void 0}}class R5{constructor(e){this.$t=e,this.Ot=!1,this.Mt=null}get isDone(){return this.Ot}get Ft(){return this.Mt}set cursor(e){this.$t=e}done(){this.Ot=!0}Lt(e){this.Mt=e}delete(){return Gn(this.$t.delete())}}class ta extends M{constructor(e,r){super($.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${r}`),this.name="IndexedDbTransactionError"}}function Wi(t){return t.name==="IndexedDbTransactionError"}class $5{constructor(e){this.store=e}put(e,r){let n;return r!==void 0?(V("SimpleDb","PUT",this.store.name,e,r),n=this.store.put(r,e)):(V("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Gn(n)}add(e){return V("SimpleDb","ADD",this.store.name,e,e),Gn(this.store.add(e))}get(e){return Gn(this.store.get(e)).next(r=>(r===void 0&&(r=null),V("SimpleDb","GET",this.store.name,e,r),r))}delete(e){return V("SimpleDb","DELETE",this.store.name,e),Gn(this.store.delete(e))}count(){return V("SimpleDb","COUNT",this.store.name),Gn(this.store.count())}Bt(e,r){const n=this.cursor(this.options(e,r)),i=[];return this.Ut(n,(s,o)=>{i.push(o)}).next(()=>i)}qt(e,r){V("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,r);n.Kt=!1;const i=this.cursor(n);return this.Ut(i,(s,o,a)=>a.delete())}jt(e,r){let n;r?n=e:(n={},r=e);const i=this.cursor(n);return this.Ut(i,r)}Qt(e){const r=this.cursor({});return new L((n,i)=>{r.onerror=s=>{const o=Km(s.target.error);i(o)},r.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():n()}):n()}})}Ut(e,r){const n=[];return new L((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new R5(a),u=r(a.primaryKey,a.value,c);if(u instanceof L){const l=u.catch(h=>(c.done(),L.reject(h)));n.push(l)}c.isDone?i():c.Ft===null?a.continue():a.continue(c.Ft)}}).next(()=>L.waitFor(n))}options(e,r){let n;return e!==void 0&&(typeof e=="string"?n=e:r=e),{index:n,range:r}}cursor(e){let r="next";if(e.reverse&&(r="prev"),e.index){const n=this.store.index(e.index);return e.Kt?n.openKeyCursor(e.range,r):n.openCursor(e.range,r)}return this.store.openCursor(e.range,r)}}function Gn(t){return new L((e,r)=>{t.onsuccess=n=>{const i=n.target.result;e(i)},t.onerror=n=>{const i=Km(n.target.error);r(i)}})}let BI=!1;function Km(t){const e=dr.bt(ke());if(e>=12.2&&e<13){const r="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(r)>=0){const n=new M("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${r}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return BI||(BI=!0,setTimeout(()=>{throw n},0)),n}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI extends qR{constructor(e,r){super(),this.Wt=e,this.currentSequenceNumber=r}}function Vt(t,e){const r=K(t);return dr.Dt(r.Wt,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,r,n,i){this.batchId=e,this.localWriteTime=r,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,r){const n=r.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&r5(s,e,n[i])}}applyToLocalView(e){for(const r of this.baseMutations)r.key.isEqual(e.key)&&av(r,e,this.localWriteTime);for(const r of this.mutations)r.key.isEqual(e.key)&&av(r,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(r=>{const n=e.get(r.key),i=n;this.applyToLocalView(i),n.isValidDocument()||i.convertToNoDocument(fe.min())})}keys(){return this.mutations.reduce((e,r)=>e.add(r.key),Ae())}isEqual(e){return this.batchId===e.batchId&&Ps(this.mutations,e.mutations,(r,n)=>CI(r,n))&&Ps(this.baseMutations,e.baseMutations,(r,n)=>CI(r,n))}}class Ym{constructor(e,r,n,i){this.batch=e,this.commitVersion=r,this.mutationResults=n,this.docVersions=i}static from(e,r,n){se(e.mutations.length===n.length);let i=RR();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,n[o].version);return new Ym(e,r,n,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,r,n,i,s=fe.min(),o=fe.min(),a=et.EMPTY_BYTE_STRING){this.target=e,this.targetId=r,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Sn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,r){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,r,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.Gt=e}}function lv(t,e){if(e.document)return LR(t.Gt,e.document,!!e.hasCommittedMutations);if(e.noDocument){const r=Z.fromSegments(e.noDocument.path),n=Ws(e.noDocument.readTime),i=Pe.newNoDocument(r,n);return e.hasCommittedMutations?i.setHasCommittedMutations():i}if(e.unknownDocument){const r=Z.fromSegments(e.unknownDocument.path),n=Ws(e.unknownDocument.version);return Pe.newUnknownDocument(r,n)}return ee()}function qI(t,e,r){const n=Xm(r),i=e.key.path.popLast().toArray();if(e.isFoundDocument()){const s=function(a,c){return{name:ka(a,c.key),fields:c.data.value.mapValue.fields,updateTime:$a(a,c.version.toTimestamp())}}(t.Gt,e),o=e.hasCommittedMutations;return new Me(null,null,s,o,n,i)}if(e.isNoDocument()){const s=e.key.path.toArray(),o=qs(e.version),a=e.hasCommittedMutations;return new Me(null,new A5(s,o),null,a,n,i)}if(e.isUnknownDocument()){const s=e.key.path.toArray(),o=qs(e.version);return new Me(new O5(s,o),null,null,!0,n,i)}return ee()}function Xm(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function zR(t){const e=new ot(t[0],t[1]);return fe.fromTimestamp(e)}function qs(t){const e=t.toTimestamp();return new T5(e.seconds,e.nanoseconds)}function Ws(t){const e=new ot(t.seconds,t.nanoseconds);return fe.fromTimestamp(e)}function ds(t,e){const r=(e.baseMutations||[]).map(s=>MI(t.Gt,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const n=e.mutations.map(s=>MI(t.Gt,s)),i=ot.fromMillis(e.localWriteTimeMs);return new Hm(e.batchId,i,r,n)}function Ko(t){const e=Ws(t.readTime),r=t.lastLimboFreeSnapshotVersion!==void 0?Ws(t.lastLimboFreeSnapshotVersion):fe.min();let n;var i;return t.query.documents!==void 0?(se((i=t.query).documents.length===1),n=ar(yo(PR(i.documents[0])))):n=function(s){return ar(UR(s))}(t.query),new Sn(n,t.targetId,0,t.lastListenSequenceNumber,e,r,et.fromBase64String(t.resumeToken))}function GR(t,e){const r=qs(e.snapshotVersion),n=qs(e.lastLimboFreeSnapshotVersion);let i;i=El(e.target)?MR(t.Gt,e.target):FR(t.Gt,e.target);const s=e.resumeToken.toBase64();return new Ut(e.targetId,uc(e.target),r,s,e.sequenceNumber,n,i)}function Qm(t){const e=UR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gR(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k5{getBundleMetadata(e,r){return WI(e).get(r).next(n=>{if(n)return{id:(i=n).bundleId,createTime:Ws(i.createTime),version:i.version};var i})}saveBundleMetadata(e,r){return WI(e).put({bundleId:(n=r).id,createTime:qs(at(n.createTime)),version:n.version});var n}getNamedQuery(e,r){return zI(e).get(r).next(n=>{if(n)return{name:(i=n).name,query:Qm(i.bundledQuery),readTime:Ws(i.readTime)};var i})}saveNamedQuery(e,r){return zI(e).put(function(n){return{name:n.name,readTime:qs(at(n.readTime)),bundledQuery:n.bundledQuery}}(r))}}function WI(t){return Vt(t,Bs.store)}function zI(t){return Vt(t,Vs.store)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x5{constructor(){this.zt=new Jm}addToCollectionParentIndex(e,r){return this.zt.add(r),L.resolve()}getCollectionParents(e,r){return L.resolve(this.zt.getEntries(r))}}class Jm{constructor(){this.index={}}add(e){const r=e.lastSegment(),n=e.popLast(),i=this.index[r]||new Fe(Ie.comparator),s=!i.has(n);return this.index[r]=i.add(n),s}has(e){const r=e.lastSegment(),n=e.popLast(),i=this.index[r];return i&&i.has(n)}getEntries(e){return(this.index[e]||new Fe(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N5{constructor(){this.Ht=new Jm}addToCollectionParentIndex(e,r){if(!this.Ht.has(r)){const n=r.lastSegment(),i=r.popLast();e.addOnCommittedListener(()=>{this.Ht.add(r)});const s={collectionId:n,parent:gr(i)};return GI(e).put(s)}return L.resolve()}getCollectionParents(e,r){const n=[],i=IDBKeyRange.bound([r,""],[uR(r),""],!1,!0);return GI(e).Bt(i).next(s=>{for(const o of s){if(o.collectionId!==r)break;n.push(Yr(o.parent))}return n})}}function GI(t){return Vt(t,li.store)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Mt{constructor(e,r,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=r,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Mt(e,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(t,e,r){const n=t.store(Re.store),i=t.store(Et.store),s=[],o=IDBKeyRange.only(r.batchId);let a=0;const c=n.jt({range:o},(l,h,f)=>(a++,f.delete()));s.push(c.next(()=>{se(a===1)}));const u=[];for(const l of r.mutations){const h=Et.key(e,l.key.path,r.batchId);s.push(i.delete(h)),u.push(l.key)}return L.waitFor(s).next(()=>u)}function Al(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw ee();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt.DEFAULT_COLLECTION_PERCENTILE=10,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Mt.DEFAULT=new Mt(41943040,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Mt.DISABLED=new Mt(-1,0,0);class Zm{constructor(e,r,n,i){this.userId=e,this.k=r,this.Jt=n,this.referenceDelegate=i,this.Yt={}}static Xt(e,r,n,i){se(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Zm(s,r,n,i)}checkEmpty(e){let r=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return vn(e).jt({index:Re.userMutationsIndex,range:n},(i,s,o)=>{r=!1,o.done()}).next(()=>r)}addMutationBatch(e,r,n,i){const s=ps(e),o=vn(e);return o.add({}).next(a=>{se(typeof a=="number");const c=new Hm(a,r,n,i),u=function(f,p,g){const E=g.baseMutations.map(O=>Tl(f.Gt,O)),I=g.mutations.map(O=>Tl(f.Gt,O));return new Re(p,g.batchId,g.localWriteTime.toMillis(),E,I)}(this.k,this.userId,c),l=[];let h=new Fe((f,p)=>me(f.canonicalString(),p.canonicalString()));for(const f of i){const p=Et.key(this.userId,f.key.path,a);h=h.add(f.key.path.popLast()),l.push(o.put(u)),l.push(s.put(p,Et.PLACEHOLDER))}return h.forEach(f=>{l.push(this.Jt.addToCollectionParentIndex(e,f))}),e.addOnCommittedListener(()=>{this.Yt[a]=c.keys()}),L.waitFor(l).next(()=>c)})}lookupMutationBatch(e,r){return vn(e).get(r).next(n=>n?(se(n.userId===this.userId),ds(this.k,n)):null)}Zt(e,r){return this.Yt[r]?L.resolve(this.Yt[r]):this.lookupMutationBatch(e,r).next(n=>{if(n){const i=n.keys();return this.Yt[r]=i,i}return null})}getNextMutationBatchAfterBatchId(e,r){const n=r+1,i=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return vn(e).jt({index:Re.userMutationsIndex,range:i},(o,a,c)=>{a.userId===this.userId&&(se(a.batchId>=n),s=ds(this.k,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const r=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return vn(e).jt({index:Re.userMutationsIndex,range:r,reverse:!0},(i,s,o)=>{n=s.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){const r=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return vn(e).Bt(Re.userMutationsIndex,r).next(n=>n.map(i=>ds(this.k,i)))}getAllMutationBatchesAffectingDocumentKey(e,r){const n=Et.prefixForPath(this.userId,r.path),i=IDBKeyRange.lowerBound(n),s=[];return ps(e).jt({range:i},(o,a,c)=>{const[u,l,h]=o,f=Yr(l);if(u===this.userId&&r.path.isEqual(f))return vn(e).get(h).next(p=>{if(!p)throw ee();se(p.userId===this.userId),s.push(ds(this.k,p))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,r){let n=new Fe(me);const i=[];return r.forEach(s=>{const o=Et.prefixForPath(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=ps(e).jt({range:a},(u,l,h)=>{const[f,p,g]=u,E=Yr(p);f===this.userId&&s.path.isEqual(E)?n=n.add(g):h.done()});i.push(c)}),L.waitFor(i).next(()=>this.te(e,n))}getAllMutationBatchesAffectingQuery(e,r){const n=r.path,i=n.length+1,s=Et.prefixForPath(this.userId,n),o=IDBKeyRange.lowerBound(s);let a=new Fe(me);return ps(e).jt({range:o},(c,u,l)=>{const[h,f,p]=c,g=Yr(f);h===this.userId&&n.isPrefixOf(g)?g.length===i&&(a=a.add(p)):l.done()}).next(()=>this.te(e,a))}te(e,r){const n=[],i=[];return r.forEach(s=>{i.push(vn(e).get(s).next(o=>{if(o===null)throw ee();se(o.userId===this.userId),n.push(ds(this.k,o))}))}),L.waitFor(i).next(()=>n)}removeMutationBatch(e,r){return KR(e.Wt,this.userId,r).next(n=>(e.addOnCommittedListener(()=>{this.ee(r.batchId)}),L.forEach(n,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}ee(e){delete this.Yt[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(r=>{if(!r)return L.resolve();const n=IDBKeyRange.lowerBound(Et.prefixForUser(this.userId)),i=[];return ps(e).jt({range:n},(s,o,a)=>{if(s[0]===this.userId){const c=Yr(s[1]);i.push(c)}else a.done()}).next(()=>{se(i.length===0)})})}containsKey(e,r){return HR(e,this.userId,r)}ne(e){return YR(e).get(this.userId).next(r=>r||new In(this.userId,-1,""))}}function HR(t,e,r){const n=Et.prefixForPath(e,r.path),i=n[1],s=IDBKeyRange.lowerBound(n);let o=!1;return ps(t).jt({range:s,Kt:!0},(a,c,u)=>{const[l,h,f]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function vn(t){return Vt(t,Re.store)}function ps(t){return Vt(t,Et.store)}function YR(t){return Vt(t,In.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new Ci(0)}static re(){return new Ci(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P5{constructor(e,r){this.referenceDelegate=e,this.k=r}allocateTargetId(e){return this.oe(e).next(r=>{const n=new Ci(r.highestTargetId);return r.highestTargetId=n.next(),this.ce(e,r).next(()=>r.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.oe(e).next(r=>fe.fromTimestamp(new ot(r.lastRemoteSnapshotVersion.seconds,r.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.oe(e).next(r=>r.highestListenSequenceNumber)}setTargetsMetadata(e,r,n){return this.oe(e).next(i=>(i.highestListenSequenceNumber=r,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),r>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=r),this.ce(e,i)))}addTargetData(e,r){return this.ae(e,r).next(()=>this.oe(e).next(n=>(n.targetCount+=1,this.ue(r,n),this.ce(e,n))))}updateTargetData(e,r){return this.ae(e,r)}removeTargetData(e,r){return this.removeMatchingKeysForTargetId(e,r.targetId).next(()=>cs(e).delete(r.targetId)).next(()=>this.oe(e)).next(n=>(se(n.targetCount>0),n.targetCount-=1,this.ce(e,n)))}removeTargets(e,r,n){let i=0;const s=[];return cs(e).jt((o,a)=>{const c=Ko(a);c.sequenceNumber<=r&&n.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>L.waitFor(s)).next(()=>i)}forEachTarget(e,r){return cs(e).jt((n,i)=>{const s=Ko(i);r(s)})}oe(e){return HI(e).get(zt.key).next(r=>(se(r!==null),r))}ce(e,r){return HI(e).put(zt.key,r)}ae(e,r){return cs(e).put(GR(this.k,r))}ue(e,r){let n=!1;return e.targetId>r.highestTargetId&&(r.highestTargetId=e.targetId,n=!0),e.sequenceNumber>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.oe(e).next(r=>r.targetCount)}getTargetData(e,r){const n=uc(r),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return cs(e).jt({range:i,index:Ut.queryTargetsIndexName},(o,a,c)=>{const u=Ko(a);xh(r,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,r,n){const i=[],s=wn(e);return r.forEach(o=>{const a=gr(o.path);i.push(s.put(new gt(n,a))),i.push(this.referenceDelegate.addReference(e,n,o))}),L.waitFor(i)}removeMatchingKeys(e,r,n){const i=wn(e);return L.forEach(r,s=>{const o=gr(s.path);return L.waitFor([i.delete([n,o]),this.referenceDelegate.removeReference(e,n,s)])})}removeMatchingKeysForTargetId(e,r){const n=wn(e),i=IDBKeyRange.bound([r],[r+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(e,r){const n=IDBKeyRange.bound([r],[r+1],!1,!0),i=wn(e);let s=Ae();return i.jt({range:n,Kt:!0},(o,a,c)=>{const u=Yr(o[1]),l=new Z(u);s=s.add(l)}).next(()=>s)}containsKey(e,r){const n=gr(r.path),i=IDBKeyRange.bound([n],[uR(n)],!1,!0);let s=0;return wn(e).jt({index:gt.documentTargetsIndex,Kt:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}Et(e,r){return cs(e).get(r).next(n=>n?Ko(n):null)}}function cs(t){return Vt(t,Ut.store)}function HI(t){return Vt(t,zt.store)}function wn(t){return Vt(t,gt.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==VR)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI([t,e],[r,n]){const i=me(t,r);return i===0?me(e,n):i}class D5{constructor(e){this.he=e,this.buffer=new Fe(YI),this.le=0}fe(){return++this.le}de(e){const r=[e,this.fe()];if(this.buffer.size<this.he)this.buffer=this.buffer.add(r);else{const n=this.buffer.last();YI(r,n)<0&&(this.buffer=this.buffer.delete(n).add(r))}}get maxValue(){return this.buffer.last()[0]}}class L5{constructor(e,r){this.garbageCollector=e,this.asyncQueue=r,this.we=!1,this._e=null}start(e){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.me(e)}stop(){this._e&&(this._e.cancel(),this._e=null)}get started(){return this._e!==null}me(e){const r=this.we?3e5:6e4;V("LruGarbageCollector",`Garbage collection scheduled in ${r}ms`),this._e=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",r,async()=>{this._e=null,this.we=!0;try{await e.collectGarbage(this.garbageCollector)}catch(n){Wi(n)?V("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await zi(n)}await this.me(e)})}}class M5{constructor(e,r){this.ge=e,this.params=r}calculateTargetCount(e,r){return this.ge.ye(e).next(n=>Math.floor(r/100*n))}nthSequenceNumber(e,r){if(r===0)return L.resolve(Kt.I);const n=new D5(r);return this.ge.forEachTarget(e,i=>n.de(i.sequenceNumber)).next(()=>this.ge.pe(e,i=>n.de(i))).next(()=>n.maxValue)}removeTargets(e,r,n){return this.ge.removeTargets(e,r,n)}removeOrphanedDocuments(e,r){return this.ge.removeOrphanedDocuments(e,r)}collect(e,r){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(KI)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),KI):this.Te(e,r))}getCacheSize(e){return this.ge.getCacheSize(e)}Te(e,r){let n,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(n=h,a=Date.now(),this.removeTargets(e,n,r))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(h=>(u=Date.now(),nv()<=_e.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F5{constructor(e,r){this.db=e,this.garbageCollector=function(n,i){return new M5(n,i)}(this,r)}ye(e){const r=this.Ee(e);return this.db.getTargetCache().getTargetCount(e).next(n=>r.next(i=>n+i))}Ee(e){let r=0;return this.pe(e,n=>{r++}).next(()=>r)}forEachTarget(e,r){return this.db.getTargetCache().forEachTarget(e,r)}pe(e,r){return this.Ie(e,(n,i)=>r(i))}addReference(e,r,n){return su(e,n)}removeReference(e,r,n){return su(e,n)}removeTargets(e,r,n){return this.db.getTargetCache().removeTargets(e,r,n)}markPotentiallyOrphaned(e,r){return su(e,r)}Ae(e,r){return function(n,i){let s=!1;return YR(n).Qt(o=>HR(n,o,i).next(a=>(a&&(s=!0),L.resolve(!a)))).next(()=>s)}(e,r)}removeOrphanedDocuments(e,r){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Ie(e,(o,a)=>{if(a<=r){const c=this.Ae(e,o).next(u=>{if(!u)return s++,n.getEntry(e,o).next(()=>(n.removeEntry(o),wn(e).delete([0,gr(o.path)])))});i.push(c)}}).next(()=>L.waitFor(i)).next(()=>n.apply(e)).next(()=>s)}removeTarget(e,r){const n=r.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,r){return su(e,r)}Ie(e,r){const n=wn(e);let i,s=Kt.I;return n.jt({index:gt.documentTargetsIndex},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==Kt.I&&r(new Z(Yr(i)),s),s=u,i=c):s=Kt.I}).next(()=>{s!==Kt.I&&r(new Z(Yr(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function su(t,e){return wn(t).put(function(r,n){return new gt(0,gr(r.path),n)}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,r){this.mapKeyFn=e,this.equalsFn=r,this.inner={}}get(e){const r=this.mapKeyFn(e),n=this.inner[r];if(n!==void 0){for(const[i,s]of n)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,r){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,r]);i.push([e,r])}else this.inner[n]=[[e,r]]}delete(e){const r=this.mapKeyFn(e),n=this.inner[r];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[r]:n.splice(i,1),!0;return!1}forEach(e){Vi(this.inner,(r,n)=>{for(const[i,s]of n)e(i,s)})}isEmpty(){return lR(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(){this.changes=new wo(e=>e.toString(),(e,r)=>e.isEqual(r)),this.changesApplied=!1}getReadTime(e){const r=this.changes.get(e);return r?r.readTime:fe.min()}addEntry(e,r){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:r})}removeEntry(e,r=null){this.assertNotApplied(),this.changes.set(e,{document:Pe.newInvalidDocument(e),readTime:r})}getEntry(e,r){this.assertNotApplied();const n=this.changes.get(r);return n!==void 0?L.resolve(n.document):this.getFromCache(e,r)}getEntries(e,r){return this.getAllFromCache(e,r)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U5{constructor(e,r){this.k=e,this.Jt=r}addEntry(e,r,n){return mn(e).put(ou(r),n)}removeEntry(e,r){const n=mn(e),i=ou(r);return n.delete(i)}updateMetadata(e,r){return this.getMetadata(e).next(n=>(n.byteSize+=r,this.Re(e,n)))}getEntry(e,r){return mn(e).get(ou(r)).next(n=>this.be(r,n))}Pe(e,r){return mn(e).get(ou(r)).next(n=>({document:this.be(r,n),size:Al(n)}))}getEntries(e,r){let n=sr();return this.ve(e,r,(i,s)=>{const o=this.be(i,s);n=n.insert(i,o)}).next(()=>n)}Ve(e,r){let n=sr(),i=new tt(Z.comparator);return this.ve(e,r,(s,o)=>{const a=this.be(s,o);n=n.insert(s,a),i=i.insert(s,Al(o))}).next(()=>({documents:n,Se:i}))}ve(e,r,n){if(r.isEmpty())return L.resolve();const i=IDBKeyRange.bound(r.first().path.toArray(),r.last().path.toArray()),s=r.getIterator();let o=s.getNext();return mn(e).jt({range:i},(a,c,u)=>{const l=Z.fromSegments(a);for(;o&&Z.comparator(o,l)<0;)n(o,null),o=s.getNext();o&&o.isEqual(l)&&(n(o,c),o=s.hasNext()?s.getNext():null),o?u.Lt(o.path.toArray()):u.done()}).next(()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,r,n){let i=sr();const s=r.path.length+1,o={};if(n.isEqual(fe.min())){const a=r.path.toArray();o.range=IDBKeyRange.lowerBound(a)}else{const a=r.path.toArray(),c=Xm(n);o.range=IDBKeyRange.lowerBound([a,c],!0),o.index=Me.collectionReadTimeIndex}return mn(e).jt(o,(a,c,u)=>{if(a.length!==s)return;const l=lv(this.k,c);r.path.isPrefixOf(l.key.path)?hc(r,l)&&(i=i.insert(l.key,l)):u.done()}).next(()=>i)}newChangeBuffer(e){return new j5(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(r=>r.byteSize)}getMetadata(e){return XI(e).get(Dr.key).next(r=>(se(!!r),r))}Re(e,r){return XI(e).put(Dr.key,r)}be(e,r){if(r){const n=lv(this.k,r);if(!(n.isNoDocument()&&n.version.isEqual(fe.min())))return n}return Pe.newInvalidDocument(e)}}class j5 extends XR{constructor(e,r){super(),this.De=e,this.trackRemovals=r,this.Ce=new wo(n=>n.toString(),(n,i)=>n.isEqual(i))}applyChanges(e){const r=[];let n=0,i=new Fe((s,o)=>me(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Ce.get(s);if(o.document.isValidDocument()){const c=qI(this.De.k,o.document,this.getReadTime(s));i=i.add(s.path.popLast()),n+=Al(c)-a,r.push(this.De.addEntry(e,s,c))}else if(n-=a,this.trackRemovals){const c=qI(this.De.k,Pe.newNoDocument(s,fe.min()),this.getReadTime(s));r.push(this.De.addEntry(e,s,c))}else r.push(this.De.removeEntry(e,s))}),i.forEach(s=>{r.push(this.De.Jt.addToCollectionParentIndex(e,s))}),r.push(this.De.updateMetadata(e,n)),L.waitFor(r)}getFromCache(e,r){return this.De.Pe(e,r).next(n=>(this.Ce.set(r,n.size),n.document))}getAllFromCache(e,r){return this.De.Ve(e,r).next(({documents:n,Se:i})=>(i.forEach((s,o)=>{this.Ce.set(s,o)}),n))}}function XI(t){return Vt(t,Dr.store)}function mn(t){return Vt(t,Me.store)}function ou(t){return t.path.toArray()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B5{constructor(e){this.k=e}Nt(e,r,n,i){se(n<i&&n>=0&&i<=11);const s=new Lh("createOrUpgrade",r);n<1&&i>=1&&(function(a){a.createObjectStore(qt.store)}(e),function(a){a.createObjectStore(In.store,{keyPath:In.keyPath}),a.createObjectStore(Re.store,{keyPath:Re.keyPath,autoIncrement:!0}).createIndex(Re.userMutationsIndex,Re.userMutationsKeyPath,{unique:!0}),a.createObjectStore(Et.store)}(e),QI(e),function(a){a.createObjectStore(Me.store)}(e));let o=L.resolve();return n<3&&i>=3&&(n!==0&&(function(a){a.deleteObjectStore(gt.store),a.deleteObjectStore(Ut.store),a.deleteObjectStore(zt.store)}(e),QI(e)),o=o.next(()=>function(a){const c=a.store(zt.store),u=new zt(0,0,fe.min().toTimestamp(),0);return c.put(zt.key,u)}(s))),n<4&&i>=4&&(n!==0&&(o=o.next(()=>function(a,c){return c.store(Re.store).Bt().next(u=>{a.deleteObjectStore(Re.store),a.createObjectStore(Re.store,{keyPath:Re.keyPath,autoIncrement:!0}).createIndex(Re.userMutationsIndex,Re.userMutationsKeyPath,{unique:!0});const l=c.store(Re.store),h=u.map(f=>l.put(f));return L.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore(Qr.store,{keyPath:Qr.keyPath})})(e)})),n<5&&i>=5&&(o=o.next(()=>this.Ne(s))),n<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore(Dr.store)}(e),this.ke(s)))),n<7&&i>=7&&(o=o.next(()=>this.xe(s))),n<8&&i>=8&&(o=o.next(()=>this.$e(e,s))),n<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e),function(a){const c=a.objectStore(Me.store);c.createIndex(Me.readTimeIndex,Me.readTimeIndexPath,{unique:!1}),c.createIndex(Me.collectionReadTimeIndex,Me.collectionReadTimeIndexPath,{unique:!1})}(r)})),n<10&&i>=10&&(o=o.next(()=>this.Oe(s))),n<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore(Bs.store,{keyPath:Bs.keyPath})})(e),function(a){a.createObjectStore(Vs.store,{keyPath:Vs.keyPath})}(e)})),o}ke(e){let r=0;return e.store(Me.store).jt((n,i)=>{r+=Al(i)}).next(()=>{const n=new Dr(r);return e.store(Dr.store).put(Dr.key,n)})}Ne(e){const r=e.store(In.store),n=e.store(Re.store);return r.Bt().next(i=>L.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return n.Bt(Re.userMutationsIndex,o).next(a=>L.forEach(a,c=>{se(c.userId===s.userId);const u=ds(this.k,c);return KR(e,s.userId,u).next(()=>{})}))}))}xe(e){const r=e.store(gt.store),n=e.store(Me.store);return e.store(zt.store).get(zt.key).next(i=>{const s=[];return n.jt((o,a)=>{const c=new Ie(o),u=function(l){return[0,gr(l)]}(c);s.push(r.get(u).next(l=>l?L.resolve():(h=>r.put(new gt(0,gr(h),i.highestListenSequenceNumber)))(c)))}).next(()=>L.waitFor(s))})}$e(e,r){e.createObjectStore(li.store,{keyPath:li.keyPath});const n=r.store(li.store),i=new Jm,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return n.put({collectionId:a,parent:gr(c)})}};return r.store(Me.store).jt({Kt:!0},(o,a)=>{const c=new Ie(o);return s(c.popLast())}).next(()=>r.store(Et.store).jt({Kt:!0},([o,a,c],u)=>{const l=Yr(a);return s(l.popLast())}))}Oe(e){const r=e.store(Ut.store);return r.jt((n,i)=>{const s=Ko(i),o=GR(this.k,s);return r.put(o)})}}function QI(t){t.createObjectStore(gt.store,{keyPath:gt.keyPath}).createIndex(gt.documentTargetsIndex,gt.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(Ut.store,{keyPath:Ut.keyPath}).createIndex(Ut.queryTargetsIndexName,Ut.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(zt.store)}const Ud="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ey{constructor(e,r,n,i,s,o,a,c,u,l){if(this.allowTabSynchronization=e,this.persistenceKey=r,this.clientId=n,this.Me=s,this.window=o,this.document=a,this.Fe=u,this.Le=l,this.Be=null,this.Ue=!1,this.isPrimary=!1,this.networkEnabled=!0,this.qe=null,this.inForeground=!1,this.Ke=null,this.je=null,this.Qe=Number.NEGATIVE_INFINITY,this.We=h=>Promise.resolve(),!ey.Pt())throw new M($.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new F5(this,i),this.Ge=r+"main",this.k=new WR(c),this.ze=new dr(this.Ge,11,new B5(this.k)),this.He=new P5(this.referenceDelegate,this.k),this.Jt=new N5,this.Je=function(h,f){return new U5(h,f)}(this.k,this.Jt),this.Ye=new k5,this.window&&this.window.localStorage?this.Xe=this.window.localStorage:(this.Xe=null,l===!1&&Ye("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ze().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new M($.FAILED_PRECONDITION,Ud);return this.tn(),this.en(),this.nn(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.He.getHighestSequenceNumber(e))}).then(e=>{this.Be=new Kt(e,this.Fe)}).then(()=>{this.Ue=!0}).catch(e=>(this.ze&&this.ze.close(),Promise.reject(e)))}sn(e){return this.We=async r=>{if(this.started)return e(r)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ze.xt(async r=>{r.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Me.enqueueAndForget(async()=>{this.started&&await this.Ze()}))}Ze(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>au(e).put(new Qr(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.rn(e).next(r=>{r||(this.isPrimary=!1,this.Me.enqueueRetryable(()=>this.We(!1)))})}).next(()=>this.on(e)).next(r=>this.isPrimary&&!r?this.cn(e).next(()=>!1):!!r&&this.an(e).next(()=>!0))).catch(e=>{if(Wi(e))return V("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return V("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Me.enqueueRetryable(()=>this.We(e)),this.isPrimary=e})}rn(e){return Bo(e).get(qt.key).next(r=>L.resolve(this.un(r)))}hn(e){return au(e).delete(this.clientId)}async ln(){if(this.isPrimary&&!this.fn(this.Qe,18e5)){this.Qe=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",r=>{const n=Vt(r,Qr.store);return n.Bt().next(i=>{const s=this.dn(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return L.forEach(o,a=>n.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Xe)for(const r of e)this.Xe.removeItem(this.wn(r.clientId))}}nn(){this.je=this.Me.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ze().then(()=>this.ln()).then(()=>this.nn()))}un(e){return!!e&&e.ownerId===this.clientId}on(e){return this.Le?L.resolve(!0):Bo(e).get(qt.key).next(r=>{if(r!==null&&this.fn(r.leaseTimestampMs,5e3)&&!this._n(r.ownerId)){if(this.un(r)&&this.networkEnabled)return!0;if(!this.un(r)){if(!r.allowTabSynchronization)throw new M($.FAILED_PRECONDITION,Ud);return!1}}return!(!this.networkEnabled||!this.inForeground)||au(e).Bt().next(n=>this.dn(n,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(r=>(this.isPrimary!==r&&V("IndexedDbPersistence",`Client ${r?"is":"is not"} eligible for a primary lease.`),r))}async shutdown(){this.Ue=!1,this.mn(),this.je&&(this.je.cancel(),this.je=null),this.gn(),this.yn(),await this.ze.runTransaction("shutdown","readwrite",[qt.store,Qr.store],e=>{const r=new VI(e,Kt.I);return this.cn(r).next(()=>this.hn(r))}),this.ze.close(),this.pn()}dn(e,r){return e.filter(n=>this.fn(n.updateTimeMs,r)&&!this._n(n.clientId))}Tn(){return this.runTransaction("getActiveClients","readonly",e=>au(e).Bt().next(r=>this.dn(r,18e5).map(n=>n.clientId)))}get started(){return this.Ue}getMutationQueue(e){return Zm.Xt(e,this.k,this.Jt,this.referenceDelegate)}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getIndexManager(){return this.Jt}getBundleCache(){return this.Ye}runTransaction(e,r,n){V("IndexedDbPersistence","Starting transaction:",e);const i=r==="readonly"?"readonly":"readwrite";let s;return this.ze.runTransaction(e,i,C5,o=>(s=new VI(o,this.Be?this.Be.next():Kt.I),r==="readwrite-primary"?this.rn(s).next(a=>!!a||this.on(s)).next(a=>{if(!a)throw Ye(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Me.enqueueRetryable(()=>this.We(!1)),new M($.FAILED_PRECONDITION,VR);return n(s)}).next(a=>this.an(s).next(()=>a)):this.En(s).next(()=>n(s)))).then(o=>(s.raiseOnCommittedEvent(),o))}En(e){return Bo(e).get(qt.key).next(r=>{if(r!==null&&this.fn(r.leaseTimestampMs,5e3)&&!this._n(r.ownerId)&&!this.un(r)&&!(this.Le||this.allowTabSynchronization&&r.allowTabSynchronization))throw new M($.FAILED_PRECONDITION,Ud)})}an(e){const r=new qt(this.clientId,this.allowTabSynchronization,Date.now());return Bo(e).put(qt.key,r)}static Pt(){return dr.Pt()}cn(e){const r=Bo(e);return r.get(qt.key).next(n=>this.un(n)?(V("IndexedDbPersistence","Releasing primary lease."),r.delete(qt.key)):L.resolve())}fn(e,r){const n=Date.now();return!(e<n-r)&&(!(e>n)||(Ye(`Detected an update time that is in the future: ${e} > ${n}`),!1))}tn(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ke=()=>{this.Me.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ze()))},this.document.addEventListener("visibilitychange",this.Ke),this.inForeground=this.document.visibilityState==="visible")}gn(){this.Ke&&(this.document.removeEventListener("visibilitychange",this.Ke),this.Ke=null)}en(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.qe=()=>{this.mn(),SY()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Me.enterRestrictedMode(!0),this.Me.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.qe))}yn(){this.qe&&(this.window.removeEventListener("pagehide",this.qe),this.qe=null)}_n(e){var r;try{const n=((r=this.Xe)===null||r===void 0?void 0:r.getItem(this.wn(e)))!==null;return V("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return Ye("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}mn(){if(this.Xe)try{this.Xe.setItem(this.wn(this.clientId),String(Date.now()))}catch(e){Ye("Failed to set zombie client id.",e)}}pn(){if(this.Xe)try{this.Xe.removeItem(this.wn(this.clientId))}catch{}}wn(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Bo(t){return Vt(t,qt.store)}function au(t){return Vt(t,Qr.store)}function ty(t,e){let r=t.projectId;return t.isDefaultDatabase||(r+="."+t.database),"firestore/"+e+"/"+r+"/"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V5{constructor(e,r){this.progress=e,this.In=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e,r,n){this.Je=e,this.An=r,this.Jt=n}Rn(e,r){return this.An.getAllMutationBatchesAffectingDocumentKey(e,r).next(n=>this.bn(e,r,n))}bn(e,r,n){return this.Je.getEntry(e,r).next(i=>{for(const s of n)s.applyToLocalView(i);return i})}Pn(e,r){e.forEach((n,i)=>{for(const s of r)s.applyToLocalView(i)})}vn(e,r){return this.Je.getEntries(e,r).next(n=>this.Vn(e,n).next(()=>n))}Vn(e,r){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,r).next(n=>this.Pn(r,n))}getDocumentsMatchingQuery(e,r,n){return function(i){return Z.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(r)?this.Sn(e,r.path):Wm(r)?this.Dn(e,r,n):this.Cn(e,r,n)}Sn(e,r){return this.Rn(e,new Z(r)).next(n=>{let i=cv();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}Dn(e,r,n){const i=r.collectionGroup;let s=cv();return this.Jt.getCollectionParents(e,i).next(o=>L.forEach(o,a=>{const c=function(u,l){return new cn(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(r,a.child(i));return this.Cn(e,c,n).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}Cn(e,r,n){let i,s;return this.Je.getDocumentsMatchingQuery(e,r,n).next(o=>(i=o,this.An.getAllMutationBatchesAffectingQuery(e,r))).next(o=>(s=o,this.Nn(e,s,i).next(a=>{i=a;for(const c of s)for(const u of c.mutations){const l=u.key;let h=i.get(l);h==null&&(h=Pe.newInvalidDocument(l),i=i.insert(l,h)),av(u,h,c.localWriteTime),h.isFoundDocument()||(i=i.remove(l))}}))).next(()=>(i.forEach((o,a)=>{hc(r,a)||(i=i.remove(o))}),i))}Nn(e,r,n){let i=Ae();for(const o of r)for(const a of o.mutations)a instanceof Un&&n.get(a.key)===null&&(i=i.add(a.key));let s=n;return this.Je.getEntries(e,i).next(o=>(o.forEach((a,c)=>{c.isFoundDocument()&&(s=s.insert(a,c))}),s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,r,n,i){this.targetId=e,this.fromCache=r,this.kn=n,this.xn=i}static $n(e,r){let n=Ae(),i=Ae();for(const s of r.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ry(e,r.fromCache,n,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{On(e){this.Mn=e}getDocumentsMatchingQuery(e,r,n,i){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(r)||n.isEqual(fe.min())?this.Fn(e,r):this.Mn.vn(e,i).next(s=>{const o=this.Ln(r,s);return(Cu(r)||Sl(r))&&this.Bn(r.limitType,o,i,n)?this.Fn(e,r):(nv()<=_e.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),ov(r)),this.Mn.getDocumentsMatchingQuery(e,r,n).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}Ln(e,r){let n=new Fe(yR(e));return r.forEach((i,s)=>{hc(e,s)&&(n=n.add(s))}),n}Bn(e,r,n,i){if(n.size!==r.size)return!0;const s=e==="F"?r.last():r.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Fn(e,r){return nv()<=_e.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",ov(r)),this.Mn.getDocumentsMatchingQuery(e,r,fe.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q5{constructor(e,r,n,i){this.persistence=e,this.Un=r,this.k=i,this.qn=new tt(me),this.Kn=new wo(s=>uc(s),xh),this.jn=fe.min(),this.An=e.getMutationQueue(n),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new QR(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",r=>e.collect(r,this.qn))}}function ZR(t,e,r,n){return new q5(t,e,r,n)}async function e$(t,e){const r=K(t);let n=r.An,i=r.Wn;const s=await r.persistence.runTransaction("Handle user change","readonly",o=>{let a;return r.An.getAllMutationBatches(o).next(c=>(a=c,n=r.persistence.getMutationQueue(e),i=new QR(r.Qn,n,r.persistence.getIndexManager()),n.getAllMutationBatches(o))).next(c=>{const u=[],l=[];let h=Ae();for(const f of a){u.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}for(const f of c){l.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}return i.vn(o,h).next(f=>({Gn:f,removedBatchIds:u,addedBatchIds:l}))})});return r.An=n,r.Wn=i,r.Un.On(r.Wn),s}function W5(t,e){const r=K(t);return r.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=e.batch.keys(),s=r.Qn.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=L.resolve();return h.forEach(p=>{f=f.next(()=>u.getEntry(a,p)).next(g=>{const E=c.docVersions.get(p);se(E!==null),g.version.compareTo(E)<0&&(l.applyToRemoteDocument(g,c),g.isValidDocument()&&u.addEntry(g,c.commitVersion))})}),f.next(()=>o.An.removeMutationBatch(a,l))}(r,n,e,s).next(()=>s.apply(n)).next(()=>r.An.performConsistencyCheck(n)).next(()=>r.Wn.vn(n,i))})}function t$(t){const e=K(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",r=>e.He.getLastRemoteSnapshotVersion(r))}function z5(t,e){const r=K(t),n=e.snapshotVersion;let i=r.qn;return r.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=r.Qn.newChangeBuffer({trackRemovals:!0});i=r.qn;const a=[];e.targetChanges.forEach((u,l)=>{const h=i.get(l);if(!h)return;a.push(r.He.removeMatchingKeys(s,u.removedDocuments,l).next(()=>r.He.addMatchingKeys(s,u.addedDocuments,l)));let f=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(l)?f=f.withResumeToken(et.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,n)),i=i.insert(l,f),function(p,g,E){return p.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(h,f,u)&&a.push(r.He.updateTargetData(s,f))});let c=sr();if(e.documentUpdates.forEach((u,l)=>{e.resolvedLimboDocuments.has(u)&&a.push(r.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(r$(s,o,e.documentUpdates,n,void 0).next(u=>{c=u})),!n.isEqual(fe.min())){const u=r.He.getLastRemoteSnapshotVersion(s).next(l=>r.He.setTargetsMetadata(s,s.currentSequenceNumber,n));a.push(u)}return L.waitFor(a).next(()=>o.apply(s)).next(()=>r.Wn.Vn(s,c)).next(()=>c)}).then(s=>(r.qn=i,s))}function r$(t,e,r,n,i){let s=Ae();return r.forEach(o=>s=s.add(o)),e.getEntries(t,s).next(o=>{let a=sr();return r.forEach((c,u)=>{const l=o.get(c),h=(i==null?void 0:i.get(c))||n;u.isNoDocument()&&u.version.isEqual(fe.min())?(e.removeEntry(c,h),a=a.insert(c,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u,h),a=a.insert(c,u)):V("LocalStore","Ignoring outdated watch update for ",c,". Current version:",l.version," Watch version:",u.version)}),a})}function G5(t,e){const r=K(t);return r.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),r.An.getNextMutationBatchAfterBatchId(n,e)))}function zs(t,e){const r=K(t);return r.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return r.He.getTargetData(n,e).next(s=>s?(i=s,L.resolve(i)):r.He.allocateTargetId(n).next(o=>(i=new Sn(e,o,0,n.currentSequenceNumber),r.He.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=r.qn.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(r.qn=r.qn.insert(n.targetId,n),r.Kn.set(e,n.targetId)),n})}async function Gs(t,e,r){const n=K(t),i=n.qn.get(e),s=r?"readwrite":"readwrite-primary";try{r||await n.persistence.runTransaction("Release target",s,o=>n.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Wi(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}n.qn=n.qn.remove(e),n.Kn.delete(i.target)}function Ol(t,e,r){const n=K(t);let i=fe.min(),s=Ae();return n.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=K(a),h=l.Kn.get(u);return h!==void 0?L.resolve(l.qn.get(h)):l.He.getTargetData(c,u)}(n,o,ar(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,n.He.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>n.Un.getDocumentsMatchingQuery(o,e,r?i:fe.min(),r?s:Ae())).next(a=>({documents:a,zn:s})))}function n$(t,e){const r=K(t),n=K(r.He),i=r.qn.get(e);return i?Promise.resolve(i.target):r.persistence.runTransaction("Get target data","readonly",s=>n.Et(s,e).next(o=>o?o.target:null))}function i$(t){const e=K(t);return e.persistence.runTransaction("Get new document changes","readonly",r=>function(n,i,s){const o=K(n);let a=sr(),c=Xm(s);const u=mn(i),l=IDBKeyRange.lowerBound(c,!0);return u.jt({index:Me.readTimeIndex,range:l},(h,f)=>{const p=lv(o.k,f);a=a.insert(p.key,p),c=f.readTime}).next(()=>({In:a,readTime:zR(c)}))}(e.Qn,r,e.jn)).then(({In:r,readTime:n})=>(e.jn=n,r))}async function K5(t){const e=K(t);return e.persistence.runTransaction("Synchronize last document change read time","readonly",r=>function(n){const i=mn(n);let s=fe.min();return i.jt({index:Me.readTimeIndex,reverse:!0},(o,a,c)=>{a.readTime&&(s=zR(a.readTime)),c.done()}).next(()=>s)}(r)).then(r=>{e.jn=r})}async function H5(t,e,r,n){const i=K(t);let s=Ae(),o=sr(),a=RR();for(const l of r){const h=e.Hn(l.metadata.name);l.document&&(s=s.add(h)),o=o.insert(h,e.Jn(l)),a=a.insert(h,e.Yn(l.metadata.readTime))}const c=i.Qn.newChangeBuffer({trackRemovals:!0}),u=await zs(i,function(l){return ar(yo(Ie.fromString(`__bundle__/docs/${l}`)))}(n));return i.persistence.runTransaction("Apply bundle documents","readwrite",l=>r$(l,c,o,fe.min(),a).next(h=>(c.apply(l),h)).next(h=>i.He.removeMatchingKeysForTargetId(l,u.targetId).next(()=>i.He.addMatchingKeys(l,s,u.targetId)).next(()=>i.Wn.Vn(l,h)).next(()=>h)))}async function Y5(t,e,r=Ae()){const n=await zs(t,ar(Qm(e.bundledQuery))),i=K(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=at(e.readTime);if(n.snapshotVersion.compareTo(o)>=0)return i.Ye.saveNamedQuery(s,e);const a=n.withResumeToken(et.EMPTY_BYTE_STRING,o);return i.qn=i.qn.insert(a.targetId,a),i.He.updateTargetData(s,a).next(()=>i.He.removeMatchingKeysForTargetId(s,n.targetId)).next(()=>i.He.addMatchingKeys(s,r,n.targetId)).next(()=>i.Ye.saveNamedQuery(s,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X5{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,r){return L.resolve(this.Xn.get(r))}saveBundleMetadata(e,r){var n;return this.Xn.set(r.id,{id:(n=r).id,version:n.version,createTime:at(n.createTime)}),L.resolve()}getNamedQuery(e,r){return L.resolve(this.Zn.get(r))}saveNamedQuery(e,r){return this.Zn.set(r.name,function(n){return{name:n.name,query:Qm(n.bundledQuery),readTime:at(n.readTime)}}(r)),L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(){this.ts=new Fe(it.es),this.ns=new Fe(it.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,r){const n=new it(e,r);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(e,r){e.forEach(n=>this.addReference(n,r))}removeReference(e,r){this.os(new it(e,r))}cs(e,r){e.forEach(n=>this.removeReference(n,r))}us(e){const r=new Z(new Ie([])),n=new it(r,e),i=new it(r,e+1),s=[];return this.ns.forEachInRange([n,i],o=>{this.os(o),s.push(o.key)}),s}hs(){this.ts.forEach(e=>this.os(e))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const r=new Z(new Ie([])),n=new it(r,e),i=new it(r,e+1);let s=Ae();return this.ns.forEachInRange([n,i],o=>{s=s.add(o.key)}),s}containsKey(e){const r=new it(e,0),n=this.ts.firstAfterOrEqual(r);return n!==null&&e.isEqual(n.key)}}class it{constructor(e,r){this.key=e,this.fs=r}static es(e,r){return Z.comparator(e.key,r.key)||me(e.fs,r.fs)}static ss(e,r){return me(e.fs,r.fs)||Z.comparator(e.key,r.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q5{constructor(e,r){this.Jt=e,this.referenceDelegate=r,this.An=[],this.ds=1,this.ws=new Fe(it.es)}checkEmpty(e){return L.resolve(this.An.length===0)}addMutationBatch(e,r,n,i){const s=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const o=new Hm(s,r,n,i);this.An.push(o);for(const a of i)this.ws=this.ws.add(new it(a.key,s)),this.Jt.addToCollectionParentIndex(e,a.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,r){return L.resolve(this._s(r))}getNextMutationBatchAfterBatchId(e,r){const n=r+1,i=this.gs(n),s=i<0?0:i;return L.resolve(this.An.length>s?this.An[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.An.length===0?-1:this.ds-1)}getAllMutationBatches(e){return L.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,r){const n=new it(r,0),i=new it(r,Number.POSITIVE_INFINITY),s=[];return this.ws.forEachInRange([n,i],o=>{const a=this._s(o.fs);s.push(a)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,r){let n=new Fe(me);return r.forEach(i=>{const s=new it(i,0),o=new it(i,Number.POSITIVE_INFINITY);this.ws.forEachInRange([s,o],a=>{n=n.add(a.fs)})}),L.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(e,r){const n=r.path,i=n.length+1;let s=n;Z.isDocumentKey(s)||(s=s.child(""));const o=new it(new Z(s),0);let a=new Fe(me);return this.ws.forEachWhile(c=>{const u=c.key.path;return!!n.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.fs)),!0)},o),L.resolve(this.ys(a))}ys(e){const r=[];return e.forEach(n=>{const i=this._s(n);i!==null&&r.push(i)}),r}removeMutationBatch(e,r){se(this.ps(r.batchId,"removed")===0),this.An.shift();let n=this.ws;return L.forEach(r.mutations,i=>{const s=new it(i.key,r.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ws=n})}ee(e){}containsKey(e,r){const n=new it(r,0),i=this.ws.firstAfterOrEqual(n);return L.resolve(r.isEqual(i&&i.key))}performConsistencyCheck(e){return this.An.length,L.resolve()}ps(e,r){return this.gs(e)}gs(e){return this.An.length===0?0:e-this.An[0].batchId}_s(e){const r=this.gs(e);return r<0||r>=this.An.length?null:this.An[r]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J5{constructor(e,r){this.Jt=e,this.Ts=r,this.docs=new tt(Z.comparator),this.size=0}addEntry(e,r,n){const i=r.key,s=this.docs.get(i),o=s?s.size:0,a=this.Ts(r);return this.docs=this.docs.insert(i,{document:r.mutableCopy(),size:a,readTime:n}),this.size+=a-o,this.Jt.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const r=this.docs.get(e);r&&(this.docs=this.docs.remove(e),this.size-=r.size)}getEntry(e,r){const n=this.docs.get(r);return L.resolve(n?n.document.mutableCopy():Pe.newInvalidDocument(r))}getEntries(e,r){let n=sr();return r.forEach(i=>{const s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():Pe.newInvalidDocument(i))}),L.resolve(n)}getDocumentsMatchingQuery(e,r,n){let i=sr();const s=new Z(r.path.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:c,readTime:u}}=o.getNext();if(!r.path.isPrefixOf(a.path))break;u.compareTo(n)<=0||hc(r,c)&&(i=i.insert(c.key,c.mutableCopy()))}return L.resolve(i)}Es(e,r){return L.forEach(this.docs,n=>r(n))}newChangeBuffer(e){return new Z5(this)}getSize(e){return L.resolve(this.size)}}class Z5 extends XR{constructor(e){super(),this.De=e}applyChanges(e){const r=[];return this.changes.forEach((n,i)=>{i.document.isValidDocument()?r.push(this.De.addEntry(e,i.document,this.getReadTime(n))):this.De.removeEntry(n)}),L.waitFor(r)}getFromCache(e,r){return this.De.getEntry(e,r)}getAllFromCache(e,r){return this.De.getEntries(e,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e9{constructor(e){this.persistence=e,this.Is=new wo(r=>uc(r),xh),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.As=0,this.Rs=new ny,this.targetCount=0,this.bs=Ci.ie()}forEachTarget(e,r){return this.Is.forEach((n,i)=>r(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,r,n){return n&&(this.lastRemoteSnapshotVersion=n),r>this.As&&(this.As=r),L.resolve()}ae(e){this.Is.set(e.target,e);const r=e.targetId;r>this.highestTargetId&&(this.bs=new Ci(r),this.highestTargetId=r),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,r){return this.ae(r),this.targetCount+=1,L.resolve()}updateTargetData(e,r){return this.ae(r),L.resolve()}removeTargetData(e,r){return this.Is.delete(r.target),this.Rs.us(r.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,r,n){let i=0;const s=[];return this.Is.forEach((o,a)=>{a.sequenceNumber<=r&&n.get(a.targetId)===null&&(this.Is.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,r){const n=this.Is.get(r)||null;return L.resolve(n)}addMatchingKeys(e,r,n){return this.Rs.rs(r,n),L.resolve()}removeMatchingKeys(e,r,n){this.Rs.cs(r,n);const i=this.persistence.referenceDelegate,s=[];return i&&r.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,r){return this.Rs.us(r),L.resolve()}getMatchingKeysForTargetId(e,r){const n=this.Rs.ls(r);return L.resolve(n)}containsKey(e,r){return L.resolve(this.Rs.containsKey(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t9{constructor(e,r){this.Ps={},this.Be=new Kt(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new e9(this),this.Jt=new x5,this.Je=function(n,i){return new J5(n,i)}(this.Jt,n=>this.referenceDelegate.vs(n)),this.k=new WR(r),this.Ye=new X5(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let r=this.Ps[e.toKey()];return r||(r=new Q5(this.Jt,this.referenceDelegate),this.Ps[e.toKey()]=r),r}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,r,n){V("MemoryPersistence","Starting transaction:",e);const i=new r9(this.Be.next());return this.referenceDelegate.Vs(),n(i).next(s=>this.referenceDelegate.Ss(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ds(e,r){return L.or(Object.values(this.Ps).map(n=>()=>n.containsKey(e,r)))}}class r9 extends qR{constructor(e){super(),this.currentSequenceNumber=e}}class iy{constructor(e){this.persistence=e,this.Cs=new ny,this.Ns=null}static ks(e){return new iy(e)}get xs(){if(this.Ns)return this.Ns;throw ee()}addReference(e,r,n){return this.Cs.addReference(n,r),this.xs.delete(n.toString()),L.resolve()}removeReference(e,r,n){return this.Cs.removeReference(n,r),this.xs.add(n.toString()),L.resolve()}markPotentiallyOrphaned(e,r){return this.xs.add(r.toString()),L.resolve()}removeTarget(e,r){this.Cs.us(r.targetId).forEach(i=>this.xs.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,r.targetId).next(i=>{i.forEach(s=>this.xs.add(s.toString()))}).next(()=>n.removeTargetData(e,r))}Vs(){this.Ns=new Set}Ss(e){const r=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.xs,n=>{const i=Z.fromPath(n);return this.$s(e,i).next(s=>{s||r.removeEntry(i)})}).next(()=>(this.Ns=null,r.apply(e)))}updateLimboDocument(e,r){return this.$s(e,r).next(n=>{n?this.xs.delete(r.toString()):this.xs.add(r.toString())})}vs(e){return 0}$s(e,r){return L.or([()=>L.resolve(this.Cs.containsKey(r)),()=>this.persistence.getTargetCache().containsKey(e,r),()=>this.persistence.Ds(e,r)])}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(t,e){return`firestore_clients_${t}_${e}`}function ZI(t,e,r){let n=`firestore_mutations_${t}_${r}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}function jd(t,e){return`firestore_targets_${t}_${e}`}class Cl{constructor(e,r,n,i){this.user=e,this.batchId=r,this.state=n,this.error=i}static Os(e,r,n){const i=JSON.parse(n);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new M(i.error.code,i.error.message))),o?new Cl(e,r,i.state,s):(Ye("SharedClientState",`Failed to parse mutation state for ID '${r}': ${n}`),null)}Ms(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ra{constructor(e,r,n){this.targetId=e,this.state=r,this.error=n}static Os(e,r){const n=JSON.parse(r);let i,s=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return s&&n.error&&(s=typeof n.error.message=="string"&&typeof n.error.code=="string",s&&(i=new M(n.error.code,n.error.message))),s?new ra(e,n.state,i):(Ye("SharedClientState",`Failed to parse target state for ID '${e}': ${r}`),null)}Ms(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Rl{constructor(e,r){this.clientId=e,this.activeTargetIds=r}static Os(e,r){const n=JSON.parse(r);let i=typeof n=="object"&&n.activeTargetIds instanceof Array,s=Dh();for(let o=0;i&&o<n.activeTargetIds.length;++o)i=fR(n.activeTargetIds[o]),s=s.add(n.activeTargetIds[o]);return i?new Rl(e,s):(Ye("SharedClientState",`Failed to parse client data for instance '${e}': ${r}`),null)}}class sy{constructor(e,r){this.clientId=e,this.onlineState=r}static Os(e){const r=JSON.parse(e);return typeof r=="object"&&["Unknown","Online","Offline"].indexOf(r.onlineState)!==-1&&typeof r.clientId=="string"?new sy(r.clientId,r.onlineState):(Ye("SharedClientState",`Failed to parse online state: ${e}`),null)}}class hv{constructor(){this.activeTargetIds=Dh()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ms(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Bd{constructor(e,r,n,i,s){this.window=e,this.Me=r,this.persistenceKey=n,this.Bs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Us=this.qs.bind(this),this.Ks=new tt(me),this.started=!1,this.js=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Qs=JI(this.persistenceKey,this.Bs),this.Ws=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.Ks=this.Ks.insert(this.Bs,new hv),this.Gs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.zs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Hs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Js=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Ys=function(a){return`firestore_bundle_loaded_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.Us)}static Pt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Tn();for(const n of e){if(n===this.Bs)continue;const i=this.getItem(JI(this.persistenceKey,n));if(i){const s=Rl.Os(n,i);s&&(this.Ks=this.Ks.insert(s.clientId,s))}}this.Xs();const r=this.storage.getItem(this.Js);if(r){const n=this.Zs(r);n&&this.ti(n)}for(const n of this.js)this.qs(n);this.js=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ws,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ei(this.Ks)}isActiveQueryTarget(e){let r=!1;return this.Ks.forEach((n,i)=>{i.activeTargetIds.has(e)&&(r=!0)}),r}addPendingMutation(e){this.ni(e,"pending")}updateMutationState(e,r,n){this.ni(e,r,n),this.si(e)}addLocalQueryTarget(e){let r="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(jd(this.persistenceKey,e));if(n){const i=ra.Os(e,n);i&&(r=i.state)}}return this.ii.Fs(e),this.Xs(),r}removeLocalQueryTarget(e){this.ii.Ls(e),this.Xs()}isLocalQueryTarget(e){return this.ii.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(jd(this.persistenceKey,e))}updateQueryState(e,r,n){this.ri(e,r,n)}handleUserChange(e,r,n){r.forEach(i=>{this.si(i)}),this.currentUser=e,n.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.oi(e)}notifyBundleLoaded(){this.ci()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Us),this.removeItem(this.Qs),this.started=!1)}getItem(e){const r=this.storage.getItem(e);return V("SharedClientState","READ",e,r),r}setItem(e,r){V("SharedClientState","SET",e,r),this.storage.setItem(e,r)}removeItem(e){V("SharedClientState","REMOVE",e),this.storage.removeItem(e)}qs(e){const r=e;if(r.storageArea===this.storage){if(V("SharedClientState","EVENT",r.key,r.newValue),r.key===this.Qs)return void Ye("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Me.enqueueRetryable(async()=>{if(this.started){if(r.key!==null){if(this.Gs.test(r.key)){if(r.newValue==null){const n=this.ai(r.key);return this.ui(n,null)}{const n=this.hi(r.key,r.newValue);if(n)return this.ui(n.clientId,n)}}else if(this.zs.test(r.key)){if(r.newValue!==null){const n=this.li(r.key,r.newValue);if(n)return this.fi(n)}}else if(this.Hs.test(r.key)){if(r.newValue!==null){const n=this.di(r.key,r.newValue);if(n)return this.wi(n)}}else if(r.key===this.Js){if(r.newValue!==null){const n=this.Zs(r.newValue);if(n)return this.ti(n)}}else if(r.key===this.Ws){const n=function(i){let s=Kt.I;if(i!=null)try{const o=JSON.parse(i);se(typeof o=="number"),s=o}catch(o){Ye("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(r.newValue);n!==Kt.I&&this.sequenceNumberHandler(n)}else if(r.key===this.Ys)return this.syncEngine._i()}}else this.js.push(r)})}}get ii(){return this.Ks.get(this.Bs)}Xs(){this.setItem(this.Qs,this.ii.Ms())}ni(e,r,n){const i=new Cl(this.currentUser,e,r,n),s=ZI(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Ms())}si(e){const r=ZI(this.persistenceKey,this.currentUser,e);this.removeItem(r)}oi(e){const r={clientId:this.Bs,onlineState:e};this.storage.setItem(this.Js,JSON.stringify(r))}ri(e,r,n){const i=jd(this.persistenceKey,e),s=new ra(e,r,n);this.setItem(i,s.Ms())}ci(){this.setItem(this.Ys,"value-not-used")}ai(e){const r=this.Gs.exec(e);return r?r[1]:null}hi(e,r){const n=this.ai(e);return Rl.Os(n,r)}li(e,r){const n=this.zs.exec(e),i=Number(n[1]),s=n[2]!==void 0?n[2]:null;return Cl.Os(new dt(s),i,r)}di(e,r){const n=this.Hs.exec(e),i=Number(n[1]);return ra.Os(i,r)}Zs(e){return sy.Os(e)}async fi(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.mi(e.batchId,e.state,e.error);V("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}wi(e){return this.syncEngine.gi(e.targetId,e.state,e.error)}ui(e,r){const n=r?this.Ks.insert(e,r):this.Ks.remove(e),i=this.ei(this.Ks),s=this.ei(n),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.yi(o,a).then(()=>{this.Ks=n})}ti(e){this.Ks.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ei(e){let r=Dh();return e.forEach((n,i)=>{r=r.unionWith(i.activeTargetIds)}),r}}class s${constructor(){this.pi=new hv,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,r,n){}addLocalQueryTarget(e){return this.pi.Fs(e),this.Ti[e]||"not-current"}updateQueryState(e,r,n){this.Ti[e]=r}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new hv,Promise.resolve()}handleUserChange(e,r,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n9{Ei(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(e){this.Pi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Pi)e(0)}bi(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Pi)e(1)}static Pt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i9={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s9{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Oi(e){this.ki(e)}Mi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o9 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http";this.Fi=r+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,r,n,i,s){const o=this.Ui(e,r);V("RestConnection","Sending: ",o,n);const a={};return this.qi(a,i,s),this.Ki(e,o,a,n).then(c=>(V("RestConnection","Received: ",c),c),c=>{throw Ta("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",n),c})}ji(e,r,n,i,s){return this.Bi(e,r,n,i,s)}qi(e,r,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+mo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,s)=>e[s]=i),n&&n.headers.forEach((i,s)=>e[s]=i)}Ui(e,r){const n=i9[e];return`${this.Fi}/v1/${r}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,r,n,i){return new Promise((s,o)=>{const a=new A8;a.listenOnce(I8.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Fd.NO_ERROR:const u=a.getResponseJson();V("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Fd.TIMEOUT:V("Connection",'RPC "'+e+'" timed out'),o(new M($.DEADLINE_EXCEEDED,"Request time out"));break;case Fd.HTTP_ERROR:const l=a.getStatus();if(V("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(p){const g=p.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(g)>=0?g:$.UNKNOWN}(h.status);o(new M(f,h.message))}else o(new M($.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new M($.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{V("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(r,"POST",c,n,15)})}Qi(e,r,n){const i=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=_8(),o=E8(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new T8({})),this.qi(a.initMessageHeaders,r,n),ZA()||oh()||EY()||Hg()||IY()||Kg()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=i.join("");V("Connection","Creating WebChannel: "+c,a);const u=s.createWebChannel(c,a);let l=!1,h=!1;const f=new s9({Vi:g=>{h?V("Connection","Not sending because WebChannel is closed:",g):(l||(V("Connection","Opening WebChannel transport."),u.open(),l=!0),V("Connection","WebChannel sending:",g),u.send(g))},Si:()=>u.close()}),p=(g,E,I)=>{g.listen(E,O=>{try{I(O)}catch(P){setTimeout(()=>{throw P},0)}})};return p(u,nu.EventType.OPEN,()=>{h||V("Connection","WebChannel transport opened.")}),p(u,nu.EventType.CLOSE,()=>{h||(h=!0,V("Connection","WebChannel transport closed"),f.Oi())}),p(u,nu.EventType.ERROR,g=>{h||(h=!0,Ta("Connection","WebChannel transport errored:",g),f.Oi(new M($.UNAVAILABLE,"The operation could not be completed")))}),p(u,nu.EventType.MESSAGE,g=>{var E;if(!h){const I=g.data[0];se(!!I);const O=I,P=O.error||((E=O[0])===null||E===void 0?void 0:E.error);if(P){V("Connection","WebChannel received error:",P);const q=P.status;let G=function(x){const w=Ke[x];if(w!==void 0)return CR(w)}(q),k=P.message;G===void 0&&(G=$.INTERNAL,k="Unknown error status: "+q+" with message "+P.message),h=!0,f.Oi(new M(G,k)),u.close()}else V("Connection","WebChannel received:",I),f.Mi(I)}}),p(o,S8.STAT_EVENT,g=>{g.stat===yI.PROXY?V("Connection","Detected buffering proxy"):g.stat===yI.NOPROXY&&V("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.$i()},0),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o$(){return typeof window!="undefined"?window:null}function ku(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(t){return new d5(t,!0)}class oy{constructor(e,r,n=1e3,i=1.5,s=6e4){this.Me=e,this.timerId=r,this.Wi=n,this.Gi=i,this.zi=s,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const r=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),i=Math.max(0,r-n);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Hi} ms, delay with jitter: ${r} ms, last attempt: ${n} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,i,()=>(this.Yi=Date.now(),e())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){this.Ji!==null&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){this.Ji!==null&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a${constructor(e,r,n,i,s,o,a,c){this.Me=e,this.nr=n,this.sr=i,this.ir=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new oy(e,r)}hr(){return this.state===1||this.state===5||this.lr()}lr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&this.cr===null&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(e,r){this.yr(),this.pr(),this.ur.cancel(),this.rr++,e!==4?this.ur.reset():r&&r.code===$.RESOURCE_EXHAUSTED?(Ye(r.toString()),Ye("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):r&&r.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(r)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),r=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.rr===r&&this.Ir(n,i)},n=>{e(()=>{const i=new M($.UNKNOWN,"Fetching auth token failed: "+n.message);return this.Ar(i)})})}Ir(e,r){const n=this.Er(this.rr);this.stream=this.Rr(e,r),this.stream.Di(()=>{n(()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(i=>{n(()=>this.Ar(i))}),this.stream.onMessage(i=>{n(()=>this.onMessage(i))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return r=>{this.Me.enqueueAndForget(()=>this.rr===e?r():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class a9 extends a${constructor(e,r,n,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",r,n,i,o),this.k=s}Rr(e,r){return this.ir.Qi("Listen",e,r)}onMessage(e){this.ur.reset();const r=g5(this.k,e),n=function(i){if(!("targetChange"in i))return fe.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?fe.min():s.readTime?at(s.readTime):fe.min()}(e);return this.listener.br(r,n)}Pr(e){const r={};r.database=xa(this.k),r.addTarget=function(i,s){let o;const a=s.target;return o=El(a)?{documents:MR(i,a)}:{query:FR(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=xR(i,s.resumeToken):s.snapshotVersion.compareTo(fe.min())>0&&(o.readTime=$a(i,s.snapshotVersion.toTimestamp())),o}(this.k,e);const n=y5(this.k,e);n&&(r.labels=n),this.gr(r)}vr(e){const r={};r.database=xa(this.k),r.removeTarget=e,this.gr(r)}}class c9 extends a${constructor(e,r,n,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",r,n,i,o),this.k=s,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,r){return this.ir.Qi("Write",e,r)}onMessage(e){if(se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const r=m5(e.writeResults,e.commitTime),n=at(e.commitTime);return this.listener.Cr(n,r)}return se(!e.writeResults||e.writeResults.length===0),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=xa(this.k),this.gr(e)}Dr(e){const r={streamToken:this.lastStreamToken,writes:e.map(n=>Tl(this.k,n))};this.gr(r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u9 extends class{}{constructor(e,r,n,i){super(),this.authCredentials=e,this.appCheckCredentials=r,this.ir=n,this.k=i,this.$r=!1}Or(){if(this.$r)throw new M($.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,r,n){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.ir.Bi(e,r,n,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M($.UNKNOWN,i.toString())})}ji(e,r,n){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.ir.ji(e,r,n,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M($.UNKNOWN,i.toString())})}terminate(){this.$r=!0}}class l9{constructor(e,r){this.asyncQueue=e,this.onlineStateHandler=r,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){this.Mr===0&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(e){this.state==="Online"?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Mr=0,e==="Online"&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const r=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(Ye(r),this.Lr=!1):V("OnlineStateTracker",r)}jr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h9{constructor(e,r,n,i,s){this.localStore=e,this.datastore=r,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=s,this.Hr.Ei(o=>{n.enqueueAndForget(async()=>{jn(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=K(a);c.Gr.add(4),await bo(c),c.Jr.set("Unknown"),c.Gr.delete(4),await yc(c)}(this))})}),this.Jr=new l9(n,i)}}async function yc(t){if(jn(t))for(const e of t.zr)await e(!0)}async function bo(t){for(const e of t.zr)await e(!1)}function Mh(t,e){const r=K(t);r.Wr.has(e.targetId)||(r.Wr.set(e.targetId,e),uy(r)?cy(r):Eo(r).lr()&&ay(r,e))}function Na(t,e){const r=K(t),n=Eo(r);r.Wr.delete(e),n.lr()&&c$(r,e),r.Wr.size===0&&(n.lr()?n._r():jn(r)&&r.Jr.set("Unknown"))}function ay(t,e){t.Yr.X(e.targetId),Eo(t).Pr(e)}function c$(t,e){t.Yr.X(e),Eo(t).vr(e)}function cy(t){t.Yr=new l5({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),Eo(t).start(),t.Jr.Br()}function uy(t){return jn(t)&&!Eo(t).hr()&&t.Wr.size>0}function jn(t){return K(t).Gr.size===0}function u$(t){t.Yr=void 0}async function f9(t){t.Wr.forEach((e,r)=>{ay(t,e)})}async function d9(t,e){u$(t),uy(t)?(t.Jr.Kr(e),cy(t)):t.Jr.set("Unknown")}async function p9(t,e,r){if(t.Jr.set("Online"),e instanceof kR&&e.state===2&&e.cause)try{await async function(n,i){const s=i.cause;for(const o of i.targetIds)n.Wr.has(o)&&(await n.remoteSyncer.rejectListen(o,s),n.Wr.delete(o),n.Yr.removeTarget(o))}(t,e)}catch(n){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await $l(t,n)}else if(e instanceof $u?t.Yr.ot(e):e instanceof $R?t.Yr.dt(e):t.Yr.ut(e),!r.isEqual(fe.min()))try{const n=await t$(t.localStore);r.compareTo(n)>=0&&await function(i,s){const o=i.Yr.gt(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Wr.get(c);u&&i.Wr.set(c,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=i.Wr.get(a);if(!c)return;i.Wr.set(a,c.withResumeToken(et.EMPTY_BYTE_STRING,c.snapshotVersion)),c$(i,a);const u=new Sn(c.target,a,1,c.sequenceNumber);ay(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,r)}catch(n){V("RemoteStore","Failed to raise snapshot:",n),await $l(t,n)}}async function $l(t,e,r){if(!Wi(e))throw e;t.Gr.add(1),await bo(t),t.Jr.set("Offline"),r||(r=()=>t$(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await r(),t.Gr.delete(1),await yc(t)})}function l$(t,e){return e().catch(r=>$l(t,r,e))}async function _o(t){const e=K(t),r=xn(e);let n=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;v9(e);)try{const i=await G5(e.localStore,n);if(i===null){e.Qr.length===0&&r._r();break}n=i.batchId,g9(e,i)}catch(i){await $l(e,i)}h$(e)&&f$(e)}function v9(t){return jn(t)&&t.Qr.length<10}function g9(t,e){t.Qr.push(e);const r=xn(t);r.lr()&&r.Sr&&r.Dr(e.mutations)}function h$(t){return jn(t)&&!xn(t).hr()&&t.Qr.length>0}function f$(t){xn(t).start()}async function m9(t){xn(t).kr()}async function y9(t){const e=xn(t);for(const r of t.Qr)e.Dr(r.mutations)}async function w9(t,e,r){const n=t.Qr.shift(),i=Ym.from(n,e,r);await l$(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await _o(t)}async function b9(t,e){e&&xn(t).Sr&&await async function(r,n){if(i=n.code,OR(i)&&i!==$.ABORTED){const s=r.Qr.shift();xn(r).wr(),await l$(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,n)),await _o(r)}var i}(t,e),h$(t)&&f$(t)}async function tS(t,e){const r=K(t);r.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const n=jn(r);r.Gr.add(3),await bo(r),n&&r.Jr.set("Unknown"),await r.remoteSyncer.handleCredentialChange(e),r.Gr.delete(3),await yc(r)}async function fv(t,e){const r=K(t);e?(r.Gr.delete(2),await yc(r)):e||(r.Gr.add(2),await bo(r),r.Jr.set("Unknown"))}function Eo(t){return t.Xr||(t.Xr=function(e,r,n){const i=K(e);return i.Or(),new a9(r,i.ir,i.authCredentials,i.appCheckCredentials,i.k,n)}(t.datastore,t.asyncQueue,{Di:f9.bind(null,t),Ni:d9.bind(null,t),br:p9.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),uy(t)?cy(t):t.Jr.set("Unknown")):(await t.Xr.stop(),u$(t))})),t.Xr}function xn(t){return t.Zr||(t.Zr=function(e,r,n){const i=K(e);return i.Or(),new c9(r,i.ir,i.authCredentials,i.appCheckCredentials,i.k,n)}(t.datastore,t.asyncQueue,{Di:m9.bind(null,t),Ni:b9.bind(null,t),Nr:y9.bind(null,t),Cr:w9.bind(null,t)}),t.zr.push(async e=>{e?(t.Zr.wr(),await _o(t)):(await t.Zr.stop(),t.Qr.length>0&&(V("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))})),t.Zr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,r,n,i,s){this.asyncQueue=e,this.timerId=r,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new st,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,r,n,i,s){const o=Date.now()+n,a=new ly(e,r,o,i,s);return a.start(n),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Io(t,e){if(Ye("AsyncQueue",`${e}: ${t}`),Wi(t))return new M($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.comparator=e?(r,n)=>e(r,n)||Z.comparator(r.key,n.key):(r,n)=>Z.comparator(r.key,n.key),this.keyedMap=cv(),this.sortedSet=new tt(this.comparator)}static emptySet(e){return new Rs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const r=this.keyedMap.get(e);return r?this.sortedSet.indexOf(r):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((r,n)=>(e(r),!1))}add(e){const r=this.delete(e.key);return r.copy(r.keyedMap.insert(e.key,e),r.sortedSet.insert(e,null))}delete(e){const r=this.get(e);return r?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(r)):this}isEqual(e){if(!(e instanceof Rs)||this.size!==e.size)return!1;const r=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;r.hasNext();){const i=r.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(r=>{e.push(r.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,r){const n=new Rs;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=r,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(){this.eo=new tt(Z.comparator)}track(e){const r=e.doc.key,n=this.eo.get(r);n?e.type!==0&&n.type===3?this.eo=this.eo.insert(r,e):e.type===3&&n.type!==1?this.eo=this.eo.insert(r,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.eo=this.eo.insert(r,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.eo=this.eo.insert(r,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.eo=this.eo.remove(r):e.type===1&&n.type===2?this.eo=this.eo.insert(r,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.eo=this.eo.insert(r,{type:2,doc:e.doc}):ee():this.eo=this.eo.insert(r,e)}no(){const e=[];return this.eo.inorderTraversal((r,n)=>{e.push(n)}),e}}class Ks{constructor(e,r,n,i,s,o,a,c){this.query=e,this.docs=r,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,r,n,i){const s=[];return r.forEach(o=>{s.push({type:0,doc:o})}),new Ks(e,r,Rs.emptySet(r),s,n,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&lc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const r=this.docChanges,n=e.docChanges;if(r.length!==n.length)return!1;for(let i=0;i<r.length;i++)if(r[i].type!==n[i].type||!r[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _9{constructor(){this.so=void 0,this.listeners=[]}}class E9{constructor(){this.queries=new wo(e=>mR(e),lc),this.onlineState="Unknown",this.io=new Set}}async function hy(t,e){const r=K(t),n=e.query;let i=!1,s=r.queries.get(n);if(s||(i=!0,s=new _9),i)try{s.so=await r.onListen(n)}catch(o){const a=Io(o,`Initialization of query '${ov(e.query)}' failed`);return void e.onError(a)}r.queries.set(n,s),s.listeners.push(e),e.ro(r.onlineState),s.so&&e.oo(s.so)&&dy(r)}async function fy(t,e){const r=K(t),n=e.query;let i=!1;const s=r.queries.get(n);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return r.queries.delete(n),r.onUnlisten(n)}function I9(t,e){const r=K(t);let n=!1;for(const i of e){const s=i.query,o=r.queries.get(s);if(o){for(const a of o.listeners)a.oo(i)&&(n=!0);o.so=i}}n&&dy(r)}function S9(t,e,r){const n=K(t),i=n.queries.get(e);if(i)for(const s of i.listeners)s.onError(r);n.queries.delete(e)}function dy(t){t.io.forEach(e=>{e.next()})}class py{constructor(e,r,n){this.query=e,this.co=r,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new Ks(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let r=!1;return this.ao?this.ho(e)&&(this.co.next(e),r=!0):this.lo(e,this.onlineState)&&(this.fo(e),r=!0),this.uo=e,r}onError(e){this.co.error(e)}ro(e){this.onlineState=e;let r=!1;return this.uo&&!this.ao&&this.lo(this.uo,e)&&(this.fo(this.uo),r=!0),r}lo(e,r){if(!e.fromCache)return!0;const n=r!=="Offline";return(!this.options.wo||!n)&&(!e.docs.isEmpty()||r==="Offline")}ho(e){if(e.docChanges.length>0)return!0;const r=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!r)&&this.options.includeMetadataChanges===!0}fo(e){e=Ks.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.ao=!0,this.co.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T9{constructor(e,r){this.payload=e,this.byteLength=r}_o(){return"metadata"in this.payload}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.k=e}Hn(e){return Mr(this.k,e)}Jn(e){return e.metadata.exists?LR(this.k,e.document,!1):Pe.newNoDocument(this.Hn(e.metadata.name),this.Yn(e.metadata.readTime))}Yn(e){return at(e)}}class A9{constructor(e,r,n){this.mo=e,this.localStore=r,this.k=n,this.queries=[],this.documents=[],this.progress=d$(e)}yo(e){this.progress.bytesLoaded+=e.byteLength;let r=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++r):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++r),r!==this.progress.documentsLoaded?(this.progress.documentsLoaded=r,Object.assign({},this.progress)):null}po(e){const r=new Map,n=new nS(this.k);for(const i of e)if(i.metadata.queries){const s=n.Hn(i.metadata.name);for(const o of i.metadata.queries){const a=(r.get(o)||Ae()).add(s);r.set(o,a)}}return r}async complete(){const e=await H5(this.localStore,new nS(this.k),this.documents,this.mo.id),r=this.po(this.documents);for(const n of this.queries)await Y5(this.localStore,n,r.get(n.name));return this.progress.taskState="Success",new V5(Object.assign({},this.progress),e)}}function d$(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p${constructor(e){this.key=e}}class v${constructor(e){this.key=e}}class g${constructor(e,r){this.query=e,this.To=r,this.Eo=null,this.current=!1,this.Io=Ae(),this.mutatedKeys=Ae(),this.Ao=yR(e),this.Ro=new Rs(this.Ao)}get bo(){return this.To}Po(e,r){const n=r?r.vo:new rS,i=r?r.Ro:this.Ro;let s=r?r.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=Cu(this.query)&&i.size===this.query.limit?i.last():null,u=Sl(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const f=i.get(l),p=hc(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),E=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let I=!1;f&&p?f.data.isEqual(p.data)?g!==E&&(n.track({type:3,doc:p}),I=!0):this.Vo(f,p)||(n.track({type:2,doc:p}),I=!0,(c&&this.Ao(p,c)>0||u&&this.Ao(p,u)<0)&&(a=!0)):!f&&p?(n.track({type:0,doc:p}),I=!0):f&&!p&&(n.track({type:1,doc:f}),I=!0,(c||u)&&(a=!0)),I&&(p?(o=o.add(p),s=E?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),Cu(this.query)||Sl(this.query))for(;o.size>this.query.limit;){const l=Cu(this.query)?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),n.track({type:1,doc:l})}return{Ro:o,vo:n,Bn:a,mutatedKeys:s}}Vo(e,r){return e.hasLocalMutations&&r.hasCommittedMutations&&!r.hasLocalMutations}applyChanges(e,r,n){const i=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const s=e.vo.no();s.sort((u,l)=>function(h,f){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return p(h)-p(f)}(u.type,l.type)||this.Ao(u.doc,l.doc)),this.So(n);const o=r?this.Do():[],a=this.Io.size===0&&this.current?1:0,c=a!==this.Eo;return this.Eo=a,s.length!==0||c?{snapshot:new Ks(this.query,e.Ro,i,s,e.mutatedKeys,a===0,c,!1),Co:o}:{Co:o}}ro(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new rS,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach(r=>this.To=this.To.add(r)),e.modifiedDocuments.forEach(r=>{}),e.removedDocuments.forEach(r=>this.To=this.To.delete(r)),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=Ae(),this.Ro.forEach(n=>{this.No(n.key)&&(this.Io=this.Io.add(n.key))});const r=[];return e.forEach(n=>{this.Io.has(n)||r.push(new v$(n))}),this.Io.forEach(n=>{e.has(n)||r.push(new p$(n))}),r}ko(e){this.To=e.zn,this.Io=Ae();const r=this.Po(e.documents);return this.applyChanges(r,!0)}xo(){return Ks.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,this.Eo===0)}}class O9{constructor(e,r,n){this.query=e,this.targetId=r,this.view=n}}class C9{constructor(e){this.key=e,this.$o=!1}}class R9{constructor(e,r,n,i,s,o){this.localStore=e,this.remoteStore=r,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Oo={},this.Mo=new wo(a=>mR(a),lc),this.Fo=new Map,this.Lo=new Set,this.Bo=new tt(Z.comparator),this.Uo=new Map,this.qo=new ny,this.Ko={},this.jo=new Map,this.Qo=Ci.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return this.Wo===!0}}async function $9(t,e){const r=wy(t);let n,i;const s=r.Mo.get(e);if(s)n=s.targetId,r.sharedClientState.addLocalQueryTarget(n),i=s.view.xo();else{const o=await zs(r.localStore,ar(e)),a=r.sharedClientState.addLocalQueryTarget(o.targetId);n=o.targetId,i=await vy(r,e,n,a==="current"),r.isPrimaryClient&&Mh(r.remoteStore,o)}return i}async function vy(t,e,r,n){t.Go=(l,h,f)=>async function(p,g,E,I){let O=g.view.Po(E);O.Bn&&(O=await Ol(p.localStore,g.query,!1).then(({documents:G})=>g.view.Po(G,O)));const P=I&&I.targetChanges.get(g.targetId),q=g.view.applyChanges(O,p.isPrimaryClient,P);return dv(p,g.targetId,q.Co),q.snapshot}(t,l,h,f);const i=await Ol(t.localStore,e,!0),s=new g$(e,i.zn),o=s.Po(i.documents),a=gc.createSynthesizedTargetChangeForCurrentChange(r,n&&t.onlineState!=="Offline"),c=s.applyChanges(o,t.isPrimaryClient,a);dv(t,r,c.Co);const u=new O9(e,r,s);return t.Mo.set(e,u),t.Fo.has(r)?t.Fo.get(r).push(e):t.Fo.set(r,[e]),c.snapshot}async function k9(t,e){const r=K(t),n=r.Mo.get(e),i=r.Fo.get(n.targetId);if(i.length>1)return r.Fo.set(n.targetId,i.filter(s=>!lc(s,e))),void r.Mo.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(n.targetId),r.sharedClientState.isActiveQueryTarget(n.targetId)||await Gs(r.localStore,n.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(n.targetId),Na(r.remoteStore,n.targetId),Hs(r,n.targetId)}).catch(zi)):(Hs(r,n.targetId),await Gs(r.localStore,n.targetId,!0))}async function x9(t,e,r){const n=by(t);try{const i=await function(s,o){const a=K(s),c=ot.now(),u=o.reduce((h,f)=>h.add(f.key),Ae());let l;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Wn.vn(h,u).next(f=>{l=f;const p=[];for(const g of o){const E=n5(g,l.get(g.key));E!=null&&p.push(new Un(g.key,E,dR(E.value.mapValue),Qe.exists(!0)))}return a.An.addMutationBatch(h,c,p,o)})).then(h=>(h.applyToLocalDocumentSet(l),{batchId:h.batchId,changes:l}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.Ko[s.currentUser.toKey()];c||(c=new tt(me)),c=c.insert(o,a),s.Ko[s.currentUser.toKey()]=c}(n,i.batchId,r),await un(n,i.changes),await _o(n.remoteStore)}catch(i){const s=Io(i,"Failed to persist write");r.reject(s)}}async function m$(t,e){const r=K(t);try{const n=await z5(r.localStore,e);e.targetChanges.forEach((i,s)=>{const o=r.Uo.get(s);o&&(se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.$o=!0:i.modifiedDocuments.size>0?se(o.$o):i.removedDocuments.size>0&&(se(o.$o),o.$o=!1))}),await un(r,n,e)}catch(n){await zi(n)}}function iS(t,e,r){const n=K(t);if(n.isPrimaryClient&&r===0||!n.isPrimaryClient&&r===1){const i=[];n.Mo.forEach((s,o)=>{const a=o.view.ro(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=K(s);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.ro(o)&&(c=!0)}),c&&dy(a)}(n.eventManager,e),i.length&&n.Oo.br(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function N9(t,e,r){const n=K(t);n.sharedClientState.updateQueryState(e,"rejected",r);const i=n.Uo.get(e),s=i&&i.key;if(s){let o=new tt(Z.comparator);o=o.insert(s,Pe.newNoDocument(s,fe.min()));const a=Ae().add(s),c=new vc(fe.min(),new Map,new Fe(me),o,a);await m$(n,c),n.Bo=n.Bo.remove(s),n.Uo.delete(e),yy(n)}else await Gs(n.localStore,e,!1).then(()=>Hs(n,e,r)).catch(zi)}async function P9(t,e){const r=K(t),n=e.batch.batchId;try{const i=await W5(r.localStore,e);my(r,n,null),gy(r,n),r.sharedClientState.updateMutationState(n,"acknowledged"),await un(r,i)}catch(i){await zi(i)}}async function D9(t,e,r){const n=K(t);try{const i=await function(s,o){const a=K(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.An.lookupMutationBatch(c,o).next(l=>(se(l!==null),u=l.keys(),a.An.removeMutationBatch(c,l))).next(()=>a.An.performConsistencyCheck(c)).next(()=>a.Wn.vn(c,u))})}(n.localStore,e);my(n,e,r),gy(n,e),n.sharedClientState.updateMutationState(e,"rejected",r),await un(n,i)}catch(i){await zi(i)}}async function L9(t,e){const r=K(t);jn(r.remoteStore)||V("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await function(s){const o=K(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.An.getHighestUnacknowledgedBatchId(a))}(r.localStore);if(n===-1)return void e.resolve();const i=r.jo.get(n)||[];i.push(e),r.jo.set(n,i)}catch(n){const i=Io(n,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function gy(t,e){(t.jo.get(e)||[]).forEach(r=>{r.resolve()}),t.jo.delete(e)}function my(t,e,r){const n=K(t);let i=n.Ko[n.currentUser.toKey()];if(i){const s=i.get(e);s&&(r?s.reject(r):s.resolve(),i=i.remove(e)),n.Ko[n.currentUser.toKey()]=i}}function Hs(t,e,r=null){t.sharedClientState.removeLocalQueryTarget(e);for(const n of t.Fo.get(e))t.Mo.delete(n),r&&t.Oo.zo(n,r);t.Fo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(n=>{t.qo.containsKey(n)||y$(t,n)})}function y$(t,e){t.Lo.delete(e.path.canonicalString());const r=t.Bo.get(e);r!==null&&(Na(t.remoteStore,r),t.Bo=t.Bo.remove(e),t.Uo.delete(r),yy(t))}function dv(t,e,r){for(const n of r)n instanceof p$?(t.qo.addReference(n.key,e),M9(t,n)):n instanceof v$?(V("SyncEngine","Document no longer in limbo: "+n.key),t.qo.removeReference(n.key,e),t.qo.containsKey(n.key)||y$(t,n.key)):ee()}function M9(t,e){const r=e.key,n=r.path.canonicalString();t.Bo.get(r)||t.Lo.has(n)||(V("SyncEngine","New document in limbo: "+r),t.Lo.add(n),yy(t))}function yy(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const r=new Z(Ie.fromString(e)),n=t.Qo.next();t.Uo.set(n,new C9(r)),t.Bo=t.Bo.insert(r,n),Mh(t.remoteStore,new Sn(ar(yo(r.path)),n,2,Kt.I))}}async function un(t,e,r){const n=K(t),i=[],s=[],o=[];n.Mo.isEmpty()||(n.Mo.forEach((a,c)=>{o.push(n.Go(c,e,r).then(u=>{if(u){n.isPrimaryClient&&n.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),i.push(u);const l=ry.$n(c.targetId,u);s.push(l)}}))}),await Promise.all(o),n.Oo.br(i),await async function(a,c){const u=K(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>L.forEach(c,h=>L.forEach(h.kn,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>L.forEach(h.xn,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!Wi(l))throw l;V("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.qn.get(h),p=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(p);u.qn=u.qn.insert(h,g)}}}(n.localStore,s))}async function F9(t,e){const r=K(t);if(!r.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const n=await e$(r.localStore,e);r.currentUser=e,function(i,s){i.jo.forEach(o=>{o.forEach(a=>{a.reject(new M($.CANCELLED,s))})}),i.jo.clear()}(r,"'waitForPendingWrites' promise is rejected due to a user change."),r.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await un(r,n.Gn)}}function U9(t,e){const r=K(t),n=r.Uo.get(e);if(n&&n.$o)return Ae().add(n.key);{let i=Ae();const s=r.Fo.get(e);if(!s)return i;for(const o of s){const a=r.Mo.get(o);i=i.unionWith(a.view.bo)}return i}}async function j9(t,e){const r=K(t),n=await Ol(r.localStore,e.query,!0),i=e.view.ko(n);return r.isPrimaryClient&&dv(r,e.targetId,i.Co),i}async function B9(t){const e=K(t);return i$(e.localStore).then(r=>un(e,r))}async function V9(t,e,r,n){const i=K(t),s=await function(o,a){const c=K(o),u=K(c.An);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.Zt(l,a).next(h=>h?c.Wn.vn(l,h):L.resolve(null)))}(i.localStore,e);s!==null?(r==="pending"?await _o(i.remoteStore):r==="acknowledged"||r==="rejected"?(my(i,e,n||null),gy(i,e),function(o,a){K(K(o).An).ee(a)}(i.localStore,e)):ee(),await un(i,s)):V("SyncEngine","Cannot apply mutation batch with id: "+e)}async function q9(t,e){const r=K(t);if(wy(r),by(r),e===!0&&r.Wo!==!0){const n=r.sharedClientState.getAllActiveQueryTargets(),i=await sS(r,n.toArray());r.Wo=!0,await fv(r.remoteStore,!0);for(const s of i)Mh(r.remoteStore,s)}else if(e===!1&&r.Wo!==!1){const n=[];let i=Promise.resolve();r.Fo.forEach((s,o)=>{r.sharedClientState.isLocalQueryTarget(o)?n.push(o):i=i.then(()=>(Hs(r,o),Gs(r.localStore,o,!0))),Na(r.remoteStore,o)}),await i,await sS(r,n),function(s){const o=K(s);o.Uo.forEach((a,c)=>{Na(o.remoteStore,c)}),o.qo.hs(),o.Uo=new Map,o.Bo=new tt(Z.comparator)}(r),r.Wo=!1,await fv(r.remoteStore,!1)}}async function sS(t,e,r){const n=K(t),i=[],s=[];for(const o of e){let a;const c=n.Fo.get(o);if(c&&c.length!==0){a=await zs(n.localStore,ar(c[0]));for(const u of c){const l=n.Mo.get(u),h=await j9(n,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await n$(n.localStore,o);a=await zs(n.localStore,u),await vy(n,w$(u),o,!1)}i.push(a)}return n.Oo.br(s),i}function w$(t){return vR(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function W9(t){const e=K(t);return K(K(e.localStore).persistence).Tn()}async function z9(t,e,r,n){const i=K(t);if(i.Wo)V("SyncEngine","Ignoring unexpected query state notification.");else if(i.Fo.has(e))switch(r){case"current":case"not-current":{const s=await i$(i.localStore),o=vc.createSynthesizedRemoteEventForCurrentChange(e,r==="current");await un(i,s,o);break}case"rejected":await Gs(i.localStore,e,!0),Hs(i,e,n);break;default:ee()}}async function G9(t,e,r){const n=wy(t);if(n.Wo){for(const i of e){if(n.Fo.has(i)){V("SyncEngine","Adding an already active target "+i);continue}const s=await n$(n.localStore,i),o=await zs(n.localStore,s);await vy(n,w$(s),o.targetId,!1),Mh(n.remoteStore,o)}for(const i of r)n.Fo.has(i)&&await Gs(n.localStore,i,!1).then(()=>{Na(n.remoteStore,i),Hs(n,i)}).catch(zi)}}function wy(t){const e=K(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=m$.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=U9.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=N9.bind(null,e),e.Oo.br=I9.bind(null,e.eventManager),e.Oo.zo=S9.bind(null,e.eventManager),e}function by(t){const e=K(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=P9.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=D9.bind(null,e),e}function K9(t,e,r){const n=K(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,f){const p=K(h),g=at(f.createTime);return p.persistence.runTransaction("hasNewerBundle","readonly",E=>p.Ye.getBundleMetadata(E,f.id)).then(E=>!!E&&E.createTime.compareTo(g)>=0)}(i.localStore,a))return await s.close(),void o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a));o._updateProgress(d$(a));const c=new A9(a,i.localStore,s.k);let u=await s.Ho();for(;u;){const h=await c.yo(u);h&&o._updateProgress(h),u=await s.Ho()}const l=await c.complete();await un(i,l.In,void 0),await function(h,f){const p=K(h);return p.persistence.runTransaction("Save bundle","readwrite",g=>p.Ye.saveBundleMetadata(g,f))}(i.localStore,a),o._completeWith(l.progress)}catch(a){Ta("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a)}})(n,e,r).then(()=>{n.sharedClientState.notifyBundleLoaded()})}class b${constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=mc(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return ZR(this.persistence,new JR,e.initialUser,this.k)}Yo(e){return new t9(iy.ks,this.k)}Jo(e){return new s$}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class _$ extends b${constructor(e,r,n){super(),this.tc=e,this.cacheSizeBytes=r,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await K5(this.localStore),await this.tc.initialize(this,e),await by(this.tc.syncEngine),await _o(this.tc.remoteStore),await this.persistence.sn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Zo(e){return ZR(this.persistence,new JR,e.initialUser,this.k)}Xo(e){const r=this.persistence.referenceDelegate.garbageCollector;return new L5(r,e.asyncQueue)}Yo(e){const r=ty(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Mt.withCacheSize(this.cacheSizeBytes):Mt.DEFAULT;return new ey(this.synchronizeTabs,r,e.clientId,n,e.asyncQueue,o$(),ku(),this.k,this.sharedClientState,!!this.forceOwnership)}Jo(e){return new s$}}class H9 extends _${constructor(e,r){super(e,r,!1),this.tc=e,this.cacheSizeBytes=r,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const r=this.tc.syncEngine;this.sharedClientState instanceof Bd&&(this.sharedClientState.syncEngine={mi:V9.bind(null,r),gi:z9.bind(null,r),yi:G9.bind(null,r),Tn:W9.bind(null,r),_i:B9.bind(null,r)},await this.sharedClientState.start()),await this.persistence.sn(async n=>{await q9(this.tc.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):n||this.gcScheduler.stop())})}Jo(e){const r=o$();if(!Bd.Pt(r))throw new M($.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=ty(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Bd(r,e.asyncQueue,n,e.clientId,e.initialUser)}}class _y{async initialize(e,r){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(r),this.remoteStore=this.createRemoteStore(r),this.eventManager=this.createEventManager(r),this.syncEngine=this.createSyncEngine(r,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>iS(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=F9.bind(null,this.syncEngine),await fv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new E9}createDatastore(e){const r=mc(e.databaseInfo.databaseId),n=(i=e.databaseInfo,new o9(i));var i;return function(s,o,a,c){return new u9(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,n,r)}createRemoteStore(e){return r=this.localStore,n=this.datastore,i=e.asyncQueue,s=a=>iS(this.syncEngine,a,0),o=eS.Pt()?new eS:new n9,new h9(r,n,i,s,o);var r,n,i,s,o}createSyncEngine(e,r){return function(n,i,s,o,a,c,u){const l=new R9(n,i,s,o,a,c);return u&&(l.Wo=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,r)}terminate(){return async function(e){const r=K(e);V("RemoteStore","RemoteStore shutting down."),r.Gr.add(5),await bo(r),r.Hr.shutdown(),r.Jr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(t,e=10240){let r=0;return{async read(){if(r<t.byteLength){const n={value:t.slice(r,r+e),done:!1};return r+=e,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ec(this.observer.next,e)}error(e){this.observer.error?this.ec(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}nc(){this.muted=!0}ec(e,r){this.muted||setTimeout(()=>{this.muted||e(r)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y9{constructor(e,r){this.sc=e,this.k=r,this.metadata=new st,this.buffer=new Uint8Array,this.ic=new TextDecoder("utf-8"),this.rc().then(n=>{n&&n._o()?this.metadata.resolve(n.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n==null?void 0:n.payload)}`))},n=>this.metadata.reject(n))}close(){return this.sc.cancel()}async getMetadata(){return this.metadata.promise}async Ho(){return await this.getMetadata(),this.rc()}async rc(){const e=await this.oc();if(e===null)return null;const r=this.ic.decode(e),n=Number(r);isNaN(n)&&this.cc(`length string (${r}) is not valid number`);const i=await this.ac(n);return new T9(JSON.parse(i),e.length+n)}uc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async oc(){for(;this.uc()<0&&!await this.hc(););if(this.buffer.length===0)return null;const e=this.uc();e<0&&this.cc("Reached the end of bundle when a length string is expected.");const r=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),r}async ac(e){for(;this.buffer.length<e;)await this.hc()&&this.cc("Reached the end of bundle when more is expected.");const r=this.ic.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),r}cc(e){throw this.sc.cancel(),new Error(`Invalid bundle format: ${e}`)}async hc(){const e=await this.sc.read();if(!e.done){const r=new Uint8Array(this.buffer.length+e.value.length);r.set(this.buffer),r.set(e.value,this.buffer.length),this.buffer=r}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X9{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new M($.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const r=await async function(n,i){const s=K(n),o=xa(s.k)+"/documents",a={documents:i.map(h=>ka(s.k,h))},c=await s.ji("BatchGetDocuments",o,a),u=new Map;c.forEach(h=>{const f=v5(s.k,h);u.set(f.key.toString(),f)});const l=[];return i.forEach(h=>{const f=u.get(h.toString());se(!!f),l.push(f)}),l}(this.datastore,e);return r.forEach(n=>this.recordVersion(n)),r}set(e,r){this.write(r.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,r){try{this.write(r.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastWriteError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new pc(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(r=>{e.delete(r.key.toString())}),e.forEach((r,n)=>{const i=Z.fromPath(n);this.mutations.push(new zm(i,this.precondition(i)))}),await async function(r,n){const i=K(r),s=xa(i.k)+"/documents",o={writes:n.map(a=>Tl(i.k,a))};await i.Bi("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let r;if(e.isFoundDocument())r=e.version;else{if(!e.isNoDocument())throw ee();r=fe.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!r.isEqual(n))throw new M($.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),r)}precondition(e){const r=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&r?Qe.updateTime(r):Qe.none()}preconditionForUpdate(e){const r=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&r){if(r.isEqual(fe.min()))throw new M($.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Qe.updateTime(r)}return Qe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q9{constructor(e,r,n,i){this.asyncQueue=e,this.datastore=r,this.updateFunction=n,this.deferred=i,this.lc=5,this.ur=new oy(this.asyncQueue,"transaction_retry")}run(){this.lc-=1,this.fc()}fc(){this.ur.Zi(async()=>{const e=new X9(this.datastore),r=this.dc(e);r&&r.then(n=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(n)}).catch(i=>{this.wc(i)}))}).catch(n=>{this.wc(n)})})}dc(e){try{const r=this.updateFunction(e);return!qi(r)&&r.catch&&r.then?r:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(r){return this.deferred.reject(r),null}}wc(e){this.lc>0&&this._c(e)?(this.lc-=1,this.asyncQueue.enqueueAndForget(()=>(this.fc(),Promise.resolve()))):this.deferred.reject(e)}_c(e){if(e.name==="FirebaseError"){const r=e.code;return r==="aborted"||r==="failed-precondition"||!OR(r)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J9{constructor(e,r,n,i){this.authCredentials=e,this.appCheckCredentials=r,this.asyncQueue=n,this.databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=cR.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async s=>{V("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(n,s=>(V("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M($.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new st;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){const n=Io(r,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function E$(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const r=await t.getConfiguration();await e.initialize(r);let n=r.initialUser;t.setCredentialChangeListener(async i=>{n.isEqual(i)||(await e$(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function I$(t,e){t.asyncQueue.verifyOperationInProgress();const r=await Ey(t);V("FirestoreClient","Initializing OnlineComponentProvider");const n=await t.getConfiguration();await e.initialize(r,n),t.setCredentialChangeListener(i=>tS(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>tS(e.remoteStore,s)),t.onlineComponents=e}async function Ey(t){return t.offlineComponents||(V("FirestoreClient","Using default OfflineComponentProvider"),await E$(t,new b$)),t.offlineComponents}async function Uh(t){return t.onlineComponents||(V("FirestoreClient","Using default OnlineComponentProvider"),await I$(t,new _y)),t.onlineComponents}function S$(t){return Ey(t).then(e=>e.persistence)}function Iy(t){return Ey(t).then(e=>e.localStore)}function T$(t){return Uh(t).then(e=>e.remoteStore)}function Sy(t){return Uh(t).then(e=>e.syncEngine)}async function Ys(t){const e=await Uh(t),r=e.eventManager;return r.onListen=$9.bind(null,e.syncEngine),r.onUnlisten=k9.bind(null,e.syncEngine),r}function Z9(t){return t.asyncQueue.enqueue(async()=>{const e=await S$(t),r=await T$(t);return e.setNetworkEnabled(!0),function(n){const i=K(n);return i.Gr.delete(0),yc(i)}(r)})}function e7(t){return t.asyncQueue.enqueue(async()=>{const e=await S$(t),r=await T$(t);return e.setNetworkEnabled(!1),async function(n){const i=K(n);i.Gr.add(0),await bo(i),i.Jr.set("Offline")}(r)})}function t7(t,e){const r=new st;return t.asyncQueue.enqueueAndForget(async()=>async function(n,i,s){try{const o=await function(a,c){const u=K(a);return u.persistence.runTransaction("read document","readonly",l=>u.Wn.Rn(l,c))}(n,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new M($.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Io(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await Iy(t),e,r)),r.promise}function A$(t,e,r={}){const n=new st;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new Fh({next:h=>{s.enqueueAndForget(()=>fy(i,l));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new M($.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new M($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new py(yo(o.path),u,{includeMetadataChanges:!0,wo:!0});return hy(i,l)}(await Ys(t),t.asyncQueue,e,r,n)),n.promise}function r7(t,e){const r=new st;return t.asyncQueue.enqueueAndForget(async()=>async function(n,i,s){try{const o=await Ol(n,i,!0),a=new g$(i,o.zn),c=a.Po(o.documents),u=a.applyChanges(c,!1);s.resolve(u.snapshot)}catch(o){const a=Io(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await Iy(t),e,r)),r.promise}function O$(t,e,r={}){const n=new st;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new Fh({next:h=>{s.enqueueAndForget(()=>fy(i,l)),h.fromCache&&a.source==="server"?c.reject(new M($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new py(o,u,{includeMetadataChanges:!0,wo:!0});return hy(i,l)}(await Ys(t),t.asyncQueue,e,r,n)),n.promise}function n7(t,e){const r=new Fh(e);return t.asyncQueue.enqueueAndForget(async()=>function(n,i){K(n).io.add(i),i.next()}(await Ys(t),r)),()=>{r.nc(),t.asyncQueue.enqueueAndForget(async()=>function(n,i){K(n).io.delete(i)}(await Ys(t),r))}}function i7(t,e){const r=new st;return t.asyncQueue.enqueueAndForget(async()=>{const n=await function(i){return Uh(i).then(s=>s.datastore)}(t);new Q9(t.asyncQueue,n,e,r).run()}),r.promise}function s7(t,e,r,n){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(c,u){return new Y9(c,u)}(function(c,u){if(c instanceof Uint8Array)return oS(c,u);if(c instanceof ArrayBuffer)return oS(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(r,mc(e));t.asyncQueue.enqueueAndForget(async()=>{K9(await Sy(t),i,n)})}function o7(t,e){return t.asyncQueue.enqueue(async()=>function(r,n){const i=K(r);return i.persistence.runTransaction("Get named query","readonly",s=>i.Ye.getNamedQuery(s,n))}(await Iy(t),e))}class a7{constructor(e,r,n,i,s,o,a,c){this.databaseId=e,this.appId=r,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Xs{constructor(e,r){this.projectId=e,this.database=r||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Xs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(t,e,r){if(!r)throw new M($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function C$(t,e,r,n){if(e===!0&&n===!0)throw new M($.INVALID_ARGUMENT,`${t} and ${r} cannot be used together.`)}function cS(t){if(!Z.isDocumentKey(t))throw new M($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function uS(t){if(Z.isDocumentKey(t))throw new M($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function jh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function Ee(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const r=jh(t);throw new M($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${r}`)}}return t}function R$(t,e){if(e<=0)throw new M($.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e){var r;if(e.host===void 0){if(e.ssl!==void 0)throw new M($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(r=e.ssl)===null||r===void 0||r;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,C$("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,r,n){this._authCredentials=r,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lS({}),this._settingsFrozen=!1,e instanceof Xs?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new M($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xs(i.options.projectId)}(e))}get app(){if(!this._app)throw new M($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lS(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new R8;switch(r.type){case"gapi":const n=r.client;return se(!(typeof n!="object"||n===null||!n.auth||!n.auth.getAuthHeaderValueForFirstParty)),new N8(n,r.sessionIndex||"0",r.iamToken||null);case"provider":return r.client;default:throw new M($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=aS.get(e);r&&(V("ComponentProvider","Removing Datastore"),aS.delete(e),r.terminate())}(this),Promise.resolve()}}function c7(t,e,r,n={}){var i;const s=(t=Ee(t,wc))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Ta("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${r}`,ssl:!1})),n.mockUserToken){let o,a;if(typeof n.mockUserToken=="string")o=n.mockUserToken,a=dt.MOCK_USER;else{o=bY(n.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=n.mockUserToken.sub||n.mockUserToken.user_id;if(!c)throw new M($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new dt(c)}t._authCredentials=new $8(new aR(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,r,n){this.converter=r,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $e(this.firestore,e,this._key)}}class At{constructor(e,r,n){this.converter=r,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new At(this.firestore,e,this._query)}}class Fr extends At{constructor(e,r,n){super(e,r,yo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new Z(e))}withConverter(e){return new Fr(this.firestore,e,this._path)}}function $$(t,e,...r){if(t=re(t),Ty("collection","path",e),t instanceof wc){const n=Ie.fromString(e,...r);return uS(n),new Fr(t,null,n)}{if(!(t instanceof $e||t instanceof Fr))throw new M($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(Ie.fromString(e,...r));return uS(n),new Fr(t.firestore,null,n)}}function u7(t,e){if(t=Ee(t,wc),Ty("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new M($.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new At(t,null,function(r){return new cn(Ie.emptyPath(),r)}(e))}function kl(t,e,...r){if(t=re(t),arguments.length===1&&(e=cR.A()),Ty("doc","path",e),t instanceof wc){const n=Ie.fromString(e,...r);return cS(n),new $e(t,null,new Z(n))}{if(!(t instanceof $e||t instanceof Fr))throw new M($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(Ie.fromString(e,...r));return cS(n),new $e(t.firestore,t instanceof Fr?t.converter:null,new Z(n))}}function k$(t,e){return t=re(t),e=re(e),(t instanceof $e||t instanceof Fr)&&(e instanceof $e||e instanceof Fr)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function x$(t,e){return t=re(t),e=re(e),t instanceof At&&e instanceof At&&t.firestore===e.firestore&&lc(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l7{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new oy(this,"async_queue_retry"),this.bc=()=>{const r=ku();r&&V("AsyncQueue","Visibility state changed to "+r.visibilityState),this.ur.er()};const e=ku();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.vc(e)}enterRestrictedMode(e){if(!this.yc){this.yc=!0,this.Ac=e||!1;const r=ku();r&&typeof r.removeEventListener=="function"&&r.removeEventListener("visibilitychange",this.bc)}}enqueue(e){if(this.Pc(),this.yc)return new Promise(()=>{});const r=new st;return this.vc(()=>this.yc&&this.Ac?Promise.resolve():(e().then(r.resolve,r.reject),r.promise)).then(()=>r.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.gc.push(e),this.Vc()))}async Vc(){if(this.gc.length!==0){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(e){if(!Wi(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.gc.length>0&&this.ur.Zi(()=>this.Vc())}}vc(e){const r=this.mc.then(()=>(this.Ic=!0,e().catch(n=>{this.Ec=n,this.Ic=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(n);throw Ye("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.Ic=!1,n))));return this.mc=r,r}enqueueAfterDelay(e,r,n){this.Pc(),this.Rc.indexOf(e)>-1&&(r=0);const i=ly.createAndSchedule(this,e,r,n,s=>this.Sc(s));return this.Tc.push(i),i}Pc(){this.Ec&&ee()}verifyOperationInProgress(){}async Dc(){let e;do e=this.mc,await e;while(e!==this.mc)}Cc(e){for(const r of this.Tc)if(r.timerId===e)return!0;return!1}Nc(e){return this.Dc().then(()=>{this.Tc.sort((r,n)=>r.targetTimeMs-n.targetTimeMs);for(const r of this.Tc)if(r.skipDelay(),e!=="all"&&r.timerId===e)break;return this.Dc()})}kc(e){this.Rc.push(e)}Sc(e){const r=this.Tc.indexOf(e);this.Tc.splice(r,1)}}function pv(t){return function(e,r){if(typeof e!="object"||e===null)return!1;const n=e;for(const i of r)if(i in n&&typeof n[i]=="function")return!0;return!1}(t,["next","error","complete"])}class h7{constructor(){this._progressObserver={},this._taskCompletionResolver=new st,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,r,n){this._progressObserver={next:e,error:r,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,r){return this._taskCompletionResolver.promise.then(e,r)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f7=-1;class Ue extends wc{constructor(e,r,n){super(e,r,n),this.type="firestore",this._queue=new l7,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||N$(this),this._firestoreClient.terminate()}}function ht(t){return t._firestoreClient||N$(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function N$(t){var e;const r=t._freezeSettings(),n=function(i,s,o,a){return new a7(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new J9(t._authCredentials,t._appCheckCredentials,t._queue,n)}function d7(t,e){D$(t=Ee(t,Ue));const r=ht(t),n=t._freezeSettings(),i=new _y;return P$(r,i,new _$(i,n.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function p7(t){D$(t=Ee(t,Ue));const e=ht(t),r=t._freezeSettings(),n=new _y;return P$(e,n,new H9(n,r.cacheSizeBytes))}function P$(t,e,r){const n=new st;return t.asyncQueue.enqueue(async()=>{try{await E$(t,r),await I$(t,e),n.resolve()}catch(i){if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:typeof DOMException!="undefined"&&s instanceof DOMException?s.code===22||s.code===20||s.code===11:!0}(i))throw i;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+i),n.reject(i)}}).then(()=>n.promise)}function v7(t){if(t._initialized&&!t._terminated)throw new M($.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new st;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!dr.Pt())return Promise.resolve();const n=r+"main";await dr.delete(n)}(ty(t._databaseId,t._persistenceKey)),e.resolve()}catch(r){e.reject(r)}}),e.promise}function g7(t){return function(e){const r=new st;return e.asyncQueue.enqueueAndForget(async()=>L9(await Sy(e),r)),r.promise}(ht(t=Ee(t,Ue)))}function m7(t){return Z9(ht(t=Ee(t,Ue)))}function y7(t){return e7(ht(t=Ee(t,Ue)))}function w7(t,e){const r=ht(t=Ee(t,Ue)),n=new h7;return s7(r,t._databaseId,e,n),n}function b7(t,e){return o7(ht(t=Ee(t,Ue)),e).then(r=>r?new At(t,null,r.query):null)}function D$(t){if(t._initialized||t._terminated)throw new M($.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(...e){for(let r=0;r<e.length;++r)if(e[r].length===0)throw new M($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Br(et.fromBase64String(e))}catch(r){throw new M($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(e){return new Br(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,r){if(!isFinite(e)||e<-90||e>90)throw new M($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(r)||r<-180||r>180)throw new M($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=e,this._long=r}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _7=/^__.*__$/;class E7{constructor(e,r,n){this.data=e,this.fieldMask=r,this.fieldTransforms=n}toMutation(e,r){return this.fieldMask!==null?new Un(e,this.data,this.fieldMask,r,this.fieldTransforms):new dc(e,this.data,r,this.fieldTransforms)}}class L${constructor(e,r,n){this.data=e,this.fieldMask=r,this.fieldTransforms=n}toMutation(e,r){return new Un(e,this.data,this.fieldMask,r,this.fieldTransforms)}}function M$(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class Vh{constructor(e,r,n,i,s,o){this.settings=e,this.databaseId=r,this.k=n,this.ignoreUndefinedProperties=i,s===void 0&&this.xc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get $c(){return this.settings.$c}Oc(e){return new Vh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mc(e){var r;const n=(r=this.path)===null||r===void 0?void 0:r.child(e),i=this.Oc({path:n,Fc:!1});return i.Lc(e),i}Bc(e){var r;const n=(r=this.path)===null||r===void 0?void 0:r.child(e),i=this.Oc({path:n,Fc:!1});return i.xc(),i}Uc(e){return this.Oc({path:void 0,Fc:!0})}qc(e){return xl(e,this.settings.methodName,this.settings.Kc||!1,this.path,this.settings.jc)}contains(e){return this.fieldMask.find(r=>e.isPrefixOf(r))!==void 0||this.fieldTransforms.find(r=>e.isPrefixOf(r.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lc(this.path.get(e))}Lc(e){if(e.length===0)throw this.qc("Document fields must not be empty");if(M$(this.$c)&&_7.test(e))throw this.qc('Document fields cannot begin and end with "__"')}}class I7{constructor(e,r,n){this.databaseId=e,this.ignoreUndefinedProperties=r,this.k=n||mc(e)}Qc(e,r,n,i=!1){return new Vh({$c:e,methodName:r,jc:n,path:vt.emptyPath(),Fc:!1,Kc:i},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Ki(t){const e=t._freezeSettings(),r=mc(t._databaseId);return new I7(t._databaseId,!!e.ignoreUndefinedProperties,r)}function qh(t,e,r,n,i,s={}){const o=t.Qc(s.merge||s.mergeFields?2:0,e,r,i);Ry("Data must be an object, but it was:",o,n);const a=j$(n,o);let c,u;if(s.merge)c=new Ds(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const f=vv(e,h,r);if(!o.contains(f))throw new M($.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);V$(l,f)||l.push(f)}c=new Ds(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new E7(new It(a),c,u)}class bc extends Gi{_toFieldTransform(e){if(e.$c!==2)throw e.$c===1?e.qc(`${this._methodName}() can only appear at the top level of your update data`):e.qc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bc}}function F$(t,e,r){return new Vh({$c:3,jc:e.settings.jc,methodName:t._methodName,Fc:r},e.databaseId,e.k,e.ignoreUndefinedProperties)}class Ay extends Gi{_toFieldTransform(e){return new fc(e.path,new Us)}isEqual(e){return e instanceof Ay}}class S7 extends Gi{constructor(e,r){super(e),this.Wc=r}_toFieldTransform(e){const r=F$(this,e,!0),n=this.Wc.map(s=>Hi(s,r)),i=new Ai(n);return new fc(e.path,i)}isEqual(e){return this===e}}class T7 extends Gi{constructor(e,r){super(e),this.Wc=r}_toFieldTransform(e){const r=F$(this,e,!0),n=this.Wc.map(s=>Hi(s,r)),i=new Oi(n);return new fc(e.path,i)}isEqual(e){return this===e}}class A7 extends Gi{constructor(e,r){super(e),this.Gc=r}_toFieldTransform(e){const r=new js(e.k,_R(e.k,this.Gc));return new fc(e.path,r)}isEqual(e){return this===e}}function Oy(t,e,r,n){const i=t.Qc(1,e,r);Ry("Data must be an object, but it was:",i,n);const s=[],o=It.empty();Vi(n,(c,u)=>{const l=$y(e,c,r);u=re(u);const h=i.Bc(l);if(u instanceof bc)s.push(l);else{const f=Hi(u,h);f!=null&&(s.push(l),o.set(l,f))}});const a=new Ds(s);return new L$(o,a,i.fieldTransforms)}function Cy(t,e,r,n,i,s){const o=t.Qc(1,e,r),a=[vv(e,n,r)],c=[i];if(s.length%2!=0)throw new M($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(vv(e,s[f])),c.push(s[f+1]);const u=[],l=It.empty();for(let f=a.length-1;f>=0;--f)if(!V$(u,a[f])){const p=a[f];let g=c[f];g=re(g);const E=o.Bc(p);if(g instanceof bc)u.push(p);else{const I=Hi(g,E);I!=null&&(u.push(p),l.set(p,I))}}const h=new Ds(u);return new L$(l,h,o.fieldTransforms)}function U$(t,e,r,n=!1){return Hi(r,t.Qc(n?4:3,e))}function Hi(t,e){if(B$(t=re(t)))return Ry("Unsupported field value:",e,t),j$(t,e);if(t instanceof Gi)return function(r,n){if(!M$(n.$c))throw n.qc(`${r._methodName}() can only be used with update() and set()`);if(!n.path)throw n.qc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(n);i&&n.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&e.$c!==4)throw e.qc("Nested arrays are not supported");return function(r,n){const i=[];let s=0;for(const o of r){let a=Hi(o,n.Uc(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(r,n){if((r=re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return _R(n.k,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ot.fromDate(r);return{timestampValue:$a(n.k,i)}}if(r instanceof ot){const i=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$a(n.k,i)}}if(r instanceof Bh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Br)return{bytesValue:xR(n.k,r._byteString)};if(r instanceof $e){const i=n.databaseId,s=r.firestore._databaseId;if(!s.isEqual(i))throw n.qc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Gm(r.firestore._databaseId||n.databaseId,r._key.path)}}throw n.qc(`Unsupported field value: ${jh(r)}`)}(t,e)}function j$(t,e){const r={};return lR(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vi(t,(n,i)=>{const s=Hi(i,e.Mc(n));s!=null&&(r[n]=s)}),{mapValue:{fields:r}}}function B$(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ot||t instanceof Bh||t instanceof Br||t instanceof $e||t instanceof Gi)}function Ry(t,e,r){if(!B$(r)||!function(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}(r)){const n=jh(r);throw n==="an object"?e.qc(t+" a custom object"):e.qc(t+" "+n)}}function vv(t,e,r){if((e=re(e))instanceof Nn)return e._internalPath;if(typeof e=="string")return $y(t,e);throw xl("Field path arguments must be of type string or ",t,!1,void 0,r)}const O7=new RegExp("[~\\*/\\[\\]]");function $y(t,e,r){if(e.search(O7)>=0)throw xl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,r);try{return new Nn(...e.split("."))._internalPath}catch{throw xl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,r)}}function xl(t,e,r,n,i){const s=n&&!n.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;r&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${n}`),o&&(c+=` in document ${i}`),c+=")"),new M($.INVALID_ARGUMENT,a+t+c)}function V$(t,e){return t.some(r=>r.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,r,n,i,s){this._firestore=e,this._userDataWriter=r,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new C7(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const r=this._document.data.field(Wh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r)}}}class C7 extends Pa{data(){return super.data()}}function Wh(t,e){return typeof e=="string"?$y(t,e):e instanceof Nn?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,r){this.hasPendingWrites=e,this.fromCache=r}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rn extends Pa{constructor(e,r,n,i,s,o){super(e,r,n,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const r=new na(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(r,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,r={}){if(this._document){const n=this._document.data.field(Wh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,r.serverTimestamps)}}}class na extends rn{data(e={}){return super.data(e)}}class Pn{constructor(e,r,n,i){this._firestore=e,this._userDataWriter=r,this._snapshot=i,this.metadata=new Jn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(r=>e.push(r)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,r){this._snapshot.docs.forEach(n=>{e.call(r,new na(this._firestore,this._userDataWriter,n.key,n,new Jn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const r=!!e.includeMetadataChanges;if(r&&this._snapshot.excludesMetadataChanges)throw new M($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===r||(this._cachedChanges=function(n,i){if(n._snapshot.oldDocs.isEmpty()){let s=0;return n._snapshot.docChanges.map(o=>({type:"added",doc:new na(n._firestore,n._userDataWriter,o.doc.key,o.doc,new Jn(n._snapshot.mutatedKeys.has(o.doc.key),n._snapshot.fromCache),n.query.converter),oldIndex:-1,newIndex:s++}))}{let s=n._snapshot.oldDocs;return n._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new na(n._firestore,n._userDataWriter,o.doc.key,o.doc,new Jn(n._snapshot.mutatedKeys.has(o.doc.key),n._snapshot.fromCache),n.query.converter);let c=-1,u=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:R7(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,r),this._cachedChangesIncludeMetadataChanges=r),this._cachedChanges}}function R7(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}function q$(t,e){return t instanceof rn&&e instanceof rn?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Pn&&e instanceof Pn&&t._firestore===e._firestore&&x$(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W$(t){if(Sl(t)&&t.explicitOrderBy.length===0)throw new M($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _c{}function gn(t,...e){for(const r of e)t=r._apply(t);return t}class $7 extends _c{constructor(e,r,n){super(),this.zc=e,this.Hc=r,this.Jc=n,this.type="where"}_apply(e){const r=Ki(e.firestore),n=function(i,s,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new M($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){fS(l,u);const p=[];for(const g of l)p.push(hS(a,i,g));h={arrayValue:{values:p}}}else h=hS(a,i,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||fS(l,u),h=U$(o,s,l,u==="in"||u==="not-in");const f=xt.create(c,u,h);return function(p,g){if(g.V()){const I=qm(p);if(I!==null&&!I.isEqual(g.field))throw new M($.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${I.toString()}' and '${g.field.toString()}'`);const O=Vm(p);O!==null&&Y$(p,g.field,O)}const E=function(I,O){for(const P of I.filters)if(O.indexOf(P.op)>=0)return P.op;return null}(p,function(I){switch(I){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(g.op));if(E!==null)throw E===g.op?new M($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${g.op.toString()}' filter.`):new M($.INVALID_ARGUMENT,`Invalid query. You cannot use '${g.op.toString()}' filters with '${E.toString()}' filters.`)}(i,f),f}(e._query,"where",r,e.firestore._databaseId,this.zc,this.Hc,this.Jc);return new At(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new cn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function k7(t,e,r){const n=e,i=Wh("where",t);return new $7(i,n,r)}class x7 extends _c{constructor(e,r){super(),this.zc=e,this.Yc=r,this.type="orderBy"}_apply(e){const r=function(n,i,s){if(n.startAt!==null)throw new M($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(n.endAt!==null)throw new M($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Cs(i,s);return function(a,c){if(Vm(a)===null){const u=qm(a);u!==null&&Y$(a,u,c.field)}}(n,o),o}(e._query,this.zc,this.Yc);return new At(e.firestore,e.converter,function(n,i){const s=n.explicitOrderBy.concat([i]);return new cn(n.path,n.collectionGroup,s,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}(e._query,r))}}function N7(t,e="asc"){const r=e,n=Wh("orderBy",t);return new x7(n,r)}class z$ extends _c{constructor(e,r,n){super(),this.type=e,this.Xc=r,this.Zc=n}_apply(e){return new At(e.firestore,e.converter,gR(e._query,this.Xc,this.Zc))}}function P7(t){return R$("limit",t),new z$("limit",t,"F")}function D7(t){return R$("limitToLast",t),new z$("limitToLast",t,"L")}class G$ extends _c{constructor(e,r,n){super(),this.type=e,this.ta=r,this.ea=n}_apply(e){const r=H$(e,this.type,this.ta,this.ea);return new At(e.firestore,e.converter,function(n,i){return new cn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,i,n.endAt)}(e._query,r))}}function L7(...t){return new G$("startAt",t,!0)}function M7(...t){return new G$("startAfter",t,!1)}class K$ extends _c{constructor(e,r,n){super(),this.type=e,this.ta=r,this.ea=n}_apply(e){const r=H$(e,this.type,this.ta,this.ea);return new At(e.firestore,e.converter,function(n,i){return new cn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,n.startAt,i)}(e._query,r))}}function F7(...t){return new K$("endBefore",t,!0)}function U7(...t){return new K$("endAt",t,!1)}function H$(t,e,r,n){if(r[0]=re(r[0]),r[0]instanceof Pa)return function(i,s,o,a,c){if(!a)throw new M($.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of Fs(i))if(l.field.isKeyField())u.push(_l(s,a.key));else{const h=a.data.field(l.field);if(Um(h))throw new M($.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const f=l.field.canonicalString();throw new M($.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}u.push(h)}return new Ra(u,c)}(t._query,t.firestore._databaseId,e,r[0]._document,n);{const i=Ki(t.firestore);return function(s,o,a,c,u,l){const h=s.explicitOrderBy;if(u.length>h.length)throw new M($.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let p=0;p<u.length;p++){const g=u[p];if(h[p].field.isKeyField()){if(typeof g!="string")throw new M($.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof g}`);if(!Wm(s)&&g.indexOf("/")!==-1)throw new M($.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${g}' contains a slash.`);const E=s.path.child(Ie.fromString(g));if(!Z.isDocumentKey(E))throw new M($.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${E}' is not because it contains an odd number of segments.`);const I=new Z(E);f.push(_l(o,I))}else{const E=U$(a,c,g);f.push(E)}}return new Ra(f,l)}(t._query,t.firestore._databaseId,i,e,r,n)}}function hS(t,e,r){if(typeof(r=re(r))=="string"){if(r==="")throw new M($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Wm(e)&&r.indexOf("/")!==-1)throw new M($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);const n=e.path.child(Ie.fromString(r));if(!Z.isDocumentKey(n))throw new M($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return _l(t,new Z(n))}if(r instanceof $e)return _l(t,r._key);throw new M($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jh(r)}.`)}function fS(t,e){if(!Array.isArray(t)||t.length===0)throw new M($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new M($.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Y$(t,e,r){if(!r.isEqual(e))throw new M($.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${r.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{convertValue(e,r="none"){switch(Ti(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,r);case 5:return e.stringValue;case 6:return this.convertBytes(Ls(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,r);case 10:return this.convertObject(e.mapValue,r);default:throw ee()}}convertObject(e,r){const n={};return Vi(e.fields,(i,s)=>{n[i]=this.convertValue(s,r)}),n}convertGeoPoint(e){return new Bh(He(e.latitude),He(e.longitude))}convertArray(e,r){return(e.values||[]).map(n=>this.convertValue(n,r))}convertServerTimestamp(e,r){switch(r){case"previous":const n=hR(e);return n==null?null:this.convertValue(n,r);case"estimate":return this.convertTimestamp(Oa(e));default:return null}}convertTimestamp(e){const r=kn(e);return new ot(r.seconds,r.nanos)}convertDocumentKey(e,r){const n=Ie.fromString(e);se(BR(n));const i=new Xs(n.get(1),n.get(3)),s=new Z(n.popFirst(5));return i.isEqual(r)||Ye(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(t,e,r){let n;return n=t?r&&(r.merge||r.mergeFields)?t.toFirestore(e,r):t.toFirestore(e):e,n}class j7 extends ky{constructor(e){super(),this.firestore=e}convertBytes(e){return new Br(e)}convertReference(e){const r=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B7{constructor(e,r){this._firestore=e,this._commitHandler=r,this._mutations=[],this._committed=!1,this._dataReader=Ki(e)}set(e,r,n){this._verifyNotCommitted();const i=bn(e,this._firestore),s=zh(i.converter,r,n),o=qh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,n);return this._mutations.push(o.toMutation(i._key,Qe.none())),this}update(e,r,n,...i){this._verifyNotCommitted();const s=bn(e,this._firestore);let o;return o=typeof(r=re(r))=="string"||r instanceof Nn?Cy(this._dataReader,"WriteBatch.update",s._key,r,n,i):Oy(this._dataReader,"WriteBatch.update",s._key,r),this._mutations.push(o.toMutation(s._key,Qe.exists(!0))),this}delete(e){this._verifyNotCommitted();const r=bn(e,this._firestore);return this._mutations=this._mutations.concat(new pc(r._key,Qe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new M($.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function bn(t,e){if((t=re(t)).firestore!==e)throw new M($.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V7(t){t=Ee(t,$e);const e=Ee(t.firestore,Ue);return A$(ht(e),t._key).then(r=>xy(e,t,r))}class Yi extends ky{constructor(e){super(),this.firestore=e}convertBytes(e){return new Br(e)}convertReference(e){const r=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,r)}}function q7(t){t=Ee(t,$e);const e=Ee(t.firestore,Ue),r=ht(e),n=new Yi(e);return t7(r,t._key).then(i=>new rn(e,n,t._key,i,new Jn(i!==null&&i.hasLocalMutations,!0),t.converter))}function W7(t){t=Ee(t,$e);const e=Ee(t.firestore,Ue);return A$(ht(e),t._key,{source:"server"}).then(r=>xy(e,t,r))}function z7(t){t=Ee(t,At);const e=Ee(t.firestore,Ue),r=ht(e),n=new Yi(e);return W$(t._query),O$(r,t._query).then(i=>new Pn(e,n,t,i))}function G7(t){t=Ee(t,At);const e=Ee(t.firestore,Ue),r=ht(e),n=new Yi(e);return r7(r,t._query).then(i=>new Pn(e,n,t,i))}function K7(t){t=Ee(t,At);const e=Ee(t.firestore,Ue),r=ht(e),n=new Yi(e);return O$(r,t._query,{source:"server"}).then(i=>new Pn(e,n,t,i))}function dS(t,e,r){t=Ee(t,$e);const n=Ee(t.firestore,Ue),i=zh(t.converter,e,r);return Ec(n,[qh(Ki(n),"setDoc",t._key,i,t.converter!==null,r).toMutation(t._key,Qe.none())])}function pS(t,e,r,...n){t=Ee(t,$e);const i=Ee(t.firestore,Ue),s=Ki(i);let o;return o=typeof(e=re(e))=="string"||e instanceof Nn?Cy(s,"updateDoc",t._key,e,r,n):Oy(s,"updateDoc",t._key,e),Ec(i,[o.toMutation(t._key,Qe.exists(!0))])}function H7(t){return Ec(Ee(t.firestore,Ue),[new pc(t._key,Qe.none())])}function Y7(t,e){const r=Ee(t.firestore,Ue),n=kl(t),i=zh(t.converter,e);return Ec(r,[qh(Ki(t.firestore),"addDoc",n._key,i,t.converter!==null,{}).toMutation(n._key,Qe.exists(!1))]).then(()=>n)}function X$(t,...e){var r,n,i;t=re(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||pv(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(pv(e[o])){const h=e[o];e[o]=(r=h.next)===null||r===void 0?void 0:r.bind(h),e[o+1]=(n=h.error)===null||n===void 0?void 0:n.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(t instanceof $e)u=Ee(t.firestore,Ue),l=yo(t._key.path),c={next:h=>{e[o]&&e[o](xy(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Ee(t,At);u=Ee(h.firestore,Ue),l=h._query;const f=new Yi(u);c={next:p=>{e[o]&&e[o](new Pn(u,f,h,p))},error:e[o+1],complete:e[o+2]},W$(t._query)}return function(h,f,p,g){const E=new Fh(g),I=new py(f,E,p);return h.asyncQueue.enqueueAndForget(async()=>hy(await Ys(h),I)),()=>{E.nc(),h.asyncQueue.enqueueAndForget(async()=>fy(await Ys(h),I))}}(ht(u),l,a,c)}function X7(t,e){return n7(ht(t=Ee(t,Ue)),pv(e)?e:{next:e})}function Ec(t,e){return function(r,n){const i=new st;return r.asyncQueue.enqueueAndForget(async()=>x9(await Sy(r),n,i)),i.promise}(ht(t),e)}function xy(t,e,r){const n=r.docs.get(e._key),i=new Yi(t);return new rn(t,i,e._key,n,new Jn(r.hasPendingWrites,r.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q7 extends class{constructor(e,r){this._firestore=e,this._transaction=r,this._dataReader=Ki(e)}get(e){const r=bn(e,this._firestore),n=new j7(this._firestore);return this._transaction.lookup([r._key]).then(i=>{if(!i||i.length!==1)return ee();const s=i[0];if(s.isFoundDocument())return new Pa(this._firestore,n,s.key,s,r.converter);if(s.isNoDocument())return new Pa(this._firestore,n,r._key,null,r.converter);throw ee()})}set(e,r,n){const i=bn(e,this._firestore),s=zh(i.converter,r,n),o=qh(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,n);return this._transaction.set(i._key,o),this}update(e,r,n,...i){const s=bn(e,this._firestore);let o;return o=typeof(r=re(r))=="string"||r instanceof Nn?Cy(this._dataReader,"Transaction.update",s._key,r,n,i):Oy(this._dataReader,"Transaction.update",s._key,r),this._transaction.update(s._key,o),this}delete(e){const r=bn(e,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,r){super(e,r),this._firestore=e}get(e){const r=bn(e,this._firestore),n=new Yi(this._firestore);return super.get(e).then(i=>new rn(this._firestore,n,r._key,i._document,new Jn(!1,!1),r.converter))}}function J7(t,e){return i7(ht(t=Ee(t,Ue)),r=>e(new Q7(t,r)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z7(){return new bc("deleteField")}function eZ(){return new Ay("serverTimestamp")}function tZ(...t){return new S7("arrayUnion",t)}function rZ(...t){return new T7("arrayRemove",t)}function nZ(t){return new A7("increment",t)}(function(t,e=!0){(function(r){mo=r})(Ui),bi(new Zr("firestore",(r,{options:n})=>{const i=r.getProvider("app").getImmediate(),s=new Ue(i,new k8(r.getProvider("auth-internal")),new D8(r.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s},"PUBLIC")),Lr(wI,"3.4.4",t),Lr(wI,"3.4.4","esm2017")})();const iZ="@firebase/firestore-compat",sZ="0.1.13";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new M("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(){if(typeof Uint8Array=="undefined")throw new M("unimplemented","Uint8Arrays are not available in this environment.")}function gS(){if(!F8())throw new M("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Da{constructor(e){this._delegate=e}static fromBase64String(e){return gS(),new Da(Br.fromBase64String(e))}static fromUint8Array(e){return vS(),new Da(Br.fromUint8Array(e))}toBase64(){return gS(),this._delegate.toBase64()}toUint8Array(){return vS(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(t){return oZ(t,["next","error","complete"])}function oZ(t,e){if(typeof t!="object"||t===null)return!1;const r=t;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aZ{enableIndexedDbPersistence(e,r){return d7(e._delegate,{forceOwnership:r})}enableMultiTabIndexedDbPersistence(e){return p7(e._delegate)}clearIndexedDbPersistence(e){return v7(e._delegate)}}class Q${constructor(e,r,n){this._delegate=r,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof Xs||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const r=this._delegate._getSettings();!e.merge&&r.host!==e.host&&Ta("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},r),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,r,n={}){c7(this._delegate,e,r,n)}enableNetwork(){return m7(this._delegate)}disableNetwork(){return y7(this._delegate)}enablePersistence(e){let r=!1,n=!1;return e&&(r=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,C$("synchronizeTabs",r,"experimentalForceOwningTab",n)),r?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return g7(this._delegate)}onSnapshotsInSync(e){return X7(this._delegate,e)}get app(){if(!this._appCompat)throw new M("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Qs(this,$$(this._delegate,e))}catch(r){throw Ct(r,"collection()","Firestore.collection()")}}doc(e){try{return new nr(this,kl(this._delegate,e))}catch(r){throw Ct(r,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Ot(this,u7(this._delegate,e))}catch(r){throw Ct(r,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return J7(this._delegate,r=>e(new J$(this,r)))}batch(){return ht(this._delegate),new Z$(new B7(this._delegate,e=>Ec(this._delegate,e)))}loadBundle(e){return w7(this._delegate,e)}namedQuery(e){return b7(this._delegate,e).then(r=>r?new Ot(this,r):null)}}class Gh extends ky{constructor(e){super();this.firestore=e}convertBytes(e){return new Da(new Br(e))}convertReference(e){const r=this.convertDocumentKey(e,this.firestore._databaseId);return nr.forKey(r,this.firestore,null)}}function cZ(t){O8(t)}class J${constructor(e,r){this._firestore=e,this._delegate=r,this._userDataWriter=new Gh(e)}get(e){const r=Zn(e);return this._delegate.get(r).then(n=>new La(this._firestore,new rn(this._firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,r.converter)))}set(e,r,n){const i=Zn(e);return n?(Ny("Transaction.set",n),this._delegate.set(i,r,n)):this._delegate.set(i,r),this}update(e,r,n,...i){const s=Zn(e);return arguments.length===2?this._delegate.update(s,r):this._delegate.update(s,r,n,...i),this}delete(e){const r=Zn(e);return this._delegate.delete(r),this}}class Z${constructor(e){this._delegate=e}set(e,r,n){const i=Zn(e);return n?(Ny("WriteBatch.set",n),this._delegate.set(i,r,n)):this._delegate.set(i,r),this}update(e,r,n,...i){const s=Zn(e);return arguments.length===2?this._delegate.update(s,r):this._delegate.update(s,r,n,...i),this}delete(e){const r=Zn(e);return this._delegate.delete(r),this}commit(){return this._delegate.commit()}}class Ri{constructor(e,r,n){this._firestore=e,this._userDataWriter=r,this._delegate=n}fromFirestore(e,r){const n=new na(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Ma(this._firestore,n),r!=null?r:{})}toFirestore(e,r){return r?this._delegate.toFirestore(e,r):this._delegate.toFirestore(e)}static getInstance(e,r){const n=Ri.INSTANCES;let i=n.get(e);i||(i=new WeakMap,n.set(e,i));let s=i.get(r);return s||(s=new Ri(e,new Gh(e),r),i.set(r,s)),s}}Ri.INSTANCES=new WeakMap;class nr{constructor(e,r){this.firestore=e,this._delegate=r,this._userDataWriter=new Gh(e)}static forPath(e,r,n){if(e.length%2!==0)throw new M("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new nr(r,new $e(r._delegate,n,new Z(e)))}static forKey(e,r,n){return new nr(r,new $e(r._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new Qs(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Qs(this.firestore,$$(this._delegate,e))}catch(r){throw Ct(r,"collection()","DocumentReference.collection()")}}isEqual(e){return e=re(e),e instanceof $e?k$(this._delegate,e):!1}set(e,r){r=Ny("DocumentReference.set",r);try{return r?dS(this._delegate,e,r):dS(this._delegate,e)}catch(n){throw Ct(n,"setDoc()","DocumentReference.set()")}}update(e,r,...n){try{return arguments.length===1?pS(this._delegate,e):pS(this._delegate,e,r,...n)}catch(i){throw Ct(i,"updateDoc()","DocumentReference.update()")}}delete(){return H7(this._delegate)}onSnapshot(...e){const r=ek(e),n=tk(e,i=>new La(this.firestore,new rn(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return X$(this._delegate,r,n)}get(e){let r;return(e==null?void 0:e.source)==="cache"?r=q7(this._delegate):(e==null?void 0:e.source)==="server"?r=W7(this._delegate):r=V7(this._delegate),r.then(n=>new La(this.firestore,new rn(this.firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,this._delegate.converter)))}withConverter(e){return new nr(this.firestore,e?this._delegate.withConverter(Ri.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ct(t,e,r){return t.message=t.message.replace(e,r),t}function ek(t){for(const e of t)if(typeof e=="object"&&!gv(e))return e;return{}}function tk(t,e){var r,n;let i;return gv(t[0])?i=t[0]:gv(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(r=i.error)===null||r===void 0?void 0:r.bind(i),complete:(n=i.complete)===null||n===void 0?void 0:n.bind(i)}}class La{constructor(e,r){this._firestore=e,this._delegate=r}get ref(){return new nr(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,r){return this._delegate.get(e,r)}isEqual(e){return q$(this._delegate,e._delegate)}}class Ma extends La{data(e){const r=this._delegate.data(e);return C8(r!==void 0),r}}class Ot{constructor(e,r){this.firestore=e,this._delegate=r,this._userDataWriter=new Gh(e)}where(e,r,n){try{return new Ot(this.firestore,gn(this._delegate,k7(e,r,n)))}catch(i){throw Ct(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,r){try{return new Ot(this.firestore,gn(this._delegate,N7(e,r)))}catch(n){throw Ct(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Ot(this.firestore,gn(this._delegate,P7(e)))}catch(r){throw Ct(r,"limit()","Query.limit()")}}limitToLast(e){try{return new Ot(this.firestore,gn(this._delegate,D7(e)))}catch(r){throw Ct(r,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Ot(this.firestore,gn(this._delegate,L7(...e)))}catch(r){throw Ct(r,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Ot(this.firestore,gn(this._delegate,M7(...e)))}catch(r){throw Ct(r,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Ot(this.firestore,gn(this._delegate,F7(...e)))}catch(r){throw Ct(r,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Ot(this.firestore,gn(this._delegate,U7(...e)))}catch(r){throw Ct(r,"endAt()","Query.endAt()")}}isEqual(e){return x$(this._delegate,e._delegate)}get(e){let r;return(e==null?void 0:e.source)==="cache"?r=G7(this._delegate):(e==null?void 0:e.source)==="server"?r=K7(this._delegate):r=z7(this._delegate),r.then(n=>new mv(this.firestore,new Pn(this.firestore._delegate,this._userDataWriter,this._delegate,n._snapshot)))}onSnapshot(...e){const r=ek(e),n=tk(e,i=>new mv(this.firestore,new Pn(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return X$(this._delegate,r,n)}withConverter(e){return new Ot(this.firestore,e?this._delegate.withConverter(Ri.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class uZ{constructor(e,r){this._firestore=e,this._delegate=r}get type(){return this._delegate.type}get doc(){return new Ma(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class mv{constructor(e,r){this._firestore=e,this._delegate=r}get query(){return new Ot(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Ma(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(r=>new uZ(this._firestore,r))}forEach(e,r){this._delegate.forEach(n=>{e.call(r,new Ma(this._firestore,n))})}isEqual(e){return q$(this._delegate,e._delegate)}}class Qs extends Ot{constructor(e,r){super(e,r);this.firestore=e,this._delegate=r}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new nr(this.firestore,e):null}doc(e){try{return e===void 0?new nr(this.firestore,kl(this._delegate)):new nr(this.firestore,kl(this._delegate,e))}catch(r){throw Ct(r,"doc()","CollectionReference.doc()")}}add(e){return Y7(this._delegate,e).then(r=>new nr(this.firestore,r))}isEqual(e){return k$(this._delegate,e._delegate)}withConverter(e){return new Qs(this.firestore,e?this._delegate.withConverter(Ri.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Zn(t){return Ee(t,$e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(...e){this._delegate=new Nn(...e)}static documentId(){return new Py(vt.keyField().canonicalString())}isEqual(e){return e=re(e),e instanceof Nn?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this._delegate=e}static serverTimestamp(){const e=eZ();return e._methodName="FieldValue.serverTimestamp",new Kn(e)}static delete(){const e=Z7();return e._methodName="FieldValue.delete",new Kn(e)}static arrayUnion(...e){const r=tZ(...e);return r._methodName="FieldValue.arrayUnion",new Kn(r)}static arrayRemove(...e){const r=rZ(...e);return r._methodName="FieldValue.arrayRemove",new Kn(r)}static increment(e){const r=nZ(e);return r._methodName="FieldValue.increment",new Kn(r)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lZ={Firestore:Q$,GeoPoint:Bh,Timestamp:ot,Blob:Da,Transaction:J$,WriteBatch:Z$,DocumentReference:nr,DocumentSnapshot:La,Query:Ot,QueryDocumentSnapshot:Ma,QuerySnapshot:mv,CollectionReference:Qs,FieldPath:Py,FieldValue:Kn,setLogLevel:cZ,CACHE_SIZE_UNLIMITED:f7};function hZ(t,e){t.INTERNAL.registerComponent(new Zr("firestore-compat",r=>{const n=r.getProvider("app-compat").getImmediate(),i=r.getProvider("firestore").getImmediate();return e(n,i)},"PUBLIC").setServiceProps(Object.assign({},lZ)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fZ(t){hZ(t,(e,r)=>new Q$(e,r,new aZ)),t.registerVersion(iZ,sZ)}fZ(Ya);/*!
  * vue-router v3.5.3
  * (c) 2021 Evan You
  * @license MIT
  */function fr(t,e){for(var r in e)t[r]=e[r];return t}var dZ=/[!'()*]/g,pZ=function(t){return"%"+t.charCodeAt(0).toString(16)},vZ=/%2C/g,us=function(t){return encodeURIComponent(t).replace(dZ,pZ).replace(vZ,",")};function yv(t){try{return decodeURIComponent(t)}catch{}return t}function gZ(t,e,r){e===void 0&&(e={});var n=r||mZ,i;try{i=n(t||"")}catch{i={}}for(var s in e){var o=e[s];i[s]=Array.isArray(o)?o.map(mS):mS(o)}return i}var mS=function(t){return t==null||typeof t=="object"?t:String(t)};function mZ(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t&&t.split("&").forEach(function(r){var n=r.replace(/\+/g," ").split("="),i=yv(n.shift()),s=n.length>0?yv(n.join("=")):null;e[i]===void 0?e[i]=s:Array.isArray(e[i])?e[i].push(s):e[i]=[e[i],s]}),e}function yZ(t){var e=t?Object.keys(t).map(function(r){var n=t[r];if(n===void 0)return"";if(n===null)return us(r);if(Array.isArray(n)){var i=[];return n.forEach(function(s){s!==void 0&&(s===null?i.push(us(r)):i.push(us(r)+"="+us(s)))}),i.join("&")}return us(r)+"="+us(n)}).filter(function(r){return r.length>0}).join("&"):null;return e?"?"+e:""}var Nl=/\/?$/;function Pl(t,e,r,n){var i=n&&n.options.stringifyQuery,s=e.query||{};try{s=wv(s)}catch{}var o={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:s,params:e.params||{},fullPath:yS(e,i),matched:t?wZ(t):[]};return r&&(o.redirectedFrom=yS(r,i)),Object.freeze(o)}function wv(t){if(Array.isArray(t))return t.map(wv);if(t&&typeof t=="object"){var e={};for(var r in t)e[r]=wv(t[r]);return e}else return t}var Bn=Pl(null,{path:"/"});function wZ(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function yS(t,e){var r=t.path,n=t.query;n===void 0&&(n={});var i=t.hash;i===void 0&&(i="");var s=e||yZ;return(r||"/")+s(n)+i}function rk(t,e,r){return e===Bn?t===e:e?t.path&&e.path?t.path.replace(Nl,"")===e.path.replace(Nl,"")&&(r||t.hash===e.hash&&xu(t.query,e.query)):t.name&&e.name?t.name===e.name&&(r||t.hash===e.hash&&xu(t.query,e.query)&&xu(t.params,e.params)):!1:!1}function xu(t,e){if(t===void 0&&(t={}),e===void 0&&(e={}),!t||!e)return t===e;var r=Object.keys(t).sort(),n=Object.keys(e).sort();return r.length!==n.length?!1:r.every(function(i,s){var o=t[i],a=n[s];if(a!==i)return!1;var c=e[i];return o==null||c==null?o===c:typeof o=="object"&&typeof c=="object"?xu(o,c):String(o)===String(c)})}function bZ(t,e){return t.path.replace(Nl,"/").indexOf(e.path.replace(Nl,"/"))===0&&(!e.hash||t.hash===e.hash)&&_Z(t.query,e.query)}function _Z(t,e){for(var r in e)if(!(r in t))return!1;return!0}function nk(t){for(var e=0;e<t.matched.length;e++){var r=t.matched[e];for(var n in r.instances){var i=r.instances[n],s=r.enteredCbs[n];if(!(!i||!s)){delete r.enteredCbs[n];for(var o=0;o<s.length;o++)i._isBeingDestroyed||s[o](i)}}}}var EZ={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,r){var n=r.props,i=r.children,s=r.parent,o=r.data;o.routerView=!0;for(var a=s.$createElement,c=n.name,u=s.$route,l=s._routerViewCache||(s._routerViewCache={}),h=0,f=!1;s&&s._routerRoot!==s;){var p=s.$vnode?s.$vnode.data:{};p.routerView&&h++,p.keepAlive&&s._directInactive&&s._inactive&&(f=!0),s=s.$parent}if(o.routerViewDepth=h,f){var g=l[c],E=g&&g.component;return E?(g.configProps&&wS(E,o,g.route,g.configProps),a(E,o,i)):a()}var I=u.matched[h],O=I&&I.components[c];if(!I||!O)return l[c]=null,a();l[c]={component:O},o.registerRouteInstance=function(q,G){var k=I.instances[c];(G&&k!==q||!G&&k===q)&&(I.instances[c]=G)},(o.hook||(o.hook={})).prepatch=function(q,G){I.instances[c]=G.componentInstance},o.hook.init=function(q){q.data.keepAlive&&q.componentInstance&&q.componentInstance!==I.instances[c]&&(I.instances[c]=q.componentInstance),nk(u)};var P=I.props&&I.props[c];return P&&(fr(l[c],{route:u,configProps:P}),wS(O,o,u,P)),a(O,o,i)}};function wS(t,e,r,n){var i=e.props=IZ(r,n);if(i){i=e.props=fr({},i);var s=e.attrs=e.attrs||{};for(var o in i)(!t.props||!(o in t.props))&&(s[o]=i[o],delete i[o])}}function IZ(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0}}function ik(t,e,r){var n=t.charAt(0);if(n==="/")return t;if(n==="?"||n==="#")return e+t;var i=e.split("/");(!r||!i[i.length-1])&&i.pop();for(var s=t.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];a===".."?i.pop():a!=="."&&i.push(a)}return i[0]!==""&&i.unshift(""),i.join("/")}function SZ(t){var e="",r="",n=t.indexOf("#");n>=0&&(e=t.slice(n),t=t.slice(0,n));var i=t.indexOf("?");return i>=0&&(r=t.slice(i+1),t=t.slice(0,i)),{path:t,query:r,hash:e}}function Tn(t){return t.replace(/\/+/g,"/")}var Dl=Array.isArray||function(t){return Object.prototype.toString.call(t)=="[object Array]"},So=ak,TZ=Dy,AZ=$Z,OZ=sk,CZ=ok,RZ=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function Dy(t,e){for(var r=[],n=0,i=0,s="",o=e&&e.delimiter||"/",a;(a=RZ.exec(t))!=null;){var c=a[0],u=a[1],l=a.index;if(s+=t.slice(i,l),i=l+c.length,u){s+=u[1];continue}var h=t[i],f=a[2],p=a[3],g=a[4],E=a[5],I=a[6],O=a[7];s&&(r.push(s),s="");var P=f!=null&&h!=null&&h!==f,q=I==="+"||I==="*",G=I==="?"||I==="*",k=a[2]||o,x=g||E;r.push({name:p||n++,prefix:f||"",delimiter:k,optional:G,repeat:q,partial:P,asterisk:!!O,pattern:x?NZ(x):O?".*":"[^"+Nu(k)+"]+?"})}return i<t.length&&(s+=t.substr(i)),s&&r.push(s),r}function $Z(t,e){return sk(Dy(t,e),e)}function kZ(t){return encodeURI(t).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function xZ(t){return encodeURI(t).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function sk(t,e){for(var r=new Array(t.length),n=0;n<t.length;n++)typeof t[n]=="object"&&(r[n]=new RegExp("^(?:"+t[n].pattern+")$",My(e)));return function(i,s){for(var o="",a=i||{},c=s||{},u=c.pretty?kZ:encodeURIComponent,l=0;l<t.length;l++){var h=t[l];if(typeof h=="string"){o+=h;continue}var f=a[h.name],p;if(f==null)if(h.optional){h.partial&&(o+=h.prefix);continue}else throw new TypeError('Expected "'+h.name+'" to be defined');if(Dl(f)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(f.length===0){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var g=0;g<f.length;g++){if(p=u(f[g]),!r[l].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(g===0?h.prefix:h.delimiter)+p}continue}if(p=h.asterisk?xZ(f):u(f),!r[l].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}return o}}function Nu(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function NZ(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function Ly(t,e){return t.keys=e,t}function My(t){return t&&t.sensitive?"":"i"}function PZ(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return Ly(t,e)}function DZ(t,e,r){for(var n=[],i=0;i<t.length;i++)n.push(ak(t[i],e,r).source);var s=new RegExp("(?:"+n.join("|")+")",My(r));return Ly(s,e)}function LZ(t,e,r){return ok(Dy(t,r),e,r)}function ok(t,e,r){Dl(e)||(r=e||r,e=[]),r=r||{};for(var n=r.strict,i=r.end!==!1,s="",o=0;o<t.length;o++){var a=t[o];if(typeof a=="string")s+=Nu(a);else{var c=Nu(a.prefix),u="(?:"+a.pattern+")";e.push(a),a.repeat&&(u+="(?:"+c+u+")*"),a.optional?a.partial?u=c+"("+u+")?":u="(?:"+c+"("+u+"))?":u=c+"("+u+")",s+=u}}var l=Nu(r.delimiter||"/"),h=s.slice(-l.length)===l;return n||(s=(h?s.slice(0,-l.length):s)+"(?:"+l+"(?=$))?"),i?s+="$":s+=n&&h?"":"(?="+l+"|$)",Ly(new RegExp("^"+s,My(r)),e)}function ak(t,e,r){return Dl(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?PZ(t,e):Dl(t)?DZ(t,e,r):LZ(t,e,r)}So.parse=TZ;So.compile=AZ;So.tokensToFunction=OZ;So.tokensToRegExp=CZ;var bS=Object.create(null);function Pu(t,e,r){e=e||{};try{var n=bS[t]||(bS[t]=So.compile(t));return typeof e.pathMatch=="string"&&(e[0]=e.pathMatch),n(e,{pretty:!0})}catch{return""}finally{delete e[0]}}function Fy(t,e,r,n){var i=typeof t=="string"?{path:t}:t;if(i._normalized)return i;if(i.name){i=fr({},t);var s=i.params;return s&&typeof s=="object"&&(i.params=fr({},s)),i}if(!i.path&&i.params&&e){i=fr({},i),i._normalized=!0;var o=fr(fr({},e.params),i.params);if(e.name)i.name=e.name,i.params=o;else if(e.matched.length){var a=e.matched[e.matched.length-1].path;i.path=Pu(a,o,"path "+e.path)}return i}var c=SZ(i.path||""),u=e&&e.path||"/",l=c.path?ik(c.path,u,r||i.append):u,h=gZ(c.query,i.query,n&&n.options.parseQuery),f=i.hash||c.hash;return f&&f.charAt(0)!=="#"&&(f="#"+f),{_normalized:!0,path:l,query:h,hash:f}}var MZ=[String,Object],FZ=[String,Array],_S=function(){},UZ={name:"RouterLink",props:{to:{type:MZ,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:FZ,default:"click"}},render:function(e){var r=this,n=this.$router,i=this.$route,s=n.resolve(this.to,i,this.append),o=s.location,a=s.route,c=s.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,f=l==null?"router-link-active":l,p=h==null?"router-link-exact-active":h,g=this.activeClass==null?f:this.activeClass,E=this.exactActiveClass==null?p:this.exactActiveClass,I=a.redirectedFrom?Pl(null,Fy(a.redirectedFrom),null,n):a;u[E]=rk(i,I,this.exactPath),u[g]=this.exact||this.exactPath?u[E]:bZ(i,I);var O=u[E]?this.ariaCurrentValue:null,P=function(T){ES(T)&&(r.replace?n.replace(o,_S):n.push(o,_S))},q={click:ES};Array.isArray(this.event)?this.event.forEach(function(T){q[T]=P}):q[this.event]=P;var G={class:u},k=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:P,isActive:u[g],isExactActive:u[E]});if(k){if(k.length===1)return k[0];if(k.length>1||!k.length)return k.length===0?e():e("span",{},k)}if(this.tag==="a")G.on=q,G.attrs={href:c,"aria-current":O};else{var x=ck(this.$slots.default);if(x){x.isStatic=!1;var w=x.data=fr({},x.data);w.on=w.on||{};for(var R in w.on){var H=w.on[R];R in q&&(w.on[R]=Array.isArray(H)?H:[H])}for(var ne in q)ne in w.on?w.on[ne].push(q[ne]):w.on[ne]=P;var we=x.data.attrs=fr({},x.data.attrs);we.href=c,we["aria-current"]=O}else G.on=q}return e(this.tag,G,this.$slots.default)}};function ES(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ck(t){if(t){for(var e,r=0;r<t.length;r++)if(e=t[r],e.tag==="a"||e.children&&(e=ck(e.children)))return e}}var Ll;function bv(t){if(!(bv.installed&&Ll===t)){bv.installed=!0,Ll=t;var e=function(i){return i!==void 0},r=function(i,s){var o=i.$options._parentVnode;e(o)&&e(o=o.data)&&e(o=o.registerRouteInstance)&&o(i,s)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,r(this,this)},destroyed:function(){r(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",EZ),t.component("RouterLink",UZ);var n=t.config.optionMergeStrategies;n.beforeRouteEnter=n.beforeRouteLeave=n.beforeRouteUpdate=n.created}}var Ic=typeof window!="undefined";function cu(t,e,r,n,i){var s=e||[],o=r||Object.create(null),a=n||Object.create(null);t.forEach(function(l){_v(s,o,a,l,i)});for(var c=0,u=s.length;c<u;c++)s[c]==="*"&&(s.push(s.splice(c,1)[0]),u--,c--);return{pathList:s,pathMap:o,nameMap:a}}function _v(t,e,r,n,i,s){var o=n.path,a=n.name,c=n.pathToRegexpOptions||{},u=BZ(o,i,c.strict);typeof n.caseSensitive=="boolean"&&(c.sensitive=n.caseSensitive);var l={path:u,regex:jZ(u,c),components:n.components||{default:n.component},alias:n.alias?typeof n.alias=="string"?[n.alias]:n.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:s,redirect:n.redirect,beforeEnter:n.beforeEnter,meta:n.meta||{},props:n.props==null?{}:n.components?n.props:{default:n.props}};if(n.children&&n.children.forEach(function(E){var I=s?Tn(s+"/"+E.path):void 0;_v(t,e,r,E,l,I)}),e[l.path]||(t.push(l.path),e[l.path]=l),n.alias!==void 0)for(var h=Array.isArray(n.alias)?n.alias:[n.alias],f=0;f<h.length;++f){var p=h[f],g={path:p,children:n.children};_v(t,e,r,g,i,l.path||"/")}a&&(r[a]||(r[a]=l))}function jZ(t,e){var r=So(t,[],e);return r}function BZ(t,e,r){return r||(t=t.replace(/\/$/,"")),t[0]==="/"||e==null?t:Tn(e.path+"/"+t)}function VZ(t,e){var r=cu(t),n=r.pathList,i=r.pathMap,s=r.nameMap;function o(p){cu(p,n,i,s)}function a(p,g){var E=typeof p!="object"?s[p]:void 0;cu([g||p],n,i,s,E),E&&E.alias.length&&cu(E.alias.map(function(I){return{path:I,children:[g]}}),n,i,s,E)}function c(){return n.map(function(p){return i[p]})}function u(p,g,E){var I=Fy(p,g,!1,e),O=I.name;if(O){var P=s[O];if(!P)return f(null,I);var q=P.regex.keys.filter(function(R){return!R.optional}).map(function(R){return R.name});if(typeof I.params!="object"&&(I.params={}),g&&typeof g.params=="object")for(var G in g.params)!(G in I.params)&&q.indexOf(G)>-1&&(I.params[G]=g.params[G]);return I.path=Pu(P.path,I.params),f(P,I,E)}else if(I.path){I.params={};for(var k=0;k<n.length;k++){var x=n[k],w=i[x];if(qZ(w.regex,I.path,I.params))return f(w,I,E)}}return f(null,I)}function l(p,g){var E=p.redirect,I=typeof E=="function"?E(Pl(p,g,null,e)):E;if(typeof I=="string"&&(I={path:I}),!I||typeof I!="object")return f(null,g);var O=I,P=O.name,q=O.path,G=g.query,k=g.hash,x=g.params;if(G=O.hasOwnProperty("query")?O.query:G,k=O.hasOwnProperty("hash")?O.hash:k,x=O.hasOwnProperty("params")?O.params:x,P)return s[P],u({_normalized:!0,name:P,query:G,hash:k,params:x},void 0,g);if(q){var w=WZ(q,p),R=Pu(w,x);return u({_normalized:!0,path:R,query:G,hash:k},void 0,g)}else return f(null,g)}function h(p,g,E){var I=Pu(E,g.params),O=u({_normalized:!0,path:I});if(O){var P=O.matched,q=P[P.length-1];return g.params=O.params,f(q,g)}return f(null,g)}function f(p,g,E){return p&&p.redirect?l(p,E||g):p&&p.matchAs?h(p,g,p.matchAs):Pl(p,g,E,e)}return{match:u,addRoute:a,getRoutes:c,addRoutes:o}}function qZ(t,e,r){var n=e.match(t);if(n){if(!r)return!0}else return!1;for(var i=1,s=n.length;i<s;++i){var o=t.keys[i-1];o&&(r[o.name||"pathMatch"]=typeof n[i]=="string"?yv(n[i]):n[i])}return!0}function WZ(t,e){return ik(t,e.parent?e.parent.path:"/",!0)}var zZ=Ic&&window.performance&&window.performance.now?window.performance:Date;function uk(){return zZ.now().toFixed(3)}var lk=uk();function Kh(){return lk}function hk(t){return lk=t}var fk=Object.create(null);function dk(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),r=fr({},window.history.state);return r.key=Kh(),window.history.replaceState(r,"",e),window.addEventListener("popstate",IS),function(){window.removeEventListener("popstate",IS)}}function An(t,e,r,n){if(!!t.app){var i=t.options.scrollBehavior;!i||t.app.$nextTick(function(){var s=GZ(),o=i.call(t,e,r,n?s:null);!o||(typeof o.then=="function"?o.then(function(a){AS(a,s)}).catch(function(a){}):AS(o,s))})}}function pk(){var t=Kh();t&&(fk[t]={x:window.pageXOffset,y:window.pageYOffset})}function IS(t){pk(),t.state&&t.state.key&&hk(t.state.key)}function GZ(){var t=Kh();if(t)return fk[t]}function KZ(t,e){var r=document.documentElement,n=r.getBoundingClientRect(),i=t.getBoundingClientRect();return{x:i.left-n.left-e.x,y:i.top-n.top-e.y}}function SS(t){return Js(t.x)||Js(t.y)}function TS(t){return{x:Js(t.x)?t.x:window.pageXOffset,y:Js(t.y)?t.y:window.pageYOffset}}function HZ(t){return{x:Js(t.x)?t.x:0,y:Js(t.y)?t.y:0}}function Js(t){return typeof t=="number"}var YZ=/^#\d/;function AS(t,e){var r=typeof t=="object";if(r&&typeof t.selector=="string"){var n=YZ.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(n){var i=t.offset&&typeof t.offset=="object"?t.offset:{};i=HZ(i),e=KZ(n,i)}else SS(t)&&(e=TS(t))}else r&&SS(t)&&(e=TS(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var On=Ic&&function(){var t=window.navigator.userAgent;return(t.indexOf("Android 2.")!==-1||t.indexOf("Android 4.0")!==-1)&&t.indexOf("Mobile Safari")!==-1&&t.indexOf("Chrome")===-1&&t.indexOf("Windows Phone")===-1?!1:window.history&&typeof window.history.pushState=="function"}();function Ml(t,e){pk();var r=window.history;try{if(e){var n=fr({},r.state);n.key=Kh(),r.replaceState(n,"",t)}else r.pushState({key:hk(uk())},"",t)}catch{window.location[e?"replace":"assign"](t)}}function Ev(t){Ml(t,!0)}function OS(t,e,r){var n=function(i){i>=t.length?r():t[i]?e(t[i],function(){n(i+1)}):n(i+1)};n(0)}var Xi={redirected:2,aborted:4,cancelled:8,duplicated:16};function XZ(t,e){return Hh(t,e,Xi.redirected,'Redirected when going from "'+t.fullPath+'" to "'+eee(e)+'" via a navigation guard.')}function QZ(t,e){var r=Hh(t,e,Xi.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return r.name="NavigationDuplicated",r}function CS(t,e){return Hh(t,e,Xi.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function JZ(t,e){return Hh(t,e,Xi.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function Hh(t,e,r,n){var i=new Error(n);return i._isRouter=!0,i.from=t,i.to=e,i.type=r,i}var ZZ=["params","query","hash"];function eee(t){if(typeof t=="string")return t;if("path"in t)return t.path;var e={};return ZZ.forEach(function(r){r in t&&(e[r]=t[r])}),JSON.stringify(e,null,2)}function Fl(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Yh(t,e){return Fl(t)&&t._isRouter&&(e==null||t.type===e)}function tee(t){return function(e,r,n){var i=!1,s=0,o=null;vk(t,function(a,c,u,l){if(typeof a=="function"&&a.cid===void 0){i=!0,s++;var h=RS(function(E){nee(E)&&(E=E.default),a.resolved=typeof E=="function"?E:Ll.extend(E),u.components[l]=E,s--,s<=0&&n()}),f=RS(function(E){var I="Failed to resolve async component "+l+": "+E;o||(o=Fl(E)?E:new Error(I),n(o))}),p;try{p=a(h,f)}catch(E){f(E)}if(p)if(typeof p.then=="function")p.then(h,f);else{var g=p.component;g&&typeof g.then=="function"&&g.then(h,f)}}}),i||n()}}function vk(t,e){return gk(t.map(function(r){return Object.keys(r.components).map(function(n){return e(r.components[n],r.instances[n],r,n)})}))}function gk(t){return Array.prototype.concat.apply([],t)}var ree=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol";function nee(t){return t.__esModule||ree&&t[Symbol.toStringTag]==="Module"}function RS(t){var e=!1;return function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}var Sr=function(e,r){this.router=e,this.base=iee(r),this.current=Bn,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};Sr.prototype.listen=function(e){this.cb=e};Sr.prototype.onReady=function(e,r){this.ready?e():(this.readyCbs.push(e),r&&this.readyErrorCbs.push(r))};Sr.prototype.onError=function(e){this.errorCbs.push(e)};Sr.prototype.transitionTo=function(e,r,n){var i=this,s;try{s=this.router.match(e,this.current)}catch(a){throw this.errorCbs.forEach(function(c){c(a)}),a}var o=this.current;this.confirmTransition(s,function(){i.updateRoute(s),r&&r(s),i.ensureURL(),i.router.afterHooks.forEach(function(a){a&&a(s,o)}),i.ready||(i.ready=!0,i.readyCbs.forEach(function(a){a(s)}))},function(a){n&&n(a),a&&!i.ready&&(!Yh(a,Xi.redirected)||o!==Bn)&&(i.ready=!0,i.readyErrorCbs.forEach(function(c){c(a)}))})};Sr.prototype.confirmTransition=function(e,r,n){var i=this,s=this.current;this.pending=e;var o=function(E){!Yh(E)&&Fl(E)&&(i.errorCbs.length?i.errorCbs.forEach(function(I){I(E)}):console.error(E)),n&&n(E)},a=e.matched.length-1,c=s.matched.length-1;if(rk(e,s)&&a===c&&e.matched[a]===s.matched[c])return this.ensureURL(),e.hash&&An(this.router,s,e,!1),o(QZ(s,e));var u=see(this.current.matched,e.matched),l=u.updated,h=u.deactivated,f=u.activated,p=[].concat(aee(h),this.router.beforeHooks,cee(l),f.map(function(E){return E.beforeEnter}),tee(f)),g=function(E,I){if(i.pending!==e)return o(CS(s,e));try{E(e,s,function(O){O===!1?(i.ensureURL(!0),o(JZ(s,e))):Fl(O)?(i.ensureURL(!0),o(O)):typeof O=="string"||typeof O=="object"&&(typeof O.path=="string"||typeof O.name=="string")?(o(XZ(s,e)),typeof O=="object"&&O.replace?i.replace(O):i.push(O)):I(O)})}catch(O){o(O)}};OS(p,g,function(){var E=uee(f),I=E.concat(i.router.resolveHooks);OS(I,g,function(){if(i.pending!==e)return o(CS(s,e));i.pending=null,r(e),i.router.app&&i.router.app.$nextTick(function(){nk(e)})})})};Sr.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)};Sr.prototype.setupListeners=function(){};Sr.prototype.teardown=function(){this.listeners.forEach(function(e){e()}),this.listeners=[],this.current=Bn,this.pending=null};function iee(t){if(!t)if(Ic){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return t.charAt(0)!=="/"&&(t="/"+t),t.replace(/\/$/,"")}function see(t,e){var r,n=Math.max(t.length,e.length);for(r=0;r<n&&t[r]===e[r];r++);return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}function Uy(t,e,r,n){var i=vk(t,function(s,o,a,c){var u=oee(s,e);if(u)return Array.isArray(u)?u.map(function(l){return r(l,o,a,c)}):r(u,o,a,c)});return gk(n?i.reverse():i)}function oee(t,e){return typeof t!="function"&&(t=Ll.extend(t)),t.options[e]}function aee(t){return Uy(t,"beforeRouteLeave",mk,!0)}function cee(t){return Uy(t,"beforeRouteUpdate",mk)}function mk(t,e){if(e)return function(){return t.apply(e,arguments)}}function uee(t){return Uy(t,"beforeRouteEnter",function(e,r,n,i){return lee(e,n,i)})}function lee(t,e,r){return function(i,s,o){return t(i,s,function(a){typeof a=="function"&&(e.enteredCbs[r]||(e.enteredCbs[r]=[]),e.enteredCbs[r].push(a)),o(a)})}}var yk=function(t){function e(r,n){t.call(this,r,n),this._startLocation=Ho(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var n=this;if(!(this.listeners.length>0)){var i=this.router,s=i.options.scrollBehavior,o=On&&s;o&&this.listeners.push(dk());var a=function(){var c=n.current,u=Ho(n.base);n.current===Bn&&u===n._startLocation||n.transitionTo(u,function(l){o&&An(i,l,c,!0)})};window.addEventListener("popstate",a),this.listeners.push(function(){window.removeEventListener("popstate",a)})}},e.prototype.go=function(n){window.history.go(n)},e.prototype.push=function(n,i,s){var o=this,a=this,c=a.current;this.transitionTo(n,function(u){Ml(Tn(o.base+u.fullPath)),An(o.router,u,c,!1),i&&i(u)},s)},e.prototype.replace=function(n,i,s){var o=this,a=this,c=a.current;this.transitionTo(n,function(u){Ev(Tn(o.base+u.fullPath)),An(o.router,u,c,!1),i&&i(u)},s)},e.prototype.ensureURL=function(n){if(Ho(this.base)!==this.current.fullPath){var i=Tn(this.base+this.current.fullPath);n?Ml(i):Ev(i)}},e.prototype.getCurrentLocation=function(){return Ho(this.base)},e}(Sr);function Ho(t){var e=window.location.pathname,r=e.toLowerCase(),n=t.toLowerCase();return t&&(r===n||r.indexOf(Tn(n+"/"))===0)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var wk=function(t){function e(r,n,i){t.call(this,r,n),!(i&&hee(this.base))&&$S()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var n=this;if(!(this.listeners.length>0)){var i=this.router,s=i.options.scrollBehavior,o=On&&s;o&&this.listeners.push(dk());var a=function(){var u=n.current;!$S()||n.transitionTo(Du(),function(l){o&&An(n.router,l,u,!0),On||Lu(l.fullPath)})},c=On?"popstate":"hashchange";window.addEventListener(c,a),this.listeners.push(function(){window.removeEventListener(c,a)})}},e.prototype.push=function(n,i,s){var o=this,a=this,c=a.current;this.transitionTo(n,function(u){kS(u.fullPath),An(o.router,u,c,!1),i&&i(u)},s)},e.prototype.replace=function(n,i,s){var o=this,a=this,c=a.current;this.transitionTo(n,function(u){Lu(u.fullPath),An(o.router,u,c,!1),i&&i(u)},s)},e.prototype.go=function(n){window.history.go(n)},e.prototype.ensureURL=function(n){var i=this.current.fullPath;Du()!==i&&(n?kS(i):Lu(i))},e.prototype.getCurrentLocation=function(){return Du()},e}(Sr);function hee(t){var e=Ho(t);if(!/^\/#/.test(e))return window.location.replace(Tn(t+"/#"+e)),!0}function $S(){var t=Du();return t.charAt(0)==="/"?!0:(Lu("/"+t),!1)}function Du(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function Iv(t){var e=window.location.href,r=e.indexOf("#"),n=r>=0?e.slice(0,r):e;return n+"#"+t}function kS(t){On?Ml(Iv(t)):window.location.hash=t}function Lu(t){On?Ev(Iv(t)):window.location.replace(Iv(t))}var fee=function(t){function e(r,n){t.call(this,r,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(n,i,s){var o=this;this.transitionTo(n,function(a){o.stack=o.stack.slice(0,o.index+1).concat(a),o.index++,i&&i(a)},s)},e.prototype.replace=function(n,i,s){var o=this;this.transitionTo(n,function(a){o.stack=o.stack.slice(0,o.index).concat(a),i&&i(a)},s)},e.prototype.go=function(n){var i=this,s=this.index+n;if(!(s<0||s>=this.stack.length)){var o=this.stack[s];this.confirmTransition(o,function(){var a=i.current;i.index=s,i.updateRoute(o),i.router.afterHooks.forEach(function(c){c&&c(o,a)})},function(a){Yh(a,Xi.duplicated)&&(i.index=s)})}},e.prototype.getCurrentLocation=function(){var n=this.stack[this.stack.length-1];return n?n.fullPath:"/"},e.prototype.ensureURL=function(){},e}(Sr),xe=function(e){e===void 0&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=VZ(e.routes||[],this);var r=e.mode||"hash";switch(this.fallback=r==="history"&&!On&&e.fallback!==!1,this.fallback&&(r="hash"),Ic||(r="abstract"),this.mode=r,r){case"history":this.history=new yk(this,e.base);break;case"hash":this.history=new wk(this,e.base,this.fallback);break;case"abstract":this.history=new fee(this,e.base);break}},bk={currentRoute:{configurable:!0}};xe.prototype.match=function(e,r,n){return this.matcher.match(e,r,n)};bk.currentRoute.get=function(){return this.history&&this.history.current};xe.prototype.init=function(e){var r=this;if(this.apps.push(e),e.$once("hook:destroyed",function(){var o=r.apps.indexOf(e);o>-1&&r.apps.splice(o,1),r.app===e&&(r.app=r.apps[0]||null),r.app||r.history.teardown()}),!this.app){this.app=e;var n=this.history;if(n instanceof yk||n instanceof wk){var i=function(o){var a=n.current,c=r.options.scrollBehavior,u=On&&c;u&&"fullPath"in o&&An(r,o,a,!1)},s=function(o){n.setupListeners(),i(o)};n.transitionTo(n.getCurrentLocation(),s,s)}n.listen(function(o){r.apps.forEach(function(a){a._route=o})})}};xe.prototype.beforeEach=function(e){return jy(this.beforeHooks,e)};xe.prototype.beforeResolve=function(e){return jy(this.resolveHooks,e)};xe.prototype.afterEach=function(e){return jy(this.afterHooks,e)};xe.prototype.onReady=function(e,r){this.history.onReady(e,r)};xe.prototype.onError=function(e){this.history.onError(e)};xe.prototype.push=function(e,r,n){var i=this;if(!r&&!n&&typeof Promise!="undefined")return new Promise(function(s,o){i.history.push(e,s,o)});this.history.push(e,r,n)};xe.prototype.replace=function(e,r,n){var i=this;if(!r&&!n&&typeof Promise!="undefined")return new Promise(function(s,o){i.history.replace(e,s,o)});this.history.replace(e,r,n)};xe.prototype.go=function(e){this.history.go(e)};xe.prototype.back=function(){this.go(-1)};xe.prototype.forward=function(){this.go(1)};xe.prototype.getMatchedComponents=function(e){var r=e?e.matched?e:this.resolve(e).route:this.currentRoute;return r?[].concat.apply([],r.matched.map(function(n){return Object.keys(n.components).map(function(i){return n.components[i]})})):[]};xe.prototype.resolve=function(e,r,n){r=r||this.history.current;var i=Fy(e,r,n,this),s=this.match(i,r),o=s.redirectedFrom||s.fullPath,a=this.history.base,c=dee(a,o,this.mode);return{location:i,route:s,href:c,normalizedTo:i,resolved:s}};xe.prototype.getRoutes=function(){return this.matcher.getRoutes()};xe.prototype.addRoute=function(e,r){this.matcher.addRoute(e,r),this.history.current!==Bn&&this.history.transitionTo(this.history.getCurrentLocation())};xe.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==Bn&&this.history.transitionTo(this.history.getCurrentLocation())};Object.defineProperties(xe.prototype,bk);function jy(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}function dee(t,e,r){var n=r==="hash"?"#"+e:e;return t?Tn(t+"/"+n):n}xe.install=bv;xe.version="3.5.3";xe.isNavigationFailure=Yh;xe.NavigationFailureType=Xi;xe.START_LOCATION=Bn;Ic&&window.Vue&&window.Vue.use(xe);var ste=xe;/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */function pee(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:n});else{var r=t.prototype._init;t.prototype._init=function(i){i===void 0&&(i={}),i.init=i.init?[n].concat(i.init):n,r.call(this,i)}}function n(){var i=this.$options;i.store?this.$store=typeof i.store=="function"?i.store():i.store:i.parent&&i.parent.$store&&(this.$store=i.parent.$store)}}var vee=typeof window!="undefined"?window:typeof global!="undefined"?global:{},ls=vee.__VUE_DEVTOOLS_GLOBAL_HOOK__;function gee(t){!ls||(t._devtoolHook=ls,ls.emit("vuex:init",t),ls.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(e,r){ls.emit("vuex:mutation",e,r)},{prepend:!0}),t.subscribeAction(function(e,r){ls.emit("vuex:action",e,r)},{prepend:!0}))}function mee(t,e){return t.filter(e)[0]}function Sv(t,e){if(e===void 0&&(e=[]),t===null||typeof t!="object")return t;var r=mee(e,function(i){return i.original===t});if(r)return r.copy;var n=Array.isArray(t)?[]:{};return e.push({original:t,copy:n}),Object.keys(t).forEach(function(i){n[i]=Sv(t[i],e)}),n}function To(t,e){Object.keys(t).forEach(function(r){return e(t[r],r)})}function _k(t){return t!==null&&typeof t=="object"}function yee(t){return t&&typeof t.then=="function"}function wee(t,e){return function(){return t(e)}}var Tr=function(e,r){this.runtime=r,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=(typeof n=="function"?n():n)||{}},Ek={namespaced:{configurable:!0}};Ek.namespaced.get=function(){return!!this._rawModule.namespaced};Tr.prototype.addChild=function(e,r){this._children[e]=r};Tr.prototype.removeChild=function(e){delete this._children[e]};Tr.prototype.getChild=function(e){return this._children[e]};Tr.prototype.hasChild=function(e){return e in this._children};Tr.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Tr.prototype.forEachChild=function(e){To(this._children,e)};Tr.prototype.forEachGetter=function(e){this._rawModule.getters&&To(this._rawModule.getters,e)};Tr.prototype.forEachAction=function(e){this._rawModule.actions&&To(this._rawModule.actions,e)};Tr.prototype.forEachMutation=function(e){this._rawModule.mutations&&To(this._rawModule.mutations,e)};Object.defineProperties(Tr.prototype,Ek);var Qi=function(e){this.register([],e,!1)};Qi.prototype.get=function(e){return e.reduce(function(r,n){return r.getChild(n)},this.root)};Qi.prototype.getNamespace=function(e){var r=this.root;return e.reduce(function(n,i){return r=r.getChild(i),n+(r.namespaced?i+"/":"")},"")};Qi.prototype.update=function(e){Ik([],this.root,e)};Qi.prototype.register=function(e,r,n){var i=this;n===void 0&&(n=!0);var s=new Tr(r,n);if(e.length===0)this.root=s;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],s)}r.modules&&To(r.modules,function(a,c){i.register(e.concat(c),a,n)})};Qi.prototype.unregister=function(e){var r=this.get(e.slice(0,-1)),n=e[e.length-1],i=r.getChild(n);!i||!i.runtime||r.removeChild(n)};Qi.prototype.isRegistered=function(e){var r=this.get(e.slice(0,-1)),n=e[e.length-1];return r?r.hasChild(n):!1};function Ik(t,e,r){if(e.update(r),r.modules)for(var n in r.modules){if(!e.getChild(n))return;Ik(t.concat(n),e.getChild(n),r.modules[n])}}var Ft,er=function(e){var r=this;e===void 0&&(e={}),!Ft&&typeof window!="undefined"&&window.Vue&&Ak(window.Vue);var n=e.plugins;n===void 0&&(n=[]);var i=e.strict;i===void 0&&(i=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Qi(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new Ft,this._makeLocalGettersCache=Object.create(null);var s=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(f,p){return a.call(s,f,p)},this.commit=function(f,p,g){return c.call(s,f,p,g)},this.strict=i;var u=this._modules.root.state;Xh(this,u,[],this._modules.root),Vy(this,u),n.forEach(function(h){return h(r)});var l=e.devtools!==void 0?e.devtools:Ft.config.devtools;l&&gee(this)},By={state:{configurable:!0}};By.state.get=function(){return this._vm._data.$$state};By.state.set=function(t){};er.prototype.commit=function(e,r,n){var i=this,s=Ul(e,r,n),o=s.type,a=s.payload,c={type:o,payload:a},u=this._mutations[o];!u||(this._withCommit(function(){u.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(l){return l(c,i.state)}))};er.prototype.dispatch=function(e,r){var n=this,i=Ul(e,r),s=i.type,o=i.payload,a={type:s,payload:o},c=this._actions[s];if(!!c){try{this._actionSubscribers.slice().filter(function(l){return l.before}).forEach(function(l){return l.before(a,n.state)})}catch{}var u=c.length>1?Promise.all(c.map(function(l){return l(o)})):c[0](o);return new Promise(function(l,h){u.then(function(f){try{n._actionSubscribers.filter(function(p){return p.after}).forEach(function(p){return p.after(a,n.state)})}catch{}l(f)},function(f){try{n._actionSubscribers.filter(function(p){return p.error}).forEach(function(p){return p.error(a,n.state,f)})}catch{}h(f)})})}};er.prototype.subscribe=function(e,r){return Sk(e,this._subscribers,r)};er.prototype.subscribeAction=function(e,r){var n=typeof e=="function"?{before:e}:e;return Sk(n,this._actionSubscribers,r)};er.prototype.watch=function(e,r,n){var i=this;return this._watcherVM.$watch(function(){return e(i.state,i.getters)},r,n)};er.prototype.replaceState=function(e){var r=this;this._withCommit(function(){r._vm._data.$$state=e})};er.prototype.registerModule=function(e,r,n){n===void 0&&(n={}),typeof e=="string"&&(e=[e]),this._modules.register(e,r),Xh(this,this.state,e,this._modules.get(e),n.preserveState),Vy(this,this.state)};er.prototype.unregisterModule=function(e){var r=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var n=qy(r.state,e.slice(0,-1));Ft.delete(n,e[e.length-1])}),Tk(this)};er.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};er.prototype.hotUpdate=function(e){this._modules.update(e),Tk(this,!0)};er.prototype._withCommit=function(e){var r=this._committing;this._committing=!0,e(),this._committing=r};Object.defineProperties(er.prototype,By);function Sk(t,e,r){return e.indexOf(t)<0&&(r&&r.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function Tk(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var r=t.state;Xh(t,r,[],t._modules.root,!0),Vy(t,r,e)}function Vy(t,e,r){var n=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,s={};To(i,function(a,c){s[c]=wee(a,t),Object.defineProperty(t.getters,c,{get:function(){return t._vm[c]},enumerable:!0})});var o=Ft.config.silent;Ft.config.silent=!0,t._vm=new Ft({data:{$$state:e},computed:s}),Ft.config.silent=o,t.strict&&Tee(t),n&&(r&&t._withCommit(function(){n._data.$$state=null}),Ft.nextTick(function(){return n.$destroy()}))}function Xh(t,e,r,n,i){var s=!r.length,o=t._modules.getNamespace(r);if(n.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=n),!s&&!i){var a=qy(e,r.slice(0,-1)),c=r[r.length-1];t._withCommit(function(){Ft.set(a,c,n.state)})}var u=n.context=bee(t,o,r);n.forEachMutation(function(l,h){var f=o+h;Eee(t,f,l,u)}),n.forEachAction(function(l,h){var f=l.root?h:o+h,p=l.handler||l;Iee(t,f,p,u)}),n.forEachGetter(function(l,h){var f=o+h;See(t,f,l,u)}),n.forEachChild(function(l,h){Xh(t,e,r.concat(h),l,i)})}function bee(t,e,r){var n=e==="",i={dispatch:n?t.dispatch:function(s,o,a){var c=Ul(s,o,a),u=c.payload,l=c.options,h=c.type;return(!l||!l.root)&&(h=e+h),t.dispatch(h,u)},commit:n?t.commit:function(s,o,a){var c=Ul(s,o,a),u=c.payload,l=c.options,h=c.type;(!l||!l.root)&&(h=e+h),t.commit(h,u,l)}};return Object.defineProperties(i,{getters:{get:n?function(){return t.getters}:function(){return _ee(t,e)}},state:{get:function(){return qy(t.state,r)}}}),i}function _ee(t,e){if(!t._makeLocalGettersCache[e]){var r={},n=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,n)===e){var s=i.slice(n);Object.defineProperty(r,s,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=r}return t._makeLocalGettersCache[e]}function Eee(t,e,r,n){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(o){r.call(t,n.state,o)})}function Iee(t,e,r,n){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(o){var a=r.call(t,{dispatch:n.dispatch,commit:n.commit,getters:n.getters,state:n.state,rootGetters:t.getters,rootState:t.state},o);return yee(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function See(t,e,r,n){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(s){return r(n.state,n.getters,s.state,s.getters)})}function Tee(t){t._vm.$watch(function(){return this._data.$$state},function(){},{deep:!0,sync:!0})}function qy(t,e){return e.reduce(function(r,n){return r[n]},t)}function Ul(t,e,r){return _k(t)&&t.type&&(r=e,e=t,t=t.type),{type:t,payload:e,options:r}}function Ak(t){Ft&&t===Ft||(Ft=t,pee(Ft))}var Ok=Jh(function(t,e){var r={};return Qh(e).forEach(function(n){var i=n.key,s=n.val;r[i]=function(){var a=this.$store.state,c=this.$store.getters;if(t){var u=Zh(this.$store,"mapState",t);if(!u)return;a=u.context.state,c=u.context.getters}return typeof s=="function"?s.call(this,a,c):a[s]},r[i].vuex=!0}),r}),Ck=Jh(function(t,e){var r={};return Qh(e).forEach(function(n){var i=n.key,s=n.val;r[i]=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];var u=this.$store.commit;if(t){var l=Zh(this.$store,"mapMutations",t);if(!l)return;u=l.context.commit}return typeof s=="function"?s.apply(this,[u].concat(a)):u.apply(this.$store,[s].concat(a))}}),r}),Rk=Jh(function(t,e){var r={};return Qh(e).forEach(function(n){var i=n.key,s=n.val;s=t+s,r[i]=function(){if(!(t&&!Zh(this.$store,"mapGetters",t)))return this.$store.getters[s]},r[i].vuex=!0}),r}),$k=Jh(function(t,e){var r={};return Qh(e).forEach(function(n){var i=n.key,s=n.val;r[i]=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];var u=this.$store.dispatch;if(t){var l=Zh(this.$store,"mapActions",t);if(!l)return;u=l.context.dispatch}return typeof s=="function"?s.apply(this,[u].concat(a)):u.apply(this.$store,[s].concat(a))}}),r}),Aee=function(t){return{mapState:Ok.bind(null,t),mapGetters:Rk.bind(null,t),mapMutations:Ck.bind(null,t),mapActions:$k.bind(null,t)}};function Qh(t){return Oee(t)?Array.isArray(t)?t.map(function(e){return{key:e,val:e}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}}):[]}function Oee(t){return Array.isArray(t)||_k(t)}function Jh(t){return function(e,r){return typeof e!="string"?(r=e,e=""):e.charAt(e.length-1)!=="/"&&(e+="/"),t(e,r)}}function Zh(t,e,r){var n=t._modulesNamespaceMap[r];return n}function Cee(t){t===void 0&&(t={});var e=t.collapsed;e===void 0&&(e=!0);var r=t.filter;r===void 0&&(r=function(l,h,f){return!0});var n=t.transformer;n===void 0&&(n=function(l){return l});var i=t.mutationTransformer;i===void 0&&(i=function(l){return l});var s=t.actionFilter;s===void 0&&(s=function(l,h){return!0});var o=t.actionTransformer;o===void 0&&(o=function(l){return l});var a=t.logMutations;a===void 0&&(a=!0);var c=t.logActions;c===void 0&&(c=!0);var u=t.logger;return u===void 0&&(u=console),function(l){var h=Sv(l.state);typeof u!="undefined"&&(a&&l.subscribe(function(f,p){var g=Sv(p);if(r(f,h,g)){var E=PS(),I=i(f),O="mutation "+f.type+E;xS(u,O,e),u.log("%c prev state","color: #9E9E9E; font-weight: bold",n(h)),u.log("%c mutation","color: #03A9F4; font-weight: bold",I),u.log("%c next state","color: #4CAF50; font-weight: bold",n(g)),NS(u)}h=g}),c&&l.subscribeAction(function(f,p){if(s(f,p)){var g=PS(),E=o(f),I="action "+f.type+g;xS(u,I,e),u.log("%c action","color: #03A9F4; font-weight: bold",E),NS(u)}}))}}function xS(t,e,r){var n=r?t.groupCollapsed:t.group;try{n.call(t,e)}catch{t.log(e)}}function NS(t){try{t.groupEnd()}catch{t.log("\u2014\u2014 log end \u2014\u2014")}}function PS(){var t=new Date;return" @ "+uu(t.getHours(),2)+":"+uu(t.getMinutes(),2)+":"+uu(t.getSeconds(),2)+"."+uu(t.getMilliseconds(),3)}function Ree(t,e){return new Array(e+1).join(t)}function uu(t,e){return Ree("0",e-t.toString().length)+t}var $ee={Store:er,install:Ak,version:"3.6.2",mapState:Ok,mapMutations:Ck,mapGetters:Rk,mapActions:$k,createNamespacedHelpers:Aee,createLogger:Cee},ote=$ee,lu,kee=new Uint8Array(16);function xee(){if(!lu&&(lu=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!lu))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return lu(kee)}var Nee=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Pee(t){return typeof t=="string"&&Nee.test(t)}var ft=[];for(var Vd=0;Vd<256;++Vd)ft.push((Vd+256).toString(16).substr(1));function Dee(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=(ft[t[e+0]]+ft[t[e+1]]+ft[t[e+2]]+ft[t[e+3]]+"-"+ft[t[e+4]]+ft[t[e+5]]+"-"+ft[t[e+6]]+ft[t[e+7]]+"-"+ft[t[e+8]]+ft[t[e+9]]+"-"+ft[t[e+10]]+ft[t[e+11]]+ft[t[e+12]]+ft[t[e+13]]+ft[t[e+14]]+ft[t[e+15]]).toLowerCase();if(!Pee(r))throw TypeError("Stringified UUID is invalid");return r}function ate(t,e,r){t=t||{};var n=t.random||(t.rng||xee)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,e){r=r||0;for(var i=0;i<16;++i)e[r+i]=n[i];return e}return Dee(n)}var kk={exports:{}};(function(t){(function(e,r,n){if(!e)return;for(var i={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},s={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},o={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},a={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},c,u=1;u<20;++u)i[111+u]="f"+u;for(u=0;u<=9;++u)i[u+96]=u.toString();function l(w,R,H){if(w.addEventListener){w.addEventListener(R,H,!1);return}w.attachEvent("on"+R,H)}function h(w){if(w.type=="keypress"){var R=String.fromCharCode(w.which);return w.shiftKey||(R=R.toLowerCase()),R}return i[w.which]?i[w.which]:s[w.which]?s[w.which]:String.fromCharCode(w.which).toLowerCase()}function f(w,R){return w.sort().join(",")===R.sort().join(",")}function p(w){var R=[];return w.shiftKey&&R.push("shift"),w.altKey&&R.push("alt"),w.ctrlKey&&R.push("ctrl"),w.metaKey&&R.push("meta"),R}function g(w){if(w.preventDefault){w.preventDefault();return}w.returnValue=!1}function E(w){if(w.stopPropagation){w.stopPropagation();return}w.cancelBubble=!0}function I(w){return w=="shift"||w=="ctrl"||w=="alt"||w=="meta"}function O(){if(!c){c={};for(var w in i)w>95&&w<112||i.hasOwnProperty(w)&&(c[i[w]]=w)}return c}function P(w,R,H){return H||(H=O()[w]?"keydown":"keypress"),H=="keypress"&&R.length&&(H="keydown"),H}function q(w){return w==="+"?["+"]:(w=w.replace(/\+{2}/g,"+plus"),w.split("+"))}function G(w,R){var H,ne,we,T=[];for(H=q(w),we=0;we<H.length;++we)ne=H[we],a[ne]&&(ne=a[ne]),R&&R!="keypress"&&o[ne]&&(ne=o[ne],T.push("shift")),I(ne)&&T.push(ne);return R=P(ne,T,R),{key:ne,modifiers:T,action:R}}function k(w,R){return w===null||w===r?!1:w===R?!0:k(w.parentNode,R)}function x(w){var R=this;if(w=w||r,!(R instanceof x))return new x(w);R.target=w,R._callbacks={},R._directMap={};var H={},ne,we=!1,T=!1,A=!1;function D(z){z=z||{};var Q=!1,oe;for(oe in H){if(z[oe]){Q=!0;continue}H[oe]=0}Q||(A=!1)}function Y(z,Q,oe,ce,be,ze){var ge,je,tr=[],Ar=oe.type;if(!R._callbacks[z])return[];for(Ar=="keyup"&&I(z)&&(Q=[z]),ge=0;ge<R._callbacks[z].length;++ge)if(je=R._callbacks[z][ge],!(!ce&&je.seq&&H[je.seq]!=je.level)&&Ar==je.action&&(Ar=="keypress"&&!oe.metaKey&&!oe.ctrlKey||f(Q,je.modifiers))){var ef=!ce&&je.combo==be,tf=ce&&je.seq==ce&&je.level==ze;(ef||tf)&&R._callbacks[z].splice(ge,1),tr.push(je)}return tr}function te(z,Q,oe,ce){R.stopCallback(Q,Q.target||Q.srcElement,oe,ce)||z(Q,oe)===!1&&(g(Q),E(Q))}R._handleKey=function(z,Q,oe){var ce=Y(z,Q,oe),be,ze={},ge=0,je=!1;for(be=0;be<ce.length;++be)ce[be].seq&&(ge=Math.max(ge,ce[be].level));for(be=0;be<ce.length;++be){if(ce[be].seq){if(ce[be].level!=ge)continue;je=!0,ze[ce[be].seq]=1,te(ce[be].callback,oe,ce[be].combo,ce[be].seq);continue}je||te(ce[be].callback,oe,ce[be].combo)}var tr=oe.type=="keypress"&&T;oe.type==A&&!I(z)&&!tr&&D(ze),T=je&&oe.type=="keydown"};function ae(z){typeof z.which!="number"&&(z.which=z.keyCode);var Q=h(z);if(!!Q){if(z.type=="keyup"&&we===Q){we=!1;return}R.handleKey(Q,p(z),z)}}function ie(){clearTimeout(ne),ne=setTimeout(D,1e3)}function he(z,Q,oe,ce){H[z]=0;function be(Ar){return function(){A=Ar,++H[z],ie()}}function ze(Ar){te(oe,Ar,z),ce!=="keyup"&&(we=h(Ar)),setTimeout(D,10)}for(var ge=0;ge<Q.length;++ge){var je=ge+1===Q.length,tr=je?ze:be(ce||G(Q[ge+1]).action);pe(Q[ge],tr,ce,z,ge)}}function pe(z,Q,oe,ce,be){R._directMap[z+":"+oe]=Q,z=z.replace(/\s+/g," ");var ze=z.split(" "),ge;if(ze.length>1){he(z,ze,Q,oe);return}ge=G(z,oe),R._callbacks[ge.key]=R._callbacks[ge.key]||[],Y(ge.key,ge.modifiers,{type:ge.action},ce,z,be),R._callbacks[ge.key][ce?"unshift":"push"]({callback:Q,modifiers:ge.modifiers,action:ge.action,seq:ce,level:be,combo:z})}R._bindMultiple=function(z,Q,oe){for(var ce=0;ce<z.length;++ce)pe(z[ce],Q,oe)},l(w,"keypress",ae),l(w,"keydown",ae),l(w,"keyup",ae)}x.prototype.bind=function(w,R,H){var ne=this;return w=w instanceof Array?w:[w],ne._bindMultiple.call(ne,w,R,H),ne},x.prototype.unbind=function(w,R){var H=this;return H.bind.call(H,w,function(){},R)},x.prototype.trigger=function(w,R){var H=this;return H._directMap[w+":"+R]&&H._directMap[w+":"+R]({},w),H},x.prototype.reset=function(){var w=this;return w._callbacks={},w._directMap={},w},x.prototype.stopCallback=function(w,R){var H=this;if((" "+R.className+" ").indexOf(" mousetrap ")>-1||k(R,H.target))return!1;if("composedPath"in w&&typeof w.composedPath=="function"){var ne=w.composedPath()[0];ne!==w.target&&(R=ne)}return R.tagName=="INPUT"||R.tagName=="SELECT"||R.tagName=="TEXTAREA"||R.isContentEditable},x.prototype.handleKey=function(){var w=this;return w._handleKey.apply(w,arguments)},x.addKeycodes=function(w){for(var R in w)w.hasOwnProperty(R)&&(i[R]=w[R]);c=null},x.init=function(){var w=x(r);for(var R in w)R.charAt(0)!=="_"&&(x[R]=function(H){return function(){return w[H].apply(w,arguments)}}(R))},x.init(),e.Mousetrap=x,t.exports&&(t.exports=x),typeof n=="function"&&n.amd&&n(function(){return x})})(typeof window!="undefined"?window:null,typeof window!="undefined"?document:null)})(kk);var cte=kk.exports;(function(t){var e={},r=t.prototype.stopCallback;t.prototype.stopCallback=function(n,i,s,o){return this.paused?!0:e[s]||e[o]?!1:r.call(this,n,i,s)},t.prototype.bindGlobal=function(n,i,s){if(this.bind(n,i,s),n instanceof Array)for(i=0;i<n.length;i++)e[n[i]]=!0;else e[n]=!0},t.init()})(Mousetrap);var Lee=function(e){return Mee(e)&&!Fee(e)};function Mee(t){return!!t&&typeof t=="object"}function Fee(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||Bee(t)}var Uee=typeof Symbol=="function"&&Symbol.for,jee=Uee?Symbol.for("react.element"):60103;function Bee(t){return t.$$typeof===jee}function Vee(t){return Array.isArray(t)?[]:{}}function Fa(t,e){return e.clone!==!1&&e.isMergeableObject(t)?Zs(Vee(t),t,e):t}function qee(t,e,r){return t.concat(e).map(function(n){return Fa(n,r)})}function Wee(t,e){if(!e.customMerge)return Zs;var r=e.customMerge(t);return typeof r=="function"?r:Zs}function zee(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(e){return t.propertyIsEnumerable(e)}):[]}function DS(t){return Object.keys(t).concat(zee(t))}function xk(t,e){try{return e in t}catch{return!1}}function Gee(t,e){return xk(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))}function Kee(t,e,r){var n={};return r.isMergeableObject(t)&&DS(t).forEach(function(i){n[i]=Fa(t[i],r)}),DS(e).forEach(function(i){Gee(t,i)||(xk(t,i)&&r.isMergeableObject(e[i])?n[i]=Wee(i,r)(t[i],e[i],r):n[i]=Fa(e[i],r))}),n}function Zs(t,e,r){r=r||{},r.arrayMerge=r.arrayMerge||qee,r.isMergeableObject=r.isMergeableObject||Lee,r.cloneUnlessOtherwiseSpecified=Fa;var n=Array.isArray(e),i=Array.isArray(t),s=n===i;return s?n?r.arrayMerge(t,e,r):Kee(t,e,r):Fa(e,r)}Zs.all=function(e,r){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(n,i){return Zs(n,i,r)},{})};var Hee=Zs,ute=Hee,Nk={exports:{}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/(function(t,e){(function(r){t.exports=r()})(function(){return function r(n,i,s){function o(u,l){if(!i[u]){if(!n[u]){var h=typeof Pc=="function"&&Pc;if(!l&&h)return h(u,!0);if(a)return a(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var p=i[u]={exports:{}};n[u][0].call(p.exports,function(g){var E=n[u][1][g];return o(E||g)},p,p.exports,r,n,i,s)}return i[u].exports}for(var a=typeof Pc=="function"&&Pc,c=0;c<s.length;c++)o(s[c]);return o}({1:[function(r,n,i){(function(s){var o=s.MutationObserver||s.WebKitMutationObserver,a;if(o){var c=0,u=new o(g),l=s.document.createTextNode("");u.observe(l,{characterData:!0}),a=function(){l.data=c=++c%2}}else if(!s.setImmediate&&typeof s.MessageChannel!="undefined"){var h=new s.MessageChannel;h.port1.onmessage=g,a=function(){h.port2.postMessage(0)}}else"document"in s&&"onreadystatechange"in s.document.createElement("script")?a=function(){var I=s.document.createElement("script");I.onreadystatechange=function(){g(),I.onreadystatechange=null,I.parentNode.removeChild(I),I=null},s.document.documentElement.appendChild(I)}:a=function(){setTimeout(g,0)};var f,p=[];function g(){f=!0;for(var I,O,P=p.length;P;){for(O=p,p=[],I=-1;++I<P;)O[I]();P=p.length}f=!1}n.exports=E;function E(I){p.push(I)===1&&!f&&a()}}).call(this,typeof Xe!="undefined"?Xe:typeof self!="undefined"?self:typeof window!="undefined"?window:{})},{}],2:[function(r,n,i){var s=r(1);function o(){}var a={},c=["REJECTED"],u=["FULFILLED"],l=["PENDING"];n.exports=h;function h(k){if(typeof k!="function")throw new TypeError("resolver must be a function");this.state=l,this.queue=[],this.outcome=void 0,k!==o&&E(this,k)}h.prototype.catch=function(k){return this.then(null,k)},h.prototype.then=function(k,x){if(typeof k!="function"&&this.state===u||typeof x!="function"&&this.state===c)return this;var w=new this.constructor(o);if(this.state!==l){var R=this.state===u?k:x;p(w,R,this.outcome)}else this.queue.push(new f(w,k,x));return w};function f(k,x,w){this.promise=k,typeof x=="function"&&(this.onFulfilled=x,this.callFulfilled=this.otherCallFulfilled),typeof w=="function"&&(this.onRejected=w,this.callRejected=this.otherCallRejected)}f.prototype.callFulfilled=function(k){a.resolve(this.promise,k)},f.prototype.otherCallFulfilled=function(k){p(this.promise,this.onFulfilled,k)},f.prototype.callRejected=function(k){a.reject(this.promise,k)},f.prototype.otherCallRejected=function(k){p(this.promise,this.onRejected,k)};function p(k,x,w){s(function(){var R;try{R=x(w)}catch(H){return a.reject(k,H)}R===k?a.reject(k,new TypeError("Cannot resolve promise with itself")):a.resolve(k,R)})}a.resolve=function(k,x){var w=I(g,x);if(w.status==="error")return a.reject(k,w.value);var R=w.value;if(R)E(k,R);else{k.state=u,k.outcome=x;for(var H=-1,ne=k.queue.length;++H<ne;)k.queue[H].callFulfilled(x)}return k},a.reject=function(k,x){k.state=c,k.outcome=x;for(var w=-1,R=k.queue.length;++w<R;)k.queue[w].callRejected(x);return k};function g(k){var x=k&&k.then;if(k&&(typeof k=="object"||typeof k=="function")&&typeof x=="function")return function(){x.apply(k,arguments)}}function E(k,x){var w=!1;function R(T){w||(w=!0,a.reject(k,T))}function H(T){w||(w=!0,a.resolve(k,T))}function ne(){x(H,R)}var we=I(ne);we.status==="error"&&R(we.value)}function I(k,x){var w={};try{w.value=k(x),w.status="success"}catch(R){w.status="error",w.value=R}return w}h.resolve=O;function O(k){return k instanceof this?k:a.resolve(new this(o),k)}h.reject=P;function P(k){var x=new this(o);return a.reject(x,k)}h.all=q;function q(k){var x=this;if(Object.prototype.toString.call(k)!=="[object Array]")return this.reject(new TypeError("must be an array"));var w=k.length,R=!1;if(!w)return this.resolve([]);for(var H=new Array(w),ne=0,we=-1,T=new this(o);++we<w;)A(k[we],we);return T;function A(D,Y){x.resolve(D).then(te,function(ae){R||(R=!0,a.reject(T,ae))});function te(ae){H[Y]=ae,++ne===w&&!R&&(R=!0,a.resolve(T,H))}}}h.race=G;function G(k){var x=this;if(Object.prototype.toString.call(k)!=="[object Array]")return this.reject(new TypeError("must be an array"));var w=k.length,R=!1;if(!w)return this.resolve([]);for(var H=-1,ne=new this(o);++H<w;)we(k[H]);return ne;function we(T){x.resolve(T).then(function(A){R||(R=!0,a.resolve(ne,A))},function(A){R||(R=!0,a.reject(ne,A))})}}},{"1":1}],3:[function(r,n,i){(function(s){typeof s.Promise!="function"&&(s.Promise=r(2))}).call(this,typeof Xe!="undefined"?Xe:typeof self!="undefined"?self:typeof window!="undefined"?window:{})},{"2":2}],4:[function(r,n,i){var s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d};function o(d,m){if(!(d instanceof m))throw new TypeError("Cannot call a class as a function")}function a(){try{if(typeof indexedDB!="undefined")return indexedDB;if(typeof webkitIndexedDB!="undefined")return webkitIndexedDB;if(typeof mozIndexedDB!="undefined")return mozIndexedDB;if(typeof OIndexedDB!="undefined")return OIndexedDB;if(typeof msIndexedDB!="undefined")return msIndexedDB}catch{return}}var c=a();function u(){try{if(!c||!c.open)return!1;var d=typeof openDatabase!="undefined"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),m=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!d||m)&&typeof indexedDB!="undefined"&&typeof IDBKeyRange!="undefined"}catch{return!1}}function l(d,m){d=d||[],m=m||{};try{return new Blob(d,m)}catch(y){if(y.name!=="TypeError")throw y;for(var v=typeof BlobBuilder!="undefined"?BlobBuilder:typeof MSBlobBuilder!="undefined"?MSBlobBuilder:typeof MozBlobBuilder!="undefined"?MozBlobBuilder:WebKitBlobBuilder,b=new v,S=0;S<d.length;S+=1)b.append(d[S]);return b.getBlob(m.type)}}typeof Promise=="undefined"&&r(3);var h=Promise;function f(d,m){m&&d.then(function(v){m(null,v)},function(v){m(v)})}function p(d,m,v){typeof m=="function"&&d.then(m),typeof v=="function"&&d.catch(v)}function g(d){return typeof d!="string"&&(console.warn(d+" used as a key, but it is not a string."),d=String(d)),d}function E(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var I="local-forage-detect-blob-support",O=void 0,P={},q=Object.prototype.toString,G="readonly",k="readwrite";function x(d){for(var m=d.length,v=new ArrayBuffer(m),b=new Uint8Array(v),S=0;S<m;S++)b[S]=d.charCodeAt(S);return v}function w(d){return new h(function(m){var v=d.transaction(I,k),b=l([""]);v.objectStore(I).put(b,"key"),v.onabort=function(S){S.preventDefault(),S.stopPropagation(),m(!1)},v.oncomplete=function(){var S=navigator.userAgent.match(/Chrome\/(\d+)/),y=navigator.userAgent.match(/Edge\//);m(y||!S||parseInt(S[1],10)>=43)}}).catch(function(){return!1})}function R(d){return typeof O=="boolean"?h.resolve(O):w(d).then(function(m){return O=m,O})}function H(d){var m=P[d.name],v={};v.promise=new h(function(b,S){v.resolve=b,v.reject=S}),m.deferredOperations.push(v),m.dbReady?m.dbReady=m.dbReady.then(function(){return v.promise}):m.dbReady=v.promise}function ne(d){var m=P[d.name],v=m.deferredOperations.pop();if(v)return v.resolve(),v.promise}function we(d,m){var v=P[d.name],b=v.deferredOperations.pop();if(b)return b.reject(m),b.promise}function T(d,m){return new h(function(v,b){if(P[d.name]=P[d.name]||Q(),d.db)if(m)H(d),d.db.close();else return v(d.db);var S=[d.name];m&&S.push(d.version);var y=c.open.apply(c,S);m&&(y.onupgradeneeded=function(N){var F=y.result;try{F.createObjectStore(d.storeName),N.oldVersion<=1&&F.createObjectStore(I)}catch(j){if(j.name==="ConstraintError")console.warn('The database "'+d.name+'" has been upgraded from version '+N.oldVersion+" to version "+N.newVersion+', but the storage "'+d.storeName+'" already exists.');else throw j}}),y.onerror=function(N){N.preventDefault(),b(y.error)},y.onsuccess=function(){var N=y.result;N.onversionchange=function(F){F.target.close()},v(N),ne(d)}})}function A(d){return T(d,!1)}function D(d){return T(d,!0)}function Y(d,m){if(!d.db)return!0;var v=!d.db.objectStoreNames.contains(d.storeName),b=d.version<d.db.version,S=d.version>d.db.version;if(b&&(d.version!==m&&console.warn('The database "'+d.name+`" can't be downgraded from version `+d.db.version+" to version "+d.version+"."),d.version=d.db.version),S||v){if(v){var y=d.db.version+1;y>d.version&&(d.version=y)}return!0}return!1}function te(d){return new h(function(m,v){var b=new FileReader;b.onerror=v,b.onloadend=function(S){var y=btoa(S.target.result||"");m({__local_forage_encoded_blob:!0,data:y,type:d.type})},b.readAsBinaryString(d)})}function ae(d){var m=x(atob(d.data));return l([m],{type:d.type})}function ie(d){return d&&d.__local_forage_encoded_blob}function he(d){var m=this,v=m._initReady().then(function(){var b=P[m._dbInfo.name];if(b&&b.dbReady)return b.dbReady});return p(v,d,d),v}function pe(d){H(d);for(var m=P[d.name],v=m.forages,b=0;b<v.length;b++){var S=v[b];S._dbInfo.db&&(S._dbInfo.db.close(),S._dbInfo.db=null)}return d.db=null,A(d).then(function(y){return d.db=y,Y(d)?D(d):y}).then(function(y){d.db=m.db=y;for(var N=0;N<v.length;N++)v[N]._dbInfo.db=y}).catch(function(y){throw we(d,y),y})}function z(d,m,v,b){b===void 0&&(b=1);try{var S=d.db.transaction(d.storeName,m);v(null,S)}catch(y){if(b>0&&(!d.db||y.name==="InvalidStateError"||y.name==="NotFoundError"))return h.resolve().then(function(){if(!d.db||y.name==="NotFoundError"&&!d.db.objectStoreNames.contains(d.storeName)&&d.version<=d.db.version)return d.db&&(d.version=d.db.version+1),D(d)}).then(function(){return pe(d).then(function(){z(d,m,v,b-1)})}).catch(v);v(y)}}function Q(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function oe(d){var m=this,v={db:null};if(d)for(var b in d)v[b]=d[b];var S=P[v.name];S||(S=Q(),P[v.name]=S),S.forages.push(m),m._initReady||(m._initReady=m.ready,m.ready=he);var y=[];function N(){return h.resolve()}for(var F=0;F<S.forages.length;F++){var j=S.forages[F];j!==m&&y.push(j._initReady().catch(N))}var B=S.forages.slice(0);return h.all(y).then(function(){return v.db=S.db,A(v)}).then(function(W){return v.db=W,Y(v,m._defaultConfig.version)?D(v):W}).then(function(W){v.db=S.db=W,m._dbInfo=v;for(var J=0;J<B.length;J++){var ve=B[J];ve!==m&&(ve._dbInfo.db=v.db,ve._dbInfo.version=v.version)}})}function ce(d,m){var v=this;d=g(d);var b=new h(function(S,y){v.ready().then(function(){z(v._dbInfo,G,function(N,F){if(N)return y(N);try{var j=F.objectStore(v._dbInfo.storeName),B=j.get(d);B.onsuccess=function(){var W=B.result;W===void 0&&(W=null),ie(W)&&(W=ae(W)),S(W)},B.onerror=function(){y(B.error)}}catch(W){y(W)}})}).catch(y)});return f(b,m),b}function be(d,m){var v=this,b=new h(function(S,y){v.ready().then(function(){z(v._dbInfo,G,function(N,F){if(N)return y(N);try{var j=F.objectStore(v._dbInfo.storeName),B=j.openCursor(),W=1;B.onsuccess=function(){var J=B.result;if(J){var ve=J.value;ie(ve)&&(ve=ae(ve));var Se=d(ve,J.key,W++);Se!==void 0?S(Se):J.continue()}else S()},B.onerror=function(){y(B.error)}}catch(J){y(J)}})}).catch(y)});return f(b,m),b}function ze(d,m,v){var b=this;d=g(d);var S=new h(function(y,N){var F;b.ready().then(function(){return F=b._dbInfo,q.call(m)==="[object Blob]"?R(F.db).then(function(j){return j?m:te(m)}):m}).then(function(j){z(b._dbInfo,k,function(B,W){if(B)return N(B);try{var J=W.objectStore(b._dbInfo.storeName);j===null&&(j=void 0);var ve=J.put(j,d);W.oncomplete=function(){j===void 0&&(j=null),y(j)},W.onabort=W.onerror=function(){var Se=ve.error?ve.error:ve.transaction.error;N(Se)}}catch(Se){N(Se)}})}).catch(N)});return f(S,v),S}function ge(d,m){var v=this;d=g(d);var b=new h(function(S,y){v.ready().then(function(){z(v._dbInfo,k,function(N,F){if(N)return y(N);try{var j=F.objectStore(v._dbInfo.storeName),B=j.delete(d);F.oncomplete=function(){S()},F.onerror=function(){y(B.error)},F.onabort=function(){var W=B.error?B.error:B.transaction.error;y(W)}}catch(W){y(W)}})}).catch(y)});return f(b,m),b}function je(d){var m=this,v=new h(function(b,S){m.ready().then(function(){z(m._dbInfo,k,function(y,N){if(y)return S(y);try{var F=N.objectStore(m._dbInfo.storeName),j=F.clear();N.oncomplete=function(){b()},N.onabort=N.onerror=function(){var B=j.error?j.error:j.transaction.error;S(B)}}catch(B){S(B)}})}).catch(S)});return f(v,d),v}function tr(d){var m=this,v=new h(function(b,S){m.ready().then(function(){z(m._dbInfo,G,function(y,N){if(y)return S(y);try{var F=N.objectStore(m._dbInfo.storeName),j=F.count();j.onsuccess=function(){b(j.result)},j.onerror=function(){S(j.error)}}catch(B){S(B)}})}).catch(S)});return f(v,d),v}function Ar(d,m){var v=this,b=new h(function(S,y){if(d<0){S(null);return}v.ready().then(function(){z(v._dbInfo,G,function(N,F){if(N)return y(N);try{var j=F.objectStore(v._dbInfo.storeName),B=!1,W=j.openKeyCursor();W.onsuccess=function(){var J=W.result;if(!J){S(null);return}d===0||B?S(J.key):(B=!0,J.advance(d))},W.onerror=function(){y(W.error)}}catch(J){y(J)}})}).catch(y)});return f(b,m),b}function ef(d){var m=this,v=new h(function(b,S){m.ready().then(function(){z(m._dbInfo,G,function(y,N){if(y)return S(y);try{var F=N.objectStore(m._dbInfo.storeName),j=F.openKeyCursor(),B=[];j.onsuccess=function(){var W=j.result;if(!W){b(B);return}B.push(W.key),W.continue()},j.onerror=function(){S(j.error)}}catch(W){S(W)}})}).catch(S)});return f(v,d),v}function tf(d,m){m=E.apply(this,arguments);var v=this.config();d=typeof d!="function"&&d||{},d.name||(d.name=d.name||v.name,d.storeName=d.storeName||v.storeName);var b=this,S;if(!d.name)S=h.reject("Invalid arguments");else{var y=d.name===v.name&&b._dbInfo.db,N=y?h.resolve(b._dbInfo.db):A(d).then(function(F){var j=P[d.name],B=j.forages;j.db=F;for(var W=0;W<B.length;W++)B[W]._dbInfo.db=F;return F});d.storeName?S=N.then(function(F){if(!!F.objectStoreNames.contains(d.storeName)){var j=F.version+1;H(d);var B=P[d.name],W=B.forages;F.close();for(var J=0;J<W.length;J++){var ve=W[J];ve._dbInfo.db=null,ve._dbInfo.version=j}var Se=new h(function(Te,Ge){var Be=c.open(d.name,j);Be.onerror=function(rr){var Oo=Be.result;Oo.close(),Ge(rr)},Be.onupgradeneeded=function(){var rr=Be.result;rr.deleteObjectStore(d.storeName)},Be.onsuccess=function(){var rr=Be.result;rr.close(),Te(rr)}});return Se.then(function(Te){B.db=Te;for(var Ge=0;Ge<W.length;Ge++){var Be=W[Ge];Be._dbInfo.db=Te,ne(Be._dbInfo)}}).catch(function(Te){throw(we(d,Te)||h.resolve()).catch(function(){}),Te})}}):S=N.then(function(F){H(d);var j=P[d.name],B=j.forages;F.close();for(var W=0;W<B.length;W++){var J=B[W];J._dbInfo.db=null}var ve=new h(function(Se,Te){var Ge=c.deleteDatabase(d.name);Ge.onerror=function(){var Be=Ge.result;Be&&Be.close(),Te(Ge.error)},Ge.onblocked=function(){console.warn('dropInstance blocked for database "'+d.name+'" until all open connections are closed')},Ge.onsuccess=function(){var Be=Ge.result;Be&&Be.close(),Se(Be)}});return ve.then(function(Se){j.db=Se;for(var Te=0;Te<B.length;Te++){var Ge=B[Te];ne(Ge._dbInfo)}}).catch(function(Se){throw(we(d,Se)||h.resolve()).catch(function(){}),Se})})}return f(S,m),S}var Pk={_driver:"asyncStorage",_initStorage:oe,_support:u(),iterate:be,getItem:ce,setItem:ze,removeItem:ge,clear:je,length:tr,key:Ar,keys:ef,dropInstance:tf};function Dk(){return typeof openDatabase=="function"}var ln="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Lk="~~local_forage_type~",Wy=/^~~local_forage_type~([^~]+)~/,Sc="__lfsc__:",rf=Sc.length,nf="arbf",sf="blob",zy="si08",Gy="ui08",Ky="uic8",Hy="si16",Yy="si32",Xy="ur16",Qy="ui32",Jy="fl32",Zy="fl64",ew=rf+nf.length,tw=Object.prototype.toString;function rw(d){var m=d.length*.75,v=d.length,b,S=0,y,N,F,j;d[d.length-1]==="="&&(m--,d[d.length-2]==="="&&m--);var B=new ArrayBuffer(m),W=new Uint8Array(B);for(b=0;b<v;b+=4)y=ln.indexOf(d[b]),N=ln.indexOf(d[b+1]),F=ln.indexOf(d[b+2]),j=ln.indexOf(d[b+3]),W[S++]=y<<2|N>>4,W[S++]=(N&15)<<4|F>>2,W[S++]=(F&3)<<6|j&63;return B}function of(d){var m=new Uint8Array(d),v="",b;for(b=0;b<m.length;b+=3)v+=ln[m[b]>>2],v+=ln[(m[b]&3)<<4|m[b+1]>>4],v+=ln[(m[b+1]&15)<<2|m[b+2]>>6],v+=ln[m[b+2]&63];return m.length%3===2?v=v.substring(0,v.length-1)+"=":m.length%3===1&&(v=v.substring(0,v.length-2)+"=="),v}function Mk(d,m){var v="";if(d&&(v=tw.call(d)),d&&(v==="[object ArrayBuffer]"||d.buffer&&tw.call(d.buffer)==="[object ArrayBuffer]")){var b,S=Sc;d instanceof ArrayBuffer?(b=d,S+=nf):(b=d.buffer,v==="[object Int8Array]"?S+=zy:v==="[object Uint8Array]"?S+=Gy:v==="[object Uint8ClampedArray]"?S+=Ky:v==="[object Int16Array]"?S+=Hy:v==="[object Uint16Array]"?S+=Xy:v==="[object Int32Array]"?S+=Yy:v==="[object Uint32Array]"?S+=Qy:v==="[object Float32Array]"?S+=Jy:v==="[object Float64Array]"?S+=Zy:m(new Error("Failed to get type for BinaryArray"))),m(S+of(b))}else if(v==="[object Blob]"){var y=new FileReader;y.onload=function(){var N=Lk+d.type+"~"+of(this.result);m(Sc+sf+N)},y.readAsArrayBuffer(d)}else try{m(JSON.stringify(d))}catch(N){console.error("Couldn't convert value into a JSON string: ",d),m(null,N)}}function Fk(d){if(d.substring(0,rf)!==Sc)return JSON.parse(d);var m=d.substring(ew),v=d.substring(rf,ew),b;if(v===sf&&Wy.test(m)){var S=m.match(Wy);b=S[1],m=m.substring(S[0].length)}var y=rw(m);switch(v){case nf:return y;case sf:return l([y],{type:b});case zy:return new Int8Array(y);case Gy:return new Uint8Array(y);case Ky:return new Uint8ClampedArray(y);case Hy:return new Int16Array(y);case Xy:return new Uint16Array(y);case Yy:return new Int32Array(y);case Qy:return new Uint32Array(y);case Jy:return new Float32Array(y);case Zy:return new Float64Array(y);default:throw new Error("Unkown type: "+v)}}var af={serialize:Mk,deserialize:Fk,stringToBuffer:rw,bufferToString:of};function nw(d,m,v,b){d.executeSql("CREATE TABLE IF NOT EXISTS "+m.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],v,b)}function Uk(d){var m=this,v={db:null};if(d)for(var b in d)v[b]=typeof d[b]!="string"?d[b].toString():d[b];var S=new h(function(y,N){try{v.db=openDatabase(v.name,String(v.version),v.description,v.size)}catch(F){return N(F)}v.db.transaction(function(F){nw(F,v,function(){m._dbInfo=v,y()},function(j,B){N(B)})},N)});return v.serializer=af,S}function hn(d,m,v,b,S,y){d.executeSql(v,b,S,function(N,F){F.code===F.SYNTAX_ERR?N.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[m.storeName],function(j,B){B.rows.length?y(j,F):nw(j,m,function(){j.executeSql(v,b,S,y)},y)},y):y(N,F)},y)}function jk(d,m){var v=this;d=g(d);var b=new h(function(S,y){v.ready().then(function(){var N=v._dbInfo;N.db.transaction(function(F){hn(F,N,"SELECT * FROM "+N.storeName+" WHERE key = ? LIMIT 1",[d],function(j,B){var W=B.rows.length?B.rows.item(0).value:null;W&&(W=N.serializer.deserialize(W)),S(W)},function(j,B){y(B)})})}).catch(y)});return f(b,m),b}function Bk(d,m){var v=this,b=new h(function(S,y){v.ready().then(function(){var N=v._dbInfo;N.db.transaction(function(F){hn(F,N,"SELECT * FROM "+N.storeName,[],function(j,B){for(var W=B.rows,J=W.length,ve=0;ve<J;ve++){var Se=W.item(ve),Te=Se.value;if(Te&&(Te=N.serializer.deserialize(Te)),Te=d(Te,Se.key,ve+1),Te!==void 0){S(Te);return}}S()},function(j,B){y(B)})})}).catch(y)});return f(b,m),b}function iw(d,m,v,b){var S=this;d=g(d);var y=new h(function(N,F){S.ready().then(function(){m===void 0&&(m=null);var j=m,B=S._dbInfo;B.serializer.serialize(m,function(W,J){J?F(J):B.db.transaction(function(ve){hn(ve,B,"INSERT OR REPLACE INTO "+B.storeName+" (key, value) VALUES (?, ?)",[d,W],function(){N(j)},function(Se,Te){F(Te)})},function(ve){if(ve.code===ve.QUOTA_ERR){if(b>0){N(iw.apply(S,[d,j,v,b-1]));return}F(ve)}})})}).catch(F)});return f(y,v),y}function Vk(d,m,v){return iw.apply(this,[d,m,v,1])}function qk(d,m){var v=this;d=g(d);var b=new h(function(S,y){v.ready().then(function(){var N=v._dbInfo;N.db.transaction(function(F){hn(F,N,"DELETE FROM "+N.storeName+" WHERE key = ?",[d],function(){S()},function(j,B){y(B)})})}).catch(y)});return f(b,m),b}function Wk(d){var m=this,v=new h(function(b,S){m.ready().then(function(){var y=m._dbInfo;y.db.transaction(function(N){hn(N,y,"DELETE FROM "+y.storeName,[],function(){b()},function(F,j){S(j)})})}).catch(S)});return f(v,d),v}function zk(d){var m=this,v=new h(function(b,S){m.ready().then(function(){var y=m._dbInfo;y.db.transaction(function(N){hn(N,y,"SELECT COUNT(key) as c FROM "+y.storeName,[],function(F,j){var B=j.rows.item(0).c;b(B)},function(F,j){S(j)})})}).catch(S)});return f(v,d),v}function Gk(d,m){var v=this,b=new h(function(S,y){v.ready().then(function(){var N=v._dbInfo;N.db.transaction(function(F){hn(F,N,"SELECT key FROM "+N.storeName+" WHERE id = ? LIMIT 1",[d+1],function(j,B){var W=B.rows.length?B.rows.item(0).key:null;S(W)},function(j,B){y(B)})})}).catch(y)});return f(b,m),b}function Kk(d){var m=this,v=new h(function(b,S){m.ready().then(function(){var y=m._dbInfo;y.db.transaction(function(N){hn(N,y,"SELECT key FROM "+y.storeName,[],function(F,j){for(var B=[],W=0;W<j.rows.length;W++)B.push(j.rows.item(W).key);b(B)},function(F,j){S(j)})})}).catch(S)});return f(v,d),v}function Hk(d){return new h(function(m,v){d.transaction(function(b){b.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(S,y){for(var N=[],F=0;F<y.rows.length;F++)N.push(y.rows.item(F).name);m({db:d,storeNames:N})},function(S,y){v(y)})},function(b){v(b)})})}function Yk(d,m){m=E.apply(this,arguments);var v=this.config();d=typeof d!="function"&&d||{},d.name||(d.name=d.name||v.name,d.storeName=d.storeName||v.storeName);var b=this,S;return d.name?S=new h(function(y){var N;d.name===v.name?N=b._dbInfo.db:N=openDatabase(d.name,"","",0),d.storeName?y({db:N,storeNames:[d.storeName]}):y(Hk(N))}).then(function(y){return new h(function(N,F){y.db.transaction(function(j){function B(Se){return new h(function(Te,Ge){j.executeSql("DROP TABLE IF EXISTS "+Se,[],function(){Te()},function(Be,rr){Ge(rr)})})}for(var W=[],J=0,ve=y.storeNames.length;J<ve;J++)W.push(B(y.storeNames[J]));h.all(W).then(function(){N()}).catch(function(Se){F(Se)})},function(j){F(j)})})}):S=h.reject("Invalid arguments"),f(S,m),S}var Xk={_driver:"webSQLStorage",_initStorage:Uk,_support:Dk(),iterate:Bk,getItem:jk,setItem:Vk,removeItem:qk,clear:Wk,length:zk,key:Gk,keys:Kk,dropInstance:Yk};function Qk(){try{return typeof localStorage!="undefined"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function sw(d,m){var v=d.name+"/";return d.storeName!==m.storeName&&(v+=d.storeName+"/"),v}function Jk(){var d="_localforage_support_test";try{return localStorage.setItem(d,!0),localStorage.removeItem(d),!1}catch{return!0}}function Zk(){return!Jk()||localStorage.length>0}function ex(d){var m=this,v={};if(d)for(var b in d)v[b]=d[b];return v.keyPrefix=sw(d,m._defaultConfig),Zk()?(m._dbInfo=v,v.serializer=af,h.resolve()):h.reject()}function tx(d){var m=this,v=m.ready().then(function(){for(var b=m._dbInfo.keyPrefix,S=localStorage.length-1;S>=0;S--){var y=localStorage.key(S);y.indexOf(b)===0&&localStorage.removeItem(y)}});return f(v,d),v}function rx(d,m){var v=this;d=g(d);var b=v.ready().then(function(){var S=v._dbInfo,y=localStorage.getItem(S.keyPrefix+d);return y&&(y=S.serializer.deserialize(y)),y});return f(b,m),b}function nx(d,m){var v=this,b=v.ready().then(function(){for(var S=v._dbInfo,y=S.keyPrefix,N=y.length,F=localStorage.length,j=1,B=0;B<F;B++){var W=localStorage.key(B);if(W.indexOf(y)===0){var J=localStorage.getItem(W);if(J&&(J=S.serializer.deserialize(J)),J=d(J,W.substring(N),j++),J!==void 0)return J}}});return f(b,m),b}function ix(d,m){var v=this,b=v.ready().then(function(){var S=v._dbInfo,y;try{y=localStorage.key(d)}catch{y=null}return y&&(y=y.substring(S.keyPrefix.length)),y});return f(b,m),b}function sx(d){var m=this,v=m.ready().then(function(){for(var b=m._dbInfo,S=localStorage.length,y=[],N=0;N<S;N++){var F=localStorage.key(N);F.indexOf(b.keyPrefix)===0&&y.push(F.substring(b.keyPrefix.length))}return y});return f(v,d),v}function ox(d){var m=this,v=m.keys().then(function(b){return b.length});return f(v,d),v}function ax(d,m){var v=this;d=g(d);var b=v.ready().then(function(){var S=v._dbInfo;localStorage.removeItem(S.keyPrefix+d)});return f(b,m),b}function cx(d,m,v){var b=this;d=g(d);var S=b.ready().then(function(){m===void 0&&(m=null);var y=m;return new h(function(N,F){var j=b._dbInfo;j.serializer.serialize(m,function(B,W){if(W)F(W);else try{localStorage.setItem(j.keyPrefix+d,B),N(y)}catch(J){(J.name==="QuotaExceededError"||J.name==="NS_ERROR_DOM_QUOTA_REACHED")&&F(J),F(J)}})})});return f(S,v),S}function ux(d,m){if(m=E.apply(this,arguments),d=typeof d!="function"&&d||{},!d.name){var v=this.config();d.name=d.name||v.name,d.storeName=d.storeName||v.storeName}var b=this,S;return d.name?S=new h(function(y){d.storeName?y(sw(d,b._defaultConfig)):y(d.name+"/")}).then(function(y){for(var N=localStorage.length-1;N>=0;N--){var F=localStorage.key(N);F.indexOf(y)===0&&localStorage.removeItem(F)}}):S=h.reject("Invalid arguments"),f(S,m),S}var lx={_driver:"localStorageWrapper",_initStorage:ex,_support:Qk(),iterate:nx,getItem:rx,setItem:cx,removeItem:ax,clear:tx,length:ox,key:ix,keys:sx,dropInstance:ux},hx=function(m,v){return m===v||typeof m=="number"&&typeof v=="number"&&isNaN(m)&&isNaN(v)},fx=function(m,v){for(var b=m.length,S=0;S<b;){if(hx(m[S],v))return!0;S++}return!1},ow=Array.isArray||function(d){return Object.prototype.toString.call(d)==="[object Array]"},Ao={},aw={},Ji={INDEXEDDB:Pk,WEBSQL:Xk,LOCALSTORAGE:lx},dx=[Ji.INDEXEDDB._driver,Ji.WEBSQL._driver,Ji.LOCALSTORAGE._driver],Tc=["dropInstance"],cf=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Tc),px={description:"",driver:dx.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function vx(d,m){d[m]=function(){var v=arguments;return d.ready().then(function(){return d[m].apply(d,v)})}}function uf(){for(var d=1;d<arguments.length;d++){var m=arguments[d];if(m)for(var v in m)m.hasOwnProperty(v)&&(ow(m[v])?arguments[0][v]=m[v].slice():arguments[0][v]=m[v])}return arguments[0]}var gx=function(){function d(m){o(this,d);for(var v in Ji)if(Ji.hasOwnProperty(v)){var b=Ji[v],S=b._driver;this[v]=S,Ao[S]||this.defineDriver(b)}this._defaultConfig=uf({},px),this._config=uf({},this._defaultConfig,m),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return d.prototype.config=function(v){if((typeof v=="undefined"?"undefined":s(v))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var b in v){if(b==="storeName"&&(v[b]=v[b].replace(/\W/g,"_")),b==="version"&&typeof v[b]!="number")return new Error("Database version must be a number.");this._config[b]=v[b]}return"driver"in v&&v.driver?this.setDriver(this._config.driver):!0}else return typeof v=="string"?this._config[v]:this._config},d.prototype.defineDriver=function(v,b,S){var y=new h(function(N,F){try{var j=v._driver,B=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!v._driver){F(B);return}for(var W=cf.concat("_initStorage"),J=0,ve=W.length;J<ve;J++){var Se=W[J],Te=!fx(Tc,Se);if((Te||v[Se])&&typeof v[Se]!="function"){F(B);return}}var Ge=function(){for(var Oo=function(wx){return function(){var bx=new Error("Method "+wx+" is not implemented by the current driver"),cw=h.reject(bx);return f(cw,arguments[arguments.length-1]),cw}},lf=0,yx=Tc.length;lf<yx;lf++){var hf=Tc[lf];v[hf]||(v[hf]=Oo(hf))}};Ge();var Be=function(Oo){Ao[j]&&console.info("Redefining LocalForage driver: "+j),Ao[j]=v,aw[j]=Oo,N()};"_support"in v?v._support&&typeof v._support=="function"?v._support().then(Be,F):Be(!!v._support):Be(!0)}catch(rr){F(rr)}});return p(y,b,S),y},d.prototype.driver=function(){return this._driver||null},d.prototype.getDriver=function(v,b,S){var y=Ao[v]?h.resolve(Ao[v]):h.reject(new Error("Driver not found."));return p(y,b,S),y},d.prototype.getSerializer=function(v){var b=h.resolve(af);return p(b,v),b},d.prototype.ready=function(v){var b=this,S=b._driverSet.then(function(){return b._ready===null&&(b._ready=b._initDriver()),b._ready});return p(S,v,v),S},d.prototype.setDriver=function(v,b,S){var y=this;ow(v)||(v=[v]);var N=this._getSupportedDrivers(v);function F(){y._config.driver=y.driver()}function j(J){return y._extend(J),F(),y._ready=y._initStorage(y._config),y._ready}function B(J){return function(){var ve=0;function Se(){for(;ve<J.length;){var Te=J[ve];return ve++,y._dbInfo=null,y._ready=null,y.getDriver(Te).then(j).catch(Se)}F();var Ge=new Error("No available storage method found.");return y._driverSet=h.reject(Ge),y._driverSet}return Se()}}var W=this._driverSet!==null?this._driverSet.catch(function(){return h.resolve()}):h.resolve();return this._driverSet=W.then(function(){var J=N[0];return y._dbInfo=null,y._ready=null,y.getDriver(J).then(function(ve){y._driver=ve._driver,F(),y._wrapLibraryMethodsWithReady(),y._initDriver=B(N)})}).catch(function(){F();var J=new Error("No available storage method found.");return y._driverSet=h.reject(J),y._driverSet}),p(this._driverSet,b,S),this._driverSet},d.prototype.supports=function(v){return!!aw[v]},d.prototype._extend=function(v){uf(this,v)},d.prototype._getSupportedDrivers=function(v){for(var b=[],S=0,y=v.length;S<y;S++){var N=v[S];this.supports(N)&&b.push(N)}return b},d.prototype._wrapLibraryMethodsWithReady=function(){for(var v=0,b=cf.length;v<b;v++)vx(this,cf[v])},d.prototype.createInstance=function(v){return new d(v)},d}(),mx=new gx;n.exports=mx},{"3":3}]},{},[4])(4)})})(Nk);var lte=Nk.exports;try{self["workbox:window:6.4.1"]&&_()}catch{}function LS(t,e){return new Promise(function(r){var n=new MessageChannel;n.port1.onmessage=function(i){r(i.data)},t.postMessage(e,[n.port2])})}function Yee(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function MS(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Xee(t,e){var r;if(typeof Symbol=="undefined"||t[Symbol.iterator]==null){if(Array.isArray(t)||(r=function(i,s){if(i){if(typeof i=="string")return MS(i,s);var o=Object.prototype.toString.call(i).slice(8,-1);return o==="Object"&&i.constructor&&(o=i.constructor.name),o==="Map"||o==="Set"?Array.from(i):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?MS(i,s):void 0}}(t))||e&&t&&typeof t.length=="number"){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(r=t[Symbol.iterator]()).next.bind(r)}try{self["workbox:core:6.4.1"]&&_()}catch{}var qd=function(){var t=this;this.promise=new Promise(function(e,r){t.resolve=e,t.reject=r})};function Wd(t,e){var r=location.href;return new URL(t,r).href===new URL(e,r).href}var Vo=function(t,e){this.type=t,Object.assign(this,e)};function hu(t,e,r){return r?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function Qee(){}var Jee={type:"SKIP_WAITING"};function FS(t,e){if(!e)return t&&t.then?t.then(Qee):Promise.resolve()}var hte=function(t){var e,r;function n(a,c){var u,l;return c===void 0&&(c={}),(u=t.call(this)||this).nn={},u.tn=0,u.rn=new qd,u.en=new qd,u.on=new qd,u.un=0,u.an=new Set,u.cn=function(){var h=u.fn,f=h.installing;u.tn>0||!Wd(f.scriptURL,u.sn.toString())||performance.now()>u.un+6e4?(u.vn=f,h.removeEventListener("updatefound",u.cn)):(u.hn=f,u.an.add(f),u.rn.resolve(f)),++u.tn,f.addEventListener("statechange",u.ln)},u.ln=function(h){var f=u.fn,p=h.target,g=p.state,E=p===u.vn,I={sw:p,isExternal:E,originalEvent:h};!E&&u.mn&&(I.isUpdate=!0),u.dispatchEvent(new Vo(g,I)),g==="installed"?u.wn=self.setTimeout(function(){g==="installed"&&f.waiting===p&&u.dispatchEvent(new Vo("waiting",I))},200):g==="activating"&&(clearTimeout(u.wn),E||u.en.resolve(p))},u.dn=function(h){var f=u.hn,p=f!==navigator.serviceWorker.controller;u.dispatchEvent(new Vo("controlling",{isExternal:p,originalEvent:h,sw:f,isUpdate:u.mn})),p||u.on.resolve(f)},u.gn=(l=function(h){var f=h.data,p=h.ports,g=h.source;return hu(u.getSW(),function(){u.an.has(g)&&u.dispatchEvent(new Vo("message",{data:f,originalEvent:h,ports:p,sw:g}))})},function(){for(var h=[],f=0;f<arguments.length;f++)h[f]=arguments[f];try{return Promise.resolve(l.apply(this,h))}catch(p){return Promise.reject(p)}}),u.sn=a,u.nn=c,navigator.serviceWorker.addEventListener("message",u.gn),u}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var i,s,o=n.prototype;return o.register=function(a){var c=(a===void 0?{}:a).immediate,u=c!==void 0&&c;try{var l=this;return function(h,f){var p=h();return p&&p.then?p.then(f):f(p)}(function(){if(!u&&document.readyState!=="complete")return FS(new Promise(function(h){return window.addEventListener("load",h)}))},function(){return l.mn=Boolean(navigator.serviceWorker.controller),l.yn=l.pn(),hu(l.bn(),function(h){l.fn=h,l.yn&&(l.hn=l.yn,l.en.resolve(l.yn),l.on.resolve(l.yn),l.yn.addEventListener("statechange",l.ln,{once:!0}));var f=l.fn.waiting;return f&&Wd(f.scriptURL,l.sn.toString())&&(l.hn=f,Promise.resolve().then(function(){l.dispatchEvent(new Vo("waiting",{sw:f,wasWaitingBeforeRegister:!0}))}).then(function(){})),l.hn&&(l.rn.resolve(l.hn),l.an.add(l.hn)),l.fn.addEventListener("updatefound",l.cn),navigator.serviceWorker.addEventListener("controllerchange",l.dn),l.fn})})}catch(h){return Promise.reject(h)}},o.update=function(){try{return this.fn?FS(this.fn.update()):void 0}catch(a){return Promise.reject(a)}},o.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},o.messageSW=function(a){try{return hu(this.getSW(),function(c){return LS(c,a)})}catch(c){return Promise.reject(c)}},o.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&LS(this.fn.waiting,Jee)},o.pn=function(){var a=navigator.serviceWorker.controller;return a&&Wd(a.scriptURL,this.sn.toString())?a:void 0},o.bn=function(){try{var a=this;return function(c,u){try{var l=c()}catch(h){return u(h)}return l&&l.then?l.then(void 0,u):l}(function(){return hu(navigator.serviceWorker.register(a.sn,a.nn),function(c){return a.un=performance.now(),c})},function(c){throw c})}catch(c){return Promise.reject(c)}},i=n,(s=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&Yee(i.prototype,s),n}(function(){function t(){this.Pn=new Map}var e=t.prototype;return e.addEventListener=function(r,n){this.Sn(r).add(n)},e.removeEventListener=function(r,n){this.Sn(r).delete(n)},e.dispatchEvent=function(r){r.target=this;for(var n,i=Xee(this.Sn(r.type));!(n=i()).done;)(0,n.value)(r)},e.Sn=function(r){return this.Pn.has(r)||this.Pn.set(r,new Set),this.Pn.get(r)},t}());export{cte as M,ste as R,We as V,ote as a,hte as b,ute as c,ete as d,Xe as e,Ya as f,rte as g,tte as h,nte as i,sE as j,lte as l,ite as s,ate as v};
