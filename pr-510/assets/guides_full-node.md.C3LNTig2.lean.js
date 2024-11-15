import{_ as s,c as a,a3 as e,o as t}from"./chunks/framework.6fneYX25.js";const k=JSON.parse('{"title":"Rollup Full Node Setup Guide","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Rollup Full Node Setup Guide | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"guides/full-node.md","filePath":"guides/full-node.md","lastUpdated":1731704954000}'),n={name:"guides/full-node.md"};function l(o,i,p,h,d,r){return t(),a("div",null,i[0]||(i[0]=[e(`<h1 id="rollup-full-node-setup-guide" tabindex="-1">Rollup Full Node Setup Guide <a class="header-anchor" href="#rollup-full-node-setup-guide" aria-label="Permalink to &quot;Rollup Full Node Setup Guide&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>This guide covers how to set up a full node to run alongside a sequencer node in a Rollkit-based blockchain network. A full node maintains a complete copy of the blockchain and helps validate transactions, improving the network&#39;s decentralization and security.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><p>Before starting, ensure you have:</p><ul><li>A local Data Availability (DA) network node running on port <code>7980</code>.</li><li>A Rollkit sequencer node running and posting blocks to the DA network.</li><li>The Rollkit CLI installed on your system.</li></ul><h2 id="setting-up-your-full-node" tabindex="-1">Setting Up Your Full Node <a class="header-anchor" href="#setting-up-your-full-node" aria-label="Permalink to &quot;Setting Up Your Full Node&quot;">​</a></h2><h3 id="initialize-chain-config-and-copy-genesis-file" tabindex="-1">Initialize Chain Config and Copy Genesis File <a class="header-anchor" href="#initialize-chain-config-and-copy-genesis-file" aria-label="Permalink to &quot;Initialize Chain Config and Copy Genesis File&quot;">​</a></h3><p>First, update the <code>config_dir</code> in the <code>rollkit.toml</code> file:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[chain]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  config_dir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/root/.yourrollupd&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [!code </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  config_dir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/root/.yourrollupd_fn&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [!code </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">++]</span></span></code></pre></div><p>Initialize the chain config for the full node, lets call it <code>FullNode</code> and set the chain ID to your rollup chain ID:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FullNode</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --chain-id=your-rollup-chain-id</span></span></code></pre></div><p>Copy the genesis file from the sequencer node:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /root/.yourrollupd/config/genesis.json</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /root/.yourrollupd_fn/config/genesis.json</span></span></code></pre></div><h3 id="set-up-p2p-connection-to-sequencer-node" tabindex="-1">Set Up P2P Connection to Sequencer Node <a class="header-anchor" href="#set-up-p2p-connection-to-sequencer-node" aria-label="Permalink to &quot;Set Up P2P Connection to Sequencer Node&quot;">​</a></h3><p>Identify the sequencer node&#39;s P2P address from its logs. It will look similar to:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1:55PM INF listening on address=/ip4/127.0.0.1/tcp/36656/p2p/12D3KooWJbD9TQoMSSSUyfhHMmgVY3LqCjxYFz8wQ92Qa6DAqtmh</span></span></code></pre></div><p>Create an environment variable with the P2P address:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> P2P_ID</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;12D3KooWJbD9TQoMSSSUyfhHMmgVY3LqCjxYFz8wQ92Qa6DAqtmh&quot;</span></span></code></pre></div><h3 id="start-the-full-node" tabindex="-1">Start the Full Node <a class="header-anchor" href="#start-the-full-node" aria-label="Permalink to &quot;Start the Full Node&quot;">​</a></h3><p>Run your full node with the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rollkit.aggregator=false</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --rollkit.da_address</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://127.0.0.1:7980</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --rpc.laddr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tcp://127.0.0.1:46657</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --grpc.address</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 127.0.0.1:9390</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --p2p.seeds</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $P2P_ID</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">@127.0.0.1:26656</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --p2p.laddr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;0.0.0.0:46656&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --json-rpc.ws-address</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 127.0.0.1:8547</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --api.address</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tcp://localhost:1318</span></span></code></pre></div><p>Key points about this command:</p><ul><li><code>--rollkit.aggregator=false</code> indicates this is not an aggregator node.</li><li>The ports and addresses are different from the sequencer node to avoid conflicts. Not everything may be necessary for your setup.</li><li>We use the <code>P2P_ID</code> environment variable to set the seed node.</li></ul><h2 id="verifying-full-node-operation" tabindex="-1">Verifying Full Node Operation <a class="header-anchor" href="#verifying-full-node-operation" aria-label="Permalink to &quot;Verifying Full Node Operation&quot;">​</a></h2><p>After starting your full node, you should see output similar to:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>2:33PM DBG indexed transactions height=1 module=txindex num_txs=0</span></span>
<span class="line"><span>2:33PM INF block marked as DA included blockHash=7897885B959F52BF0D772E35F8DA638CF8BBC361C819C3FD3E61DCEF5034D1CC blockHeight=5532 module=BlockManager</span></span></code></pre></div><p>This output indicates that your full node is successfully connecting to the network and processing blocks.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If your rollup uses EVM as an execution layar and you see an error like <code>datadir already used by another process</code>, it means you have to remove all the state from rollup data directory (<code>/root/.yourrollup_fn/data/</code>) and specify a different data directory for the EVM client.</p></div><h2 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion&quot;">​</a></h2><p>You&#39;ve now set up a full node running alongside your Rollkit sequencer.</p>`,31)]))}const u=s(n,[["render",l]]);export{k as __pageData,u as default};