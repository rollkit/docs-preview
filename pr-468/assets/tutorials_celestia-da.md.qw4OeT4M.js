import{c as a,a3 as i,o as e}from"./chunks/framework.DVw5fkKK.js";const h=JSON.parse('{"title":"Deploying a rollup to Celestia","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Deploying a rollup to Celestia | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"tutorials/celestia-da.md","filePath":"tutorials/celestia-da.md","lastUpdated":1729641454000}'),t={name:"tutorials/celestia-da.md"},r=Object.assign(t,{setup(l){return(n,s)=>(e(),a("div",null,s[0]||(s[0]=[i(`<h1 id="deploying-a-rollup-to-celestia" tabindex="-1">Deploying a rollup to Celestia <a class="header-anchor" href="#deploying-a-rollup-to-celestia" aria-label="Permalink to &quot;Deploying a rollup to Celestia&quot;">​</a></h1><h2 id="introduction" tabindex="-1">🌞 Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;🌞 Introduction {#introduction}&quot;">​</a></h2><p>This tutorial serves as a comprehensive guide for deploying your rollup on Celestia&#39;s data availability (DA) network. From the Rollkit perspective, there&#39;s no difference in posting blocks to Celestia&#39;s testnets or Mainnet Beta.</p><p>Before proceeding, ensure that you have completed the <a href="/docs-preview/pr-468/tutorials/quick-start">quick start</a> tutorial, which covers installing the rollkit CLI and running a rollup against a local DA network.</p><h2 id="🪶-running-a-celestia-light-node" tabindex="-1">🪶 Running a Celestia light node <a class="header-anchor" href="#🪶-running-a-celestia-light-node" aria-label="Permalink to &quot;🪶 Running a Celestia light node&quot;">​</a></h2><p>Before you can start your rollup node, you need to initiate, sync, and fund a light node on one of Celestia&#39;s networks:</p><ul><li><a href="https://docs.celestia.org/nodes/arabica-devnet" target="_blank" rel="noreferrer">Arabica Devnet</a></li><li><a href="https://docs.celestia.org/nodes/mocha-testnet" target="_blank" rel="noreferrer">Mocha Testnet</a></li><li><a href="https://docs.celestia.org/nodes/mainnet" target="_blank" rel="noreferrer">Mainnet Beta</a></li></ul><p>The main difference lies in how you fund your wallet address: using testnet TIA or <a href="https://docs.celestia.org/learn/tia#overview-of-tia" target="_blank" rel="noreferrer">TIA</a> for Mainnet Beta.</p><p>After successfully starting a light node, it&#39;s time to start posting the batches of blocks of data that your rollup generates to Celestia.</p><h2 id="prerequisites" tabindex="-1">🏗️ Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;🏗️ Prerequisites {#prerequisites}&quot;">​</a></h2><ul><li><code>rollkit</code> CLI installed from the <a href="/docs-preview/pr-468/tutorials/quick-start">quick start</a> tutorial.</li></ul><h2 id="🛠️-configuring-flags-for-da" tabindex="-1">🛠️ Configuring flags for DA <a class="header-anchor" href="#🛠️-configuring-flags-for-da" aria-label="Permalink to &quot;🛠️ Configuring flags for DA&quot;">​</a></h2><p>Now that we are posting to the Celestia DA instead of the local DA, the <code>rollkit start</code> command requires three DA configuration flags:</p><ul><li><code>--rollkit.da_start_height</code></li><li><code>--rollkit.da_auth_token</code></li><li><code>--rollkit.da_namespace</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Optionally, you could also set the <code>--rollkit.da_block_time</code> flag. This should be set to the finality time of the DA layer, not its actual block time, as Rollkit does not handle reorganization logic. The default value is 15 seconds.</p></div><p>Let&#39;s determine which values to provide for each of them.</p><p>First, let&#39;s query the DA layer start height using our light node.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DA_BLOCK_HEIGHT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">celestia</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> network-head</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> jq</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;.result.header.height&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\\n Your DA_BLOCK_HEIGHT is </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$DA_BLOCK_HEIGHT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \\n&quot;</span></span></code></pre></div><p>The output of the command above will look similar to this:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Your</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DA_BLOCK_HEIGHT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2127672</span></span></code></pre></div><p>Now, let&#39;s obtain the authentication token of your light node using the following command (omit the --p2p.network flag for Mainnet Beta):</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AUTH_TOKEN</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">celestia</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> light</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> auth</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> write</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --p2p.network</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> arabica</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\\n Your DA AUTH_TOKEN is </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$AUTH_TOKEN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \\n&quot;</span></span></code></pre></div><p>The output of the command above will look similar to this:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Your</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DA</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> AUTH_TOKEN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJwdWJsaWMiLCJyZWFkIiwid3JpdGUiXX0.cSrJjpfUdTNFtzGho69V0D_8kyECn9Mzv8ghJSpKRDE</span></span></code></pre></div><p>Next, let&#39;s set up the namespace to be used for posting data on Celestia:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DA_NAMESPACE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">00000000000000000000000000000000000000000008e5f679bf7116cb</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>00000000000000000000000000000000000000000008e5f679bf7116cb</code> is a default namespace for Mocha testnet. You can set your own by using a command similar to this (or, you could get creative 😎):</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">openssl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rand</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -hex</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span></span></code></pre></div><p>Replace the last 20 characters (10 bytes) in <code>00000000000000000000000000000000000000000008e5f679bf7116cb</code> with the newly generated 10 bytes.</p><p><a href="https://docs.celestia.org/developers/node-tutorial#namespaces" target="_blank" rel="noreferrer">Learn more about namespaces</a>.</p></div><p>Lastly, set your DA address for your light node, which by default runs at port 26658:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DA_ADDRESS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://localhost:26658</span></span></code></pre></div><h2 id="🔥-running-your-rollup-connected-to-celestia-light-node" tabindex="-1">🔥 Running your rollup connected to Celestia light node <a class="header-anchor" href="#🔥-running-your-rollup-connected-to-celestia-light-node" aria-label="Permalink to &quot;🔥 Running your rollup connected to Celestia light node&quot;">​</a></h2><p>Finally, let&#39;s initiate the rollup node with all the flags:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --rollkit.aggregator</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --rollkit.da_auth_token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $AUTH_TOKEN </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --rollkit.da_namespace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $DA_NAMESPACE </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --rollkit.da_start_height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $DA_BLOCK_HEIGHT </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --rollkit.da_address</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $DA_ADDRESS</span></span></code></pre></div><p>Now, the rollup is running and posting blocks (aggregated in batches) to Celestia. You can view your rollup by using your namespace or account on one of Celestia&#39;s block explorers.</p><p>For example, <a href="https://arabica.celenium.io/" target="_blank" rel="noreferrer">here on Celenium for Arabica</a>.</p><p>Other explorers:</p><ul><li><a href="https://docs.celestia.org/nodes/arabica-testnet#explorers" target="_blank" rel="noreferrer">Arabica testnet</a></li><li><a href="https://docs.celestia.org/nodes/mocha-testnet#explorers" target="_blank" rel="noreferrer">Mocha testnet</a></li><li><a href="https://docs.celestia.org/nodes/mainnet#explorers" target="_blank" rel="noreferrer">Mainnet Beta</a></li></ul><h2 id="🎉-next-steps" tabindex="-1">🎉 Next steps <a class="header-anchor" href="#🎉-next-steps" aria-label="Permalink to &quot;🎉 Next steps&quot;">​</a></h2><p>Congratulations! You&#39;ve built a local rollup that posts data to Celestia&#39;s DA layer. Well done! Now, go forth and build something great! Good luck!</p>`,38)])))}});export{h as __pageData,r as default};