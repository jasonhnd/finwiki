---
source: banking/trust-bank-fee-structure-comparison
source_hash: afb3190ea2408f2a
lang: ja
status: machine
fidelity: ok
title: "信託銀行手数料体系比較"
translated_at: 2026-06-18T23:33:48.339Z
---

# 信託銀行手数料体系比較

## ウィキ上の位置づけ

本エントリは [[banking/INDEX|banking index]] の配下に位置し、業務モデルのディープダイブを補完するものである — [[banking/master-trust-bank-operating-model|Master Trust Bank operating model]]、[[banking/custody-bank-operating-model|カストディ銀行 operating model]]、[[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and カストディ銀行 landscape]]、陣営横断マトリックス [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|Japan trust bank vs global custodian comparison matrix]]、業務比較 [[banking/trust-bank-custody-operating-comparison|trust-bank カストディ operating comparison]] と併せて読むこと。エンティティページ [[trust-banks/master-trust-bank|MTBJ]]、[[trust-banks/custody-bank|CBJ]]、[[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]]、[[trust-banks/sumitomo-mitsui-trust|SMTB]]、[[trust-banks/mizuho-trust-bank|Mizuho Trust]]、[[trust-banks/smbc-trust-bank|SMBC Trust]]、[[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]]、[[foreign-financial-institutions/state-street-japan|State Street Japan]]、[[foreign-financial-institutions/jpmorgan-japan|JP Morgan Japan]] と組み合わせること。決済レールのコンテキストについては [[banking/jasdec-settlement-operations|JASDEC 決済 operations]] を参照のこと。機関投資家コンテキストについては [[finance/japan-listed-financial-groups-investable-universe|Japan listed financial groups investable universe]] を参照のこと。

## TL;DR

日本における信託銀行の手数料エコノミクスは、三つのドライバーによって支配される。すなわち、証券カストディおよび投信受託における AUC-bps プライシング、長期マンデートにおける年金信託管理手数料、そしてフルサービス信託銀行側における不動産信託手数料である。詳細な手数料スケジュールはおおむね非公開であり — 株主連結開示と個別の投信目論見書（信託約款）からの集計レベルの推論のみが可能である。6 の日本の信託銀行（MTBJ、CBJ、MUFG 信託、SMTB、みずほ信託、SMBC 信託）と 4 のグローバルカストディアン（BNY Mellon、State Street、Citi、JPM）にわたって、構造的なプライシングモデルは類似している — AUC bps + 取引ごとの手数料 + レベニューシェア型の貸株 — が、その構成比とプライシングパワーは顧客セグメントによって大きく異なる。国内のカストディ専業（MTBJ、CBJ）はボリューム上で低い bps をアンカーする; フルサービス信託銀行は高マージンの不動産／年金／相続手数料をカストディとバンドルする; グローバルカストディアンはクロスボーダー + ICSD 接続性に対して相対的なプレミアムを課す。マンデートレベルのプライシングは公開非開示である; したがって本エントリの手数料規模の詳細はエンティティ固有の事実ではなく業界レベルの推論であり、`.opinions/banking/trust-bank-fee-structure-comparison.md` に隔離されている。

## 1. 機関位置

| Entity | Category | Public AUC anchor | Listing | Granular fee disclosure |
|---|---|---|---|---|
| [[trust-banks/master-trust-bank|MTBJ]] | JP カストディ専業 specialist | ~¥770兆円 (2025-03末, MTBJ disclosure) | Non-listed | None at line-item; aggregated in MUFG / 4-shareholder consolidated |
| [[trust-banks/custody-bank|CBJ]] | JP カストディ専業 specialist | ~¥696兆円 (2025-03末, CBJ disclosure) | Non-listed | None at line-item; aggregated in SMTB / Mizuho-side consolidated |
| [[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]] | JP full-service trust bank | Trust assets in 100s of trillions; AUC + real-estate + pension | Subsidiary of [[megabanks/mufg|MUFG]] (listed) | Aggregated segment disclosure |
| [[trust-banks/sumitomo-mitsui-trust|SMTB]] | JP full-service trust bank | Trust assets in 100s of trillions | Subsidiary of [[trust-banks/sumitomo-mitsui-trust|SMT Holdings]] (listed) | Aggregated segment disclosure |
| [[trust-banks/mizuho-trust-bank|Mizuho Trust]] | JP full-service trust bank | Trust assets in 10s-100s of trillions | Subsidiary of [[megabanks/mizuho-fg|Mizuho FG]] (listed) | Aggregated segment disclosure |
| [[trust-banks/smbc-trust-bank|SMBC Trust]] | JP retail-PB-oriented trust bank | <¥10兆円 (PB / 富裕層 focus) | Subsidiary of [[megabanks/smbc-group|SMBC Group]] (listed) | Aggregated under retail / PB segment |
| [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]] | Global custodian — Japan unit | JP-specific AUC non-disclosed; parent ~$50tn AuC/A | Subsidiary of BNY Mellon (NYSE) | Parent-level aggregate only |
| [[foreign-financial-institutions/state-street-japan|State Street Japan]] | Global custodian — Japan unit | JP-specific AUC non-disclosed; parent ~$46.6tn AuC/A (2024-12) | Subsidiary of State Street (NYSE) | Parent-level aggregate only |
| [[foreign-financial-institutions/jpmorgan-japan|JP Morgan Japan]] | Global custodian — Japan unit | JP-specific AUC non-disclosed; parent ~$35tn+ AuC (end-2024) | Subsidiary of JPMorgan Chase (NYSE) | Parent-level aggregate only |
| [[foreign-financial-institutions/citigroup-japan|Citi Japan]] | Global custodian — Japan unit | JP-specific AUC non-disclosed; parent ~$26.3tn AuC/A (2024-09) | Subsidiary of Citigroup (NYSE) | Parent-level aggregate only |

### カストディ手数料のメカニクス

| Fee component | Pricing logic | Typical magnitude (industry inference, not entity-specific) |
|---|---|---|

### 年金信託管理手数料

| Component | Pricing logic | Magnitude inference |
|---|---|---|

### 証券投資信託管理手数料

| Component | Pricing logic | Source for public observation |
|---|---|---|
| Fund accounting / NAV calc | Bundled into 受託会社報酬 | Stated only as bundled rate |
| Distribution processing | Bundled | Not separately disclosed |

投信業界全体にわたって、受託会社報酬は通常、ファンドの総経費率のごく一部にすぎない — 経費率の大部分は信託銀行ではなくアセットマネージャー（運用会社報酬）と販売会社（販売会社報酬）に存在する。

### 不動産信託手数料（フルサービス信託銀行のみ）

| Component | Pricing logic | Magnitude |
|---|---|---|

このラインは MTBJ と CBJ には存在しない — カストディ専業は不動産信託を運営しない。

### 銀行横断の手数料エコノミーマトリックス（10 エンティティ）

| Fee dimension | MTBJ | CBJ | MUFG Trust | SMTB | Mizuho Trust | SMBC Trust | BNY JP | SS JP | JPM JP | Citi JP |
|---|---|---|---|---|---|---|---|---|---|---|
| Securities カストディ fee | Very low (utility scale) | Very low (utility scale) | Medium (full-service bundled) | Medium (full-service bundled) | Medium (full-service bundled) | High (PB-bundled, low volume) | Medium-high (cross-border premium) | Medium-high (cross-border premium) | Medium-high (cross-border premium) | Medium-high (cross-border premium) |
| 投信受託 admin fee | Low (utility scale) | Low (utility scale) | Low-medium | Low-medium | Low-medium | Limited line | Limited (JP-投信 not core) | Limited (JP-投信 not core) | Limited | Limited |
| Pension trust admin fee | Low at GPIF scale; medium at corp DB | Low at GPIF scale; medium at corp DB | Medium (bundled with front-office) | Medium (bundled with front-office) | Medium (bundled with front-office) | Limited | Medium (foreign-pension-side) | Medium (foreign-pension-side) | Medium (foreign-pension-side) | Limited |
| Real-estate trust fee | None | None | High (large real-estate trust book) | High (large real-estate trust book) | Medium-high | Limited (PB context only) | None (no JP real-estate trust) | None | None | None |
| Securities-lending agent fee | Revenue-share with beneficial owner | Revenue-share with beneficial owner | Revenue-share | Revenue-share | Revenue-share | Limited | Revenue-share (large agent-lender side) | Revenue-share (large agent-lender) | Revenue-share | Revenue-share |
| Cash-management spread | Small | Small | Larger (full balance-sheet) | Larger (full balance-sheet) | Larger | PB context | Large in $ context | Large in $ context | Large in $ context | Large in $ context |
| Inheritance / 遺言 fees | None | None | Yes (high-margin) | Yes (high-margin) | Yes | Yes (PB) | None | None | None | None |
| PB / wealth advisory fees | None | None | Yes | Yes | Yes | Core (high-margin) | UHNW only | UHNW only | UHNW only | UHNW only |

### プライシングパワー要約

| Service | Strongest pricing power | Reason |
|---|---|---|
| GPIF-scale domestic カストディ | MTBJ / CBJ | Utility scale + GPIF tender competition between the two |
| Mass-investor 投信受託会社 | MTBJ / CBJ | Volume utility, tight bps, but volume drives revenue |
| Corp-DB pension trust admin | MTBJ / CBJ / megabank trust arms | Mixed — utility specialists win on bps, full-service wins on bundling |
| Real-estate trust setup | MUFG Trust / SMTB / Mizuho Trust | Specialized + relationship-driven; no competition from カストディ専業 specialists |
| Inheritance / 相続 / 遺言 | MUFG Trust / SMTB / Mizuho Trust / SMBC Trust | High-margin wealth-management line; absent at カストディ専業 specialists and at global custodians |
| Cross-border / foreign-asset カストディ | BNY / State Street / JPM / Citi | Cross-border ICSD + sub-カストディ network premium |
| Securities lending (large institutional) | BNY / State Street / JPM (and MTBJ / CBJ on JP equity domestic flows) | Mixed; agent-lender scale wins |
| US-listed JP-securities (ADR) | BNY / Citi / JPM | ADR depository fees |

### 含意される手数料収益（非常に大まかな業界推論）

エンティティごとの詳細な個別項目手数料収益は公開非開示である。オーダーオブマグニチュード（桁数）の推論（業界レベルのみ、エンティティ固有の保証ではない）は以下のとおりである。

| Implied revenue per ¥100兆円 AUC at カストディ専業 specialist | Industry-rough inference (not entity-specific) |
|---|---|
| If average カストディ bps = 0.5 bp/year | ¥50億円 / year revenue |
| If average カストディ bps = 1 bp/year | ¥100億円 / year revenue |
| If average カストディ bps = 2 bps/year | ¥200億円 / year revenue |

これらの仮想的な bps を MTBJ / CBJ の AUC に適用することで含意されるエンティティごとのグロスカストディ収益は、業界レベルの推論にすぎず、開示された手数料ラインに帰属するものではない; その推論は `.opinions/banking/trust-bank-fee-structure-comparison.md` に隔離されている。

### 手数料トレンド

| Trend | Effect on trust-bank P&L |
|---|---|
| Passive-fund AUM growth | Volume up, per-bp down → modest net revenue growth, margin compression |
| Foreign-investor JP allocation growth | Foreign sub-カストディ revenue at MTBJ / CBJ tied to global-custodian fee schedules |
| NISA expansion (2024 onward) | Volume growth in 投信受託会社 fees |
| DC pension reform (2025 onward) | DC member-balance reporting volume growth |
| Real-estate market cyclicality | Volatile for full-service trust banks; absent for カストディ専業 |

### なぜ銀行ごとの詳細な手数料テーブルを外部に公表することが不可能なのか

| Reason | Impact |
|---|---|
| カストディ手数料はマンデート固有の契約である | 銀行ごとの単一のタリフは存在しない |
| グループ連結開示は多くの手数料ラインを集計する | カストディを他の信託銀行手数料から切り分けられない |
| 投信受託会社報酬は各信託約款でファンドごとにのみ開示される | 全ファンドにわたる手作業での集計が必要 |
| 年金信託管理手数料は個別に交渉される | GPIF を含む |
| グローバルカストディアンの日本ユニットは日本固有のラインを開示しない | 親会社レベルの集計のみ |
| 不動産信託手数料はディールごとに異なる | bp あたりの標準にベンチマークできない |

### 公開で観察可能なファンドごとの投信受託会社報酬構造化された公開データ研究にとって、主要なファンドファミリーにわたる投信受託会社報酬は最も観察可能なラインである。

| Asset manager family | 受託会社 (most common) | Typical 受託会社報酬 (annualized) |
|---|---|---|

厳密な研究では、文書化されたファンドごとの受託会社報酬を求めて主要ファンドの信託約款をスクレイピングすることになる — そのデータはファンドごとに公開されているが、集計には手間がかかる。

### 規制上の手数料制約

| Layer | Constraint |
|---|---|
| 信託業法の受託者責任ルール | 手数料は公正かつ開示されなければならない; 利益相反コントロール |
| 金商法投信運用報告書の開示 | 受託会社報酬を含むファンドレベルの手数料が開示されなければならない |
| 年金基金の受託者責任 | 手数料は年金受託者の受託者責任レビューの対象 |
| Stewardship Code | 任意; 可能な場合の透明な手数料開示を奨励 |
| FSA supervisory guidance | 一般的な合理性レビュー; 料率上限レジームなし |

### 会計上の視点

| Item | Entity that recognizes |
|---|---|
| カストディ／管理手数料を収益として | 信託銀行の P&L |
| カストディ／管理手数料を費用として | 資産保有者 / 投信ファンド |
| オフバランスシートの信託 AUC | 信託銀行のバランスシート上にない |
| オンバランスの決済口座残余 | 信託銀行のバランスシート（小規模） |
| 貸株のレベニューシェア | 信託銀行収益 + 受益者収益（契約ごとに分割） |

### 比較可能性の問題

| Problem | Effect |
|---|---|
| AUC 対 AuA の定義のばらつき | 「assets under カストディ」対「assets under administration」がエンティティ間で異なる方法で測定される; エンティティ間の AUC 数値は厳密には比較不可能 |
| アセットクラス横断のミックス効果 | あるエンティティのミックスウェイト（国内エクイティ／JGB／外国／投信）は別のエンティティのものと大きく異なる |
| 国内のみ 対グローバルの集計 | グローバルカストディアンは親会社レベルの数値を報告する; 日本固有のラインは不透明 |
| ファンドごとの投信受託会社手数料対 銀行ごとの集計 | ファンドごとの開示は手作業で集計可能だが公式には集計されていない |
| 不動産手数料収益のばらつき | フルサービス信託銀行はディール主導でばらつきのある不動産手数料を持つ |

### インフラ参加によるコスト側の手数料

| Infrastructure | Fee paid by trust bank (input cost) |
|---|---|
| [[banking/jasdec-settlement-operations|JASDEC]] participation + per-transaction | Fixed annual + per-ticket fee; published in JASDEC tariff |
| JSCC 清算 | 清算-membership cost + per-trade 清算 fee |
| BoJ JGB book-entry | BoJ system participation cost |
| BoJ-net cash 決済 | Per-transaction cost |
| 全銀ネット | Per-transaction cost |
| ICSD (via global custodians) | Pass-through global-カストディ fee |
| Voting platform (ICJ etc.) | Platform fee |

## Related

- [[banking/INDEX]]
- [[banking/master-trust-bank-operating-model]]
- [[banking/custody-bank-operating-model]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/japan-trust-bank-custody-map]]
- [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[banking/jasdec-settlement-operations]]
- [[banking/pension-trust-mandate-allocation-japan]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[trust-banks/master-trust-bank]]
- [[trust-banks/custody-bank]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mizuho-trust-bank]]
- [[trust-banks/smbc-trust-bank]]
- [[trust-banks/nochu-trust-bank]]
- [[foreign-financial-institutions/bny-mellon-japan]]
- [[foreign-financial-institutions/state-street-japan]]
- [[foreign-financial-institutions/jpmorgan-japan]]
- [[foreign-financial-institutions/citigroup-japan]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-securities-clearing-corp]]
- [[finance/japan-listed-financial-groups-investable-universe]]

## Sources

- Trust Companies Association of Japan: trust-bank explanation, trust-assets statistics.
- Master Trust Bank of Japan: official site and business overview; FY2024 results (AUC ~¥770tn, 2025-03末): https://www.mastertrust.co.jp/assets/pdf/financial/zm20250521.pdf
- Custody Bank of Japan: official site and business overview; 2025 disclosure (預り資産 ~¥696tn, 2025-03末): https://www.custody.jp/data/disclosure/pdf/disclosure202507.pdf
- MUFG, SMT Holdings, Mizuho FG, SMBC Group: investor relations financial disclosure.
- BNY Mellon, State Street, JPMorgan Chase, Citigroup: investor relations financial reports.
- State Street FY2024 results (AuC/A $46.6tn, 2024-12): https://investors.statestreet.com/investor-news-events/press-releases/news-details/2025/State-Street-Corporation-NYSE-STT-Reports-Fourth-Quarter-and-Full-Year-2024-Financial-Results/default.aspx
- Citigroup Q3 2024 results (Securities Services AuC/A $26.3tn, 2024-09): https://www.citigroup.com/rcs/citigpa/storage/public/Earnings/Q32024/2024pr-qtr3rslt.pdf
- J.P. Morgan Securities Services (AuC ~$35tn+, end-2024): https://www.jpmorgan.com/securities-services
- FSA: trust-business financial institution list.
- Individual fund 信託約款 / 目論見書 (where 受託会社報酬 is disclosed).
