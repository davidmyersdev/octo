import{h as s}from"./moment.08a7f518.js";import a from"./Editor.9846ec13.js";import{n as r,j as i,A as c,l as d}from"./index.71dee642.js";import"./Editor.53ffffee.js";import"./MarkdownEditor.umd.9fc6c46c.js";import"./vendor.71bc5b01.js";var l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.daily?o("Editor",{attrs:{id:t.daily.id,initialFocus:"end"}}):t._e()},m=[];const u={name:"Daily",components:{Editor:a},computed:{daily(){return this.$store.getters.daily}},methods:{async buildTemplate(){const t=await fetch("/quotes.json").then(o=>o.json()).catch(o=>[]),e=t[Math.floor(Math.random()*t.length)];return`#daily

# ${s().format("dddd, MMMM Do, YYYY")}

> ${e.text}
> ${e.author||"Unknown"}

`},async checkDaily(){let t=s().startOf("day").add(3,"hours");if(s()<t&&(t=t.subtract(1,"day")),!this.daily||this.daily.createdAt<t){const e=await this.buildTemplate(),o=new i({text:e,daily:!0});this.$store.commit(c,o)}}},beforeMount(){this.$store.state.documents.loaded?this.checkDaily():this.$store.subscribe(({type:t},e)=>{t===d&&this.checkDaily()})}},n={};var f=r(u,l,m,!1,h,null,null,null);function h(t){for(let e in n)this[e]=n[e]}var v=function(){return f.exports}();export{v as default};
