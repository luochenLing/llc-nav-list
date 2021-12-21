(function(Y,v){typeof exports=="object"&&typeof module!="undefined"?v(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],v):(Y=typeof globalThis!="undefined"?globalThis:Y||self,v(Y.NavList={},Y.vue))})(this,function(Y,v){"use strict";function _t(e,t){const r=Object.create(null),s=e.split(",");for(let n=0;n<s.length;n++)r[s[n]]=!0;return t?n=>!!r[n.toLowerCase()]:n=>!!r[n]}const vt={},pe=()=>{},W=Object.assign,bt=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},wt=Object.prototype.hasOwnProperty,te=(e,t)=>wt.call(e,t),m=Array.isArray,q=e=>ne(e)==="[object Map]",Tt=e=>ne(e)==="[object Set]",E=e=>typeof e=="function",Fe=e=>typeof e=="string",me=e=>typeof e=="symbol",A=e=>e!==null&&typeof e=="object",Et=e=>A(e)&&E(e.then)&&E(e.catch),xt=Object.prototype.toString,ne=e=>xt.call(e),Yt=e=>ne(e).slice(8,-1),Mt=e=>ne(e)==="[object Object]",ge=e=>Fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,U=(e,t)=>!Object.is(e,t),St=(e,t,r)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:r})};let It;function Pt(e,t){t=t||It,t&&t.active&&t.effects.push(e)}const _e=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ce=e=>(e.w&M)>0,He=e=>(e.n&M)>0,yt=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=M},Rt=e=>{const{deps:t}=e;if(t.length){let r=0;for(let s=0;s<t.length;s++){const n=t[s];Ce(n)&&!He(n)?n.delete(e):t[r++]=n,n.w&=~M,n.n&=~M}t.length=r}},ve=new WeakMap;let V=0,M=1;const be=30,G=[];let H;const B=Symbol(""),we=Symbol("");class Be{constructor(t,r=null,s){this.fn=t,this.scheduler=r,this.active=!0,this.deps=[],Pt(this,s)}run(){if(!this.active)return this.fn();if(!G.includes(this))try{return G.push(H=this),Ot(),M=1<<++V,V<=be?yt(this):je(this),this.fn()}finally{V<=be&&Rt(this),M=1<<--V,Ee(),G.pop();const t=G.length;H=t>0?G[t-1]:void 0}}stop(){this.active&&(je(this),this.onStop&&this.onStop(),this.active=!1)}}function je(e){const{deps:t}=e;if(t.length){for(let r=0;r<t.length;r++)t[r].delete(e);t.length=0}}let N=!0;const Te=[];function $e(){Te.push(N),N=!1}function Ot(){Te.push(N),N=!0}function Ee(){const e=Te.pop();N=e===void 0?!0:e}function b(e,t,r){if(!Ae())return;let s=ve.get(e);s||ve.set(e,s=new Map);let n=s.get(r);n||s.set(r,n=_e()),Ne(n)}function Ae(){return N&&H!==void 0}function Ne(e,t){let r=!1;V<=be?He(e)||(e.n|=M,r=!Ce(e)):r=!e.has(H),r&&(e.add(H),H.deps.push(e))}function S(e,t,r,s,n,i){const a=ve.get(e);if(!a)return;let o=[];if(t==="clear")o=[...a.values()];else if(r==="length"&&m(e))a.forEach((c,u)=>{(u==="length"||u>=s)&&o.push(c)});else switch(r!==void 0&&o.push(a.get(r)),t){case"add":m(e)?ge(r)&&o.push(a.get("length")):(o.push(a.get(B)),q(e)&&o.push(a.get(we)));break;case"delete":m(e)||(o.push(a.get(B)),q(e)&&o.push(a.get(we)));break;case"set":q(e)&&o.push(a.get(B));break}if(o.length===1)o[0]&&xe(o[0]);else{const c=[];for(const u of o)u&&c.push(...u);xe(_e(c))}}function xe(e,t){for(const r of m(e)?e:[...e])(r!==H||r.allowRecurse)&&(r.scheduler?r.scheduler():r.run())}const Ft=_t("__proto__,__v_isRef,__isVue"),De=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(me)),Ct=Le(),Ht=Le(!0),Ke=Bt();function Bt(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...r){const s=l(this);for(let i=0,a=this.length;i<a;i++)b(s,"get",i+"");const n=s[t](...r);return n===-1||n===!1?s[t](...r.map(l)):n}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...r){$e();const s=l(this)[t].apply(this,r);return Ee(),s}}),e}function Le(e=!1,t=!1){return function(s,n,i){if(n==="__v_isReactive")return!e;if(n==="__v_isReadonly")return e;if(n==="__v_raw"&&i===(e?t?Zt:Je:t?Xt:Ge).get(s))return s;const a=m(s);if(!e&&a&&te(Ke,n))return Reflect.get(Ke,n,i);const o=Reflect.get(s,n,i);return(me(n)?De.has(n):Ft(n))||(e||b(s,"get",n),t)?o:T(o)?!a||!ge(n)?o.value:o:A(o)?e?Ze(o):Xe(o):o}}const jt=$t();function $t(e=!1){return function(r,s,n,i){let a=r[s];if(!e&&!ke(n)&&(n=l(n),a=l(a),!m(r)&&T(a)&&!T(n)))return a.value=n,!0;const o=m(r)&&ge(s)?Number(s)<r.length:te(r,s),c=Reflect.set(r,s,n,i);return r===l(i)&&(o?U(n,a)&&S(r,"set",s,n):S(r,"add",s,n)),c}}function At(e,t){const r=te(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&S(e,"delete",t,void 0),s}function Nt(e,t){const r=Reflect.has(e,t);return(!me(t)||!De.has(t))&&b(e,"has",t),r}function Dt(e){return b(e,"iterate",m(e)?"length":B),Reflect.ownKeys(e)}const Kt={get:Ct,set:jt,deleteProperty:At,has:Nt,ownKeys:Dt},Lt={get:Ht,set(e,t){return!0},deleteProperty(e,t){return!0}},Ye=e=>e,re=e=>Reflect.getPrototypeOf(e);function se(e,t,r=!1,s=!1){e=e.__v_raw;const n=l(e),i=l(t);t!==i&&!r&&b(n,"get",t),!r&&b(n,"get",i);const{has:a}=re(n),o=s?Ye:r?Me:X;if(a.call(n,t))return o(e.get(t));if(a.call(n,i))return o(e.get(i));e!==n&&e.get(t)}function ie(e,t=!1){const r=this.__v_raw,s=l(r),n=l(e);return e!==n&&!t&&b(s,"has",e),!t&&b(s,"has",n),e===n?r.has(e):r.has(e)||r.has(n)}function oe(e,t=!1){return e=e.__v_raw,!t&&b(l(e),"iterate",B),Reflect.get(e,"size",e)}function ze(e){e=l(e);const t=l(this);return re(t).has.call(t,e)||(t.add(e),S(t,"add",e,e)),this}function We(e,t){t=l(t);const r=l(this),{has:s,get:n}=re(r);let i=s.call(r,e);i||(e=l(e),i=s.call(r,e));const a=n.call(r,e);return r.set(e,t),i?U(t,a)&&S(r,"set",e,t):S(r,"add",e,t),this}function qe(e){const t=l(this),{has:r,get:s}=re(t);let n=r.call(t,e);n||(e=l(e),n=r.call(t,e)),s&&s.call(t,e);const i=t.delete(e);return n&&S(t,"delete",e,void 0),i}function Ue(){const e=l(this),t=e.size!==0,r=e.clear();return t&&S(e,"clear",void 0,void 0),r}function ae(e,t){return function(s,n){const i=this,a=i.__v_raw,o=l(a),c=t?Ye:e?Me:X;return!e&&b(o,"iterate",B),a.forEach((u,h)=>s.call(n,c(u),c(h),i))}}function ce(e,t,r){return function(...s){const n=this.__v_raw,i=l(n),a=q(i),o=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,u=n[e](...s),h=r?Ye:t?Me:X;return!t&&b(i,"iterate",c?we:B),{next(){const{value:g,done:F}=u.next();return F?{value:g,done:F}:{value:o?[h(g[0]),h(g[1])]:h(g),done:F}},[Symbol.iterator](){return this}}}}function I(e){return function(...t){return e==="delete"?!1:this}}function zt(){const e={get(i){return se(this,i)},get size(){return oe(this)},has:ie,add:ze,set:We,delete:qe,clear:Ue,forEach:ae(!1,!1)},t={get(i){return se(this,i,!1,!0)},get size(){return oe(this)},has:ie,add:ze,set:We,delete:qe,clear:Ue,forEach:ae(!1,!0)},r={get(i){return se(this,i,!0)},get size(){return oe(this,!0)},has(i){return ie.call(this,i,!0)},add:I("add"),set:I("set"),delete:I("delete"),clear:I("clear"),forEach:ae(!0,!1)},s={get(i){return se(this,i,!0,!0)},get size(){return oe(this,!0)},has(i){return ie.call(this,i,!0)},add:I("add"),set:I("set"),delete:I("delete"),clear:I("clear"),forEach:ae(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=ce(i,!1,!1),r[i]=ce(i,!0,!1),t[i]=ce(i,!1,!0),s[i]=ce(i,!0,!0)}),[e,r,t,s]}const[Wt,qt,Ut,Vt]=zt();function Ve(e,t){const r=t?e?Vt:Ut:e?qt:Wt;return(s,n,i)=>n==="__v_isReactive"?!e:n==="__v_isReadonly"?e:n==="__v_raw"?s:Reflect.get(te(r,n)&&n in s?r:s,n,i)}const Gt={get:Ve(!1,!1)},Jt={get:Ve(!0,!1)},Ge=new WeakMap,Xt=new WeakMap,Je=new WeakMap,Zt=new WeakMap;function Qt(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kt(e){return e.__v_skip||!Object.isExtensible(e)?0:Qt(Yt(e))}function Xe(e){return e&&e.__v_isReadonly?e:Qe(e,!1,Kt,Gt,Ge)}function Ze(e){return Qe(e,!0,Lt,Jt,Je)}function Qe(e,t,r,s,n){if(!A(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=n.get(e);if(i)return i;const a=kt(e);if(a===0)return e;const o=new Proxy(e,a===2?s:r);return n.set(e,o),o}function J(e){return ke(e)?J(e.__v_raw):!!(e&&e.__v_isReactive)}function ke(e){return!!(e&&e.__v_isReadonly)}function l(e){const t=e&&e.__v_raw;return t?l(t):e}function en(e){return St(e,"__v_skip",!0),e}const X=e=>A(e)?Xe(e):e,Me=e=>A(e)?Ze(e):e;function et(e){Ae()&&(e=l(e),e.dep||(e.dep=_e()),Ne(e.dep))}function tt(e,t){e=l(e),e.dep&&xe(e.dep)}function T(e){return Boolean(e&&e.__v_isRef===!0)}function Se(e){return tn(e,!1)}function tn(e,t){return T(e)?e:new nn(e,t)}class nn{constructor(t,r){this._shallow=r,this.dep=void 0,this.__v_isRef=!0,this._rawValue=r?t:l(t),this._value=r?t:X(t)}get value(){return et(this),this._value}set value(t){t=this._shallow?t:l(t),U(t,this._rawValue)&&(this._rawValue=t,this._value=this._shallow?t:X(t),tt(this))}}function rn(e){return T(e)?e.value:e}const sn={get:(e,t,r)=>rn(Reflect.get(e,t,r)),set:(e,t,r,s)=>{const n=e[t];return T(n)&&!T(r)?(n.value=r,!0):Reflect.set(e,t,r,s)}};function on(e){return J(e)?e:new Proxy(e,sn)}class an{constructor(t,r,s){this._setter=r,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new Be(t,()=>{this._dirty||(this._dirty=!0,tt(this))}),this.__v_isReadonly=s}get value(){const t=l(this);return et(t),t._dirty&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function P(e,t){let r,s;const n=E(e);return n?(r=e,s=pe):(r=e.get,s=e.set),new an(r,s,n||!s)}Promise.resolve();function cn(e,t){t&&t.pendingBranch?m(e)?t.effects.push(...e):t.effects.push(e):Yn(e)}function ln(e,t,r=y,s=!1){if(r){const n=r[e]||(r[e]=[]),i=t.__weh||(t.__weh=(...a)=>{if(r.isUnmounted)return;$e(),Pe(r);const o=ue(t,r,e,a);return at(),Ee(),o});return s?n.unshift(i):n.push(i),i}}const nt=e=>(t,r=y)=>(!_n||e==="sp")&&ln(e,t,r),un=nt("m"),fn=nt("bum");function dn(e){const t=e.type,{mixins:r,extends:s}=t,{mixins:n,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,o=i.get(t);let c;return o?c=o:!n.length&&!r&&!s?c=t:(c={},n.length&&n.forEach(u=>le(c,u,a,!0)),le(c,t,a)),i.set(t,c),c}function le(e,t,r,s=!1){const{mixins:n,extends:i}=t;i&&le(e,i,r,!0),n&&n.forEach(a=>le(e,a,r,!0));for(const a in t)if(!(s&&a==="expose")){const o=hn[a]||r&&r[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const hn={data:rt,props:j,emits:j,methods:j,computed:j,beforeCreate:d,created:d,beforeMount:d,mounted:d,beforeUpdate:d,updated:d,beforeDestroy:d,beforeUnmount:d,destroyed:d,unmounted:d,activated:d,deactivated:d,errorCaptured:d,serverPrefetch:d,components:j,directives:j,watch:mn,provide:rt,inject:pn};function rt(e,t){return t?e?function(){return W(E(e)?e.call(this,this):e,E(t)?t.call(this,this):t)}:t:e}function pn(e,t){return j(st(e),st(t))}function st(e){if(m(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function d(e,t){return e?[...new Set([].concat(e,t))]:t}function j(e,t){return e?W(W(Object.create(null),e),t):t}function mn(e,t){if(!e)return t;if(!t)return e;const r=W(Object.create(null),e);for(const s in t)r[s]=d(e[s],t[s]);return r}const it=cn,Ie=e=>e?gn(e)?vn(e)||e.proxy:Ie(e.parent):null,ot=W(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ie(e.parent),$root:e=>Ie(e.root),$emit:e=>e.emit,$options:e=>dn(e),$forceUpdate:e=>()=>En(e.update),$nextTick:e=>wn.bind(e.proxy),$watch:e=>In.bind(e)});let y=null;const Pe=e=>{y=e,e.scope.on()},at=()=>{y&&y.scope.off(),y=null};function gn(e){return e.vnode.shapeFlag&4}let _n=!1;function vn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(on(en(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in ot)return ot[r](e)}}))}function D(e,t,r,s){let n;try{n=s?e(...s):e()}catch(i){ct(i,t,r)}return n}function ue(e,t,r,s){if(E(e)){const i=D(e,t,r,s);return i&&Et(i)&&i.catch(a=>{ct(a,t,r)}),i}const n=[];for(let i=0;i<e.length;i++)n.push(ue(e[i],t,r,s));return n}function ct(e,t,r,s=!0){const n=t?t.vnode:null;if(t){let i=t.parent;const a=t.proxy,o=r;for(;i;){const u=i.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](e,a,o)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){D(c,null,10,[e,a,o]);return}}bn(e,r,n,s)}function bn(e,t,r,s=!0){console.error(e)}let fe=!1,ye=!1;const w=[];let R=0;const Z=[];let Q=null,K=0;const k=[];let O=null,L=0;const lt=Promise.resolve();let Re=null,Oe=null;function wn(e){const t=Re||lt;return e?t.then(this?e.bind(this):e):t}function Tn(e){let t=R+1,r=w.length;for(;t<r;){const s=t+r>>>1;ee(w[s])<e?t=s+1:r=s}return t}function En(e){(!w.length||!w.includes(e,fe&&e.allowRecurse?R+1:R))&&e!==Oe&&(e.id==null?w.push(e):w.splice(Tn(e.id),0,e),ut())}function ut(){!fe&&!ye&&(ye=!0,Re=lt.then(ht))}function ft(e,t,r,s){m(e)?r.push(...e):(!t||!t.includes(e,e.allowRecurse?s+1:s))&&r.push(e),ut()}function xn(e){ft(e,Q,Z,K)}function Yn(e){ft(e,O,k,L)}function dt(e,t=null){if(Z.length){for(Oe=t,Q=[...new Set(Z)],Z.length=0,K=0;K<Q.length;K++)Q[K]();Q=null,K=0,Oe=null,dt(e,t)}}function Mn(e){if(k.length){const t=[...new Set(k)];if(k.length=0,O){O.push(...t);return}for(O=t,O.sort((r,s)=>ee(r)-ee(s)),L=0;L<O.length;L++)O[L]();O=null,L=0}}const ee=e=>e.id==null?1/0:e.id;function ht(e){ye=!1,fe=!0,dt(e),w.sort((r,s)=>ee(r)-ee(s));const t=pe;try{for(R=0;R<w.length;R++){const r=w[R];r&&r.active!==!1&&D(r,null,14)}}finally{R=0,w.length=0,Mn(),fe=!1,Re=null,(w.length||Z.length||k.length)&&ht(e)}}const pt={};function Sn(e,t,r){return mt(e,t,r)}function mt(e,t,{immediate:r,deep:s,flush:n,onTrack:i,onTrigger:a}=vt){const o=y;let c,u=!1,h=!1;if(T(e)?(c=()=>e.value,u=!!e._shallow):J(e)?(c=()=>e,s=!0):m(e)?(h=!0,u=e.some(J),c=()=>e.map(f=>{if(T(f))return f.value;if(J(f))return z(f);if(E(f))return D(f,o,2)})):E(e)?t?c=()=>D(e,o,2):c=()=>{if(!(o&&o.isUnmounted))return g&&g(),ue(e,o,3,[F])}:c=pe,t&&s){const f=c;c=()=>z(f())}let g,F=f=>{g=_.onStop=()=>{D(f,o,4)}},C=h?[]:pt;const x=()=>{if(!!_.active)if(t){const f=_.run();(s||u||(h?f.some((de,p)=>U(de,C[p])):U(f,C)))&&(g&&g(),ue(t,o,3,[f,C===pt?void 0:C,F]),C=f)}else _.run()};x.allowRecurse=!!t;let $;n==="sync"?$=x:n==="post"?$=()=>it(x,o&&o.suspense):$=()=>{!o||o.isMounted?xn(x):x()};const _=new Be(c,$);return t?r?x():C=_.run():n==="post"?it(_.run.bind(_),o&&o.suspense):_.run(),()=>{_.stop(),o&&o.scope&&bt(o.scope.effects,_)}}function In(e,t,r){const s=this.proxy,n=Fe(e)?e.includes(".")?Pn(s,e):()=>s[e]:e.bind(s,s);let i;E(t)?i=t:(i=t.handler,r=t);const a=y;Pe(this);const o=mt(n,i.bind(s),r);return a?Pe(a):at(),o}function Pn(e,t){const r=t.split(".");return()=>{let s=e;for(let n=0;n<r.length&&s;n++)s=s[r[n]];return s}}function z(e,t){if(!A(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),T(e))z(e.value,t);else if(m(e))for(let r=0;r<e.length;r++)z(e[r],t);else if(Tt(e)||q(e))e.forEach(r=>{z(r,t)});else if(Mt(e))for(const r in e)z(e[r],t);return e}var Rn="";const yn=v.defineComponent({props:{subtractHeight:{type:Number,default:0},viewClientHeight:{type:Number,default:0},additionalY:{type:Number,default:50},reBoundExponent:{type:Number,default:10,validator(e){return e>0}},sensitivity:{type:Number,default:1e3,validator(e){return e>0}},domHeight:{type:Number,default:0,validator(e){return e>=0}}},setup(e){const t=e,r=Se(),s=Se(),n=Se({frameStartTime:0,frameEndTime:0,frameTime:16.7,acceleration:0,speed:0,lastY:0,startY:0,currentY:0,translateY:0,inertiaFrame:0,touching:!1,startMoveTime:0,endMoveTime:0,zeroSpeed:.001,reBounding:!1,fixBottom:!1,reBoundingDuration:360}).value;Sn(()=>t.viewClientHeight,()=>{let p=t.viewClientHeight-t.subtractHeight;r.value.style.height=`${p}px`});const i=P(()=>t.viewClientHeight-t.subtractHeight),a=P(()=>t.domHeight>0?t.domHeight:s.value.offsetHeight),o=P(()=>a.value-i.value),c=P(()=>n.reBounding?"cubic-bezier(0.25, 0.46, 0.45, 0.94)":"cubic-bezier(0.1, 0.57, 0.1, 1)"),u=P(()=>{if(n.touching||!n.reBounding&&!n.touching)return 0;if(n.reBounding&&!n.touching)return n.reBoundingDuration}),h=P(()=>n.fixBottom?{}:{transitionTimingFunction:c,transitionDuration:`${u}ms`,transform:`translate3d(0px, ${n.translateY}px, 0px)`}),g=P(()=>n.currentY<=n.startY),F=P(()=>n.currentY>=n.startY);un(()=>{s.value.addEventListener("touchstart",_),s.value.addEventListener("touchmove",f),s.value.addEventListener("touchend",de)}),fn(()=>{s.value.removeEventListener("touchstart",_),s.value.removeEventListener("touchmove",f),s.value.removeEventListener("touchend",de)});const C=()=>{g.value?n.translateY<=0&&n.translateY+o.value>0||n.translateY>0?n.translateY+=n.currentY-n.lastY:n.translateY+o.value<=0&&(n.translateY+=t.additionalY*(n.currentY-n.lastY)/(i.value+Math.abs(n.translateY+o.value))):n.translateY>=0?n.translateY+=t.additionalY*(n.currentY-n.lastY)/(i.value+n.translateY):(n.translateY<=0&&n.translateY+o.value>=0||n.translateY+o.value<=0)&&(n.translateY+=n.currentY-n.lastY),n.lastY=n.currentY},x=()=>{if(n.frameEndTime=new Date().getTime(),n.frameTime=n.frameEndTime-n.frameStartTime,g.value?n.translateY<=-o.value?(n.acceleration*=(t.reBoundExponent+Math.abs(n.translateY+o.value))/t.reBoundExponent,n.speed=Math.min(n.speed-n.acceleration,0)):n.speed=Math.min(n.speed-n.acceleration*n.frameTime,0):F.value&&(n.translateY>=0?(n.acceleration*=(t.reBoundExponent+n.translateY)/t.reBoundExponent,n.speed=Math.max(n.speed-n.acceleration,0)):n.speed=Math.max(n.speed-n.acceleration*n.frameTime,0)),n.translateY+=n.speed*n.frameTime/2,Math.abs(n.speed)<=n.zeroSpeed){$();return}n.frameStartTime=n.frameEndTime,n.inertiaFrame=requestAnimationFrame(x)},$=()=>(n.reBounding=!1,o.value<=0||n.translateY>0?(n.reBounding=!0,n.translateY=0):n.translateY<-o.value&&(n.reBounding=!0,n.translateY=-o.value),n.translateY===0||n.translateY===-o.value),_=p=>{p.stopPropagation(),cancelAnimationFrame(n.inertiaFrame),n.lastY=p.touches[0].clientY},f=p=>{p.preventDefault(),p.stopPropagation(),n.touching=!0,n.startMoveTime=n.endMoveTime,n.startY=n.lastY,n.currentY=p.touches[0].clientY,C(),n.endMoveTime=p.timeStamp},de=p=>{if(n.touching=!1,$())cancelAnimationFrame(n.inertiaFrame);else{let gt=p.timeStamp-n.endMoveTime,he=n.endMoveTime-n.startMoveTime;if(he=he>0?he:8,gt>100)return;n.speed=(n.lastY-n.startY)/he,n.acceleration=n.speed/t.sensitivity,n.frameStartTime=new Date().getTime(),n.inertiaFrame=requestAnimationFrame(x)}};return(p,gt)=>(v.openBlock(),v.createElementBlock("div",{class:"nav-list-root",ref_key:"root",ref:r},[v.createElementVNode("ul",{class:"nav-list",ref_key:"navList",ref:s,style:v.normalizeStyle(v.unref(h))},[v.renderSlot(p.$slots,"item")],4)],512))}});Y.NavList=yn,Object.defineProperty(Y,"__esModule",{value:!0}),Y[Symbol.toStringTag]="Module"});
