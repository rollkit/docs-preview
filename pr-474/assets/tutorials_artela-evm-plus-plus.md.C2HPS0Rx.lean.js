import{c as i,a3 as t,o as s}from"./chunks/framework.CODg00rU.js";const a="/docs-preview/pr-474/artela-evm-rollkit/artela-evm-rollkit.png",h=JSON.parse('{"title":"Quick Start Guide for Artela EVM++ with Rollkit","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Quick Start Guide for Artela EVM++ with Rollkit | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"tutorials/artela-evm-plus-plus.md","filePath":"tutorials/artela-evm-plus-plus.md","lastUpdated":1727812663000}'),l={name:"tutorials/artela-evm-plus-plus.md"},p=Object.assign(l,{setup(n){return(o,e)=>(s(),i("div",null,e[0]||(e[0]=[t('<h1 id="quick-start-guide-for-artela-evm-with-rollkit" tabindex="-1">Quick Start Guide for Artela EVM++ with Rollkit <a class="header-anchor" href="#quick-start-guide-for-artela-evm-with-rollkit" aria-label="Permalink to &quot;Quick Start Guide for Artela EVM++ with Rollkit&quot;">​</a></h1><p>This guide will assist you to quickly set up a rollup node with <a href="https://docs.artela.network/main/Artela-Blockchain/EVM++" target="_blank" rel="noreferrer">Artela EVM++</a> execution layer using Rollkit and local-DA.</p><p><img src="'+a+`" alt="artela-evm-rollkit"></p><p>EVM++ is a modular dual-VM execution layer that supports the dynamic creation of native extension modules for blockchain at runtime. It enables developers to leverage WasmVM to build native extensions that co-process with EVM, offering enhanced customization capabilities. More than just a dual-VM setup, these native extensions facilitate blockchain-level customization. They allow for the integration of custom logic throughout the transaction lifecycle, providing access to an expanded runtime context.</p><h2 id="📦-clone-the-artela-rollkit-repository" tabindex="-1">📦 Clone the Artela Rollkit Repository <a class="header-anchor" href="#📦-clone-the-artela-rollkit-repository" aria-label="Permalink to &quot;📦 Clone the Artela Rollkit Repository&quot;">​</a></h2><p>Start by cloning the Artela Rollkit repository:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/artela-network/artela-rollkit.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artela-rollkit</span></span></code></pre></div><h2 id="🛥️-run-with-docker-compose" tabindex="-1">🛥️ Run with Docker Compose <a class="header-anchor" href="#🛥️-run-with-docker-compose" aria-label="Permalink to &quot;🛥️ Run with Docker Compose&quot;">​</a></h2><p>Ensure Docker is installed on your system before setting up the Artela rollup node. If not already installed, download and follow the setup instructions available <a href="https://www.docker.com/products/docker-desktop/" target="_blank" rel="noreferrer">here</a>.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Make sure you meet these <a href="https://docs.docker.com/engine/network/tutorials/host/#prerequisites" target="_blank" rel="noreferrer">prerequisites</a> of enabling host network mode in Docker.</p></div><p>After installing Docker, run the following command to start a local development node:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span></span></code></pre></div><p>This command launches the Artela rollup node with Rollkit and local-DA. To monitor the logs, use this command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> logs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artroll</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span></span></code></pre></div><p>If you observe the following output, the local development node is running properly:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">7:09AM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> finalized</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block_app_hash=E483920A1E1E7E492E47036300003769420813BB13BB3F25CFAFDB0DF19C144A</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> height=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=BlockManager</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> num_txs_res=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> num_val_updates=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">7:09AM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> executed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> app_hash=E483920A1E1E7E492E47036300003769420813BB13BB3F25CFAFDB0DF19C144A</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> height=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=BlockManager</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">7:09AM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> indexed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> events</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> height=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=txindex</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">7:09AM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INF</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Creating</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> publishing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> height=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module=BlockManager</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span></code></pre></div><h2 id="🔑-get-prefunded-test-accounts" tabindex="-1">🔑 Get prefunded test accounts <a class="header-anchor" href="#🔑-get-prefunded-test-accounts" aria-label="Permalink to &quot;🔑 Get prefunded test accounts&quot;">​</a></h2><p>Access testing accounts by entering the <code>artroll</code> Docker container:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exec</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -ti</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artroll</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /bin/bash</span></span></code></pre></div><p>Retrieve the address and private key of testing accounts using:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 👇 Alternatively, you can use myKey2.info, myKey3.info, myKey4.info</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./entrypoint</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> keyinfo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.artroll/keyring-test/mykey.info</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --passwd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span></code></pre></div><p>This will display the testing private key and its address:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">private</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Plain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Private</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Hex</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Format</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">address:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Address</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Associated</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> with</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Private</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> }</span></span></code></pre></div><p>There are four testing accounts available in the local development node for interacting with the EVM chain.</p><h2 id="⚙️-configuring-the-node" tabindex="-1">⚙️ Configuring the Node <a class="header-anchor" href="#⚙️-configuring-the-node" aria-label="Permalink to &quot;⚙️ Configuring the Node&quot;">​</a></h2><p>You can modify runtime parameters of the Artela development node by adjusting its configuration files. Follow the steps below to make these changes.</p><p>To configure the development node, first access the Docker container by running the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exec</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artroll</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /bin/bash</span></span></code></pre></div><p>Inside the container, you will need to modify the following configuration files:</p><ul><li>/root/.artroll/config/app.toml</li><li>/root/.artroll/config/config.toml</li></ul><p>After making the necessary changes, return to the Docker host and restart the container to apply the new configuration:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artroll</span></span></code></pre></div><h2 id="🧪-build-on-evm" tabindex="-1">🧪 Build on EVM++ <a class="header-anchor" href="#🧪-build-on-evm" aria-label="Permalink to &quot;🧪 Build on EVM++&quot;">​</a></h2><p>Let’s dive into Artela EVM++ by kicking off with the Hello World project, the following code will guide you through the essentials:</p><p>👉 <a href="/docs-preview/pr-474/tutorials/evm-contract-interaction">Contract interaction tutorial</a>: Get hands-on experience with deploying and interacting with smart contracts on the Artela rollup node.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>When you are following the Contract interaction tutorial, you need to make the following replacements:</p><ol><li>Use <a href="https://github.com/artela-network/gm-portal.git" target="_blank" rel="noreferrer">https://github.com/artela-network/gm-portal.git</a> instead of the original <code>gm-portal</code> repo.</li><li>Use the private key you obtained from the previous step in this tutorial instead of the one used in the Contract interaction tutorial.</li><li>The contract address should be <code>0x9fcEbD70654D360b41ccD123dADAAad6ce13C788</code> instead of the one starts with <code>0x18D...</code>.</li></ol></div><p>👉 <a href="https://docs.artela.network/develop/get-started/dev-aspect" target="_blank" rel="noreferrer">Quick Start for Aspect on EVM++</a>: Try your first <a href="https://docs.artela.network/develop/core-concepts/aspect-programming" target="_blank" rel="noreferrer">Aspect</a> with Artela rollup node.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Please note that when you are following the Aspect on EVM++ tutorial, you need to make the following replacements:</p><ol><li>Replace <code>npm install -g @artela/aspect-tool</code> with <code>npm install -g @artela-next/aspect-tool</code></li><li>Replace the Artela Testnet node URL in <code>project.config.json</code> with <code>http://localhost:8545</code> to connect to your local rollup node.</li><li>Use the private key you obtained from the previous step in this tutorial instead of creating a new account.</li></ol></div><p>By now, we assume that you:</p><ul><li>Have a basic understanding of Artela technology.</li><li>Have installed and played with Artela development tools.</li><li>Understand how Aspect functions and its impact on making dApps distinct and superior.</li><li>May already have numerous innovative ideas for building on Artela.</li></ul><h3 id="📖-more-to-know" tabindex="-1">📖 More to know <a class="header-anchor" href="#📖-more-to-know" aria-label="Permalink to &quot;📖 More to know&quot;">​</a></h3><p>If you want to gain a deeper understanding of Aspect’s capabilities and limitations to fully grasp how it can enhance or constrain your project, make sure not to overlook these essential concepts:</p><ul><li><a href="https://docs.artela.network/develop/core-concepts/aspect-runtime" target="_blank" rel="noreferrer">Aspect Runtime</a></li><li><a href="https://docs.artela.network/develop/core-concepts/lifecycle" target="_blank" rel="noreferrer">Aspect Lifecycle</a></li><li><a href="https://docs.artela.network/develop/core-concepts/join-point" target="_blank" rel="noreferrer">Join Point</a></li><li><a href="https://docs.artela.network/develop/reference/aspect-tool/overview" target="_blank" rel="noreferrer">Aspect Tool</a></li><li><a href="https://docs.artela.network/develop/reference/aspect-lib/overview" target="_blank" rel="noreferrer">Aspect Libs</a></li></ul><h3 id="💥-build-with-examples" tabindex="-1">💥 Build with examples <a class="header-anchor" href="#💥-build-with-examples" aria-label="Permalink to &quot;💥 Build with examples&quot;">​</a></h3><p>Our community has built numbers of projects with Aspect, you can refer to these projects and modify them to learn how to use Aspect more effectively.</p><p>Simple examples that use the basic functionalities of Aspect:</p><ul><li>Example 1: <a href="https://github.com/artela-network/example/blob/rollkit/curve_reentrance/README.md" target="_blank" rel="noreferrer">Aspect Reentrancy Guard</a></li><li>Example 2: <a href="https://github.com/artela-network/blacklist-aspect/tree/rollkit" target="_blank" rel="noreferrer">Black List Aspect</a></li><li>Example 3: <a href="https://github.com/artela-network/throttler-aspect/tree/rollkit" target="_blank" rel="noreferrer">Throttler Aspect</a></li></ul><p>Real-world use cases that show how to build more complex projects with Aspect:</p><ul><li><a href="https://github.com/artela-network/session-key-aspect/tree/rollkit" target="_blank" rel="noreferrer">Session key Aspect</a>: use Aspect to extend EoA with session keys and improve</li><li><a href="https://github.com/artela-network/jit-gaming/tree/rollkit" target="_blank" rel="noreferrer">JIT-gaming Aspect</a>: use Aspect to add automatic on-chain NPC for a fully on-chain game.</li></ul><h2 id="🛑-stopping-the-node" tabindex="-1">🛑 Stopping the Node <a class="header-anchor" href="#🛑-stopping-the-node" aria-label="Permalink to &quot;🛑 Stopping the Node&quot;">​</a></h2><p>To cease operations and shutdown the Artela rollup node, use:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> down</span></span></code></pre></div><p>This command halts all running containers and clears the environment.</p><h2 id="🎉-conclusion" tabindex="-1">🎉 Conclusion <a class="header-anchor" href="#🎉-conclusion" aria-label="Permalink to &quot;🎉 Conclusion&quot;">​</a></h2><p>Congratulations! You have successfully learnt some basic knowledge of EVM++ and have set up an Artela EVM++ rollup using Rollkit and local-DA. This setup enables you to test the integrated capabilities of Artela’s EVM++ with Rollkit.</p>`,55)])))}});export{h as __pageData,p as default};
