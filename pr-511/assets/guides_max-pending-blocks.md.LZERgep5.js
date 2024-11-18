import{_ as i,c as a,a3 as e,o as n}from"./chunks/framework.C7FN2r7C.js";const c=JSON.parse('{"title":"How to configure the maximum number of blocks pending DA submission","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"How to configure the maximum number of blocks pending DA submission | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"guides/max-pending-blocks.md","filePath":"guides/max-pending-blocks.md","lastUpdated":1731944100000}'),t={name:"guides/max-pending-blocks.md"};function l(o,s,h,p,k,d){return n(),a("div",null,s[0]||(s[0]=[e(`<h1 id="how-to-configure-the-maximum-number-of-blocks-pending-da-submission" tabindex="-1">How to configure the maximum number of blocks pending DA submission <a class="header-anchor" href="#how-to-configure-the-maximum-number-of-blocks-pending-da-submission" aria-label="Permalink to &quot;How to configure the maximum number of blocks pending DA submission&quot;">​</a></h1><p>The <code>--rollkit.max_pending_blocks</code> flag is used to configure the maximum limit of blocks pending DA submission (0 for no limit)</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--rollkit.max_pending_blocks</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uint</span></span></code></pre></div><p>An example command would look like this:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [existing </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">flags...]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [!code </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [existing </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">flags...]</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rollkit.max_pending_blocks=100</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [!code </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">++]</span></span></code></pre></div>`,5)]))}const m=i(t,[["render",l]]);export{c as __pageData,m as default};
