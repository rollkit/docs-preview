import{c as n}from"./chunks/constants.7411cca7.js";import{o as l,c as o,k as s,t as p,l as e,X as a}from"./chunks/framework.9916264b.js";const t=a('<h1 id="full-and-sequencer-node-rollup-setup" tabindex="-1">Full and sequencer node rollup setup <a class="header-anchor" href="#full-and-sequencer-node-rollup-setup" aria-label="Permalink to &quot;Full and sequencer node rollup setup&quot;">​</a></h1><p>This guide will cover how to set up the GM World rollup example as a multi-node network using a full and sequencer node.</p><h2 id="running-local-da" tabindex="-1">Running a local DA network <a class="header-anchor" href="#running-local-da" aria-label="Permalink to &quot;Running a local DA network {#running-local-da}&quot;">​</a></h2><p>In this demo, we&#39;ll be using the local-da setup used in <a href="./../tutorials/gm-world">GM World</a></p><p>To set up a local DA network node:</p>',5),C={class:"language-bash"},r=s("button",{title:"Copy Code",class:"copy"},null,-1),c=s("span",{class:"lang"},"bash",-1),y={class:"shiki material-theme-palenight"},D={class:"line"},A=a('<span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-sSL</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://rollkit.dev/install-local-da.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span>',12),i={style:{color:"#C3E88D"}},d=a(`<p>This script builds and runs the node, now listening on port <code>7980</code>.</p><h2 id="running-a-sequencer-node" tabindex="-1">Running a sequencer node <a class="header-anchor" href="#running-a-sequencer-node" aria-label="Permalink to &quot;Running a sequencer node&quot;">​</a></h2><p>By following the <a href="./../tutorials/gm-world">GM World</a> tutorial, you will have a sequencer node running.</p><p>We wil now set up a full node to run alongside the sequencer node.</p><h2 id="getting-started" tabindex="-1">Getting started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting started&quot;">​</a></h2><p>Clone the script for the full node:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># From inside the \`gm\` directory</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> $HOME</span><span style="color:#C3E88D;">/gm</span></span>
<span class="line"><span style="color:#FFCB6B;">wget</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://rollkit.dev/gm/init-full-node.sh</span></span></code></pre></div><h3 id="update-the-p2p-address" tabindex="-1">Update the p2p address <a class="header-anchor" href="#update-the-p2p-address" aria-label="Permalink to &quot;Update the p2p address&quot;">​</a></h3><p>Once your sequencer node starts producing blocks, it will show the p2p address, beginning with 12D:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight has-focused-lines"><code><span class="line"><span style="color:#82AAFF;">...</span></span>
<span class="line"><span style="color:#FFCB6B;">1:55PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">impl=RPC</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">msg=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Starting RPC service</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">1:55PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">impl=Node</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">msg=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Starting Node service</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">1:55PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">serving</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HTTP</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">listen</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">address=[::]:26657</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=server</span></span>
<span class="line"><span style="color:#FFCB6B;">1:55PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">starting</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">P2P</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">client</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=server</span></span>
<span class="line has-focus"><span style="color:#FFCB6B;">1:55PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">listening</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">address=/ip4/127.0.0.1/tcp/36656/p2p/12D3KooWJbD9TQoMSSSUyfhHMmgVY3LqCjxYFz8wQ92Qa6DAqtmh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=p2p</span><span style="color:#A6ACCD;"> </span></span>
<span class="line has-focus"><span style="color:#FFCB6B;">1:55PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">listening</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">address=/ip4/163.172.162.109/tcp/36656/p2p/12D3KooWJbD9TQoMSSSUyfhHMmgVY3LqCjxYFz8wQ92Qa6DAqtmh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=p2p</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">1:55PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">no</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">seed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nodes</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">only</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">listening</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">connections</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=p2p</span></span>
<span class="line"><span style="color:#FFCB6B;">1:55PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">working</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">aggregator</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mode</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">time=</span><span style="color:#F78C6C;">1000</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=server</span></span>
<span class="line"><span style="color:#FFCB6B;">1:55PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">starting</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">API</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">server...</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">address=tcp://0.0.0.0:1317</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=api-server</span></span>
<span class="line"><span style="color:#FFCB6B;">1:55PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">serve</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=api-server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">msg=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Starting RPC HTTP server on [::]:1317</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">1:55PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Creating</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">publishing</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">height=</span><span style="color:#F78C6C;">3458</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span></span>
<span class="line"><span style="color:#FFCB6B;">1:55PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">finalized</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block_app_hash=A1A55270140B772643DCB444E0503B9865BB3702DF2D0A8E143CAF4717D2DB20</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">height=</span><span style="color:#F78C6C;">3458</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">num_txs_res=</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">num_val_updates=</span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#FFCB6B;">1:55PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">executed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app_hash=A1A55270140B772643DCB444E0503B9865BB3702DF2D0A8E143CAF4717D2DB20</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">height=</span><span style="color:#F78C6C;">3458</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span></span>
<span class="line"><span style="color:#FFCB6B;">1:55PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">starting</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gRPC</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">server...</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">address=localhost:9090</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=grpc-server</span></span>
<span class="line"><span style="color:#82AAFF;">...</span></span></code></pre></div><p>In your <code>init-full-node.sh</code> script, you will now set the <code>P2P_ID</code> variable for your script to use:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line diff remove"><span style="color:#A6ACCD;">P2P_ID</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">your-p2p-id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line diff add"><span style="color:#A6ACCD;">P2P_ID</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">12D3KooWJbD9TQoMSSSUyfhHMmgVY3LqCjxYFz8wQ92Qa6DAqtmh</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span></span></code></pre></div><h2 id="start-the-full-node" tabindex="-1">Start the full node <a class="header-anchor" href="#start-the-full-node" aria-label="Permalink to &quot;Start the full node&quot;">​</a></h2><p>Now run your full node with the script:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># from the gm directory</span></span>
<span class="line"><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init-full-node.sh</span></span></code></pre></div><p>Your full node will now start and connect to the sequencer node. You should see the following output:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">...</span></span>
<span class="line"><span style="color:#FFCB6B;">2:33PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DBG</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">indexed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">transactions</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">height=</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=txindex</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">num_txs=</span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#FFCB6B;">2:33PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">marked</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DA</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">included</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">blockHash=</span><span style="color:#F78C6C;">7897885</span><span style="color:#C3E88D;">B959F52BF0D772E35F8DA638CF8BBC361C819C3FD3E61DCEF5034D1CC</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">blockHeight=</span><span style="color:#F78C6C;">5532</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span></span>
<span class="line"><span style="color:#FFCB6B;">2:33PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DBG</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">body</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">retrieved</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">daHeight=</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hash=</span><span style="color:#F78C6C;">7897885</span><span style="color:#C3E88D;">B959F52BF0D772E35F8DA638CF8BBC361C819C3FD3E61DCEF5034D1CC</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">height=</span><span style="color:#F78C6C;">5532</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span></span>
<span class="line"><span style="color:#FFCB6B;">2:33PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DBG</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">found</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cache</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">height=</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span></span>
<span class="line"><span style="color:#FFCB6B;">2:33PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">marked</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DA</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">included</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">blockHash=E2E01078F151633768876E822D65EF52DD39E5073BB27AC5F903E52D48339F5C</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">blockHeight=</span><span style="color:#F78C6C;">5533</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span></span>
<span class="line"><span style="color:#FFCB6B;">2:33PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">marked</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DA</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">included</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">blockHash=B88DA651CD1AC7116CD95B3CFB6369BD8964BF77B3E909944F816B2E35DF8EF4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">blockHeight=</span><span style="color:#F78C6C;">5534</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span></span>
<span class="line"><span style="color:#FFCB6B;">2:33PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DBG</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">body</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">retrieved</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">daHeight=</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hash=E2E01078F151633768876E822D65EF52DD39E5073BB27AC5F903E52D48339F5C</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">height=</span><span style="color:#F78C6C;">5533</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span></span>
<span class="line"><span style="color:#FFCB6B;">2:33PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">marked</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DA</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">included</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">blockHash=</span><span style="color:#F78C6C;">376</span><span style="color:#C3E88D;">E44AB9F7023E76480CCD39F2D908FFE05911BF5C0387F5FF788C32D4C312E</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">blockHeight=</span><span style="color:#F78C6C;">5535</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span></span>
<span class="line"><span style="color:#FFCB6B;">2:33PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DBG</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">found</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cache</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">height=</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span></span>
<span class="line"><span style="color:#FFCB6B;">2:33PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">marked</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DA</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">included</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">blockHash=ABF1789EFB08F3DF7422579C9E52A0E6A54B4CDC8EB5FA32CA2E751ACCAEE23B</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">blockHeight=</span><span style="color:#F78C6C;">5536</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span></span>
<span class="line"><span style="color:#82AAFF;">...</span></span></code></pre></div><p>Congratulations! You will now have a full node running alongside your Rollkit sequencer.</p>`,18),m=JSON.parse('{"title":"Full and sequencer node rollup setup","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Full and sequencer node rollup setup | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"guides/full-and-sequencer-node.md","filePath":"guides/full-and-sequencer-node.md","lastUpdated":1726603035000}'),E={name:"guides/full-and-sequencer-node.md"},_=Object.assign(E,{setup(u){return(F,h)=>(l(),o("div",null,[t,s("div",C,[r,c,s("pre",y,[s("code",null,[s("span",D,[A,s("span",i,p(e(n).localDALatestTag),1)])])])]),d]))}});export{m as __pageData,_ as default};
