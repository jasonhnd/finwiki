---
title: M0 / M Network · 2026 インフラ更新 · M Bridge × Mexican Peso × USDM × 中立ミドルウェアの成熟期
aliases:
  - m0-network-infrastructure-update-2026
  - M0 2026 update
  - M Network 2026
  - M Bridge L2
  - MXNB M0 pilot
  - USDM 2026
  - M0 partner issuer
  - M0 governance
domain: fintech
created: 2026-05-25
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-25
confidence: likely
tags: [fintech, stablecoin, m0, m-network, neutral-infra, mxnb, usdm, latam, 2026-event]
status: active
sources:
  - https://m0.org/
  - https://m0.org/docs/
  - https://m0.foundation/governance
  - https://etherscan.io/token/0x866a2bf4e572cbcf37d5071a7a58503bfb36be1b
  - https://www.coindesk.com/business/2025/12/m-network-mexican-peso-pilot
  - https://www.theblock.co/post/m0-bridge-stablecoin-2026
  - https://www.bain.com/about/media-center/press-releases/2025/bain-capital-crypto-m0/
---

# M0 / M Network · 2026 インフラ更新 · M Bridge × Mexican Peso × USDM × 中立ミドルウェアの成熟期

## TL;DR

[[fintech/m-network-m0-neutral-infrastructure|M0(M^ZERO)]] は 2026 上半期に「early-stage 中立インフラ」から「**partner-issuer ミドルウェア**」段階に入り、同時に 3 つの新成長軸に賭ける:(1)**M Bridge** = M0 が Base / Arbitrum / OP / Unichain / Solana 間に提供するネイティブ相互接続層で、任意の partner issuer ステーブルコインが自然にマルチチェーンで共存可能;(2)**MXNB pilot** = Bitso + Mercado Bitcoin 等の中南米参加者が M0 上でメキシコペソ・ペッグ・ステーブルコインを発行、初の非米ドル partner SC;(3)**USDM** = M0 自社の yield-bearing wrapper、[[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] + 短期国債 + Re7 vault を直接保有し、partner issuer の利息分配を標準化。M0 は単なる「スイス銀行モデル」ではなく、**stablecoin middleware** へ —— [[fintech/frax-frxusd-defi-stablecoin|Frax frxUSD]] の「半コンプラ化」と [[fintech/world-liberty-usd1-political-stablecoin|World Liberty USD1]] の「政治型ブランド」と三極並立を形成する。

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it alongside [[fintech/m-network-m0-neutral-infrastructure|M0 中立インフラ基礎ページ]] for the founding thesis, and use [[fintech/protocol-renewal-trigger-as-event-anchor|プロトコル・アップグレード・トリガー・イベントアンカー]] to model 2026 H1 の M Bridge / USDM rollout 節奏。

## Key facts (2026-05 snapshot)

- **Token MCap(M-anchored 系列)** ~$1.05B(2026-04, vs $300M 2026-01);3 か月で 3.5x ^[public-press]
- **USDM 流通** ~$420M(2026-05);BUIDL 直接保有 ~$180M + 短期国債 $190M + 現金 $50M ^[issuer-docs]
- **MXNB pilot 流通** ~$25M 相当(2026-05);Bitso がマッチング、Mercado Bitcoin が副 issuer ^[public-press]
- **Partner issuer 名簿** 公開 6 社(欧州銀行子会社 fintech 1、中南米マッチング側 2、日本信託型 SC pilot 1、米国 RWA プロトコル 2 を含む);未公開 4-6 社が onboarding 中 ^[public-press]
- **M Bridge** 展開チェーン:Ethereum / Base / Arbitrum / Optimism / Unichain / Solana(後者は H2 稼働)^[issuer-docs]
- **$M ガバナンストークン** 流通約 4.2 億枚、累積ガバナンス提案 ~37(2026-05)^[on-chain]
- **監査とリスク管理** OpenZeppelin / Trail of Bits / Certora / Chainalysis ongoing monitoring ^[issuer-docs]
- **管理手数料** issuer 側 ~10-20 bps、BUIDL/USDY と同水準 ^[issuer-docs]

## 2026 event timeline

| 月 | イベント | 意義 |
|---|---|---|
| 2026-01 | USDM v1 mainnet | M0 自社 yield wrapper 稼働、issuer revenue split を標準化 |
| 2026-02 | M Bridge alpha(Base ↔ Arbitrum) | 単一 M-anchored SC のクロスチェーンが LayerZero/CCIP に依存せず、自前 burn-mint canonical bridge を持つ |
| 2026-03 | MXNB pilot(Bitso マッチング) | 初の非米ドル partner SC、[[fintech/em-market-crypto-dollarization-pattern|EM 市場の暗号ドル化パターン]] とは別軌道を開く |
| 2026-04 | $M トークン・ガバナンス・アップグレード ER1 | issuer 検証投票閾値を 51% から 67% に引き上げ、VC ガバナンス捕獲懸念に対応 |
| 2026-04 | Re7 Capital が USDM 後端 vault に参加 | yield bearing を USDM(カストディ型)+ sUSDM(DeFi 再利用型)に分解 |
| 2026-05 | M Bridge Optimism / Unichain | [[fintech/stablecoin-chain-token-strategy-trilemma|ステーブルコイン-チェーン-トークンのトリレンマ]] の「chain-agnostic」極と整合 |
| 2026-Q3 計画 | Solana M Bridge + 第 7-9 partner issuer 公開 | scale-up phase |
| 2026-Q4 計画 | $M staking エコノミクスの再評価 | [[fintech/sky-usds-decentralized-stablecoin|Sky USDS]] の DAO yield routing と対比 |

## Mechanism / 3 層ミドルウェアのアップグレード

**旧モデル(2025)= 単層中立インフラ**:M0 = 準備金接続 + スマートコントラクト・テンプレート + DAO 検証、partner issuer が各自ブランドを保持。問題:yield path なし、クロスチェーン統一性なし、非米ドル SKU なし。

**新モデル(2026)= 3 層 middleware**:

1. **L1 準備金層(Reserve)**:[[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] / USTB / 米国国債 / 短期中銀預金に直接接続。これは partner issuer が共有する金庫で、各社が個別に BlackRock とラインを交渉する必要がなくなった。
2. **L2 資産層(M-anchored token + USDM)**:partner issuer は M-anchored token を「issuer-branded SC base」として使用、USDM は M0 自社の yield wrapper でリテール/DeFi 向け。**重要な違い**:partner issuer が手にするものは「コンプラ・テンプレート」ではなく、既に yield 接続済みの完成品 → 利息分配エコノミクス([[fintech/stablecoin-revenue-split-economics|ステーブルコイン利息分配エコノミクス]] 参照)が USDM 層で既に標準化済み。
3. **L3 クロスチェーン層(M Bridge)**:同一 issuer の SC が Base/Arbitrum/Optimism/Unichain/Solana 間でデフォルト canonical(burn-mint)、LayerZero / Wormhole 等汎用ブリッジを経由しない。これにより [[fintech/protocol-renewal-trigger-as-event-anchor|プロトコル・アップグレード・トリガー・イベントアンカー]] の「アップグレード・イベント = 流動性再配分」レバーを M0 自身が回収する。

**MXNB pilot の特殊性**:Bitso(メキシコ最大の取引所)がマッチング、M0 がコンプラ・インフラを提供、メキシコペソ・ペッグ。これは M0 初の**非米ドル SC** 引受で、[[fintech/india-anti-dollar-dpi-alliance|India 反米ドル DPI 連盟]] と同じ思想 —— EM 国が米ドル SC に完全占領されないようにする。Mercado Bitcoin の副 issuer 役は H2 に BRL 版が登場する可能性を示唆。MXNB の流通は依然極小($25M 相当)だが、**シグナル価値はサイズを大きく超える** —— M0 が同じインフラで非米ドル SKU を引き受けられることを実証。

## $M トークン・エコノミクスとガバナンス

- **流通供給** ~4.2 億枚(2026-05、hard cap 10 億)
- **保有構造** チーム/Foundation ~25% + 投資家 ~30% + 流通 / DAO Treasury ~45%
- **効用**:(a)issuer 資格検証投票;(b)リスクパラメータ(LTV / 準備金構成 / チェーン選択)ガバナンス;(c)USDM 後端 vault 収益分配;(d)将来の staking → M Bridge canonical 転送のセキュリティ
- **ガバナンスリスク**:投資家 + チーム合計 ~55% の初期投票権、2026-04 ER1 提案で issuer 検証閾値を 51% から 67% に引き上げたのは「VC-controlled DAO」批判への重要な妥協
- **MakerDAO MKR とのアナロジー**:Greg Di Prisco が MakerDAO の risk team モデルを移植、ただし $M ガバナンス参加の活性は成熟 DAO(MKR / UNI / AAVE)よりはるかに低い

## 他の neutral-infra SC との比較

| 軸 | M0(M Network) | Frax frxUSD | World Liberty USD1 | Sky USDS | Bridge(Stripe) |
|---|---|---|---|---|---|
| ビジネスモデル | partner-issuer middleware | 自社ブランド + Fraxtal L2 capture | 政治型ブランド SC + Treasury narrative | 完全分散型 + Subdao 分散 | 代行 SC 発行 + Stripe 顧客ネットワーク |
| 準備金 | BUIDL + USTB + 現金 | BUIDL + UST + 一部 RWA | 短期国債 + 国庫券 | DAI/USDS 複合準備 | 短期国債 + USDC backstop |
| 中立性 | 高(自社ブランドの正面競争なし) | 中(自社ブランド frxUSD) | 低(政治色バインド) | 高(DAO ガバナンス) | 低(Stripe マーチャント・バインド) |
| クロスチェーン | M Bridge canonical | Fraxtal L2 + CCIP | Ethereum-only | Multi-chain via CCTP/汎用橋 | Cross-chain via Stripe orchestration |
| 規制ルート | §501 コンプラ・フレンドリー、MiCA EMT ルート開放 | §501 コンプラ境界 | 米国政治ナラティブ保護 | DeFi グレー | §501 コンプラ + Stripe ライセンス殻 |
| MCap | ~$1.05B | ~$1.2B | ~$2.6B | ~$8.5B | ~$2B managed |
| 2026 トレンド | partner pipeline 加速 | BUIDL 直接保有深化 | ガバナンス透明度争点 | DAO ガバナンス定常 | enterprise 顧客深耕 |

**M0 と Bridge(Stripe)の対抗が最も直接的**:両社とも「代行ステーブルコイン発行」を行うが、Bridge は [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe Trojan Horse ルート]] で SC を Stripe マーチャント・ネットワークに埋め込み、分配側 lock-in;M0 は multi-issuer / multi-chain neutral middleware で分配側オープン。中南米 / 日本 / 欧州第二線銀行 partner というセグメントでは、M0 と Bridge は既に正面接触を開始している。

## USDM yield path の分解

USDM = M0 自社 yield-bearing wrapper で、sDAI / sUSDe / sUSDS と同様の役割だが M0 エコシステムのみに対応:

```
リテール/DeFi ユーザー
  ↓ USDC / USDT を預金
USDM Mint(1:1)
  ↓ M0 後端
Reserve Vault: BUIDL ~43% + USTB/短期国債 ~45% + 現金 ~12%
  ↓ 収益分配
USDM holder ~ 4.2-4.5% APY(管理手数料 + protocol take 控除後)
M0 Foundation ~ 30-50 bps 純 take
$M staker ~ protocol take の一部
```

**sUSDM(DeFi-wrapped)**:USDM を二次パッケージ化し Aave / Morpho / Pendle で再利用可能にする、[[fintech/circular-reserve-asset-flywheel-overview|循環準備資産フライホイール]] と接続し同種の増幅ルートを形成。Re7 Capital が 2026-04 に USDM 後端 vault に参加し、yield を「安定収益層(USTB/BUIDL)+ alpha 層(Re7 strategy)」に分解、USDM が「passive yield-bearing」から「active managed yield」へアップグレードするキーポイントとなった。

## Counterpoints

- **MCap $1.05B は依然ロングテール・インフラ**:USDC $60B / USDT $145B / USDS $8.5B と最低 10x の差、「ステーブルコイン middleware 標準」のナラティブはまだ遠い
- **MXNB pilot は規模が極小($25M)**、シグナル価値が実浸透を上回る —— メキシコでグレー市場米ドル SC を本当に置き換えるには最低 $500M-1B 規模が必要
- **VC ガバナンス捕獲リスクは残存**:閾値を 51% から 67% に上げても、BlackRock + Goldman + Bain Capital + Pantera の合計は依然主導可能、[[fintech/sky-usds-decentralized-stablecoin|Sky USDS]] DAO の真の分散度と対照を成す
- **Bridge(Stripe)の enterprise / fintech 分配側のネットワーク効果**、M0 は短期的に対抗不可
- **M Bridge canonical モデルと LayerZero / CCIP / Wormhole エコシステムの協調問題**:partner issuer が M0 未カバーのチェーンへクロスしたい場合、依然汎用ブリッジを利用する必要があり、canonical モデルの境界は限定的
- **USDM と USDC / USDS のリテール/DeFi 認知競争**:USDM は Circle のコンプラ・ブランドや MakerDAO の分散ナラティブを持たず、「M0 yield wrapper」というラベルの伝播力は弱め
- **§501 コンプラ境界**:USDM 自社が BUIDL を直接保有するのはコンプラに見えるが、issuer は M0 Foundation + DAO で、[[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]] の「issuer = 実質的支配者」の解釈にグレーゾーンが存在(Frax と類似)
- **partner issuer の透明度**:公開 6 社 + 未公開 4-6 社、真のエコシステム規模と issuer 品質は独立検証困難

## Open questions

- M0 総管理 SC MCap は 2026 年末までに $3B 突破(現在の $1.05B から 3x)可能か?
- MXNB pilot はメキシコで $500M+ に成長し、[[fintech/gray-market-dollar-network-formalization|グレー市場ドル化ネットワークの正式化]] チャネルに本格参入できるか?
- M0 は EUR / JPY / SGD 等のさらに多くの非米ドル partner SC を打ち出し、multi-currency middleware を形成するか?
- $M staking と M Bridge canonical security のカップリングは具体的にどう設計されるか(EigenLayer restaking モデルに類似?)
- BlackRock + Goldman は 2026 H2 に $M ガバナンスをさらに主導するか(例:Foundation 取締役を指名)?
- USDM vs sUSDe / sUSDS / sDAI の DeFi 再利用層(Aave / Morpho / Pendle)シェアは 5% を突破できるか?
- partner issuer の中に [[fintech/jp-trust-type-sc-architecture|信託型 SC アーキテクチャ]] と M0 後端を接続する日本信託型 SC の実験が含まれるか?
- M0 と [[fintech/wall-street-crypto-network-neutrality|ウォール街暗号ネットワーク中立]] メインライン(BlackRock × Goldman がロングテール SC インフラを共同主導)の暗黙の閉ループは、2027 年に反トラスト関心を引き起こすか?

## Related

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

## Sources

- M0 Foundation 公式ホーム https://m0.org/
- M0 Documentation https://m0.org/docs/
- M0 Governance Portal https://m0.foundation/governance
- M ERC-20 コントラクトアドレス(Etherscan) https://etherscan.io/token/0x866a2bf4e572cbcf37d5071a7a58503bfb36be1b
- "M Network unveils Mexican peso stablecoin pilot with Bitso" — CoinDesk, 2025-12 https://www.coindesk.com/business/2025/12/m-network-mexican-peso-pilot
- "M Bridge: how M0 wants to own canonical cross-chain for partner stablecoins" — The Block, 2026 https://www.theblock.co/post/m0-bridge-stablecoin-2026
- Bain Capital Crypto investment in M0 announcement (2025) https://www.bain.com/about/media-center/press-releases/2025/bain-capital-crypto-m0/
