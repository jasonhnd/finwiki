---
source: fintech/eu-mica-implementation-status-2026
source_hash: 041757c340e9e79b
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "EU MiCA 実装状況 2026-07 · ESMA EMT/ART 登録簿 × 非準拠 stablecoin 制限"
translated_at: 2026-07-30T02:06:00+09:00
---

# EU MiCA 実装状況 2026-07 · ESMA EMT/ART 登録簿 × 非準拠 stablecoin 制限

## TL;DR

EU MiCA (Markets in Crypto-Assets Regulation, Regulation (EU) 2023/1114) は、EMT / ART 規定が 2024-06-30 に、その他の主要規定が 2024-12-30 に適用開始となり、CASP の最長移行期間も 2026-07-01 に終了した。ESMA の **2026-07-16 interim register** を同一 LEI で集計すると、EMT ファイルには **41 行・21 発行法人・12 home states** があり、ART ファイルにはデータ行がない。これは公的登録簿の snapshot であって、発行残高、取引高、市場シェア、active user を示さない。したがって、旧版の「ART 3 社」「USDT 1%」「USDC 78%」「BBVA EURO ローンチ」といった数値・イベントはこの登録簿から確認できず、現在の検証可能な事実として扱わない。分類の法的背景は [[fintech/mica-overview|MiCA 概観]] と [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART 詳細]] を参照。^[source:MiCA Regulation; ESMA interim MiCA register snapshot 2026-07-16; ESMA transition statement]

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it alongside [[fintech/mica-overview|MiCA 概観]] for the legal framework, [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART]] for token classification, and [[fintech/dora-eu-digital-operational-resilience-overview|DORA 概観]] for the "業務 + レジリエンス" 二軌アーキテクチャ。

## 実装タイムライン (2023-2026) ^[source:MiCA Regulation; ESMA guidance and register; official issuer and CASP notices]

| 日付 | 公開記録で確認できるイベント | 検証上の含意 |
|---|---|---|
| 2023-06-09 | Regulation (EU) 2023/1114 が Official Journal に掲載 | 条文と適用日を確認する一次資料 |
| 2024-06-30 | Titles III / IV（ART / EMT）が適用開始 | stablecoin 関連規定の先行適用 |
| 2024-07-01 | Circle が French EMI license により USDC / EURC を MiCA 準拠で EU 発行すると公表 | 2025 年 3 月・5 月の新規取得ではない |
| 2024-11-27 | Tether が EURT の support 終了を公表 | 対象は EURT。USDT の EU-wide 自主撤退告知ではない |
| 2024-12-13 | Coinbase が一部 EEA retail entity で USDT 等の service restriction を開始 | exchange / entity / service ごとに範囲を確認する必要がある |
| 2024-12-30 | MiCA のその他の主要規定が適用開始 | CASP authorization 等の本格適用 |
| 2025-01-17 | ESMA が non-MiCA-compliant ART / EMT に関する CASP 向け guidance を公表 | acquisition を促す service は 2025 年 1 月末、sell-only 移行は Q1 末を目安とした |
| 2025-12-23 | MiCA white paper の iXBRL format requirement が適用開始 | 登録簿の machine-readable 化が進展 |
| 2026-07-01 | CASP の最長 transitional period が EU 全域で終了 | 無認可 CASP は継続提供できない |
| 2026-07-16 | ESMA interim register の本稿参照 snapshot | EMT 41 行、ART 0 行。weekly update のため日付固定で引用する |

## EMT (E-Money Token) 登録簿 snapshot (2026-07-16) ^[source:ESMA EMTWP.csv snapshot 2026-07-16]

下表は ESMA `EMTWP.csv` を `ae_lei` で重複排除して集計したもの。`登録行` は white paper record の行数であり、token 数や現在の流通銘柄数と一致しない場合がある。

| Home state | 発行法人（unique LEI） | 登録行 | 登録法人 |
|---|---:|---:|---|
| CZ | 1 | 3 | Payment Corporation SE |
| DE | 1 | 4 | AllUnity GmbH |
| DK | 1 | 1 | Eurodollar ApS |
| FI | 1 | 4 | Paxos Issuance Europe Oy |
| FR | 6 | 8 | Circle Internet Financial Europe SAS; Société Générale - Forge; SALVUS; Oddo BHF SCA; HEURO SAS; CACEIS BANK SA |
| IS | 1 | 1 | Monerium ehf |
| LT | 2 | 2 | UAB BLUE EMI LT; Newrails, UAB |
| LU | 2 | 2 | Banking Circle S.A.; AIEU Services Limited S.A. |
| LV | 1 | 2 | SIA GR8 PAY |
| MT | 2 | 4 | StablR Ltd; Stable mint Ltd |
| NL | 2 | 9 | Fiat Republic Netherlands; Quantoz Payments B.V |
| PL | 1 | 1 | StaBillon sp. z o.o. |
| **合計** | **21** | **41** | **12 home states** |

**読み方**:

1. ESMA は NCA / EBA から受領した情報を weekly に再掲載するため、count には必ず snapshot date を付す。
2. 一つの法人が複数 white papers または更新版を持つため、行数を「発行体数」と呼ばない。
3. 登録簿には circulation、market cap、turnover、active user がないため、Circle 75%、EURC €280M、BBVA €25M などの市場値をこの表から導けない。
4. `BBVA`、`Bitstamp Pay`、`Crypto.com Europe` はこの EMT snapshot の issuer legal entity として確認できない。CASP 登録や別事業の authorization と EMT issuer 登録を混同しない。

## ART (Asset-Referenced Token) 登録簿 snapshot (2026-07-16) ^[source:ESMA ARTZZ.csv snapshot 2026-07-16]

| ESMA file | Data rows | 確認できること | 確認できないこと |
|---|---:|---|---|
| `ARTZZ.csv` | 0 | この snapshot では ESMA interim register に ART issuer record が掲載されていない | 申請中案件、域外発行、非公開計画、過去の申請件数、市場需要、規制費用 |

Quantoz EURD は同日の EMT file で Quantoz Payments B.V. の `EURD EMT white paper` として掲載されており、ART として数えない。Bitstamp Pay と Société Générale-FORGE の架空の ART product / circulation も削除した。0 行という snapshot だけで「ART は規制負担により消滅した」「compliance cost は EMT の 3–5 倍」と因果推論することはできない。

## USDT の EU 撤退と USDC シェアの再構築

**公表済み restriction と evidence boundary**: ^[source:Tether EURT notice; Coinbase and Kraken EEA notices; ESMA 2025-01-17 guidance; ESMA EMTWP.csv]

| 日付 / 状態 | 公開情報 | この情報だけでは言えないこと |
|---|---|---|
| 2024-11-27 | Tether は EURT の新規発行を既に停止しており、support / redemption を 2025-11-27 までに終了すると公表 | USDT を EU から自主撤退させた、または EU 保有がゼロになったとは言えない |
| 2024-12-13 | Coinbase は特定 EEA retail entities で USDT 等への service restriction を開始 | 全 EU exchange が同日に同じ措置を完了したとは言えない |
| 2025-01-17 | ESMA は non-compliant ART / EMT の acquisition を可能にする service の制限と Q1 末までの sell-only transition を guidance | custody と transfer まで一律禁止したものではない |
| 2026-04-13 更新 | Kraken は EEA で USDT を delisted と案内 | EU 全市場の残高・volume・OTC share を示さない |
| 2026-07-16 snapshot | USDT issuer は ESMA EMT file に掲載されていない。Circle の USDC / EURC は掲載 | USDT 1%、USDC 78%、EU USDC 純流入 450 億ドル等の time series を示さない |

旧版の 28% → 6% → 3% → 1% という曲線、USDC 450 億ドル純流入、EURC 2.2 億ユーロ流入、銀行系 1.8 億ユーロ、USDC 78% は、定義・対象 venue・期間を固定した一次 dataset が示されていなかったため削除した。

### Circle EURC

- Circle Internet Financial Europe SAS は 2024-07-01 に French EMI license と USDC / EURC の MiCA-compliant EU issuance を公表した。^[source:Circle MiCA announcement 2024-07-01]
- ESMA 2026-07-16 EMT file は同法人、ACPR、USDC white paper、EURC white paper を掲載する。
- 登録簿は EU 内 circulating amount や use case 別 volume を持たないため、EURC 2.8 億ユーロ、USDC EU 80 億ドルという旧数値は使用しない。
- 準備資産の構成や custody は、対象 token と report date を固定した issuer report / white paper で別途検証する。[[fintech/circular-reserve-asset-flywheel-overview|循環準備資産フライホイール]] は市場構造の分析であり、登録簿上の事実とは区別する。

### Société Générale-FORGE EURCV (Euro Coin Vertu)

- ESMA EMT file は Société Générale - Forge の EURCV white paper を authorization notification date 2024-07-01 で掲載する。2025 年 9 月が初の MiCA 承認日ではない。^[source:ESMA EMTWP.csv snapshot 2026-07-16]
- 同 file には USDCV white paper も掲載される。掲載 chain や white paper revision は register の URL と更新日で確認する。
- 旧版の 2026-Q1 multi-chain launch、6,000 万ユーロ circulation、ECB deposit facility、yield-bearing wallet test は、この snapshot では確認できないため削除した。
- EURCV を法的に「半 stablecoin・半 deposit token」と呼ぶ根拠はない。[[fintech/institutional-stablecoin-deposit-token-thesis|機関ステーブルコイン / デポジットトークン論題]] との比較では issuer liability と redemption claim を個別に確認する。

### BBVA EURO

ESMA 2026-07-16 EMT file に BBVA または `BBVA EURO` の issuer record はない。本稿が旧版で記載した 2025-11 発表、2026-03 launch、Ethereum / Polygon、KPMG audit、2,500 万ユーロ circulation、Latin America use case は、示された BBVA 公式 URLを含め一次資料で確認できなかったため撤回する。登録簿にないことだけで将来計画の不存在を断定せず、公式発表と次回 register の双方が揃った時点で再評価する。[[fintech/brazil-mexico-cbdc-stablecoin-push-2026|Brazil/Mexico CBDC 推進]] との連動も現時点では仮説に留める。^[source:ESMA EMTWP.csv snapshot 2026-07-16]

### EUROe / EURØP / EURR 等の小型 SC

- ESMA file は Paxos Issuance Europe Oy の EUROe、SALVUS の EURØP、StablR の EURR / USDR 等の white papers を掲載する。
- 登録簿は DeFi / exchange volume や circulation を示さないため、「各 4,000 万ユーロ未満」「将来統合される」という数値・予測は付さない。

## ESMA × EBA × 各国主管局協調メカニズム

**MiCA 規制アーキテクチャ**:

- **各国主管局 (NCA)** が通常の issuer / CASP authorization と日常監督を担い、ESMA register へ情報を提供する。
- **EBA** は ART / EMT の significance を定期評価し、significant ART / EMT に分類された場合に直接監督を引き受ける。すべての EMT を EBA が直接監督するわけではない。
- **ESMA** は Article 109 register を維持し、CASP authorization の supervisory convergence、market integrity、cross-border coordination を支える。

**Passport メカニズム**: cross-border provision は MiCA と underlying banking / e-money authorization の条件に従う。2026 年 2 月に初めて passport が「相互利用開始」したという event は確認できない。2026-07-01 は passport 開始日ではなく、CASP transitional period の最長終了日である。^[source:MiCA Regulation; ESMA statement on end of transitional periods 2026-04-17]

**実際の協調課題**:

1. **snapshot discipline**: weekly register の日付、row count、unique LEI count を分ける。古い snapshot と national register の時間差も注記する。
2. **issuer / token / CASP の分離**: exchange の CASP license、issuer の EMI / credit institution authorization、token white paper record は別の対象である。
3. **significance の判定**: EBA は MiCA の複数の量的・質的 criteria に基づいて判断する。旧版の単純な `>€100M / >1M users / daily >€1M` を「大型 EMT threshold」とする記述や、ESMA が 2026 年 3 月に USDC を大型 EMT と宣言したとの記述は裏付けがない。
4. **market-share dataset の欠落**: register は authorization map であり market dataset ではない。市場シェアを追加する場合は、EU / EEA、venue、pair、spot / derivatives、volume / balance、期間を明示した再現可能 dataset が必要。

## Related

- [[fintech/INDEX|FinWiki Fintech Index]]
- [[fintech/mica-overview|MiCA 概観]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART 詳細]]
- [[fintech/mica-cross-border-implications|MiCA クロスボーダー含意]]
- [[fintech/dora-eu-digital-operational-resilience-overview|DORA 概観]]
- [[fintech/dora-eu-digital-operational-resilience-ctpp|DORA CTPP]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|グローバルステーブルコイン規制五極マトリクス]]
- [[fintech/circular-reserve-asset-flywheel-overview|循環準備資産フライホイール]]
- [[fintech/three-circles-stablecoin-mra-framework|米国・EU・日本のステーブルコイン市場アクセス比較]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関ステーブルコイン / デポジットトークン論題]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act の実施状況]]
- [[fintech/brazil-mexico-cbdc-stablecoin-push-2026|Brazil/Mexico CBDC × ステーブルコイン推進]]
- [[fintech/tether-business-model-short-treasury-yield|Tether ビジネスモデル]]

## Sources

- [MiCA — Regulation (EU) 2023/1114](https://eur-lex.europa.eu/eli/reg/2023/1114/oj) — 法的分類、適用日、authorization / supervision。
- [ESMA — MiCA landing page and interim register](https://www.esma.europa.eu/esmas-activities/digital-finance-and-innovation/markets-crypto-assets-regulation-mica) — weekly register、data limitations、transition。
- [ESMA EMT file（snapshot page updated 2026-07-16）](https://www.esma.europa.eu/sites/default/files/2024-12/EMTWP.csv) — 41 rows / 21 unique LEIs / 12 home states の集計元。
- [ESMA ART file（snapshot page updated 2026-07-16）](https://www.esma.europa.eu/sites/default/files/2024-12/ARTZZ.csv) — header only、0 data rows。
- [ESMA — guidance on non-compliant ARTs / EMTs（2025-01-17）](https://www.esma.europa.eu/press-news/esma-news/esma-and-european-commission-publish-guidance-non-mica-compliant-arts-and-emts) — CASP restrictions と transition。
- [ESMA — end of MiCA transitional periods（2026-04-17）](https://www.esma.europa.eu/sites/default/files/2026-04/ESMA75-113276571-1679_Statement_on_the_end_of_transitional_periods_under_MiCA.pdf) — 2026-07-01 の最長終了日。
- [EBA — supervisory role under MiCA](https://www.eba.europa.eu/activities/direct-supervision-and-oversight/ebas-supervisory-role-under-mica) — significant ART / EMT の評価と直接監督。
- [Circle — MiCA announcement（2024-07-01）](https://www.circle.com/fr/pressroom/circle-is-first-global-stablecoin-issuer-to-comply-with-mica-eus-landmark-crypto-law) — French EMI license と USDC / EURC。
- [Société Générale-FORGE — EURCV product page](https://www.sgforge.com/product/eurcv/) — issuer product surface。authorization date は ESMA file で確認。
- [Tether — EURT support transition（2024-11-27）](https://tether.io/news/tether-updates-users-on-a-strategic-transition-to-better-support-community-driven-product-support/) — 対象 token と redemption deadline。
- [Coinbase — MiCA non-compliant stablecoins](https://help.coinbase.com/en/coinbase/other-topics/other/mica-restricted-stablecoins) / [Kraken — EEA stablecoin offering](https://support.kraken.com/articles/stablecoin-offerings-for-eea-clients) — entity / service 別 restriction。

---

**最終更新**（2026-07-30）：provenance で要確認となった 3 表を、ESMA の 2026-07-16 登録簿 snapshot と issuer / CASP の公式通知から再構築し、根拠のない市場シェア、流通量、license、商品ローンチ、予測に関する主張を削除した。
