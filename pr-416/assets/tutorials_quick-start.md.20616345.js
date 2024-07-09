import{c as o}from"./chunks/constants.6af560fe.js";import{o as n,c as t,k as s,t as e,l as p,a,X as l}from"./chunks/framework.f303bb91.js";const r=s("h1",{id:"quick-start-guide",tabindex:"-1"},[a("Quick start guide "),s("a",{class:"header-anchor",href:"#quick-start-guide","aria-label":'Permalink to "Quick start guide"'},"​")],-1),c=s("p",null,"Welcome to Rollkit, a sovereign rollup framework! The easiest way to launch your sovereign rollup node is by using the Rollkit CLI.",-1),i=s("h2",{id:"📦-install-rollkit-cli",tabindex:"-1"},[a("📦 Install Rollkit (CLI) "),s("a",{class:"header-anchor",href:"#📦-install-rollkit-cli","aria-label":'Permalink to "📦 Install Rollkit (CLI)"'},"​")],-1),C=s("p",null,"To install Rollkit, run the following command in your terminal:",-1),y={class:"language-bash"},d=s("button",{title:"Copy Code",class:"copy"},null,-1),u=s("span",{class:"lang"},"bash",-1),D={class:"shiki material-theme-palenight"},h={class:"line"},A=l('<span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-sSL</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://rollkit.dev/install.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span>',12),_={style:{color:"#C3E88D"}},F=l(`<p>Verify the installation by checking the Rollkit version:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">version</span></span></code></pre></div><p>A successful installation will display the version number and its associated git commit hash.</p><h2 id="🚀-run-your-sovereign-rollup-node" tabindex="-1">🚀 Run your sovereign rollup node <a class="header-anchor" href="#🚀-run-your-sovereign-rollup-node" aria-label="Permalink to &quot;🚀 Run your sovereign rollup node&quot;">​</a></h2><p>To start a basic sovereign rollup node, execute:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span></span></code></pre></div><p>Upon execution, the CLI will output log entries that provide insights into the node&#39;s initialization and operation:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">I[2024-05-01</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">09:58:46.001]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Found</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">validator</span><span style="color:#A6ACCD;">                      </span><span style="color:#C3E88D;">module=main</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">keyFile=/root/.rollkit/config/priv_validator_key.json</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stateFile=/root/.rollkit/data/priv_validator_state.json</span></span>
<span class="line"><span style="color:#FFCB6B;">I[2024-05-01</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">09:58:46.002]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Found</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">key</span><span style="color:#A6ACCD;">                               </span><span style="color:#C3E88D;">module=main</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">path=/root/.rollkit/config/node_key.json</span></span>
<span class="line"><span style="color:#FFCB6B;">I[2024-05-01</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">09:58:46.002]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Found</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">genesis</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file</span><span style="color:#A6ACCD;">                           </span><span style="color:#C3E88D;">module=main</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">path=/root/.rollkit/config/genesis.json</span></span>
<span class="line"><span style="color:#82AAFF;">...</span></span>
<span class="line"><span style="color:#FFCB6B;">I[2024-05-01</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">09:58:46.080]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Started</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node</span><span style="color:#A6ACCD;">                                 </span><span style="color:#C3E88D;">module=main</span></span>
<span class="line"><span style="color:#FFCB6B;">I[2024-05-01</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">09:58:46.081]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Creating</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">publishing</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;">                </span><span style="color:#C3E88D;">module=BlockManager</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">height=</span><span style="color:#F78C6C;">223</span></span>
<span class="line"><span style="color:#FFCB6B;">I[2024-05-01</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">09:58:46.082]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Finalized</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;">                              </span><span style="color:#C3E88D;">module=BlockManager</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">height=</span><span style="color:#F78C6C;">223</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">num_txs_res=</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">num_val_updates=</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block_app_hash=</span></span></code></pre></div><h2 id="🎉-conclusion" tabindex="-1">🎉 Conclusion <a class="header-anchor" href="#🎉-conclusion" aria-label="Permalink to &quot;🎉 Conclusion&quot;">​</a></h2><p>That&#39;s it! Your sovereign rollup node is now up and running. It&#39;s incredibly simple to start a blockchain (which is essentially what a rollup is) these days using Rollkit. Explore further and discover how you can build useful applications on Rollkit. Good luck!</p>`,10),v=JSON.parse('{"title":"Quick start guide","description":"Quickly start a rollup node using the Rollkit CLI.","frontmatter":{"description":"Quickly start a rollup node using the Rollkit CLI.","head":[["meta",{"name":"og:title","content":"Quick start guide | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"tutorials/quick-start.md","filePath":"tutorials/quick-start.md","lastUpdated":1720517763000}'),g={name:"tutorials/quick-start.md"},f=Object.assign(g,{setup(k){return(m,E)=>(n(),t("div",null,[r,c,i,C,s("div",y,[d,u,s("pre",D,[s("code",null,[s("span",h,[A,s("span",_,e(p(o).rollkitLatestTag),1)])])])]),F]))}});export{v as __pageData,f as default};
