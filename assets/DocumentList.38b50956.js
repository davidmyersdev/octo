import{h as _}from"./moment.9709ab41.js";import{_ as g,W as p,Y as v,o as r,c as n,a as e,t as u,R as h,a4 as w,M as x,r as k,e as y,f as c,j as b,v as D,P as M,Q as C,a5 as E,b as q,a6 as S,n as j}from"./index.96bc23b6.js";import{_ as z}from"./Tag.28061dd6.js";const L={props:{id:String,text:String,updatedAt:Date,discardedAt:Date},computed:{updated(){return`Updated on ${_(this.updatedAt).format("ddd, MMM Do, YYYY [at] h:mm A")}`}},methods:{discard(){this.$store.dispatch(p,{id:this.id})},restore(){this.$store.dispatch(v,{id:this.id})}}},R={class:"shadow relative flex flex-col min-w-0 rounded text-sm overflow-hidden cursor-pointer bg-gray-100 dark:bg-gray-800 dark:text-gray-300"},V={class:"flex-grow flex-shrink overflow-hidden p-4"},A={class:"flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-900"},B={class:"text-gray-500"},N=e("svg",{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),T=e("span",{class:"ml-2"},"Restore",-1),$=[N,T],U=e("svg",{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),Y=e("span",{class:"ml-2"},"Discard",-1),I=[U,Y];function O(o,t,d,m,l,s){return r(),n("div",R,[e("div",V,[e("pre",null,u(d.text),1)]),e("div",A,[e("p",B,u(s.updated),1),e("div",null,[d.discardedAt?(r(),n("button",{key:0,onClick:t[0]||(t[0]=h((...a)=>s.restore&&s.restore(...a),["stop"])),class:"destroy button-flat button-size-medium text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800"},$)):(r(),n("button",{key:1,onClick:t[1]||(t[1]=h((...a)=>s.discard&&s.discard(...a),["stop"])),class:"destroy button-flat button-size-medium text-sm text-red-500 bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800"},I))])])])}var H=g(L,[["render",O]]);const K=/^\/(?<regex>.+)\/(?<flags>[a-z]*)$/s,F={emits:["update:query"],components:{Document:H,Tag:z},props:{cols:{default:2,type:Number},filter:String,query:String,tag:String},data(){return{isEditing:!1,q:this.query,selectedDocuments:[],visibleCount:25}},watch:{q(o){this.$emit("update:query",o)}},computed:{action(){return this.tag||this.filter||"My docs"},canMerge(){return this.selectedDocuments.length>1},documents(){return this.tag?this.$store.getters.withTag(this.tag):this.filter==="tasks"?this.$store.getters.tasks:this.filter==="discarded"?this.$store.getters.discarded:this.filter==="untagged"?this.$store.getters.untagged:this.$store.getters.kept},filteredDocuments(){return this.documents.filter(o=>{if(!this.q)return!0;try{const{groups:{flags:t,regex:d}}=K.exec(this.q);return new RegExp(d,t).test(o.text)}catch{return o.text.toLowerCase().includes(this.q.toLowerCase())}})},finalDocuments(){return this.filteredDocuments.map(o=>({...o,selected:this.selectedDocuments.includes(o)}))},showLoadMore(){return this.visibleCount<=this.finalDocuments.length},visibleDocuments(){return this.finalDocuments.slice(0,this.visibleCount)}},methods:{loadMore(){this.visibleCount+=25},mergeDocuments(){this.$store.dispatch(w,this.selectedDocuments),this.selectedDocuments=[]},toggleIsEditing(){this.isEditing=!this.isEditing,this.isEditing||(this.selectedDocuments=[])},selectDocument(o){this.isEditing?this.selectedDocuments.find(t=>t.id===o)?this.selectedDocuments=this.selectedDocuments.filter(t=>t.id!==o):this.selectedDocuments.push(this.filteredDocuments.find(t=>t.id===o)):x({path:`/docs/${o}`})}},mounted(){this.$refs.input.focus()}},G={class:"flex flex-col w-full"},P=e("h2",{class:"action text-3xl capitalize mb-2"},"My Docs",-1),Q={key:0,class:"flex items-center gap-1 text-gray-500"},W={class:"inline-flex items-center"},X={key:0,class:"inline-flex items-center gap-0.5"},J=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"3"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7 20l4-16m2 16l4-16M6 9h14M4 15h14"})],-1),Z={key:1,class:""},ee={class:"mb-4 mt-8"},te={class:"flex align-items-bottom"},se={class:"flex-grow"},oe={class:"flex"},ie={class:"mb-4"},re={key:0,class:"text-gray-700"},ne=["onKeypress","onClick"],de={key:0,class:"flex items-center justify-center rounded absolute inset-0 bg-black bg-opacity-10 dark:bg-opacity-50"},le=e("svg",{height:"3em",width:"3em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),ae=[le],ce={key:0,class:"flex items-center justify-center rounded cursor-pointer"},ue=e("svg",{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})],-1),he=e("span",{class:"ml-3"},"Load More",-1),ge=[ue,he];function me(o,t,d,m,l,s){const a=k("Document");return r(),n("div",G,[P,d.tag||d.filter?(r(),n("p",Q,[y(" Filtering docs as "),e("strong",W,[d.tag?(r(),n("span",X,[J,e("span",null,u(d.tag),1)])):(r(),n("span",Z,u(d.filter),1))])])):c("",!0),e("div",ee,[e("div",te,[e("div",se,[e("div",oe,[b(e("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>l.q=i),ref:"input",type:"text",class:"form-text w-full shadow",placeholder:"Search with /regex/i or plain text...",autocomplete:"off"},null,512),[[D,l.q]])])])])]),e("div",ie,[e("button",{onClick:t[1]||(t[1]=(...i)=>s.toggleIsEditing&&s.toggleIsEditing(...i)),class:"button button-size-medium button-color-gray shadow"},u(l.isEditing?"Cancel":"Edit Documents"),1),s.canMerge?(r(),n("button",{key:0,onClick:t[2]||(t[2]=(...i)=>s.mergeDocuments&&s.mergeDocuments(...i)),class:"button button-size-medium button-color-gray shadow ml-2"},"Merge Documents")):c("",!0)]),e("div",null,[l.isEditing?(r(),n("p",re,"Select two or more documents to merge them together.")):c("",!0)]),e("div",{class:j(["grid gap-4 grid-cols-1",d.cols===2&&"lg:grid-cols-2"])},[(r(!0),n(M,null,C(s.visibleDocuments,i=>(r(),n("div",{key:i.id,onKeypress:E(f=>s.selectDocument(i.id),["enter"]),onClick:f=>s.selectDocument(i.id),tabindex:"0",class:"rounded relative cursor-pointer outline-none focus:ring"},[q(a,S(i,{class:"h-96"}),null,16),i.selected?(r(),n("div",de,ae)):c("",!0)],40,ne))),128)),s.showLoadMore?(r(),n("div",ce,[e("div",{onClick:t[3]||(t[3]=(...i)=>s.loadMore&&s.loadMore(...i)),class:"button button-color-gray text-lg px-8 py-6"},ge)])):c("",!0)],2)])}var ve=g(F,[["render",me]]);export{ve as D};
