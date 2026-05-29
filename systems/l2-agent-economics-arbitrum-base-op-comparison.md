---
title: L2 Agent 経済学 · Arbitrum vs Base vs Optimism の AI agent ワークロード比較
aliases: [l2-agent-economics, arbitrum-base-op-agent-comparison, l2-for-ai-agents, l2-per-tx-cost-agent, l2-paymaster-availability, agent-workload-l2-selection, base-default-l2-for-agents]
domain: systems
created: 2026-05-25
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-25
confidence: likely
tags: [systems, l2, arbitrum, base, optimism, agent-economy, gas, paymaster, usdc, cdp, privy]
status: active
sources:
  - https://l2beat.com/scaling/summary
  - https://defillama.com/chains
  - https://docs.base.org
  - https://docs.arbitrum.io
  - https://docs.optimism.io
  - https://docs.cdp.coinbase.com
  - https://docs.privy.io
  - https://www.circle.com/en/cross-chain-transfer-protocol
  - Coinbase, Stripe, Visa public docs on L2 stablecoin payments
---

# L2 Agent 経済学 · Arbitrum vs Base vs Optimism の AI agent ワークロード比較

## TL;DR

2026 年の AI agent ワークロードにおける L2 選定は **Base がデフォルト** に収束し、Arbitrum + Optimism がそれぞれ一部のニッチ(Arbitrum は DeFi-heavy agent + 機関向け、Optimism は OP Stack エコシステム + 公共財)を獲得している。3 つの L2 の per-transaction cost は [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 拡張]] 後、いずれも $0.001-0.01 の範囲に入るが、Base は **Coinbase CDP + USDC Native + Coinbase Smart Wallet + ERC-4337 paymaster のフルスタックデフォルト** を持ち、agent 開発者の「L2 選定」決定をほぼ自動的に Base に向ける。Arbitrum の優位性はより深い DeFi 流動性(GMX / Camelot / Pendle)+ Stylus(WASM)+ Orbit RaaS による institutional agent の自社チェーン構築経路。Optimism の優位性は Superchain ネットワーク効果(World, Zora, Worldcoin)+ retroactive funding だが、agent payment シナリオのシェアは最も小さい。sequencer MEV は 3 チェーンとも依然として中央集権 sequencer が抽出しており、高頻度 agent payment にとって潜在的リスクとなる。

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/erc-4337-overview|ERC-4337 総覧]] と [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 ウォレット採用]] を読み、agent transaction のウォレット層を理解し、[[agent-economy/INDEX|agent economy index]] と対照して agent payment プロトコルスタック全体の進化を見る。Per-transaction の経済学的背景については [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 拡張]] を参照。

## 3 L2 基礎パラメータ対照(2026-Q1)

| 観点 | Base | Arbitrum One | Optimism Mainnet |
|---|---|---|---|
| タイプ | OP Stack(Bedrock + Fault Proof) | Arbitrum Nitro(custom rollup) | OP Stack(Bedrock + Fault Proof) |
| TVL(DefiLlama、2026-Q1) | ~$8-10B | ~$15-20B | ~$1-2B |
| 日次 tx | ~3-5M | ~2-3M | ~300-500k |
| 平均 per-tx ユーザー fee(post-Pectra) | $0.001-0.005 | $0.002-0.01 | $0.001-0.005 |
| DA 層 | Ethereum blob | Ethereum blob(Nova は一部 AnyTrust DA) | Ethereum blob |
| Sequencer 中央集権度 | Coinbase 単一 sequencer | Offchain Labs 単一 sequencer(BoLD fault proof + 分散化計画あり) | Optimism Foundation 単一 sequencer(分散化計画あり) |
| Native USDC | USDC Native(Circle, 2023-09 ローンチ) | USDC Native(2023-06 ローンチ) | USDC Native(2023-09 ローンチ) |
| Bridged USDC | USDbC(deprecated, ユーザー移行ほぼ完了) | USDC.e(legacy, 依然として存在) | USDC.e(legacy, 依然として存在) |
| Smart wallet デフォルト | Coinbase Smart Wallet(ERC-4337) | 複数のサードパーティ(Safe / Biconomy 等) | 複数のサードパーティ |
| Paymaster 商用化製品 | Coinbase CDP Paymaster | Alchemy Account Kit / Biconomy / Pimlico | Alchemy Account Kit / Biconomy / Pimlico |
| 既知の大型 agent / payment 統合 | x402 / Coinbase Agent Kit / Privy デフォルト | GMX agent / DeFi agent / 一部機関 | World mini-apps / Worldcoin |

## Per-transaction cost · agent ワークロード視点

AI agent の典型的なワークロード:

- **micropayment**(API call 1 回あたり $0.001-0.10 課金):per-tx cost は $0.005 未満である必要があり、Base/Optimism は満たすが Arbitrum は境界線上
- **periodic settlement**(日次 / 毎時バッチで複数小額決済):batch コントラクト + bundled UserOp(ERC-4337)で per-call を $0.0005 オーダーに分散、3 チェーンとも実現可能
- **DeFi-action agent**(swap / lend / stake):per-tx $0.01-0.10、3 チェーンとも許容、Arbitrum は DeFi の深度で優位
- **bridge-action agent**(クロスチェーンで資産を融通):per-bridge $0.20-2.00([[systems/cctp-v2-overview|CCTP V2]] burn-mint + L1 finality + 目標チェーン mint を含む)、高価だが低頻度

post-Pectra データ:**EIP-7691 が Ethereum blob target を 3 から 6 個 / per-block へ引き上げ + max 9**、これにより L2 calldata cost が直接 2023 年の 1/3-1/5 に削減された。詳細は [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 拡張]] を参照。

## Sequencer MEV implications for agents

3 チェーンとも依然として **単一の中央集権 sequencer** であり、これが agent に与える直接的影響:

- **front-running リスク**:高価値 swap / arbitrage agent は mempool 時間枠内で sequencer による reorder の対象となりうる、Base / Arbitrum / Optimism いずれも強制 FCFS や fair ordering を持たない
- **time-boost オークション**(Arbitrum、2024-04 ローンチ):ユーザーは料金を支払って割り込み可能、実質的に MEV-via-priority を制度化、searcher が優先 inclusion を入札可能、中等感度の agent は time-boost コストを予算に算入する必要
- **Base private mempool**:Coinbase が 2024-2025 に Smart Wallet 顧客向けにオプションの private bundle 経路を提供、sandwich attack を一部軽減
- **Optimism Superchain shared sequencer roadmap**:理論上、OP Stack chain が sequencer を共有することで cross-chain atomic execution を導入できる、2026 年時点で本番未デプロイ
- **decentralized sequencer**:3 チェーンとも roadmap には含まれるが、2026 年時点でいずれもメインネットで実質進捗なし、中央集権 sequencer は依然として agent が受け入れる必要がある信頼前提
- **agent 実務アドバイス**:high-value swap は [[systems/chain-abstraction-pattern-overview|chain abstraction パターン]] を使って Cowswap / 1inch / Skip 等の batch オークション経路でトランザクションを通し、sequencer 単一障害点を回避

## Gas sponsorship / Paymaster の可用性

ERC-4337 paymaster により dApp / agent プラットフォームが gas を代行支払いし、「ETH が必要」という最大の UX 障害を取り除く。3 チェーンの比較:

### Base + Coinbase CDP Paymaster

- **製品**:[[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]] Paymaster
- **価格**:gas sponsorship + Coinbase fee markup、daily / per-user cap を設定可能
- **統合の深さ**:Coinbase Smart Wallet とネイティブにバインドされており、SCA 作成 + 最初の sponsored tx を 1 回で完結
- **agent フレンドリー度**:Coinbase Agent Kit + AgentKit SDK がデフォルトで CDP を使用、ほぼ摩擦ゼロ
- **制約**:Coinbase のリスクコントロール + KYC データは Coinbase に帰属、一部の管轄では agent が制限される

### Arbitrum + Alchemy / Pimlico / Biconomy

- **製品**:Alchemy Account Kit、Pimlico、Biconomy、Stackup、いずれも Arbitrum をサポート
- **メカニズム**:サードパーティ paymaster サービス、sponsored gas 量に応じて課金、通常 5-15% の markup
- **統合**:dApp 側での自己統合が必要、「デフォルトのフルスタック」体験はない
- **機関フレンドリー**:Alchemy Account Kit は institutional dev 向けに SOC2 + エンタープライズ SLA を提供

### Optimism + Arbitrum 同様のサードパーティ

- Arbitrum とほぼ同じ paymaster 選択肢、ただし agent エコシステム規模は小さく、具体的な SDK 統合事例は少ない

### Paymaster 戦略対照

| 観点 | Base / CDP | Arbitrum / Alchemy 系 | Optimism / 同上 |
|---|---|---|---|
| デフォルトバインドウォレット | Coinbase Smart Wallet | Safe / Biconomy SCA | Safe / Biconomy SCA |
| Onboarding 摩擦 | 極低(Coinbase アカウント = SCA) | 中(ウォレット + paymaster 選定要) | 中 |
| Sponsor markup | Coinbase 内蔵 | 5-15% サードパーティ markup | 5-15% |
| Agent SDK デフォルト | Coinbase Agent Kit + Privy AgentCore デフォルト | 各 SDK | 各 SDK |
| 規制 / KYC | Coinbase 集約 | 各 paymaster カスタム | 各 paymaster カスタム |

## Native stablecoin liquidity · USDC Native vs Bridged

USDC Native(Circle 直接発行)vs USDC.e / USDbC(Wormhole / OFT 等経由のレガシーブリッジ):

- **Base**:USDC Native が 2023-09 にローンチ、USDbC の移行はほぼ完了、Base USDC の流通量 ~$3-5B(2026-Q1)
- **Arbitrum**:USDC Native が 2023-06 にローンチ、ただし USDC.e legacy は依然として ~$500M-1B が未移行(深い DeFi 統合のため)、USDC 総計 ~$3-4B
- **Optimism**:USDC Native が 2023-09 にローンチ、USDC.e legacy ~$200-400M、USDC 総計 ~$500-800M
- **CCTP V2 統合**:Circle [[systems/cctp-v2-overview|CCTP V2]] burn-mint プロトコルが 3 チェーンとも展開済み、cross-L2 USDC 移転は 1-3 秒 finality + ~$0.01-0.10 fee
- **agent への影響**:agent の stablecoin 保有 / 決済は USDC Native の使用が望ましい(レガシーブリッジの二次デペッグリスクを回避)、Base の USDC 流動性 + デフォルト SCA + CDP が Base を agent デフォルト stablecoin レールとしている

PYUSD / USDT0 / RLUSD は 3 チェーンに展開済みだが USDC より遥かに小さく、2026 年の stablecoin payment は実質的に USDC payment と同義。

## 開発者デフォルト · Coinbase CDP / Privy / AWS AgentCore

agent 開発者の L2 選定は wallet provider + cloud SDK によって事前にロックされている:

- **[[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]]**:Base + USDC Native + Smart Wallet + Paymaster がデフォルト、統合は 1 行のコード、agent はほぼ自動的に = Base
- **[[agent-economy/privy-aws-agentcore-default-wallet|Privy + AWS AgentCore]]**:Privy は AWS Bedrock AgentCore 統合において Base + Ethereum + Solana ウォレットをデフォルトで作成、agent payment のデフォルトは USDC on Base
- **[[agent-economy/x402-cloudflare-aws-edge-integration|x402 エッジ統合]]**:Cloudflare / AWS / Vercel 等の CDN/edge プラットフォームの x402 実装はデフォルトで USDC on Base、agent は HTTP 402 経由で自動的に Base settlement を選択
- **Alchemy Account Kit**:マルチチェーンサポートだが GTM は Arbitrum + Base + Optimism + Polygon を優先、agent にはマルチチェーンを推奨
- **結果**:2025-2026 年の新規 agent プロジェクトの ~70%+ が Base を settlement chain として選定、Arbitrum / Optimism / Polygon の合計は ~30%、詳細は [[agent-economy/embedded-wallet-network-effects-moat|embedded wallet ネットワーク効果の堀]] を参照

## Arbitrum 差別化:DeFi 深度 + Orbit + Stylus

- **DeFi 流動性**:GMX(perps)+ Camelot + Pendle + Radiant + Vertex、DeFi-heavy agent(yield optimizer / perps trader / collateral manager)は Arbitrum で最も深い流動性を得る
- **Orbit RaaS**:Arbitrum Orbit は企業 / 機関 / 大型 DeFi プロトコルに自社 L3 構築オプションを提供、Xai(ゲーム)、Sanko、Cheese Chain 等が稼働中
- **Stylus**:WASM-based コントラクト実行、Rust / C / C++ コントラクトが EVM と相互運用可能、2024-04 メインネット、高性能 agent compute に理論的優位を持つが実際の採用は遅い
- **機関顧客**:一部 PayPal PYUSD on Arbitrum + 一部機関 Treasury 展開
- **結論**:Arbitrum は依然として **「DeFi 深度需要 + L3 RaaS + Stylus 高性能」** の agent 第一選択肢

## Optimism 差別化:Superchain + RetroPGF

- **Superchain**:Base、World、Zora、Worldcoin、Mode、Lyra、Polynomial 等が OP Stack codebase + 治理 + 将来の sequencer を共有
- **RetroPGF(Retroactive Public Goods Funding)**:OP トークンを公共財貢献者に定期的に配布、5 ラウンドで ~$300M+ を配布済み
- **agent シナリオ**:World mini-apps(Worldcoin 内)は最大の agent / mini-app 実質展開シナリオだが、従来の ERC-4337 agent 経路と分流
- **制約**:Optimism Mainnet 本体の TVL と日次 tx が Base / Arbitrum よりはるかに低く、直接の agent 展開シェアは最小

## Bundled UserOp + Batched settlement · agent 実コスト

agent の実 per-action コストは「1 UserOp 1 settlement」ではなく、**bundler が N 個の UserOp を EntryPoint に送信するために統合する**:

- **Bundler 経済**:Pimlico / Stackup / Alchemy / Biconomy 等の bundler が数十〜数百の UserOp を 1 件の L2 transaction にパッケージ
- **per-UserOp 分散コスト**:Base 上の bundled UserOp は ~$0.0003-0.001(Pimlico 2026 公開ベンチマーク)、Arbitrum は ~$0.0005-0.002、Optimism は Base と同等
- **bundler 関係**:agent プラットフォームは通常 1-2 個の bundler と長期提携、bundler は L2 fee market に応じてリアルタイムで batch size を調整
- **session key + ERC-4337 v0.7+**:agent は session スコープのキー(金額制限 + 時間制限 + コントラクトホワイトリスト)を申請可能、ユーザーが毎回署名する必要なし、これが agent payment 商用化の重要な UX ブレイクスルー
- **ERC-7715 + 7710**(permission proposal)+ ERC-4337 v0.8(roadmap)が agent permission の複雑度をさらに下げる、[[agent-economy/erc-7715-overview|ERC-7715 総覧]] と対照
- **bundler 中央集権リスク**:上位 5 社の bundler が ~80%+ の UserOp を処理、bundler の撤退 / 規制 / 障害は agent payment の可用性に影響

## Privy / Coinbase CDP / AWS AgentCore デフォルトのネットワーク効果

agent プロジェクトが wallet provider を選定すると L2 選定が基本的にロックされる、詳細は [[agent-economy/embedded-wallet-network-effects-moat|embedded wallet ネットワーク効果の堀]] を参照:

- **Privy** は AWS Bedrock AgentCore でデフォルトで ETH + Base + Solana ウォレットを作成、agent が一旦 AWS AgentCore 経路を通れば Base がほぼデフォルト settlement chain となる
- **Coinbase CDP** はすべての SDK ドキュメント例で Base をデフォルトチェーンとして使用、他の L2 への移行には paymaster / RPC / USDC アドレスの再構成が必要
- **WalletConnect / Reown** はマルチチェーンサポートだが GTM は Base + Arbitrum + Optimism + Polygon を推進
- **AWS / Cloudflare / Vercel** edge integration はデフォルトで USDC on Base、[[agent-economy/x402-cloudflare-aws-edge-integration|x402 エッジ統合]] と対照
- **新規 agent プロジェクトの実際の選択分布**(2025-2026 業界 informal survey 口径):Base 60-70% / Arbitrum 15-20% / Optimism 5-10% / Polygon 5-10% / その他 5%

## CCTP V2 + chain abstraction · agent マルチチェーンアーキテクチャ

agent は単一 L2 にバインドされず、**home chain + multi-chain spending** を行う:

- **Home chain pattern**:agent は home chain(通常 Base)で stablecoin / token を保有、spending が必要な際は [[systems/cctp-v2-overview|CCTP V2]] でクロスチェーン
- **CCTP V2 fast finality**:USDC burn-mint は 1-3 秒 finality、cross-chain transfer 1 回あたり fee $0.01-0.10
- **Chain abstraction([[systems/chain-abstraction-pattern-overview|chain abstraction パターン]] と対照)**:Skip Protocol / Connext / Across / Hyperlane Warp Route 等により agent が source chain で 1 つの intent に署名、cross-chain settle は solver が完了
- **典型的な agent フロー**:1) ユーザーが Coinbase Smart Wallet で Base 上に USDC を保有 → 2) agent がクロスチェーン spending をトリガー → 3) bundler が UserOp を Base に提出 → 4) CCTP V2 が Base 上の USDC を burn → 5) 目標 L2 で USDC を mint → 6) 目標 L2 で spending 完了、全フロー < 30 秒
- **マルチチェーン agent 実戦**:ほとんどの agent payment は依然として Base 内で完結、クロスチェーンシナリオは DeFi yield optimizer / cross-DEX arbitrage に集中、agent payment 総量の < 20%

## Per-tx 経済実測対比表(2026-Q1)

| Workload | Base | Arbitrum | Optimism |
|---|---|---|---|
| EOA simple ETH transfer | ~$0.001 | ~$0.002 | ~$0.001 |
| EOA USDC transfer | ~$0.002 | ~$0.003 | ~$0.002 |
| SCA(ERC-4337)create + 初回 sponsored tx | ~$0.005-0.015 | ~$0.01-0.03 | ~$0.005-0.015 |
| Bundled UserOp(per UserOp 分散) | ~$0.0003-0.001 | ~$0.0005-0.002 | ~$0.0003-0.001 |
| Uniswap V3 swap | ~$0.02-0.10 | ~$0.05-0.15 | ~$0.02-0.10 |
| CCTP V2 USDC burn-mint(クロスチェーン) | ~$0.01-0.10 each side | ~$0.02-0.15 each side | ~$0.01-0.10 each side |
| GMX perps open / close | n/a(主に Arbitrum) | ~$0.10-0.50 | n/a |
| World mini-app action | n/a | n/a | ~$0.001-0.005(on World chain) |
| Blob 混雑期の fee 急上昇 | ~10-50× | ~5-20× | ~10-50× |

数字は L2Beat + DefiLlama + Pimlico bundler benchmarks + Coinbase CDP 公開例より、実際の変動は激しく、real-time gas tracker を参照のこと。

## Agent-relevant セキュリティ / リスクコントロール考慮

- **session key 設計**:agent session key は chain id 制限 + コントラクトホワイトリスト + 金額制限 + 時間制限が必須、さもなければ盗難時の損失は無制限
- **paymaster validation**:CDP / Pimlico 等の paymaster は sponsor 前に validatePaymasterUserOp を実行、悪意のあるコントラクトコールの一部は paymaster が拒否可能
- **bundle 失敗のロールバック**:bundled UserOp 内の単一 UserOp の revert は bundle 全体をロールバックしないが、sponsor は依然として gas を負担
- **chain reorg リスク**:Base / OP Mainnet は時折 1-2 block の reorg(まれ)、agent payment は機密 transaction について ~12 blocks の確認待ちが望ましい
- **L1 fault proof window**:Base / Arbitrum / Optimism いずれも 7 日間の fault proof window があり、L1 への引き出しには待機が必要、ただし L2 内 settlement には影響なし
- **sequencer 規制 / 制裁**:Coinbase は US-regulated エンティティとして OFAC 制裁に基づき特定アドレスを遮断する可能性、agent は制裁リストに載るウォレットが Base で settle できないことを考慮する必要

## Agent ワークロード L2 判断木

- 汎用 agent payment / micropayment: **Base**(デフォルト、CDP + Smart Wallet + USDC Native)
- DeFi-heavy yield / perps / collateral: **Arbitrum**(深い流動性 + GMX + Pendle)
- 企業 / 機関の自社 agent chain: **Arbitrum Orbit** または **OP Stack 自社構築**([[systems/polygon-agglayer-architecture-rollout|Polygon AggLayer]] と対照)
- World / Worldcoin mini-app agent: **Optimism / World**
- クロスチェーン agent(マルチチェーン settlement):[[systems/cctp-v2-overview|CCTP V2]] + Base を home chain として使用
- KYC 規制対象 agent:Coinbase CDP on Base(Coinbase リスクコントロール + KYC)

詳細な chain-abstraction 経路は [[systems/chain-abstraction-pattern-overview|chain abstraction パターン総覧]] と [[systems/chain-abstraction-pattern-three-solutions|chain abstraction 3 つのソリューション]] を参照。

## Related

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/INDEX|Systems Index]]
- [[systems/erc-4337-overview|ERC-4337 総覧]]
- [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 ウォレット採用]]
- [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 拡張]]
- [[systems/cctp-v2-overview|CCTP V2 総覧]]
- [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン五極対比マトリクス]]
- [[systems/chain-abstraction-pattern-overview|chain abstraction パターン総覧]]
- [[systems/polygon-agglayer-architecture-rollout|Polygon AggLayer アーキテクチャ]]
- [[agent-economy/INDEX|Agent Economy Index]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP 開発者プラットフォーム]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy + AWS AgentCore デフォルトウォレット]]
- [[agent-economy/x402-cloudflare-aws-edge-integration|x402 エッジ統合]]
- [[agent-economy/embedded-wallet-network-effects-moat|embedded wallet ネットワーク効果の堀]]
<!-- /wiki-links:managed -->

## Sources

- L2Beat — Base, Arbitrum One, Optimism Mainnet metrics
- DefiLlama — chain TVL, stablecoin breakdown
- Coinbase Base documentation & blog
- Arbitrum documentation — Nitro, Orbit, Stylus, BoLD
- Optimism documentation — OP Stack, Superchain, Bedrock
- Coinbase CDP documentation — Paymaster, Smart Wallet, Agent Kit
- Privy documentation — embedded wallet, AgentCore integration
- Alchemy Account Kit documentation
- Circle CCTP V2 announcement & docs
- Stripe / Visa public blog posts on L2 stablecoin payment integration
