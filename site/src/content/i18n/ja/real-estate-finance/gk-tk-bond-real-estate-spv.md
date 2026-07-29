---
source: real-estate-finance/gk-tk-bond-real-estate-spv
source_hash: 2dbeb40217e242cd
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "GK-TK 型不動産 SPV（社債型合同会社・匿名組合）"
translated_at: 2026-07-29T00:00:00.000Z
---

# GK-TK 型不動産 SPV（社債型合同会社・匿名組合）

## TL;DR

GK-TK（合同会社 + 匿名組合）は、日本の不動産取引で用いられるプライベート SPV の一形態である。合同会社（GK）は法人レイヤー、商法上の匿名組合（TK）は、投資家が TK 持分だけを理由に GK の社員になることなく営業者の事業へ出資し、契約に基づく損益配分を受ける仕組みである。社債型では GK が社債を発行し得るが、優先順位、担保、譲渡性、倒産時の結果は社債・担保・債権者間・ガバナンス文書に依存する。TK の法人税上の配分、外国投資家の源泉徴収／PE／条約上の取扱い、倒産隔離は事実関係固有であり、ビークル名から推定しない。本ページは法務・税務上のルーティング資料であり、助言ではない。

## Wiki route

本条目は [[real-estate-finance/INDEX|real-estate-finance index]] に属し、普及度を順位付けせず、日本の不動産 SPV の候補構造へ案内する。[[real-estate-finance/j-reit-market-overview|J-REIT market overview]]、[[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison|private REIT vs listed J-REIT comparison]]、[[real-estate-finance/real-estate-bridge-fund-japan|real-estate bridge fund]]、[[real-estate-finance/japan-cmbs-rmbs-securitization|Japan CMBS / RMBS securitization]]、[[real-estate-finance/japan-real-estate-appraisal-methodology|Japan real-estate appraisal methodology]] は隣接経路であり、ブリッジが GK-TK、CMBS が TMK、または特定の鑑定入力を使う証拠ではない。[[banking/japan-master-trust-and-custody-bank-landscape|Japan master-trust and custody bank landscape]]、[[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]]、[[banking/master-trust-bank-operating-model|master trust bank operating model]]、[[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM overview]]、[[policy-finance/japan-housing-finance-agency|JHF]]、[[policy-finance/INDEX|policy-finance index]]、[[finance/INDEX|finance index]] も文脈にすぎず、実際の受託者、投資家、ビークル・チェーンは案件書類で確認する。

### 2 つのレイヤー、1 つのビークル

| レイヤー | 形態 | 機能 |
|---|---|---|
| GK（合同会社） | 会社法上の会社 | 資産・契約・口座を保有し、要件に従い社債を発行できる法人 |
| TK（匿名組合） | 商法上の契約 | TK 投資家が営業者の事業へ出資し、GK 社員になることなく契約上の損益配分を受ける仕組み |

表の出典注記：GK は会社法、TK は商法 535 条以下に基づく。本表は法形式のみを示し、案件の税務・規制・倒産結果を確定しない。^[出典: https://elaws.e-gov.go.jp/document?lawid=417AC0000000086 および https://elaws.e-gov.go.jp/document?lawid=132AC0000000048.]

GK-TK の組合せは、次の機能を持ち得る：

1. GK が信託受益権、銀行口座、契約および社債発行主体となる。
2. TK 投資家は TK 持分だけを理由に GK の社員にはならない。
3. TK の損益を契約で配分するが、営業者と投資家の税額計算は適用法令・国税庁通達に従う。
4. セパラテネス、目的制限、担保、ガバナンス条項を置き得るが、「倒産隔離」は設計目標であり GK/TK の自動的効果ではない。

### なぜ KK や LLP ではなく GK なのか

表の出典注記：本表は法形式の比較であり、普遍的なコスト・適合性ランキングではない。ビークル選択前に会社法と LLP／LPS の各法令を確認する。^[出典: https://elaws.e-gov.go.jp/document?lawid=417AC0000000086, https://elaws.e-gov.go.jp/document?lawid=417AC0000000040, および https://elaws.e-gov.go.jp/document?lawid=410AC0000000090.]

| 形態 | 本用途での確認点 |
|---|---|
| 株式会社（KK） | 法定ガバナンスと持分の枠組みが異なる。適合性とコストは案件固有で、株主名簿は一般公開の実質所有者名簿と同義ではない |
| 合資会社／合名会社 | 形態に応じ少なくとも一部社員が無限責任を負い、限定目的 SPV の設計と合わない場合がある |
| 有限責任事業組合（LLP）／投資事業有限責任組合（LPS） | 設立・事業・ガバナンス・投資家規則が異なる別個の法制度であり、GK と互換ではない |
| 合同会社（GK） | 有限責任社員と柔軟な内部ガバナンスを持つ会社法上の形態。SPV への適合性は法務・税務・規制・金融設計全体で判断する |

### 信託受益権レイヤー

案件は不動産を信託し GK が受益権を保有する場合も、その他の許容される保有経路を用いる場合もある。以下の図は例示にすぎない。

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

1. **譲渡メカニズム** — 信託受益権は信託文書と適用される対抗要件／通知ルールに従う。直接の所有権移転とは異なるが、案件固有の手続が残る。
2. **税・コスト分析** — 登録、取得、印紙その他の税・コストは資産と移転形態で異なり、現行制度に基づく専門家計算を要する。
3. **資産分別の目的** — 受託者が法的権原を持つことと信託条項は分別を支え得るが、自動的な倒産結果を意味しない。
4. **業務分担** — 信託文書は回収・支払・報告の役割を定め得るが、実際の業務範囲は案件固有である。

選任された受託者は取引文書で確認する。リンク先は参加し得る市場主体と役割を示すだけで、銀行区分から選任・除外・順位を推定しない。

### ストラクチャー

社債型 GK-TK は、GK が発行する社債レイヤーを追加し得る。

表の出典注記：以下は例示的なキャピタル・スタックであり、すべての GK-TK の法的結論ではない。順位、担保、譲渡制限、執行、損失配分は社債／ローン／TK／担保／債権者間文書に従う。^[出典: https://elaws.e-gov.go.jp/document?lawid=417AC0000000086 および https://elaws.e-gov.go.jp/document?lawid=132AC0000000048.]

| レイヤー | 形態 | 想定ポジション |
|---|---|---|
| シニア社債 | GK 発行社債 | 文書上のシニア。担保の有無と範囲は案件固有 |
| メザニン | 劣後社債または劣後ローン | 文書上、シニアより劣後し TK より優先する設計例 |
| TK | 匿名組合出資 | 契約上の最劣後／ファーストロス設計例 |

名称は意図した経済的ウォーターフォールを示すだけで、社債を発行体から「倒産隔離」したり、文書なしに優先順位を確立したりしない。

### なぜ社債レイヤーなのか

1. **文書化された請求権** — 元本、クーポン、満期、コベナンツ、譲渡条件を定め得る。
2. **投資家分析** — 規制資本、会計、マンデート適格性、内部信用区分は投資家・商品固有である。
3. **決済** — 振替決済は商品と参加者が法令・JASDEC 要件を満たす場合に限る。
4. **格付け** — 発行体が取得すれば格付けされ得るが、単一・複数格付けのいずれも構造に内在しない。

### CMBS との違い

| 観点 | GK-TK 社債型 | シングルボロワー CMBS |
|---|---|---|
| 発行ビークル | 対象書類で GK とその権限を確認する | 対象書類で発行体、信託、SPV を確認する |
| 形式 | 実際の社債条件とその他の請求権を確認する | 実際のノート、証券、受益権その他の形式を確認する |
| トランチング | 実際の社債、ローン、TK の順位のみ記録する | 実際のクラスとウォーターフォールのみ記録する |
| 公的格付 | 案件固有。構造に内在しない | 案件固有。構造に内在しない |
| 募集 | 公募 / 私募経路、投資家、譲渡制限、金商法上の取扱いを確認する | 公募 / 私募経路、投資家、譲渡制限、金商法上の取扱いを確認する |
| 分析上の用途 | 実際の資産、ファイナンス、請求権を記述する | 実際のローン / 資産証券化と請求権を記述する |

これは分析上の比較であり、いずれかが普遍的に選好されるとの主張ではない。資産、金融対象の請求権、開示経路、投資家、税務、文書で選択し、複層構造は案件固有に確認する。

### TK 損益配分の税務確認

法人営業者について、法人税基本通達 14-1-3 は営業者と法人 TK 投資家の契約上の損益配分を扱うが、すべての支払・投資家・取引について「パススルー」を保証するチェックリストではない。分類、時期、源泉徴収、濫用防止、クロスボーダー結果は事実関係固有である。^[出典: https://www.nta.go.jp/law/tsutatsu/kihon/hojin/14/14_01_01.htm.]

表の出典注記：以下は商法上の契約と国税庁通達をデューデリジェンス質問へ落としたもので、法定セーフハーバーではない。^[出典: https://elaws.e-gov.go.jp/document?lawid=132AC0000000048 および https://www.nta.go.jp/law/tsutatsu/kihon/hojin/14/14_01_01.htm.]

| 確認項目 | 読み方 |
|---|---|
| 商法上の契約 | 商法 535 条以下の TK に該当するか確認 |
| 契約上の配分 | TK 契約と適用税務通達に基づき損益額・時期を確認 |
| 投資家／営業者の地位 | 営業者と投資家を別々に分析し、重要な業務執行への参加も確認 |
| 支払性質とクロスボーダー規則 | 利益配分、出資返還、固定リターン金融、源泉徴収、PE、条約、濫用防止を区別 |

本表はセーフハーバーではない。個人については、国税庁通達は原則として TK 利益分配を雑所得としつつ、共同経営や固定リターンなどの事実により分析が変わる。^[出典: https://www.nta.go.jp/law/tsutatsu/kihon/shotoku/05/16.htm.]

### 外国 LP の取扱い

| 観点 | 確認事項 |
|---|---|
| 日本源泉所得 | 実際の支払または所得の性質と日本源泉該当性を国内法で判断し、TK 分配が原資産である不動産の性質を自動的に維持するとは仮定しない |
| 条約適用 | 事業体の透明性・分類、居住者性、実質的受益者、特典制限その他の適用要件、該当する所得条項・税率、必要手続を正確な条約／MLI と日本法で確認 |
| フィーダー | 利用し得るが、事業体分類、条約適格性、日本の申告・源泉結果は異なる |
| 恒久的施設 | TK／フィーダーだけから PE の有無を推定せず、人員、代理、意思決定、運用活動、国内法、条約を分析 |

表の出典注記：これは論点整理であり、外国 LP の条約適格性や日本 PE 不存在を結論づけない。現行条約本文と国税庁手続を使い、案件固有の助言を得る。^[出典: https://www.mof.go.jp/english/policy/tax_policy/tax_conventions/tax_convetion_list_en.html および https://www.nta.go.jp/taxes/shiraberu/taxanswer/gensen/2888.htm.]

外国投資家は GK-TK やフィーダーを用い得るが、普及度、税務居住、実質的受益者、PE、税引後結果を一般化しない。

### 国内 LP の取扱い

個人 TK 投資家について、国税庁通達は原則として利益分配を雑所得とするが、共同経営や固定リターン等の事実により例外・再分類があり得る。法人投資家は法人税上の配分ルールに従う。原資産の不動産所得の性質が投資家へ自動的に維持されるとは推定しない。^[出典: https://www.nta.go.jp/law/tsutatsu/kihon/shotoku/05/16.htm および https://www.nta.go.jp/law/tsutatsu/kihon/hojin/14/14_01_01.htm.]

## 4. GK-TK 対 TMK

GK-TK と資産流動化法上の TMK（特定目的会社）は、会社、信託、投資法人、契約型など他の構造と並ぶ候補経路であり、「二大代替手段」と順位付けしない。

表の出典注記：これは法定経路の比較であり、コスト、速度、税務、外国投資家との「相性」のランキングではない。^[出典: https://elaws.e-gov.go.jp/document?lawid=417AC0000000086, https://elaws.e-gov.go.jp/document?lawid=132AC0000000048, https://elaws.e-gov.go.jp/document?lawid=410AC0000000105, および https://elaws.e-gov.go.jp/document?lawid=323AC0000000025.]

| 観点 | GK-TK | TMK |
|---|---|---|
| 根拠法 | 会社法（GK）+ 商法（TK） | 資産流動化法 |
| 設立／手続 | 会社設立、取引契約、必要な規制届出 | TMK と資産流動化計画の法定手続。届出・登記は案件による |
| 開示 | 会社登記、適用される金商法・契約上の開示 | 資産流動化法／金商法上の計画・取引開示 |
| 税務 | 契約、納税者、税法に応じた営業者／投資家の配分・控除 | すべての導管性要件を満たす場合の配当損金算入 |
| 倒産設計 | セパラテネス、担保、コベナンツ、ガバナンス。自動免責なし | 法定制約と資産計画が取引上の保護を補完するが結果を保証しない |
| 社債 | GK は会社法に従い社債を発行可 | TMK は特定社債を発行可 |
| エクイティ | 対象契約に基づく TK 出資 | 資産流動化法と資産流動化計画に基づき、特定出資と優先出資その他の許容される資金調達を区別し、「優先 / 普通」に一括しない |
| 例示用途 | 私募の資産保有・金融構造 | 法定 TMK を用いる資産流動化・証券化 |
| クロスボーダー適合性 | 投資家、規制、PE、源泉、条約、文書に依存 | 同事項に加え TMK 法定要件に依存 |
| J-REIT | J-REIT ビークルではない | J-REIT ビークルではない。J-REIT は投資法人 |

### クロス・ビークル・マップ

表の出典注記：例示的ルーティングであり、排他的・典型的な法的結論ではない。取引は複数の法人・信託レイヤーを用い得る。^[出典: https://elaws.e-gov.go.jp/document?lawid=326AC0000000198, https://elaws.e-gov.go.jp/document?lawid=417AC0000000086, https://elaws.e-gov.go.jp/document?lawid=132AC0000000048, および https://elaws.e-gov.go.jp/document?lawid=410AC0000000105.]

| ユースケース | 候補ビークル経路 |
|---|---|
| [[real-estate-finance/j-reit-market-overview|Listed J-REIT]] | 投信法上の投資法人 |
| 私募 REIT | 投信法上の投資法人の私募形態 |
| ブリッジ／ウェアハウス | GK-TK は候補の一つ。実際の形態は案件固有 |
| 単一資産取得 | GK-TK、TMK、直接会社、信託等を検討し得る |
| CMBS | TMK または信託／SPV 経路を検討し得る |
| クロスボーダー私募投資 | フィーダー有無を含む GK-TK は候補の一つ。税務・規制適合性は投資家固有 |

### 開示フットプリント

表の出典注記：会社法登記、商法上の TK、金商法開示、税務申告を区別する。いずれも取引単位の実質所有・開示レビューの代替ではない。^[出典: https://elaws.e-gov.go.jp/document?lawid=417AC0000000086, https://elaws.e-gov.go.jp/document?lawid=132AC0000000048, および https://elaws.e-gov.go.jp/document?lawid=323AC0000000025.]

| 開示面 | 確認事項 |
|---|---|
| GK 登記 | 会社法所定の登記事項。該当する業務執行社員／代表社員情報を含むが、実質所有を推定しない |
| TK 投資家 | TK だけでは GK 社員・会社登記事項にならないが、他法令、届出、契約、KYC、開示義務はあり得る |
| 社債 | 発行文書に従う。公募開示や振替／JASDEC は実際の募集・商品に依存 |
| 不動産権原 | 信託利用時は対象受託者、信託登記、受益者、登記簿を確認し、それ以外は実際の権原経路を追跡する |
| 賃貸借 | 実際の賃貸人、賃借人、マスターリース、プロパティマネジャー、開示義務、プライバシー制限を確認し、受託者が直接契約すると仮定しない |
| 財務・税務 | GK は会社法計算書類を作成し、別途税務申告する。税務申告は提出だけで公開されず、証券開示は募集・発行体の事実に依存 |

公的可視性は、実際の登記簿、信託登記、GK 登記、証券開示、大量保有 / 実質所有者規則、契約その他の適用届出から評価する。信託名義と TK の地位だけでは市場全体の結論を支えない。

### 会計上の取扱い

TK 投資家については、報告企業に適用される基準、事実、権利、会計方針に基づき持分を分類・会計処理する。

表の出典注記：本表は会計確認の経路であり、普遍的な分類、収益ラベル、減損モデルではない。契約と報告企業に現行 ASBJ / IFRS 要件を適用する。^[出典: https://www.asb-j.jp/en/ および https://www.ifrs.org/issued-standards/list-of-standards/.]

| 観点 | 確認事項 |
|---|---|
| 分類 | 権利と適用基準から、資産、金融商品、組合 / 契約、連結、測定の分類を決定する |
| 収益認識 | 契約と適用会計方針から認識、表示、配分、時期を決定する。現金分配だけではラベルを確定しない |
| 減損 | 分類と測定を確定した後にのみ、適用される減損または損失認識モデルを特定する |

GK のスポンサー、設立者、運用者、支配者とされる主体について：

表の出典注記：支配判定の経路であり、すべての GK の連結・非連結を結論づけない。IFRS では IFRS 10 と報告企業の事実、日本基準では現行 ASBJ 基準・適用指針を用いる。^[出典: https://www.ifrs.org/issued-standards/list-of-standards/ifrs-10-consolidated-financial-statements/.]

| 観点 | 確認事項 |
|---|---|
| 子会社判定 | 法形式だけで結論せず、権利、パワー、経済的エクスポージャーを適用基準で評価 |
| ストラクチャード・エンティティ／支配 | IFRS 10 ではパワー、変動リターンへのエクスポージャー／権利、パワーでリターンへ影響する能力を評価。日本基準は適用 ASBJ 要件で評価 |

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

- e-Gov：会社法、商法、資産流動化法、金商法、LLP／LPS 各法。
- 国税庁：法人税基本通達 14-1-3、個人 TK 分配通達、TK 持分評価。
- 財務省：現行租税条約一覧・条約本文。
- IFRS Foundation：IFRS 10 支配モデル。
