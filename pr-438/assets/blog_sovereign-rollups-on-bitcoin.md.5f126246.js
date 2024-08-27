import{_ as i}from"./chunks/rollkit-bitcoin-1.9492b7c5.js";import{_ as e,o as a,c as n,X as l,k as t,a as o}from"./chunks/framework.d7cafd6e.js";const r="/docs-preview/pr-438/bitcoin-rollkit/rollkit-bitcoin.png",s="/docs-preview/pr-438/bitcoin-rollkit/rollkit-bitcoin-2.png",x=JSON.parse('{"title":"Sovereign rollups on Bitcoin with Rollkit","description":"Today, we are proud to announce that Rollkit is the first rollup framework to support sovereign rollups on Bitcoin. This allows Rollkit rollups to use Bitcoin for data availability. The implementation is in alpha, but we invite curious developers to experiment with it.","frontmatter":{"head":[["meta",{"name":"title","content":"Sovereign rollups on Bitcoin with Rollkit"}],["meta",{"name":"description","content":"Today, we are proud to announce that Rollkit is the first rollup framework to support sovereign rollups on Bitcoin. This allows Rollkit rollups to use Bitcoin for data availability. The implementation is in alpha, but we invite curious developers to experiment with it."}],["meta",{"name":"keywords","content":"Rollkit, Celestia"}],["meta",{"name":"og:image","content":"/img/Rollkit-cover.jpg"}],["meta",{"name":"og:title","content":"Sovereign rollups on Bitcoin with Rollkit | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"blog/sovereign-rollups-on-bitcoin.md","filePath":"blog/sovereign-rollups-on-bitcoin.md","lastUpdated":1724783944000}'),c={name:"blog/sovereign-rollups-on-bitcoin.md"},d=l('<h1 id="sovereign-rollups-on-bitcoin-with-rollkit" tabindex="-1">Sovereign rollups on Bitcoin with Rollkit <a class="header-anchor" href="#sovereign-rollups-on-bitcoin-with-rollkit" aria-label="Permalink to &quot;Sovereign rollups on Bitcoin with Rollkit&quot;">​</a></h1><p>By Rollkit</p><p><img src="'+r+'" alt="rollkit-bitcoin"><em>Originally published on 5 March 2023</em></p><p>Today, we are proud to announce that Rollkit is the first rollup framework to support sovereign rollups on Bitcoin. An early research implementation allows Rollkit rollups to use Bitcoin for data availability.</p><p>Rollkit is opening the door for developers to create rollups with arbitrary execution environments that inherit Bitcoin’s data availability guarantees and re-org resistance. With the new integration it is now possible to run the <a href="/docs-preview/pr-438/docs/tutorials/bitcoin">EVM on Bitcoin as a Rollkit sovereign rollup</a>. Sovereign rollups on Bitcoin not only expand the possibilities for rollups, but also have the potential to help bootstrap a healthy blockspace fee market on Bitcoin, enabling a more sustainable security budget.</p><h2 id="tl-dr" tabindex="-1">Tl;dr <a class="header-anchor" href="#tl-dr" aria-label="Permalink to &quot;Tl;dr&quot;">​</a></h2><ul><li>Sovereign rollups using Bitcoin for data availability are now a reality with Rollkit’s new early research integration.</li><li>Follow along with a <a href="#evm-on-bitcoin-demo">demo</a> of the EVM running on Bitcoin as a sovereign Rollkit rollup.</li><li>The implementation was possible due to Bitcoin&#39;s Taproot upgrade and Ordinals&#39; usage of Bitcoin for publishing arbitrary data.</li></ul><h2 id="posting-data-on-bitcoin-with-taproot" tabindex="-1">Posting data on Bitcoin with Taproot <a class="header-anchor" href="#posting-data-on-bitcoin-with-taproot" aria-label="Permalink to &quot;Posting data on Bitcoin with Taproot&quot;">​</a></h2><p>On Feb. 1, 2023, the Luxor mining pool mined the largest Bitcoin block (#774628) ever, approximately 4 MB. Most of the blockspace was used to inscribe a Taproot Wizards NFT with <a href="https://ordinals.com/" target="_blank" rel="noreferrer">Ordinals</a>, a project that implements NFTs on Bitcoin by publishing the image data on-chain.</p><p>Bitcoin NFTs use Taproot witnesses to inscribe arbitrary data, enabled by Bitcoin&#39;s Taproot upgrade. Taproot witnesses provide a slightly better payload-to-data ratio than SegWit transactions. A standard transaction can include up to around 390kB of arbitrary data while still passing through the public mempool. A non-standard transaction, included by a miner directly without passing through the mempool, can include close to 4MB of arbitrary data. In short, with SegWit, it became viable to post big blobs of data to the Bitcoin blockchain.</p><p>Since then, the usage of Ordinals for NFT inscriptions and Taproot utilization has <a href="https://dune.com/dataalways/ordinals" target="_blank" rel="noreferrer">kicked off</a>. Eric Wall found that at the time of <a href="https://twitter.com/ercwl/status/1619671451417862145" target="_blank" rel="noreferrer">his tweet</a>, posting data on Bitcoin was 7x cheaper than Ethereum. Now that there are thousands of inscriptions on Bitcoin, it has become clear that sovereign rollups and an ecosystem of dapps on Bitcoin could become a reality. The missing piece: a rollup framework for easily integrating Bitcoin as a data availability layer.</p><h2 id="integrating-bitcoin-as-a-data-availability-layer-into-rollkit" tabindex="-1">Integrating Bitcoin as a data availability layer into Rollkit <a class="header-anchor" href="#integrating-bitcoin-as-a-data-availability-layer-into-rollkit" aria-label="Permalink to &quot;Integrating Bitcoin as a data availability layer into Rollkit&quot;">​</a></h2><p>Rollkit is a modular framework for rollups, where developers can plug-in custom execution layers and data availability layers. Initially, Rollkit only supported Celestia as an option for data availability and consensus. Now, Bitcoin is an option, thanks to an early research implementation of a Bitcoin data availability module for Rollkit. In this case, sovereign rollups manage their own execution and settlement while offloading consensus and data availability to Bitcoin.</p><p><img src="'+i+'" alt="rollkit-bitcoin-rollup"></p><h2 id="how-rollkit-posts-data-to-bitcoin" tabindex="-1">How Rollkit posts data to Bitcoin <a class="header-anchor" href="#how-rollkit-posts-data-to-bitcoin" aria-label="Permalink to &quot;How Rollkit posts data to Bitcoin&quot;">​</a></h2><p>To write and read data on Bitcoin, we make use of Taproot transactions. To facilitate this, we implemented <a href="https://github.com/rollkit/bitcoin-da" target="_blank" rel="noreferrer">a Go package called <code>bitcoin-da</code></a> that provides a reader/writer interface to Bitcoin. For details of how the interface works and how it uses Taproot, see <a href="https://github.com/rollkit/rollkit-btc/blob/main/spec.md" target="_blank" rel="noreferrer">the specs</a>. The package can be re-used by any project that wants to read or write data on Bitcoin.</p><p>Rollkit was built with modularity at its core. It has a data availability interface so that developers can simply implement specific methods to add a new data availability layer. To add a data availability layer, implementers need to satisfy the <code>DataAvailabilityLayerClient</code> interface which defines the behavior of the data availability client, and the <code>BlockRetriever</code> interface which defines how blocks can be synced. These interfaces live in the <a href="https://github.com/rollkit/rollkit/tree/main/da" target="_blank" rel="noreferrer">da package</a>. The most important methods in these interfaces are <code>SubmitBlock</code> and <code>RetrieveBlock</code> for reading and writing the blocks.</p><p>After implementing the Taproot reader/writer interface for Bitcoin (<code>bitcoin-da</code>), adding it as a data availability module for Rollkit took less than a day. We mostly only had to implement the <code>SubmitBlock</code> and <code>RetrieveBlocks</code> functions for Rollkit to call the <code>Read</code> and <code>Write</code> methods in <code>bitcoin-da</code>.</p><p><img src="'+s+'" alt="rollkit-bitcoin-rollup-2"></p><h2 id="evm-on-bitcoin-demo" tabindex="-1">EVM on Bitcoin demo <a class="header-anchor" href="#evm-on-bitcoin-demo" aria-label="Permalink to &quot;EVM on Bitcoin demo&quot;">​</a></h2><p>Rollkit supports custom execution layers, including EVM, CosmWasm, or the Cosmos SDK. To test the integration, we used Rollkit to run the EVM (using Ethermint) as a sovereign rollup on a local Bitcoin test network. See below for a demo.</p>',21),h=t("iframe",{title:"Rollkit: Ethermint + Bitcoin DA demo",src:"https://www.youtube.com/embed/qBKFEctzgT0",allowfullscreen:""},`
`,-1),p=t("h2",{id:"conclusion",tabindex:"-1"},[o("Conclusion "),t("a",{class:"header-anchor",href:"#conclusion","aria-label":'Permalink to "Conclusion"'},"​")],-1),u=t("p",null,[o("As we move towards a future where sovereign communities will form around different applications, asking them to incur the high cost and overhead of deploying a layer 1 blockchain to be sovereign is not sustainable. "),t("a",{href:"https://blog.celestia.org/sovereign-rollup-chains/",target:"_blank",rel:"noreferrer"},"Sovereign rollups"),o(" fix this by making it possible to deploy a sovereign chain that inherits the data availability and consensus of another layer 1 chain such as Bitcoin.")],-1),m=t("p",null,[o("Our goal with Rollkit is to make it easy to build and customize rollups. We invite you to play around Rollkit and build sovereign rollups on Bitcoin, or customize Rollkit with different execution environments and data availability layers. For details on how to run Rollkit with the Bitcoin data availability module, see the instructions "),t("a",{href:"/docs-preview/pr-438/docs/tutorials/bitcoin"},"here"),o(". Keep in mind that the integration is an early research implementation and it is not yet production-ready!")],-1),b=t("p",null,"Modularism, not maximalism.",-1),g=[d,h,p,u,m,b];function f(k,w,y,v,B,_){return a(),n("div",null,g)}const S=e(c,[["render",f]]);export{x as __pageData,S as default};
