---
source: systems/mev-flashbots-suave-order-flow-auction
source_hash: 3d4555f954345202
lang: ja
status: machine
fidelity: ok
title: "MEV · Flashbots, MEV-Boost, SUAVE, order-flow auctions"
translated_at: 2026-06-03T01:06:46.350Z
---
# MEV · Flashbots, MEV-Boost, SUAVE, order-flow auctions

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] 配下に位置する。より広い暗号経済的調整の文脈では [[systems/eigenlayer-overview|EigenLayer]]、rollup レベルの MEV 像については [[systems/l2-agent-economics-arbitrum-base-op-comparison|L2 agent economics]]、エージェント取引コストの観点では [[agent-economy/INDEX|agent-economy index]] とあわせて読む。

## 主要事実

- **MEV (Maximal / Miner Extractable Value)** = validators / sequencers が取引の順序変更、取り込み、除外によって抽出できる価値
- **Flashbots** (2020)は private-transaction relay(MEV-Geth)を導入し、その後 Ethereum 上で block-building と block-proposing を分離する **MEV-Boost**(Merge 後)を導入した
- Ethereum Merge 後(2022-09)の **MEV-Boost 採用**:現在 Ethereum blocks の >90% が MEV-Boost 経由で構築されている(out-of-protocol PBS — Proposer-Builder Separation の一形態)
- **SUAVE (Single Unifying Auction for Value Expression)** は、cross-chain MEV / order-flow markets に向けた Flashbots の次世代アーキテクチャ
- **Order-flow auctions (OFAs)** は、searchers が最良執行を提供するために競う private channels へ user transactions をルーティングする。CoW Swap、UniswapX、1inch Fusion は実運用例
- AI agents にとって、MEV economics は agent execution cost、slippage、front-running risk に直接影響する

## MEV 分類

| MEV 種別 | 仕組み | 例 |
|---|---|---|
| **DEX arbitrage** | プール間価格差 | Uniswap ↔ Sushi spread、cross-DEX cyclic arb |
| **Liquidation** | 担保不足ポジションを清算トリガーする | Aave / Compound liquidation bots |
| **Sandwich** | ユーザー swap を front-run + back-run する | 被害取引の前後で価格をつり上げてから売り抜ける |
| **NFT sniping** | mint / sale を front-run する | 割安 listing の検知 |
| **Backrunning** | front-running せず対象 tx の直後に挿入する | 敵対性が低く、「good MEV」とみなされることが多い |
| **JIT (Just-In-Time) liquidity** | 大口 swap の直前だけ liquidity を追加する | Uniswap V3 / V4 specific |
| **Time-bandit / reorg** | 取り逃した MEV を捕捉するため blocks を再採掘する | Ethereum では Merge 後におおむね緩和 |

## Merge 前 → Merge 後のアーキテクチャ

```
Merge 前(PoW):
User tx ──► mempool ──► miner(順序を選択) ──► block
                                  │
                          MEV は miners が直接、
                          または Flashbots bundles 経由で抽出

MEV-Boost を伴う Merge 後(PoS):
User tx ──► mempool(public または private OFA)
             │
             ▼
       Builders が最も収益性の高い block 構築を競う
             │
             ▼
       MEV-Boost relay(例:Flashbots、BloXroute、Eden)
             │
             ▼
       Validator が最も支払い額の高い block を選択
             │
             ▼
       Validator が提案し、block が finalized される
```

重要な変化は、**proposer(validator)が builder から分離された**ことである。Validators はもはや MEV 抽出の専門知識を必要とせず、高度な builders が最も収益性の高い block を構築して inclusion のために入札する。

## MEV-Boost の数値と依存関係

- 2023
以降、**Ethereum blocks の >90%** が MEV-Boost relays 経由で構築されている。主要 builders: **beaverbuild**、**rsync-builder**、**Titan**、**Builder0x69** ほか
- 主要 relays: **Flashbots**、**BloXroute**、**Eden**、**Ultra Sound**、**Aestus**
- **検閲懸念**:一部の OFAC-compliant relays は制裁対象 addresses をフィルタリングする。Ethereum community は censorship-resistant relay diversification によって反発した

これは relay operators と builders への **経済的依存** を生み、[[systems/erc-4337-userop-bundler-flow|ERC-4337 bundlers]] と [[systems/cctp-v2-overview|CCTP attestation]] の依存モデルに似たものとなる。名目上は分散化された stack の内部にある centralization vector である。

## SUAVE — 何を目指しているか

**SUAVE** (Single Unifying Auction for Value Expression)は、Flashbots が設計する **decentralized block-builder network** であり、次を目指す。

- 自身の chain(SUAVE-chain)として動作し、複数 destination chains にまたがる MEV を調整する
- Users / agents が preference を表現できるようにする(「最大 1% slippage で swap を実行し、全 chains の中で最良 venue を通す」など)
- Searchers と builders が destination chain の外で preference の充足を競い、on-chain で settle する
- Cross-chain MEV の統合を狙う。現状は Ethereum L1, every L2, Solana、Cosmos などに分断されている

状態(2025-2026):SUAVE testnet は稼働中で、production rollout は進行中。戦略的な賭けは、cross-chain volume が拡大し rollups が増えるにつれ、fragmentation が非効率を生み、SUAVE 型の統合がそれを捕捉できるという点にある。

## ユーザー / エージェント向け Order-Flow Auctions (OFAs)

OFAs は user transactions を **private auction** にルーティングし、searchers がユーザーに最良執行を与えるために競う。

| OFA | 仕組み | 用途 |
|---|---|---|
| **CoW Swap** | coincidence-of-wants matching を伴う batch auction | MEV protection 付き swap |
| **UniswapX** | Permit2 + signed orders、fillers が競争 | Aggregator + MEV protection |
| **1inch Fusion** | signed orders の resolver-based fill | 同じ pattern |
| **MEV Blocker** | 直接的な mempool replacement | RPC-level protection |

On-chain trades を実行する AI agents にとって、OFAs は **構造的な MEV protection** を提供する。public mempool に broadcast する(sandwich risk)のではなく、agent が intent に署名し、resolver がその充足を競う。

## L2 / rollup MEV への含意

L2 rollups(Arbitrum、Optimism、Base など)では、デフォルトで **sequencer が MEV extractor** である。centralized sequencer は自身を通過するすべての MEV を抽出できる。Sequencers の分散化は活発な研究領域である。

- **Espresso, Astria** — shared-sequencer networks(一部は [[systems/eigenlayer-overview|EigenLayer AVS]] 上)
- **PEPC / based rollups** — L1 validators が sequence する代替アーキテクチャ
- **L2 OFAs** — MEV を透明に channel する per-rollup OFA deployments

[[systems/l2-agent-economics-arbitrum-base-op-comparison|Base / Arbitrum / Optimism]] における AI-agent volume forecasting では、MEV economics が agent unit costs に直接影響する。MEV extraction によって一部が賄われる sequencer revenue は、user fees に反映されるためである。

## 関連項目

- [[systems/INDEX]]
- [[systems/eigenlayer-overview]]
- [[systems/l2-agent-economics-arbitrum-base-op-comparison]]
- [[systems/erc-4337-userop-bundler-flow]]
- [[systems/rollup-market-share-2026-arbitrum-optimism-base]]
- [[systems/solana-firedancer-validator-economics]]
- [[systems/sui-aptos-move-l1-ecosystem]]
- [[systems/bft-validator-economy-overview]]
- [[agent-economy/INDEX]]
- [[agent-economy/stablecoin-routing-agent-transactions]]
- [[INDEX|FinWiki index]]

## 出典

- flashbots.net — Flashbots project pages、MEV-Boost stats、SUAVE documentation。
- writings.flashbots.net — PBS history を含む research posts。
- github.com/flashbots — MEV-Boost と SUAVE の reference implementations。
- ethresear.ch — MEV-related research threads。
- Public MEV-Boost dashboards(例:mevboost.org-class trackers)。
