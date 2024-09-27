import{a as y}from"./chunk-YWFND7JV.sSZmv1lW.js";import{_ as f,d as g,A as W,D as C,j as H,l as m,ae as R,u as w,af as X,a2 as Y,a8 as U}from"../app.D3Lw33GY.js";var O=f((r,t,a,h)=>{t.forEach(o=>{J[o](r,a,h)})},"insertMarkers"),Z=f((r,t,a)=>{m.trace("Making markers for ",a),r.append("defs").append("marker").attr("id",a+"_"+t+"-extensionStart").attr("class","marker extension "+t).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),r.append("defs").append("marker").attr("id",a+"_"+t+"-extensionEnd").attr("class","marker extension "+t).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},"extension"),A=f((r,t,a)=>{r.append("defs").append("marker").attr("id",a+"_"+t+"-compositionStart").attr("class","marker composition "+t).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),r.append("defs").append("marker").attr("id",a+"_"+t+"-compositionEnd").attr("class","marker composition "+t).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},"composition"),I=f((r,t,a)=>{r.append("defs").append("marker").attr("id",a+"_"+t+"-aggregationStart").attr("class","marker aggregation "+t).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),r.append("defs").append("marker").attr("id",a+"_"+t+"-aggregationEnd").attr("class","marker aggregation "+t).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},"aggregation"),N=f((r,t,a)=>{r.append("defs").append("marker").attr("id",a+"_"+t+"-dependencyStart").attr("class","marker dependency "+t).attr("refX",6).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),r.append("defs").append("marker").attr("id",a+"_"+t+"-dependencyEnd").attr("class","marker dependency "+t).attr("refX",13).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},"dependency"),q=f((r,t,a)=>{r.append("defs").append("marker").attr("id",a+"_"+t+"-lollipopStart").attr("class","marker lollipop "+t).attr("refX",13).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6),r.append("defs").append("marker").attr("id",a+"_"+t+"-lollipopEnd").attr("class","marker lollipop "+t).attr("refX",1).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6)},"lollipop"),Q=f((r,t,a)=>{r.append("marker").attr("id",a+"_"+t+"-pointEnd").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",6).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),r.append("marker").attr("id",a+"_"+t+"-pointStart").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",4.5).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},"point"),z=f((r,t,a)=>{r.append("marker").attr("id",a+"_"+t+"-circleEnd").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),r.append("marker").attr("id",a+"_"+t+"-circleStart").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},"circle"),F=f((r,t,a)=>{r.append("marker").attr("id",a+"_"+t+"-crossEnd").attr("class","marker cross "+t).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),r.append("marker").attr("id",a+"_"+t+"-crossStart").attr("class","marker cross "+t).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},"cross"),G=f((r,t,a)=>{r.append("defs").append("marker").attr("id",a+"_"+t+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},"barb"),J={extension:Z,composition:A,aggregation:I,dependency:N,lollipop:q,point:Q,circle:z,cross:F,barb:G},at=O,V=f((r,t,a,h,o)=>{t.arrowTypeStart&&E(r,"start",t.arrowTypeStart,a,h,o),t.arrowTypeEnd&&E(r,"end",t.arrowTypeEnd,a,h,o)},"addEdgeMarkers"),j={arrow_cross:"cross",arrow_point:"point",arrow_barb:"barb",arrow_circle:"circle",aggregation:"aggregation",extension:"extension",composition:"composition",dependency:"dependency",lollipop:"lollipop"},E=f((r,t,a,h,o,c)=>{const n=j[a];if(!n){m.warn(`Unknown arrow type: ${a}`);return}const e=t==="start"?"Start":"End";r.attr(`marker-${t}`,`url(${h}#${o}_${c}-${n}${e})`)},"addEdgeMarker"),v={},k={},rt=f(()=>{v={},k={}},"clear"),et=f((r,t)=>{const a=g(),h=W(a.flowchart.htmlLabels),o=t.labelType==="markdown"?C(r,t.label,{style:t.labelStyle,useHtmlLabels:h,addSvgBackground:!0},a):y(t.label,t.labelStyle),c=r.insert("g").attr("class","edgeLabel"),n=c.insert("g").attr("class","label");n.node().appendChild(o);let e=o.getBBox();if(h){const i=o.children[0],l=H(o);e=i.getBoundingClientRect(),l.attr("width",e.width),l.attr("height",e.height)}n.attr("transform","translate("+-e.width/2+", "+-e.height/2+")"),v[t.id]=c,t.width=e.width,t.height=e.height;let s;if(t.startLabelLeft){const i=y(t.startLabelLeft,t.labelStyle),l=r.insert("g").attr("class","edgeTerminals"),d=l.insert("g").attr("class","inner");s=d.node().appendChild(i);const p=i.getBBox();d.attr("transform","translate("+-p.width/2+", "+-p.height/2+")"),k[t.id]||(k[t.id]={}),k[t.id].startLeft=l,u(s,t.startLabelLeft)}if(t.startLabelRight){const i=y(t.startLabelRight,t.labelStyle),l=r.insert("g").attr("class","edgeTerminals"),d=l.insert("g").attr("class","inner");s=l.node().appendChild(i),d.node().appendChild(i);const p=i.getBBox();d.attr("transform","translate("+-p.width/2+", "+-p.height/2+")"),k[t.id]||(k[t.id]={}),k[t.id].startRight=l,u(s,t.startLabelRight)}if(t.endLabelLeft){const i=y(t.endLabelLeft,t.labelStyle),l=r.insert("g").attr("class","edgeTerminals"),d=l.insert("g").attr("class","inner");s=d.node().appendChild(i);const p=i.getBBox();d.attr("transform","translate("+-p.width/2+", "+-p.height/2+")"),l.node().appendChild(i),k[t.id]||(k[t.id]={}),k[t.id].endLeft=l,u(s,t.endLabelLeft)}if(t.endLabelRight){const i=y(t.endLabelRight,t.labelStyle),l=r.insert("g").attr("class","edgeTerminals"),d=l.insert("g").attr("class","inner");s=d.node().appendChild(i);const p=i.getBBox();d.attr("transform","translate("+-p.width/2+", "+-p.height/2+")"),l.node().appendChild(i),k[t.id]||(k[t.id]={}),k[t.id].endRight=l,u(s,t.endLabelRight)}return o},"insertEdgeLabel");function u(r,t){g().flowchart.htmlLabels&&r&&(r.style.width=t.length*9+"px",r.style.height="12px")}f(u,"setTerminalWidth");var st=f((r,t)=>{m.debug("Moving label abc88 ",r.id,r.label,v[r.id],t);let a=t.updatedPath?t.updatedPath:t.originalPath;const h=g(),{subGraphTitleTotalMargin:o}=R(h);if(r.label){const c=v[r.id];let n=r.x,e=r.y;if(a){const s=w.calcLabelPosition(a);m.debug("Moving label "+r.label+" from (",n,",",e,") to (",s.x,",",s.y,") abc88"),t.updatedPath&&(n=s.x,e=s.y)}c.attr("transform",`translate(${n}, ${e+o/2})`)}if(r.startLabelLeft){const c=k[r.id].startLeft;let n=r.x,e=r.y;if(a){const s=w.calcTerminalLabelPosition(r.arrowTypeStart?10:0,"start_left",a);n=s.x,e=s.y}c.attr("transform",`translate(${n}, ${e})`)}if(r.startLabelRight){const c=k[r.id].startRight;let n=r.x,e=r.y;if(a){const s=w.calcTerminalLabelPosition(r.arrowTypeStart?10:0,"start_right",a);n=s.x,e=s.y}c.attr("transform",`translate(${n}, ${e})`)}if(r.endLabelLeft){const c=k[r.id].endLeft;let n=r.x,e=r.y;if(a){const s=w.calcTerminalLabelPosition(r.arrowTypeEnd?10:0,"end_left",a);n=s.x,e=s.y}c.attr("transform",`translate(${n}, ${e})`)}if(r.endLabelRight){const c=k[r.id].endRight;let n=r.x,e=r.y;if(a){const s=w.calcTerminalLabelPosition(r.arrowTypeEnd?10:0,"end_right",a);n=s.x,e=s.y}c.attr("transform",`translate(${n}, ${e})`)}},"positionEdgeLabel"),K=f((r,t)=>{const a=r.x,h=r.y,o=Math.abs(t.x-a),c=Math.abs(t.y-h),n=r.width/2,e=r.height/2;return o>=n||c>=e},"outsideNode"),D=f((r,t,a)=>{m.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(a)}
  node        : x:${r.x} y:${r.y} w:${r.width} h:${r.height}`);const h=r.x,o=r.y,c=Math.abs(h-a.x),n=r.width/2;let e=a.x<t.x?n-c:n+c;const s=r.height/2,i=Math.abs(t.y-a.y),l=Math.abs(t.x-a.x);if(Math.abs(o-t.y)*n>Math.abs(h-t.x)*s){let d=a.y<t.y?t.y-s-o:o-s-t.y;e=l*d/i;const p={x:a.x<t.x?a.x+e:a.x-l+e,y:a.y<t.y?a.y+i-d:a.y-i+d};return e===0&&(p.x=t.x,p.y=t.y),l===0&&(p.x=t.x),i===0&&(p.y=t.y),m.debug(`abc89 topp/bott calc, Q ${i}, q ${d}, R ${l}, r ${e}`,p),p}else{a.x<t.x?e=t.x-n-h:e=h-n-t.x;let d=i*e/l,p=a.x<t.x?a.x+l-e:a.x-l+e,x=a.y<t.y?a.y+d:a.y-d;return m.debug(`sides calc abc89, Q ${i}, q ${d}, R ${l}, r ${e}`,{_x:p,_y:x}),e===0&&(p=t.x,x=t.y),l===0&&(p=t.x),i===0&&(x=t.y),{x:p,y:x}}},"intersection"),_=f((r,t)=>{m.debug("abc88 cutPathAtIntersect",r,t);let a=[],h=r[0],o=!1;return r.forEach(c=>{if(!K(t,c)&&!o){const n=D(t,h,c);let e=!1;a.forEach(s=>{e=e||s.x===n.x&&s.y===n.y}),a.some(s=>s.x===n.x&&s.y===n.y)||a.push(n),o=!0}else h=c,o||a.push(c)}),a},"cutPathAtIntersect"),nt=f(function(r,t,a,h,o,c,n){let e=a.points;m.debug("abc88 InsertEdge: edge=",a,"e=",t);let s=!1;const i=c.node(t.v);var l=c.node(t.w);l!=null&&l.intersect&&(i!=null&&i.intersect)&&(e=e.slice(1,a.points.length-1),e.unshift(i.intersect(e[0])),e.push(l.intersect(e[e.length-1]))),a.toCluster&&(m.debug("to cluster abc88",h[a.toCluster]),e=_(a.points,h[a.toCluster].node),s=!0),a.fromCluster&&(m.debug("from cluster abc88",h[a.fromCluster]),e=_(e.reverse(),h[a.fromCluster].node).reverse(),s=!0);const d=e.filter(T=>!Number.isNaN(T.y));let p=U;a.curve&&(o==="graph"||o==="flowchart")&&(p=a.curve);const{x,y:$}=X(a),S=Y().x(x).y($).curve(p);let b;switch(a.thickness){case"normal":b="edge-thickness-normal";break;case"thick":b="edge-thickness-thick";break;case"invisible":b="edge-thickness-thick";break;default:b=""}switch(a.pattern){case"solid":b+=" edge-pattern-solid";break;case"dotted":b+=" edge-pattern-dotted";break;case"dashed":b+=" edge-pattern-dashed";break}const B=r.append("path").attr("d",S(d)).attr("id",a.id).attr("class"," "+b+(a.classes?" "+a.classes:"")).attr("style",a.style);let L="";(g().flowchart.arrowMarkerAbsolute||g().state.arrowMarkerAbsolute)&&(L=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,L=L.replace(/\(/g,"\\("),L=L.replace(/\)/g,"\\)")),V(B,a,L,n,o);let M={};return s&&(M.updatedPath=e),M.originalPath=a.points,M},"insertEdge");export{nt as a,rt as c,et as i,at as m,st as p};
