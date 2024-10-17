import{_ as i,c as a,a3 as n,o as t}from"./chunks/framework.BrXjyq83.js";const c=JSON.parse('{"title":"zkML Rollup Tutorial with Sindri","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"zkML Rollup Tutorial with Sindri | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"guides/zkml.md","filePath":"guides/zkml.md","lastUpdated":1729190828000}'),e={name:"guides/zkml.md"};function l(p,s,r,h,o,k){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="zkml-rollup-tutorial-with-sindri" tabindex="-1">zkML Rollup Tutorial with Sindri <a class="header-anchor" href="#zkml-rollup-tutorial-with-sindri" aria-label="Permalink to &quot;zkML Rollup Tutorial with Sindri&quot;">​</a></h1><h2 id="introduction-code-once-verify-anywhere" tabindex="-1">Introduction - Code Once, Verify Anywhere <a class="header-anchor" href="#introduction-code-once-verify-anywhere" aria-label="Permalink to &quot;Introduction - Code Once, Verify Anywhere&quot;">​</a></h2><p>This guide will show you how to build verifiable machine learning inference into your Rollkit rollup using zero-knowledge proofs generated on <a href="https://sindri.app" target="_blank" rel="noreferrer">Sindri</a>. The rollup will rely on a local Celestia devnet for consensus and ensuring data availability.</p><p>We will focus on using a ZK circuit that incorporates a compact deep neural network model to enable verifiable ML inference. In this guide, we will deploy the circuit on Sindri, obtain a smart contract verifier (automatically generated by Sindri) for that circuit, deploy it on Rollkit, create a proof of ML inference on Sindri, and verify the proof on-chain.</p><p>This approach not only secures the verification process of machine learning models, but also leverages the decentralized security and scalability of Celestia&#39;s architecture.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li>An operational <a href="/docs-preview/pr-489/tutorials/beaconkit">EVM</a> using Rollkit (see next step)</li><li>A <a href="https://sindri.app" target="_blank" rel="noreferrer">Sindri</a> API key, which can be obtained <a href="https://hen4zp9gxq3.typeform.com/to/hJHlUF8c?typeform-source=sindri.app" target="_blank" rel="noreferrer">here</a></li><li>Python 3.10+ installed as well as the <a href="https://sindri.app/docs/reference/sdk/python/" target="_blank" rel="noreferrer">Sindri Python SDK</a> (more information below)</li></ul><h3 id="setting-up-the-polaris-evm-using-rollkit" tabindex="-1">Setting Up the Polaris EVM using Rollkit <a class="header-anchor" href="#setting-up-the-polaris-evm-using-rollkit" aria-label="Permalink to &quot;Setting Up the Polaris EVM using Rollkit&quot;">​</a></h3><p>This walkthrough assumes you started the Polaris EVM using Rollkit and should be interpreted as a direct continuation of this <a href="https://rollkit.dev/tutorials/polaris-evm" target="_blank" rel="noreferrer">Polaris EVM and Rollkit guide</a>.</p><h3 id="installing-the-sindri-python-sdk" tabindex="-1">Installing the Sindri Python SDK <a class="header-anchor" href="#installing-the-sindri-python-sdk" aria-label="Permalink to &quot;Installing the Sindri Python SDK&quot;">​</a></h3><p>Because we&#39;re working with ML, we&#39;re going to build with Sindri&#39;s Python SDK because Python is widely used in ML development. The <a href="https://sindri.app/docs/getting-started/api-sdk/#python-sdk" target="_blank" rel="noreferrer">Sindri Python SDK Quickstart Guide</a> contains installation instructions and a high-level walkthrough of the functionality of this package, but the following will suffice if you have <code>pip</code> installed:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sindri</span></span></code></pre></div><h2 id="deploying-and-proving-a-cool-zkml-circuit-to-sindri" tabindex="-1">Deploying and Proving a Cool zkML Circuit to Sindri <a class="header-anchor" href="#deploying-and-proving-a-cool-zkml-circuit-to-sindri" aria-label="Permalink to &quot;Deploying and Proving a Cool zkML Circuit to Sindri&quot;">​</a></h2><p>For this tutorial, we&#39;ll be working with a pre-built zkML circuit built by Sindri. <em>For a more in-depth description of this circuit and its corresponding ML model&#39;s behavior and design, please see <a href="https://github.com/Sindri-Labs/sindri-resources/tree/main/circuit_tutorials/circom/food_ml/README.md" target="_blank" rel="noreferrer">here</a>.</em></p><h3 id="clone" tabindex="-1">Clone <a class="header-anchor" href="#clone" aria-label="Permalink to &quot;Clone&quot;">​</a></h3><p>Clone the <a href="https://github.com/Sindri-Labs/sindri-resources/tree/main" target="_blank" rel="noreferrer">Sindri Resources</a> GitHub repo.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/Sindri-Labs/sindri-resources.git</span></span></code></pre></div><p>Navigate to the <code>food_ml</code> circuit tutorial directory.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sindri-resources/circuit_tutorials/circom/food_ml/</span></span></code></pre></div><p>Here, you will find a handful of files. The <code>circuit/</code> directory contains the circuit code that we will upload to Sindri. The <code>circuit/sindri.json</code> file is the Sindri manifest for your upload. Within it, you can modify the circuit&#39;s <code>&quot;name&quot;</code> value to whatever you like.</p><h3 id="modify" tabindex="-1">Modify <a class="header-anchor" href="#modify" aria-label="Permalink to &quot;Modify&quot;">​</a></h3><p>Open the <code>compile_and_prove.py</code> script and append the following lines to the very bottom.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Obtain smart contract verifier for our circuit and save it to a file</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">smart_contract_code: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sindri.get_circuit_smart_contract_verifier(circuit_id)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">verifier_code_file: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Verifier.sol&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">with</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(verifier_code_file, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;w&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> f:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    f.write(smart_contract_code)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Smart contract verifier code written to </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">verifier_code_file</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Obtain our proof&#39;s proof+public formatted as calldata for our circuit&#39;s</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># smart contract verifier</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">proof </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sindri.get_proof(proof_id, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">include_smart_contract_calldata</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">calldata_file: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;calldata.txt&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">calldata: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> proof[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;smart_contract_calldata&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Fix formatting so it works with Rollkit</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> json.loads(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">calldata_str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">calldata_objects </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    calldata_objects.append(json.dumps(i).replace(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).replace(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rollkit_calldata_str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot; &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.join(calldata_objects)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Save calldata to file</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">with</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(calldata_file, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;w&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> f:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    f.write(rollkit_calldata_str)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Proof calldata written to </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">calldata_file</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>These additions will allow us to fetch and save the following to files:</p><ul><li>the circuit&#39;s smart contract verifier code that is generated by Sindri when we deployed our circuit</li><li>the proof&#39;s proof+public formatted as calldata to run with the smart contract verifier <em>on Rollkit</em></li></ul><h3 id="deploy-and-prove-your-zkml-circuit-on-sindri" tabindex="-1">Deploy and Prove your zkML Circuit on Sindri <a class="header-anchor" href="#deploy-and-prove-your-zkml-circuit-on-sindri" aria-label="Permalink to &quot;Deploy and Prove your zkML Circuit on Sindri&quot;">​</a></h3><p>Export your Sindri API Key to an environment variable (or prepend it to the run command in the next step).</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SINDRI_API_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">YOUR_API_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>Run the <code>compile_and_prove.py</code> script. This will upload the <code>circuit/</code> directory to Sindri, where Sindri will compile and host your circuit. Then, it will run a single proof for the circuit. Finally, it will save the circuit&#39;s smart contract verifier code that is generated by Sindri to the <code>Verifier.sol</code> file and it will save the proof&#39;s proof+public formatted as <code>calldata</code> for that smart contract to <code>calldata.txt</code>.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compile_and_prove.py</span></span></code></pre></div><p>Congratulations! You just deployed a zkML circuit to Sindri and proved it on Sindri&#39;s production-quality infrastructure with built-in, custom GPU-accelerated proving techniques. Furthermore, you now have smart contract verifier code (and some calldata) for verifying proofs of that circuit on-chain.</p><h2 id="deploy-smart-contract-verifier-to-rollkit" tabindex="-1">Deploy Smart Contract Verifier to Rollkit <a class="header-anchor" href="#deploy-smart-contract-verifier-to-rollkit" aria-label="Permalink to &quot;Deploy Smart Contract Verifier to Rollkit&quot;">​</a></h2><p>Next, we will deploy this smart contract to Rollkit and verify our zkML proof on-chain. <em>This section assumes you have an operational Rollkit instance of Polaris EVM running and your <code>gm-portal/</code> directory is located in the <code>$HOME</code> directory on your machine.</em></p><h3 id="deploy" tabindex="-1">Deploy <a class="header-anchor" href="#deploy" aria-label="Permalink to &quot;Deploy&quot;">​</a></h3><p>Copy your new <code>Verifier.sol</code> smart contract to the <code>~/gm-portal/contracts/src/.</code> directory in your Polaris EVM.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sindri-resources/circuit_tutorials/circom/food_ml/Verifier.sol</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gm-portal/contracts/src/Verifier.sol</span></span></code></pre></div><p>Next, let&#39;s make a copy of the example <code>~/gm-portal/contracts/script/GmPortal.s.sol</code> and modify it to reference your new <code>Verifier.sol</code> contract.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gm-portal/contracts/script/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GmPortal.s.sol</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Verifier.s.sol</span></span></code></pre></div><p>Open up the new <code>Verifier.s.sol</code> and modify it to interact with your new <code>Verifier.sol</code> instead of the example <code>GmPortal.sol</code>.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// SPDX-License-Identifier: MIT</span></span>
<span class="line"><span>pragma solidity ^0.8.13;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;forge-std/Script.sol&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import {Verifier} from &quot;src/Verifier.sol&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>contract VerifierScript is Script {</span></span>
<span class="line"><span>    function setUp() public {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    function run() public {</span></span>
<span class="line"><span>        vm.startBroadcast();</span></span>
<span class="line"><span>        new Verifier();</span></span>
<span class="line"><span>        vm.stopBroadcast();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Then, deploy the contract to your Rollkit environment. <em>Your <code>PRIVATE_KEY</code> and <code>RPC_URL</code> are for your Rollkit Polaris EVM.</em></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PRIVATE_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0xfffdbb37105441e14b0ee6330d855d8504ff39e705c3afa8f859ac9865f99306</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RPC_URL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://localhost:8545</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ..</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> script</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> script/Verifier.s.sol:VerifierScript</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rpc-url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $RPC_URL </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--private-key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $PRIVATE_KEY </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--broadcast</span></span></code></pre></div><p>A successful deployment&#39;s output will look similar to the following.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>forge script script/Verifier.s.sol:VerifierScript --rpc-url $RPC_URL --private-key $PRIVATE_KEY --broadcast</span></span>
<span class="line"><span>[⠒] Compiling...</span></span>
<span class="line"><span>[⠆] Compiling 20 files with 0.8.24</span></span>
<span class="line"><span>[⠰] Solc 0.8.24 finished in 101.99ms</span></span>
<span class="line"><span>Compiler run successful!</span></span>
<span class="line"><span>Script ran successfully.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== Logs ==</span></span>
<span class="line"><span>  i am a smart contract on Polaris EVM x Rollkit. gm!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>##</span></span>
<span class="line"><span>Waiting for receipts.</span></span>
<span class="line"><span>⠉ [00:00:00] [######################] 1/1 receipts (0.0s)</span></span>
<span class="line"><span>##### 80085</span></span>
<span class="line"><span>✅  [Success]Hash: 0xa06a4585af436e2271fc9f697488ce49771c6480e72caac76739e286564c0fc3</span></span>
<span class="line"><span>Contract Address: 0x5C59C83c099F72FcE832208f96a23a1E43737a14</span></span>
<span class="line"><span>Block: 5699</span></span>
<span class="line"><span>Paid: 0.002924172006823068 ETH (974724 gas * 3.000000007 gwei)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[...]</span></span></code></pre></div><p>From your contract deployment output, <strong>export your contract address</strong>: <code>Contract Address: 0x5C59C83c099F72FcE832208f96a23a1E43737a14</code>. <em>Note that the address will be different.</em></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CONTRACT_ADDRESS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x5C59C83c099F72FcE832208f96a23a1E43737a14</span></span></code></pre></div><h2 id="interact-with-the-contract-verify-your-zkml-proof-on-chain" tabindex="-1">Interact with the Contract - Verify your zkML Proof On-Chain <a class="header-anchor" href="#interact-with-the-contract-verify-your-zkml-proof-on-chain" aria-label="Permalink to &quot;Interact with the Contract - Verify your zkML Proof On-Chain&quot;">​</a></h2><p>Now, we will send your zkML circuit&#39;s proof to the contract and verify it on-chain. Keep in mind that your verifier contract can be used across any EVM-compatible environment. Thus, we can compare the cost of execution across multiple environments.</p><p>First, grab the contents of your proof calldata and save it in a variable.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CALLDATA</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/sindri-resources/circuit_tutorials/circom/food_ml/calldata.txt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Then, interact with the smart contract using the calldata.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cast</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> send</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $CONTRACT_ADDRESS </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;verifyProof(uint256[2],uint256[2][2],uint256[2],uint256[1])&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$CALLDATA </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--private-key $PRIVATE_KEY </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--rpc-url $RPC_URL</span></span></code></pre></div><p>The output will look like the following.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cast</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> send</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $CONTRACT_ADDRESS </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;verifyProof(uint256[2],uint256[2][2],uint256[2],uint256[1])&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $CALLDATA </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--private-key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $PRIVATE_KEY </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--rpc-url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $RPC_URL</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">blockHash</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">               0xbbd872d0c37fe889c2456daf80505c20f262b001842d919d06e48c163319af3d</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">blockNumber</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">             11544</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">contractAddress</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cumulativeGasUsed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       231649</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">effectiveGasPrice</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       3000000007</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">from</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    0x20f33CE90A13a4b5E7697E3544c3083B8F8A51D4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gasUsed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                 231649</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">logs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    []</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">logsBloom</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">               0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">root</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">status</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                  1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">transactionHash</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">         0x58096aabd3cb58bdef28501bda01b6cf4a37ed0ba482f81462bc1043bb91f996</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">transactionIndex</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        0</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">type</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">to</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                      0x5C59C83c099F72FcE832208f96a23a1E43737a14</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Note: To see the decoded output of the contract call (to check if the proof was verified), you will need to view the call in a block explorer.</p></div><h2 id="congratulations" tabindex="-1">Congratulations <a class="header-anchor" href="#congratulations" aria-label="Permalink to &quot;Congratulations&quot;">​</a></h2><p>Congratulations, you&#39;ve just verified a zkML circuit on Rollkit.</p><p>For further reading, check out <a href="https://sindri.app/blog/2024/02/21/zkml-modularity/" target="_blank" rel="noreferrer">Sindri&#39;s blog post</a> explaining how using Sindri + Rollkit x Celestia means verifiable ML doesn’t have to be prohibitively expensive for operators or end users.</p>`,59)]))}const g=i(e,[["render",l]]);export{c as __pageData,g as default};
