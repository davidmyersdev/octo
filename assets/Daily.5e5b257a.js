import{h as s}from"./moment.08a7f518.js";import n from"./Editor.22195bfc.js";import{n as r,j as i,A as c,l as d}from"./index.3967a075.js";import"./Editor.5f364c15.js";import"./MarkdownEditor.umd.9fc6c46c.js";import"./vendor.71bc5b01.js";var l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.daily?o("Editor",{attrs:{id:t.daily.id,initialFocus:"end"}}):t._e()},m=[];const u={name:"Daily",components:{Editor:n},computed:{daily(){return this.$store.getters.daily}},methods:{async buildTemplate(){const t=await fetch("/quotes.json").then(o=>o.json()).catch(o=>[]),e=t[Math.floor(Math.random()*t.length)];return`#daily

# ${s().format("dddd, MMMM Do, YYYY")}

> ${e.text}
> ${e.author||"Unknown"}

`},async checkDaily(){let t=s().startOf("day").add(3,"hours");if(s()<t&&(t=t.subtract(1,"day")),!this.daily||this.daily.createdAt<t){const e=await this.buildTemplate(),o=new i({text:e,daily:!0});this.$store.commit(c,o)}}},beforeMount(){this.$store.state.documents.loaded?this.checkDaily():this.$store.subscribe(({type:t},e)=>{t===d&&this.checkDaily()})}},a={};var h=r(u,l,m,!1,f,null,null,null);function f(t){for(let e in a)this[e]=a[e]}var b=function(){return h.exports}();export{b as default};
