var j=void 0,l=!0,p=null,r=!1,s,u=this;
function v(a){var c=typeof a;if("object"==c)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return c;var d=Object.prototype.toString.call(a);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==c&&"undefined"==typeof a.call)return"object";return c}function w(a){return"string"==typeof a}function aa(a){var c=typeof a;return"object"==c&&a!=p||"function"==c}var x="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36),y=0;function ba(a){if(!ca.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(da,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ea,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(fa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ga,"&quot;"));return a}var da=/&/g,ea=/</g,fa=/>/g,ga=/\"/g,ca=/[&<>\"]/;var z=Array.prototype,A=z.indexOf?function(a,c,d){return z.indexOf.call(a,c,d)}:function(a,c,d){d=d==p?0:0>d?Math.max(0,a.length+d):d;if(w(a))return!w(c)||1!=c.length?-1:a.indexOf(c,d);for(;d<a.length;d++)if(d in a&&a[d]===c)return d;return-1},ha=z.forEach?function(a,c,d){z.forEach.call(a,c,d)}:function(a,c,d){for(var f=a.length,g=w(a)?a.split(""):a,b=0;b<f;b++)b in g&&c.call(d,g[b],b,a)},ia=z.filter?function(a,c,d){return z.filter.call(a,c,d)}:function(a,c,d){for(var f=a.length,g=[],b=0,e=w(a)?a.split(""):
a,h=0;h<f;h++)if(h in e){var i=e[h];c.call(d,i,h,a)&&(g[b++]=i)}return g};function ja(a,c,d){return 2>=arguments.length?z.slice.call(a,c):z.slice.call(a,c,d)};var B,C,D,E;function ka(){return u.navigator?u.navigator.userAgent:p}E=D=C=B=r;var F;if(F=ka()){var la=u.navigator;B=0==F.indexOf("Opera");C=!B&&-1!=F.indexOf("MSIE");D=!B&&-1!=F.indexOf("WebKit");E=!B&&!D&&"Gecko"==la.product}var ma=B,G=C,H=E,I=D,na=u.navigator,oa=-1!=(na&&na.platform||"").indexOf("Mac"),J;
a:{var K="",L;if(ma&&u.opera)var pa=u.opera.version,K="function"==typeof pa?pa():pa;else if(H?L=/rv\:([^\);]+)(\)|;)/:G?L=/MSIE\s+([^\);]+)(\)|;)/:I&&(L=/WebKit\/(\S+)/),L)var qa=L.exec(ka()),K=qa?qa[1]:"";if(G){var ra,sa=u.document;ra=sa?sa.documentMode:j;if(ra>parseFloat(K)){J=String(ra);break a}}J=K}var ta={};
function M(a){var c;if(!(c=ta[a])){c=0;for(var d=String(J).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),g=Math.max(d.length,f.length),b=0;0==c&&b<g;b++){var e=d[b]||"",h=f[b]||"",i=RegExp("(\\d*)(\\D*)","g"),k=RegExp("(\\d*)(\\D*)","g");do{var n=i.exec(e)||["","",""],m=k.exec(h)||["","",""];if(0==n[0].length&&0==m[0].length)break;c=((0==n[1].length?0:parseInt(n[1],10))<(0==m[1].length?0:parseInt(m[1],10))?-1:(0==n[1].length?0:parseInt(n[1],
10))>(0==m[1].length?0:parseInt(m[1],10))?1:0)||((0==n[2].length)<(0==m[2].length)?-1:(0==n[2].length)>(0==m[2].length)?1:0)||(n[2]<m[2]?-1:n[2]>m[2]?1:0)}while(0==c)}c=ta[a]=0<=c}return c}var ua={};function N(){return ua[9]||(ua[9]=G&&!!document.documentMode&&9<=document.documentMode)};var va,wa=!G||N();!H&&!G||G&&N()||H&&M("1.9.1");G&&M("9");function xa(a){a=a.className;return w(a)&&a.match(/\S+/g)||[]}function ya(a,c){for(var d=xa(a),f=ja(arguments,1),g=d.length+f.length,b=d,e=0;e<f.length;e++)0<=A(b,f[e])||b.push(f[e]);a.className=d.join(" ");return d.length==g}function za(a,c){var d=xa(a),f=ja(arguments,1),d=ia(d,function(a){return!(0<=A(f,a))});a.className=d.join(" ")}function Aa(a){var c=xa(a);!(0<=A(c,"hidden"))?ya(a,"hidden"):za(a,"hidden")};var Ba="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ca(a,c){for(var d,f,g=1;g<arguments.length;g++){f=arguments[g];for(d in f)a[d]=f[d];for(var b=0;b<Ba.length;b++)d=Ba[b],Object.prototype.hasOwnProperty.call(f,d)&&(a[d]=f[d])}};function O(a){return w(a)?document.getElementById(a):a}var Da={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function P(a){this.g=a||u.document||document}
P.prototype.o=function(a,c,d){var f=this.g,g=arguments,b=g[0],e=g[1];if(!wa&&e&&(e.name||e.type)){b=["<",b];e.name&&b.push(' name="',ba(e.name),'"');if(e.type){b.push(' type="',ba(e.type),'"');var h={};Ca(h,e);delete h.type;e=h}b.push(">");b=b.join("")}b=f.createElement(b);if(e)if(w(e))b.className=e;else if("array"==v(e))ya.apply(p,[b].concat(e));else{var i=b,h=function(a,b){"style"==b?i.style.cssText=a:"class"==b?i.className=a:"for"==b?i.htmlFor=a:b in Da?i.setAttribute(Da[b],a):0==b.lastIndexOf("aria-",
0)||0==b.lastIndexOf("data-",0)?i.setAttribute(b,a):i[b]=a},k;for(k in e)h.call(j,e[k],k)}if(2<g.length){var n=f,m=b,f=g,g=function(a){a&&m.appendChild(w(a)?n.createTextNode(a):a)};for(k=2;k<f.length;k++)if(h=f[k],e=v(h),("array"==e||"object"==e&&"number"==typeof h.length)&&!(aa(h)&&0<h.nodeType)){var q;a:{if(h&&"number"==typeof h.length){if(aa(h)){q="function"==typeof h.item||"string"==typeof h.item;break a}if("function"==v(h)){q="function"==typeof h.item;break a}}q=r}e=ha;if(q)if(q=h.length,0<q){for(var t=
Array(q),W=0;W<q;W++)t[W]=h[W];h=t}else h=[];e(h,g)}else g(h)}return b};P.prototype.createElement=function(a){return this.g.createElement(a)};P.prototype.createTextNode=function(a){return this.g.createTextNode(a)};P.prototype.appendChild=function(a,c){a.appendChild(c)};function Ea(a,c,d){var f=a?new P(9==a.nodeType?a:a.ownerDocument||a.document):va||(va=new P),g=[];g.push("<!DOCTYPE html>");g.push("<html><head>",c,"</head><body>",d,"</body></html>");c=f.o("iframe",{frameborder:0,style:"border:0;vertical-align:bottom;position:absolute; width: 100%; height: 100%;",src:'javascript:""'});a.appendChild(c);a=g.join("");g=c.contentDocument||c.contentWindow.document;g.open();g.write(a);g.close()};!G||N();var Fa=!G||N(),Ga=G&&!M("9");!I||M("528");H&&M("1.9b")||G&&M("8")||ma&&M("9.5")||I&&M("528");H&&!M("8")||G&&M("9");function Q(a,c){this.type=a;this.currentTarget=this.target=c}Q.prototype.h=r;Q.prototype.defaultPrevented=r;Q.prototype.r=l;Q.prototype.preventDefault=function(){this.defaultPrevented=l;this.r=r};function Ha(a){Ha[" "](a);return a}Ha[" "]=function(){};function R(a,c){a&&this.d(a,c)}function Ia(){}Ia.prototype=Q.prototype;R.s=Q.prototype;R.prototype=new Ia;s=R.prototype;s.target=p;s.relatedTarget=p;s.offsetX=0;s.offsetY=0;s.clientX=0;s.clientY=0;s.screenX=0;s.screenY=0;s.button=0;s.keyCode=0;s.charCode=0;s.ctrlKey=r;s.altKey=r;s.shiftKey=r;s.metaKey=r;s.q=r;s.j=p;
s.d=function(a,c){var d=this.type=a.type;Q.call(this,d);this.target=a.target||a.srcElement;this.currentTarget=c;var f=a.relatedTarget;if(f){if(H){var g;a:{try{Ha(f.nodeName);g=l;break a}catch(b){}g=r}g||(f=p)}}else"mouseover"==d?f=a.fromElement:"mouseout"==d&&(f=a.toElement);this.relatedTarget=f;this.offsetX=I||a.offsetX!==j?a.offsetX:a.layerX;this.offsetY=I||a.offsetY!==j?a.offsetY:a.layerY;this.clientX=a.clientX!==j?a.clientX:a.pageX;this.clientY=a.clientY!==j?a.clientY:a.pageY;this.screenX=a.screenX||
0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==d?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.q=oa?a.metaKey:a.ctrlKey;this.state=a.state;this.j=a;a.defaultPrevented&&this.preventDefault();delete this.h};
s.preventDefault=function(){R.s.preventDefault.call(this);var a=this.j;if(a.preventDefault)a.preventDefault();else if(a.returnValue=r,Ga)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(c){}};function Ja(){}var Ka=0;s=Ja.prototype;s.key=0;s.c=r;s.i=r;s.d=function(a,c,d,f,g,b){if("function"==v(a))this.l=l;else if(a&&a.handleEvent&&"function"==v(a.handleEvent))this.l=r;else throw Error("Invalid listener argument");this.e=a;this.n=c;this.src=d;this.type=f;this.capture=!!g;this.k=b;this.i=r;this.key=++Ka;this.c=r};s.handleEvent=function(a){return this.l?this.e.call(this.k||this.src,a):this.e.handleEvent.call(this.e,a)};var S={},T={},U={},V={};
function La(a,c,d,f,g){if(c)if("array"==v(c))for(var b=0;b<c.length;b++)La(a,c[b],d,f,g);else{var f=!!f,e=T;c in e||(e[c]={a:0,b:0});e=e[c];f in e||(e[f]={a:0,b:0},e.a++);var e=e[f],h=a[x]||(a[x]=++y),i;e.b++;if(e[h]){i=e[h];for(b=0;b<i.length;b++)if(e=i[b],e.e==d&&e.k==g){if(e.c)break;return}}else i=e[h]=[],e.a++;var k=Ma,n=Fa?function(a){return k.call(n.src,n.key,a)}:function(a){a=k.call(n.src,n.key,a);if(!a)return a},b=n;b.src=a;e=new Ja;e.d(d,b,a,c,f,g);d=e.key;b.key=d;i.push(e);S[d]=e;U[h]||
(U[h]=[]);U[h].push(e);a.addEventListener?(a==u||!a.p)&&a.addEventListener(c,b,f):a.attachEvent(c in V?V[c]:V[c]="on"+c,b)}else throw Error("Invalid event type");}function Na(a,c,d,f){if(!f.f&&f.m){for(var g=0,b=0;g<f.length;g++)f[g].c?f[g].n.src=p:(g!=b&&(f[b]=f[g]),b++);f.length=b;f.m=r;0==b&&(delete T[a][c][d],T[a][c].a--,0==T[a][c].a&&(delete T[a][c],T[a].a--),0==T[a].a&&delete T[a])}}
function Oa(a,c,d,f,g){var b=1,c=c[x]||(c[x]=++y);if(a[c]){a.b--;a=a[c];a.f?a.f++:a.f=1;try{for(var e=a.length,h=0;h<e;h++){var i=a[h];i&&!i.c&&(b&=Pa(i,g)!==r)}}finally{a.f--,Na(d,f,c,a)}}return Boolean(b)}
function Pa(a,c){if(a.i){var d=a.key;if(S[d]){var f=S[d];if(!f.c){var g=f.src,b=f.type,e=f.n,h=f.capture;g.removeEventListener?(g==u||!g.p)&&g.removeEventListener(b,e,h):g.detachEvent&&g.detachEvent(b in V?V[b]:V[b]="on"+b,e);g=g[x]||(g[x]=++y);if(U[g]){var e=U[g],i=A(e,f);0<=i&&z.splice.call(e,i,1);0==e.length&&delete U[g]}f.c=l;if(f=T[b][h][g])f.m=l,Na(b,h,g,f);delete S[d]}}}return a.handleEvent(c)}
function Ma(a,c){if(!S[a])return l;var d=S[a],f=d.type,g=T;if(!(f in g))return l;var g=g[f],b,e;if(!Fa){var h;if(!(h=c))a:{h=["window","event"];for(var i=u;b=h.shift();)if(i[b]!=p)i=i[b];else{h=p;break a}h=i}b=h;h=l in g;i=r in g;if(h){if(0>b.keyCode||b.returnValue!=j)return l;a:{var k=r;if(0==b.keyCode)try{b.keyCode=-1;break a}catch(n){k=l}if(k||b.returnValue==j)b.returnValue=l}}k=new R;k.d(b,this);b=l;try{if(h){for(var m=[],q=k.currentTarget;q;q=q.parentNode)m.push(q);e=g[l];e.b=e.a;for(var t=m.length-
1;!k.h&&0<=t&&e.b;t--)k.currentTarget=m[t],b&=Oa(e,m[t],f,l,k);if(i){e=g[r];e.b=e.a;for(t=0;!k.h&&t<m.length&&e.b;t++)k.currentTarget=m[t],b&=Oa(e,m[t],f,r,k)}}else b=Pa(d,k)}finally{m&&(m.length=0)}return b}f=new R(c,this);return b=Pa(d,f)};function Qa(a){return'<link href="www/main.css" media="all" rel="stylesheet" type="text/css"><link href="main.css" media="all" rel="stylesheet" type="text/css"><style>body {overflow'+("horizontal"==a?"-y":"-x")+":hidden;margin:0; padding:0;}</style>"}
function X(a){return'<ul id="map-list" class='+a+'>  <li id="icc/RM.22264F" class="map-item">    <div class="thumbnail-item">      <img src="http://www.oldmapsonline.org/img/75/icc/RM.22264F.jpg">    </div>  </li>  <li id="rumsey/3733.045" class="map-item">    <div class="thumbnail-item">      <img src="http://www.oldmapsonline.org/img/75/rumsey/3733.045.jpg">    </div>  </li>  <li id="rumsey/5023.048" class="map-item">    <div class="thumbnail-item">      <img src="http://www.oldmapsonline.org/img/75/rumsey/5023.048.jpg">    </div>  </li>  <li id="rumsey/1494.070" class="map-item">    <div class="thumbnail-item">      <img src="http://www.oldmapsonline.org/img/75/rumsey/1494.070.jpg">    </div>  </li>  <li id="rumsey/0436.040" class="map-item">    <div class="thumbnail-item">      <img src="http://www.oldmapsonline.org/img/75/rumsey/0436.040.jpg">    </div>  </li>  <li id="rumsey/2174.040" class="map-item">    <div class="thumbnail-item">      <img src="http://www.oldmapsonline.org/img/75/rumsey/2174.040.jpg">    </div>  </li>  <li id="rumsey/1012.062" class="map-item">    <div class="thumbnail-item">      <img src="http://www.oldmapsonline.org/img/75/rumsey/1012.062.jpg">    </div>  </li>  <li id="rumsey/0737.182" class="map-item">    <div class="thumbnail-item">      <img src="http://www.oldmapsonline.org/img/75/rumsey/0737.182.jpg">    </div>  </li>  <li id="rumsey/2612.063" class="map-item">    <div class="thumbnail-item">      <img src="http://www.oldmapsonline.org/img/75/rumsey/2612.063.jpg">    </div>  </li>  <li id="cuni/856696" class="map-item">    <div class="thumbnail-item">      <img src="http://www.oldmapsonline.org/img/75/cuni/856696.jpg">    </div>  </li>  <li id="rumsey/0507.056" class="map-item">    <div class="thumbnail-item">      <img src="http://www.oldmapsonline.org/img/75/rumsey/0507.056.jpg">    </div>  </li>  <li id="rumsey/0732.058" class="map-item">    <div class="thumbnail-item">      <img src="http://www.oldmapsonline.org/img/75/rumsey/0732.058.jpg">    </div>  </li>  <li id="cuni/1050401" class="map-item">    <div class="thumbnail-item">      <img src="http://www.oldmapsonline.org/img/75/cuni/1050401.jpg">    </div>  </li>  <li id="rumsey/4224.040" class="map-item">    <div class="thumbnail-item">      <img src="http://www.oldmapsonline.org/img/75/rumsey/4224.040.jpg">    </div>  </li>  <li id="cuni/1013187" class="map-item">    <div class="thumbnail-item">      <img src="http://www.oldmapsonline.org/img/75/cuni/1013187.jpg">    </div>  </li>  <li id="rumsey/2113.089" class="map-item">    <div class="thumbnail-item">      <img src="http://www.oldmapsonline.org/img/75/rumsey/2113.089.jpg">    </div>  </li>  <li id="rumsey/4765.096" class="map-item">    <div class="thumbnail-item">      <img src="http://www.oldmapsonline.org/img/75/rumsey/4765.096.jpg">    </div>  </li>  <li id="harvard/11539120" class="map-item">    <div class="thumbnail-item">      <img src="http://www.oldmapsonline.org/img/75/harvard/11539120.jpg">    </div>  </li>  <li id="rumsey/0737.175" class="map-item">    <div class="thumbnail-item">      <img src="http://www.oldmapsonline.org/img/75/rumsey/0737.175.jpg">    </div>  </li>  <li id="rumsey/4807.117" class="map-item">    <div class="thumbnail-item">      <img src="http://www.oldmapsonline.org/img/75/rumsey/4807.117.jpg">    </div>  </li>  <li id="rumsey/4613.025" class="map-item">    <div class="thumbnail-item">      <img src="http://www.oldmapsonline.org/img/75/rumsey/4613.025.jpg">    </div>  </li>  <li id="rumsey/2077.053" class="map-item">    <div class="thumbnail-item">      <img src="http://www.oldmapsonline.org/img/75/rumsey/2077.053.jpg">    </div>  </li>  <li id="rumsey/0036.025" class="map-item">    <div class="thumbnail-item">      <img src="http://www.oldmapsonline.org/img/75/rumsey/0036.025.jpg">    </div>  </li>  <li id="rumsey/2359.014" class="map-item">    <div class="thumbnail-item">      <img src="http://www.oldmapsonline.org/img/75/rumsey/2359.014.jpg">    </div>  </li>  <li id="cuni/1039359" class="map-item">    <div class="thumbnail-item">      <img src="http://www.oldmapsonline.org/img/75/cuni/1039359.jpg">    </div>  </li>  <li id="rumsey/2486.039" class="map-item">    <div class="thumbnail-item">      <img src="http://www.oldmapsonline.org/img/75/rumsey/2486.039.jpg">    </div>  </li>  <li id="rumsey/4757.062" class="map-item">    <div class="thumbnail-item">      <img src="http://www.oldmapsonline.org/img/75/rumsey/4757.062.jpg">    </div>  </li>  <li id="cuni/853850" class="map-item">    <div class="thumbnail-item">      <img src="http://www.oldmapsonline.org/img/75/cuni/853850.jpg">    </div>  </li></ul>'}
function Ra(){Ea(O("iframe-scroll-horizontal"),Qa("horizontal"),X("horizontal"));O("scroll-auto-horizontal").innerHTML=X("horizontal");O("touch-scroll-horizontal").innerHTML=X("horizontal");O("overthrow-horizontal").innerHTML=X("horizontal");Ea(O("iframe-scroll-vertical"),Qa("vertical"),X("vertical"));O("scroll-auto-vertical").innerHTML=X("vertical");O("touch-scroll-vertical").innerHTML=X("vertical");O("overthrow-vertical").innerHTML=X("vertical");La(O("switch"),"click",function(){Aa(O("horizontal"));
Aa(O("vertical"))})}var Y=["main"],Z=u;!(Y[0]in Z)&&Z.execScript&&Z.execScript("var "+Y[0]);for(var $;Y.length&&($=Y.shift());){var Sa;if(Sa=!Y.length)Sa=Ra!==j;Sa?Z[$]=Ra:Z=Z[$]?Z[$]:Z[$]={}};
