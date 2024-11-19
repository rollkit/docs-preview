import{c as t}from"./chunks/constants.pTZQtKJL.js";import{c as l,a3 as i,j as s,t as e,k as n,o}from"./chunks/framework.6fneYX25.js";const r={class:"language-bash vp-adaptive-theme"},h={class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},d={class:"line"},p={style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},y=JSON.parse('{"title":"Using Local DA","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Using Local DA | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"tutorials/da/local-da.md","filePath":"tutorials/da/local-da.md","lastUpdated":1732025785000}'),k={name:"tutorials/da/local-da.md"},C=Object.assign(k,{setup(c){return(u,a)=>(o(),l("div",null,[a[3]||(a[3]=i('<h1 id="using-local-da" tabindex="-1">Using Local DA <a class="header-anchor" href="#using-local-da" aria-label="Permalink to &quot;Using Local DA&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction {#introduction}&quot;">​</a></h2><p>This tutorial serves as a comprehensive guide for using the <a href="https://github.com/rollkit/local-da" target="_blank" rel="noreferrer">local-da</a> with your chain.</p><p>Before proceeding, ensure that you have completed the <a href="/docs-preview/pr-510/tutorials/quick-start">quick start</a> or <a href="/docs-preview/pr-510/tutorials/wordle">build a chain</a> tutorial, which covers installing the rollkit CLI, building your chain, and running your chain.</p><h2 id="setting-up-a-local-da-network" tabindex="-1">Setting Up a Local DA Network <a class="header-anchor" href="#setting-up-a-local-da-network" aria-label="Permalink to &quot;Setting Up a Local DA Network&quot;">​</a></h2><p>To set up a local DA network node on your machine, run the following script to install and start the local DA node:</p>',6)),s("div",r,[a[1]||(a[1]=s("button",{title:"Copy Code",class:"copy"},null,-1)),a[2]||(a[2]=s("span",{class:"lang"},"bash",-1)),s("pre",h,[s("code",null,[s("span",d,[a[0]||(a[0]=i('<span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://rollkit.dev/install-local-da.sh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bash</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span>',6)),s("span",p," "+e(n(t).localDALatestTag),1)])])])]),a[4]||(a[4]=i(`<p>This script will build and run the node, which will then listen on port <code>7980</code>.</p><h2 id="configuring-your-rollup-to-connect-to-the-local-da-network" tabindex="-1">Configuring your rollup to connect to the local DA network <a class="header-anchor" href="#configuring-your-rollup-to-connect-to-the-local-da-network" aria-label="Permalink to &quot;Configuring your rollup to connect to the local DA network&quot;">​</a></h2><p>To connect your rollup to the local DA network, you need to pass the <code>--rollkit.da_address</code> flag with the local DA node address.</p><h2 id="run-your-rollup" tabindex="-1">Run your rollup <a class="header-anchor" href="#run-your-rollup" aria-label="Permalink to &quot;Run your rollup&quot;">​</a></h2><p>Start your rollup node with the following command, ensuring to include the DA address flag:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-EBQ8h" id="tab-hEEfWEF" checked><label data-title="Quick Start" for="tab-hEEfWEF">Quick Start</label><input type="radio" name="group-EBQ8h" id="tab--Xqg5Mv"><label data-title="Wordle Chain" for="tab--Xqg5Mv">Wordle Chain</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rollkit.da_address</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://localhost:7980</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --rollkit.aggregator</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --rollkit.da_address</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://localhost:7980</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --rollkit.sequencer_rollup_id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wordle</span></span></code></pre></div></div></div><p>You should see the following log message indicating that your rollup is connected to the local DA network:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">I[2024-11-15</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">14:54:19.842]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DA</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> already</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> running</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                 module=main</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> address=http://localhost:7980</span></span></code></pre></div><h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2><p>By following these steps, you will set up a local DA network node and configure your rollup to post data to it. This setup is useful for testing and development in a controlled environment.</p>`,10))]))}});export{y as __pageData,C as default};
