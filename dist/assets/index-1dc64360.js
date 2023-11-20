(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Ca(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const ee={},Bt=[],Le=()=>{},xl=()=>!1,wl=/^on[^a-z]/,hr=e=>wl.test(e),Sa=e=>e.startsWith("onUpdate:"),me=Object.assign,Ra=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},El=Object.prototype.hasOwnProperty,W=(e,t)=>El.call(e,t),z=Array.isArray,Ut=e=>vr(e)==="[object Map]",Lo=e=>vr(e)==="[object Set]",B=e=>typeof e=="function",se=e=>typeof e=="string",gr=e=>typeof e=="symbol",re=e=>e!==null&&typeof e=="object",jo=e=>(re(e)||B(e))&&B(e.then)&&B(e.catch),$o=Object.prototype.toString,vr=e=>$o.call(e),kl=e=>vr(e).slice(8,-1),Do=e=>vr(e)==="[object Object]",Ia=e=>se(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Gn=Ca(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),br=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Al=/-(\w)/g,Vt=br(e=>e.replace(Al,(t,n)=>n?n.toUpperCase():"")),Ol=/\B([A-Z])/g,tn=br(e=>e.replace(Ol,"-$1").toLowerCase()),zo=br(e=>e.charAt(0).toUpperCase()+e.slice(1)),Fr=br(e=>e?`on${zo(e)}`:""),St=(e,t)=>!Object.is(e,t),Qn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ar=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Qr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let mi;const Jr=()=>mi||(mi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ta(e){if(z(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=se(r)?Rl(r):Ta(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(se(e)||re(e))return e}const Pl=/;(?![^(]*\))/g,Cl=/:([^]+)/,Sl=/\/\*[^]*?\*\//g;function Rl(e){const t={};return e.replace(Sl,"").split(Pl).forEach(n=>{if(n){const r=n.split(Cl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Na(e){let t="";if(se(e))t=e;else if(z(e))for(let n=0;n<e.length;n++){const r=Na(e[n]);r&&(t+=r+" ")}else if(re(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Il="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tl=Ca(Il);function Ho(e){return!!e||e===""}const Nl=e=>se(e)?e:e==null?"":z(e)||re(e)&&(e.toString===$o||!B(e.toString))?JSON.stringify(e,Bo,2):String(e),Bo=(e,t)=>t&&t.__v_isRef?Bo(e,t.value):Ut(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Lo(t)?{[`Set(${t.size})`]:[...t.values()]}:re(t)&&!z(t)&&!Do(t)?String(t):t;let Ie;class Ml{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ie,!t&&Ie&&(this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ie;try{return Ie=this,t()}finally{Ie=n}}}on(){Ie=this}off(){Ie=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Fl(e,t=Ie){t&&t.active&&t.effects.push(e)}function Ll(){return Ie}const Ma=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Uo=e=>(e.w&pt)>0,Ko=e=>(e.n&pt)>0,jl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=pt},$l=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Uo(a)&&!Ko(a)?a.delete(e):t[n++]=a,a.w&=~pt,a.n&=~pt}t.length=n}},Zr=new WeakMap;let fn=0,pt=1;const ea=30;let Te;const Pt=Symbol(""),ta=Symbol("");class Fa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Fl(this,r)}run(){if(!this.active)return this.fn();let t=Te,n=dt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Te,Te=this,dt=!0,pt=1<<++fn,fn<=ea?jl(this):pi(this),this.fn()}finally{fn<=ea&&$l(this),pt=1<<--fn,Te=this.parent,dt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Te===this?this.deferStop=!0:this.active&&(pi(this),this.onStop&&this.onStop(),this.active=!1)}}function pi(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let dt=!0;const Wo=[];function nn(){Wo.push(dt),dt=!1}function rn(){const e=Wo.pop();dt=e===void 0?!0:e}function we(e,t,n){if(dt&&Te){let r=Zr.get(e);r||Zr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Ma()),Yo(a)}}function Yo(e,t){let n=!1;fn<=ea?Ko(e)||(e.n|=pt,n=!Uo(e)):n=!e.has(Te),n&&(e.add(Te),Te.deps.push(e))}function Je(e,t,n,r,a,i){const o=Zr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&z(e)){const l=Number(r);o.forEach((c,f)=>{(f==="length"||!gr(f)&&f>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":z(e)?Ia(n)&&s.push(o.get("length")):(s.push(o.get(Pt)),Ut(e)&&s.push(o.get(ta)));break;case"delete":z(e)||(s.push(o.get(Pt)),Ut(e)&&s.push(o.get(ta)));break;case"set":Ut(e)&&s.push(o.get(Pt));break}if(s.length===1)s[0]&&na(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);na(Ma(l))}}function na(e,t){const n=z(e)?e:[...e];for(const r of n)r.computed&&hi(r);for(const r of n)r.computed||hi(r)}function hi(e,t){(e!==Te||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Dl=Ca("__proto__,__v_isRef,__isVue"),qo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(gr)),gi=zl();function zl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Y(this);for(let i=0,o=this.length;i<o;i++)we(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(Y)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){nn();const r=Y(this)[t].apply(this,n);return rn(),r}}),e}function Hl(e){const t=Y(this);return we(t,"has",e),t.hasOwnProperty(e)}class Vo{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(a?i?ec:Jo:i?Qo:Go).get(t))return t;const o=z(t);if(!a){if(o&&W(gi,n))return Reflect.get(gi,n,r);if(n==="hasOwnProperty")return Hl}const s=Reflect.get(t,n,r);return(gr(n)?qo.has(n):Dl(n))||(a||we(t,"get",n),i)?s:de(s)?o&&Ia(n)?s:s.value:re(s)?a?es(s):_r(s):s}}class Xo extends Vo{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(Xt(i)&&de(i)&&!de(r))return!1;if(!this._shallow&&(!ir(r)&&!Xt(r)&&(i=Y(i),r=Y(r)),!z(t)&&de(i)&&!de(r)))return i.value=r,!0;const o=z(t)&&Ia(n)?Number(n)<t.length:W(t,n),s=Reflect.set(t,n,r,a);return t===Y(a)&&(o?St(r,i)&&Je(t,"set",n,r):Je(t,"add",n,r)),s}deleteProperty(t,n){const r=W(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&Je(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!gr(n)||!qo.has(n))&&we(t,"has",n),r}ownKeys(t){return we(t,"iterate",z(t)?"length":Pt),Reflect.ownKeys(t)}}class Bl extends Vo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ul=new Xo,Kl=new Bl,Wl=new Xo(!0),La=e=>e,yr=e=>Reflect.getPrototypeOf(e);function Fn(e,t,n=!1,r=!1){e=e.__v_raw;const a=Y(e),i=Y(t);n||(St(t,i)&&we(a,"get",t),we(a,"get",i));const{has:o}=yr(a),s=r?La:n?Da:yn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Ln(e,t=!1){const n=this.__v_raw,r=Y(n),a=Y(e);return t||(St(e,a)&&we(r,"has",e),we(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function jn(e,t=!1){return e=e.__v_raw,!t&&we(Y(e),"iterate",Pt),Reflect.get(e,"size",e)}function vi(e){e=Y(e);const t=Y(this);return yr(t).has.call(t,e)||(t.add(e),Je(t,"add",e,e)),this}function bi(e,t){t=Y(t);const n=Y(this),{has:r,get:a}=yr(n);let i=r.call(n,e);i||(e=Y(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?St(t,o)&&Je(n,"set",e,t):Je(n,"add",e,t),this}function yi(e){const t=Y(this),{has:n,get:r}=yr(t);let a=n.call(t,e);a||(e=Y(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Je(t,"delete",e,void 0),i}function _i(){const e=Y(this),t=e.size!==0,n=e.clear();return t&&Je(e,"clear",void 0,void 0),n}function $n(e,t){return function(r,a){const i=this,o=i.__v_raw,s=Y(o),l=t?La:e?Da:yn;return!e&&we(s,"iterate",Pt),o.forEach((c,f)=>r.call(a,l(c),l(f),i))}}function Dn(e,t,n){return function(...r){const a=this.__v_raw,i=Y(a),o=Ut(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),f=n?La:t?Da:yn;return!t&&we(i,"iterate",l?ta:Pt),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:s?[f(d[0]),f(d[1])]:f(d),done:p}},[Symbol.iterator](){return this}}}}function ot(e){return function(...t){return e==="delete"?!1:this}}function Yl(){const e={get(i){return Fn(this,i)},get size(){return jn(this)},has:Ln,add:vi,set:bi,delete:yi,clear:_i,forEach:$n(!1,!1)},t={get(i){return Fn(this,i,!1,!0)},get size(){return jn(this)},has:Ln,add:vi,set:bi,delete:yi,clear:_i,forEach:$n(!1,!0)},n={get(i){return Fn(this,i,!0)},get size(){return jn(this,!0)},has(i){return Ln.call(this,i,!0)},add:ot("add"),set:ot("set"),delete:ot("delete"),clear:ot("clear"),forEach:$n(!0,!1)},r={get(i){return Fn(this,i,!0,!0)},get size(){return jn(this,!0)},has(i){return Ln.call(this,i,!0)},add:ot("add"),set:ot("set"),delete:ot("delete"),clear:ot("clear"),forEach:$n(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Dn(i,!1,!1),n[i]=Dn(i,!0,!1),t[i]=Dn(i,!1,!0),r[i]=Dn(i,!0,!0)}),[e,n,t,r]}const[ql,Vl,Xl,Gl]=Yl();function ja(e,t){const n=t?e?Gl:Xl:e?Vl:ql;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(W(n,a)&&a in r?n:r,a,i)}const Ql={get:ja(!1,!1)},Jl={get:ja(!1,!0)},Zl={get:ja(!0,!1)},Go=new WeakMap,Qo=new WeakMap,Jo=new WeakMap,ec=new WeakMap;function tc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nc(e){return e.__v_skip||!Object.isExtensible(e)?0:tc(kl(e))}function _r(e){return Xt(e)?e:$a(e,!1,Ul,Ql,Go)}function Zo(e){return $a(e,!1,Wl,Jl,Qo)}function es(e){return $a(e,!0,Kl,Zl,Jo)}function $a(e,t,n,r,a){if(!re(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=nc(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Kt(e){return Xt(e)?Kt(e.__v_raw):!!(e&&e.__v_isReactive)}function Xt(e){return!!(e&&e.__v_isReadonly)}function ir(e){return!!(e&&e.__v_isShallow)}function ts(e){return Kt(e)||Xt(e)}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function ns(e){return ar(e,"__v_skip",!0),e}const yn=e=>re(e)?_r(e):e,Da=e=>re(e)?es(e):e;function rs(e){dt&&Te&&(e=Y(e),Yo(e.dep||(e.dep=Ma())))}function as(e,t){e=Y(e);const n=e.dep;n&&na(n)}function de(e){return!!(e&&e.__v_isRef===!0)}function za(e){return is(e,!1)}function rc(e){return is(e,!0)}function is(e,t){return de(e)?e:new ac(e,t)}class ac{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Y(t),this._value=n?t:yn(t)}get value(){return rs(this),this._value}set value(t){const n=this.__v_isShallow||ir(t)||Xt(t);t=n?t:Y(t),St(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:yn(t),as(this))}}function Se(e){return de(e)?e.value:e}const ic={get:(e,t,n)=>Se(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return de(a)&&!de(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function os(e){return Kt(e)?e:new Proxy(e,ic)}class oc{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Fa(t,()=>{this._dirty||(this._dirty=!0,as(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=Y(this);return rs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function sc(e,t,n=!1){let r,a;const i=B(e);return i?(r=e,a=Le):(r=e.get,a=e.set),new oc(r,a,i||!a,n)}function mt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){xr(i,t,n)}return a}function je(e,t,n,r){if(B(e)){const i=mt(e,t,n,r);return i&&jo(i)&&i.catch(o=>{xr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(je(e[i],t,n,r));return a}function xr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){mt(l,null,10,[e,o,s]);return}}lc(e,n,a,r)}function lc(e,t,n,r=!0){console.error(e)}let _n=!1,ra=!1;const he=[];let We=0;const Wt=[];let Ge=null,wt=0;const ss=Promise.resolve();let Ha=null;function ls(e){const t=Ha||ss;return e?t.then(this?e.bind(this):e):t}function cc(e){let t=We+1,n=he.length;for(;t<n;){const r=t+n>>>1,a=he[r],i=xn(a);i<e||i===e&&a.pre?t=r+1:n=r}return t}function Ba(e){(!he.length||!he.includes(e,_n&&e.allowRecurse?We+1:We))&&(e.id==null?he.push(e):he.splice(cc(e.id),0,e),cs())}function cs(){!_n&&!ra&&(ra=!0,Ha=ss.then(us))}function fc(e){const t=he.indexOf(e);t>We&&he.splice(t,1)}function uc(e){z(e)?Wt.push(...e):(!Ge||!Ge.includes(e,e.allowRecurse?wt+1:wt))&&Wt.push(e),cs()}function xi(e,t=_n?We+1:0){for(;t<he.length;t++){const n=he[t];n&&n.pre&&(he.splice(t,1),t--,n())}}function fs(e){if(Wt.length){const t=[...new Set(Wt)];if(Wt.length=0,Ge){Ge.push(...t);return}for(Ge=t,Ge.sort((n,r)=>xn(n)-xn(r)),wt=0;wt<Ge.length;wt++)Ge[wt]();Ge=null,wt=0}}const xn=e=>e.id==null?1/0:e.id,dc=(e,t)=>{const n=xn(e)-xn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function us(e){ra=!1,_n=!0,he.sort(dc);const t=Le;try{for(We=0;We<he.length;We++){const n=he[We];n&&n.active!==!1&&mt(n,null,14)}}finally{We=0,he.length=0,fs(),_n=!1,Ha=null,(he.length||Wt.length)&&us()}}function mc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ee;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[f]||ee;p&&(a=n.map(g=>se(g)?g.trim():g)),d&&(a=n.map(Qr))}let s,l=r[s=Fr(t)]||r[s=Fr(Vt(t))];!l&&i&&(l=r[s=Fr(tn(t))]),l&&je(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,je(c,e,6,a)}}function ds(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!B(e)){const l=c=>{const f=ds(c,t,!0);f&&(s=!0,me(o,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(re(e)&&r.set(e,null),null):(z(i)?i.forEach(l=>o[l]=null):me(o,i),re(e)&&r.set(e,o),o)}function wr(e,t){return!e||!hr(t)?!1:(t=t.slice(2).replace(/Once$/,""),W(e,t[0].toLowerCase()+t.slice(1))||W(e,tn(t))||W(e,t))}let Ne=null,Er=null;function or(e){const t=Ne;return Ne=e,Er=e&&e.type.__scopeId||null,t}function ms(e){Er=e}function ps(){Er=null}function aa(e,t=Ne,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ii(-1);const i=or(t);let o;try{o=e(...a)}finally{or(i),r._d&&Ii(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Lr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:f,renderCache:d,data:p,setupState:g,ctx:P,inheritAttrs:C}=e;let L,y;const x=or(e);try{if(n.shapeFlag&4){const S=a||r;L=Ke(f.call(S,S,d,i,g,p,P)),y=l}else{const S=t;L=Ke(S.length>1?S(i,{attrs:l,slots:s,emit:c}):S(i,null)),y=t.props?l:pc(l)}}catch(S){pn.length=0,xr(S,e,1),L=fe(Rt)}let F=L;if(y&&C!==!1){const S=Object.keys(y),{shapeFlag:U}=F;S.length&&U&7&&(o&&S.some(Sa)&&(y=hc(y,o)),F=Gt(F,y))}return n.dirs&&(F=Gt(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),L=F,or(x),L}const pc=e=>{let t;for(const n in e)(n==="class"||n==="style"||hr(n))&&((t||(t={}))[n]=e[n]);return t},hc=(e,t)=>{const n={};for(const r in e)(!Sa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function gc(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?wi(r,o,c):!!o;if(l&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const p=f[d];if(o[p]!==r[p]&&!wr(c,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?wi(r,o,c):!0:!!o;return!1}function wi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!wr(n,i))return!0}return!1}function vc({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const bc=Symbol.for("v-ndc"),yc=e=>e.__isSuspense;function _c(e,t){t&&t.pendingBranch?z(e)?t.effects.push(...e):t.effects.push(e):uc(e)}const zn={};function Yt(e,t,n){return hs(e,t,n)}function hs(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=ee){var s;const l=Ll()===((s=ge)==null?void 0:s.scope)?ge:null;let c,f=!1,d=!1;if(de(e)?(c=()=>e.value,f=ir(e)):Kt(e)?(c=()=>e,r=!0):z(e)?(d=!0,f=e.some(S=>Kt(S)||ir(S)),c=()=>e.map(S=>{if(de(S))return S.value;if(Kt(S))return kt(S);if(B(S))return mt(S,l,2)})):B(e)?t?c=()=>mt(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return p&&p(),je(e,l,3,[g])}:c=Le,t&&r){const S=c;c=()=>kt(S())}let p,g=S=>{p=x.onStop=()=>{mt(S,l,4)}},P;if(kn)if(g=Le,t?n&&je(t,l,3,[c(),d?[]:void 0,g]):c(),a==="sync"){const S=pf();P=S.__watcherHandles||(S.__watcherHandles=[])}else return Le;let C=d?new Array(e.length).fill(zn):zn;const L=()=>{if(x.active)if(t){const S=x.run();(r||f||(d?S.some((U,J)=>St(U,C[J])):St(S,C)))&&(p&&p(),je(t,l,3,[S,C===zn?void 0:d&&C[0]===zn?[]:C,g]),C=S)}else x.run()};L.allowRecurse=!!t;let y;a==="sync"?y=L:a==="post"?y=()=>xe(L,l&&l.suspense):(L.pre=!0,l&&(L.id=l.uid),y=()=>Ba(L));const x=new Fa(c,y);t?n?L():C=x.run():a==="post"?xe(x.run.bind(x),l&&l.suspense):x.run();const F=()=>{x.stop(),l&&l.scope&&Ra(l.scope.effects,x)};return P&&P.push(F),F}function xc(e,t,n){const r=this.proxy,a=se(e)?e.includes(".")?gs(r,e):()=>r[e]:e.bind(r,r);let i;B(t)?i=t:(i=t.handler,n=t);const o=ge;Qt(this);const s=hs(a,i.bind(r),n);return o?Qt(o):Ct(),s}function gs(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function kt(e,t){if(!re(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),de(e))kt(e.value,t);else if(z(e))for(let n=0;n<e.length;n++)kt(e[n],t);else if(Lo(e)||Ut(e))e.forEach(n=>{kt(n,t)});else if(Do(e))for(const n in e)kt(e[n],t);return e}function wc(e,t){const n=Ne;if(n===null)return e;const r=Pr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=ee]=t[i];o&&(B(o)&&(o={mounted:o,updated:o}),o.deep&&kt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function _t(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(nn(),je(l,n,8,[e.el,s,e,t]),rn())}}/*! #__NO_SIDE_EFFECTS__ */function bt(e,t){return B(e)?(()=>me({name:e.name},t,{setup:e}))():e}const Jn=e=>!!e.type.__asyncLoader,vs=e=>e.type.__isKeepAlive;function Ec(e,t){bs(e,"a",t)}function kc(e,t){bs(e,"da",t)}function bs(e,t,n=ge){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(kr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)vs(a.parent.vnode)&&Ac(r,t,n,a),a=a.parent}}function Ac(e,t,n,r){const a=kr(t,e,r,!0);ys(()=>{Ra(r[t],a)},n)}function kr(e,t,n=ge,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;nn(),Qt(n);const s=je(t,n,e,o);return Ct(),rn(),s});return r?a.unshift(i):a.push(i),i}}const nt=e=>(t,n=ge)=>(!kn||e==="sp")&&kr(e,(...r)=>t(...r),n),Oc=nt("bm"),Pc=nt("m"),Cc=nt("bu"),Sc=nt("u"),Rc=nt("bum"),ys=nt("um"),Ic=nt("sp"),Tc=nt("rtg"),Nc=nt("rtc");function Mc(e,t=ge){kr("ec",e,t)}function Fc(e,t,n,r){let a;const i=n&&n[r];if(z(e)||se(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(re(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const ia=e=>e?Is(e)?Pr(e)||e.proxy:ia(e.parent):null,mn=me(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ia(e.parent),$root:e=>ia(e.root),$emit:e=>e.emit,$options:e=>Ua(e),$forceUpdate:e=>e.f||(e.f=()=>Ba(e.update)),$nextTick:e=>e.n||(e.n=ls.bind(e.proxy)),$watch:e=>xc.bind(e)}),jr=(e,t)=>e!==ee&&!e.__isScriptSetup&&W(e,t),Lc={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(jr(r,t))return o[t]=1,r[t];if(a!==ee&&W(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&W(c,t))return o[t]=3,i[t];if(n!==ee&&W(n,t))return o[t]=4,n[t];oa&&(o[t]=0)}}const f=mn[t];let d,p;if(f)return t==="$attrs"&&we(e,"get",t),f(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==ee&&W(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,W(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return jr(a,t)?(a[t]=n,!0):r!==ee&&W(r,t)?(r[t]=n,!0):W(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==ee&&W(e,o)||jr(t,o)||(s=i[0])&&W(s,o)||W(r,o)||W(mn,o)||W(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:W(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ei(e){return z(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let oa=!0;function jc(e){const t=Ua(e),n=e.proxy,r=e.ctx;oa=!1,t.beforeCreate&&ki(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:P,activated:C,deactivated:L,beforeDestroy:y,beforeUnmount:x,destroyed:F,unmounted:S,render:U,renderTracked:J,renderTriggered:ae,errorCaptured:Ee,serverPrefetch:ve,expose:Pe,inheritAttrs:at,components:yt,directives:ze,filters:on}=t;if(c&&$c(c,r,null),o)for(const Q in o){const q=o[Q];B(q)&&(r[Q]=q.bind(n))}if(a){const Q=a.call(n,n);re(Q)&&(e.data=_r(Q))}if(oa=!0,i)for(const Q in i){const q=i[Q],Ve=B(q)?q.bind(n,n):B(q.get)?q.get.bind(n,n):Le,it=!B(q)&&B(q.set)?q.set.bind(n):Le,He=ue({get:Ve,set:it});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>He.value,set:ye=>He.value=ye})}if(s)for(const Q in s)_s(s[Q],r,n,Q);if(l){const Q=B(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(q=>{Zn(q,Q[q])})}f&&ki(f,e,"c");function ce(Q,q){z(q)?q.forEach(Ve=>Q(Ve.bind(n))):q&&Q(q.bind(n))}if(ce(Oc,d),ce(Pc,p),ce(Cc,g),ce(Sc,P),ce(Ec,C),ce(kc,L),ce(Mc,Ee),ce(Nc,J),ce(Tc,ae),ce(Rc,x),ce(ys,S),ce(Ic,ve),z(Pe))if(Pe.length){const Q=e.exposed||(e.exposed={});Pe.forEach(q=>{Object.defineProperty(Q,q,{get:()=>n[q],set:Ve=>n[q]=Ve})})}else e.exposed||(e.exposed={});U&&e.render===Le&&(e.render=U),at!=null&&(e.inheritAttrs=at),yt&&(e.components=yt),ze&&(e.directives=ze)}function $c(e,t,n=Le){z(e)&&(e=sa(e));for(const r in e){const a=e[r];let i;re(a)?"default"in a?i=$e(a.from||r,a.default,!0):i=$e(a.from||r):i=$e(a),de(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function ki(e,t,n){je(z(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function _s(e,t,n,r){const a=r.includes(".")?gs(n,r):()=>n[r];if(se(e)){const i=t[e];B(i)&&Yt(a,i)}else if(B(e))Yt(a,e.bind(n));else if(re(e))if(z(e))e.forEach(i=>_s(i,t,n,r));else{const i=B(e.handler)?e.handler.bind(n):t[e.handler];B(i)&&Yt(a,i,e)}}function Ua(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>sr(l,c,o,!0)),sr(l,t,o)),re(t)&&i.set(t,l),l}function sr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&sr(e,i,n,!0),a&&a.forEach(o=>sr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Dc[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Dc={data:Ai,props:Oi,emits:Oi,methods:un,computed:un,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:un,directives:un,watch:Hc,provide:Ai,inject:zc};function Ai(e,t){return t?e?function(){return me(B(e)?e.call(this,this):e,B(t)?t.call(this,this):t)}:t:e}function zc(e,t){return un(sa(e),sa(t))}function sa(e){if(z(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function un(e,t){return e?me(Object.create(null),e,t):t}function Oi(e,t){return e?z(e)&&z(t)?[...new Set([...e,...t])]:me(Object.create(null),Ei(e),Ei(t??{})):t}function Hc(e,t){if(!e)return t;if(!t)return e;const n=me(Object.create(null),e);for(const r in t)n[r]=be(e[r],t[r]);return n}function xs(){return{app:null,config:{isNativeTag:xl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bc=0;function Uc(e,t){return function(r,a=null){B(r)||(r=me({},r)),a!=null&&!re(a)&&(a=null);const i=xs(),o=new WeakSet;let s=!1;const l=i.app={_uid:Bc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:hf,get config(){return i.config},set config(c){},use(c,...f){return o.has(c)||(c&&B(c.install)?(o.add(c),c.install(l,...f)):B(c)&&(o.add(c),c(l,...f))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,f){return f?(i.components[c]=f,l):i.components[c]},directive(c,f){return f?(i.directives[c]=f,l):i.directives[c]},mount(c,f,d){if(!s){const p=fe(r,a);return p.appContext=i,f&&t?t(p,c):e(p,c,d),s=!0,l._container=c,c.__vue_app__=l,Pr(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,f){return i.provides[c]=f,l},runWithContext(c){lr=l;try{return c()}finally{lr=null}}};return l}}let lr=null;function Zn(e,t){if(ge){let n=ge.provides;const r=ge.parent&&ge.parent.provides;r===n&&(n=ge.provides=Object.create(r)),n[e]=t}}function $e(e,t,n=!1){const r=ge||Ne;if(r||lr){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:lr._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&B(t)?t.call(r&&r.proxy):t}}function Kc(e,t,n,r=!1){const a={},i={};ar(i,Or,1),e.propsDefaults=Object.create(null),ws(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Zo(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Wc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=Y(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let p=f[d];if(wr(e.emitsOptions,p))continue;const g=t[p];if(l)if(W(i,p))g!==i[p]&&(i[p]=g,c=!0);else{const P=Vt(p);a[P]=la(l,s,P,g,e,!1)}else g!==i[p]&&(i[p]=g,c=!0)}}}else{ws(e,t,a,i)&&(c=!0);let f;for(const d in s)(!t||!W(t,d)&&((f=tn(d))===d||!W(t,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(a[d]=la(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!W(t,d))&&(delete i[d],c=!0)}c&&Je(e,"set","$attrs")}function ws(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Gn(l))continue;const c=t[l];let f;a&&W(a,f=Vt(l))?!i||!i.includes(f)?n[f]=c:(s||(s={}))[f]=c:wr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=Y(n),c=s||ee;for(let f=0;f<i.length;f++){const d=i[f];n[d]=la(a,l,d,c[d],e,!W(c,d))}}return o}function la(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=W(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&B(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Qt(a),r=c[n]=l.call(null,t),Ct())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===tn(n))&&(r=!0))}return r}function Es(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!B(e)){const f=d=>{l=!0;const[p,g]=Es(d,t,!0);me(o,p),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!l)return re(e)&&r.set(e,Bt),Bt;if(z(i))for(let f=0;f<i.length;f++){const d=Vt(i[f]);Pi(d)&&(o[d]=ee)}else if(i)for(const f in i){const d=Vt(f);if(Pi(d)){const p=i[f],g=o[d]=z(p)||B(p)?{type:p}:me({},p);if(g){const P=Ri(Boolean,g.type),C=Ri(String,g.type);g[0]=P>-1,g[1]=C<0||P<C,(P>-1||W(g,"default"))&&s.push(d)}}}const c=[o,s];return re(e)&&r.set(e,c),c}function Pi(e){return e[0]!=="$"}function Ci(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Si(e,t){return Ci(e)===Ci(t)}function Ri(e,t){return z(t)?t.findIndex(n=>Si(n,e)):B(t)&&Si(t,e)?0:-1}const ks=e=>e[0]==="_"||e==="$stable",Ka=e=>z(e)?e.map(Ke):[Ke(e)],Yc=(e,t,n)=>{if(t._n)return t;const r=aa((...a)=>Ka(t(...a)),n);return r._c=!1,r},As=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ks(a))continue;const i=e[a];if(B(i))t[a]=Yc(a,i,r);else if(i!=null){const o=Ka(i);t[a]=()=>o}}},Os=(e,t)=>{const n=Ka(t);e.slots.default=()=>n},qc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Y(t),ar(t,"_",n)):As(t,e.slots={})}else e.slots={},t&&Os(e,t);ar(e.slots,Or,1)},Vc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=ee;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(me(a,t),!n&&s===1&&delete a._):(i=!t.$stable,As(t,a)),o=t}else t&&(Os(e,t),o={default:1});if(i)for(const s in a)!ks(s)&&o[s]==null&&delete a[s]};function ca(e,t,n,r,a=!1){if(z(e)){e.forEach((p,g)=>ca(p,t&&(z(t)?t[g]:t),n,r,a));return}if(Jn(r)&&!a)return;const i=r.shapeFlag&4?Pr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,f=s.refs===ee?s.refs={}:s.refs,d=s.setupState;if(c!=null&&c!==l&&(se(c)?(f[c]=null,W(d,c)&&(d[c]=null)):de(c)&&(c.value=null)),B(l))mt(l,s,12,[o,f]);else{const p=se(l),g=de(l);if(p||g){const P=()=>{if(e.f){const C=p?W(d,l)?d[l]:f[l]:l.value;a?z(C)&&Ra(C,i):z(C)?C.includes(i)||C.push(i):p?(f[l]=[i],W(d,l)&&(d[l]=f[l])):(l.value=[i],e.k&&(f[e.k]=l.value))}else p?(f[l]=o,W(d,l)&&(d[l]=o)):g&&(l.value=o,e.k&&(f[e.k]=o))};o?(P.id=-1,xe(P,n)):P()}}}const xe=_c;function Xc(e){return Gc(e)}function Gc(e,t){const n=Jr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=Le,insertStaticContent:P}=e,C=(u,m,h,v=null,_=null,w=null,R=!1,k=null,A=!!m.dynamicChildren)=>{if(u===m)return;u&&!ln(u,m)&&(v=b(u),ye(u,_,w,!0),u=null),m.patchFlag===-2&&(A=!1,m.dynamicChildren=null);const{type:E,ref:$,shapeFlag:N}=m;switch(E){case Ar:L(u,m,h,v);break;case Rt:y(u,m,h,v);break;case $r:u==null&&x(m,h,v,R);break;case Ce:yt(u,m,h,v,_,w,R,k,A);break;default:N&1?U(u,m,h,v,_,w,R,k,A):N&6?ze(u,m,h,v,_,w,R,k,A):(N&64||N&128)&&E.process(u,m,h,v,_,w,R,k,A,O)}$!=null&&_&&ca($,u&&u.ref,w,m||u,!m)},L=(u,m,h,v)=>{if(u==null)r(m.el=s(m.children),h,v);else{const _=m.el=u.el;m.children!==u.children&&c(_,m.children)}},y=(u,m,h,v)=>{u==null?r(m.el=l(m.children||""),h,v):m.el=u.el},x=(u,m,h,v)=>{[u.el,u.anchor]=P(u.children,m,h,v,u.el,u.anchor)},F=({el:u,anchor:m},h,v)=>{let _;for(;u&&u!==m;)_=p(u),r(u,h,v),u=_;r(m,h,v)},S=({el:u,anchor:m})=>{let h;for(;u&&u!==m;)h=p(u),a(u),u=h;a(m)},U=(u,m,h,v,_,w,R,k,A)=>{R=R||m.type==="svg",u==null?J(m,h,v,_,w,R,k,A):ve(u,m,_,w,R,k,A)},J=(u,m,h,v,_,w,R,k)=>{let A,E;const{type:$,props:N,shapeFlag:D,transition:H,dirs:K}=u;if(A=u.el=o(u.type,w,N&&N.is,N),D&8?f(A,u.children):D&16&&Ee(u.children,A,null,v,_,w&&$!=="foreignObject",R,k),K&&_t(u,null,v,"created"),ae(A,u,u.scopeId,R,v),N){for(const G in N)G!=="value"&&!Gn(G)&&i(A,G,null,N[G],w,u.children,v,_,pe);"value"in N&&i(A,"value",null,N.value),(E=N.onVnodeBeforeMount)&&Ue(E,v,u)}K&&_t(u,null,v,"beforeMount");const Z=Qc(_,H);Z&&H.beforeEnter(A),r(A,m,h),((E=N&&N.onVnodeMounted)||Z||K)&&xe(()=>{E&&Ue(E,v,u),Z&&H.enter(A),K&&_t(u,null,v,"mounted")},_)},ae=(u,m,h,v,_)=>{if(h&&g(u,h),v)for(let w=0;w<v.length;w++)g(u,v[w]);if(_){let w=_.subTree;if(m===w){const R=_.vnode;ae(u,R,R.scopeId,R.slotScopeIds,_.parent)}}},Ee=(u,m,h,v,_,w,R,k,A=0)=>{for(let E=A;E<u.length;E++){const $=u[E]=k?ct(u[E]):Ke(u[E]);C(null,$,m,h,v,_,w,R,k)}},ve=(u,m,h,v,_,w,R)=>{const k=m.el=u.el;let{patchFlag:A,dynamicChildren:E,dirs:$}=m;A|=u.patchFlag&16;const N=u.props||ee,D=m.props||ee;let H;h&&xt(h,!1),(H=D.onVnodeBeforeUpdate)&&Ue(H,h,m,u),$&&_t(m,u,h,"beforeUpdate"),h&&xt(h,!0);const K=_&&m.type!=="foreignObject";if(E?Pe(u.dynamicChildren,E,k,h,v,K,w):R||q(u,m,k,null,h,v,K,w,!1),A>0){if(A&16)at(k,m,N,D,h,v,_);else if(A&2&&N.class!==D.class&&i(k,"class",null,D.class,_),A&4&&i(k,"style",N.style,D.style,_),A&8){const Z=m.dynamicProps;for(let G=0;G<Z.length;G++){const oe=Z[G],Re=N[oe],Lt=D[oe];(Lt!==Re||oe==="value")&&i(k,oe,Re,Lt,_,u.children,h,v,pe)}}A&1&&u.children!==m.children&&f(k,m.children)}else!R&&E==null&&at(k,m,N,D,h,v,_);((H=D.onVnodeUpdated)||$)&&xe(()=>{H&&Ue(H,h,m,u),$&&_t(m,u,h,"updated")},v)},Pe=(u,m,h,v,_,w,R)=>{for(let k=0;k<m.length;k++){const A=u[k],E=m[k],$=A.el&&(A.type===Ce||!ln(A,E)||A.shapeFlag&70)?d(A.el):h;C(A,E,$,null,v,_,w,R,!0)}},at=(u,m,h,v,_,w,R)=>{if(h!==v){if(h!==ee)for(const k in h)!Gn(k)&&!(k in v)&&i(u,k,h[k],null,R,m.children,_,w,pe);for(const k in v){if(Gn(k))continue;const A=v[k],E=h[k];A!==E&&k!=="value"&&i(u,k,E,A,R,m.children,_,w,pe)}"value"in v&&i(u,"value",h.value,v.value)}},yt=(u,m,h,v,_,w,R,k,A)=>{const E=m.el=u?u.el:s(""),$=m.anchor=u?u.anchor:s("");let{patchFlag:N,dynamicChildren:D,slotScopeIds:H}=m;H&&(k=k?k.concat(H):H),u==null?(r(E,h,v),r($,h,v),Ee(m.children,h,$,_,w,R,k,A)):N>0&&N&64&&D&&u.dynamicChildren?(Pe(u.dynamicChildren,D,h,_,w,R,k),(m.key!=null||_&&m===_.subTree)&&Ps(u,m,!0)):q(u,m,h,$,_,w,R,k,A)},ze=(u,m,h,v,_,w,R,k,A)=>{m.slotScopeIds=k,u==null?m.shapeFlag&512?_.ctx.activate(m,h,v,R,A):on(m,h,v,_,w,R,A):Nt(u,m,A)},on=(u,m,h,v,_,w,R)=>{const k=u.component=sf(u,v,_);if(vs(u)&&(k.ctx.renderer=O),lf(k),k.asyncDep){if(_&&_.registerDep(k,ce),!u.el){const A=k.subTree=fe(Rt);y(null,A,m,h)}return}ce(k,u,m,h,_,w,R)},Nt=(u,m,h)=>{const v=m.component=u.component;if(gc(u,m,h))if(v.asyncDep&&!v.asyncResolved){Q(v,m,h);return}else v.next=m,fc(v.update),v.update();else m.el=u.el,v.vnode=m},ce=(u,m,h,v,_,w,R)=>{const k=()=>{if(u.isMounted){let{next:$,bu:N,u:D,parent:H,vnode:K}=u,Z=$,G;xt(u,!1),$?($.el=K.el,Q(u,$,R)):$=K,N&&Qn(N),(G=$.props&&$.props.onVnodeBeforeUpdate)&&Ue(G,H,$,K),xt(u,!0);const oe=Lr(u),Re=u.subTree;u.subTree=oe,C(Re,oe,d(Re.el),b(Re),u,_,w),$.el=oe.el,Z===null&&vc(u,oe.el),D&&xe(D,_),(G=$.props&&$.props.onVnodeUpdated)&&xe(()=>Ue(G,H,$,K),_)}else{let $;const{el:N,props:D}=m,{bm:H,m:K,parent:Z}=u,G=Jn(m);if(xt(u,!1),H&&Qn(H),!G&&($=D&&D.onVnodeBeforeMount)&&Ue($,Z,m),xt(u,!0),N&&V){const oe=()=>{u.subTree=Lr(u),V(N,u.subTree,u,_,null)};G?m.type.__asyncLoader().then(()=>!u.isUnmounted&&oe()):oe()}else{const oe=u.subTree=Lr(u);C(null,oe,h,v,u,_,w),m.el=oe.el}if(K&&xe(K,_),!G&&($=D&&D.onVnodeMounted)){const oe=m;xe(()=>Ue($,Z,oe),_)}(m.shapeFlag&256||Z&&Jn(Z.vnode)&&Z.vnode.shapeFlag&256)&&u.a&&xe(u.a,_),u.isMounted=!0,m=h=v=null}},A=u.effect=new Fa(k,()=>Ba(E),u.scope),E=u.update=()=>A.run();E.id=u.uid,xt(u,!0),E()},Q=(u,m,h)=>{m.component=u;const v=u.vnode.props;u.vnode=m,u.next=null,Wc(u,m.props,v,h),Vc(u,m.children,h),nn(),xi(),rn()},q=(u,m,h,v,_,w,R,k,A=!1)=>{const E=u&&u.children,$=u?u.shapeFlag:0,N=m.children,{patchFlag:D,shapeFlag:H}=m;if(D>0){if(D&128){it(E,N,h,v,_,w,R,k,A);return}else if(D&256){Ve(E,N,h,v,_,w,R,k,A);return}}H&8?($&16&&pe(E,_,w),N!==E&&f(h,N)):$&16?H&16?it(E,N,h,v,_,w,R,k,A):pe(E,_,w,!0):($&8&&f(h,""),H&16&&Ee(N,h,v,_,w,R,k,A))},Ve=(u,m,h,v,_,w,R,k,A)=>{u=u||Bt,m=m||Bt;const E=u.length,$=m.length,N=Math.min(E,$);let D;for(D=0;D<N;D++){const H=m[D]=A?ct(m[D]):Ke(m[D]);C(u[D],H,h,null,_,w,R,k,A)}E>$?pe(u,_,w,!0,!1,N):Ee(m,h,v,_,w,R,k,A,N)},it=(u,m,h,v,_,w,R,k,A)=>{let E=0;const $=m.length;let N=u.length-1,D=$-1;for(;E<=N&&E<=D;){const H=u[E],K=m[E]=A?ct(m[E]):Ke(m[E]);if(ln(H,K))C(H,K,h,null,_,w,R,k,A);else break;E++}for(;E<=N&&E<=D;){const H=u[N],K=m[D]=A?ct(m[D]):Ke(m[D]);if(ln(H,K))C(H,K,h,null,_,w,R,k,A);else break;N--,D--}if(E>N){if(E<=D){const H=D+1,K=H<$?m[H].el:v;for(;E<=D;)C(null,m[E]=A?ct(m[E]):Ke(m[E]),h,K,_,w,R,k,A),E++}}else if(E>D)for(;E<=N;)ye(u[E],_,w,!0),E++;else{const H=E,K=E,Z=new Map;for(E=K;E<=D;E++){const ke=m[E]=A?ct(m[E]):Ke(m[E]);ke.key!=null&&Z.set(ke.key,E)}let G,oe=0;const Re=D-K+1;let Lt=!1,fi=0;const sn=new Array(Re);for(E=0;E<Re;E++)sn[E]=0;for(E=H;E<=N;E++){const ke=u[E];if(oe>=Re){ye(ke,_,w,!0);continue}let Be;if(ke.key!=null)Be=Z.get(ke.key);else for(G=K;G<=D;G++)if(sn[G-K]===0&&ln(ke,m[G])){Be=G;break}Be===void 0?ye(ke,_,w,!0):(sn[Be-K]=E+1,Be>=fi?fi=Be:Lt=!0,C(ke,m[Be],h,null,_,w,R,k,A),oe++)}const ui=Lt?Jc(sn):Bt;for(G=ui.length-1,E=Re-1;E>=0;E--){const ke=K+E,Be=m[ke],di=ke+1<$?m[ke+1].el:v;sn[E]===0?C(null,Be,h,di,_,w,R,k,A):Lt&&(G<0||E!==ui[G]?He(Be,h,di,2):G--)}}},He=(u,m,h,v,_=null)=>{const{el:w,type:R,transition:k,children:A,shapeFlag:E}=u;if(E&6){He(u.component.subTree,m,h,v);return}if(E&128){u.suspense.move(m,h,v);return}if(E&64){R.move(u,m,h,O);return}if(R===Ce){r(w,m,h);for(let N=0;N<A.length;N++)He(A[N],m,h,v);r(u.anchor,m,h);return}if(R===$r){F(u,m,h);return}if(v!==2&&E&1&&k)if(v===0)k.beforeEnter(w),r(w,m,h),xe(()=>k.enter(w),_);else{const{leave:N,delayLeave:D,afterLeave:H}=k,K=()=>r(w,m,h),Z=()=>{N(w,()=>{K(),H&&H()})};D?D(w,K,Z):Z()}else r(w,m,h)},ye=(u,m,h,v=!1,_=!1)=>{const{type:w,props:R,ref:k,children:A,dynamicChildren:E,shapeFlag:$,patchFlag:N,dirs:D}=u;if(k!=null&&ca(k,null,h,u,!0),$&256){m.ctx.deactivate(u);return}const H=$&1&&D,K=!Jn(u);let Z;if(K&&(Z=R&&R.onVnodeBeforeUnmount)&&Ue(Z,m,u),$&6)Mn(u.component,h,v);else{if($&128){u.suspense.unmount(h,v);return}H&&_t(u,null,m,"beforeUnmount"),$&64?u.type.remove(u,m,h,_,O,v):E&&(w!==Ce||N>0&&N&64)?pe(E,m,h,!1,!0):(w===Ce&&N&384||!_&&$&16)&&pe(A,m,h),v&&Mt(u)}(K&&(Z=R&&R.onVnodeUnmounted)||H)&&xe(()=>{Z&&Ue(Z,m,u),H&&_t(u,null,m,"unmounted")},h)},Mt=u=>{const{type:m,el:h,anchor:v,transition:_}=u;if(m===Ce){Ft(h,v);return}if(m===$r){S(u);return}const w=()=>{a(h),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:R,delayLeave:k}=_,A=()=>R(h,w);k?k(u.el,w,A):A()}else w()},Ft=(u,m)=>{let h;for(;u!==m;)h=p(u),a(u),u=h;a(m)},Mn=(u,m,h)=>{const{bum:v,scope:_,update:w,subTree:R,um:k}=u;v&&Qn(v),_.stop(),w&&(w.active=!1,ye(R,u,m,h)),k&&xe(k,m),xe(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},pe=(u,m,h,v=!1,_=!1,w=0)=>{for(let R=w;R<u.length;R++)ye(u[R],m,h,v,_)},b=u=>u.shapeFlag&6?b(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),T=(u,m,h)=>{u==null?m._vnode&&ye(m._vnode,null,null,!0):C(m._vnode||null,u,m,null,null,null,h),xi(),fs(),m._vnode=u},O={p:C,um:ye,m:He,r:Mt,mt:on,mc:Ee,pc:q,pbc:Pe,n:b,o:e};let j,V;return t&&([j,V]=t(O)),{render:T,hydrate:j,createApp:Uc(T,j)}}function xt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Qc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ps(e,t,n=!1){const r=e.children,a=t.children;if(z(r)&&z(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=ct(a[i]),s.el=o.el),n||Ps(o,s)),s.type===Ar&&(s.el=o.el)}}function Jc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Zc=e=>e.__isTeleport,Ce=Symbol.for("v-fgt"),Ar=Symbol.for("v-txt"),Rt=Symbol.for("v-cmt"),$r=Symbol.for("v-stc"),pn=[];let Me=null;function Ye(e=!1){pn.push(Me=e?null:[])}function ef(){pn.pop(),Me=pn[pn.length-1]||null}let wn=1;function Ii(e){wn+=e}function Cs(e){return e.dynamicChildren=wn>0?Me||Bt:null,ef(),wn>0&&Me&&Me.push(e),e}function ut(e,t,n,r,a,i){return Cs(Ae(e,t,n,r,a,i,!0))}function Ss(e,t,n,r,a){return Cs(fe(e,t,n,r,a,!0))}function fa(e){return e?e.__v_isVNode===!0:!1}function ln(e,t){return e.type===t.type&&e.key===t.key}const Or="__vInternal",Rs=({key:e})=>e??null,er=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?se(e)||de(e)||B(e)?{i:Ne,r:e,k:t,f:!!n}:e:null);function Ae(e,t=null,n=null,r=0,a=null,i=e===Ce?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Rs(t),ref:t&&er(t),scopeId:Er,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ne};return s?(Wa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=se(n)?8:16),wn>0&&!o&&Me&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Me.push(l),l}const fe=tf;function tf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===bc)&&(e=Rt),fa(e)){const s=Gt(e,t,!0);return n&&Wa(s,n),wn>0&&!i&&Me&&(s.shapeFlag&6?Me[Me.indexOf(e)]=s:Me.push(s)),s.patchFlag|=-2,s}if(df(e)&&(e=e.__vccOpts),t){t=nf(t);let{class:s,style:l}=t;s&&!se(s)&&(t.class=Na(s)),re(l)&&(ts(l)&&!z(l)&&(l=me({},l)),t.style=Ta(l))}const o=se(e)?1:yc(e)?128:Zc(e)?64:re(e)?4:B(e)?2:0;return Ae(e,t,n,r,a,o,i,!0)}function nf(e){return e?ts(e)||Or in e?me({},e):e:null}function Gt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?rf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Rs(s),ref:t&&t.ref?n&&a?z(a)?a.concat(er(t)):[a,er(t)]:er(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ce?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Gt(e.ssContent),ssFallback:e.ssFallback&&Gt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function En(e=" ",t=0){return fe(Ar,null,e,t)}function ip(e="",t=!1){return t?(Ye(),Ss(Rt,null,e)):fe(Rt,null,e)}function Ke(e){return e==null||typeof e=="boolean"?fe(Rt):z(e)?fe(Ce,null,e.slice()):typeof e=="object"?ct(e):fe(Ar,null,String(e))}function ct(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Gt(e)}function Wa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(z(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Wa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Or in t)?t._ctx=Ne:a===3&&Ne&&(Ne.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else B(t)?(t={default:t,_ctx:Ne},n=32):(t=String(t),r&64?(n=16,t=[En(t)]):n=8);e.children=t,e.shapeFlag|=n}function rf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Na([t.class,r.class]));else if(a==="style")t.style=Ta([t.style,r.style]);else if(hr(a)){const i=t[a],o=r[a];o&&i!==o&&!(z(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ue(e,t,n,r=null){je(e,t,7,[n,r])}const af=xs();let of=0;function sf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||af,i={uid:of++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ml(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Es(r,a),emitsOptions:ds(r,a),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:r.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=mc.bind(null,i),e.ce&&e.ce(i),i}let ge=null,Ya,jt,Ti="__VUE_INSTANCE_SETTERS__";(jt=Jr()[Ti])||(jt=Jr()[Ti]=[]),jt.push(e=>ge=e),Ya=e=>{jt.length>1?jt.forEach(t=>t(e)):jt[0](e)};const Qt=e=>{Ya(e),e.scope.on()},Ct=()=>{ge&&ge.scope.off(),Ya(null)};function Is(e){return e.vnode.shapeFlag&4}let kn=!1;function lf(e,t=!1){kn=t;const{props:n,children:r}=e.vnode,a=Is(e);Kc(e,n,a,t),qc(e,r);const i=a?cf(e,t):void 0;return kn=!1,i}function cf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ns(new Proxy(e.ctx,Lc));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?uf(e):null;Qt(e),nn();const i=mt(r,e,0,[e.props,a]);if(rn(),Ct(),jo(i)){if(i.then(Ct,Ct),t)return i.then(o=>{Ni(e,o,t)}).catch(o=>{xr(o,e,0)});e.asyncDep=i}else Ni(e,i,t)}else Ts(e,t)}function Ni(e,t,n){B(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:re(t)&&(e.setupState=os(t)),Ts(e,n)}let Mi;function Ts(e,t,n){const r=e.type;if(!e.render){if(!t&&Mi&&!r.render){const a=r.template||Ua(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=me(me({isCustomElement:i,delimiters:s},o),l);r.render=Mi(a,c)}}e.render=r.render||Le}{Qt(e),nn();try{jc(e)}finally{rn(),Ct()}}}function ff(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return we(e,"get","$attrs"),t[n]}}))}function uf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return ff(e)},slots:e.slots,emit:e.emit,expose:t}}function Pr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(os(ns(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in mn)return mn[n](e)},has(t,n){return n in t||n in mn}}))}function df(e){return B(e)&&"__vccOpts"in e}const ue=(e,t)=>sc(e,t,kn);function qa(e,t,n){const r=arguments.length;return r===2?re(t)&&!z(t)?fa(t)?fe(e,null,[t]):fe(e,t):fe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&fa(n)&&(n=[n]),fe(e,t,n))}const mf=Symbol.for("v-scx"),pf=()=>$e(mf),hf="3.3.8",gf="http://www.w3.org/2000/svg",Et=typeof document<"u"?document:null,Fi=Et&&Et.createElement("template"),vf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Et.createElementNS(gf,e):Et.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Et.createTextNode(e),createComment:e=>Et.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Et.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Fi.innerHTML=r?`<svg>${e}</svg>`:e;const s=Fi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},bf=Symbol("_vtc");function yf(e,t,n){const r=e[bf];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const _f=Symbol("_vod");function xf(e,t,n){const r=e.style,a=se(n);if(n&&!a){if(t&&!se(t))for(const i in t)n[i]==null&&ua(r,i,"");for(const i in n)ua(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),_f in e&&(r.display=i)}}const Li=/\s*!important$/;function ua(e,t,n){if(z(n))n.forEach(r=>ua(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=wf(e,t);Li.test(n)?e.setProperty(tn(r),n.replace(Li,""),"important"):e[r]=n}}const ji=["Webkit","Moz","ms"],Dr={};function wf(e,t){const n=Dr[t];if(n)return n;let r=Vt(t);if(r!=="filter"&&r in e)return Dr[t]=r;r=zo(r);for(let a=0;a<ji.length;a++){const i=ji[a]+r;if(i in e)return Dr[t]=i}return t}const $i="http://www.w3.org/1999/xlink";function Ef(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS($i,t.slice(6,t.length)):e.setAttributeNS($i,t,n);else{const i=Tl(t);n==null||i&&!Ho(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function kf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,f=n??"";c!==f&&(e.value=f),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Ho(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function $t(e,t,n,r){e.addEventListener(t,n,r)}function Af(e,t,n,r){e.removeEventListener(t,n,r)}const Di=Symbol("_vei");function Of(e,t,n,r,a=null){const i=e[Di]||(e[Di]={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Pf(t);if(r){const c=i[t]=Rf(r,a);$t(e,s,c,l)}else o&&(Af(e,s,o,l),i[t]=void 0)}}const zi=/(?:Once|Passive|Capture)$/;function Pf(e){let t;if(zi.test(e)){t={};let r;for(;r=e.match(zi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):tn(e.slice(2)),t]}let zr=0;const Cf=Promise.resolve(),Sf=()=>zr||(Cf.then(()=>zr=0),zr=Date.now());function Rf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;je(If(r,n.value),t,5,[r])};return n.value=e,n.attached=Sf(),n}function If(e,t){if(z(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Hi=/^on[a-z]/,Tf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?yf(e,r,a):t==="style"?xf(e,n,r):hr(t)?Sa(t)||Of(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Nf(e,t,r,a))?kf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Ef(e,t,r,a))};function Nf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Hi.test(t)&&B(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Hi.test(t)&&se(n)?!1:t in e}const Bi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return z(t)?n=>Qn(t,n):t};function Mf(e){e.target.composing=!0}function Ui(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Hr=Symbol("_assign"),Ff={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e[Hr]=Bi(a);const i=r||a.props&&a.props.type==="number";$t(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=Qr(s)),e[Hr](s)}),n&&$t(e,"change",()=>{e.value=e.value.trim()}),t||($t(e,"compositionstart",Mf),$t(e,"compositionend",Ui),$t(e,"change",Ui))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e[Hr]=Bi(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Qr(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},Lf=me({patchProp:Tf},vf);let Ki;function jf(){return Ki||(Ki=Xc(Lf))}const $f=(...e)=>{const t=jf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Df(r);if(!a)return;const i=t._component;!B(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Df(e){return se(e)?document.querySelector(e):e}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Dt=typeof window<"u";function zf(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const X=Object.assign;function Br(e,t){const n={};for(const r in t){const a=t[r];n[r]=De(a)?a.map(e):e(a)}return n}const hn=()=>{},De=Array.isArray,Hf=/\/$/,Bf=e=>e.replace(Hf,"");function Ur(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=Yf(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function Uf(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Wi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Kf(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Jt(t.matched[r],n.matched[a])&&Ns(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Jt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ns(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Wf(e[n],t[n]))return!1;return!0}function Wf(e,t){return De(e)?Yi(e,t):De(t)?Yi(t,e):e===t}function Yi(e,t){return De(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Yf(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),a=r[r.length-1];(a===".."||a===".")&&r.push("");let i=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==".")if(s==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var An;(function(e){e.pop="pop",e.push="push"})(An||(An={}));var gn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(gn||(gn={}));function qf(e){if(!e)if(Dt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Bf(e)}const Vf=/^[^#]+#/;function Xf(e,t){return e.replace(Vf,"#")+t}function Gf(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Cr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Qf(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=Gf(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function qi(e,t){return(history.state?history.state.position-t:-1)+e}const da=new Map;function Jf(e,t){da.set(e,t)}function Zf(e){const t=da.get(e);return da.delete(e),t}let eu=()=>location.protocol+"//"+location.host;function Ms(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),Wi(l,"")}return Wi(n,e)+r+a}function tu(e,t,n,r){let a=[],i=[],o=null;const s=({state:p})=>{const g=Ms(e,location),P=n.value,C=t.value;let L=0;if(p){if(n.value=g,t.value=p,o&&o===P){o=null;return}L=C?p.position-C.position:0}else r(g);a.forEach(y=>{y(n.value,P,{delta:L,type:An.pop,direction:L?L>0?gn.forward:gn.back:gn.unknown})})};function l(){o=n.value}function c(p){a.push(p);const g=()=>{const P=a.indexOf(p);P>-1&&a.splice(P,1)};return i.push(g),g}function f(){const{history:p}=window;p.state&&p.replaceState(X({},p.state,{scroll:Cr()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function Vi(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Cr():null}}function nu(e){const{history:t,location:n}=window,r={value:Ms(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,f){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:eu()+e+l;try{t[f?"replaceState":"pushState"](c,"",p),a.value=c}catch(g){console.error(g),n[f?"replace":"assign"](p)}}function o(l,c){const f=X({},t.state,Vi(a.value.back,l,a.value.forward,!0),c,{position:a.value.position});i(l,f,!0),r.value=l}function s(l,c){const f=X({},a.value,t.state,{forward:l,scroll:Cr()});i(f.current,f,!0);const d=X({},Vi(r.value,l,null),{position:f.position+1},c);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function ru(e){e=qf(e);const t=nu(e),n=tu(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=X({location:"",base:e,go:r,createHref:Xf.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function au(e){return typeof e=="string"||e&&typeof e=="object"}function Fs(e){return typeof e=="string"||typeof e=="symbol"}const st={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ls=Symbol("");var Xi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Xi||(Xi={}));function Zt(e,t){return X(new Error,{type:e,[Ls]:!0},t)}function Xe(e,t){return e instanceof Error&&Ls in e&&(t==null||!!(e.type&t))}const Gi="[^/]+?",iu={sensitive:!1,strict:!1,start:!0,end:!0},ou=/[.+*?^${}()[\]/\\]/g;function su(e,t){const n=X({},iu,t),r=[];let a=n.start?"^":"";const i=[];for(const c of e){const f=c.length?[]:[90];n.strict&&!c.length&&(a+="/");for(let d=0;d<c.length;d++){const p=c[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(a+="/"),a+=p.value.replace(ou,"\\$&"),g+=40;else if(p.type===1){const{value:P,repeatable:C,optional:L,regexp:y}=p;i.push({name:P,repeatable:C,optional:L});const x=y||Gi;if(x!==Gi){g+=10;try{new RegExp(`(${x})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${P}" (${x}): `+S.message)}}let F=C?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(F=L&&c.length<2?`(?:/${F})`:"/"+F),L&&(F+="?"),a+=F,g+=20,L&&(g+=-8),C&&(g+=-20),x===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(c){const f=c.match(o),d={};if(!f)return null;for(let p=1;p<f.length;p++){const g=f[p]||"",P=i[p-1];d[P.name]=g&&P.repeatable?g.split("/"):g}return d}function l(c){let f="",d=!1;for(const p of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const g of p)if(g.type===0)f+=g.value;else if(g.type===1){const{value:P,repeatable:C,optional:L}=g,y=P in c?c[P]:"";if(De(y)&&!C)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const x=De(y)?y.join("/"):y;if(!x)if(L)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${P}"`);f+=x}}return f||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function lu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function cu(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=lu(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Qi(r))return 1;if(Qi(a))return-1}return a.length-r.length}function Qi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const fu={type:0,value:""},uu=/[a-zA-Z0-9_]/;function du(e){if(!e)return[[]];if(e==="/")return[[fu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,c="",f="";function d(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:uu.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),a}function mu(e,t,n){const r=su(du(e.path),n),a=X(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function pu(e,t){const n=[],r=new Map;t=eo({strict:!1,end:!0,sensitive:!1},t);function a(f){return r.get(f)}function i(f,d,p){const g=!p,P=hu(f);P.aliasOf=p&&p.record;const C=eo(t,f),L=[P];if("alias"in f){const F=typeof f.alias=="string"?[f.alias]:f.alias;for(const S of F)L.push(X({},P,{components:p?p.record.components:P.components,path:S,aliasOf:p?p.record:P}))}let y,x;for(const F of L){const{path:S}=F;if(d&&S[0]!=="/"){const U=d.record.path,J=U[U.length-1]==="/"?"":"/";F.path=d.record.path+(S&&J+S)}if(y=mu(F,d,C),p?p.alias.push(y):(x=x||y,x!==y&&x.alias.push(y),g&&f.name&&!Zi(y)&&o(f.name)),P.children){const U=P.children;for(let J=0;J<U.length;J++)i(U[J],y,p&&p.children[J])}p=p||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&l(y)}return x?()=>{o(x)}:hn}function o(f){if(Fs(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function s(){return n}function l(f){let d=0;for(;d<n.length&&cu(f,n[d])>=0&&(f.record.path!==n[d].record.path||!js(f,n[d]));)d++;n.splice(d,0,f),f.record.name&&!Zi(f)&&r.set(f.record.name,f)}function c(f,d){let p,g={},P,C;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw Zt(1,{location:f});C=p.record.name,g=X(Ji(d.params,p.keys.filter(x=>!x.optional).map(x=>x.name)),f.params&&Ji(f.params,p.keys.map(x=>x.name))),P=p.stringify(g)}else if("path"in f)P=f.path,p=n.find(x=>x.re.test(P)),p&&(g=p.parse(P),C=p.record.name);else{if(p=d.name?r.get(d.name):n.find(x=>x.re.test(d.path)),!p)throw Zt(1,{location:f,currentLocation:d});C=p.record.name,g=X({},d.params,f.params),P=p.stringify(g)}const L=[];let y=p;for(;y;)L.unshift(y.record),y=y.parent;return{name:C,path:P,params:g,matched:L,meta:vu(L)}}return e.forEach(f=>i(f)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Ji(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function hu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:gu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function gu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Zi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function vu(e){return e.reduce((t,n)=>X(t,n.meta),{})}function eo(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function js(e,t){return t.children.some(n=>n===e||js(e,n))}const $s=/#/g,bu=/&/g,yu=/\//g,_u=/=/g,xu=/\?/g,Ds=/\+/g,wu=/%5B/g,Eu=/%5D/g,zs=/%5E/g,ku=/%60/g,Hs=/%7B/g,Au=/%7C/g,Bs=/%7D/g,Ou=/%20/g;function Va(e){return encodeURI(""+e).replace(Au,"|").replace(wu,"[").replace(Eu,"]")}function Pu(e){return Va(e).replace(Hs,"{").replace(Bs,"}").replace(zs,"^")}function ma(e){return Va(e).replace(Ds,"%2B").replace(Ou,"+").replace($s,"%23").replace(bu,"%26").replace(ku,"`").replace(Hs,"{").replace(Bs,"}").replace(zs,"^")}function Cu(e){return ma(e).replace(_u,"%3D")}function Su(e){return Va(e).replace($s,"%23").replace(xu,"%3F")}function Ru(e){return e==null?"":Su(e).replace(yu,"%2F")}function cr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Iu(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Ds," "),o=i.indexOf("="),s=cr(o<0?i:i.slice(0,o)),l=o<0?null:cr(i.slice(o+1));if(s in t){let c=t[s];De(c)||(c=t[s]=[c]),c.push(l)}else t[s]=l}return t}function to(e){let t="";for(let n in e){const r=e[n];if(n=Cu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(De(r)?r.map(i=>i&&ma(i)):[r&&ma(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Tu(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=De(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const Nu=Symbol(""),no=Symbol(""),Sr=Symbol(""),Xa=Symbol(""),pa=Symbol("");function cn(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function ft(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(Zt(4,{from:n,to:t})):d instanceof Error?s(d):au(d)?s(Zt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},c=e.call(r&&r.instances[a],t,n,l);let f=Promise.resolve(c);e.length<3&&(f=f.then(l)),f.catch(d=>s(d))})}function Kr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Mu(s)){const c=(s.__vccOpts||s)[t];c&&a.push(ft(c,n,r,i,o))}else{let l=s();a.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=zf(c)?c.default:c;i.components[o]=f;const p=(f.__vccOpts||f)[t];return p&&ft(p,n,r,i,o)()}))}}return a}function Mu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ro(e){const t=$e(Sr),n=$e(Xa),r=ue(()=>t.resolve(Se(e.to))),a=ue(()=>{const{matched:l}=r.value,{length:c}=l,f=l[c-1],d=n.matched;if(!f||!d.length)return-1;const p=d.findIndex(Jt.bind(null,f));if(p>-1)return p;const g=ao(l[c-2]);return c>1&&ao(f)===g&&d[d.length-1].path!==g?d.findIndex(Jt.bind(null,l[c-2])):p}),i=ue(()=>a.value>-1&&ju(n.params,r.value.params)),o=ue(()=>a.value>-1&&a.value===n.matched.length-1&&Ns(n.params,r.value.params));function s(l={}){return Lu(l)?t[Se(e.replace)?"replace":"push"](Se(e.to)).catch(hn):Promise.resolve()}return{route:r,href:ue(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Fu=bt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ro,setup(e,{slots:t}){const n=_r(ro(e)),{options:r}=$e(Sr),a=ue(()=>({[io(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[io(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:qa("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),ha=Fu;function Lu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ju(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!De(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function ao(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const io=(e,t,n)=>e??t??n,$u=bt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=$e(pa),a=ue(()=>e.route||r.value),i=$e(no,0),o=ue(()=>{let c=Se(i);const{matched:f}=a.value;let d;for(;(d=f[c])&&!d.components;)c++;return c}),s=ue(()=>a.value.matched[o.value]);Zn(no,ue(()=>o.value+1)),Zn(Nu,s),Zn(pa,a);const l=za();return Yt(()=>[l.value,s.value,e.name],([c,f,d],[p,g,P])=>{f&&(f.instances[d]=c,g&&g!==f&&c&&c===p&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),c&&f&&(!g||!Jt(f,g)||!p)&&(f.enterCallbacks[d]||[]).forEach(C=>C(c))},{flush:"post"}),()=>{const c=a.value,f=e.name,d=s.value,p=d&&d.components[f];if(!p)return oo(n.default,{Component:p,route:c});const g=d.props[f],P=g?g===!0?c.params:typeof g=="function"?g(c):g:null,L=qa(p,X({},P,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(d.instances[f]=null)},ref:l}));return oo(n.default,{Component:L,route:c})||L}}});function oo(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Us=$u;function Du(e){const t=pu(e.routes,e),n=e.parseQuery||Iu,r=e.stringifyQuery||to,a=e.history,i=cn(),o=cn(),s=cn(),l=rc(st);let c=st;Dt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Br.bind(null,b=>""+b),d=Br.bind(null,Ru),p=Br.bind(null,cr);function g(b,T){let O,j;return Fs(b)?(O=t.getRecordMatcher(b),j=T):j=b,t.addRoute(j,O)}function P(b){const T=t.getRecordMatcher(b);T&&t.removeRoute(T)}function C(){return t.getRoutes().map(b=>b.record)}function L(b){return!!t.getRecordMatcher(b)}function y(b,T){if(T=X({},T||l.value),typeof b=="string"){const h=Ur(n,b,T.path),v=t.resolve({path:h.path},T),_=a.createHref(h.fullPath);return X(h,v,{params:p(v.params),hash:cr(h.hash),redirectedFrom:void 0,href:_})}let O;if("path"in b)O=X({},b,{path:Ur(n,b.path,T.path).path});else{const h=X({},b.params);for(const v in h)h[v]==null&&delete h[v];O=X({},b,{params:d(h)}),T.params=d(T.params)}const j=t.resolve(O,T),V=b.hash||"";j.params=f(p(j.params));const u=Uf(r,X({},b,{hash:Pu(V),path:j.path})),m=a.createHref(u);return X({fullPath:u,hash:V,query:r===to?Tu(b.query):b.query||{}},j,{redirectedFrom:void 0,href:m})}function x(b){return typeof b=="string"?Ur(n,b,l.value.path):X({},b)}function F(b,T){if(c!==b)return Zt(8,{from:T,to:b})}function S(b){return ae(b)}function U(b){return S(X(x(b),{replace:!0}))}function J(b){const T=b.matched[b.matched.length-1];if(T&&T.redirect){const{redirect:O}=T;let j=typeof O=="function"?O(b):O;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=x(j):{path:j},j.params={}),X({query:b.query,hash:b.hash,params:"path"in j?{}:b.params},j)}}function ae(b,T){const O=c=y(b),j=l.value,V=b.state,u=b.force,m=b.replace===!0,h=J(O);if(h)return ae(X(x(h),{state:typeof h=="object"?X({},V,h.state):V,force:u,replace:m}),T||O);const v=O;v.redirectedFrom=T;let _;return!u&&Kf(r,j,O)&&(_=Zt(16,{to:v,from:j}),He(j,j,!0,!1)),(_?Promise.resolve(_):Pe(v,j)).catch(w=>Xe(w)?Xe(w,2)?w:it(w):q(w,v,j)).then(w=>{if(w){if(Xe(w,2))return ae(X({replace:m},x(w.to),{state:typeof w.to=="object"?X({},V,w.to.state):V,force:u}),T||v)}else w=yt(v,j,!0,m,V);return at(v,j,w),w})}function Ee(b,T){const O=F(b,T);return O?Promise.reject(O):Promise.resolve()}function ve(b){const T=Ft.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(b):b()}function Pe(b,T){let O;const[j,V,u]=zu(b,T);O=Kr(j.reverse(),"beforeRouteLeave",b,T);for(const h of j)h.leaveGuards.forEach(v=>{O.push(ft(v,b,T))});const m=Ee.bind(null,b,T);return O.push(m),pe(O).then(()=>{O=[];for(const h of i.list())O.push(ft(h,b,T));return O.push(m),pe(O)}).then(()=>{O=Kr(V,"beforeRouteUpdate",b,T);for(const h of V)h.updateGuards.forEach(v=>{O.push(ft(v,b,T))});return O.push(m),pe(O)}).then(()=>{O=[];for(const h of u)if(h.beforeEnter)if(De(h.beforeEnter))for(const v of h.beforeEnter)O.push(ft(v,b,T));else O.push(ft(h.beforeEnter,b,T));return O.push(m),pe(O)}).then(()=>(b.matched.forEach(h=>h.enterCallbacks={}),O=Kr(u,"beforeRouteEnter",b,T),O.push(m),pe(O))).then(()=>{O=[];for(const h of o.list())O.push(ft(h,b,T));return O.push(m),pe(O)}).catch(h=>Xe(h,8)?h:Promise.reject(h))}function at(b,T,O){s.list().forEach(j=>ve(()=>j(b,T,O)))}function yt(b,T,O,j,V){const u=F(b,T);if(u)return u;const m=T===st,h=Dt?history.state:{};O&&(j||m?a.replace(b.fullPath,X({scroll:m&&h&&h.scroll},V)):a.push(b.fullPath,V)),l.value=b,He(b,T,O,m),it()}let ze;function on(){ze||(ze=a.listen((b,T,O)=>{if(!Mn.listening)return;const j=y(b),V=J(j);if(V){ae(X(V,{replace:!0}),j).catch(hn);return}c=j;const u=l.value;Dt&&Jf(qi(u.fullPath,O.delta),Cr()),Pe(j,u).catch(m=>Xe(m,12)?m:Xe(m,2)?(ae(m.to,j).then(h=>{Xe(h,20)&&!O.delta&&O.type===An.pop&&a.go(-1,!1)}).catch(hn),Promise.reject()):(O.delta&&a.go(-O.delta,!1),q(m,j,u))).then(m=>{m=m||yt(j,u,!1),m&&(O.delta&&!Xe(m,8)?a.go(-O.delta,!1):O.type===An.pop&&Xe(m,20)&&a.go(-1,!1)),at(j,u,m)}).catch(hn)}))}let Nt=cn(),ce=cn(),Q;function q(b,T,O){it(b);const j=ce.list();return j.length?j.forEach(V=>V(b,T,O)):console.error(b),Promise.reject(b)}function Ve(){return Q&&l.value!==st?Promise.resolve():new Promise((b,T)=>{Nt.add([b,T])})}function it(b){return Q||(Q=!b,on(),Nt.list().forEach(([T,O])=>b?O(b):T()),Nt.reset()),b}function He(b,T,O,j){const{scrollBehavior:V}=e;if(!Dt||!V)return Promise.resolve();const u=!O&&Zf(qi(b.fullPath,0))||(j||!O)&&history.state&&history.state.scroll||null;return ls().then(()=>V(b,T,u)).then(m=>m&&Qf(m)).catch(m=>q(m,b,T))}const ye=b=>a.go(b);let Mt;const Ft=new Set,Mn={currentRoute:l,listening:!0,addRoute:g,removeRoute:P,hasRoute:L,getRoutes:C,resolve:y,options:e,push:S,replace:U,go:ye,back:()=>ye(-1),forward:()=>ye(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:ce.add,isReady:Ve,install(b){const T=this;b.component("RouterLink",ha),b.component("RouterView",Us),b.config.globalProperties.$router=T,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Se(l)}),Dt&&!Mt&&l.value===st&&(Mt=!0,S(a.location).catch(V=>{}));const O={};for(const V in st)Object.defineProperty(O,V,{get:()=>l.value[V],enumerable:!0});b.provide(Sr,T),b.provide(Xa,Zo(O)),b.provide(pa,l);const j=b.unmount;Ft.add(b),b.unmount=function(){Ft.delete(b),Ft.size<1&&(c=st,ze&&ze(),ze=null,l.value=st,Mt=!1,Q=!1),j()}}};function pe(b){return b.reduce((T,O)=>T.then(()=>ve(O)),Promise.resolve())}return Mn}function zu(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(c=>Jt(c,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(c=>Jt(c,l))||a.push(l))}return[n,r,a]}function Hu(){return $e(Sr)}function op(){return $e(Xa)}const Bu={class:"flex flex-row p-6 gap-4 text-m md:text-2xl"},Uu=bt({__name:"NavComp",setup(e){return(t,n)=>(Ye(),ut("div",Bu,[fe(Se(ha),{"active-class":"active",to:"/"},{default:aa(()=>[En("Home")]),_:1}),fe(Se(ha),{"active-class":"active",to:"/favorites"},{default:aa(()=>[En("Favorites")]),_:1})]))}});const Rr=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Ku=Rr(Uu,[["__scopeId","data-v-a4d7cd71"]]),Wu=bt({__name:"App",setup(e){return(t,n)=>(Ye(),ut(Ce,null,[fe(Ku),fe(Se(Us))],64))}});function so(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?so(Object(n),!0).forEach(function(r){le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):so(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fr(e){"@babel/helpers - typeof";return fr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fr(e)}function Yu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function lo(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function qu(e,t,n){return t&&lo(e.prototype,t),n&&lo(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ga(e,t){return Xu(e)||Qu(e,t)||Ks(e,t)||Zu()}function In(e){return Vu(e)||Gu(e)||Ks(e)||Ju()}function Vu(e){if(Array.isArray(e))return ga(e)}function Xu(e){if(Array.isArray(e))return e}function Gu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Qu(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Ks(e,t){if(e){if(typeof e=="string")return ga(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ga(e,t)}}function ga(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ju(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var co=function(){},Qa={},Ws={},Ys=null,qs={mark:co,measure:co};try{typeof window<"u"&&(Qa=window),typeof document<"u"&&(Ws=document),typeof MutationObserver<"u"&&(Ys=MutationObserver),typeof performance<"u"&&(qs=performance)}catch{}var ed=Qa.navigator||{},fo=ed.userAgent,uo=fo===void 0?"":fo,ht=Qa,ne=Ws,mo=Ys,Hn=qs;ht.document;var rt=!!ne.documentElement&&!!ne.head&&typeof ne.addEventListener=="function"&&typeof ne.createElement=="function",Vs=~uo.indexOf("MSIE")||~uo.indexOf("Trident/"),Bn,Un,Kn,Wn,Yn,Ze="___FONT_AWESOME___",va=16,Xs="fa",Gs="svg-inline--fa",It="data-fa-i2svg",ba="data-fa-pseudo-element",td="data-fa-pseudo-element-pending",Ja="data-prefix",Za="data-icon",po="fontawesome-i2svg",nd="async",rd=["HTML","HEAD","STYLE","SCRIPT"],Qs=function(){try{return!0}catch{return!1}}(),te="classic",ie="sharp",ei=[te,ie];function Tn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[te]}})}var On=Tn((Bn={},le(Bn,te,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),le(Bn,ie,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Bn)),Pn=Tn((Un={},le(Un,te,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),le(Un,ie,{solid:"fass",regular:"fasr",light:"fasl"}),Un)),Cn=Tn((Kn={},le(Kn,te,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),le(Kn,ie,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Kn)),ad=Tn((Wn={},le(Wn,te,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),le(Wn,ie,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Wn)),id=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Js="fa-layers-text",od=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,sd=Tn((Yn={},le(Yn,te,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),le(Yn,ie,{900:"fass",400:"fasr",300:"fasl"}),Yn)),Zs=[1,2,3,4,5,6,7,8,9,10],ld=Zs.concat([11,12,13,14,15,16,17,18,19,20]),cd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],At={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Sn=new Set;Object.keys(Pn[te]).map(Sn.add.bind(Sn));Object.keys(Pn[ie]).map(Sn.add.bind(Sn));var fd=[].concat(ei,In(Sn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",At.GROUP,At.SWAP_OPACITY,At.PRIMARY,At.SECONDARY]).concat(Zs.map(function(e){return"".concat(e,"x")})).concat(ld.map(function(e){return"w-".concat(e)})),vn=ht.FontAwesomeConfig||{};function ud(e){var t=ne.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function dd(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ne&&typeof ne.querySelector=="function"){var md=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];md.forEach(function(e){var t=Ga(e,2),n=t[0],r=t[1],a=dd(ud(n));a!=null&&(vn[r]=a)})}var el={styleDefault:"solid",familyDefault:"classic",cssPrefix:Xs,replacementClass:Gs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};vn.familyPrefix&&(vn.cssPrefix=vn.familyPrefix);var en=I(I({},el),vn);en.autoReplaceSvg||(en.observeMutations=!1);var M={};Object.keys(el).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){en[e]=n,bn.forEach(function(r){return r(M)})},get:function(){return en[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){en.cssPrefix=t,bn.forEach(function(n){return n(M)})},get:function(){return en.cssPrefix}});ht.FontAwesomeConfig=M;var bn=[];function pd(e){return bn.push(e),function(){bn.splice(bn.indexOf(e),1)}}var lt=va,qe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function hd(e){if(!(!e||!rt)){var t=ne.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ne.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ne.head.insertBefore(t,r),e}}var gd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Rn(){for(var e=12,t="";e-- >0;)t+=gd[Math.random()*62|0];return t}function an(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ti(e){return e.classList?an(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function tl(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function vd(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(tl(e[n]),'" ')},"").trim()}function Ir(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ni(e){return e.size!==qe.size||e.x!==qe.x||e.y!==qe.y||e.rotate!==qe.rotate||e.flipX||e.flipY}function bd(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function yd(e){var t=e.transform,n=e.width,r=n===void 0?va:n,a=e.height,i=a===void 0?va:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Vs?l+="translate(".concat(t.x/lt-r/2,"em, ").concat(t.y/lt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/lt,"em), calc(-50% + ").concat(t.y/lt,"em)) "):l+="translate(".concat(t.x/lt,"em, ").concat(t.y/lt,"em) "),l+="scale(".concat(t.size/lt*(t.flipX?-1:1),", ").concat(t.size/lt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var _d=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function nl(){var e=Xs,t=Gs,n=M.cssPrefix,r=M.replacementClass,a=_d;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ho=!1;function Wr(){M.autoAddCss&&!ho&&(hd(nl()),ho=!0)}var xd={mixout:function(){return{dom:{css:nl,insertCss:Wr}}},hooks:function(){return{beforeDOMElementCreation:function(){Wr()},beforeI2svg:function(){Wr()}}}},et=ht||{};et[Ze]||(et[Ze]={});et[Ze].styles||(et[Ze].styles={});et[Ze].hooks||(et[Ze].hooks={});et[Ze].shims||(et[Ze].shims=[]);var Fe=et[Ze],rl=[],wd=function e(){ne.removeEventListener("DOMContentLoaded",e),ur=1,rl.map(function(t){return t()})},ur=!1;rt&&(ur=(ne.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ne.readyState),ur||ne.addEventListener("DOMContentLoaded",wd));function Ed(e){rt&&(ur?setTimeout(e,0):rl.push(e))}function Nn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?tl(e):"<".concat(t," ").concat(vd(r),">").concat(i.map(Nn).join(""),"</").concat(t,">")}function go(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var kd=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Yr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?kd(n,a):n,l,c,f;for(r===void 0?(l=1,f=t[i[0]]):(l=0,f=r);l<o;l++)c=i[l],f=s(f,t[c],c,t);return f};function Ad(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ya(e){var t=Ad(e);return t.length===1?t[0].toString(16):null}function Od(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function vo(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function _a(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=vo(t);typeof Fe.hooks.addPack=="function"&&!a?Fe.hooks.addPack(e,vo(t)):Fe.styles[e]=I(I({},Fe.styles[e]||{}),i),e==="fas"&&_a("fa",t)}var qn,Vn,Xn,zt=Fe.styles,Pd=Fe.shims,Cd=(qn={},le(qn,te,Object.values(Cn[te])),le(qn,ie,Object.values(Cn[ie])),qn),ri=null,al={},il={},ol={},sl={},ll={},Sd=(Vn={},le(Vn,te,Object.keys(On[te])),le(Vn,ie,Object.keys(On[ie])),Vn);function Rd(e){return~fd.indexOf(e)}function Id(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Rd(a)?a:null}var cl=function(){var t=function(i){return Yr(zt,function(o,s,l){return o[l]=Yr(s,i,{}),o},{})};al=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),il=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),ll=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in zt||M.autoFetchSvg,r=Yr(Pd,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});ol=r.names,sl=r.unicodes,ri=Tr(M.styleDefault,{family:M.familyDefault})};pd(function(e){ri=Tr(e.styleDefault,{family:M.familyDefault})});cl();function ai(e,t){return(al[e]||{})[t]}function Td(e,t){return(il[e]||{})[t]}function Ot(e,t){return(ll[e]||{})[t]}function fl(e){return ol[e]||{prefix:null,iconName:null}}function Nd(e){var t=sl[e],n=ai("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function gt(){return ri}var ii=function(){return{prefix:null,iconName:null,rest:[]}};function Tr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?te:n,a=On[r][e],i=Pn[r][e]||Pn[r][a],o=e in Fe.styles?e:null;return i||o||null}var bo=(Xn={},le(Xn,te,Object.keys(Cn[te])),le(Xn,ie,Object.keys(Cn[ie])),Xn);function Nr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},le(t,te,"".concat(M.cssPrefix,"-").concat(te)),le(t,ie,"".concat(M.cssPrefix,"-").concat(ie)),t),o=null,s=te;(e.includes(i[te])||e.some(function(c){return bo[te].includes(c)}))&&(s=te),(e.includes(i[ie])||e.some(function(c){return bo[ie].includes(c)}))&&(s=ie);var l=e.reduce(function(c,f){var d=Id(M.cssPrefix,f);if(zt[f]?(f=Cd[s].includes(f)?ad[s][f]:f,o=f,c.prefix=f):Sd[s].indexOf(f)>-1?(o=f,c.prefix=Tr(f,{family:s})):d?c.iconName=d:f!==M.replacementClass&&f!==i[te]&&f!==i[ie]&&c.rest.push(f),!a&&c.prefix&&c.iconName){var p=o==="fa"?fl(c.iconName):{},g=Ot(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||g||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!zt.far&&zt.fas&&!M.autoFetchSvg&&(c.prefix="fas")}return c},ii());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ie&&(zt.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ot(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=gt()||"fas"),l}var Md=function(){function e(){Yu(this,e),this.definitions={}}return qu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=I(I({},n.definitions[s]||{}),o[s]),_a(s,o[s]);var l=Cn[te][s];l&&_a(l,o[s]),cl()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][l]=c}),n}}]),e}(),yo=[],Ht={},qt={},Fd=Object.keys(qt);function Ld(e,t){var n=t.mixoutsTo;return yo=e,Ht={},Object.keys(qt).forEach(function(r){Fd.indexOf(r)===-1&&delete qt[r]}),yo.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),fr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Ht[o]||(Ht[o]=[]),Ht[o].push(i[o])})}r.provides&&r.provides(qt)}),n}function xa(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Ht[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Tt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Ht[e]||[];a.forEach(function(i){i.apply(null,n)})}function tt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return qt[e]?qt[e].apply(null,t):void 0}function wa(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||gt();if(t)return t=Ot(n,t)||t,go(ul.definitions,n,t)||go(Fe.styles,n,t)}var ul=new Md,jd=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,Tt("noAuto")},$d={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return rt?(Tt("beforeI2svg",t),tt("pseudoElements2svg",t),tt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,Ed(function(){zd({autoReplaceSvgRoot:n}),Tt("watch",t)})}},Dd={icon:function(t){if(t===null)return null;if(fr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ot(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Tr(t[0]);return{prefix:r,iconName:Ot(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(id))){var a=Nr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||gt(),iconName:Ot(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=gt();return{prefix:i,iconName:Ot(i,t)||t}}}},Oe={noAuto:jd,config:M,dom:$d,parse:Dd,library:ul,findIconDefinition:wa,toHtml:Nn},zd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ne:n;(Object.keys(Fe.styles).length>0||M.autoFetchSvg)&&rt&&M.autoReplaceSvg&&Oe.dom.i2svg({node:r})};function Mr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Nn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(rt){var r=ne.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Hd(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ni(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Ir(I(I({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Bd(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},a),{},{id:o}),children:r}]}]}function oi(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,d=e.extra,p=e.watchable,g=p===void 0?!1:p,P=r.found?r:n,C=P.width,L=P.height,y=a==="fak",x=[M.replacementClass,i?"".concat(M.cssPrefix,"-").concat(i):""].filter(function(ve){return d.classes.indexOf(ve)===-1}).filter(function(ve){return ve!==""||!!ve}).concat(d.classes).join(" "),F={children:[],attributes:I(I({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:x,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(L)})},S=y&&!~d.classes.indexOf("fa-fw")?{width:"".concat(C/L*16*.0625,"em")}:{};g&&(F.attributes[It]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(f||Rn())},children:[l]}),delete F.attributes.title);var U=I(I({},F),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:I(I({},S),d.styles)}),J=r.found&&n.found?tt("generateAbstractMask",U)||{children:[],attributes:{}}:tt("generateAbstractIcon",U)||{children:[],attributes:{}},ae=J.children,Ee=J.attributes;return U.children=ae,U.attributes=Ee,s?Bd(U):Hd(U)}function _o(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=I(I(I({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[It]="");var f=I({},o.styles);ni(a)&&(f.transform=yd({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=Ir(f);d.length>0&&(c.style=d);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Ud(e){var t=e.content,n=e.title,r=e.extra,a=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Ir(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var qr=Fe.styles;function Ea(e){var t=e[0],n=e[1],r=e.slice(4),a=Ga(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(At.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(At.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(At.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Kd={found:!1,width:512,height:512};function Wd(e,t){!Qs&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ka(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=gt()),new Promise(function(r,a){if(tt("missingIconAbstract"),n==="fa"){var i=fl(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&qr[t]&&qr[t][e]){var o=qr[t][e];return r(Ea(o))}Wd(e,t),r(I(I({},Kd),{},{icon:M.showMissingIcons&&e?tt("missingIconAbstract")||{}:{}}))})}var xo=function(){},Aa=M.measurePerformance&&Hn&&Hn.mark&&Hn.measure?Hn:{mark:xo,measure:xo},dn='FA "6.4.2"',Yd=function(t){return Aa.mark("".concat(dn," ").concat(t," begins")),function(){return dl(t)}},dl=function(t){Aa.mark("".concat(dn," ").concat(t," ends")),Aa.measure("".concat(dn," ").concat(t),"".concat(dn," ").concat(t," begins"),"".concat(dn," ").concat(t," ends"))},si={begin:Yd,end:dl},tr=function(){};function wo(e){var t=e.getAttribute?e.getAttribute(It):null;return typeof t=="string"}function qd(e){var t=e.getAttribute?e.getAttribute(Ja):null,n=e.getAttribute?e.getAttribute(Za):null;return t&&n}function Vd(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function Xd(){if(M.autoReplaceSvg===!0)return nr.replace;var e=nr[M.autoReplaceSvg];return e||nr.replace}function Gd(e){return ne.createElementNS("http://www.w3.org/2000/svg",e)}function Qd(e){return ne.createElement(e)}function ml(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Gd:Qd:n;if(typeof e=="string")return ne.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(ml(o,{ceFn:r}))}),a}function Jd(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var nr={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(ml(a),n)}),n.getAttribute(It)===null&&M.keepOriginalSource){var r=ne.createComment(Jd(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ti(n).indexOf(M.replacementClass))return nr.replace(t);var a=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===M.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Nn(s)}).join(`
`);n.setAttribute(It,""),n.innerHTML=o}};function Eo(e){e()}function pl(e,t){var n=typeof t=="function"?t:tr;if(e.length===0)n();else{var r=Eo;M.mutateApproach===nd&&(r=ht.requestAnimationFrame||Eo),r(function(){var a=Xd(),i=si.begin("mutate");e.map(a),i(),n()})}}var li=!1;function hl(){li=!0}function Oa(){li=!1}var dr=null;function ko(e){if(mo&&M.observeMutations){var t=e.treeCallback,n=t===void 0?tr:t,r=e.nodeCallback,a=r===void 0?tr:r,i=e.pseudoElementsCallback,o=i===void 0?tr:i,s=e.observeMutationsRoot,l=s===void 0?ne:s;dr=new mo(function(c){if(!li){var f=gt();an(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!wo(d.addedNodes[0])&&(M.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&M.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&wo(d.target)&&~cd.indexOf(d.attributeName))if(d.attributeName==="class"&&qd(d.target)){var p=Nr(ti(d.target)),g=p.prefix,P=p.iconName;d.target.setAttribute(Ja,g||f),P&&d.target.setAttribute(Za,P)}else Vd(d.target)&&a(d.target)})}}),rt&&dr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Zd(){dr&&dr.disconnect()}function em(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function tm(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Nr(ti(e));return a.prefix||(a.prefix=gt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Td(a.prefix,e.innerText)||ai(a.prefix,ya(e.innerText))),!a.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function nm(e){var t=an(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||Rn()):(t["aria-hidden"]="true",t.focusable="false")),t}function rm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:qe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ao(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=tm(e),r=n.iconName,a=n.prefix,i=n.rest,o=nm(e),s=xa("parseNodeAttributes",{},e),l=t.styleParser?em(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:qe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var am=Fe.styles;function gl(e){var t=M.autoReplaceSvg==="nest"?Ao(e,{styleParser:!1}):Ao(e);return~t.extra.classes.indexOf(Js)?tt("generateLayersText",e,t):tt("generateSvgReplacementMutation",e,t)}var vt=new Set;ei.map(function(e){vt.add("fa-".concat(e))});Object.keys(On[te]).map(vt.add.bind(vt));Object.keys(On[ie]).map(vt.add.bind(vt));vt=In(vt);function Oo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!rt)return Promise.resolve();var n=ne.documentElement.classList,r=function(d){return n.add("".concat(po,"-").concat(d))},a=function(d){return n.remove("".concat(po,"-").concat(d))},i=M.autoFetchSvg?vt:ei.map(function(f){return"fa-".concat(f)}).concat(Object.keys(am));i.includes("fa")||i.push("fa");var o=[".".concat(Js,":not([").concat(It,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(It,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=an(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=si.begin("onTree"),c=s.reduce(function(f,d){try{var p=gl(d);p&&f.push(p)}catch(g){Qs||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(p){pl(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(p){l(),d(p)})})}function im(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;gl(e).then(function(n){n&&pl([n],t)})}function om(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:wa(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:wa(a||{})),e(r,I(I({},n),{},{mask:a}))}}var sm=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?qe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,d=n.title,p=d===void 0?null:d,g=n.titleId,P=g===void 0?null:g,C=n.classes,L=C===void 0?[]:C,y=n.attributes,x=y===void 0?{}:y,F=n.styles,S=F===void 0?{}:F;if(t){var U=t.prefix,J=t.iconName,ae=t.icon;return Mr(I({type:"icon"},t),function(){return Tt("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(p?x["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(P||Rn()):(x["aria-hidden"]="true",x.focusable="false")),oi({icons:{main:Ea(ae),mask:l?Ea(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:J,transform:I(I({},qe),a),symbol:o,title:p,maskId:f,titleId:P,extra:{attributes:x,styles:S,classes:L}})})}},lm={mixout:function(){return{icon:om(sm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Oo,n.nodeCallback=im,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ne:r,i=n.callback,o=i===void 0?function(){}:i;return Oo(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,d=r.maskId,p=r.extra;return new Promise(function(g,P){Promise.all([ka(a,s),f.iconName?ka(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var L=Ga(C,2),y=L[0],x=L[1];g([n,oi({icons:{main:y,mask:x},prefix:s,iconName:a,transform:l,symbol:c,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(P)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Ir(s);l.length>0&&(a.style=l);var c;return ni(o)&&(c=tt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},cm={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Mr({type:"layer"},function(){Tt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(In(i)).join(" ")},children:o}]})}}}},fm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,d=f===void 0?{}:f;return Mr({type:"counter",content:n},function(){return Tt("beforeDOMElementCreation",{content:n,params:r}),Ud({content:n.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(In(s))}})})}}}},um={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?qe:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,d=f===void 0?{}:f,p=r.styles,g=p===void 0?{}:p;return Mr({type:"text",content:n},function(){return Tt("beforeDOMElementCreation",{content:n,params:r}),_o({content:n,transform:I(I({},qe),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(M.cssPrefix,"-layers-text")].concat(In(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Vs){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return M.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,_o({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},dm=new RegExp('"',"ug"),Po=[1105920,1112319];function mm(e){var t=e.replace(dm,""),n=Od(t,0),r=n>=Po[0]&&n<=Po[1],a=t.length===2?t[0]===t[1]:!1;return{value:ya(a?t[0]:t),isSecondary:r||a}}function Co(e,t){var n="".concat(td).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=an(e.children),o=i.filter(function(ae){return ae.getAttribute(ba)===t})[0],s=ht.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(od),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?ie:te,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Pn[p][l[2].toLowerCase()]:sd[p][c],P=mm(d),C=P.value,L=P.isSecondary,y=l[0].startsWith("FontAwesome"),x=ai(g,C),F=x;if(y){var S=Nd(C);S.iconName&&S.prefix&&(x=S.iconName,g=S.prefix)}if(x&&!L&&(!o||o.getAttribute(Ja)!==g||o.getAttribute(Za)!==F)){e.setAttribute(n,F),o&&e.removeChild(o);var U=rm(),J=U.extra;J.attributes[ba]=t,ka(x,g).then(function(ae){var Ee=oi(I(I({},U),{},{icons:{main:ae,mask:ii()},prefix:g,iconName:F,extra:J,watchable:!0})),ve=ne.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ve,e.firstChild):e.appendChild(ve),ve.outerHTML=Ee.map(function(Pe){return Nn(Pe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function pm(e){return Promise.all([Co(e,"::before"),Co(e,"::after")])}function hm(e){return e.parentNode!==document.head&&!~rd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ba)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function So(e){if(rt)return new Promise(function(t,n){var r=an(e.querySelectorAll("*")).filter(hm).map(pm),a=si.begin("searchPseudoElements");hl(),Promise.all(r).then(function(){a(),Oa(),t()}).catch(function(){a(),Oa(),n()})})}var gm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=So,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ne:r;M.searchPseudoElements&&So(a)}}},Ro=!1,vm={mixout:function(){return{dom:{unwatch:function(){hl(),Ro=!0}}}},hooks:function(){return{bootstrap:function(){ko(xa("mutationObserverCallbacks",{}))},noAuto:function(){Zd()},watch:function(n){var r=n.observeMutationsRoot;Ro?Oa():ko(xa("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Io=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},bm={mixout:function(){return{parse:{transform:function(n){return Io(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Io(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:p};return{tag:"g",attributes:I({},g.outer),children:[{tag:"g",attributes:I({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),g.path)}]}]}}}},Vr={x:0,y:0,width:"100%",height:"100%"};function To(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ym(e){return e.tag==="g"?e.children:[e]}var _m={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Nr(a.split(" ").map(function(o){return o.trim()})):ii();return i.prefix||(i.prefix=gt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,d=o.width,p=o.icon,g=bd({transform:l,containerWidth:d,iconWidth:c}),P={tag:"rect",attributes:I(I({},Vr),{},{fill:"white"})},C=f.children?{children:f.children.map(To)}:{},L={tag:"g",attributes:I({},g.inner),children:[To(I({tag:f.tag,attributes:I(I({},f.attributes),g.path)},C))]},y={tag:"g",attributes:I({},g.outer),children:[L]},x="mask-".concat(s||Rn()),F="clip-".concat(s||Rn()),S={tag:"mask",attributes:I(I({},Vr),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[P,y]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:ym(p)},S]};return r.push(U,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(x,")")},Vr)}),{children:r,attributes:a}}}},xm={provides:function(t){var n=!1;ht.matchMedia&&(n=ht.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=I(I({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:I(I({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:I(I({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:I(I({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},wm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Em=[xd,lm,cm,fm,um,gm,vm,bm,_m,xm,wm];Ld(Em,{mixoutsTo:Oe});Oe.noAuto;Oe.config;Oe.library;Oe.dom;var Pa=Oe.parse;Oe.findIconDefinition;Oe.toHtml;var km=Oe.icon;Oe.layer;Oe.text;Oe.counter;function No(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Qe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?No(Object(n),!0).forEach(function(r){_e(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):No(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function mr(e){"@babel/helpers - typeof";return mr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mr(e)}function _e(e,t,n){return t=Cm(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Am(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Om(e,t){if(e==null)return{};var n=Am(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Pm(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Cm(e){var t=Pm(e,"string");return typeof t=="symbol"?t:String(t)}var Sm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},vl={exports:{}};(function(e){(function(t){var n=function(y,x,F){if(!c(x)||d(x)||p(x)||g(x)||l(x))return x;var S,U=0,J=0;if(f(x))for(S=[],J=x.length;U<J;U++)S.push(n(y,x[U],F));else{S={};for(var ae in x)Object.prototype.hasOwnProperty.call(x,ae)&&(S[y(ae,F)]=n(y,x[ae],F))}return S},r=function(y,x){x=x||{};var F=x.separator||"_",S=x.split||/(?=[A-Z])/;return y.split(S).join(F)},a=function(y){return P(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(x,F){return F?F.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var x=a(y);return x.substr(0,1).toUpperCase()+x.substr(1)},o=function(y,x){return r(y,x).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},c=function(y){return y===Object(y)},f=function(y){return s.call(y)=="[object Array]"},d=function(y){return s.call(y)=="[object Date]"},p=function(y){return s.call(y)=="[object RegExp]"},g=function(y){return s.call(y)=="[object Boolean]"},P=function(y){return y=y-0,y===y},C=function(y,x){var F=x&&"process"in x?x.process:x;return typeof F!="function"?y:function(S,U){return F(S,y,U)}},L={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,x){return n(C(a,x),y)},decamelizeKeys:function(y,x){return n(C(o,x),y,x)},pascalizeKeys:function(y,x){return n(C(i,x),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=L:t.humps=L})(Sm)})(vl);var Rm=vl.exports,Im=["class","style"];function Tm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Rm.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Nm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function bl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return bl(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.class=Nm(f);break;case"style":l.style=Tm(f);break;default:l.attrs[c]=f}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Om(n,Im);return qa(e.tag,Qe(Qe(Qe({},t),{},{class:a.class,style:Qe(Qe({},a.style),o)},a.attrs),s),r)}var yl=!1;try{yl=!0}catch{}function Mm(){if(!yl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Xr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?_e({},e,t):{}}function Fm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},_e(t,"fa-".concat(e.size),e.size!==null),_e(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),_e(t,"fa-pull-".concat(e.pull),e.pull!==null),_e(t,"fa-swap-opacity",e.swapOpacity),_e(t,"fa-bounce",e.bounce),_e(t,"fa-shake",e.shake),_e(t,"fa-beat",e.beat),_e(t,"fa-fade",e.fade),_e(t,"fa-beat-fade",e.beatFade),_e(t,"fa-flash",e.flash),_e(t,"fa-spin-pulse",e.spinPulse),_e(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Mo(e){if(e&&mr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Pa.icon)return Pa.icon(e);if(e===null)return null;if(mr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Lm=bt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ue(function(){return Mo(t.icon)}),i=ue(function(){return Xr("classes",Fm(t))}),o=ue(function(){return Xr("transform",typeof t.transform=="string"?Pa.transform(t.transform):t.transform)}),s=ue(function(){return Xr("mask",Mo(t.mask))}),l=ue(function(){return km(a.value,Qe(Qe(Qe(Qe({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});Yt(l,function(f){if(!f)return Mm("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=ue(function(){return l.value?bl(l.value.abstract[0],{},r):null});return function(){return c.value}}});const jm="modulepreload",$m=function(e){return"/"+e},Fo={},Gr=function(t,n,r){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=$m(i),i in Fo)return;Fo[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(!!r)for(let f=a.length-1;f>=0;f--){const d=a[f];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":jm,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((f,d)=>{c.addEventListener("load",f),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};async function Dm(e){const t=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e.trim()}`);if(!t.ok)throw new Error("Failed to fetch recipe data. Please try again later.");return t.json()}const pr=za([]),rr=za("");Yt(rr,async(e,t)=>{if(e.trim()!==""&&e!==t)try{const n=await Dm(e);pr.value=n.meals||[]}catch(n){console.error(n)}else pr.value=[]});const zm={class:"image-box"},Hm=["src","alt"],Bm={class:"text-box"},Um={class:"text-xl"},Km=bt({__name:"CardComp",props:["recipe"],setup(e){const t=Hu(),{recipe:n}=e,r=()=>{t.push(`/recipe/${n.idMeal}`)};return(a,i)=>(Ye(),ut("div",{class:"card",onClick:r},[Ae("div",zm,[Ae("img",{src:e.recipe.strMealThumb,alt:e.recipe.strMeal},null,8,Hm)]),Ae("div",Bm,[Ae("h2",Um,Nl(e.recipe.strMeal),1)])]))}});const Wm=Rr(Km,[["__scopeId","data-v-1cffee59"]]),_l=e=>(ms("data-v-7ecec0f1"),e=e(),ps(),e),Ym=_l(()=>Ae("header",null,[Ae("h3",{class:"text-4xl md:text-6xl p-8"},[En("Elevate Your "),Ae("br"),En("Dining Experience")])],-1)),qm={class:"p-6"},Vm=_l(()=>Ae("label",{for:"small-input",class:"mb-2 text-sm font-medium text-gray-900 dark:text-white"},null,-1)),Xm=bt({__name:"HeaderComp",setup(e){return(t,n)=>(Ye(),ut(Ce,null,[Ym,Ae("div",qm,[Vm,wc(Ae("input",{type:"text",id:"small-input",placeholder:"Search you recipe","onUpdate:modelValue":n[0]||(n[0]=r=>de(rr)?rr.value=r:null),class:"w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"},null,512),[[Ff,Se(rr)]])])],64))}});const Gm=Rr(Xm,[["__scopeId","data-v-7ecec0f1"]]),Qm=e=>(ms("data-v-12917436"),e=e(),ps(),e),Jm={key:0,class:"cards"},Zm={key:1},ep=Qm(()=>Ae("p",null,"Discover your favorite recipes",-1)),tp=[ep],np=bt({__name:"HomeView",setup(e){return(t,n)=>(Ye(),ut("main",null,[fe(Gm),Se(pr).length>0?(Ye(),ut("div",Jm,[(Ye(!0),ut(Ce,null,Fc(Se(pr),r=>(Ye(),Ss(Wm,{key:r.idMeal,recipe:r},null,8,["recipe"]))),128))])):(Ye(),ut("div",Zm,tp))]))}});const rp=Rr(np,[["__scopeId","data-v-12917436"]]),ap=Du({history:ru("/"),routes:[{path:"/",name:"home",component:rp},{path:"/home",redirect:"/"},{path:"/recipe/:id",name:"recipe",component:()=>Gr(()=>import("./RecipeView-4f97ddc2.js"),["assets/RecipeView-4f97ddc2.js","assets/RecipeView-8d9c9e48.css"])},{path:"/favorites",name:"favorites",component:()=>Gr(()=>import("./FavoritesView-84791921.js"),[])},{path:"/catchall(.*)*",name:"Not Found",component:()=>Gr(()=>import("./404View-3a3a81ff.js"),[])}]});const ci=$f(Wu);ci.use(ap);ci.component("font-awesome-icon",Lm);ci.mount("#app");export{Ce as F,Rr as _,Ae as a,fe as b,ut as c,bt as d,Se as e,ip as f,ps as g,op as h,za as i,Pc as j,Ss as k,Ye as o,ms as p,Fc as r,Nl as t,Hu as u};
