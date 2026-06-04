---
source: japanfg/hokenryo-sanshutsu-kiko
source_hash: a730db428a74a8e7
lang: ja
status: machine
fidelity: ok
title: "損害保険料率算出機構"
translated_at: 2026-06-02T14:25:12.422Z
---
# 損害保険料率算出機構

## 要約

GIROJ（損害保険料率算出機構）は、日本の損害保険業界における法定の保険料率算出機関である。 損害保険料率算出団体に関する法律（1948）に基づいて設立・認可され、機能的に異なる二つの制度を運用する。一つは、自動車保険・火災保険について会員保険会社が自社料率届出時の基準として使える **参考純率**、もう一つは、自賠責保険（CALI）と地震保険について参加保険会社が使用しなければならない **基準料率** である。 したがって GIROJ は [[financial-regulators/sonpo-kyokai|GIAJ]] の意味での単なる業界団体ではなく、特定種目で拘束力を持つ料率算出権限を付与された法定機関である。

## ウィキ上の位置づけ

この項目は [[JapanFG/INDEX|JapanFG index]] の下に置く。[[financial-regulators/sonpo-kyokai|General Insurance Association of Japan]] は損害保険側の業界団体、[[financial-regulators/seiho-kyokai|Life Insurance Association of Japan]] は生命保険側の比較対象、[[financial-regulators/sonpo-hosho-kiko|Non-Life Insurance Policyholders Protection Corporation of Japan]] は法定の契約者保護対応機関として併読する。制度的な背景は [[financial-licenses/INDEX]] と [[financial-licenses/insurance-license-and-solvency|insurance license and solvency route]]、より広い事業者群は [[insurance/INDEX]] に置く。

## 法的根拠・制度上の位置づけ

GIROJ は損害保険料率算出団体に関する法律（法律第193 号、1948年）に基づいて設立されている。[^riting-act] 同法は、金融庁が認可した料率算出団体に、特定の損害保険種目について参考純率と基準料率を算出する権限を与える。算出方法、データソース、料率届出は、保険会社向け監督指針に従って金融庁の審査対象となる。[^fsa-ins] 金融庁の保険分野の認可法人一覧でも、GIROJ は料率算出団体として掲載されている。[^fsa-licensed]

GIROJ は 2002 年、前身の損害保険料率算出団体と自動車保険料率算出団体の合併により発足し、火災・傷害等の料率算出と自動車保険の料率算出を一つの組織に統合した。 このため構造上は、[[financial-regulators/yokin-hoken-kiko|DICJ]] や保護機構と同じ法定機関側にあり、[[financial-regulators/sonpo-kyokai|GIAJ]] のような業界団体側ではない。

## 機能・対象範囲

GIROJ の公開概要では、業務は次のように整理されている:[^giroj-about]

1. **参考純率の算出** — 任意自動車保険と火災保険について、業界横断の集計データに基づき、単位エクスポージャー当たりの予想損害コストを算出する。会員保険会社は、自社の経費率や利潤を加えて料率を届け出る際、これを基準値として利用できるが、GIROJ の参考値に従う義務はない。
2. **基準料率の算出** — 自動車損害賠償責任保険（CALI / 自賠責保険）と地震保険について、拘束的な基準料率を算出する。CALI では、免許を受けたすべての引受会社が自動車損害賠償保障法に基づいて基準料率を使用する。地震保険では、GIROJ の料率が政府再保険スキームに接続される。
3. **損害データ収集と統計** — 対象種目横断の保険金支払データに関する業界中央データベースを運営し、統計・アクチュアリー分析を定期的な料率改定報告で公表する。
4. **損害査定 / 大規模災害対応** — 地震保険金請求の損害査定インフラを運営する。地震後には業界全体で調整された損害調査ロジスティクスが必要になる。
5. **調査研究と政策インプット** — 地震・台風・洪水などの自然災害損害モデル、自動車事故の発生頻度 / 損害額の傾向、保険料率規制に関する金融庁政策へのフィードバックについて、アクチュアリー調査を行う。

## 会員・ガバナンス

会員は、対象種目を引き受ける免許を持つ損害保険会社で構成される。[^giroj-members] 実務上は、この vault に収録される日本の損害保険会社のほぼ全てを含む。具体的には、ページがある場合の [[non-life-insurers/tokio-marine-nichido-fire|Tokio Marine & Nichido Fire]]、[[non-life-insurers/sompo-japan-insurance|Sompo Japan Insurance]]、[[non-life-insurers/aioi-nissay-dowa-insurance|Aioi Nissay Dowa Insurance]]、[[non-life-insurers/sony-insurance|Sony Insurance]]、[[non-life-insurers/au-insurance|au Insurance]]、[[non-life-insurers/sbi-insurance|SBI Insurance]]、[[non-life-insurers/sompo-direct|Sompo Direct]]、ペット保険サブセットの [[non-life-insurers/anicom-insurance|Anicom Insurance]]、[[non-life-insurers/sakura-insurance|Sakura Insurance]]、さらに自動車 / 火災 / 地震分野で営業する外資系損害保険会社である。

ガバナンスは同法に従う。非常勤者を長とする理事会、アクチュアリー委員会、任意自動車・自賠責・火災・地震といった種目別の業務部門が置かれる。各料率改定サイクルには金融庁の監督上のレビューが組み込まれている。

## 関連項目 industry adjacency

損害保険の構造では、GIROJ は法定の料率算出団体であり、[[financial-regulators/sonpo-kyokai|GIAJ]]（業界団体レイヤー）や [[financial-regulators/sonpo-hosho-kiko|Non-Life Insurance Policyholders Protection Corporation of Japan]]（法定の契約者保護バックストップ）とは異なるが補完関係にある。 生命保険側の対応物は [[financial-regulators/seiho-kyokai|LIAJ]]（業界団体）と [[financial-regulators/seimei-hokensha-hogo-kiko|Life Insurance Policyholders Protection Corporation of Japan]]（法定バックストップ）である。生命保険の価格付けは別の法定ルートの下でアクチュアリーによる死亡率手法に従うため、GIROJ に直接相当する生命保険側の機関はない。 The bank-side 法定 mutual backstop is [[financial-regulators/yokin-hoken-kiko|DICJ]]. For the rest of the industry-body / 法定-body stack see [[financial-regulators/zenginkyo|JBA]], [[financial-regulators/zenchugin-kyo|Regional Banks Association of Japan]], [[financial-regulators/dai2-chigin-kyo|Second Association of Regional Banks]], [[financial-regulators/zenshin-kyo|Zenshin-kyō]], [[financial-regulators/shintaku-kyokai|Trust Companies Association of Japan]], and [[financial-regulators/jsda|JSDA]].

## このページが重要な理由

GIROJ は、日本の自動車保険料率、火災保険料率、自賠責保険料率、地震保険料率が実際にどう動くかを理解するうえで、最も重要なアンカーとなる機関である。JapanFG の項目が「GIROJ 参考純率改定」や「自賠責保険料率改定」に触れながらルートアンカーを置かない場合、出典の所在が不明確になる。このページでは次を固定する:

- **二つの制度**: 参考純率（基準値であり拘束的ではない）と基準料率（自賠責・地震保険で拘束的）の区別。これは混同されやすい。
- **法定機関と業界団体の区別**: GIROJ は法定委任に基づく料率算出権限を持つが、[[financial-regulators/sonpo-kyokai|GIAJ]] は持たない。
- **保険種目ごとの対象範囲**: GIROJ が扱うのは任意自動車、自賠責、火災、地震であり、損害保険全体ではない。海上、傷害、賠償責任、多くの特殊種目は、GIROJ の参考料率なしに個別保険会社と再保険会社が相対で料率を設計する。
- **データプールの出所**: 参考純率は業界横断の集計データに依拠する。このため、独自料率を届け出る保険会社も含め、免許を受けた損害保険会社が参加する。

## 関連項目

- [[JapanFG/INDEX|JapanFG index]]
- [[financial-regulators/sonpo-kyokai|General Insurance Association of Japan]]
- [[financial-regulators/seiho-kyokai|Life Insurance Association of Japan]]
- [[financial-regulators/sonpo-hosho-kiko|Non-Life Insurance Policyholders Protection Corporation of Japan]]
- [[financial-regulators/seimei-hokensha-hogo-kiko|Life Insurance Policyholders Protection Corporation of Japan]]
- [[financial-regulators/yokin-hoken-kiko|Deposit Insurance Corporation of Japan]]
- [[financial-regulators/jsda|JSDA]]
- [[financial-regulators/zenginkyo|Japanese Bankers Association]]
- [[financial-regulators/shintaku-kyokai|Trust Companies Association of Japan]]
- [[financial-regulators/fsa|FSA]]
- [[financial-licenses/INDEX]]
- [[financial-licenses/insurance-license-and-solvency|insurance license and solvency route]]
- [[non-life-insurers/sompo-japan-insurance|Sompo Japan Insurance]]
- [[non-life-insurers/aioi-nissay-dowa-insurance|Aioi Nissay Dowa Insurance]]
- [[non-life-insurers/sony-insurance|Sony Insurance]]
- [[insurance/INDEX]]

## 出典

[^giroj-about]: 損害保険料率算出機構「機構について」, https://www.giroj.or.jp/about/
[^giroj-members]: 損害保険料率算出機構「会員一覧」, https://www.giroj.or.jp/member/
[^riting-act]: 損害保険料率算出団体に関する法律 (Act No. 193 of 1948), https://laws.e-gov.go.jp/law/323AC0000000193
[^fsa-ins]: FSA, "保険会社向けの総合的な監督指針", https://www.fsa.go.jp/common/law/guide/ins/
[^fsa-licensed]: FSA, "免許・許可・登録等を受けている事業者一覧", https://www.fsa.go.jp/menkyo/menkyo.html?guid=ON

---

> [!info] 信頼度メモ
> 信頼度: **おおむね高い**。二制度の区別（参考純率 vs 基準料率）、保険種目ごとの対象範囲（任意自動車、CALI、火災、地震）、損害保険料率算出団体に関する法律に基づく法定ルートは、2026-05-24時点で GIROJ 自身の概要・会員ページと金融庁の保険監督指針から確認した。個別の料率改定数値は改定サイクルごとに変動するため、引用前に GIROJ の最新の料率改定届出で再確認する。
