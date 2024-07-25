import{c as a}from"./chunks/constants.1b8e7bd8.js";import{o as n,c as t,k as l,t as e,l as p,a as s,X as o}from"./chunks/framework.2426f4bf.js";const i=l("h1",{id:"how-to-use-rollkit-cli",tabindex:"-1"},[s("How to Use Rollkit CLI "),l("a",{class:"header-anchor",href:"#how-to-use-rollkit-cli","aria-label":'Permalink to "How to Use Rollkit CLI"'},"​")],-1),r=l("p",null,[s("This guide will walk you through the basics of installing and using Rollkit CLI. You'll learn how to install the CLI, initialize a configuration file ("),l("code",null,"rollkit.toml"),s("), and run rollup commands.")],-1),c=l("h2",{id:"_1-installing-rollkit-cli",tabindex:"-1"},[s("1. Installing Rollkit CLI "),l("a",{class:"header-anchor",href:"#_1-installing-rollkit-cli","aria-label":'Permalink to "1. Installing Rollkit CLI"'},"​")],-1),d=l("p",null,"To install Rollkit CLI, execute the following command:",-1),C={class:"language-bash"},y=l("button",{title:"Copy Code",class:"copy"},null,-1),u=l("span",{class:"lang"},"bash",-1),h={class:"shiki material-theme-palenight"},m={class:"line"},D=o('<span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-sSL</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://rollkit.dev/install.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span>',12),A={style:{color:"#C3E88D"}},g=o(`<p>This command downloads and installs the Rollkit CLI of specified version.</p><h2 id="_2-initializing-rollkit-toml" tabindex="-1">2. Initializing <code>rollkit.toml</code> <a class="header-anchor" href="#_2-initializing-rollkit-toml" aria-label="Permalink to &quot;2. Initializing \`rollkit.toml\`&quot;">​</a></h2><p>The <code>rollkit.toml</code> file is a configuration file that Rollkit uses to understand the structure and entry point of your rollup. To initialize this file, follow these steps:</p><h3 id="steps-to-generate-rollkit-toml" tabindex="-1">Steps to Generate <code>rollkit.toml</code>: <a class="header-anchor" href="#steps-to-generate-rollkit-toml" aria-label="Permalink to &quot;Steps to Generate \`rollkit.toml\`:&quot;">​</a></h3><ol><li><p>Run the following command to generate the <code>rollkit.toml</code> file:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">toml</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span></code></pre></div></li><li><p>You should see an output similar to this (example taken from <a href="/docs-preview/pr-425/tutorials/gm-world">GM world</a> tutorial):</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Found</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rollup</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">entrypoint:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/root/gm/cmd/gmd/main.go,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">adding</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rollkit.toml</span></span>
<span class="line"><span style="color:#FFCB6B;">Could</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">find</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rollup</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">under</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gm.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Please</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">put</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">chain.config_dir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rollkit.toml</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">manually.</span></span>
<span class="line"><span style="color:#FFCB6B;">Initialized</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rollkit.toml</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">current</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">directory.</span></span></code></pre></div></li><li><p>The output indicates that the rollup entrypoint is <code>~/gm/cmd/gmd/main.go</code>.</p></li><li><p>Open the <code>rollkit.toml</code> file, and under the <code>[chain]</code> section, set <code>config_dir</code> to the appropriate directory where your chain configuration is. For GM World tutorial, <code>rollkit.toml</code> file looks like this:</p><div class="language-toml"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">entrypoint </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./cmd/gmd/main.go</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">chain</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  config_dir </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./.gm</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><p>Adjust <code>entrypoint</code> and <code>config_dir</code> according to your project structure.</p></li></ol><h2 id="_3-running-rollup-commands-using-rollkit-cli" tabindex="-1">3. Running Rollup Commands Using Rollkit CLI <a class="header-anchor" href="#_3-running-rollup-commands-using-rollkit-cli" aria-label="Permalink to &quot;3. Running Rollup Commands Using Rollkit CLI&quot;">​</a></h2><p>Once you have the <code>rollkit.toml</code> file set up, you can run any rollup command using the Rollkit CLI. Ensure you are in the directory containing the <code>rollkit.toml</code> file when executing commands.</p><h3 id="example" tabindex="-1">Example: <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example:&quot;">​</a></h3><ol><li><p>Navigate to the directory containing the <code>rollkit.toml</code> file.</p></li><li><p>Now you could do:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># instead of &lt;rollup&gt;d start</span></span>
<span class="line"><span style="color:#FFCB6B;">rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># instead of &lt;rollup&gt;d tx</span></span>
<span class="line"><span style="color:#FFCB6B;">rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># for any &lt;rollup&gt;d &lt;command&gt;</span></span>
<span class="line"><span style="color:#FFCB6B;">rollkit</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">comman</span><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></li></ol><h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2><p>By following these steps, you can install the Rollkit CLI, initialize the <code>rollkit.toml</code> configuration file, and run rollup commands. This setup helps you manage and interact with your rollup project efficiently.</p>`,11),B=JSON.parse('{"title":"How to Use Rollkit CLI","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"How to Use Rollkit CLI | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"guides/use-rollkit-cli.md","filePath":"guides/use-rollkit-cli.md","lastUpdated":1721897652000}'),_={name:"guides/use-rollkit-cli.md"},I=Object.assign(_,{setup(k){return(f,E)=>(n(),t("div",null,[i,r,c,d,l("div",C,[y,u,l("pre",h,[l("code",null,[l("span",m,[D,l("span",A,e(p(a).rollkitLatestTag),1)])])])]),g]))}});export{B as __pageData,I as default};
