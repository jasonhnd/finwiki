---
source: systems/eip-4844-blob-economics-impact-2026
source_hash: f4f632fe4ae1969d
lang: en
status: machine
fidelity: ok
title: "EIP-4844  blob economics and 2026  market impact · full view from Dencun to Pectra and Fusaka"
translated_at: 2026-06-01T04:15:40.120Z
---
# EIP-4844  blob economics and 2026  market impact · full view from Dencun to Pectra and Fusaka

## TL;DR

- EIP-4844 (**proto-danksharding** · 2024-03  Dencun launch) introduced **blobs** — rollup-dedicated temporary storage · priced independently from calldata · after 18  days only the commitment remains onchain
- **Blob mechanic**: each block target=3 / max=6  blobs (Dencun original) · each blob 128 KiB (131072 bytes) · total max ~768 KiB/block (Dencun)
- **Pectra EIP-7691** (2025-Q2) moved target → 6 / max → 9  · L2  calldata cost -50% (see [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691: blob doubling and L2 economic transmission]])
- **Fusaka PeerDAS** (EIP-7594  · planned for 2026-Q4 ) adds another 10x capacity → theoretical ~60 GB/day blob throughput
- **Blob fee market**: EIP-1559  style · independent base fee · fee rises exponentially above target and decays below target · decoupled from the gas fee market
- **Post-Dencun L2  cost reduction**: rollup user gas on Arbitrum / Optimism / Base and others fell ~100x · sequencer revenue was net positive because volume increased
- **Blob market participants**: rollup sequencers (blob submitters) · Ethereum builders / proposers (blob packagers) · DA users (data consumers)
- **Competition with alt-DA** (see [[systems/data-availability-celestia-eigenda-blob-comparison|DA-layer landscape comparison]]): blobs narrowed alt-DA's price advantage from 50x to 3-5x · after Pectra to 1.5-2x · after Fusaka it may disappear
- Route: pair with [[systems/INDEX|systems index]] · [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691]] / [[systems/data-availability-celestia-eigenda-blob-comparison|DA comparison]]

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691: blob doubling and L2 economic transmission]] for the 2025-Q2  blob target doubling that directly extends EIP-4844,  and [[systems/pectra-upgrade-overview|Pectra upgrade overview]] for the broader Ethereum upgrade context. For the L1/L2  strategic framing that makes blob economics structurally important, see [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]]. For the DA layer competition that blob market reshapes, see [[systems/data-availability-celestia-eigenda-blob-comparison|DA-layer landscape comparison]]. For the rollup ecosystem consuming blobs, see [[systems/rollup-market-share-2026-arbitrum-optimism-base|rollup market share 2026]] and [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup maturity matrix 2026]]. For the institutional staking lane that holds the validator economy behind blob processing, see [[systems/pectra-eip-7251-institutional-staking|Pectra EIP-7251: institutional staking]] and [[systems/bft-validator-economy-overview|BFT validator economics overview]]. For restaking-secured alternative DA, see [[systems/eigenlayer-overview|EigenLayer overview]] and [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS landscape matrix]].

### Blob data structure

**Core definitions** (EIP-4844  spec):
- 1  blob = 4096  field elements × 32 bytes = 131072 bytes = 128 KiB
- Each transaction can carry 0  or more blobs (the practical limit is the total number of blobs per block)
- Blobs are inaccessible inside the EVM · data availability can be proven only through commitments (KZG point evaluation precompile · introduced by EIP-4844 )
- Blob data is pruned after ~18  days (4096  epochs · target_blobs_per_block × MIN_BLOB_GASPRICE_UPDATE_FRACTION) from the P2P network · only the KZG commitment remains permanently onchain

**blob commitment**:
- KZG commitment scheme (trusted-setup based · Ethereum uses the Powers of Tau ceremony 2023 )
- Each blob has 1  48-byte commitment · a versioned hash (SHA256(commitment) · 32 bytes) is added onchain
- Rollup contracts can prove that "the value at point z in the blob is y" through the KZG point evaluation precompile (for ZK rollup state transition proofs)

### Blob fee market (EIP-1559  style · independent)

**Core mechanism** (EIP-4844  spec):
- Each block has an `excess_blob_gas` state variable · it accumulates "blob gas above target"
- `blob_base_fee = MIN_BLOB_GASPRICE * exp(excess_blob_gas / BLOB_GASPRICE_UPDATE_FRACTION)`
- target_blobs_per_block = 3 (Dencun) / 6 (Pectra) / 6 (early Fusaka · adjustable later)
- max_blobs_per_block = 6 (Dencun) / 9 (Pectra) / planned 18+ (Fusaka PeerDAS)
- Each blob consumes GAS_PER_BLOB = 131072 gas
- Per 1  blob, pay 131072 × blob_base_fee wei · independent from transaction gas

**Fee dynamics**:
- If blob count in a block = target · `excess_blob_gas` is unchanged · fee is flat
- If block > target · `excess_blob_gas` increases · fee rises exponentially
- If block < target · `excess_blob_gas` decreases (min 0) · fee falls exponentially
- Design target: match blob fee elastically to demand · decouple from calldata fee · avoid affecting user gas

**MIN_BLOB_GASPRICE = 1 wei**:
- When demand is low · blobs are almost free (each blob ~131072 wei, a negligible amount)
- When demand is high · blob fee can reach 10-100 gwei · $0.10-$1+ per blob

### Blob submission flow (sequencer view)

Typical flow for an L2  sequencer submitting a batch to L1 :
1. **Sequencer collects, orders, and executes L2  txs** (locally)
2. **Package batch data** (L2  tx + state diff) · compress it (snappy / zstd / bzip2)
3. **Create an EIP-4844  transaction** (type 3) · include 0-N blobs (each blob 128 KiB) + KZG commitment + versioned hash
4. **Payment**: transaction gas (normal) + blob gas (blob_base_fee × 131072 × number of blobs)
5. **L1  block includes the transaction · validators receive blob data via P2P** (blobs do not enter the block body · they use a separate P2P channel)
6. **Rollup contract verifies the KZG commitment** (ZK rollups verify that the proof references the commitment · OP rollups can challenge within the challenge window)
7. **After 18  days, blob data is pruned · only the commitment remains onchain**

**Sequencer cost structure** (post-Dencun):
- Transaction gas: ~$1-5 (EIP-4844  transaction overhead)
- Blob gas: ~$0.10-$1 / blob (depending on demand) · typically 3-6  blobs submitted per batch
- Total cost per batch: ~$5-30  · allocated across ~10000+ L2  txs · per L2  tx about $0.0005-$0.003

- Pre-Dencun comparison (using calldata): per L2  tx about $0.05-$0.20 (depending on L1  gas)

### Comparison with calldata

| Dimension | Calldata (pre-Dencun / still optional) | Blob (EIP-4844) |
|---|---|---|
| Price | gas_per_byte × gas_base_fee (high) | blob_base_fee × 131072 × number of blobs / blob bytes (low, ~100x) |
| Retention period | Permanent (state) | ~18  days (P2P prune) + permanent commitment |
| EVM accessible | Yes (via CALLDATALOAD and other opcodes) | No (only through KZG point evaluation precompile) |
| Use case | State access · onchain data consumption | rollup data availability · short-term reconstructability |
| Fee market | Shared with user gas · congestion contagion | Independent base fee · no congestion contagion |

### Initial Dencun launch period (2024-03 - 2024-Q2)

**Pre-Dencun state** (before 2024-03 ):
- OP rollups such as Arbitrum / Optimism / Base used calldata · daily aggregate calldata cost was ~$2-5M
- ZK rollups such as zkSync / Linea / Scroll also used calldata + ZK proof submission
- L2  sequencer revenue spent 60-80% on L1  cost · margins were thin
- L2  user gas was $0.05-$0.50 / simple transfer

**Immediate effect after Dencun launch** (2024-03 - 2024-Q2):
- Each L2  sequencer switched to EIP-4844  blobs · L1  cost fell by ~80-95%
- L2  user gas fell to ~$0.001-$0.05 / simple transfer · user experience improved sharply
- L2  sequencer margins suddenly surged (L1  cost collapsed · user gas held · net margin high)
- However, sequencer competition intensified · over several weeks, user gas was gradually reduced · some savings were passed to users and some were retained as sequencer revenue

**Initial blob fee market volatility**:
- Early after 2024-03  launch · blob usage was insufficient · blob_base_fee stayed at MIN_BLOB_GASPRICE = 1 wei
- After 2024-Q2  · Base / Arbitrum / Optimism used blobs aggressively · average blob usage approached target (3)
- In 2024-Q3 , blob max (6) was often pressured · blob fee spiked to 10-100 gwei

### Blob fee spike period (2024-Q3 - 2025-Q1)

**Fee spike trigger scenarios**:
- Meme coin waves on Base · DEX swap volume jumped · Base sequencer batch submission frequency increased
- Multiple L2 s under high load simultaneously · competition for blob slots
- Single-block max=6  blobs often exhausted · `excess_blob_gas` accumulated · fee rose exponentially

**Empirical data** (2024-Q4  peak period):
- Blob base fee spiked to 200-500 gwei · $5-15
 per blob
- L2  sequencer single-batch cost rose from $5-30  to $50-200 
- Some sequencers temporarily chose to retreat to calldata when blobs were too expensive · or reduced batch frequency (increasing user finality time)
- User gas could rise 5-10x at peak · still far below pre-Dencun

**Community discussion**:
- Discussion of EIP-7691 (blob target doubling) accelerated on EthMagicians / ethresear.ch
- Dankrad Feist, Vitalik, and others publicly advocated several times for accelerating the PeerDAS (EIP-7594) roadmap
- ACD confirmed inclusion of EIP-7691  in Pectra

### After Pectra (2025-Q2 - 2026-Q2)

**Pectra EIP-7691  launch effect**:
- Blob target 3 → 6  · max 6 → 9

- L2  sequencers no longer trigger blob fee spikes under normal load (because supply doubled)
- User gas fell ~30-50% (see [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 detailed analysis]])
- Blob fee stays at MIN (1 wei) most of the time · short spikes occur only under burst load such as ETF launches or meme coin spikes

**Current state in 2026-Q2 **:
- Average daily blob count ~30000-50000  blobs (distributed across ~7200  blocks/day) · average ~4-7  blobs/block (slightly below target 6 )
- Average blob fee ~1-5 gwei · occasional spikes to 50-100 gwei
- Total daily blob cost ~$50000-$200000 (across all rollups) · close to alt-DA total revenue
- Actual average cost per blob ~$0.10-0.30  · 1 GB DA cost ~$100-300 (per day)

**Sequencer margin recovery**:
- L2  sequencer net margin stabilized after Pectra · no need to worry again about sudden blob spikes
- Leading L2  sequencers such as Base · Arbitrum · Optimism each have annualized revenue of ~$50-150M (2026)
- Mid-sized L2  sequencers such as Linea · Scroll · zkSync each have revenue of ~$10-30M

### Market dynamics with alt-DA

See [[systems/data-availability-celestia-eigenda-blob-comparison|DA-layer landscape comparison]]. Impact of the blob market on alt-DA:

**Pre-Dencun**:
- Celestia / EigenDA / Avail / NEAR DA price advantage was ~50x versus calldata
- Alt-DA captured cost-sensitive rollup customers · forming the modular DA narrative

**Post-Dencun (2024-Q2 - 2025-Q1)**:
- Blob price advantage narrowed alt-DA's price advantage to ~5-10x
- Most ETH-aligned rollups still chose blobs (ecosystem alignment + security)
- Alt-DA shifted to non-ETH-aligned customers (Cosmos · Move · sovereign rollups) or high-throughput child chains (Mantle · Manta)

**Post-Pectra (2025-Q2 - 2026-Q2)**:
- Blob capacity doubled · alt-DA price advantage narrowed further to ~3-5x
- Celestia revenue grew ~50% YoY, but customer types diverged (mainstream L2  did not grow · sovereign / Move rollups grew)
- EigenDA borrowed EigenLayer security + high throughput · maintained ~$120M ARR (see [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS matrix]])

**Post-Fusaka (2026-Q4+)**:
- PeerDAS increases blob capacity by another 10x · alt-DA price advantage may remain only ~1.5-2x
- Alt-DA must shift to pure differentiated value (sovereign · privacy · specific throughput), not a pure cost war

### Blob market participants

**Sequencers** (blob submitters):
- Leaders: Base · Arbitrum · Optimism · zkSync · Linea · Scroll · Polygon zkEVM
- Mid-sized: Taiko · Blast · Mode · Mantle (some use EigenDA) · etc.
- Long-tail: multiple small OP Stack / ZK Stack rollups
- In total, ~30-50  rollups form the demand side of the blob market

**Builders / Proposers** (blob packagers):
- MEV builders such as Flashbots · bloXroute · Manifold · Eden package blobs in addition to ordering transactions
- Each block's proposer (randomly selected validator) accepts a builder bundle and includes blob transactions
- Blob packaging income is part of builder revenue

**Validators** (blob forwarders):
- More than approximately 1 million Ethereum validators distribute blob data through the P2P network
- With DAS (after PeerDAS), light clients only need sample verification and no longer need to download every blob

**DA users** (data consumers):
- Primarily rollup customers (challenge provers · ZK verifiers · state reconstruction)
- Then indexers / explorers (blob data during the 18 -day ephemeral period) · long term requires archive nodes (Blobscan / Ethscan, etc.)

### Blob vs calldata vs alt-DA · 9 -dimension comparison

| Dimension | Calldata | Blob (EIP-4844) | EigenDA | Celestia | NEAR DA |
|---|---|---|---|---|---|
| **Cost per GB** | $500-2000+ (calldata-equivalent ETH gas per GB) | ~$100-300/GB-day | $60-150/GB-day | $20-50/GB-day | $10-30/GB-day |
| **Retention period** | Permanent (L1  state) | 18  days P2P + permanent commitment | EigenDA dispatcher setting (usually 14  days+ commitment) | Celestia full history retained | NEAR history retained |
| **Security level** | Ethereum L1 (highest) | Ethereum L1 + DAS (post-PeerDAS) | EigenLayer ~$6B opt-in | Celestia ~$1-2B staking | NEAR ~$1-2B staking |
| **Throughput** | Constrained by L1  gas limit (~50-100 KB/block actual) | 0.75 MB/block (Dencun) → 1.1 MB (Pectra) → ~11 MB (Fusaka PeerDAS) | 15 MB/s sustained | 2 MB/block / 6s = 28 GB/day | Theoretical 100 MB/s |
| **Finality** | L1  finality (~12-15 min) | L1  finality (~12-15 min) | ~10-30s + slashing | ~6s (Tendermint) | ~2-3s (NEAR) |
| **Adoption share** | Pre-Dencun mainstream · post-Dencun very small | **95%+ ETH-aligned rollup default** | ~20  rollups · modular-led | ~30+ chains · non-ETH-aligned led | ~10  chains · niche |
| **Fee market design** | Shared with user gas (congestion contagion) | Independent EIP-1559  base fee | EigenDA dispatcher has custom pricing | Celestia custom pricing (denominated in TIA) | NEAR storage fee model |
| **EVM accessible** | Yes (CALLDATALOAD) | No (only via KZG point eval precompile) | No | No | No |
| **Regulatory surface** | Ethereum L1  sufficiently decentralized | Ethereum L1  sufficiently decentralized | EIGEN token + restaking gray area | TIA token gray area | NEAR token reviewed across multiple jurisdictions |

**Main conclusions**:
- **Cost ranking**: Blob > EigenDA > Celestia > NEAR DA · but the price gap narrows with Pectra/Fusaka
- **Security-level ranking**: Blob = Ethereum L1  (highest) > EigenDA (borrowed ETH stake) > Celestia ≈ NEAR DA (independent PoS)
- **Throughput ranking**: EigenDA / NEAR > Pectra Blob > Celestia / Avail > Fusaka Blob (jumps to EigenDA-equivalent level)
- **Finality ranking**: NEAR > Celestia > EigenDA > Blob (Blob is slowest, but when combined with ZK proofs, waiting for finality is unnecessary)

### Before vs after Pectra EIP-7691 

| State | Pre-Pectra (Dencun) | Post-Pectra (2025-Q2+) |
|---|---|---|
| Blob target | 3 / block | 6 / block |
| Blob max | 6 / block | 9 / block |
| Max throughput | ~0.75 MB / 12s ≈ 5.4 GB/day | ~1.1 MB / 12s ≈ 8 GB/day |
| Average blob fee | 5-50 gwei (volatile) | 1-5 gwei (most of the time) |
| L2  sequencer cost | $20-100 / batch (volatile) | $5-30 / batch (stable) |
| L2  user gas | $0.001-0.05  (spikes in high vol) | $0.0005-0.02  (further 30-50% decline after Pectra) |
| Alt-DA price advantage | ~5-10x | ~3-5x |

### Fusaka PeerDAS forecast (planned for 2026-Q4 )

EIP-7594 (PeerDAS · Peer Data Availability Sampling):
- Validators do not download all blobs · they verify availability through DAS sampling
- Per-validator network bandwidth requirement falls to ~1/8  (sampling only, no full download)
- Blob capacity can expand 10x (from max=9  to max=72+) · without increasing validator network load
- Accompanying blob fee market adjustments such as EIP-7642 / 7691 

**Expected impact**:
- Blob max 9 → 72  (initial) · ultimate goal 256+
- Throughput ~1.1 MB/block → ~11 MB/block (initial)
- Alt-DA price advantage may remain only ~1.5-2x · some alt-DA customers return to L1  blobs
- Full danksharding (theoretical max 32 MB/block · ~230 GB/day) is a long-term vision · unlikely to complete in 2027-2028 

### Relationship between L2  sequencer revenue and user gas

**Sequencer revenue formula** (simplified):
- Revenue = (user gas × tx count - L1  blob cost - operational cost - MEV redistribution)
- User gas unit price can fall when volume rises (competition) · but total revenue depends on elasticity

**Empirical data** (2026-Q2  estimate · leading L2s):
- **Base**: Daily user gas total ~$200-400k · Daily blob cost ~$30-80k · Sequencer net ~$100-300k/day ≈ $30-100M ARR
- **Arbitrum**: Daily user gas total ~$150-300k · Daily blob cost ~$20-50k · Sequencer net ~$80-200k/day ≈ $30-70M ARR
- **Optimism**: Daily user gas total ~$50-100k · Daily blob cost ~$10-20k · Sequencer net ~$30-70k/day ≈ $10-25M ARR
- **zkSync · Linea · Scroll** and others: each $5-20M ARR

Aggregate sequencer revenue across all ETH-aligned rollups is ~$150-300M ARR (2026). This is the stable state after Pectra · higher than aggregate sequencer revenue pre-Dencun (2023) · but per-tx revenue has fallen sharply.

### Beneficiaries among institutional and consumer products such as Stripe / Coinbase Smart Wallet

- **Stripe USDC on Base**: after Pectra, a single USDC transfer is ~$0.0005  · economics improved materially for Stripe · Stripe launched Base-only merchant settlement
- **Coinbase Smart Wallet**: Account Abstraction (see [[systems/erc-4337-overview|ERC-4337]]) + low Base gas · Coinbase achieved sub-cent UX · user experience feels close to Web2 
- **PayPal PYUSD on Base**: similarly benefits · 2025-2026  PYUSD circulating supply on Base grew ~3x
- **RWA tokenization**: Franklin Templeton FOBXX pilot on Polygon zkEVM reduced settlement cost through Pectra blobs · however institutions still prefer L1  (see [[systems/data-availability-celestia-eigenda-blob-comparison|DA-layer comparison]])

### Asymmetric benefits for ZK rollups vs OP rollups

**OP rollups** (Arbitrum · Optimism · Base · Blast, etc.):
- Blobs directly reduce calldata cost · all batch data goes into blobs
- State can be reconstructed within the challenge window · the 18 -day blob retention period is sufficient
- Benefits are most direct · user gas decline is most visible

**ZK rollups** (zkSync · Linea · Scroll · Polygon zkEVM · Taiko, etc.):
- Blobs reduce state diff submission cost · but ZK proof submission cost (verifier gas) is unchanged
- ZK proofs account for ~30-50% of sequencer cost · blobs only ~30-50%
- Benefits are relatively smaller but still material (see [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup matrix 2026]])

### Impact on validator economy and staking yield

See [[systems/bft-validator-economy-overview|BFT validator economics overview]] and [[systems/pectra-eip-7251-institutional-staking|Pectra EIP-7251 institutional staking]]:
- Blob fee is an additional source of validator revenue (blob_base_fee is not burned · proposer collects it)
- 2026  average daily blob fee revenue ~$50-100k · allocated across ~7200  blocks · about $7-15  per block · a tiny share of validator daily revenue
- ETH burning (EIP-1559  base fee burn) is unaffected by blob fee · blob fee is not burned
- Long-term blob economics do not directly affect ETH staking yield · but they have indirect effects (blobs make L2  thrive · dApp activity on L2  brings L1  economic activity back)

### Change in Builder / Proposer roles

- Builders now must package blob transactions plus normal transactions · complexity increases
- Blob P2P propagation path differs from transactions · builders must coordinate
- The proposer role is largely unchanged, although blob reception delays can affect attestation timing
- In long-term PBS (proposer-builder separation), builders specialize in blob handling

## Related

- [[INDEX|Wiki Index]]
- [[systems/INDEX|systems index]]
- [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob doubling and L2 economic transmission]]
- [[systems/pectra-upgrade-overview|Pectra upgrade overview]]
- [[systems/pectra-eip-7251-institutional-staking|Pectra EIP-7251 institutional staking]]
- [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]]
- [[systems/data-availability-celestia-eigenda-blob-comparison|DA-layer landscape comparison 2026]]
- [[systems/rollup-market-share-2026-arbitrum-optimism-base|rollup market share 2026]]
- [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup maturity matrix 2026]]
- [[systems/eigenlayer-overview|EigenLayer overview]]
- [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS landscape matrix]]
- [[systems/erc-4337-overview|ERC-4337 overview]]
- [[systems/bft-validator-economy-overview|BFT validator economics overview]]
- [[systems/cross-chain-bridge-security-insurance-matrix-2026|cross-chain bridge security insurance matrix 2026]]
- [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX exposure]]

## Sources

- EIP-4844 spec · https://eips.ethereum.org/EIPS/eip-4844
- EIP-7691 spec · https://eips.ethereum.org/EIPS/eip-7691
- EIP-7594 PeerDAS spec · https://eips.ethereum.org/EIPS/eip-7594
- Ethereum.org Danksharding roadmap · https://ethereum.org/en/roadmap/danksharding/
- Blobscan · https://blobscan.com/
- L2Beat scaling summary · https://l2beat.com/scaling/summary
- DefiLlama rollups · https://defillama.com/chains/Rollup
- ethresear.ch sharding category · https://ethresear.ch/c/sharding/
- Dankrad Feist blog · "Data availability sampling and danksharding"(public)
- Vitalik blog · "Layer 2s as cultural extensions of Ethereum"(public)
- Ethereum Foundation KZG ceremony documentation
