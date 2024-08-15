import{o as a,c as s,X as e}from"./chunks/framework.5ad35515.js";const o=e(`<h1 id="quick-start-guide-for-omni-octane-with-rollkit" tabindex="-1">Quick start guide for Omni Octane with Rollkit <a class="header-anchor" href="#quick-start-guide-for-omni-octane-with-rollkit" aria-label="Permalink to &quot;Quick start guide for Omni Octane with Rollkit&quot;">​</a></h1><p>This guide will help you quickly set up and run an Omni node using Rollkit and local-DA.</p><h2 id="📦-clone-the-omni-repository" tabindex="-1">📦 Clone the Omni repository <a class="header-anchor" href="#📦-clone-the-omni-repository" aria-label="Permalink to &quot;📦 Clone the Omni repository&quot;">​</a></h2><p>To get started, clone the Omni repository with the Rollkit branch:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/rollkit/omni.git</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">omni</span></span></code></pre></div><h2 id="🏗️-build-docker-images" tabindex="-1">🏗️ Build Docker images <a class="header-anchor" href="#🏗️-build-docker-images" aria-label="Permalink to &quot;🏗️ Build Docker images&quot;">​</a></h2><p>Before running Omni, you need to build the Docker images. This step requires GoReleaser to be installed on your system. If you don&#39;t have GoReleaser, you&#39;ll need to install it first:</p><ul><li>On macOS with Homebrew:<div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">goreleaser</span></span></code></pre></div></li><li>On Linux or Windows with Go installed:<div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">go</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">github.com/goreleaser/goreleaser@latest</span></span></code></pre></div></li></ul><p>Make sure GoReleaser is in your PATH after installation.</p><p>Once GoReleaser is installed, run the following command to build the Docker images:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build-docker</span></span></code></pre></div><p>This command will build all the necessary Docker images for running Omni with Rollkit.</p><p>If you encounter any issues with GoReleaser or the build process, make sure you have sufficient free space on your machine. You can check your available disk space using the <code>df -h</code> command on Linux/macOS or <code>powershell -command &quot;Get-PSDrive -PSProvider &#39;FileSystem&#39;&quot;</code> on Windows.</p><h2 id="🚀-deploy-omni-with-rollkit-and-local-da" tabindex="-1">🚀 Deploy Omni with Rollkit and local-DA <a class="header-anchor" href="#🚀-deploy-omni-with-rollkit-and-local-da" aria-label="Permalink to &quot;🚀 Deploy Omni with Rollkit and local-DA&quot;">​</a></h2><p>To start your Omni node with Rollkit and local-DA, execute:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">devnet-zero-deploy</span></span></code></pre></div><p>Upon execution, the command will set up and start your Omni node. You should see output indicating the progress and status of your node. Notice the <code>EVM Chain RPC available</code> message, which indicates that the Omni node is ready to accept EVM transactions:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">24-07-22</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#C3E88D;">:29:03.655</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INFO</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">EVM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Chain</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">RPC</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">available</span><span style="color:#A6ACCD;">                  </span><span style="color:#C3E88D;">chain_id=</span><span style="color:#F78C6C;">1651</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">chain_name=omni_evm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">url=http://127.0.0.1:8000</span></span></code></pre></div><h2 id="🧪-smart-contract-deployment-and-interaction" tabindex="-1">🧪 Smart Contract Deployment and Interaction <a class="header-anchor" href="#🧪-smart-contract-deployment-and-interaction" aria-label="Permalink to &quot;🧪 Smart Contract Deployment and Interaction&quot;">​</a></h2><p>To deploy and interact with smart contracts on the Omni EVM, you can use the tools you are already familiar with, follow our <a href="/docs-preview/pr-429/tutorials/evm-contract-interaction">Contract interaction tutorial</a> to get a hands on experience.</p><p>To fund your account with some tokens, you can use the omni-cli, which needs to be installed first:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install-cli</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># install omni cli </span></span>
<span class="line"><span style="color:#FFCB6B;">omni</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">devnet</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fund</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rpc-url</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://127.0.0.1:8000</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--address=</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">your</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">addres</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="🛑-stopping-the-node" tabindex="-1">🛑 Stopping the node <a class="header-anchor" href="#🛑-stopping-the-node" aria-label="Permalink to &quot;🛑 Stopping the node&quot;">​</a></h2><p>When you&#39;re done and want to stop the Omni node, use the following command:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">devnet-zero-clean</span></span></code></pre></div><p>This will stop all running containers and clean up the environment.</p><h2 id="🎉-conclusion" tabindex="-1">🎉 Conclusion <a class="header-anchor" href="#🎉-conclusion" aria-label="Permalink to &quot;🎉 Conclusion&quot;">​</a></h2><p>That&#39;s it! You&#39;ve successfully set up and run an Omni node with Rollkit and local-DA. This setup allows you to experiment with Omni&#39;s capabilities integrated with Rollkit.</p>`,28),n=[o],r=JSON.parse('{"title":"Quick start guide for Omni Octane with Rollkit","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Quick start guide for Omni Octane with Rollkit | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"tutorials/octane-evm.md","filePath":"tutorials/octane-evm.md","lastUpdated":1723747218000}'),l={name:"tutorials/octane-evm.md"},d=Object.assign(l,{setup(t){return(i,p)=>(a(),s("div",null,n))}});export{r as __pageData,d as default};
