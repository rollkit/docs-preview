import{_ as e,o as t,c as a,X as o}from"./chunks/framework.3afc5262.js";const s="/docs-preview/pr-408/assets/custom-network.93d26ef7.png",r="/docs-preview/pr-408/assets/import-address.dbe6ef3b.png",n="/docs-preview/pr-408/assets/alert-rule.a5aecc66.png",l="/docs-preview/pr-408/assets/alert-events.74486fc6.png",f=JSON.parse('{"title":"How to integrate Range with your rollup","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"How to integrate Range with your rollup | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"guides/rollkit-monitoring.md","filePath":"guides/rollkit-monitoring.md","lastUpdated":1719588863000}'),i={name:"guides/rollkit-monitoring.md"},p=o('<h1 id="how-to-integrate-range-with-your-rollup" tabindex="-1">How to integrate Range with your rollup <a class="header-anchor" href="#how-to-integrate-range-with-your-rollup" aria-label="Permalink to &quot;How to integrate Range with your rollup&quot;">​</a></h1><p>This section illustrates how Rollkit developers can leverage the Range platform to monitor their rollup activity and explore relevant addresses and transactions in less than 5 minutes.</p><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>In this guide, we’ll go over the steps of the integration of our sample rollup GM, which is divided into three sections:</p><ol><li><strong>Integrate your rollup with Range and start the indexing.</strong></li><li><strong>Add your addresses and contracts.</strong></li><li><strong>Create your first alert and explore transactions.</strong></li></ol><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><p>You need to have an operational rollkit rollup. If you haven&#39;t done so, you&#39;ll need to complete the <a href="./../tutorials/gm-world">GM world</a> tutorial first.</p><h3 id="_1-integrate-your-rollup" tabindex="-1">1. Integrate Your Rollup <a class="header-anchor" href="#_1-integrate-your-rollup" aria-label="Permalink to &quot;1. Integrate Your Rollup&quot;">​</a></h3><p>We’ll integrate our rollup GM into Range and start indexing blocks and transactions in real-time.</p><p><img src="'+s+'" alt="custom-network"></p><h4 id="steps" tabindex="-1">Steps <a class="header-anchor" href="#steps" aria-label="Permalink to &quot;Steps&quot;">​</a></h4><ul><li>Create an account in <a href="https://app.range.org" target="_blank" rel="noreferrer">Range</a></li><li>Make sure you have a public RPC endpoint of your Rollkit rollup</li><li>Go to the settings tab on your account profile in the top-right corner</li><li>Click the <strong>Add Network</strong> button in the Custom Network section</li><li>Choose Rollkit and fill out the form</li><li>Congrats! Your rollup should be integrated in Range in less than 15 seconds.</li></ul><h3 id="_2-add-your-addresses-and-contracts" tabindex="-1">2. Add Your Addresses and Contracts <a class="header-anchor" href="#_2-add-your-addresses-and-contracts" aria-label="Permalink to &quot;2. Add Your Addresses and Contracts&quot;">​</a></h3><p>Now that your rollup is integrated into Range, you can customize your workspace. The first step is adding addresses and contracts that you want to monitor. For that, head to the Address section:</p><p><img src="'+r+'" alt="import-address"></p><p>Once you’ve added one or multiple addresses, you can start looking at the real-time transactions explorer in the Transactions tab.</p><h3 id="_3-creating-your-first-alert-rule" tabindex="-1">3. Creating Your First Alert Rule <a class="header-anchor" href="#_3-creating-your-first-alert-rule" aria-label="Permalink to &quot;3. Creating Your First Alert Rule&quot;">​</a></h3><p>Now, you can set up alerts to monitor specific events or transactions in your rollup. As an example, we can create an alert that notifies us every time our address is involved in a successful transaction:</p><p><img src="'+n+'" alt="alert-rules"></p><p>After executing a sample transaction:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">gmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bank</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">send</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gm-991hesf7xgmjwttag2n2wzk43rvxh47nn4ckh3e6s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gm-991rcctqc5l4px95k6tdg4pjrms70m2a9t35rl50t</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4039</span><span style="color:#C3E88D;">stake</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--keyring-backend</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--node</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tcp://127.0.0.1:36657</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--chain-id</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--fees</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5000</span><span style="color:#C3E88D;">stake</span></span></code></pre></div><p>The alert events will appear both in the Overview tab and the Alerting section:</p><p><img src="'+l+'" alt="alert-events"></p><p>🎊 Congrats! You&#39;ve detected the first monitored transaction in your GM rollup.</p>',24),c=[p];function d(u,h,g,y,C,m){return t(),a("div",null,c)}const _=e(i,[["render",d]]);export{f as __pageData,_ as default};
