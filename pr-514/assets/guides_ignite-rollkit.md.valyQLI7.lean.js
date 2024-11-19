/* empty css                                                                       */import{c as s}from"./chunks/constants.C1G_zmdY.js";import{c as n,a3 as t,j as a,t as l,k as e,o}from"./chunks/framework.FospTOxz.js";const h={class:"language-bash vp-adaptive-theme"},r={class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},p={class:"line"},d={style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},k={class:"language-bash vp-adaptive-theme"},g={class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},c={class:"line"},u={style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},v=JSON.parse('{"title":"How to Use Ignite to Create a Rollkit App","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"How to Use Ignite to Create a Rollkit App | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"guides/ignite-rollkit.md","filePath":"guides/ignite-rollkit.md","lastUpdated":1732042533000}'),b={name:"guides/ignite-rollkit.md"},B=Object.assign(b,{setup(y){return(F,i)=>(o(),n("div",null,[i[10]||(i[10]=t('<h1 id="how-to-use-ignite-to-create-a-rollkit-app" tabindex="-1">How to Use Ignite to Create a Rollkit App <a class="header-anchor" href="#how-to-use-ignite-to-create-a-rollkit-app" aria-label="Permalink to &quot;How to Use Ignite to Create a Rollkit App&quot;">​</a></h1><p>This guide will walk you through the process of using Ignite to create a Rollkit app.</p><h2 id="install-ignite" tabindex="-1">Install Ignite <a class="header-anchor" href="#install-ignite" aria-label="Permalink to &quot;Install Ignite {#install-ignite}&quot;">​</a></h2><p>You can read more about Ignite <a href="https://docs.ignite.com" target="_blank" rel="noreferrer">here</a>.</p><p>To install Ignite, you can run this command in your terminal:</p>',5)),a("div",h,[i[3]||(i[3]=a("button",{title:"Copy Code",class:"copy"},null,-1)),i[4]||(i[4]=a("span",{class:"lang"},"bash",-1)),a("pre",r,[a("code",null,[a("span",p,[i[0]||(i[0]=a("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"curl",-1)),a("span",d," https://get.ignite.com/cli@"+l(e(s).igniteVersionTag)+"!",1),i[1]||(i[1]=a("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," |",-1)),i[2]||(i[2]=a("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," bash",-1))])])])]),i[11]||(i[11]=t('<p>Once Ignite is installed, scaffold a new blockchain with the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ignite</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> scaffold</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --address-prefix</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --minimal</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --skip-proto</span></span></code></pre></div><p>This will create the <code>gm</code> blockchain. Navigate to the blockchain directory:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gm</span></span></code></pre></div><h2 id="install-ignite-app-rollkit" tabindex="-1">Install Ignite App Rollkit <a class="header-anchor" href="#install-ignite-app-rollkit" aria-label="Permalink to &quot;Install Ignite App Rollkit {#install-ignite-app-rollkit}&quot;">​</a></h2><p>In a new terminal window, you&#39;ll now install and run the Ignite App Rollkit.</p><p>Run the following command to install the Rollkit App:</p>',7)),a("div",k,[i[8]||(i[8]=a("button",{title:"Copy Code",class:"copy"},null,-1)),i[9]||(i[9]=a("span",{class:"lang"},"bash",-1)),a("pre",g,[a("code",null,[a("span",c,[i[5]||(i[5]=a("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ignite",-1)),i[6]||(i[6]=a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," app",-1)),i[7]||(i[7]=a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install",-1)),a("span",u," github.com/ignite/apps/rollkit@"+l(e(s).rollkitIgniteAppVersion),1)])])])]),i[12]||(i[12]=t('<p>This installs the Rollkit application, which will be integrated into your blockchain.</p><h2 id="add-rollkit-features" tabindex="-1">Add Rollkit Features <a class="header-anchor" href="#add-rollkit-features" aria-label="Permalink to &quot;Add Rollkit Features {#add-rollkit-features}&quot;">​</a></h2><p>Enhance your blockchain by adding Rollkit features. Use the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ignite</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span></span></code></pre></div><h2 id="build-your-chain" tabindex="-1">Build your chain <a class="header-anchor" href="#build-your-chain" aria-label="Permalink to &quot;Build your chain {#build-your-chain}&quot;">​</a></h2><p>Build your chain using the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ignite</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre></div><h2 id="initialize-your-blockchain" tabindex="-1">Initialize Your Blockchain <a class="header-anchor" href="#initialize-your-blockchain" aria-label="Permalink to &quot;Initialize Your Blockchain {#initialize-your-blockchain}&quot;">​</a></h2><p>Before starting your blockchain, you need to initialize it with Rollkit support. Initialize the blockchain with Local DA as follows:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ignite</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><h3 id="initialize-rollkit-cli-configuration" tabindex="-1">Initialize Rollkit CLI Configuration <a class="header-anchor" href="#initialize-rollkit-cli-configuration" aria-label="Permalink to &quot;Initialize Rollkit CLI Configuration {#initialize-rollkit-cli-configuration}&quot;">​</a></h3><p>To initialize the Rollkit CLI configuration, generate the <code>rollkit.toml</code> file by running the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> toml</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><p>This will set up the Rollkit configuration file rollkit.toml, allowing you to use the Rollkit CLI for managing and running your blockchain.</p><h2 id="start-your-chain" tabindex="-1">Start your chain <a class="header-anchor" href="#start-your-chain" aria-label="Permalink to &quot;Start your chain {#start-your-chain}&quot;">​</a></h2><p>Now you are ready to start your chain. We need to include 2 flags:</p><ol><li><code>--rollkit.aggregator</code> to signal that this node is the block producer</li><li><code>--rollkit.sequencer_rollup_id gm</code> to share the chain ID with the sequencer.</li></ol><p>Start your chain using the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rollkit.aggregator</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rollkit.sequencer_rollup_id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gm</span></span></code></pre></div><p>Your rollkit chain is now up and running.</p><h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2><p>By following these steps, you&#39;ve successfully installed Ignite, integrated Rollkit features into your blockchain, and configured the Rollkit CLI to run your chain against a mock DA and mock sequencer.</p>',22))]))}});export{v as __pageData,B as default};
