---
source: structured-finance/japan-trust-beneficial-interest-vs-spv
source_hash: 0cb500335a27a5d0
lang: ja
status: machine
fidelity: ok
title: "信託受益権とSPVの比較（日本の証券化ビークル）"
translated_at: 2026-07-29T09:50:42.167Z
---
# 信託受益権とSPVの比較（日本の証券化ビークル）

## TL;DR

日本の証券化では、信託、法人ビークル、または両者を階層化した組み合わせが利用される場合がある。信託は法人ではなく法的関係であり、受託者は信託法に基づき、受益者のために信託財産を保有・管理する。信託受益権、債券、TK持分では、金融商品取引法（金商法）上の区分が異なる。税務、認識中止、倒産隔離、上場、適格機関投資家向けの取扱いは、ビークルの呼称を選ぶだけで自動的に生じるものではない。それぞれ、実際の証券、準拠資料、適用される法定要件によって決まる。

## Wiki内の参照先

| 確認したい内容 | 参照先 |
|---|---|
| SPVビークルの選択 | [[structured-finance/spv-tk-gk-vehicle-japan-tax]] |
| 市場概観 | [[structured-finance/japan-abs-market-overview]] |
| RMBSの取引ストラクチャー | [[structured-finance/japan-rmbs-issuance-structure]] |
| JHF MBSの信託ストラクチャー | [[structured-finance/jhf-mbs-mechanics]] |
| CMBSのストラクチャー | [[structured-finance/japan-cmbs-issuance-structure]] |
| ドメイン索引 | [[structured-finance/INDEX]] |

## 1. 証券化ビークルとしての信託受益権

[信託法](https://laws.e-gov.go.jp/law/418AC0000000108)は法的関係を定める。以下の表に示す商業条件は、特定取引の資料で確認する必要がある。

| 要素 | 必要な根拠 |
|---|---|
| 信託 | 信託契約、準拠法、信託目的 |
| 受託者 | 特定の受託者、および当該業務に必要な権限 / 登録の根拠 |
| 信託財産 | 資産明細、譲渡条件、分別管理条件 |
| 受益権 | 権利、支払順位、譲渡制限、募集条件 |
| 受益者 | 特定の保有者区分および適用される税務 / 規制上の事実関係 |

信託は法的関係であり、法人ではない。他のSPCが関与するかどうかは、取引上の事実である。

## 2. 資産と譲渡に関する根拠

[三菱UFJ信託銀行の金銭債権信託の仕組み](https://www.tr.mufg.jp/houjin/shisan/saiken.html)は、一つの信託の仕組みを例示している。以下の表は、その例を普遍的な証券化ストラクチャーとして扱わずに確認すべき項目を示す。 ^[MUFG Trust and Banking, "Monetary-claim trust flow": https://www.tr.mufg.jp/houjin/shisan/saiken.html; scope: settlor, trustee, beneficiary, asset-transfer and administration flow; reviewed 2026-07-29.]

| 項目 | 特定取引について必要な根拠 |
|---|---|
| 委託者 / オリジネーター | 信託契約および資産譲渡資料 |
| 対象資産 | 適格基準、基準日、資産明細 |
| 譲渡 / 対抗要件 | 適用契約、通知 / 同意 / 登記および法的分析 |
| サービシング / 管理 | 委任、口座、交代条項 |
| キャッシュフローの支払順位 | 受益者の権利、費用、分配、損失配分 |

信託という呼称から、市場での優位性、トランシェ化、特定資産クラスでの利用を推測してはならない。

## 3. 信託と法人を階層化したストラクチャー

[信託法](https://laws.e-gov.go.jp/law/418AC0000000108)と[資産の流動化に関する法律](https://laws.e-gov.go.jp/law/410AC0000000105)は、それぞれ別の法的形態を定める。以下の組み合わせには、特定取引の資料が必要である。

| 主張するパターン | 必要な根拠 |
|---|---|
| 信託のみ | 信託契約、受益権の条件、募集資料 |
| 信託とGK / TK | 信託譲渡に加え、GKの設立、TK契約、募集資料 |
| 信託とTMK | 信託契約、TMKの計画、取得資料、特定社債 / 出資の条件 |
| 複数の信託 / オリジネーター | 各譲渡、集約、支払順位、利益相反に関する条項 |

取引母集団を定義しない限り、頻度、市場シェア、選好されるストラクチャーに関する結論は記載しない。

## 4. 信託とSPVの比較

[信託法](https://laws.e-gov.go.jp/law/418AC0000000108)、[金商法](https://laws.e-gov.go.jp/law/323AC0000000025)、[金融庁の証券分類ガイド](https://www.fsa.go.jp/policy/marketentry/guidebook/reference1.html)は、以下の表に示す法的区分および有価証券区分を裏付けている。取引固有の税務・会計上の結論は、この表の対象外である。

| 比較項目 | 信託受益権 | SPV（TK-GK / TMK / SPC） |
|---|---|---|
| 法的形態 | 信託関係。受託者が信託財産を保有する | GKやTMKなどの法人。TKは別個の契約上の投資層 |
| 税務 | 信託類型、受益者の地位、所得区分によって異なる | ビークルおよび関係する損金算入 / 分配要件の充足によって異なる |
| 資産譲渡 | 受託者への信託譲渡 | SPVへの売却 |
| 資産の分離 | 信託財産には信託法上の分別管理規則が適用される | 倒産隔離には、当該取引で採用する法定・契約上の一式が必要 |
| 投資家が保有する証券等 | 受益権 | 債券、優先出資、TK持分その他の有価証券等 |
| 金商法上の区分 | 一般に第2 項のみなし有価証券 | 債券は一般に第1項、TK / 集団投資スキーム持分は一般に第2項 |
| 公募または私募の経路 | 募集と証券等によって決まる | 募集と証券等によって決まり、TMKであるだけでは債券の上場を意味しない |
| 運営主体 | 受託者が信託を管理し、サービシングを委任する場合がある | 取締役 / アセットマネージャー / サービサーがビークル資料に基づいて行動する |
| 必要な根拠 | 信託契約、譲渡資料、募集条件、税務分析 | 設立資料、該当する場合は資産流動化計画、募集条件、税務分析 |

## 5. 商品利用に関する主張

[金融庁の証券分類ガイド](https://www.fsa.go.jp/policy/marketentry/guidebook/reference1.html)および特定取引の資料は、以下の根拠確認ルールを支持している。

| 主張 | 最低限必要な根拠 |
|---|---|
| RMBSが信託を利用する | 特定の信託、住宅ローン譲渡、募集資料 / 格付資料 |
| オート / 消費者ABSがGK-TKを利用する | 特定の発行体、資産譲渡、TK契約、募集資料 |
| CMBSがTMKと信託受益権を利用する | 特定のTMK計画、信託契約、募集資料 |
| 信託の方が安価 / 簡便である | 対応する取引の費用・手続に関する根拠 |
| ストラクチャーが税務上透明である | 現行税法、信託 / ビークルの区分、取引の事実関係 |

本ページでは、いずれの資産クラスにも既定のビークルを割り当てない。

## 6. 複合ストラクチャーの確認

[信託法](https://laws.e-gov.go.jp/law/418AC0000000108)、[資産の流動化に関する法律](https://laws.e-gov.go.jp/law/410AC0000000105)、実際の取引資料に基づき、以下を確認する必要がある。

| 層 | 必要な根拠 |
|---|---|
| 資産信託 | 委託者、受託者、財産、受益者、譲渡 |
| 法人保有者 | 法的主体、目的、ガバナンス、取得 |
| 資金調達 | 債券、出資、TKまたは融資の条件および支払順位 |
| 募集 / 譲渡 | 金商法上の区分、募集経路、制限 |
| 税務 / 会計 | 各層、投資家の事実関係、連結、認識中止 |

## 7. 編集上の境界

- 信託受益権が自動的にシニア、メザニン、劣後に区分されると記載しない。
- 日付が明確な母集団がない限り、信託、GK-TK、TMKを支配的または標準的なビークルと記載しない。
- ビークルの呼称から、上場、QII限定、税務上のパススルー、倒産隔離を推測しない。

## 8. JHF MBSの信託との比較

JHFの仕組みは、シニア / 劣後の資本構成を発行する一般的な信託ではない。[JHFの公式FAQ](https://www.jhf.go.jp/english/mbs_faq.html)は、第三者受益信託により担保される資産担保型の機構債を説明している。受益権行使事由の発生前は、JHFが元利金を適時に支払う義務を負う。事由発生後は債券が償還され、信託プールを裏付けとする受益権に置き換えられる。通常の月次MBSは、事由発生後の受益権に超過担保を使用するが、JHFのグリーンMBSは超過担保を設定しない明示的な例外である。[[structured-finance/jhf-mbs-mechanics]]を参照する。

## 9. 税務上の透明性に関する仕組み

[所得税法](https://laws.e-gov.go.jp/law/340AC0000000033)および[法人税法](https://laws.e-gov.go.jp/law/340AC0000000034)に照らし、税務上の結論を出す前に信託類型と納税者の事実関係を特定する必要がある。このため、以下の表は確認チェックリストとして用いる。

| 税務上の論点 | 必要な根拠 |
|---|---|
| 信託設定 / 資産譲渡 | 資産種別、譲渡形態、対価、適用される所得税・消費税・登録税・取得税の規則 |
| 信託所得 | 法定の信託類型、受益者の地位、準拠する信託契約 |
| 受益者への分配 | 受益者の居住地・納税者区分、所得区分、源泉徴収、租税条約の事実関係 |
| 信託終了 | 資産分配、税務上の取得価額、適用法令に基づく損益への影響 |

この表はチェックリストであり、税務意見ではない。ルックスルーの取扱いを主張する前に、適用される信託類型、受益者の居住地と地位、所得種類、譲渡関連税、取引資料を確認する必要がある。

## 10. 規制上の取扱い

[金融庁の金商法上の証券区分ガイド](https://www.fsa.go.jp/policy/marketentry/guidebook/reference1.html)および[資産の流動化に関する法律](https://laws.e-gov.go.jp/law/410AC0000000105)は、以下の区分と届出範囲を裏付けている。

| 項目 | 信託受益権 | SPV債券 |
|---|---|---|
| 金商法上の区分 | 信託受益権は一般に第2 項のみなし有価証券 | 債券は一般に第1 項有価証券。TK持分は一般に第2 項のみなし有価証券 |
| 募集経路 | 公募 / 私募の状況は募集条件によって決まる | 同左。TMKの設立だけでは募集経路は決まらない |
| 投資家制限 | QII限定の取扱いは、関係する私募要件を満たす場合に限り適用される | 同左。ビークル名からQII制限を推測しない |
| 規制上の手続 | 受託者の免許 / 登録は、受託者と実際に行う事業によって異なる | TMKは資産流動化法が求める届出と資産流動化計画の提出を行う。これは一律の金融庁登録を意味しない |

いずれの証券も、実際の募集が適用される金商法上の要件を満たす場合に限り、私募経路を利用できる。開示と投資家制限は、実際の証券と募集について別途判断する必要がある。

## 関連ページ

- [[structured-finance/INDEX]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax]]
- [[structured-finance/japan-abs-market-overview]]
- [[structured-finance/japan-rmbs-issuance-structure]]
- [[structured-finance/japan-cmbs-issuance-structure]]
- [[structured-finance/jhf-mbs-mechanics]]
- [[structured-finance/auto-loan-abs-japan-toyota-honda]]
- [[structured-finance/consumer-loan-abs-japan-card-issuer]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[banking/INDEX]]
- [[banking/master-trust-bank-operating-model]]

## 出典

- [Trust Act](https://laws.e-gov.go.jp/law/418AC0000000108).
- [Financial Instruments and Exchange Act](https://laws.e-gov.go.jp/law/323AC0000000025).
- [Income Tax Act](https://laws.e-gov.go.jp/law/340AC0000000033).
- [Corporation Tax Act](https://laws.e-gov.go.jp/law/340AC0000000034).
- [FSA, examples of FIEA paragraph-1 and paragraph-2 securities](https://www.fsa.go.jp/policy/marketentry/guidebook/reference1.html).
- [MUFG Trust and Banking, monetary-claim trust flow](https://www.tr.mufg.jp/houjin/shisan/saiken.html).
- [JHF, FAQs about MBS](https://www.jhf.go.jp/english/mbs_faq.html).
