/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */var br=Object.freeze({});function ue(t){return t==null}function C(t){return t!=null}function Me(t){return t===!0}function Mx(t){return t===!1}function mo(t){return typeof t=="string"||typeof t=="number"||typeof t=="symbol"||typeof t=="boolean"}function Tt(t){return t!==null&&typeof t=="object"}var Yh=Object.prototype.toString;function Bt(t){return Yh.call(t)==="[object Object]"}function Fx(t){return Yh.call(t)==="[object RegExp]"}function by(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function Xh(t){return C(t)&&typeof t.then=="function"&&typeof t.catch=="function"}function Ux(t){return t==null?"":Array.isArray(t)||Bt(t)&&t.toString===Yh?JSON.stringify(t,null,2):String(t)}function yo(t){var e=parseFloat(t);return isNaN(e)?t:e}function or(t,e){for(var r=Object.create(null),n=t.split(","),i=0;i<n.length;i++)r[n[i]]=!0;return e?function(s){return r[s.toLowerCase()]}:function(s){return r[s]}}or("slot,component",!0);var jx=or("key,ref,slot,slot-scope,is");function Mr(t,e){if(t.length){var r=t.indexOf(e);if(r>-1)return t.splice(r,1)}}var Bx=Object.prototype.hasOwnProperty;function At(t,e){return Bx.call(t,e)}function Mn(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var Vx=/-(\w)/g,Fn=Mn(function(t){return t.replace(Vx,function(e,r){return r?r.toUpperCase():""})}),qx=Mn(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),zx=/\B([A-Z])/g,wo=Mn(function(t){return t.replace(zx,"-$1").toLowerCase()});function Wx(t,e){function r(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return r._length=t.length,r}function Gx(t,e){return t.bind(e)}var Kx=Function.prototype.bind?Gx:Wx;function Qh(t,e){e=e||0;for(var r=t.length-e,n=new Array(r);r--;)n[r]=t[r+e];return n}function Ae(t,e){for(var r in e)t[r]=e[r];return t}function _y(t){for(var e={},r=0;r<t.length;r++)t[r]&&Ae(e,t[r]);return e}function $t(t,e,r){}var _c=function(t,e,r){return!1},Ey=function(t){return t};function Un(t,e){if(t===e)return!0;var r=Tt(t),n=Tt(e);if(r&&n)try{var i=Array.isArray(t),s=Array.isArray(e);if(i&&s)return t.length===e.length&&t.every(function(c,u){return Un(c,e[u])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(!i&&!s){var o=Object.keys(t),a=Object.keys(e);return o.length===a.length&&o.every(function(c){return Un(t[c],e[c])})}else return!1}catch(c){return!1}else return!r&&!n?String(t)===String(e):!1}function Iy(t,e){for(var r=0;r<t.length;r++)if(Un(t[r],e))return r;return-1}function Ec(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var Sy="data-server-rendered",Ic=["component","directive","filter"],Ty=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],er={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:_c,isReservedAttr:_c,isUnknownElement:_c,getTagNamespace:$t,parsePlatformTagName:Ey,mustUseProp:_c,async:!0,_lifecycleHooks:Ty},Hx=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function Yx(t){var e=(t+"").charCodeAt(0);return e===36||e===95}function Gi(t,e,r,n){Object.defineProperty(t,e,{value:r,enumerable:!!n,writable:!0,configurable:!0})}var Xx=new RegExp("[^"+Hx.source+".$_\\d]");function Qx(t){if(!Xx.test(t)){var e=t.split(".");return function(r){for(var n=0;n<e.length;n++){if(!r)return;r=r[e[n]]}return r}}}var Jx="__proto__"in{},Vt=typeof window!="undefined",Jh=typeof WXEnvironment!="undefined"&&!!WXEnvironment.platform,Ay=Jh&&WXEnvironment.platform.toLowerCase(),bt=Vt&&window.navigator.userAgent.toLowerCase(),Ki=bt&&/msie|trident/.test(bt),Hi=bt&&bt.indexOf("msie 9.0")>0,Zh=bt&&bt.indexOf("edge/")>0;bt&&bt.indexOf("android")>0;var Zx=bt&&/iphone|ipad|ipod|ios/.test(bt)||Ay==="ios";bt&&/chrome\/\d+/.test(bt);bt&&/phantomjs/.test(bt);var Oy=bt&&bt.match(/firefox\/(\d+)/),ef={}.watch,Cy=!1;if(Vt)try{var Ry={};Object.defineProperty(Ry,"passive",{get:function(){Cy=!0}}),window.addEventListener("test-passive",null,Ry)}catch(t){}var Sc,Tc=function(){return Sc===void 0&&(!Vt&&!Jh&&typeof global!="undefined"?Sc=global.process&&global.process.env.VUE_ENV==="server":Sc=!1),Sc},Ac=Vt&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function Yi(t){return typeof t=="function"&&/native code/.test(t.toString())}var Oc=typeof Symbol!="undefined"&&Yi(Symbol)&&typeof Reflect!="undefined"&&Yi(Reflect.ownKeys),bo;typeof Set!="undefined"&&Yi(Set)?bo=Set:bo=function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(r){return this.set[r]===!0},t.prototype.add=function(r){this.set[r]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var eN=$t,tN=0,qt=function(){this.id=tN++,this.subs=[]};qt.prototype.addSub=function(e){this.subs.push(e)};qt.prototype.removeSub=function(e){Mr(this.subs,e)};qt.prototype.depend=function(){qt.target&&qt.target.addDep(this)};qt.prototype.notify=function(){for(var e=this.subs.slice(),r=0,n=e.length;r<n;r++)e[r].update()};qt.target=null;var Cc=[];function _o(t){Cc.push(t),qt.target=t}function Eo(){Cc.pop(),qt.target=Cc[Cc.length-1]}var Dt=function(e,r,n,i,s,o,a,c){this.tag=e,this.data=r,this.children=n,this.text=i,this.elm=s,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=r&&r.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=c,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},xy={child:{configurable:!0}};xy.child.get=function(){return this.componentInstance};Object.defineProperties(Dt.prototype,xy);var jn=function(t){t===void 0&&(t="");var e=new Dt;return e.text=t,e.isComment=!0,e};function Xi(t){return new Dt(void 0,void 0,void 0,String(t))}function tf(t){var e=new Dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var Ny=Array.prototype,Rc=Object.create(Ny),rN=["push","pop","shift","unshift","splice","sort","reverse"];rN.forEach(function(t){var e=Ny[t];Gi(Rc,t,function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];var s=e.apply(this,n),o=this.__ob__,a;switch(t){case"push":case"unshift":a=n;break;case"splice":a=n.slice(2);break}return a&&o.observeArray(a),o.dep.notify(),s})});var nN=Object.getOwnPropertyNames(Rc),rf=!0;function sn(t){rf=t}var xc=function(e){this.value=e,this.dep=new qt,this.vmCount=0,Gi(e,"__ob__",this),Array.isArray(e)?(Jx?iN(e,Rc):sN(e,Rc,nN),this.observeArray(e)):this.walk(e)};xc.prototype.walk=function(e){for(var r=Object.keys(e),n=0;n<r.length;n++)Vn(e,r[n])};xc.prototype.observeArray=function(e){for(var r=0,n=e.length;r<n;r++)Bn(e[r])};function iN(t,e){t.__proto__=e}function sN(t,e,r){for(var n=0,i=r.length;n<i;n++){var s=r[n];Gi(t,s,e[s])}}function Bn(t,e){if(!(!Tt(t)||t instanceof Dt)){var r;return At(t,"__ob__")&&t.__ob__ instanceof xc?r=t.__ob__:rf&&!Tc()&&(Array.isArray(t)||Bt(t))&&Object.isExtensible(t)&&!t._isVue&&(r=new xc(t)),e&&r&&r.vmCount++,r}}function Vn(t,e,r,n,i){var s=new qt,o=Object.getOwnPropertyDescriptor(t,e);if(!(o&&o.configurable===!1)){var a=o&&o.get,c=o&&o.set;(!a||c)&&arguments.length===2&&(r=t[e]);var u=!i&&Bn(r);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var h=a?a.call(t):r;return qt.target&&(s.depend(),u&&(u.dep.depend(),Array.isArray(h)&&Py(h))),h},set:function(h){var f=a?a.call(t):r;h===f||h!==h&&f!==f||a&&!c||(c?c.call(t,h):r=h,u=!i&&Bn(h),s.notify())}})}}function nf(t,e,r){if(Array.isArray(t)&&by(e))return t.length=Math.max(t.length,e),t.splice(e,1,r),r;if(e in t&&!(e in Object.prototype))return t[e]=r,r;var n=t.__ob__;return t._isVue||n&&n.vmCount?r:n?(Vn(n.value,e,r),n.dep.notify(),r):(t[e]=r,r)}function ky(t,e){if(Array.isArray(t)&&by(e)){t.splice(e,1);return}var r=t.__ob__;t._isVue||r&&r.vmCount||!At(t,e)||(delete t[e],!!r&&r.dep.notify())}function Py(t){for(var e=void 0,r=0,n=t.length;r<n;r++)e=t[r],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Py(e)}var _r=er.optionMergeStrategies;function sf(t,e){if(!e)return t;for(var r,n,i,s=Oc?Reflect.ownKeys(e):Object.keys(e),o=0;o<s.length;o++)r=s[o],r!=="__ob__"&&(n=t[r],i=e[r],At(t,r)?n!==i&&Bt(n)&&Bt(i)&&sf(n,i):nf(t,r,i));return t}function of(t,e,r){return r?function(){var i=typeof e=="function"?e.call(r,r):e,s=typeof t=="function"?t.call(r,r):t;return i?sf(i,s):s}:e?t?function(){return sf(typeof e=="function"?e.call(this,this):e,typeof t=="function"?t.call(this,this):t)}:e:t}_r.data=function(t,e,r){return r?of(t,e,r):e&&typeof e!="function"?t:of(t,e)};function oN(t,e){var r=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return r&&aN(r)}function aN(t){for(var e=[],r=0;r<t.length;r++)e.indexOf(t[r])===-1&&e.push(t[r]);return e}Ty.forEach(function(t){_r[t]=oN});function cN(t,e,r,n){var i=Object.create(t||null);return e?Ae(i,e):i}Ic.forEach(function(t){_r[t+"s"]=cN});_r.watch=function(t,e,r,n){if(t===ef&&(t=void 0),e===ef&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};Ae(i,t);for(var s in e){var o=i[s],a=e[s];o&&!Array.isArray(o)&&(o=[o]),i[s]=o?o.concat(a):Array.isArray(a)?a:[a]}return i};_r.props=_r.methods=_r.inject=_r.computed=function(t,e,r,n){if(!t)return e;var i=Object.create(null);return Ae(i,t),e&&Ae(i,e),i};_r.provide=of;var uN=function(t,e){return e===void 0?t:e};function lN(t,e){var r=t.props;if(!!r){var n={},i,s,o;if(Array.isArray(r))for(i=r.length;i--;)s=r[i],typeof s=="string"&&(o=Fn(s),n[o]={type:null});else if(Bt(r))for(var a in r)s=r[a],o=Fn(a),n[o]=Bt(s)?s:{type:s};t.props=n}}function hN(t,e){var r=t.inject;if(!!r){var n=t.inject={};if(Array.isArray(r))for(var i=0;i<r.length;i++)n[r[i]]={from:r[i]};else if(Bt(r))for(var s in r){var o=r[s];n[s]=Bt(o)?Ae({from:s},o):{from:o}}}}function fN(t){var e=t.directives;if(e)for(var r in e){var n=e[r];typeof n=="function"&&(e[r]={bind:n,update:n})}}function qn(t,e,r){if(typeof e=="function"&&(e=e.options),lN(e),hN(e),fN(e),!e._base&&(e.extends&&(t=qn(t,e.extends,r)),e.mixins))for(var n=0,i=e.mixins.length;n<i;n++)t=qn(t,e.mixins[n],r);var s={},o;for(o in t)a(o);for(o in e)At(t,o)||a(o);function a(c){var u=_r[c]||uN;s[c]=u(t[c],e[c],r,c)}return s}function af(t,e,r,n){if(typeof r=="string"){var i=t[e];if(At(i,r))return i[r];var s=Fn(r);if(At(i,s))return i[s];var o=qx(s);if(At(i,o))return i[o];var a=i[r]||i[s]||i[o];return a}}function cf(t,e,r,n){var i=e[t],s=!At(r,t),o=r[t],a=Dy(Boolean,i.type);if(a>-1){if(s&&!At(i,"default"))o=!1;else if(o===""||o===wo(t)){var c=Dy(String,i.type);(c<0||a<c)&&(o=!0)}}if(o===void 0){o=dN(n,i,t);var u=rf;sn(!0),Bn(o),sn(u)}return o}function dN(t,e,r){if(!!At(e,"default")){var n=e.default;return t&&t.$options.propsData&&t.$options.propsData[r]===void 0&&t._props[r]!==void 0?t._props[r]:typeof n=="function"&&uf(e.type)!=="Function"?n.call(t):n}}var pN=/^\s*function (\w+)/;function uf(t){var e=t&&t.toString().match(pN);return e?e[1]:""}function $y(t,e){return uf(t)===uf(e)}function Dy(t,e){if(!Array.isArray(e))return $y(e,t)?0:-1;for(var r=0,n=e.length;r<n;r++)if($y(e[r],t))return r;return-1}function zn(t,e,r){_o();try{if(e)for(var n=e;n=n.$parent;){var i=n.$options.errorCaptured;if(i)for(var s=0;s<i.length;s++)try{var o=i[s].call(n,t,e,r)===!1;if(o)return}catch(a){Ly(a,n,"errorCaptured hook")}}Ly(t,e,r)}finally{Eo()}}function Qi(t,e,r,n,i){var s;try{s=r?t.apply(e,r):t.call(e),s&&!s._isVue&&Xh(s)&&!s._handled&&(s.catch(function(o){return zn(o,n,i+" (Promise/async)")}),s._handled=!0)}catch(o){zn(o,n,i)}return s}function Ly(t,e,r){if(er.errorHandler)try{return er.errorHandler.call(null,t,e,r)}catch(n){n!==t&&My(n)}My(t)}function My(t,e,r){if((Vt||Jh)&&typeof console!="undefined")console.error(t);else throw t}var lf=!1,hf=[],ff=!1;function Nc(){ff=!1;var t=hf.slice(0);hf.length=0;for(var e=0;e<t.length;e++)t[e]()}var Io;if(typeof Promise!="undefined"&&Yi(Promise)){var vN=Promise.resolve();Io=function(){vN.then(Nc),Zx&&setTimeout($t)},lf=!0}else if(!Ki&&typeof MutationObserver!="undefined"&&(Yi(MutationObserver)||MutationObserver.toString()==="[object MutationObserverConstructor]")){var kc=1,gN=new MutationObserver(Nc),Fy=document.createTextNode(String(kc));gN.observe(Fy,{characterData:!0}),Io=function(){kc=(kc+1)%2,Fy.data=String(kc)},lf=!0}else typeof setImmediate!="undefined"&&Yi(setImmediate)?Io=function(){setImmediate(Nc)}:Io=function(){setTimeout(Nc,0)};function df(t,e){var r;if(hf.push(function(){if(t)try{t.call(e)}catch(n){zn(n,e,"nextTick")}else r&&r(e)}),ff||(ff=!0,Io()),!t&&typeof Promise!="undefined")return new Promise(function(n){r=n})}var Uy=new bo;function Pc(t){pf(t,Uy),Uy.clear()}function pf(t,e){var r,n,i=Array.isArray(t);if(!(!i&&!Tt(t)||Object.isFrozen(t)||t instanceof Dt)){if(t.__ob__){var s=t.__ob__.dep.id;if(e.has(s))return;e.add(s)}if(i)for(r=t.length;r--;)pf(t[r],e);else for(n=Object.keys(t),r=n.length;r--;)pf(t[n[r]],e)}}var jy=Mn(function(t){var e=t.charAt(0)==="&";t=e?t.slice(1):t;var r=t.charAt(0)==="~";t=r?t.slice(1):t;var n=t.charAt(0)==="!";return t=n?t.slice(1):t,{name:t,once:r,capture:n,passive:e}});function vf(t,e){function r(){var n=arguments,i=r.fns;if(Array.isArray(i))for(var s=i.slice(),o=0;o<s.length;o++)Qi(s[o],null,n,e,"v-on handler");else return Qi(i,null,arguments,e,"v-on handler")}return r.fns=t,r}function By(t,e,r,n,i,s){var o,a,c,u;for(o in t)a=t[o],c=e[o],u=jy(o),ue(a)||(ue(c)?(ue(a.fns)&&(a=t[o]=vf(a,s)),Me(u.once)&&(a=t[o]=i(u.name,a,u.capture)),r(u.name,a,u.capture,u.passive,u.params)):a!==c&&(c.fns=a,t[o]=c));for(o in e)ue(t[o])&&(u=jy(o),n(u.name,e[o],u.capture))}function on(t,e,r){t instanceof Dt&&(t=t.data.hook||(t.data.hook={}));var n,i=t[e];function s(){r.apply(this,arguments),Mr(n.fns,s)}ue(i)?n=vf([s]):C(i.fns)&&Me(i.merged)?(n=i,n.fns.push(s)):n=vf([i,s]),n.merged=!0,t[e]=n}function mN(t,e,r){var n=e.options.props;if(!ue(n)){var i={},s=t.attrs,o=t.props;if(C(s)||C(o))for(var a in n){var c=wo(a);Vy(i,o,a,c,!0)||Vy(i,s,a,c,!1)}return i}}function Vy(t,e,r,n,i){if(C(e)){if(At(e,r))return t[r]=e[r],i||delete e[r],!0;if(At(e,n))return t[r]=e[n],i||delete e[n],!0}return!1}function yN(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function gf(t){return mo(t)?[Xi(t)]:Array.isArray(t)?qy(t):void 0}function So(t){return C(t)&&C(t.text)&&Mx(t.isComment)}function qy(t,e){var r=[],n,i,s,o;for(n=0;n<t.length;n++)i=t[n],!(ue(i)||typeof i=="boolean")&&(s=r.length-1,o=r[s],Array.isArray(i)?i.length>0&&(i=qy(i,(e||"")+"_"+n),So(i[0])&&So(o)&&(r[s]=Xi(o.text+i[0].text),i.shift()),r.push.apply(r,i)):mo(i)?So(o)?r[s]=Xi(o.text+i):i!==""&&r.push(Xi(i)):So(i)&&So(o)?r[s]=Xi(o.text+i.text):(Me(t._isVList)&&C(i.tag)&&ue(i.key)&&C(e)&&(i.key="__vlist"+e+"_"+n+"__"),r.push(i)));return r}function wN(t){var e=t.$options.provide;e&&(t._provided=typeof e=="function"?e.call(t):e)}function bN(t){var e=zy(t.$options.inject,t);e&&(sn(!1),Object.keys(e).forEach(function(r){Vn(t,r,e[r])}),sn(!0))}function zy(t,e){if(t){for(var r=Object.create(null),n=Oc?Reflect.ownKeys(t):Object.keys(t),i=0;i<n.length;i++){var s=n[i];if(s!=="__ob__"){for(var o=t[s].from,a=e;a;){if(a._provided&&At(a._provided,o)){r[s]=a._provided[o];break}a=a.$parent}if(!a&&"default"in t[s]){var c=t[s].default;r[s]=typeof c=="function"?c.call(e):c}}}return r}}function mf(t,e){if(!t||!t.length)return{};for(var r={},n=0,i=t.length;n<i;n++){var s=t[n],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,(s.context===e||s.fnContext===e)&&o&&o.slot!=null){var a=o.slot,c=r[a]||(r[a]=[]);s.tag==="template"?c.push.apply(c,s.children||[]):c.push(s)}else(r.default||(r.default=[])).push(s)}for(var u in r)r[u].every(_N)&&delete r[u];return r}function _N(t){return t.isComment&&!t.asyncFactory||t.text===" "}function To(t){return t.isComment&&t.asyncFactory}function $c(t,e,r){var n,i=Object.keys(e).length>0,s=t?!!t.$stable:!i,o=t&&t.$key;if(!t)n={};else{if(t._normalized)return t._normalized;if(s&&r&&r!==br&&o===r.$key&&!i&&!r.$hasNormal)return r;n={};for(var a in t)t[a]&&a[0]!=="$"&&(n[a]=EN(e,a,t[a]))}for(var c in e)c in n||(n[c]=IN(e,c));return t&&Object.isExtensible(t)&&(t._normalized=n),Gi(n,"$stable",s),Gi(n,"$key",o),Gi(n,"$hasNormal",i),n}function EN(t,e,r){var n=function(){var i=arguments.length?r.apply(null,arguments):r({});i=i&&typeof i=="object"&&!Array.isArray(i)?[i]:gf(i);var s=i&&i[0];return i&&(!s||i.length===1&&s.isComment&&!To(s))?void 0:i};return r.proxy&&Object.defineProperty(t,e,{get:n,enumerable:!0,configurable:!0}),n}function IN(t,e){return function(){return t[e]}}function SN(t,e){var r,n,i,s,o;if(Array.isArray(t)||typeof t=="string")for(r=new Array(t.length),n=0,i=t.length;n<i;n++)r[n]=e(t[n],n);else if(typeof t=="number")for(r=new Array(t),n=0;n<t;n++)r[n]=e(n+1,n);else if(Tt(t))if(Oc&&t[Symbol.iterator]){r=[];for(var a=t[Symbol.iterator](),c=a.next();!c.done;)r.push(e(c.value,r.length)),c=a.next()}else for(s=Object.keys(t),r=new Array(s.length),n=0,i=s.length;n<i;n++)o=s[n],r[n]=e(t[o],o,n);return C(r)||(r=[]),r._isVList=!0,r}function TN(t,e,r,n){var i=this.$scopedSlots[t],s;i?(r=r||{},n&&(r=Ae(Ae({},n),r)),s=i(r)||(typeof e=="function"?e():e)):s=this.$slots[t]||(typeof e=="function"?e():e);var o=r&&r.slot;return o?this.$createElement("template",{slot:o},s):s}function AN(t){return af(this.$options,"filters",t)||Ey}function Wy(t,e){return Array.isArray(t)?t.indexOf(e)===-1:t!==e}function ON(t,e,r,n,i){var s=er.keyCodes[e]||r;return i&&n&&!er.keyCodes[e]?Wy(i,n):s?Wy(s,t):n?wo(n)!==e:t===void 0}function CN(t,e,r,n,i){if(r&&Tt(r)){Array.isArray(r)&&(r=_y(r));var s,o=function(c){if(c==="class"||c==="style"||jx(c))s=t;else{var u=t.attrs&&t.attrs.type;s=n||er.mustUseProp(e,u,c)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var l=Fn(c),h=wo(c);if(!(l in s)&&!(h in s)&&(s[c]=r[c],i)){var f=t.on||(t.on={});f["update:"+c]=function(p){r[c]=p}}};for(var a in r)o(a)}return t}function RN(t,e){var r=this._staticTrees||(this._staticTrees=[]),n=r[t];return n&&!e||(n=r[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Gy(n,"__static__"+t,!1)),n}function xN(t,e,r){return Gy(t,"__once__"+e+(r?"_"+r:""),!0),t}function Gy(t,e,r){if(Array.isArray(t))for(var n=0;n<t.length;n++)t[n]&&typeof t[n]!="string"&&Ky(t[n],e+"_"+n,r);else Ky(t,e,r)}function Ky(t,e,r){t.isStatic=!0,t.key=e,t.isOnce=r}function NN(t,e){if(e&&Bt(e)){var r=t.on=t.on?Ae({},t.on):{};for(var n in e){var i=r[n],s=e[n];r[n]=i?[].concat(i,s):s}}return t}function Hy(t,e,r,n){e=e||{$stable:!r};for(var i=0;i<t.length;i++){var s=t[i];Array.isArray(s)?Hy(s,e,r):s&&(s.proxy&&(s.fn.proxy=!0),e[s.key]=s.fn)}return n&&(e.$key=n),e}function kN(t,e){for(var r=0;r<e.length;r+=2){var n=e[r];typeof n=="string"&&n&&(t[e[r]]=e[r+1])}return t}function PN(t,e){return typeof t=="string"?e+t:t}function Yy(t){t._o=xN,t._n=yo,t._s=Ux,t._l=SN,t._t=TN,t._q=Un,t._i=Iy,t._m=RN,t._f=AN,t._k=ON,t._b=CN,t._v=Xi,t._e=jn,t._u=Hy,t._g=NN,t._d=kN,t._p=PN}function yf(t,e,r,n,i){var s=this,o=i.options,a;At(n,"_uid")?(a=Object.create(n),a._original=n):(a=n,n=n._original);var c=Me(o._compiled),u=!c;this.data=t,this.props=e,this.children=r,this.parent=n,this.listeners=t.on||br,this.injections=zy(o.inject,n),this.slots=function(){return s.$slots||$c(t.scopedSlots,s.$slots=mf(r,n)),s.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return $c(t.scopedSlots,this.slots())}}),c&&(this.$options=o,this.$slots=this.slots(),this.$scopedSlots=$c(t.scopedSlots,this.$slots)),o._scopeId?this._c=function(l,h,f,p){var g=Dc(a,l,h,f,p,u);return g&&!Array.isArray(g)&&(g.fnScopeId=o._scopeId,g.fnContext=n),g}:this._c=function(l,h,f,p){return Dc(a,l,h,f,p,u)}}Yy(yf.prototype);function $N(t,e,r,n,i){var s=t.options,o={},a=s.props;if(C(a))for(var c in a)o[c]=cf(c,a,e||br);else C(r.attrs)&&Qy(o,r.attrs),C(r.props)&&Qy(o,r.props);var u=new yf(r,o,i,n,t),l=s.render.call(null,u._c,u);if(l instanceof Dt)return Xy(l,r,u.parent,s);if(Array.isArray(l)){for(var h=gf(l)||[],f=new Array(h.length),p=0;p<h.length;p++)f[p]=Xy(h[p],r,u.parent,s);return f}}function Xy(t,e,r,n,i){var s=tf(t);return s.fnContext=r,s.fnOptions=n,e.slot&&((s.data||(s.data={})).slot=e.slot),s}function Qy(t,e){for(var r in e)t[Fn(r)]=e[r]}var wf={init:function(e,r){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;wf.prepatch(n,n)}else{var i=e.componentInstance=DN(e,Wn);i.$mount(r?e.elm:void 0,r)}},prepatch:function(e,r){var n=r.componentOptions,i=r.componentInstance=e.componentInstance;ek(i,n.propsData,n.listeners,r,n.children)},insert:function(e){var r=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,ar(n,"mounted")),e.data.keepAlive&&(r._isMounted?ik(n):Ef(n,!0))},destroy:function(e){var r=e.componentInstance;r._isDestroyed||(e.data.keepAlive?ow(r,!0):r.$destroy())}},Jy=Object.keys(wf);function Zy(t,e,r,n,i){if(!ue(t)){var s=r.$options._base;if(Tt(t)&&(t=s.extend(t)),typeof t=="function"){var o;if(ue(t.cid)&&(o=t,t=WN(o,s),t===void 0))return zN(o,e,r,n,i);e=e||{},xf(t),C(e.model)&&FN(t.options,e);var a=mN(e,t);if(Me(t.options.functional))return $N(t,a,e,r,n);var c=e.on;if(e.on=e.nativeOn,Me(t.options.abstract)){var u=e.slot;e={},u&&(e.slot=u)}LN(e);var l=t.options.name||i,h=new Dt("vue-component-"+t.cid+(l?"-"+l:""),e,void 0,void 0,void 0,r,{Ctor:t,propsData:a,listeners:c,tag:i,children:n},o);return h}}}function DN(t,e){var r={_isComponent:!0,_parentVnode:t,parent:e},n=t.data.inlineTemplate;return C(n)&&(r.render=n.render,r.staticRenderFns=n.staticRenderFns),new t.componentOptions.Ctor(r)}function LN(t){for(var e=t.hook||(t.hook={}),r=0;r<Jy.length;r++){var n=Jy[r],i=e[n],s=wf[n];i!==s&&!(i&&i._merged)&&(e[n]=i?MN(s,i):s)}}function MN(t,e){var r=function(n,i){t(n,i),e(n,i)};return r._merged=!0,r}function FN(t,e){var r=t.model&&t.model.prop||"value",n=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[r]=e.model.value;var i=e.on||(e.on={}),s=i[n],o=e.model.callback;C(s)?(Array.isArray(s)?s.indexOf(o)===-1:s!==o)&&(i[n]=[o].concat(s)):i[n]=o}var UN=1,ew=2;function Dc(t,e,r,n,i,s){return(Array.isArray(r)||mo(r))&&(i=n,n=r,r=void 0),Me(s)&&(i=ew),jN(t,e,r,n,i)}function jN(t,e,r,n,i){if(C(r)&&C(r.__ob__)||(C(r)&&C(r.is)&&(e=r.is),!e))return jn();Array.isArray(n)&&typeof n[0]=="function"&&(r=r||{},r.scopedSlots={default:n[0]},n.length=0),i===ew?n=gf(n):i===UN&&(n=yN(n));var s,o;if(typeof e=="string"){var a;o=t.$vnode&&t.$vnode.ns||er.getTagNamespace(e),er.isReservedTag(e)?s=new Dt(er.parsePlatformTagName(e),r,n,void 0,void 0,t):(!r||!r.pre)&&C(a=af(t.$options,"components",e))?s=Zy(a,r,t,n,e):s=new Dt(e,r,n,void 0,void 0,t)}else s=Zy(e,r,t,n);return Array.isArray(s)?s:C(s)?(C(o)&&tw(s,o),C(r)&&BN(r),s):jn()}function tw(t,e,r){if(t.ns=e,t.tag==="foreignObject"&&(e=void 0,r=!0),C(t.children))for(var n=0,i=t.children.length;n<i;n++){var s=t.children[n];C(s.tag)&&(ue(s.ns)||Me(r)&&s.tag!=="svg")&&tw(s,e,r)}}function BN(t){Tt(t.style)&&Pc(t.style),Tt(t.class)&&Pc(t.class)}function VN(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,n=r&&r.context;t.$slots=mf(e._renderChildren,n),t.$scopedSlots=br,t._c=function(s,o,a,c){return Dc(t,s,o,a,c,!1)},t.$createElement=function(s,o,a,c){return Dc(t,s,o,a,c,!0)};var i=r&&r.data;Vn(t,"$attrs",i&&i.attrs||br,null,!0),Vn(t,"$listeners",e._parentListeners||br,null,!0)}var bf=null;function qN(t){Yy(t.prototype),t.prototype.$nextTick=function(e){return df(e,this)},t.prototype._render=function(){var e=this,r=e.$options,n=r.render,i=r._parentVnode;i&&(e.$scopedSlots=$c(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;var s;try{bf=e,s=n.call(e._renderProxy,e.$createElement)}catch(o){zn(o,e,"render"),s=e._vnode}finally{bf=null}return Array.isArray(s)&&s.length===1&&(s=s[0]),s instanceof Dt||(s=jn()),s.parent=i,s}}function _f(t,e){return(t.__esModule||Oc&&t[Symbol.toStringTag]==="Module")&&(t=t.default),Tt(t)?e.extend(t):t}function zN(t,e,r,n,i){var s=jn();return s.asyncFactory=t,s.asyncMeta={data:e,context:r,children:n,tag:i},s}function WN(t,e){if(Me(t.error)&&C(t.errorComp))return t.errorComp;if(C(t.resolved))return t.resolved;var r=bf;if(r&&C(t.owners)&&t.owners.indexOf(r)===-1&&t.owners.push(r),Me(t.loading)&&C(t.loadingComp))return t.loadingComp;if(r&&!C(t.owners)){var n=t.owners=[r],i=!0,s=null,o=null;r.$on("hook:destroyed",function(){return Mr(n,r)});var a=function(h){for(var f=0,p=n.length;f<p;f++)n[f].$forceUpdate();h&&(n.length=0,s!==null&&(clearTimeout(s),s=null),o!==null&&(clearTimeout(o),o=null))},c=Ec(function(h){t.resolved=_f(h,e),i?n.length=0:a(!0)}),u=Ec(function(h){C(t.errorComp)&&(t.error=!0,a(!0))}),l=t(c,u);return Tt(l)&&(Xh(l)?ue(t.resolved)&&l.then(c,u):Xh(l.component)&&(l.component.then(c,u),C(l.error)&&(t.errorComp=_f(l.error,e)),C(l.loading)&&(t.loadingComp=_f(l.loading,e),l.delay===0?t.loading=!0:s=setTimeout(function(){s=null,ue(t.resolved)&&ue(t.error)&&(t.loading=!0,a(!1))},l.delay||200)),C(l.timeout)&&(o=setTimeout(function(){o=null,ue(t.resolved)&&u(null)},l.timeout)))),i=!1,t.loading?t.loadingComp:t.resolved}}function rw(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var r=t[e];if(C(r)&&(C(r.componentOptions)||To(r)))return r}}function GN(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&nw(t,e)}var Ao;function KN(t,e){Ao.$on(t,e)}function HN(t,e){Ao.$off(t,e)}function YN(t,e){var r=Ao;return function n(){var i=e.apply(null,arguments);i!==null&&r.$off(t,n)}}function nw(t,e,r){Ao=t,By(e,r||{},KN,HN,YN,t),Ao=void 0}function XN(t){var e=/^hook:/;t.prototype.$on=function(r,n){var i=this;if(Array.isArray(r))for(var s=0,o=r.length;s<o;s++)i.$on(r[s],n);else(i._events[r]||(i._events[r]=[])).push(n),e.test(r)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(r,n){var i=this;function s(){i.$off(r,s),n.apply(i,arguments)}return s.fn=n,i.$on(r,s),i},t.prototype.$off=function(r,n){var i=this;if(!arguments.length)return i._events=Object.create(null),i;if(Array.isArray(r)){for(var s=0,o=r.length;s<o;s++)i.$off(r[s],n);return i}var a=i._events[r];if(!a)return i;if(!n)return i._events[r]=null,i;for(var c,u=a.length;u--;)if(c=a[u],c===n||c.fn===n){a.splice(u,1);break}return i},t.prototype.$emit=function(r){var n=this,i=n._events[r];if(i){i=i.length>1?Qh(i):i;for(var s=Qh(arguments,1),o='event handler for "'+r+'"',a=0,c=i.length;a<c;a++)Qi(i[a],n,s,n,o)}return n}}var Wn=null;function iw(t){var e=Wn;return Wn=t,function(){Wn=e}}function QN(t){var e=t.$options,r=e.parent;if(r&&!e.abstract){for(;r.$options.abstract&&r.$parent;)r=r.$parent;r.$children.push(t)}t.$parent=r,t.$root=r?r.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function JN(t){t.prototype._update=function(e,r){var n=this,i=n.$el,s=n._vnode,o=iw(n);n._vnode=e,s?n.$el=n.__patch__(s,e):n.$el=n.__patch__(n.$el,e,r,!1),o(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},t.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){ar(e,"beforeDestroy"),e._isBeingDestroyed=!0;var r=e.$parent;r&&!r._isBeingDestroyed&&!e.$options.abstract&&Mr(r.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),ar(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function ZN(t,e,r){t.$el=e,t.$options.render||(t.$options.render=jn),ar(t,"beforeMount");var n;return n=function(){t._update(t._render(),r)},new cr(t,n,$t,{before:function(){t._isMounted&&!t._isDestroyed&&ar(t,"beforeUpdate")}},!0),r=!1,t.$vnode==null&&(t._isMounted=!0,ar(t,"mounted")),t}function ek(t,e,r,n,i){var s=n.data.scopedSlots,o=t.$scopedSlots,a=!!(s&&!s.$stable||o!==br&&!o.$stable||s&&t.$scopedSlots.$key!==s.$key||!s&&t.$scopedSlots.$key),c=!!(i||t.$options._renderChildren||a);if(t.$options._parentVnode=n,t.$vnode=n,t._vnode&&(t._vnode.parent=n),t.$options._renderChildren=i,t.$attrs=n.data.attrs||br,t.$listeners=r||br,e&&t.$options.props){sn(!1);for(var u=t._props,l=t.$options._propKeys||[],h=0;h<l.length;h++){var f=l[h],p=t.$options.props;u[f]=cf(f,p,e,t)}sn(!0),t.$options.propsData=e}r=r||br;var g=t.$options._parentListeners;t.$options._parentListeners=r,nw(t,r,g),c&&(t.$slots=mf(i,n.context),t.$forceUpdate())}function sw(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function Ef(t,e){if(e){if(t._directInactive=!1,sw(t))return}else if(t._directInactive)return;if(t._inactive||t._inactive===null){t._inactive=!1;for(var r=0;r<t.$children.length;r++)Ef(t.$children[r]);ar(t,"activated")}}function ow(t,e){if(!(e&&(t._directInactive=!0,sw(t)))&&!t._inactive){t._inactive=!0;for(var r=0;r<t.$children.length;r++)ow(t.$children[r]);ar(t,"deactivated")}}function ar(t,e){_o();var r=t.$options[e],n=e+" hook";if(r)for(var i=0,s=r.length;i<s;i++)Qi(r[i],t,null,t,n);t._hasHookEvent&&t.$emit("hook:"+e),Eo()}var Fr=[],If=[],Lc={},Sf=!1,Tf=!1,Ji=0;function tk(){Ji=Fr.length=If.length=0,Lc={},Sf=Tf=!1}var aw=0,Af=Date.now;if(Vt&&!Ki){var Of=window.performance;Of&&typeof Of.now=="function"&&Af()>document.createEvent("Event").timeStamp&&(Af=function(){return Of.now()})}function rk(){aw=Af(),Tf=!0;var t,e;for(Fr.sort(function(i,s){return i.id-s.id}),Ji=0;Ji<Fr.length;Ji++)t=Fr[Ji],t.before&&t.before(),e=t.id,Lc[e]=null,t.run();var r=If.slice(),n=Fr.slice();tk(),sk(r),nk(n),Ac&&er.devtools&&Ac.emit("flush")}function nk(t){for(var e=t.length;e--;){var r=t[e],n=r.vm;n._watcher===r&&n._isMounted&&!n._isDestroyed&&ar(n,"updated")}}function ik(t){t._inactive=!1,If.push(t)}function sk(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Ef(t[e],!0)}function ok(t){var e=t.id;if(Lc[e]==null){if(Lc[e]=!0,!Tf)Fr.push(t);else{for(var r=Fr.length-1;r>Ji&&Fr[r].id>t.id;)r--;Fr.splice(r+1,0,t)}Sf||(Sf=!0,df(rk))}}var ak=0,cr=function(e,r,n,i,s){this.vm=e,s&&(e._watcher=this),e._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++ak,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new bo,this.newDepIds=new bo,this.expression="",typeof r=="function"?this.getter=r:(this.getter=Qx(r),this.getter||(this.getter=$t)),this.value=this.lazy?void 0:this.get()};cr.prototype.get=function(){_o(this);var e,r=this.vm;try{e=this.getter.call(r,r)}catch(n){if(this.user)zn(n,r,'getter for watcher "'+this.expression+'"');else throw n}finally{this.deep&&Pc(e),Eo(),this.cleanupDeps()}return e};cr.prototype.addDep=function(e){var r=e.id;this.newDepIds.has(r)||(this.newDepIds.add(r),this.newDeps.push(e),this.depIds.has(r)||e.addSub(this))};cr.prototype.cleanupDeps=function(){for(var e=this.deps.length;e--;){var r=this.deps[e];this.newDepIds.has(r.id)||r.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0};cr.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():ok(this)};cr.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||Tt(e)||this.deep){var r=this.value;if(this.value=e,this.user){var n='callback for watcher "'+this.expression+'"';Qi(this.cb,this.vm,[e,r],this.vm,n)}else this.cb.call(this.vm,e,r)}}};cr.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1};cr.prototype.depend=function(){for(var e=this.deps.length;e--;)this.deps[e].depend()};cr.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||Mr(this.vm._watchers,this);for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1}};var an={enumerable:!0,configurable:!0,get:$t,set:$t};function Cf(t,e,r){an.get=function(){return this[e][r]},an.set=function(i){this[e][r]=i},Object.defineProperty(t,r,an)}function ck(t){t._watchers=[];var e=t.$options;e.props&&uk(t,e.props),e.methods&&pk(t,e.methods),e.data?lk(t):Bn(t._data={},!0),e.computed&&dk(t,e.computed),e.watch&&e.watch!==ef&&vk(t,e.watch)}function uk(t,e){var r=t.$options.propsData||{},n=t._props={},i=t.$options._propKeys=[],s=!t.$parent;s||sn(!1);var o=function(c){i.push(c);var u=cf(c,e,r,t);Vn(n,c,u),c in t||Cf(t,"_props",c)};for(var a in e)o(a);sn(!0)}function lk(t){var e=t.$options.data;e=t._data=typeof e=="function"?hk(e,t):e||{},Bt(e)||(e={});var r=Object.keys(e),n=t.$options.props;t.$options.methods;for(var i=r.length;i--;){var s=r[i];n&&At(n,s)||Yx(s)||Cf(t,"_data",s)}Bn(e,!0)}function hk(t,e){_o();try{return t.call(e,e)}catch(r){return zn(r,e,"data()"),{}}finally{Eo()}}var fk={lazy:!0};function dk(t,e){var r=t._computedWatchers=Object.create(null),n=Tc();for(var i in e){var s=e[i],o=typeof s=="function"?s:s.get;n||(r[i]=new cr(t,o||$t,$t,fk)),i in t||cw(t,i,s)}}function cw(t,e,r){var n=!Tc();typeof r=="function"?(an.get=n?uw(e):lw(r),an.set=$t):(an.get=r.get?n&&r.cache!==!1?uw(e):lw(r.get):$t,an.set=r.set||$t),Object.defineProperty(t,e,an)}function uw(t){return function(){var r=this._computedWatchers&&this._computedWatchers[t];if(r)return r.dirty&&r.evaluate(),qt.target&&r.depend(),r.value}}function lw(t){return function(){return t.call(this,this)}}function pk(t,e){t.$options.props;for(var r in e)t[r]=typeof e[r]!="function"?$t:Kx(e[r],t)}function vk(t,e){for(var r in e){var n=e[r];if(Array.isArray(n))for(var i=0;i<n.length;i++)Rf(t,r,n[i]);else Rf(t,r,n)}}function Rf(t,e,r,n){return Bt(r)&&(n=r,r=r.handler),typeof r=="string"&&(r=t[r]),t.$watch(e,r,n)}function gk(t){var e={};e.get=function(){return this._data};var r={};r.get=function(){return this._props},Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",r),t.prototype.$set=nf,t.prototype.$delete=ky,t.prototype.$watch=function(n,i,s){var o=this;if(Bt(i))return Rf(o,n,i,s);s=s||{},s.user=!0;var a=new cr(o,n,i,s);if(s.immediate){var c='callback for immediate watcher "'+a.expression+'"';_o(),Qi(i,o,[a.value],o,c),Eo()}return function(){a.teardown()}}}var mk=0;function yk(t){t.prototype._init=function(e){var r=this;r._uid=mk++,r._isVue=!0,e&&e._isComponent?wk(r,e):r.$options=qn(xf(r.constructor),e||{},r),r._renderProxy=r,r._self=r,QN(r),GN(r),VN(r),ar(r,"beforeCreate"),bN(r),ck(r),wN(r),ar(r,"created"),r.$options.el&&r.$mount(r.$options.el)}}function wk(t,e){var r=t.$options=Object.create(t.constructor.options),n=e._parentVnode;r.parent=e.parent,r._parentVnode=n;var i=n.componentOptions;r.propsData=i.propsData,r._parentListeners=i.listeners,r._renderChildren=i.children,r._componentTag=i.tag,e.render&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns)}function xf(t){var e=t.options;if(t.super){var r=xf(t.super),n=t.superOptions;if(r!==n){t.superOptions=r;var i=bk(t);i&&Ae(t.extendOptions,i),e=t.options=qn(r,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function bk(t){var e,r=t.options,n=t.sealedOptions;for(var i in r)r[i]!==n[i]&&(e||(e={}),e[i]=r[i]);return e}function Fe(t){this._init(t)}yk(Fe);gk(Fe);XN(Fe);JN(Fe);qN(Fe);function _k(t){t.use=function(e){var r=this._installedPlugins||(this._installedPlugins=[]);if(r.indexOf(e)>-1)return this;var n=Qh(arguments,1);return n.unshift(this),typeof e.install=="function"?e.install.apply(e,n):typeof e=="function"&&e.apply(null,n),r.push(e),this}}function Ek(t){t.mixin=function(e){return this.options=qn(this.options,e),this}}function Ik(t){t.cid=0;var e=1;t.extend=function(r){r=r||{};var n=this,i=n.cid,s=r._Ctor||(r._Ctor={});if(s[i])return s[i];var o=r.name||n.options.name,a=function(u){this._init(u)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=qn(n.options,r),a.super=n,a.options.props&&Sk(a),a.options.computed&&Tk(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,Ic.forEach(function(c){a[c]=n[c]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=r,a.sealedOptions=Ae({},a.options),s[i]=a,a}}function Sk(t){var e=t.options.props;for(var r in e)Cf(t.prototype,"_props",r)}function Tk(t){var e=t.options.computed;for(var r in e)cw(t.prototype,r,e[r])}function Ak(t){Ic.forEach(function(e){t[e]=function(r,n){return n?(e==="component"&&Bt(n)&&(n.name=n.name||r,n=this.options._base.extend(n)),e==="directive"&&typeof n=="function"&&(n={bind:n,update:n}),this.options[e+"s"][r]=n,n):this.options[e+"s"][r]}})}function hw(t){return t&&(t.Ctor.options.name||t.tag)}function Mc(t,e){return Array.isArray(t)?t.indexOf(e)>-1:typeof t=="string"?t.split(",").indexOf(e)>-1:Fx(t)?t.test(e):!1}function fw(t,e){var r=t.cache,n=t.keys,i=t._vnode;for(var s in r){var o=r[s];if(o){var a=o.name;a&&!e(a)&&Nf(r,s,n,i)}}}function Nf(t,e,r,n){var i=t[e];i&&(!n||i.tag!==n.tag)&&i.componentInstance.$destroy(),t[e]=null,Mr(r,e)}var dw=[String,RegExp,Array],Ok={name:"keep-alive",abstract:!0,props:{include:dw,exclude:dw,max:[String,Number]},methods:{cacheVNode:function(){var e=this,r=e.cache,n=e.keys,i=e.vnodeToCache,s=e.keyToCache;if(i){var o=i.tag,a=i.componentInstance,c=i.componentOptions;r[s]={name:hw(c),tag:o,componentInstance:a},n.push(s),this.max&&n.length>parseInt(this.max)&&Nf(r,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)Nf(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",function(r){fw(e,function(n){return Mc(r,n)})}),this.$watch("exclude",function(r){fw(e,function(n){return!Mc(r,n)})})},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,r=rw(e),n=r&&r.componentOptions;if(n){var i=hw(n),s=this,o=s.include,a=s.exclude;if(o&&(!i||!Mc(o,i))||a&&i&&Mc(a,i))return r;var c=this,u=c.cache,l=c.keys,h=r.key==null?n.Ctor.cid+(n.tag?"::"+n.tag:""):r.key;u[h]?(r.componentInstance=u[h].componentInstance,Mr(l,h),l.push(h)):(this.vnodeToCache=r,this.keyToCache=h),r.data.keepAlive=!0}return r||e&&e[0]}},Ck={KeepAlive:Ok};function Rk(t){var e={};e.get=function(){return er},Object.defineProperty(t,"config",e),t.util={warn:eN,extend:Ae,mergeOptions:qn,defineReactive:Vn},t.set=nf,t.delete=ky,t.nextTick=df,t.observable=function(r){return Bn(r),r},t.options=Object.create(null),Ic.forEach(function(r){t.options[r+"s"]=Object.create(null)}),t.options._base=t,Ae(t.options.components,Ck),_k(t),Ek(t),Ik(t),Ak(t)}Rk(Fe);Object.defineProperty(Fe.prototype,"$isServer",{get:Tc});Object.defineProperty(Fe.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}});Object.defineProperty(Fe,"FunctionalRenderContext",{value:yf});Fe.version="2.6.14";var xk=or("style,class"),Nk=or("input,textarea,option,select,progress"),kk=function(t,e,r){return r==="value"&&Nk(t)&&e!=="button"||r==="selected"&&t==="option"||r==="checked"&&t==="input"||r==="muted"&&t==="video"},pw=or("contenteditable,draggable,spellcheck"),Pk=or("events,caret,typing,plaintext-only"),$k=function(t,e){return Fc(e)||e==="false"?"false":t==="contenteditable"&&Pk(e)?e:"true"},Dk=or("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),kf="http://www.w3.org/1999/xlink",Pf=function(t){return t.charAt(5)===":"&&t.slice(0,5)==="xlink"},vw=function(t){return Pf(t)?t.slice(6,t.length):""},Fc=function(t){return t==null||t===!1};function Lk(t){for(var e=t.data,r=t,n=t;C(n.componentInstance);)n=n.componentInstance._vnode,n&&n.data&&(e=gw(n.data,e));for(;C(r=r.parent);)r&&r.data&&(e=gw(e,r.data));return Mk(e.staticClass,e.class)}function gw(t,e){return{staticClass:$f(t.staticClass,e.staticClass),class:C(t.class)?[t.class,e.class]:e.class}}function Mk(t,e){return C(t)||C(e)?$f(t,Df(e)):""}function $f(t,e){return t?e?t+" "+e:t:e||""}function Df(t){return Array.isArray(t)?Fk(t):Tt(t)?Uk(t):typeof t=="string"?t:""}function Fk(t){for(var e="",r,n=0,i=t.length;n<i;n++)C(r=Df(t[n]))&&r!==""&&(e&&(e+=" "),e+=r);return e}function Uk(t){var e="";for(var r in t)t[r]&&(e&&(e+=" "),e+=r);return e}var jk={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Bk=or("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Lf=or("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),mw=function(t){return Bk(t)||Lf(t)};function Vk(t){if(Lf(t))return"svg";if(t==="math")return"math"}var Uc=Object.create(null);function qk(t){if(!Vt)return!0;if(mw(t))return!1;if(t=t.toLowerCase(),Uc[t]!=null)return Uc[t];var e=document.createElement(t);return t.indexOf("-")>-1?Uc[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Uc[t]=/HTMLUnknownElement/.test(e.toString())}var Mf=or("text,number,password,search,email,tel,url");function zk(t){if(typeof t=="string"){var e=document.querySelector(t);return e||document.createElement("div")}else return t}function Wk(t,e){var r=document.createElement(t);return t!=="select"||e.data&&e.data.attrs&&e.data.attrs.multiple!==void 0&&r.setAttribute("multiple","multiple"),r}function Gk(t,e){return document.createElementNS(jk[t],e)}function Kk(t){return document.createTextNode(t)}function Hk(t){return document.createComment(t)}function Yk(t,e,r){t.insertBefore(e,r)}function Xk(t,e){t.removeChild(e)}function Qk(t,e){t.appendChild(e)}function Jk(t){return t.parentNode}function Zk(t){return t.nextSibling}function e1(t){return t.tagName}function t1(t,e){t.textContent=e}function r1(t,e){t.setAttribute(e,"")}var n1=Object.freeze({createElement:Wk,createElementNS:Gk,createTextNode:Kk,createComment:Hk,insertBefore:Yk,removeChild:Xk,appendChild:Qk,parentNode:Jk,nextSibling:Zk,tagName:e1,setTextContent:t1,setStyleScope:r1}),i1={create:function(e,r){Zi(r)},update:function(e,r){e.data.ref!==r.data.ref&&(Zi(e,!0),Zi(r))},destroy:function(e){Zi(e,!0)}};function Zi(t,e){var r=t.data.ref;if(!!C(r)){var n=t.context,i=t.componentInstance||t.elm,s=n.$refs;e?Array.isArray(s[r])?Mr(s[r],i):s[r]===i&&(s[r]=void 0):t.data.refInFor?Array.isArray(s[r])?s[r].indexOf(i)<0&&s[r].push(i):s[r]=[i]:s[r]=i}}var Gn=new Dt("",{},[]),Oo=["create","activate","update","remove","destroy"];function Kn(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&C(t.data)===C(e.data)&&s1(t,e)||Me(t.isAsyncPlaceholder)&&ue(e.asyncFactory.error))}function s1(t,e){if(t.tag!=="input")return!0;var r,n=C(r=t.data)&&C(r=r.attrs)&&r.type,i=C(r=e.data)&&C(r=r.attrs)&&r.type;return n===i||Mf(n)&&Mf(i)}function o1(t,e,r){var n,i,s={};for(n=e;n<=r;++n)i=t[n].key,C(i)&&(s[i]=n);return s}function a1(t){var e,r,n={},i=t.modules,s=t.nodeOps;for(e=0;e<Oo.length;++e)for(n[Oo[e]]=[],r=0;r<i.length;++r)C(i[r][Oo[e]])&&n[Oo[e]].push(i[r][Oo[e]]);function o(T){return new Dt(s.tagName(T).toLowerCase(),{},[],void 0,T)}function a(T,A){function $(){--$.listeners==0&&c(T)}return $.listeners=A,$}function c(T){var A=s.parentNode(T);C(A)&&s.removeChild(A,T)}function u(T,A,$,Y,te,ae,ie){if(C(T.elm)&&C(ae)&&(T=ae[ie]=tf(T)),T.isRootInsert=!te,!l(T,A,$,Y)){var he=T.data,de=T.children,W=T.tag;C(W)?(T.elm=T.ns?s.createElementNS(T.ns,W):s.createElement(W,T),O(T),g(T,de,A),C(he)&&E(T,A),p($,T.elm,Y)):Me(T.isComment)?(T.elm=s.createComment(T.text),p($,T.elm,Y)):(T.elm=s.createTextNode(T.text),p($,T.elm,Y))}}function l(T,A,$,Y){var te=T.data;if(C(te)){var ae=C(T.componentInstance)&&te.keepAlive;if(C(te=te.hook)&&C(te=te.init)&&te(T,!1),C(T.componentInstance))return h(T,A),p($,T.elm,Y),Me(ae)&&f(T,A,$,Y),!0}}function h(T,A){C(T.data.pendingInsert)&&(A.push.apply(A,T.data.pendingInsert),T.data.pendingInsert=null),T.elm=T.componentInstance.$el,I(T)?(E(T,A),O(T)):(Zi(T),A.push(T))}function f(T,A,$,Y){for(var te,ae=T;ae.componentInstance;)if(ae=ae.componentInstance._vnode,C(te=ae.data)&&C(te=te.transition)){for(te=0;te<n.activate.length;++te)n.activate[te](Gn,ae);A.push(ae);break}p($,T.elm,Y)}function p(T,A,$){C(T)&&(C($)?s.parentNode($)===T&&s.insertBefore(T,A,$):s.appendChild(T,A))}function g(T,A,$){if(Array.isArray(A))for(var Y=0;Y<A.length;++Y)u(A[Y],$,T.elm,null,!0,A,Y);else mo(T.text)&&s.appendChild(T.elm,s.createTextNode(String(T.text)))}function I(T){for(;T.componentInstance;)T=T.componentInstance._vnode;return C(T.tag)}function E(T,A){for(var $=0;$<n.create.length;++$)n.create[$](Gn,T);e=T.data.hook,C(e)&&(C(e.create)&&e.create(Gn,T),C(e.insert)&&A.push(T))}function O(T){var A;if(C(A=T.fnScopeId))s.setStyleScope(T.elm,A);else for(var $=T;$;)C(A=$.context)&&C(A=A.$options._scopeId)&&s.setStyleScope(T.elm,A),$=$.parent;C(A=Wn)&&A!==T.context&&A!==T.fnContext&&C(A=A.$options._scopeId)&&s.setStyleScope(T.elm,A)}function D(T,A,$,Y,te,ae){for(;Y<=te;++Y)u($[Y],ae,T,A,!1,$,Y)}function q(T){var A,$,Y=T.data;if(C(Y))for(C(A=Y.hook)&&C(A=A.destroy)&&A(T),A=0;A<n.destroy.length;++A)n.destroy[A](T);if(C(A=T.children))for($=0;$<T.children.length;++$)q(T.children[$])}function G(T,A,$){for(;A<=$;++A){var Y=T[A];C(Y)&&(C(Y.tag)?(k(Y),q(Y)):c(Y.elm))}}function k(T,A){if(C(A)||C(T.data)){var $,Y=n.remove.length+1;for(C(A)?A.listeners+=Y:A=a(T.elm,Y),C($=T.componentInstance)&&C($=$._vnode)&&C($.data)&&k($,A),$=0;$<n.remove.length;++$)n.remove[$](T,A);C($=T.data.hook)&&C($=$.remove)?$(T,A):A()}else c(T.elm)}function N(T,A,$,Y,te){for(var ae=0,ie=0,he=A.length-1,de=A[0],W=A[he],Q=$.length-1,oe=$[0],ce=$[Q],we,Be,ve,De,Jt=!te;ae<=he&&ie<=Q;)ue(de)?de=A[++ae]:ue(W)?W=A[--he]:Kn(de,oe)?(R(de,oe,Y,$,ie),de=A[++ae],oe=$[++ie]):Kn(W,ce)?(R(W,ce,Y,$,Q),W=A[--he],ce=$[--Q]):Kn(de,ce)?(R(de,ce,Y,$,Q),Jt&&s.insertBefore(T,de.elm,s.nextSibling(W.elm)),de=A[++ae],ce=$[--Q]):Kn(W,oe)?(R(W,oe,Y,$,ie),Jt&&s.insertBefore(T,W.elm,de.elm),W=A[--he],oe=$[++ie]):(ue(we)&&(we=o1(A,ae,he)),Be=C(oe.key)?we[oe.key]:b(oe,A,ae,he),ue(Be)?u(oe,Y,T,de.elm,!1,$,ie):(ve=A[Be],Kn(ve,oe)?(R(ve,oe,Y,$,ie),A[Be]=void 0,Jt&&s.insertBefore(T,ve.elm,de.elm)):u(oe,Y,T,de.elm,!1,$,ie)),oe=$[++ie]);ae>he?(De=ue($[Q+1])?null:$[Q+1].elm,D(T,De,$,ie,Q,Y)):ie>Q&&G(A,ae,he)}function b(T,A,$,Y){for(var te=$;te<Y;te++){var ae=A[te];if(C(ae)&&Kn(T,ae))return te}}function R(T,A,$,Y,te,ae){if(T!==A){C(A.elm)&&C(Y)&&(A=Y[te]=tf(A));var ie=A.elm=T.elm;if(Me(T.isAsyncPlaceholder)){C(A.asyncFactory.resolved)?ye(T.elm,A,$):A.isAsyncPlaceholder=!0;return}if(Me(A.isStatic)&&Me(T.isStatic)&&A.key===T.key&&(Me(A.isCloned)||Me(A.isOnce))){A.componentInstance=T.componentInstance;return}var he,de=A.data;C(de)&&C(he=de.hook)&&C(he=he.prepatch)&&he(T,A);var W=T.children,Q=A.children;if(C(de)&&I(A)){for(he=0;he<n.update.length;++he)n.update[he](T,A);C(he=de.hook)&&C(he=he.update)&&he(T,A)}ue(A.text)?C(W)&&C(Q)?W!==Q&&N(ie,W,Q,$,ae):C(Q)?(C(T.text)&&s.setTextContent(ie,""),D(ie,null,Q,0,Q.length-1,$)):C(W)?G(W,0,W.length-1):C(T.text)&&s.setTextContent(ie,""):T.text!==A.text&&s.setTextContent(ie,A.text),C(de)&&C(he=de.hook)&&C(he=he.postpatch)&&he(T,A)}}function H(T,A,$){if(Me($)&&C(T.parent))T.parent.data.pendingInsert=A;else for(var Y=0;Y<A.length;++Y)A[Y].data.hook.insert(A[Y])}var ne=or("attrs,class,staticClass,staticStyle,key");function ye(T,A,$,Y){var te,ae=A.tag,ie=A.data,he=A.children;if(Y=Y||ie&&ie.pre,A.elm=T,Me(A.isComment)&&C(A.asyncFactory))return A.isAsyncPlaceholder=!0,!0;if(C(ie)&&(C(te=ie.hook)&&C(te=te.init)&&te(A,!0),C(te=A.componentInstance)))return h(A,$),!0;if(C(ae)){if(C(he))if(!T.hasChildNodes())g(A,he,$);else if(C(te=ie)&&C(te=te.domProps)&&C(te=te.innerHTML)){if(te!==T.innerHTML)return!1}else{for(var de=!0,W=T.firstChild,Q=0;Q<he.length;Q++){if(!W||!ye(W,he[Q],$,Y)){de=!1;break}W=W.nextSibling}if(!de||W)return!1}if(C(ie)){var oe=!1;for(var ce in ie)if(!ne(ce)){oe=!0,E(A,$);break}!oe&&ie.class&&Pc(ie.class)}}else T.data!==A.text&&(T.data=A.text);return!0}return function(A,$,Y,te){if(ue($)){C(A)&&q(A);return}var ae=!1,ie=[];if(ue(A))ae=!0,u($,ie);else{var he=C(A.nodeType);if(!he&&Kn(A,$))R(A,$,ie,null,null,te);else{if(he){if(A.nodeType===1&&A.hasAttribute(Sy)&&(A.removeAttribute(Sy),Y=!0),Me(Y)&&ye(A,$,ie))return H($,ie,!0),A;A=o(A)}var de=A.elm,W=s.parentNode(de);if(u($,ie,de._leaveCb?null:W,s.nextSibling(de)),C($.parent))for(var Q=$.parent,oe=I($);Q;){for(var ce=0;ce<n.destroy.length;++ce)n.destroy[ce](Q);if(Q.elm=$.elm,oe){for(var we=0;we<n.create.length;++we)n.create[we](Gn,Q);var Be=Q.data.hook.insert;if(Be.merged)for(var ve=1;ve<Be.fns.length;ve++)Be.fns[ve]()}else Zi(Q);Q=Q.parent}C(W)?G([A],0,0):C(A.tag)&&q(A)}}return H($,ie,ae),$.elm}}var c1={create:Ff,update:Ff,destroy:function(e){Ff(e,Gn)}};function Ff(t,e){(t.data.directives||e.data.directives)&&u1(t,e)}function u1(t,e){var r=t===Gn,n=e===Gn,i=yw(t.data.directives,t.context),s=yw(e.data.directives,e.context),o=[],a=[],c,u,l;for(c in s)u=i[c],l=s[c],u?(l.oldValue=u.value,l.oldArg=u.arg,Co(l,"update",e,t),l.def&&l.def.componentUpdated&&a.push(l)):(Co(l,"bind",e,t),l.def&&l.def.inserted&&o.push(l));if(o.length){var h=function(){for(var f=0;f<o.length;f++)Co(o[f],"inserted",e,t)};r?on(e,"insert",h):h()}if(a.length&&on(e,"postpatch",function(){for(var f=0;f<a.length;f++)Co(a[f],"componentUpdated",e,t)}),!r)for(c in i)s[c]||Co(i[c],"unbind",t,t,n)}var l1=Object.create(null);function yw(t,e){var r=Object.create(null);if(!t)return r;var n,i;for(n=0;n<t.length;n++)i=t[n],i.modifiers||(i.modifiers=l1),r[h1(i)]=i,i.def=af(e.$options,"directives",i.name);return r}function h1(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function Co(t,e,r,n,i){var s=t.def&&t.def[e];if(s)try{s(r.elm,t,r,n,i)}catch(o){zn(o,r.context,"directive "+t.name+" "+e+" hook")}}var f1=[i1,c1];function ww(t,e){var r=e.componentOptions;if(!(C(r)&&r.Ctor.options.inheritAttrs===!1)&&!(ue(t.data.attrs)&&ue(e.data.attrs))){var n,i,s,o=e.elm,a=t.data.attrs||{},c=e.data.attrs||{};C(c.__ob__)&&(c=e.data.attrs=Ae({},c));for(n in c)i=c[n],s=a[n],s!==i&&bw(o,n,i,e.data.pre);(Ki||Zh)&&c.value!==a.value&&bw(o,"value",c.value);for(n in a)ue(c[n])&&(Pf(n)?o.removeAttributeNS(kf,vw(n)):pw(n)||o.removeAttribute(n))}}function bw(t,e,r,n){n||t.tagName.indexOf("-")>-1?_w(t,e,r):Dk(e)?Fc(r)?t.removeAttribute(e):(r=e==="allowfullscreen"&&t.tagName==="EMBED"?"true":e,t.setAttribute(e,r)):pw(e)?t.setAttribute(e,$k(e,r)):Pf(e)?Fc(r)?t.removeAttributeNS(kf,vw(e)):t.setAttributeNS(kf,e,r):_w(t,e,r)}function _w(t,e,r){if(Fc(r))t.removeAttribute(e);else{if(Ki&&!Hi&&t.tagName==="TEXTAREA"&&e==="placeholder"&&r!==""&&!t.__ieph){var n=function(i){i.stopImmediatePropagation(),t.removeEventListener("input",n)};t.addEventListener("input",n),t.__ieph=!0}t.setAttribute(e,r)}}var d1={create:ww,update:ww};function Ew(t,e){var r=e.elm,n=e.data,i=t.data;if(!(ue(n.staticClass)&&ue(n.class)&&(ue(i)||ue(i.staticClass)&&ue(i.class)))){var s=Lk(e),o=r._transitionClasses;C(o)&&(s=$f(s,Df(o))),s!==r._prevClass&&(r.setAttribute("class",s),r._prevClass=s)}}var p1={create:Ew,update:Ew},Uf="__r",jf="__c";function v1(t){if(C(t[Uf])){var e=Ki?"change":"input";t[e]=[].concat(t[Uf],t[e]||[]),delete t[Uf]}C(t[jf])&&(t.change=[].concat(t[jf],t.change||[]),delete t[jf])}var Ro;function g1(t,e,r){var n=Ro;return function i(){var s=e.apply(null,arguments);s!==null&&Iw(t,i,r,n)}}var m1=lf&&!(Oy&&Number(Oy[1])<=53);function y1(t,e,r,n){if(m1){var i=aw,s=e;e=s._wrapper=function(o){if(o.target===o.currentTarget||o.timeStamp>=i||o.timeStamp<=0||o.target.ownerDocument!==document)return s.apply(this,arguments)}}Ro.addEventListener(t,e,Cy?{capture:r,passive:n}:r)}function Iw(t,e,r,n){(n||Ro).removeEventListener(t,e._wrapper||e,r)}function Sw(t,e){if(!(ue(t.data.on)&&ue(e.data.on))){var r=e.data.on||{},n=t.data.on||{};Ro=e.elm,v1(r),By(r,n,y1,Iw,g1,e.context),Ro=void 0}}var w1={create:Sw,update:Sw},jc;function Tw(t,e){if(!(ue(t.data.domProps)&&ue(e.data.domProps))){var r,n,i=e.elm,s=t.data.domProps||{},o=e.data.domProps||{};C(o.__ob__)&&(o=e.data.domProps=Ae({},o));for(r in s)r in o||(i[r]="");for(r in o){if(n=o[r],r==="textContent"||r==="innerHTML"){if(e.children&&(e.children.length=0),n===s[r])continue;i.childNodes.length===1&&i.removeChild(i.childNodes[0])}if(r==="value"&&i.tagName!=="PROGRESS"){i._value=n;var a=ue(n)?"":String(n);b1(i,a)&&(i.value=a)}else if(r==="innerHTML"&&Lf(i.tagName)&&ue(i.innerHTML)){jc=jc||document.createElement("div"),jc.innerHTML="<svg>"+n+"</svg>";for(var c=jc.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;c.firstChild;)i.appendChild(c.firstChild)}else if(n!==s[r])try{i[r]=n}catch(u){}}}}function b1(t,e){return!t.composing&&(t.tagName==="OPTION"||_1(t,e)||E1(t,e))}function _1(t,e){var r=!0;try{r=document.activeElement!==t}catch(n){}return r&&t.value!==e}function E1(t,e){var r=t.value,n=t._vModifiers;if(C(n)){if(n.number)return yo(r)!==yo(e);if(n.trim)return r.trim()!==e.trim()}return r!==e}var I1={create:Tw,update:Tw},S1=Mn(function(t){var e={},r=/;(?![^(]*\))/g,n=/:(.+)/;return t.split(r).forEach(function(i){if(i){var s=i.split(n);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e});function Bf(t){var e=Aw(t.style);return t.staticStyle?Ae(t.staticStyle,e):e}function Aw(t){return Array.isArray(t)?_y(t):typeof t=="string"?S1(t):t}function T1(t,e){var r={},n;if(e)for(var i=t;i.componentInstance;)i=i.componentInstance._vnode,i&&i.data&&(n=Bf(i.data))&&Ae(r,n);(n=Bf(t.data))&&Ae(r,n);for(var s=t;s=s.parent;)s.data&&(n=Bf(s.data))&&Ae(r,n);return r}var A1=/^--/,Ow=/\s*!important$/,Cw=function(t,e,r){if(A1.test(e))t.style.setProperty(e,r);else if(Ow.test(r))t.style.setProperty(wo(e),r.replace(Ow,""),"important");else{var n=O1(e);if(Array.isArray(r))for(var i=0,s=r.length;i<s;i++)t.style[n]=r[i];else t.style[n]=r}},Rw=["Webkit","Moz","ms"],Bc,O1=Mn(function(t){if(Bc=Bc||document.createElement("div").style,t=Fn(t),t!=="filter"&&t in Bc)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),r=0;r<Rw.length;r++){var n=Rw[r]+e;if(n in Bc)return n}});function xw(t,e){var r=e.data,n=t.data;if(!(ue(r.staticStyle)&&ue(r.style)&&ue(n.staticStyle)&&ue(n.style))){var i,s,o=e.elm,a=n.staticStyle,c=n.normalizedStyle||n.style||{},u=a||c,l=Aw(e.data.style)||{};e.data.normalizedStyle=C(l.__ob__)?Ae({},l):l;var h=T1(e,!0);for(s in u)ue(h[s])&&Cw(o,s,"");for(s in h)i=h[s],i!==u[s]&&Cw(o,s,i==null?"":i)}}var C1={create:xw,update:xw},Nw=/\s+/;function kw(t,e){if(!(!e||!(e=e.trim())))if(t.classList)e.indexOf(" ")>-1?e.split(Nw).forEach(function(n){return t.classList.add(n)}):t.classList.add(e);else{var r=" "+(t.getAttribute("class")||"")+" ";r.indexOf(" "+e+" ")<0&&t.setAttribute("class",(r+e).trim())}}function Pw(t,e){if(!(!e||!(e=e.trim())))if(t.classList)e.indexOf(" ")>-1?e.split(Nw).forEach(function(i){return t.classList.remove(i)}):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{for(var r=" "+(t.getAttribute("class")||"")+" ",n=" "+e+" ";r.indexOf(n)>=0;)r=r.replace(n," ");r=r.trim(),r?t.setAttribute("class",r):t.removeAttribute("class")}}function $w(t){if(!!t){if(typeof t=="object"){var e={};return t.css!==!1&&Ae(e,Dw(t.name||"v")),Ae(e,t),e}else if(typeof t=="string")return Dw(t)}}var Dw=Mn(function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}}),Lw=Vt&&!Hi,es="transition",Vf="animation",Vc="transition",qc="transitionend",qf="animation",Mw="animationend";Lw&&(window.ontransitionend===void 0&&window.onwebkittransitionend!==void 0&&(Vc="WebkitTransition",qc="webkitTransitionEnd"),window.onanimationend===void 0&&window.onwebkitanimationend!==void 0&&(qf="WebkitAnimation",Mw="webkitAnimationEnd"));var Fw=Vt?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Uw(t){Fw(function(){Fw(t)})}function Hn(t,e){var r=t._transitionClasses||(t._transitionClasses=[]);r.indexOf(e)<0&&(r.push(e),kw(t,e))}function Ur(t,e){t._transitionClasses&&Mr(t._transitionClasses,e),Pw(t,e)}function jw(t,e,r){var n=Bw(t,e),i=n.type,s=n.timeout,o=n.propCount;if(!i)return r();var a=i===es?qc:Mw,c=0,u=function(){t.removeEventListener(a,l),r()},l=function(h){h.target===t&&++c>=o&&u()};setTimeout(function(){c<o&&u()},s+1),t.addEventListener(a,l)}var R1=/\b(transform|all)(,|$)/;function Bw(t,e){var r=window.getComputedStyle(t),n=(r[Vc+"Delay"]||"").split(", "),i=(r[Vc+"Duration"]||"").split(", "),s=Vw(n,i),o=(r[qf+"Delay"]||"").split(", "),a=(r[qf+"Duration"]||"").split(", "),c=Vw(o,a),u,l=0,h=0;e===es?s>0&&(u=es,l=s,h=i.length):e===Vf?c>0&&(u=Vf,l=c,h=a.length):(l=Math.max(s,c),u=l>0?s>c?es:Vf:null,h=u?u===es?i.length:a.length:0);var f=u===es&&R1.test(r[Vc+"Property"]);return{type:u,timeout:l,propCount:h,hasTransform:f}}function Vw(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max.apply(null,e.map(function(r,n){return qw(r)+qw(t[n])}))}function qw(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function zf(t,e){var r=t.elm;C(r._leaveCb)&&(r._leaveCb.cancelled=!0,r._leaveCb());var n=$w(t.data.transition);if(!ue(n)&&!(C(r._enterCb)||r.nodeType!==1)){for(var i=n.css,s=n.type,o=n.enterClass,a=n.enterToClass,c=n.enterActiveClass,u=n.appearClass,l=n.appearToClass,h=n.appearActiveClass,f=n.beforeEnter,p=n.enter,g=n.afterEnter,I=n.enterCancelled,E=n.beforeAppear,O=n.appear,D=n.afterAppear,q=n.appearCancelled,G=n.duration,k=Wn,N=Wn.$vnode;N&&N.parent;)k=N.context,N=N.parent;var b=!k._isMounted||!t.isRootInsert;if(!(b&&!O&&O!=="")){var R=b&&u?u:o,H=b&&h?h:c,ne=b&&l?l:a,ye=b&&E||f,T=b&&typeof O=="function"?O:p,A=b&&D||g,$=b&&q||I,Y=yo(Tt(G)?G.enter:G),te=i!==!1&&!Hi,ae=Wf(T),ie=r._enterCb=Ec(function(){te&&(Ur(r,ne),Ur(r,H)),ie.cancelled?(te&&Ur(r,R),$&&$(r)):A&&A(r),r._enterCb=null});t.data.show||on(t,"insert",function(){var he=r.parentNode,de=he&&he._pending&&he._pending[t.key];de&&de.tag===t.tag&&de.elm._leaveCb&&de.elm._leaveCb(),T&&T(r,ie)}),ye&&ye(r),te&&(Hn(r,R),Hn(r,H),Uw(function(){Ur(r,R),ie.cancelled||(Hn(r,ne),ae||(Ww(Y)?setTimeout(ie,Y):jw(r,s,ie)))})),t.data.show&&(e&&e(),T&&T(r,ie)),!te&&!ae&&ie()}}}function zw(t,e){var r=t.elm;C(r._enterCb)&&(r._enterCb.cancelled=!0,r._enterCb());var n=$w(t.data.transition);if(ue(n)||r.nodeType!==1)return e();if(C(r._leaveCb))return;var i=n.css,s=n.type,o=n.leaveClass,a=n.leaveToClass,c=n.leaveActiveClass,u=n.beforeLeave,l=n.leave,h=n.afterLeave,f=n.leaveCancelled,p=n.delayLeave,g=n.duration,I=i!==!1&&!Hi,E=Wf(l),O=yo(Tt(g)?g.leave:g),D=r._leaveCb=Ec(function(){r.parentNode&&r.parentNode._pending&&(r.parentNode._pending[t.key]=null),I&&(Ur(r,a),Ur(r,c)),D.cancelled?(I&&Ur(r,o),f&&f(r)):(e(),h&&h(r)),r._leaveCb=null});p?p(q):q();function q(){D.cancelled||(!t.data.show&&r.parentNode&&((r.parentNode._pending||(r.parentNode._pending={}))[t.key]=t),u&&u(r),I&&(Hn(r,o),Hn(r,c),Uw(function(){Ur(r,o),D.cancelled||(Hn(r,a),E||(Ww(O)?setTimeout(D,O):jw(r,s,D)))})),l&&l(r,D),!I&&!E&&D())}}function Ww(t){return typeof t=="number"&&!isNaN(t)}function Wf(t){if(ue(t))return!1;var e=t.fns;return C(e)?Wf(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Gw(t,e){e.data.show!==!0&&zf(e)}var x1=Vt?{create:Gw,activate:Gw,remove:function(e,r){e.data.show!==!0?zw(e,r):r()}}:{},N1=[d1,p1,w1,I1,C1,x1],k1=N1.concat(f1),P1=a1({nodeOps:n1,modules:k1});Hi&&document.addEventListener("selectionchange",function(){var t=document.activeElement;t&&t.vmodel&&Gf(t,"input")});var Kw={inserted:function(e,r,n,i){n.tag==="select"?(i.elm&&!i.elm._vOptions?on(n,"postpatch",function(){Kw.componentUpdated(e,r,n)}):Hw(e,r,n.context),e._vOptions=[].map.call(e.options,zc)):(n.tag==="textarea"||Mf(e.type))&&(e._vModifiers=r.modifiers,r.modifiers.lazy||(e.addEventListener("compositionstart",$1),e.addEventListener("compositionend",Qw),e.addEventListener("change",Qw),Hi&&(e.vmodel=!0)))},componentUpdated:function(e,r,n){if(n.tag==="select"){Hw(e,r,n.context);var i=e._vOptions,s=e._vOptions=[].map.call(e.options,zc);if(s.some(function(a,c){return!Un(a,i[c])})){var o=e.multiple?r.value.some(function(a){return Xw(a,s)}):r.value!==r.oldValue&&Xw(r.value,s);o&&Gf(e,"change")}}}};function Hw(t,e,r){Yw(t,e),(Ki||Zh)&&setTimeout(function(){Yw(t,e)},0)}function Yw(t,e,r){var n=e.value,i=t.multiple;if(!(i&&!Array.isArray(n))){for(var s,o,a=0,c=t.options.length;a<c;a++)if(o=t.options[a],i)s=Iy(n,zc(o))>-1,o.selected!==s&&(o.selected=s);else if(Un(zc(o),n)){t.selectedIndex!==a&&(t.selectedIndex=a);return}i||(t.selectedIndex=-1)}}function Xw(t,e){return e.every(function(r){return!Un(r,t)})}function zc(t){return"_value"in t?t._value:t.value}function $1(t){t.target.composing=!0}function Qw(t){!t.target.composing||(t.target.composing=!1,Gf(t.target,"input"))}function Gf(t,e){var r=document.createEvent("HTMLEvents");r.initEvent(e,!0,!0),t.dispatchEvent(r)}function Kf(t){return t.componentInstance&&(!t.data||!t.data.transition)?Kf(t.componentInstance._vnode):t}var D1={bind:function(e,r,n){var i=r.value;n=Kf(n);var s=n.data&&n.data.transition,o=e.__vOriginalDisplay=e.style.display==="none"?"":e.style.display;i&&s?(n.data.show=!0,zf(n,function(){e.style.display=o})):e.style.display=i?o:"none"},update:function(e,r,n){var i=r.value,s=r.oldValue;if(!i!=!s){n=Kf(n);var o=n.data&&n.data.transition;o?(n.data.show=!0,i?zf(n,function(){e.style.display=e.__vOriginalDisplay}):zw(n,function(){e.style.display="none"})):e.style.display=i?e.__vOriginalDisplay:"none"}},unbind:function(e,r,n,i,s){s||(e.style.display=e.__vOriginalDisplay)}},L1={model:Kw,show:D1},Jw={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Hf(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?Hf(rw(e.children)):t}function Zw(t){var e={},r=t.$options;for(var n in r.propsData)e[n]=t[n];var i=r._parentListeners;for(var s in i)e[Fn(s)]=i[s];return e}function eb(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function M1(t){for(;t=t.parent;)if(t.data.transition)return!0}function F1(t,e){return e.key===t.key&&e.tag===t.tag}var U1=function(t){return t.tag||To(t)},j1=function(t){return t.name==="show"},B1={name:"transition",props:Jw,abstract:!0,render:function(e){var r=this,n=this.$slots.default;if(!!n&&(n=n.filter(U1),!!n.length)){var i=this.mode,s=n[0];if(M1(this.$vnode))return s;var o=Hf(s);if(!o)return s;if(this._leaving)return eb(e,s);var a="__transition-"+this._uid+"-";o.key=o.key==null?o.isComment?a+"comment":a+o.tag:mo(o.key)?String(o.key).indexOf(a)===0?o.key:a+o.key:o.key;var c=(o.data||(o.data={})).transition=Zw(this),u=this._vnode,l=Hf(u);if(o.data.directives&&o.data.directives.some(j1)&&(o.data.show=!0),l&&l.data&&!F1(o,l)&&!To(l)&&!(l.componentInstance&&l.componentInstance._vnode.isComment)){var h=l.data.transition=Ae({},c);if(i==="out-in")return this._leaving=!0,on(h,"afterLeave",function(){r._leaving=!1,r.$forceUpdate()}),eb(e,s);if(i==="in-out"){if(To(o))return u;var f,p=function(){f()};on(c,"afterEnter",p),on(c,"enterCancelled",p),on(h,"delayLeave",function(g){f=g})}}return s}}},tb=Ae({tag:String,moveClass:String},Jw);delete tb.mode;var V1={props:tb,beforeMount:function(){var e=this,r=this._update;this._update=function(n,i){var s=iw(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,s(),r.call(e,n,i)}},render:function(e){for(var r=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),i=this.prevChildren=this.children,s=this.$slots.default||[],o=this.children=[],a=Zw(this),c=0;c<s.length;c++){var u=s[c];u.tag&&u.key!=null&&String(u.key).indexOf("__vlist")!==0&&(o.push(u),n[u.key]=u,(u.data||(u.data={})).transition=a)}if(i){for(var l=[],h=[],f=0;f<i.length;f++){var p=i[f];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?l.push(p):h.push(p)}this.kept=e(r,null,l),this.removed=h}return e(r,null,o)},updated:function(){var e=this.prevChildren,r=this.moveClass||(this.name||"v")+"-move";!e.length||!this.hasMove(e[0].elm,r)||(e.forEach(q1),e.forEach(z1),e.forEach(W1),this._reflow=document.body.offsetHeight,e.forEach(function(n){if(n.data.moved){var i=n.elm,s=i.style;Hn(i,r),s.transform=s.WebkitTransform=s.transitionDuration="",i.addEventListener(qc,i._moveCb=function o(a){a&&a.target!==i||(!a||/transform$/.test(a.propertyName))&&(i.removeEventListener(qc,o),i._moveCb=null,Ur(i,r))})}}))},methods:{hasMove:function(e,r){if(!Lw)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(s){Pw(n,s)}),kw(n,r),n.style.display="none",this.$el.appendChild(n);var i=Bw(n);return this.$el.removeChild(n),this._hasMove=i.hasTransform}}};function q1(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function z1(t){t.data.newPos=t.elm.getBoundingClientRect()}function W1(t){var e=t.data.pos,r=t.data.newPos,n=e.left-r.left,i=e.top-r.top;if(n||i){t.data.moved=!0;var s=t.elm.style;s.transform=s.WebkitTransform="translate("+n+"px,"+i+"px)",s.transitionDuration="0s"}}var G1={Transition:B1,TransitionGroup:V1};Fe.config.mustUseProp=kk;Fe.config.isReservedTag=mw;Fe.config.isReservedAttr=xk;Fe.config.getTagNamespace=Vk;Fe.config.isUnknownElement=qk;Ae(Fe.options.directives,L1);Ae(Fe.options.components,G1);Fe.prototype.__patch__=Vt?P1:$t;Fe.prototype.$mount=function(t,e){return t=t&&Vt?zk(t):void 0,ZN(this,t,e)};Vt&&setTimeout(function(){er.devtools&&Ac&&Ac.emit("init",Fe)},0);var I5=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Fe}),qe=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function S5(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function T5(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach(function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})}),e}function Wc(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var K1=function(t){return t.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()},H1=K1,Y1=H1,X1=function(t){var e=/[height|width]$/;return e.test(t)},rb=function(t){var e="",r=Object.keys(t);return r.forEach(function(n,i){var s=t[n];n=Y1(n),X1(n)&&typeof s=="number"&&(s=s+"px"),s===!0?e+=n:s===!1?e+="not "+n:e+="("+n+": "+s+")",i<r.length-1&&(e+=" and ")}),e},Q1=function(t){var e="";return typeof t=="string"?t:t instanceof Array?(t.forEach(function(r,n){e+=rb(r),n<t.length-1&&(e+=", ")}),e):rb(t)},J1=Q1;function Z1(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function eP(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}else return Array.from(t)}function tP(t){var e=Object.keys(t),r=e.map(function(s){return t[s]}),n=[0].concat(eP(r.slice(0,-1))),i=n.reduce(function(s,o,a){var c=Object.assign({minWidth:o},a<e.length-1?{maxWidth:n[a+1]-1}:{}),u=J1(c);return Object.assign(s,Z1({},e[a],u))},{});return i}function rP(t,e,r){var n=function i(s){if(e[s]!==void 0)return e[s];var o=t.findIndex(function(c){return c===s}),a=o!==-1||o!==0?t[o-1]:null;return a?e[a]!==void 0?e[a]:i(a):e[o]};return n(r)}function nP(t,e){var r=t.findIndex(function(n){return n===e});return t.slice(r)}function iP(t,e){var r=window.matchMedia(t),n=function(s){var o=s.matches;o&&e()};r.addListener(n),n(r)}function nb(t){return Object.prototype.toString.call(t)==="[object Array]"}var sP={props:{mq:{required:!0,type:[String,Array]}},computed:{plusModifier:function(){return!nb(this.mq)&&this.mq.slice(-1)==="+"},activeBreakpoints:function(){var e=Object.keys(this.$mqAvailableBreakpoints),r=this.plusModifier?this.mq.slice(0,-1):nb(this.mq)?this.mq:[this.mq];return this.plusModifier?nP(e,r):r}},render:function(e,r){var n=this.activeBreakpoints.includes(this.$mq);return n?e("div",this.$slots.default):e()}},oP={sm:450,md:1250,lg:1/0},aP=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.breakpoints,i=n===void 0?oP:n,s=r.defaultBreakpoint,o=s===void 0?"sm":s,a=!1,c=new e({data:function(){return{currentBreakpoint:o}}});e.filter("mq",function(u,l){return rP(Object.keys(i),l,u)}),e.mixin({computed:{$mq:function(){return c.currentBreakpoint}},created:function(){this.$isServer&&(c.currentBreakpoint=o)},mounted:function(){if(!a){var l=tP(i),h=function(g){var I=l[g],E=function(){c.currentBreakpoint=g};iP(I,E)};for(var f in l)h(f);a=!0}}}),e.prototype.$mqAvailableBreakpoints=i,e.component("MqLayout",sP)},A5={install:aP},Gc=function(t){return t&&t.Math==Math&&t},Er=Gc(typeof globalThis=="object"&&globalThis)||Gc(typeof window=="object"&&window)||Gc(typeof self=="object"&&self)||Gc(typeof qe=="object"&&qe)||function(){return this}()||Function("return this")(),Yf={},jr=function(t){try{return!!t()}catch(e){return!0}},cP=jr,ts=!cP(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),Xf={},ib={}.propertyIsEnumerable,sb=Object.getOwnPropertyDescriptor,uP=sb&&!ib.call({1:2},1);Xf.f=uP?function(e){var r=sb(this,e);return!!r&&r.enumerable}:ib;var Qf=function(t,e){return{enumerable:!(t&1),configurable:!(t&2),writable:!(t&4),value:e}},lP={}.toString,Jf=function(t){return lP.call(t).slice(8,-1)},hP=jr,fP=Jf,dP="".split,ob=hP(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return fP(t)=="String"?dP.call(t,""):Object(t)}:Object,ab=function(t){if(t==null)throw TypeError("Can't call method on "+t);return t},pP=ob,vP=ab,Zf=function(t){return pP(vP(t))},ur=function(t){return typeof t=="function"},gP=ur,Yn=function(t){return typeof t=="object"?t!==null:gP(t)},ed=Er,mP=ur,yP=function(t){return mP(t)?t:void 0},Kc=function(t,e){return arguments.length<2?yP(ed[t]):ed[t]&&ed[t][e]},wP=Kc,bP=wP("navigator","userAgent")||"",cb=Er,td=bP,ub=cb.process,lb=cb.Deno,hb=ub&&ub.versions||lb&&lb.version,fb=hb&&hb.v8,Ir,Hc;fb?(Ir=fb.split("."),Hc=Ir[0]<4?1:Ir[0]+Ir[1]):td&&(Ir=td.match(/Edge\/(\d+)/),(!Ir||Ir[1]>=74)&&(Ir=td.match(/Chrome\/(\d+)/),Ir&&(Hc=Ir[1])));var rd=Hc&&+Hc,db=rd,_P=jr,pb=!!Object.getOwnPropertySymbols&&!_P(function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&db&&db<41}),EP=pb,vb=EP&&!Symbol.sham&&typeof Symbol.iterator=="symbol",IP=ur,SP=Kc,TP=vb,gb=TP?function(t){return typeof t=="symbol"}:function(t){var e=SP("Symbol");return IP(e)&&Object(t)instanceof e},AP=function(t){try{return String(t)}catch(e){return"Object"}},OP=ur,CP=AP,RP=function(t){if(OP(t))return t;throw TypeError(CP(t)+" is not a function")},xP=RP,NP=function(t,e){var r=t[e];return r==null?void 0:xP(r)},nd=ur,id=Yn,kP=function(t,e){var r,n;if(e==="string"&&nd(r=t.toString)&&!id(n=r.call(t))||nd(r=t.valueOf)&&!id(n=r.call(t))||e!=="string"&&nd(r=t.toString)&&!id(n=r.call(t)))return n;throw TypeError("Can't convert object to primitive value")},sd={exports:{}},mb=Er,od=function(t,e){try{Object.defineProperty(mb,t,{value:e,configurable:!0,writable:!0})}catch(r){mb[t]=e}return e},PP=Er,$P=od,yb="__core-js_shared__",DP=PP[yb]||$P(yb,{}),ad=DP,wb=ad;(sd.exports=function(t,e){return wb[t]||(wb[t]=e!==void 0?e:{})})("versions",[]).push({version:"3.18.1",mode:"global",copyright:"\xA9 2021 Denis Pushkarev (zloirock.ru)"});var LP=ab,cd=function(t){return Object(LP(t))},MP=cd,FP={}.hasOwnProperty,Xn=Object.hasOwn||function(e,r){return FP.call(MP(e),r)},UP=0,jP=Math.random(),bb=function(t){return"Symbol("+String(t===void 0?"":t)+")_"+(++UP+jP).toString(36)},BP=Er,VP=sd.exports,_b=Xn,qP=bb,Eb=pb,zP=vb,xo=VP("wks"),No=BP.Symbol,WP=zP?No:No&&No.withoutSetter||qP,rs=function(t){return(!_b(xo,t)||!(Eb||typeof xo[t]=="string"))&&(Eb&&_b(No,t)?xo[t]=No[t]:xo[t]=WP("Symbol."+t)),xo[t]},Ib=Yn,Sb=gb,GP=NP,KP=kP,HP=rs,YP=HP("toPrimitive"),XP=function(t,e){if(!Ib(t)||Sb(t))return t;var r=GP(t,YP),n;if(r){if(e===void 0&&(e="default"),n=r.call(t,e),!Ib(n)||Sb(n))return n;throw TypeError("Can't convert object to primitive value")}return e===void 0&&(e="number"),KP(t,e)},QP=XP,JP=gb,ud=function(t){var e=QP(t,"string");return JP(e)?e:String(e)},ZP=Er,Tb=Yn,ld=ZP.document,e$=Tb(ld)&&Tb(ld.createElement),t$=function(t){return e$?ld.createElement(t):{}},r$=ts,n$=jr,i$=t$,Ab=!r$&&!n$(function(){return Object.defineProperty(i$("div"),"a",{get:function(){return 7}}).a!=7}),s$=ts,o$=Xf,a$=Qf,c$=Zf,u$=ud,l$=Xn,h$=Ab,Ob=Object.getOwnPropertyDescriptor;Yf.f=s$?Ob:function(e,r){if(e=c$(e),r=u$(r),h$)try{return Ob(e,r)}catch(n){}if(l$(e,r))return a$(!o$.f.call(e,r),e[r])};var Yc={},f$=Yn,Cb=function(t){if(f$(t))return t;throw TypeError(String(t)+" is not an object")},d$=ts,p$=Ab,Rb=Cb,v$=ud,xb=Object.defineProperty;Yc.f=d$?xb:function(e,r,n){if(Rb(e),r=v$(r),Rb(n),p$)try{return xb(e,r,n)}catch(i){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[r]=n.value),e};var g$=ts,m$=Yc,y$=Qf,hd=g$?function(t,e,r){return m$.f(t,e,y$(1,r))}:function(t,e,r){return t[e]=r,t},Nb={exports:{}},w$=ur,fd=ad,b$=Function.toString;w$(fd.inspectSource)||(fd.inspectSource=function(t){return b$.call(t)});var dd=fd.inspectSource,_$=Er,E$=ur,I$=dd,kb=_$.WeakMap,S$=E$(kb)&&/native code/.test(I$(kb)),T$=sd.exports,A$=bb,Pb=T$("keys"),O$=function(t){return Pb[t]||(Pb[t]=A$(t))},$b={},C$=S$,R$=Er,x$=Yn,N$=hd,pd=Xn,vd=ad,k$=O$,P$=$b,Db="Object already initialized",$$=R$.WeakMap,Xc,ko,Qc,D$=function(t){return Qc(t)?ko(t):Xc(t,{})},L$=function(t){return function(e){var r;if(!x$(e)||(r=ko(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}};if(C$||vd.state){var Qn=vd.state||(vd.state=new $$),M$=Qn.get,Lb=Qn.has,F$=Qn.set;Xc=function(t,e){if(Lb.call(Qn,t))throw new TypeError(Db);return e.facade=t,F$.call(Qn,t,e),e},ko=function(t){return M$.call(Qn,t)||{}},Qc=function(t){return Lb.call(Qn,t)}}else{var ns=k$("state");P$[ns]=!0,Xc=function(t,e){if(pd(t,ns))throw new TypeError(Db);return e.facade=t,N$(t,ns,e),e},ko=function(t){return pd(t,ns)?t[ns]:{}},Qc=function(t){return pd(t,ns)}}var U$={set:Xc,get:ko,has:Qc,enforce:D$,getterFor:L$},gd=ts,j$=Xn,Mb=Function.prototype,B$=gd&&Object.getOwnPropertyDescriptor,md=j$(Mb,"name"),V$=md&&function(){}.name==="something",q$=md&&(!gd||gd&&B$(Mb,"name").configurable),z$={EXISTS:md,PROPER:V$,CONFIGURABLE:q$},W$=Er,Fb=ur,G$=Xn,Ub=hd,K$=od,H$=dd,jb=U$,Y$=z$.CONFIGURABLE,X$=jb.get,Q$=jb.enforce,J$=String(String).split("String");(Nb.exports=function(t,e,r,n){var i=n?!!n.unsafe:!1,s=n?!!n.enumerable:!1,o=n?!!n.noTargetGet:!1,a=n&&n.name!==void 0?n.name:e,c;if(Fb(r)&&(String(a).slice(0,7)==="Symbol("&&(a="["+String(a).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!G$(r,"name")||Y$&&r.name!==a)&&Ub(r,"name",a),c=Q$(r),c.source||(c.source=J$.join(typeof a=="string"?a:""))),t===W$){s?t[e]=r:K$(e,r);return}else i?!o&&t[e]&&(s=!0):delete t[e];s?t[e]=r:Ub(t,e,r)})(Function.prototype,"toString",function(){return Fb(this)&&X$(this).source||H$(this)});var Bb={},Z$=Math.ceil,eD=Math.floor,Vb=function(t){return isNaN(t=+t)?0:(t>0?eD:Z$)(t)},tD=Vb,rD=Math.min,qb=function(t){return t>0?rD(tD(t),9007199254740991):0},nD=Vb,iD=Math.max,sD=Math.min,oD=function(t,e){var r=nD(t);return r<0?iD(r+e,0):sD(r,e)},aD=Zf,cD=qb,uD=oD,zb=function(t){return function(e,r,n){var i=aD(e),s=cD(i.length),o=uD(n,s),a;if(t&&r!=r){for(;s>o;)if(a=i[o++],a!=a)return!0}else for(;s>o;o++)if((t||o in i)&&i[o]===r)return t||o||0;return!t&&-1}},lD={includes:zb(!0),indexOf:zb(!1)},yd=Xn,hD=Zf,fD=lD.indexOf,dD=$b,Wb=function(t,e){var r=hD(t),n=0,i=[],s;for(s in r)!yd(dD,s)&&yd(r,s)&&i.push(s);for(;e.length>n;)yd(r,s=e[n++])&&(~fD(i,s)||i.push(s));return i},Gb=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],pD=Wb,vD=Gb,gD=vD.concat("length","prototype");Bb.f=Object.getOwnPropertyNames||function(e){return pD(e,gD)};var wd={};wd.f=Object.getOwnPropertySymbols;var mD=Kc,yD=Bb,wD=wd,bD=Cb,_D=mD("Reflect","ownKeys")||function(e){var r=yD.f(bD(e)),n=wD.f;return n?r.concat(n(e)):r},ED=Xn,ID=_D,SD=Yf,TD=Yc,AD=function(t,e){for(var r=ID(e),n=TD.f,i=SD.f,s=0;s<r.length;s++){var o=r[s];ED(t,o)||n(t,o,i(e,o))}},OD=jr,CD=ur,RD=/#|\.prototype\./,Po=function(t,e){var r=ND[xD(t)];return r==PD?!0:r==kD?!1:CD(e)?OD(e):!!e},xD=Po.normalize=function(t){return String(t).replace(RD,".").toLowerCase()},ND=Po.data={},kD=Po.NATIVE="N",PD=Po.POLYFILL="P",$D=Po,bd=Er,DD=Yf.f,LD=hd,MD=Nb.exports,FD=od,UD=AD,jD=$D,Kb=function(t,e){var r=t.target,n=t.global,i=t.stat,s,o,a,c,u,l;if(n?o=bd:i?o=bd[r]||FD(r,{}):o=(bd[r]||{}).prototype,o)for(a in e){if(u=e[a],t.noTargetGet?(l=DD(o,a),c=l&&l.value):c=o[a],s=jD(n?a:r+(i?".":"#")+a,t.forced),!s&&c!==void 0){if(typeof u==typeof c)continue;UD(u,c)}(t.sham||c&&c.sham)&&LD(u,"sham",!0),MD(o,a,u,t)}},BD=Jf,Hb=Array.isArray||function(e){return BD(e)=="Array"},VD=ud,qD=Yc,zD=Qf,WD=function(t,e,r){var n=VD(e);n in t?qD.f(t,n,zD(0,r)):t[n]=r},GD=rs,KD=GD("toStringTag"),Yb={};Yb[KD]="z";var HD=String(Yb)==="[object z]",YD=HD,XD=ur,Jc=Jf,QD=rs,JD=QD("toStringTag"),ZD=Jc(function(){return arguments}())=="Arguments",eL=function(t,e){try{return t[e]}catch(r){}},tL=YD?Jc:function(t){var e,r,n;return t===void 0?"Undefined":t===null?"Null":typeof(r=eL(e=Object(t),JD))=="string"?r:ZD?Jc(e):(n=Jc(e))=="Object"&&XD(e.callee)?"Arguments":n},rL=jr,Xb=ur,nL=tL,iL=Kc,sL=dd,oL=[],Qb=iL("Reflect","construct"),_d=/^\s*(?:class|function)\b/,aL=_d.exec,cL=!_d.exec(function(){}),$o=function(t){if(!Xb(t))return!1;try{return Qb(Object,oL,t),!0}catch(e){return!1}},uL=function(t){if(!Xb(t))return!1;switch(nL(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return cL||!!aL.call(_d,sL(t))},lL=!Qb||rL(function(){var t;return $o($o.call)||!$o(Object)||!$o(function(){t=!0})||t})?uL:$o,Jb=Hb,hL=lL,fL=Yn,dL=rs,pL=dL("species"),vL=function(t){var e;return Jb(t)&&(e=t.constructor,hL(e)&&(e===Array||Jb(e.prototype))?e=void 0:fL(e)&&(e=e[pL],e===null&&(e=void 0))),e===void 0?Array:e},gL=vL,mL=function(t,e){return new(gL(t))(e===0?0:e)},yL=jr,wL=rs,bL=rd,_L=wL("species"),EL=function(t){return bL>=51||!yL(function(){var e=[],r=e.constructor={};return r[_L]=function(){return{foo:1}},e[t](Boolean).foo!==1})},IL=Kb,SL=jr,TL=Hb,AL=Yn,OL=cd,CL=qb,Zb=WD,RL=mL,xL=EL,NL=rs,kL=rd,e_=NL("isConcatSpreadable"),t_=9007199254740991,r_="Maximum allowed index exceeded",PL=kL>=51||!SL(function(){var t=[];return t[e_]=!1,t.concat()[0]!==t}),$L=xL("concat"),DL=function(t){if(!AL(t))return!1;var e=t[e_];return e!==void 0?!!e:TL(t)},LL=!PL||!$L;IL({target:"Array",proto:!0,forced:LL},{concat:function(e){var r=OL(this),n=RL(r,0),i=0,s,o,a,c,u;for(s=-1,a=arguments.length;s<a;s++)if(u=s===-1?r:arguments[s],DL(u)){if(c=CL(u.length),i+c>t_)throw TypeError(r_);for(o=0;o<c;o++,i++)o in u&&Zb(n,i,u[o])}else{if(i>=t_)throw TypeError(r_);Zb(n,i++,u)}return n.length=i,n}});var ML=Wb,FL=Gb,UL=Object.keys||function(e){return ML(e,FL)},n_=ts,jL=jr,Ed=UL,BL=wd,VL=Xf,qL=cd,zL=ob,is=Object.assign,i_=Object.defineProperty,WL=!is||jL(function(){if(n_&&is({b:1},is(i_({},"a",{enumerable:!0,get:function(){i_(this,"b",{value:3,enumerable:!1})}}),{b:2})).b!==1)return!0;var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach(function(i){e[i]=i}),is({},t)[r]!=7||Ed(is({},e)).join("")!=n})?function(e,r){for(var n=qL(e),i=arguments.length,s=1,o=BL.f,a=VL.f;i>s;)for(var c=zL(arguments[s++]),u=o?Ed(c).concat(o(c)):Ed(c),l=u.length,h=0,f;l>h;)f=u[h++],(!n_||a.call(c,f))&&(n[f]=c[f]);return n}:is,GL=Kb,s_=WL;GL({target:"Object",stat:!0,forced:Object.assign!==s_},{assign:s_});var Zc=function(t){return t&&t.Math==Math&&t},Ye=Zc(typeof globalThis=="object"&&globalThis)||Zc(typeof window=="object"&&window)||Zc(typeof self=="object"&&self)||Zc(typeof qe=="object"&&qe)||function(){return this}()||Function("return this")(),Id={},Xe=function(t){try{return!!t()}catch(e){return!0}},KL=Xe,cn=!KL(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),Sd={},o_={}.propertyIsEnumerable,a_=Object.getOwnPropertyDescriptor,HL=a_&&!o_.call({1:2},1);Sd.f=HL?function(e){var r=a_(this,e);return!!r&&r.enumerable}:o_;var Td=function(t,e){return{enumerable:!(t&1),configurable:!(t&2),writable:!(t&4),value:e}},YL={}.toString,Do=function(t){return YL.call(t).slice(8,-1)},XL=Xe,QL=Do,JL="".split,eu=XL(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return QL(t)=="String"?JL.call(t,""):Object(t)}:Object,ss=function(t){if(t==null)throw TypeError("Can't call method on "+t);return t},ZL=eu,eM=ss,Lo=function(t){return ZL(eM(t))},Qe=function(t){return typeof t=="function"},tM=Qe,lr=function(t){return typeof t=="object"?t!==null:tM(t)},Ad=Ye,rM=Qe,nM=function(t){return rM(t)?t:void 0},Mo=function(t,e){return arguments.length<2?nM(Ad[t]):Ad[t]&&Ad[t][e]},iM=Mo,sM=iM("navigator","userAgent")||"",c_=Ye,Od=sM,u_=c_.process,l_=c_.Deno,h_=u_&&u_.versions||l_&&l_.version,f_=h_&&h_.v8,Sr,tu;f_?(Sr=f_.split("."),tu=Sr[0]<4?1:Sr[0]+Sr[1]):Od&&(Sr=Od.match(/Edge\/(\d+)/),(!Sr||Sr[1]>=74)&&(Sr=Od.match(/Chrome\/(\d+)/),Sr&&(tu=Sr[1])));var Cd=tu&&+tu,d_=Cd,oM=Xe,p_=!!Object.getOwnPropertySymbols&&!oM(function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&d_&&d_<41}),aM=p_,v_=aM&&!Symbol.sham&&typeof Symbol.iterator=="symbol",cM=Qe,uM=Mo,lM=v_,g_=lM?function(t){return typeof t=="symbol"}:function(t){var e=uM("Symbol");return cM(e)&&Object(t)instanceof e},hM=function(t){try{return String(t)}catch(e){return"Object"}},fM=Qe,dM=hM,ru=function(t){if(fM(t))return t;throw TypeError(dM(t)+" is not a function")},pM=ru,Fo=function(t,e){var r=t[e];return r==null?void 0:pM(r)},Rd=Qe,xd=lr,vM=function(t,e){var r,n;if(e==="string"&&Rd(r=t.toString)&&!xd(n=r.call(t))||Rd(r=t.valueOf)&&!xd(n=r.call(t))||e!=="string"&&Rd(r=t.toString)&&!xd(n=r.call(t)))return n;throw TypeError("Can't convert object to primitive value")},nu={exports:{}},m_=Ye,Nd=function(t,e){try{Object.defineProperty(m_,t,{value:e,configurable:!0,writable:!0})}catch(r){m_[t]=e}return e},gM=Ye,mM=Nd,y_="__core-js_shared__",yM=gM[y_]||mM(y_,{}),kd=yM,w_=kd;(nu.exports=function(t,e){return w_[t]||(w_[t]=e!==void 0?e:{})})("versions",[]).push({version:"3.18.1",mode:"global",copyright:"\xA9 2021 Denis Pushkarev (zloirock.ru)"});var wM=ss,os=function(t){return Object(wM(t))},bM=os,_M={}.hasOwnProperty,hr=Object.hasOwn||function(e,r){return _M.call(bM(e),r)},EM=0,IM=Math.random(),Pd=function(t){return"Symbol("+String(t===void 0?"":t)+")_"+(++EM+IM).toString(36)},SM=Ye,TM=nu.exports,b_=hr,AM=Pd,__=p_,OM=v_,Uo=TM("wks"),jo=SM.Symbol,CM=OM?jo:jo&&jo.withoutSetter||AM,Ot=function(t){return(!b_(Uo,t)||!(__||typeof Uo[t]=="string"))&&(__&&b_(jo,t)?Uo[t]=jo[t]:Uo[t]=CM("Symbol."+t)),Uo[t]},E_=lr,I_=g_,RM=Fo,xM=vM,NM=Ot,kM=NM("toPrimitive"),PM=function(t,e){if(!E_(t)||I_(t))return t;var r=RM(t,kM),n;if(r){if(e===void 0&&(e="default"),n=r.call(t,e),!E_(n)||I_(n))return n;throw TypeError("Can't convert object to primitive value")}return e===void 0&&(e="number"),xM(t,e)},$M=PM,DM=g_,S_=function(t){var e=$M(t,"string");return DM(e)?e:String(e)},LM=Ye,T_=lr,$d=LM.document,MM=T_($d)&&T_($d.createElement),Dd=function(t){return MM?$d.createElement(t):{}},FM=cn,UM=Xe,jM=Dd,A_=!FM&&!UM(function(){return Object.defineProperty(jM("div"),"a",{get:function(){return 7}}).a!=7}),BM=cn,VM=Sd,qM=Td,zM=Lo,WM=S_,GM=hr,KM=A_,O_=Object.getOwnPropertyDescriptor;Id.f=BM?O_:function(e,r){if(e=zM(e),r=WM(r),KM)try{return O_(e,r)}catch(n){}if(GM(e,r))return qM(!VM.f.call(e,r),e[r])};var un={},HM=lr,zt=function(t){if(HM(t))return t;throw TypeError(String(t)+" is not an object")},YM=cn,XM=A_,C_=zt,QM=S_,R_=Object.defineProperty;un.f=YM?R_:function(e,r,n){if(C_(e),r=QM(r),C_(n),XM)try{return R_(e,r,n)}catch(i){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[r]=n.value),e};var JM=cn,ZM=un,eF=Td,Jn=JM?function(t,e,r){return ZM.f(t,e,eF(1,r))}:function(t,e,r){return t[e]=r,t},ln={exports:{}},tF=Qe,Ld=kd,rF=Function.toString;tF(Ld.inspectSource)||(Ld.inspectSource=function(t){return rF.call(t)});var Md=Ld.inspectSource,nF=Ye,iF=Qe,sF=Md,x_=nF.WeakMap,N_=iF(x_)&&/native code/.test(sF(x_)),oF=nu.exports,aF=Pd,k_=oF("keys"),Fd=function(t){return k_[t]||(k_[t]=aF(t))},iu={},cF=N_,uF=Ye,lF=lr,hF=Jn,Ud=hr,jd=kd,fF=Fd,dF=iu,P_="Object already initialized",pF=uF.WeakMap,su,Bo,ou,vF=function(t){return ou(t)?Bo(t):su(t,{})},gF=function(t){return function(e){var r;if(!lF(e)||(r=Bo(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}};if(cF||jd.state){var Zn=jd.state||(jd.state=new pF),mF=Zn.get,$_=Zn.has,yF=Zn.set;su=function(t,e){if($_.call(Zn,t))throw new TypeError(P_);return e.facade=t,yF.call(Zn,t,e),e},Bo=function(t){return mF.call(Zn,t)||{}},ou=function(t){return $_.call(Zn,t)}}else{var as=fF("state");dF[as]=!0,su=function(t,e){if(Ud(t,as))throw new TypeError(P_);return e.facade=t,hF(t,as,e),e},Bo=function(t){return Ud(t,as)?t[as]:{}},ou=function(t){return Ud(t,as)}}var cs={set:su,get:Bo,has:ou,enforce:vF,getterFor:gF},Bd=cn,wF=hr,D_=Function.prototype,bF=Bd&&Object.getOwnPropertyDescriptor,Vd=wF(D_,"name"),_F=Vd&&function(){}.name==="something",EF=Vd&&(!Bd||Bd&&bF(D_,"name").configurable),qd={EXISTS:Vd,PROPER:_F,CONFIGURABLE:EF},IF=Ye,L_=Qe,SF=hr,M_=Jn,TF=Nd,AF=Md,F_=cs,OF=qd.CONFIGURABLE,CF=F_.get,RF=F_.enforce,xF=String(String).split("String");(ln.exports=function(t,e,r,n){var i=n?!!n.unsafe:!1,s=n?!!n.enumerable:!1,o=n?!!n.noTargetGet:!1,a=n&&n.name!==void 0?n.name:e,c;if(L_(r)&&(String(a).slice(0,7)==="Symbol("&&(a="["+String(a).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!SF(r,"name")||OF&&r.name!==a)&&M_(r,"name",a),c=RF(r),c.source||(c.source=xF.join(typeof a=="string"?a:""))),t===IF){s?t[e]=r:TF(e,r);return}else i?!o&&t[e]&&(s=!0):delete t[e];s?t[e]=r:M_(t,e,r)})(Function.prototype,"toString",function(){return L_(this)&&CF(this).source||AF(this)});var au={},NF=Math.ceil,kF=Math.floor,cu=function(t){return isNaN(t=+t)?0:(t>0?kF:NF)(t)},PF=cu,$F=Math.min,us=function(t){return t>0?$F(PF(t),9007199254740991):0},DF=cu,LF=Math.max,MF=Math.min,FF=function(t,e){var r=DF(t);return r<0?LF(r+e,0):MF(r,e)},UF=Lo,jF=us,BF=FF,U_=function(t){return function(e,r,n){var i=UF(e),s=jF(i.length),o=BF(n,s),a;if(t&&r!=r){for(;s>o;)if(a=i[o++],a!=a)return!0}else for(;s>o;o++)if((t||o in i)&&i[o]===r)return t||o||0;return!t&&-1}},VF={includes:U_(!0),indexOf:U_(!1)},zd=hr,qF=Lo,zF=VF.indexOf,WF=iu,j_=function(t,e){var r=qF(t),n=0,i=[],s;for(s in r)!zd(WF,s)&&zd(r,s)&&i.push(s);for(;e.length>n;)zd(r,s=e[n++])&&(~zF(i,s)||i.push(s));return i},Wd=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],GF=j_,KF=Wd,HF=KF.concat("length","prototype");au.f=Object.getOwnPropertyNames||function(e){return GF(e,HF)};var Gd={};Gd.f=Object.getOwnPropertySymbols;var YF=Mo,XF=au,QF=Gd,JF=zt,ZF=YF("Reflect","ownKeys")||function(e){var r=XF.f(JF(e)),n=QF.f;return n?r.concat(n(e)):r},eU=hr,tU=ZF,rU=Id,nU=un,iU=function(t,e){for(var r=tU(e),n=nU.f,i=rU.f,s=0;s<r.length;s++){var o=r[s];eU(t,o)||n(t,o,i(e,o))}},sU=Xe,oU=Qe,aU=/#|\.prototype\./,Vo=function(t,e){var r=uU[cU(t)];return r==hU?!0:r==lU?!1:oU(e)?sU(e):!!e},cU=Vo.normalize=function(t){return String(t).replace(aU,".").toLowerCase()},uU=Vo.data={},lU=Vo.NATIVE="N",hU=Vo.POLYFILL="P",B_=Vo,Kd=Ye,fU=Id.f,dU=Jn,pU=ln.exports,vU=Nd,gU=iU,mU=B_,Br=function(t,e){var r=t.target,n=t.global,i=t.stat,s,o,a,c,u,l;if(n?o=Kd:i?o=Kd[r]||vU(r,{}):o=(Kd[r]||{}).prototype,o)for(a in e){if(u=e[a],t.noTargetGet?(l=fU(o,a),c=l&&l.value):c=o[a],s=mU(n?a:r+(i?".":"#")+a,t.forced),!s&&c!==void 0){if(typeof u==typeof c)continue;gU(u,c)}(t.sham||c&&c.sham)&&dU(u,"sham",!0),pU(o,a,u,t)}},yU=ru,V_=function(t,e,r){if(yU(t),e===void 0)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,s){return t.call(e,n,i,s)}}return function(){return t.apply(e,arguments)}},wU=Do,bU=Array.isArray||function(e){return wU(e)=="Array"},_U=Ot,EU=_U("toStringTag"),q_={};q_[EU]="z";var Hd=String(q_)==="[object z]",IU=Hd,SU=Qe,uu=Do,TU=Ot,AU=TU("toStringTag"),OU=uu(function(){return arguments}())=="Arguments",CU=function(t,e){try{return t[e]}catch(r){}},lu=IU?uu:function(t){var e,r,n;return t===void 0?"Undefined":t===null?"Null":typeof(r=CU(e=Object(t),AU))=="string"?r:OU?uu(e):(n=uu(e))=="Object"&&SU(e.callee)?"Arguments":n},RU=Xe,z_=Qe,xU=lu,NU=Mo,kU=Md,PU=[],W_=NU("Reflect","construct"),Yd=/^\s*(?:class|function)\b/,$U=Yd.exec,DU=!Yd.exec(function(){}),qo=function(t){if(!z_(t))return!1;try{return W_(Object,PU,t),!0}catch(e){return!1}},LU=function(t){if(!z_(t))return!1;switch(xU(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return DU||!!$U.call(Yd,kU(t))},MU=!W_||RU(function(){var t;return qo(qo.call)||!qo(Object)||!qo(function(){t=!0})||t})?LU:qo,G_=bU,FU=MU,UU=lr,jU=Ot,BU=jU("species"),VU=function(t){var e;return G_(t)&&(e=t.constructor,FU(e)&&(e===Array||G_(e.prototype))?e=void 0:UU(e)&&(e=e[BU],e===null&&(e=void 0))),e===void 0?Array:e},qU=VU,zU=function(t,e){return new(qU(t))(e===0?0:e)},WU=V_,GU=eu,KU=os,HU=us,YU=zU,K_=[].push,hn=function(t){var e=t==1,r=t==2,n=t==3,i=t==4,s=t==6,o=t==7,a=t==5||s;return function(c,u,l,h){for(var f=KU(c),p=GU(f),g=WU(u,l,3),I=HU(p.length),E=0,O=h||YU,D=e?O(c,I):r||o?O(c,0):void 0,q,G;I>E;E++)if((a||E in p)&&(q=p[E],G=g(q,E,f),t))if(e)D[E]=G;else if(G)switch(t){case 3:return!0;case 5:return q;case 6:return E;case 2:K_.call(D,q)}else switch(t){case 4:return!1;case 7:K_.call(D,q)}return s?-1:n||i?i:D}},Xd={forEach:hn(0),map:hn(1),filter:hn(2),some:hn(3),every:hn(4),find:hn(5),findIndex:hn(6),filterReject:hn(7)},XU=Xe,H_=function(t,e){var r=[][t];return!!r&&XU(function(){r.call(null,e||function(){throw 1},1)})},QU=Xd.forEach,JU=H_,ZU=JU("forEach"),Y_=ZU?[].forEach:function(e){return QU(this,e,arguments.length>1?arguments[1]:void 0)},ej=Br,X_=Y_;ej({target:"Array",proto:!0,forced:[].forEach!=X_},{forEach:X_});var Q_={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},tj=Dd,Qd=tj("span").classList,J_=Qd&&Qd.constructor&&Qd.constructor.prototype,Z_=J_===Object.prototype?void 0:J_,eE=Ye,tE=Q_,rj=Z_,Jd=Y_,nj=Jn,rE=function(t){if(t&&t.forEach!==Jd)try{nj(t,"forEach",Jd)}catch(e){t.forEach=Jd}};for(var Zd in tE)tE[Zd]&&rE(eE[Zd]&&eE[Zd].prototype);rE(rj);var ij=!!(typeof window!="undefined"&&window.document&&window.document.createElement),ep=ij,sj=Xe,oj=Ot,aj=Cd,cj=oj("species"),uj=function(t){return aj>=51||!sj(function(){var e=[],r=e.constructor={};return r[cj]=function(){return{foo:1}},e[t](Boolean).foo!==1})},lj=Br,hj=Xd.filter,fj=uj,dj=fj("filter");lj({target:"Array",proto:!0,forced:!dj},{filter:function(e){return hj(this,e,arguments.length>1?arguments[1]:void 0)}});var pj=j_,vj=Wd,nE=Object.keys||function(e){return pj(e,vj)},gj=cn,mj=un,yj=zt,wj=nE,bj=gj?Object.defineProperties:function(e,r){yj(e);for(var n=wj(r),i=n.length,s=0,o;i>s;)mj.f(e,o=n[s++],r[o]);return e},_j=Mo,Ej=_j("document","documentElement"),Ij=zt,Sj=bj,iE=Wd,Tj=iu,Aj=Ej,Oj=Dd,Cj=Fd,sE=">",oE="<",tp="prototype",rp="script",aE=Cj("IE_PROTO"),np=function(){},cE=function(t){return oE+rp+sE+t+oE+"/"+rp+sE},uE=function(t){t.write(cE("")),t.close();var e=t.parentWindow.Object;return t=null,e},Rj=function(){var t=Oj("iframe"),e="java"+rp+":",r;return t.style.display="none",Aj.appendChild(t),t.src=String(e),r=t.contentWindow.document,r.open(),r.write(cE("document.F=Object")),r.close(),r.F},hu,fu=function(){try{hu=new ActiveXObject("htmlfile")}catch(e){}fu=typeof document!="undefined"?document.domain&&hu?uE(hu):Rj():uE(hu);for(var t=iE.length;t--;)delete fu[tp][iE[t]];return fu()};Tj[aE]=!0;var ip=Object.create||function(e,r){var n;return e!==null?(np[tp]=Ij(e),n=new np,np[tp]=null,n[aE]=e):n=fu(),r===void 0?n:Sj(n,r)},xj=Ot,Nj=ip,kj=un,sp=xj("unscopables"),op=Array.prototype;op[sp]==null&&kj.f(op,sp,{configurable:!0,value:Nj(null)});var Pj=function(t){op[sp][t]=!0},zo={},$j=Xe,Dj=!$j(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}),Lj=hr,Mj=Qe,Fj=os,Uj=Fd,jj=Dj,lE=Uj("IE_PROTO"),Bj=Object.prototype,hE=jj?Object.getPrototypeOf:function(t){var e=Fj(t);if(Lj(e,lE))return e[lE];var r=e.constructor;return Mj(r)&&e instanceof r?r.prototype:e instanceof Object?Bj:null},Vj=Xe,qj=Qe,fE=hE,zj=ln.exports,Wj=Ot,ap=Wj("iterator"),dE=!1,ei,cp,up;[].keys&&(up=[].keys(),"next"in up?(cp=fE(fE(up)),cp!==Object.prototype&&(ei=cp)):dE=!0);var Gj=ei==null||Vj(function(){var t={};return ei[ap].call(t)!==t});Gj&&(ei={});qj(ei[ap])||zj(ei,ap,function(){return this});var pE={IteratorPrototype:ei,BUGGY_SAFARI_ITERATORS:dE},Kj=un.f,Hj=hr,Yj=Ot,vE=Yj("toStringTag"),lp=function(t,e,r){t&&!Hj(t=r?t:t.prototype,vE)&&Kj(t,vE,{configurable:!0,value:e})},Xj=pE.IteratorPrototype,Qj=ip,Jj=Td,Zj=lp,eB=zo,tB=function(){return this},rB=function(t,e,r){var n=e+" Iterator";return t.prototype=Qj(Xj,{next:Jj(1,r)}),Zj(t,n,!1),eB[n]=tB,t},nB=Qe,iB=function(t){if(typeof t=="object"||nB(t))return t;throw TypeError("Can't set "+String(t)+" as a prototype")},sB=zt,oB=iB,gE=Object.setPrototypeOf||("__proto__"in{}?function(){var t=!1,e={},r;try{r=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,r.call(e,[]),t=e instanceof Array}catch(n){}return function(i,s){return sB(i),oB(s),t?r.call(i,s):i.__proto__=s,i}}():void 0),aB=Br,mE=qd,cB=Qe,uB=rB,yE=hE,wE=gE,lB=lp,hB=Jn,hp=ln.exports,fB=Ot,dB=zo,bE=pE,pB=mE.PROPER,vB=mE.CONFIGURABLE,_E=bE.IteratorPrototype,du=bE.BUGGY_SAFARI_ITERATORS,Wo=fB("iterator"),EE="keys",Go="values",IE="entries",gB=function(){return this},SE=function(t,e,r,n,i,s,o){uB(r,e,n);var a=function(O){if(O===i&&f)return f;if(!du&&O in l)return l[O];switch(O){case EE:return function(){return new r(this,O)};case Go:return function(){return new r(this,O)};case IE:return function(){return new r(this,O)}}return function(){return new r(this)}},c=e+" Iterator",u=!1,l=t.prototype,h=l[Wo]||l["@@iterator"]||i&&l[i],f=!du&&h||a(i),p=e=="Array"&&l.entries||h,g,I,E;if(p&&(g=yE(p.call(new t)),g!==Object.prototype&&g.next&&(yE(g)!==_E&&(wE?wE(g,_E):cB(g[Wo])||hp(g,Wo,gB)),lB(g,c,!0))),pB&&i==Go&&h&&h.name!==Go&&(vB?hB(l,"name",Go):(u=!0,f=function(){return h.call(this)})),i)if(I={values:a(Go),keys:s?f:a(EE),entries:a(IE)},o)for(E in I)(du||u||!(E in l))&&hp(l,E,I[E]);else aB({target:e,proto:!0,forced:du||u},I);return l[Wo]!==f&&hp(l,Wo,f,{name:i}),dB[e]=f,I},mB=Lo,fp=Pj,TE=zo,AE=cs,yB=SE,OE="Array Iterator",wB=AE.set,bB=AE.getterFor(OE),_B=yB(Array,"Array",function(t,e){wB(this,{type:OE,target:mB(t),index:0,kind:e})},function(){var t=bB(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):r=="keys"?{value:n,done:!1}:r=="values"?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}},"values");TE.Arguments=TE.Array;fp("keys");fp("values");fp("entries");var CE=cn,EB=Xe,dp=nE,IB=Gd,SB=Sd,TB=os,AB=eu,ls=Object.assign,RE=Object.defineProperty,OB=!ls||EB(function(){if(CE&&ls({b:1},ls(RE({},"a",{enumerable:!0,get:function(){RE(this,"b",{value:3,enumerable:!1})}}),{b:2})).b!==1)return!0;var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach(function(i){e[i]=i}),ls({},t)[r]!=7||dp(ls({},e)).join("")!=n})?function(e,r){for(var n=TB(e),i=arguments.length,s=1,o=IB.f,a=SB.f;i>s;)for(var c=AB(arguments[s++]),u=o?dp(c).concat(o(c)):dp(c),l=u.length,h=0,f;l>h;)f=u[h++],(!CE||a.call(c,f))&&(n[f]=c[f]);return n}:ls,CB=Br,xE=OB;CB({target:"Object",stat:!0,forced:Object.assign!==xE},{assign:xE});var RB=Hd,xB=lu,NB=RB?{}.toString:function(){return"[object "+xB(this)+"]"},kB=Hd,PB=ln.exports,$B=NB;kB||PB(Object.prototype,"toString",$B,{unsafe:!0});var DB=lu,ti=function(t){if(DB(t)==="Symbol")throw TypeError("Cannot convert a Symbol value to a string");return String(t)},NE=`	
\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF`,LB=ss,MB=ti,FB=NE,pu="["+FB+"]",UB=RegExp("^"+pu+pu+"*"),jB=RegExp(pu+pu+"*$"),pp=function(t){return function(e){var r=MB(LB(e));return t&1&&(r=r.replace(UB,"")),t&2&&(r=r.replace(jB,"")),r}},BB={start:pp(1),end:pp(2),trim:pp(3)},kE=Ye,VB=Xe,qB=ti,zB=BB.trim,PE=NE,Ko=kE.parseInt,$E=kE.Symbol,DE=$E&&$E.iterator,WB=/^[+-]?0[Xx]/,GB=Ko(PE+"08")!==8||Ko(PE+"0x16")!==22||DE&&!VB(function(){Ko(Object(DE))}),KB=GB?function(e,r){var n=zB(qB(e));return Ko(n,r>>>0||(WB.test(n)?16:10))}:Ko,HB=Br,LE=KB;HB({global:!0,forced:parseInt!=LE},{parseInt:LE});var YB=cu,XB=ti,QB=ss,ME=function(t){return function(e,r){var n=XB(QB(e)),i=YB(r),s=n.length,o,a;return i<0||i>=s?t?"":void 0:(o=n.charCodeAt(i),o<55296||o>56319||i+1===s||(a=n.charCodeAt(i+1))<56320||a>57343?t?n.charAt(i):o:t?n.slice(i,i+2):(o-55296<<10)+(a-56320)+65536)}},FE={codeAt:ME(!1),charAt:ME(!0)},JB=FE.charAt,ZB=ti,UE=cs,eV=SE,jE="String Iterator",tV=UE.set,rV=UE.getterFor(jE);eV(String,"String",function(t){tV(this,{type:jE,string:ZB(t),index:0})},function(){var e=rV(this),r=e.string,n=e.index,i;return n>=r.length?{value:void 0,done:!0}:(i=JB(r,n),e.index+=i.length,{value:i,done:!1})});var nV=ln.exports,BE=function(t,e,r){for(var n in e)nV(t,n,e[n],r);return t},vu={exports:{}},VE={},iV=Lo,qE=au.f,sV={}.toString,zE=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],oV=function(t){try{return qE(t)}catch(e){return zE.slice()}};VE.f=function(e){return zE&&sV.call(e)=="[object Window]"?oV(e):qE(iV(e))};var aV=Xe,cV=!aV(function(){return Object.isExtensible(Object.preventExtensions({}))}),uV=Br,lV=iu,hV=lr,vp=hr,fV=un.f,WE=au,dV=VE,pV=Pd,vV=cV,GE=!1,Vr=pV("meta"),gV=0,gp=Object.isExtensible||function(){return!0},mp=function(t){fV(t,Vr,{value:{objectID:"O"+gV++,weakData:{}}})},mV=function(t,e){if(!hV(t))return typeof t=="symbol"?t:(typeof t=="string"?"S":"P")+t;if(!vp(t,Vr)){if(!gp(t))return"F";if(!e)return"E";mp(t)}return t[Vr].objectID},yV=function(t,e){if(!vp(t,Vr)){if(!gp(t))return!0;if(!e)return!1;mp(t)}return t[Vr].weakData},wV=function(t){return vV&&GE&&gp(t)&&!vp(t,Vr)&&mp(t),t},bV=function(){_V.enable=function(){},GE=!0;var t=WE.f,e=[].splice,r={};r[Vr]=1,t(r).length&&(WE.f=function(n){for(var i=t(n),s=0,o=i.length;s<o;s++)if(i[s]===Vr){e.call(i,s,1);break}return i},uV({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:dV.f}))},_V=vu.exports={enable:bV,fastKey:mV,getWeakData:yV,onFreeze:wV};lV[Vr]=!0;var EV=Ot,IV=zo,SV=EV("iterator"),TV=Array.prototype,AV=function(t){return t!==void 0&&(IV.Array===t||TV[SV]===t)},OV=lu,KE=Fo,CV=zo,RV=Ot,xV=RV("iterator"),HE=function(t){if(t!=null)return KE(t,xV)||KE(t,"@@iterator")||CV[OV(t)]},NV=ru,kV=zt,PV=HE,$V=function(t,e){var r=arguments.length<2?PV(t):e;if(NV(r))return kV(r.call(t));throw TypeError(String(t)+" is not iterable")},YE=zt,DV=Fo,LV=function(t,e,r){var n,i;YE(t);try{if(n=DV(t,"return"),!n){if(e==="throw")throw r;return r}n=n.call(t)}catch(s){i=!0,n=s}if(e==="throw")throw r;if(i)throw n;return YE(n),r},MV=zt,FV=AV,UV=us,jV=V_,BV=$V,VV=HE,XE=LV,Ho=function(t,e){this.stopped=t,this.result=e},QE=function(t,e,r){var n=r&&r.that,i=!!(r&&r.AS_ENTRIES),s=!!(r&&r.IS_ITERATOR),o=!!(r&&r.INTERRUPTED),a=jV(e,n,1+i+o),c,u,l,h,f,p,g,I=function(O){return c&&XE(c,"normal",O),new Ho(!0,O)},E=function(O){return i?(MV(O),o?a(O[0],O[1],I):a(O[0],O[1])):o?a(O,I):a(O)};if(s)c=t;else{if(u=VV(t),!u)throw TypeError(String(t)+" is not iterable");if(FV(u)){for(l=0,h=UV(t.length);h>l;l++)if(f=E(t[l]),f&&f instanceof Ho)return f;return new Ho(!1)}c=BV(t,u)}for(p=c.next;!(g=p.call(c)).done;){try{f=E(g.value)}catch(O){XE(c,"throw",O)}if(typeof f=="object"&&f&&f instanceof Ho)return f}return new Ho(!1)},JE=function(t,e,r){if(t instanceof e)return t;throw TypeError("Incorrect "+(r?r+" ":"")+"invocation")},qV=Ot,ZE=qV("iterator"),eI=!1;try{var zV=0,tI={next:function(){return{done:!!zV++}},return:function(){eI=!0}};tI[ZE]=function(){return this},Array.from(tI,function(){throw 2})}catch(t){}var WV=function(t,e){if(!e&&!eI)return!1;var r=!1;try{var n={};n[ZE]=function(){return{next:function(){return{done:r=!0}}}},t(n)}catch(i){}return r},GV=Qe,KV=lr,rI=gE,HV=function(t,e,r){var n,i;return rI&&GV(n=e.constructor)&&n!==r&&KV(i=n.prototype)&&i!==r.prototype&&rI(t,i),t},YV=Br,XV=Ye,nI=B_,QV=ln.exports,JV=vu.exports,ZV=QE,eq=JE,tq=Qe,yp=lr,wp=Xe,rq=WV,nq=lp,iq=HV,sq=function(t,e,r){var n=t.indexOf("Map")!==-1,i=t.indexOf("Weak")!==-1,s=n?"set":"add",o=XV[t],a=o&&o.prototype,c=o,u={},l=function(O){var D=a[O];QV(a,O,O=="add"?function(G){return D.call(this,G===0?0:G),this}:O=="delete"?function(q){return i&&!yp(q)?!1:D.call(this,q===0?0:q)}:O=="get"?function(G){return i&&!yp(G)?void 0:D.call(this,G===0?0:G)}:O=="has"?function(G){return i&&!yp(G)?!1:D.call(this,G===0?0:G)}:function(G,k){return D.call(this,G===0?0:G,k),this})},h=nI(t,!tq(o)||!(i||a.forEach&&!wp(function(){new o().entries().next()})));if(h)c=r.getConstructor(e,t,n,s),JV.enable();else if(nI(t,!0)){var f=new c,p=f[s](i?{}:-0,1)!=f,g=wp(function(){f.has(1)}),I=rq(function(O){new o(O)}),E=!i&&wp(function(){for(var O=new o,D=5;D--;)O[s](D,D);return!O.has(-0)});I||(c=e(function(O,D){eq(O,c,t);var q=iq(new o,O,c);return D!=null&&ZV(D,q[s],{that:q,AS_ENTRIES:n}),q}),c.prototype=a,a.constructor=c),(g||E)&&(l("delete"),l("has"),n&&l("get")),(E||p)&&l(s),i&&a.clear&&delete a.clear}return u[t]=c,YV({global:!0,forced:c!=o},u),nq(c,t),i||r.setStrong(c,t,n),c},iI=BE,gu=vu.exports.getWeakData,oq=zt,bp=lr,aq=JE,cq=QE,sI=Xd,oI=hr,aI=cs,uq=aI.set,lq=aI.getterFor,hq=sI.find,fq=sI.findIndex,dq=0,mu=function(t){return t.frozen||(t.frozen=new cI)},cI=function(){this.entries=[]},_p=function(t,e){return hq(t.entries,function(r){return r[0]===e})};cI.prototype={get:function(t){var e=_p(this,t);if(e)return e[1]},has:function(t){return!!_p(this,t)},set:function(t,e){var r=_p(this,t);r?r[1]=e:this.entries.push([t,e])},delete:function(t){var e=fq(this.entries,function(r){return r[0]===t});return~e&&this.entries.splice(e,1),!!~e}};var pq={getConstructor:function(t,e,r,n){var i=t(function(a,c){aq(a,i,e),uq(a,{type:e,id:dq++,frozen:void 0}),c!=null&&cq(c,a[n],{that:a,AS_ENTRIES:r})}),s=lq(e),o=function(a,c,u){var l=s(a),h=gu(oq(c),!0);return h===!0?mu(l).set(c,u):h[l.id]=u,a};return iI(i.prototype,{delete:function(a){var c=s(this);if(!bp(a))return!1;var u=gu(a);return u===!0?mu(c).delete(a):u&&oI(u,c.id)&&delete u[c.id]},has:function(c){var u=s(this);if(!bp(c))return!1;var l=gu(c);return l===!0?mu(u).has(c):l&&oI(l,u.id)}}),iI(i.prototype,r?{get:function(c){var u=s(this);if(bp(c)){var l=gu(c);return l===!0?mu(u).get(c):l?l[u.id]:void 0}},set:function(c,u){return o(this,c,u)}}:{add:function(c){return o(this,c,!0)}}),i}},uI=Ye,vq=BE,gq=vu.exports,mq=sq,lI=pq,yu=lr,wu=cs.enforce,yq=N_,wq=!uI.ActiveXObject&&"ActiveXObject"in uI,bu=Object.isExtensible,Yo,hI=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},bq=mq("WeakMap",hI,lI);if(yq&&wq){Yo=lI.getConstructor(hI,"WeakMap",!0),gq.enable();var Xo=bq.prototype,fI=Xo.delete,_u=Xo.has,dI=Xo.get,pI=Xo.set;vq(Xo,{delete:function(t){if(yu(t)&&!bu(t)){var e=wu(this);return e.frozen||(e.frozen=new Yo),fI.call(this,t)||e.frozen.delete(t)}return fI.call(this,t)},has:function(e){if(yu(e)&&!bu(e)){var r=wu(this);return r.frozen||(r.frozen=new Yo),_u.call(this,e)||r.frozen.has(e)}return _u.call(this,e)},get:function(e){if(yu(e)&&!bu(e)){var r=wu(this);return r.frozen||(r.frozen=new Yo),_u.call(this,e)?dI.call(this,e):r.frozen.get(e)}return dI.call(this,e)},set:function(e,r){if(yu(e)&&!bu(e)){var n=wu(this);n.frozen||(n.frozen=new Yo),_u.call(this,e)?pI.call(this,e,r):n.frozen.set(e,r)}else pI.call(this,e,r);return this}})}var vI=Ye,gI=Q_,_q=Z_,Qo=_B,Ep=Jn,mI=Ot,Ip=mI("iterator"),yI=mI("toStringTag"),Sp=Qo.values,wI=function(t,e){if(t){if(t[Ip]!==Sp)try{Ep(t,Ip,Sp)}catch(n){t[Ip]=Sp}if(t[yI]||Ep(t,yI,e),gI[e]){for(var r in Qo)if(t[r]!==Qo[r])try{Ep(t,r,Qo[r])}catch(n){t[r]=Qo[r]}}}};for(var Tp in gI)wI(vI[Tp]&&vI[Tp].prototype,Tp);wI(_q,"DOMTokenList");var bI="Expected a function",_I=0/0,Eq="[object Symbol]",Iq=/^\s+|\s+$/g,Sq=/^[-+]0x[0-9a-f]+$/i,Tq=/^0b[01]+$/i,Aq=/^0o[0-7]+$/i,Oq=parseInt,Cq=typeof qe=="object"&&qe&&qe.Object===Object&&qe,Rq=typeof self=="object"&&self&&self.Object===Object&&self,xq=Cq||Rq||Function("return this")(),Nq=Object.prototype,kq=Nq.toString,Pq=Math.max,$q=Math.min,Ap=function(){return xq.Date.now()};function Dq(t,e,r){var n,i,s,o,a,c,u=0,l=!1,h=!1,f=!0;if(typeof t!="function")throw new TypeError(bI);e=EI(e)||0,Eu(r)&&(l=!!r.leading,h="maxWait"in r,s=h?Pq(EI(r.maxWait)||0,e):s,f="trailing"in r?!!r.trailing:f);function p(N){var b=n,R=i;return n=i=void 0,u=N,o=t.apply(R,b),o}function g(N){return u=N,a=setTimeout(O,e),l?p(N):o}function I(N){var b=N-c,R=N-u,H=e-b;return h?$q(H,s-R):H}function E(N){var b=N-c,R=N-u;return c===void 0||b>=e||b<0||h&&R>=s}function O(){var N=Ap();if(E(N))return D(N);a=setTimeout(O,I(N))}function D(N){return a=void 0,f&&n?p(N):(n=i=void 0,o)}function q(){a!==void 0&&clearTimeout(a),u=0,n=c=i=a=void 0}function G(){return a===void 0?o:D(Ap())}function k(){var N=Ap(),b=E(N);if(n=arguments,i=this,c=N,b){if(a===void 0)return g(c);if(h)return a=setTimeout(O,e),p(c)}return a===void 0&&(a=setTimeout(O,e)),o}return k.cancel=q,k.flush=G,k}function Lq(t,e,r){var n=!0,i=!0;if(typeof t!="function")throw new TypeError(bI);return Eu(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),Dq(t,e,{leading:n,maxWait:e,trailing:i})}function Eu(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Mq(t){return!!t&&typeof t=="object"}function Fq(t){return typeof t=="symbol"||Mq(t)&&kq.call(t)==Eq}function EI(t){if(typeof t=="number")return t;if(Fq(t))return _I;if(Eu(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Eu(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(Iq,"");var r=Tq.test(t);return r||Aq.test(t)?Oq(t.slice(2),r?2:8):Sq.test(t)?_I:+t}var II=Lq,Uq="Expected a function",SI=0/0,jq="[object Symbol]",Bq=/^\s+|\s+$/g,Vq=/^[-+]0x[0-9a-f]+$/i,qq=/^0b[01]+$/i,zq=/^0o[0-7]+$/i,Wq=parseInt,Gq=typeof qe=="object"&&qe&&qe.Object===Object&&qe,Kq=typeof self=="object"&&self&&self.Object===Object&&self,Hq=Gq||Kq||Function("return this")(),Yq=Object.prototype,Xq=Yq.toString,Qq=Math.max,Jq=Math.min,Op=function(){return Hq.Date.now()};function Zq(t,e,r){var n,i,s,o,a,c,u=0,l=!1,h=!1,f=!0;if(typeof t!="function")throw new TypeError(Uq);e=TI(e)||0,Cp(r)&&(l=!!r.leading,h="maxWait"in r,s=h?Qq(TI(r.maxWait)||0,e):s,f="trailing"in r?!!r.trailing:f);function p(N){var b=n,R=i;return n=i=void 0,u=N,o=t.apply(R,b),o}function g(N){return u=N,a=setTimeout(O,e),l?p(N):o}function I(N){var b=N-c,R=N-u,H=e-b;return h?Jq(H,s-R):H}function E(N){var b=N-c,R=N-u;return c===void 0||b>=e||b<0||h&&R>=s}function O(){var N=Op();if(E(N))return D(N);a=setTimeout(O,I(N))}function D(N){return a=void 0,f&&n?p(N):(n=i=void 0,o)}function q(){a!==void 0&&clearTimeout(a),u=0,n=c=i=a=void 0}function G(){return a===void 0?o:D(Op())}function k(){var N=Op(),b=E(N);if(n=arguments,i=this,c=N,b){if(a===void 0)return g(c);if(h)return a=setTimeout(O,e),p(c)}return a===void 0&&(a=setTimeout(O,e)),o}return k.cancel=q,k.flush=G,k}function Cp(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function ez(t){return!!t&&typeof t=="object"}function tz(t){return typeof t=="symbol"||ez(t)&&Xq.call(t)==jq}function TI(t){if(typeof t=="number")return t;if(tz(t))return SI;if(Cp(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Cp(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(Bq,"");var r=qq.test(t);return r||zq.test(t)?Wq(t.slice(2),r?2:8):Vq.test(t)?SI:+t}var AI=Zq,rz="Expected a function",OI="__lodash_hash_undefined__",nz="[object Function]",iz="[object GeneratorFunction]",sz=/[\\^$.*+?()[\]{}|]/g,oz=/^\[object .+?Constructor\]$/,az=typeof qe=="object"&&qe&&qe.Object===Object&&qe,cz=typeof self=="object"&&self&&self.Object===Object&&self,CI=az||cz||Function("return this")();function uz(t,e){return t==null?void 0:t[e]}function lz(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch(r){}return e}var hz=Array.prototype,fz=Function.prototype,RI=Object.prototype,Rp=CI["__core-js_shared__"],xI=function(){var t=/[^.]+$/.exec(Rp&&Rp.keys&&Rp.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),NI=fz.toString,xp=RI.hasOwnProperty,dz=RI.toString,pz=RegExp("^"+NI.call(xp).replace(sz,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),vz=hz.splice,gz=kI(CI,"Map"),Jo=kI(Object,"create");function ri(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function mz(){this.__data__=Jo?Jo(null):{}}function yz(t){return this.has(t)&&delete this.__data__[t]}function wz(t){var e=this.__data__;if(Jo){var r=e[t];return r===OI?void 0:r}return xp.call(e,t)?e[t]:void 0}function bz(t){var e=this.__data__;return Jo?e[t]!==void 0:xp.call(e,t)}function _z(t,e){var r=this.__data__;return r[t]=Jo&&e===void 0?OI:e,this}ri.prototype.clear=mz;ri.prototype.delete=yz;ri.prototype.get=wz;ri.prototype.has=bz;ri.prototype.set=_z;function hs(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Ez(){this.__data__=[]}function Iz(t){var e=this.__data__,r=Iu(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():vz.call(e,r,1),!0}function Sz(t){var e=this.__data__,r=Iu(e,t);return r<0?void 0:e[r][1]}function Tz(t){return Iu(this.__data__,t)>-1}function Az(t,e){var r=this.__data__,n=Iu(r,t);return n<0?r.push([t,e]):r[n][1]=e,this}hs.prototype.clear=Ez;hs.prototype.delete=Iz;hs.prototype.get=Sz;hs.prototype.has=Tz;hs.prototype.set=Az;function ni(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Oz(){this.__data__={hash:new ri,map:new(gz||hs),string:new ri}}function Cz(t){return Su(this,t).delete(t)}function Rz(t){return Su(this,t).get(t)}function xz(t){return Su(this,t).has(t)}function Nz(t,e){return Su(this,t).set(t,e),this}ni.prototype.clear=Oz;ni.prototype.delete=Cz;ni.prototype.get=Rz;ni.prototype.has=xz;ni.prototype.set=Nz;function Iu(t,e){for(var r=t.length;r--;)if(Lz(t[r][0],e))return r;return-1}function kz(t){if(!PI(t)||$z(t))return!1;var e=Mz(t)||lz(t)?pz:oz;return e.test(Dz(t))}function Su(t,e){var r=t.__data__;return Pz(e)?r[typeof e=="string"?"string":"hash"]:r.map}function kI(t,e){var r=uz(t,e);return kz(r)?r:void 0}function Pz(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function $z(t){return!!xI&&xI in t}function Dz(t){if(t!=null){try{return NI.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function Np(t,e){if(typeof t!="function"||e&&typeof e!="function")throw new TypeError(rz);var r=function(){var n=arguments,i=e?e.apply(this,n):n[0],s=r.cache;if(s.has(i))return s.get(i);var o=t.apply(this,n);return r.cache=s.set(i,o),o};return r.cache=new(Np.Cache||ni),r}Np.Cache=ni;function Lz(t,e){return t===e||t!==t&&e!==e}function Mz(t){var e=PI(t)?dz.call(t):"";return e==nz||e==iz}function PI(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}var Fz=Np,ii=[],Uz=function(){return ii.some(function(t){return t.activeTargets.length>0})},jz=function(){return ii.some(function(t){return t.skippedTargets.length>0})},$I="ResizeObserver loop completed with undelivered notifications.",Bz=function(){var t;typeof ErrorEvent=="function"?t=new ErrorEvent("error",{message:$I}):(t=document.createEvent("Event"),t.initEvent("error",!1,!1),t.message=$I),window.dispatchEvent(t)},Zo;(function(t){t.BORDER_BOX="border-box",t.CONTENT_BOX="content-box",t.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(Zo||(Zo={}));var si=function(t){return Object.freeze(t)},Vz=function(){function t(e,r){this.inlineSize=e,this.blockSize=r,si(this)}return t}(),DI=function(){function t(e,r,n,i){return this.x=e,this.y=r,this.width=n,this.height=i,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,si(this)}return t.prototype.toJSON=function(){var e=this,r=e.x,n=e.y,i=e.top,s=e.right,o=e.bottom,a=e.left,c=e.width,u=e.height;return{x:r,y:n,top:i,right:s,bottom:o,left:a,width:c,height:u}},t.fromRect=function(e){return new t(e.x,e.y,e.width,e.height)},t}(),kp=function(t){return t instanceof SVGElement&&"getBBox"in t},LI=function(t){if(kp(t)){var e=t.getBBox(),r=e.width,n=e.height;return!r&&!n}var i=t,s=i.offsetWidth,o=i.offsetHeight;return!(s||o||t.getClientRects().length)},MI=function(t){var e,r;if(t instanceof Element)return!0;var n=(r=(e=t)===null||e===void 0?void 0:e.ownerDocument)===null||r===void 0?void 0:r.defaultView;return!!(n&&t instanceof n.Element)},qz=function(t){switch(t.tagName){case"INPUT":if(t.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},ea=typeof window!="undefined"?window:{},Tu=new WeakMap,FI=/auto|scroll/,zz=/^tb|vertical/,Wz=/msie|trident/i.test(ea.navigator&&ea.navigator.userAgent),Tr=function(t){return parseFloat(t||"0")},fs=function(t,e,r){return t===void 0&&(t=0),e===void 0&&(e=0),r===void 0&&(r=!1),new Vz((r?e:t)||0,(r?t:e)||0)},UI=si({devicePixelContentBoxSize:fs(),borderBoxSize:fs(),contentBoxSize:fs(),contentRect:new DI(0,0,0,0)}),jI=function(t,e){if(e===void 0&&(e=!1),Tu.has(t)&&!e)return Tu.get(t);if(LI(t))return Tu.set(t,UI),UI;var r=getComputedStyle(t),n=kp(t)&&t.ownerSVGElement&&t.getBBox(),i=!Wz&&r.boxSizing==="border-box",s=zz.test(r.writingMode||""),o=!n&&FI.test(r.overflowY||""),a=!n&&FI.test(r.overflowX||""),c=n?0:Tr(r.paddingTop),u=n?0:Tr(r.paddingRight),l=n?0:Tr(r.paddingBottom),h=n?0:Tr(r.paddingLeft),f=n?0:Tr(r.borderTopWidth),p=n?0:Tr(r.borderRightWidth),g=n?0:Tr(r.borderBottomWidth),I=n?0:Tr(r.borderLeftWidth),E=h+u,O=c+l,D=I+p,q=f+g,G=a?t.offsetHeight-q-t.clientHeight:0,k=o?t.offsetWidth-D-t.clientWidth:0,N=i?E+D:0,b=i?O+q:0,R=n?n.width:Tr(r.width)-N-k,H=n?n.height:Tr(r.height)-b-G,ne=R+E+k+D,ye=H+O+G+q,T=si({devicePixelContentBoxSize:fs(Math.round(R*devicePixelRatio),Math.round(H*devicePixelRatio),s),borderBoxSize:fs(ne,ye,s),contentBoxSize:fs(R,H,s),contentRect:new DI(h,c,R,H)});return Tu.set(t,T),T},BI=function(t,e,r){var n=jI(t,r),i=n.borderBoxSize,s=n.contentBoxSize,o=n.devicePixelContentBoxSize;switch(e){case Zo.DEVICE_PIXEL_CONTENT_BOX:return o;case Zo.BORDER_BOX:return i;default:return s}},Gz=function(){function t(e){var r=jI(e);this.target=e,this.contentRect=r.contentRect,this.borderBoxSize=si([r.borderBoxSize]),this.contentBoxSize=si([r.contentBoxSize]),this.devicePixelContentBoxSize=si([r.devicePixelContentBoxSize])}return t}(),VI=function(t){if(LI(t))return 1/0;for(var e=0,r=t.parentNode;r;)e+=1,r=r.parentNode;return e},Kz=function(){var t=1/0,e=[];ii.forEach(function(o){if(o.activeTargets.length!==0){var a=[];o.activeTargets.forEach(function(u){var l=new Gz(u.target),h=VI(u.target);a.push(l),u.lastReportedSize=BI(u.target,u.observedBox),h<t&&(t=h)}),e.push(function(){o.callback.call(o.observer,a,o.observer)}),o.activeTargets.splice(0,o.activeTargets.length)}});for(var r=0,n=e;r<n.length;r++){var i=n[r];i()}return t},qI=function(t){ii.forEach(function(r){r.activeTargets.splice(0,r.activeTargets.length),r.skippedTargets.splice(0,r.skippedTargets.length),r.observationTargets.forEach(function(i){i.isActive()&&(VI(i.target)>t?r.activeTargets.push(i):r.skippedTargets.push(i))})})},Hz=function(){var t=0;for(qI(t);Uz();)t=Kz(),qI(t);return jz()&&Bz(),t>0},Pp,zI=[],Yz=function(){return zI.splice(0).forEach(function(t){return t()})},Xz=function(t){if(!Pp){var e=0,r=document.createTextNode(""),n={characterData:!0};new MutationObserver(function(){return Yz()}).observe(r,n),Pp=function(){r.textContent=""+(e?e--:e++)}}zI.push(t),Pp()},Qz=function(t){Xz(function(){requestAnimationFrame(t)})},Au=0,Jz=function(){return!!Au},Zz=250,eW={attributes:!0,characterData:!0,childList:!0,subtree:!0},WI=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],GI=function(t){return t===void 0&&(t=0),Date.now()+t},$p=!1,tW=function(){function t(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return t.prototype.run=function(e){var r=this;if(e===void 0&&(e=Zz),!$p){$p=!0;var n=GI(e);Qz(function(){var i=!1;try{i=Hz()}finally{if($p=!1,e=n-GI(),!Jz())return;i?r.run(1e3):e>0?r.run(e):r.start()}})}},t.prototype.schedule=function(){this.stop(),this.run()},t.prototype.observe=function(){var e=this,r=function(){return e.observer&&e.observer.observe(document.body,eW)};document.body?r():ea.addEventListener("DOMContentLoaded",r)},t.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),WI.forEach(function(r){return ea.addEventListener(r,e.listener,!0)}))},t.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),WI.forEach(function(r){return ea.removeEventListener(r,e.listener,!0)}),this.stopped=!0)},t}(),Dp=new tW,KI=function(t){!Au&&t>0&&Dp.start(),Au+=t,!Au&&Dp.stop()},rW=function(t){return!kp(t)&&!qz(t)&&getComputedStyle(t).display==="inline"},nW=function(){function t(e,r){this.target=e,this.observedBox=r||Zo.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return t.prototype.isActive=function(){var e=BI(this.target,this.observedBox,!0);return rW(this.target)&&(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},t}(),iW=function(){function t(e,r){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=r}return t}(),Ou=new WeakMap,HI=function(t,e){for(var r=0;r<t.length;r+=1)if(t[r].target===e)return r;return-1},Cu=function(){function t(){}return t.connect=function(e,r){var n=new iW(e,r);Ou.set(e,n)},t.observe=function(e,r,n){var i=Ou.get(e),s=i.observationTargets.length===0;HI(i.observationTargets,r)<0&&(s&&ii.push(i),i.observationTargets.push(new nW(r,n&&n.box)),KI(1),Dp.schedule())},t.unobserve=function(e,r){var n=Ou.get(e),i=HI(n.observationTargets,r),s=n.observationTargets.length===1;i>=0&&(s&&ii.splice(ii.indexOf(n),1),n.observationTargets.splice(i,1),KI(-1))},t.disconnect=function(e){var r=this,n=Ou.get(e);n.observationTargets.slice().forEach(function(i){return r.unobserve(e,i.target)}),n.activeTargets.splice(0,n.activeTargets.length)},t}(),sW=function(){function t(e){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof e!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Cu.connect(this,e)}return t.prototype.observe=function(e,r){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!MI(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Cu.observe(this,e,r)},t.prototype.unobserve=function(e){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!MI(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Cu.unobserve(this,e)},t.prototype.disconnect=function(){Cu.disconnect(this)},t.toString=function(){return"function ResizeObserver () { [polyfill code] }"},t}(),oW=ru,aW=os,cW=eu,uW=us,YI=function(t){return function(e,r,n,i){oW(r);var s=aW(e),o=cW(s),a=uW(s.length),c=t?a-1:0,u=t?-1:1;if(n<2)for(;;){if(c in o){i=o[c],c+=u;break}if(c+=u,t?c<0:a<=c)throw TypeError("Reduce of empty array with no initial value")}for(;t?c>=0:a>c;c+=u)c in o&&(i=r(i,o[c],c,s));return i}},lW={left:YI(!1),right:YI(!0)},hW=Do,fW=Ye,dW=hW(fW.process)=="process",pW=Br,vW=lW.left,gW=H_,XI=Cd,mW=dW,yW=gW("reduce"),wW=!mW&&XI>79&&XI<83;pW({target:"Array",proto:!0,forced:!yW||wW},{reduce:function(e){return vW(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}});var bW=cn,_W=qd.EXISTS,EW=un.f,QI=Function.prototype,IW=QI.toString,SW=/^\s*function ([^ (]*)/,TW="name";bW&&!_W&&EW(QI,TW,{configurable:!0,get:function(){try{return IW.call(this).match(SW)[1]}catch(t){return""}}});var AW=zt,OW=function(){var t=AW(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e},Lp={},JI=Xe,CW=Ye,ZI=CW.RegExp;Lp.UNSUPPORTED_Y=JI(function(){var t=ZI("a","y");return t.lastIndex=2,t.exec("abcd")!=null});Lp.BROKEN_CARET=JI(function(){var t=ZI("^r","gy");return t.lastIndex=2,t.exec("str")!=null});var RW=Xe,xW=Ye,NW=xW.RegExp,kW=RW(function(){var t=NW(".","s");return!(t.dotAll&&t.exec(`
`)&&t.flags==="s")}),PW=Xe,$W=Ye,DW=$W.RegExp,LW=PW(function(){var t=DW("(?<a>b)","g");return t.exec("b").groups.a!=="b"||"b".replace(t,"$<a>c")!=="bc"}),MW=ti,FW=OW,eS=Lp,UW=nu.exports,jW=ip,BW=cs.get,VW=kW,qW=LW,Ru=RegExp.prototype.exec,zW=UW("native-string-replace",String.prototype.replace),Mp=Ru,Fp=function(){var t=/a/,e=/b*/g;return Ru.call(t,"a"),Ru.call(e,"a"),t.lastIndex!==0||e.lastIndex!==0}(),tS=eS.UNSUPPORTED_Y||eS.BROKEN_CARET,Up=/()??/.exec("")[1]!==void 0,WW=Fp||Up||tS||VW||qW;WW&&(Mp=function(e){var r=this,n=BW(r),i=MW(e),s=n.raw,o,a,c,u,l,h,f;if(s)return s.lastIndex=r.lastIndex,o=Mp.call(s,i),r.lastIndex=s.lastIndex,o;var p=n.groups,g=tS&&r.sticky,I=FW.call(r),E=r.source,O=0,D=i;if(g&&(I=I.replace("y",""),I.indexOf("g")===-1&&(I+="g"),D=i.slice(r.lastIndex),r.lastIndex>0&&(!r.multiline||r.multiline&&i.charAt(r.lastIndex-1)!==`
`)&&(E="(?: "+E+")",D=" "+D,O++),a=new RegExp("^(?:"+E+")",I)),Up&&(a=new RegExp("^"+E+"$(?!\\s)",I)),Fp&&(c=r.lastIndex),u=Ru.call(g?a:r,D),g?u?(u.input=u.input.slice(O),u[0]=u[0].slice(O),u.index=r.lastIndex,r.lastIndex+=u[0].length):r.lastIndex=0:Fp&&u&&(r.lastIndex=r.global?u.index+u[0].length:c),Up&&u&&u.length>1&&zW.call(u[0],a,function(){for(l=1;l<arguments.length-2;l++)arguments[l]===void 0&&(u[l]=void 0)}),u&&p)for(u.groups=h=jW(null),l=0;l<p.length;l++)f=p[l],h[f[0]]=u[f[1]];return u});var jp=Mp,GW=Br,rS=jp;GW({target:"RegExp",proto:!0,forced:/./.exec!==rS},{exec:rS});var nS=ln.exports,KW=jp,iS=Xe,sS=Ot,HW=Jn,YW=sS("species"),Bp=RegExp.prototype,oS=function(t,e,r,n){var i=sS(t),s=!iS(function(){var u={};return u[i]=function(){return 7},""[t](u)!=7}),o=s&&!iS(function(){var u=!1,l=/a/;return t==="split"&&(l={},l.constructor={},l.constructor[YW]=function(){return l},l.flags="",l[i]=/./[i]),l.exec=function(){return u=!0,null},l[i](""),!u});if(!s||!o||r){var a=/./[i],c=e(i,""[t],function(u,l,h,f,p){var g=l.exec;return g===KW||g===Bp.exec?s&&!p?{done:!0,value:a.call(l,h,f)}:{done:!0,value:u.call(h,l,f)}:{done:!1}});nS(String.prototype,t,c[0]),nS(Bp,i,c[1])}n&&HW(Bp[i],"sham",!0)},XW=FE.charAt,aS=function(t,e,r){return e+(r?XW(t,e).length:1)},QW=zt,JW=Qe,ZW=Do,eG=jp,cS=function(t,e){var r=t.exec;if(JW(r)){var n=r.call(t,e);return n!==null&&QW(n),n}if(ZW(t)==="RegExp")return eG.call(t,e);throw TypeError("RegExp#exec called on incompatible receiver")},tG=oS,rG=zt,nG=us,Vp=ti,iG=ss,sG=Fo,oG=aS,uS=cS;tG("match",function(t,e,r){return[function(i){var s=iG(this),o=i==null?void 0:sG(i,t);return o?o.call(i,s):new RegExp(i)[t](Vp(s))},function(n){var i=rG(this),s=Vp(n),o=r(e,i,s);if(o.done)return o.value;if(!i.global)return uS(i,s);var a=i.unicode;i.lastIndex=0;for(var c=[],u=0,l;(l=uS(i,s))!==null;){var h=Vp(l[0]);c[u]=h,h===""&&(i.lastIndex=oG(s,nG(i.lastIndex),a)),u++}return u===0?null:c}]});var aG=os,cG=Math.floor,uG="".replace,lG=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,hG=/\$([$&'`]|\d{1,2})/g,fG=function(t,e,r,n,i,s){var o=r+t.length,a=n.length,c=hG;return i!==void 0&&(i=aG(i),c=lG),uG.call(s,c,function(u,l){var h;switch(l.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(o);case"<":h=i[l.slice(1,-1)];break;default:var f=+l;if(f===0)return u;if(f>a){var p=cG(f/10);return p===0?u:p<=a?n[p-1]===void 0?l.charAt(1):n[p-1]+l.charAt(1):u}h=n[f-1]}return h===void 0?"":h})},dG=oS,pG=Xe,vG=zt,gG=Qe,mG=cu,yG=us,ds=ti,wG=ss,bG=aS,_G=Fo,EG=fG,IG=cS,SG=Ot,qp=SG("replace"),TG=Math.max,AG=Math.min,OG=function(t){return t===void 0?t:String(t)},CG=function(){return"a".replace(/./,"$0")==="$0"}(),lS=function(){return/./[qp]?/./[qp]("a","$0")==="":!1}(),RG=!pG(function(){var t=/./;return t.exec=function(){var e=[];return e.groups={a:"7"},e},"".replace(t,"$<a>")!=="7"});dG("replace",function(t,e,r){var n=lS?"$":"$0";return[function(s,o){var a=wG(this),c=s==null?void 0:_G(s,qp);return c?c.call(s,a,o):e.call(ds(a),s,o)},function(i,s){var o=vG(this),a=ds(i);if(typeof s=="string"&&s.indexOf(n)===-1&&s.indexOf("$<")===-1){var c=r(e,o,a,s);if(c.done)return c.value}var u=gG(s);u||(s=ds(s));var l=o.global;if(l){var h=o.unicode;o.lastIndex=0}for(var f=[];;){var p=IG(o,a);if(p===null||(f.push(p),!l))break;var g=ds(p[0]);g===""&&(o.lastIndex=bG(a,yG(o.lastIndex),h))}for(var I="",E=0,O=0;O<f.length;O++){p=f[O];for(var D=ds(p[0]),q=TG(AG(mG(p.index),a.length),0),G=[],k=1;k<p.length;k++)G.push(OG(p[k]));var N=p.groups;if(u){var b=[D].concat(G,q,a);N!==void 0&&b.push(N);var R=ds(s.apply(void 0,b))}else R=EG(D,a,q,G,N,s);q>=E&&(I+=a.slice(E,q)+R,E=q+D.length)}return I+a.slice(E)}]},!RG||!CG||lS);var xu=function(e){var r=Array.prototype.reduce.call(e,function(n,i){var s=i.name.match(/data-simplebar-(.+)/);if(s){var o=s[1].replace(/\W+(.)/g,function(a,c){return c.toUpperCase()});switch(i.value){case"true":n[o]=!0;break;case"false":n[o]=!1;break;case void 0:n[o]=!0;break;default:n[o]=i.value}}return n},{});return r};function fn(t){return!t||!t.ownerDocument||!t.ownerDocument.defaultView?window:t.ownerDocument.defaultView}function Nu(t){return!t||!t.ownerDocument?document:t.ownerDocument}var ps=null,hS=null;ep&&window.addEventListener("resize",function(){hS!==window.devicePixelRatio&&(hS=window.devicePixelRatio,ps=null)});function fS(t){if(ps===null){var e=Nu(t);if(typeof e=="undefined")return ps=0,ps;var r=e.body,n=e.createElement("div");n.classList.add("simplebar-hide-scrollbar"),r.appendChild(n);var i=n.getBoundingClientRect().right;r.removeChild(n),ps=i}return ps}var Ue=function(){function t(r,n){var i=this;this.onScroll=function(){var s=fn(i.el);i.scrollXTicking||(s.requestAnimationFrame(i.scrollX),i.scrollXTicking=!0),i.scrollYTicking||(s.requestAnimationFrame(i.scrollY),i.scrollYTicking=!0)},this.scrollX=function(){i.axis.x.isOverflowing&&(i.showScrollbar("x"),i.positionScrollbar("x")),i.scrollXTicking=!1},this.scrollY=function(){i.axis.y.isOverflowing&&(i.showScrollbar("y"),i.positionScrollbar("y")),i.scrollYTicking=!1},this.onMouseEnter=function(){i.showScrollbar("x"),i.showScrollbar("y")},this.onMouseMove=function(s){i.mouseX=s.clientX,i.mouseY=s.clientY,(i.axis.x.isOverflowing||i.axis.x.forceVisible)&&i.onMouseMoveForAxis("x"),(i.axis.y.isOverflowing||i.axis.y.forceVisible)&&i.onMouseMoveForAxis("y")},this.onMouseLeave=function(){i.onMouseMove.cancel(),(i.axis.x.isOverflowing||i.axis.x.forceVisible)&&i.onMouseLeaveForAxis("x"),(i.axis.y.isOverflowing||i.axis.y.forceVisible)&&i.onMouseLeaveForAxis("y"),i.mouseX=-1,i.mouseY=-1},this.onWindowResize=function(){i.scrollbarWidth=i.getScrollbarWidth(),i.hideNativeScrollbar()},this.hideScrollbars=function(){i.axis.x.track.rect=i.axis.x.track.el.getBoundingClientRect(),i.axis.y.track.rect=i.axis.y.track.el.getBoundingClientRect(),i.isWithinBounds(i.axis.y.track.rect)||(i.axis.y.scrollbar.el.classList.remove(i.classNames.visible),i.axis.y.isVisible=!1),i.isWithinBounds(i.axis.x.track.rect)||(i.axis.x.scrollbar.el.classList.remove(i.classNames.visible),i.axis.x.isVisible=!1)},this.onPointerEvent=function(s){var o,a;i.axis.x.track.rect=i.axis.x.track.el.getBoundingClientRect(),i.axis.y.track.rect=i.axis.y.track.el.getBoundingClientRect(),(i.axis.x.isOverflowing||i.axis.x.forceVisible)&&(o=i.isWithinBounds(i.axis.x.track.rect)),(i.axis.y.isOverflowing||i.axis.y.forceVisible)&&(a=i.isWithinBounds(i.axis.y.track.rect)),(o||a)&&(s.preventDefault(),s.stopPropagation(),s.type==="mousedown"&&(o&&(i.axis.x.scrollbar.rect=i.axis.x.scrollbar.el.getBoundingClientRect(),i.isWithinBounds(i.axis.x.scrollbar.rect)?i.onDragStart(s,"x"):i.onTrackClick(s,"x")),a&&(i.axis.y.scrollbar.rect=i.axis.y.scrollbar.el.getBoundingClientRect(),i.isWithinBounds(i.axis.y.scrollbar.rect)?i.onDragStart(s,"y"):i.onTrackClick(s,"y"))))},this.drag=function(s){var o,a=i.axis[i.draggedAxis].track,c=a.rect[i.axis[i.draggedAxis].sizeAttr],u=i.axis[i.draggedAxis].scrollbar,l=i.contentWrapperEl[i.axis[i.draggedAxis].scrollSizeAttr],h=parseInt(i.elStyles[i.axis[i.draggedAxis].sizeAttr],10);s.preventDefault(),s.stopPropagation(),i.draggedAxis==="y"?o=s.pageY:o=s.pageX;var f=o-a.rect[i.axis[i.draggedAxis].offsetAttr]-i.axis[i.draggedAxis].dragOffset,p=f/(c-u.size),g=p*(l-h);i.draggedAxis==="x"&&(g=i.isRtl&&t.getRtlHelpers().isRtlScrollbarInverted?g-(c+u.size):g,g=i.isRtl&&t.getRtlHelpers().isRtlScrollingInverted?-g:g),i.contentWrapperEl[i.axis[i.draggedAxis].scrollOffsetAttr]=g},this.onEndDrag=function(s){var o=Nu(i.el),a=fn(i.el);s.preventDefault(),s.stopPropagation(),i.el.classList.remove(i.classNames.dragging),o.removeEventListener("mousemove",i.drag,!0),o.removeEventListener("mouseup",i.onEndDrag,!0),i.removePreventClickId=a.setTimeout(function(){o.removeEventListener("click",i.preventClick,!0),o.removeEventListener("dblclick",i.preventClick,!0),i.removePreventClickId=null})},this.preventClick=function(s){s.preventDefault(),s.stopPropagation()},this.el=r,this.minScrollbarWidth=20,this.options=Object.assign({},t.defaultOptions,{},n),this.classNames=Object.assign({},t.defaultOptions.classNames,{},this.options.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}}},this.removePreventClickId=null,!t.instances.has(this.el)&&(this.recalculate=II(this.recalculate.bind(this),64),this.onMouseMove=II(this.onMouseMove.bind(this),64),this.hideScrollbars=AI(this.hideScrollbars.bind(this),this.options.timeout),this.onWindowResize=AI(this.onWindowResize.bind(this),64,{leading:!0}),t.getRtlHelpers=Fz(t.getRtlHelpers),this.init())}t.getRtlHelpers=function(){var n=document.createElement("div");n.innerHTML='<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';var i=n.firstElementChild;document.body.appendChild(i);var s=i.firstElementChild;i.scrollLeft=0;var o=t.getOffset(i),a=t.getOffset(s);i.scrollLeft=999;var c=t.getOffset(s);return{isRtlScrollingInverted:o.left!==a.left&&a.left-c.left!=0,isRtlScrollbarInverted:o.left!==a.left}},t.getOffset=function(n){var i=n.getBoundingClientRect(),s=Nu(n),o=fn(n);return{top:i.top+(o.pageYOffset||s.documentElement.scrollTop),left:i.left+(o.pageXOffset||s.documentElement.scrollLeft)}};var e=t.prototype;return e.init=function(){t.instances.set(this.el,this),ep&&(this.initDOM(),this.setAccessibilityAttributes(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},e.initDOM=function(){var n=this;if(Array.prototype.filter.call(this.el.children,function(o){return o.classList.contains(n.classNames.wrapper)}).length)this.wrapperEl=this.el.querySelector("."+this.classNames.wrapper),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector("."+this.classNames.contentWrapper),this.contentEl=this.options.contentNode||this.el.querySelector("."+this.classNames.contentEl),this.offsetEl=this.el.querySelector("."+this.classNames.offset),this.maskEl=this.el.querySelector("."+this.classNames.mask),this.placeholderEl=this.findChild(this.wrapperEl,"."+this.classNames.placeholder),this.heightAutoObserverWrapperEl=this.el.querySelector("."+this.classNames.heightAutoObserverWrapperEl),this.heightAutoObserverEl=this.el.querySelector("."+this.classNames.heightAutoObserverEl),this.axis.x.track.el=this.findChild(this.el,"."+this.classNames.track+"."+this.classNames.horizontal),this.axis.y.track.el=this.findChild(this.el,"."+this.classNames.track+"."+this.classNames.vertical);else{for(this.wrapperEl=document.createElement("div"),this.contentWrapperEl=document.createElement("div"),this.offsetEl=document.createElement("div"),this.maskEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.placeholderEl=document.createElement("div"),this.heightAutoObserverWrapperEl=document.createElement("div"),this.heightAutoObserverEl=document.createElement("div"),this.wrapperEl.classList.add(this.classNames.wrapper),this.contentWrapperEl.classList.add(this.classNames.contentWrapper),this.offsetEl.classList.add(this.classNames.offset),this.maskEl.classList.add(this.classNames.mask),this.contentEl.classList.add(this.classNames.contentEl),this.placeholderEl.classList.add(this.classNames.placeholder),this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl),this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.contentWrapperEl.appendChild(this.contentEl),this.offsetEl.appendChild(this.contentWrapperEl),this.maskEl.appendChild(this.offsetEl),this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),this.wrapperEl.appendChild(this.maskEl),this.wrapperEl.appendChild(this.placeholderEl),this.el.appendChild(this.wrapperEl)}if(!this.axis.x.track.el||!this.axis.y.track.el){var i=document.createElement("div"),s=document.createElement("div");i.classList.add(this.classNames.track),s.classList.add(this.classNames.scrollbar),i.appendChild(s),this.axis.x.track.el=i.cloneNode(!0),this.axis.x.track.el.classList.add(this.classNames.horizontal),this.axis.y.track.el=i.cloneNode(!0),this.axis.y.track.el.classList.add(this.classNames.vertical),this.el.appendChild(this.axis.x.track.el),this.el.appendChild(this.axis.y.track.el)}this.axis.x.scrollbar.el=this.axis.x.track.el.querySelector("."+this.classNames.scrollbar),this.axis.y.scrollbar.el=this.axis.y.track.el.querySelector("."+this.classNames.scrollbar),this.options.autoHide||(this.axis.x.scrollbar.el.classList.add(this.classNames.visible),this.axis.y.scrollbar.el.classList.add(this.classNames.visible)),this.el.setAttribute("data-simplebar","init")},e.setAccessibilityAttributes=function(){var n=this.options.ariaLabel||"scrollable content";this.contentWrapperEl.setAttribute("tabindex","0"),this.contentWrapperEl.setAttribute("role","region"),this.contentWrapperEl.setAttribute("aria-label",n)},e.initListeners=function(){var n=this,i=fn(this.el);this.options.autoHide&&this.el.addEventListener("mouseenter",this.onMouseEnter),["mousedown","click","dblclick"].forEach(function(a){n.el.addEventListener(a,n.onPointerEvent,!0)}),["touchstart","touchend","touchmove"].forEach(function(a){n.el.addEventListener(a,n.onPointerEvent,{capture:!0,passive:!0})}),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl.addEventListener("scroll",this.onScroll),i.addEventListener("resize",this.onWindowResize);var s=!1,o=i.ResizeObserver||sW;this.resizeObserver=new o(function(){!s||n.recalculate()}),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),i.requestAnimationFrame(function(){s=!0}),this.mutationObserver=new i.MutationObserver(this.recalculate),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})},e.recalculate=function(){var n=fn(this.el);this.elStyles=n.getComputedStyle(this.el),this.isRtl=this.elStyles.direction==="rtl";var i=this.heightAutoObserverEl.offsetHeight<=1,s=this.heightAutoObserverEl.offsetWidth<=1,o=this.contentEl.offsetWidth,a=this.contentWrapperEl.offsetWidth,c=this.elStyles.overflowX,u=this.elStyles.overflowY;this.contentEl.style.padding=this.elStyles.paddingTop+" "+this.elStyles.paddingRight+" "+this.elStyles.paddingBottom+" "+this.elStyles.paddingLeft,this.wrapperEl.style.margin="-"+this.elStyles.paddingTop+" -"+this.elStyles.paddingRight+" -"+this.elStyles.paddingBottom+" -"+this.elStyles.paddingLeft;var l=this.contentEl.scrollHeight,h=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=i?"auto":"100%",this.placeholderEl.style.width=s?o+"px":"auto",this.placeholderEl.style.height=l+"px";var f=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=h>o,this.axis.y.isOverflowing=l>f,this.axis.x.isOverflowing=c==="hidden"?!1:this.axis.x.isOverflowing,this.axis.y.isOverflowing=u==="hidden"?!1:this.axis.y.isOverflowing,this.axis.x.forceVisible=this.options.forceVisible==="x"||this.options.forceVisible===!0,this.axis.y.forceVisible=this.options.forceVisible==="y"||this.options.forceVisible===!0,this.hideNativeScrollbar();var p=this.axis.x.isOverflowing?this.scrollbarWidth:0,g=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&h>a-g,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&l>f-p,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el.style.width=this.axis.x.scrollbar.size+"px",this.axis.y.scrollbar.el.style.height=this.axis.y.scrollbar.size+"px",this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")},e.getScrollbarSize=function(n){if(n===void 0&&(n="y"),!this.axis[n].isOverflowing)return 0;var i=this.contentEl[this.axis[n].scrollSizeAttr],s=this.axis[n].track.el[this.axis[n].offsetSizeAttr],o,a=s/i;return o=Math.max(~~(a*s),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(o=Math.min(o,this.options.scrollbarMaxSize)),o},e.positionScrollbar=function(n){if(n===void 0&&(n="y"),!!this.axis[n].isOverflowing){var i=this.contentWrapperEl[this.axis[n].scrollSizeAttr],s=this.axis[n].track.el[this.axis[n].offsetSizeAttr],o=parseInt(this.elStyles[this.axis[n].sizeAttr],10),a=this.axis[n].scrollbar,c=this.contentWrapperEl[this.axis[n].scrollOffsetAttr];c=n==="x"&&this.isRtl&&t.getRtlHelpers().isRtlScrollingInverted?-c:c;var u=c/(i-o),l=~~((s-a.size)*u);l=n==="x"&&this.isRtl&&t.getRtlHelpers().isRtlScrollbarInverted?l+(s-a.size):l,a.el.style.transform=n==="x"?"translate3d("+l+"px, 0, 0)":"translate3d(0, "+l+"px, 0)"}},e.toggleTrackVisibility=function(n){n===void 0&&(n="y");var i=this.axis[n].track.el,s=this.axis[n].scrollbar.el;this.axis[n].isOverflowing||this.axis[n].forceVisible?(i.style.visibility="visible",this.contentWrapperEl.style[this.axis[n].overflowAttr]="scroll"):(i.style.visibility="hidden",this.contentWrapperEl.style[this.axis[n].overflowAttr]="hidden"),this.axis[n].isOverflowing?s.style.display="block":s.style.display="none"},e.hideNativeScrollbar=function(){this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-"+this.scrollbarWidth+"px":0,this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-"+this.scrollbarWidth+"px":0},e.onMouseMoveForAxis=function(n){n===void 0&&(n="y"),this.axis[n].track.rect=this.axis[n].track.el.getBoundingClientRect(),this.axis[n].scrollbar.rect=this.axis[n].scrollbar.el.getBoundingClientRect();var i=this.isWithinBounds(this.axis[n].scrollbar.rect);i?this.axis[n].scrollbar.el.classList.add(this.classNames.hover):this.axis[n].scrollbar.el.classList.remove(this.classNames.hover),this.isWithinBounds(this.axis[n].track.rect)?(this.showScrollbar(n),this.axis[n].track.el.classList.add(this.classNames.hover)):this.axis[n].track.el.classList.remove(this.classNames.hover)},e.onMouseLeaveForAxis=function(n){n===void 0&&(n="y"),this.axis[n].track.el.classList.remove(this.classNames.hover),this.axis[n].scrollbar.el.classList.remove(this.classNames.hover)},e.showScrollbar=function(n){n===void 0&&(n="y");var i=this.axis[n].scrollbar.el;this.axis[n].isVisible||(i.classList.add(this.classNames.visible),this.axis[n].isVisible=!0),this.options.autoHide&&this.hideScrollbars()},e.onDragStart=function(n,i){i===void 0&&(i="y");var s=Nu(this.el),o=fn(this.el),a=this.axis[i].scrollbar,c=i==="y"?n.pageY:n.pageX;this.axis[i].dragOffset=c-a.rect[this.axis[i].offsetAttr],this.draggedAxis=i,this.el.classList.add(this.classNames.dragging),s.addEventListener("mousemove",this.drag,!0),s.addEventListener("mouseup",this.onEndDrag,!0),this.removePreventClickId===null?(s.addEventListener("click",this.preventClick,!0),s.addEventListener("dblclick",this.preventClick,!0)):(o.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},e.onTrackClick=function(n,i){var s=this;if(i===void 0&&(i="y"),!!this.options.clickOnTrack){var o=fn(this.el);this.axis[i].scrollbar.rect=this.axis[i].scrollbar.el.getBoundingClientRect();var a=this.axis[i].scrollbar,c=a.rect[this.axis[i].offsetAttr],u=parseInt(this.elStyles[this.axis[i].sizeAttr],10),l=this.contentWrapperEl[this.axis[i].scrollOffsetAttr],h=i==="y"?this.mouseY-c:this.mouseX-c,f=h<0?-1:1,p=f===-1?l-u:l+u,g=function I(){if(f===-1){if(l>p){var E;l-=s.options.clickOnTrackSpeed,s.contentWrapperEl.scrollTo((E={},E[s.axis[i].offsetAttr]=l,E)),o.requestAnimationFrame(I)}}else if(l<p){var O;l+=s.options.clickOnTrackSpeed,s.contentWrapperEl.scrollTo((O={},O[s.axis[i].offsetAttr]=l,O)),o.requestAnimationFrame(I)}};g()}},e.getContentElement=function(){return this.contentEl},e.getScrollElement=function(){return this.contentWrapperEl},e.getScrollbarWidth=function(){try{return getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display==="none"||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:fS(this.el)}catch(n){return fS(this.el)}},e.removeListeners=function(){var n=this,i=fn(this.el);this.options.autoHide&&this.el.removeEventListener("mouseenter",this.onMouseEnter),["mousedown","click","dblclick"].forEach(function(s){n.el.removeEventListener(s,n.onPointerEvent,!0)}),["touchstart","touchend","touchmove"].forEach(function(s){n.el.removeEventListener(s,n.onPointerEvent,{capture:!0,passive:!0})}),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),i.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),this.recalculate.cancel(),this.onMouseMove.cancel(),this.hideScrollbars.cancel(),this.onWindowResize.cancel()},e.unMount=function(){this.removeListeners(),t.instances.delete(this.el)},e.isWithinBounds=function(n){return this.mouseX>=n.left&&this.mouseX<=n.left+n.width&&this.mouseY>=n.top&&this.mouseY<=n.top+n.height},e.findChild=function(n,i){var s=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector;return Array.prototype.filter.call(n.children,function(o){return s.call(o,i)})[0]},t}();Ue.defaultOptions={autoHide:!0,forceVisible:!1,clickOnTrack:!0,clickOnTrackSpeed:40,classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging"},scrollbarMinSize:25,scrollbarMaxSize:0,timeout:1e3};Ue.instances=new WeakMap;Ue.initDOMLoadedElements=function(){document.removeEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.removeEventListener("load",this.initDOMLoadedElements),Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"),function(t){t.getAttribute("data-simplebar")!=="init"&&!Ue.instances.has(t)&&new Ue(t,xu(t.attributes))})};Ue.removeObserver=function(){this.globalObserver.disconnect()};Ue.initHtmlApi=function(){this.initDOMLoadedElements=this.initDOMLoadedElements.bind(this),typeof MutationObserver!="undefined"&&(this.globalObserver=new MutationObserver(Ue.handleMutations),this.globalObserver.observe(document,{childList:!0,subtree:!0})),document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll?window.setTimeout(this.initDOMLoadedElements):(document.addEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.addEventListener("load",this.initDOMLoadedElements))};Ue.handleMutations=function(t){t.forEach(function(e){Array.prototype.forEach.call(e.addedNodes,function(r){r.nodeType===1&&(r.hasAttribute("data-simplebar")?!Ue.instances.has(r)&&document.documentElement.contains(r)&&new Ue(r,xu(r.attributes)):Array.prototype.forEach.call(r.querySelectorAll("[data-simplebar]"),function(n){n.getAttribute("data-simplebar")!=="init"&&!Ue.instances.has(n)&&document.documentElement.contains(n)&&new Ue(n,xu(n.attributes))}))}),Array.prototype.forEach.call(e.removedNodes,function(r){r.nodeType===1&&(r.getAttribute("data-simplebar")==="init"?Ue.instances.has(r)&&!document.documentElement.contains(r)&&Ue.instances.get(r).unMount():Array.prototype.forEach.call(r.querySelectorAll('[data-simplebar="init"]'),function(n){Ue.instances.has(n)&&!document.documentElement.contains(n)&&Ue.instances.get(n).unMount()}))})})};Ue.getOptions=xu;ep&&Ue.initHtmlApi();var xG={name:"simplebar-vue",mounted:function(){var e=Ue.getOptions(this.$refs.element.attributes);this.SimpleBar=new Ue(this.$refs.element,e)},computed:{scrollElement:function(){return this.$refs.scrollElement},contentElement:function(){return this.$refs.contentElement}}},NG=xG,dS=function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",{ref:"element"},[n("div",{staticClass:"simplebar-wrapper"},[e._m(0),e._v(" "),n("div",{staticClass:"simplebar-mask"},[n("div",{staticClass:"simplebar-offset"},[n("div",e._g({ref:"scrollElement",staticClass:"simplebar-content-wrapper"},Object.assign({},e.$listeners.scroll&&{scroll:e.$listeners.scroll})),[n("div",{ref:"contentElement",staticClass:"simplebar-content"},[e._t("default")],2)])])]),e._v(" "),n("div",{staticClass:"simplebar-placeholder"})]),e._v(" "),e._m(1),e._v(" "),e._m(2)])},kG=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"simplebar-height-auto-observer-wrapper"},[r("div",{staticClass:"simplebar-height-auto-observer"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"simplebar-track simplebar-horizontal"},[r("div",{staticClass:"simplebar-scrollbar"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"simplebar-track simplebar-vertical"},[r("div",{staticClass:"simplebar-scrollbar"})])}];dS._withStripped=!0;var PG=void 0,$G=void 0,DG=!1;function LG(t,e,r,n,i,s,o,a){var c=(typeof r=="function"?r.options:r)||{};return c.__file="/Users/adriendenat/Sites/simplebar/packages/simplebar-vue/index.vue",c.render||(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,i&&(c.functional=!0)),c._scopeId=n,c}var O5=LG({render:dS,staticRenderFns:kG},PG,NG,$G,DG);/**
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
 */const pS=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);i<128?e[r++]=i:i<2048?(e[r++]=i>>6|192,e[r++]=i&63|128):(i&64512)==55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++n)&1023),e[r++]=i>>18|240,e[r++]=i>>12&63|128,e[r++]=i>>6&63|128,e[r++]=i&63|128):(e[r++]=i>>12|224,e[r++]=i>>6&63|128,e[r++]=i&63|128)}return e},MG=function(t){const e=[];let r=0,n=0;for(;r<t.length;){const i=t[r++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[r++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[r++],o=t[r++],a=t[r++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const s=t[r++],o=t[r++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},vS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(f=64)),n.push(r[l],r[h],r[f],r[p])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):MG(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<t.length;){const s=r[t.charAt(i++)],a=i<t.length?r[t.charAt(i)]:0;++i;const u=i<t.length?r[t.charAt(i)]:64;++i;const h=i<t.length?r[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const f=s<<2|a>>4;if(n.push(f),u!==64){const p=a<<4&240|u>>2;if(n.push(p),h!==64){const g=u<<6&192|h;n.push(g)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},FG=function(t){const e=pS(t);return vS.encodeByteArray(e,!0)},gS=function(t){return FG(t).replace(/\./g,"")},UG=function(t){try{return vS.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function ku(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const r=e;return new Date(r.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const r in e)!e.hasOwnProperty(r)||!jG(r)||(t[r]=ku(t[r],e[r]));return t}function jG(t){return t!=="__proto__"}/**
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
 */class BG{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,n))}}}/**
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
 */function VG(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},n=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[gS(JSON.stringify(r)),gS(JSON.stringify(o)),a].join(".")}/**
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
 */function Oe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mS(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe())}function zp(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch(t){return!1}}function qG(){return typeof self=="object"&&self.self===self}function Wp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Pu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zG(){return Oe().indexOf("Electron/")>=0}function Gp(){const t=Oe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function WG(){return Oe().indexOf("MSAppHost/")>=0}function GG(){return!zp()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $u(){return typeof indexedDB=="object"}/**
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
 */const KG="FirebaseError";class tr extends Error{constructor(e,r,n){super(r);this.code=e,this.customData=n,this.name=KG,Object.setPrototypeOf(this,tr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oi.prototype.create)}}class oi{constructor(e,r,n){this.service=e,this.serviceName=r,this.errors=n}create(e,...r){const n=r[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?HG(s,n):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new tr(i,a,n)}}function HG(t,e){return t.replace(YG,(r,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const YG=/\{\$([^}]+)}/g;/**
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
 */function yS(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function XG(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Kp(t,e){if(t===e)return!0;const r=Object.keys(t),n=Object.keys(e);for(const i of r){if(!n.includes(i))return!1;const s=t[i],o=e[i];if(wS(s)&&wS(o)){if(!Kp(s,o))return!1}else if(s!==o)return!1}for(const i of n)if(!r.includes(i))return!1;return!0}function wS(t){return t!==null&&typeof t=="object"}/**
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
 */function vs(t){const e=[];for(const[r,n]of Object.entries(t))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function gs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,s]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ta(t){const e=t.indexOf("?");if(!e)return"";const r=t.indexOf("#",e);return t.substring(e,r>0?r:void 0)}function bS(t,e){const r=new QG(t,e);return r.subscribe.bind(r)}class QG{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,n){let i;if(e===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");JG(e,["next","error","complete"])?i=e:i={next:e,error:r,complete:n},i.next===void 0&&(i.next=Hp),i.error===void 0&&(i.error=Hp),i.complete===void 0&&(i.complete=Hp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(o){}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(n){typeof console!="undefined"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function JG(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function Hp(){}/**
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
 */function re(t){return t&&t._delegate?t._delegate:t}/*! *****************************************************************************
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
***************************************************************************** */function Yp(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r}function ZG(t,e,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function a(l){try{u(n.next(l))}catch(h){o(h)}}function c(l){try{u(n.throw(l))}catch(h){o(h)}}function u(l){l.done?s(l.value):i(l.value).then(a,c)}u((n=n.apply(t,e||[])).next())})}function e2(t,e){var r={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},n,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(l){return c([u,l])}}function c(u){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return r.label++,{value:u[1],done:!1};case 5:r.label++,i=u[1],u=[0];continue;case 7:u=r.ops.pop(),r.trys.pop();continue;default:if(s=r.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){r=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){r.label=u[1];break}if(u[0]===6&&r.label<s[1]){r.label=s[1],s=u;break}if(s&&r.label<s[2]){r.label=s[2],r.ops.push(u);break}s[2]&&r.ops.pop(),r.trys.pop();continue}u=e.call(t,r)}catch(l){u=[6,l],i=0}finally{n=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function Xp(t){var e=typeof Symbol=="function"&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Du(t,e){var r=typeof Symbol=="function"&&t[Symbol.iterator];if(!r)return t;var n=r.call(t),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=n.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(o)throw o.error}}return s}function _S(t,e,r){if(r||arguments.length===2)for(var n=0,i=e.length,s;n<i;n++)(s||!(n in e))&&(s||(s=Array.prototype.slice.call(e,0,n)),s[n]=e[n]);return t.concat(s||Array.prototype.slice.call(e))}var qr=function(){function t(e,r,n){this.name=e,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},t.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},t.prototype.setServiceProps=function(e){return this.serviceProps=e,this},t.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},t}();/**
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
 */var ai="[DEFAULT]";/**
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
 */var t2=function(){function t(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(e){var r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){var n=new BG;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{var i=this.getOrInitializeService({instanceIdentifier:r});i&&n.resolve(i)}catch(s){}}return this.instancesDeferred.get(r).promise},t.prototype.getImmediate=function(e){var r,n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error("Service "+this.name+" is not available")}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(e){var r,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,!!this.shouldAutoInitialize()){if(n2(e))try{this.getOrInitializeService({instanceIdentifier:ai})}catch(h){}try{for(var i=Xp(this.instancesDeferred.entries()),s=i.next();!s.done;s=i.next()){var o=Du(s.value,2),a=o[0],c=o[1],u=this.normalizeInstanceIdentifier(a);try{var l=this.getOrInitializeService({instanceIdentifier:u});c.resolve(l)}catch(h){}}}catch(h){r={error:h}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}}},t.prototype.clearInstance=function(e){e===void 0&&(e=ai),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},t.prototype.delete=function(){return ZG(this,void 0,void 0,function(){var e;return e2(this,function(r){switch(r.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(_S(_S([],Du(e.filter(function(n){return"INTERNAL"in n}).map(function(n){return n.INTERNAL.delete()}))),Du(e.filter(function(n){return"_delete"in n}).map(function(n){return n._delete()}))))];case 1:return r.sent(),[2]}})})},t.prototype.isComponentSet=function(){return this.component!=null},t.prototype.isInitialized=function(e){return e===void 0&&(e=ai),this.instances.has(e)},t.prototype.getOptions=function(e){return e===void 0&&(e=ai),this.instancesOptions.get(e)||{}},t.prototype.initialize=function(e){var r,n;e===void 0&&(e={});var i=e.options,s=i===void 0?{}:i,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:s});try{for(var c=Xp(this.instancesDeferred.entries()),u=c.next();!u.done;u=c.next()){var l=Du(u.value,2),h=l[0],f=l[1],p=this.normalizeInstanceIdentifier(h);o===p&&f.resolve(a)}}catch(g){r={error:g}}finally{try{u&&!u.done&&(n=c.return)&&n.call(c)}finally{if(r)throw r.error}}return a},t.prototype.onInit=function(e,r){var n,i=this.normalizeInstanceIdentifier(r),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);var o=this.instances.get(i);return o&&e(o,i),function(){s.delete(e)}},t.prototype.invokeOnInitCallbacks=function(e,r){var n,i,s=this.onInitCallbacks.get(r);if(!!s)try{for(var o=Xp(s),a=o.next();!a.done;a=o.next()){var c=a.value;try{c(e,r)}catch(u){}}}catch(u){n={error:u}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}},t.prototype.getOrInitializeService=function(e){var r=e.instanceIdentifier,n=e.options,i=n===void 0?{}:n,s=this.instances.get(r);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:r2(r),options:i}),this.instances.set(r,s),this.instancesOptions.set(r,i),this.invokeOnInitCallbacks(s,r),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,r,s)}catch(o){}return s||null},t.prototype.normalizeInstanceIdentifier=function(e){return e===void 0&&(e=ai),this.component?this.component.multipleInstances?e:ai:e},t.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},t}();function r2(t){return t===ai?void 0:t}function n2(t){return t.instantiationMode==="EAGER"}/**
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
 */var i2=function(){function t(e){this.name=e,this.providers=new Map}return t.prototype.addComponent=function(e){var r=this.getProvider(e.name);if(r.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);r.setComponent(e)},t.prototype.addOrOverwriteComponent=function(e){var r=this.getProvider(e.name);r.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},t.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var r=new t2(e,this);return this.providers.set(e,r),r},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();/**
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
 */const Qp=[];var be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(be||(be={}));const ES={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},s2=be.INFO,o2={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},a2=(t,e,...r)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),i=o2[e];if(i)console[i](`[${n}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lu{constructor(e){this.name=e,this._logLevel=s2,this._logHandler=a2,this._userLogHandler=null,Qp.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ES[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}function c2(t){Qp.forEach(e=>{e.setLogLevel(t)})}function u2(t,e){for(const r of Qp){let n=null;e&&e.level&&(n=ES[e.level]),t===null?r.userLogHandler=null:r.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch(u){return null}}).filter(c=>c).join(" ");s>=(n!=null?n:i.logLevel)&&t({level:be[s].toLowerCase(),message:a,args:o,type:i.name})}}}/**
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
 */class l2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(h2(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function h2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const IS="@firebase/app",f2="0.7.2";/**
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
 */const Jp=new Lu("@firebase/app"),d2="@firebase/app-compat",p2="@firebase/analytics-compat",v2="@firebase/analytics",g2="@firebase/app-check-compat",m2="@firebase/app-check",y2="@firebase/auth",w2="@firebase/auth-compat",b2="@firebase/database",_2="@firebase/database-compat",E2="@firebase/functions",I2="@firebase/functions-compat",S2="@firebase/installations",T2="@firebase/installations-compat",A2="@firebase/messaging",O2="@firebase/messaging-compat",C2="@firebase/performance",R2="@firebase/performance-compat",x2="@firebase/remote-config",N2="@firebase/remote-config-compat",k2="@firebase/storage",P2="@firebase/storage-compat",$2="@firebase/firestore",D2="@firebase/firestore-compat",L2="firebase",M2="9.1.1";/**
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
 */const ci="[DEFAULT]",F2={[IS]:"fire-core",[d2]:"fire-core-compat",[v2]:"fire-analytics",[p2]:"fire-analytics-compat",[m2]:"fire-app-check",[g2]:"fire-app-check-compat",[y2]:"fire-auth",[w2]:"fire-auth-compat",[b2]:"fire-rtdb",[_2]:"fire-rtdb-compat",[E2]:"fire-fn",[I2]:"fire-fn-compat",[S2]:"fire-iid",[T2]:"fire-iid-compat",[A2]:"fire-fcm",[O2]:"fire-fcm-compat",[C2]:"fire-perf",[R2]:"fire-perf-compat",[x2]:"fire-rc",[N2]:"fire-rc-compat",[k2]:"fire-gcs",[P2]:"fire-gcs-compat",[$2]:"fire-fst",[D2]:"fire-fst-compat","fire-js":"fire-js",[L2]:"fire-js-all"};/**
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
 */const dn=new Map,ra=new Map;function Mu(t,e){try{t.container.addComponent(e)}catch(r){Jp.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function SS(t,e){t.container.addOrOverwriteComponent(e)}function ui(t){const e=t.name;if(ra.has(e))return Jp.debug(`There were multiple attempts to register component ${e}.`),!1;ra.set(e,t);for(const r of dn.values())Mu(r,t);return!0}function TS(t,e){return t.container.getProvider(e)}function U2(t,e,r=ci){TS(t,e).clearInstance(r)}function j2(){ra.clear()}/**
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
 */const B2={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},na=new oi("app","Firebase",B2);/**
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
 */class V2{constructor(e,r,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw na.create("app-deleted",{appName:this._name})}}/**
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
 */const li=M2;function AS(t,e={}){typeof e!="object"&&(e={name:e});const r=Object.assign({name:ci,automaticDataCollectionEnabled:!1},e),n=r.name;if(typeof n!="string"||!n)throw na.create("bad-app-name",{appName:String(n)});const i=dn.get(n);if(i){if(Kp(t,i.options)&&Kp(r,i.config))return i;throw na.create("duplicate-app",{appName:n})}const s=new i2(n);for(const a of ra.values())s.addComponent(a);const o=new V2(t,r,s);return dn.set(n,o),o}function q2(t=ci){const e=dn.get(t);if(!e)throw na.create("no-app",{appName:t});return e}function z2(){return Array.from(dn.values())}async function OS(t){const e=t.name;dn.has(e)&&(dn.delete(e),await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function hi(t,e,r){var n;let i=(n=F2[t])!==null&&n!==void 0?n:t;r&&(i+=`-${r}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jp.warn(a.join(" "));return}ui(new qr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function CS(t,e){if(t!==null&&typeof t!="function")throw na.create("invalid-log-argument");u2(t,e)}function RS(t){c2(t)}/**
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
 */function W2(t){ui(new qr("platform-logger",e=>new l2(e),"PRIVATE")),hi(IS,f2,t),hi("fire-js","")}W2();var G2=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",SDK_VERSION:li,_DEFAULT_ENTRY_NAME:ci,_addComponent:Mu,_addOrOverwriteComponent:SS,_apps:dn,_clearComponents:j2,_components:ra,_getProvider:TS,_registerComponent:ui,_removeServiceInstance:U2,deleteApp:OS,getApp:q2,getApps:z2,initializeApp:AS,onLog:CS,registerVersion:hi,setLogLevel:RS,FirebaseError:tr});/**
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
 */class K2{constructor(e,r){this._delegate=e,this.firebase=r,Mu(e,new qr("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),OS(this._delegate)))}_getService(e,r=ci){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((n=i.getComponent())===null||n===void 0?void 0:n.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:r})}_removeServiceInstance(e,r=ci){this._delegate.container.getProvider(e).clearInstance(r)}_addComponent(e){Mu(this._delegate,e)}_addOrOverwriteComponent(e){SS(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const H2={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},xS=new oi("app-compat","Firebase",H2);/**
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
 */function Y2(t){const e={},r={__esModule:!0,initializeApp:s,app:i,registerVersion:hi,setLogLevel:RS,onLog:CS,apps:null,SDK_VERSION:li,INTERNAL:{registerComponent:a,removeApp:n,useAsService:c,modularAPIs:G2}};r.default=r,Object.defineProperty(r,"apps",{get:o});function n(u){delete e[u]}function i(u){if(u=u||ci,!yS(e,u))throw xS.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,l={}){const h=AS(u,l);if(yS(e,h.name))return e[h.name];const f=new t(h,r);return e[h.name]=f,f}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(ui(u)&&u.type==="PUBLIC"){const f=(p=i())=>{if(typeof p[h]!="function")throw xS.create("invalid-app-argument",{appName:l});return p[h]()};u.serviceProps!==void 0&&ku(f,u.serviceProps),r[h]=f,t.prototype[h]=function(...p){return this._getService.bind(this,l).apply(this,u.multipleInstances?p:[])}}return u.type==="PUBLIC"?r[h]:null}function c(u,l){return l==="serverAuth"?null:l}return r}/**
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
 */function NS(){const t=Y2(K2);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:NS,extendNamespace:e,createSubscribe:bS,ErrorFactory:oi,deepExtend:ku});function e(r){ku(t,r)}return t}const X2=NS();/**
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
 */const kS=new Lu("@firebase/app-compat"),Q2="@firebase/app-compat",J2="0.1.3";/**
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
 */function Z2(t){hi(Q2,J2,t)}/**
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
 */if(qG()&&self.firebase!==void 0){kS.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&kS.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const ia=X2;Z2();var eK="firebase",tK="9.1.1";/**
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
 */ia.registerVersion(eK,tK,"app-compat");const sa={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},ms={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function rK(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function PS(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nK=rK,iK=PS,$S=new oi("auth","Firebase",PS());/**
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
 */const DS=new Lu("@firebase/auth");function Fu(t,...e){DS.logLevel<=be.ERROR&&DS.error(`Auth (${li}): ${t}`,...e)}/**
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
 */function lt(t,...e){throw Zp(t,...e)}function ht(t,...e){return Zp(t,...e)}function LS(t,e,r){const n=Object.assign(Object.assign({},iK()),{[e]:r});return new oi("auth","Firebase",n).create(e,{appName:t.name})}function ys(t,e,r){const n=r;if(!(e instanceof n))throw n.name!==e.constructor.name&&lt(t,"argument-error"),LS(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Zp(t,...e){if(typeof t!="string"){const r=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(r,...n)}return $S.create(t,...e)}function B(t,e,...r){if(!t)throw Zp(e,...r)}function Ar(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fu(e),new Error(e)}function fr(t,e){t||Ar(e)}/**
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
 */const MS=new Map;function Wt(t){fr(t instanceof Function,"Expected a class definition");let e=MS.get(t);return e?(fr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,MS.set(t,e),e)}function sK(t,e){const r=(e==null?void 0:e.persistence)||[],n=(Array.isArray(r)?r:[r]).map(Wt);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function oa(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ev(){return FS()==="http:"||FS()==="https:"}function FS(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function oK(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ev()||Wp()||"connection"in navigator)?navigator.onLine:!0}function aK(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class aa{constructor(e,r){this.shortDelay=e,this.longDelay=r,fr(r>e,"Short delay should be less than long delay!"),this.isMobile=mS()||Pu()}get(){return oK()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function tv(t,e){fr(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
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
 */class rv{static initialize(e,r,n){this.fetchImpl=e,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ar("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ar("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ar("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const cK={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const uK=new aa(3e4,6e4);function Je(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function tt(t,e,r,n,i={}){return US(t,i,()=>{let s={},o={};n&&(e==="GET"?o=n:s={body:JSON.stringify(n)});const a=vs(Object.assign({key:t.config.apiKey},o)).slice(1),c=new(rv.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),rv.fetch()(jS(t,t.config.apiHost,r,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function US(t,e,r){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},cK),e);try{const i=new lK(t),s=await Promise.race([r(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Uu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Uu(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Uu(t,"email-already-in-use",o);const l=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw LS(t,l,u);lt(t,l)}}catch(i){if(i instanceof tr)throw i;lt(t,"network-request-failed")}}async function zr(t,e,r,n,i={}){const s=await tt(t,e,r,n,i);return"mfaPendingCredential"in s&&lt(t,"multi-factor-auth-required",{serverResponse:s}),s}function jS(t,e,r,n){const i=`${e}${r}?${n}`;return t.config.emulator?tv(t.config,i):`${t.config.apiScheme}://${i}`}class lK{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(ht(this.auth,"timeout")),uK.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Uu(t,e,r){const n={appName:t.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=ht(t,e,n);return i.customData._tokenResponse=r,i}/**
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
 */async function hK(t,e){return tt(t,"POST","/v1/accounts:delete",e)}async function fK(t,e){return tt(t,"POST","/v1/accounts:update",e)}async function dK(t,e){return tt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ca(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}async function pK(t,e=!1){const r=re(t),n=await r.getIdToken(e),i=ju(n);B(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:ca(nv(i.auth_time)),issuedAtTime:ca(nv(i.iat)),expirationTime:ca(nv(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function nv(t){return Number(t)*1e3}function ju(t){const[e,r,n]=t.split(".");if(e===void 0||r===void 0||n===void 0)return Fu("JWT malformed, contained fewer than 3 sections"),null;try{const i=UG(r);return i?JSON.parse(i):(Fu("Failed to decode base64 JWT payload"),null)}catch(i){return Fu("Caught error parsing JWT payload as JSON",i),null}}function vK(t){const e=ju(t);return B(e,"internal-error"),B(typeof e.exp!="undefined","internal-error"),B(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wr(t,e,r=!1){if(r)return e;try{return await e}catch(n){throw n instanceof tr&&gK(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function gK({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class mK{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var r;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class BS{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=ca(this.lastLoginAt),this.creationTime=ca(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ua(t){var e;const r=t.auth,n=await t.getIdToken(),i=await Wr(t,dK(r,{idToken:n}));B(i==null?void 0:i.users.length,r,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?bK(s.providerUserInfo):[],a=wK(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new BS(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function yK(t){const e=re(t);await ua(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wK(t,e){return[...t.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function bK(t){return t.map(e=>{var{providerId:r}=e,n=Yp(e,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function _K(t,e){const r=await US(t,{},()=>{const n=vs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=jS(t,i,"/v1/token",`key=${s}`);return rv.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
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
 */class la{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken!="undefined","internal-error"),B(typeof e.refreshToken!="undefined","internal-error");const r="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):vK(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}async getToken(e,r=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!r&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:n,refreshToken:i,expiresIn:s}=await _K(e,r);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,r,n){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,r){const{refreshToken:n,accessToken:i,expirationTime:s}=r,o=new la;return n&&(B(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),i&&(B(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(B(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new la,this.toJSON())}_performRefresh(){return Ar("not implemented")}}/**
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
 */function pn(t,e){B(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class fi{constructor(e){var{uid:r,auth:n,stsTokenManager:i}=e,s=Yp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new mK(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.metadata=new BS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const r=await Wr(this,this.stsTokenManager.getToken(this.auth,e));return B(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return pK(this,e)}reload(){return yK(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new fi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),r&&await ua(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Wr(this,hK(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var n,i,s,o,a,c,u,l;const h=(n=r.displayName)!==null&&n!==void 0?n:void 0,f=(i=r.email)!==null&&i!==void 0?i:void 0,p=(s=r.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=r.photoURL)!==null&&o!==void 0?o:void 0,I=(a=r.tenantId)!==null&&a!==void 0?a:void 0,E=(c=r._redirectEventId)!==null&&c!==void 0?c:void 0,O=(u=r.createdAt)!==null&&u!==void 0?u:void 0,D=(l=r.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:q,emailVerified:G,isAnonymous:k,providerData:N,stsTokenManager:b}=r;B(q&&b,e,"internal-error");const R=la.fromJSON(this.name,b);B(typeof q=="string",e,"internal-error"),pn(h,e.name),pn(f,e.name),B(typeof G=="boolean",e,"internal-error"),B(typeof k=="boolean",e,"internal-error"),pn(p,e.name),pn(g,e.name),pn(I,e.name),pn(E,e.name),pn(O,e.name),pn(D,e.name);const H=new fi({uid:q,auth:e,email:f,emailVerified:G,displayName:h,isAnonymous:k,photoURL:g,phoneNumber:p,tenantId:I,stsTokenManager:R,createdAt:O,lastLoginAt:D});return N&&Array.isArray(N)&&(H.providerData=N.map(ne=>Object.assign({},ne))),E&&(H._redirectEventId=E),H}static async _fromIdTokenResponse(e,r,n=!1){const i=new la;i.updateFromServerResponse(r);const s=new fi({uid:r.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await ua(s),s}}/**
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
 */class VS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}VS.type="NONE";const ha=VS;/**
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
 */function di(t,e,r){return`firebase:${t}:${e}:${r}`}class ws{constructor(e,r,n){this.persistence=e,this.auth=r,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=di(this.userKey,i.apiKey,s),this.fullPersistenceKey=di("persistence",i.apiKey,s),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,n="authUser"){if(!r.length)return new ws(Wt(ha),e,n);const i=(await Promise.all(r.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Wt(ha);const o=di(n,e.config.apiKey,e.name);let a=null;for(const u of r)try{const l=await u._get(o);if(l){const h=fi._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch(l){}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new ws(s,e,n):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(r.map(async u=>{if(u!==s)try{await u._remove(o)}catch(l){}})),new ws(s,e,n))}}/**
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
 */function qS(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(GS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(KS(e))return"Blackberry";if(HS(e))return"Webos";if(iv(e))return"Safari";if((e.includes("chrome/")||WS(e))&&!e.includes("edge/"))return"Chrome";if(fa(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function zS(t=Oe()){return/firefox\//i.test(t)}function iv(t=Oe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function WS(t=Oe()){return/crios\//i.test(t)}function GS(t=Oe()){return/iemobile/i.test(t)}function fa(t=Oe()){return/android/i.test(t)}function KS(t=Oe()){return/blackberry/i.test(t)}function HS(t=Oe()){return/webos/i.test(t)}function bs(t=Oe()){return/iphone|ipad|ipod/i.test(t)}function EK(t=Oe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function IK(t=Oe()){var e;return bs(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function SK(){return Gp()&&document.documentMode===10}function YS(t=Oe()){return bs(t)||fa(t)||HS(t)||KS(t)||/windows phone/i.test(t)||GS(t)}function TK(){try{return!!(window&&window!==window.top)}catch(t){return!1}}/**
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
 */function XS(t,e=[]){let r;switch(t){case"Browser":r=qS(Oe());break;case"Worker":r=`${qS(Oe())}-${t}`;break;default:r=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${li}/${n}`}/**
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
 */class AK{constructor(e,r){this.app=e,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new QS(this),this.idTokenSubscription=new QS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$S,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=Wt(r)),this._initializationPromise=this.queue(async()=>{var n;this._deleted||(this.persistenceManager=await ws.create(this,e),!this._deleted&&(((n=this._popupRedirectResolver)===null||n===void 0?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(r),!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var r;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,s=n==null?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(n=o.user)}return n?n._redirectEventId?(B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await ua(e)}catch(r){if(r.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aK()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const r=e?re(e):null;return r&&B(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Wt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new oi("auth","Firebase",e())}onAuthStateChanged(e,r,n){return this.registerStateListener(this.authStateSubscription,e,r,n)}onIdTokenChanged(e,r,n){return this.registerStateListener(this.idTokenSubscription,e,r,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const n=await this.getOrInitRedirectPersistenceManager(r);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&Wt(e)||this._popupRedirectResolver;B(r,this,"argument-error"),this.redirectPersistenceManager=await ws.create(this,[Wt(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,n,i){if(this._deleted)return()=>{};const s=typeof r=="function"?r:r.next.bind(r),o=this._isInitialized?Promise.resolve():this._initializationPromise;return B(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof r=="function"?e.addObserver(r,n,i):e.addObserver(r)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=XS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function rt(t){return re(t)}class QS{constructor(e){this.auth=e,this.observer=null,this.addObserver=bS(r=>this.observer=r)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function OK(t,e,r){const n=rt(t);B(n._canInitEmulator,n,"emulator-config-failed"),B(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!!(r==null?void 0:r.disableWarnings),s=JS(e),{host:o,port:a}=CK(e),c=a===null?"":`:${a}`;n.config.emulator={url:`${s}//${o}${c}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),RK(i)}function JS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function CK(t){const e=JS(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:ZS(n.substr(s.length+1))}}else{const[s,o]=n.split(":");return{host:s,port:ZS(o)}}}function ZS(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RK(t){function e(){const r=document.createElement("p"),n=r.style;r.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",r.classList.add("firebase-emulator-warning"),document.body.appendChild(r)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&!t&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class _s{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return Ar("not implemented")}_getIdTokenResponse(e){return Ar("not implemented")}_linkToIdToken(e,r){return Ar("not implemented")}_getReauthenticationResolver(e){return Ar("not implemented")}}/**
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
 */async function eT(t,e){return tt(t,"POST","/v1/accounts:resetPassword",Je(t,e))}async function tT(t,e){return tt(t,"POST","/v1/accounts:update",e)}async function xK(t,e){return tt(t,"POST","/v1/accounts:update",Je(t,e))}/**
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
 */async function NK(t,e){return zr(t,"POST","/v1/accounts:signInWithPassword",Je(t,e))}async function Bu(t,e){return tt(t,"POST","/v1/accounts:sendOobCode",Je(t,e))}async function kK(t,e){return Bu(t,e)}async function PK(t,e){return Bu(t,e)}async function $K(t,e){return Bu(t,e)}async function DK(t,e){return Bu(t,e)}/**
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
 */async function LK(t,e){return zr(t,"POST","/v1/accounts:signInWithEmailLink",Je(t,e))}async function MK(t,e){return zr(t,"POST","/v1/accounts:signInWithEmailLink",Je(t,e))}/**
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
 */class da extends _s{constructor(e,r,n,i=null){super("password",n);this._email=e,this._password=r,this._tenantId=i}static _fromEmailAndPassword(e,r){return new da(e,r,"password")}static _fromEmailAndCode(e,r,n=null){return new da(e,r,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;if((r==null?void 0:r.email)&&(r==null?void 0:r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return NK(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return LK(e,{email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}async _linkToIdToken(e,r){switch(this.signInMethod){case"password":return tT(e,{idToken:r,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return MK(e,{idToken:r,email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Gr(t,e){return zr(t,"POST","/v1/accounts:signInWithIdp",Je(t,e))}/**
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
 */const FK="http://localhost";class Or extends _s{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const r=new Or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):lt("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=r,s=Yp(r,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Or(n,i);return Object.assign(o,s),o}_getIdTokenResponse(e){const r=this.buildRequest();return Gr(e,r)}_linkToIdToken(e,r){const n=this.buildRequest();return n.idToken=r,Gr(e,n)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,Gr(e,r)}buildRequest(){const e={requestUri:FK,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=vs(r)}return e}}/**
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
 */async function UK(t,e){return tt(t,"POST","/v1/accounts:sendVerificationCode",Je(t,e))}async function jK(t,e){return zr(t,"POST","/v1/accounts:signInWithPhoneNumber",Je(t,e))}async function BK(t,e){const r=await zr(t,"POST","/v1/accounts:signInWithPhoneNumber",Je(t,e));if(r.temporaryProof)throw Uu(t,"account-exists-with-different-credential",r);return r}const VK={USER_NOT_FOUND:"user-not-found"};async function qK(t,e){const r=Object.assign(Object.assign({},e),{operation:"REAUTH"});return zr(t,"POST","/v1/accounts:signInWithPhoneNumber",Je(t,r),VK)}/**
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
 */class pi extends _s{constructor(e){super("phone","phone");this.params=e}static _fromVerification(e,r){return new pi({verificationId:e,verificationCode:r})}static _fromTokenResponse(e,r){return new pi({phoneNumber:e,temporaryProof:r})}_getIdTokenResponse(e){return jK(e,this._makeVerificationRequest())}_linkToIdToken(e,r){return BK(e,Object.assign({idToken:r},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return qK(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:r,verificationId:n,verificationCode:i}=this.params;return e&&r?{temporaryProof:e,phoneNumber:r}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:r,verificationCode:n,phoneNumber:i,temporaryProof:s}=e;return!n&&!r&&!i&&!s?null:new pi({verificationId:r,verificationCode:n,phoneNumber:i,temporaryProof:s})}}/**
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
 */function zK(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function WK(t){const e=gs(ta(t)).link,r=e?gs(ta(e)).deep_link_id:null,n=gs(ta(t)).deep_link_id;return(n?gs(ta(n)).link:null)||n||r||e||t}class Vu{constructor(e){var r,n,i,s,o,a;const c=gs(ta(e)),u=(r=c.apiKey)!==null&&r!==void 0?r:null,l=(n=c.oobCode)!==null&&n!==void 0?n:null,h=zK((i=c.mode)!==null&&i!==void 0?i:null);B(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const r=WK(e);try{return new Vu(r)}catch(n){return null}}}/**
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
 */class vn{constructor(){this.providerId=vn.PROVIDER_ID}static credential(e,r){return da._fromEmailAndPassword(e,r)}static credentialWithLink(e,r){const n=Vu.parseLink(r);return B(n,"argument-error"),da._fromEmailAndCode(e,n.code,n.tenantId)}}vn.PROVIDER_ID="password";vn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class gn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Es extends gn{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Is extends Es{static credentialFromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;return B("providerId"in r&&"signInMethod"in r,"argument-error"),Or._fromParams(r)}credential(e){return this._credential(e)}_credential(e){return B(e.idToken||e.accessToken,"argument-error"),Or._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Is.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Is.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!n&&!i&&!r&&!s||!a)return null;try{return new Is(a)._credential({idToken:r,accessToken:n,rawNonce:o,pendingToken:s})}catch(c){return null}}}/**
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
 */class Cr extends Es{constructor(){super("facebook.com")}static credential(e){return Or._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch(r){return null}}}Cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cr.PROVIDER_ID="facebook.com";/**
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
 */class Rr extends Es{constructor(){super("google.com");this.addScope("profile")}static credential(e,r){return Or._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n}=e;if(!r&&!n)return null;try{return Rr.credential(r,n)}catch(i){return null}}}Rr.GOOGLE_SIGN_IN_METHOD="google.com";Rr.PROVIDER_ID="google.com";/**
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
 */class xr extends Es{constructor(){super("github.com")}static credential(e){return Or._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch(r){return null}}}xr.GITHUB_SIGN_IN_METHOD="github.com";xr.PROVIDER_ID="github.com";/**
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
 */const GK="http://localhost";class qu extends _s{constructor(e,r){super(e,e);this.pendingToken=r}_getIdTokenResponse(e){const r=this.buildRequest();return Gr(e,r)}_linkToIdToken(e,r){const n=this.buildRequest();return n.idToken=r,Gr(e,n)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,Gr(e,r)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i,pendingToken:s}=r;return!n||!i||!s||n!==i?null:new qu(n,s)}static _create(e,r){return new qu(e,r)}buildRequest(){return{requestUri:GK,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */class Nr extends Es{constructor(){super("twitter.com")}static credential(e,r){return Or._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=e;if(!r||!n)return null;try{return Nr.credential(r,n)}catch(i){return null}}}Nr.TWITTER_SIGN_IN_METHOD="twitter.com";Nr.PROVIDER_ID="twitter.com";/**
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
 */async function rT(t,e){return zr(t,"POST","/v1/accounts:signUp",Je(t,e))}/**
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
 */class rr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,n,i=!1){const s=await fi._fromIdTokenResponse(e,n,i),o=nT(n);return new rr({user:s,providerId:o,_tokenResponse:n,operationType:r})}static async _forOperation(e,r,n){await e._updateTokensIfNecessary(n,!0);const i=nT(n);return new rr({user:e,providerId:i,_tokenResponse:n,operationType:r})}}function nT(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function KK(t){var e;const r=rt(t);if(await r._initializationPromise,(e=r.currentUser)===null||e===void 0?void 0:e.isAnonymous)return new rr({user:r.currentUser,providerId:null,operationType:"signIn"});const n=await rT(r,{returnSecureToken:!0}),i=await rr._fromIdTokenResponse(r,"signIn",n,!0);return await r._updateCurrentUser(i.user),i}/**
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
 */class zu extends tr{constructor(e,r,n,i){var s;super(r.code,r.message);this.operationType=n,this.user=i,this.name="FirebaseError",Object.setPrototypeOf(this,zu.prototype),this.appName=e.name,this.code=r.code,this.tenantId=(s=e.tenantId)!==null&&s!==void 0?s:void 0,this.serverResponse=r.customData.serverResponse}static _fromErrorAndOperation(e,r,n,i){return new zu(e,r,n,i)}}function iT(t,e,r,n){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?zu._fromErrorAndOperation(t,s,e,n):s})}/**
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
 */function sT(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function HK(t,e){const r=re(t);await Wu(!0,r,e);const{providerUserInfo:n}=await fK(r.auth,{idToken:await r.getIdToken(),deleteProvider:[e]}),i=sT(n||[]);return r.providerData=r.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(r.phoneNumber=null),await r.auth._persistUserIfCurrent(r),r}async function sv(t,e,r=!1){const n=await Wr(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return rr._forOperation(t,"link",n)}async function Wu(t,e,r){await ua(e);const n=sT(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";B(n.has(r)===t,e.auth,i)}/**
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
 */async function oT(t,e,r=!1){const{auth:n}=t,i="reauthenticate";try{const s=await Wr(t,iT(n,i,e,t),r);B(s.idToken,n,"internal-error");const o=ju(s.idToken);B(o,n,"internal-error");const{sub:a}=o;return B(t.uid===a,n,"user-mismatch"),rr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&lt(n,"user-mismatch"),s}}/**
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
 */async function aT(t,e,r=!1){const n="signIn",i=await iT(t,n,e),s=await rr._fromIdTokenResponse(t,n,i);return r||await t._updateCurrentUser(s.user),s}async function Gu(t,e){return aT(rt(t),e)}async function cT(t,e){const r=re(t);return await Wu(!1,r,e.providerId),sv(r,e)}async function uT(t,e){return oT(re(t),e)}/**
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
 */async function YK(t,e){return zr(t,"POST","/v1/accounts:signInWithCustomToken",Je(t,e))}/**
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
 */async function XK(t,e){const r=rt(t),n=await YK(r,{token:e,returnSecureToken:!0}),i=await rr._fromIdTokenResponse(r,"signIn",n);return await r._updateCurrentUser(i.user),i}/**
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
 */class Ku{constructor(e,r){this.factorId=e,this.uid=r.mfaEnrollmentId,this.enrollmentTime=new Date(r.enrolledAt).toUTCString(),this.displayName=r.displayName}static _fromServerResponse(e,r){return"phoneInfo"in r?ov._fromServerResponse(e,r):lt(e,"internal-error")}}class ov extends Ku{constructor(e){super("phone",e);this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,r){return new ov(r)}}/**
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
 */function Hu(t,e,r){var n;B(((n=r.url)===null||n===void 0?void 0:n.length)>0,t,"invalid-continue-uri"),B(typeof r.dynamicLinkDomain=="undefined"||r.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=r.url,e.dynamicLinkDomain=r.dynamicLinkDomain,e.canHandleCodeInApp=r.handleCodeInApp,r.iOS&&(B(r.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=r.iOS.bundleId),r.android&&(B(r.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=r.android.installApp,e.androidMinimumVersionCode=r.android.minimumVersion,e.androidPackageName=r.android.packageName)}/**
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
 */async function QK(t,e,r){const n=re(t),i={requestType:"PASSWORD_RESET",email:e};r&&Hu(n,i,r),await PK(n,i)}async function JK(t,e,r){await eT(re(t),{oobCode:e,newPassword:r})}async function ZK(t,e){await xK(re(t),{oobCode:e})}async function lT(t,e){const r=re(t),n=await eT(r,{oobCode:e}),i=n.requestType;switch(B(i,r,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":B(n.newEmail,r,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":B(n.mfaInfo,r,"internal-error");default:B(n.email,r,"internal-error")}let s=null;return n.mfaInfo&&(s=Ku._fromServerResponse(rt(r),n.mfaInfo)),{data:{email:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.newEmail:n.email)||null,previousEmail:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.email:n.newEmail)||null,multiFactorInfo:s},operation:i}}async function eH(t,e){const{data:r}=await lT(re(t),e);return r.email}async function tH(t,e,r){const n=rt(t),i=await rT(n,{returnSecureToken:!0,email:e,password:r}),s=await rr._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(s.user),s}function rH(t,e,r){return Gu(re(t),vn.credential(e,r))}/**
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
 */async function nH(t,e,r){const n=re(t),i={requestType:"EMAIL_SIGNIN",email:e};B(r.handleCodeInApp,n,"argument-error"),r&&Hu(n,i,r),await $K(n,i)}function iH(t,e){const r=Vu.parseLink(e);return(r==null?void 0:r.operation)==="EMAIL_SIGNIN"}async function sH(t,e,r){const n=re(t),i=vn.credentialWithLink(e,r||oa());return B(i._tenantId===(n.tenantId||null),n,"tenant-id-mismatch"),Gu(n,i)}/**
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
 */async function oH(t,e){return tt(t,"POST","/v1/accounts:createAuthUri",Je(t,e))}/**
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
 */async function aH(t,e){const r=ev()?oa():"http://localhost",n={identifier:e,continueUri:r},{signinMethods:i}=await oH(re(t),n);return i||[]}async function cH(t,e){const r=re(t),n=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:n};e&&Hu(r.auth,i,e);const{email:s}=await kK(r.auth,i);s!==t.email&&await t.reload()}async function uH(t,e,r){const n=re(t),i=await t.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:e};r&&Hu(n.auth,s,r);const{email:o}=await DK(n.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function lH(t,e){return tt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function hH(t,{displayName:e,photoURL:r}){if(e===void 0&&r===void 0)return;const n=re(t),s={idToken:await n.getIdToken(),displayName:e,photoUrl:r,returnSecureToken:!0},o=await Wr(n,lH(n.auth,s));n.displayName=o.displayName||null,n.photoURL=o.photoUrl||null;const a=n.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=n.displayName,a.photoURL=n.photoURL),await n._updateTokensIfNecessary(o)}function fH(t,e){return hT(re(t),e,null)}function dH(t,e){return hT(re(t),null,e)}async function hT(t,e,r){const{auth:n}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),r&&(s.password=r);const o=await Wr(t,tT(n,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function pH(t){var e,r;if(!t)return null;const{providerId:n}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!n&&(t==null?void 0:t.idToken)){const o=(r=(e=ju(t.idToken))===null||e===void 0?void 0:e.firebase)===null||r===void 0?void 0:r.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Ss(s,a)}}if(!n)return null;switch(n){case"facebook.com":return new vH(s,i);case"github.com":return new gH(s,i);case"google.com":return new mH(s,i);case"twitter.com":return new yH(s,i,t.screenName||null);case"custom":case"anonymous":return new Ss(s,null);default:return new Ss(s,n,i)}}class Ss{constructor(e,r,n={}){this.isNewUser=e,this.providerId=r,this.profile=n}}class fT extends Ss{constructor(e,r,n,i){super(e,r,n);this.username=i}}class vH extends Ss{constructor(e,r){super(e,"facebook.com",r)}}class gH extends fT{constructor(e,r){super(e,"github.com",r,typeof(r==null?void 0:r.login)=="string"?r==null?void 0:r.login:null)}}class mH extends Ss{constructor(e,r){super(e,"google.com",r)}}class yH extends fT{constructor(e,r,n){super(e,"twitter.com",r,n)}}function wH(t){const{user:e,_tokenResponse:r}=t;return e.isAnonymous&&!r?{providerId:null,isNewUser:!1,profile:null}:pH(r)}class vi{constructor(e,r){this.type=e,this.credential=r}static _fromIdtoken(e){return new vi("enroll",e)}static _fromMfaPendingCredential(e){return new vi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var r,n;if(e==null?void 0:e.multiFactorSession){if((r=e.multiFactorSession)===null||r===void 0?void 0:r.pendingCredential)return vi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((n=e.multiFactorSession)===null||n===void 0?void 0:n.idToken)return vi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class av{constructor(e,r,n){this.session=e,this.hints=r,this.signInResolver=n}static _fromError(e,r){const n=rt(e),i=(r.serverResponse.mfaInfo||[]).map(o=>Ku._fromServerResponse(n,o));B(r.serverResponse.mfaPendingCredential,n,"internal-error");const s=vi._fromMfaPendingCredential(r.serverResponse.mfaPendingCredential);return new av(s,i,async o=>{const a=await o._process(n,s);delete r.serverResponse.mfaInfo,delete r.serverResponse.mfaPendingCredential;const c=Object.assign(Object.assign({},r.serverResponse),{idToken:a.idToken,refreshToken:a.refreshToken});switch(r.operationType){case"signIn":const u=await rr._fromIdTokenResponse(n,r.operationType,c);return await n._updateCurrentUser(u.user),u;case"reauthenticate":return B(r.user,n,"internal-error"),rr._forOperation(r.user,r.operationType,c);default:lt(n,"internal-error")}})}async resolveSignIn(e){const r=e;return this.signInResolver(r)}}function bH(t,e){var r;const n=re(t),i=e;return B(e.operationType,n,"argument-error"),B((r=i.serverResponse)===null||r===void 0?void 0:r.mfaPendingCredential,n,"argument-error"),av._fromError(n,i)}/**
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
 */function _H(t,e){return tt(t,"POST","/v2/accounts/mfaEnrollment:start",Je(t,e))}function EH(t,e){return tt(t,"POST","/v2/accounts/mfaEnrollment:finalize",Je(t,e))}function IH(t,e){return tt(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Je(t,e))}class cv{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(r=>{r.mfaInfo&&(this.enrolledFactors=r.mfaInfo.map(n=>Ku._fromServerResponse(e.auth,n)))})}static _fromUser(e){return new cv(e)}async getSession(){return vi._fromIdtoken(await this.user.getIdToken())}async enroll(e,r){const n=e,i=await this.getSession(),s=await Wr(this.user,n._process(this.user.auth,i,r));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const r=typeof e=="string"?e:e.uid,n=await this.user.getIdToken(),i=await Wr(this.user,IH(this.user.auth,{idToken:n,mfaEnrollmentId:r}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==r),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(s){if(s.code!=="auth/user-token-expired")throw s}}}const uv=new WeakMap;function SH(t){const e=re(t);return uv.has(e)||uv.set(e,cv._fromUser(e)),uv.get(e)}const Yu="__sak";/**
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
 */class dT{constructor(e,r){this.storage=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(Yu,"1"),this.storage.removeItem(Yu),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}/**
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
 */function TH(){const t=Oe();return iv(t)||bs(t)}const AH=1e3,OH=10;class pT extends dT{constructor(){super(window.localStorage,"LOCAL");this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=TH()&&TK(),this.fallbackToPolling=YS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),i=this.localCache[r];n!==i&&e(r,i,n)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const n=e.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(n);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!r)return}const i=()=>{const o=this.storage.getItem(n);!r&&this.localCache[n]===o||this.notifyListeners(n,o)},s=this.storage.getItem(n);SK()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,OH):i()}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)})},AH)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}pT.type="LOCAL";const lv=pT;/**
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
 */class vT extends dT{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}vT.type="SESSION";const gi=vT;/**
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
 */function CH(t){return Promise.all(t.map(async e=>{try{const r=await e;return{fulfilled:!0,value:r}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class Xu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(i=>i.isListeningto(e));if(r)return r;const n=new Xu(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:n,eventType:i,data:s}=r.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const a=Array.from(o).map(async u=>u(r.origin,s)),c=await CH(a);r.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:c})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xu.receivers=[];/**
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
 */function pa(t="",e=10){let r="";for(let n=0;n<e;n++)r+=Math.floor(Math.random()*10);return t+r}/**
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
 */class RH{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,n=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=pa("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},n);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:r},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ze(){return window}function xH(t){Ze().location.href=t}/**
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
 */function hv(){return typeof Ze().WorkerGlobalScope!="undefined"&&typeof Ze().importScripts=="function"}async function NH(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}function kH(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function PH(){return hv()?self:null}/**
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
 */const gT="firebaseLocalStorageDb",$H=1,Qu="firebaseLocalStorage",mT="fbase_key";class va{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function Ju(t,e){return t.transaction([Qu],e?"readwrite":"readonly").objectStore(Qu)}function DH(){const t=indexedDB.deleteDatabase(gT);return new va(t).toPromise()}function fv(){const t=indexedDB.open(gT,$H);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(Qu,{keyPath:mT})}catch(i){r(i)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(Qu)?e(n):(n.close(),await DH(),e(await fv()))})})}async function yT(t,e,r){const n=Ju(t,!0).put({[mT]:e,value:r});return new va(n).toPromise()}async function LH(t,e){const r=Ju(t,!1).get(e),n=await new va(r).toPromise();return n===void 0?null:n.value}function wT(t,e){const r=Ju(t,!0).delete(e);return new va(r).toPromise()}const MH=800,FH=3;class bT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fv(),this.db)}async _withRetries(e){let r=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(r++>FH)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xu._getInstance(PH()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await NH(),!this.activeServiceWorker)return;this.sender=new RH(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);!n||((e=n[0])===null||e===void 0?void 0:e.fulfilled)&&((r=n[0])===null||r===void 0?void 0:r.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kH()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(r){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fv();return await yT(e,Yu,"1"),await wT(e,Yu),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>yT(n,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(n=>LH(n,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>wT(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ju(i,!1).getAll();return new va(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),r.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),r.push(i));return r}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MH)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bT.type="LOCAL";const Zu=bT;/**
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
 */function UH(t,e){return tt(t,"POST","/v2/accounts/mfaSignIn:start",Je(t,e))}function jH(t,e){return tt(t,"POST","/v2/accounts/mfaSignIn:finalize",Je(t,e))}/**
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
 */async function BH(t){return(await tt(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function VH(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _T(t){return new Promise((e,r)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=i=>{const s=ht("internal-error");s.customData=i,r(s)},n.type="text/javascript",n.charset="UTF-8",VH().appendChild(n)})}function ET(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const qH=500,zH=6e4,el=1e12;class WH{constructor(e){this.auth=e,this.counter=el,this._widgets=new Map}render(e,r){const n=this.counter;return this._widgets.set(n,new GH(e,this.auth.name,r||{})),this.counter++,n}reset(e){var r;const n=e||el;(r=this._widgets.get(n))===null||r===void 0||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||el;return((r=this._widgets.get(n))===null||r===void 0?void 0:r.getResponse())||""}async execute(e){var r;const n=e||el;return(r=this._widgets.get(n))===null||r===void 0||r.execute(),""}}class GH{constructor(e,r,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;B(i,"argument-error",{appName:r}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=KH(50);const{callback:e,"expired-callback":r}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,r)try{r()}catch(n){}this.isVisible&&this.execute()},zH)},qH))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function KH(t){const e=[],r="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<t;n++)e.push(r.charAt(Math.floor(Math.random()*r.length)));return e.join("")}/**
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
 */const dv=ET("rcb"),HH=new aa(3e4,6e4),YH="https://www.google.com/recaptcha/api.js?";class XH{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Ze().grecaptcha}load(e,r=""){return B(QH(r),e,"argument-error"),this.shouldResolveImmediately(r)?Promise.resolve(Ze().grecaptcha):new Promise((n,i)=>{const s=Ze().setTimeout(()=>{i(ht(e,"network-request-failed"))},HH.get());Ze()[dv]=()=>{Ze().clearTimeout(s),delete Ze()[dv];const a=Ze().grecaptcha;if(!a){i(ht(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=r,n(a)};const o=`${YH}?${vs({onload:dv,render:"explicit",hl:r})}`;_T(o).catch(()=>{clearTimeout(s),i(ht(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Ze().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function QH(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class JH{async load(e){return new WH(e)}clearedOneInstance(){}}/**
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
 */const IT="recaptcha",ZH={theme:"light",type:"image"};class e3{constructor(e,r=Object.assign({},ZH),n){this.parameters=r,this.type=IT,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=rt(n),this.isInvisible=this.parameters.size==="invisible",B(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;B(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new JH:new XH,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),r=this.getAssertedRecaptcha(),n=r.getResponse(e);return n||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&r.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){B(!this.parameters.sitekey,this.auth,"argument-error"),B(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),B(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return r=>{if(this.tokenChangeListeners.forEach(n=>n(r)),typeof e=="function")e(r);else if(typeof e=="string"){const n=Ze()[e];typeof n=="function"&&n(r)}}}assertNotDestroyed(){B(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const r=document.createElement("div");e.appendChild(r),e=r}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){B(ev()&&!hv(),this.auth,"internal-error"),await t3(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await BH(this.auth);B(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return B(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function t3(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class pv{constructor(e,r){this.verificationId=e,this.onConfirmation=r}confirm(e){const r=pi._fromVerification(this.verificationId,e);return this.onConfirmation(r)}}async function r3(t,e,r){const n=rt(t),i=await tl(n,e,re(r));return new pv(i,s=>Gu(n,s))}async function n3(t,e,r){const n=re(t);await Wu(!1,n,"phone");const i=await tl(n.auth,e,re(r));return new pv(i,s=>cT(n,s))}async function i3(t,e,r){const n=re(t),i=await tl(n.auth,e,re(r));return new pv(i,s=>uT(n,s))}async function tl(t,e,r){var n;const i=await r.verify();try{B(typeof i=="string",t,"argument-error"),B(r.type===IT,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return B(o.type==="enroll",t,"internal-error"),(await _H(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{B(o.type==="signin",t,"internal-error");const a=((n=s.multiFactorHint)===null||n===void 0?void 0:n.uid)||s.multiFactorUid;return B(a,t,"missing-multi-factor-info"),(await UH(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await UK(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{r._reset()}}async function s3(t,e){await sv(re(t),e)}/**
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
 */class dr{constructor(e){this.providerId=dr.PROVIDER_ID,this.auth=rt(e)}verifyPhoneNumber(e,r){return tl(this.auth,e,re(r))}static credential(e,r){return pi._fromVerification(e,r)}static credentialFromResult(e){const r=e;return dr.credentialFromTaggedObject(r)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:r,temporaryProof:n}=e;return r&&n?pi._fromTokenResponse(r,n):null}}dr.PROVIDER_ID="phone";dr.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function mi(t,e){return e?Wt(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class vv extends _s{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Gr(e,this._buildIdpRequest())}_linkToIdToken(e,r){return Gr(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return Gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function o3(t){return aT(t.auth,new vv(t),t.bypassAuthState)}function a3(t){const{auth:e,user:r}=t;return B(r,e,"internal-error"),oT(r,new vv(t),t.bypassAuthState)}async function c3(t){const{auth:e,user:r}=t;return B(r,e,"internal-error"),sv(r,new vv(t),t.bypassAuthState)}/**
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
 */class ST{constructor(e,r,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:n,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:r,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return o3;case"linkViaPopup":case"linkViaRedirect":return c3;case"reauthViaPopup":case"reauthViaRedirect":return a3;default:lt(this.auth,"internal-error")}}resolve(e){fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const u3=new aa(2e3,1e4);async function l3(t,e,r){const n=rt(t);ys(t,e,gn);const i=mi(n,r);return new Kr(n,"signInViaPopup",e,i).executeNotNull()}async function h3(t,e,r){const n=re(t);ys(n.auth,e,gn);const i=mi(n.auth,r);return new Kr(n.auth,"reauthViaPopup",e,i,n).executeNotNull()}async function f3(t,e,r){const n=re(t);ys(n.auth,e,gn);const i=mi(n.auth,r);return new Kr(n.auth,"linkViaPopup",e,i,n).executeNotNull()}class Kr extends ST{constructor(e,r,n,i,s){super(e,r,i,s);this.provider=n,this.authWindow=null,this.pollId=null,Kr.currentPopupAction&&Kr.currentPopupAction.cancel(),Kr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){fr(this.filter.length===1,"Popup operations only handle one event");const e=pa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,n;if((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0?void 0:n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ht(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,u3.get())};e()}}Kr.currentPopupAction=null;/**
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
 */const d3="pendingRedirect",gv=new Map;class p3 extends ST{constructor(e,r,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n);this.eventId=null}async execute(){let e=gv.get(this.auth._key());if(!e){try{const n=await v3(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}gv.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function v3(t,e){const r=TT(e),n=await yv(t)._get(r)==="true";return await yv(t)._remove(r),n}async function mv(t,e){return yv(t)._set(TT(e),"true")}function g3(){gv.clear()}function yv(t){return Wt(t._redirectPersistence)}function TT(t){return di(d3,t.config.apiKey,t.name)}/**
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
 */function m3(t,e,r){return y3(t,e,r)}async function y3(t,e,r){const n=rt(t);ys(t,e,gn);const i=mi(n,r);return await mv(i,n),i._openRedirect(n,e,"signInViaRedirect")}function w3(t,e,r){return b3(t,e,r)}async function b3(t,e,r){const n=re(t);ys(n.auth,e,gn);const i=mi(n.auth,r);await mv(i,n.auth);const s=await AT(n);return i._openRedirect(n.auth,e,"reauthViaRedirect",s)}function _3(t,e,r){return E3(t,e,r)}async function E3(t,e,r){const n=re(t);ys(n.auth,e,gn);const i=mi(n.auth,r);await Wu(!1,n,e.providerId),await mv(i,n.auth);const s=await AT(n);return i._openRedirect(n.auth,e,"linkViaRedirect",s)}async function I3(t,e){return await rt(t)._initializationPromise,rl(t,e,!1)}async function rl(t,e,r=!1){const n=rt(t),i=mi(n,e),o=await new p3(n,i,r).execute();return o&&!r&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}async function AT(t){const e=pa(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const S3=10*60*1e3;class OT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(r=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!T3(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var n;if(e.error&&!RT(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(ht(this.auth,i))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const n=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=S3&&this.cachedEventUids.clear(),this.cachedEventUids.has(CT(e))}saveEventToCache(e){this.cachedEventUids.add(CT(e)),this.lastProcessedEventTime=Date.now()}}function CT(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function RT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function T3(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return RT(t);default:return!1}}/**
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
 */async function xT(t,e={}){return tt(t,"GET","/v1/projects",e)}/**
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
 */const A3=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,O3=/^https?/;async function C3(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xT(t);for(const r of e)try{if(R3(r))return}catch(n){}lt(t,"unauthorized-domain")}function R3(t){const e=oa(),{protocol:r,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&n===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&o.hostname===n}if(!O3.test(r))return!1;if(A3.test(t))return n===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const x3=new aa(3e4,6e4);function NT(){const t=Ze().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function N3(t){return new Promise((e,r)=>{var n,i,s;function o(){NT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{NT(),r(ht(t,"network-request-failed"))},timeout:x3.get()})}if((i=(n=Ze().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((s=Ze().gapi)===null||s===void 0?void 0:s.load)o();else{const a=ET("iframefcb");return Ze()[a]=()=>{gapi.load?o():r(ht(t,"network-request-failed"))},_T(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw nl=null,e})}let nl=null;function k3(t){return nl=nl||N3(t),nl}/**
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
 */const P3=new aa(5e3,15e3),$3="__/auth/iframe",D3="emulator/auth/iframe",L3={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},M3=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function F3(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?tv(e,D3):`https://${t.config.authDomain}/${$3}`,n={apiKey:e.apiKey,appName:t.name,v:li},i=M3.get(t.config.apiHost);i&&(n.eid=i);const s=t._getFrameworks();return s.length&&(n.fw=s.join(",")),`${r}?${vs(n).slice(1)}`}async function U3(t){const e=await k3(t),r=Ze().gapi;return B(r,t,"internal-error"),e.open({where:document.body,url:F3(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:L3,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const o=ht(t,"network-request-failed"),a=Ze().setTimeout(()=>{s(o)},P3.get());function c(){Ze().clearTimeout(a),i(n)}n.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const j3={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},B3=500,V3=600,q3="_blank",z3="http://localhost";class kT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function W3(t,e,r,n=B3,i=V3){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let a="";const c=Object.assign(Object.assign({},j3),{width:n.toString(),height:i.toString(),top:s,left:o}),u=Oe().toLowerCase();r&&(a=WS(u)?q3:r),zS(u)&&(e=e||z3,c.scrollbars="yes");const l=Object.entries(c).reduce((f,[p,g])=>`${f}${p}=${g},`,"");if(IK(u)&&a!=="_self")return G3(e||"",a),new kT(null);const h=window.open(e||"",a,l);B(h,t,"popup-blocked");try{h.focus()}catch(f){}return new kT(h)}function G3(t,e){const r=document.createElement("a");r.href=t,r.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
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
 */const K3="__/auth/handler",H3="emulator/auth/handler";function wv(t,e,r,n,i,s){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:n,v:li,eventId:i};if(e instanceof gn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",XG(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(s||{}))o[c]=u}if(e instanceof Es){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Y3(t)}?${vs(a).slice(1)}`}function Y3({config:t}){return t.emulator?tv(t,H3):`https://${t.authDomain}/${K3}`}/**
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
 */const bv="webStorageSupport";class X3{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gi,this._completeRedirectFn=rl}async _openPopup(e,r,n,i){var s;fr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=wv(e,r,n,oa(),i);return W3(e,o,pa())}async _openRedirect(e,r,n,i){return await this._originValidation(e),xH(wv(e,r,n,oa(),i)),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:i,promise:s}=this.eventManagers[r];return i?Promise.resolve(i):(fr(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[r]={promise:n},n}async initAndGetManager(e){const r=await U3(e),n=new OT(e);return r.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=r,n}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(bv,{type:bv},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[bv];o!==void 0&&r(!!o),lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=C3(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return YS()||iv()||bs()}}const Q3=X3;class J3{constructor(e){this.factorId=e}_process(e,r,n){switch(r.type){case"enroll":return this._finalizeEnroll(e,r.credential,n);case"signin":return this._finalizeSignIn(e,r.credential);default:return Ar("unexpected MultiFactorSessionType")}}}class _v extends J3{constructor(e){super("phone");this.credential=e}static _fromCredential(e){return new _v(e)}_finalizeEnroll(e,r,n){return EH(e,{idToken:r,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,r){return jH(e,{mfaPendingCredential:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class PT{constructor(){}static assertion(e){return _v._fromCredential(e)}}PT.FACTOR_ID="phone";var Z3="@firebase/auth",eY="0.18.1";/**
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
 */class tY{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(n=>{var i;e(((i=n)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);!r||(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function rY(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function nY(t){ui(new qr("auth",(e,{options:r})=>{const n=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=n.options;return(o=>{B(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),B(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:XS(t)},c=new AK(o,a);return sK(c,r),c})(n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,n)=>{e.getProvider("auth-internal").initialize()})),ui(new qr("auth-internal",e=>{const r=rt(e.getProvider("auth").getImmediate());return(n=>new tY(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),hi(Z3,eY,rY(t))}nY("Browser");/**
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
 */function yi(){return window}/**
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
 */const iY=2e3;async function sY(t,e,r){var n;const{BuildInfo:i}=yi();fr(e.sessionId,"AuthEvent did not contain a session ID");const s=await lY(e.sessionId),o={};return bs()?o.ibi=i.packageName:fa()?o.apn=i.packageName:lt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,wv(t,r,e.type,void 0,(n=e.eventId)!==null&&n!==void 0?n:void 0,o)}async function oY(t){const{BuildInfo:e}=yi(),r={};bs()?r.iosBundleId=e.packageName:fa()?r.androidPackageName=e.packageName:lt(t,"operation-not-supported-in-this-environment"),await xT(t,r)}function aY(t){const{cordova:e}=yi();return new Promise(r=>{e.plugins.browsertab.isAvailable(n=>{let i=null;n?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,EK()?"_blank":"_system","location=yes"),r(i)})})}async function cY(t,e,r){const{cordova:n}=yi();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const f=(h=n.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof f=="function"&&f(),typeof(r==null?void 0:r.close)=="function"&&r.close()}function u(){a||(a=window.setTimeout(()=>{o(ht(t,"redirect-cancelled-by-user"))},iY))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),fa()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function uY(t){var e,r,n,i,s,o,a,c,u,l;const h=yi();B(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),B(typeof((r=h==null?void 0:h.BuildInfo)===null||r===void 0?void 0:r.packageName)!="undefined",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),B(typeof((s=(i=(n=h==null?void 0:h.cordova)===null||n===void 0?void 0:n.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),B(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),B(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function lY(t){const e=hY(t),r=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(r)).map(i=>i.toString(16).padStart(2,"0")).join("")}function hY(t){if(fr(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder!="undefined")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),r=new Uint8Array(e);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}/**
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
 */const fY=20;class dY extends OT{constructor(){super(...arguments);this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(r=>r(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function pY(t,e,r=null){return{type:e,eventId:r,urlResponse:null,sessionId:mY(),postBody:null,tenantId:t.tenantId,error:ht(t,"no-auth-event")}}function vY(t,e){return Ev()._set(Iv(t),e)}async function $T(t){const e=await Ev()._get(Iv(t));return e&&await Ev()._remove(Iv(t)),e}function gY(t,e){var r,n;const i=wY(e);if(i.includes("/__/auth/callback")){const s=il(i),o=s.firebaseError?yY(decodeURIComponent(s.firebaseError)):null,a=(n=(r=o==null?void 0:o.code)===null||r===void 0?void 0:r.split("auth/"))===null||n===void 0?void 0:n[1],c=a?ht(a):null;return c?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function mY(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<fY;r++){const n=Math.floor(Math.random()*e.length);t.push(e.charAt(n))}return t.join("")}function Ev(){return Wt(lv)}function Iv(t){return di("authEvent",t.config.apiKey,t.name)}function yY(t){try{return JSON.parse(t)}catch(e){return null}}function wY(t){const e=il(t),r=e.link?decodeURIComponent(e.link):void 0,n=il(r).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return il(i).link||i||n||r||t}function il(t){if(!(t==null?void 0:t.includes("?")))return{};const[e,...r]=t.split("?");return gs(r.join("?"))}/**
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
 */const bY=500;class _Y{constructor(){this._redirectPersistence=gi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=rl}async _initialize(e){const r=e._key();let n=this.eventManagers.get(r);return n||(n=new dY(e),this.eventManagers.set(r,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){lt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,r,n,i){uY(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),g3(),await this._originValidation(e);const o=pY(e,n,i);await vY(e,o);const a=await sY(e,o,r),c=await aY(a);return cY(e,s,c)}_isIframeWebStorageSupported(e,r){throw new Error("Method not implemented.")}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=oY(e)),this.originValidationPromises[r]}attachCallbackListeners(e,r){const{universalLinks:n,handleOpenURL:i,BuildInfo:s}=yi(),o=setTimeout(async()=>{await $T(e),r.onEvent(DT())},bY),a=async l=>{clearTimeout(o);const h=await $T(e);let f=null;h&&(l==null?void 0:l.url)&&(f=gY(h,l.url)),r.onEvent(f||DT())};typeof n!="undefined"&&typeof n.subscribe=="function"&&n.subscribe(null,a);const c=i,u=`${s.packageName.toLowerCase()}://`;yi().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const EY=_Y;function DT(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ht("no-auth-event")}}/**
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
 */function IY(t,e){rt(t)._logFramework(e)}var SY="@firebase/auth-compat",TY="0.1.4";/**
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
 */const AY=1e3;function sl(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function OY(){return sl()==="http:"||sl()==="https:"}function LT(t=Oe()){return!!((sl()==="file:"||sl()==="ionic:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function CY(){return Pu()||zp()}function RY(){return Gp()&&(document==null?void 0:document.documentMode)===11}function xY(t=Oe()){return/Edge\/\d+/.test(t)}function NY(t=Oe()){return RY()||xY(t)}function MT(){try{const t=self.localStorage,e=pa();if(t)return t.setItem(e,"1"),t.removeItem(e),NY()?$u():!0}catch(t){return Sv()&&$u()}return!1}function Sv(){return typeof global!="undefined"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Tv(){return(OY()||Wp()||LT())&&!CY()&&MT()&&!Sv()}function FT(){return LT()&&typeof document!="undefined"}async function kY(){return FT()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},AY);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}/**
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
 */const Gt={LOCAL:"local",NONE:"none",SESSION:"session"},ga=B,UT="persistence";function PY(t,e){if(ga(Object.values(Gt).includes(e),t,"invalid-persistence-type"),Pu()){ga(e!==Gt.SESSION,t,"unsupported-persistence-type");return}if(zp()){ga(e===Gt.NONE,t,"unsupported-persistence-type");return}if(Sv()){ga(e===Gt.NONE||e===Gt.LOCAL&&$u(),t,"unsupported-persistence-type");return}ga(e===Gt.NONE||MT(),t,"unsupported-persistence-type")}async function Av(t){await t._initializationPromise;const e=jT(),r=di(UT,t.config.apiKey,t.name);(e==null?void 0:e.sessionStorage)&&e.sessionStorage.setItem(r,t._getPersistence())}function $Y(t,e){const r=jT();if(!(r==null?void 0:r.sessionStorage))return[];const n=di(UT,t,e);switch(r.sessionStorage.getItem(n)){case Gt.NONE:return[ha];case Gt.LOCAL:return[Zu,gi];case Gt.SESSION:return[gi];default:return[]}}function jT(){return typeof window!="undefined"?window:null}/**
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
 */const DY=B;class mn{constructor(){this.browserResolver=Wt(Q3),this.cordovaResolver=Wt(EY),this.underlyingResolver=null,this._redirectPersistence=gi,this._completeRedirectFn=rl}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,r,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,r,n,i)}async _openRedirect(e,r,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,r,n,i)}_isIframeWebStorageSupported(e,r){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,r)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return FT()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return DY(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await kY();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function BT(t){return t.unwrap()}function LY(t){return t.wrapped()}/**
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
 */function MY(t){return VT(t)}function FY(t,e){var r;const n=(r=e.customData)===null||r===void 0?void 0:r._tokenResponse;if(e.code==="auth/multi-factor-auth-required"){const i=e;i.resolver=new UY(t,bH(t,e))}else if(n){const i=VT(e),s=e;i&&(s.credential=i,s.tenantId=n.tenantId||void 0,s.email=n.email||void 0,s.phoneNumber=n.phoneNumber||void 0)}}function VT(t){const{_tokenResponse:e}=t instanceof tr?t.customData:t;if(!e)return null;if(!(t instanceof tr)&&"temporaryProof"in e&&"phoneNumber"in e)return dr.credentialFromResult(t);const r=e.providerId;if(!r||r===sa.PASSWORD)return null;let n;switch(r){case sa.GOOGLE:n=Rr;break;case sa.FACEBOOK:n=Cr;break;case sa.GITHUB:n=xr;break;case sa.TWITTER:n=Nr;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?r.startsWith("saml.")?qu._create(r,a):Or._fromParams({providerId:r,signInMethod:r,pendingToken:a,idToken:i,accessToken:s}):new Is(r).credential({idToken:i,accessToken:s,rawNonce:c})}return t instanceof tr?n.credentialFromError(t):n.credentialFromResult(t)}async function Lt(t,e){let r;try{r=await e}catch(s){throw s instanceof tr&&FY(t,s),s}const{operationType:n,user:i}=r;return{operationType:n,credential:MY(r),additionalUserInfo:wH(r),user:Hr.getOrCreate(i)}}async function Ov(t,e){const r=await e;return{verificationId:r.verificationId,confirm:n=>Lt(t,r.confirm(n))}}class UY{constructor(e,r){this.resolver=r,this.auth=LY(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Lt(BT(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Hr{constructor(e){this._delegate=e,this.multiFactor=SH(e)}static getOrCreate(e){return Hr.USER_MAP.has(e)||Hr.USER_MAP.set(e,new Hr(e)),Hr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Lt(this.auth,cT(this._delegate,e))}async linkWithPhoneNumber(e,r){return Ov(this.auth,n3(this._delegate,e,r))}async linkWithPopup(e){return Lt(this.auth,f3(this._delegate,e,mn))}async linkWithRedirect(e){return await Av(rt(this.auth)),_3(this._delegate,e,mn)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Lt(this.auth,uT(this._delegate,e))}reauthenticateWithPhoneNumber(e,r){return Ov(this.auth,i3(this._delegate,e,r))}reauthenticateWithPopup(e){return Lt(this.auth,h3(this._delegate,e,mn))}async reauthenticateWithRedirect(e){return await Av(rt(this.auth)),w3(this._delegate,e,mn)}sendEmailVerification(e){return cH(this._delegate,e)}async unlink(e){return await HK(this._delegate,e),this}updateEmail(e){return fH(this._delegate,e)}updatePassword(e){return dH(this._delegate,e)}updatePhoneNumber(e){return s3(this._delegate,e)}updateProfile(e){return hH(this._delegate,e)}verifyBeforeUpdateEmail(e,r){return uH(this._delegate,e,r)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Hr.USER_MAP=new WeakMap;/**
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
 */const ma=B;class Cv{constructor(e,r){if(this.app=e,r.isInitialized()){this._delegate=r.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:n}=e.options;ma(n,"invalid-api-key",{appName:e.name});let i=[ha];if(typeof window!="undefined"){i=$Y(n,e.name);for(const o of[Zu,lv,gi])i.includes(o)||i.push(o)}ma(n,"invalid-api-key",{appName:e.name});const s=typeof window!="undefined"?mn:void 0;this._delegate=r.initialize({options:{persistence:i,popupRedirectResolver:s}}),this._delegate._updateErrorMap(nK),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Hr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,r){OK(this._delegate,e,r)}applyActionCode(e){return ZK(this._delegate,e)}checkActionCode(e){return lT(this._delegate,e)}confirmPasswordReset(e,r){return JK(this._delegate,e,r)}async createUserWithEmailAndPassword(e,r){return Lt(this._delegate,tH(this._delegate,e,r))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return aH(this._delegate,e)}isSignInWithEmailLink(e){return iH(this._delegate,e)}async getRedirectResult(){ma(Tv(),this._delegate,"operation-not-supported-in-this-environment");const e=await I3(this._delegate,mn);return e?Lt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){IY(this._delegate,e)}onAuthStateChanged(e,r,n){const{next:i,error:s,complete:o}=qT(e,r,n);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,r,n){const{next:i,error:s,complete:o}=qT(e,r,n);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,r){return nH(this._delegate,e,r)}sendPasswordResetEmail(e,r){return QK(this._delegate,e,r||void 0)}async setPersistence(e){PY(this._delegate,e);let r;switch(e){case Gt.SESSION:r=gi;break;case Gt.LOCAL:r=await Wt(Zu)._isAvailable()?Zu:lv;break;case Gt.NONE:r=ha;break;default:return lt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(r)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Lt(this._delegate,KK(this._delegate))}signInWithCredential(e){return Lt(this._delegate,Gu(this._delegate,e))}signInWithCustomToken(e){return Lt(this._delegate,XK(this._delegate,e))}signInWithEmailAndPassword(e,r){return Lt(this._delegate,rH(this._delegate,e,r))}signInWithEmailLink(e,r){return Lt(this._delegate,sH(this._delegate,e,r))}signInWithPhoneNumber(e,r){return Ov(this._delegate,r3(this._delegate,e,r))}async signInWithPopup(e){return ma(Tv(),this._delegate,"operation-not-supported-in-this-environment"),Lt(this._delegate,l3(this._delegate,e,mn))}async signInWithRedirect(e){return ma(Tv(),this._delegate,"operation-not-supported-in-this-environment"),await Av(this._delegate),m3(this._delegate,e,mn)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return eH(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Cv.Persistence=Gt;function qT(t,e,r){let n=t;typeof t!="function"&&({next:n,error:e,complete:r}=t);const i=n;return{next:o=>i(o&&Hr.getOrCreate(o)),error:e,complete:r}}/**
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
 */class Rv{constructor(){this.providerId="phone",this._delegate=new dr(BT(ia.auth()))}static credential(e,r){return dr.credential(e,r)}verifyPhoneNumber(e,r){return this._delegate.verifyPhoneNumber(e,r)}unwrap(){return this._delegate}}Rv.PHONE_SIGN_IN_METHOD=dr.PHONE_SIGN_IN_METHOD;Rv.PROVIDER_ID=dr.PROVIDER_ID;/**
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
 */const jY=B;class BY{constructor(e,r,n=ia.app()){var i;jY((i=n.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new e3(e,r,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const VY="auth-compat";function qY(t){t.INTERNAL.registerComponent(new qr(VY,e=>{const r=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new Cv(r,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ms.EMAIL_SIGNIN,PASSWORD_RESET:ms.PASSWORD_RESET,RECOVER_EMAIL:ms.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ms.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ms.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ms.VERIFY_EMAIL}},EmailAuthProvider:vn,FacebookAuthProvider:Cr,GithubAuthProvider:xr,GoogleAuthProvider:Rr,OAuthProvider:Is,PhoneAuthProvider:Rv,PhoneMultiFactorGenerator:PT,RecaptchaVerifier:BY,TwitterAuthProvider:Nr,Auth:Cv,AuthCredential:_s,Error:tr}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(SY,TY)}qY(ia);var zY=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},X,xv=xv||{},le=zY||self;function ol(){}function Nv(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ya(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function WY(t){return Object.prototype.hasOwnProperty.call(t,kv)&&t[kv]||(t[kv]=++GY)}var kv="closure_uid_"+(1e9*Math.random()>>>0),GY=0;function KY(t,e,r){return t.call.apply(t.bind,arguments)}function HY(t,e,r){if(!t)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ft(t,e,r){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ft=KY:ft=HY,ft.apply(null,arguments)}function al(t,e){var r=Array.prototype.slice.call(arguments,1);return function(){var n=r.slice();return n.push.apply(n,arguments),t.apply(this,n)}}function dt(t,e){function r(){}r.prototype=e.prototype,t.Z=e.prototype,t.prototype=new r,t.prototype.constructor=t,t.Vb=function(n,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(n,o)}}function yn(){this.s=this.s,this.o=this.o}var YY=0,XY={};yn.prototype.s=!1;yn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),YY!=0)){var t=WY(this);delete XY[t]}};yn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const zT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let r=0;r<t.length;r++)if(r in t&&t[r]===e)return r;return-1},WT=Array.prototype.forEach?function(t,e,r){Array.prototype.forEach.call(t,e,r)}:function(t,e,r){const n=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)s in i&&e.call(r,i[s],s,t)};function QY(t){e:{var e=V4;const r=t.length,n=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)if(i in n&&e.call(void 0,n[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function GT(t){return Array.prototype.concat.apply([],arguments)}function Pv(t){const e=t.length;if(0<e){const r=Array(e);for(let n=0;n<e;n++)r[n]=t[n];return r}return[]}function cl(t){return/^[\s\xa0]*$/.test(t)}var KT=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ct(t,e){return t.indexOf(e)!=-1}function $v(t,e){return t<e?-1:t>e?1:0}var Rt;e:{var HT=le.navigator;if(HT){var YT=HT.userAgent;if(YT){Rt=YT;break e}}Rt=""}function Dv(t,e,r){for(const n in t)e.call(r,t[n],n,t)}function XT(t){const e={};for(const r in t)e[r]=t[r];return e}var QT="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function JT(t,e){let r,n;for(let i=1;i<arguments.length;i++){n=arguments[i];for(r in n)t[r]=n[r];for(let s=0;s<QT.length;s++)r=QT[s],Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}}function Lv(t){return Lv[" "](t),t}Lv[" "]=ol;function JY(t){var e=t4;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ZY=Ct(Rt,"Opera"),Ts=Ct(Rt,"Trident")||Ct(Rt,"MSIE"),ZT=Ct(Rt,"Edge"),Mv=ZT||Ts,e0=Ct(Rt,"Gecko")&&!(Ct(Rt.toLowerCase(),"webkit")&&!Ct(Rt,"Edge"))&&!(Ct(Rt,"Trident")||Ct(Rt,"MSIE"))&&!Ct(Rt,"Edge"),e4=Ct(Rt.toLowerCase(),"webkit")&&!Ct(Rt,"Edge");function t0(){var t=le.document;return t?t.documentMode:void 0}var ul;e:{var Fv="",Uv=function(){var t=Rt;if(e0)return/rv:([^\);]+)(\)|;)/.exec(t);if(ZT)return/Edge\/([\d\.]+)/.exec(t);if(Ts)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(e4)return/WebKit\/(\S+)/.exec(t);if(ZY)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Uv&&(Fv=Uv?Uv[1]:""),Ts){var jv=t0();if(jv!=null&&jv>parseFloat(Fv)){ul=String(jv);break e}}ul=Fv}var t4={};function r4(){return JY(function(){let t=0;const e=KT(String(ul)).split("."),r=KT("9").split("."),n=Math.max(e.length,r.length);for(let o=0;t==0&&o<n;o++){var i=e[o]||"",s=r[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=$v(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||$v(i[2].length==0,s[2].length==0)||$v(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Bv;if(le.document&&Ts){var r0=t0();Bv=r0||parseInt(ul,10)||void 0}else Bv=void 0;var n4=Bv,i4=function(){if(!le.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{le.addEventListener("test",ol,e),le.removeEventListener("test",ol,e)}catch(r){}return t}();function _t(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}_t.prototype.h=function(){this.defaultPrevented=!0};function wa(t,e){if(_t.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var r=this.type=t.type,n=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(e0){e:{try{Lv(e.nodeName);var i=!0;break e}catch(s){}i=!1}i||(e=null)}}else r=="mouseover"?e=t.fromElement:r=="mouseout"&&(e=t.toElement);this.relatedTarget=e,n?(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:s4[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&wa.Z.h.call(this)}}dt(wa,_t);var s4={2:"touch",3:"pen",4:"mouse"};wa.prototype.h=function(){wa.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ba="closure_listenable_"+(1e6*Math.random()|0),o4=0;function a4(t,e,r,n,i){this.listener=t,this.proxy=null,this.src=e,this.type=r,this.capture=!!n,this.ia=i,this.key=++o4,this.ca=this.fa=!1}function ll(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function hl(t){this.src=t,this.g={},this.h=0}hl.prototype.add=function(t,e,r,n,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=qv(t,e,n,i);return-1<o?(e=t[o],r||(e.fa=!1)):(e=new a4(e,this.src,s,!!n,i),e.fa=r,t.push(e)),e};function Vv(t,e){var r=e.type;if(r in t.g){var n=t.g[r],i=zT(n,e),s;(s=0<=i)&&Array.prototype.splice.call(n,i,1),s&&(ll(e),t.g[r].length==0&&(delete t.g[r],t.h--))}}function qv(t,e,r,n){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!r&&s.ia==n)return i}return-1}var zv="closure_lm_"+(1e6*Math.random()|0),Wv={};function n0(t,e,r,n,i){if(n&&n.once)return s0(t,e,r,n,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)n0(t,e[s],r,n,i);return null}return r=Yv(r),t&&t[ba]?t.N(e,r,ya(n)?!!n.capture:!!n,i):i0(t,e,r,!1,n,i)}function i0(t,e,r,n,i,s){if(!e)throw Error("Invalid event type");var o=ya(i)?!!i.capture:!!i,a=Kv(t);if(a||(t[zv]=a=new hl(t)),r=a.add(e,r,n,o,s),r.proxy)return r;if(n=c4(),r.proxy=n,n.src=t,n.listener=r,t.addEventListener)i4||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),n,i);else if(t.attachEvent)t.attachEvent(a0(e.toString()),n);else if(t.addListener&&t.removeListener)t.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return r}function c4(){function t(r){return e.call(t.src,t.listener,r)}var e=u4;return t}function s0(t,e,r,n,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)s0(t,e[s],r,n,i);return null}return r=Yv(r),t&&t[ba]?t.O(e,r,ya(n)?!!n.capture:!!n,i):i0(t,e,r,!0,n,i)}function o0(t,e,r,n,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)o0(t,e[s],r,n,i);else n=ya(n)?!!n.capture:!!n,r=Yv(r),t&&t[ba]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],r=qv(s,r,n,i),-1<r&&(ll(s[r]),Array.prototype.splice.call(s,r,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Kv(t))&&(e=t.g[e.toString()],t=-1,e&&(t=qv(e,r,n,i)),(r=-1<t?e[t]:null)&&Gv(r))}function Gv(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[ba])Vv(e.i,t);else{var r=t.type,n=t.proxy;e.removeEventListener?e.removeEventListener(r,n,t.capture):e.detachEvent?e.detachEvent(a0(r),n):e.addListener&&e.removeListener&&e.removeListener(n),(r=Kv(e))?(Vv(r,t),r.h==0&&(r.src=null,e[zv]=null)):ll(t)}}}function a0(t){return t in Wv?Wv[t]:Wv[t]="on"+t}function u4(t,e){if(t.ca)t=!0;else{e=new wa(e,this);var r=t.listener,n=t.ia||t.src;t.fa&&Gv(t),t=r.call(n,e)}return t}function Kv(t){return t=t[zv],t instanceof hl?t:null}var Hv="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yv(t){return typeof t=="function"?t:(t[Hv]||(t[Hv]=function(e){return t.handleEvent(e)}),t[Hv])}function nt(){yn.call(this),this.i=new hl(this),this.P=this,this.I=null}dt(nt,yn);nt.prototype[ba]=!0;nt.prototype.removeEventListener=function(t,e,r,n){o0(this,t,e,r,n)};function pt(t,e){var r,n=t.I;if(n)for(r=[];n;n=n.I)r.push(n);if(t=t.P,n=e.type||e,typeof e=="string")e=new _t(e,t);else if(e instanceof _t)e.target=e.target||t;else{var i=e;e=new _t(n,t),JT(e,i)}if(i=!0,r)for(var s=r.length-1;0<=s;s--){var o=e.g=r[s];i=fl(o,n,!0,e)&&i}if(o=e.g=t,i=fl(o,n,!0,e)&&i,i=fl(o,n,!1,e)&&i,r)for(s=0;s<r.length;s++)o=e.g=r[s],i=fl(o,n,!1,e)&&i}nt.prototype.M=function(){if(nt.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var r=t.g[e],n=0;n<r.length;n++)ll(r[n]);delete t.g[e],t.h--}}this.I=null};nt.prototype.N=function(t,e,r,n){return this.i.add(String(t),e,!1,r,n)};nt.prototype.O=function(t,e,r,n){return this.i.add(String(t),e,!0,r,n)};function fl(t,e,r,n){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==r){var a=o.listener,c=o.ia||o.src;o.fa&&Vv(t.i,o),i=a.call(c,n)!==!1&&i}}return i&&!n.defaultPrevented}var Xv=le.JSON.stringify;function l4(){var t=u0;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class h4{constructor(){this.h=this.g=null}add(e,r){const n=c0.get();n.set(e,r),this.h?this.h.next=n:this.g=n,this.h=n}}var c0=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new f4,t=>t.reset());class f4{constructor(){this.next=this.g=this.h=null}set(e,r){this.h=e,this.g=r,this.next=null}reset(){this.next=this.g=this.h=null}}function d4(t){le.setTimeout(()=>{throw t},0)}function Qv(t,e){Jv||p4(),Zv||(Jv(),Zv=!0),u0.add(t,e)}var Jv;function p4(){var t=le.Promise.resolve(void 0);Jv=function(){t.then(v4)}}var Zv=!1,u0=new h4;function v4(){for(var t;t=l4();){try{t.h.call(t.g)}catch(r){d4(r)}var e=c0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Zv=!1}function dl(t,e){nt.call(this),this.h=t||1,this.g=e||le,this.j=ft(this.kb,this),this.l=Date.now()}dt(dl,nt);X=dl.prototype;X.da=!1;X.S=null;X.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),pt(this,"tick"),this.da&&(eg(this),this.start()))}};X.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function eg(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}X.M=function(){dl.Z.M.call(this),eg(this),delete this.g};function tg(t,e,r){if(typeof t=="function")r&&(t=ft(t,r));else if(t&&typeof t.handleEvent=="function")t=ft(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:le.setTimeout(t,e||0)}function l0(t){t.g=tg(()=>{t.g=null,t.i&&(t.i=!1,l0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class g4 extends yn{constructor(e,r){super();this.m=e,this.j=r,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:l0(this)}M(){super.M(),this.g&&(le.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _a(t){yn.call(this),this.h=t,this.g={}}dt(_a,yn);var h0=[];function f0(t,e,r,n){Array.isArray(r)||(r&&(h0[0]=r.toString()),r=h0);for(var i=0;i<r.length;i++){var s=n0(e,r[i],n||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function d0(t){Dv(t.g,function(e,r){this.g.hasOwnProperty(r)&&Gv(e)},t),t.g={}}_a.prototype.M=function(){_a.Z.M.call(this),d0(this)};_a.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function pl(){this.g=!0}pl.prototype.Aa=function(){this.g=!1};function m4(t,e,r,n,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+n+") [attempt "+i+"]: "+e+`
`+r+`
`+o})}function y4(t,e,r,n,i,s,o){t.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+i+"]: "+e+`
`+r+`
`+s+" "+o})}function As(t,e,r,n){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+b4(t,r)+(n?" "+n:"")})}function w4(t,e){t.info(function(){return"TIMEOUT: "+e})}pl.prototype.info=function(){};function b4(t,e){if(!t.g)return e;if(!e)return null;try{var r=JSON.parse(e);if(r){for(t=0;t<r.length;t++)if(Array.isArray(r[t])){var n=r[t];if(!(2>n.length)){var i=n[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Xv(r)}catch(a){return e}}var wi={},p0=null;function vl(){return p0=p0||new nt}wi.Ma="serverreachability";function v0(t){_t.call(this,wi.Ma,t)}dt(v0,_t);function Ea(t){const e=vl();pt(e,new v0(e,t))}wi.STAT_EVENT="statevent";function g0(t,e){_t.call(this,wi.STAT_EVENT,t),this.stat=e}dt(g0,_t);function xt(t){const e=vl();pt(e,new g0(e,t))}wi.Na="timingevent";function m0(t,e){_t.call(this,wi.Na,t),this.size=e}dt(m0,_t);function Ia(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return le.setTimeout(function(){t()},e)}var gl={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},y0={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function rg(){}rg.prototype.h=null;function w0(t){return t.h||(t.h=t.i())}function b0(){}var Sa={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ng(){_t.call(this,"d")}dt(ng,_t);function ig(){_t.call(this,"c")}dt(ig,_t);var sg;function ml(){}dt(ml,rg);ml.prototype.g=function(){return new XMLHttpRequest};ml.prototype.i=function(){return{}};sg=new ml;function Ta(t,e,r,n){this.l=t,this.j=e,this.m=r,this.X=n||1,this.V=new _a(this),this.P=_4,t=Mv?125:void 0,this.W=new dl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new _0}function _0(){this.i=null,this.g="",this.h=!1}var _4=45e3,og={},yl={};X=Ta.prototype;X.setTimeout=function(t){this.P=t};function ag(t,e,r){t.K=1,t.v=Il(Yr(e)),t.s=r,t.U=!0,E0(t,null)}function E0(t,e){t.F=Date.now(),Aa(t),t.A=Yr(t.v);var r=t.A,n=t.X;Array.isArray(n)||(n=[String(n)]),N0(r.h,"t",n),t.C=0,r=t.l.H,t.h=new _0,t.g=eA(t.l,r?e:null,!t.s),0<t.O&&(t.L=new g4(ft(t.Ia,t,t.g),t.O)),f0(t.V,t.g,"readystatechange",t.gb),e=t.H?XT(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ea(1),m4(t.j,t.u,t.A,t.m,t.X,t.s)}X.gb=function(t){t=t.target;const e=this.L;e&&Xr(t)==3?e.l():this.Ia(t)};X.Ia=function(t){try{if(t==this.g)e:{const l=Xr(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||Mv||this.g&&(this.h.h||this.g.ga()||q0(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Ea(3):Ea(2)),wl(this);var r=this.g.ba();this.N=r;t:if(I0(this)){var n=q0(this.g);t="";var i=n.length,s=Xr(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){bi(this),Oa(this);var o="";break t}this.h.i=new le.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(n[e],{stream:s&&e==i-1});n.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=r==200,y4(this.j,this.u,this.A,this.m,this.X,l,r),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!cl(a)){var u=a;break t}}u=null}if(r=u)As(this.j,this.m,r,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,cg(this,r);else{this.i=!1,this.o=3,xt(12),bi(this),Oa(this);break e}}this.U?(S0(this,l,o),Mv&&this.i&&l==3&&(f0(this.V,this.W,"tick",this.fb),this.W.start())):(As(this.j,this.m,o,null),cg(this,o)),l==4&&bi(this),this.i&&!this.I&&(l==4?X0(this.l,this):(this.i=!1,Aa(this)))}else r==400&&0<o.indexOf("Unknown SID")?(this.o=3,xt(12)):(this.o=0,xt(13)),bi(this),Oa(this)}}}catch(l){}finally{}};function I0(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function S0(t,e,r){let n=!0,i;for(;!t.I&&t.C<r.length;)if(i=E4(t,r),i==yl){e==4&&(t.o=4,xt(14),n=!1),As(t.j,t.m,null,"[Incomplete Response]");break}else if(i==og){t.o=4,xt(15),As(t.j,t.m,r,"[Invalid Chunk]"),n=!1;break}else As(t.j,t.m,i,null),cg(t,i);I0(t)&&i!=yl&&i!=og&&(t.h.g="",t.C=0),e!=4||r.length!=0||t.h.h||(t.o=1,xt(16),n=!1),t.i=t.i&&n,n?0<r.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+r.length),wg(e),e.L=!0,xt(11))):(As(t.j,t.m,r,"[Invalid Chunked Response]"),bi(t),Oa(t))}X.fb=function(){if(this.g){var t=Xr(this.g),e=this.g.ga();this.C<e.length&&(wl(this),S0(this,t,e),this.i&&t!=4&&Aa(this))}};function E4(t,e){var r=t.C,n=e.indexOf(`
`,r);return n==-1?yl:(r=Number(e.substring(r,n)),isNaN(r)?og:(n+=1,n+r>e.length?yl:(e=e.substr(n,r),t.C=n+r,e)))}X.cancel=function(){this.I=!0,bi(this)};function Aa(t){t.Y=Date.now()+t.P,T0(t,t.P)}function T0(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ia(ft(t.eb,t),e)}function wl(t){t.B&&(le.clearTimeout(t.B),t.B=null)}X.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(w4(this.j,this.A),this.K!=2&&(Ea(3),xt(17)),bi(this),this.o=2,Oa(this)):T0(this,this.Y-t)};function Oa(t){t.l.G==0||t.I||X0(t.l,t)}function bi(t){wl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,eg(t.W),d0(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function cg(t,e){try{var r=t.l;if(r.G!=0&&(r.g==t||hg(r.i,t))){if(r.I=t.N,!t.J&&hg(r.i,t)&&r.G==3){try{var n=r.Ca.g.parse(e)}catch(u){n=null}if(Array.isArray(n)&&n.length==3){var i=n;if(i[0]==0)e:if(!r.u){if(r.g)if(r.g.F+3e3<t.F)Rl(r),Ol(r);else break e;yg(r),xt(18)}else r.ta=i[1],0<r.ta-r.U&&37500>i[2]&&r.N&&r.A==0&&!r.v&&(r.v=Ia(ft(r.ab,r),6e3));if(1>=$0(r.i)&&r.ka){try{r.ka()}catch(u){}r.ka=void 0}}else Ii(r,11)}else if((t.J||r.g==t)&&Rl(r),!cl(e))for(i=r.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(r.U=u[0],u=u[1],r.G==2)if(u[0]=="c"){r.J=u[1],r.la=u[2];const l=u[3];l!=null&&(r.ma=l,r.h.info("VER="+r.ma));const h=u[4];h!=null&&(r.za=h,r.h.info("SVER="+r.za));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(n=1.5*f,r.K=n,r.h.info("backChannelRequestTimeoutMs_="+n)),n=r;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=n.i;!s.g&&(Ct(g,"spdy")||Ct(g,"quic")||Ct(g,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(fg(s,s.h),s.h=null))}if(n.D){const I=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(n.sa=I,Ne(n.F,n.D,I))}}r.G=3,r.j&&r.j.xa(),r.$&&(r.O=Date.now()-t.F,r.h.info("Handshake RTT: "+r.O+"ms")),n=r;var o=t;if(n.oa=Z0(n,n.H?n.la:null,n.W),o.J){D0(n.i,o);var a=o,c=n.K;c&&a.setTimeout(c),a.B&&(wl(a),Aa(a)),n.g=o}else H0(n);0<r.l.length&&Cl(r)}else u[0]!="stop"&&u[0]!="close"||Ii(r,7);else r.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ii(r,7):gg(r):u[0]!="noop"&&r.j&&r.j.wa(u),r.A=0)}}Ea(4)}catch(u){}}function I4(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Nv(t)){for(var e=[],r=t.length,n=0;n<r;n++)e.push(t[n]);return e}e=[],r=0;for(n in t)e[r++]=t[n];return e}function ug(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Nv(t)||typeof t=="string")WT(t,e,void 0);else{if(t.T&&typeof t.T=="function")var r=t.T();else if(t.R&&typeof t.R=="function")r=void 0;else if(Nv(t)||typeof t=="string"){r=[];for(var n=t.length,i=0;i<n;i++)r.push(i)}else for(i in r=[],n=0,t)r[n++]=i;n=I4(t),i=n.length;for(var s=0;s<i;s++)e.call(void 0,n[s],r&&r[s],t)}}function Os(t,e){this.h={},this.g=[],this.i=0;var r=arguments.length;if(1<r){if(r%2)throw Error("Uneven number of arguments");for(var n=0;n<r;n+=2)this.set(arguments[n],arguments[n+1])}else if(t)if(t instanceof Os)for(r=t.T(),n=0;n<r.length;n++)this.set(r[n],t.get(r[n]));else for(n in t)this.set(n,t[n])}X=Os.prototype;X.R=function(){lg(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};X.T=function(){return lg(this),this.g.concat()};function lg(t){if(t.i!=t.g.length){for(var e=0,r=0;e<t.g.length;){var n=t.g[e];_i(t.h,n)&&(t.g[r++]=n),e++}t.g.length=r}if(t.i!=t.g.length){var i={};for(r=e=0;e<t.g.length;)n=t.g[e],_i(i,n)||(t.g[r++]=n,i[n]=1),e++;t.g.length=r}}X.get=function(t,e){return _i(this.h,t)?this.h[t]:e};X.set=function(t,e){_i(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};X.forEach=function(t,e){for(var r=this.T(),n=0;n<r.length;n++){var i=r[n],s=this.get(i);t.call(e,s,i,this)}};function _i(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var A0=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function S4(t,e){if(t){t=t.split("&");for(var r=0;r<t.length;r++){var n=t[r].indexOf("="),i=null;if(0<=n){var s=t[r].substring(0,n);i=t[r].substring(n+1)}else s=t[r];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ei(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ei){this.g=e!==void 0?e:t.g,bl(this,t.j),this.s=t.s,_l(this,t.i),El(this,t.m),this.l=t.l,e=t.h;var r=new xa;r.i=e.i,e.g&&(r.g=new Os(e.g),r.h=e.h),O0(this,r),this.o=t.o}else t&&(r=String(t).match(A0))?(this.g=!!e,bl(this,r[1]||"",!0),this.s=Ca(r[2]||""),_l(this,r[3]||"",!0),El(this,r[4]),this.l=Ca(r[5]||"",!0),O0(this,r[6]||"",!0),this.o=Ca(r[7]||"")):(this.g=!!e,this.h=new xa(null,this.g))}Ei.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ra(e,C0,!0),":");var r=this.i;return(r||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ra(e,C0,!0),"@"),t.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r=this.m,r!=null&&t.push(":",String(r))),(r=this.l)&&(this.i&&r.charAt(0)!="/"&&t.push("/"),t.push(Ra(r,r.charAt(0)=="/"?R4:C4,!0))),(r=this.h.toString())&&t.push("?",r),(r=this.o)&&t.push("#",Ra(r,N4)),t.join("")};function Yr(t){return new Ei(t)}function bl(t,e,r){t.j=r?Ca(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function _l(t,e,r){t.i=r?Ca(e,!0):e}function El(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function O0(t,e,r){e instanceof xa?(t.h=e,k4(t.h,t.g)):(r||(e=Ra(e,x4)),t.h=new xa(e,t.g))}function Ne(t,e,r){t.h.set(e,r)}function Il(t){return Ne(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function T4(t){return t instanceof Ei?Yr(t):new Ei(t,void 0)}function A4(t,e,r,n){var i=new Ei(null,void 0);return t&&bl(i,t),e&&_l(i,e),r&&El(i,r),n&&(i.l=n),i}function Ca(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ra(t,e,r){return typeof t=="string"?(t=encodeURI(t).replace(e,O4),r&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function O4(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var C0=/[#\/\?@]/g,C4=/[#\?:]/g,R4=/[#\?]/g,x4=/[#\?@]/g,N4=/#/g;function xa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function wn(t){t.g||(t.g=new Os,t.h=0,t.i&&S4(t.i,function(e,r){t.add(decodeURIComponent(e.replace(/\+/g," ")),r)}))}X=xa.prototype;X.add=function(t,e){wn(this),this.i=null,t=Cs(this,t);var r=this.g.get(t);return r||this.g.set(t,r=[]),r.push(e),this.h+=1,this};function R0(t,e){wn(t),e=Cs(t,e),_i(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,_i(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&lg(t)))}function x0(t,e){return wn(t),e=Cs(t,e),_i(t.g.h,e)}X.forEach=function(t,e){wn(this),this.g.forEach(function(r,n){WT(r,function(i){t.call(e,i,n,this)},this)},this)};X.T=function(){wn(this);for(var t=this.g.R(),e=this.g.T(),r=[],n=0;n<e.length;n++)for(var i=t[n],s=0;s<i.length;s++)r.push(e[n]);return r};X.R=function(t){wn(this);var e=[];if(typeof t=="string")x0(this,t)&&(e=GT(e,this.g.get(Cs(this,t))));else{t=this.g.R();for(var r=0;r<t.length;r++)e=GT(e,t[r])}return e};X.set=function(t,e){return wn(this),this.i=null,t=Cs(this,t),x0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};X.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function N0(t,e,r){R0(t,e),0<r.length&&(t.i=null,t.g.set(Cs(t,e),Pv(r)),t.h+=r.length)}X.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),r=0;r<e.length;r++){var n=e[r],i=encodeURIComponent(String(n));n=this.R(n);for(var s=0;s<n.length;s++){var o=i;n[s]!==""&&(o+="="+encodeURIComponent(String(n[s]))),t.push(o)}}return this.i=t.join("&")};function Cs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function k4(t,e){e&&!t.j&&(wn(t),t.i=null,t.g.forEach(function(r,n){var i=n.toLowerCase();n!=i&&(R0(this,n),N0(this,i,r))},t)),t.j=e}var P4=class{constructor(t,e){this.h=t,this.g=e}};function k0(t){this.l=t||$4,le.PerformanceNavigationTiming?(t=le.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(le.g&&le.g.Ea&&le.g.Ea()&&le.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var $4=10;function P0(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function $0(t){return t.h?1:t.g?t.g.size:0}function hg(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function fg(t,e){t.g?t.g.add(e):t.h=e}function D0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}k0.prototype.cancel=function(){if(this.i=L0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function L0(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const r of t.g.values())e=e.concat(r.D);return e}return Pv(t.i)}function dg(){}dg.prototype.stringify=function(t){return le.JSON.stringify(t,void 0)};dg.prototype.parse=function(t){return le.JSON.parse(t,void 0)};function D4(){this.g=new dg}function L4(t,e,r){const n=r||"";try{ug(t,function(i,s){let o=i;ya(i)&&(o=Xv(i)),e.push(n+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(n+"type="+encodeURIComponent("_badmap")),i}}function M4(t,e){const r=new pl;if(le.Image){const n=new Image;n.onload=al(Sl,r,n,"TestLoadImage: loaded",!0,e),n.onerror=al(Sl,r,n,"TestLoadImage: error",!1,e),n.onabort=al(Sl,r,n,"TestLoadImage: abort",!1,e),n.ontimeout=al(Sl,r,n,"TestLoadImage: timeout",!1,e),le.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=t}else e(!1)}function Sl(t,e,r,n,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(n)}catch(s){}}function Na(t){this.l=t.$b||null,this.j=t.ib||!1}dt(Na,rg);Na.prototype.g=function(){return new Tl(this.l,this.j)};Na.prototype.i=function(t){return function(){return t}}({});function Tl(t,e){nt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=pg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}dt(Tl,nt);var pg=0;X=Tl.prototype;X.open=function(t,e){if(this.readyState!=pg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Pa(this)};X.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||le).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};X.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ka(this)),this.readyState=pg};X.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Pa(this)),this.g&&(this.readyState=3,Pa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof le.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;M0(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function M0(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}X.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ka(this):Pa(this),this.readyState==3&&M0(this)}};X.Ua=function(t){this.g&&(this.response=this.responseText=t,ka(this))};X.Ta=function(t){this.g&&(this.response=t,ka(this))};X.ha=function(){this.g&&ka(this)};function ka(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Pa(t)}X.setRequestHeader=function(t,e){this.v.append(t,e)};X.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};X.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var r=e.next();!r.done;)r=r.value,t.push(r[0]+": "+r[1]),r=e.next();return t.join(`\r
`)};function Pa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Tl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var F4=le.JSON.parse;function ze(t){nt.call(this),this.headers=new Os,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=F0,this.K=this.L=!1}dt(ze,nt);var F0="",U4=/^https?$/i,j4=["POST","PUT"];X=ze.prototype;X.ea=function(t,e,r,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():sg.g(),this.C=this.u?w0(this.u):w0(sg),this.g.onreadystatechange=ft(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){U0(this,s);return}t=r||"";const i=new Os(this.headers);n&&ug(n,function(s,o){i.set(o,s)}),n=QY(i.T()),r=le.FormData&&t instanceof le.FormData,!(0<=zT(j4,e))||n||r||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{V0(this),0<this.B&&((this.K=B4(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ft(this.pa,this)):this.A=tg(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){U0(this,s)}};function B4(t){return Ts&&r4()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function V4(t){return t.toLowerCase()=="content-type"}X.pa=function(){typeof xv!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,pt(this,"timeout"),this.abort(8))};function U0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,j0(t),Al(t)}function j0(t){t.D||(t.D=!0,pt(t,"complete"),pt(t,"error"))}X.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,pt(this,"complete"),pt(this,"abort"),Al(this))};X.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Al(this,!0)),ze.Z.M.call(this)};X.Fa=function(){this.s||(this.F||this.v||this.l?B0(this):this.cb())};X.cb=function(){B0(this)};function B0(t){if(t.h&&typeof xv!="undefined"&&(!t.C[1]||Xr(t)!=4||t.ba()!=2)){if(t.v&&Xr(t)==4)tg(t.Fa,0,t);else if(pt(t,"readystatechange"),Xr(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var r;if(!(r=e)){var n;if(n=a===0){var i=String(t.H).match(A0)[1]||null;if(!i&&le.self&&le.self.location){var s=le.self.location.protocol;i=s.substr(0,s.length-1)}n=!U4.test(i?i.toLowerCase():"")}r=n}if(r)pt(t,"complete"),pt(t,"success");else{t.m=6;try{var o=2<Xr(t)?t.g.statusText:""}catch(c){o=""}t.j=o+" ["+t.ba()+"]",j0(t)}}finally{Al(t)}}}}function Al(t,e){if(t.g){V0(t);const r=t.g,n=t.C[0]?ol:null;t.g=null,t.C=null,e||pt(t,"ready");try{r.onreadystatechange=n}catch(i){}}}function V0(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(le.clearTimeout(t.A),t.A=null)}function Xr(t){return t.g?t.g.readyState:0}X.ba=function(){try{return 2<Xr(this)?this.g.status:-1}catch(t){return-1}};X.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}};X.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),F4(e)}};function q0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case F0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}X.Da=function(){return this.m};X.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function q4(t){let e="";return Dv(t,function(r,n){e+=n,e+=":",e+=r,e+=`\r
`}),e}function vg(t,e,r){e:{for(n in r){var n=!1;break e}n=!0}n||(r=q4(r),typeof t=="string"?r!=null&&encodeURIComponent(String(r)):Ne(t,e,r))}function $a(t,e,r){return r&&r.internalChannelParams&&r.internalChannelParams[t]||e}function z0(t){this.za=0,this.l=[],this.h=new pl,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=$a("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=$a("baseRetryDelayMs",5e3,t),this.$a=$a("retryDelaySeedMs",1e4,t),this.Ya=$a("forwardChannelMaxRetries",2,t),this.ra=$a("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new k0(t&&t.concurrentRequestLimit),this.Ca=new D4,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}X=z0.prototype;X.ma=8;X.G=1;function gg(t){if(W0(t),t.G==3){var e=t.V++,r=Yr(t.F);Ne(r,"SID",t.J),Ne(r,"RID",e),Ne(r,"TYPE","terminate"),Da(t,r),e=new Ta(t,t.h,e,void 0),e.K=2,e.v=Il(Yr(r)),r=!1,le.navigator&&le.navigator.sendBeacon&&(r=le.navigator.sendBeacon(e.v.toString(),"")),!r&&le.Image&&(new Image().src=e.v,r=!0),r||(e.g=eA(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Aa(e)}J0(t)}X.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}};function Ol(t){t.g&&(wg(t),t.g.cancel(),t.g=null)}function W0(t){Ol(t),t.u&&(le.clearTimeout(t.u),t.u=null),Rl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&le.clearTimeout(t.m),t.m=null)}function mg(t,e){t.l.push(new P4(t.Za++,e)),t.G==3&&Cl(t)}function Cl(t){P0(t.i)||t.m||(t.m=!0,Qv(t.Ha,t),t.C=0)}function z4(t,e){return $0(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Ia(ft(t.Ha,t,e),Q0(t,t.C)),t.C++,!0)}X.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Ta(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=XT(s),JT(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,r=0;r<this.l.length;r++){t:{var n=this.l[r];if("__data__"in n.g&&(n=n.g.__data__,typeof n=="string")){n=n.length;break t}n=void 0}if(n===void 0)break;if(e+=n,4096<e){e=r;break e}if(e===4096||r===this.l.length-1){e=r+1;break e}}e=1e3}else e=1e3;e=K0(this,i,e),r=Yr(this.F),Ne(r,"RID",t),Ne(r,"CVER",22),this.D&&Ne(r,"X-HTTP-Session-Id",this.D),Da(this,r),this.o&&s&&vg(r,this.o,s),fg(this.i,i),this.Ra&&Ne(r,"TYPE","init"),this.ja?(Ne(r,"$req",e),Ne(r,"SID","null"),i.$=!0,ag(i,r,null)):ag(i,r,e),this.G=2}}else this.G==3&&(t?G0(this,t):this.l.length==0||P0(this.i)||G0(this))};function G0(t,e){var r;e?r=e.m:r=t.V++;const n=Yr(t.F);Ne(n,"SID",t.J),Ne(n,"RID",r),Ne(n,"AID",t.U),Da(t,n),t.o&&t.s&&vg(n,t.o,t.s),r=new Ta(t,t.h,r,t.C+1),t.o===null&&(r.H=t.s),e&&(t.l=e.D.concat(t.l)),e=K0(t,r,1e3),r.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),fg(t.i,r),ag(r,n,e)}function Da(t,e){t.j&&ug({},function(r,n){Ne(e,n,r)})}function K0(t,e,r){r=Math.min(t.l.length,r);var n=t.j?ft(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+r];s==-1?0<r?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<r;c++){let u=i[c].h;const l=i[c].g;if(u-=s,0>u)s=Math.max(0,i[c].h-100),a=!1;else try{L4(l,o,"req"+u+"_")}catch(h){n&&n(l)}}if(a){n=o.join("&");break e}}}return t=t.l.splice(0,r),e.D=t,n}function H0(t){t.g||t.u||(t.Y=1,Qv(t.Ga,t),t.A=0)}function yg(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Ia(ft(t.Ga,t),Q0(t,t.A)),t.A++,!0)}X.Ga=function(){if(this.u=null,Y0(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Ia(ft(this.bb,this),t)}};X.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,xt(10),Ol(this),Y0(this))};function wg(t){t.B!=null&&(le.clearTimeout(t.B),t.B=null)}function Y0(t){t.g=new Ta(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Yr(t.oa);Ne(e,"RID","rpc"),Ne(e,"SID",t.J),Ne(e,"CI",t.N?"0":"1"),Ne(e,"AID",t.U),Da(t,e),Ne(e,"TYPE","xmlhttp"),t.o&&t.s&&vg(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var r=t.g;t=t.la,r.K=1,r.v=Il(Yr(e)),r.s=null,r.U=!0,E0(r,t)}X.ab=function(){this.v!=null&&(this.v=null,Ol(this),yg(this),xt(19))};function Rl(t){t.v!=null&&(le.clearTimeout(t.v),t.v=null)}function X0(t,e){var r=null;if(t.g==e){Rl(t),wg(t),t.g=null;var n=2}else if(hg(t.i,e))r=e.D,D0(t.i,e),n=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(n==1){r=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;n=vl(),pt(n,new m0(n,r,e,i)),Cl(t)}else H0(t);else if(i=e.o,i==3||i==0&&0<t.I||!(n==1&&z4(t,e)||n==2&&yg(t)))switch(r&&0<r.length&&(e=t.i,e.i=e.i.concat(r)),i){case 1:Ii(t,5);break;case 4:Ii(t,10);break;case 3:Ii(t,6);break;default:Ii(t,2)}}}function Q0(t,e){let r=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(r*=2),r*e}function Ii(t,e){if(t.h.info("Error code "+e),e==2){var r=null;t.j&&(r=null);var n=ft(t.jb,t);r||(r=new Ei("//www.google.com/images/cleardot.gif"),le.location&&le.location.protocol=="http"||bl(r,"https"),Il(r)),M4(r.toString(),n)}else xt(2);t.G=0,t.j&&t.j.va(e),J0(t),W0(t)}X.jb=function(t){t?(this.h.info("Successfully pinged google.com"),xt(2)):(this.h.info("Failed to ping google.com"),xt(1))};function J0(t){t.G=0,t.I=-1,t.j&&((L0(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Pv(t.l),t.l.length=0),t.j.ua())}function Z0(t,e,r){let n=T4(r);if(n.i!="")e&&_l(n,e+"."+n.i),El(n,n.m);else{const i=le.location;n=A4(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,r)}return t.aa&&Dv(t.aa,function(i,s){Ne(n,s,i)}),e=t.D,r=t.sa,e&&r&&Ne(n,e,r),Ne(n,"VER",t.ma),Da(t,n),n}function eA(t,e,r){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=r&&t.Ba&&!t.qa?new ze(new Na({ib:!0})):new ze(t.qa),e.L=t.H,e}function tA(){}X=tA.prototype;X.xa=function(){};X.wa=function(){};X.va=function(){};X.ua=function(){};X.Oa=function(){};function xl(){if(Ts&&!(10<=Number(n4)))throw Error("Environmental error: no available transport.")}xl.prototype.g=function(t,e){return new Kt(t,e)};function Kt(t,e){nt.call(this),this.g=new z0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!cl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!cl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Rs(this)}dt(Kt,nt);Kt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,r=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Qv(ft(t.hb,t,e))),xt(0),t.W=e,t.aa=r||{},t.N=t.X,t.F=Z0(t,null,t.W),Cl(t)};Kt.prototype.close=function(){gg(this.g)};Kt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,mg(this.g,e)}else this.v?(e={},e.__data__=Xv(t),mg(this.g,e)):mg(this.g,t)};Kt.prototype.M=function(){this.g.j=null,delete this.j,gg(this.g),delete this.g,Kt.Z.M.call(this)};function rA(t){ng.call(this);var e=t.__sm__;if(e){e:{for(const r in e){t=r;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}dt(rA,ng);function nA(){ig.call(this),this.status=1}dt(nA,ig);function Rs(t){this.g=t}dt(Rs,tA);Rs.prototype.xa=function(){pt(this.g,"a")};Rs.prototype.wa=function(t){pt(this.g,new rA(t))};Rs.prototype.va=function(t){pt(this.g,new nA(t))};Rs.prototype.ua=function(){pt(this.g,"b")};xl.prototype.createWebChannel=xl.prototype.g;Kt.prototype.send=Kt.prototype.u;Kt.prototype.open=Kt.prototype.m;Kt.prototype.close=Kt.prototype.close;gl.NO_ERROR=0;gl.TIMEOUT=8;gl.HTTP_ERROR=6;y0.COMPLETE="complete";b0.EventType=Sa;Sa.OPEN="a";Sa.CLOSE="b";Sa.ERROR="c";Sa.MESSAGE="d";nt.prototype.listen=nt.prototype.N;ze.prototype.listenOnce=ze.prototype.O;ze.prototype.getLastError=ze.prototype.La;ze.prototype.getLastErrorCode=ze.prototype.Da;ze.prototype.getStatus=ze.prototype.ba;ze.prototype.getResponseJson=ze.prototype.Qa;ze.prototype.getResponseText=ze.prototype.ga;ze.prototype.send=ze.prototype.ea;var W4=function(){return new xl},G4=function(){return vl()},bg=gl,K4=y0,H4=wi,iA={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Y4=Na,Nl=b0,X4=ze;/**
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
 */class vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
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
 */let xs="9.1.0";/**
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
 */const bn=new Lu("@firebase/firestore");function _g(){return bn.logLevel}function Q4(t){bn.setLogLevel(t)}function V(t,...e){if(bn.logLevel<=be.DEBUG){const r=e.map(Eg);bn.debug(`Firestore (${xs}): ${t}`,...r)}}function We(t,...e){if(bn.logLevel<=be.ERROR){const r=e.map(Eg);bn.error(`Firestore (${xs}): ${t}`,...r)}}function La(t,...e){if(bn.logLevel<=be.WARN){const r=e.map(Eg);bn.warn(`Firestore (${xs}): ${t}`,...r)}}function Eg(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch(r){return t}/**
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${xs}) INTERNAL ASSERTION FAILED: `+t;throw We(e),new Error(e)}function se(t,e){t||ee()}function J4(t,e){t||ee()}function K(t,e){return t}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Error{constructor(e,r){super(r),this.code=e,this.message=r,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class it{constructor(){this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}}/**
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
 */class sA{constructor(e,r){this.user=r,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class Z4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,r){e.enqueueRetryable(()=>r(vt.UNAUTHENTICATED))}shutdown(){}}class e6{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,r){this.changeListener=r,e.enqueueRetryable(()=>r(this.token.user))}shutdown(){this.changeListener=null}}class t6{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,r){let n=this.i;const i=c=>this.i!==n?(n=this.i,r(c)):Promise.resolve();let s=new it;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new it,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{V("FirebaseCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseCredentialsProvider","Auth not yet detected"),s.resolve(),s=new it)}},0),o()}getToken(){const e=this.i,r=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(r).then(n=>this.i!==e?(V("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(se(typeof n.accessToken=="string"),new sA(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string"),new vt(e)}}class r6{constructor(e,r,n){this.h=e,this.l=r,this.m=n,this.type="FirstParty",this.user=vt.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},r=this.h.auth.getAuthHeaderValueForFirstParty([]);return r&&(e.Authorization=r),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class n6{constructor(e,r,n){this.h=e,this.l=r,this.m=n}getToken(){return Promise.resolve(new r6(this.h,this.l,this.m))}start(e,r){e.enqueueRetryable(()=>r(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
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
 */class Ht{constructor(e,r){this.previousValue=e,r&&(r.sequenceNumberHandler=n=>this.g(n),this.p=n=>r.writeSequenceNumber(n))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
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
 */function i6(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),r=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(r);else for(let n=0;n<t;n++)r[n]=Math.floor(256*Math.random());return r}/**
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
 */Ht.T=-1;class oA{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=i6(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<r&&(n+=e.charAt(i[s]%e.length))}return n}}function ge(t,e){return t<e?-1:t>e?1:0}function Ns(t,e,r){return t.length===e.length&&t.every((n,i)=>r(n,e[i]))}function aA(t){return t+"\0"}/**
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
 */class st{constructor(e,r){if(this.seconds=e,this.nanoseconds=r,r<0)throw new M(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new M(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(e<-62135596800)throw new M(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const r=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*r));return new st(r,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class fe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new fe(e)}static min(){return new fe(new st(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function cA(t){let e=0;for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&e++;return e}function Si(t,e){for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&e(r,t[r])}function uA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ma{constructor(e,r,n){r===void 0?r=0:r>e.length&&ee(),n===void 0?n=e.length-r:n>e.length-r&&ee(),this.segments=e,this.offset=r,this.len=n}get length(){return this.len}isEqual(e){return Ma.comparator(this,e)===0}child(e){const r=this.segments.slice(this.offset,this.limit());return e instanceof Ma?e.forEach(n=>{r.push(n)}):r.push(e),this.construct(r)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}forEach(e){for(let r=this.offset,n=this.limit();r<n;r++)e(this.segments[r])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,r){const n=Math.min(e.length,r.length);for(let i=0;i<n;i++){const s=e.get(i),o=r.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<r.length?-1:e.length>r.length?1:0}}class Ee extends Ma{construct(e,r,n){return new Ee(e,r,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const r=[];for(const n of e){if(n.indexOf("//")>=0)throw new M(x.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);r.push(...n.split("/").filter(i=>i.length>0))}return new Ee(r)}static emptyPath(){return new Ee([])}}const s6=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends Ma{construct(e,r,n){return new gt(e,r,n)}static isValidIdentifier(e){return s6.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gt(["__name__"])}static fromServerFormat(e){const r=[];let n="",i=0;const s=()=>{if(n.length===0)throw new M(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);r.push(n),n=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new M(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new M(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(n+=a,i++):(s(),i++)}if(s(),o)throw new M(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(r)}static emptyPath(){return new gt([])}}/**
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
 */class ks{constructor(e){this.fields=e,e.sort(gt.comparator)}covers(e){for(const r of this.fields)if(r.isPrefixOf(e))return!0;return!1}isEqual(e){return Ns(this.fields,e.fields,(r,n)=>r.isEqual(n))}}/**
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
 */function o6(){return typeof atob!="undefined"}/**
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
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const r=atob(e);return new ot(r)}static fromUint8Array(e){const r=function(n){let i="";for(let s=0;s<n.length;++s)i+=String.fromCharCode(n[s]);return i}(e);return new ot(r)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let n=0;n<e.length;n++)r[n]=e.charCodeAt(n);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const a6=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _n(t){if(se(!!t),typeof t=="string"){let e=0;const r=a6.exec(t);if(se(!!r),r[1]){let i=r[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(t);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ps(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
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
 */function Ig(t){var e,r;return((r=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||r===void 0?void 0:r.stringValue)==="server_timestamp"}function lA(t){const e=t.mapValue.fields.__previous_value__;return Ig(e)?lA(e):e}function Fa(t){const e=_n(t.mapValue.fields.__local_write_time__.timestampValue);return new st(e.seconds,e.nanos)}/**
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
 */function Ti(t){return t==null}function kl(t){return t===0&&1/t==-1/0}function hA(t){return typeof t=="number"&&Number.isInteger(t)&&!kl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Ee.fromString(e))}static fromName(e){return new Z(Ee.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,r){return Ee.comparator(e.path,r.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Ee(e.slice()))}}/**
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
 */function Ai(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ig(t)?4:10:ee()}function kr(t,e){const r=Ai(t);if(r!==Ai(e))return!1;switch(r){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fa(t).isEqual(Fa(e));case 3:return function(n,i){if(typeof n.timestampValue=="string"&&typeof i.timestampValue=="string"&&n.timestampValue.length===i.timestampValue.length)return n.timestampValue===i.timestampValue;const s=_n(n.timestampValue),o=_n(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(n,i){return Ps(n.bytesValue).isEqual(Ps(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(n,i){return Ge(n.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(n.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)}(t,e);case 2:return function(n,i){if("integerValue"in n&&"integerValue"in i)return Ge(n.integerValue)===Ge(i.integerValue);if("doubleValue"in n&&"doubleValue"in i){const s=Ge(n.doubleValue),o=Ge(i.doubleValue);return s===o?kl(s)===kl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Ns(t.arrayValue.values||[],e.arrayValue.values||[],kr);case 10:return function(n,i){const s=n.mapValue.fields||{},o=i.mapValue.fields||{};if(cA(s)!==cA(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!kr(s[a],o[a])))return!1;return!0}(t,e);default:return ee()}}function Ua(t,e){return(t.values||[]).find(r=>kr(r,e))!==void 0}function $s(t,e){const r=Ai(t),n=Ai(e);if(r!==n)return ge(r,n);switch(r){case 0:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ge(i.integerValue||i.doubleValue),a=Ge(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return fA(t.timestampValue,e.timestampValue);case 4:return fA(Fa(t),Fa(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Ps(i),a=Ps(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=ge(o[c],a[c]);if(u!==0)return u}return ge(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ge(Ge(i.latitude),Ge(s.latitude));return o!==0?o:ge(Ge(i.longitude),Ge(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=$s(o[c],a[c]);if(u)return u}return ge(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),c=s.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=ge(a[l],u[l]);if(h!==0)return h;const f=$s(o[a[l]],c[u[l]]);if(f!==0)return f}return ge(a.length,u.length)}(t.mapValue,e.mapValue);default:throw ee()}}function fA(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const r=_n(t),n=_n(e),i=ge(r.seconds,n.seconds);return i!==0?i:ge(r.nanos,n.nanos)}function Sg(t){return Tg(t)}function Tg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=_n(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ps(t.bytesValue).toBase64():"referenceValue"in t?(r=t.referenceValue,Z.fromName(r).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(n){let i="[",s=!0;for(const o of n.values||[])s?s=!1:i+=",",i+=Tg(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Tg(n.fields[a])}`;return s+"}"}(t.mapValue):ee();var e,r}function Pl(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ag(t){return!!t&&"integerValue"in t}function Og(t){return!!t&&"arrayValue"in t}function dA(t){return!!t&&"nullValue"in t}function pA(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $l(t){return!!t&&"mapValue"in t}function ja(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Si(t.mapValue.fields,(r,n)=>e.mapValue.fields[r]=ja(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let r=0;r<(t.arrayValue.values||[]).length;++r)e.arrayValue.values[r]=ja(t.arrayValue.values[r]);return e}return Object.assign({},t)}/**
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
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let r=this.value;for(let n=0;n<e.length-1;++n)if(r=(r.mapValue.fields||{})[e.get(n)],!$l(r))return null;return r=(r.mapValue.fields||{})[e.lastSegment()],r||null}}set(e,r){this.getFieldsMap(e.popLast())[e.lastSegment()]=ja(r)}setAll(e){let r=gt.emptyPath(),n={},i=[];e.forEach((o,a)=>{if(!r.isImmediateParentOf(a)){const c=this.getFieldsMap(r);this.applyChanges(c,n,i),n={},i=[],r=a.popLast()}o?n[a.lastSegment()]=ja(o):i.push(a.lastSegment())});const s=this.getFieldsMap(r);this.applyChanges(s,n,i)}delete(e){const r=this.field(e.popLast());$l(r)&&r.mapValue.fields&&delete r.mapValue.fields[e.lastSegment()]}isEqual(e){return kr(this.value,e.value)}getFieldsMap(e){let r=this.value;r.mapValue.fields||(r.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=r.mapValue.fields[e.get(n)];$l(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},r.mapValue.fields[e.get(n)]=i),r=i}return r.mapValue.fields}applyChanges(e,r,n){Si(r,(i,s)=>e[i]=s);for(const i of n)delete e[i]}clone(){return new Et(ja(this.value))}}function vA(t){const e=[];return Si(t.fields,(r,n)=>{const i=new gt([r]);if($l(n)){const s=vA(n.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new ks(e)}/**
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
 */class ke{constructor(e,r,n,i,s){this.key=e,this.documentType=r,this.version=n,this.data=i,this.documentState=s}static newInvalidDocument(e){return new ke(e,0,fe.min(),Et.empty(),0)}static newFoundDocument(e,r,n){return new ke(e,1,r,n,0)}static newNoDocument(e,r){return new ke(e,2,r,Et.empty(),0)}static newUnknownDocument(e,r){return new ke(e,3,r,Et.empty(),2)}convertToFoundDocument(e,r){return this.version=e,this.documentType=1,this.data=r,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new ke(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class c6{constructor(e,r=null,n=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=r,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.A=null}}function gA(t,e=null,r=[],n=[],i=null,s=null,o=null){return new c6(t,e,r,n,i,s,o)}function Ba(t){const e=K(t);if(e.A===null){let r=e.path.canonicalString();e.collectionGroup!==null&&(r+="|cg:"+e.collectionGroup),r+="|f:",r+=e.filters.map(n=>l6(n)).join(","),r+="|ob:",r+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),Ti(e.limit)||(r+="|l:",r+=e.limit),e.startAt&&(r+="|lb:",r+=Ml(e.startAt)),e.endAt&&(r+="|ub:",r+=Ml(e.endAt)),e.A=r}return e.A}function u6(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(r=>{return`${(n=r).field.canonicalString()} ${n.op} ${Sg(n.value)}`;var n}).join(", ")}]`),Ti(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(r=>function(n){return`${n.field.canonicalString()} (${n.dir})`}(r)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Ml(t.startAt)),t.endAt&&(e+=", endAt: "+Ml(t.endAt)),`Target(${e})`}function Dl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!y6(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(r=t.filters[i],n=e.filters[i],r.op!==n.op||!r.field.isEqual(n.field)||!kr(r.value,n.value))return!1;var r,n;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!wA(t.startAt,e.startAt)&&wA(t.endAt,e.endAt)}function Ll(t){return Z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Nt extends class{}{constructor(e,r,n){super(),this.field=e,this.op=r,this.value=n}static create(e,r,n){return e.isKeyField()?r==="in"||r==="not-in"?this.R(e,r,n):new h6(e,r,n):r==="array-contains"?new p6(e,n):r==="in"?new v6(e,n):r==="not-in"?new g6(e,n):r==="array-contains-any"?new m6(e,n):new Nt(e,r,n)}static R(e,r,n){return r==="in"?new f6(e,n):new d6(e,n)}matches(e){const r=e.data.field(this.field);return this.op==="!="?r!==null&&this.P($s(r,this.value)):r!==null&&Ai(this.value)===Ai(r)&&this.P($s(r,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function l6(t){return t.field.canonicalString()+t.op.toString()+Sg(t.value)}class h6 extends Nt{constructor(e,r,n){super(e,r,n),this.key=Z.fromName(n.referenceValue)}matches(e){const r=Z.comparator(e.key,this.key);return this.P(r)}}class f6 extends Nt{constructor(e,r){super(e,"in",r),this.keys=mA("in",r)}matches(e){return this.keys.some(r=>r.isEqual(e.key))}}class d6 extends Nt{constructor(e,r){super(e,"not-in",r),this.keys=mA("not-in",r)}matches(e){return!this.keys.some(r=>r.isEqual(e.key))}}function mA(t,e){var r;return(((r=e.arrayValue)===null||r===void 0?void 0:r.values)||[]).map(n=>Z.fromName(n.referenceValue))}class p6 extends Nt{constructor(e,r){super(e,"array-contains",r)}matches(e){const r=e.data.field(this.field);return Og(r)&&Ua(r.arrayValue,this.value)}}class v6 extends Nt{constructor(e,r){super(e,"in",r)}matches(e){const r=e.data.field(this.field);return r!==null&&Ua(this.value.arrayValue,r)}}class g6 extends Nt{constructor(e,r){super(e,"not-in",r)}matches(e){if(Ua(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const r=e.data.field(this.field);return r!==null&&!Ua(this.value.arrayValue,r)}}class m6 extends Nt{constructor(e,r){super(e,"array-contains-any",r)}matches(e){const r=e.data.field(this.field);return!(!Og(r)||!r.arrayValue.values)&&r.arrayValue.values.some(n=>Ua(this.value.arrayValue,n))}}class Va{constructor(e,r){this.position=e,this.before=r}}function Ml(t){return`${t.before?"b":"a"}:${t.position.map(e=>Sg(e)).join(",")}`}class Ds{constructor(e,r="asc"){this.field=e,this.dir=r}}function y6(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function yA(t,e,r){let n=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?n=Z.comparator(Z.fromName(o.referenceValue),r.key):n=$s(o,r.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return t.before?n<=0:n<0}function wA(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let r=0;r<t.position.length;r++)if(!kr(t.position[r],e.position[r]))return!1;return!0}/**
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
 */class Qr{constructor(e,r=null,n=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=r,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.V=null,this.S=null,this.startAt,this.endAt}}function bA(t,e,r,n,i,s,o,a){return new Qr(t,e,r,n,i,s,o,a)}function Ls(t){return new Qr(t)}function Fl(t){return!Ti(t.limit)&&t.limitType==="F"}function Ul(t){return!Ti(t.limit)&&t.limitType==="L"}function Cg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Rg(t){for(const e of t.filters)if(e.v())return e.field;return null}function xg(t){return t.collectionGroup!==null}function Ms(t){const e=K(t);if(e.V===null){e.V=[];const r=Rg(e),n=Cg(e);if(r!==null&&n===null)r.isKeyField()||e.V.push(new Ds(r)),e.V.push(new Ds(gt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.V.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new Ds(gt.keyField(),s))}}}return e.V}function nr(t){const e=K(t);if(!e.S)if(e.limitType==="F")e.S=gA(e.path,e.collectionGroup,Ms(e),e.filters,e.limit,e.startAt,e.endAt);else{const r=[];for(const s of Ms(e)){const o=s.dir==="desc"?"asc":"desc";r.push(new Ds(s.field,o))}const n=e.endAt?new Va(e.endAt.position,!e.endAt.before):null,i=e.startAt?new Va(e.startAt.position,!e.startAt.before):null;e.S=gA(e.path,e.collectionGroup,r,e.filters,e.limit,n,i)}return e.S}function _A(t,e,r){return new Qr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,r,t.startAt,t.endAt)}function qa(t,e){return Dl(nr(t),nr(e))&&t.limitType===e.limitType}function EA(t){return`${Ba(nr(t))}|lt:${t.limitType}`}function Ng(t){return`Query(target=${u6(nr(t))}; limitType=${t.limitType})`}function za(t,e){return e.isFoundDocument()&&function(r,n){const i=n.key.path;return r.collectionGroup!==null?n.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,n){for(const i of r.explicitOrderBy)if(!i.field.isKeyField()&&n.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,n){for(const i of r.filters)if(!i.matches(n))return!1;return!0}(t,e)&&function(r,n){return!(r.startAt&&!yA(r.startAt,Ms(r),n)||r.endAt&&yA(r.endAt,Ms(r),n))}(t,e)}function IA(t){return(e,r)=>{let n=!1;for(const i of Ms(t)){const s=w6(i,e,r);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function w6(t,e,r){const n=t.field.isKeyField()?Z.comparator(e.key,r.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?$s(a,c):ee()}(t.field,e,r);switch(t.dir){case"asc":return n;case"desc":return-1*n;default:return ee()}}/**
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
 */function SA(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kl(e)?"-0":e}}function TA(t){return{integerValue:""+t}}function AA(t,e){return hA(e)?TA(e):SA(t,e)}/**
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
 */class jl{constructor(){this._=void 0}}function b6(t,e,r){return t instanceof Fs?function(n,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:n.seconds,nanos:n.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(r,e):t instanceof Oi?CA(t,e):t instanceof Ci?RA(t,e):function(n,i){const s=OA(n,i),o=xA(s)+xA(n.C);return Ag(s)&&Ag(n.C)?TA(o):SA(n.N,o)}(t,e)}function _6(t,e,r){return t instanceof Oi?CA(t,e):t instanceof Ci?RA(t,e):r}function OA(t,e){return t instanceof Us?Ag(r=e)||function(n){return!!n&&"doubleValue"in n}(r)?e:{integerValue:0}:null;var r}class Fs extends jl{}class Oi extends jl{constructor(e){super(),this.elements=e}}function CA(t,e){const r=NA(e);for(const n of t.elements)r.some(i=>kr(i,n))||r.push(n);return{arrayValue:{values:r}}}class Ci extends jl{constructor(e){super(),this.elements=e}}function RA(t,e){let r=NA(e);for(const n of t.elements)r=r.filter(i=>!kr(i,n));return{arrayValue:{values:r}}}class Us extends jl{constructor(e,r){super(),this.N=e,this.C=r}}function xA(t){return Ge(t.integerValue||t.doubleValue)}function NA(t){return Og(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Wa{constructor(e,r){this.field=e,this.transform=r}}function E6(t,e){return t.field.isEqual(e.field)&&function(r,n){return r instanceof Oi&&n instanceof Oi||r instanceof Ci&&n instanceof Ci?Ns(r.elements,n.elements,kr):r instanceof Us&&n instanceof Us?kr(r.C,n.C):r instanceof Fs&&n instanceof Fs}(t.transform,e.transform)}class I6{constructor(e,r){this.version=e,this.transformResults=r}}class Ke{constructor(e,r){this.updateTime=e,this.exists=r}static none(){return new Ke}static exists(e){return new Ke(void 0,e)}static updateTime(e){return new Ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Vl{}function S6(t,e,r){t instanceof Ga?function(n,i,s){const o=n.value.clone(),a=DA(n.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,r):t instanceof En?function(n,i,s){if(!Bl(n.precondition,i))return void i.convertToUnknownDocument(s.version);const o=DA(n.fieldTransforms,i,s.transformResults),a=i.data;a.setAll($A(n)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,r):function(n,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,r)}function kg(t,e,r){t instanceof Ga?function(n,i,s){if(!Bl(n.precondition,i))return;const o=n.value.clone(),a=LA(n.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(PA(i),o).setHasLocalMutations()}(t,e,r):t instanceof En?function(n,i,s){if(!Bl(n.precondition,i))return;const o=LA(n.fieldTransforms,s,i),a=i.data;a.setAll($A(n)),a.setAll(o),i.convertToFoundDocument(PA(i),a).setHasLocalMutations()}(t,e,r):function(n,i){Bl(n.precondition,i)&&i.convertToNoDocument(fe.min())}(t,e)}function T6(t,e){let r=null;for(const n of t.fieldTransforms){const i=e.data.field(n.field),s=OA(n.transform,i||null);s!=null&&(r==null&&(r=Et.empty()),r.set(n.field,s))}return r||null}function kA(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,n){return r===void 0&&n===void 0||!(!r||!n)&&Ns(r,n,(i,s)=>E6(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function PA(t){return t.isFoundDocument()?t.version:fe.min()}class Ga extends Vl{constructor(e,r,n,i=[]){super(),this.key=e,this.value=r,this.precondition=n,this.fieldTransforms=i,this.type=0}}class En extends Vl{constructor(e,r,n,i,s=[]){super(),this.key=e,this.data=r,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}}function $A(t){const e=new Map;return t.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){const n=t.data.field(r);e.set(r,n)}}),e}function DA(t,e,r){const n=new Map;se(t.length===r.length);for(let i=0;i<r.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);n.set(s.field,_6(o,a,r[i]))}return n}function LA(t,e,r){const n=new Map;for(const i of t){const s=i.transform,o=r.data.field(i.field);n.set(i.field,b6(s,o,e))}return n}class Ka extends Vl{constructor(e,r){super(),this.key=e,this.precondition=r,this.type=2,this.fieldTransforms=[]}}class Pg extends Vl{constructor(e,r){super(),this.key=e,this.precondition=r,this.type=3,this.fieldTransforms=[]}}/**
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
 */class A6{constructor(e){this.count=e}}/**
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
 */var He,me;function MA(t){switch(t){case x.OK:return ee();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return ee()}}function FA(t){if(t===void 0)return We("GRPC error has no .code"),x.UNKNOWN;switch(t){case He.OK:return x.OK;case He.CANCELLED:return x.CANCELLED;case He.UNKNOWN:return x.UNKNOWN;case He.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case He.INTERNAL:return x.INTERNAL;case He.UNAVAILABLE:return x.UNAVAILABLE;case He.UNAUTHENTICATED:return x.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case He.NOT_FOUND:return x.NOT_FOUND;case He.ALREADY_EXISTS:return x.ALREADY_EXISTS;case He.PERMISSION_DENIED:return x.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case He.ABORTED:return x.ABORTED;case He.OUT_OF_RANGE:return x.OUT_OF_RANGE;case He.UNIMPLEMENTED:return x.UNIMPLEMENTED;case He.DATA_LOSS:return x.DATA_LOSS;default:return ee()}}(me=He||(He={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class et{constructor(e,r){this.comparator=e,this.root=r||mt.EMPTY}insert(e,r){return new et(this.comparator,this.root.insert(e,r,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,mt.BLACK,null,null))}get(e){let r=this.root;for(;!r.isEmpty();){const n=this.comparator(e,r.key);if(n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}indexOf(e){let r=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return r+n.left.size;i<0?n=n.left:(r+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((r,n)=>(e(r,n),!1))}toString(){const e=[];return this.inorderTraversal((r,n)=>(e.push(`${r}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ql(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ql(this.root,e,this.comparator,!1)}getReverseIterator(){return new ql(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ql(this.root,e,this.comparator,!0)}}class ql{constructor(e,r,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=r?n(e.key,r):1,i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const r={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return r}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class mt{constructor(e,r,n,i,s){this.key=e,this.value=r,this.color=n!=null?n:mt.RED,this.left=i!=null?i:mt.EMPTY,this.right=s!=null?s:mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,r,n,i,s){return new mt(e!=null?e:this.key,r!=null?r:this.value,n!=null?n:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,r,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,r,n),null):s===0?i.copy(null,r,null,null,null):i.copy(null,null,null,null,i.right.insert(e,r,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,r){let n,i=this;if(r(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,r),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),r(e,i.key)===0){if(i.right.isEmpty())return mt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,r))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),r=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,r)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(t,e,r,n,i){return this}insert(t,e,r){return new mt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Pe{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((r,n)=>(e(r),!1))}forEachInRange(e,r){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;r(i.key)}}forEachWhile(e,r){let n;for(n=r!==void 0?this.data.getIteratorFrom(r):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const r=this.data.getIteratorFrom(e);return r.hasNext()?r.getNext().key:null}getIterator(){return new UA(this.data.getIterator())}getIteratorFrom(e){return new UA(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let r=this;return r.size<e.size&&(r=e,e=this),e.forEach(n=>{r=r.add(n)}),r}isEqual(e){if(!(e instanceof Pe)||this.size!==e.size)return!1;const r=this.data.getIterator(),n=e.data.getIterator();for(;r.hasNext();){const i=r.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(r=>{e.push(r)}),e}toString(){const e=[];return this.forEach(r=>e.push(r)),"SortedSet("+e.toString()+")"}copy(e){const r=new Pe(this.comparator);return r.data=e,r}}class UA{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const O6=new et(Z.comparator);function ir(){return O6}const C6=new et(Z.comparator);function $g(){return C6}const R6=new et(Z.comparator);function jA(){return R6}const x6=new Pe(Z.comparator);function Te(...t){let e=x6;for(const r of t)e=e.add(r);return e}const N6=new Pe(ge);function zl(){return N6}/**
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
 */class Ha{constructor(e,r,n,i,s){this.snapshotVersion=e,this.targetChanges=r,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,r){const n=new Map;return n.set(e,Ya.createSynthesizedTargetChangeForCurrentChange(e,r)),new Ha(fe.min(),n,zl(),ir(),Te())}}class Ya{constructor(e,r,n,i,s){this.resumeToken=e,this.current=r,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,r){return new Ya(ot.EMPTY_BYTE_STRING,r,Te(),Te(),Te())}}/**
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
 */class Wl{constructor(e,r,n,i){this.k=e,this.removedTargetIds=r,this.key=n,this.$=i}}class BA{constructor(e,r){this.targetId=e,this.O=r}}class VA{constructor(e,r,n=ot.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=r,this.resumeToken=n,this.cause=i}}class qA{constructor(){this.F=0,this.M=WA(),this.L=ot.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=Te(),r=Te(),n=Te();return this.M.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:r=r.add(i);break;case 1:n=n.add(i);break;default:ee()}}),new Ya(this.L,this.B,e,r,n)}G(){this.U=!1,this.M=WA()}H(e,r){this.U=!0,this.M=this.M.insert(e,r)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class k6{constructor(e){this.tt=e,this.et=new Map,this.nt=ir(),this.st=zA(),this.it=new Pe(ge)}rt(e){for(const r of e.k)e.$&&e.$.isFoundDocument()?this.ot(r,e.$):this.at(r,e.key,e.$);for(const r of e.removedTargetIds)this.at(r,e.key,e.$)}ct(e){this.forEachTarget(e,r=>{const n=this.ut(r);switch(e.state){case 0:this.ht(r)&&n.j(e.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(e.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(r);break;case 3:this.ht(r)&&(n.Z(),n.j(e.resumeToken));break;case 4:this.ht(r)&&(this.lt(r),n.j(e.resumeToken));break;default:ee()}})}forEachTarget(e,r){e.targetIds.length>0?e.targetIds.forEach(r):this.et.forEach((n,i)=>{this.ht(i)&&r(i)})}ft(e){const r=e.targetId,n=e.O.count,i=this.dt(r);if(i){const s=i.target;if(Ll(s))if(n===0){const o=new Z(s.path);this.at(r,o,ke.newNoDocument(o,fe.min()))}else se(n===1);else this.wt(r)!==n&&(this.lt(r),this.it=this.it.add(r))}}_t(e){const r=new Map;this.et.forEach((s,o)=>{const a=this.dt(o);if(a){if(s.current&&Ll(a.target)){const c=new Z(a.target.path);this.nt.get(c)!==null||this.gt(o,c)||this.at(o,c,ke.newNoDocument(c,e))}s.K&&(r.set(o,s.W()),s.G())}});let n=Te();this.st.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.dt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(n=n.add(s))});const i=new Ha(e,r,this.it,this.nt,n);return this.nt=ir(),this.st=zA(),this.it=new Pe(ge),i}ot(e,r){if(!this.ht(e))return;const n=this.gt(e,r.key)?2:0;this.ut(e).H(r.key,n),this.nt=this.nt.insert(r.key,r),this.st=this.st.insert(r.key,this.yt(r.key).add(e))}at(e,r,n){if(!this.ht(e))return;const i=this.ut(e);this.gt(e,r)?i.H(r,1):i.J(r),this.st=this.st.insert(r,this.yt(r).delete(e)),n&&(this.nt=this.nt.insert(r,n))}removeTarget(e){this.et.delete(e)}wt(e){const r=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let r=this.et.get(e);return r||(r=new qA,this.et.set(e,r)),r}yt(e){let r=this.st.get(e);return r||(r=new Pe(ge),this.st=this.st.insert(e,r)),r}ht(e){const r=this.dt(e)!==null;return r||V("WatchChangeAggregator","Detected inactive target",e),r}dt(e){const r=this.et.get(e);return r&&r.q?null:this.tt.Et(e)}lt(e){this.et.set(e,new qA),this.tt.getRemoteKeysForTarget(e).forEach(r=>{this.at(e,r,null)})}gt(e,r){return this.tt.getRemoteKeysForTarget(e).has(r)}}function zA(){return new et(Z.comparator)}function WA(){return new et(Z.comparator)}/**
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
 */const P6=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),$6=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class D6{constructor(e,r){this.databaseId=e,this.D=r}}function Xa(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function GA(t,e){return t.D?e.toBase64():e.toUint8Array()}function L6(t,e){return Xa(t,e.toTimestamp())}function at(t){return se(!!t),fe.fromTimestamp(function(e){const r=_n(e);return new st(r.seconds,r.nanos)}(t))}function Dg(t,e){return function(r){return new Ee(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function KA(t){const e=Ee.fromString(t);return se(sO(e)),e}function Qa(t,e){return Dg(t.databaseId,e.path)}function Pr(t,e){const r=KA(e);if(r.get(1)!==t.databaseId.projectId)throw new M(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+t.databaseId.projectId);if(r.get(3)!==t.databaseId.database)throw new M(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+t.databaseId.database);return new Z(YA(r))}function Lg(t,e){return Dg(t.databaseId,e)}function HA(t){const e=KA(t);return e.length===4?Ee.emptyPath():YA(e)}function Ja(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function YA(t){return se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function XA(t,e,r){return{name:Qa(t,e),fields:r.value.mapValue.fields}}function QA(t,e,r){const n=Pr(t,e.name),i=at(e.updateTime),s=new Et({mapValue:{fields:e.fields}}),o=ke.newFoundDocument(n,i,s);return r&&o.setHasCommittedMutations(),r?o.setHasCommittedMutations():o}function M6(t,e){return"found"in e?function(r,n){se(!!n.found),n.found.name,n.found.updateTime;const i=Pr(r,n.found.name),s=at(n.found.updateTime),o=new Et({mapValue:{fields:n.found.fields}});return ke.newFoundDocument(i,s,o)}(t,e):"missing"in e?function(r,n){se(!!n.missing),se(!!n.readTime);const i=Pr(r,n.missing),s=at(n.readTime);return ke.newNoDocument(i,s)}(t,e):ee()}function F6(t,e){let r;if("targetChange"in e){e.targetChange;const n=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.D?(se(u===void 0||typeof u=="string"),ot.fromBase64String(u||"")):(se(u===void 0||u instanceof Uint8Array),ot.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?x.UNKNOWN:FA(c.code);return new M(u,c.message||"")}(o);r=new VA(n,i,s,a||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=Pr(t,n.document.name),s=at(n.document.updateTime),o=new Et({mapValue:{fields:n.document.fields}}),a=ke.newFoundDocument(i,s,o),c=n.targetIds||[],u=n.removedTargetIds||[];r=new Wl(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=Pr(t,n.document),s=n.readTime?at(n.readTime):fe.min(),o=ke.newNoDocument(i,s),a=n.removedTargetIds||[];r=new Wl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=Pr(t,n.document),s=n.removedTargetIds||[];r=new Wl([],s,i,null)}else{if(!("filter"in e))return ee();{e.filter;const n=e.filter;n.targetId;const i=n.count||0,s=new A6(i),o=n.targetId;r=new BA(o,s)}}return r}function Gl(t,e){let r;if(e instanceof Ga)r={update:XA(t,e.key,e.value)};else if(e instanceof Ka)r={delete:Qa(t,e.key)};else if(e instanceof En)r={update:XA(t,e.key,e.data),updateMask:W6(e.fieldMask)};else{if(!(e instanceof Pg))return ee();r={verify:Qa(t,e.key)}}return e.fieldTransforms.length>0&&(r.updateTransforms=e.fieldTransforms.map(n=>function(i,s){const o=s.transform;if(o instanceof Fs)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Oi)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ci)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Us)return{fieldPath:s.field.canonicalString(),increment:o.C};throw ee()}(0,n))),e.precondition.isNone||(r.currentDocument=function(n,i){return i.updateTime!==void 0?{updateTime:L6(n,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee()}(t,e.precondition)),r}function JA(t,e){const r=e.currentDocument?function(i){return i.updateTime!==void 0?Ke.updateTime(at(i.updateTime)):i.exists!==void 0?Ke.exists(i.exists):Ke.none()}(e.currentDocument):Ke.none(),n=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)se(o.setToServerValue==="REQUEST_TIME"),a=new Fs;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new Oi(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new Ci(u)}else"increment"in o?a=new Us(s,o.increment):ee();const c=gt.fromServerFormat(o.fieldPath);return new Wa(c,a)}(t,i)):[];if(e.update){e.update.name;const i=Pr(t,e.update.name),s=new Et({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new ks(c.map(u=>gt.fromServerFormat(u)))}(e.updateMask);return new En(i,s,o,r,n)}return new Ga(i,s,r,n)}if(e.delete){const i=Pr(t,e.delete);return new Ka(i,r)}if(e.verify){const i=Pr(t,e.verify);return new Pg(i,r)}return ee()}function U6(t,e){return t&&t.length>0?(se(e!==void 0),t.map(r=>function(n,i){let s=n.updateTime?at(n.updateTime):at(i);return s.isEqual(fe.min())&&(s=at(i)),new I6(s,n.transformResults||[])}(r,e))):[]}function ZA(t,e){return{documents:[Lg(t,e.path)]}}function eO(t,e){const r={structuredQuery:{}},n=e.path;e.collectionGroup!==null?(r.parent=Lg(t,n),r.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r.parent=Lg(t,n.popLast()),r.structuredQuery.from=[{collectionId:n.lastSegment()}]);const i=function(a){if(a.length===0)return;const c=a.map(u=>function(l){if(l.op==="=="){if(pA(l.value))return{unaryFilter:{field:js(l.field),op:"IS_NAN"}};if(dA(l.value))return{unaryFilter:{field:js(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(pA(l.value))return{unaryFilter:{field:js(l.field),op:"IS_NOT_NAN"}};if(dA(l.value))return{unaryFilter:{field:js(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:js(l.field),op:V6(l.op),value:l.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);i&&(r.structuredQuery.where=i);const s=function(a){if(a.length!==0)return a.map(c=>function(u){return{field:js(u.field),direction:B6(u.dir)}}(c))}(e.orderBy);s&&(r.structuredQuery.orderBy=s);const o=function(a,c){return a.D||Ti(c)?c:{value:c}}(t,e.limit);return o!==null&&(r.structuredQuery.limit=o),e.startAt&&(r.structuredQuery.startAt=nO(e.startAt)),e.endAt&&(r.structuredQuery.endAt=nO(e.endAt)),r}function tO(t){let e=HA(t.parent);const r=t.structuredQuery,n=r.from?r.from.length:0;let i=null;if(n>0){se(n===1);const l=r.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];r.where&&(s=rO(r.where));let o=[];r.orderBy&&(o=r.orderBy.map(l=>function(h){return new Ds(Bs(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;r.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Ti(h)?null:h}(r.limit));let c=null;r.startAt&&(c=iO(r.startAt));let u=null;return r.endAt&&(u=iO(r.endAt)),bA(e,i,o,s,a,"F",c,u)}function j6(t,e){const r=function(n,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ee()}}(0,e.purpose);return r==null?null:{"goog-listen-tags":r}}function rO(t){return t?t.unaryFilter!==void 0?[z6(t)]:t.fieldFilter!==void 0?[q6(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>rO(e)).reduce((e,r)=>e.concat(r)):ee():[]}function nO(t){return{before:t.before,values:t.position}}function iO(t){const e=!!t.before,r=t.values||[];return new Va(r,e)}function B6(t){return P6[t]}function V6(t){return $6[t]}function js(t){return{fieldPath:t.canonicalString()}}function Bs(t){return gt.fromServerFormat(t.fieldPath)}function q6(t){return Nt.create(Bs(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return ee()}}(t.fieldFilter.op),t.fieldFilter.value)}function z6(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Bs(t.unaryFilter.field);return Nt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const r=Bs(t.unaryFilter.field);return Nt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const n=Bs(t.unaryFilter.field);return Nt.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Bs(t.unaryFilter.field);return Nt.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return ee()}}function W6(t){const e=[];return t.fields.forEach(r=>e.push(r.canonicalString())),{fieldPaths:e}}function sO(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function pr(t){let e="";for(let r=0;r<t.length;r++)e.length>0&&(e=oO(e)),e=G6(t.get(r),e);return oO(e)}function G6(t,e){let r=e;const n=t.length;for(let i=0;i<n;i++){const s=t.charAt(i);switch(s){case"\0":r+="";break;case"":r+="";break;default:r+=s}}return r}function oO(t){return t+""}function Jr(t){const e=t.length;if(se(e>=2),e===2)return se(t.charAt(0)===""&&t.charAt(1)===""),Ee.emptyPath();const r=e-2,n=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>r)&&ee(),t.charAt(o+1)){case"":const a=t.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),n.push(c);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:ee()}s=o+2}return new Ee(n)}/**
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
 */class K6{constructor(e,r){this.seconds=e,this.nanoseconds=r}}class Yt{constructor(e,r,n){this.ownerId=e,this.allowTabSynchronization=r,this.leaseTimestampMs=n}}Yt.store="owner",Yt.key="owner";class In{constructor(e,r,n){this.userId=e,this.lastAcknowledgedBatchId=r,this.lastStreamToken=n}}In.store="mutationQueues",In.keyPath="userId";class Ce{constructor(e,r,n,i,s){this.userId=e,this.batchId=r,this.localWriteTimeMs=n,this.baseMutations=i,this.mutations=s}}Ce.store="mutations",Ce.keyPath="batchId",Ce.userMutationsIndex="userMutationsIndex",Ce.userMutationsKeyPath=["userId","batchId"];class It{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,r){return[e,pr(r)]}static key(e,r,n){return[e,pr(r),n]}}It.store="documentMutations",It.PLACEHOLDER=new It;class H6{constructor(e,r){this.path=e,this.readTime=r}}class Y6{constructor(e,r){this.path=e,this.version=r}}class $e{constructor(e,r,n,i,s,o){this.unknownDocument=e,this.noDocument=r,this.document=n,this.hasCommittedMutations=i,this.readTime=s,this.parentPath=o}}$e.store="remoteDocuments",$e.readTimeIndex="readTimeIndex",$e.readTimeIndexPath="readTime",$e.collectionReadTimeIndex="collectionReadTimeIndex",$e.collectionReadTimeIndexPath=["parentPath","readTime"];class $r{constructor(e){this.byteSize=e}}$r.store="remoteDocumentGlobal",$r.key="remoteDocumentGlobalKey";class Mt{constructor(e,r,n,i,s,o,a){this.targetId=e,this.canonicalId=r,this.readTime=n,this.resumeToken=i,this.lastListenSequenceNumber=s,this.lastLimboFreeSnapshotVersion=o,this.query=a}}Mt.store="targets",Mt.keyPath="targetId",Mt.queryTargetsIndexName="queryTargetsIndex",Mt.queryTargetsKeyPath=["canonicalId","targetId"];class yt{constructor(e,r,n){this.targetId=e,this.path=r,this.sequenceNumber=n}}yt.store="targetDocuments",yt.keyPath=["targetId","path"],yt.documentTargetsIndex="documentTargetsIndex",yt.documentTargetsKeyPath=["path","targetId"];class Xt{constructor(e,r,n,i){this.highestTargetId=e,this.highestListenSequenceNumber=r,this.lastRemoteSnapshotVersion=n,this.targetCount=i}}Xt.key="targetGlobalKey",Xt.store="targetGlobal";class Ri{constructor(e,r){this.collectionId=e,this.parent=r}}Ri.store="collectionParents",Ri.keyPath=["collectionId","parent"];class Zr{constructor(e,r,n,i){this.clientId=e,this.updateTimeMs=r,this.networkEnabled=n,this.inForeground=i}}Zr.store="clientMetadata",Zr.keyPath="clientId";class Vs{constructor(e,r,n){this.bundleId=e,this.createTime=r,this.version=n}}Vs.store="bundles",Vs.keyPath="bundleId";class qs{constructor(e,r,n){this.name=e,this.readTime=r,this.bundledQuery=n}}qs.store="namedQueries",qs.keyPath="name";const X6=[In.store,Ce.store,It.store,$e.store,Mt.store,Yt.store,Xt.store,yt.store,Zr.store,$r.store,Ri.store,Vs.store,qs.store],aO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class Kl{constructor(e,r){this.action=e,this.transaction=r,this.aborted=!1,this.Tt=new it,this.transaction.oncomplete=()=>{this.Tt.resolve()},this.transaction.onabort=()=>{r.error?this.Tt.reject(new Za(e,r.error)):this.Tt.resolve()},this.transaction.onerror=n=>{const i=Mg(n.target.error);this.Tt.reject(new Za(e,i))}}static open(e,r,n,i){try{return new Kl(r,e.transaction(i,n))}catch(s){throw new Za(r,s)}}get It(){return this.Tt.promise}abort(e){e&&this.Tt.reject(e),this.aborted||(V("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(e){const r=this.transaction.objectStore(e);return new J6(r)}}class vr{constructor(e,r,n){this.name=e,this.version=r,this.At=n,vr.Rt(Oe())===12.2&&We("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return V("SimpleDb","Removing database:",e),Ni(window.indexedDB.deleteDatabase(e)).toPromise()}static bt(){if(!$u())return!1;if(vr.Pt())return!0;const e=Oe(),r=vr.Rt(e),n=0<r&&r<10,i=vr.vt(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static Pt(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.Vt)==="YES"}static St(e,r){return e.store(r)}static Rt(e){const r=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=r?r[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static vt(e){const r=e.match(/Android ([\d.]+)/i),n=r?r[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Dt(e){return this.db||(V("SimpleDb","Opening database:",this.name),this.db=await new Promise((r,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;r(o)},i.onblocked=()=>{n(new Za(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?n(new M(x.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new M(x.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new Za(e,o))},i.onupgradeneeded=s=>{V("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.At.Ct(o,i.transaction,s.oldVersion,this.version).next(()=>{V("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Nt&&(this.db.onversionchange=r=>this.Nt(r)),this.db}xt(e){this.Nt=e,this.db&&(this.db.onversionchange=r=>e(r))}async runTransaction(e,r,n,i){const s=r==="readonly";let o=0;for(;;){++o;try{this.db=await this.Dt(e);const a=Kl.open(this.db,e,s?"readonly":"readwrite",n),c=i(a).catch(u=>(a.abort(u),L.reject(u))).toPromise();return c.catch(()=>{}),await a.It,c}catch(a){const c=a.name!=="FirebaseError"&&o<3;if(V("SimpleDb","Transaction failed with error:",a.message,"Retrying:",c),this.close(),!c)return Promise.reject(a)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Q6{constructor(e){this.kt=e,this.$t=!1,this.Ot=null}get isDone(){return this.$t}get Ft(){return this.Ot}set cursor(e){this.kt=e}done(){this.$t=!0}Mt(e){this.Ot=e}delete(){return Ni(this.kt.delete())}}class Za extends M{constructor(e,r){super(x.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${r}`),this.name="IndexedDbTransactionError"}}function xi(t){return t.name==="IndexedDbTransactionError"}class J6{constructor(e){this.store=e}put(e,r){let n;return r!==void 0?(V("SimpleDb","PUT",this.store.name,e,r),n=this.store.put(r,e)):(V("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Ni(n)}add(e){return V("SimpleDb","ADD",this.store.name,e,e),Ni(this.store.add(e))}get(e){return Ni(this.store.get(e)).next(r=>(r===void 0&&(r=null),V("SimpleDb","GET",this.store.name,e,r),r))}delete(e){return V("SimpleDb","DELETE",this.store.name,e),Ni(this.store.delete(e))}count(){return V("SimpleDb","COUNT",this.store.name),Ni(this.store.count())}Lt(e,r){const n=this.cursor(this.options(e,r)),i=[];return this.Bt(n,(s,o)=>{i.push(o)}).next(()=>i)}Ut(e,r){V("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,r);n.qt=!1;const i=this.cursor(n);return this.Bt(i,(s,o,a)=>a.delete())}Kt(e,r){let n;r?n=e:(n={},r=e);const i=this.cursor(n);return this.Bt(i,r)}jt(e){const r=this.cursor({});return new L((n,i)=>{r.onerror=s=>{const o=Mg(s.target.error);i(o)},r.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():n()}):n()}})}Bt(e,r){const n=[];return new L((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new Q6(a),u=r(a.primaryKey,a.value,c);if(u instanceof L){const l=u.catch(h=>(c.done(),L.reject(h)));n.push(l)}c.isDone?i():c.Ft===null?a.continue():a.continue(c.Ft)}}).next(()=>L.waitFor(n))}options(e,r){let n;return e!==void 0&&(typeof e=="string"?n=e:r=e),{index:n,range:r}}cursor(e){let r="next";if(e.reverse&&(r="prev"),e.index){const n=this.store.index(e.index);return e.qt?n.openKeyCursor(e.range,r):n.openCursor(e.range,r)}return this.store.openCursor(e.range,r)}}function Ni(t){return new L((e,r)=>{t.onsuccess=n=>{const i=n.target.result;e(i)},t.onerror=n=>{const i=Mg(n.target.error);r(i)}})}let uO=!1;function Mg(t){const e=vr.Rt(Oe());if(e>=12.2&&e<13){const r="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(r)>=0){const n=new M("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${r}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return uO||(uO=!0,setTimeout(()=>{throw n},0)),n}}return t}/**
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
 */class lO extends cO{constructor(e,r){super(),this.Qt=e,this.currentSequenceNumber=r}}function Ft(t,e){const r=K(t);return vr.St(r.Qt,e)}/**
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
 */class Fg{constructor(e,r,n,i){this.batchId=e,this.localWriteTime=r,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,r){const n=r.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&S6(s,e,n[i])}}applyToLocalView(e){for(const r of this.baseMutations)r.key.isEqual(e.key)&&kg(r,e,this.localWriteTime);for(const r of this.mutations)r.key.isEqual(e.key)&&kg(r,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(r=>{const n=e.get(r.key),i=n;this.applyToLocalView(i),n.isValidDocument()||i.convertToNoDocument(fe.min())})}keys(){return this.mutations.reduce((e,r)=>e.add(r.key),Te())}isEqual(e){return this.batchId===e.batchId&&Ns(this.mutations,e.mutations,(r,n)=>kA(r,n))&&Ns(this.baseMutations,e.baseMutations,(r,n)=>kA(r,n))}}class Ug{constructor(e,r,n,i){this.batch=e,this.commitVersion=r,this.mutationResults=n,this.docVersions=i}static from(e,r,n){se(e.mutations.length===n.length);let i=jA();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,n[o].version);return new Ug(e,r,n,i)}}/**
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
 */class Sn{constructor(e,r,n,i,s=fe.min(),o=fe.min(),a=ot.EMPTY_BYTE_STRING){this.target=e,this.targetId=r,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Sn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,r){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,r,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class hO{constructor(e){this.Wt=e}}function jg(t,e){if(e.document)return QA(t.Wt,e.document,!!e.hasCommittedMutations);if(e.noDocument){const r=Z.fromSegments(e.noDocument.path),n=Ws(e.noDocument.readTime),i=ke.newNoDocument(r,n);return e.hasCommittedMutations?i.setHasCommittedMutations():i}if(e.unknownDocument){const r=Z.fromSegments(e.unknownDocument.path),n=Ws(e.unknownDocument.version);return ke.newUnknownDocument(r,n)}return ee()}function fO(t,e,r){const n=Bg(r),i=e.key.path.popLast().toArray();if(e.isFoundDocument()){const s=function(a,c){return{name:Qa(a,c.key),fields:c.data.value.mapValue.fields,updateTime:Xa(a,c.version.toTimestamp())}}(t.Wt,e),o=e.hasCommittedMutations;return new $e(null,null,s,o,n,i)}if(e.isNoDocument()){const s=e.key.path.toArray(),o=zs(e.version),a=e.hasCommittedMutations;return new $e(null,new H6(s,o),null,a,n,i)}if(e.isUnknownDocument()){const s=e.key.path.toArray(),o=zs(e.version);return new $e(new Y6(s,o),null,null,!0,n,i)}return ee()}function Bg(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function dO(t){const e=new st(t[0],t[1]);return fe.fromTimestamp(e)}function zs(t){const e=t.toTimestamp();return new K6(e.seconds,e.nanoseconds)}function Ws(t){const e=new st(t.seconds,t.nanoseconds);return fe.fromTimestamp(e)}function Gs(t,e){const r=(e.baseMutations||[]).map(s=>JA(t.Wt,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const n=e.mutations.map(s=>JA(t.Wt,s)),i=st.fromMillis(e.localWriteTimeMs);return new Fg(e.batchId,i,r,n)}function ec(t){const e=Ws(t.readTime),r=t.lastLimboFreeSnapshotVersion!==void 0?Ws(t.lastLimboFreeSnapshotVersion):fe.min();let n;var i;return t.query.documents!==void 0?(se((i=t.query).documents.length===1),n=nr(Ls(HA(i.documents[0])))):n=function(s){return nr(tO(s))}(t.query),new Sn(n,t.targetId,0,t.lastListenSequenceNumber,e,r,ot.fromBase64String(t.resumeToken))}function pO(t,e){const r=zs(e.snapshotVersion),n=zs(e.lastLimboFreeSnapshotVersion);let i;i=Ll(e.target)?ZA(t.Wt,e.target):eO(t.Wt,e.target);const s=e.resumeToken.toBase64();return new Mt(e.targetId,Ba(e.target),r,s,e.sequenceNumber,n,i)}function Vg(t){const e=tO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_A(e,e.limit,"L"):e}/**
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
 */class Z6{getBundleMetadata(e,r){return vO(e).get(r).next(n=>{if(n)return{id:(i=n).bundleId,createTime:Ws(i.createTime),version:i.version};var i})}saveBundleMetadata(e,r){return vO(e).put({bundleId:(n=r).id,createTime:zs(at(n.createTime)),version:n.version});var n}getNamedQuery(e,r){return gO(e).get(r).next(n=>{if(n)return{name:(i=n).name,query:Vg(i.bundledQuery),readTime:Ws(i.readTime)};var i})}saveNamedQuery(e,r){return gO(e).put(function(n){return{name:n.name,readTime:zs(at(n.readTime)),bundledQuery:n.bundledQuery}}(r))}}function vO(t){return Ft(t,Vs.store)}function gO(t){return Ft(t,qs.store)}/**
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
 */class eX{constructor(){this.Gt=new qg}addToCollectionParentIndex(e,r){return this.Gt.add(r),L.resolve()}getCollectionParents(e,r){return L.resolve(this.Gt.getEntries(r))}}class qg{constructor(){this.index={}}add(e){const r=e.lastSegment(),n=e.popLast(),i=this.index[r]||new Pe(Ee.comparator),s=!i.has(n);return this.index[r]=i.add(n),s}has(e){const r=e.lastSegment(),n=e.popLast(),i=this.index[r];return i&&i.has(n)}getEntries(e){return(this.index[e]||new Pe(Ee.comparator)).toArray()}}/**
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
 */class tX{constructor(){this.zt=new qg}addToCollectionParentIndex(e,r){if(!this.zt.has(r)){const n=r.lastSegment(),i=r.popLast();e.addOnCommittedListener(()=>{this.zt.add(r)});const s={collectionId:n,parent:pr(i)};return mO(e).put(s)}return L.resolve()}getCollectionParents(e,r){const n=[],i=IDBKeyRange.bound([r,""],[aA(r),""],!1,!0);return mO(e).Lt(i).next(s=>{for(const o of s){if(o.collectionId!==r)break;n.push(Jr(o.parent))}return n})}}function mO(t){return Ft(t,Ri.store)}/**
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
 */const yO={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ut{constructor(e,r,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=r,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Ut(e,Ut.DEFAULT_COLLECTION_PERCENTILE,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function wO(t,e,r){const n=t.store(Ce.store),i=t.store(It.store),s=[],o=IDBKeyRange.only(r.batchId);let a=0;const c=n.Kt({range:o},(l,h,f)=>(a++,f.delete()));s.push(c.next(()=>{se(a===1)}));const u=[];for(const l of r.mutations){const h=It.key(e,l.key.path,r.batchId);s.push(i.delete(h)),u.push(l.key)}return L.waitFor(s).next(()=>u)}function Hl(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw ee();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Ut.DEFAULT_COLLECTION_PERCENTILE=10,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ut.DEFAULT=new Ut(41943040,Ut.DEFAULT_COLLECTION_PERCENTILE,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ut.DISABLED=new Ut(-1,0,0);class zg{constructor(e,r,n,i){this.userId=e,this.N=r,this.Ht=n,this.referenceDelegate=i,this.Jt={}}static Yt(e,r,n,i){se(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new zg(s,r,n,i)}checkEmpty(e){let r=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Tn(e).Kt({index:Ce.userMutationsIndex,range:n},(i,s,o)=>{r=!1,o.done()}).next(()=>r)}addMutationBatch(e,r,n,i){const s=Ks(e),o=Tn(e);return o.add({}).next(a=>{se(typeof a=="number");const c=new Fg(a,r,n,i),u=function(f,p,g){const I=g.baseMutations.map(O=>Gl(f.Wt,O)),E=g.mutations.map(O=>Gl(f.Wt,O));return new Ce(p,g.batchId,g.localWriteTime.toMillis(),I,E)}(this.N,this.userId,c),l=[];let h=new Pe((f,p)=>ge(f.canonicalString(),p.canonicalString()));for(const f of i){const p=It.key(this.userId,f.key.path,a);h=h.add(f.key.path.popLast()),l.push(o.put(u)),l.push(s.put(p,It.PLACEHOLDER))}return h.forEach(f=>{l.push(this.Ht.addToCollectionParentIndex(e,f))}),e.addOnCommittedListener(()=>{this.Jt[a]=c.keys()}),L.waitFor(l).next(()=>c)})}lookupMutationBatch(e,r){return Tn(e).get(r).next(n=>n?(se(n.userId===this.userId),Gs(this.N,n)):null)}Xt(e,r){return this.Jt[r]?L.resolve(this.Jt[r]):this.lookupMutationBatch(e,r).next(n=>{if(n){const i=n.keys();return this.Jt[r]=i,i}return null})}getNextMutationBatchAfterBatchId(e,r){const n=r+1,i=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return Tn(e).Kt({index:Ce.userMutationsIndex,range:i},(o,a,c)=>{a.userId===this.userId&&(se(a.batchId>=n),s=Gs(this.N,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const r=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Tn(e).Kt({index:Ce.userMutationsIndex,range:r,reverse:!0},(i,s,o)=>{n=s.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){const r=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Tn(e).Lt(Ce.userMutationsIndex,r).next(n=>n.map(i=>Gs(this.N,i)))}getAllMutationBatchesAffectingDocumentKey(e,r){const n=It.prefixForPath(this.userId,r.path),i=IDBKeyRange.lowerBound(n),s=[];return Ks(e).Kt({range:i},(o,a,c)=>{const[u,l,h]=o,f=Jr(l);if(u===this.userId&&r.path.isEqual(f))return Tn(e).get(h).next(p=>{if(!p)throw ee();se(p.userId===this.userId),s.push(Gs(this.N,p))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,r){let n=new Pe(ge);const i=[];return r.forEach(s=>{const o=It.prefixForPath(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=Ks(e).Kt({range:a},(u,l,h)=>{const[f,p,g]=u,I=Jr(p);f===this.userId&&s.path.isEqual(I)?n=n.add(g):h.done()});i.push(c)}),L.waitFor(i).next(()=>this.Zt(e,n))}getAllMutationBatchesAffectingQuery(e,r){const n=r.path,i=n.length+1,s=It.prefixForPath(this.userId,n),o=IDBKeyRange.lowerBound(s);let a=new Pe(ge);return Ks(e).Kt({range:o},(c,u,l)=>{const[h,f,p]=c,g=Jr(f);h===this.userId&&n.isPrefixOf(g)?g.length===i&&(a=a.add(p)):l.done()}).next(()=>this.Zt(e,a))}Zt(e,r){const n=[],i=[];return r.forEach(s=>{i.push(Tn(e).get(s).next(o=>{if(o===null)throw ee();se(o.userId===this.userId),n.push(Gs(this.N,o))}))}),L.waitFor(i).next(()=>n)}removeMutationBatch(e,r){return wO(e.Qt,this.userId,r).next(n=>(e.addOnCommittedListener(()=>{this.te(r.batchId)}),L.forEach(n,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}te(e){delete this.Jt[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(r=>{if(!r)return L.resolve();const n=IDBKeyRange.lowerBound(It.prefixForUser(this.userId)),i=[];return Ks(e).Kt({range:n},(s,o,a)=>{if(s[0]===this.userId){const c=Jr(s[1]);i.push(c)}else a.done()}).next(()=>{se(i.length===0)})})}containsKey(e,r){return bO(e,this.userId,r)}ee(e){return _O(e).get(this.userId).next(r=>r||new In(this.userId,-1,""))}}function bO(t,e,r){const n=It.prefixForPath(e,r.path),i=n[1],s=IDBKeyRange.lowerBound(n);let o=!1;return Ks(t).Kt({range:s,qt:!0},(a,c,u)=>{const[l,h,f]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function Tn(t){return Ft(t,Ce.store)}function Ks(t){return Ft(t,It.store)}function _O(t){return Ft(t,In.store)}/**
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
 */class ki{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new ki(0)}static ie(){return new ki(-1)}}/**
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
 */class rX{constructor(e,r){this.referenceDelegate=e,this.N=r}allocateTargetId(e){return this.re(e).next(r=>{const n=new ki(r.highestTargetId);return r.highestTargetId=n.next(),this.oe(e,r).next(()=>r.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.re(e).next(r=>fe.fromTimestamp(new st(r.lastRemoteSnapshotVersion.seconds,r.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.re(e).next(r=>r.highestListenSequenceNumber)}setTargetsMetadata(e,r,n){return this.re(e).next(i=>(i.highestListenSequenceNumber=r,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),r>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=r),this.oe(e,i)))}addTargetData(e,r){return this.ae(e,r).next(()=>this.re(e).next(n=>(n.targetCount+=1,this.ce(r,n),this.oe(e,n))))}updateTargetData(e,r){return this.ae(e,r)}removeTargetData(e,r){return this.removeMatchingKeysForTargetId(e,r.targetId).next(()=>Hs(e).delete(r.targetId)).next(()=>this.re(e)).next(n=>(se(n.targetCount>0),n.targetCount-=1,this.oe(e,n)))}removeTargets(e,r,n){let i=0;const s=[];return Hs(e).Kt((o,a)=>{const c=ec(a);c.sequenceNumber<=r&&n.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>L.waitFor(s)).next(()=>i)}forEachTarget(e,r){return Hs(e).Kt((n,i)=>{const s=ec(i);r(s)})}re(e){return EO(e).get(Xt.key).next(r=>(se(r!==null),r))}oe(e,r){return EO(e).put(Xt.key,r)}ae(e,r){return Hs(e).put(pO(this.N,r))}ce(e,r){let n=!1;return e.targetId>r.highestTargetId&&(r.highestTargetId=e.targetId,n=!0),e.sequenceNumber>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.re(e).next(r=>r.targetCount)}getTargetData(e,r){const n=Ba(r),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return Hs(e).Kt({range:i,index:Mt.queryTargetsIndexName},(o,a,c)=>{const u=ec(a);Dl(r,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,r,n){const i=[],s=An(e);return r.forEach(o=>{const a=pr(o.path);i.push(s.put(new yt(n,a))),i.push(this.referenceDelegate.addReference(e,n,o))}),L.waitFor(i)}removeMatchingKeys(e,r,n){const i=An(e);return L.forEach(r,s=>{const o=pr(s.path);return L.waitFor([i.delete([n,o]),this.referenceDelegate.removeReference(e,n,s)])})}removeMatchingKeysForTargetId(e,r){const n=An(e),i=IDBKeyRange.bound([r],[r+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(e,r){const n=IDBKeyRange.bound([r],[r+1],!1,!0),i=An(e);let s=Te();return i.Kt({range:n,qt:!0},(o,a,c)=>{const u=Jr(o[1]),l=new Z(u);s=s.add(l)}).next(()=>s)}containsKey(e,r){const n=pr(r.path),i=IDBKeyRange.bound([n],[aA(n)],!1,!0);let s=0;return An(e).Kt({index:yt.documentTargetsIndex,qt:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}Et(e,r){return Hs(e).get(r).next(n=>n?ec(n):null)}}function Hs(t){return Ft(t,Mt.store)}function EO(t){return Ft(t,Xt.store)}function An(t){return Ft(t,yt.store)}/**
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
 */async function Pi(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==aO)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */function IO([t,e],[r,n]){const i=ge(t,r);return i===0?ge(e,n):i}class nX{constructor(e){this.ue=e,this.buffer=new Pe(IO),this.he=0}le(){return++this.he}fe(e){const r=[e,this.le()];if(this.buffer.size<this.ue)this.buffer=this.buffer.add(r);else{const n=this.buffer.last();IO(r,n)<0&&(this.buffer=this.buffer.delete(n).add(r))}}get maxValue(){return this.buffer.last()[0]}}class iX{constructor(e,r){this.garbageCollector=e,this.asyncQueue=r,this.de=!1,this.we=null}start(e){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this._e(e)}stop(){this.we&&(this.we.cancel(),this.we=null)}get started(){return this.we!==null}_e(e){const r=this.de?3e5:6e4;V("LruGarbageCollector",`Garbage collection scheduled in ${r}ms`),this.we=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",r,async()=>{this.we=null,this.de=!0;try{await e.collectGarbage(this.garbageCollector)}catch(n){xi(n)?V("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Pi(n)}await this._e(e)})}}class sX{constructor(e,r){this.me=e,this.params=r}calculateTargetCount(e,r){return this.me.ge(e).next(n=>Math.floor(r/100*n))}nthSequenceNumber(e,r){if(r===0)return L.resolve(Ht.T);const n=new nX(r);return this.me.forEachTarget(e,i=>n.fe(i.sequenceNumber)).next(()=>this.me.ye(e,i=>n.fe(i))).next(()=>n.maxValue)}removeTargets(e,r,n){return this.me.removeTargets(e,r,n)}removeOrphanedDocuments(e,r){return this.me.removeOrphanedDocuments(e,r)}collect(e,r){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(yO)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),yO):this.pe(e,r))}getCacheSize(e){return this.me.getCacheSize(e)}pe(e,r){let n,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(n=h,a=Date.now(),this.removeTargets(e,n,r))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(h=>(u=Date.now(),_g()<=be.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
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
 */class oX{constructor(e,r){this.db=e,this.garbageCollector=function(n,i){return new sX(n,i)}(this,r)}ge(e){const r=this.Ee(e);return this.db.getTargetCache().getTargetCount(e).next(n=>r.next(i=>n+i))}Ee(e){let r=0;return this.ye(e,n=>{r++}).next(()=>r)}forEachTarget(e,r){return this.db.getTargetCache().forEachTarget(e,r)}ye(e,r){return this.Te(e,(n,i)=>r(i))}addReference(e,r,n){return Yl(e,n)}removeReference(e,r,n){return Yl(e,n)}removeTargets(e,r,n){return this.db.getTargetCache().removeTargets(e,r,n)}markPotentiallyOrphaned(e,r){return Yl(e,r)}Ie(e,r){return function(n,i){let s=!1;return _O(n).jt(o=>bO(n,o,i).next(a=>(a&&(s=!0),L.resolve(!a)))).next(()=>s)}(e,r)}removeOrphanedDocuments(e,r){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Te(e,(o,a)=>{if(a<=r){const c=this.Ie(e,o).next(u=>{if(!u)return s++,n.getEntry(e,o).next(()=>(n.removeEntry(o),An(e).delete([0,pr(o.path)])))});i.push(c)}}).next(()=>L.waitFor(i)).next(()=>n.apply(e)).next(()=>s)}removeTarget(e,r){const n=r.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,r){return Yl(e,r)}Te(e,r){const n=An(e);let i,s=Ht.T;return n.Kt({index:yt.documentTargetsIndex},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==Ht.T&&r(new Z(Jr(i)),s),s=u,i=c):s=Ht.T}).next(()=>{s!==Ht.T&&r(new Z(Jr(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Yl(t,e){return An(t).put(function(r,n){return new yt(0,pr(r.path),n)}(e,t.currentSequenceNumber))}/**
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
 */class Ys{constructor(e,r){this.mapKeyFn=e,this.equalsFn=r,this.inner={}}get(e){const r=this.mapKeyFn(e),n=this.inner[r];if(n!==void 0){for(const[i,s]of n)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,r){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,r]);i.push([e,r])}else this.inner[n]=[[e,r]]}delete(e){const r=this.mapKeyFn(e),n=this.inner[r];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[r]:n.splice(i,1),!0;return!1}forEach(e){Si(this.inner,(r,n)=>{for(const[i,s]of n)e(i,s)})}isEmpty(){return uA(this.inner)}}/**
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
 */class SO{constructor(){this.changes=new Ys(e=>e.toString(),(e,r)=>e.isEqual(r)),this.changesApplied=!1}getReadTime(e){const r=this.changes.get(e);return r?r.readTime:fe.min()}addEntry(e,r){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:r})}removeEntry(e,r=null){this.assertNotApplied(),this.changes.set(e,{document:ke.newInvalidDocument(e),readTime:r})}getEntry(e,r){this.assertNotApplied();const n=this.changes.get(r);return n!==void 0?L.resolve(n.document):this.getFromCache(e,r)}getEntries(e,r){return this.getAllFromCache(e,r)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class aX{constructor(e,r){this.N=e,this.Ht=r}addEntry(e,r,n){return On(e).put(Xl(r),n)}removeEntry(e,r){const n=On(e),i=Xl(r);return n.delete(i)}updateMetadata(e,r){return this.getMetadata(e).next(n=>(n.byteSize+=r,this.Ae(e,n)))}getEntry(e,r){return On(e).get(Xl(r)).next(n=>this.Re(r,n))}be(e,r){return On(e).get(Xl(r)).next(n=>({document:this.Re(r,n),size:Hl(n)}))}getEntries(e,r){let n=ir();return this.Pe(e,r,(i,s)=>{const o=this.Re(i,s);n=n.insert(i,o)}).next(()=>n)}ve(e,r){let n=ir(),i=new et(Z.comparator);return this.Pe(e,r,(s,o)=>{const a=this.Re(s,o);n=n.insert(s,a),i=i.insert(s,Hl(o))}).next(()=>({documents:n,Ve:i}))}Pe(e,r,n){if(r.isEmpty())return L.resolve();const i=IDBKeyRange.bound(r.first().path.toArray(),r.last().path.toArray()),s=r.getIterator();let o=s.getNext();return On(e).Kt({range:i},(a,c,u)=>{const l=Z.fromSegments(a);for(;o&&Z.comparator(o,l)<0;)n(o,null),o=s.getNext();o&&o.isEqual(l)&&(n(o,c),o=s.hasNext()?s.getNext():null),o?u.Mt(o.path.toArray()):u.done()}).next(()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,r,n){let i=ir();const s=r.path.length+1,o={};if(n.isEqual(fe.min())){const a=r.path.toArray();o.range=IDBKeyRange.lowerBound(a)}else{const a=r.path.toArray(),c=Bg(n);o.range=IDBKeyRange.lowerBound([a,c],!0),o.index=$e.collectionReadTimeIndex}return On(e).Kt(o,(a,c,u)=>{if(a.length!==s)return;const l=jg(this.N,c);r.path.isPrefixOf(l.key.path)?za(r,l)&&(i=i.insert(l.key,l)):u.done()}).next(()=>i)}newChangeBuffer(e){return new cX(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(r=>r.byteSize)}getMetadata(e){return TO(e).get($r.key).next(r=>(se(!!r),r))}Ae(e,r){return TO(e).put($r.key,r)}Re(e,r){if(r){const n=jg(this.N,r);if(!(n.isNoDocument()&&n.version.isEqual(fe.min())))return n}return ke.newInvalidDocument(e)}}class cX extends SO{constructor(e,r){super(),this.Se=e,this.trackRemovals=r,this.De=new Ys(n=>n.toString(),(n,i)=>n.isEqual(i))}applyChanges(e){const r=[];let n=0,i=new Pe((s,o)=>ge(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.De.get(s);if(o.document.isValidDocument()){const c=fO(this.Se.N,o.document,this.getReadTime(s));i=i.add(s.path.popLast()),n+=Hl(c)-a,r.push(this.Se.addEntry(e,s,c))}else if(n-=a,this.trackRemovals){const c=fO(this.Se.N,ke.newNoDocument(s,fe.min()),this.getReadTime(s));r.push(this.Se.addEntry(e,s,c))}else r.push(this.Se.removeEntry(e,s))}),i.forEach(s=>{r.push(this.Se.Ht.addToCollectionParentIndex(e,s))}),r.push(this.Se.updateMetadata(e,n)),L.waitFor(r)}getFromCache(e,r){return this.Se.be(e,r).next(n=>(this.De.set(r,n.size),n.document))}getAllFromCache(e,r){return this.Se.ve(e,r).next(({documents:n,Ve:i})=>(i.forEach((s,o)=>{this.De.set(s,o)}),n))}}function TO(t){return Ft(t,$r.store)}function On(t){return Ft(t,$e.store)}function Xl(t){return t.path.toArray()}/**
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
 */class uX{constructor(e){this.N=e}Ct(e,r,n,i){se(n<i&&n>=0&&i<=11);const s=new Kl("createOrUpgrade",r);n<1&&i>=1&&(function(a){a.createObjectStore(Yt.store)}(e),function(a){a.createObjectStore(In.store,{keyPath:In.keyPath}),a.createObjectStore(Ce.store,{keyPath:Ce.keyPath,autoIncrement:!0}).createIndex(Ce.userMutationsIndex,Ce.userMutationsKeyPath,{unique:!0}),a.createObjectStore(It.store)}(e),AO(e),function(a){a.createObjectStore($e.store)}(e));let o=L.resolve();return n<3&&i>=3&&(n!==0&&(function(a){a.deleteObjectStore(yt.store),a.deleteObjectStore(Mt.store),a.deleteObjectStore(Xt.store)}(e),AO(e)),o=o.next(()=>function(a){const c=a.store(Xt.store),u=new Xt(0,0,fe.min().toTimestamp(),0);return c.put(Xt.key,u)}(s))),n<4&&i>=4&&(n!==0&&(o=o.next(()=>function(a,c){return c.store(Ce.store).Lt().next(u=>{a.deleteObjectStore(Ce.store),a.createObjectStore(Ce.store,{keyPath:Ce.keyPath,autoIncrement:!0}).createIndex(Ce.userMutationsIndex,Ce.userMutationsKeyPath,{unique:!0});const l=c.store(Ce.store),h=u.map(f=>l.put(f));return L.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore(Zr.store,{keyPath:Zr.keyPath})})(e)})),n<5&&i>=5&&(o=o.next(()=>this.Ce(s))),n<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore($r.store)}(e),this.Ne(s)))),n<7&&i>=7&&(o=o.next(()=>this.xe(s))),n<8&&i>=8&&(o=o.next(()=>this.ke(e,s))),n<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e),function(a){const c=a.objectStore($e.store);c.createIndex($e.readTimeIndex,$e.readTimeIndexPath,{unique:!1}),c.createIndex($e.collectionReadTimeIndex,$e.collectionReadTimeIndexPath,{unique:!1})}(r)})),n<10&&i>=10&&(o=o.next(()=>this.$e(s))),n<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore(Vs.store,{keyPath:Vs.keyPath})})(e),function(a){a.createObjectStore(qs.store,{keyPath:qs.keyPath})}(e)})),o}Ne(e){let r=0;return e.store($e.store).Kt((n,i)=>{r+=Hl(i)}).next(()=>{const n=new $r(r);return e.store($r.store).put($r.key,n)})}Ce(e){const r=e.store(In.store),n=e.store(Ce.store);return r.Lt().next(i=>L.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return n.Lt(Ce.userMutationsIndex,o).next(a=>L.forEach(a,c=>{se(c.userId===s.userId);const u=Gs(this.N,c);return wO(e,s.userId,u).next(()=>{})}))}))}xe(e){const r=e.store(yt.store),n=e.store($e.store);return e.store(Xt.store).get(Xt.key).next(i=>{const s=[];return n.Kt((o,a)=>{const c=new Ee(o),u=function(l){return[0,pr(l)]}(c);s.push(r.get(u).next(l=>l?L.resolve():(h=>r.put(new yt(0,pr(h),i.highestListenSequenceNumber)))(c)))}).next(()=>L.waitFor(s))})}ke(e,r){e.createObjectStore(Ri.store,{keyPath:Ri.keyPath});const n=r.store(Ri.store),i=new qg,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return n.put({collectionId:a,parent:pr(c)})}};return r.store($e.store).Kt({qt:!0},(o,a)=>{const c=new Ee(o);return s(c.popLast())}).next(()=>r.store(It.store).Kt({qt:!0},([o,a,c],u)=>{const l=Jr(a);return s(l.popLast())}))}$e(e){const r=e.store(Mt.store);return r.Kt((n,i)=>{const s=ec(i),o=pO(this.N,s);return r.put(o)})}}function AO(t){t.createObjectStore(yt.store,{keyPath:yt.keyPath}).createIndex(yt.documentTargetsIndex,yt.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(Mt.store,{keyPath:Mt.keyPath}).createIndex(Mt.queryTargetsIndexName,Mt.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(Xt.store)}const Wg="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Gg{constructor(e,r,n,i,s,o,a,c,u,l){if(this.allowTabSynchronization=e,this.persistenceKey=r,this.clientId=n,this.Oe=s,this.window=o,this.document=a,this.Fe=u,this.Me=l,this.Le=null,this.Be=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ue=null,this.inForeground=!1,this.qe=null,this.Ke=null,this.je=Number.NEGATIVE_INFINITY,this.Qe=h=>Promise.resolve(),!Gg.bt())throw new M(x.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new oX(this,i),this.We=r+"main",this.N=new hO(c),this.Ge=new vr(this.We,11,new uX(this.N)),this.ze=new rX(this.referenceDelegate,this.N),this.Ht=new tX,this.He=function(h,f){return new aX(h,f)}(this.N,this.Ht),this.Je=new Z6,this.window&&this.window.localStorage?this.Ye=this.window.localStorage:(this.Ye=null,l===!1&&We("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Xe().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new M(x.FAILED_PRECONDITION,Wg);return this.Ze(),this.tn(),this.en(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.ze.getHighestSequenceNumber(e))}).then(e=>{this.Le=new Ht(e,this.Fe)}).then(()=>{this.Be=!0}).catch(e=>(this.Ge&&this.Ge.close(),Promise.reject(e)))}nn(e){return this.Qe=async r=>{if(this.started)return e(r)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ge.xt(async r=>{r.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Oe.enqueueAndForget(async()=>{this.started&&await this.Xe()}))}Xe(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ql(e).put(new Zr(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.sn(e).next(r=>{r||(this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)))})}).next(()=>this.rn(e)).next(r=>this.isPrimary&&!r?this.on(e).next(()=>!1):!!r&&this.an(e).next(()=>!0))).catch(e=>{if(xi(e))return V("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return V("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Oe.enqueueRetryable(()=>this.Qe(e)),this.isPrimary=e})}sn(e){return tc(e).get(Yt.key).next(r=>L.resolve(this.cn(r)))}un(e){return Ql(e).delete(this.clientId)}async hn(){if(this.isPrimary&&!this.ln(this.je,18e5)){this.je=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",r=>{const n=Ft(r,Zr.store);return n.Lt().next(i=>{const s=this.fn(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return L.forEach(o,a=>n.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ye)for(const r of e)this.Ye.removeItem(this.dn(r.clientId))}}en(){this.Ke=this.Oe.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Xe().then(()=>this.hn()).then(()=>this.en()))}cn(e){return!!e&&e.ownerId===this.clientId}rn(e){return this.Me?L.resolve(!0):tc(e).get(Yt.key).next(r=>{if(r!==null&&this.ln(r.leaseTimestampMs,5e3)&&!this.wn(r.ownerId)){if(this.cn(r)&&this.networkEnabled)return!0;if(!this.cn(r)){if(!r.allowTabSynchronization)throw new M(x.FAILED_PRECONDITION,Wg);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ql(e).Lt().next(n=>this.fn(n,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(r=>(this.isPrimary!==r&&V("IndexedDbPersistence",`Client ${r?"is":"is not"} eligible for a primary lease.`),r))}async shutdown(){this.Be=!1,this._n(),this.Ke&&(this.Ke.cancel(),this.Ke=null),this.mn(),this.gn(),await this.Ge.runTransaction("shutdown","readwrite",[Yt.store,Zr.store],e=>{const r=new lO(e,Ht.T);return this.on(r).next(()=>this.un(r))}),this.Ge.close(),this.yn()}fn(e,r){return e.filter(n=>this.ln(n.updateTimeMs,r)&&!this.wn(n.clientId))}pn(){return this.runTransaction("getActiveClients","readonly",e=>Ql(e).Lt().next(r=>this.fn(r,18e5).map(n=>n.clientId)))}get started(){return this.Be}getMutationQueue(e){return zg.Yt(e,this.N,this.Ht,this.referenceDelegate)}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getIndexManager(){return this.Ht}getBundleCache(){return this.Je}runTransaction(e,r,n){V("IndexedDbPersistence","Starting transaction:",e);const i=r==="readonly"?"readonly":"readwrite";let s;return this.Ge.runTransaction(e,i,X6,o=>(s=new lO(o,this.Le?this.Le.next():Ht.T),r==="readwrite-primary"?this.sn(s).next(a=>!!a||this.rn(s)).next(a=>{if(!a)throw We(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)),new M(x.FAILED_PRECONDITION,aO);return n(s)}).next(a=>this.an(s).next(()=>a)):this.En(s).next(()=>n(s)))).then(o=>(s.raiseOnCommittedEvent(),o))}En(e){return tc(e).get(Yt.key).next(r=>{if(r!==null&&this.ln(r.leaseTimestampMs,5e3)&&!this.wn(r.ownerId)&&!this.cn(r)&&!(this.Me||this.allowTabSynchronization&&r.allowTabSynchronization))throw new M(x.FAILED_PRECONDITION,Wg)})}an(e){const r=new Yt(this.clientId,this.allowTabSynchronization,Date.now());return tc(e).put(Yt.key,r)}static bt(){return vr.bt()}on(e){const r=tc(e);return r.get(Yt.key).next(n=>this.cn(n)?(V("IndexedDbPersistence","Releasing primary lease."),r.delete(Yt.key)):L.resolve())}ln(e,r){const n=Date.now();return!(e<n-r)&&(!(e>n)||(We(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Ze(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.qe=()=>{this.Oe.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Xe()))},this.document.addEventListener("visibilitychange",this.qe),this.inForeground=this.document.visibilityState==="visible")}mn(){this.qe&&(this.document.removeEventListener("visibilitychange",this.qe),this.qe=null)}tn(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ue=()=>{this._n(),GG()&&navigator.appVersion.match("Version/14")&&this.Oe.enterRestrictedMode(!0),this.Oe.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ue))}gn(){this.Ue&&(this.window.removeEventListener("pagehide",this.Ue),this.Ue=null)}wn(e){var r;try{const n=((r=this.Ye)===null||r===void 0?void 0:r.getItem(this.dn(e)))!==null;return V("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return We("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}_n(){if(this.Ye)try{this.Ye.setItem(this.dn(this.clientId),String(Date.now()))}catch(e){We("Failed to set zombie client id.",e)}}yn(){if(this.Ye)try{this.Ye.removeItem(this.dn(this.clientId))}catch(e){}}dn(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function tc(t){return Ft(t,Yt.store)}function Ql(t){return Ft(t,Zr.store)}function Kg(t,e){let r=t.projectId;return t.isDefaultDatabase||(r+="."+t.database),"firestore/"+e+"/"+r+"/"}/**
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
 */class lX{constructor(e,r){this.progress=e,this.Tn=r}}/**
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
 */class OO{constructor(e,r,n){this.He=e,this.In=r,this.Ht=n}An(e,r){return this.In.getAllMutationBatchesAffectingDocumentKey(e,r).next(n=>this.Rn(e,r,n))}Rn(e,r,n){return this.He.getEntry(e,r).next(i=>{for(const s of n)s.applyToLocalView(i);return i})}bn(e,r){e.forEach((n,i)=>{for(const s of r)s.applyToLocalView(i)})}Pn(e,r){return this.He.getEntries(e,r).next(n=>this.vn(e,n).next(()=>n))}vn(e,r){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,r).next(n=>this.bn(r,n))}getDocumentsMatchingQuery(e,r,n){return function(i){return Z.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(r)?this.Vn(e,r.path):xg(r)?this.Sn(e,r,n):this.Dn(e,r,n)}Vn(e,r){return this.An(e,new Z(r)).next(n=>{let i=$g();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}Sn(e,r,n){const i=r.collectionGroup;let s=$g();return this.Ht.getCollectionParents(e,i).next(o=>L.forEach(o,a=>{const c=function(u,l){return new Qr(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(r,a.child(i));return this.Dn(e,c,n).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}Dn(e,r,n){let i,s;return this.He.getDocumentsMatchingQuery(e,r,n).next(o=>(i=o,this.In.getAllMutationBatchesAffectingQuery(e,r))).next(o=>(s=o,this.Cn(e,s,i).next(a=>{i=a;for(const c of s)for(const u of c.mutations){const l=u.key;let h=i.get(l);h==null&&(h=ke.newInvalidDocument(l),i=i.insert(l,h)),kg(u,h,c.localWriteTime),h.isFoundDocument()||(i=i.remove(l))}}))).next(()=>(i.forEach((o,a)=>{za(r,a)||(i=i.remove(o))}),i))}Cn(e,r,n){let i=Te();for(const o of r)for(const a of o.mutations)a instanceof En&&n.get(a.key)===null&&(i=i.add(a.key));let s=n;return this.He.getEntries(e,i).next(o=>(o.forEach((a,c)=>{c.isFoundDocument()&&(s=s.insert(a,c))}),s))}}/**
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
 */class Hg{constructor(e,r,n,i){this.targetId=e,this.fromCache=r,this.Nn=n,this.xn=i}static kn(e,r){let n=Te(),i=Te();for(const s of r.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Hg(e,r.fromCache,n,i)}}/**
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
 */class CO{$n(e){this.On=e}getDocumentsMatchingQuery(e,r,n,i){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(r)||n.isEqual(fe.min())?this.Fn(e,r):this.On.Pn(e,i).next(s=>{const o=this.Mn(r,s);return(Fl(r)||Ul(r))&&this.Ln(r.limitType,o,i,n)?this.Fn(e,r):(_g()<=be.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Ng(r)),this.On.getDocumentsMatchingQuery(e,r,n).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}Mn(e,r){let n=new Pe(IA(e));return r.forEach((i,s)=>{za(e,s)&&(n=n.add(s))}),n}Ln(e,r,n,i){if(n.size!==r.size)return!0;const s=e==="F"?r.last():r.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Fn(e,r){return _g()<=be.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Ng(r)),this.On.getDocumentsMatchingQuery(e,r,fe.min())}}/**
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
 */class hX{constructor(e,r,n,i){this.persistence=e,this.Bn=r,this.N=i,this.Un=new et(ge),this.qn=new Ys(s=>Ba(s),Dl),this.Kn=fe.min(),this.In=e.getMutationQueue(n),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new OO(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",r=>e.collect(r,this.Un))}}function RO(t,e,r,n){return new hX(t,e,r,n)}async function xO(t,e){const r=K(t);let n=r.In,i=r.Qn;const s=await r.persistence.runTransaction("Handle user change","readonly",o=>{let a;return r.In.getAllMutationBatches(o).next(c=>(a=c,n=r.persistence.getMutationQueue(e),i=new OO(r.jn,n,r.persistence.getIndexManager()),n.getAllMutationBatches(o))).next(c=>{const u=[],l=[];let h=Te();for(const f of a){u.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}for(const f of c){l.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}return i.Pn(o,h).next(f=>({Wn:f,removedBatchIds:u,addedBatchIds:l}))})});return r.In=n,r.Qn=i,r.Bn.$n(r.Qn),s}function fX(t,e){const r=K(t);return r.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=e.batch.keys(),s=r.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=L.resolve();return h.forEach(p=>{f=f.next(()=>u.getEntry(a,p)).next(g=>{const I=c.docVersions.get(p);se(I!==null),g.version.compareTo(I)<0&&(l.applyToRemoteDocument(g,c),g.isValidDocument()&&u.addEntry(g,c.commitVersion))})}),f.next(()=>o.In.removeMutationBatch(a,l))}(r,n,e,s).next(()=>s.apply(n)).next(()=>r.In.performConsistencyCheck(n)).next(()=>r.Qn.Pn(n,i))})}function NO(t){const e=K(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",r=>e.ze.getLastRemoteSnapshotVersion(r))}function dX(t,e){const r=K(t),n=e.snapshotVersion;let i=r.Un;return r.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=r.jn.newChangeBuffer({trackRemovals:!0});i=r.Un;const a=[];e.targetChanges.forEach((u,l)=>{const h=i.get(l);if(!h)return;a.push(r.ze.removeMatchingKeys(s,u.removedDocuments,l).next(()=>r.ze.addMatchingKeys(s,u.addedDocuments,l)));const f=u.resumeToken;if(f.approximateByteSize()>0){const p=h.withResumeToken(f,n).withSequenceNumber(s.currentSequenceNumber);i=i.insert(l,p),function(g,I,E){return se(I.resumeToken.approximateByteSize()>0),g.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(h,p,u)&&a.push(r.ze.updateTargetData(s,p))}});let c=ir();if(e.documentUpdates.forEach((u,l)=>{e.resolvedLimboDocuments.has(u)&&a.push(r.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(kO(s,o,e.documentUpdates,n,void 0).next(u=>{c=u})),!n.isEqual(fe.min())){const u=r.ze.getLastRemoteSnapshotVersion(s).next(l=>r.ze.setTargetsMetadata(s,s.currentSequenceNumber,n));a.push(u)}return L.waitFor(a).next(()=>o.apply(s)).next(()=>r.Qn.vn(s,c)).next(()=>c)}).then(s=>(r.Un=i,s))}function kO(t,e,r,n,i){let s=Te();return r.forEach(o=>s=s.add(o)),e.getEntries(t,s).next(o=>{let a=ir();return r.forEach((c,u)=>{const l=o.get(c),h=(i==null?void 0:i.get(c))||n;u.isNoDocument()&&u.version.isEqual(fe.min())?(e.removeEntry(c,h),a=a.insert(c,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u,h),a=a.insert(c,u)):V("LocalStore","Ignoring outdated watch update for ",c,". Current version:",l.version," Watch version:",u.version)}),a})}function pX(t,e){const r=K(t);return r.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),r.In.getNextMutationBatchAfterBatchId(n,e)))}function Xs(t,e){const r=K(t);return r.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return r.ze.getTargetData(n,e).next(s=>s?(i=s,L.resolve(i)):r.ze.allocateTargetId(n).next(o=>(i=new Sn(e,o,0,n.currentSequenceNumber),r.ze.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=r.Un.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(r.Un=r.Un.insert(n.targetId,n),r.qn.set(e,n.targetId)),n})}async function Qs(t,e,r){const n=K(t),i=n.Un.get(e),s=r?"readwrite":"readwrite-primary";try{r||await n.persistence.runTransaction("Release target",s,o=>n.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!xi(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}n.Un=n.Un.remove(e),n.qn.delete(i.target)}function Jl(t,e,r){const n=K(t);let i=fe.min(),s=Te();return n.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=K(a),h=l.qn.get(u);return h!==void 0?L.resolve(l.Un.get(h)):l.ze.getTargetData(c,u)}(n,o,nr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,n.ze.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>n.Bn.getDocumentsMatchingQuery(o,e,r?i:fe.min(),r?s:Te())).next(a=>({documents:a,Gn:s})))}function PO(t,e){const r=K(t),n=K(r.ze),i=r.Un.get(e);return i?Promise.resolve(i.target):r.persistence.runTransaction("Get target data","readonly",s=>n.Et(s,e).next(o=>o?o.target:null))}function $O(t){const e=K(t);return e.persistence.runTransaction("Get new document changes","readonly",r=>function(n,i,s){const o=K(n);let a=ir(),c=Bg(s);const u=On(i),l=IDBKeyRange.lowerBound(c,!0);return u.Kt({index:$e.readTimeIndex,range:l},(h,f)=>{const p=jg(o.N,f);a=a.insert(p.key,p),c=f.readTime}).next(()=>({Tn:a,readTime:dO(c)}))}(e.jn,r,e.Kn)).then(({Tn:r,readTime:n})=>(e.Kn=n,r))}async function vX(t){const e=K(t);return e.persistence.runTransaction("Synchronize last document change read time","readonly",r=>function(n){const i=On(n);let s=fe.min();return i.Kt({index:$e.readTimeIndex,reverse:!0},(o,a,c)=>{a.readTime&&(s=dO(a.readTime)),c.done()}).next(()=>s)}(r)).then(r=>{e.Kn=r})}async function gX(t,e,r,n){const i=K(t);let s=Te(),o=ir(),a=jA();for(const l of r){const h=e.zn(l.metadata.name);l.document&&(s=s.add(h)),o=o.insert(h,e.Hn(l)),a=a.insert(h,e.Jn(l.metadata.readTime))}const c=i.jn.newChangeBuffer({trackRemovals:!0}),u=await Xs(i,function(l){return nr(Ls(Ee.fromString(`__bundle__/docs/${l}`)))}(n));return i.persistence.runTransaction("Apply bundle documents","readwrite",l=>kO(l,c,o,fe.min(),a).next(h=>(c.apply(l),h)).next(h=>i.ze.removeMatchingKeysForTargetId(l,u.targetId).next(()=>i.ze.addMatchingKeys(l,s,u.targetId)).next(()=>i.Qn.vn(l,h)).next(()=>h)))}async function mX(t,e,r=Te()){const n=await Xs(t,nr(Vg(e.bundledQuery))),i=K(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=at(e.readTime);if(n.snapshotVersion.compareTo(o)>=0)return i.Je.saveNamedQuery(s,e);const a=n.withResumeToken(ot.EMPTY_BYTE_STRING,o);return i.Un=i.Un.insert(a.targetId,a),i.ze.updateTargetData(s,a).next(()=>i.ze.removeMatchingKeysForTargetId(s,n.targetId)).next(()=>i.ze.addMatchingKeys(s,r,n.targetId)).next(()=>i.Je.saveNamedQuery(s,e))})}/**
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
 */class yX{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,r){return L.resolve(this.Yn.get(r))}saveBundleMetadata(e,r){var n;return this.Yn.set(r.id,{id:(n=r).id,version:n.version,createTime:at(n.createTime)}),L.resolve()}getNamedQuery(e,r){return L.resolve(this.Xn.get(r))}saveNamedQuery(e,r){return this.Xn.set(r.name,function(n){return{name:n.name,query:Vg(n.bundledQuery),readTime:at(n.readTime)}}(r)),L.resolve()}}/**
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
 */class Yg{constructor(){this.Zn=new Pe(ct.ts),this.es=new Pe(ct.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,r){const n=new ct(e,r);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(e,r){e.forEach(n=>this.addReference(n,r))}removeReference(e,r){this.rs(new ct(e,r))}os(e,r){e.forEach(n=>this.removeReference(n,r))}cs(e){const r=new Z(new Ee([])),n=new ct(r,e),i=new ct(r,e+1),s=[];return this.es.forEachInRange([n,i],o=>{this.rs(o),s.push(o.key)}),s}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const r=new Z(new Ee([])),n=new ct(r,e),i=new ct(r,e+1);let s=Te();return this.es.forEachInRange([n,i],o=>{s=s.add(o.key)}),s}containsKey(e){const r=new ct(e,0),n=this.Zn.firstAfterOrEqual(r);return n!==null&&e.isEqual(n.key)}}class ct{constructor(e,r){this.key=e,this.ls=r}static ts(e,r){return Z.comparator(e.key,r.key)||ge(e.ls,r.ls)}static ns(e,r){return ge(e.ls,r.ls)||Z.comparator(e.key,r.key)}}/**
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
 */class wX{constructor(e,r){this.Ht=e,this.referenceDelegate=r,this.In=[],this.fs=1,this.ds=new Pe(ct.ts)}checkEmpty(e){return L.resolve(this.In.length===0)}addMutationBatch(e,r,n,i){const s=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new Fg(s,r,n,i);this.In.push(o);for(const a of i)this.ds=this.ds.add(new ct(a.key,s)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,r){return L.resolve(this.ws(r))}getNextMutationBatchAfterBatchId(e,r){const n=r+1,i=this._s(n),s=i<0?0:i;return L.resolve(this.In.length>s?this.In[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return L.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,r){const n=new ct(r,0),i=new ct(r,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([n,i],o=>{const a=this.ws(o.ls);s.push(a)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,r){let n=new Pe(ge);return r.forEach(i=>{const s=new ct(i,0),o=new ct(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{n=n.add(a.ls)})}),L.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(e,r){const n=r.path,i=n.length+1;let s=n;Z.isDocumentKey(s)||(s=s.child(""));const o=new ct(new Z(s),0);let a=new Pe(ge);return this.ds.forEachWhile(c=>{const u=c.key.path;return!!n.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.ls)),!0)},o),L.resolve(this.gs(a))}gs(e){const r=[];return e.forEach(n=>{const i=this.ws(n);i!==null&&r.push(i)}),r}removeMutationBatch(e,r){se(this.ys(r.batchId,"removed")===0),this.In.shift();let n=this.ds;return L.forEach(r.mutations,i=>{const s=new ct(i.key,r.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=n})}te(e){}containsKey(e,r){const n=new ct(r,0),i=this.ds.firstAfterOrEqual(n);return L.resolve(r.isEqual(i&&i.key))}performConsistencyCheck(e){return this.In.length,L.resolve()}ys(e,r){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const r=this._s(e);return r<0||r>=this.In.length?null:this.In[r]}}/**
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
 */class bX{constructor(e,r){this.Ht=e,this.ps=r,this.docs=new et(Z.comparator),this.size=0}addEntry(e,r,n){const i=r.key,s=this.docs.get(i),o=s?s.size:0,a=this.ps(r);return this.docs=this.docs.insert(i,{document:r.clone(),size:a,readTime:n}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const r=this.docs.get(e);r&&(this.docs=this.docs.remove(e),this.size-=r.size)}getEntry(e,r){const n=this.docs.get(r);return L.resolve(n?n.document.clone():ke.newInvalidDocument(r))}getEntries(e,r){let n=ir();return r.forEach(i=>{const s=this.docs.get(i);n=n.insert(i,s?s.document.clone():ke.newInvalidDocument(i))}),L.resolve(n)}getDocumentsMatchingQuery(e,r,n){let i=ir();const s=new Z(r.path.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:c,readTime:u}}=o.getNext();if(!r.path.isPrefixOf(a.path))break;u.compareTo(n)<=0||za(r,c)&&(i=i.insert(c.key,c.clone()))}return L.resolve(i)}Es(e,r){return L.forEach(this.docs,n=>r(n))}newChangeBuffer(e){return new _X(this)}getSize(e){return L.resolve(this.size)}}class _X extends SO{constructor(e){super(),this.Se=e}applyChanges(e){const r=[];return this.changes.forEach((n,i)=>{i.document.isValidDocument()?r.push(this.Se.addEntry(e,i.document,this.getReadTime(n))):this.Se.removeEntry(n)}),L.waitFor(r)}getFromCache(e,r){return this.Se.getEntry(e,r)}getAllFromCache(e,r){return this.Se.getEntries(e,r)}}/**
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
 */class EX{constructor(e){this.persistence=e,this.Ts=new Ys(r=>Ba(r),Dl),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.Is=0,this.As=new Yg,this.targetCount=0,this.Rs=ki.se()}forEachTarget(e,r){return this.Ts.forEach((n,i)=>r(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,r,n){return n&&(this.lastRemoteSnapshotVersion=n),r>this.Is&&(this.Is=r),L.resolve()}ae(e){this.Ts.set(e.target,e);const r=e.targetId;r>this.highestTargetId&&(this.Rs=new ki(r),this.highestTargetId=r),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,r){return this.ae(r),this.targetCount+=1,L.resolve()}updateTargetData(e,r){return this.ae(r),L.resolve()}removeTargetData(e,r){return this.Ts.delete(r.target),this.As.cs(r.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,r,n){let i=0;const s=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=r&&n.get(a.targetId)===null&&(this.Ts.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,r){const n=this.Ts.get(r)||null;return L.resolve(n)}addMatchingKeys(e,r,n){return this.As.ss(r,n),L.resolve()}removeMatchingKeys(e,r,n){this.As.os(r,n);const i=this.persistence.referenceDelegate,s=[];return i&&r.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,r){return this.As.cs(r),L.resolve()}getMatchingKeysForTargetId(e,r){const n=this.As.hs(r);return L.resolve(n)}containsKey(e,r){return L.resolve(this.As.containsKey(r))}}/**
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
 */class IX{constructor(e,r){this.bs={},this.Le=new Ht(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new EX(this),this.Ht=new eX,this.He=function(n,i){return new bX(n,i)}(this.Ht,n=>this.referenceDelegate.Ps(n)),this.N=new hO(r),this.Je=new yX(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let r=this.bs[e.toKey()];return r||(r=new wX(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=r),r}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,r,n){V("MemoryPersistence","Starting transaction:",e);const i=new SX(this.Le.next());return this.referenceDelegate.vs(),n(i).next(s=>this.referenceDelegate.Vs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ss(e,r){return L.or(Object.values(this.bs).map(n=>()=>n.containsKey(e,r)))}}class SX extends cO{constructor(e){super(),this.currentSequenceNumber=e}}class Xg{constructor(e){this.persistence=e,this.Ds=new Yg,this.Cs=null}static Ns(e){return new Xg(e)}get xs(){if(this.Cs)return this.Cs;throw ee()}addReference(e,r,n){return this.Ds.addReference(n,r),this.xs.delete(n.toString()),L.resolve()}removeReference(e,r,n){return this.Ds.removeReference(n,r),this.xs.add(n.toString()),L.resolve()}markPotentiallyOrphaned(e,r){return this.xs.add(r.toString()),L.resolve()}removeTarget(e,r){this.Ds.cs(r.targetId).forEach(i=>this.xs.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,r.targetId).next(i=>{i.forEach(s=>this.xs.add(s.toString()))}).next(()=>n.removeTargetData(e,r))}vs(){this.Cs=new Set}Vs(e){const r=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.xs,n=>{const i=Z.fromPath(n);return this.ks(e,i).next(s=>{s||r.removeEntry(i)})}).next(()=>(this.Cs=null,r.apply(e)))}updateLimboDocument(e,r){return this.ks(e,r).next(n=>{n?this.xs.delete(r.toString()):this.xs.add(r.toString())})}Ps(e){return 0}ks(e,r){return L.or([()=>L.resolve(this.Ds.containsKey(r)),()=>this.persistence.getTargetCache().containsKey(e,r),()=>this.persistence.Ss(e,r)])}}/**
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
 */function DO(t,e){return`firestore_clients_${t}_${e}`}function LO(t,e,r){let n=`firestore_mutations_${t}_${r}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}function Qg(t,e){return`firestore_targets_${t}_${e}`}class Zl{constructor(e,r,n,i){this.user=e,this.batchId=r,this.state=n,this.error=i}static $s(e,r,n){const i=JSON.parse(n);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new M(i.error.code,i.error.message))),o?new Zl(e,r,i.state,s):(We("SharedClientState",`Failed to parse mutation state for ID '${r}': ${n}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class rc{constructor(e,r,n){this.targetId=e,this.state=r,this.error=n}static $s(e,r){const n=JSON.parse(r);let i,s=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return s&&n.error&&(s=typeof n.error.message=="string"&&typeof n.error.code=="string",s&&(i=new M(n.error.code,n.error.message))),s?new rc(e,n.state,i):(We("SharedClientState",`Failed to parse target state for ID '${e}': ${r}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class eh{constructor(e,r){this.clientId=e,this.activeTargetIds=r}static $s(e,r){const n=JSON.parse(r);let i=typeof n=="object"&&n.activeTargetIds instanceof Array,s=zl();for(let o=0;i&&o<n.activeTargetIds.length;++o)i=hA(n.activeTargetIds[o]),s=s.add(n.activeTargetIds[o]);return i?new eh(e,s):(We("SharedClientState",`Failed to parse client data for instance '${e}': ${r}`),null)}}class Jg{constructor(e,r){this.clientId=e,this.onlineState=r}static $s(e){const r=JSON.parse(e);return typeof r=="object"&&["Unknown","Online","Offline"].indexOf(r.onlineState)!==-1&&typeof r.clientId=="string"?new Jg(r.clientId,r.onlineState):(We("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Zg{constructor(){this.activeTargetIds=zl()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class em{constructor(e,r,n,i,s){this.window=e,this.Oe=r,this.persistenceKey=n,this.Ls=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Bs=this.Us.bind(this),this.qs=new et(ge),this.started=!1,this.Ks=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.js=DO(this.persistenceKey,this.Ls),this.Qs=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.qs=this.qs.insert(this.Ls,new Zg),this.Ws=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Gs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.zs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Hs=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Js=function(a){return`firestore_bundle_loaded_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.Bs)}static bt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.pn();for(const n of e){if(n===this.Ls)continue;const i=this.getItem(DO(this.persistenceKey,n));if(i){const s=eh.$s(n,i);s&&(this.qs=this.qs.insert(s.clientId,s))}}this.Ys();const r=this.storage.getItem(this.Hs);if(r){const n=this.Xs(r);n&&this.Zs(n)}for(const n of this.Ks)this.Us(n);this.Ks=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Qs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ti(this.qs)}isActiveQueryTarget(e){let r=!1;return this.qs.forEach((n,i)=>{i.activeTargetIds.has(e)&&(r=!0)}),r}addPendingMutation(e){this.ei(e,"pending")}updateMutationState(e,r,n){this.ei(e,r,n),this.ni(e)}addLocalQueryTarget(e){let r="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(Qg(this.persistenceKey,e));if(n){const i=rc.$s(e,n);i&&(r=i.state)}}return this.si.Fs(e),this.Ys(),r}removeLocalQueryTarget(e){this.si.Ms(e),this.Ys()}isLocalQueryTarget(e){return this.si.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Qg(this.persistenceKey,e))}updateQueryState(e,r,n){this.ii(e,r,n)}handleUserChange(e,r,n){r.forEach(i=>{this.ni(i)}),this.currentUser=e,n.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.ri(e)}notifyBundleLoaded(){this.oi()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Bs),this.removeItem(this.js),this.started=!1)}getItem(e){const r=this.storage.getItem(e);return V("SharedClientState","READ",e,r),r}setItem(e,r){V("SharedClientState","SET",e,r),this.storage.setItem(e,r)}removeItem(e){V("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Us(e){const r=e;if(r.storageArea===this.storage){if(V("SharedClientState","EVENT",r.key,r.newValue),r.key===this.js)return void We("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Oe.enqueueRetryable(async()=>{if(this.started){if(r.key!==null){if(this.Ws.test(r.key)){if(r.newValue==null){const n=this.ai(r.key);return this.ci(n,null)}{const n=this.ui(r.key,r.newValue);if(n)return this.ci(n.clientId,n)}}else if(this.Gs.test(r.key)){if(r.newValue!==null){const n=this.hi(r.key,r.newValue);if(n)return this.li(n)}}else if(this.zs.test(r.key)){if(r.newValue!==null){const n=this.fi(r.key,r.newValue);if(n)return this.di(n)}}else if(r.key===this.Hs){if(r.newValue!==null){const n=this.Xs(r.newValue);if(n)return this.Zs(n)}}else if(r.key===this.Qs){const n=function(i){let s=Ht.T;if(i!=null)try{const o=JSON.parse(i);se(typeof o=="number"),s=o}catch(o){We("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(r.newValue);n!==Ht.T&&this.sequenceNumberHandler(n)}else if(r.key===this.Js)return this.syncEngine.wi()}}else this.Ks.push(r)})}}get si(){return this.qs.get(this.Ls)}Ys(){this.setItem(this.js,this.si.Os())}ei(e,r,n){const i=new Zl(this.currentUser,e,r,n),s=LO(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Os())}ni(e){const r=LO(this.persistenceKey,this.currentUser,e);this.removeItem(r)}ri(e){const r={clientId:this.Ls,onlineState:e};this.storage.setItem(this.Hs,JSON.stringify(r))}ii(e,r,n){const i=Qg(this.persistenceKey,e),s=new rc(e,r,n);this.setItem(i,s.Os())}oi(){this.setItem(this.Js,"value-not-used")}ai(e){const r=this.Ws.exec(e);return r?r[1]:null}ui(e,r){const n=this.ai(e);return eh.$s(n,r)}hi(e,r){const n=this.Gs.exec(e),i=Number(n[1]),s=n[2]!==void 0?n[2]:null;return Zl.$s(new vt(s),i,r)}fi(e,r){const n=this.zs.exec(e),i=Number(n[1]);return rc.$s(i,r)}Xs(e){return Jg.$s(e)}async li(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine._i(e.batchId,e.state,e.error);V("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}di(e){return this.syncEngine.mi(e.targetId,e.state,e.error)}ci(e,r){const n=r?this.qs.insert(e,r):this.qs.remove(e),i=this.ti(this.qs),s=this.ti(n),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.gi(o,a).then(()=>{this.qs=n})}Zs(e){this.qs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ti(e){let r=zl();return e.forEach((n,i)=>{r=r.unionWith(i.activeTargetIds)}),r}}class MO{constructor(){this.yi=new Zg,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,r,n){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,r,n){this.pi[e]=r}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new Zg,Promise.resolve()}handleUserChange(e,r,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class TX{Ei(e){}shutdown(){}}/**
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
 */class FO{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const AX={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class OX{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
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
 */class CX extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http";this.Fi=r+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,r,n,i){const s=this.Bi(e,r);V("RestConnection","Sending: ",s,n);const o={};return this.Ui(o,i),this.qi(e,s,o,n).then(a=>(V("RestConnection","Received: ",a),a),a=>{throw La("RestConnection",`${e} failed with error: `,a,"url: ",s,"request:",n),a})}Ki(e,r,n,i){return this.Li(e,r,n,i)}Ui(e,r){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+xs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r)for(const n in r.authHeaders)r.authHeaders.hasOwnProperty(n)&&(e[n]=r.authHeaders[n])}Bi(e,r){const n=AX[e];return`${this.Fi}/v1/${r}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,r,n,i){return new Promise((s,o)=>{const a=new X4;a.listenOnce(K4.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case bg.NO_ERROR:const u=a.getResponseJson();V("Connection","XHR received:",JSON.stringify(u)),s(u);break;case bg.TIMEOUT:V("Connection",'RPC "'+e+'" timed out'),o(new M(x.DEADLINE_EXCEEDED,"Request time out"));break;case bg.HTTP_ERROR:const l=a.getStatus();if(V("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(p){const g=p.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(g)>=0?g:x.UNKNOWN}(h.status);o(new M(f,h.message))}else o(new M(x.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new M(x.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{V("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(r,"POST",c,n,15)})}ji(e,r){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=W4(),s=G4(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Y4({})),this.Ui(o.initMessageHeaders,r),mS()||Pu()||zG()||Gp()||WG()||Wp()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=n.join("");V("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let u=!1,l=!1;const h=new OX({vi:p=>{l?V("Connection","Not sending because WebChannel is closed:",p):(u||(V("Connection","Opening WebChannel transport."),c.open(),u=!0),V("Connection","WebChannel sending:",p),c.send(p))},Vi:()=>c.close()}),f=(p,g,I)=>{p.listen(g,E=>{try{I(E)}catch(O){setTimeout(()=>{throw O},0)}})};return f(c,Nl.EventType.OPEN,()=>{l||V("Connection","WebChannel transport opened.")}),f(c,Nl.EventType.CLOSE,()=>{l||(l=!0,V("Connection","WebChannel transport closed"),h.$i())}),f(c,Nl.EventType.ERROR,p=>{l||(l=!0,La("Connection","WebChannel transport errored:",p),h.$i(new M(x.UNAVAILABLE,"The operation could not be completed")))}),f(c,Nl.EventType.MESSAGE,p=>{var g;if(!l){const I=p.data[0];se(!!I);const E=I,O=E.error||((g=E[0])===null||g===void 0?void 0:g.error);if(O){V("Connection","WebChannel received error:",O);const D=O.status;let q=function(k){const N=He[k];if(N!==void 0)return FA(N)}(D),G=O.message;q===void 0&&(q=x.INTERNAL,G="Unknown error status: "+D+" with message "+O.message),l=!0,h.$i(new M(q,G)),c.close()}else V("Connection","WebChannel received:",I),h.Oi(I)}}),f(s,H4.STAT_EVENT,p=>{p.stat===iA.PROXY?V("Connection","Detected buffering proxy"):p.stat===iA.NOPROXY&&V("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}/**
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
 */function UO(){return typeof window!="undefined"?window:null}function th(){return typeof document!="undefined"?document:null}/**
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
 */function nc(t){return new D6(t,!0)}class tm{constructor(e,r,n=1e3,i=1.5,s=6e4){this.Oe=e,this.timerId=r,this.Qi=n,this.Wi=i,this.Gi=s,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const r=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),i=Math.max(0,r-n);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.zi} ms, delay with jitter: ${r} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,i,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
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
 */class jO{constructor(e,r,n,i,s,o){this.Oe=e,this.er=n,this.nr=i,this.credentialsProvider=s,this.listener=o,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new tm(e,r)}ar(){return this.state===1||this.state===2||this.state===4}cr(){return this.state===2}start(){this.state!==3?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&this.ir===null&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this.dr()))}wr(e){this._r(),this.stream.send(e)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(e,r){this._r(),this.rr.cancel(),this.sr++,e!==3?this.rr.reset():r&&r.code===x.RESOURCE_EXHAUSTED?(We(r.toString()),We("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):r&&r.code===x.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.mr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(r)}mr(){}auth(){this.state=1;const e=this.gr(this.sr),r=this.sr;this.credentialsProvider.getToken().then(n=>{this.sr===r&&this.yr(n)},n=>{e(()=>{const i=new M(x.UNKNOWN,"Fetching auth token failed: "+n.message);return this.pr(i)})})}yr(e){const r=this.gr(this.sr);this.stream=this.Er(e),this.stream.Si(()=>{r(()=>(this.state=2,this.listener.Si()))}),this.stream.Ci(n=>{r(()=>this.pr(n))}),this.stream.onMessage(n=>{r(()=>this.onMessage(n))})}ur(){this.state=4,this.rr.Xi(async()=>{this.state=0,this.start()})}pr(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(3,e)}gr(e){return r=>{this.Oe.enqueueAndForget(()=>this.sr===e?r():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class RX extends jO{constructor(e,r,n,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle",r,n,s),this.N=i}Er(e){return this.nr.ji("Listen",e)}onMessage(e){this.rr.reset();const r=F6(this.N,e),n=function(i){if(!("targetChange"in i))return fe.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?fe.min():s.readTime?at(s.readTime):fe.min()}(e);return this.listener.Tr(r,n)}Ir(e){const r={};r.database=Ja(this.N),r.addTarget=function(i,s){let o;const a=s.target;return o=Ll(a)?{documents:ZA(i,a)}:{query:eO(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=GA(i,s.resumeToken):s.snapshotVersion.compareTo(fe.min())>0&&(o.readTime=Xa(i,s.snapshotVersion.toTimestamp())),o}(this.N,e);const n=j6(this.N,e);n&&(r.labels=n),this.wr(r)}Ar(e){const r={};r.database=Ja(this.N),r.removeTarget=e,this.wr(r)}}class xX extends jO{constructor(e,r,n,i,s){super(e,"write_stream_connection_backoff","write_stream_idle",r,n,s),this.N=i,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Er(e){return this.nr.ji("Write",e)}onMessage(e){if(se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Rr){this.rr.reset();const r=U6(e.writeResults,e.commitTime),n=at(e.commitTime);return this.listener.vr(n,r)}return se(!e.writeResults||e.writeResults.length===0),this.Rr=!0,this.listener.Vr()}Sr(){const e={};e.database=Ja(this.N),this.wr(e)}Pr(e){const r={streamToken:this.lastStreamToken,writes:e.map(n=>Gl(this.N,n))};this.wr(r)}}/**
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
 */class NX extends class{}{constructor(e,r,n){super(),this.credentials=e,this.nr=r,this.N=n,this.Dr=!1}Cr(){if(this.Dr)throw new M(x.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,r,n){return this.Cr(),this.credentials.getToken().then(i=>this.nr.Li(e,r,n,i)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&this.credentials.invalidateToken(),i):new M(x.UNKNOWN,i.toString())})}Ki(e,r,n){return this.Cr(),this.credentials.getToken().then(i=>this.nr.Ki(e,r,n,i)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&this.credentials.invalidateToken(),i):new M(x.UNKNOWN,i.toString())})}terminate(){this.Dr=!0}}class kX{constructor(e,r){this.asyncQueue=e,this.onlineStateHandler=r,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){this.Nr===0&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve())))}Lr(e){this.state==="Online"?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Fr("Offline")))}set(e){this.Br(),this.Nr=0,e==="Online"&&(this.$r=!1),this.Fr(e)}Fr(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Mr(e){const r=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(We(r),this.$r=!1):V("OnlineStateTracker",r)}Br(){this.kr!==null&&(this.kr.cancel(),this.kr=null)}}/**
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
 */class PX{constructor(e,r,n,i,s){this.localStore=e,this.datastore=r,this.asyncQueue=n,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=s,this.Qr.Ei(o=>{n.enqueueAndForget(async()=>{Cn(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=K(a);c.Kr.add(4),await Js(c),c.Wr.set("Unknown"),c.Kr.delete(4),await ic(c)}(this))})}),this.Wr=new kX(n,i)}}async function ic(t){if(Cn(t))for(const e of t.jr)await e(!0)}async function Js(t){for(const e of t.jr)await e(!1)}function rh(t,e){const r=K(t);r.qr.has(e.targetId)||(r.qr.set(e.targetId,e),im(r)?nm(r):eo(r).cr()&&rm(r,e))}function sc(t,e){const r=K(t),n=eo(r);r.qr.delete(e),n.cr()&&BO(r,e),r.qr.size===0&&(n.cr()?n.lr():Cn(r)&&r.Wr.set("Unknown"))}function rm(t,e){t.Gr.Y(e.targetId),eo(t).Ir(e)}function BO(t,e){t.Gr.Y(e),eo(t).Ar(e)}function nm(t){t.Gr=new k6({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.qr.get(e)||null}),eo(t).start(),t.Wr.Or()}function im(t){return Cn(t)&&!eo(t).ar()&&t.qr.size>0}function Cn(t){return K(t).Kr.size===0}function VO(t){t.Gr=void 0}async function $X(t){t.qr.forEach((e,r)=>{rm(t,e)})}async function DX(t,e){VO(t),im(t)?(t.Wr.Lr(e),nm(t)):t.Wr.set("Unknown")}async function LX(t,e,r){if(t.Wr.set("Online"),e instanceof VA&&e.state===2&&e.cause)try{await async function(n,i){const s=i.cause;for(const o of i.targetIds)n.qr.has(o)&&(await n.remoteSyncer.rejectListen(o,s),n.qr.delete(o),n.Gr.removeTarget(o))}(t,e)}catch(n){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await nh(t,n)}else if(e instanceof Wl?t.Gr.rt(e):e instanceof BA?t.Gr.ft(e):t.Gr.ct(e),!r.isEqual(fe.min()))try{const n=await NO(t.localStore);r.compareTo(n)>=0&&await function(i,s){const o=i.Gr._t(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.qr.get(c);u&&i.qr.set(c,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=i.qr.get(a);if(!c)return;i.qr.set(a,c.withResumeToken(ot.EMPTY_BYTE_STRING,c.snapshotVersion)),BO(i,a);const u=new Sn(c.target,a,1,c.sequenceNumber);rm(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,r)}catch(n){V("RemoteStore","Failed to raise snapshot:",n),await nh(t,n)}}async function nh(t,e,r){if(!xi(e))throw e;t.Kr.add(1),await Js(t),t.Wr.set("Offline"),r||(r=()=>NO(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await r(),t.Kr.delete(1),await ic(t)})}function qO(t,e){return e().catch(r=>nh(t,r,e))}async function Zs(t){const e=K(t),r=Rn(e);let n=e.Ur.length>0?e.Ur[e.Ur.length-1].batchId:-1;for(;MX(e);)try{const i=await pX(e.localStore,n);if(i===null){e.Ur.length===0&&r.lr();break}n=i.batchId,FX(e,i)}catch(i){await nh(e,i)}zO(e)&&WO(e)}function MX(t){return Cn(t)&&t.Ur.length<10}function FX(t,e){t.Ur.push(e);const r=Rn(t);r.cr()&&r.br&&r.Pr(e.mutations)}function zO(t){return Cn(t)&&!Rn(t).ar()&&t.Ur.length>0}function WO(t){Rn(t).start()}async function UX(t){Rn(t).Sr()}async function jX(t){const e=Rn(t);for(const r of t.Ur)e.Pr(r.mutations)}async function BX(t,e,r){const n=t.Ur.shift(),i=Ug.from(n,e,r);await qO(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Zs(t)}async function VX(t,e){e&&Rn(t).br&&await async function(r,n){if(i=n.code,MA(i)&&i!==x.ABORTED){const s=r.Ur.shift();Rn(r).hr(),await qO(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,n)),await Zs(r)}var i}(t,e),zO(t)&&WO(t)}async function sm(t,e){const r=K(t);e?(r.Kr.delete(2),await ic(r)):e||(r.Kr.add(2),await Js(r),r.Wr.set("Unknown"))}function eo(t){return t.zr||(t.zr=function(e,r,n){const i=K(e);return i.Cr(),new RX(r,i.nr,i.credentials,i.N,n)}(t.datastore,t.asyncQueue,{Si:$X.bind(null,t),Ci:DX.bind(null,t),Tr:LX.bind(null,t)}),t.jr.push(async e=>{e?(t.zr.hr(),im(t)?nm(t):t.Wr.set("Unknown")):(await t.zr.stop(),VO(t))})),t.zr}function Rn(t){return t.Hr||(t.Hr=function(e,r,n){const i=K(e);return i.Cr(),new xX(r,i.nr,i.credentials,i.N,n)}(t.datastore,t.asyncQueue,{Si:UX.bind(null,t),Ci:VX.bind(null,t),Vr:jX.bind(null,t),vr:BX.bind(null,t)}),t.jr.push(async e=>{e?(t.Hr.hr(),await Zs(t)):(await t.Hr.stop(),t.Ur.length>0&&(V("RemoteStore",`Stopping write stream with ${t.Ur.length} pending writes`),t.Ur=[]))})),t.Hr}/**
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
 */class om{constructor(e,r,n,i,s){this.asyncQueue=e,this.timerId=r,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new it,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,r,n,i,s){const o=Date.now()+n,a=new om(e,r,o,i,s);return a.start(n),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function to(t,e){if(We("AsyncQueue",`${e}: ${t}`),xi(t))return new M(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ro{constructor(e){this.comparator=e?(r,n)=>e(r,n)||Z.comparator(r.key,n.key):(r,n)=>Z.comparator(r.key,n.key),this.keyedMap=$g(),this.sortedSet=new et(this.comparator)}static emptySet(e){return new ro(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const r=this.keyedMap.get(e);return r?this.sortedSet.indexOf(r):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((r,n)=>(e(r),!1))}add(e){const r=this.delete(e.key);return r.copy(r.keyedMap.insert(e.key,e),r.sortedSet.insert(e,null))}delete(e){const r=this.get(e);return r?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(r)):this}isEqual(e){if(!(e instanceof ro)||this.size!==e.size)return!1;const r=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;r.hasNext();){const i=r.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(r=>{e.push(r.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,r){const n=new ro;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=r,n}}/**
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
 */class GO{constructor(){this.Jr=new et(Z.comparator)}track(e){const r=e.doc.key,n=this.Jr.get(r);n?e.type!==0&&n.type===3?this.Jr=this.Jr.insert(r,e):e.type===3&&n.type!==1?this.Jr=this.Jr.insert(r,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.Jr=this.Jr.insert(r,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.Jr=this.Jr.insert(r,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.Jr=this.Jr.remove(r):e.type===1&&n.type===2?this.Jr=this.Jr.insert(r,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.Jr=this.Jr.insert(r,{type:2,doc:e.doc}):ee():this.Jr=this.Jr.insert(r,e)}Yr(){const e=[];return this.Jr.inorderTraversal((r,n)=>{e.push(n)}),e}}class no{constructor(e,r,n,i,s,o,a,c){this.query=e,this.docs=r,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,r,n,i){const s=[];return r.forEach(o=>{s.push({type:0,doc:o})}),new no(e,r,ro.emptySet(r),s,n,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const r=this.docChanges,n=e.docChanges;if(r.length!==n.length)return!1;for(let i=0;i<r.length;i++)if(r[i].type!==n[i].type||!r[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class qX{constructor(){this.Xr=void 0,this.listeners=[]}}class zX{constructor(){this.queries=new Ys(e=>EA(e),qa),this.onlineState="Unknown",this.Zr=new Set}}async function am(t,e){const r=K(t),n=e.query;let i=!1,s=r.queries.get(n);if(s||(i=!0,s=new qX),i)try{s.Xr=await r.onListen(n)}catch(o){const a=to(o,`Initialization of query '${Ng(e.query)}' failed`);return void e.onError(a)}r.queries.set(n,s),s.listeners.push(e),e.eo(r.onlineState),s.Xr&&e.no(s.Xr)&&um(r)}async function cm(t,e){const r=K(t),n=e.query;let i=!1;const s=r.queries.get(n);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return r.queries.delete(n),r.onUnlisten(n)}function WX(t,e){const r=K(t);let n=!1;for(const i of e){const s=i.query,o=r.queries.get(s);if(o){for(const a of o.listeners)a.no(i)&&(n=!0);o.Xr=i}}n&&um(r)}function GX(t,e,r){const n=K(t),i=n.queries.get(e);if(i)for(const s of i.listeners)s.onError(r);n.queries.delete(e)}function um(t){t.Zr.forEach(e=>{e.next()})}class lm{constructor(e,r,n){this.query=e,this.so=r,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=n||{}}no(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new no(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let r=!1;return this.io?this.oo(e)&&(this.so.next(e),r=!0):this.ao(e,this.onlineState)&&(this.co(e),r=!0),this.ro=e,r}onError(e){this.so.error(e)}eo(e){this.onlineState=e;let r=!1;return this.ro&&!this.io&&this.ao(this.ro,e)&&(this.co(this.ro),r=!0),r}ao(e,r){if(!e.fromCache)return!0;const n=r!=="Offline";return(!this.options.uo||!n)&&(!e.docs.isEmpty()||r==="Offline")}oo(e){if(e.docChanges.length>0)return!0;const r=this.ro&&this.ro.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!r)&&this.options.includeMetadataChanges===!0}co(e){e=no.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.io=!0,this.so.next(e)}}/**
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
 */class KX{constructor(e,r){this.payload=e,this.byteLength=r}ho(){return"metadata"in this.payload}}/**
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
 */class KO{constructor(e){this.N=e}zn(e){return Pr(this.N,e)}Hn(e){return e.metadata.exists?QA(this.N,e.document,!1):ke.newNoDocument(this.zn(e.metadata.name),this.Jn(e.metadata.readTime))}Jn(e){return at(e)}}class HX{constructor(e,r,n){this.lo=e,this.localStore=r,this.N=n,this.queries=[],this.documents=[],this.progress=HO(e)}fo(e){this.progress.bytesLoaded+=e.byteLength;let r=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++r):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++r),r!==this.progress.documentsLoaded?(this.progress.documentsLoaded=r,Object.assign({},this.progress)):null}wo(e){const r=new Map,n=new KO(this.N);for(const i of e)if(i.metadata.queries){const s=n.zn(i.metadata.name);for(const o of i.metadata.queries){const a=(r.get(o)||Te()).add(s);r.set(o,a)}}return r}async complete(){const e=await gX(this.localStore,new KO(this.N),this.documents,this.lo.id),r=this.wo(this.documents);for(const n of this.queries)await mX(this.localStore,n,r.get(n.name));return this.progress.taskState="Success",new lX(Object.assign({},this.progress),e)}}function HO(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class YO{constructor(e){this.key=e}}class XO{constructor(e){this.key=e}}class QO{constructor(e,r){this.query=e,this._o=r,this.mo=null,this.current=!1,this.yo=Te(),this.mutatedKeys=Te(),this.po=IA(e),this.Eo=new ro(this.po)}get To(){return this._o}Io(e,r){const n=r?r.Ao:new GO,i=r?r.Eo:this.Eo;let s=r?r.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=Fl(this.query)&&i.size===this.query.limit?i.last():null,u=Ul(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const f=i.get(l),p=za(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),I=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;f&&p?f.data.isEqual(p.data)?g!==I&&(n.track({type:3,doc:p}),E=!0):this.Ro(f,p)||(n.track({type:2,doc:p}),E=!0,(c&&this.po(p,c)>0||u&&this.po(p,u)<0)&&(a=!0)):!f&&p?(n.track({type:0,doc:p}),E=!0):f&&!p&&(n.track({type:1,doc:f}),E=!0,(c||u)&&(a=!0)),E&&(p?(o=o.add(p),s=I?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),Fl(this.query)||Ul(this.query))for(;o.size>this.query.limit;){const l=Fl(this.query)?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),n.track({type:1,doc:l})}return{Eo:o,Ao:n,Ln:a,mutatedKeys:s}}Ro(e,r){return e.hasLocalMutations&&r.hasCommittedMutations&&!r.hasLocalMutations}applyChanges(e,r,n){const i=this.Eo;this.Eo=e.Eo,this.mutatedKeys=e.mutatedKeys;const s=e.Ao.Yr();s.sort((u,l)=>function(h,f){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return p(h)-p(f)}(u.type,l.type)||this.po(u.doc,l.doc)),this.bo(n);const o=r?this.Po():[],a=this.yo.size===0&&this.current?1:0,c=a!==this.mo;return this.mo=a,s.length!==0||c?{snapshot:new no(this.query,e.Eo,i,s,e.mutatedKeys,a===0,c,!1),vo:o}:{vo:o}}eo(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Eo:this.Eo,Ao:new GO,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(e){return!this._o.has(e)&&!!this.Eo.has(e)&&!this.Eo.get(e).hasLocalMutations}bo(e){e&&(e.addedDocuments.forEach(r=>this._o=this._o.add(r)),e.modifiedDocuments.forEach(r=>{}),e.removedDocuments.forEach(r=>this._o=this._o.delete(r)),this.current=e.current)}Po(){if(!this.current)return[];const e=this.yo;this.yo=Te(),this.Eo.forEach(n=>{this.Vo(n.key)&&(this.yo=this.yo.add(n.key))});const r=[];return e.forEach(n=>{this.yo.has(n)||r.push(new XO(n))}),this.yo.forEach(n=>{e.has(n)||r.push(new YO(n))}),r}So(e){this._o=e.Gn,this.yo=Te();const r=this.Io(e.documents);return this.applyChanges(r,!0)}Do(){return no.fromInitialDocuments(this.query,this.Eo,this.mutatedKeys,this.mo===0)}}class YX{constructor(e,r,n){this.query=e,this.targetId=r,this.view=n}}class XX{constructor(e){this.key=e,this.Co=!1}}class QX{constructor(e,r,n,i,s,o){this.localStore=e,this.remoteStore=r,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.No={},this.xo=new Ys(a=>EA(a),qa),this.ko=new Map,this.$o=new Set,this.Oo=new et(Z.comparator),this.Fo=new Map,this.Mo=new Yg,this.Lo={},this.Bo=new Map,this.Uo=ki.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return this.qo===!0}}async function JX(t,e){const r=gm(t);let n,i;const s=r.xo.get(e);if(s)n=s.targetId,r.sharedClientState.addLocalQueryTarget(n),i=s.view.Do();else{const o=await Xs(r.localStore,nr(e)),a=r.sharedClientState.addLocalQueryTarget(o.targetId);n=o.targetId,i=await hm(r,e,n,a==="current"),r.isPrimaryClient&&rh(r.remoteStore,o)}return i}async function hm(t,e,r,n){t.Ko=(l,h,f)=>async function(p,g,I,E){let O=g.view.Io(I);O.Ln&&(O=await Jl(p.localStore,g.query,!1).then(({documents:G})=>g.view.Io(G,O)));const D=E&&E.targetChanges.get(g.targetId),q=g.view.applyChanges(O,p.isPrimaryClient,D);return pm(p,g.targetId,q.vo),q.snapshot}(t,l,h,f);const i=await Jl(t.localStore,e,!0),s=new QO(e,i.Gn),o=s.Io(i.documents),a=Ya.createSynthesizedTargetChangeForCurrentChange(r,n&&t.onlineState!=="Offline"),c=s.applyChanges(o,t.isPrimaryClient,a);pm(t,r,c.vo);const u=new YX(e,r,s);return t.xo.set(e,u),t.ko.has(r)?t.ko.get(r).push(e):t.ko.set(r,[e]),c.snapshot}async function ZX(t,e){const r=K(t),n=r.xo.get(e),i=r.ko.get(n.targetId);if(i.length>1)return r.ko.set(n.targetId,i.filter(s=>!qa(s,e))),void r.xo.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(n.targetId),r.sharedClientState.isActiveQueryTarget(n.targetId)||await Qs(r.localStore,n.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(n.targetId),sc(r.remoteStore,n.targetId),io(r,n.targetId)}).catch(Pi)):(io(r,n.targetId),await Qs(r.localStore,n.targetId,!0))}async function eQ(t,e,r){const n=mm(t);try{const i=await function(s,o){const a=K(s),c=st.now(),u=o.reduce((h,f)=>h.add(f.key),Te());let l;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Qn.Pn(h,u).next(f=>{l=f;const p=[];for(const g of o){const I=T6(g,l.get(g.key));I!=null&&p.push(new En(g.key,I,vA(I.value.mapValue),Ke.exists(!0)))}return a.In.addMutationBatch(h,c,p,o)})).then(h=>(h.applyToLocalDocumentSet(l),{batchId:h.batchId,changes:l}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.Lo[s.currentUser.toKey()];c||(c=new et(ge)),c=c.insert(o,a),s.Lo[s.currentUser.toKey()]=c}(n,i.batchId,r),await en(n,i.changes),await Zs(n.remoteStore)}catch(i){const s=to(i,"Failed to persist write");r.reject(s)}}async function JO(t,e){const r=K(t);try{const n=await dX(r.localStore,e);e.targetChanges.forEach((i,s)=>{const o=r.Fo.get(s);o&&(se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Co=!0:i.modifiedDocuments.size>0?se(o.Co):i.removedDocuments.size>0&&(se(o.Co),o.Co=!1))}),await en(r,n,e)}catch(n){await Pi(n)}}function ZO(t,e,r){const n=K(t);if(n.isPrimaryClient&&r===0||!n.isPrimaryClient&&r===1){const i=[];n.xo.forEach((s,o)=>{const a=o.view.eo(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=K(s);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.eo(o)&&(c=!0)}),c&&um(a)}(n.eventManager,e),i.length&&n.No.Tr(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function tQ(t,e,r){const n=K(t);n.sharedClientState.updateQueryState(e,"rejected",r);const i=n.Fo.get(e),s=i&&i.key;if(s){let o=new et(Z.comparator);o=o.insert(s,ke.newNoDocument(s,fe.min()));const a=Te().add(s),c=new Ha(fe.min(),new Map,new Pe(ge),o,a);await JO(n,c),n.Oo=n.Oo.remove(s),n.Fo.delete(e),vm(n)}else await Qs(n.localStore,e,!1).then(()=>io(n,e,r)).catch(Pi)}async function rQ(t,e){const r=K(t),n=e.batch.batchId;try{const i=await fX(r.localStore,e);dm(r,n,null),fm(r,n),r.sharedClientState.updateMutationState(n,"acknowledged"),await en(r,i)}catch(i){await Pi(i)}}async function nQ(t,e,r){const n=K(t);try{const i=await function(s,o){const a=K(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.In.lookupMutationBatch(c,o).next(l=>(se(l!==null),u=l.keys(),a.In.removeMutationBatch(c,l))).next(()=>a.In.performConsistencyCheck(c)).next(()=>a.Qn.Pn(c,u))})}(n.localStore,e);dm(n,e,r),fm(n,e),n.sharedClientState.updateMutationState(e,"rejected",r),await en(n,i)}catch(i){await Pi(i)}}async function iQ(t,e){const r=K(t);Cn(r.remoteStore)||V("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await function(s){const o=K(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.In.getHighestUnacknowledgedBatchId(a))}(r.localStore);if(n===-1)return void e.resolve();const i=r.Bo.get(n)||[];i.push(e),r.Bo.set(n,i)}catch(n){const i=to(n,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function fm(t,e){(t.Bo.get(e)||[]).forEach(r=>{r.resolve()}),t.Bo.delete(e)}function dm(t,e,r){const n=K(t);let i=n.Lo[n.currentUser.toKey()];if(i){const s=i.get(e);s&&(r?s.reject(r):s.resolve(),i=i.remove(e)),n.Lo[n.currentUser.toKey()]=i}}function io(t,e,r=null){t.sharedClientState.removeLocalQueryTarget(e);for(const n of t.ko.get(e))t.xo.delete(n),r&&t.No.jo(n,r);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach(n=>{t.Mo.containsKey(n)||eC(t,n)})}function eC(t,e){t.$o.delete(e.path.canonicalString());const r=t.Oo.get(e);r!==null&&(sc(t.remoteStore,r),t.Oo=t.Oo.remove(e),t.Fo.delete(r),vm(t))}function pm(t,e,r){for(const n of r)n instanceof YO?(t.Mo.addReference(n.key,e),sQ(t,n)):n instanceof XO?(V("SyncEngine","Document no longer in limbo: "+n.key),t.Mo.removeReference(n.key,e),t.Mo.containsKey(n.key)||eC(t,n.key)):ee()}function sQ(t,e){const r=e.key,n=r.path.canonicalString();t.Oo.get(r)||t.$o.has(n)||(V("SyncEngine","New document in limbo: "+r),t.$o.add(n),vm(t))}function vm(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const r=new Z(Ee.fromString(e)),n=t.Uo.next();t.Fo.set(n,new XX(r)),t.Oo=t.Oo.insert(r,n),rh(t.remoteStore,new Sn(nr(Ls(r.path)),n,2,Ht.T))}}async function en(t,e,r){const n=K(t),i=[],s=[],o=[];n.xo.isEmpty()||(n.xo.forEach((a,c)=>{o.push(n.Ko(c,e,r).then(u=>{if(u){n.isPrimaryClient&&n.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),i.push(u);const l=Hg.kn(c.targetId,u);s.push(l)}}))}),await Promise.all(o),n.No.Tr(i),await async function(a,c){const u=K(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>L.forEach(c,h=>L.forEach(h.Nn,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>L.forEach(h.xn,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!xi(l))throw l;V("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.Un.get(h),p=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(p);u.Un=u.Un.insert(h,g)}}}(n.localStore,s))}async function oQ(t,e){const r=K(t);if(!r.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const n=await xO(r.localStore,e);r.currentUser=e,function(i,s){i.Bo.forEach(o=>{o.forEach(a=>{a.reject(new M(x.CANCELLED,s))})}),i.Bo.clear()}(r,"'waitForPendingWrites' promise is rejected due to a user change."),r.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await en(r,n.Wn)}}function aQ(t,e){const r=K(t),n=r.Fo.get(e);if(n&&n.Co)return Te().add(n.key);{let i=Te();const s=r.ko.get(e);if(!s)return i;for(const o of s){const a=r.xo.get(o);i=i.unionWith(a.view.To)}return i}}async function cQ(t,e){const r=K(t),n=await Jl(r.localStore,e.query,!0),i=e.view.So(n);return r.isPrimaryClient&&pm(r,e.targetId,i.vo),i}async function uQ(t){const e=K(t);return $O(e.localStore).then(r=>en(e,r))}async function lQ(t,e,r,n){const i=K(t),s=await function(o,a){const c=K(o),u=K(c.In);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.Xt(l,a).next(h=>h?c.Qn.Pn(l,h):L.resolve(null)))}(i.localStore,e);s!==null?(r==="pending"?await Zs(i.remoteStore):r==="acknowledged"||r==="rejected"?(dm(i,e,n||null),fm(i,e),function(o,a){K(K(o).In).te(a)}(i.localStore,e)):ee(),await en(i,s)):V("SyncEngine","Cannot apply mutation batch with id: "+e)}async function hQ(t,e){const r=K(t);if(gm(r),mm(r),e===!0&&r.qo!==!0){const n=r.sharedClientState.getAllActiveQueryTargets(),i=await tC(r,n.toArray());r.qo=!0,await sm(r.remoteStore,!0);for(const s of i)rh(r.remoteStore,s)}else if(e===!1&&r.qo!==!1){const n=[];let i=Promise.resolve();r.ko.forEach((s,o)=>{r.sharedClientState.isLocalQueryTarget(o)?n.push(o):i=i.then(()=>(io(r,o),Qs(r.localStore,o,!0))),sc(r.remoteStore,o)}),await i,await tC(r,n),function(s){const o=K(s);o.Fo.forEach((a,c)=>{sc(o.remoteStore,c)}),o.Mo.us(),o.Fo=new Map,o.Oo=new et(Z.comparator)}(r),r.qo=!1,await sm(r.remoteStore,!1)}}async function tC(t,e,r){const n=K(t),i=[],s=[];for(const o of e){let a;const c=n.ko.get(o);if(c&&c.length!==0){a=await Xs(n.localStore,nr(c[0]));for(const u of c){const l=n.xo.get(u),h=await cQ(n,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await PO(n.localStore,o);a=await Xs(n.localStore,u),await hm(n,rC(u),o,!1)}i.push(a)}return n.No.Tr(s),i}function rC(t){return bA(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function fQ(t){const e=K(t);return K(K(e.localStore).persistence).pn()}async function dQ(t,e,r,n){const i=K(t);if(i.qo)V("SyncEngine","Ignoring unexpected query state notification.");else if(i.ko.has(e))switch(r){case"current":case"not-current":{const s=await $O(i.localStore),o=Ha.createSynthesizedRemoteEventForCurrentChange(e,r==="current");await en(i,s,o);break}case"rejected":await Qs(i.localStore,e,!0),io(i,e,n);break;default:ee()}}async function pQ(t,e,r){const n=gm(t);if(n.qo){for(const i of e){if(n.ko.has(i)){V("SyncEngine","Adding an already active target "+i);continue}const s=await PO(n.localStore,i),o=await Xs(n.localStore,s);await hm(n,rC(s),o.targetId,!1),rh(n.remoteStore,o)}for(const i of r)n.ko.has(i)&&await Qs(n.localStore,i,!1).then(()=>{sc(n.remoteStore,i),io(n,i)}).catch(Pi)}}function gm(t){const e=K(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=JO.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aQ.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tQ.bind(null,e),e.No.Tr=WX.bind(null,e.eventManager),e.No.jo=GX.bind(null,e.eventManager),e}function mm(t){const e=K(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rQ.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nQ.bind(null,e),e}function vQ(t,e,r){const n=K(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,f){const p=K(h),g=at(f.createTime);return p.persistence.runTransaction("hasNewerBundle","readonly",I=>p.Je.getBundleMetadata(I,f.id)).then(I=>!!I&&I.createTime.compareTo(g)>=0)}(i.localStore,a))return await s.close(),void o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a));o._updateProgress(HO(a));const c=new HX(a,i.localStore,s.N);let u=await s.Qo();for(;u;){const h=await c.fo(u);h&&o._updateProgress(h),u=await s.Qo()}const l=await c.complete();await en(i,l.Tn,void 0),await function(h,f){const p=K(h);return p.persistence.runTransaction("Save bundle","readwrite",g=>p.Je.saveBundleMetadata(g,f))}(i.localStore,a),o._completeWith(l.progress)}catch(a){La("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a)}})(n,e,r).then(()=>{n.sharedClientState.notifyBundleLoaded()})}class nC{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=nc(e.databaseInfo.databaseId),this.sharedClientState=this.Wo(e),this.persistence=this.Go(e),await this.persistence.start(),this.gcScheduler=this.zo(e),this.localStore=this.Ho(e)}zo(e){return null}Ho(e){return RO(this.persistence,new CO,e.initialUser,this.N)}Go(e){return new IX(Xg.Ns,this.N)}Wo(e){return new MO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class iC extends nC{constructor(e,r,n){super(),this.Jo=e,this.cacheSizeBytes=r,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await vX(this.localStore),await this.Jo.initialize(this,e),await mm(this.Jo.syncEngine),await Zs(this.Jo.remoteStore),await this.persistence.nn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Ho(e){return RO(this.persistence,new CO,e.initialUser,this.N)}zo(e){const r=this.persistence.referenceDelegate.garbageCollector;return new iX(r,e.asyncQueue)}Go(e){const r=Kg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Ut.withCacheSize(this.cacheSizeBytes):Ut.DEFAULT;return new Gg(this.synchronizeTabs,r,e.clientId,n,e.asyncQueue,UO(),th(),this.N,this.sharedClientState,!!this.forceOwnership)}Wo(e){return new MO}}class gQ extends iC{constructor(e,r){super(e,r,!1),this.Jo=e,this.cacheSizeBytes=r,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const r=this.Jo.syncEngine;this.sharedClientState instanceof em&&(this.sharedClientState.syncEngine={_i:lQ.bind(null,r),mi:dQ.bind(null,r),gi:pQ.bind(null,r),pn:fQ.bind(null,r),wi:uQ.bind(null,r)},await this.sharedClientState.start()),await this.persistence.nn(async n=>{await hQ(this.Jo.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):n||this.gcScheduler.stop())})}Wo(e){const r=UO();if(!em.bt(r))throw new M(x.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Kg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new em(r,e.asyncQueue,n,e.clientId,e.initialUser)}}class ym{async initialize(e,r){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(r),this.remoteStore=this.createRemoteStore(r),this.eventManager=this.createEventManager(r),this.syncEngine=this.createSyncEngine(r,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>ZO(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=oQ.bind(null,this.syncEngine),await sm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new zX}createDatastore(e){const r=nc(e.databaseInfo.databaseId),n=(i=e.databaseInfo,new CX(i));var i;return function(s,o,a){return new NX(s,o,a)}(e.credentials,n,r)}createRemoteStore(e){return r=this.localStore,n=this.datastore,i=e.asyncQueue,s=a=>ZO(this.syncEngine,a,0),o=FO.bt()?new FO:new TX,new PX(r,n,i,s,o);var r,n,i,s,o}createSyncEngine(e,r){return function(n,i,s,o,a,c,u){const l=new QX(n,i,s,o,a,c);return u&&(l.qo=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,r)}terminate(){return async function(e){const r=K(e);V("RemoteStore","RemoteStore shutting down."),r.Kr.add(5),await Js(r),r.Qr.shutdown(),r.Wr.set("Unknown")}(this.remoteStore)}}/**
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
 */function sC(t,e=10240){let r=0;return{async read(){if(r<t.byteLength){const n={value:t.slice(r,r+e),done:!1};return r+=e,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
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
 */class ih{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Yo(this.observer.next,e)}error(e){this.observer.error?this.Yo(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Xo(){this.muted=!0}Yo(e,r){this.muted||setTimeout(()=>{this.muted||e(r)},0)}}/**
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
 */class mQ{constructor(e,r){this.Zo=e,this.N=r,this.metadata=new it,this.buffer=new Uint8Array,this.ta=new TextDecoder("utf-8"),this.ea().then(n=>{n&&n.ho()?this.metadata.resolve(n.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n==null?void 0:n.payload)}`))},n=>this.metadata.reject(n))}close(){return this.Zo.cancel()}async getMetadata(){return this.metadata.promise}async Qo(){return await this.getMetadata(),this.ea()}async ea(){const e=await this.na();if(e===null)return null;const r=this.ta.decode(e),n=Number(r);isNaN(n)&&this.sa(`length string (${r}) is not valid number`);const i=await this.ia(n);return new KX(JSON.parse(i),e.length+n)}ra(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async na(){for(;this.ra()<0&&!await this.oa(););if(this.buffer.length===0)return null;const e=this.ra();e<0&&this.sa("Reached the end of bundle when a length string is expected.");const r=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),r}async ia(e){for(;this.buffer.length<e;)await this.oa()&&this.sa("Reached the end of bundle when more is expected.");const r=this.ta.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),r}sa(e){throw this.Zo.cancel(),new Error(`Invalid bundle format: ${e}`)}async oa(){const e=await this.Zo.read();if(!e.done){const r=new Uint8Array(this.buffer.length+e.value.length);r.set(this.buffer),r.set(e.value,this.buffer.length),this.buffer=r}return e.done}}/**
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
 */class yQ{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new M(x.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const r=await async function(n,i){const s=K(n),o=Ja(s.N)+"/documents",a={documents:i.map(h=>Qa(s.N,h))},c=await s.Ki("BatchGetDocuments",o,a),u=new Map;c.forEach(h=>{const f=M6(s.N,h);u.set(f.key.toString(),f)});const l=[];return i.forEach(h=>{const f=u.get(h.toString());se(!!f),l.push(f)}),l}(this.datastore,e);return r.forEach(n=>this.recordVersion(n)),r}set(e,r){this.write(r.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,r){try{this.write(r.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastWriteError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ka(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(r=>{e.delete(r.key.toString())}),e.forEach((r,n)=>{const i=Z.fromPath(n);this.mutations.push(new Pg(i,this.precondition(i)))}),await async function(r,n){const i=K(r),s=Ja(i.N)+"/documents",o={writes:n.map(a=>Gl(i.N,a))};await i.Li("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let r;if(e.isFoundDocument())r=e.version;else{if(!e.isNoDocument())throw ee();r=fe.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!r.isEqual(n))throw new M(x.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),r)}precondition(e){const r=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&r?Ke.updateTime(r):Ke.none()}preconditionForUpdate(e){const r=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&r){if(r.isEqual(fe.min()))throw new M(x.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ke.updateTime(r)}return Ke.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class wQ{constructor(e,r,n,i){this.asyncQueue=e,this.datastore=r,this.updateFunction=n,this.deferred=i,this.aa=5,this.rr=new tm(this.asyncQueue,"transaction_retry")}run(){this.aa-=1,this.ca()}ca(){this.rr.Xi(async()=>{const e=new yQ(this.datastore),r=this.ua(e);r&&r.then(n=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(n)}).catch(i=>{this.ha(i)}))}).catch(n=>{this.ha(n)})})}ua(e){try{const r=this.updateFunction(e);return!Ti(r)&&r.catch&&r.then?r:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(r){return this.deferred.reject(r),null}}ha(e){this.aa>0&&this.la(e)?(this.aa-=1,this.asyncQueue.enqueueAndForget(()=>(this.ca(),Promise.resolve()))):this.deferred.reject(e)}la(e){if(e.name==="FirebaseError"){const r=e.code;return r==="aborted"||r==="failed-precondition"||!MA(r)}return!1}}/**
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
 */class bQ{constructor(e,r,n){this.credentials=e,this.asyncQueue=r,this.databaseInfo=n,this.user=vt.UNAUTHENTICATED,this.clientId=oA.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(r,async i=>{V("FirestoreClient","Received user=",i.uid),await this.credentialListener(i),this.user=i})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new it;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(r){const n=to(r,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function oC(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const r=await t.getConfiguration();await e.initialize(r);let n=r.initialUser;t.setCredentialChangeListener(async i=>{n.isEqual(i)||(await xO(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function aC(t,e){t.asyncQueue.verifyOperationInProgress();const r=await wm(t);V("FirestoreClient","Initializing OnlineComponentProvider");const n=await t.getConfiguration();await e.initialize(r,n),t.setCredentialChangeListener(i=>async function(s,o){const a=K(s);a.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const c=Cn(a);a.Kr.add(3),await Js(a),c&&a.Wr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Kr.delete(3),await ic(a)}(e.remoteStore,i)),t.onlineComponents=e}async function wm(t){return t.offlineComponents||(V("FirestoreClient","Using default OfflineComponentProvider"),await oC(t,new nC)),t.offlineComponents}async function sh(t){return t.onlineComponents||(V("FirestoreClient","Using default OnlineComponentProvider"),await aC(t,new ym)),t.onlineComponents}function cC(t){return wm(t).then(e=>e.persistence)}function bm(t){return wm(t).then(e=>e.localStore)}function uC(t){return sh(t).then(e=>e.remoteStore)}function _m(t){return sh(t).then(e=>e.syncEngine)}async function so(t){const e=await sh(t),r=e.eventManager;return r.onListen=JX.bind(null,e.syncEngine),r.onUnlisten=ZX.bind(null,e.syncEngine),r}function _Q(t){return t.asyncQueue.enqueue(async()=>{const e=await cC(t),r=await uC(t);return e.setNetworkEnabled(!0),function(n){const i=K(n);return i.Kr.delete(0),ic(i)}(r)})}function EQ(t){return t.asyncQueue.enqueue(async()=>{const e=await cC(t),r=await uC(t);return e.setNetworkEnabled(!1),async function(n){const i=K(n);i.Kr.add(0),await Js(i),i.Wr.set("Offline")}(r)})}function IQ(t,e){const r=new it;return t.asyncQueue.enqueueAndForget(async()=>async function(n,i,s){try{const o=await function(a,c){const u=K(a);return u.persistence.runTransaction("read document","readonly",l=>u.Qn.An(l,c))}(n,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new M(x.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=to(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await bm(t),e,r)),r.promise}function lC(t,e,r={}){const n=new it;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new ih({next:h=>{s.enqueueAndForget(()=>cm(i,l));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new M(x.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new M(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new lm(Ls(o.path),u,{includeMetadataChanges:!0,uo:!0});return am(i,l)}(await so(t),t.asyncQueue,e,r,n)),n.promise}function SQ(t,e){const r=new it;return t.asyncQueue.enqueueAndForget(async()=>async function(n,i,s){try{const o=await Jl(n,i,!0),a=new QO(i,o.Gn),c=a.Io(o.documents),u=a.applyChanges(c,!1);s.resolve(u.snapshot)}catch(o){const a=to(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await bm(t),e,r)),r.promise}function hC(t,e,r={}){const n=new it;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new ih({next:h=>{s.enqueueAndForget(()=>cm(i,l)),h.fromCache&&a.source==="server"?c.reject(new M(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new lm(o,u,{includeMetadataChanges:!0,uo:!0});return am(i,l)}(await so(t),t.asyncQueue,e,r,n)),n.promise}function TQ(t,e){const r=new ih(e);return t.asyncQueue.enqueueAndForget(async()=>function(n,i){K(n).Zr.add(i),i.next()}(await so(t),r)),()=>{r.Xo(),t.asyncQueue.enqueueAndForget(async()=>function(n,i){K(n).Zr.delete(i)}(await so(t),r))}}function AQ(t,e){const r=new it;return t.asyncQueue.enqueueAndForget(async()=>{const n=await function(i){return sh(i).then(s=>s.datastore)}(t);new wQ(t.asyncQueue,n,e,r).run()}),r.promise}function OQ(t,e,r,n){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(c,u){return new mQ(c,u)}(function(c,u){if(c instanceof Uint8Array)return sC(c,u);if(c instanceof ArrayBuffer)return sC(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(r,nc(e));t.asyncQueue.enqueueAndForget(async()=>{vQ(await _m(t),i,n)})}function CQ(t,e){return t.asyncQueue.enqueue(async()=>function(r,n){const i=K(r);return i.persistence.runTransaction("Get named query","readonly",s=>i.Je.getNamedQuery(s,n))}(await bm(t),e))}class RQ{constructor(e,r,n,i,s,o,a,c){this.databaseId=e,this.appId=r,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class oo{constructor(e,r){this.projectId=e,this.database=r||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof oo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const fC=new Map;/**
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
 */function Em(t,e,r){if(!r)throw new M(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function dC(t,e,r,n){if(e===!0&&n===!0)throw new M(x.INVALID_ARGUMENT,`${t} and ${r} cannot be used together.`)}function pC(t){if(!Z.isDocumentKey(t))throw new M(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vC(t){if(Z.isDocumentKey(t))throw new M(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function oh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function _e(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const r=oh(t);throw new M(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${r}`)}}return t}function gC(t,e){if(e<=0)throw new M(x.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class mC{constructor(e){var r;if(e.host===void 0){if(e.ssl!==void 0)throw new M(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(r=e.ssl)===null||r===void 0||r;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,dC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class oc{constructor(e,r){this._credentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mC({}),this._settingsFrozen=!1,e instanceof oo?this._databaseId=e:(this._app=e,this._databaseId=function(n){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new M(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oo(n.options.projectId)}(e))}get app(){if(!this._app)throw new M(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mC(e),e.credentials!==void 0&&(this._credentials=function(r){if(!r)return new Z4;switch(r.type){case"gapi":const n=r.client;return se(!(typeof n!="object"||n===null||!n.auth||!n.auth.getAuthHeaderValueForFirstParty)),new n6(n,r.sessionIndex||"0",r.iamToken||null);case"provider":return r.client;default:throw new M(x.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=fC.get(e);r&&(V("ComponentProvider","Removing Datastore"),fC.delete(e),r.terminate())}(this),Promise.resolve()}}function xQ(t,e,r,n={}){var i;const s=(t=_e(t,oc))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&La("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${r}`,ssl:!1})),n.mockUserToken){let o,a;if(typeof n.mockUserToken=="string")o=n.mockUserToken,a=vt.MOCK_USER;else{o=VG(n.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=n.mockUserToken.sub||n.mockUserToken.user_id;if(!c)throw new M(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new vt(c)}t._credentials=new e6(new sA(o,a))}}/**
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
 */class Re{constructor(e,r,n){this.converter=r,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Re(this.firestore,e,this._key)}}class St{constructor(e,r,n){this.converter=r,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new St(this.firestore,e,this._query)}}class Dr extends St{constructor(e,r,n){super(e,r,Ls(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Re(this.firestore,null,new Z(e))}withConverter(e){return new Dr(this.firestore,e,this._path)}}function yC(t,e,...r){if(t=re(t),Em("collection","path",e),t instanceof oc){const n=Ee.fromString(e,...r);return vC(n),new Dr(t,null,n)}{if(!(t instanceof Re||t instanceof Dr))throw new M(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(Ee.fromString(e,...r));return vC(n),new Dr(t.firestore,null,n)}}function NQ(t,e){if(t=_e(t,oc),Em("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new M(x.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new St(t,null,function(r){return new Qr(Ee.emptyPath(),r)}(e))}function ah(t,e,...r){if(t=re(t),arguments.length===1&&(e=oA.I()),Em("doc","path",e),t instanceof oc){const n=Ee.fromString(e,...r);return pC(n),new Re(t,null,new Z(n))}{if(!(t instanceof Re||t instanceof Dr))throw new M(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(Ee.fromString(e,...r));return pC(n),new Re(t.firestore,t instanceof Dr?t.converter:null,new Z(n))}}function wC(t,e){return t=re(t),e=re(e),(t instanceof Re||t instanceof Dr)&&(e instanceof Re||e instanceof Dr)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function bC(t,e){return t=re(t),e=re(e),t instanceof St&&e instanceof St&&t.firestore===e.firestore&&qa(t._query,e._query)&&t.converter===e.converter}/**
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
 */class kQ{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new tm(this,"async_queue_retry"),this.Ea=()=>{const r=th();r&&V("AsyncQueue","Visibility state changed to "+r.visibilityState),this.rr.tr()};const e=th();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ta(),this.Ia(e)}enterRestrictedMode(e){if(!this.wa){this.wa=!0,this.ya=e||!1;const r=th();r&&typeof r.removeEventListener=="function"&&r.removeEventListener("visibilitychange",this.Ea)}}enqueue(e){if(this.Ta(),this.wa)return new Promise(()=>{});const r=new it;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(e().then(r.resolve,r.reject),r.promise)).then(()=>r.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.da.push(e),this.Aa()))}async Aa(){if(this.da.length!==0){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(e){if(!xi(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(e){const r=this.fa.then(()=>(this.ga=!0,e().catch(n=>{throw this.ma=n,this.ga=!1,We("INTERNAL UNHANDLED ERROR: ",function(i){let s=i.message||"";return i.stack&&(s=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),s}(n)),n}).then(n=>(this.ga=!1,n))));return this.fa=r,r}enqueueAfterDelay(e,r,n){this.Ta(),this.pa.indexOf(e)>-1&&(r=0);const i=om.createAndSchedule(this,e,r,n,s=>this.Ra(s));return this._a.push(i),i}Ta(){this.ma&&ee()}verifyOperationInProgress(){}async ba(){let e;do e=this.fa,await e;while(e!==this.fa)}Pa(e){for(const r of this._a)if(r.timerId===e)return!0;return!1}va(e){return this.ba().then(()=>{this._a.sort((r,n)=>r.targetTimeMs-n.targetTimeMs);for(const r of this._a)if(r.skipDelay(),e!=="all"&&r.timerId===e)break;return this.ba()})}Va(e){this.pa.push(e)}Ra(e){const r=this._a.indexOf(e);this._a.splice(r,1)}}function Im(t){return function(e,r){if(typeof e!="object"||e===null)return!1;const n=e;for(const i of r)if(i in n&&typeof n[i]=="function")return!0;return!1}(t,["next","error","complete"])}class PQ{constructor(){this._progressObserver={},this._taskCompletionResolver=new it,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,r,n){this._progressObserver={next:e,error:r,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,r){return this._taskCompletionResolver.promise.then(e,r)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const $Q=-1;class je extends oc{constructor(e,r){super(e,r),this.type="firestore",this._queue=new kQ,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||_C(this),this._firestoreClient.terminate()}}function ut(t){return t._firestoreClient||_C(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function _C(t){var e;const r=t._freezeSettings(),n=function(i,s,o,a){return new RQ(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new bQ(t._credentials,t._queue,n)}function DQ(t,e){IC(t=_e(t,je));const r=ut(t),n=t._freezeSettings(),i=new ym;return EC(r,i,new iC(i,n.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function LQ(t){IC(t=_e(t,je));const e=ut(t),r=t._freezeSettings(),n=new ym;return EC(e,n,new gQ(n,r.cacheSizeBytes))}function EC(t,e,r){const n=new it;return t.asyncQueue.enqueue(async()=>{try{await oC(t,r),await aC(t,e),n.resolve()}catch(i){if(!function(s){return s.name==="FirebaseError"?s.code===x.FAILED_PRECONDITION||s.code===x.UNIMPLEMENTED:typeof DOMException!="undefined"&&s instanceof DOMException?s.code===22||s.code===20||s.code===11:!0}(i))throw i;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+i),n.reject(i)}}).then(()=>n.promise)}function MQ(t){if(t._initialized&&!t._terminated)throw new M(x.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new it;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!vr.bt())return Promise.resolve();const n=r+"main";await vr.delete(n)}(Kg(t._databaseId,t._persistenceKey)),e.resolve()}catch(r){e.reject(r)}}),e.promise}function FQ(t){return function(e){const r=new it;return e.asyncQueue.enqueueAndForget(async()=>iQ(await _m(e),r)),r.promise}(ut(t=_e(t,je)))}function UQ(t){return _Q(ut(t=_e(t,je)))}function jQ(t){return EQ(ut(t=_e(t,je)))}function BQ(t,e){const r=ut(t=_e(t,je)),n=new PQ;return OQ(r,t._databaseId,e,n),n}function VQ(t,e){return CQ(ut(t=_e(t,je)),e).then(r=>r?new St(t,null,r.query):null)}function IC(t){if(t._initialized||t._terminated)throw new M(x.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class xn{constructor(...e){for(let r=0;r<e.length;++r)if(e[r].length===0)throw new M(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Lr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Lr(ot.fromBase64String(e))}catch(r){throw new M(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(e){return new Lr(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class $i{constructor(e){this._methodName=e}}/**
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
 */class ch{constructor(e,r){if(!isFinite(e)||e<-90||e>90)throw new M(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(r)||r<-180||r>180)throw new M(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=e,this._long=r}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
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
 */const qQ=/^__.*__$/;class zQ{constructor(e,r,n){this.data=e,this.fieldMask=r,this.fieldTransforms=n}toMutation(e,r){return this.fieldMask!==null?new En(e,this.data,this.fieldMask,r,this.fieldTransforms):new Ga(e,this.data,r,this.fieldTransforms)}}class SC{constructor(e,r,n){this.data=e,this.fieldMask=r,this.fieldTransforms=n}toMutation(e,r){return new En(e,this.data,this.fieldMask,r,this.fieldTransforms)}}function TC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class uh{constructor(e,r,n,i,s,o){this.settings=e,this.databaseId=r,this.N=n,this.ignoreUndefinedProperties=i,s===void 0&&this.Sa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(e){return new uh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(e){var r;const n=(r=this.path)===null||r===void 0?void 0:r.child(e),i=this.Ca({path:n,xa:!1});return i.ka(e),i}$a(e){var r;const n=(r=this.path)===null||r===void 0?void 0:r.child(e),i=this.Ca({path:n,xa:!1});return i.Sa(),i}Oa(e){return this.Ca({path:void 0,xa:!0})}Fa(e){return hh(e,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(e){return this.fieldMask.find(r=>e.isPrefixOf(r))!==void 0||this.fieldTransforms.find(r=>e.isPrefixOf(r.field))!==void 0}Sa(){if(this.path)for(let e=0;e<this.path.length;e++)this.ka(this.path.get(e))}ka(e){if(e.length===0)throw this.Fa("Document fields must not be empty");if(TC(this.Da)&&qQ.test(e))throw this.Fa('Document fields cannot begin and end with "__"')}}class WQ{constructor(e,r,n){this.databaseId=e,this.ignoreUndefinedProperties=r,this.N=n||nc(e)}Ba(e,r,n,i=!1){return new uh({Da:e,methodName:r,La:n,path:gt.emptyPath(),xa:!1,Ma:i},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function Di(t){const e=t._freezeSettings(),r=nc(t._databaseId);return new WQ(t._databaseId,!!e.ignoreUndefinedProperties,r)}function lh(t,e,r,n,i,s={}){const o=t.Ba(s.merge||s.mergeFields?2:0,e,r,i);Om("Data must be an object, but it was:",o,n);const a=CC(n,o);let c,u;if(s.merge)c=new ks(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const f=Cm(e,h,r);if(!o.contains(f))throw new M(x.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);xC(l,f)||l.push(f)}c=new ks(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new zQ(new Et(a),c,u)}class ac extends $i{_toFieldTransform(e){if(e.Da!==2)throw e.Da===1?e.Fa(`${this._methodName}() can only appear at the top level of your update data`):e.Fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ac}}function AC(t,e,r){return new uh({Da:3,La:e.settings.La,methodName:t._methodName,xa:r},e.databaseId,e.N,e.ignoreUndefinedProperties)}class Sm extends $i{_toFieldTransform(e){return new Wa(e.path,new Fs)}isEqual(e){return e instanceof Sm}}class GQ extends $i{constructor(e,r){super(e),this.Ua=r}_toFieldTransform(e){const r=AC(this,e,!0),n=this.Ua.map(s=>Li(s,r)),i=new Oi(n);return new Wa(e.path,i)}isEqual(e){return this===e}}class KQ extends $i{constructor(e,r){super(e),this.Ua=r}_toFieldTransform(e){const r=AC(this,e,!0),n=this.Ua.map(s=>Li(s,r)),i=new Ci(n);return new Wa(e.path,i)}isEqual(e){return this===e}}class HQ extends $i{constructor(e,r){super(e),this.qa=r}_toFieldTransform(e){const r=new Us(e.N,AA(e.N,this.qa));return new Wa(e.path,r)}isEqual(e){return this===e}}function Tm(t,e,r,n){const i=t.Ba(1,e,r);Om("Data must be an object, but it was:",i,n);const s=[],o=Et.empty();Si(n,(c,u)=>{const l=Rm(e,c,r);u=re(u);const h=i.$a(l);if(u instanceof ac)s.push(l);else{const f=Li(u,h);f!=null&&(s.push(l),o.set(l,f))}});const a=new ks(s);return new SC(o,a,i.fieldTransforms)}function Am(t,e,r,n,i,s){const o=t.Ba(1,e,r),a=[Cm(e,n,r)],c=[i];if(s.length%2!=0)throw new M(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(Cm(e,s[f])),c.push(s[f+1]);const u=[],l=Et.empty();for(let f=a.length-1;f>=0;--f)if(!xC(u,a[f])){const p=a[f];let g=c[f];g=re(g);const I=o.$a(p);if(g instanceof ac)u.push(p);else{const E=Li(g,I);E!=null&&(u.push(p),l.set(p,E))}}const h=new ks(u);return new SC(l,h,o.fieldTransforms)}function OC(t,e,r,n=!1){return Li(r,t.Ba(n?4:3,e))}function Li(t,e){if(RC(t=re(t)))return Om("Unsupported field value:",e,t),CC(t,e);if(t instanceof $i)return function(r,n){if(!TC(n.Da))throw n.Fa(`${r._methodName}() can only be used with update() and set()`);if(!n.path)throw n.Fa(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(n);i&&n.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xa&&e.Da!==4)throw e.Fa("Nested arrays are not supported");return function(r,n){const i=[];let s=0;for(const o of r){let a=Li(o,n.Oa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(r,n){if((r=re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return AA(n.N,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=st.fromDate(r);return{timestampValue:Xa(n.N,i)}}if(r instanceof st){const i=new st(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xa(n.N,i)}}if(r instanceof ch)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Lr)return{bytesValue:GA(n.N,r._byteString)};if(r instanceof Re){const i=n.databaseId,s=r.firestore._databaseId;if(!s.isEqual(i))throw n.Fa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Dg(r.firestore._databaseId||n.databaseId,r._key.path)}}throw n.Fa(`Unsupported field value: ${oh(r)}`)}(t,e)}function CC(t,e){const r={};return uA(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Si(t,(n,i)=>{const s=Li(i,e.Na(n));s!=null&&(r[n]=s)}),{mapValue:{fields:r}}}function RC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof st||t instanceof ch||t instanceof Lr||t instanceof Re||t instanceof $i)}function Om(t,e,r){if(!RC(r)||!function(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}(r)){const n=oh(r);throw n==="an object"?e.Fa(t+" a custom object"):e.Fa(t+" "+n)}}function Cm(t,e,r){if((e=re(e))instanceof xn)return e._internalPath;if(typeof e=="string")return Rm(t,e);throw hh("Field path arguments must be of type string or FieldPath.",t,!1,void 0,r)}const YQ=new RegExp("[~\\*/\\[\\]]");function Rm(t,e,r){if(e.search(YQ)>=0)throw hh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,r);try{return new xn(...e.split("."))._internalPath}catch(n){throw hh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,r)}}function hh(t,e,r,n,i){const s=n&&!n.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;r&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${n}`),o&&(c+=` in document ${i}`),c+=")"),new M(x.INVALID_ARGUMENT,a+t+c)}function xC(t,e){return t.some(r=>r.isEqual(e))}/**
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
 */class cc{constructor(e,r,n,i,s){this._firestore=e,this._userDataWriter=r,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XQ(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const r=this._document.data.field(fh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r)}}}class XQ extends cc{data(){return super.data()}}function fh(t,e){return typeof e=="string"?Rm(t,e):e instanceof xn?e._internalPath:e._delegate._internalPath}/**
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
 */class Mi{constructor(e,r){this.hasPendingWrites=e,this.fromCache=r}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tn extends cc{constructor(e,r,n,i,s,o){super(e,r,n,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const r=new uc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(r,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,r={}){if(this._document){const n=this._document.data.field(fh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,r.serverTimestamps)}}}class uc extends tn{data(e={}){return super.data(e)}}class Nn{constructor(e,r,n,i){this._firestore=e,this._userDataWriter=r,this._snapshot=i,this.metadata=new Mi(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(r=>e.push(r)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,r){this._snapshot.docs.forEach(n=>{e.call(r,new uc(this._firestore,this._userDataWriter,n.key,n,new Mi(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const r=!!e.includeMetadataChanges;if(r&&this._snapshot.excludesMetadataChanges)throw new M(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===r||(this._cachedChanges=function(n,i){if(n._snapshot.oldDocs.isEmpty()){let s=0;return n._snapshot.docChanges.map(o=>({type:"added",doc:new uc(n._firestore,n._userDataWriter,o.doc.key,o.doc,new Mi(n._snapshot.mutatedKeys.has(o.doc.key),n._snapshot.fromCache),n.query.converter),oldIndex:-1,newIndex:s++}))}{let s=n._snapshot.oldDocs;return n._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new uc(n._firestore,n._userDataWriter,o.doc.key,o.doc,new Mi(n._snapshot.mutatedKeys.has(o.doc.key),n._snapshot.fromCache),n.query.converter);let c=-1,u=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:QQ(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,r),this._cachedChangesIncludeMetadataChanges=r),this._cachedChanges}}function QQ(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}function NC(t,e){return t instanceof tn&&e instanceof tn?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Nn&&e instanceof Nn&&t._firestore===e._firestore&&bC(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function kC(t){if(Ul(t)&&t.explicitOrderBy.length===0)throw new M(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lc{}function kn(t,...e){for(const r of e)t=r._apply(t);return t}class JQ extends lc{constructor(e,r,n){super(),this.Ka=e,this.ja=r,this.Qa=n,this.type="where"}_apply(e){const r=Di(e.firestore),n=function(i,s,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new M(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on FieldPath.documentId().`);if(u==="in"||u==="not-in"){FC(l,u);const p=[];for(const g of l)p.push(MC(a,i,g));h={arrayValue:{values:p}}}else h=MC(a,i,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||FC(l,u),h=OC(o,s,l,u==="in"||u==="not-in");const f=Nt.create(c,u,h);return function(p,g){if(g.v()){const E=Rg(p);if(E!==null&&!E.isEqual(g.field))throw new M(x.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${E.toString()}' and '${g.field.toString()}'`);const O=Cg(p);O!==null&&UC(p,g.field,O)}const I=function(E,O){for(const D of E.filters)if(O.indexOf(D.op)>=0)return D.op;return null}(p,function(E){switch(E){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(g.op));if(I!==null)throw I===g.op?new M(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${g.op.toString()}' filter.`):new M(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${g.op.toString()}' filters with '${I.toString()}' filters.`)}(i,f),f}(e._query,"where",r,e.firestore._databaseId,this.Ka,this.ja,this.Qa);return new St(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new Qr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function ZQ(t,e,r){const n=e,i=fh("where",t);return new JQ(i,n,r)}class eJ extends lc{constructor(e,r){super(),this.Ka=e,this.Wa=r,this.type="orderBy"}_apply(e){const r=function(n,i,s){if(n.startAt!==null)throw new M(x.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(n.endAt!==null)throw new M(x.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ds(i,s);return function(a,c){if(Cg(a)===null){const u=Rg(a);u!==null&&UC(a,u,c.field)}}(n,o),o}(e._query,this.Ka,this.Wa);return new St(e.firestore,e.converter,function(n,i){const s=n.explicitOrderBy.concat([i]);return new Qr(n.path,n.collectionGroup,s,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}(e._query,r))}}function tJ(t,e="asc"){const r=e,n=fh("orderBy",t);return new eJ(n,r)}class PC extends lc{constructor(e,r,n){super(),this.type=e,this.Ga=r,this.za=n}_apply(e){return new St(e.firestore,e.converter,_A(e._query,this.Ga,this.za))}}function rJ(t){return gC("limit",t),new PC("limit",t,"F")}function nJ(t){return gC("limitToLast",t),new PC("limitToLast",t,"L")}class $C extends lc{constructor(e,r,n){super(),this.type=e,this.Ha=r,this.Ja=n}_apply(e){const r=LC(e,this.type,this.Ha,this.Ja);return new St(e.firestore,e.converter,function(n,i){return new Qr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,i,n.endAt)}(e._query,r))}}function iJ(...t){return new $C("startAt",t,!0)}function sJ(...t){return new $C("startAfter",t,!1)}class DC extends lc{constructor(e,r,n){super(),this.type=e,this.Ha=r,this.Ja=n}_apply(e){const r=LC(e,this.type,this.Ha,this.Ja);return new St(e.firestore,e.converter,function(n,i){return new Qr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,n.startAt,i)}(e._query,r))}}function oJ(...t){return new DC("endBefore",t,!0)}function aJ(...t){return new DC("endAt",t,!1)}function LC(t,e,r,n){if(r[0]=re(r[0]),r[0]instanceof cc)return function(i,s,o,a,c){if(!a)throw new M(x.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of Ms(i))if(l.field.isKeyField())u.push(Pl(s,a.key));else{const h=a.data.field(l.field);if(Ig(h))throw new M(x.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const f=l.field.canonicalString();throw new M(x.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}u.push(h)}return new Va(u,c)}(t._query,t.firestore._databaseId,e,r[0]._document,n);{const i=Di(t.firestore);return function(s,o,a,c,u,l){const h=s.explicitOrderBy;if(u.length>h.length)throw new M(x.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let p=0;p<u.length;p++){const g=u[p];if(h[p].field.isKeyField()){if(typeof g!="string")throw new M(x.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof g}`);if(!xg(s)&&g.indexOf("/")!==-1)throw new M(x.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${c}() must be a plain document ID, but '${g}' contains a slash.`);const I=s.path.child(Ee.fromString(g));if(!Z.isDocumentKey(I))throw new M(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${c}() must result in a valid document path, but '${I}' is not because it contains an odd number of segments.`);const E=new Z(I);f.push(Pl(o,E))}else{const I=OC(a,c,g);f.push(I)}}return new Va(f,l)}(t._query,t.firestore._databaseId,i,e,r,n)}}function MC(t,e,r){if(typeof(r=re(r))=="string"){if(r==="")throw new M(x.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!xg(e)&&r.indexOf("/")!==-1)throw new M(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);const n=e.path.child(Ee.fromString(r));if(!Z.isDocumentKey(n))throw new M(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Pl(t,new Z(n))}if(r instanceof Re)return Pl(t,r._key);throw new M(x.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${oh(r)}.`)}function FC(t,e){if(!Array.isArray(t)||t.length===0)throw new M(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new M(x.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function UC(t,e,r){if(!r.isEqual(e))throw new M(x.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${r.toString()}' instead.`)}/**
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
 */class xm{convertValue(e,r="none"){switch(Ai(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,r);case 5:return e.stringValue;case 6:return this.convertBytes(Ps(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,r);case 10:return this.convertObject(e.mapValue,r);default:throw ee()}}convertObject(e,r){const n={};return Si(e.fields,(i,s)=>{n[i]=this.convertValue(s,r)}),n}convertGeoPoint(e){return new ch(Ge(e.latitude),Ge(e.longitude))}convertArray(e,r){return(e.values||[]).map(n=>this.convertValue(n,r))}convertServerTimestamp(e,r){switch(r){case"previous":const n=lA(e);return n==null?null:this.convertValue(n,r);case"estimate":return this.convertTimestamp(Fa(e));default:return null}}convertTimestamp(e){const r=_n(e);return new st(r.seconds,r.nanos)}convertDocumentKey(e,r){const n=Ee.fromString(e);se(sO(n));const i=new oo(n.get(1),n.get(3)),s=new Z(n.popFirst(5));return i.isEqual(r)||We(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),s}}/**
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
 */function dh(t,e,r){let n;return n=t?r&&(r.merge||r.mergeFields)?t.toFirestore(e,r):t.toFirestore(e):e,n}class cJ extends xm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lr(e)}convertReference(e){const r=this.convertDocumentKey(e,this.firestore._databaseId);return new Re(this.firestore,null,r)}}/**
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
 */class uJ{constructor(e,r){this._firestore=e,this._commitHandler=r,this._mutations=[],this._committed=!1,this._dataReader=Di(e)}set(e,r,n){this._verifyNotCommitted();const i=Pn(e,this._firestore),s=dh(i.converter,r,n),o=lh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,n);return this._mutations.push(o.toMutation(i._key,Ke.none())),this}update(e,r,n,...i){this._verifyNotCommitted();const s=Pn(e,this._firestore);let o;return o=typeof(r=re(r))=="string"||r instanceof xn?Am(this._dataReader,"WriteBatch.update",s._key,r,n,i):Tm(this._dataReader,"WriteBatch.update",s._key,r),this._mutations.push(o.toMutation(s._key,Ke.exists(!0))),this}delete(e){this._verifyNotCommitted();const r=Pn(e,this._firestore);return this._mutations=this._mutations.concat(new Ka(r._key,Ke.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new M(x.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Pn(t,e){if((t=re(t)).firestore!==e)throw new M(x.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */function lJ(t){t=_e(t,Re);const e=_e(t.firestore,je);return lC(ut(e),t._key).then(r=>Nm(e,t,r))}class Fi extends xm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lr(e)}convertReference(e){const r=this.convertDocumentKey(e,this.firestore._databaseId);return new Re(this.firestore,null,r)}}function hJ(t){t=_e(t,Re);const e=_e(t.firestore,je),r=ut(e),n=new Fi(e);return IQ(r,t._key).then(i=>new tn(e,n,t._key,i,new Mi(i!==null&&i.hasLocalMutations,!0),t.converter))}function fJ(t){t=_e(t,Re);const e=_e(t.firestore,je);return lC(ut(e),t._key,{source:"server"}).then(r=>Nm(e,t,r))}function dJ(t){t=_e(t,St);const e=_e(t.firestore,je),r=ut(e),n=new Fi(e);return kC(t._query),hC(r,t._query).then(i=>new Nn(e,n,t,i))}function pJ(t){t=_e(t,St);const e=_e(t.firestore,je),r=ut(e),n=new Fi(e);return SQ(r,t._query).then(i=>new Nn(e,n,t,i))}function vJ(t){t=_e(t,St);const e=_e(t.firestore,je),r=ut(e),n=new Fi(e);return hC(r,t._query,{source:"server"}).then(i=>new Nn(e,n,t,i))}function jC(t,e,r){t=_e(t,Re);const n=_e(t.firestore,je),i=dh(t.converter,e,r);return hc(n,[lh(Di(n),"setDoc",t._key,i,t.converter!==null,r).toMutation(t._key,Ke.none())])}function BC(t,e,r,...n){t=_e(t,Re);const i=_e(t.firestore,je),s=Di(i);let o;return o=typeof(e=re(e))=="string"||e instanceof xn?Am(s,"updateDoc",t._key,e,r,n):Tm(s,"updateDoc",t._key,e),hc(i,[o.toMutation(t._key,Ke.exists(!0))])}function gJ(t){return hc(_e(t.firestore,je),[new Ka(t._key,Ke.none())])}function mJ(t,e){const r=_e(t.firestore,je),n=ah(t),i=dh(t.converter,e);return hc(r,[lh(Di(t.firestore),"addDoc",n._key,i,t.converter!==null,{}).toMutation(n._key,Ke.exists(!1))]).then(()=>n)}function VC(t,...e){var r,n,i;t=re(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Im(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Im(e[o])){const h=e[o];e[o]=(r=h.next)===null||r===void 0?void 0:r.bind(h),e[o+1]=(n=h.error)===null||n===void 0?void 0:n.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(t instanceof Re)u=_e(t.firestore,je),l=Ls(t._key.path),c={next:h=>{e[o]&&e[o](Nm(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=_e(t,St);u=_e(h.firestore,je),l=h._query;const f=new Fi(u);c={next:p=>{e[o]&&e[o](new Nn(u,f,h,p))},error:e[o+1],complete:e[o+2]},kC(t._query)}return function(h,f,p,g){const I=new ih(g),E=new lm(f,I,p);return h.asyncQueue.enqueueAndForget(async()=>am(await so(h),E)),()=>{I.Xo(),h.asyncQueue.enqueueAndForget(async()=>cm(await so(h),E))}}(ut(u),l,a,c)}function yJ(t,e){return TQ(ut(t=_e(t,je)),Im(e)?e:{next:e})}function hc(t,e){return function(r,n){const i=new it;return r.asyncQueue.enqueueAndForget(async()=>eQ(await _m(r),n,i)),i.promise}(ut(t),e)}function Nm(t,e,r){const n=r.docs.get(e._key),i=new Fi(t);return new tn(t,i,e._key,n,new Mi(r.hasPendingWrites,r.fromCache),e.converter)}/**
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
 */class wJ extends class{constructor(e,r){this._firestore=e,this._transaction=r,this._dataReader=Di(e)}get(e){const r=Pn(e,this._firestore),n=new cJ(this._firestore);return this._transaction.lookup([r._key]).then(i=>{if(!i||i.length!==1)return ee();const s=i[0];if(s.isFoundDocument())return new cc(this._firestore,n,s.key,s,r.converter);if(s.isNoDocument())return new cc(this._firestore,n,r._key,null,r.converter);throw ee()})}set(e,r,n){const i=Pn(e,this._firestore),s=dh(i.converter,r,n),o=lh(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,n);return this._transaction.set(i._key,o),this}update(e,r,n,...i){const s=Pn(e,this._firestore);let o;return o=typeof(r=re(r))=="string"||r instanceof xn?Am(this._dataReader,"Transaction.update",s._key,r,n,i):Tm(this._dataReader,"Transaction.update",s._key,r),this._transaction.update(s._key,o),this}delete(e){const r=Pn(e,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,r){super(e,r),this._firestore=e}get(e){const r=Pn(e,this._firestore),n=new Fi(this._firestore);return super.get(e).then(i=>new tn(this._firestore,n,r._key,i._document,new Mi(!1,!1),r.converter))}}function bJ(t,e){return AQ(ut(t),r=>e(new wJ(t,r)))}/**
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
 */function _J(){return new ac("deleteField")}function EJ(){return new Sm("serverTimestamp")}function IJ(...t){return new GQ("arrayUnion",t)}function SJ(...t){return new KQ("arrayRemove",t)}function TJ(t){return new HQ("increment",t)}var AJ;(function(t){xs=t})(li),ui(new qr("firestore",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),n=new je(r,new t6(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),n._setSettings(e),n},"PUBLIC")),hi("@firebase/firestore","3.1.0",AJ);const OJ="@firebase/firestore-compat",CJ="0.1.3";/**
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
 */function km(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new M("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function qC(){if(typeof Uint8Array=="undefined")throw new M("unimplemented","Uint8Arrays are not available in this environment.")}function zC(){if(!o6())throw new M("unimplemented","Blobs are unavailable in Firestore in this environment.")}class fc{constructor(e){this._delegate=e}static fromBase64String(e){return zC(),new fc(Lr.fromBase64String(e))}static fromUint8Array(e){return qC(),new fc(Lr.fromUint8Array(e))}toBase64(){return zC(),this._delegate.toBase64()}toUint8Array(){return qC(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function Pm(t){return RJ(t,["next","error","complete"])}function RJ(t,e){if(typeof t!="object"||t===null)return!1;const r=t;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}/**
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
 */class xJ{enableIndexedDbPersistence(e,r){return DQ(e._delegate,{forceOwnership:r})}enableMultiTabIndexedDbPersistence(e){return LQ(e._delegate)}clearIndexedDbPersistence(e){return MQ(e._delegate)}}class WC{constructor(e,r,n){this._delegate=r,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof oo||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const r=this._delegate._getSettings();!e.merge&&r.host!==e.host&&La("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},r),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,r,n={}){xQ(this._delegate,e,r,n)}enableNetwork(){return UQ(this._delegate)}disableNetwork(){return jQ(this._delegate)}enablePersistence(e){let r=!1,n=!1;return e&&(r=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,dC("synchronizeTabs",r,"experimentalForceOwningTab",n)),r?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return FQ(this._delegate)}onSnapshotsInSync(e){return yJ(this._delegate,e)}get app(){if(!this._appCompat)throw new M("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ao(this,yC(this._delegate,e))}catch(r){throw kt(r,"collection()","Firestore.collection()")}}doc(e){try{return new sr(this,ah(this._delegate,e))}catch(r){throw kt(r,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Pt(this,NQ(this._delegate,e))}catch(r){throw kt(r,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return bJ(this._delegate,r=>e(new GC(this,r)))}batch(){return ut(this._delegate),new KC(new uJ(this._delegate,e=>hc(this._delegate,e)))}loadBundle(e){return BQ(this._delegate,e)}namedQuery(e){return VQ(this._delegate,e).then(r=>r?new Pt(this,r):null)}}class ph extends xm{constructor(e){super();this.firestore=e}convertBytes(e){return new fc(new Lr(e))}convertReference(e){const r=this.convertDocumentKey(e,this.firestore._databaseId);return sr.forKey(r,this.firestore,null)}}function NJ(t){Q4(t)}class GC{constructor(e,r){this._firestore=e,this._delegate=r,this._userDataWriter=new ph(e)}get(e){const r=ji(e);return this._delegate.get(r).then(n=>new dc(this._firestore,new tn(this._firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,r.converter)))}set(e,r,n){const i=ji(e);return n?(km("Transaction.set",n),this._delegate.set(i,r,n)):this._delegate.set(i,r),this}update(e,r,n,...i){const s=ji(e);return arguments.length===2?this._delegate.update(s,r):this._delegate.update(s,r,n,...i),this}delete(e){const r=ji(e);return this._delegate.delete(r),this}}class KC{constructor(e){this._delegate=e}set(e,r,n){const i=ji(e);return n?(km("WriteBatch.set",n),this._delegate.set(i,r,n)):this._delegate.set(i,r),this}update(e,r,n,...i){const s=ji(e);return arguments.length===2?this._delegate.update(s,r):this._delegate.update(s,r,n,...i),this}delete(e){const r=ji(e);return this._delegate.delete(r),this}commit(){return this._delegate.commit()}}class Ui{constructor(e,r,n){this._firestore=e,this._userDataWriter=r,this._delegate=n}fromFirestore(e,r){const n=new uc(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new pc(this._firestore,n),r!=null?r:{})}toFirestore(e,r){return r?this._delegate.toFirestore(e,r):this._delegate.toFirestore(e)}static getInstance(e,r){const n=Ui.INSTANCES;let i=n.get(e);i||(i=new WeakMap,n.set(e,i));let s=i.get(r);return s||(s=new Ui(e,new ph(e),r),i.set(r,s)),s}}Ui.INSTANCES=new WeakMap;class sr{constructor(e,r){this.firestore=e,this._delegate=r,this._userDataWriter=new ph(e)}static forPath(e,r,n){if(e.length%2!=0)throw new M("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new sr(r,new Re(r._delegate,n,new Z(e)))}static forKey(e,r,n){return new sr(r,new Re(r._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new ao(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ao(this.firestore,yC(this._delegate,e))}catch(r){throw kt(r,"collection()","DocumentReference.collection()")}}isEqual(e){return e=re(e),e instanceof Re?wC(this._delegate,e):!1}set(e,r){r=km("DocumentReference.set",r);try{return r?jC(this._delegate,e,r):jC(this._delegate,e)}catch(n){throw kt(n,"setDoc()","DocumentReference.set()")}}update(e,r,...n){try{return arguments.length===1?BC(this._delegate,e):BC(this._delegate,e,r,...n)}catch(i){throw kt(i,"updateDoc()","DocumentReference.update()")}}delete(){return gJ(this._delegate)}onSnapshot(...e){const r=HC(e),n=YC(e,i=>new dc(this.firestore,new tn(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return VC(this._delegate,r,n)}get(e){let r;return(e==null?void 0:e.source)==="cache"?r=hJ(this._delegate):(e==null?void 0:e.source)==="server"?r=fJ(this._delegate):r=lJ(this._delegate),r.then(n=>new dc(this.firestore,new tn(this.firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,this._delegate.converter)))}withConverter(e){return new sr(this.firestore,e?this._delegate.withConverter(Ui.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function kt(t,e,r){return t.message=t.message.replace(e,r),t}function HC(t){for(const e of t)if(typeof e=="object"&&!Pm(e))return e;return{}}function YC(t,e){var r,n;let i;return Pm(t[0])?i=t[0]:Pm(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(r=i.error)===null||r===void 0?void 0:r.bind(i),complete:(n=i.complete)===null||n===void 0?void 0:n.bind(i)}}class dc{constructor(e,r){this._firestore=e,this._delegate=r}get ref(){return new sr(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,r){return this._delegate.get(e,r)}isEqual(e){return NC(this._delegate,e._delegate)}}class pc extends dc{data(e){const r=this._delegate.data(e);return J4(r!==void 0),r}}class Pt{constructor(e,r){this.firestore=e,this._delegate=r,this._userDataWriter=new ph(e)}where(e,r,n){try{return new Pt(this.firestore,kn(this._delegate,ZQ(e,r,n)))}catch(i){throw kt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,r){try{return new Pt(this.firestore,kn(this._delegate,tJ(e,r)))}catch(n){throw kt(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Pt(this.firestore,kn(this._delegate,rJ(e)))}catch(r){throw kt(r,"limit()","Query.limit()")}}limitToLast(e){try{return new Pt(this.firestore,kn(this._delegate,nJ(e)))}catch(r){throw kt(r,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Pt(this.firestore,kn(this._delegate,iJ(...e)))}catch(r){throw kt(r,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Pt(this.firestore,kn(this._delegate,sJ(...e)))}catch(r){throw kt(r,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Pt(this.firestore,kn(this._delegate,oJ(...e)))}catch(r){throw kt(r,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Pt(this.firestore,kn(this._delegate,aJ(...e)))}catch(r){throw kt(r,"endAt()","Query.endAt()")}}isEqual(e){return bC(this._delegate,e._delegate)}get(e){let r;return(e==null?void 0:e.source)==="cache"?r=pJ(this._delegate):(e==null?void 0:e.source)==="server"?r=vJ(this._delegate):r=dJ(this._delegate),r.then(n=>new $m(this.firestore,new Nn(this.firestore._delegate,this._userDataWriter,this._delegate,n._snapshot)))}onSnapshot(...e){const r=HC(e),n=YC(e,i=>new $m(this.firestore,new Nn(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return VC(this._delegate,r,n)}withConverter(e){return new Pt(this.firestore,e?this._delegate.withConverter(Ui.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class kJ{constructor(e,r){this._firestore=e,this._delegate=r}get type(){return this._delegate.type}get doc(){return new pc(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class $m{constructor(e,r){this._firestore=e,this._delegate=r}get query(){return new Pt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new pc(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(r=>new kJ(this._firestore,r))}forEach(e,r){this._delegate.forEach(n=>{e.call(r,new pc(this._firestore,n))})}isEqual(e){return NC(this._delegate,e._delegate)}}class ao extends Pt{constructor(e,r){super(e,r);this.firestore=e,this._delegate=r}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new sr(this.firestore,e):null}doc(e){try{return e===void 0?new sr(this.firestore,ah(this._delegate)):new sr(this.firestore,ah(this._delegate,e))}catch(r){throw kt(r,"doc()","CollectionReference.doc()")}}add(e){return mJ(this._delegate,e).then(r=>new sr(this.firestore,r))}isEqual(e){return wC(this._delegate,e._delegate)}withConverter(e){return new ao(this.firestore,e?this._delegate.withConverter(Ui.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ji(t){return _e(t,Re)}/**
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
 */class Dm{constructor(...e){this._delegate=new xn(...e)}static documentId(){return new Dm(gt.keyField().canonicalString())}isEqual(e){return e=re(e),e instanceof xn?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class Bi{constructor(e){this._delegate=e}static serverTimestamp(){const e=EJ();return e._methodName="FieldValue.serverTimestamp",new Bi(e)}static delete(){const e=_J();return e._methodName="FieldValue.delete",new Bi(e)}static arrayUnion(...e){const r=IJ(...e);return r._methodName="FieldValue.arrayUnion",new Bi(r)}static arrayRemove(...e){const r=SJ(...e);return r._methodName="FieldValue.arrayRemove",new Bi(r)}static increment(e){const r=TJ(e);return r._methodName="FieldValue.increment",new Bi(r)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const PJ={Firestore:WC,GeoPoint:ch,Timestamp:st,Blob:fc,Transaction:GC,WriteBatch:KC,DocumentReference:sr,DocumentSnapshot:dc,Query:Pt,QueryDocumentSnapshot:pc,QuerySnapshot:$m,CollectionReference:ao,FieldPath:Dm,FieldValue:Bi,setLogLevel:NJ,CACHE_SIZE_UNLIMITED:$Q};function $J(t,e){t.INTERNAL.registerComponent(new qr("firestore-compat",r=>{const n=r.getProvider("app-compat").getImmediate(),i=r.getProvider("firestore").getImmediate();return e(n,i)},"PUBLIC").setServiceProps(Object.assign({},PJ)))}/**
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
 */function DJ(t){$J(t,(e,r)=>new WC(e,r,new xJ)),t.registerVersion(OJ,CJ)}DJ(ia);/*!
  * vue-router v3.5.2
  * (c) 2021 Evan You
  * @license MIT
  */function gr(t,e){for(var r in e)t[r]=e[r];return t}var LJ=/[!'()*]/g,MJ=function(t){return"%"+t.charCodeAt(0).toString(16)},FJ=/%2C/g,co=function(t){return encodeURIComponent(t).replace(LJ,MJ).replace(FJ,",")};function Lm(t){try{return decodeURIComponent(t)}catch(e){}return t}function UJ(t,e,r){e===void 0&&(e={});var n=r||jJ,i;try{i=n(t||"")}catch(a){i={}}for(var s in e){var o=e[s];i[s]=Array.isArray(o)?o.map(XC):XC(o)}return i}var XC=function(t){return t==null||typeof t=="object"?t:String(t)};function jJ(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t&&t.split("&").forEach(function(r){var n=r.replace(/\+/g," ").split("="),i=Lm(n.shift()),s=n.length>0?Lm(n.join("=")):null;e[i]===void 0?e[i]=s:Array.isArray(e[i])?e[i].push(s):e[i]=[e[i],s]}),e}function BJ(t){var e=t?Object.keys(t).map(function(r){var n=t[r];if(n===void 0)return"";if(n===null)return co(r);if(Array.isArray(n)){var i=[];return n.forEach(function(s){s!==void 0&&(s===null?i.push(co(r)):i.push(co(r)+"="+co(s)))}),i.join("&")}return co(r)+"="+co(n)}).filter(function(r){return r.length>0}).join("&"):null;return e?"?"+e:""}var vh=/\/?$/;function gh(t,e,r,n){var i=n&&n.options.stringifyQuery,s=e.query||{};try{s=Mm(s)}catch(a){}var o={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:s,params:e.params||{},fullPath:QC(e,i),matched:t?VJ(t):[]};return r&&(o.redirectedFrom=QC(r,i)),Object.freeze(o)}function Mm(t){if(Array.isArray(t))return t.map(Mm);if(t&&typeof t=="object"){var e={};for(var r in t)e[r]=Mm(t[r]);return e}else return t}var $n=gh(null,{path:"/"});function VJ(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function QC(t,e){var r=t.path,n=t.query;n===void 0&&(n={});var i=t.hash;i===void 0&&(i="");var s=e||BJ;return(r||"/")+s(n)+i}function JC(t,e,r){return e===$n?t===e:e?t.path&&e.path?t.path.replace(vh,"")===e.path.replace(vh,"")&&(r||t.hash===e.hash&&mh(t.query,e.query)):t.name&&e.name?t.name===e.name&&(r||t.hash===e.hash&&mh(t.query,e.query)&&mh(t.params,e.params)):!1:!1}function mh(t,e){if(t===void 0&&(t={}),e===void 0&&(e={}),!t||!e)return t===e;var r=Object.keys(t).sort(),n=Object.keys(e).sort();return r.length!==n.length?!1:r.every(function(i,s){var o=t[i],a=n[s];if(a!==i)return!1;var c=e[i];return o==null||c==null?o===c:typeof o=="object"&&typeof c=="object"?mh(o,c):String(o)===String(c)})}function qJ(t,e){return t.path.replace(vh,"/").indexOf(e.path.replace(vh,"/"))===0&&(!e.hash||t.hash===e.hash)&&zJ(t.query,e.query)}function zJ(t,e){for(var r in e)if(!(r in t))return!1;return!0}function ZC(t){for(var e=0;e<t.matched.length;e++){var r=t.matched[e];for(var n in r.instances){var i=r.instances[n],s=r.enteredCbs[n];if(!(!i||!s)){delete r.enteredCbs[n];for(var o=0;o<s.length;o++)i._isBeingDestroyed||s[o](i)}}}}var WJ={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,r){var n=r.props,i=r.children,s=r.parent,o=r.data;o.routerView=!0;for(var a=s.$createElement,c=n.name,u=s.$route,l=s._routerViewCache||(s._routerViewCache={}),h=0,f=!1;s&&s._routerRoot!==s;){var p=s.$vnode?s.$vnode.data:{};p.routerView&&h++,p.keepAlive&&s._directInactive&&s._inactive&&(f=!0),s=s.$parent}if(o.routerViewDepth=h,f){var g=l[c],I=g&&g.component;return I?(g.configProps&&eR(I,o,g.route,g.configProps),a(I,o,i)):a()}var E=u.matched[h],O=E&&E.components[c];if(!E||!O)return l[c]=null,a();l[c]={component:O},o.registerRouteInstance=function(q,G){var k=E.instances[c];(G&&k!==q||!G&&k===q)&&(E.instances[c]=G)},(o.hook||(o.hook={})).prepatch=function(q,G){E.instances[c]=G.componentInstance},o.hook.init=function(q){q.data.keepAlive&&q.componentInstance&&q.componentInstance!==E.instances[c]&&(E.instances[c]=q.componentInstance),ZC(u)};var D=E.props&&E.props[c];return D&&(gr(l[c],{route:u,configProps:D}),eR(O,o,u,D)),a(O,o,i)}};function eR(t,e,r,n){var i=e.props=GJ(r,n);if(i){i=e.props=gr({},i);var s=e.attrs=e.attrs||{};for(var o in i)(!t.props||!(o in t.props))&&(s[o]=i[o],delete i[o])}}function GJ(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0}}function tR(t,e,r){var n=t.charAt(0);if(n==="/")return t;if(n==="?"||n==="#")return e+t;var i=e.split("/");(!r||!i[i.length-1])&&i.pop();for(var s=t.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];a===".."?i.pop():a!=="."&&i.push(a)}return i[0]!==""&&i.unshift(""),i.join("/")}function KJ(t){var e="",r="",n=t.indexOf("#");n>=0&&(e=t.slice(n),t=t.slice(0,n));var i=t.indexOf("?");return i>=0&&(r=t.slice(i+1),t=t.slice(0,i)),{path:t,query:r,hash:e}}function Dn(t){return t.replace(/\/\//g,"/")}var yh=Array.isArray||function(t){return Object.prototype.toString.call(t)=="[object Array]"},uo=iR,HJ=Fm,YJ=ZJ,XJ=rR,QJ=nR,JJ=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function Fm(t,e){for(var r=[],n=0,i=0,s="",o=e&&e.delimiter||"/",a;(a=JJ.exec(t))!=null;){var c=a[0],u=a[1],l=a.index;if(s+=t.slice(i,l),i=l+c.length,u){s+=u[1];continue}var h=t[i],f=a[2],p=a[3],g=a[4],I=a[5],E=a[6],O=a[7];s&&(r.push(s),s="");var D=f!=null&&h!=null&&h!==f,q=E==="+"||E==="*",G=E==="?"||E==="*",k=a[2]||o,N=g||I;r.push({name:p||n++,prefix:f||"",delimiter:k,optional:G,repeat:q,partial:D,asterisk:!!O,pattern:N?r8(N):O?".*":"[^"+wh(k)+"]+?"})}return i<t.length&&(s+=t.substr(i)),s&&r.push(s),r}function ZJ(t,e){return rR(Fm(t,e),e)}function e8(t){return encodeURI(t).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function t8(t){return encodeURI(t).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function rR(t,e){for(var r=new Array(t.length),n=0;n<t.length;n++)typeof t[n]=="object"&&(r[n]=new RegExp("^(?:"+t[n].pattern+")$",jm(e)));return function(i,s){for(var o="",a=i||{},c=s||{},u=c.pretty?e8:encodeURIComponent,l=0;l<t.length;l++){var h=t[l];if(typeof h=="string"){o+=h;continue}var f=a[h.name],p;if(f==null)if(h.optional){h.partial&&(o+=h.prefix);continue}else throw new TypeError('Expected "'+h.name+'" to be defined');if(yh(f)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(f.length===0){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var g=0;g<f.length;g++){if(p=u(f[g]),!r[l].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(g===0?h.prefix:h.delimiter)+p}continue}if(p=h.asterisk?t8(f):u(f),!r[l].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}return o}}function wh(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function r8(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function Um(t,e){return t.keys=e,t}function jm(t){return t&&t.sensitive?"":"i"}function n8(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return Um(t,e)}function i8(t,e,r){for(var n=[],i=0;i<t.length;i++)n.push(iR(t[i],e,r).source);var s=new RegExp("(?:"+n.join("|")+")",jm(r));return Um(s,e)}function s8(t,e,r){return nR(Fm(t,r),e,r)}function nR(t,e,r){yh(e)||(r=e||r,e=[]),r=r||{};for(var n=r.strict,i=r.end!==!1,s="",o=0;o<t.length;o++){var a=t[o];if(typeof a=="string")s+=wh(a);else{var c=wh(a.prefix),u="(?:"+a.pattern+")";e.push(a),a.repeat&&(u+="(?:"+c+u+")*"),a.optional?a.partial?u=c+"("+u+")?":u="(?:"+c+"("+u+"))?":u=c+"("+u+")",s+=u}}var l=wh(r.delimiter||"/"),h=s.slice(-l.length)===l;return n||(s=(h?s.slice(0,-l.length):s)+"(?:"+l+"(?=$))?"),i?s+="$":s+=n&&h?"":"(?="+l+"|$)",Um(new RegExp("^"+s,jm(r)),e)}function iR(t,e,r){return yh(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?n8(t,e):yh(t)?i8(t,e,r):s8(t,e,r)}uo.parse=HJ;uo.compile=YJ;uo.tokensToFunction=XJ;uo.tokensToRegExp=QJ;var sR=Object.create(null);function bh(t,e,r){e=e||{};try{var n=sR[t]||(sR[t]=uo.compile(t));return typeof e.pathMatch=="string"&&(e[0]=e.pathMatch),n(e,{pretty:!0})}catch(i){return""}finally{delete e[0]}}function Bm(t,e,r,n){var i=typeof t=="string"?{path:t}:t;if(i._normalized)return i;if(i.name){i=gr({},t);var s=i.params;return s&&typeof s=="object"&&(i.params=gr({},s)),i}if(!i.path&&i.params&&e){i=gr({},i),i._normalized=!0;var o=gr(gr({},e.params),i.params);if(e.name)i.name=e.name,i.params=o;else if(e.matched.length){var a=e.matched[e.matched.length-1].path;i.path=bh(a,o,"path "+e.path)}return i}var c=KJ(i.path||""),u=e&&e.path||"/",l=c.path?tR(c.path,u,r||i.append):u,h=UJ(c.query,i.query,n&&n.options.parseQuery),f=i.hash||c.hash;return f&&f.charAt(0)!=="#"&&(f="#"+f),{_normalized:!0,path:l,query:h,hash:f}}var o8=[String,Object],a8=[String,Array],oR=function(){},c8={name:"RouterLink",props:{to:{type:o8,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:a8,default:"click"}},render:function(e){var r=this,n=this.$router,i=this.$route,s=n.resolve(this.to,i,this.append),o=s.location,a=s.route,c=s.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,f=l==null?"router-link-active":l,p=h==null?"router-link-exact-active":h,g=this.activeClass==null?f:this.activeClass,I=this.exactActiveClass==null?p:this.exactActiveClass,E=a.redirectedFrom?gh(null,Bm(a.redirectedFrom),null,n):a;u[I]=JC(i,E,this.exactPath),u[g]=this.exact||this.exactPath?u[I]:qJ(i,E);var O=u[I]?this.ariaCurrentValue:null,D=function(T){aR(T)&&(r.replace?n.replace(o,oR):n.push(o,oR))},q={click:aR};Array.isArray(this.event)?this.event.forEach(function(T){q[T]=D}):q[this.event]=D;var G={class:u},k=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:D,isActive:u[g],isExactActive:u[I]});if(k){if(k.length===1)return k[0];if(k.length>1||!k.length)return k.length===0?e():e("span",{},k)}if(this.tag==="a")G.on=q,G.attrs={href:c,"aria-current":O};else{var N=cR(this.$slots.default);if(N){N.isStatic=!1;var b=N.data=gr({},N.data);b.on=b.on||{};for(var R in b.on){var H=b.on[R];R in q&&(b.on[R]=Array.isArray(H)?H:[H])}for(var ne in q)ne in b.on?b.on[ne].push(q[ne]):b.on[ne]=D;var ye=N.data.attrs=gr({},N.data.attrs);ye.href=c,ye["aria-current"]=O}else G.on=q}return e(this.tag,G,this.$slots.default)}};function aR(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function cR(t){if(t){for(var e,r=0;r<t.length;r++)if(e=t[r],e.tag==="a"||e.children&&(e=cR(e.children)))return e}}var _h;function Vm(t){if(!(Vm.installed&&_h===t)){Vm.installed=!0,_h=t;var e=function(i){return i!==void 0},r=function(i,s){var o=i.$options._parentVnode;e(o)&&e(o=o.data)&&e(o=o.registerRouteInstance)&&o(i,s)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,r(this,this)},destroyed:function(){r(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",WJ),t.component("RouterLink",c8);var n=t.config.optionMergeStrategies;n.beforeRouteEnter=n.beforeRouteLeave=n.beforeRouteUpdate=n.created}}var vc=typeof window!="undefined";function Eh(t,e,r,n,i){var s=e||[],o=r||Object.create(null),a=n||Object.create(null);t.forEach(function(l){qm(s,o,a,l,i)});for(var c=0,u=s.length;c<u;c++)s[c]==="*"&&(s.push(s.splice(c,1)[0]),u--,c--);return{pathList:s,pathMap:o,nameMap:a}}function qm(t,e,r,n,i,s){var o=n.path,a=n.name,c=n.pathToRegexpOptions||{},u=l8(o,i,c.strict);typeof n.caseSensitive=="boolean"&&(c.sensitive=n.caseSensitive);var l={path:u,regex:u8(u,c),components:n.components||{default:n.component},alias:n.alias?typeof n.alias=="string"?[n.alias]:n.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:s,redirect:n.redirect,beforeEnter:n.beforeEnter,meta:n.meta||{},props:n.props==null?{}:n.components?n.props:{default:n.props}};if(n.children&&n.children.forEach(function(I){var E=s?Dn(s+"/"+I.path):void 0;qm(t,e,r,I,l,E)}),e[l.path]||(t.push(l.path),e[l.path]=l),n.alias!==void 0)for(var h=Array.isArray(n.alias)?n.alias:[n.alias],f=0;f<h.length;++f){var p=h[f],g={path:p,children:n.children};qm(t,e,r,g,i,l.path||"/")}a&&(r[a]||(r[a]=l))}function u8(t,e){var r=uo(t,[],e);return r}function l8(t,e,r){return r||(t=t.replace(/\/$/,"")),t[0]==="/"||e==null?t:Dn(e.path+"/"+t)}function h8(t,e){var r=Eh(t),n=r.pathList,i=r.pathMap,s=r.nameMap;function o(p){Eh(p,n,i,s)}function a(p,g){var I=typeof p!="object"?s[p]:void 0;Eh([g||p],n,i,s,I),I&&I.alias.length&&Eh(I.alias.map(function(E){return{path:E,children:[g]}}),n,i,s,I)}function c(){return n.map(function(p){return i[p]})}function u(p,g,I){var E=Bm(p,g,!1,e),O=E.name;if(O){var D=s[O];if(!D)return f(null,E);var q=D.regex.keys.filter(function(R){return!R.optional}).map(function(R){return R.name});if(typeof E.params!="object"&&(E.params={}),g&&typeof g.params=="object")for(var G in g.params)!(G in E.params)&&q.indexOf(G)>-1&&(E.params[G]=g.params[G]);return E.path=bh(D.path,E.params),f(D,E,I)}else if(E.path){E.params={};for(var k=0;k<n.length;k++){var N=n[k],b=i[N];if(f8(b.regex,E.path,E.params))return f(b,E,I)}}return f(null,E)}function l(p,g){var I=p.redirect,E=typeof I=="function"?I(gh(p,g,null,e)):I;if(typeof E=="string"&&(E={path:E}),!E||typeof E!="object")return f(null,g);var O=E,D=O.name,q=O.path,G=g.query,k=g.hash,N=g.params;if(G=O.hasOwnProperty("query")?O.query:G,k=O.hasOwnProperty("hash")?O.hash:k,N=O.hasOwnProperty("params")?O.params:N,D)return s[D],u({_normalized:!0,name:D,query:G,hash:k,params:N},void 0,g);if(q){var b=d8(q,p),R=bh(b,N);return u({_normalized:!0,path:R,query:G,hash:k},void 0,g)}else return f(null,g)}function h(p,g,I){var E=bh(I,g.params),O=u({_normalized:!0,path:E});if(O){var D=O.matched,q=D[D.length-1];return g.params=O.params,f(q,g)}return f(null,g)}function f(p,g,I){return p&&p.redirect?l(p,I||g):p&&p.matchAs?h(p,g,p.matchAs):gh(p,g,I,e)}return{match:u,addRoute:a,getRoutes:c,addRoutes:o}}function f8(t,e,r){var n=e.match(t);if(n){if(!r)return!0}else return!1;for(var i=1,s=n.length;i<s;++i){var o=t.keys[i-1];o&&(r[o.name||"pathMatch"]=typeof n[i]=="string"?Lm(n[i]):n[i])}return!0}function d8(t,e){return tR(t,e.parent?e.parent.path:"/",!0)}var p8=vc&&window.performance&&window.performance.now?window.performance:Date;function uR(){return p8.now().toFixed(3)}var lR=uR();function Ih(){return lR}function hR(t){return lR=t}var fR=Object.create(null);function dR(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),r=gr({},window.history.state);return r.key=Ih(),window.history.replaceState(r,"",e),window.addEventListener("popstate",vR),function(){window.removeEventListener("popstate",vR)}}function Vi(t,e,r,n){if(!!t.app){var i=t.options.scrollBehavior;!i||t.app.$nextTick(function(){var s=v8(),o=i.call(t,e,r,n?s:null);!o||(typeof o.then=="function"?o.then(function(a){yR(a,s)}).catch(function(a){}):yR(o,s))})}}function pR(){var t=Ih();t&&(fR[t]={x:window.pageXOffset,y:window.pageYOffset})}function vR(t){pR(),t.state&&t.state.key&&hR(t.state.key)}function v8(){var t=Ih();if(t)return fR[t]}function g8(t,e){var r=document.documentElement,n=r.getBoundingClientRect(),i=t.getBoundingClientRect();return{x:i.left-n.left-e.x,y:i.top-n.top-e.y}}function gR(t){return lo(t.x)||lo(t.y)}function mR(t){return{x:lo(t.x)?t.x:window.pageXOffset,y:lo(t.y)?t.y:window.pageYOffset}}function m8(t){return{x:lo(t.x)?t.x:0,y:lo(t.y)?t.y:0}}function lo(t){return typeof t=="number"}var y8=/^#\d/;function yR(t,e){var r=typeof t=="object";if(r&&typeof t.selector=="string"){var n=y8.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(n){var i=t.offset&&typeof t.offset=="object"?t.offset:{};i=m8(i),e=g8(n,i)}else gR(t)&&(e=mR(t))}else r&&gR(t)&&(e=mR(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Ln=vc&&function(){var t=window.navigator.userAgent;return(t.indexOf("Android 2.")!==-1||t.indexOf("Android 4.0")!==-1)&&t.indexOf("Mobile Safari")!==-1&&t.indexOf("Chrome")===-1&&t.indexOf("Windows Phone")===-1?!1:window.history&&typeof window.history.pushState=="function"}();function Sh(t,e){pR();var r=window.history;try{if(e){var n=gr({},r.state);n.key=Ih(),r.replaceState(n,"",t)}else r.pushState({key:hR(uR())},"",t)}catch(i){window.location[e?"replace":"assign"](t)}}function zm(t){Sh(t,!0)}function wR(t,e,r){var n=function(i){i>=t.length?r():t[i]?e(t[i],function(){n(i+1)}):n(i+1)};n(0)}var qi={redirected:2,aborted:4,cancelled:8,duplicated:16};function w8(t,e){return Th(t,e,qi.redirected,'Redirected when going from "'+t.fullPath+'" to "'+I8(e)+'" via a navigation guard.')}function b8(t,e){var r=Th(t,e,qi.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return r.name="NavigationDuplicated",r}function bR(t,e){return Th(t,e,qi.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function _8(t,e){return Th(t,e,qi.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function Th(t,e,r,n){var i=new Error(n);return i._isRouter=!0,i.from=t,i.to=e,i.type=r,i}var E8=["params","query","hash"];function I8(t){if(typeof t=="string")return t;if("path"in t)return t.path;var e={};return E8.forEach(function(r){r in t&&(e[r]=t[r])}),JSON.stringify(e,null,2)}function Ah(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Oh(t,e){return Ah(t)&&t._isRouter&&(e==null||t.type===e)}function S8(t){return function(e,r,n){var i=!1,s=0,o=null;_R(t,function(a,c,u,l){if(typeof a=="function"&&a.cid===void 0){i=!0,s++;var h=IR(function(I){A8(I)&&(I=I.default),a.resolved=typeof I=="function"?I:_h.extend(I),u.components[l]=I,s--,s<=0&&n()}),f=IR(function(I){var E="Failed to resolve async component "+l+": "+I;o||(o=Ah(I)?I:new Error(E),n(o))}),p;try{p=a(h,f)}catch(I){f(I)}if(p)if(typeof p.then=="function")p.then(h,f);else{var g=p.component;g&&typeof g.then=="function"&&g.then(h,f)}}}),i||n()}}function _R(t,e){return ER(t.map(function(r){return Object.keys(r.components).map(function(n){return e(r.components[n],r.instances[n],r,n)})}))}function ER(t){return Array.prototype.concat.apply([],t)}var T8=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol";function A8(t){return t.__esModule||T8&&t[Symbol.toStringTag]==="Module"}function IR(t){var e=!1;return function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}var mr=function(e,r){this.router=e,this.base=O8(r),this.current=$n,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};mr.prototype.listen=function(e){this.cb=e};mr.prototype.onReady=function(e,r){this.ready?e():(this.readyCbs.push(e),r&&this.readyErrorCbs.push(r))};mr.prototype.onError=function(e){this.errorCbs.push(e)};mr.prototype.transitionTo=function(e,r,n){var i=this,s;try{s=this.router.match(e,this.current)}catch(a){throw this.errorCbs.forEach(function(c){c(a)}),a}var o=this.current;this.confirmTransition(s,function(){i.updateRoute(s),r&&r(s),i.ensureURL(),i.router.afterHooks.forEach(function(a){a&&a(s,o)}),i.ready||(i.ready=!0,i.readyCbs.forEach(function(a){a(s)}))},function(a){n&&n(a),a&&!i.ready&&(!Oh(a,qi.redirected)||o!==$n)&&(i.ready=!0,i.readyErrorCbs.forEach(function(c){c(a)}))})};mr.prototype.confirmTransition=function(e,r,n){var i=this,s=this.current;this.pending=e;var o=function(I){!Oh(I)&&Ah(I)&&(i.errorCbs.length?i.errorCbs.forEach(function(E){E(I)}):console.error(I)),n&&n(I)},a=e.matched.length-1,c=s.matched.length-1;if(JC(e,s)&&a===c&&e.matched[a]===s.matched[c])return this.ensureURL(),o(b8(s,e));var u=C8(this.current.matched,e.matched),l=u.updated,h=u.deactivated,f=u.activated,p=[].concat(x8(h),this.router.beforeHooks,N8(l),f.map(function(I){return I.beforeEnter}),S8(f)),g=function(I,E){if(i.pending!==e)return o(bR(s,e));try{I(e,s,function(O){O===!1?(i.ensureURL(!0),o(_8(s,e))):Ah(O)?(i.ensureURL(!0),o(O)):typeof O=="string"||typeof O=="object"&&(typeof O.path=="string"||typeof O.name=="string")?(o(w8(s,e)),typeof O=="object"&&O.replace?i.replace(O):i.push(O)):E(O)})}catch(O){o(O)}};wR(p,g,function(){var I=k8(f),E=I.concat(i.router.resolveHooks);wR(E,g,function(){if(i.pending!==e)return o(bR(s,e));i.pending=null,r(e),i.router.app&&i.router.app.$nextTick(function(){ZC(e)})})})};mr.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)};mr.prototype.setupListeners=function(){};mr.prototype.teardown=function(){this.listeners.forEach(function(e){e()}),this.listeners=[],this.current=$n,this.pending=null};function O8(t){if(!t)if(vc){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return t.charAt(0)!=="/"&&(t="/"+t),t.replace(/\/$/,"")}function C8(t,e){var r,n=Math.max(t.length,e.length);for(r=0;r<n&&t[r]===e[r];r++);return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}function Wm(t,e,r,n){var i=_R(t,function(s,o,a,c){var u=R8(s,e);if(u)return Array.isArray(u)?u.map(function(l){return r(l,o,a,c)}):r(u,o,a,c)});return ER(n?i.reverse():i)}function R8(t,e){return typeof t!="function"&&(t=_h.extend(t)),t.options[e]}function x8(t){return Wm(t,"beforeRouteLeave",SR,!0)}function N8(t){return Wm(t,"beforeRouteUpdate",SR)}function SR(t,e){if(e)return function(){return t.apply(e,arguments)}}function k8(t){return Wm(t,"beforeRouteEnter",function(e,r,n,i){return P8(e,n,i)})}function P8(t,e,r){return function(i,s,o){return t(i,s,function(a){typeof a=="function"&&(e.enteredCbs[r]||(e.enteredCbs[r]=[]),e.enteredCbs[r].push(a)),o(a)})}}var TR=function(t){function e(r,n){t.call(this,r,n),this._startLocation=gc(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var n=this;if(!(this.listeners.length>0)){var i=this.router,s=i.options.scrollBehavior,o=Ln&&s;o&&this.listeners.push(dR());var a=function(){var c=n.current,u=gc(n.base);n.current===$n&&u===n._startLocation||n.transitionTo(u,function(l){o&&Vi(i,l,c,!0)})};window.addEventListener("popstate",a),this.listeners.push(function(){window.removeEventListener("popstate",a)})}},e.prototype.go=function(n){window.history.go(n)},e.prototype.push=function(n,i,s){var o=this,a=this,c=a.current;this.transitionTo(n,function(u){Sh(Dn(o.base+u.fullPath)),Vi(o.router,u,c,!1),i&&i(u)},s)},e.prototype.replace=function(n,i,s){var o=this,a=this,c=a.current;this.transitionTo(n,function(u){zm(Dn(o.base+u.fullPath)),Vi(o.router,u,c,!1),i&&i(u)},s)},e.prototype.ensureURL=function(n){if(gc(this.base)!==this.current.fullPath){var i=Dn(this.base+this.current.fullPath);n?Sh(i):zm(i)}},e.prototype.getCurrentLocation=function(){return gc(this.base)},e}(mr);function gc(t){var e=window.location.pathname,r=e.toLowerCase(),n=t.toLowerCase();return t&&(r===n||r.indexOf(Dn(n+"/"))===0)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var AR=function(t){function e(r,n,i){t.call(this,r,n),!(i&&$8(this.base))&&OR()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var n=this;if(!(this.listeners.length>0)){var i=this.router,s=i.options.scrollBehavior,o=Ln&&s;o&&this.listeners.push(dR());var a=function(){var u=n.current;!OR()||n.transitionTo(Ch(),function(l){o&&Vi(n.router,l,u,!0),Ln||Rh(l.fullPath)})},c=Ln?"popstate":"hashchange";window.addEventListener(c,a),this.listeners.push(function(){window.removeEventListener(c,a)})}},e.prototype.push=function(n,i,s){var o=this,a=this,c=a.current;this.transitionTo(n,function(u){CR(u.fullPath),Vi(o.router,u,c,!1),i&&i(u)},s)},e.prototype.replace=function(n,i,s){var o=this,a=this,c=a.current;this.transitionTo(n,function(u){Rh(u.fullPath),Vi(o.router,u,c,!1),i&&i(u)},s)},e.prototype.go=function(n){window.history.go(n)},e.prototype.ensureURL=function(n){var i=this.current.fullPath;Ch()!==i&&(n?CR(i):Rh(i))},e.prototype.getCurrentLocation=function(){return Ch()},e}(mr);function $8(t){var e=gc(t);if(!/^\/#/.test(e))return window.location.replace(Dn(t+"/#"+e)),!0}function OR(){var t=Ch();return t.charAt(0)==="/"?!0:(Rh("/"+t),!1)}function Ch(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function Gm(t){var e=window.location.href,r=e.indexOf("#"),n=r>=0?e.slice(0,r):e;return n+"#"+t}function CR(t){Ln?Sh(Gm(t)):window.location.hash=t}function Rh(t){Ln?zm(Gm(t)):window.location.replace(Gm(t))}var D8=function(t){function e(r,n){t.call(this,r,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(n,i,s){var o=this;this.transitionTo(n,function(a){o.stack=o.stack.slice(0,o.index+1).concat(a),o.index++,i&&i(a)},s)},e.prototype.replace=function(n,i,s){var o=this;this.transitionTo(n,function(a){o.stack=o.stack.slice(0,o.index).concat(a),i&&i(a)},s)},e.prototype.go=function(n){var i=this,s=this.index+n;if(!(s<0||s>=this.stack.length)){var o=this.stack[s];this.confirmTransition(o,function(){var a=i.current;i.index=s,i.updateRoute(o),i.router.afterHooks.forEach(function(c){c&&c(o,a)})},function(a){Oh(a,qi.duplicated)&&(i.index=s)})}},e.prototype.getCurrentLocation=function(){var n=this.stack[this.stack.length-1];return n?n.fullPath:"/"},e.prototype.ensureURL=function(){},e}(mr),xe=function(e){e===void 0&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=h8(e.routes||[],this);var r=e.mode||"hash";switch(this.fallback=r==="history"&&!Ln&&e.fallback!==!1,this.fallback&&(r="hash"),vc||(r="abstract"),this.mode=r,r){case"history":this.history=new TR(this,e.base);break;case"hash":this.history=new AR(this,e.base,this.fallback);break;case"abstract":this.history=new D8(this,e.base);break}},RR={currentRoute:{configurable:!0}};xe.prototype.match=function(e,r,n){return this.matcher.match(e,r,n)};RR.currentRoute.get=function(){return this.history&&this.history.current};xe.prototype.init=function(e){var r=this;if(this.apps.push(e),e.$once("hook:destroyed",function(){var o=r.apps.indexOf(e);o>-1&&r.apps.splice(o,1),r.app===e&&(r.app=r.apps[0]||null),r.app||r.history.teardown()}),!this.app){this.app=e;var n=this.history;if(n instanceof TR||n instanceof AR){var i=function(o){var a=n.current,c=r.options.scrollBehavior,u=Ln&&c;u&&"fullPath"in o&&Vi(r,o,a,!1)},s=function(o){n.setupListeners(),i(o)};n.transitionTo(n.getCurrentLocation(),s,s)}n.listen(function(o){r.apps.forEach(function(a){a._route=o})})}};xe.prototype.beforeEach=function(e){return Km(this.beforeHooks,e)};xe.prototype.beforeResolve=function(e){return Km(this.resolveHooks,e)};xe.prototype.afterEach=function(e){return Km(this.afterHooks,e)};xe.prototype.onReady=function(e,r){this.history.onReady(e,r)};xe.prototype.onError=function(e){this.history.onError(e)};xe.prototype.push=function(e,r,n){var i=this;if(!r&&!n&&typeof Promise!="undefined")return new Promise(function(s,o){i.history.push(e,s,o)});this.history.push(e,r,n)};xe.prototype.replace=function(e,r,n){var i=this;if(!r&&!n&&typeof Promise!="undefined")return new Promise(function(s,o){i.history.replace(e,s,o)});this.history.replace(e,r,n)};xe.prototype.go=function(e){this.history.go(e)};xe.prototype.back=function(){this.go(-1)};xe.prototype.forward=function(){this.go(1)};xe.prototype.getMatchedComponents=function(e){var r=e?e.matched?e:this.resolve(e).route:this.currentRoute;return r?[].concat.apply([],r.matched.map(function(n){return Object.keys(n.components).map(function(i){return n.components[i]})})):[]};xe.prototype.resolve=function(e,r,n){r=r||this.history.current;var i=Bm(e,r,n,this),s=this.match(i,r),o=s.redirectedFrom||s.fullPath,a=this.history.base,c=L8(a,o,this.mode);return{location:i,route:s,href:c,normalizedTo:i,resolved:s}};xe.prototype.getRoutes=function(){return this.matcher.getRoutes()};xe.prototype.addRoute=function(e,r){this.matcher.addRoute(e,r),this.history.current!==$n&&this.history.transitionTo(this.history.getCurrentLocation())};xe.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==$n&&this.history.transitionTo(this.history.getCurrentLocation())};Object.defineProperties(xe.prototype,RR);function Km(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}function L8(t,e,r){var n=r==="hash"?"#"+e:e;return t?Dn(t+"/"+n):n}xe.install=Vm;xe.version="3.5.2";xe.isNavigationFailure=Oh;xe.NavigationFailureType=qi;xe.START_LOCATION=$n;vc&&window.Vue&&window.Vue.use(xe);var C5=xe;/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */function M8(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:n});else{var r=t.prototype._init;t.prototype._init=function(i){i===void 0&&(i={}),i.init=i.init?[n].concat(i.init):n,r.call(this,i)}}function n(){var i=this.$options;i.store?this.$store=typeof i.store=="function"?i.store():i.store:i.parent&&i.parent.$store&&(this.$store=i.parent.$store)}}var F8=typeof window!="undefined"?window:typeof global!="undefined"?global:{},ho=F8.__VUE_DEVTOOLS_GLOBAL_HOOK__;function U8(t){!ho||(t._devtoolHook=ho,ho.emit("vuex:init",t),ho.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(e,r){ho.emit("vuex:mutation",e,r)},{prepend:!0}),t.subscribeAction(function(e,r){ho.emit("vuex:action",e,r)},{prepend:!0}))}function j8(t,e){return t.filter(e)[0]}function Hm(t,e){if(e===void 0&&(e=[]),t===null||typeof t!="object")return t;var r=j8(e,function(i){return i.original===t});if(r)return r.copy;var n=Array.isArray(t)?[]:{};return e.push({original:t,copy:n}),Object.keys(t).forEach(function(i){n[i]=Hm(t[i],e)}),n}function fo(t,e){Object.keys(t).forEach(function(r){return e(t[r],r)})}function xR(t){return t!==null&&typeof t=="object"}function B8(t){return t&&typeof t.then=="function"}function V8(t,e){return function(){return t(e)}}var yr=function(e,r){this.runtime=r,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=(typeof n=="function"?n():n)||{}},NR={namespaced:{configurable:!0}};NR.namespaced.get=function(){return!!this._rawModule.namespaced};yr.prototype.addChild=function(e,r){this._children[e]=r};yr.prototype.removeChild=function(e){delete this._children[e]};yr.prototype.getChild=function(e){return this._children[e]};yr.prototype.hasChild=function(e){return e in this._children};yr.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};yr.prototype.forEachChild=function(e){fo(this._children,e)};yr.prototype.forEachGetter=function(e){this._rawModule.getters&&fo(this._rawModule.getters,e)};yr.prototype.forEachAction=function(e){this._rawModule.actions&&fo(this._rawModule.actions,e)};yr.prototype.forEachMutation=function(e){this._rawModule.mutations&&fo(this._rawModule.mutations,e)};Object.defineProperties(yr.prototype,NR);var zi=function(e){this.register([],e,!1)};zi.prototype.get=function(e){return e.reduce(function(r,n){return r.getChild(n)},this.root)};zi.prototype.getNamespace=function(e){var r=this.root;return e.reduce(function(n,i){return r=r.getChild(i),n+(r.namespaced?i+"/":"")},"")};zi.prototype.update=function(e){kR([],this.root,e)};zi.prototype.register=function(e,r,n){var i=this;n===void 0&&(n=!0);var s=new yr(r,n);if(e.length===0)this.root=s;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],s)}r.modules&&fo(r.modules,function(a,c){i.register(e.concat(c),a,n)})};zi.prototype.unregister=function(e){var r=this.get(e.slice(0,-1)),n=e[e.length-1],i=r.getChild(n);!i||!i.runtime||r.removeChild(n)};zi.prototype.isRegistered=function(e){var r=this.get(e.slice(0,-1)),n=e[e.length-1];return r?r.hasChild(n):!1};function kR(t,e,r){if(e.update(r),r.modules)for(var n in r.modules){if(!e.getChild(n))return;kR(t.concat(n),e.getChild(n),r.modules[n])}}var jt,Qt=function(e){var r=this;e===void 0&&(e={}),!jt&&typeof window!="undefined"&&window.Vue&&DR(window.Vue);var n=e.plugins;n===void 0&&(n=[]);var i=e.strict;i===void 0&&(i=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new zi(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new jt,this._makeLocalGettersCache=Object.create(null);var s=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(f,p){return a.call(s,f,p)},this.commit=function(f,p,g){return c.call(s,f,p,g)},this.strict=i;var u=this._modules.root.state;xh(this,u,[],this._modules.root),Xm(this,u),n.forEach(function(h){return h(r)});var l=e.devtools!==void 0?e.devtools:jt.config.devtools;l&&U8(this)},Ym={state:{configurable:!0}};Ym.state.get=function(){return this._vm._data.$$state};Ym.state.set=function(t){};Qt.prototype.commit=function(e,r,n){var i=this,s=Nh(e,r,n),o=s.type,a=s.payload,c={type:o,payload:a},u=this._mutations[o];!u||(this._withCommit(function(){u.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(l){return l(c,i.state)}))};Qt.prototype.dispatch=function(e,r){var n=this,i=Nh(e,r),s=i.type,o=i.payload,a={type:s,payload:o},c=this._actions[s];if(!!c){try{this._actionSubscribers.slice().filter(function(l){return l.before}).forEach(function(l){return l.before(a,n.state)})}catch(l){}var u=c.length>1?Promise.all(c.map(function(l){return l(o)})):c[0](o);return new Promise(function(l,h){u.then(function(f){try{n._actionSubscribers.filter(function(p){return p.after}).forEach(function(p){return p.after(a,n.state)})}catch(p){}l(f)},function(f){try{n._actionSubscribers.filter(function(p){return p.error}).forEach(function(p){return p.error(a,n.state,f)})}catch(p){}h(f)})})}};Qt.prototype.subscribe=function(e,r){return PR(e,this._subscribers,r)};Qt.prototype.subscribeAction=function(e,r){var n=typeof e=="function"?{before:e}:e;return PR(n,this._actionSubscribers,r)};Qt.prototype.watch=function(e,r,n){var i=this;return this._watcherVM.$watch(function(){return e(i.state,i.getters)},r,n)};Qt.prototype.replaceState=function(e){var r=this;this._withCommit(function(){r._vm._data.$$state=e})};Qt.prototype.registerModule=function(e,r,n){n===void 0&&(n={}),typeof e=="string"&&(e=[e]),this._modules.register(e,r),xh(this,this.state,e,this._modules.get(e),n.preserveState),Xm(this,this.state)};Qt.prototype.unregisterModule=function(e){var r=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var n=Qm(r.state,e.slice(0,-1));jt.delete(n,e[e.length-1])}),$R(this)};Qt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Qt.prototype.hotUpdate=function(e){this._modules.update(e),$R(this,!0)};Qt.prototype._withCommit=function(e){var r=this._committing;this._committing=!0,e(),this._committing=r};Object.defineProperties(Qt.prototype,Ym);function PR(t,e,r){return e.indexOf(t)<0&&(r&&r.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function $R(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var r=t.state;xh(t,r,[],t._modules.root,!0),Xm(t,r,e)}function Xm(t,e,r){var n=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,s={};fo(i,function(a,c){s[c]=V8(a,t),Object.defineProperty(t.getters,c,{get:function(){return t._vm[c]},enumerable:!0})});var o=jt.config.silent;jt.config.silent=!0,t._vm=new jt({data:{$$state:e},computed:s}),jt.config.silent=o,t.strict&&H8(t),n&&(r&&t._withCommit(function(){n._data.$$state=null}),jt.nextTick(function(){return n.$destroy()}))}function xh(t,e,r,n,i){var s=!r.length,o=t._modules.getNamespace(r);if(n.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=n),!s&&!i){var a=Qm(e,r.slice(0,-1)),c=r[r.length-1];t._withCommit(function(){jt.set(a,c,n.state)})}var u=n.context=q8(t,o,r);n.forEachMutation(function(l,h){var f=o+h;W8(t,f,l,u)}),n.forEachAction(function(l,h){var f=l.root?h:o+h,p=l.handler||l;G8(t,f,p,u)}),n.forEachGetter(function(l,h){var f=o+h;K8(t,f,l,u)}),n.forEachChild(function(l,h){xh(t,e,r.concat(h),l,i)})}function q8(t,e,r){var n=e==="",i={dispatch:n?t.dispatch:function(s,o,a){var c=Nh(s,o,a),u=c.payload,l=c.options,h=c.type;return(!l||!l.root)&&(h=e+h),t.dispatch(h,u)},commit:n?t.commit:function(s,o,a){var c=Nh(s,o,a),u=c.payload,l=c.options,h=c.type;(!l||!l.root)&&(h=e+h),t.commit(h,u,l)}};return Object.defineProperties(i,{getters:{get:n?function(){return t.getters}:function(){return z8(t,e)}},state:{get:function(){return Qm(t.state,r)}}}),i}function z8(t,e){if(!t._makeLocalGettersCache[e]){var r={},n=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,n)===e){var s=i.slice(n);Object.defineProperty(r,s,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=r}return t._makeLocalGettersCache[e]}function W8(t,e,r,n){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(o){r.call(t,n.state,o)})}function G8(t,e,r,n){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(o){var a=r.call(t,{dispatch:n.dispatch,commit:n.commit,getters:n.getters,state:n.state,rootGetters:t.getters,rootState:t.state},o);return B8(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function K8(t,e,r,n){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(s){return r(n.state,n.getters,s.state,s.getters)})}function H8(t){t._vm.$watch(function(){return this._data.$$state},function(){},{deep:!0,sync:!0})}function Qm(t,e){return e.reduce(function(r,n){return r[n]},t)}function Nh(t,e,r){return xR(t)&&t.type&&(r=e,e=t,t=t.type),{type:t,payload:e,options:r}}function DR(t){jt&&t===jt||(jt=t,M8(jt))}var LR=Ph(function(t,e){var r={};return kh(e).forEach(function(n){var i=n.key,s=n.val;r[i]=function(){var a=this.$store.state,c=this.$store.getters;if(t){var u=$h(this.$store,"mapState",t);if(!u)return;a=u.context.state,c=u.context.getters}return typeof s=="function"?s.call(this,a,c):a[s]},r[i].vuex=!0}),r}),MR=Ph(function(t,e){var r={};return kh(e).forEach(function(n){var i=n.key,s=n.val;r[i]=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];var u=this.$store.commit;if(t){var l=$h(this.$store,"mapMutations",t);if(!l)return;u=l.context.commit}return typeof s=="function"?s.apply(this,[u].concat(a)):u.apply(this.$store,[s].concat(a))}}),r}),FR=Ph(function(t,e){var r={};return kh(e).forEach(function(n){var i=n.key,s=n.val;s=t+s,r[i]=function(){if(!(t&&!$h(this.$store,"mapGetters",t)))return this.$store.getters[s]},r[i].vuex=!0}),r}),UR=Ph(function(t,e){var r={};return kh(e).forEach(function(n){var i=n.key,s=n.val;r[i]=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];var u=this.$store.dispatch;if(t){var l=$h(this.$store,"mapActions",t);if(!l)return;u=l.context.dispatch}return typeof s=="function"?s.apply(this,[u].concat(a)):u.apply(this.$store,[s].concat(a))}}),r}),Y8=function(t){return{mapState:LR.bind(null,t),mapGetters:FR.bind(null,t),mapMutations:MR.bind(null,t),mapActions:UR.bind(null,t)}};function kh(t){return X8(t)?Array.isArray(t)?t.map(function(e){return{key:e,val:e}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}}):[]}function X8(t){return Array.isArray(t)||xR(t)}function Ph(t){return function(e,r){return typeof e!="string"?(r=e,e=""):e.charAt(e.length-1)!=="/"&&(e+="/"),t(e,r)}}function $h(t,e,r){var n=t._modulesNamespaceMap[r];return n}function Q8(t){t===void 0&&(t={});var e=t.collapsed;e===void 0&&(e=!0);var r=t.filter;r===void 0&&(r=function(l,h,f){return!0});var n=t.transformer;n===void 0&&(n=function(l){return l});var i=t.mutationTransformer;i===void 0&&(i=function(l){return l});var s=t.actionFilter;s===void 0&&(s=function(l,h){return!0});var o=t.actionTransformer;o===void 0&&(o=function(l){return l});var a=t.logMutations;a===void 0&&(a=!0);var c=t.logActions;c===void 0&&(c=!0);var u=t.logger;return u===void 0&&(u=console),function(l){var h=Hm(l.state);typeof u!="undefined"&&(a&&l.subscribe(function(f,p){var g=Hm(p);if(r(f,h,g)){var I=VR(),E=i(f),O="mutation "+f.type+I;jR(u,O,e),u.log("%c prev state","color: #9E9E9E; font-weight: bold",n(h)),u.log("%c mutation","color: #03A9F4; font-weight: bold",E),u.log("%c next state","color: #4CAF50; font-weight: bold",n(g)),BR(u)}h=g}),c&&l.subscribeAction(function(f,p){if(s(f,p)){var g=VR(),I=o(f),E="action "+f.type+g;jR(u,E,e),u.log("%c action","color: #03A9F4; font-weight: bold",I),BR(u)}}))}}function jR(t,e,r){var n=r?t.groupCollapsed:t.group;try{n.call(t,e)}catch(i){t.log(e)}}function BR(t){try{t.groupEnd()}catch(e){t.log("\u2014\u2014 log end \u2014\u2014")}}function VR(){var t=new Date;return" @ "+Dh(t.getHours(),2)+":"+Dh(t.getMinutes(),2)+":"+Dh(t.getSeconds(),2)+"."+Dh(t.getMilliseconds(),3)}function J8(t,e){return new Array(e+1).join(t)}function Dh(t,e){return J8("0",e-t.toString().length)+t}var Z8={Store:Qt,install:DR,version:"3.6.2",mapState:LR,mapMutations:MR,mapGetters:FR,mapActions:UR,createNamespacedHelpers:Y8,createLogger:Q8},R5=Z8,Lh,e5=new Uint8Array(16);function t5(){if(!Lh&&(Lh=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!Lh))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Lh(e5)}var r5=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function n5(t){return typeof t=="string"&&r5.test(t)}var wt=[];for(var Jm=0;Jm<256;++Jm)wt.push((Jm+256).toString(16).substr(1));function i5(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=(wt[t[e+0]]+wt[t[e+1]]+wt[t[e+2]]+wt[t[e+3]]+"-"+wt[t[e+4]]+wt[t[e+5]]+"-"+wt[t[e+6]]+wt[t[e+7]]+"-"+wt[t[e+8]]+wt[t[e+9]]+"-"+wt[t[e+10]]+wt[t[e+11]]+wt[t[e+12]]+wt[t[e+13]]+wt[t[e+14]]+wt[t[e+15]]).toLowerCase();if(!n5(r))throw TypeError("Stringified UUID is invalid");return r}function x5(t,e,r){t=t||{};var n=t.random||(t.rng||t5)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,e){r=r||0;for(var i=0;i<16;++i)e[r+i]=n[i];return e}return i5(n)}var qR={exports:{}};(function(t){(function(e,r,n){if(!e)return;for(var i={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},s={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},o={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},a={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},c,u=1;u<20;++u)i[111+u]="f"+u;for(u=0;u<=9;++u)i[u+96]=u.toString();function l(b,R,H){if(b.addEventListener){b.addEventListener(R,H,!1);return}b.attachEvent("on"+R,H)}function h(b){if(b.type=="keypress"){var R=String.fromCharCode(b.which);return b.shiftKey||(R=R.toLowerCase()),R}return i[b.which]?i[b.which]:s[b.which]?s[b.which]:String.fromCharCode(b.which).toLowerCase()}function f(b,R){return b.sort().join(",")===R.sort().join(",")}function p(b){var R=[];return b.shiftKey&&R.push("shift"),b.altKey&&R.push("alt"),b.ctrlKey&&R.push("ctrl"),b.metaKey&&R.push("meta"),R}function g(b){if(b.preventDefault){b.preventDefault();return}b.returnValue=!1}function I(b){if(b.stopPropagation){b.stopPropagation();return}b.cancelBubble=!0}function E(b){return b=="shift"||b=="ctrl"||b=="alt"||b=="meta"}function O(){if(!c){c={};for(var b in i)b>95&&b<112||i.hasOwnProperty(b)&&(c[i[b]]=b)}return c}function D(b,R,H){return H||(H=O()[b]?"keydown":"keypress"),H=="keypress"&&R.length&&(H="keydown"),H}function q(b){return b==="+"?["+"]:(b=b.replace(/\+{2}/g,"+plus"),b.split("+"))}function G(b,R){var H,ne,ye,T=[];for(H=q(b),ye=0;ye<H.length;++ye)ne=H[ye],a[ne]&&(ne=a[ne]),R&&R!="keypress"&&o[ne]&&(ne=o[ne],T.push("shift")),E(ne)&&T.push(ne);return R=D(ne,T,R),{key:ne,modifiers:T,action:R}}function k(b,R){return b===null||b===r?!1:b===R?!0:k(b.parentNode,R)}function N(b){var R=this;if(b=b||r,!(R instanceof N))return new N(b);R.target=b,R._callbacks={},R._directMap={};var H={},ne,ye=!1,T=!1,A=!1;function $(W){W=W||{};var Q=!1,oe;for(oe in H){if(W[oe]){Q=!0;continue}H[oe]=0}Q||(A=!1)}function Y(W,Q,oe,ce,we,Be){var ve,De,Jt=[],wr=oe.type;if(!R._callbacks[W])return[];for(wr=="keyup"&&E(W)&&(Q=[W]),ve=0;ve<R._callbacks[W].length;++ve)if(De=R._callbacks[W][ve],!(!ce&&De.seq&&H[De.seq]!=De.level)&&wr==De.action&&(wr=="keypress"&&!oe.metaKey&&!oe.ctrlKey||f(Q,De.modifiers))){var Fh=!ce&&De.combo==we,Uh=ce&&De.seq==ce&&De.level==Be;(Fh||Uh)&&R._callbacks[W].splice(ve,1),Jt.push(De)}return Jt}function te(W,Q,oe,ce){R.stopCallback(Q,Q.target||Q.srcElement,oe,ce)||W(Q,oe)===!1&&(g(Q),I(Q))}R._handleKey=function(W,Q,oe){var ce=Y(W,Q,oe),we,Be={},ve=0,De=!1;for(we=0;we<ce.length;++we)ce[we].seq&&(ve=Math.max(ve,ce[we].level));for(we=0;we<ce.length;++we){if(ce[we].seq){if(ce[we].level!=ve)continue;De=!0,Be[ce[we].seq]=1,te(ce[we].callback,oe,ce[we].combo,ce[we].seq);continue}De||te(ce[we].callback,oe,ce[we].combo)}var Jt=oe.type=="keypress"&&T;oe.type==A&&!E(W)&&!Jt&&$(Be),T=De&&oe.type=="keydown"};function ae(W){typeof W.which!="number"&&(W.which=W.keyCode);var Q=h(W);if(!!Q){if(W.type=="keyup"&&ye===Q){ye=!1;return}R.handleKey(Q,p(W),W)}}function ie(){clearTimeout(ne),ne=setTimeout($,1e3)}function he(W,Q,oe,ce){H[W]=0;function we(wr){return function(){A=wr,++H[W],ie()}}function Be(wr){te(oe,wr,W),ce!=="keyup"&&(ye=h(wr)),setTimeout($,10)}for(var ve=0;ve<Q.length;++ve){var De=ve+1===Q.length,Jt=De?Be:we(ce||G(Q[ve+1]).action);de(Q[ve],Jt,ce,W,ve)}}function de(W,Q,oe,ce,we){R._directMap[W+":"+oe]=Q,W=W.replace(/\s+/g," ");var Be=W.split(" "),ve;if(Be.length>1){he(W,Be,Q,oe);return}ve=G(W,oe),R._callbacks[ve.key]=R._callbacks[ve.key]||[],Y(ve.key,ve.modifiers,{type:ve.action},ce,W,we),R._callbacks[ve.key][ce?"unshift":"push"]({callback:Q,modifiers:ve.modifiers,action:ve.action,seq:ce,level:we,combo:W})}R._bindMultiple=function(W,Q,oe){for(var ce=0;ce<W.length;++ce)de(W[ce],Q,oe)},l(b,"keypress",ae),l(b,"keydown",ae),l(b,"keyup",ae)}N.prototype.bind=function(b,R,H){var ne=this;return b=b instanceof Array?b:[b],ne._bindMultiple.call(ne,b,R,H),ne},N.prototype.unbind=function(b,R){var H=this;return H.bind.call(H,b,function(){},R)},N.prototype.trigger=function(b,R){var H=this;return H._directMap[b+":"+R]&&H._directMap[b+":"+R]({},b),H},N.prototype.reset=function(){var b=this;return b._callbacks={},b._directMap={},b},N.prototype.stopCallback=function(b,R){var H=this;if((" "+R.className+" ").indexOf(" mousetrap ")>-1||k(R,H.target))return!1;if("composedPath"in b&&typeof b.composedPath=="function"){var ne=b.composedPath()[0];ne!==b.target&&(R=ne)}return R.tagName=="INPUT"||R.tagName=="SELECT"||R.tagName=="TEXTAREA"||R.isContentEditable},N.prototype.handleKey=function(){var b=this;return b._handleKey.apply(b,arguments)},N.addKeycodes=function(b){for(var R in b)b.hasOwnProperty(R)&&(i[R]=b[R]);c=null},N.init=function(){var b=N(r);for(var R in b)R.charAt(0)!=="_"&&(N[R]=function(H){return function(){return b[H].apply(b,arguments)}}(R))},N.init(),e.Mousetrap=N,t.exports&&(t.exports=N),typeof n=="function"&&n.amd&&n(function(){return N})})(typeof window!="undefined"?window:null,typeof window!="undefined"?document:null)})(qR);var N5=qR.exports;(function(t){var e={},r=t.prototype.stopCallback;t.prototype.stopCallback=function(n,i,s,o){return this.paused?!0:e[s]||e[o]?!1:r.call(this,n,i,s)},t.prototype.bindGlobal=function(n,i,s){if(this.bind(n,i,s),n instanceof Array)for(i=0;i<n.length;i++)e[n[i]]=!0;else e[n]=!0},t.init()})(Mousetrap);var s5=function(e){return o5(e)&&!a5(e)};function o5(t){return!!t&&typeof t=="object"}function a5(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||l5(t)}var c5=typeof Symbol=="function"&&Symbol.for,u5=c5?Symbol.for("react.element"):60103;function l5(t){return t.$$typeof===u5}function h5(t){return Array.isArray(t)?[]:{}}function mc(t,e){return e.clone!==!1&&e.isMergeableObject(t)?po(h5(t),t,e):t}function f5(t,e,r){return t.concat(e).map(function(n){return mc(n,r)})}function d5(t,e){if(!e.customMerge)return po;var r=e.customMerge(t);return typeof r=="function"?r:po}function p5(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(e){return t.propertyIsEnumerable(e)}):[]}function zR(t){return Object.keys(t).concat(p5(t))}function WR(t,e){try{return e in t}catch(r){return!1}}function v5(t,e){return WR(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))}function g5(t,e,r){var n={};return r.isMergeableObject(t)&&zR(t).forEach(function(i){n[i]=mc(t[i],r)}),zR(e).forEach(function(i){v5(t,i)||(WR(t,i)&&r.isMergeableObject(e[i])?n[i]=d5(i,r)(t[i],e[i],r):n[i]=mc(e[i],r))}),n}function po(t,e,r){r=r||{},r.arrayMerge=r.arrayMerge||f5,r.isMergeableObject=r.isMergeableObject||s5,r.cloneUnlessOtherwiseSpecified=mc;var n=Array.isArray(e),i=Array.isArray(t),s=n===i;return s?n?r.arrayMerge(t,e,r):g5(t,e,r):mc(e,r)}po.all=function(e,r){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(n,i){return po(n,i,r)},{})};var m5=po,k5=m5,GR={exports:{}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/(function(t,e){(function(r){t.exports=r()})(function(){return function r(n,i,s){function o(u,l){if(!i[u]){if(!n[u]){var h=typeof Wc=="function"&&Wc;if(!l&&h)return h(u,!0);if(a)return a(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var p=i[u]={exports:{}};n[u][0].call(p.exports,function(g){var I=n[u][1][g];return o(I||g)},p,p.exports,r,n,i,s)}return i[u].exports}for(var a=typeof Wc=="function"&&Wc,c=0;c<s.length;c++)o(s[c]);return o}({1:[function(r,n,i){(function(s){var o=s.MutationObserver||s.WebKitMutationObserver,a;if(o){var c=0,u=new o(g),l=s.document.createTextNode("");u.observe(l,{characterData:!0}),a=function(){l.data=c=++c%2}}else if(!s.setImmediate&&typeof s.MessageChannel!="undefined"){var h=new s.MessageChannel;h.port1.onmessage=g,a=function(){h.port2.postMessage(0)}}else"document"in s&&"onreadystatechange"in s.document.createElement("script")?a=function(){var E=s.document.createElement("script");E.onreadystatechange=function(){g(),E.onreadystatechange=null,E.parentNode.removeChild(E),E=null},s.document.documentElement.appendChild(E)}:a=function(){setTimeout(g,0)};var f,p=[];function g(){f=!0;for(var E,O,D=p.length;D;){for(O=p,p=[],E=-1;++E<D;)O[E]();D=p.length}f=!1}n.exports=I;function I(E){p.push(E)===1&&!f&&a()}}).call(this,typeof qe!="undefined"?qe:typeof self!="undefined"?self:typeof window!="undefined"?window:{})},{}],2:[function(r,n,i){var s=r(1);function o(){}var a={},c=["REJECTED"],u=["FULFILLED"],l=["PENDING"];n.exports=h;function h(k){if(typeof k!="function")throw new TypeError("resolver must be a function");this.state=l,this.queue=[],this.outcome=void 0,k!==o&&I(this,k)}h.prototype.catch=function(k){return this.then(null,k)},h.prototype.then=function(k,N){if(typeof k!="function"&&this.state===u||typeof N!="function"&&this.state===c)return this;var b=new this.constructor(o);if(this.state!==l){var R=this.state===u?k:N;p(b,R,this.outcome)}else this.queue.push(new f(b,k,N));return b};function f(k,N,b){this.promise=k,typeof N=="function"&&(this.onFulfilled=N,this.callFulfilled=this.otherCallFulfilled),typeof b=="function"&&(this.onRejected=b,this.callRejected=this.otherCallRejected)}f.prototype.callFulfilled=function(k){a.resolve(this.promise,k)},f.prototype.otherCallFulfilled=function(k){p(this.promise,this.onFulfilled,k)},f.prototype.callRejected=function(k){a.reject(this.promise,k)},f.prototype.otherCallRejected=function(k){p(this.promise,this.onRejected,k)};function p(k,N,b){s(function(){var R;try{R=N(b)}catch(H){return a.reject(k,H)}R===k?a.reject(k,new TypeError("Cannot resolve promise with itself")):a.resolve(k,R)})}a.resolve=function(k,N){var b=E(g,N);if(b.status==="error")return a.reject(k,b.value);var R=b.value;if(R)I(k,R);else{k.state=u,k.outcome=N;for(var H=-1,ne=k.queue.length;++H<ne;)k.queue[H].callFulfilled(N)}return k},a.reject=function(k,N){k.state=c,k.outcome=N;for(var b=-1,R=k.queue.length;++b<R;)k.queue[b].callRejected(N);return k};function g(k){var N=k&&k.then;if(k&&(typeof k=="object"||typeof k=="function")&&typeof N=="function")return function(){N.apply(k,arguments)}}function I(k,N){var b=!1;function R(T){b||(b=!0,a.reject(k,T))}function H(T){b||(b=!0,a.resolve(k,T))}function ne(){N(H,R)}var ye=E(ne);ye.status==="error"&&R(ye.value)}function E(k,N){var b={};try{b.value=k(N),b.status="success"}catch(R){b.status="error",b.value=R}return b}h.resolve=O;function O(k){return k instanceof this?k:a.resolve(new this(o),k)}h.reject=D;function D(k){var N=new this(o);return a.reject(N,k)}h.all=q;function q(k){var N=this;if(Object.prototype.toString.call(k)!=="[object Array]")return this.reject(new TypeError("must be an array"));var b=k.length,R=!1;if(!b)return this.resolve([]);for(var H=new Array(b),ne=0,ye=-1,T=new this(o);++ye<b;)A(k[ye],ye);return T;function A($,Y){N.resolve($).then(te,function(ae){R||(R=!0,a.reject(T,ae))});function te(ae){H[Y]=ae,++ne===b&&!R&&(R=!0,a.resolve(T,H))}}}h.race=G;function G(k){var N=this;if(Object.prototype.toString.call(k)!=="[object Array]")return this.reject(new TypeError("must be an array"));var b=k.length,R=!1;if(!b)return this.resolve([]);for(var H=-1,ne=new this(o);++H<b;)ye(k[H]);return ne;function ye(T){N.resolve(T).then(function(A){R||(R=!0,a.resolve(ne,A))},function(A){R||(R=!0,a.reject(ne,A))})}}},{"1":1}],3:[function(r,n,i){(function(s){typeof s.Promise!="function"&&(s.Promise=r(2))}).call(this,typeof qe!="undefined"?qe:typeof self!="undefined"?self:typeof window!="undefined"?window:{})},{"2":2}],4:[function(r,n,i){var s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d};function o(d,m){if(!(d instanceof m))throw new TypeError("Cannot call a class as a function")}function a(){try{if(typeof indexedDB!="undefined")return indexedDB;if(typeof webkitIndexedDB!="undefined")return webkitIndexedDB;if(typeof mozIndexedDB!="undefined")return mozIndexedDB;if(typeof OIndexedDB!="undefined")return OIndexedDB;if(typeof msIndexedDB!="undefined")return msIndexedDB}catch(d){return}}var c=a();function u(){try{if(!c||!c.open)return!1;var d=typeof openDatabase!="undefined"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),m=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!d||m)&&typeof indexedDB!="undefined"&&typeof IDBKeyRange!="undefined"}catch(v){return!1}}function l(d,m){d=d||[],m=m||{};try{return new Blob(d,m)}catch(y){if(y.name!=="TypeError")throw y;for(var v=typeof BlobBuilder!="undefined"?BlobBuilder:typeof MSBlobBuilder!="undefined"?MSBlobBuilder:typeof MozBlobBuilder!="undefined"?MozBlobBuilder:WebKitBlobBuilder,w=new v,S=0;S<d.length;S+=1)w.append(d[S]);return w.getBlob(m.type)}}typeof Promise=="undefined"&&r(3);var h=Promise;function f(d,m){m&&d.then(function(v){m(null,v)},function(v){m(v)})}function p(d,m,v){typeof m=="function"&&d.then(m),typeof v=="function"&&d.catch(v)}function g(d){return typeof d!="string"&&(console.warn(d+" used as a key, but it is not a string."),d=String(d)),d}function I(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var E="local-forage-detect-blob-support",O=void 0,D={},q=Object.prototype.toString,G="readonly",k="readwrite";function N(d){for(var m=d.length,v=new ArrayBuffer(m),w=new Uint8Array(v),S=0;S<m;S++)w[S]=d.charCodeAt(S);return v}function b(d){return new h(function(m){var v=d.transaction(E,k),w=l([""]);v.objectStore(E).put(w,"key"),v.onabort=function(S){S.preventDefault(),S.stopPropagation(),m(!1)},v.oncomplete=function(){var S=navigator.userAgent.match(/Chrome\/(\d+)/),y=navigator.userAgent.match(/Edge\//);m(y||!S||parseInt(S[1],10)>=43)}}).catch(function(){return!1})}function R(d){return typeof O=="boolean"?h.resolve(O):b(d).then(function(m){return O=m,O})}function H(d){var m=D[d.name],v={};v.promise=new h(function(w,S){v.resolve=w,v.reject=S}),m.deferredOperations.push(v),m.dbReady?m.dbReady=m.dbReady.then(function(){return v.promise}):m.dbReady=v.promise}function ne(d){var m=D[d.name],v=m.deferredOperations.pop();if(v)return v.resolve(),v.promise}function ye(d,m){var v=D[d.name],w=v.deferredOperations.pop();if(w)return w.reject(m),w.promise}function T(d,m){return new h(function(v,w){if(D[d.name]=D[d.name]||Q(),d.db)if(m)H(d),d.db.close();else return v(d.db);var S=[d.name];m&&S.push(d.version);var y=c.open.apply(c,S);m&&(y.onupgradeneeded=function(P){var F=y.result;try{F.createObjectStore(d.storeName),P.oldVersion<=1&&F.createObjectStore(E)}catch(U){if(U.name==="ConstraintError")console.warn('The database "'+d.name+'" has been upgraded from version '+P.oldVersion+" to version "+P.newVersion+', but the storage "'+d.storeName+'" already exists.');else throw U}}),y.onerror=function(P){P.preventDefault(),w(y.error)},y.onsuccess=function(){var P=y.result;P.onversionchange=function(F){F.target.close()},v(P),ne(d)}})}function A(d){return T(d,!1)}function $(d){return T(d,!0)}function Y(d,m){if(!d.db)return!0;var v=!d.db.objectStoreNames.contains(d.storeName),w=d.version<d.db.version,S=d.version>d.db.version;if(w&&(d.version!==m&&console.warn('The database "'+d.name+`" can't be downgraded from version `+d.db.version+" to version "+d.version+"."),d.version=d.db.version),S||v){if(v){var y=d.db.version+1;y>d.version&&(d.version=y)}return!0}return!1}function te(d){return new h(function(m,v){var w=new FileReader;w.onerror=v,w.onloadend=function(S){var y=btoa(S.target.result||"");m({__local_forage_encoded_blob:!0,data:y,type:d.type})},w.readAsBinaryString(d)})}function ae(d){var m=N(atob(d.data));return l([m],{type:d.type})}function ie(d){return d&&d.__local_forage_encoded_blob}function he(d){var m=this,v=m._initReady().then(function(){var w=D[m._dbInfo.name];if(w&&w.dbReady)return w.dbReady});return p(v,d,d),v}function de(d){H(d);for(var m=D[d.name],v=m.forages,w=0;w<v.length;w++){var S=v[w];S._dbInfo.db&&(S._dbInfo.db.close(),S._dbInfo.db=null)}return d.db=null,A(d).then(function(y){return d.db=y,Y(d)?$(d):y}).then(function(y){d.db=m.db=y;for(var P=0;P<v.length;P++)v[P]._dbInfo.db=y}).catch(function(y){throw ye(d,y),y})}function W(d,m,v,w){w===void 0&&(w=1);try{var S=d.db.transaction(d.storeName,m);v(null,S)}catch(y){if(w>0&&(!d.db||y.name==="InvalidStateError"||y.name==="NotFoundError"))return h.resolve().then(function(){if(!d.db||y.name==="NotFoundError"&&!d.db.objectStoreNames.contains(d.storeName)&&d.version<=d.db.version)return d.db&&(d.version=d.db.version+1),$(d)}).then(function(){return de(d).then(function(){W(d,m,v,w-1)})}).catch(v);v(y)}}function Q(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function oe(d){var m=this,v={db:null};if(d)for(var w in d)v[w]=d[w];var S=D[v.name];S||(S=Q(),D[v.name]=S),S.forages.push(m),m._initReady||(m._initReady=m.ready,m.ready=he);var y=[];function P(){return h.resolve()}for(var F=0;F<S.forages.length;F++){var U=S.forages[F];U!==m&&y.push(U._initReady().catch(P))}var j=S.forages.slice(0);return h.all(y).then(function(){return v.db=S.db,A(v)}).then(function(z){return v.db=z,Y(v,m._defaultConfig.version)?$(v):z}).then(function(z){v.db=S.db=z,m._dbInfo=v;for(var J=0;J<j.length;J++){var pe=j[J];pe!==m&&(pe._dbInfo.db=v.db,pe._dbInfo.version=v.version)}})}function ce(d,m){var v=this;d=g(d);var w=new h(function(S,y){v.ready().then(function(){W(v._dbInfo,G,function(P,F){if(P)return y(P);try{var U=F.objectStore(v._dbInfo.storeName),j=U.get(d);j.onsuccess=function(){var z=j.result;z===void 0&&(z=null),ie(z)&&(z=ae(z)),S(z)},j.onerror=function(){y(j.error)}}catch(z){y(z)}})}).catch(y)});return f(w,m),w}function we(d,m){var v=this,w=new h(function(S,y){v.ready().then(function(){W(v._dbInfo,G,function(P,F){if(P)return y(P);try{var U=F.objectStore(v._dbInfo.storeName),j=U.openCursor(),z=1;j.onsuccess=function(){var J=j.result;if(J){var pe=J.value;ie(pe)&&(pe=ae(pe));var Ie=d(pe,J.key,z++);Ie!==void 0?S(Ie):J.continue()}else S()},j.onerror=function(){y(j.error)}}catch(J){y(J)}})}).catch(y)});return f(w,m),w}function Be(d,m,v){var w=this;d=g(d);var S=new h(function(y,P){var F;w.ready().then(function(){return F=w._dbInfo,q.call(m)==="[object Blob]"?R(F.db).then(function(U){return U?m:te(m)}):m}).then(function(U){W(w._dbInfo,k,function(j,z){if(j)return P(j);try{var J=z.objectStore(w._dbInfo.storeName);U===null&&(U=void 0);var pe=J.put(U,d);z.oncomplete=function(){U===void 0&&(U=null),y(U)},z.onabort=z.onerror=function(){var Ie=pe.error?pe.error:pe.transaction.error;P(Ie)}}catch(Ie){P(Ie)}})}).catch(P)});return f(S,v),S}function ve(d,m){var v=this;d=g(d);var w=new h(function(S,y){v.ready().then(function(){W(v._dbInfo,k,function(P,F){if(P)return y(P);try{var U=F.objectStore(v._dbInfo.storeName),j=U.delete(d);F.oncomplete=function(){S()},F.onerror=function(){y(j.error)},F.onabort=function(){var z=j.error?j.error:j.transaction.error;y(z)}}catch(z){y(z)}})}).catch(y)});return f(w,m),w}function De(d){var m=this,v=new h(function(w,S){m.ready().then(function(){W(m._dbInfo,k,function(y,P){if(y)return S(y);try{var F=P.objectStore(m._dbInfo.storeName),U=F.clear();P.oncomplete=function(){w()},P.onabort=P.onerror=function(){var j=U.error?U.error:U.transaction.error;S(j)}}catch(j){S(j)}})}).catch(S)});return f(v,d),v}function Jt(d){var m=this,v=new h(function(w,S){m.ready().then(function(){W(m._dbInfo,G,function(y,P){if(y)return S(y);try{var F=P.objectStore(m._dbInfo.storeName),U=F.count();U.onsuccess=function(){w(U.result)},U.onerror=function(){S(U.error)}}catch(j){S(j)}})}).catch(S)});return f(v,d),v}function wr(d,m){var v=this,w=new h(function(S,y){if(d<0){S(null);return}v.ready().then(function(){W(v._dbInfo,G,function(P,F){if(P)return y(P);try{var U=F.objectStore(v._dbInfo.storeName),j=!1,z=U.openKeyCursor();z.onsuccess=function(){var J=z.result;if(!J){S(null);return}d===0||j?S(J.key):(j=!0,J.advance(d))},z.onerror=function(){y(z.error)}}catch(J){y(J)}})}).catch(y)});return f(w,m),w}function Fh(d){var m=this,v=new h(function(w,S){m.ready().then(function(){W(m._dbInfo,G,function(y,P){if(y)return S(y);try{var F=P.objectStore(m._dbInfo.storeName),U=F.openKeyCursor(),j=[];U.onsuccess=function(){var z=U.result;if(!z){w(j);return}j.push(z.key),z.continue()},U.onerror=function(){S(U.error)}}catch(z){S(z)}})}).catch(S)});return f(v,d),v}function Uh(d,m){m=I.apply(this,arguments);var v=this.config();d=typeof d!="function"&&d||{},d.name||(d.name=d.name||v.name,d.storeName=d.storeName||v.storeName);var w=this,S;if(!d.name)S=h.reject("Invalid arguments");else{var y=d.name===v.name&&w._dbInfo.db,P=y?h.resolve(w._dbInfo.db):A(d).then(function(F){var U=D[d.name],j=U.forages;U.db=F;for(var z=0;z<j.length;z++)j[z]._dbInfo.db=F;return F});d.storeName?S=P.then(function(F){if(!!F.objectStoreNames.contains(d.storeName)){var U=F.version+1;H(d);var j=D[d.name],z=j.forages;F.close();for(var J=0;J<z.length;J++){var pe=z[J];pe._dbInfo.db=null,pe._dbInfo.version=U}var Ie=new h(function(Se,Ve){var Le=c.open(d.name,U);Le.onerror=function(Zt){var go=Le.result;go.close(),Ve(Zt)},Le.onupgradeneeded=function(){var Zt=Le.result;Zt.deleteObjectStore(d.storeName)},Le.onsuccess=function(){var Zt=Le.result;Zt.close(),Se(Zt)}});return Ie.then(function(Se){j.db=Se;for(var Ve=0;Ve<z.length;Ve++){var Le=z[Ve];Le._dbInfo.db=Se,ne(Le._dbInfo)}}).catch(function(Se){throw(ye(d,Se)||h.resolve()).catch(function(){}),Se})}}):S=P.then(function(F){H(d);var U=D[d.name],j=U.forages;F.close();for(var z=0;z<j.length;z++){var J=j[z];J._dbInfo.db=null}var pe=new h(function(Ie,Se){var Ve=c.deleteDatabase(d.name);Ve.onerror=function(){var Le=Ve.result;Le&&Le.close(),Se(Ve.error)},Ve.onblocked=function(){console.warn('dropInstance blocked for database "'+d.name+'" until all open connections are closed')},Ve.onsuccess=function(){var Le=Ve.result;Le&&Le.close(),Ie(Le)}});return pe.then(function(Ie){U.db=Ie;for(var Se=0;Se<j.length;Se++){var Ve=j[Se];ne(Ve._dbInfo)}}).catch(function(Ie){throw(ye(d,Ie)||h.resolve()).catch(function(){}),Ie})})}return f(S,m),S}var XR={_driver:"asyncStorage",_initStorage:oe,_support:u(),iterate:we,getItem:ce,setItem:Be,removeItem:ve,clear:De,length:Jt,key:wr,keys:Fh,dropInstance:Uh};function QR(){return typeof openDatabase=="function"}var rn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",JR="~~local_forage_type~",ty=/^~~local_forage_type~([^~]+)~/,wc="__lfsc__:",jh=wc.length,Bh="arbf",Vh="blob",ry="si08",ny="ui08",iy="uic8",sy="si16",oy="si32",ay="ur16",cy="ui32",uy="fl32",ly="fl64",hy=jh+Bh.length,fy=Object.prototype.toString;function dy(d){var m=d.length*.75,v=d.length,w,S=0,y,P,F,U;d[d.length-1]==="="&&(m--,d[d.length-2]==="="&&m--);var j=new ArrayBuffer(m),z=new Uint8Array(j);for(w=0;w<v;w+=4)y=rn.indexOf(d[w]),P=rn.indexOf(d[w+1]),F=rn.indexOf(d[w+2]),U=rn.indexOf(d[w+3]),z[S++]=y<<2|P>>4,z[S++]=(P&15)<<4|F>>2,z[S++]=(F&3)<<6|U&63;return j}function qh(d){var m=new Uint8Array(d),v="",w;for(w=0;w<m.length;w+=3)v+=rn[m[w]>>2],v+=rn[(m[w]&3)<<4|m[w+1]>>4],v+=rn[(m[w+1]&15)<<2|m[w+2]>>6],v+=rn[m[w+2]&63];return m.length%3==2?v=v.substring(0,v.length-1)+"=":m.length%3==1&&(v=v.substring(0,v.length-2)+"=="),v}function ZR(d,m){var v="";if(d&&(v=fy.call(d)),d&&(v==="[object ArrayBuffer]"||d.buffer&&fy.call(d.buffer)==="[object ArrayBuffer]")){var w,S=wc;d instanceof ArrayBuffer?(w=d,S+=Bh):(w=d.buffer,v==="[object Int8Array]"?S+=ry:v==="[object Uint8Array]"?S+=ny:v==="[object Uint8ClampedArray]"?S+=iy:v==="[object Int16Array]"?S+=sy:v==="[object Uint16Array]"?S+=ay:v==="[object Int32Array]"?S+=oy:v==="[object Uint32Array]"?S+=cy:v==="[object Float32Array]"?S+=uy:v==="[object Float64Array]"?S+=ly:m(new Error("Failed to get type for BinaryArray"))),m(S+qh(w))}else if(v==="[object Blob]"){var y=new FileReader;y.onload=function(){var P=JR+d.type+"~"+qh(this.result);m(wc+Vh+P)},y.readAsArrayBuffer(d)}else try{m(JSON.stringify(d))}catch(P){console.error("Couldn't convert value into a JSON string: ",d),m(null,P)}}function ex(d){if(d.substring(0,jh)!==wc)return JSON.parse(d);var m=d.substring(hy),v=d.substring(jh,hy),w;if(v===Vh&&ty.test(m)){var S=m.match(ty);w=S[1],m=m.substring(S[0].length)}var y=dy(m);switch(v){case Bh:return y;case Vh:return l([y],{type:w});case ry:return new Int8Array(y);case ny:return new Uint8Array(y);case iy:return new Uint8ClampedArray(y);case sy:return new Int16Array(y);case ay:return new Uint16Array(y);case oy:return new Int32Array(y);case cy:return new Uint32Array(y);case uy:return new Float32Array(y);case ly:return new Float64Array(y);default:throw new Error("Unkown type: "+v)}}var zh={serialize:ZR,deserialize:ex,stringToBuffer:dy,bufferToString:qh};function py(d,m,v,w){d.executeSql("CREATE TABLE IF NOT EXISTS "+m.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],v,w)}function tx(d){var m=this,v={db:null};if(d)for(var w in d)v[w]=typeof d[w]!="string"?d[w].toString():d[w];var S=new h(function(y,P){try{v.db=openDatabase(v.name,String(v.version),v.description,v.size)}catch(F){return P(F)}v.db.transaction(function(F){py(F,v,function(){m._dbInfo=v,y()},function(U,j){P(j)})},P)});return v.serializer=zh,S}function nn(d,m,v,w,S,y){d.executeSql(v,w,S,function(P,F){F.code===F.SYNTAX_ERR?P.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[m.storeName],function(U,j){j.rows.length?y(U,F):py(U,m,function(){U.executeSql(v,w,S,y)},y)},y):y(P,F)},y)}function rx(d,m){var v=this;d=g(d);var w=new h(function(S,y){v.ready().then(function(){var P=v._dbInfo;P.db.transaction(function(F){nn(F,P,"SELECT * FROM "+P.storeName+" WHERE key = ? LIMIT 1",[d],function(U,j){var z=j.rows.length?j.rows.item(0).value:null;z&&(z=P.serializer.deserialize(z)),S(z)},function(U,j){y(j)})})}).catch(y)});return f(w,m),w}function nx(d,m){var v=this,w=new h(function(S,y){v.ready().then(function(){var P=v._dbInfo;P.db.transaction(function(F){nn(F,P,"SELECT * FROM "+P.storeName,[],function(U,j){for(var z=j.rows,J=z.length,pe=0;pe<J;pe++){var Ie=z.item(pe),Se=Ie.value;if(Se&&(Se=P.serializer.deserialize(Se)),Se=d(Se,Ie.key,pe+1),Se!==void 0){S(Se);return}}S()},function(U,j){y(j)})})}).catch(y)});return f(w,m),w}function vy(d,m,v,w){var S=this;d=g(d);var y=new h(function(P,F){S.ready().then(function(){m===void 0&&(m=null);var U=m,j=S._dbInfo;j.serializer.serialize(m,function(z,J){J?F(J):j.db.transaction(function(pe){nn(pe,j,"INSERT OR REPLACE INTO "+j.storeName+" (key, value) VALUES (?, ?)",[d,z],function(){P(U)},function(Ie,Se){F(Se)})},function(pe){if(pe.code===pe.QUOTA_ERR){if(w>0){P(vy.apply(S,[d,U,v,w-1]));return}F(pe)}})})}).catch(F)});return f(y,v),y}function ix(d,m,v){return vy.apply(this,[d,m,v,1])}function sx(d,m){var v=this;d=g(d);var w=new h(function(S,y){v.ready().then(function(){var P=v._dbInfo;P.db.transaction(function(F){nn(F,P,"DELETE FROM "+P.storeName+" WHERE key = ?",[d],function(){S()},function(U,j){y(j)})})}).catch(y)});return f(w,m),w}function ox(d){var m=this,v=new h(function(w,S){m.ready().then(function(){var y=m._dbInfo;y.db.transaction(function(P){nn(P,y,"DELETE FROM "+y.storeName,[],function(){w()},function(F,U){S(U)})})}).catch(S)});return f(v,d),v}function ax(d){var m=this,v=new h(function(w,S){m.ready().then(function(){var y=m._dbInfo;y.db.transaction(function(P){nn(P,y,"SELECT COUNT(key) as c FROM "+y.storeName,[],function(F,U){var j=U.rows.item(0).c;w(j)},function(F,U){S(U)})})}).catch(S)});return f(v,d),v}function cx(d,m){var v=this,w=new h(function(S,y){v.ready().then(function(){var P=v._dbInfo;P.db.transaction(function(F){nn(F,P,"SELECT key FROM "+P.storeName+" WHERE id = ? LIMIT 1",[d+1],function(U,j){var z=j.rows.length?j.rows.item(0).key:null;S(z)},function(U,j){y(j)})})}).catch(y)});return f(w,m),w}function ux(d){var m=this,v=new h(function(w,S){m.ready().then(function(){var y=m._dbInfo;y.db.transaction(function(P){nn(P,y,"SELECT key FROM "+y.storeName,[],function(F,U){for(var j=[],z=0;z<U.rows.length;z++)j.push(U.rows.item(z).key);w(j)},function(F,U){S(U)})})}).catch(S)});return f(v,d),v}function lx(d){return new h(function(m,v){d.transaction(function(w){w.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(S,y){for(var P=[],F=0;F<y.rows.length;F++)P.push(y.rows.item(F).name);m({db:d,storeNames:P})},function(S,y){v(y)})},function(w){v(w)})})}function hx(d,m){m=I.apply(this,arguments);var v=this.config();d=typeof d!="function"&&d||{},d.name||(d.name=d.name||v.name,d.storeName=d.storeName||v.storeName);var w=this,S;return d.name?S=new h(function(y){var P;d.name===v.name?P=w._dbInfo.db:P=openDatabase(d.name,"","",0),d.storeName?y({db:P,storeNames:[d.storeName]}):y(lx(P))}).then(function(y){return new h(function(P,F){y.db.transaction(function(U){function j(Ie){return new h(function(Se,Ve){U.executeSql("DROP TABLE IF EXISTS "+Ie,[],function(){Se()},function(Le,Zt){Ve(Zt)})})}for(var z=[],J=0,pe=y.storeNames.length;J<pe;J++)z.push(j(y.storeNames[J]));h.all(z).then(function(){P()}).catch(function(Ie){F(Ie)})},function(U){F(U)})})}):S=h.reject("Invalid arguments"),f(S,m),S}var fx={_driver:"webSQLStorage",_initStorage:tx,_support:QR(),iterate:nx,getItem:rx,setItem:ix,removeItem:sx,clear:ox,length:ax,key:cx,keys:ux,dropInstance:hx};function dx(){try{return typeof localStorage!="undefined"&&"setItem"in localStorage&&!!localStorage.setItem}catch(d){return!1}}function gy(d,m){var v=d.name+"/";return d.storeName!==m.storeName&&(v+=d.storeName+"/"),v}function px(){var d="_localforage_support_test";try{return localStorage.setItem(d,!0),localStorage.removeItem(d),!1}catch(m){return!0}}function vx(){return!px()||localStorage.length>0}function gx(d){var m=this,v={};if(d)for(var w in d)v[w]=d[w];return v.keyPrefix=gy(d,m._defaultConfig),vx()?(m._dbInfo=v,v.serializer=zh,h.resolve()):h.reject()}function mx(d){var m=this,v=m.ready().then(function(){for(var w=m._dbInfo.keyPrefix,S=localStorage.length-1;S>=0;S--){var y=localStorage.key(S);y.indexOf(w)===0&&localStorage.removeItem(y)}});return f(v,d),v}function yx(d,m){var v=this;d=g(d);var w=v.ready().then(function(){var S=v._dbInfo,y=localStorage.getItem(S.keyPrefix+d);return y&&(y=S.serializer.deserialize(y)),y});return f(w,m),w}function wx(d,m){var v=this,w=v.ready().then(function(){for(var S=v._dbInfo,y=S.keyPrefix,P=y.length,F=localStorage.length,U=1,j=0;j<F;j++){var z=localStorage.key(j);if(z.indexOf(y)===0){var J=localStorage.getItem(z);if(J&&(J=S.serializer.deserialize(J)),J=d(J,z.substring(P),U++),J!==void 0)return J}}});return f(w,m),w}function bx(d,m){var v=this,w=v.ready().then(function(){var S=v._dbInfo,y;try{y=localStorage.key(d)}catch(P){y=null}return y&&(y=y.substring(S.keyPrefix.length)),y});return f(w,m),w}function _x(d){var m=this,v=m.ready().then(function(){for(var w=m._dbInfo,S=localStorage.length,y=[],P=0;P<S;P++){var F=localStorage.key(P);F.indexOf(w.keyPrefix)===0&&y.push(F.substring(w.keyPrefix.length))}return y});return f(v,d),v}function Ex(d){var m=this,v=m.keys().then(function(w){return w.length});return f(v,d),v}function Ix(d,m){var v=this;d=g(d);var w=v.ready().then(function(){var S=v._dbInfo;localStorage.removeItem(S.keyPrefix+d)});return f(w,m),w}function Sx(d,m,v){var w=this;d=g(d);var S=w.ready().then(function(){m===void 0&&(m=null);var y=m;return new h(function(P,F){var U=w._dbInfo;U.serializer.serialize(m,function(j,z){if(z)F(z);else try{localStorage.setItem(U.keyPrefix+d,j),P(y)}catch(J){(J.name==="QuotaExceededError"||J.name==="NS_ERROR_DOM_QUOTA_REACHED")&&F(J),F(J)}})})});return f(S,v),S}function Tx(d,m){if(m=I.apply(this,arguments),d=typeof d!="function"&&d||{},!d.name){var v=this.config();d.name=d.name||v.name,d.storeName=d.storeName||v.storeName}var w=this,S;return d.name?S=new h(function(y){d.storeName?y(gy(d,w._defaultConfig)):y(d.name+"/")}).then(function(y){for(var P=localStorage.length-1;P>=0;P--){var F=localStorage.key(P);F.indexOf(y)===0&&localStorage.removeItem(F)}}):S=h.reject("Invalid arguments"),f(S,m),S}var Ax={_driver:"localStorageWrapper",_initStorage:gx,_support:dx(),iterate:wx,getItem:yx,setItem:Sx,removeItem:Ix,clear:mx,length:Ex,key:bx,keys:_x,dropInstance:Tx},Ox=function(m,v){return m===v||typeof m=="number"&&typeof v=="number"&&isNaN(m)&&isNaN(v)},Cx=function(m,v){for(var w=m.length,S=0;S<w;){if(Ox(m[S],v))return!0;S++}return!1},my=Array.isArray||function(d){return Object.prototype.toString.call(d)==="[object Array]"},vo={},yy={},Wi={INDEXEDDB:XR,WEBSQL:fx,LOCALSTORAGE:Ax},Rx=[Wi.INDEXEDDB._driver,Wi.WEBSQL._driver,Wi.LOCALSTORAGE._driver],bc=["dropInstance"],Wh=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(bc),xx={description:"",driver:Rx.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Nx(d,m){d[m]=function(){var v=arguments;return d.ready().then(function(){return d[m].apply(d,v)})}}function Gh(){for(var d=1;d<arguments.length;d++){var m=arguments[d];if(m)for(var v in m)m.hasOwnProperty(v)&&(my(m[v])?arguments[0][v]=m[v].slice():arguments[0][v]=m[v])}return arguments[0]}var kx=function(){function d(m){o(this,d);for(var v in Wi)if(Wi.hasOwnProperty(v)){var w=Wi[v],S=w._driver;this[v]=S,vo[S]||this.defineDriver(w)}this._defaultConfig=Gh({},xx),this._config=Gh({},this._defaultConfig,m),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return d.prototype.config=function(v){if((typeof v=="undefined"?"undefined":s(v))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var w in v){if(w==="storeName"&&(v[w]=v[w].replace(/\W/g,"_")),w==="version"&&typeof v[w]!="number")return new Error("Database version must be a number.");this._config[w]=v[w]}return"driver"in v&&v.driver?this.setDriver(this._config.driver):!0}else return typeof v=="string"?this._config[v]:this._config},d.prototype.defineDriver=function(v,w,S){var y=new h(function(P,F){try{var U=v._driver,j=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!v._driver){F(j);return}for(var z=Wh.concat("_initStorage"),J=0,pe=z.length;J<pe;J++){var Ie=z[J],Se=!Cx(bc,Ie);if((Se||v[Ie])&&typeof v[Ie]!="function"){F(j);return}}var Ve=function(){for(var go=function(Dx){return function(){var Lx=new Error("Method "+Dx+" is not implemented by the current driver"),wy=h.reject(Lx);return f(wy,arguments[arguments.length-1]),wy}},Kh=0,$x=bc.length;Kh<$x;Kh++){var Hh=bc[Kh];v[Hh]||(v[Hh]=go(Hh))}};Ve();var Le=function(go){vo[U]&&console.info("Redefining LocalForage driver: "+U),vo[U]=v,yy[U]=go,P()};"_support"in v?v._support&&typeof v._support=="function"?v._support().then(Le,F):Le(!!v._support):Le(!0)}catch(Zt){F(Zt)}});return p(y,w,S),y},d.prototype.driver=function(){return this._driver||null},d.prototype.getDriver=function(v,w,S){var y=vo[v]?h.resolve(vo[v]):h.reject(new Error("Driver not found."));return p(y,w,S),y},d.prototype.getSerializer=function(v){var w=h.resolve(zh);return p(w,v),w},d.prototype.ready=function(v){var w=this,S=w._driverSet.then(function(){return w._ready===null&&(w._ready=w._initDriver()),w._ready});return p(S,v,v),S},d.prototype.setDriver=function(v,w,S){var y=this;my(v)||(v=[v]);var P=this._getSupportedDrivers(v);function F(){y._config.driver=y.driver()}function U(J){return y._extend(J),F(),y._ready=y._initStorage(y._config),y._ready}function j(J){return function(){var pe=0;function Ie(){for(;pe<J.length;){var Se=J[pe];return pe++,y._dbInfo=null,y._ready=null,y.getDriver(Se).then(U).catch(Ie)}F();var Ve=new Error("No available storage method found.");return y._driverSet=h.reject(Ve),y._driverSet}return Ie()}}var z=this._driverSet!==null?this._driverSet.catch(function(){return h.resolve()}):h.resolve();return this._driverSet=z.then(function(){var J=P[0];return y._dbInfo=null,y._ready=null,y.getDriver(J).then(function(pe){y._driver=pe._driver,F(),y._wrapLibraryMethodsWithReady(),y._initDriver=j(P)})}).catch(function(){F();var J=new Error("No available storage method found.");return y._driverSet=h.reject(J),y._driverSet}),p(this._driverSet,w,S),this._driverSet},d.prototype.supports=function(v){return!!yy[v]},d.prototype._extend=function(v){Gh(this,v)},d.prototype._getSupportedDrivers=function(v){for(var w=[],S=0,y=v.length;S<y;S++){var P=v[S];this.supports(P)&&w.push(P)}return w},d.prototype._wrapLibraryMethodsWithReady=function(){for(var v=0,w=Wh.length;v<w;v++)Nx(this,Wh[v])},d.prototype.createInstance=function(v){return new d(v)},d}(),Px=new kx;n.exports=Px},{"3":3}]},{},[4])(4)})})(GR);var P5=GR.exports;try{self["workbox:window:6.2.4"]&&_()}catch(t){}function KR(t,e){return new Promise(function(r){var n=new MessageChannel;n.port1.onmessage=function(i){r(i.data)},t.postMessage(e,[n.port2])})}function y5(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function HR(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function w5(t,e){var r;if(typeof Symbol=="undefined"||t[Symbol.iterator]==null){if(Array.isArray(t)||(r=function(i,s){if(i){if(typeof i=="string")return HR(i,s);var o=Object.prototype.toString.call(i).slice(8,-1);return o==="Object"&&i.constructor&&(o=i.constructor.name),o==="Map"||o==="Set"?Array.from(i):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?HR(i,s):void 0}}(t))||e&&t&&typeof t.length=="number"){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(r=t[Symbol.iterator]()).next.bind(r)}try{self["workbox:core:6.2.4"]&&_()}catch(t){}var Zm=function(){var t=this;this.promise=new Promise(function(e,r){t.resolve=e,t.reject=r})};function ey(t,e){var r=location.href;return new URL(t,r).href===new URL(e,r).href}var yc=function(t,e){this.type=t,Object.assign(this,e)};function Mh(t,e,r){return r?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function b5(){}var _5={type:"SKIP_WAITING"};function YR(t,e){if(!e)return t&&t.then?t.then(b5):Promise.resolve()}var $5=function(t){var e,r;function n(a,c){var u,l;return c===void 0&&(c={}),(u=t.call(this)||this).nn={},u.tn=0,u.rn=new Zm,u.en=new Zm,u.on=new Zm,u.un=0,u.an=new Set,u.cn=function(){var h=u.fn,f=h.installing;u.tn>0||!ey(f.scriptURL,u.sn.toString())||performance.now()>u.un+6e4?(u.vn=f,h.removeEventListener("updatefound",u.cn)):(u.hn=f,u.an.add(f),u.rn.resolve(f)),++u.tn,f.addEventListener("statechange",u.ln)},u.ln=function(h){var f=u.fn,p=h.target,g=p.state,I=p===u.vn,E={sw:p,isExternal:I,originalEvent:h};!I&&u.mn&&(E.isUpdate=!0),u.dispatchEvent(new yc(g,E)),g==="installed"?u.wn=self.setTimeout(function(){g==="installed"&&f.waiting===p&&u.dispatchEvent(new yc("waiting",E))},200):g==="activating"&&(clearTimeout(u.wn),I||u.en.resolve(p))},u.dn=function(h){var f=u.hn,p=f!==navigator.serviceWorker.controller;u.dispatchEvent(new yc("controlling",{isExternal:p,originalEvent:h,sw:f,isUpdate:u.mn})),p||u.on.resolve(f)},u.gn=(l=function(h){var f=h.data,p=h.ports,g=h.source;return Mh(u.getSW(),function(){u.an.has(g)&&u.dispatchEvent(new yc("message",{data:f,originalEvent:h,ports:p,sw:g}))})},function(){for(var h=[],f=0;f<arguments.length;f++)h[f]=arguments[f];try{return Promise.resolve(l.apply(this,h))}catch(p){return Promise.reject(p)}}),u.sn=a,u.nn=c,navigator.serviceWorker.addEventListener("message",u.gn),u}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var i,s,o=n.prototype;return o.register=function(a){var c=(a===void 0?{}:a).immediate,u=c!==void 0&&c;try{var l=this;return function(h,f){var p=h();return p&&p.then?p.then(f):f(p)}(function(){if(!u&&document.readyState!=="complete")return YR(new Promise(function(h){return window.addEventListener("load",h)}))},function(){return l.mn=Boolean(navigator.serviceWorker.controller),l.yn=l.pn(),Mh(l.bn(),function(h){l.fn=h,l.yn&&(l.hn=l.yn,l.en.resolve(l.yn),l.on.resolve(l.yn),l.yn.addEventListener("statechange",l.ln,{once:!0}));var f=l.fn.waiting;return f&&ey(f.scriptURL,l.sn.toString())&&(l.hn=f,Promise.resolve().then(function(){l.dispatchEvent(new yc("waiting",{sw:f,wasWaitingBeforeRegister:!0}))}).then(function(){})),l.hn&&(l.rn.resolve(l.hn),l.an.add(l.hn)),l.fn.addEventListener("updatefound",l.cn),navigator.serviceWorker.addEventListener("controllerchange",l.dn),l.fn})})}catch(h){return Promise.reject(h)}},o.update=function(){try{return this.fn?YR(this.fn.update()):void 0}catch(a){return Promise.reject(a)}},o.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},o.messageSW=function(a){try{return Mh(this.getSW(),function(c){return KR(c,a)})}catch(c){return Promise.reject(c)}},o.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&KR(this.fn.waiting,_5)},o.pn=function(){var a=navigator.serviceWorker.controller;return a&&ey(a.scriptURL,this.sn.toString())?a:void 0},o.bn=function(){try{var a=this;return function(c,u){try{var l=c()}catch(h){return u(h)}return l&&l.then?l.then(void 0,u):l}(function(){return Mh(navigator.serviceWorker.register(a.sn,a.nn),function(c){return a.un=performance.now(),c})},function(c){throw c})}catch(c){return Promise.reject(c)}},i=n,(s=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&y5(i.prototype,s),n}(function(){function t(){this.Pn=new Map}var e=t.prototype;return e.addEventListener=function(r,n){this.Sn(r).add(n)},e.removeEventListener=function(r,n){this.Sn(r).delete(n)},e.dispatchEvent=function(r){r.target=this;for(var n,i=w5(this.Sn(r.type));!(n=i()).done;)(0,n.value)(r)},e.Sn=function(r){return this.Pn.has(r)||this.Pn.set(r,new Set),this.Pn.get(r)},t}());export{N5 as M,C5 as R,Fe as V,R5 as a,$5 as b,k5 as c,I5 as d,qe as e,ia as f,T5 as g,S5 as h,A5 as i,II as j,P5 as l,O5 as s,x5 as v};
