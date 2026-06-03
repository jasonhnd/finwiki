---
source: structured-finance/japan-credit-card-receivable-abs
source_hash: f0b293d7a71fd4ed
lang: ja
status: machine
fidelity: ok
title: "日本のクレジットカード債権ABS: マスタートラスト枠組み、期間延長、デフォルトトリガー"
translated_at: 2026-06-03T00:53:08.262Z
---
# 日本のクレジットカード債権ABS: マスタートラスト枠組み、期間延長、デフォルトトリガー

## 要約

日本のクレジットカード債権ABSは、年間発行額が控えめな規模（約JPY 400–700 bn）で、[[JapanFG/jcb|JCB]]、[[JapanFG/mufg-nicos|Mitsubishi UFJ Nicos]]、[[JapanFG/credit-saison|Credit Saison]]、[[JapanFG/orico|Orient Corp]]、[[JapanFG/aeon-financial-service|AEON Financial Service]]、[[JapanFG/jaccs|JACCS]]が発行している。構造としては、**マスタートラスト枠組み**を用い、単一の信託構造が、継続的に補充されるカード債権プール（ショッピング + リボルビング + キャッシング残高）を裏付けに、複数シリーズのシニア債を時間をかけて発行する。単独信託と異なり、マスタートラストではすべての未償還シリーズが同じリボルビングプールの動態を共有する。新しい各シリーズには、同じリボルビングプールに対する投資額比例の請求権が割り当てられる。この構造は、各シリーズについて**予定されたコントロールド・アモチゼーション期間**（通常6–12 カ月）を持つが、プール実績が強く、再投資が引き続き効率的である場合には、発行体が予定償還開始日を押し出せる**期間延長**条項を備える。これは、米国型マスタートラスト（Citi、Capital One、Discover）から借用され、JSDA開示慣行に合わせて調整された日本固有の特徴である。**早期償還トリガー**（消費者ローンABSに類似）は、累積貸倒償却または90日超延滞が閾値を超えた場合、またはオリジネーターの債務不履行事由が発生した場合に即時償還へ切り替えることで投資家を保護する。多くの国内案件は[[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I]]が格付し、クロスボーダー案件ではS&P／Moody'sが選択的に関与することがあるが、まれである。

## ウィキ上の位置づけ

この項目は、[[structured-finance/INDEX|structured-finance index]]配下の**リボルビングカード・マスタートラストの運営メカニクス**ノードである。より広い発行体ランドスケープは[[structured-finance/consumer-loan-abs-japan-card-issuer|consumer-loan / card-receivable ABS Japan]]、クローズドエンドローンとの対比（商品は異なるが早期償還トリガーは類似）は[[structured-finance/japan-consumer-loan-abs-structure|Japan consumer-loan ABS structure]]、担保プール型シーケンシャルペイとの対比は[[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]、手法レイヤーは[[structured-finance/jcr-ri-japan-securitization-rating-methodology-operating-playbook|JCR / R&I securitization rating methodology operating playbook]]とあわせて読む。カード発行会社の企業文脈は、カードネットワークと加盟店アクワイアリング経済の[[payments/INDEX|payments domain]]を参照する。

## 1. 6つの反復発行体: 日本のカード債権ABSランドスケープ

| 発行体 | 親会社 | カードブランド・ポートフォリオ | 年間ABS発行額（概算） |
|---|---|---|---|
| [[JapanFG/jcb|JCB]] | 独立系（メガバンクとの持合いあり） | JCBブランドのクレジットカード（国内ネットワーク + 国際） | JPY 100–200 bn |
| [[JapanFG/mufg-nicos|Mitsubishi UFJ Nicos]] | MUFG group | MUFG Card、DC Card、NICOS、UFJ Cardブランド | JPY 80–150 bn |
| [[JapanFG/credit-saison|Credit Saison]] | Mizuho group affiliate / 一部Seibu / 一部Mizuho | SAISON Cardブランド | JPY 100–200 bn |
| [[JapanFG/orico|Orient Corp]] | Mizuho-Itochu group | Orico Cardブランド | JPY 50–100 bn |
| [[JapanFG/aeon-financial-service|AEON Financial Service]] | AEON Group | AEON Card（小売親和型） | JPY 50–100 bn（公開ABSは限定的。銀行借入依存がより大きい） |
| [[JapanFG/jaccs|JACCS]] | MUFG group | JACCS Card | JPY 30–80 bn |

カード発行会社ABSの発行額は上位3社に集中している。[[JapanFG/sumitomo-mitsui-card|Sumitomo Mitsui Card]]（SMFG group）は歴史的に発行していたが、現在はSMFGの銀行借入枠と親銀行アレンジを通じた資金調達が多い。銀行系カード発行会社（NICOS、Saison、SMBC Card）は一般に、より低コストの親銀行資金にアクセスできるため、ABSは多くの手段の一つであり、支配的な資金調達チャネルではない。これは、Citi、Capital One、Discover、JPM Chaseのマスタートラストが中核的な財務インフラである米国カード債権ABSとは異なる。

## 2. マスタートラスト枠組み: 何か

マスタートラストとは、時間をかけて**複数の債券シリーズを裏付ける単一の信託構造**である。

| 要素 | マスタートラスト | 単独信託（典型的なオートローンABS） |
|---|---|---|
| 債券シリーズ数 | 複数（同時に5–15 本が未償還のことが多い） | 1本 |
| プール共有 | すべてのシリーズが同じ原資産リボルビングプールに対する請求権を共有 | 各案件のプールは専用 |
| シリーズ発行の頻度 | 市場が開いていれば頻繁（3–9 カ月ごと） | 断続的（一回限りの取引） |
| プール補充 | 継続的。各シリーズから見るとプールは「無限」 | 有限サイズのクローズドプール |
| 投資額配分 | 各シリーズはプール回収金に対して投資額比例の請求権を持つ | 各案件は自分のプールの100%を持つ |
| 劣後 | シリーズ固有の劣後トランチ | 案件固有の劣後 |
| 投資家管理 | 単一受託者、単一の格付アクション範囲 | 案件ごとの受託者 |

運用上の利点:
- **発行の柔軟性**。オリジネーターは毎回新しい信託を設定せず、市場環境が良いときに発行できる。
- **プール分散**。個別シリーズの投資家は、小さく切り出されたプールではなく、全体プール規模の恩恵を受ける。
- **コスト効率**。受託者、口座銀行、法務インフラを1セットで全シリーズに利用できる。

運用上のリスク:
- **シリーズ横断の波及**。プール実績が悪化すれば、単一案件だけでなく全未償還シリーズが同時に影響を受ける。
- **シリーズ配分の複雑さ**。各分配日に、プール回収金を各シリーズへ正しい比率で配分しなければならない。
- **投資家分析**。投資家はプール動態とシリーズ固有の配分メカニズムの双方を理解する必要がある。

## 3. カード債権プールの構成

| 債権タイプ | 説明 | カード会員あたり典型残高 | デフォルト特性 |
|---|---|---|---|
| **ショッピング（一括払い / 1回払い）** | 一回払い購入。カード会員に利息は課されない | JPY 10K–50K | 非常に低いデフォルト（翌月サイクルで決済） |
| **ショッピング分割払い** | 2回、3回、6回、12回、24回払いの選択肢 | JPY 50K–500K | 低いデフォルト（年1.0–2.5%） |
| **リボルビング（リボ払い）** | カード会員が毎月固定額を支払い、残高に利息が付く | JPY 50K–500K | 中程度のデフォルト（3.0–6.0%。より高リスクの借り手プール） |
| **キャッシング** | 利用枠内での直接現金引出し | JPY 20K–200K | 高いデフォルト（5.0–9.0%） |

プール構成は発行体によって異なる。[[JapanFG/jcb|JCB]]のプールはショッピング分割払い寄り（低デフォルト）であり、[[JapanFG/credit-saison|Credit Saison]]と[[JapanFG/orico|Orient Corp]]はリボルビング／キャッシング比率が高い（高デフォルトだが高利回り）。

リボルビングとキャッシング部分には、**利息制限法上の金利上限**（貸付額に応じて15–20%）が適用される。ショッピング分割は割賦販売法の下で異なる扱いを受ける。

## 4. 期間延長メカニズム

日本のカード債権マスタートラストに特有の機能が、**予定償還日の期間延長**である。

| フェーズ | 標準タイムライン | 期間延長あり |
|---|---|---|
| リボルビング期間 | シリーズ発行から24–36 カ月 | 同じ |
| 予定コントロールド・アモチゼーション開始 | 事前定義された日付（例: 発行から36 カ月） | 条件を満たす場合、6–24 カ月押し出し可能 |
| コントロールド・アモチゼーション期間 | 6–12 カ月の予定償還 | 延長発動後は同じ |
| シリーズ総テナー | 30–48 カ月 | 最大70–80 カ月 |

**期間延長の条件**:
- プールのエクセススプレッドが閾値を上回る（通常、年4.0–5.0%）
- 累積貸倒償却が閾値を下回る（通常 < 2.5–4.0%）
- 90日超延滞が閾値を下回る（通常 < 3.0%）
- 準備金が目標額まで満額積み立てられている
- マスタートラスト全体でトリガー違反が未発生
- 投資家／格付会社への通知

オリジネーターが期間延長を望む理由:
- 市場環境が良い場合に低コスト資金調達を継続できる
- 再投資機会が乏しいときにパーで償還することを避ける
- オリジネーターの借換カレンダーを平準化する

投資家から見た期間延長:
- クーポンが魅力的な場合、利回りが継続する
- WAL延長は契約に織り込まれており、オリジネーターの一方的なオプションではない（格付会社は投資家保護的な条件を求める）
- シリーズ投資家層は主に日本の機関投資家ALM勘定であり、デュレーション延長に耐えられる

期間延長は概念的には**米国マスタートラストのソフトバレット構造**に近いが、文書化と投資家コミュニケーションの慣行は日本固有である（JSDA開示テンプレート）。

## 5. シリーズ発行メカニクス

既存マスタートラストから新シリーズを発行する場合:

| ステップ | アクション |
|---|---|
| 1. オリジネーターが受託者に意向通知 | 目標シリーズ規模、テナー、構造を設定 |
| 2. 受託者がプール容量を検証 | プール規模が新シリーズの投資額配分を支えられることを確認 |
| 3. 格付会社との事前協議 | JCR / R&Iがシリーズ固有の劣後、トリガー、プール実績をレビュー |
| 4. シリーズ・トランチを組成 | シニアAAA + メザニンAA/A + エクイティ（シリーズ固有の劣後） |
| 5. 配分投資額を算定 | 新シリーズがプール回収金に対する比例請求権を得る |
| 6. メガバンク系証券部門を通じてシリーズを販売 | [[JapanFG/mufg-securities|MUFG MS]]、[[JapanFG/smbc-nikko|SMBC Nikko]]、[[JapanFG/mizuho-securities|Mizuho Securities]] |
| 7. シリーズ資金化、現金はオリジネーターへ | オリジネーターが資金を受け取り、エクイティ・トランチを保有 |
| 8. シリーズがリボルビング段階へ入る | プール回収金の比例配分を受け始める |

この発行頻度により、オリジネーターは需要に合わせてシリーズ規模を調整できる。たとえば、JPY 50 bnのシニア + JPY 5 bnのメザニン + JPY 5 bnの保有エクイティを発行し、次シリーズを6 カ月後に続けることができる。

## 6. デフォルトトリガー構造

適用されるトリガーは2組ある。**プールレベル・トリガー**（マスタートラスト全体に影響）と**シリーズレベル・トリガー**（特定シリーズのみに影響）である。

### プールレベル・トリガー（マスタートラスト全体）

| トリガー | 閾値（例示） | 効果 |
|---|---|---|
| オリジネーター破産／格付 < BBB | オリジネーター固有事由 | 全未償還シリーズで早期償還。バックアップサービサーが発動 |
| サービサー債務不履行事由 | 運営上の不履行 | バックアップサービサー発動。シリーズ支払が遅れる可能性 |
| 信託レベル債務不履行事由 | 例: 受託者の支払不能 | 受託者交代。シリーズ支払は継続 |

### シリーズレベル・トリガー

| トリガー | 閾値 | 効果 |
|---|---|---|
| シリーズ固有の累積貸倒償却 | 当初シリーズ投資額の4–6%超 | シリーズが早期償還に入る |
| シリーズ固有のエクセススプレッド圧縮 | 3カ月平均が年1.5–2.5%未満 | シリーズが早期償還に入る |
| シリーズ固有の準備金が下限を下回る | 準備金が必要下限を下回る | シリーズが早期償還に入る |

プールレベル・トリガーは存在全体に関わる深刻な事象である（全シリーズが償還する）。シリーズレベル・トリガーは損害を1シリーズに封じ込める。このアーキテクチャは、マスタートラストの**リスク分散機能**である。異なるシリーズが同時に異なる早期償還段階にあることもあり得る。

## 7. 信用補完とウォーターフォール

シリーズ固有の劣後層:

| トランチ | 典型的なサイズ | 買い手 |
|---|---|---|
| シニアAAA | シリーズの80–88% | 生命保険会社、メガバンクALM、資産運用会社 |
| メザニンAA / A | 5–10% | 専門的な債券投資家 |
| 劣後BBB | 2–5% | 専門的なクレジット投資家 |
| エクイティ／残余 | 5–8% | オリジネーター保有 |

クロージング時のシリーズ固有準備金: シリーズ投資額の1.0–2.0%。

各分配日のウォーターフォールは、標準的な利息優先順位（費用 → シニア利息 → メザニン利息 → 準備金補充 → エクイティ）に続き、元本配分（リボルビング中は元本がプールへ再投資され、償還中はシリーズのシニア、次にメザニン、次にエクイティへ支払われる）で構成される。

## 8. 格付会社手法: ビンテージカーブとマスタートラスト固有要因

| 手法要素 | JCR / R&Iのアプローチ |
|---|---|
| ビンテージカーブ | 発生月ごとのコホート別デフォルト追跡 |
| マスタートラスト全体ストレス | 特定シリーズだけでなくマスタートラスト全体へストレスを適用。全シリーズがプールリスクを共有するため重要 |
| シリーズ配分ストレス | 配分メカニズムがストレスシナリオに耐えることを検証 |
| 期間延長ストレス | 条件付き支払延長シナリオをストレス |
| 補充品質ストレス | オリジネーターが継続してオリジネーションできる能力をストレス |
| オリジネーター信用連動 | オリジネーター格付はバックアップサービサー要件に影響する。シニア格付を直接キャップしないが、トリガー調整に影響する |

手法の詳細はJCR / R&Iの基準ペーパーで公開されている。[[structured-finance/jcr-ri-japan-securitization-rating-methodology-operating-playbook|operating playbook]]を参照する。

## 9. 反論・留意点

- **「マスタートラストは複雑すぎる」**。擁護側は、反復発行体にとってのマスタートラスト効率性を指摘する。批判側は、投資家がシリーズ横断の波及リスクを常に理解しているわけではないと主張する。
- **「期間延長はオリジネーターのフリーオプションである」**。プール実績に条件付けられているが、条件が満たされればオリジネーターに利益があることは確かである。一方で、条件性は実質的な保護とも言える。
- **「日本のカード債権ABSは小さすぎる」**。年間発行額は約JPY 400–700 bnで、オートローンABSの約JPY 1.5–2 兆円と比べて小さい。カード発行会社がメガバンク親会社からより安い銀行借入資金にアクセスできるためである。
- **「外国型マスタートラストは日本に適さない」**。反論として、この構造は2000年代初頭から使われ、複数サイクルを通じて機能してきた。規制環境もこれを支えている。
- **「カード会員レベルのデータが粗い」**。プールデータは集計レベルで報告される。一部投資家は、米国マスタートラストの公開報告より粒度が低いと考えている。
- **「シニアAAAで貸倒れが発生したことがない。劣後は過剰設計である」**。擁護側は、まさにその厚みが貸倒れを防いできたのであり、バッファが機能したと主張する。

## 10. 未解決の論点

- Kyash、Revolut Japan、Wiseのようなデジタル専業／フィンテック系カード発行体が、マスタートラストABSを発行するだけのプール規模を持つようになるか。
- BNPL債権が、商品成熟に伴ってマスタートラスト・プールに統合されるか。
- キャッシュレス決済政策の推進が、カード債権プール全体の成長に与える影響（QRコードがカード支出のシェアを奪う場合の低下との比較）。
- [[JapanFG/aeon-financial-service|AEON Financial Service]]が小売親和型カード・ポートフォリオの成熟に伴ってABS発行を拡大するか。
- [[JapanFG/jcb|JCB]]の国際展開が、クロスボーダー・カード債権発行を促す役割。

## 関連項目

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/consumer-loan-abs-japan-card-issuer|consumer-loan / card-receivable ABS Japan]]
- [[structured-finance/japan-consumer-loan-abs-structure|Japan consumer-loan ABS structure]]
- [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]
- [[structured-finance/japan-equipment-lease-abs|Japan equipment lease ABS]]
- [[structured-finance/jcr-ri-japan-securitization-rating-methodology-operating-playbook|JCR / R&I securitization rating methodology operating playbook]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[structured-finance/fitch-moody-sp-japan-criteria|Fitch / Moody's / S&P Japan criteria]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK / TMK SPV vehicle]]
- [[structured-finance/japan-securitization-product-matrix|Japan securitization product matrix]]
- [[JapanFG/jcb|JCB]] · [[JapanFG/mufg-nicos|MUFG Nicos]] · [[JapanFG/credit-saison|Credit Saison]]
- [[JapanFG/orico|Orient Corp]] · [[JapanFG/aeon-financial-service|AEON Financial Service]] · [[JapanFG/jaccs|JACCS]]
- [[JapanFG/bnpl-landscape|BNPL landscape]]
- [[payments/INDEX|payments domain]]

## 出典

- JCR card-receivable ABS criteria — https://www.jcr.co.jp/en/
- R&I card-receivable ABS methodology — https://www.r-i.co.jp/en/
- JCB investor relations — https://www.jcb.co.jp/
- Mitsubishi UFJ Nicos corporate site — https://www.cr.mufg.jp/
- Credit Saison investor relations — https://corporate.saisoncard.co.jp/
- Orient Corporation investor relations — https://www.orico.co.jp/
- JSDA structured-finance statistics — https://www.jsda.or.jp/en/
- ASF Japan — https://www.asf-japan.gr.jp/

---

> [!info] 校核状態
> confidence: **likely**. マスタートラスト枠組み、期間延長メカニズム、シリーズ発行メカニクス、トリガー構造は、JCR / R&Iの基準ペーパーとJSDA開示慣行で公開されている。具体的な発行額、劣後レンジ、トリガー閾値は案件とオリジネーターによって異なる。シリーズ配分計算は標準的だが、実装はマスタートラストごとに異なる。
