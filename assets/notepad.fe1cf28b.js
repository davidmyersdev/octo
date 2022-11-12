import{_ as d,ae as n,a7 as i,a9 as c,ar as l,r as m,o as u,d as h,f}from"./index.b8eb6ee5.js";import{h as o}from"./moment.9709ab41.js";import _ from"./_doc_.8a04af95.js";import"./Editor.3fa99236.js";import"./account.39fe3759.js";import"./transform.812ac62b.js";const p={components:{Editor:_},computed:{daily(){return this.$store.getters.daily}},methods:{async buildTemplate(){try{const t=(await n(()=>import("./quotes.6145aced.js"),[])).default,e=t[Math.floor(Math.random()*t.length)];return`#daily

# ${o().format("dddd, MMMM Do, YYYY")}

> ${e.text}
> ${e.author||"Unknown"}

`}catch(t){return console.warn({error:t}),`#daily

# ${o().format("dddd, MMMM Do, YYYY")}

`}},async checkDaily(){let t=o().startOf("day").add(3,"hours");if(o()<t&&(t=t.subtract(1,"day")),!this.daily||this.daily.createdAt<t){const e=await this.buildTemplate(),a=new i({text:e,daily:!0});this.$store.commit(c,a)}}},beforeMount(){this.$store.state.documents.loaded?this.checkDaily():this.$store.subscribe(({type:t},e)=>{t===l&&this.checkDaily()})}};function y(t,e,a,D,M,r){const s=m("Editor");return r.daily?(u(),h(s,{key:0,docId:r.daily.id,initialFocus:"end"},null,8,["docId"])):f("",!0)}var x=d(p,[["render",y]]);export{x as default};
