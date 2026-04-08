(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function p0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var md={exports:{}},Po={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y_;function MS(){if(Y_)return Po;Y_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:u}}return Po.Fragment=e,Po.jsx=i,Po.jsxs=i,Po}var Z_;function ES(){return Z_||(Z_=1,md.exports=MS()),md.exports}var Z=ES(),gd={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_;function bS(){if(K_)return rt;K_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,S={};function v(N,$,xe){this.props=N,this.context=$,this.refs=S,this.updater=xe||E}v.prototype.isReactComponent={},v.prototype.setState=function(N,$){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,$,"setState")},v.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function P(){}P.prototype=v.prototype;function U(N,$,xe){this.props=N,this.context=$,this.refs=S,this.updater=xe||E}var D=U.prototype=new P;D.constructor=U,b(D,v.prototype),D.isPureReactComponent=!0;var H=Array.isArray;function z(){}var O={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function w(N,$,xe){var q=xe.ref;return{$$typeof:s,type:N,key:$,ref:q!==void 0?q:null,props:xe}}function C(N,$){return w(N.type,$,N.props)}function F(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function ue(N){var $={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(xe){return $[xe]})}var se=/\/+/g;function ge(N,$){return typeof N=="object"&&N!==null&&N.key!=null?ue(""+N.key):$.toString(36)}function de(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(z,z):(N.status="pending",N.then(function($){N.status==="pending"&&(N.status="fulfilled",N.value=$)},function($){N.status==="pending"&&(N.status="rejected",N.reason=$)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function B(N,$,xe,q,pe){var Te=typeof N;(Te==="undefined"||Te==="boolean")&&(N=null);var Ee=!1;if(N===null)Ee=!0;else switch(Te){case"bigint":case"string":case"number":Ee=!0;break;case"object":switch(N.$$typeof){case s:case e:Ee=!0;break;case g:return Ee=N._init,B(Ee(N._payload),$,xe,q,pe)}}if(Ee)return pe=pe(N),Ee=q===""?"."+ge(N,0):q,H(pe)?(xe="",Ee!=null&&(xe=Ee.replace(se,"$&/")+"/"),B(pe,$,xe,"",function(Ke){return Ke})):pe!=null&&(F(pe)&&(pe=C(pe,xe+(pe.key==null||N&&N.key===pe.key?"":(""+pe.key).replace(se,"$&/")+"/")+Ee)),$.push(pe)),1;Ee=0;var Be=q===""?".":q+":";if(H(N))for(var Ye=0;Ye<N.length;Ye++)q=N[Ye],Te=Be+ge(q,Ye),Ee+=B(q,$,xe,Te,pe);else if(Ye=M(N),typeof Ye=="function")for(N=Ye.call(N),Ye=0;!(q=N.next()).done;)q=q.value,Te=Be+ge(q,Ye++),Ee+=B(q,$,xe,Te,pe);else if(Te==="object"){if(typeof N.then=="function")return B(de(N),$,xe,q,pe);throw $=String(N),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return Ee}function Q(N,$,xe){if(N==null)return N;var q=[],pe=0;return B(N,q,"","",function(Te){return $.call(xe,Te,pe++)}),q}function K(N){if(N._status===-1){var $=N._result;$=$(),$.then(function(xe){(N._status===0||N._status===-1)&&(N._status=1,N._result=xe)},function(xe){(N._status===0||N._status===-1)&&(N._status=2,N._result=xe)}),N._status===-1&&(N._status=0,N._result=$)}if(N._status===1)return N._result.default;throw N._result}var Me=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},me={map:Q,forEach:function(N,$,xe){Q(N,function(){$.apply(this,arguments)},xe)},count:function(N){var $=0;return Q(N,function(){$++}),$},toArray:function(N){return Q(N,function($){return $})||[]},only:function(N){if(!F(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return rt.Activity=_,rt.Children=me,rt.Component=v,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=U,rt.StrictMode=r,rt.Suspense=p,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,rt.__COMPILER_RUNTIME={__proto__:null,c:function(N){return O.H.useMemoCache(N)}},rt.cache=function(N){return function(){return N.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(N,$,xe){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var q=b({},N.props),pe=N.key;if($!=null)for(Te in $.key!==void 0&&(pe=""+$.key),$)!k.call($,Te)||Te==="key"||Te==="__self"||Te==="__source"||Te==="ref"&&$.ref===void 0||(q[Te]=$[Te]);var Te=arguments.length-2;if(Te===1)q.children=xe;else if(1<Te){for(var Ee=Array(Te),Be=0;Be<Te;Be++)Ee[Be]=arguments[Be+2];q.children=Ee}return w(N.type,pe,q)},rt.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},rt.createElement=function(N,$,xe){var q,pe={},Te=null;if($!=null)for(q in $.key!==void 0&&(Te=""+$.key),$)k.call($,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(pe[q]=$[q]);var Ee=arguments.length-2;if(Ee===1)pe.children=xe;else if(1<Ee){for(var Be=Array(Ee),Ye=0;Ye<Ee;Ye++)Be[Ye]=arguments[Ye+2];pe.children=Be}if(N&&N.defaultProps)for(q in Ee=N.defaultProps,Ee)pe[q]===void 0&&(pe[q]=Ee[q]);return w(N,Te,pe)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(N){return{$$typeof:h,render:N}},rt.isValidElement=F,rt.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:K}},rt.memo=function(N,$){return{$$typeof:m,type:N,compare:$===void 0?null:$}},rt.startTransition=function(N){var $=O.T,xe={};O.T=xe;try{var q=N(),pe=O.S;pe!==null&&pe(xe,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(z,Me)}catch(Te){Me(Te)}finally{$!==null&&xe.types!==null&&($.types=xe.types),O.T=$}},rt.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},rt.use=function(N){return O.H.use(N)},rt.useActionState=function(N,$,xe){return O.H.useActionState(N,$,xe)},rt.useCallback=function(N,$){return O.H.useCallback(N,$)},rt.useContext=function(N){return O.H.useContext(N)},rt.useDebugValue=function(){},rt.useDeferredValue=function(N,$){return O.H.useDeferredValue(N,$)},rt.useEffect=function(N,$){return O.H.useEffect(N,$)},rt.useEffectEvent=function(N){return O.H.useEffectEvent(N)},rt.useId=function(){return O.H.useId()},rt.useImperativeHandle=function(N,$,xe){return O.H.useImperativeHandle(N,$,xe)},rt.useInsertionEffect=function(N,$){return O.H.useInsertionEffect(N,$)},rt.useLayoutEffect=function(N,$){return O.H.useLayoutEffect(N,$)},rt.useMemo=function(N,$){return O.H.useMemo(N,$)},rt.useOptimistic=function(N,$){return O.H.useOptimistic(N,$)},rt.useReducer=function(N,$,xe){return O.H.useReducer(N,$,xe)},rt.useRef=function(N){return O.H.useRef(N)},rt.useState=function(N){return O.H.useState(N)},rt.useSyncExternalStore=function(N,$,xe){return O.H.useSyncExternalStore(N,$,xe)},rt.useTransition=function(){return O.H.useTransition()},rt.version="19.2.4",rt}var Q_;function Yh(){return Q_||(Q_=1,gd.exports=bS()),gd.exports}var J=Yh();const Bi=p0(J);var _d={exports:{}},zo={},vd={exports:{}},xd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_;function TS(){return J_||(J_=1,(function(s){function e(B,Q){var K=B.length;B.push(Q);e:for(;0<K;){var Me=K-1>>>1,me=B[Me];if(0<l(me,Q))B[Me]=Q,B[K]=me,K=Me;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Q=B[0],K=B.pop();if(K!==Q){B[0]=K;e:for(var Me=0,me=B.length,N=me>>>1;Me<N;){var $=2*(Me+1)-1,xe=B[$],q=$+1,pe=B[q];if(0>l(xe,K))q<me&&0>l(pe,xe)?(B[Me]=pe,B[q]=K,Me=q):(B[Me]=xe,B[$]=K,Me=$);else if(q<me&&0>l(pe,K))B[Me]=pe,B[q]=K,Me=q;else break e}}return Q}function l(B,Q){var K=B.sortIndex-Q.sortIndex;return K!==0?K:B.id-Q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var p=[],m=[],g=1,_=null,x=3,M=!1,E=!1,b=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function D(B){for(var Q=i(m);Q!==null;){if(Q.callback===null)r(m);else if(Q.startTime<=B)r(m),Q.sortIndex=Q.expirationTime,e(p,Q);else break;Q=i(m)}}function H(B){if(b=!1,D(B),!E)if(i(p)!==null)E=!0,z||(z=!0,ue());else{var Q=i(m);Q!==null&&de(H,Q.startTime-B)}}var z=!1,O=-1,k=5,w=-1;function C(){return S?!0:!(s.unstable_now()-w<k)}function F(){if(S=!1,z){var B=s.unstable_now();w=B;var Q=!0;try{e:{E=!1,b&&(b=!1,P(O),O=-1),M=!0;var K=x;try{t:{for(D(B),_=i(p);_!==null&&!(_.expirationTime>B&&C());){var Me=_.callback;if(typeof Me=="function"){_.callback=null,x=_.priorityLevel;var me=Me(_.expirationTime<=B);if(B=s.unstable_now(),typeof me=="function"){_.callback=me,D(B),Q=!0;break t}_===i(p)&&r(p),D(B)}else r(p);_=i(p)}if(_!==null)Q=!0;else{var N=i(m);N!==null&&de(H,N.startTime-B),Q=!1}}break e}finally{_=null,x=K,M=!1}Q=void 0}}finally{Q?ue():z=!1}}}var ue;if(typeof U=="function")ue=function(){U(F)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,ge=se.port2;se.port1.onmessage=F,ue=function(){ge.postMessage(null)}}else ue=function(){v(F,0)};function de(B,Q){O=v(function(){B(s.unstable_now())},Q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(B){switch(x){case 1:case 2:case 3:var Q=3;break;default:Q=x}var K=x;x=Q;try{return B()}finally{x=K}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var K=x;x=B;try{return Q()}finally{x=K}},s.unstable_scheduleCallback=function(B,Q,K){var Me=s.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?Me+K:Me):K=Me,B){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=K+me,B={id:g++,callback:Q,priorityLevel:B,startTime:K,expirationTime:me,sortIndex:-1},K>Me?(B.sortIndex=K,e(m,B),i(p)===null&&B===i(m)&&(b?(P(O),O=-1):b=!0,de(H,K-Me))):(B.sortIndex=me,e(p,B),E||M||(E=!0,z||(z=!0,ue()))),B},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(B){var Q=x;return function(){var K=x;x=Q;try{return B.apply(this,arguments)}finally{x=K}}}})(xd)),xd}var $_;function AS(){return $_||($_=1,vd.exports=TS()),vd.exports}var yd={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ev;function RS(){if(ev)return Rn;ev=1;var s=Yh();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Rn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return u(p,m,null,g)},Rn.flushSync=function(p){var m=f.T,g=r.p;try{if(f.T=null,r.p=2,p)return p()}finally{f.T=m,r.p=g,r.d.f()}},Rn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Rn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Rn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:M}):g==="script"&&r.d.X(p,{crossOrigin:_,integrity:x,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Rn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Rn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Rn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Rn.requestFormReset=function(p){r.d.r(p)},Rn.unstable_batchedUpdates=function(p,m){return p(m)},Rn.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},Rn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Rn.version="19.2.4",Rn}var tv;function CS(){if(tv)return yd.exports;tv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),yd.exports=RS(),yd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv;function wS(){if(nv)return zo;nv=1;var s=AS(),e=Yh(),i=CS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var d=c.alternate;if(d===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===a)return p(c),t;if(d===o)return p(c),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=d;else{for(var y=!1,T=c.child;T;){if(T===a){y=!0,a=c,o=d;break}if(T===o){y=!0,o=c,a=d;break}T=T.sibling}if(!y){for(T=d.child;T;){if(T===a){y=!0,a=d,o=c;break}if(T===o){y=!0,o=d,a=c;break}T=T.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=F&&t[F]||t["@@iterator"],typeof t=="function"?t:null)}var se=Symbol.for("react.client.reference");function ge(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===se?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case v:return"Profiler";case S:return"StrictMode";case H:return"Suspense";case z:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case U:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:ge(t.type)||"Memo";case k:n=t._payload,t=t._init;try{return ge(t(n))}catch{}}return null}var de=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},Me=[],me=-1;function N(t){return{current:t}}function $(t){0>me||(t.current=Me[me],Me[me]=null,me--)}function xe(t,n){me++,Me[me]=t.current,t.current=n}var q=N(null),pe=N(null),Te=N(null),Ee=N(null);function Be(t,n){switch(xe(Te,n),xe(pe,t),xe(q,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?__(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=__(n),t=v_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}$(q),xe(q,t)}function Ye(){$(q),$(pe),$(Te)}function Ke(t){t.memoizedState!==null&&xe(Ee,t);var n=q.current,a=v_(n,t.type);n!==a&&(xe(pe,t),xe(q,a))}function Vt(t){pe.current===t&&($(q),$(pe)),Ee.current===t&&($(Ee),Uo._currentValue=K)}var Ft,ft;function G(t){if(Ft===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ft=n&&n[1]||"",ft=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ft+t+ft}var Tn=!1;function dt(t,n){if(!t||Tn)return"";Tn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(oe){var ne=oe}Reflect.construct(t,[],ye)}else{try{ye.call()}catch(oe){ne=oe}t.call(ye.prototype)}}else{try{throw Error()}catch(oe){ne=oe}(ye=t())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(oe){if(oe&&ne&&typeof oe.stack=="string")return[oe.stack,ne.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),y=d[0],T=d[1];if(y&&T){var I=y.split(`
`),te=T.split(`
`);for(c=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;c<te.length&&!te[c].includes("DetermineComponentFrameRoot");)c++;if(o===I.length||c===te.length)for(o=I.length-1,c=te.length-1;1<=o&&0<=c&&I[o]!==te[c];)c--;for(;1<=o&&0<=c;o--,c--)if(I[o]!==te[c]){if(o!==1||c!==1)do if(o--,c--,0>c||I[o]!==te[c]){var fe=`
`+I[o].replace(" at new "," at ");return t.displayName&&fe.includes("<anonymous>")&&(fe=fe.replace("<anonymous>",t.displayName)),fe}while(1<=o&&0<=c);break}}}finally{Tn=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?G(a):""}function mt(t,n){switch(t.tag){case 26:case 27:case 5:return G(t.type);case 16:return G("Lazy");case 13:return t.child!==n&&n!==null?G("Suspense Fallback"):G("Suspense");case 19:return G("SuspenseList");case 0:case 15:return dt(t.type,!1);case 11:return dt(t.type.render,!1);case 1:return dt(t.type,!0);case 31:return G("Activity");default:return""}}function Xe(t){try{var n="",a=null;do n+=mt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Dt=Object.prototype.hasOwnProperty,ke=s.unstable_scheduleCallback,L=s.unstable_cancelCallback,A=s.unstable_shouldYield,ie=s.unstable_requestPaint,he=s.unstable_now,be=s.unstable_getCurrentPriorityLevel,ve=s.unstable_ImmediatePriority,Ge=s.unstable_UserBlockingPriority,we=s.unstable_NormalPriority,Qe=s.unstable_LowPriority,$e=s.unstable_IdlePriority,Re=s.log,Ie=s.unstable_setDisableYieldValue,Ze=null,Ve=null;function Pe(t){if(typeof Re=="function"&&Ie(t),Ve&&typeof Ve.setStrictMode=="function")try{Ve.setStrictMode(Ze,t)}catch{}}var tt=Math.clz32?Math.clz32:W,st=Math.log,Nt=Math.LN2;function W(t){return t>>>=0,t===0?32:31-(st(t)/Nt|0)|0}var De=256,ce=262144,Se=4194304;function Ce(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ue(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var c=0,d=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~d,o!==0?c=Ce(o):(y&=T,y!==0?c=Ce(y):a||(a=T&~t,a!==0&&(c=Ce(a))))):(T=o&~d,T!==0?c=Ce(T):y!==0?c=Ce(y):a||(a=o&~t,a!==0&&(c=Ce(a)))),c===0?0:n!==0&&n!==c&&(n&d)===0&&(d=c&-c,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:c}function nt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function qt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cn(){var t=Se;return Se<<=1,(Se&62914560)===0&&(Se=4194304),t}function Et(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function vn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function hi(t,n,a,o,c,d){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,I=t.expirationTimes,te=t.hiddenUpdates;for(a=y&~a;0<a;){var fe=31-tt(a),ye=1<<fe;T[fe]=0,I[fe]=-1;var ne=te[fe];if(ne!==null)for(te[fe]=null,fe=0;fe<ne.length;fe++){var oe=ne[fe];oe!==null&&(oe.lane&=-536870913)}a&=~ye}o!==0&&Vs(t,o,0),d!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=d&~(y&~n))}function Vs(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-tt(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function ks(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-tt(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function wi(t,n){var a=n&-n;return a=(a&42)!==0?1:nr(a),(a&(t.suspendedLanes|n))!==0?0:a}function nr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function zr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Xs(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:G_(t.type))}function ir(t,n){var a=Q.p;try{return Q.p=t,n()}finally{Q.p=a}}var pi=Math.random().toString(36).slice(2),Zt="__reactFiber$"+pi,xn="__reactProps$"+pi,Gi="__reactContainer$"+pi,Ws="__reactEvents$"+pi,lc="__reactListeners$"+pi,uc="__reactHandles$"+pi,al="__reactResources$"+pi,ar="__reactMarker$"+pi;function qs(t){delete t[Zt],delete t[xn],delete t[Ws],delete t[lc],delete t[uc]}function R(t){var n=t[Zt];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Gi]||a[Zt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=T_(t);t!==null;){if(a=t[Zt])return a;t=T_(t)}return n}t=a,a=t.parentNode}return null}function j(t){if(t=t[Zt]||t[Gi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ae(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function re(t){var n=t[al];return n||(n=t[al]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function X(t){t[ar]=!0}var Ae=new Set,Le={};function Oe(t,n){ze(t,n),ze(t+"Capture",n)}function ze(t,n){for(Le[t]=n,t=0;t<n.length;t++)Ae.add(n[t])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),et={},We={};function vt(t){return Dt.call(We,t)?!0:Dt.call(et,t)?!1:it.test(t)?We[t]=!0:(et[t]=!0,!1)}function xt(t,n,a){if(vt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function kt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function bt(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function at(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function je(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function fn(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){a=""+y,d.call(this,y)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Mt(t){if(!t._valueTracker){var n=je(t)?"checked":"value";t._valueTracker=fn(t,n,""+t[n])}}function On(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=je(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function mi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Dn=/[\n"\\]/g;function mn(t){return t.replace(Dn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ot(t,n,a,o,c,d,y,T){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+at(n)):t.value!==""+at(n)&&(t.value=""+at(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?An(t,y,at(n)):a!=null?An(t,y,at(a)):o!=null&&t.removeAttribute("value"),c==null&&d!=null&&(t.defaultChecked=!!d),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+at(T):t.removeAttribute("name")}function Un(t,n,a,o,c,d,y,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Mt(t);return}a=a!=null?""+at(a):"",n=n!=null?""+at(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Mt(t)}function An(t,n,a){n==="number"&&mi(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Kt(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+at(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function yn(t,n,a){if(n!=null&&(n=""+at(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+at(a):""}function Br(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(de(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=at(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Mt(t)}function Pn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var _x=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pp(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||_x.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function mp(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&pp(t,c,o)}else for(var d in n)n.hasOwnProperty(d)&&pp(t,d,n[d])}function cc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rl(t){return xx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Vi(){}var fc=null;function dc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ir=null,Fr=null;function gp(t){var n=j(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ot(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[xn]||null;if(!c)throw Error(r(90));Ot(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&On(o)}break e;case"textarea":yn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Kt(t,!!a.multiple,n,!1)}}}var hc=!1;function _p(t,n,a){if(hc)return t(n,a);hc=!0;try{var o=t(n);return o}finally{if(hc=!1,(Ir!==null||Fr!==null)&&(ql(),Ir&&(n=Ir,t=Fr,Fr=Ir=null,gp(n),t)))for(n=0;n<t.length;n++)gp(t[n])}}function js(t,n){var a=t.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pc=!1;if(ki)try{var Ys={};Object.defineProperty(Ys,"passive",{get:function(){pc=!0}}),window.addEventListener("test",Ys,Ys),window.removeEventListener("test",Ys,Ys)}catch{pc=!1}var Sa=null,mc=null,sl=null;function vp(){if(sl)return sl;var t,n=mc,a=n.length,o,c="value"in Sa?Sa.value:Sa.textContent,d=c.length;for(t=0;t<a&&n[t]===c[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===c[d-o];o++);return sl=c.slice(t,1<o?1-o:void 0)}function ol(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ll(){return!0}function xp(){return!1}function zn(t){function n(a,o,c,d,y){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ll:xp,this.isPropagationStopped=xp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),n}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ul=zn(rr),Zs=_({},rr,{view:0,detail:0}),yx=zn(Zs),gc,_c,Ks,cl=_({},Zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ks&&(Ks&&t.type==="mousemove"?(gc=t.screenX-Ks.screenX,_c=t.screenY-Ks.screenY):_c=gc=0,Ks=t),gc)},movementY:function(t){return"movementY"in t?t.movementY:_c}}),yp=zn(cl),Sx=_({},cl,{dataTransfer:0}),Mx=zn(Sx),Ex=_({},Zs,{relatedTarget:0}),vc=zn(Ex),bx=_({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),Tx=zn(bx),Ax=_({},rr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Rx=zn(Ax),Cx=_({},rr,{data:0}),Sp=zn(Cx),wx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Ux[t])?!!n[t]:!1}function xc(){return Lx}var Nx=_({},Zs,{key:function(t){if(t.key){var n=wx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xc,charCode:function(t){return t.type==="keypress"?ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ox=zn(Nx),Px=_({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mp=zn(Px),zx=_({},Zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xc}),Bx=zn(zx),Ix=_({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fx=zn(Ix),Hx=_({},cl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Gx=zn(Hx),Vx=_({},rr,{newState:0,oldState:0}),kx=zn(Vx),Xx=[9,13,27,32],yc=ki&&"CompositionEvent"in window,Qs=null;ki&&"documentMode"in document&&(Qs=document.documentMode);var Wx=ki&&"TextEvent"in window&&!Qs,Ep=ki&&(!yc||Qs&&8<Qs&&11>=Qs),bp=" ",Tp=!1;function Ap(t,n){switch(t){case"keyup":return Xx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function qx(t,n){switch(t){case"compositionend":return Rp(n);case"keypress":return n.which!==32?null:(Tp=!0,bp);case"textInput":return t=n.data,t===bp&&Tp?null:t;default:return null}}function jx(t,n){if(Hr)return t==="compositionend"||!yc&&Ap(t,n)?(t=vp(),sl=mc=Sa=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ep&&n.locale!=="ko"?null:n.data;default:return null}}var Yx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Yx[t.type]:n==="textarea"}function wp(t,n,a,o){Ir?Fr?Fr.push(o):Fr=[o]:Ir=o,n=$l(n,"onChange"),0<n.length&&(a=new ul("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Js=null,$s=null;function Zx(t){f_(t,0)}function fl(t){var n=ae(t);if(On(n))return t}function Dp(t,n){if(t==="change")return n}var Up=!1;if(ki){var Sc;if(ki){var Mc="oninput"in document;if(!Mc){var Lp=document.createElement("div");Lp.setAttribute("oninput","return;"),Mc=typeof Lp.oninput=="function"}Sc=Mc}else Sc=!1;Up=Sc&&(!document.documentMode||9<document.documentMode)}function Np(){Js&&(Js.detachEvent("onpropertychange",Op),$s=Js=null)}function Op(t){if(t.propertyName==="value"&&fl($s)){var n=[];wp(n,$s,t,dc(t)),_p(Zx,n)}}function Kx(t,n,a){t==="focusin"?(Np(),Js=n,$s=a,Js.attachEvent("onpropertychange",Op)):t==="focusout"&&Np()}function Qx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fl($s)}function Jx(t,n){if(t==="click")return fl(n)}function $x(t,n){if(t==="input"||t==="change")return fl(n)}function ey(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var qn=typeof Object.is=="function"?Object.is:ey;function eo(t,n){if(qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Dt.call(n,c)||!qn(t[c],n[c]))return!1}return!0}function Pp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zp(t,n){var a=Pp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Pp(a)}}function Bp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Bp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Ip(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=mi(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=mi(t.document)}return n}function Ec(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ty=ki&&"documentMode"in document&&11>=document.documentMode,Gr=null,bc=null,to=null,Tc=!1;function Fp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Tc||Gr==null||Gr!==mi(o)||(o=Gr,"selectionStart"in o&&Ec(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),to&&eo(to,o)||(to=o,o=$l(bc,"onSelect"),0<o.length&&(n=new ul("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Gr)))}function sr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Vr={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionrun:sr("Transition","TransitionRun"),transitionstart:sr("Transition","TransitionStart"),transitioncancel:sr("Transition","TransitionCancel"),transitionend:sr("Transition","TransitionEnd")},Ac={},Hp={};ki&&(Hp=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function or(t){if(Ac[t])return Ac[t];if(!Vr[t])return t;var n=Vr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Hp)return Ac[t]=n[a];return t}var Gp=or("animationend"),Vp=or("animationiteration"),kp=or("animationstart"),ny=or("transitionrun"),iy=or("transitionstart"),ay=or("transitioncancel"),Xp=or("transitionend"),Wp=new Map,Rc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Rc.push("scrollEnd");function gi(t,n){Wp.set(t,n),Oe(n,[t])}var dl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ni=[],kr=0,Cc=0;function hl(){for(var t=kr,n=Cc=kr=0;n<t;){var a=ni[n];ni[n++]=null;var o=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var d=ni[n];if(ni[n++]=null,o!==null&&c!==null){var y=o.pending;y===null?c.next=c:(c.next=y.next,y.next=c),o.pending=c}d!==0&&qp(a,c,d)}}function pl(t,n,a,o){ni[kr++]=t,ni[kr++]=n,ni[kr++]=a,ni[kr++]=o,Cc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function wc(t,n,a,o){return pl(t,n,a,o),ml(t)}function lr(t,n){return pl(t,null,null,n),ml(t)}function qp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(c=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,c&&n!==null&&(c=31-tt(a),t=d.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=a|536870912),d):null}function ml(t){if(50<bo)throw bo=0,Ff=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Xr={};function ry(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,o){return new ry(t,n,a,o)}function Dc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xi(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function jp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function gl(t,n,a,o,c,d){var y=0;if(o=t,typeof t=="function")Dc(t)&&(y=1);else if(typeof t=="string")y=cS(t,a,q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case w:return t=jn(31,a,n,c),t.elementType=w,t.lanes=d,t;case b:return ur(a.children,c,d,n);case S:y=8,c|=24;break;case v:return t=jn(12,a,n,c|2),t.elementType=v,t.lanes=d,t;case H:return t=jn(13,a,n,c),t.elementType=H,t.lanes=d,t;case z:return t=jn(19,a,n,c),t.elementType=z,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:y=10;break e;case P:y=9;break e;case D:y=11;break e;case O:y=14;break e;case k:y=16,o=null;break e}y=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=jn(y,a,n,c),n.elementType=t,n.type=o,n.lanes=d,n}function ur(t,n,a,o){return t=jn(7,t,o,n),t.lanes=a,t}function Uc(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function Yp(t){var n=jn(18,null,null,0);return n.stateNode=t,n}function Lc(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Zp=new WeakMap;function ii(t,n){if(typeof t=="object"&&t!==null){var a=Zp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Xe(n)},Zp.set(t,n),n)}return{value:t,source:n,stack:Xe(n)}}var Wr=[],qr=0,_l=null,no=0,ai=[],ri=0,Ma=null,Di=1,Ui="";function Wi(t,n){Wr[qr++]=no,Wr[qr++]=_l,_l=t,no=n}function Kp(t,n,a){ai[ri++]=Di,ai[ri++]=Ui,ai[ri++]=Ma,Ma=t;var o=Di;t=Ui;var c=32-tt(o)-1;o&=~(1<<c),a+=1;var d=32-tt(n)+c;if(30<d){var y=c-c%5;d=(o&(1<<y)-1).toString(32),o>>=y,c-=y,Di=1<<32-tt(n)+c|a<<c|o,Ui=d+t}else Di=1<<d|a<<c|o,Ui=t}function Nc(t){t.return!==null&&(Wi(t,1),Kp(t,1,0))}function Oc(t){for(;t===_l;)_l=Wr[--qr],Wr[qr]=null,no=Wr[--qr],Wr[qr]=null;for(;t===Ma;)Ma=ai[--ri],ai[ri]=null,Ui=ai[--ri],ai[ri]=null,Di=ai[--ri],ai[ri]=null}function Qp(t,n){ai[ri++]=Di,ai[ri++]=Ui,ai[ri++]=Ma,Di=n.id,Ui=n.overflow,Ma=t}var Sn=null,Xt=null,yt=!1,Ea=null,si=!1,Pc=Error(r(519));function ba(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw io(ii(n,t)),Pc}function Jp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[Zt]=t,n[xn]=o,a){case"dialog":pt("cancel",n),pt("close",n);break;case"iframe":case"object":case"embed":pt("load",n);break;case"video":case"audio":for(a=0;a<Ao.length;a++)pt(Ao[a],n);break;case"source":pt("error",n);break;case"img":case"image":case"link":pt("error",n),pt("load",n);break;case"details":pt("toggle",n);break;case"input":pt("invalid",n),Un(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":pt("invalid",n);break;case"textarea":pt("invalid",n),Br(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||m_(n.textContent,a)?(o.popover!=null&&(pt("beforetoggle",n),pt("toggle",n)),o.onScroll!=null&&pt("scroll",n),o.onScrollEnd!=null&&pt("scrollend",n),o.onClick!=null&&(n.onclick=Vi),n=!0):n=!1,n||ba(t,!0)}function $p(t){for(Sn=t.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:si=!1;return;case 27:case 3:si=!0;return;default:Sn=Sn.return}}function jr(t){if(t!==Sn)return!1;if(!yt)return $p(t),yt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ed(t.type,t.memoizedProps)),a=!a),a&&Xt&&ba(t),$p(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Xt=b_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Xt=b_(t)}else n===27?(n=Xt,Ia(t.type)?(t=rd,rd=null,Xt=t):Xt=n):Xt=Sn?li(t.stateNode.nextSibling):null;return!0}function cr(){Xt=Sn=null,yt=!1}function zc(){var t=Ea;return t!==null&&(Hn===null?Hn=t:Hn.push.apply(Hn,t),Ea=null),t}function io(t){Ea===null?Ea=[t]:Ea.push(t)}var Bc=N(null),fr=null,qi=null;function Ta(t,n,a){xe(Bc,n._currentValue),n._currentValue=a}function ji(t){t._currentValue=Bc.current,$(Bc)}function Ic(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Fc(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var d=c.dependencies;if(d!==null){var y=c.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=c;for(var I=0;I<n.length;I++)if(T.context===n[I]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Ic(d.return,a,t),o||(y=null);break e}d=T.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(r(341));y.lanes|=a,d=y.alternate,d!==null&&(d.lanes|=a),Ic(y,a,t),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===t){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function Yr(t,n,a,o){t=null;for(var c=n,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var T=c.type;qn(c.pendingProps.value,y.value)||(t!==null?t.push(T):t=[T])}}else if(c===Ee.current){if(y=c.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Uo):t=[Uo])}c=c.return}t!==null&&Fc(n,t,a,o),n.flags|=262144}function vl(t){for(t=t.firstContext;t!==null;){if(!qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function dr(t){fr=t,qi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mn(t){return em(fr,t)}function xl(t,n){return fr===null&&dr(t),em(t,n)}function em(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},qi===null){if(t===null)throw Error(r(308));qi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else qi=qi.next=n;return a}var sy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},oy=s.unstable_scheduleCallback,ly=s.unstable_NormalPriority,rn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hc(){return{controller:new sy,data:new Map,refCount:0}}function ao(t){t.refCount--,t.refCount===0&&oy(ly,function(){t.controller.abort()})}var ro=null,Gc=0,Zr=0,Kr=null;function uy(t,n){if(ro===null){var a=ro=[];Gc=0,Zr=Wf(),Kr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Gc++,n.then(tm,tm),n}function tm(){if(--Gc===0&&ro!==null){Kr!==null&&(Kr.status="fulfilled");var t=ro;ro=null,Zr=0,Kr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function cy(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var nm=B.S;B.S=function(t,n){Fg=he(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&uy(t,n),nm!==null&&nm(t,n)};var hr=N(null);function Vc(){var t=hr.current;return t!==null?t:Ht.pooledCache}function yl(t,n){n===null?xe(hr,hr.current):xe(hr,n.pool)}function im(){var t=Vc();return t===null?null:{parent:rn._currentValue,pool:t}}var Qr=Error(r(460)),kc=Error(r(474)),Sl=Error(r(542)),Ml={then:function(){}};function am(t){return t=t.status,t==="fulfilled"||t==="rejected"}function rm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Vi,Vi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,om(t),t;default:if(typeof n.status=="string")n.then(Vi,Vi);else{if(t=Ht,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,om(t),t}throw mr=n,Qr}}function pr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(mr=a,Qr):a}}var mr=null;function sm(){if(mr===null)throw Error(r(459));var t=mr;return mr=null,t}function om(t){if(t===Qr||t===Sl)throw Error(r(483))}var Jr=null,so=0;function El(t){var n=so;return so+=1,Jr===null&&(Jr=[]),rm(Jr,t,n)}function oo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function bl(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function lm(t){function n(Y,V){if(t){var ee=Y.deletions;ee===null?(Y.deletions=[V],Y.flags|=16):ee.push(V)}}function a(Y,V){if(!t)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function o(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function c(Y,V){return Y=Xi(Y,V),Y.index=0,Y.sibling=null,Y}function d(Y,V,ee){return Y.index=ee,t?(ee=Y.alternate,ee!==null?(ee=ee.index,ee<V?(Y.flags|=67108866,V):ee):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function y(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,V,ee,_e){return V===null||V.tag!==6?(V=Uc(ee,Y.mode,_e),V.return=Y,V):(V=c(V,ee),V.return=Y,V)}function I(Y,V,ee,_e){var qe=ee.type;return qe===b?fe(Y,V,ee.props.children,_e,ee.key):V!==null&&(V.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===k&&pr(qe)===V.type)?(V=c(V,ee.props),oo(V,ee),V.return=Y,V):(V=gl(ee.type,ee.key,ee.props,null,Y.mode,_e),oo(V,ee),V.return=Y,V)}function te(Y,V,ee,_e){return V===null||V.tag!==4||V.stateNode.containerInfo!==ee.containerInfo||V.stateNode.implementation!==ee.implementation?(V=Lc(ee,Y.mode,_e),V.return=Y,V):(V=c(V,ee.children||[]),V.return=Y,V)}function fe(Y,V,ee,_e,qe){return V===null||V.tag!==7?(V=ur(ee,Y.mode,_e,qe),V.return=Y,V):(V=c(V,ee),V.return=Y,V)}function ye(Y,V,ee){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Uc(""+V,Y.mode,ee),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case M:return ee=gl(V.type,V.key,V.props,null,Y.mode,ee),oo(ee,V),ee.return=Y,ee;case E:return V=Lc(V,Y.mode,ee),V.return=Y,V;case k:return V=pr(V),ye(Y,V,ee)}if(de(V)||ue(V))return V=ur(V,Y.mode,ee,null),V.return=Y,V;if(typeof V.then=="function")return ye(Y,El(V),ee);if(V.$$typeof===U)return ye(Y,xl(Y,V),ee);bl(Y,V)}return null}function ne(Y,V,ee,_e){var qe=V!==null?V.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return qe!==null?null:T(Y,V,""+ee,_e);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case M:return ee.key===qe?I(Y,V,ee,_e):null;case E:return ee.key===qe?te(Y,V,ee,_e):null;case k:return ee=pr(ee),ne(Y,V,ee,_e)}if(de(ee)||ue(ee))return qe!==null?null:fe(Y,V,ee,_e,null);if(typeof ee.then=="function")return ne(Y,V,El(ee),_e);if(ee.$$typeof===U)return ne(Y,V,xl(Y,ee),_e);bl(Y,ee)}return null}function oe(Y,V,ee,_e,qe){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return Y=Y.get(ee)||null,T(V,Y,""+_e,qe);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case M:return Y=Y.get(_e.key===null?ee:_e.key)||null,I(V,Y,_e,qe);case E:return Y=Y.get(_e.key===null?ee:_e.key)||null,te(V,Y,_e,qe);case k:return _e=pr(_e),oe(Y,V,ee,_e,qe)}if(de(_e)||ue(_e))return Y=Y.get(ee)||null,fe(V,Y,_e,qe,null);if(typeof _e.then=="function")return oe(Y,V,ee,El(_e),qe);if(_e.$$typeof===U)return oe(Y,V,ee,xl(V,_e),qe);bl(V,_e)}return null}function Fe(Y,V,ee,_e){for(var qe=null,Tt=null,He=V,lt=V=0,_t=null;He!==null&&lt<ee.length;lt++){He.index>lt?(_t=He,He=null):_t=He.sibling;var At=ne(Y,He,ee[lt],_e);if(At===null){He===null&&(He=_t);break}t&&He&&At.alternate===null&&n(Y,He),V=d(At,V,lt),Tt===null?qe=At:Tt.sibling=At,Tt=At,He=_t}if(lt===ee.length)return a(Y,He),yt&&Wi(Y,lt),qe;if(He===null){for(;lt<ee.length;lt++)He=ye(Y,ee[lt],_e),He!==null&&(V=d(He,V,lt),Tt===null?qe=He:Tt.sibling=He,Tt=He);return yt&&Wi(Y,lt),qe}for(He=o(He);lt<ee.length;lt++)_t=oe(He,Y,lt,ee[lt],_e),_t!==null&&(t&&_t.alternate!==null&&He.delete(_t.key===null?lt:_t.key),V=d(_t,V,lt),Tt===null?qe=_t:Tt.sibling=_t,Tt=_t);return t&&He.forEach(function(ka){return n(Y,ka)}),yt&&Wi(Y,lt),qe}function Je(Y,V,ee,_e){if(ee==null)throw Error(r(151));for(var qe=null,Tt=null,He=V,lt=V=0,_t=null,At=ee.next();He!==null&&!At.done;lt++,At=ee.next()){He.index>lt?(_t=He,He=null):_t=He.sibling;var ka=ne(Y,He,At.value,_e);if(ka===null){He===null&&(He=_t);break}t&&He&&ka.alternate===null&&n(Y,He),V=d(ka,V,lt),Tt===null?qe=ka:Tt.sibling=ka,Tt=ka,He=_t}if(At.done)return a(Y,He),yt&&Wi(Y,lt),qe;if(He===null){for(;!At.done;lt++,At=ee.next())At=ye(Y,At.value,_e),At!==null&&(V=d(At,V,lt),Tt===null?qe=At:Tt.sibling=At,Tt=At);return yt&&Wi(Y,lt),qe}for(He=o(He);!At.done;lt++,At=ee.next())At=oe(He,Y,lt,At.value,_e),At!==null&&(t&&At.alternate!==null&&He.delete(At.key===null?lt:At.key),V=d(At,V,lt),Tt===null?qe=At:Tt.sibling=At,Tt=At);return t&&He.forEach(function(SS){return n(Y,SS)}),yt&&Wi(Y,lt),qe}function Bt(Y,V,ee,_e){if(typeof ee=="object"&&ee!==null&&ee.type===b&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case M:e:{for(var qe=ee.key;V!==null;){if(V.key===qe){if(qe=ee.type,qe===b){if(V.tag===7){a(Y,V.sibling),_e=c(V,ee.props.children),_e.return=Y,Y=_e;break e}}else if(V.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===k&&pr(qe)===V.type){a(Y,V.sibling),_e=c(V,ee.props),oo(_e,ee),_e.return=Y,Y=_e;break e}a(Y,V);break}else n(Y,V);V=V.sibling}ee.type===b?(_e=ur(ee.props.children,Y.mode,_e,ee.key),_e.return=Y,Y=_e):(_e=gl(ee.type,ee.key,ee.props,null,Y.mode,_e),oo(_e,ee),_e.return=Y,Y=_e)}return y(Y);case E:e:{for(qe=ee.key;V!==null;){if(V.key===qe)if(V.tag===4&&V.stateNode.containerInfo===ee.containerInfo&&V.stateNode.implementation===ee.implementation){a(Y,V.sibling),_e=c(V,ee.children||[]),_e.return=Y,Y=_e;break e}else{a(Y,V);break}else n(Y,V);V=V.sibling}_e=Lc(ee,Y.mode,_e),_e.return=Y,Y=_e}return y(Y);case k:return ee=pr(ee),Bt(Y,V,ee,_e)}if(de(ee))return Fe(Y,V,ee,_e);if(ue(ee)){if(qe=ue(ee),typeof qe!="function")throw Error(r(150));return ee=qe.call(ee),Je(Y,V,ee,_e)}if(typeof ee.then=="function")return Bt(Y,V,El(ee),_e);if(ee.$$typeof===U)return Bt(Y,V,xl(Y,ee),_e);bl(Y,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,V!==null&&V.tag===6?(a(Y,V.sibling),_e=c(V,ee),_e.return=Y,Y=_e):(a(Y,V),_e=Uc(ee,Y.mode,_e),_e.return=Y,Y=_e),y(Y)):a(Y,V)}return function(Y,V,ee,_e){try{so=0;var qe=Bt(Y,V,ee,_e);return Jr=null,qe}catch(He){if(He===Qr||He===Sl)throw He;var Tt=jn(29,He,null,Y.mode);return Tt.lanes=_e,Tt.return=Y,Tt}finally{}}}var gr=lm(!0),um=lm(!1),Aa=!1;function Xc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ra(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ca(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ct&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=ml(t),qp(t,null,a),n}return pl(t,o,n,a),ml(t)}function lo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ks(t,a)}}function qc(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?c=d=y:d=d.next=y,a=a.next}while(a!==null);d===null?c=d=n:d=d.next=n}else c=d=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var jc=!1;function uo(){if(jc){var t=Kr;if(t!==null)throw t}}function co(t,n,a,o){jc=!1;var c=t.updateQueue;Aa=!1;var d=c.firstBaseUpdate,y=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var I=T,te=I.next;I.next=null,y===null?d=te:y.next=te,y=I;var fe=t.alternate;fe!==null&&(fe=fe.updateQueue,T=fe.lastBaseUpdate,T!==y&&(T===null?fe.firstBaseUpdate=te:T.next=te,fe.lastBaseUpdate=I))}if(d!==null){var ye=c.baseState;y=0,fe=te=I=null,T=d;do{var ne=T.lane&-536870913,oe=ne!==T.lane;if(oe?(gt&ne)===ne:(o&ne)===ne){ne!==0&&ne===Zr&&(jc=!0),fe!==null&&(fe=fe.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Fe=t,Je=T;ne=n;var Bt=a;switch(Je.tag){case 1:if(Fe=Je.payload,typeof Fe=="function"){ye=Fe.call(Bt,ye,ne);break e}ye=Fe;break e;case 3:Fe.flags=Fe.flags&-65537|128;case 0:if(Fe=Je.payload,ne=typeof Fe=="function"?Fe.call(Bt,ye,ne):Fe,ne==null)break e;ye=_({},ye,ne);break e;case 2:Aa=!0}}ne=T.callback,ne!==null&&(t.flags|=64,oe&&(t.flags|=8192),oe=c.callbacks,oe===null?c.callbacks=[ne]:oe.push(ne))}else oe={lane:ne,tag:T.tag,payload:T.payload,callback:T.callback,next:null},fe===null?(te=fe=oe,I=ye):fe=fe.next=oe,y|=ne;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;oe=T,T=oe.next,oe.next=null,c.lastBaseUpdate=oe,c.shared.pending=null}}while(!0);fe===null&&(I=ye),c.baseState=I,c.firstBaseUpdate=te,c.lastBaseUpdate=fe,d===null&&(c.shared.lanes=0),Na|=y,t.lanes=y,t.memoizedState=ye}}function cm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function fm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)cm(a[t],n)}var $r=N(null),Tl=N(0);function dm(t,n){t=na,xe(Tl,t),xe($r,n),na=t|n.baseLanes}function Yc(){xe(Tl,na),xe($r,$r.current)}function Zc(){na=Tl.current,$($r),$(Tl)}var Yn=N(null),oi=null;function wa(t){var n=t.alternate;xe($t,$t.current&1),xe(Yn,t),oi===null&&(n===null||$r.current!==null||n.memoizedState!==null)&&(oi=t)}function Kc(t){xe($t,$t.current),xe(Yn,t),oi===null&&(oi=t)}function hm(t){t.tag===22?(xe($t,$t.current),xe(Yn,t),oi===null&&(oi=t)):Da()}function Da(){xe($t,$t.current),xe(Yn,Yn.current)}function Zn(t){$(Yn),oi===t&&(oi=null),$($t)}var $t=N(0);function Al(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||id(a)||ad(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Yi=0,ot=null,Pt=null,sn=null,Rl=!1,es=!1,_r=!1,Cl=0,fo=0,ts=null,fy=0;function Qt(){throw Error(r(321))}function Qc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!qn(t[a],n[a]))return!1;return!0}function Jc(t,n,a,o,c,d){return Yi=d,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?Km:pf,_r=!1,d=a(o,c),_r=!1,es&&(d=mm(n,a,o,c)),pm(t),d}function pm(t){B.H=mo;var n=Pt!==null&&Pt.next!==null;if(Yi=0,sn=Pt=ot=null,Rl=!1,fo=0,ts=null,n)throw Error(r(300));t===null||on||(t=t.dependencies,t!==null&&vl(t)&&(on=!0))}function mm(t,n,a,o){ot=t;var c=0;do{if(es&&(ts=null),fo=0,es=!1,25<=c)throw Error(r(301));if(c+=1,sn=Pt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}B.H=Qm,d=n(a,o)}while(es);return d}function dy(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?ho(n):n,t=t.useState()[0],(Pt!==null?Pt.memoizedState:null)!==t&&(ot.flags|=1024),n}function $c(){var t=Cl!==0;return Cl=0,t}function ef(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function tf(t){if(Rl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Rl=!1}Yi=0,sn=Pt=ot=null,es=!1,fo=Cl=0,ts=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?ot.memoizedState=sn=t:sn=sn.next=t,sn}function en(){if(Pt===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var n=sn===null?ot.memoizedState:sn.next;if(n!==null)sn=n,Pt=t;else{if(t===null)throw ot.alternate===null?Error(r(467)):Error(r(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},sn===null?ot.memoizedState=sn=t:sn=sn.next=t}return sn}function wl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ho(t){var n=fo;return fo+=1,ts===null&&(ts=[]),t=rm(ts,t,n),n=ot,(sn===null?n.memoizedState:sn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Km:pf),t}function Dl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ho(t);if(t.$$typeof===U)return Mn(t)}throw Error(r(438,String(t)))}function nf(t){var n=null,a=ot.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ot.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=wl(),ot.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=C;return n.index++,a}function Zi(t,n){return typeof n=="function"?n(t):n}function Ul(t){var n=en();return af(n,Pt,t)}function af(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=t.baseQueue,d=o.pending;if(d!==null){if(c!==null){var y=c.next;c.next=d.next,d.next=y}n.baseQueue=c=d,o.pending=null}if(d=t.baseState,c===null)t.memoizedState=d;else{n=c.next;var T=y=null,I=null,te=n,fe=!1;do{var ye=te.lane&-536870913;if(ye!==te.lane?(gt&ye)===ye:(Yi&ye)===ye){var ne=te.revertLane;if(ne===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),ye===Zr&&(fe=!0);else if((Yi&ne)===ne){te=te.next,ne===Zr&&(fe=!0);continue}else ye={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},I===null?(T=I=ye,y=d):I=I.next=ye,ot.lanes|=ne,Na|=ne;ye=te.action,_r&&a(d,ye),d=te.hasEagerState?te.eagerState:a(d,ye)}else ne={lane:ye,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},I===null?(T=I=ne,y=d):I=I.next=ne,ot.lanes|=ye,Na|=ye;te=te.next}while(te!==null&&te!==n);if(I===null?y=d:I.next=T,!qn(d,t.memoizedState)&&(on=!0,fe&&(a=Kr,a!==null)))throw a;t.memoizedState=d,t.baseState=y,t.baseQueue=I,o.lastRenderedState=d}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function rf(t){var n=en(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,d=n.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do d=t(d,y.action),y=y.next;while(y!==c);qn(d,n.memoizedState)||(on=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function gm(t,n,a){var o=ot,c=en(),d=yt;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!qn((Pt||c).memoizedState,a);if(y&&(c.memoizedState=a,on=!0),c=c.queue,lf(xm.bind(null,o,c,t),[t]),c.getSnapshot!==n||y||sn!==null&&sn.memoizedState.tag&1){if(o.flags|=2048,ns(9,{destroy:void 0},vm.bind(null,o,c,a,n),null),Ht===null)throw Error(r(349));d||(Yi&127)!==0||_m(o,n,a)}return a}function _m(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ot.updateQueue,n===null?(n=wl(),ot.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function vm(t,n,a,o){n.value=a,n.getSnapshot=o,ym(n)&&Sm(t)}function xm(t,n,a){return a(function(){ym(n)&&Sm(t)})}function ym(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!qn(t,a)}catch{return!0}}function Sm(t){var n=lr(t,2);n!==null&&Gn(n,t,2)}function sf(t){var n=Ln();if(typeof t=="function"){var a=t;if(t=a(),_r){Pe(!0);try{a()}finally{Pe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:t},n}function Mm(t,n,a,o){return t.baseState=a,af(t,Pt,typeof o=="function"?o:Zi)}function hy(t,n,a,o,c){if(Ol(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};B.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Em(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Em(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var d=B.T,y={};B.T=y;try{var T=a(c,o),I=B.S;I!==null&&I(y,T),bm(t,n,T)}catch(te){of(t,n,te)}finally{d!==null&&y.types!==null&&(d.types=y.types),B.T=d}}else try{d=a(c,o),bm(t,n,d)}catch(te){of(t,n,te)}}function bm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Tm(t,n,o)},function(o){return of(t,n,o)}):Tm(t,n,a)}function Tm(t,n,a){n.status="fulfilled",n.value=a,Am(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Em(t,a)))}function of(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Am(n),n=n.next;while(n!==o)}t.action=null}function Am(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Rm(t,n){return n}function Cm(t,n){if(yt){var a=Ht.formState;if(a!==null){e:{var o=ot;if(yt){if(Xt){t:{for(var c=Xt,d=si;c.nodeType!==8;){if(!d){c=null;break t}if(c=li(c.nextSibling),c===null){c=null;break t}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){Xt=li(c.nextSibling),o=c.data==="F!";break e}}ba(o)}o=!1}o&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rm,lastRenderedState:n},a.queue=o,a=jm.bind(null,ot,o),o.dispatch=a,o=sf(!1),d=hf.bind(null,ot,!1,o.queue),o=Ln(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=hy.bind(null,ot,c,d,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function wm(t){var n=en();return Dm(n,Pt,t)}function Dm(t,n,a){if(n=af(t,n,Rm)[0],t=Ul(Zi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ho(n)}catch(y){throw y===Qr?Sl:y}else o=n;n=en();var c=n.queue,d=c.dispatch;return a!==n.memoizedState&&(ot.flags|=2048,ns(9,{destroy:void 0},py.bind(null,c,a),null)),[o,d,t]}function py(t,n){t.action=n}function Um(t){var n=en(),a=Pt;if(a!==null)return Dm(n,a,t);en(),n=n.memoizedState,a=en();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function ns(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ot.updateQueue,n===null&&(n=wl(),ot.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Lm(){return en().memoizedState}function Ll(t,n,a,o){var c=Ln();ot.flags|=t,c.memoizedState=ns(1|n,{destroy:void 0},a,o===void 0?null:o)}function Nl(t,n,a,o){var c=en();o=o===void 0?null:o;var d=c.memoizedState.inst;Pt!==null&&o!==null&&Qc(o,Pt.memoizedState.deps)?c.memoizedState=ns(n,d,a,o):(ot.flags|=t,c.memoizedState=ns(1|n,d,a,o))}function Nm(t,n){Ll(8390656,8,t,n)}function lf(t,n){Nl(2048,8,t,n)}function my(t){ot.flags|=4;var n=ot.updateQueue;if(n===null)n=wl(),ot.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Om(t){var n=en().memoizedState;return my({ref:n,nextImpl:t}),function(){if((Ct&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Pm(t,n){return Nl(4,2,t,n)}function zm(t,n){return Nl(4,4,t,n)}function Bm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Im(t,n,a){a=a!=null?a.concat([t]):null,Nl(4,4,Bm.bind(null,n,t),a)}function uf(){}function Fm(t,n){var a=en();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Qc(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Hm(t,n){var a=en();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Qc(n,o[1]))return o[0];if(o=t(),_r){Pe(!0);try{t()}finally{Pe(!1)}}return a.memoizedState=[o,n],o}function cf(t,n,a){return a===void 0||(Yi&1073741824)!==0&&(gt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Gg(),ot.lanes|=t,Na|=t,a)}function Gm(t,n,a,o){return qn(a,n)?a:$r.current!==null?(t=cf(t,a,o),qn(t,n)||(on=!0),t):(Yi&42)===0||(Yi&1073741824)!==0&&(gt&261930)===0?(on=!0,t.memoizedState=a):(t=Gg(),ot.lanes|=t,Na|=t,n)}function Vm(t,n,a,o,c){var d=Q.p;Q.p=d!==0&&8>d?d:8;var y=B.T,T={};B.T=T,hf(t,!1,n,a);try{var I=c(),te=B.S;if(te!==null&&te(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var fe=cy(I,o);po(t,n,fe,Jn(t))}else po(t,n,o,Jn(t))}catch(ye){po(t,n,{then:function(){},status:"rejected",reason:ye},Jn())}finally{Q.p=d,y!==null&&T.types!==null&&(y.types=T.types),B.T=y}}function gy(){}function ff(t,n,a,o){if(t.tag!==5)throw Error(r(476));var c=km(t).queue;Vm(t,c,n,K,a===null?gy:function(){return Xm(t),a(o)})}function km(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:K},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Xm(t){var n=km(t);n.next===null&&(n=t.alternate.memoizedState),po(t,n.next.queue,{},Jn())}function df(){return Mn(Uo)}function Wm(){return en().memoizedState}function qm(){return en().memoizedState}function _y(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();t=Ra(a);var o=Ca(n,t,a);o!==null&&(Gn(o,n,a),lo(o,n,a)),n={cache:Hc()},t.payload=n;return}n=n.return}}function vy(t,n,a){var o=Jn();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ol(t)?Ym(n,a):(a=wc(t,n,a,o),a!==null&&(Gn(a,t,o),Zm(a,n,o)))}function jm(t,n,a){var o=Jn();po(t,n,a,o)}function po(t,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ol(t))Ym(n,c);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var y=n.lastRenderedState,T=d(y,a);if(c.hasEagerState=!0,c.eagerState=T,qn(T,y))return pl(t,n,c,0),Ht===null&&hl(),!1}catch{}finally{}if(a=wc(t,n,c,o),a!==null)return Gn(a,t,o),Zm(a,n,o),!0}return!1}function hf(t,n,a,o){if(o={lane:2,revertLane:Wf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ol(t)){if(n)throw Error(r(479))}else n=wc(t,a,o,2),n!==null&&Gn(n,t,2)}function Ol(t){var n=t.alternate;return t===ot||n!==null&&n===ot}function Ym(t,n){es=Rl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Zm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ks(t,a)}}var mo={readContext:Mn,use:Dl,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useLayoutEffect:Qt,useInsertionEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useSyncExternalStore:Qt,useId:Qt,useHostTransitionStatus:Qt,useFormState:Qt,useActionState:Qt,useOptimistic:Qt,useMemoCache:Qt,useCacheRefresh:Qt};mo.useEffectEvent=Qt;var Km={readContext:Mn,use:Dl,useCallback:function(t,n){return Ln().memoizedState=[t,n===void 0?null:n],t},useContext:Mn,useEffect:Nm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ll(4194308,4,Bm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ll(4194308,4,t,n)},useInsertionEffect:function(t,n){Ll(4,2,t,n)},useMemo:function(t,n){var a=Ln();n=n===void 0?null:n;var o=t();if(_r){Pe(!0);try{t()}finally{Pe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Ln();if(a!==void 0){var c=a(n);if(_r){Pe(!0);try{a(n)}finally{Pe(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=vy.bind(null,ot,t),[o.memoizedState,t]},useRef:function(t){var n=Ln();return t={current:t},n.memoizedState=t},useState:function(t){t=sf(t);var n=t.queue,a=jm.bind(null,ot,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:uf,useDeferredValue:function(t,n){var a=Ln();return cf(a,t,n)},useTransition:function(){var t=sf(!1);return t=Vm.bind(null,ot,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ot,c=Ln();if(yt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ht===null)throw Error(r(349));(gt&127)!==0||_m(o,n,a)}c.memoizedState=a;var d={value:a,getSnapshot:n};return c.queue=d,Nm(xm.bind(null,o,d,t),[t]),o.flags|=2048,ns(9,{destroy:void 0},vm.bind(null,o,d,a,n),null),a},useId:function(){var t=Ln(),n=Ht.identifierPrefix;if(yt){var a=Ui,o=Di;a=(o&~(1<<32-tt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Cl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=fy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:df,useFormState:Cm,useActionState:Cm,useOptimistic:function(t){var n=Ln();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=hf.bind(null,ot,!0,a),a.dispatch=n,[t,n]},useMemoCache:nf,useCacheRefresh:function(){return Ln().memoizedState=_y.bind(null,ot)},useEffectEvent:function(t){var n=Ln(),a={impl:t};return n.memoizedState=a,function(){if((Ct&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},pf={readContext:Mn,use:Dl,useCallback:Fm,useContext:Mn,useEffect:lf,useImperativeHandle:Im,useInsertionEffect:Pm,useLayoutEffect:zm,useMemo:Hm,useReducer:Ul,useRef:Lm,useState:function(){return Ul(Zi)},useDebugValue:uf,useDeferredValue:function(t,n){var a=en();return Gm(a,Pt.memoizedState,t,n)},useTransition:function(){var t=Ul(Zi)[0],n=en().memoizedState;return[typeof t=="boolean"?t:ho(t),n]},useSyncExternalStore:gm,useId:Wm,useHostTransitionStatus:df,useFormState:wm,useActionState:wm,useOptimistic:function(t,n){var a=en();return Mm(a,Pt,t,n)},useMemoCache:nf,useCacheRefresh:qm};pf.useEffectEvent=Om;var Qm={readContext:Mn,use:Dl,useCallback:Fm,useContext:Mn,useEffect:lf,useImperativeHandle:Im,useInsertionEffect:Pm,useLayoutEffect:zm,useMemo:Hm,useReducer:rf,useRef:Lm,useState:function(){return rf(Zi)},useDebugValue:uf,useDeferredValue:function(t,n){var a=en();return Pt===null?cf(a,t,n):Gm(a,Pt.memoizedState,t,n)},useTransition:function(){var t=rf(Zi)[0],n=en().memoizedState;return[typeof t=="boolean"?t:ho(t),n]},useSyncExternalStore:gm,useId:Wm,useHostTransitionStatus:df,useFormState:Um,useActionState:Um,useOptimistic:function(t,n){var a=en();return Pt!==null?Mm(a,Pt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:nf,useCacheRefresh:qm};Qm.useEffectEvent=Om;function mf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var gf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Jn(),c=Ra(o);c.payload=n,a!=null&&(c.callback=a),n=Ca(t,c,o),n!==null&&(Gn(n,t,o),lo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Jn(),c=Ra(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ca(t,c,o),n!==null&&(Gn(n,t,o),lo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Jn(),o=Ra(a);o.tag=2,n!=null&&(o.callback=n),n=Ca(t,o,a),n!==null&&(Gn(n,t,a),lo(n,t,a))}};function Jm(t,n,a,o,c,d,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,y):n.prototype&&n.prototype.isPureReactComponent?!eo(a,o)||!eo(c,d):!0}function $m(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&gf.enqueueReplaceState(n,n.state,null)}function vr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function eg(t){dl(t)}function tg(t){console.error(t)}function ng(t){dl(t)}function Pl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function ig(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function _f(t,n,a){return a=Ra(a),a.tag=3,a.payload={element:null},a.callback=function(){Pl(t,n)},a}function ag(t){return t=Ra(t),t.tag=3,t}function rg(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var d=o.value;t.payload=function(){return c(d)},t.callback=function(){ig(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){ig(n,a,o),typeof c!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function xy(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Yr(n,a,c,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return oi===null?jl():a.alternate===null&&Jt===0&&(Jt=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Ml?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Vf(t,o,c)),!1;case 22:return a.flags|=65536,o===Ml?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Vf(t,o,c)),!1}throw Error(r(435,a.tag))}return Vf(t,o,c),jl(),!1}if(yt)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Pc&&(t=Error(r(422),{cause:o}),io(ii(t,a)))):(o!==Pc&&(n=Error(r(423),{cause:o}),io(ii(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=ii(o,a),c=_f(t.stateNode,o,c),qc(t,c),Jt!==4&&(Jt=2)),!1;var d=Error(r(520),{cause:o});if(d=ii(d,a),Eo===null?Eo=[d]:Eo.push(d),Jt!==4&&(Jt=2),n===null)return!0;o=ii(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=_f(a.stateNode,o,t),qc(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Oa===null||!Oa.has(d))))return a.flags|=65536,c&=-c,a.lanes|=c,c=ag(c),rg(c,t,a,o),qc(a,c),!1}a=a.return}while(a!==null);return!1}var vf=Error(r(461)),on=!1;function En(t,n,a,o){n.child=t===null?um(n,null,a,o):gr(n,t.child,a,o)}function sg(t,n,a,o,c){a=a.render;var d=n.ref;if("ref"in o){var y={};for(var T in o)T!=="ref"&&(y[T]=o[T])}else y=o;return dr(n),o=Jc(t,n,a,y,d,c),T=$c(),t!==null&&!on?(ef(t,n,c),Ki(t,n,c)):(yt&&T&&Nc(n),n.flags|=1,En(t,n,o,c),n.child)}function og(t,n,a,o,c){if(t===null){var d=a.type;return typeof d=="function"&&!Dc(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,lg(t,n,d,o,c)):(t=gl(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Af(t,c)){var y=d.memoizedProps;if(a=a.compare,a=a!==null?a:eo,a(y,o)&&t.ref===n.ref)return Ki(t,n,c)}return n.flags|=1,t=Xi(d,o),t.ref=n.ref,t.return=n,n.child=t}function lg(t,n,a,o,c){if(t!==null){var d=t.memoizedProps;if(eo(d,o)&&t.ref===n.ref)if(on=!1,n.pendingProps=o=d,Af(t,c))(t.flags&131072)!==0&&(on=!0);else return n.lanes=t.lanes,Ki(t,n,c)}return xf(t,n,a,o,c)}function ug(t,n,a,o){var c=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~d}else o=0,n.child=null;return cg(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&yl(n,d!==null?d.cachePool:null),d!==null?dm(n,d):Yc(),hm(n);else return o=n.lanes=536870912,cg(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(yl(n,d.cachePool),dm(n,d),Da(),n.memoizedState=null):(t!==null&&yl(n,null),Yc(),Da());return En(t,n,c,a),n.child}function go(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function cg(t,n,a,o,c){var d=Vc();return d=d===null?null:{parent:rn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&yl(n,null),Yc(),hm(n),t!==null&&Yr(t,n,o,!0),n.childLanes=c,null}function zl(t,n){return n=Il({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function fg(t,n,a){return gr(n,t.child,null,a),t=zl(n,n.pendingProps),t.flags|=2,Zn(n),n.memoizedState=null,t}function yy(t,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(yt){if(o.mode==="hidden")return t=zl(n,o),n.lanes=536870912,go(null,t);if(Kc(n),(t=Xt)?(t=E_(t,si),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ma!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=Yp(t),a.return=n,n.child=a,Sn=n,Xt=null)):t=null,t===null)throw ba(n);return n.lanes=536870912,null}return zl(n,o)}var d=t.memoizedState;if(d!==null){var y=d.dehydrated;if(Kc(n),c)if(n.flags&256)n.flags&=-257,n=fg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(on||Yr(t,n,a,!1),c=(a&t.childLanes)!==0,on||c){if(o=Ht,o!==null&&(y=wi(o,a),y!==0&&y!==d.retryLane))throw d.retryLane=y,lr(t,y),Gn(o,t,y),vf;jl(),n=fg(t,n,a)}else t=d.treeContext,Xt=li(y.nextSibling),Sn=n,yt=!0,Ea=null,si=!1,t!==null&&Qp(n,t),n=zl(n,o),n.flags|=4096;return n}return t=Xi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Bl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function xf(t,n,a,o,c){return dr(n),a=Jc(t,n,a,o,void 0,c),o=$c(),t!==null&&!on?(ef(t,n,c),Ki(t,n,c)):(yt&&o&&Nc(n),n.flags|=1,En(t,n,a,c),n.child)}function dg(t,n,a,o,c,d){return dr(n),n.updateQueue=null,a=mm(n,o,a,c),pm(t),o=$c(),t!==null&&!on?(ef(t,n,d),Ki(t,n,d)):(yt&&o&&Nc(n),n.flags|=1,En(t,n,a,d),n.child)}function hg(t,n,a,o,c){if(dr(n),n.stateNode===null){var d=Xr,y=a.contextType;typeof y=="object"&&y!==null&&(d=Mn(y)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=gf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Xc(n),y=a.contextType,d.context=typeof y=="object"&&y!==null?Mn(y):Xr,d.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(mf(n,a,y,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&gf.enqueueReplaceState(d,d.state,null),co(n,o,d,c),uo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var T=n.memoizedProps,I=vr(a,T);d.props=I;var te=d.context,fe=a.contextType;y=Xr,typeof fe=="object"&&fe!==null&&(y=Mn(fe));var ye=a.getDerivedStateFromProps;fe=typeof ye=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,fe||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||te!==y)&&$m(n,d,o,y),Aa=!1;var ne=n.memoizedState;d.state=ne,co(n,o,d,c),uo(),te=n.memoizedState,T||ne!==te||Aa?(typeof ye=="function"&&(mf(n,a,ye,o),te=n.memoizedState),(I=Aa||Jm(n,a,I,o,ne,te,y))?(fe||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=te),d.props=o,d.state=te,d.context=y,o=I):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Wc(t,n),y=n.memoizedProps,fe=vr(a,y),d.props=fe,ye=n.pendingProps,ne=d.context,te=a.contextType,I=Xr,typeof te=="object"&&te!==null&&(I=Mn(te)),T=a.getDerivedStateFromProps,(te=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==ye||ne!==I)&&$m(n,d,o,I),Aa=!1,ne=n.memoizedState,d.state=ne,co(n,o,d,c),uo();var oe=n.memoizedState;y!==ye||ne!==oe||Aa||t!==null&&t.dependencies!==null&&vl(t.dependencies)?(typeof T=="function"&&(mf(n,a,T,o),oe=n.memoizedState),(fe=Aa||Jm(n,a,fe,o,ne,oe,I)||t!==null&&t.dependencies!==null&&vl(t.dependencies))?(te||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,oe,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,oe,I)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&ne===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ne===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=oe),d.props=o,d.state=oe,d.context=I,o=fe):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&ne===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ne===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Bl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=gr(n,t.child,null,c),n.child=gr(n,null,a,c)):En(t,n,a,c),n.memoizedState=d.state,t=n.child):t=Ki(t,n,c),t}function pg(t,n,a,o){return cr(),n.flags|=256,En(t,n,a,o),n.child}var yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sf(t){return{baseLanes:t,cachePool:im()}}function Mf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Qn),t}function mg(t,n,a){var o=n.pendingProps,c=!1,d=(n.flags&128)!==0,y;if((y=d)||(y=t!==null&&t.memoizedState===null?!1:($t.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(yt){if(c?wa(n):Da(),(t=Xt)?(t=E_(t,si),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ma!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=Yp(t),a.return=n,n.child=a,Sn=n,Xt=null)):t=null,t===null)throw ba(n);return ad(t)?n.lanes=32:n.lanes=536870912,null}var T=o.children;return o=o.fallback,c?(Da(),c=n.mode,T=Il({mode:"hidden",children:T},c),o=ur(o,c,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,o=n.child,o.memoizedState=Sf(a),o.childLanes=Mf(t,y,a),n.memoizedState=yf,go(null,o)):(wa(n),Ef(n,T))}var I=t.memoizedState;if(I!==null&&(T=I.dehydrated,T!==null)){if(d)n.flags&256?(wa(n),n.flags&=-257,n=bf(t,n,a)):n.memoizedState!==null?(Da(),n.child=t.child,n.flags|=128,n=null):(Da(),T=o.fallback,c=n.mode,o=Il({mode:"visible",children:o.children},c),T=ur(T,c,a,null),T.flags|=2,o.return=n,T.return=n,o.sibling=T,n.child=o,gr(n,t.child,null,a),o=n.child,o.memoizedState=Sf(a),o.childLanes=Mf(t,y,a),n.memoizedState=yf,n=go(null,o));else if(wa(n),ad(T)){if(y=T.nextSibling&&T.nextSibling.dataset,y)var te=y.dgst;y=te,o=Error(r(419)),o.stack="",o.digest=y,io({value:o,source:null,stack:null}),n=bf(t,n,a)}else if(on||Yr(t,n,a,!1),y=(a&t.childLanes)!==0,on||y){if(y=Ht,y!==null&&(o=wi(y,a),o!==0&&o!==I.retryLane))throw I.retryLane=o,lr(t,o),Gn(y,t,o),vf;id(T)||jl(),n=bf(t,n,a)}else id(T)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,Xt=li(T.nextSibling),Sn=n,yt=!0,Ea=null,si=!1,t!==null&&Qp(n,t),n=Ef(n,o.children),n.flags|=4096);return n}return c?(Da(),T=o.fallback,c=n.mode,I=t.child,te=I.sibling,o=Xi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,te!==null?T=Xi(te,T):(T=ur(T,c,a,null),T.flags|=2),T.return=n,o.return=n,o.sibling=T,n.child=o,go(null,o),o=n.child,T=t.child.memoizedState,T===null?T=Sf(a):(c=T.cachePool,c!==null?(I=rn._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=im(),T={baseLanes:T.baseLanes|a,cachePool:c}),o.memoizedState=T,o.childLanes=Mf(t,y,a),n.memoizedState=yf,go(t.child,o)):(wa(n),a=t.child,t=a.sibling,a=Xi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function Ef(t,n){return n=Il({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Il(t,n){return t=jn(22,t,null,n),t.lanes=0,t}function bf(t,n,a){return gr(n,t.child,null,a),t=Ef(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function gg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Ic(t.return,n,a)}function Tf(t,n,a,o,c,d){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:d}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=c,y.treeForkCount=d)}function _g(t,n,a){var o=n.pendingProps,c=o.revealOrder,d=o.tail;o=o.children;var y=$t.current,T=(y&2)!==0;if(T?(y=y&1|2,n.flags|=128):y&=1,xe($t,y),En(t,n,o,a),o=yt?no:0,!T&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gg(t,a,n);else if(t.tag===19)gg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Al(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Tf(n,!1,c,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Al(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Tf(n,!0,a,null,d,o);break;case"together":Tf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Ki(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Na|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Yr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Xi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Xi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Af(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&vl(t)))}function Sy(t,n,a){switch(n.tag){case 3:Be(n,n.stateNode.containerInfo),Ta(n,rn,t.memoizedState.cache),cr();break;case 27:case 5:Ke(n);break;case 4:Be(n,n.stateNode.containerInfo);break;case 10:Ta(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Kc(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(wa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?mg(t,n,a):(wa(n),t=Ki(t,n,a),t!==null?t.sibling:null);wa(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Yr(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return _g(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),xe($t,$t.current),o)break;return null;case 22:return n.lanes=0,ug(t,n,a,n.pendingProps);case 24:Ta(n,rn,t.memoizedState.cache)}return Ki(t,n,a)}function vg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)on=!0;else{if(!Af(t,a)&&(n.flags&128)===0)return on=!1,Sy(t,n,a);on=(t.flags&131072)!==0}else on=!1,yt&&(n.flags&1048576)!==0&&Kp(n,no,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=pr(n.elementType),n.type=t,typeof t=="function")Dc(t)?(o=vr(t,o),n.tag=1,n=hg(null,n,t,o,a)):(n.tag=0,n=xf(null,n,t,o,a));else{if(t!=null){var c=t.$$typeof;if(c===D){n.tag=11,n=sg(null,n,t,o,a);break e}else if(c===O){n.tag=14,n=og(null,n,t,o,a);break e}}throw n=ge(t)||t,Error(r(306,n,""))}}return n;case 0:return xf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=vr(o,n.pendingProps),hg(t,n,o,c,a);case 3:e:{if(Be(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;c=d.element,Wc(t,n),co(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Ta(n,rn,o),o!==d.cache&&Fc(n,[rn],a,!0),uo(),o=y.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=pg(t,n,o,a);break e}else if(o!==c){c=ii(Error(r(424)),n),io(c),n=pg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Xt=li(t.firstChild),Sn=n,yt=!0,Ea=null,si=!0,a=um(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(cr(),o===c){n=Ki(t,n,a);break e}En(t,n,o,a)}n=n.child}return n;case 26:return Bl(t,n),t===null?(a=w_(n.type,null,n.pendingProps,null))?n.memoizedState=a:yt||(a=n.type,t=n.pendingProps,o=eu(Te.current).createElement(a),o[Zt]=n,o[xn]=t,bn(o,a,t),X(o),n.stateNode=o):n.memoizedState=w_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ke(n),t===null&&yt&&(o=n.stateNode=A_(n.type,n.pendingProps,Te.current),Sn=n,si=!0,c=Xt,Ia(n.type)?(rd=c,Xt=li(o.firstChild)):Xt=c),En(t,n,n.pendingProps.children,a),Bl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&yt&&((c=o=Xt)&&(o=Qy(o,n.type,n.pendingProps,si),o!==null?(n.stateNode=o,Sn=n,Xt=li(o.firstChild),si=!1,c=!0):c=!1),c||ba(n)),Ke(n),c=n.type,d=n.pendingProps,y=t!==null?t.memoizedProps:null,o=d.children,ed(c,d)?o=null:y!==null&&ed(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=Jc(t,n,dy,null,null,a),Uo._currentValue=c),Bl(t,n),En(t,n,o,a),n.child;case 6:return t===null&&yt&&((t=a=Xt)&&(a=Jy(a,n.pendingProps,si),a!==null?(n.stateNode=a,Sn=n,Xt=null,t=!0):t=!1),t||ba(n)),null;case 13:return mg(t,n,a);case 4:return Be(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=gr(n,null,o,a):En(t,n,o,a),n.child;case 11:return sg(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ta(n,n.type,o.value),En(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,dr(n),c=Mn(c),o=o(c),n.flags|=1,En(t,n,o,a),n.child;case 14:return og(t,n,n.type,n.pendingProps,a);case 15:return lg(t,n,n.type,n.pendingProps,a);case 19:return _g(t,n,a);case 31:return yy(t,n,a);case 22:return ug(t,n,a,n.pendingProps);case 24:return dr(n),o=Mn(rn),t===null?(c=Vc(),c===null&&(c=Ht,d=Hc(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=a),c=d),n.memoizedState={parent:o,cache:c},Xc(n),Ta(n,rn,c)):((t.lanes&a)!==0&&(Wc(t,n),co(n,null,null,a),uo()),c=t.memoizedState,d=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ta(n,rn,o)):(o=d.cache,Ta(n,rn,o),o!==c.cache&&Fc(n,[rn],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Qi(t){t.flags|=4}function Rf(t,n,a,o,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(Wg())t.flags|=8192;else throw mr=Ml,kc}else t.flags&=-16777217}function xg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!O_(n))if(Wg())t.flags|=8192;else throw mr=Ml,kc}function Fl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?cn():536870912,t.lanes|=n,ss|=n)}function _o(t,n){if(!yt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Wt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function My(t,n,a){var o=n.pendingProps;switch(Oc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(n),null;case 1:return Wt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ji(rn),Ye(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(jr(n)?Qi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,zc())),Wt(n),null;case 26:var c=n.type,d=n.memoizedState;return t===null?(Qi(n),d!==null?(Wt(n),xg(n,d)):(Wt(n),Rf(n,c,null,o,a))):d?d!==t.memoizedState?(Qi(n),Wt(n),xg(n,d)):(Wt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Qi(n),Wt(n),Rf(n,c,t,o,a)),null;case 27:if(Vt(n),a=Te.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Qi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Wt(n),null}t=q.current,jr(n)?Jp(n):(t=A_(c,o,a),n.stateNode=t,Qi(n))}return Wt(n),null;case 5:if(Vt(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Qi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Wt(n),null}if(d=q.current,jr(n))Jp(n);else{var y=eu(Te.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?y.createElement(c,{is:o.is}):y.createElement(c)}}d[Zt]=n,d[xn]=o;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=d;e:switch(bn(d,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Qi(n)}}return Wt(n),Rf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Qi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=Te.current,jr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=Sn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[Zt]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||m_(t.nodeValue,a)),t||ba(n,!0)}else t=eu(t).createTextNode(o),t[Zt]=n,n.stateNode=t}return Wt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=jr(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Zt]=n}else cr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Wt(n),t=!1}else a=zc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Wt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=jr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[Zt]=n}else cr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Wt(n),c=!1}else c=zc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==c&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Fl(n,n.updateQueue),Wt(n),null);case 4:return Ye(),t===null&&Zf(n.stateNode.containerInfo),Wt(n),null;case 10:return ji(n.type),Wt(n),null;case 19:if($($t),o=n.memoizedState,o===null)return Wt(n),null;if(c=(n.flags&128)!==0,d=o.rendering,d===null)if(c)_o(o,!1);else{if(Jt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Al(t),d!==null){for(n.flags|=128,_o(o,!1),t=d.updateQueue,n.updateQueue=t,Fl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)jp(a,t),a=a.sibling;return xe($t,$t.current&1|2),yt&&Wi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&he()>Xl&&(n.flags|=128,c=!0,_o(o,!1),n.lanes=4194304)}else{if(!c)if(t=Al(d),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Fl(n,t),_o(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!yt)return Wt(n),null}else 2*he()-o.renderingStartTime>Xl&&a!==536870912&&(n.flags|=128,c=!0,_o(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=he(),t.sibling=null,a=$t.current,xe($t,c?a&1|2:a&1),yt&&Wi(n,o.treeForkCount),t):(Wt(n),null);case 22:case 23:return Zn(n),Zc(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Wt(n),n.subtreeFlags&6&&(n.flags|=8192)):Wt(n),a=n.updateQueue,a!==null&&Fl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&$(hr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ji(rn),Wt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Ey(t,n){switch(Oc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ji(rn),Ye(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Vt(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(r(340));cr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Zn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));cr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return $($t),null;case 4:return Ye(),null;case 10:return ji(n.type),null;case 22:case 23:return Zn(n),Zc(),t!==null&&$(hr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ji(rn),null;case 25:return null;default:return null}}function yg(t,n){switch(Oc(n),n.tag){case 3:ji(rn),Ye();break;case 26:case 27:case 5:Vt(n);break;case 4:Ye();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:$($t);break;case 10:ji(n.type);break;case 22:case 23:Zn(n),Zc(),t!==null&&$(hr);break;case 24:ji(rn)}}function vo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var d=a.create,y=a.inst;o=d(),y.destroy=o}a=a.next}while(a!==c)}}catch(T){Lt(n,n.return,T)}}function Ua(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&t)===t){var y=o.inst,T=y.destroy;if(T!==void 0){y.destroy=void 0,c=n;var I=a,te=T;try{te()}catch(fe){Lt(c,I,fe)}}}o=o.next}while(o!==d)}}catch(fe){Lt(n,n.return,fe)}}function Sg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{fm(n,a)}catch(o){Lt(t,t.return,o)}}}function Mg(t,n,a){a.props=vr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Lt(t,n,o)}}function xo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){Lt(t,n,c)}}function Li(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Lt(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Lt(t,n,c)}else a.current=null}function Eg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Lt(t,t.return,c)}}function Cf(t,n,a){try{var o=t.stateNode;Wy(o,t.type,a,n),o[xn]=n}catch(c){Lt(t,t.return,c)}}function bg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ia(t.type)||t.tag===4}function wf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ia(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Df(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Vi));else if(o!==4&&(o===27&&Ia(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Df(t,n,a),t=t.sibling;t!==null;)Df(t,n,a),t=t.sibling}function Hl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ia(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Hl(t,n,a),t=t.sibling;t!==null;)Hl(t,n,a),t=t.sibling}function Tg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);bn(n,o,a),n[Zt]=t,n[xn]=a}catch(d){Lt(t,t.return,d)}}var Ji=!1,ln=!1,Uf=!1,Ag=typeof WeakSet=="function"?WeakSet:Set,gn=null;function by(t,n){if(t=t.containerInfo,Jf=ou,t=Ip(t),Ec(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var y=0,T=-1,I=-1,te=0,fe=0,ye=t,ne=null;t:for(;;){for(var oe;ye!==a||c!==0&&ye.nodeType!==3||(T=y+c),ye!==d||o!==0&&ye.nodeType!==3||(I=y+o),ye.nodeType===3&&(y+=ye.nodeValue.length),(oe=ye.firstChild)!==null;)ne=ye,ye=oe;for(;;){if(ye===t)break t;if(ne===a&&++te===c&&(T=y),ne===d&&++fe===o&&(I=y),(oe=ye.nextSibling)!==null)break;ye=ne,ne=ye.parentNode}ye=oe}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for($f={focusedElem:t,selectionRange:a},ou=!1,gn=n;gn!==null;)if(n=gn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,gn=t;else for(;gn!==null;){switch(n=gn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,c=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Fe=vr(a.type,c);t=o.getSnapshotBeforeUpdate(Fe,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(Je){Lt(a,a.return,Je)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)nd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":nd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,gn=t;break}gn=n.return}}function Rg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ea(t,a),o&4&&vo(5,a);break;case 1:if(ea(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){Lt(a,a.return,y)}else{var c=vr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Lt(a,a.return,y)}}o&64&&Sg(a),o&512&&xo(a,a.return);break;case 3:if(ea(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{fm(t,n)}catch(y){Lt(a,a.return,y)}}break;case 27:n===null&&o&4&&Tg(a);case 26:case 5:ea(t,a),n===null&&o&4&&Eg(a),o&512&&xo(a,a.return);break;case 12:ea(t,a);break;case 31:ea(t,a),o&4&&Dg(t,a);break;case 13:ea(t,a),o&4&&Ug(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Ny.bind(null,a),$y(t,a))));break;case 22:if(o=a.memoizedState!==null||Ji,!o){n=n!==null&&n.memoizedState!==null||ln,c=Ji;var d=ln;Ji=o,(ln=n)&&!d?ta(t,a,(a.subtreeFlags&8772)!==0):ea(t,a),Ji=c,ln=d}break;case 30:break;default:ea(t,a)}}function Cg(t){var n=t.alternate;n!==null&&(t.alternate=null,Cg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&qs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var jt=null,Bn=!1;function $i(t,n,a){for(a=a.child;a!==null;)wg(t,n,a),a=a.sibling}function wg(t,n,a){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(Ze,a)}catch{}switch(a.tag){case 26:ln||Li(a,n),$i(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ln||Li(a,n);var o=jt,c=Bn;Ia(a.type)&&(jt=a.stateNode,Bn=!1),$i(t,n,a),Co(a.stateNode),jt=o,Bn=c;break;case 5:ln||Li(a,n);case 6:if(o=jt,c=Bn,jt=null,$i(t,n,a),jt=o,Bn=c,jt!==null)if(Bn)try{(jt.nodeType===9?jt.body:jt.nodeName==="HTML"?jt.ownerDocument.body:jt).removeChild(a.stateNode)}catch(d){Lt(a,n,d)}else try{jt.removeChild(a.stateNode)}catch(d){Lt(a,n,d)}break;case 18:jt!==null&&(Bn?(t=jt,S_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ps(t)):S_(jt,a.stateNode));break;case 4:o=jt,c=Bn,jt=a.stateNode.containerInfo,Bn=!0,$i(t,n,a),jt=o,Bn=c;break;case 0:case 11:case 14:case 15:Ua(2,a,n),ln||Ua(4,a,n),$i(t,n,a);break;case 1:ln||(Li(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Mg(a,n,o)),$i(t,n,a);break;case 21:$i(t,n,a);break;case 22:ln=(o=ln)||a.memoizedState!==null,$i(t,n,a),ln=o;break;default:$i(t,n,a)}}function Dg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ps(t)}catch(a){Lt(n,n.return,a)}}}function Ug(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ps(t)}catch(a){Lt(n,n.return,a)}}function Ty(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Ag),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Ag),n;default:throw Error(r(435,t.tag))}}function Gl(t,n){var a=Ty(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=Oy.bind(null,t,o);o.then(c,c)}})}function In(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],d=t,y=n,T=y;e:for(;T!==null;){switch(T.tag){case 27:if(Ia(T.type)){jt=T.stateNode,Bn=!1;break e}break;case 5:jt=T.stateNode,Bn=!1;break e;case 3:case 4:jt=T.stateNode.containerInfo,Bn=!0;break e}T=T.return}if(jt===null)throw Error(r(160));wg(d,y,c),jt=null,Bn=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Lg(n,t),n=n.sibling}var _i=null;function Lg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:In(n,t),Fn(t),o&4&&(Ua(3,t,t.return),vo(3,t),Ua(5,t,t.return));break;case 1:In(n,t),Fn(t),o&512&&(ln||a===null||Li(a,a.return)),o&64&&Ji&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=_i;if(In(n,t),Fn(t),o&512&&(ln||a===null||Li(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":d=c.getElementsByTagName("title")[0],(!d||d[ar]||d[Zt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(o),c.head.insertBefore(d,c.querySelector("head > title"))),bn(d,o,a),d[Zt]=t,X(d),o=d;break e;case"link":var y=L_("link","href",c).get(o+(a.href||""));if(y){for(var T=0;T<y.length;T++)if(d=y[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(T,1);break t}}d=c.createElement(o),bn(d,o,a),c.head.appendChild(d);break;case"meta":if(y=L_("meta","content",c).get(o+(a.content||""))){for(T=0;T<y.length;T++)if(d=y[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(T,1);break t}}d=c.createElement(o),bn(d,o,a),c.head.appendChild(d);break;default:throw Error(r(468,o))}d[Zt]=t,X(d),o=d}t.stateNode=o}else N_(c,t.type,t.stateNode);else t.stateNode=U_(c,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?N_(c,t.type,t.stateNode):U_(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Cf(t,t.memoizedProps,a.memoizedProps)}break;case 27:In(n,t),Fn(t),o&512&&(ln||a===null||Li(a,a.return)),a!==null&&o&4&&Cf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(In(n,t),Fn(t),o&512&&(ln||a===null||Li(a,a.return)),t.flags&32){c=t.stateNode;try{Pn(c,"")}catch(Fe){Lt(t,t.return,Fe)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,Cf(t,c,a!==null?a.memoizedProps:c)),o&1024&&(Uf=!0);break;case 6:if(In(n,t),Fn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Fe){Lt(t,t.return,Fe)}}break;case 3:if(iu=null,c=_i,_i=tu(n.containerInfo),In(n,t),_i=c,Fn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ps(n.containerInfo)}catch(Fe){Lt(t,t.return,Fe)}Uf&&(Uf=!1,Ng(t));break;case 4:o=_i,_i=tu(t.stateNode.containerInfo),In(n,t),Fn(t),_i=o;break;case 12:In(n,t),Fn(t);break;case 31:In(n,t),Fn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Gl(t,o)));break;case 13:In(n,t),Fn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(kl=he()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Gl(t,o)));break;case 22:c=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,te=Ji,fe=ln;if(Ji=te||c,ln=fe||I,In(n,t),ln=fe,Ji=te,Fn(t),o&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||Ji||ln||xr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(d=I.stateNode,c)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{T=I.stateNode;var ye=I.memoizedProps.style,ne=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;T.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(Fe){Lt(I,I.return,Fe)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(Fe){Lt(I,I.return,Fe)}}}else if(n.tag===18){if(a===null){I=n;try{var oe=I.stateNode;c?M_(oe,!0):M_(I.stateNode,!1)}catch(Fe){Lt(I,I.return,Fe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Gl(t,a))));break;case 19:In(n,t),Fn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Gl(t,o)));break;case 30:break;case 21:break;default:In(n,t),Fn(t)}}function Fn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(bg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,d=wf(t);Hl(t,d,c);break;case 5:var y=a.stateNode;a.flags&32&&(Pn(y,""),a.flags&=-33);var T=wf(t);Hl(t,T,y);break;case 3:case 4:var I=a.stateNode.containerInfo,te=wf(t);Df(t,te,I);break;default:throw Error(r(161))}}catch(fe){Lt(t,t.return,fe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Ng(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Ng(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ea(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Rg(t,n.alternate,n),n=n.sibling}function xr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ua(4,n,n.return),xr(n);break;case 1:Li(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Mg(n,n.return,a),xr(n);break;case 27:Co(n.stateNode);case 26:case 5:Li(n,n.return),xr(n);break;case 22:n.memoizedState===null&&xr(n);break;case 30:xr(n);break;default:xr(n)}t=t.sibling}}function ta(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,d=n,y=d.flags;switch(d.tag){case 0:case 11:case 15:ta(c,d,a),vo(4,d);break;case 1:if(ta(c,d,a),o=d,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(te){Lt(o,o.return,te)}if(o=d,c=o.updateQueue,c!==null){var T=o.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)cm(I[c],T)}catch(te){Lt(o,o.return,te)}}a&&y&64&&Sg(d),xo(d,d.return);break;case 27:Tg(d);case 26:case 5:ta(c,d,a),a&&o===null&&y&4&&Eg(d),xo(d,d.return);break;case 12:ta(c,d,a);break;case 31:ta(c,d,a),a&&y&4&&Dg(c,d);break;case 13:ta(c,d,a),a&&y&4&&Ug(c,d);break;case 22:d.memoizedState===null&&ta(c,d,a),xo(d,d.return);break;case 30:break;default:ta(c,d,a)}n=n.sibling}}function Lf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ao(a))}function Nf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ao(t))}function vi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Og(t,n,a,o),n=n.sibling}function Og(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:vi(t,n,a,o),c&2048&&vo(9,n);break;case 1:vi(t,n,a,o);break;case 3:vi(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ao(t)));break;case 12:if(c&2048){vi(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,y=d.id,T=d.onPostCommit;typeof T=="function"&&T(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Lt(n,n.return,I)}}else vi(t,n,a,o);break;case 31:vi(t,n,a,o);break;case 13:vi(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,y=n.alternate,n.memoizedState!==null?d._visibility&2?vi(t,n,a,o):yo(t,n):d._visibility&2?vi(t,n,a,o):(d._visibility|=2,is(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&Lf(y,n);break;case 24:vi(t,n,a,o),c&2048&&Nf(n.alternate,n);break;default:vi(t,n,a,o)}}function is(t,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,y=n,T=a,I=o,te=y.flags;switch(y.tag){case 0:case 11:case 15:is(d,y,T,I,c),vo(8,y);break;case 23:break;case 22:var fe=y.stateNode;y.memoizedState!==null?fe._visibility&2?is(d,y,T,I,c):yo(d,y):(fe._visibility|=2,is(d,y,T,I,c)),c&&te&2048&&Lf(y.alternate,y);break;case 24:is(d,y,T,I,c),c&&te&2048&&Nf(y.alternate,y);break;default:is(d,y,T,I,c)}n=n.sibling}}function yo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:yo(a,o),c&2048&&Lf(o.alternate,o);break;case 24:yo(a,o),c&2048&&Nf(o.alternate,o);break;default:yo(a,o)}n=n.sibling}}var So=8192;function as(t,n,a){if(t.subtreeFlags&So)for(t=t.child;t!==null;)Pg(t,n,a),t=t.sibling}function Pg(t,n,a){switch(t.tag){case 26:as(t,n,a),t.flags&So&&t.memoizedState!==null&&fS(a,_i,t.memoizedState,t.memoizedProps);break;case 5:as(t,n,a);break;case 3:case 4:var o=_i;_i=tu(t.stateNode.containerInfo),as(t,n,a),_i=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=So,So=16777216,as(t,n,a),So=o):as(t,n,a));break;default:as(t,n,a)}}function zg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Mo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,Ig(o,t)}zg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Bg(t),t=t.sibling}function Bg(t){switch(t.tag){case 0:case 11:case 15:Mo(t),t.flags&2048&&Ua(9,t,t.return);break;case 3:Mo(t);break;case 12:Mo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Vl(t)):Mo(t);break;default:Mo(t)}}function Vl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,Ig(o,t)}zg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ua(8,n,n.return),Vl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Vl(n));break;default:Vl(n)}t=t.sibling}}function Ig(t,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Ua(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ao(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,gn=o;else e:for(a=t;gn!==null;){o=gn;var c=o.sibling,d=o.return;if(Cg(o),o===a){gn=null;break e}if(c!==null){c.return=d,gn=c;break e}gn=d}}}var Ay={getCacheForType:function(t){var n=Mn(rn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Mn(rn).controller.signal}},Ry=typeof WeakMap=="function"?WeakMap:Map,Ct=0,Ht=null,ht=null,gt=0,Ut=0,Kn=null,La=!1,rs=!1,Of=!1,na=0,Jt=0,Na=0,yr=0,Pf=0,Qn=0,ss=0,Eo=null,Hn=null,zf=!1,kl=0,Fg=0,Xl=1/0,Wl=null,Oa=null,dn=0,Pa=null,os=null,ia=0,Bf=0,If=null,Hg=null,bo=0,Ff=null;function Jn(){return(Ct&2)!==0&&gt!==0?gt&-gt:B.T!==null?Wf():Xs()}function Gg(){if(Qn===0)if((gt&536870912)===0||yt){var t=ce;ce<<=1,(ce&3932160)===0&&(ce=262144),Qn=t}else Qn=536870912;return t=Yn.current,t!==null&&(t.flags|=32),Qn}function Gn(t,n,a){(t===Ht&&(Ut===2||Ut===9)||t.cancelPendingCommit!==null)&&(ls(t,0),za(t,gt,Qn,!1)),vn(t,a),((Ct&2)===0||t!==Ht)&&(t===Ht&&((Ct&2)===0&&(yr|=a),Jt===4&&za(t,gt,Qn,!1)),Ni(t))}function Vg(t,n,a){if((Ct&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||nt(t,n),c=o?Dy(t,n):Gf(t,n,!0),d=o;do{if(c===0){rs&&!o&&za(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!Cy(a)){c=Gf(t,n,!1),d=!1;continue}if(c===2){if(d=n,t.errorRecoveryDisabledLanes&d)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var T=t;c=Eo;var I=T.current.memoizedState.isDehydrated;if(I&&(ls(T,y).flags|=256),y=Gf(T,y,!1),y!==2){if(Of&&!I){T.errorRecoveryDisabledLanes|=d,yr|=d,c=4;break e}d=Hn,Hn=c,d!==null&&(Hn===null?Hn=d:Hn.push.apply(Hn,d))}c=y}if(d=!1,c!==2)continue}}if(c===1){ls(t,0),za(t,n,0,!0);break}e:{switch(o=t,d=c,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:za(o,n,Qn,!La);break e;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=kl+300-he(),10<c)){if(za(o,n,Qn,!La),Ue(o,0,!0)!==0)break e;ia=n,o.timeoutHandle=x_(kg.bind(null,o,a,Hn,Wl,zf,n,Qn,yr,ss,La,d,"Throttled",-0,0),c);break e}kg(o,a,Hn,Wl,zf,n,Qn,yr,ss,La,d,null,-0,0)}}break}while(!0);Ni(t)}function kg(t,n,a,o,c,d,y,T,I,te,fe,ye,ne,oe){if(t.timeoutHandle=-1,ye=n.subtreeFlags,ye&8192||(ye&16785408)===16785408){ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Vi},Pg(n,d,ye);var Fe=(d&62914560)===d?kl-he():(d&4194048)===d?Fg-he():0;if(Fe=dS(ye,Fe),Fe!==null){ia=d,t.cancelPendingCommit=Fe(Qg.bind(null,t,n,d,a,o,c,y,T,I,fe,ye,null,ne,oe)),za(t,d,y,!te);return}}Qg(t,n,d,a,o,c,y,T,I)}function Cy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],d=c.getSnapshot;c=c.value;try{if(!qn(d(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function za(t,n,a,o){n&=~Pf,n&=~yr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var d=31-tt(c),y=1<<d;o[d]=-1,c&=~y}a!==0&&Vs(t,a,n)}function ql(){return(Ct&6)===0?(To(0),!1):!0}function Hf(){if(ht!==null){if(Ut===0)var t=ht.return;else t=ht,qi=fr=null,tf(t),Jr=null,so=0,t=ht;for(;t!==null;)yg(t.alternate,t),t=t.return;ht=null}}function ls(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Yy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ia=0,Hf(),Ht=t,ht=a=Xi(t.current,null),gt=n,Ut=0,Kn=null,La=!1,rs=nt(t,n),Of=!1,ss=Qn=Pf=yr=Na=Jt=0,Hn=Eo=null,zf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-tt(o),d=1<<c;n|=t[c],o&=~d}return na=n,hl(),a}function Xg(t,n){ot=null,B.H=mo,n===Qr||n===Sl?(n=sm(),Ut=3):n===kc?(n=sm(),Ut=4):Ut=n===vf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,ht===null&&(Jt=1,Pl(t,ii(n,t.current)))}function Wg(){var t=Yn.current;return t===null?!0:(gt&4194048)===gt?oi===null:(gt&62914560)===gt||(gt&536870912)!==0?t===oi:!1}function qg(){var t=B.H;return B.H=mo,t===null?mo:t}function jg(){var t=B.A;return B.A=Ay,t}function jl(){Jt=4,La||(gt&4194048)!==gt&&Yn.current!==null||(rs=!0),(Na&134217727)===0&&(yr&134217727)===0||Ht===null||za(Ht,gt,Qn,!1)}function Gf(t,n,a){var o=Ct;Ct|=2;var c=qg(),d=jg();(Ht!==t||gt!==n)&&(Wl=null,ls(t,n)),n=!1;var y=Jt;e:do try{if(Ut!==0&&ht!==null){var T=ht,I=Kn;switch(Ut){case 8:Hf(),y=6;break e;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var te=Ut;if(Ut=0,Kn=null,us(t,T,I,te),a&&rs){y=0;break e}break;default:te=Ut,Ut=0,Kn=null,us(t,T,I,te)}}wy(),y=Jt;break}catch(fe){Xg(t,fe)}while(!0);return n&&t.shellSuspendCounter++,qi=fr=null,Ct=o,B.H=c,B.A=d,ht===null&&(Ht=null,gt=0,hl()),y}function wy(){for(;ht!==null;)Yg(ht)}function Dy(t,n){var a=Ct;Ct|=2;var o=qg(),c=jg();Ht!==t||gt!==n?(Wl=null,Xl=he()+500,ls(t,n)):rs=nt(t,n);e:do try{if(Ut!==0&&ht!==null){n=ht;var d=Kn;t:switch(Ut){case 1:Ut=0,Kn=null,us(t,n,d,1);break;case 2:case 9:if(am(d)){Ut=0,Kn=null,Zg(n);break}n=function(){Ut!==2&&Ut!==9||Ht!==t||(Ut=7),Ni(t)},d.then(n,n);break e;case 3:Ut=7;break e;case 4:Ut=5;break e;case 7:am(d)?(Ut=0,Kn=null,Zg(n)):(Ut=0,Kn=null,us(t,n,d,7));break;case 5:var y=null;switch(ht.tag){case 26:y=ht.memoizedState;case 5:case 27:var T=ht;if(y?O_(y):T.stateNode.complete){Ut=0,Kn=null;var I=T.sibling;if(I!==null)ht=I;else{var te=T.return;te!==null?(ht=te,Yl(te)):ht=null}break t}}Ut=0,Kn=null,us(t,n,d,5);break;case 6:Ut=0,Kn=null,us(t,n,d,6);break;case 8:Hf(),Jt=6;break e;default:throw Error(r(462))}}Uy();break}catch(fe){Xg(t,fe)}while(!0);return qi=fr=null,B.H=o,B.A=c,Ct=a,ht!==null?0:(Ht=null,gt=0,hl(),Jt)}function Uy(){for(;ht!==null&&!A();)Yg(ht)}function Yg(t){var n=vg(t.alternate,t,na);t.memoizedProps=t.pendingProps,n===null?Yl(t):ht=n}function Zg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=dg(a,n,n.pendingProps,n.type,void 0,gt);break;case 11:n=dg(a,n,n.pendingProps,n.type.render,n.ref,gt);break;case 5:tf(n);default:yg(a,n),n=ht=jp(n,na),n=vg(a,n,na)}t.memoizedProps=t.pendingProps,n===null?Yl(t):ht=n}function us(t,n,a,o){qi=fr=null,tf(n),Jr=null,so=0;var c=n.return;try{if(xy(t,c,n,a,gt)){Jt=1,Pl(t,ii(a,t.current)),ht=null;return}}catch(d){if(c!==null)throw ht=c,d;Jt=1,Pl(t,ii(a,t.current)),ht=null;return}n.flags&32768?(yt||o===1?t=!0:rs||(gt&536870912)!==0?t=!1:(La=t=!0,(o===2||o===9||o===3||o===6)&&(o=Yn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Kg(n,t)):Yl(n)}function Yl(t){var n=t;do{if((n.flags&32768)!==0){Kg(n,La);return}t=n.return;var a=My(n.alternate,n,na);if(a!==null){ht=a;return}if(n=n.sibling,n!==null){ht=n;return}ht=n=t}while(n!==null);Jt===0&&(Jt=5)}function Kg(t,n){do{var a=Ey(t.alternate,t);if(a!==null){a.flags&=32767,ht=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ht=t;return}ht=t=a}while(t!==null);Jt=6,ht=null}function Qg(t,n,a,o,c,d,y,T,I){t.cancelPendingCommit=null;do Zl();while(dn!==0);if((Ct&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Cc,hi(t,a,d,y,T,I),t===Ht&&(ht=Ht=null,gt=0),os=n,Pa=t,ia=a,Bf=d,If=c,Hg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Py(we,function(){return n_(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,c=Q.p,Q.p=2,y=Ct,Ct|=4;try{by(t,n,a)}finally{Ct=y,Q.p=c,B.T=o}}dn=1,Jg(),$g(),e_()}}function Jg(){if(dn===1){dn=0;var t=Pa,n=os,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=Q.p;Q.p=2;var c=Ct;Ct|=4;try{Lg(n,t);var d=$f,y=Ip(t.containerInfo),T=d.focusedElem,I=d.selectionRange;if(y!==T&&T&&T.ownerDocument&&Bp(T.ownerDocument.documentElement,T)){if(I!==null&&Ec(T)){var te=I.start,fe=I.end;if(fe===void 0&&(fe=te),"selectionStart"in T)T.selectionStart=te,T.selectionEnd=Math.min(fe,T.value.length);else{var ye=T.ownerDocument||document,ne=ye&&ye.defaultView||window;if(ne.getSelection){var oe=ne.getSelection(),Fe=T.textContent.length,Je=Math.min(I.start,Fe),Bt=I.end===void 0?Je:Math.min(I.end,Fe);!oe.extend&&Je>Bt&&(y=Bt,Bt=Je,Je=y);var Y=zp(T,Je),V=zp(T,Bt);if(Y&&V&&(oe.rangeCount!==1||oe.anchorNode!==Y.node||oe.anchorOffset!==Y.offset||oe.focusNode!==V.node||oe.focusOffset!==V.offset)){var ee=ye.createRange();ee.setStart(Y.node,Y.offset),oe.removeAllRanges(),Je>Bt?(oe.addRange(ee),oe.extend(V.node,V.offset)):(ee.setEnd(V.node,V.offset),oe.addRange(ee))}}}}for(ye=[],oe=T;oe=oe.parentNode;)oe.nodeType===1&&ye.push({element:oe,left:oe.scrollLeft,top:oe.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ye.length;T++){var _e=ye[T];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}ou=!!Jf,$f=Jf=null}finally{Ct=c,Q.p=o,B.T=a}}t.current=n,dn=2}}function $g(){if(dn===2){dn=0;var t=Pa,n=os,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=Q.p;Q.p=2;var c=Ct;Ct|=4;try{Rg(t,n.alternate,n)}finally{Ct=c,Q.p=o,B.T=a}}dn=3}}function e_(){if(dn===4||dn===3){dn=0,ie();var t=Pa,n=os,a=ia,o=Hg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,os=Pa=null,t_(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Oa=null),zr(a),n=n.stateNode,Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(Ze,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,c=Q.p,Q.p=2,B.T=null;try{for(var d=t.onRecoverableError,y=0;y<o.length;y++){var T=o[y];d(T.value,{componentStack:T.stack})}}finally{B.T=n,Q.p=c}}(ia&3)!==0&&Zl(),Ni(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===Ff?bo++:(bo=0,Ff=t):bo=0,To(0)}}function t_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ao(n)))}function Zl(){return Jg(),$g(),e_(),n_()}function n_(){if(dn!==5)return!1;var t=Pa,n=Bf;Bf=0;var a=zr(ia),o=B.T,c=Q.p;try{Q.p=32>a?32:a,B.T=null,a=If,If=null;var d=Pa,y=ia;if(dn=0,os=Pa=null,ia=0,(Ct&6)!==0)throw Error(r(331));var T=Ct;if(Ct|=4,Bg(d.current),Og(d,d.current,y,a),Ct=T,To(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(Ze,d)}catch{}return!0}finally{Q.p=c,B.T=o,t_(t,n)}}function i_(t,n,a){n=ii(a,n),n=_f(t.stateNode,n,2),t=Ca(t,n,2),t!==null&&(vn(t,2),Ni(t))}function Lt(t,n,a){if(t.tag===3)i_(t,t,a);else for(;n!==null;){if(n.tag===3){i_(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Oa===null||!Oa.has(o))){t=ii(a,t),a=ag(2),o=Ca(n,a,2),o!==null&&(rg(a,o,n,t),vn(o,2),Ni(o));break}}n=n.return}}function Vf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Ry;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Of=!0,c.add(a),t=Ly.bind(null,t,n,a),n.then(t,t))}function Ly(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ht===t&&(gt&a)===a&&(Jt===4||Jt===3&&(gt&62914560)===gt&&300>he()-kl?(Ct&2)===0&&ls(t,0):Pf|=a,ss===gt&&(ss=0)),Ni(t)}function a_(t,n){n===0&&(n=cn()),t=lr(t,n),t!==null&&(vn(t,n),Ni(t))}function Ny(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),a_(t,a)}function Oy(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),a_(t,a)}function Py(t,n){return ke(t,n)}var Kl=null,cs=null,kf=!1,Ql=!1,Xf=!1,Ba=0;function Ni(t){t!==cs&&t.next===null&&(cs===null?Kl=cs=t:cs=cs.next=t),Ql=!0,kf||(kf=!0,By())}function To(t,n){if(!Xf&&Ql){Xf=!0;do for(var a=!1,o=Kl;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var d=0;else{var y=o.suspendedLanes,T=o.pingedLanes;d=(1<<31-tt(42|t)+1)-1,d&=c&~(y&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,l_(o,d))}else d=gt,d=Ue(o,o===Ht?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||nt(o,d)||(a=!0,l_(o,d));o=o.next}while(a);Xf=!1}}function zy(){r_()}function r_(){Ql=kf=!1;var t=0;Ba!==0&&jy()&&(t=Ba);for(var n=he(),a=null,o=Kl;o!==null;){var c=o.next,d=s_(o,n);d===0?(o.next=null,a===null?Kl=c:a.next=c,c===null&&(cs=a)):(a=o,(t!==0||(d&3)!==0)&&(Ql=!0)),o=c}dn!==0&&dn!==5||To(t),Ba!==0&&(Ba=0)}function s_(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var y=31-tt(d),T=1<<y,I=c[y];I===-1?((T&a)===0||(T&o)!==0)&&(c[y]=qt(T,n)):I<=n&&(t.expiredLanes|=T),d&=~T}if(n=Ht,a=gt,a=Ue(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ut===2||Ut===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&L(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||nt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&L(o),zr(a)){case 2:case 8:a=Ge;break;case 32:a=we;break;case 268435456:a=$e;break;default:a=we}return o=o_.bind(null,t),a=ke(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&L(o),t.callbackPriority=2,t.callbackNode=null,2}function o_(t,n){if(dn!==0&&dn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Zl()&&t.callbackNode!==a)return null;var o=gt;return o=Ue(t,t===Ht?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Vg(t,o,n),s_(t,he()),t.callbackNode!=null&&t.callbackNode===a?o_.bind(null,t):null)}function l_(t,n){if(Zl())return null;Vg(t,n,!0)}function By(){Zy(function(){(Ct&6)!==0?ke(ve,zy):r_()})}function Wf(){if(Ba===0){var t=Zr;t===0&&(t=De,De<<=1,(De&261888)===0&&(De=256)),Ba=t}return Ba}function u_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:rl(""+t)}function c_(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Iy(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var d=u_((c[xn]||null).action),y=o.submitter;y&&(n=(n=y[xn]||null)?u_(n.formAction):y.getAttribute("formAction"),n!==null&&(d=n,y=null));var T=new ul("action","action",null,o,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ba!==0){var I=y?c_(c,y):new FormData(c);ff(a,{pending:!0,data:I,method:c.method,action:d},null,I)}}else typeof d=="function"&&(T.preventDefault(),I=y?c_(c,y):new FormData(c),ff(a,{pending:!0,data:I,method:c.method,action:d},d,I))},currentTarget:c}]})}}for(var qf=0;qf<Rc.length;qf++){var jf=Rc[qf],Fy=jf.toLowerCase(),Hy=jf[0].toUpperCase()+jf.slice(1);gi(Fy,"on"+Hy)}gi(Gp,"onAnimationEnd"),gi(Vp,"onAnimationIteration"),gi(kp,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi(ny,"onTransitionRun"),gi(iy,"onTransitionStart"),gi(ay,"onTransitionCancel"),gi(Xp,"onTransitionEnd"),ze("onMouseEnter",["mouseout","mouseover"]),ze("onMouseLeave",["mouseout","mouseover"]),ze("onPointerEnter",["pointerout","pointerover"]),ze("onPointerLeave",["pointerout","pointerover"]),Oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ao));function f_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var y=o.length-1;0<=y;y--){var T=o[y],I=T.instance,te=T.currentTarget;if(T=T.listener,I!==d&&c.isPropagationStopped())break e;d=T,c.currentTarget=te;try{d(c)}catch(fe){dl(fe)}c.currentTarget=null,d=I}else for(y=0;y<o.length;y++){if(T=o[y],I=T.instance,te=T.currentTarget,T=T.listener,I!==d&&c.isPropagationStopped())break e;d=T,c.currentTarget=te;try{d(c)}catch(fe){dl(fe)}c.currentTarget=null,d=I}}}}function pt(t,n){var a=n[Ws];a===void 0&&(a=n[Ws]=new Set);var o=t+"__bubble";a.has(o)||(d_(n,t,2,!1),a.add(o))}function Yf(t,n,a){var o=0;n&&(o|=4),d_(a,t,o,n)}var Jl="_reactListening"+Math.random().toString(36).slice(2);function Zf(t){if(!t[Jl]){t[Jl]=!0,Ae.forEach(function(a){a!=="selectionchange"&&(Gy.has(a)||Yf(a,!1,t),Yf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Jl]||(n[Jl]=!0,Yf("selectionchange",!1,n))}}function d_(t,n,a,o){switch(G_(n)){case 2:var c=mS;break;case 8:c=gS;break;default:c=cd}a=c.bind(null,n,a,t),c=void 0,!pc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Kf(t,n,a,o,c){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var T=o.stateNode.containerInfo;if(T===c)break;if(y===4)for(y=o.return;y!==null;){var I=y.tag;if((I===3||I===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;T!==null;){if(y=R(T),y===null)return;if(I=y.tag,I===5||I===6||I===26||I===27){o=d=y;continue e}T=T.parentNode}}o=o.return}_p(function(){var te=d,fe=dc(a),ye=[];e:{var ne=Wp.get(t);if(ne!==void 0){var oe=ul,Fe=t;switch(t){case"keypress":if(ol(a)===0)break e;case"keydown":case"keyup":oe=Ox;break;case"focusin":Fe="focus",oe=vc;break;case"focusout":Fe="blur",oe=vc;break;case"beforeblur":case"afterblur":oe=vc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=Mx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=Bx;break;case Gp:case Vp:case kp:oe=Tx;break;case Xp:oe=Fx;break;case"scroll":case"scrollend":oe=yx;break;case"wheel":oe=Gx;break;case"copy":case"cut":case"paste":oe=Rx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=Mp;break;case"toggle":case"beforetoggle":oe=kx}var Je=(n&4)!==0,Bt=!Je&&(t==="scroll"||t==="scrollend"),Y=Je?ne!==null?ne+"Capture":null:ne;Je=[];for(var V=te,ee;V!==null;){var _e=V;if(ee=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||ee===null||Y===null||(_e=js(V,Y),_e!=null&&Je.push(Ro(V,_e,ee))),Bt)break;V=V.return}0<Je.length&&(ne=new oe(ne,Fe,null,a,fe),ye.push({event:ne,listeners:Je}))}}if((n&7)===0){e:{if(ne=t==="mouseover"||t==="pointerover",oe=t==="mouseout"||t==="pointerout",ne&&a!==fc&&(Fe=a.relatedTarget||a.fromElement)&&(R(Fe)||Fe[Gi]))break e;if((oe||ne)&&(ne=fe.window===fe?fe:(ne=fe.ownerDocument)?ne.defaultView||ne.parentWindow:window,oe?(Fe=a.relatedTarget||a.toElement,oe=te,Fe=Fe?R(Fe):null,Fe!==null&&(Bt=u(Fe),Je=Fe.tag,Fe!==Bt||Je!==5&&Je!==27&&Je!==6)&&(Fe=null)):(oe=null,Fe=te),oe!==Fe)){if(Je=yp,_e="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Je=Mp,_e="onPointerLeave",Y="onPointerEnter",V="pointer"),Bt=oe==null?ne:ae(oe),ee=Fe==null?ne:ae(Fe),ne=new Je(_e,V+"leave",oe,a,fe),ne.target=Bt,ne.relatedTarget=ee,_e=null,R(fe)===te&&(Je=new Je(Y,V+"enter",Fe,a,fe),Je.target=ee,Je.relatedTarget=Bt,_e=Je),Bt=_e,oe&&Fe)t:{for(Je=Vy,Y=oe,V=Fe,ee=0,_e=Y;_e;_e=Je(_e))ee++;_e=0;for(var qe=V;qe;qe=Je(qe))_e++;for(;0<ee-_e;)Y=Je(Y),ee--;for(;0<_e-ee;)V=Je(V),_e--;for(;ee--;){if(Y===V||V!==null&&Y===V.alternate){Je=Y;break t}Y=Je(Y),V=Je(V)}Je=null}else Je=null;oe!==null&&h_(ye,ne,oe,Je,!1),Fe!==null&&Bt!==null&&h_(ye,Bt,Fe,Je,!0)}}e:{if(ne=te?ae(te):window,oe=ne.nodeName&&ne.nodeName.toLowerCase(),oe==="select"||oe==="input"&&ne.type==="file")var Tt=Dp;else if(Cp(ne))if(Up)Tt=$x;else{Tt=Qx;var He=Kx}else oe=ne.nodeName,!oe||oe.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?te&&cc(te.elementType)&&(Tt=Dp):Tt=Jx;if(Tt&&(Tt=Tt(t,te))){wp(ye,Tt,a,fe);break e}He&&He(t,ne,te),t==="focusout"&&te&&ne.type==="number"&&te.memoizedProps.value!=null&&An(ne,"number",ne.value)}switch(He=te?ae(te):window,t){case"focusin":(Cp(He)||He.contentEditable==="true")&&(Gr=He,bc=te,to=null);break;case"focusout":to=bc=Gr=null;break;case"mousedown":Tc=!0;break;case"contextmenu":case"mouseup":case"dragend":Tc=!1,Fp(ye,a,fe);break;case"selectionchange":if(ty)break;case"keydown":case"keyup":Fp(ye,a,fe)}var lt;if(yc)e:{switch(t){case"compositionstart":var _t="onCompositionStart";break e;case"compositionend":_t="onCompositionEnd";break e;case"compositionupdate":_t="onCompositionUpdate";break e}_t=void 0}else Hr?Ap(t,a)&&(_t="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(_t="onCompositionStart");_t&&(Ep&&a.locale!=="ko"&&(Hr||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&Hr&&(lt=vp()):(Sa=fe,mc="value"in Sa?Sa.value:Sa.textContent,Hr=!0)),He=$l(te,_t),0<He.length&&(_t=new Sp(_t,t,null,a,fe),ye.push({event:_t,listeners:He}),lt?_t.data=lt:(lt=Rp(a),lt!==null&&(_t.data=lt)))),(lt=Wx?qx(t,a):jx(t,a))&&(_t=$l(te,"onBeforeInput"),0<_t.length&&(He=new Sp("onBeforeInput","beforeinput",null,a,fe),ye.push({event:He,listeners:_t}),He.data=lt)),Iy(ye,t,te,a,fe)}f_(ye,n)})}function Ro(t,n,a){return{instance:t,listener:n,currentTarget:a}}function $l(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=js(t,a),c!=null&&o.unshift(Ro(t,c,d)),c=js(t,n),c!=null&&o.push(Ro(t,c,d))),t.tag===3)return o;t=t.return}return[]}function Vy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function h_(t,n,a,o,c){for(var d=n._reactName,y=[];a!==null&&a!==o;){var T=a,I=T.alternate,te=T.stateNode;if(T=T.tag,I!==null&&I===o)break;T!==5&&T!==26&&T!==27||te===null||(I=te,c?(te=js(a,d),te!=null&&y.unshift(Ro(a,te,I))):c||(te=js(a,d),te!=null&&y.push(Ro(a,te,I)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var ky=/\r\n?/g,Xy=/\u0000|\uFFFD/g;function p_(t){return(typeof t=="string"?t:""+t).replace(ky,`
`).replace(Xy,"")}function m_(t,n){return n=p_(n),p_(t)===n}function zt(t,n,a,o,c,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Pn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Pn(t,""+o);break;case"className":kt(t,"class",o);break;case"tabIndex":kt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":kt(t,a,o);break;case"style":mp(t,o,d);break;case"data":if(n!=="object"){kt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=rl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&zt(t,n,"name",c.name,c,null),zt(t,n,"formEncType",c.formEncType,c,null),zt(t,n,"formMethod",c.formMethod,c,null),zt(t,n,"formTarget",c.formTarget,c,null)):(zt(t,n,"encType",c.encType,c,null),zt(t,n,"method",c.method,c,null),zt(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=rl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Vi);break;case"onScroll":o!=null&&pt("scroll",t);break;case"onScrollEnd":o!=null&&pt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=rl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":pt("beforetoggle",t),pt("toggle",t),xt(t,"popover",o);break;case"xlinkActuate":bt(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":bt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":bt(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":bt(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":bt(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":bt(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":bt(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":bt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":bt(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":xt(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=vx.get(a)||a,xt(t,a,o))}}function Qf(t,n,a,o,c,d){switch(a){case"style":mp(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Pn(t,o):(typeof o=="number"||typeof o=="bigint")&&Pn(t,""+o);break;case"onScroll":o!=null&&pt("scroll",t);break;case"onScrollEnd":o!=null&&pt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Vi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Le.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),d=t[xn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,c),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):xt(t,a,o)}}}function bn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pt("error",t),pt("load",t);var o=!1,c=!1,d;for(d in a)if(a.hasOwnProperty(d)){var y=a[d];if(y!=null)switch(d){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:zt(t,n,d,y,a,null)}}c&&zt(t,n,"srcSet",a.srcSet,a,null),o&&zt(t,n,"src",a.src,a,null);return;case"input":pt("invalid",t);var T=d=y=c=null,I=null,te=null;for(o in a)if(a.hasOwnProperty(o)){var fe=a[o];if(fe!=null)switch(o){case"name":c=fe;break;case"type":y=fe;break;case"checked":I=fe;break;case"defaultChecked":te=fe;break;case"value":d=fe;break;case"defaultValue":T=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(r(137,n));break;default:zt(t,n,o,fe,a,null)}}Un(t,d,T,I,te,y,c,!1);return;case"select":pt("invalid",t),o=y=d=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":d=T;break;case"defaultValue":y=T;break;case"multiple":o=T;default:zt(t,n,c,T,a,null)}n=d,a=y,t.multiple=!!o,n!=null?Kt(t,!!o,n,!1):a!=null&&Kt(t,!!o,a,!0);return;case"textarea":pt("invalid",t),d=c=o=null;for(y in a)if(a.hasOwnProperty(y)&&(T=a[y],T!=null))switch(y){case"value":o=T;break;case"defaultValue":c=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:zt(t,n,y,T,a,null)}Br(t,o,c,d);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:zt(t,n,I,o,a,null)}return;case"dialog":pt("beforetoggle",t),pt("toggle",t),pt("cancel",t),pt("close",t);break;case"iframe":case"object":pt("load",t);break;case"video":case"audio":for(o=0;o<Ao.length;o++)pt(Ao[o],t);break;case"image":pt("error",t),pt("load",t);break;case"details":pt("toggle",t);break;case"embed":case"source":case"link":pt("error",t),pt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(o=a[te],o!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:zt(t,n,te,o,a,null)}return;default:if(cc(n)){for(fe in a)a.hasOwnProperty(fe)&&(o=a[fe],o!==void 0&&Qf(t,n,fe,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&zt(t,n,T,o,a,null))}function Wy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,y=null,T=null,I=null,te=null,fe=null;for(oe in a){var ye=a[oe];if(a.hasOwnProperty(oe)&&ye!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":I=ye;default:o.hasOwnProperty(oe)||zt(t,n,oe,null,o,ye)}}for(var ne in o){var oe=o[ne];if(ye=a[ne],o.hasOwnProperty(ne)&&(oe!=null||ye!=null))switch(ne){case"type":d=oe;break;case"name":c=oe;break;case"checked":te=oe;break;case"defaultChecked":fe=oe;break;case"value":y=oe;break;case"defaultValue":T=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,n));break;default:oe!==ye&&zt(t,n,ne,oe,o,ye)}}Ot(t,y,T,I,te,fe,d,c);return;case"select":oe=y=T=ne=null;for(d in a)if(I=a[d],a.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":oe=I;default:o.hasOwnProperty(d)||zt(t,n,d,null,o,I)}for(c in o)if(d=o[c],I=a[c],o.hasOwnProperty(c)&&(d!=null||I!=null))switch(c){case"value":ne=d;break;case"defaultValue":T=d;break;case"multiple":y=d;default:d!==I&&zt(t,n,c,d,o,I)}n=T,a=y,o=oe,ne!=null?Kt(t,!!a,ne,!1):!!o!=!!a&&(n!=null?Kt(t,!!a,n,!0):Kt(t,!!a,a?[]:"",!1));return;case"textarea":oe=ne=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:zt(t,n,T,null,o,c)}for(y in o)if(c=o[y],d=a[y],o.hasOwnProperty(y)&&(c!=null||d!=null))switch(y){case"value":ne=c;break;case"defaultValue":oe=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==d&&zt(t,n,y,c,o,d)}yn(t,ne,oe);return;case"option":for(var Fe in a)if(ne=a[Fe],a.hasOwnProperty(Fe)&&ne!=null&&!o.hasOwnProperty(Fe))switch(Fe){case"selected":t.selected=!1;break;default:zt(t,n,Fe,null,o,ne)}for(I in o)if(ne=o[I],oe=a[I],o.hasOwnProperty(I)&&ne!==oe&&(ne!=null||oe!=null))switch(I){case"selected":t.selected=ne&&typeof ne!="function"&&typeof ne!="symbol";break;default:zt(t,n,I,ne,o,oe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Je in a)ne=a[Je],a.hasOwnProperty(Je)&&ne!=null&&!o.hasOwnProperty(Je)&&zt(t,n,Je,null,o,ne);for(te in o)if(ne=o[te],oe=a[te],o.hasOwnProperty(te)&&ne!==oe&&(ne!=null||oe!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(r(137,n));break;default:zt(t,n,te,ne,o,oe)}return;default:if(cc(n)){for(var Bt in a)ne=a[Bt],a.hasOwnProperty(Bt)&&ne!==void 0&&!o.hasOwnProperty(Bt)&&Qf(t,n,Bt,void 0,o,ne);for(fe in o)ne=o[fe],oe=a[fe],!o.hasOwnProperty(fe)||ne===oe||ne===void 0&&oe===void 0||Qf(t,n,fe,ne,o,oe);return}}for(var Y in a)ne=a[Y],a.hasOwnProperty(Y)&&ne!=null&&!o.hasOwnProperty(Y)&&zt(t,n,Y,null,o,ne);for(ye in o)ne=o[ye],oe=a[ye],!o.hasOwnProperty(ye)||ne===oe||ne==null&&oe==null||zt(t,n,ye,ne,o,oe)}function g_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function qy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],d=c.transferSize,y=c.initiatorType,T=c.duration;if(d&&T&&g_(y)){for(y=0,T=c.responseEnd,o+=1;o<a.length;o++){var I=a[o],te=I.startTime;if(te>T)break;var fe=I.transferSize,ye=I.initiatorType;fe&&g_(ye)&&(I=I.responseEnd,y+=fe*(I<T?1:(T-te)/(I-te)))}if(--o,n+=8*(d+y)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Jf=null,$f=null;function eu(t){return t.nodeType===9?t:t.ownerDocument}function __(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function v_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ed(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var td=null;function jy(){var t=window.event;return t&&t.type==="popstate"?t===td?!1:(td=t,!0):(td=null,!1)}var x_=typeof setTimeout=="function"?setTimeout:void 0,Yy=typeof clearTimeout=="function"?clearTimeout:void 0,y_=typeof Promise=="function"?Promise:void 0,Zy=typeof queueMicrotask=="function"?queueMicrotask:typeof y_<"u"?function(t){return y_.resolve(null).then(t).catch(Ky)}:x_;function Ky(t){setTimeout(function(){throw t})}function Ia(t){return t==="head"}function S_(t,n){var a=n,o=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(c),ps(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Co(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Co(a);for(var d=a.firstChild;d;){var y=d.nextSibling,T=d.nodeName;d[ar]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=y}}else a==="body"&&Co(t.ownerDocument.body);a=c}while(a);ps(n)}function M_(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function nd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":nd(a),qs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Qy(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ar])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=li(t.nextSibling),t===null)break}return null}function Jy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=li(t.nextSibling),t===null))return null;return t}function E_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=li(t.nextSibling),t===null))return null;return t}function id(t){return t.data==="$?"||t.data==="$~"}function ad(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function $y(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function li(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var rd=null;function b_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return li(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function T_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function A_(t,n,a){switch(n=eu(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Co(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);qs(t)}var ui=new Map,R_=new Set;function tu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var aa=Q.d;Q.d={f:eS,r:tS,D:nS,C:iS,L:aS,m:rS,X:oS,S:sS,M:lS};function eS(){var t=aa.f(),n=ql();return t||n}function tS(t){var n=j(t);n!==null&&n.tag===5&&n.type==="form"?Xm(n):aa.r(t)}var fs=typeof document>"u"?null:document;function C_(t,n,a){var o=fs;if(o&&typeof n=="string"&&n){var c=mn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),R_.has(c)||(R_.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),bn(n,"link",t),X(n),o.head.appendChild(n)))}}function nS(t){aa.D(t),C_("dns-prefetch",t,null)}function iS(t,n){aa.C(t,n),C_("preconnect",t,n)}function aS(t,n,a){aa.L(t,n,a);var o=fs;if(o&&t&&n){var c='link[rel="preload"][as="'+mn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+mn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+mn(a.imageSizes)+'"]')):c+='[href="'+mn(t)+'"]';var d=c;switch(n){case"style":d=ds(t);break;case"script":d=hs(t)}ui.has(d)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ui.set(d,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(wo(d))||n==="script"&&o.querySelector(Do(d))||(n=o.createElement("link"),bn(n,"link",t),X(n),o.head.appendChild(n)))}}function rS(t,n){aa.m(t,n);var a=fs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+mn(o)+'"][href="'+mn(t)+'"]',d=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=hs(t)}if(!ui.has(d)&&(t=_({rel:"modulepreload",href:t},n),ui.set(d,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Do(d)))return}o=a.createElement("link"),bn(o,"link",t),X(o),a.head.appendChild(o)}}}function sS(t,n,a){aa.S(t,n,a);var o=fs;if(o&&t){var c=re(o).hoistableStyles,d=ds(t);n=n||"default";var y=c.get(d);if(!y){var T={loading:0,preload:null};if(y=o.querySelector(wo(d)))T.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ui.get(d))&&sd(t,a);var I=y=o.createElement("link");X(I),bn(I,"link",t),I._p=new Promise(function(te,fe){I.onload=te,I.onerror=fe}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,nu(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:T},c.set(d,y)}}}function oS(t,n){aa.X(t,n);var a=fs;if(a&&t){var o=re(a).hoistableScripts,c=hs(t),d=o.get(c);d||(d=a.querySelector(Do(c)),d||(t=_({src:t,async:!0},n),(n=ui.get(c))&&od(t,n),d=a.createElement("script"),X(d),bn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function lS(t,n){aa.M(t,n);var a=fs;if(a&&t){var o=re(a).hoistableScripts,c=hs(t),d=o.get(c);d||(d=a.querySelector(Do(c)),d||(t=_({src:t,async:!0,type:"module"},n),(n=ui.get(c))&&od(t,n),d=a.createElement("script"),X(d),bn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function w_(t,n,a,o){var c=(c=Te.current)?tu(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ds(a.href),a=re(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ds(a.href);var d=re(c).hoistableStyles,y=d.get(t);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,y),(d=c.querySelector(wo(t)))&&!d._p&&(y.instance=d,y.state.loading=5),ui.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(t,a),d||uS(c,t,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=hs(a),a=re(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ds(t){return'href="'+mn(t)+'"'}function wo(t){return'link[rel="stylesheet"]['+t+"]"}function D_(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function uS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),bn(n,"link",a),X(n),t.head.appendChild(n))}function hs(t){return'[src="'+mn(t)+'"]'}function Do(t){return"script[async]"+t}function U_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+mn(a.href)+'"]');if(o)return n.instance=o,X(o),o;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),X(o),bn(o,"style",c),nu(o,a.precedence,t),n.instance=o;case"stylesheet":c=ds(a.href);var d=t.querySelector(wo(c));if(d)return n.state.loading|=4,n.instance=d,X(d),d;o=D_(a),(c=ui.get(c))&&sd(o,c),d=(t.ownerDocument||t).createElement("link"),X(d);var y=d;return y._p=new Promise(function(T,I){y.onload=T,y.onerror=I}),bn(d,"link",o),n.state.loading|=4,nu(d,a.precedence,t),n.instance=d;case"script":return d=hs(a.src),(c=t.querySelector(Do(d)))?(n.instance=c,X(c),c):(o=a,(c=ui.get(d))&&(o=_({},a),od(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),X(c),bn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,nu(o,a.precedence,t));return n.instance}function nu(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,d=c,y=0;y<o.length;y++){var T=o[y];if(T.dataset.precedence===n)d=T;else if(d!==c)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function sd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function od(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var iu=null;function L_(t,n,a){if(iu===null){var o=new Map,c=iu=new Map;c.set(a,o)}else c=iu,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var d=a[c];if(!(d[ar]||d[Zt]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(n)||"";y=t+y;var T=o.get(y);T?T.push(d):o.set(y,[d])}}return o}function N_(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function cS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function O_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function fS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=ds(o.href),d=n.querySelector(wo(c));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=au.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,X(d);return}d=n.ownerDocument||n,o=D_(o),(c=ui.get(c))&&sd(o,c),d=d.createElement("link"),X(d);var y=d;y._p=new Promise(function(T,I){y.onload=T,y.onerror=I}),bn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=au.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ld=0;function dS(t,n){return t.stylesheets&&t.count===0&&su(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&su(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&ld===0&&(ld=62500*qy());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&su(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>ld?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function au(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)su(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ru=null;function su(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ru=new Map,n.forEach(hS,t),ru=null,au.call(t))}function hS(t,n){if(!(n.state.loading&4)){var a=ru.get(t);if(a)var o=a.get(null);else{a=new Map,ru.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var y=c[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}c=n.instance,y=c.getAttribute("data-precedence"),d=a.get(y)||o,d===o&&a.set(null,c),a.set(y,c),this.count++,o=au.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),d?d.parentNode.insertBefore(c,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Uo={$$typeof:U,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function pS(t,n,a,o,c,d,y,T,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function P_(t,n,a,o,c,d,y,T,I,te,fe,ye){return t=new pS(t,n,a,y,I,te,fe,ye,T),n=1,d===!0&&(n|=24),d=jn(3,null,null,n),t.current=d,d.stateNode=t,n=Hc(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Xc(d),t}function z_(t){return t?(t=Xr,t):Xr}function B_(t,n,a,o,c,d){c=z_(c),o.context===null?o.context=c:o.pendingContext=c,o=Ra(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ca(t,o,n),a!==null&&(Gn(a,t,n),lo(a,t,n))}function I_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ud(t,n){I_(t,n),(t=t.alternate)&&I_(t,n)}function F_(t){if(t.tag===13||t.tag===31){var n=lr(t,67108864);n!==null&&Gn(n,t,67108864),ud(t,67108864)}}function H_(t){if(t.tag===13||t.tag===31){var n=Jn();n=nr(n);var a=lr(t,n);a!==null&&Gn(a,t,n),ud(t,n)}}var ou=!0;function mS(t,n,a,o){var c=B.T;B.T=null;var d=Q.p;try{Q.p=2,cd(t,n,a,o)}finally{Q.p=d,B.T=c}}function gS(t,n,a,o){var c=B.T;B.T=null;var d=Q.p;try{Q.p=8,cd(t,n,a,o)}finally{Q.p=d,B.T=c}}function cd(t,n,a,o){if(ou){var c=fd(o);if(c===null)Kf(t,n,o,lu,a),V_(t,o);else if(vS(c,t,n,a,o))o.stopPropagation();else if(V_(t,o),n&4&&-1<_S.indexOf(t)){for(;c!==null;){var d=j(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=Ce(d.pendingLanes);if(y!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;y;){var I=1<<31-tt(y);T.entanglements[1]|=I,y&=~I}Ni(d),(Ct&6)===0&&(Xl=he()+500,To(0))}}break;case 31:case 13:T=lr(d,2),T!==null&&Gn(T,d,2),ql(),ud(d,2)}if(d=fd(o),d===null&&Kf(t,n,o,lu,a),d===c)break;c=d}c!==null&&o.stopPropagation()}else Kf(t,n,o,null,a)}}function fd(t){return t=dc(t),dd(t)}var lu=null;function dd(t){if(lu=null,t=R(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return lu=t,null}function G_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(be()){case ve:return 2;case Ge:return 8;case we:case Qe:return 32;case $e:return 268435456;default:return 32}default:return 32}}var hd=!1,Fa=null,Ha=null,Ga=null,Lo=new Map,No=new Map,Va=[],_S="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function V_(t,n){switch(t){case"focusin":case"focusout":Fa=null;break;case"dragenter":case"dragleave":Ha=null;break;case"mouseover":case"mouseout":Ga=null;break;case"pointerover":case"pointerout":Lo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(n.pointerId)}}function Oo(t,n,a,o,c,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[c]},n!==null&&(n=j(n),n!==null&&F_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function vS(t,n,a,o,c){switch(n){case"focusin":return Fa=Oo(Fa,t,n,a,o,c),!0;case"dragenter":return Ha=Oo(Ha,t,n,a,o,c),!0;case"mouseover":return Ga=Oo(Ga,t,n,a,o,c),!0;case"pointerover":var d=c.pointerId;return Lo.set(d,Oo(Lo.get(d)||null,t,n,a,o,c)),!0;case"gotpointercapture":return d=c.pointerId,No.set(d,Oo(No.get(d)||null,t,n,a,o,c)),!0}return!1}function k_(t){var n=R(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,ir(t.priority,function(){H_(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,ir(t.priority,function(){H_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=fd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);fc=o,a.target.dispatchEvent(o),fc=null}else return n=j(a),n!==null&&F_(n),t.blockedOn=a,!1;n.shift()}return!0}function X_(t,n,a){uu(t)&&a.delete(n)}function xS(){hd=!1,Fa!==null&&uu(Fa)&&(Fa=null),Ha!==null&&uu(Ha)&&(Ha=null),Ga!==null&&uu(Ga)&&(Ga=null),Lo.forEach(X_),No.forEach(X_)}function cu(t,n){t.blockedOn===n&&(t.blockedOn=null,hd||(hd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,xS)))}var fu=null;function W_(t){fu!==t&&(fu=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){fu===t&&(fu=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(dd(o||a)===null)continue;break}var d=j(a);d!==null&&(t.splice(n,3),n-=3,ff(d,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function ps(t){function n(I){return cu(I,t)}Fa!==null&&cu(Fa,t),Ha!==null&&cu(Ha,t),Ga!==null&&cu(Ga,t),Lo.forEach(n),No.forEach(n);for(var a=0;a<Va.length;a++){var o=Va[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Va.length&&(a=Va[0],a.blockedOn===null);)k_(a),a.blockedOn===null&&Va.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],d=a[o+1],y=c[xn]||null;if(typeof d=="function")y||W_(a);else if(y){var T=null;if(d&&d.hasAttribute("formAction")){if(c=d,y=d[xn]||null)T=y.formAction;else if(dd(c)!==null)continue}else T=y.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),W_(a)}}}function q_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return c=y})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function pd(t){this._internalRoot=t}du.prototype.render=pd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Jn();B_(a,o,t,n,null,null)},du.prototype.unmount=pd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;B_(t.current,2,null,t,null,null),ql(),n[Gi]=null}};function du(t){this._internalRoot=t}du.prototype.unstable_scheduleHydration=function(t){if(t){var n=Xs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Va.length&&n!==0&&n<Va[a].priority;a++);Va.splice(a,0,t),a===0&&k_(t)}};var j_=e.version;if(j_!=="19.2.4")throw Error(r(527,j_,"19.2.4"));Q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var yS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hu.isDisabled&&hu.supportsFiber)try{Ze=hu.inject(yS),Ve=hu}catch{}}return zo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",c=eg,d=tg,y=ng;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=P_(t,1,!1,null,null,a,o,null,c,d,y,q_),t[Gi]=n.current,Zf(t),new pd(n)},zo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,c="",d=eg,y=tg,T=ng,I=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=P_(t,1,!0,n,a??null,o,c,I,d,y,T,q_),n.context=z_(null),a=n.current,o=Jn(),o=nr(o),c=Ra(o),c.callback=null,Ca(a,c,o),a=o,n.current.lanes=a,vn(n,a),Ni(n),t[Gi]=n.current,Zf(t),new du(n)},zo.version="19.2.4",zo}var iv;function DS(){if(iv)return _d.exports;iv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),_d.exports=wS(),_d.exports}var US=DS();const LS=p0(US);/**
 * react-router v7.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var av="popstate";function rv(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function NS(s={}){function e(r,l){var m;let u=(m=l.state)==null?void 0:m.masked,{pathname:f,search:h,hash:p}=u||r.location;return nh("",{pathname:f,search:h,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default",u?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function i(r,l){return typeof l=="string"?l:Xo(l)}return PS(e,i,null,s)}function Yt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Ri(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function OS(){return Math.random().toString(36).substring(2,10)}function sv(s,e){return{usr:s.state,key:s.key,idx:e,masked:s.unstable_mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function nh(s,e,i=null,r,l){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Bs(e):e,state:i,key:e&&e.key||r||OS(),unstable_mask:l}}function Xo({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Bs(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function PS(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,f=l.history,h="POP",p=null,m=g();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function g(){return(f.state||{idx:null}).idx}function _(){h="POP";let S=g(),v=S==null?null:S-m;m=S,p&&p({action:h,location:b.location,delta:v})}function x(S,v){h="PUSH";let P=rv(S)?S:nh(b.location,S,v);m=g()+1;let U=sv(P,m),D=b.createHref(P.unstable_mask||P);try{f.pushState(U,"",D)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;l.location.assign(D)}u&&p&&p({action:h,location:b.location,delta:1})}function M(S,v){h="REPLACE";let P=rv(S)?S:nh(b.location,S,v);m=g();let U=sv(P,m),D=b.createHref(P.unstable_mask||P);f.replaceState(U,"",D),u&&p&&p({action:h,location:b.location,delta:0})}function E(S){return zS(S)}let b={get action(){return h},get location(){return s(l,f)},listen(S){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(av,_),p=S,()=>{l.removeEventListener(av,_),p=null}},createHref(S){return e(l,S)},createURL:E,encodeLocation(S){let v=E(S);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:x,replace:M,go(S){return f.go(S)}};return b}function zS(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Yt(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Xo(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function m0(s,e,i="/"){return BS(s,e,i,!1)}function BS(s,e,i,r){let l=typeof e=="string"?Bs(e):e,u=_a(l.pathname||"/",i);if(u==null)return null;let f=g0(s);IS(f);let h=null;for(let p=0;h==null&&p<f.length;++p){let m=ZS(u);h=jS(f[p],m,r)}return h}function g0(s,e=[],i=[],r="",l=!1){let u=(f,h,p=l,m)=>{let g={relativePath:m===void 0?f.path||"":m,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&p)return;Yt(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let _=Ii([r,g.relativePath]),x=i.concat(g);f.children&&f.children.length>0&&(Yt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),g0(f.children,e,x,_,p)),!(f.path==null&&!f.index)&&e.push({path:_,score:WS(_,f.index),routesMeta:x})};return s.forEach((f,h)=>{var p;if(f.path===""||!((p=f.path)!=null&&p.includes("?")))u(f,h);else for(let m of _0(f.path))u(f,h,!0,m)}),e}function _0(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let f=_0(r.join("/")),h=[];return h.push(...f.map(p=>p===""?u:[u,p].join("/"))),l&&h.push(...f),h.map(p=>s.startsWith("/")&&p===""?"/":p)}function IS(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:qS(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var FS=/^:[\w-]+$/,HS=3,GS=2,VS=1,kS=10,XS=-2,ov=s=>s==="*";function WS(s,e){let i=s.split("/"),r=i.length;return i.some(ov)&&(r+=XS),e&&(r+=GS),i.filter(l=>!ov(l)).reduce((l,u)=>l+(FS.test(u)?HS:u===""?VS:kS),r)}function qS(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function jS(s,e,i=!1){let{routesMeta:r}=s,l={},u="/",f=[];for(let h=0;h<r.length;++h){let p=r[h],m=h===r.length-1,g=u==="/"?e:e.slice(u.length)||"/",_=Yu({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),x=p.route;if(!_&&m&&i&&!r[r.length-1].route.index&&(_=Yu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!_)return null;Object.assign(l,_.params),f.push({params:l,pathname:Ii([u,_.pathname]),pathnameBase:$S(Ii([u,_.pathnameBase])),route:x}),_.pathnameBase!=="/"&&(u=Ii([u,_.pathnameBase]))}return f}function Yu(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=YS(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((m,{paramName:g,isOptional:_},x)=>{if(g==="*"){let E=h[x]||"";f=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const M=h[x];return _&&!M?m[g]=void 0:m[g]=(M||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:f,pattern:s}}function YS(s,e=!1,i=!0){Ri(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,p,m,g)=>{if(r.push({paramName:h,isOptional:p!=null}),p){let _=g.charAt(m+f.length);return _&&_!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function ZS(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ri(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function _a(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var KS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function QS(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Bs(s):s,u;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?u=lv(i.substring(1),"/"):u=lv(i,e)):u=e,{pathname:u,search:eM(r),hash:tM(l)}}function lv(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Sd(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function JS(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Zh(s){let e=JS(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function ec(s,e,i,r=!1){let l;typeof s=="string"?l=Bs(s):(l={...s},Yt(!l.pathname||!l.pathname.includes("?"),Sd("?","pathname","search",l)),Yt(!l.pathname||!l.pathname.includes("#"),Sd("#","pathname","hash",l)),Yt(!l.search||!l.search.includes("#"),Sd("#","search","hash",l)));let u=s===""||l.pathname==="",f=u?"/":l.pathname,h;if(f==null)h=i;else{let _=e.length-1;if(!r&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),_-=1;l.pathname=x.join("/")}h=_>=0?e[_]:"/"}let p=QS(l,h),m=f&&f!=="/"&&f.endsWith("/"),g=(u||f===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var Ii=s=>s.join("/").replace(/\/\/+/g,"/"),$S=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),eM=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,tM=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,nM=class{constructor(s,e,i,r=!1){this.status=s,this.statusText=e||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function iM(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function aM(s){return s.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var v0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function x0(s,e){let i=s;if(typeof i!="string"||!KS.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let r=i,l=!1;if(v0)try{let u=new URL(window.location.href),f=i.startsWith("//")?new URL(u.protocol+i):new URL(i),h=_a(f.pathname,e);f.origin===u.origin&&h!=null?i=h+f.search+f.hash:l=!0}catch{Ri(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var y0=["POST","PUT","PATCH","DELETE"];new Set(y0);var rM=["GET",...y0];new Set(rM);var Is=J.createContext(null);Is.displayName="DataRouter";var tc=J.createContext(null);tc.displayName="DataRouterState";var S0=J.createContext(!1);function sM(){return J.useContext(S0)}var M0=J.createContext({isTransitioning:!1});M0.displayName="ViewTransition";var oM=J.createContext(new Map);oM.displayName="Fetchers";var lM=J.createContext(null);lM.displayName="Await";var ti=J.createContext(null);ti.displayName="Navigation";var Ko=J.createContext(null);Ko.displayName="Location";var Fi=J.createContext({outlet:null,matches:[],isDataRoute:!1});Fi.displayName="Route";var Kh=J.createContext(null);Kh.displayName="RouteError";var E0="REACT_ROUTER_ERROR",uM="REDIRECT",cM="ROUTE_ERROR_RESPONSE";function fM(s){if(s.startsWith(`${E0}:${uM}:{`))try{let e=JSON.parse(s.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function dM(s){if(s.startsWith(`${E0}:${cM}:{`))try{let e=JSON.parse(s.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new nM(e.status,e.statusText,e.data)}catch{}}function hM(s,{relative:e}={}){Yt(Fs(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=J.useContext(ti),{hash:l,pathname:u,search:f}=Qo(s,{relative:e}),h=u;return i!=="/"&&(h=u==="/"?i:Ii([i,u])),r.createHref({pathname:h,search:f,hash:l})}function Fs(){return J.useContext(Ko)!=null}function Ci(){return Yt(Fs(),"useLocation() may be used only in the context of a <Router> component."),J.useContext(Ko).location}var b0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function T0(s){J.useContext(ti).static||J.useLayoutEffect(s)}function A0(){let{isDataRoute:s}=J.useContext(Fi);return s?AM():pM()}function pM(){Yt(Fs(),"useNavigate() may be used only in the context of a <Router> component.");let s=J.useContext(Is),{basename:e,navigator:i}=J.useContext(ti),{matches:r}=J.useContext(Fi),{pathname:l}=Ci(),u=JSON.stringify(Zh(r)),f=J.useRef(!1);return T0(()=>{f.current=!0}),J.useCallback((p,m={})=>{if(Ri(f.current,b0),!f.current)return;if(typeof p=="number"){i.go(p);return}let g=ec(p,JSON.parse(u),l,m.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Ii([e,g.pathname])),(m.replace?i.replace:i.push)(g,m.state,m)},[e,i,u,l,s])}J.createContext(null);function Qo(s,{relative:e}={}){let{matches:i}=J.useContext(Fi),{pathname:r}=Ci(),l=JSON.stringify(Zh(i));return J.useMemo(()=>ec(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function mM(s,e){return R0(s,e)}function R0(s,e,i){var S;Yt(Fs(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=J.useContext(ti),{matches:l}=J.useContext(Fi),u=l[l.length-1],f=u?u.params:{},h=u?u.pathname:"/",p=u?u.pathnameBase:"/",m=u&&u.route;{let v=m&&m.path||"";w0(h,!m||v.endsWith("*")||v.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${v}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${v}"> to <Route path="${v==="/"?"*":`${v}/*`}">.`)}let g=Ci(),_;if(e){let v=typeof e=="string"?Bs(e):e;Yt(p==="/"||((S=v.pathname)==null?void 0:S.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${v.pathname}" was given in the \`location\` prop.`),_=v}else _=g;let x=_.pathname||"/",M=x;if(p!=="/"){let v=p.replace(/^\//,"").split("/");M="/"+x.replace(/^\//,"").split("/").slice(v.length).join("/")}let E=m0(s,{pathname:M});Ri(m||E!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),Ri(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let b=yM(E&&E.map(v=>Object.assign({},v,{params:Object.assign({},f,v.params),pathname:Ii([p,r.encodeLocation?r.encodeLocation(v.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?p:Ii([p,r.encodeLocation?r.encodeLocation(v.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:v.pathnameBase])})),l,i);return e&&b?J.createElement(Ko.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,..._},navigationType:"POP"}},b):b}function gM(){let s=TM(),e=iM(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=J.createElement(J.Fragment,null,J.createElement("p",null,"💿 Hey developer 👋"),J.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",J.createElement("code",{style:u},"ErrorBoundary")," or"," ",J.createElement("code",{style:u},"errorElement")," prop on your route.")),J.createElement(J.Fragment,null,J.createElement("h2",null,"Unexpected Application Error!"),J.createElement("h3",{style:{fontStyle:"italic"}},e),i?J.createElement("pre",{style:l},i):null,f)}var _M=J.createElement(gM,null),C0=class extends J.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const i=dM(s.digest);i&&(s=i)}let e=s!==void 0?J.createElement(Fi.Provider,{value:this.props.routeContext},J.createElement(Kh.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?J.createElement(vM,{error:s},e):e}};C0.contextType=S0;var Md=new WeakMap;function vM({children:s,error:e}){let{basename:i}=J.useContext(ti);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=fM(e.digest);if(r){let l=Md.get(e);if(l)throw l;let u=x0(r.location,i);if(v0&&!Md.get(e))if(u.isExternal||r.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:r.replace}));throw Md.set(e,f),f}return J.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return s}function xM({routeContext:s,match:e,children:i}){let r=J.useContext(Is);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),J.createElement(Fi.Provider,{value:s},i)}function yM(s,e=[],i){let r=i==null?void 0:i.state;if(s==null){if(!r)return null;if(r.errors)s=r.matches;else if(e.length===0&&!r.initialized&&r.matches.length>0)s=r.matches;else return null}let l=s,u=r==null?void 0:r.errors;if(u!=null){let g=l.findIndex(_=>_.route.id&&(u==null?void 0:u[_.route.id])!==void 0);Yt(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,g+1))}let f=!1,h=-1;if(i&&r){f=r.renderFallback;for(let g=0;g<l.length;g++){let _=l[g];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(h=g),_.route.id){let{loaderData:x,errors:M}=r,E=_.route.loader&&!x.hasOwnProperty(_.route.id)&&(!M||M[_.route.id]===void 0);if(_.route.lazy||E){i.isStatic&&(f=!0),h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}}let p=i==null?void 0:i.onError,m=r&&p?(g,_)=>{var x,M;p(g,{location:r.location,params:((M=(x=r.matches)==null?void 0:x[0])==null?void 0:M.params)??{},unstable_pattern:aM(r.matches),errorInfo:_})}:void 0;return l.reduceRight((g,_,x)=>{let M,E=!1,b=null,S=null;r&&(M=u&&_.route.id?u[_.route.id]:void 0,b=_.route.errorElement||_M,f&&(h<0&&x===0?(w0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,S=null):h===x&&(E=!0,S=_.route.hydrateFallbackElement||null)));let v=e.concat(l.slice(0,x+1)),P=()=>{let U;return M?U=b:E?U=S:_.route.Component?U=J.createElement(_.route.Component,null):_.route.element?U=_.route.element:U=g,J.createElement(xM,{match:_,routeContext:{outlet:g,matches:v,isDataRoute:r!=null},children:U})};return r&&(_.route.ErrorBoundary||_.route.errorElement||x===0)?J.createElement(C0,{location:r.location,revalidation:r.revalidation,component:b,error:M,children:P(),routeContext:{outlet:null,matches:v,isDataRoute:!0},onError:m}):P()},null)}function Qh(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function SM(s){let e=J.useContext(Is);return Yt(e,Qh(s)),e}function MM(s){let e=J.useContext(tc);return Yt(e,Qh(s)),e}function EM(s){let e=J.useContext(Fi);return Yt(e,Qh(s)),e}function Jh(s){let e=EM(s),i=e.matches[e.matches.length-1];return Yt(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function bM(){return Jh("useRouteId")}function TM(){var r;let s=J.useContext(Kh),e=MM("useRouteError"),i=Jh("useRouteError");return s!==void 0?s:(r=e.errors)==null?void 0:r[i]}function AM(){let{router:s}=SM("useNavigate"),e=Jh("useNavigate"),i=J.useRef(!1);return T0(()=>{i.current=!0}),J.useCallback(async(l,u={})=>{Ri(i.current,b0),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:e,...u}))},[s,e])}var uv={};function w0(s,e,i){!e&&!uv[s]&&(uv[s]=!0,Ri(!1,i))}J.memo(RM);function RM({routes:s,future:e,state:i,isStatic:r,onError:l}){return R0(s,void 0,{state:i,isStatic:r,onError:l})}function CM({to:s,replace:e,state:i,relative:r}){Yt(Fs(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=J.useContext(ti);Ri(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=J.useContext(Fi),{pathname:f}=Ci(),h=A0(),p=ec(s,Zh(u),f,r==="path"),m=JSON.stringify(p);return J.useEffect(()=>{h(JSON.parse(m),{replace:e,state:i,relative:r})},[h,m,r,e,i]),null}function ca(s){Yt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function wM({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:u=!1,unstable_useTransitions:f}){Yt(!Fs(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),p=J.useMemo(()=>({basename:h,navigator:l,static:u,unstable_useTransitions:f,future:{}}),[h,l,u,f]);typeof i=="string"&&(i=Bs(i));let{pathname:m="/",search:g="",hash:_="",state:x=null,key:M="default",unstable_mask:E}=i,b=J.useMemo(()=>{let S=_a(m,h);return S==null?null:{location:{pathname:S,search:g,hash:_,state:x,key:M,unstable_mask:E},navigationType:r}},[h,m,g,_,x,M,r,E]);return Ri(b!=null,`<Router basename="${h}"> is not able to match the URL "${m}${g}${_}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:J.createElement(ti.Provider,{value:p},J.createElement(Ko.Provider,{children:e,value:b}))}function DM({children:s,location:e}){return mM(ih(s),e)}function ih(s,e=[]){let i=[];return J.Children.forEach(s,(r,l)=>{if(!J.isValidElement(r))return;let u=[...e,l];if(r.type===J.Fragment){i.push.apply(i,ih(r.props.children,u));return}Yt(r.type===ca,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Yt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=ih(r.props.children,u)),i.push(f)}),i}var Fu="get",Hu="application/x-www-form-urlencoded";function nc(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function UM(s){return nc(s)&&s.tagName.toLowerCase()==="button"}function LM(s){return nc(s)&&s.tagName.toLowerCase()==="form"}function NM(s){return nc(s)&&s.tagName.toLowerCase()==="input"}function OM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function PM(s,e){return s.button===0&&(!e||e==="_self")&&!OM(s)}var pu=null;function zM(){if(pu===null)try{new FormData(document.createElement("form"),0),pu=!1}catch{pu=!0}return pu}var BM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ed(s){return s!=null&&!BM.has(s)?(Ri(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Hu}"`),null):s}function IM(s,e){let i,r,l,u,f;if(LM(s)){let h=s.getAttribute("action");r=h?_a(h,e):null,i=s.getAttribute("method")||Fu,l=Ed(s.getAttribute("enctype"))||Hu,u=new FormData(s)}else if(UM(s)||NM(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=s.getAttribute("formaction")||h.getAttribute("action");if(r=p?_a(p,e):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||Fu,l=Ed(s.getAttribute("formenctype"))||Ed(h.getAttribute("enctype"))||Hu,u=new FormData(h,s),!zM()){let{name:m,type:g,value:_}=s;if(g==="image"){let x=m?`${m}.`:"";u.append(`${x}x`,"0"),u.append(`${x}y`,"0")}else m&&u.append(m,_)}}else{if(nc(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Fu,r=null,l=Hu,f=s}return u&&l==="text/plain"&&(f=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function $h(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function D0(s,e,i,r){let l=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${r}`:l.pathname=`${l.pathname}.${r}`:l.pathname==="/"?l.pathname=`_root.${r}`:e&&_a(l.pathname,e)==="/"?l.pathname=`${e.replace(/\/$/,"")}/_root.${r}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${r}`,l}async function FM(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function HM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function GM(s,e,i){let r=await Promise.all(s.map(async l=>{let u=e.routes[l.route.id];if(u){let f=await FM(u,i);return f.links?f.links():[]}return[]}));return WM(r.flat(1).filter(HM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function cv(s,e,i,r,l,u){let f=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,h=(p,m)=>{var g;return i[m].pathname!==p.pathname||((g=i[m].route.path)==null?void 0:g.endsWith("*"))&&i[m].params["*"]!==p.params["*"]};return u==="assets"?e.filter((p,m)=>f(p,m)||h(p,m)):u==="data"?e.filter((p,m)=>{var _;let g=r.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(f(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let x=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((_=i[0])==null?void 0:_.params)||{},nextUrl:new URL(s,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function VM(s,e,{includeHydrateFallback:i}={}){return kM(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function kM(s){return[...new Set(s)]}function XM(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function WM(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let u=JSON.stringify(XM(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}function ep(){let s=J.useContext(Is);return $h(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function qM(){let s=J.useContext(tc);return $h(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var tp=J.createContext(void 0);tp.displayName="FrameworkContext";function np(){let s=J.useContext(tp);return $h(s,"You must render this element inside a <HydratedRouter> element"),s}function jM(s,e){let i=J.useContext(tp),[r,l]=J.useState(!1),[u,f]=J.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:_}=e,x=J.useRef(null);J.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let b=v=>{v.forEach(P=>{f(P.isIntersecting)})},S=new IntersectionObserver(b,{threshold:.5});return x.current&&S.observe(x.current),()=>{S.disconnect()}}},[s]),J.useEffect(()=>{if(r){let b=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(b)}}},[r]);let M=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?s!=="intent"?[u,x,{}]:[u,x,{onFocus:Bo(h,M),onBlur:Bo(p,E),onMouseEnter:Bo(m,M),onMouseLeave:Bo(g,E),onTouchStart:Bo(_,M)}]:[!1,x,{}]}function Bo(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function YM({page:s,...e}){let i=sM(),{router:r}=ep(),l=J.useMemo(()=>m0(r.routes,s,r.basename),[r.routes,s,r.basename]);return l?i?J.createElement(KM,{page:s,matches:l,...e}):J.createElement(QM,{page:s,matches:l,...e}):null}function ZM(s){let{manifest:e,routeModules:i}=np(),[r,l]=J.useState([]);return J.useEffect(()=>{let u=!1;return GM(s,e,i).then(f=>{u||l(f)}),()=>{u=!0}},[s,e,i]),r}function KM({page:s,matches:e,...i}){let r=Ci(),{future:l}=np(),{basename:u}=ep(),f=J.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let h=D0(s,u,l.unstable_trailingSlashAwareDataRequests,"rsc"),p=!1,m=[];for(let g of e)typeof g.route.shouldRevalidate=="function"?p=!0:m.push(g.route.id);return p&&m.length>0&&h.searchParams.set("_routes",m.join(",")),[h.pathname+h.search]},[u,l.unstable_trailingSlashAwareDataRequests,s,r,e]);return J.createElement(J.Fragment,null,f.map(h=>J.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...i})))}function QM({page:s,matches:e,...i}){let r=Ci(),{future:l,manifest:u,routeModules:f}=np(),{basename:h}=ep(),{loaderData:p,matches:m}=qM(),g=J.useMemo(()=>cv(s,e,m,u,r,"data"),[s,e,m,u,r]),_=J.useMemo(()=>cv(s,e,m,u,r,"assets"),[s,e,m,u,r]),x=J.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let b=new Set,S=!1;if(e.forEach(P=>{var D;let U=u.routes[P.route.id];!U||!U.hasLoader||(!g.some(H=>H.route.id===P.route.id)&&P.route.id in p&&((D=f[P.route.id])!=null&&D.shouldRevalidate)||U.hasClientLoader?S=!0:b.add(P.route.id))}),b.size===0)return[];let v=D0(s,h,l.unstable_trailingSlashAwareDataRequests,"data");return S&&b.size>0&&v.searchParams.set("_routes",e.filter(P=>b.has(P.route.id)).map(P=>P.route.id).join(",")),[v.pathname+v.search]},[h,l.unstable_trailingSlashAwareDataRequests,p,r,u,g,e,s,f]),M=J.useMemo(()=>VM(_,u),[_,u]),E=ZM(_);return J.createElement(J.Fragment,null,x.map(b=>J.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...i})),M.map(b=>J.createElement("link",{key:b,rel:"modulepreload",href:b,...i})),E.map(({key:b,link:S})=>J.createElement("link",{key:b,nonce:i.nonce,...S,crossOrigin:S.crossOrigin??i.crossOrigin})))}function JM(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var $M=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{$M&&(window.__reactRouterVersion="7.14.0")}catch{}function eE({basename:s,children:e,unstable_useTransitions:i,window:r}){let l=J.useRef();l.current==null&&(l.current=NS({window:r,v5Compat:!0}));let u=l.current,[f,h]=J.useState({action:u.action,location:u.location}),p=J.useCallback(m=>{i===!1?h(m):J.startTransition(()=>h(m))},[i]);return J.useLayoutEffect(()=>u.listen(p),[u,p]),J.createElement(wM,{basename:s,children:e,location:f.location,navigationType:f.action,navigator:u,unstable_useTransitions:i})}var U0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wo=J.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:f,unstable_mask:h,state:p,target:m,to:g,preventScrollReset:_,viewTransition:x,unstable_defaultShouldRevalidate:M,...E},b){let{basename:S,navigator:v,unstable_useTransitions:P}=J.useContext(ti),U=typeof g=="string"&&U0.test(g),D=x0(g,S);g=D.to;let H=hM(g,{relative:l}),z=Ci(),O=null;if(h){let de=ec(h,[],z.unstable_mask?z.unstable_mask.pathname:"/",!0);S!=="/"&&(de.pathname=de.pathname==="/"?S:Ii([S,de.pathname])),O=v.createHref(de)}let[k,w,C]=jM(r,E),F=iE(g,{replace:f,unstable_mask:h,state:p,target:m,preventScrollReset:_,relative:l,viewTransition:x,unstable_defaultShouldRevalidate:M,unstable_useTransitions:P});function ue(de){e&&e(de),de.defaultPrevented||F(de)}let se=!(D.isExternal||u),ge=J.createElement("a",{...E,...C,href:(se?O:void 0)||D.absoluteURL||H,onClick:se?ue:e,ref:JM(b,w),target:m,"data-discover":!U&&i==="render"?"true":void 0});return k&&!U?J.createElement(J.Fragment,null,ge,J.createElement(YM,{page:H})):ge});Wo.displayName="Link";var ah=J.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:f,viewTransition:h,children:p,...m},g){let _=Qo(f,{relative:m.relative}),x=Ci(),M=J.useContext(tc),{navigator:E,basename:b}=J.useContext(ti),S=M!=null&&lE(_)&&h===!0,v=E.encodeLocation?E.encodeLocation(_).pathname:_.pathname,P=x.pathname,U=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(P=P.toLowerCase(),U=U?U.toLowerCase():null,v=v.toLowerCase()),U&&b&&(U=_a(U,b)||U);const D=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let H=P===v||!l&&P.startsWith(v)&&P.charAt(D)==="/",z=U!=null&&(U===v||!l&&U.startsWith(v)&&U.charAt(v.length)==="/"),O={isActive:H,isPending:z,isTransitioning:S},k=H?e:void 0,w;typeof r=="function"?w=r(O):w=[r,H?"active":null,z?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let C=typeof u=="function"?u(O):u;return J.createElement(Wo,{...m,"aria-current":k,className:w,ref:g,style:C,to:f,viewTransition:h},typeof p=="function"?p(O):p)});ah.displayName="NavLink";var tE=J.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:u,method:f=Fu,action:h,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:x,...M},E)=>{let{unstable_useTransitions:b}=J.useContext(ti),S=sE(),v=oE(h,{relative:m}),P=f.toLowerCase()==="get"?"get":"post",U=typeof h=="string"&&U0.test(h),D=H=>{if(p&&p(H),H.defaultPrevented)return;H.preventDefault();let z=H.nativeEvent.submitter,O=(z==null?void 0:z.getAttribute("formmethod"))||f,k=()=>S(z||H.currentTarget,{fetcherKey:e,method:O,navigate:i,replace:l,state:u,relative:m,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:x});b&&i!==!1?J.startTransition(()=>k()):k()};return J.createElement("form",{ref:E,method:P,action:v,onSubmit:r?p:D,...M,"data-discover":!U&&s==="render"?"true":void 0})});tE.displayName="Form";function nE(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function L0(s){let e=J.useContext(Is);return Yt(e,nE(s)),e}function iE(s,{target:e,replace:i,unstable_mask:r,state:l,preventScrollReset:u,relative:f,viewTransition:h,unstable_defaultShouldRevalidate:p,unstable_useTransitions:m}={}){let g=A0(),_=Ci(),x=Qo(s,{relative:f});return J.useCallback(M=>{if(PM(M,e)){M.preventDefault();let E=i!==void 0?i:Xo(_)===Xo(x),b=()=>g(s,{replace:E,unstable_mask:r,state:l,preventScrollReset:u,relative:f,viewTransition:h,unstable_defaultShouldRevalidate:p});m?J.startTransition(()=>b()):b()}},[_,g,x,i,r,l,e,s,u,f,h,p,m])}var aE=0,rE=()=>`__${String(++aE)}__`;function sE(){let{router:s}=L0("useSubmit"),{basename:e}=J.useContext(ti),i=bM(),r=s.fetch,l=s.navigate;return J.useCallback(async(u,f={})=>{let{action:h,method:p,encType:m,formData:g,body:_}=IM(u,e);if(f.navigate===!1){let x=f.fetcherKey||rE();await r(x,i,f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:_,formMethod:f.method||p,formEncType:f.encType||m,flushSync:f.flushSync})}else await l(f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:_,formMethod:f.method||p,formEncType:f.encType||m,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,e,i])}function oE(s,{relative:e}={}){let{basename:i}=J.useContext(ti),r=J.useContext(Fi);Yt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...Qo(s||".",{relative:e})},f=Ci();if(s==null){u.search=f.search;let h=new URLSearchParams(u.search),p=h.getAll("index");if(p.some(g=>g==="")){h.delete("index"),p.filter(_=>_).forEach(_=>h.append("index",_));let g=h.toString();u.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:Ii([i,u.pathname])),Xo(u)}function lE(s,{relative:e}={}){let i=J.useContext(M0);Yt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=L0("useViewTransitionState"),l=Qo(s,{relative:e});if(!i.isTransitioning)return!1;let u=_a(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=_a(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Yu(l.pathname,f)!=null||Yu(l.pathname,u)!=null}var uE=(s,e,i,r,l,u,f,h)=>{let p=document.documentElement,m=["light","dark"];function g(M){(Array.isArray(s)?s:[s]).forEach(E=>{let b=E==="class",S=b&&u?l.map(v=>u[v]||v):l;b?(p.classList.remove(...S),p.classList.add(u&&u[M]?u[M]:M)):p.setAttribute(E,M)}),_(M)}function _(M){h&&m.includes(M)&&(p.style.colorScheme=M)}function x(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(r)g(r);else try{let M=localStorage.getItem(e)||i,E=f&&M==="system"?x():M;g(E)}catch{}},fv=["light","dark"],N0="(prefers-color-scheme: dark)",cE=typeof window>"u",ip=J.createContext(void 0),fE={setTheme:s=>{},themes:[]},dE=()=>{var s;return(s=J.useContext(ip))!=null?s:fE},hE=s=>J.useContext(ip)?J.createElement(J.Fragment,null,s.children):J.createElement(mE,{...s}),pE=["light","dark"],mE=({forcedTheme:s,disableTransitionOnChange:e=!1,enableSystem:i=!0,enableColorScheme:r=!0,storageKey:l="theme",themes:u=pE,defaultTheme:f=i?"system":"light",attribute:h="data-theme",value:p,children:m,nonce:g,scriptProps:_})=>{let[x,M]=J.useState(()=>_E(l,f)),[E,b]=J.useState(()=>x==="system"?bd():x),S=p?Object.values(p):u,v=J.useCallback(H=>{let z=H;if(!z)return;H==="system"&&i&&(z=bd());let O=p?p[z]:z,k=e?vE(g):null,w=document.documentElement,C=F=>{F==="class"?(w.classList.remove(...S),O&&w.classList.add(O)):F.startsWith("data-")&&(O?w.setAttribute(F,O):w.removeAttribute(F))};if(Array.isArray(h)?h.forEach(C):C(h),r){let F=fv.includes(f)?f:null,ue=fv.includes(z)?z:F;w.style.colorScheme=ue}k==null||k()},[g]),P=J.useCallback(H=>{let z=typeof H=="function"?H(x):H;M(z);try{localStorage.setItem(l,z)}catch{}},[x]),U=J.useCallback(H=>{let z=bd(H);b(z),x==="system"&&i&&!s&&v("system")},[x,s]);J.useEffect(()=>{let H=window.matchMedia(N0);return H.addListener(U),U(H),()=>H.removeListener(U)},[U]),J.useEffect(()=>{let H=z=>{z.key===l&&(z.newValue?M(z.newValue):P(f))};return window.addEventListener("storage",H),()=>window.removeEventListener("storage",H)},[P]),J.useEffect(()=>{v(s??x)},[s,x]);let D=J.useMemo(()=>({theme:x,setTheme:P,forcedTheme:s,resolvedTheme:x==="system"?E:x,themes:i?[...u,"system"]:u,systemTheme:i?E:void 0}),[x,P,s,E,i,u]);return J.createElement(ip.Provider,{value:D},J.createElement(gE,{forcedTheme:s,storageKey:l,attribute:h,enableSystem:i,enableColorScheme:r,defaultTheme:f,value:p,themes:u,nonce:g,scriptProps:_}),m)},gE=J.memo(({forcedTheme:s,storageKey:e,attribute:i,enableSystem:r,enableColorScheme:l,defaultTheme:u,value:f,themes:h,nonce:p,scriptProps:m})=>{let g=JSON.stringify([i,e,u,s,h,f,r,l]).slice(1,-1);return J.createElement("script",{...m,suppressHydrationWarning:!0,nonce:typeof window>"u"?p:"",dangerouslySetInnerHTML:{__html:`(${uE.toString()})(${g})`}})}),_E=(s,e)=>{if(cE)return;let i;try{i=localStorage.getItem(s)||void 0}catch{}return i||e},vE=s=>{let e=document.createElement("style");return s&&e.setAttribute("nonce",s),e.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},bd=s=>(s||(s=window.matchMedia(N0)),s.matches?"dark":"light");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ap="176",xE=0,dv=1,yE=2,O0=1,SE=2,fa=3,er=0,kn=1,da=2,Qa=0,Ds=1,hv=2,pv=3,mv=4,ME=5,wr=100,EE=101,bE=102,TE=103,AE=104,RE=200,CE=201,wE=202,DE=203,rh=204,sh=205,UE=206,LE=207,NE=208,OE=209,PE=210,zE=211,BE=212,IE=213,FE=214,oh=0,lh=1,uh=2,Ls=3,ch=4,fh=5,dh=6,hh=7,P0=0,HE=1,GE=2,Ja=0,VE=1,kE=2,XE=3,WE=4,qE=5,jE=6,YE=7,z0=300,Ns=301,Os=302,ph=303,mh=304,ic=306,gh=1e3,Ur=1001,_h=1002,Ti=1003,ZE=1004,mu=1005,zi=1006,Td=1007,Lr=1008,va=1009,B0=1010,I0=1011,qo=1012,rp=1013,Or=1014,ha=1015,Jo=1016,sp=1017,op=1018,jo=1020,F0=35902,H0=1021,G0=1022,bi=1023,Yo=1026,Zo=1027,V0=1028,lp=1029,k0=1030,up=1031,cp=1033,Gu=33776,Vu=33777,ku=33778,Xu=33779,vh=35840,xh=35841,yh=35842,Sh=35843,Mh=36196,Eh=37492,bh=37496,Th=37808,Ah=37809,Rh=37810,Ch=37811,wh=37812,Dh=37813,Uh=37814,Lh=37815,Nh=37816,Oh=37817,Ph=37818,zh=37819,Bh=37820,Ih=37821,Wu=36492,Fh=36494,Hh=36495,X0=36283,Gh=36284,Vh=36285,kh=36286,KE=3200,QE=3201,JE=0,$E=1,Ka="",fi="srgb",Ps="srgb-linear",Zu="linear",It="srgb",ms=7680,gv=519,eb=512,tb=513,nb=514,W0=515,ib=516,ab=517,rb=518,sb=519,_v=35044,vv="300 es",pa=2e3,Ku=2001;class Hs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ad=Math.PI/180,Xh=180/Math.PI;function $o(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function St(s,e,i){return Math.max(e,Math.min(i,s))}function ob(s,e){return(s%e+e)%e}function Rd(s,e,i){return(1-i)*s+i*e}function Io(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Vn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Gt{constructor(e=0,i=0){Gt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*l+e.x,this.y=u*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,i,r,l,u,f,h,p,m){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,f,h,p,m)}set(e,i,r,l,u,f,h,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=p,g[6]=r,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,f=r[0],h=r[3],p=r[6],m=r[1],g=r[4],_=r[7],x=r[2],M=r[5],E=r[8],b=l[0],S=l[3],v=l[6],P=l[1],U=l[4],D=l[7],H=l[2],z=l[5],O=l[8];return u[0]=f*b+h*P+p*H,u[3]=f*S+h*U+p*z,u[6]=f*v+h*D+p*O,u[1]=m*b+g*P+_*H,u[4]=m*S+g*U+_*z,u[7]=m*v+g*D+_*O,u[2]=x*b+M*P+E*H,u[5]=x*S+M*U+E*z,u[8]=x*v+M*D+E*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],f=e[4],h=e[5],p=e[6],m=e[7],g=e[8];return i*f*g-i*h*m-r*u*g+r*h*p+l*u*m-l*f*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],f=e[4],h=e[5],p=e[6],m=e[7],g=e[8],_=g*f-h*m,x=h*p-g*u,M=m*u-f*p,E=i*_+r*x+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=_*b,e[1]=(l*m-g*r)*b,e[2]=(h*r-l*f)*b,e[3]=x*b,e[4]=(g*i-l*p)*b,e[5]=(l*u-h*i)*b,e[6]=M*b,e[7]=(r*p-m*i)*b,e[8]=(f*i-r*u)*b,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,f,h){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*h)+f+e,-l*m,l*p,-l*(-m*f+p*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Cd.makeScale(e,i)),this}rotate(e){return this.premultiply(Cd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Cd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cd=new ut;function q0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Qu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lb(){const s=Qu("canvas");return s.style.display="block",s}const xv={};function qu(s){s in xv||(xv[s]=!0,console.warn(s))}function ub(s,e,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function cb(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function fb(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const yv=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sv=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function db(){const s={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===It&&(l.r=ga(l.r),l.g=ga(l.g),l.b=ga(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===It&&(l.r=Us(l.r),l.g=Us(l.g),l.b=Us(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ka?Zu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ps]:{primaries:e,whitePoint:r,transfer:Zu,toXYZ:yv,fromXYZ:Sv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:r,transfer:It,toXYZ:yv,fromXYZ:Sv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),s}const Rt=db();function ga(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Us(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let gs;class hb{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{gs===void 0&&(gs=Qu("canvas")),gs.width=e.width,gs.height=e.height;const l=gs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=gs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Qu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=ga(u[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ga(i[r]/255)*255):i[r]=ga(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pb=0;class fp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=$o(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?u.push(wd(l[f].image)):u.push(wd(l[f]))}else u=wd(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function wd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?hb.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mb=0;class Xn extends Hs{constructor(e=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,r=Ur,l=Ur,u=zi,f=Lr,h=bi,p=va,m=Xn.DEFAULT_ANISOTROPY,g=Ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=$o(),this.name="",this.source=new fp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==z0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gh:e.x=e.x-Math.floor(e.x);break;case Ur:e.x=e.x<0?0:1;break;case _h:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gh:e.y=e.y-Math.floor(e.y);break;case Ur:e.y=e.y<0?0:1;break;case _h:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=z0;Xn.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,i=0,r=0,l=1){nn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const p=e.elements,m=p[0],g=p[4],_=p[8],x=p[1],M=p[5],E=p[9],b=p[2],S=p[6],v=p[10];if(Math.abs(g-x)<.01&&Math.abs(_-b)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+b)<.1&&Math.abs(E+S)<.1&&Math.abs(m+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(m+1)/2,D=(M+1)/2,H=(v+1)/2,z=(g+x)/4,O=(_+b)/4,k=(E+S)/4;return U>D&&U>H?U<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(U),l=z/r,u=O/r):D>H?D<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),r=z/l,u=k/l):H<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),r=O/u,l=k/u),this.set(r,l,u,i),this}let P=Math.sqrt((S-E)*(S-E)+(_-b)*(_-b)+(x-g)*(x-g));return Math.abs(P)<.001&&(P=1),this.x=(S-E)/P,this.y=(_-b)/P,this.z=(x-g)/P,this.w=Math.acos((m+M+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this.w=St(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this.w=St(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gb extends Hs{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth?r.depth:1,this.scissor=new nn(0,0,e,i),this.scissorTest=!1,this.viewport=new nn(0,0,e,i);const l={width:e,height:i,depth:this.depth};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},r);const u=new Xn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new fp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends gb{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class j0 extends Xn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _b extends Xn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class el{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,f,h){let p=r[l+0],m=r[l+1],g=r[l+2],_=r[l+3];const x=u[f+0],M=u[f+1],E=u[f+2],b=u[f+3];if(h===0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=_;return}if(h===1){e[i+0]=x,e[i+1]=M,e[i+2]=E,e[i+3]=b;return}if(_!==b||p!==x||m!==M||g!==E){let S=1-h;const v=p*x+m*M+g*E+_*b,P=v>=0?1:-1,U=1-v*v;if(U>Number.EPSILON){const H=Math.sqrt(U),z=Math.atan2(H,v*P);S=Math.sin(S*z)/H,h=Math.sin(h*z)/H}const D=h*P;if(p=p*S+x*D,m=m*S+M*D,g=g*S+E*D,_=_*S+b*D,S===1-h){const H=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=H,m*=H,g*=H,_*=H}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,u,f){const h=r[l],p=r[l+1],m=r[l+2],g=r[l+3],_=u[f],x=u[f+1],M=u[f+2],E=u[f+3];return e[i]=h*E+g*_+p*M-m*x,e[i+1]=p*E+g*x+m*_-h*M,e[i+2]=m*E+g*M+h*x-p*_,e[i+3]=g*E-h*_-p*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,f=e._order,h=Math.cos,p=Math.sin,m=h(r/2),g=h(l/2),_=h(u/2),x=p(r/2),M=p(l/2),E=p(u/2);switch(f){case"XYZ":this._x=x*g*_+m*M*E,this._y=m*M*_-x*g*E,this._z=m*g*E+x*M*_,this._w=m*g*_-x*M*E;break;case"YXZ":this._x=x*g*_+m*M*E,this._y=m*M*_-x*g*E,this._z=m*g*E-x*M*_,this._w=m*g*_+x*M*E;break;case"ZXY":this._x=x*g*_-m*M*E,this._y=m*M*_+x*g*E,this._z=m*g*E+x*M*_,this._w=m*g*_-x*M*E;break;case"ZYX":this._x=x*g*_-m*M*E,this._y=m*M*_+x*g*E,this._z=m*g*E-x*M*_,this._w=m*g*_+x*M*E;break;case"YZX":this._x=x*g*_+m*M*E,this._y=m*M*_+x*g*E,this._z=m*g*E-x*M*_,this._w=m*g*_-x*M*E;break;case"XZY":this._x=x*g*_-m*M*E,this._y=m*M*_-x*g*E,this._z=m*g*E+x*M*_,this._w=m*g*_+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],f=i[1],h=i[5],p=i[9],m=i[2],g=i[6],_=i[10],x=r+h+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-p)*M,this._y=(u-m)*M,this._z=(f-l)*M}else if(r>h&&r>_){const M=2*Math.sqrt(1+r-h-_);this._w=(g-p)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(u+m)/M}else if(h>_){const M=2*Math.sqrt(1+h-r-_);this._w=(u-m)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+_-r-h);this._w=(f-l)/M,this._x=(u+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,f=e._w,h=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+f*h+l*m-u*p,this._y=l*g+f*p+u*h-r*m,this._z=u*g+f*m+r*p-l*h,this._w=f*g-r*h-l*p-u*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,f=this._w;let h=f*e._w+r*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=f,this._x=r,this._y=l,this._z=u,this;const p=1-h*h;if(p<=Number.EPSILON){const M=1-i;return this._w=M*f+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),_=Math.sin((1-i)*g)/m,x=Math.sin(i*g)/m;return this._w=f*_+this._w*x,this._x=r*_+this._x*x,this._y=l*_+this._y*x,this._z=u*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,i=0,r=0){le.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Mv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Mv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,f=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,f=e.y,h=e.z,p=e.w,m=2*(f*l-h*r),g=2*(h*i-u*l),_=2*(u*r-f*i);return this.x=i+p*m+f*_-h*g,this.y=r+p*g+h*m-u*_,this.z=l+p*_+u*g-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,f=i.x,h=i.y,p=i.z;return this.x=l*p-u*h,this.y=u*f-r*p,this.z=r*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Dd.copy(this).projectOnVector(e),this.sub(Dd)}reflect(e){return this.sub(Dd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dd=new le,Mv=new el;class tl{constructor(e=new le(1/0,1/0,1/0),i=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(xi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(xi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=xi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=u.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,xi):xi.fromBufferAttribute(u,f),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),gu.copy(r.boundingBox)),gu.applyMatrix4(e.matrixWorld),this.union(gu)}const l=e.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fo),_u.subVectors(this.max,Fo),_s.subVectors(e.a,Fo),vs.subVectors(e.b,Fo),xs.subVectors(e.c,Fo),Xa.subVectors(vs,_s),Wa.subVectors(xs,vs),Sr.subVectors(_s,xs);let i=[0,-Xa.z,Xa.y,0,-Wa.z,Wa.y,0,-Sr.z,Sr.y,Xa.z,0,-Xa.x,Wa.z,0,-Wa.x,Sr.z,0,-Sr.x,-Xa.y,Xa.x,0,-Wa.y,Wa.x,0,-Sr.y,Sr.x,0];return!Ud(i,_s,vs,xs,_u)||(i=[1,0,0,0,1,0,0,0,1],!Ud(i,_s,vs,xs,_u))?!1:(vu.crossVectors(Xa,Wa),i=[vu.x,vu.y,vu.z],Ud(i,_s,vs,xs,_u))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ra),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ra=[new le,new le,new le,new le,new le,new le,new le,new le],xi=new le,gu=new tl,_s=new le,vs=new le,xs=new le,Xa=new le,Wa=new le,Sr=new le,Fo=new le,_u=new le,vu=new le,Mr=new le;function Ud(s,e,i,r,l){for(let u=0,f=s.length-3;u<=f;u+=3){Mr.fromArray(s,u);const h=l.x*Math.abs(Mr.x)+l.y*Math.abs(Mr.y)+l.z*Math.abs(Mr.z),p=e.dot(Mr),m=i.dot(Mr),g=r.dot(Mr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const vb=new tl,Ho=new le,Ld=new le;class ac{constructor(e=new le,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):vb.setFromPoints(e).getCenter(r);let l=0;for(let u=0,f=e.length;u<f;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const i=Ho.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ho,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ld.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(Ld)),this.expandByPoint(Ho.copy(e.center).sub(Ld))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sa=new le,Nd=new le,xu=new le,qa=new le,Od=new le,yu=new le,Pd=new le;class Y0{constructor(e=new le,i=new le(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=sa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(sa.copy(this.origin).addScaledVector(this.direction,i),sa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Nd.copy(e).add(i).multiplyScalar(.5),xu.copy(i).sub(e).normalize(),qa.copy(this.origin).sub(Nd);const u=e.distanceTo(i)*.5,f=-this.direction.dot(xu),h=qa.dot(this.direction),p=-qa.dot(xu),m=qa.lengthSq(),g=Math.abs(1-f*f);let _,x,M,E;if(g>0)if(_=f*p-h,x=f*h-p,E=u*g,_>=0)if(x>=-E)if(x<=E){const b=1/g;_*=b,x*=b,M=_*(_+f*x+2*h)+x*(f*_+x+2*p)+m}else x=u,_=Math.max(0,-(f*x+h)),M=-_*_+x*(x+2*p)+m;else x=-u,_=Math.max(0,-(f*x+h)),M=-_*_+x*(x+2*p)+m;else x<=-E?(_=Math.max(0,-(-f*u+h)),x=_>0?-u:Math.min(Math.max(-u,-p),u),M=-_*_+x*(x+2*p)+m):x<=E?(_=0,x=Math.min(Math.max(-u,-p),u),M=x*(x+2*p)+m):(_=Math.max(0,-(f*u+h)),x=_>0?u:Math.min(Math.max(-u,-p),u),M=-_*_+x*(x+2*p)+m);else x=f>0?-u:u,_=Math.max(0,-(f*x+h)),M=-_*_+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Nd).addScaledVector(xu,x),M}intersectSphere(e,i){sa.subVectors(e.center,this.origin);const r=sa.dot(this.direction),l=sa.dot(sa)-r*r,u=e.radius*e.radius;if(l>u)return null;const f=Math.sqrt(u-l),h=r-f,p=r+f;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,f,h,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,l=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,l=(e.min.x-x.x)*m),g>=0?(u=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),r>f||u>l||((u>r||isNaN(r))&&(r=u),(f<l||isNaN(l))&&(l=f),_>=0?(h=(e.min.z-x.z)*_,p=(e.max.z-x.z)*_):(h=(e.max.z-x.z)*_,p=(e.min.z-x.z)*_),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,sa)!==null}intersectTriangle(e,i,r,l,u){Od.subVectors(i,e),yu.subVectors(r,e),Pd.crossVectors(Od,yu);let f=this.direction.dot(Pd),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;qa.subVectors(this.origin,e);const p=h*this.direction.dot(yu.crossVectors(qa,yu));if(p<0)return null;const m=h*this.direction.dot(Od.cross(qa));if(m<0||p+m>f)return null;const g=-h*qa.dot(Pd);return g<0?null:this.at(g/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an{constructor(e,i,r,l,u,f,h,p,m,g,_,x,M,E,b,S){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,f,h,p,m,g,_,x,M,E,b,S)}set(e,i,r,l,u,f,h,p,m,g,_,x,M,E,b,S){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=f,v[9]=h,v[13]=p,v[2]=m,v[6]=g,v[10]=_,v[14]=x,v[3]=M,v[7]=E,v[11]=b,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ys.setFromMatrixColumn(e,0).length(),u=1/ys.setFromMatrixColumn(e,1).length(),f=1/ys.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,f=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const x=f*g,M=f*_,E=h*g,b=h*_;i[0]=p*g,i[4]=-p*_,i[8]=m,i[1]=M+E*m,i[5]=x-b*m,i[9]=-h*p,i[2]=b-x*m,i[6]=E+M*m,i[10]=f*p}else if(e.order==="YXZ"){const x=p*g,M=p*_,E=m*g,b=m*_;i[0]=x+b*h,i[4]=E*h-M,i[8]=f*m,i[1]=f*_,i[5]=f*g,i[9]=-h,i[2]=M*h-E,i[6]=b+x*h,i[10]=f*p}else if(e.order==="ZXY"){const x=p*g,M=p*_,E=m*g,b=m*_;i[0]=x-b*h,i[4]=-f*_,i[8]=E+M*h,i[1]=M+E*h,i[5]=f*g,i[9]=b-x*h,i[2]=-f*m,i[6]=h,i[10]=f*p}else if(e.order==="ZYX"){const x=f*g,M=f*_,E=h*g,b=h*_;i[0]=p*g,i[4]=E*m-M,i[8]=x*m+b,i[1]=p*_,i[5]=b*m+x,i[9]=M*m-E,i[2]=-m,i[6]=h*p,i[10]=f*p}else if(e.order==="YZX"){const x=f*p,M=f*m,E=h*p,b=h*m;i[0]=p*g,i[4]=b-x*_,i[8]=E*_+M,i[1]=_,i[5]=f*g,i[9]=-h*g,i[2]=-m*g,i[6]=M*_+E,i[10]=x-b*_}else if(e.order==="XZY"){const x=f*p,M=f*m,E=h*p,b=h*m;i[0]=p*g,i[4]=-_,i[8]=m*g,i[1]=x*_+b,i[5]=f*g,i[9]=M*_-E,i[2]=E*_-M,i[6]=h*g,i[10]=b*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xb,e,yb)}lookAt(e,i,r){const l=this.elements;return $n.subVectors(e,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),ja.crossVectors(r,$n),ja.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),ja.crossVectors(r,$n)),ja.normalize(),Su.crossVectors($n,ja),l[0]=ja.x,l[4]=Su.x,l[8]=$n.x,l[1]=ja.y,l[5]=Su.y,l[9]=$n.y,l[2]=ja.z,l[6]=Su.z,l[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,f=r[0],h=r[4],p=r[8],m=r[12],g=r[1],_=r[5],x=r[9],M=r[13],E=r[2],b=r[6],S=r[10],v=r[14],P=r[3],U=r[7],D=r[11],H=r[15],z=l[0],O=l[4],k=l[8],w=l[12],C=l[1],F=l[5],ue=l[9],se=l[13],ge=l[2],de=l[6],B=l[10],Q=l[14],K=l[3],Me=l[7],me=l[11],N=l[15];return u[0]=f*z+h*C+p*ge+m*K,u[4]=f*O+h*F+p*de+m*Me,u[8]=f*k+h*ue+p*B+m*me,u[12]=f*w+h*se+p*Q+m*N,u[1]=g*z+_*C+x*ge+M*K,u[5]=g*O+_*F+x*de+M*Me,u[9]=g*k+_*ue+x*B+M*me,u[13]=g*w+_*se+x*Q+M*N,u[2]=E*z+b*C+S*ge+v*K,u[6]=E*O+b*F+S*de+v*Me,u[10]=E*k+b*ue+S*B+v*me,u[14]=E*w+b*se+S*Q+v*N,u[3]=P*z+U*C+D*ge+H*K,u[7]=P*O+U*F+D*de+H*Me,u[11]=P*k+U*ue+D*B+H*me,u[15]=P*w+U*se+D*Q+H*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],f=e[1],h=e[5],p=e[9],m=e[13],g=e[2],_=e[6],x=e[10],M=e[14],E=e[3],b=e[7],S=e[11],v=e[15];return E*(+u*p*_-l*m*_-u*h*x+r*m*x+l*h*M-r*p*M)+b*(+i*p*M-i*m*x+u*f*x-l*f*M+l*m*g-u*p*g)+S*(+i*m*_-i*h*M-u*f*_+r*f*M+u*h*g-r*m*g)+v*(-l*h*g-i*p*_+i*h*x+l*f*_-r*f*x+r*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],f=e[4],h=e[5],p=e[6],m=e[7],g=e[8],_=e[9],x=e[10],M=e[11],E=e[12],b=e[13],S=e[14],v=e[15],P=_*S*m-b*x*m+b*p*M-h*S*M-_*p*v+h*x*v,U=E*x*m-g*S*m-E*p*M+f*S*M+g*p*v-f*x*v,D=g*b*m-E*_*m+E*h*M-f*b*M-g*h*v+f*_*v,H=E*_*p-g*b*p-E*h*x+f*b*x+g*h*S-f*_*S,z=i*P+r*U+l*D+u*H;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/z;return e[0]=P*O,e[1]=(b*x*u-_*S*u-b*l*M+r*S*M+_*l*v-r*x*v)*O,e[2]=(h*S*u-b*p*u+b*l*m-r*S*m-h*l*v+r*p*v)*O,e[3]=(_*p*u-h*x*u-_*l*m+r*x*m+h*l*M-r*p*M)*O,e[4]=U*O,e[5]=(g*S*u-E*x*u+E*l*M-i*S*M-g*l*v+i*x*v)*O,e[6]=(E*p*u-f*S*u-E*l*m+i*S*m+f*l*v-i*p*v)*O,e[7]=(f*x*u-g*p*u+g*l*m-i*x*m-f*l*M+i*p*M)*O,e[8]=D*O,e[9]=(E*_*u-g*b*u-E*r*M+i*b*M+g*r*v-i*_*v)*O,e[10]=(f*b*u-E*h*u+E*r*m-i*b*m-f*r*v+i*h*v)*O,e[11]=(g*h*u-f*_*u-g*r*m+i*_*m+f*r*M-i*h*M)*O,e[12]=H*O,e[13]=(g*b*l-E*_*l+E*r*x-i*b*x-g*r*S+i*_*S)*O,e[14]=(E*h*l-f*b*l-E*r*p+i*b*p+f*r*S-i*h*S)*O,e[15]=(f*_*l-g*h*l+g*r*p-i*_*p-f*r*x+i*h*x)*O,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,f=e.x,h=e.y,p=e.z,m=u*f,g=u*h;return this.set(m*f+r,m*h-l*p,m*p+l*h,0,m*h+l*p,g*h+r,g*p-l*f,0,m*p-l*h,g*p+l*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,f){return this.set(1,r,u,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,f=i._y,h=i._z,p=i._w,m=u+u,g=f+f,_=h+h,x=u*m,M=u*g,E=u*_,b=f*g,S=f*_,v=h*_,P=p*m,U=p*g,D=p*_,H=r.x,z=r.y,O=r.z;return l[0]=(1-(b+v))*H,l[1]=(M+D)*H,l[2]=(E-U)*H,l[3]=0,l[4]=(M-D)*z,l[5]=(1-(x+v))*z,l[6]=(S+P)*z,l[7]=0,l[8]=(E+U)*O,l[9]=(S-P)*O,l[10]=(1-(x+b))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=ys.set(l[0],l[1],l[2]).length();const f=ys.set(l[4],l[5],l[6]).length(),h=ys.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],yi.copy(this);const m=1/u,g=1/f,_=1/h;return yi.elements[0]*=m,yi.elements[1]*=m,yi.elements[2]*=m,yi.elements[4]*=g,yi.elements[5]*=g,yi.elements[6]*=g,yi.elements[8]*=_,yi.elements[9]*=_,yi.elements[10]*=_,i.setFromRotationMatrix(yi),r.x=u,r.y=f,r.z=h,this}makePerspective(e,i,r,l,u,f,h=pa){const p=this.elements,m=2*u/(i-e),g=2*u/(r-l),_=(i+e)/(i-e),x=(r+l)/(r-l);let M,E;if(h===pa)M=-(f+u)/(f-u),E=-2*f*u/(f-u);else if(h===Ku)M=-f/(f-u),E=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,f,h=pa){const p=this.elements,m=1/(i-e),g=1/(r-l),_=1/(f-u),x=(i+e)*m,M=(r+l)*g;let E,b;if(h===pa)E=(f+u)*_,b=-2*_;else if(h===Ku)E=u*_,b=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=b,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ys=new le,yi=new an,xb=new le(0,0,0),yb=new le(1,1,1),ja=new le,Su=new le,$n=new le,Ev=new an,bv=new el;class xa{constructor(e=0,i=0,r=0,l=xa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],f=l[4],h=l[8],p=l[1],m=l[5],g=l[9],_=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(St(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-St(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Ev.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ev,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return bv.setFromEuler(this),this.setFromQuaternion(bv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xa.DEFAULT_ORDER="XYZ";class Z0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sb=0;const Tv=new le,Ss=new el,oa=new an,Mu=new le,Go=new le,Mb=new le,Eb=new el,Av=new le(1,0,0),Rv=new le(0,1,0),Cv=new le(0,0,1),wv={type:"added"},bb={type:"removed"},Ms={type:"childadded",child:null},zd={type:"childremoved",child:null};class Wn extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sb++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const e=new le,i=new xa,r=new el,l=new le(1,1,1);function u(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new an},normalMatrix:{value:new ut}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Z0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ss.setFromAxisAngle(e,i),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,i){return Ss.setFromAxisAngle(e,i),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(Av,e)}rotateY(e){return this.rotateOnAxis(Rv,e)}rotateZ(e){return this.rotateOnAxis(Cv,e)}translateOnAxis(e,i){return Tv.copy(e).applyQuaternion(this.quaternion),this.position.add(Tv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Av,e)}translateY(e){return this.translateOnAxis(Rv,e)}translateZ(e){return this.translateOnAxis(Cv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Mu.copy(e):Mu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oa.lookAt(Go,Mu,this.up):oa.lookAt(Mu,Go,this.up),this.quaternion.setFromRotationMatrix(oa),l&&(oa.extractRotation(l.matrixWorld),Ss.setFromRotationMatrix(oa),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wv),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(bb),zd.child=e,this.dispatchEvent(zd),zd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oa.multiply(e.parent.matrixWorld)),e.applyMatrix4(oa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wv),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,Mb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,Eb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?{min:h.boundingBox.min.toArray(),max:h.boundingBox.max.toArray()}:void 0,boundingSphere:h.boundingSphere?{radius:h.boundingSphere.radius,center:h.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];u(e.shapes,_)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(e.materials,this.material[p]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(u(e.animations,p))}}if(i){const h=f(e.geometries),p=f(e.materials),m=f(e.textures),g=f(e.images),_=f(e.shapes),x=f(e.skeletons),M=f(e.animations),E=f(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Wn.DEFAULT_UP=new le(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new le,la=new le,Bd=new le,ua=new le,Es=new le,bs=new le,Dv=new le,Id=new le,Fd=new le,Hd=new le,Gd=new nn,Vd=new nn,kd=new nn;class Mi{constructor(e=new le,i=new le,r=new le){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Si.subVectors(e,i),l.cross(Si);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){Si.subVectors(l,i),la.subVectors(r,i),Bd.subVectors(e,i);const f=Si.dot(Si),h=Si.dot(la),p=Si.dot(Bd),m=la.dot(la),g=la.dot(Bd),_=f*m-h*h;if(_===0)return u.set(0,0,0),null;const x=1/_,M=(m*p-h*g)*x,E=(f*g-h*p)*x;return u.set(1-M-E,E,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ua)===null?!1:ua.x>=0&&ua.y>=0&&ua.x+ua.y<=1}static getInterpolation(e,i,r,l,u,f,h,p){return this.getBarycoord(e,i,r,l,ua)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,ua.x),p.addScaledVector(f,ua.y),p.addScaledVector(h,ua.z),p)}static getInterpolatedAttribute(e,i,r,l,u,f){return Gd.setScalar(0),Vd.setScalar(0),kd.setScalar(0),Gd.fromBufferAttribute(e,i),Vd.fromBufferAttribute(e,r),kd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Gd,u.x),f.addScaledVector(Vd,u.y),f.addScaledVector(kd,u.z),f}static isFrontFacing(e,i,r,l){return Si.subVectors(r,i),la.subVectors(e,i),Si.cross(la).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),la.subVectors(this.a,this.b),Si.cross(la).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Mi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Mi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let f,h;Es.subVectors(l,r),bs.subVectors(u,r),Id.subVectors(e,r);const p=Es.dot(Id),m=bs.dot(Id);if(p<=0&&m<=0)return i.copy(r);Fd.subVectors(e,l);const g=Es.dot(Fd),_=bs.dot(Fd);if(g>=0&&_<=g)return i.copy(l);const x=p*_-g*m;if(x<=0&&p>=0&&g<=0)return f=p/(p-g),i.copy(r).addScaledVector(Es,f);Hd.subVectors(e,u);const M=Es.dot(Hd),E=bs.dot(Hd);if(E>=0&&M<=E)return i.copy(u);const b=M*m-p*E;if(b<=0&&m>=0&&E<=0)return h=m/(m-E),i.copy(r).addScaledVector(bs,h);const S=g*E-M*_;if(S<=0&&_-g>=0&&M-E>=0)return Dv.subVectors(u,l),h=(_-g)/(_-g+(M-E)),i.copy(l).addScaledVector(Dv,h);const v=1/(S+b+x);return f=b*v,h=x*v,i.copy(r).addScaledVector(Es,f).addScaledVector(bs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const K0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ya={h:0,s:0,l:0},Eu={h:0,s:0,l:0};function Xd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class wt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Rt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Rt.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Rt.workingColorSpace){if(e=ob(e,1),i=St(i,0,1),r=St(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,f=2*r-u;this.r=Xd(f,u,e+1/3),this.g=Xd(f,u,e),this.b=Xd(f,u,e-1/3)}return Rt.toWorkingColorSpace(this,l),this}setStyle(e,i=fi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=fi){const r=K0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Rt.fromWorkingColorSpace(wn.copy(this),e),Math.round(St(wn.r*255,0,255))*65536+Math.round(St(wn.g*255,0,255))*256+Math.round(St(wn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Rt.workingColorSpace){Rt.fromWorkingColorSpace(wn.copy(this),i);const r=wn.r,l=wn.g,u=wn.b,f=Math.max(r,l,u),h=Math.min(r,l,u);let p,m;const g=(h+f)/2;if(h===f)p=0,m=0;else{const _=f-h;switch(m=g<=.5?_/(f+h):_/(2-f-h),f){case r:p=(l-u)/_+(l<u?6:0);break;case l:p=(u-r)/_+2;break;case u:p=(r-l)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(wn.copy(this),i),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=fi){Rt.fromWorkingColorSpace(wn.copy(this),e);const i=wn.r,r=wn.g,l=wn.b;return e!==fi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ya),this.setHSL(Ya.h+e,Ya.s+i,Ya.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ya),e.getHSL(Eu);const r=Rd(Ya.h,Eu.h,i),l=Rd(Ya.s,Eu.s,i),u=Rd(Ya.l,Eu.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new wt;wt.NAMES=K0;let Tb=0;class nl extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tb++}),this.uuid=$o(),this.name="",this.type="Material",this.blending=Ds,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=sh,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(r.blending=this.blending),this.side!==er&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==rh&&(r.blendSrc=this.blendSrc),this.blendDst!==sh&&(r.blendDst=this.blendDst),this.blendEquation!==wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const f=[];for(const h in u){const p=u[h];delete p.metadata,f.push(p)}return f}if(i){const u=l(e.textures),f=l(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Q0 extends nl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xa,this.combine=P0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new le,bu=new Gt;let Ab=0;class Ai{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ab++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=_v,this.updateRanges=[],this.gpuType=ha,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)bu.fromBufferAttribute(this,i),bu.applyMatrix3(e),this.setXY(i,bu.x,bu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Io(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Vn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Io(i,this.array)),i}setX(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Io(i,this.array)),i}setY(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Io(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Io(i,this.array)),i}setW(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array),u=Vn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_v&&(e.usage=this.usage),e}}class J0 extends Ai{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class $0 extends Ai{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Nr extends Ai{constructor(e,i,r){super(new Float32Array(e),i,r)}}let Rb=0;const ci=new an,Wd=new Wn,Ts=new le,ei=new tl,Vo=new tl,_n=new le;class ya extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rb++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(q0(e)?$0:J0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ut().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,i,r){return ci.makeTranslation(e,i,r),this.applyMatrix4(ci),this}scale(e,i,r){return ci.makeScale(e,i,r),this.applyMatrix4(ci),this}lookAt(e){return Wd.lookAt(e),Wd.updateMatrix(),this.applyMatrix4(Wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Nr(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ei.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ac);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),i)for(let u=0,f=i.length;u<f;u++){const h=i[u];Vo.setFromBufferAttribute(h),this.morphTargetsRelative?(_n.addVectors(ei.min,Vo.min),ei.expandByPoint(_n),_n.addVectors(ei.max,Vo.max),ei.expandByPoint(_n)):(ei.expandByPoint(Vo.min),ei.expandByPoint(Vo.max))}ei.getCenter(r);let l=0;for(let u=0,f=e.count;u<f;u++)_n.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let u=0,f=i.length;u<f;u++){const h=i[u],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)_n.fromBufferAttribute(h,m),p&&(Ts.fromBufferAttribute(e,m),_n.add(Ts)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let k=0;k<r.count;k++)h[k]=new le,p[k]=new le;const m=new le,g=new le,_=new le,x=new Gt,M=new Gt,E=new Gt,b=new le,S=new le;function v(k,w,C){m.fromBufferAttribute(r,k),g.fromBufferAttribute(r,w),_.fromBufferAttribute(r,C),x.fromBufferAttribute(u,k),M.fromBufferAttribute(u,w),E.fromBufferAttribute(u,C),g.sub(m),_.sub(m),M.sub(x),E.sub(x);const F=1/(M.x*E.y-E.x*M.y);isFinite(F)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(F),S.copy(_).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(F),h[k].add(b),h[w].add(b),h[C].add(b),p[k].add(S),p[w].add(S),p[C].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let k=0,w=P.length;k<w;++k){const C=P[k],F=C.start,ue=C.count;for(let se=F,ge=F+ue;se<ge;se+=3)v(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const U=new le,D=new le,H=new le,z=new le;function O(k){H.fromBufferAttribute(l,k),z.copy(H);const w=h[k];U.copy(w),U.sub(H.multiplyScalar(H.dot(w))).normalize(),D.crossVectors(z,w);const F=D.dot(p[k])<0?-1:1;f.setXYZW(k,U.x,U.y,U.z,F)}for(let k=0,w=P.length;k<w;++k){const C=P[k],F=C.start,ue=C.count;for(let se=F,ge=F+ue;se<ge;se+=3)O(e.getX(se+0)),O(e.getX(se+1)),O(e.getX(se+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ai(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new le,u=new le,f=new le,h=new le,p=new le,m=new le,g=new le,_=new le;if(e)for(let x=0,M=e.count;x<M;x+=3){const E=e.getX(x+0),b=e.getX(x+1),S=e.getX(x+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,S),g.subVectors(f,u),_.subVectors(l,u),g.cross(_),h.fromBufferAttribute(r,E),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,S),h.add(g),p.add(g),m.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,u),_.subVectors(l,u),g.cross(_),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(h,p){const m=h.array,g=h.itemSize,_=h.normalized,x=new m.constructor(p.length*g);let M=0,E=0;for(let b=0,S=p.length;b<S;b++){h.isInterleavedBufferAttribute?M=p[b]*h.data.stride+h.offset:M=p[b]*g;for(let v=0;v<g;v++)x[E++]=m[M++]}return new Ai(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ya,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,r);i.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let g=0,_=m.length;g<_;g++){const x=m[g],M=e(x,r);p.push(M)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const m=f[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,x=m.length;_<x;_++){const M=m[_];g.push(M.toJSON(e.data))}g.length>0&&(l[p]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const u=e.morphAttributes;for(const m in u){const g=[],_=u[m];for(let x=0,M=_.length;x<M;x++)g.push(_[x].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,g=f.length;m<g;m++){const _=f[m];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uv=new an,Er=new Y0,Tu=new ac,Lv=new le,Au=new le,Ru=new le,Cu=new le,qd=new le,wu=new le,Nv=new le,Du=new le;class ma extends Wn{constructor(e=new ya,i=new Q0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){wu.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=h[p],_=u[p];g!==0&&(qd.fromBufferAttribute(_,e),f?wu.addScaledVector(qd,g):wu.addScaledVector(qd.sub(i),g))}i.add(wu)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Tu.copy(r.boundingSphere),Tu.applyMatrix4(u),Er.copy(e.ray).recast(e.near),!(Tu.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Tu,Lv)===null||Er.origin.distanceToSquared(Lv)>(e.far-e.near)**2))&&(Uv.copy(u).invert(),Er.copy(e.ray).applyMatrix4(Uv),!(r.boundingBox!==null&&Er.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Er)))}_computeIntersections(e,i,r){let l;const u=this.geometry,f=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,_=u.attributes.normal,x=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,b=x.length;E<b;E++){const S=x[E],v=f[S.materialIndex],P=Math.max(S.start,M.start),U=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let D=P,H=U;D<H;D+=3){const z=h.getX(D),O=h.getX(D+1),k=h.getX(D+2);l=Uu(this,v,e,r,m,g,_,z,O,k),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),b=Math.min(h.count,M.start+M.count);for(let S=E,v=b;S<v;S+=3){const P=h.getX(S),U=h.getX(S+1),D=h.getX(S+2);l=Uu(this,f,e,r,m,g,_,P,U,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,b=x.length;E<b;E++){const S=x[E],v=f[S.materialIndex],P=Math.max(S.start,M.start),U=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let D=P,H=U;D<H;D+=3){const z=D,O=D+1,k=D+2;l=Uu(this,v,e,r,m,g,_,z,O,k),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),b=Math.min(p.count,M.start+M.count);for(let S=E,v=b;S<v;S+=3){const P=S,U=S+1,D=S+2;l=Uu(this,f,e,r,m,g,_,P,U,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function Cb(s,e,i,r,l,u,f,h){let p;if(e.side===kn?p=r.intersectTriangle(f,u,l,!0,h):p=r.intersectTriangle(l,u,f,e.side===er,h),p===null)return null;Du.copy(h),Du.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(Du);return m<i.near||m>i.far?null:{distance:m,point:Du.clone(),object:s}}function Uu(s,e,i,r,l,u,f,h,p,m){s.getVertexPosition(h,Au),s.getVertexPosition(p,Ru),s.getVertexPosition(m,Cu);const g=Cb(s,e,i,r,Au,Ru,Cu,Nv);if(g){const _=new le;Mi.getBarycoord(Nv,Au,Ru,Cu,_),l&&(g.uv=Mi.getInterpolatedAttribute(l,h,p,m,_,new Gt)),u&&(g.uv1=Mi.getInterpolatedAttribute(u,h,p,m,_,new Gt)),f&&(g.normal=Mi.getInterpolatedAttribute(f,h,p,m,_,new le),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:p,c:m,normal:new le,materialIndex:0};Mi.getNormal(Au,Ru,Cu,x.normal),g.face=x,g.barycoord=_}return g}class il extends ya{constructor(e=1,i=1,r=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:f};const h=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],g=[],_=[];let x=0,M=0;E("z","y","x",-1,-1,r,i,e,f,u,0),E("z","y","x",1,-1,r,i,-e,f,u,1),E("x","z","y",1,1,e,r,i,l,f,2),E("x","z","y",1,-1,e,r,-i,l,f,3),E("x","y","z",1,-1,e,i,r,l,u,4),E("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new Nr(m,3)),this.setAttribute("normal",new Nr(g,3)),this.setAttribute("uv",new Nr(_,2));function E(b,S,v,P,U,D,H,z,O,k,w){const C=D/O,F=H/k,ue=D/2,se=H/2,ge=z/2,de=O+1,B=k+1;let Q=0,K=0;const Me=new le;for(let me=0;me<B;me++){const N=me*F-se;for(let $=0;$<de;$++){const xe=$*C-ue;Me[b]=xe*P,Me[S]=N*U,Me[v]=ge,m.push(Me.x,Me.y,Me.z),Me[b]=0,Me[S]=0,Me[v]=z>0?1:-1,g.push(Me.x,Me.y,Me.z),_.push($/O),_.push(1-me/k),Q+=1}}for(let me=0;me<k;me++)for(let N=0;N<O;N++){const $=x+N+de*me,xe=x+N+de*(me+1),q=x+(N+1)+de*(me+1),pe=x+(N+1)+de*me;p.push($,xe,pe),p.push(xe,q,pe),K+=6}h.addGroup(M,K,w),M+=K,x+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Nn(s){const e={};for(let i=0;i<s.length;i++){const r=zs(s[i]);for(const l in r)e[l]=r[l]}return e}function wb(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function ex(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const Db={clone:zs,merge:Nn};var Ub=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tr extends nl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ub,this.fragmentShader=Lb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=wb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class tx extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=pa}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Za=new le,Ov=new Gt,Pv=new Gt;class di extends tx{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Xh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ad*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xh*2*Math.atan(Math.tan(Ad*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Za.x,Za.y).multiplyScalar(-e/Za.z),Za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Za.x,Za.y).multiplyScalar(-e/Za.z)}getViewSize(e,i){return this.getViewBounds(e,Ov,Pv),i.subVectors(Pv,Ov)}setViewOffset(e,i,r,l,u,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ad*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*l/p,i-=f.offsetY*r/m,l*=f.width/p,r*=f.height/m}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const As=-90,Rs=1;class Nb extends Wn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new di(As,Rs,e,i);l.layers=this.layers,this.add(l);const u=new di(As,Rs,e,i);u.layers=this.layers,this.add(u);const f=new di(As,Rs,e,i);f.layers=this.layers,this.add(f);const h=new di(As,Rs,e,i);h.layers=this.layers,this.add(h);const p=new di(As,Rs,e,i);p.layers=this.layers,this.add(p);const m=new di(As,Rs,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,f,h,p]=i;for(const m of i)this.remove(m);if(e===pa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ku)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,h,p,m,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,f),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(_,x,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class nx extends Xn{constructor(e=[],i=Ns,r,l,u,f,h,p,m,g){super(e,i,r,l,u,f,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ob extends Pr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new nx(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:zi}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new il(5,5,5),u=new tr({name:"CubemapFromEquirect",uniforms:zs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:Qa});u.uniforms.tEquirect.value=i;const f=new ma(l,u),h=i.minFilter;return i.minFilter===Lr&&(i.minFilter=zi),new Nb(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(u)}}class Lu extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pb={type:"move"};class jd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,f=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const b of e.hand.values()){const S=i.getJointPose(b,r),v=this._getHandJoint(m,b);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=g.position.distanceTo(_.position),M=.02,E=.005;m.inputState.pinching&&x>M+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Pb)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Lu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class zb extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xa,this.environmentIntensity=1,this.environmentRotation=new xa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Yd=new le,Bb=new le,Ib=new ut;class Rr{constructor(e=new le(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Yd.subVectors(r,i).cross(Bb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Yd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Ib.getNormalMatrix(e),l=this.coplanarPoint(Yd).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new ac,Nu=new le;class ix{constructor(e=new Rr,i=new Rr,r=new Rr,l=new Rr,u=new Rr,f=new Rr){this.planes=[e,i,r,l,u,f]}set(e,i,r,l,u,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=pa){const r=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],m=l[4],g=l[5],_=l[6],x=l[7],M=l[8],E=l[9],b=l[10],S=l[11],v=l[12],P=l[13],U=l[14],D=l[15];if(r[0].setComponents(p-u,x-m,S-M,D-v).normalize(),r[1].setComponents(p+u,x+m,S+M,D+v).normalize(),r[2].setComponents(p+f,x+g,S+E,D+P).normalize(),r[3].setComponents(p-f,x-g,S-E,D-P).normalize(),r[4].setComponents(p-h,x-_,S-b,D-U).normalize(),i===pa)r[5].setComponents(p+h,x+_,S+b,D+U).normalize();else if(i===Ku)r[5].setComponents(h,_,b,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){return br.center.set(0,0,0),br.radius=.7071067811865476,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Nu.x=l.normal.x>0?e.max.x:e.min.x,Nu.y=l.normal.y>0?e.max.y:e.min.y,Nu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Nu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ax extends nl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zv=new an,Wh=new Y0,Ou=new ac,Pu=new le;class Fb extends Wn{constructor(e=new ya,i=new ax){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ou.copy(r.boundingSphere),Ou.applyMatrix4(l),Ou.radius+=u,e.ray.intersectsSphere(Ou)===!1)return;zv.copy(l).invert(),Wh.copy(e.ray).applyMatrix4(zv);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=r.index,_=r.attributes.position;if(m!==null){const x=Math.max(0,f.start),M=Math.min(m.count,f.start+f.count);for(let E=x,b=M;E<b;E++){const S=m.getX(E);Pu.fromBufferAttribute(_,S),Bv(Pu,S,p,l,e,i,this)}}else{const x=Math.max(0,f.start),M=Math.min(_.count,f.start+f.count);for(let E=x,b=M;E<b;E++)Pu.fromBufferAttribute(_,E),Bv(Pu,E,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function Bv(s,e,i,r,l,u,f){const h=Wh.distanceSqToPoint(s);if(h<i){const p=new le;Wh.closestPointToPoint(s,p),p.applyMatrix4(r);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;u.push({distance:m,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class rx extends Xn{constructor(e,i,r=Or,l,u,f,h=Ti,p=Ti,m,g=Yo){if(g!==Yo&&g!==Zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,u,f,h,p,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class rc extends ya{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,f=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,g=p+1,_=e/h,x=i/p,M=[],E=[],b=[],S=[];for(let v=0;v<g;v++){const P=v*x-f;for(let U=0;U<m;U++){const D=U*_-u;E.push(D,-P,0),b.push(0,0,1),S.push(U/h),S.push(1-v/p)}}for(let v=0;v<p;v++)for(let P=0;P<h;P++){const U=P+m*v,D=P+m*(v+1),H=P+1+m*(v+1),z=P+1+m*v;M.push(U,D,z),M.push(D,H,z)}this.setIndex(M),this.setAttribute("position",new Nr(E,3)),this.setAttribute("normal",new Nr(b,3)),this.setAttribute("uv",new Nr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hb extends nl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=KE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gb extends nl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Vb extends tx{constructor(e=-1,i=1,r=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,f=r+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class kb extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Xb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Iv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=Iv();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function Iv(){return performance.now()}function Fv(s,e,i,r){const l=Wb(r);switch(i){case H0:return s*e;case V0:return s*e/l.components*l.byteLength;case lp:return s*e/l.components*l.byteLength;case k0:return s*e*2/l.components*l.byteLength;case up:return s*e*2/l.components*l.byteLength;case G0:return s*e*3/l.components*l.byteLength;case bi:return s*e*4/l.components*l.byteLength;case cp:return s*e*4/l.components*l.byteLength;case Gu:case Vu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ku:case Xu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xh:case Sh:return Math.max(s,16)*Math.max(e,8)/4;case vh:case yh:return Math.max(s,8)*Math.max(e,8)/2;case Mh:case Eh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case bh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Th:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case wh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Nh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case zh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Bh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ih:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Wu:case Fh:case Hh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case X0:case Gh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Vh:case kh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Wb(s){switch(s){case va:case B0:return{byteLength:1,components:1};case qo:case I0:case Jo:return{byteLength:2,components:1};case sp:case op:return{byteLength:2,components:4};case Or:case rp:case ha:return{byteLength:4,components:1};case F0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ap}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ap);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sx(){let s=null,e=!1,i=null,r=null;function l(u,f){i(u,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function qb(s){const e=new WeakMap;function i(h,p){const m=h.array,g=h.usage,_=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,g),h.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,p,m){const g=p.array,_=p.updateRanges;if(s.bindBuffer(m,h),_.length===0)s.bufferSubData(m,0,g);else{_.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<_.length;M++){const E=_[x],b=_[M];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++x,_[x]=b)}_.length=x+1;for(let M=0,E=_.length;M<E;M++){const b=_[M];s.bufferSubData(m,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(s.deleteBuffer(p.buffer),e.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:u,update:f}}var jb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$b=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_T=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ST=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,MT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ET="gl_FragColor = linearToOutputTexel( gl_FragColor );",bT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,AT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,RT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,CT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,DT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,PT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,FT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,HT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,WT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,YT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$T=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,n1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,u1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,f1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,d1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,g1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,M1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,T1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,C1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,w1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,D1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,U1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,L1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,O1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,z1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,H1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,G1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,V1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,k1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,X1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,W1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const q1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_A=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,SA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:jb,alphahash_pars_fragment:Yb,alphamap_fragment:Zb,alphamap_pars_fragment:Kb,alphatest_fragment:Qb,alphatest_pars_fragment:Jb,aomap_fragment:$b,aomap_pars_fragment:eT,batching_pars_vertex:tT,batching_vertex:nT,begin_vertex:iT,beginnormal_vertex:aT,bsdfs:rT,iridescence_fragment:sT,bumpmap_pars_fragment:oT,clipping_planes_fragment:lT,clipping_planes_pars_fragment:uT,clipping_planes_pars_vertex:cT,clipping_planes_vertex:fT,color_fragment:dT,color_pars_fragment:hT,color_pars_vertex:pT,color_vertex:mT,common:gT,cube_uv_reflection_fragment:_T,defaultnormal_vertex:vT,displacementmap_pars_vertex:xT,displacementmap_vertex:yT,emissivemap_fragment:ST,emissivemap_pars_fragment:MT,colorspace_fragment:ET,colorspace_pars_fragment:bT,envmap_fragment:TT,envmap_common_pars_fragment:AT,envmap_pars_fragment:RT,envmap_pars_vertex:CT,envmap_physical_pars_fragment:FT,envmap_vertex:wT,fog_vertex:DT,fog_pars_vertex:UT,fog_fragment:LT,fog_pars_fragment:NT,gradientmap_pars_fragment:OT,lightmap_pars_fragment:PT,lights_lambert_fragment:zT,lights_lambert_pars_fragment:BT,lights_pars_begin:IT,lights_toon_fragment:HT,lights_toon_pars_fragment:GT,lights_phong_fragment:VT,lights_phong_pars_fragment:kT,lights_physical_fragment:XT,lights_physical_pars_fragment:WT,lights_fragment_begin:qT,lights_fragment_maps:jT,lights_fragment_end:YT,logdepthbuf_fragment:ZT,logdepthbuf_pars_fragment:KT,logdepthbuf_pars_vertex:QT,logdepthbuf_vertex:JT,map_fragment:$T,map_pars_fragment:e1,map_particle_fragment:t1,map_particle_pars_fragment:n1,metalnessmap_fragment:i1,metalnessmap_pars_fragment:a1,morphinstance_vertex:r1,morphcolor_vertex:s1,morphnormal_vertex:o1,morphtarget_pars_vertex:l1,morphtarget_vertex:u1,normal_fragment_begin:c1,normal_fragment_maps:f1,normal_pars_fragment:d1,normal_pars_vertex:h1,normal_vertex:p1,normalmap_pars_fragment:m1,clearcoat_normal_fragment_begin:g1,clearcoat_normal_fragment_maps:_1,clearcoat_pars_fragment:v1,iridescence_pars_fragment:x1,opaque_fragment:y1,packing:S1,premultiplied_alpha_fragment:M1,project_vertex:E1,dithering_fragment:b1,dithering_pars_fragment:T1,roughnessmap_fragment:A1,roughnessmap_pars_fragment:R1,shadowmap_pars_fragment:C1,shadowmap_pars_vertex:w1,shadowmap_vertex:D1,shadowmask_pars_fragment:U1,skinbase_vertex:L1,skinning_pars_vertex:N1,skinning_vertex:O1,skinnormal_vertex:P1,specularmap_fragment:z1,specularmap_pars_fragment:B1,tonemapping_fragment:I1,tonemapping_pars_fragment:F1,transmission_fragment:H1,transmission_pars_fragment:G1,uv_pars_fragment:V1,uv_pars_vertex:k1,uv_vertex:X1,worldpos_vertex:W1,background_vert:q1,background_frag:j1,backgroundCube_vert:Y1,backgroundCube_frag:Z1,cube_vert:K1,cube_frag:Q1,depth_vert:J1,depth_frag:$1,distanceRGBA_vert:eA,distanceRGBA_frag:tA,equirect_vert:nA,equirect_frag:iA,linedashed_vert:aA,linedashed_frag:rA,meshbasic_vert:sA,meshbasic_frag:oA,meshlambert_vert:lA,meshlambert_frag:uA,meshmatcap_vert:cA,meshmatcap_frag:fA,meshnormal_vert:dA,meshnormal_frag:hA,meshphong_vert:pA,meshphong_frag:mA,meshphysical_vert:gA,meshphysical_frag:_A,meshtoon_vert:vA,meshtoon_frag:xA,points_vert:yA,points_frag:SA,shadow_vert:MA,shadow_frag:EA,sprite_vert:bA,sprite_frag:TA},Ne={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Oi={basic:{uniforms:Nn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Nn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new wt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Nn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Nn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Nn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new wt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Nn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Nn([Ne.points,Ne.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Nn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Nn([Ne.common,Ne.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Nn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Nn([Ne.sprite,Ne.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Nn([Ne.common,Ne.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Nn([Ne.lights,Ne.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Oi.physical={uniforms:Nn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const zu={r:0,b:0,g:0},Tr=new xa,AA=new an;function RA(s,e,i,r,l,u,f){const h=new wt(0);let p=u===!0?0:1,m,g,_=null,x=0,M=null;function E(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?i:e).get(D)),D}function b(U){let D=!1;const H=E(U);H===null?v(h,p):H&&H.isColor&&(v(H,1),D=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,f):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(U,D){const H=E(D);H&&(H.isCubeTexture||H.mapping===ic)?(g===void 0&&(g=new ma(new il(1,1,1),new tr({name:"BackgroundCubeMaterial",uniforms:zs(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,O,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Tr.copy(D.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),g.material.uniforms.envMap.value=H,g.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(AA.makeRotationFromEuler(Tr)),g.material.toneMapped=Rt.getTransfer(H.colorSpace)!==It,(_!==H||x!==H.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,_=H,x=H.version,M=s.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):H&&H.isTexture&&(m===void 0&&(m=new ma(new rc(2,2),new tr({name:"BackgroundMaterial",uniforms:zs(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=H,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Rt.getTransfer(H.colorSpace)!==It,H.matrixAutoUpdate===!0&&H.updateMatrix(),m.material.uniforms.uvTransform.value.copy(H.matrix),(_!==H||x!==H.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,_=H,x=H.version,M=s.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function v(U,D){U.getRGB(zu,ex(s)),r.buffers.color.setClear(zu.r,zu.g,zu.b,D,f)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,D=1){h.set(U),p=D,v(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,v(h,p)},render:b,addToRenderList:S,dispose:P}}function CA(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,f=!1;function h(C,F,ue,se,ge){let de=!1;const B=_(se,ue,F);u!==B&&(u=B,m(u.object)),de=M(C,se,ue,ge),de&&E(C,se,ue,ge),ge!==null&&e.update(ge,s.ELEMENT_ARRAY_BUFFER),(de||f)&&(f=!1,D(C,F,ue,se),ge!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ge).buffer))}function p(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function _(C,F,ue){const se=ue.wireframe===!0;let ge=r[C.id];ge===void 0&&(ge={},r[C.id]=ge);let de=ge[F.id];de===void 0&&(de={},ge[F.id]=de);let B=de[se];return B===void 0&&(B=x(p()),de[se]=B),B}function x(C){const F=[],ue=[],se=[];for(let ge=0;ge<i;ge++)F[ge]=0,ue[ge]=0,se[ge]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ue,attributeDivisors:se,object:C,attributes:{},index:null}}function M(C,F,ue,se){const ge=u.attributes,de=F.attributes;let B=0;const Q=ue.getAttributes();for(const K in Q)if(Q[K].location>=0){const me=ge[K];let N=de[K];if(N===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),me===void 0||me.attribute!==N||N&&me.data!==N.data)return!0;B++}return u.attributesNum!==B||u.index!==se}function E(C,F,ue,se){const ge={},de=F.attributes;let B=0;const Q=ue.getAttributes();for(const K in Q)if(Q[K].location>=0){let me=de[K];me===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(me=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(me=C.instanceColor));const N={};N.attribute=me,me&&me.data&&(N.data=me.data),ge[K]=N,B++}u.attributes=ge,u.attributesNum=B,u.index=se}function b(){const C=u.newAttributes;for(let F=0,ue=C.length;F<ue;F++)C[F]=0}function S(C){v(C,0)}function v(C,F){const ue=u.newAttributes,se=u.enabledAttributes,ge=u.attributeDivisors;ue[C]=1,se[C]===0&&(s.enableVertexAttribArray(C),se[C]=1),ge[C]!==F&&(s.vertexAttribDivisor(C,F),ge[C]=F)}function P(){const C=u.newAttributes,F=u.enabledAttributes;for(let ue=0,se=F.length;ue<se;ue++)F[ue]!==C[ue]&&(s.disableVertexAttribArray(ue),F[ue]=0)}function U(C,F,ue,se,ge,de,B){B===!0?s.vertexAttribIPointer(C,F,ue,ge,de):s.vertexAttribPointer(C,F,ue,se,ge,de)}function D(C,F,ue,se){b();const ge=se.attributes,de=ue.getAttributes(),B=F.defaultAttributeValues;for(const Q in de){const K=de[Q];if(K.location>=0){let Me=ge[Q];if(Me===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(Me=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(Me=C.instanceColor)),Me!==void 0){const me=Me.normalized,N=Me.itemSize,$=e.get(Me);if($===void 0)continue;const xe=$.buffer,q=$.type,pe=$.bytesPerElement,Te=q===s.INT||q===s.UNSIGNED_INT||Me.gpuType===rp;if(Me.isInterleavedBufferAttribute){const Ee=Me.data,Be=Ee.stride,Ye=Me.offset;if(Ee.isInstancedInterleavedBuffer){for(let Ke=0;Ke<K.locationSize;Ke++)v(K.location+Ke,Ee.meshPerAttribute);C.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Ke=0;Ke<K.locationSize;Ke++)S(K.location+Ke);s.bindBuffer(s.ARRAY_BUFFER,xe);for(let Ke=0;Ke<K.locationSize;Ke++)U(K.location+Ke,N/K.locationSize,q,me,Be*pe,(Ye+N/K.locationSize*Ke)*pe,Te)}else{if(Me.isInstancedBufferAttribute){for(let Ee=0;Ee<K.locationSize;Ee++)v(K.location+Ee,Me.meshPerAttribute);C.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ee=0;Ee<K.locationSize;Ee++)S(K.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,xe);for(let Ee=0;Ee<K.locationSize;Ee++)U(K.location+Ee,N/K.locationSize,q,me,N*pe,N/K.locationSize*Ee*pe,Te)}}else if(B!==void 0){const me=B[Q];if(me!==void 0)switch(me.length){case 2:s.vertexAttrib2fv(K.location,me);break;case 3:s.vertexAttrib3fv(K.location,me);break;case 4:s.vertexAttrib4fv(K.location,me);break;default:s.vertexAttrib1fv(K.location,me)}}}}P()}function H(){k();for(const C in r){const F=r[C];for(const ue in F){const se=F[ue];for(const ge in se)g(se[ge].object),delete se[ge];delete F[ue]}delete r[C]}}function z(C){if(r[C.id]===void 0)return;const F=r[C.id];for(const ue in F){const se=F[ue];for(const ge in se)g(se[ge].object),delete se[ge];delete F[ue]}delete r[C.id]}function O(C){for(const F in r){const ue=r[F];if(ue[C.id]===void 0)continue;const se=ue[C.id];for(const ge in se)g(se[ge].object),delete se[ge];delete ue[C.id]}}function k(){w(),f=!0,u!==l&&(u=l,m(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:k,resetDefaultState:w,dispose:H,releaseStatesOfGeometry:z,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:S,disableUnusedAttributes:P}}function wA(s,e,i){let r;function l(m){r=m}function u(m,g){s.drawArrays(r,m,g),i.update(g,r,1)}function f(m,g,_){_!==0&&(s.drawArraysInstanced(r,m,g,_),i.update(g,r,_))}function h(m,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,_);let M=0;for(let E=0;E<_;E++)M+=g[E];i.update(M,r,1)}function p(m,g,_,x){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<m.length;E++)f(m[E],g[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,g,0,x,0,_);let E=0;for(let b=0;b<_;b++)E+=g[b]*x[b];i.update(E,r,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function DA(s,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(O){return!(O!==bi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const k=O===Jo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==va&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ha&&!k)}function p(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,z=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:P,maxVaryings:U,maxFragmentUniforms:D,vertexTextures:H,maxSamples:z}}function UA(s){const e=this;let i=null,r=0,l=!1,u=!1;const f=new Rr,h=new ut,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||r!==0||l;return l=x,r=_.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,M){const E=_.clippingPlanes,b=_.clipIntersection,S=_.clipShadows,v=s.get(_);if(!l||E===null||E.length===0||u&&!S)u?g(null):m();else{const P=u?0:r,U=P*4;let D=v.clippingState||null;p.value=D,D=g(E,x,U,M);for(let H=0;H!==U;++H)D[H]=i[H];v.clippingState=D,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,x,M,E){const b=_!==null?_.length:0;let S=null;if(b!==0){if(S=p.value,E!==!0||S===null){const v=M+b*4,P=x.matrixWorldInverse;h.getNormalMatrix(P),(S===null||S.length<v)&&(S=new Float32Array(v));for(let U=0,D=M;U!==b;++U,D+=4)f.copy(_[U]).applyMatrix4(P,h),f.normal.toArray(S,D),S[D+3]=f.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,S}}function LA(s){let e=new WeakMap;function i(f,h){return h===ph?f.mapping=Ns:h===mh&&(f.mapping=Os),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===ph||h===mh)if(e.has(f)){const p=e.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new Ob(p.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const ws=4,Hv=[.125,.215,.35,.446,.526,.582],Dr=20,Zd=new Vb,Gv=new wt;let Kd=null,Qd=0,Jd=0,$d=!1;const Cr=(1+Math.sqrt(5))/2,Cs=1/Cr,Vv=[new le(-Cr,Cs,0),new le(Cr,Cs,0),new le(-Cs,0,Cr),new le(Cs,0,Cr),new le(0,Cr,-Cs),new le(0,Cr,Cs),new le(-1,1,-1),new le(1,1,-1),new le(-1,1,1),new le(1,1,1)],NA=new le;class kv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:f=256,position:h=NA}=u;Kd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kd,Qd,Jd),this._renderer.xr.enabled=$d,e.scissorTest=!1,Bu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ns||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:zi,minFilter:zi,generateMipmaps:!1,type:Jo,format:bi,colorSpace:Ps,depthBuffer:!1},l=Xv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xv(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OA(u)),this._blurMaterial=PA(u,e,i)}return l}_compileMaterial(e){const i=new ma(this._lodPlanes[0],e);this._renderer.compile(i,Zd)}_sceneToCubeUV(e,i,r,l,u){const p=new di(90,1,i,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(Gv),_.toneMapping=Ja,_.autoClear=!1;const E=new Q0({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),b=new ma(new il,E);let S=!1;const v=e.background;v?v.isColor&&(E.color.copy(v),e.background=null,S=!0):(E.color.copy(Gv),S=!0);for(let P=0;P<6;P++){const U=P%3;U===0?(p.up.set(0,m[P],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+g[P],u.y,u.z)):U===1?(p.up.set(0,0,m[P]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+g[P],u.z)):(p.up.set(0,m[P],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+g[P]));const D=this._cubeSize;Bu(l,U*D,P>2?D:0,D,D),_.setRenderTarget(l),S&&_.render(b,p),_.render(e,p)}b.geometry.dispose(),b.material.dispose(),_.toneMapping=M,_.autoClear=x,e.background=v}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ns||e.mapping===Os;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=qv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wv());const u=l?this._cubemapMaterial:this._equirectMaterial,f=new ma(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const p=this._cubeSize;Bu(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(f,Zd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=Vv[(l-u-1)%Vv.length];this._blur(e,u-1,u,f,h)}i.autoClear=r}_blur(e,i,r,l,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",u),this._halfBlur(f,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,f,h){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new ma(this._lodPlanes[l],m),x=m.uniforms,M=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Dr-1),b=u/E,S=isFinite(u)?1+Math.floor(g*b):Dr;S>Dr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Dr}`);const v=[];let P=0;for(let O=0;O<Dr;++O){const k=O/b,w=Math.exp(-k*k/2);v.push(w),O===0?P+=w:O<S&&(P+=2*w)}for(let O=0;O<v.length;O++)v[O]=v[O]/P;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=v,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:U}=this;x.dTheta.value=E,x.mipInt.value=U-r;const D=this._sizeLods[l],H=3*D*(l>U-ws?l-U+ws:0),z=4*(this._cubeSize-D);Bu(i,H,z,3*D,2*D),p.setRenderTarget(i),p.render(_,Zd)}}function OA(s){const e=[],i=[],r=[];let l=s;const u=s-ws+1+Hv.length;for(let f=0;f<u;f++){const h=Math.pow(2,l);i.push(h);let p=1/h;f>s-ws?p=Hv[f-s+ws-1]:f===0&&(p=0),r.push(p);const m=1/(h-2),g=-m,_=1+m,x=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,E=6,b=3,S=2,v=1,P=new Float32Array(b*E*M),U=new Float32Array(S*E*M),D=new Float32Array(v*E*M);for(let z=0;z<M;z++){const O=z%3*2/3-1,k=z>2?0:-1,w=[O,k,0,O+2/3,k,0,O+2/3,k+1,0,O,k,0,O+2/3,k+1,0,O,k+1,0];P.set(w,b*E*z),U.set(x,S*E*z);const C=[z,z,z,z,z,z];D.set(C,v*E*z)}const H=new ya;H.setAttribute("position",new Ai(P,b)),H.setAttribute("uv",new Ai(U,S)),H.setAttribute("faceIndex",new Ai(D,v)),e.push(H),l>ws&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function Xv(s,e,i){const r=new Pr(s,e,i);return r.texture.mapping=ic,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Bu(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function PA(s,e,i){const r=new Float32Array(Dr),l=new le(0,1,0);return new tr({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function Wv(){return new tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function qv(){return new tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function dp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zA(s){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const p=h.mapping,m=p===ph||p===mh,g=p===Ns||p===Os;if(m||g){let _=e.get(h);const x=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new kv(s)),_=m?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const M=h.image;return m&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new kv(s)),_=m?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",u),_.texture):null}}}return h}function l(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function u(h){const p=h.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function BA(s){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&qu("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function IA(s,e,i,r){const l={},u=new WeakMap;function f(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const M=u.get(x);M&&(e.remove(M),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(_,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function p(_){const x=_.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function m(_){const x=[],M=_.index,E=_.attributes.position;let b=0;if(M!==null){const P=M.array;b=M.version;for(let U=0,D=P.length;U<D;U+=3){const H=P[U+0],z=P[U+1],O=P[U+2];x.push(H,z,z,O,O,H)}}else if(E!==void 0){const P=E.array;b=E.version;for(let U=0,D=P.length/3-1;U<D;U+=3){const H=U+0,z=U+1,O=U+2;x.push(H,z,z,O,O,H)}}else return;const S=new(q0(x)?$0:J0)(x,1);S.version=b;const v=u.get(_);v&&e.remove(v),u.set(_,S)}function g(_){const x=u.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&m(_)}else m(_);return u.get(_)}return{get:h,update:p,getWireframeAttribute:g}}function FA(s,e,i){let r;function l(x){r=x}let u,f;function h(x){u=x.type,f=x.bytesPerElement}function p(x,M){s.drawElements(r,M,u,x*f),i.update(M,r,1)}function m(x,M,E){E!==0&&(s.drawElementsInstanced(r,M,u,x*f,E),i.update(M,r,E))}function g(x,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,x,0,E);let S=0;for(let v=0;v<E;v++)S+=M[v];i.update(S,r,1)}function _(x,M,E,b){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<x.length;v++)m(x[v]/f,M[v],b[v]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,u,x,0,b,0,E);let v=0;for(let P=0;P<E;P++)v+=M[P]*b[P];i.update(v,r,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function HA(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(u/3);break;case s.LINES:i.lines+=h*(u/2);break;case s.LINE_STRIP:i.lines+=h*(u-1);break;case s.LINE_LOOP:i.lines+=h*u;break;case s.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function GA(s,e,i){const r=new WeakMap,l=new nn;function u(f,h,p){const m=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let x=r.get(h);if(x===void 0||x.count!==_){let C=function(){k.dispose(),r.delete(h),h.removeEventListener("dispose",C)};var M=C;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let D=0;E===!0&&(D=1),b===!0&&(D=2),S===!0&&(D=3);let H=h.attributes.position.count*D,z=1;H>e.maxTextureSize&&(z=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const O=new Float32Array(H*z*4*_),k=new j0(O,H,z,_);k.type=ha,k.needsUpdate=!0;const w=D*4;for(let F=0;F<_;F++){const ue=v[F],se=P[F],ge=U[F],de=H*z*4*F;for(let B=0;B<ue.count;B++){const Q=B*w;E===!0&&(l.fromBufferAttribute(ue,B),O[de+Q+0]=l.x,O[de+Q+1]=l.y,O[de+Q+2]=l.z,O[de+Q+3]=0),b===!0&&(l.fromBufferAttribute(se,B),O[de+Q+4]=l.x,O[de+Q+5]=l.y,O[de+Q+6]=l.z,O[de+Q+7]=0),S===!0&&(l.fromBufferAttribute(ge,B),O[de+Q+8]=l.x,O[de+Q+9]=l.y,O[de+Q+10]=l.z,O[de+Q+11]=ge.itemSize===4?l.w:1)}}x={count:_,texture:k,size:new Gt(H,z)},r.set(h,x),h.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let S=0;S<m.length;S++)E+=m[S];const b=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",b),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function VA(s,e,i,r){let l=new WeakMap;function u(p){const m=r.render.frame,g=p.geometry,_=e.get(p,g);if(l.get(_)!==m&&(e.update(_),l.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return _}function f(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:f}}const ox=new Xn,jv=new rx(1,1),lx=new j0,ux=new _b,cx=new nx,Yv=[],Zv=[],Kv=new Float32Array(16),Qv=new Float32Array(9),Jv=new Float32Array(4);function Gs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let u=Yv[l];if(u===void 0&&(u=new Float32Array(l),Yv[l]=u),e!==0){r.toArray(u,0);for(let f=1,h=0;f!==e;++f)h+=i,s[f].toArray(u,h)}return u}function hn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function pn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function sc(s,e){let i=Zv[e];i===void 0&&(i=new Int32Array(e),Zv[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function kA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function XA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;s.uniform2fv(this.addr,e),pn(i,e)}}function WA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(hn(i,e))return;s.uniform3fv(this.addr,e),pn(i,e)}}function qA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;s.uniform4fv(this.addr,e),pn(i,e)}}function jA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(hn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),pn(i,e)}else{if(hn(i,r))return;Jv.set(r),s.uniformMatrix2fv(this.addr,!1,Jv),pn(i,r)}}function YA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(hn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),pn(i,e)}else{if(hn(i,r))return;Qv.set(r),s.uniformMatrix3fv(this.addr,!1,Qv),pn(i,r)}}function ZA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(hn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),pn(i,e)}else{if(hn(i,r))return;Kv.set(r),s.uniformMatrix4fv(this.addr,!1,Kv),pn(i,r)}}function KA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function QA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;s.uniform2iv(this.addr,e),pn(i,e)}}function JA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;s.uniform3iv(this.addr,e),pn(i,e)}}function $A(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;s.uniform4iv(this.addr,e),pn(i,e)}}function e2(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function t2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;s.uniform2uiv(this.addr,e),pn(i,e)}}function n2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;s.uniform3uiv(this.addr,e),pn(i,e)}}function i2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;s.uniform4uiv(this.addr,e),pn(i,e)}}function a2(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(jv.compareFunction=W0,u=jv):u=ox,i.setTexture2D(e||u,l)}function r2(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||ux,l)}function s2(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||cx,l)}function o2(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||lx,l)}function l2(s){switch(s){case 5126:return kA;case 35664:return XA;case 35665:return WA;case 35666:return qA;case 35674:return jA;case 35675:return YA;case 35676:return ZA;case 5124:case 35670:return KA;case 35667:case 35671:return QA;case 35668:case 35672:return JA;case 35669:case 35673:return $A;case 5125:return e2;case 36294:return t2;case 36295:return n2;case 36296:return i2;case 35678:case 36198:case 36298:case 36306:case 35682:return a2;case 35679:case 36299:case 36307:return r2;case 35680:case 36300:case 36308:case 36293:return s2;case 36289:case 36303:case 36311:case 36292:return o2}}function u2(s,e){s.uniform1fv(this.addr,e)}function c2(s,e){const i=Gs(e,this.size,2);s.uniform2fv(this.addr,i)}function f2(s,e){const i=Gs(e,this.size,3);s.uniform3fv(this.addr,i)}function d2(s,e){const i=Gs(e,this.size,4);s.uniform4fv(this.addr,i)}function h2(s,e){const i=Gs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function p2(s,e){const i=Gs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function m2(s,e){const i=Gs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function g2(s,e){s.uniform1iv(this.addr,e)}function _2(s,e){s.uniform2iv(this.addr,e)}function v2(s,e){s.uniform3iv(this.addr,e)}function x2(s,e){s.uniform4iv(this.addr,e)}function y2(s,e){s.uniform1uiv(this.addr,e)}function S2(s,e){s.uniform2uiv(this.addr,e)}function M2(s,e){s.uniform3uiv(this.addr,e)}function E2(s,e){s.uniform4uiv(this.addr,e)}function b2(s,e,i){const r=this.cache,l=e.length,u=sc(i,l);hn(r,u)||(s.uniform1iv(this.addr,u),pn(r,u));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||ox,u[f])}function T2(s,e,i){const r=this.cache,l=e.length,u=sc(i,l);hn(r,u)||(s.uniform1iv(this.addr,u),pn(r,u));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||ux,u[f])}function A2(s,e,i){const r=this.cache,l=e.length,u=sc(i,l);hn(r,u)||(s.uniform1iv(this.addr,u),pn(r,u));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||cx,u[f])}function R2(s,e,i){const r=this.cache,l=e.length,u=sc(i,l);hn(r,u)||(s.uniform1iv(this.addr,u),pn(r,u));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||lx,u[f])}function C2(s){switch(s){case 5126:return u2;case 35664:return c2;case 35665:return f2;case 35666:return d2;case 35674:return h2;case 35675:return p2;case 35676:return m2;case 5124:case 35670:return g2;case 35667:case 35671:return _2;case 35668:case 35672:return v2;case 35669:case 35673:return x2;case 5125:return y2;case 36294:return S2;case 36295:return M2;case 36296:return E2;case 35678:case 36198:case 36298:case 36306:case 35682:return b2;case 35679:case 36299:case 36307:return T2;case 35680:case 36300:case 36308:case 36293:return A2;case 36289:case 36303:case 36311:case 36292:return R2}}class w2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=l2(i.type)}}class D2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=C2(i.type)}}class U2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const eh=/(\w+)(\])?(\[|\.)?/g;function $v(s,e){s.seq.push(e),s.map[e.id]=e}function L2(s,e,i){const r=s.name,l=r.length;for(eh.lastIndex=0;;){const u=eh.exec(r),f=eh.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&f+2===l){$v(i,m===void 0?new w2(h,s,e):new D2(h,s,e));break}else{let _=i.map[h];_===void 0&&(_=new U2(h),$v(i,_)),i=_}}}class ju{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),f=e.getUniformLocation(i,u.name);L2(u,f,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,f=i.length;u!==f;++u){const h=i[u],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function e0(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const N2=37297;let O2=0;function P2(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let f=l;f<u;f++){const h=f+1;r.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const t0=new ut;function z2(s){Rt._getMatrix(t0,Rt.workingColorSpace,s);const e=`mat3( ${t0.elements.map(i=>i.toFixed(4))} )`;switch(Rt.getTransfer(s)){case Zu:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function n0(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=s.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+P2(s.getShaderSource(e),f)}else return l}function B2(s,e){const i=z2(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function I2(s,e){let i;switch(e){case VE:i="Linear";break;case kE:i="Reinhard";break;case XE:i="Cineon";break;case WE:i="ACESFilmic";break;case jE:i="AgX";break;case YE:i="Neutral";break;case qE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Iu=new le;function F2(){Rt.getLuminanceCoefficients(Iu);const s=Iu.x.toFixed(4),e=Iu.y.toFixed(4),i=Iu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H2(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function G2(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function V2(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(e,l),f=u.name;let h=1;u.type===s.FLOAT_MAT2&&(h=2),u.type===s.FLOAT_MAT3&&(h=3),u.type===s.FLOAT_MAT4&&(h=4),i[f]={type:u.type,location:s.getAttribLocation(e,f),locationSize:h}}return i}function ko(s){return s!==""}function i0(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function a0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const k2=/^[ \t]*#include +<([\w\d./]+)>/gm;function qh(s){return s.replace(k2,W2)}const X2=new Map;function W2(s,e){let i=ct[e];if(i===void 0){const r=X2.get(e);if(r!==void 0)i=ct[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return qh(i)}const q2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function r0(s){return s.replace(q2,j2)}function j2(s,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function s0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Y2(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===O0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===SE?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fa&&(e="SHADOWMAP_TYPE_VSM"),e}function Z2(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ns:case Os:e="ENVMAP_TYPE_CUBE";break;case ic:e="ENVMAP_TYPE_CUBE_UV";break}return e}function K2(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function Q2(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case P0:e="ENVMAP_BLENDING_MULTIPLY";break;case HE:e="ENVMAP_BLENDING_MIX";break;case GE:e="ENVMAP_BLENDING_ADD";break}return e}function J2(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function $2(s,e,i,r){const l=s.getContext(),u=i.defines;let f=i.vertexShader,h=i.fragmentShader;const p=Y2(i),m=Z2(i),g=K2(i),_=Q2(i),x=J2(i),M=H2(i),E=G2(u),b=l.createProgram();let S,v,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(ko).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(ko).join(`
`),v.length>0&&(v+=`
`)):(S=[s0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),v=[s0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ja?"#define TONE_MAPPING":"",i.toneMapping!==Ja?ct.tonemapping_pars_fragment:"",i.toneMapping!==Ja?I2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,B2("linearToOutputTexel",i.outputColorSpace),F2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ko).join(`
`)),f=qh(f),f=i0(f,i),f=a0(f,i),h=qh(h),h=i0(h,i),h=a0(h,i),f=r0(f),h=r0(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",i.glslVersion===vv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===vv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=P+S+f,D=P+v+h,H=e0(l,l.VERTEX_SHADER,U),z=e0(l,l.FRAGMENT_SHADER,D);l.attachShader(b,H),l.attachShader(b,z),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function O(F){if(s.debug.checkShaderErrors){const ue=l.getProgramInfoLog(b).trim(),se=l.getShaderInfoLog(H).trim(),ge=l.getShaderInfoLog(z).trim();let de=!0,B=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(de=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,b,H,z);else{const Q=n0(l,H,"vertex"),K=n0(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ue+`
`+Q+`
`+K)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(se===""||ge==="")&&(B=!1);B&&(F.diagnostics={runnable:de,programLog:ue,vertexShader:{log:se,prefix:S},fragmentShader:{log:ge,prefix:v}})}l.deleteShader(H),l.deleteShader(z),k=new ju(l,b),w=V2(l,b)}let k;this.getUniforms=function(){return k===void 0&&O(this),k};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(b,N2)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=O2++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=H,this.fragmentShader=z,this}let eR=0;class tR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new nR(e),i.set(e,r)),r}}class nR{constructor(e){this.id=eR++,this.code=e,this.usedTimes=0}}function iR(s,e,i,r,l,u,f){const h=new Z0,p=new tR,m=new Set,g=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return m.add(w),w===0?"uv":`uv${w}`}function S(w,C,F,ue,se){const ge=ue.fog,de=se.geometry,B=w.isMeshStandardMaterial?ue.environment:null,Q=(w.isMeshStandardMaterial?i:e).get(w.envMap||B),K=Q&&Q.mapping===ic?Q.image.height:null,Me=E[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const me=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,N=me!==void 0?me.length:0;let $=0;de.morphAttributes.position!==void 0&&($=1),de.morphAttributes.normal!==void 0&&($=2),de.morphAttributes.color!==void 0&&($=3);let xe,q,pe,Te;if(Me){const Et=Oi[Me];xe=Et.vertexShader,q=Et.fragmentShader}else xe=w.vertexShader,q=w.fragmentShader,p.update(w),pe=p.getVertexShaderID(w),Te=p.getFragmentShaderID(w);const Ee=s.getRenderTarget(),Be=s.state.buffers.depth.getReversed(),Ye=se.isInstancedMesh===!0,Ke=se.isBatchedMesh===!0,Vt=!!w.map,Ft=!!w.matcap,ft=!!Q,G=!!w.aoMap,Tn=!!w.lightMap,dt=!!w.bumpMap,mt=!!w.normalMap,Xe=!!w.displacementMap,Dt=!!w.emissiveMap,ke=!!w.metalnessMap,L=!!w.roughnessMap,A=w.anisotropy>0,ie=w.clearcoat>0,he=w.dispersion>0,be=w.iridescence>0,ve=w.sheen>0,Ge=w.transmission>0,we=A&&!!w.anisotropyMap,Qe=ie&&!!w.clearcoatMap,$e=ie&&!!w.clearcoatNormalMap,Re=ie&&!!w.clearcoatRoughnessMap,Ie=be&&!!w.iridescenceMap,Ze=be&&!!w.iridescenceThicknessMap,Ve=ve&&!!w.sheenColorMap,Pe=ve&&!!w.sheenRoughnessMap,tt=!!w.specularMap,st=!!w.specularColorMap,Nt=!!w.specularIntensityMap,W=Ge&&!!w.transmissionMap,De=Ge&&!!w.thicknessMap,ce=!!w.gradientMap,Se=!!w.alphaMap,Ce=w.alphaTest>0,Ue=!!w.alphaHash,nt=!!w.extensions;let qt=Ja;w.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(qt=s.toneMapping);const cn={shaderID:Me,shaderType:w.type,shaderName:w.name,vertexShader:xe,fragmentShader:q,defines:w.defines,customVertexShaderID:pe,customFragmentShaderID:Te,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Ke,batchingColor:Ke&&se._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&se.instanceColor!==null,instancingMorph:Ye&&se.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Ee===null?s.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Ps,alphaToCoverage:!!w.alphaToCoverage,map:Vt,matcap:Ft,envMap:ft,envMapMode:ft&&Q.mapping,envMapCubeUVHeight:K,aoMap:G,lightMap:Tn,bumpMap:dt,normalMap:mt,displacementMap:x&&Xe,emissiveMap:Dt,normalMapObjectSpace:mt&&w.normalMapType===$E,normalMapTangentSpace:mt&&w.normalMapType===JE,metalnessMap:ke,roughnessMap:L,anisotropy:A,anisotropyMap:we,clearcoat:ie,clearcoatMap:Qe,clearcoatNormalMap:$e,clearcoatRoughnessMap:Re,dispersion:he,iridescence:be,iridescenceMap:Ie,iridescenceThicknessMap:Ze,sheen:ve,sheenColorMap:Ve,sheenRoughnessMap:Pe,specularMap:tt,specularColorMap:st,specularIntensityMap:Nt,transmission:Ge,transmissionMap:W,thicknessMap:De,gradientMap:ce,opaque:w.transparent===!1&&w.blending===Ds&&w.alphaToCoverage===!1,alphaMap:Se,alphaTest:Ce,alphaHash:Ue,combine:w.combine,mapUv:Vt&&b(w.map.channel),aoMapUv:G&&b(w.aoMap.channel),lightMapUv:Tn&&b(w.lightMap.channel),bumpMapUv:dt&&b(w.bumpMap.channel),normalMapUv:mt&&b(w.normalMap.channel),displacementMapUv:Xe&&b(w.displacementMap.channel),emissiveMapUv:Dt&&b(w.emissiveMap.channel),metalnessMapUv:ke&&b(w.metalnessMap.channel),roughnessMapUv:L&&b(w.roughnessMap.channel),anisotropyMapUv:we&&b(w.anisotropyMap.channel),clearcoatMapUv:Qe&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:$e&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&b(w.sheenRoughnessMap.channel),specularMapUv:tt&&b(w.specularMap.channel),specularColorMapUv:st&&b(w.specularColorMap.channel),specularIntensityMapUv:Nt&&b(w.specularIntensityMap.channel),transmissionMapUv:W&&b(w.transmissionMap.channel),thicknessMapUv:De&&b(w.thicknessMap.channel),alphaMapUv:Se&&b(w.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(mt||A),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:se.isPoints===!0&&!!de.attributes.uv&&(Vt||Se),fog:!!ge,useFog:w.fog===!0,fogExp2:!!ge&&ge.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Be,skinning:se.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:$,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:qt,decodeVideoTexture:Vt&&w.map.isVideoTexture===!0&&Rt.getTransfer(w.map.colorSpace)===It,decodeVideoTextureEmissive:Dt&&w.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(w.emissiveMap.colorSpace)===It,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===da,flipSided:w.side===kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:nt&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&w.extensions.multiDraw===!0||Ke)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return cn.vertexUv1s=m.has(1),cn.vertexUv2s=m.has(2),cn.vertexUv3s=m.has(3),m.clear(),cn}function v(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const F in w.defines)C.push(F),C.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(P(C,w),U(C,w),C.push(s.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function P(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function U(w,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),w.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),w.push(h.mask)}function D(w){const C=E[w.type];let F;if(C){const ue=Oi[C];F=Db.clone(ue.uniforms)}else F=w.uniforms;return F}function H(w,C){let F;for(let ue=0,se=g.length;ue<se;ue++){const ge=g[ue];if(ge.cacheKey===C){F=ge,++F.usedTimes;break}}return F===void 0&&(F=new $2(s,C,w,u),g.push(F)),F}function z(w){if(--w.usedTimes===0){const C=g.indexOf(w);g[C]=g[g.length-1],g.pop(),w.destroy()}}function O(w){p.remove(w)}function k(){p.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:D,acquireProgram:H,releaseProgram:z,releaseShaderCache:O,programs:g,dispose:k}}function aR(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,p){s.get(f)[h]=p}function u(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function rR(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function o0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function l0(){const s=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function f(_,x,M,E,b,S){let v=s[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:M,groupOrder:E,renderOrder:_.renderOrder,z:b,group:S},s[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=M,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=b,v.group=S),e++,v}function h(_,x,M,E,b,S){const v=f(_,x,M,E,b,S);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function p(_,x,M,E,b,S){const v=f(_,x,M,E,b,S);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function m(_,x){i.length>1&&i.sort(_||rR),r.length>1&&r.sort(x||o0),l.length>1&&l.sort(x||o0)}function g(){for(let _=e,x=s.length;_<x;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:p,finish:g,sort:m}}function sR(){let s=new WeakMap;function e(r,l){const u=s.get(r);let f;return u===void 0?(f=new l0,s.set(r,[f])):l>=u.length?(f=new l0,u.push(f)):f=u[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function oR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new le,color:new wt};break;case"SpotLight":i={position:new le,direction:new le,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new le,color:new wt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new le,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":i={color:new wt,position:new le,halfWidth:new le,halfHeight:new le};break}return s[e.id]=i,i}}}function lR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let uR=0;function cR(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function fR(s){const e=new oR,i=lR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new le);const l=new le,u=new an,f=new an;function h(m){let g=0,_=0,x=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,E=0,b=0,S=0,v=0,P=0,U=0,D=0,H=0,z=0,O=0;m.sort(cR);for(let w=0,C=m.length;w<C;w++){const F=m[w],ue=F.color,se=F.intensity,ge=F.distance,de=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)g+=ue.r*se,_+=ue.g*se,x+=ue.b*se;else if(F.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(F.sh.coefficients[B],se);O++}else if(F.isDirectionalLight){const B=e.get(F);if(B.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const Q=F.shadow,K=i.get(F);K.shadowIntensity=Q.intensity,K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,r.directionalShadow[M]=K,r.directionalShadowMap[M]=de,r.directionalShadowMatrix[M]=F.shadow.matrix,P++}r.directional[M]=B,M++}else if(F.isSpotLight){const B=e.get(F);B.position.setFromMatrixPosition(F.matrixWorld),B.color.copy(ue).multiplyScalar(se),B.distance=ge,B.coneCos=Math.cos(F.angle),B.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),B.decay=F.decay,r.spot[b]=B;const Q=F.shadow;if(F.map&&(r.spotLightMap[H]=F.map,H++,Q.updateMatrices(F),F.castShadow&&z++),r.spotLightMatrix[b]=Q.matrix,F.castShadow){const K=i.get(F);K.shadowIntensity=Q.intensity,K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,r.spotShadow[b]=K,r.spotShadowMap[b]=de,D++}b++}else if(F.isRectAreaLight){const B=e.get(F);B.color.copy(ue).multiplyScalar(se),B.halfWidth.set(F.width*.5,0,0),B.halfHeight.set(0,F.height*.5,0),r.rectArea[S]=B,S++}else if(F.isPointLight){const B=e.get(F);if(B.color.copy(F.color).multiplyScalar(F.intensity),B.distance=F.distance,B.decay=F.decay,F.castShadow){const Q=F.shadow,K=i.get(F);K.shadowIntensity=Q.intensity,K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,K.shadowCameraNear=Q.camera.near,K.shadowCameraFar=Q.camera.far,r.pointShadow[E]=K,r.pointShadowMap[E]=de,r.pointShadowMatrix[E]=F.shadow.matrix,U++}r.point[E]=B,E++}else if(F.isHemisphereLight){const B=e.get(F);B.skyColor.copy(F.color).multiplyScalar(se),B.groundColor.copy(F.groundColor).multiplyScalar(se),r.hemi[v]=B,v++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_FLOAT_1,r.rectAreaLTC2=Ne.LTC_FLOAT_2):(r.rectAreaLTC1=Ne.LTC_HALF_1,r.rectAreaLTC2=Ne.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=x;const k=r.hash;(k.directionalLength!==M||k.pointLength!==E||k.spotLength!==b||k.rectAreaLength!==S||k.hemiLength!==v||k.numDirectionalShadows!==P||k.numPointShadows!==U||k.numSpotShadows!==D||k.numSpotMaps!==H||k.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=b,r.rectArea.length=S,r.point.length=E,r.hemi.length=v,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=D+H-z,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=O,k.directionalLength=M,k.pointLength=E,k.spotLength=b,k.rectAreaLength=S,k.hemiLength=v,k.numDirectionalShadows=P,k.numPointShadows=U,k.numSpotShadows=D,k.numSpotMaps=H,k.numLightProbes=O,r.version=uR++)}function p(m,g){let _=0,x=0,M=0,E=0,b=0;const S=g.matrixWorldInverse;for(let v=0,P=m.length;v<P;v++){const U=m[v];if(U.isDirectionalLight){const D=r.directional[_];D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),_++}else if(U.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),M++}else if(U.isRectAreaLight){const D=r.rectArea[E];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(S),f.identity(),u.copy(U.matrixWorld),u.premultiply(S),f.extractRotation(u),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(S),x++}else if(U.isHemisphereLight){const D=r.hemi[b];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(S),b++}}}return{setup:h,setupView:p,state:r}}function u0(s){const e=new fR(s),i=[],r=[];function l(g){m.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function f(g){r.push(g)}function h(){e.setup(i)}function p(g){e.setupView(i,g)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:u,pushShadow:f}}function dR(s){let e=new WeakMap;function i(l,u=0){const f=e.get(l);let h;return f===void 0?(h=new u0(s),e.set(l,[h])):u>=f.length?(h=new u0(s),f.push(h)):h=f[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const hR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mR(s,e,i){let r=new ix;const l=new Gt,u=new Gt,f=new nn,h=new Hb({depthPacking:QE}),p=new Gb,m={},g=i.maxTextureSize,_={[er]:kn,[kn]:er,[da]:da},x=new tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:hR,fragmentShader:pR}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new ya;E.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ma(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=O0;let v=this.type;this.render=function(z,O,k){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;const w=s.getRenderTarget(),C=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),ue=s.state;ue.setBlending(Qa),ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);const se=v!==fa&&this.type===fa,ge=v===fa&&this.type!==fa;for(let de=0,B=z.length;de<B;de++){const Q=z[de],K=Q.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;l.copy(K.mapSize);const Me=K.getFrameExtents();if(l.multiply(Me),u.copy(K.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/Me.x),l.x=u.x*Me.x,K.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/Me.y),l.y=u.y*Me.y,K.mapSize.y=u.y)),K.map===null||se===!0||ge===!0){const N=this.type!==fa?{minFilter:Ti,magFilter:Ti}:{};K.map!==null&&K.map.dispose(),K.map=new Pr(l.x,l.y,N),K.map.texture.name=Q.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();const me=K.getViewportCount();for(let N=0;N<me;N++){const $=K.getViewport(N);f.set(u.x*$.x,u.y*$.y,u.x*$.z,u.y*$.w),ue.viewport(f),K.updateMatrices(Q,N),r=K.getFrustum(),D(O,k,K.camera,Q,this.type)}K.isPointLightShadow!==!0&&this.type===fa&&P(K,k),K.needsUpdate=!1}v=this.type,S.needsUpdate=!1,s.setRenderTarget(w,C,F)};function P(z,O){const k=e.update(b);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,M.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Pr(l.x,l.y)),x.uniforms.shadow_pass.value=z.map.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(O,null,k,x,b,null),M.uniforms.shadow_pass.value=z.mapPass.texture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(O,null,k,M,b,null)}function U(z,O,k,w){let C=null;const F=k.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(F!==void 0)C=F;else if(C=k.isPointLight===!0?p:h,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const ue=C.uuid,se=O.uuid;let ge=m[ue];ge===void 0&&(ge={},m[ue]=ge);let de=ge[se];de===void 0&&(de=C.clone(),ge[se]=de,O.addEventListener("dispose",H)),C=de}if(C.visible=O.visible,C.wireframe=O.wireframe,w===fa?C.side=O.shadowSide!==null?O.shadowSide:O.side:C.side=O.shadowSide!==null?O.shadowSide:_[O.side],C.alphaMap=O.alphaMap,C.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,C.map=O.map,C.clipShadows=O.clipShadows,C.clippingPlanes=O.clippingPlanes,C.clipIntersection=O.clipIntersection,C.displacementMap=O.displacementMap,C.displacementScale=O.displacementScale,C.displacementBias=O.displacementBias,C.wireframeLinewidth=O.wireframeLinewidth,C.linewidth=O.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ue=s.properties.get(C);ue.light=k}return C}function D(z,O,k,w,C){if(z.visible===!1)return;if(z.layers.test(O.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&C===fa)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,z.matrixWorld);const se=e.update(z),ge=z.material;if(Array.isArray(ge)){const de=se.groups;for(let B=0,Q=de.length;B<Q;B++){const K=de[B],Me=ge[K.materialIndex];if(Me&&Me.visible){const me=U(z,Me,w,C);z.onBeforeShadow(s,z,O,k,se,me,K),s.renderBufferDirect(k,null,se,me,z,K),z.onAfterShadow(s,z,O,k,se,me,K)}}}else if(ge.visible){const de=U(z,ge,w,C);z.onBeforeShadow(s,z,O,k,se,de,null),s.renderBufferDirect(k,null,se,de,z,null),z.onAfterShadow(s,z,O,k,se,de,null)}}const ue=z.children;for(let se=0,ge=ue.length;se<ge;se++)D(ue[se],O,k,w,C)}function H(z){z.target.removeEventListener("dispose",H);for(const k in m){const w=m[k],C=z.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const gR={[oh]:lh,[uh]:dh,[ch]:hh,[Ls]:fh,[lh]:oh,[dh]:uh,[hh]:ch,[fh]:Ls};function _R(s,e){function i(){let W=!1;const De=new nn;let ce=null;const Se=new nn(0,0,0,0);return{setMask:function(Ce){ce!==Ce&&!W&&(s.colorMask(Ce,Ce,Ce,Ce),ce=Ce)},setLocked:function(Ce){W=Ce},setClear:function(Ce,Ue,nt,qt,cn){cn===!0&&(Ce*=qt,Ue*=qt,nt*=qt),De.set(Ce,Ue,nt,qt),Se.equals(De)===!1&&(s.clearColor(Ce,Ue,nt,qt),Se.copy(De))},reset:function(){W=!1,ce=null,Se.set(-1,0,0,0)}}}function r(){let W=!1,De=!1,ce=null,Se=null,Ce=null;return{setReversed:function(Ue){if(De!==Ue){const nt=e.get("EXT_clip_control");Ue?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT),De=Ue;const qt=Ce;Ce=null,this.setClear(qt)}},getReversed:function(){return De},setTest:function(Ue){Ue?Ee(s.DEPTH_TEST):Be(s.DEPTH_TEST)},setMask:function(Ue){ce!==Ue&&!W&&(s.depthMask(Ue),ce=Ue)},setFunc:function(Ue){if(De&&(Ue=gR[Ue]),Se!==Ue){switch(Ue){case oh:s.depthFunc(s.NEVER);break;case lh:s.depthFunc(s.ALWAYS);break;case uh:s.depthFunc(s.LESS);break;case Ls:s.depthFunc(s.LEQUAL);break;case ch:s.depthFunc(s.EQUAL);break;case fh:s.depthFunc(s.GEQUAL);break;case dh:s.depthFunc(s.GREATER);break;case hh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Se=Ue}},setLocked:function(Ue){W=Ue},setClear:function(Ue){Ce!==Ue&&(De&&(Ue=1-Ue),s.clearDepth(Ue),Ce=Ue)},reset:function(){W=!1,ce=null,Se=null,Ce=null,De=!1}}}function l(){let W=!1,De=null,ce=null,Se=null,Ce=null,Ue=null,nt=null,qt=null,cn=null;return{setTest:function(Et){W||(Et?Ee(s.STENCIL_TEST):Be(s.STENCIL_TEST))},setMask:function(Et){De!==Et&&!W&&(s.stencilMask(Et),De=Et)},setFunc:function(Et,vn,hi){(ce!==Et||Se!==vn||Ce!==hi)&&(s.stencilFunc(Et,vn,hi),ce=Et,Se=vn,Ce=hi)},setOp:function(Et,vn,hi){(Ue!==Et||nt!==vn||qt!==hi)&&(s.stencilOp(Et,vn,hi),Ue=Et,nt=vn,qt=hi)},setLocked:function(Et){W=Et},setClear:function(Et){cn!==Et&&(s.clearStencil(Et),cn=Et)},reset:function(){W=!1,De=null,ce=null,Se=null,Ce=null,Ue=null,nt=null,qt=null,cn=null}}}const u=new i,f=new r,h=new l,p=new WeakMap,m=new WeakMap;let g={},_={},x=new WeakMap,M=[],E=null,b=!1,S=null,v=null,P=null,U=null,D=null,H=null,z=null,O=new wt(0,0,0),k=0,w=!1,C=null,F=null,ue=null,se=null,ge=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Q=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(K)[1]),B=Q>=1):K.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),B=Q>=2);let Me=null,me={};const N=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),xe=new nn().fromArray(N),q=new nn().fromArray($);function pe(W,De,ce,Se){const Ce=new Uint8Array(4),Ue=s.createTexture();s.bindTexture(W,Ue),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let nt=0;nt<ce;nt++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(De,0,s.RGBA,1,1,Se,0,s.RGBA,s.UNSIGNED_BYTE,Ce):s.texImage2D(De+nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ce);return Ue}const Te={};Te[s.TEXTURE_2D]=pe(s.TEXTURE_2D,s.TEXTURE_2D,1),Te[s.TEXTURE_CUBE_MAP]=pe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[s.TEXTURE_2D_ARRAY]=pe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Te[s.TEXTURE_3D]=pe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Ee(s.DEPTH_TEST),f.setFunc(Ls),dt(!1),mt(dv),Ee(s.CULL_FACE),G(Qa);function Ee(W){g[W]!==!0&&(s.enable(W),g[W]=!0)}function Be(W){g[W]!==!1&&(s.disable(W),g[W]=!1)}function Ye(W,De){return _[W]!==De?(s.bindFramebuffer(W,De),_[W]=De,W===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=De),W===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=De),!0):!1}function Ke(W,De){let ce=M,Se=!1;if(W){ce=x.get(De),ce===void 0&&(ce=[],x.set(De,ce));const Ce=W.textures;if(ce.length!==Ce.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let Ue=0,nt=Ce.length;Ue<nt;Ue++)ce[Ue]=s.COLOR_ATTACHMENT0+Ue;ce.length=Ce.length,Se=!0}}else ce[0]!==s.BACK&&(ce[0]=s.BACK,Se=!0);Se&&s.drawBuffers(ce)}function Vt(W){return E!==W?(s.useProgram(W),E=W,!0):!1}const Ft={[wr]:s.FUNC_ADD,[EE]:s.FUNC_SUBTRACT,[bE]:s.FUNC_REVERSE_SUBTRACT};Ft[TE]=s.MIN,Ft[AE]=s.MAX;const ft={[RE]:s.ZERO,[CE]:s.ONE,[wE]:s.SRC_COLOR,[rh]:s.SRC_ALPHA,[PE]:s.SRC_ALPHA_SATURATE,[NE]:s.DST_COLOR,[UE]:s.DST_ALPHA,[DE]:s.ONE_MINUS_SRC_COLOR,[sh]:s.ONE_MINUS_SRC_ALPHA,[OE]:s.ONE_MINUS_DST_COLOR,[LE]:s.ONE_MINUS_DST_ALPHA,[zE]:s.CONSTANT_COLOR,[BE]:s.ONE_MINUS_CONSTANT_COLOR,[IE]:s.CONSTANT_ALPHA,[FE]:s.ONE_MINUS_CONSTANT_ALPHA};function G(W,De,ce,Se,Ce,Ue,nt,qt,cn,Et){if(W===Qa){b===!0&&(Be(s.BLEND),b=!1);return}if(b===!1&&(Ee(s.BLEND),b=!0),W!==ME){if(W!==S||Et!==w){if((v!==wr||D!==wr)&&(s.blendEquation(s.FUNC_ADD),v=wr,D=wr),Et)switch(W){case Ds:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hv:s.blendFunc(s.ONE,s.ONE);break;case pv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mv:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Ds:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hv:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case pv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mv:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}P=null,U=null,H=null,z=null,O.set(0,0,0),k=0,S=W,w=Et}return}Ce=Ce||De,Ue=Ue||ce,nt=nt||Se,(De!==v||Ce!==D)&&(s.blendEquationSeparate(Ft[De],Ft[Ce]),v=De,D=Ce),(ce!==P||Se!==U||Ue!==H||nt!==z)&&(s.blendFuncSeparate(ft[ce],ft[Se],ft[Ue],ft[nt]),P=ce,U=Se,H=Ue,z=nt),(qt.equals(O)===!1||cn!==k)&&(s.blendColor(qt.r,qt.g,qt.b,cn),O.copy(qt),k=cn),S=W,w=!1}function Tn(W,De){W.side===da?Be(s.CULL_FACE):Ee(s.CULL_FACE);let ce=W.side===kn;De&&(ce=!ce),dt(ce),W.blending===Ds&&W.transparent===!1?G(Qa):G(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),u.setMask(W.colorWrite);const Se=W.stencilWrite;h.setTest(Se),Se&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Dt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Ee(s.SAMPLE_ALPHA_TO_COVERAGE):Be(s.SAMPLE_ALPHA_TO_COVERAGE)}function dt(W){C!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),C=W)}function mt(W){W!==xE?(Ee(s.CULL_FACE),W!==F&&(W===dv?s.cullFace(s.BACK):W===yE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Be(s.CULL_FACE),F=W}function Xe(W){W!==ue&&(B&&s.lineWidth(W),ue=W)}function Dt(W,De,ce){W?(Ee(s.POLYGON_OFFSET_FILL),(se!==De||ge!==ce)&&(s.polygonOffset(De,ce),se=De,ge=ce)):Be(s.POLYGON_OFFSET_FILL)}function ke(W){W?Ee(s.SCISSOR_TEST):Be(s.SCISSOR_TEST)}function L(W){W===void 0&&(W=s.TEXTURE0+de-1),Me!==W&&(s.activeTexture(W),Me=W)}function A(W,De,ce){ce===void 0&&(Me===null?ce=s.TEXTURE0+de-1:ce=Me);let Se=me[ce];Se===void 0&&(Se={type:void 0,texture:void 0},me[ce]=Se),(Se.type!==W||Se.texture!==De)&&(Me!==ce&&(s.activeTexture(ce),Me=ce),s.bindTexture(W,De||Te[W]),Se.type=W,Se.texture=De)}function ie(){const W=me[Me];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function he(){try{s.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function be(){try{s.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ve(){try{s.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ge(){try{s.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function we(){try{s.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Qe(){try{s.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $e(){try{s.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Re(){try{s.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ie(){try{s.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ze(){try{s.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ve(W){xe.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),xe.copy(W))}function Pe(W){q.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),q.copy(W))}function tt(W,De){let ce=m.get(De);ce===void 0&&(ce=new WeakMap,m.set(De,ce));let Se=ce.get(W);Se===void 0&&(Se=s.getUniformBlockIndex(De,W.name),ce.set(W,Se))}function st(W,De){const Se=m.get(De).get(W);p.get(De)!==Se&&(s.uniformBlockBinding(De,Se,W.__bindingPointIndex),p.set(De,Se))}function Nt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Me=null,me={},_={},x=new WeakMap,M=[],E=null,b=!1,S=null,v=null,P=null,U=null,D=null,H=null,z=null,O=new wt(0,0,0),k=0,w=!1,C=null,F=null,ue=null,se=null,ge=null,xe.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),h.reset()}return{buffers:{color:u,depth:f,stencil:h},enable:Ee,disable:Be,bindFramebuffer:Ye,drawBuffers:Ke,useProgram:Vt,setBlending:G,setMaterial:Tn,setFlipSided:dt,setCullFace:mt,setLineWidth:Xe,setPolygonOffset:Dt,setScissorTest:ke,activeTexture:L,bindTexture:A,unbindTexture:ie,compressedTexImage2D:he,compressedTexImage3D:be,texImage2D:Ie,texImage3D:Ze,updateUBOMapping:tt,uniformBlockBinding:st,texStorage2D:$e,texStorage3D:Re,texSubImage2D:ve,texSubImage3D:Ge,compressedTexSubImage2D:we,compressedTexSubImage3D:Qe,scissor:Ve,viewport:Pe,reset:Nt}}function vR(s,e,i,r,l,u,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Gt,g=new WeakMap;let _;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,A){return M?new OffscreenCanvas(L,A):Qu("canvas")}function b(L,A,ie){let he=1;const be=ke(L);if((be.width>ie||be.height>ie)&&(he=ie/Math.max(be.width,be.height)),he<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ve=Math.floor(he*be.width),Ge=Math.floor(he*be.height);_===void 0&&(_=E(ve,Ge));const we=A?E(ve,Ge):_;return we.width=ve,we.height=Ge,we.getContext("2d").drawImage(L,0,0,ve,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+ve+"x"+Ge+")."),we}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),L;return L}function S(L){return L.generateMipmaps}function v(L){s.generateMipmap(L)}function P(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(L,A,ie,he,be=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ve=A;if(A===s.RED&&(ie===s.FLOAT&&(ve=s.R32F),ie===s.HALF_FLOAT&&(ve=s.R16F),ie===s.UNSIGNED_BYTE&&(ve=s.R8)),A===s.RED_INTEGER&&(ie===s.UNSIGNED_BYTE&&(ve=s.R8UI),ie===s.UNSIGNED_SHORT&&(ve=s.R16UI),ie===s.UNSIGNED_INT&&(ve=s.R32UI),ie===s.BYTE&&(ve=s.R8I),ie===s.SHORT&&(ve=s.R16I),ie===s.INT&&(ve=s.R32I)),A===s.RG&&(ie===s.FLOAT&&(ve=s.RG32F),ie===s.HALF_FLOAT&&(ve=s.RG16F),ie===s.UNSIGNED_BYTE&&(ve=s.RG8)),A===s.RG_INTEGER&&(ie===s.UNSIGNED_BYTE&&(ve=s.RG8UI),ie===s.UNSIGNED_SHORT&&(ve=s.RG16UI),ie===s.UNSIGNED_INT&&(ve=s.RG32UI),ie===s.BYTE&&(ve=s.RG8I),ie===s.SHORT&&(ve=s.RG16I),ie===s.INT&&(ve=s.RG32I)),A===s.RGB_INTEGER&&(ie===s.UNSIGNED_BYTE&&(ve=s.RGB8UI),ie===s.UNSIGNED_SHORT&&(ve=s.RGB16UI),ie===s.UNSIGNED_INT&&(ve=s.RGB32UI),ie===s.BYTE&&(ve=s.RGB8I),ie===s.SHORT&&(ve=s.RGB16I),ie===s.INT&&(ve=s.RGB32I)),A===s.RGBA_INTEGER&&(ie===s.UNSIGNED_BYTE&&(ve=s.RGBA8UI),ie===s.UNSIGNED_SHORT&&(ve=s.RGBA16UI),ie===s.UNSIGNED_INT&&(ve=s.RGBA32UI),ie===s.BYTE&&(ve=s.RGBA8I),ie===s.SHORT&&(ve=s.RGBA16I),ie===s.INT&&(ve=s.RGBA32I)),A===s.RGB&&ie===s.UNSIGNED_INT_5_9_9_9_REV&&(ve=s.RGB9_E5),A===s.RGBA){const Ge=be?Zu:Rt.getTransfer(he);ie===s.FLOAT&&(ve=s.RGBA32F),ie===s.HALF_FLOAT&&(ve=s.RGBA16F),ie===s.UNSIGNED_BYTE&&(ve=Ge===It?s.SRGB8_ALPHA8:s.RGBA8),ie===s.UNSIGNED_SHORT_4_4_4_4&&(ve=s.RGBA4),ie===s.UNSIGNED_SHORT_5_5_5_1&&(ve=s.RGB5_A1)}return(ve===s.R16F||ve===s.R32F||ve===s.RG16F||ve===s.RG32F||ve===s.RGBA16F||ve===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function D(L,A){let ie;return L?A===null||A===Or||A===jo?ie=s.DEPTH24_STENCIL8:A===ha?ie=s.DEPTH32F_STENCIL8:A===qo&&(ie=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Or||A===jo?ie=s.DEPTH_COMPONENT24:A===ha?ie=s.DEPTH_COMPONENT32F:A===qo&&(ie=s.DEPTH_COMPONENT16),ie}function H(L,A){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ti&&L.minFilter!==zi?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function z(L){const A=L.target;A.removeEventListener("dispose",z),k(A),A.isVideoTexture&&g.delete(A)}function O(L){const A=L.target;A.removeEventListener("dispose",O),C(A)}function k(L){const A=r.get(L);if(A.__webglInit===void 0)return;const ie=L.source,he=x.get(ie);if(he){const be=he[A.__cacheKey];be.usedTimes--,be.usedTimes===0&&w(L),Object.keys(he).length===0&&x.delete(ie)}r.remove(L)}function w(L){const A=r.get(L);s.deleteTexture(A.__webglTexture);const ie=L.source,he=x.get(ie);delete he[A.__cacheKey],f.memory.textures--}function C(L){const A=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(A.__webglFramebuffer[he]))for(let be=0;be<A.__webglFramebuffer[he].length;be++)s.deleteFramebuffer(A.__webglFramebuffer[he][be]);else s.deleteFramebuffer(A.__webglFramebuffer[he]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[he])}else{if(Array.isArray(A.__webglFramebuffer))for(let he=0;he<A.__webglFramebuffer.length;he++)s.deleteFramebuffer(A.__webglFramebuffer[he]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let he=0;he<A.__webglColorRenderbuffer.length;he++)A.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[he]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ie=L.textures;for(let he=0,be=ie.length;he<be;he++){const ve=r.get(ie[he]);ve.__webglTexture&&(s.deleteTexture(ve.__webglTexture),f.memory.textures--),r.remove(ie[he])}r.remove(L)}let F=0;function ue(){F=0}function se(){const L=F;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),F+=1,L}function ge(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function de(L,A){const ie=r.get(L);if(L.isVideoTexture&&Xe(L),L.isRenderTargetTexture===!1&&L.version>0&&ie.__version!==L.version){const he=L.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(ie,L,A);return}}i.bindTexture(s.TEXTURE_2D,ie.__webglTexture,s.TEXTURE0+A)}function B(L,A){const ie=r.get(L);if(L.version>0&&ie.__version!==L.version){q(ie,L,A);return}i.bindTexture(s.TEXTURE_2D_ARRAY,ie.__webglTexture,s.TEXTURE0+A)}function Q(L,A){const ie=r.get(L);if(L.version>0&&ie.__version!==L.version){q(ie,L,A);return}i.bindTexture(s.TEXTURE_3D,ie.__webglTexture,s.TEXTURE0+A)}function K(L,A){const ie=r.get(L);if(L.version>0&&ie.__version!==L.version){pe(ie,L,A);return}i.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture,s.TEXTURE0+A)}const Me={[gh]:s.REPEAT,[Ur]:s.CLAMP_TO_EDGE,[_h]:s.MIRRORED_REPEAT},me={[Ti]:s.NEAREST,[ZE]:s.NEAREST_MIPMAP_NEAREST,[mu]:s.NEAREST_MIPMAP_LINEAR,[zi]:s.LINEAR,[Td]:s.LINEAR_MIPMAP_NEAREST,[Lr]:s.LINEAR_MIPMAP_LINEAR},N={[eb]:s.NEVER,[sb]:s.ALWAYS,[tb]:s.LESS,[W0]:s.LEQUAL,[nb]:s.EQUAL,[rb]:s.GEQUAL,[ib]:s.GREATER,[ab]:s.NOTEQUAL};function $(L,A){if(A.type===ha&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===zi||A.magFilter===Td||A.magFilter===mu||A.magFilter===Lr||A.minFilter===zi||A.minFilter===Td||A.minFilter===mu||A.minFilter===Lr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,Me[A.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,Me[A.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,Me[A.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,me[A.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,me[A.minFilter]),A.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,N[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ti||A.minFilter!==mu&&A.minFilter!==Lr||A.type===ha&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function xe(L,A){let ie=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",z));const he=A.source;let be=x.get(he);be===void 0&&(be={},x.set(he,be));const ve=ge(A);if(ve!==L.__cacheKey){be[ve]===void 0&&(be[ve]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,ie=!0),be[ve].usedTimes++;const Ge=be[L.__cacheKey];Ge!==void 0&&(be[L.__cacheKey].usedTimes--,Ge.usedTimes===0&&w(A)),L.__cacheKey=ve,L.__webglTexture=be[ve].texture}return ie}function q(L,A,ie){let he=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(he=s.TEXTURE_3D);const be=xe(L,A),ve=A.source;i.bindTexture(he,L.__webglTexture,s.TEXTURE0+ie);const Ge=r.get(ve);if(ve.version!==Ge.__version||be===!0){i.activeTexture(s.TEXTURE0+ie);const we=Rt.getPrimaries(Rt.workingColorSpace),Qe=A.colorSpace===Ka?null:Rt.getPrimaries(A.colorSpace),$e=A.colorSpace===Ka||we===Qe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let Re=b(A.image,!1,l.maxTextureSize);Re=Dt(A,Re);const Ie=u.convert(A.format,A.colorSpace),Ze=u.convert(A.type);let Ve=U(A.internalFormat,Ie,Ze,A.colorSpace,A.isVideoTexture);$(he,A);let Pe;const tt=A.mipmaps,st=A.isVideoTexture!==!0,Nt=Ge.__version===void 0||be===!0,W=ve.dataReady,De=H(A,Re);if(A.isDepthTexture)Ve=D(A.format===Zo,A.type),Nt&&(st?i.texStorage2D(s.TEXTURE_2D,1,Ve,Re.width,Re.height):i.texImage2D(s.TEXTURE_2D,0,Ve,Re.width,Re.height,0,Ie,Ze,null));else if(A.isDataTexture)if(tt.length>0){st&&Nt&&i.texStorage2D(s.TEXTURE_2D,De,Ve,tt[0].width,tt[0].height);for(let ce=0,Se=tt.length;ce<Se;ce++)Pe=tt[ce],st?W&&i.texSubImage2D(s.TEXTURE_2D,ce,0,0,Pe.width,Pe.height,Ie,Ze,Pe.data):i.texImage2D(s.TEXTURE_2D,ce,Ve,Pe.width,Pe.height,0,Ie,Ze,Pe.data);A.generateMipmaps=!1}else st?(Nt&&i.texStorage2D(s.TEXTURE_2D,De,Ve,Re.width,Re.height),W&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Re.width,Re.height,Ie,Ze,Re.data)):i.texImage2D(s.TEXTURE_2D,0,Ve,Re.width,Re.height,0,Ie,Ze,Re.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){st&&Nt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,De,Ve,tt[0].width,tt[0].height,Re.depth);for(let ce=0,Se=tt.length;ce<Se;ce++)if(Pe=tt[ce],A.format!==bi)if(Ie!==null)if(st){if(W)if(A.layerUpdates.size>0){const Ce=Fv(Pe.width,Pe.height,A.format,A.type);for(const Ue of A.layerUpdates){const nt=Pe.data.subarray(Ue*Ce/Pe.data.BYTES_PER_ELEMENT,(Ue+1)*Ce/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,Ue,Pe.width,Pe.height,1,Ie,nt)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,Pe.width,Pe.height,Re.depth,Ie,Pe.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ce,Ve,Pe.width,Pe.height,Re.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?W&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,Pe.width,Pe.height,Re.depth,Ie,Ze,Pe.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ce,Ve,Pe.width,Pe.height,Re.depth,0,Ie,Ze,Pe.data)}else{st&&Nt&&i.texStorage2D(s.TEXTURE_2D,De,Ve,tt[0].width,tt[0].height);for(let ce=0,Se=tt.length;ce<Se;ce++)Pe=tt[ce],A.format!==bi?Ie!==null?st?W&&i.compressedTexSubImage2D(s.TEXTURE_2D,ce,0,0,Pe.width,Pe.height,Ie,Pe.data):i.compressedTexImage2D(s.TEXTURE_2D,ce,Ve,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?W&&i.texSubImage2D(s.TEXTURE_2D,ce,0,0,Pe.width,Pe.height,Ie,Ze,Pe.data):i.texImage2D(s.TEXTURE_2D,ce,Ve,Pe.width,Pe.height,0,Ie,Ze,Pe.data)}else if(A.isDataArrayTexture)if(st){if(Nt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,De,Ve,Re.width,Re.height,Re.depth),W)if(A.layerUpdates.size>0){const ce=Fv(Re.width,Re.height,A.format,A.type);for(const Se of A.layerUpdates){const Ce=Re.data.subarray(Se*ce/Re.data.BYTES_PER_ELEMENT,(Se+1)*ce/Re.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Se,Re.width,Re.height,1,Ie,Ze,Ce)}A.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Re.width,Re.height,Re.depth,Ie,Ze,Re.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ve,Re.width,Re.height,Re.depth,0,Ie,Ze,Re.data);else if(A.isData3DTexture)st?(Nt&&i.texStorage3D(s.TEXTURE_3D,De,Ve,Re.width,Re.height,Re.depth),W&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Re.width,Re.height,Re.depth,Ie,Ze,Re.data)):i.texImage3D(s.TEXTURE_3D,0,Ve,Re.width,Re.height,Re.depth,0,Ie,Ze,Re.data);else if(A.isFramebufferTexture){if(Nt)if(st)i.texStorage2D(s.TEXTURE_2D,De,Ve,Re.width,Re.height);else{let ce=Re.width,Se=Re.height;for(let Ce=0;Ce<De;Ce++)i.texImage2D(s.TEXTURE_2D,Ce,Ve,ce,Se,0,Ie,Ze,null),ce>>=1,Se>>=1}}else if(tt.length>0){if(st&&Nt){const ce=ke(tt[0]);i.texStorage2D(s.TEXTURE_2D,De,Ve,ce.width,ce.height)}for(let ce=0,Se=tt.length;ce<Se;ce++)Pe=tt[ce],st?W&&i.texSubImage2D(s.TEXTURE_2D,ce,0,0,Ie,Ze,Pe):i.texImage2D(s.TEXTURE_2D,ce,Ve,Ie,Ze,Pe);A.generateMipmaps=!1}else if(st){if(Nt){const ce=ke(Re);i.texStorage2D(s.TEXTURE_2D,De,Ve,ce.width,ce.height)}W&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,Ze,Re)}else i.texImage2D(s.TEXTURE_2D,0,Ve,Ie,Ze,Re);S(A)&&v(he),Ge.__version=ve.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function pe(L,A,ie){if(A.image.length!==6)return;const he=xe(L,A),be=A.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+ie);const ve=r.get(be);if(be.version!==ve.__version||he===!0){i.activeTexture(s.TEXTURE0+ie);const Ge=Rt.getPrimaries(Rt.workingColorSpace),we=A.colorSpace===Ka?null:Rt.getPrimaries(A.colorSpace),Qe=A.colorSpace===Ka||Ge===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);const $e=A.isCompressedTexture||A.image[0].isCompressedTexture,Re=A.image[0]&&A.image[0].isDataTexture,Ie=[];for(let Se=0;Se<6;Se++)!$e&&!Re?Ie[Se]=b(A.image[Se],!0,l.maxCubemapSize):Ie[Se]=Re?A.image[Se].image:A.image[Se],Ie[Se]=Dt(A,Ie[Se]);const Ze=Ie[0],Ve=u.convert(A.format,A.colorSpace),Pe=u.convert(A.type),tt=U(A.internalFormat,Ve,Pe,A.colorSpace),st=A.isVideoTexture!==!0,Nt=ve.__version===void 0||he===!0,W=be.dataReady;let De=H(A,Ze);$(s.TEXTURE_CUBE_MAP,A);let ce;if($e){st&&Nt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,De,tt,Ze.width,Ze.height);for(let Se=0;Se<6;Se++){ce=Ie[Se].mipmaps;for(let Ce=0;Ce<ce.length;Ce++){const Ue=ce[Ce];A.format!==bi?Ve!==null?st?W&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ce,0,0,Ue.width,Ue.height,Ve,Ue.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ce,tt,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?W&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ce,0,0,Ue.width,Ue.height,Ve,Pe,Ue.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ce,tt,Ue.width,Ue.height,0,Ve,Pe,Ue.data)}}}else{if(ce=A.mipmaps,st&&Nt){ce.length>0&&De++;const Se=ke(Ie[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,De,tt,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Re){st?W&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ie[Se].width,Ie[Se].height,Ve,Pe,Ie[Se].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,tt,Ie[Se].width,Ie[Se].height,0,Ve,Pe,Ie[Se].data);for(let Ce=0;Ce<ce.length;Ce++){const nt=ce[Ce].image[Se].image;st?W&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ce+1,0,0,nt.width,nt.height,Ve,Pe,nt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ce+1,tt,nt.width,nt.height,0,Ve,Pe,nt.data)}}else{st?W&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ve,Pe,Ie[Se]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,tt,Ve,Pe,Ie[Se]);for(let Ce=0;Ce<ce.length;Ce++){const Ue=ce[Ce];st?W&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ce+1,0,0,Ve,Pe,Ue.image[Se]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ce+1,tt,Ve,Pe,Ue.image[Se])}}}S(A)&&v(s.TEXTURE_CUBE_MAP),ve.__version=be.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Te(L,A,ie,he,be,ve){const Ge=u.convert(ie.format,ie.colorSpace),we=u.convert(ie.type),Qe=U(ie.internalFormat,Ge,we,ie.colorSpace),$e=r.get(A),Re=r.get(ie);if(Re.__renderTarget=A,!$e.__hasExternalTextures){const Ie=Math.max(1,A.width>>ve),Ze=Math.max(1,A.height>>ve);be===s.TEXTURE_3D||be===s.TEXTURE_2D_ARRAY?i.texImage3D(be,ve,Qe,Ie,Ze,A.depth,0,Ge,we,null):i.texImage2D(be,ve,Qe,Ie,Ze,0,Ge,we,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),mt(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,be,Re.__webglTexture,0,dt(A)):(be===s.TEXTURE_2D||be>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,be,Re.__webglTexture,ve),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ee(L,A,ie){if(s.bindRenderbuffer(s.RENDERBUFFER,L),A.depthBuffer){const he=A.depthTexture,be=he&&he.isDepthTexture?he.type:null,ve=D(A.stencilBuffer,be),Ge=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=dt(A);mt(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,ve,A.width,A.height):ie?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,ve,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ve,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ge,s.RENDERBUFFER,L)}else{const he=A.textures;for(let be=0;be<he.length;be++){const ve=he[be],Ge=u.convert(ve.format,ve.colorSpace),we=u.convert(ve.type),Qe=U(ve.internalFormat,Ge,we,ve.colorSpace),$e=dt(A);ie&&mt(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,Qe,A.width,A.height):mt(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$e,Qe,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Qe,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Be(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=r.get(A.depthTexture);he.__renderTarget=A,(!he.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),de(A.depthTexture,0);const be=he.__webglTexture,ve=dt(A);if(A.depthTexture.format===Yo)mt(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,be,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,be,0);else if(A.depthTexture.format===Zo)mt(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,be,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,be,0);else throw new Error("Unknown depthTexture format")}function Ye(L){const A=r.get(L),ie=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const he=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),he){const be=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,he.removeEventListener("dispose",be)};he.addEventListener("dispose",be),A.__depthDisposeCallback=be}A.__boundDepthTexture=he}if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");const he=L.texture.mipmaps;he&&he.length>0?Be(A.__webglFramebuffer[0],L):Be(A.__webglFramebuffer,L)}else if(ie){A.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[he]),A.__webglDepthbuffer[he]===void 0)A.__webglDepthbuffer[he]=s.createRenderbuffer(),Ee(A.__webglDepthbuffer[he],L,!1);else{const be=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=A.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,ve)}}else{const he=L.texture.mipmaps;if(he&&he.length>0?i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Ee(A.__webglDepthbuffer,L,!1);else{const be=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,ve)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(L,A,ie){const he=r.get(L);A!==void 0&&Te(he.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ie!==void 0&&Ye(L)}function Vt(L){const A=L.texture,ie=r.get(L),he=r.get(A);L.addEventListener("dispose",O);const be=L.textures,ve=L.isWebGLCubeRenderTarget===!0,Ge=be.length>1;if(Ge||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=A.version,f.memory.textures++),ve){ie.__webglFramebuffer=[];for(let we=0;we<6;we++)if(A.mipmaps&&A.mipmaps.length>0){ie.__webglFramebuffer[we]=[];for(let Qe=0;Qe<A.mipmaps.length;Qe++)ie.__webglFramebuffer[we][Qe]=s.createFramebuffer()}else ie.__webglFramebuffer[we]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ie.__webglFramebuffer=[];for(let we=0;we<A.mipmaps.length;we++)ie.__webglFramebuffer[we]=s.createFramebuffer()}else ie.__webglFramebuffer=s.createFramebuffer();if(Ge)for(let we=0,Qe=be.length;we<Qe;we++){const $e=r.get(be[we]);$e.__webglTexture===void 0&&($e.__webglTexture=s.createTexture(),f.memory.textures++)}if(L.samples>0&&mt(L)===!1){ie.__webglMultisampledFramebuffer=s.createFramebuffer(),ie.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let we=0;we<be.length;we++){const Qe=be[we];ie.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ie.__webglColorRenderbuffer[we]);const $e=u.convert(Qe.format,Qe.colorSpace),Re=u.convert(Qe.type),Ie=U(Qe.internalFormat,$e,Re,Qe.colorSpace,L.isXRRenderTarget===!0),Ze=dt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,Ie,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,ie.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(ie.__webglDepthRenderbuffer=s.createRenderbuffer(),Ee(ie.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ve){i.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),$(s.TEXTURE_CUBE_MAP,A);for(let we=0;we<6;we++)if(A.mipmaps&&A.mipmaps.length>0)for(let Qe=0;Qe<A.mipmaps.length;Qe++)Te(ie.__webglFramebuffer[we][Qe],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Qe);else Te(ie.__webglFramebuffer[we],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);S(A)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ge){for(let we=0,Qe=be.length;we<Qe;we++){const $e=be[we],Re=r.get($e);i.bindTexture(s.TEXTURE_2D,Re.__webglTexture),$(s.TEXTURE_2D,$e),Te(ie.__webglFramebuffer,L,$e,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,0),S($e)&&v(s.TEXTURE_2D)}i.unbindTexture()}else{let we=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(we=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(we,he.__webglTexture),$(we,A),A.mipmaps&&A.mipmaps.length>0)for(let Qe=0;Qe<A.mipmaps.length;Qe++)Te(ie.__webglFramebuffer[Qe],L,A,s.COLOR_ATTACHMENT0,we,Qe);else Te(ie.__webglFramebuffer,L,A,s.COLOR_ATTACHMENT0,we,0);S(A)&&v(we),i.unbindTexture()}L.depthBuffer&&Ye(L)}function Ft(L){const A=L.textures;for(let ie=0,he=A.length;ie<he;ie++){const be=A[ie];if(S(be)){const ve=P(L),Ge=r.get(be).__webglTexture;i.bindTexture(ve,Ge),v(ve),i.unbindTexture()}}}const ft=[],G=[];function Tn(L){if(L.samples>0){if(mt(L)===!1){const A=L.textures,ie=L.width,he=L.height;let be=s.COLOR_BUFFER_BIT;const ve=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ge=r.get(L),we=A.length>1;if(we)for(let $e=0;$e<A.length;$e++)i.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);const Qe=L.texture.mipmaps;Qe&&Qe.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let $e=0;$e<A.length;$e++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(be|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(be|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[$e]);const Re=r.get(A[$e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Re,0)}s.blitFramebuffer(0,0,ie,he,0,0,ie,he,be,s.NEAREST),p===!0&&(ft.length=0,G.length=0,ft.push(s.COLOR_ATTACHMENT0+$e),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ft.push(ve),G.push(ve),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,G)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ft))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let $e=0;$e<A.length;$e++){i.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[$e]);const Re=r.get(A[$e]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,Re,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const A=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function dt(L){return Math.min(l.maxSamples,L.samples)}function mt(L){const A=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Xe(L){const A=f.render.frame;g.get(L)!==A&&(g.set(L,A),L.update())}function Dt(L,A){const ie=L.colorSpace,he=L.format,be=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ie!==Ps&&ie!==Ka&&(Rt.getTransfer(ie)===It?(he!==bi||be!==va)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),A}function ke(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=se,this.resetTextureUnits=ue,this.setTexture2D=de,this.setTexture2DArray=B,this.setTexture3D=Q,this.setTextureCube=K,this.rebindTextures=Ke,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=mt}function xR(s,e){function i(r,l=Ka){let u;const f=Rt.getTransfer(l);if(r===va)return s.UNSIGNED_BYTE;if(r===sp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===op)return s.UNSIGNED_SHORT_5_5_5_1;if(r===F0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===B0)return s.BYTE;if(r===I0)return s.SHORT;if(r===qo)return s.UNSIGNED_SHORT;if(r===rp)return s.INT;if(r===Or)return s.UNSIGNED_INT;if(r===ha)return s.FLOAT;if(r===Jo)return s.HALF_FLOAT;if(r===H0)return s.ALPHA;if(r===G0)return s.RGB;if(r===bi)return s.RGBA;if(r===Yo)return s.DEPTH_COMPONENT;if(r===Zo)return s.DEPTH_STENCIL;if(r===V0)return s.RED;if(r===lp)return s.RED_INTEGER;if(r===k0)return s.RG;if(r===up)return s.RG_INTEGER;if(r===cp)return s.RGBA_INTEGER;if(r===Gu||r===Vu||r===ku||r===Xu)if(f===It)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Gu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ku)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Gu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ku)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vh||r===xh||r===yh||r===Sh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===vh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Mh||r===Eh||r===bh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Mh||r===Eh)return f===It?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===bh)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Th||r===Ah||r===Rh||r===Ch||r===wh||r===Dh||r===Uh||r===Lh||r===Nh||r===Oh||r===Ph||r===zh||r===Bh||r===Ih)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Th)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ah)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rh)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ch)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wh)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Dh)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Uh)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Lh)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Nh)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Oh)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ph)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zh)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bh)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ih)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wu||r===Fh||r===Hh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Wu)return f===It?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Fh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Hh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===X0||r===Gh||r===Vh||r===kh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Wu)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Gh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Vh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===kh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===jo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const yR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class MR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Xn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new tr({vertexShader:yR,fragmentShader:SR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ma(new rc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ER extends Hs{constructor(e,i){super();const r=this;let l=null,u=1,f=null,h="local-floor",p=1,m=null,g=null,_=null,x=null,M=null,E=null;const b=new MR,S=i.getContextAttributes();let v=null,P=null;const U=[],D=[],H=new Gt;let z=null;const O=new di;O.viewport=new nn;const k=new di;k.viewport=new nn;const w=[O,k],C=new kb;let F=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let pe=U[q];return pe===void 0&&(pe=new jd,U[q]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(q){let pe=U[q];return pe===void 0&&(pe=new jd,U[q]=pe),pe.getGripSpace()},this.getHand=function(q){let pe=U[q];return pe===void 0&&(pe=new jd,U[q]=pe),pe.getHandSpace()};function se(q){const pe=D.indexOf(q.inputSource);if(pe===-1)return;const Te=U[pe];Te!==void 0&&(Te.update(q.inputSource,q.frame,m||f),Te.dispatchEvent({type:q.type,data:q.inputSource}))}function ge(){l.removeEventListener("select",se),l.removeEventListener("selectstart",se),l.removeEventListener("selectend",se),l.removeEventListener("squeeze",se),l.removeEventListener("squeezestart",se),l.removeEventListener("squeezeend",se),l.removeEventListener("end",ge),l.removeEventListener("inputsourceschange",de);for(let q=0;q<U.length;q++){const pe=D[q];pe!==null&&(D[q]=null,U[q].disconnect(pe))}F=null,ue=null,b.reset(),e.setRenderTarget(v),M=null,x=null,_=null,l=null,P=null,xe.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){u=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){h=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(q){m=q},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(v=e.getRenderTarget(),l.addEventListener("select",se),l.addEventListener("selectstart",se),l.addEventListener("selectend",se),l.addEventListener("squeeze",se),l.addEventListener("squeezestart",se),l.addEventListener("squeezeend",se),l.addEventListener("end",ge),l.addEventListener("inputsourceschange",de),S.xrCompatible!==!0&&await i.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Ee=null,Be=null;S.depth&&(Be=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Te=S.stencil?Zo:Yo,Ee=S.stencil?jo:Or);const Ye={colorFormat:i.RGBA8,depthFormat:Be,scaleFactor:u};_=new XRWebGLBinding(l,i),x=_.createProjectionLayer(Ye),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),P=new Pr(x.textureWidth,x.textureHeight,{format:bi,type:va,depthTexture:new rx(x.textureWidth,x.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Te={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Te),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Pr(M.framebufferWidth,M.framebufferHeight,{format:bi,type:va,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(h),xe.setContext(l),xe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function de(q){for(let pe=0;pe<q.removed.length;pe++){const Te=q.removed[pe],Ee=D.indexOf(Te);Ee>=0&&(D[Ee]=null,U[Ee].disconnect(Te))}for(let pe=0;pe<q.added.length;pe++){const Te=q.added[pe];let Ee=D.indexOf(Te);if(Ee===-1){for(let Ye=0;Ye<U.length;Ye++)if(Ye>=D.length){D.push(Te),Ee=Ye;break}else if(D[Ye]===null){D[Ye]=Te,Ee=Ye;break}if(Ee===-1)break}const Be=U[Ee];Be&&Be.connect(Te)}}const B=new le,Q=new le;function K(q,pe,Te){B.setFromMatrixPosition(pe.matrixWorld),Q.setFromMatrixPosition(Te.matrixWorld);const Ee=B.distanceTo(Q),Be=pe.projectionMatrix.elements,Ye=Te.projectionMatrix.elements,Ke=Be[14]/(Be[10]-1),Vt=Be[14]/(Be[10]+1),Ft=(Be[9]+1)/Be[5],ft=(Be[9]-1)/Be[5],G=(Be[8]-1)/Be[0],Tn=(Ye[8]+1)/Ye[0],dt=Ke*G,mt=Ke*Tn,Xe=Ee/(-G+Tn),Dt=Xe*-G;if(pe.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Dt),q.translateZ(Xe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Be[10]===-1)q.projectionMatrix.copy(pe.projectionMatrix),q.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const ke=Ke+Xe,L=Vt+Xe,A=dt-Dt,ie=mt+(Ee-Dt),he=Ft*Vt/L*ke,be=ft*Vt/L*ke;q.projectionMatrix.makePerspective(A,ie,he,be,ke,L),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Me(q,pe){pe===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(pe.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;let pe=q.near,Te=q.far;b.texture!==null&&(b.depthNear>0&&(pe=b.depthNear),b.depthFar>0&&(Te=b.depthFar)),C.near=k.near=O.near=pe,C.far=k.far=O.far=Te,(F!==C.near||ue!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),F=C.near,ue=C.far),O.layers.mask=q.layers.mask|2,k.layers.mask=q.layers.mask|4,C.layers.mask=O.layers.mask|k.layers.mask;const Ee=q.parent,Be=C.cameras;Me(C,Ee);for(let Ye=0;Ye<Be.length;Ye++)Me(Be[Ye],Ee);Be.length===2?K(C,O,k):C.projectionMatrix.copy(O.projectionMatrix),me(q,C,Ee)};function me(q,pe,Te){Te===null?q.matrix.copy(pe.matrixWorld):(q.matrix.copy(Te.matrixWorld),q.matrix.invert(),q.matrix.multiply(pe.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(pe.projectionMatrix),q.projectionMatrixInverse.copy(pe.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Xh*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&M===null))return p},this.setFoveation=function(q){p=q,x!==null&&(x.fixedFoveation=q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=q)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(C)};let N=null;function $(q,pe){if(g=pe.getViewerPose(m||f),E=pe,g!==null){const Te=g.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Ee=!1;Te.length!==C.cameras.length&&(C.cameras.length=0,Ee=!0);for(let Ke=0;Ke<Te.length;Ke++){const Vt=Te[Ke];let Ft=null;if(M!==null)Ft=M.getViewport(Vt);else{const G=_.getViewSubImage(x,Vt);Ft=G.viewport,Ke===0&&(e.setRenderTargetTextures(P,G.colorTexture,G.depthStencilTexture),e.setRenderTarget(P))}let ft=w[Ke];ft===void 0&&(ft=new di,ft.layers.enable(Ke),ft.viewport=new nn,w[Ke]=ft),ft.matrix.fromArray(Vt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(Vt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),Ke===0&&(C.matrix.copy(ft.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Ee===!0&&C.cameras.push(ft)}const Be=l.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const Ke=_.getDepthInformation(Te[0]);Ke&&Ke.isValid&&Ke.texture&&b.init(e,Ke,l.renderState)}}for(let Te=0;Te<U.length;Te++){const Ee=D[Te],Be=U[Te];Ee!==null&&Be!==void 0&&Be.update(Ee,pe,m||f)}N&&N(q,pe),pe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pe}),E=null}const xe=new sx;xe.setAnimationLoop($),this.setAnimationLoop=function(q){N=q},this.dispose=function(){}}}const Ar=new xa,bR=new an;function TR(s,e){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function r(S,v){v.color.getRGB(S.fogColor.value,ex(s)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,P,U,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(S,v):v.isMeshToonMaterial?(u(S,v),_(S,v)):v.isMeshPhongMaterial?(u(S,v),g(S,v)):v.isMeshStandardMaterial?(u(S,v),x(S,v),v.isMeshPhysicalMaterial&&M(S,v,D)):v.isMeshMatcapMaterial?(u(S,v),E(S,v)):v.isMeshDepthMaterial?u(S,v):v.isMeshDistanceMaterial?(u(S,v),b(S,v)):v.isMeshNormalMaterial?u(S,v):v.isLineBasicMaterial?(f(S,v),v.isLineDashedMaterial&&h(S,v)):v.isPointsMaterial?p(S,v,P,U):v.isSpriteMaterial?m(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===kn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===kn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const P=e.get(v),U=P.envMap,D=P.envMapRotation;U&&(S.envMap.value=U,Ar.copy(D),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),S.envMapRotation.value.setFromMatrix4(bR.makeRotationFromEuler(Ar)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function f(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function h(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function p(S,v,P,U){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*P,S.scale.value=U*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function m(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function x(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function M(S,v,P){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===kn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,v){v.matcap&&(S.matcap.value=v.matcap)}function b(S,v){const P=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function AR(s,e,i,r){let l={},u={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,U){const D=U.program;r.uniformBlockBinding(P,D)}function m(P,U){let D=l[P.id];D===void 0&&(E(P),D=g(P),l[P.id]=D,P.addEventListener("dispose",S));const H=U.program;r.updateUBOMapping(P,H);const z=e.render.frame;u[P.id]!==z&&(x(P),u[P.id]=z)}function g(P){const U=_();P.__bindingPointIndex=U;const D=s.createBuffer(),H=P.__size,z=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,H,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,D),D}function _(){for(let P=0;P<h;P++)if(f.indexOf(P)===-1)return f.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const U=l[P.id],D=P.uniforms,H=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let z=0,O=D.length;z<O;z++){const k=Array.isArray(D[z])?D[z]:[D[z]];for(let w=0,C=k.length;w<C;w++){const F=k[w];if(M(F,z,w,H)===!0){const ue=F.__offset,se=Array.isArray(F.value)?F.value:[F.value];let ge=0;for(let de=0;de<se.length;de++){const B=se[de],Q=b(B);typeof B=="number"||typeof B=="boolean"?(F.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,ue+ge,F.__data)):B.isMatrix3?(F.__data[0]=B.elements[0],F.__data[1]=B.elements[1],F.__data[2]=B.elements[2],F.__data[3]=0,F.__data[4]=B.elements[3],F.__data[5]=B.elements[4],F.__data[6]=B.elements[5],F.__data[7]=0,F.__data[8]=B.elements[6],F.__data[9]=B.elements[7],F.__data[10]=B.elements[8],F.__data[11]=0):(B.toArray(F.__data,ge),ge+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ue,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(P,U,D,H){const z=P.value,O=U+"_"+D;if(H[O]===void 0)return typeof z=="number"||typeof z=="boolean"?H[O]=z:H[O]=z.clone(),!0;{const k=H[O];if(typeof z=="number"||typeof z=="boolean"){if(k!==z)return H[O]=z,!0}else if(k.equals(z)===!1)return k.copy(z),!0}return!1}function E(P){const U=P.uniforms;let D=0;const H=16;for(let O=0,k=U.length;O<k;O++){const w=Array.isArray(U[O])?U[O]:[U[O]];for(let C=0,F=w.length;C<F;C++){const ue=w[C],se=Array.isArray(ue.value)?ue.value:[ue.value];for(let ge=0,de=se.length;ge<de;ge++){const B=se[ge],Q=b(B),K=D%H,Me=K%Q.boundary,me=K+Me;D+=Me,me!==0&&H-me<Q.storage&&(D+=H-me),ue.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=D,D+=Q.storage}}}const z=D%H;return z>0&&(D+=H-z),P.__size=D,P.__cache={},this}function b(P){const U={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(U.boundary=4,U.storage=4):P.isVector2?(U.boundary=8,U.storage=8):P.isVector3||P.isColor?(U.boundary=16,U.storage=12):P.isVector4?(U.boundary=16,U.storage=16):P.isMatrix3?(U.boundary=48,U.storage=48):P.isMatrix4?(U.boundary=64,U.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),U}function S(P){const U=P.target;U.removeEventListener("dispose",S);const D=f.indexOf(U.__bindingPointIndex);f.splice(D,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function v(){for(const P in l)s.deleteBuffer(l[P]);f=[],l={},u={}}return{bind:p,update:m,dispose:v}}class RR{constructor(e={}){const{canvas:i=lb(),context:r=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=f;const E=new Uint32Array(4),b=new Int32Array(4);let S=null,v=null;const P=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ja,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let H=!1;this._outputColorSpace=fi;let z=0,O=0,k=null,w=-1,C=null;const F=new nn,ue=new nn;let se=null;const ge=new wt(0);let de=0,B=i.width,Q=i.height,K=1,Me=null,me=null;const N=new nn(0,0,B,Q),$=new nn(0,0,B,Q);let xe=!1;const q=new ix;let pe=!1,Te=!1;const Ee=new an,Be=new an,Ye=new le,Ke=new nn,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function ft(){return k===null?K:1}let G=r;function Tn(R,j){return i.getContext(R,j)}try{const R={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ap}`),i.addEventListener("webglcontextlost",Se,!1),i.addEventListener("webglcontextrestored",Ce,!1),i.addEventListener("webglcontextcreationerror",Ue,!1),G===null){const j="webgl2";if(G=Tn(j,R),G===null)throw Tn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let dt,mt,Xe,Dt,ke,L,A,ie,he,be,ve,Ge,we,Qe,$e,Re,Ie,Ze,Ve,Pe,tt,st,Nt,W;function De(){dt=new BA(G),dt.init(),st=new xR(G,dt),mt=new DA(G,dt,e,st),Xe=new _R(G,dt),mt.reverseDepthBuffer&&x&&Xe.buffers.depth.setReversed(!0),Dt=new HA(G),ke=new aR,L=new vR(G,dt,Xe,ke,mt,st,Dt),A=new LA(D),ie=new zA(D),he=new qb(G),Nt=new CA(G,he),be=new IA(G,he,Dt,Nt),ve=new VA(G,be,he,Dt),Ve=new GA(G,mt,L),Re=new UA(ke),Ge=new iR(D,A,ie,dt,mt,Nt,Re),we=new TR(D,ke),Qe=new sR,$e=new dR(dt),Ze=new RA(D,A,ie,Xe,ve,M,p),Ie=new mR(D,ve,mt),W=new AR(G,Dt,mt,Xe),Pe=new wA(G,dt,Dt),tt=new FA(G,dt,Dt),Dt.programs=Ge.programs,D.capabilities=mt,D.extensions=dt,D.properties=ke,D.renderLists=Qe,D.shadowMap=Ie,D.state=Xe,D.info=Dt}De();const ce=new ER(D,G);this.xr=ce,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=dt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=dt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(R){R!==void 0&&(K=R,this.setSize(B,Q,!1))},this.getSize=function(R){return R.set(B,Q)},this.setSize=function(R,j,ae=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,Q=j,i.width=Math.floor(R*K),i.height=Math.floor(j*K),ae===!0&&(i.style.width=R+"px",i.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(B*K,Q*K).floor()},this.setDrawingBufferSize=function(R,j,ae){B=R,Q=j,K=ae,i.width=Math.floor(R*ae),i.height=Math.floor(j*ae),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(N)},this.setViewport=function(R,j,ae,re){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,j,ae,re),Xe.viewport(F.copy(N).multiplyScalar(K).round())},this.getScissor=function(R){return R.copy($)},this.setScissor=function(R,j,ae,re){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,j,ae,re),Xe.scissor(ue.copy($).multiplyScalar(K).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(R){Xe.setScissorTest(xe=R)},this.setOpaqueSort=function(R){Me=R},this.setTransparentSort=function(R){me=R},this.getClearColor=function(R){return R.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,ae=!0){let re=0;if(R){let X=!1;if(k!==null){const Ae=k.texture.format;X=Ae===cp||Ae===up||Ae===lp}if(X){const Ae=k.texture.type,Le=Ae===va||Ae===Or||Ae===qo||Ae===jo||Ae===sp||Ae===op,Oe=Ze.getClearColor(),ze=Ze.getClearAlpha(),it=Oe.r,et=Oe.g,We=Oe.b;Le?(E[0]=it,E[1]=et,E[2]=We,E[3]=ze,G.clearBufferuiv(G.COLOR,0,E)):(b[0]=it,b[1]=et,b[2]=We,b[3]=ze,G.clearBufferiv(G.COLOR,0,b))}else re|=G.COLOR_BUFFER_BIT}j&&(re|=G.DEPTH_BUFFER_BIT),ae&&(re|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Se,!1),i.removeEventListener("webglcontextrestored",Ce,!1),i.removeEventListener("webglcontextcreationerror",Ue,!1),Ze.dispose(),Qe.dispose(),$e.dispose(),ke.dispose(),A.dispose(),ie.dispose(),ve.dispose(),Nt.dispose(),W.dispose(),Ge.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Vs),ce.removeEventListener("sessionend",ks),wi.stop()};function Se(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const R=Dt.autoReset,j=Ie.enabled,ae=Ie.autoUpdate,re=Ie.needsUpdate,X=Ie.type;De(),Dt.autoReset=R,Ie.enabled=j,Ie.autoUpdate=ae,Ie.needsUpdate=re,Ie.type=X}function Ue(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function nt(R){const j=R.target;j.removeEventListener("dispose",nt),qt(j)}function qt(R){cn(R),ke.remove(R)}function cn(R){const j=ke.get(R).programs;j!==void 0&&(j.forEach(function(ae){Ge.releaseProgram(ae)}),R.isShaderMaterial&&Ge.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,ae,re,X,Ae){j===null&&(j=Vt);const Le=X.isMesh&&X.matrixWorld.determinant()<0,Oe=Ws(R,j,ae,re,X);Xe.setMaterial(re,Le);let ze=ae.index,it=1;if(re.wireframe===!0){if(ze=be.getWireframeAttribute(ae),ze===void 0)return;it=2}const et=ae.drawRange,We=ae.attributes.position;let vt=et.start*it,xt=(et.start+et.count)*it;Ae!==null&&(vt=Math.max(vt,Ae.start*it),xt=Math.min(xt,(Ae.start+Ae.count)*it)),ze!==null?(vt=Math.max(vt,0),xt=Math.min(xt,ze.count)):We!=null&&(vt=Math.max(vt,0),xt=Math.min(xt,We.count));const kt=xt-vt;if(kt<0||kt===1/0)return;Nt.setup(X,re,Oe,ae,ze);let bt,at=Pe;if(ze!==null&&(bt=he.get(ze),at=tt,at.setIndex(bt)),X.isMesh)re.wireframe===!0?(Xe.setLineWidth(re.wireframeLinewidth*ft()),at.setMode(G.LINES)):at.setMode(G.TRIANGLES);else if(X.isLine){let je=re.linewidth;je===void 0&&(je=1),Xe.setLineWidth(je*ft()),X.isLineSegments?at.setMode(G.LINES):X.isLineLoop?at.setMode(G.LINE_LOOP):at.setMode(G.LINE_STRIP)}else X.isPoints?at.setMode(G.POINTS):X.isSprite&&at.setMode(G.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)qu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))at.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const je=X._multiDrawStarts,fn=X._multiDrawCounts,Mt=X._multiDrawCount,On=ze?he.get(ze).bytesPerElement:1,mi=ke.get(re).currentProgram.getUniforms();for(let Dn=0;Dn<Mt;Dn++)mi.setValue(G,"_gl_DrawID",Dn),at.render(je[Dn]/On,fn[Dn])}else if(X.isInstancedMesh)at.renderInstances(vt,kt,X.count);else if(ae.isInstancedBufferGeometry){const je=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,fn=Math.min(ae.instanceCount,je);at.renderInstances(vt,kt,fn)}else at.render(vt,kt)};function Et(R,j,ae){R.transparent===!0&&R.side===da&&R.forceSinglePass===!1?(R.side=kn,R.needsUpdate=!0,Zt(R,j,ae),R.side=er,R.needsUpdate=!0,Zt(R,j,ae),R.side=da):Zt(R,j,ae)}this.compile=function(R,j,ae=null){ae===null&&(ae=R),v=$e.get(ae),v.init(j),U.push(v),ae.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(v.pushLight(X),X.castShadow&&v.pushShadow(X))}),R!==ae&&R.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(v.pushLight(X),X.castShadow&&v.pushShadow(X))}),v.setupLights();const re=new Set;return R.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Ae=X.material;if(Ae)if(Array.isArray(Ae))for(let Le=0;Le<Ae.length;Le++){const Oe=Ae[Le];Et(Oe,ae,X),re.add(Oe)}else Et(Ae,ae,X),re.add(Ae)}),v=U.pop(),re},this.compileAsync=function(R,j,ae=null){const re=this.compile(R,j,ae);return new Promise(X=>{function Ae(){if(re.forEach(function(Le){ke.get(Le).currentProgram.isReady()&&re.delete(Le)}),re.size===0){X(R);return}setTimeout(Ae,10)}dt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let vn=null;function hi(R){vn&&vn(R)}function Vs(){wi.stop()}function ks(){wi.start()}const wi=new sx;wi.setAnimationLoop(hi),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(R){vn=R,ce.setAnimationLoop(R),R===null?wi.stop():wi.start()},ce.addEventListener("sessionstart",Vs),ce.addEventListener("sessionend",ks),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(j),j=ce.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,j,k),v=$e.get(R,U.length),v.init(j),U.push(v),Be.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),q.setFromProjectionMatrix(Be),Te=this.localClippingEnabled,pe=Re.init(this.clippingPlanes,Te),S=Qe.get(R,P.length),S.init(),P.push(S),ce.enabled===!0&&ce.isPresenting===!0){const Ae=D.xr.getDepthSensingMesh();Ae!==null&&nr(Ae,j,-1/0,D.sortObjects)}nr(R,j,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(Me,me),Ft=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Ft&&Ze.addToRenderList(S,R),this.info.render.frame++,pe===!0&&Re.beginShadows();const ae=v.state.shadowsArray;Ie.render(ae,R,j),pe===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=S.opaque,X=S.transmissive;if(v.setupLights(),j.isArrayCamera){const Ae=j.cameras;if(X.length>0)for(let Le=0,Oe=Ae.length;Le<Oe;Le++){const ze=Ae[Le];Xs(re,X,R,ze)}Ft&&Ze.render(R);for(let Le=0,Oe=Ae.length;Le<Oe;Le++){const ze=Ae[Le];zr(S,R,ze,ze.viewport)}}else X.length>0&&Xs(re,X,R,j),Ft&&Ze.render(R),zr(S,R,j);k!==null&&O===0&&(L.updateMultisampleRenderTarget(k),L.updateRenderTargetMipmap(k)),R.isScene===!0&&R.onAfterRender(D,R,j),Nt.resetDefaultState(),w=-1,C=null,U.pop(),U.length>0?(v=U[U.length-1],pe===!0&&Re.setGlobalState(D.clippingPlanes,v.state.camera)):v=null,P.pop(),P.length>0?S=P[P.length-1]:S=null};function nr(R,j,ae,re){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||q.intersectsSprite(R)){re&&Ke.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Be);const Le=ve.update(R),Oe=R.material;Oe.visible&&S.push(R,Le,Oe,ae,Ke.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||q.intersectsObject(R))){const Le=ve.update(R),Oe=R.material;if(re&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ke.copy(R.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Ke.copy(Le.boundingSphere.center)),Ke.applyMatrix4(R.matrixWorld).applyMatrix4(Be)),Array.isArray(Oe)){const ze=Le.groups;for(let it=0,et=ze.length;it<et;it++){const We=ze[it],vt=Oe[We.materialIndex];vt&&vt.visible&&S.push(R,Le,vt,ae,Ke.z,We)}}else Oe.visible&&S.push(R,Le,Oe,ae,Ke.z,null)}}const Ae=R.children;for(let Le=0,Oe=Ae.length;Le<Oe;Le++)nr(Ae[Le],j,ae,re)}function zr(R,j,ae,re){const X=R.opaque,Ae=R.transmissive,Le=R.transparent;v.setupLightsView(ae),pe===!0&&Re.setGlobalState(D.clippingPlanes,ae),re&&Xe.viewport(F.copy(re)),X.length>0&&ir(X,j,ae),Ae.length>0&&ir(Ae,j,ae),Le.length>0&&ir(Le,j,ae),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Xs(R,j,ae,re){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[re.id]===void 0&&(v.state.transmissionRenderTarget[re.id]=new Pr(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?Jo:va,minFilter:Lr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const Ae=v.state.transmissionRenderTarget[re.id],Le=re.viewport||F;Ae.setSize(Le.z*D.transmissionResolutionScale,Le.w*D.transmissionResolutionScale);const Oe=D.getRenderTarget();D.setRenderTarget(Ae),D.getClearColor(ge),de=D.getClearAlpha(),de<1&&D.setClearColor(16777215,.5),D.clear(),Ft&&Ze.render(ae);const ze=D.toneMapping;D.toneMapping=Ja;const it=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),v.setupLightsView(re),pe===!0&&Re.setGlobalState(D.clippingPlanes,re),ir(R,ae,re),L.updateMultisampleRenderTarget(Ae),L.updateRenderTargetMipmap(Ae),dt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let We=0,vt=j.length;We<vt;We++){const xt=j[We],kt=xt.object,bt=xt.geometry,at=xt.material,je=xt.group;if(at.side===da&&kt.layers.test(re.layers)){const fn=at.side;at.side=kn,at.needsUpdate=!0,pi(kt,ae,re,bt,at,je),at.side=fn,at.needsUpdate=!0,et=!0}}et===!0&&(L.updateMultisampleRenderTarget(Ae),L.updateRenderTargetMipmap(Ae))}D.setRenderTarget(Oe),D.setClearColor(ge,de),it!==void 0&&(re.viewport=it),D.toneMapping=ze}function ir(R,j,ae){const re=j.isScene===!0?j.overrideMaterial:null;for(let X=0,Ae=R.length;X<Ae;X++){const Le=R[X],Oe=Le.object,ze=Le.geometry,it=Le.group;let et=Le.material;et.allowOverride===!0&&re!==null&&(et=re),Oe.layers.test(ae.layers)&&pi(Oe,j,ae,ze,et,it)}}function pi(R,j,ae,re,X,Ae){R.onBeforeRender(D,j,ae,re,X,Ae),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(D,j,ae,re,R,Ae),X.transparent===!0&&X.side===da&&X.forceSinglePass===!1?(X.side=kn,X.needsUpdate=!0,D.renderBufferDirect(ae,j,re,X,R,Ae),X.side=er,X.needsUpdate=!0,D.renderBufferDirect(ae,j,re,X,R,Ae),X.side=da):D.renderBufferDirect(ae,j,re,X,R,Ae),R.onAfterRender(D,j,ae,re,X,Ae)}function Zt(R,j,ae){j.isScene!==!0&&(j=Vt);const re=ke.get(R),X=v.state.lights,Ae=v.state.shadowsArray,Le=X.state.version,Oe=Ge.getParameters(R,X.state,Ae,j,ae),ze=Ge.getProgramCacheKey(Oe);let it=re.programs;re.environment=R.isMeshStandardMaterial?j.environment:null,re.fog=j.fog,re.envMap=(R.isMeshStandardMaterial?ie:A).get(R.envMap||re.environment),re.envMapRotation=re.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,it===void 0&&(R.addEventListener("dispose",nt),it=new Map,re.programs=it);let et=it.get(ze);if(et!==void 0){if(re.currentProgram===et&&re.lightsStateVersion===Le)return Gi(R,Oe),et}else Oe.uniforms=Ge.getUniforms(R),R.onBeforeCompile(Oe,D),et=Ge.acquireProgram(Oe,ze),it.set(ze,et),re.uniforms=Oe.uniforms;const We=re.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(We.clippingPlanes=Re.uniform),Gi(R,Oe),re.needsLights=uc(R),re.lightsStateVersion=Le,re.needsLights&&(We.ambientLightColor.value=X.state.ambient,We.lightProbe.value=X.state.probe,We.directionalLights.value=X.state.directional,We.directionalLightShadows.value=X.state.directionalShadow,We.spotLights.value=X.state.spot,We.spotLightShadows.value=X.state.spotShadow,We.rectAreaLights.value=X.state.rectArea,We.ltc_1.value=X.state.rectAreaLTC1,We.ltc_2.value=X.state.rectAreaLTC2,We.pointLights.value=X.state.point,We.pointLightShadows.value=X.state.pointShadow,We.hemisphereLights.value=X.state.hemi,We.directionalShadowMap.value=X.state.directionalShadowMap,We.directionalShadowMatrix.value=X.state.directionalShadowMatrix,We.spotShadowMap.value=X.state.spotShadowMap,We.spotLightMatrix.value=X.state.spotLightMatrix,We.spotLightMap.value=X.state.spotLightMap,We.pointShadowMap.value=X.state.pointShadowMap,We.pointShadowMatrix.value=X.state.pointShadowMatrix),re.currentProgram=et,re.uniformsList=null,et}function xn(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=ju.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function Gi(R,j){const ae=ke.get(R);ae.outputColorSpace=j.outputColorSpace,ae.batching=j.batching,ae.batchingColor=j.batchingColor,ae.instancing=j.instancing,ae.instancingColor=j.instancingColor,ae.instancingMorph=j.instancingMorph,ae.skinning=j.skinning,ae.morphTargets=j.morphTargets,ae.morphNormals=j.morphNormals,ae.morphColors=j.morphColors,ae.morphTargetsCount=j.morphTargetsCount,ae.numClippingPlanes=j.numClippingPlanes,ae.numIntersection=j.numClipIntersection,ae.vertexAlphas=j.vertexAlphas,ae.vertexTangents=j.vertexTangents,ae.toneMapping=j.toneMapping}function Ws(R,j,ae,re,X){j.isScene!==!0&&(j=Vt),L.resetTextureUnits();const Ae=j.fog,Le=re.isMeshStandardMaterial?j.environment:null,Oe=k===null?D.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ps,ze=(re.isMeshStandardMaterial?ie:A).get(re.envMap||Le),it=re.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,et=!!ae.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),We=!!ae.morphAttributes.position,vt=!!ae.morphAttributes.normal,xt=!!ae.morphAttributes.color;let kt=Ja;re.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(kt=D.toneMapping);const bt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,at=bt!==void 0?bt.length:0,je=ke.get(re),fn=v.state.lights;if(pe===!0&&(Te===!0||R!==C)){const Kt=R===C&&re.id===w;Re.setState(re,R,Kt)}let Mt=!1;re.version===je.__version?(je.needsLights&&je.lightsStateVersion!==fn.state.version||je.outputColorSpace!==Oe||X.isBatchedMesh&&je.batching===!1||!X.isBatchedMesh&&je.batching===!0||X.isBatchedMesh&&je.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&je.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&je.instancing===!1||!X.isInstancedMesh&&je.instancing===!0||X.isSkinnedMesh&&je.skinning===!1||!X.isSkinnedMesh&&je.skinning===!0||X.isInstancedMesh&&je.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&je.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&je.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&je.instancingMorph===!1&&X.morphTexture!==null||je.envMap!==ze||re.fog===!0&&je.fog!==Ae||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Re.numPlanes||je.numIntersection!==Re.numIntersection)||je.vertexAlphas!==it||je.vertexTangents!==et||je.morphTargets!==We||je.morphNormals!==vt||je.morphColors!==xt||je.toneMapping!==kt||je.morphTargetsCount!==at)&&(Mt=!0):(Mt=!0,je.__version=re.version);let On=je.currentProgram;Mt===!0&&(On=Zt(re,j,X));let mi=!1,Dn=!1,mn=!1;const Ot=On.getUniforms(),Un=je.uniforms;if(Xe.useProgram(On.program)&&(mi=!0,Dn=!0,mn=!0),re.id!==w&&(w=re.id,Dn=!0),mi||C!==R){Xe.buffers.depth.getReversed()?(Ee.copy(R.projectionMatrix),cb(Ee),fb(Ee),Ot.setValue(G,"projectionMatrix",Ee)):Ot.setValue(G,"projectionMatrix",R.projectionMatrix),Ot.setValue(G,"viewMatrix",R.matrixWorldInverse);const yn=Ot.map.cameraPosition;yn!==void 0&&yn.setValue(G,Ye.setFromMatrixPosition(R.matrixWorld)),mt.logarithmicDepthBuffer&&Ot.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Ot.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Dn=!0,mn=!0)}if(X.isSkinnedMesh){Ot.setOptional(G,X,"bindMatrix"),Ot.setOptional(G,X,"bindMatrixInverse");const Kt=X.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Ot.setValue(G,"boneTexture",Kt.boneTexture,L))}X.isBatchedMesh&&(Ot.setOptional(G,X,"batchingTexture"),Ot.setValue(G,"batchingTexture",X._matricesTexture,L),Ot.setOptional(G,X,"batchingIdTexture"),Ot.setValue(G,"batchingIdTexture",X._indirectTexture,L),Ot.setOptional(G,X,"batchingColorTexture"),X._colorsTexture!==null&&Ot.setValue(G,"batchingColorTexture",X._colorsTexture,L));const An=ae.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&Ve.update(X,ae,On),(Dn||je.receiveShadow!==X.receiveShadow)&&(je.receiveShadow=X.receiveShadow,Ot.setValue(G,"receiveShadow",X.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Un.envMap.value=ze,Un.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&j.environment!==null&&(Un.envMapIntensity.value=j.environmentIntensity),Dn&&(Ot.setValue(G,"toneMappingExposure",D.toneMappingExposure),je.needsLights&&lc(Un,mn),Ae&&re.fog===!0&&we.refreshFogUniforms(Un,Ae),we.refreshMaterialUniforms(Un,re,K,Q,v.state.transmissionRenderTarget[R.id]),ju.upload(G,xn(je),Un,L)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(ju.upload(G,xn(je),Un,L),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Ot.setValue(G,"center",X.center),Ot.setValue(G,"modelViewMatrix",X.modelViewMatrix),Ot.setValue(G,"normalMatrix",X.normalMatrix),Ot.setValue(G,"modelMatrix",X.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const Kt=re.uniformsGroups;for(let yn=0,Br=Kt.length;yn<Br;yn++){const Pn=Kt[yn];W.update(Pn,On),W.bind(Pn,On)}}return On}function lc(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function uc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(R,j,ae){const re=ke.get(R);re.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),ke.get(R.texture).__webglTexture=j,ke.get(R.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ae,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const ae=ke.get(R);ae.__webglFramebuffer=j,ae.__useDefaultFramebuffer=j===void 0};const al=G.createFramebuffer();this.setRenderTarget=function(R,j=0,ae=0){k=R,z=j,O=ae;let re=!0,X=null,Ae=!1,Le=!1;if(R){const ze=ke.get(R);if(ze.__useDefaultFramebuffer!==void 0)Xe.bindFramebuffer(G.FRAMEBUFFER,null),re=!1;else if(ze.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(ze.__hasExternalTextures)L.rebindTextures(R,ke.get(R.texture).__webglTexture,ke.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const We=R.depthTexture;if(ze.__boundDepthTexture!==We){if(We!==null&&ke.has(We)&&(R.width!==We.image.width||R.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const it=R.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Le=!0);const et=ke.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(et[j])?X=et[j][ae]:X=et[j],Ae=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?X=ke.get(R).__webglMultisampledFramebuffer:Array.isArray(et)?X=et[ae]:X=et,F.copy(R.viewport),ue.copy(R.scissor),se=R.scissorTest}else F.copy(N).multiplyScalar(K).floor(),ue.copy($).multiplyScalar(K).floor(),se=xe;if(ae!==0&&(X=al),Xe.bindFramebuffer(G.FRAMEBUFFER,X)&&re&&Xe.drawBuffers(R,X),Xe.viewport(F),Xe.scissor(ue),Xe.setScissorTest(se),Ae){const ze=ke.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+j,ze.__webglTexture,ae)}else if(Le){const ze=ke.get(R.texture),it=j;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,ze.__webglTexture,ae,it)}else if(R!==null&&ae!==0){const ze=ke.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ze.__webglTexture,ae)}w=-1},this.readRenderTargetPixels=function(R,j,ae,re,X,Ae,Le){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=ke.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){Xe.bindFramebuffer(G.FRAMEBUFFER,Oe);try{const ze=R.texture,it=ze.format,et=ze.type;if(!mt.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-re&&ae>=0&&ae<=R.height-X&&G.readPixels(j,ae,re,X,st.convert(it),st.convert(et),Ae)}finally{const ze=k!==null?ke.get(k).__webglFramebuffer:null;Xe.bindFramebuffer(G.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(R,j,ae,re,X,Ae,Le){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=ke.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe)if(j>=0&&j<=R.width-re&&ae>=0&&ae<=R.height-X){Xe.bindFramebuffer(G.FRAMEBUFFER,Oe);const ze=R.texture,it=ze.format,et=ze.type;if(!mt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,We),G.bufferData(G.PIXEL_PACK_BUFFER,Ae.byteLength,G.STREAM_READ),G.readPixels(j,ae,re,X,st.convert(it),st.convert(et),0);const vt=k!==null?ke.get(k).__webglFramebuffer:null;Xe.bindFramebuffer(G.FRAMEBUFFER,vt);const xt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await ub(G,xt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,We),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ae),G.deleteBuffer(We),G.deleteSync(xt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,ae=0){const re=Math.pow(2,-ae),X=Math.floor(R.image.width*re),Ae=Math.floor(R.image.height*re),Le=j!==null?j.x:0,Oe=j!==null?j.y:0;L.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,ae,0,0,Le,Oe,X,Ae),Xe.unbindTexture()};const ar=G.createFramebuffer(),qs=G.createFramebuffer();this.copyTextureToTexture=function(R,j,ae=null,re=null,X=0,Ae=null){Ae===null&&(X!==0?(qu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=X,X=0):Ae=0);let Le,Oe,ze,it,et,We,vt,xt,kt;const bt=R.isCompressedTexture?R.mipmaps[Ae]:R.image;if(ae!==null)Le=ae.max.x-ae.min.x,Oe=ae.max.y-ae.min.y,ze=ae.isBox3?ae.max.z-ae.min.z:1,it=ae.min.x,et=ae.min.y,We=ae.isBox3?ae.min.z:0;else{const An=Math.pow(2,-X);Le=Math.floor(bt.width*An),Oe=Math.floor(bt.height*An),R.isDataArrayTexture?ze=bt.depth:R.isData3DTexture?ze=Math.floor(bt.depth*An):ze=1,it=0,et=0,We=0}re!==null?(vt=re.x,xt=re.y,kt=re.z):(vt=0,xt=0,kt=0);const at=st.convert(j.format),je=st.convert(j.type);let fn;j.isData3DTexture?(L.setTexture3D(j,0),fn=G.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(L.setTexture2DArray(j,0),fn=G.TEXTURE_2D_ARRAY):(L.setTexture2D(j,0),fn=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,j.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,j.unpackAlignment);const Mt=G.getParameter(G.UNPACK_ROW_LENGTH),On=G.getParameter(G.UNPACK_IMAGE_HEIGHT),mi=G.getParameter(G.UNPACK_SKIP_PIXELS),Dn=G.getParameter(G.UNPACK_SKIP_ROWS),mn=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,bt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,bt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,it),G.pixelStorei(G.UNPACK_SKIP_ROWS,et),G.pixelStorei(G.UNPACK_SKIP_IMAGES,We);const Ot=R.isDataArrayTexture||R.isData3DTexture,Un=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const An=ke.get(R),Kt=ke.get(j),yn=ke.get(An.__renderTarget),Br=ke.get(Kt.__renderTarget);Xe.bindFramebuffer(G.READ_FRAMEBUFFER,yn.__webglFramebuffer),Xe.bindFramebuffer(G.DRAW_FRAMEBUFFER,Br.__webglFramebuffer);for(let Pn=0;Pn<ze;Pn++)Ot&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ke.get(R).__webglTexture,X,We+Pn),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ke.get(j).__webglTexture,Ae,kt+Pn)),G.blitFramebuffer(it,et,Le,Oe,vt,xt,Le,Oe,G.DEPTH_BUFFER_BIT,G.NEAREST);Xe.bindFramebuffer(G.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(X!==0||R.isRenderTargetTexture||ke.has(R)){const An=ke.get(R),Kt=ke.get(j);Xe.bindFramebuffer(G.READ_FRAMEBUFFER,ar),Xe.bindFramebuffer(G.DRAW_FRAMEBUFFER,qs);for(let yn=0;yn<ze;yn++)Ot?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,An.__webglTexture,X,We+yn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,An.__webglTexture,X),Un?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Kt.__webglTexture,Ae,kt+yn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Kt.__webglTexture,Ae),X!==0?G.blitFramebuffer(it,et,Le,Oe,vt,xt,Le,Oe,G.COLOR_BUFFER_BIT,G.NEAREST):Un?G.copyTexSubImage3D(fn,Ae,vt,xt,kt+yn,it,et,Le,Oe):G.copyTexSubImage2D(fn,Ae,vt,xt,it,et,Le,Oe);Xe.bindFramebuffer(G.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Un?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(fn,Ae,vt,xt,kt,Le,Oe,ze,at,je,bt.data):j.isCompressedArrayTexture?G.compressedTexSubImage3D(fn,Ae,vt,xt,kt,Le,Oe,ze,at,bt.data):G.texSubImage3D(fn,Ae,vt,xt,kt,Le,Oe,ze,at,je,bt):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ae,vt,xt,Le,Oe,at,je,bt.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ae,vt,xt,bt.width,bt.height,at,bt.data):G.texSubImage2D(G.TEXTURE_2D,Ae,vt,xt,Le,Oe,at,je,bt);G.pixelStorei(G.UNPACK_ROW_LENGTH,Mt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,On),G.pixelStorei(G.UNPACK_SKIP_PIXELS,mi),G.pixelStorei(G.UNPACK_SKIP_ROWS,Dn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,mn),Ae===0&&j.generateMipmaps&&G.generateMipmap(fn),Xe.unbindTexture()},this.copyTextureToTexture3D=function(R,j,ae=null,re=null,X=0){return qu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,j,ae,re,X)},this.initRenderTarget=function(R){ke.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),Xe.unbindTexture()},this.resetState=function(){z=0,O=0,k=null,Xe.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Rt._getUnpackColorSpace()}}const CR=[{left:"6%",top:"12%",size:6,duration:19,delay:.2},{left:"14%",top:"78%",size:8,duration:22,delay:.8},{left:"21%",top:"40%",size:10,duration:24,delay:1.1},{left:"29%",top:"18%",size:7,duration:26,delay:.1},{left:"35%",top:"65%",size:9,duration:21,delay:1.7},{left:"42%",top:"33%",size:12,duration:28,delay:.4},{left:"51%",top:"82%",size:8,duration:20,delay:1.9},{left:"57%",top:"10%",size:11,duration:27,delay:.9},{left:"64%",top:"48%",size:7,duration:18,delay:.5},{left:"71%",top:"26%",size:9,duration:25,delay:2.1},{left:"79%",top:"72%",size:8,duration:23,delay:1.5},{left:"86%",top:"37%",size:10,duration:20,delay:.3},{left:"92%",top:"58%",size:6,duration:22,delay:1.4}];function wR(){const s=J.useRef(null);return J.useEffect(()=>{const e=s.current;if(!e)return;const i=e.clientWidth,r=e.clientHeight,l=new zb,u=new di(45,i/r,.1,300);u.position.z=70;const f=new RR({alpha:!0,antialias:!0});f.setPixelRatio(Math.min(window.devicePixelRatio,2)),f.setSize(i,r),f.setClearAlpha(0),f.domElement.className="three-dots-layer",e.appendChild(f.domElement);const h=84,p=56,m=1.6,g=new Float32Array(h*p*3),_=new Float32Array(h*p*3);let x=0;for(let z=0;z<p;z+=1)for(let O=0;O<h;O+=1){const k=(O-h/2)*m,w=(z-p/2)*m;g[x]=k,_[x]=k,g[x+1]=w,_[x+1]=w,g[x+2]=0,_[x+2]=0,x+=3}const M=new ya;M.setAttribute("position",new Ai(g,3));const b=getComputedStyle(document.documentElement).getPropertyValue("--color-accent-2").trim()||"#4cc9f0",S=new ax({color:new wt(b),size:.12,transparent:!0,opacity:.22}),v=new Fb(M,S);v.rotation.x=-.26,l.add(v);const P=new Xb;let U=0;const D=()=>{const z=P.getElapsedTime(),O=M.getAttribute("position");for(let k=0;k<h*p;k+=1){const w=k*3,C=_[w],F=_[w+1];O.array[w+2]=Math.sin(C*.22+z*.8)*.65+Math.cos(F*.23+z*.63)*.55}O.needsUpdate=!0,f.render(l,u),U=window.requestAnimationFrame(D)},H=()=>{const z=e.clientWidth,O=e.clientHeight;u.aspect=z/O,u.updateProjectionMatrix(),f.setSize(z,O)};return D(),window.addEventListener("resize",H),()=>{window.removeEventListener("resize",H),window.cancelAnimationFrame(U),M.dispose(),S.dispose(),f.dispose(),e.removeChild(f.domElement)}},[]),Z.jsxs(Z.Fragment,{children:[Z.jsx("div",{className:"pointer-events-none fixed inset-0 -z-10 fancy-gradient"}),Z.jsx("div",{className:"pointer-events-none fixed inset-0 -z-10 overflow-hidden",children:CR.map((e,i)=>Z.jsx("span",{className:"particle",style:{left:e.left,top:e.top,width:`${e.size}px`,height:`${e.size}px`,animationDuration:`${e.duration}s`,animationDelay:`${e.delay}s`}},`${e.left}-${i}`))}),Z.jsx("div",{ref:s,className:"pointer-events-none fixed inset-0 -z-[9]"})]})}function DR(){return Z.jsx("div",{className:"fixed inset-0 z-[120] flex items-center justify-center fancy-gradient",children:Z.jsxs("div",{className:"flex flex-col items-center gap-6",children:[Z.jsx("div",{className:"h-16 w-16 animate-spin rounded-full border-2 border-accent/40 border-t-accent2"}),Z.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.45em] text-text/85",children:"Loading"})]})})}var fx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c0=Bi.createContext&&Bi.createContext(fx),UR=["attr","size","title"];function LR(s,e){if(s==null)return{};var i,r,l=NR(s,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(s);for(r=0;r<u.length;r++)i=u[r],e.indexOf(i)===-1&&{}.propertyIsEnumerable.call(s,i)&&(l[i]=s[i])}return l}function NR(s,e){if(s==null)return{};var i={};for(var r in s)if({}.hasOwnProperty.call(s,r)){if(e.indexOf(r)!==-1)continue;i[r]=s[r]}return i}function Ju(){return Ju=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)({}).hasOwnProperty.call(i,r)&&(s[r]=i[r])}return s},Ju.apply(null,arguments)}function f0(s,e){var i=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(s,l).enumerable})),i.push.apply(i,r)}return i}function $u(s){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?f0(Object(i),!0).forEach(function(r){OR(s,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(i)):f0(Object(i)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(i,r))})}return s}function OR(s,e,i){return(e=PR(e))in s?Object.defineProperty(s,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[e]=i,s}function PR(s){var e=zR(s,"string");return typeof e=="symbol"?e:e+""}function zR(s,e){if(typeof s!="object"||!s)return s;var i=s[Symbol.toPrimitive];if(i!==void 0){var r=i.call(s,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function dx(s){return s&&s.map((e,i)=>Bi.createElement(e.tag,$u({key:i},e.attr),dx(e.child)))}function Hi(s){return e=>Bi.createElement(BR,Ju({attr:$u({},s.attr)},e),dx(s.child))}function BR(s){var e=i=>{var{attr:r,size:l,title:u}=s,f=LR(s,UR),h=l||i.size||"1em",p;return i.className&&(p=i.className),s.className&&(p=(p?p+" ":"")+s.className),Bi.createElement("svg",Ju({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,r,f,{className:p,style:$u($u({color:s.color||i.color},i.style),s.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),u&&Bi.createElement("title",null,u),s.children)};return c0!==void 0?Bi.createElement(c0.Consumer,null,i=>e(i)):e(fx)}function IR(s){return Hi({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(s)}function FR(s){return Hi({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(s)}function HR(s){return Hi({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"},child:[]}]})(s)}function GR(s){return Hi({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(s)}function VR(s){return Hi({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(s)}function hx(s){return Hi({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(s)}function hp(s){return Hi({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(s)}function th(s){return Hi({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"7",y1:"17",x2:"17",y2:"7"},child:[]},{tag:"polyline",attr:{points:"7 7 17 7 17 17"},child:[]}]})(s)}const tn={brand:"MyPortfolio",name:"Purba Saha",location:"India",role:"AI/ML and Data Science Enthusiast",intro:"Transforming complex datasets into actionable insights through AI/ML expertise. Passionate about data science, predictive modeling, and building intelligent solutions.",about:"I am a Computer Science Engineering student focused on AI/ML and Data Science, passionate about transforming complex datasets into actionable insights.",aboutSecondary:"Currently open to internships and full-time opportunities in data-driven roles.",email:"purbasahasince2005@gmail.com",phone:"+91 8389991324",github:"https://github.com/Purba234",linkedin:"https://www.linkedin.com/in/purba-saha-b273a12b8/"},d0=[{label:"Home",href:"/"},{label:"About",href:"/about"},{label:"Skills",href:"/skills"},{label:"Projects",href:"/projects"},{label:"Experience",href:"/experience"},{label:"Hackathons",href:"/hackathons"},{label:"Contact",href:"/contact"},{label:"Resume",href:"/resume.pdf",external:!0}],kR=[{title:"Personal Portfolio",description:"A modern portfolio built with React, Framer Motion and Vite.",tech:["React","Framer Motion","AOS","Node.js"],image:"/projects/project-1.svg"},{title:"Customer Shopping Behavior Dashboard",description:"Comprehensive data analytics dashboard analyzing customer shopping patterns, behavior trends, and purchase insights with interactive visualizations and predictive modeling.",tech:["Python","Pandas","Power BI","Data Cleaning","Data Manipulation","Analytics"],image:"/projects/project-2.svg"},{title:"Spotify Music Data Analysis",description:"Power BI dashboard analyzing Spotify Top 50 data, highlighting top artists, popularity distribution, explicit vs non-explicit share, average song duration, ranking trends over time, and album/track patterns through interactive KPI cards and visuals.",tech:["Power BI","DAX","Data Cleaning","Data Transformation","Data Analysis"],image:"/projects/project-3.svg",liveLink:"https://app.powerbi.com/view?r=eyJrIjoiMmEyYjQ2ZTEtZGE2Zi00ZjY1LWIyZjMtODRmZGFiOGI0N2NhIiwidCI6IjgxMzk3MDMwLTk1MDEtNDU0Ni04ZTg5LWY2MDMzMGM2NjAwYyJ9"},{title:"AI QnA Chatbot (RAG-Based)",description:"An intelligent QnA chatbot built using LangChain, Ollama, and GroqCloud API that answers questions from custom documents using Retrieval-Augmented Generation (RAG). It retrieves relevant context and generates accurate responses in real time.",tech:["LangChain","Ollama","Groq API","RAG Pipeline","Python","FAISS / Vector DB"],image:"/projects/project-4.svg"}],XR=[{title:"Power BI Intern - Cognifyz Technologies",period:"Feb 2026 - Present",location:"India - Remote",points:["Working on interactive Power BI dashboards and reports to turn raw datasets into actionable business insights","Performing data cleaning, transformation, and DAX-based analysis to improve reporting quality and decision support"]},{title:"Data Visualization Analyst (Virtual) - Tata Consultancy Services via Forage",period:"Jan 2026",points:["Designed interactive data visualizations and dashboards for executive leadership, enabling data-driven decision making for business insights","Prepared strategic questions and conducted data analysis presentations for C-level stakeholders, demonstrating strong business acumen"]}],WR=[{title:"Smart India Hackathon 2024 - Internal Hackathon",role:"Team Byte Gurus",date:"Aug 2024 - Aug 2024",location:"JIS College of Engineering, August 2024",summary:"Developed a Smart Classroom Management System website using Laravel, focusing on efficient classroom operations, user management, and real-time data handling.",tech:["Laravel","PHP","MySQL"]},{title:"Diversion 2K25",role:"Team ByteGurus",date:"Feb 2025 - Feb 2025",location:"Institute of Engineering and Management, February 2025",summary:"Designed and developed an AI Powered Financial advisory platform designed to help users make informed decisions regarding property investments and financial planning.",tech:["AI","Python","JavaScript"]},{title:"InnovoCon 2025",role:"Organizer",date:"Feb 2025 - Feb 2025",location:"JIS College of Engineering, February 2025",summary:"I played a key role in organizing InnovoCon 2025, overseeing end-to-end planning and execution to ensure the event's overall success.",tech:["Event Management","Leadership"]},{title:"Hack4Bengal 4.0 - Virtual Hack",role:"Team Pookies",date:"Apr 2025 - Apr 2025",location:"Virtual Hackathon, April 2025",summary:"We developed Fakebuster AI during Hack4Bengal 4.0 Virtual Hackathon, an innovative solution designed to detect and combat misinformation and fake content using advanced artificial intelligence techniques.",tech:["AI","Python","JavaScript"]}];function qR(){const[s,e]=J.useState(!1),[i,r]=J.useState(!1),{setTheme:l,resolvedTheme:u}=dE();J.useEffect(()=>{r(!0)},[]);const f=i?u!=="light":!0,h=d0.filter(m=>!m.external),p=d0.filter(m=>m.external);return Z.jsxs("header",{className:"sticky top-4 z-50 px-4 md:px-8",children:[Z.jsxs("nav",{className:"premium-ring mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border border-border bg-card/75 px-4 py-3 shadow-soft backdrop-blur-2xl md:px-6",children:[Z.jsx(Wo,{to:"/",className:"headline-font text-sm font-bold tracking-[0.14em] text-text md:text-base",children:tn.brand}),Z.jsxs("ul",{className:"hidden items-center gap-6 lg:flex",children:[h.map(m=>Z.jsx("li",{children:Z.jsx(ah,{to:m.href,className:({isActive:g})=>`nav-link text-sm font-medium transition-colors hover:text-text ${g?"text-text":"text-muted"} ${g?"is-active":""}`,children:m.label})},m.label)),p.map(m=>Z.jsx("li",{children:Z.jsx("a",{href:m.href,target:"_blank",rel:"noreferrer",className:"text-sm font-medium text-muted transition-colors hover:text-text",children:m.label})},m.label))]}),Z.jsxs("div",{className:"flex items-center gap-2",children:[Z.jsx("button",{type:"button",onClick:()=>l(f?"light":"dark"),className:"inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-soft/55 text-text transition hover:scale-105","aria-label":"Toggle theme",children:f?Z.jsx(FR,{size:18}):Z.jsx(GR,{size:18})}),Z.jsx("button",{type:"button",className:"inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-soft/55 text-text lg:hidden",onClick:()=>e(m=>!m),"aria-label":"Toggle menu","aria-expanded":s,children:s?Z.jsx(IR,{size:18}):Z.jsx(VR,{size:18})})]})]}),s?Z.jsx("div",{className:"mx-auto mt-2 w-full max-w-6xl rounded-2xl border border-border bg-card/90 p-4 shadow-soft backdrop-blur-2xl lg:hidden",children:Z.jsxs("ul",{className:"grid gap-3",children:[h.map(m=>Z.jsx("li",{children:Z.jsx(ah,{to:m.href,className:"block rounded-xl px-3 py-2 text-sm font-medium text-muted transition hover:bg-bg-soft/60 hover:text-text",onClick:()=>e(!1),children:m.label})},m.label)),p.map(m=>Z.jsx("li",{children:Z.jsx("a",{href:m.href,target:"_blank",rel:"noreferrer",className:"block rounded-xl px-3 py-2 text-sm font-medium text-muted transition hover:bg-bg-soft/60 hover:text-text",onClick:()=>e(!1),children:m.label})},m.label))]})}):null]})}function jR(){return Z.jsx("section",{className:"px-4 md:px-8",children:Z.jsxs("div",{className:"mx-auto grid w-full max-w-6xl gap-8 border-b border-border pb-16 md:grid-cols-[0.95fr_1.05fr]",children:[Z.jsxs("div",{children:[Z.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-accent2",children:"About"}),Z.jsx("h2",{className:"headline-font mt-4 text-3xl font-bold text-text md:text-4xl",children:"Engineering with clarity, depth, and intent."})]}),Z.jsxs("div",{className:"space-y-4 border-l border-border pl-0 md:pl-6",children:[Z.jsx("h3",{className:"headline-font text-2xl font-bold text-text",children:tn.name}),Z.jsx("p",{className:"text-sm leading-relaxed text-muted md:text-base",children:tn.about}),Z.jsx("p",{className:"text-sm leading-relaxed text-muted md:text-base",children:tn.aboutSecondary})]})]})})}function YR(){return Z.jsx("section",{className:"px-4 pb-6 md:px-8",children:Z.jsxs("div",{className:"mx-auto w-full max-w-6xl border-b border-border pb-16",children:[Z.jsxs("div",{className:"mb-8",children:[Z.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-accent2",children:"Contact"}),Z.jsx("h2",{className:"headline-font mt-4 text-3xl font-bold text-text md:text-4xl",children:"Let us build something useful together."})]}),Z.jsxs("div",{className:"grid gap-8 md:grid-cols-[0.9fr_1.1fr]",children:[Z.jsxs("div",{className:"space-y-3 text-sm text-muted md:text-base",children:[Z.jsxs("p",{className:"inline-flex items-center gap-2 border border-border px-3 py-2",children:[Z.jsx(hp,{size:15}),tn.email]}),Z.jsxs("p",{className:"inline-flex items-center gap-2 border border-border px-3 py-2",children:[Z.jsx(HR,{size:15}),tn.phone]}),Z.jsxs("p",{className:"inline-flex items-center gap-2 border border-border px-3 py-2",children:[Z.jsx(hx,{size:15}),tn.location]})]}),Z.jsxs("div",{className:"divide-y divide-border border-y border-border",children:[Z.jsxs("a",{href:`mailto:${tn.email}`,className:"flex items-center justify-between py-4 text-text transition hover:pl-2",children:[Z.jsx("span",{children:"Email"}),Z.jsx(th,{size:16})]}),Z.jsxs("a",{href:tn.github,target:"_blank",rel:"noreferrer",className:"flex items-center justify-between py-4 text-text transition hover:pl-2",children:[Z.jsx("span",{children:"GitHub"}),Z.jsx(th,{size:16})]}),Z.jsxs("a",{href:tn.linkedin,target:"_blank",rel:"noreferrer",className:"flex items-center justify-between py-4 text-text transition hover:pl-2",children:[Z.jsx("span",{children:"LinkedIn"}),Z.jsx(th,{size:16})]})]})]})]})})}function ZR(){return Z.jsx("section",{className:"px-4 md:px-8",children:Z.jsxs("div",{className:"mx-auto w-full max-w-6xl border-b border-border pb-16",children:[Z.jsxs("div",{className:"mb-8",children:[Z.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-accent2",children:"Experience"}),Z.jsx("h2",{className:"headline-font mt-4 text-3xl font-bold text-text md:text-4xl",children:"Timeline of hands-on work."})]}),Z.jsx("div",{className:"timeline-track pl-6",children:XR.map(s=>Z.jsxs("article",{className:"timeline-node pb-9 last:pb-0",children:[Z.jsx("p",{className:"font-mono text-xs uppercase tracking-[0.12em] text-accent2",children:s.period}),Z.jsx("h3",{className:"headline-font mt-2 text-xl font-semibold text-text",children:s.title}),s.location?Z.jsx("p",{className:"mt-2 text-sm text-muted",children:s.location}):null,Z.jsx("ul",{className:"mt-4 space-y-3 text-sm leading-relaxed text-muted md:text-base",children:s.points.map(e=>Z.jsx("li",{children:e},e))})]},s.title))})]})})}function px(s){return Hi({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(s)}function mx(s){return Hi({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(s)}function KR(){return Z.jsx("footer",{className:"px-4 pb-8 pt-4 md:px-8 md:pb-10",children:Z.jsxs("div",{className:"mx-auto flex w-full max-w-6xl flex-col items-start gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between",children:[Z.jsxs("div",{className:"flex flex-wrap items-center gap-4 text-sm text-muted",children:[Z.jsxs("a",{href:tn.github,target:"_blank",rel:"noreferrer",className:"nav-link inline-flex items-center gap-2 text-text",children:[Z.jsx(mx,{size:16}),"GitHub"]}),Z.jsxs("a",{href:tn.linkedin,target:"_blank",rel:"noreferrer",className:"nav-link inline-flex items-center gap-2 text-text",children:[Z.jsx(px,{size:16}),"LinkedIn"]}),Z.jsxs("a",{href:`mailto:${tn.email}`,className:"nav-link inline-flex items-center gap-2 text-text",children:[Z.jsx(hp,{size:16}),tn.email]})]}),Z.jsxs("p",{className:"text-xs text-muted",children:[new Date().getFullYear()," ",tn.name,". All rights reserved."]})]})})}function QR(){return Z.jsx("section",{className:"px-4 md:px-8",children:Z.jsxs("div",{className:"mx-auto w-full max-w-6xl border-b border-border pb-16",children:[Z.jsxs("div",{className:"mb-8",children:[Z.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-accent2",children:"Hackathons"}),Z.jsx("h2",{className:"headline-font mt-4 text-3xl font-bold text-text md:text-4xl",children:"Competitive builds and team execution."})]}),Z.jsx("div",{className:"timeline-track pl-6",children:WR.map(s=>Z.jsxs("article",{className:"timeline-node pb-9 last:pb-0",children:[Z.jsx("p",{className:"font-mono text-xs uppercase tracking-[0.12em] text-accent2",children:s.date}),Z.jsx("h3",{className:"headline-font mt-2 text-xl font-semibold text-text",children:s.title}),Z.jsx("p",{className:"mt-2 text-sm text-muted",children:s.role}),Z.jsx("p",{className:"mt-3 text-sm leading-relaxed text-muted md:text-base",children:s.summary}),Z.jsx("p",{className:"mt-4 font-mono text-xs uppercase tracking-[0.08em] text-muted",children:s.tech.join(" / ")})]},s.title))})]})})}function oc(s,e,i,r){return new(i||(i=Promise))((function(l,u){function f(m){try{p(r.next(m))}catch(g){u(g)}}function h(m){try{p(r.throw(m))}catch(g){u(g)}}function p(m){var g;m.done?l(m.value):(g=m.value,g instanceof i?g:new i((function(_){_(g)}))).then(f,h)}p((r=r.apply(s,[])).next())}))}function $a(s,e){var i,r,l,u,f={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return u={next:h(0),throw:h(1),return:h(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function h(p){return function(m){return(function(g){if(i)throw new TypeError("Generator is already executing.");for(;f;)try{if(i=1,r&&(l=2&g[0]?r.return:g[0]?r.throw||((l=r.return)&&l.call(r),0):r.next)&&!(l=l.call(r,g[1])).done)return l;switch(r=0,l&&(g=[2&g[0],l.value]),g[0]){case 0:case 1:l=g;break;case 4:return f.label++,{value:g[1],done:!1};case 5:f.label++,r=g[1],g=[0];continue;case 7:g=f.ops.pop(),f.trys.pop();continue;default:if(l=f.trys,!((l=l.length>0&&l[l.length-1])||g[0]!==6&&g[0]!==2)){f=0;continue}if(g[0]===3&&(!l||g[1]>l[0]&&g[1]<l[3])){f.label=g[1];break}if(g[0]===6&&f.label<l[1]){f.label=l[1],l=g;break}if(l&&f.label<l[2]){f.label=l[2],f.ops.push(g);break}l[2]&&f.ops.pop(),f.trys.pop();continue}g=e.call(s,f)}catch(_){g=[6,_],r=0}finally{i=l=0}if(5&g[0])throw g[1];return{value:g[0]?g[1]:void 0,done:!0}})([p,m])}}}function jh(s){var e=typeof Symbol=="function"&&Symbol.iterator,i=e&&s[e],r=0;if(i)return i.call(s);if(s&&typeof s.length=="number")return{next:function(){return s&&r>=s.length&&(s=void 0),{value:s&&s[r++],done:!s}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ei(s,e){var i=typeof Symbol=="function"&&s[Symbol.iterator];if(!i)return s;var r,l,u=i.call(s),f=[];try{for(;(e===void 0||e-- >0)&&!(r=u.next()).done;)f.push(r.value)}catch(h){l={error:h}}finally{try{r&&!r.done&&(i=u.return)&&i.call(u)}finally{if(l)throw l.error}}return f}function Pi(s,e,i){if(arguments.length===2)for(var r,l=0,u=e.length;l<u;l++)!r&&l in e||(r||(r=Array.prototype.slice.call(e,0,l)),r[l]=e[l]);return s.concat(r||Array.prototype.slice.call(e))}function h0(s,e,i,r,l){for(var u=[],f=5;f<arguments.length;f++)u[f-5]=arguments[f];return oc(this,void 0,void 0,(function(){var h,p,m,g,_,x;return $a(this,(function(M){switch(M.label){case 0:M.trys.push([0,12,13,14]),h=jh(u),p=h.next(),M.label=1;case 1:if(p.done)return[3,11];switch(m=p.value,typeof m){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,JR(s,e,m,i,r,l)];case 3:return M.sent(),[3,10];case 4:return[4,gx(m)];case 5:return M.sent(),[3,10];case 6:return[4,m.apply(void 0,Pi([s,e,i,r,l],Ei(u),!1))];case 7:return M.sent(),[3,10];case 8:return[4,m];case 9:M.sent(),M.label=10;case 10:return p=h.next(),[3,1];case 11:return[3,14];case 12:return g=M.sent(),_={error:g},[3,14];case 13:try{p&&!p.done&&(x=h.return)&&x.call(h)}finally{if(_)throw _.error}return[7];case 14:return[2]}}))}))}function JR(s,e,i,r,l,u){return oc(this,void 0,void 0,(function(){var f,h;return $a(this,(function(p){switch(p.label){case 0:return f=s.textContent||"",h=(function(m,g){var _=Ei(g).slice(0);return Pi(Pi([],Ei(m),!1),[NaN],!1).findIndex((function(x,M){return _[M]!==x}))})(f,i),[4,$R(s,Pi(Pi([],Ei(tC(f,e,h)),!1),Ei(eC(i,e,h)),!1),r,l,u)];case 1:return p.sent(),[2]}}))}))}function gx(s){return oc(this,void 0,void 0,(function(){return $a(this,(function(e){switch(e.label){case 0:return[4,new Promise((function(i){return setTimeout(i,s)}))];case 1:return e.sent(),[2]}}))}))}function $R(s,e,i,r,l){return oc(this,void 0,void 0,(function(){var u,f,h,p,m,g,_,x,M,E,b,S,v;return $a(this,(function(P){switch(P.label){case 0:if(u=e,l){for(f=0,h=1;h<e.length;h++)if(p=Ei([e[h-1],e[h]],2),m=p[0],(g=p[1]).length>m.length||g===""){f=h;break}u=e.slice(f,e.length)}P.label=1;case 1:P.trys.push([1,6,7,8]),_=jh((function(U){var D,H,z,O,k,w,C;return $a(this,(function(F){switch(F.label){case 0:D=function(ue){return $a(this,(function(se){switch(se.label){case 0:return[4,{op:function(ge){return requestAnimationFrame((function(){return ge.textContent=ue}))},opCode:function(ge){var de=ge.textContent||"";return ue===""||de.length>ue.length?"DELETE":"WRITING"}}];case 1:return se.sent(),[2]}}))},F.label=1;case 1:F.trys.push([1,6,7,8]),H=jh(U),z=H.next(),F.label=2;case 2:return z.done?[3,5]:(O=z.value,[5,D(O)]);case 3:F.sent(),F.label=4;case 4:return z=H.next(),[3,2];case 5:return[3,8];case 6:return k=F.sent(),w={error:k},[3,8];case 7:try{z&&!z.done&&(C=H.return)&&C.call(H)}finally{if(w)throw w.error}return[7];case 8:return[2]}}))})(u)),x=_.next(),P.label=2;case 2:return x.done?[3,5]:(M=x.value,E=M.opCode(s)==="WRITING"?i+i*(Math.random()-.5):r+r*(Math.random()-.5),M.op(s),[4,gx(E)]);case 3:P.sent(),P.label=4;case 4:return x=_.next(),[3,2];case 5:return[3,8];case 6:return b=P.sent(),S={error:b},[3,8];case 7:try{x&&!x.done&&(v=_.return)&&v.call(_)}finally{if(S)throw S.error}return[7];case 8:return[2]}}))}))}function eC(s,e,i){var r,l;return i===void 0&&(i=0),$a(this,(function(u){switch(u.label){case 0:r=e(s),l=r.length,u.label=1;case 1:return i<l?[4,r.slice(0,++i).join("")]:[3,3];case 2:return u.sent(),[3,1];case 3:return[2]}}))}function tC(s,e,i){var r,l;return i===void 0&&(i=0),$a(this,(function(u){switch(u.label){case 0:r=e(s),l=r.length,u.label=1;case 1:return l>i?[4,r.slice(0,--l).join("")]:[3,3];case 2:return u.sent(),[3,1];case 3:return[2]}}))}var nC="index-module_type__E-SaG";(function(s,e){e===void 0&&(e={});var i=e.insertAt;if(typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",i==="top"&&r.firstChild?r.insertBefore(l,r.firstChild):r.appendChild(l),l.styleSheet?l.styleSheet.cssText=s:l.appendChild(document.createTextNode(s))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var iC=J.memo(J.forwardRef((function(s,e){var i=s.sequence,r=s.repeat,l=s.className,u=s.speed,f=u===void 0?40:u,h=s.deletionSpeed,p=s.omitDeletionAnimation,m=p!==void 0&&p,g=s.preRenderFirstString,_=g!==void 0&&g,x=s.wrapper,M=x===void 0?"span":x,E=s.splitter,b=E===void 0?function(me){return Pi([],Ei(me),!1)}:E,S=s.cursor,v=S===void 0||S,P=s.style,U=(function(me,N){var $={};for(var xe in me)Object.prototype.hasOwnProperty.call(me,xe)&&N.indexOf(xe)<0&&($[xe]=me[xe]);if(me!=null&&typeof Object.getOwnPropertySymbols=="function"){var q=0;for(xe=Object.getOwnPropertySymbols(me);q<xe.length;q++)N.indexOf(xe[q])<0&&Object.prototype.propertyIsEnumerable.call(me,xe[q])&&($[xe[q]]=me[xe[q]])}return $})(s,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),D=U["aria-label"],H=U["aria-hidden"],z=U.role;h||(h=f);var O=new Array(2).fill(40);[f,h].forEach((function(me,N){switch(typeof me){case"number":O[N]=Math.abs(me-100);break;case"object":var $=me.type,xe=me.value;if(typeof xe!="number")break;$==="keyStrokeDelayInMs"&&(O[N]=xe)}}));var k,w,C,F,ue,se,ge=O[0],de=O[1],B=(function(me,N){N===void 0&&(N=null);var $=J.useRef(N);return J.useEffect((function(){me&&(typeof me=="function"?me($.current):me.current=$.current)}),[me]),$})(e),Q=nC;k=l?"".concat(v?Q+" ":"").concat(l):v?Q:"",w=J.useRef((function(){var me,N=i;r===1/0?me=h0:typeof r=="number"&&(N=Array(1+r).fill(i).flat());var $=me?Pi(Pi([],Ei(N),!1),[me],!1):Pi([],Ei(N),!1);return h0.apply(void 0,Pi([B.current,b,ge,de,m],Ei($),!1)),function(){B.current}})),C=J.useRef(),F=J.useRef(!1),ue=J.useRef(!1),se=Ei(J.useState(0),2)[1],F.current&&(ue.current=!0),J.useEffect((function(){return F.current||(C.current=w.current(),F.current=!0),se((function(me){return me+1})),function(){ue.current&&C.current&&C.current()}}),[]);var K=M,Me=_?i.find((function(me){return typeof me=="string"}))||"":null;return Bi.createElement(K,{"aria-hidden":H,"aria-label":D,role:z,style:P,className:k,children:D?Bi.createElement("span",{"aria-hidden":"true",ref:B,children:Me}):Me,ref:D?void 0:B})})),(function(s,e){return!0}));function aC(){return Z.jsx("section",{id:"hero",className:"px-4 pt-8 md:px-8 md:pt-12",children:Z.jsxs("div",{className:"mx-auto grid w-full max-w-6xl gap-10 border-b border-border pb-16 md:grid-cols-[1.05fr_0.95fr] md:items-start",children:[Z.jsxs("div",{className:"space-y-7 md:pt-4",children:[Z.jsxs("div",{className:"inline-flex items-center gap-2 border border-border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted",children:[Z.jsx("span",{className:"h-2 w-2 rounded-full bg-accent2"}),Z.jsx(hx,{size:13}),tn.location]}),Z.jsx("h1",{className:"headline-font text-4xl font-bold leading-tight text-text sm:text-5xl md:text-6xl",children:Z.jsx(iC,{sequence:[700,"Building practical systems with AI and full-stack engineering."],speed:72,repeat:0,cursor:!0})}),Z.jsx("p",{className:"headline-font text-lg font-medium text-accent2 md:text-xl",children:tn.role}),Z.jsx("p",{className:"max-w-xl text-sm leading-relaxed text-muted md:text-base",children:tn.intro}),Z.jsxs("div",{className:"flex flex-wrap gap-6 text-sm font-semibold uppercase tracking-[0.08em]",children:[Z.jsx(Wo,{to:"/projects",className:"nav-link text-text",children:"View Projects"}),Z.jsx("a",{href:"/projects/Purba_New_cv.pdf",target:"_blank",rel:"noreferrer",className:"nav-link text-text",children:"View Resume"}),Z.jsx(Wo,{to:"/contact",className:"nav-link text-text",children:"Contact Me"})]}),Z.jsxs("div",{className:"flex items-center gap-4",children:[Z.jsx("a",{href:`mailto:${tn.email}`,className:"inline-flex h-11 w-11 items-center justify-center border border-border text-text transition hover:-translate-y-0.5","aria-label":"Send email",children:Z.jsx(hp,{size:18})}),Z.jsx("a",{href:tn.github,target:"_blank",rel:"noreferrer",className:"inline-flex h-11 w-11 items-center justify-center border border-border text-text transition hover:-translate-y-0.5","aria-label":"GitHub",children:Z.jsx(mx,{size:18})}),Z.jsx("a",{href:tn.linkedin,target:"_blank",rel:"noreferrer",className:"inline-flex h-11 w-11 items-center justify-center border border-border text-text transition hover:-translate-y-0.5","aria-label":"LinkedIn",children:Z.jsx(px,{size:18})})]})]}),Z.jsxs("div",{className:"terminal-panel border border-border bg-card px-0 py-0",children:[Z.jsx("div",{className:"border-b border-border px-4 py-2",children:Z.jsx("span",{className:"font-mono text-[11px] uppercase tracking-[0.14em] text-muted",children:"runtime: portfolio-preview.ts"})}),Z.jsx("pre",{className:"overflow-x-auto p-4 font-mono text-xs leading-6 text-text",children:`const profile = {
  focus: ["AI/ML", "cybersecurity", "full-stack"],
  style: "clean architecture",
  goal: "ship useful products"
};

function buildProduct() {
  return solveRealWorldProblems(profile);
}`}),Z.jsx("div",{className:"border-t border-border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-accent2",children:"status: ready"})]})]})})}function rC(){return Z.jsx("section",{className:"px-4 md:px-8",children:Z.jsxs("div",{className:"mx-auto w-full max-w-6xl border-b border-border pb-16",children:[Z.jsxs("div",{className:"mb-8",children:[Z.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-accent2",children:"Projects"}),Z.jsx("h2",{className:"headline-font mt-4 text-3xl font-bold text-text md:text-4xl",children:"Case studies and shipped work."})]}),Z.jsx("div",{className:"divide-y divide-border border-y border-border",children:kR.map(s=>Z.jsxs("article",{className:"py-7 transition duration-200 hover:pl-2",children:[Z.jsx("h3",{className:"headline-font text-2xl font-semibold text-text",children:s.title}),Z.jsx("p",{className:"mt-3 max-w-3xl text-sm leading-relaxed text-muted md:text-base",children:s.description}),Z.jsx("p",{className:"mt-4 font-mono text-xs uppercase tracking-[0.08em] text-muted",children:s.tech.join(" / ")}),Z.jsxs("div",{className:"mt-5 flex flex-wrap gap-6 text-sm font-semibold uppercase tracking-[0.08em]",children:[s.liveLink?Z.jsx("a",{href:s.liveLink,target:"_blank",rel:"noreferrer",className:"nav-link text-text",children:"View Project"}):null,s.githubLink?Z.jsx("a",{href:s.githubLink,target:"_blank",rel:"noreferrer",className:"nav-link text-text",children:"Source Code"}):null]})]},s.title))})]})})}const sC=[{title:"Core AI/ML",items:["LangChain","Ollama","OpenAI","Machine Learning","Predictive Modeling"]},{title:"Data Science",items:["Python","Scikit-learn","Pandas","NumPy","Data Science","Analytics"]},{title:"Data Systems",items:["SQL","Data Visualization","Power BI","DAX","Deployment"]}];function oC(){return Z.jsx("section",{className:"px-4 md:px-8",children:Z.jsxs("div",{className:"mx-auto w-full max-w-6xl border-b border-border pb-16",children:[Z.jsxs("div",{className:"mb-8",children:[Z.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-accent2",children:"Skills"}),Z.jsx("h2",{className:"headline-font mt-4 text-3xl font-bold text-text md:text-4xl",children:"Tooling and systems I use to ship outcomes."})]}),Z.jsx("div",{className:"grid gap-8 md:grid-cols-3",children:sC.map(s=>Z.jsxs("article",{className:"border-t border-border pt-5",children:[Z.jsx("h3",{className:"headline-font text-xl font-semibold text-text",children:s.title}),Z.jsx("ul",{className:"mt-4 space-y-2 text-sm text-muted md:text-base",children:s.items.map(e=>Z.jsxs("li",{className:"flex gap-2",children:[Z.jsx("span",{className:"mt-2 h-1 w-1 shrink-0 rounded-full bg-accent2"}),Z.jsx("span",{children:e})]},e))})]},s.title))})]})})}function lC(){const s=Ci();return J.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[s.pathname]),null}function uC(){const[s,e]=J.useState(!0);return J.useEffect(()=>{const i=window.setTimeout(()=>e(!1),800);return()=>window.clearTimeout(i)},[]),s?Z.jsx(DR,{}):Z.jsxs("div",{className:"relative min-h-screen overflow-x-hidden bg-bg text-text",children:[Z.jsx(lC,{}),Z.jsx(wR,{}),Z.jsxs("div",{className:"relative z-10 pb-2",children:[Z.jsx(qR,{}),Z.jsx("main",{className:"pb-8 pt-4 md:pt-6",children:Z.jsxs(DM,{children:[Z.jsx(ca,{path:"/",element:Z.jsx(aC,{})}),Z.jsx(ca,{path:"/about",element:Z.jsx(jR,{})}),Z.jsx(ca,{path:"/skills",element:Z.jsx(oC,{})}),Z.jsx(ca,{path:"/projects",element:Z.jsx(rC,{})}),Z.jsx(ca,{path:"/experience",element:Z.jsx(ZR,{})}),Z.jsx(ca,{path:"/hackathons",element:Z.jsx(QR,{})}),Z.jsx(ca,{path:"/contact",element:Z.jsx(YR,{})}),Z.jsx(ca,{path:"*",element:Z.jsx(CM,{to:"/",replace:!0})})]})}),Z.jsx(KR,{})]})]})}LS.createRoot(document.getElementById("root")).render(Z.jsx(Bi.StrictMode,{children:Z.jsx(eE,{children:Z.jsx(hE,{attribute:"class",defaultTheme:"dark",enableSystem:!0,children:Z.jsx(uC,{})})})}));
