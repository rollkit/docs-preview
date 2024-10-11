import{_ as e,c as d,a3 as s,o as r}from"./chunks/framework.DVw5fkKK.js";const _=JSON.parse('{"title":"How to configure metrics","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"How to configure metrics | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"guides/metrics.md","filePath":"guides/metrics.md","lastUpdated":1728654074000}'),o={name:"guides/metrics.md"};function n(a,t,i,c,l,u){return r(),d("div",null,t[0]||(t[0]=[s('<h1 id="how-to-configure-metrics" tabindex="-1">How to configure metrics <a class="header-anchor" href="#how-to-configure-metrics" aria-label="Permalink to &quot;How to configure metrics&quot;">​</a></h1><h1 id="metrics" tabindex="-1">Metrics <a class="header-anchor" href="#metrics" aria-label="Permalink to &quot;Metrics&quot;">​</a></h1><p>Rollkit can report and serve the Prometheus metrics, which in their turn can be consumed by Prometheus collector(s).</p><p>This functionality is disabled by default.</p><p>To enable the Prometheus metrics, set <code>instrumentation.prometheus=true</code> in your config file. Metrics will be served under <code>/metrics</code> on 26660 port by default. Listen address can be changed in the config file (see <code>instrumentation.prometheus\\_listen\\_addr</code>).</p><h2 id="list-of-available-metrics" tabindex="-1">List of available metrics <a class="header-anchor" href="#list-of-available-metrics" aria-label="Permalink to &quot;List of available metrics&quot;">​</a></h2><p>The following metrics are available:</p><table tabindex="0"><thead><tr><th><strong>Name</strong></th><th><strong>Type</strong></th><th><strong>Tags</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>consensus_height</td><td>Gauge</td><td></td><td>Height of the chain</td></tr><tr><td>consensus_validators</td><td>Gauge</td><td></td><td>Number of validators</td></tr><tr><td>consensus_validators_power</td><td>Gauge</td><td></td><td>Total voting power of all validators</td></tr><tr><td>consensus_validator_power</td><td>Gauge</td><td></td><td>Voting power of the node if in the validator set</td></tr><tr><td>consensus_validator_last_signed_height</td><td>Gauge</td><td></td><td>Last height the node signed a block, if the node is a validator</td></tr><tr><td>consensus_validator_missed_blocks</td><td>Gauge</td><td></td><td>Total amount of blocks missed for the node, if the node is a validator</td></tr><tr><td>consensus_missing_validators</td><td>Gauge</td><td></td><td>Number of validators who did not sign</td></tr><tr><td>consensus_missing_validators_power</td><td>Gauge</td><td></td><td>Total voting power of the missing validators</td></tr><tr><td>consensus_byzantine_validators</td><td>Gauge</td><td></td><td>Number of validators who tried to double sign</td></tr><tr><td>consensus_byzantine_validators_power</td><td>Gauge</td><td></td><td>Total voting power of the byzantine validators</td></tr><tr><td>consensus_block_interval_seconds</td><td>Histogram</td><td></td><td>Time between this and last block (Block.Header.Time) in seconds</td></tr><tr><td>consensus_rounds</td><td>Gauge</td><td></td><td>Number of rounds</td></tr><tr><td>consensus_num_txs</td><td>Gauge</td><td></td><td>Number of transactions</td></tr><tr><td>consensus_total_txs</td><td>Gauge</td><td></td><td>Total number of transactions committed</td></tr><tr><td>consensus_block_parts</td><td>Counter</td><td>peer_id</td><td>Number of blockparts transmitted by peer</td></tr><tr><td>consensus_latest_block_height</td><td>Gauge</td><td></td><td>/status sync_info number</td></tr><tr><td>consensus_fast_syncing</td><td>Gauge</td><td></td><td>Either 0 (not fast syncing) or 1 (syncing)</td></tr><tr><td>consensus_state_syncing</td><td>Gauge</td><td></td><td>Either 0 (not state syncing) or 1 (syncing)</td></tr><tr><td>consensus_block_size_bytes</td><td>Gauge</td><td></td><td>Block size in bytes</td></tr><tr><td>consensus_step_duration</td><td>Histogram</td><td>step</td><td>Histogram of durations for each step in the consensus protocol</td></tr><tr><td>consensus_block_gossip_parts_received</td><td>Counter</td><td>matches_current</td><td>Number of block parts received by the node</td></tr><tr><td>p2p_message_send_bytes_total</td><td>Counter</td><td>message_type</td><td>Number of bytes sent to all peers per message type</td></tr><tr><td>p2p_message_receive_bytes_total</td><td>Counter</td><td>message_type</td><td>Number of bytes received from all peers per message type</td></tr><tr><td>p2p_peers</td><td>Gauge</td><td></td><td>Number of peers node&#39;s connected to</td></tr><tr><td>p2p_peer_receive_bytes_total</td><td>Counter</td><td>peer_id, chID</td><td>Number of bytes per channel received from a given peer</td></tr><tr><td>p2p_peer_send_bytes_total</td><td>Counter</td><td>peer_id, chID</td><td>Number of bytes per channel sent to a given peer</td></tr><tr><td>p2p_peer_pending_send_bytes</td><td>Gauge</td><td>peer_id</td><td>Number of pending bytes to be sent to a given peer</td></tr><tr><td>p2p_num_txs</td><td>Gauge</td><td>peer_id</td><td>Number of transactions submitted by each peer_id</td></tr><tr><td>p2p_pending_send_bytes</td><td>Gauge</td><td>peer_id</td><td>Amount of data pending to be sent to peer</td></tr><tr><td>mempool_size</td><td>Gauge</td><td></td><td>Number of uncommitted transactions</td></tr><tr><td>mempool_tx_size_bytes</td><td>Histogram</td><td></td><td>Transaction sizes in bytes</td></tr><tr><td>mempool_failed_txs</td><td>Counter</td><td></td><td>Number of failed transactions</td></tr><tr><td>mempool_recheck_times</td><td>Counter</td><td></td><td>Number of transactions rechecked in the mempool</td></tr><tr><td>state_block_processing_time</td><td>Histogram</td><td></td><td>Time between BeginBlock and EndBlock in ms</td></tr></tbody></table>',8)]))}const p=e(o,[["render",n]]);export{_ as __pageData,p as default};
