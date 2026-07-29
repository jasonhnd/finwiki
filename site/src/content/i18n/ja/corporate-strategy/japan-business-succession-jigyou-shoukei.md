---
source: corporate-strategy/japan-business-succession-jigyou-shoukei
source_hash: cf9c7e44bb79d83e
lang: ja
model: qwen3-4b-instruct-2507-4bit-guarded-full-sync+manual-review
status: machine
fidelity: ok
title: "事業承継（jigyou shoukei）— 日本の事業承継枠組みと事業承継税制（法人版／個人版）の相続税・贈与税の納税猶予"
translated_at: 2026-07-29T05:13:34.783Z
---

# 事業承継（jigyou shoukei）— 日本の事業承継枠組みと事業承継税制（法人版／個人版）の相続税・贈与税の納税猶予

## ウィキルート

この項目は[[corporate-strategy/INDEX|corporate-strategy INDEX]]の下に位置し、取引面の補足は[[finance/INDEX|finance INDEX]]へ接続します。日本の企業再編の背景にある**所有者の移行**を扱います。承継前の一般的な再編である[[corporate-strategy/japan-holding-company-conversion|holding-company conversion]]、引継ぎ前に事業を切り出す[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]]、親族内・社内に後継者がいない場合の経営陣買収ルートである[[finance/japan-mbo-and-squeeze-out-process|Japan MBO / squeeze-out process]]と併読してください。

## TL;DR

**事業承継 (jigyou shoukei, business succession)** とは、企業の所有権と経営の双方を、ある世代（または所有者）から次へ移転することを指す。日本では重要な経済課題である。多数の中小企業経営者が引退年齢に達し、多くの企業が経営破綻ではなく**後継者不在**を理由に廃業の危機に直面している。

承継経路は3つある。

1. **親族内承継 (family-internal)** — 子または親族に。
2. **親族外承継 / 役員・従業員承継 (internal non-family)** — 役員または従業員への承継。しばしば[[finance/japan-mbo-and-squeeze-out-process|management buyout (MBO)]]を用いる。
3. **M&A (third-party)** — 社内に後継者がいない場合の第三者への売却。

ルート1と2における中心的な税務上の障害は、流動性が低く評価額が高いことも多い**非上場株式**の移転に、**相続税**または**贈与税**が発生することである。相続人は、納税資金を得るために容易には売却できない株式について多額の税を負うことがある。この課題に対応するのが**事業承継税制**であり、一定の非上場株式に係る相続税・贈与税を**猶予し、最終的に免除し得る**制度である。根拠法は**経営承継円滑化法**である。

この制度は2つのルートを持つ。

- **法人版事業承継税制（法人版）** — 非上場会社の株式に対して。
- **個人版事業承継税制（個人版）** — 個人事業者（個人事業主）の事業資産に対して。

それぞれに**一般措置**と、より手厚い**特例措置**がある。

## 1. 事業承継問題と3つのルート

| ルート | 後継者 | 代表的な構造 | 主な課題 |
|---|---|---|---|
| 親族内承継 | 子・親族 | 株式の贈与または相続 | 非上場株式に対する相続税・贈与税 |
| 親族外（役員・従業員）承継 | 役員・従業員 | しばしば [[finance/japan-mbo-and-squeeze-out-process|MBO]]（後継者が株式を購入し、取得資金を借り入れることも多い） | 後継者の資金調達＋税務課題 |
| M&A | 第三者の買収者 | 株式売却／事業譲渡／会社分割 | 企業価値評価、売主への譲渡益課税 |

情報源：この分類は中小企業庁の現行の事業承継支援体系に従う。この表はナビゲーション用の要約であり、すべての社内承継がMBOを用いることや、すべての第三者承継が同じ法的形式を用いることを意味しない。^[Sources: https://www.chusho.meti.go.jp/zaimu/shoukei/business_succession_support_measures.html; https://www.chusho.meti.go.jp/pamflet/hakusyo/2025/chusho/b1_1_9.html.]

社内に後継者がいる場合、通常の制約要因は**株式移転に係る税**であり、事業承継税制はまさにこれを対象とする。後継者がいない場合は通常**M&A**へ進み、[[corporate-strategy/spinoff-decision-tree-japan|the spinoff decision tree]]に示す事業分離手法または直接売却を用いる。買収者側の資金調達は[[finance/japan-acquisition-finance|Japan acquisition finance]]を参照。

## 2. 法人版事業承継税制 (法人版事業承継税制)

法人版は、贈与または相続により非上場会社の株式を取得した後継者について、その株式に係る贈与税・相続税の納税を猶予する。継続要件を満たすことを条件に、次の承継時や先代経営者・後継者の死亡時に最終的な免除を受け得る。

### 一般措置 vs 特例措置

| 特徴 | 一般措置（一般） | 特例措置（特別） |
|---|---|---|
| 納税猶予割合 | 贈与税：100%；相続税：80% | 贈与税および相続税：**100%** |
| 対象株式 | 発行済株式総数の3分の2まで | 要件を満たす株式について株式数の上限なし |
| 先代経営者／後継者 | 複数株主 → 後継者1人 | 複数株主 → 代表権を有する後継者3人まで |
| 雇用要件 | 5年間平均で雇用の80%を維持する要件 | 未達でも猶予が直ちに打ち切られるわけではなく、所定の報告・支援手続が適用される |
| 前提計画の提出 | なし | **はい — 特例承継計画を提出しなければならない** |

情報源：国税庁の現行の事業承継税制の概要と、中小企業庁による一般措置・特例措置の公式比較に基づく。ここでは大枠の上限のみを示しており、認定、申告、継続保有、経営、免除の各要件は個別案件ごとに確認が必要である。^[Sources: https://www.nta.go.jp/publication/pamph/jigyo-shokei/index.htm; https://www.chusho.meti.go.jp/zaimu/shoukei/shoukei_enkatsu_zouyo_souzoku.html; https://www.chusho.meti.go.jp/zaimu/zeisei/pamphlet/shoukei_zeisei_jirei.pdf.]

**特例措置**は中心的な制度である。要件を満たす株式に係る贈与税・相続税の**100%**を猶予し、「流動性のない株式に対する課税」の問題をほぼ解消できる。ただし、会社が事業を継続し、後継者が株式と経営上の地位を維持することが前提となる。

### 適用要件の骨格（概要）

- 会社は、中小企業基本法上の**非上場中小企業（中小企業者）**であり、**資産保有型／資産運用型会社**として排除されるものでなければならない。
- その移転は、**経営承継円滑化法**による認定（都道府県知事の認定）を経て行われなければならない。
- 特例措置は、**特例承継計画**が、継承前に都道府県知事による確認を受けたこと（法的提出期間内において）を要する。

### 提出期間（FY2026改正）

FY2026（令和8年度）税制改正大綱により、**特例承継計画の提出期限が延長された**。**法人版**は**2027-09-30（令和9年9月30日）**までである（**個人版**の計画提出期限はさらに**2028-09-30**まで延長）。ただし、特例措置を利用するための**実際の承継（贈与または相続）は、引き続き2027-12-31（令和9年12月31日）までに実施しなければならない**。計画期限の延長は承継期限を動かさない。期限は毎年度の改正で変わり得るため、利用前に国税庁・中小企業庁の最新情報を確認すること。

## 3. 個人版事業承継税制 (個人版事業承継税制)

個人版は**個人事業者**向けの並行制度である。株式ではなく、事業を後継者へ引き継ぐ際に、事業に用いる土地、建物、減価償却資産などの**特定事業用資産**に係る贈与税・相続税の納税を猶予する。

- **個人事業承継計画**を「経営承継円滑化法」に基づき提出が必要である。
- **小規模宅地等の特例**（中小事業者向け不動産評価額の減少）との相互作用がある。この二つの制度は、一般的に同一の不動産に対して併用できないため、ルートの選定が重要である。
- 提出期限は（FY2026 改正により）**2028-09-30** まで延長された。

## 4. 再編が継承以前に起こる場合がある

所有者経営会社は、構造を整理した後に譲渡を行うことが多く、よりシンプルな構造は継承（および税務）をより円滑に進めるためである。

- **承継前の持株会社化** — 持株会社を介在させることで、後継者に議決権支配を集中させ、事業リスクを分離し、移転前に株主構成を再編できる。転換の仕組みは[[corporate-strategy/japan-holding-company-conversion|holding-company conversion]]を参照。事業承継税制の対象として持株会社株式を引き継ぐ設計もあり得る。
- **会社分割による事業の維持・売却の分離** — 複数事業を展開する会社を分割し、継承先が中核事業を継承する一方、非中核事業は売却または終了させる。分割の仕組み、および自動的に従業員の転属が含まれる内容は [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|the 会社分割 tax regime]] に記載。
- **親族内後継者がいない場合のMBO** — 役員・従業員が、通常は借入を利用して会社を買収する。構造と資金調達は[[finance/japan-mbo-and-squeeze-out-process|the MBO / squeeze-out process]]および[[finance/japan-leveraged-buyout-economics|leveraged-buyout economics]]を参照。

## 5. 戦略的読解

- **税金が家族の継承においては主要な障壁である**：事業承継税制がなければ、相続人が株式を相続する際に、現金を生み出さないが売却が難しい株式に対して大きな相続税を負担しなければならない——これは典型的な強制売却または強制融資の罠である。特例措置の100%の延期措置が、多くの中小企業の円滑な家族継承を可能にしている。
- **納税猶予は条件付きであり、無条件の免除ではない**：継続要件を満たさなくなった場合（後継者による株式処分、会社の事業停止、一般措置において正当な理由なく雇用が基準を下回る場合など）、**猶予税額の納付**が必要になり得る。一度限りの免除ではなく、長期にわたるコミットメントである。
- **「後継者不在」が日本の中小企業M&Aの実質的な原動力である**：事業承継税制を必要とする人口動態上のギャップが第三者M&Aの件数も押し上げており、本項目は[[finance/INDEX|finance]]の案件パイプラインと[[business/japan-listed-corp-strategic-restructuring-matrix|the strategic-restructuring matrix]]の事業会社事例につながる。
- **政策金融も選択肢の一部である**：公的金融機関と信用保証機関は、買収資金を必要とする後継者向けに事業承継専用の金融支援を提供している。各機関は[[policy-finance/INDEX|policy-finance INDEX]]を参照。

## 6. 反論と注意点

- **期限は変動要因**：特例措置の計画提出および継承期限は、年次改革により**繰り延べられており**、ここに記載された特定の日付は、NTA（中小企業庁）の最新情報と照らし合わせて**新たに確認**が必要です。
- **不適格リスク**：資産保有・資産管理会社はこの制度から除外されています。資産を保有する・管理するような姿勢を示す構造は、該当しない可能性があります。
- **事業継続の負担**：制度は実質的な事業継続と経営の維持を前提とする。短期売却を予定する後継者には適さない。
- **適切な株式評価・資本構成の代替ではない**：納税猶予は、株式が過度に集中していることやガバナンスが不十分な資本構成を解決しない。このため、承継と[[corporate-strategy/japan-holding-company-conversion|HoldCo conversion]]または部分的再編を組み合わせることが多い。

## 関連

- [[corporate-strategy/INDEX|corporate-strategy INDEX]]
- [[corporate-strategy/japan-holding-company-conversion|holding-company conversion]]
- [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]]
- [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転 regime]]
- [[corporate-strategy/spinoff-decision-tree-japan|spinoff decision tree Japan]]
- [[finance/japan-mbo-and-squeeze-out-process|Japan MBO / squeeze-out process]]
- [[finance/japan-leveraged-buyout-economics|Japan leveraged-buyout economics]]
- [[finance/japan-acquisition-finance|Japan acquisition finance]]
- [[finance/INDEX|finance INDEX]]
- [[policy-finance/INDEX|policy-finance INDEX]]
- [[business/japan-listed-corp-strategic-restructuring-matrix|Japan listed-corp strategic-restructuring matrix]]
- [[INDEX|FinWiki index]]

## 出典

- 国税庁 No.4148「非上場株式等についての相続税の納税猶予及び免除の特例等（法人版事業承継税制）」: https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4148.htm
- 国税庁「法人版事業承継税制」パンフレット: https://www.nta.go.jp/publication/pamph/jigyo-shokei/houjin.htm
- 中小企業庁「法人版事業承継税制（特例措置）」: https://www.chusho.meti.go.jp/zaimu/shoukei/shoukei_enkatsu_zouyo_souzoku.html
- METI 経済法制 policy portal: https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/
- 中小企業庁「経営承継円滑化法による支援」（中小企業における経営の承継の円滑化に関する法律, Act No. 33 of 2008 — 都道府県知事認定 / 申請マニュアル）: https://www.chusho.meti.go.jp/zaimu/shoukei/shoukei_enkatsu.html

---

> [!info] 校核状态
> confidence: **likely**. Regime structure (法人版 / 個人版, 一般措置 / 特例措置, 100% deferral under the special measure, 経営承継円滑化法 base) is confirmed against NTA and 中小企業庁. **Deadlines move with each annual tax reform** — the FY2026-reform plan-filing extensions (corporate 2027-09-30, individual 2028-09-30; succession deadline 2027-12-31) should be re-confirmed before reliance. Specific eligibility is case-specific; consult a tax professional.
