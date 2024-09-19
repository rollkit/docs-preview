import{G as k}from"./graph.njwn1ZsW.js";import{b as Pn,p as ln,q as vn,g as X,e as en,m as A,o as Sn,s as On,c as Fn,u as Vn,d as s,h as m,i as g,f as M,v as y,r as O}from"./baseUniq.B4xNN4PK.js";import{f as N,b as pn,a as An,c as Bn,d as Gn,t as B,m as w,e as R,g as U,l as P,h as Yn}from"./basePickBy.aKPklqPX.js";import{b4 as Dn,b5 as qn,b6 as $n,aM as Wn,b7 as jn,aQ as mn,aP as wn,b8 as zn,aL as W,ay as Xn,aS as Un,aA as Hn,b9 as j}from"../app.e0HjvSZY.js";function Jn(n){return Dn(qn(n,void 0,N),n+"")}var Qn=1,Zn=4;function Kn(n){return Pn(n,Qn|Zn)}function ne(n,e){return n==null?n:$n(n,ln(e),Wn)}function ee(n,e){return n&&vn(n,ln(e))}function re(n,e){return n>e}function F(n,e){var r={};return e=X(e),vn(n,function(i,t,a){jn(r,t,e(i,t,a))}),r}function x(n){return n&&n.length?pn(n,mn,re):void 0}function H(n,e){return n&&n.length?pn(n,X(e),An):void 0}function ie(n,e){var r=n.length;for(n.sort(e);r--;)n[r]=n[r].value;return n}function te(n,e){if(n!==e){var r=n!==void 0,i=n===null,t=n===n,a=en(n),o=e!==void 0,u=e===null,d=e===e,f=en(e);if(!u&&!f&&!a&&n>e||a&&o&&d&&!u&&!f||i&&o&&d||!r&&d||!t)return 1;if(!i&&!a&&!f&&n<e||f&&r&&t&&!i&&!a||u&&r&&t||!o&&t||!d)return-1}return 0}function ae(n,e,r){for(var i=-1,t=n.criteria,a=e.criteria,o=t.length,u=r.length;++i<o;){var d=te(t[i],a[i]);if(d){if(i>=u)return d;var f=r[i];return d*(f=="desc"?-1:1)}}return n.index-e.index}function oe(n,e,r){e.length?e=A(e,function(a){return wn(a)?function(o){return Sn(o,a.length===1?a[0]:a)}:a}):e=[mn];var i=-1;e=A(e,zn(X));var t=Bn(n,function(a,o,u){var d=A(e,function(f){return f(a)});return{criteria:d,index:++i,value:a}});return ie(t,function(a,o){return ae(a,o,r)})}function ue(n,e){return Gn(n,e,function(r,i){return On(n,i)})}var S=Jn(function(n,e){return n==null?{}:ue(n,e)}),de=Math.ceil,fe=Math.max;function se(n,e,r,i){for(var t=-1,a=fe(de((e-n)/(r||1)),0),o=Array(a);a--;)o[++t]=n,n+=r;return o}function ce(n){return function(e,r,i){return i&&typeof i!="number"&&W(e,r,i)&&(r=i=void 0),e=B(e),r===void 0?(r=e,e=0):r=B(r),i=i===void 0?e<r?1:-1:B(i),se(e,r,i)}}var L=ce(),I=Xn(function(n,e){if(n==null)return[];var r=e.length;return r>1&&W(n,e[0],e[1])?e=[]:r>2&&W(e[0],e[1],e[2])&&(e=[e[0]]),oe(n,Fn(e),[])}),he=0;function J(n){var e=++he;return Vn(n)+e}function le(n,e,r){for(var i=-1,t=n.length,a=e.length,o={};++i<t;){var u=i<a?e[i]:void 0;r(o,n[i],u)}return o}function ve(n,e){return le(n||[],e||[],Un)}class pe{constructor(){var e={};e._next=e._prev=e,this._sentinel=e}dequeue(){var e=this._sentinel,r=e._prev;if(r!==e)return rn(r),r}enqueue(e){var r=this._sentinel;e._prev&&e._next&&rn(e),e._next=r._next,r._next._prev=e,r._next=e,e._prev=r}toString(){for(var e=[],r=this._sentinel,i=r._prev;i!==r;)e.push(JSON.stringify(i,me)),i=i._prev;return"["+e.join(", ")+"]"}}function rn(n){n._prev._next=n._next,n._next._prev=n._prev,delete n._next,delete n._prev}function me(n,e){if(n!=="_next"&&n!=="_prev")return e}var we=Hn(1);function be(n,e){if(n.nodeCount()<=1)return[];var r=ke(n,e||we),i=ge(r.graph,r.buckets,r.zeroIdx);return N(w(i,function(t){return n.outEdges(t.v,t.w)}))}function ge(n,e,r){for(var i=[],t=e[e.length-1],a=e[0],o;n.nodeCount();){for(;o=a.dequeue();)G(n,e,r,o);for(;o=t.dequeue();)G(n,e,r,o);if(n.nodeCount()){for(var u=e.length-2;u>0;--u)if(o=e[u].dequeue(),o){i=i.concat(G(n,e,r,o,!0));break}}}return i}function G(n,e,r,i,t){var a=t?[]:void 0;return s(n.inEdges(i.v),function(o){var u=n.edge(o),d=n.node(o.v);t&&a.push({v:o.v,w:o.w}),d.out-=u,z(e,r,d)}),s(n.outEdges(i.v),function(o){var u=n.edge(o),d=o.w,f=n.node(d);f.in-=u,z(e,r,f)}),n.removeNode(i.v),a}function ke(n,e){var r=new k,i=0,t=0;s(n.nodes(),function(u){r.setNode(u,{v:u,in:0,out:0})}),s(n.edges(),function(u){var d=r.edge(u.v,u.w)||0,f=e(u),c=d+f;r.setEdge(u.v,u.w,c),t=Math.max(t,r.node(u.v).out+=f),i=Math.max(i,r.node(u.w).in+=f)});var a=L(t+i+3).map(function(){return new pe}),o=i+1;return s(r.nodes(),function(u){z(a,o,r.node(u))}),{graph:r,buckets:a,zeroIdx:o}}function z(n,e,r){r.out?r.in?n[r.out-r.in+e].enqueue(r):n[n.length-1].enqueue(r):n[0].enqueue(r)}function xe(n){var e=n.graph().acyclicer==="greedy"?be(n,r(n)):Ee(n);s(e,function(i){var t=n.edge(i);n.removeEdge(i),t.forwardName=i.name,t.reversed=!0,n.setEdge(i.w,i.v,t,J("rev"))});function r(i){return function(t){return i.edge(t).weight}}}function Ee(n){var e=[],r={},i={};function t(a){m(i,a)||(i[a]=!0,r[a]=!0,s(n.outEdges(a),function(o){m(r,o.w)?e.push(o):t(o.w)}),delete r[a])}return s(n.nodes(),t),e}function ye(n){s(n.edges(),function(e){var r=n.edge(e);if(r.reversed){n.removeEdge(e);var i=r.forwardName;delete r.reversed,delete r.forwardName,n.setEdge(e.w,e.v,r,i)}})}function C(n,e,r,i){var t;do t=J(i);while(n.hasNode(t));return r.dummy=e,n.setNode(t,r),t}function Le(n){var e=new k().setGraph(n.graph());return s(n.nodes(),function(r){e.setNode(r,n.node(r))}),s(n.edges(),function(r){var i=e.edge(r.v,r.w)||{weight:0,minlen:1},t=n.edge(r);e.setEdge(r.v,r.w,{weight:i.weight+t.weight,minlen:Math.max(i.minlen,t.minlen)})}),e}function bn(n){var e=new k({multigraph:n.isMultigraph()}).setGraph(n.graph());return s(n.nodes(),function(r){n.children(r).length||e.setNode(r,n.node(r))}),s(n.edges(),function(r){e.setEdge(r,n.edge(r))}),e}function tn(n,e){var r=n.x,i=n.y,t=e.x-r,a=e.y-i,o=n.width/2,u=n.height/2;if(!t&&!a)throw new Error("Not possible to find intersection inside of the rectangle");var d,f;return Math.abs(a)*o>Math.abs(t)*u?(a<0&&(u=-u),d=u*t/a,f=u):(t<0&&(o=-o),d=o,f=o*a/t),{x:r+d,y:i+f}}function V(n){var e=w(L(gn(n)+1),function(){return[]});return s(n.nodes(),function(r){var i=n.node(r),t=i.rank;g(t)||(e[t][i.order]=r)}),e}function Ne(n){var e=R(w(n.nodes(),function(r){return n.node(r).rank}));s(n.nodes(),function(r){var i=n.node(r);m(i,"rank")&&(i.rank-=e)})}function Ce(n){var e=R(w(n.nodes(),function(a){return n.node(a).rank})),r=[];s(n.nodes(),function(a){var o=n.node(a).rank-e;r[o]||(r[o]=[]),r[o].push(a)});var i=0,t=n.graph().nodeRankFactor;s(r,function(a,o){g(a)&&o%t!==0?--i:i&&s(a,function(u){n.node(u).rank+=i})})}function an(n,e,r,i){var t={width:0,height:0};return arguments.length>=4&&(t.rank=r,t.order=i),C(n,"border",t,e)}function gn(n){return x(w(n.nodes(),function(e){var r=n.node(e).rank;if(!g(r))return r}))}function _e(n,e){var r={lhs:[],rhs:[]};return s(n,function(i){e(i)?r.lhs.push(i):r.rhs.push(i)}),r}function Re(n,e){return e()}function Te(n){function e(r){var i=n.children(r),t=n.node(r);if(i.length&&s(i,e),m(t,"minRank")){t.borderLeft=[],t.borderRight=[];for(var a=t.minRank,o=t.maxRank+1;a<o;++a)on(n,"borderLeft","_bl",r,t,a),on(n,"borderRight","_br",r,t,a)}}s(n.children(),e)}function on(n,e,r,i,t,a){var o={width:0,height:0,rank:a,borderType:e},u=t[e][a-1],d=C(n,"border",o,r);t[e][a]=d,n.setParent(d,i),u&&n.setEdge(u,d,{weight:1})}function Me(n){var e=n.graph().rankdir.toLowerCase();(e==="lr"||e==="rl")&&kn(n)}function Ie(n){var e=n.graph().rankdir.toLowerCase();(e==="bt"||e==="rl")&&Pe(n),(e==="lr"||e==="rl")&&(Se(n),kn(n))}function kn(n){s(n.nodes(),function(e){un(n.node(e))}),s(n.edges(),function(e){un(n.edge(e))})}function un(n){var e=n.width;n.width=n.height,n.height=e}function Pe(n){s(n.nodes(),function(e){Y(n.node(e))}),s(n.edges(),function(e){var r=n.edge(e);s(r.points,Y),m(r,"y")&&Y(r)})}function Y(n){n.y=-n.y}function Se(n){s(n.nodes(),function(e){D(n.node(e))}),s(n.edges(),function(e){var r=n.edge(e);s(r.points,D),m(r,"x")&&D(r)})}function D(n){var e=n.x;n.x=n.y,n.y=e}function Oe(n){n.graph().dummyChains=[],s(n.edges(),function(e){Fe(n,e)})}function Fe(n,e){var r=e.v,i=n.node(r).rank,t=e.w,a=n.node(t).rank,o=e.name,u=n.edge(e),d=u.labelRank;if(a!==i+1){n.removeEdge(e);var f,c,h;for(h=0,++i;i<a;++h,++i)u.points=[],c={width:0,height:0,edgeLabel:u,edgeObj:e,rank:i},f=C(n,"edge",c,"_d"),i===d&&(c.width=u.width,c.height=u.height,c.dummy="edge-label",c.labelpos=u.labelpos),n.setEdge(r,f,{weight:u.weight},o),h===0&&n.graph().dummyChains.push(f),r=f;n.setEdge(r,t,{weight:u.weight},o)}}function Ve(n){s(n.graph().dummyChains,function(e){var r=n.node(e),i=r.edgeLabel,t;for(n.setEdge(r.edgeObj,i);r.dummy;)t=n.successors(e)[0],n.removeNode(e),i.points.push({x:r.x,y:r.y}),r.dummy==="edge-label"&&(i.x=r.x,i.y=r.y,i.width=r.width,i.height=r.height),e=t,r=n.node(e)})}function Q(n){var e={};function r(i){var t=n.node(i);if(m(e,i))return t.rank;e[i]=!0;var a=R(w(n.outEdges(i),function(o){return r(o.w)-n.edge(o).minlen}));return(a===Number.POSITIVE_INFINITY||a===void 0||a===null)&&(a=0),t.rank=a}s(n.sources(),r)}function T(n,e){return n.node(e.w).rank-n.node(e.v).rank-n.edge(e).minlen}function xn(n){var e=new k({directed:!1}),r=n.nodes()[0],i=n.nodeCount();e.setNode(r,{});for(var t,a;Ae(e,n)<i;)t=Be(e,n),a=e.hasNode(t.v)?T(n,t):-T(n,t),Ge(e,n,a);return e}function Ae(n,e){function r(i){s(e.nodeEdges(i),function(t){var a=t.v,o=i===a?t.w:a;!n.hasNode(o)&&!T(e,t)&&(n.setNode(o,{}),n.setEdge(i,o,{}),r(o))})}return s(n.nodes(),r),n.nodeCount()}function Be(n,e){return H(e.edges(),function(r){if(n.hasNode(r.v)!==n.hasNode(r.w))return T(e,r)})}function Ge(n,e,r){s(n.nodes(),function(i){e.node(i).rank+=r})}function Ye(){}Ye.prototype=new Error;function En(n,e,r){wn(e)||(e=[e]);var i=(n.isDirected()?n.successors:n.neighbors).bind(n),t=[],a={};return s(e,function(o){if(!n.hasNode(o))throw new Error("Graph does not have node: "+o);yn(n,o,r==="post",a,i,t)}),t}function yn(n,e,r,i,t,a){m(i,e)||(i[e]=!0,r||a.push(e),s(t(e),function(o){yn(n,o,r,i,t,a)}),r&&a.push(e))}function De(n,e){return En(n,e,"post")}function qe(n,e){return En(n,e,"pre")}E.initLowLimValues=K;E.initCutValues=Z;E.calcCutValue=Ln;E.leaveEdge=Cn;E.enterEdge=_n;E.exchangeEdges=Rn;function E(n){n=Le(n),Q(n);var e=xn(n);K(e),Z(e,n);for(var r,i;r=Cn(e);)i=_n(e,n,r),Rn(e,n,r,i)}function Z(n,e){var r=De(n,n.nodes());r=r.slice(0,r.length-1),s(r,function(i){$e(n,e,i)})}function $e(n,e,r){var i=n.node(r),t=i.parent;n.edge(r,t).cutvalue=Ln(n,e,r)}function Ln(n,e,r){var i=n.node(r),t=i.parent,a=!0,o=e.edge(r,t),u=0;return o||(a=!1,o=e.edge(t,r)),u=o.weight,s(e.nodeEdges(r),function(d){var f=d.v===r,c=f?d.w:d.v;if(c!==t){var h=f===a,l=e.edge(d).weight;if(u+=h?l:-l,je(n,r,c)){var v=n.edge(r,c).cutvalue;u+=h?-v:v}}}),u}function K(n,e){arguments.length<2&&(e=n.nodes()[0]),Nn(n,{},1,e)}function Nn(n,e,r,i,t){var a=r,o=n.node(i);return e[i]=!0,s(n.neighbors(i),function(u){m(e,u)||(r=Nn(n,e,r,u,i))}),o.low=a,o.lim=r++,t?o.parent=t:delete o.parent,r}function Cn(n){return U(n.edges(),function(e){return n.edge(e).cutvalue<0})}function _n(n,e,r){var i=r.v,t=r.w;e.hasEdge(i,t)||(i=r.w,t=r.v);var a=n.node(i),o=n.node(t),u=a,d=!1;a.lim>o.lim&&(u=o,d=!0);var f=M(e.edges(),function(c){return d===dn(n,n.node(c.v),u)&&d!==dn(n,n.node(c.w),u)});return H(f,function(c){return T(e,c)})}function Rn(n,e,r,i){var t=r.v,a=r.w;n.removeEdge(t,a),n.setEdge(i.v,i.w,{}),K(n),Z(n,e),We(n,e)}function We(n,e){var r=U(n.nodes(),function(t){return!e.node(t).parent}),i=qe(n,r);i=i.slice(1),s(i,function(t){var a=n.node(t).parent,o=e.edge(t,a),u=!1;o||(o=e.edge(a,t),u=!0),e.node(t).rank=e.node(a).rank+(u?o.minlen:-o.minlen)})}function je(n,e,r){return n.hasEdge(e,r)}function dn(n,e,r){return r.low<=e.lim&&e.lim<=r.lim}function ze(n){switch(n.graph().ranker){case"network-simplex":fn(n);break;case"tight-tree":Ue(n);break;case"longest-path":Xe(n);break;default:fn(n)}}var Xe=Q;function Ue(n){Q(n),xn(n)}function fn(n){E(n)}function He(n){var e=C(n,"root",{},"_root"),r=Je(n),i=x(y(r))-1,t=2*i+1;n.graph().nestingRoot=e,s(n.edges(),function(o){n.edge(o).minlen*=t});var a=Qe(n)+1;s(n.children(),function(o){Tn(n,e,t,a,i,r,o)}),n.graph().nodeRankFactor=t}function Tn(n,e,r,i,t,a,o){var u=n.children(o);if(!u.length){o!==e&&n.setEdge(e,o,{weight:0,minlen:r});return}var d=an(n,"_bt"),f=an(n,"_bb"),c=n.node(o);n.setParent(d,o),c.borderTop=d,n.setParent(f,o),c.borderBottom=f,s(u,function(h){Tn(n,e,r,i,t,a,h);var l=n.node(h),v=l.borderTop?l.borderTop:h,p=l.borderBottom?l.borderBottom:h,b=l.borderTop?i:2*i,_=v!==p?1:t-a[o]+1;n.setEdge(d,v,{weight:b,minlen:_,nestingEdge:!0}),n.setEdge(p,f,{weight:b,minlen:_,nestingEdge:!0})}),n.parent(o)||n.setEdge(e,d,{weight:0,minlen:t+a[o]})}function Je(n){var e={};function r(i,t){var a=n.children(i);a&&a.length&&s(a,function(o){r(o,t+1)}),e[i]=t}return s(n.children(),function(i){r(i,1)}),e}function Qe(n){return O(n.edges(),function(e,r){return e+n.edge(r).weight},0)}function Ze(n){var e=n.graph();n.removeNode(e.nestingRoot),delete e.nestingRoot,s(n.edges(),function(r){var i=n.edge(r);i.nestingEdge&&n.removeEdge(r)})}function Ke(n,e,r){var i={},t;s(r,function(a){for(var o=n.parent(a),u,d;o;){if(u=n.parent(o),u?(d=i[u],i[u]=o):(d=t,t=o),d&&d!==o){e.setEdge(d,o);return}o=u}})}function nr(n,e,r){var i=er(n),t=new k({compound:!0}).setGraph({root:i}).setDefaultNodeLabel(function(a){return n.node(a)});return s(n.nodes(),function(a){var o=n.node(a),u=n.parent(a);(o.rank===e||o.minRank<=e&&e<=o.maxRank)&&(t.setNode(a),t.setParent(a,u||i),s(n[r](a),function(d){var f=d.v===a?d.w:d.v,c=t.edge(f,a),h=g(c)?0:c.weight;t.setEdge(f,a,{weight:n.edge(d).weight+h})}),m(o,"minRank")&&t.setNode(a,{borderLeft:o.borderLeft[e],borderRight:o.borderRight[e]}))}),t}function er(n){for(var e;n.hasNode(e=J("_root")););return e}function rr(n,e){for(var r=0,i=1;i<e.length;++i)r+=ir(n,e[i-1],e[i]);return r}function ir(n,e,r){for(var i=ve(r,w(r,function(f,c){return c})),t=N(w(e,function(f){return I(w(n.outEdges(f),function(c){return{pos:i[c.w],weight:n.edge(c).weight}}),"pos")})),a=1;a<r.length;)a<<=1;var o=2*a-1;a-=1;var u=w(new Array(o),function(){return 0}),d=0;return s(t.forEach(function(f){var c=f.pos+a;u[c]+=f.weight;for(var h=0;c>0;)c%2&&(h+=u[c+1]),c=c-1>>1,u[c]+=f.weight;d+=f.weight*h})),d}function tr(n){var e={},r=M(n.nodes(),function(u){return!n.children(u).length}),i=x(w(r,function(u){return n.node(u).rank})),t=w(L(i+1),function(){return[]});function a(u){if(!m(e,u)){e[u]=!0;var d=n.node(u);t[d.rank].push(u),s(n.successors(u),a)}}var o=I(r,function(u){return n.node(u).rank});return s(o,a),t}function ar(n,e){return w(e,function(r){var i=n.inEdges(r);if(i.length){var t=O(i,function(a,o){var u=n.edge(o),d=n.node(o.v);return{sum:a.sum+u.weight*d.order,weight:a.weight+u.weight}},{sum:0,weight:0});return{v:r,barycenter:t.sum/t.weight,weight:t.weight}}else return{v:r}})}function or(n,e){var r={};s(n,function(t,a){var o=r[t.v]={indegree:0,in:[],out:[],vs:[t.v],i:a};g(t.barycenter)||(o.barycenter=t.barycenter,o.weight=t.weight)}),s(e.edges(),function(t){var a=r[t.v],o=r[t.w];!g(a)&&!g(o)&&(o.indegree++,a.out.push(r[t.w]))});var i=M(r,function(t){return!t.indegree});return ur(i)}function ur(n){var e=[];function r(a){return function(o){o.merged||(g(o.barycenter)||g(a.barycenter)||o.barycenter>=a.barycenter)&&dr(a,o)}}function i(a){return function(o){o.in.push(a),--o.indegree===0&&n.push(o)}}for(;n.length;){var t=n.pop();e.push(t),s(t.in.reverse(),r(t)),s(t.out,i(t))}return w(M(e,function(a){return!a.merged}),function(a){return S(a,["vs","i","barycenter","weight"])})}function dr(n,e){var r=0,i=0;n.weight&&(r+=n.barycenter*n.weight,i+=n.weight),e.weight&&(r+=e.barycenter*e.weight,i+=e.weight),n.vs=e.vs.concat(n.vs),n.barycenter=r/i,n.weight=i,n.i=Math.min(e.i,n.i),e.merged=!0}function fr(n,e){var r=_e(n,function(c){return m(c,"barycenter")}),i=r.lhs,t=I(r.rhs,function(c){return-c.i}),a=[],o=0,u=0,d=0;i.sort(sr(!!e)),d=sn(a,t,d),s(i,function(c){d+=c.vs.length,a.push(c.vs),o+=c.barycenter*c.weight,u+=c.weight,d=sn(a,t,d)});var f={vs:N(a)};return u&&(f.barycenter=o/u,f.weight=u),f}function sn(n,e,r){for(var i;e.length&&(i=P(e)).i<=r;)e.pop(),n.push(i.vs),r++;return r}function sr(n){return function(e,r){return e.barycenter<r.barycenter?-1:e.barycenter>r.barycenter?1:n?r.i-e.i:e.i-r.i}}function Mn(n,e,r,i){var t=n.children(e),a=n.node(e),o=a?a.borderLeft:void 0,u=a?a.borderRight:void 0,d={};o&&(t=M(t,function(p){return p!==o&&p!==u}));var f=ar(n,t);s(f,function(p){if(n.children(p.v).length){var b=Mn(n,p.v,r,i);d[p.v]=b,m(b,"barycenter")&&hr(p,b)}});var c=or(f,r);cr(c,d);var h=fr(c,i);if(o&&(h.vs=N([o,h.vs,u]),n.predecessors(o).length)){var l=n.node(n.predecessors(o)[0]),v=n.node(n.predecessors(u)[0]);m(h,"barycenter")||(h.barycenter=0,h.weight=0),h.barycenter=(h.barycenter*h.weight+l.order+v.order)/(h.weight+2),h.weight+=2}return h}function cr(n,e){s(n,function(r){r.vs=N(r.vs.map(function(i){return e[i]?e[i].vs:i}))})}function hr(n,e){g(n.barycenter)?(n.barycenter=e.barycenter,n.weight=e.weight):(n.barycenter=(n.barycenter*n.weight+e.barycenter*e.weight)/(n.weight+e.weight),n.weight+=e.weight)}function lr(n){var e=gn(n),r=cn(n,L(1,e+1),"inEdges"),i=cn(n,L(e-1,-1,-1),"outEdges"),t=tr(n);hn(n,t);for(var a=Number.POSITIVE_INFINITY,o,u=0,d=0;d<4;++u,++d){vr(u%2?r:i,u%4>=2),t=V(n);var f=rr(n,t);f<a&&(d=0,o=Kn(t),a=f)}hn(n,o)}function cn(n,e,r){return w(e,function(i){return nr(n,i,r)})}function vr(n,e){var r=new k;s(n,function(i){var t=i.graph().root,a=Mn(i,t,r,e);s(a.vs,function(o,u){i.node(o).order=u}),Ke(i,r,a.vs)})}function hn(n,e){s(e,function(r){s(r,function(i,t){n.node(i).order=t})})}function pr(n){var e=wr(n);s(n.graph().dummyChains,function(r){for(var i=n.node(r),t=i.edgeObj,a=mr(n,e,t.v,t.w),o=a.path,u=a.lca,d=0,f=o[d],c=!0;r!==t.w;){if(i=n.node(r),c){for(;(f=o[d])!==u&&n.node(f).maxRank<i.rank;)d++;f===u&&(c=!1)}if(!c){for(;d<o.length-1&&n.node(f=o[d+1]).minRank<=i.rank;)d++;f=o[d]}n.setParent(r,f),r=n.successors(r)[0]}})}function mr(n,e,r,i){var t=[],a=[],o=Math.min(e[r].low,e[i].low),u=Math.max(e[r].lim,e[i].lim),d,f;d=r;do d=n.parent(d),t.push(d);while(d&&(e[d].low>o||u>e[d].lim));for(f=d,d=i;(d=n.parent(d))!==f;)a.push(d);return{path:t.concat(a.reverse()),lca:f}}function wr(n){var e={},r=0;function i(t){var a=r;s(n.children(t),i),e[t]={low:a,lim:r++}}return s(n.children(),i),e}function br(n,e){var r={};function i(t,a){var o=0,u=0,d=t.length,f=P(a);return s(a,function(c,h){var l=kr(n,c),v=l?n.node(l).order:d;(l||c===f)&&(s(a.slice(u,h+1),function(p){s(n.predecessors(p),function(b){var _=n.node(b),nn=_.order;(nn<o||v<nn)&&!(_.dummy&&n.node(p).dummy)&&In(r,b,p)})}),u=h+1,o=v)}),a}return O(e,i),r}function gr(n,e){var r={};function i(a,o,u,d,f){var c;s(L(o,u),function(h){c=a[h],n.node(c).dummy&&s(n.predecessors(c),function(l){var v=n.node(l);v.dummy&&(v.order<d||v.order>f)&&In(r,l,c)})})}function t(a,o){var u=-1,d,f=0;return s(o,function(c,h){if(n.node(c).dummy==="border"){var l=n.predecessors(c);l.length&&(d=n.node(l[0]).order,i(o,f,h,u,d),f=h,u=d)}i(o,f,o.length,d,a.length)}),o}return O(e,t),r}function kr(n,e){if(n.node(e).dummy)return U(n.predecessors(e),function(r){return n.node(r).dummy})}function In(n,e,r){if(e>r){var i=e;e=r,r=i}var t=n[e];t||(n[e]=t={}),t[r]=!0}function xr(n,e,r){if(e>r){var i=e;e=r,r=i}return m(n[e],r)}function Er(n,e,r,i){var t={},a={},o={};return s(e,function(u){s(u,function(d,f){t[d]=d,a[d]=d,o[d]=f})}),s(e,function(u){var d=-1;s(u,function(f){var c=i(f);if(c.length){c=I(c,function(b){return o[b]});for(var h=(c.length-1)/2,l=Math.floor(h),v=Math.ceil(h);l<=v;++l){var p=c[l];a[f]===f&&d<o[p]&&!xr(r,f,p)&&(a[p]=f,a[f]=t[f]=t[p],d=o[p])}}})}),{root:t,align:a}}function yr(n,e,r,i,t){var a={},o=Lr(n,e,r,t),u=t?"borderLeft":"borderRight";function d(h,l){for(var v=o.nodes(),p=v.pop(),b={};p;)b[p]?h(p):(b[p]=!0,v.push(p),v=v.concat(l(p))),p=v.pop()}function f(h){a[h]=o.inEdges(h).reduce(function(l,v){return Math.max(l,a[v.v]+o.edge(v))},0)}function c(h){var l=o.outEdges(h).reduce(function(p,b){return Math.min(p,a[b.w]-o.edge(b))},Number.POSITIVE_INFINITY),v=n.node(h);l!==Number.POSITIVE_INFINITY&&v.borderType!==u&&(a[h]=Math.max(a[h],l))}return d(f,o.predecessors.bind(o)),d(c,o.successors.bind(o)),s(i,function(h){a[h]=a[r[h]]}),a}function Lr(n,e,r,i){var t=new k,a=n.graph(),o=Tr(a.nodesep,a.edgesep,i);return s(e,function(u){var d;s(u,function(f){var c=r[f];if(t.setNode(c),d){var h=r[d],l=t.edge(h,c);t.setEdge(h,c,Math.max(o(n,f,d),l||0))}d=f})}),t}function Nr(n,e){return H(y(e),function(r){var i=Number.NEGATIVE_INFINITY,t=Number.POSITIVE_INFINITY;return ne(r,function(a,o){var u=Mr(n,o)/2;i=Math.max(a+u,i),t=Math.min(a-u,t)}),i-t})}function Cr(n,e){var r=y(e),i=R(r),t=x(r);s(["u","d"],function(a){s(["l","r"],function(o){var u=a+o,d=n[u],f;if(d!==e){var c=y(d);f=o==="l"?i-R(c):t-x(c),f&&(n[u]=F(d,function(h){return h+f}))}})})}function _r(n,e){return F(n.ul,function(r,i){if(e)return n[e.toLowerCase()][i];var t=I(w(n,i));return(t[1]+t[2])/2})}function Rr(n){var e=V(n),r=j(br(n,e),gr(n,e)),i={},t;s(["u","d"],function(o){t=o==="u"?e:y(e).reverse(),s(["l","r"],function(u){u==="r"&&(t=w(t,function(h){return y(h).reverse()}));var d=(o==="u"?n.predecessors:n.successors).bind(n),f=Er(n,t,r,d),c=yr(n,t,f.root,f.align,u==="r");u==="r"&&(c=F(c,function(h){return-h})),i[o+u]=c})});var a=Nr(n,i);return Cr(i,a),_r(i,n.graph().align)}function Tr(n,e,r){return function(i,t,a){var o=i.node(t),u=i.node(a),d=0,f;if(d+=o.width/2,m(o,"labelpos"))switch(o.labelpos.toLowerCase()){case"l":f=-o.width/2;break;case"r":f=o.width/2;break}if(f&&(d+=r?f:-f),f=0,d+=(o.dummy?e:n)/2,d+=(u.dummy?e:n)/2,d+=u.width/2,m(u,"labelpos"))switch(u.labelpos.toLowerCase()){case"l":f=u.width/2;break;case"r":f=-u.width/2;break}return f&&(d+=r?f:-f),f=0,d}}function Mr(n,e){return n.node(e).width}function Ir(n){n=bn(n),Pr(n),ee(Rr(n),function(e,r){n.node(r).x=e})}function Pr(n){var e=V(n),r=n.graph().ranksep,i=0;s(e,function(t){var a=x(w(t,function(o){return n.node(o).height}));s(t,function(o){n.node(o).y=i+a/2}),i+=a+r})}function oi(n,e){var r=Re;r("layout",function(){var i=r("  buildLayoutGraph",function(){return $r(n)});r("  runLayout",function(){Sr(i,r)}),r("  updateInputGraph",function(){Or(n,i)})})}function Sr(n,e){e("    makeSpaceForEdgeLabels",function(){Wr(n)}),e("    removeSelfEdges",function(){Kr(n)}),e("    acyclic",function(){xe(n)}),e("    nestingGraph.run",function(){He(n)}),e("    rank",function(){ze(bn(n))}),e("    injectEdgeLabelProxies",function(){jr(n)}),e("    removeEmptyRanks",function(){Ce(n)}),e("    nestingGraph.cleanup",function(){Ze(n)}),e("    normalizeRanks",function(){Ne(n)}),e("    assignRankMinMax",function(){zr(n)}),e("    removeEdgeLabelProxies",function(){Xr(n)}),e("    normalize.run",function(){Oe(n)}),e("    parentDummyChains",function(){pr(n)}),e("    addBorderSegments",function(){Te(n)}),e("    order",function(){lr(n)}),e("    insertSelfEdges",function(){ni(n)}),e("    adjustCoordinateSystem",function(){Me(n)}),e("    position",function(){Ir(n)}),e("    positionSelfEdges",function(){ei(n)}),e("    removeBorderNodes",function(){Zr(n)}),e("    normalize.undo",function(){Ve(n)}),e("    fixupEdgeLabelCoords",function(){Jr(n)}),e("    undoCoordinateSystem",function(){Ie(n)}),e("    translateGraph",function(){Ur(n)}),e("    assignNodeIntersects",function(){Hr(n)}),e("    reversePoints",function(){Qr(n)}),e("    acyclic.undo",function(){ye(n)})}function Or(n,e){s(n.nodes(),function(r){var i=n.node(r),t=e.node(r);i&&(i.x=t.x,i.y=t.y,e.children(r).length&&(i.width=t.width,i.height=t.height))}),s(n.edges(),function(r){var i=n.edge(r),t=e.edge(r);i.points=t.points,m(t,"x")&&(i.x=t.x,i.y=t.y)}),n.graph().width=e.graph().width,n.graph().height=e.graph().height}var Fr=["nodesep","edgesep","ranksep","marginx","marginy"],Vr={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},Ar=["acyclicer","ranker","rankdir","align"],Br=["width","height"],Gr={width:0,height:0},Yr=["minlen","weight","width","height","labeloffset"],Dr={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},qr=["labelpos"];function $r(n){var e=new k({multigraph:!0,compound:!0}),r=$(n.graph());return e.setGraph(j({},Vr,q(r,Fr),S(r,Ar))),s(n.nodes(),function(i){var t=$(n.node(i));e.setNode(i,Yn(q(t,Br),Gr)),e.setParent(i,n.parent(i))}),s(n.edges(),function(i){var t=$(n.edge(i));e.setEdge(i,j({},Dr,q(t,Yr),S(t,qr)))}),e}function Wr(n){var e=n.graph();e.ranksep/=2,s(n.edges(),function(r){var i=n.edge(r);i.minlen*=2,i.labelpos.toLowerCase()!=="c"&&(e.rankdir==="TB"||e.rankdir==="BT"?i.width+=i.labeloffset:i.height+=i.labeloffset)})}function jr(n){s(n.edges(),function(e){var r=n.edge(e);if(r.width&&r.height){var i=n.node(e.v),t=n.node(e.w),a={rank:(t.rank-i.rank)/2+i.rank,e};C(n,"edge-proxy",a,"_ep")}})}function zr(n){var e=0;s(n.nodes(),function(r){var i=n.node(r);i.borderTop&&(i.minRank=n.node(i.borderTop).rank,i.maxRank=n.node(i.borderBottom).rank,e=x(e,i.maxRank))}),n.graph().maxRank=e}function Xr(n){s(n.nodes(),function(e){var r=n.node(e);r.dummy==="edge-proxy"&&(n.edge(r.e).labelRank=r.rank,n.removeNode(e))})}function Ur(n){var e=Number.POSITIVE_INFINITY,r=0,i=Number.POSITIVE_INFINITY,t=0,a=n.graph(),o=a.marginx||0,u=a.marginy||0;function d(f){var c=f.x,h=f.y,l=f.width,v=f.height;e=Math.min(e,c-l/2),r=Math.max(r,c+l/2),i=Math.min(i,h-v/2),t=Math.max(t,h+v/2)}s(n.nodes(),function(f){d(n.node(f))}),s(n.edges(),function(f){var c=n.edge(f);m(c,"x")&&d(c)}),e-=o,i-=u,s(n.nodes(),function(f){var c=n.node(f);c.x-=e,c.y-=i}),s(n.edges(),function(f){var c=n.edge(f);s(c.points,function(h){h.x-=e,h.y-=i}),m(c,"x")&&(c.x-=e),m(c,"y")&&(c.y-=i)}),a.width=r-e+o,a.height=t-i+u}function Hr(n){s(n.edges(),function(e){var r=n.edge(e),i=n.node(e.v),t=n.node(e.w),a,o;r.points?(a=r.points[0],o=r.points[r.points.length-1]):(r.points=[],a=t,o=i),r.points.unshift(tn(i,a)),r.points.push(tn(t,o))})}function Jr(n){s(n.edges(),function(e){var r=n.edge(e);if(m(r,"x"))switch((r.labelpos==="l"||r.labelpos==="r")&&(r.width-=r.labeloffset),r.labelpos){case"l":r.x-=r.width/2+r.labeloffset;break;case"r":r.x+=r.width/2+r.labeloffset;break}})}function Qr(n){s(n.edges(),function(e){var r=n.edge(e);r.reversed&&r.points.reverse()})}function Zr(n){s(n.nodes(),function(e){if(n.children(e).length){var r=n.node(e),i=n.node(r.borderTop),t=n.node(r.borderBottom),a=n.node(P(r.borderLeft)),o=n.node(P(r.borderRight));r.width=Math.abs(o.x-a.x),r.height=Math.abs(t.y-i.y),r.x=a.x+r.width/2,r.y=i.y+r.height/2}}),s(n.nodes(),function(e){n.node(e).dummy==="border"&&n.removeNode(e)})}function Kr(n){s(n.edges(),function(e){if(e.v===e.w){var r=n.node(e.v);r.selfEdges||(r.selfEdges=[]),r.selfEdges.push({e,label:n.edge(e)}),n.removeEdge(e)}})}function ni(n){var e=V(n);s(e,function(r){var i=0;s(r,function(t,a){var o=n.node(t);o.order=a+i,s(o.selfEdges,function(u){C(n,"selfedge",{width:u.label.width,height:u.label.height,rank:o.rank,order:a+ ++i,e:u.e,label:u.label},"_se")}),delete o.selfEdges})})}function ei(n){s(n.nodes(),function(e){var r=n.node(e);if(r.dummy==="selfedge"){var i=n.node(r.e.v),t=i.x+i.width/2,a=i.y,o=r.x-t,u=i.height/2;n.setEdge(r.e,r.label),n.removeNode(e),r.label.points=[{x:t+2*o/3,y:a-u},{x:t+5*o/6,y:a-u},{x:t+o,y:a},{x:t+5*o/6,y:a+u},{x:t+2*o/3,y:a+u}],r.label.x=r.x,r.label.y=r.y}})}function q(n,e){return F(S(n,e),Number)}function $(n){var e={};return s(n,function(r,i){e[i.toLowerCase()]=r}),e}export{oi as l};
