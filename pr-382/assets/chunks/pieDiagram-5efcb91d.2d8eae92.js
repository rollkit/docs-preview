import{ap as it,c as B,s as ut,g as ft,v as pt,x as yt,a as dt,b as gt,m as mt,j as _t,l as J,z as vt,h as nt,i as bt,aq as xt}from"../app.ca739f29.js";import{o as kt}from"./ordinal.b935e931.js";import{a as St}from"./array.9f3ba611.js";import{c as M}from"./path.53f90ab3.js";import{a as lt}from"./arc.3fea9752.js";import"./framework.25b49d10.js";import"./theme.22dea14e.js";import"./init.77b53fdd.js";function wt(t,u){return u<t?-1:u>t?1:u>=t?0:NaN}function At(t){return t}function Et(){var t=At,u=wt,_=null,b=M(0),k=M(it),S=M(0);function c(a){var f,h=(a=St(a)).length,w,L,N=0,v=new Array(h),A=new Array(h),T=+b.apply(this,arguments),D=Math.min(it,Math.max(-it,k.apply(this,arguments)-T)),W,C=Math.min(Math.abs(D)/h,S.apply(this,arguments)),I=C*(D<0?-1:1),d;for(f=0;f<h;++f)(d=A[v[f]=f]=+t(a[f],f,a))>0&&(N+=d);for(u!=null?v.sort(function(E,g){return u(A[E],A[g])}):_!=null&&v.sort(function(E,g){return _(a[E],a[g])}),f=0,L=N?(D-h*I)/N:0;f<h;++f,T=W)w=v[f],d=A[w],W=T+(d>0?d*L:0)+I,A[w]={data:a[w],index:f,value:d,startAngle:T,endAngle:W,padAngle:C};return A}return c.value=function(a){return arguments.length?(t=typeof a=="function"?a:M(+a),c):t},c.sortValues=function(a){return arguments.length?(u=a,_=null,c):u},c.sort=function(a){return arguments.length?(_=a,u=null,c):_},c.startAngle=function(a){return arguments.length?(b=typeof a=="function"?a:M(+a),c):b},c.endAngle=function(a){return arguments.length?(k=typeof a=="function"?a:M(+a),c):k},c.padAngle=function(a){return arguments.length?(S=typeof a=="function"?a:M(+a),c):S},c}var st=function(){var t=function(g,e,i,r){for(i=i||{},r=g.length;r--;i[g[r]]=e);return i},u=[1,4],_=[1,5],b=[1,6],k=[1,7],S=[1,9],c=[1,11,13,15,17,19,20,26,27,28,29],a=[2,5],f=[1,6,11,13,15,17,19,20,26,27,28,29],h=[26,27,28],w=[2,8],L=[1,18],N=[1,19],v=[1,20],A=[1,21],T=[1,22],D=[1,23],W=[1,28],C=[6,26,27,28,29],I={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,directive:5,PIE:6,document:7,showData:8,line:9,statement:10,txt:11,value:12,title:13,title_value:14,acc_title:15,acc_title_value:16,acc_descr:17,acc_descr_value:18,acc_descr_multiline_value:19,section:20,openDirective:21,typeDirective:22,closeDirective:23,":":24,argDirective:25,NEWLINE:26,";":27,EOF:28,open_directive:29,type_directive:30,arg_directive:31,close_directive:32,$accept:0,$end:1},terminals_:{2:"error",6:"PIE",8:"showData",11:"txt",12:"value",13:"title",14:"title_value",15:"acc_title",16:"acc_title_value",17:"acc_descr",18:"acc_descr_value",19:"acc_descr_multiline_value",20:"section",24:":",26:"NEWLINE",27:";",28:"EOF",29:"open_directive",30:"type_directive",31:"arg_directive",32:"close_directive"},productions_:[0,[3,2],[3,2],[3,2],[3,3],[7,0],[7,2],[9,2],[10,0],[10,2],[10,2],[10,2],[10,2],[10,1],[10,1],[10,1],[5,3],[5,5],[4,1],[4,1],[4,1],[21,1],[22,1],[25,1],[23,1]],performAction:function(e,i,r,n,l,s,o){var p=s.length-1;switch(l){case 4:n.setShowData(!0);break;case 7:this.$=s[p-1];break;case 9:n.addSection(s[p-1],n.cleanupValue(s[p]));break;case 10:this.$=s[p].trim(),n.setDiagramTitle(this.$);break;case 11:this.$=s[p].trim(),n.setAccTitle(this.$);break;case 12:case 13:this.$=s[p].trim(),n.setAccDescription(this.$);break;case 14:n.addSection(s[p].substr(8)),this.$=s[p].substr(8);break;case 21:n.parseDirective("%%{","open_directive");break;case 22:n.parseDirective(s[p],"type_directive");break;case 23:s[p]=s[p].trim().replace(/'/g,'"'),n.parseDirective(s[p],"arg_directive");break;case 24:n.parseDirective("}%%","close_directive","pie");break}},table:[{3:1,4:2,5:3,6:u,21:8,26:_,27:b,28:k,29:S},{1:[3]},{3:10,4:2,5:3,6:u,21:8,26:_,27:b,28:k,29:S},{3:11,4:2,5:3,6:u,21:8,26:_,27:b,28:k,29:S},t(c,a,{7:12,8:[1,13]}),t(f,[2,18]),t(f,[2,19]),t(f,[2,20]),{22:14,30:[1,15]},{30:[2,21]},{1:[2,1]},{1:[2,2]},t(h,w,{21:8,9:16,10:17,5:24,1:[2,3],11:L,13:N,15:v,17:A,19:T,20:D,29:S}),t(c,a,{7:25}),{23:26,24:[1,27],32:W},t([24,32],[2,22]),t(c,[2,6]),{4:29,26:_,27:b,28:k},{12:[1,30]},{14:[1,31]},{16:[1,32]},{18:[1,33]},t(h,[2,13]),t(h,[2,14]),t(h,[2,15]),t(h,w,{21:8,9:16,10:17,5:24,1:[2,4],11:L,13:N,15:v,17:A,19:T,20:D,29:S}),t(C,[2,16]),{25:34,31:[1,35]},t(C,[2,24]),t(c,[2,7]),t(h,[2,9]),t(h,[2,10]),t(h,[2,11]),t(h,[2,12]),{23:36,32:W},{32:[2,23]},t(C,[2,17])],defaultActions:{9:[2,21],10:[2,1],11:[2,2],35:[2,23]},parseError:function(e,i){if(i.recoverable)this.trace(e);else{var r=new Error(e);throw r.hash=i,r}},parse:function(e){var i=this,r=[0],n=[],l=[null],s=[],o=this.table,p="",F=0,U=0,Q=2,q=1,ct=s.slice.call(arguments,1),y=Object.create(this.lexer),j={yy:{}};for(var X in this.yy)Object.prototype.hasOwnProperty.call(this.yy,X)&&(j.yy[X]=this.yy[X]);y.setInput(e,j.yy),j.yy.lexer=y,j.yy.parser=this,typeof y.yylloc>"u"&&(y.yylloc={});var Z=y.yylloc;s.push(Z);var ot=y.options&&y.options.ranges;typeof j.yy.parseError=="function"?this.parseError=j.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ht(){var O;return O=n.pop()||y.lex()||q,typeof O!="number"&&(O instanceof Array&&(n=O,O=n.pop()),O=i.symbols_[O]||O),O}for(var m,z,x,tt,R={},G,V,at,H;;){if(z=r[r.length-1],this.defaultActions[z]?x=this.defaultActions[z]:((m===null||typeof m>"u")&&(m=ht()),x=o[z]&&o[z][m]),typeof x>"u"||!x.length||!x[0]){var et="";H=[];for(G in o[z])this.terminals_[G]&&G>Q&&H.push("'"+this.terminals_[G]+"'");y.showPosition?et="Parse error on line "+(F+1)+`:
`+y.showPosition()+`
Expecting `+H.join(", ")+", got '"+(this.terminals_[m]||m)+"'":et="Parse error on line "+(F+1)+": Unexpected "+(m==q?"end of input":"'"+(this.terminals_[m]||m)+"'"),this.parseError(et,{text:y.match,token:this.terminals_[m]||m,line:y.yylineno,loc:Z,expected:H})}if(x[0]instanceof Array&&x.length>1)throw new Error("Parse Error: multiple actions possible at state: "+z+", token: "+m);switch(x[0]){case 1:r.push(m),l.push(y.yytext),s.push(y.yylloc),r.push(x[1]),m=null,U=y.yyleng,p=y.yytext,F=y.yylineno,Z=y.yylloc;break;case 2:if(V=this.productions_[x[1]][1],R.$=l[l.length-V],R._$={first_line:s[s.length-(V||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(V||1)].first_column,last_column:s[s.length-1].last_column},ot&&(R._$.range=[s[s.length-(V||1)].range[0],s[s.length-1].range[1]]),tt=this.performAction.apply(R,[p,U,F,j.yy,x[1],l,s].concat(ct)),typeof tt<"u")return tt;V&&(r=r.slice(0,-1*V*2),l=l.slice(0,-1*V),s=s.slice(0,-1*V)),r.push(this.productions_[x[1]][0]),l.push(R.$),s.push(R._$),at=o[r[r.length-2]][r[r.length-1]],r.push(at);break;case 3:return!0}}return!0}},d=function(){var g={EOF:1,parseError:function(i,r){if(this.yy.parser)this.yy.parser.parseError(i,r);else throw new Error(i)},setInput:function(e,i){return this.yy=i||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var e=this._input[0];this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e;var i=e.match(/(?:\r\n?|\n).*/g);return i?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},unput:function(e){var i=e.length,r=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-i),this.offset-=i;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),r.length-1&&(this.yylineno-=r.length-1);var l=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===n.length?this.yylloc.first_column:0)+n[n.length-r.length].length-r[0].length:this.yylloc.first_column-i},this.options.ranges&&(this.yylloc.range=[l[0],l[0]+this.yyleng-i]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput(),i=new Array(e.length+1).join("-");return e+this.upcomingInput()+`
`+i+"^"},test_match:function(e,i){var r,n,l;if(this.options.backtrack_lexer&&(l={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(l.yylloc.range=this.yylloc.range.slice(0))),n=e[0].match(/(?:\r\n?|\n).*/g),n&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],r=this.performAction.call(this,this.yy,this,i,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),r)return r;if(this._backtrack){for(var s in l)this[s]=l[s];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var e,i,r,n;this._more||(this.yytext="",this.match="");for(var l=this._currentRules(),s=0;s<l.length;s++)if(r=this._input.match(this.rules[l[s]]),r&&(!i||r[0].length>i[0].length)){if(i=r,n=s,this.options.backtrack_lexer){if(e=this.test_match(r,l[s]),e!==!1)return e;if(this._backtrack){i=!1;continue}else return!1}else if(!this.options.flex)break}return i?(e=this.test_match(i,l[n]),e!==!1?e:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var i=this.next();return i||this.lex()},begin:function(i){this.conditionStack.push(i)},popState:function(){var i=this.conditionStack.length-1;return i>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(i){return i=this.conditionStack.length-1-Math.abs(i||0),i>=0?this.conditionStack[i]:"INITIAL"},pushState:function(i){this.begin(i)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(i,r,n,l){switch(n){case 0:return this.begin("open_directive"),29;case 1:return this.begin("type_directive"),30;case 2:return this.popState(),this.begin("arg_directive"),24;case 3:return this.popState(),this.popState(),32;case 4:return 31;case 5:break;case 6:break;case 7:return 26;case 8:break;case 9:break;case 10:return this.begin("title"),13;case 11:return this.popState(),"title_value";case 12:return this.begin("acc_title"),15;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),17;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:this.begin("string");break;case 20:this.popState();break;case 21:return"txt";case 22:return 6;case 23:return 8;case 24:return"value";case 25:return 28}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:[\s]+)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:pie\b)/i,/^(?:showData\b)/i,/^(?::[\s]*[\d]+(?:\.[\d]+)?)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},title:{rules:[11],inclusive:!1},string:{rules:[20,21],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,12,14,16,19,22,23,24,25],inclusive:!0}}};return g}();I.lexer=d;function E(){this.yy={}}return E.prototype=I,I.Parser=E,new E}();st.parser=st;const Dt=st;let K={},rt=!1;const $t=function(t,u,_){mt.parseDirective(this,t,u,_)},Tt=function(t,u){t=_t.sanitizeText(t,B()),K[t]===void 0&&(K[t]=u,J.debug("Added new section :",t))},It=()=>K,Vt=function(t){rt=t},Ot=function(){return rt},Pt=function(t){return t.substring(0,1)===":"&&(t=t.substring(1).trim()),Number(t.trim())},Lt=function(){K={},rt=!1,vt()},Nt={parseDirective:$t,getConfig:()=>B().pie,addSection:Tt,getSections:It,cleanupValue:Pt,clear:Lt,setAccTitle:ut,getAccTitle:ft,setDiagramTitle:pt,getDiagramTitle:yt,setShowData:Vt,getShowData:Ot,getAccDescription:dt,setAccDescription:gt},Wt=t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,Ct=Wt;let $=B(),P;const Y=450,Ft=(t,u,_,b)=>{var k;try{$=B(),J.debug(`Rendering info diagram
`+t);const d=B().securityLevel;let E;d==="sandbox"&&(E=nt("#i"+u));const g=d==="sandbox"?nt(E.nodes()[0].contentDocument.body):nt("body"),i=(d==="sandbox"?E.nodes()[0].contentDocument:document).getElementById(u);P=i.parentElement.offsetWidth,P===void 0&&(P=1200),$.useWidth!==void 0&&(P=$.useWidth),$.pie.useWidth!==void 0&&(P=$.pie.useWidth);const r=g.select("#"+u);bt(r,Y,P,$.pie.useMaxWidth),i.setAttribute("viewBox","0 0 "+P+" "+Y);var S=40,c=18,a=4,f=Math.min(P,Y)/2-S,h=r.append("g").attr("transform","translate("+P/2+","+Y/2+")"),w=b.db.getSections(),L=0;Object.keys(w).forEach(function(o){L+=w[o]});const n=$.themeVariables;var N=[n.pie1,n.pie2,n.pie3,n.pie4,n.pie5,n.pie6,n.pie7,n.pie8,n.pie9,n.pie10,n.pie11,n.pie12];const l=((k=$.pie)==null?void 0:k.textPosition)??.75;let[s]=xt(n.pieOuterStrokeWidth);s??(s=2);var v=kt().range(N),A=Object.entries(w).map(function(o,p){return{order:p,name:o[0],value:o[1]}}),T=Et().value(function(o){return o.value}).sort(function(o,p){return o.order-p.order}),D=T(A),W=lt().innerRadius(0).outerRadius(f),C=lt().innerRadius(f*l).outerRadius(f*l);h.append("circle").attr("cx",0).attr("cy",0).attr("r",f+s/2).attr("class","pieOuterCircle"),h.selectAll("mySlices").data(D).enter().append("path").attr("d",W).attr("fill",function(o){return v(o.data.name)}).attr("class","pieCircle"),h.selectAll("mySlices").data(D).enter().append("text").text(function(o){return(o.data.value/L*100).toFixed(0)+"%"}).attr("transform",function(o){return"translate("+C.centroid(o)+")"}).style("text-anchor","middle").attr("class","slice"),h.append("text").text(b.db.getDiagramTitle()).attr("x",0).attr("y",-(Y-50)/2).attr("class","pieTitleText");var I=h.selectAll(".legend").data(v.domain()).enter().append("g").attr("class","legend").attr("transform",function(o,p){const F=c+a,U=F*v.domain().length/2,Q=12*c,q=p*F-U;return"translate("+Q+","+q+")"});I.append("rect").attr("width",c).attr("height",c).style("fill",v).style("stroke",v),I.data(D).append("text").attr("x",c+a).attr("y",c-a).text(function(o){return b.db.getShowData()||$.showData||$.pie.showData?o.data.name+" ["+o.data.value+"]":o.data.name})}catch(d){J.error("Error while rendering info diagram"),J.error(d)}},jt={draw:Ft},Ht={parser:Dt,db:Nt,renderer:jt,styles:Ct};export{Ht as diagram};
