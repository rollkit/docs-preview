import{_ as i,c as a,a3 as t,o as e}from"./chunks/framework.CIMBEobe.js";const F=JSON.parse('{"title":"🔄 How to restart your rollup","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"🔄 How to restart your rollup | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"guides/restart-rollup.md","filePath":"guides/restart-rollup.md","lastUpdated":1731690401000}'),n={name:"guides/restart-rollup.md"};function h(l,s,r,p,k,o){return e(),a("div",null,s[0]||(s[0]=[t(`<h1 id="🔄-how-to-restart-your-rollup" tabindex="-1">🔄 How to restart your rollup <a class="header-anchor" href="#🔄-how-to-restart-your-rollup" aria-label="Permalink to &quot;🔄 How to restart your rollup&quot;">​</a></h1><p>This guide will teach you how to restart your Rollkit rollup.</p><h2 id="restart-rollup" tabindex="-1">Restart rollup <a class="header-anchor" href="#restart-rollup" aria-label="Permalink to &quot;Restart rollup&quot;">​</a></h2><p>This section covers the case where you need to restart your rollup.</p><p>In order to restart your rollup, you simply need to run the <code>&lt;your-binary&gt;d start [...args]</code> command for your rollup.</p><p>For example, if you ran the <a href="./../tutorials/quick-start">quick start</a> tutorial, you started your rollup with:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span></code></pre></div><p>You would have see output similar to:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">I[2024-10-17</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">14:52:12.845]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Creating</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> publishing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                module=BlockManager</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> height=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">I[2024-10-17</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">14:52:12.845]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> finalized</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                              module=BlockManager</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> height=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> num_txs_res=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> num_val_updates=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block_app_hash=</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">I[2024-10-17</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">14:52:12.845]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> executed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                               module=BlockManager</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> height=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> app_hash=</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">I[2024-10-17</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">14:52:12.846]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> indexed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> events</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                         module=txindex</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> height=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span></span></code></pre></div><p>If you need to restart your rollup, you can run the same command again:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span></code></pre></div><p>You will see that the block height will continue from where it left off:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">I[2024-10-17</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">14:52:13.845]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Creating</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> publishing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                module=BlockManager</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> height=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">I[2024-10-17</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">14:52:13.845]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> finalized</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                              module=BlockManager</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> height=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> num_txs_res=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> num_val_updates=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block_app_hash=</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">I[2024-10-17</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">14:52:13.845]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> executed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                               module=BlockManager</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> height=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> app_hash=</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">I[2024-10-17</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">14:52:13.845]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> indexed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> events</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                         module=txindex</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> height=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span></span></code></pre></div><p>It is important to include any additional flags that you used when you first started your rollup. For example, if you used the <code>--rollkit.da_namespace</code> flag, you will need to include that flag when restarting your rollup to ensure your rollup continues to publish blobs to the same namespace.</p><h2 id="restart-rollup-after-running-out-of-funds" tabindex="-1">Restart rollup after running out of funds <a class="header-anchor" href="#restart-rollup-after-running-out-of-funds" aria-label="Permalink to &quot;Restart rollup after running out of funds&quot;">​</a></h2><p>This section covers the case that the node that you are using to post blocks to your DA and consensus layer runs out of funds (tokens), and you need to restart your rollup.</p><p>In this example, we&#39;re using Celestia&#39;s <a href="https://docs.celestia.org/nodes/mocha-testnet/" target="_blank" rel="noreferrer">Mocha testnet</a> and running the <a href="./../tutorials/quick-start">quick start</a>. In this example, our Celestia DA light node ran out of Mocha testnet TIA and we are unable to post new blocks to Celestia due to a <a href="https://github.com/cosmos/cosmos-sdk/blob/main/types/errors/errors.go#L95" target="_blank" rel="noreferrer"><code>Code: 19</code></a> error. This error is defined by Cosmos SDK as:</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ErrTxInMempoolCache defines an ABCI typed error where a tx already exists in the mempool.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ErrTxInMempoolCache </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Register</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(RootCodespace, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">19</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tx already in mempool&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>In order to get around this error, and the same error on other Rollkit rollups, you will need to re-fund your Celestia account and increase the gas fee. This will override the transaction that is stuck in the mempool.</p><p>If you top up the balance of your node and don&#39;t increase the gas fee, you will still encounter the <code>Code: 19</code> error because there is a transaction (posting block to DA) that is duplicate to one that already exists. In order to get around this, you&#39;ll need to increase the gas fee and restart the chain.</p><h3 id="errors" tabindex="-1">🟠 Errors in this example <a class="header-anchor" href="#errors" aria-label="Permalink to &quot;🟠 Errors in this example {#errors}&quot;">​</a></h3><p>This is what the errors will look like if your DA node runs out of funding or you restart the chain without changing the gas fee:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">4:51PM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> submitting</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DA</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> layer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> height=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">28126</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=BlockManager</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">4:51PM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ERR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DA</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> layer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> submission</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> failed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> error=&quot;Codespace: &#39;sdk&#39;, Code: 19, Message: &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> attempt=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=BlockManager</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">4:51PM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ERR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DA</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> layer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> submission</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> failed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Error=&quot;Codespace: &#39;sdk&#39;, Code: 19, Message: &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> attempt=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=BlockManager</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">4:51PM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ERR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DA</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> layer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> submission</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> failed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> error=&quot;Codespace: &#39;sdk&#39;, Code: 19, Message: &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> attempt=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=BlockManager</span></span></code></pre></div><h3 id="refund-your-account" tabindex="-1">💰 Re-fund your account <a class="header-anchor" href="#refund-your-account" aria-label="Permalink to &quot;💰 Re-fund your account {#refund-your-account}&quot;">​</a></h3><p>First, you&#39;ll need to send more tokens to the account running your Celestia node. If you didn&#39;t keep track of your key, you can run the following to get your address:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> celestia-node</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./cel-key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --keyring-backend</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --node.type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> light</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --p2p.network</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">networ</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">k</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h3 id="stopping-your-rollup" tabindex="-1">🛑 Stopping your rollup <a class="header-anchor" href="#stopping-your-rollup" aria-label="Permalink to &quot;🛑 Stopping your rollup {#stopping-your-rollup}&quot;">​</a></h3><p>You can stop your rollup by using <code>Control + C</code> in your terminal where the node is running.</p><h3 id="increase-gas-fee" tabindex="-1">⛽ Increase the gas fee <a class="header-anchor" href="#increase-gas-fee" aria-label="Permalink to &quot;⛽ Increase the gas fee {#increase-gas-fee}&quot;">​</a></h3><p>To reiterate, before restarting the chain, you will need to increase the gas fee in order to avoid a <code>Code: 19</code> error. See the <a href="./gas-price">How to configure gas price</a> guide for more information.</p><h3 id="restarting-your-rollup" tabindex="-1">🔁 Restarting your rollup <a class="header-anchor" href="#restarting-your-rollup" aria-label="Permalink to &quot;🔁 Restarting your rollup {#restarting-your-rollup}&quot;">​</a></h3><p>Follow the <a href="#restart-rollup">restart rollup</a> section above.</p><h3 id="reduce-gas-fee-restart-again" tabindex="-1">🛢️ Reduce gas fee &amp; restart again <a class="header-anchor" href="#reduce-gas-fee-restart-again" aria-label="Permalink to &quot;🛢️ Reduce gas fee &amp; restart again {#reduce-gas-fee-restart-again}&quot;">​</a></h3><p>In order to save your TIA, we also recommend stopping the chain with <code>Control + C</code>, changing the gas fee back to the default (in our case, 8000 utia) and restarting the chain:</p><p>🎊 Congrats! You&#39;ve successfully restarted your Rollkit rollup after running out of TIA.</p>`,35)]))}const g=i(n,[["render",h]]);export{F as __pageData,g as default};