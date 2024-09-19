import{c as t}from"./chunks/constants.CQ_TuUI4.js";import{c as h,a3 as a,j as s,t as n,k as e,o as l}from"./chunks/framework.DF1XKy7v.js";const k={class:"language-bash vp-adaptive-theme"},p={class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},F={class:"line"},r={style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},y=JSON.parse('{"title":"Building a Sovereign Rollup with BeaconKit and Rollkit","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Building a Sovereign Rollup with BeaconKit and Rollkit | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"tutorials/beaconkit.md","filePath":"tutorials/beaconkit.md","lastUpdated":1726752080000}'),d={name:"tutorials/beaconkit.md"},B=Object.assign(d,{setup(o){return(g,i)=>(l(),h("div",null,[i[3]||(i[3]=a('<h1 id="building-a-sovereign-rollup-with-beaconkit-and-rollkit" tabindex="-1">Building a Sovereign Rollup with BeaconKit and Rollkit <a class="header-anchor" href="#building-a-sovereign-rollup-with-beaconkit-and-rollkit" aria-label="Permalink to &quot;Building a Sovereign Rollup with BeaconKit and Rollkit&quot;">​</a></h1><p><img src="https://camo.githubusercontent.com/b4a9b2b1d1536bb3dbbc32a5f3885b02dd1da8cdf9e34a160830d00ebee9120f/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6475763067343032792f696d6167652f75706c6f61642f76313731383033343331322f426561636f6e4b697442616e6e65722e706e67" alt="beaconkit"></p><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>This tutorial guides developers through the process of building and running a sovereign rollup using BeaconKit and Rollkit. BeaconKit is a modular framework for building EVM-based consensus clients, while Rollkit is a modular framework for building sovereign rollups. By combining these tools, you can create your own customizable rollup chain using the Ethereum Virtual Machine (EVM).</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><p>Before you begin, ensure you have the following software installed on your machine:</p><h3 id="rollkit" tabindex="-1">Rollkit <a class="header-anchor" href="#rollkit" aria-label="Permalink to &quot;Rollkit&quot;">​</a></h3><p><a href="https://rollkit.dev/" target="_blank" rel="noreferrer">Rollkit</a> is a modular framework for sovereign rollups. Follow our <a href="https://rollkit.dev/tutorials/quick-start#%F0%9F%93%A6-install-rollkit-cli" target="_blank" rel="noreferrer">Quick Start Guide</a> to walk through the installation process. The installation script will install the Rollkit CLI, Golang, and jq if they are not already present on your machine.</p><h3 id="docker" tabindex="-1">Docker <a class="header-anchor" href="#docker" aria-label="Permalink to &quot;Docker&quot;">​</a></h3><p><a href="https://www.docker.com/desktop/install/linux-install/" target="_blank" rel="noreferrer">Docker</a> is essential for running containerized applications. Follow the provided link to install Docker on your system.</p><h2 id="run-local-da-node" tabindex="-1">Run a local Data Availability (DA) node <a class="header-anchor" href="#run-local-da-node" aria-label="Permalink to &quot;Run a local Data Availability (DA) node {#run-local-da-node}&quot;">​</a></h2><p>First, set up a local data availability network node:</p>',12)),s("div",k,[i[1]||(i[1]=s("button",{title:"Copy Code",class:"copy"},null,-1)),i[2]||(i[2]=s("span",{class:"lang"},"bash",-1)),s("pre",p,[s("code",null,[s("span",F,[i[0]||(i[0]=a('<span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://rollkit.dev/install-local-da.sh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span>',8)),s("span",r," "+n(e(t).localDALatestTag),1)])])])]),i[4]||(i[4]=a(`<p>This script builds and runs a DA node, which will listen on port <code>7980</code>.</p><h2 id="clone-the-repo" tabindex="-1">Clone the BeaconKit repository <a class="header-anchor" href="#clone-the-repo" aria-label="Permalink to &quot;Clone the BeaconKit repository {#clone-the-repo}&quot;">​</a></h2><p>Clone the BeaconKit repository and switch to the Rollkit branch:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/rollkit/beacon-kit.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> beacon-kit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rollkit</span></span></code></pre></div><h2 id="start-go-ethereum-client" tabindex="-1">Start the Go Ethereum (Geth) client <a class="header-anchor" href="#start-go-ethereum-client" aria-label="Permalink to &quot;Start the Go Ethereum (Geth) client {#start-go-ethereum-client}&quot;">​</a></h2><p>Start local ephemeral Go Ethereum client to provide the execution layer:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/beacon-kit</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start-geth</span></span></code></pre></div><p>Notice within logs indicating that your Geth client is running the RPC server is listening on port <code>8545</code>. You will need that port to deploy and interact with smart contracts on the BeaconKit EVM.</p><h2 id="build-and-run-beaconkit-node" tabindex="-1">Build and run the BeaconKit node <a class="header-anchor" href="#build-and-run-beaconkit-node" aria-label="Permalink to &quot;Build and run the BeaconKit node {#build-and-run-beaconkit-node}&quot;">​</a></h2><p>Open a new terminal and run:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/beacon-kit</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span></code></pre></div><p>This command builds, configures, and starts an ephemeral <code>beacond</code> node as a Rollkit sequencer.</p><p>You should now see output indicating that your Rollkit node is running, with log messages about creating and publishing blocks, computing state roots, and other node activities:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">11:45AM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> indexed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> events</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> height=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">39</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=txindex</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">11:45AM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Creating</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> publishing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> height=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=BlockManager</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">11:45AM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requesting</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> beacon</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> assembly</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 🙈</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service=validator</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> slot=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">11:45AM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> payload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> retrieved</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> local</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> builder</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 🏗️</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  for_slot=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> num_blobs=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> override_builder=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> parent_hash=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x88081d5e4c48de2f82464f2c8b4b46df8892fe921e5e9b13113ed2a62081d843</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> payload_block_hash=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x2ff9329ffecc7f395cb72acb9fd81a6085e5d75101ab14b508f6418fbcd7d0b4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service=payload-builder</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">11:45AM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> computing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> state</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 🌲</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service=validator</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> slot=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">11:45AM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> state</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> computed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 💻</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  module=server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service=validator</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> slot=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> state_root=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x5f75afde5c6a596fa11c17e8c60ca291ffb31ae5c9a40392e0ceb4d45ab42037</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">11:45AM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> beacon</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> successfully</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> built</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 🛠️</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  duration=46.93036ms</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service=validator</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> slot=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> state_root=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x5f75afde5c6a596fa11c17e8c60ca291ffb31ae5c9a40392e0ceb4d45ab42037</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">11:45AM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> received</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> proposal</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> with</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> beacon_block=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> blob_sidecars=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=baseapp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service=prepare-proposal</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">11:45AM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> blob</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sidecars</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> verify,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> skipping</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> verifier</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 🧢</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service=blockchain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> slot=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x28</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">11:45AM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> received</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> proposal</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> with</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> beacon_block=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> blob_sidecars=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=baseapp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service=prepare-proposal</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">11:45AM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> blob</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sidecars</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> verify,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> skipping</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> verifier</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 🧢</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service=blockchain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> slot=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x28</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">11:45AM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> received</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> incoming</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> beacon</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 📫</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service=blockchain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> state_root=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x5f75afde5c6a596fa11c17e8c60ca291ffb31ae5c9a40392e0ceb4d45ab42037</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">11:45AM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> calling</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> payload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is_optimistic=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> payload_block_hash=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x2ff9329ffecc7f395cb72acb9fd81a6085e5d75101ab14b508f6418fbcd7d0b4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> payload_parent_block_hash=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x88081d5e4c48de2f82464f2c8b4b46df8892fe921e5e9b13113ed2a62081d843</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service=execution-engine</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">11:45AM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> state</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> verification</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> succeeded</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> accepting</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> incoming</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> beacon</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 🏎️</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service=blockchain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> state_root=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x5f75afde5c6a596fa11c17e8c60ca291ffb31ae5c9a40392e0ceb4d45ab42037</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">11:45AM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> optimistically</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> triggering</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> payload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> next</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> slot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 🛩️</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  module=server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> next_slot=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">41</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service=blockchain</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">11:45AM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> notifying</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> forkchoice</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  finalized_eth1_hash=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x88081d5e4c48de2f82464f2c8b4b46df8892fe921e5e9b13113ed2a62081d843</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> has_attributes=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> head_eth1_hash=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x2ff9329ffecc7f395cb72acb9fd81a6085e5d75101ab14b508f6418fbcd7d0b4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> safe_eth1_hash=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x88081d5e4c48de2f82464f2c8b4b46df8892fe921e5e9b13113ed2a62081d843</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service=execution-engine</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">11:45AM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> WRN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> suggested</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fee</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> recipient</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> not</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> configured</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 🔆</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fee-recipent=&quot;0x000000...000000 (20B)&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service=engine.client</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">11:45AM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> calling</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> payload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is_optimistic=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> payload_block_hash=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x2ff9329ffecc7f395cb72acb9fd81a6085e5d75101ab14b508f6418fbcd7d0b4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> payload_parent_block_hash=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x88081d5e4c48de2f82464f2c8b4b46df8892fe921e5e9b13113ed2a62081d843</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service=execution-engine</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">11:45AM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bob</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> builder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">can</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> we</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> forkchoice</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> it?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bob</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> builder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> we</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> can</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 🚧</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for_slot=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">41</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> head_eth1_hash=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x2ff9329ffecc7f395cb72acb9fd81a6085e5d75101ab14b508f6418fbcd7d0b4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> parent_block_root=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x9676648a3c292540562b082c20c4b6663986182f5d8733f84fb3f1445b66a4ce</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> payload_id=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x03bc2b46dc4bef55</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service=payload-builder</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">11:45AM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> finalized</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block_app_hash=004216246AE7750D578035EA1C6CD13330BD91A0C3FDD628F96D514ACF691BE5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> height=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=BlockManager</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> num_txs_res=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> num_val_updates=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">11:45AM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> executed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> app_hash=004216246AE7750D578035EA1C6CD13330BD91A0C3FDD628F96D514ACF691BE5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> height=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=BlockManager</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">11:45AM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> notifying</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> forkchoice</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  finalized_eth1_hash=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x88081d5e4c48de2f82464f2c8b4b46df8892fe921e5e9b13113ed2a62081d843</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> has_attributes=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> head_eth1_hash=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x2ff9329ffecc7f395cb72acb9fd81a6085e5d75101ab14b508f6418fbcd7d0b4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> safe_eth1_hash=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x88081d5e4c48de2f82464f2c8b4b46df8892fe921e5e9b13113ed2a62081d843</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service=execution-engine</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">11:45AM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> indexed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> events</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> height=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=txindex</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">11:45AM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> successfully</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> refreshed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> engine</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> auth</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> token</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service=engine.client</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">11:45AM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Creating</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> publishing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> height=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">41</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=BlockManager</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span></code></pre></div><h2 id="smart-contract-deployment-and-interaction" tabindex="-1">Smart Contract Deployment and Interaction <a class="header-anchor" href="#smart-contract-deployment-and-interaction" aria-label="Permalink to &quot;Smart Contract Deployment and Interaction&quot;">​</a></h2><p>To deploy and interact with smart contracts on the BeaconKit EVM, you can use the tools you are already familiar with, follow our <a href="/docs-preview/pr-462/tutorials/evm-contract-interaction">Contract interaction tutorial</a> to get a hands on experience.</p><p>To fund your account with some tokens, modify a Geth genesis file and restart the Geth client: Open <code>$HOME/beacon-kit/testing/files/eth-genesis.json</code>, and add your account address and balance:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;nonce&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;0x0000000000000000&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;timestamp&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;0x0&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;alloc&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  &quot;&lt;your address&gt;&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [!code </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">focus]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    &quot;balance&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;0x12345000000000000000000&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [!code </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">focus]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }, // [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">code focus]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  &quot;0x20f33ce90a13a4b5e7697e3544c3083b8f8a51d4&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    &quot;balance&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;0x123450000000000000000&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span></code></pre></div><h2 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion&quot;">​</a></h2><p>Congratulations! You&#39;ve successfully set up a BeaconKit node using Rollkit, creating your own sovereign rollup. This setup demonstrates the basic functionality of combining BeaconKit with Rollkit.</p><h2 id="next-steps" tabindex="-1">Next Steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next Steps&quot;">​</a></h2><p>To further customize your rollup chain:</p><ol><li>Experiment with different Rollkit settings to optimize performance.</li><li>Consider implementing custom smart contracts on your rollup.</li><li>Test the scalability and performance of your rollup under various conditions.</li></ol><h2 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-label="Permalink to &quot;Troubleshooting&quot;">​</a></h2><p>If you encounter issues:</p><ul><li>Ensure all prerequisites are correctly installed and up to date.</li><li>Check that your local DA node is running correctly on port 7980.</li><li>Verify that the Geth client is properly initialized and running.</li><li>Review the BeaconKit logs for any specific error messages.</li></ul><p>For more detailed information and updates, visit the <a href="https://github.com/rollkit/beacon-kit" target="_blank" rel="noreferrer">BeaconKit GitHub repository</a> and the <a href="https://rollkit.dev/" target="_blank" rel="noreferrer">Rollkit documentation</a>.</p>`,27))]))}});export{y as __pageData,B as default};
