import{c as l}from"./chunks/constants.C1G_zmdY.js";import{c as n,j as i,a,a3 as t,t as e,k as h,o as k}from"./chunks/framework.B5dOChFL.js";const p={class:"language-bash vp-adaptive-theme"},o={class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},r={class:"line"},d={style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},C=JSON.parse('{"title":"Quick start guide","description":"Quickly start a rollup node using the Rollkit CLI.","frontmatter":{"description":"Quickly start a rollup node using the Rollkit CLI.","head":[["meta",{"name":"og:title","content":"Quick start guide | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"tutorials/quick-start.md","filePath":"tutorials/quick-start.md","lastUpdated":1733252713000}'),F={name:"tutorials/quick-start.md"},B=Object.assign(F,{setup(g){return(u,s)=>(k(),n("div",null,[s[3]||(s[3]=i("h1",{id:"quick-start-guide",tabindex:"-1"},[a("Quick start guide "),i("a",{class:"header-anchor",href:"#quick-start-guide","aria-label":'Permalink to "Quick start guide"'},"​")],-1)),s[4]||(s[4]=i("p",null,"Welcome to Rollkit, a sovereign rollup framework! The easiest way to launch your sovereign rollup node is by using the Rollkit CLI.",-1)),s[5]||(s[5]=i("h2",{id:"📦-install-rollkit-cli",tabindex:"-1"},[a("📦 Install Rollkit (CLI) "),i("a",{class:"header-anchor",href:"#📦-install-rollkit-cli","aria-label":'Permalink to "📦 Install Rollkit (CLI)"'},"​")],-1)),s[6]||(s[6]=i("p",null,"To install Rollkit, run the following command in your terminal:",-1)),i("div",p,[s[1]||(s[1]=i("button",{title:"Copy Code",class:"copy"},null,-1)),s[2]||(s[2]=i("span",{class:"lang"},"bash",-1)),i("pre",o,[i("code",null,[i("span",r,[s[0]||(s[0]=t('<span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://rollkit.dev/install.sh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span>',6)),i("span",d," "+e(h(l).rollkitLatestTag),1)])])])]),s[7]||(s[7]=t(`<p>Verify the installation by checking the Rollkit version:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span></code></pre></div><p>A successful installation will display the version number and its associated git commit hash.</p><h2 id="🚀-run-your-sovereign-rollup-node" tabindex="-1">🚀 Run your sovereign rollup node <a class="header-anchor" href="#🚀-run-your-sovereign-rollup-node" aria-label="Permalink to &quot;🚀 Run your sovereign rollup node&quot;">​</a></h2><p>To start a basic sovereign rollup node, execute:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span></code></pre></div><p>Upon execution, the CLI will output log entries that provide insights into the node&#39;s initialization and operation:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">I[2024-05-01</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">09:58:46.001]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Found</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> private</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> validator</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                      module=main</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> keyFile=/root/.rollkit/config/priv_validator_key.json</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stateFile=/root/.rollkit/data/priv_validator_state.json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">I[2024-05-01</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">09:58:46.002]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Found</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                               module=main</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> path=/root/.rollkit/config/node_key.json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">I[2024-05-01</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">09:58:46.002]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Found</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> genesis</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                           module=main</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> path=/root/.rollkit/config/genesis.json</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">I[2024-05-01</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">09:58:46.080]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Started</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                                 module=main</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">I[2024-05-01</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">09:58:46.081]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Creating</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> publishing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                module=BlockManager</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> height=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">223</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">I[2024-05-01</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">09:58:46.082]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Finalized</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                              module=BlockManager</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> height=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">223</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> num_txs_res=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> num_val_updates=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> block_app_hash=</span></span></code></pre></div><h2 id="🎉-conclusion" tabindex="-1">🎉 Conclusion <a class="header-anchor" href="#🎉-conclusion" aria-label="Permalink to &quot;🎉 Conclusion&quot;">​</a></h2><p>That&#39;s it! Your sovereign rollup node is now up and running. It&#39;s incredibly simple to start a blockchain (which is essentially what a rollup is) these days using Rollkit. Explore further and discover how you can build useful applications on Rollkit. Good luck!</p>`,10))]))}});export{C as __pageData,B as default};
