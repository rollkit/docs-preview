import{c as l}from"./chunks/constants.1b8e7bd8.js";import{o as e,c as n,k as o,t as s,l as r,a,X as t}from"./chunks/framework.995d1171.js";const c=o("h1",{id:"how-to-connect-a-rollup-to-a-local-da-network",tabindex:"-1"},[a("How to connect a rollup to a local DA network "),o("a",{class:"header-anchor",href:"#how-to-connect-a-rollup-to-a-local-da-network","aria-label":'Permalink to "How to connect a rollup to a local DA network"'},"​")],-1),p=o("p",null,"This guide provides a quick and straightforward method to start a local Data Availability (DA) network and configure your rollup to post data to it.",-1),i=o("h2",{id:"setting-up-a-local-da-network",tabindex:"-1"},[a("Setting Up a Local DA Network "),o("a",{class:"header-anchor",href:"#setting-up-a-local-da-network","aria-label":'Permalink to "Setting Up a Local DA Network"'},"​")],-1),d=o("p",null,"To set up a local DA network node on your machine, run the following script to install and start the local DA node:",-1),u={class:"language-bash"},h=o("button",{title:"Copy Code",class:"copy"},null,-1),_=o("span",{class:"lang"},"bash",-1),y={class:"shiki material-theme-palenight"},A={class:"line"},D=t('<span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-sSL</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://rollkit.dev/install-local-da.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span>',12),C={style:{color:"#C3E88D"}},g=t(`<p>This script will build and run the node, which will then listen on port <code>7980</code>.</p><h2 id="configuring-your-rollup-to-connect-to-the-local-da-network" tabindex="-1">Configuring your rollup to connect to the local DA network <a class="header-anchor" href="#configuring-your-rollup-to-connect-to-the-local-da-network" aria-label="Permalink to &quot;Configuring your rollup to connect to the local DA network&quot;">​</a></h2><p>To connect your rollup to the local DA network, you need to pass the <code>--rollkit.da_address</code> flag with the local DA node address.</p><h2 id="run-your-rollup" tabindex="-1">Run your rollup <a class="header-anchor" href="#run-your-rollup" aria-label="Permalink to &quot;Run your rollup&quot;">​</a></h2><p>Start your rollup node with the following command, ensuring to include the DA address flag:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">--rollkit.da_address</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://localhost:7980</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">other-flag</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2><p>By following these steps, you will set up a local DA network node and configure your rollup to post data to it. This setup is useful for testing and development in a controlled environment.</p>`,8),S=JSON.parse('{"title":"How to connect a rollup to a local DA network","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"How to connect a rollup to a local DA network | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"guides/connect-local-da.md","filePath":"guides/connect-local-da.md","lastUpdated":1723133748000}'),m={name:"guides/connect-local-da.md"},F=Object.assign(m,{setup(k){return(w,f)=>(e(),n("div",null,[c,p,i,d,o("div",u,[h,_,o("pre",y,[o("code",null,[o("span",A,[D,o("span",C,s(r(l).localDALatestTag),1)])])])]),g]))}});export{S as __pageData,F as default};
