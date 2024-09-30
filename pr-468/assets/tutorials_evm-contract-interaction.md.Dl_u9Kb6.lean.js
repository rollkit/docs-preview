import{_ as a,c as i,a3 as t,o as n}from"./chunks/framework.DVw5fkKK.js";const e="/docs-preview/pr-468/frontend-evm.png",g=JSON.parse('{"title":"Smart Contract Interaction on EVM Rollup","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Smart Contract Interaction on EVM Rollup | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"tutorials/evm-contract-interaction.md","filePath":"tutorials/evm-contract-interaction.md","lastUpdated":1727706221000}'),l={name:"tutorials/evm-contract-interaction.md"};function h(p,s,o,r,k,d){return n(),i("div",null,s[0]||(s[0]=[t(`<h1 id="smart-contract-interaction-on-evm-rollup" tabindex="-1">Smart Contract Interaction on EVM Rollup <a class="header-anchor" href="#smart-contract-interaction-on-evm-rollup" aria-label="Permalink to &quot;Smart Contract Interaction on EVM Rollup&quot;">​</a></h1><p>In this tutorial, you will deploy a smart contract to your EVM rollup and interact with it on a frontend. This tutorial assumes that you spinned up an EVM rollup, know it&#39;s RPC URL, and have funded an account on it.</p><h2 id="install-foundry" tabindex="-1">Install Foundry <a class="header-anchor" href="#install-foundry" aria-label="Permalink to &quot;Install Foundry&quot;">​</a></h2><p>To install Foundry, run the following commands:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://foundry.paradigm.xyz</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foundryup</span></span></code></pre></div><h2 id="funds" tabindex="-1">Funds <a class="header-anchor" href="#funds" aria-label="Permalink to &quot;Funds&quot;">​</a></h2><p>Here is the private key and derived address of the account for you to be used in this tutorial (make sure to fund it with some ETH):</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PrivateKey:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0xfffdbb37105441e14b0ee6330d855d8504ff39e705c3afa8f859ac9865f99306</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Address:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0x20f33CE90A13a4b5E7697E3544c3083B8F8A51D4</span></span></code></pre></div><h2 id="frontend" tabindex="-1">Frontend <a class="header-anchor" href="#frontend" aria-label="Permalink to &quot;Frontend&quot;">​</a></h2><p>Now we will make a frontend with a smart contract on our EVM rollup. First, clone the GM Portal repository:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/rollkit/gm-portal.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gm-portal</span></span></code></pre></div><h3 id="deploy-the-ooga-booga-portal-contract" tabindex="-1">Deploy the ooga booga portal contract <a class="header-anchor" href="#deploy-the-ooga-booga-portal-contract" aria-label="Permalink to &quot;Deploy the ooga booga portal contract&quot;">​</a></h3><p>Next, you will deploy the smart contract. Export the funded private key and RPC URL:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PRIVATE_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0xfffdbb37105441e14b0ee6330d855d8504ff39e705c3afa8f859ac9865f99306</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RPC_URL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://localhost:8545 // or for Octane EVM the port is 8000</span></span></code></pre></div><p>Use Foundry to deploy the contract to your EVM:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> contracts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> script</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> script/GmPortal.s.sol:GmPortalScript</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rpc-url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $RPC_URL </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--private-key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $PRIVATE_KEY </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--broadcast</span></span></code></pre></div><p>A successful deployment&#39;s output will look similar to:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> script</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> script/GmPortal.s.sol:GmPortalScript</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rpc-url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $RPC_URL </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--private-key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $PRIVATE_KEY </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--broadcast</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[⠒] Compiling...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[⠑] Compiling 18 files with 0.8.20</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[⠘] Solc 0.8.20 finished in 1.52s</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Compiler</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> successful!</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Script</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ran</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> successfully.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Logs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ==</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> am</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> smart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> contract</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> EVM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Rollkit.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gm!</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[...]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Waiting</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> receipts.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">⠉</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [00:00:00] [######################] 1/1 receipts (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0.0s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##### 2061</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">✅</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [Success]Hash: 0xa174e9389633972458e6dce431d84736e0709e9406c1c3b14b5fa9ae0cdd6860</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Contract</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Address:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0x18Df82C7E422A42D47345Ed86B0E935E9718eBda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [!code </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">focus]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Block:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 682</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Paid:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.001528707003566983</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ETH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (509569 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">gas</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3.000000007</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gwei</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[...]</span></span></code></pre></div><p>From the contract deployment output, export your contract address:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CONTRACT_ADDRESS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x18Df82C7E422A42D47345Ed86B0E935E9718eBda</span></span></code></pre></div><h3 id="interact-with-the-contract" tabindex="-1">Interact with the contract <a class="header-anchor" href="#interact-with-the-contract" aria-label="Permalink to &quot;Interact with the contract&quot;">​</a></h3><p>Send an &quot;ooga booga&quot; to the contract:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cast</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> send</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $CONTRACT_ADDRESS </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;gm(string)&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;ooga booga&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--private-key $PRIVATE_KEY </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--rpc-url $RPC_URL</span></span></code></pre></div><p>Get total (hex-encoded) GMs (ooga boogas):</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cast</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $CONTRACT_ADDRESS </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;getTotalGms()&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rpc-url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $RPC_URL</span></span></code></pre></div><h3 id="start-and-update-the-frontend" tabindex="-1">Start and update the frontend <a class="header-anchor" href="#start-and-update-the-frontend" aria-label="Permalink to &quot;Start and update the frontend&quot;">​</a></h3><p>Now, change into the frontend directory:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/gm-portal/frontend</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><p>Now, your frontend is running! We&#39;ll display and interact with our smart contract on our frontend.</p><p>First, you will need to change the contract address on <code>gm-portal/frontend/src/App.tsx</code> to your contract address from above before you can interact with the contract on the frontend:</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>Only if you changed the contract</strong>, you will need to update the ABI in <code>gm-portal/frontend/GmPortal.json</code> from <code>gm-portal/contracts/out/GmPortal.sol/GmPortal.json</code>. This can be done with:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gm-portal/contracts/out/GmPortal.sol/GmPortal.json</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gm-portal/frontend</span></span></code></pre></div></div><h3 id="interact-with-the-frontend" tabindex="-1">Interact with the frontend <a class="header-anchor" href="#interact-with-the-frontend" aria-label="Permalink to &quot;Interact with the frontend&quot;">​</a></h3><p>In order to interact with the contract on the frontend, you&#39;ll need to fund an account that you have in your Ethereum wallet or add the private key from above into your wallet.</p><p>To transfer to an external account, use this command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RECEIVER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">receiver ETH address</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cast</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> send</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --private-key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $PRIVATE_KEY $RECEIVER </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--value</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1ether</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rpc-url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $RPC_URL</span></span></code></pre></div><p><em>If you are in a different terminal than the one you set the private key in originally, you may need to set it again.</em></p><p>Now, login with your wallet that you funded, and post a ooga booga on your ooga booga portal!</p><p><img src="`+e+'" alt="frontend-evm"></p><h3 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion&quot;">​</a></h3><p>You have successfully deployed a smart contract to your EVM rollup and interacted with it on a frontend. You can now build more complex applications on your EVM rollup!</p>',40)]))}const F=a(l,[["render",h]]);export{g as __pageData,F as default};
