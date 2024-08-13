import{c as a}from"./chunks/constants.1b8e7bd8.js";import{o,c as l,k as s,a as t,t as n,l as p,X as e}from"./chunks/framework.07301afb.js";const r=e(`<h1 id="deploying-a-rollup-to-celestia" tabindex="-1">Deploying a rollup to Celestia <a class="header-anchor" href="#deploying-a-rollup-to-celestia" aria-label="Permalink to &quot;Deploying a rollup to Celestia&quot;">​</a></h1><h2 id="introduction" tabindex="-1">🌞 Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;🌞 Introduction {#introduction}&quot;">​</a></h2><p>This tutorial serves as a comprehensive guide for deploying your rollup on Celestia&#39;s data availability (DA) network. From the Rollkit perspective, there&#39;s no difference in posting blocks to Celestia&#39;s testnets or Mainnet Beta.</p><p>Before proceeding, ensure that you have completed the <a href="/docs-preview/pr-428/tutorials/gm-world">GM world rollup</a> tutorial, which covers setting up a local sovereign <code>gm-world</code> rollup and connecting it to a local DA node.</p><h2 id="🪶-running-a-celestia-light-node" tabindex="-1">🪶 Running a Celestia light node <a class="header-anchor" href="#🪶-running-a-celestia-light-node" aria-label="Permalink to &quot;🪶 Running a Celestia light node&quot;">​</a></h2><p>Before you can start your rollup node, you need to initiate, sync, and possibly fund a light node on one of Celestia&#39;s networks:</p><ul><li><a href="https://docs.celestia.org/nodes/arabica-devnet" target="_blank" rel="noreferrer">Arabica Devnet</a></li><li><a href="https://docs.celestia.org/nodes/mocha-testnet" target="_blank" rel="noreferrer">Mocha Testnet</a></li><li><a href="https://docs.celestia.org/nodes/mainnet" target="_blank" rel="noreferrer">Mainnet Beta</a></li></ul><p>The main difference lies in how you fund your wallet address: using testnet TIA or <a href="https://docs.celestia.org/learn/tia#overview-of-tia" target="_blank" rel="noreferrer">TIA</a> for Mainnet Beta.</p><p>After successfully starting a light node, it&#39;s time to start posting the batches of blocks of data that your rollup generates to Celestia.</p><h2 id="prerequisites" tabindex="-1">🏗️ Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;🏗️ Prerequisites {#prerequisites}&quot;">​</a></h2><p>From the <a href="/docs-preview/pr-428/tutorials/gm-world">GM world rollup</a> tutorial, you should already have the <code>rollkit</code> CLI and <code>ignite</code> CLI installed.</p><h2 id="building-your-sovereign-rollup" tabindex="-1">🏗️ Building your sovereign rollup <a class="header-anchor" href="#building-your-sovereign-rollup" aria-label="Permalink to &quot;🏗️ Building your sovereign rollup {#building-your-sovereign-rollup}&quot;">​</a></h2><p>Remove the existing <code>gm</code> project and create a new one using ignite:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> $HOME </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gm</span></span>
<span class="line"><span style="color:#FFCB6B;">ignite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">scaffold</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">chain</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--address-prefix</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--no-module</span></span></code></pre></div><p>Install the Rollkit app to ignite:</p>`,15),i={class:"language-bash"},c=s("button",{title:"Copy Code",class:"copy"},null,-1),d=s("span",{class:"lang"},"bash",-1),h={class:"shiki material-theme-palenight"},u=s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"cd"),s("span",{style:{color:"#A6ACCD"}}," $HOME"),s("span",{style:{color:"#C3E88D"}},"/gm")],-1),C={class:"line"},y=e('<span style="color:#FFCB6B;">ignite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span>',6),g={style:{color:"#C3E88D"}},D=e(`<p>Add the Rollkit app:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ignite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span></span></code></pre></div><p>Initialize the Rollkit chain configuration:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ignite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span></code></pre></div><p>This will create a <code>$HOME/.gm</code> directory with the chain configuration files.</p><h2 id="configuring-your-sovereign-rollup" tabindex="-1">🧰 Configuring your sovereign rollup <a class="header-anchor" href="#configuring-your-sovereign-rollup" aria-label="Permalink to &quot;🧰 Configuring your sovereign rollup {#configuring-your-sovereign-rollup}&quot;">​</a></h2><p>From the <code>$HOME/gm</code> directory, generate a <code>rollkit.toml</code> file by running:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">toml</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span></code></pre></div><p>The output should be similar to this (<code>$HOME</code> in the below example is <code>/root</code>):</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Found rollup entrypoint: /root/gm/cmd/gmd/main.go, adding to rollkit.toml</span></span>
<span class="line"><span style="color:#A6ACCD;">Found rollup configuration under /root/.gm, adding to rollkit.toml</span></span>
<span class="line"><span style="color:#A6ACCD;">Initialized rollkit.toml file in the current directory.</span></span></code></pre></div><h2 id="🛠️-configuring-flags-for-da" tabindex="-1">🛠️ Configuring flags for DA <a class="header-anchor" href="#🛠️-configuring-flags-for-da" aria-label="Permalink to &quot;🛠️ Configuring flags for DA&quot;">​</a></h2><p>Now, we&#39;re prepared to initiate our rollup and establish a connection with the Celestia light node. The <code>rollkit start</code> command requires three DA configuration flags:</p><ul><li><code>--rollkit.da_start_height</code></li><li><code>--rollkit.da_auth_token</code></li><li><code>--rollkit.da_namespace</code></li></ul><p>Let&#39;s determine which values to provide for each of them.</p><p>First, let&#39;s query the DA layer start height using an RPC endpoint provided by Celestia&#39;s documentation.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Optionally, you could also set the <code>--rollkit.da_block_time</code> flag. This should be set to the finality time of the DA layer, not its actual block time, as Rollkit does not handle reorganization logic. The default value is 15 seconds.</p></div><p>Let&#39;s determine what to provide for each of them.</p><ul><li>Mocha testnet: <a href="https://rpc-mocha.pops.one/block" target="_blank" rel="noreferrer">https://rpc-mocha.pops.one/block</a></li><li>Mainnet Beta: <a href="https://rpc.lunaroasis.net/block" target="_blank" rel="noreferrer">https://rpc.lunaroasis.net/block</a></li></ul><p>Here is an example for the Mocha testnet (replace URL for Mainnet Beta accordingly):</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">DA_BLOCK_HEIGHT</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">curl</span><span style="color:#C3E88D;"> https://rpc-mocha.pops.one/block </span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;"> </span><span style="color:#FFCB6B;">jq</span><span style="color:#C3E88D;"> -r </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.result.block.header.height</span><span style="color:#89DDFF;">&#39;)</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\\n Your DA_BLOCK_HEIGHT is </span><span style="color:#A6ACCD;">$DA_BLOCK_HEIGHT</span><span style="color:#C3E88D;"> \\n</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><p>The output of the command above will look similar to this:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Your</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DA_BLOCK_HEIGHT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1777655</span></span></code></pre></div><p>Now, let&#39;s obtain the authentication token of your light node using the following command (omit the --p2p.network flag for Mainnet Beta):</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">AUTH_TOKEN</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">celestia</span><span style="color:#C3E88D;"> light auth write --p2p.network mocha</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\\n Your DA AUTH_TOKEN is </span><span style="color:#A6ACCD;">$AUTH_TOKEN</span><span style="color:#C3E88D;"> \\n</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><p>The output of the command above will look similar to this:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Your</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DA</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">AUTH_TOKEN</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJwdWJsaWMiLCJyZWFkIiwid3JpdGUiXX0.cSrJjpfUdTNFtzGho69V0D_8kyECn9Mzv8ghJSpKRDE</span></span></code></pre></div><p>Lastly, let&#39;s set up the namespace to be used for posting data on Celestia:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">DA_NAMESPACE</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">00000000000000000000000000000000000000000008</span><span style="color:#C3E88D;">e5f679bf7116cb</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>00000000000000000000000000000000000000000008e5f679bf7116cb</code> is a default namespace for Mocha testnet. You can set your own by using a command similar to this (or, you could get creative 😎):</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">openssl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rand</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-hex</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span></span></code></pre></div><p>Replace the last 20 characters (10 bytes) in <code>00000000000000000000000000000000000000000008e5f679bf7116cb</code> with the newly generated 10 bytes.</p><p><a href="https://docs.celestia.org/developers/node-tutorial#namespaces" target="_blank" rel="noreferrer">Learn more about namespaces</a>.</p></div><h2 id="🔥-running-your-rollup-connected-to-celestia-light-node" tabindex="-1">🔥 Running your rollup connected to Celestia light node <a class="header-anchor" href="#🔥-running-your-rollup-connected-to-celestia-light-node" aria-label="Permalink to &quot;🔥 Running your rollup connected to Celestia light node&quot;">​</a></h2><p>Finally, let&#39;s initiate the rollup node with all the flags:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">--rollkit.aggregator</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">--rollkit.da_auth_token</span><span style="color:#A6ACCD;"> $AUTH_TOKEN \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">--rollkit.da_namespace</span><span style="color:#A6ACCD;"> $DA_NAMESPACE \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">--rollkit.da_start_height</span><span style="color:#A6ACCD;"> $DA_BLOCK_HEIGHT \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">--minimum-gas-prices=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.025stake</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><p>Now, the rollup is running and posting blocks (aggregated in batches) to Celestia. You can view your rollup by using your namespace or account on <a href="https://docs.celestia.org/nodes/mocha-testnet#explorers" target="_blank" rel="noreferrer">Mocha testnet</a> or <a href="https://docs.celestia.org/nodes/mainnet#explorers" target="_blank" rel="noreferrer">Mainnet Beta</a> explorers.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>For details on configuring gas prices, specifically for the Celestia network, see the <a href="/docs-preview/pr-428/guides/gas-price">DA Network Gas Price Guide</a>. The Celestia gas price is separate from the <code>--minimum-gas-prices=&quot;0.025stake&quot;</code> setting, which is used for the rollup network operations.</p></div><h2 id="🎉-next-steps" tabindex="-1">🎉 Next steps <a class="header-anchor" href="#🎉-next-steps" aria-label="Permalink to &quot;🎉 Next steps&quot;">​</a></h2><p>Congratulations! You&#39;ve built a local rollup that posts data to Celestia&#39;s DA layer. Well done! Now, go forth and build something great! Good luck!</p>`,36),F=JSON.parse('{"title":"Deploying a rollup to Celestia","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Deploying a rollup to Celestia | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"tutorials/celestia-da.md","filePath":"tutorials/celestia-da.md","lastUpdated":1723554086000}'),A={name:"tutorials/celestia-da.md"},v=Object.assign(A,{setup(m){return(b,f)=>(o(),l("div",null,[r,s("div",i,[c,d,s("pre",h,[s("code",null,[u,t(`
`),s("span",C,[y,s("span",g,"github.com/ignite/apps/rollkit@rollkit/"+n(p(a).rollkitIgniteAppVersion),1)])])])]),D]))}});export{F as __pageData,v as default};
