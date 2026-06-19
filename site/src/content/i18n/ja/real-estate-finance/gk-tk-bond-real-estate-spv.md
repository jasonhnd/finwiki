---
source: real-estate-finance/gk-tk-bond-real-estate-spv
source_hash: 52ca78a5289a6837
lang: ja
status: machine
fidelity: ok
title: "GK-TK 型不動産 SPV（社債型合同会社・匿名組合）"
translated_at: 2026-06-19T13:13:22.624Z
---

# GK-TK 型不動産 SPV（社債型合同会社・匿名組合）

## TL;DR

GK-TK ストラクチャー（合同会社 + 匿名組合）は、プロ投資家・外国人投資家による日本の不動産投資において支配的なプライベート SPV ビークルである。合同会社（GK — 日本版 LLC）は資産（典型的には原資産不動産に対する信託受益権）を保有する法人レイヤーであり、匿名組合（TK — 匿名組合契約）は投資家が GK の社員になることなく利益分配請求権と引き換えに GK へ資本を拠出する契約レイヤーである。社債型 GK-TK のバリアント（社債型）は、これに加えて GK レベルで社債を発行し、シニア・デット投資家に対して TK エクイティから倒産隔離されたクリーンな社債債権を与える。本ストラクチャーが広く用いられるのは、(a) 一定の条件を満たせば TK 分配が GK レベルで損金算入され、パススルー類似の税効率を生むこと、(b) GK 形態は倒産隔離されており、TMK（[[real-estate-finance/japan-cmbs-rmbs-securitization|specified-purpose company]]）と比べて設立コストが安いこと、(c) 外国 LP はオフショア・フィーダーを通じて日本の税務上の居住者になることなく TK レイヤーに投資できること、(d) [[real-estate-finance/real-estate-bridge-fund-japan|bridge fund]]、プライベート [[real-estate-finance/j-reit-market-overview|REIT]] フィーダー、単一資産ディール、対内直接投資といったユースケースをまたいで柔軟であること、による。

## Wiki route

本条目は [[real-estate-finance/INDEX|real-estate-finance index]] に属し、日本の不動産 SPV ストラクチャーの法的ビークル・ルーティングページである。上場エクイティ・ビークルについては [[real-estate-finance/j-reit-market-overview|J-REIT market overview]]、プライベート・ファンドの代替手段については [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison|private REIT vs listed J-REIT comparison]]、支配的なブリッジ・ビークルのユースケースについては [[real-estate-finance/real-estate-bridge-fund-japan|real-estate bridge fund]]、関連する証券化ルート（GK-TK ではなく TMK を用いることが多い）については [[real-estate-finance/japan-cmbs-rmbs-securitization|Japan CMBS / RMBS securitization]]、資産評価インプットについては [[real-estate-finance/japan-real-estate-appraisal-methodology|Japan real-estate appraisal methodology]] と併せて読むこと。原資産の信託受益権を保有する受託インフラについては [[banking/japan-master-trust-and-custody-bank-landscape|Japan master-trust and custody bank landscape]]、業務分担については [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]]、資産管理のバックストップについては [[banking/master-trust-bank-operating-model|master trust bank operating model]] とペアで読むこと。クロスドメインのアンカー：[[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM overview]] は GK-社債 レイヤーにおけるシニア社債の買い手であり、[[policy-finance/japan-housing-finance-agency|JHF]] はこの商業用不動産ビークル・チェーンには含まれないが [[policy-finance/INDEX|policy-finance index]] はパラレルなパブリック・クレジットの参照であり、[[finance/INDEX|finance index]] はコーポレート・ファイナンス・ビークルのコンテキストを保持する。

### 2 つのレイヤー、1 つのビークル

| レイヤー | 形態 | 機能 |
|---|---|---|
| GK (合同会社) | 会社法に基づく日本版 LLC | 資産を保有する法人；契約を負担する；銀行口座を持つ；社債を発行できる |
| TK (匿名組合) | 商法に基づく匿名組合 | 契約による資本拠出ストラクチャー；TK 投資家は GK の社員になることなく GK へ資本を拠出し利益分配請求権を受ける |

GK-TK の組み合わせは、以下を実現するビークルを生み出す：

1. 信託受益権の保有、銀行口座の所有、契約の締結、社債の発行が可能な法人（GK）を持つ；
2. 法的に GK の社員ではなく、公的な登記簿にも記載されない投資家（TK 投資家）を持つ；
3. 国税庁ルールの下で TK 分配条件が満たされる場合に、税務上 GK が TK 分配を損金算入することを可能にし、パススルー類似の税務経済性を生む；
4. 倒産隔離されている — TK 投資家の損失は TK 出資額に限定され、GK は資産をリングフェンスするようストラクチャーされる。

### なぜ KK や LLP ではなく GK なのか

| 形態 | このユースケースに適さない理由 |
|---|---|
| 株式会社 (KK) | 社員登記簿（株主名簿）が必須であり、一部の文脈で開示される；設立コストが高い；本来的な損金算入のメリットがない；柔軟性に欠ける |
| 合資会社 / 合名会社 (一般 / 限定パートナーシップ) | 社員が無限責任または一部責任を負う；クリーンな SPV ストラクチャーには適さない |
| 有限責任事業組合 (LLP / 投資事業有限責任組合) | 目的が異なる；LPS はプライベート・エクイティ・ファンドに用いられ、資産保有 SPV には用いられない |
| 合同会社 (GK) | 有限責任、シンプルなガバナンス（株主総会ストラクチャー不要）、低い設立コスト、社債発行可能、SPV の役割に適合 |

### 信託受益権レイヤー

GK は通常、不動産を直接には保有しない。代わりに：

```
Investors (TK + senior bondholders + mezzanine if any)
              │
              │  capital
              ▼
       GK (合同会社) ────── issues 社債 ──── senior bondholders
              │
              │  beneficiary of trust
              ▼
       Trust bank (信託受託者)
              │
              │  legal title
              ▼
       Underlying real estate
```

信託受益権レイヤーを設ける理由：

1. **資産の譲渡性** — 信託受益権は、（登録免許税やその他の移転コストを伴う）不動産登記によってではなく、信託銀行への単純な通知によって譲渡できる。
2. **印紙税 / 不動産取得税の効率性** — 信託受益権の譲渡は、不動産所有権の譲渡よりも低い取引コストの対象となる。
3. **倒産隔離** — 所有権を保有する信託銀行が、GK の他の債権者から資産を隔離する。
4. **業務の標準化** — 信託銀行が、標準化された賃料収入の回収、費用の支払い、報告を提供する。

ここでの信託銀行の役割は、典型的には [[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]]、[[trust-banks/sumitomo-mitsui-trust|SMTB]]、または [[trust-banks/mizuho-trust-bank|Mizuho Trust]] によって担われ、[[trust-banks/master-trust-bank|MTBJ]] や [[trust-banks/custody-bank|CBJ]] のようなカストディ専業のスペシャリストによっては担われない。これは、当該役割が資産管理のユーティリティ業務ではなく、フィーを伴う不動産信託のフロントオフィス業務だからである。[[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]] を参照。

### ストラクチャー

社債型 GK-TK は、GK 自身が発行するシニア社債レイヤーを加える。キャピタル・スタック：

| レイヤー | 形態 | ポジション |
|---|---|---|
| シニア社債 | GK が発行する社債 | シニア、担保付（通常は信託受益権に対する担保による） |
| メザニン | 社債（劣後）または劣後ローン | シニア社債に劣後；TK にシニア |
| TK エクイティ | 匿名組合出資 | 最劣後；ファーストロスを吸収 |

シニア社債は、クリーンで譲渡可能、かつ倒産隔離された債権を得る。メザニンはシニアとエクイティの間に位置する。TK エクイティはファーストロスである。

### なぜ社債レイヤーなのか

1. **投資家ユニバース** — 生命保険会社、地方銀行、アセットマネージャーその他の円建て機関投資家は、公募債を選好するのと同じ理由で社債形式の投資を選好する：標準化された債権形式、容易なカストディ、明確な満期、明確なクーポン。
2. **リスクウェイト上の扱い** — 社債形式は、銀行保有者にとってよりクリーンなリスクウェイト分析を支える。
3. **JASDEC 決済** — 社債は [[securities/japan-securities-depository-center|JASDEC]] の振替決済を通じて決済でき、クリーンな機関投資家カストディを支える。
4. **公的格付** — 社債レイヤーは、[[real-estate-finance/japan-cmbs-rmbs-securitization|Japan CMBS / RMBS]] の基準に類似したストラクチャード・ファイナンス基準を用いて [[financial-regulators/jcr|JCR]] / [[financial-regulators/rating-and-investment|R&I]] / [[JapanFG/sp-global-ratings-japan|S&P]] / [[JapanFG/moodys-japan|Moody's]] により格付され得る。

### CMBS との違い

| 観点 | GK-TK 社債型 | シングルボロワー CMBS |
|---|---|---|
| 発行ビークル | GK | 発行 SPV 信託 |
| 形式 | 社債 | 信託受益証券 / 受益権 |
| トランチング | シニア社債 + メザニン + TK エクイティ | シニア / メザニン / 劣後トランチ |
| 公的格付の通例 | 場合による — 投資家ベースに依存 | あり — 通常は複数格付 |
| 分配 | 私募；時に 私募 ソーシャルボンド形式 | 公募または私募 |
| ユースケース | シニア社債ファイナンスを伴う資産保有 SPV | 分配のためのマルチトランチ・ローン証券化 |

実務上、社債型 GK-TK は、CMBS 発行のフルなオーバーヘッドを伴わずに機関投資家向け円建てシニア・ファイナンスを求める単一資産または小規模ポートフォリオの不動産ディールにとって選択されるストラクチャーである。CMBS は、原資産が分配のために証券化される必要のあるノンリコース・ローンである場合に選択されるストラクチャーである。この 2 つのストラクチャーは併存し得る — 社債型 GK-TK は、そのシニア社債を CMBS スタイルの信託へさらに証券化することもできる。

### 損金算入される費用としての TK 分配

GK-TK ストラクチャーの経済的中核は、TK 分配の税務上の取扱いである。国税庁ルールの下で、TK 投資家への分配は、特定の条件が満たされる場合に GK レベルで損金算入される。条件は技術的かつプロジェクト固有であり；公開情報ベースの主な条件としては以下が含まれる：

| 条件（見出し） | 解釈 |
|---|---|
| TK 投資家が GK の事業を運営しているとみなされないこと | TK は匿名組合の関係である；TK 投資家は GK の運営を指図できない |
| 損益の分配が TK 契約に合致すること | 分配が契約条件に従う |
| TK 契約が真正であること | 仮装または再構成リスクではない |
| その他の濫用防止条件 | 国税庁はエクイティ / 運営の混合的な兆候を持つストラクチャーを否認し得る |

条件が満たされる場合、GK の所得は損金算入される TK 分配として流出し、パススルー類似の経済性を生む。TK 投資家は、自らの法域でその分配について課税される。

### 外国 LP の取扱い

外国 LP の TK 投資家について、公開情報ベースのポジションは以下の通り：

| 観点 | 解釈 |
|---|---|
| 日本源泉所得 | 日本の不動産からの不動産所得は日本源泉である |
| 租税条約へのアクセス | 租税条約へのアクセスには、外国 LP が条約適格の居住者であることが必要；条約税率は条約条件に依存する |
| オフショア・フィーダー・ストラクチャー | 外国 LP は、しばしばオフショア・フィーダー（LP の選好に応じてケイマン、シンガポール、ルクセンブルク）を通じて TK レイヤーに投資する |
| 恒久的施設 | 適切にストラクチャーされた TK 投資は、外国 LP のために日本の PE を生じさせないはずである — ただしこれは事実関係に依存し、助言を要する |

オフショア・フィーダー型 GK-TK は、外国のソブリン・ウェルス、年金、プライベート・エクイティの LP による日本の不動産への投資にとっての標準ストラクチャーである。詳細はディールごとに大きく異なり、ストラクチャー固有の税務助言を要する。

### 国内 LP の取扱い

TK に投資する国内の日本人投資家は、分配を以下のいずれかとして受け取る：

- 不動産所得 — TK が不動産所得の性質をフロースルーするようストラクチャーされている場合；または
- 雑所得 — 異なるストラクチャーの場合。

## 4. GK-TK 対 TMK

主要な 2 つの日本の不動産 SPV の代替手段は、GK-TK と TMK（特定目的会社、資産流動化法に基づく）である。

| 観点 | GK-TK | TMK |
|---|---|---|
| 根拠法 | 会社法 (GK) + 商法 (TK) | 資産流動化法 (TMK) |
| 設立 | 標準的な設立 + TK 契約 — より低コスト、より迅速 | 内閣総理大臣（委任）への TMK 登録 — より高コスト、より多くの開示 |
| 開示 | GK の基本開示を超えるものは最小限 | より多い — TMK は資産流動化計画の届出と継続的な報告を持つ |
| 税務 | TK 分配の損金算入によるパススルー類似 | 導管性条件によるパススルー（類似の概念、異なる法定ルート） |
| 倒産隔離 | コベナンツ + ガバナンスによる標準的な SPV 倒産隔離 | 資産流動化法に組み込まれた法定の倒産隔離 |
| 社債発行 | GK は社債を発行できる | TMK は特定社債を発行できる |
| エクイティ・レイヤー | TK 出資（匿名） | 特定出資（優先 / 普通）— よりコーポレート・エクイティに近い |
| 典型的なユースケース | 単一資産または小規模ポートフォリオ投資、ブリッジ・ファンド、プライベート REIT フィーダー | マルチアセット証券化、CMBS スタイルのストラクチャー、ファンド投資家への広範な分配 |
| 外国 LP との相性 | 高い — オフショア・フィーダー + TK が外国 LP によく適合する | 中程度 — TMK はよりストラクチャー化され、開示負担が重い |
| 上場能力 | J-REIT ビークルにはなれない | TMK も J-REIT ビークルではない；J-REIT は投信法に基づく投資法人を用いる |

### クロス・ビークル・マップ

| ユースケース | 典型的なビークル |
|---|---|
| [[real-estate-finance/j-reit-market-overview|Listed J-REIT]] | 投資法人（投信法に基づく）、GK-TK でも TMK でもない |
| プライベート REIT | 投資法人（投信法に基づく）— オープンエンド / 私募バリアント |
| ブリッジ・ファンド / ウェアハウス | GK-TK SPV |
| 単一資産取得ビークル | GK-TK SPV |
| マルチアセット CMBS 発行 | TMK または専用の信託発行ストラクチャー |
| 外国 LP の直接投資 | オフショア・フィーダーを伴う GK-TK |

### 開示フットプリント

| 開示面 | GK-TK の存在 |
|---|---|
| GK の公的登記簿 | あり — GK の名称、住所、社員（これらは TK 投資家ではなくストラクチャー上のスポンサーである） |
| TK 投資家名 | 公的には開示されない |
| 社債（社債型の場合） | JASDEC および社債発行ドキュメンテーションで開示；公募は金商法（FIEA）開示を発動する |
| 不動産所有 | 信託受託者（信託銀行）により信託で保有；不動産登記は信託の付記とともに信託銀行を登記名義人として示す |
| テナント賃貸契約 | プライベート — 信託銀行（名義保有者として）とテナントの間、GK を受益者として |
| 財務諸表 | GK は計算書類を国税庁に提出；社債発行開示が公開を発動しない限り公的には開示されない |

信託銀行による所有権登記 + TK 投資家の非開示の組み合わせは、GK-TK ストラクチャーで保有される日本の商業用不動産の実質的所有への公的な可視性が限定的であることを意味する。

### 会計上の取扱い

日本基準 / IFRS の取扱いにおける TK 投資家について：

| 観点 | 解釈 |
|---|---|
| TK 投資の分類 | 投資資産；区分は TK 契約条件および IFRS-9  / 金融商品会計基準の適用に依存する |
| 収益認識 | TK 分配収益は契約に従って認識される |
| 減損 | 投資資産に対する標準的な減損テスト |

ストラクチャー上のスポンサー（しばしば GK を設立したアセットマネジメント会社またはディベロッパー）について：

| 観点 | 解釈 |
|---|---|
| 子会社としての GK | 場合による — ストラクチャー上のスポンサーの経済的持分のエクイティ対デット分析に依存する |
| VIE としての GK | IFRS-10  / 連結会計の支配判定が適用される — ストラクチャー上のスポンサーが関連する活動に対する支配を有し、変動リターンにエクスポーズされている場合、連結が発動され得る |

## Related

- [[real-estate-finance/INDEX]]
- [[real-estate-finance/j-reit-market-overview]]
- [[real-estate-finance/top-10-j-reit-overview-matrix]]
- [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison]]
- [[real-estate-finance/real-estate-bridge-fund-japan]]
- [[real-estate-finance/japan-cmbs-rmbs-securitization]]
- [[real-estate-finance/japan-real-estate-appraisal-methodology]]
- [[real-estate-finance/j-reit-foreign-investor-ownership]]
- [[banking/INDEX]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[banking/master-trust-bank-operating-model]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[insurance/INDEX]]
- [[policy-finance/INDEX]]
- [[policy-finance/japan-housing-finance-agency]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mizuho-trust-bank]]
- [[trust-banks/master-trust-bank]]
- [[financial-regulators/jcr]]
- [[financial-regulators/rating-and-investment]]
- [[securities/japan-securities-depository-center]]
- [[finance/INDEX]]

## Sources

- ARES (不動産証券化協会): 日本の不動産証券化市場のサマリー統計。
- JPX: 証券化商品の開示面。
- FSA: 投資商品の規制および開示フレームワーク。
- e-Gov: 会社法、商法、資産流動化法の条文。
- 国税庁: TK 分配の税務取扱いガイダンス。
