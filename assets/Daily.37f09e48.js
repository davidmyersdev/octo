import{_ as i,a3 as d,l as a,X as n,a1 as c,ad as l,r as u,a as m,d as h,f as _}from"./index.3e4a98f4.js";import f from"./Editor.6bf71337.js";import"./Editor.674c8847.js";const y={name:"Daily",components:{Editor:f},computed:{daily(){return this.$store.getters.daily}},methods:{async buildTemplate(){try{const t=(await d(()=>import("./quotes.6145aced.js"),[])).default,e=t[Math.floor(Math.random()*t.length)];return`#daily

# ${a().format("dddd, MMMM Do, YYYY")}

> ${e.text}
> ${e.author||"Unknown"}

`}catch(t){return console.error(t),`#daily

# ${a().format("dddd, MMMM Do, YYYY")}

`}},async checkDaily(){let t=a().startOf("day").add(3,"hours");if(a()<t&&(t=t.subtract(1,"day")),!this.daily||this.daily.createdAt<t){const e=await this.buildTemplate(),o=new n({text:e,daily:!0});this.$store.commit(c,o)}}},beforeMount(){this.$store.state.documents.loaded?this.checkDaily():this.$store.subscribe(({type:t},e)=>{t===l&&this.checkDaily()})}};function p(t,e,o,D,M,r){const s=u("Editor");return r.daily?(m(),h(s,{key:0,id:r.daily.id,initialFocus:"end"},null,8,["id"])):_("",!0)}var Y=i(y,[["render",p]]);export{Y as default};
