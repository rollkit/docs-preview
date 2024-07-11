import{_ as a,o as s,c as o,X as e}from"./chunks/framework.4c065135.js";const g=JSON.parse('{"title":"How to configure DA chain block syncing time","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"How to configure DA chain block syncing time | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"guides/da-block-time.md","filePath":"guides/da-block-time.md","lastUpdated":1720714014000}'),t={name:"guides/da-block-time.md"},n=e(`<h1 id="how-to-configure-da-chain-block-syncing-time" tabindex="-1">How to configure DA chain block syncing time <a class="header-anchor" href="#how-to-configure-da-chain-block-syncing-time" aria-label="Permalink to &quot;How to configure DA chain block syncing time&quot;">​</a></h1><p>The <code>--rollkit.da_block_time</code> flag is used to configure the time in seconds that the rollup will wait for a block to be synced from the DA chain.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">--rollkit.da_block_time</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">duration</span></span></code></pre></div><p>An example command would look like this:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line diff remove"><span style="color:#FFCB6B;">rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> [existing </span><span style="color:#C3E88D;">flags...]</span><span style="color:#A6ACCD;"> </span></span>
<span class="line diff add"><span style="color:#FFCB6B;">rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> [existing </span><span style="color:#C3E88D;">flags...]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rollkit.da_block_time=30s</span><span style="color:#A6ACCD;"> </span></span></code></pre></div>`,5),l=[n];function c(i,p,r,d,h,m){return s(),o("div",null,l)}const C=a(t,[["render",c]]);export{g as __pageData,C as default};
