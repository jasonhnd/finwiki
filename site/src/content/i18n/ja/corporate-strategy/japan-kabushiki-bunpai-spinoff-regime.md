---
source: corporate-strategy/japan-kabushiki-bunpai-spinoff-regime
source_hash: 55cb69a28774c1ec
lang: ja
model: claude-opus-4-8
status: machine
fidelity: ok
title: "株式分配 (kabushiki bunpai) — 日本の株式分配 / 純粋スピンオフレジーム (適格株式分配) と パーシャルスピンオフ との違い"
translated_at: 2026-06-05T00:00:00.000Z
---

# 株式分配 (kabushiki bunpai) — 日本の株式分配 / 純粋スピンオフレジーム (適格株式分配) と パーシャルスピンオフ との違い

## ウィキ上の位置づけ

このエントリは [[corporate-strategy/INDEX|corporate-strategy INDEX]] の下に位置し、資本市場のオーバーレイのために [[finance/INDEX|finance INDEX]] へとルーティングする。これは**分配側**のスピンオフメカニズムである — 子会社株式を親会社自身の株主へ交付する現物配当。同じ発想の*持分残置*バリアントである [[corporate-strategy/partial-spinoff-tax-deferral|partial spinoff tax deferral]] と直接対比し、分配に通常先行する*カーブアウトの配管*である [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]]、そして他のあらゆる分離ルートとの位置づけについては [[corporate-strategy/spinoff-decision-tree-japan|the spinoff decision tree]] とともに読むこと。

## TL;DR

**株式分配 (kabushiki bunpai, share distribution)** は、親会社が**完全子会社の株式を自社自身の株主へ**現物配当 (現物分配) として分配する日本のメカニズムである。これは**古典的 / 完全スピンオフ (スピンオフ)** の法的核心である — 親会社は子会社について**何も**保有しなくなり、子会社は元の親会社の株主によりその既存持分に比例して直接保有される独立した上場 (または上場可能な) 会社となる。

このエントリが解決する重要な区別 — [[corporate-strategy/INDEX|domain index]] が「よく混同される」と注記するもの:

- **株式分配 (完全スピンオフ)** — 親会社が子会社の **100%** を分配し **0%** を残す。その適格形態が **適格株式分配** であり、2017 年のスピンオフ税制改正によって創設された。
- **パーシャルスピンオフ (部分スピンオフ)** — 親会社が子会社の大部分を分配するが **最大 20% を残す**。これは [[corporate-strategy/partial-spinoff-tax-deferral|partial spinoff tax deferral]] に文書化された 2023 年の特例措置である — 株式分配 のフレームワークの*上に*構築された緩和。
- **会社分割 (company split)** — **事業**を子会社へ移す*資産レベル*のメカニズム。これは、その後分配される完全子会社を創設するためにしばしば用いられる**配管**である。[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|the 会社分割 tax regime]] を参照。

要するに: **会社分割 が箱を作り、株式分配 がその箱を株主へ手渡す。** 日常的な意味での「スピンオフ」は通常、(子会社を形成するための) 新設分割 に続いて (それを分配するための) 適格株式分配 を、1 つの計画されたシークエンスとして実行したものである。

法定のレイヤー:

- **会社法第 454 条 / 剰余金の配当** が、株式を交付するために用いられる現物配当 (現物配当) を規律する。全株主への 100% 子会社のプロラタ分配が適格パターンである。
- **法人税法第 2 条第 12 号の 15 の 2 / 第 2 条第 12 号の 15 の 3** および周辺の 組織再編成 規定が **適格株式分配** とその税制適格取扱いを定義する。
- **適格株式分配** は、分配される株式に対する**法人レベルの利益**と、通常の現物配当が発動させる**株主レベルのみなし配当 / キャピタルゲイン**の双方をオフにする。

## 1. 日本の税法におけるスピンオフの 2 つの顔

2017 年のスピンオフ改正は実際には**2 つの**適格スピンオフパターンを定義した。両者は同じ経済的結果 — 事業が元の株主によって保有される独立した会社になる — を狙うが、それに到達する方法が異なる:

| パターン | メカニズム | 何が移るか | 典型的な出発点 |
|---|---|---|---|
| **適格株式分配 (qualified share distribution)** | 子会社株式の現物分配 | 既存の完全子会社の**株式** | 親会社がすでに対象を 100% 子会社として保有 |
| **単独新設分割型分割 (independent incorporation-type split)** | その対価が親会社の株主へ**直接**渡る 新設分割 | **事業**を、その株式が株主に渡る新会社へと切り出す | 事業がまだ親会社内にあり、まず切り出さなければならない |

このエントリは、より一般的なルートである **適格株式分配** に焦点を当てる。なぜなら、ほとんどのスピンオフはまず [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|新設分割]] を用いて事業をクリーンな 100% 子会社に入れ、*それから*その子会社を 株式分配 によって分配するからである。分割型分割 (分割型分割) は、まだサイロ化されていない事業についてその 2 ステップを 1 つに畳み込む。

## 2.「株式分配」が正確に何を意味するか

株式分配 は法人税法上の**定義された用語**である: 分配する法人が**完全子法人 (wholly-owned subsidiary)** の株式をその株主へ手渡し、分配後に株主が**親会社における持株割合に比例して**子会社を直接保有するような現物分配 (現物分配)。

3 つの特徴が本質的である:

1. **これは売却ではなく配当である。** 株主レベルで現金は変動しない。株主は親会社からの分配の代わりに (または分配として) 子会社株式を受け取る。
2. **プロラタでなければならない。** すべての株主が、その既存の親会社持分に厳密に沿って子会社株式を受け取る。非プロラタまたは選択的な分配はレジームを破る。
3. **直前に子会社が 100% 所有されていなければならない。** 株式分配 は 完全子法人 を分配する。部分子会社は適格とならない (それがまさに [[corporate-strategy/partial-spinoff-tax-deferral|パーシャルスピンオフ]] レジームが後に*残置*の側から対処したギャップである)。

## 3. 適格株式分配 — 適格テスト

評価益のある子会社株式の素の現物分配は、通常 2 度課税を発動させる — 親会社における法人利益と、株主におけるみなし配当 / キャピタルゲイン。**適格株式分配** はその双方をオフにする。適格となるためには、分配は、[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|the 会社分割 regime]] のより広い 組織再編成 フレームワークの精神に合致する一連のテストを満たさなければならない:

- **存続する事前の支配関係がないこと** — 親会社は、スピンオフされた会社を引き続き支配することになる別の当事者の支配下にあって*はならない*。スピンオフは真に子会社を切り離さなければならない (真のスピンオフの「独立性」の精神)。
- **分配後の支配が見込まれないこと** — 分配後にスピンオフされた会社に対する支配関係を再確立する予定された取決めがあってはならない。
- **すべての子会社株式のプロラタ分配** — 完全子法人 のすべての株式が、株主の親会社持分に厳密に比例して分配される。
- **従業員の維持 (従業者継続)** — 子会社の従業員のおよそ **80%** が分配後にその事業において継続することが見込まれる。
- **事業の継続 (事業継続)** — 子会社の主要事業がスピンオフ後に継続することが見込まれる。
- **特定役員の継続** — 子会社の主要な役員 (特定役員) が継続することが見込まれる。

これらが成立するとき、分配される株式は**簿価**で移り、親会社は**利益を認識せず**、株主は単に**その基準を新たな直接保有へ繰り入れる**ものとして扱われる — いずれのレベルでも**即時の税はない**。

## 4. 税務上の帰結 — 適格 vs 非適格

| | 適格株式分配 (qualified) | 非適格 現物分配 (non-qualified) |
|---|---|---|
| 分配株式に対する親会社レベルの利益 | **なし** — 簿価移転 | 時価評価。含み益が顕在化する |
| 株主レベルの税 | **なし** — 基準が新たな直接保有へ引き継がれる | **みなし配当 (みなし配当)** + 可能なキャピタルゲイン |
| 子会社の税務属性 | 一般に保全される | 撹乱される。欠損金制限ルールと相互作用しうる |
| 正味の効果 | 税務中立の分離 | 二重層の税 — 通常はディールブレーカー |

株主レベルの**みなし配当 (みなし配当)** は、非適格分配が生み出す目玉のリスクである: 株主は、それを支払う現金なしに、単に古い株式に代えて受け取った株式に対して配当税を負いうる — [[corporate-strategy/japan-business-succession-jigyou-shoukei|business-succession regime]] が相続側で取り組むのと同じ「流動性に乏しい受領に対する税」の罠。したがって 適格 ステータスは実務上オプションではない。それが要点のすべてである。

## 5. 株式分配 vs パーシャルスピンオフ vs 会社分割 — 混同の解決

これはドメインインデックスが指摘する比較である。3 つは代替ではなく、異なるレイヤーである:

| | 適格株式分配 (full spin-off) | パーシャルスピンオフ (partial) | 会社分割 (company split) |
|---|---|---|---|
| 作用するレベル | 株主への**株式**分配 | 株主への**株式**分配 | **資産 / 事業**の移転 |
| 親会社の残余持分 | **0%** | **最大 20%** を残置 | N/A (それ自体は分配しない) |
| 株主に直接届くか? | はい — 株主が子会社を保有 | はい — 残置分を除いて | いいえ — 株式は承継会社へ渡る |
| 役割 | 既存の子会社を株主へ手渡す | 同上、ただし少数アライアンス持分を保持 | 分配されるべき子会社を**創設**する |
| レジーム | 適格株式分配 (2017) | 特例措置 (2023) — [[corporate-strategy/partial-spinoff-tax-deferral|partial spinoff tax deferral]] を参照 | 適格分割 — [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]] を参照 |

決定的なメンタルモデル: **会社分割 は子会社を作る動詞。株式分配 はそれを譲り渡す動詞。パーシャルスピンオフ は 20% の引き綱付きの 株式分配 である。** 完全な古典的スピンオフは通常、1 つの計画として実行される **新設分割 → 適格株式分配** である。完全なオプションセットは [[corporate-strategy/spinoff-decision-tree-japan|the spinoff decision tree]] に位置する。

## 6. なぜ親会社は完全スピンオフを行うのか

- **ピュアプレイへの集中 / コングロマリット・ディスカウント**: 無関係な事業を分離することで、各会社が自社固有のマルチプルで評価されうる — [[business/japan-listed-corp-strategic-restructuring-matrix|the listed-corp strategic-restructuring matrix]] の事例をも駆動する古典的な論拠。
- **キャッシュ不要の分離**: 売却とは異なり、スピンオフは**買い手も資金調達も不要**である — 価値は第三者ではなく既存の株主へ渡り、[[finance/japan-mbo-and-squeeze-out-process|the MBO / squeeze-out process]] の現金ルートと対照をなす。
- **経営インセンティブの整合**: スピンオフされた会社は自社固有のエクイティ通貨と独立した取締役会を得る。
- **税務中立性**: 適格株式分配 は分離を両レベルで非課税にする — これは、売主にとって課税対象となる完全な [[finance/japan-acquisition-finance|financed]] 処分からスピンオフを分かつ特徴である。

パーシャルスピンオフ に対するトレードオフはアライアンスの保持である: **完全な** 株式分配 は親会社を完全に断ち切るのに対し、部分レジームは親会社が戦略的少数持分を保つことを可能にする — 2023 年の措置が追加された理由。

## 7. 反論と留意点

- **適格 は耐荷重の要件である。** 適格テストに不合格となるスピンオフは二重の税負担 (法人利益 + 株主みなし配当) を被り、行う価値はめったにない。NTA のガイダンスに対して取引ごとに 適格 ステータスを確認すること。
- **株式分配 ≠ パーシャルスピンオフ。** 両者は機構を共有するが、最も重要な単一パラメータ — 残置持分 (0% 対 最大 20%) — で異なる。互換的に扱ってはならない。
- **まず 100% 子会社が必要である。** 事業がまだ親会社内にある場合、分配の前に [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割]] (または 分割型分割 のワンステップバリアント) が先行しなければならない。
- **上場メカニズムが適用される。** 事業を独立して上場する会社としてスピンオフすることは、取引所の上場・開示ルールを発動させ — [[securities/japan-ipo-listing-disclosure-route|the IPO listing / disclosure route]] を参照 — [[finance/japan-large-shareholding-disclosure|large-shareholding disclosure]] で参照される FSA の開示義務を伴う。
- **政策ガイダンスは進化する。** METI はそのスピンオフ手引を定期的に更新する (最新版は 2024〜2025 年)。レジームの詳細は現行の METI / NTA 資料に対して再確認を要するものとして扱うこと。

## 関連項目

- [[corporate-strategy/INDEX|corporate-strategy INDEX]]
- [[corporate-strategy/partial-spinoff-tax-deferral|partial spinoff tax deferral]]
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

- METI パーシャルスピンオフ / スピンオフ レジーム概要 (株式分配・スピンオフ税制): https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/spinoff.html
- METI「スピンオフ」の活用に関する手引（制度編, 令和7年7月）: https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/pdf/20250714-spinoff.pdf
- 国税庁 法人税法基本通達 1-4-5 (組織再編成): https://www.nta.go.jp/law/tsutatsu/kihon/hojin/01/01_04_05.htm
- 会社法 (会社法) — 剰余金の配当 / 現物配当 (第 454 条以下): https://laws.e-gov.go.jp/document?lawid=417AC0000000086
- FSA 英語ポータル (スピンオフと相互作用する開示ルール): https://www.fsa.go.jp/en/

---

> [!info] 校核状态
> confidence: **likely**。株式分配 / 適格株式分配 のフレームワーク (2017 年スピンオフ改正)、プロラタの 100% 子会社要件、≈80% 従業員維持および事業 / 役員継続のテスト、そして 2023 年 パーシャルスピンオフ 措置との区別は、METI と NTA の資料に対して確認済みである。正確な条文の引用と適格テストのパラメータは技術的かつ事実依存である — 現行の NTA / METI ガイダンスに対して取引ごとに確認すること。
