import{_ as i,k as n,h as d,A as c,l}from"./index.5a80ada7.js";import{h as o,b as m,o as u,l as h,g as _}from"./vendor.51022e2f.js";import f from"./Editor.98c60636.js";import"./Editor.1ea00601.js";const y={name:"Daily",components:{Editor:f},computed:{daily(){return this.$store.getters.daily}},methods:{async buildTemplate(){try{const t=(await n(()=>import("./quotes.6145aced.js"),[])).default,e=t[Math.floor(Math.random()*t.length)];return`#daily

# ${o().format("dddd, MMMM Do, YYYY")}

> ${e.text}
> ${e.author||"Unknown"}

`}catch(t){return console.error(t),`#daily

# ${o().format("dddd, MMMM Do, YYYY")}

`}},async checkDaily(){let t=o().startOf("day").add(3,"hours");if(o()<t&&(t=t.subtract(1,"day")),!this.daily||this.daily.createdAt<t){const e=await this.buildTemplate(),a=new d({text:e,daily:!0});this.$store.commit(c,a)}}},beforeMount(){this.$store.state.documents.loaded?this.checkDaily():this.$store.subscribe(({type:t},e)=>{t===l&&this.checkDaily()})}};function p(t,e,a,D,M,r){const s=m("Editor");return r.daily?(u(),h(s,{key:0,id:r.daily.id,initialFocus:"end"},null,8,["id"])):_("",!0)}var b=i(y,[["render",p]]);export{b as default};
