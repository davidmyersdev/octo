function s(e){for(var r={},t=e.split(" "),a=0;a<t.length;++a)r[t[a]]=!0;return r}var m=s("Tcl safe after append array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd close concat continue dde eof encoding error eval exec exit expr fblocked fconfigure fcopy file fileevent filename filename flush for foreach format gets glob global history http if incr info interp join lappend lindex linsert list llength load lrange lreplace lsearch lset lsort memory msgcat namespace open package parray pid pkg::create pkg_mkIndex proc puts pwd re_syntax read regex regexp registry regsub rename resource return scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_wordBreakAfter tcl_startOfPreviousWord tcl_wordBreakBefore tcltest tclvars tell time trace unknown unset update uplevel upvar variable vwait"),p=s("if elseif else and not or eq ne in ni for foreach while switch"),d=/[+\-*&%=<>!?^\/\|]/;function f(e,r,t){return r.tokenize=t,t(e,r)}function o(e,r){var t=r.beforeParams;r.beforeParams=!1;var a,n=e.next();if(n!='"'&&n!="'"||!r.inParams){if(/[\[\]{}\(\),;\.]/.test(n))return n=="("&&t?r.inParams=!0:n==")"&&(r.inParams=!1),null;if(/\d/.test(n))return e.eatWhile(/[\w\.]/),"number";if(n=="#")return e.eat("*")?f(e,r,g):n=="#"&&e.match(/ *\[ *\[/)?f(e,r,h):(e.skipToEnd(),"comment");if(n=='"')return e.skipTo(/"/),"comment";if(n=="$")return e.eatWhile(/[$_a-z0-9A-Z\.{:]/),e.eatWhile(/}/),r.beforeParams=!0,"builtin";if(d.test(n))return e.eatWhile(d),"comment";e.eatWhile(/[\w\$_{}\xa1-\uffff]/);var c=e.current().toLowerCase();return m&&m.propertyIsEnumerable(c)?"keyword":p&&p.propertyIsEnumerable(c)?(r.beforeParams=!0,"keyword"):null}return f(e,r,(a=n,function(k,b){for(var i,l=!1,u=!1;(i=k.next())!=null;){if(i==a&&!l){u=!0;break}l=!l&&i=="\\"}return u&&(b.tokenize=o),"string"}))}function g(e,r){for(var t,a=!1;t=e.next();){if(t=="#"&&a){r.tokenize=o;break}a=t=="*"}return"comment"}function h(e,r){for(var t,a=0;t=e.next();){if(t=="#"&&a==2){r.tokenize=o;break}t=="]"?a++:t!=" "&&(a=0)}return"meta"}const x={startState:function(){return{tokenize:o,beforeParams:!1,inParams:!1}},token:function(e,r){return e.eatSpace()?null:r.tokenize(e,r)},languageData:{commentTokens:{line:"#"}}};export{x as tcl};