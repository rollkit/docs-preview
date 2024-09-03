import{_ as l,o as r,c as a,a as o,p as c,m as h,k as e,O as d,X as p}from"./chunks/framework.d49df772.js";const u="/docs-preview/pr-415/img/Rollkit-cover.jpg";const m={name:"Twitter"},i=t=>(c("data-v-23ec5da3"),t=t(),h(),t),f={class:"twitter-tweet","data-lang":"en","data-theme":"dark"},g=i(()=>e("p",{lang:"de",dir:"ltr"},[o("rollkit start "),e("a",{href:"https://t.co/tytjFm1Z4Y"},"pic.twitter.com/tytjFm1Z4Y")],-1)),k=i(()=>e("a",{href:"https://twitter.com/JoshCStein/status/1783880747301880161?ref_src=twsrc%5Etfw"},"April 26, 2024",-1));function b(t,n,s,B,q,x){return r(),a("blockquote",f,[g,o("— Josh Stein 🤳✨ (@JoshCStein) "),k])}const v=l(m,[["render",b],["__scopeId","data-v-23ec5da3"]]),y=e("h1",{id:"rollkit-the-first-sovereign-rollup-framework",tabindex:"-1"},[o("Rollkit: The First Sovereign Rollup Framework "),e("a",{class:"header-anchor",href:"#rollkit-the-first-sovereign-rollup-framework","aria-label":'Permalink to "Rollkit: The First Sovereign Rollup Framework"'},"​")],-1),w=e("p",null,"By Rollkit",-1),_=e("p",null,[e("img",{src:u,alt:"Rollkit blog cover"})],-1),S=e("p",null,"Bitcoin to Ethereum took 7 years. Ethereum to more scalable alt-L1s took 1–2 years. And then Cosmos SDK and CometBFT brought down time-to-launch a sovereign L1 to months.",-1),C=e("p",null,[o("Now, Rollkit makes deploying any VM or application on its own sovereign chain as easy as typing "),e("strong",null,"rollkit start"),o(".")],-1),T=p('<p>Rollkit provides a path to one-click sovereignty for any crypto application, enabling any developer to launch their own <a href="https://blog.celestia.org/sovereign-rollup-chains/" target="_blank" rel="noreferrer">sovereign rollups</a> within seconds.</p><p>Sovereign rollups combine the self-governance of a Layer 1 with the ease of deploying a rollup. They remove the need to recruit a secure validator set or bootstrap security by prematurely launching a token. Just like an independent L1, sovereign rollups retain the ability to hard fork which allows them to protect against hacks or bugs. This provides its community the ability to enforce social consensus and be sovereign.</p><p>Without the overhead of a settlement layer, sovereign rollups can directly interoperate with shared security when using the same DA layer.</p><p>By using a generic application interface like <a href="https://docs.cometbft.com/v0.38/spec/abci/" target="_blank" rel="noreferrer">ABCI++</a>, Rollkit is compatible with the Cosmos SDK, the leading framework for building sovereign blockchains. This enables all Cosmos SDK developers to build a sovereign rollup and tap into all the powerful cosmos ecosystem tooling they’re used to including <a href="https://www.ibcprotocol.dev/" target="_blank" rel="noreferrer">IBC</a>, <a href="https://docs.cometbft.com/v0.38/spec/abci/" target="_blank" rel="noreferrer">ABCI++</a>, and Skip Protocol&#39;s <a href="https://docs.skip.money/slinky/overview/" target="_blank" rel="noreferrer">Slinky</a> and <a href="https://skip-protocol-docs.netlify.app/blocksdk/overview" target="_blank" rel="noreferrer">BlockSDK</a>.</p><p>Developers have full-freedom to deploy a VM or define their own execution environment, unconstrained by the overhead of an enshrined settlement layer that must process fraud or ZK proofs for their rollups. This means that instead of a canonical on-chain light client that comes with an enshrined settlement layer, sovereign rollups can define how they interoperate with other blockchains by having on-chain light clients of each other as needed.</p><h2 id="take-control" tabindex="-1">Take Control <a class="header-anchor" href="#take-control" aria-label="Permalink to &quot;Take Control&quot;">​</a></h2><p>In the past, developers have been compelled to accept a degree of trust in convincing validators to organize and independently run nodes that secure a new blockchain. This requires launching premature tokens, inflating away their token supply in order to maintain incentive alignment with validators and offset their operational costs. This does not let developers focus on the core product they’re building. Sovereign rollups empower developers to get rid of this need to launch a token prematurely for bootstrapping a validator set and spending an excessively high amount of internal resources on blockchain development.</p><p>Existing settled rollups come with the overhead of an enshrined settlement layer like Ethereum L1 where it is difficult and expensive to unwind a token on an L2 and move to another L2 without relying on trusted liquidity bridging intermediaries. This also comes with becoming subordinate to the social consensus of an enshrined settlement layer, which they may or may not align with.</p><p>Sovereign rollups don’t need to settle to an external blockchain and can instead fully own their settlement. This allows them to protect against hacks and bugs, and facilitate upgrades via hard forks. They introduce rollup light clients that verify DA directly through data availability sampling and verify execution state proofs allowing asynchronous composability as needed. This in turn paves the path forward for trust-minimized interoperability between sovereign chains that share the same DA layer.</p><p>Sovereign rollups remove the need to have a bridge contract that is upgradeable by an offchain council and instead allows the sovereign community to define rules via fully onchain governance.</p><h2 id="build-with-the-best" tabindex="-1">Build with the Best <a class="header-anchor" href="#build-with-the-best" aria-label="Permalink to &quot;Build with the Best&quot;">​</a></h2><p>Cosmos SDK’s rich array of developer tooling, battle-tested and refined over the past several years, is available to Rollkit developers from day one. Developers can use popular <a href="https://cosmos.network/wallets/" target="_blank" rel="noreferrer">wallet infrastructure</a>, <a href="https://cosmos.network/block-explorers/" target="_blank" rel="noreferrer">block explorers</a> and indexers supporting CometBFT RPCs, speak <a href="https://www.ibcprotocol.dev/" target="_blank" rel="noreferrer">IBC</a> across the interchain, have <a href="https://cosmos.network/cosmwasm/" target="_blank" rel="noreferrer">Cosmwasm</a> smart contracts along with <a href="https://github.com/abstractsdk/abstract" target="_blank" rel="noreferrer">Abstract SDK</a>, utilize MEV and free lanes via the <a href="https://docs.skip.money/blocksdk/overview/" target="_blank" rel="noreferrer">BlockSDK</a> and enshrine oracles in block production with <a href="https://docs.skip.money/slinky/overview/" target="_blank" rel="noreferrer">Slinky</a> from Skip Protocol. <a href="https://github.com/cosmos/awesome-cosmos" target="_blank" rel="noreferrer">More cosmos related resources.</a></p><p>Rollkit rollups interact with a state machine via the Application Blockchain Interface (<a href="https://docs.cometbft.com/v0.38/spec/abci/" target="_blank" rel="noreferrer">ABCI++</a>). This allows it to be used as an alternative to CometBFT for any ABCI application. Rollkit comes with a <a href="https://github.com/rollkit/cosmos-sdk-starter" target="_blank" rel="noreferrer">custom start handler</a> that can be used by Cosmos SDK blockchains to use it as its ABCI client while still following the release branches of upstream Cosmos SDK. This compatibility enables developers to use tools like <a href="https://docs.cometbft.com/v0.38/app-dev/abci-cli" target="_blank" rel="noreferrer">abci-cli</a> to test and debug rollups.</p><h2 id="optimize-for-your-needs" tabindex="-1">Optimize for your needs <a class="header-anchor" href="#optimize-for-your-needs" aria-label="Permalink to &quot;Optimize for your needs&quot;">​</a></h2><p>Rollkit allows developers to optimize between the different modular components of a sovereign chain as needed. Rollkit allows you to:</p><ul><li><p>Choose between data availability layers that implement the <a href="https://github.com/rollkit/go-da" target="_blank" rel="noreferrer">go-da interface</a>.</p></li><li><p>Choose any ABCI++ compatible virtual machine.</p></li><li><p>Utilize the Sequencing API to delegate sequencing to the shared sequencer network of your choice or even delegate sequencing to the DA layer to go <a href="https://ethresear.ch/t/based-rollups-superpowers-from-l1-sequencing/15016" target="_blank" rel="noreferrer">based</a>. Choose between state validity modes: Pessimistic, Optimistic, or ZK or use a combination of both zk and optimistic schemes. Eliminate the need to launch a token or designate the native token or any token for gas fees.</p></li><li><p>Customize block time to just a couple hundred milliseconds and produce blocks only when needed.</p></li><li><p>Configure the fork choice rule.</p></li></ul><p>Rollkit rollups pay only for data availability on demand. There is no sequencer split required, nor will there ever be any kind of rent seeking model imposed on Rollkit rollups. Rollkit rollups preserve the advantages of a Cosmos SDK blockchain but reduce the overhead of deploying and maintaining a validator set.</p><h2 id="break-free-be-sovereign" tabindex="-1">Break Free. Be Sovereign. <a class="header-anchor" href="#break-free-be-sovereign" aria-label="Permalink to &quot;Break Free. Be Sovereign.&quot;">​</a></h2><p><a href="https://rollkit.dev/tutorials/quick-start" target="_blank" rel="noreferrer">Get started</a> with launching your own sovereign chain with Rollkit. If you’re thinking of building a sovereign chain, we’d love to hear from you. Fill out this <a href="https://forms.gle/yumLqipqr8weYmAb7" target="_blank" rel="noreferrer">form</a>.</p>',19),D=JSON.parse('{"title":"Rollkit: The First Sovereign Rollup Framework","description":"Launch a sovereign, customizable blockchain as easily as a smart contract","frontmatter":{"head":[["meta",{"name":"title","content":"Rollkit: The First Sovereign Rollup Framework"}],["meta",{"name":"description","content":"Launch a sovereign, customizable blockchain as easily as a smart contract"}],["meta",{"name":"keywords","content":"Rollkit, Cosmos-SDK"}],["meta",{"name":"og:title","content":"Rollkit: The First Sovereign Rollup Framework | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"blog/rollkit-the-first-sovereign-rollup-framework.md","filePath":"blog/rollkit-the-first-sovereign-rollup-framework.md","lastUpdated":1720373150000}'),R={name:"blog/rollkit-the-first-sovereign-rollup-framework.md"},F=Object.assign(R,{setup(t){return(n,s)=>(r(),a("div",null,[y,w,_,S,C,d(v),T]))}});export{D as __pageData,F as default};