---
source: systems/polygon-agglayer-architecture-rollout
source_hash: 4f9c8abdcc1f3863
lang: ja
status: machine
fidelity: ok
title: "Polygon AggLayer アーキテクチャと 2024-2026 ロールアウト · CDK + 統一ブリッジ + ZK 集約"
translated_at: 2026-06-03T01:06:46.366Z
---
﻿
# Polygon AggLayer アーキテクチャと 2024-2026 ロールアウト · CDK + 統一ブリッジ + ZK 集約

## 要約

Polygon 2024-2026 年の戦略的転換は **「Polygon PoS サイドチェーン」** から **「AggLayer + CDK マルチチェーンプロトコル層」** への変革である:Polygon CDK により任意のチームが独自の ZK rollup を構築可能、AggLayer は CDK チェーン間に統一ブリッジ + pessimistic proof + ZK 証明集約を提供し、[[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン五極]] における「intra-stack interop」の極を取り込むことを目指す。MATIC → POL 移行(2024-09 メインネット)はトークンモデルを「Polygon PoS gas + staking」から「AggLayer 全スタック gas + restaking」に変更し、Polygon PoS 自体は戦略中心から多数の AggLayer チェーンの 1 つに格下げされた。初期の CDK 提携チェーンには Astar zkEVM、Manta Pacific(後に撤回)、Immutable zkEVM、X1(OKX)、Palm、IDEX 等が含まれるが、2025-2026 年に流出が顕著、AggLayer v0.2 - v0.3 の実際の接続数は 2024 年初の予測を大きく下回る。

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] 配下に位置する。[[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン五極対比マトリクス]] とあわせて読み、 AggLayer の LayerZero / Hyperlane / CCIP / Cosmos IBC における位置づけを確認し、[[systems/chain-abstraction-pattern-overview|chain abstraction パターン総覧]] と [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 拡張]] と対照して Polygon ZK rollup の Ethereum L2 経済学における位置を理解する。

## Polygon 歴史段階 · PoS → zkEVM → AggLayer

- **フェーズ 1(2017-2020):Matic Network**:Plasma + PoS サイドチェーン、EVM 互換、低 gas を主軸、2020-05 メインネットローンチ
- **フェーズ 2(2021-2023):Polygon PoS 黄金期**:DEX(QuickSwap, Uniswap V3)+ NFT(OpenSea + Aavegotchi)+ ゲーム(Sandbox)が TVL を一時 $5B 超に押し上げる
- **フェーズ 3(2023-2024):マルチプロダクト拡張**:Polygon zkEVM(2023-03 メインネット)+ Polygon Miden(STARK-based VM)+ Polygon Avail(DA layer、後に独立)+ Polygon CDK(2023-08)
- **フェーズ 4(2024-2026):AggLayer 転換**:2024-02 AggLayer v0.1 立ち上げ、2024-09 MATIC → POL 移行、2024-Q4 AggLayer v0.2 が pessimistic proof を導入、2025-2026 v0.3+ を継続的にイテレーション、Polygon PoS の戦略的地位は低下

## AggLayer アーキテクチャ

AggLayer は 1 つのチェーンではなく、**複数の ZK rollup にまたがる 決済 + ブリッジプロトコル** である:

- **Unified Bridge**:すべての AggLayer 接続チェーンが 1 つの canonical bridge contract(Ethereum L1 に展開)を共有、ユーザーが chain A から chain B へ資産を移転する際は unified bridge を通り、独立した wrapped token を必要としない
- **Pessimistic Proof(v0.2, 2024-Q4)**:特定の AggLayer チェーンがその預金を超える資産を引き出すことを防止(bridge insolvency 防護)、当該チェーンの ZK proof システムにバグがあっても効果的
- **ZK Proof Aggregation**:複数の AggLayer チェーンの state transition proof を 1 つの L1 verification に集約、単一チェーンの L1 検証コスト を大幅に削減
- **State Sharing(ロードマップ)**:クロスチェーン非同期メッセージ + 最終状態共有(Cosmos IBC + Ethereum L2 クロス rollup 通信に類似)、ロードマップ中
- **POL を gas + staking として**:POL は AggLayer 内で複数のチェーンに restake 可能、[[systems/eigenlayer-overview|EigenLayer]] に類似だが範囲は Polygon stack に限定

従来の Ethereum L2 との差異:各 Optimism rollup や Arbitrum chain は **独立した canonical bridge** を持ち、クロス rollup 資産移転はサードパーティブリッジ([[systems/layerzero-v2-omnichain-messaging|LayerZero V2]] / [[systems/hyperlane-overview|Hyperlane]] / [[systems/chainlink-ccip-institutional-messaging|CCIP]])に依存する。AggLayer はこの「クロス rollup の信頼前提 + bridge fragmentation」を stack 内部で解決しようとする。

## Polygon CDK(Chain Development Kit)

CDK は **OP Stack / Arbitrum Orbit / zkSync ZK Stack の Polygon 版** である:

- **基本コンポーネント**:Polygon zkEVM prover(Plonk + KZG ベース)+ sequencer + RPC + bridge contract template
- **オプショナル DA**:Ethereum blob(デフォルト、高価)/ Polygon Avail / EigenDA / Celestia
- **CDK Erigon vs CDK OP Stack**:2024 以降 Polygon Labs は 2 つの CDK 路線を同時にメンテナンス —— Erigon-based(オリジナル zkEVM 路線)+ OP Stack-based(すでに OP Stack を選定したチームに開放)、Polygon が「自社 prover への投資の保護」と「OP の大エコシステムへの参加」の間で揺れていることを反映
- **AggLayer 接続はオプション**:CDK チェーンは AggLayer に接続しないことを選べ、逆もまた然り(ただし AggLayer 接続は Polygon Labs が推進するコア経路)

## 提携チェーン · リストと流出

2024 年初に Polygon が発表した CDK / AggLayer 提携チェーン:

- **Astar zkEVM**(日本エコシステム、Astar Network 主導、2024-03 ローンチ) — 2024-Q4 にユーザー採用不足で実質的に 縮小
- **Manta Pacific**(2024 年初に CDK を評価、後に OP Stack + Celestia を採用、Polygon と実質的な深い統合に至らず)
- **Immutable zkEVM**(ゲーム L2、2023-11 ローンチ) — 2025 年も運営継続だがトラフィックは予想を下回る
- **X1 / OKX Chain**(OKX 取引所 L2、2024-Q1 testnet) — 2025 年に X Layer に改名して運営継続
- **Palm Network**(NFT-focused、ConsenSys 起源) — CDK に移行済み
- **IDEX**(DEX 自社 L2)
- **Gnosis Pay rail(一部コンポーネント)**:探索的接続
- **Wirex** / **OKX** 等のウォレット / 取引所 L2 プロジェクト

**流出原因**:OP Stack のネットワーク効果(Base / OP Mainnet / Worldcoin / Zora)+ Arbitrum Orbit エコシステム(Xai / Sanko 等のゲームチェーン)+ Manta 等の Celestia DA 陣営により、CDK は「RaaS / app-chain」市場シェアが 2025-2026 年に圧縮され続けている。

## MATIC → POL 移行とビジネスモデル

2024-09 POL トークンが正式にメインネットローンチ、1:1 で MATIC を代替:

- **POL の役割拡張**:「Polygon PoS gas + staking」から「AggLayer マルチチェーン gas + restaking + governance」へ
- **Polygon PoS の運命**:依然として運営継続だが、戦略的地位は「AggLayer 内の通常のチェーン 1 つ」に降格、2024-2026 年に TVL がピークの $5B+ から ~$700M-1B のレンジに低下(DefiLlama 口径)
- **Polygon zkEVM Mainnet Beta**:2023 年ローンチ以降 TVL は $100M 以下で推移、2025 年に実質的にメンテナンスモードに入る、Polygon Labs の戦略重心は CDK + AggLayer に転換
- **POL 単一トークン経済モデル**:MATIC の「fixed supply」を **年間 1% emission** に変更(2% を validators / 1% を community treasury 等に分配、具体的比率はイテレーション)、長期インフレモデルは Cosmos ATOM、ETH 等と近接

ビジネスモデルは「Polygon PoS gas 販売」から「CDK stack + AggLayer プロトコル層 fee + POL value capture from staking 販売」に変化。

## AggLayer vs クロスチェーンプロトコル対照

| 観点 | AggLayer | [[systems/layerzero-v2-omnichain-messaging\|LayerZero V2]] | [[systems/hyperlane-overview\|Hyperlane]] | [[systems/chainlink-ccip-institutional-messaging\|CCIP]] |
|---|---|---|---|---|
| 範囲 | Polygon stack 内 | 複数エコシステム(EVM + Solana + Aptos 等) | 複数エコシステム | 複数エコシステム |
| 信頼モデル | Unified bridge + pessimistic proof | DVN(Decentralized Verifier Networks) | ISM(Interchain Security Modules) | Chainlink DON |
| 資産モデル | Unified bridge(canonical) | OFT(マルチチェーンでネイティブ発行) | warp route | 標準化されたクロスチェーン token |
| ZK 集約 | あり | なし | なし | なし |
| 対象 | Polygon stack を選んだ rollup | 任意の L2 / L1 | 任意の L2 / L1、モジュラー | 機関 + 規制対象金融 |

AggLayer の差別化は **「stack 内 trust-minimized + ZK 集約」** にあるが、その代償は Polygon CDK chain にしかサービスできないこと。詳細な対比は [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン五極対比マトリクス]] を参照。

## Polygon の RWA / 機関シナリオでの位置

- **Polygon PoS RWA**:2024-2026 年に Polygon PoS に展開された RWA には Hamilton Lane / Securitize / Backed Finance / Ondo 等が含まれるが、シェアは Ethereum L1([[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] を起点とする)+ Stellar + Avalanche に取られ続けている
- **Polygon ID**:Iden3 ベースの ZK identity、2024-2026 年に規制対象 DeFi と KYC シナリオで限定的に展開
- **Polygon Enterprise / Supernets コンセプト**:2022-2023 年に提示された企業チェーン方向は 2024 年以降基本的に推進停止、Avalanche subnet / Cosmos appchain の企業販売戦略との対照で、Polygon は企業方向で明確に後れを取る
- **vs 機関 DLT**:[[systems/canton-overview|Canton]] と [[systems/hyperledger-besu-overview|Hyperledger Besu]] と対照して、Polygon は G-SIB トークン化の主戦場には進出せず

## AggLayer v0.x イテレーション詳細

AggLayer は 1 回のリリースではなく、**継続的にイテレーションされる stack**、2024-2026 主要バージョンのリズム:

- **v0.1(2024-02)**:Unified Bridge 基本インフラ + 第一陣 Polygon zkEVM + Astar zkEVM 接続、実質は「共有 L1 bridge contract」
- **v0.2(2024-Q4)**:Pessimistic Proof 導入 — 特定の AggLayer チェーンの ZK proof システムにバグがあっても、当該チェーンは Unified Bridge から deposit を超える資産を引き出せない、これは AggLayer の「stack 内 risk isolation」に対する核心的コミットメント
- **v0.3(2025)**:一部クロスチェーンメッセージプリミティブ + zkEVM prover 性能改善、実際の接続チェーン数は v0.1 発表時より低下
- **v1.0(ロードマップ)**:クロスチェーンアトミック実行 + ZK proof aggregation の本番デプロイ
- **State Sharing**:クロスチェーンでストレージスロットを共有する能力、ロードマップ中、Optimism Superchain の共有 sequencer + Arbitrum BoLD の路線と競争
- **POL restaking 接続**:2025-2026 年に POL を AggLayer 内「decentralized verifier」のステーキング資産にしようとする試み、[[systems/eigenlayer-overview|EigenLayer]] が ETH エコシステムで占める位置に類似だが、メインネット実接続は遅い

## Polygon zkEVM prover 路線 · Plonk + KZG + ハードフォーク リズム

- **Plonky2 / Plonky3**:Polygon Labs 自社開発の STARK + Plonk ハイブリッド prover、2023-2024 年にイテレーション、目標は prover 時間 < 1 分 / block
- **Pessimistic Proof は Plonk + KZG を使用**:Ethereum L1 KZG プリコンパイル(EIP-4844)に依存し、検証コスト を削減
- **ハードフォーク リズム**:Polygon zkEVM は 3-6 か月ごとに ハードフォーク(Dragonfruit / Etrog / Elderberry / Feijoa 等の命名スタイル)、Ethereum L1 fork のリズムとは非同期
- **vs zkSync / Scroll / Linea**:zkSync Era は Boojum(自社開発 STARK)、Scroll は自社開発 zkEVM + Halo2、Linea は ConsenSys lattice-based prover、Polygon は prover 性能と Type-1 互換度で絶対的優位を持たない

## その他の RaaS / マルチチェーンプロトコルとの競合

| 観点 | Polygon CDK / AggLayer | OP Stack / Superchain | Arbitrum Orbit | zkSync ZK Stack | Eclipse / Solana 系 |
|---|---|---|---|---|---|
| 主要 prover / コンセンサス | ZK(Plonk) + Pessimistic | Optimistic + Fault Proof | Optimistic + BoLD | ZK(Boojum) | SVM + Celestia |
| 既知の展開チェーン数 | 5-10 稼働中 | 50+ (Base / OP / World / Zora / Mode 等) | 20+ (Xai / Sanko / DeGen 等) | 5-10 | 1-3 |
| 旗艦 chain | (なし) | Base | Arbitrum One | zkSync Era | Eclipse Mainnet |
| Unified Bridge | あり(AggLayer Unified Bridge) | なし(各 OP chain 独立) | なし(各 Orbit chain 独立) | Hyperchain shared bridge(ロードマップ) | 単一チェーン中心 |
| 共有 sequencer | (なし) | 計画(2026+) | (なし) | (なし) | (なし) |
| RaaS トップサプライヤー | Polygon Labs / Caldera | Conduit / Caldera / Alchemy | Conduit / Caldera / Alchemy | Matter Labs | (エコシステム内自社展開) |

Polygon CDK の AggLayer は **「stack 内 unified bridge」をコア差別化に位置づける唯一の方式**、ただし OP Stack のネットワーク効果が強すぎることが最大の対抗。

## ユースケース · 誰が実際に Polygon CDK / AggLayer 上で稼働しているか

- **Astar zkEVM**(2024-03):日本エコシステム dApp 接続、2024-Q4 に実質的に 縮小
- **X Layer**(旧 X1, OKX):2024-Q1 testnet → メインネット、運営継続だがアクティビティは OKX 主チェーンより低い
- **Immutable zkEVM**:Immutable Games 自社 L2、2023-11 メインネット、ゲーム GMV は OP Stack 系ゲームチェーンより低い
- **Palm Network**:NFT と Web3 IP プラットフォーム、CDK 移行後トラフィックは安定だが小さい
- **Wirex Pay**:Wirex 暗号カード / ウォレットバックエンド
- **Aavegotchi(Gotchichain)**:ゲーム専用 chain
- **OKBC / Gnosis Pay 一部コンポーネント**:実際の接続度は限定的
- **総数**:2026-Q1 AggLayer 接続メインネットチェーンはおよそ 5-10 稼働中、OP Stack の 50+ 稼働中 を大きく下回る

## 関連項目

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/INDEX|Systems Index]]
- [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン五極対比マトリクス]]
- [[systems/chain-abstraction-pattern-overview|chain abstraction パターン総覧]]
- [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 拡張]]
- [[systems/eigenlayer-overview|EigenLayer 総覧]]
- [[systems/layerzero-v2-omnichain-messaging|LayerZero V2 オムニチェーンメッセージ]]
- [[systems/hyperlane-overview|Hyperlane 総覧]]
- [[systems/chainlink-ccip-institutional-messaging|CCIP 機関メッセージ]]
<!-- /wiki-links:managed -->

## 出典

- Polygon AggLayer official documentation
- Polygon CDK documentation & GitHub
- Polygon Labs blog — AggLayer v0.1 / v0.2 announcements, POL migration
- L2Beat — Polygon zkEVM, Astar zkEVM, Immutable zkEVM, X Layer tracking
- DefiLlama — Polygon PoS / zkEVM / Astar TVL history
- Messari "State of Polygon 2025"
- The Block — Polygon 2.0 coverage 2024-2026
