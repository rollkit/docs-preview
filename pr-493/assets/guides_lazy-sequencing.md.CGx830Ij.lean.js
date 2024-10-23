import{_ as i,c as a,a3 as t,o as e}from"./chunks/framework.BPEMuM0k.js";const d=JSON.parse('{"title":"How to Use Lazy Sequencing (Aggregation)","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"How to Use Lazy Sequencing (Aggregation) | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"guides/lazy-sequencing.md","filePath":"guides/lazy-sequencing.md","lastUpdated":1729698134000}'),n={name:"guides/lazy-sequencing.md"};function l(o,s,h,p,r,k){return e(),a("div",null,s[0]||(s[0]=[t(`<h1 id="how-to-use-lazy-sequencing-aggregation" tabindex="-1">How to Use Lazy Sequencing (Aggregation) <a class="header-anchor" href="#how-to-use-lazy-sequencing-aggregation" aria-label="Permalink to &quot;How to Use Lazy Sequencing (Aggregation)&quot;">​</a></h1><p>In this guide, we&#39;ll go over how to use lazy sequencing.</p><p>This feature was introduced in Rollkit v0.7.0 (with custom buffer time later in v0.13.7) and allows rollup operators to wait for transactions before building blocks. This prevents the rollup from building empty blocks.</p><p>To turn on lazy sequencing, add the following flag to your start command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--rollkit.lazy_aggregator</span></span></code></pre></div><p>Additionally, if you want to specify the time interval used for block production even if there are no transactions, use:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--rollkit.lazy_block_time</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">duratio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>An example command with a custom block time of 1 minute:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># start the chain</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [existing </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">flags...]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [!code </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [existing </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">flags...]</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rollkit.lazy_aggregator</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rollkit.lazy_block_time=1m0s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [!code </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">++]</span></span></code></pre></div>`,9)]))}const c=i(n,[["render",l]]);export{d as __pageData,c as default};
