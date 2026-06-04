---
source: corporate-strategy/japan-holding-company-conversion
source_hash: 03e07dff28605a38
lang: ja
model: claude-opus-4-8
status: machine
fidelity: ok
title: "持株会社化 (Japan holding-company conversion) — 株式移転 / 株式交換 / 会社分割 (抜け殻方式) による純粋・事業持株会社構造への移行ルート"
translated_at: 2026-06-05T00:00:00.000Z
---

# 持株会社化 (Japan holding-company conversion) — 株式移転 / 株式交換 / 会社分割 (抜け殻方式) による純粋・事業持株会社構造への移行ルート

## ウィキ上の位置づけ

このエントリは [[corporate-strategy/INDEX|corporate-strategy INDEX]] の下に位置し、グループ資本のオーバーレイのために [[finance/INDEX|finance INDEX]] へとルーティングする。これはレジームページではなく、**構造選択ガイド**である。すなわち [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転 regime]] と [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]] で文書化されたレジームの中から選択を行う。分離側の対応物については [[corporate-strategy/spinoff-decision-tree-japan|the spinoff decision tree]] とともに、そしてなぜこれほど多くの日本のグループが持株会社の下に位置するのかについては [[finance/japan-listed-financial-groups-investable-universe|the listed-financial-groups universe]] とともに読むこと。

## TL;DR

**持株会社化 (mochikabu-gaisha-ka, holding-company conversion /「ホールディングス化」)** とは、**持株会社 (持株会社)** がトップに位置し、事業会社を子会社として保有するようにグループを再編する行為である。これはそれ自体が会社法上のメカニズムではなく、3 つの基礎的メカニズムのうちの 1 つを通じて到達する*目標*である。

2 つの構造上の選択があらゆる移行を規定する:

1. **持株会社の類型** — 子会社株式のみを保有し配当で生きる **純粋持株会社 (pure holding company)** か、子会社を保有し*かつ*自らの事業も営む **事業持株会社 (operating holding company)** か。
2. **移行方法** — **株式移転 (share transfer)**、**株式交換 (share exchange)**、または **会社分割 (company split,「抜け殻方式」/ shell method)**。

標準的な対応関係:

- **株式移転** → 会社が*自社自身*を新設の純粋持株会社の下に置く。単一の上場会社が純粋持株会社になるための最も一般的なルート。
- **株式交換** → 既存の会社が対象会社の 100% 親会社 (事業または純粋) になる。将来の持株会社がすでに存在する場合に使われる。
- **会社分割 (抜け殻方式)** → 事業会社が*事業を子会社へ切り出し*、**元の法人を持株会社の殻**として残す (「抜け殻」、空の殻)。元の法人の上場、ライセンス、沿革をトップに保全する。

日本は **1997 年に純粋持株会社に対する戦後の禁止を解除した** (独占禁止法改正) ため、持株会社化はグループ設計の主流ツールとなり、日本の上場グループ各社にわたる「○○ホールディングス」という名称の大きな割合の基礎となっている。

## 1. 純粋持株会社 vs 事業持株会社

| | 純粋持株会社 (pure) | 事業持株会社 (operating) |
|---|---|---|
| 自社事業 | なし — 子会社を保有・管理するのみ | 事業を営み*かつ*子会社を保有 |
| 収益 | 子会社配当 + グループ経営フィー | 営業収益 + 配当 |
| 典型的な名称 | 「○○ホールディングス」/「○○グループ本社」 | 元の事業会社が、いまや親会社でもある |
| 強み | クリーンなグループガバナンス、中立的な資本配分者、柔軟なボルトオン M&A | 設立コストが低い。新たなトップ法人が不要 |
| トレードオフ | 新法人、グループリリーフ / 連結納税上の考慮、配当のみのキャッシュフロー | 親会社自身の事業とグループ監督との利益相反 |

純粋持株会社モデルは、グループがいずれの事業子会社も優遇することなく競合する事業子会社間で資本を配分する**中立的な頂点**を望む場合に好まれる — これは [[business/japan-listed-corp-strategic-restructuring-matrix|the listed-corp strategic-restructuring matrix]] に収録された戦略的再編事例にくり返し現れるテーマである。

## 2. 3 つの移行方法

### 方法 A — 株式移転 (share transfer): 新しい屋根を建てる

事業会社が単独会社の [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式移転]] を実行する。すなわち **新たな純粋持株会社が設立され**、事業会社はその完全子会社となり、株主は事業会社株式を持株会社株式に交換する (通常は 1 対 1)。

- **結果**: 純粋持株会社への最もクリーンな道筋。
- **上場**: *新しい*持株会社が事業会社に代わって上場する (技術的な再上場 / 上場維持は取引所規則の下で処理される)。
- **複数会社のバリアント**: 2 社が同時に 1 つの持株会社へ株式移転する — [[JapanFG/INDEX|JapanFG INDEX]] の多くの金融グループの背後にある共同持株会社 / 対等合併パターン。

### 方法 B — 株式交換 (share exchange): 既存の会社を上に向ける

意図された持株会社 (または取得会社) が**すでに存在する**場合、[[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換]] によってそれを対象会社の 100% 親会社にする。これは取得親会社が自らの事業を引き続き営む場合には通常 **事業持株会社** を生み出し、あるいは既存の持株会社を新たな子会社の上へと拡張する。

### 方法 C — 会社分割 (抜け殻方式 / shell method): 事業会社を空洞化する

元の会社が [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|新設分割]] (または吸収分割) を実行し、その営業事業の**すべて**を新設の (または既存の) 子会社へ移転する。**元の法人はトップに持株会社として残り**、いまや事業子会社の株式のみを保有する — 「空の殻」(抜け殻)。

- **重要な利点**: 頂点の法人が**変わらない**ため、その証券取引所上場、規制ライセンス、契約、企業沿革のすべてが、再上場イベントを伴わずに持株会社レベルに残る。
- **従業員の承継**: これは会社分割を用いるため、雇用契約は 労働契約承継法 の下で**自動的に**承継される (法定の協議手続を伴う) — [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|the 会社分割 regime]] で詳述される承継メカニズム。
- **トレードオフ**: 分割は税制適格となるために 適格 テストを満たさなければならず、債権者保護 / 従業員協議のタイムラインが適用される。

## 3. 方法選択マトリクス

| 目標 | 最適な方法 | 理由 |
|---|---|---|
| 単一上場会社 → 純粋持株会社、クリーンに | **株式移転** | 中立的な頂点を作る。株主は単に新持株会社へ移行するだけ |
| *元の*法人 (その上場 / ライセンス) をトップに保つ | **会社分割 (抜け殻方式)** | 頂点は決して変わらず、事業のみが下へ移る |
| 将来の親会社がすでに存在し、対象を 100% に取り込む | **株式交換** | 既存の会社を対象の上へ向ける |
| 2 社が 1 つの中立的な親会社の下で結合する | **株式移転 (joint)** | 単一の新持株会社への並行移転 (対等合併) |
| 部分的支配のみ (100% でない) — 完全な持株会社化*ではない* | **株式交付** | [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付 regime]] を参照。100% 未満で止まる |

## 4. 税務レイヤー — 適格 取扱いが貫通する

持株会社化は**税務中立**である場合にのみ魅力的であり、それは基礎となるメカニズムが適格でなければならないことを意味する。テストは標準的な 組織再編成 テストである:

- **株式移転 / 株式交換**: 単一会社の移行は通常 **100% グループ (完全支配関係)** 取引である — 最も軽いテストセット — ので、適格 (税制適格) 取扱いは定型的である。テストの詳細については [[corporate-strategy/japan-kabushiki-koukan-iten-regime|the 株式交換 / 株式移転 regime]] を参照。
- **会社分割 (抜け殻方式)**: 子会社への分割は 適格分割 テストを満たさなければならず (完全子会社グループの分割が再び最も軽いケース)、資産を簿価で維持する。繰越欠損金の濫用防止ルール (法人税法第 57 条以下) は、支配関係変更テストが発動すると効いてくることがある。

持株会社が存在するようになると、継続的なグループ課税 (**グループ通算制度** の連結グループレジーム、親子会社間の受取配当の取扱い) が現実的な設計要素となる — [[corporate-strategy/INDEX|this domain]] 全体にわたる税対構造のくり返しの緊張関係。

## 5. なぜグループは移行するのか — 戦略的ドライバー

- **グループガバナンス & 資本配分**: 中立的な頂点は、内部政治ではなくポートフォリオの論理に基づいて事業子会社間で資本をシフトできる。
- **M&A の機動性**: ボルトオン買収は既存の事業法人を乱すことなく持株会社の下の新子会社として収まる。そのファイナンスは [[finance/japan-acquisition-finance|Japan acquisition finance]] に位置する。
- **事業承継**: オーナー経営の会社にとって、持株会社を介在させることは支配を集中させ、世代交代に先立って株式基盤を再構築しうる — 承継税制フレームワークとの相互作用は [[corporate-strategy/japan-business-succession-jigyou-shoukei|business succession (事業承継)]] にある。
- **リスクのリングフェンス**: 別々の事業子会社が負債を隔離する。1 つの問題が頂点や姉妹会社を直接汚染することはない。
- **規制業種の構造**: 金融においては、持株会社モデルは FSA の下での銀行 / 保険持株会社の監督と整合する — [[finance/japan-listed-financial-groups-investable-universe|the listed-financial-groups universe]] の法人がこのように組織されている主要な理由。

## 6. 規制・独占禁止レイヤー

- **独占禁止法**: 純粋持株会社は **1997 年改正まで禁止されていた**。今日では許容されるが、公正取引委員会は過度の集中を生み出すグループ構造を依然として取り締まっている — 合併規制のオーバーレイは [[finance/jftc-merger-control-process|the JFTC merger-control process]] にある。
- **業種別持株会社ルール**: 銀行 / 保険持株会社は専用の FSA 監督 (持株会社 認可) の下に位置し、一般的な会社法メカニズムの上に重ねられる。
- **上場の継続性**: 株式移転の下では取引所が新たな頂点の技術的再上場を処理する。会社分割 (抜け殻方式) の下では頂点の上場が保全される — [[securities/japan-ipo-listing-disclosure-route|the listing / disclosure route]] と相互作用する区別。

## 7. 反論と留意点

- **持株会社はタダではない**: 新たな頂点は管理、取締役会、監査のコストの層を加え、純粋持株会社レベルでの配当のみのキャッシュフローは意図的なグループ配当方針を必要とする。
- **適格 は確認されなければならない**: 税務中立性は選択したメカニズムの適格テストを満たすことに依存する。現金対価や継続性テストの不成立は移行を課税対象に変えうる。
- **事業持株会社における相反**: 事業持株会社は自らの事業の運営と子会社の監督との間で相反に直面しうる — 多くのグループが最終的に純粋持株会社へ移る理由。
- **方法は手段であって目的ではない**: 持株会社化は*成果*である。現実の選択は、そこへ至るために [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式移転 / 株式交換]] と [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割]] のどちらを使うかである。

## 関連項目

- [[corporate-strategy/INDEX|corporate-strategy INDEX]]
- [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転 regime]]
- [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]]
- [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付 regime]]
- [[corporate-strategy/spinoff-decision-tree-japan|spinoff decision tree Japan]]
- [[corporate-strategy/japan-business-succession-jigyou-shoukei|business succession (事業承継)]]
- [[finance/jftc-merger-control-process|JFTC merger-control process]]
- [[finance/japan-acquisition-finance|Japan acquisition finance]]
- [[finance/japan-listed-financial-groups-investable-universe|Japan listed-financial-groups investable universe]]
- [[business/japan-listed-corp-strategic-restructuring-matrix|Japan listed-corp strategic-restructuring matrix]]
- [[securities/japan-ipo-listing-disclosure-route|Japan IPO listing / disclosure route]]
- [[JapanFG/INDEX|JapanFG INDEX]]
- [[INDEX|FinWiki index]]

## 出典

- 会社法 (会社法) — 株式移転 / 株式交換 / 会社分割 の規定: https://laws.e-gov.go.jp/document?lawid=417AC0000000086
- 国税庁 法人税法基本通達 1-4-5 (組織再編成): https://www.nta.go.jp/law/tsutatsu/kihon/hojin/01/01_04_05.htm
- 公正取引委員会 (JFTC) — 独占禁止 / 持株会社政策 (英語): https://www.jftc.go.jp/en/
- METI 経済法制 ポリシーポータル: https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/
- FSA 英語ポータル — 銀行 / 保険持株会社の監督: https://www.fsa.go.jp/en/

---

> [!info] 校核状态
> confidence: **likely**。方法のメカニズム (株式移転 / 株式交換 / 抜け殻方式) と 1997 年の独占禁止法による純粋持株会社禁止の解除は確定した公知の事実である。最適な方法と 適格 ステータスは事案ごとに異なる — 取引ごとに税務上の取扱いと業種規制上の承認を確認すること。
