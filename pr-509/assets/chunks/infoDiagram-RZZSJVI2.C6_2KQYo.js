import{_ as e,l as o,H as i,k as n,I as p}from"../app.DjgDXPNa.js";import{p as g}from"./gitGraph-YCYPL57B.DqclEUbc.js";import"./framework.DnAtUPNH.js";import"./theme.Dxl3g7Cx.js";import"./baseUniq.DzppEoaZ.js";import"./basePickBy.DKHfbjfa.js";import"./clone.7TJEh1E2.js";var m={parse:e(async r=>{const a=await g("info",r);o.debug(a)},"parse")},v={version:p},d=e(()=>v.version,"getVersion"),c={getVersion:d},l=e((r,a,s)=>{o.debug(`rendering info diagram
`+r);const t=i(a);n(t,100,400,!0),t.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${s}`)},"draw"),f={draw:l},D={parser:m,db:c,renderer:f};export{D as diagram};
