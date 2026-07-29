---
source: corporate-strategy/japan-kabushiki-bunpai-spinoff-regime
source_hash: e4e468a56480eedc
lang: ja
model: qwen3-4b-instruct-2507-4bit-guarded-full-sync+manual-review
status: machine
fidelity: ok
title: "株式分配（kabushiki bunpai）— 適格株式分配とパーシャルスピンオフの違い"
translated_at: 2026-07-29T05:13:34.783Z
---

# 株式分配（kabushiki bunpai）— 適格株式分配とパーシャルスピンオフの違い

## ウィキルート

この項目は[[corporate-strategy/INDEX|corporate-strategy INDEX]]の下に位置し、資本市場面は[[finance/INDEX|finance INDEX]]へ接続する。株式分配は**分配側**のスピンオフ手法であり、子会社株式を現物配当として親会社株主へ交付する。[§6](#6-パーシャルスピンオフ--partial-spin-off-2023-special-measure)で扱う**パーシャルスピンオフ（部分スピンオフ、持分留保型）**も、この仕組みを基礎とする。通常は分配前のカーブアウト基盤となる[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]]、他の分離手法との比較を示す[[corporate-strategy/spinoff-decision-tree-japan|the spinoff decision tree]]と併読する。

## TL;DR

**株式分配（kabushiki bunpai, share distribution）** とは、親会社が**完全子会社の株式を自社株主に現物分配**することにより実施される日本におけるメカニズムである。これは、**古典的／完全スピンオフ（スピンオフ）** の法的核である。親会社は、最終的に**子会社の株式を一切保有しない**ことになり、その子会社は独立した上場（または上場可能）会社となり、元の親会社の株主が既に保有する株式比率に応じて直接保有するようになる。

この条項が定める主要な区別 — [[corporate-strategy/INDEX|domain index]] が「よく誤解される」と指摘しているもの — は、次の通りである。

- **株式分配（フルスピンオフ）** — 親会社が子会社株式の**100%**を分配し、保有を**0%**とする。適格な形が、2017年のスピンオフ税制改正で導入された**適格株式分配**である。
- **パーシャルスピンオフ（部分スピンオフ）** — 親会社が子会社株式の大半を分配しつつ、**20%未満**を留保する。2023年度に導入された、株式分配の枠組みに対する特例措置である。詳細は[§6](#6-パーシャルスピンオフ--partial-spin-off-2023-special-measure)を参照。
- **会社分割** — **事業**を子会社へ移す資産・事業レベルの仕組みで、分配対象となる完全子会社を用意するための前工程としてよく使われる。詳細は[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|the 会社分割 tax regime]]を参照。

要約すると、**会社分割が子会社という箱を作り、株式分配がその箱を株主へ渡す**。一般にいうスピンオフは通常、新設分割で子会社を設立した後、その株式を適格株式分配する一連の計画として実施される。

法的層：

- **会社法第454条（剰余金の配当）**は、株式を交付するための現物配当を規律する。100%子会社の株式を全株主へ持分比率に応じて分配する形が該当する。
- **法人税法第2条12号の15の2／12号の15の3**と関連する組織再編規定が、**適格株式分配**とその課税繰延べを定める。
- **適格株式分配**は、通常の現物配当なら生じる**親会社段階の譲渡益**と**株主段階のみなし配当／譲渡益**の即時認識を止める。

## 1. スピンオフの日本税法上の二面性

2017 スピンオフ改革は実際には**2つの**適格スピンオフパターンを定義した。両者は同じ経済的結果 — 事業が元の株主によって保有される独立した会社に変容する — を目指しているが、その達成方法は異なり、それぞれ異なるアプローチを取っている。

| パターン | メカニズム | 何が動く | 通常の出発点 |
|---|---|---|---|
| **適格株式分配 (qualified share distribution)** | 子会社株式の現物分配 | 現在の完全子会社の株式 | 親会社がすでに該当株式を100%子会社として保有している |
| **単独新設分割型分割（independent incorporation-type split）** | 対価が**親会社の株主に直接交付**される新設分割 | 事業を新会社に分割し、その株式が株主に帰属 | 事業は親会社内に残り、まずその事業を分割する必要がある |

出典：2つのスピンオフの形態およびその法的・税務構造は、METIの現在のスピンオフガイドおよび財務省の組織再編税務要約にまとめられている。^[Sources: https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/oshirase/spinoff-kaitei_20260522.html; https://www.mof.go.jp/tax_policy/summary/corporation/c06.htm.]

この項目は、より一般的な**適格株式分配**に焦点を当てる。多くのスピンオフは、まず[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|新設分割]]で事業を整理された100%子会社へ移し、その後、その子会社株式を株式分配する。分割型分割は、まだ別法人に切り出されていない事業について、この2段階を一つにまとめる。

## 2. 「株式分配」とは正確に何を意味するか

株式分配は法人税法上の**定義語**であり、分配法人が**完全子法人**の株式を株主へ交付する**現物分配**をいう。分配後、株主は子会社を直接保有し、その持分割合は親会社の持分割合に**比例する**。

重要な3つの特徴がある。

1. これは配当であり、売却ではありません。株主レベルで現金のやり取りは一切行われず、株主は親会社からの配当の代わりに（またはそれに加えて）完全子法人の株式を受け取る。
2. **持分比率に応じた分配でなければならない。** 全株主が、既存の親会社株式の保有割合に厳密に応じて子会社株式を受け取る。非比例または選択的な分配は制度要件を満たさない。
3. **分配直前に100%所有の完全子法人でなければならない。** 株式分配の対象は完全子法人であり、部分保有の子会社は対象外である。後に[§6](#6-パーシャルスピンオフ--partial-spin-off-2023-special-measure)のパーシャルスピンオフ制度が、親会社による分配後の持分留保を認める形でこの制約を緩和した。

## 3. 適格株式分配 — 適格検討

含み益のある子会社株式を通常の現物分配として交付すると、親会社の譲渡益と株主のみなし配当／譲渡益の二段階で課税され得る。**適格株式分配**は両段階の即時課税を繰り延べる。適格となるには、[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|the 会社分割 regime]]を含む組織再編税制と共通する趣旨の要件を満たす必要がある。

- **継続する従前の支配関係がないこと** — 親会社を支配する第三者が、分離会社を引き続き支配する構造であってはならない。子会社を実質的に独立させる必要がある。
- **分配後の支配関係が見込まれないこと** — 分配後に分離会社への支配関係を再構築する予定があってはならない。
- **完全子会社株式の比例配当** — 完全子会社のすべての株式が、株主の親会社保有比率に従って厳密に配当される。
- **従業者継続** — スピンオフ後の事業において、約 **80%** の従業員が継続される見込みである。
- **事業継続** — スピンオフ後の事業において、子会社の主要事業が継続される見込みである。
- **特定役員の継続** — 子会社の主要役員（特定役員）が継続される見込みである。

これらの要件を満たす場合、分配株式は**簿価**で移転し、親会社は**譲渡益を認識しない**。株主は取得価額を新たな直接保有株式へ配分するものとして扱われ、**いずれの段階でも即時課税は生じない**。

## 4. 税務上の影響 — 適格 vs 非適格

| | 適格株式分配 (qualified) | 非適格 現物分配 (non-qualified) |
|---|---|---|
| 分配株式に対する親会社の譲渡益 | 適格規則により即時認識なし；簿価処理 | 時価処理により含み益を認識し得る |
| 株主段階の課税 | 適格規則により即時認識なし；取得価額を配分 | **みなし配当**その他の課税が生じ得る |
| 連結子会社の課税属性 | 通常は保持される | 複雑化される；損失制限規則との相互作用が生じる可能性がある |
| 結果 | 全適格要件を満たすことを条件に課税繰延べ | 親会社・株主段階で課税が生じる可能性あり |

出典：表は、適格および非適格対応の高次元的な区分を示している。正確な割当基準、損失制限、および株主の影響については、取引に関して現在の税法に基づいて確定しなければならない。^[Sources: https://www.mof.go.jp/tax_policy/summary/corporation/c06.htm; https://www.nta.go.jp/law/tsutatsu/kihon/hojin/01/01_04_05.htm.]

株主段階の**みなし配当**は、非適格分配の主要なリスクである。株主は現金を受け取らず株式だけを受け取ったにもかかわらず、配当課税を負う場合がある。これは、相続側で[[corporate-strategy/japan-business-succession-jigyou-shoukei|business-succession regime]]が扱う「流動性のない受領財産への課税」と同じ問題である。そのため実務上、適格性の確保は任意ではなく、制度利用の核心となる。

## 5. 株式分配 vs パーシャルスピンオフ vs 会社分割 — その混乱が解決された

これはドメインインデックスが指摘している比較です。三つは異なる層であり、代替案ではありません。

| | 適格株式分配（フルスピンオフ） | パーシャルスピンオフ（部分） | 会社分割（会社分割） |
|---|---|---|---|
| 作用するレベル | **株式**を株主に分配 | **株式**を株主に分配 | **資産／事業**を移転 |
| 親会社の残余株式 | **0%** | **20%未満** となる（現在の特別措置に基づく分配後） | N/A（自ら分配を行わない） |
| 株主に直接届くか？ | はい — 株式を直接保有 | はい — 保留部分を除く | いいえ — 株式は継承会社に移る |
| 役割 | 既存子会社を株主へ分配 | 同様だが、親会社が少数持分を維持 | 分配対象となる子会社を**設立する** |
| 法的枠組み | 適格株式分配（2017） | 特別措置（2023）— [§6](#6-パーシャルスピンオフ--partial-spin-off-2023-special-measure) を参照 | 適格分割 — [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]] を参照 |

情報源：METIの2026年5月ガイドは、FY2026のパーシャルスピンオフ改正を反映している。会社法と財務省の税制概要が、会社分割と株式分配の境界を裏付ける。^[Sources: https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/oshirase/spinoff-kaitei_20260522.html; https://www.mof.go.jp/tax_policy/tax_reform/outline/fy2026/08taikou_03.htm; https://laws.e-gov.go.jp/document?lawid=417AC0000000086.]

重要な整理は、**会社分割は子会社を作る手法、株式分配はそれを株主へ渡す手法、パーシャルスピンオフは親会社が20%未満を留保できる株式分配**という点である。典型的な完全スピンオフは、**新設分割 → 適格株式分配**を一つの計画として実施する。選択肢全体は[[corporate-strategy/spinoff-decision-tree-japan|the spinoff decision tree]]を参照。

## 6. パーシャルスピンオフ — 部分スピンオフ（2023 特別措置）

**パーシャルスピンオフ**制度は、適格株式分配に対する持分留保型の特例である。**2023年度（令和5年度）税制改正**で創設され、「100%分配・0%留保」という適格株式分配の原則を緩和した。親会社は完全子会社株式の大半を株主へ分配しながら少数持分を維持し、要件を満たせば課税繰延べを受けられる。

### 6.1 制度構造（制度要件）

| 項目 | 内容 |
|---|---|
| 対象 | 完全子会社を切り出す株式分配型スピンオフ（a 株式分配 of a 100%-owned subsidiary） |
| 特徴 | 親会社が切り出し後も一部持分を残せる — 親会社は残余の持分を保有できる |
| 持分上限 | 分配直後の親会社保有割合が **20% 未満** |
| 税務効果 | 要件充足時は親会社・株主の即時課税を繰り延べる |
| 政策目的 | 企業グループの事業ポートフォリオ再編促進 |
| 認定要件 | **産業競争力強化法の事業再編計画**の認定（METIによる事業再編計画の認定） |

出典：これは、FY2026 税制改正要旨およびMETIの5月2026 ガイドに基づく非完全な現在の制度マップである。法的資格および計画承認検討を代替しない。^[Sources: https://www.mof.go.jp/tax_policy/tax_reform/outline/fy2026/08taikou_03.htm; https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/oshirase/spinoff-kaitei_20260522.html; https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/saihenzeisei/spin-off.html.]

完全株式分配との決定的な違いは**留保持分**である。完全スピンオフは**0%**、特例は**20%未満**の留保を認め、親会社が戦略的提携、ブランド、協力関係を維持できる。通常の適格株式分配と異なり、特例は**産業競争力強化法**上の認定を要する政策条件付きの緩和であり、自動適用ではない。また、**完全子会社**の株式分配にのみ適用され、任意の会社分割や事業譲渡には適用されない。

### 6.2 典型的取引フロー

| ステップ | 対応処理 | 実務上の論点 |
|---|---|---|
| 1 | 切り出し対象事業を完全子会社に整理 | 事業・資産・負債・人員の移管（通常、[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割]]を経由） |
| 2 | 事業再編計画および上場準備 | METI認定（産業競争力強化法）、TSE審査、監査 |
| 3 | 親会社が子会社株式を現物分配 | 配当財源、会社法手続（会社法第454 条 現物配当） |
| 4 | 親会社が一部持分を保有継続 | **20%未満**要件、ブランド・提携の維持 |
| 5 | 子会社が独立上場 | 株主は親会社株式および子会社株式を併有 |

出典：このプロセスは、METIの現在のガイドおよびソニーの完了済み取引に一致する分析順序である。認証、上場、会社法、税務、運用上のステップは、ケースにより重複または異なる場合がある。^[Sources: https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/oshirase/spinoff-kaitei_20260522.html; https://www.sony.com/en/SonyInfo/IR/library/SFG_pso/.]

### 6.3 実例と政策状況

初の注目を集める国内の申請は、**ソニーグループ → ソニー・フィナンシャル・グループ** の部分スピンオフである。METIは2月2024にこの計画を認可した。ソニー・フィナンシャル・グループは2025-09-29に上場し、ソニーは2025-10-01に部分スピンオフの完了を報告した。完全な実施例は[[business/sony-fg-partial-spinoff-case|Sony FG partial spinoff case]]に記載されている。

制度の詳細はなお動いている。FY2026税制改正でパーシャルスピンオフの要件が変更されたことを受け、METIは**2026年5月**にガイドを改訂した。各取引について、現行のMETI／財務省／国税庁資料に照らして全要件を再確認する必要がある。

## 7. なぜ親会社が完全スピンオフを行うのか

- **専業化／コングロマリット・ディスカウント**：関連性の低い事業を分離し、各社を固有の評価倍率で評価できるようにする。[[business/japan-listed-corp-strategic-restructuring-matrix|the listed-corp strategic-restructuring matrix]]の事例にも共通する論点である。
- **現金なし分離**：売却とは異なり、スピンオフは**買収者も資金も必要ない** — 価値は既存の株主に帰属し、第三者に移転しない。これは[[finance/japan-mbo-and-squeeze-out-process|the MBO / squeeze-out process]]における現金手段とは対照的である。
- **経営インセンティブの一致**：分離された会社は自らの株式通貨を得、独立した取締役会を設ける。
- **税務中立性**：適格株式分配では親会社・株主の双方で即時課税が繰り延べられる。売主に課税される通常の[[finance/japan-acquisition-finance|financed]]売却との相違点である。

パーシャルスピンオフとの選択では、提携関係を残すかが重要となる。完全な株式分配は親会社との資本関係を断つ一方、特例（[§6](#6-パーシャルスピンオフ--partial-spin-off-2023-special-measure)）は親会社に戦略的少数持分の維持を認める。これが2023年度措置を追加した理由である。

## 8. 反論と注意点

- **適格性は制度の根幹である。** 適格要件を満たさないスピンオフは、親会社の譲渡益課税と株主のみなし配当課税という二重の負担を招き、通常は実行可能性が低い。案件ごとに国税庁資料に照らして適格性を確認する。
- **株式分配 ≠ パーシャルスピンオフ。** 共通の仕組みを使うが、最重要の条件である留保持分（0%と20%未満）が異なる。両者を同一視してはならない。
- **先に100%子会社が必要である。** 事業がまだ親会社内にある場合、分配前に[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割]]（または分割型分割の一段階型）を実施する必要がある。
- **上場メカニズムが適用される。** 自立した上場会社として事業をスピンオフする場合、取引所の上場・開示規則（[[securities/japan-ipo-listing-disclosure-route|the IPO listing / disclosure route]]を参照）およびFSAの開示義務（[[finance/japan-large-shareholding-disclosure|large-shareholding disclosure]]を参照）が適用される。
- **政策ガイダンスは更新される。** METIはFY2026改正後の2026年5月にスピンオフガイドを改訂した。制度詳細は現行のMETI／財務省／国税庁資料で再確認する必要がある。

## 関連

- [[corporate-strategy/INDEX|corporate-strategy INDEX]]
- [[business/sony-fg-partial-spinoff-case|Sony FG partial spinoff case]]
- [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]]
- [[corporate-strategy/spinoff-decision-tree-japan|spinoff decision tree Japan]]
- [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転 regime]]
- [[corporate-strategy/japan-business-succession-jigyou-shoukei|business succession (事業承継)]]
- [[finance/japan-mbo-and-squeeze-out-process|Japan MBO / squeeze-out process]]
- [[finance/japan-acquisition-finance|Japan acquisition finance]]
- [[finance/japan-large-shareholding-disclosure|Japan large-shareholding disclosure]]
- [[securities/japan-ipo-listing-disclosure-route|Japan IPO listing / disclosure route]]
- [[business/japan-listed-corp-strategic-restructuring-matrix|Japan listed-corp strategic-restructuring matrix]]
- [[finance/INDEX|finance INDEX]]
- [[INDEX|FinWiki index]]

## 出典

- METI partial-spinoff / spin-off regime overview (株式分配・スピンオフ税制): https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/spinoff.html
- METI「スピンオフ」の活用に関する手引（制度編, 令和8年5月）改訂案内: https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/oshirase/spinoff-kaitei_20260522.html
- 国税庁 法人税法基本通達 1-4-5 (組織再編成): https://www.nta.go.jp/law/tsutatsu/kihon/hojin/01/01_04_05.htm
- Companies Act (会社法) — 剰余金の配当 / 現物配当 (art. 454 et seq.): https://laws.e-gov.go.jp/document?lawid=417AC0000000086
- FSA English portal (disclosure rules interacting with spin-offs): https://www.fsa.go.jp/en/
- METI「スピンオフの活用に向けた取組」(パーシャルスピンオフ税制): https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/saihenzeisei/spin-off.html
- METI「パーシャルスピンオフ税制 Q&A」: https://www.meti.go.jp/policy/jigyou_saisei/kyousouryoku_kyouka/2306spinoff_QA.pdf
- 財務省「令和6年度税制改正」解説 (要件見直し・適用期限延長): https://www.mof.go.jp/public_relations/finance/202402/202402e.html
- METI「ソニーグループ株式会社の事業再編計画を認定」(2024-02-14): https://www.meti.go.jp/press/2023/02/20240214006/20240214006.html
- Sony Group「Regarding the Partial Spin-off of the Financial Services Business」: https://www.sony.com/en/SonyInfo/IR/library/SFG_pso/

---

> [!info] 校核状态
> confidence: **likely**. The 株式分配 / 適格株式分配 framework (2017 spin-off reform), the pro-rata 100%-subsidiary requirement, the ≈80% employee-retention and business/officer-continuation tests, and the distinction from the 2023 パーシャルスピンオフ measure are confirmed against METI and NTA materials. Exact article citations and qualified-test parameters are technical and fact-specific — confirm per transaction against current NTA / METI guidance.
