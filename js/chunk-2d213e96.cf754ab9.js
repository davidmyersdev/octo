(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213e96"],{af61:function(n,r,t){"use strict";function u(n,r){return n.skipToEnd(),r.cur=d,"error"}function c(n,r){return n.match(/^HTTP\/\d\.\d/)?(r.cur=e,"keyword"):n.match(/^[A-Z]+/)&&/[ \t]/.test(n.peek())?(r.cur=i,"keyword"):u(n,r)}function e(n,r){var t=n.match(/^\d+/);if(!t)return u(n,r);r.cur=o;var c=Number(t[0]);return c>=100&&c<400?"atom":"error"}function o(n,r){return n.skipToEnd(),r.cur=d,null}function i(n,r){return n.eatWhile(/\S/),r.cur=a,"string.special"}function a(n,r){return n.match(/^HTTP\/\d\.\d$/)?(r.cur=d,"keyword"):u(n,r)}function d(n){return n.sol()&&!n.eat(/[ \t]/)?n.match(/^.*?:/)?"atom":(n.skipToEnd(),"error"):(n.skipToEnd(),"string")}function s(n){return n.skipToEnd(),null}t.r(r),t.d(r,"http",(function(){return f}));const f={token:function(n,r){var t=r.cur;return t!=d&&t!=s&&n.eatSpace()?null:t(n,r)},blankLine:function(n){n.cur=s},startState:function(){return{cur:c}}}}}]);