import{b as d,c as b,d as _,a as P,e as g,f as h,g as A,h as w,j as x}from"./identity-_yWDbbU3.js";var v={exports:{}};v.exports;(function(r,e){var n=d,t=e&&!e.nodeType&&e,i=t&&!0&&r&&!r.nodeType&&r,o=i&&i.exports===t,f=o?n.Buffer:void 0,a=f?f.allocUnsafe:void 0;function s(u,O){if(O)return u.slice();var c=u.length,l=a?a(c):new u.constructor(c);return u.copy(l),l}r.exports=s})(v,v.exports);var ir=v.exports,p=b;function $(r){var e=new r.constructor(r.byteLength);return new p(e).set(new p(r)),e}var I=$,K=I;function B(r,e){var n=e?K(r.buffer):r.buffer;return new r.constructor(n,r.byteOffset,r.length)}var or=B;function C(r,e){var n=-1,t=r.length;for(e||(e=Array(t));++n<t;)e[n]=r[n];return e}var fr=C,L=_,y=Object.create,T=function(){function r(){}return function(e){if(!L(e))return{};if(y)return y(e);r.prototype=e;var n=new r;return r.prototype=void 0,n}}(),U=T,V=U,E=P,q=g;function M(r){return typeof r.constructor=="function"&&!q(r)?V(E(r)):{}}var ur=M,N=h,j=A,D=Object.prototype,F=D.hasOwnProperty;function G(r,e,n){var t=r[e];(!(F.call(r,e)&&j(t,n))||n===void 0&&!(e in r))&&N(r,e,n)}var H=G,J=H,Q=h;function R(r,e,n,t){var i=!n;n||(n={});for(var o=-1,f=e.length;++o<f;){var a=e[o],s=t?t(n[a],r[a],a,n,r):void 0;s===void 0&&(s=r[a]),i?Q(n,a,s):J(n,a,s)}return n}var vr=R;function S(r){var e=[];if(r!=null)for(var n in Object(r))e.push(n);return e}var W=S,X=_,Y=g,Z=W,m=Object.prototype,z=m.hasOwnProperty;function k(r){if(!X(r))return Z(r);var e=Y(r),n=[];for(var t in r)t=="constructor"&&(e||!z.call(r,t))||n.push(t);return n}var rr=k,er=w,nr=rr,tr=x;function ar(r){return tr(r)?er(r,!0):nr(r)}var cr=ar;export{H as _,vr as a,I as b,or as c,ir as d,fr as e,ur as f,cr as k};