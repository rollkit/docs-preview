import{_ as a,c as s,a3 as t,o as e}from"./chunks/framework.KMs7aKFv.js";const c=JSON.parse('{"title":"Deploying a rollup to Avail","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Deploying a rollup to Avail | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"tutorials/avail-da.md","filePath":"tutorials/avail-da.md","lastUpdated":1728301601000}'),l={name:"tutorials/avail-da.md"};function n(o,i,h,r,p,d){return e(),s("div",null,i[0]||(i[0]=[t(`<h1 id="deploying-a-rollup-to-avail" tabindex="-1">Deploying a rollup to Avail <a class="header-anchor" href="#deploying-a-rollup-to-avail" aria-label="Permalink to &quot;Deploying a rollup to Avail&quot;">​</a></h1><h2 id="introduction" tabindex="-1">🌞 Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;🌞 Introduction {#introduction}&quot;">​</a></h2><p>Avail DA offers scalable data availability that underpins the Avail ecosystem and ensures instantaneous and reliable data integrity, enabling rollups to grow, through the use of cutting-edge zero knowledge and KZG Polynomial commitments.</p><p>This tutorial serves as a comprehensive guide for deploying your GM world rollup on Avail&#39;s data availability (DA) network.</p><p>Before proceeding, ensure that you have completed the GM World rollup setup.</p><p>Note : If you want to go through gm world setup docs for more information, you can refer <a href="/docs-preview/pr-477/tutorials/gm-world">GM world rollup</a> tutorial, which covers setting up a local sovereign gm-world rollup and connecting it to a local (mock) DA node.</p><h2 id="🪶-running-an-avail-light-node" tabindex="-1">🪶 Running an Avail light node <a class="header-anchor" href="#🪶-running-an-avail-light-node" aria-label="Permalink to &quot;🪶 Running an Avail light node&quot;">​</a></h2><p>Before you can start your rollup node, you need to initiate, sync, and possibly fund a light node on Turing Testnet which is the test network of Avail</p><ul><li><a href="https://github.com/rollkit/avail-da/blob/main/README.md" target="_blank" rel="noreferrer">Local development</a></li><li><a href="https://docs.availproject.org/docs/networks" target="_blank" rel="noreferrer">Turing Testnet</a></li></ul><h3 id="🚀-using-turing-testnet" tabindex="-1">🚀 Using Turing Testnet <a class="header-anchor" href="#🚀-using-turing-testnet" aria-label="Permalink to &quot;🚀 Using Turing Testnet&quot;">​</a></h3><ul><li>To fund your wallet address for using Turing Testnet: get AVAIL tokens from <a href="./(https://faucet.avail.tools/)">the faucet</a></li><li>Paste your mnemonic in the <code>identity.toml</code> file by creating a <code>identity.toml</code> with the following command: <code>touch identity.toml</code> Example:</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">avail_secret_uri</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&lt;paste your mnemonic here&gt;&#39;</span></span></code></pre></div><p>Running just an Avail light node is enough for Turing testnet. Run the Avail light node using the following command</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cargo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --release</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --network</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> turing</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --app-id</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --clean</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --identity</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> identity.toml</span></span></code></pre></div><p>If you want to sync Avail light node with your desired block number, you can add the following config in your <code>config.yaml</code> file from <a href="https://github.com/availproject/avail-light/blob/main/config.yaml.template" target="_blank" rel="noreferrer">here</a></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http_server_host</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;127.0.0.1&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http_server_port</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8000</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">port</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 38000</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sync_start_block</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 322264</span></span></code></pre></div><p>After successfully starting a light node, it&#39;s time to start posting the batches of blocks of data that your rollup generates.</p><h2 id="🧹-cleaning-previous-chain-history" tabindex="-1">🧹 Cleaning previous chain history <a class="header-anchor" href="#🧹-cleaning-previous-chain-history" aria-label="Permalink to &quot;🧹 Cleaning previous chain history&quot;">​</a></h2><p>From the <a href="/docs-preview/pr-477/tutorials/gm-world">GM world rollup</a> tutorial, you should already have the <code>gmd</code> binary and the <code>$HOME/.gm</code> directory.</p><p>To clear old rollup data:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">which</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gmd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.gm</span></span></code></pre></div><h2 id="🏗️-building-your-rollup" tabindex="-1">🏗️ Building your rollup <a class="header-anchor" href="#🏗️-building-your-rollup" aria-label="Permalink to &quot;🏗️ Building your rollup&quot;">​</a></h2><p>Now we need to rebuild our rollup by simply running the existing <code>init.sh</code> script:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/gm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init.sh</span></span></code></pre></div><p>This process creates a new <code>$HOME/.gm</code> directory and a new <code>gmd</code> binary. Next, we need to connect our rollup to the running Avail light node.</p><h2 id="🛠️-configuring-flags-for-da" tabindex="-1">🛠️ Configuring flags for DA <a class="header-anchor" href="#🛠️-configuring-flags-for-da" aria-label="Permalink to &quot;🛠️ Configuring flags for DA&quot;">​</a></h2><p>Now we&#39;re prepared to initiate our rollup and establish a connection with the Avail light node. The <code>gmd start</code> command requires two DA configuration flags:</p><ul><li><code>--rollkit.da_start_height</code></li><li><code>--rollkit.da_address</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Optionally, you could also set the <code>--rollkit.da_block_time</code> flag. This should be set to the finality time of the DA layer, not its actual block time, as Rollkit does not handle reorganization logic. The default value is 15 seconds.</p></div><p>Let&#39;s determine what to provide for each of them.</p><p>First, let&#39;s query the DA Layer start height using an RPC endpoint provided by Avail Labs. For local, it would be - <a href="https://localhost:8000/v1/latest_block" target="_blank" rel="noreferrer">https://localhost:8000/v1/latest_block</a>, and for Turing Testnet - <a href="https://avail-turing-rpc.publicnode.com" target="_blank" rel="noreferrer">https://avail-turing-rpc.publicnode.com</a></p><p>Here is an example for the local development (replace URL for Turing Testnet if needed):</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DA_BLOCK_HEIGHT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://localhost:8000/v1/latest_block</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> jq</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;.result.block.header.height&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\\n Your DA_BLOCK_HEIGHT is </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$DA_BLOCK_HEIGHT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \\n&quot;</span></span></code></pre></div><p>You will see the output like this:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Your</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DA_BLOCK_HEIGHT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 35</span></span></code></pre></div><h2 id="🔥-running-your-rollup-connected-to-an-avail-light-node" tabindex="-1">🔥 Running your rollup connected to an avail light node <a class="header-anchor" href="#🔥-running-your-rollup-connected-to-an-avail-light-node" aria-label="Permalink to &quot;🔥 Running your rollup connected to an avail light node&quot;">​</a></h2><p>Now let&#39;s run our rollup node with all DA flags:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    gmd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --rollkit.aggregator</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --rollkit.da_address=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;grpc://localhost:3000&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --rollkit.da_start_height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $DA_BLOCK_HEIGHT </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --minimum-gas-prices=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0.1stake&quot;</span></span></code></pre></div><p>Now, the rollup is running and posting blocks (aggregated in batches) to Avail. You can view your rollup by finding your account on <a href="https://avail-turing.subscan.io/" target="_blank" rel="noreferrer">Turing testnet</a></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>For details on configuring gas prices specifically for the DA network, see our <a href="/docs-preview/pr-477/guides/gas-price">DA Network Gas Price Guide</a>. This is separate from the <code>--minimum-gas-prices=&quot;0.025stake&quot;</code> setting, which is used for rollup network operations.</p></div><h2 id="🎉-next-steps" tabindex="-1">🎉 Next steps <a class="header-anchor" href="#🎉-next-steps" aria-label="Permalink to &quot;🎉 Next steps&quot;">​</a></h2><p>Congratulations! You&#39;ve built a local rollup that posts to Avail&#39;s testnets as well as locally. Well done! Now, go forth and build something great! Good luck!</p>`,42)]))}const g=a(l,[["render",n]]);export{c as __pageData,g as default};
