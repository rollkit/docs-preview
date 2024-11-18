import{_ as s,c as a,a3 as t,o as e}from"./chunks/framework.C7FN2r7C.js";const r=JSON.parse('{"title":"How to configure DA chain block syncing time","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"How to configure DA chain block syncing time | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"guides/da-block-time.md","filePath":"guides/da-block-time.md","lastUpdated":1731944100000}'),n={name:"guides/da-block-time.md"};function l(o,i,h,k,p,c){return e(),a("div",null,i[0]||(i[0]=[t(`<h1 id="how-to-configure-da-chain-block-syncing-time" tabindex="-1">How to configure DA chain block syncing time <a class="header-anchor" href="#how-to-configure-da-chain-block-syncing-time" aria-label="Permalink to &quot;How to configure DA chain block syncing time&quot;">​</a></h1><p>The <code>--rollkit.da_block_time</code> flag is used to configure the time in seconds that the rollup will wait for a block to be synced from the DA chain.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--rollkit.da_block_time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> duration</span></span></code></pre></div><p>An example command would look like this:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [existing </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">flags...]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [!code </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [existing </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">flags...]</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rollkit.da_block_time=30s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [!code </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">++]</span></span></code></pre></div>`,5)]))}const g=s(n,[["render",l]]);export{r as __pageData,g as default};
