---
source: systems/data-availability-celestia-eigenda-blob-comparison
source_hash: 83de69337c432a0a
lang: en
status: machine
fidelity: ok
title: "DA layer panoramic comparison 2026  · Celestia · EigenDA · Ethereum blobs · Avail · NEAR DA"
translated_at: 2026-06-01T04:15:40.172Z
---
# DA layer panoramic comparison 2026  · Celestia · EigenDA · Ethereum blobs · Avail · NEAR DA

## TL;DR

- 5  mainstream DA (data availability) layers as of 2026-Q2 , compared across 8  dimensions: **architecture · security model · cost per GB-day · throughput · finality · adopting rollups · governance · regulatory exposure**
- **Ethereum blobs** (EIP-4844  · see [[systems/eip-4844-blob-economics-impact-2026|EIP-4844 blob 経済と 2026 市場影響]]) are now the default for ETH-aligned rollups — highest security (directly backed by Ethereum L1 ) · medium cost · target=6/max=9 blob/block after Pectra (see [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691]])
- **Celestia** is the pioneer of modular DA — independent PoS chain · Data Availability Sampling (DAS) + Nakamoto-style block production · lowest cost · but security ≠ Ethereum level
- **EigenDA** is EigenLayer restaking-secured DA (see [[systems/eigenlayer-overview|EigenLayer overview]]) — shares ETH staking economic security · costs slightly less than blobs · throughput is meaningfully higher
- **Avail** is a Polkadot-line DA layer (formerly Polygon Avail · Avail Project after independence) — KZG + DAS · preparing hybrid mode (EigenLayer connection) · early market share
- **NEAR DA** is NEAR Protocol's DA service — uses NEAR consensus + extremely low cost · connected to RaaS providers such as Polygon CDK / Caldera · mainly serves non-ETH-aligned rollups
- **Estimated cost per GB-day in 2026-Q2 **: Ethereum blob ~$0.10-0.30 (blob fee varies) · Celestia ~$0.02-0.05  · EigenDA ~$0.06-0.15  · Avail ~$0.04-0.08  · NEAR DA ~$0.01-0.03
- **adoption split**: Base/Arbitrum/Optimism/zkSync/Linea/Scroll/Polygon zkEVM = L1 blobs · Mantle/Movement/Cyber/Rivalz = EigenDA · Manta Pacific/Eclipse (partly)/some Polygon CDK = Celestia · some Polygon CDK/Sophon = Avail · some Caldera RaaS = NEAR DA
- Path: compare with [[systems/INDEX|systems index]] · [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup maturity matrix 2026]]

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/eip-4844-blob-economics-impact-2026|EIP-4844 blob 経済と 2026 市場影響]] for the Ethereum-native DA path that competes with all alt-DA, [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 倍増と L2 経済連鎖]] for the blob capacity expansion that affects all DA price competition, and [[systems/eigenlayer-overview|EigenLayer overview]] for the restaking economics underpinning EigenDA. For the rollup ecosystem that consumes these DA layers, see [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup maturity matrix 2026]] and [[systems/rollup-market-share-2026-arbitrum-optimism-base|rollup market share 2026]]. For the meta-strategy of L1/L2 separation that motivates DA modularity, see [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]]. For consensus models that DA layers use, see [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs Chain-BFT architecture]] and [[systems/threshold-bft-consensus-rust-implementations|threshold BFT consensus Rust implementations]]. For cross-chain bridge security that interacts with DA choice, see [[systems/cross-chain-bridge-security-insurance-matrix-2026|cross-chain bridge security insurance matrix 2026]]. For restaking AVS landscape including EigenDA as the largest AVS, see [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS landscape matrix]].

## Why this matrix matters

As of 2023-2024 , the default for DA layers was "rollups automatically use Ethereum L1 calldata." After Dencun (2024-03) introduced EIP-4844 blobs, L1 blobs became the default choice for ETH-aligned rollups, while also opening the debate over "whether alt-DA still has a market." In 2025-2026 , 5  DA competition patterns formed:

**Core question of the modular thesis**: do rollups need Ethereum-level DA security?
- **ETH-security maximalists** (Vitalik's public stance · see [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]]): the core commitment of a rollup is that "L1 DA guarantees state reconstructability" · using alt-DA is validium, not rollup · it should not be called a rollup
- **Modular advocates** (Celestia / Avail / EigenDA stance): rollup security ≠ DA must always be on L1  · different use cases can choose different security levels · "modular blockchain" is a new paradigm
- **Pragmatic middle path** (Mantle / Manta / Eclipse, etc.): most dApps do not need L1 DA level · saved costs can be redirected to user subsidies

For developers choosing a rollup stack: DA choice determines sequencer cost, user gas cost, and the dApp economic model. For institutional clients (tokenized fund / DvP): L1 DA is institutional grade, while alt-DA is commercial grade (contrast with [[systems/chainlink-ccip-institutional-messaging|CCIP institutional]], where institutions clearly demand L1 DA).

This matrix compares 5  publicly operating DA layers across 8  dimensions using a 2026-Q2  data snapshot.

### Ethereum blobs (EIP-4844)

**Architecture**: Ethereum L1  native · per 1 block there are 4  blobs (target=3  · max=6  in Dencun · target=6  · max=9  after Pectra) · each blob 128 KiB · total max ~1.1 MiB/block post-Pectra. Blob data is retained for ~18  days · after that, only the commitment (KZG) remains on-chain. Blob pricing is independent from calldata and uses an EIP-1559 -style fee market.

**Security model**: Ethereum L1 PoS validators (~100 万+) + DAS (EIP-7594 PeerDAS introduced in 2026-Q4+). Slashing is enforced directly by the Ethereum L1  protocol. Current security level = Ethereum L1  itself (Nakamoto coefficient ~5  · total ETH staked ~$120B · attack cost ~$40B+).

**Cost per GB-day** (2026-Q2  estimate): ~$0.10-0.30 (blob fee varies · peak $1+ · trough $0.05). ~100x cheaper than calldata.

**Throughput**: after Pectra ~1.1 MiB/block (12s blocks) ≈ ~6 GB/day. Theoretically can reach ~60 GB/day after Fusaka PeerDAS.

**Finality**: Ethereum L1 finality (~12-15  minutes · 2 epoch).

**Adopting rollups**: Arbitrum · Optimism · Base · zkSync Era · Linea · Scroll · Taiko · Polygon zkEVM · Blast · Mode · Mantle (partly) · and 95%+ ETH-aligned rollups by default.

**Governance**: Ethereum protocol governance (EIP process · ACD) · on-chain social consensus. After Pectra comes Fusaka PeerDAS (expected 2026-Q4 ).

**Regulatory exposure**: Ethereum L1  itself has long been under SEC attention, but is widely recognized as "sufficiently decentralized" and not a security. Blob data itself is only byte storage · regulatory surface is minimal.

### Celestia

**Architecture**: independent PoS L1  · Cosmos SDK + Tendermint BFT · DA-specialized (no EVM / smart-contract execution). Data Availability Sampling (DAS) lets light clients verify availability of the entire block through small samples, without downloading the whole block. 2D Reed-Solomon erasure coding + KZG commitment.

**Security model**: Celestia validators (~100  active validators · TIA token staking) · Tendermint BFT (2/3+ honest) · DAS provides a stronger guarantee that light clients can detect even majority-malicious validators. However, staking economic scale of ~$1-2B is far below Ethereum L1 .

**Cost per GB-day** (2026-Q2  estimate): ~$0.02-0.05 (depends on blob congestion). Cheapest · about 1/5 of Ethereum blob.

**Throughput**: 2 MB/block (2026  upgrade · block ~6s) ≈ ~28 GB/day. In 2027 , planned upgrade to 8 MB/block ≈ 120 GB/day.

**Finality**: Tendermint instant finality (~6s · single block).

**Adopting rollups**: Manta Pacific (major L2  customer) · Eclipse (some modules) · some Polygon CDK configurations · some Caldera RaaS · Astria sequencer · Movement Labs · Lyra · and ~30+ chains (2026).

**Governance**: Celestia Foundation + TIA token DAO · upgrades through on-chain governance vote.

**Regulatory exposure**: no clear SEC statement after TIA token launched in 2024  · Celestia Labs actively geo-fences US retail. Whether TIA qualifies as a utility token under EU MiCA is undecided.

### EigenDA

**Architecture**: EigenLayer restaking secured (see [[systems/eigenlayer-overview|EigenLayer overview]] and [[systems/eigenlayer-avs-mechanism|EigenLayer AVS mechanism]]) · EigenDA operators borrow ETH stake from EigenLayer for economic security · provide a high-throughput DA service. 3  roles: Dispatcher / Encoder / Validator · KZG commitment · DAS.

**Security model**: of EigenLayer's ~$14B TVL, ~$6B opts in to EigenDA (see [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS landscape matrix]]) · slashing enforced by EigenLayer protocol. Security ≈ ETH staking, but with 1  layers in between (restaking consent) · Vitalik warned that "restaking consensus should not be over-relied upon" (see [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]]).

**Cost per GB-day** (2026-Q2  estimate): ~$0.06-0.15. Between blobs and Celestia, because operator + restaker rewards must be paid.

**Throughput**: ~15 MB/s sustained (~1.3 TB/day theoretical · in practice ~100-500 GB/day depending on load). The highest-throughput DA layer.

**Finality**: EigenDA dispatcher confirmation (~10-30s) + depends on EigenLayer slashing window.

**Adopting rollups**: Mantle (major) · Movement · Cyber · Rivalz · multiple ZK Stack hyperchains · multiple OP Stack rollups · some Arbitrum Orbit. EigenDA is the default alt-DA for modular rollup-as-a-service.

**Governance**: EigenLabs team + EIGEN token holders + Security Council.

**Regulatory exposure**: EIGEN token launched in 2024  · no clear SEC statement · EigenLayer actively delayed EIGEN airdrop to US users. Restaking economics look closer to securities from a regulatory perspective (see [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャ]]).

### Avail

**Architecture**: independent DA chain (formerly Polygon Avail · spun off in 2023  as an independent project). Substrate framework (Polkadot lineage) · Babe+Grandpa consensus · KZG + DAS · similar to Celestia's design but from the Polkadot academic lineage. Plans EigenLayer integration ("Avail + EigenLayer" hybrid mode) to further borrow ETH stake and strengthen security.

**Security model**: Avail validators (~150  active) · Babe+Grandpa BFT · staking economic scale ~$200-500M (2026). After EigenLayer hybrid mode goes live, it can borrow ETH stake to strengthen security · but in 2026-Q2  it mainly relies on its own AVAIL token staking.

**Cost per GB-day** (2026-Q2  estimate): ~$0.04-0.08. Slightly higher than Celestia because staking economic scale is smaller and validator subsidy is needed.

**Throughput**: ~2 MB/block (20s blocks) ≈ ~8.6 GB/day. Planned upgrade to 4 MB/block ≈ 17 GB/day.

**Finality**: Grandpa finality (~30s-1min).

**Adopting rollups**: some Polygon CDK chains · Sophon (zkSync ZK Stack partnership) · QuarkChain · Madara · LumioVM · some RaaS configurations. Customer count is lower than Celestia / EigenDA.

**Governance**: Avail Foundation + AVAIL token DAO (after 2025 token launch).

**Regulatory exposure**: AVAIL token is relatively new (2025  launch) · regulatory position unclear. Avail team is mainly Europe-based · prioritizes MiCA compliance.

### NEAR DA

**Architecture**: DA service module of NEAR Protocol · uses NEAR sharded consensus + storage staking. Not an independent chain; a DA service on NEAR L1  · accessible to EVM rollups through cross-chain bridges.

**Security model**: NEAR validators (~250  active) · NEAR PoS consensus · staking economic scale ~$1-2B (NEAR token market cap × stake ratio). Bridge security is an additional surface (see [[systems/cross-chain-bridge-security-insurance-matrix-2026|cross-chain bridge security insurance matrix 2026]]).

**Cost per GB-day** (2026-Q2  estimate): ~$0.01-0.03. Cheapest · uses NEAR's extremely low storage-cost economics.

**Throughput**: depends on NEAR sharding · theoretical ~100 MB/s sustained · actual rollup-client service ~10-50 GB/day.

**Finality**: NEAR finality (~2-3s · meaningfully faster than Ethereum).

**Adopting rollups**: some Caldera RaaS chains · experimental deployments by some OP Stack rollups · some Polygon CDK · mainly serves non-ETH-aligned rollups. Customer count < Celestia / EigenDA / Avail.

**Governance**: NEAR Foundation + NEAR token DAO · NEAR DA team leads the roadmap.

**Regulatory exposure**: NEAR token was reviewed in multiple jurisdictions in 2024-2025 , but has not been directly designated a security by the SEC. Regulatory exposure of the overall NEAR Protocol is relatively moderate.

## Big comparison matrix table

**5  DA layers × 8  dimensions** (state as of 2026-Q2 ):

| DA Layer | Architecture | Security model | Cost/GB-day | Throughput | Finality | Adopting rollups | Governance | Regulatory exposure |
|---|---|---|---|---|---|---|---|---|
| **Ethereum blobs (EIP-4844)** | Ethereum L1  native · KZG · target=6/max=9  (post-Pectra) | Ethereum PoS ~100万 validators · DAS (PeerDAS 2026-Q4) · attack cost $40B+ | $0.10-0.30 | ~6 GB/day (post-Pectra) · ~60 GB/day after Fusaka | ~12-15 min (2 epoch) | **95%+ ETH-aligned rollups**: Arbitrum · Optimism · Base · zkSync · Linea · Scroll · Taiko · Polygon zkEVM | Ethereum protocol governance (EIP/ACD) | Extremely low · Ethereum sufficiently decentralized consensus |
| **Celestia** | Independent PoS · Cosmos SDK+Tendermint · DAS · 2D RS+KZG | ~100 validators · TIA staking ~$1-2B · strong DAS guarantee | **$0.02-0.05** (cheapest modular DA) | 2 MB/block 6s ≈ 28 GB/day · 2027 8 MB target | ~6s instant (Tendermint) | Manta Pacific · some Eclipse · some Polygon CDK · Astria · Movement · ~30+ chains | Celestia Foundation+TIA DAO | TIA SEC no statement · geo-fence US · MiCA undecided |
| **EigenDA** | EigenLayer AVS · Dispatcher/Encoder/Validator · KZG+DAS | EigenLayer ~$6B opt-in (restaking) · slashing via EigenLayer · borrows ETH stake | $0.06-0.15 | **~15 MB/s sustained** (~100-500 GB/day in practice) | ~10-30s dispatcher + slashing window | Mantle · Movement · Cyber · Rivalz · ZK Stack hyperchains · some OP Stack · some Arbitrum Orbit | EigenLabs+EIGEN+SC | EIGEN SEC no statement · restaking is close to securities |
| **Avail** | Independent DA chain · Substrate (Polkadot lineage) · Babe+Grandpa · KZG+DAS | ~150 validators · AVAIL staking ~$200-500M · EigenLayer hybrid planned | $0.04-0.08 | 2 MB/block 20s ≈ 8.6 GB/day · 4 MB upgrade ≈ 17 GB | ~30s-1min (Grandpa) | Some Polygon CDK · Sophon · QuarkChain · Madara · LumioVM | Avail Foundation+AVAIL DAO | AVAIL 2025 new launch · MiCA compliance priority |
| **NEAR DA** | NEAR L1 module · sharded consensus · storage staking · EVM through bridge | NEAR ~250 validators · staking ~$1-2B · bridge security is additional surface | **$0.01-0.03** (cheapest) | Theoretical 100 MB/s · actual ~10-50 GB/day | ~2-3s (NEAR fast finality) | Some Caldera RaaS · OP Stack experiments · some Polygon CDK | NEAR Foundation+NEAR DAO | NEAR reviewed in multiple jurisdictions · moderate regulatory exposure |

**How to read the matrix**:
- **Cost ranking**: NEAR DA < Celestia < Avail < EigenDA < Ethereum blobs (blobs are most expensive but safest · NEAR is cheapest but has fewer customers)
- **Throughput ranking**: EigenDA (highest) > NEAR (high theoretical · medium actual) > Celestia ≈ Avail ≈ Ethereum blob (post-Pectra)
- **Security-level ranking**: Ethereum blobs (highest · L1  native) > EigenDA (borrows ETH restake) > Celestia ≈ NEAR DA (independent PoS · staking ~$1-2B) > Avail (smallest staking scale)
- **Finality speed ranking**: NEAR DA (2-3s) > Celestia (6s) > EigenDA (10-30s + slashing) > Avail (30s-1min) > Ethereum blobs (12-15min)
- **Adoption scale ranking**: Ethereum blobs (95%+ ETH-aligned) > Celestia (~30+ chains · alt-DA leader) > EigenDA (~20 chains · fastest growth) > Avail / NEAR DA (each <10  major chains)

### Before vs after Dencun

**Before Dencun (before 2024-03 )**:
- ETH-aligned rollups used L1 calldata · high cost · main rollup cost (~80%)
- Alt-DA (Celestia 2023-10  mainnet · EigenDA 2024-Q1  mainnet · Avail 2024-Q2  · NEAR DA 2023) positioned itself as "90%+ cheaper" · took cost-sensitive customers
- Modular thesis narrative: "rollups should be free to choose DA · no need to be bound to Ethereum L1 DA"

**After Dencun (after 2024-03 )**:
- L1 blobs reduced ETH-aligned rollup costs by ~100x · many rollups chose to stay on blobs
- Alt-DA price advantage narrowed from ~50x to ~3-5x (blob $0.10-0.30 vs Celestia $0.02-0.05)
- Modular thesis narrative shifted: "for small cost differences, security level + ecosystem alignment should be considered · most ETH-aligned rollups choose blobs · non-ETH-aligned rollups choose alt-DA"
- Pectra (2025-Q2) doubled blob target · further compressed alt-DA price advantage
- Fusaka PeerDAS (planned 2026-Q4 ) adds another 10x blob capacity · alt-DA may be further compressed in ETH-aligned market share

### Alt-DA differentiation strategies

Facing blob price pressure, each alt-DA chooses a different differentiation path:

**Celestia**:
- "Modular sovereignty" route · emphasizes Cosmos / Move / non-EVM ecosystems (Manta · Eclipse · Movement · Astria)
- Does not directly compete with ETH-aligned rollups · serves sovereign rollups that "want to choose their own settlement layer"
- TIA token economic incentives · token incentives for rollup customers

**EigenDA**:
- "ETH-aligned but extremely high throughput" route · serves high-TPS rollups (Mantle · heavy DeFi dApps)
- Borrows economic security from EigenLayer $14B+ TVL · close to L1 DA level
- Default for modular rollup-as-a-service (RaaS) · Caldera · AltLayer · Conduit · etc. all default to EigenDA

**Avail**:
- "L1 DA alternative + EigenLayer hybrid" route · combines independence + borrowed ETH stake
- Polkadot academic lineage · advantage in Polygon CDK / Substrate-line ecosystems
- Current customer count is the smallest · whether EigenLayer hybrid attracts customers in the long term is the question

**NEAR DA**:
- "Extremely low cost + NEAR fast finality" route · serves non-DeFi high-frequency use cases (gaming · social)
- Customers are mainly RaaS · not major rollups
- Long-term value depends on the health of the NEAR Protocol ecosystem

### Who chooses which DA · decision dimensions

**ETH-aligned + institutional grade** (Coinbase Base · institutional RWA · tokenized fund):
- Ethereum blobs required · security level = Ethereum L1  · minimum regulatory surface
- Cannot choose alt-DA because institutional risk committees do not accept non-L1 DA

**ETH-aligned + DeFi-native** (major ZK/OP rollups such as Arbitrum · Optimism · zkSync):
- Mainly Ethereum blobs · ecosystem alignment + user expectations
- Some high-throughput child chains can choose EigenDA (Arbitrum Orbit · OP Stack child rollups)

**Modular rollup-as-a-service** (Caldera · AltLayer · Conduit customers):
- Default EigenDA (ETH-aligned · high throughput)
- Some customers choose Celestia (cheap) or Avail / NEAR DA (cheaper)

**Non-ETH-aligned** (Cosmos · Move · Solana ecosystem extensions):
- Mainly Celestia (Cosmos-line alignment) · or NEAR DA (NEAR ecosystem)
- Do not choose Ethereum blobs · ecosystem misalignment + unnecessary L1 fee exposure

**Gaming / social / high-frequency low-value** (Web3 game · social dApp):
- Mainly NEAR DA (cheapest) · or Celestia (cheap + medium security)
- Do not choose Ethereum blobs · cost still exceeds native gas budget

## Boundary cases / future trajectory

**Impact of PeerDAS** (Fusaka 2026-Q4  planned):
- Ethereum blob capacity 10x · per 1 day ~60 GB DA
- Alt-DA price advantage narrows from 3-5x to ~1.5-2x · further pressure
- Celestia / Avail plan to respond with their own capacity upgrades (Celestia 2027 8 MB block)

**EigenDA's restaking economic boundary**:
- EigenDA revenue in the 2026  estimate is ~$120M ARR (see [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS matrix]])
- 70-90% of revenue is distributed to operators + restakers · EigenLabs extracts 10-30%
- If total EigenLayer TVL falls because restaking regulation tightens, EigenDA's security budget falls in sync
- Conversely, if restaking regulatory clarity + TVL growth arrive, EigenDA becomes dominant in alt-DA

**Celestia long-term path**:
- Already the banner for the modular thesis · but ETH-aligned customers will not grow (because blobs are already cheap)
- Long-term reliance on Cosmos / Move / sovereign rollup ecosystems · diverges from the ETH ecosystem
- TIA token economics require rollup customers to keep paying DA fees, but fee increases are difficult in an alt-DA price war

**Can Avail fight back?**:
- Strong Polkadot academic lineage · but small customer count
- "EigenLayer hybrid" is key · if successful, borrowed ETH stake strengthens security and may take some customers from Celestia
- Substrate / Polygon CDK integration is another path

**NEAR DA niche path**:
- Clear price advantage · but overall NEAR Protocol ecosystem scale is limited
- Long term, it may specialize in gaming / social / high-frequency low-value DA rather than top DeFi rollups
- Serving EVM rollups through cross-chain bridges introduces an additional security surface

**DA choice for institutional clients**:
- 2026  institutional RWA cases (BlackRock BUIDL · Franklin Templeton FOBXX · etc.) are all deployed on Ethereum L1  or Polygon zkEVM L1-DA · alt-DA is not accepted
- Whether institutions accept EigenDA (borrowed ETH stake) long term is EigenLabs' hopeful path · but at present institutional risk committees still prefer pure L1 DA

**Relationship between DA layers and ZK proving**:
- ZK rollups compress transaction batches into small proofs · proofs go to L1  · large data (state diff) goes to DA
- The larger the DA layer capacity, the larger and more economical the batches ZK rollups can process
- ZK rollups are more sensitive to DA choice because it is the largest cost component (see [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup matrix 2026]])

**Multi-DA / DA aggregation**:
- Some rollups experiment with a "L1 blob + alt-DA two-layer" mode · store core commitment on L1 blob + full state diff on alt-DA
- Provides fallback security (even if alt-DA fails, reconstruction is possible from the L1 commitment)
- Hybrid path of the modular thesis · but engineering is complex and only a few deployments exist

**Regulatory asymmetry**:
- Ethereum L1  is already sufficiently decentralized · minimum regulatory surface
- Tokens of Celestia / EigenDA / Avail / NEAR DA are all in a regulatory gray zone · long-term uncertainty
- Institutional clients prefer L1 DA to avoid regulatory risk · this is the long-term ceiling for alt-DA

**Formal verification / engineering quality**:
- Ethereum blob implementation has multi-client support (Geth / Nethermind / Besu / Erigon / Reth) + long-term audits · most mature
- EigenDA is EigenLayer's main AVS · multiple audits + strict review before slashing launch
- Celestia / Avail / NEAR DA have all passed audits · but production experience < Ethereum blob

## Related

- [[INDEX|Wiki Index]]
- [[systems/INDEX|systems index]]
- [[systems/eip-4844-blob-economics-impact-2026|EIP-4844 blob 経済と 2026 市場影響]]
- [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 倍増と L2 経済連鎖]]
- [[systems/pectra-upgrade-overview|Pectra upgrade overview]]
- [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]]
- [[systems/eigenlayer-overview|EigenLayer overview]]
- [[systems/eigenlayer-avs-mechanism|EigenLayer AVS mechanism]]
- [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS landscape matrix]]
- [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup maturity matrix 2026]]
- [[systems/rollup-market-share-2026-arbitrum-optimism-base|rollup market share 2026]]
- [[systems/cross-chain-bridge-security-insurance-matrix-2026|cross-chain bridge security insurance matrix 2026]]
- [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]]
- [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs Chain-BFT architecture]]
- [[systems/threshold-bft-consensus-rust-implementations|threshold BFT consensus Rust implementations]]
- [[systems/chainlink-ccip-institutional-messaging|Chainlink CCIP institutional messaging]]

## Sources

- Celestia docs · https://docs.celestia.org/
- EigenDA docs · https://docs.eigenda.xyz/
- Ethereum.org DA · https://ethereum.org/en/developers/docs/data-availability/
- Avail docs · https://docs.availproject.org/
- NEAR DA blog · https://near.org/blog/near-da
- L2Beat DA summary · https://l2beat.com/data-availability/summary
- DefiLlama rollups · https://defillama.com/chains/Rollup
- Blobscan · https://blobscan.com/
- Vitalik blog · "Layer 2s as cultural extensions of Ethereum" (public)
- Ethereum Foundation EIP-7594 PeerDAS spec
