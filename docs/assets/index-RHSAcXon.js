const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./App-Bk8Tqewp.js","./App-BbN8CSmn.css"])))=>i.map(i=>d[i]);
var KE=Object.defineProperty;var ZE=(n,e,t)=>e in n?KE(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Oe=(n,e,t)=>ZE(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function QE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var My={exports:{}},Dh={},Ey={exports:{}},ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rc=Symbol.for("react.element"),JE=Symbol.for("react.portal"),ew=Symbol.for("react.fragment"),tw=Symbol.for("react.strict_mode"),nw=Symbol.for("react.profiler"),iw=Symbol.for("react.provider"),rw=Symbol.for("react.context"),sw=Symbol.for("react.forward_ref"),ow=Symbol.for("react.suspense"),aw=Symbol.for("react.memo"),lw=Symbol.for("react.lazy"),k_=Symbol.iterator;function uw(n){return n===null||typeof n!="object"?null:(n=k_&&n[k_]||n["@@iterator"],typeof n=="function"?n:null)}var wy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ty=Object.assign,Ay={};function Ml(n,e,t){this.props=n,this.context=e,this.refs=Ay,this.updater=t||wy}Ml.prototype.isReactComponent={};Ml.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Ml.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Cy(){}Cy.prototype=Ml.prototype;function og(n,e,t){this.props=n,this.context=e,this.refs=Ay,this.updater=t||wy}var ag=og.prototype=new Cy;ag.constructor=og;Ty(ag,Ml.prototype);ag.isPureReactComponent=!0;var z_=Array.isArray,Ry=Object.prototype.hasOwnProperty,lg={current:null},by={key:!0,ref:!0,__self:!0,__source:!0};function Py(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ry.call(e,i)&&!by.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:rc,type:n,key:s,ref:o,props:r,_owner:lg.current}}function cw(n,e){return{$$typeof:rc,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function ug(n){return typeof n=="object"&&n!==null&&n.$$typeof===rc}function fw(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var B_=/\/+/g;function od(n,e){return typeof n=="object"&&n!==null&&n.key!=null?fw(""+n.key):e.toString(36)}function yf(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case rc:case JE:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+od(o,0):i,z_(r)?(t="",n!=null&&(t=n.replace(B_,"$&/")+"/"),yf(r,e,t,"",function(u){return u})):r!=null&&(ug(r)&&(r=cw(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(B_,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",z_(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+od(s,a);o+=yf(s,e,t,l,r)}else if(l=uw(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+od(s,a++),o+=yf(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function mc(n,e,t){if(n==null)return n;var i=[],r=0;return yf(n,i,"","",function(s){return e.call(t,s,r++)}),i}function hw(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Qn={current:null},Sf={transition:null},dw={ReactCurrentDispatcher:Qn,ReactCurrentBatchConfig:Sf,ReactCurrentOwner:lg};function Ly(){throw Error("act(...) is not supported in production builds of React.")}ct.Children={map:mc,forEach:function(n,e,t){mc(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return mc(n,function(){e++}),e},toArray:function(n){return mc(n,function(e){return e})||[]},only:function(n){if(!ug(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ct.Component=Ml;ct.Fragment=ew;ct.Profiler=nw;ct.PureComponent=og;ct.StrictMode=tw;ct.Suspense=ow;ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dw;ct.act=Ly;ct.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Ty({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=lg.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Ry.call(e,l)&&!by.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:rc,type:n.type,key:r,ref:s,props:i,_owner:o}};ct.createContext=function(n){return n={$$typeof:rw,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:iw,_context:n},n.Consumer=n};ct.createElement=Py;ct.createFactory=function(n){var e=Py.bind(null,n);return e.type=n,e};ct.createRef=function(){return{current:null}};ct.forwardRef=function(n){return{$$typeof:sw,render:n}};ct.isValidElement=ug;ct.lazy=function(n){return{$$typeof:lw,_payload:{_status:-1,_result:n},_init:hw}};ct.memo=function(n,e){return{$$typeof:aw,type:n,compare:e===void 0?null:e}};ct.startTransition=function(n){var e=Sf.transition;Sf.transition={};try{n()}finally{Sf.transition=e}};ct.unstable_act=Ly;ct.useCallback=function(n,e){return Qn.current.useCallback(n,e)};ct.useContext=function(n){return Qn.current.useContext(n)};ct.useDebugValue=function(){};ct.useDeferredValue=function(n){return Qn.current.useDeferredValue(n)};ct.useEffect=function(n,e){return Qn.current.useEffect(n,e)};ct.useId=function(){return Qn.current.useId()};ct.useImperativeHandle=function(n,e,t){return Qn.current.useImperativeHandle(n,e,t)};ct.useInsertionEffect=function(n,e){return Qn.current.useInsertionEffect(n,e)};ct.useLayoutEffect=function(n,e){return Qn.current.useLayoutEffect(n,e)};ct.useMemo=function(n,e){return Qn.current.useMemo(n,e)};ct.useReducer=function(n,e,t){return Qn.current.useReducer(n,e,t)};ct.useRef=function(n){return Qn.current.useRef(n)};ct.useState=function(n){return Qn.current.useState(n)};ct.useSyncExternalStore=function(n,e,t){return Qn.current.useSyncExternalStore(n,e,t)};ct.useTransition=function(){return Qn.current.useTransition()};ct.version="18.3.1";Ey.exports=ct;var mt=Ey.exports;const DN=QE(mt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pw=mt,mw=Symbol.for("react.element"),gw=Symbol.for("react.fragment"),_w=Object.prototype.hasOwnProperty,vw=pw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xw={key:!0,ref:!0,__self:!0,__source:!0};function Dy(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)_w.call(e,i)&&!xw.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:mw,type:n,key:s,ref:o,props:r,_owner:vw.current}}Dh.Fragment=gw;Dh.jsx=Dy;Dh.jsxs=Dy;My.exports=Dh;var Y=My.exports,Ny={exports:{}},Oi={},Uy={exports:{}},Iy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,I){var b=D.length;D.push(I);e:for(;0<b;){var X=b-1>>>1,ee=D[X];if(0<r(ee,I))D[X]=I,D[b]=ee,b=X;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var I=D[0],b=D.pop();if(b!==I){D[0]=b;e:for(var X=0,ee=D.length,$=ee>>>1;X<$;){var Q=2*(X+1)-1,se=D[Q],ge=Q+1,ve=D[ge];if(0>r(se,b))ge<ee&&0>r(ve,se)?(D[X]=ve,D[ge]=b,X=ge):(D[X]=se,D[Q]=b,X=Q);else if(ge<ee&&0>r(ve,b))D[X]=ve,D[ge]=b,X=ge;else break e}}return I}function r(D,I){var b=D.sortIndex-I.sortIndex;return b!==0?b:D.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,p=!1,m=!1,_=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(D){for(var I=t(u);I!==null;){if(I.callback===null)i(u);else if(I.startTime<=D)i(u),I.sortIndex=I.expirationTime,e(l,I);else break;I=t(u)}}function y(D){if(_=!1,x(D),!m)if(t(l)!==null)m=!0,V(A);else{var I=t(u);I!==null&&W(y,I.startTime-D)}}function A(D,I){m=!1,_&&(_=!1,d(P),P=-1),p=!0;var b=f;try{for(x(I),h=t(l);h!==null&&(!(h.expirationTime>I)||D&&!U());){var X=h.callback;if(typeof X=="function"){h.callback=null,f=h.priorityLevel;var ee=X(h.expirationTime<=I);I=n.unstable_now(),typeof ee=="function"?h.callback=ee:h===t(l)&&i(l),x(I)}else i(l);h=t(l)}if(h!==null)var $=!0;else{var Q=t(u);Q!==null&&W(y,Q.startTime-I),$=!1}return $}finally{h=null,f=b,p=!1}}var w=!1,M=null,P=-1,S=5,E=-1;function U(){return!(n.unstable_now()-E<S)}function O(){if(M!==null){var D=n.unstable_now();E=D;var I=!0;try{I=M(!0,D)}finally{I?J():(w=!1,M=null)}}else w=!1}var J;if(typeof v=="function")J=function(){v(O)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,k=L.port2;L.port1.onmessage=O,J=function(){k.postMessage(null)}}else J=function(){g(O,0)};function V(D){M=D,w||(w=!0,J())}function W(D,I){P=g(function(){D(n.unstable_now())},I)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){m||p||(m=!0,V(A))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var b=f;f=I;try{return D()}finally{f=b}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,I){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var b=f;f=D;try{return I()}finally{f=b}},n.unstable_scheduleCallback=function(D,I,b){var X=n.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?X+b:X):b=X,D){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=b+ee,D={id:c++,callback:I,priorityLevel:D,startTime:b,expirationTime:ee,sortIndex:-1},b>X?(D.sortIndex=b,e(u,D),t(l)===null&&D===t(u)&&(_?(d(P),P=-1):_=!0,W(y,b-X))):(D.sortIndex=ee,e(l,D),m||p||(m=!0,V(A))),D},n.unstable_shouldYield=U,n.unstable_wrapCallback=function(D){var I=f;return function(){var b=f;f=I;try{return D.apply(this,arguments)}finally{f=b}}}})(Iy);Uy.exports=Iy;var yw=Uy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sw=mt,Ni=yw;function oe(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Oy=new Set,bu={};function Wo(n,e){rl(n,e),rl(n+"Capture",e)}function rl(n,e){for(bu[n]=e,n=0;n<e.length;n++)Oy.add(e[n])}var $r=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rp=Object.prototype.hasOwnProperty,Mw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,H_={},V_={};function Ew(n){return Rp.call(V_,n)?!0:Rp.call(H_,n)?!1:Mw.test(n)?V_[n]=!0:(H_[n]=!0,!1)}function ww(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Tw(n,e,t,i){if(e===null||typeof e>"u"||ww(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Tn[n]=new Jn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Tn[e]=new Jn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Tn[n]=new Jn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Tn[n]=new Jn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Tn[n]=new Jn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Tn[n]=new Jn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Tn[n]=new Jn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Tn[n]=new Jn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Tn[n]=new Jn(n,5,!1,n.toLowerCase(),null,!1,!1)});var cg=/[\-:]([a-z])/g;function fg(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(cg,fg);Tn[e]=new Jn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(cg,fg);Tn[e]=new Jn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(cg,fg);Tn[e]=new Jn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Tn[n]=new Jn(n,1,!1,n.toLowerCase(),null,!1,!1)});Tn.xlinkHref=new Jn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Tn[n]=new Jn(n,1,!1,n.toLowerCase(),null,!0,!0)});function hg(n,e,t,i){var r=Tn.hasOwnProperty(e)?Tn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Tw(e,t,r,i)&&(t=null),i||r===null?Ew(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var ns=Sw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gc=Symbol.for("react.element"),Ma=Symbol.for("react.portal"),Ea=Symbol.for("react.fragment"),dg=Symbol.for("react.strict_mode"),bp=Symbol.for("react.profiler"),Fy=Symbol.for("react.provider"),ky=Symbol.for("react.context"),pg=Symbol.for("react.forward_ref"),Pp=Symbol.for("react.suspense"),Lp=Symbol.for("react.suspense_list"),mg=Symbol.for("react.memo"),ds=Symbol.for("react.lazy"),zy=Symbol.for("react.offscreen"),G_=Symbol.iterator;function Rl(n){return n===null||typeof n!="object"?null:(n=G_&&n[G_]||n["@@iterator"],typeof n=="function"?n:null)}var Xt=Object.assign,ad;function Kl(n){if(ad===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);ad=e&&e[1]||""}return`
`+ad+n}var ld=!1;function ud(n,e){if(!n||ld)return"";ld=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{ld=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Kl(n):""}function Aw(n){switch(n.tag){case 5:return Kl(n.type);case 16:return Kl("Lazy");case 13:return Kl("Suspense");case 19:return Kl("SuspenseList");case 0:case 2:case 15:return n=ud(n.type,!1),n;case 11:return n=ud(n.type.render,!1),n;case 1:return n=ud(n.type,!0),n;default:return""}}function Dp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ea:return"Fragment";case Ma:return"Portal";case bp:return"Profiler";case dg:return"StrictMode";case Pp:return"Suspense";case Lp:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case ky:return(n.displayName||"Context")+".Consumer";case Fy:return(n._context.displayName||"Context")+".Provider";case pg:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case mg:return e=n.displayName||null,e!==null?e:Dp(n.type)||"Memo";case ds:e=n._payload,n=n._init;try{return Dp(n(e))}catch{}}return null}function Cw(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dp(e);case 8:return e===dg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Hs(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function By(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Rw(n){var e=By(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function _c(n){n._valueTracker||(n._valueTracker=Rw(n))}function Hy(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=By(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Gf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Np(n,e){var t=e.checked;return Xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function W_(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Hs(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Vy(n,e){e=e.checked,e!=null&&hg(n,"checked",e,!1)}function Up(n,e){Vy(n,e);var t=Hs(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Ip(n,e.type,t):e.hasOwnProperty("defaultValue")&&Ip(n,e.type,Hs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function X_(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Ip(n,e,t){(e!=="number"||Gf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Zl=Array.isArray;function Ha(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Hs(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Op(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return Xt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function j_(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(oe(92));if(Zl(t)){if(1<t.length)throw Error(oe(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Hs(t)}}function Gy(n,e){var t=Hs(e.value),i=Hs(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Y_(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Wy(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Wy(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var vc,Xy=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(vc=vc||document.createElement("div"),vc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=vc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Pu(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var au={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bw=["Webkit","ms","Moz","O"];Object.keys(au).forEach(function(n){bw.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),au[e]=au[n]})});function jy(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||au.hasOwnProperty(n)&&au[n]?(""+e).trim():e+"px"}function Yy(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=jy(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Pw=Xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kp(n,e){if(e){if(Pw[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function zp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bp=null;function gg(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Hp=null,Va=null,Ga=null;function q_(n){if(n=ac(n)){if(typeof Hp!="function")throw Error(oe(280));var e=n.stateNode;e&&(e=Fh(e),Hp(n.stateNode,n.type,e))}}function qy(n){Va?Ga?Ga.push(n):Ga=[n]:Va=n}function $y(){if(Va){var n=Va,e=Ga;if(Ga=Va=null,q_(n),e)for(n=0;n<e.length;n++)q_(e[n])}}function Ky(n,e){return n(e)}function Zy(){}var cd=!1;function Qy(n,e,t){if(cd)return n(e,t);cd=!0;try{return Ky(n,e,t)}finally{cd=!1,(Va!==null||Ga!==null)&&(Zy(),$y())}}function Lu(n,e){var t=n.stateNode;if(t===null)return null;var i=Fh(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(oe(231,e,typeof t));return t}var Vp=!1;if($r)try{var bl={};Object.defineProperty(bl,"passive",{get:function(){Vp=!0}}),window.addEventListener("test",bl,bl),window.removeEventListener("test",bl,bl)}catch{Vp=!1}function Lw(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var lu=!1,Wf=null,Xf=!1,Gp=null,Dw={onError:function(n){lu=!0,Wf=n}};function Nw(n,e,t,i,r,s,o,a,l){lu=!1,Wf=null,Lw.apply(Dw,arguments)}function Uw(n,e,t,i,r,s,o,a,l){if(Nw.apply(this,arguments),lu){if(lu){var u=Wf;lu=!1,Wf=null}else throw Error(oe(198));Xf||(Xf=!0,Gp=u)}}function Xo(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Jy(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function $_(n){if(Xo(n)!==n)throw Error(oe(188))}function Iw(n){var e=n.alternate;if(!e){if(e=Xo(n),e===null)throw Error(oe(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return $_(r),n;if(s===i)return $_(r),e;s=s.sibling}throw Error(oe(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(t.alternate!==i)throw Error(oe(190))}if(t.tag!==3)throw Error(oe(188));return t.stateNode.current===t?n:e}function eS(n){return n=Iw(n),n!==null?tS(n):null}function tS(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=tS(n);if(e!==null)return e;n=n.sibling}return null}var nS=Ni.unstable_scheduleCallback,K_=Ni.unstable_cancelCallback,Ow=Ni.unstable_shouldYield,Fw=Ni.unstable_requestPaint,Qt=Ni.unstable_now,kw=Ni.unstable_getCurrentPriorityLevel,_g=Ni.unstable_ImmediatePriority,iS=Ni.unstable_UserBlockingPriority,jf=Ni.unstable_NormalPriority,zw=Ni.unstable_LowPriority,rS=Ni.unstable_IdlePriority,Nh=null,Ar=null;function Bw(n){if(Ar&&typeof Ar.onCommitFiberRoot=="function")try{Ar.onCommitFiberRoot(Nh,n,void 0,(n.current.flags&128)===128)}catch{}}var pr=Math.clz32?Math.clz32:Gw,Hw=Math.log,Vw=Math.LN2;function Gw(n){return n>>>=0,n===0?32:31-(Hw(n)/Vw|0)|0}var xc=64,yc=4194304;function Ql(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Yf(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Ql(a):(s&=o,s!==0&&(i=Ql(s)))}else o=t&~r,o!==0?i=Ql(o):s!==0&&(i=Ql(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-pr(e),r=1<<t,i|=n[t],e&=~r;return i}function Ww(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xw(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-pr(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=Ww(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Wp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function sS(){var n=xc;return xc<<=1,!(xc&4194240)&&(xc=64),n}function fd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function sc(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-pr(e),n[e]=t}function jw(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-pr(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function vg(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-pr(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var St=0;function oS(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var aS,xg,lS,uS,cS,Xp=!1,Sc=[],As=null,Cs=null,Rs=null,Du=new Map,Nu=new Map,ms=[],Yw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Z_(n,e){switch(n){case"focusin":case"focusout":As=null;break;case"dragenter":case"dragleave":Cs=null;break;case"mouseover":case"mouseout":Rs=null;break;case"pointerover":case"pointerout":Du.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nu.delete(e.pointerId)}}function Pl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ac(e),e!==null&&xg(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function qw(n,e,t,i,r){switch(e){case"focusin":return As=Pl(As,n,e,t,i,r),!0;case"dragenter":return Cs=Pl(Cs,n,e,t,i,r),!0;case"mouseover":return Rs=Pl(Rs,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Du.set(s,Pl(Du.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Nu.set(s,Pl(Nu.get(s)||null,n,e,t,i,r)),!0}return!1}function fS(n){var e=_o(n.target);if(e!==null){var t=Xo(e);if(t!==null){if(e=t.tag,e===13){if(e=Jy(t),e!==null){n.blockedOn=e,cS(n.priority,function(){lS(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Mf(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=jp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Bp=i,t.target.dispatchEvent(i),Bp=null}else return e=ac(t),e!==null&&xg(e),n.blockedOn=t,!1;e.shift()}return!0}function Q_(n,e,t){Mf(n)&&t.delete(e)}function $w(){Xp=!1,As!==null&&Mf(As)&&(As=null),Cs!==null&&Mf(Cs)&&(Cs=null),Rs!==null&&Mf(Rs)&&(Rs=null),Du.forEach(Q_),Nu.forEach(Q_)}function Ll(n,e){n.blockedOn===e&&(n.blockedOn=null,Xp||(Xp=!0,Ni.unstable_scheduleCallback(Ni.unstable_NormalPriority,$w)))}function Uu(n){function e(r){return Ll(r,n)}if(0<Sc.length){Ll(Sc[0],n);for(var t=1;t<Sc.length;t++){var i=Sc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(As!==null&&Ll(As,n),Cs!==null&&Ll(Cs,n),Rs!==null&&Ll(Rs,n),Du.forEach(e),Nu.forEach(e),t=0;t<ms.length;t++)i=ms[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<ms.length&&(t=ms[0],t.blockedOn===null);)fS(t),t.blockedOn===null&&ms.shift()}var Wa=ns.ReactCurrentBatchConfig,qf=!0;function Kw(n,e,t,i){var r=St,s=Wa.transition;Wa.transition=null;try{St=1,yg(n,e,t,i)}finally{St=r,Wa.transition=s}}function Zw(n,e,t,i){var r=St,s=Wa.transition;Wa.transition=null;try{St=4,yg(n,e,t,i)}finally{St=r,Wa.transition=s}}function yg(n,e,t,i){if(qf){var r=jp(n,e,t,i);if(r===null)Sd(n,e,i,$f,t),Z_(n,i);else if(qw(r,n,e,t,i))i.stopPropagation();else if(Z_(n,i),e&4&&-1<Yw.indexOf(n)){for(;r!==null;){var s=ac(r);if(s!==null&&aS(s),s=jp(n,e,t,i),s===null&&Sd(n,e,i,$f,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Sd(n,e,i,null,t)}}var $f=null;function jp(n,e,t,i){if($f=null,n=gg(i),n=_o(n),n!==null)if(e=Xo(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Jy(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return $f=n,null}function hS(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kw()){case _g:return 1;case iS:return 4;case jf:case zw:return 16;case rS:return 536870912;default:return 16}default:return 16}}var _s=null,Sg=null,Ef=null;function dS(){if(Ef)return Ef;var n,e=Sg,t=e.length,i,r="value"in _s?_s.value:_s.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Ef=r.slice(n,1<i?1-i:void 0)}function wf(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Mc(){return!0}function J_(){return!1}function Fi(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Mc:J_,this.isPropagationStopped=J_,this}return Xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Mc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Mc)},persist:function(){},isPersistent:Mc}),e}var El={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mg=Fi(El),oc=Xt({},El,{view:0,detail:0}),Qw=Fi(oc),hd,dd,Dl,Uh=Xt({},oc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eg,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Dl&&(Dl&&n.type==="mousemove"?(hd=n.screenX-Dl.screenX,dd=n.screenY-Dl.screenY):dd=hd=0,Dl=n),hd)},movementY:function(n){return"movementY"in n?n.movementY:dd}}),e0=Fi(Uh),Jw=Xt({},Uh,{dataTransfer:0}),eT=Fi(Jw),tT=Xt({},oc,{relatedTarget:0}),pd=Fi(tT),nT=Xt({},El,{animationName:0,elapsedTime:0,pseudoElement:0}),iT=Fi(nT),rT=Xt({},El,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),sT=Fi(rT),oT=Xt({},El,{data:0}),t0=Fi(oT),aT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cT(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=uT[n])?!!e[n]:!1}function Eg(){return cT}var fT=Xt({},oc,{key:function(n){if(n.key){var e=aT[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=wf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?lT[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eg,charCode:function(n){return n.type==="keypress"?wf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?wf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),hT=Fi(fT),dT=Xt({},Uh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),n0=Fi(dT),pT=Xt({},oc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eg}),mT=Fi(pT),gT=Xt({},El,{propertyName:0,elapsedTime:0,pseudoElement:0}),_T=Fi(gT),vT=Xt({},Uh,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xT=Fi(vT),yT=[9,13,27,32],wg=$r&&"CompositionEvent"in window,uu=null;$r&&"documentMode"in document&&(uu=document.documentMode);var ST=$r&&"TextEvent"in window&&!uu,pS=$r&&(!wg||uu&&8<uu&&11>=uu),i0=" ",r0=!1;function mS(n,e){switch(n){case"keyup":return yT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gS(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var wa=!1;function MT(n,e){switch(n){case"compositionend":return gS(e);case"keypress":return e.which!==32?null:(r0=!0,i0);case"textInput":return n=e.data,n===i0&&r0?null:n;default:return null}}function ET(n,e){if(wa)return n==="compositionend"||!wg&&mS(n,e)?(n=dS(),Ef=Sg=_s=null,wa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return pS&&e.locale!=="ko"?null:e.data;default:return null}}var wT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function s0(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!wT[n.type]:e==="textarea"}function _S(n,e,t,i){qy(i),e=Kf(e,"onChange"),0<e.length&&(t=new Mg("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var cu=null,Iu=null;function TT(n){RS(n,0)}function Ih(n){var e=Ca(n);if(Hy(e))return n}function AT(n,e){if(n==="change")return e}var vS=!1;if($r){var md;if($r){var gd="oninput"in document;if(!gd){var o0=document.createElement("div");o0.setAttribute("oninput","return;"),gd=typeof o0.oninput=="function"}md=gd}else md=!1;vS=md&&(!document.documentMode||9<document.documentMode)}function a0(){cu&&(cu.detachEvent("onpropertychange",xS),Iu=cu=null)}function xS(n){if(n.propertyName==="value"&&Ih(Iu)){var e=[];_S(e,Iu,n,gg(n)),Qy(TT,e)}}function CT(n,e,t){n==="focusin"?(a0(),cu=e,Iu=t,cu.attachEvent("onpropertychange",xS)):n==="focusout"&&a0()}function RT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ih(Iu)}function bT(n,e){if(n==="click")return Ih(e)}function PT(n,e){if(n==="input"||n==="change")return Ih(e)}function LT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var gr=typeof Object.is=="function"?Object.is:LT;function Ou(n,e){if(gr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Rp.call(e,r)||!gr(n[r],e[r]))return!1}return!0}function l0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function u0(n,e){var t=l0(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=l0(t)}}function yS(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?yS(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function SS(){for(var n=window,e=Gf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Gf(n.document)}return e}function Tg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function DT(n){var e=SS(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&yS(t.ownerDocument.documentElement,t)){if(i!==null&&Tg(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=u0(t,s);var o=u0(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var NT=$r&&"documentMode"in document&&11>=document.documentMode,Ta=null,Yp=null,fu=null,qp=!1;function c0(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;qp||Ta==null||Ta!==Gf(i)||(i=Ta,"selectionStart"in i&&Tg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),fu&&Ou(fu,i)||(fu=i,i=Kf(Yp,"onSelect"),0<i.length&&(e=new Mg("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Ta)))}function Ec(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Aa={animationend:Ec("Animation","AnimationEnd"),animationiteration:Ec("Animation","AnimationIteration"),animationstart:Ec("Animation","AnimationStart"),transitionend:Ec("Transition","TransitionEnd")},_d={},MS={};$r&&(MS=document.createElement("div").style,"AnimationEvent"in window||(delete Aa.animationend.animation,delete Aa.animationiteration.animation,delete Aa.animationstart.animation),"TransitionEvent"in window||delete Aa.transitionend.transition);function Oh(n){if(_d[n])return _d[n];if(!Aa[n])return n;var e=Aa[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in MS)return _d[n]=e[t];return n}var ES=Oh("animationend"),wS=Oh("animationiteration"),TS=Oh("animationstart"),AS=Oh("transitionend"),CS=new Map,f0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qs(n,e){CS.set(n,e),Wo(e,[n])}for(var vd=0;vd<f0.length;vd++){var xd=f0[vd],UT=xd.toLowerCase(),IT=xd[0].toUpperCase()+xd.slice(1);qs(UT,"on"+IT)}qs(ES,"onAnimationEnd");qs(wS,"onAnimationIteration");qs(TS,"onAnimationStart");qs("dblclick","onDoubleClick");qs("focusin","onFocus");qs("focusout","onBlur");qs(AS,"onTransitionEnd");rl("onMouseEnter",["mouseout","mouseover"]);rl("onMouseLeave",["mouseout","mouseover"]);rl("onPointerEnter",["pointerout","pointerover"]);rl("onPointerLeave",["pointerout","pointerover"]);Wo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jl));function h0(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Uw(i,e,void 0,n),n.currentTarget=null}function RS(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;h0(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;h0(r,a,u),s=l}}}if(Xf)throw n=Gp,Xf=!1,Gp=null,n}function Lt(n,e){var t=e[Jp];t===void 0&&(t=e[Jp]=new Set);var i=n+"__bubble";t.has(i)||(bS(e,n,2,!1),t.add(i))}function yd(n,e,t){var i=0;e&&(i|=4),bS(t,n,i,e)}var wc="_reactListening"+Math.random().toString(36).slice(2);function Fu(n){if(!n[wc]){n[wc]=!0,Oy.forEach(function(t){t!=="selectionchange"&&(OT.has(t)||yd(t,!1,n),yd(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[wc]||(e[wc]=!0,yd("selectionchange",!1,e))}}function bS(n,e,t,i){switch(hS(e)){case 1:var r=Kw;break;case 4:r=Zw;break;default:r=yg}t=r.bind(null,e,t,n),r=void 0,!Vp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Sd(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=_o(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Qy(function(){var u=s,c=gg(t),h=[];e:{var f=CS.get(n);if(f!==void 0){var p=Mg,m=n;switch(n){case"keypress":if(wf(t)===0)break e;case"keydown":case"keyup":p=hT;break;case"focusin":m="focus",p=pd;break;case"focusout":m="blur",p=pd;break;case"beforeblur":case"afterblur":p=pd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=e0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=eT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=mT;break;case ES:case wS:case TS:p=iT;break;case AS:p=_T;break;case"scroll":p=Qw;break;case"wheel":p=xT;break;case"copy":case"cut":case"paste":p=sT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=n0}var _=(e&4)!==0,g=!_&&n==="scroll",d=_?f!==null?f+"Capture":null:f;_=[];for(var v=u,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,d!==null&&(y=Lu(v,d),y!=null&&_.push(ku(v,y,x)))),g)break;v=v.return}0<_.length&&(f=new p(f,m,null,t,c),h.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==Bp&&(m=t.relatedTarget||t.fromElement)&&(_o(m)||m[Kr]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(m=t.relatedTarget||t.toElement,p=u,m=m?_o(m):null,m!==null&&(g=Xo(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=u),p!==m)){if(_=e0,y="onMouseLeave",d="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=n0,y="onPointerLeave",d="onPointerEnter",v="pointer"),g=p==null?f:Ca(p),x=m==null?f:Ca(m),f=new _(y,v+"leave",p,t,c),f.target=g,f.relatedTarget=x,y=null,_o(c)===u&&(_=new _(d,v+"enter",m,t,c),_.target=x,_.relatedTarget=g,y=_),g=y,p&&m)t:{for(_=p,d=m,v=0,x=_;x;x=Yo(x))v++;for(x=0,y=d;y;y=Yo(y))x++;for(;0<v-x;)_=Yo(_),v--;for(;0<x-v;)d=Yo(d),x--;for(;v--;){if(_===d||d!==null&&_===d.alternate)break t;_=Yo(_),d=Yo(d)}_=null}else _=null;p!==null&&d0(h,f,p,_,!1),m!==null&&g!==null&&d0(h,g,m,_,!0)}}e:{if(f=u?Ca(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var A=AT;else if(s0(f))if(vS)A=PT;else{A=RT;var w=CT}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(A=bT);if(A&&(A=A(n,u))){_S(h,A,t,c);break e}w&&w(n,f,u),n==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&Ip(f,"number",f.value)}switch(w=u?Ca(u):window,n){case"focusin":(s0(w)||w.contentEditable==="true")&&(Ta=w,Yp=u,fu=null);break;case"focusout":fu=Yp=Ta=null;break;case"mousedown":qp=!0;break;case"contextmenu":case"mouseup":case"dragend":qp=!1,c0(h,t,c);break;case"selectionchange":if(NT)break;case"keydown":case"keyup":c0(h,t,c)}var M;if(wg)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else wa?mS(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(pS&&t.locale!=="ko"&&(wa||P!=="onCompositionStart"?P==="onCompositionEnd"&&wa&&(M=dS()):(_s=c,Sg="value"in _s?_s.value:_s.textContent,wa=!0)),w=Kf(u,P),0<w.length&&(P=new t0(P,n,null,t,c),h.push({event:P,listeners:w}),M?P.data=M:(M=gS(t),M!==null&&(P.data=M)))),(M=ST?MT(n,t):ET(n,t))&&(u=Kf(u,"onBeforeInput"),0<u.length&&(c=new t0("onBeforeInput","beforeinput",null,t,c),h.push({event:c,listeners:u}),c.data=M))}RS(h,e)})}function ku(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Kf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Lu(n,t),s!=null&&i.unshift(ku(n,s,r)),s=Lu(n,e),s!=null&&i.push(ku(n,s,r))),n=n.return}return i}function Yo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function d0(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Lu(t,s),l!=null&&o.unshift(ku(t,l,a))):r||(l=Lu(t,s),l!=null&&o.push(ku(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var FT=/\r\n?/g,kT=/\u0000|\uFFFD/g;function p0(n){return(typeof n=="string"?n:""+n).replace(FT,`
`).replace(kT,"")}function Tc(n,e,t){if(e=p0(e),p0(n)!==e&&t)throw Error(oe(425))}function Zf(){}var $p=null,Kp=null;function Zp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qp=typeof setTimeout=="function"?setTimeout:void 0,zT=typeof clearTimeout=="function"?clearTimeout:void 0,m0=typeof Promise=="function"?Promise:void 0,BT=typeof queueMicrotask=="function"?queueMicrotask:typeof m0<"u"?function(n){return m0.resolve(null).then(n).catch(HT)}:Qp;function HT(n){setTimeout(function(){throw n})}function Md(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Uu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Uu(e)}function bs(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function g0(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var wl=Math.random().toString(36).slice(2),Mr="__reactFiber$"+wl,zu="__reactProps$"+wl,Kr="__reactContainer$"+wl,Jp="__reactEvents$"+wl,VT="__reactListeners$"+wl,GT="__reactHandles$"+wl;function _o(n){var e=n[Mr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Kr]||t[Mr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=g0(n);n!==null;){if(t=n[Mr])return t;n=g0(n)}return e}n=t,t=n.parentNode}return null}function ac(n){return n=n[Mr]||n[Kr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ca(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(oe(33))}function Fh(n){return n[zu]||null}var em=[],Ra=-1;function $s(n){return{current:n}}function Nt(n){0>Ra||(n.current=em[Ra],em[Ra]=null,Ra--)}function bt(n,e){Ra++,em[Ra]=n.current,n.current=e}var Vs={},Fn=$s(Vs),si=$s(!1),Io=Vs;function sl(n,e){var t=n.type.contextTypes;if(!t)return Vs;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function oi(n){return n=n.childContextTypes,n!=null}function Qf(){Nt(si),Nt(Fn)}function _0(n,e,t){if(Fn.current!==Vs)throw Error(oe(168));bt(Fn,e),bt(si,t)}function PS(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,Cw(n)||"Unknown",r));return Xt({},t,i)}function Jf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Vs,Io=Fn.current,bt(Fn,n),bt(si,si.current),!0}function v0(n,e,t){var i=n.stateNode;if(!i)throw Error(oe(169));t?(n=PS(n,e,Io),i.__reactInternalMemoizedMergedChildContext=n,Nt(si),Nt(Fn),bt(Fn,n)):Nt(si),bt(si,t)}var kr=null,kh=!1,Ed=!1;function LS(n){kr===null?kr=[n]:kr.push(n)}function WT(n){kh=!0,LS(n)}function Ks(){if(!Ed&&kr!==null){Ed=!0;var n=0,e=St;try{var t=kr;for(St=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}kr=null,kh=!1}catch(r){throw kr!==null&&(kr=kr.slice(n+1)),nS(_g,Ks),r}finally{St=e,Ed=!1}}return null}var ba=[],Pa=0,eh=null,th=0,Gi=[],Wi=0,Oo=null,Gr=1,Wr="";function ao(n,e){ba[Pa++]=th,ba[Pa++]=eh,eh=n,th=e}function DS(n,e,t){Gi[Wi++]=Gr,Gi[Wi++]=Wr,Gi[Wi++]=Oo,Oo=n;var i=Gr;n=Wr;var r=32-pr(i)-1;i&=~(1<<r),t+=1;var s=32-pr(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Gr=1<<32-pr(e)+r|t<<r|i,Wr=s+n}else Gr=1<<s|t<<r|i,Wr=n}function Ag(n){n.return!==null&&(ao(n,1),DS(n,1,0))}function Cg(n){for(;n===eh;)eh=ba[--Pa],ba[Pa]=null,th=ba[--Pa],ba[Pa]=null;for(;n===Oo;)Oo=Gi[--Wi],Gi[Wi]=null,Wr=Gi[--Wi],Gi[Wi]=null,Gr=Gi[--Wi],Gi[Wi]=null}var Li=null,Ci=null,Ot=!1,cr=null;function NS(n,e){var t=Ki(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function x0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Li=n,Ci=bs(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Li=n,Ci=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Oo!==null?{id:Gr,overflow:Wr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Ki(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Li=n,Ci=null,!0):!1;default:return!1}}function tm(n){return(n.mode&1)!==0&&(n.flags&128)===0}function nm(n){if(Ot){var e=Ci;if(e){var t=e;if(!x0(n,e)){if(tm(n))throw Error(oe(418));e=bs(t.nextSibling);var i=Li;e&&x0(n,e)?NS(i,t):(n.flags=n.flags&-4097|2,Ot=!1,Li=n)}}else{if(tm(n))throw Error(oe(418));n.flags=n.flags&-4097|2,Ot=!1,Li=n}}}function y0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Li=n}function Ac(n){if(n!==Li)return!1;if(!Ot)return y0(n),Ot=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Zp(n.type,n.memoizedProps)),e&&(e=Ci)){if(tm(n))throw US(),Error(oe(418));for(;e;)NS(n,e),e=bs(e.nextSibling)}if(y0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(oe(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Ci=bs(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Ci=null}}else Ci=Li?bs(n.stateNode.nextSibling):null;return!0}function US(){for(var n=Ci;n;)n=bs(n.nextSibling)}function ol(){Ci=Li=null,Ot=!1}function Rg(n){cr===null?cr=[n]:cr.push(n)}var XT=ns.ReactCurrentBatchConfig;function Nl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(oe(309));var i=t.stateNode}if(!i)throw Error(oe(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(oe(284));if(!t._owner)throw Error(oe(290,n))}return n}function Cc(n,e){throw n=Object.prototype.toString.call(e),Error(oe(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function S0(n){var e=n._init;return e(n._payload)}function IS(n){function e(d,v){if(n){var x=d.deletions;x===null?(d.deletions=[v],d.flags|=16):x.push(v)}}function t(d,v){if(!n)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=Ns(d,v),d.index=0,d.sibling=null,d}function s(d,v,x){return d.index=x,n?(x=d.alternate,x!==null?(x=x.index,x<v?(d.flags|=2,v):x):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,v,x,y){return v===null||v.tag!==6?(v=Pd(x,d.mode,y),v.return=d,v):(v=r(v,x),v.return=d,v)}function l(d,v,x,y){var A=x.type;return A===Ea?c(d,v,x.props.children,y,x.key):v!==null&&(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ds&&S0(A)===v.type)?(y=r(v,x.props),y.ref=Nl(d,v,x),y.return=d,y):(y=Lf(x.type,x.key,x.props,null,d.mode,y),y.ref=Nl(d,v,x),y.return=d,y)}function u(d,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Ld(x,d.mode,y),v.return=d,v):(v=r(v,x.children||[]),v.return=d,v)}function c(d,v,x,y,A){return v===null||v.tag!==7?(v=wo(x,d.mode,y,A),v.return=d,v):(v=r(v,x),v.return=d,v)}function h(d,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Pd(""+v,d.mode,x),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case gc:return x=Lf(v.type,v.key,v.props,null,d.mode,x),x.ref=Nl(d,null,v),x.return=d,x;case Ma:return v=Ld(v,d.mode,x),v.return=d,v;case ds:var y=v._init;return h(d,y(v._payload),x)}if(Zl(v)||Rl(v))return v=wo(v,d.mode,x,null),v.return=d,v;Cc(d,v)}return null}function f(d,v,x,y){var A=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return A!==null?null:a(d,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case gc:return x.key===A?l(d,v,x,y):null;case Ma:return x.key===A?u(d,v,x,y):null;case ds:return A=x._init,f(d,v,A(x._payload),y)}if(Zl(x)||Rl(x))return A!==null?null:c(d,v,x,y,null);Cc(d,x)}return null}function p(d,v,x,y,A){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(x)||null,a(v,d,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case gc:return d=d.get(y.key===null?x:y.key)||null,l(v,d,y,A);case Ma:return d=d.get(y.key===null?x:y.key)||null,u(v,d,y,A);case ds:var w=y._init;return p(d,v,x,w(y._payload),A)}if(Zl(y)||Rl(y))return d=d.get(x)||null,c(v,d,y,A,null);Cc(v,y)}return null}function m(d,v,x,y){for(var A=null,w=null,M=v,P=v=0,S=null;M!==null&&P<x.length;P++){M.index>P?(S=M,M=null):S=M.sibling;var E=f(d,M,x[P],y);if(E===null){M===null&&(M=S);break}n&&M&&E.alternate===null&&e(d,M),v=s(E,v,P),w===null?A=E:w.sibling=E,w=E,M=S}if(P===x.length)return t(d,M),Ot&&ao(d,P),A;if(M===null){for(;P<x.length;P++)M=h(d,x[P],y),M!==null&&(v=s(M,v,P),w===null?A=M:w.sibling=M,w=M);return Ot&&ao(d,P),A}for(M=i(d,M);P<x.length;P++)S=p(M,d,P,x[P],y),S!==null&&(n&&S.alternate!==null&&M.delete(S.key===null?P:S.key),v=s(S,v,P),w===null?A=S:w.sibling=S,w=S);return n&&M.forEach(function(U){return e(d,U)}),Ot&&ao(d,P),A}function _(d,v,x,y){var A=Rl(x);if(typeof A!="function")throw Error(oe(150));if(x=A.call(x),x==null)throw Error(oe(151));for(var w=A=null,M=v,P=v=0,S=null,E=x.next();M!==null&&!E.done;P++,E=x.next()){M.index>P?(S=M,M=null):S=M.sibling;var U=f(d,M,E.value,y);if(U===null){M===null&&(M=S);break}n&&M&&U.alternate===null&&e(d,M),v=s(U,v,P),w===null?A=U:w.sibling=U,w=U,M=S}if(E.done)return t(d,M),Ot&&ao(d,P),A;if(M===null){for(;!E.done;P++,E=x.next())E=h(d,E.value,y),E!==null&&(v=s(E,v,P),w===null?A=E:w.sibling=E,w=E);return Ot&&ao(d,P),A}for(M=i(d,M);!E.done;P++,E=x.next())E=p(M,d,P,E.value,y),E!==null&&(n&&E.alternate!==null&&M.delete(E.key===null?P:E.key),v=s(E,v,P),w===null?A=E:w.sibling=E,w=E);return n&&M.forEach(function(O){return e(d,O)}),Ot&&ao(d,P),A}function g(d,v,x,y){if(typeof x=="object"&&x!==null&&x.type===Ea&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case gc:e:{for(var A=x.key,w=v;w!==null;){if(w.key===A){if(A=x.type,A===Ea){if(w.tag===7){t(d,w.sibling),v=r(w,x.props.children),v.return=d,d=v;break e}}else if(w.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ds&&S0(A)===w.type){t(d,w.sibling),v=r(w,x.props),v.ref=Nl(d,w,x),v.return=d,d=v;break e}t(d,w);break}else e(d,w);w=w.sibling}x.type===Ea?(v=wo(x.props.children,d.mode,y,x.key),v.return=d,d=v):(y=Lf(x.type,x.key,x.props,null,d.mode,y),y.ref=Nl(d,v,x),y.return=d,d=y)}return o(d);case Ma:e:{for(w=x.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(d,v.sibling),v=r(v,x.children||[]),v.return=d,d=v;break e}else{t(d,v);break}else e(d,v);v=v.sibling}v=Ld(x,d.mode,y),v.return=d,d=v}return o(d);case ds:return w=x._init,g(d,v,w(x._payload),y)}if(Zl(x))return m(d,v,x,y);if(Rl(x))return _(d,v,x,y);Cc(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(d,v.sibling),v=r(v,x),v.return=d,d=v):(t(d,v),v=Pd(x,d.mode,y),v.return=d,d=v),o(d)):t(d,v)}return g}var al=IS(!0),OS=IS(!1),nh=$s(null),ih=null,La=null,bg=null;function Pg(){bg=La=ih=null}function Lg(n){var e=nh.current;Nt(nh),n._currentValue=e}function im(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Xa(n,e){ih=n,bg=La=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(ii=!0),n.firstContext=null)}function tr(n){var e=n._currentValue;if(bg!==n)if(n={context:n,memoizedValue:e,next:null},La===null){if(ih===null)throw Error(oe(308));La=n,ih.dependencies={lanes:0,firstContext:n}}else La=La.next=n;return e}var vo=null;function Dg(n){vo===null?vo=[n]:vo.push(n)}function FS(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Dg(e)):(t.next=r.next,r.next=t),e.interleaved=t,Zr(n,i)}function Zr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ps=!1;function Ng(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kS(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Yr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ps(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,dt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Zr(n,t)}return r=i.interleaved,r===null?(e.next=e,Dg(i)):(e.next=r.next,r.next=e),i.interleaved=e,Zr(n,t)}function Tf(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,vg(n,t)}}function M0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function rh(n,e,t,i){var r=n.updateQueue;ps=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=n,_=a;switch(f=e,p=t,_.tag){case 1:if(m=_.payload,typeof m=="function"){h=m.call(p,h,f);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=_.payload,f=typeof m=="function"?m.call(p,h,f):m,f==null)break e;h=Xt({},h,f);break e;case 2:ps=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ko|=o,n.lanes=o,n.memoizedState=h}}function E0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var lc={},Cr=$s(lc),Bu=$s(lc),Hu=$s(lc);function xo(n){if(n===lc)throw Error(oe(174));return n}function Ug(n,e){switch(bt(Hu,e),bt(Bu,n),bt(Cr,lc),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Fp(e,n)}Nt(Cr),bt(Cr,e)}function ll(){Nt(Cr),Nt(Bu),Nt(Hu)}function zS(n){xo(Hu.current);var e=xo(Cr.current),t=Fp(e,n.type);e!==t&&(bt(Bu,n),bt(Cr,t))}function Ig(n){Bu.current===n&&(Nt(Cr),Nt(Bu))}var Ht=$s(0);function sh(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wd=[];function Og(){for(var n=0;n<wd.length;n++)wd[n]._workInProgressVersionPrimary=null;wd.length=0}var Af=ns.ReactCurrentDispatcher,Td=ns.ReactCurrentBatchConfig,Fo=0,Wt=null,ln=null,gn=null,oh=!1,hu=!1,Vu=0,jT=0;function Cn(){throw Error(oe(321))}function Fg(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!gr(n[t],e[t]))return!1;return!0}function kg(n,e,t,i,r,s){if(Fo=s,Wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Af.current=n===null||n.memoizedState===null?KT:ZT,n=t(i,r),hu){s=0;do{if(hu=!1,Vu=0,25<=s)throw Error(oe(301));s+=1,gn=ln=null,e.updateQueue=null,Af.current=QT,n=t(i,r)}while(hu)}if(Af.current=ah,e=ln!==null&&ln.next!==null,Fo=0,gn=ln=Wt=null,oh=!1,e)throw Error(oe(300));return n}function zg(){var n=Vu!==0;return Vu=0,n}function vr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?Wt.memoizedState=gn=n:gn=gn.next=n,gn}function nr(){if(ln===null){var n=Wt.alternate;n=n!==null?n.memoizedState:null}else n=ln.next;var e=gn===null?Wt.memoizedState:gn.next;if(e!==null)gn=e,ln=n;else{if(n===null)throw Error(oe(310));ln=n,n={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},gn===null?Wt.memoizedState=gn=n:gn=gn.next=n}return gn}function Gu(n,e){return typeof e=="function"?e(n):e}function Ad(n){var e=nr(),t=e.queue;if(t===null)throw Error(oe(311));t.lastRenderedReducer=n;var i=ln,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Fo&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Wt.lanes|=c,ko|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,gr(i,e.memoizedState)||(ii=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Wt.lanes|=s,ko|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Cd(n){var e=nr(),t=e.queue;if(t===null)throw Error(oe(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);gr(s,e.memoizedState)||(ii=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function BS(){}function HS(n,e){var t=Wt,i=nr(),r=e(),s=!gr(i.memoizedState,r);if(s&&(i.memoizedState=r,ii=!0),i=i.queue,Bg(WS.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||gn!==null&&gn.memoizedState.tag&1){if(t.flags|=2048,Wu(9,GS.bind(null,t,i,r,e),void 0,null),_n===null)throw Error(oe(349));Fo&30||VS(t,e,r)}return r}function VS(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Wt.updateQueue,e===null?(e={lastEffect:null,stores:null},Wt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function GS(n,e,t,i){e.value=t,e.getSnapshot=i,XS(e)&&jS(n)}function WS(n,e,t){return t(function(){XS(e)&&jS(n)})}function XS(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!gr(n,t)}catch{return!0}}function jS(n){var e=Zr(n,1);e!==null&&mr(e,n,1,-1)}function w0(n){var e=vr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gu,lastRenderedState:n},e.queue=n,n=n.dispatch=$T.bind(null,Wt,n),[e.memoizedState,n]}function Wu(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Wt.updateQueue,e===null?(e={lastEffect:null,stores:null},Wt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function YS(){return nr().memoizedState}function Cf(n,e,t,i){var r=vr();Wt.flags|=n,r.memoizedState=Wu(1|e,t,void 0,i===void 0?null:i)}function zh(n,e,t,i){var r=nr();i=i===void 0?null:i;var s=void 0;if(ln!==null){var o=ln.memoizedState;if(s=o.destroy,i!==null&&Fg(i,o.deps)){r.memoizedState=Wu(e,t,s,i);return}}Wt.flags|=n,r.memoizedState=Wu(1|e,t,s,i)}function T0(n,e){return Cf(8390656,8,n,e)}function Bg(n,e){return zh(2048,8,n,e)}function qS(n,e){return zh(4,2,n,e)}function $S(n,e){return zh(4,4,n,e)}function KS(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function ZS(n,e,t){return t=t!=null?t.concat([n]):null,zh(4,4,KS.bind(null,e,n),t)}function Hg(){}function QS(n,e){var t=nr();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Fg(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function JS(n,e){var t=nr();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Fg(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function eM(n,e,t){return Fo&21?(gr(t,e)||(t=sS(),Wt.lanes|=t,ko|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,ii=!0),n.memoizedState=t)}function YT(n,e){var t=St;St=t!==0&&4>t?t:4,n(!0);var i=Td.transition;Td.transition={};try{n(!1),e()}finally{St=t,Td.transition=i}}function tM(){return nr().memoizedState}function qT(n,e,t){var i=Ds(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},nM(n))iM(e,t);else if(t=FS(n,e,t,i),t!==null){var r=Kn();mr(t,n,i,r),rM(t,e,i)}}function $T(n,e,t){var i=Ds(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(nM(n))iM(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,gr(a,o)){var l=e.interleaved;l===null?(r.next=r,Dg(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=FS(n,e,r,i),t!==null&&(r=Kn(),mr(t,n,i,r),rM(t,e,i))}}function nM(n){var e=n.alternate;return n===Wt||e!==null&&e===Wt}function iM(n,e){hu=oh=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function rM(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,vg(n,t)}}var ah={readContext:tr,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useInsertionEffect:Cn,useLayoutEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useMutableSource:Cn,useSyncExternalStore:Cn,useId:Cn,unstable_isNewReconciler:!1},KT={readContext:tr,useCallback:function(n,e){return vr().memoizedState=[n,e===void 0?null:e],n},useContext:tr,useEffect:T0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Cf(4194308,4,KS.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Cf(4194308,4,n,e)},useInsertionEffect:function(n,e){return Cf(4,2,n,e)},useMemo:function(n,e){var t=vr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=vr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=qT.bind(null,Wt,n),[i.memoizedState,n]},useRef:function(n){var e=vr();return n={current:n},e.memoizedState=n},useState:w0,useDebugValue:Hg,useDeferredValue:function(n){return vr().memoizedState=n},useTransition:function(){var n=w0(!1),e=n[0];return n=YT.bind(null,n[1]),vr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Wt,r=vr();if(Ot){if(t===void 0)throw Error(oe(407));t=t()}else{if(t=e(),_n===null)throw Error(oe(349));Fo&30||VS(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,T0(WS.bind(null,i,s,n),[n]),i.flags|=2048,Wu(9,GS.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=vr(),e=_n.identifierPrefix;if(Ot){var t=Wr,i=Gr;t=(i&~(1<<32-pr(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Vu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=jT++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},ZT={readContext:tr,useCallback:QS,useContext:tr,useEffect:Bg,useImperativeHandle:ZS,useInsertionEffect:qS,useLayoutEffect:$S,useMemo:JS,useReducer:Ad,useRef:YS,useState:function(){return Ad(Gu)},useDebugValue:Hg,useDeferredValue:function(n){var e=nr();return eM(e,ln.memoizedState,n)},useTransition:function(){var n=Ad(Gu)[0],e=nr().memoizedState;return[n,e]},useMutableSource:BS,useSyncExternalStore:HS,useId:tM,unstable_isNewReconciler:!1},QT={readContext:tr,useCallback:QS,useContext:tr,useEffect:Bg,useImperativeHandle:ZS,useInsertionEffect:qS,useLayoutEffect:$S,useMemo:JS,useReducer:Cd,useRef:YS,useState:function(){return Cd(Gu)},useDebugValue:Hg,useDeferredValue:function(n){var e=nr();return ln===null?e.memoizedState=n:eM(e,ln.memoizedState,n)},useTransition:function(){var n=Cd(Gu)[0],e=nr().memoizedState;return[n,e]},useMutableSource:BS,useSyncExternalStore:HS,useId:tM,unstable_isNewReconciler:!1};function lr(n,e){if(n&&n.defaultProps){e=Xt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function rm(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Xt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Bh={isMounted:function(n){return(n=n._reactInternals)?Xo(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Kn(),r=Ds(n),s=Yr(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ps(n,s,r),e!==null&&(mr(e,n,r,i),Tf(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Kn(),r=Ds(n),s=Yr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ps(n,s,r),e!==null&&(mr(e,n,r,i),Tf(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Kn(),i=Ds(n),r=Yr(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ps(n,r,i),e!==null&&(mr(e,n,i,t),Tf(e,n,i))}};function A0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ou(t,i)||!Ou(r,s):!0}function sM(n,e,t){var i=!1,r=Vs,s=e.contextType;return typeof s=="object"&&s!==null?s=tr(s):(r=oi(e)?Io:Fn.current,i=e.contextTypes,s=(i=i!=null)?sl(n,r):Vs),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Bh,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function C0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Bh.enqueueReplaceState(e,e.state,null)}function sm(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Ng(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=tr(s):(s=oi(e)?Io:Fn.current,r.context=sl(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rm(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Bh.enqueueReplaceState(r,r.state,null),rh(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function ul(n,e){try{var t="",i=e;do t+=Aw(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Rd(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function om(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var JT=typeof WeakMap=="function"?WeakMap:Map;function oM(n,e,t){t=Yr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){uh||(uh=!0,gm=i),om(n,e)},t}function aM(n,e,t){t=Yr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){om(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){om(n,e),typeof i!="function"&&(Ls===null?Ls=new Set([this]):Ls.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function R0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new JT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=dA.bind(null,n,e,t),e.then(n,n))}function b0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function P0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Yr(-1,1),e.tag=2,Ps(t,e,1))),t.lanes|=1),n)}var eA=ns.ReactCurrentOwner,ii=!1;function Wn(n,e,t,i){e.child=n===null?OS(e,null,t,i):al(e,n.child,t,i)}function L0(n,e,t,i,r){t=t.render;var s=e.ref;return Xa(e,r),i=kg(n,e,t,i,s,r),t=zg(),n!==null&&!ii?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Qr(n,e,r)):(Ot&&t&&Ag(e),e.flags|=1,Wn(n,e,i,r),e.child)}function D0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!$g(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,lM(n,e,s,i,r)):(n=Lf(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Ou,t(o,i)&&n.ref===e.ref)return Qr(n,e,r)}return e.flags|=1,n=Ns(s,i),n.ref=e.ref,n.return=e,e.child=n}function lM(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Ou(s,i)&&n.ref===e.ref)if(ii=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(ii=!0);else return e.lanes=n.lanes,Qr(n,e,r)}return am(n,e,t,i,r)}function uM(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},bt(Na,yi),yi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,bt(Na,yi),yi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,bt(Na,yi),yi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,bt(Na,yi),yi|=i;return Wn(n,e,r,t),e.child}function cM(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function am(n,e,t,i,r){var s=oi(t)?Io:Fn.current;return s=sl(e,s),Xa(e,r),t=kg(n,e,t,i,s,r),i=zg(),n!==null&&!ii?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Qr(n,e,r)):(Ot&&i&&Ag(e),e.flags|=1,Wn(n,e,t,r),e.child)}function N0(n,e,t,i,r){if(oi(t)){var s=!0;Jf(e)}else s=!1;if(Xa(e,r),e.stateNode===null)Rf(n,e),sM(e,t,i),sm(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=tr(u):(u=oi(t)?Io:Fn.current,u=sl(e,u));var c=t.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&C0(e,o,i,u),ps=!1;var f=e.memoizedState;o.state=f,rh(e,i,o,r),l=e.memoizedState,a!==i||f!==l||si.current||ps?(typeof c=="function"&&(rm(e,t,c,i),l=e.memoizedState),(a=ps||A0(e,t,a,i,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,kS(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:lr(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=tr(l):(l=oi(t)?Io:Fn.current,l=sl(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&C0(e,o,i,l),ps=!1,f=e.memoizedState,o.state=f,rh(e,i,o,r);var m=e.memoizedState;a!==h||f!==m||si.current||ps?(typeof p=="function"&&(rm(e,t,p,i),m=e.memoizedState),(u=ps||A0(e,t,u,i,f,m,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return lm(n,e,t,i,s,r)}function lm(n,e,t,i,r,s){cM(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&v0(e,t,!1),Qr(n,e,s);i=e.stateNode,eA.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=al(e,n.child,null,s),e.child=al(e,null,a,s)):Wn(n,e,a,s),e.memoizedState=i.state,r&&v0(e,t,!0),e.child}function fM(n){var e=n.stateNode;e.pendingContext?_0(n,e.pendingContext,e.pendingContext!==e.context):e.context&&_0(n,e.context,!1),Ug(n,e.containerInfo)}function U0(n,e,t,i,r){return ol(),Rg(r),e.flags|=256,Wn(n,e,t,i),e.child}var um={dehydrated:null,treeContext:null,retryLane:0};function cm(n){return{baseLanes:n,cachePool:null,transitions:null}}function hM(n,e,t){var i=e.pendingProps,r=Ht.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),bt(Ht,r&1),n===null)return nm(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gh(o,i,0,null),n=wo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=cm(t),e.memoizedState=um,n):Vg(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return tA(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ns(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ns(a,s):(s=wo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?cm(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=um,i}return s=n.child,n=s.sibling,i=Ns(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Vg(n,e){return e=Gh({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Rc(n,e,t,i){return i!==null&&Rg(i),al(e,n.child,null,t),n=Vg(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function tA(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Rd(Error(oe(422))),Rc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Gh({mode:"visible",children:i.children},r,0,null),s=wo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&al(e,n.child,null,o),e.child.memoizedState=cm(o),e.memoizedState=um,s);if(!(e.mode&1))return Rc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=Rd(s,i,void 0),Rc(n,e,o,i)}if(a=(o&n.childLanes)!==0,ii||a){if(i=_n,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Zr(n,r),mr(i,n,r,-1))}return qg(),i=Rd(Error(oe(421))),Rc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=pA.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Ci=bs(r.nextSibling),Li=e,Ot=!0,cr=null,n!==null&&(Gi[Wi++]=Gr,Gi[Wi++]=Wr,Gi[Wi++]=Oo,Gr=n.id,Wr=n.overflow,Oo=e),e=Vg(e,i.children),e.flags|=4096,e)}function I0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),im(n.return,e,t)}function bd(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function dM(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Wn(n,e,i.children,t),i=Ht.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&I0(n,t,e);else if(n.tag===19)I0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(bt(Ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&sh(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),bd(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&sh(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}bd(e,!0,t,null,s);break;case"together":bd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Rf(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Qr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ko|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(oe(153));if(e.child!==null){for(n=e.child,t=Ns(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ns(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function nA(n,e,t){switch(e.tag){case 3:fM(e),ol();break;case 5:zS(e);break;case 1:oi(e.type)&&Jf(e);break;case 4:Ug(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;bt(nh,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(bt(Ht,Ht.current&1),e.flags|=128,null):t&e.child.childLanes?hM(n,e,t):(bt(Ht,Ht.current&1),n=Qr(n,e,t),n!==null?n.sibling:null);bt(Ht,Ht.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return dM(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),bt(Ht,Ht.current),i)break;return null;case 22:case 23:return e.lanes=0,uM(n,e,t)}return Qr(n,e,t)}var pM,fm,mM,gM;pM=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};fm=function(){};mM=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,xo(Cr.current);var s=null;switch(t){case"input":r=Np(n,r),i=Np(n,i),s=[];break;case"select":r=Xt({},r,{value:void 0}),i=Xt({},i,{value:void 0}),s=[];break;case"textarea":r=Op(n,r),i=Op(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Zf)}kp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bu.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bu.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Lt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};gM=function(n,e,t,i){t!==i&&(e.flags|=4)};function Ul(n,e){if(!Ot)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Rn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function iA(n,e,t){var i=e.pendingProps;switch(Cg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rn(e),null;case 1:return oi(e.type)&&Qf(),Rn(e),null;case 3:return i=e.stateNode,ll(),Nt(si),Nt(Fn),Og(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Ac(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,cr!==null&&(xm(cr),cr=null))),fm(n,e),Rn(e),null;case 5:Ig(e);var r=xo(Hu.current);if(t=e.type,n!==null&&e.stateNode!=null)mM(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return Rn(e),null}if(n=xo(Cr.current),Ac(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Mr]=e,i[zu]=s,n=(e.mode&1)!==0,t){case"dialog":Lt("cancel",i),Lt("close",i);break;case"iframe":case"object":case"embed":Lt("load",i);break;case"video":case"audio":for(r=0;r<Jl.length;r++)Lt(Jl[r],i);break;case"source":Lt("error",i);break;case"img":case"image":case"link":Lt("error",i),Lt("load",i);break;case"details":Lt("toggle",i);break;case"input":W_(i,s),Lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Lt("invalid",i);break;case"textarea":j_(i,s),Lt("invalid",i)}kp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Tc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Tc(i.textContent,a,n),r=["children",""+a]):bu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Lt("scroll",i)}switch(t){case"input":_c(i),X_(i,s,!0);break;case"textarea":_c(i),Y_(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Zf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Wy(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Mr]=e,n[zu]=i,pM(n,e,!1,!1),e.stateNode=n;e:{switch(o=zp(t,i),t){case"dialog":Lt("cancel",n),Lt("close",n),r=i;break;case"iframe":case"object":case"embed":Lt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Jl.length;r++)Lt(Jl[r],n);r=i;break;case"source":Lt("error",n),r=i;break;case"img":case"image":case"link":Lt("error",n),Lt("load",n),r=i;break;case"details":Lt("toggle",n),r=i;break;case"input":W_(n,i),r=Np(n,i),Lt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Xt({},i,{value:void 0}),Lt("invalid",n);break;case"textarea":j_(n,i),r=Op(n,i),Lt("invalid",n);break;default:r=i}kp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Yy(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xy(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Pu(n,l):typeof l=="number"&&Pu(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Lt("scroll",n):l!=null&&hg(n,s,l,o))}switch(t){case"input":_c(n),X_(n,i,!1);break;case"textarea":_c(n),Y_(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Hs(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ha(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ha(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Zf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Rn(e),null;case 6:if(n&&e.stateNode!=null)gM(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(t=xo(Hu.current),xo(Cr.current),Ac(e)){if(i=e.stateNode,t=e.memoizedProps,i[Mr]=e,(s=i.nodeValue!==t)&&(n=Li,n!==null))switch(n.tag){case 3:Tc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Tc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Mr]=e,e.stateNode=i}return Rn(e),null;case 13:if(Nt(Ht),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ot&&Ci!==null&&e.mode&1&&!(e.flags&128))US(),ol(),e.flags|=98560,s=!1;else if(s=Ac(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[Mr]=e}else ol(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Rn(e),s=!1}else cr!==null&&(xm(cr),cr=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Ht.current&1?cn===0&&(cn=3):qg())),e.updateQueue!==null&&(e.flags|=4),Rn(e),null);case 4:return ll(),fm(n,e),n===null&&Fu(e.stateNode.containerInfo),Rn(e),null;case 10:return Lg(e.type._context),Rn(e),null;case 17:return oi(e.type)&&Qf(),Rn(e),null;case 19:if(Nt(Ht),s=e.memoizedState,s===null)return Rn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ul(s,!1);else{if(cn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=sh(n),o!==null){for(e.flags|=128,Ul(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return bt(Ht,Ht.current&1|2),e.child}n=n.sibling}s.tail!==null&&Qt()>cl&&(e.flags|=128,i=!0,Ul(s,!1),e.lanes=4194304)}else{if(!i)if(n=sh(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ul(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ot)return Rn(e),null}else 2*Qt()-s.renderingStartTime>cl&&t!==1073741824&&(e.flags|=128,i=!0,Ul(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Qt(),e.sibling=null,t=Ht.current,bt(Ht,i?t&1|2:t&1),e):(Rn(e),null);case 22:case 23:return Yg(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yi&1073741824&&(Rn(e),e.subtreeFlags&6&&(e.flags|=8192)):Rn(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function rA(n,e){switch(Cg(e),e.tag){case 1:return oi(e.type)&&Qf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return ll(),Nt(si),Nt(Fn),Og(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Ig(e),null;case 13:if(Nt(Ht),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));ol()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Nt(Ht),null;case 4:return ll(),null;case 10:return Lg(e.type._context),null;case 22:case 23:return Yg(),null;case 24:return null;default:return null}}var bc=!1,Nn=!1,sA=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function Da(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Yt(n,e,i)}else t.current=null}function hm(n,e,t){try{t()}catch(i){Yt(n,e,i)}}var O0=!1;function oA(n,e){if($p=qf,n=SS(),Tg(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=n,f=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Kp={focusedElem:n,selectionRange:t},qf=!1,Ae=e;Ae!==null;)if(e=Ae,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ae=n;else for(;Ae!==null;){e=Ae;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var _=m.memoizedProps,g=m.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:lr(e.type,_),g);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(y){Yt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,Ae=n;break}Ae=e.return}return m=O0,O0=!1,m}function du(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&hm(e,t,s)}r=r.next}while(r!==i)}}function Hh(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function dm(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function _M(n){var e=n.alternate;e!==null&&(n.alternate=null,_M(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Mr],delete e[zu],delete e[Jp],delete e[VT],delete e[GT])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function vM(n){return n.tag===5||n.tag===3||n.tag===4}function F0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||vM(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function pm(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Zf));else if(i!==4&&(n=n.child,n!==null))for(pm(n,e,t),n=n.sibling;n!==null;)pm(n,e,t),n=n.sibling}function mm(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(mm(n,e,t),n=n.sibling;n!==null;)mm(n,e,t),n=n.sibling}var yn=null,ur=!1;function is(n,e,t){for(t=t.child;t!==null;)xM(n,e,t),t=t.sibling}function xM(n,e,t){if(Ar&&typeof Ar.onCommitFiberUnmount=="function")try{Ar.onCommitFiberUnmount(Nh,t)}catch{}switch(t.tag){case 5:Nn||Da(t,e);case 6:var i=yn,r=ur;yn=null,is(n,e,t),yn=i,ur=r,yn!==null&&(ur?(n=yn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):yn.removeChild(t.stateNode));break;case 18:yn!==null&&(ur?(n=yn,t=t.stateNode,n.nodeType===8?Md(n.parentNode,t):n.nodeType===1&&Md(n,t),Uu(n)):Md(yn,t.stateNode));break;case 4:i=yn,r=ur,yn=t.stateNode.containerInfo,ur=!0,is(n,e,t),yn=i,ur=r;break;case 0:case 11:case 14:case 15:if(!Nn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&hm(t,e,o),r=r.next}while(r!==i)}is(n,e,t);break;case 1:if(!Nn&&(Da(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Yt(t,e,a)}is(n,e,t);break;case 21:is(n,e,t);break;case 22:t.mode&1?(Nn=(i=Nn)||t.memoizedState!==null,is(n,e,t),Nn=i):is(n,e,t);break;default:is(n,e,t)}}function k0(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new sA),e.forEach(function(i){var r=mA.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ir(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:yn=a.stateNode,ur=!1;break e;case 3:yn=a.stateNode.containerInfo,ur=!0;break e;case 4:yn=a.stateNode.containerInfo,ur=!0;break e}a=a.return}if(yn===null)throw Error(oe(160));xM(s,o,r),yn=null,ur=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Yt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yM(e,n),e=e.sibling}function yM(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ir(e,n),_r(n),i&4){try{du(3,n,n.return),Hh(3,n)}catch(_){Yt(n,n.return,_)}try{du(5,n,n.return)}catch(_){Yt(n,n.return,_)}}break;case 1:ir(e,n),_r(n),i&512&&t!==null&&Da(t,t.return);break;case 5:if(ir(e,n),_r(n),i&512&&t!==null&&Da(t,t.return),n.flags&32){var r=n.stateNode;try{Pu(r,"")}catch(_){Yt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Vy(r,s),zp(a,o);var u=zp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Yy(r,h):c==="dangerouslySetInnerHTML"?Xy(r,h):c==="children"?Pu(r,h):hg(r,c,h,u)}switch(a){case"input":Up(r,s);break;case"textarea":Gy(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ha(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ha(r,!!s.multiple,s.defaultValue,!0):Ha(r,!!s.multiple,s.multiple?[]:"",!1))}r[zu]=s}catch(_){Yt(n,n.return,_)}}break;case 6:if(ir(e,n),_r(n),i&4){if(n.stateNode===null)throw Error(oe(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){Yt(n,n.return,_)}}break;case 3:if(ir(e,n),_r(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Uu(e.containerInfo)}catch(_){Yt(n,n.return,_)}break;case 4:ir(e,n),_r(n);break;case 13:ir(e,n),_r(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Xg=Qt())),i&4&&k0(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Nn=(u=Nn)||c,ir(e,n),Nn=u):ir(e,n),_r(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Ae=n,c=n.child;c!==null;){for(h=Ae=c;Ae!==null;){switch(f=Ae,p=f.child,f.tag){case 0:case 11:case 14:case 15:du(4,f,f.return);break;case 1:Da(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(_){Yt(i,t,_)}}break;case 5:Da(f,f.return);break;case 22:if(f.memoizedState!==null){B0(h);continue}}p!==null?(p.return=f,Ae=p):B0(h)}c=c.sibling}e:for(c=null,h=n;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=jy("display",o))}catch(_){Yt(n,n.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){Yt(n,n.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ir(e,n),_r(n),i&4&&k0(n);break;case 21:break;default:ir(e,n),_r(n)}}function _r(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(vM(t)){var i=t;break e}t=t.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Pu(r,""),i.flags&=-33);var s=F0(n);mm(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=F0(n);pm(n,a,o);break;default:throw Error(oe(161))}}catch(l){Yt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function aA(n,e,t){Ae=n,SM(n)}function SM(n,e,t){for(var i=(n.mode&1)!==0;Ae!==null;){var r=Ae,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||bc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Nn;a=bc;var u=Nn;if(bc=o,(Nn=l)&&!u)for(Ae=r;Ae!==null;)o=Ae,l=o.child,o.tag===22&&o.memoizedState!==null?H0(r):l!==null?(l.return=o,Ae=l):H0(r);for(;s!==null;)Ae=s,SM(s),s=s.sibling;Ae=r,bc=a,Nn=u}z0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ae=s):z0(n)}}function z0(n){for(;Ae!==null;){var e=Ae;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Nn||Hh(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Nn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:lr(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&E0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}E0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Uu(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}Nn||e.flags&512&&dm(e)}catch(f){Yt(e,e.return,f)}}if(e===n){Ae=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ae=t;break}Ae=e.return}}function B0(n){for(;Ae!==null;){var e=Ae;if(e===n){Ae=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ae=t;break}Ae=e.return}}function H0(n){for(;Ae!==null;){var e=Ae;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Hh(4,e)}catch(l){Yt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Yt(e,r,l)}}var s=e.return;try{dm(e)}catch(l){Yt(e,s,l)}break;case 5:var o=e.return;try{dm(e)}catch(l){Yt(e,o,l)}}}catch(l){Yt(e,e.return,l)}if(e===n){Ae=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ae=a;break}Ae=e.return}}var lA=Math.ceil,lh=ns.ReactCurrentDispatcher,Gg=ns.ReactCurrentOwner,Ji=ns.ReactCurrentBatchConfig,dt=0,_n=null,rn=null,En=0,yi=0,Na=$s(0),cn=0,Xu=null,ko=0,Vh=0,Wg=0,pu=null,ti=null,Xg=0,cl=1/0,Or=null,uh=!1,gm=null,Ls=null,Pc=!1,vs=null,ch=0,mu=0,_m=null,bf=-1,Pf=0;function Kn(){return dt&6?Qt():bf!==-1?bf:bf=Qt()}function Ds(n){return n.mode&1?dt&2&&En!==0?En&-En:XT.transition!==null?(Pf===0&&(Pf=sS()),Pf):(n=St,n!==0||(n=window.event,n=n===void 0?16:hS(n.type)),n):1}function mr(n,e,t,i){if(50<mu)throw mu=0,_m=null,Error(oe(185));sc(n,t,i),(!(dt&2)||n!==_n)&&(n===_n&&(!(dt&2)&&(Vh|=t),cn===4&&gs(n,En)),ai(n,i),t===1&&dt===0&&!(e.mode&1)&&(cl=Qt()+500,kh&&Ks()))}function ai(n,e){var t=n.callbackNode;Xw(n,e);var i=Yf(n,n===_n?En:0);if(i===0)t!==null&&K_(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&K_(t),e===1)n.tag===0?WT(V0.bind(null,n)):LS(V0.bind(null,n)),BT(function(){!(dt&6)&&Ks()}),t=null;else{switch(oS(i)){case 1:t=_g;break;case 4:t=iS;break;case 16:t=jf;break;case 536870912:t=rS;break;default:t=jf}t=bM(t,MM.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function MM(n,e){if(bf=-1,Pf=0,dt&6)throw Error(oe(327));var t=n.callbackNode;if(ja()&&n.callbackNode!==t)return null;var i=Yf(n,n===_n?En:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=fh(n,i);else{e=i;var r=dt;dt|=2;var s=wM();(_n!==n||En!==e)&&(Or=null,cl=Qt()+500,Eo(n,e));do try{fA();break}catch(a){EM(n,a)}while(!0);Pg(),lh.current=s,dt=r,rn!==null?e=0:(_n=null,En=0,e=cn)}if(e!==0){if(e===2&&(r=Wp(n),r!==0&&(i=r,e=vm(n,r))),e===1)throw t=Xu,Eo(n,0),gs(n,i),ai(n,Qt()),t;if(e===6)gs(n,i);else{if(r=n.current.alternate,!(i&30)&&!uA(r)&&(e=fh(n,i),e===2&&(s=Wp(n),s!==0&&(i=s,e=vm(n,s))),e===1))throw t=Xu,Eo(n,0),gs(n,i),ai(n,Qt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:lo(n,ti,Or);break;case 3:if(gs(n,i),(i&130023424)===i&&(e=Xg+500-Qt(),10<e)){if(Yf(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Kn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Qp(lo.bind(null,n,ti,Or),e);break}lo(n,ti,Or);break;case 4:if(gs(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-pr(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Qt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*lA(i/1960))-i,10<i){n.timeoutHandle=Qp(lo.bind(null,n,ti,Or),i);break}lo(n,ti,Or);break;case 5:lo(n,ti,Or);break;default:throw Error(oe(329))}}}return ai(n,Qt()),n.callbackNode===t?MM.bind(null,n):null}function vm(n,e){var t=pu;return n.current.memoizedState.isDehydrated&&(Eo(n,e).flags|=256),n=fh(n,e),n!==2&&(e=ti,ti=t,e!==null&&xm(e)),n}function xm(n){ti===null?ti=n:ti.push.apply(ti,n)}function uA(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!gr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gs(n,e){for(e&=~Wg,e&=~Vh,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-pr(e),i=1<<t;n[t]=-1,e&=~i}}function V0(n){if(dt&6)throw Error(oe(327));ja();var e=Yf(n,0);if(!(e&1))return ai(n,Qt()),null;var t=fh(n,e);if(n.tag!==0&&t===2){var i=Wp(n);i!==0&&(e=i,t=vm(n,i))}if(t===1)throw t=Xu,Eo(n,0),gs(n,e),ai(n,Qt()),t;if(t===6)throw Error(oe(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,lo(n,ti,Or),ai(n,Qt()),null}function jg(n,e){var t=dt;dt|=1;try{return n(e)}finally{dt=t,dt===0&&(cl=Qt()+500,kh&&Ks())}}function zo(n){vs!==null&&vs.tag===0&&!(dt&6)&&ja();var e=dt;dt|=1;var t=Ji.transition,i=St;try{if(Ji.transition=null,St=1,n)return n()}finally{St=i,Ji.transition=t,dt=e,!(dt&6)&&Ks()}}function Yg(){yi=Na.current,Nt(Na)}function Eo(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,zT(t)),rn!==null)for(t=rn.return;t!==null;){var i=t;switch(Cg(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Qf();break;case 3:ll(),Nt(si),Nt(Fn),Og();break;case 5:Ig(i);break;case 4:ll();break;case 13:Nt(Ht);break;case 19:Nt(Ht);break;case 10:Lg(i.type._context);break;case 22:case 23:Yg()}t=t.return}if(_n=n,rn=n=Ns(n.current,null),En=yi=e,cn=0,Xu=null,Wg=Vh=ko=0,ti=pu=null,vo!==null){for(e=0;e<vo.length;e++)if(t=vo[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}vo=null}return n}function EM(n,e){do{var t=rn;try{if(Pg(),Af.current=ah,oh){for(var i=Wt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}oh=!1}if(Fo=0,gn=ln=Wt=null,hu=!1,Vu=0,Gg.current=null,t===null||t.return===null){cn=1,Xu=e,rn=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=En,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=b0(o);if(p!==null){p.flags&=-257,P0(p,o,a,s,e),p.mode&1&&R0(s,u,e),e=p,l=u;var m=e.updateQueue;if(m===null){var _=new Set;_.add(l),e.updateQueue=_}else m.add(l);break e}else{if(!(e&1)){R0(s,u,e),qg();break e}l=Error(oe(426))}}else if(Ot&&a.mode&1){var g=b0(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),P0(g,o,a,s,e),Rg(ul(l,a));break e}}s=l=ul(l,a),cn!==4&&(cn=2),pu===null?pu=[s]:pu.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=oM(s,l,e);M0(s,d);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ls===null||!Ls.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=aM(s,a,e);M0(s,y);break e}}s=s.return}while(s!==null)}AM(t)}catch(A){e=A,rn===t&&t!==null&&(rn=t=t.return);continue}break}while(!0)}function wM(){var n=lh.current;return lh.current=ah,n===null?ah:n}function qg(){(cn===0||cn===3||cn===2)&&(cn=4),_n===null||!(ko&268435455)&&!(Vh&268435455)||gs(_n,En)}function fh(n,e){var t=dt;dt|=2;var i=wM();(_n!==n||En!==e)&&(Or=null,Eo(n,e));do try{cA();break}catch(r){EM(n,r)}while(!0);if(Pg(),dt=t,lh.current=i,rn!==null)throw Error(oe(261));return _n=null,En=0,cn}function cA(){for(;rn!==null;)TM(rn)}function fA(){for(;rn!==null&&!Ow();)TM(rn)}function TM(n){var e=RM(n.alternate,n,yi);n.memoizedProps=n.pendingProps,e===null?AM(n):rn=e,Gg.current=null}function AM(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=rA(t,e),t!==null){t.flags&=32767,rn=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{cn=6,rn=null;return}}else if(t=iA(t,e,yi),t!==null){rn=t;return}if(e=e.sibling,e!==null){rn=e;return}rn=e=n}while(e!==null);cn===0&&(cn=5)}function lo(n,e,t){var i=St,r=Ji.transition;try{Ji.transition=null,St=1,hA(n,e,t,i)}finally{Ji.transition=r,St=i}return null}function hA(n,e,t,i){do ja();while(vs!==null);if(dt&6)throw Error(oe(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(oe(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(jw(n,s),n===_n&&(rn=_n=null,En=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Pc||(Pc=!0,bM(jf,function(){return ja(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Ji.transition,Ji.transition=null;var o=St;St=1;var a=dt;dt|=4,Gg.current=null,oA(n,t),yM(t,n),DT(Kp),qf=!!$p,Kp=$p=null,n.current=t,aA(t),Fw(),dt=a,St=o,Ji.transition=s}else n.current=t;if(Pc&&(Pc=!1,vs=n,ch=r),s=n.pendingLanes,s===0&&(Ls=null),Bw(t.stateNode),ai(n,Qt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(uh)throw uh=!1,n=gm,gm=null,n;return ch&1&&n.tag!==0&&ja(),s=n.pendingLanes,s&1?n===_m?mu++:(mu=0,_m=n):mu=0,Ks(),null}function ja(){if(vs!==null){var n=oS(ch),e=Ji.transition,t=St;try{if(Ji.transition=null,St=16>n?16:n,vs===null)var i=!1;else{if(n=vs,vs=null,ch=0,dt&6)throw Error(oe(331));var r=dt;for(dt|=4,Ae=n.current;Ae!==null;){var s=Ae,o=s.child;if(Ae.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Ae=u;Ae!==null;){var c=Ae;switch(c.tag){case 0:case 11:case 15:du(8,c,s)}var h=c.child;if(h!==null)h.return=c,Ae=h;else for(;Ae!==null;){c=Ae;var f=c.sibling,p=c.return;if(_M(c),c===u){Ae=null;break}if(f!==null){f.return=p,Ae=f;break}Ae=p}}}var m=s.alternate;if(m!==null){var _=m.child;if(_!==null){m.child=null;do{var g=_.sibling;_.sibling=null,_=g}while(_!==null)}}Ae=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ae=o;else e:for(;Ae!==null;){if(s=Ae,s.flags&2048)switch(s.tag){case 0:case 11:case 15:du(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Ae=d;break e}Ae=s.return}}var v=n.current;for(Ae=v;Ae!==null;){o=Ae;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Ae=x;else e:for(o=v;Ae!==null;){if(a=Ae,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Hh(9,a)}}catch(A){Yt(a,a.return,A)}if(a===o){Ae=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Ae=y;break e}Ae=a.return}}if(dt=r,Ks(),Ar&&typeof Ar.onPostCommitFiberRoot=="function")try{Ar.onPostCommitFiberRoot(Nh,n)}catch{}i=!0}return i}finally{St=t,Ji.transition=e}}return!1}function G0(n,e,t){e=ul(t,e),e=oM(n,e,1),n=Ps(n,e,1),e=Kn(),n!==null&&(sc(n,1,e),ai(n,e))}function Yt(n,e,t){if(n.tag===3)G0(n,n,t);else for(;e!==null;){if(e.tag===3){G0(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ls===null||!Ls.has(i))){n=ul(t,n),n=aM(e,n,1),e=Ps(e,n,1),n=Kn(),e!==null&&(sc(e,1,n),ai(e,n));break}}e=e.return}}function dA(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Kn(),n.pingedLanes|=n.suspendedLanes&t,_n===n&&(En&t)===t&&(cn===4||cn===3&&(En&130023424)===En&&500>Qt()-Xg?Eo(n,0):Wg|=t),ai(n,e)}function CM(n,e){e===0&&(n.mode&1?(e=yc,yc<<=1,!(yc&130023424)&&(yc=4194304)):e=1);var t=Kn();n=Zr(n,e),n!==null&&(sc(n,e,t),ai(n,t))}function pA(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),CM(n,t)}function mA(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),CM(n,t)}var RM;RM=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||si.current)ii=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return ii=!1,nA(n,e,t);ii=!!(n.flags&131072)}else ii=!1,Ot&&e.flags&1048576&&DS(e,th,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Rf(n,e),n=e.pendingProps;var r=sl(e,Fn.current);Xa(e,t),r=kg(null,e,i,n,r,t);var s=zg();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,oi(i)?(s=!0,Jf(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ng(e),r.updater=Bh,e.stateNode=r,r._reactInternals=e,sm(e,i,n,t),e=lm(null,e,i,!0,s,t)):(e.tag=0,Ot&&s&&Ag(e),Wn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Rf(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=_A(i),n=lr(i,n),r){case 0:e=am(null,e,i,n,t);break e;case 1:e=N0(null,e,i,n,t);break e;case 11:e=L0(null,e,i,n,t);break e;case 14:e=D0(null,e,i,lr(i.type,n),t);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:lr(i,r),am(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:lr(i,r),N0(n,e,i,r,t);case 3:e:{if(fM(e),n===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,kS(n,e),rh(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ul(Error(oe(423)),e),e=U0(n,e,i,t,r);break e}else if(i!==r){r=ul(Error(oe(424)),e),e=U0(n,e,i,t,r);break e}else for(Ci=bs(e.stateNode.containerInfo.firstChild),Li=e,Ot=!0,cr=null,t=OS(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ol(),i===r){e=Qr(n,e,t);break e}Wn(n,e,i,t)}e=e.child}return e;case 5:return zS(e),n===null&&nm(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Zp(i,r)?o=null:s!==null&&Zp(i,s)&&(e.flags|=32),cM(n,e),Wn(n,e,o,t),e.child;case 6:return n===null&&nm(e),null;case 13:return hM(n,e,t);case 4:return Ug(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=al(e,null,i,t):Wn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:lr(i,r),L0(n,e,i,r,t);case 7:return Wn(n,e,e.pendingProps,t),e.child;case 8:return Wn(n,e,e.pendingProps.children,t),e.child;case 12:return Wn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,bt(nh,i._currentValue),i._currentValue=o,s!==null)if(gr(s.value,o)){if(s.children===r.children&&!si.current){e=Qr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Yr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),im(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),im(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Wn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Xa(e,t),r=tr(r),i=i(r),e.flags|=1,Wn(n,e,i,t),e.child;case 14:return i=e.type,r=lr(i,e.pendingProps),r=lr(i.type,r),D0(n,e,i,r,t);case 15:return lM(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:lr(i,r),Rf(n,e),e.tag=1,oi(i)?(n=!0,Jf(e)):n=!1,Xa(e,t),sM(e,i,r),sm(e,i,r,t),lm(null,e,i,!0,n,t);case 19:return dM(n,e,t);case 22:return uM(n,e,t)}throw Error(oe(156,e.tag))};function bM(n,e){return nS(n,e)}function gA(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ki(n,e,t,i){return new gA(n,e,t,i)}function $g(n){return n=n.prototype,!(!n||!n.isReactComponent)}function _A(n){if(typeof n=="function")return $g(n)?1:0;if(n!=null){if(n=n.$$typeof,n===pg)return 11;if(n===mg)return 14}return 2}function Ns(n,e){var t=n.alternate;return t===null?(t=Ki(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Lf(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")$g(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Ea:return wo(t.children,r,s,e);case dg:o=8,r|=8;break;case bp:return n=Ki(12,t,e,r|2),n.elementType=bp,n.lanes=s,n;case Pp:return n=Ki(13,t,e,r),n.elementType=Pp,n.lanes=s,n;case Lp:return n=Ki(19,t,e,r),n.elementType=Lp,n.lanes=s,n;case zy:return Gh(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Fy:o=10;break e;case ky:o=9;break e;case pg:o=11;break e;case mg:o=14;break e;case ds:o=16,i=null;break e}throw Error(oe(130,n==null?n:typeof n,""))}return e=Ki(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function wo(n,e,t,i){return n=Ki(7,n,i,e),n.lanes=t,n}function Gh(n,e,t,i){return n=Ki(22,n,i,e),n.elementType=zy,n.lanes=t,n.stateNode={isHidden:!1},n}function Pd(n,e,t){return n=Ki(6,n,null,e),n.lanes=t,n}function Ld(n,e,t){return e=Ki(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function vA(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fd(0),this.expirationTimes=fd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Kg(n,e,t,i,r,s,o,a,l){return n=new vA(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ki(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ng(s),n}function xA(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ma,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function PM(n){if(!n)return Vs;n=n._reactInternals;e:{if(Xo(n)!==n||n.tag!==1)throw Error(oe(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(oi(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(n.tag===1){var t=n.type;if(oi(t))return PS(n,t,e)}return e}function LM(n,e,t,i,r,s,o,a,l){return n=Kg(t,i,!0,n,r,s,o,a,l),n.context=PM(null),t=n.current,i=Kn(),r=Ds(t),s=Yr(i,r),s.callback=e??null,Ps(t,s,r),n.current.lanes=r,sc(n,r,i),ai(n,i),n}function Wh(n,e,t,i){var r=e.current,s=Kn(),o=Ds(r);return t=PM(t),e.context===null?e.context=t:e.pendingContext=t,e=Yr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ps(r,e,o),n!==null&&(mr(n,r,o,s),Tf(n,r,o)),o}function hh(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function W0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Zg(n,e){W0(n,e),(n=n.alternate)&&W0(n,e)}function yA(){return null}var DM=typeof reportError=="function"?reportError:function(n){console.error(n)};function Qg(n){this._internalRoot=n}Xh.prototype.render=Qg.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(oe(409));Wh(n,e,null,null)};Xh.prototype.unmount=Qg.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;zo(function(){Wh(null,n,null,null)}),e[Kr]=null}};function Xh(n){this._internalRoot=n}Xh.prototype.unstable_scheduleHydration=function(n){if(n){var e=uS();n={blockedOn:null,target:n,priority:e};for(var t=0;t<ms.length&&e!==0&&e<ms[t].priority;t++);ms.splice(t,0,n),t===0&&fS(n)}};function Jg(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function jh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function X0(){}function SA(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=hh(o);s.call(u)}}var o=LM(e,i,n,0,null,!1,!1,"",X0);return n._reactRootContainer=o,n[Kr]=o.current,Fu(n.nodeType===8?n.parentNode:n),zo(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=hh(l);a.call(u)}}var l=Kg(n,0,!1,null,null,!1,!1,"",X0);return n._reactRootContainer=l,n[Kr]=l.current,Fu(n.nodeType===8?n.parentNode:n),zo(function(){Wh(e,l,t,i)}),l}function Yh(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=hh(o);a.call(l)}}Wh(e,o,n,r)}else o=SA(t,e,n,r,i);return hh(o)}aS=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ql(e.pendingLanes);t!==0&&(vg(e,t|1),ai(e,Qt()),!(dt&6)&&(cl=Qt()+500,Ks()))}break;case 13:zo(function(){var i=Zr(n,1);if(i!==null){var r=Kn();mr(i,n,1,r)}}),Zg(n,1)}};xg=function(n){if(n.tag===13){var e=Zr(n,134217728);if(e!==null){var t=Kn();mr(e,n,134217728,t)}Zg(n,134217728)}};lS=function(n){if(n.tag===13){var e=Ds(n),t=Zr(n,e);if(t!==null){var i=Kn();mr(t,n,e,i)}Zg(n,e)}};uS=function(){return St};cS=function(n,e){var t=St;try{return St=n,e()}finally{St=t}};Hp=function(n,e,t){switch(e){case"input":if(Up(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Fh(i);if(!r)throw Error(oe(90));Hy(i),Up(i,r)}}}break;case"textarea":Gy(n,t);break;case"select":e=t.value,e!=null&&Ha(n,!!t.multiple,e,!1)}};Ky=jg;Zy=zo;var MA={usingClientEntryPoint:!1,Events:[ac,Ca,Fh,qy,$y,jg]},Il={findFiberByHostInstance:_o,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},EA={bundleType:Il.bundleType,version:Il.version,rendererPackageName:Il.rendererPackageName,rendererConfig:Il.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ns.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=eS(n),n===null?null:n.stateNode},findFiberByHostInstance:Il.findFiberByHostInstance||yA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lc.isDisabled&&Lc.supportsFiber)try{Nh=Lc.inject(EA),Ar=Lc}catch{}}Oi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MA;Oi.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jg(e))throw Error(oe(200));return xA(n,e,null,t)};Oi.createRoot=function(n,e){if(!Jg(n))throw Error(oe(299));var t=!1,i="",r=DM;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Kg(n,1,!1,null,null,t,!1,i,r),n[Kr]=e.current,Fu(n.nodeType===8?n.parentNode:n),new Qg(e)};Oi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(oe(188)):(n=Object.keys(n).join(","),Error(oe(268,n)));return n=eS(e),n=n===null?null:n.stateNode,n};Oi.flushSync=function(n){return zo(n)};Oi.hydrate=function(n,e,t){if(!jh(e))throw Error(oe(200));return Yh(null,n,e,!0,t)};Oi.hydrateRoot=function(n,e,t){if(!Jg(n))throw Error(oe(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=DM;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=LM(e,null,n,1,t??null,r,!1,s,o),n[Kr]=e.current,Fu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Xh(e)};Oi.render=function(n,e,t){if(!jh(e))throw Error(oe(200));return Yh(null,n,e,!1,t)};Oi.unmountComponentAtNode=function(n){if(!jh(n))throw Error(oe(40));return n._reactRootContainer?(zo(function(){Yh(null,null,n,!1,function(){n._reactRootContainer=null,n[Kr]=null})}),!0):!1};Oi.unstable_batchedUpdates=jg;Oi.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!jh(t))throw Error(oe(200));if(n==null||n._reactInternals===void 0)throw Error(oe(38));return Yh(n,e,t,!1,i)};Oi.version="18.3.1-next-f1338f8080-20240426";function NM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(NM)}catch(n){console.error(n)}}NM(),Ny.exports=Oi;var wA=Ny.exports,UM,j0=wA;UM=j0.createRoot,j0.hydrateRoot;const TA="modulepreload",AA=function(n,e){return new URL(n,e).href},Y0={},CA=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(t.map(u=>{if(u=AA(u,i),u in Y0)return;Y0[u]=!0;const c=u.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(!!i)for(let m=o.length-1;m>=0;m--){const _=o[m];if(_.href===u&&(!c||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":TA,c||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),c)return new Promise((m,_)=>{p.addEventListener("load",m),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},Ol={};function e_(n){return Ol[n]||(Ol[n]=fetch(`data/${n}`).then(e=>{if(!e.ok)throw new Error(`${n}: ${e.status}`);return e.json()}),Ol[n].catch(()=>{delete Ol[n]})),Ol[n]}const IM=()=>e_("metrics.json"),OM=()=>e_("asteroids.json"),RA=()=>e_("approaches.json");function bA(){return Promise.allSettled([IM(),OM(),RA()])}const PA=6055287,LA=3,DA=8e3,q0=.06,NA=()=>Math.min(window.devicePixelRatio||1,2),zi={mode:"off",t0:0,listeners:new Set},Fl={arm(){zi.mode="armed"},start(){zi.mode="running",zi.t0=performance.now()},off(){zi.mode="off"},get mode(){return zi.mode},progress(n=performance.now()){if(zi.mode==="off")return 1;if(zi.mode==="armed")return 0;const e=Math.min((n-zi.t0)/DA,1);return e>=1&&(zi.mode="off",zi.listeners.forEach(t=>t())),e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2},onDone(n){return zi.listeners.add(n),()=>zi.listeners.delete(n)}};function UA(n){let e=2538058380;const t=String(n);for(let i=0;i<t.length;i++)e^=t.charCodeAt(i),e=Math.imul(e,16777619);return e^=e>>>16,e=Math.imul(e,2246822507),e^=e>>>13,e=Math.imul(e,3266489909),e^=e>>>16,(e>>>0)/4294967296}const NN=n=>n*(1+q0)-q0/2;function Fr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function FM(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Di={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ju={duration:.5,overwrite:!1,delay:0},t_,wn,Ft,Zi=1e8,At=1/Zi,ym=Math.PI*2,IA=ym/4,OA=0,kM=Math.sqrt,FA=Math.cos,kA=Math.sin,xn=function(e){return typeof e=="string"},qt=function(e){return typeof e=="function"},Jr=function(e){return typeof e=="number"},n_=function(e){return typeof e>"u"},br=function(e){return typeof e=="object"},li=function(e){return e!==!1},i_=function(){return typeof window<"u"},Dc=function(e){return qt(e)||xn(e)},zM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},On=Array.isArray,zA=/random\([^)]+\)/g,BA=/,\s*/g,$0=/(?:-?\.?\d|\.)+/gi,BM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ua=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Dd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,HM=/[+-]=-?[.\d]+/,HA=/[^,'"\[\]\s]+/gi,VA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Vt,xr,Sm,r_,Ui={},dh={},VM,GM=function(e){return(dh=fl(e,Ui))&&pi},s_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Yu=function(e,t){return!t&&console.warn(e)},WM=function(e,t){return e&&(Ui[e]=t)&&dh&&(dh[e]=t)||Ui},qu=function(){return 0},GA={suppressEvents:!0,isStart:!0,kill:!1},Df={suppressEvents:!0,kill:!1},WA={suppressEvents:!0},o_={},Us=[],Mm={},XM,Mi={},Nd={},K0=30,Nf=[],a_="",l_=function(e){var t=e[0],i,r;if(br(t)||qt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Nf.length;r--&&!Nf[r].targetTest(t););i=Nf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new d1(e[r],i)))||e.splice(r,1);return e},To=function(e){return e._gsap||l_(Qi(e))[0]._gsap},jM=function(e,t,i){return(i=e[t])&&qt(i)?e[t]():n_(i)&&e.getAttribute&&e.getAttribute(t)||i},ui=function(e,t){return(e=e.split(",")).forEach(t)||e},Kt=function(e){return Math.round(e*1e5)/1e5||0},Bt=function(e){return Math.round(e*1e7)/1e7||0},Ya=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},XA=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},ph=function(){var e=Us.length,t=Us.slice(0),i,r;for(Mm={},Us.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},u_=function(e){return!!(e._initted||e._startAt||e.add)},YM=function(e,t,i,r){Us.length&&!wn&&ph(),e.render(t,i,!!(wn&&t<0&&u_(e))),Us.length&&!wn&&ph()},qM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(HA).length<2?t:xn(e)?e.trim():e},$M=function(e){return e},Ii=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},jA=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},fl=function(e,t){for(var i in t)e[i]=t[i];return e},Z0=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=br(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},mh=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},gu=function(e){var t=e.parent||Vt,i=e.keyframes?jA(On(e.keyframes)):Ii;if(li(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},YA=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},KM=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},qh=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Gs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ao=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},qA=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Em=function(e,t,i,r){return e._startAt&&(wn?e._startAt.revert(Df):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},$A=function n(e){return!e||e._ts&&n(e.parent)},Q0=function(e){return e._repeat?hl(e._tTime,e=e.duration()+e._rDelay)*e:0},hl=function(e,t){var i=Math.floor(e=Bt(e/t));return e&&i===e?i-1:i},gh=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},$h=function(e){return e._end=Bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||At)||0))},Kh=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Bt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),$h(e),i._dirty||Ao(i,e)),e},ZM=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=gh(e.rawTime(),t),(!t._dur||uc(0,t.totalDuration(),i)-t._tTime>At)&&t.render(i,!0)),Ao(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-At}},Er=function(e,t,i,r){return t.parent&&Gs(t),t._start=Bt((Jr(i)?i:i||e!==Vt?Hi(e,i,t):e._time)+t._delay),t._end=Bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),KM(e,t,"_first","_last",e._sort?"_start":0),wm(t)||(e._recent=t),r||ZM(e,t),e._ts<0&&Kh(e,e._tTime),e},QM=function(e,t){return(Ui.ScrollTrigger||s_("scrollTrigger",t))&&Ui.ScrollTrigger.create(t,e)},JM=function(e,t,i,r,s){if(f_(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!wn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&XM!==Ti.frame)return Us.push(e),e._lazy=[s,r],1},KA=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},wm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},ZA=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&KA(e)&&!(!e._initted&&wm(e))||(e._ts<0||e._dp._ts<0)&&!wm(e))?0:1,a=e._rDelay,l=0,u,c,h;if(a&&e._repeat&&(l=uc(0,e._tDur,t),c=hl(l,a),e._yoyo&&c&1&&(o=1-o),c!==hl(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||wn||r||e._zTime===At||!t&&e._zTime){if(!e._initted&&JM(e,t,r,i,l))return;for(h=e._zTime,e._zTime=t||(i?At:0),i||(i=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Em(e,t,i,!0),e._onUpdate&&!i&&Ri(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ri(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Gs(e,1),!i&&!wn&&(Ri(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},QA=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},dl=function(e,t,i,r){var s=e._repeat,o=Bt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Bt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Kh(e,e._tTime=e._tDur*a),e.parent&&$h(e),i||Ao(e.parent,e),e},J0=function(e){return e instanceof ni?Ao(e):dl(e,e._dur)},JA={_start:0,endTime:qu,totalDuration:qu},Hi=function n(e,t,i){var r=e.labels,s=e._recent||JA,o=e.duration()>=Zi?s.endTime(!1):e._dur,a,l,u;return xn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(On(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},_u=function(e,t,i){var r=Jr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=li(l.vars.inherit)&&l.parent;o.immediateRender=li(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new nn(t[0],o,t[s+1])},Zs=function(e,t){return e||e===0?t(e):t},uc=function(e,t,i){return i<e?e:i>t?t:i},Un=function(e,t){return!xn(e)||!(t=VA.exec(e))?"":t[1]},eC=function(e,t,i){return Zs(i,function(r){return uc(e,t,r)})},Tm=[].slice,e1=function(e,t){return e&&br(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&br(e[0]))&&!e.nodeType&&e!==xr},tC=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return xn(r)&&!t||e1(r,1)?(s=i).push.apply(s,Qi(r)):i.push(r)})||i},Qi=function(e,t,i){return Ft&&!t&&Ft.selector?Ft.selector(e):xn(e)&&!i&&(Sm||!pl())?Tm.call((t||r_).querySelectorAll(e),0):On(e)?tC(e,i):e1(e)?Tm.call(e,0):e?[e]:[]},Am=function(e){return e=Qi(e)[0]||Yu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Qi(t,i.querySelectorAll?i:i===e?Yu("Invalid scope")||r_.createElement("div"):e)}},t1=function(e){return e.sort(function(){return .5-Math.random()})},n1=function(e){if(qt(e))return e;var t=br(e)?e:{each:e},i=Co(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,h=r;return xn(r)?c=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],h=r[1]),function(f,p,m){var _=(m||t).length,g=o[_],d,v,x,y,A,w,M,P,S;if(!g){if(S=t.grid==="auto"?0:(t.grid||[1,Zi])[1],!S){for(M=-Zi;M<(M=m[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(g=o[_]=[],d=l?Math.min(S,_)*c-.5:r%S,v=S===Zi?0:l?_*h/S-.5:r/S|0,M=0,P=Zi,w=0;w<_;w++)x=w%S-d,y=v-(w/S|0),g[w]=A=u?Math.abs(u==="y"?y:x):kM(x*x+y*y),A>M&&(M=A),A<P&&(P=A);r==="random"&&t1(g),g.max=M-P,g.min=P,g.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:u?u==="y"?_/S:S:Math.max(S,_/S))||0)*(r==="edges"?-1:1),g.b=_<0?s-_:s,g.u=Un(t.amount||t.each)||0,i=i&&_<0?pC(i):i}return _=(g[f]-g.min)/g.max||0,Bt(g.b+(i?i(_):_)*g.v)+g.u}},Cm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Bt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Jr(i)?0:Un(i))}},i1=function(e,t){var i=On(e),r,s;return!i&&br(e)&&(r=i=e.radius||Zi,e.values?(e=Qi(e.values),(s=!Jr(e[0]))&&(r*=r)):e=Cm(e.increment)),Zs(t,i?qt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Zi,c=0,h=e.length,f,p;h--;)s?(f=e[h].x-a,p=e[h].y-l,f=f*f+p*p):f=Math.abs(e[h]-a),f<u&&(u=f,c=h);return c=!r||u<=r?e[c]:o,s||c===o||Jr(o)?c:c+Un(o)}:Cm(e))},r1=function(e,t,i,r){return Zs(On(e)?!t:i===!0?!!(i=0):!r,function(){return On(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},nC=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},iC=function(e,t){return function(i){return e(parseFloat(i))+(t||Un(i))}},rC=function(e,t,i){return o1(e,t,0,1,i)},s1=function(e,t,i){return Zs(i,function(r){return e[~~t(r)]})},sC=function n(e,t,i){var r=t-e;return On(e)?s1(e,n(0,e.length),t):Zs(i,function(s){return(r+(s-e)%r)%r+e})},oC=function n(e,t,i){var r=t-e,s=r*2;return On(e)?s1(e,n(0,e.length-1),t):Zs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},$u=function(e){return e.replace(zA,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(BA);return r1(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},o1=function(e,t,i,r,s){var o=t-e,a=r-i;return Zs(s,function(l){return i+((l-e)/o*a||0)})},aC=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=xn(e),a={},l,u,c,h,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(On(e)&&!On(t)){for(c=[],h=e.length,f=h-2,u=1;u<h;u++)c.push(n(e[u-1],e[u]));h--,s=function(m){m*=h;var _=Math.min(f,~~m);return c[_](m-_)},i=t}else r||(e=fl(On(e)?[]:{},e));if(!c){for(l in t)c_.call(a,e,l,"get",t[l]);s=function(m){return p_(m,a)||(o?e.p:e)}}}return Zs(i,s)},ev=function(e,t,i){var r=e.labels,s=Zi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ri=function(e,t,i){var r=e.vars,s=r[t],o=Ft,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Us.length&&ph(),a&&(Ft=a),c=l?s.apply(u,l):s.call(u),Ft=o,c},eu=function(e){return Gs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!wn),e.progress()<1&&Ri(e,"onInterrupt"),e},Ia,a1=[],l1=function(e){if(e)if(e=!e.name&&e.default||e,i_()||e.headless){var t=e.name,i=qt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:qu,render:p_,add:c_,kill:wC,modifier:EC,rawVars:0},o={targetTest:0,get:0,getSetter:d_,aliases:{},register:0};if(pl(),e!==r){if(Mi[t])return;Ii(r,Ii(mh(e,s),o)),fl(r.prototype,fl(s,mh(e,o))),Mi[r.prop=t]=r,e.targetTest&&(Nf.push(r),o_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}WM(t,r),e.register&&e.register(pi,r,ci)}else a1.push(e)},wt=255,tu={aqua:[0,wt,wt],lime:[0,wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,wt],navy:[0,0,128],white:[wt,wt,wt],olive:[128,128,0],yellow:[wt,wt,0],orange:[wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[wt,0,0],pink:[wt,192,203],cyan:[0,wt,wt],transparent:[wt,wt,wt,0]},Ud=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*wt+.5|0},u1=function(e,t,i){var r=e?Jr(e)?[e>>16,e>>8&wt,e&wt]:0:tu.black,s,o,a,l,u,c,h,f,p,m;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),tu[e])r=tu[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&wt,r&wt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&wt,e&wt]}else if(e.substr(0,3)==="hsl"){if(r=m=e.match($0),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Ud(l+1/3,s,o),r[1]=Ud(l,s,o),r[2]=Ud(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(BM),i&&r.length<4&&(r[3]=1),r}else r=e.match($0)||tu.transparent;r=r.map(Number)}return t&&!m&&(s=r[0]/wt,o=r[1]/wt,a=r[2]/wt,h=Math.max(s,o,a),f=Math.min(s,o,a),c=(h+f)/2,h===f?l=u=0:(p=h-f,u=c>.5?p/(2-h-f):p/(h+f),l=h===s?(o-a)/p+(o<a?6:0):h===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},c1=function(e){var t=[],i=[],r=-1;return e.split(Is).forEach(function(s){var o=s.match(Ua)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},tv=function(e,t,i){var r="",s=(e+r).match(Is),o=t?"hsla(":"rgba(",a=0,l,u,c,h;if(!s)return e;if(s=s.map(function(f){return(f=u1(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=c1(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Is,"1").split(Ua),h=u.length-1;a<h;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Is),h=u.length-1;a<h;a++)r+=u[a]+s[a];return r+u[h]},Is=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in tu)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),lC=/hsl[a]?\(/,f1=function(e){var t=e.join(" "),i;if(Is.lastIndex=0,Is.test(t))return i=lC.test(t),e[1]=tv(e[1],i),e[0]=tv(e[0],i,c1(e[1])),!0},Ku,Ti=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,h,f,p,m=function _(g){var d=n()-r,v=g===!0,x,y,A,w;if((d>e||d<0)&&(i+=d-t),r+=d,A=r-i,x=A-o,(x>0||v)&&(w=++h.frame,f=A-h.time*1e3,h.time=A=A/1e3,o+=x+(x>=s?4:s-x),y=1),v||(l=u(_)),y)for(p=0;p<a.length;p++)a[p](A,f,w,g)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){VM&&(!Sm&&i_()&&(xr=Sm=window,r_=xr.document||{},Ui.gsap=pi,(xr.gsapVersions||(xr.gsapVersions=[])).push(pi.version),GM(dh||xr.GreenSockGlobals||!xr.gsap&&xr||{}),a1.forEach(l1)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),u=c||function(g){return setTimeout(g,o-h.time*1e3+1|0)},Ku=1,m(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Ku=0,u=qu},lagSmoothing:function(g,d){e=g||1/0,t=Math.min(d||33,e)},fps:function(g){s=1e3/(g||240),o=h.time*1e3+s},add:function(g,d,v){var x=d?function(y,A,w,M){g(y,A,w,M),h.remove(x)}:g;return h.remove(g),a[v?"unshift":"push"](x),pl(),x},remove:function(g,d){~(d=a.indexOf(g))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},h}(),pl=function(){return!Ku&&Ti.wake()},ht={},uC=/^[\d.\-M][\d.\-,\s]/,cC=/["']/g,fC=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(cC,"").trim():+u,r=l.substr(a+1).trim();return t},hC=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},dC=function(e){var t=(e+"").split("("),i=ht[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[fC(t[1])]:hC(e).split(",").map(qM)):ht._CE&&uC.test(e)?ht._CE("",e):i},pC=function(e){return function(t){return 1-e(1-t)}},Co=function(e,t){return e&&(qt(e)?e:ht[e]||dC(e))||t},jo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ui(e,function(a){ht[a]=Ui[a]=s,ht[o=a.toLowerCase()]=i;for(var l in s)ht[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ht[a+"."+l]=s[l]}),s},h1=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Id=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/ym*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*kA((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:h1(a);return s=ym/s,l.config=function(u,c){return n(e,u,c)},l},Od=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:h1(i);return r.config=function(s){return n(e,s)},r};ui("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;jo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ht.Linear.easeNone=ht.none=ht.Linear.easeIn;jo("Elastic",Id("in"),Id("out"),Id());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};jo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);jo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});jo("Circ",function(n){return-(kM(1-n*n)-1)});jo("Sine",function(n){return n===1?1:-FA(n*IA)+1});jo("Back",Od("in"),Od("out"),Od());ht.SteppedEase=ht.steps=Ui.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-At;return function(a){return((r*uc(0,o,a)|0)+s)*i}}};ju.ease=ht["quad.out"];ui("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return a_+=n+","+n+"Params,"});var d1=function(e,t){this.id=OA++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:jM,this.set=t?t.getSetter:d_},Zu=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,dl(this,+t.duration,1,1),this.data=t.data,Ft&&(this._ctx=Ft,Ft.data.push(this)),Ku||Ti.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,dl(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(pl(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Kh(this,i),!s._dp||s.parent||ZM(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Er(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===At||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),YM(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Q0(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Q0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?hl(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-At?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?gh(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-At?0:this._rts,this.totalTime(uc(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),$h(this),qA(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(pl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==At&&(this._tTime-=At)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Bt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Er(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(li(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?gh(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=WA);var r=wn;return wn=i,u_(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),wn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,J0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,J0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Hi(this,i),li(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,li(r)),this._dur||(this._zTime=-At),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-At:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-At,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-At)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=qt(i)?i:$M,l=function(){var c=r.then;r.then=null,s&&s(),qt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){eu(this)},n}();Ii(Zu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-At,_prom:0,_ps:!1,_rts:1});var ni=function(n){FM(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=li(i.sortChildren),Vt&&Er(i.parent||Vt,Fr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&QM(Fr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return _u(0,arguments,this),this},t.from=function(r,s,o){return _u(1,arguments,this),this},t.fromTo=function(r,s,o,a){return _u(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,gu(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new nn(r,s,Hi(this,o),1),this},t.call=function(r,s,o){return Er(this,nn.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new nn(r,o,Hi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,gu(o).immediateRender=li(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,h){return a.startAt=o,gu(a).immediateRender=li(a.immediateRender),this.staggerTo(r,s,a,l,u,c,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Bt(r),h=this._zTime<0!=r<0&&(this._initted||!u),f,p,m,_,g,d,v,x,y,A,w,M;if(this!==Vt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||h){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),f=c,y=this._start,x=this._ts,d=!x,h&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,g=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,o);if(f=Bt(c%g),c===l?(_=this._repeat,f=u):(A=Bt(c/g),_=~~A,_&&_===A&&(f=u,_--),f>u&&(f=u)),A=hl(this._tTime,g),!a&&this._tTime&&A!==_&&this._tTime-A*g-this._dur<=0&&(A=_),w&&_&1&&(f=u-f,M=1),_!==A&&!this._lock){var P=w&&A&1,S=P===(w&&_&1);if(_<A&&(P=!P),a=P?0:c%u?u:c,this._lock=1,this.render(a||(M?0:Bt(_*g)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Ri(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,A=_),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,S&&(this._lock=2,a=P?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!d)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=QA(this,Bt(a),Bt(f)),v&&(c-=f-(f=v._start))),this._tTime=c,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!A&&(Ri(this,"onStart"),this._tTime!==c))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(m=p._next,(p._act||f>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!d){v=0,m&&(c+=this._zTime=-At);break}}p=m}else{p=this._last;for(var E=r<0?r:f;p;){if(m=p._prev,(p._act||E<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(E-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(E-p._start)*p._ts,s,o||wn&&u_(p)),f!==this._time||!this._ts&&!d){v=0,m&&(c+=this._zTime=E?-At:At);break}}p=m}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-At)._zTime=f>=a?1:-1,this._ts))return this._start=y,$h(this),this.render(r,s,o);this._onUpdate&&!s&&Ri(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Gs(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Ri(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Jr(s)||(s=Hi(this,s,r)),!(r instanceof Zu)){if(On(r))return r.forEach(function(a){return o.add(a,s)}),this;if(xn(r))return this.addLabel(r,s);if(qt(r))r=nn.delayedCall(0,r);else return this}return this!==r?Er(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Zi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof nn?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return xn(r)?this.removeLabel(r):qt(r)?this.killTweensOf(r):(r.parent===this&&qh(this,r),r===this._recent&&(this._recent=this._last),Ao(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Bt(Ti.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Hi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=nn.delayedCall(0,s||qu,o);return a.data="isPause",this._hasPause=1,Er(this,a,Hi(this,r))},t.removePause=function(r){var s=this._first;for(r=Hi(this,r);s;)s._start===r&&s.data==="isPause"&&Gs(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)xs!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Qi(r),l=this._first,u=Jr(s),c;l;)l instanceof nn?XA(l._targets,a)&&(u?(!xs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Hi(o,r),l=s,u=l.startAt,c=l.onStart,h=l.onStartParams,f=l.immediateRender,p,m=nn.to(o,Ii({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||At,onStart:function(){if(o.pause(),!p){var g=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());m._dur!==g&&dl(m,g,0,1).render(m._time,!0,!0),p=1}c&&c.apply(m,h||[])}},s));return f?m.render(0):m},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Ii({startAt:{time:Hi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),ev(this,Hi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),ev(this,Hi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+At)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Bt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return Ao(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ao(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Zi,u,c,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Er(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Bt(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;dl(o,o===Vt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Vt._ts&&(YM(Vt,gh(r,Vt)),XM=Ti.frame),Ti.frame>=K0){K0+=Di.autoSleep||120;var s=Vt._first;if((!s||!s._ts)&&Di.autoSleep&&Ti._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ti.sleep()}}},e}(Zu);Ii(ni.prototype,{_lock:0,_hasPause:0,_forcing:0});var mC=function(e,t,i,r,s,o,a){var l=new ci(this._pt,e,t,0,1,x1,null,s),u=0,c=0,h,f,p,m,_,g,d,v;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=$u(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),f=i.match(Dd)||[];h=Dd.exec(r);)m=h[0],_=r.substring(u,h.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),m!==f[c++]&&(g=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:g,c:m.charAt(1)==="="?Ya(g,m)-g:parseFloat(m)-g,m:p&&p<4?Math.round:0},u=Dd.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(HM.test(r)||d)&&(l.e=0),this._pt=l,l},c_=function(e,t,i,r,s,o,a,l,u,c){qt(r)&&(r=r(s||0,e,o));var h=e[t],f=i!=="get"?i:qt(h)?u?e[t.indexOf("set")||!qt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():h,p=qt(h)?u?yC:_1:h_,m;if(xn(r)&&(~r.indexOf("random(")&&(r=$u(r)),r.charAt(1)==="="&&(m=Ya(f,r)+(Un(f)||0),(m||m===0)&&(r=m))),!c||f!==r||Rm)return!isNaN(f*r)&&r!==""?(m=new ci(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?MC:v1,0,p),u&&(m.fp=u),a&&m.modifier(a,this,e),this._pt=m):(!h&&!(t in e)&&s_(t,r),mC.call(this,e,t,f,r,p,l||Di.stringFilter,u))},gC=function(e,t,i,r,s){if(qt(e)&&(e=vu(e,s,t,i,r)),!br(e)||e.style&&e.nodeType||On(e)||zM(e))return xn(e)?vu(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=vu(e[a],s,t,i,r);return o},p1=function(e,t,i,r,s,o){var a,l,u,c;if(Mi[e]&&(a=new Mi[e]).init(s,a.rawVars?t[e]:gC(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new ci(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Ia))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},xs,Rm,f_=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,h=r.yoyoEase,f=r.keyframes,p=r.autoRevert,m=e._dur,_=e._startAt,g=e._targets,d=e.parent,v=d&&d.data==="nested"?d.vars.targets:g,x=e._overwrite==="auto"&&!t_,y=e.timeline,A=r.easeReverse||h,w,M,P,S,E,U,O,J,L,k,V,W,D;if(y&&(!f||!s)&&(s="none"),e._ease=Co(s,ju.ease),e._rEase=A&&(Co(A)||e._ease),e._from=!y&&!!r.runBackwards,e._from&&(e.ratio=1),!y||f&&!r.stagger){if(J=g[0]?To(g[0]).harness:0,W=J&&r[J.prop],w=mh(r,o_),_&&(_._zTime<0&&_.progress(1),t<0&&c&&a&&!p?_.render(-1,!0):_.revert(c&&m?Df:GA),_._lazy=0),o){if(Gs(e._startAt=nn.set(g,Ii({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!_&&li(l),startAt:null,delay:0,onUpdate:u&&function(){return Ri(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(wn||!a&&!p)&&e._startAt.revert(Df),a&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&m&&!_){if(t&&(a=!1),P=Ii({overwrite:!1,data:"isFromStart",lazy:a&&!_&&li(l),immediateRender:a,stagger:0,parent:d},w),W&&(P[J.prop]=W),Gs(e._startAt=nn.set(g,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(wn?e._startAt.revert(Df):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,At,At);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&li(l)||l&&!m,M=0;M<g.length;M++){if(E=g[M],O=E._gsap||l_(g)[M]._gsap,e._ptLookup[M]=k={},Mm[O.id]&&Us.length&&ph(),V=v===g?M:v.indexOf(E),J&&(L=new J).init(E,W||w,e,V,v)!==!1&&(e._pt=S=new ci(e._pt,E,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(I){k[I]=S}),L.priority&&(U=1)),!J||W)for(P in w)Mi[P]&&(L=p1(P,w,e,V,E,v))?L.priority&&(U=1):k[P]=S=c_.call(e,E,P,"get",w[P],V,v,0,r.stringFilter);e._op&&e._op[M]&&e.kill(E,e._op[M]),x&&e._pt&&(xs=e,Vt.killTweensOf(E,k,e.globalTime(t)),D=!e.parent,xs=0),e._pt&&l&&(Mm[O.id]=1)}U&&y1(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!D,f&&t<=0&&y.render(Zi,!0,!0)},_C=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,h,f,p;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(c=f[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Rm=1,e.vars[t]="+=0",f_(e,a),Rm=0,l?Yu(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)h=u[p],c=h._pt||h,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,h.e&&(h.e=Kt(i)+Un(h.e)),h.b&&(h.b=c.s+Un(h.b))},vC=function(e,t){var i=e[0]?To(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=fl({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},xC=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(On(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},vu=function(e,t,i,r,s){return qt(e)?e.call(t,i,r,s):xn(e)&&~e.indexOf("random(")?$u(e):e},m1=a_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",g1={};ui(m1+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return g1[n]=1});var nn=function(n){FM(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:gu(r))||this;var l=a.vars,u=l.duration,c=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,m=l.keyframes,_=l.defaults,g=l.scrollTrigger,d=r.parent||Vt,v=(On(i)||zM(i)?Jr(i[0]):"length"in r)?[i]:Qi(i),x,y,A,w,M,P,S,E;if(a._targets=v.length?l_(v):Yu("GSAP target "+i+" not found. https://gsap.com",!Di.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,m||f||Dc(u)||Dc(c)){r=a.vars;var U=r.easeReverse||r.yoyoEase;if(x=a.timeline=new ni({data:"nested",defaults:_||{},targets:d&&d.data==="nested"?d.vars.targets:v}),x.kill(),x.parent=x._dp=Fr(a),x._start=0,f||Dc(u)||Dc(c)){if(w=v.length,S=f&&n1(f),br(f))for(M in f)~m1.indexOf(M)&&(E||(E={}),E[M]=f[M]);for(y=0;y<w;y++)A=mh(r,g1),A.stagger=0,U&&(A.easeReverse=U),E&&fl(A,E),P=v[y],A.duration=+vu(u,Fr(a),y,P,v),A.delay=(+vu(c,Fr(a),y,P,v)||0)-a._delay,!f&&w===1&&A.delay&&(a._delay=c=A.delay,a._start+=c,A.delay=0),x.to(P,A,S?S(y,P,v):0),x._ease=ht.none;x.duration()?u=c=0:a.timeline=0}else if(m){gu(Ii(x.vars.defaults,{ease:"none"})),x._ease=Co(m.ease||r.ease||"none");var O=0,J,L,k;if(On(m))m.forEach(function(V){return x.to(v,V,">")}),x.duration();else{A={};for(M in m)M==="ease"||M==="easeEach"||xC(M,m[M],A,m.easeEach);for(M in A)for(J=A[M].sort(function(V,W){return V.t-W.t}),O=0,y=0;y<J.length;y++)L=J[y],k={ease:L.e,duration:(L.t-(y?J[y-1].t:0))/100*u},k[M]=L.v,x.to(v,k,O),O+=k.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return p===!0&&!t_&&(xs=Fr(a),Vt.killTweensOf(v),xs=0),Er(d,Fr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!u&&!m&&a._start===Bt(d._time)&&li(h)&&$A(Fr(a))&&d.data!=="nested")&&(a._tTime=-At,a.render(Math.max(0,-c)||0)),g&&QM(Fr(a),g),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,h=r>l-At&&!c?l:r<At?0:r,f,p,m,_,g,d,v,x;if(!u)ZA(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=h,x=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(f=Bt(h%_),h===l?(m=this._repeat,f=u):(g=Bt(h/_),m=~~g,m&&m===g?(f=u,m--):f>u&&(f=u)),d=this._yoyo&&m&1,d&&(f=u-f),g=hl(this._tTime,_),f===a&&!o&&this._initted&&m===g)return this._tTime=h,this;m!==g&&this.vars.repeatRefresh&&!d&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Bt(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(JM(this,c?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==g))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var y=f<a;if(y!==this._inv){var A=y?a:u-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=A?(y?-1:1)/A:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/u);if(this._from&&(this.ratio=v=1-v),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!g&&(Ri(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Em(this,r,s,o),Ri(this,"onUpdate")),this._repeat&&m!==g&&this.vars.onRepeat&&!s&&this.parent&&Ri(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&Em(this,r,!0,!0),(r||!u)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Gs(this,1),!s&&!(c&&!a)&&(h||a||d)&&(Ri(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Ku||Ti.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||f_(this,u),c=this._ease(u/this._dur),_C(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Kh(this,0),this.parent||KM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?eu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!wn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,xs&&xs.vars.overwrite!==!0)._first||eu(this),this.parent&&o!==this.timeline.totalDuration()&&dl(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Qi(r):a,u=this._ptLookup,c=this._pt,h,f,p,m,_,g,d;if((!s||s==="all")&&YA(a,l))return s==="all"&&(this._pt=0),eu(this);for(h=this._op=this._op||[],s!=="all"&&(xn(s)&&(_={},ui(s,function(v){return _[v]=1}),s=_),s=vC(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){f=u[d],s==="all"?(h[d]=s,m=f,p={}):(p=h[d]=h[d]||{},m=s);for(_ in m)g=f&&f[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&qh(this,g,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&c&&eu(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return _u(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return _u(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Vt.killTweensOf(r,s,o)},e}(Zu);Ii(nn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ui("staggerTo,staggerFrom,staggerFromTo",function(n){nn[n]=function(){var e=new ni,t=Tm.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var h_=function(e,t,i){return e[t]=i},_1=function(e,t,i){return e[t](i)},yC=function(e,t,i,r){return e[t](r.fp,i)},SC=function(e,t,i){return e.setAttribute(t,i)},d_=function(e,t){return qt(e[t])?_1:n_(e[t])&&e.setAttribute?SC:h_},v1=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},MC=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},x1=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},p_=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},EC=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},wC=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?qh(this,t,"_pt"):t.dep||(i=1),t=r;return!i},TC=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},y1=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},ci=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||v1,this.d=l||this,this.set=u||h_,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=TC,this.m=i,this.mt=s,this.tween=r},n}();ui(a_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return o_[n]=1});Ui.TweenMax=Ui.TweenLite=nn;Ui.TimelineLite=Ui.TimelineMax=ni;Vt=new ni({sortChildren:!1,defaults:ju,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Di.stringFilter=f1;var Ro=[],Uf={},AC=[],nv=0,CC=0,Fd=function(e){return(Uf[e]||AC).map(function(t){return t()})},bm=function(){var e=Date.now(),t=[];e-nv>2&&(Fd("matchMediaInit"),Ro.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=xr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Fd("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),nv=e,Fd("matchMedia"))},S1=function(){function n(t,i){this.selector=i&&Am(i),this.data=[],this._r=[],this.isReverted=!1,this.id=CC++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){qt(i)&&(s=r,r=i,i=qt);var o=this,a=function(){var u=Ft,c=o.selector,h;return u&&u!==o&&u.data.push(o),s&&(o.selector=Am(s)),Ft=o,h=r.apply(o,arguments),qt(h)&&o._r.push(h),Ft=u,o.selector=c,o.isReverted=!1,h};return o.last=a,i===qt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Ft;Ft=null,i(this),Ft=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof nn&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,h){return h.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof ni?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof nn)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Ro.length;o--;)Ro[o].id===this.id&&Ro.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),RC=function(){function n(t){this.contexts=[],this.scope=t,Ft&&Ft.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){br(i)||(i={matches:i});var o=new S1(0,s||this.scope),a=o.conditions={},l,u,c;Ft&&!o.selector&&(o.selector=Ft.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=xr.matchMedia(i[u]),l&&(Ro.indexOf(o)<0&&Ro.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(bm):l.addEventListener("change",bm)));return c&&r(o,function(h){return o.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),_h={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return l1(r)})},timeline:function(e){return new ni(e)},getTweensOf:function(e,t){return Vt.getTweensOf(e,t)},getProperty:function(e,t,i,r){xn(e)&&(e=Qi(e)[0]);var s=To(e||{}).get,o=i?$M:qM;return i==="native"&&(i=""),e&&(t?o((Mi[t]&&Mi[t].get||s)(e,t,i,r)):function(a,l,u){return o((Mi[a]&&Mi[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Qi(e),e.length>1){var r=e.map(function(c){return pi.quickSetter(c,t,i)}),s=r.length;return function(c){for(var h=s;h--;)r[h](c)}}e=e[0]||{};var o=Mi[t],a=To(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var h=new o;Ia._pt=0,h.init(e,i?c+i:c,Ia,0,[e]),h.render(1,h),Ia._pt&&p_(1,Ia)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=pi.to(e,Ii((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Vt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Co(e.ease,ju.ease)),Z0(ju,e||{})},config:function(e){return Z0(Di,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Mi[a]&&!Ui[a]&&Yu(t+" effect requires "+a+" plugin.")}),Nd[t]=function(a,l,u){return i(Qi(a),Ii(l||{},s),u)},o&&(ni.prototype[t]=function(a,l,u){return this.add(Nd[t](a,br(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){ht[e]=Co(t)},parseEase:function(e,t){return arguments.length?Co(e,t):ht},getById:function(e){return Vt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new ni(e),r,s;for(i.smoothChildTiming=li(e.smoothChildTiming),Vt.remove(i),i._dp=0,i._time=i._tTime=Vt._time,r=Vt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof nn&&r.vars.onComplete===r._targets[0]))&&Er(i,r,r._start-r._delay),r=s;return Er(Vt,i,0),i},context:function(e,t){return e?new S1(e,t):Ft},matchMedia:function(e){return new RC(e)},matchMediaRefresh:function(){return Ro.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||bm()},addEventListener:function(e,t){var i=Uf[e]||(Uf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Uf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:sC,wrapYoyo:oC,distribute:n1,random:r1,snap:i1,normalize:rC,getUnit:Un,clamp:eC,splitColor:u1,toArray:Qi,selector:Am,mapRange:o1,pipe:nC,unitize:iC,interpolate:aC,shuffle:t1},install:GM,effects:Nd,ticker:Ti,updateRoot:ni.updateRoot,plugins:Mi,globalTimeline:Vt,core:{PropTween:ci,globals:WM,Tween:nn,Timeline:ni,Animation:Zu,getCache:To,_removeLinkedListItem:qh,reverting:function(){return wn},context:function(e){return e&&Ft&&(Ft.data.push(e),e._ctx=Ft),Ft},suppressOverwrites:function(e){return t_=e}}};ui("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return _h[n]=nn[n]});Ti.add(ni.updateRoot);Ia=_h.to({},{duration:0});var bC=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},PC=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=bC(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},kd=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(xn(s)&&(l={},ui(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}PC(a,s)}}}},pi=_h.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)wn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},kd("roundProps",Cm),kd("modifiers"),kd("snap",i1))||_h;nn.version=ni.version=pi.version="3.15.0";VM=1;i_()&&pl();ht.Power0;ht.Power1;ht.Power2;ht.Power3;ht.Power4;ht.Linear;ht.Quad;ht.Cubic;ht.Quart;ht.Quint;ht.Strong;ht.Elastic;ht.Back;ht.SteppedEase;ht.Bounce;ht.Sine;ht.Expo;ht.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var iv,ys,qa,m_,yo,rv,g_,LC=function(){return typeof window<"u"},es={},uo=180/Math.PI,$a=Math.PI/180,qo=Math.atan2,sv=1e8,__=/([A-Z])/g,DC=/(left|right|width|margin|padding|x)/i,NC=/[\s,\(]\S/,wr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Pm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},UC=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},IC=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},OC=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},FC=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},M1=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},E1=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},kC=function(e,t,i){return e.style[t]=i},zC=function(e,t,i){return e.style.setProperty(t,i)},BC=function(e,t,i){return e._gsap[t]=i},HC=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},VC=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},GC=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Gt="transform",fi=Gt+"Origin",WC=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in es&&s){if(this.tfm=this.tfm||{},e!=="transform")e=wr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=zr(r,a)}):this.tfm[e]=o.x?o[e]:zr(r,e),e===fi&&(this.tfm.zOrigin=o.zOrigin);else return wr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Gt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(fi,t,"")),e=Gt}(s||t)&&this.props.push(e,t,s[e])},w1=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},XC=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(__,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=g_(),(!s||!s.isStart)&&!i[Gt]&&(w1(i),r.zOrigin&&i[fi]&&(i[fi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},T1=function(e,t){var i={target:e,props:[],revert:XC,save:WC};return e._gsap||pi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},A1,Lm=function(e,t){var i=ys.createElementNS?ys.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ys.createElement(e);return i&&i.style?i:ys.createElement(e)},bi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(__,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,ml(t)||t,1)||""},ov="O,Moz,ms,Ms,Webkit".split(","),ml=function(e,t,i){var r=t||yo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ov[o]+e in s););return o<0?null:(o===3?"ms":o>=0?ov[o]:"")+e},Dm=function(){LC()&&window.document&&(iv=window,ys=iv.document,qa=ys.documentElement,yo=Lm("div")||{style:{}},Lm("div"),Gt=ml(Gt),fi=Gt+"Origin",yo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",A1=!!ml("perspective"),g_=pi.core.reverting,m_=1)},av=function(e){var t=e.ownerSVGElement,i=Lm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),qa.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),qa.removeChild(i),s},lv=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},C1=function(e){var t,i;try{t=e.getBBox()}catch{t=av(e),i=1}return t&&(t.width||t.height)||i||(t=av(e)),t&&!t.width&&!t.x&&!t.y?{x:+lv(e,["x","cx","x1"])||0,y:+lv(e,["y","cy","y1"])||0,width:0,height:0}:t},R1=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&C1(e))},Ws=function(e,t){if(t){var i=e.style,r;t in es&&t!==fi&&(t=Gt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(__,"-$1").toLowerCase())):i.removeAttribute(t)}},Ss=function(e,t,i,r,s,o){var a=new ci(e._pt,t,i,0,1,o?E1:M1);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},uv={deg:1,rad:1,turn:1},jC={grid:1,flex:1},Xs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=yo.style,l=DC.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",p=r==="%",m,_,g,d;if(r===o||!s||uv[r]||uv[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),d=e.getCTM&&R1(e),(p||o==="%")&&(es[t]||~t.indexOf("adius")))return m=d?e.getBBox()[l?"width":"height"]:e[c],Kt(p?s/m*h:s/100*m);if(a[l?"width":"height"]=h+(f?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,d&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ys||!_.appendChild)&&(_=ys.body),g=_._gsap,g&&p&&g.width&&l&&g.time===Ti.time&&!g.uncache)return Kt(s/g.width*h);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=h+r,m=e[c],v?e.style[t]=v:Ws(e,t)}else(p||o==="%")&&!jC[bi(_,"display")]&&(a.position=bi(e,"position")),_===e&&(a.position="static"),_.appendChild(yo),m=yo[c],_.removeChild(yo),a.position="absolute";return l&&p&&(g=To(_),g.time=Ti.time,g.width=_[c]),Kt(f?m*s/h:m&&s?h/m*s:0)},zr=function(e,t,i,r){var s;return m_||Dm(),t in wr&&t!=="transform"&&(t=wr[t],~t.indexOf(",")&&(t=t.split(",")[0])),es[t]&&t!=="transform"?(s=Ju(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:xh(bi(e,fi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=vh[t]&&vh[t](e,t,i)||bi(e,t)||jM(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Xs(e,t,s,i)+i:s},YC=function(e,t,i,r){if(!i||i==="none"){var s=ml(t,e,1),o=s&&bi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=bi(e,"borderTopColor"))}var a=new ci(this._pt,e.style,t,0,1,x1),l=0,u=0,c,h,f,p,m,_,g,d,v,x,y,A;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=bi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=bi(e,t)||r,_?e.style[t]=_:Ws(e,t)),c=[i,r],f1(c),i=c[0],r=c[1],f=i.match(Ua)||[],A=r.match(Ua)||[],A.length){for(;h=Ua.exec(r);)g=h[0],v=r.substring(l,h.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),g!==(_=f[u++]||"")&&(p=parseFloat(_)||0,y=_.substr((p+"").length),g.charAt(1)==="="&&(g=Ya(p,g)+y),d=parseFloat(g),x=g.substr((d+"").length),l=Ua.lastIndex-x.length,x||(x=x||Di.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(p=Xs(e,t,_,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:d-p,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?E1:M1;return HM.test(r)&&(a.e=0),this._pt=a,a},cv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},qC=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=cv[i]||i,t[1]=cv[r]||r,t.join(" ")},$C=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],es[a]&&(l=1,a=a==="transformOrigin"?fi:Gt),Ws(i,a);l&&(Ws(i,Gt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ju(i,1),o.uncache=1,w1(r)))}},vh={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new ci(e._pt,t,i,0,0,$C);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Qu=[1,0,0,1,0,0],b1={},P1=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},fv=function(e){var t=bi(e,Gt);return P1(t)?Qu:t.substr(7).match(BM).map(Kt)},v_=function(e,t){var i=e._gsap||To(e),r=e.style,s=fv(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Qu:s):(s===Qu&&!e.offsetParent&&e!==qa&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,qa.appendChild(e)),s=fv(e),l?r.display=l:Ws(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):qa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Nm=function(e,t,i,r,s,o){var a=e._gsap,l=s||v_(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,p=l[0],m=l[1],_=l[2],g=l[3],d=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,A=parseFloat(x[1])||0,w,M,P,S;i?l!==Qu&&(M=p*g-m*_)&&(P=y*(g/M)+A*(-_/M)+(_*v-g*d)/M,S=y*(-m/M)+A*(p/M)-(p*v-m*d)/M,y=P,A=S):(w=C1(e),y=w.x+(~x[0].indexOf("%")?y/100*w.width:y),A=w.y+(~(x[1]||x[0]).indexOf("%")?A/100*w.height:A)),r||r!==!1&&a.smooth?(d=y-u,v=A-c,a.xOffset=h+(d*p+v*_)-d,a.yOffset=f+(d*m+v*g)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=A,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[fi]="0px 0px",o&&(Ss(o,a,"xOrigin",u,y),Ss(o,a,"yOrigin",c,A),Ss(o,a,"xOffset",h,a.xOffset),Ss(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+A)},Ju=function(e,t){var i=e._gsap||new d1(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=bi(e,fi)||"0",c,h,f,p,m,_,g,d,v,x,y,A,w,M,P,S,E,U,O,J,L,k,V,W,D,I,b,X,ee,$,Q,se;return c=h=f=_=g=d=v=x=y=0,p=m=1,i.svg=!!(e.getCTM&&R1(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Gt]!=="none"?l[Gt]:"")),r.scale=r.rotate=r.translate="none"),M=v_(e,i.svg),i.svg&&(i.uncache?(D=e.getBBox(),u=i.xOrigin-D.x+"px "+(i.yOrigin-D.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),Nm(e,W||u,!!W||i.originIsAbsolute,i.smooth!==!1,M)),A=i.xOrigin||0,w=i.yOrigin||0,M!==Qu&&(U=M[0],O=M[1],J=M[2],L=M[3],c=k=M[4],h=V=M[5],M.length===6?(p=Math.sqrt(U*U+O*O),m=Math.sqrt(L*L+J*J),_=U||O?qo(O,U)*uo:0,v=J||L?qo(J,L)*uo+_:0,v&&(m*=Math.abs(Math.cos(v*$a))),i.svg&&(c-=A-(A*U+w*J),h-=w-(A*O+w*L))):(se=M[6],$=M[7],b=M[8],X=M[9],ee=M[10],Q=M[11],c=M[12],h=M[13],f=M[14],P=qo(se,ee),g=P*uo,P&&(S=Math.cos(-P),E=Math.sin(-P),W=k*S+b*E,D=V*S+X*E,I=se*S+ee*E,b=k*-E+b*S,X=V*-E+X*S,ee=se*-E+ee*S,Q=$*-E+Q*S,k=W,V=D,se=I),P=qo(-J,ee),d=P*uo,P&&(S=Math.cos(-P),E=Math.sin(-P),W=U*S-b*E,D=O*S-X*E,I=J*S-ee*E,Q=L*E+Q*S,U=W,O=D,J=I),P=qo(O,U),_=P*uo,P&&(S=Math.cos(P),E=Math.sin(P),W=U*S+O*E,D=k*S+V*E,O=O*S-U*E,V=V*S-k*E,U=W,k=D),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,d=180-d),p=Kt(Math.sqrt(U*U+O*O+J*J)),m=Kt(Math.sqrt(V*V+se*se)),P=qo(k,V),v=Math.abs(P)>2e-4?P*uo:0,y=Q?1/(Q<0?-Q:Q):0),i.svg&&(W=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!P1(bi(e,Gt)),W&&e.setAttribute("transform",W))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=Kt(p),i.scaleY=Kt(m),i.rotation=Kt(_)+a,i.rotationX=Kt(g)+a,i.rotationY=Kt(d)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[fi]=xh(u)),i.xOffset=i.yOffset=0,i.force3D=Di.force3D,i.renderTransform=i.svg?ZC:A1?L1:KC,i.uncache=0,i},xh=function(e){return(e=e.split(" "))[0]+" "+e[1]},zd=function(e,t,i){var r=Un(t);return Kt(parseFloat(t)+parseFloat(Xs(e,"x",i+"px",r)))+r},KC=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,L1(e,t)},to="0deg",kl="0px",no=") ",L1=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,h=i.rotationX,f=i.skewX,p=i.skewY,m=i.scaleX,_=i.scaleY,g=i.transformPerspective,d=i.force3D,v=i.target,x=i.zOrigin,y="",A=d==="auto"&&e&&e!==1||d===!0;if(x&&(h!==to||c!==to)){var w=parseFloat(c)*$a,M=Math.sin(w),P=Math.cos(w),S;w=parseFloat(h)*$a,S=Math.cos(w),o=zd(v,o,M*S*-x),a=zd(v,a,-Math.sin(w)*-x),l=zd(v,l,P*S*-x+x)}g!==kl&&(y+="perspective("+g+no),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(A||o!==kl||a!==kl||l!==kl)&&(y+=l!==kl||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+no),u!==to&&(y+="rotate("+u+no),c!==to&&(y+="rotateY("+c+no),h!==to&&(y+="rotateX("+h+no),(f!==to||p!==to)&&(y+="skew("+f+", "+p+no),(m!==1||_!==1)&&(y+="scale("+m+", "+_+no),v.style[Gt]=y||"translate(0, 0)"},ZC=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,h=i.scaleX,f=i.scaleY,p=i.target,m=i.xOrigin,_=i.yOrigin,g=i.xOffset,d=i.yOffset,v=i.forceCSS,x=parseFloat(o),y=parseFloat(a),A,w,M,P,S;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=$a,u*=$a,A=Math.cos(l)*h,w=Math.sin(l)*h,M=Math.sin(l-u)*-f,P=Math.cos(l-u)*f,u&&(c*=$a,S=Math.tan(u-c),S=Math.sqrt(1+S*S),M*=S,P*=S,c&&(S=Math.tan(c),S=Math.sqrt(1+S*S),A*=S,w*=S)),A=Kt(A),w=Kt(w),M=Kt(M),P=Kt(P)):(A=h,P=f,w=M=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Xs(p,"x",o,"px"),y=Xs(p,"y",a,"px")),(m||_||g||d)&&(x=Kt(x+m-(m*A+_*M)+g),y=Kt(y+_-(m*w+_*P)+d)),(r||s)&&(S=p.getBBox(),x=Kt(x+r/100*S.width),y=Kt(y+s/100*S.height)),S="matrix("+A+","+w+","+M+","+P+","+x+","+y+")",p.setAttribute("transform",S),v&&(p.style[Gt]=S)},QC=function(e,t,i,r,s){var o=360,a=xn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?uo:1),u=l-r,c=r+u+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),h==="cw"&&u<0?u=(u+o*sv)%o-~~(u/o)*o:h==="ccw"&&u>0&&(u=(u-o*sv)%o-~~(u/o)*o)),e._pt=f=new ci(e._pt,t,i,r,u,UC),f.e=c,f.u="deg",e._props.push(i),f},hv=function(e,t){for(var i in t)e[i]=t[i];return e},JC=function(e,t,i){var r=hv({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,h,f,p,m;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Gt]=t,a=Ju(i,1),Ws(i,Gt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Gt],o[Gt]=t,a=Ju(i,1),o[Gt]=u);for(l in es)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Un(u),m=Un(c),h=p!==m?Xs(i,l,u,m):parseFloat(u),f=parseFloat(c),e._pt=new ci(e._pt,a,l,h,f-h,Pm),e._pt.u=m||0,e._props.push(l));hv(a,r)};ui("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});vh[e>1?"border"+n:n]=function(a,l,u,c,h){var f,p;if(arguments.length<4)return f=o.map(function(m){return zr(a,m,u)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(c+"").split(" "),p={},o.forEach(function(m,_){return p[m]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,p,h)}});var D1={name:"css",register:Dm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,h,f,p,m,_,g,d,v,x,y,A,w,M,P,S;m_||Dm(),this.styles=this.styles||T1(e),P=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(Mi[_]&&p1(_,t,i,r,e,s)))){if(p=typeof c,m=vh[_],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=$u(c)),m)m(this,e,_,c,i)&&(M=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",Is.lastIndex=0,Is.test(u)||(g=Un(u),d=Un(c),d?g!==d&&(u=Xs(e,_,u,d)+d):g&&(c+=g)),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),P.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],xn(u)&&~u.indexOf("random(")&&(u=$u(u)),Un(u+"")||u==="auto"||(u+=Di.units[_]||Un(zr(e,_))||""),(u+"").charAt(1)==="="&&(u=zr(e,_))):u=zr(e,_),f=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),h=parseFloat(c),_ in wr&&(_==="autoAlpha"&&(f===1&&zr(e,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,a.visibility),Ss(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=wr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in es,x){if(this.styles.save(_),S=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=bi(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var E=e.style.perspective;e.style.perspective=c,c=bi(e,"perspective"),E?e.style.perspective=E:Ws(e,"perspective")}h=parseFloat(c)}if(y||(A=e._gsap,A.renderTransform&&!t.parseTransform||Ju(e,t.parseTransform),w=t.smoothOrigin!==!1&&A.smooth,y=this._pt=new ci(this._pt,a,Gt,0,1,A.renderTransform,A,0,-1),y.dep=1),_==="scale")this._pt=new ci(this._pt,A,"scaleY",A.scaleY,(v?Ya(A.scaleY,v+h):h)-A.scaleY||0,Pm),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(fi,0,a[fi]),c=qC(c),A.svg?Nm(e,c,0,w,0,this):(d=parseFloat(c.split(" ")[2])||0,d!==A.zOrigin&&Ss(this,A,"zOrigin",A.zOrigin,d),Ss(this,a,_,xh(u),xh(c)));continue}else if(_==="svgOrigin"){Nm(e,c,1,w,0,this);continue}else if(_ in b1){QC(this,A,_,f,v?Ya(f,v+c):c);continue}else if(_==="smoothOrigin"){Ss(this,A,"smooth",A.smooth,c);continue}else if(_==="force3D"){A[_]=c;continue}else if(_==="transform"){JC(this,c,e);continue}}else _ in a||(_=ml(_)||_);if(x||(h||h===0)&&(f||f===0)&&!NC.test(c)&&_ in a)g=(u+"").substr((f+"").length),h||(h=0),d=Un(c)||(_ in Di.units?Di.units[_]:g),g!==d&&(f=Xs(e,_,u,d)),this._pt=new ci(this._pt,x?A:a,_,f,(v?Ya(f,v+h):h)-f,!x&&(d==="px"||_==="zIndex")&&t.autoRound!==!1?FC:Pm),this._pt.u=d||0,x&&S!==c?(this._pt.b=u,this._pt.e=S,this._pt.r=OC):g!==d&&d!=="%"&&(this._pt.b=u,this._pt.r=IC);else if(_ in a)YC.call(this,e,_,u,v?v+c:c);else if(_ in e)this.add(e,_,u||e[_],v?v+c:c,r,s);else if(_!=="parseTransform"){s_(_,c);continue}x||(_ in a?P.push(_,0,a[_]):typeof e[_]=="function"?P.push(_,2,e[_]()):P.push(_,1,u||e[_])),o.push(_)}}M&&y1(this)},render:function(e,t){if(t.tween._time||!g_())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:zr,aliases:wr,getSetter:function(e,t,i){var r=wr[t];return r&&r.indexOf(",")<0&&(t=r),t in es&&t!==fi&&(e._gsap.x||zr(e,"x"))?i&&rv===i?t==="scale"?HC:BC:(rv=i||{})&&(t==="scale"?VC:GC):e.style&&!n_(e.style[t])?kC:~t.indexOf("-")?zC:d_(e,t)},core:{_removeProperty:Ws,_getMatrix:v_}};pi.utils.checkPrefix=ml;pi.core.getStyleSaver=T1;(function(n,e,t,i){var r=ui(n+","+e+","+t,function(s){es[s]=1});ui(e,function(s){Di.units[s]="deg",b1[s]=1}),wr[r[13]]=n+","+e,ui(i,function(s){var o=s.split(":");wr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ui("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Di.units[n]="px"});pi.registerPlugin(D1);var Vi=pi.registerPlugin(D1)||pi;Vi.core.Tween;function eR(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function tR(n,e,t){return e&&eR(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Mn,If,Ai,Ms,Es,Ka,N1,co,Za,U1,Xr,ar,I1,O1=function(){return Mn||typeof window<"u"&&(Mn=window.gsap)&&Mn.registerPlugin&&Mn},F1=1,Oa=[],ut=[],Rr=[],xu=Date.now,Um=function(e,t){return t},nR=function(){var e=Za.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,ut),r.push.apply(r,Rr),ut=i,Rr=r,Um=function(o,a){return t[o](a)}},Os=function(e,t){return~Rr.indexOf(e)&&Rr[Rr.indexOf(e)+1][t]},yu=function(e){return!!~U1.indexOf(e)},Hn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},zn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Nc="scrollLeft",Uc="scrollTop",Im=function(){return Xr&&Xr.isPressed||ut.cache++},yh=function(e,t){var i=function r(s){if(s||s===0){F1&&(Ai.history.scrollRestoration="manual");var o=Xr&&Xr.isPressed;s=r.v=Math.round(s)||(Xr&&Xr.iOS?1:0),e(s),r.cacheID=ut.cache,o&&Um("ss",s)}else(t||ut.cache!==r.cacheID||Um("ref"))&&(r.cacheID=ut.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},$n={s:Nc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:yh(function(n){return arguments.length?Ai.scrollTo(n,un.sc()):Ai.pageXOffset||Ms[Nc]||Es[Nc]||Ka[Nc]||0})},un={s:Uc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:$n,sc:yh(function(n){return arguments.length?Ai.scrollTo($n.sc(),n):Ai.pageYOffset||Ms[Uc]||Es[Uc]||Ka[Uc]||0})},ei=function(e,t){return(t&&t._ctx&&t._ctx.selector||Mn.utils.toArray)(e)[0]||(typeof e=="string"&&Mn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},iR=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},js=function(e,t){var i=t.s,r=t.sc;yu(e)&&(e=Ms.scrollingElement||Es);var s=ut.indexOf(e),o=r===un.sc?1:2;!~s&&(s=ut.push(e)-1),ut[s+o]||Hn(e,"scroll",Im);var a=ut[s+o],l=a||(ut[s+o]=yh(Os(e,i),!0)||(yu(e)?r:yh(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=Mn.getProperty(e,"scrollBehavior")==="smooth"),l},Om=function(e,t,i){var r=e,s=e,o=xu(),a=o,l=t||50,u=Math.max(500,l*3),c=function(m,_){var g=xu();_||g-o>l?(s=r,r=m,a=o,o=g):i?r+=m:r=s+(m-s)/(g-a)*(o-a)},h=function(){s=r=i?0:r,a=o=0},f=function(m){var _=a,g=s,d=xu();return(m||m===0)&&m!==r&&c(m),o===a||d-a>u?0:(r+(i?g:-g))/((i?d:o)-_)*1e3};return{update:c,reset:h,getVelocity:f}},zl=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},dv=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},k1=function(){Za=Mn.core.globals().ScrollTrigger,Za&&Za.core&&nR()},z1=function(e){return Mn=e||O1(),!If&&Mn&&typeof document<"u"&&document.body&&(Ai=window,Ms=document,Es=Ms.documentElement,Ka=Ms.body,U1=[Ai,Ms,Es,Ka],Mn.utils.clamp,I1=Mn.core.context||function(){},co="onpointerenter"in Ka?"pointer":"mouse",N1=Jt.isTouch=Ai.matchMedia&&Ai.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ai||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ar=Jt.eventTypes=("ontouchstart"in Es?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Es?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return F1=0},500),If=1),Za||k1(),If};$n.op=un;ut.cache=0;var Jt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){If||z1(Mn)||console.warn("Please gsap.registerPlugin(Observer)"),Za||k1();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,h=i.onStop,f=i.onStopDelay,p=i.ignore,m=i.wheelSpeed,_=i.event,g=i.onDragStart,d=i.onDragEnd,v=i.onDrag,x=i.onPress,y=i.onRelease,A=i.onRight,w=i.onLeft,M=i.onUp,P=i.onDown,S=i.onChangeX,E=i.onChangeY,U=i.onChange,O=i.onToggleX,J=i.onToggleY,L=i.onHover,k=i.onHoverEnd,V=i.onMove,W=i.ignoreCheck,D=i.isNormalizer,I=i.onGestureStart,b=i.onGestureEnd,X=i.onWheel,ee=i.onEnable,$=i.onDisable,Q=i.onClick,se=i.scrollSpeed,ge=i.capture,ve=i.allowClicks,Fe=i.lockAxis,te=i.onLockAxis;this.target=a=ei(a)||Es,this.vars=i,p&&(p=Mn.utils.toArray(p)),r=r||1e-9,s=s||0,m=m||1,se=se||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(Ai.getComputedStyle(Ka).lineHeight)||22);var xe,ce,H,Te,_e,be,ye,G=this,le=0,R=0,T=i.passive||!c&&i.passive!==!1,z=js(a,$n),ne=js(a,un),ie=z(),re=ne(),Me=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ar[0]==="pointerdown",pe=yu(a),fe=a.ownerDocument||Ms,Le=[0,0,0],Be=[0,0,0],Z=0,Xe=function(){return Z=xu()},De=function(Ce,ze){return(G.event=Ce)&&p&&iR(Ce.target,p)||ze&&Me&&Ce.pointerType!=="touch"||W&&W(Ce,ze)},qe=function(){G._vx.reset(),G._vy.reset(),ce.pause(),h&&h(G)},Ue=function(){var Ce=G.deltaX=dv(Le),ze=G.deltaY=dv(Be),ae=Math.abs(Ce)>=r,We=Math.abs(ze)>=r;U&&(ae||We)&&U(G,Ce,ze,Le,Be),ae&&(A&&G.deltaX>0&&A(G),w&&G.deltaX<0&&w(G),S&&S(G),O&&G.deltaX<0!=le<0&&O(G),le=G.deltaX,Le[0]=Le[1]=Le[2]=0),We&&(P&&G.deltaY>0&&P(G),M&&G.deltaY<0&&M(G),E&&E(G),J&&G.deltaY<0!=R<0&&J(G),R=G.deltaY,Be[0]=Be[1]=Be[2]=0),(Te||H)&&(V&&V(G),H&&(g&&H===1&&g(G),v&&v(G),H=0),Te=!1),be&&!(be=!1)&&te&&te(G),_e&&(X(G),_e=!1),xe=0},we=function(Ce,ze,ae){Le[ae]+=Ce,Be[ae]+=ze,G._vx.update(Ce),G._vy.update(ze),u?xe||(xe=requestAnimationFrame(Ue)):Ue()},$e=function(Ce,ze){Fe&&!ye&&(G.axis=ye=Math.abs(Ce)>Math.abs(ze)?"x":"y",be=!0),ye!=="y"&&(Le[2]+=Ce,G._vx.update(Ce,!0)),ye!=="x"&&(Be[2]+=ze,G._vy.update(ze,!0)),u?xe||(xe=requestAnimationFrame(Ue)):Ue()},st=function(Ce){if(!De(Ce,1)){Ce=zl(Ce,c);var ze=Ce.clientX,ae=Ce.clientY,We=ze-G.x,Ve=ae-G.y,Ze=G.isDragging;G.x=ze,G.y=ae,(Ze||(We||Ve)&&(Math.abs(G.startX-ze)>=s||Math.abs(G.startY-ae)>=s))&&(H||(H=Ze?2:1),Ze||(G.isDragging=!0),$e(We,Ve))}},gt=G.onPress=function(Ie){De(Ie,1)||Ie&&Ie.button||(G.axis=ye=null,ce.pause(),G.isPressed=!0,Ie=zl(Ie),le=R=0,G.startX=G.x=Ie.clientX,G.startY=G.y=Ie.clientY,G._vx.reset(),G._vy.reset(),Hn(D?a:fe,ar[1],st,T,!0),G.deltaX=G.deltaY=0,x&&x(G))},Ee=G.onRelease=function(Ie){if(!De(Ie,1)){zn(D?a:fe,ar[1],st,!0);var Ce=!isNaN(G.y-G.startY),ze=G.isDragging,ae=ze&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),We=zl(Ie);!ae&&Ce&&(G._vx.reset(),G._vy.reset(),c&&ve&&Mn.delayedCall(.08,function(){if(xu()-Z>300&&!Ie.defaultPrevented){if(Ie.target.click)Ie.target.click();else if(fe.createEvent){var Ve=fe.createEvent("MouseEvents");Ve.initMouseEvent("click",!0,!0,Ai,1,We.screenX,We.screenY,We.clientX,We.clientY,!1,!1,!1,!1,0,null),Ie.target.dispatchEvent(Ve)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,h&&ze&&!D&&ce.restart(!0),H&&Ue(),d&&ze&&d(G),y&&y(G,ae)}},ue=function(Ce){return Ce.touches&&Ce.touches.length>1&&(G.isGesturing=!0)&&I(Ce,G.isDragging)},N=function(){return(G.isGesturing=!1)||b(G)},he=function(Ce){if(!De(Ce)){var ze=z(),ae=ne();we((ze-ie)*se,(ae-re)*se,1),ie=ze,re=ae,h&&ce.restart(!0)}},de=function(Ce){if(!De(Ce)){Ce=zl(Ce,c),X&&(_e=!0);var ze=(Ce.deltaMode===1?l:Ce.deltaMode===2?Ai.innerHeight:1)*m;we(Ce.deltaX*ze,Ce.deltaY*ze,0),h&&!D&&ce.restart(!0)}},Ge=function(Ce){if(!De(Ce)){var ze=Ce.clientX,ae=Ce.clientY,We=ze-G.x,Ve=ae-G.y;G.x=ze,G.y=ae,Te=!0,h&&ce.restart(!0),(We||Ve)&&$e(We,Ve)}},He=function(Ce){G.event=Ce,L(G)},ft=function(Ce){G.event=Ce,k(G)},pt=function(Ce){return De(Ce)||zl(Ce,c)&&Q(G)};ce=G._dc=Mn.delayedCall(f||.25,qe).pause(),G.deltaX=G.deltaY=0,G._vx=Om(0,50,!0),G._vy=Om(0,50,!0),G.scrollX=z,G.scrollY=ne,G.isDragging=G.isGesturing=G.isPressed=!1,I1(this),G.enable=function(Ie){return G.isEnabled||(Hn(pe?fe:a,"scroll",Im),o.indexOf("scroll")>=0&&Hn(pe?fe:a,"scroll",he,T,ge),o.indexOf("wheel")>=0&&Hn(a,"wheel",de,T,ge),(o.indexOf("touch")>=0&&N1||o.indexOf("pointer")>=0)&&(Hn(a,ar[0],gt,T,ge),Hn(fe,ar[2],Ee),Hn(fe,ar[3],Ee),ve&&Hn(a,"click",Xe,!0,!0),Q&&Hn(a,"click",pt),I&&Hn(fe,"gesturestart",ue),b&&Hn(fe,"gestureend",N),L&&Hn(a,co+"enter",He),k&&Hn(a,co+"leave",ft),V&&Hn(a,co+"move",Ge)),G.isEnabled=!0,G.isDragging=G.isGesturing=G.isPressed=Te=H=!1,G._vx.reset(),G._vy.reset(),ie=z(),re=ne(),Ie&&Ie.type&&gt(Ie),ee&&ee(G)),G},G.disable=function(){G.isEnabled&&(Oa.filter(function(Ie){return Ie!==G&&yu(Ie.target)}).length||zn(pe?fe:a,"scroll",Im),G.isPressed&&(G._vx.reset(),G._vy.reset(),zn(D?a:fe,ar[1],st,!0)),zn(pe?fe:a,"scroll",he,ge),zn(a,"wheel",de,ge),zn(a,ar[0],gt,ge),zn(fe,ar[2],Ee),zn(fe,ar[3],Ee),zn(a,"click",Xe,!0),zn(a,"click",pt),zn(fe,"gesturestart",ue),zn(fe,"gestureend",N),zn(a,co+"enter",He),zn(a,co+"leave",ft),zn(a,co+"move",Ge),G.isEnabled=G.isPressed=G.isDragging=!1,$&&$(G))},G.kill=G.revert=function(){G.disable();var Ie=Oa.indexOf(G);Ie>=0&&Oa.splice(Ie,1),Xr===G&&(Xr=0)},Oa.push(G),D&&yu(a)&&(Xr=G),G.enable(_)},tR(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Jt.version="3.15.0";Jt.create=function(n){return new Jt(n)};Jt.register=z1;Jt.getAll=function(){return Oa.slice()};Jt.getById=function(n){return Oa.filter(function(e){return e.vars.id===n})[0]};O1()&&Mn.registerPlugin(Jt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Re,ya,at,yt,Ei,_t,x_,Sh,ec,Su,nu,Ic,Ln,Zh,Fm,Xn,pv,mv,Sa,B1,Bd,H1,Gn,km,V1,G1,hs,zm,y_,Qa,S_,Mu,Bm,Hd,Oc=1,Dn=Date.now,Vd=Dn(),er=0,iu=0,gv=function(e,t,i){var r=Si(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},_v=function(e,t){return t&&(!Si(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},rR=function n(){return iu&&requestAnimationFrame(n)},vv=function(){return Zh=1},xv=function(){return Zh=0},yr=function(e){return e},ru=function(e){return Math.round(e*1e5)/1e5||0},W1=function(){return typeof window<"u"},X1=function(){return Re||W1()&&(Re=window.gsap)&&Re.registerPlugin&&Re},Bo=function(e){return!!~x_.indexOf(e)},j1=function(e){return(e==="Height"?S_:at["inner"+e])||Ei["client"+e]||_t["client"+e]},Y1=function(e){return Os(e,"getBoundingClientRect")||(Bo(e)?function(){return Bf.width=at.innerWidth,Bf.height=S_,Bf}:function(){return Br(e)})},sR=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Os(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?j1(s):e["client"+s])||0}},oR=function(e,t){return!t||~Rr.indexOf(e)?Y1(e):function(){return Bf}},Tr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Os(e,i))?o()-Y1(e)()[s]:Bo(e)?(Ei[i]||_t[i])-j1(r):e[i]-e["offset"+r])},Fc=function(e,t){for(var i=0;i<Sa.length;i+=3)(!t||~t.indexOf(Sa[i+1]))&&e(Sa[i],Sa[i+1],Sa[i+2])},Si=function(e){return typeof e=="string"},In=function(e){return typeof e=="function"},su=function(e){return typeof e=="number"},fo=function(e){return typeof e=="object"},Bl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},$o=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},Ko=Math.abs,q1="left",$1="top",M_="right",E_="bottom",bo="width",Po="height",Eu="Right",wu="Left",Tu="Top",Au="Bottom",tn="padding",Xi="margin",gl="Width",w_="Height",an="px",ji=function(e){return at.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},aR=function(e){var t=ji(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},yv=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Br=function(e,t){var i=t&&ji(e)[Fm]!=="matrix(1, 0, 0, 1, 0, 0)"&&Re.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},Mh=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},K1=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},lR=function(e){return function(t){return Re.utils.snap(K1(e),t)}},T_=function(e){var t=Re.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},uR=function(e){return function(t,i){return T_(K1(e))(t,i.direction)}},kc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},mn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},pn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},zc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Sv={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Bc={toggleActions:"play",anticipatePin:0},Eh={top:0,left:0,center:.5,bottom:1,right:1},Of=function(e,t){if(Si(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in Eh?Eh[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Hc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,h=s.fontSize,f=s.indent,p=s.fontWeight,m=yt.createElement("div"),_=Bo(i)||Os(i,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,d=_?_t:i.tagName==="IFRAME"?i.contentDocument.body:i,v=e.indexOf("start")!==-1,x=v?u:c,y="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((g||l)&&_?"fixed;":"absolute;"),(g||l||!_)&&(y+=(r===un?M_:E_)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=v,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=y,m.innerText=t||t===0?e+"-"+t:e,d.children[0]?d.insertBefore(m,d.children[0]):d.appendChild(m),m._offset=m["offset"+r.op.d2],Ff(m,0,r,v),m},Ff=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+gl]=1,s["border"+a+gl]=0,s[i.p]=t+"px",Re.set(e,s)},rt=[],Hm={},tc,Mv=function(){return Dn()-er>34&&(tc||(tc=requestAnimationFrame(qr)))},Zo=function(){(!Gn||!Gn.isPressed||Gn.startX>_t.clientWidth)&&(ut.cache++,Gn?tc||(tc=requestAnimationFrame(qr)):qr(),er||Vo("scrollStart"),er=Dn())},Gd=function(){G1=at.innerWidth,V1=at.innerHeight},ou=function(e){ut.cache++,(e===!0||!Ln&&!H1&&!yt.fullscreenElement&&!yt.webkitFullscreenElement&&(!km||G1!==at.innerWidth||Math.abs(at.innerHeight-V1)>at.innerHeight*.25))&&Sh.restart(!0)},Ho={},cR=[],Z1=function n(){return pn(Je,"scrollEnd",n)||So(!0)},Vo=function(e){return Ho[e]&&Ho[e].map(function(t){return t()})||cR},xi=[],Q1=function(e){for(var t=0;t<xi.length;t+=5)(!e||xi[t+4]&&xi[t+4].query===e)&&(xi[t].style.cssText=xi[t+1],xi[t].getBBox&&xi[t].setAttribute("transform",xi[t+2]||""),xi[t+3].uncache=1)},J1=function(){return ut.forEach(function(e){return In(e)&&++e.cacheID&&(e.rec=e())})},A_=function(e,t){var i;for(Xn=0;Xn<rt.length;Xn++)i=rt[Xn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Mu=!0,t&&Q1(t),t||Vo("revert")},eE=function(e,t){ut.cache++,(t||!jn)&&ut.forEach(function(i){return In(i)&&i.cacheID++&&(i.rec=0)}),Si(e)&&(at.history.scrollRestoration=y_=e)},jn,Lo=0,Ev,fR=function(){if(Ev!==Lo){var e=Ev=Lo;requestAnimationFrame(function(){return e===Lo&&So(!0)})}},tE=function(){_t.appendChild(Qa),S_=!Gn&&Qa.offsetHeight||at.innerHeight,_t.removeChild(Qa)},wv=function(e){return ec(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},So=function(e,t){if(Ei=yt.documentElement,_t=yt.body,x_=[at,yt,Ei,_t],er&&!e&&!Mu){mn(Je,"scrollEnd",Z1);return}tE(),jn=Je.isRefreshing=!0,Mu||J1();var i=Vo("refreshInit");B1&&Je.sort(),t||A_(),ut.forEach(function(r){In(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),rt.slice(0).forEach(function(r){return r.refresh()}),Mu=!1,rt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Bm=1,wv(!0),rt.forEach(function(r){var s=Tr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),wv(!1),Bm=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),ut.forEach(function(r){In(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),eE(y_,1),Sh.pause(),Lo++,jn=2,qr(2),rt.forEach(function(r){return In(r.vars.onRefresh)&&r.vars.onRefresh(r)}),jn=Je.isRefreshing=!1,Vo("refresh")},Vm=0,kf=1,Cu,qr=function(e){if(e===2||!jn&&!Mu){Je.isUpdating=!0,Cu&&Cu.update(0);var t=rt.length,i=Dn(),r=i-Vd>=50,s=t&&rt[0].scroll();if(kf=Vm>s?-1:1,jn||(Vm=s),r&&(er&&!Zh&&i-er>200&&(er=0,Vo("scrollEnd")),nu=Vd,Vd=i),kf<0){for(Xn=t;Xn-- >0;)rt[Xn]&&rt[Xn].update(0,r);kf=1}else for(Xn=0;Xn<t;Xn++)rt[Xn]&&rt[Xn].update(0,r);Je.isUpdating=!1}tc=0},Gm=[q1,$1,E_,M_,Xi+Au,Xi+Eu,Xi+Tu,Xi+wu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],zf=Gm.concat([bo,Po,"boxSizing","max"+gl,"max"+w_,"position",Xi,tn,tn+Tu,tn+Eu,tn+Au,tn+wu]),hR=function(e,t,i){Ja(i);var r=e._gsap;if(r.spacerIsNative)Ja(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Wd=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Gm.length,o=t.style,a=e.style,l;s--;)l=Gm[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[E_]=a[M_]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[bo]=Mh(e,$n)+an,o[Po]=Mh(e,un)+an,o[tn]=a[Xi]=a[$1]=a[q1]="0",Ja(r),a[bo]=a["max"+gl]=i[bo],a[Po]=a["max"+w_]=i[Po],a[tn]=i[tn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},dR=/([A-Z])/g,Ja=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Re.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(dR,"-$1").toLowerCase())}},Vc=function(e){for(var t=zf.length,i=e.style,r=[],s=0;s<t;s++)r.push(zf[s],i[zf[s]]);return r.t=e,r},pR=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Bf={left:0,top:0},Tv=function(e,t,i,r,s,o,a,l,u,c,h,f,p,m){In(e)&&(e=e(l)),Si(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Of("0"+e.substr(3),i):0));var _=p?p.time():0,g,d,v;if(p&&p.seek(0),isNaN(e)||(e=+e),su(e))p&&(e=Re.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,f,e)),a&&Ff(a,i,r,!0);else{In(t)&&(t=t(l));var x=(e||"0").split(" "),y,A,w,M;v=ei(t,l)||_t,y=Br(v)||{},(!y||!y.left&&!y.top)&&ji(v).display==="none"&&(M=v.style.display,v.style.display="block",y=Br(v),M?v.style.display=M:v.style.removeProperty("display")),A=Of(x[0],y[r.d]),w=Of(x[1]||"0",i),e=y[r.p]-u[r.p]-c+A+s-w,a&&Ff(a,w,r,i-w<20||a._isStart&&w>20),i-=i-w}if(m&&(l[m]=e||-.001,e<0&&(e=0)),o){var P=e+i,S=o._isStart;g="scroll"+r.d2,Ff(o,P,r,S&&P>20||!S&&(h?Math.max(_t[g],Ei[g]):o.parentNode[g])<=P+1),h&&(u=Br(a),h&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+an))}return p&&v&&(g=Br(v),p.seek(f),d=Br(v),p._caScrollDist=g[r.p]-d[r.p],e=e/p._caScrollDist*f),p&&p.seek(_),p?e:Math.round(e)},mR=/(webkit|moz|length|cssText|inset)/i,Av=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===_t){e._stOrig=s.cssText,a=ji(e);for(o in a)!+o&&!mR.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Re.core.getCache(e).uncache=1,t.appendChild(e)}},nE=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Gc=function(e,t,i){var r={};r[t.p]="+="+i,Re.set(e,r)},Cv=function(e,t){var i=js(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,h){var f=o.tween,p=l.onComplete,m={};u=u||i();var _=nE(i,u,function(){f.kill(),o.tween=0});return h=c&&h||0,c=c||a-u,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=m,m[r]=function(){return _(u+c*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){ut.cache++,o.tween&&qr()},l.onComplete=function(){o.tween=0,p&&p.call(f)},f=o.tween=Re.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},mn(e,"wheel",i.wheelHandler),Je.isTouch&&mn(e,"touchmove",i.wheelHandler),s},Je=function(){function n(t,i){ya||n.register(Re)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),zm(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!iu){this.update=this.refresh=this.kill=yr;return}i=yv(Si(i)||su(i)||i.nodeType?{trigger:i}:i,Bc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,h=s.scrub,f=s.trigger,p=s.pin,m=s.pinSpacing,_=s.invalidateOnRefresh,g=s.anticipatePin,d=s.onScrubComplete,v=s.onSnapComplete,x=s.once,y=s.snap,A=s.pinReparent,w=s.pinSpacer,M=s.containerAnimation,P=s.fastScrollEnd,S=s.preventOverlaps,E=i.horizontal||i.containerAnimation&&i.horizontal!==!1?$n:un,U=!h&&h!==0,O=ei(i.scroller||at),J=Re.core.getCache(O),L=Bo(O),k=("pinType"in i?i.pinType:Os(O,"pinType")||L&&"fixed")==="fixed",V=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],W=U&&i.toggleActions.split(" "),D="markers"in i?i.markers:Bc.markers,I=L?0:parseFloat(ji(O)["border"+E.p2+gl])||0,b=this,X=i.onRefreshInit&&function(){return i.onRefreshInit(b)},ee=sR(O,L,E),$=oR(O,L),Q=0,se=0,ge=0,ve=js(O,E),Fe,te,xe,ce,H,Te,_e,be,ye,G,le,R,T,z,ne,ie,re,Me,pe,fe,Le,Be,Z,Xe,De,qe,Ue,we,$e,st,gt,Ee,ue,N,he,de,Ge,He,ft;if(b._startClamp=b._endClamp=!1,b._dir=E,g*=45,b.scroller=O,b.scroll=M?M.time.bind(M):ve,ce=ve(),b.vars=i,r=r||i.animation,"refreshPriority"in i&&(B1=1,i.refreshPriority===-9999&&(Cu=b)),J.tweenScroll=J.tweenScroll||{top:Cv(O,un),left:Cv(O,$n)},b.tweenTo=Fe=J.tweenScroll[E.p],b.scrubDuration=function(ae){ue=su(ae)&&ae,ue?Ee?Ee.duration(ae):Ee=Re.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ue,paused:!0,onComplete:function(){return d&&d(b)}}):(Ee&&Ee.progress(1).kill(),Ee=0)},r&&(r.vars.lazy=!1,r._initted&&!b.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),b.animation=r.pause(),r.scrollTrigger=b,b.scrubDuration(h),st=0,l||(l=r.vars.id)),y&&((!fo(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in _t.style&&Re.set(L?[_t,Ei]:O,{scrollBehavior:"auto"}),ut.forEach(function(ae){return In(ae)&&ae.target===(L?yt.scrollingElement||Ei:O)&&(ae.smooth=!1)}),xe=In(y.snapTo)?y.snapTo:y.snapTo==="labels"?lR(r):y.snapTo==="labelsDirectional"?uR(r):y.directional!==!1?function(ae,We){return T_(y.snapTo)(ae,Dn()-se<500?0:We.direction)}:Re.utils.snap(y.snapTo),N=y.duration||{min:.1,max:2},N=fo(N)?Su(N.min,N.max):Su(N,N),he=Re.delayedCall(y.delay||ue/2||.1,function(){var ae=ve(),We=Dn()-se<500,Ve=Fe.tween;if((We||Math.abs(b.getVelocity())<10)&&!Ve&&!Zh&&Q!==ae){var Ze=(ae-Te)/z,zt=r&&!U?r.totalProgress():Ze,ot=We?0:(zt-gt)/(Dn()-nu)*1e3||0,Ct=Re.utils.clamp(-Ze,1-Ze,Ko(ot/2)*ot/.185),sn=Ze+(y.inertia===!1?0:Ct),Pt,Rt,vt=y,mi=vt.onStart,C=vt.onInterrupt,B=vt.onComplete;if(Pt=xe(sn,b),su(Pt)||(Pt=sn),Rt=Math.max(0,Math.round(Te+Pt*z)),ae<=_e&&ae>=Te&&Rt!==ae){if(Ve&&!Ve._initted&&Ve.data<=Ko(Rt-ae))return;y.inertia===!1&&(Ct=Pt-Ze),Fe(Rt,{duration:N(Ko(Math.max(Ko(sn-zt),Ko(Pt-zt))*.185/ot/.05||0)),ease:y.ease||"power3",data:Ko(Rt-ae),onInterrupt:function(){return he.restart(!0)&&C&&$o(b,C)},onComplete:function(){b.update(),Q=ve(),r&&!U&&(Ee?Ee.resetTo("totalProgress",Pt,r._tTime/r._tDur):r.progress(Pt)),st=gt=r&&!U?r.totalProgress():b.progress,v&&v(b),B&&$o(b,B)}},ae,Ct*z,Rt-ae-Ct*z),mi&&$o(b,mi,Fe.tween)}}else b.isActive&&Q!==ae&&he.restart(!0)}).pause()),l&&(Hm[l]=b),f=b.trigger=ei(f||p!==!0&&p),ft=f&&f._gsap&&f._gsap.stRevert,ft&&(ft=ft(b)),p=p===!0?f:ei(p),Si(a)&&(a={targets:f,className:a}),p&&(m===!1||m===Xi||(m=!m&&p.parentNode&&p.parentNode.style&&ji(p.parentNode).display==="flex"?!1:tn),b.pin=p,te=Re.core.getCache(p),te.spacer?ne=te.pinState:(w&&(w=ei(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),te.spacerIsNative=!!w,w&&(te.spacerState=Vc(w))),te.spacer=Me=w||yt.createElement("div"),Me.classList.add("pin-spacer"),l&&Me.classList.add("pin-spacer-"+l),te.pinState=ne=Vc(p)),i.force3D!==!1&&Re.set(p,{force3D:!0}),b.spacer=Me=te.spacer,$e=ji(p),Xe=$e[m+E.os2],fe=Re.getProperty(p),Le=Re.quickSetter(p,E.a,an),Wd(p,Me,$e),re=Vc(p)),D){R=fo(D)?yv(D,Sv):Sv,G=Hc("scroller-start",l,O,E,R,0),le=Hc("scroller-end",l,O,E,R,0,G),pe=G["offset"+E.op.d2];var pt=ei(Os(O,"content")||O);be=this.markerStart=Hc("start",l,pt,E,R,pe,0,M),ye=this.markerEnd=Hc("end",l,pt,E,R,pe,0,M),M&&(He=Re.quickSetter([be,ye],E.a,an)),!k&&!(Rr.length&&Os(O,"fixedMarkers")===!0)&&(aR(L?_t:O),Re.set([G,le],{force3D:!0}),qe=Re.quickSetter(G,E.a,an),we=Re.quickSetter(le,E.a,an))}if(M){var Ie=M.vars.onUpdate,Ce=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){b.update(0,0,1),Ie&&Ie.apply(M,Ce||[])})}if(b.previous=function(){return rt[rt.indexOf(b)-1]},b.next=function(){return rt[rt.indexOf(b)+1]},b.revert=function(ae,We){if(!We)return b.kill(!0);var Ve=ae!==!1||!b.enabled,Ze=Ln;Ve!==b.isReverted&&(Ve&&(de=Math.max(ve(),b.scroll.rec||0),ge=b.progress,Ge=r&&r.progress()),be&&[be,ye,G,le].forEach(function(zt){return zt.style.display=Ve?"none":"block"}),Ve&&(Ln=b,b.update(Ve)),p&&(!A||!b.isActive)&&(Ve?hR(p,Me,ne):Wd(p,Me,ji(p),De)),Ve||b.update(Ve),Ln=Ze,b.isReverted=Ve)},b.refresh=function(ae,We,Ve,Ze){if(!((Ln||!b.enabled)&&!We)){if(p&&ae&&er){mn(n,"scrollEnd",Z1);return}!jn&&X&&X(b),Ln=b,Fe.tween&&!Ve&&(Fe.tween.kill(),Fe.tween=0),Ee&&Ee.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Ke){return Ke.vars.immediateRender&&Ke.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),b.isReverted||b.revert(!0,!0),b._subPinOffset=!1;var zt=ee(),ot=$(),Ct=M?M.duration():Tr(O,E),sn=z<=.01||!z,Pt=0,Rt=Ze||0,vt=fo(Ve)?Ve.end:i.end,mi=i.endTrigger||f,C=fo(Ve)?Ve.start:i.start||(i.start===0||!f?0:p?"0 0":"0 100%"),B=b.pinnedContainer=i.pinnedContainer&&ei(i.pinnedContainer,b),K=f&&Math.max(0,rt.indexOf(b))||0,q=K,j,me,Pe,je,Ne,ke,Ye,Qe,It,on,xt,kn,Mt;for(D&&fo(Ve)&&(kn=Re.getProperty(G,E.p),Mt=Re.getProperty(le,E.p));q-- >0;)ke=rt[q],ke.end||ke.refresh(0,1)||(Ln=b),Ye=ke.pin,Ye&&(Ye===f||Ye===p||Ye===B)&&!ke.isReverted&&(on||(on=[]),on.unshift(ke),ke.revert(!0,!0)),ke!==rt[q]&&(K--,q--);for(In(C)&&(C=C(b)),C=gv(C,"start",b),Te=Tv(C,f,zt,E,ve(),be,G,b,ot,I,k,Ct,M,b._startClamp&&"_startClamp")||(p?-.001:0),In(vt)&&(vt=vt(b)),Si(vt)&&!vt.indexOf("+=")&&(~vt.indexOf(" ")?vt=(Si(C)?C.split(" ")[0]:"")+vt:(Pt=Of(vt.substr(2),zt),vt=Si(C)?C:(M?Re.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,Te):Te)+Pt,mi=f)),vt=gv(vt,"end",b),_e=Math.max(Te,Tv(vt||(mi?"100% 0":Ct),mi,zt,E,ve()+Pt,ye,le,b,ot,I,k,Ct,M,b._endClamp&&"_endClamp"))||-.001,Pt=0,q=K;q--;)ke=rt[q]||{},Ye=ke.pin,Ye&&ke.start-ke._pinPush<=Te&&!M&&ke.end>0&&(j=ke.end-(b._startClamp?Math.max(0,ke.start):ke.start),(Ye===f&&ke.start-ke._pinPush<Te||Ye===B)&&isNaN(C)&&(Pt+=j*(1-ke.progress)),Ye===p&&(Rt+=j));if(Te+=Pt,_e+=Pt,b._startClamp&&(b._startClamp+=Pt),b._endClamp&&!jn&&(b._endClamp=_e||-.001,_e=Math.min(_e,Tr(O,E))),z=_e-Te||(Te-=.01)&&.001,sn&&(ge=Re.utils.clamp(0,1,Re.utils.normalize(Te,_e,de))),b._pinPush=Rt,be&&Pt&&(j={},j[E.a]="+="+Pt,B&&(j[E.p]="-="+ve()),Re.set([be,ye],j)),p&&!(Bm&&b.end>=Tr(O,E)))j=ji(p),je=E===un,Pe=ve(),Be=parseFloat(fe(E.a))+Rt,!Ct&&_e>1&&(xt=(L?yt.scrollingElement||Ei:O).style,xt={style:xt,value:xt["overflow"+E.a.toUpperCase()]},L&&ji(_t)["overflow"+E.a.toUpperCase()]!=="scroll"&&(xt.style["overflow"+E.a.toUpperCase()]="scroll")),Wd(p,Me,j),re=Vc(p),me=Br(p,!0),Qe=k&&js(O,je?$n:un)(),m?(De=[m+E.os2,z+Rt+an],De.t=Me,q=m===tn?Mh(p,E)+z+Rt:0,q&&(De.push(E.d,q+an),Me.style.flexBasis!=="auto"&&(Me.style.flexBasis=q+an)),Ja(De),B&&rt.forEach(function(Ke){Ke.pin===B&&Ke.vars.pinSpacing!==!1&&(Ke._subPinOffset=!0)}),k&&ve(de)):(q=Mh(p,E),q&&Me.style.flexBasis!=="auto"&&(Me.style.flexBasis=q+an)),k&&(Ne={top:me.top+(je?Pe-Te:Qe)+an,left:me.left+(je?Qe:Pe-Te)+an,boxSizing:"border-box",position:"fixed"},Ne[bo]=Ne["max"+gl]=Math.ceil(me.width)+an,Ne[Po]=Ne["max"+w_]=Math.ceil(me.height)+an,Ne[Xi]=Ne[Xi+Tu]=Ne[Xi+Eu]=Ne[Xi+Au]=Ne[Xi+wu]="0",Ne[tn]=j[tn],Ne[tn+Tu]=j[tn+Tu],Ne[tn+Eu]=j[tn+Eu],Ne[tn+Au]=j[tn+Au],Ne[tn+wu]=j[tn+wu],ie=pR(ne,Ne,A),jn&&ve(0)),r?(It=r._initted,Bd(1),r.render(r.duration(),!0,!0),Z=fe(E.a)-Be+z+Rt,Ue=Math.abs(z-Z)>1,k&&Ue&&ie.splice(ie.length-2,2),r.render(0,!0,!0),It||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Bd(0)):Z=z,xt&&(xt.value?xt.style["overflow"+E.a.toUpperCase()]=xt.value:xt.style.removeProperty("overflow-"+E.a));else if(f&&ve()&&!M)for(me=f.parentNode;me&&me!==_t;)me._pinOffset&&(Te-=me._pinOffset,_e-=me._pinOffset),me=me.parentNode;on&&on.forEach(function(Ke){return Ke.revert(!1,!0)}),b.start=Te,b.end=_e,ce=H=jn?de:ve(),!M&&!jn&&(ce<de&&ve(de),b.scroll.rec=0),b.revert(!1,!0),se=Dn(),he&&(Q=-1,he.restart(!0)),Ln=0,r&&U&&(r._initted||Ge)&&r.progress()!==Ge&&r.progress(Ge||0,!0).render(r.time(),!0,!0),(sn||ge!==b.progress||M||_||r&&!r._initted)&&(r&&!U&&(r._initted||ge||r.vars.immediateRender!==!1)&&r.totalProgress(M&&Te<-.001&&!ge?Re.utils.normalize(Te,_e,0):ge,!0),b.progress=sn||(ce-Te)/z===ge?0:ge),p&&m&&(Me._pinOffset=Math.round(b.progress*Z)),Ee&&Ee.invalidate(),isNaN(kn)||(kn-=Re.getProperty(G,E.p),Mt-=Re.getProperty(le,E.p),Gc(G,E,kn),Gc(be,E,kn-(Ze||0)),Gc(le,E,Mt),Gc(ye,E,Mt-(Ze||0))),sn&&!jn&&b.update(),c&&!jn&&!T&&(T=!0,c(b),T=!1)}},b.getVelocity=function(){return(ve()-H)/(Dn()-nu)*1e3||0},b.endAnimation=function(){Bl(b.callbackAnimation),r&&(Ee?Ee.progress(1):r.paused()?U||Bl(r,b.direction<0,1):Bl(r,r.reversed()))},b.labelToScroll=function(ae){return r&&r.labels&&(Te||b.refresh()||Te)+r.labels[ae]/r.duration()*z||0},b.getTrailing=function(ae){var We=rt.indexOf(b),Ve=b.direction>0?rt.slice(0,We).reverse():rt.slice(We+1);return(Si(ae)?Ve.filter(function(Ze){return Ze.vars.preventOverlaps===ae}):Ve).filter(function(Ze){return b.direction>0?Ze.end<=Te:Ze.start>=_e})},b.update=function(ae,We,Ve){if(!(M&&!Ve&&!ae)){var Ze=jn===!0?de:b.scroll(),zt=ae?0:(Ze-Te)/z,ot=zt<0?0:zt>1?1:zt||0,Ct=b.progress,sn,Pt,Rt,vt,mi,C,B,K;if(We&&(H=ce,ce=M?ve():Ze,y&&(gt=st,st=r&&!U?r.totalProgress():ot)),g&&p&&!Ln&&!Oc&&er&&(!ot&&Te<Ze+(Ze-H)/(Dn()-nu)*g?ot=1e-4:ot===1&&_e>Ze+(Ze-H)/(Dn()-nu)*g&&(ot=.9999)),ot!==Ct&&b.enabled){if(sn=b.isActive=!!ot&&ot<1,Pt=!!Ct&&Ct<1,C=sn!==Pt,mi=C||!!ot!=!!Ct,b.direction=ot>Ct?1:-1,b.progress=ot,mi&&!Ln&&(Rt=ot&&!Ct?0:ot===1?1:Ct===1?2:3,U&&(vt=!C&&W[Rt+1]!=="none"&&W[Rt+1]||W[Rt],K=r&&(vt==="complete"||vt==="reset"||vt in r))),S&&(C||K)&&(K||h||!r)&&(In(S)?S(b):b.getTrailing(S).forEach(function(Pe){return Pe.endAnimation()})),U||(Ee&&!Ln&&!Oc?(Ee._dp._time-Ee._start!==Ee._time&&Ee.render(Ee._dp._time-Ee._start),Ee.resetTo?Ee.resetTo("totalProgress",ot,r._tTime/r._tDur):(Ee.vars.totalProgress=ot,Ee.invalidate().restart())):r&&r.totalProgress(ot,!!(Ln&&(se||ae)))),p){if(ae&&m&&(Me.style[m+E.os2]=Xe),!k)Le(ru(Be+Z*ot));else if(mi){if(B=!ae&&ot>Ct&&_e+1>Ze&&Ze+1>=Tr(O,E),A)if(!ae&&(sn||B)){var q=Br(p,!0),j=Ze-Te;Av(p,_t,q.top+(E===un?j:0)+an,q.left+(E===un?0:j)+an)}else Av(p,Me);Ja(sn||B?ie:re),Ue&&ot<1&&sn||Le(Be+(ot===1&&!B?Z:0))}}y&&!Fe.tween&&!Ln&&!Oc&&he.restart(!0),a&&(C||x&&ot&&(ot<1||!Hd))&&ec(a.targets).forEach(function(Pe){return Pe.classList[sn||x?"add":"remove"](a.className)}),o&&!U&&!ae&&o(b),mi&&!Ln?(U&&(K&&(vt==="complete"?r.pause().totalProgress(1):vt==="reset"?r.restart(!0).pause():vt==="restart"?r.restart(!0):r[vt]()),o&&o(b)),(C||!Hd)&&(u&&C&&$o(b,u),V[Rt]&&$o(b,V[Rt]),x&&(ot===1?b.kill(!1,1):V[Rt]=0),C||(Rt=ot===1?1:3,V[Rt]&&$o(b,V[Rt]))),P&&!sn&&Math.abs(b.getVelocity())>(su(P)?P:2500)&&(Bl(b.callbackAnimation),Ee?Ee.progress(1):Bl(r,vt==="reverse"?1:!ot,1))):U&&o&&!Ln&&o(b)}if(we){var me=M?Ze/M.duration()*(M._caScrollDist||0):Ze;qe(me+(G._isFlipped?1:0)),we(me)}He&&He(-Ze/M.duration()*(M._caScrollDist||0))}},b.enable=function(ae,We){b.enabled||(b.enabled=!0,mn(O,"resize",ou),L||mn(O,"scroll",Zo),X&&mn(n,"refreshInit",X),ae!==!1&&(b.progress=ge=0,ce=H=Q=ve()),We!==!1&&b.refresh())},b.getTween=function(ae){return ae&&Fe?Fe.tween:Ee},b.setPositions=function(ae,We,Ve,Ze){if(M){var zt=M.scrollTrigger,ot=M.duration(),Ct=zt.end-zt.start;ae=zt.start+Ct*ae/ot,We=zt.start+Ct*We/ot}b.refresh(!1,!1,{start:_v(ae,Ve&&!!b._startClamp),end:_v(We,Ve&&!!b._endClamp)},Ze),b.update()},b.adjustPinSpacing=function(ae){if(De&&ae){var We=De.indexOf(E.d)+1;De[We]=parseFloat(De[We])+ae+an,De[1]=parseFloat(De[1])+ae+an,Ja(De)}},b.disable=function(ae,We){if(ae!==!1&&b.revert(!0,!0),b.enabled&&(b.enabled=b.isActive=!1,We||Ee&&Ee.pause(),de=0,te&&(te.uncache=1),X&&pn(n,"refreshInit",X),he&&(he.pause(),Fe.tween&&Fe.tween.kill()&&(Fe.tween=0)),!L)){for(var Ve=rt.length;Ve--;)if(rt[Ve].scroller===O&&rt[Ve]!==b)return;pn(O,"resize",ou),L||pn(O,"scroll",Zo)}},b.kill=function(ae,We){b.disable(ae,We),Ee&&!We&&Ee.kill(),l&&delete Hm[l];var Ve=rt.indexOf(b);Ve>=0&&rt.splice(Ve,1),Ve===Xn&&kf>0&&Xn--,Ve=0,rt.forEach(function(Ze){return Ze.scroller===b.scroller&&(Ve=1)}),Ve||jn||(b.scroll.rec=0),r&&(r.scrollTrigger=null,ae&&r.revert({kill:!1}),We||r.kill()),be&&[be,ye,G,le].forEach(function(Ze){return Ze.parentNode&&Ze.parentNode.removeChild(Ze)}),Cu===b&&(Cu=0),p&&(te&&(te.uncache=1),Ve=0,rt.forEach(function(Ze){return Ze.pin===p&&Ve++}),Ve||(te.spacer=0)),i.onKill&&i.onKill(b)},rt.push(b),b.enable(!1,!1),ft&&ft(b),r&&r.add&&!z){var ze=b.update;b.update=function(){b.update=ze,ut.cache++,Te||_e||b.refresh()},Re.delayedCall(.01,b.update),z=.01,Te=_e=0}else b.refresh();p&&fR()},n.register=function(i){return ya||(Re=i||X1(),W1()&&window.document&&n.enable(),ya=iu),ya},n.defaults=function(i){if(i)for(var r in i)Bc[r]=i[r];return Bc},n.disable=function(i,r){iu=0,rt.forEach(function(o){return o[r?"kill":"disable"](i)}),pn(at,"wheel",Zo),pn(yt,"scroll",Zo),clearInterval(Ic),pn(yt,"touchcancel",yr),pn(_t,"touchstart",yr),kc(pn,yt,"pointerdown,touchstart,mousedown",vv),kc(pn,yt,"pointerup,touchend,mouseup",xv),Sh.kill(),Fc(pn);for(var s=0;s<ut.length;s+=3)zc(pn,ut[s],ut[s+1]),zc(pn,ut[s],ut[s+2])},n.enable=function(){if(at=window,yt=document,Ei=yt.documentElement,_t=yt.body,Re){if(ec=Re.utils.toArray,Su=Re.utils.clamp,zm=Re.core.context||yr,Bd=Re.core.suppressOverwrites||yr,y_=at.history.scrollRestoration||"auto",Vm=at.pageYOffset||0,Re.core.globals("ScrollTrigger",n),_t){iu=1,Qa=document.createElement("div"),Qa.style.height="100vh",Qa.style.position="absolute",tE(),rR(),Jt.register(Re),n.isTouch=Jt.isTouch,hs=Jt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),km=Jt.isTouch===1,mn(at,"wheel",Zo),x_=[at,yt,Ei,_t],Re.matchMedia?(n.matchMedia=function(c){var h=Re.matchMedia(),f;for(f in c)h.add(f,c[f]);return h},Re.addEventListener("matchMediaInit",function(){J1(),A_()}),Re.addEventListener("matchMediaRevert",function(){return Q1()}),Re.addEventListener("matchMedia",function(){So(0,1),Vo("matchMedia")}),Re.matchMedia().add("(orientation: portrait)",function(){return Gd(),Gd})):console.warn("Requires GSAP 3.11.0 or later"),Gd(),mn(yt,"scroll",Zo);var i=_t.hasAttribute("style"),r=_t.style,s=r.borderTopStyle,o=Re.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Br(_t),un.m=Math.round(a.top+un.sc())||0,$n.m=Math.round(a.left+$n.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(_t.setAttribute("style",""),_t.removeAttribute("style")),Ic=setInterval(Mv,250),Re.delayedCall(.5,function(){return Oc=0}),mn(yt,"touchcancel",yr),mn(_t,"touchstart",yr),kc(mn,yt,"pointerdown,touchstart,mousedown",vv),kc(mn,yt,"pointerup,touchend,mouseup",xv),Fm=Re.utils.checkPrefix("transform"),zf.push(Fm),ya=Dn(),Sh=Re.delayedCall(.2,So).pause(),Sa=[yt,"visibilitychange",function(){var c=at.innerWidth,h=at.innerHeight;yt.hidden?(pv=c,mv=h):(pv!==c||mv!==h)&&ou()},yt,"DOMContentLoaded",So,at,"load",So,at,"resize",ou],Fc(mn),rt.forEach(function(c){return c.enable(0,1)}),l=0;l<ut.length;l+=3)zc(pn,ut[l],ut[l+1]),zc(pn,ut[l],ut[l+2])}else if(yt){var u=function c(){n.enable(),yt.removeEventListener("DOMContentLoaded",c)};yt.addEventListener("DOMContentLoaded",u)}}},n.config=function(i){"limitCallbacks"in i&&(Hd=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Ic)||(Ic=r)&&setInterval(Mv,r),"ignoreMobileResize"in i&&(km=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Fc(pn)||Fc(mn,i.autoRefreshEvents||"none"),H1=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=ei(i),o=ut.indexOf(s),a=Bo(s);~o&&ut.splice(o,a?6:2),r&&(a?Rr.unshift(at,r,_t,r,Ei,r):Rr.unshift(s,r))},n.clearMatchMedia=function(i){rt.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(Si(i)?ei(i):i).getBoundingClientRect(),a=o[s?bo:Po]*r||0;return s?o.right-a>0&&o.left+a<at.innerWidth:o.bottom-a>0&&o.top+a<at.innerHeight},n.positionInViewport=function(i,r,s){Si(i)&&(i=ei(i));var o=i.getBoundingClientRect(),a=o[s?bo:Po],l=r==null?a/2:r in Eh?Eh[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/at.innerWidth:(o.top+l)/at.innerHeight},n.killAll=function(i){if(rt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Ho.killAll||[];Ho={},r.forEach(function(s){return s()})}},n}();Je.version="3.15.0";Je.saveStyles=function(n){return n?ec(n).forEach(function(e){if(e&&e.style){var t=xi.indexOf(e);t>=0&&xi.splice(t,5),xi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Re.core.getCache(e),zm())}}):xi};Je.revert=function(n,e){return A_(!n,e)};Je.create=function(n,e){return new Je(n,e)};Je.refresh=function(n){return n?ou(!0):(ya||Je.register())&&So(!0)};Je.update=function(n){return++ut.cache&&qr(n===!0?2:0)};Je.clearScrollMemory=eE;Je.maxScroll=function(n,e){return Tr(n,e?$n:un)};Je.getScrollFunc=function(n,e){return js(ei(n),e?$n:un)};Je.getById=function(n){return Hm[n]};Je.getAll=function(){return rt.filter(function(n){return n.vars.id!=="ScrollSmoother"})};Je.isScrolling=function(){return!!er};Je.snapDirectional=T_;Je.addEventListener=function(n,e){var t=Ho[n]||(Ho[n]=[]);~t.indexOf(e)||t.push(e)};Je.removeEventListener=function(n,e){var t=Ho[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Je.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var h=[],f=[],p=Re.delayedCall(r,function(){c(h,f),h=[],f=[]}).pause();return function(m){h.length||p.restart(!0),h.push(m.trigger),f.push(m),s<=h.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&In(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return In(s)&&(s=s(),mn(Je,"refresh",function(){return s=e.batchMax()})),ec(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(Je.create(u))}),t};var Rv=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Xd=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Jt.isTouch?" pinch-zoom":""):"none",e===Ei&&n(_t,t)},Wc={auto:1,scroll:1},gR=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Re.core.getCache(s),a=Dn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==_t&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Wc[(l=ji(s)).overflowY]||Wc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Bo(s)&&(Wc[(l=ji(s)).overflowY]||Wc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},iE=function(e,t,i,r){return Jt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&gR,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&mn(yt,Jt.eventTypes[0],Pv,!1,!0)},onDisable:function(){return pn(yt,Jt.eventTypes[0],Pv,!0)}})},_R=/(input|label|select|textarea)/i,bv,Pv=function(e){var t=_R.test(e.target.tagName);(t||bv)&&(e._gsapAllow=!0,bv=t)},vR=function(e){fo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=ei(e.target)||Ei,c=Re.core.globals().ScrollSmoother,h=c&&c.get(),f=hs&&(e.content&&ei(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),p=js(u,un),m=js(u,$n),_=1,g=(Jt.isTouch&&at.visualViewport?at.visualViewport.scale*at.visualViewport.width:at.outerWidth)/at.innerWidth,d=0,v=In(r)?function(){return r(a)}:function(){return r||2.8},x,y,A=iE(u,e.type,!0,s),w=function(){return y=!1},M=yr,P=yr,S=function(){l=Tr(u,un),P=Su(hs?1:0,l),i&&(M=Su(0,Tr(u,$n))),x=Lo},E=function(){f._gsap.y=ru(parseFloat(f._gsap.y)+p.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},U=function(){if(y){requestAnimationFrame(w);var D=ru(a.deltaY/2),I=P(p.v-D);if(f&&I!==p.v+p.offset){p.offset=I-p.v;var b=ru((parseFloat(f&&f._gsap.y)||0)-p.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+b+", 0, 1)",f._gsap.y=b+"px",p.cacheID=ut.cache,qr()}return!0}p.offset&&E(),y=!0},O,J,L,k,V=function(){S(),O.isActive()&&O.vars.scrollY>l&&(p()>l?O.progress(1)&&p(l):O.resetTo("scrollY",l))};return f&&Re.set(f,{y:"+=0"}),e.ignoreCheck=function(W){return hs&&W.type==="touchmove"&&U()||_>1.05&&W.type!=="touchstart"||a.isGesturing||W.touches&&W.touches.length>1},e.onPress=function(){y=!1;var W=_;_=ru((at.visualViewport&&at.visualViewport.scale||1)/g),O.pause(),W!==_&&Xd(u,_>1.01?!0:i?!1:"x"),J=m(),L=p(),S(),x=Lo},e.onRelease=e.onGestureStart=function(W,D){if(p.offset&&E(),!D)k.restart(!0);else{ut.cache++;var I=v(),b,X;i&&(b=m(),X=b+I*.05*-W.velocityX/.227,I*=Rv(m,b,X,Tr(u,$n)),O.vars.scrollX=M(X)),b=p(),X=b+I*.05*-W.velocityY/.227,I*=Rv(p,b,X,Tr(u,un)),O.vars.scrollY=P(X),O.invalidate().duration(I).play(.01),(hs&&O.vars.scrollY>=l||b>=l-1)&&Re.to({},{onUpdate:V,duration:I})}o&&o(W)},e.onWheel=function(){O._ts&&O.pause(),Dn()-d>1e3&&(x=0,d=Dn())},e.onChange=function(W,D,I,b,X){if(Lo!==x&&S(),D&&i&&m(M(b[2]===D?J+(W.startX-W.x):m()+D-b[1])),I){p.offset&&E();var ee=X[2]===I,$=ee?L+W.startY-W.y:p()+I-X[1],Q=P($);ee&&$!==Q&&(L+=Q-$),p(Q)}(I||D)&&qr()},e.onEnable=function(){Xd(u,i?!1:"x"),Je.addEventListener("refresh",V),mn(at,"resize",V),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=m.smooth=!1),A.enable()},e.onDisable=function(){Xd(u,!0),pn(at,"resize",V),Je.removeEventListener("refresh",V),A.kill()},e.lockAxis=e.lockAxis!==!1,a=new Jt(e),a.iOS=hs,hs&&!p()&&p(1),hs&&Re.ticker.add(yr),k=a._dc,O=Re.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:nE(p,p(),function(){return O.pause()})},onUpdate:qr,onComplete:k.vars.onComplete}),a};Je.sort=function(n){if(In(n))return rt.sort(n);var e=at.pageYOffset||0;return Je.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+at.innerHeight}),rt.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Je.observe=function(n){return new Jt(n)};Je.normalizeScroll=function(n){if(typeof n>"u")return Gn;if(n===!0&&Gn)return Gn.enable();if(n===!1){Gn&&Gn.kill(),Gn=n;return}var e=n instanceof Jt?n:vR(n);return Gn&&Gn.target===e.target&&Gn.kill(),Bo(e.target)&&(Gn=e),e};Je.core={_getVelocityProp:Om,_inputObserver:iE,_scrollers:ut,_proxies:Rr,bridge:{ss:function(){er||Vo("scrollStart"),er=Dn()},ref:function(){return Ln}}};X1()&&Re.registerPlugin(Je);var Lv="1.3.27";function rE(n,e,t){return Math.max(n,Math.min(e,t))}function xR(n,e,t){return(1-t)*n+t*e}function yR(n,e,t,i){return xR(n,e,1-Math.exp(-t*i))}function SR(n,e){return(n%e+e)%e}var MR=class{constructor(){Oe(this,"isRunning",!1);Oe(this,"value",0);Oe(this,"from",0);Oe(this,"to",0);Oe(this,"currentTime",0);Oe(this,"lerp");Oe(this,"duration");Oe(this,"easing");Oe(this,"onUpdate")}advance(n){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=n;const i=rE(0,this.currentTime/this.duration,1);e=i>=1;const r=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=yR(this.value,this.to,this.lerp*60,n),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(n,e,{lerp:t,duration:i,easing:r,onStart:s,onUpdate:o}){this.from=this.value=n,this.to=e,this.lerp=t,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function ER(n,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=void 0,n.apply(this,i)},e)}}var wR=class{constructor(n,e,{autoResize:t=!0,debounce:i=250}={}){Oe(this,"width",0);Oe(this,"height",0);Oe(this,"scrollHeight",0);Oe(this,"scrollWidth",0);Oe(this,"debouncedResize");Oe(this,"wrapperResizeObserver");Oe(this,"contentResizeObserver");Oe(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Oe(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Oe(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=n,this.content=e,t&&(this.debouncedResize=ER(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var n,e;(n=this.wrapperResizeObserver)==null||n.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},sE=class{constructor(){Oe(this,"events",{})}emit(n,...e){var i;const t=this.events[n]||[];for(let r=0,s=t.length;r<s;r++)(i=t[r])==null||i.call(t,...e)}on(n,e){return this.events[n]?this.events[n].push(e):this.events[n]=[e],()=>{var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}}off(n,e){var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}destroy(){this.events={}}};const TR=100/6,rs={passive:!1};function Dv(n,e){return n===1?TR:n===2?e:1}var AR=class{constructor(n,e={wheelMultiplier:1,touchMultiplier:1}){Oe(this,"touchStart",{x:0,y:0});Oe(this,"lastDelta",{x:0,y:0});Oe(this,"window",{width:0,height:0});Oe(this,"emitter",new sE);Oe(this,"onTouchStart",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})});Oe(this,"onTouchMove",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n,i=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:n})});Oe(this,"onTouchEnd",n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})});Oe(this,"onWheel",n=>{let{deltaX:e,deltaY:t,deltaMode:i}=n;const r=Dv(i,this.window.width),s=Dv(i,this.window.height);e*=r,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:n})});Oe(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=n,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,rs),this.element.addEventListener("touchstart",this.onTouchStart,rs),this.element.addEventListener("touchmove",this.onTouchMove,rs),this.element.addEventListener("touchend",this.onTouchEnd,rs)}on(n,e){return this.emitter.on(n,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,rs),this.element.removeEventListener("touchstart",this.onTouchStart,rs),this.element.removeEventListener("touchmove",this.onTouchMove,rs),this.element.removeEventListener("touchend",this.onTouchEnd,rs)}};const Nv=n=>Math.min(1,1.001-2**(-10*n));var CR=class{constructor({wrapper:n=window,content:e=document.documentElement,eventsTarget:t=n,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:u=.1,infinite:c=!1,orientation:h="vertical",gestureOrientation:f=h==="horizontal"?"both":"vertical",touchMultiplier:p=1,wheelMultiplier:m=1,autoResize:_=!0,prevent:g,virtualScroll:d,overscroll:v=!0,autoRaf:x=!1,anchors:y=!1,autoToggle:A=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:M=!1,naiveDimensions:P=M,stopInertiaOnNavigate:S=!1,respectReducedMotion:E=!0}={}){Oe(this,"_isScrolling",!1);Oe(this,"_isStopped",!1);Oe(this,"_isLocked",!1);Oe(this,"_preventNextNativeScrollEvent",!1);Oe(this,"_resetVelocityTimeout",null);Oe(this,"_rafId",null);Oe(this,"_isDraggingSelection",!1);Oe(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Oe(this,"isTouching");Oe(this,"isIos");Oe(this,"time",0);Oe(this,"userData",{});Oe(this,"lastVelocity",0);Oe(this,"velocity",0);Oe(this,"direction",0);Oe(this,"options");Oe(this,"targetScroll");Oe(this,"animatedScroll");Oe(this,"animate",new MR);Oe(this,"emitter",new sE);Oe(this,"dimensions");Oe(this,"virtualScroll");Oe(this,"onScrollEnd",n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()});Oe(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Oe(this,"onTransitionEnd",n=>{var e;(e=n.propertyName)!=null&&e.includes("overflow")&&n.target===this.rootElement&&this.checkOverflow()});Oe(this,"onClick",n=>{const e=n.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),t=new URL(window.location.href);if(this.options.anchors){const i=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(i){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(i.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>t.host===i.host&&t.pathname!==i.pathname)){this.reset();return}});Oe(this,"onPointerDown",n=>{n.button===1&&this.reset()});Oe(this,"onVirtualScroll",n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:e,deltaY:t,event:i}=n;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");if(r&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const u=this.options.prevent,c=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(m=>{var _,g,d,v,x;return m instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(m))||((_=m.hasAttribute)==null?void 0:_.call(m,"data-lenis-prevent"))||c==="vertical"&&((g=m.hasAttribute)==null?void 0:g.call(m,"data-lenis-prevent-vertical"))||c==="horizontal"&&((d=m.hasAttribute)==null?void 0:d.call(m,"data-lenis-prevent-horizontal"))||r&&((v=m.hasAttribute)==null?void 0:v.call(m,"data-lenis-prevent-touch"))||s&&((x=m.hasAttribute)==null?void 0:x.call(m,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let h=t;this.options.gestureOrientation==="both"?h=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(h=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const f=r&&this.options.syncTouch,p=r&&i.type==="touchend";p&&(h=Math.sign(h)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+h,{programmatic:!1,...f?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Oe(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Oe(this,"raf",n=>{const e=n-(this.time||n);this.time=n,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Lv,window.lenis||(window.lenis={}),window.lenis.version=Lv,h==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!n||n===document.documentElement)&&(n=window),typeof a=="number"&&typeof l!="function"?l=Nv:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:n,content:e,eventsTarget:t,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:u,infinite:c,gestureOrientation:f,orientation:h,touchMultiplier:p,wheelMultiplier:m,autoResize:_,prevent:g,virtualScroll:d,overscroll:v,autoRaf:x,anchors:y,autoToggle:A,allowNestedScroll:w,naiveDimensions:P,stopInertiaOnNavigate:S,respectReducedMotion:E},this.dimensions=new wR(n,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new AR(t,{touchMultiplier:p,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(n,e){return this.emitter.on(n,e)}off(n,e){return this.emitter.off(n,e)}get overflow(){const n=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[n]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}isTouchOnSelectionHandle(n){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=n.targetTouches[0]??n.changedTouches[0];if(!t)return!1;const i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;const r=i[0],s=i[i.length-1],o=40,a=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=o,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(n,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:u,force:c=!1,userData:h}={}){if(this.prefersReducedMotion&&(r?t=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!c)return;let f=n,p=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let m=null;if(typeof f=="string"?(m=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),m||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof Element&&(m=f),m){if(this.options.wrapper!==window){const y=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?y.left:y.top}const _=m.getBoundingClientRect(),g=getComputedStyle(m),d=this.isHorizontal?Number.parseFloat(g.scrollMarginLeft):Number.parseFloat(g.scrollMarginTop),v=getComputedStyle(this.rootElement),x=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);f=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(d)?0:d)-(Number.isNaN(x)?0:x)}}if(typeof f=="number"){if(f+=p,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const m=f-this.animatedScroll;m>this.limit/2?f-=this.limit:m<-this.limit/2&&(f+=this.limit)}}else f=rE(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),u==null||u(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),u==null||u(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=Nv:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(m,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),r&&(this.targetScroll=m),_||this.emit(),_&&(this.reset(),this.emit(),u==null||u(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(n,{deltaX:e,deltaY:t}){const i=Date.now();n._lenis||(n._lenis={});const r=n._lenis;let s,o,a,l,u,c,h,f,p,m;if(i-(r.time??0)>2e3){r.time=Date.now();const w=window.getComputedStyle(n);if(r.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),u=["auto"].includes(w.overscrollBehaviorX),c=["auto"].includes(w.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;h=n.scrollWidth,f=n.scrollHeight,p=n.clientWidth,m=n.clientHeight,a=h>p,l=f>m,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=h,r.scrollHeight=f,r.clientWidth=p,r.clientHeight=m,r.hasOverscrollBehaviorX=u,r.hasOverscrollBehaviorY=c}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,h=r.scrollWidth,f=r.scrollHeight,p=r.clientWidth,m=r.clientHeight,u=r.hasOverscrollBehaviorX,c=r.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let g,d,v,x,y,A;if(_==="horizontal")g=Math.round(n.scrollLeft),d=h-p,v=e,x=s,y=a,A=u;else if(_==="vertical")g=Math.round(n.scrollTop),d=f-m,v=t,x=o,y=l,A=c;else return!1;return!A&&(g>=d||g<=0)?!0:(v>0?g<d:g>0)&&x&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?SR(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(n=>{this.rootElement.classList.add(n)})}cleanUpClassName(){for(const n of Array.from(this.rootElement.classList))(n==="lenis"||n.startsWith("lenis-"))&&this.rootElement.classList.remove(n)}};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const C_="160",UN={ROTATE:0,DOLLY:1,PAN:2},IN={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},RR=0,Uv=1,bR=2,oE=1,PR=2,Ir=3,Ys=0,Zn=1,fr=2,Fs=0,el=1,tl=2,Iv=3,Ov=4,LR=5,mo=100,DR=101,NR=102,Fv=103,kv=104,UR=200,IR=201,OR=202,FR=203,Wm=204,Xm=205,kR=206,zR=207,BR=208,HR=209,VR=210,GR=211,WR=212,XR=213,jR=214,YR=0,qR=1,$R=2,wh=3,KR=4,ZR=5,QR=6,JR=7,aE=0,eb=1,tb=2,ks=0,nb=1,ib=2,rb=3,sb=4,ob=5,ab=6,lE=300,_l=301,vl=302,jm=303,Ym=304,Qh=306,qm=1e3,hr=1001,$m=1002,Yn=1003,zv=1004,jd=1005,Yi=1006,lb=1007,nc=1008,zs=1009,ub=1010,cb=1011,R_=1012,uE=1013,ws=1014,Ts=1015,ic=1016,cE=1017,fE=1018,Do=1020,fb=1021,dr=1023,hb=1024,db=1025,No=1026,xl=1027,pb=1028,hE=1029,mb=1030,dE=1031,pE=1033,Yd=33776,qd=33777,$d=33778,Kd=33779,Bv=35840,Hv=35841,Vv=35842,Gv=35843,mE=36196,Wv=37492,Xv=37496,jv=37808,Yv=37809,qv=37810,$v=37811,Kv=37812,Zv=37813,Qv=37814,Jv=37815,ex=37816,tx=37817,nx=37818,ix=37819,rx=37820,sx=37821,Zd=36492,ox=36494,ax=36495,gb=36283,lx=36284,ux=36285,cx=36286,gE=3e3,Uo=3001,_b=3200,vb=3201,_E=0,xb=1,$i="",Sn="srgb",ts="srgb-linear",b_="display-p3",Jh="display-p3-linear",Th="linear",Dt="srgb",Ah="rec709",Ch="p3",Qo=7680,fx=519,yb=512,Sb=513,Mb=514,vE=515,Eb=516,wb=517,Tb=518,Ab=519,Km=35044,hx="300 es",Zm=1035,jr=2e3,Rh=2001;class Tl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hf=Math.PI/180,Qm=180/Math.PI;function Bs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function qn(n,e,t){return Math.max(e,Math.min(t,n))}function Cb(n,e){return(n%e+e)%e}function Qd(n,e,t){return(1-t)*n+t*e}function dx(n){return(n&n-1)===0&&n!==0}function Jm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Hr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ON={DEG2RAD:Hf};class tt{constructor(e=0,t=0){tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,i,r,s,o,a,l,u){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],f=i[2],p=i[5],m=i[8],_=r[0],g=r[3],d=r[6],v=r[1],x=r[4],y=r[7],A=r[2],w=r[5],M=r[8];return s[0]=o*_+a*v+l*A,s[3]=o*g+a*x+l*w,s[6]=o*d+a*y+l*M,s[1]=u*_+c*v+h*A,s[4]=u*g+c*x+h*w,s[7]=u*d+c*y+h*M,s[2]=f*_+p*v+m*A,s[5]=f*g+p*x+m*w,s[8]=f*d+p*y+m*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,f=a*l-c*s,p=u*s-o*l,m=t*h+i*f+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=h*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Jd.makeScale(e,t)),this}rotate(e){return this.premultiply(Jd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jd=new lt;function xE(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function bh(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Rb(){const n=bh("canvas");return n.style.display="block",n}const px={};function Ru(n){n in px||(px[n]=!0,console.warn(n))}const mx=new lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gx=new lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xc={[ts]:{transfer:Th,primaries:Ah,toReference:n=>n,fromReference:n=>n},[Sn]:{transfer:Dt,primaries:Ah,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Jh]:{transfer:Th,primaries:Ch,toReference:n=>n.applyMatrix3(gx),fromReference:n=>n.applyMatrix3(mx)},[b_]:{transfer:Dt,primaries:Ch,toReference:n=>n.convertSRGBToLinear().applyMatrix3(gx),fromReference:n=>n.applyMatrix3(mx).convertLinearToSRGB()}},bb=new Set([ts,Jh]),Et={enabled:!0,_workingColorSpace:ts,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!bb.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Xc[e].toReference,r=Xc[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Xc[n].primaries},getTransfer:function(n){return n===$i?Th:Xc[n].transfer}};function nl(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ep(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Jo;class yE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Jo===void 0&&(Jo=bh("canvas")),Jo.width=e.width,Jo.height=e.height;const i=Jo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Jo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bh("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=nl(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(nl(t[i]/255)*255):t[i]=nl(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pb=0;class SE{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pb++}),this.uuid=Bs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(tp(r[o].image)):s.push(tp(r[o]))}else s=tp(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function tp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lb=0;class hi extends Tl{constructor(e=hi.DEFAULT_IMAGE,t=hi.DEFAULT_MAPPING,i=hr,r=hr,s=Yi,o=nc,a=dr,l=zs,u=hi.DEFAULT_ANISOTROPY,c=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=Bs(),this.name="",this.source=new SE(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Ru("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Uo?Sn:$i),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qm:e.x=e.x-Math.floor(e.x);break;case hr:e.x=e.x<0?0:1;break;case $m:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qm:e.y=e.y-Math.floor(e.y);break;case hr:e.y=e.y<0?0:1;break;case $m:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ru("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Sn?Uo:gE}set encoding(e){Ru("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Uo?Sn:$i}}hi.DEFAULT_IMAGE=null;hi.DEFAULT_MAPPING=lE;hi.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,t=0,i=0,r=1){kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],f=l[1],p=l[5],m=l[9],_=l[2],g=l[6],d=l[10];if(Math.abs(c-f)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(p+1)/2,A=(d+1)/2,w=(c+f)/4,M=(h+_)/4,P=(m+g)/4;return x>y&&x>A?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=M/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=P/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=M/s,r=P/s),this.set(i,r,s,t),this}let v=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(h-_)/v,this.z=(f-c)/v,this.w=Math.acos((u+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Db extends Tl{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Ru("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Uo?Sn:$i),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new hi(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new SE(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Go extends Db{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ME extends hi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nb extends hi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cc{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],m=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=m,e[t+3]=_;return}if(h!==_||l!==f||u!==p||c!==m){let g=1-a;const d=l*f+u*p+c*m+h*_,v=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const A=Math.sqrt(x),w=Math.atan2(A,d*v);g=Math.sin(g*w)/A,a=Math.sin(a*w)/A}const y=a*v;if(l=l*g+f*y,u=u*g+p*y,c=c*g+m*y,h=h*g+_*y,g===1-a){const A=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=A,u*=A,c*=A,h*=A}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[o],f=s[o+1],p=s[o+2],m=s[o+3];return e[t]=a*m+c*h+l*p-u*f,e[t+1]=l*m+c*f+u*h-a*p,e[t+2]=u*m+c*p+a*f-l*h,e[t+3]=c*m-a*h-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*c*h+u*p*m,this._y=u*p*h-f*c*m,this._z=u*c*m+f*p*h,this._w=u*c*h-f*p*m;break;case"YXZ":this._x=f*c*h+u*p*m,this._y=u*p*h-f*c*m,this._z=u*c*m-f*p*h,this._w=u*c*h+f*p*m;break;case"ZXY":this._x=f*c*h-u*p*m,this._y=u*p*h+f*c*m,this._z=u*c*m+f*p*h,this._w=u*c*h-f*p*m;break;case"ZYX":this._x=f*c*h-u*p*m,this._y=u*p*h+f*c*m,this._z=u*c*m-f*p*h,this._w=u*c*h+f*p*m;break;case"YZX":this._x=f*c*h+u*p*m,this._y=u*p*h+f*c*m,this._z=u*c*m-f*p*h,this._w=u*c*h-f*p*m;break;case"XZY":this._x=f*c*h-u*p*m,this._y=u*p*h-f*c*m,this._z=u*c*m+f*p*h,this._w=u*c*h+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],h=t[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_x.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_x.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*u+o*h-a*c,this.y=i+l*c+a*u-s*h,this.z=r+l*h+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return np.copy(this).projectOnVector(e),this.sub(np)}reflect(e){return this.sub(np.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const np=new F,_x=new cc;class fc{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(rr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(rr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=rr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,rr):rr.fromBufferAttribute(s,o),rr.applyMatrix4(e.matrixWorld),this.expandByPoint(rr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jc.copy(i.boundingBox)),jc.applyMatrix4(e.matrixWorld),this.union(jc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,rr),rr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hl),Yc.subVectors(this.max,Hl),ea.subVectors(e.a,Hl),ta.subVectors(e.b,Hl),na.subVectors(e.c,Hl),ss.subVectors(ta,ea),os.subVectors(na,ta),io.subVectors(ea,na);let t=[0,-ss.z,ss.y,0,-os.z,os.y,0,-io.z,io.y,ss.z,0,-ss.x,os.z,0,-os.x,io.z,0,-io.x,-ss.y,ss.x,0,-os.y,os.x,0,-io.y,io.x,0];return!ip(t,ea,ta,na,Yc)||(t=[1,0,0,0,1,0,0,0,1],!ip(t,ea,ta,na,Yc))?!1:(qc.crossVectors(ss,os),t=[qc.x,qc.y,qc.z],ip(t,ea,ta,na,Yc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pr=[new F,new F,new F,new F,new F,new F,new F,new F],rr=new F,jc=new fc,ea=new F,ta=new F,na=new F,ss=new F,os=new F,io=new F,Hl=new F,Yc=new F,qc=new F,ro=new F;function ip(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ro.fromArray(n,s);const a=r.x*Math.abs(ro.x)+r.y*Math.abs(ro.y)+r.z*Math.abs(ro.z),l=e.dot(ro),u=t.dot(ro),c=i.dot(ro);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Ub=new fc,Vl=new F,rp=new F;class hc{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ub.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vl.subVectors(e,this.center);const t=Vl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Vl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vl.copy(e.center).add(rp)),this.expandByPoint(Vl.copy(e.center).sub(rp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Lr=new F,sp=new F,$c=new F,as=new F,op=new F,Kc=new F,ap=new F;class P_{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Lr.copy(this.origin).addScaledVector(this.direction,t),Lr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){sp.copy(e).add(t).multiplyScalar(.5),$c.copy(t).sub(e).normalize(),as.copy(this.origin).sub(sp);const s=e.distanceTo(t)*.5,o=-this.direction.dot($c),a=as.dot(this.direction),l=-as.dot($c),u=as.lengthSq(),c=Math.abs(1-o*o);let h,f,p,m;if(c>0)if(h=o*l-a,f=o*a-l,m=s*c,h>=0)if(f>=-m)if(f<=m){const _=1/c;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+u}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f<=-m?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u):f<=m?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(sp).addScaledVector($c,f),p}intersectSphere(e,t){Lr.subVectors(e.center,this.origin);const i=Lr.dot(this.direction),r=Lr.dot(Lr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Lr)!==null}intersectTriangle(e,t,i,r,s){op.subVectors(t,e),Kc.subVectors(i,e),ap.crossVectors(op,Kc);let o=this.direction.dot(ap),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;as.subVectors(this.origin,e);const l=a*this.direction.dot(Kc.crossVectors(as,Kc));if(l<0)return null;const u=a*this.direction.dot(op.cross(as));if(u<0||l+u>o)return null;const c=-a*as.dot(ap);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(e,t,i,r,s,o,a,l,u,c,h,f,p,m,_,g){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,h,f,p,m,_,g)}set(e,t,i,r,s,o,a,l,u,c,h,f,p,m,_,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=h,d[14]=f,d[3]=p,d[7]=m,d[11]=_,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ia.setFromMatrixColumn(e,0).length(),s=1/ia.setFromMatrixColumn(e,1).length(),o=1/ia.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*c,p=o*h,m=a*c,_=a*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=p+m*u,t[5]=f-_*u,t[9]=-a*l,t[2]=_-f*u,t[6]=m+p*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,p=l*h,m=u*c,_=u*h;t[0]=f+_*a,t[4]=m*a-p,t[8]=o*u,t[1]=o*h,t[5]=o*c,t[9]=-a,t[2]=p*a-m,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,p=l*h,m=u*c,_=u*h;t[0]=f-_*a,t[4]=-o*h,t[8]=m+p*a,t[1]=p+m*a,t[5]=o*c,t[9]=_-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,p=o*h,m=a*c,_=a*h;t[0]=l*c,t[4]=m*u-p,t[8]=f*u+_,t[1]=l*h,t[5]=_*u+f,t[9]=p*u-m,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,m=a*l,_=a*u;t[0]=l*c,t[4]=_-f*h,t[8]=m*h+p,t[1]=h,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*h+m,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,p=o*u,m=a*l,_=a*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=f*h+_,t[5]=o*c,t[9]=p*h-m,t[2]=m*h-p,t[6]=a*c,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ib,e,Ob)}lookAt(e,t,i){const r=this.elements;return gi.subVectors(e,t),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),ls.crossVectors(i,gi),ls.lengthSq()===0&&(Math.abs(i.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),ls.crossVectors(i,gi)),ls.normalize(),Zc.crossVectors(gi,ls),r[0]=ls.x,r[4]=Zc.x,r[8]=gi.x,r[1]=ls.y,r[5]=Zc.y,r[9]=gi.y,r[2]=ls.z,r[6]=Zc.z,r[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],f=i[9],p=i[13],m=i[2],_=i[6],g=i[10],d=i[14],v=i[3],x=i[7],y=i[11],A=i[15],w=r[0],M=r[4],P=r[8],S=r[12],E=r[1],U=r[5],O=r[9],J=r[13],L=r[2],k=r[6],V=r[10],W=r[14],D=r[3],I=r[7],b=r[11],X=r[15];return s[0]=o*w+a*E+l*L+u*D,s[4]=o*M+a*U+l*k+u*I,s[8]=o*P+a*O+l*V+u*b,s[12]=o*S+a*J+l*W+u*X,s[1]=c*w+h*E+f*L+p*D,s[5]=c*M+h*U+f*k+p*I,s[9]=c*P+h*O+f*V+p*b,s[13]=c*S+h*J+f*W+p*X,s[2]=m*w+_*E+g*L+d*D,s[6]=m*M+_*U+g*k+d*I,s[10]=m*P+_*O+g*V+d*b,s[14]=m*S+_*J+g*W+d*X,s[3]=v*w+x*E+y*L+A*D,s[7]=v*M+x*U+y*k+A*I,s[11]=v*P+x*O+y*V+A*b,s[15]=v*S+x*J+y*W+A*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],f=e[10],p=e[14],m=e[3],_=e[7],g=e[11],d=e[15];return m*(+s*l*h-r*u*h-s*a*f+i*u*f+r*a*p-i*l*p)+_*(+t*l*p-t*u*f+s*o*f-r*o*p+r*u*c-s*l*c)+g*(+t*u*h-t*a*p-s*o*h+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-t*l*h+t*a*f+r*o*h-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],f=e[10],p=e[11],m=e[12],_=e[13],g=e[14],d=e[15],v=h*g*u-_*f*u+_*l*p-a*g*p-h*l*d+a*f*d,x=m*f*u-c*g*u-m*l*p+o*g*p+c*l*d-o*f*d,y=c*_*u-m*h*u+m*a*p-o*_*p-c*a*d+o*h*d,A=m*h*l-c*_*l-m*a*f+o*_*f+c*a*g-o*h*g,w=t*v+i*x+r*y+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=v*M,e[1]=(_*f*s-h*g*s-_*r*p+i*g*p+h*r*d-i*f*d)*M,e[2]=(a*g*s-_*l*s+_*r*u-i*g*u-a*r*d+i*l*d)*M,e[3]=(h*l*s-a*f*s-h*r*u+i*f*u+a*r*p-i*l*p)*M,e[4]=x*M,e[5]=(c*g*s-m*f*s+m*r*p-t*g*p-c*r*d+t*f*d)*M,e[6]=(m*l*s-o*g*s-m*r*u+t*g*u+o*r*d-t*l*d)*M,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*p+t*l*p)*M,e[8]=y*M,e[9]=(m*h*s-c*_*s-m*i*p+t*_*p+c*i*d-t*h*d)*M,e[10]=(o*_*s-m*a*s+m*i*u-t*_*u-o*i*d+t*a*d)*M,e[11]=(c*a*s-o*h*s-c*i*u+t*h*u+o*i*p-t*a*p)*M,e[12]=A*M,e[13]=(c*_*r-m*h*r+m*i*f-t*_*f-c*i*g+t*h*g)*M,e[14]=(m*a*r-o*_*r-m*i*l+t*_*l+o*i*g-t*a*g)*M,e[15]=(o*h*r-c*a*r+c*i*l-t*h*l-o*i*f+t*a*f)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,h=a+a,f=s*u,p=s*c,m=s*h,_=o*c,g=o*h,d=a*h,v=l*u,x=l*c,y=l*h,A=i.x,w=i.y,M=i.z;return r[0]=(1-(_+d))*A,r[1]=(p+y)*A,r[2]=(m-x)*A,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(f+d))*w,r[6]=(g+v)*w,r[7]=0,r[8]=(m+x)*M,r[9]=(g-v)*M,r[10]=(1-(f+_))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ia.set(r[0],r[1],r[2]).length();const o=ia.set(r[4],r[5],r[6]).length(),a=ia.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],sr.copy(this);const u=1/s,c=1/o,h=1/a;return sr.elements[0]*=u,sr.elements[1]*=u,sr.elements[2]*=u,sr.elements[4]*=c,sr.elements[5]*=c,sr.elements[6]*=c,sr.elements[8]*=h,sr.elements[9]*=h,sr.elements[10]*=h,t.setFromRotationMatrix(sr),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=jr){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let p,m;if(a===jr)p=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===Rh)p=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=jr){const l=this.elements,u=1/(t-e),c=1/(i-r),h=1/(o-s),f=(t+e)*u,p=(i+r)*c;let m,_;if(a===jr)m=(o+s)*h,_=-2*h;else if(a===Rh)m=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ia=new F,sr=new Ut,Ib=new F(0,0,0),Ob=new F(1,1,1),ls=new F,Zc=new F,gi=new F,vx=new Ut,xx=new cc;class ed{constructor(e=0,t=0,i=0,r=ed.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(qn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-qn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(qn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(qn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vx,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xx.setFromEuler(this),this.setFromQuaternion(xx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ed.DEFAULT_ORDER="XYZ";class EE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fb=0;const yx=new F,ra=new cc,Dr=new Ut,Qc=new F,Gl=new F,kb=new F,zb=new cc,Sx=new F(1,0,0),Mx=new F(0,1,0),Ex=new F(0,0,1),Bb={type:"added"},Hb={type:"removed"};class vn extends Tl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=Bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new F,t=new ed,i=new cc,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ut},normalMatrix:{value:new lt}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new EE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ra.setFromAxisAngle(e,t),this.quaternion.multiply(ra),this}rotateOnWorldAxis(e,t){return ra.setFromAxisAngle(e,t),this.quaternion.premultiply(ra),this}rotateX(e){return this.rotateOnAxis(Sx,e)}rotateY(e){return this.rotateOnAxis(Mx,e)}rotateZ(e){return this.rotateOnAxis(Ex,e)}translateOnAxis(e,t){return yx.copy(e).applyQuaternion(this.quaternion),this.position.add(yx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sx,e)}translateY(e){return this.translateOnAxis(Mx,e)}translateZ(e){return this.translateOnAxis(Ex,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Qc.copy(e):Qc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Gl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dr.lookAt(Gl,Qc,this.up):Dr.lookAt(Qc,Gl,this.up),this.quaternion.setFromRotationMatrix(Dr),r&&(Dr.extractRotation(r.matrixWorld),ra.setFromRotationMatrix(Dr),this.quaternion.premultiply(ra.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Bb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hb)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gl,e,kb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gl,zb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vn.DEFAULT_UP=new F(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const or=new F,Nr=new F,lp=new F,Ur=new F,sa=new F,oa=new F,wx=new F,up=new F,cp=new F,fp=new F;let Jc=!1;class qi{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),or.subVectors(e,t),r.cross(or);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){or.subVectors(r,t),Nr.subVectors(i,t),lp.subVectors(e,t);const o=or.dot(or),a=or.dot(Nr),l=or.dot(lp),u=Nr.dot(Nr),c=Nr.dot(lp),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(u*l-a*c)*f,m=(o*c-a*l)*f;return s.set(1-p-m,m,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ur)===null?!1:Ur.x>=0&&Ur.y>=0&&Ur.x+Ur.y<=1}static getUV(e,t,i,r,s,o,a,l){return Jc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jc=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ur)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ur.x),l.addScaledVector(o,Ur.y),l.addScaledVector(a,Ur.z),l)}static isFrontFacing(e,t,i,r){return or.subVectors(i,t),Nr.subVectors(e,t),or.cross(Nr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return or.subVectors(this.c,this.b),Nr.subVectors(this.a,this.b),or.cross(Nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Jc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jc=!0),qi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return qi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return qi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;sa.subVectors(r,i),oa.subVectors(s,i),up.subVectors(e,i);const l=sa.dot(up),u=oa.dot(up);if(l<=0&&u<=0)return t.copy(i);cp.subVectors(e,r);const c=sa.dot(cp),h=oa.dot(cp);if(c>=0&&h<=c)return t.copy(r);const f=l*h-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(sa,o);fp.subVectors(e,s);const p=sa.dot(fp),m=oa.dot(fp);if(m>=0&&p<=m)return t.copy(s);const _=p*u-l*m;if(_<=0&&u>=0&&m<=0)return a=u/(u-m),t.copy(i).addScaledVector(oa,a);const g=c*m-p*h;if(g<=0&&h-c>=0&&p-m>=0)return wx.subVectors(s,r),a=(h-c)/(h-c+(p-m)),t.copy(r).addScaledVector(wx,a);const d=1/(g+_+f);return o=_*d,a=f*d,t.copy(i).addScaledVector(sa,o).addScaledVector(oa,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},ef={h:0,s:0,l:0};function hp(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Et.workingColorSpace){return this.r=e,this.g=t,this.b=i,Et.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Et.workingColorSpace){if(e=Cb(e,1),t=qn(t,0,1),i=qn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=hp(o,s,e+1/3),this.g=hp(o,s,e),this.b=hp(o,s,e-1/3)}return Et.toWorkingColorSpace(this,r),this}setStyle(e,t=Sn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Sn){const i=wE[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nl(e.r),this.g=nl(e.g),this.b=nl(e.b),this}copyLinearToSRGB(e){return this.r=ep(e.r),this.g=ep(e.g),this.b=ep(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return Et.fromWorkingColorSpace(Pn.copy(this),e),Math.round(qn(Pn.r*255,0,255))*65536+Math.round(qn(Pn.g*255,0,255))*256+Math.round(qn(Pn.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(Pn.copy(this),t);const i=Pn.r,r=Pn.g,s=Pn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=Sn){Et.fromWorkingColorSpace(Pn.copy(this),e);const t=Pn.r,i=Pn.g,r=Pn.b;return e!==Sn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(us),this.setHSL(us.h+e,us.s+t,us.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(us),e.getHSL(ef);const i=Qd(us.h,ef.h,t),r=Qd(us.s,ef.s,t),s=Qd(us.l,ef.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new et;et.NAMES=wE;let Vb=0;class Qs extends Tl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vb++}),this.uuid=Bs(),this.name="",this.type="Material",this.blending=el,this.side=Ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wm,this.blendDst=Xm,this.blendEquation=mo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=wh,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qo,this.stencilZFail=Qo,this.stencilZPass=Qo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==el&&(i.blending=this.blending),this.side!==Ys&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wm&&(i.blendSrc=this.blendSrc),this.blendDst!==Xm&&(i.blendDst=this.blendDst),this.blendEquation!==mo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wh&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fx&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dc extends Qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=aE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=new F,tf=new tt;class $t{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Km,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ts,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)tf.fromBufferAttribute(this,t),tf.applyMatrix3(e),this.setXY(t,tf.x,tf.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Hr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),r=Tt(r,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Km&&(e.usage=this.usage),e}}class TE extends $t{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class AE extends $t{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class di extends $t{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Gb=0;const Bi=new Ut,dp=new vn,aa=new F,_i=new fc,Wl=new fc,dn=new F;class Zt extends Tl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gb++}),this.uuid=Bs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xE(e)?AE:TE)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new lt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bi.makeRotationFromQuaternion(e),this.applyMatrix4(Bi),this}rotateX(e){return Bi.makeRotationX(e),this.applyMatrix4(Bi),this}rotateY(e){return Bi.makeRotationY(e),this.applyMatrix4(Bi),this}rotateZ(e){return Bi.makeRotationZ(e),this.applyMatrix4(Bi),this}translate(e,t,i){return Bi.makeTranslation(e,t,i),this.applyMatrix4(Bi),this}scale(e,t,i){return Bi.makeScale(e,t,i),this.applyMatrix4(Bi),this}lookAt(e){return dp.lookAt(e),dp.updateMatrix(),this.applyMatrix4(dp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(aa).negate(),this.translate(aa.x,aa.y,aa.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new di(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];_i.setFromBufferAttribute(s),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Wl.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(_i.min,Wl.min),_i.expandByPoint(dn),dn.addVectors(_i.max,Wl.max),_i.expandByPoint(dn)):(_i.expandByPoint(Wl.min),_i.expandByPoint(Wl.max))}_i.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)dn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(dn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)dn.fromBufferAttribute(a,u),l&&(aa.fromBufferAttribute(e,u),dn.add(aa)),r=Math.max(r,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let E=0;E<a;E++)u[E]=new F,c[E]=new F;const h=new F,f=new F,p=new F,m=new tt,_=new tt,g=new tt,d=new F,v=new F;function x(E,U,O){h.fromArray(r,E*3),f.fromArray(r,U*3),p.fromArray(r,O*3),m.fromArray(o,E*2),_.fromArray(o,U*2),g.fromArray(o,O*2),f.sub(h),p.sub(h),_.sub(m),g.sub(m);const J=1/(_.x*g.y-g.x*_.y);isFinite(J)&&(d.copy(f).multiplyScalar(g.y).addScaledVector(p,-_.y).multiplyScalar(J),v.copy(p).multiplyScalar(_.x).addScaledVector(f,-g.x).multiplyScalar(J),u[E].add(d),u[U].add(d),u[O].add(d),c[E].add(v),c[U].add(v),c[O].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let E=0,U=y.length;E<U;++E){const O=y[E],J=O.start,L=O.count;for(let k=J,V=J+L;k<V;k+=3)x(i[k+0],i[k+1],i[k+2])}const A=new F,w=new F,M=new F,P=new F;function S(E){M.fromArray(s,E*3),P.copy(M);const U=u[E];A.copy(U),A.sub(M.multiplyScalar(M.dot(U))).normalize(),w.crossVectors(P,U);const J=w.dot(c[E])<0?-1:1;l[E*4]=A.x,l[E*4+1]=A.y,l[E*4+2]=A.z,l[E*4+3]=J}for(let E=0,U=y.length;E<U;++E){const O=y[E],J=O.start,L=O.count;for(let k=J,V=J+L;k<V;k+=3)S(i[k+0]),S(i[k+1]),S(i[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,u=new F,c=new F,h=new F;if(e)for(let f=0,p=e.count;f<p;f+=3){const m=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,g),a.add(c),l.add(c),u.add(c),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,f=new u.constructor(l.length*c);let p=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let d=0;d<c;d++)f[m++]=u[p++]}return new $t(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const f=u[c],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,f=u.length;h<f;h++){const p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let f=0,p=h.length;f<p;f++)c.push(h[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tx=new Ut,so=new P_,nf=new hc,Ax=new F,la=new F,ua=new F,ca=new F,pp=new F,rf=new F,sf=new tt,of=new tt,af=new tt,Cx=new F,Rx=new F,bx=new F,lf=new F,uf=new F;class ri extends vn{constructor(e=new Zt,t=new dc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){rf.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(pp.fromBufferAttribute(h,e),o?rf.addScaledVector(pp,c):rf.addScaledVector(pp.sub(t),c))}t.add(rf)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nf.copy(i.boundingSphere),nf.applyMatrix4(s),so.copy(e.ray).recast(e.near),!(nf.containsPoint(so.origin)===!1&&(so.intersectSphere(nf,Ax)===null||so.origin.distanceToSquared(Ax)>(e.far-e.near)**2))&&(Tx.copy(s).invert(),so.copy(e.ray).applyMatrix4(Tx),!(i.boundingBox!==null&&so.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,so)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],d=o[g.materialIndex],v=Math.max(g.start,p.start),x=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=v,A=x;y<A;y+=3){const w=a.getX(y),M=a.getX(y+1),P=a.getX(y+2);r=cf(this,d,e,i,u,c,h,w,M,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let g=m,d=_;g<d;g+=3){const v=a.getX(g),x=a.getX(g+1),y=a.getX(g+2);r=cf(this,o,e,i,u,c,h,v,x,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],d=o[g.materialIndex],v=Math.max(g.start,p.start),x=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=v,A=x;y<A;y+=3){const w=y,M=y+1,P=y+2;r=cf(this,d,e,i,u,c,h,w,M,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let g=m,d=_;g<d;g+=3){const v=g,x=g+1,y=g+2;r=cf(this,o,e,i,u,c,h,v,x,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Wb(n,e,t,i,r,s,o,a){let l;if(e.side===Zn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ys,a),l===null)return null;uf.copy(a),uf.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(uf);return u<t.near||u>t.far?null:{distance:u,point:uf.clone(),object:n}}function cf(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,la),n.getVertexPosition(l,ua),n.getVertexPosition(u,ca);const c=Wb(n,e,t,i,la,ua,ca,lf);if(c){r&&(sf.fromBufferAttribute(r,a),of.fromBufferAttribute(r,l),af.fromBufferAttribute(r,u),c.uv=qi.getInterpolation(lf,la,ua,ca,sf,of,af,new tt)),s&&(sf.fromBufferAttribute(s,a),of.fromBufferAttribute(s,l),af.fromBufferAttribute(s,u),c.uv1=qi.getInterpolation(lf,la,ua,ca,sf,of,af,new tt),c.uv2=c.uv1),o&&(Cx.fromBufferAttribute(o,a),Rx.fromBufferAttribute(o,l),bx.fromBufferAttribute(o,u),c.normal=qi.getInterpolation(lf,la,ua,ca,Cx,Rx,bx,new F),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new F,materialIndex:0};qi.getNormal(la,ua,ca,h.normal),c.face=h}return c}class pc extends Zt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let f=0,p=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new di(u,3)),this.setAttribute("normal",new di(c,3)),this.setAttribute("uv",new di(h,2));function m(_,g,d,v,x,y,A,w,M,P,S){const E=y/M,U=A/P,O=y/2,J=A/2,L=w/2,k=M+1,V=P+1;let W=0,D=0;const I=new F;for(let b=0;b<V;b++){const X=b*U-J;for(let ee=0;ee<k;ee++){const $=ee*E-O;I[_]=$*v,I[g]=X*x,I[d]=L,u.push(I.x,I.y,I.z),I[_]=0,I[g]=0,I[d]=w>0?1:-1,c.push(I.x,I.y,I.z),h.push(ee/M),h.push(1-b/P),W+=1}}for(let b=0;b<P;b++)for(let X=0;X<M;X++){const ee=f+X+k*b,$=f+X+k*(b+1),Q=f+(X+1)+k*(b+1),se=f+(X+1)+k*b;l.push(ee,$,se),l.push($,Q,se),D+=6}a.addGroup(p,D,S),p+=D,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yl(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Vn(n){const e={};for(let t=0;t<n.length;t++){const i=yl(n[t]);for(const r in i)e[r]=i[r]}return e}function Xb(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function CE(n){return n.getRenderTarget()===null?n.outputColorSpace:Et.workingColorSpace}const jb={clone:yl,merge:Vn};var Yb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends Qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yb,this.fragmentShader=qb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yl(e.uniforms),this.uniformsGroups=Xb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class RE extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=jr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wi extends RE{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qm*2*Math.atan(Math.tan(Hf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hf*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fa=-90,ha=1;class $b extends vn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wi(fa,ha,e,t);r.layers=this.layers,this.add(r);const s=new wi(fa,ha,e,t);s.layers=this.layers,this.add(s);const o=new wi(fa,ha,e,t);o.layers=this.layers,this.add(o);const a=new wi(fa,ha,e,t);a.layers=this.layers,this.add(a);const l=new wi(fa,ha,e,t);l.layers=this.layers,this.add(l);const u=new wi(fa,ha,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===jr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rh)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(h,f,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class bE extends hi{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:_l,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kb extends Go{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Ru("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Uo?Sn:$i),this.texture=new bE(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new pc(5,5,5),s=new Pi({name:"CubemapFromEquirect",uniforms:yl(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zn,blending:Fs});s.uniforms.tEquirect.value=t;const o=new ri(r,s),a=t.minFilter;return t.minFilter===nc&&(t.minFilter=Yi),new $b(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const mp=new F,Zb=new F,Qb=new lt;class ho{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=mp.subVectors(i,t).cross(Zb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(mp),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Qb.getNormalMatrix(e),r=this.coplanarPoint(mp).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oo=new hc,ff=new F;class L_{constructor(e=new ho,t=new ho,i=new ho,r=new ho,s=new ho,o=new ho){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=jr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],h=r[6],f=r[7],p=r[8],m=r[9],_=r[10],g=r[11],d=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,f-u,g-p,y-d).normalize(),i[1].setComponents(l+s,f+u,g+p,y+d).normalize(),i[2].setComponents(l+o,f+c,g+m,y+v).normalize(),i[3].setComponents(l-o,f-c,g-m,y-v).normalize(),i[4].setComponents(l-a,f-h,g-_,y-x).normalize(),t===jr)i[5].setComponents(l+a,f+h,g+_,y+x).normalize();else if(t===Rh)i[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oo)}intersectsSprite(e){return oo.center.set(0,0,0),oo.radius=.7071067811865476,oo.applyMatrix4(e.matrixWorld),this.intersectsSphere(oo)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ff.x=r.normal.x>0?e.max.x:e.min.x,ff.y=r.normal.y>0?e.max.y:e.min.y,ff.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ff)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function PE(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Jb(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const h=u.array,f=u.usage,p=h.byteLength,m=n.createBuffer();n.bindBuffer(c,m),n.bufferData(c,h,f),u.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,h){const f=c.array,p=c._updateRange,m=c.updateRanges;if(n.bindBuffer(h,u),p.count===-1&&m.length===0&&n.bufferSubData(h,0,f),m.length!==0){for(let _=0,g=m.length;_<g;_++){const d=m[_];t?n.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):n.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}c.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);if(h===void 0)i.set(u,r(u,c));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,u,c),h.version=u.version}}return{get:o,remove:a,update:l}}class D_ extends Zt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=e/a,f=t/l,p=[],m=[],_=[],g=[];for(let d=0;d<c;d++){const v=d*f-o;for(let x=0;x<u;x++){const y=x*h-s;m.push(y,-v,0),_.push(0,0,1),g.push(x/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const x=v+u*d,y=v+u*(d+1),A=v+1+u*(d+1),w=v+1+u*d;p.push(x,y,w),p.push(y,A,w)}this.setIndex(p),this.setAttribute("position",new di(m,3)),this.setAttribute("normal",new di(_,3)),this.setAttribute("uv",new di(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new D_(e.width,e.height,e.widthSegments,e.heightSegments)}}var e2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t2=`#ifdef USE_ALPHAHASH
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
#endif`,n2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r2=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,s2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o2=`#ifdef USE_AOMAP
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
#endif`,a2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,l2=`#ifdef USE_BATCHING
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
#endif`,u2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,c2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,d2=`#ifdef USE_IRIDESCENCE
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
#endif`,p2=`#ifdef USE_BUMPMAP
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
#endif`,m2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,g2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,y2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,S2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,M2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,E2=`#define PI 3.141592653589793
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
} // validated`,w2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,T2=`vec3 transformedNormal = objectNormal;
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
#endif`,A2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P2="gl_FragColor = linearToOutputTexel( gl_FragColor );",L2=`
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
}`,D2=`#ifdef USE_ENVMAP
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
#endif`,N2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,U2=`#ifdef USE_ENVMAP
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
#endif`,I2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,O2=`#ifdef USE_ENVMAP
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
#endif`,F2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,z2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,B2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,H2=`#ifdef USE_GRADIENTMAP
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
}`,V2=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,G2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,W2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j2=`uniform bool receiveShadow;
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
#endif`,Y2=`#ifdef USE_ENVMAP
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
#endif`,q2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q2=`PhysicalMaterial material;
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
#endif`,J2=`struct PhysicalMaterial {
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
}`,eP=`
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
#endif`,tP=`#if defined( RE_IndirectDiffuse )
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
#endif`,nP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,oP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,aP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cP=`#if defined( USE_POINTS_UV )
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
#endif`,fP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dP=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pP=`#ifdef USE_MORPHNORMALS
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
#endif`,mP=`#ifdef USE_MORPHTARGETS
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
#endif`,gP=`#ifdef USE_MORPHTARGETS
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
#endif`,_P=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vP=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,MP=`#ifdef USE_NORMALMAP
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
#endif`,EP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RP=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kP=`float getShadowMask() {
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
}`,zP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BP=`#ifdef USE_SKINNING
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
#endif`,HP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VP=`#ifdef USE_SKINNING
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
#endif`,GP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jP=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,YP=`#ifdef USE_TRANSMISSION
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
#endif`,qP=`#ifdef USE_TRANSMISSION
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
#endif`,$P=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eL=`uniform sampler2D t2D;
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
}`,tL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nL=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sL=`#include <common>
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
}`,oL=`#if DEPTH_PACKING == 3200
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
}`,aL=`#define DISTANCE
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
}`,lL=`#define DISTANCE
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
}`,uL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fL=`uniform float scale;
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
}`,hL=`uniform vec3 diffuse;
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
}`,dL=`#include <common>
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
}`,pL=`uniform vec3 diffuse;
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
}`,mL=`#define LAMBERT
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
}`,gL=`#define LAMBERT
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
}`,_L=`#define MATCAP
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
}`,vL=`#define MATCAP
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
}`,xL=`#define NORMAL
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
}`,yL=`#define NORMAL
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
}`,SL=`#define PHONG
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
}`,ML=`#define PHONG
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
}`,EL=`#define STANDARD
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
}`,wL=`#define STANDARD
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
}`,TL=`#define TOON
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
}`,AL=`#define TOON
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
}`,CL=`uniform float size;
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
}`,RL=`uniform vec3 diffuse;
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
}`,bL=`#include <common>
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
}`,PL=`uniform vec3 color;
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
}`,LL=`uniform float rotation;
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
}`,DL=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:e2,alphahash_pars_fragment:t2,alphamap_fragment:n2,alphamap_pars_fragment:i2,alphatest_fragment:r2,alphatest_pars_fragment:s2,aomap_fragment:o2,aomap_pars_fragment:a2,batching_pars_vertex:l2,batching_vertex:u2,begin_vertex:c2,beginnormal_vertex:f2,bsdfs:h2,iridescence_fragment:d2,bumpmap_pars_fragment:p2,clipping_planes_fragment:m2,clipping_planes_pars_fragment:g2,clipping_planes_pars_vertex:_2,clipping_planes_vertex:v2,color_fragment:x2,color_pars_fragment:y2,color_pars_vertex:S2,color_vertex:M2,common:E2,cube_uv_reflection_fragment:w2,defaultnormal_vertex:T2,displacementmap_pars_vertex:A2,displacementmap_vertex:C2,emissivemap_fragment:R2,emissivemap_pars_fragment:b2,colorspace_fragment:P2,colorspace_pars_fragment:L2,envmap_fragment:D2,envmap_common_pars_fragment:N2,envmap_pars_fragment:U2,envmap_pars_vertex:I2,envmap_physical_pars_fragment:Y2,envmap_vertex:O2,fog_vertex:F2,fog_pars_vertex:k2,fog_fragment:z2,fog_pars_fragment:B2,gradientmap_pars_fragment:H2,lightmap_fragment:V2,lightmap_pars_fragment:G2,lights_lambert_fragment:W2,lights_lambert_pars_fragment:X2,lights_pars_begin:j2,lights_toon_fragment:q2,lights_toon_pars_fragment:$2,lights_phong_fragment:K2,lights_phong_pars_fragment:Z2,lights_physical_fragment:Q2,lights_physical_pars_fragment:J2,lights_fragment_begin:eP,lights_fragment_maps:tP,lights_fragment_end:nP,logdepthbuf_fragment:iP,logdepthbuf_pars_fragment:rP,logdepthbuf_pars_vertex:sP,logdepthbuf_vertex:oP,map_fragment:aP,map_pars_fragment:lP,map_particle_fragment:uP,map_particle_pars_fragment:cP,metalnessmap_fragment:fP,metalnessmap_pars_fragment:hP,morphcolor_vertex:dP,morphnormal_vertex:pP,morphtarget_pars_vertex:mP,morphtarget_vertex:gP,normal_fragment_begin:_P,normal_fragment_maps:vP,normal_pars_fragment:xP,normal_pars_vertex:yP,normal_vertex:SP,normalmap_pars_fragment:MP,clearcoat_normal_fragment_begin:EP,clearcoat_normal_fragment_maps:wP,clearcoat_pars_fragment:TP,iridescence_pars_fragment:AP,opaque_fragment:CP,packing:RP,premultiplied_alpha_fragment:bP,project_vertex:PP,dithering_fragment:LP,dithering_pars_fragment:DP,roughnessmap_fragment:NP,roughnessmap_pars_fragment:UP,shadowmap_pars_fragment:IP,shadowmap_pars_vertex:OP,shadowmap_vertex:FP,shadowmask_pars_fragment:kP,skinbase_vertex:zP,skinning_pars_vertex:BP,skinning_vertex:HP,skinnormal_vertex:VP,specularmap_fragment:GP,specularmap_pars_fragment:WP,tonemapping_fragment:XP,tonemapping_pars_fragment:jP,transmission_fragment:YP,transmission_pars_fragment:qP,uv_pars_fragment:$P,uv_pars_vertex:KP,uv_vertex:ZP,worldpos_vertex:QP,background_vert:JP,background_frag:eL,backgroundCube_vert:tL,backgroundCube_frag:nL,cube_vert:iL,cube_frag:rL,depth_vert:sL,depth_frag:oL,distanceRGBA_vert:aL,distanceRGBA_frag:lL,equirect_vert:uL,equirect_frag:cL,linedashed_vert:fL,linedashed_frag:hL,meshbasic_vert:dL,meshbasic_frag:pL,meshlambert_vert:mL,meshlambert_frag:gL,meshmatcap_vert:_L,meshmatcap_frag:vL,meshnormal_vert:xL,meshnormal_frag:yL,meshphong_vert:SL,meshphong_frag:ML,meshphysical_vert:EL,meshphysical_frag:wL,meshtoon_vert:TL,meshtoon_frag:AL,points_vert:CL,points_frag:RL,shadow_vert:bL,shadow_frag:PL,sprite_vert:LL,sprite_frag:DL},Se={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Sr={basic:{uniforms:Vn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Vn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new et(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Vn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Vn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Vn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new et(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Vn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Vn([Se.points,Se.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Vn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Vn([Se.common,Se.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Vn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Vn([Se.sprite,Se.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:Vn([Se.common,Se.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:Vn([Se.lights,Se.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Sr.physical={uniforms:Vn([Sr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const hf={r:0,b:0,g:0};function NL(n,e,t,i,r,s,o){const a=new et(0);let l=s===!0?0:1,u,c,h=null,f=0,p=null;function m(g,d){let v=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),v=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Qh)?(c===void 0&&(c=new ri(new pc(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:yl(Sr.backgroundCube.uniforms),vertexShader:Sr.backgroundCube.vertexShader,fragmentShader:Sr.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Et.getTransfer(x.colorSpace)!==Dt,(h!==x||f!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new ri(new D_(2,2),new Pi({name:"BackgroundMaterial",uniforms:yl(Sr.background.uniforms),vertexShader:Sr.background.vertexShader,fragmentShader:Sr.background.fragmentShader,side:Ys,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Et.getTransfer(x.colorSpace)!==Dt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=n.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function _(g,d){g.getRGB(hf,CE(n)),i.buffers.color.setClear(hf.r,hf.g,hf.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(g,d=1){a.set(g),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,_(a,l)},render:m}}function UL(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=g(null);let u=l,c=!1;function h(L,k,V,W,D){let I=!1;if(o){const b=_(W,V,k);u!==b&&(u=b,p(u.object)),I=d(L,W,V,D),I&&v(L,W,V,D)}else{const b=k.wireframe===!0;(u.geometry!==W.id||u.program!==V.id||u.wireframe!==b)&&(u.geometry=W.id,u.program=V.id,u.wireframe=b,I=!0)}D!==null&&t.update(D,n.ELEMENT_ARRAY_BUFFER),(I||c)&&(c=!1,P(L,k,V,W),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?n.bindVertexArray(L):s.bindVertexArrayOES(L)}function m(L){return i.isWebGL2?n.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,k,V){const W=V.wireframe===!0;let D=a[L.id];D===void 0&&(D={},a[L.id]=D);let I=D[k.id];I===void 0&&(I={},D[k.id]=I);let b=I[W];return b===void 0&&(b=g(f()),I[W]=b),b}function g(L){const k=[],V=[],W=[];for(let D=0;D<r;D++)k[D]=0,V[D]=0,W[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:V,attributeDivisors:W,object:L,attributes:{},index:null}}function d(L,k,V,W){const D=u.attributes,I=k.attributes;let b=0;const X=V.getAttributes();for(const ee in X)if(X[ee].location>=0){const Q=D[ee];let se=I[ee];if(se===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(se=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(se=L.instanceColor)),Q===void 0||Q.attribute!==se||se&&Q.data!==se.data)return!0;b++}return u.attributesNum!==b||u.index!==W}function v(L,k,V,W){const D={},I=k.attributes;let b=0;const X=V.getAttributes();for(const ee in X)if(X[ee].location>=0){let Q=I[ee];Q===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor));const se={};se.attribute=Q,Q&&Q.data&&(se.data=Q.data),D[ee]=se,b++}u.attributes=D,u.attributesNum=b,u.index=W}function x(){const L=u.newAttributes;for(let k=0,V=L.length;k<V;k++)L[k]=0}function y(L){A(L,0)}function A(L,k){const V=u.newAttributes,W=u.enabledAttributes,D=u.attributeDivisors;V[L]=1,W[L]===0&&(n.enableVertexAttribArray(L),W[L]=1),D[L]!==k&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,k),D[L]=k)}function w(){const L=u.newAttributes,k=u.enabledAttributes;for(let V=0,W=k.length;V<W;V++)k[V]!==L[V]&&(n.disableVertexAttribArray(V),k[V]=0)}function M(L,k,V,W,D,I,b){b===!0?n.vertexAttribIPointer(L,k,V,D,I):n.vertexAttribPointer(L,k,V,W,D,I)}function P(L,k,V,W){if(i.isWebGL2===!1&&(L.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const D=W.attributes,I=V.getAttributes(),b=k.defaultAttributeValues;for(const X in I){const ee=I[X];if(ee.location>=0){let $=D[X];if($===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&($=L.instanceColor)),$!==void 0){const Q=$.normalized,se=$.itemSize,ge=t.get($);if(ge===void 0)continue;const ve=ge.buffer,Fe=ge.type,te=ge.bytesPerElement,xe=i.isWebGL2===!0&&(Fe===n.INT||Fe===n.UNSIGNED_INT||$.gpuType===uE);if($.isInterleavedBufferAttribute){const ce=$.data,H=ce.stride,Te=$.offset;if(ce.isInstancedInterleavedBuffer){for(let _e=0;_e<ee.locationSize;_e++)A(ee.location+_e,ce.meshPerAttribute);L.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let _e=0;_e<ee.locationSize;_e++)y(ee.location+_e);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let _e=0;_e<ee.locationSize;_e++)M(ee.location+_e,se/ee.locationSize,Fe,Q,H*te,(Te+se/ee.locationSize*_e)*te,xe)}else{if($.isInstancedBufferAttribute){for(let ce=0;ce<ee.locationSize;ce++)A(ee.location+ce,$.meshPerAttribute);L.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ce=0;ce<ee.locationSize;ce++)y(ee.location+ce);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let ce=0;ce<ee.locationSize;ce++)M(ee.location+ce,se/ee.locationSize,Fe,Q,se*te,se/ee.locationSize*ce*te,xe)}}else if(b!==void 0){const Q=b[X];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(ee.location,Q);break;case 3:n.vertexAttrib3fv(ee.location,Q);break;case 4:n.vertexAttrib4fv(ee.location,Q);break;default:n.vertexAttrib1fv(ee.location,Q)}}}}w()}function S(){O();for(const L in a){const k=a[L];for(const V in k){const W=k[V];for(const D in W)m(W[D].object),delete W[D];delete k[V]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;const k=a[L.id];for(const V in k){const W=k[V];for(const D in W)m(W[D].object),delete W[D];delete k[V]}delete a[L.id]}function U(L){for(const k in a){const V=a[k];if(V[L.id]===void 0)continue;const W=V[L.id];for(const D in W)m(W[D].object),delete W[D];delete V[L.id]}}function O(){J(),c=!0,u!==l&&(u=l,p(u.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:O,resetDefaultState:J,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:y,disableUnusedAttributes:w}}function IL(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,h){n.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,f){if(f===0)return;let p,m;if(r)p=n,m="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,c,h,f),t.update(h,s,f)}function u(c,h,f){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f;m++)this.render(c[m],h[m]);else{p.multiDrawArraysWEBGL(s,c,0,h,0,f);let m=0;for(let _=0;_<f;_++)m+=h[_];t.update(m,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function OL(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,y=o||e.has("OES_texture_float"),A=x&&y,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:g,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:A,maxSamples:w}}function FL(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ho,a=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=c(h,f,0)},this.setState=function(h,f,p){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,d=n.get(h);if(!r||m===null||m.length===0||s&&!g)s?c(null):u();else{const v=s?0:i,x=v*4;let y=d.clippingState||null;l.value=y,y=c(m,f,x,p);for(let A=0;A!==x;++A)y[A]=t[A];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,f,p,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const d=p+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<d)&&(g=new Float32Array(d));for(let x=0,y=p;x!==_;++x,y+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function kL(n){let e=new WeakMap;function t(o,a){return a===jm?o.mapping=_l:a===Ym&&(o.mapping=vl),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===jm||a===Ym)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Kb(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class zL extends RE{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fa=4,Px=[.125,.215,.35,.446,.526,.582],go=20,gp=new zL,Lx=new et;let _p=null,vp=0,xp=0;const po=(1+Math.sqrt(5))/2,da=1/po,Dx=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,po,da),new F(0,po,-da),new F(da,0,po),new F(-da,0,po),new F(po,da,0),new F(-po,da,0)];class Nx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){_p=this._renderer.getRenderTarget(),vp=this._renderer.getActiveCubeFace(),xp=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ox(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ix(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_p,vp,xp),e.scissorTest=!1,df(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_l||e.mapping===vl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_p=this._renderer.getRenderTarget(),vp=this._renderer.getActiveCubeFace(),xp=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yi,minFilter:Yi,generateMipmaps:!1,type:ic,format:dr,colorSpace:ts,depthBuffer:!1},r=Ux(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ux(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BL(s)),this._blurMaterial=HL(s,e,t)}return r}_compileMaterial(e){const t=new ri(this._lodPlanes[0],e);this._renderer.compile(t,gp)}_sceneToCubeUV(e,t,i,r){const a=new wi(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(Lx),c.toneMapping=ks,c.autoClear=!1;const p=new dc({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),m=new ri(new pc,p);let _=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,_=!0):(p.color.copy(Lx),_=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const x=this._cubeSize;df(r,v*x,d>2?x:0,x,x),c.setRenderTarget(r),_&&c.render(m,a),c.render(e,a)}m.geometry.dispose(),m.material.dispose(),c.toneMapping=f,c.autoClear=h,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===_l||e.mapping===vl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ox()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ix());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ri(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;df(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,gp)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Dx[(r-1)%Dx.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new ri(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*go-1),_=s/m,g=isFinite(s)?1+Math.floor(c*_):go;g>go&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${go}`);const d=[];let v=0;for(let M=0;M<go;++M){const P=M/_,S=Math.exp(-P*P/2);d.push(S),M===0?v+=S:M<g&&(v+=2*S)}for(let M=0;M<d.length;M++)d[M]=d[M]/v;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=m,f.mipInt.value=x-i;const y=this._sizeLods[r],A=3*y*(r>x-Fa?r-x+Fa:0),w=4*(this._cubeSize-y);df(t,A,w,3*y,2*y),l.setRenderTarget(t),l.render(h,gp)}}function BL(n){const e=[],t=[],i=[];let r=n;const s=n-Fa+1+Px.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Fa?l=Px[o-n+Fa-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,f=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,m=6,_=3,g=2,d=1,v=new Float32Array(_*m*p),x=new Float32Array(g*m*p),y=new Float32Array(d*m*p);for(let w=0;w<p;w++){const M=w%3*2/3-1,P=w>2?0:-1,S=[M,P,0,M+2/3,P,0,M+2/3,P+1,0,M,P,0,M+2/3,P+1,0,M,P+1,0];v.set(S,_*m*w),x.set(f,g*m*w);const E=[w,w,w,w,w,w];y.set(E,d*m*w)}const A=new Zt;A.setAttribute("position",new $t(v,_)),A.setAttribute("uv",new $t(x,g)),A.setAttribute("faceIndex",new $t(y,d)),e.push(A),r>Fa&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ux(n,e,t){const i=new Go(n,e,t);return i.texture.mapping=Qh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function df(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function HL(n,e,t){const i=new Float32Array(go),r=new F(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:go,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:N_(),fragmentShader:`

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
		`,blending:Fs,depthTest:!1,depthWrite:!1})}function Ix(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:N_(),fragmentShader:`

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
		`,blending:Fs,depthTest:!1,depthWrite:!1})}function Ox(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:N_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fs,depthTest:!1,depthWrite:!1})}function N_(){return`

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
	`}function VL(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===jm||l===Ym,c=l===_l||l===vl;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Nx(n)),h=u?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||c&&h&&r(h)){t===null&&(t=new Nx(n));const f=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function GL(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function WL(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);for(const m in f.morphAttributes){const _=f.morphAttributes[m];for(let g=0,d=_.length;g<d;g++)e.remove(_[g])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const m in f)e.update(f[m],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const m in p){const _=p[m];for(let g=0,d=_.length;g<d;g++)e.update(_[g],n.ARRAY_BUFFER)}}function u(h){const f=[],p=h.index,m=h.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let x=0,y=v.length;x<y;x+=3){const A=v[x+0],w=v[x+1],M=v[x+2];f.push(A,w,w,M,M,A)}}else if(m!==void 0){const v=m.array;_=m.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const A=x+0,w=x+1,M=x+2;f.push(A,w,w,M,M,A)}}else return;const g=new(xE(f)?AE:TE)(f,1);g.version=_;const d=s.get(h);d&&e.remove(d),s.set(h,g)}function c(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function XL(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,m){n.drawElements(s,m,a,p*l),t.update(m,s,1)}function h(p,m,_){if(_===0)return;let g,d;if(r)g=n,d="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[d](s,m,a,p*l,_),t.update(m,s,_)}function f(p,m,_){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<_;d++)this.render(p[d]/l,m[d]);else{g.multiDrawElementsWEBGL(s,m,0,a,p,0,_);let d=0;for(let v=0;v<_;v++)d+=m[v];t.update(d,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=h,this.renderMultiDraw=f}function jL(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function YL(n,e){return n[0]-e[0]}function qL(n,e){return Math.abs(e[1])-Math.abs(n[1])}function $L(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new kt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,h){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=p!==void 0?p.length:0;let _=s.get(c);if(_===void 0||_.count!==m){let L=function(){O.dispose(),s.delete(c),c.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();const v=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,A=c.morphAttributes.position||[],w=c.morphAttributes.normal||[],M=c.morphAttributes.color||[];let P=0;v===!0&&(P=1),x===!0&&(P=2),y===!0&&(P=3);let S=c.attributes.position.count*P,E=1;S>e.maxTextureSize&&(E=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const U=new Float32Array(S*E*4*m),O=new ME(U,S,E,m);O.type=Ts,O.needsUpdate=!0;const J=P*4;for(let k=0;k<m;k++){const V=A[k],W=w[k],D=M[k],I=S*E*4*k;for(let b=0;b<V.count;b++){const X=b*J;v===!0&&(o.fromBufferAttribute(V,b),U[I+X+0]=o.x,U[I+X+1]=o.y,U[I+X+2]=o.z,U[I+X+3]=0),x===!0&&(o.fromBufferAttribute(W,b),U[I+X+4]=o.x,U[I+X+5]=o.y,U[I+X+6]=o.z,U[I+X+7]=0),y===!0&&(o.fromBufferAttribute(D,b),U[I+X+8]=o.x,U[I+X+9]=o.y,U[I+X+10]=o.z,U[I+X+11]=D.itemSize===4?o.w:1)}}_={count:m,texture:O,size:new tt(S,E)},s.set(c,_),c.addEventListener("dispose",L)}let g=0;for(let v=0;v<f.length;v++)g+=f[v];const d=c.morphTargetsRelative?1:1-g;h.getUniforms().setValue(n,"morphTargetBaseInfluence",d),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const p=f===void 0?0:f.length;let m=i[c.id];if(m===void 0||m.length!==p){m=[];for(let x=0;x<p;x++)m[x]=[x,0];i[c.id]=m}for(let x=0;x<p;x++){const y=m[x];y[0]=x,y[1]=f[x]}m.sort(qL);for(let x=0;x<8;x++)x<p&&m[x][1]?(a[x][0]=m[x][0],a[x][1]=m[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(YL);const _=c.morphAttributes.position,g=c.morphAttributes.normal;let d=0;for(let x=0;x<8;x++){const y=a[x],A=y[0],w=y[1];A!==Number.MAX_SAFE_INTEGER&&w?(_&&c.getAttribute("morphTarget"+x)!==_[A]&&c.setAttribute("morphTarget"+x,_[A]),g&&c.getAttribute("morphNormal"+x)!==g[A]&&c.setAttribute("morphNormal"+x,g[A]),r[x]=w,d+=w):(_&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),g&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),r[x]=0)}const v=c.morphTargetsRelative?1:1-d;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function KL(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class LE extends hi{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:No,c!==No&&c!==xl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===No&&(i=ws),i===void 0&&c===xl&&(i=Do),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Yn,this.minFilter=l!==void 0?l:Yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const DE=new hi,NE=new LE(1,1);NE.compareFunction=vE;const UE=new ME,IE=new Nb,OE=new bE,Fx=[],kx=[],zx=new Float32Array(16),Bx=new Float32Array(9),Hx=new Float32Array(4);function Al(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Fx[r];if(s===void 0&&(s=new Float32Array(r),Fx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function fn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function hn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function td(n,e){let t=kx[e];t===void 0&&(t=new Int32Array(e),kx[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ZL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function QL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2fv(this.addr,e),hn(t,e)}}function JL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;n.uniform3fv(this.addr,e),hn(t,e)}}function e3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4fv(this.addr,e),hn(t,e)}}function t3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,i))return;Hx.set(i),n.uniformMatrix2fv(this.addr,!1,Hx),hn(t,i)}}function n3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,i))return;Bx.set(i),n.uniformMatrix3fv(this.addr,!1,Bx),hn(t,i)}}function i3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,i))return;zx.set(i),n.uniformMatrix4fv(this.addr,!1,zx),hn(t,i)}}function r3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function s3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2iv(this.addr,e),hn(t,e)}}function o3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3iv(this.addr,e),hn(t,e)}}function a3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4iv(this.addr,e),hn(t,e)}}function l3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function u3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2uiv(this.addr,e),hn(t,e)}}function c3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3uiv(this.addr,e),hn(t,e)}}function f3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4uiv(this.addr,e),hn(t,e)}}function h3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?NE:DE;t.setTexture2D(e||s,r)}function d3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||IE,r)}function p3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||OE,r)}function m3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||UE,r)}function g3(n){switch(n){case 5126:return ZL;case 35664:return QL;case 35665:return JL;case 35666:return e3;case 35674:return t3;case 35675:return n3;case 35676:return i3;case 5124:case 35670:return r3;case 35667:case 35671:return s3;case 35668:case 35672:return o3;case 35669:case 35673:return a3;case 5125:return l3;case 36294:return u3;case 36295:return c3;case 36296:return f3;case 35678:case 36198:case 36298:case 36306:case 35682:return h3;case 35679:case 36299:case 36307:return d3;case 35680:case 36300:case 36308:case 36293:return p3;case 36289:case 36303:case 36311:case 36292:return m3}}function _3(n,e){n.uniform1fv(this.addr,e)}function v3(n,e){const t=Al(e,this.size,2);n.uniform2fv(this.addr,t)}function x3(n,e){const t=Al(e,this.size,3);n.uniform3fv(this.addr,t)}function y3(n,e){const t=Al(e,this.size,4);n.uniform4fv(this.addr,t)}function S3(n,e){const t=Al(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function M3(n,e){const t=Al(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function E3(n,e){const t=Al(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function w3(n,e){n.uniform1iv(this.addr,e)}function T3(n,e){n.uniform2iv(this.addr,e)}function A3(n,e){n.uniform3iv(this.addr,e)}function C3(n,e){n.uniform4iv(this.addr,e)}function R3(n,e){n.uniform1uiv(this.addr,e)}function b3(n,e){n.uniform2uiv(this.addr,e)}function P3(n,e){n.uniform3uiv(this.addr,e)}function L3(n,e){n.uniform4uiv(this.addr,e)}function D3(n,e,t){const i=this.cache,r=e.length,s=td(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||DE,s[o])}function N3(n,e,t){const i=this.cache,r=e.length,s=td(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||IE,s[o])}function U3(n,e,t){const i=this.cache,r=e.length,s=td(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||OE,s[o])}function I3(n,e,t){const i=this.cache,r=e.length,s=td(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||UE,s[o])}function O3(n){switch(n){case 5126:return _3;case 35664:return v3;case 35665:return x3;case 35666:return y3;case 35674:return S3;case 35675:return M3;case 35676:return E3;case 5124:case 35670:return w3;case 35667:case 35671:return T3;case 35668:case 35672:return A3;case 35669:case 35673:return C3;case 5125:return R3;case 36294:return b3;case 36295:return P3;case 36296:return L3;case 35678:case 36198:case 36298:case 36306:case 35682:return D3;case 35679:case 36299:case 36307:return N3;case 35680:case 36300:case 36308:case 36293:return U3;case 36289:case 36303:case 36311:case 36292:return I3}}class F3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=g3(t.type)}}class k3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=O3(t.type)}}class z3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const yp=/(\w+)(\])?(\[|\.)?/g;function Vx(n,e){n.seq.push(e),n.map[e.id]=e}function B3(n,e,t){const i=n.name,r=i.length;for(yp.lastIndex=0;;){const s=yp.exec(i),o=yp.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Vx(t,u===void 0?new F3(a,n,e):new k3(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new z3(a),Vx(t,h)),t=h}}}class Vf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);B3(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Gx(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const H3=37297;let V3=0;function G3(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function W3(n){const e=Et.getPrimaries(Et.workingColorSpace),t=Et.getPrimaries(n);let i;switch(e===t?i="":e===Ch&&t===Ah?i="LinearDisplayP3ToLinearSRGB":e===Ah&&t===Ch&&(i="LinearSRGBToLinearDisplayP3"),n){case ts:case Jh:return[i,"LinearTransferOETF"];case Sn:case b_:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Wx(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+G3(n.getShaderSource(e),o)}else return r}function X3(n,e){const t=W3(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function j3(n,e){let t;switch(e){case nb:t="Linear";break;case ib:t="Reinhard";break;case rb:t="OptimizedCineon";break;case sb:t="ACESFilmic";break;case ab:t="AgX";break;case ob:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Y3(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ka).join(`
`)}function q3(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ka).join(`
`)}function $3(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function K3(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ka(n){return n!==""}function Xx(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Z3=/^[ \t]*#include +<([\w\d./]+)>/gm;function eg(n){return n.replace(Z3,J3)}const Q3=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function J3(n,e){let t=it[e];if(t===void 0){const i=Q3.get(e);if(i!==void 0)t=it[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return eg(t)}const eD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yx(n){return n.replace(eD,tD)}function tD(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qx(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nD(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===oE?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===PR?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ir&&(e="SHADOWMAP_TYPE_VSM"),e}function iD(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _l:case vl:e="ENVMAP_TYPE_CUBE";break;case Qh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rD(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case vl:e="ENVMAP_MODE_REFRACTION";break}return e}function sD(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case aE:e="ENVMAP_BLENDING_MULTIPLY";break;case eb:e="ENVMAP_BLENDING_MIX";break;case tb:e="ENVMAP_BLENDING_ADD";break}return e}function oD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function aD(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=nD(t),u=iD(t),c=rD(t),h=sD(t),f=oD(t),p=t.isWebGL2?"":Y3(t),m=q3(t),_=$3(s),g=r.createProgram();let d,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ka).join(`
`),d.length>0&&(d+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ka).join(`
`),v.length>0&&(v+=`
`)):(d=[qx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ka).join(`
`),v=[p,qx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ks?"#define TONE_MAPPING":"",t.toneMapping!==ks?it.tonemapping_pars_fragment:"",t.toneMapping!==ks?j3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,X3("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ka).join(`
`)),o=eg(o),o=Xx(o,t),o=jx(o,t),a=eg(a),a=Xx(a,t),a=jx(a,t),o=Yx(o),a=Yx(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===hx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=x+d+o,A=x+v+a,w=Gx(r,r.VERTEX_SHADER,y),M=Gx(r,r.FRAGMENT_SHADER,A);r.attachShader(g,w),r.attachShader(g,M),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function P(O){if(n.debug.checkShaderErrors){const J=r.getProgramInfoLog(g).trim(),L=r.getShaderInfoLog(w).trim(),k=r.getShaderInfoLog(M).trim();let V=!0,W=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,w,M);else{const D=Wx(r,w,"vertex"),I=Wx(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+D+`
`+I)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(L===""||k==="")&&(W=!1);W&&(O.diagnostics={runnable:V,programLog:J,vertexShader:{log:L,prefix:d},fragmentShader:{log:k,prefix:v}})}r.deleteShader(w),r.deleteShader(M),S=new Vf(r,g),E=K3(r,g)}let S;this.getUniforms=function(){return S===void 0&&P(this),S};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(g,H3)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=V3++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=M,this}let lD=0;class uD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new cD(e),t.set(e,i)),i}}class cD{constructor(e){this.id=lD++,this.code=e,this.usedTimes=0}}function fD(n,e,t,i,r,s,o){const a=new EE,l=new uD,u=[],c=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function g(S,E,U,O,J){const L=O.fog,k=J.geometry,V=S.isMeshStandardMaterial?O.environment:null,W=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),D=W&&W.mapping===Qh?W.image.height:null,I=m[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const b=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,X=b!==void 0?b.length:0;let ee=0;k.morphAttributes.position!==void 0&&(ee=1),k.morphAttributes.normal!==void 0&&(ee=2),k.morphAttributes.color!==void 0&&(ee=3);let $,Q,se,ge;if(I){const Ce=Sr[I];$=Ce.vertexShader,Q=Ce.fragmentShader}else $=S.vertexShader,Q=S.fragmentShader,l.update(S),se=l.getVertexShaderID(S),ge=l.getFragmentShaderID(S);const ve=n.getRenderTarget(),Fe=J.isInstancedMesh===!0,te=J.isBatchedMesh===!0,xe=!!S.map,ce=!!S.matcap,H=!!W,Te=!!S.aoMap,_e=!!S.lightMap,be=!!S.bumpMap,ye=!!S.normalMap,G=!!S.displacementMap,le=!!S.emissiveMap,R=!!S.metalnessMap,T=!!S.roughnessMap,z=S.anisotropy>0,ne=S.clearcoat>0,ie=S.iridescence>0,re=S.sheen>0,Me=S.transmission>0,pe=z&&!!S.anisotropyMap,fe=ne&&!!S.clearcoatMap,Le=ne&&!!S.clearcoatNormalMap,Be=ne&&!!S.clearcoatRoughnessMap,Z=ie&&!!S.iridescenceMap,Xe=ie&&!!S.iridescenceThicknessMap,De=re&&!!S.sheenColorMap,qe=re&&!!S.sheenRoughnessMap,Ue=!!S.specularMap,we=!!S.specularColorMap,$e=!!S.specularIntensityMap,st=Me&&!!S.transmissionMap,gt=Me&&!!S.thicknessMap,Ee=!!S.gradientMap,ue=!!S.alphaMap,N=S.alphaTest>0,he=!!S.alphaHash,de=!!S.extensions,Ge=!!k.attributes.uv1,He=!!k.attributes.uv2,ft=!!k.attributes.uv3;let pt=ks;return S.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(pt=n.toneMapping),{isWebGL2:c,shaderID:I,shaderType:S.type,shaderName:S.name,vertexShader:$,fragmentShader:Q,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:ge,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:te,instancing:Fe,instancingColor:Fe&&J.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:ts,map:xe,matcap:ce,envMap:H,envMapMode:H&&W.mapping,envMapCubeUVHeight:D,aoMap:Te,lightMap:_e,bumpMap:be,normalMap:ye,displacementMap:f&&G,emissiveMap:le,normalMapObjectSpace:ye&&S.normalMapType===xb,normalMapTangentSpace:ye&&S.normalMapType===_E,metalnessMap:R,roughnessMap:T,anisotropy:z,anisotropyMap:pe,clearcoat:ne,clearcoatMap:fe,clearcoatNormalMap:Le,clearcoatRoughnessMap:Be,iridescence:ie,iridescenceMap:Z,iridescenceThicknessMap:Xe,sheen:re,sheenColorMap:De,sheenRoughnessMap:qe,specularMap:Ue,specularColorMap:we,specularIntensityMap:$e,transmission:Me,transmissionMap:st,thicknessMap:gt,gradientMap:Ee,opaque:S.transparent===!1&&S.blending===el,alphaMap:ue,alphaTest:N,alphaHash:he,combine:S.combine,mapUv:xe&&_(S.map.channel),aoMapUv:Te&&_(S.aoMap.channel),lightMapUv:_e&&_(S.lightMap.channel),bumpMapUv:be&&_(S.bumpMap.channel),normalMapUv:ye&&_(S.normalMap.channel),displacementMapUv:G&&_(S.displacementMap.channel),emissiveMapUv:le&&_(S.emissiveMap.channel),metalnessMapUv:R&&_(S.metalnessMap.channel),roughnessMapUv:T&&_(S.roughnessMap.channel),anisotropyMapUv:pe&&_(S.anisotropyMap.channel),clearcoatMapUv:fe&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Le&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:De&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:qe&&_(S.sheenRoughnessMap.channel),specularMapUv:Ue&&_(S.specularMap.channel),specularColorMapUv:we&&_(S.specularColorMap.channel),specularIntensityMapUv:$e&&_(S.specularIntensityMap.channel),transmissionMapUv:st&&_(S.transmissionMap.channel),thicknessMapUv:gt&&_(S.thicknessMap.channel),alphaMapUv:ue&&_(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ye||z),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:Ge,vertexUv2s:He,vertexUv3s:ft,pointsUvs:J.isPoints===!0&&!!k.attributes.uv&&(xe||ue),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:J.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:ee,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:pt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:xe&&S.map.isVideoTexture===!0&&Et.getTransfer(S.map.colorSpace)===Dt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===fr,flipSided:S.side===Zn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:de&&S.extensions.derivatives===!0,extensionFragDepth:de&&S.extensions.fragDepth===!0,extensionDrawBuffers:de&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const U in S.defines)E.push(U),E.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(v(E,S),x(E,S),E.push(n.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function v(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function x(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const E=m[S.type];let U;if(E){const O=Sr[E];U=jb.clone(O.uniforms)}else U=S.uniforms;return U}function A(S,E){let U;for(let O=0,J=u.length;O<J;O++){const L=u[O];if(L.cacheKey===E){U=L,++U.usedTimes;break}}return U===void 0&&(U=new aD(n,E,S,s),u.push(U)),U}function w(S){if(--S.usedTimes===0){const E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function M(S){l.remove(S)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:y,acquireProgram:A,releaseProgram:w,releaseShaderCache:M,programs:u,dispose:P}}function hD(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function dD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $x(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Kx(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,p,m,_,g){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=m,d.renderOrder=h.renderOrder,d.z=_,d.group=g),e++,d}function a(h,f,p,m,_,g){const d=o(h,f,p,m,_,g);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(h,f,p,m,_,g){const d=o(h,f,p,m,_,g);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function u(h,f){t.length>1&&t.sort(h||dD),i.length>1&&i.sort(f||$x),r.length>1&&r.sort(f||$x)}function c(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function pD(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Kx,n.set(i,[o])):r>=s.length?(o=new Kx,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function mD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new et};break;case"SpotLight":t={position:new F,direction:new F,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function gD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let _D=0;function vD(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function xD(n,e){const t=new mD,i=gD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new F);const s=new F,o=new Ut,a=new Ut;function l(c,h){let f=0,p=0,m=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let _=0,g=0,d=0,v=0,x=0,y=0,A=0,w=0,M=0,P=0,S=0;c.sort(vD);const E=h===!0?Math.PI:1;for(let O=0,J=c.length;O<J;O++){const L=c[O],k=L.color,V=L.intensity,W=L.distance,D=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=k.r*V*E,p+=k.g*V*E,m+=k.b*V*E;else if(L.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(L.sh.coefficients[I],V);S++}else if(L.isDirectionalLight){const I=t.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const b=L.shadow,X=i.get(L);X.shadowBias=b.bias,X.shadowNormalBias=b.normalBias,X.shadowRadius=b.radius,X.shadowMapSize=b.mapSize,r.directionalShadow[_]=X,r.directionalShadowMap[_]=D,r.directionalShadowMatrix[_]=L.shadow.matrix,y++}r.directional[_]=I,_++}else if(L.isSpotLight){const I=t.get(L);I.position.setFromMatrixPosition(L.matrixWorld),I.color.copy(k).multiplyScalar(V*E),I.distance=W,I.coneCos=Math.cos(L.angle),I.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),I.decay=L.decay,r.spot[d]=I;const b=L.shadow;if(L.map&&(r.spotLightMap[M]=L.map,M++,b.updateMatrices(L),L.castShadow&&P++),r.spotLightMatrix[d]=b.matrix,L.castShadow){const X=i.get(L);X.shadowBias=b.bias,X.shadowNormalBias=b.normalBias,X.shadowRadius=b.radius,X.shadowMapSize=b.mapSize,r.spotShadow[d]=X,r.spotShadowMap[d]=D,w++}d++}else if(L.isRectAreaLight){const I=t.get(L);I.color.copy(k).multiplyScalar(V),I.halfWidth.set(L.width*.5,0,0),I.halfHeight.set(0,L.height*.5,0),r.rectArea[v]=I,v++}else if(L.isPointLight){const I=t.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity*E),I.distance=L.distance,I.decay=L.decay,L.castShadow){const b=L.shadow,X=i.get(L);X.shadowBias=b.bias,X.shadowNormalBias=b.normalBias,X.shadowRadius=b.radius,X.shadowMapSize=b.mapSize,X.shadowCameraNear=b.camera.near,X.shadowCameraFar=b.camera.far,r.pointShadow[g]=X,r.pointShadowMap[g]=D,r.pointShadowMatrix[g]=L.shadow.matrix,A++}r.point[g]=I,g++}else if(L.isHemisphereLight){const I=t.get(L);I.skyColor.copy(L.color).multiplyScalar(V*E),I.groundColor.copy(L.groundColor).multiplyScalar(V*E),r.hemi[x]=I,x++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_FLOAT_1,r.rectAreaLTC2=Se.LTC_FLOAT_2):(r.rectAreaLTC1=Se.LTC_HALF_1,r.rectAreaLTC2=Se.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_FLOAT_1,r.rectAreaLTC2=Se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_HALF_1,r.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=m;const U=r.hash;(U.directionalLength!==_||U.pointLength!==g||U.spotLength!==d||U.rectAreaLength!==v||U.hemiLength!==x||U.numDirectionalShadows!==y||U.numPointShadows!==A||U.numSpotShadows!==w||U.numSpotMaps!==M||U.numLightProbes!==S)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=v,r.point.length=g,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=w+M-P,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=S,U.directionalLength=_,U.pointLength=g,U.spotLength=d,U.rectAreaLength=v,U.hemiLength=x,U.numDirectionalShadows=y,U.numPointShadows=A,U.numSpotShadows=w,U.numSpotMaps=M,U.numLightProbes=S,r.version=_D++)}function u(c,h){let f=0,p=0,m=0,_=0,g=0;const d=h.matrixWorldInverse;for(let v=0,x=c.length;v<x;v++){const y=c[v];if(y.isDirectionalLight){const A=r.directional[f];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),f++}else if(y.isSpotLight){const A=r.spot[m];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),m++}else if(y.isRectAreaLight){const A=r.rectArea[_];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(d),a.identity(),o.copy(y.matrixWorld),o.premultiply(d),a.extractRotation(o),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const A=r.point[p];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const A=r.hemi[g];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(d),g++}}}return{setup:l,setupView:u,state:r}}function Zx(n,e){const t=new xD(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){t.setup(i,h)}function u(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function yD(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Zx(n,e),t.set(s,[l])):o>=a.length?(l=new Zx(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class SD extends Qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_b,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MD extends Qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ED=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wD=`uniform sampler2D shadow_pass;
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
}`;function TD(n,e,t){let i=new L_;const r=new tt,s=new tt,o=new kt,a=new SD({depthPacking:vb}),l=new MD,u={},c=t.maxTextureSize,h={[Ys]:Zn,[Zn]:Ys,[fr]:fr},f=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:ED,fragmentShader:wD}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const m=new Zt;m.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ri(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oE;let d=this.type;this.render=function(w,M,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const S=n.getRenderTarget(),E=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Fs),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const J=d!==Ir&&this.type===Ir,L=d===Ir&&this.type!==Ir;for(let k=0,V=w.length;k<V;k++){const W=w[k],D=W.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const I=D.getFrameExtents();if(r.multiply(I),s.copy(D.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/I.x),r.x=s.x*I.x,D.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/I.y),r.y=s.y*I.y,D.mapSize.y=s.y)),D.map===null||J===!0||L===!0){const X=this.type!==Ir?{minFilter:Yn,magFilter:Yn}:{};D.map!==null&&D.map.dispose(),D.map=new Go(r.x,r.y,X),D.map.texture.name=W.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();const b=D.getViewportCount();for(let X=0;X<b;X++){const ee=D.getViewport(X);o.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),O.viewport(o),D.updateMatrices(W,X),i=D.getFrustum(),y(M,P,D.camera,W,this.type)}D.isPointLightShadow!==!0&&this.type===Ir&&v(D,P),D.needsUpdate=!1}d=this.type,g.needsUpdate=!1,n.setRenderTarget(S,E,U)};function v(w,M){const P=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Go(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(M,null,P,f,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(M,null,P,p,_,null)}function x(w,M,P,S){let E=null;const U=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)E=U;else if(E=P.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const O=E.uuid,J=M.uuid;let L=u[O];L===void 0&&(L={},u[O]=L);let k=L[J];k===void 0&&(k=E.clone(),L[J]=k,M.addEventListener("dispose",A)),E=k}if(E.visible=M.visible,E.wireframe=M.wireframe,S===Ir?E.side=M.shadowSide!==null?M.shadowSide:M.side:E.side=M.shadowSide!==null?M.shadowSide:h[M.side],E.alphaMap=M.alphaMap,E.alphaTest=M.alphaTest,E.map=M.map,E.clipShadows=M.clipShadows,E.clippingPlanes=M.clippingPlanes,E.clipIntersection=M.clipIntersection,E.displacementMap=M.displacementMap,E.displacementScale=M.displacementScale,E.displacementBias=M.displacementBias,E.wireframeLinewidth=M.wireframeLinewidth,E.linewidth=M.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const O=n.properties.get(E);O.light=P}return E}function y(w,M,P,S,E){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Ir)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const J=e.update(w),L=w.material;if(Array.isArray(L)){const k=J.groups;for(let V=0,W=k.length;V<W;V++){const D=k[V],I=L[D.materialIndex];if(I&&I.visible){const b=x(w,I,S,E);w.onBeforeShadow(n,w,M,P,J,b,D),n.renderBufferDirect(P,null,J,b,w,D),w.onAfterShadow(n,w,M,P,J,b,D)}}}else if(L.visible){const k=x(w,L,S,E);w.onBeforeShadow(n,w,M,P,J,k,null),n.renderBufferDirect(P,null,J,k,w,null),w.onAfterShadow(n,w,M,P,J,k,null)}}const O=w.children;for(let J=0,L=O.length;J<L;J++)y(O[J],M,P,S,E)}function A(w){w.target.removeEventListener("dispose",A);for(const P in u){const S=u[P],E=w.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function AD(n,e,t){const i=t.isWebGL2;function r(){let N=!1;const he=new kt;let de=null;const Ge=new kt(0,0,0,0);return{setMask:function(He){de!==He&&!N&&(n.colorMask(He,He,He,He),de=He)},setLocked:function(He){N=He},setClear:function(He,ft,pt,Ie,Ce){Ce===!0&&(He*=Ie,ft*=Ie,pt*=Ie),he.set(He,ft,pt,Ie),Ge.equals(he)===!1&&(n.clearColor(He,ft,pt,Ie),Ge.copy(he))},reset:function(){N=!1,de=null,Ge.set(-1,0,0,0)}}}function s(){let N=!1,he=null,de=null,Ge=null;return{setTest:function(He){He?te(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(He){he!==He&&!N&&(n.depthMask(He),he=He)},setFunc:function(He){if(de!==He){switch(He){case YR:n.depthFunc(n.NEVER);break;case qR:n.depthFunc(n.ALWAYS);break;case $R:n.depthFunc(n.LESS);break;case wh:n.depthFunc(n.LEQUAL);break;case KR:n.depthFunc(n.EQUAL);break;case ZR:n.depthFunc(n.GEQUAL);break;case QR:n.depthFunc(n.GREATER);break;case JR:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=He}},setLocked:function(He){N=He},setClear:function(He){Ge!==He&&(n.clearDepth(He),Ge=He)},reset:function(){N=!1,he=null,de=null,Ge=null}}}function o(){let N=!1,he=null,de=null,Ge=null,He=null,ft=null,pt=null,Ie=null,Ce=null;return{setTest:function(ze){N||(ze?te(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(ze){he!==ze&&!N&&(n.stencilMask(ze),he=ze)},setFunc:function(ze,ae,We){(de!==ze||Ge!==ae||He!==We)&&(n.stencilFunc(ze,ae,We),de=ze,Ge=ae,He=We)},setOp:function(ze,ae,We){(ft!==ze||pt!==ae||Ie!==We)&&(n.stencilOp(ze,ae,We),ft=ze,pt=ae,Ie=We)},setLocked:function(ze){N=ze},setClear:function(ze){Ce!==ze&&(n.clearStencil(ze),Ce=ze)},reset:function(){N=!1,he=null,de=null,Ge=null,He=null,ft=null,pt=null,Ie=null,Ce=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,h=new WeakMap;let f={},p={},m=new WeakMap,_=[],g=null,d=!1,v=null,x=null,y=null,A=null,w=null,M=null,P=null,S=new et(0,0,0),E=0,U=!1,O=null,J=null,L=null,k=null,V=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,I=0;const b=n.getParameter(n.VERSION);b.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(b)[1]),D=I>=1):b.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(b)[1]),D=I>=2);let X=null,ee={};const $=n.getParameter(n.SCISSOR_BOX),Q=n.getParameter(n.VIEWPORT),se=new kt().fromArray($),ge=new kt().fromArray(Q);function ve(N,he,de,Ge){const He=new Uint8Array(4),ft=n.createTexture();n.bindTexture(N,ft),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let pt=0;pt<de;pt++)i&&(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)?n.texImage3D(he,0,n.RGBA,1,1,Ge,0,n.RGBA,n.UNSIGNED_BYTE,He):n.texImage2D(he+pt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,He);return ft}const Fe={};Fe[n.TEXTURE_2D]=ve(n.TEXTURE_2D,n.TEXTURE_2D,1),Fe[n.TEXTURE_CUBE_MAP]=ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Fe[n.TEXTURE_2D_ARRAY]=ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Fe[n.TEXTURE_3D]=ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),te(n.DEPTH_TEST),l.setFunc(wh),le(!1),R(Uv),te(n.CULL_FACE),ye(Fs);function te(N){f[N]!==!0&&(n.enable(N),f[N]=!0)}function xe(N){f[N]!==!1&&(n.disable(N),f[N]=!1)}function ce(N,he){return p[N]!==he?(n.bindFramebuffer(N,he),p[N]=he,i&&(N===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=he),N===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=he)),!0):!1}function H(N,he){let de=_,Ge=!1;if(N)if(de=m.get(he),de===void 0&&(de=[],m.set(he,de)),N.isWebGLMultipleRenderTargets){const He=N.texture;if(de.length!==He.length||de[0]!==n.COLOR_ATTACHMENT0){for(let ft=0,pt=He.length;ft<pt;ft++)de[ft]=n.COLOR_ATTACHMENT0+ft;de.length=He.length,Ge=!0}}else de[0]!==n.COLOR_ATTACHMENT0&&(de[0]=n.COLOR_ATTACHMENT0,Ge=!0);else de[0]!==n.BACK&&(de[0]=n.BACK,Ge=!0);Ge&&(t.isWebGL2?n.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function Te(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const _e={[mo]:n.FUNC_ADD,[DR]:n.FUNC_SUBTRACT,[NR]:n.FUNC_REVERSE_SUBTRACT};if(i)_e[Fv]=n.MIN,_e[kv]=n.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(_e[Fv]=N.MIN_EXT,_e[kv]=N.MAX_EXT)}const be={[UR]:n.ZERO,[IR]:n.ONE,[OR]:n.SRC_COLOR,[Wm]:n.SRC_ALPHA,[VR]:n.SRC_ALPHA_SATURATE,[BR]:n.DST_COLOR,[kR]:n.DST_ALPHA,[FR]:n.ONE_MINUS_SRC_COLOR,[Xm]:n.ONE_MINUS_SRC_ALPHA,[HR]:n.ONE_MINUS_DST_COLOR,[zR]:n.ONE_MINUS_DST_ALPHA,[GR]:n.CONSTANT_COLOR,[WR]:n.ONE_MINUS_CONSTANT_COLOR,[XR]:n.CONSTANT_ALPHA,[jR]:n.ONE_MINUS_CONSTANT_ALPHA};function ye(N,he,de,Ge,He,ft,pt,Ie,Ce,ze){if(N===Fs){d===!0&&(xe(n.BLEND),d=!1);return}if(d===!1&&(te(n.BLEND),d=!0),N!==LR){if(N!==v||ze!==U){if((x!==mo||w!==mo)&&(n.blendEquation(n.FUNC_ADD),x=mo,w=mo),ze)switch(N){case el:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tl:n.blendFunc(n.ONE,n.ONE);break;case Iv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ov:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case el:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Iv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ov:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,A=null,M=null,P=null,S.set(0,0,0),E=0,v=N,U=ze}return}He=He||he,ft=ft||de,pt=pt||Ge,(he!==x||He!==w)&&(n.blendEquationSeparate(_e[he],_e[He]),x=he,w=He),(de!==y||Ge!==A||ft!==M||pt!==P)&&(n.blendFuncSeparate(be[de],be[Ge],be[ft],be[pt]),y=de,A=Ge,M=ft,P=pt),(Ie.equals(S)===!1||Ce!==E)&&(n.blendColor(Ie.r,Ie.g,Ie.b,Ce),S.copy(Ie),E=Ce),v=N,U=!1}function G(N,he){N.side===fr?xe(n.CULL_FACE):te(n.CULL_FACE);let de=N.side===Zn;he&&(de=!de),le(de),N.blending===el&&N.transparent===!1?ye(Fs):ye(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const Ge=N.stencilWrite;u.setTest(Ge),Ge&&(u.setMask(N.stencilWriteMask),u.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),u.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),z(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function le(N){O!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),O=N)}function R(N){N!==RR?(te(n.CULL_FACE),N!==J&&(N===Uv?n.cullFace(n.BACK):N===bR?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),J=N}function T(N){N!==L&&(D&&n.lineWidth(N),L=N)}function z(N,he,de){N?(te(n.POLYGON_OFFSET_FILL),(k!==he||V!==de)&&(n.polygonOffset(he,de),k=he,V=de)):xe(n.POLYGON_OFFSET_FILL)}function ne(N){N?te(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function ie(N){N===void 0&&(N=n.TEXTURE0+W-1),X!==N&&(n.activeTexture(N),X=N)}function re(N,he,de){de===void 0&&(X===null?de=n.TEXTURE0+W-1:de=X);let Ge=ee[de];Ge===void 0&&(Ge={type:void 0,texture:void 0},ee[de]=Ge),(Ge.type!==N||Ge.texture!==he)&&(X!==de&&(n.activeTexture(de),X=de),n.bindTexture(N,he||Fe[N]),Ge.type=N,Ge.texture=he)}function Me(){const N=ee[X];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function pe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Be(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function qe(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $e(N){se.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),se.copy(N))}function st(N){ge.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ge.copy(N))}function gt(N,he){let de=h.get(he);de===void 0&&(de=new WeakMap,h.set(he,de));let Ge=de.get(N);Ge===void 0&&(Ge=n.getUniformBlockIndex(he,N.name),de.set(N,Ge))}function Ee(N,he){const Ge=h.get(he).get(N);c.get(he)!==Ge&&(n.uniformBlockBinding(he,Ge,N.__bindingPointIndex),c.set(he,Ge))}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},X=null,ee={},p={},m=new WeakMap,_=[],g=null,d=!1,v=null,x=null,y=null,A=null,w=null,M=null,P=null,S=new et(0,0,0),E=0,U=!1,O=null,J=null,L=null,k=null,V=null,se.set(0,0,n.canvas.width,n.canvas.height),ge.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:te,disable:xe,bindFramebuffer:ce,drawBuffers:H,useProgram:Te,setBlending:ye,setMaterial:G,setFlipSided:le,setCullFace:R,setLineWidth:T,setPolygonOffset:z,setScissorTest:ne,activeTexture:ie,bindTexture:re,unbindTexture:Me,compressedTexImage2D:pe,compressedTexImage3D:fe,texImage2D:Ue,texImage3D:we,updateUBOMapping:gt,uniformBlockBinding:Ee,texStorage2D:De,texStorage3D:qe,texSubImage2D:Le,texSubImage3D:Be,compressedTexSubImage2D:Z,compressedTexSubImage3D:Xe,scissor:$e,viewport:st,reset:ue}}function CD(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,T){return p?new OffscreenCanvas(R,T):bh("canvas")}function _(R,T,z,ne){let ie=1;if((R.width>ne||R.height>ne)&&(ie=ne/Math.max(R.width,R.height)),ie<1||T===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const re=T?Jm:Math.floor,Me=re(ie*R.width),pe=re(ie*R.height);h===void 0&&(h=m(Me,pe));const fe=z?m(Me,pe):h;return fe.width=Me,fe.height=pe,fe.getContext("2d").drawImage(R,0,0,Me,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Me+"x"+pe+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function g(R){return dx(R.width)&&dx(R.height)}function d(R){return a?!1:R.wrapS!==hr||R.wrapT!==hr||R.minFilter!==Yn&&R.minFilter!==Yi}function v(R,T){return R.generateMipmaps&&T&&R.minFilter!==Yn&&R.minFilter!==Yi}function x(R){n.generateMipmap(R)}function y(R,T,z,ne,ie=!1){if(a===!1)return T;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let re=T;if(T===n.RED&&(z===n.FLOAT&&(re=n.R32F),z===n.HALF_FLOAT&&(re=n.R16F),z===n.UNSIGNED_BYTE&&(re=n.R8)),T===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(re=n.R8UI),z===n.UNSIGNED_SHORT&&(re=n.R16UI),z===n.UNSIGNED_INT&&(re=n.R32UI),z===n.BYTE&&(re=n.R8I),z===n.SHORT&&(re=n.R16I),z===n.INT&&(re=n.R32I)),T===n.RG&&(z===n.FLOAT&&(re=n.RG32F),z===n.HALF_FLOAT&&(re=n.RG16F),z===n.UNSIGNED_BYTE&&(re=n.RG8)),T===n.RGBA){const Me=ie?Th:Et.getTransfer(ne);z===n.FLOAT&&(re=n.RGBA32F),z===n.HALF_FLOAT&&(re=n.RGBA16F),z===n.UNSIGNED_BYTE&&(re=Me===Dt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function A(R,T,z){return v(R,z)===!0||R.isFramebufferTexture&&R.minFilter!==Yn&&R.minFilter!==Yi?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function w(R){return R===Yn||R===zv||R===jd?n.NEAREST:n.LINEAR}function M(R){const T=R.target;T.removeEventListener("dispose",M),S(T),T.isVideoTexture&&c.delete(T)}function P(R){const T=R.target;T.removeEventListener("dispose",P),U(T)}function S(R){const T=i.get(R);if(T.__webglInit===void 0)return;const z=R.source,ne=f.get(z);if(ne){const ie=ne[T.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&E(R),Object.keys(ne).length===0&&f.delete(z)}i.remove(R)}function E(R){const T=i.get(R);n.deleteTexture(T.__webglTexture);const z=R.source,ne=f.get(z);delete ne[T.__cacheKey],o.memory.textures--}function U(R){const T=R.texture,z=i.get(R),ne=i.get(T);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(z.__webglFramebuffer[ie]))for(let re=0;re<z.__webglFramebuffer[ie].length;re++)n.deleteFramebuffer(z.__webglFramebuffer[ie][re]);else n.deleteFramebuffer(z.__webglFramebuffer[ie]);z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[ie])}else{if(Array.isArray(z.__webglFramebuffer))for(let ie=0;ie<z.__webglFramebuffer.length;ie++)n.deleteFramebuffer(z.__webglFramebuffer[ie]);else n.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let ie=0;ie<z.__webglColorRenderbuffer.length;ie++)z.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[ie]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ie=0,re=T.length;ie<re;ie++){const Me=i.get(T[ie]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(T[ie])}i.remove(T),i.remove(R)}let O=0;function J(){O=0}function L(){const R=O;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),O+=1,R}function k(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function V(R,T){const z=i.get(R);if(R.isVideoTexture&&G(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const ne=R.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(z,R,T);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+T)}function W(R,T){const z=i.get(R);if(R.version>0&&z.__version!==R.version){se(z,R,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+T)}function D(R,T){const z=i.get(R);if(R.version>0&&z.__version!==R.version){se(z,R,T);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+T)}function I(R,T){const z=i.get(R);if(R.version>0&&z.__version!==R.version){ge(z,R,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+T)}const b={[qm]:n.REPEAT,[hr]:n.CLAMP_TO_EDGE,[$m]:n.MIRRORED_REPEAT},X={[Yn]:n.NEAREST,[zv]:n.NEAREST_MIPMAP_NEAREST,[jd]:n.NEAREST_MIPMAP_LINEAR,[Yi]:n.LINEAR,[lb]:n.LINEAR_MIPMAP_NEAREST,[nc]:n.LINEAR_MIPMAP_LINEAR},ee={[yb]:n.NEVER,[Ab]:n.ALWAYS,[Sb]:n.LESS,[vE]:n.LEQUAL,[Mb]:n.EQUAL,[Tb]:n.GEQUAL,[Eb]:n.GREATER,[wb]:n.NOTEQUAL};function $(R,T,z){if(z?(n.texParameteri(R,n.TEXTURE_WRAP_S,b[T.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,b[T.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,b[T.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,X[T.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,X[T.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(T.wrapS!==hr||T.wrapT!==hr)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,w(T.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,w(T.minFilter)),T.minFilter!==Yn&&T.minFilter!==Yi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ee[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Yn||T.minFilter!==jd&&T.minFilter!==nc||T.type===Ts&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===ic&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(n.texParameterf(R,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function Q(R,T){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",M));const ne=T.source;let ie=f.get(ne);ie===void 0&&(ie={},f.set(ne,ie));const re=k(T);if(re!==R.__cacheKey){ie[re]===void 0&&(ie[re]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ie[re].usedTimes++;const Me=ie[R.__cacheKey];Me!==void 0&&(ie[R.__cacheKey].usedTimes--,Me.usedTimes===0&&E(T)),R.__cacheKey=re,R.__webglTexture=ie[re].texture}return z}function se(R,T,z){let ne=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ne=n.TEXTURE_3D);const ie=Q(R,T),re=T.source;t.bindTexture(ne,R.__webglTexture,n.TEXTURE0+z);const Me=i.get(re);if(re.version!==Me.__version||ie===!0){t.activeTexture(n.TEXTURE0+z);const pe=Et.getPrimaries(Et.workingColorSpace),fe=T.colorSpace===$i?null:Et.getPrimaries(T.colorSpace),Le=T.colorSpace===$i||pe===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Be=d(T)&&g(T.image)===!1;let Z=_(T.image,Be,!1,r.maxTextureSize);Z=le(T,Z);const Xe=g(Z)||a,De=s.convert(T.format,T.colorSpace);let qe=s.convert(T.type),Ue=y(T.internalFormat,De,qe,T.colorSpace,T.isVideoTexture);$(ne,T,Xe);let we;const $e=T.mipmaps,st=a&&T.isVideoTexture!==!0&&Ue!==mE,gt=Me.__version===void 0||ie===!0,Ee=A(T,Z,Xe);if(T.isDepthTexture)Ue=n.DEPTH_COMPONENT,a?T.type===Ts?Ue=n.DEPTH_COMPONENT32F:T.type===ws?Ue=n.DEPTH_COMPONENT24:T.type===Do?Ue=n.DEPTH24_STENCIL8:Ue=n.DEPTH_COMPONENT16:T.type===Ts&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===No&&Ue===n.DEPTH_COMPONENT&&T.type!==R_&&T.type!==ws&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=ws,qe=s.convert(T.type)),T.format===xl&&Ue===n.DEPTH_COMPONENT&&(Ue=n.DEPTH_STENCIL,T.type!==Do&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Do,qe=s.convert(T.type))),gt&&(st?t.texStorage2D(n.TEXTURE_2D,1,Ue,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,Ue,Z.width,Z.height,0,De,qe,null));else if(T.isDataTexture)if($e.length>0&&Xe){st&&gt&&t.texStorage2D(n.TEXTURE_2D,Ee,Ue,$e[0].width,$e[0].height);for(let ue=0,N=$e.length;ue<N;ue++)we=$e[ue],st?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,we.width,we.height,De,qe,we.data):t.texImage2D(n.TEXTURE_2D,ue,Ue,we.width,we.height,0,De,qe,we.data);T.generateMipmaps=!1}else st?(gt&&t.texStorage2D(n.TEXTURE_2D,Ee,Ue,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Z.width,Z.height,De,qe,Z.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,Z.width,Z.height,0,De,qe,Z.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){st&&gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Ue,$e[0].width,$e[0].height,Z.depth);for(let ue=0,N=$e.length;ue<N;ue++)we=$e[ue],T.format!==dr?De!==null?st?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,we.width,we.height,Z.depth,De,we.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,Ue,we.width,we.height,Z.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,we.width,we.height,Z.depth,De,qe,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,Ue,we.width,we.height,Z.depth,0,De,qe,we.data)}else{st&&gt&&t.texStorage2D(n.TEXTURE_2D,Ee,Ue,$e[0].width,$e[0].height);for(let ue=0,N=$e.length;ue<N;ue++)we=$e[ue],T.format!==dr?De!==null?st?t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,we.width,we.height,De,we.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,Ue,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,we.width,we.height,De,qe,we.data):t.texImage2D(n.TEXTURE_2D,ue,Ue,we.width,we.height,0,De,qe,we.data)}else if(T.isDataArrayTexture)st?(gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Ue,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,De,qe,Z.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,Z.width,Z.height,Z.depth,0,De,qe,Z.data);else if(T.isData3DTexture)st?(gt&&t.texStorage3D(n.TEXTURE_3D,Ee,Ue,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,De,qe,Z.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,Z.width,Z.height,Z.depth,0,De,qe,Z.data);else if(T.isFramebufferTexture){if(gt)if(st)t.texStorage2D(n.TEXTURE_2D,Ee,Ue,Z.width,Z.height);else{let ue=Z.width,N=Z.height;for(let he=0;he<Ee;he++)t.texImage2D(n.TEXTURE_2D,he,Ue,ue,N,0,De,qe,null),ue>>=1,N>>=1}}else if($e.length>0&&Xe){st&&gt&&t.texStorage2D(n.TEXTURE_2D,Ee,Ue,$e[0].width,$e[0].height);for(let ue=0,N=$e.length;ue<N;ue++)we=$e[ue],st?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,De,qe,we):t.texImage2D(n.TEXTURE_2D,ue,Ue,De,qe,we);T.generateMipmaps=!1}else st?(gt&&t.texStorage2D(n.TEXTURE_2D,Ee,Ue,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,De,qe,Z)):t.texImage2D(n.TEXTURE_2D,0,Ue,De,qe,Z);v(T,Xe)&&x(ne),Me.__version=re.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function ge(R,T,z){if(T.image.length!==6)return;const ne=Q(R,T),ie=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+z);const re=i.get(ie);if(ie.version!==re.__version||ne===!0){t.activeTexture(n.TEXTURE0+z);const Me=Et.getPrimaries(Et.workingColorSpace),pe=T.colorSpace===$i?null:Et.getPrimaries(T.colorSpace),fe=T.colorSpace===$i||Me===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Le=T.isCompressedTexture||T.image[0].isCompressedTexture,Be=T.image[0]&&T.image[0].isDataTexture,Z=[];for(let ue=0;ue<6;ue++)!Le&&!Be?Z[ue]=_(T.image[ue],!1,!0,r.maxCubemapSize):Z[ue]=Be?T.image[ue].image:T.image[ue],Z[ue]=le(T,Z[ue]);const Xe=Z[0],De=g(Xe)||a,qe=s.convert(T.format,T.colorSpace),Ue=s.convert(T.type),we=y(T.internalFormat,qe,Ue,T.colorSpace),$e=a&&T.isVideoTexture!==!0,st=re.__version===void 0||ne===!0;let gt=A(T,Xe,De);$(n.TEXTURE_CUBE_MAP,T,De);let Ee;if(Le){$e&&st&&t.texStorage2D(n.TEXTURE_CUBE_MAP,gt,we,Xe.width,Xe.height);for(let ue=0;ue<6;ue++){Ee=Z[ue].mipmaps;for(let N=0;N<Ee.length;N++){const he=Ee[N];T.format!==dr?qe!==null?$e?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,N,0,0,he.width,he.height,qe,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,N,we,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,N,0,0,he.width,he.height,qe,Ue,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,N,we,he.width,he.height,0,qe,Ue,he.data)}}}else{Ee=T.mipmaps,$e&&st&&(Ee.length>0&&gt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,gt,we,Z[0].width,Z[0].height));for(let ue=0;ue<6;ue++)if(Be){$e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Z[ue].width,Z[ue].height,qe,Ue,Z[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,we,Z[ue].width,Z[ue].height,0,qe,Ue,Z[ue].data);for(let N=0;N<Ee.length;N++){const de=Ee[N].image[ue].image;$e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,N+1,0,0,de.width,de.height,qe,Ue,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,N+1,we,de.width,de.height,0,qe,Ue,de.data)}}else{$e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,qe,Ue,Z[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,we,qe,Ue,Z[ue]);for(let N=0;N<Ee.length;N++){const he=Ee[N];$e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,N+1,0,0,qe,Ue,he.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,N+1,we,qe,Ue,he.image[ue])}}}v(T,De)&&x(n.TEXTURE_CUBE_MAP),re.__version=ie.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function ve(R,T,z,ne,ie,re){const Me=s.convert(z.format,z.colorSpace),pe=s.convert(z.type),fe=y(z.internalFormat,Me,pe,z.colorSpace);if(!i.get(T).__hasExternalTextures){const Be=Math.max(1,T.width>>re),Z=Math.max(1,T.height>>re);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,re,fe,Be,Z,T.depth,0,Me,pe,null):t.texImage2D(ie,re,fe,Be,Z,0,Me,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),ye(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,ie,i.get(z).__webglTexture,0,be(T)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,ie,i.get(z).__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(R,T,z){if(n.bindRenderbuffer(n.RENDERBUFFER,R),T.depthBuffer&&!T.stencilBuffer){let ne=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(z||ye(T)){const ie=T.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Ts?ne=n.DEPTH_COMPONENT32F:ie.type===ws&&(ne=n.DEPTH_COMPONENT24));const re=be(T);ye(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,ne,T.width,T.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,re,ne,T.width,T.height)}else n.renderbufferStorage(n.RENDERBUFFER,ne,T.width,T.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(T.depthBuffer&&T.stencilBuffer){const ne=be(T);z&&ye(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,T.width,T.height):ye(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{const ne=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ie=0;ie<ne.length;ie++){const re=ne[ie],Me=s.convert(re.format,re.colorSpace),pe=s.convert(re.type),fe=y(re.internalFormat,Me,pe,re.colorSpace),Le=be(T);z&&ye(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,fe,T.width,T.height):ye(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,fe,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,fe,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function te(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),V(T.depthTexture,0);const ne=i.get(T.depthTexture).__webglTexture,ie=be(T);if(T.depthTexture.format===No)ye(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(T.depthTexture.format===xl)ye(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function xe(R){const T=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");te(T.__webglFramebuffer,R)}else if(z){T.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ne]),T.__webglDepthbuffer[ne]=n.createRenderbuffer(),Fe(T.__webglDepthbuffer[ne],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),Fe(T.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(R,T,z){const ne=i.get(R);T!==void 0&&ve(ne.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&xe(R)}function H(R){const T=R.texture,z=i.get(R),ne=i.get(T);R.addEventListener("dispose",P),R.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=T.version,o.memory.textures++);const ie=R.isWebGLCubeRenderTarget===!0,re=R.isWebGLMultipleRenderTargets===!0,Me=g(R)||a;if(ie){z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(a&&T.mipmaps&&T.mipmaps.length>0){z.__webglFramebuffer[pe]=[];for(let fe=0;fe<T.mipmaps.length;fe++)z.__webglFramebuffer[pe][fe]=n.createFramebuffer()}else z.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){z.__webglFramebuffer=[];for(let pe=0;pe<T.mipmaps.length;pe++)z.__webglFramebuffer[pe]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(re)if(r.drawBuffers){const pe=R.texture;for(let fe=0,Le=pe.length;fe<Le;fe++){const Be=i.get(pe[fe]);Be.__webglTexture===void 0&&(Be.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&ye(R)===!1){const pe=re?T:[T];z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let fe=0;fe<pe.length;fe++){const Le=pe[fe];z.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[fe]);const Be=s.convert(Le.format,Le.colorSpace),Z=s.convert(Le.type),Xe=y(Le.internalFormat,Be,Z,Le.colorSpace,R.isXRRenderTarget===!0),De=be(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Xe,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,z.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Fe(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ie){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),$(n.TEXTURE_CUBE_MAP,T,Me);for(let pe=0;pe<6;pe++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let fe=0;fe<T.mipmaps.length;fe++)ve(z.__webglFramebuffer[pe][fe],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,fe);else ve(z.__webglFramebuffer[pe],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);v(T,Me)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const pe=R.texture;for(let fe=0,Le=pe.length;fe<Le;fe++){const Be=pe[fe],Z=i.get(Be);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture),$(n.TEXTURE_2D,Be,Me),ve(z.__webglFramebuffer,R,Be,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),v(Be,Me)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?pe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,ne.__webglTexture),$(pe,T,Me),a&&T.mipmaps&&T.mipmaps.length>0)for(let fe=0;fe<T.mipmaps.length;fe++)ve(z.__webglFramebuffer[fe],R,T,n.COLOR_ATTACHMENT0,pe,fe);else ve(z.__webglFramebuffer,R,T,n.COLOR_ATTACHMENT0,pe,0);v(T,Me)&&x(pe),t.unbindTexture()}R.depthBuffer&&xe(R)}function Te(R){const T=g(R)||a,z=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ne=0,ie=z.length;ne<ie;ne++){const re=z[ne];if(v(re,T)){const Me=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,pe=i.get(re).__webglTexture;t.bindTexture(Me,pe),x(Me),t.unbindTexture()}}}function _e(R){if(a&&R.samples>0&&ye(R)===!1){const T=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],z=R.width,ne=R.height;let ie=n.COLOR_BUFFER_BIT;const re=[],Me=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(R),fe=R.isWebGLMultipleRenderTargets===!0;if(fe)for(let Le=0;Le<T.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Le=0;Le<T.length;Le++){re.push(n.COLOR_ATTACHMENT0+Le),R.depthBuffer&&re.push(Me);const Be=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(Be===!1&&(R.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),fe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[Le]),Be===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Me])),fe){const Z=i.get(T[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z,0)}n.blitFramebuffer(0,0,z,ne,0,0,z,ne,ie,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Le=0;Le<T.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,pe.__webglColorRenderbuffer[Le]);const Be=i.get(T[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,Be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function be(R){return Math.min(r.maxSamples,R.samples)}function ye(R){const T=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function G(R){const T=o.render.frame;c.get(R)!==T&&(c.set(R,T),R.update())}function le(R,T){const z=R.colorSpace,ne=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Zm||z!==ts&&z!==$i&&(Et.getTransfer(z)===Dt?a===!1?e.has("EXT_sRGB")===!0&&ne===dr?(R.format=Zm,R.minFilter=Yi,R.generateMipmaps=!1):T=yE.sRGBToLinear(T):(ne!==dr||ie!==zs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),T}this.allocateTextureUnit=L,this.resetTextureUnits=J,this.setTexture2D=V,this.setTexture2DArray=W,this.setTexture3D=D,this.setTextureCube=I,this.rebindTextures=ce,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ye}function RD(n,e,t){const i=t.isWebGL2;function r(s,o=$i){let a;const l=Et.getTransfer(o);if(s===zs)return n.UNSIGNED_BYTE;if(s===cE)return n.UNSIGNED_SHORT_4_4_4_4;if(s===fE)return n.UNSIGNED_SHORT_5_5_5_1;if(s===ub)return n.BYTE;if(s===cb)return n.SHORT;if(s===R_)return n.UNSIGNED_SHORT;if(s===uE)return n.INT;if(s===ws)return n.UNSIGNED_INT;if(s===Ts)return n.FLOAT;if(s===ic)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===fb)return n.ALPHA;if(s===dr)return n.RGBA;if(s===hb)return n.LUMINANCE;if(s===db)return n.LUMINANCE_ALPHA;if(s===No)return n.DEPTH_COMPONENT;if(s===xl)return n.DEPTH_STENCIL;if(s===Zm)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===pb)return n.RED;if(s===hE)return n.RED_INTEGER;if(s===mb)return n.RG;if(s===dE)return n.RG_INTEGER;if(s===pE)return n.RGBA_INTEGER;if(s===Yd||s===qd||s===$d||s===Kd)if(l===Dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Yd)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===qd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===$d)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Kd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Yd)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===qd)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===$d)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Kd)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bv||s===Hv||s===Vv||s===Gv)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Bv)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Hv)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vv)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Gv)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===mE)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Wv||s===Xv)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Wv)return l===Dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Xv)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===jv||s===Yv||s===qv||s===$v||s===Kv||s===Zv||s===Qv||s===Jv||s===ex||s===tx||s===nx||s===ix||s===rx||s===sx)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===jv)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yv)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===qv)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$v)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kv)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zv)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Qv)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Jv)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ex)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===tx)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===nx)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ix)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rx)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===sx)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Zd||s===ox||s===ax)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Zd)return l===Dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ox)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ax)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===gb||s===lx||s===ux||s===cx)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Zd)return a.COMPRESSED_RED_RGTC1_EXT;if(s===lx)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ux)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===cx)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Do?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class bD extends wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Mo extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PD={type:"move"};class Sp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),d=this._getHandJoint(u,_);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),p=.02,m=.005;u.inputState.pinching&&f>p+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(PD)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Mo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class LD extends Tl{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,f=null,p=null,m=null;const _=t.getContextAttributes();let g=null,d=null;const v=[],x=[],y=new tt;let A=null;const w=new wi;w.layers.enable(1),w.viewport=new kt;const M=new wi;M.layers.enable(2),M.viewport=new kt;const P=[w,M],S=new bD;S.layers.enable(1),S.layers.enable(2);let E=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=v[$];return Q===void 0&&(Q=new Sp,v[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=v[$];return Q===void 0&&(Q=new Sp,v[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=v[$];return Q===void 0&&(Q=new Sp,v[$]=Q),Q.getHandSpace()};function O($){const Q=x.indexOf($.inputSource);if(Q===-1)return;const se=v[Q];se!==void 0&&(se.update($.inputSource,$.frame,u||o),se.dispatchEvent({type:$.type,data:$.inputSource}))}function J(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",L);for(let $=0;$<v.length;$++){const Q=x[$];Q!==null&&(x[$]=null,v[$].disconnect(Q))}E=null,U=null,e.setRenderTarget(g),p=null,f=null,h=null,r=null,d=null,ee.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",J),r.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new Go(p.framebufferWidth,p.framebufferHeight,{format:dr,type:zs,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Q=null,se=null,ge=null;_.depth&&(ge=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=_.stencil?xl:No,se=_.stencil?Do:ws);const ve={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(ve),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new Go(f.textureWidth,f.textureHeight,{format:dr,type:zs,depthTexture:new LE(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Fe=e.properties.get(d);Fe.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ee.setContext(r),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L($){for(let Q=0;Q<$.removed.length;Q++){const se=$.removed[Q],ge=x.indexOf(se);ge>=0&&(x[ge]=null,v[ge].disconnect(se))}for(let Q=0;Q<$.added.length;Q++){const se=$.added[Q];let ge=x.indexOf(se);if(ge===-1){for(let Fe=0;Fe<v.length;Fe++)if(Fe>=x.length){x.push(se),ge=Fe;break}else if(x[Fe]===null){x[Fe]=se,ge=Fe;break}if(ge===-1)break}const ve=v[ge];ve&&ve.connect(se)}}const k=new F,V=new F;function W($,Q,se){k.setFromMatrixPosition(Q.matrixWorld),V.setFromMatrixPosition(se.matrixWorld);const ge=k.distanceTo(V),ve=Q.projectionMatrix.elements,Fe=se.projectionMatrix.elements,te=ve[14]/(ve[10]-1),xe=ve[14]/(ve[10]+1),ce=(ve[9]+1)/ve[5],H=(ve[9]-1)/ve[5],Te=(ve[8]-1)/ve[0],_e=(Fe[8]+1)/Fe[0],be=te*Te,ye=te*_e,G=ge/(-Te+_e),le=G*-Te;Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(le),$.translateZ(G),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const R=te+G,T=xe+G,z=be-le,ne=ye+(ge-le),ie=ce*xe/T*R,re=H*xe/T*R;$.projectionMatrix.makePerspective(z,ne,ie,re,R,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function D($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;S.near=M.near=w.near=$.near,S.far=M.far=w.far=$.far,(E!==S.near||U!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,U=S.far);const Q=$.parent,se=S.cameras;D(S,Q);for(let ge=0;ge<se.length;ge++)D(se[ge],Q);se.length===2?W(S,w,M):S.projectionMatrix.copy(w.projectionMatrix),I($,S,Q)};function I($,Q,se){se===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(se.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Qm*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)};let b=null;function X($,Q){if(c=Q.getViewerPose(u||o),m=Q,c!==null){const se=c.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let ge=!1;se.length!==S.cameras.length&&(S.cameras.length=0,ge=!0);for(let ve=0;ve<se.length;ve++){const Fe=se[ve];let te=null;if(p!==null)te=p.getViewport(Fe);else{const ce=h.getViewSubImage(f,Fe);te=ce.viewport,ve===0&&(e.setRenderTargetTextures(d,ce.colorTexture,f.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(d))}let xe=P[ve];xe===void 0&&(xe=new wi,xe.layers.enable(ve),xe.viewport=new kt,P[ve]=xe),xe.matrix.fromArray(Fe.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(Fe.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(te.x,te.y,te.width,te.height),ve===0&&(S.matrix.copy(xe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ge===!0&&S.cameras.push(xe)}}for(let se=0;se<v.length;se++){const ge=x[se],ve=v[se];ge!==null&&ve!==void 0&&ve.update(ge,Q,u||o)}b&&b($,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),m=null}const ee=new PE;ee.setAnimationLoop(X),this.setAnimationLoop=function($){b=$},this.dispose=function(){}}}function DD(n,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,CE(n)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,v,x,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),h(g,d)):d.isMeshPhongMaterial?(s(g,d),c(g,d)):d.isMeshStandardMaterial?(s(g,d),f(g,d),d.isMeshPhysicalMaterial&&p(g,d,y)):d.isMeshMatcapMaterial?(s(g,d),m(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),_(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,v,x):d.isSpriteMaterial?u(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Zn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Zn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const v=e.get(d).envMap;if(v&&(g.envMap.value=v,g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap){g.lightMap.value=d.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,g.lightMapTransform)}d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,v,x){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*v,g.scale.value=x*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function h(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),e.get(d).envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,v){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Zn&&g.clearcoatNormalScale.value.negate())),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function _(g,d){const v=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ND(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function u(v,x){let y=r[v.id];y===void 0&&(m(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",g));const A=x.program;i.updateUBOMapping(v,A);const w=e.render.frame;s[v.id]!==w&&(f(v),s[v.id]=w)}function c(v){const x=h();v.__bindingPointIndex=x;const y=n.createBuffer(),A=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,A,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],y=v.uniforms,A=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,M=y.length;w<M;w++){const P=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,E=P.length;S<E;S++){const U=P[S];if(p(U,w,S,A)===!0){const O=U.__offset,J=Array.isArray(U.value)?U.value:[U.value];let L=0;for(let k=0;k<J.length;k++){const V=J[k],W=_(V);typeof V=="number"||typeof V=="boolean"?(U.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,O+L,U.__data)):V.isMatrix3?(U.__data[0]=V.elements[0],U.__data[1]=V.elements[1],U.__data[2]=V.elements[2],U.__data[3]=0,U.__data[4]=V.elements[3],U.__data[5]=V.elements[4],U.__data[6]=V.elements[5],U.__data[7]=0,U.__data[8]=V.elements[6],U.__data[9]=V.elements[7],U.__data[10]=V.elements[8],U.__data[11]=0):(V.toArray(U.__data,L),L+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,y,A){const w=v.value,M=x+"_"+y;if(A[M]===void 0)return typeof w=="number"||typeof w=="boolean"?A[M]=w:A[M]=w.clone(),!0;{const P=A[M];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return A[M]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function m(v){const x=v.uniforms;let y=0;const A=16;for(let M=0,P=x.length;M<P;M++){const S=Array.isArray(x[M])?x[M]:[x[M]];for(let E=0,U=S.length;E<U;E++){const O=S[E],J=Array.isArray(O.value)?O.value:[O.value];for(let L=0,k=J.length;L<k;L++){const V=J[L],W=_(V),D=y%A;D!==0&&A-D<W.boundary&&(y+=A-D),O.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=W.storage}}}const w=y%A;return w>0&&(y+=A-w),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){const x=v.target;x.removeEventListener("dispose",g);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class FE{constructor(e={}){const{canvas:t=Rb(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const p=new Uint32Array(4),m=new Int32Array(4);let _=null,g=null;const d=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Sn,this._useLegacyLights=!1,this.toneMapping=ks,this.toneMappingExposure=1;const x=this;let y=!1,A=0,w=0,M=null,P=-1,S=null;const E=new kt,U=new kt;let O=null;const J=new et(0);let L=0,k=t.width,V=t.height,W=1,D=null,I=null;const b=new kt(0,0,k,V),X=new kt(0,0,k,V);let ee=!1;const $=new L_;let Q=!1,se=!1,ge=null;const ve=new Ut,Fe=new tt,te=new F,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return M===null?W:1}let H=i;function Te(C,B){for(let K=0;K<C.length;K++){const q=C[K],j=t.getContext(q,B);if(j!==null)return j}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${C_}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",he,!1),H===null){const B=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&B.shift(),H=Te(B,C),H===null)throw Te(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let _e,be,ye,G,le,R,T,z,ne,ie,re,Me,pe,fe,Le,Be,Z,Xe,De,qe,Ue,we,$e,st;function gt(){_e=new GL(H),be=new OL(H,_e,e),_e.init(be),we=new RD(H,_e,be),ye=new AD(H,_e,be),G=new jL(H),le=new hD,R=new CD(H,_e,ye,le,be,we,G),T=new kL(x),z=new VL(x),ne=new Jb(H,be),$e=new UL(H,_e,ne,be),ie=new WL(H,ne,G,$e),re=new KL(H,ie,ne,G),De=new $L(H,be,R),Be=new FL(le),Me=new fD(x,T,z,_e,be,$e,Be),pe=new DD(x,le),fe=new pD,Le=new yD(_e,be),Xe=new NL(x,T,z,ye,re,f,l),Z=new TD(x,re,be),st=new ND(H,G,be,ye),qe=new IL(H,_e,G,be),Ue=new XL(H,_e,G,be),G.programs=Me.programs,x.capabilities=be,x.extensions=_e,x.properties=le,x.renderLists=fe,x.shadowMap=Z,x.state=ye,x.info=G}gt();const Ee=new LD(x,H);this.xr=Ee,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=_e.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=_e.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(C){C!==void 0&&(W=C,this.setSize(k,V,!1))},this.getSize=function(C){return C.set(k,V)},this.setSize=function(C,B,K=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=C,V=B,t.width=Math.floor(C*W),t.height=Math.floor(B*W),K===!0&&(t.style.width=C+"px",t.style.height=B+"px"),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(k*W,V*W).floor()},this.setDrawingBufferSize=function(C,B,K){k=C,V=B,W=K,t.width=Math.floor(C*K),t.height=Math.floor(B*K),this.setViewport(0,0,C,B)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(b)},this.setViewport=function(C,B,K,q){C.isVector4?b.set(C.x,C.y,C.z,C.w):b.set(C,B,K,q),ye.viewport(E.copy(b).multiplyScalar(W).floor())},this.getScissor=function(C){return C.copy(X)},this.setScissor=function(C,B,K,q){C.isVector4?X.set(C.x,C.y,C.z,C.w):X.set(C,B,K,q),ye.scissor(U.copy(X).multiplyScalar(W).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(C){ye.setScissorTest(ee=C)},this.setOpaqueSort=function(C){D=C},this.setTransparentSort=function(C){I=C},this.getClearColor=function(C){return C.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(C=!0,B=!0,K=!0){let q=0;if(C){let j=!1;if(M!==null){const me=M.texture.format;j=me===pE||me===dE||me===hE}if(j){const me=M.texture.type,Pe=me===zs||me===ws||me===R_||me===Do||me===cE||me===fE,je=Xe.getClearColor(),Ne=Xe.getClearAlpha(),ke=je.r,Ye=je.g,Qe=je.b;Pe?(p[0]=ke,p[1]=Ye,p[2]=Qe,p[3]=Ne,H.clearBufferuiv(H.COLOR,0,p)):(m[0]=ke,m[1]=Ye,m[2]=Qe,m[3]=Ne,H.clearBufferiv(H.COLOR,0,m))}else q|=H.COLOR_BUFFER_BIT}B&&(q|=H.DEPTH_BUFFER_BIT),K&&(q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",he,!1),fe.dispose(),Le.dispose(),le.dispose(),T.dispose(),z.dispose(),re.dispose(),$e.dispose(),st.dispose(),Me.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Ce),Ee.removeEventListener("sessionend",ze),ge&&(ge.dispose(),ge=null),ae.stop()};function ue(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=G.autoReset,B=Z.enabled,K=Z.autoUpdate,q=Z.needsUpdate,j=Z.type;gt(),G.autoReset=C,Z.enabled=B,Z.autoUpdate=K,Z.needsUpdate=q,Z.type=j}function he(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function de(C){const B=C.target;B.removeEventListener("dispose",de),Ge(B)}function Ge(C){He(C),le.remove(C)}function He(C){const B=le.get(C).programs;B!==void 0&&(B.forEach(function(K){Me.releaseProgram(K)}),C.isShaderMaterial&&Me.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,K,q,j,me){B===null&&(B=xe);const Pe=j.isMesh&&j.matrixWorld.determinant()<0,je=Rt(C,B,K,q,j);ye.setMaterial(q,Pe);let Ne=K.index,ke=1;if(q.wireframe===!0){if(Ne=ie.getWireframeAttribute(K),Ne===void 0)return;ke=2}const Ye=K.drawRange,Qe=K.attributes.position;let It=Ye.start*ke,on=(Ye.start+Ye.count)*ke;me!==null&&(It=Math.max(It,me.start*ke),on=Math.min(on,(me.start+me.count)*ke)),Ne!==null?(It=Math.max(It,0),on=Math.min(on,Ne.count)):Qe!=null&&(It=Math.max(It,0),on=Math.min(on,Qe.count));const xt=on-It;if(xt<0||xt===1/0)return;$e.setup(j,q,je,K,Ne);let kn,Mt=qe;if(Ne!==null&&(kn=ne.get(Ne),Mt=Ue,Mt.setIndex(kn)),j.isMesh)q.wireframe===!0?(ye.setLineWidth(q.wireframeLinewidth*ce()),Mt.setMode(H.LINES)):Mt.setMode(H.TRIANGLES);else if(j.isLine){let Ke=q.linewidth;Ke===void 0&&(Ke=1),ye.setLineWidth(Ke*ce()),j.isLineSegments?Mt.setMode(H.LINES):j.isLineLoop?Mt.setMode(H.LINE_LOOP):Mt.setMode(H.LINE_STRIP)}else j.isPoints?Mt.setMode(H.POINTS):j.isSprite&&Mt.setMode(H.TRIANGLES);if(j.isBatchedMesh)Mt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)Mt.renderInstances(It,xt,j.count);else if(K.isInstancedBufferGeometry){const Ke=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,nd=Math.min(K.instanceCount,Ke);Mt.renderInstances(It,xt,nd)}else Mt.render(It,xt)};function ft(C,B,K){C.transparent===!0&&C.side===fr&&C.forceSinglePass===!1?(C.side=Zn,C.needsUpdate=!0,Ct(C,B,K),C.side=Ys,C.needsUpdate=!0,Ct(C,B,K),C.side=fr):Ct(C,B,K)}this.compile=function(C,B,K=null){K===null&&(K=C),g=Le.get(K),g.init(),v.push(g),K.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),C!==K&&C.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights(x._useLegacyLights);const q=new Set;return C.traverse(function(j){const me=j.material;if(me)if(Array.isArray(me))for(let Pe=0;Pe<me.length;Pe++){const je=me[Pe];ft(je,K,j),q.add(je)}else ft(me,K,j),q.add(me)}),v.pop(),g=null,q},this.compileAsync=function(C,B,K=null){const q=this.compile(C,B,K);return new Promise(j=>{function me(){if(q.forEach(function(Pe){le.get(Pe).currentProgram.isReady()&&q.delete(Pe)}),q.size===0){j(C);return}setTimeout(me,10)}_e.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let pt=null;function Ie(C){pt&&pt(C)}function Ce(){ae.stop()}function ze(){ae.start()}const ae=new PE;ae.setAnimationLoop(Ie),typeof self<"u"&&ae.setContext(self),this.setAnimationLoop=function(C){pt=C,Ee.setAnimationLoop(C),C===null?ae.stop():ae.start()},Ee.addEventListener("sessionstart",Ce),Ee.addEventListener("sessionend",ze),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(B),B=Ee.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,B,M),g=Le.get(C,v.length),g.init(),v.push(g),ve.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$.setFromProjectionMatrix(ve),se=this.localClippingEnabled,Q=Be.init(this.clippingPlanes,se),_=fe.get(C,d.length),_.init(),d.push(_),We(C,B,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(D,I),this.info.render.frame++,Q===!0&&Be.beginShadows();const K=g.state.shadowsArray;if(Z.render(K,C,B),Q===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Xe.render(_,C),g.setupLights(x._useLegacyLights),B.isArrayCamera){const q=B.cameras;for(let j=0,me=q.length;j<me;j++){const Pe=q[j];Ve(_,C,Pe,Pe.viewport)}}else Ve(_,C,B);M!==null&&(R.updateMultisampleRenderTarget(M),R.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(x,C,B),$e.resetDefaultState(),P=-1,S=null,v.pop(),v.length>0?g=v[v.length-1]:g=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function We(C,B,K,q){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||$.intersectsSprite(C)){q&&te.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ve);const Pe=re.update(C),je=C.material;je.visible&&_.push(C,Pe,je,K,te.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||$.intersectsObject(C))){const Pe=re.update(C),je=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),te.copy(C.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),te.copy(Pe.boundingSphere.center)),te.applyMatrix4(C.matrixWorld).applyMatrix4(ve)),Array.isArray(je)){const Ne=Pe.groups;for(let ke=0,Ye=Ne.length;ke<Ye;ke++){const Qe=Ne[ke],It=je[Qe.materialIndex];It&&It.visible&&_.push(C,Pe,It,K,te.z,Qe)}}else je.visible&&_.push(C,Pe,je,K,te.z,null)}}const me=C.children;for(let Pe=0,je=me.length;Pe<je;Pe++)We(me[Pe],B,K,q)}function Ve(C,B,K,q){const j=C.opaque,me=C.transmissive,Pe=C.transparent;g.setupLightsView(K),Q===!0&&Be.setGlobalState(x.clippingPlanes,K),me.length>0&&Ze(j,me,B,K),q&&ye.viewport(E.copy(q)),j.length>0&&zt(j,B,K),me.length>0&&zt(me,B,K),Pe.length>0&&zt(Pe,B,K),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Ze(C,B,K,q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;const me=be.isWebGL2;ge===null&&(ge=new Go(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?ic:zs,minFilter:nc,samples:me?4:0})),x.getDrawingBufferSize(Fe),me?ge.setSize(Fe.x,Fe.y):ge.setSize(Jm(Fe.x),Jm(Fe.y));const Pe=x.getRenderTarget();x.setRenderTarget(ge),x.getClearColor(J),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const je=x.toneMapping;x.toneMapping=ks,zt(C,K,q),R.updateMultisampleRenderTarget(ge),R.updateRenderTargetMipmap(ge);let Ne=!1;for(let ke=0,Ye=B.length;ke<Ye;ke++){const Qe=B[ke],It=Qe.object,on=Qe.geometry,xt=Qe.material,kn=Qe.group;if(xt.side===fr&&It.layers.test(q.layers)){const Mt=xt.side;xt.side=Zn,xt.needsUpdate=!0,ot(It,K,q,on,xt,kn),xt.side=Mt,xt.needsUpdate=!0,Ne=!0}}Ne===!0&&(R.updateMultisampleRenderTarget(ge),R.updateRenderTargetMipmap(ge)),x.setRenderTarget(Pe),x.setClearColor(J,L),x.toneMapping=je}function zt(C,B,K){const q=B.isScene===!0?B.overrideMaterial:null;for(let j=0,me=C.length;j<me;j++){const Pe=C[j],je=Pe.object,Ne=Pe.geometry,ke=q===null?Pe.material:q,Ye=Pe.group;je.layers.test(K.layers)&&ot(je,B,K,Ne,ke,Ye)}}function ot(C,B,K,q,j,me){C.onBeforeRender(x,B,K,q,j,me),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(x,B,K,q,C,me),j.transparent===!0&&j.side===fr&&j.forceSinglePass===!1?(j.side=Zn,j.needsUpdate=!0,x.renderBufferDirect(K,B,q,j,C,me),j.side=Ys,j.needsUpdate=!0,x.renderBufferDirect(K,B,q,j,C,me),j.side=fr):x.renderBufferDirect(K,B,q,j,C,me),C.onAfterRender(x,B,K,q,j,me)}function Ct(C,B,K){B.isScene!==!0&&(B=xe);const q=le.get(C),j=g.state.lights,me=g.state.shadowsArray,Pe=j.state.version,je=Me.getParameters(C,j.state,me,B,K),Ne=Me.getProgramCacheKey(je);let ke=q.programs;q.environment=C.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(C.isMeshStandardMaterial?z:T).get(C.envMap||q.environment),ke===void 0&&(C.addEventListener("dispose",de),ke=new Map,q.programs=ke);let Ye=ke.get(Ne);if(Ye!==void 0){if(q.currentProgram===Ye&&q.lightsStateVersion===Pe)return Pt(C,je),Ye}else je.uniforms=Me.getUniforms(C),C.onBuild(K,je,x),C.onBeforeCompile(je,x),Ye=Me.acquireProgram(je,Ne),ke.set(Ne,Ye),q.uniforms=je.uniforms;const Qe=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Qe.clippingPlanes=Be.uniform),Pt(C,je),q.needsLights=mi(C),q.lightsStateVersion=Pe,q.needsLights&&(Qe.ambientLightColor.value=j.state.ambient,Qe.lightProbe.value=j.state.probe,Qe.directionalLights.value=j.state.directional,Qe.directionalLightShadows.value=j.state.directionalShadow,Qe.spotLights.value=j.state.spot,Qe.spotLightShadows.value=j.state.spotShadow,Qe.rectAreaLights.value=j.state.rectArea,Qe.ltc_1.value=j.state.rectAreaLTC1,Qe.ltc_2.value=j.state.rectAreaLTC2,Qe.pointLights.value=j.state.point,Qe.pointLightShadows.value=j.state.pointShadow,Qe.hemisphereLights.value=j.state.hemi,Qe.directionalShadowMap.value=j.state.directionalShadowMap,Qe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Qe.spotShadowMap.value=j.state.spotShadowMap,Qe.spotLightMatrix.value=j.state.spotLightMatrix,Qe.spotLightMap.value=j.state.spotLightMap,Qe.pointShadowMap.value=j.state.pointShadowMap,Qe.pointShadowMatrix.value=j.state.pointShadowMatrix),q.currentProgram=Ye,q.uniformsList=null,Ye}function sn(C){if(C.uniformsList===null){const B=C.currentProgram.getUniforms();C.uniformsList=Vf.seqWithValue(B.seq,C.uniforms)}return C.uniformsList}function Pt(C,B){const K=le.get(C);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function Rt(C,B,K,q,j){B.isScene!==!0&&(B=xe),R.resetTextureUnits();const me=B.fog,Pe=q.isMeshStandardMaterial?B.environment:null,je=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:ts,Ne=(q.isMeshStandardMaterial?z:T).get(q.envMap||Pe),ke=q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ye=!!K.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Qe=!!K.morphAttributes.position,It=!!K.morphAttributes.normal,on=!!K.morphAttributes.color;let xt=ks;q.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(xt=x.toneMapping);const kn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Mt=kn!==void 0?kn.length:0,Ke=le.get(q),nd=g.state.lights;if(Q===!0&&(se===!0||C!==S)){const ki=C===S&&q.id===P;Be.setState(q,C,ki)}let jt=!1;q.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==nd.state.version||Ke.outputColorSpace!==je||j.isBatchedMesh&&Ke.batching===!1||!j.isBatchedMesh&&Ke.batching===!0||j.isInstancedMesh&&Ke.instancing===!1||!j.isInstancedMesh&&Ke.instancing===!0||j.isSkinnedMesh&&Ke.skinning===!1||!j.isSkinnedMesh&&Ke.skinning===!0||j.isInstancedMesh&&Ke.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ke.instancingColor===!1&&j.instanceColor!==null||Ke.envMap!==Ne||q.fog===!0&&Ke.fog!==me||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Be.numPlanes||Ke.numIntersection!==Be.numIntersection)||Ke.vertexAlphas!==ke||Ke.vertexTangents!==Ye||Ke.morphTargets!==Qe||Ke.morphNormals!==It||Ke.morphColors!==on||Ke.toneMapping!==xt||be.isWebGL2===!0&&Ke.morphTargetsCount!==Mt)&&(jt=!0):(jt=!0,Ke.__version=q.version);let Js=Ke.currentProgram;jt===!0&&(Js=Ct(q,B,j));let O_=!1,Cl=!1,id=!1;const An=Js.getUniforms(),eo=Ke.uniforms;if(ye.useProgram(Js.program)&&(O_=!0,Cl=!0,id=!0),q.id!==P&&(P=q.id,Cl=!0),O_||S!==C){An.setValue(H,"projectionMatrix",C.projectionMatrix),An.setValue(H,"viewMatrix",C.matrixWorldInverse);const ki=An.map.cameraPosition;ki!==void 0&&ki.setValue(H,te.setFromMatrixPosition(C.matrixWorld)),be.logarithmicDepthBuffer&&An.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&An.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,Cl=!0,id=!0)}if(j.isSkinnedMesh){An.setOptional(H,j,"bindMatrix"),An.setOptional(H,j,"bindMatrixInverse");const ki=j.skeleton;ki&&(be.floatVertexTextures?(ki.boneTexture===null&&ki.computeBoneTexture(),An.setValue(H,"boneTexture",ki.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(An.setOptional(H,j,"batchingTexture"),An.setValue(H,"batchingTexture",j._matricesTexture,R));const rd=K.morphAttributes;if((rd.position!==void 0||rd.normal!==void 0||rd.color!==void 0&&be.isWebGL2===!0)&&De.update(j,K,Js),(Cl||Ke.receiveShadow!==j.receiveShadow)&&(Ke.receiveShadow=j.receiveShadow,An.setValue(H,"receiveShadow",j.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(eo.envMap.value=Ne,eo.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Cl&&(An.setValue(H,"toneMappingExposure",x.toneMappingExposure),Ke.needsLights&&vt(eo,id),me&&q.fog===!0&&pe.refreshFogUniforms(eo,me),pe.refreshMaterialUniforms(eo,q,W,V,ge),Vf.upload(H,sn(Ke),eo,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Vf.upload(H,sn(Ke),eo,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&An.setValue(H,"center",j.center),An.setValue(H,"modelViewMatrix",j.modelViewMatrix),An.setValue(H,"normalMatrix",j.normalMatrix),An.setValue(H,"modelMatrix",j.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const ki=q.uniformsGroups;for(let sd=0,$E=ki.length;sd<$E;sd++)if(be.isWebGL2){const F_=ki[sd];st.update(F_,Js),st.bind(F_,Js)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Js}function vt(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function mi(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,B,K){le.get(C.texture).__webglTexture=B,le.get(C.depthTexture).__webglTexture=K;const q=le.get(C);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=K===void 0,q.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,B){const K=le.get(C);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(C,B=0,K=0){M=C,A=B,w=K;let q=!0,j=null,me=!1,Pe=!1;if(C){const Ne=le.get(C);Ne.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(H.FRAMEBUFFER,null),q=!1):Ne.__webglFramebuffer===void 0?R.setupRenderTarget(C):Ne.__hasExternalTextures&&R.rebindTextures(C,le.get(C.texture).__webglTexture,le.get(C.depthTexture).__webglTexture);const ke=C.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Pe=!0);const Ye=le.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ye[B])?j=Ye[B][K]:j=Ye[B],me=!0):be.isWebGL2&&C.samples>0&&R.useMultisampledRTT(C)===!1?j=le.get(C).__webglMultisampledFramebuffer:Array.isArray(Ye)?j=Ye[K]:j=Ye,E.copy(C.viewport),U.copy(C.scissor),O=C.scissorTest}else E.copy(b).multiplyScalar(W).floor(),U.copy(X).multiplyScalar(W).floor(),O=ee;if(ye.bindFramebuffer(H.FRAMEBUFFER,j)&&be.drawBuffers&&q&&ye.drawBuffers(C,j),ye.viewport(E),ye.scissor(U),ye.setScissorTest(O),me){const Ne=le.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ne.__webglTexture,K)}else if(Pe){const Ne=le.get(C.texture),ke=B||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ne.__webglTexture,K||0,ke)}P=-1},this.readRenderTargetPixels=function(C,B,K,q,j,me,Pe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pe!==void 0&&(je=je[Pe]),je){ye.bindFramebuffer(H.FRAMEBUFFER,je);try{const Ne=C.texture,ke=Ne.format,Ye=Ne.type;if(ke!==dr&&we.convert(ke)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Qe=Ye===ic&&(_e.has("EXT_color_buffer_half_float")||be.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Ye!==zs&&we.convert(Ye)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ye===Ts&&(be.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-q&&K>=0&&K<=C.height-j&&H.readPixels(B,K,q,j,we.convert(ke),we.convert(Ye),me)}finally{const Ne=M!==null?le.get(M).__webglFramebuffer:null;ye.bindFramebuffer(H.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(C,B,K=0){const q=Math.pow(2,-K),j=Math.floor(B.image.width*q),me=Math.floor(B.image.height*q);R.setTexture2D(B,0),H.copyTexSubImage2D(H.TEXTURE_2D,K,0,0,C.x,C.y,j,me),ye.unbindTexture()},this.copyTextureToTexture=function(C,B,K,q=0){const j=B.image.width,me=B.image.height,Pe=we.convert(K.format),je=we.convert(K.type);R.setTexture2D(K,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,K.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,K.unpackAlignment),B.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,q,C.x,C.y,j,me,Pe,je,B.image.data):B.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,q,C.x,C.y,B.mipmaps[0].width,B.mipmaps[0].height,Pe,B.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,q,C.x,C.y,Pe,je,B.image),q===0&&K.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(C,B,K,q,j=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=C.max.x-C.min.x+1,Pe=C.max.y-C.min.y+1,je=C.max.z-C.min.z+1,Ne=we.convert(q.format),ke=we.convert(q.type);let Ye;if(q.isData3DTexture)R.setTexture3D(q,0),Ye=H.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)R.setTexture2DArray(q,0),Ye=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const Qe=H.getParameter(H.UNPACK_ROW_LENGTH),It=H.getParameter(H.UNPACK_IMAGE_HEIGHT),on=H.getParameter(H.UNPACK_SKIP_PIXELS),xt=H.getParameter(H.UNPACK_SKIP_ROWS),kn=H.getParameter(H.UNPACK_SKIP_IMAGES),Mt=K.isCompressedTexture?K.mipmaps[j]:K.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,Mt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Mt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,C.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,C.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,C.min.z),K.isDataTexture||K.isData3DTexture?H.texSubImage3D(Ye,j,B.x,B.y,B.z,me,Pe,je,Ne,ke,Mt.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ye,j,B.x,B.y,B.z,me,Pe,je,Ne,Mt.data)):H.texSubImage3D(Ye,j,B.x,B.y,B.z,me,Pe,je,Ne,ke,Mt),H.pixelStorei(H.UNPACK_ROW_LENGTH,Qe),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,It),H.pixelStorei(H.UNPACK_SKIP_PIXELS,on),H.pixelStorei(H.UNPACK_SKIP_ROWS,xt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,kn),j===0&&q.generateMipmaps&&H.generateMipmap(Ye),ye.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),ye.unbindTexture()},this.resetState=function(){A=0,w=0,M=null,ye.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===b_?"display-p3":"srgb",t.unpackColorSpace=Et.workingColorSpace===Jh?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Sn?Uo:gE}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Uo?Sn:ts}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class UD extends FE{}UD.prototype.isWebGL1Renderer=!0;class ID extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class OD{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Km,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Bs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new F;class Ph{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Bn.fromBufferAttribute(this,t),Bn.applyMatrix4(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bn.fromBufferAttribute(this,t),Bn.applyNormalMatrix(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bn.fromBufferAttribute(this,t),Bn.transformDirection(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Hr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Hr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Hr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Hr(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),r=Tt(r,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ph(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class kE extends Qs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let pa;const Xl=new F,ma=new F,ga=new F,_a=new tt,jl=new tt,zE=new Ut,pf=new F,Yl=new F,mf=new F,Qx=new tt,Mp=new tt,Jx=new tt;class FD extends vn{constructor(e=new kE){if(super(),this.isSprite=!0,this.type="Sprite",pa===void 0){pa=new Zt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new OD(t,5);pa.setIndex([0,1,2,0,2,3]),pa.setAttribute("position",new Ph(i,3,0,!1)),pa.setAttribute("uv",new Ph(i,2,3,!1))}this.geometry=pa,this.material=e,this.center=new tt(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ma.setFromMatrixScale(this.matrixWorld),zE.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ga.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ma.multiplyScalar(-ga.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;gf(pf.set(-.5,-.5,0),ga,o,ma,r,s),gf(Yl.set(.5,-.5,0),ga,o,ma,r,s),gf(mf.set(.5,.5,0),ga,o,ma,r,s),Qx.set(0,0),Mp.set(1,0),Jx.set(1,1);let a=e.ray.intersectTriangle(pf,Yl,mf,!1,Xl);if(a===null&&(gf(Yl.set(-.5,.5,0),ga,o,ma,r,s),Mp.set(0,1),a=e.ray.intersectTriangle(pf,mf,Yl,!1,Xl),a===null))return;const l=e.ray.origin.distanceTo(Xl);l<e.near||l>e.far||t.push({distance:l,point:Xl.clone(),uv:qi.getInterpolation(Xl,pf,Yl,mf,Qx,Mp,Jx,new tt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function gf(n,e,t,i,r,s){_a.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(jl.x=s*_a.x-r*_a.y,jl.y=r*_a.x+s*_a.y):jl.copy(_a),n.copy(e),n.x+=jl.x,n.y+=jl.y,n.applyMatrix4(zE)}class Lh extends Qs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ey=new F,ty=new F,ny=new Ut,Ep=new P_,_f=new hc;class tg extends vn{constructor(e=new Zt,t=new Lh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ey.fromBufferAttribute(t,r-1),ty.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ey.distanceTo(ty);e.setAttribute("lineDistance",new di(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_f.copy(i.boundingSphere),_f.applyMatrix4(r),_f.radius+=s,e.ray.intersectsSphere(_f)===!1)return;ny.copy(r).invert(),Ep.copy(e.ray).applyMatrix4(ny);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new F,c=new F,h=new F,f=new F,p=this.isLineSegments?2:1,m=i.index,g=i.attributes.position;if(m!==null){const d=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let x=d,y=v-1;x<y;x+=p){const A=m.getX(x),w=m.getX(x+1);if(u.fromBufferAttribute(g,A),c.fromBufferAttribute(g,w),Ep.distanceSqToSegment(u,c,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let x=d,y=v-1;x<y;x+=p){if(u.fromBufferAttribute(g,x),c.fromBufferAttribute(g,x+1),Ep.distanceSqToSegment(u,c,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class kD extends Qs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const iy=new Ut,ng=new P_,vf=new hc,xf=new F;class ql extends vn{constructor(e=new Zt,t=new kD){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vf.copy(i.boundingSphere),vf.applyMatrix4(r),vf.radius+=s,e.ray.intersectsSphere(vf)===!1)return;iy.copy(r).invert(),ng.copy(e.ray).applyMatrix4(iy);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let m=f,_=p;m<_;m++){const g=u.getX(m);xf.fromBufferAttribute(h,g),ry(xf,g,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let m=f,_=p;m<_;m++)xf.fromBufferAttribute(h,m),ry(xf,m,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ry(n,e,t,i,r,s,o){const a=ng.distanceSqToPoint(n);if(a<t){const l=new F;ng.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class zD extends hi{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class U_ extends Zt{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],u=[],c=[];let h=e;const f=(t-e)/r,p=new F,m=new tt;for(let _=0;_<=r;_++){for(let g=0;g<=i;g++){const d=s+g/i*o;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),u.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,c.push(m.x,m.y)}h+=f}for(let _=0;_<r;_++){const g=_*(i+1);for(let d=0;d<i;d++){const v=d+g,x=v,y=v+i+1,A=v+i+2,w=v+1;a.push(x,y,w),a.push(y,A,w)}}this.setIndex(a),this.setAttribute("position",new di(l,3)),this.setAttribute("normal",new di(u,3)),this.setAttribute("uv",new di(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new U_(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Sl extends Zt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],h=new F,f=new F,p=[],m=[],_=[],g=[];for(let d=0;d<=i;d++){const v=[],x=d/i;let y=0;d===0&&o===0?y=.5/t:d===i&&l===Math.PI&&(y=-.5/t);for(let A=0;A<=t;A++){const w=A/t;h.x=-e*Math.cos(r+w*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(r+w*s)*Math.sin(o+x*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),g.push(w+y,1-x),v.push(u++)}c.push(v)}for(let d=0;d<i;d++)for(let v=0;v<t;v++){const x=c[d][v+1],y=c[d][v],A=c[d+1][v],w=c[d+1][v+1];(d!==0||o>0)&&p.push(x,y,w),(d!==i-1||l<Math.PI)&&p.push(y,A,w)}this.setIndex(p),this.setAttribute("position",new di(m,3)),this.setAttribute("normal",new di(_,3)),this.setAttribute("uv",new di(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class BD extends Qs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_E,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class BE extends vn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const wp=new Ut,sy=new F,oy=new F;class HD{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new L_,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;sy.setFromMatrixPosition(e.matrixWorld),t.position.copy(sy),oy.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(oy),t.updateMatrixWorld(),wp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wp),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ay=new Ut,$l=new F,Tp=new F;class VD extends HD{constructor(){super(new wi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new kt(2,1,1,1),new kt(0,1,1,1),new kt(3,1,1,1),new kt(1,1,1,1),new kt(3,0,1,1),new kt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),$l.setFromMatrixPosition(e.matrixWorld),i.position.copy($l),Tp.copy(i.position),Tp.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Tp),i.updateMatrixWorld(),r.makeTranslation(-$l.x,-$l.y,-$l.z),ay.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ay)}}class GD extends BE{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new VD}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class WD extends BE{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class FN{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(qn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:C_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=C_);class XD extends vn{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new tt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const va=new F,ly=new Ut,uy=new Ut,cy=new F,fy=new F;class kN{constructor(e={}){const t=this;let i,r,s,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:r}},this.render=function(p,m){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),m.parent===null&&m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),ly.copy(m.matrixWorldInverse),uy.multiplyMatrices(m.projectionMatrix,ly),u(p,p,m),f(p)},this.setSize=function(p,m){i=p,r=m,s=i/2,o=r/2,l.style.width=p+"px",l.style.height=m+"px"};function u(p,m,_){if(p.isCSS2DObject){va.setFromMatrixPosition(p.matrixWorld),va.applyMatrix4(uy);const g=p.visible===!0&&va.z>=-1&&va.z<=1&&p.layers.test(_.layers)===!0;if(p.element.style.display=g===!0?"":"none",g===!0){p.onBeforeRender(t,m,_);const v=p.element;v.style.transform="translate("+-100*p.center.x+"%,"+-100*p.center.y+"%)translate("+(va.x*s+s)+"px,"+(-va.y*o+o)+"px)",v.parentNode!==l&&l.appendChild(v),p.onAfterRender(t,m,_)}const d={distanceToCameraSquared:c(_,p)};a.objects.set(p,d)}for(let g=0,d=p.children.length;g<d;g++)u(p.children[g],m,_)}function c(p,m){return cy.setFromMatrixPosition(p.matrixWorld),fy.setFromMatrixPosition(m.matrixWorld),cy.distanceToSquared(fy)}function h(p){const m=[];return p.traverse(function(_){_.isCSS2DObject&&m.push(_)}),m}function f(p){const m=h(p).sort(function(g,d){if(g.renderOrder!==d.renderOrder)return d.renderOrder-g.renderOrder;const v=a.objects.get(g).distanceToCameraSquared,x=a.objects.get(d).distanceToCameraSquared;return v-x}),_=m.length;for(let g=0,d=m.length;g<d;g++)m[g].element.style.zIndex=_-g}}}const HE=24612005e-1,zN=I_(new Date(Date.UTC(2e3,0,1))),BN=I_(new Date(Date.UTC(2050,11,31)));function I_(n){return n.getTime()/864e5+24405875e-1}function HN(n){return new Date((n-24405875e-1)*864e5)}function VE(n){return .9856076686/Math.pow(n,1.5)}function jD(n,e){return((n.ma+VE(n.a)*(e-(n.epoch??HE)))%360+360)%360}const il=10,Vr=Math.PI/180,Ap=2*Math.PI;function GE(n,e){n=(n%Ap+Ap)%Ap;let t=e<.8?n:Math.PI;for(let i=0;i<15;i++){const r=(t-e*Math.sin(t)-n)/(1-e*Math.cos(t));if(t-=r,Math.abs(r)<1e-9)break}return t}function WE(n,e,t,i){const r=t.w*Vr,s=t.om*Vr,o=t.i*Vr,a=Math.cos(r),l=Math.sin(r),u=Math.cos(s),c=Math.sin(s),h=Math.cos(o),f=Math.sin(o),p=(u*a-c*l*h)*n+(-u*l-c*a*h)*e,m=(c*a+u*l*h)*n+(-c*l+u*a*h)*e,_=l*f*n+a*f*e;return i.set(p*il,_*il,-m*il)}function XE(n,e){return[n.a*(Math.cos(e)-n.e),n.a*Math.sqrt(1-n.e*n.e)*Math.sin(e)]}function YD(n,e=n.ma,t=new F){const[i,r]=XE(n,GE(e*Vr,n.e));return WE(i,r,n,t)}function ig(n,e=180){const t=[];for(let i=0;i<=e;i++){const[r,s]=XE(n,2*Math.PI*i/e);t.push(WE(r,s,n,new F))}return t}function qD(n,e=4482730,t=.6){const i=new Zt().setFromPoints(ig(n));return new tg(i,new Lh({color:e,transparent:!0,opacity:t}))}const Cp=11;function $D(n){const e=new Float64Array(n.length*Cp);return n.forEach((t,i)=>{const r=t.w*Vr,s=t.om*Vr,o=t.i*Vr,a=Math.cos(r),l=Math.sin(r),u=Math.cos(s),c=Math.sin(s),h=Math.cos(o),f=Math.sin(o),p=i*Cp;e[p]=u*a-c*l*h,e[p+1]=c*a+u*l*h,e[p+2]=l*f,e[p+3]=-u*l-c*a*h,e[p+4]=-c*l+u*a*h,e[p+5]=a*f,e[p+6]=t.a,e[p+7]=t.e,e[p+8]=t.a*Math.sqrt(1-t.e*t.e);const m=VE(t.a)*Vr;e[p+10]=m,e[p+9]=t.ma*Vr-m*(t.epoch??HE)}),function(i,r){for(let s=0,o=0;s<n.length;s++,o+=Cp){const a=e[o+6],l=e[o+7],u=GE(e[o+9]+e[o+10]*i,l),c=a*(Math.cos(u)-l),h=e[o+8]*Math.sin(u),f=e[o]*c+e[o+3]*h,p=e[o+1]*c+e[o+4]*h,m=e[o+2]*c+e[o+5]*h;r[s*3]=f*il,r[s*3+1]=m*il,r[s*3+2]=-p*il}}}const KD=[{name:"Mercury",a:.38709927,e:.20563593,i:7.00497902,L:252.2503235,lp:77.45779628,om:48.33076593,dL:149472.67411175,radius:.15,color:10132122},{name:"Venus",a:.72333566,e:.00677672,i:3.39467605,L:181.9790995,lp:131.60246718,om:76.67984255,dL:58517.81538729,radius:.25,color:15259560},{name:"Earth",a:1.00000261,e:.01671123,i:0,L:100.46457166,lp:102.93768193,om:0,dL:35999.37244981,radius:.27,color:3900150},{name:"Mars",a:1.52371034,e:.0933941,i:1.84969142,L:-4.55343205,lp:-23.94362959,om:49.55953891,dL:19140.30268499,radius:.2,color:14246970},{name:"Jupiter",a:5.202887,e:.04838624,i:1.30439695,L:34.39644051,lp:14.72847983,om:100.47390909,dL:3034.74612775,radius:.6,color:14203274},{name:"Saturn",a:9.53667594,e:.05386179,i:2.48599187,L:49.95424423,lp:92.59887831,om:113.66242448,dL:1222.49362201,radius:.52,color:14929819,ring:!0},{name:"Uranus",a:19.18916464,e:.04725744,i:.77263783,L:313.23810451,lp:170.9542763,om:74.01692503,dL:428.48202785,radius:.4,color:10475744},{name:"Neptune",a:30.06992276,e:.00859048,i:1.77004347,L:-55.12002969,lp:44.96476227,om:131.78422574,dL:218.45945325,radius:.4,color:5205976}],ZD=[{name:"Ceres",dwarf:!0,a:2.766,e:.0797,i:10.59,om:80.25,w:73.29,ma:274.42,radius:.12,color:12103844},{name:"Pluto",dwarf:!0,a:39.48211675,e:.2488273,i:17.14001206,L:238.92903833,lp:224.06891629,om:110.30393684,dL:145.20780515,radius:.14,color:14271397},{name:"Eris",dwarf:!0,a:67.93,e:.4382,i:43.93,om:36,w:150.79,ma:211.77,radius:.14,color:14540253,faint:!0},{name:"Haumea",dwarf:!0,a:43.06,e:.1944,i:28.21,om:121.79,w:240.69,ma:223.21,radius:.12,color:13421772,faint:!0},{name:"Makemake",dwarf:!0,a:45.57,e:.1589,i:29.03,om:79.29,w:297.09,ma:169.94,radius:.12,color:14199178,faint:!0}],jE=[...KD,...ZD],hy=n=>(n%360+360)%360;function rg(n,e){if(n.L==null)return{...n,ma:jD(n,e)};const t=(e-2451545)/36525,i=n.L+n.dL*t;return{a:n.a,e:n.e,i:n.i,om:n.om,w:hy(n.lp-n.om),ma:hy(i-n.lp)}}const QD=329226;function JD(n){const e=new ri(new Sl(.4,32,16),new dc({color:16763989}));return n.add(e),n.add(new GD(16777215,3,0,0)),n.add(new WD(16777215,.25)),e}function eN(n,e,{labels:t=!0}={}){return jE.map(i=>{const r=i.name==="Earth",s=!!i.dwarf,o=r?3407769:s?9076586:6710886,a=r?.9:i.faint?.25:s?.4:.6,l=qD(rg(i,e),o,a);n.add(l);const u=new ri(new Sl(i.radius,32,16),new BD({color:i.color,roughness:.9,metalness:0}));if(i.ring){const h=new ri(new U_(i.radius*1.3,i.radius*2.3,64),new dc({color:13482890,side:fr,transparent:!0,opacity:.55}));h.rotation.x=-Math.PI/2+.47,u.add(h)}n.add(u);let c=null;if(t){const h=document.createElement("div");h.textContent=i.name,Object.assign(h.style,{font:"11px system-ui, sans-serif",color:s?"#a9a291":"#cfd6e6",letterSpacing:"0.04em",textShadow:"0 0 4px #000",whiteSpace:"nowrap",opacity:i.faint?"0.7":"1"}),c=new XD(h),c.position.set(0,i.radius+.35,0),u.add(c)}return{planet:i,body:u,label:c,ring:l}})}const tN=5,nN=new Set(["99942","101955","65803"]);function iN(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0)%tN===0}function rN(n,e){var r,s;const t=((r=e==null?void 0:e.A)==null?void 0:r.threshold)??.5,i=((s=e==null?void 0:e.B)==null?void 0:s.threshold)??.5;return n.pha===1||(n.pA??0)>=t||(n.pB??0)>=i||nN.has(String(n.pdes))}function sN(n,e){return n.filter(t=>t.e<1).filter(t=>rN(t,e)||iN(String(t.pdes))).sort((t,i)=>(t.pA??0)-(i.pA??0))}const oN=`
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}
float fbm4(vec3 p) {
  float f = 0.0, a = 0.5;
  for (int k = 0; k < 4; k++) { f += a * snoise(p); p = p * 2.03 + 17.0; a *= 0.5; }
  return f;
}
float fbm2(vec3 p) { return 0.6667 * snoise(p) + 0.3333 * snoise(p * 2.1 + 5.0); }
`,aN=`
varying vec3 vObj;
varying vec3 vNormalW;
varying vec3 vPosW;
void main() {
  vObj = normalize(position);
  vNormalW = normalize(mat3(modelMatrix) * normal);
  vec4 w = modelMatrix * vec4(position, 1.0);
  vPosW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,lN=`
uniform vec3 uSunDir;
uniform vec3 uAccent;
uniform float uTime;
uniform float uOpacity;
varying vec3 vObj;
varying vec3 vNormalW;
varying vec3 vPosW;
${oN}
void main() {
  vec3 N = normalize(vNormalW);
  vec3 V = normalize(cameraPosition - vPosW);
  vec3 p = vObj;

  float h = fbm4(p * 1.7);
  float land = smoothstep(0.04, 0.10, h);
  float ice = smoothstep(0.80, 0.90, abs(p.y) + 0.05 * h);
  float detail = 0.5 + 0.5 * snoise(p * 7.0);
  vec3 ocean = mix(vec3(0.010, 0.035, 0.085), vec3(0.020, 0.075, 0.150), smoothstep(-0.4, 0.04, h));
  vec3 ground = mix(vec3(0.075, 0.13, 0.06), vec3(0.30, 0.25, 0.16), detail * smoothstep(0.10, 0.35, h));
  vec3 surf = mix(ocean, ground, land);
  surf = mix(surf, vec3(0.80, 0.85, 0.90), ice);

  float ndl = dot(N, uSunDir);
  float day = smoothstep(-0.12, 0.22, ndl);
  vec3 col = surf * (0.02 + 1.25 * max(ndl, 0.0));

  // sun glint on the water
  vec3 H = normalize(uSunDir + V);
  col += vec3(0.9, 0.85, 0.7) * pow(max(dot(N, H), 0.0), 60.0) * (1.0 - land) * (1.0 - ice) * day * 0.6;

  // thin drifting clouds (lit side only, faintly visible at night)
  float cl = smoothstep(0.15, 0.55, fbm2(p * 3.2 + vec3(uTime * 0.004, 0.0, 0.0)) + 0.15);
  col = mix(col, vec3(0.92) * (0.03 + max(ndl, 0.0)), cl * 0.55);

  // city lights on the night side: clustered on land, away from the poles
  // regions (low frequency) times specks (high frequency), so lights read as scattered towns
  float region = smoothstep(0.50, 0.78, 0.5 + 0.5 * fbm2(p * 12.0));
  float speck = smoothstep(0.60, 0.88, 0.5 + 0.5 * fbm2(p * 70.0));
  float city = land * (1.0 - ice) * region * speck * smoothstep(0.08, 0.30, h);
  col += vec3(1.0, 0.72, 0.40) * city * (1.0 - day) * (1.0 - cl * 0.7) * 1.2;

  // Fresnel rim: strong on the lit limb (the crescent), a faint blue line around the night side
  float fr = pow(1.0 - max(dot(N, V), 0.0), 3.0);
  col += uAccent * fr * (0.18 + 1.1 * smoothstep(-0.35, 0.45, ndl));

  gl_FragColor = vec4(col, uOpacity);
}`,uN=`
varying vec3 vNormalW;
varying vec3 vPosW;
void main() {
  vNormalW = normalize(mat3(modelMatrix) * normal);
  vec4 w = modelMatrix * vec4(position, 1.0);
  vPosW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,cN=`
uniform vec3 uSunDir;
uniform vec3 uAccent;
uniform float uOpacity;
varying vec3 vNormalW;
varying vec3 vPosW;
void main() {
  vec3 N = normalize(vNormalW);
  vec3 V = normalize(cameraPosition - vPosW);
  // -dot(N, V) is 0 at the shell's outer edge and ~0.49 where the view ray grazes the planet's limb
  float rim = pow(clamp(-dot(N, V) / 0.49, 0.0, 1.0), 2.2);
  float lit = 0.12 + 0.88 * smoothstep(-0.45, 0.55, dot(N, uSunDir));
  gl_FragColor = vec4(uAccent * rim * lit * 0.9 * uOpacity, 1.0);
}`;function fN(n){const e={uSunDir:{value:new F(1,0,0)},uAccent:{value:new et(5939967)},uTime:{value:0},uOpacity:{value:1}},t=new Mo,i=new Mo;i.rotation.z=23.44*Math.PI/180,t.add(i);const r=new ri(new Sl(n,128,96),new Pi({uniforms:e,vertexShader:aN,fragmentShader:lN}));i.add(r);const s=new ri(new Sl(n*1.14,96,64),new Pi({uniforms:e,vertexShader:uN,fragmentShader:cN,side:Zn,blending:tl,transparent:!0,depthWrite:!1}));return t.add(s),{group:t,uniforms:e,update(o,a){e.uTime.value=o,e.uSunDir.value.copy(a),r.rotation.y=o*.025},dispose(){r.geometry.dispose(),r.material.dispose(),s.geometry.dispose(),s.material.dispose()}}}const za=14.9,dy=12.95,YE=12.9,hN=.27,cs=Math.PI/180,dN=.05,py=()=>Math.min(window.devicePixelRatio||1,1.5),pN=n=>n*n*(3-2*n);function vi(n){return e=>{if(e<=n[0][0])return n[0][1];for(let t=0;t<n.length-1;t++){const[i,r]=n[t],[s,o]=n[t+1];if(e<=s)return r+(o-r)*pN((e-i)/(s-i))}return n[n.length-1][1]}}const Ba={dust:vi([[0,1],[1.6,0]]),count:vi([[1.2,0],[2.9,1]]),rings:vi([[1.3,0],[2.4,1]]),band:vi([[3,0],[3.6,1],[4.8,1],[5.3,0]]),haz:vi([[4.9,0],[5.6,1],[8.6,1],[9.2,0]]),apoDraw:vi([[6.9,0],[7.9,1]]),apoAlpha:vi([[6.75,0],[6.95,1],[8.4,1],[9,0]]),hidden:vi([[8.8,0],[9.8,1],[11.9,1],[12.6,0]]),measured:vi([[10.3,0],[10.8,1],[11.9,1],[12.4,0]]),launch:vi([[11.9,0],[12.8,1]]),thin:vi([[12,0],[12.8,1]]),stars:vi([[0,1],[12,1],[12.9,0]]),shift:vi([[3.4,0],[4,1],[11.9,1],[12.7,0]])},mN=.18;function my(n,e){const t=n.length,i=[],r=new Array(t);for(let s=0;s<t-1;s++)i[s]=(e[s+1]-e[s])/(n[s+1]-n[s]);r[0]=i[0],r[t-1]=i[t-2];for(let s=1;s<t-1;s++)r[s]=i[s-1]*i[s]<=0?0:(i[s-1]+i[s])/2;for(let s=0;s<t-1;s++){if(i[s]===0){r[s]=0,r[s+1]=0;continue}const o=r[s]/i[s],a=r[s+1]/i[s],l=o*o+a*a;if(l>9){const u=3/Math.sqrt(l);r[s]=u*o*i[s],r[s+1]=u*a*i[s]}}return s=>{if(s<=n[0])return e[0];if(s>=n[t-1])return e[t-1];let o=0;for(;s>n[o+1];)o++;const a=n[o+1]-n[o],l=(s-n[o])/a,u=l*l,c=u*l;return(2*c-3*u+1)*e[o]+(c-2*u+l)*a*r[o]+(-2*c+3*u)*e[o+1]+(c-u)*a*r[o+1]}}function gy(n,e){const t=Math.atan2(n.x,n.z),i=Math.atan2(e.x,e.z),r=new F,s=Math.hypot(25,35),o=Math.atan2(25,35),a=[n.clone().add(new F(0,.11,0)),.85,t+.62,12*cs],l=[[0,...a],[.4,...a],[1.25,n.clone(),3,t+1.5,20*cs],[2.6,n.clone().multiplyScalar(.3),85,t*.5+.4,55*cs],[3.8,n.clone().multiplyScalar(.8),30,t+.35,22*cs],[5.6,r,48,t*.5,38*cs],[7.5,r,36,t*.3,80*cs],[9.3,e.clone(),22,i+.45,32*cs],[11,e.clone(),9,i+.25,24*cs],[YE,r,s,0,o],[za,r,s,0,o]],u=l.map(f=>f[3]);for(let f=1;f<u.length;f++){for(;u[f]-u[f-1]>Math.PI;)u[f]-=2*Math.PI;for(;u[f]-u[f-1]<-Math.PI;)u[f]+=2*Math.PI}const c=l.map(f=>f[0]),h=f=>my(c,l.map(f));return{tx:h(f=>f[1].x),ty:h(f=>f[1].y),tz:h(f=>f[1].z),ld:h(f=>Math.log(f[2])),az:my(c,u),el:h(f=>f[4])}}function gN(){const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d"),i=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return i.addColorStop(0,"rgba(255,240,200,1)"),i.addColorStop(.12,"rgba(255,214,140,0.65)"),i.addColorStop(.4,"rgba(255,170,80,0.14)"),i.addColorStop(1,"rgba(255,150,60,0)"),t.fillStyle=i,t.fillRect(0,0,128,128),new zD(e)}const _y=`
uniform vec3 uColor;
uniform float uAlpha;
varying float vA;
void main() {
  float d = length(gl_PointCoord - 0.5);
  if (d > 0.5) discard;
  gl_FragColor = vec4(uColor, uAlpha * vA * (1.0 - smoothstep(0.15, 0.5, d)));
  #include <colorspace_fragment>
}`,_N=`
attribute float aReveal;
attribute float aInApp;
attribute float aPha;
attribute float aHidden;
uniform float uCount, uHaz, uHidden, uLaunch, uThin, uPR, uSafe, uTime;
uniform vec3 uBase, uRed, uGrey;
varying vec3 vColor;
varying float vAlpha;
void main() {
  float shown = step(aReveal, uCount);
  float hz = uHaz * aPha;
  float hd = uHidden * aHidden;
  float red = max(hz, hd);
  vec3 col = mix(uBase, uRed, red);
  float size = mix(1.8, 3.4, hz);
  size = mix(size, 4.4 + 0.9 * sin(uTime * 2.6 + aReveal * 40.0), hd);
  float focus = max(uHaz, uHidden);
  float a = 0.85 * mix(1.0, 0.22 + 0.78 * red, focus);
  // launch: become the app's first replay frame (opaque grey, the app's safe size on screen)
  col = mix(col, uGrey, uLaunch);
  float px = mix(size * uPR, uSafe, uLaunch);
  a = mix(a, 1.0, uLaunch) * shown * mix(1.0, aInApp, uThin);
  vColor = col;
  vAlpha = a;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = a < 0.004 ? 0.0 : px;
}`,vN=`
uniform float uLaunch;
varying vec3 vColor;
varying float vAlpha;
void main() {
  float d = length(gl_PointCoord - 0.5);
  if (d > 0.484) discard; // the app's dot sprite edge (alphaTest 0.5 on a radius 31/64 disc)
  float a = vAlpha * mix(1.0 - smoothstep(0.2, 0.484, d), 1.0, uLaunch);
  if (a < 0.003) discard;
  gl_FragColor = vec4(vColor, a);
  #include <colorspace_fragment>
}`,xN=`
uniform float uSize;
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = uSize;
}`,yN=`
uniform vec3 uColor;
uniform float uAlpha;
void main() {
  float d = length(gl_PointCoord - 0.5);
  float ring = smoothstep(0.34, 0.39, d) * (1.0 - smoothstep(0.43, 0.48, d));
  if (ring * uAlpha < 0.01) discard;
  gl_FragColor = vec4(uColor, ring * uAlpha);
  #include <colorspace_fragment>
}`;function SN(n,e){const t=new FE({canvas:n,antialias:!0,powerPreference:"high-performance"});let i=py();t.setPixelRatio(i);const r=new ID;r.background=new et(QD);const s=new wi(55,1,.1,5e3),o=I_(new Date);JD(r);const a=eN(r,o,{labels:!1});for(const{planet:te,body:xe}of a)YD(rg(te,o),void 0,xe.position);const l=a.map(({ring:te})=>({mat:te.material,base:te.material.opacity})),u=a.find(te=>te.planet.name==="Earth").body,c=u.position.clone(),h=c.clone().negate().normalize(),f=fN(hN);f.group.position.copy(c),r.add(f.group),u.visible=!1;const p=new FD(new kE({map:gN(),color:16777215,blending:tl,transparent:!0,depthWrite:!1}));p.scale.setScalar(4.2),r.add(p);const m=2500,_=new Float32Array(m*3),g=new Float32Array(m),d=new F;for(let te=0;te<m;te++)d.randomDirection().multiplyScalar(1800+Math.random()*600).toArray(_,te*3),g[te]=.25+.75*Math.pow(Math.random(),2.2);const v=new Zt;v.setAttribute("position",new $t(_,3)),v.setAttribute("aA",new $t(g,1));const x=new Pi({uniforms:{uColor:{value:new et(14673919)},uAlpha:{value:1},uPR:{value:i}},vertexShader:`
      attribute float aA; uniform float uPR; varying float vA;
      void main() { vA = aA; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = (1.2 + 1.6 * aA) * uPR; }`,fragmentShader:_y,transparent:!0,depthWrite:!1}),y=new ql(v,x);y.frustumCulled=!1,r.add(y);const A=400,w=new Float32Array(A*3),M=new Float32Array(A);for(let te=0;te<A;te++)d.randomDirection().multiplyScalar(.45+Math.random()*1.6).add(c).toArray(w,te*3),M[te]=Math.random();const P=new Zt;P.setAttribute("position",new $t(w,3)),P.setAttribute("aA",new $t(M,1));const S=new Pi({uniforms:{uColor:{value:new et(11126015)},uAlpha:{value:1},uPR:{value:i},uTime:{value:0}},vertexShader:`
      attribute float aA; uniform float uPR; uniform float uTime; varying float vA;
      void main() {
        vA = 0.25 + 0.6 * aA;
        float t = uTime * (0.05 + 0.08 * aA) + aA * 60.0;
        vec3 p = position + vec3(sin(t), sin(t * 0.7 + 1.3), cos(t * 0.9)) * 0.06;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = (1.0 + 1.4 * aA) * uPR;
      }`,fragmentShader:_y,transparent:!0,depthWrite:!1,blending:tl}),E=new ql(P,S);E.frustumCulled=!1,r.add(E);const U=rg(jE.find(te=>te.name==="Earth"),o),O=(()=>{const te=ig(U,256),xe=dN*10,ce=new Float32Array(te.length*6),H=[];te.forEach((le,R)=>{const T=Math.hypot(le.x,le.z);if(le.clone().multiplyScalar((T-xe)/T).toArray(ce,R*6),le.clone().multiplyScalar((T+xe)/T).toArray(ce,R*6+3),R<te.length-1){const z=2*R;H.push(z,z+1,z+2,z+1,z+3,z+2)}});const Te=new Zt;Te.setAttribute("position",new $t(ce,3)),Te.setIndex(H);const _e=new ri(Te,new dc({color:5939967,transparent:!0,opacity:0,side:fr,depthWrite:!1,blending:tl})),be=new Lh({color:9224447,transparent:!0,opacity:0,depthWrite:!1}),ye=le=>new tg(new Zt().setFromPoints(te.map(R=>{const T=Math.hypot(R.x,R.z);return R.clone().multiplyScalar((T+le*xe)/T)})),be),G=new Mo;return G.add(_e,ye(-1),ye(1)),r.add(G),{grp:G,fill:_e,edgeMat:be}})(),J=()=>LA/NA()*i,L={uCount:{value:0},uHaz:{value:0},uHidden:{value:0},uLaunch:{value:0},uThin:{value:0},uPR:{value:i},uSafe:{value:J()},uTime:{value:0},uBase:{value:new et(8824536)},uRed:{value:new et(16724016)},uGrey:{value:new et(PA)}},k=(te,xe)=>new Pi({uniforms:{uColor:{value:new et(te)},uAlpha:{value:0},uSize:{value:xe*i},sizeCss:{value:xe}},vertexShader:xN,fragmentShader:yN,transparent:!0,depthTest:!1,depthWrite:!1});let V=null,W=gy(c,c);const D=[];function I(te,xe,ce,H){const Te=document.createElement("div");Te.className="intro-label "+ce,Te.innerHTML=xe,e.appendChild(Te),D.push({el:Te,pos:te.clone(),alpha:H})}function b(te,xe){if(V||!te||!xe)return;const ce=te.filter(Z=>Z.e<1),H=Z=>Z.hidden?2:Z.pha===1?1:0;ce.sort((Z,Xe)=>H(Z)-H(Xe));const Te=ce.length,_e=new Float32Array(Te*3);$D(ce)(o,_e);const be=new Set(sN(te,xe).map(Z=>Z.pdes)),ye=new Float32Array(Te),G=new Float32Array(Te),le=new Float32Array(Te),R=new Float32Array(Te);ce.forEach((Z,Xe)=>{ye[Xe]=UA(Z.pdes),G[Xe]=be.has(Z.pdes)?1:0,le[Xe]=Z.pha===1?1:0,R[Xe]=Z.hidden?1:0});const T=new Zt;T.setAttribute("position",new $t(_e,3)),T.setAttribute("aReveal",new $t(ye,1)),T.setAttribute("aInApp",new $t(G,1)),T.setAttribute("aPha",new $t(le,1)),T.setAttribute("aHidden",new $t(R,1));const z=new ql(T,new Pi({uniforms:L,vertexShader:_N,fragmentShader:vN,transparent:!0,depthTest:!1,depthWrite:!1}));z.frustumCulled=!1,r.add(z);const ne=Z=>new F().fromArray(_e,Z*3),ie=[];ce.forEach((Z,Xe)=>{Z.hidden&&Z.D_meas!=null&&ie.push(Xe)});const re=new Zt().setFromPoints(ie.map(ne)),Me=new ql(re,k(16765128,16));Me.frustumCulled=!1,r.add(Me);const pe=ie.map(Z=>({k:Z,d:ne(Z).distanceTo(c)})).sort((Z,Xe)=>Z.d-Xe.d).slice(0,3);for(const{k:Z}of pe){const Xe=ce[Z];I(ne(Z),`<b>${Xe.name}</b><span>measured ${Math.round(Xe.D_meas)} m across</span>`,"hazard",()=>Ba.measured(Q))}const fe=pe.reduce((Z,{k:Xe})=>Z.add(ne(Xe)),c.clone()).multiplyScalar(1/(pe.length+1));W=gy(c,fe);let Le=null;const Be=ce.findIndex(Z=>String(Z.pdes)==="99942");if(Be>=0){const Z=ce[Be],Xe=ig(Z,720),De=new tg(new Zt().setFromPoints(Xe),new Lh({color:16762784,transparent:!0,opacity:0,depthWrite:!1}));De.geometry.setDrawRange(0,0);const qe=new ql(new Zt().setFromPoints([ne(Be)]),k(16762784,18));qe.frustumCulled=!1,r.add(De,qe),Le={line:De,marker:qe,n:Xe.length},I(ne(Be),"<b>99942 Apophis</b><span>a known hazard: crosses Earth's orbit</span>","apophis",()=>Ba.apoAlpha(Q)*Ba.apoDraw(Q))}V={cloud:z,measured:Me,apophis:Le}}let X=1,ee=1;function $(){var te,xe;X=n.clientWidth||window.innerWidth,ee=n.clientHeight||window.innerHeight,i=py(),t.setPixelRatio(i),t.setSize(X,ee,!1),s.aspect=X/ee,s.updateProjectionMatrix(),L.uPR.value=i,L.uSafe.value=J(),x.uniforms.uPR.value=i,S.uniforms.uPR.value=i;for(const ce of[(te=V==null?void 0:V.measured)==null?void 0:te.material,(xe=V==null?void 0:V.apophis)==null?void 0:xe.marker.material])ce&&(ce.uniforms.uSize.value=ce.uniforms.sizeCss.value*i)}let Q=0;const se=new F,ge=new F;function ve(te,xe){Q=te;const ce=Ba;if(te>=YE)s.position.set(0,25,35),s.lookAt(0,0,0);else{se.set(W.tx(te),W.ty(te),W.tz(te));const le=Math.exp(W.ld(te)),R=W.az(te),T=W.el(te);s.position.set(se.x+le*Math.cos(T)*Math.sin(R),se.y+le*Math.sin(T),se.z+le*Math.cos(T)*Math.cos(R)),s.lookAt(se)}const H=ce.shift(te)*mN;H>1e-4?X>=ee?s.setViewOffset(X,ee,-H*X,0,X,ee):s.setViewOffset(X,ee,0,-H*ee,X,ee):s.view&&s.clearViewOffset();const Te=ce.launch(te),_e=ce.stars(te);x.uniforms.uAlpha.value=_e,y.visible=_e>.001,p.material.opacity=_e,p.visible=_e>.001,S.uniforms.uAlpha.value=ce.dust(te),S.uniforms.uTime.value=xe,E.visible=ce.dust(te)>.001;const be=ce.rings(te);for(const le of l)le.mat.opacity=le.base*be;const ye=Te>.6;f.group.visible=!ye,u.visible=ye,ye||f.update(xe,h);const G=ce.band(te);if(O.grp.visible=G>.001,O.fill.material.opacity=.16*G,O.edgeMat.opacity=.7*G,L.uCount.value=ce.count(te),L.uHaz.value=ce.haz(te),L.uHidden.value=ce.hidden(te),L.uLaunch.value=Te,L.uThin.value=ce.thin(te),L.uTime.value=xe,V){const le=ce.measured(te);if(V.measured.material.uniforms.uAlpha.value=.9*le,V.measured.visible=le>.001,V.apophis){const{line:R,marker:T,n:z}=V.apophis,ne=ce.apoAlpha(te),ie=ce.apoDraw(te);R.material.opacity=.9*ne,R.geometry.setDrawRange(0,Math.max(0,Math.round(ie*(z-1))+1)),R.visible=ne>.001&&ie>.001,T.material.uniforms.uAlpha.value=ne*ie,T.visible=ne*ie>.001}}t.render(r,s);for(const le of D){const R=le.alpha();if(R<.01){le.el.style.opacity!=="0"&&(le.el.style.opacity="0");continue}if(ge.copy(le.pos).project(s),ge.z>1){le.el.style.opacity="0";continue}let T=(ge.x+1)/2*X;const z=(1-ge.y)/2*ee,ne=le.wd||(le.wd=le.el.offsetWidth),ie=T+16+ne>X-8;ie!==le.flip&&(le.flip=ie,le.el.classList.toggle("flip",ie)),ie&&(T-=ne+32),T=Math.min(Math.max(T,-8),X-ne-24),le.el.style.opacity=R.toFixed(3),le.el.style.transform=`translate3d(${T.toFixed(1)}px, ${z.toFixed(1)}px, 0)`}}function Fe(){r.traverse(te=>{var ce,H;(ce=te.geometry)==null||ce.dispose();const xe=te.material;xe&&((H=xe.map)==null||H.dispose(),xe.dispose())}),f.dispose(),D.forEach(te=>te.el.remove()),t.dispose(),t.forceContextLoss()}return $(),{render:ve,resize:$,setData:b,dispose:Fe}}Vi.registerPlugin(Je);Je.config({ignoreMobileResize:!0});const MN="https://github.com/abdalla-cooked/DATATHON2026",EN=["Abdalla Shaldam","Alexander Philippopoulos","Jean-Paul Saliba"],wN=[["Python","pandas","scikit-learn","LightGBM","m2cgen"],["React","Vite","Three.js","GSAP","Lenis"]],xa=n=>n==null?"—":Number(n).toLocaleString("en-US");function TN(n){const e=/H <= ([\d.]+)/.exec(n||""),t=/moid <= ([\d.]+)/.exec(n||"");return{h:e?Number(e[1]).toFixed(3):"—",moid:t?Number(t[1]).toFixed(3):"—"}}function nt({children:n,className:e=""}){return Y.jsx("span",{className:"line "+e,children:Y.jsx("span",{className:"line-inner",children:n})})}function fs(n,e){const t=Vi.timeline({defaults:{ease:"none"},scrollTrigger:{start:()=>n*window.innerHeight,end:()=>e*window.innerHeight,scrub:1,invalidateOnRefresh:!0}});return t.to({},{duration:.001},e-n-.001),t}function AN(n){const e=(u,c=n)=>c.querySelector(u),t=(u,c=n)=>c.querySelectorAll(u),i=u=>t(".line-inner",u),r=(u,c,h,f=.06)=>u.fromTo(i(c),{yPercent:110},{yPercent:0,duration:.35,stagger:f,ease:"power3.out"},h),s=(u,c,h,f=.3)=>u.fromTo(c,{autoAlpha:0,y:24},{autoAlpha:1,y:0,duration:f,ease:"power2.out"},h),o=(u,c)=>u.fromTo(c,{autoAlpha:0},{autoAlpha:1,duration:.02},0),a=(u,c,h,f)=>u.to(c,{autoAlpha:0,y:-50,duration:f,ease:"power1.in"},h),l=u=>e(`[data-sec="${u}"]`);Vi.set(t(".sec:not(.sec-hero) .line-inner"),{yPercent:110});{const u=l("hero"),c=fs(0,1.3);c.to(e(".scroll-cue",u),{autoAlpha:0,duration:.25},.05),a(c,e(".sec-body",u),.78,.39)}{const u=l("scale"),c=fs(1,3.2);o(c,u),r(c,e(".beat-count",u),.12),r(c,e(".beat-rate",u),1.05),a(c,e(".sec-body",u),1.8,.36)}{const u=l("rule"),c=fs(2.75,4.95);o(c,u),r(c,e(".rule-head",u),.12),t(".fig",u).forEach((h,f)=>{r(c,h,.4+f*.35),c.fromTo(e(".fig-rule",h),{scaleX:0},{scaleX:1,duration:.35,ease:"power2.out"},.45+f*.35)}),r(c,e(".rule-end",u),1.2),a(c,e(".sec-body",u),1.72,.37)}{const u=l("act1"),c=fs(4.5,6.9);o(c,u),r(c,e(".copy",u),.15),t(".tree > *",u).forEach((f,p)=>{const m=.55+p*.1;f.classList.contains("conn")?c.fromTo(f,{scaleY:0},{scaleY:1,duration:.12},m):s(c,f,m,.18)}),r(c,e(".tree-caption",u),1.25),a(c,e(".sec-body",u),1.92,.36)}{const u=l("act2"),c=fs(6.45,8.85);o(c,u),r(c,e(".copy",u),.15),t(".stat",u).forEach((h,f)=>s(c,h,.75+f*.14,.3)),a(c,e(".sec-body",u),1.92,.36)}{const u=l("act4"),c=fs(8.4,12.2),[h,f,p,m]=["a","b","c","d"].map(_=>e(`.beat-${_}`,u));o(c,u),r(c,e(".act",u),.05),r(c,h,.1),a(c,h,.85,.25),c.fromTo(f,{autoAlpha:0},{autoAlpha:1,duration:.02},1.05),r(c,f,1.1),a(c,f,1.72,.22),c.fromTo(p,{autoAlpha:0},{autoAlpha:1,duration:.02},1.92),r(c,p,1.95),c.fromTo(m,{autoAlpha:0},{autoAlpha:1,duration:.02},2.45),r(c,m,2.5),a(c,e(".sec-body",u),3.23,.45)}{const u=l("launch"),c=fs(11.9,13.5);o(c,u),r(c,u,.15),s(c,e(".launch-cta",u),.4,.3)}{const u=e(".finale"),c=l("credits"),h=fs(13.5,za);h.to(u,{y:()=>-(c.offsetHeight+32),duration:.65,ease:"power2.inOut"},0),h.to(e(".sec-body",l("launch")),{autoAlpha:0,duration:.35},.05),h.fromTo(c,{autoAlpha:0},{autoAlpha:1,duration:.2},.1),t(".name",c).forEach((f,p)=>s(h,f,.3+p*.12,.2)),t(".chips",c).forEach((f,p)=>s(h,f,.7+p*.08,.2)),s(h,e(".credits-foot",c),.9,.2)}}function CN({onLaunch:n,onSettled:e,onSkip:t}){var P,S,E;const i=mt.useRef(null),r=mt.useRef(null),s=mt.useRef(null),o=mt.useRef(null),a=mt.useRef(null),l=mt.useRef(null),u=mt.useRef(null),c=mt.useRef(null),[h,f]=mt.useState(null),[p,m]=mt.useState(!1),[_]=mt.useState(()=>{var U;return((U=window.matchMedia)==null?void 0:U.call(window,"(prefers-reduced-motion: reduce)").matches)??!1}),g=mt.useRef({onLaunch:n,onSettled:e});g.current={onLaunch:n,onSettled:e},mt.useLayoutEffect(()=>{const U=SN(r.current,s.current),O={s:_?dy:0};let J=0,L=-1,k=!0;if(Promise.all([IM(),OM()]).then(([X,ee])=>{var $;k&&(U.setData(ee,X),J=(($=X==null?void 0:X.counts)==null?void 0:$.neos_used)??0,L=-1,f(X),_&&U.render(O.s,0))}).catch(()=>{}),_){U.render(O.s,0);const X=()=>{U.resize(),U.render(O.s,0)};window.addEventListener("resize",X);const ee=new IntersectionObserver($=>$.forEach(Q=>Q.isIntersecting&&Q.target.classList.add("in")),{threshold:.2});return a.current.querySelectorAll(".sec").forEach($=>ee.observe($)),c.current=()=>{g.current.onLaunch(),g.current.onSettled()},()=>{k=!1,ee.disconnect(),window.removeEventListener("resize",X),U.dispose()}}const V=()=>{o.current.style.height=(za+1)*window.innerHeight+"px"};V();const W=new CR({autoRaf:!1,lerp:.09});W.on("scroll",Je.update);const D=Vi.context(()=>{Je.create({trigger:a.current,start:0,end:()=>za*window.innerHeight,pin:!0,pinSpacing:!1});const X=Vi.fromTo(O,{s:0},{s:za,ease:"none",scrollTrigger:{start:0,end:()=>za*window.innerHeight,scrub:1,invalidateOnRefresh:!0}});AN(a.current),Vi.fromTo(a.current.querySelectorAll('[data-sec="hero"] .line-inner'),{yPercent:110},{yPercent:0,duration:1.1,stagger:.12,ease:"power3.out",delay:.2}),c.current=()=>{var ee;g.current.onLaunch(),(ee=X.scrollTrigger)==null||ee.kill(),X.kill(),W.stop(),Vi.to(O,{s:Math.max(O.s,dy),duration:.7,ease:"power2.inOut",onComplete:()=>g.current.onSettled()})}},i.current),I=X=>{W.raf(X*1e3),U.render(O.s,X);const ee=Math.round(Ba.count(O.s)*J);ee!==L&&l.current&&(l.current.textContent=xa(ee),L=ee),u.current&&(u.current.style.opacity=Ba.shift(O.s).toFixed(3))};Vi.ticker.add(I),Vi.ticker.lagSmoothing(0);const b=()=>{V(),U.resize()};return window.addEventListener("resize",b),Je.addEventListener("refreshInit",V),Je.refresh(),()=>{k=!1,window.removeEventListener("resize",b),Je.removeEventListener("refreshInit",V),Vi.ticker.remove(I),Vi.ticker.lagSmoothing(500,33),D.revert(),W.destroy(),U.dispose()}},[_]);const d=()=>{var U;p||(m(!0),(U=c.current)==null||U.call(c))},v=h,x=TN(v==null?void 0:v.tree_rules),y=v?Math.round(v.counts.pha_rate*100):null,A=v?Math.round(v.B.recall*100):null,w=v==null?void 0:v.hidden_hazards,M=Y.jsx("button",{type:"button",className:"launch-btn",onClick:d,disabled:p,children:"Watch the AI learn"});return Y.jsxs("div",{ref:i,className:"intro"+(_?" reduced":"")+(p?" launched":""),children:[Y.jsx("canvas",{ref:r,className:"intro-canvas","aria-hidden":"true"}),Y.jsx("div",{ref:u,className:"intro-scrim","aria-hidden":"true"}),Y.jsx("div",{ref:s,className:"intro-labels","aria-hidden":"true"}),Y.jsx("button",{type:"button",className:"intro-skip",onClick:t,children:"Skip intro"}),Y.jsx("div",{ref:o,className:"intro-scroll",children:Y.jsxs("div",{ref:a,className:"intro-stage",children:[Y.jsxs("section",{className:"sec sec-hero","data-sec":"hero",children:[Y.jsxs("div",{className:"sec-body",children:[Y.jsx("p",{className:"kicker",children:Y.jsx(nt,{children:"DATATHON 2026 · Problem 2"})}),Y.jsxs("h1",{className:"hero-title",children:[Y.jsx(nt,{children:"Is it coming"}),Y.jsx(nt,{children:"for us?"})]}),Y.jsx("p",{className:"hero-sub",children:Y.jsx(nt,{children:"We taught a machine to spot the asteroids worth worrying about."})})]}),Y.jsxs("div",{className:"scroll-cue","aria-hidden":"true",children:[Y.jsx("span",{children:"Scroll"}),Y.jsx("i",{})]})]}),Y.jsx("section",{className:"sec sec-scale","data-sec":"scale",children:Y.jsxs("div",{className:"sec-body",children:[Y.jsxs("div",{className:"beat-count",children:[Y.jsx("p",{className:"big-num",children:Y.jsx(nt,{children:Y.jsx("span",{ref:l,children:_?xa((P=v==null?void 0:v.counts)==null?void 0:P.neos_used):"0"})})}),Y.jsx("p",{className:"lede",children:Y.jsx(nt,{children:"near-Earth asteroids in our data."})})]}),Y.jsx("div",{className:"beat-rate",children:Y.jsxs("p",{className:"lede strong",children:[Y.jsxs(nt,{children:["About ",y??"—"," percent are officially"]}),Y.jsx(nt,{children:Y.jsx("em",{className:"hot",children:"potentially hazardous."})})]})})]})}),Y.jsx("section",{className:"sec sec-rule side","data-sec":"rule",children:Y.jsxs("div",{className:"sec-body",children:[Y.jsx("h2",{className:"rule-head",children:Y.jsx(nt,{children:"How does NASA decide?"})}),Y.jsxs("div",{className:"figs",children:[Y.jsxs("div",{className:"fig",children:[Y.jsx("p",{className:"fig-num",children:Y.jsx(nt,{children:"0.05 AU"})}),Y.jsx("i",{className:"fig-rule"}),Y.jsxs("p",{className:"fig-text",children:[Y.jsx(nt,{children:"Its orbit passes within 7.5 million km of Earth’s,"}),Y.jsx(nt,{children:"about 19 times the distance to the Moon."})]})]}),Y.jsxs("div",{className:"fig",children:[Y.jsx("p",{className:"fig-num",children:Y.jsx(nt,{children:"140 m"})}),Y.jsx("i",{className:"fig-rule"}),Y.jsxs("p",{className:"fig-text",children:[Y.jsx(nt,{children:"It’s at least 140 m across. Most have never been"}),Y.jsx(nt,{children:"measured, so NASA goes by brightness: H ≤ 22."})]})]})]}),Y.jsx("p",{className:"rule-end",children:Y.jsx(nt,{children:"That’s the whole definition."})})]})}),Y.jsx("section",{className:"sec sec-act1 side","data-sec":"act1",children:Y.jsxs("div",{className:"sec-body two-col",children:[Y.jsxs("div",{className:"copy",children:[Y.jsx("p",{className:"act",children:Y.jsx(nt,{children:"Act 1"})}),Y.jsxs("h2",{children:[Y.jsxs(nt,{children:["We gave a model ",xa((S=v==null?void 0:v.counts)==null?void 0:S.train)," asteroids"]}),Y.jsx(nt,{children:"and NASA’s labels."})]}),Y.jsx("p",{className:"lede",children:Y.jsx(nt,{children:"It worked out the rule on its own."})})]}),Y.jsxs("div",{className:"tree-wrap",children:[Y.jsxs("div",{className:"tree",children:[Y.jsxs("div",{className:"node",children:[Y.jsxs("b",{children:["H ≤ ",x.h]}),Y.jsx("span",{children:"bright, so probably 140 m or more"})]}),Y.jsx("i",{className:"conn"}),Y.jsxs("div",{className:"node",children:[Y.jsxs("b",{children:["MOID ≤ ",x.moid," AU"]}),Y.jsx("span",{children:"orbit passes close to Earth’s"})]}),Y.jsx("i",{className:"conn"}),Y.jsx("div",{className:"node leaf",children:Y.jsx("b",{children:"Hazardous"})})]}),Y.jsxs("p",{className:"tree-caption",children:[Y.jsx(nt,{children:"NASA’s definition: MOID ≤ 0.05 AU and H ≤ 22."}),Y.jsx(nt,{children:"Nobody told it."})]})]})]})}),Y.jsx("section",{className:"sec sec-act2 side","data-sec":"act2",children:Y.jsxs("div",{className:"sec-body",children:[Y.jsxs("div",{className:"copy",children:[Y.jsx("p",{className:"act",children:Y.jsx(nt,{children:"Act 2"})}),Y.jsxs("h2",{children:[Y.jsx(nt,{children:"Then we took away"}),Y.jsx(nt,{children:"the answer key."})]}),Y.jsxs("p",{className:"lede",children:[Y.jsx(nt,{children:"No MOID, no brightness."}),Y.jsx(nt,{children:"Only the shape of each orbit."})]})]}),Y.jsxs("dl",{className:"stats",children:[Y.jsxs("div",{className:"stat",children:[Y.jsx("dt",{children:"ROC AUC"}),Y.jsx("dd",{children:v?v.B.roc_auc.toFixed(3):"—"})]}),Y.jsxs("div",{className:"stat",children:[Y.jsx("dt",{children:"Hazards caught"}),Y.jsxs("dd",{children:[A??"—"," ",Y.jsx("small",{children:"of every 100"})]})]}),Y.jsxs("div",{className:"stat",children:[Y.jsx("dt",{children:"Tested on"}),Y.jsxs("dd",{children:[xa((E=v==null?void 0:v.counts)==null?void 0:E.test)," ",Y.jsx("small",{children:"asteroids it never saw"})]})]})]})]})}),Y.jsx("section",{className:"sec sec-act4 side","data-sec":"act4",children:Y.jsxs("div",{className:"sec-body",children:[Y.jsx("p",{className:"act",children:Y.jsx(nt,{children:"Act 4 · Hidden hazards"})}),Y.jsxs("div",{className:"beats",children:[Y.jsxs("div",{className:"beat beat-a",children:[Y.jsxs("h2",{children:[Y.jsx(nt,{children:"NASA judges size"}),Y.jsx(nt,{children:"by brightness."})]}),Y.jsxs("p",{className:"lede",children:[Y.jsx(nt,{children:"But a dark asteroid can be big"}),Y.jsx(nt,{children:"and still look faint."})]})]}),Y.jsxs("div",{className:"beat beat-b",children:[Y.jsx("p",{className:"big-num hot",children:Y.jsx(nt,{children:xa(w==null?void 0:w.count)})}),Y.jsxs("p",{className:"lede",children:[Y.jsx(nt,{children:"near-Earth asteroids our model sizes at 140 m"}),Y.jsx(nt,{children:"or more, yet too faint to count as hazardous."})]})]}),Y.jsxs("div",{className:"beat beat-c",children:[Y.jsx("p",{className:"big-num hot",children:Y.jsx(nt,{children:xa(w==null?void 0:w.measured)})}),Y.jsxs("p",{className:"lede",children:[Y.jsx(nt,{children:"of them were already measured by NEOWISE"}),Y.jsx(nt,{children:"at 140 m or more."})]}),Y.jsx("div",{className:"beat-d",children:Y.jsx("p",{className:"note",children:Y.jsx(nt,{children:"Candidates to watch, not confirmed threats."})})})]})]})]})}),Y.jsxs("div",{className:"finale",children:[Y.jsx("section",{className:"sec sec-launch","data-sec":"launch",children:Y.jsxs("div",{className:"sec-body",children:[Y.jsx("h2",{className:"launch-title",children:Y.jsx(nt,{children:"Now watch it learn."})}),Y.jsx("div",{className:"launch-cta",children:M})]})}),Y.jsx("section",{className:"sec sec-credits","data-sec":"credits",children:Y.jsxs("div",{className:"credits-card",children:[Y.jsx("p",{className:"act",children:"Made by"}),Y.jsx("ul",{className:"names",children:EN.map(U=>Y.jsx("li",{className:"name",children:U},U))}),wN.map((U,O)=>Y.jsx("ul",{className:"chips",children:U.map(J=>Y.jsx("li",{children:J},J))},O)),Y.jsxs("div",{className:"credits-foot",children:[Y.jsx("p",{children:"Data: NASA/JPL Small-Body Database and close-approach data."}),Y.jsx("p",{children:"Built for DATATHON 2026, Problem 2: Teach a Machine to See Space."}),Y.jsxs("p",{className:"links",children:[Y.jsx("a",{href:MN,target:"_blank",rel:"noreferrer",children:"GitHub repo"}),Y.jsx("span",{children:"Demo video: coming soon"})]}),M]})]})})]})]})})]})}const qE=()=>CA(()=>import("./App-Bk8Tqewp.js"),__vite__mapDeps([0,1]),import.meta.url),RN=mt.lazy(qE),sg="datathon2026.skipIntro",vy=1e3,xy=600,yy=600;function bN(){try{return window.localStorage.getItem(sg)==="1"}catch{return!1}}function Sy(n){try{n?window.localStorage.setItem(sg,"1"):window.localStorage.removeItem(sg)}catch{}}function PN(){const[n,e]=mt.useState(()=>bN()?"app":"intro"),[t,i]=mt.useState("in"),[r,s]=mt.useState(!1),[o,a]=mt.useState(0),l=mt.useRef({ready:!1,settled:!1,done:!1}),u=mt.useRef([]),c=(y,A)=>{u.current.push(setTimeout(y,A))};mt.useEffect(()=>("scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),qE(),bA(),n==="app"&&Fl.off(),()=>u.current.forEach(clearTimeout)),[]);const h=mt.useCallback(()=>{const y=l.current;y.done||!y.ready||!y.settled||(y.done=!0,i("out"),c(()=>{e("app"),Fl.start()},vy))},[]),f=mt.useCallback(()=>{l.current={ready:!1,settled:!1,done:!1},Fl.arm(),s(!0),a(y=>y+1),e("launching")},[]),p=mt.useCallback(()=>{l.current.settled=!0,h()},[h]),m=mt.useCallback(()=>{l.current.ready=!0,h()},[h]),_=mt.useCallback(()=>{Sy(!0),Fl.off(),l.current.done=!0,s(!1),a(y=>y+1),e("launching"),i("out"),c(()=>e("app"),xy)},[]),g=mt.useCallback(()=>{Sy(!1),Fl.off(),window.scrollTo(0,0),i("entering"),e("returning"),requestAnimationFrame(()=>requestAnimationFrame(()=>i("in"))),c(()=>e("intro"),yy+50)},[]),d=n!=="app",v=n!=="intro",x=n==="returning"?yy:r?vy:xy;return Y.jsxs(Y.Fragment,{children:[v&&Y.jsx(mt.Suspense,{fallback:null,children:Y.jsx(RN,{replay:r,onReady:m,onReplayIntro:g},o)}),d&&Y.jsx("div",{className:"intro-layer"+(t==="in"?"":" faded"),style:{transitionDuration:x+"ms"},"aria-hidden":t==="out",children:Y.jsx(CN,{onLaunch:f,onSettled:p,onSkip:_})})]})}UM(document.getElementById("root")).render(Y.jsx(PN,{}));export{$D as A,QD as B,et as C,qD as D,Tl as E,tN as F,rg as G,YD as H,jD as I,zD as J,DN as K,NN as L,UN as M,ho as P,cc as Q,P_ as R,FN as S,IN as T,F as V,FE as W,IM as a,RA as b,tt as c,ON as d,BN as e,zN as f,OM as g,I_ as h,HN as i,Y as j,ID as k,wi as l,JD as m,kN as n,eN as o,Fl as p,rN as q,mt as r,iN as s,UA as t,Zt as u,$t as v,kD as w,PA as x,q0 as y,ql as z};
