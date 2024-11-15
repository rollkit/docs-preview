import{_ as a,c as s,a3 as t,o as e}from"./chunks/framework.DnAtUPNH.js";const c=JSON.parse('{"title":"DA","description":"This page provides an overview of how rollkit integrates with DA.","frontmatter":{"description":"This page provides an overview of how rollkit integrates with DA.","head":[["meta",{"name":"og:title","content":"DA | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"tutorials/da/overview.md","filePath":"tutorials/da/overview.md","lastUpdated":1731700611000}'),l={name:"tutorials/da/overview.md"};function n(h,i,r,k,o,p){return e(),s("div",null,i[0]||(i[0]=[t(`<h1 id="da" tabindex="-1">DA <a class="header-anchor" href="#da" aria-label="Permalink to &quot;DA&quot;">​</a></h1><p>Now that you have the foundations of running and building a rollup with Rollkit, it is time to start customizing it to fit your needs.</p><p>The first choice you need to make is which data availability (DA) layer to use. The DA layer is a critical component of a blockchain, as it provides the data availability and finality guarantees that your chain needs to operate securely.</p><p>Rollkit uses the <a href="https://github.com/rollkit/go-da" target="_blank" rel="noreferrer">go-da interface</a> to communicate to DA layers. Any DA layer that implements this interface can be used with Rollkit.</p><h2 id="go-da" tabindex="-1">Go DA <a class="header-anchor" href="#go-da" aria-label="Permalink to &quot;Go DA {#go-da}&quot;">​</a></h2><p>The <a href="https://github.com/rollkit/go-da" target="_blank" rel="noreferrer">go-da interface</a> defines the core functions required to interact with a DA layer. Probably the two most important functions being <code>Get</code> and <code>Submit</code>.</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// DA defines very generic interface for interaction with Data Availability layers.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DA</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// Get returns Blob for each given ID, or an error.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	Get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ctx</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ids</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Namespace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) ([]</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Blob</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// Submit submits the Blobs to Data Availability layer.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	Submit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ctx</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">blobs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Blob</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">gasPrice</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> float64</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Namespace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) ([]</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>DA layers can integrate the <code>go-da</code> interface directly into their node like <a href="./celestia-da">Celestia</a>, or they can define a middleware service like <a href="./avail-da">Avail</a>.</p><h2 id="mock-da" tabindex="-1">Mock DA <a class="header-anchor" href="#mock-da" aria-label="Permalink to &quot;Mock DA {#mock-da}&quot;">​</a></h2><p>You might have noticed that we did not define any DA layer during the <a href="./../quick-start">quick start</a> or <a href="./../wordle">build a chain</a> tutorials. This is because we used a mock DA layer that is built into Rollkit.</p><p>If you revisit the logs from those tutorials, you will see one of the first lines being:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">I[2024-11-15</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">14:09:41.735]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Starting</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mock</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DA</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                      module=main</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> address=http://localhost:26658</span></span></code></pre></div><p>The mock DA layer is a simple in-memory DA layer that is great for testing and development. It is not suitable for production use, as it does not provide the data availability and finality guarantees that a real DA layer would.</p><h2 id="da-layers" tabindex="-1">DA Layers <a class="header-anchor" href="#da-layers" aria-label="Permalink to &quot;DA Layers {#da-layers}&quot;">​</a></h2><p>Now that you have a better understanding of what a DA layer is, you can start to explore the different DA layers that are available to use with Rollkit.</p><ul><li><a href="./local-da">Local DA</a></li><li><a href="./celestia-da">Celestia DA</a></li><li><a href="./avail-da">Avail DA</a></li></ul>`,16)]))}const g=a(l,[["render",n]]);export{c as __pageData,g as default};
