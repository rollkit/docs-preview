import{_ as e,c as a,a3 as s,o as i}from"./chunks/framework.KMs7aKFv.js";const r="/docs-preview/pr-477/assets/custom-network.Ccp3HLJp.png",o="/docs-preview/pr-477/assets/import-address.CwDtvTun.png",n="/docs-preview/pr-477/assets/alert-rule.C7t8zNE5.png",l="/docs-preview/pr-477/assets/alert-events.ENf_Rhu-.png",y=JSON.parse('{"title":"How to integrate Range with your rollup","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"How to integrate Range with your rollup | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"guides/rollkit-monitoring.md","filePath":"guides/rollkit-monitoring.md","lastUpdated":1728301601000}'),p={name:"guides/rollkit-monitoring.md"};function d(h,t,u,c,g,k){return i(),a("div",null,t[0]||(t[0]=[s('<h1 id="how-to-integrate-range-with-your-rollup" tabindex="-1">How to integrate Range with your rollup <a class="header-anchor" href="#how-to-integrate-range-with-your-rollup" aria-label="Permalink to &quot;How to integrate Range with your rollup&quot;">​</a></h1><p>This section illustrates how Rollkit developers can leverage the Range platform to monitor their rollup activity and explore relevant addresses and transactions in less than 5 minutes.</p><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>In this guide, we’ll go over the steps of the integration of our sample rollup GM, which is divided into three sections:</p><ol><li><strong>Integrate your rollup with Range and start the indexing.</strong></li><li><strong>Add your addresses and contracts.</strong></li><li><strong>Create your first alert and explore transactions.</strong></li></ol><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><p>You need to have an operational rollkit rollup. If you haven&#39;t done so, you&#39;ll need to complete the <a href="./../tutorials/gm-world">GM world</a> tutorial first.</p><h3 id="_1-integrate-your-rollup" tabindex="-1">1. Integrate Your Rollup <a class="header-anchor" href="#_1-integrate-your-rollup" aria-label="Permalink to &quot;1. Integrate Your Rollup&quot;">​</a></h3><p>We’ll integrate our rollup GM into Range and start indexing blocks and transactions in real-time.</p><p><img src="'+r+'" alt="custom-network"></p><h4 id="steps" tabindex="-1">Steps <a class="header-anchor" href="#steps" aria-label="Permalink to &quot;Steps&quot;">​</a></h4><ul><li>Create an account in <a href="https://app.range.org" target="_blank" rel="noreferrer">Range</a></li><li>Make sure you have a public RPC endpoint of your Rollkit rollup</li><li>Go to the settings tab on your account profile in the top-right corner</li><li>Click the <strong>Add Network</strong> button in the Custom Network section</li><li>Choose Rollkit and fill out the form</li><li>Congrats! Your rollup should be integrated in Range in less than 15 seconds.</li></ul><h3 id="_2-add-your-addresses-and-contracts" tabindex="-1">2. Add Your Addresses and Contracts <a class="header-anchor" href="#_2-add-your-addresses-and-contracts" aria-label="Permalink to &quot;2. Add Your Addresses and Contracts&quot;">​</a></h3><p>Now that your rollup is integrated into Range, you can customize your workspace. The first step is adding addresses and contracts that you want to monitor. For that, head to the Address section:</p><p><img src="'+o+'" alt="import-address"></p><p>Once you’ve added one or multiple addresses, you can start looking at the real-time transactions explorer in the Transactions tab.</p><h3 id="_3-creating-your-first-alert-rule" tabindex="-1">3. Creating Your First Alert Rule <a class="header-anchor" href="#_3-creating-your-first-alert-rule" aria-label="Permalink to &quot;3. Creating Your First Alert Rule&quot;">​</a></h3><p>Now, you can set up alerts to monitor specific events or transactions in your rollup. As an example, we can create an alert that notifies us every time our address is involved in a successful transaction:</p><p><img src="'+n+'" alt="alert-rules"></p><p>After executing a sample transaction:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gmd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bank</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> send</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gm-991hesf7xgmjwttag2n2wzk43rvxh47nn4ckh3e6s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gm-991rcctqc5l4px95k6tdg4pjrms70m2a9t35rl50t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 4039stake</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --keyring-backend</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --node</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tcp://127.0.0.1:36657</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --chain-id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --fees</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 5000stake</span></span></code></pre></div><p>The alert events will appear both in the Overview tab and the Alerting section:</p><p><img src="'+l+'" alt="alert-events"></p><p>🎊 Congrats! You&#39;ve detected the first monitored transaction in your GM rollup.</p>',24)]))}const F=e(p,[["render",d]]);export{y as __pageData,F as default};
