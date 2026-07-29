---
source: real-estate-finance/japan-cmbs-rmbs-securitization
source_hash: 96adcdb1e9910d3c
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "日本 CMBS および RMBS 証券化市場"
translated_at: 2026-07-29T00:00:00.000Z
---

# 日本 CMBS および RMBS 証券化市場

## TL;DR

日本のモーゲージ担保証券化市場には、JHF MBS、民間 RMBS、CMBS がある。規模、発行体構成、構造、格付、販売先は、期間を明示して現行 JHF、JSDA、案件開示から測定する。本ページは JHF の支払メカニズムと案件固有の確認項目を説明するもので、現在の市場シェアや支配的な私募フランチャイズを主張しない。

## Wiki ルート

本項目は [[real-estate-finance/INDEX|real-estate-finance index]] の下に位置し、証券化に関連する文脈へ案内する。[[real-estate-finance/j-reit-market-overview|J-REIT market overview]]、[[real-estate-finance/gk-tk-bond-real-estate-spv|GK-TK bond real-estate SPV]]、[[real-estate-finance/real-estate-bridge-fund-japan|real-estate bridge fund]] は隣接ビークルの参照先としてのみ用いる。鑑定または LTV は価値定義を仮定せず、対象案件と [[real-estate-finance/japan-real-estate-appraisal-methodology|Japan real-estate appraisal methodology]] を読む。JHF MBS は [[policy-finance/japan-housing-finance-agency|JHF]] を主な参照先とする。[[banking/japan-master-trust-and-custody-bank-landscape|Japan master-trust and custody bank landscape]]、[[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]]、[[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM overview]] は文脈にすぎず、対象案件の受託者、投資家基盤、経済性を立証しない。

### 非常に異なるスケールの 2 つのストランド

日付付きの市場スナップショットは、JSDA 証券化市場調査、現行 JHF 開示、案件書類から再構築する。年間発行、累計発行、残高を混同せず、過去のレンジを将来へ延長しない。

表の出典注記：本表は再構築マップであり、市場規模の推計ではない。数値を入れる際は、JSDA / JHF の正確なファイル、期間、単位、ストック / フロー定義を引用する。^[出典: https://www.jsda.or.jp/shiryoshitsu/toukei/doukou/index.html および https://www.jhf.go.jp/about/investor/shisan_tanpo/index.html.]

| Strand | 年間発行フィールド | 残高フィールド | 構造の確認 |
|---|---|---|---|
| **RMBS** | 対象期間を取り出し、出典が許す範囲で JHF MBS と民間 RMBS を分離する | 出典の基準日と範囲を用いる | JHF MBS と民間構造を分け、対応するデータなしにシェアを推定しない |
| **CMBS** | 対象期間と出典分類を取り出す | 出典の基準日と範囲を用いる | シングルボロワー、コンデュイット、その他の分類は案件証拠からのみ行う |

選択した期間で RMBS と CMBS に差がある場合は、測定した差を報告した上で候補要因を検証する。JHF 公表資料は JHF 自身の発行メカニズムを立証できるが、民間 CMBS の発行差や代替ファイナンスによる「吸収」を立証しない。

### 歴史的アーク

- 法制史は、対象構造に関連する正確な法令、施行日、経過措置を引用する。
- 発行・損失の歴史は、定義した JSDA 系列と対象格付 / 案件報告を用い、危機というラベルから因果や投資家撤退を推定しない。

### JHF Monthly Pass-Through MBS

以下の支払・担保メカニズムは JHF FAQ の説明に従う。

表の出典注記：本表は JHF FAQ の Q1、Q4、Q5、Q8、Q10 に従う。商品条件と残高は現行の募集・投資家向け書類でも確認する。日本政府保証または暗黙保証を意味しない。^[出典: https://www.jhf.go.jp/english/mbs_faq.html.]

| Feature | JHF MBS reading |
|---|---|
| 発行体 | [[policy-finance/japan-housing-finance-agency|Japan Housing Finance Agency]] |
| 担保 | フラット 35  固定金利住宅ローン、民間金融機関により組成され JHF が買い取り |
| 受益権行使事由前の支払義務 | JHF 自身が元利金を適時に支払う義務を負い、JHF は信用力が主に JHF の支払能力に依存すると説明する |
| 受益権行使事由後 | 定義された仕組みにより、信託された住宅ローンプールに対する受益権が行使可能となる。JHF は事由後の超過担保を説明している |
| 保証の境界 | JHF MBS を政府保証または暗黙保証と記述しない。JHF 自身の発行体地位と支払リスクの説明を読む |
| 決済 | [[securities/japan-securities-depository-center|JASDEC]] を介したブックエントリー |

### 民間 RMBS

民間 RMBS 構造を JHF プログラムから一般化しない。各案件について、発行体、オリジネーター、資産、移転、サービシング、ウォーターフォール、リテンション、格付、販売先を書類から特定する。

- 実際のクラス、劣後、リテンション、支払順位を確認する。
- プールが静的、リボルビング、シーズニング済み、固定金利、変動金利、混合のいずれかを確認する。
- 対象案件に起用された場合に限り、[[financial-regulators/jcr|JCR]]、[[financial-regulators/rating-and-investment|R&I]]、[[JapanFG/sp-global-ratings-japan|S&P]]、[[JapanFG/moodys-japan|Moody's]] の実際の報告を引用する。
- 報告されたプールファクターを、予定元本、期限前償還、デフォルト、回収、買戻し、適用される場合の差替えと照合する。

### RMBS の格付機関基準

表の出典注記：本表は公開格付方法論から作成した審査項目一覧であり、特定トランシェの格付結論ではない。適用機関、方法論版、プールデータ、ストレスは案件の格付書で確認する。^[出典: https://www.jcr.co.jp/en/rrinfo/meth_sf/ および https://www.r-i.co.jp/en/rating/about/credit-rating/.]

| Element | Criteria emphasis |
|---|---|
| プールのシーズニング | 格付機関の定義、層別、観測実績、ストレス処理を特定する |
| 組成時 LTV | 価値の基準日 / 定義、現在残高、データ品質、格付機関の損失率処理を確認する |
| DTI | 分子、分母、確認日、欠損データ処理、ストレスを確認する |
| 地理的集中 | 対象プールを測定し、起用格付機関が明示した集中処理を適用する |
| オリジネーター品質 | 対象オリジネーター / サービサーの審査を用い、機関カテゴリーで順位付けしない |
| ローン商品 | 対象ローンを分類し、格付報告が実際に引用した方法論を適用する |
| サービシング | マスター、プライマリー、バックアップ各サービサーの役割と交代条項を確認する |
| マクロオーバーレイ | 起用格付機関の日付付き失業、所得、住宅価格その他のシナリオを記録する |

### 2010

 後のシングルボロワー CMBS

シングルボロワー CMBS とする案件では、対象募集、信託、ローン、格付書類から各構造項目を確認し、一例から普及度を推定しない。

表の出典注記：本表は歴史的な構造テンプレートであり、現在この構造が支配的である証拠ではない。満期、トランチ、格付、物件範囲、受託者は案件固有で、5-7 年は例示にすぎない。^[出典: https://www.jsda.or.jp/shiryoshitsu/toukei/doukou/index.html および https://www.jcr.co.jp/en/rrinfo/meth_sf/.]

| Feature | Single-borrower CMBS reading |
|---|---|
| ボロワー | ボロワー、法的形態、資産範囲、[[real-estate-finance/gk-tk-bond-real-estate-spv|GK-TK SPV]]、TMK、その他のいずれかを確認する |
| ローン | リコース、担保、保証、コベナンツ、キャッシュ管理、執行権を確認する |
| 証券化 | 実際の売却、信託、受益権、発行体、ノートのキャッシュフローを追跡する |
| トランシェ | 実際のクラス、劣後、配分規則、LTV に用いる価値定義を記録する |
| 満期 | 契約日、延長条件、償却、借換えエクスポージャーを明示する。5–7 年は例示にすぎない |
| 格付 | 対象クラスに起用された機関と報告のみ引用する。クロスボーダー販売だけでは特定機関が必須にならない |
| 物件タイプ | 市場全体の物件リストを当てはめず、実際の担保と開発 / 賃貸リスクを特定する |
| トラスティー | 対象受託者とその職務を案件書類から特定する |

### コンデュイット CMBS — 休止状況の確認

特定期間についてコンデュイット CMBS が活発か休止中かを判断するには、「コンデュイット」を定義し、JSDA と案件データで該当案件を数え、基準日を示す。候補要因には別個の証拠が必要である。

1. 銀行バランスシートローンと証券化ローンの同日付のオールイン価格・条件を比較する。金利カーブのラベルだけでは代替を立証しない。
2. [[real-estate-finance/j-reit-market-overview|J-REIT]] による代替は、吸収を推定せず、対応するファイナンス・取引データで検証する。

### CMBS の格付機関基準

| Element | Criteria emphasis |
|---|---|
| 鑑定 | 対象鑑定、鑑定士、日付、価値定義、適用される国土交通省枠組み、依拠条件を特定する。「JREI-compliant appraisal」という規則はない |
| キャップレート | 鑑定・格付報告が実際に用いたキャップレート証拠とストレスを記録する。JREI 調査が当然に入力となるものではない |
| DSCR | 起用格付機関が明示したシナリオで定義済みデットサービスカバレッジレシオを再計算する |
| テナント集中 | 実際の賃料、満了、テナント信用、更改、代替前提を測定する |
| 物件タイプ | 一般的な損失前提を転用せず、対象担保に起用格付機関の現行方法論を適用する |
| 地理的集中 | 実際のプールと方法論上の集中処理を測定する |
| スポンサー品質 | 報告が実際に考慮した支援、エクイティ、権利、実績、借換え前提のみ特定する |
| リファイナンスリスク | 契約満期と、格付機関の日付付き価値、キャップレート、金利、売却 / 借換えストレスを再現する |

### RMBS オリジネーター・ランドスケープ

表の出典注記：各行は役割カテゴリーであり、現在の市場シェアまたは当該カテゴリーの全機関が全役割を行う証拠ではない。期間固有の主張は JHF の現行 MBS 文書と JSDA 調査が優先する。^[出典: https://www.jhf.go.jp/about/investor/shisan_tanpo/index.html および https://www.jsda.or.jp/shiryoshitsu/toukei/doukou/index.html.]

| Originator | RMBS role |
|---|---|
| [[policy-finance/japan-housing-finance-agency|JHF]] | 現行 JHF 書類で JHF の発行と買取ローンの仕組みを確認する |
| メガバンク | 選択期間について、対象機関のオリジネーター、売主、サービサー、発行体、アレンジャー、投資家の役割を確認する |
| 地方銀行 | 対象機関と案件を確認し、機関類型から発行を推定しない |
| 信託銀行 | 対象案件でオリジネーター、受託者、サービサー、カストディアン、アレンジャーの役割を区別する |
| ノンバンク住宅ローンオリジネーター | 選択データから対象オリジネーターと数量を測定し、相対規模を仮定しない |

### CMBS オリジネーター・ランドスケープ

| Originator | CMBS role |
|---|---|
| メガバンクの法人不動産ファイナンスデスク | 対象案件から貸手 / オリジネーター / 売主の役割を確認する |
| 信託銀行の不動産ファイナンス部門 | 融資、信託、アレンジその他の役割と担当法人を確認する |
| 外資系銀行の日本支店不動産ファイナンスデスク | 対象支店、期間、案件、販売先を確認し、撤退サイクルを推定しない |
| メガバンクの証券子会社 | 募集書類からアレンジャー、引受、私募取扱、ディーラーの役割を確認する |

### アレンジャー / ディーラー・フランチャイズ

以下のリンク先は調査経路であり、リーグテーブルまたは集中度の証拠ではない。

| Dealer | Franchise reading |
|---|---|
| [[securities-firms/mufg-morgan-stanley-securities|Mitsubishi UFJ Morgan Stanley Securities]] | 役割を付す前に対象募集を引用する。[[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]] とのグループ関係は案件連携を立証しない |
| [[securities-firms/smbc-nikko-securities|SMBC Nikko Securities]] | 役割を付す前に対象募集を引用する。[[trust-banks/sumitomo-mitsui-trust|SMTB]] へのリンクから役割を推定しない |
| [[securities-firms/mizuho-securities|Mizuho Securities]] | 役割を付す前に対象募集を引用する。[[trust-banks/mizuho-trust-bank|Mizuho Trust]] とのグループ関係は案件連携を立証しない |

### 信託銀行トラスティーシップの経済性

CMBS / RMBS という名称から信託構造、資産移転、手数料プール、機関順位を推定しない。対象書類で、法的所有権、信託財産、受益権、発行体、受託者の職務、口座、手数料、移転メカニズムを追跡する。[[trust-banks/master-trust-bank|MTBJ]]、[[trust-banks/custody-bank|CBJ]]、[[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]] は文脈上の参照先であり、案件の証拠ではない。

## 5. 格付機関ランドスケープ

| Rating agency | JP CMBS / RMBS role |
|---|---|
| [[JapanFG/sp-global-ratings-japan|S&P Global Ratings Japan]] | 対象報告から起用、スケール、基準版、クラス、格付日を確認する。クロスボーダー販売でも当該機関が必須になるとは限らない |
| [[JapanFG/moodys-japan|Moody's Japan]] | 対象報告から起用、スケール、基準版、クラス、格付日を確認する |
| Fitch Japan | 対象公開報告から起用の有無を確認する。本ページの出典集合にないことはカバレッジが小さい証拠ではない |

### ドメスティックスケール対 グローバルスケール

| Aspect | Domestic-scale rating | Global-scale rating |
|---|---|---|
| 参照ユニバース | JP 発行体 / 商品ユニバース | グローバル発行体 / 商品ユニバース |
| ソブリンとの関係 | 格付機関の現行スケール定義とソブリン / 格付制約を読む | 格付機関の現行グローバルスケール定義とソブリン基準を読む |
| 用途 | 投資家マンデート、規制、方針、商品を確認し、格付スケールから用途を推定しない | 投資家マンデート、規制、方針、商品を確認する |
| JP CMBS / RMBS のカバレッジ | カバレッジを記述する前に、定義した期間の対象格付を数える | 同一期間・範囲の対象格付を数える |

### RMBS 投資家基盤

| Investor type | Demand reading |
|---|---|
| 生命保険会社 | 対象名称と日付を明示した開示から保有または配分を立証する。[[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM overview]] は文脈にすぎない |
| メガバンク (自己勘定) | 対象開示から保有、マンデート、規制上の取扱いを立証する |
| 地方銀行 | 対象開示から保有と目的を立証する |
| アセットマネージャー | 対象開示からファンド、マンデート、保有日、商品を立証する |

### CMBS 投資家基盤

| Investor type | Demand reading |
|---|---|
| 生命保険会社 | 対象開示から参加、クラス、金額、日付を立証する |
| 地方銀行 | 対象開示から参加、クラス、金額、日付を立証する |
| アセットマネージャー | 対象開示からファンド、マンデート、クラス、金額、日付を立証する |
| 外国人投資家 | 法域、クラス、販売経路、日付を立証し、グローバルスケール格付から参加を推定しない |

## Related

- [[real-estate-finance/INDEX]]
- [[real-estate-finance/j-reit-market-overview]]
- [[real-estate-finance/top-10-j-reit-overview-matrix]]
- [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison]]
- [[real-estate-finance/gk-tk-bond-real-estate-spv]]
- [[real-estate-finance/real-estate-bridge-fund-japan]]
- [[real-estate-finance/japan-real-estate-appraisal-methodology]]
- [[real-estate-finance/j-reit-foreign-investor-ownership]]
- [[policy-finance/japan-housing-finance-agency]]
- [[policy-finance/INDEX]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[banking/master-trust-bank-operating-model]]
- [[banking/INDEX]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[insurance/INDEX]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mizuho-trust-bank]]
- [[financial-regulators/jcr]]
- [[financial-regulators/rating-and-investment]]
- [[JapanFG/sp-global-ratings-japan]]
- [[JapanFG/moodys-japan]]
- [[securities/japan-securities-depository-center]]
- [[finance/INDEX]]

## Sources

- ARES (不動産証券化協会): 日本の不動産証券化市場サマリー統計。
- JPX: 証券化商品の開示サーフェス。
- JSDA (日本証券業協会) 証券化市場の動向調査: 原資産タイプ別の年次証券化発行 — https://www.jsda.or.jp/shiryoshitsu/toukei/doukou/index.html
- 住宅金融支援機構: 機関および Monthly Pass-Through MBS の開示 — https://www.jhf.go.jp/about/investor/shisan_tanpo/index.html 、英語 MBS FAQ（Q1 / Q4 / Q5 / Q8 / Q10）— https://www.jhf.go.jp/english/mbs_faq.html 。
- JCR (日本格付研究所): ストラクチャードファイナンス格付基準と格付アクション。
- R&I (格付投資情報センター): ストラクチャードファイナンス格付基準。
- S&P Global Ratings: クロスボーダー・ストラクチャードファイナンス基準。
- Moody's: クロスボーダー・ストラクチャードファイナンス基準。
- BoJ: 証券化ストックに関連する集計資金フロー統計。
