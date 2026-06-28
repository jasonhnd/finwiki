---
source: derivatives/swap-execution-facility-japan
source_hash: fb88c5223ed8a1f4
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "スワップ執行ファシリティ — 日本版相当制度（ETP regime）"
translated_at: 2026-06-26T08:28:46.046Z
---
# スワップ執行ファシリティ — 日本版相当制度（ETP regime）

## 要約日本には米国型の "Swap Execution Facility (SEF)" ライセンスは存在しない。しかし、FIEA の下で FSA が監督する OTC デリバティブ執行向け **Electronic Trading Platforms (ETPs)** という、**機能的に同等の制度**が運用されている。ETP regime は、指定された標準化 OTC 商品、特に円 IRS について義務化されており、日本における **Dodd-Frank SEF 要件（US）**および **MiFID II MTF / OTF 要件（EU）**の対応物である。

日本の OTC デリバティブ執行市場は、次の要素を組み合わせて成り立つ。

1. **電子 ETP 執行** — **Tradeweb（Tradeweb Japan / FSA 登録 ETP）**、**Bloomberg（日本向けに規制対象となる Bloomberg の電子取引サービス）**、その他の電子プラットフォームが提供する multi-dealer request-for-quote (RFQ) および order-book システム。標準化された円 IRS、OIS、basis swap フローにおいて、電子執行の比率が拡大している。

2. **ボイスブローカー経由の執行** — interdealer voice brokers（「wholesale broker」層 — **ICAP / NEX、BGC Brokers、Tullett Prebon、いずれも TP ICAP ファミリーまたは独立系レガシーブローカー**）が、特に非標準満期、大口ブロック取引、流動性の低い商品バリアントについて、ディーラー間 OTC 取引を仲介する。

3. **相対の dealer-to-client 取引** — voice、chat、または proprietary single-dealer platforms を通じた直接のディーラー・顧客間 OTC 取引。多くの事業法人エンドユーザー取引や bespoke structures において主要なチャネルである。

本項目は、FIEA ETP の規制境界、東京で稼働する主要プラットフォームおよびブローカー、電子執行シェアとボイスブローカー経由シェア、US SEF および EU MiFID II OTF / MTF regime との比較、FSA の dealer regulation framework、そして日本の電子 OTC 執行が同等商品の US SEF 市場よりも **集中度が低く、ボイスブローカー依存が強い**構造的理由を扱う。

## ウィキ上の位置づけ

この項目は OTC インフラクラスタ内の [[derivatives/INDEX|derivatives index]] の配下に位置する。ポストトレード清算側は [[derivatives/otc-clearing-jp-trade-repository|OTC clearing and trade repository Japan]]、基礎となる円 IRS 市場は [[derivatives/japan-interest-rate-derivatives-overview|Japan interest rate derivatives overview]]、フランチャイズ経済性は [[derivatives/dealer-bank-derivatives-revenue-mix|dealer bank derivatives revenue mix]]、cleared-execution の清算側は [[securities/japan-securities-clearing-corp|JSCC]]、より広い plumbing 文脈は [[securities/japan-market-infrastructure-map|Japan market infrastructure map]]、現物株式執行との比較は [[securities/japan-best-execution-sor-pts|Japan best execution / SOR / PTS]] をあわせて読む。

## ETP regime が重要な理由

2008 後の G20 Pittsburgh 枠組みは、中央清算と trade repository 報告に加えて、**「プラットフォーム上での取引」**を柱に含んでいた。その論理は次のとおりである。

- **プレトレード透明性** — 標準化 OTC 商品は、複数ディーラーが競争するプラットフォーム上で気配提示されるべきであり、それによりエンドユーザーの bid-offer spread を縮小する。
- **最良執行の比較可能性** — buy-side counterparty は複数ディーラーの quote を比較できるべきである。
- **相対取引の不透明性低減** — 執行を voice / chat から audit trail を備えた電子プラットフォームへ移すことで、市場公正性の監督を支援する。
- **流動性の集中** — ETP 上の multi-dealer RFQ は、相対執行で分断される流動性を集約する。

実装は法域により異なる。

- **US (Dodd-Frank Title VII)** — SEF。指定商品について trade-execution requirement を発動する "Made Available to Trade (MAT)" 判定プロセスを持つ。
- **EU (MiFID II)** — 指定デリバティブに対する Trading Obligation の下での MTFs（multilateral trading facilities）および OTFs（organized trading facilities）。
- **Japan (FIEA)** — FSA 登録 / 監督下の Electronic Trading Platforms (ETPs)。指定商品には on-platform execution obligation が課される。

日本の制度は US SEF rule よりも **対象範囲が規範的に狭い**。電子執行が義務づけられる商品は少なく、ボイスブローカー経由執行と電子執行の境界もより流動的である。これは、国内ディーラー数の小ささと東京 OTC 市場におけるボイスブローカーの歴史的役割を反映した意図的な調整である。

### 登録と監督日本で OTC デリバティブ向け ETP を運営する主体には、通常、次が必要となる。

- FIEA に基づく **Electronic Trading Platform 事業者 としての FSA 登録**（商品範囲に応じた特定カテゴリ。円 IRS、外貨建て IRS、該当する場合の CDS、その他の標準化 OTC デリバティブを対象とする）。
- market-conduct、pre-trade / post-trade transparency、member-onboarding、system-resilience、[[derivatives/otc-clearing-jp-trade-repository|JFSA-designated trade repository]] との trade-reporting integration に関する **FSA ルールの遵守**。
- mandatory clearing 対象商品について、[[securities/japan-securities-clearing-corp|JSCC]] との **clearing-integration arrangements**。

### 電子執行義務の対象範囲

FIEA の下では、**指定された標準化 OTC デリバティブ**は、対象 counterparty 間で取引される場合、on-platform execution obligation の対象となる。主たる商品クラスは、標準条件（通貨、変動金利インデックス、支払頻度、day count、満期）を備えた **円 IRS** であり、USD IRS に関する US SEF MAT determinations と対応する。

対象外、すなわちなおボイスブローカー経由または相対執行が認められるものは次のとおりである。

- 非標準満期
- 非標準の rate-reference indexes
- Bespoke structures（callable、amortizing、structured-payoff）
- 対象外 counterparty との取引（小規模事業法人、閾値未満の end-users）
- 指定閾値を超える大口ブロック取引（block-trade exemption rules）

### プレトレードおよびポストトレード透明性

ETP は通常、次を公表する。

- platform members が閲覧できる RFQ または order-book interface 上の **pre-trade indicative quotes**
- ISDA SwapsInfo、BIS 集計、BOJ 統計公表に供給される **post-trade transaction summaries**（匿名化され、場合により遅延）
- RFQ submission、dealer response、trade execution の **audit trails**

これは EU の **MiFID II RFQ transparency** や US の **SEF RFQ rules** と比較可能だが、範囲とタイミングの詳細は異なる。

### 電子プラットフォーム

| Platform | Coverage |
|---|---|
| **Tradeweb (Tradeweb Japan)** | Multi-dealer RFQ platform — 円 IRS、OIS、JGB cash、JGB repo、選択的 FX derivatives に強い。FSA 登録 ETP 事業者。世界最大級の fixed-income electronic-trading platforms の一つであり、東京拠点は institutional flow 向け tier-1 ETP である。 |
| **Bloomberg（日本登録を伴う Bloomberg の電子取引サービス）** | rates、FX、credit、選択的 equity derivatives にまたがる multi-dealer RFQ。Bloomberg の BSEF (Bloomberg SEF) は米国登録 SEF であり、日本向けサービスは対象商品セットについて FSA 登録下で運営される。 |
| **MarketAxess（選択的 fixed-income credit-derivatives RFQ）** | credit-product electronic execution に強い。日本での存在感は credit-derivatives と bond-related flow が中心。 |
| **JPX 系プラットフォーム** | JPX は [[financial-regulators/japan-exchange-group|JPX group]] と関連する電子 OTC デリバティブ取引の取り組みを持つ。対象範囲は変動するため、現行の商品提供を確認する必要がある。 |

### Interdealer voice brokers

日本の interdealer voice-broker 市場は、歴史的な Tullett Prebon と ICAP non-EBS / non-BrokerTec assets の統合から形成された **TP ICAP family** と、**BGC Brokers**（現 Cantor / BGC family）を軸にしている。

| Broker | Coverage |
|---|---|
| **ICAP (TP ICAP brand)** | 東京における voice-brokered rates、FX、credit、新興商品の OTC derivatives の歴史的中核。現在は TP ICAP の一部。円 IRS、OIS、basis swaps、JGB-cash、JGB repo、FX swaps / options をカバー。 |
| **Tullett Prebon (TP ICAP brand)** | TP ICAP 内の姉妹 voice-broker brand。東京では OTC rates、credit、structured products をカバー。 |
| **BGC Brokers** | Cantor / BGC のグローバル interdealer broker。東京では rates、credit、選択的新興商品に存在感。 |
| **Tradition (Compagnie Financière Tradition)** | 独立系グローバル voice-broker。東京では rates、FX、energy / commodities 隣接領域に存在感。 |
| **国内短資 / money-market interdealer brokers** | [[money-market/tanshi-company-business-model|tanshi]] 層およびその他の国内短期市場仲介者は、隣接する money-market と short-rate 領域で稼働する。グローバル voice brokers とは別のフランチャイズだが、front-end yen rates space では重なる。 |

### Single-dealer platforms

各主要 dealer bank は、顧客向け OTC 執行のために **single-dealer platforms** を運営している。

- [[securities-firms/nomura-hd|Nomura]] (NomuraNow);
- [[securities-firms/daiwa-sg|Daiwa SG]] (Daiwa Direct / institutional channels);
- [[securities-firms/smbc-nikko|SMBC Nikko]];
- [[securities-firms/mizuho-securities|Mizuho Securities]];
- [[securities-firms/goldman-sachs-japan|GS Japan]] (Marquee);
- [[securities-firms/morgan-stanley-japan|MS Japan]] (Matrix);
- [[foreign-financial-institutions/jpmorgan-japan|JPM Japan]] (MorganMarkets);
- [[foreign-financial-institutions/citigroup-japan|Citi Japan]] (Velocity).

Single-dealer platforms は多者間 venue ではないため、**それ自体として ETP rules の対象ではない**。ただし、RFQ 型執行のために multi-dealer ETPs と統合され、取引報告を TRs に供給する。

## 電子執行シェアとボイスブローカー経由シェア電子 / voice の分割に関する公開ソース上の観察は次のとおりである。

| Product class | Approximate electronic share |
|---|---|
| **標準化円 IRS（benchmark maturities, on-the-run）** | ETP（Tradeweb / Bloomberg）経由の電子執行が過半。大口ブロックについてはボイスブローカー経由が残る。 |
| **TONA 参照 OIS（標準化）** | 多くが電子執行。特に LIBOR transition 後、TONA-curve infrastructure への platform investment が進んだ。 |
| **Cross-currency basis swaps（円-USD）** | 混在。電子シェアは拡大しているが、大口 / off-the-run 取引は歴史的にボイスブローカー経由。 |
| **Bespoke / structured IRS（callable, amortizing, swaption-embedded）** | 主に voice または bilateral。 |
| **Single-name CDS（off-cleared scope）** | 主に voice または bilateral。 |
| **iTraxx Japan index CDS** | ハイブリッド。標準シリーズは電子、off-the-run は voice。 |
| **FX options（institutional）** | 混在。vanilla options は電子化が進む一方、exotic / structured は voice。 |
| **Equity OTC derivatives（variance swaps, single-stock swaps）** | 主に bilateral / dealer-direct。rates より electronic-platform penetration は低い。 |

構造的パターンは、**商品が標準化されるほど電子シェアが高くなる**というものである。Bespoke かつ複雑な構造は voice-and-bilateral に残る。これは、標準化 IRS から電子執行が取り込み、その後隣接商品クラスへ徐々に広がった US SEF および EU MTF / OTF の経験と重なる。

## US SEF および EU MiFID II OTF / MTF との比較

| Dimension | US (Dodd-Frank SEF) | EU (MiFID II MTF / OTF) | Japan (FIEA ETP) |
|---|---|---|---|
| **Mandatory venue type** | SEF（または DCM） | MTF または OTF | FSA 登録下の ETP |
| **Mandatory product scope** | 指定 swaps（USD IRS、EUR IRS、CDS indexes）に対する "Made Available to Trade" (MAT) determinations | 指定 derivatives に対する RTS 22 下の Trading Obligation | 指定標準化 OTC products（特に円 IRS） |
| **RFQ minimum** | 対象商品について RFQ-3 （少なくとも 3 dealers に request） | MiFID II RTS 下の RFQ rules | FSA / FIEA ETP rules 下の RFQ rules |
| **Pre-trade transparency** | SEF が real-time tradable quotes を公表 | MiFID II 下の pre-trade transparency（large-size waiver あり） | ETP 上の pre-trade transparency（block-trade exemptions あり） |
| **Post-trade transparency** | SDR (Swap Data Repository) への real-time reporting | APA (Approved Publication Arrangement) reporting | FSA ごとの publication arrangements を伴う trade-repository reporting（DTCC Japan） |
| **Block-trade exemption** | 指定閾値を超える block-trade rules | MiFID II 下の large-in-scale waiver | FSA / FIEA rules 下の block-trade exemption |
| **Cross-border equivalence** | 外国 venue に対する substituted compliance / comparability（判定がある場合） | third-country venues に対する equivalence（判定がある場合） | EMIR / Title-VII equivalence（付与される場合） |
| **Voice-証券仲介 role** | SEF rule 後、対象商品では縮小 | MiFID II 後、対象商品では縮小 | とくに非標準 / ブロックでなお重要な残存役割 |
| **Dealer-count** | 多数の SEF が稼働し、実装後に一部統合 | 商品クラスごとの venue は少なめ | 日本向け ETP は集中した少数、voice-broker tier は引き続き重要 |

構造的な要点は、**日本の ETP regime は US SEF / EU MTF-OTF frameworks と機能的に整合しているが、どの取引を電子的に執行すべきかについては規則上の規定が弱く、counterparty 側の裁量をより多く残している**ことである。これが、同等商品について日本の trade count ベースの electronic-execution share が US より低く、ボイスブローカー経由の裾野が大きい理由の一つである。

## FSA dealer regulation

日本の OTC デリバティブ市場で活動する dealer banks は、FIEA の下で次のように規制される。

- **Type I FIBO (Financial Instruments Business 事業者)** — OTC derivatives intermediation を含む broker-dealer activity を対象とする。
- **Banking license**（銀行 entity component — [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]] 参照）— 銀行および証券 entity の双方を運営する megabank-affiliated dealers 向け。
- **JSDA membership** — 自主規制上の conduct supervision。
- **JSCC membership** — clearing-eligible products 向け。

FSA dealer regulation は次を対象とする。

- **Capital adequacy** — OTC derivative exposure について、銀行 entity には Basel framework、証券 entity には FIEA capital rules に対応。
- **Risk management** — internal models、limits、governance。
- **Customer protection** — suitability rules、disclosure requirements、retail-end-user OTC derivative sales を含む conduct-of-business rules。
- **Market-conduct supervision** — market abuse、manipulation、conflicts of interest の surveillance。

Customer-protection layer は、dealer banks が **corporate-end-user clients**（[[finance/japan-corporate-fx-and-rate-hedge-policy|FX and rate exposure]]向け treasury hedges）や **retail / small-business clients**（embedded derivatives を含む structured products）に OTC derivatives を販売する場面で特に重要である。十分に sophisticated でない end-users への複雑な OTC structures の mis-selling という歴史的事案が、FSA conduct rules の段階的な厳格化を促してきた。

## 関連項目

- [[derivatives/INDEX]]
- [[derivatives/otc-clearing-jp-trade-repository]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/dealer-bank-derivatives-revenue-mix]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/nikkei-vix-jpx-vi-equivalent]]
- [[derivatives/equity-volatility-hedging-corporates-japan]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/osaka-exchange]]
- [[securities/tokyo-stock-exchange]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-prime-brokerage-and-institutional-financing-matrix]]
- [[money-market/tanshi-company-business-model]]
- [[financial-regulators/japan-exchange-group]]
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/smbc-nikko]]
- [[securities-firms/mizuho-securities]]
- [[securities-firms/goldman-sachs-japan]]
- [[securities-firms/morgan-stanley-japan]]
- [[foreign-financial-institutions/jpmorgan-japan]]
- [[foreign-financial-institutions/citigroup-japan]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[INDEX|FinWiki index]]

## 出典

- FSA, English-language pages on FIEA framework, ETP registration, and OTC derivatives supervision.
- FSA, Financial Instruments Business Operators registry (fibo.pdf).
- BOJ, payment / market — OTC derivatives execution statistics.
- Tradeweb, regulated-platforms overview (Japan ETP scope reference).
- Bloomberg, electronic-trading services overview.
- TP ICAP (parent of ICAP / Tullett Prebon), BGC Brokers, and Tradition group corporate pages for voice-broker franchise scope.
- JPX / OSE / TSE, listed-derivatives execution rules (for comparison boundary).
- ISDA, SwapsInfo and trade-execution analysis publications.
