(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c5afc"],{"3fc6":function(e,n,t){"use strict";t.r(n),t.d(n,"toml",(function(){return r}));const r={startState:function(){return{inString:!1,stringType:"",lhs:!0,inArray:0}},token:function(e,n){if(n.inString||'"'!=e.peek()&&"'"!=e.peek()||(n.stringType=e.peek(),e.next(),n.inString=!0),e.sol()&&0===n.inArray&&(n.lhs=!0),n.inString){for(;n.inString&&!e.eol();)e.peek()===n.stringType?(e.next(),n.inString=!1):"\\"===e.peek()?(e.next(),e.next()):e.match(/^.[^\\\"\']*/);return n.lhs?"property":"string"}return n.inArray&&"]"===e.peek()?(e.next(),n.inArray--,"bracket"):n.lhs&&"["===e.peek()&&e.skipTo("]")?(e.next(),"]"===e.peek()&&e.next(),"atom"):"#"===e.peek()?(e.skipToEnd(),"comment"):e.eatSpace()?null:n.lhs&&e.eatWhile((function(e){return"="!=e&&" "!=e}))?"property":n.lhs&&"="===e.peek()?(e.next(),n.lhs=!1,null):!n.lhs&&e.match(/^\d\d\d\d[\d\-\:\.T]*Z/)?"atom":n.lhs||!e.match("true")&&!e.match("false")?n.lhs||"["!==e.peek()?!n.lhs&&e.match(/^\-?\d+(?:\.\d+)?/)?"number":(e.eatSpace()||e.next(),null):(n.inArray++,e.next(),"bracket"):"atom"}}}}]);