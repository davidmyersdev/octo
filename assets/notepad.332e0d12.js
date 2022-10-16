import{_ as d,a6 as n,A as o,$ as i,a1 as c,ah as l,r as u,o as m,d as h,f as _}from"./index.d5526c65.js";import f from"./_doc_.5904e45a.js";import"./Editor.4d400f78.js";const y={components:{Editor:f},computed:{daily(){return this.$store.getters.daily}},methods:{async buildTemplate(){try{const t=(await n(()=>import("./quotes.6145aced.js"),[])).default,e=t[Math.floor(Math.random()*t.length)];return`#daily

# ${o().format("dddd, MMMM Do, YYYY")}

> ${e.text}
> ${e.author||"Unknown"}

`}catch(t){return console.error(t),`#daily

# ${o().format("dddd, MMMM Do, YYYY")}

`}},async checkDaily(){let t=o().startOf("day").add(3,"hours");if(o()<t&&(t=t.subtract(1,"day")),!this.daily||this.daily.createdAt<t){const e=await this.buildTemplate(),a=new i({text:e,daily:!0});this.$store.commit(c,a)}}},beforeMount(){this.$store.state.documents.loaded?this.checkDaily():this.$store.subscribe(({type:t},e)=>{t===l&&this.checkDaily()})}};function p(t,e,a,D,M,r){const s=u("Editor");return r.daily?(m(),h(s,{key:0,docId:r.daily.id,initialFocus:"end"},null,8,["docId"])):_("",!0)}var Y=d(y,[["render",p]]);export{Y as default};
