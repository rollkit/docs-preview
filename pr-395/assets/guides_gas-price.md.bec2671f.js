import{_ as e,o as a,c as s,X as t}from"./chunks/framework.4f7d4643.js";const _=JSON.parse('{"title":"How to configure gas price","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"How to configure gas price | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"guides/gas-price.md","filePath":"guides/gas-price.md","lastUpdated":1718383206000}'),o={name:"guides/gas-price.md"},n=t('<h1 id="how-to-configure-gas-price" tabindex="-1">How to configure gas price <a class="header-anchor" href="#how-to-configure-gas-price" aria-label="Permalink to &quot;How to configure gas price&quot;">​</a></h1><p>In most cases, the gas price can be left to the defaults, which ensures that the price is greater than the minimum gas price accepted by the core node.</p><p>The gas price can also be configured manually with the flag <code>--rollkit.da_gas_price</code>:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">gmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rollkit.da_gas_price=0.1</span><span style="color:#A6ACCD;"> [existing </span><span style="color:#C3E88D;">flags...]</span></span></code></pre></div><p>This configures the rollup to always use the fixed gas price of <code>0.1utia/gas</code>.</p><p>When running a rollup against a live network, the gas price may see occasional spikes during periods of high mempool congestion.</p><p>To avoid such transient blob submission failures, the flag <code>--rollkit.da_gas_multiplier</code> may be used:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">gmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rollkit.da_gas_price=0.1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rollkit.da_gas_multiplier=1.2</span><span style="color:#A6ACCD;"> [...]</span></span></code></pre></div><p>This configures the rollup to keep increasing the gas price by a factor of 1.2x of the previous price until the transaction is accepted by the core node.</p><p>When the blob submission transaction eventually succeeds, the gas price will gradually return to the default, decreasing by the same factor.</p><p>The gas multiplier will only be used if the gas price has been manually configured.</p>',11),i=[n];function l(c,r,p,g,d,h){return a(),s("div",null,i)}const f=e(o,[["render",l]]);export{_ as __pageData,f as default};
