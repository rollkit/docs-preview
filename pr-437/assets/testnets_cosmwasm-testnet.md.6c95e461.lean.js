import{_ as r,$ as D,o as p,c as t,k as e,a as l,O as F,X as y}from"./chunks/framework.49d79f81.js";const C="/docs-preview/pr-437/assets/faucet.a7295624.png",A="/docs-preview/pr-437/assets/keplr.7151e633.png",i={name:"app",methods:{async addNetwork(){try{const s=await D(()=>import("./chunks/rosm.edd5b616.js"),[]);console.log("got back settings",s);try{await window.keplr.enable(s.chainId),alert(s.chainId+" already added")}catch{console.log("Unable to connect to wallet natively, so trying experimental chain");try{await window.keplr.experimentalSuggestChain(s),await window.keplr.enable(s.chainId)}catch(n){console.log("and yet there is a problem in trying to do that too",n)}}}catch(s){if(s instanceof SyntaxError)alert("There was a syntax error. Please correct it and try again: "+s.message);else throw s}}}},u=e("img",{src:A,alt:"",width:"20",height:"20"},null,-1),q=[u];function d(s,a,n,_,E,o){return p(),t("button",{onClick:a[0]||(a[0]=(...c)=>o.addNetwork&&o.addNetwork(...c))},q)}const h=r(i,[["render",d]]),m=y("",8),g=JSON.parse('{"title":"CosmWasm Testnet","description":"This page provides details about Rollkit testnets.","frontmatter":{"description":"This page provides details about Rollkit testnets.","head":[["meta",{"name":"og:title","content":"CosmWasm Testnet | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"testnets/cosmwasm-testnet.md","filePath":"testnets/cosmwasm-testnet.md","lastUpdated":1724752639000}'),B={name:"testnets/cosmwasm-testnet.md"},w=Object.assign(B,{setup(s){return(a,n)=>(p(),t("div",null,[m,e("p",null,[l("Click "),F(h),l(" to add Rosm testnet to your Keplr wallet")])]))}});export{g as __pageData,w as default};
