import{h as a}from"./moment.08a7f518.js";import n from"./Editor.2721e52e.js";import{n as i,j as r,A as c,l}from"./index.bcefa331.js";import"./Editor.ad3252c7.js";import"./MarkdownEditor.umd.6e7ef77c.js";import"./vendor.c2056232.js";var d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.daily?o("Editor",{attrs:{id:t.daily.id,initialFocus:"end"}}):t._e()},u=[];const h={name:"Daily",components:{Editor:n},computed:{daily(){return this.$store.getters.daily}},methods:{async buildTemplate(){const t=await fetch("/quotes.json").then(o=>o.json()).catch(o=>[]),e=t[Math.floor(Math.random()*t.length)];return`#daily

# ${a().format("dddd, MMMM Do, YYYY")}

> ${e.text}
> ${e.author||"Unknown"}

`},async checkDaily(){let t=a().startOf("day").add(3,"hours");if(a()<t&&(t=t.subtract(1,"day")),!this.daily||this.daily.createdAt<t){const e=await this.buildTemplate(),o=new r({text:e,daily:!0});this.$store.commit(c,o)}}},beforeMount(){this.$store.state.documents.loaded?this.checkDaily():this.$store.subscribe(({type:t},e)=>{t===l&&this.checkDaily()})}},s={};var m=i(h,d,u,!1,_,null,null,null);function _(t){for(let e in s)this[e]=s[e]}var $=function(){return m.exports}();export{$ as default};
