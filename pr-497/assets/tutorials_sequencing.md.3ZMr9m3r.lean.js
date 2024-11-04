import{_ as t,c as n,a3 as a,o as r}from"./chunks/framework.Bwn14OHy.js";const p=JSON.parse('{"title":"Sequencing","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Sequencing | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"tutorials/sequencing.md","filePath":"tutorials/sequencing.md","lastUpdated":1730719452000}'),i={name:"tutorials/sequencing.md"};function s(o,e,l,c,u,h){return r(),n("div",null,e[0]||(e[0]=[a(`<h1 id="sequencing" tabindex="-1">Sequencing <a class="header-anchor" href="#sequencing" aria-label="Permalink to &quot;Sequencing&quot;">​</a></h1><h2 id="rollkit-prior-to-sequencing" tabindex="-1">Rollkit prior to Sequencing <a class="header-anchor" href="#rollkit-prior-to-sequencing" aria-label="Permalink to &quot;Rollkit prior to Sequencing&quot;">​</a></h2><p>Rollkit&#39;s aggregator node was responsible for selecting and ordering transactions for including in the rollup blocks. The Rollkit aggregator used to follow a FCFS strategy, where every transaction submitted gets included in the block in order without any censorship. Use of a different sequencing strategy or connecting to a sequencing network (e.g., Astria) was not possible. Rollkit <code>v0.13.8</code> onwards makes it possible for rollkit to connect to a sequencing network and communicate via grpc.</p><h3 id="sequencing-interface" tabindex="-1">Sequencing Interface <a class="header-anchor" href="#sequencing-interface" aria-label="Permalink to &quot;Sequencing Interface&quot;">​</a></h3><p><a href="https://github.com/rollkit/go-sequencing" target="_blank" rel="noreferrer">go-sequencing</a> defines a sequencing interface for communicating between any sequencing network and Rollkit. The key functions of the interface are defined as shown below.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>SubmitRollupTransaction(rollupId, data) returns (error)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>GetNextBatch(rollupId, lastBatchHash, maxBytes) returns (batch, timestamp)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>VerifyBatch(rollupId, batchHash) returns (status)</span></span></code></pre></div><p>It mainly consists of:</p><ul><li><code>SubmitRollupTransaction</code> relays the rollup transactions from Rollkit rollup to the sequencing network</li><li><code>GetNextBatch</code> returns the next batch of transactions along with a deterministic timestamp</li><li><code>VerifyBatch</code> validates the sequenced batch</li></ul><h3 id="sequencing-implementations" tabindex="-1">Sequencing Implementations <a class="header-anchor" href="#sequencing-implementations" aria-label="Permalink to &quot;Sequencing Implementations&quot;">​</a></h3><p>An implementation of the sequencing interface mainly acts as a middleware that connects Rollkit rollup and the sequencing layer. It implements the sequencing interface functions described above. For example, <a href="https://github.com/rollkit/centralized-sequencer" target="_blank" rel="noreferrer">centralized-sequencer</a> is the refactored functionality from the Rollkit prior to <code>v0.13.8</code>. The centralized sequencer is the middleware run by the aggregator node of the Rollkit rollup. The aggregator node relays rollup transactions to centralized sequencer which then submits them to the DA network (such as Celestia). The header producer node then retrieves (via <code>GetNextBatch</code>) the batched transaction from the centralized sequencer to execute the transactions and produce the updated rollup state. Similarly, there are other sequencing middlewares which can be built for various sequencing strategies or even for connecting to different third-party sequencing networks.</p><p>The sequencing implementations that are currently work in progress:</p><ul><li><a href="https://github.com/rollkit/centralized-sequencer" target="_blank" rel="noreferrer">centralized-sequencer</a></li><li><a href="https://github.com/rollkit/based-sequencer" target="_blank" rel="noreferrer">based-sequencer</a></li><li><a href="./">forced-inclusion-sequencer</a></li><li><a href="https://github.com/rollkit/astria-sequencer" target="_blank" rel="noreferrer">astria-sequencer</a></li></ul>`,12)]))}const g=t(i,[["render",s]]);export{p as __pageData,g as default};
