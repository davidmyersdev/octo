import{E as s}from"./Editor.ba311644.js";import{n as o}from"./index.6e4ac15b.js";import"./MarkdownEditor.umd.9fc6c46c.js";import"./vendor.71bc5b01.js";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Editor",{attrs:{appearance:t.appearance,settings:t.settings,text:t.text}})},i=[];const c={name:"ExampleView",components:{Editor:s},props:{url:{type:String}},data(){return{text:""}},computed:{appearance(){return this.$store.state.settings.theme==="october"?"dark":this.$store.state.settings.theme},settings(){return this.$store.state.settings.editor}},async mounted(){fetch(this.url).then(t=>t.text()).then(t=>{this.text=t})}},r={};var p=o(c,a,i,!1,m,null,null,null);function m(t){for(let e in r)this[e]=r[e]}var f=function(){return p.exports}();export{f as default};
