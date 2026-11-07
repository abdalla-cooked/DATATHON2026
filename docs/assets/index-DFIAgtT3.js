(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Vp={exports:{}},pl={},Wp={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var So=Symbol.for("react.element"),V_=Symbol.for("react.portal"),W_=Symbol.for("react.fragment"),X_=Symbol.for("react.strict_mode"),j_=Symbol.for("react.profiler"),Y_=Symbol.for("react.provider"),q_=Symbol.for("react.context"),$_=Symbol.for("react.forward_ref"),K_=Symbol.for("react.suspense"),Z_=Symbol.for("react.memo"),Q_=Symbol.for("react.lazy"),nd=Symbol.iterator;function J_(t){return t===null||typeof t!="object"?null:(t=nd&&t[nd]||t["@@iterator"],typeof t=="function"?t:null)}var Xp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jp=Object.assign,Yp={};function Ms(t,e,n){this.props=t,this.context=e,this.refs=Yp,this.updater=n||Xp}Ms.prototype.isReactComponent={};Ms.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ms.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function qp(){}qp.prototype=Ms.prototype;function qc(t,e,n){this.props=t,this.context=e,this.refs=Yp,this.updater=n||Xp}var $c=qc.prototype=new qp;$c.constructor=qc;jp($c,Ms.prototype);$c.isPureReactComponent=!0;var id=Array.isArray,$p=Object.prototype.hasOwnProperty,Kc={current:null},Kp={key:!0,ref:!0,__self:!0,__source:!0};function Zp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$p.call(e,i)&&!Kp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:So,type:t,key:s,ref:o,props:r,_owner:Kc.current}}function ev(t,e){return{$$typeof:So,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zc(t){return typeof t=="object"&&t!==null&&t.$$typeof===So}function tv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var rd=/\/+/g;function zl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?tv(""+t.key):e.toString(36)}function Ea(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case So:case V_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+zl(o,0):i,id(r)?(n="",t!=null&&(n=t.replace(rd,"$&/")+"/"),Ea(r,e,n,"",function(u){return u})):r!=null&&(Zc(r)&&(r=ev(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(rd,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",id(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+zl(s,a);o+=Ea(s,e,n,l,r)}else if(l=J_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+zl(s,a++),o+=Ea(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Do(t,e,n){if(t==null)return t;var i=[],r=0;return Ea(t,i,"","",function(s){return e.call(n,s,r++)}),i}function nv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},Ta={transition:null},iv={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Ta,ReactCurrentOwner:Kc};function Qp(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:Do,forEach:function(t,e,n){Do(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Do(t,function(){e++}),e},toArray:function(t){return Do(t,function(e){return e})||[]},only:function(t){if(!Zc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=Ms;We.Fragment=W_;We.Profiler=j_;We.PureComponent=qc;We.StrictMode=X_;We.Suspense=K_;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iv;We.act=Qp;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=jp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Kc.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)$p.call(e,l)&&!Kp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:So,type:t.type,key:r,ref:s,props:i,_owner:o}};We.createContext=function(t){return t={$$typeof:q_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Y_,_context:t},t.Consumer=t};We.createElement=Zp;We.createFactory=function(t){var e=Zp.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:$_,render:t}};We.isValidElement=Zc;We.lazy=function(t){return{$$typeof:Q_,_payload:{_status:-1,_result:t},_init:nv}};We.memo=function(t,e){return{$$typeof:Z_,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=Ta.transition;Ta.transition={};try{t()}finally{Ta.transition=e}};We.unstable_act=Qp;We.useCallback=function(t,e){return qt.current.useCallback(t,e)};We.useContext=function(t){return qt.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};We.useEffect=function(t,e){return qt.current.useEffect(t,e)};We.useId=function(){return qt.current.useId()};We.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return qt.current.useMemo(t,e)};We.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};We.useRef=function(t){return qt.current.useRef(t)};We.useState=function(t){return qt.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return qt.current.useTransition()};We.version="18.3.1";Wp.exports=We;var _n=Wp.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv=_n,sv=Symbol.for("react.element"),ov=Symbol.for("react.fragment"),av=Object.prototype.hasOwnProperty,lv=rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,uv={key:!0,ref:!0,__self:!0,__source:!0};function Jp(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)av.call(e,i)&&!uv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:sv,type:t,key:s,ref:o,props:r,_owner:lv.current}}pl.Fragment=ov;pl.jsx=Jp;pl.jsxs=Jp;Vp.exports=pl;var Ze=Vp.exports,em={exports:{}},hn={},tm={exports:{}},nm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,O){var H=D.length;D.push(O);e:for(;0<H;){var $=H-1>>>1,Z=D[$];if(0<r(Z,O))D[$]=O,D[H]=Z,H=$;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var O=D[0],H=D.pop();if(H!==O){D[0]=H;e:for(var $=0,Z=D.length,X=Z>>>1;$<X;){var K=2*($+1)-1,fe=D[K],ge=K+1,_e=D[ge];if(0>r(fe,H))ge<Z&&0>r(_e,fe)?(D[$]=_e,D[ge]=H,$=ge):(D[$]=fe,D[K]=H,$=K);else if(ge<Z&&0>r(_e,H))D[$]=_e,D[ge]=H,$=ge;else break e}}return O}function r(D,O){var H=D.sortIndex-O.sortIndex;return H!==0?H:D.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,d=null,h=3,m=!1,v=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var O=n(u);O!==null;){if(O.callback===null)i(u);else if(O.startTime<=D)i(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(u)}}function y(D){if(x=!1,g(D),!v)if(n(l)!==null)v=!0,j(C);else{var O=n(u);O!==null&&q(y,O.startTime-D)}}function C(D,O){v=!1,x&&(x=!1,c(I),I=-1),m=!0;var H=h;try{for(g(O),d=n(l);d!==null&&(!(d.expirationTime>O)||D&&!V());){var $=d.callback;if(typeof $=="function"){d.callback=null,h=d.priorityLevel;var Z=$(d.expirationTime<=O);O=t.unstable_now(),typeof Z=="function"?d.callback=Z:d===n(l)&&i(l),g(O)}else i(l);d=n(l)}if(d!==null)var X=!0;else{var K=n(u);K!==null&&q(y,K.startTime-O),X=!1}return X}finally{d=null,h=H,m=!1}}var R=!1,A=null,I=-1,M=5,T=-1;function V(){return!(t.unstable_now()-T<M)}function Y(){if(A!==null){var D=t.unstable_now();T=D;var O=!0;try{O=A(!0,D)}finally{O?se():(R=!1,A=null)}}else R=!1}var se;if(typeof _=="function")se=function(){_(Y)};else if(typeof MessageChannel<"u"){var b=new MessageChannel,z=b.port2;b.port1.onmessage=Y,se=function(){z.postMessage(null)}}else se=function(){p(Y,0)};function j(D){A=D,R||(R=!0,se())}function q(D,O){I=p(function(){D(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,j(C))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var H=h;h=O;try{return D()}finally{h=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,O){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var H=h;h=D;try{return O()}finally{h=H}},t.unstable_scheduleCallback=function(D,O,H){var $=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?$+H:$):H=$,D){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=H+Z,D={id:f++,callback:O,priorityLevel:D,startTime:H,expirationTime:Z,sortIndex:-1},H>$?(D.sortIndex=H,e(u,D),n(l)===null&&D===n(u)&&(x?(c(I),I=-1):x=!0,q(y,H-$))):(D.sortIndex=Z,e(l,D),v||m||(v=!0,j(C))),D},t.unstable_shouldYield=V,t.unstable_wrapCallback=function(D){var O=h;return function(){var H=h;h=O;try{return D.apply(this,arguments)}finally{h=H}}}})(nm);tm.exports=nm;var cv=tm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv=_n,fn=cv;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var im=new Set,to={};function Sr(t,e){fs(t,e),fs(t+"Capture",e)}function fs(t,e){for(to[t]=e,t=0;t<e.length;t++)im.add(e[t])}var ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wu=Object.prototype.hasOwnProperty,dv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sd={},od={};function hv(t){return Wu.call(od,t)?!0:Wu.call(sd,t)?!1:dv.test(t)?od[t]=!0:(sd[t]=!0,!1)}function pv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function mv(t,e,n,i){if(e===null||typeof e>"u"||pv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $t(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Dt[t]=new $t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Dt[e]=new $t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Dt[t]=new $t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Dt[t]=new $t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Dt[t]=new $t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Dt[t]=new $t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Dt[t]=new $t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Dt[t]=new $t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Dt[t]=new $t(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qc=/[\-:]([a-z])/g;function Jc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qc,Jc);Dt[e]=new $t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qc,Jc);Dt[e]=new $t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qc,Jc);Dt[e]=new $t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Dt[t]=new $t(t,1,!1,t.toLowerCase(),null,!1,!1)});Dt.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Dt[t]=new $t(t,1,!1,t.toLowerCase(),null,!0,!0)});function ef(t,e,n,i){var r=Dt.hasOwnProperty(e)?Dt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(mv(e,n,r,i)&&(n=null),i||r===null?hv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var mi=fv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Uo=Symbol.for("react.element"),Vr=Symbol.for("react.portal"),Wr=Symbol.for("react.fragment"),tf=Symbol.for("react.strict_mode"),Xu=Symbol.for("react.profiler"),rm=Symbol.for("react.provider"),sm=Symbol.for("react.context"),nf=Symbol.for("react.forward_ref"),ju=Symbol.for("react.suspense"),Yu=Symbol.for("react.suspense_list"),rf=Symbol.for("react.memo"),Mi=Symbol.for("react.lazy"),om=Symbol.for("react.offscreen"),ad=Symbol.iterator;function Cs(t){return t===null||typeof t!="object"?null:(t=ad&&t[ad]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Object.assign,Bl;function Hs(t){if(Bl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Bl=e&&e[1]||""}return`
`+Bl+t}var Hl=!1;function Gl(t,e){if(!t||Hl)return"";Hl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Hl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Hs(t):""}function gv(t){switch(t.tag){case 5:return Hs(t.type);case 16:return Hs("Lazy");case 13:return Hs("Suspense");case 19:return Hs("SuspenseList");case 0:case 2:case 15:return t=Gl(t.type,!1),t;case 11:return t=Gl(t.type.render,!1),t;case 1:return t=Gl(t.type,!0),t;default:return""}}function qu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Wr:return"Fragment";case Vr:return"Portal";case Xu:return"Profiler";case tf:return"StrictMode";case ju:return"Suspense";case Yu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sm:return(t.displayName||"Context")+".Consumer";case rm:return(t._context.displayName||"Context")+".Provider";case nf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rf:return e=t.displayName||null,e!==null?e:qu(t.type)||"Memo";case Mi:e=t._payload,t=t._init;try{return qu(t(e))}catch{}}return null}function _v(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qu(e);case 8:return e===tf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function am(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function vv(t){var e=am(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function No(t){t._valueTracker||(t._valueTracker=vv(t))}function lm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=am(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ka(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $u(t,e){var n=e.checked;return ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ld(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Gi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function um(t,e){e=e.checked,e!=null&&ef(t,"checked",e,!1)}function Ku(t,e){um(t,e);var n=Gi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Zu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Zu(t,e.type,Gi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ud(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Zu(t,e,n){(e!=="number"||ka(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Gs=Array.isArray;function is(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Gi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Qu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(Gs(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gi(n)}}function cm(t,e){var n=Gi(e.value),i=Gi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function fd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function fm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ju(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?fm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Io,dm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Io=Io||document.createElement("div"),Io.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Io.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function no(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xv=["Webkit","ms","Moz","O"];Object.keys(Xs).forEach(function(t){xv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xs[e]=Xs[t]})});function hm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xs.hasOwnProperty(t)&&Xs[t]?(""+e).trim():e+"px"}function pm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=hm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var yv=ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ec(t,e){if(e){if(yv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function tc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nc=null;function sf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ic=null,rs=null,ss=null;function dd(t){if(t=To(t)){if(typeof ic!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=xl(e),ic(t.stateNode,t.type,e))}}function mm(t){rs?ss?ss.push(t):ss=[t]:rs=t}function gm(){if(rs){var t=rs,e=ss;if(ss=rs=null,dd(t),e)for(t=0;t<e.length;t++)dd(e[t])}}function _m(t,e){return t(e)}function vm(){}var Vl=!1;function xm(t,e,n){if(Vl)return t(e,n);Vl=!0;try{return _m(t,e,n)}finally{Vl=!1,(rs!==null||ss!==null)&&(vm(),gm())}}function io(t,e){var n=t.stateNode;if(n===null)return null;var i=xl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var rc=!1;if(ci)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){rc=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{rc=!1}function Sv(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var js=!1,za=null,Ba=!1,sc=null,Mv={onError:function(t){js=!0,za=t}};function Ev(t,e,n,i,r,s,o,a,l){js=!1,za=null,Sv.apply(Mv,arguments)}function Tv(t,e,n,i,r,s,o,a,l){if(Ev.apply(this,arguments),js){if(js){var u=za;js=!1,za=null}else throw Error(ne(198));Ba||(Ba=!0,sc=u)}}function Mr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ym(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hd(t){if(Mr(t)!==t)throw Error(ne(188))}function wv(t){var e=t.alternate;if(!e){if(e=Mr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return hd(r),t;if(s===i)return hd(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function Sm(t){return t=wv(t),t!==null?Mm(t):null}function Mm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Mm(t);if(e!==null)return e;t=t.sibling}return null}var Em=fn.unstable_scheduleCallback,pd=fn.unstable_cancelCallback,Av=fn.unstable_shouldYield,Rv=fn.unstable_requestPaint,pt=fn.unstable_now,Cv=fn.unstable_getCurrentPriorityLevel,of=fn.unstable_ImmediatePriority,Tm=fn.unstable_UserBlockingPriority,Ha=fn.unstable_NormalPriority,Pv=fn.unstable_LowPriority,wm=fn.unstable_IdlePriority,ml=null,Yn=null;function Lv(t){if(Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot(ml,t,void 0,(t.current.flags&128)===128)}catch{}}var kn=Math.clz32?Math.clz32:Uv,bv=Math.log,Dv=Math.LN2;function Uv(t){return t>>>=0,t===0?32:31-(bv(t)/Dv|0)|0}var Oo=64,Fo=4194304;function Vs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ga(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Vs(a):(s&=o,s!==0&&(i=Vs(s)))}else o=n&~r,o!==0?i=Vs(o):s!==0&&(i=Vs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-kn(e),r=1<<n,i|=t[n],e&=~r;return i}function Nv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Iv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-kn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Nv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function oc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Am(){var t=Oo;return Oo<<=1,!(Oo&4194240)&&(Oo=64),t}function Wl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Mo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-kn(e),t[e]=n}function Ov(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-kn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function af(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-kn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Qe=0;function Rm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Cm,lf,Pm,Lm,bm,ac=!1,ko=[],bi=null,Di=null,Ui=null,ro=new Map,so=new Map,wi=[],Fv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function md(t,e){switch(t){case"focusin":case"focusout":bi=null;break;case"dragenter":case"dragleave":Di=null;break;case"mouseover":case"mouseout":Ui=null;break;case"pointerover":case"pointerout":ro.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":so.delete(e.pointerId)}}function Ls(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=To(e),e!==null&&lf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function kv(t,e,n,i,r){switch(e){case"focusin":return bi=Ls(bi,t,e,n,i,r),!0;case"dragenter":return Di=Ls(Di,t,e,n,i,r),!0;case"mouseover":return Ui=Ls(Ui,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ro.set(s,Ls(ro.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,so.set(s,Ls(so.get(s)||null,t,e,n,i,r)),!0}return!1}function Dm(t){var e=sr(t.target);if(e!==null){var n=Mr(e);if(n!==null){if(e=n.tag,e===13){if(e=ym(n),e!==null){t.blockedOn=e,bm(t.priority,function(){Pm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=lc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);nc=i,n.target.dispatchEvent(i),nc=null}else return e=To(n),e!==null&&lf(e),t.blockedOn=n,!1;e.shift()}return!0}function gd(t,e,n){wa(t)&&n.delete(e)}function zv(){ac=!1,bi!==null&&wa(bi)&&(bi=null),Di!==null&&wa(Di)&&(Di=null),Ui!==null&&wa(Ui)&&(Ui=null),ro.forEach(gd),so.forEach(gd)}function bs(t,e){t.blockedOn===e&&(t.blockedOn=null,ac||(ac=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,zv)))}function oo(t){function e(r){return bs(r,t)}if(0<ko.length){bs(ko[0],t);for(var n=1;n<ko.length;n++){var i=ko[n];i.blockedOn===t&&(i.blockedOn=null)}}for(bi!==null&&bs(bi,t),Di!==null&&bs(Di,t),Ui!==null&&bs(Ui,t),ro.forEach(e),so.forEach(e),n=0;n<wi.length;n++)i=wi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<wi.length&&(n=wi[0],n.blockedOn===null);)Dm(n),n.blockedOn===null&&wi.shift()}var os=mi.ReactCurrentBatchConfig,Va=!0;function Bv(t,e,n,i){var r=Qe,s=os.transition;os.transition=null;try{Qe=1,uf(t,e,n,i)}finally{Qe=r,os.transition=s}}function Hv(t,e,n,i){var r=Qe,s=os.transition;os.transition=null;try{Qe=4,uf(t,e,n,i)}finally{Qe=r,os.transition=s}}function uf(t,e,n,i){if(Va){var r=lc(t,e,n,i);if(r===null)eu(t,e,i,Wa,n),md(t,i);else if(kv(r,t,e,n,i))i.stopPropagation();else if(md(t,i),e&4&&-1<Fv.indexOf(t)){for(;r!==null;){var s=To(r);if(s!==null&&Cm(s),s=lc(t,e,n,i),s===null&&eu(t,e,i,Wa,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else eu(t,e,i,null,n)}}var Wa=null;function lc(t,e,n,i){if(Wa=null,t=sf(i),t=sr(t),t!==null)if(e=Mr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ym(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Wa=t,null}function Um(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cv()){case of:return 1;case Tm:return 4;case Ha:case Pv:return 16;case wm:return 536870912;default:return 16}default:return 16}}var Ri=null,cf=null,Aa=null;function Nm(){if(Aa)return Aa;var t,e=cf,n=e.length,i,r="value"in Ri?Ri.value:Ri.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Aa=r.slice(t,1<i?1-i:void 0)}function Ra(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function zo(){return!0}function _d(){return!1}function pn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zo:_d,this.isPropagationStopped=_d,this}return ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),e}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ff=pn(Es),Eo=ct({},Es,{view:0,detail:0}),Gv=pn(Eo),Xl,jl,Ds,gl=ct({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:df,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ds&&(Ds&&t.type==="mousemove"?(Xl=t.screenX-Ds.screenX,jl=t.screenY-Ds.screenY):jl=Xl=0,Ds=t),Xl)},movementY:function(t){return"movementY"in t?t.movementY:jl}}),vd=pn(gl),Vv=ct({},gl,{dataTransfer:0}),Wv=pn(Vv),Xv=ct({},Eo,{relatedTarget:0}),Yl=pn(Xv),jv=ct({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),Yv=pn(jv),qv=ct({},Es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$v=pn(qv),Kv=ct({},Es,{data:0}),xd=pn(Kv),Zv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function e0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Jv[t])?!!e[t]:!1}function df(){return e0}var t0=ct({},Eo,{key:function(t){if(t.key){var e=Zv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ra(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Qv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:df,charCode:function(t){return t.type==="keypress"?Ra(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ra(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),n0=pn(t0),i0=ct({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yd=pn(i0),r0=ct({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:df}),s0=pn(r0),o0=ct({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),a0=pn(o0),l0=ct({},gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),u0=pn(l0),c0=[9,13,27,32],hf=ci&&"CompositionEvent"in window,Ys=null;ci&&"documentMode"in document&&(Ys=document.documentMode);var f0=ci&&"TextEvent"in window&&!Ys,Im=ci&&(!hf||Ys&&8<Ys&&11>=Ys),Sd=" ",Md=!1;function Om(t,e){switch(t){case"keyup":return c0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xr=!1;function d0(t,e){switch(t){case"compositionend":return Fm(e);case"keypress":return e.which!==32?null:(Md=!0,Sd);case"textInput":return t=e.data,t===Sd&&Md?null:t;default:return null}}function h0(t,e){if(Xr)return t==="compositionend"||!hf&&Om(t,e)?(t=Nm(),Aa=cf=Ri=null,Xr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Im&&e.locale!=="ko"?null:e.data;default:return null}}var p0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ed(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!p0[t.type]:e==="textarea"}function km(t,e,n,i){mm(i),e=Xa(e,"onChange"),0<e.length&&(n=new ff("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var qs=null,ao=null;function m0(t){$m(t,0)}function _l(t){var e=qr(t);if(lm(e))return t}function g0(t,e){if(t==="change")return e}var zm=!1;if(ci){var ql;if(ci){var $l="oninput"in document;if(!$l){var Td=document.createElement("div");Td.setAttribute("oninput","return;"),$l=typeof Td.oninput=="function"}ql=$l}else ql=!1;zm=ql&&(!document.documentMode||9<document.documentMode)}function wd(){qs&&(qs.detachEvent("onpropertychange",Bm),ao=qs=null)}function Bm(t){if(t.propertyName==="value"&&_l(ao)){var e=[];km(e,ao,t,sf(t)),xm(m0,e)}}function _0(t,e,n){t==="focusin"?(wd(),qs=e,ao=n,qs.attachEvent("onpropertychange",Bm)):t==="focusout"&&wd()}function v0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _l(ao)}function x0(t,e){if(t==="click")return _l(e)}function y0(t,e){if(t==="input"||t==="change")return _l(e)}function S0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:S0;function lo(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Wu.call(e,r)||!Hn(t[r],e[r]))return!1}return!0}function Ad(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rd(t,e){var n=Ad(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ad(n)}}function Hm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Gm(){for(var t=window,e=ka();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ka(t.document)}return e}function pf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function M0(t){var e=Gm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hm(n.ownerDocument.documentElement,n)){if(i!==null&&pf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Rd(n,s);var o=Rd(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var E0=ci&&"documentMode"in document&&11>=document.documentMode,jr=null,uc=null,$s=null,cc=!1;function Cd(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cc||jr==null||jr!==ka(i)||(i=jr,"selectionStart"in i&&pf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$s&&lo($s,i)||($s=i,i=Xa(uc,"onSelect"),0<i.length&&(e=new ff("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=jr)))}function Bo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Yr={animationend:Bo("Animation","AnimationEnd"),animationiteration:Bo("Animation","AnimationIteration"),animationstart:Bo("Animation","AnimationStart"),transitionend:Bo("Transition","TransitionEnd")},Kl={},Vm={};ci&&(Vm=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function vl(t){if(Kl[t])return Kl[t];if(!Yr[t])return t;var e=Yr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vm)return Kl[t]=e[n];return t}var Wm=vl("animationend"),Xm=vl("animationiteration"),jm=vl("animationstart"),Ym=vl("transitionend"),qm=new Map,Pd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xi(t,e){qm.set(t,e),Sr(e,[t])}for(var Zl=0;Zl<Pd.length;Zl++){var Ql=Pd[Zl],T0=Ql.toLowerCase(),w0=Ql[0].toUpperCase()+Ql.slice(1);Xi(T0,"on"+w0)}Xi(Wm,"onAnimationEnd");Xi(Xm,"onAnimationIteration");Xi(jm,"onAnimationStart");Xi("dblclick","onDoubleClick");Xi("focusin","onFocus");Xi("focusout","onBlur");Xi(Ym,"onTransitionEnd");fs("onMouseEnter",["mouseout","mouseover"]);fs("onMouseLeave",["mouseout","mouseover"]);fs("onPointerEnter",["pointerout","pointerover"]);fs("onPointerLeave",["pointerout","pointerover"]);Sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),A0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ws));function Ld(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Tv(i,e,void 0,t),t.currentTarget=null}function $m(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Ld(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Ld(r,a,u),s=l}}}if(Ba)throw t=sc,Ba=!1,sc=null,t}function it(t,e){var n=e[mc];n===void 0&&(n=e[mc]=new Set);var i=t+"__bubble";n.has(i)||(Km(e,t,2,!1),n.add(i))}function Jl(t,e,n){var i=0;e&&(i|=4),Km(n,t,i,e)}var Ho="_reactListening"+Math.random().toString(36).slice(2);function uo(t){if(!t[Ho]){t[Ho]=!0,im.forEach(function(n){n!=="selectionchange"&&(A0.has(n)||Jl(n,!1,t),Jl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ho]||(e[Ho]=!0,Jl("selectionchange",!1,e))}}function Km(t,e,n,i){switch(Um(e)){case 1:var r=Bv;break;case 4:r=Hv;break;default:r=uf}n=r.bind(null,e,n,t),r=void 0,!rc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function eu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=sr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}xm(function(){var u=s,f=sf(n),d=[];e:{var h=qm.get(t);if(h!==void 0){var m=ff,v=t;switch(t){case"keypress":if(Ra(n)===0)break e;case"keydown":case"keyup":m=n0;break;case"focusin":v="focus",m=Yl;break;case"focusout":v="blur",m=Yl;break;case"beforeblur":case"afterblur":m=Yl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=vd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=s0;break;case Wm:case Xm:case jm:m=Yv;break;case Ym:m=a0;break;case"scroll":m=Gv;break;case"wheel":m=u0;break;case"copy":case"cut":case"paste":m=$v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=yd}var x=(e&4)!==0,p=!x&&t==="scroll",c=x?h!==null?h+"Capture":null:h;x=[];for(var _=u,g;_!==null;){g=_;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,c!==null&&(y=io(_,c),y!=null&&x.push(co(_,y,g)))),p)break;_=_.return}0<x.length&&(h=new m(h,v,null,n,f),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==nc&&(v=n.relatedTarget||n.fromElement)&&(sr(v)||v[fi]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?sr(v):null,v!==null&&(p=Mr(v),v!==p||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(x=vd,y="onMouseLeave",c="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=yd,y="onPointerLeave",c="onPointerEnter",_="pointer"),p=m==null?h:qr(m),g=v==null?h:qr(v),h=new x(y,_+"leave",m,n,f),h.target=p,h.relatedTarget=g,y=null,sr(f)===u&&(x=new x(c,_+"enter",v,n,f),x.target=g,x.relatedTarget=p,y=x),p=y,m&&v)t:{for(x=m,c=v,_=0,g=x;g;g=Tr(g))_++;for(g=0,y=c;y;y=Tr(y))g++;for(;0<_-g;)x=Tr(x),_--;for(;0<g-_;)c=Tr(c),g--;for(;_--;){if(x===c||c!==null&&x===c.alternate)break t;x=Tr(x),c=Tr(c)}x=null}else x=null;m!==null&&bd(d,h,m,x,!1),v!==null&&p!==null&&bd(d,p,v,x,!0)}}e:{if(h=u?qr(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var C=g0;else if(Ed(h))if(zm)C=y0;else{C=v0;var R=_0}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=x0);if(C&&(C=C(t,u))){km(d,C,n,f);break e}R&&R(t,h,u),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Zu(h,"number",h.value)}switch(R=u?qr(u):window,t){case"focusin":(Ed(R)||R.contentEditable==="true")&&(jr=R,uc=u,$s=null);break;case"focusout":$s=uc=jr=null;break;case"mousedown":cc=!0;break;case"contextmenu":case"mouseup":case"dragend":cc=!1,Cd(d,n,f);break;case"selectionchange":if(E0)break;case"keydown":case"keyup":Cd(d,n,f)}var A;if(hf)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Xr?Om(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Im&&n.locale!=="ko"&&(Xr||I!=="onCompositionStart"?I==="onCompositionEnd"&&Xr&&(A=Nm()):(Ri=f,cf="value"in Ri?Ri.value:Ri.textContent,Xr=!0)),R=Xa(u,I),0<R.length&&(I=new xd(I,t,null,n,f),d.push({event:I,listeners:R}),A?I.data=A:(A=Fm(n),A!==null&&(I.data=A)))),(A=f0?d0(t,n):h0(t,n))&&(u=Xa(u,"onBeforeInput"),0<u.length&&(f=new xd("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=A))}$m(d,e)})}function co(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xa(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=io(t,n),s!=null&&i.unshift(co(t,s,r)),s=io(t,e),s!=null&&i.push(co(t,s,r))),t=t.return}return i}function Tr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bd(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=io(n,s),l!=null&&o.unshift(co(n,l,a))):r||(l=io(n,s),l!=null&&o.push(co(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var R0=/\r\n?/g,C0=/\u0000|\uFFFD/g;function Dd(t){return(typeof t=="string"?t:""+t).replace(R0,`
`).replace(C0,"")}function Go(t,e,n){if(e=Dd(e),Dd(t)!==e&&n)throw Error(ne(425))}function ja(){}var fc=null,dc=null;function hc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var pc=typeof setTimeout=="function"?setTimeout:void 0,P0=typeof clearTimeout=="function"?clearTimeout:void 0,Ud=typeof Promise=="function"?Promise:void 0,L0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ud<"u"?function(t){return Ud.resolve(null).then(t).catch(b0)}:pc;function b0(t){setTimeout(function(){throw t})}function tu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),oo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);oo(e)}function Ni(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Nd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ts=Math.random().toString(36).slice(2),jn="__reactFiber$"+Ts,fo="__reactProps$"+Ts,fi="__reactContainer$"+Ts,mc="__reactEvents$"+Ts,D0="__reactListeners$"+Ts,U0="__reactHandles$"+Ts;function sr(t){var e=t[jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fi]||n[jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Nd(t);t!==null;){if(n=t[jn])return n;t=Nd(t)}return e}t=n,n=t.parentNode}return null}function To(t){return t=t[jn]||t[fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function xl(t){return t[fo]||null}var gc=[],$r=-1;function ji(t){return{current:t}}function st(t){0>$r||(t.current=gc[$r],gc[$r]=null,$r--)}function tt(t,e){$r++,gc[$r]=t.current,t.current=e}var Vi={},zt=ji(Vi),Jt=ji(!1),hr=Vi;function ds(t,e){var n=t.type.contextTypes;if(!n)return Vi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function en(t){return t=t.childContextTypes,t!=null}function Ya(){st(Jt),st(zt)}function Id(t,e,n){if(zt.current!==Vi)throw Error(ne(168));tt(zt,e),tt(Jt,n)}function Zm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,_v(t)||"Unknown",r));return ct({},n,i)}function qa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vi,hr=zt.current,tt(zt,t),tt(Jt,Jt.current),!0}function Od(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=Zm(t,e,hr),i.__reactInternalMemoizedMergedChildContext=t,st(Jt),st(zt),tt(zt,t)):st(Jt),tt(Jt,n)}var ii=null,yl=!1,nu=!1;function Qm(t){ii===null?ii=[t]:ii.push(t)}function N0(t){yl=!0,Qm(t)}function Yi(){if(!nu&&ii!==null){nu=!0;var t=0,e=Qe;try{var n=ii;for(Qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ii=null,yl=!1}catch(r){throw ii!==null&&(ii=ii.slice(t+1)),Em(of,Yi),r}finally{Qe=e,nu=!1}}return null}var Kr=[],Zr=0,$a=null,Ka=0,vn=[],xn=0,pr=null,si=1,oi="";function er(t,e){Kr[Zr++]=Ka,Kr[Zr++]=$a,$a=t,Ka=e}function Jm(t,e,n){vn[xn++]=si,vn[xn++]=oi,vn[xn++]=pr,pr=t;var i=si;t=oi;var r=32-kn(i)-1;i&=~(1<<r),n+=1;var s=32-kn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,si=1<<32-kn(e)+r|n<<r|i,oi=s+t}else si=1<<s|n<<r|i,oi=t}function mf(t){t.return!==null&&(er(t,1),Jm(t,1,0))}function gf(t){for(;t===$a;)$a=Kr[--Zr],Kr[Zr]=null,Ka=Kr[--Zr],Kr[Zr]=null;for(;t===pr;)pr=vn[--xn],vn[xn]=null,oi=vn[--xn],vn[xn]=null,si=vn[--xn],vn[xn]=null}var cn=null,un=null,ot=!1,Nn=null;function eg(t,e){var n=En(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Fd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,cn=t,un=Ni(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,cn=t,un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=pr!==null?{id:si,overflow:oi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=En(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,cn=t,un=null,!0):!1;default:return!1}}function _c(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vc(t){if(ot){var e=un;if(e){var n=e;if(!Fd(t,e)){if(_c(t))throw Error(ne(418));e=Ni(n.nextSibling);var i=cn;e&&Fd(t,e)?eg(i,n):(t.flags=t.flags&-4097|2,ot=!1,cn=t)}}else{if(_c(t))throw Error(ne(418));t.flags=t.flags&-4097|2,ot=!1,cn=t}}}function kd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;cn=t}function Vo(t){if(t!==cn)return!1;if(!ot)return kd(t),ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hc(t.type,t.memoizedProps)),e&&(e=un)){if(_c(t))throw tg(),Error(ne(418));for(;e;)eg(t,e),e=Ni(e.nextSibling)}if(kd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){un=Ni(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}un=null}}else un=cn?Ni(t.stateNode.nextSibling):null;return!0}function tg(){for(var t=un;t;)t=Ni(t.nextSibling)}function hs(){un=cn=null,ot=!1}function _f(t){Nn===null?Nn=[t]:Nn.push(t)}var I0=mi.ReactCurrentBatchConfig;function Us(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function Wo(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function zd(t){var e=t._init;return e(t._payload)}function ng(t){function e(c,_){if(t){var g=c.deletions;g===null?(c.deletions=[_],c.flags|=16):g.push(_)}}function n(c,_){if(!t)return null;for(;_!==null;)e(c,_),_=_.sibling;return null}function i(c,_){for(c=new Map;_!==null;)_.key!==null?c.set(_.key,_):c.set(_.index,_),_=_.sibling;return c}function r(c,_){return c=ki(c,_),c.index=0,c.sibling=null,c}function s(c,_,g){return c.index=g,t?(g=c.alternate,g!==null?(g=g.index,g<_?(c.flags|=2,_):g):(c.flags|=2,_)):(c.flags|=1048576,_)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,_,g,y){return _===null||_.tag!==6?(_=uu(g,c.mode,y),_.return=c,_):(_=r(_,g),_.return=c,_)}function l(c,_,g,y){var C=g.type;return C===Wr?f(c,_,g.props.children,y,g.key):_!==null&&(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Mi&&zd(C)===_.type)?(y=r(_,g.props),y.ref=Us(c,_,g),y.return=c,y):(y=Na(g.type,g.key,g.props,null,c.mode,y),y.ref=Us(c,_,g),y.return=c,y)}function u(c,_,g,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=cu(g,c.mode,y),_.return=c,_):(_=r(_,g.children||[]),_.return=c,_)}function f(c,_,g,y,C){return _===null||_.tag!==7?(_=ur(g,c.mode,y,C),_.return=c,_):(_=r(_,g),_.return=c,_)}function d(c,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=uu(""+_,c.mode,g),_.return=c,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Uo:return g=Na(_.type,_.key,_.props,null,c.mode,g),g.ref=Us(c,null,_),g.return=c,g;case Vr:return _=cu(_,c.mode,g),_.return=c,_;case Mi:var y=_._init;return d(c,y(_._payload),g)}if(Gs(_)||Cs(_))return _=ur(_,c.mode,g,null),_.return=c,_;Wo(c,_)}return null}function h(c,_,g,y){var C=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(c,_,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Uo:return g.key===C?l(c,_,g,y):null;case Vr:return g.key===C?u(c,_,g,y):null;case Mi:return C=g._init,h(c,_,C(g._payload),y)}if(Gs(g)||Cs(g))return C!==null?null:f(c,_,g,y,null);Wo(c,g)}return null}function m(c,_,g,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return c=c.get(g)||null,a(_,c,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Uo:return c=c.get(y.key===null?g:y.key)||null,l(_,c,y,C);case Vr:return c=c.get(y.key===null?g:y.key)||null,u(_,c,y,C);case Mi:var R=y._init;return m(c,_,g,R(y._payload),C)}if(Gs(y)||Cs(y))return c=c.get(g)||null,f(_,c,y,C,null);Wo(_,y)}return null}function v(c,_,g,y){for(var C=null,R=null,A=_,I=_=0,M=null;A!==null&&I<g.length;I++){A.index>I?(M=A,A=null):M=A.sibling;var T=h(c,A,g[I],y);if(T===null){A===null&&(A=M);break}t&&A&&T.alternate===null&&e(c,A),_=s(T,_,I),R===null?C=T:R.sibling=T,R=T,A=M}if(I===g.length)return n(c,A),ot&&er(c,I),C;if(A===null){for(;I<g.length;I++)A=d(c,g[I],y),A!==null&&(_=s(A,_,I),R===null?C=A:R.sibling=A,R=A);return ot&&er(c,I),C}for(A=i(c,A);I<g.length;I++)M=m(A,c,I,g[I],y),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?I:M.key),_=s(M,_,I),R===null?C=M:R.sibling=M,R=M);return t&&A.forEach(function(V){return e(c,V)}),ot&&er(c,I),C}function x(c,_,g,y){var C=Cs(g);if(typeof C!="function")throw Error(ne(150));if(g=C.call(g),g==null)throw Error(ne(151));for(var R=C=null,A=_,I=_=0,M=null,T=g.next();A!==null&&!T.done;I++,T=g.next()){A.index>I?(M=A,A=null):M=A.sibling;var V=h(c,A,T.value,y);if(V===null){A===null&&(A=M);break}t&&A&&V.alternate===null&&e(c,A),_=s(V,_,I),R===null?C=V:R.sibling=V,R=V,A=M}if(T.done)return n(c,A),ot&&er(c,I),C;if(A===null){for(;!T.done;I++,T=g.next())T=d(c,T.value,y),T!==null&&(_=s(T,_,I),R===null?C=T:R.sibling=T,R=T);return ot&&er(c,I),C}for(A=i(c,A);!T.done;I++,T=g.next())T=m(A,c,I,T.value,y),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?I:T.key),_=s(T,_,I),R===null?C=T:R.sibling=T,R=T);return t&&A.forEach(function(Y){return e(c,Y)}),ot&&er(c,I),C}function p(c,_,g,y){if(typeof g=="object"&&g!==null&&g.type===Wr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Uo:e:{for(var C=g.key,R=_;R!==null;){if(R.key===C){if(C=g.type,C===Wr){if(R.tag===7){n(c,R.sibling),_=r(R,g.props.children),_.return=c,c=_;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Mi&&zd(C)===R.type){n(c,R.sibling),_=r(R,g.props),_.ref=Us(c,R,g),_.return=c,c=_;break e}n(c,R);break}else e(c,R);R=R.sibling}g.type===Wr?(_=ur(g.props.children,c.mode,y,g.key),_.return=c,c=_):(y=Na(g.type,g.key,g.props,null,c.mode,y),y.ref=Us(c,_,g),y.return=c,c=y)}return o(c);case Vr:e:{for(R=g.key;_!==null;){if(_.key===R)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(c,_.sibling),_=r(_,g.children||[]),_.return=c,c=_;break e}else{n(c,_);break}else e(c,_);_=_.sibling}_=cu(g,c.mode,y),_.return=c,c=_}return o(c);case Mi:return R=g._init,p(c,_,R(g._payload),y)}if(Gs(g))return v(c,_,g,y);if(Cs(g))return x(c,_,g,y);Wo(c,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(c,_.sibling),_=r(_,g),_.return=c,c=_):(n(c,_),_=uu(g,c.mode,y),_.return=c,c=_),o(c)):n(c,_)}return p}var ps=ng(!0),ig=ng(!1),Za=ji(null),Qa=null,Qr=null,vf=null;function xf(){vf=Qr=Qa=null}function yf(t){var e=Za.current;st(Za),t._currentValue=e}function xc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function as(t,e){Qa=t,vf=Qr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qt=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(vf!==t)if(t={context:t,memoizedValue:e,next:null},Qr===null){if(Qa===null)throw Error(ne(308));Qr=t,Qa.dependencies={lanes:0,firstContext:t}}else Qr=Qr.next=t;return e}var or=null;function Sf(t){or===null?or=[t]:or.push(t)}function rg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Sf(e)):(n.next=r.next,r.next=n),e.interleaved=n,di(t,i)}function di(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ei=!1;function Mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ui(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ii(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,di(t,n)}return r=i.interleaved,r===null?(e.next=e,Sf(i)):(e.next=r.next,r.next=e),i.interleaved=e,di(t,n)}function Ca(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,af(t,n)}}function Bd(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ja(t,e,n,i){var r=t.updateQueue;Ei=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=u=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(h=e,m=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(m,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(m,d,h):v,h==null)break e;d=ct({},d,h);break e;case 2:Ei=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=m,l=d):f=f.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);gr|=o,t.lanes=o,t.memoizedState=d}}function Hd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var wo={},qn=ji(wo),ho=ji(wo),po=ji(wo);function ar(t){if(t===wo)throw Error(ne(174));return t}function Ef(t,e){switch(tt(po,e),tt(ho,t),tt(qn,wo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ju(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ju(e,t)}st(qn),tt(qn,e)}function ms(){st(qn),st(ho),st(po)}function og(t){ar(po.current);var e=ar(qn.current),n=Ju(e,t.type);e!==n&&(tt(ho,t),tt(qn,n))}function Tf(t){ho.current===t&&(st(qn),st(ho))}var lt=ji(0);function el(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var iu=[];function wf(){for(var t=0;t<iu.length;t++)iu[t]._workInProgressVersionPrimary=null;iu.length=0}var Pa=mi.ReactCurrentDispatcher,ru=mi.ReactCurrentBatchConfig,mr=0,ut=null,_t=null,At=null,tl=!1,Ks=!1,mo=0,O0=0;function Nt(){throw Error(ne(321))}function Af(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function Rf(t,e,n,i,r,s){if(mr=s,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pa.current=t===null||t.memoizedState===null?B0:H0,t=n(i,r),Ks){s=0;do{if(Ks=!1,mo=0,25<=s)throw Error(ne(301));s+=1,At=_t=null,e.updateQueue=null,Pa.current=G0,t=n(i,r)}while(Ks)}if(Pa.current=nl,e=_t!==null&&_t.next!==null,mr=0,At=_t=ut=null,tl=!1,e)throw Error(ne(300));return t}function Cf(){var t=mo!==0;return mo=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?ut.memoizedState=At=t:At=At.next=t,At}function Rn(){if(_t===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=_t.next;var e=At===null?ut.memoizedState:At.next;if(e!==null)At=e,_t=t;else{if(t===null)throw Error(ne(310));_t=t,t={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},At===null?ut.memoizedState=At=t:At=At.next=t}return At}function go(t,e){return typeof e=="function"?e(t):e}function su(t){var e=Rn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=_t,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((mr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,ut.lanes|=f,gr|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Hn(i,e.memoizedState)||(Qt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ut.lanes|=s,gr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ou(t){var e=Rn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Hn(s,e.memoizedState)||(Qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function ag(){}function lg(t,e){var n=ut,i=Rn(),r=e(),s=!Hn(i.memoizedState,r);if(s&&(i.memoizedState=r,Qt=!0),i=i.queue,Pf(fg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||At!==null&&At.memoizedState.tag&1){if(n.flags|=2048,_o(9,cg.bind(null,n,i,r,e),void 0,null),Rt===null)throw Error(ne(349));mr&30||ug(n,e,r)}return r}function ug(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function cg(t,e,n,i){e.value=n,e.getSnapshot=i,dg(e)&&hg(t)}function fg(t,e,n){return n(function(){dg(e)&&hg(t)})}function dg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function hg(t){var e=di(t,1);e!==null&&zn(e,t,1,-1)}function Gd(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:t},e.queue=t,t=t.dispatch=z0.bind(null,ut,t),[e.memoizedState,t]}function _o(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function pg(){return Rn().memoizedState}function La(t,e,n,i){var r=Wn();ut.flags|=t,r.memoizedState=_o(1|e,n,void 0,i===void 0?null:i)}function Sl(t,e,n,i){var r=Rn();i=i===void 0?null:i;var s=void 0;if(_t!==null){var o=_t.memoizedState;if(s=o.destroy,i!==null&&Af(i,o.deps)){r.memoizedState=_o(e,n,s,i);return}}ut.flags|=t,r.memoizedState=_o(1|e,n,s,i)}function Vd(t,e){return La(8390656,8,t,e)}function Pf(t,e){return Sl(2048,8,t,e)}function mg(t,e){return Sl(4,2,t,e)}function gg(t,e){return Sl(4,4,t,e)}function _g(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function vg(t,e,n){return n=n!=null?n.concat([t]):null,Sl(4,4,_g.bind(null,e,t),n)}function Lf(){}function xg(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Af(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function yg(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Af(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Sg(t,e,n){return mr&21?(Hn(n,e)||(n=Am(),ut.lanes|=n,gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=n)}function F0(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var i=ru.transition;ru.transition={};try{t(!1),e()}finally{Qe=n,ru.transition=i}}function Mg(){return Rn().memoizedState}function k0(t,e,n){var i=Fi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Eg(t))Tg(e,n);else if(n=rg(t,e,n,i),n!==null){var r=jt();zn(n,t,i,r),wg(n,e,i)}}function z0(t,e,n){var i=Fi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Eg(t))Tg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Hn(a,o)){var l=e.interleaved;l===null?(r.next=r,Sf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=rg(t,e,r,i),n!==null&&(r=jt(),zn(n,t,i,r),wg(n,e,i))}}function Eg(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function Tg(t,e){Ks=tl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function wg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,af(t,n)}}var nl={readContext:An,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},B0={readContext:An,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:Vd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,La(4194308,4,_g.bind(null,e,t),n)},useLayoutEffect:function(t,e){return La(4194308,4,t,e)},useInsertionEffect:function(t,e){return La(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Wn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=k0.bind(null,ut,t),[i.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:Gd,useDebugValue:Lf,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=Gd(!1),e=t[0];return t=F0.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ut,r=Wn();if(ot){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Rt===null)throw Error(ne(349));mr&30||ug(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Vd(fg.bind(null,i,s,t),[t]),i.flags|=2048,_o(9,cg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Wn(),e=Rt.identifierPrefix;if(ot){var n=oi,i=si;n=(i&~(1<<32-kn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=mo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=O0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},H0={readContext:An,useCallback:xg,useContext:An,useEffect:Pf,useImperativeHandle:vg,useInsertionEffect:mg,useLayoutEffect:gg,useMemo:yg,useReducer:su,useRef:pg,useState:function(){return su(go)},useDebugValue:Lf,useDeferredValue:function(t){var e=Rn();return Sg(e,_t.memoizedState,t)},useTransition:function(){var t=su(go)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:ag,useSyncExternalStore:lg,useId:Mg,unstable_isNewReconciler:!1},G0={readContext:An,useCallback:xg,useContext:An,useEffect:Pf,useImperativeHandle:vg,useInsertionEffect:mg,useLayoutEffect:gg,useMemo:yg,useReducer:ou,useRef:pg,useState:function(){return ou(go)},useDebugValue:Lf,useDeferredValue:function(t){var e=Rn();return _t===null?e.memoizedState=t:Sg(e,_t.memoizedState,t)},useTransition:function(){var t=ou(go)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:ag,useSyncExternalStore:lg,useId:Mg,unstable_isNewReconciler:!1};function Dn(t,e){if(t&&t.defaultProps){e=ct({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function yc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ct({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ml={isMounted:function(t){return(t=t._reactInternals)?Mr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=jt(),r=Fi(t),s=ui(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ii(t,s,r),e!==null&&(zn(e,t,r,i),Ca(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=jt(),r=Fi(t),s=ui(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ii(t,s,r),e!==null&&(zn(e,t,r,i),Ca(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),i=Fi(t),r=ui(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ii(t,r,i),e!==null&&(zn(e,t,i,n),Ca(e,t,i))}};function Wd(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!lo(n,i)||!lo(r,s):!0}function Ag(t,e,n){var i=!1,r=Vi,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(r=en(e)?hr:zt.current,i=e.contextTypes,s=(i=i!=null)?ds(t,r):Vi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ml,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Xd(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ml.enqueueReplaceState(e,e.state,null)}function Sc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Mf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=An(s):(s=en(e)?hr:zt.current,r.context=ds(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(yc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ml.enqueueReplaceState(r,r.state,null),Ja(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function gs(t,e){try{var n="",i=e;do n+=gv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function au(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Mc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var V0=typeof WeakMap=="function"?WeakMap:Map;function Rg(t,e,n){n=ui(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){rl||(rl=!0,Dc=i),Mc(t,e)},n}function Cg(t,e,n){n=ui(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Mc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Mc(t,e),typeof i!="function"&&(Oi===null?Oi=new Set([this]):Oi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function jd(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new V0;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=ix.bind(null,t,e,n),e.then(t,t))}function Yd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qd(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ui(-1,1),e.tag=2,Ii(n,e,1))),n.lanes|=1),t)}var W0=mi.ReactCurrentOwner,Qt=!1;function Vt(t,e,n,i){e.child=t===null?ig(e,null,n,i):ps(e,t.child,n,i)}function $d(t,e,n,i,r){n=n.render;var s=e.ref;return as(e,r),i=Rf(t,e,n,i,s,r),n=Cf(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hi(t,e,r)):(ot&&n&&mf(e),e.flags|=1,Vt(t,e,i,r),e.child)}function Kd(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!kf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Pg(t,e,s,i,r)):(t=Na(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:lo,n(o,i)&&t.ref===e.ref)return hi(t,e,r)}return e.flags|=1,t=ki(s,i),t.ref=e.ref,t.return=e,e.child=t}function Pg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(lo(s,i)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Qt=!0);else return e.lanes=t.lanes,hi(t,e,r)}return Ec(t,e,n,i,r)}function Lg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(es,ln),ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,tt(es,ln),ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,tt(es,ln),ln|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,tt(es,ln),ln|=i;return Vt(t,e,r,n),e.child}function bg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ec(t,e,n,i,r){var s=en(n)?hr:zt.current;return s=ds(e,s),as(e,r),n=Rf(t,e,n,i,s,r),i=Cf(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hi(t,e,r)):(ot&&i&&mf(e),e.flags|=1,Vt(t,e,n,r),e.child)}function Zd(t,e,n,i,r){if(en(n)){var s=!0;qa(e)}else s=!1;if(as(e,r),e.stateNode===null)ba(t,e),Ag(e,n,i),Sc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=An(u):(u=en(n)?hr:zt.current,u=ds(e,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Xd(e,o,i,u),Ei=!1;var h=e.memoizedState;o.state=h,Ja(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Jt.current||Ei?(typeof f=="function"&&(yc(e,n,f,i),l=e.memoizedState),(a=Ei||Wd(e,n,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,sg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Dn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=An(l):(l=en(n)?hr:zt.current,l=ds(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Xd(e,o,i,l),Ei=!1,h=e.memoizedState,o.state=h,Ja(e,i,o,r);var v=e.memoizedState;a!==d||h!==v||Jt.current||Ei?(typeof m=="function"&&(yc(e,n,m,i),v=e.memoizedState),(u=Ei||Wd(e,n,u,i,h,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Tc(t,e,n,i,s,r)}function Tc(t,e,n,i,r,s){bg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Od(e,n,!1),hi(t,e,s);i=e.stateNode,W0.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ps(e,t.child,null,s),e.child=ps(e,null,a,s)):Vt(t,e,a,s),e.memoizedState=i.state,r&&Od(e,n,!0),e.child}function Dg(t){var e=t.stateNode;e.pendingContext?Id(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Id(t,e.context,!1),Ef(t,e.containerInfo)}function Qd(t,e,n,i,r){return hs(),_f(r),e.flags|=256,Vt(t,e,n,i),e.child}var wc={dehydrated:null,treeContext:null,retryLane:0};function Ac(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ug(t,e,n){var i=e.pendingProps,r=lt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),tt(lt,r&1),t===null)return vc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wl(o,i,0,null),t=ur(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ac(n),e.memoizedState=wc,t):bf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return X0(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ki(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ki(a,s):(s=ur(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Ac(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=wc,i}return s=t.child,t=s.sibling,i=ki(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function bf(t,e){return e=wl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xo(t,e,n,i){return i!==null&&_f(i),ps(e,t.child,null,n),t=bf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function X0(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=au(Error(ne(422))),Xo(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=wl({mode:"visible",children:i.children},r,0,null),s=ur(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ps(e,t.child,null,o),e.child.memoizedState=Ac(o),e.memoizedState=wc,s);if(!(e.mode&1))return Xo(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=au(s,i,void 0),Xo(t,e,o,i)}if(a=(o&t.childLanes)!==0,Qt||a){if(i=Rt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,di(t,r),zn(i,t,r,-1))}return Ff(),i=au(Error(ne(421))),Xo(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=rx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,un=Ni(r.nextSibling),cn=e,ot=!0,Nn=null,t!==null&&(vn[xn++]=si,vn[xn++]=oi,vn[xn++]=pr,si=t.id,oi=t.overflow,pr=e),e=bf(e,i.children),e.flags|=4096,e)}function Jd(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),xc(t.return,e,n)}function lu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Ng(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Vt(t,e,i.children,n),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jd(t,n,e);else if(t.tag===19)Jd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(tt(lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&el(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),lu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&el(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}lu(e,!0,n,null,s);break;case"together":lu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ba(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function hi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=ki(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ki(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function j0(t,e,n){switch(e.tag){case 3:Dg(e),hs();break;case 5:og(e);break;case 1:en(e.type)&&qa(e);break;case 4:Ef(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;tt(Za,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(tt(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?Ug(t,e,n):(tt(lt,lt.current&1),t=hi(t,e,n),t!==null?t.sibling:null);tt(lt,lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Ng(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),tt(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,Lg(t,e,n)}return hi(t,e,n)}var Ig,Rc,Og,Fg;Ig=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rc=function(){};Og=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ar(qn.current);var s=null;switch(n){case"input":r=$u(t,r),i=$u(t,i),s=[];break;case"select":r=ct({},r,{value:void 0}),i=ct({},i,{value:void 0}),s=[];break;case"textarea":r=Qu(t,r),i=Qu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ja)}ec(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(to.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(to.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&it("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Fg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ns(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function It(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Y0(t,e,n){var i=e.pendingProps;switch(gf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(e),null;case 1:return en(e.type)&&Ya(),It(e),null;case 3:return i=e.stateNode,ms(),st(Jt),st(zt),wf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Vo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Nn!==null&&(Ic(Nn),Nn=null))),Rc(t,e),It(e),null;case 5:Tf(e);var r=ar(po.current);if(n=e.type,t!==null&&e.stateNode!=null)Og(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return It(e),null}if(t=ar(qn.current),Vo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[jn]=e,i[fo]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<Ws.length;r++)it(Ws[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":ld(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":cd(i,s),it("invalid",i)}ec(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Go(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Go(i.textContent,a,t),r=["children",""+a]):to.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&it("scroll",i)}switch(n){case"input":No(i),ud(i,s,!0);break;case"textarea":No(i),fd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ja)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[jn]=e,t[fo]=i,Ig(t,e,!1,!1),e.stateNode=t;e:{switch(o=tc(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ws.length;r++)it(Ws[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":ld(t,i),r=$u(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ct({},i,{value:void 0}),it("invalid",t);break;case"textarea":cd(t,i),r=Qu(t,i),it("invalid",t);break;default:r=i}ec(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?pm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&dm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&no(t,l):typeof l=="number"&&no(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(to.hasOwnProperty(s)?l!=null&&s==="onScroll"&&it("scroll",t):l!=null&&ef(t,s,l,o))}switch(n){case"input":No(t),ud(t,i,!1);break;case"textarea":No(t),fd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Gi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?is(t,!!i.multiple,s,!1):i.defaultValue!=null&&is(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ja)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return It(e),null;case 6:if(t&&e.stateNode!=null)Fg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=ar(po.current),ar(qn.current),Vo(e)){if(i=e.stateNode,n=e.memoizedProps,i[jn]=e,(s=i.nodeValue!==n)&&(t=cn,t!==null))switch(t.tag){case 3:Go(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Go(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[jn]=e,e.stateNode=i}return It(e),null;case 13:if(st(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ot&&un!==null&&e.mode&1&&!(e.flags&128))tg(),hs(),e.flags|=98560,s=!1;else if(s=Vo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[jn]=e}else hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;It(e),s=!1}else Nn!==null&&(Ic(Nn),Nn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?vt===0&&(vt=3):Ff())),e.updateQueue!==null&&(e.flags|=4),It(e),null);case 4:return ms(),Rc(t,e),t===null&&uo(e.stateNode.containerInfo),It(e),null;case 10:return yf(e.type._context),It(e),null;case 17:return en(e.type)&&Ya(),It(e),null;case 19:if(st(lt),s=e.memoizedState,s===null)return It(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ns(s,!1);else{if(vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=el(t),o!==null){for(e.flags|=128,Ns(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return tt(lt,lt.current&1|2),e.child}t=t.sibling}s.tail!==null&&pt()>_s&&(e.flags|=128,i=!0,Ns(s,!1),e.lanes=4194304)}else{if(!i)if(t=el(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ns(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ot)return It(e),null}else 2*pt()-s.renderingStartTime>_s&&n!==1073741824&&(e.flags|=128,i=!0,Ns(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=pt(),e.sibling=null,n=lt.current,tt(lt,i?n&1|2:n&1),e):(It(e),null);case 22:case 23:return Of(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ln&1073741824&&(It(e),e.subtreeFlags&6&&(e.flags|=8192)):It(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function q0(t,e){switch(gf(e),e.tag){case 1:return en(e.type)&&Ya(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ms(),st(Jt),st(zt),wf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Tf(e),null;case 13:if(st(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(lt),null;case 4:return ms(),null;case 10:return yf(e.type._context),null;case 22:case 23:return Of(),null;case 24:return null;default:return null}}var jo=!1,kt=!1,$0=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Jr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){dt(t,e,i)}else n.current=null}function Cc(t,e,n){try{n()}catch(i){dt(t,e,i)}}var eh=!1;function K0(t,e){if(fc=Va,t=Gm(),pf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++f===i&&(l=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(dc={focusedElem:t,selectionRange:n},Va=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,p=v.memoizedState,c=e.stateNode,_=c.getSnapshotBeforeUpdate(e.elementType===e.type?x:Dn(e.type,x),p);c.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(y){dt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return v=eh,eh=!1,v}function Zs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Cc(e,n,s)}r=r.next}while(r!==i)}}function El(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Pc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function kg(t){var e=t.alternate;e!==null&&(t.alternate=null,kg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jn],delete e[fo],delete e[mc],delete e[D0],delete e[U0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function zg(t){return t.tag===5||t.tag===3||t.tag===4}function th(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||zg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ja));else if(i!==4&&(t=t.child,t!==null))for(Lc(t,e,n),t=t.sibling;t!==null;)Lc(t,e,n),t=t.sibling}function bc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(bc(t,e,n),t=t.sibling;t!==null;)bc(t,e,n),t=t.sibling}var Ct=null,Un=!1;function gi(t,e,n){for(n=n.child;n!==null;)Bg(t,e,n),n=n.sibling}function Bg(t,e,n){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount(ml,n)}catch{}switch(n.tag){case 5:kt||Jr(n,e);case 6:var i=Ct,r=Un;Ct=null,gi(t,e,n),Ct=i,Un=r,Ct!==null&&(Un?(t=Ct,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ct.removeChild(n.stateNode));break;case 18:Ct!==null&&(Un?(t=Ct,n=n.stateNode,t.nodeType===8?tu(t.parentNode,n):t.nodeType===1&&tu(t,n),oo(t)):tu(Ct,n.stateNode));break;case 4:i=Ct,r=Un,Ct=n.stateNode.containerInfo,Un=!0,gi(t,e,n),Ct=i,Un=r;break;case 0:case 11:case 14:case 15:if(!kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Cc(n,e,o),r=r.next}while(r!==i)}gi(t,e,n);break;case 1:if(!kt&&(Jr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){dt(n,e,a)}gi(t,e,n);break;case 21:gi(t,e,n);break;case 22:n.mode&1?(kt=(i=kt)||n.memoizedState!==null,gi(t,e,n),kt=i):gi(t,e,n);break;default:gi(t,e,n)}}function nh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $0),e.forEach(function(i){var r=sx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ct=a.stateNode,Un=!1;break e;case 3:Ct=a.stateNode.containerInfo,Un=!0;break e;case 4:Ct=a.stateNode.containerInfo,Un=!0;break e}a=a.return}if(Ct===null)throw Error(ne(160));Bg(s,o,r),Ct=null,Un=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){dt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Hg(e,t),e=e.sibling}function Hg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),Vn(t),i&4){try{Zs(3,t,t.return),El(3,t)}catch(x){dt(t,t.return,x)}try{Zs(5,t,t.return)}catch(x){dt(t,t.return,x)}}break;case 1:Cn(e,t),Vn(t),i&512&&n!==null&&Jr(n,n.return);break;case 5:if(Cn(e,t),Vn(t),i&512&&n!==null&&Jr(n,n.return),t.flags&32){var r=t.stateNode;try{no(r,"")}catch(x){dt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&um(r,s),tc(a,o);var u=tc(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?pm(r,d):f==="dangerouslySetInnerHTML"?dm(r,d):f==="children"?no(r,d):ef(r,f,d,u)}switch(a){case"input":Ku(r,s);break;case"textarea":cm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?is(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?is(r,!!s.multiple,s.defaultValue,!0):is(r,!!s.multiple,s.multiple?[]:"",!1))}r[fo]=s}catch(x){dt(t,t.return,x)}}break;case 6:if(Cn(e,t),Vn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){dt(t,t.return,x)}}break;case 3:if(Cn(e,t),Vn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{oo(e.containerInfo)}catch(x){dt(t,t.return,x)}break;case 4:Cn(e,t),Vn(t);break;case 13:Cn(e,t),Vn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Nf=pt())),i&4&&nh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(kt=(u=kt)||f,Cn(e,t),kt=u):Cn(e,t),Vn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(pe=t,f=t.child;f!==null;){for(d=pe=f;pe!==null;){switch(h=pe,m=h.child,h.tag){case 0:case 11:case 14:case 15:Zs(4,h,h.return);break;case 1:Jr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){dt(i,n,x)}}break;case 5:Jr(h,h.return);break;case 22:if(h.memoizedState!==null){rh(d);continue}}m!==null?(m.return=h,pe=m):rh(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=hm("display",o))}catch(x){dt(t,t.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){dt(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Cn(e,t),Vn(t),i&4&&nh(t);break;case 21:break;default:Cn(e,t),Vn(t)}}function Vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(zg(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(no(r,""),i.flags&=-33);var s=th(t);bc(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=th(t);Lc(t,a,o);break;default:throw Error(ne(161))}}catch(l){dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Z0(t,e,n){pe=t,Gg(t)}function Gg(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||jo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||kt;a=jo;var u=kt;if(jo=o,(kt=l)&&!u)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?sh(r):l!==null?(l.return=o,pe=l):sh(r);for(;s!==null;)pe=s,Gg(s),s=s.sibling;pe=r,jo=a,kt=u}ih(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):ih(t)}}function ih(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:kt||El(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Dn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hd(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&oo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}kt||e.flags&512&&Pc(e)}catch(h){dt(e,e.return,h)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function rh(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function sh(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{El(4,e)}catch(l){dt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){dt(e,r,l)}}var s=e.return;try{Pc(e)}catch(l){dt(e,s,l)}break;case 5:var o=e.return;try{Pc(e)}catch(l){dt(e,o,l)}}}catch(l){dt(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var Q0=Math.ceil,il=mi.ReactCurrentDispatcher,Df=mi.ReactCurrentOwner,Tn=mi.ReactCurrentBatchConfig,qe=0,Rt=null,gt=null,bt=0,ln=0,es=ji(0),vt=0,vo=null,gr=0,Tl=0,Uf=0,Qs=null,Zt=null,Nf=0,_s=1/0,ni=null,rl=!1,Dc=null,Oi=null,Yo=!1,Ci=null,sl=0,Js=0,Uc=null,Da=-1,Ua=0;function jt(){return qe&6?pt():Da!==-1?Da:Da=pt()}function Fi(t){return t.mode&1?qe&2&&bt!==0?bt&-bt:I0.transition!==null?(Ua===0&&(Ua=Am()),Ua):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:Um(t.type)),t):1}function zn(t,e,n,i){if(50<Js)throw Js=0,Uc=null,Error(ne(185));Mo(t,n,i),(!(qe&2)||t!==Rt)&&(t===Rt&&(!(qe&2)&&(Tl|=n),vt===4&&Ai(t,bt)),tn(t,i),n===1&&qe===0&&!(e.mode&1)&&(_s=pt()+500,yl&&Yi()))}function tn(t,e){var n=t.callbackNode;Iv(t,e);var i=Ga(t,t===Rt?bt:0);if(i===0)n!==null&&pd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&pd(n),e===1)t.tag===0?N0(oh.bind(null,t)):Qm(oh.bind(null,t)),L0(function(){!(qe&6)&&Yi()}),n=null;else{switch(Rm(i)){case 1:n=of;break;case 4:n=Tm;break;case 16:n=Ha;break;case 536870912:n=wm;break;default:n=Ha}n=Kg(n,Vg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Vg(t,e){if(Da=-1,Ua=0,qe&6)throw Error(ne(327));var n=t.callbackNode;if(ls()&&t.callbackNode!==n)return null;var i=Ga(t,t===Rt?bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ol(t,i);else{e=i;var r=qe;qe|=2;var s=Xg();(Rt!==t||bt!==e)&&(ni=null,_s=pt()+500,lr(t,e));do try{tx();break}catch(a){Wg(t,a)}while(!0);xf(),il.current=s,qe=r,gt!==null?e=0:(Rt=null,bt=0,e=vt)}if(e!==0){if(e===2&&(r=oc(t),r!==0&&(i=r,e=Nc(t,r))),e===1)throw n=vo,lr(t,0),Ai(t,i),tn(t,pt()),n;if(e===6)Ai(t,i);else{if(r=t.current.alternate,!(i&30)&&!J0(r)&&(e=ol(t,i),e===2&&(s=oc(t),s!==0&&(i=s,e=Nc(t,s))),e===1))throw n=vo,lr(t,0),Ai(t,i),tn(t,pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:tr(t,Zt,ni);break;case 3:if(Ai(t,i),(i&130023424)===i&&(e=Nf+500-pt(),10<e)){if(Ga(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){jt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=pc(tr.bind(null,t,Zt,ni),e);break}tr(t,Zt,ni);break;case 4:if(Ai(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-kn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Q0(i/1960))-i,10<i){t.timeoutHandle=pc(tr.bind(null,t,Zt,ni),i);break}tr(t,Zt,ni);break;case 5:tr(t,Zt,ni);break;default:throw Error(ne(329))}}}return tn(t,pt()),t.callbackNode===n?Vg.bind(null,t):null}function Nc(t,e){var n=Qs;return t.current.memoizedState.isDehydrated&&(lr(t,e).flags|=256),t=ol(t,e),t!==2&&(e=Zt,Zt=n,e!==null&&Ic(e)),t}function Ic(t){Zt===null?Zt=t:Zt.push.apply(Zt,t)}function J0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Hn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ai(t,e){for(e&=~Uf,e&=~Tl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-kn(e),i=1<<n;t[n]=-1,e&=~i}}function oh(t){if(qe&6)throw Error(ne(327));ls();var e=Ga(t,0);if(!(e&1))return tn(t,pt()),null;var n=ol(t,e);if(t.tag!==0&&n===2){var i=oc(t);i!==0&&(e=i,n=Nc(t,i))}if(n===1)throw n=vo,lr(t,0),Ai(t,e),tn(t,pt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,tr(t,Zt,ni),tn(t,pt()),null}function If(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(_s=pt()+500,yl&&Yi())}}function _r(t){Ci!==null&&Ci.tag===0&&!(qe&6)&&ls();var e=qe;qe|=1;var n=Tn.transition,i=Qe;try{if(Tn.transition=null,Qe=1,t)return t()}finally{Qe=i,Tn.transition=n,qe=e,!(qe&6)&&Yi()}}function Of(){ln=es.current,st(es)}function lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,P0(n)),gt!==null)for(n=gt.return;n!==null;){var i=n;switch(gf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ya();break;case 3:ms(),st(Jt),st(zt),wf();break;case 5:Tf(i);break;case 4:ms();break;case 13:st(lt);break;case 19:st(lt);break;case 10:yf(i.type._context);break;case 22:case 23:Of()}n=n.return}if(Rt=t,gt=t=ki(t.current,null),bt=ln=e,vt=0,vo=null,Uf=Tl=gr=0,Zt=Qs=null,or!==null){for(e=0;e<or.length;e++)if(n=or[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}or=null}return t}function Wg(t,e){do{var n=gt;try{if(xf(),Pa.current=nl,tl){for(var i=ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}tl=!1}if(mr=0,At=_t=ut=null,Ks=!1,mo=0,Df.current=null,n===null||n.return===null){vt=1,vo=e,gt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Yd(o);if(m!==null){m.flags&=-257,qd(m,o,a,s,e),m.mode&1&&jd(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){jd(s,u,e),Ff();break e}l=Error(ne(426))}}else if(ot&&a.mode&1){var p=Yd(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),qd(p,o,a,s,e),_f(gs(l,a));break e}}s=l=gs(l,a),vt!==4&&(vt=2),Qs===null?Qs=[s]:Qs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=Rg(s,l,e);Bd(s,c);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Oi===null||!Oi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Cg(s,a,e);Bd(s,y);break e}}s=s.return}while(s!==null)}Yg(n)}catch(C){e=C,gt===n&&n!==null&&(gt=n=n.return);continue}break}while(!0)}function Xg(){var t=il.current;return il.current=nl,t===null?nl:t}function Ff(){(vt===0||vt===3||vt===2)&&(vt=4),Rt===null||!(gr&268435455)&&!(Tl&268435455)||Ai(Rt,bt)}function ol(t,e){var n=qe;qe|=2;var i=Xg();(Rt!==t||bt!==e)&&(ni=null,lr(t,e));do try{ex();break}catch(r){Wg(t,r)}while(!0);if(xf(),qe=n,il.current=i,gt!==null)throw Error(ne(261));return Rt=null,bt=0,vt}function ex(){for(;gt!==null;)jg(gt)}function tx(){for(;gt!==null&&!Av();)jg(gt)}function jg(t){var e=$g(t.alternate,t,ln);t.memoizedProps=t.pendingProps,e===null?Yg(t):gt=e,Df.current=null}function Yg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=q0(n,e),n!==null){n.flags&=32767,gt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{vt=6,gt=null;return}}else if(n=Y0(n,e,ln),n!==null){gt=n;return}if(e=e.sibling,e!==null){gt=e;return}gt=e=t}while(e!==null);vt===0&&(vt=5)}function tr(t,e,n){var i=Qe,r=Tn.transition;try{Tn.transition=null,Qe=1,nx(t,e,n,i)}finally{Tn.transition=r,Qe=i}return null}function nx(t,e,n,i){do ls();while(Ci!==null);if(qe&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ov(t,s),t===Rt&&(gt=Rt=null,bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yo||(Yo=!0,Kg(Ha,function(){return ls(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Tn.transition,Tn.transition=null;var o=Qe;Qe=1;var a=qe;qe|=4,Df.current=null,K0(t,n),Hg(n,t),M0(dc),Va=!!fc,dc=fc=null,t.current=n,Z0(n),Rv(),qe=a,Qe=o,Tn.transition=s}else t.current=n;if(Yo&&(Yo=!1,Ci=t,sl=r),s=t.pendingLanes,s===0&&(Oi=null),Lv(n.stateNode),tn(t,pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(rl)throw rl=!1,t=Dc,Dc=null,t;return sl&1&&t.tag!==0&&ls(),s=t.pendingLanes,s&1?t===Uc?Js++:(Js=0,Uc=t):Js=0,Yi(),null}function ls(){if(Ci!==null){var t=Rm(sl),e=Tn.transition,n=Qe;try{if(Tn.transition=null,Qe=16>t?16:t,Ci===null)var i=!1;else{if(t=Ci,Ci=null,sl=0,qe&6)throw Error(ne(331));var r=qe;for(qe|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(pe=u;pe!==null;){var f=pe;switch(f.tag){case 0:case 11:case 15:Zs(8,f,s)}var d=f.child;if(d!==null)d.return=f,pe=d;else for(;pe!==null;){f=pe;var h=f.sibling,m=f.return;if(kg(f),f===u){pe=null;break}if(h!==null){h.return=m,pe=h;break}pe=m}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Zs(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,pe=c;break e}pe=s.return}}var _=t.current;for(pe=_;pe!==null;){o=pe;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,pe=g;else e:for(o=_;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:El(9,a)}}catch(C){dt(a,a.return,C)}if(a===o){pe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,pe=y;break e}pe=a.return}}if(qe=r,Yi(),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot(ml,t)}catch{}i=!0}return i}finally{Qe=n,Tn.transition=e}}return!1}function ah(t,e,n){e=gs(n,e),e=Rg(t,e,1),t=Ii(t,e,1),e=jt(),t!==null&&(Mo(t,1,e),tn(t,e))}function dt(t,e,n){if(t.tag===3)ah(t,t,n);else for(;e!==null;){if(e.tag===3){ah(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Oi===null||!Oi.has(i))){t=gs(n,t),t=Cg(e,t,1),e=Ii(e,t,1),t=jt(),e!==null&&(Mo(e,1,t),tn(e,t));break}}e=e.return}}function ix(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,Rt===t&&(bt&n)===n&&(vt===4||vt===3&&(bt&130023424)===bt&&500>pt()-Nf?lr(t,0):Uf|=n),tn(t,e)}function qg(t,e){e===0&&(t.mode&1?(e=Fo,Fo<<=1,!(Fo&130023424)&&(Fo=4194304)):e=1);var n=jt();t=di(t,e),t!==null&&(Mo(t,e,n),tn(t,n))}function rx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),qg(t,n)}function sx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),qg(t,n)}var $g;$g=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Jt.current)Qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qt=!1,j0(t,e,n);Qt=!!(t.flags&131072)}else Qt=!1,ot&&e.flags&1048576&&Jm(e,Ka,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ba(t,e),t=e.pendingProps;var r=ds(e,zt.current);as(e,n),r=Rf(null,e,i,t,r,n);var s=Cf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(i)?(s=!0,qa(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Mf(e),r.updater=Ml,e.stateNode=r,r._reactInternals=e,Sc(e,i,t,n),e=Tc(null,e,i,!0,s,n)):(e.tag=0,ot&&s&&mf(e),Vt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ba(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ax(i),t=Dn(i,t),r){case 0:e=Ec(null,e,i,t,n);break e;case 1:e=Zd(null,e,i,t,n);break e;case 11:e=$d(null,e,i,t,n);break e;case 14:e=Kd(null,e,i,Dn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),Ec(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),Zd(t,e,i,r,n);case 3:e:{if(Dg(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,sg(t,e),Ja(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=gs(Error(ne(423)),e),e=Qd(t,e,i,n,r);break e}else if(i!==r){r=gs(Error(ne(424)),e),e=Qd(t,e,i,n,r);break e}else for(un=Ni(e.stateNode.containerInfo.firstChild),cn=e,ot=!0,Nn=null,n=ig(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hs(),i===r){e=hi(t,e,n);break e}Vt(t,e,i,n)}e=e.child}return e;case 5:return og(e),t===null&&vc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,hc(i,r)?o=null:s!==null&&hc(i,s)&&(e.flags|=32),bg(t,e),Vt(t,e,o,n),e.child;case 6:return t===null&&vc(e),null;case 13:return Ug(t,e,n);case 4:return Ef(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ps(e,null,i,n):Vt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),$d(t,e,i,r,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,tt(Za,i._currentValue),i._currentValue=o,s!==null)if(Hn(s.value,o)){if(s.children===r.children&&!Jt.current){e=hi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ui(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),xc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),xc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Vt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,as(e,n),r=An(r),i=i(r),e.flags|=1,Vt(t,e,i,n),e.child;case 14:return i=e.type,r=Dn(i,e.pendingProps),r=Dn(i.type,r),Kd(t,e,i,r,n);case 15:return Pg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),ba(t,e),e.tag=1,en(i)?(t=!0,qa(e)):t=!1,as(e,n),Ag(e,i,r),Sc(e,i,r,n),Tc(null,e,i,!0,t,n);case 19:return Ng(t,e,n);case 22:return Lg(t,e,n)}throw Error(ne(156,e.tag))};function Kg(t,e){return Em(t,e)}function ox(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(t,e,n,i){return new ox(t,e,n,i)}function kf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ax(t){if(typeof t=="function")return kf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nf)return 11;if(t===rf)return 14}return 2}function ki(t,e){var n=t.alternate;return n===null?(n=En(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Na(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")kf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Wr:return ur(n.children,r,s,e);case tf:o=8,r|=8;break;case Xu:return t=En(12,n,e,r|2),t.elementType=Xu,t.lanes=s,t;case ju:return t=En(13,n,e,r),t.elementType=ju,t.lanes=s,t;case Yu:return t=En(19,n,e,r),t.elementType=Yu,t.lanes=s,t;case om:return wl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rm:o=10;break e;case sm:o=9;break e;case nf:o=11;break e;case rf:o=14;break e;case Mi:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=En(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ur(t,e,n,i){return t=En(7,t,i,e),t.lanes=n,t}function wl(t,e,n,i){return t=En(22,t,i,e),t.elementType=om,t.lanes=n,t.stateNode={isHidden:!1},t}function uu(t,e,n){return t=En(6,t,null,e),t.lanes=n,t}function cu(t,e,n){return e=En(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function lx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wl(0),this.expirationTimes=Wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function zf(t,e,n,i,r,s,o,a,l){return t=new lx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=En(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mf(s),t}function ux(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Zg(t){if(!t)return Vi;t=t._reactInternals;e:{if(Mr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(en(n))return Zm(t,n,e)}return e}function Qg(t,e,n,i,r,s,o,a,l){return t=zf(n,i,!0,t,r,s,o,a,l),t.context=Zg(null),n=t.current,i=jt(),r=Fi(n),s=ui(i,r),s.callback=e??null,Ii(n,s,r),t.current.lanes=r,Mo(t,r,i),tn(t,i),t}function Al(t,e,n,i){var r=e.current,s=jt(),o=Fi(r);return n=Zg(n),e.context===null?e.context=n:e.pendingContext=n,e=ui(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ii(r,e,o),t!==null&&(zn(t,r,o,s),Ca(t,r,o)),o}function al(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bf(t,e){lh(t,e),(t=t.alternate)&&lh(t,e)}function cx(){return null}var Jg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hf(t){this._internalRoot=t}Rl.prototype.render=Hf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));Al(t,e,null,null)};Rl.prototype.unmount=Hf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_r(function(){Al(null,t,null,null)}),e[fi]=null}};function Rl(t){this._internalRoot=t}Rl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Lm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<wi.length&&e!==0&&e<wi[n].priority;n++);wi.splice(n,0,t),n===0&&Dm(t)}};function Gf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function uh(){}function fx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=al(o);s.call(u)}}var o=Qg(e,i,t,0,null,!1,!1,"",uh);return t._reactRootContainer=o,t[fi]=o.current,uo(t.nodeType===8?t.parentNode:t),_r(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=al(l);a.call(u)}}var l=zf(t,0,!1,null,null,!1,!1,"",uh);return t._reactRootContainer=l,t[fi]=l.current,uo(t.nodeType===8?t.parentNode:t),_r(function(){Al(e,l,n,i)}),l}function Pl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=al(o);a.call(l)}}Al(e,o,t,r)}else o=fx(n,e,t,r,i);return al(o)}Cm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Vs(e.pendingLanes);n!==0&&(af(e,n|1),tn(e,pt()),!(qe&6)&&(_s=pt()+500,Yi()))}break;case 13:_r(function(){var i=di(t,1);if(i!==null){var r=jt();zn(i,t,1,r)}}),Bf(t,1)}};lf=function(t){if(t.tag===13){var e=di(t,134217728);if(e!==null){var n=jt();zn(e,t,134217728,n)}Bf(t,134217728)}};Pm=function(t){if(t.tag===13){var e=Fi(t),n=di(t,e);if(n!==null){var i=jt();zn(n,t,e,i)}Bf(t,e)}};Lm=function(){return Qe};bm=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};ic=function(t,e,n){switch(e){case"input":if(Ku(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=xl(i);if(!r)throw Error(ne(90));lm(i),Ku(i,r)}}}break;case"textarea":cm(t,n);break;case"select":e=n.value,e!=null&&is(t,!!n.multiple,e,!1)}};_m=If;vm=_r;var dx={usingClientEntryPoint:!1,Events:[To,qr,xl,mm,gm,If]},Is={findFiberByHostInstance:sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hx={bundleType:Is.bundleType,version:Is.version,rendererPackageName:Is.rendererPackageName,rendererConfig:Is.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sm(t),t===null?null:t.stateNode},findFiberByHostInstance:Is.findFiberByHostInstance||cx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qo.isDisabled&&qo.supportsFiber)try{ml=qo.inject(hx),Yn=qo}catch{}}hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dx;hn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gf(e))throw Error(ne(200));return ux(t,e,null,n)};hn.createRoot=function(t,e){if(!Gf(t))throw Error(ne(299));var n=!1,i="",r=Jg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=zf(t,1,!1,null,null,n,!1,i,r),t[fi]=e.current,uo(t.nodeType===8?t.parentNode:t),new Hf(e)};hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=Sm(e),t=t===null?null:t.stateNode,t};hn.flushSync=function(t){return _r(t)};hn.hydrate=function(t,e,n){if(!Cl(e))throw Error(ne(200));return Pl(null,t,e,!0,n)};hn.hydrateRoot=function(t,e,n){if(!Gf(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Jg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Qg(e,null,t,1,n??null,r,!1,s,o),t[fi]=e.current,uo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Rl(e)};hn.render=function(t,e,n){if(!Cl(e))throw Error(ne(200));return Pl(null,t,e,!1,n)};hn.unmountComponentAtNode=function(t){if(!Cl(t))throw Error(ne(40));return t._reactRootContainer?(_r(function(){Pl(null,null,t,!1,function(){t._reactRootContainer=null,t[fi]=null})}),!0):!1};hn.unstable_batchedUpdates=If;hn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Cl(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Pl(t,e,n,!1,i)};hn.version="18.3.1-next-f1338f8080-20240426";function e_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e_)}catch(t){console.error(t)}}e_(),em.exports=hn;var px=em.exports,t_,ch=px;t_=ch.createRoot,ch.hydrateRoot;function mx(){const[t,e]=_n.useState({asteroids:null,metrics:null,approaches:null,error:null});return _n.useEffect(()=>{const n=i=>fetch(`data/${i}`).then(r=>{if(!r.ok)throw new Error(`${i}: ${r.status}`);return r.json()});Promise.all([n("asteroids.json"),n("metrics.json"),n("approaches.json")]).then(([i,r,s])=>e({asteroids:i,metrics:r,approaches:s,error:null})).catch(i=>e(r=>({...r,error:i})))},[]),t}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vf="160",wr={ROTATE:0,DOLLY:1,PAN:2},Ar={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gx=0,fh=1,_x=2,n_=1,vx=2,ti=3,Wi=0,nn=1,ri=2,zi=0,us=1,dh=2,hh=3,ph=4,xx=5,ir=100,yx=101,Sx=102,mh=103,gh=104,Mx=200,Ex=201,Tx=202,wx=203,Oc=204,Fc=205,Ax=206,Rx=207,Cx=208,Px=209,Lx=210,bx=211,Dx=212,Ux=213,Nx=214,Ix=0,Ox=1,Fx=2,ll=3,kx=4,zx=5,Bx=6,Hx=7,i_=0,Gx=1,Vx=2,Bi=0,Wx=1,Xx=2,jx=3,Yx=4,qx=5,$x=6,r_=300,vs=301,xs=302,kc=303,zc=304,Ll=306,Bc=1e3,On=1001,Hc=1002,Wt=1003,_h=1004,fu=1005,yn=1006,Kx=1007,xo=1008,Hi=1009,Zx=1010,Qx=1011,Wf=1012,s_=1013,Pi=1014,Li=1015,yo=1016,o_=1017,a_=1018,cr=1020,Jx=1021,Fn=1023,ey=1024,ty=1025,fr=1026,ys=1027,ny=1028,l_=1029,iy=1030,u_=1031,c_=1033,du=33776,hu=33777,pu=33778,mu=33779,vh=35840,xh=35841,yh=35842,Sh=35843,f_=36196,Mh=37492,Eh=37496,Th=37808,wh=37809,Ah=37810,Rh=37811,Ch=37812,Ph=37813,Lh=37814,bh=37815,Dh=37816,Uh=37817,Nh=37818,Ih=37819,Oh=37820,Fh=37821,gu=36492,kh=36494,zh=36495,ry=36283,Bh=36284,Hh=36285,Gh=36286,d_=3e3,dr=3001,sy=3200,oy=3201,ay=0,ly=1,Mn="",Pt="srgb",pi="srgb-linear",Xf="display-p3",bl="display-p3-linear",ul="linear",rt="srgb",cl="rec709",fl="p3",Rr=7680,Vh=519,uy=512,cy=513,fy=514,h_=515,dy=516,hy=517,py=518,my=519,Wh=35044,Xh="300 es",Gc=1035,ai=2e3,dl=2001;class Er{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ia=Math.PI/180,Vc=180/Math.PI;function Ao(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Xt(t,e,n){return Math.max(e,Math.min(n,t))}function gy(t,e){return(t%e+e)%e}function _u(t,e,n){return(1-n)*t+n*e}function jh(t){return(t&t-1)===0&&t!==0}function Wc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Os(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Kt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const _y={DEG2RAD:Ia};class ze{constructor(e=0,n=0){ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,l,u){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],d=i[7],h=i[2],m=i[5],v=i[8],x=r[0],p=r[3],c=r[6],_=r[1],g=r[4],y=r[7],C=r[2],R=r[5],A=r[8];return s[0]=o*x+a*_+l*C,s[3]=o*p+a*g+l*R,s[6]=o*c+a*y+l*A,s[1]=u*x+f*_+d*C,s[4]=u*p+f*g+d*R,s[7]=u*c+f*y+d*A,s[2]=h*x+m*_+v*C,s[5]=h*p+m*g+v*R,s[8]=h*c+m*y+v*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=f*o-a*u,h=a*l-f*s,m=u*s-o*l,v=n*d+i*h+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=d*x,e[1]=(r*u-f*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=m*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(vu.makeScale(e,n)),this}rotate(e){return this.premultiply(vu.makeRotation(-e)),this}translate(e,n){return this.premultiply(vu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vu=new Ge;function p_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function hl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function vy(){const t=hl("canvas");return t.style.display="block",t}const Yh={};function eo(t){t in Yh||(Yh[t]=!0,console.warn(t))}const qh=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$h=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$o={[pi]:{transfer:ul,primaries:cl,toReference:t=>t,fromReference:t=>t},[Pt]:{transfer:rt,primaries:cl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[bl]:{transfer:ul,primaries:fl,toReference:t=>t.applyMatrix3($h),fromReference:t=>t.applyMatrix3(qh)},[Xf]:{transfer:rt,primaries:fl,toReference:t=>t.convertSRGBToLinear().applyMatrix3($h),fromReference:t=>t.applyMatrix3(qh).convertLinearToSRGB()}},xy=new Set([pi,bl]),Je={enabled:!0,_workingColorSpace:pi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!xy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=$o[e].toReference,r=$o[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return $o[t].primaries},getTransfer:function(t){return t===Mn?ul:$o[t].transfer}};function cs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function xu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Cr;class m_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Cr===void 0&&(Cr=hl("canvas")),Cr.width=e.width,Cr.height=e.height;const i=Cr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Cr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=hl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=cs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(cs(n[i]/255)*255):n[i]=cs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yy=0;class g_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=Ao(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(yu(r[o].image)):s.push(yu(r[o]))}else s=yu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function yu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?m_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sy=0;class rn extends Er{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=On,r=On,s=yn,o=xo,a=Fn,l=Hi,u=rn.DEFAULT_ANISOTROPY,f=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=Ao(),this.name="",this.source=new g_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(eo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===dr?Pt:Mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==r_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bc:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case Hc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bc:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case Hc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return eo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Pt?dr:d_}set encoding(e){eo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===dr?Pt:Mn}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=r_;rn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],d=l[8],h=l[1],m=l[5],v=l[9],x=l[2],p=l[6],c=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-x)<.01&&Math.abs(v-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+x)<.1&&Math.abs(v+p)<.1&&Math.abs(u+m+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,y=(m+1)/2,C=(c+1)/2,R=(f+h)/4,A=(d+x)/4,I=(v+p)/4;return g>y&&g>C?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=R/i,s=A/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=I/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=I/s),this.set(i,r,s,n),this}let _=Math.sqrt((p-v)*(p-v)+(d-x)*(d-x)+(h-f)*(h-f));return Math.abs(_)<.001&&(_=1),this.x=(p-v)/_,this.y=(d-x)/_,this.z=(h-f)/_,this.w=Math.acos((u+m+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class My extends Er{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(eo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===dr?Pt:Mn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new rn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new g_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vr extends My{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class __ extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ey extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],m=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=v,e[n+3]=x;return}if(d!==x||l!==h||u!==m||f!==v){let p=1-a;const c=l*h+u*m+f*v+d*x,_=c>=0?1:-1,g=1-c*c;if(g>Number.EPSILON){const C=Math.sqrt(g),R=Math.atan2(C,c*_);p=Math.sin(p*R)/C,a=Math.sin(a*R)/C}const y=a*_;if(l=l*p+h*y,u=u*p+m*y,f=f*p+v*y,d=d*p+x*y,p===1-a){const C=1/Math.sqrt(l*l+u*u+f*f+d*d);l*=C,u*=C,f*=C,d*=C}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],d=s[o],h=s[o+1],m=s[o+2],v=s[o+3];return e[n]=a*v+f*d+l*m-u*h,e[n+1]=l*v+f*h+u*d-a*m,e[n+2]=u*v+f*m+a*h-l*d,e[n+3]=f*v-a*d-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*f*d+u*m*v,this._y=u*m*d-h*f*v,this._z=u*f*v+h*m*d,this._w=u*f*d-h*m*v;break;case"YXZ":this._x=h*f*d+u*m*v,this._y=u*m*d-h*f*v,this._z=u*f*v-h*m*d,this._w=u*f*d+h*m*v;break;case"ZXY":this._x=h*f*d-u*m*v,this._y=u*m*d+h*f*v,this._z=u*f*v+h*m*d,this._w=u*f*d-h*m*v;break;case"ZYX":this._x=h*f*d-u*m*v,this._y=u*m*d+h*f*v,this._z=u*f*v-h*m*d,this._w=u*f*d+h*m*v;break;case"YZX":this._x=h*f*d+u*m*v,this._y=u*m*d+h*f*v,this._z=u*f*v-h*m*d,this._w=u*f*d-h*m*v;break;case"XZY":this._x=h*f*d-u*m*v,this._y=u*m*d-h*f*v,this._z=u*f*v+h*m*d,this._w=u*f*d+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),d=Math.sin((1-n)*f)/u,h=Math.sin(n*f)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Kh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Kh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*u+o*d-a*f,this.y=i+l*f+a*u-s*d,this.z=r+l*d+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Su.copy(this).projectOnVector(e),this.sub(Su)}reflect(e){return this.sub(Su.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Su=new U,Kh=new xr;class Ro{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Pn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Pn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Pn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(s,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ko.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ko.copy(i.boundingBox)),Ko.applyMatrix4(e.matrixWorld),this.union(Ko)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),Zo.subVectors(this.max,Fs),Pr.subVectors(e.a,Fs),Lr.subVectors(e.b,Fs),br.subVectors(e.c,Fs),_i.subVectors(Lr,Pr),vi.subVectors(br,Lr),Ki.subVectors(Pr,br);let n=[0,-_i.z,_i.y,0,-vi.z,vi.y,0,-Ki.z,Ki.y,_i.z,0,-_i.x,vi.z,0,-vi.x,Ki.z,0,-Ki.x,-_i.y,_i.x,0,-vi.y,vi.x,0,-Ki.y,Ki.x,0];return!Mu(n,Pr,Lr,br,Zo)||(n=[1,0,0,0,1,0,0,0,1],!Mu(n,Pr,Lr,br,Zo))?!1:(Qo.crossVectors(_i,vi),n=[Qo.x,Qo.y,Qo.z],Mu(n,Pr,Lr,br,Zo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new U,new U,new U,new U,new U,new U,new U,new U],Pn=new U,Ko=new Ro,Pr=new U,Lr=new U,br=new U,_i=new U,vi=new U,Ki=new U,Fs=new U,Zo=new U,Qo=new U,Zi=new U;function Mu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Zi.fromArray(t,s);const a=r.x*Math.abs(Zi.x)+r.y*Math.abs(Zi.y)+r.z*Math.abs(Zi.z),l=e.dot(Zi),u=n.dot(Zi),f=i.dot(Zi);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const Ty=new Ro,ks=new U,Eu=new U;class Co{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Ty.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const n=ks.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ks,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(Eu)),this.expandByPoint(ks.copy(e.center).sub(Eu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new U,Tu=new U,Jo=new U,xi=new U,wu=new U,ea=new U,Au=new U;class Dl{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Zn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,n),Zn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Tu.copy(e).add(n).multiplyScalar(.5),Jo.copy(n).sub(e).normalize(),xi.copy(this.origin).sub(Tu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Jo),a=xi.dot(this.direction),l=-xi.dot(Jo),u=xi.lengthSq(),f=Math.abs(1-o*o);let d,h,m,v;if(f>0)if(d=o*l-a,h=o*a-l,v=s*f,d>=0)if(h>=-v)if(h<=v){const x=1/f;d*=x,h*=x,m=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+u;else h<=-v?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+u):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Tu).addScaledVector(Jo,h),m}intersectSphere(e,n){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),r=Zn.dot(Zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,n,i,r,s){wu.subVectors(n,e),ea.subVectors(i,e),Au.crossVectors(wu,ea);let o=this.direction.dot(Au),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xi.subVectors(this.origin,e);const l=a*this.direction.dot(ea.crossVectors(xi,ea));if(l<0)return null;const u=a*this.direction.dot(wu.cross(xi));if(u<0||l+u>o)return null;const f=-a*xi.dot(Au);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,n,i,r,s,o,a,l,u,f,d,h,m,v,x,p){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,d,h,m,v,x,p)}set(e,n,i,r,s,o,a,l,u,f,d,h,m,v,x,p){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=d,c[14]=h,c[3]=m,c[7]=v,c[11]=x,c[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Dr.setFromMatrixColumn(e,0).length(),s=1/Dr.setFromMatrixColumn(e,1).length(),o=1/Dr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,m=o*d,v=a*f,x=a*d;n[0]=l*f,n[4]=-l*d,n[8]=u,n[1]=m+v*u,n[5]=h-x*u,n[9]=-a*l,n[2]=x-h*u,n[6]=v+m*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,m=l*d,v=u*f,x=u*d;n[0]=h+x*a,n[4]=v*a-m,n[8]=o*u,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=m*a-v,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,m=l*d,v=u*f,x=u*d;n[0]=h-x*a,n[4]=-o*d,n[8]=v+m*a,n[1]=m+v*a,n[5]=o*f,n[9]=x-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,m=o*d,v=a*f,x=a*d;n[0]=l*f,n[4]=v*u-m,n[8]=h*u+x,n[1]=l*d,n[5]=x*u+h,n[9]=m*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*u,v=a*l,x=a*u;n[0]=l*f,n[4]=x-h*d,n[8]=v*d+m,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=m*d+v,n[10]=h-x*d}else if(e.order==="XZY"){const h=o*l,m=o*u,v=a*l,x=a*u;n[0]=l*f,n[4]=-d,n[8]=u*f,n[1]=h*d+x,n[5]=o*f,n[9]=m*d-v,n[2]=v*d-m,n[6]=a*f,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wy,e,Ay)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),yi.crossVectors(i,on),yi.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),yi.crossVectors(i,on)),yi.normalize(),ta.crossVectors(on,yi),r[0]=yi.x,r[4]=ta.x,r[8]=on.x,r[1]=yi.y,r[5]=ta.y,r[9]=on.y,r[2]=yi.z,r[6]=ta.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],d=i[5],h=i[9],m=i[13],v=i[2],x=i[6],p=i[10],c=i[14],_=i[3],g=i[7],y=i[11],C=i[15],R=r[0],A=r[4],I=r[8],M=r[12],T=r[1],V=r[5],Y=r[9],se=r[13],b=r[2],z=r[6],j=r[10],q=r[14],D=r[3],O=r[7],H=r[11],$=r[15];return s[0]=o*R+a*T+l*b+u*D,s[4]=o*A+a*V+l*z+u*O,s[8]=o*I+a*Y+l*j+u*H,s[12]=o*M+a*se+l*q+u*$,s[1]=f*R+d*T+h*b+m*D,s[5]=f*A+d*V+h*z+m*O,s[9]=f*I+d*Y+h*j+m*H,s[13]=f*M+d*se+h*q+m*$,s[2]=v*R+x*T+p*b+c*D,s[6]=v*A+x*V+p*z+c*O,s[10]=v*I+x*Y+p*j+c*H,s[14]=v*M+x*se+p*q+c*$,s[3]=_*R+g*T+y*b+C*D,s[7]=_*A+g*V+y*z+C*O,s[11]=_*I+g*Y+y*j+C*H,s[15]=_*M+g*se+y*q+C*$,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],d=e[6],h=e[10],m=e[14],v=e[3],x=e[7],p=e[11],c=e[15];return v*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*m-i*l*m)+x*(+n*l*m-n*u*h+s*o*h-r*o*m+r*u*f-s*l*f)+p*(+n*u*d-n*a*m-s*o*d+i*o*m+s*a*f-i*u*f)+c*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=e[9],h=e[10],m=e[11],v=e[12],x=e[13],p=e[14],c=e[15],_=d*p*u-x*h*u+x*l*m-a*p*m-d*l*c+a*h*c,g=v*h*u-f*p*u-v*l*m+o*p*m+f*l*c-o*h*c,y=f*x*u-v*d*u+v*a*m-o*x*m-f*a*c+o*d*c,C=v*d*l-f*x*l-v*a*h+o*x*h+f*a*p-o*d*p,R=n*_+i*g+r*y+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=_*A,e[1]=(x*h*s-d*p*s-x*r*m+i*p*m+d*r*c-i*h*c)*A,e[2]=(a*p*s-x*l*s+x*r*u-i*p*u-a*r*c+i*l*c)*A,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*m-i*l*m)*A,e[4]=g*A,e[5]=(f*p*s-v*h*s+v*r*m-n*p*m-f*r*c+n*h*c)*A,e[6]=(v*l*s-o*p*s-v*r*u+n*p*u+o*r*c-n*l*c)*A,e[7]=(o*h*s-f*l*s+f*r*u-n*h*u-o*r*m+n*l*m)*A,e[8]=y*A,e[9]=(v*d*s-f*x*s-v*i*m+n*x*m+f*i*c-n*d*c)*A,e[10]=(o*x*s-v*a*s+v*i*u-n*x*u-o*i*c+n*a*c)*A,e[11]=(f*a*s-o*d*s-f*i*u+n*d*u+o*i*m-n*a*m)*A,e[12]=C*A,e[13]=(f*x*r-v*d*r+v*i*h-n*x*h-f*i*p+n*d*p)*A,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*p-n*a*p)*A,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,d=a+a,h=s*u,m=s*f,v=s*d,x=o*f,p=o*d,c=a*d,_=l*u,g=l*f,y=l*d,C=i.x,R=i.y,A=i.z;return r[0]=(1-(x+c))*C,r[1]=(m+y)*C,r[2]=(v-g)*C,r[3]=0,r[4]=(m-y)*R,r[5]=(1-(h+c))*R,r[6]=(p+_)*R,r[7]=0,r[8]=(v+g)*A,r[9]=(p-_)*A,r[10]=(1-(h+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Dr.set(r[0],r[1],r[2]).length();const o=Dr.set(r[4],r[5],r[6]).length(),a=Dr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const u=1/s,f=1/o,d=1/a;return Ln.elements[0]*=u,Ln.elements[1]*=u,Ln.elements[2]*=u,Ln.elements[4]*=f,Ln.elements[5]*=f,Ln.elements[6]*=f,Ln.elements[8]*=d,Ln.elements[9]*=d,Ln.elements[10]*=d,n.setFromRotationMatrix(Ln),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ai){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,v;if(a===ai)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===dl)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ai){const l=this.elements,u=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*u,m=(i+r)*f;let v,x;if(a===ai)v=(o+s)*d,x=-2*d;else if(a===dl)v=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Dr=new U,Ln=new xt,wy=new U(0,0,0),Ay=new U(1,1,1),yi=new U,ta=new U,on=new U,Zh=new xt,Qh=new xr;class Ul{constructor(e=0,n=0,i=0,r=Ul.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Zh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Qh.setFromEuler(this),this.setFromQuaternion(Qh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ul.DEFAULT_ORDER="XYZ";class v_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ry=0;const Jh=new U,Ur=new xr,Qn=new xt,na=new U,zs=new U,Cy=new U,Py=new xr,ep=new U(1,0,0),tp=new U(0,1,0),np=new U(0,0,1),Ly={type:"added"},by={type:"removed"};class Yt extends Er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=Ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new U,n=new Ul,i=new xr,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new Ge}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new v_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ur.setFromAxisAngle(e,n),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,n){return Ur.setFromAxisAngle(e,n),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(ep,e)}rotateY(e){return this.rotateOnAxis(tp,e)}rotateZ(e){return this.rotateOnAxis(np,e)}translateOnAxis(e,n){return Jh.copy(e).applyQuaternion(this.quaternion),this.position.add(Jh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ep,e)}translateY(e){return this.translateOnAxis(tp,e)}translateZ(e){return this.translateOnAxis(np,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?na.copy(e):na.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(zs,na,this.up):Qn.lookAt(na,zs,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),Ur.setFromRotationMatrix(Qn),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ly)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(by)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,Cy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,Py,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Yt.DEFAULT_UP=new U(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new U,Jn=new U,Ru=new U,ei=new U,Nr=new U,Ir=new U,ip=new U,Cu=new U,Pu=new U,Lu=new U;let ia=!1;class In{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),bn.subVectors(e,n),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){bn.subVectors(r,n),Jn.subVectors(i,n),Ru.subVectors(e,n);const o=bn.dot(bn),a=bn.dot(Jn),l=bn.dot(Ru),u=Jn.dot(Jn),f=Jn.dot(Ru),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(u*l-a*f)*h,v=(o*f-a*l)*h;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getUV(e,n,i,r,s,o,a,l){return ia===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ia=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(a,ei.z),l)}static isFrontFacing(e,n,i,r){return bn.subVectors(i,n),Jn.subVectors(e,n),bn.cross(Jn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),bn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return In.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ia===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ia=!0),In.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return In.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Nr.subVectors(r,i),Ir.subVectors(s,i),Cu.subVectors(e,i);const l=Nr.dot(Cu),u=Ir.dot(Cu);if(l<=0&&u<=0)return n.copy(i);Pu.subVectors(e,r);const f=Nr.dot(Pu),d=Ir.dot(Pu);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*u;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Nr,o);Lu.subVectors(e,s);const m=Nr.dot(Lu),v=Ir.dot(Lu);if(v>=0&&m<=v)return n.copy(s);const x=m*u-l*v;if(x<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(Ir,a);const p=f*v-m*d;if(p<=0&&d-f>=0&&m-v>=0)return ip.subVectors(s,r),a=(d-f)/(d-f+(m-v)),n.copy(r).addScaledVector(ip,a);const c=1/(p+x+h);return o=x*c,a=h*c,n.copy(i).addScaledVector(Nr,o).addScaledVector(Ir,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const x_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},ra={h:0,s:0,l:0};function bu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ve{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=gy(e,1),n=Xt(n,0,1),i=Xt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=bu(o,s,e+1/3),this.g=bu(o,s,e),this.b=bu(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=Pt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Pt){const i=x_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}copyLinearToSRGB(e){return this.r=xu(e.r),this.g=xu(e.g),this.b=xu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Je.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Xt(Ft.r*255,0,255))*65536+Math.round(Xt(Ft.g*255,0,255))*256+Math.round(Xt(Ft.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(Ft.copy(this),n);const i=Ft.r,r=Ft.g,s=Ft.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(Ft.copy(this),n),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Pt){Je.fromWorkingColorSpace(Ft.copy(this),e);const n=Ft.r,i=Ft.g,r=Ft.b;return e!==Pt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+n,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Si),e.getHSL(ra);const i=_u(Si.h,ra.h,n),r=_u(Si.s,ra.s,n),s=_u(Si.l,ra.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ve;Ve.NAMES=x_;let Dy=0;class ws extends Er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=Ao(),this.name="",this.type="Material",this.blending=us,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oc,this.blendDst=Fc,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ll,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(i.blending=this.blending),this.side!==Wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Oc&&(i.blendSrc=this.blendSrc),this.blendDst!==Fc&&(i.blendDst=this.blendDst),this.blendEquation!==ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ll&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jf extends ws{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=i_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new U,sa=new ze;class wn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Wh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)sa.fromBufferAttribute(this,n),sa.applyMatrix3(e),this.setXY(n,sa.x,sa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyMatrix3(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyMatrix4(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyNormalMatrix(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.transformDirection(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Os(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Os(n,this.array)),n}setX(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Os(n,this.array)),n}setY(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Os(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Os(n,this.array)),n}setW(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array),s=Kt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wh&&(e.usage=this.usage),e}}class y_ extends wn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class S_ extends wn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Bn extends wn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Uy=0;const gn=new xt,Du=new Yt,Or=new U,an=new Ro,Bs=new Ro,wt=new U;class dn extends Er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=Ao(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(p_(e)?S_:y_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,n,i){return gn.makeTranslation(e,n,i),this.applyMatrix4(gn),this}scale(e,n,i){return gn.makeScale(e,n,i),this.applyMatrix4(gn),this}lookAt(e){return Du.lookAt(e),Du.updateMatrix(),this.applyMatrix4(Du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Bn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ro);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];an.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Co);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(an.min,Bs.min),an.expandByPoint(wt),wt.addVectors(an.max,Bs.max),an.expandByPoint(wt)):(an.expandByPoint(Bs.min),an.expandByPoint(Bs.max))}an.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(wt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)wt.fromBufferAttribute(a,u),l&&(Or.fromBufferAttribute(e,u),wt.add(Or)),r=Math.max(r,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let T=0;T<a;T++)u[T]=new U,f[T]=new U;const d=new U,h=new U,m=new U,v=new ze,x=new ze,p=new ze,c=new U,_=new U;function g(T,V,Y){d.fromArray(r,T*3),h.fromArray(r,V*3),m.fromArray(r,Y*3),v.fromArray(o,T*2),x.fromArray(o,V*2),p.fromArray(o,Y*2),h.sub(d),m.sub(d),x.sub(v),p.sub(v);const se=1/(x.x*p.y-p.x*x.y);isFinite(se)&&(c.copy(h).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(se),_.copy(m).multiplyScalar(x.x).addScaledVector(h,-p.x).multiplyScalar(se),u[T].add(c),u[V].add(c),u[Y].add(c),f[T].add(_),f[V].add(_),f[Y].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let T=0,V=y.length;T<V;++T){const Y=y[T],se=Y.start,b=Y.count;for(let z=se,j=se+b;z<j;z+=3)g(i[z+0],i[z+1],i[z+2])}const C=new U,R=new U,A=new U,I=new U;function M(T){A.fromArray(s,T*3),I.copy(A);const V=u[T];C.copy(V),C.sub(A.multiplyScalar(A.dot(V))).normalize(),R.crossVectors(I,V);const se=R.dot(f[T])<0?-1:1;l[T*4]=C.x,l[T*4+1]=C.y,l[T*4+2]=C.z,l[T*4+3]=se}for(let T=0,V=y.length;T<V;++T){const Y=y[T],se=Y.start,b=Y.count;for(let z=se,j=se+b;z<j;z+=3)M(i[z+0]),M(i[z+1]),M(i[z+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,u=new U,f=new U,d=new U;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,p),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,p),a.add(f),l.add(f),u.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)wt.fromBufferAttribute(e,n),wt.normalize(),e.setXYZ(n,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,d=a.normalized,h=new u.constructor(l.length*f);let m=0,v=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*f;for(let c=0;c<f;c++)h[v++]=u[m++]}return new wn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new dn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,d=u.length;f<d;f++){const h=u[f],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let d=0,h=u.length;d<h;d++){const m=u[d];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],d=s[u];for(let h=0,m=d.length;h<m;h++)f.push(d[h].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rp=new xt,Qi=new Dl,oa=new Co,sp=new U,Fr=new U,kr=new U,zr=new U,Uu=new U,aa=new U,la=new ze,ua=new ze,ca=new ze,op=new U,ap=new U,lp=new U,fa=new U,da=new U;class li extends Yt{constructor(e=new dn,n=new jf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){aa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],d=s[l];f!==0&&(Uu.fromBufferAttribute(d,e),o?aa.addScaledVector(Uu,f):aa.addScaledVector(Uu.sub(n),f))}n.add(aa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(s),Qi.copy(e.ray).recast(e.near),!(oa.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(oa,sp)===null||Qi.origin.distanceToSquared(sp)>(e.far-e.near)**2))&&(rp.copy(s).invert(),Qi.copy(e.ray).applyMatrix4(rp),!(i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Qi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const p=h[v],c=o[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let y=_,C=g;y<C;y+=3){const R=a.getX(y),A=a.getX(y+1),I=a.getX(y+2);r=ha(this,c,e,i,u,f,d,R,A,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=v,c=x;p<c;p+=3){const _=a.getX(p),g=a.getX(p+1),y=a.getX(p+2);r=ha(this,o,e,i,u,f,d,_,g,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const p=h[v],c=o[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=_,C=g;y<C;y+=3){const R=y,A=y+1,I=y+2;r=ha(this,c,e,i,u,f,d,R,A,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=v,c=x;p<c;p+=3){const _=p,g=p+1,y=p+2;r=ha(this,o,e,i,u,f,d,_,g,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function Ny(t,e,n,i,r,s,o,a){let l;if(e.side===nn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Wi,a),l===null)return null;da.copy(a),da.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(da);return u<n.near||u>n.far?null:{distance:u,point:da.clone(),object:t}}function ha(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Fr),t.getVertexPosition(l,kr),t.getVertexPosition(u,zr);const f=Ny(t,e,n,i,Fr,kr,zr,fa);if(f){r&&(la.fromBufferAttribute(r,a),ua.fromBufferAttribute(r,l),ca.fromBufferAttribute(r,u),f.uv=In.getInterpolation(fa,Fr,kr,zr,la,ua,ca,new ze)),s&&(la.fromBufferAttribute(s,a),ua.fromBufferAttribute(s,l),ca.fromBufferAttribute(s,u),f.uv1=In.getInterpolation(fa,Fr,kr,zr,la,ua,ca,new ze),f.uv2=f.uv1),o&&(op.fromBufferAttribute(o,a),ap.fromBufferAttribute(o,l),lp.fromBufferAttribute(o,u),f.normal=In.getInterpolation(fa,Fr,kr,zr,op,ap,lp,new U),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new U,materialIndex:0};In.getNormal(Fr,kr,zr,d.normal),f.face=d}return f}class Po extends dn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],d=[];let h=0,m=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Bn(u,3)),this.setAttribute("normal",new Bn(f,3)),this.setAttribute("uv",new Bn(d,2));function v(x,p,c,_,g,y,C,R,A,I,M){const T=y/A,V=C/I,Y=y/2,se=C/2,b=R/2,z=A+1,j=I+1;let q=0,D=0;const O=new U;for(let H=0;H<j;H++){const $=H*V-se;for(let Z=0;Z<z;Z++){const X=Z*T-Y;O[x]=X*_,O[p]=$*g,O[c]=b,u.push(O.x,O.y,O.z),O[x]=0,O[p]=0,O[c]=R>0?1:-1,f.push(O.x,O.y,O.z),d.push(Z/A),d.push(1-H/I),q+=1}}for(let H=0;H<I;H++)for(let $=0;$<A;$++){const Z=h+$+z*H,X=h+$+z*(H+1),K=h+($+1)+z*(H+1),fe=h+($+1)+z*H;l.push(Z,X,fe),l.push(X,K,fe),D+=6}a.addGroup(m,D,M),m+=D,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ss(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=Ss(t[n]);for(const r in i)e[r]=i[r]}return e}function Iy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function M_(t){return t.getRenderTarget()===null?t.outputColorSpace:Je.workingColorSpace}const Oy={clone:Ss,merge:Gt};var Fy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ky=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends ws{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fy,this.fragmentShader=ky,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=Iy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class E_ extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=ai}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Sn extends E_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Vc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vc*2*Math.atan(Math.tan(Ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ia*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Br=-90,Hr=1;class zy extends Yt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Sn(Br,Hr,e,n);r.layers=this.layers,this.add(r);const s=new Sn(Br,Hr,e,n);s.layers=this.layers,this.add(s);const o=new Sn(Br,Hr,e,n);o.layers=this.layers,this.add(o);const a=new Sn(Br,Hr,e,n);a.layers=this.layers,this.add(a);const l=new Sn(Br,Hr,e,n);l.layers=this.layers,this.add(l);const u=new Sn(Br,Hr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===dl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class T_ extends rn{constructor(e,n,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:vs,super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class By extends vr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(eo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===dr?Pt:Mn),this.texture=new T_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:yn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Po(5,5,5),s=new yr({name:"CubemapFromEquirect",uniforms:Ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:zi});s.uniforms.tEquirect.value=n;const o=new li(r,s),a=n.minFilter;return n.minFilter===xo&&(n.minFilter=yn),new zy(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Nu=new U,Hy=new U,Gy=new Ge;class Ti{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Nu.subVectors(i,n).cross(Hy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Nu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Gy.getNormalMatrix(e),r=this.coplanarPoint(Nu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new Co,pa=new U;class w_{constructor(e=new Ti,n=new Ti,i=new Ti,r=new Ti,s=new Ti,o=new Ti){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ai){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],d=r[6],h=r[7],m=r[8],v=r[9],x=r[10],p=r[11],c=r[12],_=r[13],g=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,p-m,y-c).normalize(),i[1].setComponents(l+s,h+u,p+m,y+c).normalize(),i[2].setComponents(l+o,h+f,p+v,y+_).normalize(),i[3].setComponents(l-o,h-f,p-v,y-_).normalize(),i[4].setComponents(l-a,h-d,p-x,y-g).normalize(),n===ai)i[5].setComponents(l+a,h+d,p+x,y+g).normalize();else if(n===dl)i[5].setComponents(a,d,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(pa.x=r.normal.x>0?e.max.x:e.min.x,pa.y=r.normal.y>0?e.max.y:e.min.y,pa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function A_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Vy(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const d=u.array,h=u.usage,m=d.byteLength,v=t.createBuffer();t.bindBuffer(f,v),t.bufferData(f,d,h),u.onUploadCallback();let x;if(d instanceof Float32Array)x=t.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=t.SHORT;else if(d instanceof Uint32Array)x=t.UNSIGNED_INT;else if(d instanceof Int32Array)x=t.INT;else if(d instanceof Int8Array)x=t.BYTE;else if(d instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:m}}function s(u,f,d){const h=f.array,m=f._updateRange,v=f.updateRanges;if(t.bindBuffer(d,u),m.count===-1&&v.length===0&&t.bufferSubData(d,0,h),v.length!==0){for(let x=0,p=v.length;x<p;x++){const c=v[x];n?t.bufferSubData(d,c.start*h.BYTES_PER_ELEMENT,h,c.start,c.count):t.bufferSubData(d,c.start*h.BYTES_PER_ELEMENT,h.subarray(c.start,c.start+c.count))}f.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);if(d===void 0)i.set(u,r(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,u,f),d.version=u.version}}return{get:o,remove:a,update:l}}class Yf extends dn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,d=e/a,h=n/l,m=[],v=[],x=[],p=[];for(let c=0;c<f;c++){const _=c*h-o;for(let g=0;g<u;g++){const y=g*d-s;v.push(y,-_,0),x.push(0,0,1),p.push(g/a),p.push(1-c/l)}}for(let c=0;c<l;c++)for(let _=0;_<a;_++){const g=_+u*c,y=_+u*(c+1),C=_+1+u*(c+1),R=_+1+u*c;m.push(g,y,R),m.push(y,C,R)}this.setIndex(m),this.setAttribute("position",new Bn(v,3)),this.setAttribute("normal",new Bn(x,3)),this.setAttribute("uv",new Bn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yf(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xy=`#ifdef USE_ALPHAHASH
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
#endif`,jy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$y=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ky=`#ifdef USE_AOMAP
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
#endif`,Zy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qy=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Jy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,eS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iS=`#ifdef USE_IRIDESCENCE
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
#endif`,rS=`#ifdef USE_BUMPMAP
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
#endif`,sS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,oS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hS=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,pS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mS=`vec3 transformedNormal = objectNormal;
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
#endif`,gS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_S=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yS="gl_FragColor = linearToOutputTexel( gl_FragColor );",SS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,MS=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,ES=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,TS=`#ifdef USE_ENVMAP
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
#endif`,wS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AS=`#ifdef USE_ENVMAP
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
#endif`,RS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bS=`#ifdef USE_GRADIENTMAP
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
}`,DS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,US=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OS=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,FS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,kS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GS=`PhysicalMaterial material;
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
#endif`,VS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,WS=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,XS=`#if defined( RE_IndirectDiffuse )
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
#endif`,jS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$S=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,KS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ZS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eM=`#if defined( USE_POINTS_UV )
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
#endif`,tM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,sM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,oM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,aM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dM=`#ifdef USE_NORMALMAP
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
#endif`,hM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_M=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,xM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,EM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,AM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,CM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,PM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LM=`#ifdef USE_SKINNING
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
#endif`,bM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DM=`#ifdef USE_SKINNING
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
#endif`,UM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OM=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,FM=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kM=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WM=`uniform sampler2D t2D;
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
}`,XM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$M=`#include <common>
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
}`,KM=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,ZM=`#define DISTANCE
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
}`,QM=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,JM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tE=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nE=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iE=`#include <common>
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
}`,rE=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,sE=`#define LAMBERT
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
}`,oE=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,aE=`#define MATCAP
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
}`,lE=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,uE=`#define NORMAL
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
}`,cE=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fE=`#define PHONG
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
}`,dE=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,hE=`#define STANDARD
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
}`,pE=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,mE=`#define TOON
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
}`,gE=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,_E=`uniform float size;
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
}`,vE=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,xE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,yE=`uniform vec3 color;
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
}`,SE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,ME=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Oe={alphahash_fragment:Wy,alphahash_pars_fragment:Xy,alphamap_fragment:jy,alphamap_pars_fragment:Yy,alphatest_fragment:qy,alphatest_pars_fragment:$y,aomap_fragment:Ky,aomap_pars_fragment:Zy,batching_pars_vertex:Qy,batching_vertex:Jy,begin_vertex:eS,beginnormal_vertex:tS,bsdfs:nS,iridescence_fragment:iS,bumpmap_pars_fragment:rS,clipping_planes_fragment:sS,clipping_planes_pars_fragment:oS,clipping_planes_pars_vertex:aS,clipping_planes_vertex:lS,color_fragment:uS,color_pars_fragment:cS,color_pars_vertex:fS,color_vertex:dS,common:hS,cube_uv_reflection_fragment:pS,defaultnormal_vertex:mS,displacementmap_pars_vertex:gS,displacementmap_vertex:_S,emissivemap_fragment:vS,emissivemap_pars_fragment:xS,colorspace_fragment:yS,colorspace_pars_fragment:SS,envmap_fragment:MS,envmap_common_pars_fragment:ES,envmap_pars_fragment:TS,envmap_pars_vertex:wS,envmap_physical_pars_fragment:FS,envmap_vertex:AS,fog_vertex:RS,fog_pars_vertex:CS,fog_fragment:PS,fog_pars_fragment:LS,gradientmap_pars_fragment:bS,lightmap_fragment:DS,lightmap_pars_fragment:US,lights_lambert_fragment:NS,lights_lambert_pars_fragment:IS,lights_pars_begin:OS,lights_toon_fragment:kS,lights_toon_pars_fragment:zS,lights_phong_fragment:BS,lights_phong_pars_fragment:HS,lights_physical_fragment:GS,lights_physical_pars_fragment:VS,lights_fragment_begin:WS,lights_fragment_maps:XS,lights_fragment_end:jS,logdepthbuf_fragment:YS,logdepthbuf_pars_fragment:qS,logdepthbuf_pars_vertex:$S,logdepthbuf_vertex:KS,map_fragment:ZS,map_pars_fragment:QS,map_particle_fragment:JS,map_particle_pars_fragment:eM,metalnessmap_fragment:tM,metalnessmap_pars_fragment:nM,morphcolor_vertex:iM,morphnormal_vertex:rM,morphtarget_pars_vertex:sM,morphtarget_vertex:oM,normal_fragment_begin:aM,normal_fragment_maps:lM,normal_pars_fragment:uM,normal_pars_vertex:cM,normal_vertex:fM,normalmap_pars_fragment:dM,clearcoat_normal_fragment_begin:hM,clearcoat_normal_fragment_maps:pM,clearcoat_pars_fragment:mM,iridescence_pars_fragment:gM,opaque_fragment:_M,packing:vM,premultiplied_alpha_fragment:xM,project_vertex:yM,dithering_fragment:SM,dithering_pars_fragment:MM,roughnessmap_fragment:EM,roughnessmap_pars_fragment:TM,shadowmap_pars_fragment:wM,shadowmap_pars_vertex:AM,shadowmap_vertex:RM,shadowmask_pars_fragment:CM,skinbase_vertex:PM,skinning_pars_vertex:LM,skinning_vertex:bM,skinnormal_vertex:DM,specularmap_fragment:UM,specularmap_pars_fragment:NM,tonemapping_fragment:IM,tonemapping_pars_fragment:OM,transmission_fragment:FM,transmission_pars_fragment:kM,uv_pars_fragment:zM,uv_pars_vertex:BM,uv_vertex:HM,worldpos_vertex:GM,background_vert:VM,background_frag:WM,backgroundCube_vert:XM,backgroundCube_frag:jM,cube_vert:YM,cube_frag:qM,depth_vert:$M,depth_frag:KM,distanceRGBA_vert:ZM,distanceRGBA_frag:QM,equirect_vert:JM,equirect_frag:eE,linedashed_vert:tE,linedashed_frag:nE,meshbasic_vert:iE,meshbasic_frag:rE,meshlambert_vert:sE,meshlambert_frag:oE,meshmatcap_vert:aE,meshmatcap_frag:lE,meshnormal_vert:uE,meshnormal_frag:cE,meshphong_vert:fE,meshphong_frag:dE,meshphysical_vert:hE,meshphysical_frag:pE,meshtoon_vert:mE,meshtoon_frag:gE,points_vert:_E,points_frag:vE,shadow_vert:xE,shadow_frag:yE,sprite_vert:SE,sprite_frag:ME},ce={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Xn={basic:{uniforms:Gt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Gt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Gt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Gt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Gt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Gt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Gt([ce.points,ce.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Gt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Gt([ce.common,ce.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Gt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Gt([ce.sprite,ce.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Gt([ce.common,ce.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Gt([ce.lights,ce.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Xn.physical={uniforms:Gt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const ma={r:0,b:0,g:0};function EE(t,e,n,i,r,s,o){const a=new Ve(0);let l=s===!0?0:1,u,f,d=null,h=0,m=null;function v(p,c){let _=!1,g=c.isScene===!0?c.background:null;g&&g.isTexture&&(g=(c.backgroundBlurriness>0?n:e).get(g)),g===null?x(a,l):g&&g.isColor&&(x(g,1),_=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Ll)?(f===void 0&&(f=new li(new Po(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:Ss(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=g,f.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,f.material.toneMapped=Je.getTransfer(g.colorSpace)!==rt,(d!==g||h!==g.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,d=g,h=g.version,m=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new li(new Yf(2,2),new yr({name:"BackgroundMaterial",uniforms:Ss(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=Je.getTransfer(g.colorSpace)!==rt,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||h!==g.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=g,h=g.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function x(p,c){p.getRGB(ma,M_(t)),i.buffers.color.setClear(ma.r,ma.g,ma.b,c,o)}return{getClearColor:function(){return a},setClearColor:function(p,c=1){a.set(p),l=c,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(a,l)},render:v}}function TE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,f=!1;function d(b,z,j,q,D){let O=!1;if(o){const H=x(q,j,z);u!==H&&(u=H,m(u.object)),O=c(b,q,j,D),O&&_(b,q,j,D)}else{const H=z.wireframe===!0;(u.geometry!==q.id||u.program!==j.id||u.wireframe!==H)&&(u.geometry=q.id,u.program=j.id,u.wireframe=H,O=!0)}D!==null&&n.update(D,t.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,I(b,z,j,q),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(D).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(b){return i.isWebGL2?t.bindVertexArray(b):s.bindVertexArrayOES(b)}function v(b){return i.isWebGL2?t.deleteVertexArray(b):s.deleteVertexArrayOES(b)}function x(b,z,j){const q=j.wireframe===!0;let D=a[b.id];D===void 0&&(D={},a[b.id]=D);let O=D[z.id];O===void 0&&(O={},D[z.id]=O);let H=O[q];return H===void 0&&(H=p(h()),O[q]=H),H}function p(b){const z=[],j=[],q=[];for(let D=0;D<r;D++)z[D]=0,j[D]=0,q[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:j,attributeDivisors:q,object:b,attributes:{},index:null}}function c(b,z,j,q){const D=u.attributes,O=z.attributes;let H=0;const $=j.getAttributes();for(const Z in $)if($[Z].location>=0){const K=D[Z];let fe=O[Z];if(fe===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(fe=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(fe=b.instanceColor)),K===void 0||K.attribute!==fe||fe&&K.data!==fe.data)return!0;H++}return u.attributesNum!==H||u.index!==q}function _(b,z,j,q){const D={},O=z.attributes;let H=0;const $=j.getAttributes();for(const Z in $)if($[Z].location>=0){let K=O[Z];K===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(K=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(K=b.instanceColor));const fe={};fe.attribute=K,K&&K.data&&(fe.data=K.data),D[Z]=fe,H++}u.attributes=D,u.attributesNum=H,u.index=q}function g(){const b=u.newAttributes;for(let z=0,j=b.length;z<j;z++)b[z]=0}function y(b){C(b,0)}function C(b,z){const j=u.newAttributes,q=u.enabledAttributes,D=u.attributeDivisors;j[b]=1,q[b]===0&&(t.enableVertexAttribArray(b),q[b]=1),D[b]!==z&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](b,z),D[b]=z)}function R(){const b=u.newAttributes,z=u.enabledAttributes;for(let j=0,q=z.length;j<q;j++)z[j]!==b[j]&&(t.disableVertexAttribArray(j),z[j]=0)}function A(b,z,j,q,D,O,H){H===!0?t.vertexAttribIPointer(b,z,j,D,O):t.vertexAttribPointer(b,z,j,q,D,O)}function I(b,z,j,q){if(i.isWebGL2===!1&&(b.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const D=q.attributes,O=j.getAttributes(),H=z.defaultAttributeValues;for(const $ in O){const Z=O[$];if(Z.location>=0){let X=D[$];if(X===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(X=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(X=b.instanceColor)),X!==void 0){const K=X.normalized,fe=X.itemSize,ge=n.get(X);if(ge===void 0)continue;const _e=ge.buffer,Le=ge.type,be=ge.bytesPerElement,we=i.isWebGL2===!0&&(Le===t.INT||Le===t.UNSIGNED_INT||X.gpuType===s_);if(X.isInterleavedBufferAttribute){const Xe=X.data,F=Xe.stride,Mt=X.offset;if(Xe.isInstancedInterleavedBuffer){for(let Ee=0;Ee<Z.locationSize;Ee++)C(Z.location+Ee,Xe.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let Ee=0;Ee<Z.locationSize;Ee++)y(Z.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,_e);for(let Ee=0;Ee<Z.locationSize;Ee++)A(Z.location+Ee,fe/Z.locationSize,Le,K,F*be,(Mt+fe/Z.locationSize*Ee)*be,we)}else{if(X.isInstancedBufferAttribute){for(let Xe=0;Xe<Z.locationSize;Xe++)C(Z.location+Xe,X.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Xe=0;Xe<Z.locationSize;Xe++)y(Z.location+Xe);t.bindBuffer(t.ARRAY_BUFFER,_e);for(let Xe=0;Xe<Z.locationSize;Xe++)A(Z.location+Xe,fe/Z.locationSize,Le,K,fe*be,fe/Z.locationSize*Xe*be,we)}}else if(H!==void 0){const K=H[$];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(Z.location,K);break;case 3:t.vertexAttrib3fv(Z.location,K);break;case 4:t.vertexAttrib4fv(Z.location,K);break;default:t.vertexAttrib1fv(Z.location,K)}}}}R()}function M(){Y();for(const b in a){const z=a[b];for(const j in z){const q=z[j];for(const D in q)v(q[D].object),delete q[D];delete z[j]}delete a[b]}}function T(b){if(a[b.id]===void 0)return;const z=a[b.id];for(const j in z){const q=z[j];for(const D in q)v(q[D].object),delete q[D];delete z[j]}delete a[b.id]}function V(b){for(const z in a){const j=a[z];if(j[b.id]===void 0)continue;const q=j[b.id];for(const D in q)v(q[D].object),delete q[D];delete j[b.id]}}function Y(){se(),f=!0,u!==l&&(u=l,m(u.object))}function se(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:se,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:V,initAttributes:g,enableAttribute:y,disableUnusedAttributes:R}}function wE(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,d){t.drawArrays(s,f,d),n.update(d,s,1)}function l(f,d,h){if(h===0)return;let m,v;if(r)m=t,v="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](s,f,d,h),n.update(d,s,h)}function u(f,d,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<h;v++)this.render(f[v],d[v]);else{m.multiDrawArraysWEBGL(s,f,0,d,0,h);let v=0;for(let x=0;x<h;x++)v+=d[x];n.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function AE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),c=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,y=o||e.has("OES_texture_float"),C=g&&y,R=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:p,maxVaryings:c,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:C,maxSamples:R}}function RE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ti,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,m){const v=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,c=t.get(d);if(!r||v===null||v.length===0||s&&!p)s?f(null):u();else{const _=s?0:i,g=_*4;let y=c.clippingState||null;l.value=y,y=f(v,h,g,m);for(let C=0;C!==g;++C)y[C]=n[C];c.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,m,v){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,v!==!0||p===null){const c=m+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<c)&&(p=new Float32Array(c));for(let g=0,y=m;g!==x;++g,y+=4)o.copy(d[g]).applyMatrix4(_,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function CE(t){let e=new WeakMap;function n(o,a){return a===kc?o.mapping=vs:a===zc&&(o.mapping=xs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===kc||a===zc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new By(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class PE extends E_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ts=4,up=[.125,.215,.35,.446,.526,.582],rr=20,Iu=new PE,cp=new Ve;let Ou=null,Fu=0,ku=0;const nr=(1+Math.sqrt(5))/2,Gr=1/nr,fp=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,nr,Gr),new U(0,nr,-Gr),new U(Gr,0,nr),new U(-Gr,0,nr),new U(nr,Gr,0),new U(-nr,Gr,0)];class dp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ou=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ou,Fu,ku),e.scissorTest=!1,ga(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===vs||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ou=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:yo,format:Fn,colorSpace:pi,depthBuffer:!1},r=hp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LE(s)),this._blurMaterial=bE(s,e,n)}return r}_compileMaterial(e){const n=new li(this._lodPlanes[0],e);this._renderer.compile(n,Iu)}_sceneToCubeUV(e,n,i,r){const a=new Sn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(cp),f.toneMapping=Bi,f.autoClear=!1;const m=new jf({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),v=new li(new Po,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(cp),x=!0);for(let c=0;c<6;c++){const _=c%3;_===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):_===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const g=this._cubeSize;ga(r,_*g,c>2?g:0,g,g),f.setRenderTarget(r),x&&f.render(v,a),f.render(e,a)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===vs||e.mapping===xs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new li(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ga(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Iu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=fp[(r-1)%fp.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new li(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*rr-1),x=s/v,p=isFinite(s)?1+Math.floor(f*x):rr;p>rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${rr}`);const c=[];let _=0;for(let A=0;A<rr;++A){const I=A/x,M=Math.exp(-I*I/2);c.push(M),A===0?_+=M:A<p&&(_+=2*M)}for(let A=0;A<c.length;A++)c[A]=c[A]/_;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=c,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=v,h.mipInt.value=g-i;const y=this._sizeLods[r],C=3*y*(r>g-ts?r-g+ts:0),R=4*(this._cubeSize-y);ga(n,C,R,3*y,2*y),l.setRenderTarget(n),l.render(d,Iu)}}function LE(t){const e=[],n=[],i=[];let r=t;const s=t-ts+1+up.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ts?l=up[o-t+ts-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,d=1+u,h=[f,f,d,f,d,d,f,f,d,d,f,d],m=6,v=6,x=3,p=2,c=1,_=new Float32Array(x*v*m),g=new Float32Array(p*v*m),y=new Float32Array(c*v*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,I=R>2?0:-1,M=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];_.set(M,x*v*R),g.set(h,p*v*R);const T=[R,R,R,R,R,R];y.set(T,c*v*R)}const C=new dn;C.setAttribute("position",new wn(_,x)),C.setAttribute("uv",new wn(g,p)),C.setAttribute("faceIndex",new wn(y,c)),e.push(C),r>ts&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function hp(t,e,n){const i=new vr(t,e,n);return i.texture.mapping=Ll,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ga(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function bE(t,e,n){const i=new Float32Array(rr),r=new U(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qf(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function pp(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qf(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function mp(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function qf(){return`

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
	`}function DE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===kc||l===zc,f=l===vs||l===xs;if(u||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new dp(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||f&&d&&r(d)){n===null&&(n=new dp(t));const h=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function UE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function NE(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const x=h.morphAttributes[v];for(let p=0,c=x.length;p<c;p++)e.remove(x[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const x=m[v];for(let p=0,c=x.length;p<c;p++)e.update(x[p],t.ARRAY_BUFFER)}}function u(d){const h=[],m=d.index,v=d.attributes.position;let x=0;if(m!==null){const _=m.array;x=m.version;for(let g=0,y=_.length;g<y;g+=3){const C=_[g+0],R=_[g+1],A=_[g+2];h.push(C,R,R,A,A,C)}}else if(v!==void 0){const _=v.array;x=v.version;for(let g=0,y=_.length/3-1;g<y;g+=3){const C=g+0,R=g+1,A=g+2;h.push(C,R,R,A,A,C)}}else return;const p=new(p_(h)?S_:y_)(h,1);p.version=x;const c=s.get(d);c&&e.remove(c),s.set(d,p)}function f(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function IE(t,e,n,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function u(m){a=m.type,l=m.bytesPerElement}function f(m,v){t.drawElements(s,v,a,m*l),n.update(v,s,1)}function d(m,v,x){if(x===0)return;let p,c;if(r)p=t,c="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),c="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[c](s,v,a,m*l,x),n.update(v,s,x)}function h(m,v,x){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let c=0;c<x;c++)this.render(m[c]/l,v[c]);else{p.multiDrawElementsWEBGL(s,v,0,a,m,0,x);let c=0;for(let _=0;_<x;_++)c+=v[_];n.update(c,s,1)}}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function OE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function FE(t,e){return t[0]-e[0]}function kE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function zE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Lt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,f,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=v!==void 0?v.length:0;let p=s.get(f);if(p===void 0||p.count!==x){let z=function(){se.dispose(),s.delete(f),f.removeEventListener("dispose",z)};var m=z;p!==void 0&&p.texture.dispose();const g=f.morphAttributes.position!==void 0,y=f.morphAttributes.normal!==void 0,C=f.morphAttributes.color!==void 0,R=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],I=f.morphAttributes.color||[];let M=0;g===!0&&(M=1),y===!0&&(M=2),C===!0&&(M=3);let T=f.attributes.position.count*M,V=1;T>e.maxTextureSize&&(V=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const Y=new Float32Array(T*V*4*x),se=new __(Y,T,V,x);se.type=Li,se.needsUpdate=!0;const b=M*4;for(let j=0;j<x;j++){const q=R[j],D=A[j],O=I[j],H=T*V*4*j;for(let $=0;$<q.count;$++){const Z=$*b;g===!0&&(o.fromBufferAttribute(q,$),Y[H+Z+0]=o.x,Y[H+Z+1]=o.y,Y[H+Z+2]=o.z,Y[H+Z+3]=0),y===!0&&(o.fromBufferAttribute(D,$),Y[H+Z+4]=o.x,Y[H+Z+5]=o.y,Y[H+Z+6]=o.z,Y[H+Z+7]=0),C===!0&&(o.fromBufferAttribute(O,$),Y[H+Z+8]=o.x,Y[H+Z+9]=o.y,Y[H+Z+10]=o.z,Y[H+Z+11]=O.itemSize===4?o.w:1)}}p={count:x,texture:se,size:new ze(T,V)},s.set(f,p),f.addEventListener("dispose",z)}let c=0;for(let g=0;g<h.length;g++)c+=h[g];const _=f.morphTargetsRelative?1:1-c;d.getUniforms().setValue(t,"morphTargetBaseInfluence",_),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const v=h===void 0?0:h.length;let x=i[f.id];if(x===void 0||x.length!==v){x=[];for(let y=0;y<v;y++)x[y]=[y,0];i[f.id]=x}for(let y=0;y<v;y++){const C=x[y];C[0]=y,C[1]=h[y]}x.sort(kE);for(let y=0;y<8;y++)y<v&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(FE);const p=f.morphAttributes.position,c=f.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const C=a[y],R=C[0],A=C[1];R!==Number.MAX_SAFE_INTEGER&&A?(p&&f.getAttribute("morphTarget"+y)!==p[R]&&f.setAttribute("morphTarget"+y,p[R]),c&&f.getAttribute("morphNormal"+y)!==c[R]&&f.setAttribute("morphNormal"+y,c[R]),r[y]=A,_+=A):(p&&f.hasAttribute("morphTarget"+y)===!0&&f.deleteAttribute("morphTarget"+y),c&&f.hasAttribute("morphNormal"+y)===!0&&f.deleteAttribute("morphNormal"+y),r[y]=0)}const g=f.morphTargetsRelative?1:1-_;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function BE(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class R_ extends rn{constructor(e,n,i,r,s,o,a,l,u,f){if(f=f!==void 0?f:fr,f!==fr&&f!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===fr&&(i=Pi),i===void 0&&f===ys&&(i=cr),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const C_=new rn,P_=new R_(1,1);P_.compareFunction=h_;const L_=new __,b_=new Ey,D_=new T_,gp=[],_p=[],vp=new Float32Array(16),xp=new Float32Array(9),yp=new Float32Array(4);function As(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=gp[r];if(s===void 0&&(s=new Float32Array(r),gp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function yt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function St(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Nl(t,e){let n=_p[e];n===void 0&&(n=new Int32Array(e),_p[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function HE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function GE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2fv(this.addr,e),St(n,e)}}function VE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(yt(n,e))return;t.uniform3fv(this.addr,e),St(n,e)}}function WE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4fv(this.addr,e),St(n,e)}}function XE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),St(n,e)}else{if(yt(n,i))return;yp.set(i),t.uniformMatrix2fv(this.addr,!1,yp),St(n,i)}}function jE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),St(n,e)}else{if(yt(n,i))return;xp.set(i),t.uniformMatrix3fv(this.addr,!1,xp),St(n,i)}}function YE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),St(n,e)}else{if(yt(n,i))return;vp.set(i),t.uniformMatrix4fv(this.addr,!1,vp),St(n,i)}}function qE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function $E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2iv(this.addr,e),St(n,e)}}function KE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yt(n,e))return;t.uniform3iv(this.addr,e),St(n,e)}}function ZE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4iv(this.addr,e),St(n,e)}}function QE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function JE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2uiv(this.addr,e),St(n,e)}}function eT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yt(n,e))return;t.uniform3uiv(this.addr,e),St(n,e)}}function tT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4uiv(this.addr,e),St(n,e)}}function nT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?P_:C_;n.setTexture2D(e||s,r)}function iT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||b_,r)}function rT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||D_,r)}function sT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||L_,r)}function oT(t){switch(t){case 5126:return HE;case 35664:return GE;case 35665:return VE;case 35666:return WE;case 35674:return XE;case 35675:return jE;case 35676:return YE;case 5124:case 35670:return qE;case 35667:case 35671:return $E;case 35668:case 35672:return KE;case 35669:case 35673:return ZE;case 5125:return QE;case 36294:return JE;case 36295:return eT;case 36296:return tT;case 35678:case 36198:case 36298:case 36306:case 35682:return nT;case 35679:case 36299:case 36307:return iT;case 35680:case 36300:case 36308:case 36293:return rT;case 36289:case 36303:case 36311:case 36292:return sT}}function aT(t,e){t.uniform1fv(this.addr,e)}function lT(t,e){const n=As(e,this.size,2);t.uniform2fv(this.addr,n)}function uT(t,e){const n=As(e,this.size,3);t.uniform3fv(this.addr,n)}function cT(t,e){const n=As(e,this.size,4);t.uniform4fv(this.addr,n)}function fT(t,e){const n=As(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function dT(t,e){const n=As(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function hT(t,e){const n=As(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function pT(t,e){t.uniform1iv(this.addr,e)}function mT(t,e){t.uniform2iv(this.addr,e)}function gT(t,e){t.uniform3iv(this.addr,e)}function _T(t,e){t.uniform4iv(this.addr,e)}function vT(t,e){t.uniform1uiv(this.addr,e)}function xT(t,e){t.uniform2uiv(this.addr,e)}function yT(t,e){t.uniform3uiv(this.addr,e)}function ST(t,e){t.uniform4uiv(this.addr,e)}function MT(t,e,n){const i=this.cache,r=e.length,s=Nl(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||C_,s[o])}function ET(t,e,n){const i=this.cache,r=e.length,s=Nl(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||b_,s[o])}function TT(t,e,n){const i=this.cache,r=e.length,s=Nl(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||D_,s[o])}function wT(t,e,n){const i=this.cache,r=e.length,s=Nl(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||L_,s[o])}function AT(t){switch(t){case 5126:return aT;case 35664:return lT;case 35665:return uT;case 35666:return cT;case 35674:return fT;case 35675:return dT;case 35676:return hT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return gT;case 35669:case 35673:return _T;case 5125:return vT;case 36294:return xT;case 36295:return yT;case 36296:return ST;case 35678:case 36198:case 36298:case 36306:case 35682:return MT;case 35679:case 36299:case 36307:return ET;case 35680:case 36300:case 36308:case 36293:return TT;case 36289:case 36303:case 36311:case 36292:return wT}}class RT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=oT(n.type)}}class CT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=AT(n.type)}}class PT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const zu=/(\w+)(\])?(\[|\.)?/g;function Sp(t,e){t.seq.push(e),t.map[e.id]=e}function LT(t,e,n){const i=t.name,r=i.length;for(zu.lastIndex=0;;){const s=zu.exec(i),o=zu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Sp(n,u===void 0?new RT(a,t,e):new CT(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new PT(a),Sp(n,d)),n=d}}}class Oa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);LT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Mp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const bT=37297;let DT=0;function UT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function NT(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===fl&&n===cl?i="LinearDisplayP3ToLinearSRGB":e===cl&&n===fl&&(i="LinearSRGBToLinearDisplayP3"),t){case pi:case bl:return[i,"LinearTransferOETF"];case Pt:case Xf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Ep(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+UT(t.getShaderSource(e),o)}else return r}function IT(t,e){const n=NT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function OT(t,e){let n;switch(e){case Wx:n="Linear";break;case Xx:n="Reinhard";break;case jx:n="OptimizedCineon";break;case Yx:n="ACESFilmic";break;case $x:n="AgX";break;case qx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function FT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ns).join(`
`)}function kT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ns).join(`
`)}function zT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function BT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ns(t){return t!==""}function Tp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xc(t){return t.replace(HT,VT)}const GT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function VT(t,e){let n=Oe[e];if(n===void 0){const i=GT.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xc(n)}const WT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ap(t){return t.replace(WT,XT)}function XT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===n_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===vx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function YT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case vs:case xs:e="ENVMAP_TYPE_CUBE";break;case Ll:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case xs:e="ENVMAP_MODE_REFRACTION";break}return e}function $T(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case i_:e="ENVMAP_BLENDING_MULTIPLY";break;case Gx:e="ENVMAP_BLENDING_MIX";break;case Vx:e="ENVMAP_BLENDING_ADD";break}return e}function KT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ZT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=jT(n),u=YT(n),f=qT(n),d=$T(n),h=KT(n),m=n.isWebGL2?"":FT(n),v=kT(n),x=zT(s),p=r.createProgram();let c,_,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ns).join(`
`),c.length>0&&(c+=`
`),_=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ns).join(`
`),_.length>0&&(_+=`
`)):(c=[Rp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),_=[m,Rp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Bi?"#define TONE_MAPPING":"",n.toneMapping!==Bi?Oe.tonemapping_pars_fragment:"",n.toneMapping!==Bi?OT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,IT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ns).join(`
`)),o=Xc(o),o=Tp(o,n),o=wp(o,n),a=Xc(a),a=Tp(a,n),a=wp(a,n),o=Ap(o),a=Ap(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,c=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,_=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=g+c+o,C=g+_+a,R=Mp(r,r.VERTEX_SHADER,y),A=Mp(r,r.FRAGMENT_SHADER,C);r.attachShader(p,R),r.attachShader(p,A),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function I(Y){if(t.debug.checkShaderErrors){const se=r.getProgramInfoLog(p).trim(),b=r.getShaderInfoLog(R).trim(),z=r.getShaderInfoLog(A).trim();let j=!0,q=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,R,A);else{const D=Ep(r,R,"vertex"),O=Ep(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+se+`
`+D+`
`+O)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(b===""||z==="")&&(q=!1);q&&(Y.diagnostics={runnable:j,programLog:se,vertexShader:{log:b,prefix:c},fragmentShader:{log:z,prefix:_}})}r.deleteShader(R),r.deleteShader(A),M=new Oa(r,p),T=BT(r,p)}let M;this.getUniforms=function(){return M===void 0&&I(this),M};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let V=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=r.getProgramParameter(p,bT)),V},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=DT++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=A,this}let QT=0;class JT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new ew(e),n.set(e,i)),i}}class ew{constructor(e){this.id=QT++,this.code=e,this.usedTimes=0}}function tw(t,e,n,i,r,s,o){const a=new v_,l=new JT,u=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function p(M,T,V,Y,se){const b=Y.fog,z=se.geometry,j=M.isMeshStandardMaterial?Y.environment:null,q=(M.isMeshStandardMaterial?n:e).get(M.envMap||j),D=q&&q.mapping===Ll?q.image.height:null,O=v[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const H=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,$=H!==void 0?H.length:0;let Z=0;z.morphAttributes.position!==void 0&&(Z=1),z.morphAttributes.normal!==void 0&&(Z=2),z.morphAttributes.color!==void 0&&(Z=3);let X,K,fe,ge;if(O){const Bt=Xn[O];X=Bt.vertexShader,K=Bt.fragmentShader}else X=M.vertexShader,K=M.fragmentShader,l.update(M),fe=l.getVertexShaderID(M),ge=l.getFragmentShaderID(M);const _e=t.getRenderTarget(),Le=se.isInstancedMesh===!0,be=se.isBatchedMesh===!0,we=!!M.map,Xe=!!M.matcap,F=!!q,Mt=!!M.aoMap,Ee=!!M.lightMap,Ce=!!M.bumpMap,ve=!!M.normalMap,nt=!!M.displacementMap,De=!!M.emissiveMap,w=!!M.metalnessMap,S=!!M.roughnessMap,k=M.anisotropy>0,ie=M.clearcoat>0,ee=M.iridescence>0,te=M.sheen>0,xe=M.transmission>0,de=k&&!!M.anisotropyMap,me=ie&&!!M.clearcoatMap,Ae=ie&&!!M.clearcoatNormalMap,Ne=ie&&!!M.clearcoatRoughnessMap,J=ee&&!!M.iridescenceMap,je=ee&&!!M.iridescenceThicknessMap,P=te&&!!M.sheenColorMap,Q=te&&!!M.sheenRoughnessMap,ue=!!M.specularMap,re=!!M.specularColorMap,ye=!!M.specularIntensityMap,Be=xe&&!!M.transmissionMap,Ye=xe&&!!M.thicknessMap,Fe=!!M.gradientMap,le=!!M.alphaMap,L=M.alphaTest>0,oe=!!M.alphaHash,ae=!!M.extensions,Te=!!z.attributes.uv1,Se=!!z.attributes.uv2,$e=!!z.attributes.uv3;let Ke=Bi;return M.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Ke=t.toneMapping),{isWebGL2:f,shaderID:O,shaderType:M.type,shaderName:M.name,vertexShader:X,fragmentShader:K,defines:M.defines,customVertexShaderID:fe,customFragmentShaderID:ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:be,instancing:Le,instancingColor:Le&&se.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:_e===null?t.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:pi,map:we,matcap:Xe,envMap:F,envMapMode:F&&q.mapping,envMapCubeUVHeight:D,aoMap:Mt,lightMap:Ee,bumpMap:Ce,normalMap:ve,displacementMap:h&&nt,emissiveMap:De,normalMapObjectSpace:ve&&M.normalMapType===ly,normalMapTangentSpace:ve&&M.normalMapType===ay,metalnessMap:w,roughnessMap:S,anisotropy:k,anisotropyMap:de,clearcoat:ie,clearcoatMap:me,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Ne,iridescence:ee,iridescenceMap:J,iridescenceThicknessMap:je,sheen:te,sheenColorMap:P,sheenRoughnessMap:Q,specularMap:ue,specularColorMap:re,specularIntensityMap:ye,transmission:xe,transmissionMap:Be,thicknessMap:Ye,gradientMap:Fe,opaque:M.transparent===!1&&M.blending===us,alphaMap:le,alphaTest:L,alphaHash:oe,combine:M.combine,mapUv:we&&x(M.map.channel),aoMapUv:Mt&&x(M.aoMap.channel),lightMapUv:Ee&&x(M.lightMap.channel),bumpMapUv:Ce&&x(M.bumpMap.channel),normalMapUv:ve&&x(M.normalMap.channel),displacementMapUv:nt&&x(M.displacementMap.channel),emissiveMapUv:De&&x(M.emissiveMap.channel),metalnessMapUv:w&&x(M.metalnessMap.channel),roughnessMapUv:S&&x(M.roughnessMap.channel),anisotropyMapUv:de&&x(M.anisotropyMap.channel),clearcoatMapUv:me&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:je&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:P&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Q&&x(M.sheenRoughnessMap.channel),specularMapUv:ue&&x(M.specularMap.channel),specularColorMapUv:re&&x(M.specularColorMap.channel),specularIntensityMapUv:ye&&x(M.specularIntensityMap.channel),transmissionMapUv:Be&&x(M.transmissionMap.channel),thicknessMapUv:Ye&&x(M.thicknessMap.channel),alphaMapUv:le&&x(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ve||k),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:Se,vertexUv3s:$e,pointsUvs:se.isPoints===!0&&!!z.attributes.uv&&(we||le),fog:!!b,useFog:M.fog===!0,fogExp2:b&&b.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:se.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Z,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ke,useLegacyLights:t._useLegacyLights,decodeVideoTexture:we&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===rt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ri,flipSided:M.side===nn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ae&&M.extensions.derivatives===!0,extensionFragDepth:ae&&M.extensions.fragDepth===!0,extensionDrawBuffers:ae&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function c(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const V in M.defines)T.push(V),T.push(M.defines[V]);return M.isRawShaderMaterial===!1&&(_(T,M),g(T,M),T.push(t.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function _(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function g(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function y(M){const T=v[M.type];let V;if(T){const Y=Xn[T];V=Oy.clone(Y.uniforms)}else V=M.uniforms;return V}function C(M,T){let V;for(let Y=0,se=u.length;Y<se;Y++){const b=u[Y];if(b.cacheKey===T){V=b,++V.usedTimes;break}}return V===void 0&&(V=new ZT(t,T,M,s),u.push(V)),V}function R(M){if(--M.usedTimes===0){const T=u.indexOf(M);u[T]=u[u.length-1],u.pop(),M.destroy()}}function A(M){l.remove(M)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:c,getUniforms:y,acquireProgram:C,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:I}}function nw(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function iw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Cp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Pp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,m,v,x,p){let c=t[e];return c===void 0?(c={id:d.id,object:d,geometry:h,material:m,groupOrder:v,renderOrder:d.renderOrder,z:x,group:p},t[e]=c):(c.id=d.id,c.object=d,c.geometry=h,c.material=m,c.groupOrder=v,c.renderOrder=d.renderOrder,c.z=x,c.group=p),e++,c}function a(d,h,m,v,x,p){const c=o(d,h,m,v,x,p);m.transmission>0?i.push(c):m.transparent===!0?r.push(c):n.push(c)}function l(d,h,m,v,x,p){const c=o(d,h,m,v,x,p);m.transmission>0?i.unshift(c):m.transparent===!0?r.unshift(c):n.unshift(c)}function u(d,h){n.length>1&&n.sort(d||iw),i.length>1&&i.sort(h||Cp),r.length>1&&r.sort(h||Cp)}function f(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function rw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Pp,t.set(i,[o])):r>=s.length?(o=new Pp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function sw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new Ve};break;case"SpotLight":n={position:new U,direction:new U,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":n={color:new Ve,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function ow(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let aw=0;function lw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function uw(t,e){const n=new sw,i=ow(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new U);const s=new U,o=new xt,a=new xt;function l(f,d){let h=0,m=0,v=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let x=0,p=0,c=0,_=0,g=0,y=0,C=0,R=0,A=0,I=0,M=0;f.sort(lw);const T=d===!0?Math.PI:1;for(let Y=0,se=f.length;Y<se;Y++){const b=f[Y],z=b.color,j=b.intensity,q=b.distance,D=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=z.r*j*T,m+=z.g*j*T,v+=z.b*j*T;else if(b.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(b.sh.coefficients[O],j);M++}else if(b.isDirectionalLight){const O=n.get(b);if(O.color.copy(b.color).multiplyScalar(b.intensity*T),b.castShadow){const H=b.shadow,$=i.get(b);$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.directionalShadow[x]=$,r.directionalShadowMap[x]=D,r.directionalShadowMatrix[x]=b.shadow.matrix,y++}r.directional[x]=O,x++}else if(b.isSpotLight){const O=n.get(b);O.position.setFromMatrixPosition(b.matrixWorld),O.color.copy(z).multiplyScalar(j*T),O.distance=q,O.coneCos=Math.cos(b.angle),O.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),O.decay=b.decay,r.spot[c]=O;const H=b.shadow;if(b.map&&(r.spotLightMap[A]=b.map,A++,H.updateMatrices(b),b.castShadow&&I++),r.spotLightMatrix[c]=H.matrix,b.castShadow){const $=i.get(b);$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.spotShadow[c]=$,r.spotShadowMap[c]=D,R++}c++}else if(b.isRectAreaLight){const O=n.get(b);O.color.copy(z).multiplyScalar(j),O.halfWidth.set(b.width*.5,0,0),O.halfHeight.set(0,b.height*.5,0),r.rectArea[_]=O,_++}else if(b.isPointLight){const O=n.get(b);if(O.color.copy(b.color).multiplyScalar(b.intensity*T),O.distance=b.distance,O.decay=b.decay,b.castShadow){const H=b.shadow,$=i.get(b);$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,r.pointShadow[p]=$,r.pointShadowMap[p]=D,r.pointShadowMatrix[p]=b.shadow.matrix,C++}r.point[p]=O,p++}else if(b.isHemisphereLight){const O=n.get(b);O.skyColor.copy(b.color).multiplyScalar(j*T),O.groundColor.copy(b.groundColor).multiplyScalar(j*T),r.hemi[g]=O,g++}}_>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=v;const V=r.hash;(V.directionalLength!==x||V.pointLength!==p||V.spotLength!==c||V.rectAreaLength!==_||V.hemiLength!==g||V.numDirectionalShadows!==y||V.numPointShadows!==C||V.numSpotShadows!==R||V.numSpotMaps!==A||V.numLightProbes!==M)&&(r.directional.length=x,r.spot.length=c,r.rectArea.length=_,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=R+A-I,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=M,V.directionalLength=x,V.pointLength=p,V.spotLength=c,V.rectAreaLength=_,V.hemiLength=g,V.numDirectionalShadows=y,V.numPointShadows=C,V.numSpotShadows=R,V.numSpotMaps=A,V.numLightProbes=M,r.version=aw++)}function u(f,d){let h=0,m=0,v=0,x=0,p=0;const c=d.matrixWorldInverse;for(let _=0,g=f.length;_<g;_++){const y=f[_];if(y.isDirectionalLight){const C=r.directional[h];C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(c),h++}else if(y.isSpotLight){const C=r.spot[v];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(c),C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(c),v++}else if(y.isRectAreaLight){const C=r.rectArea[x];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(c),a.identity(),o.copy(y.matrixWorld),o.premultiply(c),a.extractRotation(o),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const C=r.point[m];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(c),m++}else if(y.isHemisphereLight){const C=r.hemi[p];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(c),p++}}}return{setup:l,setupView:u,state:r}}function Lp(t,e){const n=new uw(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function cw(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Lp(t,e),n.set(s,[l])):o>=a.length?(l=new Lp(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class fw extends ws{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dw extends ws{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pw=`uniform sampler2D shadow_pass;
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
}`;function mw(t,e,n){let i=new w_;const r=new ze,s=new ze,o=new Lt,a=new fw({depthPacking:oy}),l=new dw,u={},f=n.maxTextureSize,d={[Wi]:nn,[nn]:Wi,[ri]:ri},h=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:hw,fragmentShader:pw}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new dn;v.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new li(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=n_;let c=this.type;this.render=function(R,A,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const M=t.getRenderTarget(),T=t.getActiveCubeFace(),V=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(zi),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const se=c!==ti&&this.type===ti,b=c===ti&&this.type!==ti;for(let z=0,j=R.length;z<j;z++){const q=R[z],D=q.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const O=D.getFrameExtents();if(r.multiply(O),s.copy(D.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/O.x),r.x=s.x*O.x,D.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/O.y),r.y=s.y*O.y,D.mapSize.y=s.y)),D.map===null||se===!0||b===!0){const $=this.type!==ti?{minFilter:Wt,magFilter:Wt}:{};D.map!==null&&D.map.dispose(),D.map=new vr(r.x,r.y,$),D.map.texture.name=q.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const H=D.getViewportCount();for(let $=0;$<H;$++){const Z=D.getViewport($);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),Y.viewport(o),D.updateMatrices(q,$),i=D.getFrustum(),y(A,I,D.camera,q,this.type)}D.isPointLightShadow!==!0&&this.type===ti&&_(D,I),D.needsUpdate=!1}c=this.type,p.needsUpdate=!1,t.setRenderTarget(M,T,V)};function _(R,A){const I=e.update(x);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new vr(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(A,null,I,h,x,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(A,null,I,m,x,null)}function g(R,A,I,M){let T=null;const V=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(V!==void 0)T=V;else if(T=I.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const Y=T.uuid,se=A.uuid;let b=u[Y];b===void 0&&(b={},u[Y]=b);let z=b[se];z===void 0&&(z=T.clone(),b[se]=z,A.addEventListener("dispose",C)),T=z}if(T.visible=A.visible,T.wireframe=A.wireframe,M===ti?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:d[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,I.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Y=t.properties.get(T);Y.light=I}return T}function y(R,A,I,M,T){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===ti)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const se=e.update(R),b=R.material;if(Array.isArray(b)){const z=se.groups;for(let j=0,q=z.length;j<q;j++){const D=z[j],O=b[D.materialIndex];if(O&&O.visible){const H=g(R,O,M,T);R.onBeforeShadow(t,R,A,I,se,H,D),t.renderBufferDirect(I,null,se,H,R,D),R.onAfterShadow(t,R,A,I,se,H,D)}}}else if(b.visible){const z=g(R,b,M,T);R.onBeforeShadow(t,R,A,I,se,z,null),t.renderBufferDirect(I,null,se,z,R,null),R.onAfterShadow(t,R,A,I,se,z,null)}}const Y=R.children;for(let se=0,b=Y.length;se<b;se++)y(Y[se],A,I,M,T)}function C(R){R.target.removeEventListener("dispose",C);for(const I in u){const M=u[I],T=R.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function gw(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const oe=new Lt;let ae=null;const Te=new Lt(0,0,0,0);return{setMask:function(Se){ae!==Se&&!L&&(t.colorMask(Se,Se,Se,Se),ae=Se)},setLocked:function(Se){L=Se},setClear:function(Se,$e,Ke,Et,Bt){Bt===!0&&(Se*=Et,$e*=Et,Ke*=Et),oe.set(Se,$e,Ke,Et),Te.equals(oe)===!1&&(t.clearColor(Se,$e,Ke,Et),Te.copy(oe))},reset:function(){L=!1,ae=null,Te.set(-1,0,0,0)}}}function s(){let L=!1,oe=null,ae=null,Te=null;return{setTest:function(Se){Se?be(t.DEPTH_TEST):we(t.DEPTH_TEST)},setMask:function(Se){oe!==Se&&!L&&(t.depthMask(Se),oe=Se)},setFunc:function(Se){if(ae!==Se){switch(Se){case Ix:t.depthFunc(t.NEVER);break;case Ox:t.depthFunc(t.ALWAYS);break;case Fx:t.depthFunc(t.LESS);break;case ll:t.depthFunc(t.LEQUAL);break;case kx:t.depthFunc(t.EQUAL);break;case zx:t.depthFunc(t.GEQUAL);break;case Bx:t.depthFunc(t.GREATER);break;case Hx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ae=Se}},setLocked:function(Se){L=Se},setClear:function(Se){Te!==Se&&(t.clearDepth(Se),Te=Se)},reset:function(){L=!1,oe=null,ae=null,Te=null}}}function o(){let L=!1,oe=null,ae=null,Te=null,Se=null,$e=null,Ke=null,Et=null,Bt=null;return{setTest:function(et){L||(et?be(t.STENCIL_TEST):we(t.STENCIL_TEST))},setMask:function(et){oe!==et&&!L&&(t.stencilMask(et),oe=et)},setFunc:function(et,Ht,Gn){(ae!==et||Te!==Ht||Se!==Gn)&&(t.stencilFunc(et,Ht,Gn),ae=et,Te=Ht,Se=Gn)},setOp:function(et,Ht,Gn){($e!==et||Ke!==Ht||Et!==Gn)&&(t.stencilOp(et,Ht,Gn),$e=et,Ke=Ht,Et=Gn)},setLocked:function(et){L=et},setClear:function(et){Bt!==et&&(t.clearStencil(et),Bt=et)},reset:function(){L=!1,oe=null,ae=null,Te=null,Se=null,$e=null,Ke=null,Et=null,Bt=null}}}const a=new r,l=new s,u=new o,f=new WeakMap,d=new WeakMap;let h={},m={},v=new WeakMap,x=[],p=null,c=!1,_=null,g=null,y=null,C=null,R=null,A=null,I=null,M=new Ve(0,0,0),T=0,V=!1,Y=null,se=null,b=null,z=null,j=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,O=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(H)[1]),D=O>=1):H.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),D=O>=2);let $=null,Z={};const X=t.getParameter(t.SCISSOR_BOX),K=t.getParameter(t.VIEWPORT),fe=new Lt().fromArray(X),ge=new Lt().fromArray(K);function _e(L,oe,ae,Te){const Se=new Uint8Array(4),$e=t.createTexture();t.bindTexture(L,$e),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ke=0;Ke<ae;Ke++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(oe,0,t.RGBA,1,1,Te,0,t.RGBA,t.UNSIGNED_BYTE,Se):t.texImage2D(oe+Ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Se);return $e}const Le={};Le[t.TEXTURE_2D]=_e(t.TEXTURE_2D,t.TEXTURE_2D,1),Le[t.TEXTURE_CUBE_MAP]=_e(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Le[t.TEXTURE_2D_ARRAY]=_e(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Le[t.TEXTURE_3D]=_e(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),be(t.DEPTH_TEST),l.setFunc(ll),De(!1),w(fh),be(t.CULL_FACE),ve(zi);function be(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function we(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function Xe(L,oe){return m[L]!==oe?(t.bindFramebuffer(L,oe),m[L]=oe,i&&(L===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=oe),L===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=oe)),!0):!1}function F(L,oe){let ae=x,Te=!1;if(L)if(ae=v.get(oe),ae===void 0&&(ae=[],v.set(oe,ae)),L.isWebGLMultipleRenderTargets){const Se=L.texture;if(ae.length!==Se.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let $e=0,Ke=Se.length;$e<Ke;$e++)ae[$e]=t.COLOR_ATTACHMENT0+$e;ae.length=Se.length,Te=!0}}else ae[0]!==t.COLOR_ATTACHMENT0&&(ae[0]=t.COLOR_ATTACHMENT0,Te=!0);else ae[0]!==t.BACK&&(ae[0]=t.BACK,Te=!0);Te&&(n.isWebGL2?t.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function Mt(L){return p!==L?(t.useProgram(L),p=L,!0):!1}const Ee={[ir]:t.FUNC_ADD,[yx]:t.FUNC_SUBTRACT,[Sx]:t.FUNC_REVERSE_SUBTRACT};if(i)Ee[mh]=t.MIN,Ee[gh]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Ee[mh]=L.MIN_EXT,Ee[gh]=L.MAX_EXT)}const Ce={[Mx]:t.ZERO,[Ex]:t.ONE,[Tx]:t.SRC_COLOR,[Oc]:t.SRC_ALPHA,[Lx]:t.SRC_ALPHA_SATURATE,[Cx]:t.DST_COLOR,[Ax]:t.DST_ALPHA,[wx]:t.ONE_MINUS_SRC_COLOR,[Fc]:t.ONE_MINUS_SRC_ALPHA,[Px]:t.ONE_MINUS_DST_COLOR,[Rx]:t.ONE_MINUS_DST_ALPHA,[bx]:t.CONSTANT_COLOR,[Dx]:t.ONE_MINUS_CONSTANT_COLOR,[Ux]:t.CONSTANT_ALPHA,[Nx]:t.ONE_MINUS_CONSTANT_ALPHA};function ve(L,oe,ae,Te,Se,$e,Ke,Et,Bt,et){if(L===zi){c===!0&&(we(t.BLEND),c=!1);return}if(c===!1&&(be(t.BLEND),c=!0),L!==xx){if(L!==_||et!==V){if((g!==ir||R!==ir)&&(t.blendEquation(t.FUNC_ADD),g=ir,R=ir),et)switch(L){case us:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dh:t.blendFunc(t.ONE,t.ONE);break;case hh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ph:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case us:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case hh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ph:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,C=null,A=null,I=null,M.set(0,0,0),T=0,_=L,V=et}return}Se=Se||oe,$e=$e||ae,Ke=Ke||Te,(oe!==g||Se!==R)&&(t.blendEquationSeparate(Ee[oe],Ee[Se]),g=oe,R=Se),(ae!==y||Te!==C||$e!==A||Ke!==I)&&(t.blendFuncSeparate(Ce[ae],Ce[Te],Ce[$e],Ce[Ke]),y=ae,C=Te,A=$e,I=Ke),(Et.equals(M)===!1||Bt!==T)&&(t.blendColor(Et.r,Et.g,Et.b,Bt),M.copy(Et),T=Bt),_=L,V=!1}function nt(L,oe){L.side===ri?we(t.CULL_FACE):be(t.CULL_FACE);let ae=L.side===nn;oe&&(ae=!ae),De(ae),L.blending===us&&L.transparent===!1?ve(zi):ve(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Te=L.stencilWrite;u.setTest(Te),Te&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),k(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?be(t.SAMPLE_ALPHA_TO_COVERAGE):we(t.SAMPLE_ALPHA_TO_COVERAGE)}function De(L){Y!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),Y=L)}function w(L){L!==gx?(be(t.CULL_FACE),L!==se&&(L===fh?t.cullFace(t.BACK):L===_x?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):we(t.CULL_FACE),se=L}function S(L){L!==b&&(D&&t.lineWidth(L),b=L)}function k(L,oe,ae){L?(be(t.POLYGON_OFFSET_FILL),(z!==oe||j!==ae)&&(t.polygonOffset(oe,ae),z=oe,j=ae)):we(t.POLYGON_OFFSET_FILL)}function ie(L){L?be(t.SCISSOR_TEST):we(t.SCISSOR_TEST)}function ee(L){L===void 0&&(L=t.TEXTURE0+q-1),$!==L&&(t.activeTexture(L),$=L)}function te(L,oe,ae){ae===void 0&&($===null?ae=t.TEXTURE0+q-1:ae=$);let Te=Z[ae];Te===void 0&&(Te={type:void 0,texture:void 0},Z[ae]=Te),(Te.type!==L||Te.texture!==oe)&&($!==ae&&(t.activeTexture(ae),$=ae),t.bindTexture(L,oe||Le[L]),Te.type=L,Te.texture=oe)}function xe(){const L=Z[$];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function de(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function je(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function P(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(L){fe.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),fe.copy(L))}function Be(L){ge.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),ge.copy(L))}function Ye(L,oe){let ae=d.get(oe);ae===void 0&&(ae=new WeakMap,d.set(oe,ae));let Te=ae.get(L);Te===void 0&&(Te=t.getUniformBlockIndex(oe,L.name),ae.set(L,Te))}function Fe(L,oe){const Te=d.get(oe).get(L);f.get(oe)!==Te&&(t.uniformBlockBinding(oe,Te,L.__bindingPointIndex),f.set(oe,Te))}function le(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},$=null,Z={},m={},v=new WeakMap,x=[],p=null,c=!1,_=null,g=null,y=null,C=null,R=null,A=null,I=null,M=new Ve(0,0,0),T=0,V=!1,Y=null,se=null,b=null,z=null,j=null,fe.set(0,0,t.canvas.width,t.canvas.height),ge.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:be,disable:we,bindFramebuffer:Xe,drawBuffers:F,useProgram:Mt,setBlending:ve,setMaterial:nt,setFlipSided:De,setCullFace:w,setLineWidth:S,setPolygonOffset:k,setScissorTest:ie,activeTexture:ee,bindTexture:te,unbindTexture:xe,compressedTexImage2D:de,compressedTexImage3D:me,texImage2D:ue,texImage3D:re,updateUBOMapping:Ye,uniformBlockBinding:Fe,texStorage2D:P,texStorage3D:Q,texSubImage2D:Ae,texSubImage3D:Ne,compressedTexSubImage2D:J,compressedTexSubImage3D:je,scissor:ye,viewport:Be,reset:le}}function _w(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,S){return m?new OffscreenCanvas(w,S):hl("canvas")}function x(w,S,k,ie){let ee=1;if((w.width>ie||w.height>ie)&&(ee=ie/Math.max(w.width,w.height)),ee<1||S===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const te=S?Wc:Math.floor,xe=te(ee*w.width),de=te(ee*w.height);d===void 0&&(d=v(xe,de));const me=k?v(xe,de):d;return me.width=xe,me.height=de,me.getContext("2d").drawImage(w,0,0,xe,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+xe+"x"+de+")."),me}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function p(w){return jh(w.width)&&jh(w.height)}function c(w){return a?!1:w.wrapS!==On||w.wrapT!==On||w.minFilter!==Wt&&w.minFilter!==yn}function _(w,S){return w.generateMipmaps&&S&&w.minFilter!==Wt&&w.minFilter!==yn}function g(w){t.generateMipmap(w)}function y(w,S,k,ie,ee=!1){if(a===!1)return S;if(w!==null){if(t[w]!==void 0)return t[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let te=S;if(S===t.RED&&(k===t.FLOAT&&(te=t.R32F),k===t.HALF_FLOAT&&(te=t.R16F),k===t.UNSIGNED_BYTE&&(te=t.R8)),S===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(te=t.R8UI),k===t.UNSIGNED_SHORT&&(te=t.R16UI),k===t.UNSIGNED_INT&&(te=t.R32UI),k===t.BYTE&&(te=t.R8I),k===t.SHORT&&(te=t.R16I),k===t.INT&&(te=t.R32I)),S===t.RG&&(k===t.FLOAT&&(te=t.RG32F),k===t.HALF_FLOAT&&(te=t.RG16F),k===t.UNSIGNED_BYTE&&(te=t.RG8)),S===t.RGBA){const xe=ee?ul:Je.getTransfer(ie);k===t.FLOAT&&(te=t.RGBA32F),k===t.HALF_FLOAT&&(te=t.RGBA16F),k===t.UNSIGNED_BYTE&&(te=xe===rt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function C(w,S,k){return _(w,k)===!0||w.isFramebufferTexture&&w.minFilter!==Wt&&w.minFilter!==yn?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function R(w){return w===Wt||w===_h||w===fu?t.NEAREST:t.LINEAR}function A(w){const S=w.target;S.removeEventListener("dispose",A),M(S),S.isVideoTexture&&f.delete(S)}function I(w){const S=w.target;S.removeEventListener("dispose",I),V(S)}function M(w){const S=i.get(w);if(S.__webglInit===void 0)return;const k=w.source,ie=h.get(k);if(ie){const ee=ie[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&T(w),Object.keys(ie).length===0&&h.delete(k)}i.remove(w)}function T(w){const S=i.get(w);t.deleteTexture(S.__webglTexture);const k=w.source,ie=h.get(k);delete ie[S.__cacheKey],o.memory.textures--}function V(w){const S=w.texture,k=i.get(w),ie=i.get(S);if(ie.__webglTexture!==void 0&&(t.deleteTexture(ie.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(k.__webglFramebuffer[ee]))for(let te=0;te<k.__webglFramebuffer[ee].length;te++)t.deleteFramebuffer(k.__webglFramebuffer[ee][te]);else t.deleteFramebuffer(k.__webglFramebuffer[ee]);k.__webglDepthbuffer&&t.deleteRenderbuffer(k.__webglDepthbuffer[ee])}else{if(Array.isArray(k.__webglFramebuffer))for(let ee=0;ee<k.__webglFramebuffer.length;ee++)t.deleteFramebuffer(k.__webglFramebuffer[ee]);else t.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&t.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&t.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let ee=0;ee<k.__webglColorRenderbuffer.length;ee++)k.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(k.__webglColorRenderbuffer[ee]);k.__webglDepthRenderbuffer&&t.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ee=0,te=S.length;ee<te;ee++){const xe=i.get(S[ee]);xe.__webglTexture&&(t.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(S[ee])}i.remove(S),i.remove(w)}let Y=0;function se(){Y=0}function b(){const w=Y;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),Y+=1,w}function z(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function j(w,S){const k=i.get(w);if(w.isVideoTexture&&nt(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const ie=w.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(k,w,S);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+S)}function q(w,S){const k=i.get(w);if(w.version>0&&k.__version!==w.version){fe(k,w,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+S)}function D(w,S){const k=i.get(w);if(w.version>0&&k.__version!==w.version){fe(k,w,S);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+S)}function O(w,S){const k=i.get(w);if(w.version>0&&k.__version!==w.version){ge(k,w,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+S)}const H={[Bc]:t.REPEAT,[On]:t.CLAMP_TO_EDGE,[Hc]:t.MIRRORED_REPEAT},$={[Wt]:t.NEAREST,[_h]:t.NEAREST_MIPMAP_NEAREST,[fu]:t.NEAREST_MIPMAP_LINEAR,[yn]:t.LINEAR,[Kx]:t.LINEAR_MIPMAP_NEAREST,[xo]:t.LINEAR_MIPMAP_LINEAR},Z={[uy]:t.NEVER,[my]:t.ALWAYS,[cy]:t.LESS,[h_]:t.LEQUAL,[fy]:t.EQUAL,[py]:t.GEQUAL,[dy]:t.GREATER,[hy]:t.NOTEQUAL};function X(w,S,k){if(k?(t.texParameteri(w,t.TEXTURE_WRAP_S,H[S.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,H[S.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,H[S.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,$[S.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,$[S.minFilter])):(t.texParameteri(w,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(w,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==On||S.wrapT!==On)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(w,t.TEXTURE_MAG_FILTER,R(S.magFilter)),t.texParameteri(w,t.TEXTURE_MIN_FILTER,R(S.minFilter)),S.minFilter!==Wt&&S.minFilter!==yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,Z[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Wt||S.minFilter!==fu&&S.minFilter!==xo||S.type===Li&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===yo&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(w,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function K(w,S){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",A));const ie=S.source;let ee=h.get(ie);ee===void 0&&(ee={},h.set(ie,ee));const te=z(S);if(te!==w.__cacheKey){ee[te]===void 0&&(ee[te]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ee[te].usedTimes++;const xe=ee[w.__cacheKey];xe!==void 0&&(ee[w.__cacheKey].usedTimes--,xe.usedTimes===0&&T(S)),w.__cacheKey=te,w.__webglTexture=ee[te].texture}return k}function fe(w,S,k){let ie=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ie=t.TEXTURE_3D);const ee=K(w,S),te=S.source;n.bindTexture(ie,w.__webglTexture,t.TEXTURE0+k);const xe=i.get(te);if(te.version!==xe.__version||ee===!0){n.activeTexture(t.TEXTURE0+k);const de=Je.getPrimaries(Je.workingColorSpace),me=S.colorSpace===Mn?null:Je.getPrimaries(S.colorSpace),Ae=S.colorSpace===Mn||de===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Ne=c(S)&&p(S.image)===!1;let J=x(S.image,Ne,!1,r.maxTextureSize);J=De(S,J);const je=p(J)||a,P=s.convert(S.format,S.colorSpace);let Q=s.convert(S.type),ue=y(S.internalFormat,P,Q,S.colorSpace,S.isVideoTexture);X(ie,S,je);let re;const ye=S.mipmaps,Be=a&&S.isVideoTexture!==!0&&ue!==f_,Ye=xe.__version===void 0||ee===!0,Fe=C(S,J,je);if(S.isDepthTexture)ue=t.DEPTH_COMPONENT,a?S.type===Li?ue=t.DEPTH_COMPONENT32F:S.type===Pi?ue=t.DEPTH_COMPONENT24:S.type===cr?ue=t.DEPTH24_STENCIL8:ue=t.DEPTH_COMPONENT16:S.type===Li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===fr&&ue===t.DEPTH_COMPONENT&&S.type!==Wf&&S.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Pi,Q=s.convert(S.type)),S.format===ys&&ue===t.DEPTH_COMPONENT&&(ue=t.DEPTH_STENCIL,S.type!==cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=cr,Q=s.convert(S.type))),Ye&&(Be?n.texStorage2D(t.TEXTURE_2D,1,ue,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,ue,J.width,J.height,0,P,Q,null));else if(S.isDataTexture)if(ye.length>0&&je){Be&&Ye&&n.texStorage2D(t.TEXTURE_2D,Fe,ue,ye[0].width,ye[0].height);for(let le=0,L=ye.length;le<L;le++)re=ye[le],Be?n.texSubImage2D(t.TEXTURE_2D,le,0,0,re.width,re.height,P,Q,re.data):n.texImage2D(t.TEXTURE_2D,le,ue,re.width,re.height,0,P,Q,re.data);S.generateMipmaps=!1}else Be?(Ye&&n.texStorage2D(t.TEXTURE_2D,Fe,ue,J.width,J.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,J.width,J.height,P,Q,J.data)):n.texImage2D(t.TEXTURE_2D,0,ue,J.width,J.height,0,P,Q,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Be&&Ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Fe,ue,ye[0].width,ye[0].height,J.depth);for(let le=0,L=ye.length;le<L;le++)re=ye[le],S.format!==Fn?P!==null?Be?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,re.width,re.height,J.depth,P,re.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,le,ue,re.width,re.height,J.depth,0,re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?n.texSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,re.width,re.height,J.depth,P,Q,re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,le,ue,re.width,re.height,J.depth,0,P,Q,re.data)}else{Be&&Ye&&n.texStorage2D(t.TEXTURE_2D,Fe,ue,ye[0].width,ye[0].height);for(let le=0,L=ye.length;le<L;le++)re=ye[le],S.format!==Fn?P!==null?Be?n.compressedTexSubImage2D(t.TEXTURE_2D,le,0,0,re.width,re.height,P,re.data):n.compressedTexImage2D(t.TEXTURE_2D,le,ue,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?n.texSubImage2D(t.TEXTURE_2D,le,0,0,re.width,re.height,P,Q,re.data):n.texImage2D(t.TEXTURE_2D,le,ue,re.width,re.height,0,P,Q,re.data)}else if(S.isDataArrayTexture)Be?(Ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Fe,ue,J.width,J.height,J.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,P,Q,J.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ue,J.width,J.height,J.depth,0,P,Q,J.data);else if(S.isData3DTexture)Be?(Ye&&n.texStorage3D(t.TEXTURE_3D,Fe,ue,J.width,J.height,J.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,P,Q,J.data)):n.texImage3D(t.TEXTURE_3D,0,ue,J.width,J.height,J.depth,0,P,Q,J.data);else if(S.isFramebufferTexture){if(Ye)if(Be)n.texStorage2D(t.TEXTURE_2D,Fe,ue,J.width,J.height);else{let le=J.width,L=J.height;for(let oe=0;oe<Fe;oe++)n.texImage2D(t.TEXTURE_2D,oe,ue,le,L,0,P,Q,null),le>>=1,L>>=1}}else if(ye.length>0&&je){Be&&Ye&&n.texStorage2D(t.TEXTURE_2D,Fe,ue,ye[0].width,ye[0].height);for(let le=0,L=ye.length;le<L;le++)re=ye[le],Be?n.texSubImage2D(t.TEXTURE_2D,le,0,0,P,Q,re):n.texImage2D(t.TEXTURE_2D,le,ue,P,Q,re);S.generateMipmaps=!1}else Be?(Ye&&n.texStorage2D(t.TEXTURE_2D,Fe,ue,J.width,J.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,P,Q,J)):n.texImage2D(t.TEXTURE_2D,0,ue,P,Q,J);_(S,je)&&g(ie),xe.__version=te.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function ge(w,S,k){if(S.image.length!==6)return;const ie=K(w,S),ee=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+k);const te=i.get(ee);if(ee.version!==te.__version||ie===!0){n.activeTexture(t.TEXTURE0+k);const xe=Je.getPrimaries(Je.workingColorSpace),de=S.colorSpace===Mn?null:Je.getPrimaries(S.colorSpace),me=S.colorSpace===Mn||xe===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ae=S.isCompressedTexture||S.image[0].isCompressedTexture,Ne=S.image[0]&&S.image[0].isDataTexture,J=[];for(let le=0;le<6;le++)!Ae&&!Ne?J[le]=x(S.image[le],!1,!0,r.maxCubemapSize):J[le]=Ne?S.image[le].image:S.image[le],J[le]=De(S,J[le]);const je=J[0],P=p(je)||a,Q=s.convert(S.format,S.colorSpace),ue=s.convert(S.type),re=y(S.internalFormat,Q,ue,S.colorSpace),ye=a&&S.isVideoTexture!==!0,Be=te.__version===void 0||ie===!0;let Ye=C(S,je,P);X(t.TEXTURE_CUBE_MAP,S,P);let Fe;if(Ae){ye&&Be&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ye,re,je.width,je.height);for(let le=0;le<6;le++){Fe=J[le].mipmaps;for(let L=0;L<Fe.length;L++){const oe=Fe[L];S.format!==Fn?Q!==null?ye?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,L,0,0,oe.width,oe.height,Q,oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,L,re,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ye?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,L,0,0,oe.width,oe.height,Q,ue,oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,L,re,oe.width,oe.height,0,Q,ue,oe.data)}}}else{Fe=S.mipmaps,ye&&Be&&(Fe.length>0&&Ye++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Ye,re,J[0].width,J[0].height));for(let le=0;le<6;le++)if(Ne){ye?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,J[le].width,J[le].height,Q,ue,J[le].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,re,J[le].width,J[le].height,0,Q,ue,J[le].data);for(let L=0;L<Fe.length;L++){const ae=Fe[L].image[le].image;ye?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,L+1,0,0,ae.width,ae.height,Q,ue,ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,L+1,re,ae.width,ae.height,0,Q,ue,ae.data)}}else{ye?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Q,ue,J[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,re,Q,ue,J[le]);for(let L=0;L<Fe.length;L++){const oe=Fe[L];ye?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,L+1,0,0,Q,ue,oe.image[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,L+1,re,Q,ue,oe.image[le])}}}_(S,P)&&g(t.TEXTURE_CUBE_MAP),te.__version=ee.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function _e(w,S,k,ie,ee,te){const xe=s.convert(k.format,k.colorSpace),de=s.convert(k.type),me=y(k.internalFormat,xe,de,k.colorSpace);if(!i.get(S).__hasExternalTextures){const Ne=Math.max(1,S.width>>te),J=Math.max(1,S.height>>te);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,te,me,Ne,J,S.depth,0,xe,de,null):n.texImage2D(ee,te,me,Ne,J,0,xe,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),ve(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,i.get(k).__webglTexture,0,Ce(S)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,i.get(k).__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Le(w,S,k){if(t.bindRenderbuffer(t.RENDERBUFFER,w),S.depthBuffer&&!S.stencilBuffer){let ie=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(k||ve(S)){const ee=S.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Li?ie=t.DEPTH_COMPONENT32F:ee.type===Pi&&(ie=t.DEPTH_COMPONENT24));const te=Ce(S);ve(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,ie,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,te,ie,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,ie,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,w)}else if(S.depthBuffer&&S.stencilBuffer){const ie=Ce(S);k&&ve(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,S.width,S.height):ve(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,w)}else{const ie=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ee=0;ee<ie.length;ee++){const te=ie[ee],xe=s.convert(te.format,te.colorSpace),de=s.convert(te.type),me=y(te.internalFormat,xe,de,te.colorSpace),Ae=Ce(S);k&&ve(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,me,S.width,S.height):ve(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,me,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,me,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function be(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);const ie=i.get(S.depthTexture).__webglTexture,ee=Ce(S);if(S.depthTexture.format===fr)ve(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(S.depthTexture.format===ys)ve(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function we(w){const S=i.get(w),k=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");be(S.__webglFramebuffer,w)}else if(k){S.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[ie]),S.__webglDepthbuffer[ie]=t.createRenderbuffer(),Le(S.__webglDepthbuffer[ie],w,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),Le(S.__webglDepthbuffer,w,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Xe(w,S,k){const ie=i.get(w);S!==void 0&&_e(ie.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&we(w)}function F(w){const S=w.texture,k=i.get(w),ie=i.get(S);w.addEventListener("dispose",I),w.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=S.version,o.memory.textures++);const ee=w.isWebGLCubeRenderTarget===!0,te=w.isWebGLMultipleRenderTargets===!0,xe=p(w)||a;if(ee){k.__webglFramebuffer=[];for(let de=0;de<6;de++)if(a&&S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[de]=[];for(let me=0;me<S.mipmaps.length;me++)k.__webglFramebuffer[de][me]=t.createFramebuffer()}else k.__webglFramebuffer[de]=t.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let de=0;de<S.mipmaps.length;de++)k.__webglFramebuffer[de]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(te)if(r.drawBuffers){const de=w.texture;for(let me=0,Ae=de.length;me<Ae;me++){const Ne=i.get(de[me]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&ve(w)===!1){const de=te?S:[S];k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let me=0;me<de.length;me++){const Ae=de[me];k.__webglColorRenderbuffer[me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[me]);const Ne=s.convert(Ae.format,Ae.colorSpace),J=s.convert(Ae.type),je=y(Ae.internalFormat,Ne,J,Ae.colorSpace,w.isXRRenderTarget===!0),P=Ce(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,P,je,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,k.__webglColorRenderbuffer[me])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),Le(k.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),X(t.TEXTURE_CUBE_MAP,S,xe);for(let de=0;de<6;de++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)_e(k.__webglFramebuffer[de][me],w,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,me);else _e(k.__webglFramebuffer[de],w,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);_(S,xe)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(te){const de=w.texture;for(let me=0,Ae=de.length;me<Ae;me++){const Ne=de[me],J=i.get(Ne);n.bindTexture(t.TEXTURE_2D,J.__webglTexture),X(t.TEXTURE_2D,Ne,xe),_e(k.__webglFramebuffer,w,Ne,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,0),_(Ne,xe)&&g(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?de=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(de,ie.__webglTexture),X(de,S,xe),a&&S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)_e(k.__webglFramebuffer[me],w,S,t.COLOR_ATTACHMENT0,de,me);else _e(k.__webglFramebuffer,w,S,t.COLOR_ATTACHMENT0,de,0);_(S,xe)&&g(de),n.unbindTexture()}w.depthBuffer&&we(w)}function Mt(w){const S=p(w)||a,k=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ie=0,ee=k.length;ie<ee;ie++){const te=k[ie];if(_(te,S)){const xe=w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,de=i.get(te).__webglTexture;n.bindTexture(xe,de),g(xe),n.unbindTexture()}}}function Ee(w){if(a&&w.samples>0&&ve(w)===!1){const S=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],k=w.width,ie=w.height;let ee=t.COLOR_BUFFER_BIT;const te=[],xe=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=i.get(w),me=w.isWebGLMultipleRenderTargets===!0;if(me)for(let Ae=0;Ae<S.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Ae=0;Ae<S.length;Ae++){te.push(t.COLOR_ATTACHMENT0+Ae),w.depthBuffer&&te.push(xe);const Ne=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(Ne===!1&&(w.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),me&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,de.__webglColorRenderbuffer[Ae]),Ne===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[xe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[xe])),me){const J=i.get(S[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,J,0)}t.blitFramebuffer(0,0,k,ie,0,0,k,ie,ee,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,te)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),me)for(let Ae=0;Ae<S.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,de.__webglColorRenderbuffer[Ae]);const Ne=i.get(S[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,Ne,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function Ce(w){return Math.min(r.maxSamples,w.samples)}function ve(w){const S=i.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function nt(w){const S=o.render.frame;f.get(w)!==S&&(f.set(w,S),w.update())}function De(w,S){const k=w.colorSpace,ie=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Gc||k!==pi&&k!==Mn&&(Je.getTransfer(k)===rt?a===!1?e.has("EXT_sRGB")===!0&&ie===Fn?(w.format=Gc,w.minFilter=yn,w.generateMipmaps=!1):S=m_.sRGBToLinear(S):(ie!==Fn||ee!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}this.allocateTextureUnit=b,this.resetTextureUnits=se,this.setTexture2D=j,this.setTexture2DArray=q,this.setTexture3D=D,this.setTextureCube=O,this.rebindTextures=Xe,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ve}function vw(t,e,n){const i=n.isWebGL2;function r(s,o=Mn){let a;const l=Je.getTransfer(o);if(s===Hi)return t.UNSIGNED_BYTE;if(s===o_)return t.UNSIGNED_SHORT_4_4_4_4;if(s===a_)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Zx)return t.BYTE;if(s===Qx)return t.SHORT;if(s===Wf)return t.UNSIGNED_SHORT;if(s===s_)return t.INT;if(s===Pi)return t.UNSIGNED_INT;if(s===Li)return t.FLOAT;if(s===yo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Jx)return t.ALPHA;if(s===Fn)return t.RGBA;if(s===ey)return t.LUMINANCE;if(s===ty)return t.LUMINANCE_ALPHA;if(s===fr)return t.DEPTH_COMPONENT;if(s===ys)return t.DEPTH_STENCIL;if(s===Gc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ny)return t.RED;if(s===l_)return t.RED_INTEGER;if(s===iy)return t.RG;if(s===u_)return t.RG_INTEGER;if(s===c_)return t.RGBA_INTEGER;if(s===du||s===hu||s===pu||s===mu)if(l===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===du)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===hu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===pu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===du)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===hu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===pu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===mu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===vh||s===xh||s===yh||s===Sh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===vh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===xh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===yh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===f_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Mh||s===Eh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Mh)return l===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Eh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Th||s===wh||s===Ah||s===Rh||s===Ch||s===Ph||s===Lh||s===bh||s===Dh||s===Uh||s===Nh||s===Ih||s===Oh||s===Fh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Th)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ah)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Rh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ch)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ph)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Lh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===bh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Dh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Uh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Nh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ih)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Oh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Fh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gu||s===kh||s===zh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===gu)return l===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===kh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===zh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ry||s===Bh||s===Hh||s===Gh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===gu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Bh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Hh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Gh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===cr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class xw extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _a extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yw={type:"move"};class Bu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _a,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _a,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _a,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),c=this._getHandJoint(u,x);p!==null&&(c.matrix.fromArray(p.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=p.radius),c.visible=p!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=f.position.distanceTo(d.position),m=.02,v=.005;u.inputState.pinching&&h>m+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new _a;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Sw extends Er{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,d=null,h=null,m=null,v=null;const x=n.getContextAttributes();let p=null,c=null;const _=[],g=[],y=new ze;let C=null;const R=new Sn;R.layers.enable(1),R.viewport=new Lt;const A=new Sn;A.layers.enable(2),A.viewport=new Lt;const I=[R,A],M=new xw;M.layers.enable(1),M.layers.enable(2);let T=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=_[X];return K===void 0&&(K=new Bu,_[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=_[X];return K===void 0&&(K=new Bu,_[X]=K),K.getGripSpace()},this.getHand=function(X){let K=_[X];return K===void 0&&(K=new Bu,_[X]=K),K.getHandSpace()};function Y(X){const K=g.indexOf(X.inputSource);if(K===-1)return;const fe=_[K];fe!==void 0&&(fe.update(X.inputSource,X.frame,u||o),fe.dispatchEvent({type:X.type,data:X.inputSource}))}function se(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",se),r.removeEventListener("inputsourceschange",b);for(let X=0;X<_.length;X++){const K=g[X];K!==null&&(g[X]=null,_[X].disconnect(K))}T=null,V=null,e.setRenderTarget(p),m=null,h=null,d=null,r=null,c=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",se),r.addEventListener("inputsourceschange",b),x.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),c=new vr(m.framebufferWidth,m.framebufferHeight,{format:Fn,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let K=null,fe=null,ge=null;x.depth&&(ge=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=x.stencil?ys:fr,fe=x.stencil?cr:Pi);const _e={colorFormat:n.RGBA8,depthFormat:ge,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(_e),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),c=new vr(h.textureWidth,h.textureHeight,{format:Fn,type:Hi,depthTexture:new R_(h.textureWidth,h.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Le=e.properties.get(c);Le.__ignoreDepthValues=h.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Z.setContext(r),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function b(X){for(let K=0;K<X.removed.length;K++){const fe=X.removed[K],ge=g.indexOf(fe);ge>=0&&(g[ge]=null,_[ge].disconnect(fe))}for(let K=0;K<X.added.length;K++){const fe=X.added[K];let ge=g.indexOf(fe);if(ge===-1){for(let Le=0;Le<_.length;Le++)if(Le>=g.length){g.push(fe),ge=Le;break}else if(g[Le]===null){g[Le]=fe,ge=Le;break}if(ge===-1)break}const _e=_[ge];_e&&_e.connect(fe)}}const z=new U,j=new U;function q(X,K,fe){z.setFromMatrixPosition(K.matrixWorld),j.setFromMatrixPosition(fe.matrixWorld);const ge=z.distanceTo(j),_e=K.projectionMatrix.elements,Le=fe.projectionMatrix.elements,be=_e[14]/(_e[10]-1),we=_e[14]/(_e[10]+1),Xe=(_e[9]+1)/_e[5],F=(_e[9]-1)/_e[5],Mt=(_e[8]-1)/_e[0],Ee=(Le[8]+1)/Le[0],Ce=be*Mt,ve=be*Ee,nt=ge/(-Mt+Ee),De=nt*-Mt;K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(De),X.translateZ(nt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const w=be+nt,S=we+nt,k=Ce-De,ie=ve+(ge-De),ee=Xe*we/S*w,te=F*we/S*w;X.projectionMatrix.makePerspective(k,ie,ee,te,w,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function D(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;M.near=A.near=R.near=X.near,M.far=A.far=R.far=X.far,(T!==M.near||V!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,V=M.far);const K=X.parent,fe=M.cameras;D(M,K);for(let ge=0;ge<fe.length;ge++)D(fe[ge],K);fe.length===2?q(M,R,A):M.projectionMatrix.copy(R.projectionMatrix),O(X,M,K)};function O(X,K,fe){fe===null?X.matrix.copy(K.matrixWorld):(X.matrix.copy(fe.matrixWorld),X.matrix.invert(),X.matrix.multiply(K.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Vc*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)};let H=null;function $(X,K){if(f=K.getViewerPose(u||o),v=K,f!==null){const fe=f.views;m!==null&&(e.setRenderTargetFramebuffer(c,m.framebuffer),e.setRenderTarget(c));let ge=!1;fe.length!==M.cameras.length&&(M.cameras.length=0,ge=!0);for(let _e=0;_e<fe.length;_e++){const Le=fe[_e];let be=null;if(m!==null)be=m.getViewport(Le);else{const Xe=d.getViewSubImage(h,Le);be=Xe.viewport,_e===0&&(e.setRenderTargetTextures(c,Xe.colorTexture,h.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(c))}let we=I[_e];we===void 0&&(we=new Sn,we.layers.enable(_e),we.viewport=new Lt,I[_e]=we),we.matrix.fromArray(Le.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Le.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(be.x,be.y,be.width,be.height),_e===0&&(M.matrix.copy(we.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ge===!0&&M.cameras.push(we)}}for(let fe=0;fe<_.length;fe++){const ge=g[fe],_e=_[fe];ge!==null&&_e!==void 0&&_e.update(ge,K,u||o)}H&&H(X,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),v=null}const Z=new A_;Z.setAnimationLoop($),this.setAnimationLoop=function(X){H=X},this.dispose=function(){}}}function Mw(t,e){function n(p,c){p.matrixAutoUpdate===!0&&p.updateMatrix(),c.value.copy(p.matrix)}function i(p,c){c.color.getRGB(p.fogColor.value,M_(t)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function r(p,c,_,g,y){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(p,c):c.isMeshToonMaterial?(s(p,c),d(p,c)):c.isMeshPhongMaterial?(s(p,c),f(p,c)):c.isMeshStandardMaterial?(s(p,c),h(p,c),c.isMeshPhysicalMaterial&&m(p,c,y)):c.isMeshMatcapMaterial?(s(p,c),v(p,c)):c.isMeshDepthMaterial?s(p,c):c.isMeshDistanceMaterial?(s(p,c),x(p,c)):c.isMeshNormalMaterial?s(p,c):c.isLineBasicMaterial?(o(p,c),c.isLineDashedMaterial&&a(p,c)):c.isPointsMaterial?l(p,c,_,g):c.isSpriteMaterial?u(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.bumpMap&&(p.bumpMap.value=c.bumpMap,n(c.bumpMap,p.bumpMapTransform),p.bumpScale.value=c.bumpScale,c.side===nn&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,n(c.normalMap,p.normalMapTransform),p.normalScale.value.copy(c.normalScale),c.side===nn&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,n(c.displacementMap,p.displacementMapTransform),p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,p.emissiveMapTransform)),c.specularMap&&(p.specularMap.value=c.specularMap,n(c.specularMap,p.specularMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const _=e.get(c).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap){p.lightMap.value=c.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=c.lightMapIntensity*g,n(c.lightMap,p.lightMapTransform)}c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,p.aoMapTransform))}function o(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform))}function a(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function l(p,c,_,g){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*_,p.scale.value=g*.5,c.map&&(p.map.value=c.map,n(c.map,p.uvTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function u(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function f(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function d(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function h(p,c){p.metalness.value=c.metalness,c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,p.metalnessMapTransform)),p.roughness.value=c.roughness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,p.roughnessMapTransform)),e.get(c).envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function m(p,c,_){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,p.sheenColorMapTransform)),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,p.sheenRoughnessMapTransform))),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,p.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(p.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===nn&&p.clearcoatNormalScale.value.negate())),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,p.iridescenceMapTransform)),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,p.transmissionMapTransform)),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(p.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(p.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,p.specularColorMapTransform)),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,c){c.matcap&&(p.matcap.value=c.matcap)}function x(p,c){const _=e.get(c).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Ew(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,g){const y=g.program;i.uniformBlockBinding(_,y)}function u(_,g){let y=r[_.id];y===void 0&&(v(_),y=f(_),r[_.id]=y,_.addEventListener("dispose",p));const C=g.program;i.updateUBOMapping(_,C);const R=e.render.frame;s[_.id]!==R&&(h(_),s[_.id]=R)}function f(_){const g=d();_.__bindingPointIndex=g;const y=t.createBuffer(),C=_.__size,R=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,y),y}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const g=r[_.id],y=_.uniforms,C=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let R=0,A=y.length;R<A;R++){const I=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,T=I.length;M<T;M++){const V=I[M];if(m(V,R,M,C)===!0){const Y=V.__offset,se=Array.isArray(V.value)?V.value:[V.value];let b=0;for(let z=0;z<se.length;z++){const j=se[z],q=x(j);typeof j=="number"||typeof j=="boolean"?(V.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,Y+b,V.__data)):j.isMatrix3?(V.__data[0]=j.elements[0],V.__data[1]=j.elements[1],V.__data[2]=j.elements[2],V.__data[3]=0,V.__data[4]=j.elements[3],V.__data[5]=j.elements[4],V.__data[6]=j.elements[5],V.__data[7]=0,V.__data[8]=j.elements[6],V.__data[9]=j.elements[7],V.__data[10]=j.elements[8],V.__data[11]=0):(j.toArray(V.__data,b),b+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Y,V.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,g,y,C){const R=_.value,A=g+"_"+y;if(C[A]===void 0)return typeof R=="number"||typeof R=="boolean"?C[A]=R:C[A]=R.clone(),!0;{const I=C[A];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return C[A]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function v(_){const g=_.uniforms;let y=0;const C=16;for(let A=0,I=g.length;A<I;A++){const M=Array.isArray(g[A])?g[A]:[g[A]];for(let T=0,V=M.length;T<V;T++){const Y=M[T],se=Array.isArray(Y.value)?Y.value:[Y.value];for(let b=0,z=se.length;b<z;b++){const j=se[b],q=x(j),D=y%C;D!==0&&C-D<q.boundary&&(y+=C-D),Y.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=y,y+=q.storage}}}const R=y%C;return R>0&&(y+=C-R),_.__size=y,_.__cache={},this}function x(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function p(_){const g=_.target;g.removeEventListener("dispose",p);const y=o.indexOf(g.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function c(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class U_{constructor(e={}){const{canvas:n=vy(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),v=new Int32Array(4);let x=null,p=null;const c=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pt,this._useLegacyLights=!1,this.toneMapping=Bi,this.toneMappingExposure=1;const g=this;let y=!1,C=0,R=0,A=null,I=-1,M=null;const T=new Lt,V=new Lt;let Y=null;const se=new Ve(0);let b=0,z=n.width,j=n.height,q=1,D=null,O=null;const H=new Lt(0,0,z,j),$=new Lt(0,0,z,j);let Z=!1;const X=new w_;let K=!1,fe=!1,ge=null;const _e=new xt,Le=new ze,be=new U,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return A===null?q:1}let F=i;function Mt(E,N){for(let G=0;G<E.length;G++){const W=E[G],B=n.getContext(W,N);if(B!==null)return B}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vf}`),n.addEventListener("webglcontextlost",le,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",oe,!1),F===null){const N=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&N.shift(),F=Mt(N,E),F===null)throw Mt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ee,Ce,ve,nt,De,w,S,k,ie,ee,te,xe,de,me,Ae,Ne,J,je,P,Q,ue,re,ye,Be;function Ye(){Ee=new UE(F),Ce=new AE(F,Ee,e),Ee.init(Ce),re=new vw(F,Ee,Ce),ve=new gw(F,Ee,Ce),nt=new OE(F),De=new nw,w=new _w(F,Ee,ve,De,Ce,re,nt),S=new CE(g),k=new DE(g),ie=new Vy(F,Ce),ye=new TE(F,Ee,ie,Ce),ee=new NE(F,ie,nt,ye),te=new BE(F,ee,ie,nt),P=new zE(F,Ce,w),Ne=new RE(De),xe=new tw(g,S,k,Ee,Ce,ye,Ne),de=new Mw(g,De),me=new rw,Ae=new cw(Ee,Ce),je=new EE(g,S,k,ve,te,h,l),J=new mw(g,te,Ce),Be=new Ew(F,nt,Ce,ve),Q=new wE(F,Ee,nt,Ce),ue=new IE(F,Ee,nt,Ce),nt.programs=xe.programs,g.capabilities=Ce,g.extensions=Ee,g.properties=De,g.renderLists=me,g.shadowMap=J,g.state=ve,g.info=nt}Ye();const Fe=new Sw(g,F);this.xr=Fe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=Ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(z,j,!1))},this.getSize=function(E){return E.set(z,j)},this.setSize=function(E,N,G=!0){if(Fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=E,j=N,n.width=Math.floor(E*q),n.height=Math.floor(N*q),G===!0&&(n.style.width=E+"px",n.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(z*q,j*q).floor()},this.setDrawingBufferSize=function(E,N,G){z=E,j=N,q=G,n.width=Math.floor(E*G),n.height=Math.floor(N*G),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(H)},this.setViewport=function(E,N,G,W){E.isVector4?H.set(E.x,E.y,E.z,E.w):H.set(E,N,G,W),ve.viewport(T.copy(H).multiplyScalar(q).floor())},this.getScissor=function(E){return E.copy($)},this.setScissor=function(E,N,G,W){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,N,G,W),ve.scissor(V.copy($).multiplyScalar(q).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(E){ve.setScissorTest(Z=E)},this.setOpaqueSort=function(E){D=E},this.setTransparentSort=function(E){O=E},this.getClearColor=function(E){return E.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(E=!0,N=!0,G=!0){let W=0;if(E){let B=!1;if(A!==null){const he=A.texture.format;B=he===c_||he===u_||he===l_}if(B){const he=A.texture.type,Me=he===Hi||he===Pi||he===Wf||he===cr||he===o_||he===a_,Re=je.getClearColor(),Pe=je.getClearAlpha(),ke=Re.r,Ue=Re.g,Ie=Re.b;Me?(m[0]=ke,m[1]=Ue,m[2]=Ie,m[3]=Pe,F.clearBufferuiv(F.COLOR,0,m)):(v[0]=ke,v[1]=Ue,v[2]=Ie,v[3]=Pe,F.clearBufferiv(F.COLOR,0,v))}else W|=F.COLOR_BUFFER_BIT}N&&(W|=F.DEPTH_BUFFER_BIT),G&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",le,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",oe,!1),me.dispose(),Ae.dispose(),De.dispose(),S.dispose(),k.dispose(),te.dispose(),ye.dispose(),Be.dispose(),xe.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Bt),Fe.removeEventListener("sessionend",et),ge&&(ge.dispose(),ge=null),Ht.stop()};function le(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=nt.autoReset,N=J.enabled,G=J.autoUpdate,W=J.needsUpdate,B=J.type;Ye(),nt.autoReset=E,J.enabled=N,J.autoUpdate=G,J.needsUpdate=W,J.type=B}function oe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ae(E){const N=E.target;N.removeEventListener("dispose",ae),Te(N)}function Te(E){Se(E),De.remove(E)}function Se(E){const N=De.get(E).programs;N!==void 0&&(N.forEach(function(G){xe.releaseProgram(G)}),E.isShaderMaterial&&xe.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,G,W,B,he){N===null&&(N=we);const Me=B.isMesh&&B.matrixWorld.determinant()<0,Re=z_(E,N,G,W,B);ve.setMaterial(W,Me);let Pe=G.index,ke=1;if(W.wireframe===!0){if(Pe=ee.getWireframeAttribute(G),Pe===void 0)return;ke=2}const Ue=G.drawRange,Ie=G.attributes.position;let ht=Ue.start*ke,sn=(Ue.start+Ue.count)*ke;he!==null&&(ht=Math.max(ht,he.start*ke),sn=Math.min(sn,(he.start+he.count)*ke)),Pe!==null?(ht=Math.max(ht,0),sn=Math.min(sn,Pe.count)):Ie!=null&&(ht=Math.max(ht,0),sn=Math.min(sn,Ie.count));const Tt=sn-ht;if(Tt<0||Tt===1/0)return;ye.setup(B,W,Re,G,Pe);let $n,at=Q;if(Pe!==null&&($n=ie.get(Pe),at=ue,at.setIndex($n)),B.isMesh)W.wireframe===!0?(ve.setLineWidth(W.wireframeLinewidth*Xe()),at.setMode(F.LINES)):at.setMode(F.TRIANGLES);else if(B.isLine){let He=W.linewidth;He===void 0&&(He=1),ve.setLineWidth(He*Xe()),B.isLineSegments?at.setMode(F.LINES):B.isLineLoop?at.setMode(F.LINE_LOOP):at.setMode(F.LINE_STRIP)}else B.isPoints?at.setMode(F.POINTS):B.isSprite&&at.setMode(F.TRIANGLES);if(B.isBatchedMesh)at.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)at.renderInstances(ht,Tt,B.count);else if(G.isInstancedBufferGeometry){const He=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Il=Math.min(G.instanceCount,He);at.renderInstances(ht,Tt,Il)}else at.render(ht,Tt)};function $e(E,N,G){E.transparent===!0&&E.side===ri&&E.forceSinglePass===!1?(E.side=nn,E.needsUpdate=!0,bo(E,N,G),E.side=Wi,E.needsUpdate=!0,bo(E,N,G),E.side=ri):bo(E,N,G)}this.compile=function(E,N,G=null){G===null&&(G=E),p=Ae.get(G),p.init(),_.push(p),G.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),E!==G&&E.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights(g._useLegacyLights);const W=new Set;return E.traverse(function(B){const he=B.material;if(he)if(Array.isArray(he))for(let Me=0;Me<he.length;Me++){const Re=he[Me];$e(Re,G,B),W.add(Re)}else $e(he,G,B),W.add(he)}),_.pop(),p=null,W},this.compileAsync=function(E,N,G=null){const W=this.compile(E,N,G);return new Promise(B=>{function he(){if(W.forEach(function(Me){De.get(Me).currentProgram.isReady()&&W.delete(Me)}),W.size===0){B(E);return}setTimeout(he,10)}Ee.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Ke=null;function Et(E){Ke&&Ke(E)}function Bt(){Ht.stop()}function et(){Ht.start()}const Ht=new A_;Ht.setAnimationLoop(Et),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(E){Ke=E,Fe.setAnimationLoop(E),E===null?Ht.stop():Ht.start()},Fe.addEventListener("sessionstart",Bt),Fe.addEventListener("sessionend",et),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(N),N=Fe.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,N,A),p=Ae.get(E,_.length),p.init(),_.push(p),_e.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(_e),fe=this.localClippingEnabled,K=Ne.init(this.clippingPlanes,fe),x=me.get(E,c.length),x.init(),c.push(x),Gn(E,N,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(D,O),this.info.render.frame++,K===!0&&Ne.beginShadows();const G=p.state.shadowsArray;if(J.render(G,E,N),K===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),je.render(x,E),p.setupLights(g._useLegacyLights),N.isArrayCamera){const W=N.cameras;for(let B=0,he=W.length;B<he;B++){const Me=W[B];Kf(x,E,Me,Me.viewport)}}else Kf(x,E,N);A!==null&&(w.updateMultisampleRenderTarget(A),w.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(g,E,N),ye.resetDefaultState(),I=-1,M=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,c.pop(),c.length>0?x=c[c.length-1]:x=null};function Gn(E,N,G,W){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){W&&be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_e);const Me=te.update(E),Re=E.material;Re.visible&&x.push(E,Me,Re,G,be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){const Me=te.update(E),Re=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),be.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),be.copy(Me.boundingSphere.center)),be.applyMatrix4(E.matrixWorld).applyMatrix4(_e)),Array.isArray(Re)){const Pe=Me.groups;for(let ke=0,Ue=Pe.length;ke<Ue;ke++){const Ie=Pe[ke],ht=Re[Ie.materialIndex];ht&&ht.visible&&x.push(E,Me,ht,G,be.z,Ie)}}else Re.visible&&x.push(E,Me,Re,G,be.z,null)}}const he=E.children;for(let Me=0,Re=he.length;Me<Re;Me++)Gn(he[Me],N,G,W)}function Kf(E,N,G,W){const B=E.opaque,he=E.transmissive,Me=E.transparent;p.setupLightsView(G),K===!0&&Ne.setGlobalState(g.clippingPlanes,G),he.length>0&&k_(B,he,N,G),W&&ve.viewport(T.copy(W)),B.length>0&&Lo(B,N,G),he.length>0&&Lo(he,N,G),Me.length>0&&Lo(Me,N,G),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function k_(E,N,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const he=Ce.isWebGL2;ge===null&&(ge=new vr(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?yo:Hi,minFilter:xo,samples:he?4:0})),g.getDrawingBufferSize(Le),he?ge.setSize(Le.x,Le.y):ge.setSize(Wc(Le.x),Wc(Le.y));const Me=g.getRenderTarget();g.setRenderTarget(ge),g.getClearColor(se),b=g.getClearAlpha(),b<1&&g.setClearColor(16777215,.5),g.clear();const Re=g.toneMapping;g.toneMapping=Bi,Lo(E,G,W),w.updateMultisampleRenderTarget(ge),w.updateRenderTargetMipmap(ge);let Pe=!1;for(let ke=0,Ue=N.length;ke<Ue;ke++){const Ie=N[ke],ht=Ie.object,sn=Ie.geometry,Tt=Ie.material,$n=Ie.group;if(Tt.side===ri&&ht.layers.test(W.layers)){const at=Tt.side;Tt.side=nn,Tt.needsUpdate=!0,Zf(ht,G,W,sn,Tt,$n),Tt.side=at,Tt.needsUpdate=!0,Pe=!0}}Pe===!0&&(w.updateMultisampleRenderTarget(ge),w.updateRenderTargetMipmap(ge)),g.setRenderTarget(Me),g.setClearColor(se,b),g.toneMapping=Re}function Lo(E,N,G){const W=N.isScene===!0?N.overrideMaterial:null;for(let B=0,he=E.length;B<he;B++){const Me=E[B],Re=Me.object,Pe=Me.geometry,ke=W===null?Me.material:W,Ue=Me.group;Re.layers.test(G.layers)&&Zf(Re,N,G,Pe,ke,Ue)}}function Zf(E,N,G,W,B,he){E.onBeforeRender(g,N,G,W,B,he),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(g,N,G,W,E,he),B.transparent===!0&&B.side===ri&&B.forceSinglePass===!1?(B.side=nn,B.needsUpdate=!0,g.renderBufferDirect(G,N,W,B,E,he),B.side=Wi,B.needsUpdate=!0,g.renderBufferDirect(G,N,W,B,E,he),B.side=ri):g.renderBufferDirect(G,N,W,B,E,he),E.onAfterRender(g,N,G,W,B,he)}function bo(E,N,G){N.isScene!==!0&&(N=we);const W=De.get(E),B=p.state.lights,he=p.state.shadowsArray,Me=B.state.version,Re=xe.getParameters(E,B.state,he,N,G),Pe=xe.getProgramCacheKey(Re);let ke=W.programs;W.environment=E.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(E.isMeshStandardMaterial?k:S).get(E.envMap||W.environment),ke===void 0&&(E.addEventListener("dispose",ae),ke=new Map,W.programs=ke);let Ue=ke.get(Pe);if(Ue!==void 0){if(W.currentProgram===Ue&&W.lightsStateVersion===Me)return Jf(E,Re),Ue}else Re.uniforms=xe.getUniforms(E),E.onBuild(G,Re,g),E.onBeforeCompile(Re,g),Ue=xe.acquireProgram(Re,Pe),ke.set(Pe,Ue),W.uniforms=Re.uniforms;const Ie=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ie.clippingPlanes=Ne.uniform),Jf(E,Re),W.needsLights=H_(E),W.lightsStateVersion=Me,W.needsLights&&(Ie.ambientLightColor.value=B.state.ambient,Ie.lightProbe.value=B.state.probe,Ie.directionalLights.value=B.state.directional,Ie.directionalLightShadows.value=B.state.directionalShadow,Ie.spotLights.value=B.state.spot,Ie.spotLightShadows.value=B.state.spotShadow,Ie.rectAreaLights.value=B.state.rectArea,Ie.ltc_1.value=B.state.rectAreaLTC1,Ie.ltc_2.value=B.state.rectAreaLTC2,Ie.pointLights.value=B.state.point,Ie.pointLightShadows.value=B.state.pointShadow,Ie.hemisphereLights.value=B.state.hemi,Ie.directionalShadowMap.value=B.state.directionalShadowMap,Ie.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ie.spotShadowMap.value=B.state.spotShadowMap,Ie.spotLightMatrix.value=B.state.spotLightMatrix,Ie.spotLightMap.value=B.state.spotLightMap,Ie.pointShadowMap.value=B.state.pointShadowMap,Ie.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Ue,W.uniformsList=null,Ue}function Qf(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Oa.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Jf(E,N){const G=De.get(E);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function z_(E,N,G,W,B){N.isScene!==!0&&(N=we),w.resetTextureUnits();const he=N.fog,Me=W.isMeshStandardMaterial?N.environment:null,Re=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:pi,Pe=(W.isMeshStandardMaterial?k:S).get(W.envMap||Me),ke=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ue=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ie=!!G.morphAttributes.position,ht=!!G.morphAttributes.normal,sn=!!G.morphAttributes.color;let Tt=Bi;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Tt=g.toneMapping);const $n=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,at=$n!==void 0?$n.length:0,He=De.get(W),Il=p.state.lights;if(K===!0&&(fe===!0||E!==M)){const mn=E===M&&W.id===I;Ne.setState(W,E,mn)}let ft=!1;W.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Il.state.version||He.outputColorSpace!==Re||B.isBatchedMesh&&He.batching===!1||!B.isBatchedMesh&&He.batching===!0||B.isInstancedMesh&&He.instancing===!1||!B.isInstancedMesh&&He.instancing===!0||B.isSkinnedMesh&&He.skinning===!1||!B.isSkinnedMesh&&He.skinning===!0||B.isInstancedMesh&&He.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&He.instancingColor===!1&&B.instanceColor!==null||He.envMap!==Pe||W.fog===!0&&He.fog!==he||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Ne.numPlanes||He.numIntersection!==Ne.numIntersection)||He.vertexAlphas!==ke||He.vertexTangents!==Ue||He.morphTargets!==Ie||He.morphNormals!==ht||He.morphColors!==sn||He.toneMapping!==Tt||Ce.isWebGL2===!0&&He.morphTargetsCount!==at)&&(ft=!0):(ft=!0,He.__version=W.version);let qi=He.currentProgram;ft===!0&&(qi=bo(W,N,B));let ed=!1,Rs=!1,Ol=!1;const Ut=qi.getUniforms(),$i=He.uniforms;if(ve.useProgram(qi.program)&&(ed=!0,Rs=!0,Ol=!0),W.id!==I&&(I=W.id,Rs=!0),ed||M!==E){Ut.setValue(F,"projectionMatrix",E.projectionMatrix),Ut.setValue(F,"viewMatrix",E.matrixWorldInverse);const mn=Ut.map.cameraPosition;mn!==void 0&&mn.setValue(F,be.setFromMatrixPosition(E.matrixWorld)),Ce.logarithmicDepthBuffer&&Ut.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ut.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Rs=!0,Ol=!0)}if(B.isSkinnedMesh){Ut.setOptional(F,B,"bindMatrix"),Ut.setOptional(F,B,"bindMatrixInverse");const mn=B.skeleton;mn&&(Ce.floatVertexTextures?(mn.boneTexture===null&&mn.computeBoneTexture(),Ut.setValue(F,"boneTexture",mn.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Ut.setOptional(F,B,"batchingTexture"),Ut.setValue(F,"batchingTexture",B._matricesTexture,w));const Fl=G.morphAttributes;if((Fl.position!==void 0||Fl.normal!==void 0||Fl.color!==void 0&&Ce.isWebGL2===!0)&&P.update(B,G,qi),(Rs||He.receiveShadow!==B.receiveShadow)&&(He.receiveShadow=B.receiveShadow,Ut.setValue(F,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&($i.envMap.value=Pe,$i.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Rs&&(Ut.setValue(F,"toneMappingExposure",g.toneMappingExposure),He.needsLights&&B_($i,Ol),he&&W.fog===!0&&de.refreshFogUniforms($i,he),de.refreshMaterialUniforms($i,W,q,j,ge),Oa.upload(F,Qf(He),$i,w)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Oa.upload(F,Qf(He),$i,w),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ut.setValue(F,"center",B.center),Ut.setValue(F,"modelViewMatrix",B.modelViewMatrix),Ut.setValue(F,"normalMatrix",B.normalMatrix),Ut.setValue(F,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const mn=W.uniformsGroups;for(let kl=0,G_=mn.length;kl<G_;kl++)if(Ce.isWebGL2){const td=mn[kl];Be.update(td,qi),Be.bind(td,qi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qi}function B_(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function H_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,N,G){De.get(E.texture).__webglTexture=N,De.get(E.depthTexture).__webglTexture=G;const W=De.get(E);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,N){const G=De.get(E);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,G=0){A=E,C=N,R=G;let W=!0,B=null,he=!1,Me=!1;if(E){const Pe=De.get(E);Pe.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(F.FRAMEBUFFER,null),W=!1):Pe.__webglFramebuffer===void 0?w.setupRenderTarget(E):Pe.__hasExternalTextures&&w.rebindTextures(E,De.get(E.texture).__webglTexture,De.get(E.depthTexture).__webglTexture);const ke=E.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Me=!0);const Ue=De.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ue[N])?B=Ue[N][G]:B=Ue[N],he=!0):Ce.isWebGL2&&E.samples>0&&w.useMultisampledRTT(E)===!1?B=De.get(E).__webglMultisampledFramebuffer:Array.isArray(Ue)?B=Ue[G]:B=Ue,T.copy(E.viewport),V.copy(E.scissor),Y=E.scissorTest}else T.copy(H).multiplyScalar(q).floor(),V.copy($).multiplyScalar(q).floor(),Y=Z;if(ve.bindFramebuffer(F.FRAMEBUFFER,B)&&Ce.drawBuffers&&W&&ve.drawBuffers(E,B),ve.viewport(T),ve.scissor(V),ve.setScissorTest(Y),he){const Pe=De.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,Pe.__webglTexture,G)}else if(Me){const Pe=De.get(E.texture),ke=N||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pe.__webglTexture,G||0,ke)}I=-1},this.readRenderTargetPixels=function(E,N,G,W,B,he,Me){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=De.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Re=Re[Me]),Re){ve.bindFramebuffer(F.FRAMEBUFFER,Re);try{const Pe=E.texture,ke=Pe.format,Ue=Pe.type;if(ke!==Fn&&re.convert(ke)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Ue===yo&&(Ee.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ue!==Hi&&re.convert(Ue)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===Li&&(Ce.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-W&&G>=0&&G<=E.height-B&&F.readPixels(N,G,W,B,re.convert(ke),re.convert(Ue),he)}finally{const Pe=A!==null?De.get(A).__webglFramebuffer:null;ve.bindFramebuffer(F.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(E,N,G=0){const W=Math.pow(2,-G),B=Math.floor(N.image.width*W),he=Math.floor(N.image.height*W);w.setTexture2D(N,0),F.copyTexSubImage2D(F.TEXTURE_2D,G,0,0,E.x,E.y,B,he),ve.unbindTexture()},this.copyTextureToTexture=function(E,N,G,W=0){const B=N.image.width,he=N.image.height,Me=re.convert(G.format),Re=re.convert(G.type);w.setTexture2D(G,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment),N.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,W,E.x,E.y,B,he,Me,Re,N.image.data):N.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,W,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,Me,N.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,W,E.x,E.y,Me,Re,N.image),W===0&&G.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(E,N,G,W,B=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=E.max.x-E.min.x+1,Me=E.max.y-E.min.y+1,Re=E.max.z-E.min.z+1,Pe=re.convert(W.format),ke=re.convert(W.type);let Ue;if(W.isData3DTexture)w.setTexture3D(W,0),Ue=F.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)w.setTexture2DArray(W,0),Ue=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const Ie=F.getParameter(F.UNPACK_ROW_LENGTH),ht=F.getParameter(F.UNPACK_IMAGE_HEIGHT),sn=F.getParameter(F.UNPACK_SKIP_PIXELS),Tt=F.getParameter(F.UNPACK_SKIP_ROWS),$n=F.getParameter(F.UNPACK_SKIP_IMAGES),at=G.isCompressedTexture?G.mipmaps[B]:G.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,at.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,at.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,E.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,E.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,E.min.z),G.isDataTexture||G.isData3DTexture?F.texSubImage3D(Ue,B,N.x,N.y,N.z,he,Me,Re,Pe,ke,at.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ue,B,N.x,N.y,N.z,he,Me,Re,Pe,at.data)):F.texSubImage3D(Ue,B,N.x,N.y,N.z,he,Me,Re,Pe,ke,at),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ie),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ht),F.pixelStorei(F.UNPACK_SKIP_PIXELS,sn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Tt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,$n),B===0&&W.generateMipmaps&&F.generateMipmap(Ue),ve.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),ve.unbindTexture()},this.resetState=function(){C=0,R=0,A=null,ve.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Xf?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===bl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Pt?dr:d_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===dr?Pt:pi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Tw extends U_{}Tw.prototype.isWebGL1Renderer=!0;class ww extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class N_ extends ws{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bp=new U,Dp=new U,Up=new xt,Hu=new Dl,va=new Co;class Aw extends Yt{constructor(e=new dn,n=new N_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)bp.fromBufferAttribute(n,r-1),Dp.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=bp.distanceTo(Dp);e.setAttribute("lineDistance",new Bn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),va.copy(i.boundingSphere),va.applyMatrix4(r),va.radius+=s,e.ray.intersectsSphere(va)===!1)return;Up.copy(r).invert(),Hu.copy(e.ray).applyMatrix4(Up);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new U,f=new U,d=new U,h=new U,m=this.isLineSegments?2:1,v=i.index,p=i.attributes.position;if(v!==null){const c=Math.max(0,o.start),_=Math.min(v.count,o.start+o.count);for(let g=c,y=_-1;g<y;g+=m){const C=v.getX(g),R=v.getX(g+1);if(u.fromBufferAttribute(p,C),f.fromBufferAttribute(p,R),Hu.distanceSqToSegment(u,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(h);I<e.near||I>e.far||n.push({distance:I,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const c=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let g=c,y=_-1;g<y;g+=m){if(u.fromBufferAttribute(p,g),f.fromBufferAttribute(p,g+1),Hu.distanceSqToSegment(u,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(h);R<e.near||R>e.far||n.push({distance:R,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class jc extends ws{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Np=new xt,Yc=new Dl,xa=new Co,ya=new U;class Ip extends Yt{constructor(e=new dn,n=new jc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xa.copy(i.boundingSphere),xa.applyMatrix4(r),xa.radius+=s,e.ray.intersectsSphere(xa)===!1)return;Np.copy(r).invert(),Yc.copy(e.ray).applyMatrix4(Np);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=h,x=m;v<x;v++){const p=u.getX(v);ya.fromBufferAttribute(d,p),Op(ya,p,l,r,e,n,this)}}else{const h=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let v=h,x=m;v<x;v++)ya.fromBufferAttribute(d,v),Op(ya,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Op(t,e,n,i,r,s,o){const a=Yc.distanceSqToPoint(t);if(a<n){const l=new U;Yc.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class I_ extends rn{constructor(e,n,i,r,s,o,a,l,u){super(e,n,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $f extends dn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const f=[],d=new U,h=new U,m=[],v=[],x=[],p=[];for(let c=0;c<=i;c++){const _=[],g=c/i;let y=0;c===0&&o===0?y=.5/n:c===i&&l===Math.PI&&(y=-.5/n);for(let C=0;C<=n;C++){const R=C/n;d.x=-e*Math.cos(r+R*s)*Math.sin(o+g*a),d.y=e*Math.cos(o+g*a),d.z=e*Math.sin(r+R*s)*Math.sin(o+g*a),v.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),p.push(R+y,1-g),_.push(u++)}f.push(_)}for(let c=0;c<i;c++)for(let _=0;_<n;_++){const g=f[c][_+1],y=f[c][_],C=f[c+1][_],R=f[c+1][_+1];(c!==0||o>0)&&m.push(g,y,R),(c!==i-1||l<Math.PI)&&m.push(y,C,R)}this.setIndex(m),this.setAttribute("position",new Bn(v,3)),this.setAttribute("normal",new Bn(x,3)),this.setAttribute("uv",new Bn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $f(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fp{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Xt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vf);const kp={type:"change"},Gu={type:"start"},zp={type:"end"},Sa=new Dl,Bp=new Ti,Rw=Math.cos(70*_y.DEG2RAD);class Cw extends Er{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wr.ROTATE,MIDDLE:wr.DOLLY,RIGHT:wr.PAN},this.touches={ONE:Ar.ROTATE,TWO:Ar.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",te),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",te),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(kp),i.update(),s=r.NONE},this.update=function(){const P=new U,Q=new xr().setFromUnitVectors(e.up,new U(0,1,0)),ue=Q.clone().invert(),re=new U,ye=new xr,Be=new U,Ye=2*Math.PI;return function(le=null){const L=i.object.position;P.copy(L).sub(i.target),P.applyQuaternion(Q),a.setFromVector3(P),i.autoRotate&&s===r.NONE&&V(M(le)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let oe=i.minAzimuthAngle,ae=i.maxAzimuthAngle;isFinite(oe)&&isFinite(ae)&&(oe<-Math.PI?oe+=Ye:oe>Math.PI&&(oe-=Ye),ae<-Math.PI?ae+=Ye:ae>Math.PI&&(ae-=Ye),oe<=ae?a.theta=Math.max(oe,Math.min(ae,a.theta)):a.theta=a.theta>(oe+ae)/2?Math.max(oe,a.theta):Math.min(ae,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&R||i.object.isOrthographicCamera?a.radius=O(a.radius):a.radius=O(a.radius*u),P.setFromSpherical(a),P.applyQuaternion(ue),L.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0));let Te=!1;if(i.zoomToCursor&&R){let Se=null;if(i.object.isPerspectiveCamera){const $e=P.length();Se=O($e*u);const Ke=$e-Se;i.object.position.addScaledVector(y,Ke),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const $e=new U(C.x,C.y,0);$e.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),Te=!0;const Ke=new U(C.x,C.y,0);Ke.unproject(i.object),i.object.position.sub(Ke).add($e),i.object.updateMatrixWorld(),Se=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Se!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Se).add(i.object.position):(Sa.origin.copy(i.object.position),Sa.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Sa.direction))<Rw?e.lookAt(i.target):(Bp.setFromNormalAndCoplanarPoint(i.object.up,i.target),Sa.intersectPlane(Bp,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),Te=!0);return u=1,R=!1,Te||re.distanceToSquared(i.object.position)>o||8*(1-ye.dot(i.object.quaternion))>o||Be.distanceToSquared(i.target)>0?(i.dispatchEvent(kp),re.copy(i.object.position),ye.copy(i.object.quaternion),Be.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",me),i.domElement.removeEventListener("pointerdown",De),i.domElement.removeEventListener("pointercancel",S),i.domElement.removeEventListener("wheel",ee),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",S),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",te),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Fp,l=new Fp;let u=1;const f=new U,d=new ze,h=new ze,m=new ze,v=new ze,x=new ze,p=new ze,c=new ze,_=new ze,g=new ze,y=new U,C=new ze;let R=!1;const A=[],I={};function M(P){return P!==null?2*Math.PI/60*i.autoRotateSpeed*P:2*Math.PI/60/60*i.autoRotateSpeed}function T(P){const Q=Math.abs(P)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*Q)}function V(P){l.theta-=P}function Y(P){l.phi-=P}const se=function(){const P=new U;return function(ue,re){P.setFromMatrixColumn(re,0),P.multiplyScalar(-ue),f.add(P)}}(),b=function(){const P=new U;return function(ue,re){i.screenSpacePanning===!0?P.setFromMatrixColumn(re,1):(P.setFromMatrixColumn(re,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(ue),f.add(P)}}(),z=function(){const P=new U;return function(ue,re){const ye=i.domElement;if(i.object.isPerspectiveCamera){const Be=i.object.position;P.copy(Be).sub(i.target);let Ye=P.length();Ye*=Math.tan(i.object.fov/2*Math.PI/180),se(2*ue*Ye/ye.clientHeight,i.object.matrix),b(2*re*Ye/ye.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(se(ue*(i.object.right-i.object.left)/i.object.zoom/ye.clientWidth,i.object.matrix),b(re*(i.object.top-i.object.bottom)/i.object.zoom/ye.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function j(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function D(P,Q){if(!i.zoomToCursor)return;R=!0;const ue=i.domElement.getBoundingClientRect(),re=P-ue.left,ye=Q-ue.top,Be=ue.width,Ye=ue.height;C.x=re/Be*2-1,C.y=-(ye/Ye)*2+1,y.set(C.x,C.y,1).unproject(i.object).sub(i.object.position).normalize()}function O(P){return Math.max(i.minDistance,Math.min(i.maxDistance,P))}function H(P){d.set(P.clientX,P.clientY)}function $(P){D(P.clientX,P.clientX),c.set(P.clientX,P.clientY)}function Z(P){v.set(P.clientX,P.clientY)}function X(P){h.set(P.clientX,P.clientY),m.subVectors(h,d).multiplyScalar(i.rotateSpeed);const Q=i.domElement;V(2*Math.PI*m.x/Q.clientHeight),Y(2*Math.PI*m.y/Q.clientHeight),d.copy(h),i.update()}function K(P){_.set(P.clientX,P.clientY),g.subVectors(_,c),g.y>0?j(T(g.y)):g.y<0&&q(T(g.y)),c.copy(_),i.update()}function fe(P){x.set(P.clientX,P.clientY),p.subVectors(x,v).multiplyScalar(i.panSpeed),z(p.x,p.y),v.copy(x),i.update()}function ge(P){D(P.clientX,P.clientY),P.deltaY<0?q(T(P.deltaY)):P.deltaY>0&&j(T(P.deltaY)),i.update()}function _e(P){let Q=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?Y(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,i.keyPanSpeed),Q=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?Y(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,-i.keyPanSpeed),Q=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?V(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(i.keyPanSpeed,0),Q=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?V(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(-i.keyPanSpeed,0),Q=!0;break}Q&&(P.preventDefault(),i.update())}function Le(P){if(A.length===1)d.set(P.pageX,P.pageY);else{const Q=je(P),ue=.5*(P.pageX+Q.x),re=.5*(P.pageY+Q.y);d.set(ue,re)}}function be(P){if(A.length===1)v.set(P.pageX,P.pageY);else{const Q=je(P),ue=.5*(P.pageX+Q.x),re=.5*(P.pageY+Q.y);v.set(ue,re)}}function we(P){const Q=je(P),ue=P.pageX-Q.x,re=P.pageY-Q.y,ye=Math.sqrt(ue*ue+re*re);c.set(0,ye)}function Xe(P){i.enableZoom&&we(P),i.enablePan&&be(P)}function F(P){i.enableZoom&&we(P),i.enableRotate&&Le(P)}function Mt(P){if(A.length==1)h.set(P.pageX,P.pageY);else{const ue=je(P),re=.5*(P.pageX+ue.x),ye=.5*(P.pageY+ue.y);h.set(re,ye)}m.subVectors(h,d).multiplyScalar(i.rotateSpeed);const Q=i.domElement;V(2*Math.PI*m.x/Q.clientHeight),Y(2*Math.PI*m.y/Q.clientHeight),d.copy(h)}function Ee(P){if(A.length===1)x.set(P.pageX,P.pageY);else{const Q=je(P),ue=.5*(P.pageX+Q.x),re=.5*(P.pageY+Q.y);x.set(ue,re)}p.subVectors(x,v).multiplyScalar(i.panSpeed),z(p.x,p.y),v.copy(x)}function Ce(P){const Q=je(P),ue=P.pageX-Q.x,re=P.pageY-Q.y,ye=Math.sqrt(ue*ue+re*re);_.set(0,ye),g.set(0,Math.pow(_.y/c.y,i.zoomSpeed)),j(g.y),c.copy(_);const Be=(P.pageX+Q.x)*.5,Ye=(P.pageY+Q.y)*.5;D(Be,Ye)}function ve(P){i.enableZoom&&Ce(P),i.enablePan&&Ee(P)}function nt(P){i.enableZoom&&Ce(P),i.enableRotate&&Mt(P)}function De(P){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",w),i.domElement.addEventListener("pointerup",S)),Ae(P),P.pointerType==="touch"?xe(P):k(P))}function w(P){i.enabled!==!1&&(P.pointerType==="touch"?de(P):ie(P))}function S(P){Ne(P),A.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",S)),i.dispatchEvent(zp),s=r.NONE}function k(P){let Q;switch(P.button){case 0:Q=i.mouseButtons.LEFT;break;case 1:Q=i.mouseButtons.MIDDLE;break;case 2:Q=i.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case wr.DOLLY:if(i.enableZoom===!1)return;$(P),s=r.DOLLY;break;case wr.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;Z(P),s=r.PAN}else{if(i.enableRotate===!1)return;H(P),s=r.ROTATE}break;case wr.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;H(P),s=r.ROTATE}else{if(i.enablePan===!1)return;Z(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Gu)}function ie(P){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;X(P);break;case r.DOLLY:if(i.enableZoom===!1)return;K(P);break;case r.PAN:if(i.enablePan===!1)return;fe(P);break}}function ee(P){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(P.preventDefault(),i.dispatchEvent(Gu),ge(P),i.dispatchEvent(zp))}function te(P){i.enabled===!1||i.enablePan===!1||_e(P)}function xe(P){switch(J(P),A.length){case 1:switch(i.touches.ONE){case Ar.ROTATE:if(i.enableRotate===!1)return;Le(P),s=r.TOUCH_ROTATE;break;case Ar.PAN:if(i.enablePan===!1)return;be(P),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Ar.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Xe(P),s=r.TOUCH_DOLLY_PAN;break;case Ar.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;F(P),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Gu)}function de(P){switch(J(P),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Mt(P),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ee(P),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ve(P),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;nt(P),i.update();break;default:s=r.NONE}}function me(P){i.enabled!==!1&&P.preventDefault()}function Ae(P){A.push(P.pointerId)}function Ne(P){delete I[P.pointerId];for(let Q=0;Q<A.length;Q++)if(A[Q]==P.pointerId){A.splice(Q,1);return}}function J(P){let Q=I[P.pointerId];Q===void 0&&(Q=new ze,I[P.pointerId]=Q),Q.set(P.pageX,P.pageY)}function je(P){const Q=P.pointerId===A[0]?A[1]:A[0];return I[Q]}i.domElement.addEventListener("contextmenu",me),i.domElement.addEventListener("pointerdown",De),i.domElement.addEventListener("pointercancel",S),i.domElement.addEventListener("wheel",ee,{passive:!1}),this.update()}}const Vu=10,Fa=Math.PI/180;function Pw(t,e){let n=e<.8?t:Math.PI;for(let i=0;i<12;i++)n-=(n-e*Math.sin(n)-t)/(1-e*Math.cos(n));return n}function O_(t,e,n){const i=n.w*Fa,r=n.om*Fa,s=n.i*Fa,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),d=Math.sin(s),h=(l*o-u*a*f)*t+(-l*a-u*o*f)*e,m=(u*o+l*a*f)*t+(-u*a+l*o*f)*e,v=a*d*t+o*d*e;return new U(h*Vu,v*Vu,-m*Vu)}function F_(t,e){return[t.a*(Math.cos(e)-t.e),t.a*Math.sqrt(1-t.e*t.e)*Math.sin(e)]}function Hp(t,e=t.ma){const[n,i]=F_(t,Pw(e*Fa,t.e));return O_(n,i,t)}function Lw(t,e=180){const n=[];for(let i=0;i<=e;i++){const[r,s]=F_(t,2*Math.PI*i/e);n.push(O_(r,s,t))}return n}function Gp(t,e=4482730,n=.6){const i=new dn().setFromPoints(Lw(t));return new Aw(i,new N_({color:e,transparent:!0,opacity:n}))}const bw=new Ve(3832831),Dw=new Ve(16724016),Uw=new Ve(16711935),Nw=new Ve(16765952),Iw=new Ve(2766160),Ma=6,Ow=(()=>{const e=document.createElement("canvas");e.width=e.height=64;const n=e.getContext("2d");return n.fillStyle="#fff",n.beginPath(),n.arc(64/2,64/2,64/2-1,0,Math.PI*2),n.fill(),new I_(e)})(),Fw=(()=>{const e=document.createElement("canvas");e.width=e.height=64;const n=e.getContext("2d");return n.strokeStyle="#fff",n.lineWidth=6,n.beginPath(),n.arc(64/2,64/2,64/2-5,0,Math.PI*2),n.stroke(),new I_(e)})(),kw=10,zw=[{name:"Mercury",a:.387,e:.206,i:7,om:48.3,w:29.1},{name:"Venus",a:.723,e:.007,i:3.4,om:76.7,w:54.9},{name:"Earth",a:1,e:.017,i:0,om:0,w:102.9},{name:"Mars",a:1.524,e:.093,i:1.8,om:49.6,w:286.5}];function Bw({asteroids:t,metrics:e,view:n,onSelect:i}){const r=_n.useRef(null),s=_n.useRef(null);_n.useEffect(()=>{const a=r.current,l=new U_({canvas:a,antialias:!0});l.setPixelRatio(Math.min(devicePixelRatio,2));const u=new ww;u.background=new Ve(329226);const f=new Sn(55,1,.1,5e3);f.position.set(0,25,35);const d=new Cw(f,a);d.enableDamping=!0,u.add(new li(new $f(.4),new jf({color:16763989}))),zw.forEach(v=>u.add(Gp(v,v.name==="Earth"?3407769:6710886,.9)));function h(){const v=a.clientWidth,x=a.clientHeight;l.setSize(v,x,!1),f.aspect=v/x,f.updateProjectionMatrix()}addEventListener("resize",h),h();const m={scene:u,camera:f,renderer:l,points:null,shown:[],pulse:!1};return s.current=m,l.setAnimationLoop(()=>{d.update(),m.points&&(m.points.material.size=m.pulse?Ma+2.5*(1+Math.sin(performance.now()/200)):Ma),l.render(u,f)}),()=>{removeEventListener("resize",h),l.setAnimationLoop(null),d.dispose(),l.dispose()}},[]),_n.useEffect(()=>{var _;const a=s.current;if(!a||!t)return;const l=n.model==="A"?"pA":"pB",u=(_=e==null?void 0:e[n.model])==null?void 0:_.threshold,f=n.showMistakes&&u!=null,d=t.filter(g=>g.e<1&&(!n.testOnly||g.test)),h=(g,y)=>{const C=g[l]??0;if(!f)return y.copy(bw).lerp(Dw,C);const R=C>=u;return g.pha===1&&!R?y.copy(Uw):g.pha===0&&R?y.copy(Nw):y.copy(Iw)},m=new Float32Array(d.length*3),v=new Float32Array(d.length*3),x=new Ve;d.forEach((g,y)=>{Hp(g).toArray(m,y*3),h(g,x).toArray(v,y*3)});const p=new dn;p.setAttribute("position",new wn(m,3)),p.setAttribute("color",new wn(v,3));const c=new Ip(p,new jc({size:Ma,sizeAttenuation:!1,vertexColors:!0,map:Ow,alphaTest:.5,transparent:!0}));return a.scene.add(c),a.points=c,a.shown=d,a.pulse=f,()=>{a.scene.remove(c),p.dispose(),c.material.dispose(),a.points=null}},[t,e,n.model,n.testOnly,n.showMistakes]);const o=_n.useRef(i);return o.current=i,_n.useEffect(()=>{const a=s.current,l=r.current;if(!a)return;let u=null,f=null,d=null;const h=new U,m=()=>{for(const p of[f,d])p&&(a.scene.remove(p),p.geometry.dispose(),p.material.dispose());f=d=null},v=p=>{u={x:p.clientX,y:p.clientY}},x=p=>{var I,M;if(!u||Math.hypot(p.clientX-u.x,p.clientY-u.y)>5)return;const c=l.getBoundingClientRect(),_=p.clientX-c.left,g=p.clientY-c.top,y=(I=a.points)==null?void 0:I.geometry.attributes.position;if(!y)return;let C=-1,R=kw;for(let T=0;T<y.count;T++){if(h.fromBufferAttribute(y,T).project(a.camera),h.z>1)continue;const V=Math.hypot((h.x+1)/2*c.width-_,(1-h.y)/2*c.height-g);V<R&&(R=V,C=T)}if(C<0)return;const A=a.shown[C];m(),f=Gp(A,16777215,1),d=new Ip(new dn().setFromPoints([Hp(A)]),new jc({size:Ma*2.5,sizeAttenuation:!1,map:Fw,transparent:!0,depthTest:!1})),a.scene.add(f,d),(M=o.current)==null||M.call(o,A)};return l.addEventListener("pointerdown",v),l.addEventListener("pointerup",x),()=>{l.removeEventListener("pointerdown",v),l.removeEventListener("pointerup",x),m()}},[]),Ze.jsx("canvas",{id:"scene",ref:r})}function Hw({view:t,setView:e}){const n=i=>e(r=>({...r,...i}));return Ze.jsxs("header",{id:"topbar",children:[Ze.jsx("h1",{children:"Is It Coming For Us?"}),Ze.jsxs("div",{id:"toggles",children:[Ze.jsx("button",{className:t.model==="A"?"on":"",onClick:()=>n({model:"A"}),children:"Model A · all features"}),Ze.jsx("button",{className:t.model==="B"?"on":"",onClick:()=>n({model:"B"}),children:"Model B · orbit only"}),Ze.jsxs("label",{children:[Ze.jsx("input",{type:"checkbox",checked:t.testOnly,onChange:i=>n({testOnly:i.target.checked})})," Unseen test set only"]}),Ze.jsxs("label",{children:[Ze.jsx("input",{type:"checkbox",checked:t.showMistakes,onChange:i=>n({showMistakes:i.target.checked})})," Show mistakes"]})]})]})}function Gw({selected:t,metrics:e,view:n}){return Ze.jsxs("aside",{id:"panel",children:[Ze.jsx("section",{id:"info",children:Ze.jsx("h2",{children:t?t.name:"Click an asteroid"})}),Ze.jsxs("section",{id:"results",children:[Ze.jsx("h2",{children:"How well does it do?"}),e&&Ze.jsxs("small",{children:["Model ",n.model,": recall ",(e[n.model].recall*100).toFixed(1),"% · ROC-AUC"," ",e[n.model].roc_auc.toFixed(3)," · tested on ",e.counts.test.toLocaleString()," unseen asteroids",e._mock&&" (mock data)"]})]}),Ze.jsx("section",{id:"learned",children:Ze.jsx("h2",{children:"What did it learn?"})})]})}function Vw(){return Ze.jsxs("div",{id:"legend",children:["🔵 safe → 🔴 hazardous · ",Ze.jsx("span",{className:"mag",children:"■"})," missed hazard · ",Ze.jsx("span",{className:"yel",children:"■"})," false alarm"]})}function Ww(){const{asteroids:t,metrics:e,error:n}=mx(),[i,r]=_n.useState({model:"A",testOnly:!1,showMistakes:!1}),[s,o]=_n.useState(null);return Ze.jsxs(Ze.Fragment,{children:[Ze.jsx(Bw,{asteroids:t,metrics:e,view:i,onSelect:o}),Ze.jsx(Hw,{view:i,setView:r}),Ze.jsx(Gw,{selected:s,metrics:e,view:i}),Ze.jsx(Vw,{}),n&&Ze.jsxs("div",{className:"error",children:["Couldn't load data: ",String(n.message)]})]})}t_(document.getElementById("root")).render(Ze.jsx(Ww,{}));
