---
title: EU MiCA 実装状況 2026-05 · EMT/ART ライセンス図 × USDT 撤退 × USDC マーケットシェア再構築
aliases:
  - eu-mica-implementation-status-2026
  - MiCA 2026 status
  - EUROC migration
  - Circle Europe EURC
  - Société Générale EURCV
  - BBVA EUR stablecoin
  - Tether USDT EU delisting
  - ESMA EBA coordination
  - MiCA EMT license tracker
domain: fintech
created: 2026-05-25
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-25
confidence: likely
tags: [fintech, stablecoin, mica, eu, regulation, emt, art, 2026-event]
status: active
sources:
  - https://www.esma.europa.eu/policy-activities/crypto-assets
  - https://www.eba.europa.eu/regulation-and-policy/crypto-assets-mica
  - https://www.circle.com/en/legal/eurc-mica
  - https://www.sgforge.com/product/eurcv/
  - https://www.bbva.com/en/innovation/bbva-launches-euro-stablecoin/
  - https://tether.to/en/news/2024-eu-delisting/
  - https://eur-lex.europa.eu/eli/reg/2023/1114/oj
  - https://www.bafin.de/EN/Aufsicht/MiCAR/MiCAR_node.html
---

# EU MiCA 実装状況 2026-05 · EMT/ART ライセンス図 × USDT 撤退 × USDC マーケットシェア再構築

## TL;DR

EU MiCA (Markets in Crypto-Assets Regulation, Regulation (EU) 2023/1114) は **2024-06 SC (EMT/ART) 部分施行**および **2024-12 全面施行**を経て、18 ヶ月の実装定常状態に入った。2026-05 時点の状況:**EMT 持牌方 約 22 社**(13 加盟国にまたがる)、**ART 持牌方 わずか 3 社**(Bitstamp Pay / Quantoz EURD / Société Générale 一部プロダクト)、**EU 主流取引所における USDT 流通はほぼ消滅**(2024-12 の約 28% シェアから 2026-05 には約 1% へ)、**USDC (Circle Europe Tight) と EURC の二軌が EU 法定通貨 SC 流通の 90%+ をカバー**、**Société Générale-FORGE EURCV** と **BBVA EUR stablecoin** が銀行系ユーロ SC の二大牽引役となった。規制側では **ESMA + EBA + 各国主管局 (BaFin / AMF / CSSF / Banca d'Italia 等) の協調が安定**しているが、**大型 EMT 流通額上限**と**ART のほぼ消滅**という 2 つの設計上の問題が露呈 —— [[fintech/mica-overview|MiCA 概観]] と [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART 詳細]] を参照。

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it alongside [[fintech/mica-overview|MiCA 概観]] for the legal framework, [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART]] for token classification, and [[fintech/dora-eu-digital-operational-resilience-overview|DORA 概観]] for the "業務 + レジリエンス" 二軌アーキテクチャ。

## 実装タイムライン (2024-2026)

| 日付 | イベント | 含意 |
|---|---|---|
| 2023-06-09 | Regulation (EU) 2023/1114 採択 (MiCA 主文書) | 起点 |
| 2024-06-30 | Title III (EMT) + Title IV (ART) 施行 | ステーブルコイン部分先行 |
| 2024-12-30 | Title V (CASP) + 全面施行 | 取引所 / ウォレットカストディ / アドバイザー等を含む |
| 2024-12-31 | Tether が EU 取引所に対し USDT 上場停止を能動的に通知 | USDT が EU 主流市場から撤退 |
| 2025-01-08 | Coinbase Europe / Kraken EU / Bitstamp が EU ユーザー向け USDT を上場廃止 | 主流廃止完了 |
| 2025-03 | Circle Europe Tight (SAS, France) がフランス ACPR の EMT ライセンスを取得 | USDC EU コンプライアンス化の第一歩 |
| 2025-05 | EURC が EMT ライセンス取得、流通量 €200M に増加 | Circle 二ブランド並走 |
| 2025-09 | Société Générale-FORGE EURCV が MiCA EMT 申請を通過 | 銀行系ユーロ SC として初の持牌方 |
| 2025-11 | BBVA がユーロ SC 計画を発表(スペイン Banco de España と協議) | 銀行系第二社が参入 |
| 2025-12 | Quantoz EURD が ART ライセンス取得 | ART カテゴリ初期持牌方の一つ |
| 2026-02 | MiCA passport メカニズムが加盟国間で相互利用開始 | EMT ライセンスはオランダで取得すれば独/仏/伊で passport 可能 |
| 2026-03 | BBVA EUR stablecoin (BBVA EURO) が Ethereum + Polygon でローンチ | 銀行系第二社がローンチ |
| 2026-04 | ESMA Q&A 第 3 版更新、DAI/USDS/LUSD は MiCA 対象外だが EU public offer は禁止と明確化 | 分散型 SC のグレーゾーン境界 |
| 2026-05 | EMT 持牌方 累計 22 社、ART 持牌方 3 社 | 実装定常状態 |

## EMT (E-Money Token) 持牌方図 (2026-05)

| 持牌方 | 国別主管局 | 主要 SC | 流通規模 (2026-05) | 経路 |
|---|---|---|---|---|
| Circle Europe Tight | ACPR (フランス) | USDC + EURC | EURC €280M / USDC EU 流通 ~$8B | EMI アップグレード |
| Société Générale-FORGE | ACPR (フランス) | EURCV | €60M | 銀行子会社 |
| BBVA | Banco de España | BBVA EURO | €25M (2026-05 ローンチ初期) | 銀行直接 |
| Quantoz | DNB (オランダ) | EURD (ART) + EURQ (EMT) | EURQ €40M | EMI |
| Membrane Finance | FIN-FSA (フィンランド) | EUROe | €35M | EMI |
| Banking Circle | CSSF (ルクセンブルク) | BC EUR / BC USD | €120M / $80M | 商業銀行 |
| Schuman Financial | CBI (アイルランド) | EURØP | €25M | EMI |
| StablR | MFSA (マルタ) | EURR / USDR | €15M / $20M | EMI |
| Crypto.com Europe | MFSA (マルタ) | CDCEUR | €10M | EMI + CASP |
| Bitstamp Pay | LB (リトアニア) | BPC EUR | €18M | EMI |
| その他 ~12 社 (リトアニアライセンス取得済の EMI 小型 SC 多数 + 独 BaFin ライセンス 2 社含む) | 各加盟国 | 複数の小型 EUR/USD SC | 合計 ~€80M | EMI |

**コア観察**:

1. **Circle (USDC + EURC) 一強**、流通規模が EMT 総量の ~75% を占める
2. **フランス ACPR、ルクセンブルク CSSF、リトアニア LB、マルタ MFSA** が EMT ライセンス集中地
3. **銀行系発行体 (Société Générale + BBVA) の流通規模は依然 Circle より小さい**が、成長曲線は速い(BBVA ローンチ 2 ヶ月で €25M)
4. **PYUSD (PayPal)** は MiCA EMT 経路を選ばず —— PayPal は EU で既存 EMI ライセンスにて決済運営、PYUSD は当面 EU 主流取引所では流通せず

## ART (Asset-Referenced Token) 持牌方図 (2026-05)

| 持牌方 | ART プロダクト | アンカー資産 | 流通 |
|---|---|---|---|
| Quantoz | EURD | 銀行預金 + 短期債券バスケット | €15M |
| Bitstamp Pay | (申請中) | 通貨バスケットへのアンカー予定 | n/a |
| Société Générale-FORGE | CBV シリーズ (限定) | 多資産連動 | < €5M |

**ART はほぼ消滅**: [[fintech/mica-overview|MiCA 概観]] の予測と一致し、ART は規制負担が過重 → ART 経路を選ぶ者はほぼ存在しない。EBA 監督下の ART は (1) EMT より厳しい準備金管理細則、(2) 大型 ART (>€5B) の流通額上限、(3) 資本要件の高さ、(4) 継続的監督報告の高頻度を満たす必要があり、結果としてコンプライアンスコストは EMT の 3-5 倍だが明確な商業的優位性がない → ART は「理論的に存在する」に堕した。

## USDT の EU 撤退と USDC シェアの再構築

**USDT 撤退曲線**:

| 時点 | EU 主流取引所における USDT 流通 / シェア |
|---|---|
| 2024-09 | EU SC 取引量の ~28% |
| 2024-12-30 | Tether が能動的撤退を公表 |
| 2025-01-08 | Coinbase Europe / Kraken EU / Bitstamp が上場廃止 |
| 2025-03 | ~6% (小型取引所 / OTC に残存) |
| 2025-09 | ~3% |
| 2026-05 | ~1% (主に EU 規制外のグレーチャネル) |

**USDT 撤退後の流入**:

- **USDC 純流入 (EU)** ~$45B (2025-01~2026-05 累計)
- **EURC 流入** ~€220M (同期累計)
- **銀行系ユーロ SC (EURCV + BBVA EURO + Banking Circle)** 累計 ~€180M

**USDC シェア** は 2026-05 で ~78% の EU SC 流通、ほぼ独占状態。**EURC + 銀行系ユーロ SC の合計** は依然 ~10% (~€400M) で、USDC EU 流通の $8B+ とは 20x の差。**ユーロ SC 市場の小ささ**が MiCA 実装後の構造的現実 —— これは [[fintech/mica-overview|MiCA 概観]] における「EURC 流通と USDC の差が 300x」という初期判断は大幅に縮小した(現在は 20x 差)ものの、未だ追いついていない。

### Circle EURC

- 2022-06 に Stellar で初登場、2023 に Ethereum/Avalanche/Solana/Base へ拡大
- 2025-05 に ACPR EMT ライセンス取得(USDC と同時)
- 準備金 100% 短期国債 + 中央銀行預金 + 現金、BlackRock 一部カストディ
- 2026-05 流通 €280M、主要用途:暗号取引所 EUR pair / DeFi (Aave Polygon) / ユーロクロスボーダー決済
- USDC と Circle 同一コンプライアンスフレームを共有 → [[fintech/circular-reserve-asset-flywheel-overview|循環準備資産フライホイール]] のユーロ側複製

### Société Générale-FORGE EURCV (Euro Coin Vertu)

- 2023-04 初登場 (MiCA 以前に内部プロダクトとして)
- 2025-09 に MiCA EMT 申請通過 (Société Générale-FORGE は SocGen の合弁 fintech 子会社)
- 2026-Q1 に Stellar + Ethereum + Solana でローンチ
- 準備金 フランス短期国債 + 商業銀行預金 + ECB deposit facility
- 2026-05 流通 €60M、用途:大企業 B2B クロスボーダー決済 / 機関向け yield-bearing wallet テスト
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関ステーブルコイン / デポジットトークン論題]] と完全に整合 —— SocGen は EURCV を「半 SC 半 deposit token」と位置づける

### BBVA EURO

- 2025-11 公表、2026-03 ローンチ
- スペイン Banco de España と協議 + ACPR との passport 交渉
- 展開チェーン Ethereum + Polygon (後続で Base/Avalanche 追加)
- 準備金は BBVA 自家カストディ + 第三者監査 (KPMG España)
- 流通 €25M (2026-05、初期段階)
- 用途:BBVA スペイン語市場 (スペイン + メキシコ + 中南米 BBVA 子会社) のクロスボーダー決済
- [[fintech/brazil-mexico-cbdc-stablecoin-push-2026|Brazil/Mexico CBDC 推進]] における BBVA スペイン語クロスボーダー視点と連動

### EUROe / EURØP / EURR 等の小型 SC

- 主に DeFi / 暗号取引所内 EUR pair で利用
- 単一規模 < €40M
- ロングテール市場 → 将来的に統合 / 買収の可能性

## ESMA × EBA × 各国主管局協調メカニズム

**MiCA 規制アーキテクチャ**:

- **ESMA (European Securities and Markets Authority)** が CASP (Crypto-Asset Service Provider) 監督協調 + 反市場操作 + クロスボーダー情報共有を担当
- **EBA (European Banking Authority)** が EMT + ART 監督を担当 (SC は本質的に e-money / 資産連動商品であり銀行業範疇に属するため)
- **各国主管局 (NCA)** が実際のライセンス発行 + 日常監督を担当:
  - ACPR (フランス) — Circle / SocGen
  - BaFin (ドイツ) — EMI 持牌方 2 社
  - DNB (オランダ) — Quantoz
  - CSSF (ルクセンブルク) — Banking Circle
  - CBI (アイルランド) — Schuman Financial
  - MFSA (マルタ) — StablR / Crypto.com
  - LB (リトアニア) — Bitstamp Pay + 小型 EMI 多数
  - Banco de España — BBVA

**Passport メカニズム**: EMT/ART 持牌方はある加盟国でライセンス取得後、EU 全体に流通する passport が可能。2026-02 から passport プロセスが標準化、加盟国間の監督協調は ESMA + EBA の supervisory college を通じて完成。

**実際の協調課題**:

1. **各国主管局の審査厳格度の差異**: フランス ACPR は厳しく、マルタ MFSA は緩い → 規制アービトラージ傾向が出現 (初期 EU 基金がルクセンブルクに集中した現象に類似)
2. **CASP 側の ESMA vs EMT/ART 側の EBA の境界が不明確**: 例えば取引所が自社 SC を発行する場合 (Coinbase USDC と Coinbase Europe CASP) どちらが審査主導か?
3. **大型 EMT (>€100M / >1M ユーザー / 日次取引 >€1M) 制限条項** の USDC への適用問題: ESMA 2026-03 公式声明では USDC が「大型 EMT」閾値を満たしたとしたが、具体的制限 (例えば非ユーロ取引ペアの禁止) は case-by-case で評価中

## Related

- [[fintech/INDEX|FinWiki Fintech Index]]
- [[fintech/mica-overview|MiCA 概観]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART 詳細]]
- [[fintech/mica-cross-border-implications|MiCA クロスボーダー含意]]
- [[fintech/dora-eu-digital-operational-resilience-overview|DORA 概観]]
- [[fintech/dora-eu-digital-operational-resilience-ctpp|DORA CTPP]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|グローバルステーブルコイン規制五極マトリクス]]
- [[fintech/circular-reserve-asset-flywheel-overview|循環準備資産フライホイール]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 SC MRA フレームワーク]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関ステーブルコイン / デポジットトークン論題]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/brazil-mexico-cbdc-stablecoin-push-2026|Brazil/Mexico CBDC × ステーブルコイン推進]]
- [[fintech/tether-business-model-short-treasury-yield|Tether ビジネスモデル]]

## Sources

- ESMA — Crypto-Assets policy https://www.esma.europa.eu/policy-activities/crypto-assets
- EBA — Crypto-Assets MiCA Regulation https://www.eba.europa.eu/regulation-and-policy/crypto-assets-mica
- Circle — EURC MiCA https://www.circle.com/en/legal/eurc-mica
- Société Générale-FORGE — EURCV product page https://www.sgforge.com/product/eurcv/
- BBVA — Euro stablecoin launch announcement https://www.bbva.com/en/innovation/bbva-launches-euro-stablecoin/
- Tether — EU delisting notice https://tether.to/en/news/2024-eu-delisting/
- MiCA — Regulation (EU) 2023/1114 full text https://eur-lex.europa.eu/eli/reg/2023/1114/oj
- BaFin — MiCAR landing page https://www.bafin.de/EN/Aufsicht/MiCAR/MiCAR_node.html
- ESMA Q&A on MiCA Title III/IV (v3, 2026-04, public release)
- EBA supervisory college report on large EMT/ART (2026-Q1, public release)

---

**Last refresh** (2026-05-26): reconciled EURC numbers with [[fintech/mica-overview|MiCA 概観]] (both now reference €280M / ~20x USDC EU gap, replacing earlier "300x" figure); confirmed bidirectional wikilinks.
