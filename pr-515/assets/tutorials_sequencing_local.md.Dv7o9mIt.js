import{c as e}from"./chunks/constants.C1G_zmdY.js";import{c as n,a3 as a,j as i,t,k as l,o as h}from"./chunks/framework.CilBlEsR.js";const o={class:"vp-code-group vp-adaptive-theme"},r={class:"blocks"},p={class:"language-bash vp-adaptive-theme active"},d={class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},c={class:"line"},k={style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},u={class:"language-bash vp-adaptive-theme"},g={class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},F={class:"line"},y={style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},v=JSON.parse('{"title":"Local Sequencer","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Local Sequencer | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"tutorials/sequencing/local.md","filePath":"tutorials/sequencing/local.md","lastUpdated":1732051314000}'),C={name:"tutorials/sequencing/local.md"},f=Object.assign(C,{setup(b){return(m,s)=>(h(),n("div",null,[s[9]||(s[9]=a('<h1 id="local-sequencer" tabindex="-1">Local Sequencer <a class="header-anchor" href="#local-sequencer" aria-label="Permalink to &quot;Local Sequencer&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction {#introduction}&quot;">​</a></h2><p>This tutorial serves as a comprehensive guide for using the <a href="https://github.com/rollkit/go-sequencing" target="_blank" rel="noreferrer">local-sequencer</a> with your chain.</p><p>Before proceeding, ensure that you have completed the <a href="/docs-preview/pr-515/tutorials/quick-start">quick start</a> or <a href="/docs-preview/pr-515/tutorials/wordle">build a chain</a> tutorial, which covers installing the rollkit CLI, building your chain, and running your chain.</p><h2 id="setting-up-a-local-local-sequencer" tabindex="-1">Setting Up a Local Local Sequencer <a class="header-anchor" href="#setting-up-a-local-local-sequencer" aria-label="Permalink to &quot;Setting Up a Local Local Sequencer&quot;">​</a></h2><p>To set up a local sequencer on your machine, run the following script to install and start the local sequencer:</p>',6)),i("div",o,[s[8]||(s[8]=a('<div class="tabs"><input type="radio" name="group--c1q9" id="tab-xmaDfnK" checked><label data-title="Quick Start" for="tab-xmaDfnK">Quick Start</label><input type="radio" name="group--c1q9" id="tab-vDmP6M0"><label data-title="Build a Chain" for="tab-vDmP6M0">Build a Chain</label></div>',1)),i("div",r,[i("div",p,[s[2]||(s[2]=i("button",{title:"Copy Code",class:"copy"},null,-1)),s[3]||(s[3]=i("span",{class:"lang"},"bash",-1)),i("pre",d,[i("code",null,[i("span",c,[s[0]||(s[0]=a('<span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://rollkit.dev/install-local-sequencer.sh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bash</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span>',6)),i("span",k," "+t(l(e).goSequencingLatestTag),1),s[1]||(s[1]=i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," my-rollup",-1))])])])]),i("div",u,[s[6]||(s[6]=i("button",{title:"Copy Code",class:"copy"},null,-1)),s[7]||(s[7]=i("span",{class:"lang"},"bash",-1)),i("pre",g,[i("code",null,[i("span",F,[s[4]||(s[4]=a('<span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://rollkit.dev/install-local-sequencer.sh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bash</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span>',6)),i("span",y," "+t(l(e).goSequencingLatestTag),1),s[5]||(s[5]=i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," wordle",-1))])])])])])]),s[10]||(s[10]=a(`<p>This script will build and run the sequencer, which will then listen on port <code>50051</code> with the <code>rollup-id</code> of your chain.</p><h2 id="configuring-your-chain-to-connect-to-the-local-sequencer" tabindex="-1">Configuring your chain to connect to the local sequencer <a class="header-anchor" href="#configuring-your-chain-to-connect-to-the-local-sequencer" aria-label="Permalink to &quot;Configuring your chain to connect to the local sequencer&quot;">​</a></h2><p>To connect your chain to the local sequencer, you need to pass the <code>--rollkit.sequencer_address</code> flag with the centralized sequencer address and the <code>--rollkit.sequencer_rollup_id</code> to ensure your rollup id matches what the sequencer is expecting.</p><h2 id="run-your-chain" tabindex="-1">Run your chain <a class="header-anchor" href="#run-your-chain" aria-label="Permalink to &quot;Run your chain&quot;">​</a></h2><p>Start your chain with the following command, ensuring to include the sequencer flag:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-HSjn9" id="tab-2mrKUdI" checked><label data-title="Quick Start" for="tab-2mrKUdI">Quick Start</label><input type="radio" name="group-HSjn9" id="tab-VsQt41N"><label data-title="Wordle Chain" for="tab-VsQt41N">Wordle Chain</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --rollkit.sequencer_address</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> localhost:50051</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --rollkit.sequencer_rollup_id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-rollup</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --rollkit.aggregator</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --rollkit.sequencer_address</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> localhost:50051</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --rollkit.sequencer_rollup_id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wordle</span></span></code></pre></div></div></div><p>You should see the following log messages indicating that your chain is connected to the local sequencer:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">I[2024-11-15</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">15:22:33.636]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sequencer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> already</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> running</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                 module=main</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> address=localhost:50051</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">I[2024-11-15</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">15:22:33.636]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sure</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> your</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rollupID</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> matches</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> your</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sequencer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=main</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rollupID=my-rollup</span></span></code></pre></div><h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2><p>By following these steps, you will have successfully set up and connected your chain to the local sequencer. You can now start submitting transactions to your chain.</p>`,10))]))}});export{v as __pageData,f as default};