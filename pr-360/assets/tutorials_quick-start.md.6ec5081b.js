import{_ as s,o as a,c as l,X as o}from"./chunks/framework.50b24f47.js";const D=JSON.parse('{"title":"Quick Start Guide","description":"Quickly start a rollup node using the Rollkit CLI.","frontmatter":{"description":"Quickly start a rollup node using the Rollkit CLI.","head":[["meta",{"name":"og:title","content":"Quick Start Guide | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"tutorials/quick-start.md","filePath":"tutorials/quick-start.md","lastUpdated":1714654605000}'),n={name:"tutorials/quick-start.md"},e=o(`<h1 id="quick-start-guide" tabindex="-1">Quick Start Guide <a class="header-anchor" href="#quick-start-guide" aria-label="Permalink to &quot;Quick Start Guide&quot;">​</a></h1><p>Welcome to Rollkit, a sovereign rollup framework! The easiest way to launch your sovereign rollup node is by using the Rollkit CLI.</p><h3 id="📦-install-rollkit-cli" tabindex="-1">📦 Install Rollkit (CLI) <a class="header-anchor" href="#📦-install-rollkit-cli" aria-label="Permalink to &quot;📦 Install Rollkit (CLI)&quot;">​</a></h3><p>To install Rollkit, run the following command in your terminal:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://install.rollkit.dev</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sh</span></span></code></pre></div><p>Verify the installation by checking the Rollkit version:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">version</span></span></code></pre></div><p>A successful installation will display the version number and its associated git commit hash.</p><h3 id="🚀-run-your-sovereign-rollup-node" tabindex="-1">🚀 Run Your Sovereign Rollup Node <a class="header-anchor" href="#🚀-run-your-sovereign-rollup-node" aria-label="Permalink to &quot;🚀 Run Your Sovereign Rollup Node&quot;">​</a></h3><p>To start a basic sovereign rollup node, execute:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span></span></code></pre></div><p>Upon execution, the CLI will output log entries that provide insights into the node&#39;s initialization and operation:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">I[2024-05-01</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">09:58:46.001]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Found</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">validator</span><span style="color:#A6ACCD;">                      </span><span style="color:#C3E88D;">module=main</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">keyFile=/root/.rollkit/config/priv_validator_key.json</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stateFile=/root/.rollkit/data/priv_validator_state.json</span></span>
<span class="line"><span style="color:#FFCB6B;">I[2024-05-01</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">09:58:46.002]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Found</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">key</span><span style="color:#A6ACCD;">                               </span><span style="color:#C3E88D;">module=main</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">path=/root/.rollkit/config/node_key.json</span></span>
<span class="line"><span style="color:#FFCB6B;">I[2024-05-01</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">09:58:46.002]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Found</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">genesis</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file</span><span style="color:#A6ACCD;">                           </span><span style="color:#C3E88D;">module=main</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">path=/root/.rollkit/config/genesis.json</span></span>
<span class="line"><span style="color:#82AAFF;">...</span></span>
<span class="line"><span style="color:#FFCB6B;">I[2024-05-01</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">09:58:46.080]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Started</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node</span><span style="color:#A6ACCD;">                                 </span><span style="color:#C3E88D;">module=main</span></span>
<span class="line"><span style="color:#FFCB6B;">I[2024-05-01</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">09:58:46.081]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Creating</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">publishing</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;">                </span><span style="color:#C3E88D;">module=BlockManager</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">height=</span><span style="color:#F78C6C;">223</span></span>
<span class="line"><span style="color:#FFCB6B;">I[2024-05-01</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">09:58:46.082]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Finalized</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;">                              </span><span style="color:#C3E88D;">module=BlockManager</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">height=</span><span style="color:#F78C6C;">223</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">num_txs_res=</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">num_val_updates=</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block_app_hash=</span></span></code></pre></div><h3 id="🎉-conclusion" tabindex="-1">🎉 Conclusion <a class="header-anchor" href="#🎉-conclusion" aria-label="Permalink to &quot;🎉 Conclusion&quot;">​</a></h3><p>That&#39;s it! Your sovereign rollup node is now up and running. It&#39;s incredibly simple to start a blockchain (which is essentially what a rollup is) these days using Rollkit. Explore further and discover how you can build useful applications on Rollkit. Good luck!</p>`,15),t=[e];function p(r,c,i,C,y,u){return a(),l("div",null,t)}const h=s(n,[["render",p]]);export{D as __pageData,h as default};
