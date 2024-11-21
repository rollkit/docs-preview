import{_ as s,c as a,a3 as i,o as t}from"./chunks/framework.DaM8gfBC.js";const g=JSON.parse('{"title":"How to configure gas price","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"How to configure gas price | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"guides/gas-price.md","filePath":"guides/gas-price.md","lastUpdated":1732211982000}'),o={name:"guides/gas-price.md"};function n(l,e,r,p,c,h){return t(),a("div",null,e[0]||(e[0]=[i('<h1 id="how-to-configure-gas-price" tabindex="-1">How to configure gas price <a class="header-anchor" href="#how-to-configure-gas-price" aria-label="Permalink to &quot;How to configure gas price&quot;">​</a></h1><p>In most cases, the gas price can be left to the defaults, which ensures that the price is greater than the minimum gas price accepted by the core node.</p><p>The gas price can also be configured manually with the flag <code>--rollkit.da_gas_price</code>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rollkit.da_gas_price=0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [existing </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">flags...]</span></span></code></pre></div><p>This configures the rollup to always use the fixed gas price of <code>0.1utia/gas</code>.</p><p>When running a rollup against a live network, the gas price may see occasional spikes during periods of high mempool congestion.</p><p>To avoid such transient blob submission failures, the flag <code>--rollkit.da_gas_multiplier</code> may be used:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rollkit.da_gas_price=0.1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rollkit.da_gas_multiplier=1.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [...]</span></span></code></pre></div><p>This configures the rollup to keep increasing the gas price by a factor of 1.2x of the previous price until the transaction is accepted by the core node.</p><p>When the blob submission transaction eventually succeeds, the gas price will gradually return to the default, decreasing by the same factor.</p><p>The gas multiplier will only be used if the gas price has been manually configured.</p>',11)]))}const u=s(o,[["render",n]]);export{g as __pageData,u as default};
