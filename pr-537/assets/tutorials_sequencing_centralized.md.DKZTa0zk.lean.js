import{c as e}from"./chunks/constants.C1G_zmdY.js";import{c as t,a3 as a,j as i,t as n,k as l,o as h}from"./chunks/framework.CgeIao0q.js";const r="/docs-preview/pr-537/assets/sequencing.DlIPdR1A.jpg",p={class:"language-sh vp-adaptive-theme"},d={class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},k={class:"line"},o={style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},C=JSON.parse('{"title":"Centralized Sequencer","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Centralized Sequencer | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"tutorials/sequencing/centralized.md","filePath":"tutorials/sequencing/centralized.md","lastUpdated":1736677890000}'),c={name:"tutorials/sequencing/centralized.md"},B=Object.assign(c,{setup(F){return(u,s)=>(h(),t("div",null,[s[5]||(s[5]=a('<h1 id="centralized-sequencer" tabindex="-1">Centralized Sequencer <a class="header-anchor" href="#centralized-sequencer" aria-label="Permalink to &quot;Centralized Sequencer&quot;">​</a></h1><p>A centralized sequencer is a sequencing middleware that receives rollup transactions and provides a local sequencing capabilities. Meaning, the transactions are ordered in the order they are received by the sequencer without any censorship. Further, the sequenced batches are made available in the DA network (such as Celestia). Under the hood, the centralized sequencer is a GRPC server that implements <code>go-sequencing</code> interface and the server is hosted by the same node that is running the aggregator for the Rollkit rollup.</p><p><img src="'+r+'" alt="Rollkit with Centralized Sequencer"></p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites {#prerequisites}&quot;">​</a></h2><p>This tutorial serves as a comprehensive guide for using the <a href="https://github.com/rollkit/centralized-sequencer" target="_blank" rel="noreferrer">centralized-sequencer</a> with your chain.</p><p>Before proceeding, ensure that you have completed the <a href="/docs-preview/pr-537/tutorials/quick-start">quick start</a> or <a href="/docs-preview/pr-537/tutorials/wordle">build a chain</a> tutorial, which covers installing the rollkit CLI, building your chain, and running your chain.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>It is important to note that the centralized sequencer expects a DA layer to be running when it starts. This means that you need to launch your DA Layer before starting the centralized sequencer.</p></div><p>Additionally, you should have completed one of the <a href="./../da/overview">DA Layer tutorials</a> and have your DA layer ready to use with the centralized sequencer. This tutorial will use the <a href="./../da/local">local-da layer</a> as an example.</p><h2 id="installation-centralized-sequencer" tabindex="-1">Installation the Centralized Sequencer <a class="header-anchor" href="#installation-centralized-sequencer" aria-label="Permalink to &quot;Installation the Centralized Sequencer {#installation-centralized-sequencer}&quot;">​</a></h2>',9)),i("div",p,[s[3]||(s[3]=i("button",{title:"Copy Code",class:"copy"},null,-1)),s[4]||(s[4]=i("span",{class:"lang"},"sh",-1)),i("pre",d,[i("code",null,[i("span",k,[s[0]||(s[0]=a('<span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --depth</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --branch</span>',5)),i("span",o," "+n(l(e).centralizedSequencerLatestTag),1),s[1]||(s[1]=i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," https://github.com/rollkit/centralized-sequencer.git",-1))]),s[2]||(s[2]=a(`
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> centralized-sequencer</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./build/centralized-sequencer</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span></span>`,6))])])]),s[6]||(s[6]=a(`<p>You should see the following output:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Usage:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -host</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> string</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    	centralized</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sequencer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (default </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;localhost&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -port</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> string</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    	centralized</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sequencer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> port</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (default </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;50051&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -listen-all</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    	listen</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> network</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> interfaces</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (0.0.0.0) instead of just localhost</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -rollup-id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> string</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    	rollup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (default </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;rollupId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -batch-time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> duration</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    	time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> in seconds to wait before generating a new batch (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">default</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 2s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -da_address</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> string</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    	DA</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> address</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (default </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://localhost:26658&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -da_auth_token</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> string</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    	auth</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> token</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DA</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -da_namespace</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> string</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    	DA</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> namespace</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> where</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sequencer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> submits</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> transactions</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -db_path</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> string</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    	path</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> database</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span></code></pre></div><p>As shown by the help command, a centralized sequencer is configured to serve a rollup (via <code>rollup_id</code>). The DA network to persist the sequenced batches are specified using <code>da_address</code>, <code>da_auth_token</code> and <code>da_namespace</code>.</p><h2 id="run-the-centralized-sequencer" tabindex="-1">Run the centralized sequencer <a class="header-anchor" href="#run-the-centralized-sequencer" aria-label="Permalink to &quot;Run the centralized sequencer {#run-the-centralized-sequencer}&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>As mentioned in the prerequisities, you should have your DA layer running. These steps assume the local-da is running on <code>http://localhost:7980</code>.</p></div><p>Start your centralized sequencer with the following command:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-wMzqm" id="tab-kX4pjNC" checked><label data-title="Quick Start" for="tab-kX4pjNC">Quick Start</label><input type="radio" name="group-wMzqm" id="tab-jsFSiED"><label data-title="Build a Chain" for="tab-jsFSiED">Build a Chain</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./build/centralized-sequencer</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rollup-id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-rollup</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -da_address</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://localhost:7980</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./build/centralized-sequencer</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rollup-id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wordle</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -da_address</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://localhost:7980</span></span></code></pre></div></div></div><h2 id="run-your-chain" tabindex="-1">Run your chain <a class="header-anchor" href="#run-your-chain" aria-label="Permalink to &quot;Run your chain {#run-your-chain}&quot;">​</a></h2><p>To connect your chain to the centralized sequencer, you need to pass the <code>--rollkit.sequencer_address</code> flag with the local sequencer address and the <code>--rollkit.sequencer_rollup_id</code> to ensure your rollup id matches what the sequencer is expecting.</p><p>Start your chain with the following command, ensuring to include the sequencer flag:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ymuNt" id="tab-jI7HvGG" checked><label data-title="Quick Start" for="tab-jI7HvGG">Quick Start</label><input type="radio" name="group-ymuNt" id="tab-uDc45K_"><label data-title="Wordle Chain" for="tab-uDc45K_">Wordle Chain</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --rollkit.da_address</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://localhost:7980</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --rollkit.sequencer_address</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> localhost:50051</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --rollkit.sequencer_rollup_id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-rollup</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --rollkit.aggregator</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --rollkit.da_address</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://localhost:7980</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --rollkit.sequencer_address</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> localhost:50051</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --rollkit.sequencer_rollup_id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wordle</span></span></code></pre></div></div></div><p>You should see the following log messages indicating that your chain is connected to the local sequencer:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">I[2024-11-15</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">15:22:33.636]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sequencer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> already</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> running</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                 module=main</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> address=localhost:50051</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">I[2024-11-15</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">15:22:33.636]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sure</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> your</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rollupID</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> matches</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> your</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sequencer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=main</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rollupID=my-rollup</span></span></code></pre></div><p>Then after a few blocks you should see this message confirming that your sequencer is successfully submitting batches to the DA layer:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">I[2024-11-15</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">16:04:07.698]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> successfully</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> submitted</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> headers</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DA</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> layer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=BlockManager</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gasPrice=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> daHeight=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> headerCount=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">14</span></span></code></pre></div><h2 id="metrics" tabindex="-1">Metrics <a class="header-anchor" href="#metrics" aria-label="Permalink to &quot;Metrics {#metrics}&quot;">​</a></h2><p>The <code>centralized-sequencer</code> node reports Prometheus metrics when the <code>-metrics</code> flag is enabled.</p><p>By default, metrics are exported to <code>http://localhost:8080/metrics</code>.</p><p>The listening address and port can be configured with the <code>-metrics-address</code> flag.</p><p>The following metrics are available:</p><table tabindex="0"><thead><tr><th><strong>Name</strong></th><th><strong>Type</strong></th><th><strong>Tags</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>sequencer_gas_price</td><td>Gauge</td><td></td><td>Gas price of the DA transaction</td></tr><tr><td>sequencer_last_blob_size</td><td>Gauge</td><td></td><td>Last blob size submitted to the DA</td></tr><tr><td>sequencer_transaction_status</td><td>Gauge</td><td></td><td>Transaction status of the DA transaction</td></tr><tr><td>sequencer_num_pending_blocks</td><td>Gauge</td><td></td><td>Number of blocks pending DA submission</td></tr><tr><td>sequencer_included_block_height</td><td>Gauge</td><td></td><td>Block height of the last DA transaction</td></tr></tbody></table><h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary {#summary}&quot;">​</a></h2><p>By following these steps, you will have successfully set up and connected your chain to the centralized sequencer. You can now start submitting transactions to your chain.</p>`,23))]))}});export{C as __pageData,B as default};
