import{_ as n,$ as q,o as u,c as r,k as l,a as s,O as c,X as d}from"./chunks/framework.adc83686.js";const h="/docs-preview/pr-339/assets/faucet.a7295624.png",m="/docs-preview/pr-339/assets/keplr.7151e633.png",p={name:"app",methods:{async addNetwork(){try{const t=await q(()=>import("./chunks/rosm.5c52e76d.js"),[]);console.log("got back settings",t);try{await window.keplr.enable(t.chainId),alert(t.chainId+" already added")}catch{console.log("Unable to connect to wallet natively, so trying experimental chain");try{await window.keplr.experimentalSuggestChain(t),await window.keplr.enable(t.chainId)}catch(e){console.log("and yet there is a problem in trying to do that too",e)}}}catch(t){if(t instanceof SyntaxError)alert("There was a syntax error. Please correct it and try again: "+t.message);else throw t}}}},_=l("img",{src:m,alt:"",width:"20",height:"20"},null,-1),C=[_];function A(t,o,e,g,E,a){return u(),r("button",{onClick:o[0]||(o[0]=(...i)=>a.addNetwork&&a.addNetwork(...i))},C)}const B=n(p,[["render",A]]),k=d("",6),f=JSON.parse('{"title":"Cosmwasm Testnet","description":"This page provides details about Rollkit testnets.","frontmatter":{"description":"This page provides details about Rollkit testnets.","head":[["meta",{"name":"og:title","content":"Cosmwasm Testnet | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"networks/cosmwasm-testnet.md","filePath":"networks/cosmwasm-testnet.md","lastUpdated":1712925444000}'),w={name:"networks/cosmwasm-testnet.md"},F=Object.assign(w,{setup(t){return(o,e)=>(u(),r("div",null,[k,l("p",null,[s("Click "),c(B),s(" to add Rosm testnet to your Keplr wallet")])]))}});export{f as __pageData,F as default};