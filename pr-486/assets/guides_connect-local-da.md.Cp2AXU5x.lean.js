import{c as s}from"./chunks/constants.cbS0cnd_.js";import{c as i,j as a,a as o,a3 as l,t as e,k as n,o as r}from"./chunks/framework.BWYLlII7.js";const d={class:"language-bash vp-adaptive-theme"},h={class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},p={class:"line"},c={style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},w=JSON.parse('{"title":"How to connect a rollup to a local DA network","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"How to connect a rollup to a local DA network | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"guides/connect-local-da.md","filePath":"guides/connect-local-da.md","lastUpdated":1728678688000}'),u={name:"guides/connect-local-da.md"},F=Object.assign(u,{setup(k){return(g,t)=>(r(),i("div",null,[t[3]||(t[3]=a("h1",{id:"how-to-connect-a-rollup-to-a-local-da-network",tabindex:"-1"},[o("How to connect a rollup to a local DA network "),a("a",{class:"header-anchor",href:"#how-to-connect-a-rollup-to-a-local-da-network","aria-label":'Permalink to "How to connect a rollup to a local DA network"'},"​")],-1)),t[4]||(t[4]=a("p",null,"This guide provides a quick and straightforward method to start a local Data Availability (DA) network and configure your rollup to post data to it.",-1)),t[5]||(t[5]=a("h2",{id:"setting-up-a-local-da-network",tabindex:"-1"},[o("Setting Up a Local DA Network "),a("a",{class:"header-anchor",href:"#setting-up-a-local-da-network","aria-label":'Permalink to "Setting Up a Local DA Network"'},"​")],-1)),t[6]||(t[6]=a("p",null,"To set up a local DA network node on your machine, run the following script to install and start the local DA node:",-1)),a("div",d,[t[1]||(t[1]=a("button",{title:"Copy Code",class:"copy"},null,-1)),t[2]||(t[2]=a("span",{class:"lang"},"bash",-1)),a("pre",h,[a("code",null,[a("span",p,[t[0]||(t[0]=l('<span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://rollkit.dev/install-local-da.sh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bash</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span>',6)),a("span",c," "+e(n(s).localDALatestTag),1)])])])]),t[7]||(t[7]=l(`<p>This script will build and run the node, which will then listen on port <code>7980</code>.</p><h2 id="configuring-your-rollup-to-connect-to-the-local-da-network" tabindex="-1">Configuring your rollup to connect to the local DA network <a class="header-anchor" href="#configuring-your-rollup-to-connect-to-the-local-da-network" aria-label="Permalink to &quot;Configuring your rollup to connect to the local DA network&quot;">​</a></h2><p>To connect your rollup to the local DA network, you need to pass the <code>--rollkit.da_address</code> flag with the local DA node address.</p><h2 id="run-your-rollup" tabindex="-1">Run your rollup <a class="header-anchor" href="#run-your-rollup" aria-label="Permalink to &quot;Run your rollup&quot;">​</a></h2><p>Start your rollup node with the following command, ensuring to include the DA address flag:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --rollkit.da_address</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://localhost:7980</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">other-flag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2><p>By following these steps, you will set up a local DA network node and configure your rollup to post data to it. This setup is useful for testing and development in a controlled environment.</p>`,8))]))}});export{w as __pageData,F as default};
