function Pk(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function xk(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var yE={exports:{}},ud={},vE={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fu=Symbol.for("react.element"),Nk=Symbol.for("react.portal"),Dk=Symbol.for("react.fragment"),bk=Symbol.for("react.strict_mode"),Ok=Symbol.for("react.profiler"),Lk=Symbol.for("react.provider"),Mk=Symbol.for("react.context"),Vk=Symbol.for("react.forward_ref"),$k=Symbol.for("react.suspense"),Fk=Symbol.for("react.memo"),Uk=Symbol.for("react.lazy"),x_=Symbol.iterator;function Bk(t){return t===null||typeof t!="object"?null:(t=x_&&t[x_]||t["@@iterator"],typeof t=="function"?t:null)}var _E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wE=Object.assign,EE={};function ia(t,e,n){this.props=t,this.context=e,this.refs=EE,this.updater=n||_E}ia.prototype.isReactComponent={};ia.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ia.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function TE(){}TE.prototype=ia.prototype;function zg(t,e,n){this.props=t,this.context=e,this.refs=EE,this.updater=n||_E}var Hg=zg.prototype=new TE;Hg.constructor=zg;wE(Hg,ia.prototype);Hg.isPureReactComponent=!0;var N_=Array.isArray,IE=Object.prototype.hasOwnProperty,qg={current:null},SE={key:!0,ref:!0,__self:!0,__source:!0};function RE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)IE.call(e,r)&&!SE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:fu,type:t,key:s,ref:o,props:i,_owner:qg.current}}function jk(t,e){return{$$typeof:fu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wg(t){return typeof t=="object"&&t!==null&&t.$$typeof===fu}function zk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var D_=/\/+/g;function zf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zk(""+t.key):e.toString(36)}function xc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case fu:case Nk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+zf(o,0):r,N_(i)?(n="",t!=null&&(n=t.replace(D_,"$&/")+"/"),xc(i,e,n,"",function(u){return u})):i!=null&&(Wg(i)&&(i=jk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(D_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",N_(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+zf(s,a);o+=xc(s,e,n,l,i)}else if(l=Bk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+zf(s,a++),o+=xc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Yu(t,e,n){if(t==null)return t;var r=[],i=0;return xc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Hk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var hn={current:null},Nc={transition:null},qk={ReactCurrentDispatcher:hn,ReactCurrentBatchConfig:Nc,ReactCurrentOwner:qg};function AE(){throw Error("act(...) is not supported in production builds of React.")}pe.Children={map:Yu,forEach:function(t,e,n){Yu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Yu(t,function(){e++}),e},toArray:function(t){return Yu(t,function(e){return e})||[]},only:function(t){if(!Wg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};pe.Component=ia;pe.Fragment=Dk;pe.Profiler=Ok;pe.PureComponent=zg;pe.StrictMode=bk;pe.Suspense=$k;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qk;pe.act=AE;pe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=wE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)IE.call(e,l)&&!SE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:fu,type:t.type,key:i,ref:s,props:r,_owner:o}};pe.createContext=function(t){return t={$$typeof:Mk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Lk,_context:t},t.Consumer=t};pe.createElement=RE;pe.createFactory=function(t){var e=RE.bind(null,t);return e.type=t,e};pe.createRef=function(){return{current:null}};pe.forwardRef=function(t){return{$$typeof:Vk,render:t}};pe.isValidElement=Wg;pe.lazy=function(t){return{$$typeof:Uk,_payload:{_status:-1,_result:t},_init:Hk}};pe.memo=function(t,e){return{$$typeof:Fk,type:t,compare:e===void 0?null:e}};pe.startTransition=function(t){var e=Nc.transition;Nc.transition={};try{t()}finally{Nc.transition=e}};pe.unstable_act=AE;pe.useCallback=function(t,e){return hn.current.useCallback(t,e)};pe.useContext=function(t){return hn.current.useContext(t)};pe.useDebugValue=function(){};pe.useDeferredValue=function(t){return hn.current.useDeferredValue(t)};pe.useEffect=function(t,e){return hn.current.useEffect(t,e)};pe.useId=function(){return hn.current.useId()};pe.useImperativeHandle=function(t,e,n){return hn.current.useImperativeHandle(t,e,n)};pe.useInsertionEffect=function(t,e){return hn.current.useInsertionEffect(t,e)};pe.useLayoutEffect=function(t,e){return hn.current.useLayoutEffect(t,e)};pe.useMemo=function(t,e){return hn.current.useMemo(t,e)};pe.useReducer=function(t,e,n){return hn.current.useReducer(t,e,n)};pe.useRef=function(t){return hn.current.useRef(t)};pe.useState=function(t){return hn.current.useState(t)};pe.useSyncExternalStore=function(t,e,n){return hn.current.useSyncExternalStore(t,e,n)};pe.useTransition=function(){return hn.current.useTransition()};pe.version="18.3.1";vE.exports=pe;var x=vE.exports;const ze=xk(x),Qp=Pk({__proto__:null,default:ze},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wk=x,Kk=Symbol.for("react.element"),Gk=Symbol.for("react.fragment"),Qk=Object.prototype.hasOwnProperty,Yk=Wk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xk={key:!0,ref:!0,__self:!0,__source:!0};function CE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Qk.call(e,r)&&!Xk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Kk,type:t,key:s,ref:o,props:i,_owner:Yk.current}}ud.Fragment=Gk;ud.jsx=CE;ud.jsxs=CE;yE.exports=ud;var wl=yE.exports;function Jk(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function Zk(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var eP=function(){function t(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Zk(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=Jk(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),Yt="-ms-",sh="-moz-",Re="-webkit-",kE="comm",Kg="rule",Gg="decl",tP="@import",PE="@keyframes",nP="@layer",rP=Math.abs,cd=String.fromCharCode,iP=Object.assign;function sP(t,e){return Mt(t,0)^45?(((e<<2^Mt(t,0))<<2^Mt(t,1))<<2^Mt(t,2))<<2^Mt(t,3):0}function xE(t){return t.trim()}function oP(t,e){return(t=e.exec(t))?t[0]:t}function Ae(t,e,n){return t.replace(e,n)}function Yp(t,e){return t.indexOf(e)}function Mt(t,e){return t.charCodeAt(e)|0}function El(t,e,n){return t.slice(e,n)}function vr(t){return t.length}function Qg(t){return t.length}function Xu(t,e){return e.push(t),t}function aP(t,e){return t.map(e).join("")}var hd=1,Lo=1,NE=0,En=0,ht=0,sa="";function dd(t,e,n,r,i,s,o){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:hd,column:Lo,length:o,return:""}}function Ta(t,e){return iP(dd("",null,null,"",null,null,0),t,{length:-t.length},e)}function lP(){return ht}function uP(){return ht=En>0?Mt(sa,--En):0,Lo--,ht===10&&(Lo=1,hd--),ht}function kn(){return ht=En<NE?Mt(sa,En++):0,Lo++,ht===10&&(Lo=1,hd++),ht}function Cr(){return Mt(sa,En)}function Dc(){return En}function pu(t,e){return El(sa,t,e)}function Tl(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function DE(t){return hd=Lo=1,NE=vr(sa=t),En=0,[]}function bE(t){return sa="",t}function bc(t){return xE(pu(En-1,Xp(t===91?t+2:t===40?t+1:t)))}function cP(t){for(;(ht=Cr())&&ht<33;)kn();return Tl(t)>2||Tl(ht)>3?"":" "}function hP(t,e){for(;--e&&kn()&&!(ht<48||ht>102||ht>57&&ht<65||ht>70&&ht<97););return pu(t,Dc()+(e<6&&Cr()==32&&kn()==32))}function Xp(t){for(;kn();)switch(ht){case t:return En;case 34:case 39:t!==34&&t!==39&&Xp(ht);break;case 40:t===41&&Xp(t);break;case 92:kn();break}return En}function dP(t,e){for(;kn()&&t+ht!==57;)if(t+ht===84&&Cr()===47)break;return"/*"+pu(e,En-1)+"*"+cd(t===47?t:kn())}function fP(t){for(;!Tl(Cr());)kn();return pu(t,En)}function pP(t){return bE(Oc("",null,null,null,[""],t=DE(t),0,[0],t))}function Oc(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,h=o,d=0,p=0,v=0,_=1,E=1,g=1,f=0,y="",m=i,T=s,S=r,I=y;E;)switch(v=f,f=kn()){case 40:if(v!=108&&Mt(I,h-1)==58){Yp(I+=Ae(bc(f),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:I+=bc(f);break;case 9:case 10:case 13:case 32:I+=cP(v);break;case 92:I+=hP(Dc()-1,7);continue;case 47:switch(Cr()){case 42:case 47:Xu(mP(dP(kn(),Dc()),e,n),l);break;default:I+="/"}break;case 123*_:a[u++]=vr(I)*g;case 125*_:case 59:case 0:switch(f){case 0:case 125:E=0;case 59+c:g==-1&&(I=Ae(I,/\f/g,"")),p>0&&vr(I)-h&&Xu(p>32?O_(I+";",r,n,h-1):O_(Ae(I," ","")+";",r,n,h-2),l);break;case 59:I+=";";default:if(Xu(S=b_(I,e,n,u,c,i,a,y,m=[],T=[],h),s),f===123)if(c===0)Oc(I,e,S,S,m,s,h,a,T);else switch(d===99&&Mt(I,3)===110?100:d){case 100:case 108:case 109:case 115:Oc(t,S,S,r&&Xu(b_(t,S,S,0,0,i,a,y,i,m=[],h),T),i,T,h,a,r?m:T);break;default:Oc(I,S,S,S,[""],T,0,a,T)}}u=c=p=0,_=g=1,y=I="",h=o;break;case 58:h=1+vr(I),p=v;default:if(_<1){if(f==123)--_;else if(f==125&&_++==0&&uP()==125)continue}switch(I+=cd(f),f*_){case 38:g=c>0?1:(I+="\f",-1);break;case 44:a[u++]=(vr(I)-1)*g,g=1;break;case 64:Cr()===45&&(I+=bc(kn())),d=Cr(),c=h=vr(y=I+=fP(Dc())),f++;break;case 45:v===45&&vr(I)==2&&(_=0)}}return s}function b_(t,e,n,r,i,s,o,a,l,u,c){for(var h=i-1,d=i===0?s:[""],p=Qg(d),v=0,_=0,E=0;v<r;++v)for(var g=0,f=El(t,h+1,h=rP(_=o[v])),y=t;g<p;++g)(y=xE(_>0?d[g]+" "+f:Ae(f,/&\f/g,d[g])))&&(l[E++]=y);return dd(t,e,n,i===0?Kg:a,l,u,c)}function mP(t,e,n){return dd(t,e,n,kE,cd(lP()),El(t,2,-2),0)}function O_(t,e,n,r){return dd(t,e,n,Gg,El(t,0,r),El(t,r+1,-1),r)}function Eo(t,e){for(var n="",r=Qg(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function gP(t,e,n,r){switch(t.type){case nP:if(t.children.length)break;case tP:case Gg:return t.return=t.return||t.value;case kE:return"";case PE:return t.return=t.value+"{"+Eo(t.children,r)+"}";case Kg:t.value=t.props.join(",")}return vr(n=Eo(t.children,r))?t.return=t.value+"{"+n+"}":""}function yP(t){var e=Qg(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function vP(t){return function(e){e.root||(e=e.return)&&t(e)}}function _P(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var wP=function(e,n,r){for(var i=0,s=0;i=s,s=Cr(),i===38&&s===12&&(n[r]=1),!Tl(s);)kn();return pu(e,En)},EP=function(e,n){var r=-1,i=44;do switch(Tl(i)){case 0:i===38&&Cr()===12&&(n[r]=1),e[r]+=wP(En-1,n,r);break;case 2:e[r]+=bc(i);break;case 4:if(i===44){e[++r]=Cr()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=cd(i)}while(i=kn());return e},TP=function(e,n){return bE(EP(DE(e),n))},L_=new WeakMap,IP=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!L_.get(r))&&!i){L_.set(e,!0);for(var s=[],o=TP(n,s),a=r.props,l=0,u=0;l<o.length;l++)for(var c=0;c<a.length;c++,u++)e.props[u]=s[l]?o[l].replace(/&\f/g,a[c]):a[c]+" "+o[l]}}},SP=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function OE(t,e){switch(sP(t,e)){case 5103:return Re+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Re+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Re+t+sh+t+Yt+t+t;case 6828:case 4268:return Re+t+Yt+t+t;case 6165:return Re+t+Yt+"flex-"+t+t;case 5187:return Re+t+Ae(t,/(\w+).+(:[^]+)/,Re+"box-$1$2"+Yt+"flex-$1$2")+t;case 5443:return Re+t+Yt+"flex-item-"+Ae(t,/flex-|-self/,"")+t;case 4675:return Re+t+Yt+"flex-line-pack"+Ae(t,/align-content|flex-|-self/,"")+t;case 5548:return Re+t+Yt+Ae(t,"shrink","negative")+t;case 5292:return Re+t+Yt+Ae(t,"basis","preferred-size")+t;case 6060:return Re+"box-"+Ae(t,"-grow","")+Re+t+Yt+Ae(t,"grow","positive")+t;case 4554:return Re+Ae(t,/([^-])(transform)/g,"$1"+Re+"$2")+t;case 6187:return Ae(Ae(Ae(t,/(zoom-|grab)/,Re+"$1"),/(image-set)/,Re+"$1"),t,"")+t;case 5495:case 3959:return Ae(t,/(image-set\([^]*)/,Re+"$1$`$1");case 4968:return Ae(Ae(t,/(.+:)(flex-)?(.*)/,Re+"box-pack:$3"+Yt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Re+t+t;case 4095:case 3583:case 4068:case 2532:return Ae(t,/(.+)-inline(.+)/,Re+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(vr(t)-1-e>6)switch(Mt(t,e+1)){case 109:if(Mt(t,e+4)!==45)break;case 102:return Ae(t,/(.+:)(.+)-([^]+)/,"$1"+Re+"$2-$3$1"+sh+(Mt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Yp(t,"stretch")?OE(Ae(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(Mt(t,e+1)!==115)break;case 6444:switch(Mt(t,vr(t)-3-(~Yp(t,"!important")&&10))){case 107:return Ae(t,":",":"+Re)+t;case 101:return Ae(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Re+(Mt(t,14)===45?"inline-":"")+"box$3$1"+Re+"$2$3$1"+Yt+"$2box$3")+t}break;case 5936:switch(Mt(t,e+11)){case 114:return Re+t+Yt+Ae(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Re+t+Yt+Ae(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Re+t+Yt+Ae(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return Re+t+Yt+t+t}return t}var RP=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case Gg:e.return=OE(e.value,e.length);break;case PE:return Eo([Ta(e,{value:Ae(e.value,"@","@"+Re)})],i);case Kg:if(e.length)return aP(e.props,function(s){switch(oP(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Eo([Ta(e,{props:[Ae(s,/:(read-\w+)/,":"+sh+"$1")]})],i);case"::placeholder":return Eo([Ta(e,{props:[Ae(s,/:(plac\w+)/,":"+Re+"input-$1")]}),Ta(e,{props:[Ae(s,/:(plac\w+)/,":"+sh+"$1")]}),Ta(e,{props:[Ae(s,/:(plac\w+)/,Yt+"input-$1")]})],i)}return""})}},AP=[RP],CP=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(_){var E=_.getAttribute("data-emotion");E.indexOf(" ")!==-1&&(document.head.appendChild(_),_.setAttribute("data-s",""))})}var i=e.stylisPlugins||AP,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(_){for(var E=_.getAttribute("data-emotion").split(" "),g=1;g<E.length;g++)s[E[g]]=!0;a.push(_)});var l,u=[IP,SP];{var c,h=[gP,vP(function(_){c.insert(_)})],d=yP(u.concat(i,h)),p=function(E){return Eo(pP(E),d)};l=function(E,g,f,y){c=f,p(E?E+"{"+g.styles+"}":g.styles),y&&(v.inserted[g.name]=!0)}}var v={key:n,sheet:new eP({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return v.sheet.hydrate(a),v},LE={exports:{}},De={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dt=typeof Symbol=="function"&&Symbol.for,Yg=Dt?Symbol.for("react.element"):60103,Xg=Dt?Symbol.for("react.portal"):60106,fd=Dt?Symbol.for("react.fragment"):60107,pd=Dt?Symbol.for("react.strict_mode"):60108,md=Dt?Symbol.for("react.profiler"):60114,gd=Dt?Symbol.for("react.provider"):60109,yd=Dt?Symbol.for("react.context"):60110,Jg=Dt?Symbol.for("react.async_mode"):60111,vd=Dt?Symbol.for("react.concurrent_mode"):60111,_d=Dt?Symbol.for("react.forward_ref"):60112,wd=Dt?Symbol.for("react.suspense"):60113,kP=Dt?Symbol.for("react.suspense_list"):60120,Ed=Dt?Symbol.for("react.memo"):60115,Td=Dt?Symbol.for("react.lazy"):60116,PP=Dt?Symbol.for("react.block"):60121,xP=Dt?Symbol.for("react.fundamental"):60117,NP=Dt?Symbol.for("react.responder"):60118,DP=Dt?Symbol.for("react.scope"):60119;function bn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Yg:switch(t=t.type,t){case Jg:case vd:case fd:case md:case pd:case wd:return t;default:switch(t=t&&t.$$typeof,t){case yd:case _d:case Td:case Ed:case gd:return t;default:return e}}case Xg:return e}}}function ME(t){return bn(t)===vd}De.AsyncMode=Jg;De.ConcurrentMode=vd;De.ContextConsumer=yd;De.ContextProvider=gd;De.Element=Yg;De.ForwardRef=_d;De.Fragment=fd;De.Lazy=Td;De.Memo=Ed;De.Portal=Xg;De.Profiler=md;De.StrictMode=pd;De.Suspense=wd;De.isAsyncMode=function(t){return ME(t)||bn(t)===Jg};De.isConcurrentMode=ME;De.isContextConsumer=function(t){return bn(t)===yd};De.isContextProvider=function(t){return bn(t)===gd};De.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Yg};De.isForwardRef=function(t){return bn(t)===_d};De.isFragment=function(t){return bn(t)===fd};De.isLazy=function(t){return bn(t)===Td};De.isMemo=function(t){return bn(t)===Ed};De.isPortal=function(t){return bn(t)===Xg};De.isProfiler=function(t){return bn(t)===md};De.isStrictMode=function(t){return bn(t)===pd};De.isSuspense=function(t){return bn(t)===wd};De.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===fd||t===vd||t===md||t===pd||t===wd||t===kP||typeof t=="object"&&t!==null&&(t.$$typeof===Td||t.$$typeof===Ed||t.$$typeof===gd||t.$$typeof===yd||t.$$typeof===_d||t.$$typeof===xP||t.$$typeof===NP||t.$$typeof===DP||t.$$typeof===PP)};De.typeOf=bn;LE.exports=De;var bP=LE.exports,VE=bP,OP={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},LP={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$E={};$E[VE.ForwardRef]=OP;$E[VE.Memo]=LP;var MP=!0;function VP(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var FE=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||MP===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},$P=function(e,n,r){FE(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+i:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function FP(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var UP={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},BP=/[A-Z]|^ms/g,jP=/_EMO_([^_]+?)_([^]*?)_EMO_/g,UE=function(e){return e.charCodeAt(1)===45},M_=function(e){return e!=null&&typeof e!="boolean"},Hf=_P(function(t){return UE(t)?t:t.replace(BP,"-$&").toLowerCase()}),V_=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(jP,function(r,i,s){return _r={name:i,styles:s,next:_r},i})}return UP[e]!==1&&!UE(e)&&typeof n=="number"&&n!==0?n+"px":n};function Il(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return _r={name:n.name,styles:n.styles,next:_r},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)_r={name:r.name,styles:r.styles,next:_r},r=r.next;var i=n.styles+";";return i}return zP(t,e,n)}case"function":{if(t!==void 0){var s=_r,o=n(t);return _r=s,Il(t,e,o)}break}}return n}function zP(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Il(t,e,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")M_(o)&&(r+=Hf(s)+":"+V_(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&e==null)for(var a=0;a<o.length;a++)M_(o[a])&&(r+=Hf(s)+":"+V_(s,o[a])+";");else{var l=Il(t,e,o);switch(s){case"animation":case"animationName":{r+=Hf(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}return r}var $_=/label:\s*([^\s;\n{]+)\s*(;|$)/g,_r,HP=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,s="";_r=void 0;var o=e[0];o==null||o.raw===void 0?(i=!1,s+=Il(r,n,o)):s+=o[0];for(var a=1;a<e.length;a++)s+=Il(r,n,e[a]),i&&(s+=o[a]);$_.lastIndex=0;for(var l="",u;(u=$_.exec(s))!==null;)l+="-"+u[1];var c=FP(s)+l;return{name:c,styles:s,next:_r}},qP=function(e){return e()},WP=Qp.useInsertionEffect?Qp.useInsertionEffect:!1,KP=WP||qP,Id={}.hasOwnProperty,BE=x.createContext(typeof HTMLElement<"u"?CP({key:"css"}):null);BE.Provider;var GP=function(e){return x.forwardRef(function(n,r){var i=x.useContext(BE);return e(n,i,r)})},QP=x.createContext({}),Jp="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",jE=function(e,n){var r={};for(var i in n)Id.call(n,i)&&(r[i]=n[i]);return r[Jp]=e,r},YP=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return FE(n,r,i),KP(function(){return $P(n,r,i)}),null},XP=GP(function(t,e,n){var r=t.css;typeof r=="string"&&e.registered[r]!==void 0&&(r=e.registered[r]);var i=t[Jp],s=[r],o="";typeof t.className=="string"?o=VP(e.registered,s,t.className):t.className!=null&&(o=t.className+" ");var a=HP(s,void 0,x.useContext(QP));o+=e.key+"-"+a.name;var l={};for(var u in t)Id.call(t,u)&&u!=="css"&&u!==Jp&&(l[u]=t[u]);return l.ref=n,l.className=o,x.createElement(x.Fragment,null,x.createElement(YP,{cache:e,serialized:a,isStringTag:typeof i=="string"}),x.createElement(i,l))}),zE=XP,HE=wl.Fragment;function P(t,e,n){return Id.call(e,"css")?wl.jsx(zE,jE(t,e),n):wl.jsx(t,e,n)}function Pe(t,e,n){return Id.call(e,"css")?wl.jsxs(zE,jE(t,e),n):wl.jsxs(t,e,n)}var Zp={},qE={exports:{}},On={},WE={exports:{}},KE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,W){var ee=$.length;$.push(W);e:for(;0<ee;){var Te=ee-1>>>1,Ie=$[Te];if(0<i(Ie,W))$[Te]=W,$[ee]=Ie,ee=Te;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var W=$[0],ee=$.pop();if(ee!==W){$[0]=ee;e:for(var Te=0,Ie=$.length,Xn=Ie>>>1;Te<Xn;){var _e=2*(Te+1)-1,Ht=$[_e],lt=_e+1,fn=$[lt];if(0>i(Ht,ee))lt<Ie&&0>i(fn,Ht)?($[Te]=fn,$[lt]=ee,Te=lt):($[Te]=Ht,$[_e]=ee,Te=_e);else if(lt<Ie&&0>i(fn,ee))$[Te]=fn,$[lt]=ee,Te=lt;else break e}}return W}function i($,W){var ee=$.sortIndex-W.sortIndex;return ee!==0?ee:$.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,v=!1,_=!1,E=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y($){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=$)r(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function m($){if(_=!1,y($),!v)if(n(l)!==null)v=!0,Le(T);else{var W=n(u);W!==null&&Me(m,W.startTime-$)}}function T($,W){v=!1,_&&(_=!1,g(D),D=-1),p=!0;var ee=d;try{for(y(W),h=n(l);h!==null&&(!(h.expirationTime>W)||$&&!ge());){var Te=h.callback;if(typeof Te=="function"){h.callback=null,d=h.priorityLevel;var Ie=Te(h.expirationTime<=W);W=t.unstable_now(),typeof Ie=="function"?h.callback=Ie:h===n(l)&&r(l),y(W)}else r(l);h=n(l)}if(h!==null)var Xn=!0;else{var _e=n(u);_e!==null&&Me(m,_e.startTime-W),Xn=!1}return Xn}finally{h=null,d=ee,p=!1}}var S=!1,I=null,D=-1,K=5,V=-1;function ge(){return!(t.unstable_now()-V<K)}function j(){if(I!==null){var $=t.unstable_now();V=$;var W=!0;try{W=I(!0,$)}finally{W?ne():(S=!1,I=null)}}else S=!1}var ne;if(typeof f=="function")ne=function(){f(j)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,Ee=he.port2;he.port1.onmessage=j,ne=function(){Ee.postMessage(null)}}else ne=function(){E(j,0)};function Le($){I=$,S||(S=!0,ne())}function Me($,W){D=E(function(){$(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,Le(T))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function($){switch(d){case 1:case 2:case 3:var W=3;break;default:W=d}var ee=d;d=W;try{return $()}finally{d=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,W){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var ee=d;d=$;try{return W()}finally{d=ee}},t.unstable_scheduleCallback=function($,W,ee){var Te=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?Te+ee:Te):ee=Te,$){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=ee+Ie,$={id:c++,callback:W,priorityLevel:$,startTime:ee,expirationTime:Ie,sortIndex:-1},ee>Te?($.sortIndex=ee,e(u,$),n(l)===null&&$===n(u)&&(_?(g(D),D=-1):_=!0,Me(m,ee-Te))):($.sortIndex=Ie,e(l,$),v||p||(v=!0,Le(T))),$},t.unstable_shouldYield=ge,t.unstable_wrapCallback=function($){var W=d;return function(){var ee=d;d=W;try{return $.apply(this,arguments)}finally{d=ee}}}})(KE);WE.exports=KE;var JP=WE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZP=x,Nn=JP;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var GE=new Set,Sl={};function Us(t,e){Mo(t,e),Mo(t+"Capture",e)}function Mo(t,e){for(Sl[t]=e,t=0;t<e.length;t++)GE.add(e[t])}var ei=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),em=Object.prototype.hasOwnProperty,ex=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,F_={},U_={};function tx(t){return em.call(U_,t)?!0:em.call(F_,t)?!1:ex.test(t)?U_[t]=!0:(F_[t]=!0,!1)}function nx(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function rx(t,e,n,r){if(e===null||typeof e>"u"||nx(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dn(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new dn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new dn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new dn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new dn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new dn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new dn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new dn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new dn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new dn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zg=/[\-:]([a-z])/g;function ey(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zg,ey);jt[e]=new dn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zg,ey);jt[e]=new dn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zg,ey);jt[e]=new dn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new dn(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new dn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new dn(t,1,!1,t.toLowerCase(),null,!0,!0)});function ty(t,e,n,r){var i=jt.hasOwnProperty(e)?jt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(rx(e,n,i,r)&&(n=null),r||i===null?tx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ui=ZP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ju=Symbol.for("react.element"),ro=Symbol.for("react.portal"),io=Symbol.for("react.fragment"),ny=Symbol.for("react.strict_mode"),tm=Symbol.for("react.profiler"),QE=Symbol.for("react.provider"),YE=Symbol.for("react.context"),ry=Symbol.for("react.forward_ref"),nm=Symbol.for("react.suspense"),rm=Symbol.for("react.suspense_list"),iy=Symbol.for("react.memo"),yi=Symbol.for("react.lazy"),XE=Symbol.for("react.offscreen"),B_=Symbol.iterator;function Ia(t){return t===null||typeof t!="object"?null:(t=B_&&t[B_]||t["@@iterator"],typeof t=="function"?t:null)}var Ze=Object.assign,qf;function Ua(t){if(qf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qf=e&&e[1]||""}return`
`+qf+t}var Wf=!1;function Kf(t,e){if(!t||Wf)return"";Wf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Wf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ua(t):""}function ix(t){switch(t.tag){case 5:return Ua(t.type);case 16:return Ua("Lazy");case 13:return Ua("Suspense");case 19:return Ua("SuspenseList");case 0:case 2:case 15:return t=Kf(t.type,!1),t;case 11:return t=Kf(t.type.render,!1),t;case 1:return t=Kf(t.type,!0),t;default:return""}}function im(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case io:return"Fragment";case ro:return"Portal";case tm:return"Profiler";case ny:return"StrictMode";case nm:return"Suspense";case rm:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case YE:return(t.displayName||"Context")+".Consumer";case QE:return(t._context.displayName||"Context")+".Provider";case ry:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case iy:return e=t.displayName||null,e!==null?e:im(t.type)||"Memo";case yi:e=t._payload,t=t._init;try{return im(t(e))}catch{}}return null}function sx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return im(e);case 8:return e===ny?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Bi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function JE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ox(t){var e=JE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Zu(t){t._valueTracker||(t._valueTracker=ox(t))}function ZE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=JE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function oh(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sm(t,e){var n=e.checked;return Ze({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function j_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Bi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function eT(t,e){e=e.checked,e!=null&&ty(t,"checked",e,!1)}function om(t,e){eT(t,e);var n=Bi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?am(t,e.type,n):e.hasOwnProperty("defaultValue")&&am(t,e.type,Bi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function z_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function am(t,e,n){(e!=="number"||oh(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ba=Array.isArray;function To(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Bi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function lm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return Ze({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function H_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(Ba(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Bi(n)}}function tT(t,e){var n=Bi(e.value),r=Bi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function q_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function nT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function um(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?nT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ec,rT=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ec=ec||document.createElement("div"),ec.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ec.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Rl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ja={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ax=["Webkit","ms","Moz","O"];Object.keys(Ja).forEach(function(t){ax.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ja[e]=Ja[t]})});function iT(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ja.hasOwnProperty(t)&&Ja[t]?(""+e).trim():e+"px"}function sT(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=iT(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var lx=Ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cm(t,e){if(e){if(lx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function hm(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dm=null;function sy(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fm=null,Io=null,So=null;function W_(t){if(t=yu(t)){if(typeof fm!="function")throw Error(L(280));var e=t.stateNode;e&&(e=kd(e),fm(t.stateNode,t.type,e))}}function oT(t){Io?So?So.push(t):So=[t]:Io=t}function aT(){if(Io){var t=Io,e=So;if(So=Io=null,W_(t),e)for(t=0;t<e.length;t++)W_(e[t])}}function lT(t,e){return t(e)}function uT(){}var Gf=!1;function cT(t,e,n){if(Gf)return t(e,n);Gf=!0;try{return lT(t,e,n)}finally{Gf=!1,(Io!==null||So!==null)&&(uT(),aT())}}function Al(t,e){var n=t.stateNode;if(n===null)return null;var r=kd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var pm=!1;if(ei)try{var Sa={};Object.defineProperty(Sa,"passive",{get:function(){pm=!0}}),window.addEventListener("test",Sa,Sa),window.removeEventListener("test",Sa,Sa)}catch{pm=!1}function ux(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Za=!1,ah=null,lh=!1,mm=null,cx={onError:function(t){Za=!0,ah=t}};function hx(t,e,n,r,i,s,o,a,l){Za=!1,ah=null,ux.apply(cx,arguments)}function dx(t,e,n,r,i,s,o,a,l){if(hx.apply(this,arguments),Za){if(Za){var u=ah;Za=!1,ah=null}else throw Error(L(198));lh||(lh=!0,mm=u)}}function Bs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function hT(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function K_(t){if(Bs(t)!==t)throw Error(L(188))}function fx(t){var e=t.alternate;if(!e){if(e=Bs(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return K_(i),t;if(s===r)return K_(i),e;s=s.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function dT(t){return t=fx(t),t!==null?fT(t):null}function fT(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=fT(t);if(e!==null)return e;t=t.sibling}return null}var pT=Nn.unstable_scheduleCallback,G_=Nn.unstable_cancelCallback,px=Nn.unstable_shouldYield,mx=Nn.unstable_requestPaint,at=Nn.unstable_now,gx=Nn.unstable_getCurrentPriorityLevel,oy=Nn.unstable_ImmediatePriority,mT=Nn.unstable_UserBlockingPriority,uh=Nn.unstable_NormalPriority,yx=Nn.unstable_LowPriority,gT=Nn.unstable_IdlePriority,Sd=null,kr=null;function vx(t){if(kr&&typeof kr.onCommitFiberRoot=="function")try{kr.onCommitFiberRoot(Sd,t,void 0,(t.current.flags&128)===128)}catch{}}var or=Math.clz32?Math.clz32:Ex,_x=Math.log,wx=Math.LN2;function Ex(t){return t>>>=0,t===0?32:31-(_x(t)/wx|0)|0}var tc=64,nc=4194304;function ja(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ch(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ja(a):(s&=o,s!==0&&(r=ja(s)))}else o=n&~i,o!==0?r=ja(o):s!==0&&(r=ja(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-or(e),i=1<<n,r|=t[n],e&=~i;return r}function Tx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ix(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-or(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Tx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function gm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function yT(){var t=tc;return tc<<=1,!(tc&4194240)&&(tc=64),t}function Qf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function mu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-or(e),t[e]=n}function Sx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-or(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ay(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-or(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var xe=0;function vT(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var _T,ly,wT,ET,TT,ym=!1,rc=[],Pi=null,xi=null,Ni=null,Cl=new Map,kl=new Map,_i=[],Rx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Q_(t,e){switch(t){case"focusin":case"focusout":Pi=null;break;case"dragenter":case"dragleave":xi=null;break;case"mouseover":case"mouseout":Ni=null;break;case"pointerover":case"pointerout":Cl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":kl.delete(e.pointerId)}}function Ra(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=yu(e),e!==null&&ly(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Ax(t,e,n,r,i){switch(e){case"focusin":return Pi=Ra(Pi,t,e,n,r,i),!0;case"dragenter":return xi=Ra(xi,t,e,n,r,i),!0;case"mouseover":return Ni=Ra(Ni,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Cl.set(s,Ra(Cl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,kl.set(s,Ra(kl.get(s)||null,t,e,n,r,i)),!0}return!1}function IT(t){var e=ls(t.target);if(e!==null){var n=Bs(e);if(n!==null){if(e=n.tag,e===13){if(e=hT(n),e!==null){t.blockedOn=e,TT(t.priority,function(){wT(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Lc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);dm=r,n.target.dispatchEvent(r),dm=null}else return e=yu(n),e!==null&&ly(e),t.blockedOn=n,!1;e.shift()}return!0}function Y_(t,e,n){Lc(t)&&n.delete(e)}function Cx(){ym=!1,Pi!==null&&Lc(Pi)&&(Pi=null),xi!==null&&Lc(xi)&&(xi=null),Ni!==null&&Lc(Ni)&&(Ni=null),Cl.forEach(Y_),kl.forEach(Y_)}function Aa(t,e){t.blockedOn===e&&(t.blockedOn=null,ym||(ym=!0,Nn.unstable_scheduleCallback(Nn.unstable_NormalPriority,Cx)))}function Pl(t){function e(i){return Aa(i,t)}if(0<rc.length){Aa(rc[0],t);for(var n=1;n<rc.length;n++){var r=rc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Pi!==null&&Aa(Pi,t),xi!==null&&Aa(xi,t),Ni!==null&&Aa(Ni,t),Cl.forEach(e),kl.forEach(e),n=0;n<_i.length;n++)r=_i[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<_i.length&&(n=_i[0],n.blockedOn===null);)IT(n),n.blockedOn===null&&_i.shift()}var Ro=ui.ReactCurrentBatchConfig,hh=!0;function kx(t,e,n,r){var i=xe,s=Ro.transition;Ro.transition=null;try{xe=1,uy(t,e,n,r)}finally{xe=i,Ro.transition=s}}function Px(t,e,n,r){var i=xe,s=Ro.transition;Ro.transition=null;try{xe=4,uy(t,e,n,r)}finally{xe=i,Ro.transition=s}}function uy(t,e,n,r){if(hh){var i=vm(t,e,n,r);if(i===null)sp(t,e,r,dh,n),Q_(t,r);else if(Ax(i,t,e,n,r))r.stopPropagation();else if(Q_(t,r),e&4&&-1<Rx.indexOf(t)){for(;i!==null;){var s=yu(i);if(s!==null&&_T(s),s=vm(t,e,n,r),s===null&&sp(t,e,r,dh,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else sp(t,e,r,null,n)}}var dh=null;function vm(t,e,n,r){if(dh=null,t=sy(r),t=ls(t),t!==null)if(e=Bs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=hT(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return dh=t,null}function ST(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gx()){case oy:return 1;case mT:return 4;case uh:case yx:return 16;case gT:return 536870912;default:return 16}default:return 16}}var Ri=null,cy=null,Mc=null;function RT(){if(Mc)return Mc;var t,e=cy,n=e.length,r,i="value"in Ri?Ri.value:Ri.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Mc=i.slice(t,1<r?1-r:void 0)}function Vc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ic(){return!0}function X_(){return!1}function Ln(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ic:X_,this.isPropagationStopped=X_,this}return Ze(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ic)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ic)},persist:function(){},isPersistent:ic}),e}var oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hy=Ln(oa),gu=Ze({},oa,{view:0,detail:0}),xx=Ln(gu),Yf,Xf,Ca,Rd=Ze({},gu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dy,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ca&&(Ca&&t.type==="mousemove"?(Yf=t.screenX-Ca.screenX,Xf=t.screenY-Ca.screenY):Xf=Yf=0,Ca=t),Yf)},movementY:function(t){return"movementY"in t?t.movementY:Xf}}),J_=Ln(Rd),Nx=Ze({},Rd,{dataTransfer:0}),Dx=Ln(Nx),bx=Ze({},gu,{relatedTarget:0}),Jf=Ln(bx),Ox=Ze({},oa,{animationName:0,elapsedTime:0,pseudoElement:0}),Lx=Ln(Ox),Mx=Ze({},oa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Vx=Ln(Mx),$x=Ze({},oa,{data:0}),Z_=Ln($x),Fx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ux={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Bx[t])?!!e[t]:!1}function dy(){return jx}var zx=Ze({},gu,{key:function(t){if(t.key){var e=Fx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ux[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dy,charCode:function(t){return t.type==="keypress"?Vc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Hx=Ln(zx),qx=Ze({},Rd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),e0=Ln(qx),Wx=Ze({},gu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dy}),Kx=Ln(Wx),Gx=Ze({},oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qx=Ln(Gx),Yx=Ze({},Rd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xx=Ln(Yx),Jx=[9,13,27,32],fy=ei&&"CompositionEvent"in window,el=null;ei&&"documentMode"in document&&(el=document.documentMode);var Zx=ei&&"TextEvent"in window&&!el,AT=ei&&(!fy||el&&8<el&&11>=el),t0=" ",n0=!1;function CT(t,e){switch(t){case"keyup":return Jx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var so=!1;function eN(t,e){switch(t){case"compositionend":return kT(e);case"keypress":return e.which!==32?null:(n0=!0,t0);case"textInput":return t=e.data,t===t0&&n0?null:t;default:return null}}function tN(t,e){if(so)return t==="compositionend"||!fy&&CT(t,e)?(t=RT(),Mc=cy=Ri=null,so=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return AT&&e.locale!=="ko"?null:e.data;default:return null}}var nN={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function r0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nN[t.type]:e==="textarea"}function PT(t,e,n,r){oT(r),e=fh(e,"onChange"),0<e.length&&(n=new hy("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var tl=null,xl=null;function rN(t){UT(t,0)}function Ad(t){var e=lo(t);if(ZE(e))return t}function iN(t,e){if(t==="change")return e}var xT=!1;if(ei){var Zf;if(ei){var ep="oninput"in document;if(!ep){var i0=document.createElement("div");i0.setAttribute("oninput","return;"),ep=typeof i0.oninput=="function"}Zf=ep}else Zf=!1;xT=Zf&&(!document.documentMode||9<document.documentMode)}function s0(){tl&&(tl.detachEvent("onpropertychange",NT),xl=tl=null)}function NT(t){if(t.propertyName==="value"&&Ad(xl)){var e=[];PT(e,xl,t,sy(t)),cT(rN,e)}}function sN(t,e,n){t==="focusin"?(s0(),tl=e,xl=n,tl.attachEvent("onpropertychange",NT)):t==="focusout"&&s0()}function oN(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ad(xl)}function aN(t,e){if(t==="click")return Ad(e)}function lN(t,e){if(t==="input"||t==="change")return Ad(e)}function uN(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var cr=typeof Object.is=="function"?Object.is:uN;function Nl(t,e){if(cr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!em.call(e,i)||!cr(t[i],e[i]))return!1}return!0}function o0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function a0(t,e){var n=o0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=o0(n)}}function DT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?DT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function bT(){for(var t=window,e=oh();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=oh(t.document)}return e}function py(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function cN(t){var e=bT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&DT(n.ownerDocument.documentElement,n)){if(r!==null&&py(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=a0(n,s);var o=a0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var hN=ei&&"documentMode"in document&&11>=document.documentMode,oo=null,_m=null,nl=null,wm=!1;function l0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wm||oo==null||oo!==oh(r)||(r=oo,"selectionStart"in r&&py(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),nl&&Nl(nl,r)||(nl=r,r=fh(_m,"onSelect"),0<r.length&&(e=new hy("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=oo)))}function sc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ao={animationend:sc("Animation","AnimationEnd"),animationiteration:sc("Animation","AnimationIteration"),animationstart:sc("Animation","AnimationStart"),transitionend:sc("Transition","TransitionEnd")},tp={},OT={};ei&&(OT=document.createElement("div").style,"AnimationEvent"in window||(delete ao.animationend.animation,delete ao.animationiteration.animation,delete ao.animationstart.animation),"TransitionEvent"in window||delete ao.transitionend.transition);function Cd(t){if(tp[t])return tp[t];if(!ao[t])return t;var e=ao[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in OT)return tp[t]=e[n];return t}var LT=Cd("animationend"),MT=Cd("animationiteration"),VT=Cd("animationstart"),$T=Cd("transitionend"),FT=new Map,u0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,e){FT.set(t,e),Us(e,[t])}for(var np=0;np<u0.length;np++){var rp=u0[np],dN=rp.toLowerCase(),fN=rp[0].toUpperCase()+rp.slice(1);Ki(dN,"on"+fN)}Ki(LT,"onAnimationEnd");Ki(MT,"onAnimationIteration");Ki(VT,"onAnimationStart");Ki("dblclick","onDoubleClick");Ki("focusin","onFocus");Ki("focusout","onBlur");Ki($T,"onTransitionEnd");Mo("onMouseEnter",["mouseout","mouseover"]);Mo("onMouseLeave",["mouseout","mouseover"]);Mo("onPointerEnter",["pointerout","pointerover"]);Mo("onPointerLeave",["pointerout","pointerover"]);Us("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Us("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Us("onBeforeInput",["compositionend","keypress","textInput","paste"]);Us("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Us("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Us("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pN=new Set("cancel close invalid load scroll toggle".split(" ").concat(za));function c0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,dx(r,e,void 0,t),t.currentTarget=null}function UT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;c0(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;c0(i,a,u),s=l}}}if(lh)throw t=mm,lh=!1,mm=null,t}function Ue(t,e){var n=e[Rm];n===void 0&&(n=e[Rm]=new Set);var r=t+"__bubble";n.has(r)||(BT(e,t,2,!1),n.add(r))}function ip(t,e,n){var r=0;e&&(r|=4),BT(n,t,r,e)}var oc="_reactListening"+Math.random().toString(36).slice(2);function Dl(t){if(!t[oc]){t[oc]=!0,GE.forEach(function(n){n!=="selectionchange"&&(pN.has(n)||ip(n,!1,t),ip(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[oc]||(e[oc]=!0,ip("selectionchange",!1,e))}}function BT(t,e,n,r){switch(ST(e)){case 1:var i=kx;break;case 4:i=Px;break;default:i=uy}n=i.bind(null,e,n,t),i=void 0,!pm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function sp(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ls(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}cT(function(){var u=s,c=sy(n),h=[];e:{var d=FT.get(t);if(d!==void 0){var p=hy,v=t;switch(t){case"keypress":if(Vc(n)===0)break e;case"keydown":case"keyup":p=Hx;break;case"focusin":v="focus",p=Jf;break;case"focusout":v="blur",p=Jf;break;case"beforeblur":case"afterblur":p=Jf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=J_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Dx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Kx;break;case LT:case MT:case VT:p=Lx;break;case $T:p=Qx;break;case"scroll":p=xx;break;case"wheel":p=Xx;break;case"copy":case"cut":case"paste":p=Vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=e0}var _=(e&4)!==0,E=!_&&t==="scroll",g=_?d!==null?d+"Capture":null:d;_=[];for(var f=u,y;f!==null;){y=f;var m=y.stateNode;if(y.tag===5&&m!==null&&(y=m,g!==null&&(m=Al(f,g),m!=null&&_.push(bl(f,m,y)))),E)break;f=f.return}0<_.length&&(d=new p(d,v,null,n,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==dm&&(v=n.relatedTarget||n.fromElement)&&(ls(v)||v[ti]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?ls(v):null,v!==null&&(E=Bs(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(_=J_,m="onMouseLeave",g="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=e0,m="onPointerLeave",g="onPointerEnter",f="pointer"),E=p==null?d:lo(p),y=v==null?d:lo(v),d=new _(m,f+"leave",p,n,c),d.target=E,d.relatedTarget=y,m=null,ls(c)===u&&(_=new _(g,f+"enter",v,n,c),_.target=y,_.relatedTarget=E,m=_),E=m,p&&v)t:{for(_=p,g=v,f=0,y=_;y;y=Qs(y))f++;for(y=0,m=g;m;m=Qs(m))y++;for(;0<f-y;)_=Qs(_),f--;for(;0<y-f;)g=Qs(g),y--;for(;f--;){if(_===g||g!==null&&_===g.alternate)break t;_=Qs(_),g=Qs(g)}_=null}else _=null;p!==null&&h0(h,d,p,_,!1),v!==null&&E!==null&&h0(h,E,v,_,!0)}}e:{if(d=u?lo(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=iN;else if(r0(d))if(xT)T=lN;else{T=oN;var S=sN}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=aN);if(T&&(T=T(t,u))){PT(h,T,n,c);break e}S&&S(t,d,u),t==="focusout"&&(S=d._wrapperState)&&S.controlled&&d.type==="number"&&am(d,"number",d.value)}switch(S=u?lo(u):window,t){case"focusin":(r0(S)||S.contentEditable==="true")&&(oo=S,_m=u,nl=null);break;case"focusout":nl=_m=oo=null;break;case"mousedown":wm=!0;break;case"contextmenu":case"mouseup":case"dragend":wm=!1,l0(h,n,c);break;case"selectionchange":if(hN)break;case"keydown":case"keyup":l0(h,n,c)}var I;if(fy)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else so?CT(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(AT&&n.locale!=="ko"&&(so||D!=="onCompositionStart"?D==="onCompositionEnd"&&so&&(I=RT()):(Ri=c,cy="value"in Ri?Ri.value:Ri.textContent,so=!0)),S=fh(u,D),0<S.length&&(D=new Z_(D,t,null,n,c),h.push({event:D,listeners:S}),I?D.data=I:(I=kT(n),I!==null&&(D.data=I)))),(I=Zx?eN(t,n):tN(t,n))&&(u=fh(u,"onBeforeInput"),0<u.length&&(c=new Z_("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=I))}UT(h,e)})}function bl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fh(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Al(t,n),s!=null&&r.unshift(bl(t,s,i)),s=Al(t,e),s!=null&&r.push(bl(t,s,i))),t=t.return}return r}function Qs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function h0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Al(n,s),l!=null&&o.unshift(bl(n,l,a))):i||(l=Al(n,s),l!=null&&o.push(bl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var mN=/\r\n?/g,gN=/\u0000|\uFFFD/g;function d0(t){return(typeof t=="string"?t:""+t).replace(mN,`
`).replace(gN,"")}function ac(t,e,n){if(e=d0(e),d0(t)!==e&&n)throw Error(L(425))}function ph(){}var Em=null,Tm=null;function Im(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sm=typeof setTimeout=="function"?setTimeout:void 0,yN=typeof clearTimeout=="function"?clearTimeout:void 0,f0=typeof Promise=="function"?Promise:void 0,vN=typeof queueMicrotask=="function"?queueMicrotask:typeof f0<"u"?function(t){return f0.resolve(null).then(t).catch(_N)}:Sm;function _N(t){setTimeout(function(){throw t})}function op(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Pl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Pl(e)}function Di(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function p0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var aa=Math.random().toString(36).slice(2),Er="__reactFiber$"+aa,Ol="__reactProps$"+aa,ti="__reactContainer$"+aa,Rm="__reactEvents$"+aa,wN="__reactListeners$"+aa,EN="__reactHandles$"+aa;function ls(t){var e=t[Er];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ti]||n[Er]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=p0(t);t!==null;){if(n=t[Er])return n;t=p0(t)}return e}t=n,n=t.parentNode}return null}function yu(t){return t=t[Er]||t[ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function lo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function kd(t){return t[Ol]||null}var Am=[],uo=-1;function Gi(t){return{current:t}}function We(t){0>uo||(t.current=Am[uo],Am[uo]=null,uo--)}function $e(t,e){uo++,Am[uo]=t.current,t.current=e}var ji={},nn=Gi(ji),yn=Gi(!1),Is=ji;function Vo(t,e){var n=t.type.contextTypes;if(!n)return ji;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function vn(t){return t=t.childContextTypes,t!=null}function mh(){We(yn),We(nn)}function m0(t,e,n){if(nn.current!==ji)throw Error(L(168));$e(nn,e),$e(yn,n)}function jT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(L(108,sx(t)||"Unknown",i));return Ze({},n,r)}function gh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ji,Is=nn.current,$e(nn,t),$e(yn,yn.current),!0}function g0(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=jT(t,e,Is),r.__reactInternalMemoizedMergedChildContext=t,We(yn),We(nn),$e(nn,t)):We(yn),$e(yn,n)}var Br=null,Pd=!1,ap=!1;function zT(t){Br===null?Br=[t]:Br.push(t)}function TN(t){Pd=!0,zT(t)}function Qi(){if(!ap&&Br!==null){ap=!0;var t=0,e=xe;try{var n=Br;for(xe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Br=null,Pd=!1}catch(i){throw Br!==null&&(Br=Br.slice(t+1)),pT(oy,Qi),i}finally{xe=e,ap=!1}}return null}var co=[],ho=0,yh=null,vh=0,Un=[],Bn=0,Ss=null,Hr=1,qr="";function ss(t,e){co[ho++]=vh,co[ho++]=yh,yh=t,vh=e}function HT(t,e,n){Un[Bn++]=Hr,Un[Bn++]=qr,Un[Bn++]=Ss,Ss=t;var r=Hr;t=qr;var i=32-or(r)-1;r&=~(1<<i),n+=1;var s=32-or(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Hr=1<<32-or(e)+i|n<<i|r,qr=s+t}else Hr=1<<s|n<<i|r,qr=t}function my(t){t.return!==null&&(ss(t,1),HT(t,1,0))}function gy(t){for(;t===yh;)yh=co[--ho],co[ho]=null,vh=co[--ho],co[ho]=null;for(;t===Ss;)Ss=Un[--Bn],Un[Bn]=null,qr=Un[--Bn],Un[Bn]=null,Hr=Un[--Bn],Un[Bn]=null}var Pn=null,Rn=null,Qe=!1,rr=null;function qT(t,e){var n=zn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function y0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pn=t,Rn=Di(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pn=t,Rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ss!==null?{id:Hr,overflow:qr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=zn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pn=t,Rn=null,!0):!1;default:return!1}}function Cm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function km(t){if(Qe){var e=Rn;if(e){var n=e;if(!y0(t,e)){if(Cm(t))throw Error(L(418));e=Di(n.nextSibling);var r=Pn;e&&y0(t,e)?qT(r,n):(t.flags=t.flags&-4097|2,Qe=!1,Pn=t)}}else{if(Cm(t))throw Error(L(418));t.flags=t.flags&-4097|2,Qe=!1,Pn=t}}}function v0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pn=t}function lc(t){if(t!==Pn)return!1;if(!Qe)return v0(t),Qe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Im(t.type,t.memoizedProps)),e&&(e=Rn)){if(Cm(t))throw WT(),Error(L(418));for(;e;)qT(t,e),e=Di(e.nextSibling)}if(v0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rn=Di(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rn=null}}else Rn=Pn?Di(t.stateNode.nextSibling):null;return!0}function WT(){for(var t=Rn;t;)t=Di(t.nextSibling)}function $o(){Rn=Pn=null,Qe=!1}function yy(t){rr===null?rr=[t]:rr.push(t)}var IN=ui.ReactCurrentBatchConfig;function ka(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function uc(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _0(t){var e=t._init;return e(t._payload)}function KT(t){function e(g,f){if(t){var y=g.deletions;y===null?(g.deletions=[f],g.flags|=16):y.push(f)}}function n(g,f){if(!t)return null;for(;f!==null;)e(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function i(g,f){return g=Mi(g,f),g.index=0,g.sibling=null,g}function s(g,f,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<f?(g.flags|=2,f):y):(g.flags|=2,f)):(g.flags|=1048576,f)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,f,y,m){return f===null||f.tag!==6?(f=pp(y,g.mode,m),f.return=g,f):(f=i(f,y),f.return=g,f)}function l(g,f,y,m){var T=y.type;return T===io?c(g,f,y.props.children,m,y.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===yi&&_0(T)===f.type)?(m=i(f,y.props),m.ref=ka(g,f,y),m.return=g,m):(m=Hc(y.type,y.key,y.props,null,g.mode,m),m.ref=ka(g,f,y),m.return=g,m)}function u(g,f,y,m){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=mp(y,g.mode,m),f.return=g,f):(f=i(f,y.children||[]),f.return=g,f)}function c(g,f,y,m,T){return f===null||f.tag!==7?(f=_s(y,g.mode,m,T),f.return=g,f):(f=i(f,y),f.return=g,f)}function h(g,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=pp(""+f,g.mode,y),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ju:return y=Hc(f.type,f.key,f.props,null,g.mode,y),y.ref=ka(g,null,f),y.return=g,y;case ro:return f=mp(f,g.mode,y),f.return=g,f;case yi:var m=f._init;return h(g,m(f._payload),y)}if(Ba(f)||Ia(f))return f=_s(f,g.mode,y,null),f.return=g,f;uc(g,f)}return null}function d(g,f,y,m){var T=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(g,f,""+y,m);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ju:return y.key===T?l(g,f,y,m):null;case ro:return y.key===T?u(g,f,y,m):null;case yi:return T=y._init,d(g,f,T(y._payload),m)}if(Ba(y)||Ia(y))return T!==null?null:c(g,f,y,m,null);uc(g,y)}return null}function p(g,f,y,m,T){if(typeof m=="string"&&m!==""||typeof m=="number")return g=g.get(y)||null,a(f,g,""+m,T);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ju:return g=g.get(m.key===null?y:m.key)||null,l(f,g,m,T);case ro:return g=g.get(m.key===null?y:m.key)||null,u(f,g,m,T);case yi:var S=m._init;return p(g,f,y,S(m._payload),T)}if(Ba(m)||Ia(m))return g=g.get(y)||null,c(f,g,m,T,null);uc(f,m)}return null}function v(g,f,y,m){for(var T=null,S=null,I=f,D=f=0,K=null;I!==null&&D<y.length;D++){I.index>D?(K=I,I=null):K=I.sibling;var V=d(g,I,y[D],m);if(V===null){I===null&&(I=K);break}t&&I&&V.alternate===null&&e(g,I),f=s(V,f,D),S===null?T=V:S.sibling=V,S=V,I=K}if(D===y.length)return n(g,I),Qe&&ss(g,D),T;if(I===null){for(;D<y.length;D++)I=h(g,y[D],m),I!==null&&(f=s(I,f,D),S===null?T=I:S.sibling=I,S=I);return Qe&&ss(g,D),T}for(I=r(g,I);D<y.length;D++)K=p(I,g,D,y[D],m),K!==null&&(t&&K.alternate!==null&&I.delete(K.key===null?D:K.key),f=s(K,f,D),S===null?T=K:S.sibling=K,S=K);return t&&I.forEach(function(ge){return e(g,ge)}),Qe&&ss(g,D),T}function _(g,f,y,m){var T=Ia(y);if(typeof T!="function")throw Error(L(150));if(y=T.call(y),y==null)throw Error(L(151));for(var S=T=null,I=f,D=f=0,K=null,V=y.next();I!==null&&!V.done;D++,V=y.next()){I.index>D?(K=I,I=null):K=I.sibling;var ge=d(g,I,V.value,m);if(ge===null){I===null&&(I=K);break}t&&I&&ge.alternate===null&&e(g,I),f=s(ge,f,D),S===null?T=ge:S.sibling=ge,S=ge,I=K}if(V.done)return n(g,I),Qe&&ss(g,D),T;if(I===null){for(;!V.done;D++,V=y.next())V=h(g,V.value,m),V!==null&&(f=s(V,f,D),S===null?T=V:S.sibling=V,S=V);return Qe&&ss(g,D),T}for(I=r(g,I);!V.done;D++,V=y.next())V=p(I,g,D,V.value,m),V!==null&&(t&&V.alternate!==null&&I.delete(V.key===null?D:V.key),f=s(V,f,D),S===null?T=V:S.sibling=V,S=V);return t&&I.forEach(function(j){return e(g,j)}),Qe&&ss(g,D),T}function E(g,f,y,m){if(typeof y=="object"&&y!==null&&y.type===io&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ju:e:{for(var T=y.key,S=f;S!==null;){if(S.key===T){if(T=y.type,T===io){if(S.tag===7){n(g,S.sibling),f=i(S,y.props.children),f.return=g,g=f;break e}}else if(S.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===yi&&_0(T)===S.type){n(g,S.sibling),f=i(S,y.props),f.ref=ka(g,S,y),f.return=g,g=f;break e}n(g,S);break}else e(g,S);S=S.sibling}y.type===io?(f=_s(y.props.children,g.mode,m,y.key),f.return=g,g=f):(m=Hc(y.type,y.key,y.props,null,g.mode,m),m.ref=ka(g,f,y),m.return=g,g=m)}return o(g);case ro:e:{for(S=y.key;f!==null;){if(f.key===S)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(g,f.sibling),f=i(f,y.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else e(g,f);f=f.sibling}f=mp(y,g.mode,m),f.return=g,g=f}return o(g);case yi:return S=y._init,E(g,f,S(y._payload),m)}if(Ba(y))return v(g,f,y,m);if(Ia(y))return _(g,f,y,m);uc(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(g,f.sibling),f=i(f,y),f.return=g,g=f):(n(g,f),f=pp(y,g.mode,m),f.return=g,g=f),o(g)):n(g,f)}return E}var Fo=KT(!0),GT=KT(!1),_h=Gi(null),wh=null,fo=null,vy=null;function _y(){vy=fo=wh=null}function wy(t){var e=_h.current;We(_h),t._currentValue=e}function Pm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ao(t,e){wh=t,vy=fo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gn=!0),t.firstContext=null)}function qn(t){var e=t._currentValue;if(vy!==t)if(t={context:t,memoizedValue:e,next:null},fo===null){if(wh===null)throw Error(L(308));fo=t,wh.dependencies={lanes:0,firstContext:t}}else fo=fo.next=t;return e}var us=null;function Ey(t){us===null?us=[t]:us.push(t)}function QT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ey(e)):(n.next=i.next,i.next=n),e.interleaved=n,ni(t,r)}function ni(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var vi=!1;function Ty(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function YT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function bi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,we&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ni(t,n)}return i=r.interleaved,i===null?(e.next=e,Ey(r)):(e.next=i.next,i.next=e),r.interleaved=e,ni(t,n)}function $c(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ay(t,n)}}function w0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Eh(t,e,n,r){var i=t.updateQueue;vi=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(d=e,p=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){h=v.call(p,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,d=typeof v=="function"?v.call(p,h,d):v,d==null)break e;h=Ze({},h,d);break e;case 2:vi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);As|=o,t.lanes=o,t.memoizedState=h}}function E0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var vu={},Pr=Gi(vu),Ll=Gi(vu),Ml=Gi(vu);function cs(t){if(t===vu)throw Error(L(174));return t}function Iy(t,e){switch($e(Ml,e),$e(Ll,t),$e(Pr,vu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:um(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=um(e,t)}We(Pr),$e(Pr,e)}function Uo(){We(Pr),We(Ll),We(Ml)}function XT(t){cs(Ml.current);var e=cs(Pr.current),n=um(e,t.type);e!==n&&($e(Ll,t),$e(Pr,n))}function Sy(t){Ll.current===t&&(We(Pr),We(Ll))}var Xe=Gi(0);function Th(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var lp=[];function Ry(){for(var t=0;t<lp.length;t++)lp[t]._workInProgressVersionPrimary=null;lp.length=0}var Fc=ui.ReactCurrentDispatcher,up=ui.ReactCurrentBatchConfig,Rs=0,Je=null,wt=null,Ct=null,Ih=!1,rl=!1,Vl=0,SN=0;function Kt(){throw Error(L(321))}function Ay(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!cr(t[n],e[n]))return!1;return!0}function Cy(t,e,n,r,i,s){if(Rs=s,Je=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fc.current=t===null||t.memoizedState===null?kN:PN,t=n(r,i),rl){s=0;do{if(rl=!1,Vl=0,25<=s)throw Error(L(301));s+=1,Ct=wt=null,e.updateQueue=null,Fc.current=xN,t=n(r,i)}while(rl)}if(Fc.current=Sh,e=wt!==null&&wt.next!==null,Rs=0,Ct=wt=Je=null,Ih=!1,e)throw Error(L(300));return t}function ky(){var t=Vl!==0;return Vl=0,t}function yr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?Je.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function Wn(){if(wt===null){var t=Je.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Ct===null?Je.memoizedState:Ct.next;if(e!==null)Ct=e,wt=t;else{if(t===null)throw Error(L(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Ct===null?Je.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function $l(t,e){return typeof e=="function"?e(t):e}function cp(t){var e=Wn(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=wt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Rs&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Je.lanes|=c,As|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,cr(r,e.memoizedState)||(gn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Je.lanes|=s,As|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function hp(t){var e=Wn(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);cr(s,e.memoizedState)||(gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function JT(){}function ZT(t,e){var n=Je,r=Wn(),i=e(),s=!cr(r.memoizedState,i);if(s&&(r.memoizedState=i,gn=!0),r=r.queue,Py(nI.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,Fl(9,tI.bind(null,n,r,i,e),void 0,null),xt===null)throw Error(L(349));Rs&30||eI(n,e,i)}return i}function eI(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Je.updateQueue,e===null?(e={lastEffect:null,stores:null},Je.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function tI(t,e,n,r){e.value=n,e.getSnapshot=r,rI(e)&&iI(t)}function nI(t,e,n){return n(function(){rI(e)&&iI(t)})}function rI(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!cr(t,n)}catch{return!0}}function iI(t){var e=ni(t,1);e!==null&&ar(e,t,1,-1)}function T0(t){var e=yr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$l,lastRenderedState:t},e.queue=t,t=t.dispatch=CN.bind(null,Je,t),[e.memoizedState,t]}function Fl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Je.updateQueue,e===null?(e={lastEffect:null,stores:null},Je.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function sI(){return Wn().memoizedState}function Uc(t,e,n,r){var i=yr();Je.flags|=t,i.memoizedState=Fl(1|e,n,void 0,r===void 0?null:r)}function xd(t,e,n,r){var i=Wn();r=r===void 0?null:r;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,r!==null&&Ay(r,o.deps)){i.memoizedState=Fl(e,n,s,r);return}}Je.flags|=t,i.memoizedState=Fl(1|e,n,s,r)}function I0(t,e){return Uc(8390656,8,t,e)}function Py(t,e){return xd(2048,8,t,e)}function oI(t,e){return xd(4,2,t,e)}function aI(t,e){return xd(4,4,t,e)}function lI(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function uI(t,e,n){return n=n!=null?n.concat([t]):null,xd(4,4,lI.bind(null,e,t),n)}function xy(){}function cI(t,e){var n=Wn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ay(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function hI(t,e){var n=Wn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ay(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function dI(t,e,n){return Rs&21?(cr(n,e)||(n=yT(),Je.lanes|=n,As|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gn=!0),t.memoizedState=n)}function RN(t,e){var n=xe;xe=n!==0&&4>n?n:4,t(!0);var r=up.transition;up.transition={};try{t(!1),e()}finally{xe=n,up.transition=r}}function fI(){return Wn().memoizedState}function AN(t,e,n){var r=Li(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},pI(t))mI(e,n);else if(n=QT(t,e,n,r),n!==null){var i=un();ar(n,t,r,i),gI(n,e,r)}}function CN(t,e,n){var r=Li(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(pI(t))mI(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,cr(a,o)){var l=e.interleaved;l===null?(i.next=i,Ey(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=QT(t,e,i,r),n!==null&&(i=un(),ar(n,t,r,i),gI(n,e,r))}}function pI(t){var e=t.alternate;return t===Je||e!==null&&e===Je}function mI(t,e){rl=Ih=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function gI(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ay(t,n)}}var Sh={readContext:qn,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},kN={readContext:qn,useCallback:function(t,e){return yr().memoizedState=[t,e===void 0?null:e],t},useContext:qn,useEffect:I0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Uc(4194308,4,lI.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Uc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Uc(4,2,t,e)},useMemo:function(t,e){var n=yr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=yr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=AN.bind(null,Je,t),[r.memoizedState,t]},useRef:function(t){var e=yr();return t={current:t},e.memoizedState=t},useState:T0,useDebugValue:xy,useDeferredValue:function(t){return yr().memoizedState=t},useTransition:function(){var t=T0(!1),e=t[0];return t=RN.bind(null,t[1]),yr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Je,i=yr();if(Qe){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),xt===null)throw Error(L(349));Rs&30||eI(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,I0(nI.bind(null,r,s,t),[t]),r.flags|=2048,Fl(9,tI.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=yr(),e=xt.identifierPrefix;if(Qe){var n=qr,r=Hr;n=(r&~(1<<32-or(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Vl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=SN++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},PN={readContext:qn,useCallback:cI,useContext:qn,useEffect:Py,useImperativeHandle:uI,useInsertionEffect:oI,useLayoutEffect:aI,useMemo:hI,useReducer:cp,useRef:sI,useState:function(){return cp($l)},useDebugValue:xy,useDeferredValue:function(t){var e=Wn();return dI(e,wt.memoizedState,t)},useTransition:function(){var t=cp($l)[0],e=Wn().memoizedState;return[t,e]},useMutableSource:JT,useSyncExternalStore:ZT,useId:fI,unstable_isNewReconciler:!1},xN={readContext:qn,useCallback:cI,useContext:qn,useEffect:Py,useImperativeHandle:uI,useInsertionEffect:oI,useLayoutEffect:aI,useMemo:hI,useReducer:hp,useRef:sI,useState:function(){return hp($l)},useDebugValue:xy,useDeferredValue:function(t){var e=Wn();return wt===null?e.memoizedState=t:dI(e,wt.memoizedState,t)},useTransition:function(){var t=hp($l)[0],e=Wn().memoizedState;return[t,e]},useMutableSource:JT,useSyncExternalStore:ZT,useId:fI,unstable_isNewReconciler:!1};function er(t,e){if(t&&t.defaultProps){e=Ze({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function xm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ze({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nd={isMounted:function(t){return(t=t._reactInternals)?Bs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=un(),i=Li(t),s=Yr(r,i);s.payload=e,n!=null&&(s.callback=n),e=bi(t,s,i),e!==null&&(ar(e,t,i,r),$c(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=un(),i=Li(t),s=Yr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=bi(t,s,i),e!==null&&(ar(e,t,i,r),$c(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=un(),r=Li(t),i=Yr(n,r);i.tag=2,e!=null&&(i.callback=e),e=bi(t,i,r),e!==null&&(ar(e,t,r,n),$c(e,t,r))}};function S0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Nl(n,r)||!Nl(i,s):!0}function yI(t,e,n){var r=!1,i=ji,s=e.contextType;return typeof s=="object"&&s!==null?s=qn(s):(i=vn(e)?Is:nn.current,r=e.contextTypes,s=(r=r!=null)?Vo(t,i):ji),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function R0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Nd.enqueueReplaceState(e,e.state,null)}function Nm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ty(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=qn(s):(s=vn(e)?Is:nn.current,i.context=Vo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(xm(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Nd.enqueueReplaceState(i,i.state,null),Eh(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Bo(t,e){try{var n="",r=e;do n+=ix(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function dp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Dm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var NN=typeof WeakMap=="function"?WeakMap:Map;function vI(t,e,n){n=Yr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ah||(Ah=!0,jm=r),Dm(t,e)},n}function _I(t,e,n){n=Yr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Dm(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Dm(t,e),typeof r!="function"&&(Oi===null?Oi=new Set([this]):Oi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function A0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new NN;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=qN.bind(null,t,e,n),e.then(t,t))}function C0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function k0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Yr(-1,1),e.tag=2,bi(n,e,1))),n.lanes|=1),t)}var DN=ui.ReactCurrentOwner,gn=!1;function on(t,e,n,r){e.child=t===null?GT(e,null,n,r):Fo(e,t.child,n,r)}function P0(t,e,n,r,i){n=n.render;var s=e.ref;return Ao(e,i),r=Cy(t,e,n,r,s,i),n=ky(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ri(t,e,i)):(Qe&&n&&my(e),e.flags|=1,on(t,e,r,i),e.child)}function x0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!$y(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,wI(t,e,s,r,i)):(t=Hc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Nl,n(o,r)&&t.ref===e.ref)return ri(t,e,i)}return e.flags|=1,t=Mi(s,r),t.ref=e.ref,t.return=e,e.child=t}function wI(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Nl(s,r)&&t.ref===e.ref)if(gn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(gn=!0);else return e.lanes=t.lanes,ri(t,e,i)}return bm(t,e,n,r,i)}function EI(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(mo,Sn),Sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,$e(mo,Sn),Sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,$e(mo,Sn),Sn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,$e(mo,Sn),Sn|=r;return on(t,e,i,n),e.child}function TI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function bm(t,e,n,r,i){var s=vn(n)?Is:nn.current;return s=Vo(e,s),Ao(e,i),n=Cy(t,e,n,r,s,i),r=ky(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ri(t,e,i)):(Qe&&r&&my(e),e.flags|=1,on(t,e,n,i),e.child)}function N0(t,e,n,r,i){if(vn(n)){var s=!0;gh(e)}else s=!1;if(Ao(e,i),e.stateNode===null)Bc(t,e),yI(e,n,r),Nm(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=qn(u):(u=vn(n)?Is:nn.current,u=Vo(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&R0(e,o,r,u),vi=!1;var d=e.memoizedState;o.state=d,Eh(e,r,o,i),l=e.memoizedState,a!==r||d!==l||yn.current||vi?(typeof c=="function"&&(xm(e,n,c,r),l=e.memoizedState),(a=vi||S0(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,YT(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:er(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=qn(l):(l=vn(n)?Is:nn.current,l=Vo(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&R0(e,o,r,l),vi=!1,d=e.memoizedState,o.state=d,Eh(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||yn.current||vi?(typeof p=="function"&&(xm(e,n,p,r),v=e.memoizedState),(u=vi||S0(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Om(t,e,n,r,s,i)}function Om(t,e,n,r,i,s){TI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&g0(e,n,!1),ri(t,e,s);r=e.stateNode,DN.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Fo(e,t.child,null,s),e.child=Fo(e,null,a,s)):on(t,e,a,s),e.memoizedState=r.state,i&&g0(e,n,!0),e.child}function II(t){var e=t.stateNode;e.pendingContext?m0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&m0(t,e.context,!1),Iy(t,e.containerInfo)}function D0(t,e,n,r,i){return $o(),yy(i),e.flags|=256,on(t,e,n,r),e.child}var Lm={dehydrated:null,treeContext:null,retryLane:0};function Mm(t){return{baseLanes:t,cachePool:null,transitions:null}}function SI(t,e,n){var r=e.pendingProps,i=Xe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),$e(Xe,i&1),t===null)return km(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Od(o,r,0,null),t=_s(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Mm(n),e.memoizedState=Lm,t):Ny(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return bN(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Mi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Mi(a,s):(s=_s(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Mm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Lm,r}return s=t.child,t=s.sibling,r=Mi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ny(t,e){return e=Od({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function cc(t,e,n,r){return r!==null&&yy(r),Fo(e,t.child,null,n),t=Ny(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bN(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=dp(Error(L(422))),cc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Od({mode:"visible",children:r.children},i,0,null),s=_s(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Fo(e,t.child,null,o),e.child.memoizedState=Mm(o),e.memoizedState=Lm,s);if(!(e.mode&1))return cc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(L(419)),r=dp(s,r,void 0),cc(t,e,o,r)}if(a=(o&t.childLanes)!==0,gn||a){if(r=xt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ni(t,i),ar(r,t,i,-1))}return Vy(),r=dp(Error(L(421))),cc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=WN.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Rn=Di(i.nextSibling),Pn=e,Qe=!0,rr=null,t!==null&&(Un[Bn++]=Hr,Un[Bn++]=qr,Un[Bn++]=Ss,Hr=t.id,qr=t.overflow,Ss=e),e=Ny(e,r.children),e.flags|=4096,e)}function b0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Pm(t.return,e,n)}function fp(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function RI(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(on(t,e,r.children,n),r=Xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&b0(t,n,e);else if(t.tag===19)b0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if($e(Xe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Th(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),fp(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Th(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}fp(e,!0,n,null,s);break;case"together":fp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Bc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ri(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),As|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=Mi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Mi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ON(t,e,n){switch(e.tag){case 3:II(e),$o();break;case 5:XT(e);break;case 1:vn(e.type)&&gh(e);break;case 4:Iy(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;$e(_h,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?($e(Xe,Xe.current&1),e.flags|=128,null):n&e.child.childLanes?SI(t,e,n):($e(Xe,Xe.current&1),t=ri(t,e,n),t!==null?t.sibling:null);$e(Xe,Xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return RI(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$e(Xe,Xe.current),r)break;return null;case 22:case 23:return e.lanes=0,EI(t,e,n)}return ri(t,e,n)}var AI,Vm,CI,kI;AI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vm=function(){};CI=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,cs(Pr.current);var s=null;switch(n){case"input":i=sm(t,i),r=sm(t,r),s=[];break;case"select":i=Ze({},i,{value:void 0}),r=Ze({},r,{value:void 0}),s=[];break;case"textarea":i=lm(t,i),r=lm(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ph)}cm(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Sl.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Sl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ue("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};kI=function(t,e,n,r){n!==r&&(e.flags|=4)};function Pa(t,e){if(!Qe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function LN(t,e,n){var r=e.pendingProps;switch(gy(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(e),null;case 1:return vn(e.type)&&mh(),Gt(e),null;case 3:return r=e.stateNode,Uo(),We(yn),We(nn),Ry(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(lc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rr!==null&&(qm(rr),rr=null))),Vm(t,e),Gt(e),null;case 5:Sy(e);var i=cs(Ml.current);if(n=e.type,t!==null&&e.stateNode!=null)CI(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return Gt(e),null}if(t=cs(Pr.current),lc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Er]=e,r[Ol]=s,t=(e.mode&1)!==0,n){case"dialog":Ue("cancel",r),Ue("close",r);break;case"iframe":case"object":case"embed":Ue("load",r);break;case"video":case"audio":for(i=0;i<za.length;i++)Ue(za[i],r);break;case"source":Ue("error",r);break;case"img":case"image":case"link":Ue("error",r),Ue("load",r);break;case"details":Ue("toggle",r);break;case"input":j_(r,s),Ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ue("invalid",r);break;case"textarea":H_(r,s),Ue("invalid",r)}cm(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ac(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ac(r.textContent,a,t),i=["children",""+a]):Sl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ue("scroll",r)}switch(n){case"input":Zu(r),z_(r,s,!0);break;case"textarea":Zu(r),q_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ph)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=nT(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Er]=e,t[Ol]=r,AI(t,e,!1,!1),e.stateNode=t;e:{switch(o=hm(n,r),n){case"dialog":Ue("cancel",t),Ue("close",t),i=r;break;case"iframe":case"object":case"embed":Ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<za.length;i++)Ue(za[i],t);i=r;break;case"source":Ue("error",t),i=r;break;case"img":case"image":case"link":Ue("error",t),Ue("load",t),i=r;break;case"details":Ue("toggle",t),i=r;break;case"input":j_(t,r),i=sm(t,r),Ue("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ze({},r,{value:void 0}),Ue("invalid",t);break;case"textarea":H_(t,r),i=lm(t,r),Ue("invalid",t);break;default:i=r}cm(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?sT(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&rT(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Rl(t,l):typeof l=="number"&&Rl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Sl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ue("scroll",t):l!=null&&ty(t,s,l,o))}switch(n){case"input":Zu(t),z_(t,r,!1);break;case"textarea":Zu(t),q_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Bi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?To(t,!!r.multiple,s,!1):r.defaultValue!=null&&To(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ph)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Gt(e),null;case 6:if(t&&e.stateNode!=null)kI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=cs(Ml.current),cs(Pr.current),lc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Er]=e,(s=r.nodeValue!==n)&&(t=Pn,t!==null))switch(t.tag){case 3:ac(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ac(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Er]=e,e.stateNode=r}return Gt(e),null;case 13:if(We(Xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Qe&&Rn!==null&&e.mode&1&&!(e.flags&128))WT(),$o(),e.flags|=98560,s=!1;else if(s=lc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(L(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(L(317));s[Er]=e}else $o(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Gt(e),s=!1}else rr!==null&&(qm(rr),rr=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Xe.current&1?Et===0&&(Et=3):Vy())),e.updateQueue!==null&&(e.flags|=4),Gt(e),null);case 4:return Uo(),Vm(t,e),t===null&&Dl(e.stateNode.containerInfo),Gt(e),null;case 10:return wy(e.type._context),Gt(e),null;case 17:return vn(e.type)&&mh(),Gt(e),null;case 19:if(We(Xe),s=e.memoizedState,s===null)return Gt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Pa(s,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Th(t),o!==null){for(e.flags|=128,Pa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return $e(Xe,Xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&at()>jo&&(e.flags|=128,r=!0,Pa(s,!1),e.lanes=4194304)}else{if(!r)if(t=Th(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Pa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Qe)return Gt(e),null}else 2*at()-s.renderingStartTime>jo&&n!==1073741824&&(e.flags|=128,r=!0,Pa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=at(),e.sibling=null,n=Xe.current,$e(Xe,r?n&1|2:n&1),e):(Gt(e),null);case 22:case 23:return My(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Sn&1073741824&&(Gt(e),e.subtreeFlags&6&&(e.flags|=8192)):Gt(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function MN(t,e){switch(gy(e),e.tag){case 1:return vn(e.type)&&mh(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Uo(),We(yn),We(nn),Ry(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Sy(e),null;case 13:if(We(Xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));$o()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return We(Xe),null;case 4:return Uo(),null;case 10:return wy(e.type._context),null;case 22:case 23:return My(),null;case 24:return null;default:return null}}var hc=!1,Jt=!1,VN=typeof WeakSet=="function"?WeakSet:Set,q=null;function po(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){tt(t,e,r)}else n.current=null}function $m(t,e,n){try{n()}catch(r){tt(t,e,r)}}var O0=!1;function $N(t,e){if(Em=hh,t=bT(),py(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tm={focusedElem:t,selectionRange:n},hh=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,E=v.memoizedState,g=e.stateNode,f=g.getSnapshotBeforeUpdate(e.elementType===e.type?_:er(e.type,_),E);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(m){tt(e,e.return,m)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return v=O0,O0=!1,v}function il(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&$m(e,n,s)}i=i.next}while(i!==r)}}function Dd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Fm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function PI(t){var e=t.alternate;e!==null&&(t.alternate=null,PI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Er],delete e[Ol],delete e[Rm],delete e[wN],delete e[EN])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function xI(t){return t.tag===5||t.tag===3||t.tag===4}function L0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||xI(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Um(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ph));else if(r!==4&&(t=t.child,t!==null))for(Um(t,e,n),t=t.sibling;t!==null;)Um(t,e,n),t=t.sibling}function Bm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Bm(t,e,n),t=t.sibling;t!==null;)Bm(t,e,n),t=t.sibling}var Ot=null,tr=!1;function pi(t,e,n){for(n=n.child;n!==null;)NI(t,e,n),n=n.sibling}function NI(t,e,n){if(kr&&typeof kr.onCommitFiberUnmount=="function")try{kr.onCommitFiberUnmount(Sd,n)}catch{}switch(n.tag){case 5:Jt||po(n,e);case 6:var r=Ot,i=tr;Ot=null,pi(t,e,n),Ot=r,tr=i,Ot!==null&&(tr?(t=Ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ot.removeChild(n.stateNode));break;case 18:Ot!==null&&(tr?(t=Ot,n=n.stateNode,t.nodeType===8?op(t.parentNode,n):t.nodeType===1&&op(t,n),Pl(t)):op(Ot,n.stateNode));break;case 4:r=Ot,i=tr,Ot=n.stateNode.containerInfo,tr=!0,pi(t,e,n),Ot=r,tr=i;break;case 0:case 11:case 14:case 15:if(!Jt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&$m(n,e,o),i=i.next}while(i!==r)}pi(t,e,n);break;case 1:if(!Jt&&(po(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){tt(n,e,a)}pi(t,e,n);break;case 21:pi(t,e,n);break;case 22:n.mode&1?(Jt=(r=Jt)||n.memoizedState!==null,pi(t,e,n),Jt=r):pi(t,e,n);break;default:pi(t,e,n)}}function M0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new VN),e.forEach(function(r){var i=KN.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Zn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ot=a.stateNode,tr=!1;break e;case 3:Ot=a.stateNode.containerInfo,tr=!0;break e;case 4:Ot=a.stateNode.containerInfo,tr=!0;break e}a=a.return}if(Ot===null)throw Error(L(160));NI(s,o,i),Ot=null,tr=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){tt(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)DI(e,t),e=e.sibling}function DI(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zn(e,t),gr(t),r&4){try{il(3,t,t.return),Dd(3,t)}catch(_){tt(t,t.return,_)}try{il(5,t,t.return)}catch(_){tt(t,t.return,_)}}break;case 1:Zn(e,t),gr(t),r&512&&n!==null&&po(n,n.return);break;case 5:if(Zn(e,t),gr(t),r&512&&n!==null&&po(n,n.return),t.flags&32){var i=t.stateNode;try{Rl(i,"")}catch(_){tt(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&eT(i,s),hm(a,o);var u=hm(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?sT(i,h):c==="dangerouslySetInnerHTML"?rT(i,h):c==="children"?Rl(i,h):ty(i,c,h,u)}switch(a){case"input":om(i,s);break;case"textarea":tT(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?To(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?To(i,!!s.multiple,s.defaultValue,!0):To(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ol]=s}catch(_){tt(t,t.return,_)}}break;case 6:if(Zn(e,t),gr(t),r&4){if(t.stateNode===null)throw Error(L(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){tt(t,t.return,_)}}break;case 3:if(Zn(e,t),gr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pl(e.containerInfo)}catch(_){tt(t,t.return,_)}break;case 4:Zn(e,t),gr(t);break;case 13:Zn(e,t),gr(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Oy=at())),r&4&&M0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Jt=(u=Jt)||c,Zn(e,t),Jt=u):Zn(e,t),gr(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(q=t,c=t.child;c!==null;){for(h=q=c;q!==null;){switch(d=q,p=d.child,d.tag){case 0:case 11:case 14:case 15:il(4,d,d.return);break;case 1:po(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){tt(r,n,_)}}break;case 5:po(d,d.return);break;case 22:if(d.memoizedState!==null){$0(h);continue}}p!==null?(p.return=d,q=p):$0(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=iT("display",o))}catch(_){tt(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){tt(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Zn(e,t),gr(t),r&4&&M0(t);break;case 21:break;default:Zn(e,t),gr(t)}}function gr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(xI(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Rl(i,""),r.flags&=-33);var s=L0(t);Bm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=L0(t);Um(t,a,o);break;default:throw Error(L(161))}}catch(l){tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function FN(t,e,n){q=t,bI(t)}function bI(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||hc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Jt;a=hc;var u=Jt;if(hc=o,(Jt=l)&&!u)for(q=i;q!==null;)o=q,l=o.child,o.tag===22&&o.memoizedState!==null?F0(i):l!==null?(l.return=o,q=l):F0(i);for(;s!==null;)q=s,bI(s),s=s.sibling;q=i,hc=a,Jt=u}V0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):V0(t)}}function V0(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||Dd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Jt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:er(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&E0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}E0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Pl(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Jt||e.flags&512&&Fm(e)}catch(d){tt(e,e.return,d)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function $0(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function F0(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Dd(4,e)}catch(l){tt(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){tt(e,i,l)}}var s=e.return;try{Fm(e)}catch(l){tt(e,s,l)}break;case 5:var o=e.return;try{Fm(e)}catch(l){tt(e,o,l)}}}catch(l){tt(e,e.return,l)}if(e===t){q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,q=a;break}q=e.return}}var UN=Math.ceil,Rh=ui.ReactCurrentDispatcher,Dy=ui.ReactCurrentOwner,Hn=ui.ReactCurrentBatchConfig,we=0,xt=null,ft=null,Ft=0,Sn=0,mo=Gi(0),Et=0,Ul=null,As=0,bd=0,by=0,sl=null,pn=null,Oy=0,jo=1/0,Fr=null,Ah=!1,jm=null,Oi=null,dc=!1,Ai=null,Ch=0,ol=0,zm=null,jc=-1,zc=0;function un(){return we&6?at():jc!==-1?jc:jc=at()}function Li(t){return t.mode&1?we&2&&Ft!==0?Ft&-Ft:IN.transition!==null?(zc===0&&(zc=yT()),zc):(t=xe,t!==0||(t=window.event,t=t===void 0?16:ST(t.type)),t):1}function ar(t,e,n,r){if(50<ol)throw ol=0,zm=null,Error(L(185));mu(t,n,r),(!(we&2)||t!==xt)&&(t===xt&&(!(we&2)&&(bd|=n),Et===4&&wi(t,Ft)),_n(t,r),n===1&&we===0&&!(e.mode&1)&&(jo=at()+500,Pd&&Qi()))}function _n(t,e){var n=t.callbackNode;Ix(t,e);var r=ch(t,t===xt?Ft:0);if(r===0)n!==null&&G_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&G_(n),e===1)t.tag===0?TN(U0.bind(null,t)):zT(U0.bind(null,t)),vN(function(){!(we&6)&&Qi()}),n=null;else{switch(vT(r)){case 1:n=oy;break;case 4:n=mT;break;case 16:n=uh;break;case 536870912:n=gT;break;default:n=uh}n=BI(n,OI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function OI(t,e){if(jc=-1,zc=0,we&6)throw Error(L(327));var n=t.callbackNode;if(Co()&&t.callbackNode!==n)return null;var r=ch(t,t===xt?Ft:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=kh(t,r);else{e=r;var i=we;we|=2;var s=MI();(xt!==t||Ft!==e)&&(Fr=null,jo=at()+500,vs(t,e));do try{zN();break}catch(a){LI(t,a)}while(!0);_y(),Rh.current=s,we=i,ft!==null?e=0:(xt=null,Ft=0,e=Et)}if(e!==0){if(e===2&&(i=gm(t),i!==0&&(r=i,e=Hm(t,i))),e===1)throw n=Ul,vs(t,0),wi(t,r),_n(t,at()),n;if(e===6)wi(t,r);else{if(i=t.current.alternate,!(r&30)&&!BN(i)&&(e=kh(t,r),e===2&&(s=gm(t),s!==0&&(r=s,e=Hm(t,s))),e===1))throw n=Ul,vs(t,0),wi(t,r),_n(t,at()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:os(t,pn,Fr);break;case 3:if(wi(t,r),(r&130023424)===r&&(e=Oy+500-at(),10<e)){if(ch(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){un(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Sm(os.bind(null,t,pn,Fr),e);break}os(t,pn,Fr);break;case 4:if(wi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-or(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=at()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*UN(r/1960))-r,10<r){t.timeoutHandle=Sm(os.bind(null,t,pn,Fr),r);break}os(t,pn,Fr);break;case 5:os(t,pn,Fr);break;default:throw Error(L(329))}}}return _n(t,at()),t.callbackNode===n?OI.bind(null,t):null}function Hm(t,e){var n=sl;return t.current.memoizedState.isDehydrated&&(vs(t,e).flags|=256),t=kh(t,e),t!==2&&(e=pn,pn=n,e!==null&&qm(e)),t}function qm(t){pn===null?pn=t:pn.push.apply(pn,t)}function BN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!cr(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wi(t,e){for(e&=~by,e&=~bd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-or(e),r=1<<n;t[n]=-1,e&=~r}}function U0(t){if(we&6)throw Error(L(327));Co();var e=ch(t,0);if(!(e&1))return _n(t,at()),null;var n=kh(t,e);if(t.tag!==0&&n===2){var r=gm(t);r!==0&&(e=r,n=Hm(t,r))}if(n===1)throw n=Ul,vs(t,0),wi(t,e),_n(t,at()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,os(t,pn,Fr),_n(t,at()),null}function Ly(t,e){var n=we;we|=1;try{return t(e)}finally{we=n,we===0&&(jo=at()+500,Pd&&Qi())}}function Cs(t){Ai!==null&&Ai.tag===0&&!(we&6)&&Co();var e=we;we|=1;var n=Hn.transition,r=xe;try{if(Hn.transition=null,xe=1,t)return t()}finally{xe=r,Hn.transition=n,we=e,!(we&6)&&Qi()}}function My(){Sn=mo.current,We(mo)}function vs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yN(n)),ft!==null)for(n=ft.return;n!==null;){var r=n;switch(gy(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&mh();break;case 3:Uo(),We(yn),We(nn),Ry();break;case 5:Sy(r);break;case 4:Uo();break;case 13:We(Xe);break;case 19:We(Xe);break;case 10:wy(r.type._context);break;case 22:case 23:My()}n=n.return}if(xt=t,ft=t=Mi(t.current,null),Ft=Sn=e,Et=0,Ul=null,by=bd=As=0,pn=sl=null,us!==null){for(e=0;e<us.length;e++)if(n=us[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}us=null}return t}function LI(t,e){do{var n=ft;try{if(_y(),Fc.current=Sh,Ih){for(var r=Je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ih=!1}if(Rs=0,Ct=wt=Je=null,rl=!1,Vl=0,Dy.current=null,n===null||n.return===null){Et=1,Ul=e,ft=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=C0(o);if(p!==null){p.flags&=-257,k0(p,o,a,s,e),p.mode&1&&A0(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){A0(s,u,e),Vy();break e}l=Error(L(426))}}else if(Qe&&a.mode&1){var E=C0(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),k0(E,o,a,s,e),yy(Bo(l,a));break e}}s=l=Bo(l,a),Et!==4&&(Et=2),sl===null?sl=[s]:sl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=vI(s,l,e);w0(s,g);break e;case 1:a=l;var f=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Oi===null||!Oi.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var m=_I(s,a,e);w0(s,m);break e}}s=s.return}while(s!==null)}$I(n)}catch(T){e=T,ft===n&&n!==null&&(ft=n=n.return);continue}break}while(!0)}function MI(){var t=Rh.current;return Rh.current=Sh,t===null?Sh:t}function Vy(){(Et===0||Et===3||Et===2)&&(Et=4),xt===null||!(As&268435455)&&!(bd&268435455)||wi(xt,Ft)}function kh(t,e){var n=we;we|=2;var r=MI();(xt!==t||Ft!==e)&&(Fr=null,vs(t,e));do try{jN();break}catch(i){LI(t,i)}while(!0);if(_y(),we=n,Rh.current=r,ft!==null)throw Error(L(261));return xt=null,Ft=0,Et}function jN(){for(;ft!==null;)VI(ft)}function zN(){for(;ft!==null&&!px();)VI(ft)}function VI(t){var e=UI(t.alternate,t,Sn);t.memoizedProps=t.pendingProps,e===null?$I(t):ft=e,Dy.current=null}function $I(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=MN(n,e),n!==null){n.flags&=32767,ft=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,ft=null;return}}else if(n=LN(n,e,Sn),n!==null){ft=n;return}if(e=e.sibling,e!==null){ft=e;return}ft=e=t}while(e!==null);Et===0&&(Et=5)}function os(t,e,n){var r=xe,i=Hn.transition;try{Hn.transition=null,xe=1,HN(t,e,n,r)}finally{Hn.transition=i,xe=r}return null}function HN(t,e,n,r){do Co();while(Ai!==null);if(we&6)throw Error(L(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Sx(t,s),t===xt&&(ft=xt=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||dc||(dc=!0,BI(uh,function(){return Co(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Hn.transition,Hn.transition=null;var o=xe;xe=1;var a=we;we|=4,Dy.current=null,$N(t,n),DI(n,t),cN(Tm),hh=!!Em,Tm=Em=null,t.current=n,FN(n),mx(),we=a,xe=o,Hn.transition=s}else t.current=n;if(dc&&(dc=!1,Ai=t,Ch=i),s=t.pendingLanes,s===0&&(Oi=null),vx(n.stateNode),_n(t,at()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ah)throw Ah=!1,t=jm,jm=null,t;return Ch&1&&t.tag!==0&&Co(),s=t.pendingLanes,s&1?t===zm?ol++:(ol=0,zm=t):ol=0,Qi(),null}function Co(){if(Ai!==null){var t=vT(Ch),e=Hn.transition,n=xe;try{if(Hn.transition=null,xe=16>t?16:t,Ai===null)var r=!1;else{if(t=Ai,Ai=null,Ch=0,we&6)throw Error(L(331));var i=we;for(we|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(q=u;q!==null;){var c=q;switch(c.tag){case 0:case 11:case 15:il(8,c,s)}var h=c.child;if(h!==null)h.return=c,q=h;else for(;q!==null;){c=q;var d=c.sibling,p=c.return;if(PI(c),c===u){q=null;break}if(d!==null){d.return=p,q=d;break}q=p}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var E=_.sibling;_.sibling=null,_=E}while(_!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:il(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,q=g;break e}q=s.return}}var f=t.current;for(q=f;q!==null;){o=q;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,q=y;else e:for(o=f;q!==null;){if(a=q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Dd(9,a)}}catch(T){tt(a,a.return,T)}if(a===o){q=null;break e}var m=a.sibling;if(m!==null){m.return=a.return,q=m;break e}q=a.return}}if(we=i,Qi(),kr&&typeof kr.onPostCommitFiberRoot=="function")try{kr.onPostCommitFiberRoot(Sd,t)}catch{}r=!0}return r}finally{xe=n,Hn.transition=e}}return!1}function B0(t,e,n){e=Bo(n,e),e=vI(t,e,1),t=bi(t,e,1),e=un(),t!==null&&(mu(t,1,e),_n(t,e))}function tt(t,e,n){if(t.tag===3)B0(t,t,n);else for(;e!==null;){if(e.tag===3){B0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Oi===null||!Oi.has(r))){t=Bo(n,t),t=_I(e,t,1),e=bi(e,t,1),t=un(),e!==null&&(mu(e,1,t),_n(e,t));break}}e=e.return}}function qN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=un(),t.pingedLanes|=t.suspendedLanes&n,xt===t&&(Ft&n)===n&&(Et===4||Et===3&&(Ft&130023424)===Ft&&500>at()-Oy?vs(t,0):by|=n),_n(t,e)}function FI(t,e){e===0&&(t.mode&1?(e=nc,nc<<=1,!(nc&130023424)&&(nc=4194304)):e=1);var n=un();t=ni(t,e),t!==null&&(mu(t,e,n),_n(t,n))}function WN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),FI(t,n)}function KN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),FI(t,n)}var UI;UI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yn.current)gn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gn=!1,ON(t,e,n);gn=!!(t.flags&131072)}else gn=!1,Qe&&e.flags&1048576&&HT(e,vh,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Bc(t,e),t=e.pendingProps;var i=Vo(e,nn.current);Ao(e,n),i=Cy(null,e,r,t,i,n);var s=ky();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(r)?(s=!0,gh(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ty(e),i.updater=Nd,e.stateNode=i,i._reactInternals=e,Nm(e,r,t,n),e=Om(null,e,r,!0,s,n)):(e.tag=0,Qe&&s&&my(e),on(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Bc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=QN(r),t=er(r,t),i){case 0:e=bm(null,e,r,t,n);break e;case 1:e=N0(null,e,r,t,n);break e;case 11:e=P0(null,e,r,t,n);break e;case 14:e=x0(null,e,r,er(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:er(r,i),bm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:er(r,i),N0(t,e,r,i,n);case 3:e:{if(II(e),t===null)throw Error(L(387));r=e.pendingProps,s=e.memoizedState,i=s.element,YT(t,e),Eh(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Bo(Error(L(423)),e),e=D0(t,e,r,n,i);break e}else if(r!==i){i=Bo(Error(L(424)),e),e=D0(t,e,r,n,i);break e}else for(Rn=Di(e.stateNode.containerInfo.firstChild),Pn=e,Qe=!0,rr=null,n=GT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($o(),r===i){e=ri(t,e,n);break e}on(t,e,r,n)}e=e.child}return e;case 5:return XT(e),t===null&&km(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Im(r,i)?o=null:s!==null&&Im(r,s)&&(e.flags|=32),TI(t,e),on(t,e,o,n),e.child;case 6:return t===null&&km(e),null;case 13:return SI(t,e,n);case 4:return Iy(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Fo(e,null,r,n):on(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:er(r,i),P0(t,e,r,i,n);case 7:return on(t,e,e.pendingProps,n),e.child;case 8:return on(t,e,e.pendingProps.children,n),e.child;case 12:return on(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,$e(_h,r._currentValue),r._currentValue=o,s!==null)if(cr(s.value,o)){if(s.children===i.children&&!yn.current){e=ri(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Yr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Pm(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(L(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Pm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}on(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ao(e,n),i=qn(i),r=r(i),e.flags|=1,on(t,e,r,n),e.child;case 14:return r=e.type,i=er(r,e.pendingProps),i=er(r.type,i),x0(t,e,r,i,n);case 15:return wI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:er(r,i),Bc(t,e),e.tag=1,vn(r)?(t=!0,gh(e)):t=!1,Ao(e,n),yI(e,r,i),Nm(e,r,i,n),Om(null,e,r,!0,t,n);case 19:return RI(t,e,n);case 22:return EI(t,e,n)}throw Error(L(156,e.tag))};function BI(t,e){return pT(t,e)}function GN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zn(t,e,n,r){return new GN(t,e,n,r)}function $y(t){return t=t.prototype,!(!t||!t.isReactComponent)}function QN(t){if(typeof t=="function")return $y(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ry)return 11;if(t===iy)return 14}return 2}function Mi(t,e){var n=t.alternate;return n===null?(n=zn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Hc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")$y(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case io:return _s(n.children,i,s,e);case ny:o=8,i|=8;break;case tm:return t=zn(12,n,e,i|2),t.elementType=tm,t.lanes=s,t;case nm:return t=zn(13,n,e,i),t.elementType=nm,t.lanes=s,t;case rm:return t=zn(19,n,e,i),t.elementType=rm,t.lanes=s,t;case XE:return Od(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case QE:o=10;break e;case YE:o=9;break e;case ry:o=11;break e;case iy:o=14;break e;case yi:o=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=zn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function _s(t,e,n,r){return t=zn(7,t,r,e),t.lanes=n,t}function Od(t,e,n,r){return t=zn(22,t,r,e),t.elementType=XE,t.lanes=n,t.stateNode={isHidden:!1},t}function pp(t,e,n){return t=zn(6,t,null,e),t.lanes=n,t}function mp(t,e,n){return e=zn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function YN(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qf(0),this.expirationTimes=Qf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fy(t,e,n,r,i,s,o,a,l){return t=new YN(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=zn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ty(s),t}function XN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ro,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function jI(t){if(!t)return ji;t=t._reactInternals;e:{if(Bs(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(vn(n))return jT(t,n,e)}return e}function zI(t,e,n,r,i,s,o,a,l){return t=Fy(n,r,!0,t,i,s,o,a,l),t.context=jI(null),n=t.current,r=un(),i=Li(n),s=Yr(r,i),s.callback=e??null,bi(n,s,i),t.current.lanes=i,mu(t,i,r),_n(t,r),t}function Ld(t,e,n,r){var i=e.current,s=un(),o=Li(i);return n=jI(n),e.context===null?e.context=n:e.pendingContext=n,e=Yr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=bi(i,e,o),t!==null&&(ar(t,i,o,s),$c(t,i,o)),o}function Ph(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function j0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Uy(t,e){j0(t,e),(t=t.alternate)&&j0(t,e)}function JN(){return null}var HI=typeof reportError=="function"?reportError:function(t){console.error(t)};function By(t){this._internalRoot=t}Md.prototype.render=By.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));Ld(t,e,null,null)};Md.prototype.unmount=By.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Cs(function(){Ld(null,t,null,null)}),e[ti]=null}};function Md(t){this._internalRoot=t}Md.prototype.unstable_scheduleHydration=function(t){if(t){var e=ET();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_i.length&&e!==0&&e<_i[n].priority;n++);_i.splice(n,0,t),n===0&&IT(t)}};function jy(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function z0(){}function ZN(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ph(o);s.call(u)}}var o=zI(e,r,t,0,null,!1,!1,"",z0);return t._reactRootContainer=o,t[ti]=o.current,Dl(t.nodeType===8?t.parentNode:t),Cs(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ph(l);a.call(u)}}var l=Fy(t,0,!1,null,null,!1,!1,"",z0);return t._reactRootContainer=l,t[ti]=l.current,Dl(t.nodeType===8?t.parentNode:t),Cs(function(){Ld(e,l,n,r)}),l}function $d(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ph(o);a.call(l)}}Ld(e,o,t,i)}else o=ZN(n,e,t,i,r);return Ph(o)}_T=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ja(e.pendingLanes);n!==0&&(ay(e,n|1),_n(e,at()),!(we&6)&&(jo=at()+500,Qi()))}break;case 13:Cs(function(){var r=ni(t,1);if(r!==null){var i=un();ar(r,t,1,i)}}),Uy(t,1)}};ly=function(t){if(t.tag===13){var e=ni(t,134217728);if(e!==null){var n=un();ar(e,t,134217728,n)}Uy(t,134217728)}};wT=function(t){if(t.tag===13){var e=Li(t),n=ni(t,e);if(n!==null){var r=un();ar(n,t,e,r)}Uy(t,e)}};ET=function(){return xe};TT=function(t,e){var n=xe;try{return xe=t,e()}finally{xe=n}};fm=function(t,e,n){switch(e){case"input":if(om(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=kd(r);if(!i)throw Error(L(90));ZE(r),om(r,i)}}}break;case"textarea":tT(t,n);break;case"select":e=n.value,e!=null&&To(t,!!n.multiple,e,!1)}};lT=Ly;uT=Cs;var eD={usingClientEntryPoint:!1,Events:[yu,lo,kd,oT,aT,Ly]},xa={findFiberByHostInstance:ls,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tD={bundleType:xa.bundleType,version:xa.version,rendererPackageName:xa.rendererPackageName,rendererConfig:xa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=dT(t),t===null?null:t.stateNode},findFiberByHostInstance:xa.findFiberByHostInstance||JN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{Sd=fc.inject(tD),kr=fc}catch{}}On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eD;On.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jy(e))throw Error(L(200));return XN(t,e,null,n)};On.createRoot=function(t,e){if(!jy(t))throw Error(L(299));var n=!1,r="",i=HI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Fy(t,1,!1,null,null,n,!1,r,i),t[ti]=e.current,Dl(t.nodeType===8?t.parentNode:t),new By(e)};On.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=dT(e),t=t===null?null:t.stateNode,t};On.flushSync=function(t){return Cs(t)};On.hydrate=function(t,e,n){if(!Vd(e))throw Error(L(200));return $d(null,t,e,!0,n)};On.hydrateRoot=function(t,e,n){if(!jy(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=HI;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=zI(e,null,t,1,n??null,i,!1,s,o),t[ti]=e.current,Dl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Md(e)};On.render=function(t,e,n){if(!Vd(e))throw Error(L(200));return $d(null,t,e,!1,n)};On.unmountComponentAtNode=function(t){if(!Vd(t))throw Error(L(40));return t._reactRootContainer?(Cs(function(){$d(null,null,t,!1,function(){t._reactRootContainer=null,t[ti]=null})}),!0):!1};On.unstable_batchedUpdates=Ly;On.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Vd(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return $d(t,e,n,!1,r)};On.version="18.3.1-next-f1338f8080-20240426";function qI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qI)}catch(t){console.error(t)}}qI(),qE.exports=On;var nD=qE.exports,H0=nD;Zp.createRoot=H0.createRoot,Zp.hydrateRoot=H0.hydrateRoot;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ge(){return Ge=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ge.apply(this,arguments)}var vt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(vt||(vt={}));const q0="popstate";function rD(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Bl("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ks(i)}return sD(e,n,null,t)}function fe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function zo(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function iD(){return Math.random().toString(36).substr(2,8)}function W0(t,e){return{usr:t.state,key:t.key,idx:e}}function Bl(t,e,n,r){return n===void 0&&(n=null),Ge({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Yi(e):e,{state:n,key:e&&e.key||r||iD()})}function ks(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Yi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function sD(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=vt.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Ge({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=vt.Pop;let E=c(),g=E==null?null:E-u;u=E,l&&l({action:a,location:_.location,delta:g})}function d(E,g){a=vt.Push;let f=Bl(_.location,E,g);u=c()+1;let y=W0(f,u),m=_.createHref(f);try{o.pushState(y,"",m)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(m)}s&&l&&l({action:a,location:_.location,delta:1})}function p(E,g){a=vt.Replace;let f=Bl(_.location,E,g);u=c();let y=W0(f,u),m=_.createHref(f);o.replaceState(y,"",m),s&&l&&l({action:a,location:_.location,delta:0})}function v(E){let g=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof E=="string"?E:ks(E);return fe(g,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,g)}let _={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(q0,h),l=E,()=>{i.removeEventListener(q0,h),l=null}},createHref(E){return e(i,E)},createURL:v,encodeLocation(E){let g=v(E);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:d,replace:p,go(E){return o.go(E)}};return _}var _t;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(_t||(_t={}));const oD=new Set(["lazy","caseSensitive","path","id","index","children"]);function aD(t){return t.index===!0}function Wm(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(fe(i.index!==!0||!i.children,"Cannot specify children on an index route"),fe(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),aD(i)){let l=Ge({},i,e(i),{id:a});return r[a]=l,l}else{let l=Ge({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=Wm(i.children,e,o,r)),l}})}function go(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Yi(e):e,i=la(r.pathname||"/",n);if(i==null)return null;let s=WI(t);lD(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=yD(s[a],wD(i));return o}function WI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(fe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Xr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(fe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),WI(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:mD(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of KI(s.path))i(s,o,l)}),e}function KI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=KI(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function lD(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:gD(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const uD=/^:\w+$/,cD=3,hD=2,dD=1,fD=10,pD=-2,K0=t=>t==="*";function mD(t,e){let n=t.split("/"),r=n.length;return n.some(K0)&&(r+=pD),e&&(r+=hD),n.filter(i=>!K0(i)).reduce((i,s)=>i+(uD.test(s)?cD:s===""?dD:fD),r)}function gD(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function yD(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=vD({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Xr([i,c.pathname]),pathnameBase:SD(Xr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Xr([i,c.pathnameBase]))}return s}function vD(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=_D(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=ED(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function _D(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),zo(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function wD(t){try{return decodeURI(t)}catch(e){return zo(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ED(t,e){try{return decodeURIComponent(t)}catch(n){return zo(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function la(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function TD(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Yi(t):t;return{pathname:n?n.startsWith("/")?n:ID(n,e):e,search:RD(r),hash:AD(i)}}function ID(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function gp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _u(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Fd(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Yi(t):(i=Ge({},t),fe(!i.pathname||!i.pathname.includes("?"),gp("?","pathname","search",i)),fe(!i.pathname||!i.pathname.includes("#"),gp("#","pathname","hash",i)),fe(!i.search||!i.search.includes("#"),gp("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=TD(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Xr=t=>t.join("/").replace(/\/\/+/g,"/"),SD=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),RD=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,AD=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class zy{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function GI(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const QI=["post","put","patch","delete"],CD=new Set(QI),kD=["get",...QI],PD=new Set(kD),xD=new Set([301,302,303,307,308]),ND=new Set([307,308]),yp={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},DD={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Na={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},YI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bD=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function OD(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;fe(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let A=t.detectErrorBoundary;i=k=>({hasErrorBoundary:A(k)})}else i=bD;let s={},o=Wm(t.routes,i,void 0,s),a,l=t.basename||"/",u=Ge({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,h=new Set,d=null,p=null,v=null,_=t.hydrationData!=null,E=go(o,t.history.location,l),g=null;if(E==null){let A=Fn(404,{pathname:t.history.location.pathname}),{matches:k,route:b}=tw(o);E=k,g={[b.id]:A}}let f=!E.some(A=>A.route.lazy)&&(!E.some(A=>A.route.loader)||t.hydrationData!=null),y,m={historyAction:t.history.action,location:t.history.location,matches:E,initialized:f,navigation:yp,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||g,fetchers:new Map,blockers:new Map},T=vt.Pop,S=!1,I,D=!1,K=!1,V=[],ge=[],j=new Map,ne=0,he=-1,Ee=new Map,Le=new Set,Me=new Map,$=new Map,W=new Map,ee=!1;function Te(){return c=t.history.listen(A=>{let{action:k,location:b,delta:G}=A;if(ee){ee=!1;return}zo(W.size===0||G!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ue=qt({currentLocation:m.location,nextLocation:b,historyAction:k});if(ue&&G!=null){ee=!0,t.history.go(G*-1),Ye(ue,{state:"blocked",location:b,proceed(){Ye(ue,{state:"proceeding",proceed:void 0,reset:void 0,location:b}),t.history.go(G)},reset(){let se=new Map(m.blockers);se.set(ue,Na),_e({blockers:se})}});return}return St(k,b)}),m.initialized||St(vt.Pop,m.location),y}function Ie(){c&&c(),h.clear(),I&&I.abort(),m.fetchers.forEach((A,k)=>R(k)),m.blockers.forEach((A,k)=>Se(k))}function Xn(A){return h.add(A),()=>h.delete(A)}function _e(A){m=Ge({},m,A),h.forEach(k=>k(m))}function Ht(A,k){var b,G;let ue=m.actionData!=null&&m.navigation.formMethod!=null&&nr(m.navigation.formMethod)&&m.navigation.state==="loading"&&((b=A.state)==null?void 0:b._isRedirect)!==!0,se;k.actionData?Object.keys(k.actionData).length>0?se=k.actionData:se=null:ue?se=m.actionData:se=null;let ae=k.loaderData?ew(m.loaderData,k.loaderData,k.matches||[],k.errors):m.loaderData,te=m.blockers;te.size>0&&(te=new Map(te),te.forEach((Ve,Wt)=>te.set(Wt,Na)));let X=S===!0||m.navigation.formMethod!=null&&nr(m.navigation.formMethod)&&((G=A.state)==null?void 0:G._isRedirect)!==!0;a&&(o=a,a=void 0),D||T===vt.Pop||(T===vt.Push?t.history.push(A,A.state):T===vt.Replace&&t.history.replace(A,A.state)),_e(Ge({},k,{actionData:se,loaderData:ae,historyAction:T,location:A,initialized:!0,navigation:yp,revalidation:"idle",restoreScrollPosition:Ku(A,k.matches||m.matches),preventScrollReset:X,blockers:te})),T=vt.Pop,S=!1,D=!1,K=!1,V=[],ge=[]}async function lt(A,k){if(typeof A=="number"){t.history.go(A);return}let b=Km(m.location,m.matches,l,u.v7_prependBasename,A,k==null?void 0:k.fromRouteId,k==null?void 0:k.relative),{path:G,submission:ue,error:se}=G0(u.v7_normalizeFormMethod,!1,b,k),ae=m.location,te=Bl(m.location,G,k&&k.state);te=Ge({},te,t.history.encodeLocation(te));let X=k&&k.replace!=null?k.replace:void 0,Ve=vt.Push;X===!0?Ve=vt.Replace:X===!1||ue!=null&&nr(ue.formMethod)&&ue.formAction===m.location.pathname+m.location.search&&(Ve=vt.Replace);let Wt=k&&"preventScrollReset"in k?k.preventScrollReset===!0:void 0,be=qt({currentLocation:ae,nextLocation:te,historyAction:Ve});if(be){Ye(be,{state:"blocked",location:te,proceed(){Ye(be,{state:"proceeding",proceed:void 0,reset:void 0,location:te}),lt(A,k)},reset(){let st=new Map(m.blockers);st.set(be,Na),_e({blockers:st})}});return}return await St(Ve,te,{submission:ue,pendingError:se,preventScrollReset:Wt,replace:k&&k.replace})}function fn(){if(Wu(),_e({revalidation:"loading"}),m.navigation.state!=="submitting"){if(m.navigation.state==="idle"){St(m.historyAction,m.location,{startUninterruptedRevalidation:!0});return}St(T||m.historyAction,m.navigation.location,{overrideNavigation:m.navigation})}}async function St(A,k,b){I&&I.abort(),I=null,T=A,D=(b&&b.startUninterruptedRevalidation)===!0,_a(m.location,m.matches),S=(b&&b.preventScrollReset)===!0;let G=a||o,ue=b&&b.overrideNavigation,se=go(G,k,l);if(!se){let st=Fn(404,{pathname:k.pathname}),{matches:Rt,route:rs}=tw(G);mr(),Ht(k,{matches:Rt,loaderData:{},errors:{[rs.id]:st}});return}if(m.initialized&&!K&&FD(m.location,k)&&!(b&&b.submission&&nr(b.submission.formMethod))){Ht(k,{matches:se});return}I=new AbortController;let ae=ba(t.history,k,I.signal,b&&b.submission),te,X;if(b&&b.pendingError)X={[yo(se).route.id]:b.pendingError};else if(b&&b.submission&&nr(b.submission.formMethod)){let st=await Mn(ae,k,b.submission,se,{replace:b.replace});if(st.shortCircuited)return;te=st.pendingActionData,X=st.pendingActionError,ue=pc(k,b.submission),ae=new Request(ae.url,{signal:ae.signal})}let{shortCircuited:Ve,loaderData:Wt,errors:be}=await ns(ae,k,se,ue,b&&b.submission,b&&b.fetcherSubmission,b&&b.replace,te,X);Ve||(I=null,Ht(k,Ge({matches:se},te?{actionData:te}:{},{loaderData:Wt,errors:be})))}async function Mn(A,k,b,G,ue){ue===void 0&&(ue={}),Wu();let se=HD(k,b);_e({navigation:se});let ae,te=Qm(G,k);if(!te.route.action&&!te.route.lazy)ae={type:_t.error,error:Fn(405,{method:A.method,pathname:k.pathname,routeId:te.route.id})};else if(ae=await Da("action",A,te,G,s,i,l),A.signal.aborted)return{shortCircuited:!0};if(ko(ae)){let X;return ue&&ue.replace!=null?X=ue.replace:X=ae.location===m.location.pathname+m.location.search,await Ks(m,ae,{submission:b,replace:X}),{shortCircuited:!0}}if(al(ae)){let X=yo(G,te.route.id);return(ue&&ue.replace)!==!0&&(T=vt.Push),{pendingActionData:{},pendingActionError:{[X.route.id]:ae.error}}}if(hs(ae))throw Fn(400,{type:"defer-action"});return{pendingActionData:{[te.route.id]:ae.data}}}async function ns(A,k,b,G,ue,se,ae,te,X){let Ve=G||pc(k,ue),Wt=ue||se||iw(Ve),be=a||o,[st,Rt]=Q0(t.history,m,b,Wt,k,K,V,ge,Me,Le,be,l,te,X);if(mr(Oe=>!(b&&b.some(Jn=>Jn.route.id===Oe))||st&&st.some(Jn=>Jn.route.id===Oe)),he=++ne,st.length===0&&Rt.length===0){let Oe=F();return Ht(k,Ge({matches:b,loaderData:{},errors:X||null},te?{actionData:te}:{},Oe?{fetchers:new Map(m.fetchers)}:{})),{shortCircuited:!0}}if(!D){Rt.forEach(Jn=>{let fi=m.fetchers.get(Jn.key),jf=Oa(void 0,fi?fi.data:void 0);m.fetchers.set(Jn.key,jf)});let Oe=te||m.actionData;_e(Ge({navigation:Ve},Oe?Object.keys(Oe).length===0?{actionData:null}:{actionData:Oe}:{},Rt.length>0?{fetchers:new Map(m.fetchers)}:{}))}Rt.forEach(Oe=>{j.has(Oe.key)&&C(Oe.key),Oe.controller&&j.set(Oe.key,Oe.controller)});let rs=()=>Rt.forEach(Oe=>C(Oe.key));I&&I.signal.addEventListener("abort",rs);let{results:is,loaderResults:wa,fetcherResults:$f}=await Mf(m.matches,b,st,Rt,A);if(A.signal.aborted)return{shortCircuited:!0};I&&I.signal.removeEventListener("abort",rs),Rt.forEach(Oe=>j.delete(Oe.key));let Mr=nw(is);if(Mr){if(Mr.idx>=st.length){let Oe=Rt[Mr.idx-st.length].key;Le.add(Oe)}return await Ks(m,Mr.result,{replace:ae}),{shortCircuited:!0}}let{loaderData:Vr,errors:Qu}=Z0(m,b,st,wa,X,Rt,$f,$);$.forEach((Oe,Jn)=>{Oe.subscribe(fi=>{(fi||Oe.done)&&$.delete(Jn)})});let Ff=F(),Uf=M(he),Bf=Ff||Uf||Rt.length>0;return Ge({loaderData:Vr,errors:Qu},Bf?{fetchers:new Map(m.fetchers)}:{})}function pr(A){return m.fetchers.get(A)||DD}function Vn(A,k,b,G){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");j.has(A)&&C(A);let ue=a||o,se=Km(m.location,m.matches,l,u.v7_prependBasename,b,k,G==null?void 0:G.relative),ae=go(ue,se,l);if(!ae){w(A,k,Fn(404,{pathname:se}));return}let{path:te,submission:X,error:Ve}=G0(u.v7_normalizeFormMethod,!0,se,G);if(Ve){w(A,k,Ve);return}let Wt=Qm(ae,te);if(S=(G&&G.preventScrollReset)===!0,X&&nr(X.formMethod)){Hu(A,k,te,Wt,ae,X);return}Me.set(A,{routeId:k,path:te}),qu(A,k,te,Wt,ae,X)}async function Hu(A,k,b,G,ue,se){if(Wu(),Me.delete(A),!G.route.action&&!G.route.lazy){let gt=Fn(405,{method:se.formMethod,pathname:b,routeId:k});w(A,k,gt);return}let ae=m.fetchers.get(A),te=qD(se,ae);m.fetchers.set(A,te),_e({fetchers:new Map(m.fetchers)});let X=new AbortController,Ve=ba(t.history,b,X.signal,se);j.set(A,X);let Wt=ne,be=await Da("action",Ve,G,ue,s,i,l);if(Ve.signal.aborted){j.get(A)===X&&j.delete(A);return}if(ko(be))if(j.delete(A),he>Wt){let gt=Zs(void 0);m.fetchers.set(A,gt),_e({fetchers:new Map(m.fetchers)});return}else{Le.add(A);let gt=Oa(se);return m.fetchers.set(A,gt),_e({fetchers:new Map(m.fetchers)}),Ks(m,be,{submission:se,isFetchActionRedirect:!0})}if(al(be)){w(A,k,be.error);return}if(hs(be))throw Fn(400,{type:"defer-action"});let st=m.navigation.location||m.location,Rt=ba(t.history,st,X.signal),rs=a||o,is=m.navigation.state!=="idle"?go(rs,m.navigation.location,l):m.matches;fe(is,"Didn't find any matches after fetcher action");let wa=++ne;Ee.set(A,wa);let $f=Oa(se,be.data);m.fetchers.set(A,$f);let[Mr,Vr]=Q0(t.history,m,is,se,st,K,V,ge,Me,Le,rs,l,{[G.route.id]:be.data},void 0);Vr.filter(gt=>gt.key!==A).forEach(gt=>{let Ea=gt.key,P_=m.fetchers.get(Ea),kk=Oa(void 0,P_?P_.data:void 0);m.fetchers.set(Ea,kk),j.has(Ea)&&C(Ea),gt.controller&&j.set(Ea,gt.controller)}),_e({fetchers:new Map(m.fetchers)});let Qu=()=>Vr.forEach(gt=>C(gt.key));X.signal.addEventListener("abort",Qu);let{results:Ff,loaderResults:Uf,fetcherResults:Bf}=await Mf(m.matches,is,Mr,Vr,Rt);if(X.signal.aborted)return;X.signal.removeEventListener("abort",Qu),Ee.delete(A),j.delete(A),Vr.forEach(gt=>j.delete(gt.key));let Oe=nw(Ff);if(Oe){if(Oe.idx>=Mr.length){let gt=Vr[Oe.idx-Mr.length].key;Le.add(gt)}return Ks(m,Oe.result)}let{loaderData:Jn,errors:fi}=Z0(m,m.matches,Mr,Uf,void 0,Vr,Bf,$);if(m.fetchers.has(A)){let gt=Zs(be.data);m.fetchers.set(A,gt)}let jf=M(wa);m.navigation.state==="loading"&&wa>he?(fe(T,"Expected pending action"),I&&I.abort(),Ht(m.navigation.location,{matches:is,loaderData:Jn,errors:fi,fetchers:new Map(m.fetchers)})):(_e(Ge({errors:fi,loaderData:ew(m.loaderData,Jn,is,fi)},jf||Vr.length>0?{fetchers:new Map(m.fetchers)}:{})),K=!1)}async function qu(A,k,b,G,ue,se){let ae=m.fetchers.get(A),te=Oa(se,ae?ae.data:void 0);m.fetchers.set(A,te),_e({fetchers:new Map(m.fetchers)});let X=new AbortController,Ve=ba(t.history,b,X.signal);j.set(A,X);let Wt=ne,be=await Da("loader",Ve,G,ue,s,i,l);if(hs(be)&&(be=await ZI(be,Ve.signal,!0)||be),j.get(A)===X&&j.delete(A),Ve.signal.aborted)return;if(ko(be))if(he>Wt){let Rt=Zs(void 0);m.fetchers.set(A,Rt),_e({fetchers:new Map(m.fetchers)});return}else{Le.add(A),await Ks(m,be);return}if(al(be)){let Rt=yo(m.matches,k);m.fetchers.delete(A),_e({fetchers:new Map(m.fetchers),errors:{[Rt.route.id]:be.error}});return}fe(!hs(be),"Unhandled fetcher deferred data");let st=Zs(be.data);m.fetchers.set(A,st),_e({fetchers:new Map(m.fetchers)})}async function Ks(A,k,b){let{submission:G,replace:ue,isFetchActionRedirect:se}=b===void 0?{}:b;k.revalidate&&(K=!0);let ae=Bl(A.location,k.location,Ge({_isRedirect:!0},se?{_isFetchActionRedirect:!0}:{}));if(fe(ae,"Expected a location on the redirect navigation"),YI.test(k.location)&&n){let Ve=t.history.createURL(k.location),Wt=la(Ve.pathname,l)==null;if(e.location.origin!==Ve.origin||Wt){ue?e.location.replace(k.location):e.location.assign(k.location);return}}I=null;let te=ue===!0?vt.Replace:vt.Push,X=G||iw(A.navigation);if(ND.has(k.status)&&X&&nr(X.formMethod))await St(te,ae,{submission:Ge({},X,{formAction:k.location}),preventScrollReset:S});else if(se)await St(te,ae,{overrideNavigation:pc(ae),fetcherSubmission:X,preventScrollReset:S});else{let Ve=pc(ae,X);await St(te,ae,{overrideNavigation:Ve,preventScrollReset:S})}}async function Mf(A,k,b,G,ue){let se=await Promise.all([...b.map(X=>Da("loader",ue,X,k,s,i,l)),...G.map(X=>X.matches&&X.match&&X.controller?Da("loader",ba(t.history,X.path,X.controller.signal),X.match,X.matches,s,i,l):{type:_t.error,error:Fn(404,{pathname:X.path})})]),ae=se.slice(0,b.length),te=se.slice(b.length);return await Promise.all([rw(A,b,ae,ae.map(()=>ue.signal),!1,m.loaderData),rw(A,G.map(X=>X.match),te,G.map(X=>X.controller?X.controller.signal:null),!0)]),{results:se,loaderResults:ae,fetcherResults:te}}function Wu(){K=!0,V.push(...mr()),Me.forEach((A,k)=>{j.has(k)&&(ge.push(k),C(k))})}function w(A,k,b){let G=yo(m.matches,k);R(A),_e({errors:{[G.route.id]:b},fetchers:new Map(m.fetchers)})}function R(A){let k=m.fetchers.get(A);j.has(A)&&!(k&&k.state==="loading"&&Ee.has(A))&&C(A),Me.delete(A),Ee.delete(A),Le.delete(A),m.fetchers.delete(A)}function C(A){let k=j.get(A);fe(k,"Expected fetch controller: "+A),k.abort(),j.delete(A)}function B(A){for(let k of A){let b=pr(k),G=Zs(b.data);m.fetchers.set(k,G)}}function F(){let A=[],k=!1;for(let b of Le){let G=m.fetchers.get(b);fe(G,"Expected fetcher: "+b),G.state==="loading"&&(Le.delete(b),A.push(b),k=!0)}return B(A),k}function M(A){let k=[];for(let[b,G]of Ee)if(G<A){let ue=m.fetchers.get(b);fe(ue,"Expected fetcher: "+b),ue.state==="loading"&&(C(b),Ee.delete(b),k.push(b))}return B(k),k.length>0}function J(A,k){let b=m.blockers.get(A)||Na;return W.get(A)!==k&&W.set(A,k),b}function Se(A){m.blockers.delete(A),W.delete(A)}function Ye(A,k){let b=m.blockers.get(A)||Na;fe(b.state==="unblocked"&&k.state==="blocked"||b.state==="blocked"&&k.state==="blocked"||b.state==="blocked"&&k.state==="proceeding"||b.state==="blocked"&&k.state==="unblocked"||b.state==="proceeding"&&k.state==="unblocked","Invalid blocker state transition: "+b.state+" -> "+k.state);let G=new Map(m.blockers);G.set(A,k),_e({blockers:G})}function qt(A){let{currentLocation:k,nextLocation:b,historyAction:G}=A;if(W.size===0)return;W.size>1&&zo(!1,"A router only supports one blocker at a time");let ue=Array.from(W.entries()),[se,ae]=ue[ue.length-1],te=m.blockers.get(se);if(!(te&&te.state==="proceeding")&&ae({currentLocation:k,nextLocation:b,historyAction:G}))return se}function mr(A){let k=[];return $.forEach((b,G)=>{(!A||A(G))&&(b.cancel(),k.push(G),$.delete(G))}),k}function Vf(A,k,b){if(d=A,v=k,p=b||null,!_&&m.navigation===yp){_=!0;let G=Ku(m.location,m.matches);G!=null&&_e({restoreScrollPosition:G})}return()=>{d=null,v=null,p=null}}function Gs(A,k){return p&&p(A,k.map(G=>zD(G,m.loaderData)))||A.key}function _a(A,k){if(d&&v){let b=Gs(A,k);d[b]=v()}}function Ku(A,k){if(d){let b=Gs(A,k),G=d[b];if(typeof G=="number")return G}return null}function Gu(A){s={},a=Wm(A,i,void 0,s)}return y={get basename(){return l},get state(){return m},get routes(){return o},initialize:Te,subscribe:Xn,enableScrollRestoration:Vf,navigate:lt,fetch:Vn,revalidate:fn,createHref:A=>t.history.createHref(A),encodeLocation:A=>t.history.encodeLocation(A),getFetcher:pr,deleteFetcher:R,dispose:Ie,getBlocker:J,deleteBlocker:Se,_internalFetchControllers:j,_internalActiveDeferreds:$,_internalSetRoutes:Gu},y}function LD(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Km(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=Fd(i||".",_u(a).map(c=>c.pathnameBase),la(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!Hy(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Xr([n,u.pathname])),ks(u)}function G0(t,e,n,r){if(!r||!LD(r))return{path:n};if(r.formMethod&&!jD(r.formMethod))return{path:n,error:Fn(405,{method:r.formMethod})};let i=()=>({path:n,error:Fn(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=JI(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!nr(o))return i();let d=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((p,v)=>{let[_,E]=v;return""+p+_+"="+E+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:d}}}else if(r.formEncType==="application/json"){if(!nr(o))return i();try{let d=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:d,text:void 0}}}catch{return i()}}}fe(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=Gm(r.formData),u=r.formData;else if(r.body instanceof FormData)l=Gm(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=J0(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=J0(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(nr(c.formMethod))return{path:n,submission:c};let h=Yi(n);return e&&h.search&&Hy(h.search)&&l.append("index",""),h.search="?"+l,{path:ks(h),submission:c}}function MD(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Q0(t,e,n,r,i,s,o,a,l,u,c,h,d,p){let v=p?Object.values(p)[0]:d?Object.values(d)[0]:void 0,_=t.createURL(e.location),E=t.createURL(i),g=p?Object.keys(p)[0]:void 0,y=MD(n,g).filter((T,S)=>{if(T.route.lazy)return!0;if(T.route.loader==null)return!1;if(VD(e.loaderData,e.matches[S],T)||o.some(K=>K===T.route.id))return!0;let I=e.matches[S],D=T;return Y0(T,Ge({currentUrl:_,currentParams:I.params,nextUrl:E,nextParams:D.params},r,{actionResult:v,defaultShouldRevalidate:s||_.pathname+_.search===E.pathname+E.search||_.search!==E.search||XI(I,D)}))}),m=[];return l.forEach((T,S)=>{if(!n.some(ge=>ge.route.id===T.routeId))return;let I=go(c,T.path,h);if(!I){m.push({key:S,routeId:T.routeId,path:T.path,matches:null,match:null,controller:null});return}let D=e.fetchers.get(S),K=Qm(I,T.path),V=!1;u.has(S)?V=!1:a.includes(S)?V=!0:D&&D.state!=="idle"&&D.data===void 0?V=s:V=Y0(K,Ge({currentUrl:_,currentParams:e.matches[e.matches.length-1].params,nextUrl:E,nextParams:n[n.length-1].params},r,{actionResult:v,defaultShouldRevalidate:s})),V&&m.push({key:S,routeId:T.routeId,path:T.path,matches:I,match:K,controller:new AbortController})}),[y,m]}function VD(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function XI(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Y0(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function X0(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];fe(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";zo(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!oD.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Ge({},e(i),{lazy:void 0}))}async function Da(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,h=v=>{let _,E=new Promise((g,f)=>_=f);return c=()=>_(),e.signal.addEventListener("abort",c),Promise.race([v({request:e,params:n.params,context:a.requestContext}),E])};try{let v=n.route[t];if(n.route.lazy)if(v)u=(await Promise.all([h(v),X0(n.route,s,i)]))[0];else if(await X0(n.route,s,i),v=n.route[t],v)u=await h(v);else if(t==="action"){let _=new URL(e.url),E=_.pathname+_.search;throw Fn(405,{method:e.method,pathname:E,routeId:n.route.id})}else return{type:_t.data,data:void 0};else if(v)u=await h(v);else{let _=new URL(e.url),E=_.pathname+_.search;throw Fn(404,{pathname:E})}fe(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(v){l=_t.error,u=v}finally{c&&e.signal.removeEventListener("abort",c)}if(BD(u)){let v=u.status;if(xD.has(v)){let g=u.headers.get("Location");if(fe(g,"Redirects returned/thrown from loaders/actions must have a Location header"),!YI.test(g))g=Km(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,g);else if(!a.isStaticRequest){let f=new URL(e.url),y=g.startsWith("//")?new URL(f.protocol+g):new URL(g),m=la(y.pathname,o)!=null;y.origin===f.origin&&m&&(g=y.pathname+y.search+y.hash)}if(a.isStaticRequest)throw u.headers.set("Location",g),u;return{type:_t.redirect,status:v,location:g,revalidate:u.headers.get("X-Remix-Revalidate")!==null}}if(a.isRouteRequest)throw{type:l||_t.data,response:u};let _,E=u.headers.get("Content-Type");return E&&/\bapplication\/json\b/.test(E)?_=await u.json():_=await u.text(),l===_t.error?{type:l,error:new zy(v,u.statusText,_),headers:u.headers}:{type:_t.data,data:_,statusCode:u.status,headers:u.headers}}if(l===_t.error)return{type:l,error:u};if(UD(u)){var d,p;return{type:_t.deferred,deferredData:u,statusCode:(d=u.init)==null?void 0:d.status,headers:((p=u.init)==null?void 0:p.headers)&&new Headers(u.init.headers)}}return{type:_t.data,data:u}}function ba(t,e,n,r){let i=t.createURL(JI(e)).toString(),s={signal:n};if(r&&nr(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=Gm(r.formData):s.body=r.formData}return new Request(i,s)}function Gm(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function J0(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function $D(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,h)=>{let d=e[h].route.id;if(fe(!ko(c),"Cannot handle redirect results in processLoaderData"),al(c)){let p=yo(t,d),v=c.error;r&&(v=Object.values(r)[0],r=void 0),o=o||{},o[p.route.id]==null&&(o[p.route.id]=v),s[d]=void 0,l||(l=!0,a=GI(c.error)?c.error.status:500),c.headers&&(u[d]=c.headers)}else hs(c)?(i.set(d,c.deferredData),s[d]=c.deferredData.data):s[d]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[d]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function Z0(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=$D(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:h,match:d,controller:p}=s[c];fe(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let v=o[c];if(!(p&&p.signal.aborted))if(al(v)){let _=yo(t.matches,d==null?void 0:d.route.id);u&&u[_.route.id]||(u=Ge({},u,{[_.route.id]:v.error})),t.fetchers.delete(h)}else if(ko(v))fe(!1,"Unhandled fetcher revalidation redirect");else if(hs(v))fe(!1,"Unhandled fetcher deferred data");else{let _=Zs(v.data);t.fetchers.set(h,_)}}return{loaderData:l,errors:u}}function ew(t,e,n,r){let i=Ge({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function yo(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function tw(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Fn(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new zy(t||500,o,new Error(a),!0)}function nw(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(ko(n))return{result:n,idx:e}}}function JI(t){let e=typeof t=="string"?Yi(t):t;return ks(Ge({},e,{hash:""}))}function FD(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function hs(t){return t.type===_t.deferred}function al(t){return t.type===_t.error}function ko(t){return(t&&t.type)===_t.redirect}function UD(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function BD(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function jD(t){return PD.has(t.toLowerCase())}function nr(t){return CD.has(t.toLowerCase())}async function rw(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(h=>h.route.id===l.route.id),c=u!=null&&!XI(u,l)&&(s&&s[l.route.id])!==void 0;if(hs(a)&&(i||c)){let h=r[o];fe(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await ZI(a,h,i).then(d=>{d&&(n[o]=d||n[o])})}}}async function ZI(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:_t.data,data:t.deferredData.unwrappedData}}catch(i){return{type:_t.error,error:i}}return{type:_t.data,data:t.deferredData.data}}}function Hy(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function zD(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function Qm(t,e){let n=typeof e=="string"?Yi(e).search:e.search;if(t[t.length-1].route.index&&Hy(n||""))return t[t.length-1];let r=_u(t);return r[r.length-1]}function iw(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function pc(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function HD(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Oa(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}function qD(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0," _hasFetcherDoneAnything ":!0}}function Zs(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ym(){return Ym=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ym.apply(this,arguments)}const Ud=x.createContext(null),eS=x.createContext(null),ua=x.createContext(null),qy=x.createContext(null),ci=x.createContext({outlet:null,matches:[],isDataRoute:!1}),tS=x.createContext(null);function WD(t,e){let{relative:n}=e===void 0?{}:e;ca()||fe(!1);let{basename:r,navigator:i}=x.useContext(ua),{hash:s,pathname:o,search:a}=rS(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Xr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ca(){return x.useContext(qy)!=null}function js(){return ca()||fe(!1),x.useContext(qy).location}function nS(t){x.useContext(ua).static||x.useLayoutEffect(t)}function Lr(){let{isDataRoute:t}=x.useContext(ci);return t?ob():KD()}function KD(){ca()||fe(!1);let t=x.useContext(Ud),{basename:e,navigator:n}=x.useContext(ua),{matches:r}=x.useContext(ci),{pathname:i}=js(),s=JSON.stringify(_u(r).map(l=>l.pathnameBase)),o=x.useRef(!1);return nS(()=>{o.current=!0}),x.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Fd(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Xr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const GD=x.createContext(null);function QD(t){let e=x.useContext(ci).outlet;return e&&x.createElement(GD.Provider,{value:t},e)}function rS(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=x.useContext(ci),{pathname:i}=js(),s=JSON.stringify(_u(r).map(o=>o.pathnameBase));return x.useMemo(()=>Fd(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function YD(t,e,n){ca()||fe(!1);let{navigator:r}=x.useContext(ua),{matches:i}=x.useContext(ci),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=js(),u;u=l;let c=u.pathname||"/",h=a==="/"?c:c.slice(a.length)||"/",d=go(t,{pathname:h});return tb(d&&d.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Xr([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Xr([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n)}function XD(){let t=sb(),e=GI(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},e),n?x.createElement("pre",{style:i},n):null,null)}const JD=x.createElement(XD,null);class ZD extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?x.createElement(ci.Provider,{value:this.props.routeContext},x.createElement(tS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function eb(t){let{routeContext:e,match:n,children:r}=t,i=x.useContext(Ud);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(ci.Provider,{value:e},r)}function tb(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||fe(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||JD);let d=e.concat(s.slice(0,u+1)),p=()=>{let v;return c?v=h:l.route.Component?v=x.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,x.createElement(eb,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?x.createElement(ZD,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var Xm;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Xm||(Xm={}));var jl;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(jl||(jl={}));function nb(t){let e=x.useContext(Ud);return e||fe(!1),e}function rb(t){let e=x.useContext(eS);return e||fe(!1),e}function ib(t){let e=x.useContext(ci);return e||fe(!1),e}function iS(t){let e=ib(),n=e.matches[e.matches.length-1];return n.route.id||fe(!1),n.route.id}function sb(){var t;let e=x.useContext(tS),n=rb(jl.UseRouteError),r=iS(jl.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function ob(){let{router:t}=nb(Xm.UseNavigateStable),e=iS(jl.UseNavigateStable),n=x.useRef(!1);return nS(()=>{n.current=!0}),x.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ym({fromRouteId:e},s)))},[t,e])}const ab="startTransition",sw=Qp[ab];function lb(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=x.useState(n.state),{v7_startTransition:o}=r||{},a=x.useCallback(h=>{o&&sw?sw(()=>s(h)):s(h)},[s,o]);x.useLayoutEffect(()=>n.subscribe(a),[n,a]);let l=x.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:h=>n.navigate(h),push:(h,d,p)=>n.navigate(h,{state:d,preventScrollReset:p==null?void 0:p.preventScrollReset}),replace:(h,d,p)=>n.navigate(h,{replace:!0,state:d,preventScrollReset:p==null?void 0:p.preventScrollReset})}),[n]),u=n.basename||"/",c=x.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return x.createElement(x.Fragment,null,x.createElement(Ud.Provider,{value:c},x.createElement(eS.Provider,{value:i},x.createElement(db,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?x.createElement(ub,{routes:n.routes,state:i}):e))),null)}function ub(t){let{routes:e,state:n}=t;return YD(e,void 0,n)}function cb(t){let{to:e,replace:n,state:r,relative:i}=t;ca()||fe(!1);let{matches:s}=x.useContext(ci),{pathname:o}=js(),a=Lr(),l=Fd(e,_u(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return x.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function hb(t){return QD(t.context)}function db(t){let{basename:e="/",children:n=null,location:r,navigationType:i=vt.Pop,navigator:s,static:o=!1}=t;ca()&&fe(!1);let a=e.replace(/^\/*/,"/"),l=x.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Yi(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,v=x.useMemo(()=>{let _=la(u,a);return _==null?null:{location:{pathname:_,search:c,hash:h,state:d,key:p},navigationType:i}},[a,u,c,h,d,p,i]);return v==null?null:x.createElement(ua.Provider,{value:l},x.createElement(qy.Provider,{children:n,value:v}))}var ow;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(ow||(ow={}));new Promise(()=>{});function fb(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:x.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:x.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zl(){return zl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zl.apply(this,arguments)}function pb(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function mb(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function gb(t,e){return t.button===0&&(!e||e==="_self")&&!mb(t)}const yb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function vb(t,e){return OD({basename:e==null?void 0:e.basename,future:zl({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:rD({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||_b(),routes:t,mapRouteProperties:fb}).initialize()}function _b(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=zl({},e,{errors:wb(e.errors)})),e}function wb(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new zy(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const Eb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Tb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ll=x.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=pb(e,yb),{basename:d}=x.useContext(ua),p,v=!1;if(typeof u=="string"&&Tb.test(u)&&(p=u,Eb))try{let f=new URL(window.location.href),y=u.startsWith("//")?new URL(f.protocol+u):new URL(u),m=la(y.pathname,d);y.origin===f.origin&&m!=null?u=m+y.search+y.hash:v=!0}catch{}let _=WD(u,{relative:i}),E=Ib(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function g(f){r&&r(f),f.defaultPrevented||E(f)}return x.createElement("a",zl({},h,{href:p||_,onClick:v||s?r:g,ref:n,target:l}))});var aw;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(aw||(aw={}));var lw;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(lw||(lw={}));function Ib(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Lr(),l=js(),u=rS(t,{relative:o});return x.useCallback(c=>{if(gb(c,n)){c.preventDefault();let h=r!==void 0?r:ks(l)===ks(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var Pt=function(){return Pt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Pt.apply(this,arguments)};function Wy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Hl(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var Be="-ms-",ul="-moz-",ke="-webkit-",sS="comm",Bd="rule",Ky="decl",Sb="@import",oS="@keyframes",Rb="@layer",aS=Math.abs,Gy=String.fromCharCode,Jm=Object.assign;function Ab(t,e){return kt(t,0)^45?(((e<<2^kt(t,0))<<2^kt(t,1))<<2^kt(t,2))<<2^kt(t,3):0}function lS(t){return t.trim()}function Ur(t,e){return(t=e.exec(t))?t[0]:t}function de(t,e,n){return t.replace(e,n)}function qc(t,e,n){return t.indexOf(e,n)}function kt(t,e){return t.charCodeAt(e)|0}function Ho(t,e,n){return t.slice(e,n)}function wr(t){return t.length}function uS(t){return t.length}function Ha(t,e){return e.push(t),t}function Cb(t,e){return t.map(e).join("")}function uw(t,e){return t.filter(function(n){return!Ur(n,e)})}var jd=1,qo=1,cS=0,Kn=0,dt=0,ha="";function zd(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:jd,column:qo,length:o,return:"",siblings:a}}function gi(t,e){return Jm(zd("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Ys(t){for(;t.root;)t=gi(t.root,{children:[t]});Ha(t,t.siblings)}function kb(){return dt}function Pb(){return dt=Kn>0?kt(ha,--Kn):0,qo--,dt===10&&(qo=1,jd--),dt}function lr(){return dt=Kn<cS?kt(ha,Kn++):0,qo++,dt===10&&(qo=1,jd++),dt}function ws(){return kt(ha,Kn)}function Wc(){return Kn}function Hd(t,e){return Ho(ha,t,e)}function Zm(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xb(t){return jd=qo=1,cS=wr(ha=t),Kn=0,[]}function Nb(t){return ha="",t}function vp(t){return lS(Hd(Kn-1,eg(t===91?t+2:t===40?t+1:t)))}function Db(t){for(;(dt=ws())&&dt<33;)lr();return Zm(t)>2||Zm(dt)>3?"":" "}function bb(t,e){for(;--e&&lr()&&!(dt<48||dt>102||dt>57&&dt<65||dt>70&&dt<97););return Hd(t,Wc()+(e<6&&ws()==32&&lr()==32))}function eg(t){for(;lr();)switch(dt){case t:return Kn;case 34:case 39:t!==34&&t!==39&&eg(dt);break;case 40:t===41&&eg(t);break;case 92:lr();break}return Kn}function Ob(t,e){for(;lr()&&t+dt!==57;)if(t+dt===84&&ws()===47)break;return"/*"+Hd(e,Kn-1)+"*"+Gy(t===47?t:lr())}function Lb(t){for(;!Zm(ws());)lr();return Hd(t,Kn)}function Mb(t){return Nb(Kc("",null,null,null,[""],t=xb(t),0,[0],t))}function Kc(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,h=o,d=0,p=0,v=0,_=1,E=1,g=1,f=0,y="",m=i,T=s,S=r,I=y;E;)switch(v=f,f=lr()){case 40:if(v!=108&&kt(I,h-1)==58){qc(I+=de(vp(f),"&","&\f"),"&\f",aS(u?a[u-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:I+=vp(f);break;case 9:case 10:case 13:case 32:I+=Db(v);break;case 92:I+=bb(Wc()-1,7);continue;case 47:switch(ws()){case 42:case 47:Ha(Vb(Ob(lr(),Wc()),e,n,l),l);break;default:I+="/"}break;case 123*_:a[u++]=wr(I)*g;case 125*_:case 59:case 0:switch(f){case 0:case 125:E=0;case 59+c:g==-1&&(I=de(I,/\f/g,"")),p>0&&wr(I)-h&&Ha(p>32?hw(I+";",r,n,h-1,l):hw(de(I," ","")+";",r,n,h-2,l),l);break;case 59:I+=";";default:if(Ha(S=cw(I,e,n,u,c,i,a,y,m=[],T=[],h,s),s),f===123)if(c===0)Kc(I,e,S,S,m,s,h,a,T);else switch(d===99&&kt(I,3)===110?100:d){case 100:case 108:case 109:case 115:Kc(t,S,S,r&&Ha(cw(t,S,S,0,0,i,a,y,i,m=[],h,T),T),i,T,h,a,r?m:T);break;default:Kc(I,S,S,S,[""],T,0,a,T)}}u=c=p=0,_=g=1,y=I="",h=o;break;case 58:h=1+wr(I),p=v;default:if(_<1){if(f==123)--_;else if(f==125&&_++==0&&Pb()==125)continue}switch(I+=Gy(f),f*_){case 38:g=c>0?1:(I+="\f",-1);break;case 44:a[u++]=(wr(I)-1)*g,g=1;break;case 64:ws()===45&&(I+=vp(lr())),d=ws(),c=h=wr(y=I+=Lb(Wc())),f++;break;case 45:v===45&&wr(I)==2&&(_=0)}}return s}function cw(t,e,n,r,i,s,o,a,l,u,c,h){for(var d=i-1,p=i===0?s:[""],v=uS(p),_=0,E=0,g=0;_<r;++_)for(var f=0,y=Ho(t,d+1,d=aS(E=o[_])),m=t;f<v;++f)(m=lS(E>0?p[f]+" "+y:de(y,/&\f/g,p[f])))&&(l[g++]=m);return zd(t,e,n,i===0?Bd:a,l,u,c,h)}function Vb(t,e,n,r){return zd(t,e,n,sS,Gy(kb()),Ho(t,2,-2),0,r)}function hw(t,e,n,r,i){return zd(t,e,n,Ky,Ho(t,0,r),Ho(t,r+1,-1),r,i)}function hS(t,e,n){switch(Ab(t,e)){case 5103:return ke+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ke+t+t;case 4789:return ul+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ke+t+ul+t+Be+t+t;case 5936:switch(kt(t,e+11)){case 114:return ke+t+Be+de(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ke+t+Be+de(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ke+t+Be+de(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ke+t+Be+t+t;case 6165:return ke+t+Be+"flex-"+t+t;case 5187:return ke+t+de(t,/(\w+).+(:[^]+)/,ke+"box-$1$2"+Be+"flex-$1$2")+t;case 5443:return ke+t+Be+"flex-item-"+de(t,/flex-|-self/g,"")+(Ur(t,/flex-|baseline/)?"":Be+"grid-row-"+de(t,/flex-|-self/g,""))+t;case 4675:return ke+t+Be+"flex-line-pack"+de(t,/align-content|flex-|-self/g,"")+t;case 5548:return ke+t+Be+de(t,"shrink","negative")+t;case 5292:return ke+t+Be+de(t,"basis","preferred-size")+t;case 6060:return ke+"box-"+de(t,"-grow","")+ke+t+Be+de(t,"grow","positive")+t;case 4554:return ke+de(t,/([^-])(transform)/g,"$1"+ke+"$2")+t;case 6187:return de(de(de(t,/(zoom-|grab)/,ke+"$1"),/(image-set)/,ke+"$1"),t,"")+t;case 5495:case 3959:return de(t,/(image-set\([^]*)/,ke+"$1$`$1");case 4968:return de(de(t,/(.+:)(flex-)?(.*)/,ke+"box-pack:$3"+Be+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ke+t+t;case 4200:if(!Ur(t,/flex-|baseline/))return Be+"grid-column-align"+Ho(t,e)+t;break;case 2592:case 3360:return Be+de(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Ur(r.props,/grid-\w+-end/)})?~qc(t+(n=n[e].value),"span",0)?t:Be+de(t,"-start","")+t+Be+"grid-row-span:"+(~qc(n,"span",0)?Ur(n,/\d+/):+Ur(n,/\d+/)-+Ur(t,/\d+/))+";":Be+de(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Ur(r.props,/grid-\w+-start/)})?t:Be+de(de(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return de(t,/(.+)-inline(.+)/,ke+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(wr(t)-1-e>6)switch(kt(t,e+1)){case 109:if(kt(t,e+4)!==45)break;case 102:return de(t,/(.+:)(.+)-([^]+)/,"$1"+ke+"$2-$3$1"+ul+(kt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~qc(t,"stretch",0)?hS(de(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return de(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return Be+i+":"+s+u+(o?Be+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(kt(t,e+6)===121)return de(t,":",":"+ke)+t;break;case 6444:switch(kt(t,kt(t,14)===45?18:11)){case 120:return de(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ke+(kt(t,14)===45?"inline-":"")+"box$3$1"+ke+"$2$3$1"+Be+"$2box$3")+t;case 100:return de(t,":",":"+Be)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return de(t,"scroll-","scroll-snap-")+t}return t}function xh(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function $b(t,e,n,r){switch(t.type){case Rb:if(t.children.length)break;case Sb:case Ky:return t.return=t.return||t.value;case sS:return"";case oS:return t.return=t.value+"{"+xh(t.children,r)+"}";case Bd:if(!wr(t.value=t.props.join(",")))return""}return wr(n=xh(t.children,r))?t.return=t.value+"{"+n+"}":""}function Fb(t){var e=uS(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function Ub(t){return function(e){e.root||(e=e.return)&&t(e)}}function Bb(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Ky:t.return=hS(t.value,t.length,n);return;case oS:return xh([gi(t,{value:de(t.value,"@","@"+ke)})],r);case Bd:if(t.length)return Cb(n=t.props,function(i){switch(Ur(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ys(gi(t,{props:[de(i,/:(read-\w+)/,":"+ul+"$1")]})),Ys(gi(t,{props:[i]})),Jm(t,{props:uw(n,r)});break;case"::placeholder":Ys(gi(t,{props:[de(i,/:(plac\w+)/,":"+ke+"input-$1")]})),Ys(gi(t,{props:[de(i,/:(plac\w+)/,":"+ul+"$1")]})),Ys(gi(t,{props:[de(i,/:(plac\w+)/,Be+"input-$1")]})),Ys(gi(t,{props:[i]})),Jm(t,{props:uw(n,r)});break}return""})}}var jb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Tn={},Wo=typeof process<"u"&&Tn!==void 0&&(Tn.REACT_APP_SC_ATTR||Tn.SC_ATTR)||"data-styled",dS="active",fS="data-styled-version",qd="6.1.12",Qy=`/*!sc*/
`,Nh=typeof window<"u"&&"HTMLElement"in window,zb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Tn!==void 0&&Tn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Tn.REACT_APP_SC_DISABLE_SPEEDY!==""?Tn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Tn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Tn!==void 0&&Tn.SC_DISABLE_SPEEDY!==void 0&&Tn.SC_DISABLE_SPEEDY!==""&&Tn.SC_DISABLE_SPEEDY!=="false"&&Tn.SC_DISABLE_SPEEDY),Hb={},Wd=Object.freeze([]),Ko=Object.freeze({});function pS(t,e,n){return n===void 0&&(n=Ko),t.theme!==n.theme&&t.theme||e||n.theme}var mS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),qb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Wb=/(^-|-$)/g;function dw(t){return t.replace(qb,"-").replace(Wb,"")}var Kb=/(a)(d)/gi,mc=52,fw=function(t){return String.fromCharCode(t+(t>25?39:97))};function tg(t){var e,n="";for(e=Math.abs(t);e>mc;e=e/mc|0)n=fw(e%mc)+n;return(fw(e%mc)+n).replace(Kb,"$1-$2")}var _p,gS=5381,vo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},yS=function(t){return vo(gS,t)};function vS(t){return tg(yS(t)>>>0)}function Gb(t){return t.displayName||t.name||"Component"}function wp(t){return typeof t=="string"&&!0}var _S=typeof Symbol=="function"&&Symbol.for,wS=_S?Symbol.for("react.memo"):60115,Qb=_S?Symbol.for("react.forward_ref"):60112,Yb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Xb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ES={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Jb=((_p={})[Qb]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_p[wS]=ES,_p);function pw(t){return("type"in(e=t)&&e.type.$$typeof)===wS?ES:"$$typeof"in t?Jb[t.$$typeof]:Yb;var e}var Zb=Object.defineProperty,eO=Object.getOwnPropertyNames,mw=Object.getOwnPropertySymbols,tO=Object.getOwnPropertyDescriptor,nO=Object.getPrototypeOf,gw=Object.prototype;function TS(t,e,n){if(typeof e!="string"){if(gw){var r=nO(e);r&&r!==gw&&TS(t,r,n)}var i=eO(e);mw&&(i=i.concat(mw(e)));for(var s=pw(t),o=pw(e),a=0;a<i.length;++a){var l=i[a];if(!(l in Xb||n&&n[l]||o&&l in o||s&&l in s)){var u=tO(e,l);try{Zb(t,l,u)}catch{}}}}return t}function Ps(t){return typeof t=="function"}function Yy(t){return typeof t=="object"&&"styledComponentId"in t}function ds(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function ng(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function ql(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function rg(t,e,n){if(n===void 0&&(n=!1),!n&&!ql(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=rg(t[r],e[r]);else if(ql(e))for(var r in e)t[r]=rg(t[r],e[r]);return t}function Xy(t,e){Object.defineProperty(t,"toString",{value:e})}function xs(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var rO=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw xs(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Qy);return n},t}(),Gc=new Map,Dh=new Map,Qc=1,gc=function(t){if(Gc.has(t))return Gc.get(t);for(;Dh.has(Qc);)Qc++;var e=Qc++;return Gc.set(t,e),Dh.set(e,t),e},iO=function(t,e){Qc=e+1,Gc.set(t,e),Dh.set(e,t)},sO="style[".concat(Wo,"][").concat(fS,'="').concat(qd,'"]'),oO=new RegExp("^".concat(Wo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),aO=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},lO=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Qy),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(oO);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(iO(c,u),aO(t,c,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}},yw=function(t){for(var e=document.querySelectorAll(sO),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(Wo)!==dS&&(lO(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function uO(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var IS=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Wo,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Wo,dS),r.setAttribute(fS,qd);var o=uO();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},cO=function(){function t(e){this.element=IS(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw xs(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),hO=function(){function t(e){this.element=IS(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),dO=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),vw=Nh,fO={isServer:!Nh,useCSSOMInjection:!zb},bh=function(){function t(e,n,r){e===void 0&&(e=Ko),n===void 0&&(n={});var i=this;this.options=Pt(Pt({},fO),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Nh&&vw&&(vw=!1,yw(this)),Xy(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(h){var d=function(g){return Dh.get(g)}(h);if(d===void 0)return"continue";var p=s.names.get(d),v=o.getGroup(h);if(p===void 0||!p.size||v.length===0)return"continue";var _="".concat(Wo,".g").concat(h,'[id="').concat(d,'"]'),E="";p!==void 0&&p.forEach(function(g){g.length>0&&(E+="".concat(g,","))}),l+="".concat(v).concat(_,'{content:"').concat(E,'"}').concat(Qy)},c=0;c<a;c++)u(c);return l}(i)})}return t.registerId=function(e){return gc(e)},t.prototype.rehydrate=function(){!this.server&&Nh&&yw(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Pt(Pt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new dO(i):r?new cO(i):new hO(i)}(this.options),new rO(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(gc(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(gc(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(gc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),pO=/&/g,mO=/^\s*\/\/.*$/gm;function SS(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=SS(n.children,e)),n})}function gO(t){var e,n,r,i=Ko,s=i.options,o=s===void 0?Ko:s,a=i.plugins,l=a===void 0?Wd:a,u=function(d,p,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(e):d},c=l.slice();c.push(function(d){d.type===Bd&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(pO,n).replace(r,u))}),o.prefix&&c.push(Bb),c.push($b);var h=function(d,p,v,_){p===void 0&&(p=""),v===void 0&&(v=""),_===void 0&&(_="&"),e=_,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var E=d.replace(mO,""),g=Mb(v||p?"".concat(v," ").concat(p," { ").concat(E," }"):E);o.namespace&&(g=SS(g,o.namespace));var f=[];return xh(g,Fb(c.concat(Ub(function(y){return f.push(y)})))),f};return h.hash=l.length?l.reduce(function(d,p){return p.name||xs(15),vo(d,p.name)},gS).toString():"",h}var yO=new bh,ig=gO(),RS=ze.createContext({shouldForwardProp:void 0,styleSheet:yO,stylis:ig});RS.Consumer;ze.createContext(void 0);function sg(){return x.useContext(RS)}var vO=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=ig);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Xy(this,function(){throw xs(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=ig),this.name+e.hash},t}(),_O=function(t){return t>="A"&&t<="Z"};function _w(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;_O(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var AS=function(t){return t==null||t===!1||t===""},CS=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!AS(s)&&(Array.isArray(s)&&s.isCss||Ps(s)?r.push("".concat(_w(i),":"),s,";"):ql(s)?r.push.apply(r,Hl(Hl(["".concat(i," {")],CS(s),!1),["}"],!1)):r.push("".concat(_w(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in jb||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Vi(t,e,n,r){if(AS(t))return[];if(Yy(t))return[".".concat(t.styledComponentId)];if(Ps(t)){if(!Ps(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Vi(i,e,n,r)}var s;return t instanceof vO?n?(t.inject(n,r),[t.getName(r)]):[t]:ql(t)?CS(t):Array.isArray(t)?Array.prototype.concat.apply(Wd,t.map(function(o){return Vi(o,e,n,r)})):[t.toString()]}function kS(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ps(n)&&!Yy(n))return!1}return!0}var wO=yS(qd),EO=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&kS(e),this.componentId=n,this.baseHash=vo(wO,n),this.baseStyle=r,bh.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ds(i,this.staticRulesId);else{var s=ng(Vi(this.rules,e,n,r)),o=tg(vo(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=ds(i,o),this.staticRulesId=o}else{for(var l=vo(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var h=this.rules[c];if(typeof h=="string")u+=h;else if(h){var d=ng(Vi(h,e,n,r));l=vo(l,d+c),u+=d}}if(u){var p=tg(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(u,".".concat(p),void 0,this.componentId)),i=ds(i,p)}}return i},t}(),Wl=ze.createContext(void 0);Wl.Consumer;function TO(t){var e=ze.useContext(Wl),n=x.useMemo(function(){return function(r,i){if(!r)throw xs(14);if(Ps(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw xs(8);return i?Pt(Pt({},i),r):r}(t.theme,e)},[t.theme,e]);return t.children?ze.createElement(Wl.Provider,{value:n},t.children):null}var Ep={};function IO(t,e,n){var r=Yy(t),i=t,s=!wp(t),o=e.attrs,a=o===void 0?Wd:o,l=e.componentId,u=l===void 0?function(m,T){var S=typeof m!="string"?"sc":dw(m);Ep[S]=(Ep[S]||0)+1;var I="".concat(S,"-").concat(vS(qd+S+Ep[S]));return T?"".concat(T,"-").concat(I):I}(e.displayName,e.parentComponentId):l,c=e.displayName,h=c===void 0?function(m){return wp(m)?"styled.".concat(m):"Styled(".concat(Gb(m),")")}(t):c,d=e.displayName&&e.componentId?"".concat(dw(e.displayName),"-").concat(e.componentId):e.componentId||u,p=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=e.shouldForwardProp;if(r&&i.shouldForwardProp){var _=i.shouldForwardProp;if(e.shouldForwardProp){var E=e.shouldForwardProp;v=function(m,T){return _(m,T)&&E(m,T)}}else v=_}var g=new EO(n,d,r?i.componentStyle:void 0);function f(m,T){return function(S,I,D){var K=S.attrs,V=S.componentStyle,ge=S.defaultProps,j=S.foldedComponentIds,ne=S.styledComponentId,he=S.target,Ee=ze.useContext(Wl),Le=sg(),Me=S.shouldForwardProp||Le.shouldForwardProp,$=pS(I,Ee,ge)||Ko,W=function(Ht,lt,fn){for(var St,Mn=Pt(Pt({},lt),{className:void 0,theme:fn}),ns=0;ns<Ht.length;ns+=1){var pr=Ps(St=Ht[ns])?St(Mn):St;for(var Vn in pr)Mn[Vn]=Vn==="className"?ds(Mn[Vn],pr[Vn]):Vn==="style"?Pt(Pt({},Mn[Vn]),pr[Vn]):pr[Vn]}return lt.className&&(Mn.className=ds(Mn.className,lt.className)),Mn}(K,I,$),ee=W.as||he,Te={};for(var Ie in W)W[Ie]===void 0||Ie[0]==="$"||Ie==="as"||Ie==="theme"&&W.theme===$||(Ie==="forwardedAs"?Te.as=W.forwardedAs:Me&&!Me(Ie,ee)||(Te[Ie]=W[Ie]));var Xn=function(Ht,lt){var fn=sg(),St=Ht.generateAndInjectStyles(lt,fn.styleSheet,fn.stylis);return St}(V,W),_e=ds(j,ne);return Xn&&(_e+=" "+Xn),W.className&&(_e+=" "+W.className),Te[wp(ee)&&!mS.has(ee)?"class":"className"]=_e,Te.ref=D,x.createElement(ee,Te)}(y,m,T)}f.displayName=h;var y=ze.forwardRef(f);return y.attrs=p,y.componentStyle=g,y.displayName=h,y.shouldForwardProp=v,y.foldedComponentIds=r?ds(i.foldedComponentIds,i.styledComponentId):"",y.styledComponentId=d,y.target=r?i.target:t,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=r?function(T){for(var S=[],I=1;I<arguments.length;I++)S[I-1]=arguments[I];for(var D=0,K=S;D<K.length;D++)rg(T,K[D],!0);return T}({},i.defaultProps,m):m}}),Xy(y,function(){return".".concat(y.styledComponentId)}),s&&TS(y,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function ww(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var Ew=function(t){return Object.assign(t,{isCss:!0})};function PS(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Ps(t)||ql(t))return Ew(Vi(ww(Wd,Hl([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Vi(r):Ew(Vi(ww(r,e)))}function og(t,e,n){if(n===void 0&&(n=Ko),!e)throw xs(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,PS.apply(void 0,Hl([i],s,!1)))};return r.attrs=function(i){return og(t,e,Pt(Pt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return og(t,e,Pt(Pt({},n),i))},r}var xS=function(t){return og(IO,t)},H=xS;mS.forEach(function(t){H[t]=xS(t)});var SO=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=kS(e),bh.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(ng(Vi(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&bh.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function RO(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=PS.apply(void 0,Hl([t],e,!1)),i="sc-global-".concat(vS(JSON.stringify(r))),s=new SO(r,i),o=function(l){var u=sg(),c=ze.useContext(Wl),h=ze.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(h,l,u.styleSheet,c,u.stylis),ze.useLayoutEffect(function(){if(!u.styleSheet.server)return a(h,l,u.styleSheet,c,u.stylis),function(){return s.removeStyles(h,u.styleSheet)}},[h,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,h,d){if(s.isStatic)s.renderStyles(l,Hb,c,d);else{var p=Pt(Pt({},u),{theme:pS(u,h,o.defaultProps)});s.renderStyles(l,p,c,d)}}return ze.memo(o)}var Tw={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},AO=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},DS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(NS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):AO(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new CO;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class CO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kO=function(t){const e=NS(t);return DS.encodeByteArray(e,!0)},Oh=function(t){return kO(t).replace(/\./g,"")},bS=function(t){try{return DS.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xO=()=>PO().__FIREBASE_DEFAULTS__,NO=()=>{if(typeof process>"u"||typeof Tw>"u")return;const t=Tw.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},DO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bS(t[1]);return e&&JSON.parse(e)},Kd=()=>{try{return xO()||NO()||DO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},OS=t=>{var e,n;return(n=(e=Kd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},LS=t=>{const e=OS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},MS=()=>{var t;return(t=Kd())===null||t===void 0?void 0:t.config},VS=t=>{var e;return(e=Kd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Oh(JSON.stringify(n)),Oh(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function OO(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function LO(){var t;const e=(t=Kd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function MO(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function VO(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $O(){const t=zt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function FO(){return!LO()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function UO(){try{return typeof indexedDB=="object"}catch{return!1}}function BO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jO="FirebaseError";class Yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=jO,Object.setPrototypeOf(this,Yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wu.prototype.create)}}class wu{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?zO(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Yn(i,a,r)}}function zO(t,e){return t.replace(HO,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const HO=/\{\$([^}]+)}/g;function qO(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Lh(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Iw(s)&&Iw(o)){if(!Lh(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Iw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Wa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function WO(t,e){const n=new KO(t,e);return n.subscribe.bind(n)}class KO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");GO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Tp),i.error===void 0&&(i.error=Tp),i.complete===void 0&&(i.complete=Tp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Tp(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t){return t&&t._delegate?t._delegate:t}class zi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new bO;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(XO(e))try{this.getOrInitializeService({instanceIdentifier:as})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=as){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=as){return this.instances.has(e)}getOptions(e=as){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:YO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=as){return this.component?this.component.multipleInstances?e:as:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function YO(t){return t===as?void 0:t}function XO(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new QO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const ZO={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},e2=ye.INFO,t2={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},n2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=t2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jy{constructor(e){this.name=e,this._logLevel=e2,this._logHandler=n2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const r2=(t,e)=>e.some(n=>t instanceof n);let Sw,Rw;function i2(){return Sw||(Sw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function s2(){return Rw||(Rw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const FS=new WeakMap,ag=new WeakMap,US=new WeakMap,Ip=new WeakMap,Zy=new WeakMap;function o2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n($i(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&FS.set(n,t)}).catch(()=>{}),Zy.set(e,t),e}function a2(t){if(ag.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ag.set(t,e)}let lg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ag.get(t);if(e==="objectStoreNames")return t.objectStoreNames||US.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $i(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function l2(t){lg=t(lg)}function u2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Sp(this),e,...n);return US.set(r,e.sort?e.sort():[e]),$i(r)}:s2().includes(t)?function(...e){return t.apply(Sp(this),e),$i(FS.get(this))}:function(...e){return $i(t.apply(Sp(this),e))}}function c2(t){return typeof t=="function"?u2(t):(t instanceof IDBTransaction&&a2(t),r2(t,i2())?new Proxy(t,lg):t)}function $i(t){if(t instanceof IDBRequest)return o2(t);if(Ip.has(t))return Ip.get(t);const e=c2(t);return e!==t&&(Ip.set(t,e),Zy.set(e,t)),e}const Sp=t=>Zy.get(t);function h2(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=$i(o);return r&&o.addEventListener("upgradeneeded",l=>{r($i(o.result),l.oldVersion,l.newVersion,$i(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const d2=["get","getKey","getAll","getAllKeys","count"],f2=["put","add","delete","clear"],Rp=new Map;function Aw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rp.get(e))return Rp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=f2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||d2.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Rp.set(e,s),s}l2(t=>({...t,get:(e,n,r)=>Aw(e,n)||t.get(e,n,r),has:(e,n)=>!!Aw(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(m2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function m2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ug="@firebase/app",Cw="0.10.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=new Jy("@firebase/app"),g2="@firebase/app-compat",y2="@firebase/analytics-compat",v2="@firebase/analytics",_2="@firebase/app-check-compat",w2="@firebase/app-check",E2="@firebase/auth",T2="@firebase/auth-compat",I2="@firebase/database",S2="@firebase/database-compat",R2="@firebase/functions",A2="@firebase/functions-compat",C2="@firebase/installations",k2="@firebase/installations-compat",P2="@firebase/messaging",x2="@firebase/messaging-compat",N2="@firebase/performance",D2="@firebase/performance-compat",b2="@firebase/remote-config",O2="@firebase/remote-config-compat",L2="@firebase/storage",M2="@firebase/storage-compat",V2="@firebase/firestore",$2="@firebase/firestore-compat",F2="firebase",U2="10.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg="[DEFAULT]",B2={[ug]:"fire-core",[g2]:"fire-core-compat",[v2]:"fire-analytics",[y2]:"fire-analytics-compat",[w2]:"fire-app-check",[_2]:"fire-app-check-compat",[E2]:"fire-auth",[T2]:"fire-auth-compat",[I2]:"fire-rtdb",[S2]:"fire-rtdb-compat",[R2]:"fire-fn",[A2]:"fire-fn-compat",[C2]:"fire-iid",[k2]:"fire-iid-compat",[P2]:"fire-fcm",[x2]:"fire-fcm-compat",[N2]:"fire-perf",[D2]:"fire-perf-compat",[b2]:"fire-rc",[O2]:"fire-rc-compat",[L2]:"fire-gcs",[M2]:"fire-gcs-compat",[V2]:"fire-fst",[$2]:"fire-fst-compat","fire-js":"fire-js",[F2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh=new Map,j2=new Map,hg=new Map;function kw(t,e){try{t.container.addComponent(e)}catch(n){Ns.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ds(t){const e=t.name;if(hg.has(e))return Ns.debug(`There were multiple attempts to register component ${e}.`),!1;hg.set(e,t);for(const n of Mh.values())kw(n,t);for(const n of j2.values())kw(n,t);return!0}function Gd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function sr(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fi=new wu("app","Firebase",z2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=U2;function BS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:cg,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Fi.create("bad-app-name",{appName:String(i)});if(n||(n=MS()),!n)throw Fi.create("no-options");const s=Mh.get(i);if(s){if(Lh(n,s.options)&&Lh(r,s.config))return s;throw Fi.create("duplicate-app",{appName:i})}const o=new JO(i);for(const l of hg.values())o.addComponent(l);const a=new H2(n,r,o);return Mh.set(i,a),a}function ev(t=cg){const e=Mh.get(t);if(!e&&t===cg&&MS())return BS();if(!e)throw Fi.create("no-app",{appName:t});return e}function xr(t,e,n){var r;let i=(r=B2[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ns.warn(a.join(" "));return}Ds(new zi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2="firebase-heartbeat-database",W2=1,Kl="firebase-heartbeat-store";let Ap=null;function jS(){return Ap||(Ap=h2(q2,W2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Kl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Fi.create("idb-open",{originalErrorMessage:t.message})})),Ap}async function K2(t){try{const n=(await jS()).transaction(Kl),r=await n.objectStore(Kl).get(zS(t));return await n.done,r}catch(e){if(e instanceof Yn)Ns.warn(e.message);else{const n=Fi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ns.warn(n.message)}}}async function Pw(t,e){try{const r=(await jS()).transaction(Kl,"readwrite");await r.objectStore(Kl).put(e,zS(t)),await r.done}catch(n){if(n instanceof Yn)Ns.warn(n.message);else{const r=Fi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ns.warn(r.message)}}}function zS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G2=1024,Q2=30*24*60*60*1e3;class Y2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new J2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=xw();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Q2}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=xw(),{heartbeatsToSend:r,unsentEntries:i}=X2(this._heartbeatsCache.heartbeats),s=Oh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function xw(){return new Date().toISOString().substring(0,10)}function X2(t,e=G2){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Nw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Nw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class J2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return UO()?BO().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await K2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Nw(t){return Oh(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z2(t){Ds(new zi("platform-logger",e=>new p2(e),"PRIVATE")),Ds(new zi("heartbeat",e=>new Y2(e),"PRIVATE")),xr(ug,Cw,t),xr(ug,Cw,"esm2017"),xr("fire-js","")}Z2("");var eL="firebase",tL="10.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xr(eL,tL,"app");function HS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nL=HS,qS=new wu("auth","Firebase",HS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh=new Jy("@firebase/auth");function rL(t,...e){Vh.logLevel<=ye.WARN&&Vh.warn(`Auth (${zs}): ${t}`,...e)}function Yc(t,...e){Vh.logLevel<=ye.ERROR&&Vh.error(`Auth (${zs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t,...e){throw nv(t,...e)}function ur(t,...e){return nv(t,...e)}function tv(t,e,n){const r=Object.assign(Object.assign({},nL()),{[e]:n});return new wu("auth","Firebase",r).create(e,{appName:t.name})}function Jr(t){return tv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function iL(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Gn(t,"argument-error"),tv(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function nv(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qS.create(t,...e)}function re(t,e,...n){if(!t)throw nv(e,...n)}function Wr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yc(e),new Error(e)}function ii(t,e){t||Wr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sL(){return Dw()==="http:"||Dw()==="https:"}function Dw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oL(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sL()||MO()||"connection"in navigator)?navigator.onLine:!0}function aL(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n){this.shortDelay=e,this.longDelay=n,ii(n>e,"Short delay should be less than long delay!"),this.isMobile=OO()||VO()}get(){return oL()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(t,e){ii(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uL=new Tu(3e4,6e4);function Xi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function hi(t,e,n,r,i={}){return KS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Eu(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),WS.fetch()(GS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function KS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lL),e);try{const i=new hL(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw yc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw yc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw yc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw yc(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw tv(t,c,u);Gn(t,c)}}catch(i){if(i instanceof Yn)throw i;Gn(t,"network-request-failed",{message:String(i)})}}async function Iu(t,e,n,r,i={}){const s=await hi(t,e,n,r,i);return"mfaPendingCredential"in s&&Gn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function GS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?rv(t.config,i):`${t.config.apiScheme}://${i}`}function cL(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hL{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ur(this.auth,"network-request-failed")),uL.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function yc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ur(t,e,r);return i.customData._tokenResponse=n,i}function bw(t){return t!==void 0&&t.enterprise!==void 0}class dL{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return cL(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function fL(t,e){return hi(t,"GET","/v2/recaptchaConfig",Xi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pL(t,e){return hi(t,"POST","/v1/accounts:delete",e)}async function QS(t,e){return hi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mL(t,e=!1){const n=Ke(t),r=await n.getIdToken(e),i=iv(r);re(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:cl(Cp(i.auth_time)),issuedAtTime:cl(Cp(i.iat)),expirationTime:cl(Cp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Cp(t){return Number(t)*1e3}function iv(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Yc("JWT malformed, contained fewer than 3 sections"),null;try{const i=bS(n);return i?JSON.parse(i):(Yc("Failed to decode base64 JWT payload"),null)}catch(i){return Yc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ow(t){const e=iv(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Go(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Yn&&gL(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function gL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=cl(this.lastLoginAt),this.creationTime=cl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $h(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Go(t,QS(n,{idToken:r}));re(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?YS(s.providerUserInfo):[],a=_L(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new fg(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function vL(t){const e=Ke(t);await $h(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _L(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function YS(t){return t.map(e=>{var{providerId:n}=e,r=Wy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wL(t,e){const n=await KS(t,{},async()=>{const r=Eu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=GS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",WS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function EL(t,e){return hi(t,"POST","/v2/accounts:revokeToken",Xi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ow(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){re(e.length!==0,"internal-error");const n=Ow(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await wL(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Po;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(re(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(re(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Po,this.toJSON())}_performRefresh(){return Wr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Wy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new fg(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Go(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mL(this,e)}reload(){return vL(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $h(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(sr(this.auth.app))return Promise.reject(Jr(this.auth));const e=await this.getIdToken();return await Go(this,pL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:m,isAnonymous:T,providerData:S,stsTokenManager:I}=n;re(y&&I,e,"internal-error");const D=Po.fromJSON(this.name,I);re(typeof y=="string",e,"internal-error"),mi(h,e.name),mi(d,e.name),re(typeof m=="boolean",e,"internal-error"),re(typeof T=="boolean",e,"internal-error"),mi(p,e.name),mi(v,e.name),mi(_,e.name),mi(E,e.name),mi(g,e.name),mi(f,e.name);const K=new Kr({uid:y,auth:e,email:d,emailVerified:m,displayName:h,isAnonymous:T,photoURL:v,phoneNumber:p,tenantId:_,stsTokenManager:D,createdAt:g,lastLoginAt:f});return S&&Array.isArray(S)&&(K.providerData=S.map(V=>Object.assign({},V))),E&&(K._redirectEventId=E),K}static async _fromIdTokenResponse(e,n,r=!1){const i=new Po;i.updateFromServerResponse(n);const s=new Kr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await $h(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];re(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?YS(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Po;a.updateFromIdToken(r);const l=new Kr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new fg(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw=new Map;function Gr(t){ii(t instanceof Function,"Expected a class definition");let e=Lw.get(t);return e?(ii(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Lw.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}XS.type="NONE";const Mw=XS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(t,e,n){return`firebase:${t}:${e}:${n}`}class xo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Xc(this.userKey,i.apiKey,s),this.fullPersistenceKey=Xc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xo(Gr(Mw),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Gr(Mw);const o=Xc(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Kr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new xo(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new xo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(eR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(JS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nR(e))return"Blackberry";if(rR(e))return"Webos";if(sv(e))return"Safari";if((e.includes("chrome/")||ZS(e))&&!e.includes("edge/"))return"Chrome";if(tR(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function JS(t=zt()){return/firefox\//i.test(t)}function sv(t=zt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ZS(t=zt()){return/crios\//i.test(t)}function eR(t=zt()){return/iemobile/i.test(t)}function tR(t=zt()){return/android/i.test(t)}function nR(t=zt()){return/blackberry/i.test(t)}function rR(t=zt()){return/webos/i.test(t)}function Qd(t=zt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function TL(t=zt()){var e;return Qd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function IL(){return $O()&&document.documentMode===10}function iR(t=zt()){return Qd(t)||tR(t)||rR(t)||nR(t)||/windows phone/i.test(t)||eR(t)}function SL(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(t,e=[]){let n;switch(t){case"Browser":n=Vw(zt());break;case"Worker":n=`${Vw(zt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AL(t,e={}){return hi(t,"GET","/v2/passwordPolicy",Xi(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CL=6;class kL{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:CL,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PL{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $w(this),this.idTokenSubscription=new $w(this),this.beforeStateQueue=new RL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await QS(this,{idToken:e}),r=await Kr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(sr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $h(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(sr(this.app))return Promise.reject(Jr(this));const n=e?Ke(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return sr(this.app)?Promise.reject(Jr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return sr(this.app)?Promise.reject(Jr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await AL(this),n=new kL(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wu("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await EL(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gr(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await xo.create(this,[Gr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&rL(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ji(t){return Ke(t)}class $w{constructor(e){this.auth=e,this.observer=null,this.addObserver=WO(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xL(t){Yd=t}function oR(t){return Yd.loadJS(t)}function NL(){return Yd.recaptchaEnterpriseScript}function DL(){return Yd.gapiScript}function bL(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const OL="recaptcha-enterprise",LL="NO_RECAPTCHA";class ML{constructor(e){this.type=OL,this.auth=Ji(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{fL(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new dL(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;bw(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(LL)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&bw(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=NL();l.length!==0&&(l+=a),oR(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Fw(t,e,n,r=!1){const i=new ML(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function pg(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Fw(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Fw(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VL(t,e){const n=Gd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Lh(s,e??{}))return i;Gn(i,"already-initialized")}return n.initialize({options:e})}function $L(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Gr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function FL(t,e,n){const r=Ji(t);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=aR(e),{host:o,port:a}=UL(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),BL()}function aR(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function UL(t){const e=aR(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Uw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Uw(o)}}}function Uw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function BL(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wr("not implemented")}_getIdTokenResponse(e){return Wr("not implemented")}_linkToIdToken(e,n){return Wr("not implemented")}_getReauthenticationResolver(e){return Wr("not implemented")}}async function jL(t,e){return hi(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zL(t,e){return Iu(t,"POST","/v1/accounts:signInWithPassword",Xi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HL(t,e){return Iu(t,"POST","/v1/accounts:signInWithEmailLink",Xi(t,e))}async function qL(t,e){return Iu(t,"POST","/v1/accounts:signInWithEmailLink",Xi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl extends ov{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Gl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Gl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pg(e,n,"signInWithPassword",zL);case"emailLink":return HL(e,{email:this._email,oobCode:this._password});default:Gn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pg(e,r,"signUpPassword",jL);case"emailLink":return qL(e,{idToken:n,email:this._email,oobCode:this._password});default:Gn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function No(t,e){return Iu(t,"POST","/v1/accounts:signInWithIdp",Xi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WL="http://localhost";class bs extends ov{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new bs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Wy(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new bs(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return No(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,No(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,No(e,n)}buildRequest(){const e={requestUri:WL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Eu(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KL(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function GL(t){const e=qa(Wa(t)).link,n=e?qa(Wa(e)).deep_link_id:null,r=qa(Wa(t)).deep_link_id;return(r?qa(Wa(r)).link:null)||r||n||e||t}class av{constructor(e){var n,r,i,s,o,a;const l=qa(Wa(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=KL((i=l.mode)!==null&&i!==void 0?i:null);re(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=GL(e);try{return new av(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(){this.providerId=da.PROVIDER_ID}static credential(e,n){return Gl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=av.parseLink(n);return re(r,"argument-error"),Gl._fromEmailAndCode(e,r.code,r.tenantId)}}da.PROVIDER_ID="password";da.EMAIL_PASSWORD_SIGN_IN_METHOD="password";da.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su extends lv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends Su{constructor(){super("facebook.com")}static credential(e){return bs._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ei.credential(e.oauthAccessToken)}catch{return null}}}Ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ei.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr extends Su{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return bs._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return zr.credentialFromTaggedObject(e)}static credentialFromError(e){return zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return zr.credential(n,r)}catch{return null}}}zr.GOOGLE_SIGN_IN_METHOD="google.com";zr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends Su{constructor(){super("github.com")}static credential(e){return bs._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ti.credentialFromTaggedObject(e)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ti.credential(e.oauthAccessToken)}catch{return null}}}Ti.GITHUB_SIGN_IN_METHOD="github.com";Ti.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends Su{constructor(){super("twitter.com")}static credential(e,n){return bs._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ii.credential(n,r)}catch{return null}}}Ii.TWITTER_SIGN_IN_METHOD="twitter.com";Ii.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QL(t,e){return Iu(t,"POST","/v1/accounts:signUp",Xi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Kr._fromIdTokenResponse(e,r,i),o=Bw(r);return new Os({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Bw(r);return new Os({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Bw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh extends Yn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Fh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Fh(e,n,r,i)}}function lR(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Fh._fromErrorAndOperation(t,s,e,r):s})}async function YL(t,e,n=!1){const r=await Go(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Os._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XL(t,e,n=!1){const{auth:r}=t;if(sr(r.app))return Promise.reject(Jr(r));const i="reauthenticate";try{const s=await Go(t,lR(r,i,e,t),n);re(s.idToken,r,"internal-error");const o=iv(s.idToken);re(o,r,"internal-error");const{sub:a}=o;return re(t.uid===a,r,"user-mismatch"),Os._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Gn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uR(t,e,n=!1){if(sr(t.app))return Promise.reject(Jr(t));const r="signIn",i=await lR(t,r,e),s=await Os._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function JL(t,e){return uR(Ji(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cR(t){const e=Ji(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ZL(t,e,n){if(sr(t.app))return Promise.reject(Jr(t));const r=Ji(t),o=await pg(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",QL).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&cR(t),l}),a=await Os._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function eM(t,e,n){return sr(t.app)?Promise.reject(Jr(t)):JL(Ke(t),da.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&cR(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tM(t,e){return hi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ke(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Go(r,tM(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function nM(t,e,n,r){return Ke(t).onIdTokenChanged(e,n,r)}function rM(t,e,n){return Ke(t).beforeAuthStateChanged(e,n)}const Uh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Uh,"1"),this.storage.removeItem(Uh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iM(){const t=zt();return sv(t)||Qd(t)}const sM=1e3,oM=10;class fR extends dR{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=iM()&&SL(),this.fallbackToPolling=iR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);IL()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,oM):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},sM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fR.type="LOCAL";const aM=fR;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR extends dR{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pR.type="SESSION";const mR=pR;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Xd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await lM(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=uv("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(){return window}function cM(t){Nr().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(){return typeof Nr().WorkerGlobalScope<"u"&&typeof Nr().importScripts=="function"}async function hM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fM(){return gR()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR="firebaseLocalStorageDb",pM=1,Bh="firebaseLocalStorage",vR="fbase_key";class Ru{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jd(t,e){return t.transaction([Bh],e?"readwrite":"readonly").objectStore(Bh)}function mM(){const t=indexedDB.deleteDatabase(yR);return new Ru(t).toPromise()}function mg(){const t=indexedDB.open(yR,pM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Bh,{keyPath:vR})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Bh)?e(r):(r.close(),await mM(),e(await mg()))})})}async function jw(t,e,n){const r=Jd(t,!0).put({[vR]:e,value:n});return new Ru(r).toPromise()}async function gM(t,e){const n=Jd(t,!1).get(e),r=await new Ru(n).toPromise();return r===void 0?null:r.value}function zw(t,e){const n=Jd(t,!0).delete(e);return new Ru(n).toPromise()}const yM=800,vM=3;class _R{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>vM)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gR()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xd._getInstance(fM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hM(),!this.activeServiceWorker)return;this.sender=new uM(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mg();return await jw(e,Uh,"1"),await zw(e,Uh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gM(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Jd(i,!1).getAll();return new Ru(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_R.type="LOCAL";const _M=_R;new Tu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wR(t,e){return e?Gr(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv extends ov{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return No(e,this._buildIdpRequest())}_linkToIdToken(e,n){return No(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return No(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wM(t){return uR(t.auth,new cv(t),t.bypassAuthState)}function EM(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),XL(n,new cv(t),t.bypassAuthState)}async function TM(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),YL(n,new cv(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wM;case"linkViaPopup":case"linkViaRedirect":return TM;case"reauthViaPopup":case"reauthViaRedirect":return EM;default:Gn(this.auth,"internal-error")}}resolve(e){ii(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ii(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IM=new Tu(2e3,1e4);async function SM(t,e,n){if(sr(t.app))return Promise.reject(ur(t,"operation-not-supported-in-this-environment"));const r=Ji(t);iL(t,e,lv);const i=wR(r,n);return new fs(r,"signInViaPopup",e,i).executeNotNull()}class fs extends ER{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,fs.currentPopupAction&&fs.currentPopupAction.cancel(),fs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){ii(this.filter.length===1,"Popup operations only handle one event");const e=uv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ur(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ur(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ur(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IM.get())};e()}}fs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RM="pendingRedirect",Jc=new Map;class AM extends ER{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Jc.get(this.auth._key());if(!e){try{const r=await CM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Jc.set(this.auth._key(),e)}return this.bypassAuthState||Jc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CM(t,e){const n=xM(e),r=PM(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function kM(t,e){Jc.set(t._key(),e)}function PM(t){return Gr(t._redirectPersistence)}function xM(t){return Xc(RM,t.config.apiKey,t.name)}async function NM(t,e,n=!1){if(sr(t.app))return Promise.reject(Jr(t));const r=Ji(t),i=wR(r,e),o=await new AM(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DM=10*60*1e3;class bM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!TR(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ur(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DM&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hw(e))}saveEventToCache(e){this.cachedEventUids.add(Hw(e)),this.lastProcessedEventTime=Date.now()}}function Hw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function TR({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return TR(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LM(t,e={}){return hi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VM=/^https?/;async function $M(t){if(t.config.emulator)return;const{authorizedDomains:e}=await LM(t);for(const n of e)try{if(FM(n))return}catch{}Gn(t,"unauthorized-domain")}function FM(t){const e=dg(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!VM.test(n))return!1;if(MM.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UM=new Tu(3e4,6e4);function qw(){const t=Nr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function BM(t){return new Promise((e,n)=>{var r,i,s;function o(){qw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qw(),n(ur(t,"network-request-failed"))},timeout:UM.get()})}if(!((i=(r=Nr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Nr().gapi)===null||s===void 0)&&s.load)o();else{const a=bL("iframefcb");return Nr()[a]=()=>{gapi.load?o():n(ur(t,"network-request-failed"))},oR(`${DL()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Zc=null,e})}let Zc=null;function jM(t){return Zc=Zc||BM(t),Zc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zM=new Tu(5e3,15e3),HM="__/auth/iframe",qM="emulator/auth/iframe",WM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GM(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?rv(e,qM):`https://${t.config.authDomain}/${HM}`,r={apiKey:e.apiKey,appName:t.name,v:zs},i=KM.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Eu(r).slice(1)}`}async function QM(t){const e=await jM(t),n=Nr().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:GM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WM,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ur(t,"network-request-failed"),a=Nr().setTimeout(()=>{s(o)},zM.get());function l(){Nr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XM=500,JM=600,ZM="_blank",eV="http://localhost";class Ww{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tV(t,e,n,r=XM,i=JM){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},YM),{width:r.toString(),height:i.toString(),top:s,left:o}),u=zt().toLowerCase();n&&(a=ZS(u)?ZM:n),JS(u)&&(e=e||eV,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,v])=>`${d}${p}=${v},`,"");if(TL(u)&&a!=="_self")return nV(e||"",a),new Ww(null);const h=window.open(e||"",a,c);re(h,t,"popup-blocked");try{h.focus()}catch{}return new Ww(h)}function nV(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rV="__/auth/handler",iV="emulator/auth/handler",sV=encodeURIComponent("fac");async function Kw(t,e,n,r,i,s){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zs,eventId:i};if(e instanceof lv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qO(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries({}))o[c]=h}if(e instanceof Su){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${sV}=${encodeURIComponent(l)}`:"";return`${oV(t)}?${Eu(a).slice(1)}${u}`}function oV({config:t}){return t.emulator?rv(t,iV):`https://${t.authDomain}/${rV}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp="webStorageSupport";class aV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mR,this._completeRedirectFn=NM,this._overrideRedirectResult=kM}async _openPopup(e,n,r,i){var s;ii((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Kw(e,n,r,dg(),i);return tV(e,o,uv())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Kw(e,n,r,dg(),i);return cM(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ii(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await QM(e),r=new bM(e);return n.register("authEvent",i=>(re(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(kp,{type:kp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[kp];o!==void 0&&n(!!o),Gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$M(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return iR()||sv()||Qd()}}const lV=aV;var Gw="@firebase/auth",Qw="1.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hV(t){Ds(new zi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sR(t)},u=new PL(r,i,s,l);return $L(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ds(new zi("auth-internal",e=>{const n=Ji(e.getProvider("auth").getImmediate());return(r=>new uV(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xr(Gw,Qw,cV(t)),xr(Gw,Qw,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dV=5*60,fV=VS("authIdTokenMaxAge")||dV;let Yw=null;const pV=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>fV)return;const i=n==null?void 0:n.token;Yw!==i&&(Yw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function IR(t=ev()){const e=Gd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=VL(t,{popupRedirectResolver:lV,persistence:[_M,aM,mR]}),r=VS("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=pV(s.toString());rM(n,o,()=>o(n.currentUser)),nM(n,a=>o(a))}}const i=OS("auth");return i&&FL(n,`http://${i}`),n}function mV(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}xL({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ur("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",mV().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hV("Browser");var gV=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,hv=hv||{},oe=gV||self;function Zd(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ef(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function yV(t){return Object.prototype.hasOwnProperty.call(t,Pp)&&t[Pp]||(t[Pp]=++vV)}var Pp="closure_uid_"+(1e9*Math.random()>>>0),vV=0;function _V(t,e,n){return t.call.apply(t.bind,arguments)}function wV(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function en(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?en=_V:en=wV,en.apply(null,arguments)}function vc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function bt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Zi(){this.s=this.s,this.o=this.o}var EV=0;Zi.prototype.s=!1;Zi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),EV!=0)&&yV(this)};Zi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const SR=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function dv(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Xw(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Zd(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function tn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}tn.prototype.h=function(){this.defaultPrevented=!0};var TV=function(){if(!oe.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};oe.addEventListener("test",n,e),oe.removeEventListener("test",n,e)}catch{}return t}();function Ql(t){return/^[\s\xa0]*$/.test(t)}function tf(){var t=oe.navigator;return t&&(t=t.userAgent)?t:""}function Tr(t){return tf().indexOf(t)!=-1}function fv(t){return fv[" "](t),t}fv[" "]=function(){};function IV(t,e){var n=g$;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var SV=Tr("Opera"),Qo=Tr("Trident")||Tr("MSIE"),RR=Tr("Edge"),gg=RR||Qo,AR=Tr("Gecko")&&!(tf().toLowerCase().indexOf("webkit")!=-1&&!Tr("Edge"))&&!(Tr("Trident")||Tr("MSIE"))&&!Tr("Edge"),RV=tf().toLowerCase().indexOf("webkit")!=-1&&!Tr("Edge");function CR(){var t=oe.document;return t?t.documentMode:void 0}var yg;e:{var xp="",Np=function(){var t=tf();if(AR)return/rv:([^\);]+)(\)|;)/.exec(t);if(RR)return/Edge\/([\d\.]+)/.exec(t);if(Qo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(RV)return/WebKit\/(\S+)/.exec(t);if(SV)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Np&&(xp=Np?Np[1]:""),Qo){var Dp=CR();if(Dp!=null&&Dp>parseFloat(xp)){yg=String(Dp);break e}}yg=xp}var vg;if(oe.document&&Qo){var Jw=CR();vg=Jw||parseInt(yg,10)||void 0}else vg=void 0;var AV=vg;function Yl(t,e){if(tn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(AR){e:{try{fv(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:CV[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Yl.$.h.call(this)}}bt(Yl,tn);var CV={2:"touch",3:"pen",4:"mouse"};Yl.prototype.h=function(){Yl.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var nf="closure_listenable_"+(1e6*Math.random()|0),kV=0;function PV(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++kV,this.fa=this.ia=!1}function rf(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function pv(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function xV(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function kR(t){const e={};for(const n in t)e[n]=t[n];return e}const Zw="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function PR(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Zw.length;s++)n=Zw[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function sf(t){this.src=t,this.g={},this.h=0}sf.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=wg(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new PV(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function _g(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=SR(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(rf(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function wg(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var mv="closure_lm_"+(1e6*Math.random()|0),bp={};function xR(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)xR(t,e[s],n,r,i);return null}return n=bR(n),t&&t[nf]?t.O(e,n,ef(r)?!!r.capture:!!r,i):NV(t,e,n,!1,r,i)}function NV(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ef(i)?!!i.capture:!!i,a=yv(t);if(a||(t[mv]=a=new sf(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=DV(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)TV||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(DR(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function DV(){function t(n){return e.call(t.src,t.listener,n)}const e=bV;return t}function NR(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)NR(t,e[s],n,r,i);else r=ef(r)?!!r.capture:!!r,n=bR(n),t&&t[nf]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=wg(s,n,r,i),-1<n&&(rf(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=yv(t))&&(e=t.g[e.toString()],t=-1,e&&(t=wg(e,n,r,i)),(n=-1<t?e[t]:null)&&gv(n))}function gv(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[nf])_g(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(DR(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=yv(e))?(_g(n,t),n.h==0&&(n.src=null,e[mv]=null)):rf(t)}}}function DR(t){return t in bp?bp[t]:bp[t]="on"+t}function bV(t,e){if(t.fa)t=!0;else{e=new Yl(e,this);var n=t.listener,r=t.la||t.src;t.ia&&gv(t),t=n.call(r,e)}return t}function yv(t){return t=t[mv],t instanceof sf?t:null}var Op="__closure_events_fn_"+(1e9*Math.random()>>>0);function bR(t){return typeof t=="function"?t:(t[Op]||(t[Op]=function(e){return t.handleEvent(e)}),t[Op])}function Nt(){Zi.call(this),this.i=new sf(this),this.S=this,this.J=null}bt(Nt,Zi);Nt.prototype[nf]=!0;Nt.prototype.removeEventListener=function(t,e,n,r){NR(this,t,e,n,r)};function Ut(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new tn(e,t);else if(e instanceof tn)e.target=e.target||t;else{var i=e;e=new tn(r,t),PR(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=_c(o,r,!0,e)&&i}if(o=e.g=t,i=_c(o,r,!0,e)&&i,i=_c(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=_c(o,r,!1,e)&&i}Nt.prototype.N=function(){if(Nt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)rf(n[r]);delete t.g[e],t.h--}}this.J=null};Nt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Nt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function _c(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&_g(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var vv=oe.JSON.stringify;class OV{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function LV(){var t=_v;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class MV{constructor(){this.h=this.g=null}add(e,n){const r=OR.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var OR=new OV(()=>new VV,t=>t.reset());class VV{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function $V(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function FV(t){oe.setTimeout(()=>{throw t},0)}let Xl,Jl=!1,_v=new MV,LR=()=>{const t=oe.Promise.resolve(void 0);Xl=()=>{t.then(UV)}};var UV=()=>{for(var t;t=LV();){try{t.h.call(t.g)}catch(n){FV(n)}var e=OR;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Jl=!1};function of(t,e){Nt.call(this),this.h=t||1,this.g=e||oe,this.j=en(this.qb,this),this.l=Date.now()}bt(of,Nt);U=of.prototype;U.ga=!1;U.T=null;U.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ut(this,"tick"),this.ga&&(wv(this),this.start()))}};U.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function wv(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}U.N=function(){of.$.N.call(this),wv(this),delete this.g};function Ev(t,e,n){if(typeof t=="function")n&&(t=en(t,n));else if(t&&typeof t.handleEvent=="function")t=en(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:oe.setTimeout(t,e||0)}function MR(t){t.g=Ev(()=>{t.g=null,t.i&&(t.i=!1,MR(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class BV extends Zi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:MR(this)}N(){super.N(),this.g&&(oe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zl(t){Zi.call(this),this.h=t,this.g={}}bt(Zl,Zi);var e1=[];function VR(t,e,n,r){Array.isArray(n)||(n&&(e1[0]=n.toString()),n=e1);for(var i=0;i<n.length;i++){var s=xR(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function $R(t){pv(t.g,function(e,n){this.g.hasOwnProperty(n)&&gv(e)},t),t.g={}}Zl.prototype.N=function(){Zl.$.N.call(this),$R(this)};Zl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function af(){this.g=!0}af.prototype.Ea=function(){this.g=!1};function jV(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function zV(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function _o(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+qV(t,n)+(r?" "+r:"")})}function HV(t,e){t.info(function(){return"TIMEOUT: "+e})}af.prototype.info=function(){};function qV(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return vv(n)}catch{return e}}var Hs={},t1=null;function lf(){return t1=t1||new Nt}Hs.Ta="serverreachability";function FR(t){tn.call(this,Hs.Ta,t)}bt(FR,tn);function eu(t){const e=lf();Ut(e,new FR(e))}Hs.STAT_EVENT="statevent";function UR(t,e){tn.call(this,Hs.STAT_EVENT,t),this.stat=e}bt(UR,tn);function ln(t){const e=lf();Ut(e,new UR(e,t))}Hs.Ua="timingevent";function BR(t,e){tn.call(this,Hs.Ua,t),this.size=e}bt(BR,tn);function Au(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return oe.setTimeout(function(){t()},e)}var uf={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},jR={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Tv(){}Tv.prototype.h=null;function n1(t){return t.h||(t.h=t.i())}function zR(){}var Cu={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Iv(){tn.call(this,"d")}bt(Iv,tn);function Sv(){tn.call(this,"c")}bt(Sv,tn);var Eg;function cf(){}bt(cf,Tv);cf.prototype.g=function(){return new XMLHttpRequest};cf.prototype.i=function(){return{}};Eg=new cf;function ku(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Zl(this),this.P=WV,t=gg?125:void 0,this.V=new of(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new HR}function HR(){this.i=null,this.g="",this.h=!1}var WV=45e3,qR={},Tg={};U=ku.prototype;U.setTimeout=function(t){this.P=t};function Ig(t,e,n){t.L=1,t.A=df(si(e)),t.u=n,t.S=!0,WR(t,null)}function WR(t,e){t.G=Date.now(),Pu(t),t.B=si(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),eA(n.i,"t",r),t.o=0,n=t.l.J,t.h=new HR,t.g=EA(t.l,n?e:null,!t.u),0<t.O&&(t.M=new BV(en(t.Pa,t,t.g),t.O)),VR(t.U,t.g,"readystatechange",t.nb),e=t.I?kR(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),eu(),jV(t.j,t.v,t.B,t.m,t.W,t.u)}U.nb=function(t){t=t.target;const e=this.M;e&&Ir(t)==3?e.l():this.Pa(t)};U.Pa=function(t){try{if(t==this.g)e:{const c=Ir(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||gg||this.g&&(this.h.h||this.g.ja()||o1(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?eu(3):eu(2)),hf(this);var n=this.g.da();this.ca=n;t:if(KR(this)){var r=o1(this.g);t="";var i=r.length,s=Ir(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ps(this),hl(this);var o="";break t}this.h.i=new oe.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,zV(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ql(a)){var u=a;break t}}u=null}if(n=u)_o(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sg(this,n);else{this.i=!1,this.s=3,ln(12),ps(this),hl(this);break e}}this.S?(GR(this,c,o),gg&&this.i&&c==3&&(VR(this.U,this.V,"tick",this.mb),this.V.start())):(_o(this.j,this.m,o,null),Sg(this,o)),c==4&&ps(this),this.i&&!this.J&&(c==4?yA(this.l,this):(this.i=!1,Pu(this)))}else f$(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,ln(12)):(this.s=0,ln(13)),ps(this),hl(this)}}}catch{}finally{}};function KR(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function GR(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=KV(t,n),i==Tg){e==4&&(t.s=4,ln(14),r=!1),_o(t.j,t.m,null,"[Incomplete Response]");break}else if(i==qR){t.s=4,ln(15),_o(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else _o(t.j,t.m,i,null),Sg(t,i);KR(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,ln(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),xv(e),e.M=!0,ln(11))):(_o(t.j,t.m,n,"[Invalid Chunked Response]"),ps(t),hl(t))}U.mb=function(){if(this.g){var t=Ir(this.g),e=this.g.ja();this.o<e.length&&(hf(this),GR(this,t,e),this.i&&t!=4&&Pu(this))}};function KV(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Tg:(n=Number(e.substring(n,r)),isNaN(n)?qR:(r+=1,r+n>e.length?Tg:(e=e.slice(r,r+n),t.o=r+n,e)))}U.cancel=function(){this.J=!0,ps(this)};function Pu(t){t.Y=Date.now()+t.P,QR(t,t.P)}function QR(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Au(en(t.lb,t),e)}function hf(t){t.C&&(oe.clearTimeout(t.C),t.C=null)}U.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(HV(this.j,this.B),this.L!=2&&(eu(),ln(17)),ps(this),this.s=2,hl(this)):QR(this,this.Y-t)};function hl(t){t.l.H==0||t.J||yA(t.l,t)}function ps(t){hf(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,wv(t.V),$R(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Sg(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Rg(n.i,t))){if(!t.K&&Rg(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Hh(n),mf(n);else break e;Pv(n),ln(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Au(en(n.ib,n),6e3));if(1>=rA(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ms(n,11)}else if((t.K||n.g==t)&&Hh(n),!Ql(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Rv(s,s.h),s.h=null))}if(r.F){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,He(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=wA(r,r.J?r.pa:null,r.Y),o.K){iA(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(hf(a),Pu(a)),r.g=o}else mA(r);0<n.j.length&&gf(n)}else u[0]!="stop"&&u[0]!="close"||ms(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ms(n,7):kv(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}eu(4)}catch{}}function GV(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Zd(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function QV(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Zd(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function YR(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Zd(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=QV(t),r=GV(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var XR=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function YV(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Es(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Es){this.h=t.h,jh(this,t.j),this.s=t.s,this.g=t.g,zh(this,t.m),this.l=t.l;var e=t.i,n=new tu;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),r1(this,n),this.o=t.o}else t&&(e=String(t).match(XR))?(this.h=!1,jh(this,e[1]||"",!0),this.s=Ka(e[2]||""),this.g=Ka(e[3]||"",!0),zh(this,e[4]),this.l=Ka(e[5]||"",!0),r1(this,e[6]||"",!0),this.o=Ka(e[7]||"")):(this.h=!1,this.i=new tu(null,this.h))}Es.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ga(e,i1,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ga(e,i1,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ga(n,n.charAt(0)=="/"?ZV:JV,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ga(n,t$)),t.join("")};function si(t){return new Es(t)}function jh(t,e,n){t.j=n?Ka(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function zh(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function r1(t,e,n){e instanceof tu?(t.i=e,n$(t.i,t.h)):(n||(e=Ga(e,e$)),t.i=new tu(e,t.h))}function He(t,e,n){t.i.set(e,n)}function df(t){return He(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ka(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ga(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,XV),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function XV(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var i1=/[#\/\?@]/g,JV=/[#\?:]/g,ZV=/[#\?]/g,e$=/[#\?@]/g,t$=/#/g;function tu(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function es(t){t.g||(t.g=new Map,t.h=0,t.i&&YV(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=tu.prototype;U.add=function(t,e){es(this),this.i=null,t=fa(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function JR(t,e){es(t),e=fa(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ZR(t,e){return es(t),e=fa(t,e),t.g.has(e)}U.forEach=function(t,e){es(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};U.ta=function(){es(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};U.Z=function(t){es(this);let e=[];if(typeof t=="string")ZR(this,t)&&(e=e.concat(this.g.get(fa(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return es(this),this.i=null,t=fa(this,t),ZR(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function eA(t,e,n){JR(t,e),0<n.length&&(t.i=null,t.g.set(fa(t,e),dv(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function fa(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function n$(t,e){e&&!t.j&&(es(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(JR(this,r),eA(this,i,n))},t)),t.j=e}var r$=class{constructor(t,e){this.g=t,this.map=e}};function tA(t){this.l=t||i$,oe.PerformanceNavigationTiming?(t=oe.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(oe.g&&oe.g.Ka&&oe.g.Ka()&&oe.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var i$=10;function nA(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function rA(t){return t.h?1:t.g?t.g.size:0}function Rg(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Rv(t,e){t.g?t.g.add(e):t.h=e}function iA(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}tA.prototype.cancel=function(){if(this.i=sA(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function sA(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return dv(t.i)}var s$=class{stringify(t){return oe.JSON.stringify(t,void 0)}parse(t){return oe.JSON.parse(t,void 0)}};function o$(){this.g=new s$}function a$(t,e,n){const r=n||"";try{YR(t,function(i,s){let o=i;ef(i)&&(o=vv(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function l$(t,e){const n=new af;if(oe.Image){const r=new Image;r.onload=vc(wc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=vc(wc,n,r,"TestLoadImage: error",!1,e),r.onabort=vc(wc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=vc(wc,n,r,"TestLoadImage: timeout",!1,e),oe.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function wc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function xu(t){this.l=t.ec||null,this.j=t.ob||!1}bt(xu,Tv);xu.prototype.g=function(){return new ff(this.l,this.j)};xu.prototype.i=function(t){return function(){return t}}({});function ff(t,e){Nt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Av,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}bt(ff,Nt);var Av=0;U=ff.prototype;U.open=function(t,e){if(this.readyState!=Av)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,nu(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||oe).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Nu(this)),this.readyState=Av};U.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,nu(this)),this.g&&(this.readyState=3,nu(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof oe.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;oA(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function oA(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}U.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Nu(this):nu(this),this.readyState==3&&oA(this)}};U.Za=function(t){this.g&&(this.response=this.responseText=t,Nu(this))};U.Ya=function(t){this.g&&(this.response=t,Nu(this))};U.ka=function(){this.g&&Nu(this)};function Nu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,nu(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function nu(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ff.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var u$=oe.JSON.parse;function nt(t){Nt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=aA,this.L=this.M=!1}bt(nt,Nt);var aA="",c$=/^https?$/i,h$=["POST","PUT"];U=nt.prototype;U.Oa=function(t){this.M=t};U.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Eg.g(),this.C=this.u?n1(this.u):n1(Eg),this.g.onreadystatechange=en(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){s1(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=oe.FormData&&t instanceof oe.FormData,!(0<=SR(h$,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{cA(this),0<this.B&&((this.L=d$(this.g))?(this.g.timeout=this.B,this.g.ontimeout=en(this.ua,this)):this.A=Ev(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){s1(this,s)}};function d$(t){return Qo&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.ua=function(){typeof hv<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ut(this,"timeout"),this.abort(8))};function s1(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,lA(t),pf(t)}function lA(t){t.F||(t.F=!0,Ut(t,"complete"),Ut(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ut(this,"complete"),Ut(this,"abort"),pf(this))};U.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),pf(this,!0)),nt.$.N.call(this)};U.La=function(){this.s||(this.G||this.v||this.l?uA(this):this.kb())};U.kb=function(){uA(this)};function uA(t){if(t.h&&typeof hv<"u"&&(!t.C[1]||Ir(t)!=4||t.da()!=2)){if(t.v&&Ir(t)==4)Ev(t.La,0,t);else if(Ut(t,"readystatechange"),Ir(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(XR)[1]||null;!i&&oe.self&&oe.self.location&&(i=oe.self.location.protocol.slice(0,-1)),r=!c$.test(i?i.toLowerCase():"")}n=r}if(n)Ut(t,"complete"),Ut(t,"success");else{t.m=6;try{var s=2<Ir(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",lA(t)}}finally{pf(t)}}}}function pf(t,e){if(t.g){cA(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ut(t,"ready");try{n.onreadystatechange=r}catch{}}}function cA(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(oe.clearTimeout(t.A),t.A=null)}U.isActive=function(){return!!this.g};function Ir(t){return t.g?t.g.readyState:0}U.da=function(){try{return 2<Ir(this)?this.g.status:-1}catch{return-1}};U.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),u$(e)}};function o1(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case aA:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function f$(t){const e={};t=(t.g&&2<=Ir(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ql(t[r]))continue;var n=$V(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}xV(e,function(r){return r.join(", ")})}U.Ia=function(){return this.m};U.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function hA(t){let e="";return pv(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Cv(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=hA(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):He(t,e,n))}function La(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function dA(t){this.Ga=0,this.j=[],this.l=new af,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=La("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=La("baseRetryDelayMs",5e3,t),this.hb=La("retryDelaySeedMs",1e4,t),this.eb=La("forwardChannelMaxRetries",2,t),this.xa=La("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new tA(t&&t.concurrentRequestLimit),this.Ja=new o$,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}U=dA.prototype;U.ra=8;U.H=1;function kv(t){if(fA(t),t.H==3){var e=t.W++,n=si(t.I);if(He(n,"SID",t.K),He(n,"RID",e),He(n,"TYPE","terminate"),Du(t,n),e=new ku(t,t.l,e),e.L=2,e.A=df(si(n)),n=!1,oe.navigator&&oe.navigator.sendBeacon)try{n=oe.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&oe.Image&&(new Image().src=e.A,n=!0),n||(e.g=EA(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Pu(e)}_A(t)}function mf(t){t.g&&(xv(t),t.g.cancel(),t.g=null)}function fA(t){mf(t),t.u&&(oe.clearTimeout(t.u),t.u=null),Hh(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&oe.clearTimeout(t.m),t.m=null)}function gf(t){if(!nA(t.i)&&!t.m){t.m=!0;var e=t.Na;Xl||LR(),Jl||(Xl(),Jl=!0),_v.add(e,t),t.C=0}}function p$(t,e){return rA(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Au(en(t.Na,t,e),vA(t,t.C)),t.C++,!0)}U.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new ku(this,this.l,t);let s=this.s;if(this.U&&(s?(s=kR(s),PR(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=pA(this,i,e),n=si(this.I),He(n,"RID",t),He(n,"CVER",22),this.F&&He(n,"X-HTTP-Session-Id",this.F),Du(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(hA(s)))+"&"+e:this.o&&Cv(n,this.o,s)),Rv(this.i,i),this.bb&&He(n,"TYPE","init"),this.P?(He(n,"$req",e),He(n,"SID","null"),i.aa=!0,Ig(i,n,null)):Ig(i,n,e),this.H=2}}else this.H==3&&(t?a1(this,t):this.j.length==0||nA(this.i)||a1(this))};function a1(t,e){var n;e?n=e.m:n=t.W++;const r=si(t.I);He(r,"SID",t.K),He(r,"RID",n),He(r,"AID",t.V),Du(t,r),t.o&&t.s&&Cv(r,t.o,t.s),n=new ku(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=pA(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Rv(t.i,n),Ig(n,r,e)}function Du(t,e){t.na&&pv(t.na,function(n,r){He(e,r,n)}),t.h&&YR({},function(n,r){He(e,r,n)})}function pA(t,e,n){n=Math.min(t.j.length,n);var r=t.h?en(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{a$(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function mA(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Xl||LR(),Jl||(Xl(),Jl=!0),_v.add(e,t),t.A=0}}function Pv(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Au(en(t.Ma,t),vA(t,t.A)),t.A++,!0)}U.Ma=function(){if(this.u=null,gA(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Au(en(this.jb,this),t)}};U.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ln(10),mf(this),gA(this))};function xv(t){t.B!=null&&(oe.clearTimeout(t.B),t.B=null)}function gA(t){t.g=new ku(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=si(t.wa);He(e,"RID","rpc"),He(e,"SID",t.K),He(e,"AID",t.V),He(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&He(e,"TO",t.qa),He(e,"TYPE","xmlhttp"),Du(t,e),t.o&&t.s&&Cv(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=df(si(e)),n.u=null,n.S=!0,WR(n,t)}U.ib=function(){this.v!=null&&(this.v=null,mf(this),Pv(this),ln(19))};function Hh(t){t.v!=null&&(oe.clearTimeout(t.v),t.v=null)}function yA(t,e){var n=null;if(t.g==e){Hh(t),xv(t),t.g=null;var r=2}else if(Rg(t.i,e))n=e.F,iA(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=lf(),Ut(r,new BR(r,n)),gf(t)}else mA(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&p$(t,e)||r==2&&Pv(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ms(t,5);break;case 4:ms(t,10);break;case 3:ms(t,6);break;default:ms(t,2)}}}function vA(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ms(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=en(t.pb,t);n||(n=new Es("//www.google.com/images/cleardot.gif"),oe.location&&oe.location.protocol=="http"||jh(n,"https"),df(n)),l$(n.toString(),r)}else ln(2);t.H=0,t.h&&t.h.za(e),_A(t),fA(t)}U.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ln(2)):(this.l.info("Failed to ping google.com"),ln(1))};function _A(t){if(t.H=0,t.ma=[],t.h){const e=sA(t.i);(e.length!=0||t.j.length!=0)&&(Xw(t.ma,e),Xw(t.ma,t.j),t.i.i.length=0,dv(t.j),t.j.length=0),t.h.ya()}}function wA(t,e,n){var r=n instanceof Es?si(n):new Es(n);if(r.g!="")e&&(r.g=e+"."+r.g),zh(r,r.m);else{var i=oe.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Es(null);r&&jh(s,r),e&&(s.g=e),i&&zh(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&He(r,n,e),He(r,"VER",t.ra),Du(t,r),r}function EA(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new nt(new xu({ob:n})):new nt(t.va),e.Oa(t.J),e}U.isActive=function(){return!!this.h&&this.h.isActive(this)};function TA(){}U=TA.prototype;U.Ba=function(){};U.Aa=function(){};U.za=function(){};U.ya=function(){};U.isActive=function(){return!0};U.Va=function(){};function qh(){if(Qo&&!(10<=Number(AV)))throw Error("Environmental error: no available transport.")}qh.prototype.g=function(t,e){return new Dn(t,e)};function Dn(t,e){Nt.call(this),this.g=new dA(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ql(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ql(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new pa(this)}bt(Dn,Nt);Dn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ln(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=wA(t,null,t.Y),gf(t)};Dn.prototype.close=function(){kv(this.g)};Dn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=vv(t),t=n);e.j.push(new r$(e.fb++,t)),e.H==3&&gf(e)};Dn.prototype.N=function(){this.g.h=null,delete this.j,kv(this.g),delete this.g,Dn.$.N.call(this)};function IA(t){Iv.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}bt(IA,Iv);function SA(){Sv.call(this),this.status=1}bt(SA,Sv);function pa(t){this.g=t}bt(pa,TA);pa.prototype.Ba=function(){Ut(this.g,"a")};pa.prototype.Aa=function(t){Ut(this.g,new IA(t))};pa.prototype.za=function(t){Ut(this.g,new SA)};pa.prototype.ya=function(){Ut(this.g,"b")};function m$(){this.blockSize=-1}function hr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}bt(hr,m$);hr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Lp(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}hr.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Lp(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Lp(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Lp(this,r),i=0;break}}this.h=i,this.i+=e};hr.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ne(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var g$={};function Nv(t){return-128<=t&&128>t?IV(t,function(e){return new Ne([e|0],0>e?-1:0)}):new Ne([t|0],0>t?-1:0)}function Sr(t){if(isNaN(t)||!isFinite(t))return Do;if(0>t)return Vt(Sr(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Ag;return new Ne(e,0)}function RA(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Vt(RA(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Sr(Math.pow(e,8)),r=Do,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Sr(Math.pow(e,s)),r=r.R(s).add(Sr(o))):(r=r.R(n),r=r.add(Sr(o)))}return r}var Ag=4294967296,Do=Nv(0),Cg=Nv(1),l1=Nv(16777216);U=Ne.prototype;U.ea=function(){if(jn(this))return-Vt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Ag+r)*e,e*=Ag}return t};U.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Qr(this))return"0";if(jn(this))return"-"+Vt(this).toString(t);for(var e=Sr(Math.pow(t,6)),n=this,r="";;){var i=Kh(n,e).g;n=Wh(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Qr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};U.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Qr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function jn(t){return t.h==-1}U.X=function(t){return t=Wh(this,t),jn(t)?-1:Qr(t)?0:1};function Vt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ne(n,~t.h).add(Cg)}U.abs=function(){return jn(this)?Vt(this):this};U.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Ne(n,n[n.length-1]&-2147483648?-1:0)};function Wh(t,e){return t.add(Vt(e))}U.R=function(t){if(Qr(this)||Qr(t))return Do;if(jn(this))return jn(t)?Vt(this).R(Vt(t)):Vt(Vt(this).R(t));if(jn(t))return Vt(this.R(Vt(t)));if(0>this.X(l1)&&0>t.X(l1))return Sr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Ec(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Ec(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Ec(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Ec(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ne(n,0)};function Ec(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ma(t,e){this.g=t,this.h=e}function Kh(t,e){if(Qr(e))throw Error("division by zero");if(Qr(t))return new Ma(Do,Do);if(jn(t))return e=Kh(Vt(t),e),new Ma(Vt(e.g),Vt(e.h));if(jn(e))return e=Kh(t,Vt(e)),new Ma(Vt(e.g),e.h);if(30<t.g.length){if(jn(t)||jn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Cg,r=e;0>=r.X(t);)n=u1(n),r=u1(r);var i=Xs(n,1),s=Xs(r,1);for(r=Xs(r,2),n=Xs(n,2);!Qr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Xs(r,1),n=Xs(n,1)}return e=Wh(t,i.R(e)),new Ma(i,e)}for(i=Do;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Sr(n),o=s.R(e);jn(o)||0<o.X(t);)n-=r,s=Sr(n),o=s.R(e);Qr(s)&&(s=Cg),i=i.add(s),t=Wh(t,o)}return new Ma(i,t)}U.gb=function(t){return Kh(this,t).h};U.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ne(n,this.h&t.h)};U.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ne(n,this.h|t.h)};U.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ne(n,this.h^t.h)};function u1(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ne(n,t.h)}function Xs(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Ne(i,t.h)}qh.prototype.createWebChannel=qh.prototype.g;Dn.prototype.send=Dn.prototype.u;Dn.prototype.open=Dn.prototype.m;Dn.prototype.close=Dn.prototype.close;uf.NO_ERROR=0;uf.TIMEOUT=8;uf.HTTP_ERROR=6;jR.COMPLETE="complete";zR.EventType=Cu;Cu.OPEN="a";Cu.CLOSE="b";Cu.ERROR="c";Cu.MESSAGE="d";Nt.prototype.listen=Nt.prototype.O;nt.prototype.listenOnce=nt.prototype.P;nt.prototype.getLastError=nt.prototype.Sa;nt.prototype.getLastErrorCode=nt.prototype.Ia;nt.prototype.getStatus=nt.prototype.da;nt.prototype.getResponseJson=nt.prototype.Wa;nt.prototype.getResponseText=nt.prototype.ja;nt.prototype.send=nt.prototype.ha;nt.prototype.setWithCredentials=nt.prototype.Oa;hr.prototype.digest=hr.prototype.l;hr.prototype.reset=hr.prototype.reset;hr.prototype.update=hr.prototype.j;Ne.prototype.add=Ne.prototype.add;Ne.prototype.multiply=Ne.prototype.R;Ne.prototype.modulo=Ne.prototype.gb;Ne.prototype.compare=Ne.prototype.X;Ne.prototype.toNumber=Ne.prototype.ea;Ne.prototype.toString=Ne.prototype.toString;Ne.prototype.getBits=Ne.prototype.D;Ne.fromNumber=Sr;Ne.fromString=RA;var y$=function(){return new qh},v$=function(){return lf()},Mp=uf,_$=jR,w$=Hs,c1={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},E$=xu,Tc=zR,T$=nt,I$=hr,bo=Ne;const h1="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Xt.UNAUTHENTICATED=new Xt(null),Xt.GOOGLE_CREDENTIALS=new Xt("google-credentials-uid"),Xt.FIRST_PARTY=new Xt("first-party-uid"),Xt.MOCK_USER=new Xt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ma="10.11.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=new Jy("@firebase/firestore");function Va(){return Ls.logLevel}function Y(t,...e){if(Ls.logLevel<=ye.DEBUG){const n=e.map(Dv);Ls.debug(`Firestore (${ma}): ${t}`,...n)}}function oi(t,...e){if(Ls.logLevel<=ye.ERROR){const n=e.map(Dv);Ls.error(`Firestore (${ma}): ${t}`,...n)}}function Yo(t,...e){if(Ls.logLevel<=ye.WARN){const n=e.map(Dv);Ls.warn(`Firestore (${ma}): ${t}`,...n)}}function Dv(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t="Unexpected state"){const e=`FIRESTORE (${ma}) INTERNAL ASSERTION FAILED: `+t;throw oi(e),new Error(e)}function Fe(t,e){t||ie()}function ce(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class S${getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xt.UNAUTHENTICATED))}shutdown(){}}class R${constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class A${constructor(e){this.t=e,this.currentUser=Xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Zr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Zr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Zr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Fe(typeof r.accessToken=="string"),new AA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string"),new Xt(e)}}class C${constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Xt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class k${constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new C$(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class P${constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class x${constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Fe(typeof n.token=="string"),this.R=n.token,new P$(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N$(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=N$(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Ce(t,e){return t<e?-1:t>e?1:0}function Xo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Tt.fromMillis(Date.now())}static fromDate(e){return Tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Tt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new le(e)}static min(){return new le(new Tt(0,0))}static max(){return new le(new Tt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n,r){n===void 0?n=0:n>e.length&&ie(),r===void 0?r=e.length-n:r>e.length-n&&ie(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ru.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ru?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class qe extends ru{construct(e,n,r){return new qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new qe(n)}static emptyPath(){return new qe([])}}const D$=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $t extends ru{construct(e,n,r){return new $t(e,n,r)}static isValidIdentifier(e){return D$.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $t(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new z(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new z(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $t(n)}static emptyPath(){return new $t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(qe.fromString(e))}static fromName(e){return new Z(qe.fromString(e).popFirst(5))}static empty(){return new Z(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new qe(e.slice()))}}function b$(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=le.fromTimestamp(r===1e9?new Tt(n+1,0):new Tt(n,r));return new Hi(i,Z.empty(),e)}function O$(t){return new Hi(t.readTime,t.key,-1)}class Hi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Hi(le.min(),Z.empty(),-1)}static max(){return new Hi(le.max(),Z.empty(),-1)}}function L$(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Z.comparator(t.documentKey,e.documentKey),n!==0?n:Ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M$="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class V${constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bu(t){if(t.code!==N.FAILED_PRECONDITION||t.message!==M$)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function $$(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ou(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}bv.oe=-1;function yf(t){return t==null}function Gh(t){return t===0&&1/t==-1/0}function F$(t){return typeof t=="number"&&Number.isInteger(t)&&!Gh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n){this.comparator=e,this.root=n||Lt.EMPTY}insert(e,n){return new et(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ic(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ic(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ic(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ic(this.root,e,this.comparator,!0)}}class Ic{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Lt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Lt.RED,this.left=i??Lt.EMPTY,this.right=s??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Lt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ie();const e=this.left.check();if(e!==this.right.check())throw ie();return e+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw ie()}get value(){throw ie()}get color(){throw ie()}get left(){throw ie()}get right(){throw ie()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new f1(this.data.getIterator())}getIteratorFrom(e){return new f1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Bt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Bt(this.comparator);return n.data=e,n}}class f1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.fields=e,e.sort($t.comparator)}static empty(){return new An([])}unionWith(e){let n=new Bt($t.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new An(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Xo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new PA("Invalid base64 string: "+s):s}}(e);return new rn(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new rn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rn.EMPTY_BYTE_STRING=new rn("");const U$=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qi(t){if(Fe(!!t),typeof t=="string"){let e=0;const n=U$.exec(t);if(Fe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ct(t.seconds),nanos:ct(t.nanos)}}function ct(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ms(t){return typeof t=="string"?rn.fromBase64String(t):rn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Lv(t){const e=t.mapValue.fields.__previous_value__;return Ov(e)?Lv(e):e}function iu(t){const e=qi(t.mapValue.fields.__local_write_time__.timestampValue);return new Tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B${constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class su{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new su("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof su&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Vs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ov(t)?4:j$(t)?9007199254740991:10:ie()}function Or(t,e){if(t===e)return!0;const n=Vs(t);if(n!==Vs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return iu(t).isEqual(iu(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=qi(i.timestampValue),a=qi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ms(i.bytesValue).isEqual(Ms(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ct(i.geoPointValue.latitude)===ct(s.geoPointValue.latitude)&&ct(i.geoPointValue.longitude)===ct(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ct(i.integerValue)===ct(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ct(i.doubleValue),a=ct(s.doubleValue);return o===a?Gh(o)===Gh(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Xo(t.arrayValue.values||[],e.arrayValue.values||[],Or);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(d1(o)!==d1(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Or(o[l],a[l])))return!1;return!0}(t,e);default:return ie()}}function ou(t,e){return(t.values||[]).find(n=>Or(n,e))!==void 0}function Jo(t,e){if(t===e)return 0;const n=Vs(t),r=Vs(e);if(n!==r)return Ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ce(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ct(s.integerValue||s.doubleValue),l=ct(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return p1(t.timestampValue,e.timestampValue);case 4:return p1(iu(t),iu(e));case 5:return Ce(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ms(s),l=Ms(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=Ce(a[u],l[u]);if(c!==0)return c}return Ce(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Ce(ct(s.latitude),ct(o.latitude));return a!==0?a:Ce(ct(s.longitude),ct(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Jo(a[u],l[u]);if(c)return c}return Ce(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Sc.mapValue&&o===Sc.mapValue)return 0;if(s===Sc.mapValue)return 1;if(o===Sc.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=Ce(l[h],c[h]);if(d!==0)return d;const p=Jo(a[l[h]],u[c[h]]);if(p!==0)return p}return Ce(l.length,c.length)}(t.mapValue,e.mapValue);default:throw ie()}}function p1(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ce(t,e);const n=qi(t),r=qi(e),i=Ce(n.seconds,r.seconds);return i!==0?i:Ce(n.nanos,r.nanos)}function Zo(t){return kg(t)}function kg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=qi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ms(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Z.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=kg(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${kg(n.fields[o])}`;return i+"}"}(t.mapValue):ie()}function m1(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Pg(t){return!!t&&"integerValue"in t}function Mv(t){return!!t&&"arrayValue"in t}function g1(t){return!!t&&"nullValue"in t}function y1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function eh(t){return!!t&&"mapValue"in t}function dl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=dl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=dl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function j$(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.value=e}static empty(){return new mn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!eh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=dl(n)}setAll(e){let n=$t.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=dl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());eh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Or(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];eh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){qs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new mn(dl(this.value))}}function xA(t){const e=[];return qs(t.fields,(n,r)=>{const i=new $t([n]);if(eh(r)){const s=xA(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new An(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Zt(e,0,le.min(),le.min(),le.min(),mn.empty(),0)}static newFoundDocument(e,n,r,i){return new Zt(e,1,n,le.min(),r,i,0)}static newNoDocument(e,n){return new Zt(e,2,n,le.min(),le.min(),mn.empty(),0)}static newUnknownDocument(e,n){return new Zt(e,3,n,le.min(),le.min(),mn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,n){this.position=e,this.inclusive=n}}function v1(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Z.comparator(Z.fromName(o.referenceValue),n.key):r=Jo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function _1(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Or(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n="asc"){this.field=e,this.dir=n}}function z$(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{}class pt extends NA{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new q$(e,n,r):n==="array-contains"?new G$(e,r):n==="in"?new Q$(e,r):n==="not-in"?new Y$(e,r):n==="array-contains-any"?new X$(e,r):new pt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new W$(e,r):new K$(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Jo(n,this.value)):n!==null&&Vs(this.value)===Vs(n)&&this.matchesComparison(Jo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dr extends NA{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new dr(e,n)}matches(e){return DA(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function DA(t){return t.op==="and"}function bA(t){return H$(t)&&DA(t)}function H$(t){for(const e of t.filters)if(e instanceof dr)return!1;return!0}function xg(t){if(t instanceof pt)return t.field.canonicalString()+t.op.toString()+Zo(t.value);if(bA(t))return t.filters.map(e=>xg(e)).join(",");{const e=t.filters.map(n=>xg(n)).join(",");return`${t.op}(${e})`}}function OA(t,e){return t instanceof pt?function(r,i){return i instanceof pt&&r.op===i.op&&r.field.isEqual(i.field)&&Or(r.value,i.value)}(t,e):t instanceof dr?function(r,i){return i instanceof dr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&OA(o,i.filters[a]),!0):!1}(t,e):void ie()}function LA(t){return t instanceof pt?function(n){return`${n.field.canonicalString()} ${n.op} ${Zo(n.value)}`}(t):t instanceof dr?function(n){return n.op.toString()+" {"+n.getFilters().map(LA).join(" ,")+"}"}(t):"Filter"}class q$ extends pt{constructor(e,n,r){super(e,n,r),this.key=Z.fromName(r.referenceValue)}matches(e){const n=Z.comparator(e.key,this.key);return this.matchesComparison(n)}}class W$ extends pt{constructor(e,n){super(e,"in",n),this.keys=MA("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class K$ extends pt{constructor(e,n){super(e,"not-in",n),this.keys=MA("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function MA(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Z.fromName(r.referenceValue))}class G$ extends pt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Mv(n)&&ou(n.arrayValue,this.value)}}class Q$ extends pt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ou(this.value.arrayValue,n)}}class Y$ extends pt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ou(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ou(this.value.arrayValue,n)}}class X$ extends pt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Mv(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ou(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J${constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function w1(t,e=null,n=[],r=[],i=null,s=null,o=null){return new J$(t,e,n,r,i,s,o)}function Vv(t){const e=ce(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>xg(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),yf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Zo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Zo(r)).join(",")),e.ue=n}return e.ue}function $v(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!z$(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!OA(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_1(t.startAt,e.startAt)&&_1(t.endAt,e.endAt)}function Ng(t){return Z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Z$(t,e,n,r,i,s,o,a){return new ga(t,e,n,r,i,s,o,a)}function vf(t){return new ga(t)}function E1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function VA(t){return t.collectionGroup!==null}function fl(t){const e=ce(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Bt($t.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new au(s,r))}),n.has($t.keyField().canonicalString())||e.ce.push(new au($t.keyField(),r))}return e.ce}function Dr(t){const e=ce(t);return e.le||(e.le=e4(e,fl(t))),e.le}function e4(t,e){if(t.limitType==="F")return w1(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new au(i.field,s)});const n=t.endAt?new Qh(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Qh(t.startAt.position,t.startAt.inclusive):null;return w1(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Dg(t,e){const n=t.filters.concat([e]);return new ga(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Yh(t,e,n){return new ga(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function _f(t,e){return $v(Dr(t),Dr(e))&&t.limitType===e.limitType}function $A(t){return`${Vv(Dr(t))}|lt:${t.limitType}`}function eo(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>LA(i)).join(", ")}]`),yf(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Zo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Zo(i)).join(",")),`Target(${r})`}(Dr(t))}; limitType=${t.limitType})`}function wf(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Z.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of fl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=v1(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,fl(r),i)||r.endAt&&!function(o,a,l){const u=v1(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,fl(r),i))}(t,e)}function t4(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function FA(t){return(e,n)=>{let r=!1;for(const i of fl(t)){const s=n4(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function n4(t,e,n){const r=t.field.isKeyField()?Z.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Jo(l,u):ie()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ie()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){qs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return kA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r4=new et(Z.comparator);function ai(){return r4}const UA=new et(Z.comparator);function Qa(...t){let e=UA;for(const n of t)e=e.insert(n.key,n);return e}function BA(t){let e=UA;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function gs(){return pl()}function jA(){return pl()}function pl(){return new ya(t=>t.toString(),(t,e)=>t.isEqual(e))}const i4=new et(Z.comparator),s4=new Bt(Z.comparator);function me(...t){let e=s4;for(const n of t)e=e.add(n);return e}const o4=new Bt(Ce);function a4(){return o4}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gh(e)?"-0":e}}function HA(t){return{integerValue:""+t}}function l4(t,e){return F$(e)?HA(e):zA(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(){this._=void 0}}function u4(t,e,n){return t instanceof Xh?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ov(s)&&(s=Lv(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof lu?WA(t,e):t instanceof uu?KA(t,e):function(i,s){const o=qA(i,s),a=T1(o)+T1(i.Pe);return Pg(o)&&Pg(i.Pe)?HA(a):zA(i.serializer,a)}(t,e)}function c4(t,e,n){return t instanceof lu?WA(t,e):t instanceof uu?KA(t,e):n}function qA(t,e){return t instanceof Jh?function(r){return Pg(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Xh extends Ef{}class lu extends Ef{constructor(e){super(),this.elements=e}}function WA(t,e){const n=GA(e);for(const r of t.elements)n.some(i=>Or(i,r))||n.push(r);return{arrayValue:{values:n}}}class uu extends Ef{constructor(e){super(),this.elements=e}}function KA(t,e){let n=GA(e);for(const r of t.elements)n=n.filter(i=>!Or(i,r));return{arrayValue:{values:n}}}class Jh extends Ef{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function T1(t){return ct(t.integerValue||t.doubleValue)}function GA(t){return Mv(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function h4(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof lu&&i instanceof lu||r instanceof uu&&i instanceof uu?Xo(r.elements,i.elements,Or):r instanceof Jh&&i instanceof Jh?Or(r.Pe,i.Pe):r instanceof Xh&&i instanceof Xh}(t.transform,e.transform)}class d4{constructor(e,n){this.version=e,this.transformResults=n}}class wn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wn}static exists(e){return new wn(void 0,e)}static updateTime(e){return new wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function th(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Tf{}function QA(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new If(t.key,wn.none()):new Lu(t.key,t.data,wn.none());{const n=t.data,r=mn.empty();let i=new Bt($t.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ts(t.key,r,new An(i.toArray()),wn.none())}}function f4(t,e,n){t instanceof Lu?function(i,s,o){const a=i.value.clone(),l=S1(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ts?function(i,s,o){if(!th(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=S1(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(YA(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ml(t,e,n,r){return t instanceof Lu?function(s,o,a,l){if(!th(s.precondition,o))return a;const u=s.value.clone(),c=R1(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ts?function(s,o,a,l){if(!th(s.precondition,o))return a;const u=R1(s.fieldTransforms,l,o),c=o.data;return c.setAll(YA(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return th(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function p4(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=qA(r.transform,i||null);s!=null&&(n===null&&(n=mn.empty()),n.set(r.field,s))}return n||null}function I1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Xo(r,i,(s,o)=>h4(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Lu extends Tf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ts extends Tf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function YA(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function S1(t,e,n){const r=new Map;Fe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,c4(o,a,n[i]))}return r}function R1(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,u4(s,o,e))}return r}class If extends Tf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class m4 extends Tf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g4{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&f4(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ml(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ml(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=jA();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=QA(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&Xo(this.mutations,e.mutations,(n,r)=>I1(n,r))&&Xo(this.baseMutations,e.baseMutations,(n,r)=>I1(n,r))}}class Fv{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Fe(e.mutations.length===r.length);let i=function(){return i4}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Fv(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y4{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v4{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut,ve;function _4(t){switch(t){default:return ie();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function XA(t){if(t===void 0)return oi("GRPC error has no .code"),N.UNKNOWN;switch(t){case ut.OK:return N.OK;case ut.CANCELLED:return N.CANCELLED;case ut.UNKNOWN:return N.UNKNOWN;case ut.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case ut.INTERNAL:return N.INTERNAL;case ut.UNAVAILABLE:return N.UNAVAILABLE;case ut.UNAUTHENTICATED:return N.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case ut.NOT_FOUND:return N.NOT_FOUND;case ut.ALREADY_EXISTS:return N.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return N.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case ut.ABORTED:return N.ABORTED;case ut.OUT_OF_RANGE:return N.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return N.UNIMPLEMENTED;case ut.DATA_LOSS:return N.DATA_LOSS;default:return ie()}}(ve=ut||(ut={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w4(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E4=new bo([4294967295,4294967295],0);function A1(t){const e=w4().encode(t),n=new I$;return n.update(e),new Uint8Array(n.digest())}function C1(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new bo([n,r],0),new bo([i,s],0)]}class Uv{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ya(`Invalid padding: ${n}`);if(r<0)throw new Ya(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ya(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ya(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=bo.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(bo.fromNumber(r)));return i.compare(E4)===1&&(i=new bo([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=A1(e),[r,i]=C1(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Uv(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=A1(e),[r,i]=C1(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ya extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Mu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Sf(le.min(),i,new et(Ce),ai(),me())}}class Mu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Mu(r,n,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class JA{constructor(e,n){this.targetId=e,this.me=n}}class ZA{constructor(e,n,r=rn.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class k1{constructor(){this.fe=0,this.ge=x1(),this.pe=rn.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=me(),n=me(),r=me();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ie()}}),new Mu(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=x1()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class T4{constructor(e){this.Le=e,this.Be=new Map,this.ke=ai(),this.qe=P1(),this.Qe=new et(Ce)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ie()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Ng(s))if(r===0){const o=new Z(s.path);this.Ue(n,o,Zt.newNoDocument(o,le.min()))}else Fe(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ms(r).toUint8Array()}catch(l){if(l instanceof PA)return Yo("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Uv(o,i,s)}catch(l){return Yo(l instanceof Ya?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Ng(a.target)){const l=new Z(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Zt.newNoDocument(l,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=me();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Sf(e,n,this.Qe,this.ke,r);return this.ke=ai(),this.qe=P1(),this.Qe=new et(Ce),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new k1,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Bt(Ce),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new k1),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function P1(){return new et(Z.comparator)}function x1(){return new et(Z.comparator)}const I4={asc:"ASCENDING",desc:"DESCENDING"},S4={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},R4={and:"AND",or:"OR"};class A4{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bg(t,e){return t.useProto3Json||yf(e)?e:{value:e}}function Zh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function eC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function C4(t,e){return Zh(t,e.toTimestamp())}function br(t){return Fe(!!t),le.fromTimestamp(function(n){const r=qi(n);return new Tt(r.seconds,r.nanos)}(t))}function Bv(t,e){return Og(t,e).canonicalString()}function Og(t,e){const n=function(i){return new qe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function tC(t){const e=qe.fromString(t);return Fe(oC(e)),e}function Lg(t,e){return Bv(t.databaseId,e.path)}function Vp(t,e){const n=tC(e);if(n.get(1)!==t.databaseId.projectId)throw new z(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Z(rC(n))}function nC(t,e){return Bv(t.databaseId,e)}function k4(t){const e=tC(t);return e.length===4?qe.emptyPath():rC(e)}function Mg(t){return new qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function rC(t){return Fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function N1(t,e,n){return{name:Lg(t,e),fields:n.value.mapValue.fields}}function P4(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(Fe(c===void 0||typeof c=="string"),rn.fromBase64String(c||"")):(Fe(c===void 0||c instanceof Buffer||c instanceof Uint8Array),rn.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?N.UNKNOWN:XA(u.code);return new z(c,u.message||"")}(o);n=new ZA(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Vp(t,r.document.name),s=br(r.document.updateTime),o=r.document.createTime?br(r.document.createTime):le.min(),a=new mn({mapValue:{fields:r.document.fields}}),l=Zt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new nh(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Vp(t,r.document),s=r.readTime?br(r.readTime):le.min(),o=Zt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new nh([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Vp(t,r.document),s=r.removedTargetIds||[];n=new nh([],s,i,null)}else{if(!("filter"in e))return ie();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new v4(i,s),a=r.targetId;n=new JA(a,o)}}return n}function x4(t,e){let n;if(e instanceof Lu)n={update:N1(t,e.key,e.value)};else if(e instanceof If)n={delete:Lg(t,e.key)};else if(e instanceof ts)n={update:N1(t,e.key,e.data),updateMask:F4(e.fieldMask)};else{if(!(e instanceof m4))return ie();n={verify:Lg(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Xh)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof lu)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof uu)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Jh)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ie()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:C4(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ie()}(t,e.precondition)),n}function N4(t,e){return t&&t.length>0?(Fe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?br(i.updateTime):br(s);return o.isEqual(le.min())&&(o=br(s)),new d4(o,i.transformResults||[])}(n,e))):[]}function D4(t,e){return{documents:[nC(t,e.path)]}}function b4(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=nC(t,i);const s=function(u){if(u.length!==0)return sC(dr.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(d){return{field:to(d.field),direction:M4(d.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=bg(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:i}}function O4(t){let e=k4(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Fe(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=iC(h);return d instanceof dr&&bA(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(v){return new au(no(v.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,yf(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,p=h.values||[];return new Qh(p,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,p=h.values||[];return new Qh(p,d)}(n.endAt)),Z$(e,i,o,s,a,"F",l,u)}function L4(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function iC(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=no(n.unaryFilter.field);return pt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=no(n.unaryFilter.field);return pt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=no(n.unaryFilter.field);return pt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=no(n.unaryFilter.field);return pt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ie()}}(t):t.fieldFilter!==void 0?function(n){return pt.create(no(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ie()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return dr.create(n.compositeFilter.filters.map(r=>iC(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ie()}}(n.compositeFilter.op))}(t):ie()}function M4(t){return I4[t]}function V4(t){return S4[t]}function $4(t){return R4[t]}function to(t){return{fieldPath:t.canonicalString()}}function no(t){return $t.fromServerFormat(t.fieldPath)}function sC(t){return t instanceof pt?function(n){if(n.op==="=="){if(y1(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NAN"}};if(g1(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(y1(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NOT_NAN"}};if(g1(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:to(n.field),op:V4(n.op),value:n.value}}}(t):t instanceof dr?function(n){const r=n.getFilters().map(i=>sC(i));return r.length===1?r[0]:{compositeFilter:{op:$4(n.op),filters:r}}}(t):ie()}function F4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function oC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n,r,i,s=le.min(),o=le.min(),a=rn.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Ci(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ci(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U4{constructor(e){this.ut=e}}function B4(t){const e=O4({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Yh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j4{constructor(){this.on=new z4}addToCollectionParentIndex(e,n){return this.on.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(Hi.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(Hi.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class z4{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Bt(qe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Bt(qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new ea(0)}static Nn(){return new ea(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H4{constructor(){this.changes=new ya(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Zt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W4{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ml(r.mutation,i,An.empty(),Tt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,n,r=me()){const i=gs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Qa();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=gs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,me()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=ai();const o=pl(),a=function(){return pl()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ts)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ml(c.mutation,u,c.mutation.getFieldMask(),Tt.now())):o.set(u.key,An.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new q4(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=pl();let i=new et((o,a)=>o-a),s=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||An.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||me()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=jA();c.forEach(d=>{if(!s.has(d)){const p=QA(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Z.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):VA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(gs());let a=-1,l=s;return o.next(u=>O.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?O.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,me())).next(c=>({batchId:a,changes:BA(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Z(n)).next(r=>{let i=Qa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Qa();return this.indexManager.getCollectionParents(e,s).next(a=>O.forEach(a,l=>{const u=function(h,d){return new ga(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,Zt.newInvalidDocument(c)))});let a=Qa();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&ml(c.mutation,u,An.empty(),Tt.now()),wf(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K4{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return O.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:br(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:B4(i.bundledQuery),readTime:br(i.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G4{constructor(){this.overlays=new et(Z.comparator),this.lr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=gs();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.lt(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=gs(),s=n.length+1,o=new Z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new et((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=gs(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=gs(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return O.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new y4(n,r));let s=this.lr.get(n);s===void 0&&(s=me(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(){this.hr=new Bt(At.Pr),this.Ir=new Bt(At.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new At(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new At(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new Z(new qe([])),r=new At(n,e),i=new At(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new Z(new qe([])),r=new At(n,e),i=new At(n,e+1);let s=me();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new At(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class At{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return Z.comparator(e.key,n.key)||Ce(e.gr,n.gr)}static Tr(e,n){return Ce(e.gr,n.gr)||Z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Bt(At.Pr)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new g4(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new At(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new At(n,0),i=new At(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Bt(Ce);return n.forEach(i=>{const s=new At(i,0),o=new At(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),O.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Z.isDocumentKey(s)||(s=s.child(""));const o=new At(new Z(s),0);let a=new Bt(Ce);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),O.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Fe(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return O.forEach(n.mutations,i=>{const s=new At(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new At(n,0),i=this.yr.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y4{constructor(e){this.Cr=e,this.docs=function(){return new et(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():Zt.newInvalidDocument(n))}getEntries(e,n){let r=ai();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Zt.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ai();const o=n.path,a=new Z(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||L$(O$(c),r)<=0||(i.has(c.key)||wf(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ie()}vr(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new X4(this)}getSize(e){return O.resolve(this.size)}}class X4 extends H4{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J4{constructor(e){this.persistence=e,this.Fr=new ya(n=>Vv(n),$v),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.Mr=0,this.Or=new jv,this.targetCount=0,this.Nr=ea.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),O.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new ea(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.kn(n),O.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z4{constructor(e,n){this.Lr={},this.overlays={},this.Br=new bv(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new J4(this),this.indexManager=new j4,this.remoteDocumentCache=function(i){return new Y4(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new U4(n),this.Kr=new K4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new G4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new Q4(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const i=new eF(this.Br.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return O.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class eF extends V${constructor(e){super(),this.currentSequenceNumber=e}}class zv{constructor(e){this.persistence=e,this.Gr=new jv,this.zr=null}static jr(e){return new zv(e)}get Hr(){if(this.zr)return this.zr;throw ie()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),O.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Hr,r=>{const i=Z.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,le.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return O.or([()=>O.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=me(),i=me();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Hv(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tF{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nF{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=function(){return FO()?8:$$(zt())>0?6:4}()}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.zi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new tF;return this.Hi(e,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>s.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(Va()<=ye.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",eo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),O.resolve()):(Va()<=ye.DEBUG&&Y("QueryEngine","Query:",eo(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(Va()<=ye.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",eo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dr(n))):O.resolve())}zi(e,n){if(E1(n))return O.resolve(null);let r=Dr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Yh(n,null,"F"),r=Dr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=me(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(e,Yh(n,null,"F")):this.Xi(e,u,n,l)}))})))}ji(e,n,r,i){return E1(n)||i.isEqual(le.min())?O.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?O.resolve(null):(Va()<=ye.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),eo(n)),this.Xi(e,o,n,b$(i,-1)).next(a=>a))})}Yi(e,n){let r=new Bt(FA(e));return n.forEach((i,s)=>{wf(e,s)&&(r=r.add(s))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,n,r){return Va()<=ye.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",eo(n)),this.Gi.getDocumentsMatchingQuery(e,n,Hi.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rF{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new et(Ce),this.ns=new ya(s=>Vv(s),$v),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new W4(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function iF(t,e,n,r){return new rF(t,e,n,r)}async function aC(t,e){const n=ce(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=me();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function sF(t,e){const n=ce(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let p=O.resolve();return d.forEach(v=>{p=p.next(()=>c.getEntry(l,v)).next(_=>{const E=u.docVersions.get(v);Fe(E!==null),_.version.compareTo(E)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=me();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function lC(t){const e=ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function oF(t,e){const n=ce(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.qr.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(rn.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(_,E,g){return _.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(d,p,c)&&a.push(n.qr.updateTargetData(s,p))});let l=ai(),u=me();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(aF(s,o,e.documentUpdates).next(c=>{l=c.us,u=c.cs})),!r.isEqual(le.min())){const c=n.qr.getLastRemoteSnapshotVersion(s).next(h=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return O.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ts=i,s))}function aF(t,e,n){let r=me(),i=me();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ai();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(le.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):Y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:i}})}function lF(t,e){const n=ce(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function uF(t,e){const n=ce(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new Ci(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Vg(t,e,n){const r=ce(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ou(o))throw o;Y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function D1(t,e,n){const r=ce(t);let i=le.min(),s=me();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=ce(l),d=h.ns.get(c);return d!==void 0?O.resolve(h.ts.get(d)):h.qr.getTargetData(u,c)}(r,o,Dr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?i:le.min(),n?s:me())).next(a=>(cF(r,t4(e),a),{documents:a,ls:s})))}function cF(t,e,n){let r=t.rs.get(e)||le.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.rs.set(e,r)}class b1{constructor(){this.activeTargetIds=a4()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hF{constructor(){this.eo=new b1,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new b1,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dF{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rc=null;function $p(){return Rc===null?Rc=function(){return 268435456+Math.round(2147483648*Math.random())}():Rc++,"0x"+Rc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pF{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.lo()}send(e){this.co(e)}Vo(){this.Po()}mo(){this.To()}fo(e){this.Ao(e)}po(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="WebChannelConnection";class mF extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.yo=r+"://"+n.host,this.wo=`projects/${i}/databases/${s}`,this.So=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get bo(){return!1}Do(n,r,i,s,o){const a=$p(),l=this.Co(n,r.toUriEncodedString());Y("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.wo,"x-goog-request-params":this.So};return this.vo(u,s,o),this.Fo(n,l,u,i).then(c=>(Y("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Yo("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Mo(n,r,i,s,o,a){return this.Do(n,r,i,s,o)}vo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ma}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Co(n,r){const i=fF[n];return`${this.yo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Fo(e,n,r,i){const s=$p();return new Promise((o,a)=>{const l=new T$;l.setWithCredentials(!0),l.listenOnce(_$.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Mp.NO_ERROR:const c=l.getResponseJson();Y(Qt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Mp.TIMEOUT:Y(Qt,`RPC '${e}' ${s} timed out`),a(new z(N.DEADLINE_EXCEEDED,"Request time out"));break;case Mp.HTTP_ERROR:const h=l.getStatus();if(Y(Qt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const v=function(E){const g=E.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(g)>=0?g:N.UNKNOWN}(p.status);a(new z(v,p.message))}else a(new z(N.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new z(N.UNAVAILABLE,"Connection failed."));break;default:ie()}}finally{Y(Qt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);Y(Qt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}xo(e,n,r){const i=$p(),s=[this.yo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=y$(),a=v$(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new E$({})),this.vo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");Y(Qt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,p=!1;const v=new pF({co:E=>{p?Y(Qt,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(d||(Y(Qt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),Y(Qt,`RPC '${e}' stream ${i} sending:`,E),h.send(E))},lo:()=>h.close()}),_=(E,g,f)=>{E.listen(g,y=>{try{f(y)}catch(m){setTimeout(()=>{throw m},0)}})};return _(h,Tc.EventType.OPEN,()=>{p||(Y(Qt,`RPC '${e}' stream ${i} transport opened.`),v.Vo())}),_(h,Tc.EventType.CLOSE,()=>{p||(p=!0,Y(Qt,`RPC '${e}' stream ${i} transport closed`),v.fo())}),_(h,Tc.EventType.ERROR,E=>{p||(p=!0,Yo(Qt,`RPC '${e}' stream ${i} transport errored:`,E),v.fo(new z(N.UNAVAILABLE,"The operation could not be completed")))}),_(h,Tc.EventType.MESSAGE,E=>{var g;if(!p){const f=E.data[0];Fe(!!f);const y=f,m=y.error||((g=y[0])===null||g===void 0?void 0:g.error);if(m){Y(Qt,`RPC '${e}' stream ${i} received error:`,m);const T=m.status;let S=function(K){const V=ut[K];if(V!==void 0)return XA(V)}(T),I=m.message;S===void 0&&(S=N.INTERNAL,I="Unknown error status: "+T+" with message "+m.message),p=!0,v.fo(new z(S,I)),h.close()}else Y(Qt,`RPC '${e}' stream ${i} received:`,f),v.po(f)}}),_(a,w$.STAT_EVENT,E=>{E.stat===c1.PROXY?Y(Qt,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===c1.NOPROXY&&Y(Qt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.mo()},0),v}}function Fp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(t){return new A4(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.Oo=r,this.No=i,this.Lo=s,this.Bo=0,this.ko=null,this.qo=Date.now(),this.reset()}reset(){this.Bo=0}Qo(){this.Bo=this.Lo}Ko(e){this.cancel();const n=Math.floor(this.Bo+this.$o()),r=Math.max(0,Date.now()-this.qo),i=Math.max(0,n-r);i>0&&Y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.ko=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.qo=Date.now(),e())),this.Bo*=this.No,this.Bo<this.Oo&&(this.Bo=this.Oo),this.Bo>this.Lo&&(this.Bo=this.Lo)}Uo(){this.ko!==null&&(this.ko.skipDelay(),this.ko=null)}cancel(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}$o(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Wo=r,this.Go=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.zo=0,this.jo=null,this.Ho=null,this.stream=null,this.Jo=new uC(e,n)}Yo(){return this.state===1||this.state===5||this.Zo()}Zo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Xo()}async stop(){this.Yo()&&await this.close(0)}e_(){this.state=0,this.Jo.reset()}t_(){this.Zo()&&this.jo===null&&(this.jo=this.si.enqueueAfterDelay(this.Wo,6e4,()=>this.n_()))}r_(e){this.i_(),this.stream.send(e)}async n_(){if(this.Zo())return this.close(0)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}async close(e,n){this.i_(),this.s_(),this.Jo.cancel(),this.zo++,e!==4?this.Jo.reset():n&&n.code===N.RESOURCE_EXHAUSTED?(oi(n.toString()),oi("Using maximum backoff delay to prevent overloading the backend."),this.Jo.Qo()):n&&n.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.o_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}o_(){}auth(){this.state=1;const e=this.__(this.zo),n=this.zo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.zo===n&&this.a_(r,i)},r=>{e(()=>{const i=new z(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.u_(i)})})}a_(e,n){const r=this.__(this.zo);this.stream=this.c_(e,n),this.stream.ho(()=>{r(()=>this.listener.ho())}),this.stream.Io(()=>{r(()=>(this.state=2,this.Ho=this.si.enqueueAfterDelay(this.Go,1e4,()=>(this.Zo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(i=>{r(()=>this.u_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Xo(){this.state=5,this.Jo.Ko(async()=>{this.state=0,this.start()})}u_(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}__(e){return n=>{this.si.enqueueAndForget(()=>this.zo===e?n():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gF extends cC{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}c_(e,n){return this.connection.xo("Listen",e,n)}onMessage(e){this.Jo.reset();const n=P4(this.serializer,e),r=function(s){if(!("targetChange"in s))return le.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?le.min():o.readTime?br(o.readTime):le.min()}(e);return this.listener.l_(n,r)}h_(e){const n={};n.database=Mg(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Ng(l)?{documents:D4(s,l)}:{query:b4(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=eC(s,o.resumeToken);const u=bg(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(le.min())>0){a.readTime=Zh(s,o.snapshotVersion.toTimestamp());const u=bg(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=L4(this.serializer,e);r&&(n.labels=r),this.r_(n)}P_(e){const n={};n.database=Mg(this.serializer),n.removeTarget=e,this.r_(n)}}class yF extends cC{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.I_=!1}get T_(){return this.I_}start(){this.I_=!1,this.lastStreamToken=void 0,super.start()}o_(){this.I_&&this.E_([])}c_(e,n){return this.connection.xo("Write",e,n)}onMessage(e){if(Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.I_){this.Jo.reset();const n=N4(e.writeResults,e.commitTime),r=br(e.commitTime);return this.listener.d_(r,n)}return Fe(!e.writeResults||e.writeResults.length===0),this.I_=!0,this.listener.A_()}R_(){const e={};e.database=Mg(this.serializer),this.r_(e)}E_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>x4(this.serializer,r))};this.r_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vF extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.V_=!1}m_(){if(this.V_)throw new z(N.FAILED_PRECONDITION,"The client has already been terminated.")}Do(e,n,r,i){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Do(e,Og(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(N.UNKNOWN,s.toString())})}Mo(e,n,r,i,s){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,Og(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(N.UNKNOWN,o.toString())})}terminate(){this.V_=!0,this.connection.terminate()}}class _F{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(oi(n),this.y_=!1):Y("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wF{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.ro(o=>{r.enqueueAndForget(async()=>{Ws(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=ce(l);u.M_.add(4),await Vu(u),u.N_.set("Unknown"),u.M_.delete(4),await Af(u)}(this))})}),this.N_=new _F(r,i)}}async function Af(t){if(Ws(t))for(const e of t.x_)await e(!0)}async function Vu(t){for(const e of t.x_)await e(!1)}function hC(t,e){const n=ce(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Gv(n)?Kv(n):va(n).Zo()&&Wv(n,e))}function qv(t,e){const n=ce(t),r=va(n);n.F_.delete(e),r.Zo()&&dC(n,e),n.F_.size===0&&(r.Zo()?r.t_():Ws(n)&&n.N_.set("Unknown"))}function Wv(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}va(t).h_(e)}function dC(t,e){t.L_.xe(e),va(t).P_(e)}function Kv(t){t.L_=new T4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),va(t).start(),t.N_.w_()}function Gv(t){return Ws(t)&&!va(t).Yo()&&t.F_.size>0}function Ws(t){return ce(t).M_.size===0}function fC(t){t.L_=void 0}async function EF(t){t.N_.set("Online")}async function TF(t){t.F_.forEach((e,n)=>{Wv(t,e)})}async function IF(t,e){fC(t),Gv(t)?(t.N_.D_(e),Kv(t)):t.N_.set("Unknown")}async function SF(t,e,n){if(t.N_.set("Online"),e instanceof ZA&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){Y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ed(t,r)}else if(e instanceof nh?t.L_.Ke(e):e instanceof JA?t.L_.He(e):t.L_.We(e),!n.isEqual(le.min()))try{const r=await lC(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.F_.get(u);c&&s.F_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.F_.get(l);if(!c)return;s.F_.set(l,c.withResumeToken(rn.EMPTY_BYTE_STRING,c.snapshotVersion)),dC(s,l);const h=new Ci(c.target,l,u,c.sequenceNumber);Wv(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){Y("RemoteStore","Failed to raise snapshot:",r),await ed(t,r)}}async function ed(t,e,n){if(!Ou(e))throw e;t.M_.add(1),await Vu(t),t.N_.set("Offline"),n||(n=()=>lC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Af(t)})}function pC(t,e){return e().catch(n=>ed(t,n,e))}async function Cf(t){const e=ce(t),n=Wi(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;RF(e);)try{const i=await lF(e.localStore,r);if(i===null){e.v_.length===0&&n.t_();break}r=i.batchId,AF(e,i)}catch(i){await ed(e,i)}mC(e)&&gC(e)}function RF(t){return Ws(t)&&t.v_.length<10}function AF(t,e){t.v_.push(e);const n=Wi(t);n.Zo()&&n.T_&&n.E_(e.mutations)}function mC(t){return Ws(t)&&!Wi(t).Yo()&&t.v_.length>0}function gC(t){Wi(t).start()}async function CF(t){Wi(t).R_()}async function kF(t){const e=Wi(t);for(const n of t.v_)e.E_(n.mutations)}async function PF(t,e,n){const r=t.v_.shift(),i=Fv.from(r,e,n);await pC(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Cf(t)}async function xF(t,e){e&&Wi(t).T_&&await async function(r,i){if(function(o){return _4(o)&&o!==N.ABORTED}(i.code)){const s=r.v_.shift();Wi(r).e_(),await pC(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Cf(r)}}(t,e),mC(t)&&gC(t)}async function L1(t,e){const n=ce(t);n.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const r=Ws(n);n.M_.add(3),await Vu(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Af(n)}async function NF(t,e){const n=ce(t);e?(n.M_.delete(2),await Af(n)):e||(n.M_.add(2),await Vu(n),n.N_.set("Unknown"))}function va(t){return t.B_||(t.B_=function(n,r,i){const s=ce(n);return s.m_(),new gF(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:EF.bind(null,t),Io:TF.bind(null,t),Eo:IF.bind(null,t),l_:SF.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.e_(),Gv(t)?Kv(t):t.N_.set("Unknown")):(await t.B_.stop(),fC(t))})),t.B_}function Wi(t){return t.k_||(t.k_=function(n,r,i){const s=ce(n);return s.m_(),new yF(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:()=>Promise.resolve(),Io:CF.bind(null,t),Eo:xF.bind(null,t),A_:kF.bind(null,t),d_:PF.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.e_(),await Cf(t)):(await t.k_.stop(),t.v_.length>0&&(Y("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Qv(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yv(t,e){if(oi("AsyncQueue",`${e}: ${t}`),Ou(t))return new z(N.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Z.comparator(n.key,r.key):(n,r)=>Z.comparator(n.key,r.key),this.keyedMap=Qa(),this.sortedSet=new et(this.comparator)}static emptySet(e){return new Oo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Oo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Oo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(){this.q_=new et(Z.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):ie():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ta{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ta(e,n,Oo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_f(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DF{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class bF{constructor(){this.queries=new ya(e=>$A(e),_f),this.onlineState="Unknown",this.z_=new Set}}async function Xv(t,e){const n=ce(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new DF,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Yv(o,`Initialization of query '${eo(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&Zv(n)}async function Jv(t,e){const n=ce(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function OF(t,e){const n=ce(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&Zv(n)}function LF(t,e,n){const r=ce(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function Zv(t){t.z_.forEach(e=>{e.next()})}var $g,V1;(V1=$g||($g={})).J_="default",V1.Cache="cache";class e_{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ta(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=ta.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==$g.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e){this.key=e}}class vC{constructor(e){this.key=e}}class MF{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=me(),this.mutatedKeys=me(),this.Ia=FA(e),this.Ta=new Oo(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new M1,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=wf(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;d&&p?d.data.isEqual(p.data)?v!==_&&(r.track({type:3,doc:p}),E=!0):this.Ra(d,p)||(r.track({type:2,doc:p}),E=!0,(l&&this.Ia(p,l)>0||u&&this.Ia(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),E=!0):d&&!p&&(r.track({type:1,doc:d}),E=!0,(l||u)&&(a=!0)),E&&(p?(o=o.add(p),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Ta:o,Aa:r,Zi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((c,h)=>function(p,v){const _=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie()}};return _(p)-_(v)}(c.type,h.type)||this.Ia(c.doc,h.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],l=this.Pa.size===0&&this.current&&!i?1:0,u=l!==this.ha;return this.ha=l,o.length!==0||u?{snapshot:new ta(this.query,e.Ta,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new M1,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=me(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new vC(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new yC(r))}),n}pa(e){this.la=e.ls,this.Pa=me();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return ta.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class VF{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class $F{constructor(e){this.key=e,this.wa=!1}}class FF{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new ya(a=>$A(a),_f),this.Da=new Map,this.Ca=new Set,this.va=new et(Z.comparator),this.Fa=new Map,this.Ma=new jv,this.xa={},this.Oa=new Map,this.Na=ea.Nn(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function UF(t,e,n=!0){const r=SC(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await _C(r,e,n,!0),i}async function BF(t,e){const n=SC(t);await _C(n,e,!0,!1)}async function _C(t,e,n,r){const i=await uF(t.localStore,Dr(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await jF(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&hC(t.remoteStore,i),a}async function jF(t,e,n,r,i){t.Ba=(h,d,p)=>async function(_,E,g,f){let y=E.view.da(g);y.Zi&&(y=await D1(_.localStore,E.query,!1).then(({documents:I})=>E.view.da(I,y)));const m=f&&f.targetChanges.get(E.targetId),T=f&&f.targetMismatches.get(E.targetId)!=null,S=E.view.applyChanges(y,_.isPrimaryClient,m,T);return F1(_,E.targetId,S.fa),S.snapshot}(t,h,d,p);const s=await D1(t.localStore,e,!0),o=new MF(e,s.ls),a=o.da(s.documents),l=Mu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);F1(t,n,u.fa);const c=new VF(e,n,o);return t.ba.set(e,c),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),u.snapshot}async function zF(t,e,n){const r=ce(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!_f(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Vg(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&qv(r.remoteStore,i.targetId),Fg(r,i.targetId)}).catch(bu)):(Fg(r,i.targetId),await Vg(r.localStore,i.targetId,!0))}async function HF(t,e){const n=ce(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),qv(n.remoteStore,r.targetId))}async function qF(t,e,n){const r=JF(t);try{const i=await function(o,a){const l=ce(o),u=Tt.now(),c=a.reduce((p,v)=>p.add(v.key),me());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let v=ai(),_=me();return l.ss.getEntries(p,c).next(E=>{v=E,v.forEach((g,f)=>{f.isValidDocument()||(_=_.add(g))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,v)).next(E=>{h=E;const g=[];for(const f of a){const y=p4(f,h.get(f.key).overlayedDocument);y!=null&&g.push(new ts(f.key,y,xA(y.value.mapValue),wn.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,g,a)}).next(E=>{d=E;const g=E.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(p,E.batchId,g)})}).then(()=>({batchId:d.batchId,changes:BA(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.xa[o.currentUser.toKey()];u||(u=new et(Ce)),u=u.insert(a,l),o.xa[o.currentUser.toKey()]=u}(r,i.batchId,n),await $u(r,i.changes),await Cf(r.remoteStore)}catch(i){const s=Yv(i,"Failed to persist write");n.reject(s)}}async function wC(t,e){const n=ce(t);try{const r=await oF(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(Fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?Fe(o.wa):i.removedDocuments.size>0&&(Fe(o.wa),o.wa=!1))}),await $u(n,r,e)}catch(r){await bu(r)}}function $1(t,e,n){const r=ce(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=ce(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.U_)d.j_(a)&&(u=!0)}),u&&Zv(l)}(r.eventManager,e),i.length&&r.Sa.l_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function WF(t,e,n){const r=ce(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new et(Z.comparator);o=o.insert(s,Zt.newNoDocument(s,le.min()));const a=me().add(s),l=new Sf(le.min(),new Map,new et(Ce),o,a);await wC(r,l),r.va=r.va.remove(s),r.Fa.delete(e),t_(r)}else await Vg(r.localStore,e,!1).then(()=>Fg(r,e,n)).catch(bu)}async function KF(t,e){const n=ce(t),r=e.batch.batchId;try{const i=await sF(n.localStore,e);TC(n,r,null),EC(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await $u(n,i)}catch(i){await bu(i)}}async function GF(t,e,n){const r=ce(t);try{const i=await function(o,a){const l=ce(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(Fe(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);TC(r,e,n),EC(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await $u(r,i)}catch(i){await bu(i)}}function EC(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function TC(t,e,n){const r=ce(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function Fg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Rr(e).forEach(r=>{t.Ma.containsKey(r)||IC(t,r)})}function IC(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(qv(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),t_(t))}function F1(t,e,n){for(const r of n)r instanceof yC?(t.Ma.addReference(r.key,e),QF(t,r)):r instanceof vC?(Y("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||IC(t,r.key)):ie()}function QF(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(Y("SyncEngine","New document in limbo: "+n),t.Ca.add(r),t_(t))}function t_(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new Z(qe.fromString(e)),r=t.Na.next();t.Fa.set(r,new $F(n)),t.va=t.va.insert(n,r),hC(t.remoteStore,new Ci(Dr(vf(n.path)),r,"TargetPurposeLimboResolution",bv.oe))}}async function $u(t,e,n){const r=ce(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,l)=>{o.push(r.Ba(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Hv.Qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Sa.l_(i),await async function(l,u){const c=ce(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>O.forEach(u,d=>O.forEach(d.ki,p=>c.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>O.forEach(d.qi,p=>c.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!Ou(h))throw h;Y("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const p=c.ts.get(d),v=p.snapshotVersion,_=p.withLastLimboFreeSnapshotVersion(v);c.ts=c.ts.insert(d,_)}}}(r.localStore,s))}async function YF(t,e){const n=ce(t);if(!n.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const r=await aC(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(l=>{l.reject(new z(N.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await $u(n,r._s)}}function XF(t,e){const n=ce(t),r=n.Fa.get(e);if(r&&r.wa)return me().add(r.key);{let i=me();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}function SC(t){const e=ce(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=wC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=XF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=WF.bind(null,e),e.Sa.l_=OF.bind(null,e.eventManager),e.Sa.ka=LF.bind(null,e.eventManager),e}function JF(t){const e=ce(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=GF.bind(null,e),e}class U1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Rf(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return iF(this.persistence,new nF,e.initialUser,this.serializer)}createPersistence(e){return new Z4(zv.jr,this.serializer)}createSharedClientState(e){return new hF}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ZF{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=YF.bind(null,this.syncEngine),await NF(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new bF}()}createDatastore(e){const n=Rf(e.databaseInfo.databaseId),r=function(s){return new mF(s)}(e.databaseInfo);return function(s,o,a,l){return new vF(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new wF(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>$1(this.syncEngine,n,0),function(){return O1.D()?new O1:new dF}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new FF(i,s,o,a,l,u);return c&&(h.La=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=ce(r);Y("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Vu(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):oi("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e5{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Xt.UNAUTHENTICATED,this.clientId=CA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Y("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Y("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(N.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Yv(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Up(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await aC(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function B1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await n5(t);Y("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>L1(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>L1(e.remoteStore,i)),t._onlineComponents=e}function t5(t){return t.name==="FirebaseError"?t.code===N.FAILED_PRECONDITION||t.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function n5(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await Up(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!t5(n))throw n;Yo("Error using user provided cache. Falling back to memory cache: "+n),await Up(t,new U1)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await Up(t,new U1);return t._offlineComponents}async function RC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await B1(t,t._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await B1(t,new ZF))),t._onlineComponents}function r5(t){return RC(t).then(e=>e.syncEngine)}async function td(t){const e=await RC(t),n=e.eventManager;return n.onListen=UF.bind(null,e.syncEngine),n.onUnlisten=zF.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=BF.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=HF.bind(null,e.syncEngine),n}function i5(t,e,n={}){const r=new Zr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new n_({next:d=>{o.enqueueAndForget(()=>Jv(s,h));const p=d.docs.has(a);!p&&d.fromCache?u.reject(new z(N.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&l&&l.source==="server"?u.reject(new z(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new e_(vf(a.path),c,{includeMetadataChanges:!0,ra:!0});return Xv(s,h)}(await td(t),t.asyncQueue,e,n,r)),r.promise}function s5(t,e,n={}){const r=new Zr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new n_({next:d=>{o.enqueueAndForget(()=>Jv(s,h)),d.fromCache&&l.source==="server"?u.reject(new z(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new e_(a,c,{includeMetadataChanges:!0,ra:!0});return Xv(s,h)}(await td(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(t,e,n){if(!n)throw new z(N.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function o5(t,e,n,r){if(e===!0&&r===!0)throw new z(N.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function z1(t){if(!Z.isDocumentKey(t))throw new z(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function H1(t){if(Z.isDocumentKey(t))throw new z(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function kf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie()}function xn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=kf(t);throw new z(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}o5("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=AC((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new z(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new z(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new z(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Pf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new q1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new q1(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new S$;switch(r.type){case"firstParty":return new k$(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=j1.get(n);r&&(Y("ComponentProvider","Removing Datastore"),j1.delete(n),r.terminate())}(this),Promise.resolve()}}function a5(t,e,n,r={}){var i;const s=(t=xn(t,Pf))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Yo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Xt.MOCK_USER;else{a=$S(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new z(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Xt(u)}t._authCredentials=new R$(new AA(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new di(this.firestore,e,this._query)}}class cn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ui(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new cn(this.firestore,e,this._key)}}class Ui extends di{constructor(e,n,r){super(e,n,vf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new cn(this.firestore,null,new Z(e))}withConverter(e){return new Ui(this.firestore,e,this._path)}}function fr(t,e,...n){if(t=Ke(t),CC("collection","path",e),t instanceof Pf){const r=qe.fromString(e,...n);return H1(r),new Ui(t,null,r)}{if(!(t instanceof cn||t instanceof Ui))throw new z(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return H1(r),new Ui(t.firestore,null,r)}}function $s(t,e,...n){if(t=Ke(t),arguments.length===1&&(e=CA.newId()),CC("doc","path",e),t instanceof Pf){const r=qe.fromString(e,...n);return z1(r),new cn(t,null,new Z(r))}{if(!(t instanceof cn||t instanceof Ui))throw new z(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return z1(r),new cn(t.firestore,t instanceof Ui?t.converter:null,new Z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l5{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Jo=new uC(this,"async_queue_retry"),this.hu=()=>{const n=Fp();n&&Y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Jo.Uo()};const e=Fp();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Fp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Zr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Jo.reset()}catch(e){if(!Ou(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Jo.Ko(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw oi("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=Qv.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&ie()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function W1(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class li extends Pf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new l5}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kC(this),this._firestoreClient.terminate()}}function u5(t,e){const n=typeof t=="object"?t:ev(),r=typeof t=="string"?t:"(default)",i=Gd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=LS("firestore");s&&a5(i,...s)}return i}function Fu(t){return t._firestoreClient||kC(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function kC(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new B$(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,AC(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new e5(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e){this._byteString=e}static fromBase64String(e){try{return new na(rn.fromBase64String(e))}catch(n){throw new z(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new na(rn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c5=/^__.*__$/;class h5{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ts(e,this.data,this.fieldMask,n,this.fieldTransforms):new Lu(e,this.data,n,this.fieldTransforms)}}class PC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ts(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function xC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie()}}class s_{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new s_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return nd(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(xC(this.fu)&&c5.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class d5{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Rf(e)}Fu(e,n,r,i=!1){return new s_({fu:e,methodName:n,vu:r,path:$t.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xf(t){const e=t._freezeSettings(),n=Rf(t._databaseId);return new d5(t._databaseId,!!e.ignoreUndefinedProperties,n)}function NC(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);o_("Data must be an object, but it was:",o,r);const a=OC(r,o);let l,u;if(s.merge)l=new An(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Ug(e,h,n);if(!o.contains(d))throw new z(N.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);MC(c,d)||c.push(d)}l=new An(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new h5(new mn(a),l,u)}class Nf extends r_{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Nf}}function DC(t,e,n,r){const i=t.Fu(1,e,n);o_("Data must be an object, but it was:",i,r);const s=[],o=mn.empty();qs(r,(l,u)=>{const c=a_(e,l,n);u=Ke(u);const h=i.Su(c);if(u instanceof Nf)s.push(c);else{const d=Bu(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new An(s);return new PC(o,a,i.fieldTransforms)}function bC(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[Ug(e,r,n)],l=[i];if(s.length%2!=0)throw new z(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Ug(e,s[d])),l.push(s[d+1]);const u=[],c=mn.empty();for(let d=a.length-1;d>=0;--d)if(!MC(u,a[d])){const p=a[d];let v=l[d];v=Ke(v);const _=o.Su(p);if(v instanceof Nf)u.push(p);else{const E=Bu(v,_);E!=null&&(u.push(p),c.set(p,E))}}const h=new An(u);return new PC(c,h,o.fieldTransforms)}function f5(t,e,n,r=!1){return Bu(n,t.Fu(r?4:3,e))}function Bu(t,e){if(LC(t=Ke(t)))return o_("Unsupported field value:",e,t),OC(t,e);if(t instanceof r_)return function(r,i){if(!xC(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Bu(a,i.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return l4(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Tt.fromDate(r);return{timestampValue:Zh(i.serializer,s)}}if(r instanceof Tt){const s=new Tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zh(i.serializer,s)}}if(r instanceof i_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof na)return{bytesValue:eC(i.serializer,r._byteString)};if(r instanceof cn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Bv(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${kf(r)}`)}(t,e)}function OC(t,e){const n={};return kA(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qs(t,(r,i)=>{const s=Bu(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function LC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Tt||t instanceof i_||t instanceof na||t instanceof cn||t instanceof r_)}function o_(t,e,n){if(!LC(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=kf(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function Ug(t,e,n){if((e=Ke(e))instanceof Uu)return e._internalPath;if(typeof e=="string")return a_(t,e);throw nd("Field path arguments must be of type string or ",t,!1,void 0,n)}const p5=new RegExp("[~\\*/\\[\\]]");function a_(t,e,n){if(e.search(p5)>=0)throw nd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Uu(...e.split("."))._internalPath}catch{throw nd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new z(N.INVALID_ARGUMENT,a+t+l)}function MC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new cn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new m5(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Df("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class m5 extends VC{data(){return super.data()}}function Df(t,e){return typeof e=="string"?a_(t,e):e instanceof Uu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class l_{}class u_ extends l_{}function rd(t,e,...n){let r=[];e instanceof l_&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof c_).length,a=s.filter(l=>l instanceof bf).length;if(o>1||o>0&&a>0)throw new z(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class bf extends u_{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new bf(e,n,r)}_apply(e){const n=this._parse(e);return BC(e._query,n),new di(e.firestore,e.converter,Dg(e._query,n))}_parse(e){const n=xf(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new z(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){G1(h,c);const p=[];for(const v of h)p.push(K1(l,s,v));d={arrayValue:{values:p}}}else d=K1(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||G1(h,c),d=f5(a,o,h,c==="in"||c==="not-in");return pt.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function id(t,e,n){const r=e,i=Df("where",t);return bf._create(i,r,n)}class c_ extends l_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new c_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:dr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)BC(o,l),o=Dg(o,l)}(e._query,n),new di(e.firestore,e.converter,Dg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class h_ extends u_{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new h_(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new z(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new z(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new au(s,o)}(e._query,this._field,this._direction);return new di(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ga(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function FC(t,e="asc"){const n=e,r=Df("orderBy",t);return h_._create(r,n)}class d_ extends u_{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new d_(e,n,r)}_apply(e){return new di(e.firestore,e.converter,Yh(e._query,this._limit,this._limitType))}}function UC(t){return d_._create("limit",t,"F")}function K1(t,e,n){if(typeof(n=Ke(n))=="string"){if(n==="")throw new z(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!VA(e)&&n.indexOf("/")!==-1)throw new z(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(qe.fromString(n));if(!Z.isDocumentKey(r))throw new z(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return m1(t,new Z(r))}if(n instanceof cn)return m1(t,n._key);throw new z(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${kf(n)}.`)}function G1(t,e){if(!Array.isArray(t)||t.length===0)throw new z(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function BC(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class g5{convertValue(e,n="none"){switch(Vs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ms(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ie()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return qs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new i_(ct(e.latitude),ct(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Lv(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(iu(e));default:return null}}convertTimestamp(e){const n=qi(e);return new Tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=qe.fromString(e);Fe(oC(r));const i=new su(r.get(1),r.get(3)),s=new Z(r.popFirst(5));return i.isEqual(n)||oi(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zC extends VC{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new rh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Df("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class rh extends zC{data(e={}){return super.data(e)}}class HC{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Xa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new rh(this._firestore,this._userDataWriter,r.key,r,new Xa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new rh(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Xa(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new rh(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Xa(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:y5(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function y5(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v5(t){t=xn(t,cn);const e=xn(t.firestore,li);return i5(Fu(e),t._key).then(n=>WC(e,t,n))}class f_ extends g5{constructor(e){super(),this.firestore=e}convertBytes(e){return new na(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new cn(this.firestore,null,n)}}function ra(t){t=xn(t,di);const e=xn(t.firestore,li),n=Fu(e),r=new f_(e);return $C(t._query),s5(n,t._query).then(i=>new HC(e,r,t,i))}function _5(t,e,n,...r){t=xn(t,cn);const i=xn(t.firestore,li),s=xf(i);let o;return o=typeof(e=Ke(e))=="string"||e instanceof Uu?bC(s,"updateDoc",t._key,e,n,r):DC(s,"updateDoc",t._key,e),Of(i,[o.toMutation(t._key,wn.exists(!0))])}function w5(t){return Of(xn(t.firestore,li),[new If(t._key,wn.none())])}function p_(t,e){const n=xn(t.firestore,li),r=$s(t),i=jC(t.converter,e);return Of(n,[NC(xf(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,wn.exists(!1))]).then(()=>r)}function qC(t,...e){var n,r,i;t=Ke(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||W1(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(W1(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof cn)u=xn(t.firestore,li),c=vf(t._key.path),l={next:h=>{e[o]&&e[o](WC(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=xn(t,di);u=xn(h.firestore,li),c=h._query;const d=new f_(u);l={next:p=>{e[o]&&e[o](new HC(u,d,h,p))},error:e[o+1],complete:e[o+2]},$C(t._query)}return function(d,p,v,_){const E=new n_(_),g=new e_(p,E,v);return d.asyncQueue.enqueueAndForget(async()=>Xv(await td(d),g)),()=>{E.$a(),d.asyncQueue.enqueueAndForget(async()=>Jv(await td(d),g))}}(Fu(u),c,a,l)}function Of(t,e){return function(r,i){const s=new Zr;return r.asyncQueue.enqueueAndForget(async()=>qF(await r5(r),i,s)),s.promise}(Fu(t),e)}function WC(t,e,n){const r=n.docs.get(e._key),i=new f_(t);return new zC(t,i,e._key,r,new Xa(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E5{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=xf(e)}set(e,n,r){this._verifyNotCommitted();const i=Bp(e,this._firestore),s=jC(i.converter,n,r),o=NC(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,wn.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Bp(e,this._firestore);let o;return o=typeof(n=Ke(n))=="string"||n instanceof Uu?bC(this._dataReader,"WriteBatch.update",s._key,n,r,i):DC(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,wn.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Bp(e,this._firestore);return this._mutations=this._mutations.concat(new If(n._key,wn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new z(N.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Bp(t,e){if((t=Ke(t)).firestore!==e)throw new z(N.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KC(t){return Fu(t=xn(t,li)),new E5(t,e=>Of(t,e))}(function(e,n=!0){(function(i){ma=i})(zs),Ds(new zi("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new li(new A$(r.getProvider("auth-internal")),new x$(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new z(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new su(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),xr(h1,"4.6.1",e),xr(h1,"4.6.1","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC="firebasestorage.googleapis.com",QC="storageBucket",T5=2*60*1e3,I5=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Yn{constructor(e,n,r=0){super(jp(e),`Firebase Storage: ${n} (${jp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,it.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return jp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var rt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(rt||(rt={}));function jp(t){return"storage/"+t}function m_(){const t="An unknown error occurred, please check the error payload for server response.";return new it(rt.UNKNOWN,t)}function S5(t){return new it(rt.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function R5(t){return new it(rt.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function A5(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new it(rt.UNAUTHENTICATED,t)}function C5(){return new it(rt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function k5(t){return new it(rt.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function P5(){return new it(rt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function x5(){return new it(rt.CANCELED,"User canceled the upload/download.")}function N5(t){return new it(rt.INVALID_URL,"Invalid URL '"+t+"'.")}function D5(t){return new it(rt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function b5(){return new it(rt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+QC+"' property when initializing the app?")}function O5(){return new it(rt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function L5(){return new it(rt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function M5(t){return new it(rt.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Bg(t){return new it(rt.INVALID_ARGUMENT,t)}function YC(){return new it(rt.APP_DELETED,"The Firebase app was deleted.")}function V5(t){return new it(rt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function gl(t,e){return new it(rt.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function $a(t){throw new it(rt.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Cn.makeFromUrl(e,n)}catch{return new Cn(e,"")}if(r.path==="")return r;throw D5(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(m){m.path.charAt(m.path.length-1)==="/"&&(m.path_=m.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(m){m.path_=decodeURIComponent(m.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),v={bucket:1,path:3},_=n===GC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",g=new RegExp(`^https?://${_}/${i}/${E}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:p,indices:v,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let m=0;m<y.length;m++){const T=y[m],S=T.regex.exec(e);if(S){const I=S[T.indices.bucket];let D=S[T.indices.path];D||(D=""),r=new Cn(I,D),T.postModify(r);break}}if(r==null)throw N5(e);return r}}class $5{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F5(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...E){u||(u=!0,e.apply(null,E))}function h(E){i=setTimeout(()=>{i=null,t(p,l())},E)}function d(){s&&clearTimeout(s)}function p(E,...g){if(u){d();return}if(E){d(),c.call(null,E,...g);return}if(l()||o){d(),c.call(null,E,...g);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,h(y)}let v=!1;function _(E){v||(v=!0,d(),!u&&(i!==null?(E||(a=2),clearTimeout(i),h(0)):E||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function U5(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B5(t){return t!==void 0}function j5(t){return typeof t=="object"&&!Array.isArray(t)}function g_(t){return typeof t=="string"||t instanceof String}function Q1(t){return y_()&&t instanceof Blob}function y_(){return typeof Blob<"u"}function Y1(t,e,n,r){if(r<e)throw Bg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Bg(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function XC(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ts;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ts||(Ts={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z5(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H5{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,v)=>{this.resolve_=p,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ac(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Ts.NO_ERROR,l=s.getStatus();if(!a||z5(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Ts.ABORT;r(!1,new Ac(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ac(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());B5(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=m_();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?YC():x5();o(l)}else{const l=P5();o(l)}};this.canceled_?n(!1,new Ac(!1,null,!0)):this.backoffId_=F5(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&U5(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ac{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function q5(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function W5(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function K5(t,e){e&&(t["X-Firebase-GMPID"]=e)}function G5(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Q5(t,e,n,r,i,s,o=!0){const a=XC(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return K5(u,e),q5(u,n),W5(u,s),G5(u,r),new H5(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y5(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function X5(...t){const e=Y5();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(y_())return new Blob(t);throw new it(rt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function J5(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z5(t){if(typeof atob>"u")throw M5("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class zp{constructor(e,n){this.data=e,this.contentType=n||null}}function eU(t,e){switch(t){case Rr.RAW:return new zp(JC(e));case Rr.BASE64:case Rr.BASE64URL:return new zp(ZC(t,e));case Rr.DATA_URL:return new zp(nU(e),rU(e))}throw m_()}function JC(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function tU(t){let e;try{e=decodeURIComponent(t)}catch{throw gl(Rr.DATA_URL,"Malformed data URL.")}return JC(e)}function ZC(t,e){switch(t){case Rr.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw gl(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Rr.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw gl(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Z5(e)}catch(i){throw i.message.includes("polyfill")?i:gl(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class ek{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw gl(Rr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=iU(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function nU(t){const e=new ek(t);return e.base64?ZC(Rr.BASE64,e.rest):tU(e.rest)}function rU(t){return new ek(t).contentType}function iU(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n){let r=0,i="";Q1(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Q1(this.data_)){const r=this.data_,i=J5(r,e,n);return i===null?null:new Si(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Si(r,!0)}}static getBlob(...e){if(y_()){const n=e.map(r=>r instanceof Si?r.data_:r);return new Si(X5.apply(null,n))}else{const n=e.map(o=>g_(o)?eU(Rr.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Si(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(t){let e;try{e=JSON.parse(t)}catch{return null}return j5(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sU(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function oU(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function nk(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aU(t,e){return e}class sn{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||aU}}let Cc=null;function lU(t){return!g_(t)||t.length<2?t:nk(t)}function rk(){if(Cc)return Cc;const t=[];t.push(new sn("bucket")),t.push(new sn("generation")),t.push(new sn("metageneration")),t.push(new sn("name","fullPath",!0));function e(s,o){return lU(o)}const n=new sn("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new sn("size");return i.xform=r,t.push(i),t.push(new sn("timeCreated")),t.push(new sn("updated")),t.push(new sn("md5Hash",null,!0)),t.push(new sn("cacheControl",null,!0)),t.push(new sn("contentDisposition",null,!0)),t.push(new sn("contentEncoding",null,!0)),t.push(new sn("contentLanguage",null,!0)),t.push(new sn("contentType",null,!0)),t.push(new sn("metadata","customMetadata",!0)),Cc=t,Cc}function uU(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Cn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function cU(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return uU(r,t),r}function ik(t,e,n){const r=tk(e);return r===null?null:cU(t,r,n)}function hU(t,e,n,r){const i=tk(e);if(i===null||!g_(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),p=Lf(d,n,r),v=XC({alt:"media",token:u});return p+v})[0]}function dU(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class v_{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t){if(!t)throw m_()}function fU(t,e){function n(r,i){const s=ik(t,i,e);return sk(s!==null),s}return n}function pU(t,e){function n(r,i){const s=ik(t,i,e);return sk(s!==null),hU(s,i,t.host,t._protocol)}return n}function ok(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=C5():i=A5():n.getStatus()===402?i=R5(t.bucket):n.getStatus()===403?i=k5(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function ak(t){const e=ok(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=S5(t.path)),s.serverResponse=i.serverResponse,s}return n}function mU(t,e,n){const r=e.fullServerUrl(),i=Lf(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new v_(i,s,pU(t,n),o);return a.errorHandler=ak(e),a}function gU(t,e){const n=e.fullServerUrl(),r=Lf(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,u){}const a=new v_(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=ak(e),a}function yU(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function vU(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=yU(null,e)),r}function _U(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let m=0;m<2;m++)y=y+Math.random().toString().slice(2);return y}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=vU(e,r,i),c=dU(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",p=Si.getBlob(h,r,d);if(p===null)throw O5();const v={name:u.fullPath},_=Lf(s,t.host,t._protocol),E="POST",g=t.maxUploadRetryTime,f=new v_(_,E,fU(t,n),g);return f.urlParams=v,f.headers=o,f.body=p.uploadData(),f.errorHandler=ok(e),f}class wU{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ts.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ts.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ts.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw $a("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw $a("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw $a("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw $a("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw $a("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class EU extends wU{initXhr(){this.xhr_.responseType="text"}}function __(){return new EU}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n){this._service=e,n instanceof Cn?this._location=n:this._location=Cn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Fs(e,n)}get root(){const e=new Cn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return nk(this._location.path)}get storage(){return this._service}get parent(){const e=sU(this._location.path);if(e===null)return null;const n=new Cn(this._location.bucket,e);return new Fs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw V5(e)}}function TU(t,e,n){t._throwIfRoot("uploadBytes");const r=_U(t.storage,t._location,rk(),new Si(e,!0),n);return t.storage.makeRequestWithTokens(r,__).then(i=>({metadata:i,ref:t}))}function IU(t){t._throwIfRoot("getDownloadURL");const e=mU(t.storage,t._location,rk());return t.storage.makeRequestWithTokens(e,__).then(n=>{if(n===null)throw L5();return n})}function SU(t){t._throwIfRoot("deleteObject");const e=gU(t.storage,t._location);return t.storage.makeRequestWithTokens(e,__)}function RU(t,e){const n=oU(t._location.path,e),r=new Cn(t._location.bucket,n);return new Fs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AU(t){return/^[A-Za-z]+:\/\//.test(t)}function CU(t,e){return new Fs(t,e)}function lk(t,e){if(t instanceof w_){const n=t;if(n._bucket==null)throw b5();const r=new Fs(n,n._bucket);return e!=null?lk(r,e):r}else return e!==void 0?RU(t,e):t}function kU(t,e){if(e&&AU(e)){if(t instanceof w_)return CU(t,e);throw Bg("To use ref(service, url), the first argument must be a Storage instance.")}else return lk(t,e)}function X1(t,e){const n=e==null?void 0:e[QC];return n==null?null:Cn.makeFromBucketSpec(n,t)}function PU(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:$S(i,t.app.options.projectId))}class w_{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=GC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=T5,this._maxUploadRetryTime=I5,this._requests=new Set,i!=null?this._bucket=Cn.makeFromBucketSpec(i,this._host):this._bucket=X1(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Cn.makeFromBucketSpec(this._url,e):this._bucket=X1(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Y1("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Y1("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Fs(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new $5(YC());{const o=Q5(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const J1="@firebase/storage",Z1="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk="storage";function ck(t,e,n){return t=Ke(t),TU(t,e,n)}function cu(t){return t=Ke(t),IU(t)}function xU(t){return t=Ke(t),SU(t)}function hu(t,e){return t=Ke(t),kU(t,e)}function NU(t=ev(),e){t=Ke(t);const r=Gd(t,uk).getImmediate({identifier:e}),i=LS("storage");return i&&DU(r,...i),r}function DU(t,e,n,r={}){PU(t,e,n,r)}function bU(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new w_(n,r,i,e,zs)}function OU(){Ds(new zi(uk,bU,"PUBLIC").setMultipleInstances(!0)),xr(J1,Z1,""),xr(J1,Z1,"esm2017")}OU();const LU={apiKey:"AIzaSyASPc9riaEq3c_TA41bM9yT4DYqLzn-PO0",authDomain:"twitter-clone-c9157.firebaseapp.com",projectId:"twitter-clone-c9157",storageBucket:"twitter-clone-c9157.appspot.com",messagingSenderId:"337648322109",appId:"1:337648322109:web:fe3df46a705e7852274c54"},E_=BS(LU),Qn=IR(E_),du=NU(E_),mt=u5(E_),MU=H.div`
  display: grid;
  grid-template-columns: 5rem auto;
  width: 100%;
  height: 100vh;
  //overflow-y: hidden;
  max-width: 64rem;
  @media (max-width: 767px) {
    grid-template-columns: none;
    grid-template-rows: auto 5rem;
    gap: 0;
    .menu {
      order: 2;
    }
    .outlet {
      order: 1;
    }
  }
`,VU=H.div`
  margin: 0.5rem 0;
  overflow-y: auto;
  height: calc(100vh - 1rem);
  &::-webkit-scrollbar {
    width: 0.3rem;
  }

  &::-webkit-scrollbar-track {
    background: ${t=>t.theme.colors.scrollTrack};
    border-radius: 0.1rem;
  }

  &::-webkit-scrollbar-thumb {
    background: ${t=>t.theme.colors.border};
    border-radius: 0.1rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${t=>t.theme.colors.primary40};
  }

  @media (max-width: 767px) {
    height: auto;
    margin: 0;
  }
`,$U=H.div`
  ${t=>t.theme.flex.columnCenterTop};
  gap: 1.5rem;
  padding: 3rem 0;
  height: calc(100vh - 6rem);
  border-right: 0.0625rem solid ${t=>t.theme.colors.border};
  @media (max-width: 767px) {
    height: auto;
    ${t=>t.theme.flex.rowBetweenCenter};
    padding: 0 3rem;
    border-left: none;
    border-top: 0.0625rem solid ${t=>t.theme.colors.border};
  }
`,kc=H.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  svg {
    width: 30px;
    fill: ${t=>t.theme.colors.primaryText};
    &:hover {
      fill: ${t=>t.theme.colors.secondaryTextHover};
    }
  }
  &.log-out {
    svg {
      fill: ${t=>t.theme.colors.delete};
      &:hover {
        fill: ${t=>t.theme.colors.deleteHover};
      }
    }
  }
  &:hover {
    background-color: ${t=>t.theme.colors.secondary};
  }
  transition: all 0.2s ease-out;
`;function FU(){var n;const t=Lr(),e=async()=>{confirm("로그아웃 하시겠습니까?")&&(await Qn.signOut(),t("/login"))};return P(HE,{children:Pe(MU,{children:[Pe($U,{className:"menu",children:[P(ll,{to:"/profile",state:{targetUserId:(n=Qn.currentUser)==null?void 0:n.uid},children:P(kc,{children:P("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:P("path",{fillRule:"evenodd",d:"M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z",clipRule:"evenodd"})})})}),P(ll,{to:"/search",children:P(kc,{children:P("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:P("path",{fillRule:"evenodd",d:"M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z",clipRule:"evenodd"})})})}),P(ll,{to:"/",children:P(kc,{children:Pe("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:[P("path",{d:"M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"}),P("path",{d:"m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"})]})})}),P(kc,{onClick:e,className:"log-out",children:P("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:P("path",{fillRule:"evenodd",d:"M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"})})})]}),P(VU,{className:"outlet",children:P(hb,{})})]})})}var ju=t=>t.type==="checkbox",wo=t=>t instanceof Date,an=t=>t==null;const hk=t=>typeof t=="object";var It=t=>!an(t)&&!Array.isArray(t)&&hk(t)&&!wo(t),UU=t=>It(t)&&t.target?ju(t.target)?t.target.checked:t.target.value:t,BU=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,jU=(t,e)=>t.has(BU(e)),zU=t=>{const e=t.constructor&&t.constructor.prototype;return It(e)&&e.hasOwnProperty("isPrototypeOf")},T_=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function $n(t){let e;const n=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(T_&&(t instanceof Blob||t instanceof FileList))&&(n||It(t)))if(e=n?[]:{},!n&&!zU(t))e=t;else for(const r in t)t.hasOwnProperty(r)&&(e[r]=$n(t[r]));else return t;return e}var zu=t=>Array.isArray(t)?t.filter(Boolean):[],ot=t=>t===void 0,Q=(t,e,n)=>{if(!e||!It(t))return n;const r=zu(e.split(/[,[\].]+?/)).reduce((i,s)=>an(i)?i:i[s],t);return ot(r)||r===t?ot(t[e])?n:t[e]:r},jr=t=>typeof t=="boolean";const eE={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},ir={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},$r={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ze.createContext(null);var HU=(t,e,n,r=!0)=>{const i={defaultValues:e._defaultValues};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e._proxyFormState[o]!==ir.all&&(e._proxyFormState[o]=!r||ir.all),t[o]}});return i},In=t=>It(t)&&!Object.keys(t).length,qU=(t,e,n,r)=>{n(t);const{name:i,...s}=t;return In(s)||Object.keys(s).length>=Object.keys(e).length||Object.keys(s).find(o=>e[o]===ir.all)},Hp=t=>Array.isArray(t)?t:[t];function WU(t){const e=ze.useRef(t);e.current=t,ze.useEffect(()=>{const n=!t.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{n&&n.unsubscribe()}},[t.disabled])}var Ar=t=>typeof t=="string",KU=(t,e,n,r,i)=>Ar(t)?(r&&e.watch.add(t),Q(n,t,i)):Array.isArray(t)?t.map(s=>(r&&e.watch.add(s),Q(n,s))):(r&&(e.watchAll=!0),n),I_=t=>/^\w*$/.test(t),dk=t=>zu(t.replace(/["|']|\]/g,"").split(/\.|\[/)),je=(t,e,n)=>{let r=-1;const i=I_(e)?[e]:dk(e),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let l=n;if(r!==o){const u=t[a];l=It(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}t[a]=l,t=t[a]}return t},GU=(t,e,n,r,i)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:i||!0}}:{},tE=t=>({isOnSubmit:!t||t===ir.onSubmit,isOnBlur:t===ir.onBlur,isOnChange:t===ir.onChange,isOnAll:t===ir.all,isOnTouch:t===ir.onTouched}),nE=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length))));const yl=(t,e,n,r)=>{for(const i of n||Object.keys(t)){const s=Q(t,i);if(s){const{_f:o,...a}=s;if(o){if(o.refs&&o.refs[0]&&e(o.refs[0],i)&&!r)break;if(o.ref&&e(o.ref,o.name)&&!r)break;yl(a,e)}else It(a)&&yl(a,e)}}};var QU=(t,e,n)=>{const r=zu(Q(t,n));return je(r,"root",e[n]),je(t,n,r),t},S_=t=>t.type==="file",ki=t=>typeof t=="function",sd=t=>{if(!T_)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},ih=t=>Ar(t),R_=t=>t.type==="radio",od=t=>t instanceof RegExp;const rE={value:!1,isValid:!1},iE={value:!0,isValid:!0};var fk=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!ot(t[0].attributes.value)?ot(t[0].value)||t[0].value===""?iE:{value:t[0].value,isValid:!0}:iE:rE}return rE};const sE={isValid:!1,value:null};var pk=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,sE):sE;function oE(t,e,n="validate"){if(ih(t)||Array.isArray(t)&&t.every(ih)||jr(t)&&!t)return{type:n,message:ih(t)?t:"",ref:e}}var Js=t=>It(t)&&!od(t)?t:{value:t,message:""},aE=async(t,e,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:l,minLength:u,min:c,max:h,pattern:d,validate:p,name:v,valueAsNumber:_,mount:E,disabled:g}=t._f,f=Q(e,v);if(!E||g)return{};const y=o?o[0]:s,m=j=>{r&&y.reportValidity&&(y.setCustomValidity(jr(j)?"":j||""),y.reportValidity())},T={},S=R_(s),I=ju(s),D=S||I,K=(_||S_(s))&&ot(s.value)&&ot(f)||sd(s)&&s.value===""||f===""||Array.isArray(f)&&!f.length,V=GU.bind(null,v,n,T),ge=(j,ne,he,Ee=$r.maxLength,Le=$r.minLength)=>{const Me=j?ne:he;T[v]={type:j?Ee:Le,message:Me,ref:s,...V(j?Ee:Le,Me)}};if(i?!Array.isArray(f)||!f.length:a&&(!D&&(K||an(f))||jr(f)&&!f||I&&!fk(o).isValid||S&&!pk(o).isValid)){const{value:j,message:ne}=ih(a)?{value:!!a,message:a}:Js(a);if(j&&(T[v]={type:$r.required,message:ne,ref:y,...V($r.required,ne)},!n))return m(ne),T}if(!K&&(!an(c)||!an(h))){let j,ne;const he=Js(h),Ee=Js(c);if(!an(f)&&!isNaN(f)){const Le=s.valueAsNumber||f&&+f;an(he.value)||(j=Le>he.value),an(Ee.value)||(ne=Le<Ee.value)}else{const Le=s.valueAsDate||new Date(f),Me=ee=>new Date(new Date().toDateString()+" "+ee),$=s.type=="time",W=s.type=="week";Ar(he.value)&&f&&(j=$?Me(f)>Me(he.value):W?f>he.value:Le>new Date(he.value)),Ar(Ee.value)&&f&&(ne=$?Me(f)<Me(Ee.value):W?f<Ee.value:Le<new Date(Ee.value))}if((j||ne)&&(ge(!!j,he.message,Ee.message,$r.max,$r.min),!n))return m(T[v].message),T}if((l||u)&&!K&&(Ar(f)||i&&Array.isArray(f))){const j=Js(l),ne=Js(u),he=!an(j.value)&&f.length>+j.value,Ee=!an(ne.value)&&f.length<+ne.value;if((he||Ee)&&(ge(he,j.message,ne.message),!n))return m(T[v].message),T}if(d&&!K&&Ar(f)){const{value:j,message:ne}=Js(d);if(od(j)&&!f.match(j)&&(T[v]={type:$r.pattern,message:ne,ref:s,...V($r.pattern,ne)},!n))return m(ne),T}if(p){if(ki(p)){const j=await p(f,e),ne=oE(j,y);if(ne&&(T[v]={...ne,...V($r.validate,ne.message)},!n))return m(ne.message),T}else if(It(p)){let j={};for(const ne in p){if(!In(j)&&!n)break;const he=oE(await p[ne](f,e),y,ne);he&&(j={...he,...V(ne,he.message)},m(he.message),n&&(T[v]=j))}if(!In(j)&&(T[v]={ref:y,...j},!n))return T}}return m(!0),T};function YU(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=ot(t)?r++:t[e[r++]];return t}function XU(t){for(const e in t)if(t.hasOwnProperty(e)&&!ot(t[e]))return!1;return!0}function yt(t,e){const n=Array.isArray(e)?e:I_(e)?[e]:dk(e),r=n.length===1?t:YU(t,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(It(r)&&In(r)||Array.isArray(r)&&XU(r))&&yt(t,n.slice(0,-1)),t}var qp=()=>{let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next&&s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}},ad=t=>an(t)||!hk(t);function ys(t,e){if(ad(t)||ad(e))return t===e;if(wo(t)&&wo(e))return t.getTime()===e.getTime();const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n){const s=t[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=e[i];if(wo(s)&&wo(o)||It(s)&&It(o)||Array.isArray(s)&&Array.isArray(o)?!ys(s,o):s!==o)return!1}}return!0}var mk=t=>t.type==="select-multiple",JU=t=>R_(t)||ju(t),Wp=t=>sd(t)&&t.isConnected,gk=t=>{for(const e in t)if(ki(t[e]))return!0;return!1};function ld(t,e={}){const n=Array.isArray(t);if(It(t)||n)for(const r in t)Array.isArray(t[r])||It(t[r])&&!gk(t[r])?(e[r]=Array.isArray(t[r])?[]:{},ld(t[r],e[r])):an(t[r])||(e[r]=!0);return e}function yk(t,e,n){const r=Array.isArray(t);if(It(t)||r)for(const i in t)Array.isArray(t[i])||It(t[i])&&!gk(t[i])?ot(e)||ad(n[i])?n[i]=Array.isArray(t[i])?ld(t[i],[]):{...ld(t[i])}:yk(t[i],an(e)?{}:e[i],n[i]):n[i]=!ys(t[i],e[i]);return n}var Pc=(t,e)=>yk(t,e,ld(e)),vk=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>ot(t)?t:e?t===""?NaN:t&&+t:n&&Ar(t)?new Date(t):r?r(t):t;function Kp(t){const e=t.ref;if(!(t.refs?t.refs.every(n=>n.disabled):e.disabled))return S_(e)?e.files:R_(e)?pk(t.refs).value:mk(e)?[...e.selectedOptions].map(({value:n})=>n):ju(e)?fk(t.refs).value:vk(ot(e.value)?t.ref.value:e.value,t)}var ZU=(t,e,n,r)=>{const i={};for(const s of t){const o=Q(e,s);o&&je(i,s,o._f)}return{criteriaMode:n,names:[...t],fields:i,shouldUseNativeValidation:r}},Fa=t=>ot(t)?t:od(t)?t.source:It(t)?od(t.value)?t.value.source:t.value:t,e3=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function lE(t,e,n){const r=Q(t,n);if(r||I_(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=Q(e,s),a=Q(t,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var t3=(t,e,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(e||t):(n?r.isOnBlur:i.isOnBlur)?!t:(n?r.isOnChange:i.isOnChange)?t:!0,n3=(t,e)=>!zu(Q(t,e)).length&&yt(t,e);const r3={mode:ir.onSubmit,reValidateMode:ir.onChange,shouldFocusError:!0};function i3(t={}){let e={...r3,...t},n={submitCount:0,isDirty:!1,isLoading:ki(e.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1},r={},i=It(e.defaultValues)||It(e.values)?$n(e.defaultValues||e.values)||{}:{},s=e.shouldUnregister?{}:$n(i),o={action:!1,mount:!1,watch:!1},a={mount:new Set,unMount:new Set,array:new Set,watch:new Set},l,u=0;const c={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},h={values:qp(),array:qp(),state:qp()},d=tE(e.mode),p=tE(e.reValidateMode),v=e.criteriaMode===ir.all,_=w=>R=>{clearTimeout(u),u=setTimeout(w,R)},E=async w=>{if(c.isValid||w){const R=e.resolver?In((await D()).errors):await V(r,!0);R!==n.isValid&&h.state.next({isValid:R})}},g=(w,R)=>{(c.isValidating||c.validatingFields)&&((w||Array.from(a.mount)).forEach(C=>{C&&(R?je(n.validatingFields,C,R):yt(n.validatingFields,C))}),h.state.next({validatingFields:n.validatingFields,isValidating:!In(n.validatingFields)}))},f=(w,R=[],C,B,F=!0,M=!0)=>{if(B&&C){if(o.action=!0,M&&Array.isArray(Q(r,w))){const J=C(Q(r,w),B.argA,B.argB);F&&je(r,w,J)}if(M&&Array.isArray(Q(n.errors,w))){const J=C(Q(n.errors,w),B.argA,B.argB);F&&je(n.errors,w,J),n3(n.errors,w)}if(c.touchedFields&&M&&Array.isArray(Q(n.touchedFields,w))){const J=C(Q(n.touchedFields,w),B.argA,B.argB);F&&je(n.touchedFields,w,J)}c.dirtyFields&&(n.dirtyFields=Pc(i,s)),h.state.next({name:w,isDirty:j(w,R),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else je(s,w,R)},y=(w,R)=>{je(n.errors,w,R),h.state.next({errors:n.errors})},m=w=>{n.errors=w,h.state.next({errors:n.errors,isValid:!1})},T=(w,R,C,B)=>{const F=Q(r,w);if(F){const M=Q(s,w,ot(C)?Q(i,w):C);ot(M)||B&&B.defaultChecked||R?je(s,w,R?M:Kp(F._f)):Ee(w,M),o.mount&&E()}},S=(w,R,C,B,F)=>{let M=!1,J=!1;const Se={name:w},Ye=!!(Q(r,w)&&Q(r,w)._f.disabled);if(!C||B){c.isDirty&&(J=n.isDirty,n.isDirty=Se.isDirty=j(),M=J!==Se.isDirty);const qt=Ye||ys(Q(i,w),R);J=!!(!Ye&&Q(n.dirtyFields,w)),qt||Ye?yt(n.dirtyFields,w):je(n.dirtyFields,w,!0),Se.dirtyFields=n.dirtyFields,M=M||c.dirtyFields&&J!==!qt}if(C){const qt=Q(n.touchedFields,w);qt||(je(n.touchedFields,w,C),Se.touchedFields=n.touchedFields,M=M||c.touchedFields&&qt!==C)}return M&&F&&h.state.next(Se),M?Se:{}},I=(w,R,C,B)=>{const F=Q(n.errors,w),M=c.isValid&&jr(R)&&n.isValid!==R;if(t.delayError&&C?(l=_(()=>y(w,C)),l(t.delayError)):(clearTimeout(u),l=null,C?je(n.errors,w,C):yt(n.errors,w)),(C?!ys(F,C):F)||!In(B)||M){const J={...B,...M&&jr(R)?{isValid:R}:{},errors:n.errors,name:w};n={...n,...J},h.state.next(J)}},D=async w=>{g(w,!0);const R=await e.resolver(s,e.context,ZU(w||a.mount,r,e.criteriaMode,e.shouldUseNativeValidation));return g(w),R},K=async w=>{const{errors:R}=await D(w);if(w)for(const C of w){const B=Q(R,C);B?je(n.errors,C,B):yt(n.errors,C)}else n.errors=R;return R},V=async(w,R,C={valid:!0})=>{for(const B in w){const F=w[B];if(F){const{_f:M,...J}=F;if(M){const Se=a.array.has(M.name);g([B],!0);const Ye=await aE(F,s,v,e.shouldUseNativeValidation&&!R,Se);if(g([B]),Ye[M.name]&&(C.valid=!1,R))break;!R&&(Q(Ye,M.name)?Se?QU(n.errors,Ye,M.name):je(n.errors,M.name,Ye[M.name]):yt(n.errors,M.name))}J&&await V(J,R,C)}}return C.valid},ge=()=>{for(const w of a.unMount){const R=Q(r,w);R&&(R._f.refs?R._f.refs.every(C=>!Wp(C)):!Wp(R._f.ref))&&lt(w)}a.unMount=new Set},j=(w,R)=>(w&&R&&je(s,w,R),!ys(Te(),i)),ne=(w,R,C)=>KU(w,a,{...o.mount?s:ot(R)?i:Ar(w)?{[w]:R}:R},C,R),he=w=>zu(Q(o.mount?s:i,w,t.shouldUnregister?Q(i,w,[]):[])),Ee=(w,R,C={})=>{const B=Q(r,w);let F=R;if(B){const M=B._f;M&&(!M.disabled&&je(s,w,vk(R,M)),F=sd(M.ref)&&an(R)?"":R,mk(M.ref)?[...M.ref.options].forEach(J=>J.selected=F.includes(J.value)):M.refs?ju(M.ref)?M.refs.length>1?M.refs.forEach(J=>(!J.defaultChecked||!J.disabled)&&(J.checked=Array.isArray(F)?!!F.find(Se=>Se===J.value):F===J.value)):M.refs[0]&&(M.refs[0].checked=!!F):M.refs.forEach(J=>J.checked=J.value===F):S_(M.ref)?M.ref.value="":(M.ref.value=F,M.ref.type||h.values.next({name:w,values:{...s}})))}(C.shouldDirty||C.shouldTouch)&&S(w,F,C.shouldTouch,C.shouldDirty,!0),C.shouldValidate&&ee(w)},Le=(w,R,C)=>{for(const B in R){const F=R[B],M=`${w}.${B}`,J=Q(r,M);(a.array.has(w)||!ad(F)||J&&!J._f)&&!wo(F)?Le(M,F,C):Ee(M,F,C)}},Me=(w,R,C={})=>{const B=Q(r,w),F=a.array.has(w),M=$n(R);je(s,w,M),F?(h.array.next({name:w,values:{...s}}),(c.isDirty||c.dirtyFields)&&C.shouldDirty&&h.state.next({name:w,dirtyFields:Pc(i,s),isDirty:j(w,M)})):B&&!B._f&&!an(M)?Le(w,M,C):Ee(w,M,C),nE(w,a)&&h.state.next({...n}),h.values.next({name:o.mount?w:void 0,values:{...s}})},$=async w=>{o.mount=!0;const R=w.target;let C=R.name,B=!0;const F=Q(r,C),M=()=>R.type?Kp(F._f):UU(w),J=Se=>{B=Number.isNaN(Se)||Se===Q(s,C,Se)};if(F){let Se,Ye;const qt=M(),mr=w.type===eE.BLUR||w.type===eE.FOCUS_OUT,Vf=!e3(F._f)&&!e.resolver&&!Q(n.errors,C)&&!F._f.deps||t3(mr,Q(n.touchedFields,C),n.isSubmitted,p,d),Gs=nE(C,a,mr);je(s,C,qt),mr?(F._f.onBlur&&F._f.onBlur(w),l&&l(0)):F._f.onChange&&F._f.onChange(w);const _a=S(C,qt,mr,!1),Ku=!In(_a)||Gs;if(!mr&&h.values.next({name:C,type:w.type,values:{...s}}),Vf)return c.isValid&&E(),Ku&&h.state.next({name:C,...Gs?{}:_a});if(!mr&&Gs&&h.state.next({...n}),e.resolver){const{errors:Gu}=await D([C]);if(J(qt),B){const A=lE(n.errors,r,C),k=lE(Gu,r,A.name||C);Se=k.error,C=k.name,Ye=In(Gu)}}else g([C],!0),Se=(await aE(F,s,v,e.shouldUseNativeValidation))[C],g([C]),J(qt),B&&(Se?Ye=!1:c.isValid&&(Ye=await V(r,!0)));B&&(F._f.deps&&ee(F._f.deps),I(C,Ye,Se,_a))}},W=(w,R)=>{if(Q(n.errors,R)&&w.focus)return w.focus(),1},ee=async(w,R={})=>{let C,B;const F=Hp(w);if(e.resolver){const M=await K(ot(w)?w:F);C=In(M),B=w?!F.some(J=>Q(M,J)):C}else w?(B=(await Promise.all(F.map(async M=>{const J=Q(r,M);return await V(J&&J._f?{[M]:J}:J)}))).every(Boolean),!(!B&&!n.isValid)&&E()):B=C=await V(r);return h.state.next({...!Ar(w)||c.isValid&&C!==n.isValid?{}:{name:w},...e.resolver||!w?{isValid:C}:{},errors:n.errors}),R.shouldFocus&&!B&&yl(r,W,w?F:a.mount),B},Te=w=>{const R={...i,...o.mount?s:{}};return ot(w)?R:Ar(w)?Q(R,w):w.map(C=>Q(R,C))},Ie=(w,R)=>({invalid:!!Q((R||n).errors,w),isDirty:!!Q((R||n).dirtyFields,w),isTouched:!!Q((R||n).touchedFields,w),isValidating:!!Q((R||n).validatingFields,w),error:Q((R||n).errors,w)}),Xn=w=>{w&&Hp(w).forEach(R=>yt(n.errors,R)),h.state.next({errors:w?n.errors:{}})},_e=(w,R,C)=>{const B=(Q(r,w,{_f:{}})._f||{}).ref;je(n.errors,w,{...R,ref:B}),h.state.next({name:w,errors:n.errors,isValid:!1}),C&&C.shouldFocus&&B&&B.focus&&B.focus()},Ht=(w,R)=>ki(w)?h.values.subscribe({next:C=>w(ne(void 0,R),C)}):ne(w,R,!0),lt=(w,R={})=>{for(const C of w?Hp(w):a.mount)a.mount.delete(C),a.array.delete(C),R.keepValue||(yt(r,C),yt(s,C)),!R.keepError&&yt(n.errors,C),!R.keepDirty&&yt(n.dirtyFields,C),!R.keepTouched&&yt(n.touchedFields,C),!R.keepIsValidating&&yt(n.validatingFields,C),!e.shouldUnregister&&!R.keepDefaultValue&&yt(i,C);h.values.next({values:{...s}}),h.state.next({...n,...R.keepDirty?{isDirty:j()}:{}}),!R.keepIsValid&&E()},fn=({disabled:w,name:R,field:C,fields:B,value:F})=>{if(jr(w)){const M=w?void 0:ot(F)?Kp(C?C._f:Q(B,R)._f):F;je(s,R,M),S(R,M,!1,!1,!0)}},St=(w,R={})=>{let C=Q(r,w);const B=jr(R.disabled);return je(r,w,{...C||{},_f:{...C&&C._f?C._f:{ref:{name:w}},name:w,mount:!0,...R}}),a.mount.add(w),C?fn({field:C,disabled:R.disabled,name:w,value:R.value}):T(w,!0,R.value),{...B?{disabled:R.disabled}:{},...e.progressive?{required:!!R.required,min:Fa(R.min),max:Fa(R.max),minLength:Fa(R.minLength),maxLength:Fa(R.maxLength),pattern:Fa(R.pattern)}:{},name:w,onChange:$,onBlur:$,ref:F=>{if(F){St(w,R),C=Q(r,w);const M=ot(F.value)&&F.querySelectorAll&&F.querySelectorAll("input,select,textarea")[0]||F,J=JU(M),Se=C._f.refs||[];if(J?Se.find(Ye=>Ye===M):M===C._f.ref)return;je(r,w,{_f:{...C._f,...J?{refs:[...Se.filter(Wp),M,...Array.isArray(Q(i,w))?[{}]:[]],ref:{type:M.type,name:w}}:{ref:M}}}),T(w,!1,void 0,M)}else C=Q(r,w,{}),C._f&&(C._f.mount=!1),(e.shouldUnregister||R.shouldUnregister)&&!(jU(a.array,w)&&o.action)&&a.unMount.add(w)}}},Mn=()=>e.shouldFocusError&&yl(r,W,a.mount),ns=w=>{jr(w)&&(h.state.next({disabled:w}),yl(r,(R,C)=>{let B=w;const F=Q(r,C);F&&jr(F._f.disabled)&&(B||(B=F._f.disabled)),R.disabled=B},0,!1))},pr=(w,R)=>async C=>{let B;C&&(C.preventDefault&&C.preventDefault(),C.persist&&C.persist());let F=$n(s);if(h.state.next({isSubmitting:!0}),e.resolver){const{errors:M,values:J}=await D();n.errors=M,F=J}else await V(r);if(yt(n.errors,"root"),In(n.errors)){h.state.next({errors:{}});try{await w(F,C)}catch(M){B=M}}else R&&await R({...n.errors},C),Mn(),setTimeout(Mn);if(h.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:In(n.errors)&&!B,submitCount:n.submitCount+1,errors:n.errors}),B)throw B},Vn=(w,R={})=>{Q(r,w)&&(ot(R.defaultValue)?Me(w,$n(Q(i,w))):(Me(w,R.defaultValue),je(i,w,$n(R.defaultValue))),R.keepTouched||yt(n.touchedFields,w),R.keepDirty||(yt(n.dirtyFields,w),n.isDirty=R.defaultValue?j(w,$n(Q(i,w))):j()),R.keepError||(yt(n.errors,w),c.isValid&&E()),h.state.next({...n}))},Hu=(w,R={})=>{const C=w?$n(w):i,B=$n(C),F=In(w),M=F?i:B;if(R.keepDefaultValues||(i=C),!R.keepValues){if(R.keepDirtyValues)for(const J of a.mount)Q(n.dirtyFields,J)?je(M,J,Q(s,J)):Me(J,Q(M,J));else{if(T_&&ot(w))for(const J of a.mount){const Se=Q(r,J);if(Se&&Se._f){const Ye=Array.isArray(Se._f.refs)?Se._f.refs[0]:Se._f.ref;if(sd(Ye)){const qt=Ye.closest("form");if(qt){qt.reset();break}}}}r={}}s=t.shouldUnregister?R.keepDefaultValues?$n(i):{}:$n(M),h.array.next({values:{...M}}),h.values.next({values:{...M}})}a={mount:R.keepDirtyValues?a.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!c.isValid||!!R.keepIsValid||!!R.keepDirtyValues,o.watch=!!t.shouldUnregister,h.state.next({submitCount:R.keepSubmitCount?n.submitCount:0,isDirty:F?!1:R.keepDirty?n.isDirty:!!(R.keepDefaultValues&&!ys(w,i)),isSubmitted:R.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:F?[]:R.keepDirtyValues?R.keepDefaultValues&&s?Pc(i,s):n.dirtyFields:R.keepDefaultValues&&w?Pc(i,w):{},touchedFields:R.keepTouched?n.touchedFields:{},errors:R.keepErrors?n.errors:{},isSubmitSuccessful:R.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1})},qu=(w,R)=>Hu(ki(w)?w(s):w,R);return{control:{register:St,unregister:lt,getFieldState:Ie,handleSubmit:pr,setError:_e,_executeSchema:D,_getWatch:ne,_getDirty:j,_updateValid:E,_removeUnmounted:ge,_updateFieldArray:f,_updateDisabledField:fn,_getFieldArray:he,_reset:Hu,_resetDefaultValues:()=>ki(e.defaultValues)&&e.defaultValues().then(w=>{qu(w,e.resetOptions),h.state.next({isLoading:!1})}),_updateFormState:w=>{n={...n,...w}},_disableForm:ns,_subjects:h,_proxyFormState:c,_setErrors:m,get _fields(){return r},get _formValues(){return s},get _state(){return o},set _state(w){o=w},get _defaultValues(){return i},get _names(){return a},set _names(w){a=w},get _formState(){return n},set _formState(w){n=w},get _options(){return e},set _options(w){e={...e,...w}}},trigger:ee,register:St,handleSubmit:pr,watch:Ht,setValue:Me,getValues:Te,reset:qu,resetField:Vn,clearErrors:Xn,unregister:lt,setError:_e,setFocus:(w,R={})=>{const C=Q(r,w),B=C&&C._f;if(B){const F=B.refs?B.refs[0]:B.ref;F.focus&&(F.focus(),R.shouldSelect&&F.select())}},getFieldState:Ie}}function A_(t={}){const e=ze.useRef(),n=ze.useRef(),[r,i]=ze.useState({isDirty:!1,isValidating:!1,isLoading:ki(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1,defaultValues:ki(t.defaultValues)?void 0:t.defaultValues});e.current||(e.current={...i3(t),formState:r});const s=e.current.control;return s._options=t,WU({subject:s._subjects.state,next:o=>{qU(o,s._proxyFormState,s._updateFormState)&&i({...s._formState})}}),ze.useEffect(()=>s._disableForm(t.disabled),[s,t.disabled]),ze.useEffect(()=>{if(s._proxyFormState.isDirty){const o=s._getDirty();o!==r.isDirty&&s._subjects.state.next({isDirty:o})}},[s,r.isDirty]),ze.useEffect(()=>{t.values&&!ys(t.values,n.current)?(s._reset(t.values,s._options.resetOptions),n.current=t.values,i(o=>({...o}))):s._resetDefaultValues()},[t.values,s]),ze.useEffect(()=>{t.errors&&s._setErrors(t.errors)},[t.errors,s]),ze.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),ze.useEffect(()=>{t.shouldUnregister&&s._subjects.values.next({values:s._getWatch()})},[t.shouldUnregister,s]),e.current.formState=HU(r,s),e.current}const s3=H.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0 1rem;
`,o3=H.textarea`
  border: 0.125rem solid transparent;
  padding: 1.5rem;
  border-radius: 1.5rem;
  font-size: 1rem;
  color: ${t=>t.theme.colors.primaryText};
  background-color: ${t=>t.theme.colors.secondary};
  resize: none;
  &::placeholder {
    color: ${t=>t.theme.colors.secondaryText};
  }
  &:focus {
    outline: none;
    border-color: ${t=>t.theme.colors.primary};
  }
`,a3=H.label`
  padding: 0.75rem 0;
  color: ${t=>t.theme.colors.primary};
  text-align: center;
  border-radius: 1.25rem;
  border: 0.125rem solid ${t=>t.theme.colors.primary};
  font-weight: 600;
  cursor: pointer;
  &:hover {
    border: 0.125rem solid ${t=>t.theme.colors.primaryHover};
    color: ${t=>t.theme.colors.primaryHover};
  }
  transition: all 0.1s ease-out;
`,l3=H.input`
  display: none;
`,u3=H.input`
  background-color: ${t=>t.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.75rem 0;
  border-radius: 1.25rem;
  font-size: 1rem;
  cursor: pointer;
  &:hover,
  &:active {
    opacity: 0.9;
  }
  transition: all 0.1s ease-out;
`;function c3(){const[t,e]=x.useState(!1),{register:n,handleSubmit:r,watch:i,reset:s}=A_({mode:"onSubmit",defaultValues:{tweet:"",image:void 0}}),o=i("image");return Pe(s3,{onSubmit:r(async l=>{const u=Qn.currentUser;if(!(!u||t||l.tweet===""||l.tweet.length>180))try{e(!0);const c=await p_(fr(mt,"tweets"),{tweet:l.tweet,createdAt:Date.now(),username:u.displayName||"Anonymous",userId:u.uid});if(l.image&&l.image.length>0){const h=hu(du,`tweets/${u.uid}-${u.displayName}/${c.id}`),d=await ck(h,l.image[0]),p=await cu(d.ref);await _5(c,{photo:p})}s()}catch(c){alert(c)}finally{e(!1)}}),children:[P(o3,{...n("tweet",{required:!0}),rows:5,maxLength:180,placeholder:"무슨 일이 일어나고 있나요?"}),P(a3,{htmlFor:"file",children:o?"Photo added✅":"Add photo"}),P(l3,{...n("image",{required:!1}),type:"file",id:"file",accept:"image/*"}),P(u3,{type:"submit",value:t?"Posting...":"Post Tweet"})]})}const h3=H.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${t=>t.theme.colors.modalBackground};
  display: flex;
  align-items: center;
  justify-content: center;
`,d3=H.div`
  ${t=>t.theme.flex.columnRightCenter};
  position: relative;
  padding: 1rem;
  border-radius: 0.5rem;
`,f3=H.img`
  max-width: 100%;
  max-height: 80vh;
  display: block;
  margin-bottom: 0.75rem;
`,p3=H.button`
  color: ${t=>t.theme.colors.secondaryText};
  background-color: transparent;
  border: none;
  padding: 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    color: ${t=>t.theme.colors.secondaryTextHover};
  }
  transition: all 0.1s ease;
`,m3=({isOpen:t,imageUrl:e,onClose:n})=>t?P(h3,{onClick:n,children:Pe(d3,{onClick:n,children:[P(f3,{onClick:r=>r.stopPropagation(),src:e,alt:"Modal"}),P(p3,{onClick:()=>window.open(e,"_blank"),children:"원본보기"})]})}):null,g3=H.div`
  display: grid;
  width: calc(100% - 2.5rem);
  min-height: 8rem;
  grid-template-columns: auto 8rem;
  padding: 1.25rem;
  background-color: ${t=>t.theme.colors.surface};
  border-radius: 1rem;
  align-items: start;
`,uE=H.div`
  ${t=>t.theme.flex.columnLeftCenter};
  gap: 0.5rem;
`,y3=H.div`
  width: 1.5rem;
  overflow: hidden;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${t=>t.theme.colors.primary};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 1rem;
  }
`,v3=H.div`
  ${t=>t.theme.flex.rowLeftCenter};
  gap: 0.5rem;
`,_3=H.img`
  width: 100%;
`,w3=H.div`
  color: ${t=>t.theme.colors.secondaryText};
  font-size: 0.75rem;
`,E3=H.img`
  width: 8rem;
  height: 8rem;
  border-radius: 1rem;
  cursor: pointer;
`,T3=H.span`
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
`,I3=H.p`
  margin: 0.75rem 0;
  font-size: 1rem;
`,S3=H.button`
  ${t=>t.theme.flex.rowCenter};
  border: 0;
  background-color: transparent;
  color: ${t=>t.theme.colors.delete};
  border-radius: 50%;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
  svg {
    width: 1rem;
  }
  &:hover {
    color: ${t=>t.theme.colors.deleteHover};
    background-color: ${t=>t.theme.colors.secondary};
  }
`;function C_({username:t,photo:e,tweet:n,userId:r,id:i,createdAt:s}){const o=Qn.currentUser,a=Lr(),[l,u]=x.useState(!1),[c,h]=x.useState(""),d=hu(du,`avatars/${r}`),p=()=>{u(!0)},v=()=>{u(!1)},_=async()=>{if(!(!confirm("트윗을 삭제하시겠습니까?")||(o==null?void 0:o.uid)!==r))try{if(await w5($s(mt,"tweets",i)),e){const m=hu(du,`tweets/${o.uid}/${i}`);await xU(m)}}catch(m){console.log(m)}finally{}},E=()=>{a("/profile",{state:{targetUserId:r}})},g=y=>{const m=new Date(y),S=(new Date().getTime()-m.getTime())/1e3,I=60,D=I*60,K=D*24,V=K*7,ge=K*365;return S<I?`${Math.floor(S)}초 전`:S<D?`${Math.floor(S/I)}분 전`:S<K?`${Math.floor(S/D)}시간 전`:S<V?`${Math.floor(S/K)}일 전`:S<ge?new Intl.DateTimeFormat("ko-KR",{month:"short",day:"numeric"}).format(m):new Intl.DateTimeFormat("ko-KR",{year:"numeric",month:"numeric",day:"numeric"}).format(m)},f=async()=>{try{const y=await cu(d);h(y)}catch{h("")}};return x.useEffect(()=>{f()},[r]),Pe(g3,{children:[Pe(uE,{children:[Pe(v3,{children:[P(y3,{onClick:E,children:c?P(_3,{src:c}):P("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:P("path",{fillRule:"evenodd",d:"M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z",clipRule:"evenodd"})})}),P(T3,{onClick:E,children:t}),P(w3,{children:g(s)}),(o==null?void 0:o.uid)===r?P(S3,{onClick:_,children:P("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",className:"size-6",children:P("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"})})}):null]}),P(I3,{children:n})]}),e?Pe(uE,{children:[P(E3,{onClick:()=>p(),src:e}),P(m3,{isOpen:l,imageUrl:e,onClose:v})]}):null]})}const _k=async t=>{const e=fr(mt,"followers",t,"followedBy");return(await ra(e)).docs.map(r=>r.id)},k_=async t=>{const e=fr(mt,"following",t,"follows");return(await ra(e)).docs.map(r=>r.id)},R3=H.div`
  ${t=>t.theme.flex.columnCenterTop};
  width: calc(100% - 2rem);
  gap: 1rem;
  border-top: 0.0625rem solid ${t=>t.theme.colors.border};
  padding: 1rem 1rem;
`,A3=H.div`
  ${t=>t.theme.flex.rowCenter};
  width: 100%;
  padding: 5rem 0;
  font-size: 1.5rem;
  color: ${t=>t.theme.colors.secondaryText};
`;function C3(){const[t,e]=x.useState([]),[n,r]=x.useState([]),[i,s]=x.useState(!0),o=Qn.currentUser;return x.useEffect(()=>{o&&(async()=>{const l=await k_(o.uid);r(l),r(u=>[o.uid,...u]),s(!1)})()},[o]),x.useEffect(()=>{if(n.length>0){let a=null;return(async()=>{const u=rd(fr(mt,"tweets"),FC("createdAt","desc"),id("userId","in",n),UC(25));a=await qC(u,c=>{const h=c.docs.map(d=>{const{tweet:p,createdAt:v,userId:_,username:E,photo:g}=d.data();return{tweet:p,createdAt:v,userId:_,username:E,photo:g,id:d.id}});e(h)})})(),()=>{a&&a()}}},[n]),i?P("div",{children:"Loading..."}):P(R3,{children:t.length===0?P(A3,{children:"타임라인에 트윗이 없습니다."}):t.map(a=>P(C_,{...a},a.id))})}const k3=H.div`
  display: grid;
  gap: 1rem;
  overflow-y: scroll;
  grid-template-rows: 16.125rem auto;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 2.5rem 0rem;
`;function P3(){return Pe(k3,{children:[P(c3,{}),P(C3,{})]})}const Gp=H.button`
  padding: 0.5rem 1.25rem;
  margin: 0.25rem 0;
  border-radius: 1.25rem;
  font-size: 1rem;
  cursor: pointer;
  width: 10rem;
  color: ${t=>t.theme.colors.primaryText};
  &.follow {
    background-color: ${t=>t.theme.colors.primary};
    border: none;
    &:hover {
      background-color: ${t=>t.theme.colors.primaryHover};
    }
  }
  &.following {
    background-color: ${t=>t.theme.colors.surface};
    border: 2px solid ${t=>t.theme.colors.border};
    &:hover {
      background-color: ${t=>t.theme.colors.secondary};
    }
  }
  background-color: ${t=>t.theme.colors.primaryText};
  font-weight: bold;
  &:hover {
    background-color: ${t=>t.theme.colors.secondaryTextHover};
  }
`,x3=async(t,e)=>{const n=KC(mt),r=$s(mt,"following",t,"follows",e),i=$s(mt,"followers",e,"followedBy",t);n.set(r,{}),n.set(i,{}),await n.commit()},N3=async(t,e)=>{const n=KC(mt),r=$s(mt,"following",t,"follows",e),i=$s(mt,"followers",e,"followedBy",t);n.delete(r),n.delete(i),await n.commit()},wk=({targetUserId:t})=>{const[e,n]=x.useState(!1),[r,i]=x.useState(!0),o=IR().currentUser;x.useEffect(()=>{o&&(async()=>{const c=$s(mt,"following",o.uid,"follows",t),h=await v5(c);n(h.exists()),i(!1)})()},[o,t,mt]);const a=async()=>{o&&(i(!0),await x3(o.uid,t),n(!0),i(!1))},l=async()=>{o&&(i(!0),await N3(o.uid,t),n(!1),i(!1))};return r?P(Gp,{disabled:!0,className:"following",children:"Loading..."}):e?P(Gp,{onClick:l,className:"following",children:"팔로잉"}):P(Gp,{onClick:a,className:"follow",children:"팔로우하기"})},D3=H.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2.5rem 0rem;
  gap: 20px;
`,b3=H.label`
  width: 5rem;
  overflow: hidden;
  height: 5rem;
  border-radius: 50%;
  background-color: ${t=>t.theme.colors.primary};
  cursor: ${t=>t.className};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 3rem;
  }
`,O3=H.img`
  width: 100%;
  height: 100%;
`,L3=H.input`
  display: none;
`,M3=H.span`
  color: ${t=>t.theme.colors.primaryText};
  font-size: 1.25rem;
`,V3=H.div`
  ${t=>t.theme.flex.columnCenterTop};
  width: calc(100% - 2rem);
  gap: 1rem;
  border-top: 1px solid ${t=>t.theme.colors.border};
  padding: 1rem 1rem;
  margin-top: 1rem;
`,$3=H.div`
  ${t=>t.theme.flex.rowCenter};
  gap: 1rem;
`,cE=H.a`
  ${t=>t.theme.flex.rowCenter};
  gap: 0.5rem;
  cursor: pointer;
`,hE=H.div`
  color: ${t=>t.theme.colors.primaryText};
  font-weight: bold;
`,dE=H.div`
  color: ${t=>t.theme.colors.secondaryText};
`,F3=H.div`
  ${t=>t.theme.flex.rowCenter};
  width: 100%;
  padding: 5rem 0;
  font-size: 1.5rem;
  color: ${t=>t.theme.colors.secondaryText};
  border-top: 1px solid ${t=>t.theme.colors.border};
`,U3=()=>{const t=Qn.currentUser,n=js().state.targetUserId,[r,i]=x.useState(""),[s,o]=x.useState(""),[a,l]=x.useState([]),[u,c]=x.useState([]),[h,d]=x.useState([]),p=hu(du,`avatars/${n}`),v=Lr(),_=T=>new Promise((S,I)=>{const D=new Image,K=new FileReader;K.onload=V=>{var ge;D.src=(ge=V.target)==null?void 0:ge.result},D.onload=()=>{const V=document.createElement("canvas"),ge=V.getContext("2d");if(!ge)return I("Canvas context is not available");const{width:j,height:ne}=D,he=Math.min(j,ne);V.width=he,V.height=he,ge.drawImage(D,(j-he)/2,(ne-he)/2,he,he,0,0,he,he),V.toBlob(Ee=>{Ee?S(Ee):I(new Error("Canvas is empty"))},T.type)},K.readAsDataURL(T)}),E=async T=>{const{files:S}=T.target;if(t&&S&&S.length===1){const I=S[0],D=await _(I),K=await ck(p,D),V=await cu(K.ref);o(V),await hR(t,{photoURL:V})}},g=async()=>{try{const T=await cu(p);o(T)}catch{o("")}},f=async()=>{if(n===(t==null?void 0:t.uid))i(t==null?void 0:t.displayName);else{const T=rd(fr(mt,"users"),id("userId","==",n));try{const S=await ra(T);i(S.docs[0].data().nickname)}catch{i("")}}};x.useEffect(()=>{let T=null;return(async()=>{const I=rd(fr(mt,"tweets"),id("userId","==",n),FC("createdAt","desc"),UC(25));T=await qC(I,D=>{const K=D.docs.map(V=>{const{tweet:ge,createdAt:j,userId:ne,username:he,photo:Ee}=V.data();return{tweet:ge,createdAt:j,userId:ne,username:he,photo:Ee,id:V.id}});l(K)})})(),()=>{T&&T()}},[n]);const y=async()=>{const T=await _k(n),S=await k_(n);c(T),d(S)},m=T=>{v("/follow",{state:{targetUserId:n,showFollowers:T}})};return x.useEffect(()=>{g(),f(),y()},[n]),Pe(D3,{children:[P(b3,{htmlFor:"avatar",className:(t==null?void 0:t.uid)===n?"pointer":"default",children:s?P(O3,{src:s}):P("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:P("path",{fillRule:"evenodd",d:"M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z",clipRule:"evenodd"})})}),(t==null?void 0:t.uid)===n?P(L3,{onChange:E,id:"avatar",type:"file",accept:"image/*"}):null,P(M3,{children:r||"Anonymous"}),Pe($3,{children:[Pe(cE,{onClick:()=>m(!0),children:[P(hE,{children:u.length})," ",P(dE,{children:"팔로우"})]}),Pe(cE,{onClick:()=>m(!1),children:[Pe(hE,{children:[" ",h.length," "]})," ",P(dE,{children:"팔로잉"})]})]}),(t==null?void 0:t.uid)!==n?P(wk,{targetUserId:n}):null,a.length===0?P(F3,{children:"작성한 트윗이 없습니다."}):P(V3,{children:a.map(T=>P(C_,{...T},T.id))})]})},Ek=H.div`
  ${t=>t.theme.flex.columnCenterTop};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 26rem;
  padding: 4rem 0;
`,Tk=H.form`
  ${t=>t.theme.flex.columnCenter}
  margin-top: 3rem;
  margin-bottom: 0.75rem;
  gap: 0.75rem;
  width: 100%;
`,vl=H.input`
  padding: 0.75rem 1.25rem;
  margin: 0.25rem 0;
  border-radius: 0.75rem;
  border: 0.125rem solid transparent;
  width: calc(100% - 2.5rem);
  font-size: 1rem;
  background-color: ${t=>t.theme.colors.secondary};
  color: ${t=>t.theme.colors.primaryText};
  &::placeholder {
    color: ${t=>t.theme.colors.secondaryText};
  }
  &:focus {
    border: 0.125rem solid ${t=>t.theme.colors.primary};
    outline: none;
  }
`,Ik=H.input`
  padding: 0.75rem 1.25rem;
  margin: 0.25rem 0;
  border-radius: 0.75rem;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  background-color: ${t=>t.theme.colors.primaryText};
  font-weight: bold;
  color: ${t=>t.theme.colors.background};
  &:hover {
    background-color: ${t=>t.theme.colors.secondaryTextHover};
  }
`,Sk=H.span`
  font-size: 0.75rem;
  color: ${t=>t.theme.colors.delete};
`,Rk=H.span`
  width: 100%;
  margin-bottom: 1.5rem;
  a {
    color: ${t=>t.theme.colors.primary};
  }
`,B3=H.div`
  width: 25%;
  margin: 2.5rem 0;
  ${t=>t.theme.flex.rowCenter};
  svg {
    width: 100%;
    fill: ${t=>t.theme.colors.primaryText};
  }
`,Ak=()=>P(B3,{children:P("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 300 300.251",version:"1.1",preserveAspectRatio:"xMidYMid meet",children:P("path",{d:"M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"})})}),j3=H.span`
  ${t=>t.theme.flex.rowCenter};
  background-color: ${t=>t.theme.colors.primaryText};
  font-weight: bold;
  width: 100%;
  height: 2.625rem;
  color: ${t=>t.theme.colors.background};
  margin: 0.25rem 0;
  border-radius: 0.75rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${t=>t.theme.colors.secondaryTextHover};
  }
`,z3=H.img`
  height: 2.5rem;
`;function Ck(){const t=Lr();return Pe(j3,{onClick:async()=>{try{const n=new zr,r=await SM(Qn,n),i=r.user.uid,s=r.user.displayName;r.user.metadata.creationTime===r.user.metadata.lastSignInTime&&await p_(fr(mt,"users"),{userId:i,nickname:s}),t("/")}catch(n){console.error(n)}},children:[P(z3,{src:"/google-logo.svg"}),"Continue with Google"]})}function H3(){const t=Lr(),[e,n]=x.useState(!1),[r,i]=x.useState(""),{register:s,handleSubmit:o}=A_({mode:"onSubmit",defaultValues:{email:"",password:""}});return Pe(Ek,{children:[P(Ak,{}),Pe(Tk,{onSubmit:o(async l=>{if(i(""),!(e||l.email===""||l.password===""))try{n(!0),await eM(Qn,l.email,l.password),t("/")}catch(u){u instanceof Yn&&i("로그인 정보가 올바르지 않습니다.")}finally{n(!1)}}),children:[P(vl,{...s("email",{required:!0}),placeholder:"Email",type:"text",inputMode:"email"}),P(vl,{...s("password",{required:!0}),placeholder:"Password",type:"password"}),Pe(Rk,{children:["계정이 없으신가요? ",P(ll,{to:"/create-account",children:"가입하기 →"})]}),r!==""?P(Sk,{children:r}):null,P(Ik,{type:"submit",value:e?"Loading...":"Log in"})]}),P(Ck,{})]})}function q3(){const t=Lr(),[e,n]=x.useState(!1),[r,i]=x.useState(""),s=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,{register:o,handleSubmit:a}=A_({mode:"onSubmit",defaultValues:{name:"",email:"",password:""}});return Pe(Ek,{children:[P(Ak,{}),Pe(Tk,{onSubmit:a(async u=>{if(i(""),!e){if(u.name===""){i("닉네임을 입력해주세요");return}else if(u.name.length<2||u.name.length>12){i("닉네임은 2글자 이상, 12글자 이하만 가능합니다");return}else if(u.email===""){i("이메일을 입력해주세요");return}else if(s.test(u.email)){if(u.password===""){i("비밀번호를 입력해주세요");return}else if(u.password.length<8||u.name.length>16){i("비밀번호는 8글자 이상, 16글자 이하만 가능합니다");return}}else{i("이메일이 유효하지 않습니다");return}console.log(r);try{n(!0);const c=await ZL(Qn,u.email,u.password);await hR(c.user,{displayName:u.name}),await p_(fr(mt,"users"),{userId:c.user.uid,nickname:u.name}),t("/")}catch(c){c instanceof Yn&&i(c.message)}finally{n(!1)}i("")}}),children:[P(vl,{...o("name"),placeholder:"Name"}),P(vl,{...o("email"),placeholder:"Email",type:"text",inputMode:"email"}),P(vl,{...o("password"),placeholder:"Password",type:"password"}),Pe(Rk,{children:["이미 계정이 있으신가요? ",P(ll,{to:"/login",children:"로그인하기 →"})]}),r!==""?P(Sk,{children:r}):null,P(Ik,{type:"submit",value:e?"Loading...":"Create Account"})]}),P(Ck,{})]})}const W3=H.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,K3=H.span`
  font-size: 1.5rem;
  color: ${t=>t.theme.colors.secondaryText};
`;function G3(){return P(W3,{children:P(K3,{children:"Loading..."})})}function Q3({children:t}){return Qn.currentUser===null?P(cb,{to:"/login"}):t}const Y3=H.div`
  ${t=>t.theme.flex.rowBetweenCenter};
  border: 1px solid ${t=>t.theme.colors.border};
  padding: 1rem;
  border-radius: 1rem;
  width: calc(100% - 2rem);
  height: 3rem;
`,X3=H.div`
  width: 2rem;
  overflow: hidden;
  height: 2rem;
  border-radius: 50%;
  background-color: ${t=>t.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 1rem;
  }
`,J3=H.div`
  ${t=>t.theme.flex.rowCenter};
  gap: 0.5rem;
  cursor: pointer;
`,Z3=H.img`
  width: 100%;
`,e6=H.span`
  font-size: 1.25rem;
`,jg=({targetUserId:t,nickname:e})=>{const n=Qn.currentUser,[r,i]=x.useState(n==null?void 0:n.photoURL),s=hu(du,`avatars/${t}`),o=Lr(),a=async()=>{try{const u=await cu(s);i(u)}catch{i("")}},l=()=>{o("/profile",{state:{targetUserId:t}})};return x.useEffect(()=>{a()},[t]),Pe(Y3,{children:[Pe(J3,{onClick:l,children:[P(X3,{children:r?P(Z3,{src:r}):P("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:P("path",{fillRule:"evenodd",d:"M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z",clipRule:"evenodd"})})}),P(e6,{children:e??"Anonymous"})]}),(n==null?void 0:n.uid)!==t?P(wk,{targetUserId:t}):null]})},t6=H.button`
  width: 3rem;
  background-color: transparent;
  border: 0;
  color: ${t=>t.theme.colors.primaryText};
  font-size: 1rem;
  cursor: pointer;
`,n6=H.div`
  ${t=>t.theme.flex.rowLeftCenter};
  gap: 1rem;
  padding: 1rem;
  width: 100%;
`,r6=H.div`
  font-size: 1.5rem;
`,fE=H.div`
  ${t=>t.theme.flex.columnCenter};
  width: calc(100% -2rem);
  padding: 1rem;
  gap: 1rem;
`,pE=H.div`
  ${t=>t.theme.flex.rowCenter};
  width: 100%;
  padding: 5rem 0;
  font-size: 1.5rem;
  color: ${t=>t.theme.colors.secondaryText};
`;function i6(){const t=js(),[e,n]=x.useState([]),[r,i]=x.useState([]),[s,o]=x.useState(!0),a=t.state.showFollowers,l=t.state.targetUserId,u=Lr(),c=async d=>{let p=[];for(let v of d){const _=rd(fr(mt,"users"),id("userId","==",v));try{const E=await ra(_);p.push({userId:v,nickname:E.docs[0].data().nickname})}catch{}}return p};x.useEffect(()=>{l&&(async()=>{if(a){const p=await _k(l),v=await c(p);n(v)}else{const p=await k_(l),v=await c(p);i(v)}console.log(a),console.log(r),console.log(e),o(!1)})()},[l]);const h=()=>{u(-1)};return s?P("div",{children:"Loading..."}):Pe("div",{children:[Pe(n6,{children:[P(t6,{onClick:h,children:P("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:P("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"})})}),P(r6,{children:a?"팔로우":"팔로잉"})]}),a?e.length===0?P(pE,{children:" 팔로우중인 유저가 없습니다. "}):P(fE,{children:e.map(d=>P(jg,{targetUserId:d.userId,nickname:d.nickname}))}):r.length===0?P(pE,{children:" 팔로잉한 유저가 없습니다. "}):P(fE,{children:r.map(d=>P(jg,{targetUserId:d.userId,nickname:d.nickname}))})]})}const s6=H.div`
  ${t=>t.theme.flex.columnLeftCenter};
  padding: 2.5rem 1rem;
  gap: 1rem;
`,o6=H.div`
  display: grid;
  width: calc(100%);
  grid-template-columns: auto 3rem;
  gap: 0.5rem;
  align-items: center;
`,a6=H.input`
  padding: 0.75rem 1.25rem;
  margin: 0.25rem 0;
  border-radius: 0.75rem;
  border: 0.125rem solid transparent;
  font-size: 1rem;
  background-color: ${t=>t.theme.colors.secondary};
  color: ${t=>t.theme.colors.primaryText};
  &::placeholder {
    color: ${t=>t.theme.colors.secondaryText};
  }
  &:focus {
    border: 0.125rem solid ${t=>t.theme.colors.primary};
    outline: none;
  }
`,l6=H.button`
  ${t=>t.theme.flex.rowCenter};
  background-color: transparent;
  border: 0;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  color: ${t=>t.theme.colors.primaryText};
  &:hover {
    color: ${t=>t.theme.colors.primary};
    background-color: ${t=>t.theme.colors.secondary};
  }
  transition: all 0.2s ease-out;
  cursor: pointer;
`,mE=H.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 1rem;
`,gE=H.div`
  ${t=>t.theme.flex.rowCenter};
  width: 100%;
  padding: 5rem 0;
  font-size: 1.5rem;
  color: ${t=>t.theme.colors.secondaryText};
`,u6=()=>{const[t,e]=x.useState(""),[n,r]=x.useState([]),[i,s]=x.useState([]),[o,a]=x.useState(!1),l=async()=>{if(!t.trim())return;const u=fr(mt,"users"),h=(await ra(u)).docs.map(_=>({id:_.id,..._.data()})).filter(_=>_.nickname.toLowerCase().includes(t.toLowerCase()));r(h);const d=fr(mt,"tweets"),v=(await ra(d)).docs.map(_=>({id:_.id,..._.data()})).filter(_=>_.tweet.toLowerCase().includes(t.toLowerCase()));s(v),a(!0)};return x.useEffect(()=>{a(!1)},[t]),Pe(s6,{children:[Pe(o6,{children:[P(a6,{type:"text",placeholder:"검색",value:t,onChange:u=>e(u.target.value)}),P(l6,{onClick:l,children:P("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:P("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})})})]}),!o&&n.length===0&&i.length===0?null:Pe(HE,{children:[P(mE,{children:"유저"}),n.length===0?P(gE,{children:"일치하는 유저가 없습니다."}):n.map(u=>P(jg,{targetUserId:u.userId,nickname:u.nickname},u.id)),P(mE,{children:"트윗"}),i.length===0?P(gE,{children:"일치하는 트윗이 없습니다."}):i.map(u=>P(C_,{...u}))]})]})},_l={colors:{background:"rgba(18, 18, 18, 1)",modalBackground:"rgba(18, 18, 18, 0.7)",primary:"rgba(33, 150, 243, 1)",primaryHover:"rgba(33, 150, 243, 0.8)",primary40:"rgba(33, 150, 243, 0.4)",scrollTrack:"rgba(33, 33, 33, 0.2)",secondary:"rgba(56, 60, 70, 1)",surface:"rgba(30, 30, 30, 1)",primaryText:"rgba(255, 255, 255, 1)",secondaryText:"rgba(187, 190, 196, 1)",secondaryTextHover:"rgba(230, 230, 230, 1)",border:"rgba(60, 60, 60, 1)",delete:"rgba(255, 67, 67, 1)",deleteHover:"rgba(255, 87, 87, 1)"},font:{content:'"Pretendard-Regular", "Pretendard-Local"'},flex:{rowCenter:`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    `,rowLeftTop:`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  `,rowLeftCenter:`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    `,rowBetweenTop:`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    `,rowBetweenCenter:`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `,rowBetweenBottom:`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
    `,rowRightCenter:`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  `,columnCenter:`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,columnLeftCenter:`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    `,columnRightCenter:`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
    `,columnCenterTop:`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    `}},c6=RO`
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Pretendard-Local";
    src: url("./fonts/PretendardVariable.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }
=
  /* Reset CSS */
  /* http://meyerweb.com/eric/tools/css/reset/
     v2.0 | 20110126
     License: none (public domain)
  */

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    background-color: ${_l.colors.background};
    font-family: ${_l.font.content};
    color:${_l.colors.primaryText};
    overflow: auto;
    margin: 0;
  }
  body::-webkit-scrollbar {
    display: none;
  }
  *{
  font-family: ${t=>t.theme.font.content};
  }
`;var h6={};const d6=H.div`
  ${_l.flex.rowCenter};
`,f6=vb([{path:"/",element:P(Q3,{children:P(FU,{})}),children:[{path:"",element:P(P3,{})},{path:"/profile",element:P(U3,{})},{path:"/follow",element:P(i6,{})},{path:"/search",element:P(u6,{})}]},{path:"/login",element:P(H3,{})},{path:"/create-account",element:P(q3,{})}],{basename:h6.PUBLIC_URL}),p6=()=>{const[t,e]=x.useState(!0),n=async()=>{await Qn.authStateReady(),e(!1)};return x.useEffect(()=>{n()},[]),Pe(TO,{theme:_l,children:[P(c6,{}),P(d6,{children:t?P(G3,{}):P(lb,{router:f6})})]})};Zp.createRoot(document.getElementById("root")).render(P(ze.StrictMode,{children:P(p6,{})}));
