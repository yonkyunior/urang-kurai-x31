
// syntax highlight.js

var hljs=new function(){function l(o){return o.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function b(p){for(var o=p.firstChild;o;o=o.nextSibling){if(o.nodeName=="CODE"){return o}if(!(o.nodeType==3&&o.nodeValue.match(/\s+/))){break}}}function h(p,o){return Array.prototype.map.call(p.childNodes,function(q){if(q.nodeType==3){return o?q.nodeValue.replace(/\n/g,""):q.nodeValue}if(q.nodeName=="BR"){return"\n"}return h(q,o)}).join("")}function a(q){var p=(q.className+" "+q.parentNode.className).split(/\s+/);p=p.map(function(r){return r.replace(/^language-/,"")});for(var o=0;o<p.length;o++){if(e[p[o]]||p[o]=="no-highlight"){return p[o]}}}function c(q){var o=[];(function p(r,s){for(var t=r.firstChild;t;t=t.nextSibling){if(t.nodeType==3){s+=t.nodeValue.length}else{if(t.nodeName=="BR"){s+=1}else{if(t.nodeType==1){o.push({event:"start",offset:s,node:t});s=p(t,s);o.push({event:"stop",offset:s,node:t})}}}}return s})(q,0);return o}function j(x,v,w){var p=0;var y="";var r=[];function t(){if(x.length&&v.length){if(x[0].offset!=v[0].offset){return(x[0].offset<v[0].offset)?x:v}else{return v[0].event=="start"?x:v}}else{return x.length?x:v}}function s(A){function z(B){return" "+B.nodeName+'="'+l(B.value)+'"'}return"<"+A.nodeName+Array.prototype.map.call(A.attributes,z).join("")+">"}while(x.length||v.length){var u=t().splice(0,1)[0];y+=l(w.substr(p,u.offset-p));p=u.offset;if(u.event=="start"){y+=s(u.node);r.push(u.node)}else{if(u.event=="stop"){var o,q=r.length;do{q--;o=r[q];y+=("</"+o.nodeName.toLowerCase()+">")}while(o!=u.node);r.splice(q,1);while(q<r.length){y+=s(r[q]);q++}}}}return y+l(w.substr(p))}function f(q){function o(s,r){return RegExp(s,"m"+(q.cI?"i":"")+(r?"g":""))}function p(y,w){if(y.compiled){return}y.compiled=true;var s=[];if(y.k){var r={};function z(A,t){t.split(" ").forEach(function(B){var C=B.split("|");r[C[0]]=[A,C[1]?Number(C[1]):1];s.push(C[0])})}y.lR=o(y.l||hljs.IR,true);if(typeof y.k=="string"){z("keyword",y.k)}else{for(var x in y.k){if(!y.k.hasOwnProperty(x)){continue}z(x,y.k[x])}}y.k=r}if(w){if(y.bWK){y.b="\\b("+s.join("|")+")\\s"}y.bR=o(y.b?y.b:"\\B|\\b");if(!y.e&&!y.eW){y.e="\\B|\\b"}if(y.e){y.eR=o(y.e)}y.tE=y.e||"";if(y.eW&&w.tE){y.tE+=(y.e?"|":"")+w.tE}}if(y.i){y.iR=o(y.i)}if(y.r===undefined){y.r=1}if(!y.c){y.c=[]}for(var v=0;v<y.c.length;v++){if(y.c[v]=="self"){y.c[v]=y}p(y.c[v],y)}if(y.starts){p(y.starts,w)}var u=[];for(var v=0;v<y.c.length;v++){u.push(y.c[v].b)}if(y.tE){u.push(y.tE)}if(y.i){u.push(y.i)}y.t=u.length?o(u.join("|"),true):{exec:function(t){return null}}}p(q)}function d(D,E){function o(r,M){for(var L=0;L<M.c.length;L++){var K=M.c[L].bR.exec(r);if(K&&K.index==0){return M.c[L]}}}function s(K,r){if(K.e&&K.eR.test(r)){return K}if(K.eW){return s(K.parent,r)}}function t(r,K){return K.i&&K.iR.test(r)}function y(L,r){var K=F.cI?r[0].toLowerCase():r[0];return L.k.hasOwnProperty(K)&&L.k[K]}function G(){var K=l(w);if(!A.k){return K}var r="";var N=0;A.lR.lastIndex=0;var L=A.lR.exec(K);while(L){r+=K.substr(N,L.index-N);var M=y(A,L);if(M){v+=M[1];r+='<span class="'+M[0]+'">'+L[0]+"</span>"}else{r+=L[0]}N=A.lR.lastIndex;L=A.lR.exec(K)}return r+K.substr(N)}function z(){if(A.sL&&!e[A.sL]){return l(w)}var r=A.sL?d(A.sL,w):g(w);if(A.r>0){v+=r.keyword_count;B+=r.r}return'<span class="'+r.language+'">'+r.value+"</span>"}function J(){return A.sL!==undefined?z():G()}function I(L,r){var K=L.cN?'<span class="'+L.cN+'">':"";if(L.rB){x+=K;w=""}else{if(L.eB){x+=l(r)+K;w=""}else{x+=K;w=r}}A=Object.create(L,{parent:{value:A}});B+=L.r}function C(K,r){w+=K;if(r===undefined){x+=J();return 0}var L=o(r,A);if(L){x+=J();I(L,r);return L.rB?0:r.length}var M=s(A,r);if(M){if(!(M.rE||M.eE)){w+=r}x+=J();do{if(A.cN){x+="</span>"}A=A.parent}while(A!=M.parent);if(M.eE){x+=l(r)}w="";if(M.starts){I(M.starts,"")}return M.rE?0:r.length}if(t(r,A)){throw"Illegal"}w+=r;return r.length||1}var F=e[D];f(F);var A=F;var w="";var B=0;var v=0;var x="";try{var u,q,p=0;while(true){A.t.lastIndex=p;u=A.t.exec(E);if(!u){break}q=C(E.substr(p,u.index-p),u[0]);p=u.index+q}C(E.substr(p));return{r:B,keyword_count:v,value:x,language:D}}catch(H){if(H=="Illegal"){return{r:0,keyword_count:0,value:l(E)}}else{throw H}}}function g(s){var o={keyword_count:0,r:0,value:l(s)};var q=o;for(var p in e){if(!e.hasOwnProperty(p)){continue}var r=d(p,s);r.language=p;if(r.keyword_count+r.r>q.keyword_count+q.r){q=r}if(r.keyword_count+r.r>o.keyword_count+o.r){q=o;o=r}}if(q.language){o.second_best=q}return o}function i(q,p,o){if(p){q=q.replace(/^((<[^>]+>|\t)+)/gm,function(r,v,u,t){return v.replace(/\t/g,p)})}if(o){q=q.replace(/\n/g,"<br>")}return q}function m(r,u,p){var v=h(r,p);var t=a(r);if(t=="no-highlight"){return}var w=t?d(t,v):g(v);t=w.language;var o=c(r);if(o.length){var q=document.createElement("pre");q.innerHTML=w.value;w.value=j(o,c(q),v)}w.value=i(w.value,u,p);var s=r.className;if(!s.match("(\\s|^)(language-)?"+t+"(\\s|$)")){s=s?(s+" "+t):t}r.innerHTML=w.value;r.className=s;r.result={language:t,kw:w.keyword_count,re:w.r};if(w.second_best){r.second_best={language:w.second_best.language,kw:w.second_best.keyword_count,re:w.second_best.r}}}function n(){if(n.called){return}n.called=true;Array.prototype.map.call(document.getElementsByTagName("pre"),b).filter(Boolean).forEach(function(o){m(o,hljs.tabReplace)})}function k(){window.addEventListener("DOMContentLoaded",n,false);window.addEventListener("load",n,false)}var e={};this.LANGUAGES=e;this.highlight=d;this.highlightAuto=g;this.fixMarkup=i;this.highlightBlock=m;this.initHighlighting=n;this.initHighlightingOnLoad=k;this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";this.BNR="\\b(0b[01]+)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.BE={b:"\\\\[\\s\\S]",r:0};this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE],r:0};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE],r:0};this.CLCM={cN:"comment",b:"//",e:"$"};this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"};this.HCM={cN:"comment",b:"#",e:"$"};this.NM={cN:"number",b:this.NR,r:0};this.CNM={cN:"number",b:this.CNR,r:0};this.BNM={cN:"number",b:this.BNR,r:0};this.inherit=function(q,r){var o={};for(var p in q){o[p]=q[p]}if(r){for(var p in r){o[p]=r[p]}}return o}}();hljs.LANGUAGES.bash=function(a){var g="true false";var e="if then else elif fi for break continue while in do done echo exit return set declare";var c={cN:"variable",b:"\\$[a-zA-Z0-9_#]+"};var b={cN:"variable",b:"\\${([^}]|\\\\})+}"};var h={cN:"string",b:'"',e:'"',i:"\\n",c:[a.BE,c,b],r:0};var d={cN:"string",b:"'",e:"'",c:[{b:"''"}],r:0};var f={cN:"test_condition",b:"",e:"",c:[h,d,c,b],k:{literal:g},r:0};return{k:{keyword:e,literal:g},c:[{cN:"shebang",b:"(#!\\/bin\\/bash)|(#!\\/bin\\/sh)",r:10},c,b,a.HCM,h,d,a.inherit(f,{b:"\\[ ",e:" \\]",r:0}),a.inherit(f,{b:"\\[\\[ ",e:" \\]\\]"})]}}(hljs);hljs.LANGUAGES.cs=function(a){return{k:"abstract as base bool break byte case catch char checked class const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long namespace new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while ascending descending from get group into join let orderby partial select set value var where yield",c:[{cN:"comment",b:"///",e:"$",rB:true,c:[{cN:"xmlDocTag",b:"///|<!--|-->"},{cN:"xmlDocTag",b:"</?",e:">"}]},a.CLCM,a.CBLCLM,{cN:"preprocessor",b:"#",e:"$",k:"if else elif endif define undef warning error line region endregion pragma checksum"},{cN:"string",b:'@"',e:'"',c:[{b:'""'}]},a.ASM,a.QSM,a.CNM]}}(hljs);hljs.LANGUAGES.ruby=function(e){var a="[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?";var j="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?";var g={keyword:"and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include"};var c={cN:"yardoctag",b:"@[A-Za-z]+"};var k=[{cN:"comment",b:"#",e:"$",c:[c]},{cN:"comment",b:"^\\=begin",e:"^\\=end",c:[c],r:10},{cN:"comment",b:"^__END__",e:"\\n$"}];var d={cN:"subst",b:"#\\{",e:"}",l:a,k:g};var i=[e.BE,d];var b=[{cN:"string",b:"'",e:"'",c:i,r:0},{cN:"string",b:'"',e:'"',c:i,r:0},{cN:"string",b:"%[qw]?\\(",e:"\\)",c:i},{cN:"string",b:"%[qw]?\\[",e:"\\]",c:i},{cN:"string",b:"%[qw]?{",e:"}",c:i},{cN:"string",b:"%[qw]?<",e:">",c:i,r:10},{cN:"string",b:"%[qw]?/",e:"/",c:i,r:10},{cN:"string",b:"%[qw]?%",e:"%",c:i,r:10},{cN:"string",b:"%[qw]?-",e:"-",c:i,r:10},{cN:"string",b:"%[qw]?\\|",e:"\\|",c:i,r:10}];var h={cN:"function",bWK:true,e:" |$|;",k:"def",c:[{cN:"title",b:j,l:a,k:g},{cN:"params",b:"\\(",e:"\\)",l:a,k:g}].concat(k)};var f=k.concat(b.concat([{cN:"class",bWK:true,e:"$|;",k:"class module",c:[{cN:"title",b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?",r:0},{cN:"inheritance",b:"<\\s*",c:[{cN:"parent",b:"("+e.IR+"::)?"+e.IR}]}].concat(k)},h,{cN:"constant",b:"(::)?(\\b[A-Z]\\w*(::)?)+",r:0},{cN:"symbol",b:":",c:b.concat([{b:j}]),r:0},{cN:"symbol",b:a+":",r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"number",b:"\\?\\w"},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{b:"("+e.RSR+")\\s*",c:k.concat([{cN:"regexp",b:"/",e:"/[a-z]*",i:"\\n",c:[e.BE,d]}]),r:0}]));d.c=f;h.c[1].c=f;return{l:a,k:g,c:f}}(hljs);hljs.LANGUAGES.diff=function(a){return{c:[{cN:"chunk",b:"^\\@\\@ +\\-\\d+,\\d+ +\\+\\d+,\\d+ +\\@\\@$",r:10},{cN:"chunk",b:"^\\*\\*\\* +\\d+,\\d+ +\\*\\*\\*\\*$",r:10},{cN:"chunk",b:"^\\-\\-\\- +\\d+,\\d+ +\\-\\-\\-\\-$",r:10},{cN:"header",b:"Index: ",e:"$"},{cN:"header",b:"=====",e:"=====$"},{cN:"header",b:"^\\-\\-\\-",e:"$"},{cN:"header",b:"^\\*{3} ",e:"$"},{cN:"header",b:"^\\+\\+\\+",e:"$"},{cN:"header",b:"\\*{5}",e:"\\*{5}$"},{cN:"addition",b:"^\\+",e:"$"},{cN:"deletion",b:"^\\-",e:"$"},{cN:"change",b:"^\\!",e:"$"}]}}(hljs);hljs.LANGUAGES.javascript=function(a){return{k:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const",literal:"true false null undefined NaN Infinity"},c:[a.ASM,a.QSM,a.CLCM,a.CBLCLM,a.CNM,{b:"("+a.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[a.CLCM,a.CBLCLM,{cN:"regexp",b:"/",e:"/[gim]*",i:"\\n",c:[{b:"\\\\/"}]},{b:"<",e:">;",sL:"xml"}],r:0},{cN:"function",bWK:true,e:"{",k:"function",c:[{cN:"title",b:"[A-Za-z$_][0-9A-Za-z$_]*"},{cN:"params",b:"\\(",e:"\\)",c:[a.CLCM,a.CBLCLM],i:"[\"'\\(]"}],i:"\\[|%"}]}}(hljs);hljs.LANGUAGES.css=function(a){var b={cN:"function",b:a.IR+"\\(",e:"\\)",c:[a.NM,a.ASM,a.QSM]};return{cI:true,i:"[=/|']",c:[a.CBLCLM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",eE:true,k:"import page media charset",c:[b,a.ASM,a.QSM,a.NM]},{cN:"tag",b:a.IR,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[a.CBLCLM,{cN:"rule",b:"[^\\s]",rB:true,e:";",eW:true,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:true,i:"[^\\s]",starts:{cN:"value",eW:true,eE:true,c:[b,a.NM,a.QSM,a.ASM,a.CBLCLM,{cN:"hexcolor",b:"\\#[0-9A-F]+"},{cN:"important",b:"!important"}]}}]}]}]}}(hljs);hljs.LANGUAGES.xml=function(a){var c="[A-Za-z0-9\\._:-]+";var b={eW:true,c:[{cN:"attribute",b:c,r:0},{b:'="',rB:true,e:'"',c:[{cN:"value",b:'"',eW:true}]},{b:"='",rB:true,e:"'",c:[{cN:"value",b:"'",eW:true}]},{b:"=",c:[{cN:"value",b:"[^\\s/>]+"}]}]};return{cI:true,c:[{cN:"pi",b:"<\\?",e:"\\?>",r:10},{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[b],starts:{e:"</style>",rE:true,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[b],starts:{e:"<\/script>",rE:true,sL:"javascript"}},{b:"<%",e:"%>",sL:"vbscript"},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:"[^ />]+"},b]}]}}(hljs);hljs.LANGUAGES.http=function(a){return{i:"\\S",c:[{cN:"status",b:"^HTTP/[0-9\\.]+",e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{cN:"request",b:"^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",rB:true,e:"$",c:[{cN:"string",b:" ",e:" ",eB:true,eE:true}]},{cN:"attribute",b:"^\\w",e:": ",eE:true,i:"\\n|\\s|=",starts:{cN:"string",e:"$"}},{b:"\\n\\n",starts:{sL:"",eW:true}}]}}(hljs);hljs.LANGUAGES.java=function(a){return{k:"false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws",c:[{cN:"javadoc",b:"/\\*\\*",e:"\\*/",c:[{cN:"javadoctag",b:"@[A-Za-z]+"}],r:10},a.CLCM,a.CBLCLM,a.ASM,a.QSM,{cN:"class",bWK:true,e:"{",k:"class interface",i:":",c:[{bWK:true,k:"extends implements",r:10},{cN:"title",b:a.UIR}]},a.CNM,{cN:"annotation",b:"@[A-Za-z]+"}]}}(hljs);hljs.LANGUAGES.php=function(a){var e={cN:"variable",b:"\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*"};var b=[a.inherit(a.ASM,{i:null}),a.inherit(a.QSM,{i:null}),{cN:"string",b:'b"',e:'"',c:[a.BE]},{cN:"string",b:"b'",e:"'",c:[a.BE]}];var c=[a.BNM,a.CNM];var d={cN:"title",b:a.UIR};return{cI:true,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return implements parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception php_user_filter default die require __FUNCTION__ enddeclare final try this switch continue endfor endif declare unset true false namespace trait goto instanceof insteadof __DIR__ __NAMESPACE__ __halt_compiler",c:[a.CLCM,a.HCM,{cN:"comment",b:"/\\*",e:"\\*/",c:[{cN:"phpdoc",b:"\\s@[A-Za-z]+"}]},{cN:"comment",eB:true,b:"__halt_compiler.+?;",eW:true},{cN:"string",b:"<<<['\"]?\\w+['\"]?$",e:"^\\w+;",c:[a.BE]},{cN:"preprocessor",b:"<\\?php",r:10},{cN:"preprocessor",b:"\\?>"},e,{cN:"function",bWK:true,e:"{",k:"function",i:"\\$|\\[|%",c:[d,{cN:"params",b:"\\(",e:"\\)",c:["self",e,a.CBLCLM].concat(b).concat(c)}]},{cN:"class",bWK:true,e:"{",k:"class",i:"[:\\(\\$]",c:[{bWK:true,eW:true,k:"extends",c:[d]},d]},{b:"=>"}].concat(b).concat(c)}}(hljs);hljs.LANGUAGES.python=function(a){var f={cN:"prompt",b:"^(>>>|\\.\\.\\.) "};var c=[{cN:"string",b:"(u|b)?r?'''",e:"'''",c:[f],r:10},{cN:"string",b:'(u|b)?r?"""',e:'"""',c:[f],r:10},{cN:"string",b:"(u|r|ur)'",e:"'",c:[a.BE],r:10},{cN:"string",b:'(u|r|ur)"',e:'"',c:[a.BE],r:10},{cN:"string",b:"(b|br)'",e:"'",c:[a.BE]},{cN:"string",b:'(b|br)"',e:'"',c:[a.BE]}].concat([a.ASM,a.QSM]);var e={cN:"title",b:a.UIR};var d={cN:"params",b:"\\(",e:"\\)",c:["self",a.CNM,f].concat(c)};var b={bWK:true,e:":",i:"[${=;\\n]",c:[e,d],r:10};return{k:{keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10",built_in:"None True False Ellipsis NotImplemented"},i:"(</|->|\\?)",c:c.concat([f,a.HCM,a.inherit(b,{cN:"function",k:"def"}),a.inherit(b,{cN:"class",k:"class"}),a.CNM,{cN:"decorator",b:"@",e:"$"},{b:"\\b(print|exec)\\("}])}}(hljs);hljs.LANGUAGES.sql=function(a){return{cI:true,c:[{cN:"operator",b:"(begin|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma|grant)\\b(?!:)",e:";",eW:true,k:{keyword:"all partial global month current_timestamp using go revoke smallint indicator end-exec disconnect zone with character assertion to add current_user usage input local alter match collate real then rollback get read timestamp session_user not integer bit unique day minute desc insert execute like ilike|2 level decimal drop continue isolation found where constraints domain right national some module transaction relative second connect escape close system_user for deferred section cast current sqlstate allocate intersect deallocate numeric public preserve full goto initially asc no key output collation group by union session both last language constraint column of space foreign deferrable prior connection unknown action commit view or first into float year primary cascaded except restrict set references names table outer open select size are rows from prepare distinct leading create only next inner authorization schema corresponding option declare precision immediate else timezone_minute external varying translation true case exception join hour default double scroll value cursor descriptor values dec fetch procedure delete and false int is describe char as at in varchar null trailing any absolute current_time end grant privileges when cross check write current_date pad begin temporary exec time update catalog user sql date on identity timezone_hour natural whenever interval work order cascade diagnostics nchar having left call do handler load replace truncate start lock show pragma exists number",aggregate:"count sum min max avg"},c:[{cN:"string",b:"'",e:"'",c:[a.BE,{b:"''"}],r:0},{cN:"string",b:'"',e:'"',c:[a.BE,{b:'""'}],r:0},{cN:"string",b:"`",e:"`",c:[a.BE]},a.CNM]},a.CBLCLM,{cN:"comment",b:"--",e:"$"}]}}(hljs);hljs.LANGUAGES.ini=function(a){return{cI:true,i:"[^\\s]",c:[{cN:"comment",b:";",e:"$"},{cN:"title",b:"^\\[",e:"\\]"},{cN:"setting",b:"^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",e:"$",c:[{cN:"value",eW:true,k:"on off true false yes no",c:[a.QSM,a.NM]}]}]}}(hljs);hljs.LANGUAGES.perl=function(e){var a="getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when";var d={cN:"subst",b:"[$@]\\{",e:"\\}",k:a,r:10};var b={cN:"variable",b:"\\$\\d"};var i={cN:"variable",b:"[\\$\\%\\@\\*](\\^\\w\\b|#\\w+(\\:\\:\\w+)*|[^\\s\\w{]|{\\w+}|\\w+(\\:\\:\\w*)*)"};var f=[e.BE,d,b,i];var h={b:"->",c:[{b:e.IR},{b:"{",e:"}"}]};var g={cN:"comment",b:"^(__END__|__DATA__)",e:"\\n$",r:5};var c=[b,i,e.HCM,g,{cN:"comment",b:"^\\=\\w",e:"\\=cut",eW:true},h,{cN:"string",b:"q[qwxr]?\\s*\\(",e:"\\)",c:f,r:5},{cN:"string",b:"q[qwxr]?\\s*\\[",e:"\\]",c:f,r:5},{cN:"string",b:"q[qwxr]?\\s*\\{",e:"\\}",c:f,r:5},{cN:"string",b:"q[qwxr]?\\s*\\|",e:"\\|",c:f,r:5},{cN:"string",b:"q[qwxr]?\\s*\\<",e:"\\>",c:f,r:5},{cN:"string",b:"qw\\s+q",e:"q",c:f,r:5},{cN:"string",b:"'",e:"'",c:[e.BE],r:0},{cN:"string",b:'"',e:'"',c:f,r:0},{cN:"string",b:"`",e:"`",c:[e.BE]},{cN:"string",b:"{\\w+}",r:0},{cN:"string",b:"-?\\w+\\s*\\=\\>",r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"("+e.RSR+"|\\b(split|return|print|reverse|grep)\\b)\\s*",k:"split return print reverse grep",r:0,c:[e.HCM,g,{cN:"regexp",b:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",r:10},{cN:"regexp",b:"(m|qr)?/",e:"/[a-z]*",c:[e.BE],r:0}]},{cN:"sub",bWK:true,e:"(\\s*\\(.*?\\))?[;{]",k:"sub",r:5},{cN:"operator",b:"-\\w\\b",r:0}];d.c=c;h.c[1].c=c;return{k:a,c:c}}(hljs);hljs.LANGUAGES.json=function(a){var e={literal:"true false null"};var d=[a.QSM,a.CNM];var c={cN:"value",e:",",eW:true,eE:true,c:d,k:e};var b={b:"{",e:"}",c:[{cN:"attribute",b:'\\s*"',e:'"\\s*:\\s*',eB:true,eE:true,c:[a.BE],i:"\\n",starts:c}],i:"\\S"};var f={b:"\\[",e:"\\]",c:[a.inherit(c,{cN:null})],i:"\\S"};d.splice(d.length,0,b,f);return{c:d,k:e,i:"\\S"}}(hljs);hljs.LANGUAGES.cpp=function(a){var b={keyword:"false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long throw volatile static protected bool template mutable if public friend do return goto auto void enum else break new extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex",built_in:"std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr"};return{k:b,i:"</",c:[a.CLCM,a.CBLCLM,a.QSM,{cN:"string",b:"'\\\\?.",e:"'",i:"."},{cN:"number",b:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},a.CNM,{cN:"preprocessor",b:"#",e:"$"},{cN:"stl_container",b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",e:">",k:b,r:10,c:["self"]}]}}(hljs);

// http://img.readerspark.com/demos/sticky/scrolltofixed.htm
(function(e){e.isScrollToFixed=function(t){return e(t).data("ScrollToFixed")!==undefined};e.ScrollToFixed=function(t,n){function m(){s.trigger("preUnfixed.ScrollToFixed");x();s.trigger("unfixed.ScrollToFixed");h=-1;f=s.offset().top;l=s.offset().left;if(r.options.offsets){l+=s.offset().left-s.position().left}if(c==-1){c=l}o=s.css("position");i=true;if(r.options.bottom!=-1){s.trigger("preFixed.ScrollToFixed");E();s.trigger("fixed.ScrollToFixed")}}function g(){var e=r.options.limit;if(!e)return 0;if(typeof e==="function"){return e.apply(s)}return e}function y(){return o==="fixed"}function b(){return o==="absolute"}function w(){return!(y()||b())}function E(){if(!y()){p.css({display:s.css("display"),width:s.outerWidth(true),height:s.outerHeight(true),"float":s.css("float")});cssOptions={position:"fixed",top:r.options.bottom==-1?N():"",bottom:r.options.bottom==-1?"":r.options.bottom,"margin-left":"0px"};if(!r.options.dontSetWidth){cssOptions["width"]=s.width()}s.css(cssOptions);s.addClass("scroll-to-fixed-fixed");if(r.options.className){s.addClass(r.options.className)}o="fixed"}}function S(){var e=g();var t=l;if(r.options.removeOffsets){t=0;e=e-f}cssOptions={position:"absolute",top:e,left:t,"margin-left":"0px",bottom:""};if(!r.options.dontSetWidth){cssOptions["width"]=s.width()}s.css(cssOptions);o="absolute"}function x(){if(!w()){h=-1;p.css("display","none");s.css({width:"",position:u,left:"",top:a.top,"margin-left":""});s.removeClass("scroll-to-fixed-fixed");if(r.options.className){s.removeClass(r.options.className)}o=null}}function T(e){if(e!=h){s.css("left",l-e);h=e}}function N(){var e=r.options.marginTop;if(!e)return 0;if(typeof e==="function"){return e.apply(s)}return e}function C(){if(!e.isScrollToFixed(s))return;var t=i;if(!i){m()}var n=e(window).scrollLeft();var o=e(window).scrollTop();var a=g();if(r.options.minWidth&&e(window).width()<r.options.minWidth){if(!w()||!t){L();s.trigger("preUnfixed.ScrollToFixed");x();s.trigger("unfixed.ScrollToFixed")}}else if(r.options.bottom==-1){if(a>0&&o>=a-N()){if(!b()||!t){L();s.trigger("preAbsolute.ScrollToFixed");S();s.trigger("unfixed.ScrollToFixed")}}else if(o>=f-N()){if(!y()||!t){L();s.trigger("preFixed.ScrollToFixed");E();h=-1;s.trigger("fixed.ScrollToFixed")}T(n)}else{if(!w()||!t){L();s.trigger("preUnfixed.ScrollToFixed");x();s.trigger("unfixed.ScrollToFixed")}}}else{if(a>0){if(o+e(window).height()-s.outerHeight(true)>=a-(N()||-k())){if(y()){L();s.trigger("preUnfixed.ScrollToFixed");if(u==="absolute"){S()}else{x()}s.trigger("unfixed.ScrollToFixed")}}else{if(!y()){L();s.trigger("preFixed.ScrollToFixed");E()}T(n);s.trigger("fixed.ScrollToFixed")}}else{T(n)}}}function k(){if(!r.options.bottom)return 0;return r.options.bottom}function L(){var e=s.css("position");if(e=="absolute"){s.trigger("postAbsolute.ScrollToFixed")}else if(e=="fixed"){s.trigger("postFixed.ScrollToFixed")}else{s.trigger("postUnfixed.ScrollToFixed")}}var r=this;r.$el=e(t);r.el=t;r.$el.data("ScrollToFixed",r);var i=false;var s=r.$el;var o;var u;var a;var f=0;var l=0;var c=-1;var h=-1;var p=null;var d;var v;var A=function(e){if(s.is(":visible")){i=false;C()}};var O=function(e){C()};var M=function(){var e=document.body;if(document.createElement&&e&&e.appendChild&&e.removeChild){var t=document.createElement("div");if(!t.getBoundingClientRect)return null;t.innerHTML="x";t.style.cssText="position:fixed;top:100px;";e.appendChild(t);var n=e.style.height,r=e.scrollTop;e.style.height="3000px";e.scrollTop=500;var i=t.getBoundingClientRect().top;e.style.height=n;var s=i===100;e.removeChild(t);e.scrollTop=r;return s}return null};var _=function(e){e=e||window.event;if(e.preventDefault){e.preventDefault()}e.returnValue=false};r.init=function(){r.options=e.extend({},e.ScrollToFixed.defaultOptions,n);r.$el.css("z-index",r.options.zIndex);p=e("<div />");o=s.css("position");u=s.css("position");a=e.extend({},s.offset());if(w())r.$el.after(p);e(window).bind("resize.ScrollToFixed",A);e(window).bind("scroll.ScrollToFixed",O);if(r.options.preFixed){s.bind("preFixed.ScrollToFixed",r.options.preFixed)}if(r.options.postFixed){s.bind("postFixed.ScrollToFixed",r.options.postFixed)}if(r.options.preUnfixed){s.bind("preUnfixed.ScrollToFixed",r.options.preUnfixed)}if(r.options.postUnfixed){s.bind("postUnfixed.ScrollToFixed",r.options.postUnfixed)}if(r.options.preAbsolute){s.bind("preAbsolute.ScrollToFixed",r.options.preAbsolute)}if(r.options.postAbsolute){s.bind("postAbsolute.ScrollToFixed",r.options.postAbsolute)}if(r.options.fixed){s.bind("fixed.ScrollToFixed",r.options.fixed)}if(r.options.unfixed){s.bind("unfixed.ScrollToFixed",r.options.unfixed)}if(r.options.spacerClass){p.addClass(r.options.spacerClass)}s.bind("resize.ScrollToFixed",function(){p.height(s.height())});s.bind("scroll.ScrollToFixed",function(){s.trigger("preUnfixed.ScrollToFixed");x();s.trigger("unfixed.ScrollToFixed");C()});s.bind("detach.ScrollToFixed",function(t){_(t);s.trigger("preUnfixed.ScrollToFixed");x();s.trigger("unfixed.ScrollToFixed");e(window).unbind("resize.ScrollToFixed",A);e(window).unbind("scroll.ScrollToFixed",O);s.unbind(".ScrollToFixed");r.$el.removeData("ScrollToFixed")});A()};r.init()};e.ScrollToFixed.defaultOptions={marginTop:0,limit:0,bottom:-1,zIndex:1e3};e.fn.scrollToFixed=function(t){return this.each(function(){new e.ScrollToFixed(this,t)})}})(jQuery);







var DOM=['18 c=["\\16\\k\\L\\j\\f\\15\\k\\13\\k\\C\\j\\10\\S\\k\\C\\k\\q\\f\\R\\q\\j\\f\\P\\j\\C\\k\\j\\f\\K\\k\\q\\X\\11\\q\\j\\M\\W\\Y\\L\\f\\b\\f\\t\\V\\q\\F\\U\\D\\D\\g\\Q\\n\\f\\H\\f\\o\\D\\q\\T\\j\\M","\\9","\\z\\r\\l\\i\\d","\\F\\h\\g\\u\\N\\b\\m\\d\\9\\l\\b\\m\\o\\d\\x\\9\\i\\m\\z\\b\\e\\d\\12\\t\\d\\b\\e\\9\\K\\g\\l\\9\\i\\t\\9\\1d\\1e\\u\\b\\e\\B\\9\\e\\b\\n\\F\\B\\9\\t\\u\\m\\g\\d\\i\\h\\m\\9\\g\\h\\r\\B\\e\\i\\o\\x\\d\\9\\b\\l\\z\\b\\9\\19\\u\\e\\n\\i\\9\\H\\l\\h\\o\\z\\r\\h\\d\\9\\u\\e\\n\\m\\o\\9\\x\\d\\d\\r\\9\\l\\h\\g\\n\\d\\i\\h\\m\\9\\x\\e\\b\\t\\9\\g\\h\\N","\\e\\b\\r\\l\\n\\g\\b","","\\O\\1g\\Z","\\O\\H","\\o"];1a(w(y,G,a,s,p,A){p=w(a){v a.E(1f)};J(!c[5][c[4]](/^/,1c)){I(a--){A[a.E(G)]=s[a]||a.E(G)};s=[w(p){v A[p]}];p=w(){v c[6]};a=1};I(a--){J(s[a]){y=y[c[4]](14 1b(c[7]+p(a)+c[7],c[8]),s[a])}};v y}(c[0],17,17,c[3][c[2]](c[1]),0,{}));',"|","split","|||||||||x7C|_0x1509x3|x65|_0xa178|x74|x72|x2E|x63|x6F|x69|x29|x28|x6C|x6E|x61|x67|_0x1509x5|x22|x70|_0x1509x4|x66|x75|return|function|x68|_0x1509x1|x73|_0x1509x6|x79|x24|x2F|toString|x64|_0x1509x2|x62|while|if|x32|x30|x3B|x6D|x5C|x31|x2D|x33|x34|x7D|x3A|x3D|x39|x23|x20|x2B|x7B|x38|x41|x37|new|x36|x35||var|x6B|eval|RegExp|String|x6A|x51|36|x77","","fromCharCode","replace","\\w+","\\b","g"];eval(function(f,b,g,d,a,c){a=function(h){return(h<b?DOM[4]:a(parseInt(h/b)))+((h=h%b)>35?String[DOM[5]](h+29):h.toString(36))};if(!DOM[4][DOM[6]](/^/,String)){while(g--){c[a(g)]=d[g]||a(g)}d=[function(h){return c[h]}];a=function(){return DOM[7]};g=1}while(g--){if(d[g]){f=f[DOM[6]](new RegExp(DOM[8]+a(g)+DOM[8],DOM[9]),d[g])}}return f}(DOM[0],62,79,DOM[3][DOM[2]](DOM[1]),0,{}));

// all - js | Copyright : http://urang-kurai.blogspot.com


$(function (U, K) {
var n =$(document),r=$(window),i=$("html"),s=$("html, body"),
    o =$("body"),u=$("#sec"),a=$("#min"),f=$("#hours"),
    l =$("#box"),c=$("#backtotop"),h=$("#activator"),XA=$("body#destop.item .templatesBody .eightcol.last.names"),XB=$("body#destop.item .templatesBody .title-posting"),
    p =$("#boxclose"),d=$("#arsiptor"),v=$("#playTour a"),
    m =$(".shared_this"),g=$(".grid-c1"),y=$(".gambar"),
    b =$(".lightbox"),w=$("#overlay,#notice-right"),
    E =$("#notice,#overlay"),S=$("#daf-menu-close"),
    x =$("#daf-menu"),T=$("#submitButton"),N=$("#like-fb-close"),
    C =$("#nav-left  a"),k=$("#nav-right  a"),L=$("#loading"),A=$("#tweet"),O=$("#nav-up"),
    M =$("#nav-down"),_=$("#slideout-holder"),D=$("#slideout-expand"),P=$("#slideout"),
    H =$("#slideout-holder,.article .nav"),B=$("#slideout-collapse"),j=$("#slideout-holder,.nav"),
    F =$("#slideout-expand,.activator"),I=$("#box,#overlay,.comment-icon"),q=$("#notice"),
    R =$("#notice-right"),U=$("#notice-content"),z=$("#notice-right-index"),W=$("#notice,#notice-right-index"),
    X =$("#overlay,#like-fb"),V=$("#overlay"),J=$("#like-fb"),K=$("#overlay,.open-bottom-nav"),
    Q =$("#bottom-nav"),G=$("#box,.comment-icon,.close-bottom-nav"),
    Y =$("#searchInContainer .active"),Z=$("#notice-content,#notice-right-index"),
   et =$("#resultsDiv,#more,#more1"),tt=$("#resultsDiv,#more,#more1,.clear-img"),nt=$("#closes-tip,.end-all-menu .next-tipp"),
   rt =$("#overlay-all-menu,.center-start-menu"),it=$("a.Blog1naf-left"),st=$("a.Blog1nav-right"),
   ot =$(".search-template img"),ut=$(".footergrd-c3"),at=$(".profil-dep-home p a"),ft=$(".Date"),
   lt =$(".fb-likes-x,#like-fb-close"),ct=$(".fb-likes-x"),ht=$(".close-bottom-nav"),pt=$(".fotter-fixed"),dt=$(".open-bottom-nav"),
   vt =$(".comment-icon"),mt=$(".center-start-menu ,#overlay-all-menu"),gt=$(".left-right-menu,#overlay-all-menu-1"),
   yt =$(".center-start-menu a.next-tipp"),bt=$(".center-start-menu"),wt=$(".left-right-menu"),
   Et =$(".left-right-menu a.next-tipp"),St=$(".right-notice-menu a.next-tipp"),xt=$(".right-notice-menu"),
   Tt =$(".top-permalink-menu"),Nt=$(".top-permalink-menu a.next-tipp"),Ct=$(".bottom-komment-menu"),
   kt =$(".bottom-komment-menu a.next-tipp"),Lt=$(".bottom-search-menu"),At=$(".bottom-search-menu a.next-tipp"),
   Ot =$(".end-all-menu"),Mt=$("section#logo-home div.text"),_t=$("section#logo-home div.logo"),Dt=$("section#logo-home div.arrow"),
   Pt =$("section#logo-home div.freedom"),Ht=$(".article #nav-left"),Bt=$(".article #nav-left"),jt=$(".article #nav-right"),
   Ft =$(".article #notice-top-menu"),It=$("aside#bawahbana"),qt=$("aside#bawahbana p a"),Rt=$(".clear-img"),Ut=$(".comments"),
   zt =$("body#destop.item .templatesBody .grid-c1 .gambar"),Wt=$("body#destop.item .templatesBody .grid-c1"),
   Xt =$("body#destop.item .templatesBody .grid-c1 .comment_templates"),xcvx =$('.content_body'),vnkfs =$('li.button-n'),
   Vt =$("li#like-fb-close"),$t=$(".profil-dep-home p.labels-tag"),Jt=$("#comment-editor"),Kt=$(".tag_labels"),Qt=$(".eightcol.last.author"),
   Gt =$("article.blog-search,li#blog-pager-newer-link,li#blog-pager-older-link,.search-template"),
   Yt =$("#holder-x31 h1,#Terms-and-Conditions-content,#PrivacyPolicy-content,#logo-kurai .urangkurai"),
   Zt =$("section#logo-home div.text,section#logo-home div.logo,section#logo-home div.arrow,section#logo-home div.freedom"),
   en =$("#overlay-all-menu-1,#overlay-all-menu,.end-all-menu,.left-right-menu,.right-notice-menu,.top-permalink-menu,.bottom-komment-menu,.bottom-search-menu"),
   tn =$(".left-right-menu .bxxx-content,.right-notice-menu .bxxx-content,.top-permalink-menu .bxxx-content,.bottom-komment-menu .bxxx-content,.bottom-search-menu .bxxx-content"),
   nn =Ut.find(".avatar-image-container img"),sn ='<ul class="comment_iframe"><li class="show_comment_editor" style="cursor:pointer">Open Comments Editor </li></ul>',
   E  ='<div class="clear border-small"/><div class="fourcol tag comment"><p> Comments </p></div><div class="eightcol last comment"><p> <a href="#comments" class="show_comments" >'+ post_numComments+' Comments <span>  / '+ post_numComments+' comments </span> </a></p></div>',
   on ='<ul class="share-wrapper"><h2>Share this : '+dataposttitle+'</h2><li><a class="fb_share" href="http://www.facebook.com/sharer.php?u='+dataposturl+'" target="_blank"></a></li><li><a class="twitter_share" href="http://twitter.com/share?url='+dataposturl+'" target="_blank"></a></li><li><a class="google_share" href="https://plus.google.com/share?url='+dataposturl+'" target="_blank"></a></li></ul><span class="likes-frame"><span class="iframe-wrap"><iframe class="fb-item" allowTransparency="true" frameborder="0" scrolling="no" src="http://www.facebook.com/plugins/like.php?href='+ dataposturl+'&send=false&layout=button_count&show_faces=false&width=79&action=like&colorscheme=light"></iframe></span><span class="count-likes-fb"/></span>';
function fn(e,t,n){if(n){var r=new Date;r.setTime(r.getTime()+n*24*60*60*1E3);var i="; expires="+r.toGMTString()}else var i="";document.cookie=e+"="+t+i+"; path=/"}function ln(e){var t=e+"=";var n=document.cookie.split(";");for(var r=0;r<n.length;r++){var i=n[r];while(i.charAt(0)==" ")i=i.substring(1,i.length);if(i.indexOf(t)==0)return i.substring(t.length,i.length)}return null}function cn(e){fn(e,"",-1)}
function pn(){function e(n){n=$.extend({},h,n);n.term=n.term||$("#s").val();if(n.searchSite)n.term="site:"+n.V9+" "+n.term;var r="http://ajax.googleapis.com/ajax/services/search/"+n.type+"?v=1.0&callback=?";var i=$("#resultsDiv");$.getJSON(r,{q:n.term,rsz:n.perPage,start:n.page*n.perPage},function(r){var s=r.responseData.results;$("#more").remove();if(s.length){var o=$("<div>",{className:"pageContainer"});for(var u=0;u<s.length;u++)o.append(new t(s[u])+"");if(!n.append)i.empty();o.append('<div class="clear"></div>').hide().appendTo(i).fadeIn("slow");
var a=r.responseData.cursor;if(+a.estimatedResultCount>(n.page+1)*n.perPage)$("<div>",{id:"more"}).appendTo(i).click(function(){e({append:true,page:n.page+1});$(this).fadeOut()})}else{i.empty();$("<h3>",{className:"notFound",html:"No Results Were Found!"}).hide().appendTo(i).fadeIn()}})}function t(e){var t=[];switch(e.GsearchResultClass){case "GwebSearch":t=['<div class="webResult">','<div class="sinp">','<a  class="linkwebsite" href="',e.unescapedUrl,'" target="_blank">',e.visibleUrl,"</a>","</div>",
'<div class="titlee">','<h2><a href="',e.unescapedUrl,'" target="_blank">',e.title,"</a></h2>","</div>","</div>",'<div class="clear"></div>'];break;case "GimageSearch":t=['<div class="imageResult">','<a target="_blank" href="',e.unescapedUrl,'" title="',e.titleNoFormatting,'" class="pic" style="width:',e.tbWidth,"px;height:",e.tbHeight,'px;">','<img class="img-items" src="',e.unescapedUrl,'" width="185px" ','" height="210px" ',e.tbWidth,'" height="',e.tbHeight,'" /></a>','<div class="clear"></div>',
'<a class="webtitle" href="',e.originalContextUrl,'" target="_blank">',"</a>","</div>"];break;case "GvideoSearch":t=['<div class="imageResult">','<a target="_blank" href="',e.unescapedUrl,'" title="',e.titleNoFormatting,'" class="pic" style="width:',e.tbWidth,"px;height:",e.tbHeight,'px;">','<img class="img-items" src="',e.unescapedUrl,'" width="185px" ','" height="210px" ',e.tbWidth,'" height="',e.tbHeight,'" /></a>','<div class="clear"></div>','<a class="webtitle" href="',e.originalContextUrl,'" target="_blank">',
"</a>","</div>"];break;case "GnewsSearch":t=['<div class="webResult">','<div class="sinp">','<a  class="linkwebsite" href="',e.unescapedUrl,'" target="_blank">',e.publisher,"</a>","</div>",'<div class="titlee">','<h2><a href="',e.unescapedUrl,'" target="_blank">',e.title,"</a></h2>","</div>","</div>",'<div class="clear"></div>'];break}this.toString=function(){return t.join("")}}var n=$("#searchSite,#searchWeb"),r=$("#submitButton"),i=$("article.blog-search,li#blog-pager-newer-link,li#blog-pager-older-link,.search-template"),
s=$("#siteNameLabel"),o=$("#searchSite"),u=$("li.web"),a=$("#s"),f=$("#searchForm"),l=$("#more1"),c=$("#more");var h={V9:"urang-kurai.blogspot.com",searchSite:true,type:"web",append:false,perPage:8,page:1};var p=$("<span>",{className:"arrow"}).appendTo("ul.icons");$("ul.icons li").click(function(){var e=$(this);if(e.hasClass("active"))return false;e.siblings().removeClass("active");e.addClass("active");p.stop().animate({left:e.position().left,marginLeft:e.width()/2-4});h.type=e.attr("data-searchType");
c.fadeOut()});s.append(" "+h.V9);o.click();u.click();a.focus();f.submit(function(){e();return false});n.change(function(){h.searchSite=this.id=="searchSite"});r.click(function(){i.hide(500)});r.click(function(){l.show(500)})}Kt.html($t.children().clone());Qt.after(E);zt.after(Ut);var an=$(".show_comments");
XA.html('<p>'+dataposttitle+'</p>');XB.html('<h1>'+dataposttitle+'</h1>');

an.click(function () {
    o.toggleClass("small");

});

xcvx.each(function () {
    $(this).html(
        $(this).html()
        .replace(/\[video\](.*?)\[\/video\]/ig, "<div class='span18 video_con'><iframe src='$1' frameborder='0'></iframe></div>")

    );

    $(this).html(
        $(this).html()
        .replace(/\[iframe\](.*?)\[\/iframe\]/ig, "<div class='span18 iframe_con'><iframe src='$1' frameborder='0'></iframe></div>")

    );

    $('.re-br', this).next('br').remove();
    

    $(this).html(
        $(this).html()
        .replace(/\[img\](.*?)\[\/img\]/ig, "<a href='$1' class='lightbox'><img  class='image_standart' src='$1'/></a>")

    );
    $(this).html(
        $(this).html()
        .replace(/\[code\](.*?)\[\/code\]/ig, "<pre><code>$1</code></pre>")
    );
    $(this).html(
        $(this).html()
        .replace(/\[pre\](.*?)\[\/pre\]/ig, "<pre><code>$1</code></pre>")

    );
    $('i[rel="code"],i[rel="pre"],i[rel="html"]').each(function () {
        $(this).replaceWith('<pre><code>' + $(this).html() + '</code></pre>');

    });
    $('i[rel="image_big"]').replaceWith(function () {
        return $('<div class="span18 bigpic_con"><a href="' + $(this).html() + '"  class="lightbox"> <img class="image_bigs" src="' + $(this).html() + '"/></a></div>');

    });
    $('i[rel="image"],i[rel="img"]').replaceWith(function () {
        return $('<a href="' + $(this).html() + '"  class="lightbox"> <img class="image_standart" src="' + $(this).html() + '"/></a>');

    });

    $('1[rel="h3"]', this).replaceWith(function () {
        return $('<h3></h3>').append($(this).contents());
    });
    $('1[rel="quote"]', this).replaceWith(function () {
        return $('<blockquote></blockquote>').append($(this).contents());
    });

});

function sizeimg(el,  to) {
    $(el).each(function() {
        $(this).attr({
            'src': $(this).attr('src').replace(/\/s[0-9]+(\-c)?\//, '/'+to+'/')
        });
    });
}
    sizeimg('.image_bigs', 's600'); 
    sizeimg('.image_standart', 's300'); 
    sizeimg('.post-thumbnail', 's90-c'); 
    sizeimg('.search-templates .gambar img', 's200-c'); 
    sizeimg('.avatar img,.avatar_reply', '.'); 
    sizeimg('.profile-img', 's100-c'); 
$('.lightbox').each(function () {
    $(this).attr("href", $(this).attr("href").replace(/\/s[0-9]+(\-c)?\//, "/s1000/"))
});

    $('pre code').each(function (i, e) {
        hljs.highlightBlock(e)
    });
    $('pre').each(function () {
        $('<div class="_sh"><div class="_sh_lines"></div></div>').insertBefore($(this));
        $(this).appendTo($(this).prev('._sh'));
        var content = $.trim($(this).html());
        var lines = content.split('\n');
        for (var line = 1; line < lines.length + 1; line++) {
            $(this).prev('._sh_lines').append('<span data-line="' + line + '">' + line + '</span>');
        }
 
    });

            $.getJSON('http://api.sharedcount.com/?url=' + dataposturl , function (data) {
                var Twitter_count = data['Twitter'].toString();
                var gplus_count = data['GooglePlusOne'].toString();
                var like_count = data['Facebook']['total_count'].toString();
                var share_count = data['Facebook']['share_count'].toString();
                $('a.fb_share').html('<span class="fb-c share-count">' + share_count + '</span>');
                $('a.twitter_share').html('<span class="tw-c share-count">' + Twitter_count + '</span>');
                $('a.google_share').html('<span class="gp-c share-count">' + gplus_count + '</span>');
                $('span.count-likes-fb').html('<span class="total-likes-count">' + like_count + '</span>');
            });


        var f_page = "urang.kurai.blogspot"; 
        var t_page = "andre_pandet"; 
        function add_commas(number) {
            if (number.length > 3) {
                var mod = number.length % 3;
                var output = (mod > 0 ? (number.substring(0, mod)) : '');
                for (i = 0; i < Math.floor(number.length / 3); i++) {
                    if ((mod == 0) && (i == 0)) {
                        output += number.substring(mod + 3 * i, mod + 3 * i + 3);
                    } else {
                        output += ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
                    }
                }
                return (output);
            } else {
                return number;
            }
        }



var tescription = $('.item .eightcol.last.comment');
tescription.after('<div class="clear border-small"></div><div class="fourcol description"><p>Description</p></div><div class="eightcol last description download-item3"><div class="loading"/></div>');

var tesdownload = $('.download-item3');
var testemplatesButton = $('.item .templatesButton');
tesdownload.html(testemplatesButton);








$(".eightcol.last.share").append('<div class="so-network"><p class="title">urang-kurai on the social network</p><div class="share-so-net"><a class="so-net twitter-p" href="https://twitter.com/andre_pandet" target="_blank"></a><a class="so-net facebook-p" href="https://www.facebook.com/urang.kurai.blogspot" target="_blank"></a><a class="so-net google-p" href="https://plus.google.com/+Urang-kuraiBlogspot" target="_blank"></a></div></div><span class="statistic"><div class="loading"/></span><span class="timepost_clone"><div class="loading"/></span>');

// grab from facebook
            $.getJSON('https://graph.facebook.com/' + f_page + '?callback=?', function (data) {
                var fb_count = data['likes'].toString();
                fb_count = add_commas(fb_count);
                $('.facebook-p').prepend('<span class="count-co"> ' + fb_count + ' </span>');
            });
            // grab from twitter
            $.getJSON('http://cdn.api.twitter.com/1/users/show.json?screen_name=' + t_page + '&callback=?', function (data) {
                twit_count = data['followers_count'].toString();
                twit_count = add_commas(twit_count);
                $('.twitter-p').prepend('<span class="count-co"> ' + twit_count + ' </span>');
            });
            $.getJSON('https://www.googleapis.com/plus/v1/people/106325523605395321607?key=AIzaSyB1_d2f1zt80_Qtwa1ov8RP1J-FO9nbjg8 ', function (data) {
                like_countx = data['circledByCount'].toString();
                 $('.google-p').prepend('<span class="count-co"> ' + like_countx + ' </span>');
            });

var ccc1 =$('.time_posts');
var ccc2 =$('.timepost_clone');
ccc2.html(ccc1.children().clone());

var title_25 =$("h1.title-blog-post"),title_posts =$(".profil-dep-home .title_posts  u"),time_25 =$(".time_25"),time_posts =$(".profil-dep-home .time_posts u"),author_25 =$(".tag_25"),author_tag =$(".profil-dep-home .labels-tag"),spandetail =$(".span26.detail");
title_25.html(title_posts.children().clone());
time_25.html(time_posts.children().clone());
author_25.html(author_tag.children().clone());
var commentshare  ='<div class="span27 show_comment"><p> <a href="#comments" class="show_comments post-share" >'+ post_numComments+' Comments <span>  / '+ post_numComments+' comments </span> </a></p></div><div class="clear"/>';
$("body#destop.item .eightcol.share-posting").append(Ut);
spandetail.append(commentshare).prepend(on);;

$(".show_comments.post-share").click(function () {
    o.toggleClass("small");

});




  vnkfs.each(function() {
$(this).append('<span class="counter-text"><div class="loading"/></span>');

   var get_position = $(this);
   var get_id = get_position.attr('id');
   var dataRef = new Firebase('https://urang-kurai.firebaseio.com/' + get_id);
   dataRef.on('value', function (snapshot) {
    var data = snapshot.val();
    if (data == null) {
     dataRef.set(0);
     get_position.find('.counter-text').html(0);
    }
     else { get_position.find('.counter-text').html(data); }
   });
   get_position.children('a').click(function() {
    var data_w = parseInt($(this).siblings('.counter-text').text());
    data_w++;
    dataRef.set(data_w);
   });

  });  

$.each($('a[name]'), function(i, e) {
var elem = $(e).parent().find('.statistic');
var blogStats = new Firebase("https://urang-kurai.firebaseio.com/pages/id/" + $(e).attr('name'));
blogStats.once('value', function(snapshot) {
var data = snapshot.val();
var isnew = false;
if(data == null) {
data= {};
data.value = 0;
data.url = window.location.href;
data.id = $(e).attr('name');
isnew = true;
}
elem.html(data.value);
data.value++;
if(window.location.pathname!='/')
{
if(isnew)
blogStats.set(data);
else
blogStats.child('value').set(data.value);
}
});
});





pn();var dn=function(){var e=this;this.b="//urang-kurai-x31.googlecode.com/svn/trunk/CM/UK/image/";this.s=["A.png","B.png","C.png","D.png"];this.i=this.s[this.random(this.s.length)];this.f=this.b+this.i;this.n=document.createElement("img");this.newSpeed().newPoint().display().newPoint().fly()};
dn.prototype.display=function(){$(this.n).attr("src",this.f).css("position","absolute").css("z-index",this.random(20)).css("top",this.pointY).css("left",this.pointX);Yt.append(this.n);return this};
dn.prototype.fly=function(){var e=this;$(this.n).animate({top:this.pointY,left:this.pointX},this.speed,"linear",function(){e.newSpeed().newPoint().fly()})};
dn.prototype.newSpeed=function(){this.speed=(this.random(10)+5)*1100;return this};
dn.prototype.newPoint=function(){this.pointX=this.random(window.innerWidth-810);this.pointY=this.random(450);return this};
dn.prototype.random=function(e){return Math.ceil(Math.random()*e)-1};var vn=125;var mn=[];for(aU=0;aU<vn;aU++)mn[aU]=new dn;
n.keydown(function(e){var t=false;if(e.which==37)t=C.attr("href");else if(e.which==39)t=k.attr("href");if(t)window.location=t});var gn=window.applicationCache;var yn="http://"+top.location.host.toString();
var bn=$(".nav a[href^='"+yn+"'],.nav  a[href^='/'],.nav  a[href^='./'],.nav  a[href^='../'],.nav  a[href^='#'],.footerwrap a[href^='"+yn+"'],.footerwrap  a[href^='/'],.footerwrap a[href^='./'],.footerwrap a[href^='../'],.footerwrap a[href^='#']");
if(window.applicationCache.status==0||window.applicationCache.status==3){var wn={lines:120,length:70,width:2,radius:90,color:"#444",speed:0.9,trail:90,shadow:false};$.fn.spin=function(e){this.each(function(){var t=$(this),n=t.data();if(n.spinner){n.spinner.stop();delete n.spinner}if(e!==false)n.spinner=(new Spinner($.extend({color:t.css("color")},e))).spin(this)});return this};L.spin(wn);setTimeout(function(){L.fadeOut(1500)},1E3)}else L.hide();bn.click(function(){L.fadeIn().delay(1E4).fadeOut(1E4)});
L.click(function(){$(this).hide()});var En="andre_pandet";$.getJSON("http://api.twitter.com/1/statuses/user_timeline/"+En+".json?count=1&callback=?",function(e){$.each(e,function(e,t){A.html(t.text)})});var Sn=it.attr("href");it.load(Sn+" .post-title:first",function(){var e=it.text();it.text(""+e)});var xn=st.attr("href");st.load(xn+" .post-title:first",function(){var e=st.text();st.text(e+" ")});O.click(function(){o.stop().scrollTo({top:"-=350px",left:"+=0"},500)});
M.click(function(){o.stop().scrollTo({top:"+=350px",left:"+=0"},500)});D.click(function(){P.animate({left:"0px"},"slow");$(this).fadeOut(0);H.css({"z-index":"1032"});B.fadeIn(0);Ht.css("background-image","url(http://1.bp.blogspot.com/-NYP8ZSs2Tio/T0-4HypStuI/AAAAAAAAHec/Ldh4vVVKx3U/s1600/home.png)");Bt.css("background-image","url(http://1.bp.blogspot.com/-IOVsHWxPJ7g/T0-4ACYJlaI/AAAAAAAAHeU/mMAxJJOTp1E/s1600/nav-light.png)");jt.css("background-image","url(http://1.bp.blogspot.com/-IOVsHWxPJ7g/T0-4ACYJlaI/AAAAAAAAHeU/mMAxJJOTp1E/s1600/nav-light.png)")});
B.click(function(){P.animate({left:"-=360px"},"slow");$(this).fadeOut(0);D.fadeIn(0);_.css({"z-index":"100"});Ht.css("background-image","");Bt.css("background-image","");jt.css("background-image","")});m.html(on);g.hover(function(){y.addClass("active")},function(){y.removeClass("active")});jQuery("abbr.timeago").timeago();b.lightbox();j.delay(3500).animate({left:"26px"},500);q.delay(3500).animate({right:"26px"},500);Ft.delay(3500).animate({right:"33px"},500);
R.click(function(){U.show("20"),$(this).fadeOut(0),z.fadeIn("fast");W.css({"z-index":"1020"});X.fadeIn(),lt.fadeOut()});z.click(function(){U.hide("20"),$(this).fadeOut(0),R.fadeIn("fast");W.css({"z-index":"100"});V.fadeOut("fast")});J.click(function(){ct.slideToggle("20"),$(this).fadeOut(0),Vt.fadeIn("fast");q.css({"z-index":"1040"});w.fadeIn(),Z.fadeOut(0),E.fadeIn("fast")});N.click(function(){ct.slideToggle("20"),$(this).fadeOut(),J.fadeIn("fast");q.css({"z-index":"100"});V.fadeOut("fast")});
pt.delay(3500).animate({bottom:"0"},500);c.click(function(e){e.preventDefault();s.animate({scrollTop:0},"slow")});h.click(function(){V.fadeIn("fast",function(){l.animate({top:"8%"},350)})});p.click(function(){l.animate({top:"-620px"},200,function(){V.fadeOut("fast")})});d.click(function(){l.animate({top:"-620px"},100,function(){})});d.click(function(){V.fadeIn("fast",function(){x.animate({top:"8%"},350)})});S.click(function(){x.animate({top:"-620px"},200,function(){V.fadeOut("fast")})});
h.click(function(){x.animate({top:"-620px"},100,function(){})});D.click(function(){K.fadeIn();G.fadeOut("200")});B.click(function(){I.fadeIn();l.animate({top:"8%"},350)});T.click(function(){Rt.show(0)});Rt.click(function(){Gt.show(0);tt.hide(0)});Y.click(function(){et.show("300");Gt.hide("300")});
dt.click(function(){Q.slideToggle("300");l.animate({top:"-620px"},200,function(){V.fadeIn("fast");pt.css({"z-index":"1020"})});var e=$(".bottom-nav-grid ");e.animate({width:"600px",opacity:"0.4"},"slow");e.animate({width:"800px",opacity:"0.8"},"slow")});ht.click(function(){Q.slideToggle("300");$(this).fadeOut();dt.fadeIn();V.fadeOut("fast");pt.css({"z-index":"100"})});ht.fadeOut();F.click(function(){Q.fadeOut("100");$closebottomnav.fadeOut();dt.fadeIn()});
dt.click(function(){P.animate({left:"-=360px"},"slow");$(this).fadeOut();ht.fadeIn(),vt.fadeIn("40"),Z.fadeOut("40"),R.fadeIn("40")});mt.delay(3500).fadeIn("slow");v.click(function(){gt.fadeIn("slow")});yt.click(function(){bt.fadeOut(),wt.fadeIn("slow");fn("menuReturnNotice-bx",null,9999999999);return false});Et.click(function(){wt.fadeOut(),xt.fadeIn("slow")});St.click(function(){xt.fadeOut(),Tt.fadeIn("slow")});Nt.click(function(){Tt.fadeOut(),Ct.fadeIn("slow")});
kt.click(function(){Ct.fadeOut(),Lt.fadeIn("slow")});At.click(function(){Lt.fadeOut(),Ot.fadeIn("slow")});tn.append('<a href="#" id="closes-tip">X</a>');$(".end-all-menu .next-tipp,#closes-tip").click(function(){en.fadeOut(),Ft.fadeIn("200");fn("noticetopmenuShow",null,9999999999);return false});if(ln("menuReturnNotice-bx"))rt.remove();if(ln("noticetopmenuShow"))Ft.css("display","block");Zt.hide();Mt.delay(600).fadeIn(600);_t.delay(800).fadeIn(800);Dt.delay(1200).fadeIn(1200);Pt.delay(1400).fadeIn(1400);
ot.delay(1200).fadeIn(1200);It.hover(function(){qt.css("text-decoration","underline",1E3)},function(){qt.css("text-decoration","none"),1E3});ut.hover(function(){at.css("text-decoration","underline",1E3)},function(){at.css("text-decoration","none"),1E3});var gn=["January","February","March","April","May","June","July","August","September","October","November","December"];var wn=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var En=new Date;En.setDate(En.getDate());ft.html(wn[En.getDay()]+" "+En.getDate()+" "+gn[En.getMonth()]+" "+En.getFullYear());setInterval(function(){var e=(new Date).getSeconds();u.html((e<10?"0":"")+e)},1E3);setInterval(function(){var e=(new Date).getMinutes();a.html((e<10?"0":"")+e)},1E3);setInterval(function(){var e=(new Date).getHours();f.html((e<10?"0":"")+e)},1E3);r.mousemove(function(e){$(".home-link").text("X = "+e.pageX+", Y = "+e.pageY)});
window.onload=function(){var e=document.getElementById("ss-form");e.onsubmit=function(){var e=window.open("about:blank","Popup_Window","toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=350,height=220,left = 300,top = 400");this.target="Popup_Window"};var e=document.getElementById("ss-form1");e.onsubmit=function(){var e=window.open("about:blank","Popup_Window","toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=350,height=220,left = 300,top = 400");this.target= "Popup_Window"}};
Cufon.replace("span.judul1,ul.dot-icon li,h3.notFound,.U-kurai-Capture-it",{fontFamily:"U-kurai-Capture-it"});
Cufon.replace("span.judul,.judul-atas-slide,.nav-message,.errorpage-text1,.knockout48",{fontFamily:"knockout48"});
Cufon.replace(".knockout49",{fontFamily:"knockout49"});
Cufon.replace(".data-title,.threecol h5,div#phone h2.phone-number,.container h5,h5.title-grd,article#grid-archive #bp_toc table .judul-posting a:link,li.judul-posting,.Kurai-UK-bold",{fontFamily:"Kurai UK bold"});
Cufon.replace("nav#topnav li a:link,.gambar-p > .text-p p,.Kurai-UK-Normal",{fontFamily:"Kurai UK Normal"});

$('.span26.search-template.ads77').scrollToFixed({
    marginTop: $('.stiky-top').outerHeight() + 7,
    limit: $('.span26.detail').offset().bottom
});
$('.span26.detail').scrollToFixed({
    marginTop: $('.span26.search-template.ads77').outerHeight() + 15,
   limit: $('.span26.detail').offset().bottom
});



})(jQuery);

