---
source: corporate-strategy/japan-gappei-merger-regime
source_hash: 3afb76218985c223
lang: ja
model: qwen3-4b-instruct-2507-4bit-guarded-full-sync+manual-review
status: machine
fidelity: ok
title: "合併（日本の企業合併）— 吸収合併／新設合併の仕組み、適格合併の税務、三角合併"
translated_at: 2026-07-29T05:13:34.783Z
---

# 合併（日本の企業合併）— 吸収合併／新設合併の仕組み、適格合併の税務、三角合併

## ウィキルート

この項目は[[corporate-strategy/INDEX|corporate-strategy INDEX]]の下に位置し、案件・資金調達面は[[finance/INDEX|finance INDEX]]へ接続する。合併は、分離手法である[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 (company split)]]に対する**結合側**の手法であり、両者は同じ適格／非適格の税務軸を持つ。対象会社を消滅させず株式で100%支配する手法は[[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転 regime]]、一定規模以上の合併に必要となる独占禁止法上の審査は[[finance/jftc-merger-control-process|the JFTC merger-control process]]を参照。

## TL;DR

**合併（gappei, merger）**は、日本会社法上、**2社以上を1つの法的実体に統合する**仕組みである。事業を切り分ける[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割]]や、両社が親子会社として存続する[[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換]]と異なり、合併では少なくとも1社が**消滅**する。その資産、負債、契約、従業員は存続会社へ**包括承継**され、消滅会社は別途清算を経ずに法人格を失う。

二つの構造的軸がこの制度を定義する — すべての日本の組織再編成において見られる二重構造である。

1. **法的形式の軸** — 既存会社が存続して他社を吸収する**吸収合併（absorption merger）**と、新会社を設立してすべての当事会社が消滅する**新設合併（consolidation merger）**。
2. **税務の軸** — 簿価引継ぎ・課税繰延べとなる**適格合併（qualified）**と、時価評価で課税される**非適格合併（non-qualified）**。

法的層：

- **会社法条項 748–756** は合併手続を規定し、**条項 749** は吸収合併契約（absorption-merger agreement）の内容を、**条項 753** は新設合併契約（newly established merger agreement）の内容を定める。**条項 754(1)** は新設合併の効力発生日を、存続会社の設立登記日とする。
- **法人税法第2条12号の8、第62条、第62条の2**は、適格／非適格の区別と税務属性の引継ぎを規定する。
- 両形態とも、原則として**当事会社株主の特別決議**（3分の2水準）、**債権者保護手続**、**反対株主の株式買取請求**手続が必要となる。

## 1. 吸収合併 vs 新設合併 — 二つの形

| | 吸収合併 (absorption) | 新設合併 (consolidation) |
|---|---|---|
| 存続会社 | 既存の会社 | 新規設立された会社 (新設会社) |
| 消滅会社 | 吸収された会社 (ies) | 合併に参加したすべての会社が消滅 |
| 消滅会社株主への対価 | 存続会社の株式、現金、またはその他の財産 | 新会社の株式 |
| 許可・上場状況 | 存続会社は同一の実体を維持；吸収された会社の許可の移転可能性は、個別に確認が必要 | 新会社は、前会社固有の許可または上場資格を継承することはできない；再認可または上場処置の確認が必要 |
| 効力発生日 | 合併契約に定める日 | 新会社の設立登記日（第754条（1）） |
| 会社法条項 | 749, /750, /783–802  | 753, /754, /804–816  |

情報源：法人としての帰結、契約内容、効力発生日、株主・債権者手続は、引用した会社法の規定に基づく。この表だけで許認可や上場の継続性が確定するわけではなく、業法と取引所規則に照らして個別に確認する必要がある。^[Sources: https://laws.e-gov.go.jp/document?lawid=417AC0000000086; https://www.jpx.co.jp/equities/listing-on-tse/index.html.]

要点：**吸収合併は一方の会社を残して他方を吸収し、新設合併は当事会社をすべて消滅させて新会社を設立する。** 実務では**吸収合併が主流**である。新設合併では、新会社が前身会社の事業許認可や上場資格を当然に引き継げるとは限らず、再取得・再審査の行政負担が大きいためである。新設合併は、当事者が「対等合併」の外観を重視する場合などに用いられる。

## 2. 包括承継（ほうかつしょうけい）— 合併が「一括処理」できる理由

合併は法律上の効力により一括して生じ、資産ごとの個別譲渡ではないため、原則として個々の契約相手や従業員の同意を要しない。

- **契約**は存続会社へ自動的に移転する（ただし、契約に組織再編を対象とする条項がある場合を除く）。
- **雇用契約**も自動的に移転する。[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割]]と異なり、合併では会社全体が移転するため、労働契約承継法に基づく選別・協議の仕組みは発動しない。
- **債務および負債**は完全に移転される — これは、**債権者保護手続**が義務付けられている理由である（債権者は元の債務者を失う）。

この包括承継は、各契約を個別に移転し、各従業員の個別同意を要する事業譲渡と対照的である。[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|the 会社分割 regime]]との比較も参照。

## 3. Tax Axis — 適格合併 vs 非適格合併

適格合併の判定軸は[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割]]と共通する。すなわち、合併を**簿価引継ぎによる課税繰延べ**として扱うか、**時価評価課税**として扱うかである。

### 適格合併 テストシナリオ

1. **100%グループ（完全支配関係）** — 完全支配関係内の合併。要件が最も簡素で、完全支配関係の継続が中心となる。
2. **50%超グループ（支配関係）** — 支配関係内の合併。**従業者引継ぎ（おおむね80%）**と**事業継続**の要件が加わる。
3. **共同事業（共同事業要件）** — 資本関係のない当事者間の合併。**事業関連性**、**事業規模の相当性または経営参画**、**従業者引継ぎ**、**事業継続**、**交付株式の継続保有**などの要件が加わる。

各類型に共通する原則は、**株式対価は適格性を維持し得る一方、現金対価は通常、適格性を失わせる**ことである。これは[[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転]]など株式対価型の再編にも共通する。

### 結果

| | 適格合併（qualified） | 非適格合併（non-qualified） |
|---|---|---|
| 被合併法人の資産 | 簿価で引継ぎ；即時の譲渡損益認識なし | 時価で評価；含み益が実現 |
| 被合併法人の株主 | 株式対価について即時の譲渡損益課税なし | 譲渡損益／**みなし配当**が生じる可能性あり |
| 繰越欠損金 | 引継ぎ可能だが、**濫用防止規定**（法人税法第57条以下）に従う | 通常、引き継がれない |
| 総合効果 | 税務中立的な合併 | 二重課税リスクあり |

出典：財務省の現行の組織再編税制概要に基づく大枠の整理である。適格性と欠損金の引継ぎは、法定要件と租税回避防止規定に左右される。「税務中立」とは適格規則により即時認識がないことを意味し、恒久的な免税を意味しない。^[Sources: https://www.mof.go.jp/tax_policy/summary/corporation/c06.htm; https://laws.e-gov.go.jp/document?lawid=340AC0000000034.]

**繰越欠損金の引継ぎ**は、合併に固有の重要な税務効果である。利益を計上する存続会社が、赤字の対象会社の繰越欠損金を引き継げる場合がある。ただし、特定の所有権変更・事業継続性の判定を含む**欠損金の売買を防ぐ制限規定**は、まさに「欠損金を買う」取引を防止するためにあり、事業再生案件では厳しく作用する。これは多くの救済合併の背後にある重要な税務レバーである。

## 4. 三角合併（triangular merger）変形

2007年に会社法の対価柔軟化規定が施行されて以降、吸収合併では**存続会社の親会社株式**を対価として交付できる。この**三角合併（triangular merger）**は、親会社が日本子会社を通じて対象会社を取得し、対象会社の株主に親会社（多くは外国上場会社）の株式を交付する方法である。

- 日本の**子会社**は、法的存続を保つ側であり、対象会社を吸収する。
- 対象会社の株主は**母会社**株式を受け取る。
- これは、**外国親会社株式を用いた日本企業のクロスボーダー買収**に用い得る主要な仕組みである。ただし外国親会社株式を使う場合の**適格要件**は厳しく、実務上、課税繰延べでの利用は限られる。クロスボーダー取引の構成は[[finance/cross-border-m-a-japan|cross-border M&A Japan]]を参照。

## 5. 合併が再編のツールの中での位置

組織再編成はメニューを提示する；その選択は、法的実体に対して**どのような変化が起こるか**にかかっている。

| Tool | Effect on entities | Canonical use |
|---|---|---|
| **合併 (merger)** | 1社が存続し、他社は**消滅** | 完全統合／一本化；経営不振会社の救済 |
| **会社分割 (split)** | **事業**が別法人へ移り、両法人が存続 | カーブアウト、スピンオフ前処理、持株会社化 — see [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 regime]] |
| **株式交換 (share exchange)** | 両社が存続し、**100%**の親子会社関係となる | 対象会社を株式対価で完全子会社化 — see [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転]] |
| **株式交付 (share delivery)** | 両社が存続し、**部分的支配**（50%超、100%未満）となる | 株式対価による友好的な支配持分取得 — see [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付 regime]] |

出典：表は会社法上の判断結果を比較している。「カノニカル使用（canonical use）」は分析的ナビゲーションラベルであり、その構造が特定の取引において利用可能、承認、または税適格であることを確立するものではない。^[Sources: https://laws.e-gov.go.jp/document?lawid=417AC0000000086; https://www.mof.go.jp/tax_policy/summary/corporation/c06.htm.]

決定的な違いは、**合併だけが法人格を消滅させる**ことである。両社を別々の法人として存続させたい場合は、株式を用いる制度を検討する。分離側の選択肢は[[corporate-strategy/spinoff-decision-tree-japan|the spinoff decision tree]]を参照。合併はその結合側に対応する。

## 6. 時系列プロセス

合併は、会社法の再編タイムラインに従い、速度の上限を設定している。

| ステップ | 法定最低要件 | 備考 |
|---|---|---|
| 取締役会による合併契約／合併計画の承認 | — | 同日承認可能 |
| 株主総会前に本店で合併書類を事前備置 | 株主総会の ≥ 2週間前 | 株主・債権者による閲覧用 |
| 株主総会の特別決議 | — | 3分の2の特別決議要件 |
| 債権者保護手続（債権者の異議） | ≥ 1 ヶ月の異議期間 | **常に必要**（債権者は従前の債務者を失う） |
| 反対株主の株式買取請求（価格決定手続） | 効力発日前後の法定期間 | 反対株主は「公正な価格」での買取りを請求でき、裁判所は相乗効果を価格へ反映し得る（会社法785／797／806条） |
| 効力発生日 | 合意による（吸収）／設立登記（新設、条項754（1）） | — |
| 登記（変更登記／設立登記） | 2 週以内の提出 | 新設合併においても新会社の登記が行われる |

情報源：これは通常の会社法の手順である。簡略化されたまたは短縮された手続きおよび取引ごとの通知、公開、規制承認、登録に関するルールが、適用されるステップや日付を変更する可能性がある。^[Source: https://laws.e-gov.go.jp/document?lawid=417AC0000000086.]

通常の非論争合併は、取締役会の承認後 **2–3 ヶ月** で完了するが、2つの外部のフェーズがカレンダーを大きく左右する。そのうち、取引額が通知閾値を超える場合にかかる **JFTCの合併承認**（[[finance/jftc-merger-control-process|the merger-control process]]）と、上場会社のFSA／TSEの公表負担が、[[finance/japan-large-shareholding-disclosure|large-shareholding disclosure]]および上場規則（[[securities/japan-ipo-listing-disclosure-route|the IPO listing / disclosure route]]）との相互作用によって顕著になる。

## 7. 戦略的読解

- **合併は「企業を破壊する」再編の唯一の形態である**。そのため、共有システム、単一の労働力、一つの貸借対照表を持つ真正な融合（統合）を目的とする場合に適したツールとなる。企業の分離を維持したい場合（リスクの分離、ブランド、または規制認可の目的など）には、[[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転]]または[[corporate-strategy/japan-holding-company-conversion|holding-company conversion]]を使用する。
- **繰越欠損金の引継ぎは、隠れた便益であると同時に落とし穴でもある。** 適格合併では繰越欠損金を存続会社へ引き継げる場合があるが、租税回避防止の判定は、取引が欠損金の購入（loss shopping）に見える場合にその引継ぎを制限するためにある。
- **実務では吸収合併が新設合併をほぼ常に上回る。** 新設合併後の許認可再取得や再上場には固有のコストがあり、新設合併は主に「対等合併」という象徴性を重視する場合に残る。
- **独占禁止法は実際の柵であり、形式ではない。** 大規模な合併はその柵を通過しなければならない。 [[finance/jftc-merger-control-process|JFTC merger-control process]]集中市場においては、対抗措置または禁止が実効性を持つ。

## 8. 反論と注意点

- **適格は事案に依存する。** 適格判定は技術的であり、NTAは極端なケースが一般的であるため、個別調査例を公表している。各取引ごとに適格ステータスを確認する。
- **三角合併の税務上の利用範囲は限定的である。** 外国親会社株式を用いた三角合併では適格扱いの確保が難しい。多くのクロスボーダー株式対価取引は、[[finance/cross-border-m-a-japan|cross-border M&A Japan]]に示す別の構造を用いる。
- **債権者保護は省略できない。** 債務は包括承継されるため、1か月以上の異議申述期間は必須であり、クロージング日程を制約する主因となる。
- **評価訴訟リスク。** 不服株主による「公正価額」買収請求（合併連携効果の一部を含む）は、[[finance/japan-mbo-and-squeeze-out-process|the MBO / squeeze-out process]]におけるスクイーズアウトの公正性議論と同様に、訴訟化する可能性がある。

## 関連

- [[corporate-strategy/INDEX|corporate-strategy INDEX]]
- [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]]
- [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転 regime]]
- [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付 regime]]
- [[corporate-strategy/japan-holding-company-conversion|holding-company conversion]]
- [[corporate-strategy/spinoff-decision-tree-japan|spinoff decision tree Japan]]
- [[finance/jftc-merger-control-process|JFTC merger-control process]]
- [[finance/japan-mbo-and-squeeze-out-process|Japan MBO / squeeze-out process]]
- [[finance/cross-border-m-a-japan|cross-border M&A Japan]]
- [[finance/japan-large-shareholding-disclosure|Japan large-shareholding disclosure]]
- [[securities/japan-ipo-listing-disclosure-route|Japan IPO listing / disclosure route]]
- [[finance/INDEX|finance INDEX]]
- [[INDEX|FinWiki index]]

## 出典

- Companies Act (会社法) on 合併 (art. 748–756, incl. 749 / 753 / 754): https://laws.e-gov.go.jp/document?lawid=417AC0000000086
- 国税庁 法人税法基本通達 1-4-5 (組織再編成 — 適格合併ほか): https://www.nta.go.jp/law/tsutatsu/kihon/hojin/01/01_04_05.htm
- METI 経済法制 policy portal (組織再編成 / 対価柔軟化): https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/
- 公正取引委員会 (JFTC) — merger review (English): https://www.jftc.go.jp/en/
- FSA English portal (disclosure rules interacting with mergers): https://www.fsa.go.jp/en/

---

> [!info] 校核状态
> confidence: **likely**. 吸収合併 / 新設合併 mechanics (Companies Act art. 748–756, effective-date rule art. 754(1)), universal succession, the mandatory creditor-protection and appraisal procedures, the 適格 / 非適格 axis, loss-carryforward carryover with anti-trafficking limits, and the post-2007 三角合併 variant are settled public facts. The 適格 tests and triangular-merger tax conditions are technical and fact-specific — confirm qualified status and antitrust clearance per transaction.
