import{_ as l,K as i,o as a,c as n,b as s,w as o,a5 as c,k as e,a as t,X as d,O as h}from"./chunks/framework.2affd44e.js";const C=JSON.parse('{"title":"Rollkit stack","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Rollkit stack | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"learn/stack.md","filePath":"learn/stack.md","lastUpdated":1714774384000}'),p={name:"learn/stack.md"},u=e("h1",{id:"rollkit-stack",tabindex:"-1"},[t("Rollkit stack "),e("a",{class:"header-anchor",href:"#rollkit-stack","aria-label":'Permalink to "Rollkit stack"'},"​")],-1),f=e("p",null,"This page will cover the main components of Rollkit.",-1),m=e("p",null,"Rollup sequencer nodes collect transactions from users, aggregate them into blocks, and post the blocks onto a data availability (DA) layer (such as Celestia) to be ordered and finalized. Full nodes execute and verify rollup blocks, and in the case of an optimistic rollup, propagate fraud proofs when needed. Light clients will receive headers, verify proofs (fraud, zk, etc), and authenticate trust-minimized queries about the state.",-1),g=e("h2",{id:"application-structure",tabindex:"-1"},[t("Application structure "),e("a",{class:"header-anchor",href:"#application-structure","aria-label":'Permalink to "Application structure"'},"​")],-1),b=d('<h3 id="abci-interface" tabindex="-1">ABCI interface <a class="header-anchor" href="#abci-interface" aria-label="Permalink to &quot;ABCI interface&quot;">​</a></h3><p>Rollkit is a fully functional Application BlockChain Interface (ABCI) client software. It can be used as a CometBFT replacement for any ABCI application. Thanks to this compatibility, you can use tools like <a href="https://docs.cometbft.com/v0.37/app-dev/abci-cli" target="_blank" rel="noreferrer">abci-cli</a> to test and debug your rollup.</p><h4 id="cosmos-sdk" tabindex="-1">Cosmos SDK <a class="header-anchor" href="#cosmos-sdk" aria-label="Permalink to &quot;Cosmos SDK&quot;">​</a></h4><p>Would you like to change your Cosmos SDK application to a Rollkit rollup? No problem! You need to replace the Cosmos SDK Go dependency with a Rollkit-enabled version, which can be found at the <a href="https://github.com/rollkit/cosmos-sdk" target="_blank" rel="noreferrer"><code>rollkit/cosmos-sdk</code></a> repository.</p><p>Note the <a href="https://github.com/rollkit/cosmos-sdk" target="_blank" rel="noreferrer"><code>rollkit/cosmos-sdk</code></a> repository follows the release branches of upstream Cosmos SDK, but with the bonus of using Rollkit instead of CometBFT as the ABCI client.</p><p>And don&#39;t forget to replace another dependency, <code>CometBFT</code>, with <a href="https://github.com/rollkit/cometbft" target="_blank" rel="noreferrer"><code>rollkit/cometbft</code></a>, which has an enhanced ABCI interface that includes the methods needed for state fraud proofs.</p><h3 id="data-availability" tabindex="-1">Data availability <a class="header-anchor" href="#data-availability" aria-label="Permalink to &quot;Data availability&quot;">​</a></h3><p><a href="https://github.com/rollkit/rollkit/tree/main/da" target="_blank" rel="noreferrer">Data availability (DA)</a> can be accessed using generic <a href="https://github.com/rollkit/rollkit/blob/main/da/da.go" target="_blank" rel="noreferrer">interfaces</a>. This design allows for seamless integration with any DA layer. New implementations can be plugged in programmatically, without a need to fork Rollkit.</p><p>The <code>DataAvailabilityLayerClient</code> interface includes essential lifecycle methods (<code>Init</code>, <code>Start</code>, <code>Stop</code>) as well as data availability methods (<code>SubmitBlocks</code>, <code>RetrieveBlocks</code>).</p><p>The <code>BlockRetriever</code> interface serves to enable syncing of full nodes from the data availability layer. It&#39;s important to keep in mind that there is no direct correlation between the DA layer block height and the rollup height. Each DA layer block may contain an arbitrary number of rollup blocks.</p><h4 id="celestia" tabindex="-1">Celestia <a class="header-anchor" href="#celestia" aria-label="Permalink to &quot;Celestia&quot;">​</a></h4><p>Celestia is an example of a data availability integration implemented for Rollkit. It&#39;s using the <a href="https://node-rpc-docs.celestia.org" target="_blank" rel="noreferrer">Celestia Node API</a> via the <a href="https://github.com/rollkit/celestia-da" target="_blank" rel="noreferrer"><code>rollkit/celestia-da</code></a> package. To deploy a Rollkit rollup on Celestia you also have to <a href="https://docs.celestia.org/developers/node-tutorial/" target="_blank" rel="noreferrer">run a Celestia light node</a>.</p><p>Use of other data availability (DA) layers is also supported by Rollkit, and research integrations for Bitcoin, Mock, gRPC are works in progress. New DA layer integrations can be added by using the <a href="https://github.com/rollkit/go-da" target="_blank" rel="noreferrer">go-da</a> interface.</p><h2 id="node-components" tabindex="-1">Node components <a class="header-anchor" href="#node-components" aria-label="Permalink to &quot;Node components&quot;">​</a></h2><h3 id="mempool" tabindex="-1">Mempool <a class="header-anchor" href="#mempool" aria-label="Permalink to &quot;Mempool&quot;">​</a></h3><p>The <a href="https://github.com/rollkit/rollkit/tree/main/mempool" target="_blank" rel="noreferrer">mempool</a> is inspired by the CometBFT mempool. By default, transactions are handled in a First Come, First Served (FCFS) manner. Ordering of transactions can be implemented on the application level; currently this is possible by returning a priority on <code>CheckTx</code>, and once we support ABCI++ it is also possible via <code>PrepareProposal</code> and the <a href="https://docs.cosmos.network/v0.47/building-apps/app-mempool" target="_blank" rel="noreferrer">application mempool</a>.</p><h3 id="block-manager" tabindex="-1">Block manager <a class="header-anchor" href="#block-manager" aria-label="Permalink to &quot;Block manager&quot;">​</a></h3><p>The <a href="https://github.com/rollkit/rollkit/tree/main/block" target="_blank" rel="noreferrer">block manager</a> contains routines <code>AggregationLoop</code>, <code>RetrieveLoop</code>, and <code>SyncLoop</code> that communicate through Go channels. These Go routines are ran when a Rollkit node starts up (<code>OnStart</code>). Only the sequencer nodes run <code>AggregationLoop</code> which controls the frequency of block production for a rollup with a timer as per the <code>BlockTime</code> in <code>BlockManager</code>.</p><p>All nodes run <code>SyncLoop</code> which looks for the following operations:</p><ul><li><strong>Receive block headers</strong>: block headers are received through a channel <code>HeaderInCh</code> and Rollkit nodes attempt to verify the block with the corresponding block data.</li><li><strong>Receive block data</strong>: block bodies are received through a channel <code>blockInCh</code> and Rollkit nodes attempt to verify the block.</li></ul><ul><li>Signal <code>RetrieveLoop</code> with timer as per the <code>DABlockTime</code> in <code>BlockManager</code>.</li></ul><p>All nodes also run <code>RetrieveLoop</code> which is responsible for interacting with the data availability layer. It checks the last updated <code>DAHeight</code> to retrieve a block with timer <code>DABlockTime</code> signaled by <code>SyncLoop</code>. Note that the start height of the DA layer for the rollup, <code>DAStartHeight</code>, is configurable in <code>BlockManager</code>.</p><h3 id="rpc" tabindex="-1">RPC <a class="header-anchor" href="#rpc" aria-label="Permalink to &quot;RPC&quot;">​</a></h3><p>Rollkit&#39;s <a href="https://github.com/rollkit/rollkit/tree/main/rpc" target="_blank" rel="noreferrer">RPC</a> fully implements the <a href="https://docs.cometbft.com/v0.37/spec/rpc/" target="_blank" rel="noreferrer">CometBFT RPC</a> interfaces and APIs for querying:</p><ul><li><strong>Information about the rollup node</strong>: information such as node&#39;s health, status, and network info.</li><li><strong>The rollup blockchain</strong>: getting information about the rollup blockchain such as blocks and block headers.</li><li><strong>The rollup transactions</strong>: getting transaction information and broadcasting raw transactions, with search capabilities.</li><li><strong>ABCI</strong>: rollup application information.</li></ul><p>The following RPC protocols are currently supported:</p><ul><li>URI over HTTP</li><li>JSON-RPC over HTTP</li><li>JSON-RPC over WebSockets</li></ul><h3 id="p2p-layer" tabindex="-1">P2P layer <a class="header-anchor" href="#p2p-layer" aria-label="Permalink to &quot;P2P layer&quot;">​</a></h3><p>Rollkit&#39;s <a href="https://github.com/rollkit/rollkit/tree/main/p2p" target="_blank" rel="noreferrer">P2P layer</a> enables direct communication between rollup nodes. It&#39;s used to gossip transactions, headers of newly created blocks, and state fraud proofs. The P2P layer is implemented using <a href="https://github.com/libp2p" target="_blank" rel="noreferrer">libp2p</a>.</p><p>Rollkit uses <a href="https://curriculum.pl-launchpad.io/curriculum/libp2p/dht/" target="_blank" rel="noreferrer">DHT-based active peer discovery</a>. Starting a node connects to pre-configured bootstrap peers, and advertises its namespace ID in the DHT. This solution is flexible, because multiple rollup networks may reuse the same DHT/bootstrap nodes, but specific rollup network might decide to use dedicated nodes as well.</p><h2 id="rollkit-node-types" tabindex="-1">Rollkit node types <a class="header-anchor" href="#rollkit-node-types" aria-label="Permalink to &quot;Rollkit node types&quot;">​</a></h2><p>Rollkit nodes are implemented in the <a href="https://github.com/rollkit/rollkit/tree/main/node" target="_blank" rel="noreferrer"><code>node</code></a> package.</p><h3 id="full-node" tabindex="-1">Full node <a class="header-anchor" href="#full-node" aria-label="Permalink to &quot;Full node&quot;">​</a></h3><p>Full nodes verify all blocks, and produce fraud proofs for optimistic rollups. Since they fully verify all rollup blocks, they don&#39;t rely on fraud or validity proofs for security.</p><h3 id="light-node-work-in-progress" tabindex="-1">Light node (work in progress) <a class="header-anchor" href="#light-node-work-in-progress" aria-label="Permalink to &quot;Light node (work in progress)&quot;">​</a></h3><p>Light nodes are light-weight rollup nodes that authenticate block headers, and can be secured by fraud proofs or validity proofs. They&#39;re recommended for average users on low-resource devices. Users running light nodes can make trust-minimized queries about the rollup&#39;s state. Currently, Rollkit light nodes are still under development.</p><h3 id="sequencer-node" tabindex="-1">Sequencer node <a class="header-anchor" href="#sequencer-node" aria-label="Permalink to &quot;Sequencer node&quot;">​</a></h3><p>Rollups can utilize sequencer nodes. Sequencers are block producers for rollups, responsible for aggregating transactions into blocks, and typically executing transactions to produce a state root, used by the rollup&#39;s light clients.</p><p>Rollkit plans to support multiple different pluggable sequencer schemes:</p><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">Deploy in one-click</th><th style="text-align:center;">Faster soft-confirmations than L1</th><th style="text-align:center;">Control over rollup&#39;s transaction ordering</th><th style="text-align:center;">Atomic composability with other rollups</th><th style="text-align:center;">Censorship resistance</th><th style="text-align:center;">Implementation Status</th></tr></thead><tbody><tr><td style="text-align:center;">Centralized sequencer</td><td style="text-align:center;">Requires spinning up a sequencer</td><td style="text-align:center;">Yes ✅</td><td style="text-align:center;">Yes ✅</td><td style="text-align:center;">No ❌</td><td style="text-align:center;">Eventual ⏳*</td><td style="text-align:center;">✅ Implemented!</td></tr><tr><td style="text-align:center;">Decentralized sequencer</td><td style="text-align:center;">Requires spinning up a sequencer set</td><td style="text-align:center;">Yes ✅</td><td style="text-align:center;">Yes ✅</td><td style="text-align:center;">No ❌</td><td style="text-align:center;">Real-time ⚡️</td><td style="text-align:center;">Planned</td></tr><tr><td style="text-align:center;">Shared decentralized sequencer</td><td style="text-align:center;">Yes ✅</td><td style="text-align:center;">Yes ✅</td><td style="text-align:center;">No ❌</td><td style="text-align:center;">Yes ✅</td><td style="text-align:center;">Real-time ⚡️</td><td style="text-align:center;">Planned</td></tr><tr><td style="text-align:center;">Pure fork-choice rule</td><td style="text-align:center;">Yes ✅</td><td style="text-align:center;">No ❌</td><td style="text-align:center;">Maybe 🟡</td><td style="text-align:center;">Maybe 🟡</td><td style="text-align:center;">Eventual ⏳</td><td style="text-align:center;">Planned</td></tr></tbody></table><p>&quot;Pure fork-choice rule&quot; refers to any rollup without privileged sequencers, e.g. nodes defer to the data availability layer for ordering and apply a &quot;first-come-first-serve&quot; fork-choice rule.</p><p>* implementation of this property is in progress.</p><h2 id="state-validity-modes" tabindex="-1">State validity modes <a class="header-anchor" href="#state-validity-modes" aria-label="Permalink to &quot;State validity modes&quot;">​</a></h2><h3 id="pessimistic-full-nodes-only" tabindex="-1">Pessimistic (full nodes only) <a class="header-anchor" href="#pessimistic-full-nodes-only" aria-label="Permalink to &quot;Pessimistic (full nodes only)&quot;">​</a></h3><p>A pessimistic rollup is a rollup that only supports full nodes that replay all the transactions in the rollup in order to check its validity. Rollkit supports pessimistic rollups by default.</p><p>Pessimistic rollups are similar to how Tether uses Bitcoin as a data availability layer via <a href="https://github.com/OmniLayer/spec/blob/master/OmniSpecification-v0.6.adoc#summary" target="_blank" rel="noreferrer">OmniLayer</a>.</p><h3 id="optimistic-fraud-proofs-work-in-progress" tabindex="-1">Optimistic (fraud proofs) (work in progress) <a class="header-anchor" href="#optimistic-fraud-proofs-work-in-progress" aria-label="Permalink to &quot;Optimistic (fraud proofs) (work in progress)&quot;">​</a></h3><p>Rollkit&#39;s current design consists of a single sequencer that posts blocks to the DA layer, and multiple (optional) full nodes. Sequencers gossip block headers to full nodes and full nodes fetch posted blocks from the DA layer. Full nodes then execute transactions in these blocks to update their state, and gossip block headers over the P2P network to Rollkit light nodes.</p><p>Once state fraud proofs are enabled, when a block contains a fraudulent state transition, Rollkit full nodes can detect it by comparing intermediate state roots (ISRs) between transactions, and generate a state fraud proof that can be gossiped over the P2P network to Rollkit light nodes. These Rollkit light nodes can then use this state fraud proof to verify whether a fraudulent state transition occurred or not by themselves.</p><p>Overall, state fraud proofs will enable trust-minimization between full nodes and light nodes as long as there is at least one honest full node in the system that will generate state fraud proofs.</p><p>Note that Rollkit state fraud proofs are still a work in progress and will require new methods on top of ABCI, specifically, <code>GenerateFraudProof</code>, <code>VerifyFraudProof</code>, and <code>GetAppHash</code>.</p><p>You can find current detailed design and the remaining work needed to push state fraud proofs towards completion in this <a href="https://github.com/rollkit/rollkit/blob/main/specs/lazy-adr/adr-009-state-fraud-proofs.md" target="_blank" rel="noreferrer">Architecture Decision Record (ADR)</a>.</p><h3 id="validity-zk-proofs" tabindex="-1">Validity (ZK proofs) <a class="header-anchor" href="#validity-zk-proofs" aria-label="Permalink to &quot;Validity (ZK proofs)&quot;">​</a></h3><p>Validity (ZK) rollups are planned, but not currently supported by Rollkit.</p>',54);function k(y,v,w,x,q,R){const r=i("Mermaid");return a(),n("div",null,[u,f,m,g,(a(),s(c,null,{default:o(()=>[h(r,{id:"mermaid-12",graph:"graph%20TD%0A%20%20%20%20A%5BRollkit%20Rollup%5D%0A%20%20%20%20B%5BRollkit%5D%0A%20%20%20%20C%5BData%20Availability%20Chain%5D%0A%20%20%20%20%0A%20%20%20%20A%20%3C--%3E%7CABCI%7C%20B%0A%20%20%20%20B%20%3C--%3E%7CDA%20API%7C%20C%0A"})]),fallback:o(()=>[t(" Loading... ")]),_:1})),b])}const _=l(p,[["render",k]]);export{C as __pageData,_ as default};
