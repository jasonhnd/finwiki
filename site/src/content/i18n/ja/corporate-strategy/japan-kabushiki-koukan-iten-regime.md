---
source: corporate-strategy/japan-kabushiki-koukan-iten-regime
source_hash: 4c009aeabe1ee970
lang: ja
model: qwen3-4b-instruct-2507-4bit-guarded-full-sync+manual-review
status: machine
fidelity: ok
title: "株式交換 / 株式移転（kabushiki kōkan / iten）— 完全子会社化と持株会社設立の制度"
translated_at: 2026-07-29T05:13:34.783Z
---

# 株式交換 / 株式移転（kabushiki kōkan / iten）— 完全子会社化と持株会社設立の制度

## ウィキルート

この項目は[[corporate-strategy/INDEX|corporate-strategy INDEX]]の下に位置し、取引・資金調達面は[[finance/INDEX|finance INDEX]]へ接続する。部分支配を取得する第三の株式対価制度は[[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付 regime]]、資産・事業レベルの対比は[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]]、選択肢全体は[[corporate-strategy/spinoff-decision-tree-japan|spinoff decision tree]]、株式交換に先行することも多い現金公開買付けは[[finance/japan-tender-offer-process|Japan tender offer process]]を参照。

## TL;DR

**株式交換（kabushiki kōkan, share exchange）**と**株式移転（kabushiki iten, share transfer）**は、企業全体を単一の親会社の下へ置くための会社法上の既存制度であり、原則として現金ではなく株式を対価に用いる。新しい[[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付]]制度と並ぶ、株式対価型の組織再編手法である。

- **株式交換**は、既存会社を対象会社の**100%親会社（完全親会社）**とする。完全親会社が対象会社株主へ自社株式を交付し、対象会社の**全株式**を取得することで、対象会社は完全子会社となる。
- **株式移転**は、1社または複数の既存会社の上に**新しい持株会社**を設立する。新設の完全親会社が各移転会社の**全株式**を取得し、元の株主は新設HoldCoの株主となる。

両者が[[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付]]と決定的に異なるのは、株式交換・株式移転が**100%の親子会社関係**を生むのに対し、株式交付は支配持分に達しても部分保有（50%超、100%未満）にとどまる点である。いずれも税務上は**適格（課税繰延べ）と非適格（課税）**の軸で判定される。

法的層：

- **会社法第767〜771条**は株式交換、**第772〜774条**は株式移転を規律する（株式交付は第774条の2以下）。
- **法人税法第2条12号の16／12号の17**と関連する組織再編規定が、適格／非適格の区別を定める。
- 両者とも **取得者／新会社の株主の特別決議**（2/3 閾値）および会社法における債権者および異議株主の保護手続を必要とする。

## 1. 両方のメカニズムを並べて

| | 株式交換 (share exchange) | 株式移転 (share transfer) |
|---|---|---|
| 親会社 | 既存会社 | 新規設立会社 |
| 結果 | 対象会社が既存買収会社の**完全子会社**となる | 既存会社が新設HoldCoの**完全子会社**となる |
| 取得要件 | 対象会社の100% | 各移転会社の100% |
| 対価 | 取得会社の自社株式（現金／その他財産との混合も可） | 新設HoldCoの株式 |
| 用途の例 | 株式対価による完全取得；上場会社の完全子会社化 | 純粋持株会社の設立；共同HoldCoによる対等統合 |
| 会社法条項 | 767〜771 | 772〜774 |
| 決議 | 当事会社の株主総会承認が原則（略式／簡易手続の例外あり） | 各移転会社の株主総会承認が原則（適用可能な例外あり） |

出典：この表は株式交換および株式移転に関して会社法の定義および標準的手続きに基づいているものであり、簡略化された、短形式、債権者、または異議株主に関する規定を上書きしない。^[Source: https://laws.e-gov.go.jp/document?lawid=417AC0000000086.]

インスピレーション：**株式交換**は、対象企業に対して既存の会社を「上から」覆うものであり、**株式移転**は1社または複数社に新しい屋根を築くものである。単一社の株式移転は、純粋な持株会社（HoldCo）形成への典型的な経路である。持株会社の設立に関する専門的な解説は[[corporate-strategy/japan-holding-company-conversion|holding-company conversion]]を参照され、その中で株式移転は3つの競合手段の一つとして位置づけられている。

## 2. 株式交換 — 株式交換の詳細

取得会社（株式交換完全親会社）は、対象会社（株式交換完全子会社）の唯一の株主となる。すべての対象株式は、効力発生日において法的効力により取得会社に移転し、取得会社は旧対象会社株主に対して直接対価を交付する。

- **上場子会社の完全子会社化**：一部保有する上場子会社の少数株主を整理し、100%子会社にする用途が代表的である。例えば53%を保有する親会社は、自社株式を対価とする株式交換で100%へ引き上げ、連結上場子会社を完全子会社にできる。
- **キャッシュアウト型**：2005年会社法以降、対価に**現金その他の財産**も使えるため、先行するTOBなしにスクイーズアウトとして機能する「現金対価の株式交換」も可能である。これは[[finance/japan-mbo-and-squeeze-out-process|Japan MBO / squeeze-out process]]の非公開化手法と重なる。
- **反対株主の株式買取請求**：反対株主は、会社に公正な価格での株式買取りを請求できる。この少数株主保護は、[[finance/japan-tender-offer-process|tender-offer]]やスクイーズアウトでも現れる。

## 3. 株式移転 — 株式移転の詳細

株式移転では、移転会社の株式を100%保有し、それを当初の主要資産とする新しい完全親会社を設立する。次の2類型に用いられる標準的な法的手段である。

1. **単一会社HOLDCo変更**：1つの事業会社が株式移転を行い、新たに設立された純粋の持株会社（HOLDCo）の下に置かれる。株主は事業会社の株式を1対1で持株会社の株式に交換し、事業会社は完全子会社となる。
2. **共同HoldCo／対等統合**：2社以上が同時に一つの新設HoldCoへ株式移転し、共通親会社の下に並ぶ。事業会社同士は合併せず、各法人を維持する。多くの日本の金融グループがこの方法で形成されており、[[finance/japan-listed-financial-groups-investable-universe|the listed-financial-groups universe]]と[[corporate-strategy/INDEX|corporate-strategy INDEX]]に関連事例がある。

新しいHoldCoは新たに設立されるため、株式移転は親会社が事前に株式資本を有している必要がない——これに対して、株式交換は既に取得者に発行可能な株式を有している必要がある。

## 4. Tax Axis — 適格 vs 非適格

適格判定は日本の組織再編税制に共通する考え方であり、[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|the 会社分割 tax regime]]の会社分割判定と密接に対応する。株式対価型の再編を**簿価引継ぎによる課税繰延べ**とするか、**時価評価とみなし配当を伴う課税取引**とするかを判定する。

### 適格テストシナリオ

1. **100%グループ（完全支配関係）** — 完全子会社間の株式交換／株式移転：完全支配関係の継続を除く、他の検証は極めて簡素。
2. **>50%グループ（支配関係）** — 多数支配関係内のグループ：事業継続および従業員の継承（≈80%）に関する検証を追加。
3. **共同事業（共同事業要件）** — 関係のない当事者間：事業関連性（事業の関連性）、事業規模または経営参画（同等の規模または指定役員の参加）、従業員の継承、事業継続、および指定株主による発行親会社株式の継続保有を含む全検証を追加。

### 結果

| | 適格 (qualified) | 非適格 (non-qualified) |
|---|---|---|
| 子会社の資産 | 簿価を維持；譲渡益認識なし | 一定の場合に時価評価；含み益が実現し得る |
| 譲渡株主 | 株式対価部分について即時の譲渡益課税なし | 譲渡益／みなし配当が生じ得る（特に現金対価） |
| 現金対価 | 共同事業類型では適格性を失わせる | 非適格扱いとなる典型的要因 |

出典：これは組織再編税制の大枠の要約である。財務省資料は株式のみを対価とする原則と、3分の2以上の関係を含む法定例外の双方を示している。適格性は対価だけから判断できない。^[Sources: https://www.mof.go.jp/tax_policy/summary/corporation/c06.htm; https://laws.e-gov.go.jp/document?lawid=340AC0000000034.]

実務上のルールとしては、他の制度と同様に、**株式対価は適格を維持し、現金対価は通常、その適格を破る**。これは、[[finance/japan-leveraged-buyout-economics|Japan leveraged-buyout economics]]における株式を用いた組合せと現金を用いた買収路線を分ける重要な分かれ目である。

## 5. 株主側の規制体制における位置づけ

日本には現在、株式対価による再編制度が**3つ**ある。選択の基本は、目標とする**対象会社の所有割合**である。

| 制度 | 対象会社の所有割合 | 親会社 | 標準的な用途 |
|---|---|---|---|
| **株式交付 (kabushiki kōfu)** | 50%超100%未満（部分支配） | 既存会社 | 株式対価による友好的な支配持分取得 — [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付 regime]] |
| **株式交換 (kabushiki kōkan)** | 100%（完全子会社） | 既存会社 | 完全取得／上場子会社の整理（株式対価） |
| **株式移転 (kabushiki iten)** | 100%（完全子会社） | **新設HoldCo** | 持株会社設立／共同HoldCo |

情報源：所有権および母会社構造は、会社法に基づく。使用ケース列は税適格性または取引承認の証拠ではなく、分析用のルートラベルである。^[Source: https://laws.e-gov.go.jp/document?lawid=417AC0000000086.]

事業レベル（株式レベルではなく資産レベル）の再編——事業の移動（株式の移動ではなく）——には [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割]] を使用する。完全なオプションセット（包括的に売却側も含む）は [[corporate-strategy/spinoff-decision-tree-japan|the spinoff decision tree]] にマッピングされている。

## 6. 時系列プロセス

両者の制度は、会社法の再編リズムを共有しており、そのタイムラインが実行速度の現実的な下限を定める。

| ステップ | 法定最低要件 | 備考 |
|---|---|---|
| 取締役会による株式交換契約／株式移転計画の承認 | — | 同日承認も可能 |
| 株主総会前に本店で計画書類を事前備置 | 株主総会の ≥ 2週間前 | 株主・債権者による閲覧用 |
| 株主総会の特別決議 | — | 2/3 特別決議の閾値 |
| 債権者保護手続（債権者の異議）が必要な場合 | ≥ 1 ヶ月の異議期間 | 新規債務類の対価または指定条件が適用される場合に必要 |
| 反対株主の株式買取請求（価格決定手続） | 効力発日前後の法定期間 | 反対株主は公正な価格での買取りを請求 |
| 効力発生日＋登記 | 効力発生日から2週間以内に申請 | 株式移転では新設HoldCoも登記 |

情報源：通常の手順は会社法に基づいて要約されている。簡略化または短縮手続、対価の種類、上場会社規則、および取引事実により必要な手順が変更される可能性がある。^[Source: https://laws.e-gov.go.jp/document?lawid=417AC0000000086.]

争いのない株式交換・株式移転でも、取締役会承認から通常**2〜3か月**を要する。上場会社の取引では、[[finance/japan-large-shareholding-disclosure|large-shareholding disclosure]]と[[securities/japan-ipo-listing-disclosure-route|the IPO listing / disclosure route]]に示す金融庁・取引所の開示対応が加わる。

## 7. 反論と注意点

- **適格は事案に依存する**：適格判定は技術的であり、NTAは個別照会の回答事例（照会事例）を公表しているのは、境界ケースが頻出するためである。各取引ごとに適格状態を必ず確認する。
- **キャッシュアウト株式交換は検証を招く**：現金対価を用いて少数株主を排出しようとする行為は、評価訴訟を引き起こす可能性があり、その公平性に関する意見の期待は、[[finance/japan-mbo-and-squeeze-out-process|squeeze-out]]に相当するものとなる。
- **クロスボーダー制限**：株式交付、株式交換／株式移転は**日本国内の株式会社**向けに設計されているものであり、クロスボーダーの株式交換はこれらの国内制度ではなく、一般的に[[finance/cross-border-m-a-japan|cross-border M&A Japan]]の構造を経由して行われる。
- **HoldCo設立は複数手法から選ぶ判断である**：株式移転はHoldCo設立の3手法の一つにすぎない。会社分割による「抜け殻方式」との比較は[[corporate-strategy/japan-holding-company-conversion|holding-company conversion]]を参照。

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

- Companies Act (会社法) on 株式交換 (art. 767-771) and 株式移転 (art. 772-774): https://laws.e-gov.go.jp/document?lawid=417AC0000000086
- 国税庁「組織再編成に係る行為又は計算の不当性」ほか 組織再編税制 解説: https://www.nta.go.jp/law/joho-zeikaishaku/hojin/070313/04.htm
- 国税庁 法人税法基本通達 1-4-5 (組織再編成): https://www.nta.go.jp/law/tsutatsu/kihon/hojin/01/01_04_05.htm
- METI economic-affairs / 経済法制 policy portal: https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/
- FSA English portal (disclosure rules interacting with reorganizations): https://www.fsa.go.jp/en/

---

> [!info] 校核状态
> confidence: **likely**. 株式交換 / 株式移転 are long-settled Companies Act regimes (statutory base predates the 2005 Companies Act consolidation; cash-flexible consideration since 2005). The 適格 / 非適格 tax tests are technical and fact-specific — confirm qualified status per transaction with NTA guidance and specialist advice.
