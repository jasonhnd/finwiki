---
source: fintech/m0-network-infrastructure-update-2026
source_hash: 8e32288c439548f5
lang: ja
status: machine
fidelity: ok
title: "M0  / M ネットワーク · 2026 インフラ更新 · M Bridge × Mexican Peso × USDM × 中立ミドルウェアの成熟期"
translated_at: 2026-06-02T13:21:55.072Z
---

# M0  / M ネットワーク · 2026 インフラ更新 · M Bridge × Mexican Peso × USDM × 中立ミドルウェアの成熟期

## 要約

[[fintech/m-network-m0-neutral-infrastructure|M0(M^ZERO)]] は 2026 上半期に「初期段階の中立インフラ」から「**パートナー発行体向けミドルウェア**」段階に入り、同時に 3 つの新成長軸に賭ける:(1)**M Bridge** = M0 が Base / Arbitrum / OP / Unichain / Solana 間に提供するネイティブ相互接続層で、任意のパートナー発行体ステーブルコインが自然にマルチチェーンで共存可能;(2)**MXNBパイロット** = Bitso + Mercado Bitcoin 等の中南米参加者が M0 上でメキシコペソ・ペッグ・ステーブルコインを発行、初の非米ドルパートナーSC;(3)**USDM** = M0 自社の利回り付きラッパー、[[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] + 短期国債 + Re7 vault を直接保有し、パートナー発行体の利息分配を標準化。M0 は単なる「スイス銀行モデル」ではなく、**ステーブルコイン・ミドルウェア**へ —— [[fintech/frax-frxusd-defi-stablecoin|Frax frxUSD]] の「半コンプラ化」と [[fintech/world-liberty-usd1-political-stablecoin|World Liberty USD1]] の「政治型ブランド」と三極並立を形成する。

## ウィキ上の位置づけ

この項目は[[fintech/INDEX|fintech index]]の配下に位置づけられる。創業時の仮説は[[fintech/m-network-m0-neutral-infrastructure|M0 中立インフラ基礎ページ]]と併読し、[[fintech/protocol-renewal-trigger-as-event-anchor|プロトコル・アップグレード・トリガー・イベントアンカー]]を使って2026 H1 のM Bridge / USDM展開ペースをモデル化する。

## 主要事実（2026-05 スナップショット）

- **トークン時価総額（M-anchored系列）** ~$1.05B（2026-04, 時点、$300Mだった2026-01から増加）。3 か月で3.5倍 ^[public-press]
- **USDM 流通** ~$420M(2026-05);BUIDL 直接保有 ~$180M + 短期国債 $190M + 現金 $50M ^[issuer-docs]
- **MXNBパイロット流通** ~$25M 相当(2026-05);Bitso がマッチング、Mercado Bitcoin が副発行体 ^[public-press]
- **パートナー発行体名簿** 公開 6 社(欧州銀行子会社フィンテック 1、中南米マッチング側 2、日本信託型SCパイロット 1、米国RWAプロトコル 2 を含む);未公開 4-6 社がオンボーディング中 ^[public-press]
- **M Bridge** 展開チェーン: Ethereum / Base / Arbitrum / Optimism / Unichain / Solana（後者はH2 稼働）^[issuer-docs]
- **$M ガバナンストークン** 流通約 4.2 億枚、累積ガバナンス提案 ~37(2026-05)^[on-chain]
- **監査とリスク管理** OpenZeppelin / Trail of Bits / Certora / Chainalysisによる継続監視 ^[issuer-docs]
- **管理手数料** 発行体側 ~10-20 bps、BUIDL/USDY と同水準 ^[issuer-docs]

## 2026 イベント・タイムライン

| 月 | イベント | 意義 |
|---|---|---|
| 2026-01 | USDM v1 mainnet | M0 自社 利回りラッパー 稼働、発行体収益分配 を標準化 |
| 2026-02 | M Bridge alpha（Base ↔ Arbitrum） | 単一M-anchored SCのクロスチェーンがLayerZero/CCIPに依存せず、自前のburn-mint正準ブリッジを持つ |
| 2026-03 | MXNB pilot（Bitsoマッチング） | 初の非米ドルパートナーSCであり、[[fintech/em-market-crypto-dollarization-pattern|EM 市場の暗号ドル化パターン]]とは別軌道を開く |
| 2026-04 | $M トークン・ガバナンス・アップグレード ER1 | issuer 検証投票閾値を 51% から 67% に引き上げ、VC ガバナンス捕獲懸念に対応 |
| 2026-04 | Re7 CapitalがUSDM後端vaultに参加 | 利回り付き構造をUSDM（カストディ型）+ sUSDM（DeFi再利用型）に分解 |
| 2026-05 | M Bridge Optimism / Unichain | [[fintech/stablecoin-chain-token-strategy-trilemma|ステーブルコイン-チェーン-トークンのトリレンマ]]の「チェーン非依存」極と整合 |
| 2026-Q3 計画 | Solana M Bridge + 第 7-9 パートナー発行体 公開 | 拡大フェーズ |
| 2026-Q4 計画 | $Mステーキング・エコノミクスの再評価 | [[fintech/sky-usds-decentralized-stablecoin|Sky USDS]]のDAO利回りルーティングと対比 |

## 仕組み / 3 層ミドルウェアのアップグレード

**旧モデル（2025）= 単層中立インフラ**: M0 は準備金接続、スマートコントラクト・テンプレート、DAO検証を提供し、パートナー発行体が各自ブランドを保持する。問題は、利回り経路、クロスチェーン統一性、非米ドルSKUがなかったことである。

**新モデル(2026)= 3 層 middleware**:

1. **L1 準備金層（Reserve）**: [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] / USTB / 米国国債 / 短期中銀預金に直接接続する。これはパートナー発行体が共有する金庫で、各社が個別にBlackRockとラインを交渉する必要がなくなった。
2. **L2 資産層（M-anchored token + USDM）**: パートナー発行体はM-anchored tokenを「発行体ブランドSCの基盤」として使用し、USDMはM0 自社の利回りラッパーとしてリテール / DeFi向けに使う。**重要な違い**: パートナー発行体が得るのは「コンプラ・テンプレート」ではなく、すでに利回り接続済みの完成品であり、利息分配エコノミクス（[[fintech/stablecoin-revenue-split-economics|ステーブルコイン利息分配エコノミクス]]参照）がUSDM層で標準化済みである。
3. **L3 クロスチェーン層（M Bridge）**: 同一発行体のSCがBase / Arbitrum / Optimism / Unichain / Solana間でデフォルトの正準burn-mint方式を使い、LayerZero / Wormholeなどの汎用ブリッジを経由しない。これにより[[fintech/protocol-renewal-trigger-as-event-anchor|プロトコル・アップグレード・トリガー・イベントアンカー]]の「アップグレード・イベント = 流動性再配分」レバーをM0 自身が回収する。

**MXNB pilot の特殊性**:Bitso(メキシコ最大の取引所)がマッチング、M0 がコンプラ・インフラを提供、メキシコペソ・ペッグ。これは M0 初の**非米ドル SC** 引受で、[[fintech/india-anti-dollar-dpi-alliance|India 反米ドル DPI 連盟]] と同じ思想 —— EM 国が米ドル SC に完全占領されないようにする。Mercado Bitcoin の副 issuer 役は H2 に BRL 版が登場する可能性を示唆。MXNB の流通は依然極小($25M 相当)だが、**シグナル価値はサイズを大きく超える** —— M0 が同じインフラで非米ドル SKU を引き受けられることを実証。

## $Mトークン・エコノミクスとガバナンス

- **流通供給** ~4.2 億枚(2026-05、hard cap 10 億)
- **保有構造** チーム / Foundation ~25%、投資家 ~30%、流通 / DAO Treasury ~45%
- **効用**: (a) 発行体資格検証投票、(b) リスクパラメータ（LTV / 準備金構成 / チェーン選択）ガバナンス、(c) USDM後端vault収益分配、(d) 将来のステーキングによるM Bridge正準転送のセキュリティ
- **ガバナンスリスク**: 投資家とチームの合計が初期投票権の約55%を持つ。2026-04 のER1 提案で発行体検証閾値を51%から67%へ引き上げたことは、「VC支配DAO」批判への重要な妥協である。
- **MakerDAO MKRとの類推**: Greg Di PriscoがMakerDAOのリスクチーム・モデルを移植した。ただし$Mガバナンス参加の活性は、成熟DAO（MKR / UNI / AAVE）よりはるかに低い。

## 他の 中立インフラ型SC との比較

| 軸 | M0(M ネットワーク) | Frax frxUSD | World Liberty USD1 | Sky USDS | Bridge(Stripe) |
|---|---|---|---|---|---|
| ビジネスモデル | パートナー発行体向けミドルウェア | 自社ブランド + Fraxtal L2 取り込み | 政治型ブランドSC + 国債ナラティブ | 完全分散型 + Subdao分散 | 代行SC発行 + Stripe顧客ネットワーク |
| 準備金 | BUIDL + USTB + 現金 | BUIDL + UST + 一部 RWA | 短期国債 + 国庫券 | DAI/USDS 複合準備 | 短期国債 + USDCバックストップ |
| 中立性 | 高(自社ブランドの正面競争なし) | 中(自社ブランド frxUSD) | 低(政治色バインド) | 高(DAO ガバナンス) | 低(Stripe マーチャント・バインド) |
| クロスチェーン | M Bridge canonical | Fraxtal L2 + CCIP | Ethereum限定 | CCTP / 汎用ブリッジ経由のマルチチェーン | Stripeオーケストレーション経由のクロスチェーン |
| 規制ルート | §501 コンプラ・フレンドリー、MiCA EMT ルート開放 | §501 コンプラ境界 | 米国政治ナラティブ保護 | DeFi グレー | §501 コンプラ + Stripe ライセンス殻 |
| 時価総額 | ~$1.05B | ~$1.2B | ~$2.6B | ~$8.5B | 管理対象 ~$2B |
| 2026 トレンド | パートナー候補パイプライン加速 | BUIDL直接保有の深化 | ガバナンス透明度が争点 | DAOガバナンスが定常化 | 企業顧客の深耕 |

**M0 とBridge（Stripe）の対抗が最も直接的**: 両社とも「代行ステーブルコイン発行」を行うが、Bridgeは[[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe Trojan Horse ルート]]でSCをStripe加盟店ネットワークに埋め込み、分配側をロックインする。M0 は複数発行体・複数チェーン対応の中立ミドルウェアで、分配側をオープンにする。中南米 / 日本 / 欧州第二線銀行パートナーというセグメントでは、M0 とBridgeはすでに正面接触を開始している。

## USDM 利回り経路の分解

USDMはM0 自社の利回り付きラッパーであり、sDAI / sUSDe / sUSDSと同様の役割を持つが、M0 エコシステムのみに対応する。

```
リテール/DeFi ユーザー
  ↓ USDC / USDT を預金
USDM Mint(1:1)
  ↓ M0 後端
準備金Vault: BUIDL ~43% + USTB/短期国債 ~45% + 現金 ~12%
  ↓ 収益分配
USDM保有者 ~ 4.2-4.5% APY(管理手数料 + プロトコル取り分 控除後)
M0 Foundation ~ 30-50 bpsの純取り分
$Mステーカー ~ プロトコル取り分 の一部
```

**sUSDM（DeFi-wrapped）**: USDMを二次パッケージ化し、Aave / Morpho / Pendleで再利用可能にする。[[fintech/circular-reserve-asset-flywheel-overview|循環準備資産フライホイール]]と接続し、同種の増幅ルートを形成する。Re7 Capitalが2026-04 にUSDM後端vaultへ参加し、利回りを「安定収益層（USTB/BUIDL）+ alpha層（Re7 strategy）」に分解した。これはUSDMが「受動的な利回り付き」から「能動運用型利回り」へアップグレードするキーポイントとなった。

## 関連項目

- [[fintech/INDEX|FinWiki Fintech Index]]
- [[fintech/m-network-m0-neutral-infrastructure|M0 / M Network 中立ステーブルコイン・インフラ基礎ページ]]
- [[fintech/frax-frxusd-defi-stablecoin|Frax frxUSD 半コンプラ化ルート]]
- [[fintech/world-liberty-usd1-political-stablecoin|World Liberty USD1 政治型ステーブルコイン]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS 分散型ステーブルコイン]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン利息分配エコノミクス]]
- [[fintech/protocol-renewal-trigger-as-event-anchor|プロトコル・アップグレード・トリガー・イベントアンカー]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL トークン化 MMF 概要]]
- [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL SC issuer 採用マトリクス]]
- [[fintech/circular-reserve-asset-flywheel-overview|循環準備資産フライホイール]]
- [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe Trojan Horse ルート]]
- [[fintech/stablecoin-chain-token-strategy-trilemma|ステーブルコイン-チェーン-トークン戦略のトリレンマ]]
- [[fintech/wall-street-crypto-network-neutrality|ウォール街暗号ネットワーク中立]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]

## 出典

- M0 Foundation 公式ホーム https://m0.org/
- M0 ドキュメント https://m0.org/docs/
- M0 ガバナンス・ポータル https://m0.foundation/governance
- M ERC-20 コントラクトアドレス(Etherscan) https://etherscan.io/token/0x866a2bf4e572cbcf37d5071a7a58503bfb36be1b
- "M ネットワーク Bitsoとのメキシコペソ・ステーブルコイン試験を公表" — CoinDesk, 2025-12 https://www.coindesk.com/business/2025/12/m-network-mexican-peso-pilot
- "M Bridge: M0 がパートナー・ステーブルコインの正準クロスチェーンを握ろうとする理由" — The Block, 2026 https://www.theblock.co/post/m0-bridge-stablecoin-2026
 - Bain Capital CryptoによるM0 投資発表（2025） https://www.bain.com/about/media-center/press-releases/2025/bain-capital-crypto-m0/
