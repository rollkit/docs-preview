import{C as i}from"./chunks/callout.CbiQKwpz.js";import{c as s,j as a,a as t,G as n,a3 as l,o}from"./chunks/framework.DtYM7_hc.js";/* empty css                                                                       */const r={class:"tip custom-block"},k=JSON.parse('{"title":"GM world rollup: Part 3","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"GM world rollup: Part 3 | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"tutorials/gm-world-mainnet.md","filePath":"tutorials/gm-world-mainnet.md","lastUpdated":1729192713000}'),p={name:"tutorials/gm-world-mainnet.md"},m=Object.assign(p,{setup(h){return(d,e)=>(o(),s("div",null,[e[1]||(e[1]=a("h1",{id:"gm-world-rollup-part-3",tabindex:"-1"},[t("GM world rollup: Part 3 "),a("a",{class:"header-anchor",href:"#gm-world-rollup-part-3","aria-label":'Permalink to "GM world rollup: Part 3"'},"​")],-1)),e[2]||(e[2]=a("p",null,[t("This tutorial is part 3 of the GM world rollup tutorials. In this tutorial, it is expected that you've completed "),a("a",{href:"./gm-world"},"part 1"),t(" or "),a("a",{href:"./gm-world-mocha-testnet"},"part 2"),t(" of the tutorial and are familiar with running a local rollup devnet or posting to a Celestia testnet.")],-1)),a("div",r,[e[0]||(e[0]=a("p",{class:"custom-block-title"},"TIP",-1)),n(i)]),e[3]||(e[3]=l('<h2 id="deploying-to-celestia-mainnet-beta" tabindex="-1">Deploying to Celestia Mainnet Beta <a class="header-anchor" href="#deploying-to-celestia-mainnet-beta" aria-label="Permalink to &quot;Deploying to Celestia Mainnet Beta&quot;">​</a></h2><h3 id="run-celestia-node" tabindex="-1">🪶 Run a Celestia light node <a class="header-anchor" href="#run-celestia-node" aria-label="Permalink to &quot;🪶 Run a Celestia light node {#run-celestia-node}&quot;">​</a></h3><p>Fully sync and fund a light node on Mainnet beta (<code>celestia</code>). Follow instructions to install and start your Celestia data availability layer light node selecting the Arabica network. You can <a href="https://docs.celestia.org/nodes/light-node" target="_blank" rel="noreferrer">find instructions to install and run the node</a>. After the node is synced, stop the light node.</p><h3 id="clear-previous-chain-history" tabindex="-1">Clear previous chain history <a class="header-anchor" href="#clear-previous-chain-history" aria-label="Permalink to &quot;Clear previous chain history&quot;">​</a></h3><p>Before starting the rollup, we need to remove the old project folders:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/go/bin/gmd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.gm</span></span></code></pre></div><h3 id="start-the-rollup-on-mainnet" tabindex="-1">Start the rollup on mainnet <a class="header-anchor" href="#start-the-rollup-on-mainnet" aria-label="Permalink to &quot;Start the rollup on mainnet&quot;">​</a></h3><p>For this portion, you will need to stop the rollup that you have running from parts 1 and 2 of the tutorial, using <code>Control + C</code> in the terminal.</p><ol><li><p>Download the script for deploying to Celestia&#39;s Mainnet Beta:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># From inside the `gm` directory</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://rollkit.dev/gm/init-mainnet.sh</span></span></code></pre></div></li><li><p>Ensure that the account for your light node is funded.</p></li><li><p>Run the <code>init-mainnet.sh</code> script:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init-mainnet.sh</span></span></code></pre></div></li><li><p>Watch as your rollup posts blocks to Celestia!</p></li><li><p>View your rollup by <a href="https://celenium.io" target="_blank" rel="noreferrer">finding your namespace or account Celenium</a>.</p></li></ol><p><a href="https://celenium.io/namespace/000000000000000000000000000000000000000008e5f679bf7116cb" target="_blank" rel="noreferrer">View the example rollup&#39;s namespace on Celenium</a>.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>init-mainnet.sh</code> script uses a default namespace <code>00000000000000000000000000000000000000000008e5f679bf7116cb</code>. You can set your own by using a command similar to this (or, you could get creative 😎):</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">openssl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rand</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -hex</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span></span></code></pre></div><p>Replace the last 10 characters in <code>00000000000000000000000000000000000000000008e5f679bf7116cb</code> with the newly generated 10 characters.</p><p><a href="https://celestiaorg.github.io/celestia-app/specs/namespace.html" target="_blank" rel="noreferrer">Learn more about namespaces</a> .</p></div><h4 id="restarting-your-rollup" tabindex="-1">Restarting your rollup <a class="header-anchor" href="#restarting-your-rollup" aria-label="Permalink to &quot;Restarting your rollup&quot;">​</a></h4><p>When you ran <code>init-mainnet.sh</code>, the script generated a script called <code>restart-mainnet.sh</code> in the <code>$HOME/gm</code> directory for you to use to restart your rollup.</p><p>In order to do so, restart celestia light node and then run:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart-mainnet.sh</span></span></code></pre></div><h2 id="next-steps" tabindex="-1">Next steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next steps&quot;">​</a></h2><p>Congratulations! You have a Rollkit rollup running on Celestia&#39;s Mainnet Beta.</p><p>If you&#39;re interested in setting up a full node alongside your sequencer, see the <a href="/docs-preview/pr-491/guides/full-and-sequencer-node">Full and sequencer node rollup setup</a> tutorial.</p>',18))]))}});export{k as __pageData,m as default};
