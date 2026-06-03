---
source: real-estate-finance/gk-tk-bond-real-estate-spv
source_hash: 278a0642ab0a926f
lang: ja
status: machine
fidelity: ok
title: "GK-TK 社債型不動産 SPV"
translated_at: 2026-06-03T00:53:08.351Z
---
# GK-TK 社債型不動産 SPV

## 要約

GK-TK 構造（合同会社 + 匿名組合）は、プロ投資家および海外投資家による日本の不動産投資における主要な私募 SPV ビークルである。合同会社（GK — 日本版 LLC）は資産（通常は対象不動産の信託受益権）を保有する法的エンティティのレイヤーであり、匿名組合（TK — silent partnership）は、投資家が GK の社員にならずに利益分配権を受ける対価として GK に資本を提供する契約レイヤーである。社債型 GK-TK は、さらに GK レベルで社債を発行し、シニア債務投資家に、TK エクイティから倒産隔離された明確な社債請求権を与える。この構造が広く使われる理由は、(a) 条件を満たせば TK 分配が GK レベルで損金算入され、パススルーに近い税効率が得られること、(b) GK 形式は倒産隔離が可能で、TMK（[[real-estate-finance/japan-cmbs-rmbs-securitization|specified-purpose company]]）に比べて設立費用が低いこと、(c) 海外 LP が日本の税務上の居住者にならず、オフショア feeder を通じて TK レイヤーに投資できること、(d) [[real-estate-finance/real-estate-bridge-fund-japan|bridge fund]]、私募[[real-estate-finance/j-reit-market-overview|REIT]] feeder、単一資産案件、対日直接投資の各用途に柔軟に対応できることである。

## ウィキ上の位置づけ

この項目は[[real-estate-finance/INDEX|real-estate-finance index]]の下に置かれる、日本の不動産 SPV 構造に関する法的ビークルの経路ページである。上場エクイティのビークルは[[real-estate-finance/j-reit-market-overview|J-REIT market overview]]、私募ファンドの代替は[[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison|private REIT vs listed J-REIT comparison]]、主要なブリッジ・ビークル用途は[[real-estate-finance/real-estate-bridge-fund-japan|real-estate bridge fund]]、関連する証券化経路（GK-TK ではなく TMK を使うことが多い）は[[real-estate-finance/japan-cmbs-rmbs-securitization|Japan CMBS / RMBS securitization]]、資産評価の入力は[[real-estate-finance/japan-real-estate-appraisal-methodology|Japan real-estate appraisal methodology]]と合わせて読む。対象の信託受益権を保有する受託者インフラは[[banking/japan-master-trust-and-custody-bank-landscape|Japan master-trust and custody bank landscape]]、運用分担は[[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]]、資産管理のバックストップは[[banking/master-trust-bank-operating-model|master trust bank operating model]]と組み合わせる。クロスドメインのアンカーとして、[[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM overview]]は GK-社債レイヤーのシニア債券買い手、[[policy-finance/japan-housing-finance-agency|JHF]]はこの商業不動産ビークルの連鎖には入らないが[[policy-finance/INDEX|policy-finance index]]は並行する公的信用の参照点、[[finance/INDEX|finance index]]はコーポレートファイナンス・ビークルの文脈を持つ。

### 二つのレイヤー、一つのビークル

| レイヤー | 形式 | 機能 |
|---|---|---|
| GK（合同会社） | 会社法上の日本版 LLC | 資産を保有する法的主体。契約を負い、銀行口座を持ち、社債を発行できる |
| TK（匿名組合） | 商法上の匿名組合 | 契約上の資本提供構造。TK 投資家は GK に資本を提供し、GK 社員にならずに利益分配権を受ける |

GK-TK の組み合わせは、以下の性質を持つビークルを作る。

1. GK という法的エンティティがあり、信託受益権の保有、銀行口座の保有、契約締結、社債発行ができる。
2. 投資家（TK 投資家）は法的には GK の社員ではなく、公的登記にも載らない。
3. 国税庁ルールのもとで TK 分配条件を満たせば、GK は TK 分配を税務上損金算入でき、パススルーに近い税務経済性を生む。
4. 倒産隔離される。TK 投資家の損失は TK 出資額に限定され、GK は資産をリングフェンスするよう組成される。

### なぜ GK であり、KK や LLP ではないのか

| 形式 | この用途に向かない理由 |
|---|---|
| 株式会社（KK） | 株主名簿が必須で、一定の文脈では開示される。設立費用が高く、固有の税務上の損金算入メリットがなく、柔軟性が低い |
| 合資会社 / 合名会社（general / limited partnership） | 社員が無限責任または一部責任を負う。クリーンな SPV 構造に適さない |
| 有限責任事業組合（LLP / 投資事業有限責任組合） | 目的が異なる。LPS はプライベートエクイティファンド向けであり、資産保有 SPV 向けではない |
| 合同会社（GK） | 有限責任、簡素なガバナンス（株主総会構造が不要）、低い設立費用、社債発行が可能で、SPV の役割に適合する |

### 信託受益権レイヤー

GK は通常、不動産を直接保有しない。代わりに次の形を取る。

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

信託受益権レイヤーを使う理由は以下の通りである。

1. **資産移転性** — 信託受益権は、不動産登記（登録免許税その他の移転コストを伴う）ではなく信託銀行への簡易な通知で移転できる。
2. **印紙税 / 不動産取得税の効率性** — 信託受益権の譲渡は、不動産所有権の譲渡より取引コストが低い。
3. **倒産隔離** — 信託銀行が権原を保有することで、資産を GK のその他債権者から隔離する。
4. **業務標準化** — 信託銀行が賃料収入の回収、費用支払、報告を標準化して提供する。

ここでの信託銀行の役割は通常、[[JapanFG/mitsubishi-ufj-trust-bank|MUFG Trust]]、[[JapanFG/sumitomo-mitsui-trust|SMTB]]、[[JapanFG/mizuho-trust-bank|Mizuho Trust]]が担う。[[JapanFG/master-trust-bank|MTBJ]]や[[JapanFG/custody-bank|CBJ]]のようなカストディ専業の専門家ではない。これはこの役割が単なる資産管理ユーティリティではなく、手数料を伴う不動産信託のフロント業務だからである。[[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]]参照。

### 構造

社債型 GK-TK は、GK 自身が発行するシニア社債レイヤーを追加する。資本構成は以下の通り。

| レイヤー | 形式 | 順位 |
|---|---|---|
| シニア債 | GK が発行する社債 | シニア、担保付（通常は信託受益権への担保） |
| メザニン | 社債（劣後）または劣後ローン | シニア債に劣後し、TK に優先 |
| TK エクイティ | 匿名組合出資 | 最劣後。第一損失を吸収 |

シニア債は、明確で譲渡可能、かつ倒産隔離された請求権を得る。メザニンはシニアとエクイティの間に位置する。TK エクイティは第一損失である。

### 社債レイヤーを置く理由

1. **投資家層** — 生保、地域銀行、資産運用会社、その他の円建て機関投資家は、公募社債を好むのと同じ理由で社債形式の投資を好む。標準化された請求権形式、容易なカストディ、明確な満期、明確なクーポンがある。
2. **リスクウェイト処理** — 社債形式は銀行保有者にとってより明確なリスクウェイト分析を支える。
3. **JASDEC 決済** — 社債は[[securities/japan-securities-depository-center|JASDEC]]の振替制度で決済でき、機関投資家向けのクリーンなカストディを支える。
4. **公的格付** — 社債レイヤーは、[[JapanFG/jcr|JCR]] / [[JapanFG/rating-and-investment|R&I]] / [[JapanFG/sp-global-ratings-japan|S&P]] / [[JapanFG/moodys-japan|Moody's]]から、[[real-estate-finance/japan-cmbs-rmbs-securitization|Japan CMBS / RMBS]]基準と類似するストラクチャードファイナンス基準を用いた格付を取得できる。

### CMBS との違い

| 観点 | GK-TK 社債型 | シングルボロワー CMBS |
|---|---|---|
| 発行ビークル | GK | 発行 SPV 信託 |
| 形式 | 社債 | 信託証券 / 受益権 |
| トランチング | シニア社債 + メザニン + TK エクイティ | シニア / メザニン / 劣後トランチ |
| 公的格付の典型 | 場合による — 投資家層に依存 | あり — 通常は複数格付 |
| 販売 | 私募。ときに私募 social-bond 形式 | 公募または私募 |
| 用途 | シニア社債金融を伴う資産保有 SPV | 複数トランチ販売のためのローン証券化 |

実務上、社債型 GK-TK は、CMBS 発行の完全な負担なしに機関投資家向けの円建てシニア金融を求める単一資産または小規模ポートフォリオ不動産案件で選ばれる構造である。CMBS は、裏付けがノンリコースローンであり、販売のために証券化する必要がある場合に選ばれる。二つの構造は併存できる。社債型 GK-TK のシニア債が、CMBS 形式の信託に証券化されることもある。

### 損金算入される TK 分配

GK-TK 構造の経済的中核は、TK 分配の税務処理である。国税庁ルールのもとでは、特定条件を満たす場合、TK 投資家への分配は GK レベルで損金算入される。条件は技術的で案件固有である。公開情報上の代表的な条件は以下の通り。

| 条件（概要） | 読み方 |
|---|---|
| TK 投資家が GK 事業を営むものとみなされない | TK は匿名組合関係であり、TK 投資家は GK の運営を指揮できない |
| 損益分配が TK 契約に一致する | 分配は契約条件に従う |
| TK 契約が真正である | 仮装または再性格付けリスクがない |
| その他の租税回避防止条件 | 国税庁は、エクイティ / 運営の混合的兆候がある構造に異議を唱え得る |

条件を満たす場合、GK の所得は損金算入される TK 分配として流出し、パススルーに近い経済性を生む。TK 投資家は、自らの法域でその分配に課税される。

### 海外 LP の取扱い

海外 LP である TK 投資家について、公開情報上の見方は以下の通り。

| 観点 | 読み方 |
|---|---|
| 日本源泉所得 | 日本不動産からの不動産所得は日本源泉所得 |
| 条約アクセス | 条約適用には、海外 LP が条約上適格な居住者である必要がある。条約税率は条約条件に依存 |
| オフショア feeder 構造 | 海外 LP は、LP の選好に応じて Cayman、Singapore、Luxembourg などのオフショア feeder を通じ、TK レイヤーに投資することが多い |
| 恒久的施設 | 適切に組成された TK 投資は、海外 LP に日本 PE を生じさせないはずだが、事実関係に依存し助言が必要 |

オフショア feeder GK-TK は、海外ソブリンウェルス、年金、プライベートエクイティ LP による日本不動産投資の標準構造である。詳細は案件ごとに大きく異なり、構造固有の税務助言を必要とする。

### 国内 LP の取扱い

国内の日本投資家が TK から受け取る分配は、次のいずれかとして扱われる。

- 不動産所得 — TK が不動産所得の性格を流すように組成されている場合。
- 雑所得 — 異なる組成の場合。

## 4. GK-TK vs TMK

日本の不動産 SPV の主な代替は GK-TK と TMK（特定目的会社、資産流動化法に基づく）である。

| 観点 | GK-TK | TMK |
|---|---|---|
| 根拠法 | 会社法（GK） + 商法（TK） | 資産流動化法（TMK） |
| 設立 | 標準的な設立 + TK 契約 — 低コストで速い | 内閣総理大臣（委任）への TMK 登録 — 高コストで開示が多い |
| 開示 | GK の基本開示を除けば最小限 | より多い — TMK は資産流動化計画の届出と継続報告がある |
| 税務 | TK 分配損金算入によるパススルー類似 | 導管性条件によるパススルー（概念は類似、法的経路は別） |
| 倒産隔離 | コベナンツ + ガバナンスによる標準的 SPV 倒産隔離 | 資産流動化法に組み込まれた法定の倒産隔離 |
| 社債発行 | GK は社債を発行できる | TMK は特定社債を発行できる |
| エクイティレイヤー | TK 出資（匿名） | 特定出資（優先 / 普通） — より会社型エクイティに近い |
| 典型用途 | 単一資産または小規模ポートフォリオ投資、ブリッジファンド、私募 REIT feeder | 複数資産証券化、CMBS 形式構造、広いファンド投資家への販売 |
| 海外 LP との相性 | 高い — オフショア feeder + TK が海外 LP に適合 | 中程度 — TMK はより構造化され開示が重い |
| 上場能力 | J-REIT ビークルにはなれない | TMK も J-REIT ビークルではない。J-REIT は投信法上の投資法人を使う |

### ビークル横断地図

| 用途 | 典型ビークル |
|---|---|
| [[real-estate-finance/j-reit-market-overview|Listed J-REIT]] | 投資法人（投信法に基づく）。GK-TK や TMK ではない |
| 私募 REIT | 投資法人（投信法に基づく） — オープンエンド / 私募型 |
| ブリッジファンド / 倉庫保有 | GK-TK SPV |
| 単一資産取得ビークル | GK-TK SPV |
| 複数資産 CMBS 発行 | TMK または専門の信託発行構造 |
| 海外 LP 直接投資 | オフショア feeder 付き GK-TK |

### 開示フットプリント

| 開示表面 | GK-TK での存在 |
|---|---|
| GK の公的登記 | あり — 名称、住所、GK 社員（構造上のスポンサーであり、TK 投資家ではない） |
| TK 投資家名 | 公開されない |
| 社債（社債型の場合） | JASDEC と社債発行書類で開示される。公募は FIEA 開示を発生させる |
| 不動産所有 | 信託受託者（信託銀行）が信託で保有。不動産登記では信託銀行が信託の付記付き登録名義人となる |
| テナント賃貸借 | 非公開 — 権原保有者である信託銀行とテナントとの間で、GK は受益者 |
| 財務諸表 | GK は計算書類を国税庁に提出する。社債発行開示が公開を引き起こさない限り公開されない |

信託銀行による権原登記 + TK 投資家非開示の組み合わせにより、GK-TK 構造で保有される日本の商業不動産の受益所有に関する公開可視性は限定される。

### 会計処理

日本基準 / IFRS における TK 投資家側の取扱いは以下の通り。

| 観点 | 読み方 |
|---|---|
| TK 投資の分類 | 投資資産。分類は TK 契約条件と IFRS-9  / 金融商品会計基準の適用に依存 |
| 収益認識 | 契約に基づき TK 分配収益を認識 |
| 減損 | 投資資産に対する標準的な減損テスト |

構造スポンサー（しばしば GK を設立した資産運用会社またはデベロッパー）側は以下の通り。

| 観点 | 読み方 |
|---|---|
| GK が子会社か | 場合による — 構造スポンサーの経済的持分について、エクイティかデットかの分析に依存 |
| GK が VIE か | IFRS-10  / 連結会計上の支配評価が適用される。構造スポンサーが関連活動を支配し、変動リターンに晒される場合は連結が生じ得る |

## 関連項目

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
- [[JapanFG/mitsubishi-ufj-trust-bank]]
- [[JapanFG/sumitomo-mitsui-trust]]
- [[JapanFG/mizuho-trust-bank]]
- [[JapanFG/master-trust-bank]]
- [[JapanFG/jcr]]
- [[JapanFG/rating-and-investment]]
- [[securities/japan-securities-depository-center]]
- [[finance/INDEX]]

## 出典

- ARES (Association for Real Estate Securitization): Japan real-estate securitization market summary statistics.
- JPX: securitized-product disclosure surface.
- FSA: investment-product regulation and disclosure framework.
- e-Gov: 会社法, 商法, 資産流動化法 statutory text.
- National Tax Agency: TK-distribution tax-treatment guidance.
