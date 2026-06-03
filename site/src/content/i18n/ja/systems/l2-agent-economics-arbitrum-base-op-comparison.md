---
source: systems/l2-agent-economics-arbitrum-base-op-comparison
source_hash: a0b5cbdbd9a4e2db
lang: ja
status: machine
fidelity: ok
title: ""
translated_at: 2026-06-03T01:06:46.370Z
---
﻿# L2 エージェント経済学 · Arbitrum vs Base vs Optimism の AI エージェントワークロード比較

## 要約

2026 年の AI エージェントワークロードにおける L2 選定は **Base がデフォルト** に収束し、Arbitrum と Optimism はそれぞれ一部のニッチを獲得している。Arbitrum は DeFi-heavy エージェントと機関向け、Optimism は OP Stack エコシステムと公共財の文脈で強い。3 つの L2 の取引あたりコストは [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 拡張]] 後、いずれも $0.001-0.01 の範囲に入るが、Base は **Coinbase CDP + USDC Native + Coinbase Smart Wallet + ERC-4337  paymaster のフルスタックデフォルト** を持つため、エージェント開発者の「L2 選定」はほぼ自動的に Base へ向かう。Arbitrum の優位性は、より深い DeFi 流動性（GMX / Camelot / Pendle）、Stylus（WASM）、Orbit RaaS による機関エージェントの自社チェーン構築経路にある。Optimism の優位性は Superchain のネットワーク効果（World、Zora、Worldcoin）と retroactive funding にあるが、エージェント決済シナリオのシェアは最も小さい。sequencer MEV は 3 チェーンとも依然として中央集権 sequencer が抽出しており、高頻度エージェント決済にとって潜在的リスクとなる。

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] に属する。[[systems/erc-4337-overview|ERC-4337 総覧]] と [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 ウォレット採用]] をあわせて読むことで、エージェント取引のウォレット層を理解できる。[[agent-economy/INDEX|agent economy index]] と対照すると、エージェント決済プロトコルスタック全体の進化が見える。取引あたり経済性の背景については [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 拡張]] を参照。

## 3 L2 基礎パラメータ対照（2026-Q1）

| 観点 | Base | Arbitrum One | Optimism Mainnet |
|---|---|---|---|
| タイプ | OP Stack（Bedrock + Fault Proof） | Arbitrum Nitro（独自 rollup） | OP Stack（Bedrock + Fault Proof） |
| TVL（DefiLlama、2026-Q1） | ~$8-10B | ~$15-20B | ~$1-2B |
| 日次取引数 | ~3-5M | ~2-3M | ~300-500k |
| 平均取引あたりユーザー手数料（post-Pectra） | $0.001-0.005 | $0.002-0.01 | $0.001-0.005 |
| DA 層 | Ethereum blob | Ethereum blob（Nova は一部 AnyTrust DA） | Ethereum blob |
| Sequencer 中央集権度 | Coinbase 単一 sequencer | Offchain Labs 単一 sequencer（BoLD fault proof + 分散化計画あり） | Optimism Foundation 単一 sequencer（分散化計画あり） |
| Native USDC | USDC Native（Circle、2023-09 ローンチ） | USDC Native（2023-06 ローンチ） | USDC Native（2023-09 ローンチ） |
| Bridged USDC | USDbC（deprecated、ユーザー移行ほぼ完了） | USDC.e（legacy、依然として存在） | USDC.e（legacy、依然として存在） |
| Smart wallet デフォルト | Coinbase Smart Wallet（ERC-4337） | 複数のサードパーティ（Safe / Biconomy 等） | 複数のサードパーティ |
| Paymaster 商用製品 | Coinbase CDP Paymaster | Alchemy Account Kit / Biconomy / Pimlico | Alchemy Account Kit / Biconomy / Pimlico |
| 既知の大型エージェント / 決済統合 | x402 / Coinbase Agent Kit / Privy デフォルト | GMX agent / DeFi agent / 一部機関 | World mini-apps / Worldcoin |

## 取引あたりコスト · エージェントワークロード視点

AI エージェントの典型的なワークロード:

- **マイクロペイメント**（API call 1 回あたり $0.001-0.10 課金）: 取引あたりコストは $0.005 未満である必要がある。Base / Optimism はこれを満たすが、Arbitrum は境界線上にある。
- **定期決済**（日次 / 毎時バッチで複数小額決済）: batch コントラクト + bundled UserOp（ERC-4337）で、call あたりを $0.0005 オーダーに分散する。3 チェーンとも実現可能。
- **DeFi 実行エージェント**（swap / lend / stake）: 取引あたり $0.01-0.10で、3 チェーンとも許容範囲。Arbitrum は DeFi の深さで優位。
- **ブリッジ実行エージェント**（クロスチェーンで資産を融通）: bridge あたり $0.20-2.00（[[systems/cctp-v2-overview|CCTP V2]] burn-mint + L1  finality + 目標チェーン mint を含む）。高価だが低頻度。

post-Pectra データ: **EIP-7691  が Ethereum blob target を 3 から 6 個 / block に引き上げ、max を 9にした**。これにより L2  calldata cost が 2023 年の 1/3-1/5 へ直接削減された。詳細は [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 拡張]] を参照。

## エージェントに対する sequencer MEV の含意

3 チェーンとも依然として **単一の中央集権 sequencer** であり、これがエージェントに与える直接的影響は次のとおり。

- **front-running リスク**: 高価値 swap / arbitrage agent は mempool 時間枠内で sequencer による reorder の対象となりうる。Base / Arbitrum / Optimism のいずれも強制 FCFS や fair ordering を持たない。
- **time-boost オークション**（Arbitrum、2024-04 ローンチ）: ユーザーは料金を支払って割り込み可能で、実質的に MEV-via-priority を制度化している。searcher は優先 inclusion を入札でき、中程度の感度を持つエージェントは time-boost コストを予算に算入する必要がある。
- **Base private mempool**: Coinbase は 2024-2025 に Smart Wallet 顧客向けの任意の private bundle 経路を提供し、sandwich attack を一部軽減する。
- **Optimism Superchain shared sequencer roadmap**: 理論上、OP Stack chain が sequencer を共有することで cross-chain atomic execution を導入できるが、2026 年時点では本番未デプロイ。
- **decentralized sequencer**: 3 チェーンとも roadmap には含まれるが、2026 年時点でいずれもメインネットで実質的な進捗はない。中央集権 sequencer は依然としてエージェントが受け入れる必要のある信頼前提である。
- **エージェント実務アドバイス**: high-value swap は [[systems/chain-abstraction-pattern-overview|chain abstraction パターン]] を使い、Cowswap / 1inch / Skip 等の batch オークション経路でトランザクションを通すことで、sequencer の単一障害点を回避する。

## Gas sponsorship / Paymaster の可用性

ERC-4337  paymaster により、dApp / エージェントプラットフォームは gas を代行支払いできる。これにより「ETH が必要」という最大の UX 障害を取り除ける。3 チェーンの比較は次のとおり。

### Base + Coinbase CDP Paymaster

- **製品**: [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]] Paymaster
- **価格**: gas sponsorship + Coinbase fee markup。daily / per-user cap を設定可能。
- **統合の深さ**: Coinbase Smart Wallet とネイティブにバインドされており、SCA 作成 + 最初の sponsored tx を 1 回で完結できる。
- **エージェント適性**: Coinbase Agent Kit + AgentKit SDK がデフォルトで CDP を使用し、ほぼ摩擦がない。
- **制約**: Coinbase のリスクコントロール + KYC データは Coinbase に帰属する。一部の管轄ではエージェントが制限される。

### Arbitrum + Alchemy / Pimlico / Biconomy

- **製品**: Alchemy Account Kit、Pimlico、Biconomy、Stackup。いずれも Arbitrum をサポートする。
- **メカニズム**: サードパーティ paymaster サービス。sponsored gas 量に応じて課金し、通常 5-15% の markup を取る。
- **統合**: dApp 側で自己統合が必要で、「デフォルトのフルスタック」体験はない。
- **機関適性**: Alchemy Account Kit は institutional dev 向けに SOC2 + とエンタープライズ SLA を提供する。

### Optimism + Arbitrum と同様のサードパーティ

- Paymaster の選択肢は Arbitrum とほぼ同じだが、エージェントエコシステムの規模は小さく、具体的な SDK 統合事例は少ない。

### Paymaster 戦略対照

| 観点 | Base / CDP | Arbitrum / Alchemy 系 | Optimism / 同上 |
|---|---|---|---|
| デフォルトで紐づくウォレット | Coinbase Smart Wallet | Safe / Biconomy SCA | Safe / Biconomy SCA |
| Onboarding 摩擦 | 極低（Coinbase アカウント = SCA） | 中（ウォレット + paymaster 選定が必要） | 中 |
| Sponsor markup | Coinbase 内蔵 | 5-15% サードパーティ markup | 5-15% |
| Agent SDK デフォルト | Coinbase Agent Kit + Privy AgentCore デフォルト | 各 SDK | 各 SDK |
| 規制 / KYC | Coinbase 集約 | 各 paymaster のカスタム | 各 paymaster のカスタム |

## Native stablecoin liquidity · USDC Native vs Bridged

USDC Native（Circle 直接発行）と USDC.e / USDbC（Wormhole / OFT 等を経由するレガシーブリッジ）の比較:

- **Base**: USDC Native が 2023-09 にローンチし、USDbC からの移行はほぼ完了した。Base USDC の流通量は ~$3-5B（2026-Q1）。
- **Arbitrum**: USDC Native が 2023-06 にローンチした。ただし USDC.e legacy は深い DeFi 統合のため、依然として ~$500M-1B が未移行。USDC 総計は ~$3-4B。
- **Optimism**: USDC Native が 2023-09 にローンチした。USDC.e legacy は ~$200-400M、USDC 総計は ~$500-800M。
- **CCTP V2 統合**: Circle [[systems/cctp-v2-overview|CCTP V2]] burn-mint プロトコルは 3 チェーンとも展開済み。cross-L2  USDC 移転は 1-3 秒 finality + ~$0.01-0.10  fee。
- **エージェントへの影響**: エージェントの stablecoin 保有 / 決済では USDC Native の使用が望ましい。レガシーブリッジの二次デペッグリスクを避けられるためである。Base の USDC 流動性 + デフォルト SCA + CDP が、Base をエージェントのデフォルト stablecoin レールにしている。

PYUSD / USDT0 / RLUSD は 3 チェーンに展開済みだが、USDC よりはるかに小さい。2026 年の stablecoin payment は、実質的に USDC payment と同義である。

## 開発者デフォルト · Coinbase CDP / Privy / AWS AgentCore

エージェント開発者の L2 選定は、wallet provider + cloud SDK によって事前にロックされている。

- **[[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]]**: Base + USDC Native + Smart Wallet + Paymaster がデフォルト。統合は 1 行のコードで済み、エージェントはほぼ自動的に Base を選ぶ。
- **[[agent-economy/privy-aws-agentcore-default-wallet|Privy + AWS AgentCore]]**: Privy は AWS Bedrock AgentCore 統合において、Base + Ethereum + Solana ウォレットをデフォルトで作成する。エージェント決済のデフォルトは USDC on Base。
- **[[agent-economy/x402-cloudflare-aws-edge-integration|x402 エッジ統合]]**: Cloudflare / AWS / Vercel 等の CDN / edge プラットフォームにおける x402 実装は、デフォルトで USDC on Base を使う。エージェントは HTTP 402 経由で自動的に Base settlement を選択する。
- **Alchemy Account Kit**: マルチチェーンサポートだが、GTM は Arbitrum + Base + Optimism + Polygon を優先する。エージェントにはマルチチェーンを推奨する。
- **結果**: 2025-2026 年の新規エージェントプロジェクトの ~70%+ が Base を settlement chain として選定し、Arbitrum / Optimism / Polygon の合計は ~30%にとどまる。詳細は [[agent-economy/embedded-wallet-network-effects-moat|embedded wallet ネットワーク効果の堀]] を参照。

## Arbitrum 差別化: DeFi 深度 + Orbit + Stylus

- **DeFi 流動性**: GMX（perps）+ Camelot + Pendle + Radiant + Vertex。DeFi-heavy agent（yield optimizer / perps trader / collateral manager）は Arbitrum で最も深い流動性を得る。
- **Orbit RaaS**: Arbitrum Orbit は、企業 / 機関 / 大型 DeFi プロトコルに自社 L3 構築オプションを提供する。Xai（ゲーム）、Sanko、Cheese Chain 等が稼働中。
- **Stylus**: WASM-based コントラクト実行。Rust / C / C++ コントラクトが EVM と相互運用可能。2024-04 メインネット。高性能 agent compute には理論的優位があるが、実際の採用は遅い。
- **機関顧客**: 一部 PayPal PYUSD on Arbitrum と一部機関 Treasury 展開。
- **結論**: Arbitrum は依然として **「DeFi 深度需要 + L3  RaaS + Stylus 高性能」** のエージェント第一選択肢である。

## Optimism 差別化: Superchain + RetroPGF

- **Superchain**: Base、World、Zora、Worldcoin、Mode、Lyra、Polynomial 等が OP Stack codebase + 治理 + 将来の sequencer を共有する。
- **RetroPGF（Retroactive Public Goods Funding）**: OP トークンを公共財貢献者に定期的に配布する。5 ラウンドで ~$300M+ を配布済み。
- **エージェントシナリオ**: World mini-apps（Worldcoin 内）は最大の agent / mini-app 実質展開シナリオだが、従来の ERC-4337  agent 経路とは分流する。
- **制約**: Optimism Mainnet 本体の TVL と日次 tx は Base / Arbitrum よりはるかに低く、直接のエージェント展開シェアは最小である。

## Bundled UserOp + Batched settlement · エージェントの実コスト

エージェントの実際の action あたりコストは「1 UserOp 1 settlement」ではなく、**bundler が N 個の UserOp を EntryPoint に送信するために統合する**ことで決まる。

- **Bundler 経済**: Pimlico / Stackup / Alchemy / Biconomy 等の bundler が、数十〜数百の UserOp を 1 件の L2  transaction にパッケージする。
- **UserOp あたり分散コスト**: Base 上の bundled UserOp は ~$0.0003-0.001（Pimlico 2026 公開ベンチマーク）。Arbitrum は ~$0.0005-0.002、Optimism は Base と同等。
- **bundler 関係**: エージェントプラットフォームは通常 1-2 個の bundler と長期提携する。bundler は L2  fee market に応じてリアルタイムで batch size を調整する。
- **session key + ERC-4337 v0.7+**: エージェントは session スコープのキー（金額制限 + 時間制限 + コントラクトホワイトリスト）を申請できる。ユーザーが毎回署名する必要がなく、これがエージェント決済商用化の重要な UX ブレイクスルーである。
- **ERC-7715 + 7710**（permission proposal）+ ERC-4337 v0.8（roadmap）が、agent permission の複雑度をさらに下げる。[[agent-economy/erc-7715-overview|ERC-7715 総覧]] と対照。
- **bundler 中央集権リスク**: 上位 5 社の bundler が ~80%+ の UserOp を処理する。bundler の撤退 / 規制 / 障害は、エージェント決済の可用性に影響する。

## Privy / Coinbase CDP / AWS AgentCore デフォルトのネットワーク効果

エージェントプロジェクトが wallet provider を選定すると、L2 選定は基本的にロックされる。詳細は [[agent-economy/embedded-wallet-network-effects-moat|embedded wallet ネットワーク効果の堀]] を参照。

- **Privy** は AWS Bedrock AgentCore でデフォルトで ETH + Base + Solana ウォレットを作成する。エージェントが一度 AWS AgentCore 経路を通れば、Base がほぼデフォルト settlement chain となる。
- **Coinbase CDP** はすべての SDK ドキュメント例で Base をデフォルトチェーンとして使う。他の L2 へ移行するには paymaster / RPC / USDC アドレスの再構成が必要になる。
- **WalletConnect / Reown** はマルチチェーンサポートだが、GTM は Base + Arbitrum + Optimism + Polygon を推進する。
- **AWS / Cloudflare / Vercel** edge integration はデフォルトで USDC on Base。[[agent-economy/x402-cloudflare-aws-edge-integration|x402 エッジ統合]] と対照。
- **新規エージェントプロジェクトの実際の選択分布**（2025-2026 業界 informal survey 口径）: Base 60-70% / Arbitrum 15-20% / Optimism 5-10% / Polygon 5-10% / その他 5%

## CCTP V2 + chain abstraction · エージェントのマルチチェーンアーキテクチャ

エージェントは単一 L2 にバインドされず、**home chain + multi-chain spending** を行う。

- **Home chain pattern**: エージェントは home chain（通常 Base）で stablecoin / token を保有し、spending が必要な際は [[systems/cctp-v2-overview|CCTP V2]] でクロスチェーンする。
- **CCTP V2  fast finality**: USDC burn-mint は 1-3 秒 finality。cross-chain transfer 1 回あたり fee は $0.01-0.10
。
- **Chain abstraction（[[systems/chain-abstraction-pattern-overview|chain abstraction パターン]] と対照）**: Skip Protocol / Connext / Across / Hyperlane Warp Route 等により、エージェントは source chain で 1 つの intent に署名し、cross-chain settle は solver が完了する。
- **典型的なエージェントフロー**: 1) ユーザーが Coinbase Smart Wallet で Base 上に USDC を保有 → 2) エージェントがクロスチェーン spending をトリガー → 3) bundler が UserOp を Base に提出 → 4) CCTP V2 が Base 上の USDC を burn → 5) 目標 L2 で USDC を mint → 6) 目標 L2 で spending 完了。全フロー < 30 秒。
- **マルチチェーンエージェントの実戦**: ほとんどのエージェント決済は依然として Base 内で完結する。クロスチェーンシナリオは DeFi yield optimizer / cross-DEX arbitrage に集中し、エージェント決済総量の < 20%にとどまる。

## 取引あたり経済性の実測対比表（2026-Q1）

| ワークロード | Base | Arbitrum | Optimism |
|---|---|---|---|
| EOA simple ETH transfer | ~$0.001 | ~$0.002 | ~$0.001 |
| EOA USDC transfer | ~$0.002 | ~$0.003 | ~$0.002 |
| SCA（ERC-4337）create + 初回 sponsored tx | ~$0.005-0.015 | ~$0.01-0.03 | ~$0.005-0.015 |
| Bundled UserOp（UserOp あたり分散） | ~$0.0003-0.001 | ~$0.0005-0.002 | ~$0.0003-0.001 |
| Uniswap V3  swap | ~$0.02-0.10 | ~$0.05-0.15 | ~$0.02-0.10 |
| CCTP V2  USDC burn-mint（クロスチェーン） | ~$0.01-0.10  each side | ~$0.02-0.15  each side | ~$0.01-0.10  each side |
| GMX perps open / close | n/a（主に Arbitrum） | ~$0.10-0.50 | n/a |
| World mini-app action | n/a | n/a | ~$0.001-0.005（on World chain） |
| Blob 混雑期の fee 急上昇 | ~10-50× | ~5-20× | ~10-50× |

数字は L2Beat、DefiLlama、Pimlico bundler benchmarks、Coinbase CDP 公開例に基づく。実際の変動は激しいため、real-time gas tracker を参照すること。

## エージェント関連のセキュリティ / リスクコントロール考慮

- **session key 設計**: agent session key には chain id 制限 + コントラクトホワイトリスト + 金額制限 + 時間制限が必須。そうしなければ、盗難時の損失は無制限になる。
- **paymaster validation**: CDP / Pimlico 等の paymaster は sponsor 前に validatePaymasterUserOp を実行する。悪意のあるコントラクトコールの一部は paymaster が拒否可能。
- **bundle 失敗のロールバック**: bundled UserOp 内の単一 UserOp の revert は bundle 全体をロールバックしないが、sponsor は依然として gas を負担する。
- **chain reorg リスク**: Base / OP Mainnet では、まれに 1-2  block の reorg が起こる。エージェント決済では、機密 transaction について ~12  blocks の確認待ちが望ましい。
- **L1  fault proof window**: Base / Arbitrum / Optimism はいずれも 7 日間の fault proof window があり、L1 への引き出しには待機が必要。ただし L2 内 settlement には影響しない。
- **sequencer 規制 / 制裁**: Coinbase は US-regulated エンティティとして、OFAC 制裁に基づき特定アドレスを遮断する可能性がある。エージェントは、制裁リストに載るウォレットが Base で settle できないことを考慮する必要がある。

## エージェントワークロード L2 判断木

- 汎用 agent payment / micropayment: **Base**（デフォルト、CDP + Smart Wallet + USDC Native）
- DeFi-heavy yield / perps / collateral: **Arbitrum**（深い流動性 + GMX + Pendle）
- 企業 / 機関の自社 agent chain: **Arbitrum Orbit** または **OP Stack 自社構築**（[[systems/polygon-agglayer-architecture-rollout|Polygon AggLayer]] と対照）
- World / Worldcoin mini-app agent: **Optimism / World**
- クロスチェーン agent（マルチチェーン settlement）: [[systems/cctp-v2-overview|CCTP V2]] + Base を home chain として使用
- KYC 規制対象 agent: Coinbase CDP on Base（Coinbase リスクコントロール + KYC）

詳細な chain-abstraction 経路は [[systems/chain-abstraction-pattern-overview|chain abstraction パターン総覧]] と [[systems/chain-abstraction-pattern-three-solutions|chain abstraction 3 つのソリューション]] を参照。

## 関連項目

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

## 出典

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
