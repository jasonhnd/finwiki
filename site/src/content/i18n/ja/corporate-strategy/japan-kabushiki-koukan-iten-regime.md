---
source: corporate-strategy/japan-kabushiki-koukan-iten-regime
source_hash: e1a8c06bb5ed26a3
lang: ja
model: claude-opus-4-8
status: machine
fidelity: ok
title: "株式交換 / 株式移転 (kabushiki koukan / iten) — 完全子会社化および持株会社設立のための株式交換・株式移転レジーム"
translated_at: 2026-06-05T00:00:00.000Z
---

# 株式交換 / 株式移転 (kabushiki koukan / iten) — 完全子会社化および持株会社設立のための株式交換・株式移転レジーム

## ウィキ上の位置づけ

このエントリは [[corporate-strategy/INDEX|corporate-strategy INDEX]] の下に位置し、トランザクションファイナンスのオーバーレイのために [[finance/INDEX|finance INDEX]] へとルーティングする。部分支配の兄弟 (第三の株式側レジーム) については [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付 regime]]、資産レベルとの対比については [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]]、オプションセットの中での位置づけについては [[corporate-strategy/spinoff-decision-tree-japan|spinoff decision tree]]、そして 株式交換 がしばしば後続する現金ビッドの代替については [[finance/japan-tender-offer-process|Japan tender offer process]] とともに読むこと。

## TL;DR

**株式交換 (kabushiki koukan, share exchange)** と **株式移転 (kabushiki iten, share transfer)** は、対価として現金ではなく**株式を用いて**会社全体を単一の親会社の下へ移すための、既存の 2 つの日本の会社法上のメカニズムである。これらは、より新しい [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付]] レジームを両側から挟む株式側の組織再編ツールである:

- **株式交換** は*既存の*会社を対象会社の **100% (完全所有) 親会社**にする。取得会社 (完全親会社) が自社の株式を対象会社の株主へ発行し、株主は対象会社株式の**すべて**を引き渡す。対象会社は 完全子会社 (wholly-owned subsidiary) となる。
- **株式移転** は 1 社以上の既存会社の上に**まったく新しい持株会社**を創設する。新たな 完全親会社 は移転の瞬間に設立され、移転される各会社の株式の**すべて**を受け取る。元の株主は新持株会社の株主となる。

両者は [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付]] と 1 つの決定的な点で異なる: 株式交換 と 株式移転 は **100% 親子会社**関係を生み出すのに対し、株式交付 は支配的だが部分的な持分 (>50%, <100%) で止まる。すべての日本の再編と同様、それぞれが **適格 (qualified, 税制適格) vs 非適格 (non-qualified, 課税)** 軸の上で動く。

法定のレイヤー:

- **会社法第 767〜771 条** が 株式交換 を、**第 772〜774 条** が 株式移転 を規律する (株式交付 はそのすぐ後、第 774 条の 2 以下に位置する)。
- **法人税法第 2 条第 12 号の 16 / 第 2 条第 12 号の 17** および周辺の 組織再編成 規定が 適格 / 非適格 の区別を規律する。
- いずれも**取得会社 / 設立会社の株主特別決議** (2/3 のしきい値) と、会社法上の債権者・反対株主保護の手続を要する。

## 1. 2 つのメカニズムを並べて

| | 株式交換 (share exchange) | 株式移転 (share transfer) |
|---|---|---|
| 親会社 | **既存の**会社 | **新たに設立される**会社 |
| 帰結 | 対象会社が既存取得会社の 完全子会社 になる | 既存会社が新持株会社の 完全子会社 になる |
| 最低取得割合 | 対象会社の 100% | 各移転会社の 100% |
| 対価 | 取得会社自身の株式 (現金 / その他財産も混合可) | 新持株会社自身の株式 |
| 典型的な用途 | 株式対価での完全買収。上場関連会社を完全子会社へ転換 | 純粋持株会社の設立。共同持株会社の下での対等合併 |
| 会社法の条文 | 767〜771 | 772〜774 |
| 決議 | 両社の株主特別決議 (2/3) | 各移転会社の株主特別決議 (2/3) |

直観的には: **株式交換 は既存の会社を対象会社の*上へ*向ける。株式移転 は 1 社以上の会社の上に*新しい*屋根を建てる。** 単一会社の 株式移転 は純粋持株会社への典型的なルートである — 株式移転 が 3 つの競合する方法のうちの 1 つである持株会社設立の専用の取扱いについては [[corporate-strategy/japan-holding-company-conversion|holding-company conversion]] を参照。

## 2. 株式交換 — 詳説

取得会社 (株式交換完全親会社) が対象会社 (株式交換完全子会社) の唯一の株主となる。すべての対象会社株式が効力発生日に**法律の作用により**取得会社へ移る。取得会社は元の対象会社株主に対し対価を直接発行する。

- **上場関連会社の整理**: 最も一般的な用途は、一部保有の上場子会社の少数株主をスクイーズアウトして 100% にすることである。たとえば 53% の親会社は、自社株式を支払うことで 株式交換 を通じて 100% へ移れる — 連結だが上場している子会社を完全子会社へ転換する。
- **キャッシュアウトのバリアント**: 2005 年会社法以降、対価は**現金またはその他の財産**でありうる (対価の柔軟化)。これは先行する TOB なしでスクイーズアウトとして機能する「キャッシュアウト 株式交換」を可能にする。これは [[finance/japan-mbo-and-squeeze-out-process|Japan MBO / squeeze-out process]] のテイクプライベートのツールキットと重なる。
- **反対株主の評価**: 反対する株主は会社にその株式を公正な価格で買い取らせるよう請求できる (株式買取請求権) — [[finance/japan-tender-offer-process|tender-offer]] やスクイーズアウトの構造全体にくり返し現れるのと同じ少数株主保護のメカニズム。

## 3. 株式移転 — 詳説

株式移転 は、その当初の唯一の資産が移転会社の 100% である**新たな**親会社 (株式移転設立完全親会社) を設立する。これは 2 つのパターンの標準的な法的ルートである:

1. **単一会社の持株会社化**: 1 社の事業会社が 株式移転 を行い、自社を新たに創設された純粋持株会社の下に置く。株主は事業会社株式を持株会社株式に 1 対 1 で交換し、事業会社は完全子会社となる。
2. **共同持株会社 / 対等合併**: 2 社 (またはそれ以上) がそれぞれ 1 つの新持株会社へ同時に 株式移転 を行い、その事業法人を合併させることなく両者を共通の親会社の下に置く。多くの日本の金融グループはこのように組み立てられた — その構造は [[finance/japan-listed-financial-groups-investable-universe|the listed-financial-groups universe]] や [[corporate-strategy/INDEX|corporate-strategy INDEX]] に分類された法人を構成する。

新持株会社はゼロから創設されるため、株式移転 は親会社が発行するための既存の株式資本を持つ必要を回避する — 発行可能な株式を持つ既存の取得会社を必要とする 株式交換 と対照的である。

## 4. 税務軸 — 適格 vs 非適格

適格 (qualified) テストは、すべての日本の 組織再編成 (corporate reorganizations) にわたって用いられる論理を反映し、[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|the 会社分割 tax regime]] に文書化された 会社分割 テストと密接に追従する。問いは、株式側の再編が**税制適格 (簿価引継ぎ)** として扱われるか、それとも**課税 (時価評価 + みなし配当)** として扱われるかである。

### 適格テストのシナリオ

1. **100% グループ (完全支配関係)** — 完全子会社グループ内の 株式交換 / 株式移転: 完全支配関係の継続を超える最小限のテスト。
2. **>50% グループ (支配関係)** — 過半数支配グループ内: 事業継続および従業員引継ぎ (≈80%) のテストを加える。
3. **共同事業 (共同事業要件)** — 無関係な当事者間: 完全な一式を加える — 事業関連性 (business relatedness)、事業規模 OR 経営参画 (comparable scale or specified-officer participation)、従業者引継ぎ (employee retention)、事業継続 (business continuation)、および特定の株主による発行親会社株式の 継続保有 (continued holding)。

### 帰結

| | 適格 (qualified) | 非適格 (non-qualified) |
|---|---|---|
| 子会社の資産 | 簿価のまま。利益は認識されない | 定められた場合に時価評価。含み益が顕在化しうる |
| 売却する株主 | 株式対株式の交換に対する即時のキャピタルゲイン課税なし | キャピタルゲイン / みなし配当が生じうる、特に現金対価で |
| 現金対価 | 共同事業のケースで 適格 を破る | 非適格取扱いの一般的なトリガー |

実務上の経験則は他のレジームと同一である: **株式対価は 適格 を維持する。現金対価は一般にそれを破る。** これは、株式調達による結合を [[finance/japan-leveraged-buyout-economics|Japan leveraged-buyout economics]] の現金調達によるテイクプライベートのルートから分かつのと同じ断層線である。

## 5. 株式側レジームの中での位置

日本には現在**3 つの**株式対価の再編レジームがある。その中から選ぶことは、純粋に望む**対象会社の所有割合**に関する問題である:

| レジーム | 対象会社における結果の持分 | 親会社 | 標準的な用途 |
|---|---|---|---|
| **株式交付 (kabushiki koufu)** | >50% から <100% (部分支配) | 既存 | 株式での友好的な部分支配取得 — [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付 regime]] を参照 |
| **株式交換 (kabushiki koukan)** | 100% (完全所有) | 既存 | 株式での完全買収 / 上場関連会社の整理 |
| **株式移転 (kabushiki iten)** | 100% (完全所有) | **新持株会社** | 持株会社設立 / 共同持株会社 |

(株式ではなく)*事業*を移す**資産レベル**の再編については、代わりに [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割]] を用いる。分離側を含む完全なオプションセットは [[corporate-strategy/spinoff-decision-tree-japan|the spinoff decision tree]] に図示されている。

## 6. 手続のタイムライン

両レジームは会社法再編のタイムラインを共有する。これが実行スピードの現実的な下限を定める:

| ステップ | 法定最低期間 | 注記 |
|---|---|---|
| 株式交換契約 / 株式移転計画 の取締役会承認 | — | 当日可能 |
| 本店における計画書類の事前開示 | 株主総会の 2 週間以上前 | 株主 / 債権者の閲覧のため |
| 株主総会特別決議 | — | 2/3 の特別決議しきい値 |
| 債権者保護手続 (creditor objection) (必要な場合) | 1 か月以上の異議申述期間 | 新たな負債類似の対価または特定の条件が適用される場合に必要 |
| 反対株主の株式買取請求 (appraisal demand window) | 効力発生日前後の法定期間 | 反対株主の公正な価格での買取 |
| 効力発生日 + 登記 | 効力発生から 2 週間以内に申請 | 株式移転 は新持株会社も登記する |

争いのない 株式交換 または 株式移転 は取締役会承認から通常 **2〜3 か月**で進行する。上場会社の案件は [[finance/japan-large-shareholding-disclosure|large-shareholding disclosure]] の下での FSA / TSE 開示オーバーヘッドと [[securities/japan-ipo-listing-disclosure-route|the IPO listing / disclosure route]] で参照される上場規則を加える。

## 7. 反論と留意点

- **適格 は事実依存である**: 適格テストは技術的であり、NTA はエッジケースが一般的であるためまさに個別照会の回答事例 (照会事例) を公表している。取引ごとに 適格 ステータスを常に確認すること。
- **キャッシュアウト 株式交換 は精査を招く**: 少数株主を強制排除するために現金対価を用いることは、[[finance/japan-mbo-and-squeeze-out-process|squeeze-out]] に匹敵する評価訴訟やフェアネス・オピニオンの期待を発動させうる。
- **クロスボーダーの制限**: 株式交付 と同様、株式交換 / 株式移転 は**日本の株式会社**のために設計されている。クロスボーダーの株式交換は一般に、これらの国内レジームではなく [[finance/cross-border-m-a-japan|cross-border M&A Japan]] の構造を経由する。
- **持株会社設立はマルチツールの判断である**: 株式移転 は 3 つの持株会社設立方法の 1 つにすぎない。会社分割 の「抜け殻」ルートとのトレードオフは [[corporate-strategy/japan-holding-company-conversion|holding-company conversion]] にある。

## 関連項目

- [[corporate-strategy/INDEX|corporate-strategy INDEX]]
- [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付 regime]]
- [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]]
- [[corporate-strategy/japan-holding-company-conversion|holding-company conversion]]
- [[corporate-strategy/spinoff-decision-tree-japan|spinoff decision tree Japan]]
- [[finance/japan-tender-offer-process|Japan tender offer process]]
- [[finance/japan-mbo-and-squeeze-out-process|Japan MBO / squeeze-out process]]
- [[finance/japan-leveraged-buyout-economics|Japan leveraged-buyout economics]]
- [[finance/japan-large-shareholding-disclosure|Japan large-shareholding disclosure]]
- [[finance/cross-border-m-a-japan|cross-border M&A Japan]]
- [[securities/japan-ipo-listing-disclosure-route|Japan IPO listing / disclosure route]]
- [[INDEX|FinWiki index]]

## 出典

- 会社法 (会社法) の 株式交換 (第 767〜771 条) と 株式移転 (第 772〜774 条): https://laws.e-gov.go.jp/document?lawid=417AC0000000086
- 国税庁「組織再編成に係る行為又は計算の不当性」ほか 組織再編税制 解説: https://www.nta.go.jp/law/joho-zeikaishaku/hojin/070313/04.htm
- 国税庁 法人税法基本通達 1-4-5 (組織再編成): https://www.nta.go.jp/law/tsutatsu/kihon/hojin/01/01_04_05.htm
- METI economic-affairs / 経済法制 ポリシーポータル: https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/
- FSA 英語ポータル (再編と相互作用する開示ルール): https://www.fsa.go.jp/en/

---

> [!info] 校核状态
> confidence: **likely**。株式交換 / 株式移転 は長らく確立した会社法レジームである (法定の根拠は 2005 年会社法の統合に先行する。現金柔軟な対価は 2005 年以降)。適格 / 非適格 の税務テストは技術的かつ事実依存である — NTA のガイダンスと専門家の助言とともに、取引ごとに 適格 ステータスを確認すること。
