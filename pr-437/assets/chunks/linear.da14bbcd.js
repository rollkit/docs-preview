import{ak as un,al as I,am as U,an as Y,ao as fn}from"../app.716130e7.js";import{i as cn}from"./init.77b53fdd.js";function F(n,t){return n==null||t==null?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function hn(n,t){return n==null||t==null?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function _(n){let t,e,r;n.length!==2?(t=F,e=(u,c)=>F(n(u),c),r=(u,c)=>n(u)-c):(t=n===F||n===hn?n:mn,e=n,r=n);function i(u,c,o=0,s=u.length){if(o<s){if(t(c,c)!==0)return s;do{const h=o+s>>>1;e(u[h],c)<0?o=h+1:s=h}while(o<s)}return o}function f(u,c,o=0,s=u.length){if(o<s){if(t(c,c)!==0)return s;do{const h=o+s>>>1;e(u[h],c)<=0?o=h+1:s=h}while(o<s)}return o}function a(u,c,o=0,s=u.length){const h=i(u,c,o,s-1);return h>o&&r(u[h-1],c)>-r(u[h],c)?h-1:h}return{left:i,center:a,right:f}}function mn(){return 0}function ln(n){return n===null?NaN:+n}const sn=_(F),dn=sn.right;_(ln).center;const gn=dn,yn=Math.sqrt(50),Mn=Math.sqrt(10),pn=Math.sqrt(2);function R(n,t,e){const r=(t-n)/Math.max(0,e),i=Math.floor(Math.log10(r)),f=r/Math.pow(10,i),a=f>=yn?10:f>=Mn?5:f>=pn?2:1;let u,c,o;return i<0?(o=Math.pow(10,-i)/a,u=Math.round(n*o),c=Math.round(t*o),u/o<n&&++u,c/o>t&&--c,o=-o):(o=Math.pow(10,i)*a,u=Math.round(n/o),c=Math.round(t/o),u*o<n&&++u,c*o>t&&--c),c<u&&.5<=e&&e<2?R(n,t,e*2):[u,c,o]}function wn(n,t,e){if(t=+t,n=+n,e=+e,!(e>0))return[];if(n===t)return[n];const r=t<n,[i,f,a]=r?R(t,n,e):R(n,t,e);if(!(f>=i))return[];const u=f-i+1,c=new Array(u);if(r)if(a<0)for(let o=0;o<u;++o)c[o]=(f-o)/-a;else for(let o=0;o<u;++o)c[o]=(f-o)*a;else if(a<0)for(let o=0;o<u;++o)c[o]=(i+o)/-a;else for(let o=0;o<u;++o)c[o]=(i+o)*a;return c}function L(n,t,e){return t=+t,n=+n,e=+e,R(n,t,e)[2]}function Nn(n,t,e){t=+t,n=+n,e=+e;const r=t<n,i=r?L(t,n,e):L(n,t,e);return(r?-1:1)*(i<0?1/-i:i)}function kn(n,t){t||(t=[]);var e=n?Math.min(t.length,n.length):0,r=t.slice(),i;return function(f){for(i=0;i<e;++i)r[i]=n[i]*(1-f)+t[i]*f;return r}}function xn(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function An(n,t){var e=t?t.length:0,r=n?Math.min(e,n.length):0,i=new Array(r),f=new Array(e),a;for(a=0;a<r;++a)i[a]=C(n[a],t[a]);for(;a<e;++a)f[a]=t[a];return function(u){for(a=0;a<r;++a)f[a]=i[a](u);return f}}function vn(n,t){var e=new Date;return n=+n,t=+t,function(r){return e.setTime(n*(1-r)+t*r),e}}function Sn(n,t){var e={},r={},i;(n===null||typeof n!="object")&&(n={}),(t===null||typeof t!="object")&&(t={});for(i in t)i in n?e[i]=C(n[i],t[i]):r[i]=t[i];return function(f){for(i in e)r[i]=e[i](f);return r}}function C(n,t){var e=typeof t,r;return t==null||e==="boolean"?un(t):(e==="number"?I:e==="string"?(r=U(t))?(t=r,Y):fn:t instanceof U?Y:t instanceof Date?vn:xn(t)?kn:Array.isArray(t)?An:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?Sn:I)(n,t)}function bn(n,t){return n=+n,t=+t,function(e){return Math.round(n*(1-e)+t*e)}}function jn(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function E(n,t){if((e=(n=t?n.toExponential(t-1):n.toExponential()).indexOf("e"))<0)return null;var e,r=n.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+n.slice(e+1)]}function v(n){return n=E(Math.abs(n)),n?n[1]:NaN}function Pn(n,t){return function(e,r){for(var i=e.length,f=[],a=0,u=n[0],c=0;i>0&&u>0&&(c+u+1>r&&(u=Math.max(1,r-c)),f.push(e.substring(i-=u,i+u)),!((c+=u+1)>r));)u=n[a=(a+1)%n.length];return f.reverse().join(t)}}function zn(n){return function(t){return t.replace(/[0-9]/g,function(e){return n[+e]})}}var $n=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function D(n){if(!(t=$n.exec(n)))throw new Error("invalid format: "+n);var t;return new B({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}D.prototype=B.prototype;function B(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}B.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Fn(n){n:for(var t=n.length,e=1,r=-1,i;e<t;++e)switch(n[e]){case".":r=i=e;break;case"0":r===0&&(r=e),i=e;break;default:if(!+n[e])break n;r>0&&(r=0);break}return r>0?n.slice(0,r)+n.slice(i+1):n}var nn;function Rn(n,t){var e=E(n,t);if(!e)return n+"";var r=e[0],i=e[1],f=i-(nn=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,a=r.length;return f===a?r:f>a?r+new Array(f-a+1).join("0"):f>0?r.slice(0,f)+"."+r.slice(f):"0."+new Array(1-f).join("0")+E(n,Math.max(0,t+f-1))[0]}function Z(n,t){var e=E(n,t);if(!e)return n+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}const H={"%":(n,t)=>(n*100).toFixed(t),b:n=>Math.round(n).toString(2),c:n=>n+"",d:jn,e:(n,t)=>n.toExponential(t),f:(n,t)=>n.toFixed(t),g:(n,t)=>n.toPrecision(t),o:n=>Math.round(n).toString(8),p:(n,t)=>Z(n*100,t),r:Z,s:Rn,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function J(n){return n}var K=Array.prototype.map,Q=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function En(n){var t=n.grouping===void 0||n.thousands===void 0?J:Pn(K.call(n.grouping,Number),n.thousands+""),e=n.currency===void 0?"":n.currency[0]+"",r=n.currency===void 0?"":n.currency[1]+"",i=n.decimal===void 0?".":n.decimal+"",f=n.numerals===void 0?J:zn(K.call(n.numerals,String)),a=n.percent===void 0?"%":n.percent+"",u=n.minus===void 0?"−":n.minus+"",c=n.nan===void 0?"NaN":n.nan+"";function o(h){h=D(h);var l=h.fill,p=h.align,y=h.sign,S=h.symbol,k=h.zero,b=h.width,T=h.comma,w=h.precision,G=h.trim,d=h.type;d==="n"?(T=!0,d="g"):H[d]||(w===void 0&&(w=12),G=!0,d="g"),(k||l==="0"&&p==="=")&&(k=!0,l="0",p="=");var en=S==="$"?e:S==="#"&&/[boxX]/.test(d)?"0"+d.toLowerCase():"",on=S==="$"?r:/[%p]/.test(d)?a:"",O=H[d],an=/[defgprs%]/.test(d);w=w===void 0?6:/[gprs]/.test(d)?Math.max(1,Math.min(21,w)):Math.max(0,Math.min(20,w));function V(m){var N=en,g=on,x,X,j;if(d==="c")g=O(m)+g,m="";else{m=+m;var P=m<0||1/m<0;if(m=isNaN(m)?c:O(Math.abs(m),w),G&&(m=Fn(m)),P&&+m==0&&y!=="+"&&(P=!1),N=(P?y==="("?y:u:y==="-"||y==="("?"":y)+N,g=(d==="s"?Q[8+nn/3]:"")+g+(P&&y==="("?")":""),an){for(x=-1,X=m.length;++x<X;)if(j=m.charCodeAt(x),48>j||j>57){g=(j===46?i+m.slice(x+1):m.slice(x))+g,m=m.slice(0,x);break}}}T&&!k&&(m=t(m,1/0));var z=N.length+m.length+g.length,M=z<b?new Array(b-z+1).join(l):"";switch(T&&k&&(m=t(M+m,M.length?b-g.length:1/0),M=""),p){case"<":m=N+m+g+M;break;case"=":m=N+M+m+g;break;case"^":m=M.slice(0,z=M.length>>1)+N+m+g+M.slice(z);break;default:m=M+N+m+g;break}return f(m)}return V.toString=function(){return h+""},V}function s(h,l){var p=o((h=D(h),h.type="f",h)),y=Math.max(-8,Math.min(8,Math.floor(v(l)/3)))*3,S=Math.pow(10,-y),k=Q[8+y/3];return function(b){return p(S*b)+k}}return{format:o,formatPrefix:s}}var $,tn,rn;Dn({thousands:",",grouping:[3],currency:["$",""]});function Dn(n){return $=En(n),tn=$.format,rn=$.formatPrefix,$}function Tn(n){return Math.max(0,-v(Math.abs(n)))}function In(n,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(v(t)/3)))*3-v(Math.abs(n)))}function Ln(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,v(t)-v(n))+1}function qn(n){return function(){return n}}function Cn(n){return+n}var W=[0,1];function A(n){return n}function q(n,t){return(t-=n=+n)?function(e){return(e-n)/t}:qn(isNaN(t)?NaN:.5)}function Bn(n,t){var e;return n>t&&(e=n,n=t,t=e),function(r){return Math.max(n,Math.min(t,r))}}function Gn(n,t,e){var r=n[0],i=n[1],f=t[0],a=t[1];return i<r?(r=q(i,r),f=e(a,f)):(r=q(r,i),f=e(f,a)),function(u){return f(r(u))}}function On(n,t,e){var r=Math.min(n.length,t.length)-1,i=new Array(r),f=new Array(r),a=-1;for(n[r]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++a<r;)i[a]=q(n[a],n[a+1]),f[a]=e(t[a],t[a+1]);return function(u){var c=gn(n,u,1,r)-1;return f[c](i[c](u))}}function Vn(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function Xn(){var n=W,t=W,e=C,r,i,f,a=A,u,c,o;function s(){var l=Math.min(n.length,t.length);return a!==A&&(a=Bn(n[0],n[l-1])),u=l>2?On:Gn,c=o=null,h}function h(l){return l==null||isNaN(l=+l)?f:(c||(c=u(n.map(r),t,e)))(r(a(l)))}return h.invert=function(l){return a(i((o||(o=u(t,n.map(r),I)))(l)))},h.domain=function(l){return arguments.length?(n=Array.from(l,Cn),s()):n.slice()},h.range=function(l){return arguments.length?(t=Array.from(l),s()):t.slice()},h.rangeRound=function(l){return t=Array.from(l),e=bn,s()},h.clamp=function(l){return arguments.length?(a=l?!0:A,s()):a!==A},h.interpolate=function(l){return arguments.length?(e=l,s()):e},h.unknown=function(l){return arguments.length?(f=l,h):f},function(l,p){return r=l,i=p,s()}}function Un(){return Xn()(A,A)}function Yn(n,t,e,r){var i=Nn(n,t,e),f;switch(r=D(r??",f"),r.type){case"s":{var a=Math.max(Math.abs(n),Math.abs(t));return r.precision==null&&!isNaN(f=In(i,a))&&(r.precision=f),rn(r,a)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(f=Ln(i,Math.max(Math.abs(n),Math.abs(t))))&&(r.precision=f-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(f=Tn(i))&&(r.precision=f-(r.type==="%")*2);break}}return tn(r)}function Zn(n){var t=n.domain;return n.ticks=function(e){var r=t();return wn(r[0],r[r.length-1],e??10)},n.tickFormat=function(e,r){var i=t();return Yn(i[0],i[i.length-1],e??10,r)},n.nice=function(e){e==null&&(e=10);var r=t(),i=0,f=r.length-1,a=r[i],u=r[f],c,o,s=10;for(u<a&&(o=a,a=u,u=o,o=i,i=f,f=o);s-- >0;){if(o=L(a,u,e),o===c)return r[i]=a,r[f]=u,t(r);if(o>0)a=Math.floor(a/o)*o,u=Math.ceil(u/o)*o;else if(o<0)a=Math.ceil(a*o)/o,u=Math.floor(u*o)/o;else break;c=o}return n},n}function Hn(){var n=Un();return n.copy=function(){return Vn(n,Hn())},cn.apply(n,arguments),Zn(n)}export{Vn as a,_ as b,Un as c,Hn as l,Nn as t};
