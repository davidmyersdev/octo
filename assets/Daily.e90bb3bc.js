import{h as s}from"./moment.08a7f518.js";import a from"./Editor.f688350d.js";import{n as r,j as i,A as d,l as c}from"./index.d5de1f84.js";import"./Editor.4d648d65.js";import"./MarkdownEditor.umd.9fc6c46c.js";import"./vendor.71bc5b01.js";var l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.daily?o("Editor",{attrs:{id:t.daily.id,initialFocus:"end"}}):t._e()},m=[];const u={name:"Daily",components:{Editor:a},computed:{daily(){return this.$store.getters.daily}},methods:{async buildTemplate(){const t=await fetch("/quotes.json").then(o=>o.json()).catch(o=>[]),e=t[Math.floor(Math.random()*t.length)];return`#daily

# ${s().format("dddd, MMMM Do, YYYY")}

> ${e.text}
> ${e.author||"Unknown"}

`},async checkDaily(){let t=s().startOf("day").add(3,"hours");if(s()<t&&(t=t.subtract(1,"day")),!this.daily||this.daily.createdAt<t){const e=await this.buildTemplate(),o=new i({text:e,daily:!0});this.$store.commit(d,o)}}},beforeMount(){this.$store.state.documents.loaded?this.checkDaily():this.$store.subscribe(({type:t},e)=>{t===c&&this.checkDaily()})}},n={};var h=r(u,l,m,!1,f,null,null,null);function f(t){for(let e in n)this[e]=n[e]}var v=function(){return h.exports}();export{v as default};
