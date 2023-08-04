import{r as l,W as z,E as X,a3 as W,j as S,I as Re,al as ke,J as Ye,F as he,Q,O as ee,ae as Ce,am as Te,X as te,an as Le,ao as Ge,ap as Xe,aq as Me,ar as Ze,K as Je,N as Qe,M as et,a2 as tt,U as Z,V as ne,af as $e}from"./index-fd308e45.js";function nt(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function _e(e){return typeof e=="string"}function ot(e,t,n){return e===void 0||_e(e)?t:{...t,ownerState:{...t.ownerState,...n}}}const rt={disableDefaultClasses:!1},st=l.createContext(rt);function at(e){const{disableDefaultClasses:t}=l.useContext(st);return n=>t?"":e(n)}function it(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(o=>o.match(/^on[A-Z]/)&&typeof e[o]=="function"&&!t.includes(o)).forEach(o=>{n[o]=e[o]}),n}function ye(e,t){return typeof e=="function"?e(t):e}function Ne(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function lt(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:o,externalForwardedProps:a,className:r}=e;if(!t){const x=z(a==null?void 0:a.className,o==null?void 0:o.className,r,n==null?void 0:n.className),v={...n==null?void 0:n.style,...a==null?void 0:a.style,...o==null?void 0:o.style},R={...n,...a,...o};return x.length>0&&(R.className=x),Object.keys(v).length>0&&(R.style=v),{props:R,internalRef:void 0}}const s=it({...a,...o}),i=Ne(o),c=Ne(a),d=t(s),h=z(d==null?void 0:d.className,n==null?void 0:n.className,r,a==null?void 0:a.className,o==null?void 0:o.className),b={...d==null?void 0:d.style,...n==null?void 0:n.style,...a==null?void 0:a.style,...o==null?void 0:o.style},p={...d,...n,...c,...i};return h.length>0&&(p.className=h),Object.keys(b).length>0&&(p.style=b),{props:p,internalRef:d.ref}}function we(e){var t;const{elementType:n,externalSlotProps:o,ownerState:a,...r}=e,s=ye(o,a),{props:i,internalRef:c}=lt({...r,externalSlotProps:s}),d=X(c,s==null?void 0:s.ref,(t=e.additionalProps)==null?void 0:t.ref);return ot(n,{...i,ref:d},a)}const ct=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function ut(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function dt(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=o=>e.ownerDocument.querySelector(`input[type="radio"]${o}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function ft(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||dt(e))}function pt(e){const t=[],n=[];return Array.from(e.querySelectorAll(ct)).forEach((o,a)=>{const r=ut(o);r===-1||!ft(o)||(r===0?t.push(o):n.push({documentOrder:a,tabIndex:r,node:o}))}),n.sort((o,a)=>o.tabIndex===a.tabIndex?o.documentOrder-a.documentOrder:o.tabIndex-a.tabIndex).map(o=>o.node).concat(t)}function mt(){return!0}function vt(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:o=!1,disableRestoreFocus:a=!1,getTabbable:r=pt,isEnabled:s=mt,open:i}=e,c=l.useRef(!1),d=l.useRef(null),h=l.useRef(null),b=l.useRef(null),p=l.useRef(null),x=l.useRef(!1),v=l.useRef(null),R=X(t.ref,v),T=l.useRef(null);l.useEffect(()=>{!i||!v.current||(x.current=!n)},[n,i]),l.useEffect(()=>{if(!i||!v.current)return;const u=W(v.current);return v.current.contains(u.activeElement)||(v.current.hasAttribute("tabIndex")||v.current.setAttribute("tabIndex","-1"),x.current&&v.current.focus()),()=>{a||(b.current&&b.current.focus&&(c.current=!0,b.current.focus()),b.current=null)}},[i]),l.useEffect(()=>{if(!i||!v.current)return;const u=W(v.current),y=$=>{const{current:O}=v;if(O!==null){if(!u.hasFocus()||o||!s()||c.current){c.current=!1;return}if(!O.contains(u.activeElement)){if($&&p.current!==$.target||u.activeElement!==p.current)p.current=null;else if(p.current!==null)return;if(!x.current)return;let F=[];if((u.activeElement===d.current||u.activeElement===h.current)&&(F=r(v.current)),F.length>0){var j,N;const B=!!((j=T.current)!=null&&j.shiftKey&&((N=T.current)==null?void 0:N.key)==="Tab"),L=F[0],m=F[F.length-1];typeof L!="string"&&typeof m!="string"&&(B?m.focus():L.focus())}else O.focus()}}},P=$=>{T.current=$,!(o||!s()||$.key!=="Tab")&&u.activeElement===v.current&&$.shiftKey&&(c.current=!0,h.current&&h.current.focus())};u.addEventListener("focusin",y),u.addEventListener("keydown",P,!0);const M=setInterval(()=>{u.activeElement&&u.activeElement.tagName==="BODY"&&y(null)},50);return()=>{clearInterval(M),u.removeEventListener("focusin",y),u.removeEventListener("keydown",P,!0)}},[n,o,a,s,i,r]);const I=u=>{b.current===null&&(b.current=u.relatedTarget),x.current=!0,p.current=u.target;const y=t.props.onFocus;y&&y(u)},k=u=>{b.current===null&&(b.current=u.relatedTarget),x.current=!0};return S.jsxs(l.Fragment,{children:[S.jsx("div",{tabIndex:i?0:-1,onFocus:k,ref:d,"data-testid":"sentinelStart"}),l.cloneElement(t,{ref:R,onFocus:I}),S.jsx("div",{tabIndex:i?0:-1,onFocus:k,ref:h,"data-testid":"sentinelEnd"})]})}function bt(e){return typeof e=="function"?e():e}const yt=l.forwardRef(function(t,n){const{children:o,container:a,disablePortal:r=!1}=t,[s,i]=l.useState(null),c=X(l.isValidElement(o)?o.ref:null,n);if(Re(()=>{r||i(bt(a)||document.body)},[a,r]),Re(()=>{if(s&&!r)return ke(n,s),()=>{ke(n,null)}},[n,s,r]),r){if(l.isValidElement(o)){const d={ref:c};return l.cloneElement(o,d)}return S.jsx(l.Fragment,{children:o})}return S.jsx(l.Fragment,{children:s&&Ye.createPortal(o,s)})}),ht=yt;function gt(e){const t=W(e);return t.body===e?he(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function G(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Ie(e){return parseInt(he(e).getComputedStyle(e).paddingRight,10)||0}function xt(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,o=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||o}function Fe(e,t,n,o,a){const r=[t,n,...o];[].forEach.call(e.children,s=>{const i=r.indexOf(s)===-1,c=!xt(s);i&&c&&G(s,a)})}function be(e,t){let n=-1;return e.some((o,a)=>t(o)?(n=a,!0):!1),n}function Et(e,t){const n=[],o=e.container;if(!t.disableScrollLock){if(gt(o)){const s=nt(W(o));n.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${Ie(o)+s}px`;const i=W(o).querySelectorAll(".mui-fixed");[].forEach.call(i,c=>{n.push({value:c.style.paddingRight,property:"padding-right",el:c}),c.style.paddingRight=`${Ie(c)+s}px`})}let r;if(o.parentNode instanceof DocumentFragment)r=W(o).body;else{const s=o.parentElement,i=he(o);r=(s==null?void 0:s.nodeName)==="HTML"&&i.getComputedStyle(s).overflowY==="scroll"?s:o}n.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{n.forEach(({value:r,el:s,property:i})=>{r?s.style.setProperty(i,r):s.style.removeProperty(i)})}}function St(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class Pt{constructor(){this.modals=[],this.containers=[]}add(t,n){let o=this.modals.indexOf(t);if(o!==-1)return o;o=this.modals.length,this.modals.push(t),t.modalRef&&G(t.modalRef,!1);const a=St(n);Fe(n,t.mount,t.modalRef,a,!0);const r=be(this.containers,s=>s.container===n);return r!==-1?(this.containers[r].modals.push(t),o):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:a}),o)}mount(t,n){const o=be(this.containers,r=>r.modals.indexOf(t)!==-1),a=this.containers[o];a.restore||(a.restore=Et(a,n))}remove(t,n=!0){const o=this.modals.indexOf(t);if(o===-1)return o;const a=be(this.containers,s=>s.modals.indexOf(t)!==-1),r=this.containers[a];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(o,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&G(t.modalRef,n),Fe(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(a,1);else{const s=r.modals[r.modals.length-1];s.modalRef&&G(s.modalRef,!1)}return o}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function Rt(e){return Q("MuiModal",e)}ee("MuiModal",["root","hidden","backdrop"]);const kt=e=>{const{open:t,exited:n}=e;return te({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},at(Rt))};function Ct(e){return typeof e=="function"?e():e}function Tt(e){return e?e.props.hasOwnProperty("in"):!1}const Mt=new Pt,$t=l.forwardRef(function(t,n){var o,a;const{children:r,closeAfterTransition:s=!1,container:i,disableAutoFocus:c=!1,disableEnforceFocus:d=!1,disableEscapeKeyDown:h=!1,disablePortal:b=!1,disableRestoreFocus:p=!1,disableScrollLock:x=!1,hideBackdrop:v=!1,keepMounted:R=!1,manager:T=Mt,onBackdropClick:I,onClose:k,onKeyDown:u,open:y,onTransitionEnter:P,onTransitionExited:M,slotProps:$={},slots:O={},...j}=t,N=T,[F,B]=l.useState(!y),L=l.useRef({}),m=l.useRef(null),g=l.useRef(null),A=X(g,n),q=Tt(r),V=(o=t["aria-hidden"])!=null?o:!0,pe=()=>W(m.current),D=()=>(L.current.modalRef=g.current,L.current.mountNode=m.current,L.current),Y=()=>{N.mount(D(),{disableScrollLock:x}),g.current&&(g.current.scrollTop=0)},H=Ce(()=>{const C=Ct(i)||pe().body;N.add(D(),C),g.current&&Y()}),K=l.useCallback(()=>N.isTopModal(D()),[N]),me=Ce(C=>{m.current=C,!(!C||!g.current)&&(y&&K()?Y():G(g.current,V))}),_=l.useCallback(()=>{N.remove(D(),V)},[N,V]);l.useEffect(()=>()=>{_()},[_]),l.useEffect(()=>{y?H():(!q||!s)&&_()},[y,_,q,s,H]);const U={...t,closeAfterTransition:s,disableAutoFocus:c,disableEnforceFocus:d,disableEscapeKeyDown:h,disablePortal:b,disableRestoreFocus:p,disableScrollLock:x,exited:F,hideBackdrop:v,keepMounted:R},Se=kt(U),Ue=()=>{B(!1),P&&P()},We=()=>{B(!0),M&&M(),s&&_()},ze=C=>{C.target===C.currentTarget&&(I&&I(C),k&&k(C,"backdropClick"))},qe=C=>{u&&u(C),!(C.key!=="Escape"||!K())&&(h||(C.stopPropagation(),k&&k(C,"escapeKeyDown")))},J={};r.props.tabIndex===void 0&&(J.tabIndex="-1"),q&&(J.onEnter=Te(Ue,r.props.onEnter),J.onExited=Te(We,r.props.onExited));const Pe=(a=O.root)!=null?a:"div",Ke=we({elementType:Pe,externalSlotProps:$.root,externalForwardedProps:j,additionalProps:{ref:A,role:"presentation",onKeyDown:qe},className:Se.root,ownerState:U}),ve=O.backdrop,Ve=we({elementType:ve,externalSlotProps:$.backdrop,additionalProps:{"aria-hidden":!0,onClick:ze,open:y},className:Se.backdrop,ownerState:U});return!R&&!y&&(!q||F)?null:S.jsx(ht,{ref:me,container:i,disablePortal:b,children:S.jsxs(Pe,{...Ke,children:[!v&&ve?S.jsx(ve,{...Ve}):null,S.jsx(vt,{disableEnforceFocus:d,disableAutoFocus:c,disableRestoreFocus:p,isEnabled:K,open:y,children:l.cloneElement(r,J)})]})})}),Nt=$t;var je={exports:{}},f={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=typeof Symbol=="function"&&Symbol.for,ge=E?Symbol.for("react.element"):60103,xe=E?Symbol.for("react.portal"):60106,oe=E?Symbol.for("react.fragment"):60107,re=E?Symbol.for("react.strict_mode"):60108,se=E?Symbol.for("react.profiler"):60114,ae=E?Symbol.for("react.provider"):60109,ie=E?Symbol.for("react.context"):60110,Ee=E?Symbol.for("react.async_mode"):60111,le=E?Symbol.for("react.concurrent_mode"):60111,ce=E?Symbol.for("react.forward_ref"):60112,ue=E?Symbol.for("react.suspense"):60113,wt=E?Symbol.for("react.suspense_list"):60120,de=E?Symbol.for("react.memo"):60115,fe=E?Symbol.for("react.lazy"):60116,It=E?Symbol.for("react.block"):60121,Ft=E?Symbol.for("react.fundamental"):60117,At=E?Symbol.for("react.responder"):60118,Ot=E?Symbol.for("react.scope"):60119;function w(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ge:switch(e=e.type,e){case Ee:case le:case oe:case se:case re:case ue:return e;default:switch(e=e&&e.$$typeof,e){case ie:case ce:case fe:case de:case ae:return e;default:return t}}case xe:return t}}}function Be(e){return w(e)===le}f.AsyncMode=Ee;f.ConcurrentMode=le;f.ContextConsumer=ie;f.ContextProvider=ae;f.Element=ge;f.ForwardRef=ce;f.Fragment=oe;f.Lazy=fe;f.Memo=de;f.Portal=xe;f.Profiler=se;f.StrictMode=re;f.Suspense=ue;f.isAsyncMode=function(e){return Be(e)||w(e)===Ee};f.isConcurrentMode=Be;f.isContextConsumer=function(e){return w(e)===ie};f.isContextProvider=function(e){return w(e)===ae};f.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ge};f.isForwardRef=function(e){return w(e)===ce};f.isFragment=function(e){return w(e)===oe};f.isLazy=function(e){return w(e)===fe};f.isMemo=function(e){return w(e)===de};f.isPortal=function(e){return w(e)===xe};f.isProfiler=function(e){return w(e)===se};f.isStrictMode=function(e){return w(e)===re};f.isSuspense=function(e){return w(e)===ue};f.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===oe||e===le||e===se||e===re||e===ue||e===wt||typeof e=="object"&&e!==null&&(e.$$typeof===fe||e.$$typeof===de||e.$$typeof===ae||e.$$typeof===ie||e.$$typeof===ce||e.$$typeof===Ft||e.$$typeof===At||e.$$typeof===Ot||e.$$typeof===It)};f.typeOf=w;je.exports=f;var Lt=je.exports,De=Lt,_t={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},He={};He[De.ForwardRef]=_t;He[De.Memo]=jt;var fn=Ge(function(e,t){var n=e.styles,o=Le([n],void 0,l.useContext(Xe)),a=l.useRef();return Me(function(){var r=t.key+"-global",s=new t.sheet.constructor({key:r,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),i=!1,c=document.querySelector('style[data-emotion="'+r+" "+o.name+'"]');return t.sheet.tags.length&&(s.before=t.sheet.tags[0]),c!==null&&(i=!0,c.setAttribute("data-emotion",r),s.hydrate([c])),a.current=[s,i],function(){s.flush()}},[t]),Me(function(){var r=a.current,s=r[0],i=r[1];if(i){r[1]=!1;return}if(o.next!==void 0&&Ze(t,o.next,!0),s.tags.length){var c=s.tags[s.tags.length-1].nextElementSibling;s.before=c,s.flush()}t.insert("",o,s,!1)},[t,o.name]),null});function Bt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Le(t)}var pn=function(){var t=Bt.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function Dt(){const e=Je(et);return e[Qe]||e}const Ht=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},Ae=Ht,Ut=e=>e.scrollTop;function Oe(e,t){var n,o;const{timeout:a,easing:r,style:s={}}=e;return{duration:(n=s.transitionDuration)!=null?n:typeof a=="number"?a:a[t.mode]||0,easing:(o=s.transitionTimingFunction)!=null?o:typeof r=="object"?r[t.mode]:r,delay:s.transitionDelay}}const Wt={entering:{opacity:1},entered:{opacity:1}},zt=l.forwardRef(function(t,n){const o=Dt(),a={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:r,appear:s=!0,children:i,easing:c,in:d,onEnter:h,onEntered:b,onEntering:p,onExit:x,onExited:v,onExiting:R,style:T,timeout:I=a,TransitionComponent:k=tt,...u}=t,y=l.useRef(null),P=X(y,i.ref,n),M=m=>g=>{if(m){const A=y.current;g===void 0?m(A):m(A,g)}},$=M(p),O=M((m,g)=>{Ut(m);const A=Oe({style:T,timeout:I,easing:c},{mode:"enter"});m.style.webkitTransition=o.transitions.create("opacity",A),m.style.transition=o.transitions.create("opacity",A),h&&h(m,g)}),j=M(b),N=M(R),F=M(m=>{const g=Oe({style:T,timeout:I,easing:c},{mode:"exit"});m.style.webkitTransition=o.transitions.create("opacity",g),m.style.transition=o.transitions.create("opacity",g),x&&x(m)}),B=M(v),L=m=>{r&&r(y.current,m)};return S.jsx(k,{appear:s,in:d,nodeRef:y,onEnter:O,onEntered:j,onEntering:$,onExit:F,onExited:B,onExiting:N,addEndListener:L,timeout:I,...u,children:(m,g)=>l.cloneElement(i,{style:{opacity:0,visibility:m==="exited"&&!d?"hidden":void 0,...Wt[m],...T,...i.props.style},ref:P,...g})})}),qt=zt;function Kt(e){return Q("MuiBackdrop",e)}ee("MuiBackdrop",["root","invisible"]);const Vt=e=>{const{classes:t,invisible:n}=e;return te({root:["root",n&&"invisible"]},Kt,t)},Yt=Z("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",...e.invisible&&{backgroundColor:"transparent"}})),Gt=l.forwardRef(function(t,n){var o,a,r;const s=ne({props:t,name:"MuiBackdrop"}),{children:i,className:c,component:d="div",components:h={},componentsProps:b={},invisible:p=!1,open:x,slotProps:v={},slots:R={},TransitionComponent:T=qt,transitionDuration:I,...k}=s,u={...s,component:d,invisible:p},y=Vt(u),P=(o=v.root)!=null?o:b.root;return S.jsx(T,{in:x,timeout:I,...k,children:S.jsx(Yt,{"aria-hidden":!0,...P,as:(a=(r=R.root)!=null?r:h.Root)!=null?a:d,className:z(y.root,c,P==null?void 0:P.className),ownerState:{...u,...P==null?void 0:P.ownerState},classes:y,ref:n,children:i})})}),Xt=Gt,Zt=Z("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0,...!t.open&&t.exited&&{visibility:"hidden"}})),Jt=Z(Xt,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),Qt=l.forwardRef(function(t,n){var o,a,r,s,i,c;const d=ne({name:"MuiModal",props:t}),{BackdropComponent:h=Jt,BackdropProps:b,classes:p,className:x,closeAfterTransition:v=!1,children:R,container:T,component:I,components:k={},componentsProps:u={},disableAutoFocus:y=!1,disableEnforceFocus:P=!1,disableEscapeKeyDown:M=!1,disablePortal:$=!1,disableRestoreFocus:O=!1,disableScrollLock:j=!1,hideBackdrop:N=!1,keepMounted:F=!1,onBackdropClick:B,onClose:L,open:m,slotProps:g,slots:A,theme:q,...V}=d,[pe,D]=l.useState(!0),Y={container:T,closeAfterTransition:v,disableAutoFocus:y,disableEnforceFocus:P,disableEscapeKeyDown:M,disablePortal:$,disableRestoreFocus:O,disableScrollLock:j,hideBackdrop:N,keepMounted:F,onBackdropClick:B,onClose:L,open:m},H={...d,...Y,exited:pe},K=(o=(a=A==null?void 0:A.root)!=null?a:k.Root)!=null?o:Zt,me=(r=(s=A==null?void 0:A.backdrop)!=null?s:k.Backdrop)!=null?r:h,_=(i=g==null?void 0:g.root)!=null?i:u.root,U=(c=g==null?void 0:g.backdrop)!=null?c:u.backdrop;return S.jsx(Nt,{slots:{root:K,backdrop:me},slotProps:{root:()=>({...ye(_,H),...!_e(K)&&{as:I,theme:q},className:z(x,_==null?void 0:_.className,p==null?void 0:p.root,!H.open&&H.exited&&(p==null?void 0:p.hidden))}),backdrop:()=>({...b,...ye(U,H),className:z(U==null?void 0:U.className,p==null?void 0:p.backdrop)})},onTransitionEnter:()=>D(!1),onTransitionExited:()=>D(!0),ref:n,...V,...Y,children:R})}),mn=Qt;function en(e){return Q("MuiPaper",e)}ee("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const tn=e=>{const{square:t,elevation:n,variant:o,classes:a}=e,r={root:["root",o,!t&&"rounded",o==="elevation"&&`elevation${n}`]};return te(r,en,a)},nn=Z("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return{backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow"),...!t.square&&{borderRadius:e.shape.borderRadius},...t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},...t.variant==="elevation"&&{boxShadow:(e.vars||e).shadows[t.elevation],...!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${$e("#fff",Ae(t.elevation))}, ${$e("#fff",Ae(t.elevation))})`},...e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}}}}),on=l.forwardRef(function(t,n){const o=ne({props:t,name:"MuiPaper"}),{className:a,component:r="div",elevation:s=1,square:i=!1,variant:c="elevation",...d}=o,h={...o,component:r,elevation:s,square:i,variant:c},b=tn(h);return S.jsx(nn,{as:r,ownerState:h,className:z(b.root,a),ref:n,...d})}),vn=on,rn=l.createContext({}),sn=rn;function an(e){return Q("MuiList",e)}ee("MuiList",["root","padding","dense","subheader"]);const ln=e=>{const{classes:t,disablePadding:n,dense:o,subheader:a}=e;return te({root:["root",!n&&"padding",o&&"dense",a&&"subheader"]},an,t)},cn=Z("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})(({ownerState:e})=>({listStyle:"none",margin:0,padding:0,position:"relative",...!e.disablePadding&&{paddingTop:8,paddingBottom:8},...e.subheader&&{paddingTop:0}})),un=l.forwardRef(function(t,n){const o=ne({props:t,name:"MuiList"}),{children:a,className:r,component:s="ul",dense:i=!1,disablePadding:c=!1,subheader:d,...h}=o,b=l.useMemo(()=>({dense:i}),[i]),p={...o,component:s,dense:i,disablePadding:c},x=ln(p);return S.jsx(sn.Provider,{value:b,children:S.jsxs(cn,{as:s,className:z(x.root,r),ref:n,ownerState:p,...h,children:[d,a]})})}),bn=un;export{fn as G,bn as L,mn as M,vn as P,nt as a,sn as b,Oe as g,_e as i,pn as k,Ut as r,Dt as u};
