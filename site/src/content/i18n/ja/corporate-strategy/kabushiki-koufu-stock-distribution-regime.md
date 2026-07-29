---
source: corporate-strategy/kabushiki-koufu-stock-distribution-regime
source_hash: 0896748bd38bd3c4
lang: ja
model: qwen3-4b-instruct-2507-4bit-guarded-full-sync+manual-review
status: machine
fidelity: ok
title: "株式交付（kabushiki kōfu）— 2021年施行の株式対価型買収制度"
translated_at: 2026-07-29T05:13:34.783Z
---

# 株式交付（kabushiki kōfu）— 2021年施行の株式対価型買収制度

## ウィキルート

この項目は[[corporate-strategy/INDEX|corporate-strategy INDEX]]の下に位置し、取引・ファイナンスコンテキストでは[[finance/INDEX|finance INDEX]]へルーティングされます。分割メカニズム再編との対比については[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]]を、配当側の並行構造については[[corporate-strategy/japan-kabushiki-bunpai-spinoff-regime|partial spinoff tax deferral]]を、オプションセットコンテキストについては[[corporate-strategy/spinoff-decision-tree-japan|spinoff decision tree Japan]]、公開入札代替案については[[finance/japan-tender-offer-process|Japan tender offer process]]を参照してください。

## TL;DR

**株式交付 (kabushiki kōfu)**は、**2021年会社法改正**により導入され、**2021-03-01**に施行された制度である。日本の株式会社が自社株式を対価として他の日本の株式会社の株式を取得し、対象会社を完全子会社ではない子会社とする。買収会社は対象会社株式と引き換えに、譲渡株主へ直接、自社株式を交付する。

これは、二つの既存の制度の間に位置している。

- **株式交換 (kabushiki kōkan, share exchange)** — 目的株式を**完全子会社**に変更；100%取得を必要とする
- **株式移転 (kabushiki iten, share transfer)** — 既存会社の上に**新しい持株会社**を設立する。持株会社化に用いる。

株式交付は両制度の間を埋める。買収会社が支配持分（例：50〜90%）を取得したい場合に、100%取得を強制せず株式を対価にできる。一定の要件を満たせば、譲渡株主は株式対価部分に対応する譲渡益の課税を**繰り延べる**ことができ、経済的には米国の「B reorganization」に近い。

## 1. なぜ2021 制度が創設されたのか

2021年以前、日本の買収会社が自社株式を使って国内対象会社を取得しようとすると、手続上の空白があった。

- 株式交換による取得が対象株式の100%を必要とする — 少数株式の維持を優先する場合、過剰な要求となる
- 譲渡株主への株式発行（現物出資）は複雑で、譲渡株主の税務処理にも不確実性があった
- 公開買付＋現金補償は可能だが、買収者側のバランスシートから現金を確保する必要がある
- 公開買付＋株式交換（公開買付＋株式交換）は2ステップの連続プロセスで、タイミングおよび課税上の摩擦が生じる

その結果、持合株式の解消、友好的なカーブアウト取得、株式対価を望むPE支援型ロールアップなどは、取引意図に合わない仕組みへ無理に当てはめる必要があった。法務省の2021年改正は、この空白を埋める**株式交付**を導入した。

## 2. メカニズム

| 項目 | 詳細 |
|---|---|
| 買収会社 | 日本の株式会社 |
| 対象会社 | 日本の株式会社 |
| 対価 | 買収会社の自社株式（現金・社債等との混合も可能だが、課税繰延べには株式部分が必要） |
| 取得後の所有権 | 対象会社が**子会社**となる（>50%が必要、100%未満の場合も可能） |
| 決議 | 買収会社株主総会の特別決議（3分の2水準） |
| 譲渡株主 | 各株主が個別に株式を譲渡するか判断し、**全株主の参加は不要** |
| 税務（譲渡株主） | 親会社株式部分の譲渡益は、80%対価価額要件や取引後の同族会社除外など法定要件を満たす場合に限り繰延べ可能 |
| 税務（取得側） | 適用される会社税規則に基づき決定；本表はすべての株式交付を「適格」とラベル付けしていない |
| 提出書類 | FIEAの開示対象となる場合には有価証券届出書等、通常のM&Aに関する提出書類 |

情報源：メカニズムおよび手順は会社法に従い、株主の税務処置はNTA No.1545 および財務省要旨に従う。 「子会社」は法的支配関係の結果であり、投票権および支配関係の事実に依存しない普遍的な算術的ショートカットとはならない。 ^[Sources: https://laws.e-gov.go.jp/document?lawid=417AC0000000086; https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1545.htm; https://www.mof.go.jp/tax_policy/summary/corporation/c06.htm.]

## 3. 3つの株主側の再編制度の比較

| メカニズム | 結果 | 株式対価 | 最低取得割合 | 使用例 |
|---|---|---|---|---|
| **株式交換 (kabushiki koukan)** | 対象会社が完全子会社となる | あり（現金／混合対価も可だが税務上の不利益あり） | 100% | 株式対価による完全取得 |
| **株式移転 (kabushiki iten)** | 現在の事業体を上回る新設持株会社が設立される | はい | 100%（各移転株式について） | 持株会社化または同等の合併 |
| **株式交付 (kabushiki koufu)** | 対象会社が子会社となる（完全子会社ではない） | あり（課税繰延べには株式部分が必要） | >50% | 株式対価による部分支配取得 |

情報源：法的効果は会社法に基づく要約である。課税繰延べは条件付きであり、いずれかの法的形式を選ぶだけで適用が確定するわけではない。^[Sources: https://laws.e-gov.go.jp/document?lawid=417AC0000000086; https://www.mof.go.jp/tax_policy/summary/corporation/c06.htm.]

決定木：

- 100%所有＋株式対価 → **株式交換**
- 持株会社（HoldCo）体制への移行 → **株式移転**
- 支配持分（50〜99%）＋株式対価 → **株式交付**

資産レベル（対株式レベル）の再編に関しては、[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割]]を参照ください。

## 4. 税務処理のメカニズム

譲渡株主は買収会社株式と、場合によっては現金・社債等を受け取る。税務処理は次のとおり。

| 対価 | 譲渡株主の税務処理 |
|---|---|
| 親会社株式部分 | 全要件を満たせば、親会社株式に対応する譲渡益を繰延べ可能 |
| 現金／その他財産部分 | 株式以外の対価に対応する譲渡益は繰延べ対象外 |

情報源：テーブルはNTA No.1545 および財務省の組織再編要旨に記載された株主の課税繰延べについての範囲に限定されている。^[Sources: https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1545.htm; https://www.mof.go.jp/tax_policy/summary/corporation/c06.htm.]

株式対価部分の課税繰延べに関する主な条件は次のとおり。

- 買収会社が自社株式（子会社株式ではない）を直接交付する
- 対象会社が会社法上の株式交付により買収会社の子会社となる
- 親会社株式は、総対価価額の少なくとも **80%** を占める
- 取引後の親会社が所定の同族会社除外に該当しない

80%対価価額要件と取引後の同族会社に関する除外は、同じ出典に記載されている。

## 5. 実務上の利用例

| 使用ケース | なぜ株式交付が適しているか |
|---|---|
| **友好的な部分支配取得** | 買収会社が60〜80%を取得しつつ、100%取得・スクイーズアウトを強制したくない |
| **相互株式保有の転換による戦略的提携** | 互いの少数株式保有を株式対価で支配株式に変換する |
| **IPO前の連結の準備** | 親会社が関連企業を子会社構造に連結し、IPO前に統合する |
| **相互株式保有の解消** | 過去の相互保有構造を、より明確な支配株式構造に置き換える |

出典：これらは法的メカニズムに基づく構造選定の仮説的構成であり、採用頻度または特定取引に関する主張ではありません。実現には2社の日本株式会社が存在し、すべての法的、税的、公開情報、競争に関する条件を満たす必要があります。^[Sources: https://www.moj.go.jp/MINJI/minji07_00214.html; https://laws.e-gov.go.jp/document?lawid=417AC0000000086.]

注：株式交付は**日本国内の株式会社間でのみ利用可能**です。国際的な株式交換による取得は、直接的な株式交付を用いるのではなく、通常[[finance/cross-border-m-a-japan|cross-border M&A Japan]]構造を使用します。

## 6. 操作要件

会社法第774条の2〜第774条の11に基づく株式交付手続：

1. **取得会社が株式交付計画（株式交付計画）を準備**し、対象、対価比率、条件を明記
2. **取得会社の取締役会が計画を承認**
3. **取得会社の本店で、株主総会の2週間前までに計画書類を事前備置**
4. **取得会社の株主総会で、特別決議により計画が可決**（2/3 閾値）
5. **対象株主への要請を行い、株式の譲渡を申し出させる（各株主は個別に判断）**
6. **譲渡を申し出た対象株主が条件に同意**
7. **取得会社が譲渡を申し出た対象株主に自社株式を交付**
8. **取得会社が譲渡された対象株式の所有権を取得**
9. **結果：譲渡された株式数が50%以上であれば、対象会社は子会社となる；譲渡株式数が50%未満であれば、株式交付は効力を生じない**

子会社化の閾値に達しない場合、株式交付全体が効力を生じない。これは、TOBの最低応募条件に似た「最低取得割合リスク」である。

## 7. TOBプラススクイーズアウト経路との比較

| Dimension | 株式交付 | TOB + スクイーズアウト |
|---|---|---|
| 対価 | 買収会社株式（条件付き課税繰延べ） | 通常は現金 |
| 持株結果 | 部分支配（>50% から <100%) へ） | 完全所有（100% を通じてスクイーズアウトにより） |
| 譲渡株主への課税 | 親会社株式部分は80%要件等を満たせば繰延べ | 現金譲渡は通常、譲渡益を認識 |
| 承認基準 | 買収会社株主の承認＋各譲渡株主の個別判断 | [[finance/japan-tender-offer-process|TOB process]]＋[[finance/japan-mbo-and-squeeze-out-process|squeeze-out]]の手続 |
| 時間軸 | 1ステップで統合処理 | 複数ステップ（TOB → スクイーズアウト） |
| 使用ケース | 株式対価による戦略的取得 | 現金資金による完全取得 |

出典：この内容は、会社法、NTA税ガイド、および一般的な公開買付けルートに基づく法的・評価比較である。特定の発行会社に対しては、いずれかのルートが利用可能または優位であると主張しているものではない。^[Sources: https://laws.e-gov.go.jp/document?lawid=417AC0000000086; https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1545.htm; https://www.fsa.go.jp/policy/kaiji/tob/index.html.]

TOB側の仕組みは[[finance/japan-tender-offer-process|Japan tender offer process]]、TOB後の非公開化ルートは[[finance/japan-mbo-and-squeeze-out-process|Japan MBO / squeeze-out process]]を参照。

## 8. 会社分割 + 株式分配（スピンオフ経路）との比較

株式交付は**取得**メカニズム（対象企業への出資）である。会社分割 + 株式分配（[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|kaisha bunkatsu]] + [[corporate-strategy/japan-kabushiki-bunpai-spinoff-regime|partial spinoff]] パス）は**売却**メカニズム（既存事業の分離）である。これらは企業再編マップの対照的な位置を占める。

| 方向 | メカニズム |
|---|---|
| 自社株式を用いて別法人の支配持分を取得 | 株式交付（本項目） |
| 自社株式を用いて別法人を100%取得 | 株式交換 |
| 既存会社の上に新しいHoldCoを設立 | 株式移転 |
| 事業の譲渡を子会社に分割により実施 | 会社分割（新設分割後に株式配当） |
| 子会社を分離しつつ親会社が少数持分を維持 | パーシャルスピンオフ（株式分配制度下） |
| 子会社の持分を残さないで除外 | スピンオフ（会社分割） |
| 現金で取得100% | TOB + 株式併合スクイーズアウト |

出典：テーブルは会社法のメカニズムを方向性を持つ地図として示している。各行は独自の税、証券、債権者、少数株主、および承認規則に subject されている。^[Sources: https://laws.e-gov.go.jp/document?lawid=417AC0000000086; https://www.mof.go.jp/tax_policy/summary/corporation/c06.htm.]

## 9. 反論

- 株式交付は2021年の導入後も、代替手法に比べて利用が限定的である。現金によるTOBが日本のM&Aで引き続き主流であることも一因である
- 課税繰延べの要件は技術的であり、専門家によるストラクチャリングが不可欠
- 購入企業側の株主に対して、既存株主に株式稀薄化が容認されない場合がある（手続き上は可能であっても）
- 外国買収側は直接株式交付を用いることができず（日本子会社または代替構造を経由して実施が必要）
- 50%の子会社化基準に達しなければ失敗するため、単純なTOBにはない実行リスクがある（TOBは構成によっては目標未達でも成立し得る）

## 10. 関連項目

- 株式交付の導入が、より多くの日本国内上場企業が完全取得TOBへの代替手段としてその価値を認識するにつれ増加するか？
- 今後のクロスボーダーM&A改革において、株式交付がどのように相互作用するか — 外国買収者向けに並行メカニズムを設ける可能性はあるか？
- 部分現金＋株式の考慮を必要とする取引において、どのようなハイブリッド構造が最適か？
- 取引後の少数株主保護措置（操りの対処、反対株主評価権）との関係はどのようなものか？
- PE支援型の日本国内買収において、創設者・管理層の株式を維持する手段として、株式交付が利用される可能性があるか？

## 関連

- [[corporate-strategy/INDEX|corporate-strategy INDEX]]
- [[corporate-strategy/japan-kabushiki-bunpai-spinoff-regime|partial spinoff tax deferral]]
- [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]]
- [[corporate-strategy/spinoff-decision-tree-japan|spinoff decision tree Japan]]
- [[finance/japan-tender-offer-process|Japan tender offer process]]
- [[finance/japan-mbo-and-squeeze-out-process|Japan MBO / squeeze-out process]]
- [[finance/japan-acquisition-finance|Japan acquisition finance]]
- [[finance/cross-border-m-a-japan|cross-border M&A Japan]]
- [[finance/japan-m-a-deal-process-comparison-matrix|Japan M&A deal-process comparison matrix]]
- [[finance/japan-cross-shareholding-unwinding-economics|Japan cross-shareholding unwinding economics]]
- [[INDEX|FinWiki index]]

## 出典

- Companies Act (会社法) provisions on 株式交付: https://laws.e-gov.go.jp/document?lawid=417AC0000000086
- 法務省 株式交付制度 解説: https://www.moj.go.jp/MINJI/minji07_00214.html
- 国税庁 法人税法基本通達: https://www.nta.go.jp/law/tsutatsu/kihon/hojin/01/01_04_05.htm
- 国税庁 No.1545「株式等を対価とする株式の譲渡に係る譲渡所得等の課税の特例」: https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1545.htm
- 財務省「組織再編税制に関する資料」: https://www.mof.go.jp/tax_policy/summary/corporation/c06.htm
- METI economic-affairs policy portal: https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/
- FSA English portal: https://www.fsa.go.jp/en/

---

> [!info] 校核状态
> confidence: **likely**. Statutory regime is fully effective since 2021-03; mechanism is settled. Tax-treatment specifics depend on case-by-case structuring. Adoption rate and future regime evolution remain to be observed.
