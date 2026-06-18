---
source: corporate-strategy/japan-kabushiki-koukan-iten-regime
source_hash: 79f5012292a23d1b
lang: ja
status: machine
fidelity: ok
title: "株式交換 / 株式移転 (kabushiki koukan / iten) — 完全子会社化および持株会社設立のための株式交換・株式移転制度"
translated_at: 2026-06-18T23:33:48.322Z
---

# 株式交換 / 株式移転 (kabushiki koukan / iten) — 完全子会社化および持株会社設立のための株式交換・株式移転制度

## Wiki ルート

このエントリは [[corporate-strategy/INDEX|corporate-strategy INDEX]] の下に位置し、取引ファイナンスのオーバーレイとして [[finance/INDEX|finance INDEX]] につながる。部分支配の兄弟制度（三つ目の株式側制度）については [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付 regime]]、資産レベルの対比については [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]]、選択肢の位置づけについては [[corporate-strategy/spinoff-decision-tree-japan|spinoff decision tree]]、そして株式交換がしばしばその後に続く現金買付の代替手段については [[finance/japan-tender-offer-process|Japan tender offer process]] と併せて読むこと。

## TL;DR

**株式交換 (kabushiki koukan, share exchange)** と **株式移転 (kabushiki iten, share transfer)** は、**現金ではなく株式**を対価として、会社全体を単一の親会社の下に移すための、既存の日本の会社法上の二つのメカニズムである。これらは、より新しい [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付]] 制度を挟む株式側の組織再編ツールである。

- **株式交換**は、*既存の*会社を対象会社の **100%（完全）親会社**にする。取得者（完全親会社）は自社株式を対象会社の株主に発行し、株主は**すべての**対象会社株式を引き渡す。対象会社は完全子会社となる。
- **株式移転**は、一つまたは複数の既存会社の上に**まったく新しい持株会社**を創設する。新しい完全親会社は移転の時点で設立され、移転される各会社の**すべての**株式を受け取る。元の株主は新しい持株会社（HoldCo）の株主となる。

両者はいずれも、一つの決定的な点で [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付]] と異なる。すなわち、株式交換と株式移転は **100%の親子**関係を生み出すのに対し、株式交付は支配権を持つが部分的な持分（>50%、<100%）にとどまる。すべての日本の組織再編と同様に、いずれも **適格（税繰延）対 非適格（課税）**という軸の上で運用される。

法令上の層は次のとおりである。

- **会社法第 767条〜第 771条**が株式交換を規律し、**第 772条〜第 774条**が株式移転を規律する（株式交付はそのすぐ後、第 774条〜第 2 条以下に位置する）。
- **法人税法第 2条（第 12項〜第 16項）／第 2条（第 12項〜第 17項）**および周辺の組織再編成の規定が、適格／非適格の区分を規律する。
- いずれも**取得会社／設立会社の株主の特別決議**（2／3 の閾値）と、会社法上の債権者保護および反対株主保護の手続を要する。

## 1. 二つのメカニズムの対比

| | 株式交換 (share exchange) | 株式移転 (share transfer) |
|---|---|---|
| 親会社 | **既存の**会社 | **新たに設立される**会社 |
| 結果 | 対象会社が既存の取得者の完全子会社となる | 既存の会社が新しい持株会社の完全子会社となる |
| 最低取得割合 | 対象会社の 100% | 移転される各会社の 100% |
| 対価 | 取得者の自社株式（現金／その他財産も混在可能） | 新しい持株会社の自社株式 |
| 典型的な用途 | 株式対価による完全買収。上場関連会社の完全子会社化 | 純粋持株会社の設立。共同持株会社の下での対等合併 |
| 会社法の条文 | 767〜771 | 772〜774 |
| 決定 | 両社の株主の特別決議（2／3） | 各移転会社の株主の特別決議（2／3） |

直観的には、**株式交換は既存の会社を対象会社の*上に*差し向けるものであり、株式移転は一つまたは複数の会社の上に*新しい*屋根を建てるものである。** 単独会社の株式移転は、純粋持株会社への定型的なルートである — 株式移転が三つの競合する手法のうちの一つである持株会社設立の専門的な取扱いについては、[[corporate-strategy/japan-holding-company-conversion|holding-company conversion]] を参照のこと。

## 2. 株式交換 — 詳細

取得会社（株式交換完全親会社）は、対象会社（株式交換完全子会社）の唯一の株主となる。すべての対象会社株式は、**効力発生日に法律上当然に**取得者へ移転する。取得者は対価を元の対象会社株主に直接発行する。

- **上場関連会社のクリーンアップ**：最も一般的な用途は、一部を保有する上場子会社の少数株主をスクイーズアウトして非公開化（100%）することである。たとえば 53% にある親会社は、自社株式を対価として株式交換により 100% まで移行でき、連結対象だが上場している子会社を完全子会社に転換する。
- **キャッシュアウト・バリアント**：2005 年の会社法以降、対価は**現金またはその他の財産**となりうる（対価の柔軟化）。これにより、先行する TOB なしにスクイーズアウトとして機能する「キャッシュアウト株式交換」が可能となる。これは [[finance/japan-mbo-and-squeeze-out-process|Japan MBO / squeeze-out process]] における非公開化のツールキットと重なる。
- **反対株主の株式買取請求**：反対する株主は、会社に対し公正な価格での自社株式の買取りを請求できる（株式買取請求権）— これは [[finance/japan-tender-offer-process|tender-offer]] およびスクイーズアウトの構造全体で繰り返し現れる、同じ少数株主保護のメカニズムである。

## 3. 株式移転 — 詳細

株式移転は、最初の資産が移転される会社の株式の 100% のみである**新しい**親会社（株式移転設立完全親会社）を設立する。これは二つのパターンに対する標準的な法的ルートである。

1. **単独会社の持株会社化**：一つの事業会社が株式移転を行い、新たに創設された純粋持株会社の下に自社を置く。株主は事業会社株式を持株会社株式と一対一で交換し、事業会社は完全子会社となる。
2. **共同持株会社／対等合併**：二つ（またはそれ以上）の会社が、それぞれ同時に一つの新しい持株会社への株式移転を行い、両社の事業実体を合併させることなく、共通の親会社の下に両社を置く。多くの日本の金融グループはこの方法で組成された — その構造は [[finance/japan-listed-financial-groups-investable-universe|the listed-financial-groups universe]] に、そしてその実体は [[corporate-strategy/INDEX|corporate-strategy INDEX]] に収録されている。

新しい持株会社はゼロから創設されるため、株式移転は、親会社が発行のための既存の資本金を持つ必要を回避する — これは、発行可能な株式を持つ既存の取得者を必要とする株式交換と対照的である。

## 4. 税務の軸 — 適格 対 非適格

適格テストは、すべての日本の組織再編成にわたって用いられるロジックを反映し、[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|the 会社分割 tax regime]] に記録された会社分割のテストと密接に対応する。問題は、株式側の組織再編が**税繰延（簿価引継ぎ）**として扱われるか、**課税（時価評価＋みなし配当）**として扱われるかである。

### 適格テストのシナリオ

1. **100%グループ（完全支配関係）** — 完全所有グループ内での株式交換／株式移転：完全支配関係の継続を超えるテストは最小限。
2. **>50%グループ（支配関係）** — 過半数支配グループ内：事業継続および従業者引継ぎ（≈80%）のテストが加わる。
3. **共同事業（共同事業要件）** — 非関連当事者間：完全な一連のテストが加わる — 事業関連性、事業規模 OR 経営参画（比較可能な規模または特定役員の参画）、従業者引継ぎ、事業継続、および継続保有（特定の株主による発行親会社株式の継続保有）。

### 帰結

| | 適格 (qualified) | 非適格 (non-qualified) |
|---|---|---|
| 子会社の資産 | 簿価のまま。利益は認識されない | 定められた場合に時価評価される。内包利益が実現しうる |
| 売却株主 | 株式対株式の交換に対する直ちの譲渡益課税はない | 譲渡益／みなし配当が生じうる。特に現金対価の場合 |
| 現金対価 | 共同事業の場合に適格を破る | 非適格扱いの一般的なトリガー |

実務上の経験則は他の制度と同一である。すなわち、**株式対価は適格を保ち、現金対価は一般にこれを破る。** これは、株式で資金調達される結合と、[[finance/japan-leveraged-buyout-economics|Japan leveraged-buyout economics]] における現金で資金調達される非公開化ルートとを分ける、同じ断層線である。

## 5. 株式側の諸制度の中での位置づけ

日本には現在、**三つ**の株式対価による組織再編制度が存在する。それらの中から選択することは、純粋に、対象会社に対して望む**保有割合**の問題である。

| 制度 | 対象会社における結果としての持分 | 親会社 | 定型的な用途 |
|---|---|---|---|
| **株式交付 (kabushiki koufu)** | >50% から <100% まで（部分支配） | 既存 | 株式による友好的な部分支配の取得 — [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付 regime]] を参照 |
| **株式交換 (kabushiki koukan)** | 100%（完全所有） | 既存 | 株式による完全買収／上場関連会社のクリーンアップ |
| **株式移転 (kabushiki iten)** | 100%（完全所有） | **新しい持株会社** | 持株会社の設立／共同持株会社 |

**資産レベル**（株式レベルではなく）の組織再編 — *株式*ではなく*事業*を移す場合 — については、代わりに [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割]] を用いること。売却側を含む完全な選択肢のセットは [[corporate-strategy/spinoff-decision-tree-japan|the spinoff decision tree]] にマッピングされている。

## 6. 手続のタイムライン

両制度はいずれも会社法の組織再編のタイムラインを共有しており、これが実行速度の現実的な下限を定める。

| ステップ | 法定の最短期間 | 注記 |
|---|---|---|
| 株式交換契約／株式移転計画の取締役会承認 | — | 即日も可能 |
| 本店における計画書類の事前開示 | 株主総会の 2 週間以上前 | 株主／債権者の閲覧のため |
| 株主総会の特別決議 | — | 2／3 の特別決議の閾値 |
| 必要な場合の債権者保護手続（債権者異議） | 1 か月以上の異議申述期間 | 新たな負債類似の対価または特定の条件が適用される場合に必要 |
| 反対株主の株式買取請求（買取請求の期間） | 効力発生日前後の法定の期間 | 反対株主の公正価格での買取り |
| 効力発生日＋登記 | 効力発生から 2 週間以内の申請 | 株式移転は新しい持株会社の登記も行う |

争いのない株式交換または株式移転は、通常、取締役会承認から **2〜3 か月**を要する。上場会社の取引は、[[finance/japan-large-shareholding-disclosure|large-shareholding disclosure]] および [[securities/japan-ipo-listing-disclosure-route|the IPO listing / disclosure route]] で参照される上場規則の下で、金融庁／東証の開示の負担が加わる。

## 7. 反論と留意点

- **適格は事実に依存する**：適格テストは技術的であり、国税庁は個別の照会回答事例（照会事例）を公表しているが、これはまさにエッジケースが一般的だからである。取引ごとに適格の状況を必ず確認すること。
- **キャッシュアウト株式交換は精査を招く**：現金対価を用いて少数株主を強制的に締め出すことは、[[finance/japan-mbo-and-squeeze-out-process|squeeze-out]] に匹敵する買取価格をめぐる訴訟やフェアネス・オピニオンの期待を引き起こしうる。
- **クロスボーダーの限界**：株式交付と同様に、株式交換／株式移転は**日本の株式会社**向けに設計されている。クロスボーダーの株式交換は、一般にこれらの国内制度ではなく [[finance/cross-border-m-a-japan|cross-border M&A Japan]] の構造を経由する。
- **持株会社の設立は複数ツールによる決定**：株式移転は三つの持株会社設立手法のうちの一つにすぎない。会社分割の「抜け殻」ルートとのトレードオフは [[corporate-strategy/japan-holding-company-conversion|holding-company conversion]] にある。

## 関連

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

- 会社法（会社法）の株式交換（第 767条〜第 771条）および株式移転（第 772条〜第 774条）について：https://laws.e-gov.go.jp/document?lawid=417AC0000000086
- 国税庁「組織再編成に係る行為又は計算の不当性」ほか 組織再編税制 解説：https://www.nta.go.jp/law/joho-zeikaishaku/hojin/070313/04.htm
- 国税庁 法人税法基本通達 1-4-5 （組織再編成）：https://www.nta.go.jp/law/tsutatsu/kihon/hojin/01/01_04_05.htm
- 経済産業省 経済法制 政策ポータル：https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/
- 金融庁 英語ポータル（組織再編と相互作用する開示規則）：https://www.fsa.go.jp/en/

---

> [!info] 校核状态
> confidence: **likely**。株式交換／株式移転は長く確立された会社法上の制度である（法令上の基礎は 2005 年の会社法の統合に先立ち、現金柔軟化された対価は 2005年以降）。適格／非適格の税務テストは技術的かつ事実に依存する — 取引ごとに、国税庁のガイダンスおよび専門家の助言により適格の状況を確認すること。
