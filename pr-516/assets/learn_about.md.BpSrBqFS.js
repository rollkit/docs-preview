import{_ as t,c as a,a3 as o,o as i}from"./chunks/framework.J3QPsvdH.js";const d=JSON.parse('{"title":"About Rollkit","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"About Rollkit | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"learn/about.md","filePath":"learn/about.md","lastUpdated":1732119965000}'),l={name:"learn/about.md"};function r(s,e,n,c,h,u){return i(),a("div",null,e[0]||(e[0]=[o('<h1 id="about-rollkit" tabindex="-1">About Rollkit <a class="header-anchor" href="#about-rollkit" aria-label="Permalink to &quot;About Rollkit&quot;">​</a></h1><p>Our mission is to allow anyone to launch their own sovereign, customizable blockchain as easily as a smart contract by utilizing the shared security of a modular data availability network.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>In order to use Rollkit, it&#39;s important to have some familiarity with Cosmos SDK. You can get up to speed on Cosmos SDK by visiting their <a href="https://docs.cosmos.network/main" target="_blank" rel="noreferrer">official documentation page</a>.</p><p>If you&#39;re familiar with Rollkit, you may want to skip to the <a href="/docs-preview/pr-516/tutorials/gm-world">tutorials section</a>.</p></div><h2 id="what-is-rollkit" tabindex="-1">What is Rollkit? <a class="header-anchor" href="#what-is-rollkit" aria-label="Permalink to &quot;What is Rollkit?&quot;">​</a></h2><p>Rollkit is a sovereign rollup framework that gives developers the freedom to deploy rollups throughout the modular stack, opening new possibilities for rapid experimentation and innovation.</p><p><a href="https://blog.celestia.org/sovereign-rollup-chains/" target="_blank" rel="noreferrer">Read more on the Celestia blog</a> to learn more about the concept of sovereign rollups.</p><p>Rollkit is an <a href="https://github.com/rollkit/rollkit" target="_blank" rel="noreferrer">open-source framework</a>. It features a modular node that can run rollups and exposes an <a href="https://github.com/cometbft/cometbft/tree/main/abci" target="_blank" rel="noreferrer">ABCI-compatible client interface</a>, which can be used as a substitute for CometBFT in any ABCI-compatible blockchain application.</p><p>Rollkit uses data availability (DA) layers by having a unified client interface which can be implemented for use with different DA networks, such as <a href="https://celestia.org/" target="_blank" rel="noreferrer">Celestia</a>.</p><p>Our goal is to empower developers to quickly innovate and create new classes of rollups with minimal trade-offs, and to make deploying a new chain as easy as deploying a smart contract.</p><h2 id="what-problems-is-rollkit-solving" tabindex="-1">What problems is Rollkit solving? <a class="header-anchor" href="#what-problems-is-rollkit-solving" aria-label="Permalink to &quot;What problems is Rollkit solving?&quot;">​</a></h2><h3 id="_1-scalability-and-customizability" tabindex="-1">1. Scalability and customizability <a class="header-anchor" href="#_1-scalability-and-customizability" aria-label="Permalink to &quot;1. Scalability and customizability&quot;">​</a></h3><p>Deploying your decentralized application as a smart contract on a shared blockchain has many limitations. Your smart contract has to share computational resources with every other application, so scalability is limited.</p><p>Plus, you&#39;re restricted to the execution environment that the shared blockchain uses, so developer flexibility is limited.</p><h3 id="_2-security-and-time-to-market" tabindex="-1">2. Security and time to market <a class="header-anchor" href="#_2-security-and-time-to-market" aria-label="Permalink to &quot;2. Security and time to market&quot;">​</a></h3><p>Deploying a new chain might sound like the perfect solution for the problems listed above. While it&#39;s somewhat true, deploying a new layer 1 chain presents a complex set of challenges and trade-offs for developers looking to build blockchain products.</p><p>Deploying a new layer 1 requires significant resources, including time, capital, and expertise, which can be a barrier to entry for some developers.</p><p>In order to secure the network, developers must bootstrap a sufficiently secure set of validators, incurring the overhead of managing a full consensus network. This requires paying validators with inflationary tokens, putting the business sustainability of the network at risk. A strong community and network effect are also critical for success, but can be challenging to achieve as the network must gain widespread adoption to be secure and valuable.</p><p>In a potential future with millions of chains, it&#39;s unlikely all of those chains will be able to sustainably attract a sufficiently secure and decentralized validator set.</p><h2 id="why-rollkit" tabindex="-1">Why Rollkit? <a class="header-anchor" href="#why-rollkit" aria-label="Permalink to &quot;Why Rollkit?&quot;">​</a></h2><p>Rollkit solves the challenges encountered during the deployment of a smart contract or a new layer 1, by minimizing these tradeoffs through the implementation of rollup chains (rollups).</p><p>With Rollkit, developers can benefit from:</p><ul><li><p><strong>Shared security</strong>: Rollups inherit security from a data availability layer, by posting blocks to it. Rollups reduce the trust assumptions placed on rollup sequencers by allowing full nodes to download and verify the transactions in the blocks posted by the sequencer. For optimistic or zk rollups, in case of fraudulent blocks, full nodes can generate fraud or zk proofs, which they can share with the rest of the network, including light nodes. Our roadmap includes the ability for light clients to receive and verify proofs, so that everyday users can enjoy high security guarantees.</p></li><li><p><strong>Scalability:</strong> Rollkit rollups are deployed on specialized data availability layers like Celestia, which directly leverages the scalability of the DA layer. Additionally, rollup transactions are executed off-chain rather than the data availability layer. This means rollups have their own dedicated computational resources, rather than sharing computational resources with other applications.</p></li><li><p><strong>Customizability:</strong> Rollkit is built as an open source modular framework, to make it easier for developers to reuse the four main components and customize their rollups. These components are data availability layers, execution environments, proof systems, and sequencer schemes. The components used by the <a href="/docs-preview/pr-516/learn/stack">Rollkit stack</a> are customizable.</p></li><li><p><strong>Faster time to market:</strong> Rollkit eliminates the need to bootstrap a validator set, manage a consensus network, incur high economic costs, and face other trade-offs that come with deploying a new layer 1. Rollkit&#39;s goal is to make deploying a rollup as easy as it is to deploy a smart contract, cutting the time it takes to bring blockchain products to market from months or even years to just minutes.</p></li><li><p><strong>Sovereignty</strong>: Rollkit also enables developers to deploy sovereign rollups for cases where communities require sovereignty.</p></li></ul><h2 id="how-can-you-use-rollkit" tabindex="-1">How can you use Rollkit? <a class="header-anchor" href="#how-can-you-use-rollkit" aria-label="Permalink to &quot;How can you use Rollkit?&quot;">​</a></h2><p>As briefly mentioned above, Rollkit could be used in many different ways. From sovereign rollups, to settlement layers, and in the future even to L3s.</p><h3 id="rollup-with-any-execution-environment" tabindex="-1">Rollup with any execution environment <a class="header-anchor" href="#rollup-with-any-execution-environment" aria-label="Permalink to &quot;Rollup with any execution environment&quot;">​</a></h3><p>Rollkit gives developers the flexibility to use pre-existing ABCI-compatible state machines or create a custom state machine tailored to their rollup needs. Rollkit does not restrict the use of any specific virtual machine, allowing developers to experiment and bring innovative applications to life.</p><h3 id="sovereign-rollup-with-cosmos-sdk" tabindex="-1">Sovereign rollup with Cosmos SDK <a class="header-anchor" href="#sovereign-rollup-with-cosmos-sdk" aria-label="Permalink to &quot;Sovereign rollup with Cosmos SDK&quot;">​</a></h3><p>Similarly to how developers utilize the Cosmos SDK to build a sovereign layer 1 chain, the Cosmos SDK could be utilized to create a Rollkit-compatible rollup chain. Cosmos-SDK has great <a href="https://docs.cosmos.network/main" target="_blank" rel="noreferrer">documentation</a> and tooling that developers can leverage to learn.</p><p>Another possibility is taking an existing layer 1 built with the Cosmos SDK and deploying it as a Rollkit rollup. This can provide a great opportunity for experimentation and growth.</p><h3 id="build-a-settlement-layer" tabindex="-1">Build a settlement layer <a class="header-anchor" href="#build-a-settlement-layer" aria-label="Permalink to &quot;Build a settlement layer&quot;">​</a></h3><p><a href="https://celestia.org/learn/modular-settlement-layers/settlement-in-the-modular-stack/" target="_blank" rel="noreferrer">Settlement layers</a> are ideal for developers who want to avoid deploying sovereign rollups. They provide a platform for rollups to verify proofs and resolve disputes. Additionally, they act as a hub for rollups to facilitate trust-minimized token transfers and liquidity sharing between rollups that share the same settlement layer. Think of settlement layers as a special type of execution layer.</p><h2 id="when-can-you-use-rollkit" tabindex="-1">When can you use Rollkit? <a class="header-anchor" href="#when-can-you-use-rollkit" aria-label="Permalink to &quot;When can you use Rollkit?&quot;">​</a></h2><p>As of today, Rollkit is still in the alpha stage. The framework currently provides a centralized sequencer, an execution interface (ABCI or Cosmos SDK), and a connection to a data availability layer.</p><p>We&#39;re currently working on implementing many new and exciting features such as light nodes and state fraud proofs.</p><p>Head down to the next section to learn more about what&#39;s coming for Rollkit. If you&#39;re ready to start building, you can skip to the <a href="/docs-preview/pr-516/tutorials/gm-world">Tutorials</a> section.</p><p>Spoiler alert, whichever you choose, it&#39;s going to be a great rabbit hole!</p>',36)]))}const m=t(l,[["render",r]]);export{d as __pageData,m as default};
