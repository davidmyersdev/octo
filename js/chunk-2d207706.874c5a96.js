(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d207706"],{a111:function(t,e,a){"use strict";a.r(e),a.d(e,"ebnf",(function(){return m}));var c=0,n=1,r=0,s=1,i=2;const m={startState:function(){return{stringType:null,commentType:null,braced:0,lhs:!0,localState:null,stack:[],inDefinition:!1}},token:function(t,e){if(t){switch(0===e.stack.length&&('"'==t.peek()||"'"==t.peek()?(e.stringType=t.peek(),t.next(),e.stack.unshift(s)):t.match("/*")?(e.stack.unshift(r),e.commentType=c):t.match("(*")&&(e.stack.unshift(r),e.commentType=n)),e.stack[0]){case s:for(;e.stack[0]===s&&!t.eol();)t.peek()===e.stringType?(t.next(),e.stack.shift()):"\\"===t.peek()?(t.next(),t.next()):t.match(/^.[^\\\"\']*/);return e.lhs?"property":"string";case r:for(;e.stack[0]===r&&!t.eol();)e.commentType===c&&t.match("*/")||e.commentType===n&&t.match("*)")?(e.stack.shift(),e.commentType=null):t.match(/^.[^\*]*/);return"comment";case i:for(;e.stack[0]===i&&!t.eol();)t.match(/^[^\]\\]+/)||t.match(".")||e.stack.shift();return"operator"}var a=t.peek();switch(a){case"[":return t.next(),e.stack.unshift(i),"bracket";case":":case"|":case";":return t.next(),"operator";case"%":if(t.match("%%"))return"header";if(t.match(/[%][A-Za-z]+/))return"keyword";if(t.match(/[%][}]/))return"bracket";break;case"/":if(t.match(/[\/][A-Za-z]+/))return"keyword";case"\\":if(t.match(/[\][a-z]+/))return"string.special";case".":if(t.match("."))return"atom";case"*":case"-":case"+":case"^":if(t.match(a))return"atom";case"$":if(t.match("$$"))return"builtin";if(t.match(/[$][0-9]+/))return"variableName.special";case"<":if(t.match(/<<[a-zA-Z_]+>>/))return"builtin"}return t.match("//")?(t.skipToEnd(),"comment"):t.match("return")?"operator":t.match(/^[a-zA-Z_][a-zA-Z0-9_]*/)?t.match(/(?=[\(.])/)?"variable":t.match(/(?=[\s\n]*[:=])/)?"def":"variableName.special":-1!=["[","]","(",")"].indexOf(t.peek())?(t.next(),"bracket"):(t.eatSpace()||t.next(),null)}}}}}]);