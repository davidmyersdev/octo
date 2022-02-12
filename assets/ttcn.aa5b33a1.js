function a(t){for(var e={},n=t.split(" "),r=0;r<n.length;++r)e[n[r]]=!0;return e}const i={name:"ttcn",keywords:a("activate address alive all alt altstep and and4b any break case component const continue control deactivate display do else encode enumerated except exception execute extends extension external for from function goto group if import in infinity inout interleave label language length log match message mixed mod modifies module modulepar mtc noblock not not4b nowait of on optional or or4b out override param pattern port procedure record recursive rem repeat return runs select self sender set signature system template testcase to type union value valueof var variant while with xor xor4b"),builtin:a("bit2hex bit2int bit2oct bit2str char2int char2oct encvalue decomp decvalue float2int float2str hex2bit hex2int hex2oct hex2str int2bit int2char int2float int2hex int2oct int2str int2unichar isbound ischosen ispresent isvalue lengthof log2str oct2bit oct2char oct2hex oct2int oct2str regexp replace rnd sizeof str2bit str2float str2hex str2int str2oct substr unichar2int unichar2char enum2int"),types:a("anytype bitstring boolean char charstring default float hexstring integer objid octetstring universal verdicttype timer"),timerOps:a("read running start stop timeout"),portOps:a("call catch check clear getcall getreply halt raise receive reply send trigger"),configOps:a("create connect disconnect done kill killed map unmap"),verdictOps:a("getverdict setverdict"),sutOps:a("action"),functionOps:a("apply derefers refers"),verdictConsts:a("error fail inconc none pass"),booleanConsts:a("true false"),otherConsts:a("null NULL omit"),visibilityModifiers:a("private public friend"),templateMatch:a("complement ifpresent subset superset permutation"),multiLineStrings:!0};var h=[];function u(t){if(t)for(var e in t)t.hasOwnProperty(e)&&h.push(e)}u(i.keywords),u(i.builtin),u(i.timerOps),u(i.portOps);var s,k=i.keywords||{},O=i.builtin||{},E=i.timerOps||{},w=i.portOps||{},I=i.configOps||{},z=i.verdictOps||{},L=i.sutOps||{},C=i.functionOps||{},M=i.verdictConsts||{},S=i.booleanConsts||{},W=i.otherConsts||{},T=i.types||{},N=i.visibilityModifiers||{},$=i.templateMatch||{},j=i.multiLineStrings,y=/[+\-*&@=<>!\/]/;function D(t,e){var n,r=t.next();if(r=='"'||r=="'")return e.tokenize=(n=r,function(f,x){for(var d,p=!1,b=!1;(d=f.next())!=null;){if(d==n&&!p){var l=f.peek();l&&((l=l.toLowerCase())!="b"&&l!="h"&&l!="o"||f.next()),b=!0;break}p=!p&&d=="\\"}return(b||!p&&!j)&&(x.tokenize=null),"string"}),e.tokenize(t,e);if(/[\[\]{}\(\),;\\:\?\.]/.test(r))return s=r,"punctuation";if(r=="#")return t.skipToEnd(),"atom";if(r=="%")return t.eatWhile(/\b/),"atom";if(/\d/.test(r))return t.eatWhile(/[\w\.]/),"number";if(r=="/"){if(t.eat("*"))return e.tokenize=v,v(t,e);if(t.eat("/"))return t.skipToEnd(),"comment"}if(y.test(r))return r=="@"&&(t.match("try")||t.match("catch")||t.match("lazy"))?"keyword":(t.eatWhile(y),"operator");t.eatWhile(/[\w\$_\xa1-\uffff]/);var o=t.current();return k.propertyIsEnumerable(o)?"keyword":O.propertyIsEnumerable(o)?"builtin":E.propertyIsEnumerable(o)||I.propertyIsEnumerable(o)||z.propertyIsEnumerable(o)||w.propertyIsEnumerable(o)||L.propertyIsEnumerable(o)||C.propertyIsEnumerable(o)?"def":M.propertyIsEnumerable(o)||S.propertyIsEnumerable(o)||W.propertyIsEnumerable(o)?"string":T.propertyIsEnumerable(o)?"typeName.standard":N.propertyIsEnumerable(o)?"modifier":$.propertyIsEnumerable(o)?"atom":"variable"}function v(t,e){for(var n,r=!1;n=t.next();){if(n=="/"&&r){e.tokenize=null;break}r=n=="*"}return"comment"}function g(t,e,n,r,o){this.indented=t,this.column=e,this.type=n,this.align=r,this.prev=o}function m(t,e,n){var r=t.indented;return t.context&&t.context.type=="statement"&&(r=t.context.indented),t.context=new g(r,e,n,null,t.context)}function c(t){var e=t.context.type;return e!=")"&&e!="]"&&e!="}"||(t.indented=t.context.indented),t.context=t.context.prev}const P={startState:function(){return{tokenize:null,context:new g(0,0,"top",!1),indented:0,startOfLine:!0}},token:function(t,e){var n=e.context;if(t.sol()&&(n.align==null&&(n.align=!1),e.indented=t.indentation(),e.startOfLine=!0),t.eatSpace())return null;s=null;var r=(e.tokenize||D)(t,e);if(r=="comment")return r;if(n.align==null&&(n.align=!0),s!=";"&&s!=":"&&s!=","||n.type!="statement")if(s=="{")m(e,t.column(),"}");else if(s=="[")m(e,t.column(),"]");else if(s=="(")m(e,t.column(),")");else if(s=="}"){for(;n.type=="statement";)n=c(e);for(n.type=="}"&&(n=c(e));n.type=="statement";)n=c(e)}else s==n.type?c(e):((n.type=="}"||n.type=="top")&&s!=";"||n.type=="statement"&&s=="newstatement")&&m(e,t.column(),"statement");else c(e);return e.startOfLine=!1,r},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}},autocomplete:h}};export{P as ttcn};