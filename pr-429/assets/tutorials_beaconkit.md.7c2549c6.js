import{c as n}from"./chunks/constants.1b8e7bd8.js";import{o,c as l,k as s,t as e,l as p,X as a}from"./chunks/framework.5ad35515.js";const t=a('<h1 id="building-a-sovereign-rollup-with-beaconkit-and-rollkit" tabindex="-1">Building a Sovereign Rollup with BeaconKit and Rollkit <a class="header-anchor" href="#building-a-sovereign-rollup-with-beaconkit-and-rollkit" aria-label="Permalink to &quot;Building a Sovereign Rollup with BeaconKit and Rollkit&quot;">​</a></h1><p><img src="https://camo.githubusercontent.com/8aaae79e171969a2a9c950582d512cd1e3746e67d3aea6410afc04e9b6cb8055/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6475763067343032792f696d6167652f75706c6f61642f76313731383033343331322f426561636f6e4b697442616e6e65722e706e67" alt="beaconkit"></p><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>This tutorial guides developers through the process of building and running a sovereign rollup using BeaconKit and Rollkit. BeaconKit is a modular framework for building EVM-based consensus clients, while Rollkit is a modular framework for building sovereign rollups. By combining these tools, you can create your own customizable rollup chain using the Ethereum Virtual Machine (EVM).</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><p>Before you begin, ensure you have the following software installed on your machine:</p><h3 id="rollkit" tabindex="-1">Rollkit <a class="header-anchor" href="#rollkit" aria-label="Permalink to &quot;Rollkit&quot;">​</a></h3><p><a href="https://rollkit.dev/" target="_blank" rel="noreferrer">Rollkit</a> is a modular framework for sovereign rollups. Follow our <a href="https://rollkit.dev/tutorials/quick-start#%F0%9F%93%A6-install-rollkit-cli" target="_blank" rel="noreferrer">Quick Start Guide</a> to walk through the installation process. The installation script will install the Rollkit CLI, Golang, and jq if they are not already present on your machine.</p><h3 id="docker" tabindex="-1">Docker <a class="header-anchor" href="#docker" aria-label="Permalink to &quot;Docker&quot;">​</a></h3><p><a href="https://www.docker.com/desktop/install/linux-install/" target="_blank" rel="noreferrer">Docker</a> is essential for running containerized applications. Follow the provided link to install Docker on your system.</p><h2 id="run-local-da-node" tabindex="-1">Run a local Data Availability (DA) node <a class="header-anchor" href="#run-local-da-node" aria-label="Permalink to &quot;Run a local Data Availability (DA) node {#run-local-da-node}&quot;">​</a></h2><p>First, set up a local data availability network node:</p>',12),c={class:"language-bash"},r=s("button",{title:"Copy Code",class:"copy"},null,-1),C=s("span",{class:"lang"},"bash",-1),y={class:"shiki material-theme-palenight"},A={class:"line"},D=a('<span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> $HOME </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-sSL</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://rollkit.dev/install-local-da.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span>',16),i={style:{color:"#C3E88D"}},d=a(`<p>This script builds and runs a DA node, which will listen on port <code>7980</code>.</p><h2 id="clone-the-repo" tabindex="-1">Clone the BeaconKit repository <a class="header-anchor" href="#clone-the-repo" aria-label="Permalink to &quot;Clone the BeaconKit repository {#clone-the-repo}&quot;">​</a></h2><p>Clone the BeaconKit repository and switch to the Rollkit branch:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> $HOME</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/rollkit/beacon-kit.git</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">beacon-kit</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rollkit</span></span></code></pre></div><h2 id="start-go-ethereum-client" tabindex="-1">Start the Go Ethereum (Geth) client <a class="header-anchor" href="#start-go-ethereum-client" aria-label="Permalink to &quot;Start the Go Ethereum (Geth) client {#start-go-ethereum-client}&quot;">​</a></h2><p>Start local ephemeral Go Ethereum client to provide the execution layer:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> $HOME</span><span style="color:#C3E88D;">/beacon-kit</span></span>
<span class="line"><span style="color:#FFCB6B;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start-geth</span></span></code></pre></div><p>Notice within logs indicating that your Geth client is running the RPC server is listening on port <code>8545</code>. You will need that port to deploy and interact with smart contracts on the BeaconKit EVM.</p><h2 id="build-and-run-beaconkit-node" tabindex="-1">Build and run the BeaconKit node <a class="header-anchor" href="#build-and-run-beaconkit-node" aria-label="Permalink to &quot;Build and run the BeaconKit node {#build-and-run-beaconkit-node}&quot;">​</a></h2><p>Open a new terminal and run:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> $HOME</span><span style="color:#C3E88D;">/beacon-kit</span></span>
<span class="line"><span style="color:#FFCB6B;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span></span></code></pre></div><p>This command builds, configures, and starts an ephemeral <code>beacond</code> node as a Rollkit sequencer.</p><p>You should now see output indicating that your Rollkit node is running, with log messages about creating and publishing blocks, computing state roots, and other node activities:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">...</span></span>
<span class="line"><span style="color:#FFCB6B;">11:45AM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">indexed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">events</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">height=</span><span style="color:#F78C6C;">39</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=txindex</span></span>
<span class="line"><span style="color:#FFCB6B;">11:45AM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Creating</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">publishing</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">height=</span><span style="color:#F78C6C;">40</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span></span>
<span class="line"><span style="color:#FFCB6B;">11:45AM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">requesting</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">beacon</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">assembly</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">🙈</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service=validator</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">slot=</span><span style="color:#F78C6C;">40</span></span>
<span class="line"><span style="color:#FFCB6B;">11:45AM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">payload</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">retrieved</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">local</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">builder</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">🏗️</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">for_slot=</span><span style="color:#F78C6C;">40</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">num_blobs=</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">override_builder=</span><span style="color:#89DDFF;">false</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">parent_hash=</span><span style="color:#F78C6C;">0x88081d5e4c48de2f82464f2c8b4b46df8892fe921e5e9b13113ed2a62081d843</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">payload_block_hash=</span><span style="color:#F78C6C;">0x2ff9329ffecc7f395cb72acb9fd81a6085e5d75101ab14b508f6418fbcd7d0b4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service=payload-builder</span></span>
<span class="line"><span style="color:#FFCB6B;">11:45AM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">computing</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">state</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">🌲</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service=validator</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">slot=</span><span style="color:#F78C6C;">40</span></span>
<span class="line"><span style="color:#FFCB6B;">11:45AM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">state</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">computed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">💻</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">module=server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service=validator</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">slot=</span><span style="color:#F78C6C;">40</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">state_root=</span><span style="color:#F78C6C;">0x5f75afde5c6a596fa11c17e8c60ca291ffb31ae5c9a40392e0ceb4d45ab42037</span></span>
<span class="line"><span style="color:#FFCB6B;">11:45AM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">beacon</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">successfully</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">built</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">🛠️</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">duration=</span><span style="color:#F78C6C;">46.93036</span><span style="color:#C3E88D;">ms</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service=validator</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">slot=</span><span style="color:#F78C6C;">40</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">state_root=</span><span style="color:#F78C6C;">0x5f75afde5c6a596fa11c17e8c60ca291ffb31ae5c9a40392e0ceb4d45ab42037</span></span>
<span class="line"><span style="color:#FFCB6B;">11:45AM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">received</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">proposal</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">with</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">beacon_block=</span><span style="color:#89DDFF;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">blob_sidecars=</span><span style="color:#89DDFF;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=baseapp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service=prepare-proposal</span></span>
<span class="line"><span style="color:#FFCB6B;">11:45AM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">no</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">blob</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sidecars</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">verify,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">skipping</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">verifier</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">🧢</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service=blockchain</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">slot=</span><span style="color:#F78C6C;">0x28</span></span>
<span class="line"><span style="color:#FFCB6B;">11:45AM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">received</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">proposal</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">with</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">beacon_block=</span><span style="color:#89DDFF;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">blob_sidecars=</span><span style="color:#89DDFF;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=baseapp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service=prepare-proposal</span></span>
<span class="line"><span style="color:#FFCB6B;">11:45AM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">no</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">blob</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sidecars</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">verify,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">skipping</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">verifier</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">🧢</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service=blockchain</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">slot=</span><span style="color:#F78C6C;">0x28</span></span>
<span class="line"><span style="color:#FFCB6B;">11:45AM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">received</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">incoming</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">beacon</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">📫</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service=blockchain</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">state_root=</span><span style="color:#F78C6C;">0x5f75afde5c6a596fa11c17e8c60ca291ffb31ae5c9a40392e0ceb4d45ab42037</span></span>
<span class="line"><span style="color:#FFCB6B;">11:45AM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">calling</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">payload</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is_optimistic=</span><span style="color:#89DDFF;">false</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">payload_block_hash=</span><span style="color:#F78C6C;">0x2ff9329ffecc7f395cb72acb9fd81a6085e5d75101ab14b508f6418fbcd7d0b4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">payload_parent_block_hash=</span><span style="color:#F78C6C;">0x88081d5e4c48de2f82464f2c8b4b46df8892fe921e5e9b13113ed2a62081d843</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service=execution-engine</span></span>
<span class="line"><span style="color:#FFCB6B;">11:45AM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">state</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">verification</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">succeeded</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">accepting</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">incoming</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">beacon</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">🏎️</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service=blockchain</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">state_root=</span><span style="color:#F78C6C;">0x5f75afde5c6a596fa11c17e8c60ca291ffb31ae5c9a40392e0ceb4d45ab42037</span></span>
<span class="line"><span style="color:#FFCB6B;">11:45AM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">optimistically</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">triggering</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">payload</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">next</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">slot</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">🛩️</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">module=server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">next_slot=</span><span style="color:#F78C6C;">41</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service=blockchain</span></span>
<span class="line"><span style="color:#FFCB6B;">11:45AM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">notifying</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">forkchoice</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">finalized_eth1_hash=</span><span style="color:#F78C6C;">0x88081d5e4c48de2f82464f2c8b4b46df8892fe921e5e9b13113ed2a62081d843</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">has_attributes=</span><span style="color:#89DDFF;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">head_eth1_hash=</span><span style="color:#F78C6C;">0x2ff9329ffecc7f395cb72acb9fd81a6085e5d75101ab14b508f6418fbcd7d0b4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">safe_eth1_hash=</span><span style="color:#F78C6C;">0x88081d5e4c48de2f82464f2c8b4b46df8892fe921e5e9b13113ed2a62081d843</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service=execution-engine</span></span>
<span class="line"><span style="color:#FFCB6B;">11:45AM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">WRN</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">suggested</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fee</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">recipient</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">configured</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">🔆</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fee-recipent=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0x000000...000000 (20B)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service=engine.client</span></span>
<span class="line"><span style="color:#FFCB6B;">11:45AM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">calling</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">payload</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is_optimistic=</span><span style="color:#89DDFF;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">payload_block_hash=</span><span style="color:#F78C6C;">0x2ff9329ffecc7f395cb72acb9fd81a6085e5d75101ab14b508f6418fbcd7d0b4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">payload_parent_block_hash=</span><span style="color:#F78C6C;">0x88081d5e4c48de2f82464f2c8b4b46df8892fe921e5e9b13113ed2a62081d843</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service=execution-engine</span></span>
<span class="line"><span style="color:#FFCB6B;">11:45AM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bob</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">builder</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">can</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">we</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">forkchoice</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">it?</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bob</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">builder</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">yes</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">we</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">can</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">🚧</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for_slot=</span><span style="color:#F78C6C;">41</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">head_eth1_hash=</span><span style="color:#F78C6C;">0x2ff9329ffecc7f395cb72acb9fd81a6085e5d75101ab14b508f6418fbcd7d0b4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">parent_block_root=</span><span style="color:#F78C6C;">0x9676648a3c292540562b082c20c4b6663986182f5d8733f84fb3f1445b66a4ce</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">payload_id=</span><span style="color:#F78C6C;">0x03bc2b46dc4bef55</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service=payload-builder</span></span>
<span class="line"><span style="color:#FFCB6B;">11:45AM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">finalized</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block_app_hash=</span><span style="color:#F78C6C;">004216246</span><span style="color:#C3E88D;">AE7750D578035EA1C6CD13330BD91A0C3FDD628F96D514ACF691BE5</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">height=</span><span style="color:#F78C6C;">40</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">num_txs_res=</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">num_val_updates=</span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#FFCB6B;">11:45AM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">executed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app_hash=</span><span style="color:#F78C6C;">004216246</span><span style="color:#C3E88D;">AE7750D578035EA1C6CD13330BD91A0C3FDD628F96D514ACF691BE5</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">height=</span><span style="color:#F78C6C;">40</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span></span>
<span class="line"><span style="color:#FFCB6B;">11:45AM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">notifying</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">forkchoice</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">finalized_eth1_hash=</span><span style="color:#F78C6C;">0x88081d5e4c48de2f82464f2c8b4b46df8892fe921e5e9b13113ed2a62081d843</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">has_attributes=</span><span style="color:#89DDFF;">false</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">head_eth1_hash=</span><span style="color:#F78C6C;">0x2ff9329ffecc7f395cb72acb9fd81a6085e5d75101ab14b508f6418fbcd7d0b4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">safe_eth1_hash=</span><span style="color:#F78C6C;">0x88081d5e4c48de2f82464f2c8b4b46df8892fe921e5e9b13113ed2a62081d843</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service=execution-engine</span></span>
<span class="line"><span style="color:#FFCB6B;">11:45AM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">indexed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">events</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">height=</span><span style="color:#F78C6C;">40</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=txindex</span></span>
<span class="line"><span style="color:#FFCB6B;">11:45AM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">successfully</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">refreshed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">engine</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">auth</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">token</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service=engine.client</span></span>
<span class="line"><span style="color:#FFCB6B;">11:45AM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Creating</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">publishing</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">height=</span><span style="color:#F78C6C;">41</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span></span>
<span class="line"><span style="color:#82AAFF;">...</span></span></code></pre></div><h2 id="smart-contract-deployment-and-interaction" tabindex="-1">Smart Contract Deployment and Interaction <a class="header-anchor" href="#smart-contract-deployment-and-interaction" aria-label="Permalink to &quot;Smart Contract Deployment and Interaction&quot;">​</a></h2><p>To deploy and interact with smart contracts on the BeaconKit EVM, you can use the tools you are already familiar with, follow our <a href="/docs-preview/pr-429/tutorials/evm-contract-interaction">Contract interaction tutorial</a> to get a hands on experience.</p><p>To fund your account with some tokens, modify a Geth genesis file and restart the Geth client: Open <code>$HOME/beacon-kit/testing/files/eth-genesis.json</code>, and add your account address and balance:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight has-focused-lines"><code><span class="line"><span style="color:#FFCB6B;">&quot;nonce&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0x0000000000000000</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#FFCB6B;">&quot;timestamp&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0x0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#FFCB6B;">&quot;alloc&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&quot;&lt;your address&gt;&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;balance&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0x12345000000000000000000</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">  }, </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&quot;0x20f33ce90a13a4b5e7697e3544c3083b8f8a51d4&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;balance&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0x123450000000000000000</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span></code></pre></div><h2 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion&quot;">​</a></h2><p>Congratulations! You&#39;ve successfully set up a BeaconKit node using Rollkit, creating your own sovereign rollup. This setup demonstrates the basic functionality of combining BeaconKit with Rollkit.</p><h2 id="next-steps" tabindex="-1">Next Steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next Steps&quot;">​</a></h2><p>To further customize your rollup chain:</p><ol><li>Experiment with different Rollkit settings to optimize performance.</li><li>Consider implementing custom smart contracts on your rollup.</li><li>Test the scalability and performance of your rollup under various conditions.</li></ol><h2 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-label="Permalink to &quot;Troubleshooting&quot;">​</a></h2><p>If you encounter issues:</p><ul><li>Ensure all prerequisites are correctly installed and up to date.</li><li>Check that your local DA node is running correctly on port 7980.</li><li>Verify that the Geth client is properly initialized and running.</li><li>Review the BeaconKit logs for any specific error messages.</li></ul><p>For more detailed information and updates, visit the <a href="https://github.com/rollkit/beacon-kit" target="_blank" rel="noreferrer">BeaconKit GitHub repository</a> and the <a href="https://rollkit.dev/" target="_blank" rel="noreferrer">Rollkit documentation</a>.</p>`,27),g=JSON.parse('{"title":"Building a Sovereign Rollup with BeaconKit and Rollkit","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Building a Sovereign Rollup with BeaconKit and Rollkit | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"tutorials/beaconkit.md","filePath":"tutorials/beaconkit.md","lastUpdated":1723747218000}'),u={name:"tutorials/beaconkit.md"},m=Object.assign(u,{setup(h){return(E,b)=>(o(),l("div",null,[t,s("div",c,[r,C,s("pre",y,[s("code",null,[s("span",A,[D,s("span",i,e(p(n).localDALatestTag),1)])])])]),d]))}});export{g as __pageData,m as default};
