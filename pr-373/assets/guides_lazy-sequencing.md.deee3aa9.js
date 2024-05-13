import{_ as a,o as s,c as e,X as n}from"./chunks/framework.b80379c1.js";const h=JSON.parse('{"title":"How to use lazy sequencing (aggregation)","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"How to use lazy sequencing (aggregation) | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"guides/lazy-sequencing.md","filePath":"guides/lazy-sequencing.md","lastUpdated":1715594965000}'),o={name:"guides/lazy-sequencing.md"},t=n(`<h1 id="how-to-use-lazy-sequencing-aggregation" tabindex="-1">How to use lazy sequencing (aggregation) <a class="header-anchor" href="#how-to-use-lazy-sequencing-aggregation" aria-label="Permalink to &quot;How to use lazy sequencing (aggregation)&quot;">​</a></h1><p>In this guide, we&#39;ll go over how to use lazy sequencing.</p><p>This feature was introduced in Rollkit v0.7.0 and allows rollup operators to wait for transactions to build blocks. This prevents the rollup from building empty blocks.</p><p>To turn on lazy sequencing, add the following flag to your start command:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">--rollkit.lazy_aggregator</span></span></code></pre></div><p>An example command would look like this:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#676E95;font-style:italic;"># start the chain</span></span>
<span class="line diff remove"><span style="color:#FFCB6B;">gmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> [existing </span><span style="color:#C3E88D;">flags...]</span><span style="color:#A6ACCD;"> </span></span>
<span class="line diff add"><span style="color:#FFCB6B;">gmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> [existing </span><span style="color:#C3E88D;">flags...]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rollkit.lazy_aggregator</span><span style="color:#A6ACCD;"> </span></span></code></pre></div>`,7),l=[t];function i(p,c,r,g,d,u){return s(),e("div",null,l)}const _=a(o,[["render",i]]);export{h as __pageData,_ as default};
