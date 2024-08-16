import{_ as s,o as e,c as o,X as a}from"./chunks/framework.f720b2c7.js";const u=JSON.parse('{"title":"How to change speed of block production","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"How to change speed of block production | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"guides/block-times.md","filePath":"guides/block-times.md","lastUpdated":1723803827000}'),l={name:"guides/block-times.md"},n=a(`<h1 id="how-to-change-speed-of-block-production" tabindex="-1">How to change speed of block production <a class="header-anchor" href="#how-to-change-speed-of-block-production" aria-label="Permalink to &quot;How to change speed of block production&quot;">​</a></h1><p>If you have gone through both the <a href="./gm-world">GM world</a> and the <a href="./full-and-sequencer-node">Full and sequencer node rollup setup</a> already, you&#39;re now ready to experiment with faster block times.</p><p>In your <code>rollkit start [args...]</code> command, you will need to add a flag and then the argument for block time.</p><p>The flag is:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">--rollkit.block_time</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#C3E88D;">s</span></span></code></pre></div><p>Where <code>1s</code> can be adjusted to the speed of your choosing.</p><p>Here is an example:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#676E95;font-style:italic;"># start the chain</span></span>
<span class="line diff remove"><span style="color:#FFCB6B;">rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> [existing </span><span style="color:#C3E88D;">flags...]</span><span style="color:#A6ACCD;"> </span></span>
<span class="line diff add"><span style="color:#FFCB6B;">rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> [existing </span><span style="color:#C3E88D;">flags...]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rollkit.block_time</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#C3E88D;">s</span><span style="color:#A6ACCD;"> </span></span></code></pre></div><p>In the above example, we&#39;ve changed it to one second blocks. Alternatively, you could slow your rollup down to 30 seconds:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">--rollkit.block_time</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#C3E88D;">s</span></span></code></pre></div><p>Or speed it up even more, to sub-second block times (100 milliseconds):</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">--rollkit.block_time</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#C3E88D;">ms</span></span></code></pre></div>`,12),t=[n];function p(c,r,i,d,h,C){return e(),o("div",null,t)}const m=s(l,[["render",p]]);export{u as __pageData,m as default};
