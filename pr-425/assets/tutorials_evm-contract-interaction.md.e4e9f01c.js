import{_ as s,o as a,c as n,X as o}from"./chunks/framework.2426f4bf.js";const l="/docs-preview/pr-425/frontend-evm.png",h=JSON.parse('{"title":"Smart Contract Interaction on EVM Rollup","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Smart Contract Interaction on EVM Rollup | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"tutorials/evm-contract-interaction.md","filePath":"tutorials/evm-contract-interaction.md","lastUpdated":1721897652000}'),t={name:"tutorials/evm-contract-interaction.md"},p=o(`<h1 id="smart-contract-interaction-on-evm-rollup" tabindex="-1">Smart Contract Interaction on EVM Rollup <a class="header-anchor" href="#smart-contract-interaction-on-evm-rollup" aria-label="Permalink to &quot;Smart Contract Interaction on EVM Rollup&quot;">​</a></h1><p>In this tutorial, you will deploy a smart contract to your EVM rollup and interact with it on a frontend. This tutorial assumes that you spinned up an EVM rollup, know it&#39;s RPC URL, and have funded an account on it.</p><h2 id="install-foundry" tabindex="-1">Install Foundry <a class="header-anchor" href="#install-foundry" aria-label="Permalink to &quot;Install Foundry&quot;">​</a></h2><p>To install Foundry, run the following commands:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-L</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://foundry.paradigm.xyz</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span></span>
<span class="line"><span style="color:#FFCB6B;">foundryup</span></span></code></pre></div><h2 id="funds" tabindex="-1">Funds <a class="header-anchor" href="#funds" aria-label="Permalink to &quot;Funds&quot;">​</a></h2><p>Here is the private key and derived address of the account for you to be used in this tutorial (make sure to fund it with some ETH):</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">PrivateKey:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0xfffdbb37105441e14b0ee6330d855d8504ff39e705c3afa8f859ac9865f99306</span></span>
<span class="line"><span style="color:#FFCB6B;">Address:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0x20f33CE90A13a4b5E7697E3544c3083B8F8A51D4</span></span></code></pre></div><h2 id="frontend" tabindex="-1">Frontend <a class="header-anchor" href="#frontend" aria-label="Permalink to &quot;Frontend&quot;">​</a></h2><p>Now we will make a frontend with a smart contract on our EVM rollup. First, clone the GM Portal repository:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> $HOME</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/rollkit/gm-portal.git</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gm-portal</span></span></code></pre></div><h3 id="deploy-the-ooga-booga-portal-contract" tabindex="-1">Deploy the ooga booga portal contract <a class="header-anchor" href="#deploy-the-ooga-booga-portal-contract" aria-label="Permalink to &quot;Deploy the ooga booga portal contract&quot;">​</a></h3><p>Next, you will deploy the smart contract. Export the funded private key and RPC URL:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> PRIVATE_KEY</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0xfffdbb37105441e14b0ee6330d855d8504ff39e705c3afa8f859ac9865f99306</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> RPC_URL</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">http://localhost:8545</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">or</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Octane</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">EVM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">port</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8000</span></span></code></pre></div><p>Use Foundry to deploy the contract to your EVM:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">contracts</span></span>
<span class="line"><span style="color:#FFCB6B;">forge</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">script/GmPortal.s.sol:GmPortalScript</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rpc-url</span><span style="color:#A6ACCD;"> $RPC_URL </span><span style="color:#C3E88D;">--private-key</span><span style="color:#A6ACCD;"> $PRIVATE_KEY </span><span style="color:#C3E88D;">--broadcast</span></span></code></pre></div><p>A successful deployment&#39;s output will look similar to:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight has-focused-lines"><code><span class="line"><span style="color:#FFCB6B;">forge</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">script/GmPortal.s.sol:GmPortalScript</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rpc-url</span><span style="color:#A6ACCD;"> $RPC_URL </span><span style="color:#C3E88D;">--private-key</span><span style="color:#A6ACCD;"> $PRIVATE_KEY </span><span style="color:#C3E88D;">--broadcast</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">⠒</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> Compiling...</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">⠑</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> Compiling 18 files with 0.8.20</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">⠘</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> Solc 0.8.20 finished </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> 1.52s</span></span>
<span class="line"><span style="color:#FFCB6B;">Compiler</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">successful!</span></span>
<span class="line"><span style="color:#FFCB6B;">Script</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ran</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">successfully.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">== </span><span style="color:#C3E88D;">Logs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">==</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">am</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">smart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">contract</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">EVM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Rollkit.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gm!</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">##</span></span>
<span class="line"><span style="color:#FFCB6B;">Waiting</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">receipts.</span></span>
<span class="line"><span style="color:#FFCB6B;">⠉</span><span style="color:#A6ACCD;"> [00:00:00] </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">######################</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> 1/1 receipts </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">0.0s</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">##### 2061</span></span>
<span class="line"><span style="color:#FFCB6B;">✅</span><span style="color:#A6ACCD;">  [Success]Hash: 0xa174e9389633972458e6dce431d84736e0709e9406c1c3b14b5fa9ae0cdd6860</span></span>
<span class="line has-focus"><span style="color:#FFCB6B;">Contract</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Address:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0x18Df82C7E422A42D47345Ed86B0E935E9718eBda</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">Block:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">682</span></span>
<span class="line"><span style="color:#FFCB6B;">Paid:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.001528707003566983</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ETH</span><span style="color:#A6ACCD;"> (509569 </span><span style="color:#C3E88D;">gas</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3.000000007</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gwei</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">...</span><span style="color:#89DDFF;">]</span></span></code></pre></div><p>From the contract deployment output, export your contract address:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> CONTRACT_ADDRESS</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0x18Df82C7E422A42D47345Ed86B0E935E9718eBda</span></span></code></pre></div><h3 id="interact-with-the-contract" tabindex="-1">Interact with the contract <a class="header-anchor" href="#interact-with-the-contract" aria-label="Permalink to &quot;Interact with the contract&quot;">​</a></h3><p>Send an &quot;ooga booga&quot; to the contract:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cast</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">send</span><span style="color:#A6ACCD;"> $CONTRACT_ADDRESS \\</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">gm(string)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ooga booga</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--private-key $PRIVATE_KEY \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--rpc-url $RPC_URL</span></span></code></pre></div><p>Get total (hex-encoded) GMs (ooga boogas):</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cast</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">call</span><span style="color:#A6ACCD;"> $CONTRACT_ADDRESS </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">getTotalGms()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rpc-url</span><span style="color:#A6ACCD;"> $RPC_URL</span></span></code></pre></div><h3 id="start-and-update-the-frontend" tabindex="-1">Start and update the frontend <a class="header-anchor" href="#start-and-update-the-frontend" aria-label="Permalink to &quot;Start and update the frontend&quot;">​</a></h3><p>Now, change into the frontend directory:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> $HOME</span><span style="color:#C3E88D;">/gm-portal/frontend</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span></code></pre></div><p>Now, your frontend is running! We&#39;ll display and interact with our smart contract on our frontend.</p><p>First, you will need to change the contract address on <code>gm-portal/frontend/src/App.tsx</code> to your contract address from above before you can interact with the contract on the frontend:</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>Only if you changed the contract</strong>, you will need to update the ABI in <code>gm-portal/frontend/GmPortal.json</code> from <code>gm-portal/contracts/out/GmPortal.sol/GmPortal.json</code>. This can be done with:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> $HOME</span></span>
<span class="line"><span style="color:#FFCB6B;">cp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gm-portal/contracts/out/GmPortal.sol/GmPortal.json</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gm-portal/frontend</span></span></code></pre></div></div><h3 id="interact-with-the-frontend" tabindex="-1">Interact with the frontend <a class="header-anchor" href="#interact-with-the-frontend" aria-label="Permalink to &quot;Interact with the frontend&quot;">​</a></h3><p>In order to interact with the contract on the frontend, you&#39;ll need to fund an account that you have in your Ethereum wallet or add the private key from above into your wallet.</p><p>To transfer to an external account, use this command:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> RECEIVER</span><span style="color:#89DDFF;">=&lt;</span><span style="color:#C3E88D;">receiver</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ETH</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">addres</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#FFCB6B;">cast</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">send</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--private-key</span><span style="color:#A6ACCD;"> $PRIVATE_KEY $RECEIVER </span><span style="color:#C3E88D;">--value</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#C3E88D;">ether</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rpc-url</span><span style="color:#A6ACCD;"> $RPC_URL</span></span></code></pre></div><p><em>If you are in a different terminal than the one you set the private key in originally, you may need to set it again.</em></p><p>Now, login with your wallet that you funded, and post a ooga booga on your ooga booga portal!</p><p><img src="`+l+'" alt="frontend-evm"></p><h3 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion&quot;">​</a></h3><p>You have successfully deployed a smart contract to your EVM rollup and interacted with it on a frontend. You can now build more complex applications on your EVM rollup!</p>',40),e=[p];function c(r,C,i,y,d,A){return a(),n("div",null,e)}const u=s(t,[["render",c]]);export{h as __pageData,u as default};
