import{_ as i,a6 as n,m as a,$ as d,a1 as c,af as l,r as m,a as u,d as f,f as h}from"./index.4d2042ed.js";import _ from"./Editor.68a80f99.js";import"./Editor.5b24f6e1.js";const y={name:"Daily",components:{Editor:_},computed:{daily(){return this.$store.getters.daily}},methods:{async buildTemplate(){try{const t=(await n(()=>import("./quotes.6145aced.js"),[])).default,e=t[Math.floor(Math.random()*t.length)];return`#daily

# ${a().format("dddd, MMMM Do, YYYY")}

> ${e.text}
> ${e.author||"Unknown"}

`}catch(t){return console.error(t),`#daily

# ${a().format("dddd, MMMM Do, YYYY")}

`}},async checkDaily(){let t=a().startOf("day").add(3,"hours");if(a()<t&&(t=t.subtract(1,"day")),!this.daily||this.daily.createdAt<t){const e=await this.buildTemplate(),o=new d({text:e,daily:!0});this.$store.commit(c,o)}}},beforeMount(){this.$store.state.documents.loaded?this.checkDaily():this.$store.subscribe(({type:t},e)=>{t===l&&this.checkDaily()})}};function p(t,e,o,D,M,r){const s=m("Editor");return r.daily?(u(),f(s,{key:0,id:r.daily.id,initialFocus:"end"},null,8,["id"])):h("",!0)}var Y=i(y,[["render",p]]);export{Y as default};
