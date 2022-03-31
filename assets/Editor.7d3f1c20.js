var l=Object.defineProperty,p=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var r=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&r(e,a,t[a]);if(i)for(var a of i(t))m.call(t,a)&&r(e,a,t[a]);return e},o=(e,t)=>p(e,u(t));import{E as y}from"./Editor.e2615d91.js";import{_ as g,W as n,X as D,Y as A,Z as $,$ as _,a0 as E,o as S,a1 as T,r as x,a as b,d as v}from"./index.6afa439f.js";const c=(e,t=", ")=>e.map(a=>`#${a}`).join(t),w={name:"EditorView",components:{Editor:y},props:{id:String,initialFocus:{type:String,default:()=>"any",validator:e=>["any","start","end"].includes(e)},initialSelections:{type:Array},readonly:{type:Boolean}},data(){return{editor:null,placeholder:new n({text:c(this.$store.state.context.tags," ")})}},watch:{doc(){this.$refs.editable.clearHistory(),this.$refs.editable.focusEditor()},tags:{deep:!0,handler(){this.updateTitle()}},header(){this.updateTitle()}},computed:{appearance(){return this.$store.state.settings.theme==="october"?"dark":this.$store.state.settings.theme},currentDoc(){return this.$store.getters.currentDoc},doc(){return this.$store.getters.decrypted.find(e=>e.id===this.id)||this.placeholder},settings(){return this.$store.state.settings.editor},tags(){return this.doc.tags},header(){return this.doc.headers[0]}},methods:{async updateTitle(){D(this.doc.header||c(this.doc.tags))},async findSharedDocument(){const e=await A({docId:this.$route.params.id}),t=e.data(),a=o(d({},t),{id:t.id||t.clientId,firebaseId:e.id,textKey:t.textKey||t.dataKey,createdAt:t.createdAt?t.createdAt.toDate():null,discardedAt:t.discardedAt?t.discardedAt.toDate():null,updatedAt:t.updatedAt?t.updatedAt.toDate():null,touchedAt:t.touchedAt?t.touchedAt.toDate():null,syncedAt:t.syncedAt.toDate()});return $(a,{privateKey:this.$store.state.settings.crypto.privateKey})},async input(e){this.id?this.$store.dispatch(_,{id:this.doc.id,text:e}):(this.$store.dispatch(E,new n({id:this.doc.id,text:e})),S({name:"doc",params:{id:this.doc.id,props:{initialSelections:this.$refs.editable.getSelections()}}}))}},beforeRouteUpdate(e,t,a){e.name==="doc"&&this.$store.dispatch(T,{id:e.params.id}),a()},async mounted(){this.updateTitle(),this.readonly&&(this.placeholder=await this.findSharedDocument())}};function I(e,t,a,k,K,s){const h=x("Editor",!0);return b(),v(h,{ref:"editable",appearance:s.appearance,initialSelections:a.initialSelections,settings:s.settings,text:s.doc.text,onInput:s.input},null,8,["appearance","initialSelections","settings","text","onInput"])}var M=g(w,[["render",I]]);export{M as default};