import{_ as s,K as i,o as e,c as o,b as n,w as a,a5 as h,X as t,O as l,a as d}from"./chunks/framework.7751a937.js";const y=JSON.parse('{"title":"Pessimistic Rollup with a Shared Sequencer","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Pessimistic Rollup with a Shared Sequencer | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"learn/pessimistic-rollup-with-a-shared-sequencer.md","filePath":"learn/pessimistic-rollup-with-a-shared-sequencer.md","lastUpdated":1713096755000}'),c={name:"learn/pessimistic-rollup-with-a-shared-sequencer.md"},u=t('<h1 id="pessimistic-rollup-with-a-shared-sequencer" tabindex="-1">Pessimistic Rollup with a Shared Sequencer <a class="header-anchor" href="#pessimistic-rollup-with-a-shared-sequencer" aria-label="Permalink to &quot;Pessimistic Rollup with a Shared Sequencer&quot;">​</a></h1><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h2><p>This is a pessimistic Rollup using a Shared Sequencer. This design follows the Forum Post originating the <a href="https://forum.celestia.org/t/sharing-a-sequencer-set-by-separating-execution-from-aggregation/702/9" target="_blank" rel="noreferrer">Shared Sequencer Design</a>. We assume the only canonical way to order the transactions are through the Shared Sequencer. All transactions have to be ordered by the Shared Sequencer and other batches are ignored.</p><h2 id="design" tabindex="-1">Design <a class="header-anchor" href="#design" aria-label="Permalink to &quot;Design&quot;">​</a></h2><p>Here is an example of what this design could look like:</p>',5),p=t('<h2 id="aggregation" tabindex="-1">Aggregation <a class="header-anchor" href="#aggregation" aria-label="Permalink to &quot;Aggregation&quot;">​</a></h2><p>The Shared Sequencer Aggregates Transactions and posts the ordered Batch to the underlying DA-Layer.</p><blockquote><p>To unlock a web2 equivalent UX, the shared sequencers […] can provide fast soft commitments. These soft commitments provide some arbitrary promise of the final ordering of transactions, and can be used to create prematurely updated versions of the state. As soon as the block data has been confirmed to be posted on the base layer, the state can be considered final.</p></blockquote><p>The Shared Sequencer does Inclusion and Ordering.</p><h2 id="header-production" tabindex="-1">Header Production <a class="header-anchor" href="#header-production" aria-label="Permalink to &quot;Header Production&quot;">​</a></h2><p>Each Full Node has to execute all transactions. There are no Light Nodes in this system so there is no need to produce a rollup header.</p><h2 id="censorship-resistance" tabindex="-1">Censorship Resistance <a class="header-anchor" href="#censorship-resistance" aria-label="Permalink to &quot;Censorship Resistance&quot;">​</a></h2><p>Lets assume $L_{ss}$ is the liveness of the Shared Sequencer and the $L_{da}$ is the liveness of the DA-Layer. Then the liveness of this scheme is $L = Min[L_{ss},L_{da}]$ saying if one of the Systems has a liveness failure the Rollup has a liveness failure. If the Shared Sequencer fails then we cannot proceed with the Rollup. If the DA-Layer fails we could continue with the Shared Sequencers Soft Commitments. We would inherit the consensuses and data-availability from the Shared Sequencer which would be worse than the original Data-Availability Layer.</p><h2 id="liveness" tabindex="-1">Liveness <a class="header-anchor" href="#liveness" aria-label="Permalink to &quot;Liveness&quot;">​</a></h2><p>Based rollups enjoys the same liveness guarantees as the DA-Layer (Based Rollups).</p><h2 id="rollup-light-nodes" tabindex="-1">Rollup Light Nodes <a class="header-anchor" href="#rollup-light-nodes" aria-label="Permalink to &quot;Rollup Light Nodes&quot;">​</a></h2><p>N/A</p><h2 id="smallest-trust-minimized-setup" tabindex="-1">Smallest Trust-Minimized Setup <a class="header-anchor" href="#smallest-trust-minimized-setup" aria-label="Permalink to &quot;Smallest Trust-Minimized Setup&quot;">​</a></h2><p>DA-Layer Light Node + Shared Sequencer Light Node + Rollup Full Node</p><p>We need a Shared Sequencer Light Node to validate the Headers of the Shared Sequencer. We made an assumption in the beginning that the order is fixed by the ordering of the shared sequencer. The Shared Sequencer will have a cryptographic commitment of the order of the Transaction inside the Shared Sequencer Header. This way we can confirm that the batch that we receive or read from the DA-Layer is the one created by the Shared Sequencer.</p>',15);function m(g,S,f,A,q,_){const r=i("Mermaid");return e(),o("div",null,[u,(e(),n(h,null,{default:a(()=>[l(r,{id:"mermaid-15",graph:"graph%20TB%0A%20%20U%5B%22User%22%5D%20--%3E%20T%5B%22Transaction%22%5D%20--%3E%20SA%5B%22Shared%20Aggregator%22%5D%0A%0A%20%20subgraph%20A%5B%22Aggregator%22%5D%0A%20%20%20%20SA%20--%3E%20OB1%5B%22Ordered%20Batch%22%5D%20--%3E%20DAL%5B%22DA-Layer%22%5D%0A%20%20%20%20SA%20--%3E%20OB2%5B%22Soft%20Committed%20Ordered%20Batch%20%5Cn%20%26%20Shared%20Aggregator%20Header%2B%22%5D%0A%20%20end%0A%20%20%0A%20%20OB2%20--%3E%20FN%5B%22Rollup%20Full%20Node%22%5D%0A%20%20DAL%20--%3E%20OB3%5B%22Ordered%20Batch%22%5D%20--%3E%20FN%0A%0A%20%20style%20U%20stroke%3AcurrentColor%2C%20fill%3A%23FFA07A%0A%20%20style%20SA%20stroke%3AcurrentColor%2C%20fill%3A%2387CEFA%0A%20%20style%20FN%20stroke%3AcurrentColor%2C%20fill%3A%2398FB98%0A%20%20style%20DAL%20stroke%3AcurrentColor%2C%20fill%3A%23D8BFD8%0A"})]),fallback:a(()=>[d(" Loading... ")]),_:1})),p])}const D=s(c,[["render",m]]);export{y as __pageData,D as default};
