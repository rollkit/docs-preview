import{_ as t,c as i,a3 as a,o as n}from"./chunks/framework.FospTOxz.js";const p=JSON.parse('{"title":"Sequencing","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Sequencing | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"tutorials/sequencing/overview.md","filePath":"tutorials/sequencing/overview.md","lastUpdated":1732042533000}'),s={name:"tutorials/sequencing/overview.md"};function r(o,e,l,c,h,u){return n(),i("div",null,e[0]||(e[0]=[a(`<h1 id="sequencing" tabindex="-1">Sequencing <a class="header-anchor" href="#sequencing" aria-label="Permalink to &quot;Sequencing&quot;">​</a></h1><p>The next step after choosing your DA layer is to choose your sequencing scheme.</p><h2 id="rollkit-prior-to-sequencing" tabindex="-1">Rollkit prior to Sequencing <a class="header-anchor" href="#rollkit-prior-to-sequencing" aria-label="Permalink to &quot;Rollkit prior to Sequencing&quot;">​</a></h2><p>Rollkit&#39;s aggregator node was responsible for selecting and ordering transactions for including in the rollup blocks. The Rollkit aggregator used to follow a FCFS strategy, where every transaction submitted gets included in the block in order without any censorship. Use of a different sequencing strategy or connecting to a sequencing network (e.g., Astria) was not possible. Rollkit <a href="https://github.com/rollkit/rollkit/releases/tag/v0.14.0" target="_blank" rel="noreferrer">v0.14.0</a> onwards makes it possible for rollkit to connect to a sequencing network and communicate via grpc.</p><h2 id="sequencing-interface" tabindex="-1">Sequencing Interface <a class="header-anchor" href="#sequencing-interface" aria-label="Permalink to &quot;Sequencing Interface {#sequencing-interface}&quot;">​</a></h2><p><a href="https://github.com/rollkit/go-sequencing" target="_blank" rel="noreferrer">go-sequencing</a> defines a sequencing interface for communicating between any sequencing network and Rollkit. The key functions of the interface are defined as shown below.</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SubmitRollupTransaction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(rollupId, data) returns (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetNextBatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(rollupId, lastBatchHash, maxBytes) returns (batch, timestamp)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VerifyBatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(rollupId, batchHash) returns (status)</span></span></code></pre></div><p>It mainly consists of:</p><ul><li><code>SubmitRollupTransaction</code> relays the rollup transactions from Rollkit rollup to the sequencing network</li><li><code>GetNextBatch</code> returns the next batch of transactions along with a deterministic timestamp</li><li><code>VerifyBatch</code> validates the sequenced batch</li></ul><h2 id="mock-sequencer" tabindex="-1">Mock Sequencer <a class="header-anchor" href="#mock-sequencer" aria-label="Permalink to &quot;Mock Sequencer {#mock-sequencer}&quot;">​</a></h2><p>You might have noticed that we did not define a specific sequencer during the <a href="./../quick-start">quick start</a> or <a href="./../wordle">build a chain</a> tutorials. This is because we used a mock sequencer that is built into Rollkit.</p><p>If you revisit the logs from those tutorials, you will see one of the first lines being:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">I[2024-11-15</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">14:54:19.843]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Starting</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mock</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sequencer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    module=main</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> address=localhost:50051</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rollupID=test-rollup-a736683c</span></span></code></pre></div><p>The mock sequencer is a simple in-memory sequencer that is great for testing and development. It is not suitable for production use.</p><h2 id="sequencing-implementations" tabindex="-1">Sequencing Implementations <a class="header-anchor" href="#sequencing-implementations" aria-label="Permalink to &quot;Sequencing Implementations {#sequencing-implementations}&quot;">​</a></h2><p>An implementation of the sequencing interface mainly acts as a middleware that connects Rollkit rollup and the sequencing layer. It implements the sequencing interface functions described above. For example, <a href="https://github.com/rollkit/centralized-sequencer" target="_blank" rel="noreferrer">centralized-sequencer</a> is the refactored functionality from the Rollkit prior to <code>v0.14.0</code>. The centralized sequencer is the middleware run by the aggregator node of the Rollkit rollup. The aggregator node relays rollup transactions to centralized sequencer which then submits them to the DA network (such as Celestia). The header producer node then retrieves (via <code>GetNextBatch</code>) the batched transaction from the centralized sequencer to execute the transactions and produce the updated rollup state. Similarly, there are other sequencing middlewares which can be built for various sequencing strategies or even for connecting to different third-party sequencing networks.</p><p>The sequencing implementations that are currently work in progress:</p><ul><li><a href="./local">local-sequencer</a></li><li><a href="./centralized">centralized-sequencer</a></li><li><a href="./based">based-sequencer</a></li><li><a href="./forced-inclusion">forced-inclusion-sequencer</a></li><li><a href="./astria">astria-sequencer</a></li></ul>`,18)]))}const g=t(s,[["render",r]]);export{p as __pageData,g as default};
