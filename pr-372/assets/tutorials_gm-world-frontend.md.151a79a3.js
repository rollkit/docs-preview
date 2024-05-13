import{c as s}from"./chunks/constants.3c15db13.js";import{o as n,c as l,k as e,t as a,l as o,X as t}from"./chunks/framework.8eed1238.js";const r="/docs-preview/pr-372/assets/gm-world-frontend-wallet-connected.cee97a34.png",p=t('<h1 id="gm-world-ui-app" tabindex="-1">GM World UI App <a class="header-anchor" href="#gm-world-ui-app" aria-label="Permalink to &quot;GM World UI App&quot;">​</a></h1><p>This tutorial aims to demonstrate the user interface (UI) application aspect of connecting a wallet to a rollup, showcasing that it&#39;s as straightforward as connecting to any other blockchain. It assumes you have the <a href="https://www.keplr.app/" target="_blank" rel="noreferrer">Keplr</a> wallet extension installed in your browser.</p><h2 id="🛠-prerequisites" tabindex="-1">🛠 Prerequisites <a class="header-anchor" href="#🛠-prerequisites" aria-label="Permalink to &quot;🛠 Prerequisites&quot;">​</a></h2><p>Before you start, ensure you have completed the <a href="/docs-preview/pr-372/tutorials/gm-world">GM world</a> tutorial. Your rollup needs to be running since the app will connect to it via RPC.</p><p>You will also need Yarn installed for web app development.</p>',5),i={class:"tip custom-block"},c=e("p",{class:"custom-block-title"},"TIP",-1),d=e("p",null,"If you don't have Yarn or Node.js, run this command to install it using cURL on most Linux distros and macOS:",-1),h={class:"language-bash"},u=e("button",{title:"Copy Code",class:"copy"},null,-1),_=e("span",{class:"lang"},"bash",-1),m={class:"shiki material-theme-palenight"},y={class:"line"},g=t('<span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-sSL</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://rollkit.dev/install-yarn.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span>',12),C={style:{color:"#C3E88D"}},f=e("span",{style:{color:"#A6ACCD"}}," ",-1),A={style:{color:"#C3E88D"}},w=t(`<h2 id="🚀-starting-an-app" tabindex="-1">🚀 Starting an App <a class="header-anchor" href="#🚀-starting-an-app" aria-label="Permalink to &quot;🚀 Starting an App&quot;">​</a></h2><p>We&#39;ve simplified the process by preparing a repository with the necessary scaffolding and configuration for our local rollup. Run a command to download the code, install dependencies, and start the development server:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-sSL</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://rollkit.dev/install-gm-frontend-app.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span></span></code></pre></div><p>You should see the following output indicating that the development server is up and running:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ready - started server on 0.0.0.0:3000, url: http://localhost:3000</span></span>
<span class="line"><span style="color:#A6ACCD;">info  - SWC minify release candidate enabled. https://nextjs.link/swcmin</span></span>
<span class="line"><span style="color:#A6ACCD;">event - compiled client and server successfully in 7.8s (2225 modules)</span></span></code></pre></div><h2 id="🔗-connecting-your-wallet" tabindex="-1">🔗 Connecting Your Wallet <a class="header-anchor" href="#🔗-connecting-your-wallet" aria-label="Permalink to &quot;🔗 Connecting Your Wallet&quot;">​</a></h2><p>To connect your Keplr wallet to the application, simply open your browser and go to <a href="https://localhost:3000" target="_blank" rel="noreferrer">http://localhost:3000</a>.</p><p>Click the &quot;Connect Wallet&quot; button on the page, and approve the connection request in the Keplr prompt.</p><p>Once authorized, your wallet address will be displayed, confirming that your wallet is successfully connected.</p><p><img src="`+r+'" alt="gm-world-frontend-connected"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you run into any issues, make sure your Keplr wallet is updated and set to connect to your local environment.</p></div><h2 id="🎉-next-steps" tabindex="-1">🎉 Next Steps <a class="header-anchor" href="#🎉-next-steps" aria-label="Permalink to &quot;🎉 Next Steps&quot;">​</a></h2><p>Congratulations! You&#39;ve experienced connecting to a rollup from the user side — simple and straightforward. Now, you might consider exploring how to add more application logic to your rollup using the Cosmos SDK, as demonstrated in our Wordle App tutorial.</p>',13),P=JSON.parse('{"title":"GM World UI App","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"GM World UI App | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"tutorials/gm-world-frontend.md","filePath":"tutorials/gm-world-frontend.md","lastUpdated":1715596560000}'),b={name:"tutorials/gm-world-frontend.md"},q=Object.assign(b,{setup(D){return(v,k)=>(n(),l("div",null,[p,e("div",i,[c,d,e("div",h,[u,_,e("pre",m,[e("code",null,[e("span",y,[g,e("span",C,a(o(s).nodeVersion),1),f,e("span",A,a(o(s).yarnVersion),1)])])])])]),w]))}});export{P as __pageData,q as default};