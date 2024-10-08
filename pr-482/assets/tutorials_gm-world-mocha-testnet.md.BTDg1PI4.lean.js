import{_ as e}from"./chunks/gm.Xv0teumn.js";import{C as t}from"./chunks/callout.CGIXx5s9.js";import{c as n,a3 as i,j as a,G as l,o as h}from"./chunks/framework.9b01A9Fo.js";/* empty css                                                                       */const p={class:"tip custom-block"},y=JSON.parse('{"title":"GM world rollup: Part 2","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"GM world rollup: Part 2 | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"tutorials/gm-world-mocha-testnet.md","filePath":"tutorials/gm-world-mocha-testnet.md","lastUpdated":1728395792000}'),r={name:"tutorials/gm-world-mocha-testnet.md"},E=Object.assign(r,{setup(o){return(k,s)=>(h(),n("div",null,[s[1]||(s[1]=i('<h1 id="gm-world-rollup-part-2" tabindex="-1">GM world rollup: Part 2 <a class="header-anchor" href="#gm-world-rollup-part-2" aria-label="Permalink to &quot;GM world rollup: Part 2&quot;">​</a></h1><h2 id="deploying-to-a-celestia-testnet" tabindex="-1">Deploying to a Celestia testnet <a class="header-anchor" href="#deploying-to-a-celestia-testnet" aria-label="Permalink to &quot;Deploying to a Celestia testnet&quot;">​</a></h2><p>This tutorial is part 2 of the GM world rollup tutorials. In this tutorial, it is expected that you&#39;ve completed <a href="./gm-world">part 1</a> of the tutorial and are familiar with running a local rollup devnet.</p><p>The script for this tutorial is built for Celestia&#39;s <a href="https://docs.celestia.org/nodes/mocha-devnet" target="_blank" rel="noreferrer">Mocha testnet</a>.</p>',4)),a("div",p,[s[0]||(s[0]=a("p",{class:"custom-block-title"},"TIP",-1)),l(t)]),s[2]||(s[2]=i(`<h3 id="run-celestia-node" tabindex="-1">🪶 Run a Celestia light node <a class="header-anchor" href="#run-celestia-node" aria-label="Permalink to &quot;🪶 Run a Celestia light node {#run-celestia-node}&quot;">​</a></h3><p>Fully sync and fund a light node on Mocha testnet (<code>mocha-4</code>). Follow instructions to install and start your Celestia data availability layer light node selecting the Mocha network. You can <a href="https://docs.celestia.org/nodes/light-node" target="_blank" rel="noreferrer">find instructions to install and run the node</a>. After the node is synced, stop the light node.</p><h3 id="start-your-sovereign-rollup" tabindex="-1">🟢 Start your sovereign rollup <a class="header-anchor" href="#start-your-sovereign-rollup" aria-label="Permalink to &quot;🟢 Start your sovereign rollup {#start-your-sovereign-rollup}&quot;">​</a></h3><p>We have <a href="https://github.com/rollkit/docs/blob/main/public/gm/init-mocha-testnet.sh" target="_blank" rel="noreferrer">a handy <code>init-mocha-testnet.sh</code> found in this repo</a>.</p><p>We can copy it over to our directory with the following commands:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># From inside the \`gm\` directory</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://rollkit.dev/gm/init-mocha-testnet.sh</span></span></code></pre></div><p>This copies over our <code>init-mocha-testnet.sh</code> script to initialize our <code>gm</code> rollup.</p><p>You can view the contents of the script to see how we initialize the gm rollup.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>init-mocha-testnet.sh</code> script uses a default namespace <code>00000000000000000000000000000000000000000008e5f679bf7116cb</code>. You can set your own by using a command similar to this (or, you could get creative 😎):</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">openssl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rand</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -hex</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span></span></code></pre></div><p>Replace the last 10 characters in <code>00000000000000000000000000000000000000000008e5f679bf7116cb</code> with the newly generated 10 characters.</p><p><a href="https://celestiaorg.github.io/celestia-app/specs/namespace.html" target="_blank" rel="noreferrer">Learn more about namespaces</a> .</p></div><h4 id="clear-previous-chain-history" tabindex="-1">Clear previous chain history <a class="header-anchor" href="#clear-previous-chain-history" aria-label="Permalink to &quot;Clear previous chain history&quot;">​</a></h4><p>Before starting the rollup, we need to remove the old project folders:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/go/bin/gmd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.gm</span></span></code></pre></div><h4 id="start-the-new-chain" tabindex="-1">Start the new chain <a class="header-anchor" href="#start-the-new-chain" aria-label="Permalink to &quot;Start the new chain {#start-the-new-chain}&quot;">​</a></h4><p>Now, you can initialize the script with the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init-mocha-testnet.sh</span></span></code></pre></div><p>View your rollup by <a href="https://docs.celestia.org/nodes/mocha-testnet#explorers" target="_blank" rel="noreferrer">finding your namespace or account an Mocha devnet explorer</a>.</p><p>With that, we have kickstarted our second <code>gmd</code> rollup!</p><h3 id="optional-restarting-your-rollup" tabindex="-1">Optional: Restarting your rollup <a class="header-anchor" href="#optional-restarting-your-rollup" aria-label="Permalink to &quot;Optional: Restarting your rollup&quot;">​</a></h3><p>If you&#39;d like to stop and restart your rollup for development purposes, you&#39;re in luck!</p><p>When you ran <code>init-mocha-testnet.sh</code>, the script generated a script called <code>restart-testnet.sh</code> in the <code>$HOME/gm</code> directory for you to use to restart your rollup.</p><p>In order to do so, restart <code>celestia-da</code> and then run:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart-testnet.sh</span></span></code></pre></div><h3 id="optional-add-a-gm-world-query" tabindex="-1">Optional: Add a &quot;GM world&quot; query <a class="header-anchor" href="#optional-add-a-gm-world-query" aria-label="Permalink to &quot;Optional: Add a &quot;GM world&quot; query&quot;">​</a></h3><h4 id="say-gm-world" tabindex="-1">💬 Say gm world <a class="header-anchor" href="#say-gm-world" aria-label="Permalink to &quot;💬 Say gm world {#say-gm-world}&quot;">​</a></h4><p>Now, we&#39;re going to get our blockchain to say <code>gm world!</code> - in order to do so you need to make the following changes:</p><ul><li>Modify a protocol buffer file</li><li>Create a keeper query function that returns data</li></ul><p>Protocol buffer files contain proto RPC calls that define Cosmos SDK queries and message handlers, and proto messages that define Cosmos SDK types. The RPC calls are also responsible for exposing an HTTP API.</p><p>The <code>Keeper</code> is required for each Cosmos SDK module and is an abstraction for modifying the state of the blockchain. Keeper functions allow us to query or write to the state.</p><h5 id="create-first-query" tabindex="-1">✋ Create your first query <a class="header-anchor" href="#create-first-query" aria-label="Permalink to &quot;✋ Create your first query {#create-first-query}&quot;">​</a></h5><p><strong>Open a new terminal instance that is not the same that you started the chain in.</strong></p><p>In your new terminal, <code>cd</code> into the <code>gm</code> directory and run this command to create the <code>gm</code> query:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ignite</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> scaffold</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> query</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --response</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> text</span></span></code></pre></div><p>Response:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">modify</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> proto/gm/gm/query.proto</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">modify</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> x/gm/client/cli/query.go</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> x/gm/client/cli/query_gm.go</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> x/gm/keeper/query_gm.go</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">🎉</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Created</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> query</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span></span></code></pre></div><p>What just happened? <code>query</code> accepts the name of the query (<code>gm</code>), an optional list of request parameters (empty in this tutorial), and an optional comma-separated list of response field with a <code>--response</code> flag (<code>text</code> in this tutorial).</p><p>Navigate to the <code>gm/proto/gm/gm/query.proto</code> file, you’ll see that <code>Gm</code> RPC has been added to the <code>Query</code> service:</p><div class="language-proto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">proto</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">service</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Query</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  rpc</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Params</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">QueryParamsRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">returns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">QueryParamsResponse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    option</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> (google.api.http).get</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/gm/gm/params&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> rpc</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Gm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">QueryGmRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">returns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">QueryGmResponse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  option</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> (google.api.http).get</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/gm/gm/gm&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>The <code>Gm</code> RPC for the <code>Query</code> service:</p><ul><li>is responsible for returning a <code>text</code> string</li><li>Accepts request parameters (<code>QueryGmRequest</code>)</li><li>Returns response of type <code>QueryGmResponse</code></li><li>The <code>option</code> defines the endpoint that is used by gRPC to generate an HTTP API</li></ul><h5 id="query-request-and-response-types" tabindex="-1">📨 Query request and response types <a class="header-anchor" href="#query-request-and-response-types" aria-label="Permalink to &quot;📨 Query request and response types {#query-request-and-response-types}&quot;">​</a></h5><p>In the same file, we will find:</p><ul><li><code>QueryGmRequest</code> is empty because it does not require parameters</li><li><code>QueryGmResponse</code> contains <code>text</code> that is returned from the chain</li></ul><div class="language-proto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">proto</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">message</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> QueryGmRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">message</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> QueryGmResponse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h5 id="gm-keeper-function" tabindex="-1">👋 Gm keeper function <a class="header-anchor" href="#gm-keeper-function" aria-label="Permalink to &quot;👋 Gm keeper function {#gm-keeper-function}&quot;">​</a></h5><p>The <code>gm/x/gm/keeper/query_gm.go</code> file contains the <code>Gm</code> keeper function that handles the query and returns data.</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">func</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">k </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Keeper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Gm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">goCtx</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">req</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">types</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">QueryGmRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">types</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">QueryGmResponse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> req </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, status.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(codes.InvalidArgument, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;invalid request&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	ctx </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sdk.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">UnwrapSDKContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(goCtx)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	_ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ctx</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">types</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">QueryGmResponse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">nil</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>The <code>Gm</code> function performs the following actions:</p><ul><li>Makes a basic check on the request and throws an error if it’s <code>nil</code></li><li>Stores context in a <code>ctx</code> variable that contains information about the environment of the request</li><li>Returns a response of type <code>QueryGmResponse</code></li></ul><p>Currently, the response is empty and you&#39;ll need to update the keeper function.</p><p>Our <code>query.proto</code> file defines that the response accepts <code>text</code>. Use your text editor to modify the keeper function in <code>gm/x/gm/keeper/query_gm.go</code> .</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">func</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">k </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Keeper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Gm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">goCtx</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">req</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">types</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">QueryGmRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">types</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">QueryGmResponse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> req </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, status.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(codes.InvalidArgument, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;invalid request&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	ctx </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sdk.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">UnwrapSDKContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(goCtx)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	_ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ctx</span></span>
<span class="line has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">types</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">QueryGmResponse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{Text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;gm world!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">nil</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>The <code>query</code> command has also scaffolded <code>x/gm/client/cli/query_gm.go</code> that implements a CLI equivalent of the gm query and mounted this command in <code>x/gm/client/cli/query.go</code>.</p><h5 id="restart-your-rollup" tabindex="-1">Restart your rollup <a class="header-anchor" href="#restart-your-rollup" aria-label="Permalink to &quot;Restart your rollup&quot;">​</a></h5><p>Restart your rollup by running the <code>init-mocha-testnet.sh</code> script again.</p><h5 id="query-your-rollup" tabindex="-1">Query your rollup <a class="header-anchor" href="#query-your-rollup" aria-label="Permalink to &quot;Query your rollup&quot;">​</a></h5><p>In a separate window, run the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gmd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> q</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gm</span></span></code></pre></div><p>We will get the following JSON response:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">text:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> world!</span></span></code></pre></div><p><img src="`+e+'" alt="gm.png"></p><h2 id="next-steps" tabindex="-1">Next steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next steps&quot;">​</a></h2><p>Congratulations 🎉 you&#39;ve successfully built your first rollup and queried it!</p><p>In the next tutorial, you&#39;ll learn how to post data to Celestia&#39;s Mainnet Beta.</p><p>If you&#39;re interested in setting up a full node alongside your sequencer, see the <a href="/docs-preview/pr-482/guides/full-and-sequencer-node">Full and sequencer node rollup setup</a> tutorial.</p>',64))]))}});export{y as __pageData,E as default};
