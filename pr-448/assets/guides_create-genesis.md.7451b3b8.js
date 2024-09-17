import{_ as s,o as a,c as n,X as e}from"./chunks/framework.9916264b.js";const D=JSON.parse('{"title":"How to create a genesis for your rollup","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"How to create a genesis for your rollup | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"guides/create-genesis.md","filePath":"guides/create-genesis.md","lastUpdated":1726603035000}'),o={name:"guides/create-genesis.md"},l=e(`<h1 id="how-to-create-a-genesis-for-your-rollup" tabindex="-1">How to create a genesis for your rollup <a class="header-anchor" href="#how-to-create-a-genesis-for-your-rollup" aria-label="Permalink to &quot;How to create a genesis for your rollup&quot;">​</a></h1><p>This guide will walk you through the process of setting up a genesis for your rollup. Follow the steps below to initialize your rollup chain, add a genesis account, and start the chain.</p><h2 id="_1-setting-variables" tabindex="-1">1. Setting variables <a class="header-anchor" href="#_1-setting-variables" aria-label="Permalink to &quot;1. Setting variables&quot;">​</a></h2><p>First, set the necessary variables for your chain, here is an example:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">VALIDATOR_NAME</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">validator1</span></span>
<span class="line"><span style="color:#A6ACCD;">CHAIN_ID</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">rollup-chain</span></span>
<span class="line"><span style="color:#A6ACCD;">KEY_NAME</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">rollup-key</span></span>
<span class="line"><span style="color:#A6ACCD;">CHAINFLAG</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">--chain-id </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">CHAIN_ID</span><span style="color:#89DDFF;">}&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">TOKEN_AMOUNT</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">10000000000000000000000000stake</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">STAKING_AMOUNT</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1000000000stake</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><h2 id="_2-ensuring-rollkit-toml-is-present-and-building-entrypoint" tabindex="-1">2. Ensuring <code>rollkit.toml</code> is present and building entrypoint <a class="header-anchor" href="#_2-ensuring-rollkit-toml-is-present-and-building-entrypoint" aria-label="Permalink to &quot;2. Ensuring \`rollkit.toml\` is present and building entrypoint&quot;">​</a></h2><p>Ensure that <code>rollkit.toml</code> is present in the root of your rollup directory (if not, follow a <a href="/docs-preview/pr-448/guides/use-rollkit-cli">Guide</a> to set it up) and run the following command to (re)generate an entrypoint binary out of the code:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rebuild</span></span></code></pre></div><p>This creates an <code>entrypoint</code> binary in the root of your rollup directory. which is used to run all the operations on the rollup chain.</p><p>Ensure that the chain configuration directory is set correctly in the <code>rollkit.toml</code> file, if you doubt it, you can remove the <code>rollkit.toml</code> file and run the following command to generate a new one:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">toml</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span></code></pre></div><h2 id="_3-resetting-existing-genesis-chain-data" tabindex="-1">3. Resetting existing genesis/chain data <a class="header-anchor" href="#_3-resetting-existing-genesis-chain-data" aria-label="Permalink to &quot;3. Resetting existing genesis/chain data&quot;">​</a></h2><p>Reset any existing genesis or chain data:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tendermint</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">unsafe-reset-all</span></span></code></pre></div><h2 id="_4-initializing-the-validator" tabindex="-1">4. Initializing the validator <a class="header-anchor" href="#_4-initializing-the-validator" aria-label="Permalink to &quot;4. Initializing the validator&quot;">​</a></h2><p>Initialize the validator with the chain ID you set:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> $VALIDATOR_NAME </span><span style="color:#C3E88D;">--chain-id</span><span style="color:#A6ACCD;"> $CHAIN_ID</span></span></code></pre></div><h2 id="_5-adding-a-key-to-keyring-backend" tabindex="-1">5. Adding a key to keyring backend <a class="header-anchor" href="#_5-adding-a-key-to-keyring-backend" aria-label="Permalink to &quot;5. Adding a key to keyring backend&quot;">​</a></h2><p>Add a key to the keyring-backend:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">keys</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> $KEY_NAME </span><span style="color:#C3E88D;">--keyring-backend</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span></span></code></pre></div><h2 id="_6-adding-a-genesis-account" tabindex="-1">6. Adding a genesis account <a class="header-anchor" href="#_6-adding-a-genesis-account" aria-label="Permalink to &quot;6. Adding a genesis account&quot;">​</a></h2><p>Add a genesis account with the specified token amount:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">genesis</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add-genesis-account</span><span style="color:#A6ACCD;"> $KEY_NAME $TOKEN_AMOUNT </span><span style="color:#C3E88D;">--keyring-backend</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span></span></code></pre></div><h2 id="_7-setting-the-staking-amount-in-the-genesis-transaction" tabindex="-1">7. Setting the staking amount in the genesis transaction <a class="header-anchor" href="#_7-setting-the-staking-amount-in-the-genesis-transaction" aria-label="Permalink to &quot;7. Setting the staking amount in the genesis transaction&quot;">​</a></h2><p>Set the staking amount in the genesis transaction:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">genesis</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gentx</span><span style="color:#A6ACCD;"> $KEY_NAME $STAKING_AMOUNT </span><span style="color:#C3E88D;">--chain-id</span><span style="color:#A6ACCD;"> $CHAIN_ID </span><span style="color:#C3E88D;">--keyring-backend</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span></span></code></pre></div><h2 id="_8-collecting-genesis-transactions" tabindex="-1">8. Collecting genesis transactions <a class="header-anchor" href="#_8-collecting-genesis-transactions" aria-label="Permalink to &quot;8. Collecting genesis transactions&quot;">​</a></h2><p>Collect the genesis transactions:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">genesis</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">collect-gentxs</span></span></code></pre></div><h2 id="_9-configuring-the-genesis-file" tabindex="-1">9. Configuring the genesis file <a class="header-anchor" href="#_9-configuring-the-genesis-file" aria-label="Permalink to &quot;9. Configuring the genesis file&quot;">​</a></h2><p>Copy the centralized sequencer address into <code>genesis.json</code>:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ADDRESS</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">jq</span><span style="color:#C3E88D;"> -r </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.address</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> ~/.rollup/config/priv_validator_key.json</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">PUB_KEY</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">jq</span><span style="color:#C3E88D;"> -r </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.pub_key</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> ~/.rollup/config/priv_validator_key.json</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#FFCB6B;">jq</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--argjson</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pubKey</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$PUB_KEY</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.consensus[&quot;validators&quot;]=[{&quot;address&quot;: &quot;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">$ADDRESS</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&quot;, &quot;pub_key&quot;: $pubKey, &quot;power&quot;: &quot;1000&quot;, &quot;name&quot;: &quot;Rollkit Sequencer&quot;}]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.rollup/config/genesis.json</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">temp.json</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">mv</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">temp.json</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.rollup/config/genesis.json</span></span></code></pre></div><h2 id="_10-creating-a-restart-script" tabindex="-1">10. Creating a restart script <a class="header-anchor" href="#_10-creating-a-restart-script" aria-label="Permalink to &quot;10. Creating a restart script&quot;">​</a></h2><p>Create a <code>restart-rollup.sh</code> file to restart the chain later, notice the <code>rollkit.da_address</code> flag which is the address of the data availability node, for other DA layers it will be a different set of flags (in case of Celestia check out the tutorial <a href="/docs-preview/pr-448/tutorials/celestia-da">here</a>):</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-f</span><span style="color:#A6ACCD;"> restart-rollup.sh </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart-rollup.sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rollkit start --rollkit.aggregator --rpc.laddr tcp://127.0.0.1:36657 --grpc.address 127.0.0.1:9290 --p2p.laddr </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">0.0.0.0:36656</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;"> --minimum-gas-prices=</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">0.025stake</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;"> --rollkit.da_address </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">http://localhost:7980</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart-rollup.sh</span></span></code></pre></div><h2 id="_11-starting-the-chain" tabindex="-1">11. Starting the chain <a class="header-anchor" href="#_11-starting-the-chain" aria-label="Permalink to &quot;11. Starting the chain&quot;">​</a></h2><p>Finally, start the chain with the following command:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rollkit.aggregator</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rpc.laddr</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tcp://127.0.0.1:36657</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--grpc.address</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">127.0</span><span style="color:#C3E88D;">.0.1:9290</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--p2p.laddr</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.0.0.0:36656</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--minimum-gas-prices=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.025stake</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rollkit.da_address</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://localhost:7980</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2><p>By following these steps, you will set up the genesis for your rollup, initialize the validator, add a genesis account, and start the chain on a local data availability network (DA). This guide provides a basic framework for configuring and starting your rollup using the Rollkit CLI. Make sure <code>rollkit.toml</code> is present in the root of your rollup directory, and use the <code>rollkit</code> command for all operations.</p>`,40),t=[l];function p(r,i,c,y,d,C){return a(),n("div",null,t)}const u=s(o,[["render",p]]);export{D as __pageData,u as default};
