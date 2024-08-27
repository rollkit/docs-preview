import{_ as e,o as t,c as a,X as l}from"./chunks/framework.d7cafd6e.js";const m=JSON.parse('{"title":"🗞️ Building a rollup and testnet deployment","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"🗞️ Building a rollup and testnet deployment | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"learn/building-and-deploying-a-rollup.md","filePath":"learn/building-and-deploying-a-rollup.md","lastUpdated":1724783944000}'),r={name:"learn/building-and-deploying-a-rollup.md"},o=l('<h1 id="🗞️-building-a-rollup-and-testnet-deployment" tabindex="-1">🗞️ Building a rollup and testnet deployment <a class="header-anchor" href="#🗞️-building-a-rollup-and-testnet-deployment" aria-label="Permalink to &quot;🗞️ Building a rollup and testnet deployment&quot;">​</a></h1><p>The following tutorials will help you get started building Cosmos-SDK and EVM applications that connect to Celestia&#39;s data availability (DA) layer via Rollkit to Celestia&#39;s <a href="https://docs.celestia.org/nodes/mocha-testnet" target="_blank" rel="noreferrer">Mocha testnet</a> or <a href="https://docs.celestia.org/nodes/arabica-devnet" target="_blank" rel="noreferrer">Arabica devnet</a>. We call those chains Sovereign Rollups.</p><p>You can get started with the following tutorials:</p><h2 id="beginner" tabindex="-1">1. Beginner <a class="header-anchor" href="#beginner" aria-label="Permalink to &quot;1. Beginner {#beginner}&quot;">​</a></h2><ul><li><a href="/docs-preview/pr-438/tutorials/gm-world">GM world</a></li><li><a href="/docs-preview/pr-438/guides/restart-rollup">Restart your rollup</a></li></ul><h2 id="intermediate" tabindex="-1">2️. Intermediate <a class="header-anchor" href="#intermediate" aria-label="Permalink to &quot;2️. Intermediate {#intermediate}&quot;">​</a></h2><ul><li><a href="/docs-preview/pr-438/tutorials/wordle">Wordle game</a></li><li><a href="/docs-preview/pr-438/tutorials/cosmwasm">CosmWasm rollup</a></li></ul><h2 id="advanced" tabindex="-1">3️. Advanced <a class="header-anchor" href="#advanced" aria-label="Permalink to &quot;3️. Advanced {#advanced}&quot;">​</a></h2><ul><li><a href="https://docs.celestia.org/developers/full-stack-modular-development-guide" target="_blank" rel="noreferrer">Full-stack modular dapp with Celestia</a></li></ul><h2 id="support" tabindex="-1">💻 Support <a class="header-anchor" href="#support" aria-label="Permalink to &quot;💻 Support {#support}&quot;">​</a></h2><p>The tutorials will explore developing with Rollkit, which is still in Alpha stage. If you run into bugs, please write a GitHub <a href="https://github.com/rollkit/docs/issues/new" target="_blank" rel="noreferrer">issue</a> or let us know in our <a href="https://t.me/rollkit" target="_blank" rel="noreferrer">Telegram</a>. Furthermore, while Rollkit allows you to build sovereign rollups on Celestia, it currently does not support fraud proofs yet and is therefore running in &quot;pessimistic&quot; mode, where nodes would need to re-execute the transactions to check the validity of the chain (i.e. a full node). Furthermore, Rollkit currently only supports a single sequencer.</p>',11),i=[o];function n(s,d,u,p,c,h){return t(),a("div",null,i)}const f=e(r,[["render",n]]);export{m as __pageData,f as default};
