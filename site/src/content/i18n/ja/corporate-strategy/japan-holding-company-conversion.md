---
source: corporate-strategy/japan-holding-company-conversion
source_hash: 9293aedc347e7bbc
lang: ja
model: qwen3-4b-instruct-2507-4bit-guarded-full-sync+manual-review
status: machine
fidelity: ok
title: "持株会社化 — 株式移転／株式交換／会社分割（抜け殻方式）による純粋持株会社・事業持株会社への移行"
translated_at: 2026-07-29T05:13:34.783Z
---

# 持株会社化 — 株式移転／株式交換／会社分割（抜け殻方式）による純粋持株会社・事業持株会社への移行

## ウィキルート

この項目は[[corporate-strategy/INDEX|corporate-strategy INDEX]]の下に位置し、グループ資本オーバーレイに[[finance/INDEX|finance INDEX]]へルーティングされます。これは**構造選定ガイド**であり、制度ページとは異なり、[[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転 regime]]および[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]]に記載された制度のうちから選ぶもので、[[corporate-strategy/spinoff-decision-tree-japan|the spinoff decision tree]]（売却側の対応）とともに読み、[[finance/japan-listed-financial-groups-investable-universe|the listed-financial-groups universe]]（なぜ多くの日本企業がホールドイング会社を採用しているか）も併せて参照してください。

## TL;DR

**持株会社化（mochikabu-gaisha-ka, holding-company conversion）**とは、グループを再編し、**持株会社**を頂点として事業子会社を保有する構造へ移行することを指す。それ自体が会社法上の一つの手続ではなく、次の3つの基本手法のいずれかで実現する**目的**である。

変換を定義するための2つの構造的選択肢がある。

1. **持株会社の種類** — **純粋持株会社**は子会社株式の保有・管理を主業とし、主に配当収入に依存する。**事業持株会社**は子会社を保有しながら、自らも事業を営む。
2. **移行方法** — **株式移転**、**株式交換**、または**会社分割**（「抜け殻方式」／「シェル方式」）。

標準マッピング：

- **株式移転** → 新設する持株会社（HoldCo）の下へ会社を完全子会社として置く。単独の上場会社が純粋持株会社体制へ移行する最も一般的な経路である。
- **株式交換** → 既存会社を対象会社の100%親会社とする（事業持株会社または純粋持株会社）。将来のHoldCoが既に存在する場合に用いる。
- **会社分割（抜け殻方式）** → 運営会社が自社の事業を**子会社に移転**し、元の法的実体を**HoldCoの殻（「抜け殻」、空の殻）**として残す。元の法的実体の上場、ライセンス、および歴史が保持される。

日本は戦後続いていた純粋持株会社の禁止を、**1997年の独占禁止法改正**で解除した。以後、持株会社化は主流のグループ設計手法となり、上場会社に「○○ホールディングス」という社名が広がる一因となった。

## 1. 純粋な保有会社 vs 業務執行会社

| | 純粋持株会社 (pure) | 事業持株会社 (operating) |
|---|---|---|
| 自社事業 | なし — 連結子会社を保有・管理するのみ | 事業を運営 *かつ* 子会社を保有 |
| 売上高 | 子会社からの配当金 + 連結管理手数料 | 事業売上高 + 配当金 |
| 代表名称 | 「○○ホールディングス」／「○○グループ本社」 | 元の事業会社が親会社機能も担う |
| 長所 | きれいなグループガバナンス、中立的な資本配分、柔軟なM&A追加 | 設立コストが低い；新たなトップエンティティの設立不要 |
| 代償 | 新規エンティティ、グループ対策／連結課税上の考慮、配当金のみのキャッシュフロー | 親会社の自社事業とグループ監督との間の利益相反 |

出典：「純粋」と「運営」は、JFTCおよび日本の会社法関連の政策資料で用いられる機能的表現である。強みとその代償は分析的な検討項目であり、特定のグループに対しての法的効果または推奨とはならない。^[Sources: https://www.jftc.go.jp/dk/guideline/unyoukijun/holding.html; https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/.]

純粋なHoldingCoモデルは、グループが中立的な頂点を持つものを望む場合に好まれ、その頂点は競合する事業運営子会社への資本配分を実施するが、どの会社にも偏りを示さない — これは[[business/japan-listed-corp-strategic-restructuring-matrix|the listed-corp strategic-restructuring matrix]]に収録された戦略的再編案件において繰り返されるテーマである。

## 2. 3つの変換方法

### 方法A — 株式移転（share transfer）：新しい屋根を築く

事業会社が単独で[[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式移転]]を行う。**新しい純粋持株会社を設立**し、事業会社をその完全子会社とする一方、株主は事業会社株式を持株会社株式と交換する（交換比率は通常1対1）。

- **結果**：純粋持株会社への最もシンプルな経路。
- **上場**：運営会社の代わりに*新しい*HoldCoが上場する（技術的再上場／上場維持は取引所規則により処理）。
- **複数会社変形**：2社が同時に1つのHoldCoへの株式移転を行う——多くの金融グループが[[corporate-strategy/INDEX|corporate-strategy INDEX]]において採用する、共同HoldCo／同等間合併パターン。

### 方法B — 株式交換（share exchange）：既存会社を親会社にする

予定するHoldCo（または買収者）が**既に存在する場合**、[[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換]]によってその会社を対象会社の100%親会社とする。親会社が自社事業を継続すれば通常は**事業持株会社**となり、既存の純粋持株会社であれば新たな子会社を傘下に加えることになる。

### 方法C — 会社分割（抜け殻方式 / shell method）：事業を実施しない会社を空にする

元会社は[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|新設分割]]（または吸収分割）を実施し、事業を新設（または既存）の子会社へ移転する。元の法人は頂点に残り、事業子会社の株式を保有する「抜け殻」となる。

- **重要な境界**：頂点会社は**変わらない**が、移転事業に付随する契約、従業員、その他の権利は案件ごとに検討が必要である。会社分割によってすべての事業許認可が当然に移転するとは限らない。
- **従業員の移転**：この場合に会社分割が用いられるため、労働契約は**自動的に継承**される（法定の相談手続を経ることで）——詳細は[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|the 会社分割 regime]]に記載。
- **トレードオフ**：課税繰延べには適格分割の要件を満たす必要がある。また、債権者保護と従業員協議の日程が適用される。

## 3. 方法選定マトリクス

| 目的 | 最適な方法 | 理由 |
|---|---|---|
| 1社の株式会社 → 純粋なHoldCo、クリーンな構造 | **株式移転** | 中間の頂点を中立的に行い、株主は単に新しいHoldCoに移行する |
| 当初の企業（その上場・認可資格など）をそのままトップに保つ | **会社分割（抜け殻方式）** | 頂点自体は変化しない；事業だけが下に移動する |
| 将来の親会社が既に存在し、対象会社を100%傘下に置く | **株式交換** | 既存会社を対象会社の親会社にする |
| 2社が1つの中立的親会社の下に統合 | **株式移転（共同）** | 両社が並行して1つの新しいHoldCoに移転（等価合併） |
| 部分的な支配のみ（100%ではない）——完全なHoldCo変換ではない | **株式交付** | [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付 regime]]を参照；100%未満で停止 |

対象：このマトリクスは、会社法に基づく株式移転、株式交換、会社分割、および株式交付の法的効果を示している。「最適な方法」とは、この簡易的判断支援において、構造的に最も近い一致を指す。税適格性、交換処理、許可、債権者権利、および業界承認については別途評価が必要である。^[Sources: https://laws.e-gov.go.jp/document?lawid=417AC0000000086; https://www.mof.go.jp/tax_policy/summary/corporation/c06.htm.]

## 4. 税務層 — 適格扱いによる課税繰延べ

保有会社の変更は、**課税中立**である場合にのみ魅力的であり、その際、基本的な 組織再編成 のテストが適用される。

- **株式移転 / 株式交換**：単独会社の移行は通常、**100%グループ（完全支配関係）**の再編であり、要件が比較的簡素なため、適格（課税繰延べ）扱いが標準的である。詳細は[[corporate-strategy/japan-kabushiki-koukan-iten-regime|the 株式交換 / 株式移転 regime]]を参照。
- **会社分割（抜け殻方式）**：子会社への分割は適格分割の要件を満たす必要があり、適格であれば資産の簿価を引き継ぐ。所有権変更の判定に該当する場合、繰越欠損金の濫用防止規定（法人税法第57条以下）が適用され得る。

HoldCo設立後は、継続的なグループ課税（**グループ通算制度**による損益通算、親子会社間の受取配当の取扱い）が実際の設計要因となる。これは[[corporate-strategy/INDEX|this domain]]で繰り返し現れる、税制と法的構造の緊張関係である。

## 5. なぜグループが変更を行うのか — 戦略的要因

- **グループのガバナンスおよび資本配分**：中立的な頂点会社は、内部の政治的要因よりもポートフォリオ論理に基づいて、事業運営子会社間で資本を移動できる。
- **M&Aの柔軟性**：追加買収をHoldCo傘下の新たな子会社として組み込み、既存の事業会社への影響を抑えられる。資金調達は[[finance/japan-acquisition-finance|Japan acquisition finance]]を参照。
- **事業継承**：所有者経営型企業において、HoldCoを中間に設けることで、権利の集中と株式ベースの再構築が可能になり、世代交代前に制御を再編できる。継承課税枠組みとの相互作用は [[corporate-strategy/japan-business-succession-jigyou-shoukei|business succession (事業承継)]] に記載されている。
- **リスクの分離**：運営される子会社が独立しており、一つの会社の問題が頂点会社または姉妹会社に直接影響を及ぼさない。
- **規制業界の構造**：金融業において、HoldCoモデルはFSAによる銀行・保険会社のホールディング会社監督体制と一致しており、[[finance/japan-listed-financial-groups-investable-universe|the listed-financial-groups universe]] の会社がこの構造を採用する主な理由である。

## 6. リスクおよび独占禁止法的層

- **独占禁止法**：純粋持株会社は1997年改正まで禁止されていた。現在は認められるが、公正取引委員会は過度の事業支配力集中を招き得るグループ構造を引き続き監視する。企業結合審査は[[finance/jftc-merger-control-process|the JFTC merger-control process]]を参照。
- **業法上の持株会社規制**：銀行・保険持株会社は、一般の会社法上の仕組みに加え、持株会社認可を含む金融庁の専門監督を受ける。
- **上場継続性**：株式移転の場合は、取引所規則により新設頂点会社の技術的再上場が処理される；会社分割（抜け殻方式）の場合は、頂点会社の上場が維持される — これは[[securities/japan-ipo-listing-disclosure-route|the listing / disclosure route]]との相互作用を持つ。

## 7. 反論と注意点

- **HoldCoは完全に自由ではない**：新しい頂点会社は管理、取締役、監査費用を追加し、純粋なHoldCoレベルの配当のみのキャッシュフローには、明確なグループ間配当方針が必要となる。
- **適格の確認が必須**：課税中立性は、選択されたメカニズムの適格条件を満たす必要がある。現金対価または継続性の欠如が、変更を課税対象にすることがある。
- **事業持株会社における対立**：事業を運営するHoldCoは、自社の事業運営と子会社の監督の間に対立を生じる可能性がある。そのため、多くのグループは最終的に純粋持株会社に移行する。
- **方法は手段であり、目的ではない**：持株会社化は「結果」である。実際の選択は、[[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式移転 / 株式交換]]または[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割]]のどちらを使用するかである。

## 関連

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
- [[INDEX|FinWiki index]]

## 出典

- Companies Act (会社法) — 株式移転 / 株式交換 / 会社分割 provisions: https://laws.e-gov.go.jp/document?lawid=417AC0000000086
- 国税庁 法人税法基本通達 1-4-5 (組織再編成): https://www.nta.go.jp/law/tsutatsu/kihon/hojin/01/01_04_05.htm
- 公正取引委員会 (JFTC) — antimonopoly / holding-company policy (English): https://www.jftc.go.jp/en/
- METI 経済法制 policy portal: https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/
- FSA English portal — bank / insurance holding-company supervision: https://www.fsa.go.jp/en/

---

> [!info] 校核状态
> confidence: **likely**. Method mechanics (株式移転 / 株式交換 / 抜け殻方式) and the 1997 Antimonopoly Act lifting of the pure-HoldCo ban are settled public facts. The optimal method and 適格 status are case-specific — confirm tax treatment and sector-regulatory approvals per transaction.
