import{r as Q,s as B,f as S,a as O,g as k,h as C,u as oe,c as U,d as h,j as v,i as z,v as b,w as te,e as X,x as ie,y as le,z as ue,A as ce,B as fe,C as de}from"../chunks/scheduler.75449220.js";import{S as re,i as ne,b as A,d as V,m as j,a as I,t as N,e as q,c as pe,f as me,h as ge,g as ve}from"../chunks/index.477b3b79.js";import{n as _e}from"../chunks/stores.6bc5acd7.js";import{I as D}from"../chunks/Icon.a21c1f0d.js";const he=!0,ye=({url:u})=>{const{pathname:a}=u;return{pathname:a}},Ne=Object.freeze(Object.defineProperty({__proto__:null,load:ye,prerender:he},Symbol.toStringTag,{value:"Module"}));var be=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $e(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var se={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(u,a){(function(t,s){u.exports=s()})(be,function(){var t={};t.version="0.2.0";var s=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};t.configure=function(e){var r,o;for(r in e)o=e[r],o!==void 0&&e.hasOwnProperty(r)&&(s[r]=o);return this},t.status=null,t.set=function(e){var r=t.isStarted();e=c(e,s.minimum,1),t.status=e===1?null:e;var o=t.render(!r),p=o.querySelector(s.barSelector),g=s.speed,_=s.easing;return o.offsetWidth,n(function(f){s.positionUsing===""&&(s.positionUsing=t.getPositioningCSS()),l(p,i(e,g,_)),e===1?(l(o,{transition:"none",opacity:1}),o.offsetWidth,setTimeout(function(){l(o,{transition:"all "+g+"ms linear",opacity:0}),setTimeout(function(){t.remove(),f()},g)},g)):setTimeout(f,g)}),this},t.isStarted=function(){return typeof t.status=="number"},t.start=function(){t.status||t.set(0);var e=function(){setTimeout(function(){t.status&&(t.trickle(),e())},s.trickleSpeed)};return s.trickle&&e(),this},t.done=function(e){return!e&&!t.status?this:t.inc(.3+.5*Math.random()).set(1)},t.inc=function(e){var r=t.status;return r?(typeof e!="number"&&(e=(1-r)*c(Math.random()*r,.1,.95)),r=c(r+e,0,.994),t.set(r)):t.start()},t.trickle=function(){return t.inc(Math.random()*s.trickleRate)},function(){var e=0,r=0;t.promise=function(o){return!o||o.state()==="resolved"?this:(r===0&&t.start(),e++,r++,o.always(function(){r--,r===0?(e=0,t.done()):t.set((e-r)/e)}),this)}}(),t.render=function(e){if(t.isRendered())return document.getElementById("nprogress");$(document.documentElement,"nprogress-busy");var r=document.createElement("div");r.id="nprogress",r.innerHTML=s.template;var o=r.querySelector(s.barSelector),p=e?"-100":m(t.status||0),g=document.querySelector(s.parent),_;return l(o,{transition:"all 0 linear",transform:"translate3d("+p+"%,0,0)"}),s.showSpinner||(_=r.querySelector(s.spinnerSelector),_&&P(_)),g!=document.body&&$(g,"nprogress-custom-parent"),g.appendChild(r),r},t.remove=function(){w(document.documentElement,"nprogress-busy"),w(document.querySelector(s.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&P(e)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var e=document.body.style,r="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return r+"Perspective"in e?"translate3d":r+"Transform"in e?"translate":"margin"};function c(e,r,o){return e<r?r:e>o?o:e}function m(e){return(-1+e)*100}function i(e,r,o){var p;return s.positionUsing==="translate3d"?p={transform:"translate3d("+m(e)+"%,0,0)"}:s.positionUsing==="translate"?p={transform:"translate("+m(e)+"%,0)"}:p={"margin-left":m(e)+"%"},p.transition="all "+r+"ms "+o,p}var n=function(){var e=[];function r(){var o=e.shift();o&&o(r)}return function(o){e.push(o),e.length==1&&r()}}(),l=function(){var e=["Webkit","O","Moz","ms"],r={};function o(f){return f.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(d,y){return y.toUpperCase()})}function p(f){var d=document.body.style;if(f in d)return f;for(var y=e.length,T=f.charAt(0).toUpperCase()+f.slice(1),E;y--;)if(E=e[y]+T,E in d)return E;return f}function g(f){return f=o(f),r[f]||(r[f]=p(f))}function _(f,d,y){d=g(d),f.style[d]=y}return function(f,d){var y=arguments,T,E;if(y.length==2)for(T in d)E=d[T],E!==void 0&&d.hasOwnProperty(T)&&_(f,T,E);else _(f,y[1],y[2])}}();function x(e,r){var o=typeof e=="string"?e:L(e);return o.indexOf(" "+r+" ")>=0}function $(e,r){var o=L(e),p=o+r;x(o,r)||(e.className=p.substring(1))}function w(e,r){var o=L(e),p;x(e,r)&&(p=o.replace(" "+r+" "," "),e.className=p.substring(1,p.length-1))}function L(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function P(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return t})})(se);var Se=se.exports;const Y=$e(Se);function ke(u){return u*u*u}function ae(u){const a=u-1;return a*a*a+1}function Z(u,{delay:a=0,duration:t=400,easing:s=ae,x:c=0,y:m=0,opacity:i=0}={}){const n=getComputedStyle(u),l=+n.opacity,x=n.transform==="none"?"":n.transform,$=l*(1-i),[w,L]=Q(c),[P,e]=Q(m);return{delay:a,duration:t,easing:s,css:(r,o)=>`
			transform: ${x} translate(${(1-r)*w}${L}, ${(1-r)*P}${e});
			opacity: ${l-$*o}`}}function we(u){let a,t,s,c,m='<a href="/" class="navbar__link" aria-label="Choco Logo"><img src="/favicon.png" alt="Logo" class="w-9 h-auto" width="0" height="0"/></a>',i,n,l,x,$,w,L,P,e,r,o,p,g,_,f;return w=new D({props:{icon:"material-symbols:home"}}),r=new D({props:{icon:"material-symbols:person"}}),_=new D({props:{icon:"material-symbols:music-note-rounded"}}),{c(){a=S("div"),t=S("header"),s=S("nav"),c=S("div"),c.innerHTML=m,i=O(),n=S("div"),l=S("ul"),x=S("li"),$=S("a"),A(w.$$.fragment),L=O(),P=S("li"),e=S("a"),A(r.$$.fragment),o=O(),p=S("li"),g=S("a"),A(_.$$.fragment),this.h()},l(d){a=k(d,"DIV",{});var y=C(a);t=k(y,"HEADER",{class:!0});var T=C(t);s=k(T,"NAV",{class:!0});var E=C(s);c=k(E,"DIV",{class:!0,"data-svelte-h":!0}),oe(c)!=="svelte-1ba4p8"&&(c.innerHTML=m),i=U(E),n=k(E,"DIV",{class:!0});var H=C(n);l=k(H,"UL",{class:!0});var M=C(l);x=k(M,"LI",{class:!0});var R=C(x);$=k(R,"A",{href:!0,class:!0,"aria-label":!0});var W=C($);V(w.$$.fragment,W),W.forEach(h),R.forEach(h),L=U(M),P=k(M,"LI",{class:!0});var F=C(P);e=k(F,"A",{href:!0,class:!0,"aria-label":!0});var G=C(e);V(r.$$.fragment,G),G.forEach(h),F.forEach(h),o=U(M),p=k(M,"LI",{class:!0});var J=C(p);g=k(J,"A",{href:!0,class:!0,"aria-label":!0});var K=C(g);V(_.$$.fragment,K),K.forEach(h),J.forEach(h),M.forEach(h),H.forEach(h),E.forEach(h),T.forEach(h),y.forEach(h),this.h()},h(){v(c,"class","pr-8"),v($,"href","/"),v($,"class","navbar__link"),v($,"aria-label","Home page"),v(x,"class","navbar__list"),v(e,"href","/about"),v(e,"class","navbar__link"),v(e,"aria-label","About page"),v(P,"class","navbar__list"),v(g,"href","/songs"),v(g,"class","navbar__link"),v(g,"aria-label","Songs page"),v(p,"class","navbar__list"),v(l,"class","flex gap-4 pt-[0.45rem]"),v(n,"class","bg-[#65534d] h-8 text-chocolate-700 rounded-lg px-4 transition-all"),v(s,"class","mx-auto fixed p-4 py-3 h-14 bg-[#fddeca] text-white flex justify-between shadow-lg rounded-2xl z-10"),v(t,"class","pt-4 px-4 lg:px-12 font-lexend")},m(d,y){z(d,a,y),b(a,t),b(t,s),b(s,c),b(s,i),b(s,n),b(n,l),b(l,x),b(x,$),j(w,$,null),b(l,L),b(l,P),b(P,e),j(r,e,null),b(l,o),b(l,p),b(p,g),j(_,g,null),f=!0},p:te,i(d){f||(I(w.$$.fragment,d),I(r.$$.fragment,d),I(_.$$.fragment,d),f=!0)},o(d){N(w.$$.fragment,d),N(r.$$.fragment,d),N(_.$$.fragment,d),f=!1},d(d){d&&h(a),q(w),q(r),q(_)}}}class Ee extends re{constructor(a){super(),ne(this,a,null,we,B,{})}}function ee(u){let a,t,s,c;const m=u[3].default,i=le(m,u,u[2],null);return{c(){a=S("div"),i&&i.c(),this.h()},l(n){a=k(n,"DIV",{class:!0});var l=C(a);i&&i.l(l),l.forEach(h),this.h()},h(){v(a,"class","container mx-auto p-4 font-lexend")},m(n,l){z(n,a,l),i&&i.m(a,null),c=!0},p(n,l){i&&i.p&&(!c||l&4)&&ue(i,m,n,n[2],c?fe(m,n[2],l,null):ce(n[2]),null)},i(n){c||(I(i,n),de(()=>{c&&(s&&s.end(1),t=me(a,Z,{easing:ae,y:10,duration:300,delay:400}),t.start())}),c=!0)},o(n){N(i,n),t&&t.invalidate(),s=ge(a,Z,{easing:ke,y:-10,duration:300}),c=!1},d(n){n&&h(a),i&&i.d(n),n&&s&&s.end()}}}function Ce(u){let a,t,s=u[0].pathname,c,m;a=new Ee({});let i=ee(u);return{c(){A(a.$$.fragment),t=O(),i.c(),c=X()},l(n){V(a.$$.fragment,n),t=U(n),i.l(n),c=X()},m(n,l){j(a,n,l),z(n,t,l),i.m(n,l),z(n,c,l),m=!0},p(n,[l]){l&1&&B(s,s=n[0].pathname)?(ve(),N(i,1,1,te),pe(),i=ee(n),i.c(),I(i,1),i.m(c.parentNode,c)):i.p(n,l)},i(n){m||(I(a.$$.fragment,n),I(i),m=!0)},o(n){N(a.$$.fragment,n),N(i),m=!1},d(n){n&&(h(t),h(c)),q(a,n),i.d(n)}}}function xe(u,a,t){let s;ie(u,_e,n=>t(1,s=n));let{$$slots:c={},$$scope:m}=a,{data:i}=a;return u.$$set=n=>{"data"in n&&t(0,i=n.data),"$$scope"in n&&t(2,m=n.$$scope)},u.$$.update=()=>{u.$$.dirty&2&&(s?Y.start():Y.done())},[i,s,m,c]}class Me extends re{constructor(a){super(),ne(this,a,xe,Ce,B,{data:0})}}export{Me as component,Ne as universal};
