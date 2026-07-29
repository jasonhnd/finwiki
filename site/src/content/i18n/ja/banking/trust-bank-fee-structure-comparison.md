---
source: banking/trust-bank-fee-structure-comparison
source_hash: d1c3d9e988fcac43
lang: ja
model: google-translate-guarded-line-sync+manual-review
status: machine
fidelity: ok
title: "信託銀行手数料体系比較"
translated_at: 2026-07-29T03:30:48.121Z
---

# 信託銀行手数料体系比較

## ウィキ上の位置づけ

本エントリは [[banking/INDEX|banking index]] の配下に位置し、業務モデルのディープダイブを補完するものである — [[banking/master-trust-bank-operating-model|Master Trust Bank operating model]]、[[banking/custody-bank-operating-model|カストディ銀行 operating model]]、[[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and カストディ銀行 landscape]]、陣営横断マトリックス [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|Japan trust bank vs global custodian comparison matrix]]、業務比較 [[banking/trust-bank-custody-operating-comparison|trust-bank カストディ operating comparison]] と併せて読むこと。エンティティページ [[trust-banks/master-trust-bank|MTBJ]]、[[trust-banks/custody-bank|CBJ]]、[[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]]、[[trust-banks/sumitomo-mitsui-trust|SMTB]]、[[trust-banks/mizuho-trust-bank|Mizuho Trust]]、[[trust-banks/smbc-trust-bank|SMBC Trust]]、[[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]]、[[foreign-financial-institutions/state-street-japan|State Street Japan]]、[[foreign-financial-institutions/jpmorgan-japan|JP Morgan Japan]] と組み合わせること。決済レールのコンテキストについては [[banking/jasdec-settlement-operations|JASDEC 決済 operations]] を参照のこと。機関投資家コンテキストについては [[finance/japan-listed-financial-groups-investable-universe|Japan listed financial groups investable universe]] を参照のこと。

## TL;DR

公開情報開示は、事業範囲と開示の可用性の比較をサポートしますが、信頼できる企業ごとの手数料や「価格設定力」ランキングをサポートするものではありません。委任レベルの監護権と年金の条件は通常、契約によるものです。投資信託報酬はファンドごとに目論見書や信託証書で確認可能です。リストに記載されている親会社はより広範なセグメントを報告しています。したがって、この公開ページには、観察可能な開示境界のみが記録されます。分析的な推定値は公開コーパスの外に残っています。

## 1. 機関位置

| Entity | Category | Public AUC anchor | Listing | Granular fee disclosure |
|---|---|---|---|---|
| [[trust-banks/master-trust-bank|MTBJ]] | JP カストディ専業 specialist | ~¥770兆円 (2025-03末, MTBJ disclosure) | Non-listed | None at line-item; aggregated in MUFG / 4-shareholder consolidated |
| [[trust-banks/custody-bank|CBJ]] | JP カストディ専業 specialist | ~¥696兆円 (2025-03末, CBJ disclosure) | Non-listed | None at line-item; aggregated in SMTB / Mizuho-side consolidated |
| [[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]] | JP full-service trust bank | Trust assets in 100s of trillions; AUC + real-estate + pension | Subsidiary of [[megabanks/mufg|MUFG]] (listed) | Aggregated segment disclosure |
| [[trust-banks/sumitomo-mitsui-trust|SMTB]] | JP full-service trust bank | Trust assets in 100s of trillions | Subsidiary of [[trust-banks/sumitomo-mitsui-trust|SMT Holdings]] (listed) | Aggregated segment disclosure |
| [[trust-banks/mizuho-trust-bank|Mizuho Trust]] | JP full-service trust bank | Trust assets in 10s-100s of trillions | Subsidiary of [[megabanks/mizuho-fg|Mizuho FG]] (listed) | Aggregated segment disclosure |
| [[trust-banks/smbc-trust-bank|SMBC Trust]] | 日本のリテール / PB 中心の信託銀行 | 10 兆円未満（PB / 富裕層中心） | [[megabanks/smbc-group|SMBC Group]]（上場）の子会社 | リテール / PB セグメントで集約開示 |
| [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]] | Global custodian — Japan unit | JP-specific AUC non-disclosed; parent ~$50tn AuC/A | Subsidiary of BNY Mellon (NYSE) | Parent-level aggregate only |
| [[foreign-financial-institutions/state-street-japan|State Street Japan]] | Global custodian — Japan unit | JP-specific AUC non-disclosed; parent ~$46.6tn AuC/A (2024-12) | Subsidiary of State Street (NYSE) | Parent-level aggregate only |
| [[foreign-financial-institutions/jpmorgan-japan|JP Morgan Japan]] | Global custodian — Japan unit | JP-specific AUC non-disclosed; parent ~$35tn+ AuC (end-2024) | Subsidiary of JPMorgan Chase (NYSE) | Parent-level aggregate only |
| [[foreign-financial-institutions/citigroup-japan|Citi Japan]] | Global custodian — Japan unit | JP-specific AUC non-disclosed; parent ~$26.3tn AuC/A (2024-09) | Subsidiary of Citigroup (NYSE) | Parent-level aggregate only |

出典: ^[MTBJ FY2024 results, https://www.mastertrust.co.jp/assets/pdf/financial/zm20250521.pdf; CBJ 2025 disclosure, https://www.custody.jp/data/disclosure/pdf/disclosure202507.pdf; State Street FY2024 results, https://investors.statestreet.com/investor-news-events/press-releases/news-details/2025/State-Street-Corporation-NYSE-STT-Reports-Fourth-Quarter-and-Full-Year-2024-Financial-Results/default.aspx; Citigroup Q3 2024 results, https://www.citigroup.com/rcs/citigpa/storage/public/Earnings/Q32024/2024pr-qtr3rslt.pdf.]

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

### エンティティ間の公開比較境界

| 比較フィールド | 国内保管のみの専門家 | フルサービスを提供する日本の信託銀行 | グローバルカストディアンの日本事業 |
|---|---|---|---|
| 法人と事業範囲 | 公式会社概要とFSAリスト | 公式会社概要とFSAリスト | FSA リストと現地の公式プロフィール |
| 保管・管理資産 | 公表された場合の実体開示 | 信託口座またはセグメントの開示。定義はさまざまです | 通常は親レベルです。日本限定の金額は欠品していることが多い |
| 委任料 | 通常、法人料金表としては公開されていません | 通常、法人料金表としては公開されていません | 通常、日本ユニットについては公開されません |
| 投資信託報酬 | 各ファンドの法定文書で確認可能 | 各ファンドの法定文書で確認可能 | 指定された受託者とファンドに応じて異なります |
| セグメント収益 | 非公開企業の開示は制限される場合がある | カストディのみの手数料ラインではなく、上場親セグメントの開示 | 日本のみではない親会社の証券サービスのレポート |
| 有効な結論 | 範囲と開示の有無 | 範囲と開示の有無 | 範囲と開示の有無 |

出典: ^[Trust Companies Association of Japan, https://www.shintaku-kyokai.or.jp/trust/trustbanks/; MTBJ and CBJ official disclosures; MUFG, SMT Holdings, Mizuho FG, BNY, State Street, JPMorgan, and Citigroup investor-relations pages listed in the frontmatter.]

### 手数料トレンド

| 監視するための観察 | 必要な公的証拠 |
|---|---|
| 保管・管理資産 | 比較可能な期間にわたって一貫して定義された事業体または親会社の開示 |
| 投資信託受託者報酬 | 各サンプルファンドのファンド目論見書/信託証書 |
| 証券サービス収益 | 上場親セグメントの結果と記載された周囲長 |
| 年金や不動産の信託活動 | 事業分野を特定する信託銀行または親会社の開示 |
| インフラコスト | 現在の JASDEC / JSCC / BoJ の料金表または参加書類 |

出典: ^[Official investor-relations, statutory fund, and market-infrastructure publications listed in this entry.]

### なぜ銀行ごとの詳細な手数料テーブルを外部に公表することが不可能なのか

| Reason | Impact |
|---|---|
| カストディ手数料はマンデート固有の契約である | 銀行ごとの単一のタリフは存在しない |
| グループ連結開示は多くの手数料ラインを集計する | カストディを他の信託銀行手数料から切り分けられない |
| 投信受託会社報酬は各信託約款でファンドごとにのみ開示される | 全ファンドにわたる手作業での集計が必要 |
| 年金信託管理手数料は個別に交渉される | GPIF を含む |
| グローバルカストディアンの日本ユニットは日本固有のラインを開示しない | 親会社レベルの集計のみ |
| 不動産信託手数料はディールごとに異なる | bp あたりの標準にベンチマークできない |

出典: ^[Trust Companies Association of Japan, https://www.shintaku-kyokai.or.jp/; official entity and parent disclosures listed in the frontmatter.]

### 公開で観察可能なファンドごとの投信受託会社報酬構造化された公開データ研究にとって、主要なファンドファミリーにわたる投信受託会社報酬は最も観察可能なラインである。

構造化された公的データ調査の場合、主要なファンドファミリー全体の投信受託会社報酬が最も観察しやすい線です。

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

出典: ^[FSA trust-business financial-institution list, https://www.fsa.go.jp/menkyo/menkyoj/kenei.pdf; Trust Companies Association of Japan, https://www.shintaku-kyokai.or.jp/.]

### 会計上の視点

| Item | Entity that recognizes |
|---|---|
| カストディ／管理手数料を収益として | 信託銀行の P&L |
| カストディ／管理手数料を費用として | 資産保有者 / 投信ファンド |
| オフバランスシートの信託 AUC | 信託銀行のバランスシート上にない |
| オンバランスの決済口座残余 | 信託銀行のバランスシート（小規模） |
| 貸株のレベニューシェア | 信託銀行収益 + 受益者収益（契約ごとに分割） |

出典: ^[Official trust-bank and listed-parent accounting disclosures listed in the frontmatter.]

### 比較可能性の問題

| Problem | Effect |
|---|---|
| AUC と AuA の定義差 | 「カストディ資産」と「管理資産」は法人ごとに測定方法が異なり、法人間の AUC 数値は厳密には比較できない |
| アセットクラス横断のミックス効果 | あるエンティティのミックスウェイト（国内エクイティ／JGB／外国／投信）は別のエンティティのものと大きく異なる |
| 国内のみ 対グローバルの集計 | グローバルカストディアンは親会社レベルの数値を報告する; 日本固有のラインは不透明 |
| ファンドごとの投信受託会社手数料対 銀行ごとの集計 | ファンドごとの開示は手作業で集計可能だが公式には集計されていない |
| 不動産手数料収益のばらつき | フルサービス信託銀行はディール主導でばらつきのある不動産手数料を持つ |

出典: ^[Official entity and parent disclosures listed in the frontmatter; figures are comparable only when the issuer's definitions and reporting perimeter match.]

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
- 日本カストディ銀行：公式サイト、事業概要、2025 年開示（預り資産 約 ¥696tn、2025-03 末）：https://www.custody.jp/data/disclosure/pdf/disclosure202507.pdf
- MUFG, SMT Holdings, Mizuho FG, SMBC Group: investor relations financial disclosure.
- BNY Mellon, State Street, JPMorgan Chase, Citigroup: investor relations financial reports.
- State Street FY2024 results (AuC/A $46.6tn, 2024-12): https://investors.statestreet.com/investor-news-events/press-releases/news-details/2025/State-Street-Corporation-NYSE-STT-Reports-Fourth-Quarter-and-Full-Year-2024-Financial-Results/default.aspx
- Citigroup Q3 2024 results (Securities Services AuC/A $26.3tn, 2024-09): https://www.citigroup.com/rcs/citigpa/storage/public/Earnings/Q32024/2024pr-qtr3rslt.pdf
- J.P. Morgan Securities Services (AuC ~$35tn+, end-2024): https://www.jpmorgan.com/securities-services
- FSA: trust-business financial institution list.
- Individual fund 信託約款 / 目論見書 (where 受託会社報酬 is disclosed).
