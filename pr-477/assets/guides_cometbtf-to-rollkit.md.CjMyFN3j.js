/* empty css                                                                       */import{c as t,a3 as a,o as l}from"./chunks/framework.KMs7aKFv.js";const p=JSON.parse('{"title":"How to Turn Your CometBFT App into a Rollkit App","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"How to Turn Your CometBFT App into a Rollkit App | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"guides/cometbtf-to-rollkit.md","filePath":"guides/cometbtf-to-rollkit.md","lastUpdated":1728301601000}'),e={name:"guides/cometbtf-to-rollkit.md"},h=Object.assign(e,{setup(o){return(s,i)=>(l(),t("div",null,i[0]||(i[0]=[a('<h1 id="how-to-turn-your-cometbft-app-into-a-rollkit-app" tabindex="-1">How to Turn Your CometBFT App into a Rollkit App <a class="header-anchor" href="#how-to-turn-your-cometbft-app-into-a-rollkit-app" aria-label="Permalink to &quot;How to Turn Your CometBFT App into a Rollkit App&quot;">​</a></h1><p>This guide will walk you through the process of turning your existing CometBFT app into a Rollkit app. By integrating Rollkit into your CometBFT-based blockchain, you can leverage enhanced modularity and data availability features.</p><p>This guide assumes you have a CometBFT app set up and <a href="https://docs.ignite.com" target="_blank" rel="noreferrer">Ignite CLI</a> installed.</p><h2 id="install-rollkit" tabindex="-1">Install Rollkit <a class="header-anchor" href="#install-rollkit" aria-label="Permalink to &quot;Install Rollkit {#install-rollkit}&quot;">​</a></h2><p>You need to install Rollkit in your CometBFT app. Open a terminal in the directory where your app is located and run the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ignite</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> app</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> github.com/ignite/apps/rollkit@rollkit/v0.2.0</span></span></code></pre></div><h2 id="add-rollkit-features" tabindex="-1">Add Rollkit Features to Your CometBFT App <a class="header-anchor" href="#add-rollkit-features" aria-label="Permalink to &quot;Add Rollkit Features to Your CometBFT App {#add-rollkit-features}&quot;">​</a></h2><p>Now that Rollkit is installed, you can add Rollkit features to your existing blockchain app. Run the following command to integrate Rollkit:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ignite</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span></span></code></pre></div><h2 id="initialize-rollkit-local-da" tabindex="-1">Initialize Rollkit with Local DA <a class="header-anchor" href="#initialize-rollkit-local-da" aria-label="Permalink to &quot;Initialize Rollkit with Local DA {#initialize-rollkit-local-da}&quot;">​</a></h2><p>To prepare your app for Rollkit, you&#39;ll need to initialize it with Local Data Availability (Local DA). This allows your app to interact with a lightweight, testable DA layer.</p><p>Run the following command to initialize Rollkit with Local DA:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ignite</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --local-da</span></span></code></pre></div><h2 id="initialize-rollkit-cli-configuration" tabindex="-1">Initialize Rollkit CLI Configuration <a class="header-anchor" href="#initialize-rollkit-cli-configuration" aria-label="Permalink to &quot;Initialize Rollkit CLI Configuration {#initialize-rollkit-cli-configuration}&quot;">​</a></h2><p>Next, you&#39;ll need to initialize the Rollkit CLI configuration by generating the <code>rollkit.toml</code> file. This file is crucial for Rollkit to understand the structure of your rollup.</p><p>To create the <code>rollkit.toml</code> configuration, use this command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> toml</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><p>This command sets up the <code>rollkit.toml</code> file, where you can further customize configuration parameters as needed.</p><h2 id="start-rollkit-app" tabindex="-1">Start Your Rollkit App <a class="header-anchor" href="#start-rollkit-app" aria-label="Permalink to &quot;Start Your Rollkit App {#start-rollkit-app}&quot;">​</a></h2><p>Once everything is configured, you can start your Rollkit-enabled CometBFT app or (simply rollkit app). Use the following command to start your blockchain:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rollkit.aggregator</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rollkit.da_address</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://localhost:7980</span></span></code></pre></div><h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2><p>By following this guide, you&#39;ve successfully converted your CometBFT app into a Rollkit app.</p>',23)])))}});export{p as __pageData,h as default};
