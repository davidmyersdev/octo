var v=Object.defineProperty,f=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var r=(t,s,e)=>s in t?v(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,i=(t,s)=>{for(var e in s||(s={}))g.call(s,e)&&r(t,e,s[e]);if(n)for(var e of n(s))x.call(s,e)&&r(t,e,s[e]);return t},d=(t,s)=>f(t,w(s));import{h as o}from"./moment.08a7f518.js";import{s as C}from"./vendor.71bc5b01.js";import{n as l,T as _,p as b,D as k,o as c,a as y,R as D,b as M,c as A,d as $}from"./index.6e4ac15b.js";var j=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("button",{staticClass:"flex items-center cursor-pointer",on:{click:function(a){return a.stopPropagation(),t.toggle.apply(null,arguments)}}},[e("svg",{attrs:{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}})]),e("div",{staticClass:"ml-6 md:ml-3 text-left flex-grow"},[t._v(t._s(t.actionText))])])},T=[];const S={name:"DiscardableAction",props:{discardedAt:Date,onDiscard:Function,onRestore:Function},computed:{actionText(){return this.discardedAt?"Restore":"Discard"}},methods:{toggle(){this.discardedAt?this.onRestore():this.onDiscard()}}},m={};var R=l(S,j,T,!1,E,null,null,null);function E(t){for(let s in m)this[s]=m[s]}var Y=function(){return R.exports}();const I=t=>{const s={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({files:t})};return fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1",s).then(e=>e.json()).then(e=>e.sandbox_id)},U=t=>{t&&window.open(`https://codesandbox.io/s/${t}`,"_blank")};var u={create:I,open:U},B=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("simplebar",{staticClass:"meta p-4 md:p-2"},[e("div",{staticClass:"flex flex-col flex-grow"},[e("div",{staticClass:"hidden mb-4 md:flex justify-end"},[e("button",{staticClass:"sidebar-button",on:{click:t.toggleMeta}},[e("svg",{attrs:{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})]),e("span",{staticClass:"ml-3"},[t._v("Hide")])])]),t.document?e("div",{staticClass:"flex flex-col flex-grow"},[e("div",[t.document.id?e("DiscardableAction",{staticClass:"sidebar-button w-full",attrs:{discardedAt:t.document.discardedAt,onDiscard:t.discardDocument,onRestore:t.restoreDocument}}):t._e(),e("button",{staticClass:"sidebar-button w-full",on:{click:function(a){return a.stopPropagation(),t.duplicateDocument.apply(null,arguments)}}},[e("svg",{attrs:{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"}})]),e("span",{staticClass:"ml-6 md:ml-3 flex-grow text-left"},[t._v("Duplicate")])]),t.hasCodeblocks?e("button",{staticClass:"sidebar-button w-full",on:{click:t.openSandbox}},[e("svg",{attrs:{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"}})]),e("span",{staticClass:"ml-6 md:ml-3 flex-grow text-left"},[t._v("Create Sandbox")])]):t._e(),e("div",[t.document.public?e("div",[e("button",{staticClass:"sidebar-button w-full",on:{click:t.restrictDocument}},[e("svg",{attrs:{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"}})]),e("span",{staticClass:"ml-6 md:ml-3 flex-grow text-left"},[t._v("Make Private")])]),e("button",{staticClass:"sidebar-button w-full",on:{click:t.copyPublicUrl}},[e("svg",{attrs:{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"}})]),e("span",{staticClass:"ml-6 md:ml-3 flex-grow text-left"},[t._v("Copy Link")])]),e("input",{ref:"link",staticClass:"form-text w-full mb-2",attrs:{type:"text",readonly:""},domProps:{value:t.publicUrl}})]):e("div",{staticClass:"mb-2"},[e("button",{staticClass:"sidebar-button w-full",on:{click:t.shareDocument}},[e("svg",{attrs:{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"}})]),e("span",{staticClass:"ml-6 md:ml-3 flex-grow text-left"},[t._v("Make Public")])])])])],1),e("div",{staticClass:"mt-4"},t._l(t.document.tags,function(a){return e("Tag",{key:a,staticClass:"sidebar-link",attrs:{tag:a}})}),1),e("div",{staticClass:"mt-4"},t._l(t.document.tasks,function(a){return e("div",{staticClass:"flex items-center px-3 py-2 my-1 md:px-2 md:py-1"},[e("svg",{attrs:{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"}})]),e("span",{staticClass:"flex-grow overflow-hidden truncate ml-3"},[t._v(t._s(a))])])}),0),e("div",{staticClass:"flex flex-col justify-end flex-grow px-3 md:p-2 mt-4 mb-3 md:mb-1"},[t.document.updatedAt?e("div",[e("small",{staticClass:"text-gray-700"},[t._v("Last Saved")]),e("div",{staticClass:"capitalize pt-2 md:pt-1"},[t._v(t._s(t.savedAt))])]):t._e(),t.document.createdAt?e("div",{staticClass:"mt-3 md:mt-2"},[e("small",{staticClass:"text-gray-700"},[t._v("Created")]),e("div",{staticClass:"pt-2 md:pt-1"},[t._v(t._s(t.createdAt))])]):t._e(),t.document.updatedAt?e("div",{staticClass:"mt-3 md:mt-2"},[e("small",{staticClass:"text-gray-700"},[t._v("Updated")]),e("div",{staticClass:"pt-2 md:pt-1"},[t._v(t._s(t.updatedAt))])]):t._e(),t.document.discardedAt?e("div",{staticClass:"mt-3 md:mt-2"},[e("small",{staticClass:"text-gray-700"},[t._v("Discarded")]),e("div",{staticClass:"pt-2 md:pt-1"},[t._v(t._s(t.discardedAt))])]):t._e()])]):t._e()])])},H=[];const N={name:"TheRightSidebar",components:{DiscardableAction:Y,simplebar:C,Tag:_},data(){return{now:o(),ticker:null}},computed:{codeblocks(){return b(this.document.text)},createdAt(){return this.$route.params.id?o(this.document.createdAt).format("ddd, MMM Do, YYYY [at] h:mm A"):"Not yet created"},discardedAt(){return o(this.document.discardedAt).format("ddd, MMM Do, YYYY [at] h:mm A")},document(){return this.$store.getters.currentDoc},hasCodeblocks(){return this.codeblocks.length>0},publicUrl(){const t=this.$router.resolve({name:"shared",params:{id:this.document.id}}).href;return`${location.protocol}//${location.host}${t}`},savedAt(){return this.$route.params.id?this.now.diff(this.document.updatedAt,"seconds")<5?"just now":`${o(this.document.updatedAt).from(this.now,!0)} ago`:"Not yet saved"},updatedAt(){return this.$route.params.id?o(this.document.updatedAt).format("ddd, MMM Do, YYYY [at] h:mm A"):"Not yet updated"}},methods:{async copyPublicUrl(){this.$refs.link.select(),document.execCommand("copy")},async discardDocument(){this.$store.dispatch(k,{id:this.document.id}),c({name:"dashboard"})},async duplicateDocument(){const t=await this.$store.dispatch(y,{id:this.document.id});c({name:"document",params:{id:t}})},async openSandbox(){const t=this.codeblocks.reduce((s,e,a)=>{const p=e.filename||[a,e.language||"txt"].join(".");return d(i({},s),{[p]:{content:e.code}})},{});u.create(t).then(s=>u.open(s))},async restoreDocument(){this.$store.dispatch(D,{id:this.document.id})},async restrictDocument(){this.$store.dispatch(M,{id:this.document.id})},async shareDocument(){this.$store.dispatch(A,{id:this.document.id})},async toggleMeta(){this.$store.dispatch($,!this.$store.state.showRightSidebar)}},async beforeDestroy(){clearInterval(this.ticker)},async mounted(){this.mounted=!0,this.ticker=setInterval(()=>{this.now=o()},5e3)}},h={};var P=l(N,B,H,!1,O,null,null,null);function O(t){for(let s in h)this[s]=h[s]}var G=function(){return P.exports}();export{G as default};
