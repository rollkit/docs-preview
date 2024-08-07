import{_ as s,o,c as n,X as e}from"./chunks/framework.ad321c94.js";const b=JSON.parse('{"title":"How to configure the maximum number of blocks pending DA submission","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"How to configure the maximum number of blocks pending DA submission | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"guides/max-pending-blocks.md","filePath":"guides/max-pending-blocks.md","lastUpdated":1723052694000}'),a={name:"guides/max-pending-blocks.md"},t=e(`<h1 id="how-to-configure-the-maximum-number-of-blocks-pending-da-submission" tabindex="-1">How to configure the maximum number of blocks pending DA submission <a class="header-anchor" href="#how-to-configure-the-maximum-number-of-blocks-pending-da-submission" aria-label="Permalink to &quot;How to configure the maximum number of blocks pending DA submission&quot;">​</a></h1><p>The <code>--rollkit.max_pending_blocks</code> flag is used to configure the maximum limit of blocks pending DA submission (0 for no limit)</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">--rollkit.max_pending_blocks</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uint</span></span></code></pre></div><p>An example command would look like this:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line diff remove"><span style="color:#FFCB6B;">rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> [existing </span><span style="color:#C3E88D;">flags...]</span><span style="color:#A6ACCD;"> </span></span>
<span class="line diff add"><span style="color:#FFCB6B;">rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> [existing </span><span style="color:#C3E88D;">flags...]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rollkit.max_pending_blocks=100</span><span style="color:#A6ACCD;"> </span></span></code></pre></div>`,5),l=[t];function i(p,c,r,m,d,u){return o(),n("div",null,l)}const f=s(a,[["render",i]]);export{b as __pageData,f as default};
