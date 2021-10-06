import{h as a}from"./moment.08a7f518.js";import n from"./Editor.138e2c7a.js";import{n as r,j as i,A as c,l as d}from"./index.6f8da31a.js";import"./Editor.0bad8c91.js";import"./MarkdownEditor.umd.9fc6c46c.js";import"./vendor.71bc5b01.js";var l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.daily?o("Editor",{attrs:{id:t.daily.id,initialFocus:"end"}}):t._e()},m=[];const u={name:"Daily",components:{Editor:n},computed:{daily(){return this.$store.getters.daily}},methods:{async buildTemplate(){const t=await fetch("/quotes.json").then(o=>o.json()).catch(o=>[]),e=t[Math.floor(Math.random()*t.length)];return`#daily

# ${a().format("dddd, MMMM Do, YYYY")}

> ${e.text}
> ${e.author||"Unknown"}

`},async checkDaily(){let t=a().startOf("day").add(3,"hours");if(a()<t&&(t=t.subtract(1,"day")),!this.daily||this.daily.createdAt<t){const e=await this.buildTemplate(),o=new i({text:e,daily:!0});this.$store.commit(c,o)}}},beforeMount(){this.$store.state.documents.loaded?this.checkDaily():this.$store.subscribe(({type:t},e)=>{t===d&&this.checkDaily()})}},s={};var h=r(u,l,m,!1,f,null,null,null);function f(t){for(let e in s)this[e]=s[e]}var b=function(){return h.exports}();export{b as default};
