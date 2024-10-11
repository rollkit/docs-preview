import{_ as i,c as a,a3 as e,o as t}from"./chunks/framework.BWYLlII7.js";const r=JSON.parse('{"title":"How to change speed of block production","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"How to change speed of block production | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"guides/block-times.md","filePath":"guides/block-times.md","lastUpdated":1728678688000}'),l={name:"guides/block-times.md"};function n(o,s,p,h,d,k){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="how-to-change-speed-of-block-production" tabindex="-1">How to change speed of block production <a class="header-anchor" href="#how-to-change-speed-of-block-production" aria-label="Permalink to &quot;How to change speed of block production&quot;">​</a></h1><p>If you have gone through both the <a href="./gm-world">GM world</a> and the <a href="./full-and-sequencer-node">Full and sequencer node rollup setup</a> already, you&#39;re now ready to experiment with faster block times.</p><p>In your <code>rollkit start [args...]</code> command, you will need to add a flag and then the argument for block time.</p><p>The flag is:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--rollkit.block_time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1s</span></span></code></pre></div><p>Where <code>1s</code> can be adjusted to the speed of your choosing.</p><p>Here is an example:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># start the chain</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [existing </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">flags...]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [!code </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [existing </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">flags...]</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rollkit.block_time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [!code </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">++]</span></span></code></pre></div><p>In the above example, we&#39;ve changed it to one second blocks. Alternatively, you could slow your rollup down to 30 seconds:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--rollkit.block_time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 30s</span></span></code></pre></div><p>Or speed it up even more, to sub-second block times (100 milliseconds):</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--rollkit.block_time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 100ms</span></span></code></pre></div>`,12)]))}const g=i(l,[["render",n]]);export{r as __pageData,g as default};
