---
source: structured-finance/japan-equipment-lease-abs
source_hash: 26d3b31736370130
lang: ja
status: machine
fidelity: ok
title: "日本の設備リース ABS — 残価リスク、真正リースとファイナンスリースの区分"
translated_at: 2026-06-03T00:53:08.272Z
---
# 日本の設備リース ABS — 残価リスク、真正リースとファイナンスリースの区分

## 要約

日本の設備リース ABS は、年間で控えめな発行額（約 JPY 200-400 bn）にとどまる資産クラスであり、三大独立系リース会社（[[JapanFG/mitsubishi-hc-capital|Mitsubishi HC Capital]]、[[JapanFG/tokyo-century|Tokyo Century]]、[[JapanFG/orix-corp|ORIX]]）と銀行系リース会社（Mizuho-Marubeni 傘下の[[JapanFG/fuyo-lease|Fuyo Lease]]、SMFG 傘下の Sumitomo Mitsui Finance & Leasing、Mizuho 傘下の[[JapanFG/ibj-leasing|IBJ Leasing]]）が発行する。**機械、輸送機器、IT / 事務機器、医療機器、再生可能エネルギーインフラ**に関するリース債権を ABS プールに組み込む。この資産クラスは、二つの特徴により**ローン ABS とは構造的に異なる**。第一に、1として、日本基準（J-GAAP）と IFRS 16 に基づく **真正リース対ファイナンスリースの分類**である。ファイナンスリースはリスクと経済的便益のほぼすべてを借手に移転し、経済的にはローンに近い。真正リース（会計分類上のオペレーティングリース）は残価リスクを貸手に残し、貸手はリース終了時の設備価値を予測し回収しなければならない。第二に、**残価リスク**（2）である。これは借手の信用リスクに上乗せされる。借手デフォルトがゼロでも、リース終了時の設備実現価値が帳簿上の残価を下回れば、貸手（および ABS）は損失を被る。格付会社は、残価ヘアカットを吸収するため、**AAA シニアで10-15%の劣後**を適用する。これはオートローン ABS（6-12%）より高い。真正リース比率が高いプールほど信用補完は厚くなる。オートリース ABS と比べ、設備リースプールは設備種類がより異質であり、急速に価値が下がる IT / 事務機器と、価値を比較的長く保つ機械が混在する。また、個人消費者より法人借手が中心であるため集中リスクも高い。格付は[[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I]]による。

## ウィキ上の位置づけ

この項目は、**設備リース ABS の運営メカニクス**ノードとして[[structured-finance/INDEX|structured-finance index]]の配下に置かれる。比較可能な有担保プール ABS との対照は[[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]、無担保との対照は[[structured-finance/japan-consumer-loan-abs-structure|Japan consumer-loan ABS structure]]、リボルビングプールとの対照は[[structured-finance/japan-credit-card-receivable-abs|Japan credit-card receivable ABS]]、手法レイヤーは[[structured-finance/jcr-ri-japan-securitization-rating-methodology-operating-playbook|JCR / R&I securitization rating methodology operating playbook]]と照らして読む。リース業界の経路は、リース会社の経済性が[[finance/INDEX|finance domain]]、不動産リースとの対照が[[real-estate-finance/INDEX|real-estate-finance domain]]である。

## 1. 反復発行体の状況

| 発行体 | 親会社 / 系列 | 資産焦点 | 年間 ABS 発行額（概算） |
|---|---|---|---|
| [[JapanFG/mitsubishi-hc-capital|Mitsubishi HC Capital]] | Mitsubishi（三菱 UFJ リースと日立キャピタルの合併により2021 に形成） | 機械、IT / 事務、輸送、不動産リース、再生可能 | JPY 80-150 bn |
| [[JapanFG/tokyo-century|Tokyo Century]] | 独立系（Itochu / Tokyo MUFG 関連株主） | 航空機、船舶、IT / 事務、輸送、再生可能、環境 | JPY 60-120 bn |
| [[JapanFG/orix-corp|ORIX]] | 独立系の総合金融グループ | 設備リース（機械、車両、IT）に加え、より広い金融 | JPY 50-100 bn |
| [[JapanFG/fuyo-lease|Fuyo Lease]] | Mizuho / Marubeni 系 | 一般設備 + オートフリートリース | JPY 30-60 bn |
| Sumitomo Mitsui Finance & Leasing | SMFG / Sumitomo Corp 系 | 設備 + ベンダーファイナンス | JPY 40-80 bn |
| [[JapanFG/ibj-leasing|IBJ Leasing]] | Mizuho group | 設備 + ストラクチャードリース | JPY 20-50 bn |
| [[JapanFG/ricoh-leasing|Ricoh Leasing]] | Ricoh group 系 | 事務機器に焦点 | JPY 15-40 bn |
| 地域銀行系リース会社（[[JapanFG/chibagin-leasing|Chibagin Leasing]]、[[JapanFG/iyogin-leasing|Iyogin Leasing]]、[[JapanFG/yokohama-bank-leasing|Yokohama Bank Leasing]]など） | 各地域銀行 | 地域 SME 向け設備リース | 個別発行は小規模。一部でプール案件あり |

上位三つの独立系が、公募リース ABS 発行の大半を占める。銀行系リース会社は親銀行の資金枠を利用でき、ABS 依存度は低い。ABS は中核的な財務調達というより、資本負担軽減または資金調達多様化の機会として発行する。

## 2. プール構成 — 設備タイプの組み合わせ

| 設備タイプ | 混合プールでの典型比率 | 典型リース期間 | 残価プロファイル |
|---|---|---|---|
| **機械（産業 / 建設 / 農業）** | 25-40% | 5-7 年 | リース終了時に当初価値の30-50%を維持 |
| **車両 / 輸送（商用トラック、フリート車、フォークリフト）** | 15-30% | 3-5 年 | 25-40%を維持（中古商用市場は流動的） |
| **IT / 事務機器（PC、サーバー、複合機、ネットワーク機器）** | 15-25% | 3-5 年 | 5-15%を維持（技術的陳腐化が速い） |
| **医療機器（画像、モニタリング、検査）** | 5-15% | 5-7 年 | 30-60%を維持（維持管理されていれば耐用年数が長い） |
| **再生可能 / 環境（太陽光パネル、バイオガス設備）** | 5-10% | 10-15 年 | 長期。残価モデルは複雑 |
| **その他 / 特殊設備** | 5-15% | 可変 | 設備固有 |

組み合わせが重要な理由は次のとおり。
- **急速に減価する設備**（IT / 事務）は、残価が低く予測しやすいため、ファイナンスリース分類に入りやすい。プール利回りはローンに近い。
- **ゆっくり減価する設備**（機械、医療）は、残価が意味を持ち、貸手がアップサイドとリスクを保持したいことから、真正リースに入りやすい。格付会社の劣後は厚くなる。
- **混合プール**はこれらをバランスさせる。良く組成された案件では、高残価リスク設備を定義された比率に制限する。

## 3. 真正リース対ファイナンスリース — 中心的な区別

日本基準と IFRS 16 は、リースを経済的実態で分類する。

| 分類 | J-GAAP / IFRS 16 の見方 | 経済的実態 | ABS での取扱い |
|---|---|---|---|
| **ファイナンスリース** | リスクと経済的便益のほぼすべてを借手へ移転。貸手は債権を計上し、借手は資産 + 負債を計上する | 設備を担保とする有担保ローンと経済的に同等 | キャッシュフローはローンに近い。残価リスクは最小（通常ゼロ残価）。格付会社の取扱いはオートローン ABS に近い |
| **真正リース / オペレーティングリース** | 貸手が実質的なリスクと経済的便益を保持。貸手は資産を計上し、借手はリース料を費用計上する | 貸手が残価を予測・回収し、期間満了時に設備を回収する | キャッシュフローはリース料ストリーム + 残価実現の二要素を持つ。ABS は両方に備えて構造化する必要がある |

**ファイナンスリース ABS プール**:
- 借手は固定月額リース料 = 元本全額 + 利息を支払う。
- リース終了時、借手は設備を返却する（実質的には支払い済み）か、名目的価格で買い取ることができる（日本でいう1 円リース）。
- 設備所有は、法的に常に移転しない場合でも、経済的には移転する。
- ABS 構造では、劣後は信用リスクに合わせて設定される。残価リスクはほぼゼロ（ゼロまたは1円残価）である。

**真正リース ABS プール**:
- 借手は月額リース料 = 設備コストの一部 + サービス要素を支払う。
- リース終了時、貸手は設備を回収し、二次市場で売却する（または再リースする）。
- 実現した再売却価値（または再リース収入）は貸手（および ABS 保有者）に帰属する。
- ABS 構造では、劣後は**信用リスク + 残価リスク**に合わせて設定される。より厚い信用補完が必要である。

**実務上のプール構成**: 日本の設備リース ABS プールの多くは両方を組み合わせる。純粋なファイナンスリースプール（IT / 事務機器で典型）はローン ABS に近く格付される。純粋な真正リースプール（稀で、航空機 / 船舶で典型）は構造上の工夫を必要とする。混合プール案件は、残価エクスポージャーをリングフェンスするために**別個の残価準備金**を使う。

## 4. 残価リスクモデリング

真正リース部分について、格付会社は次のように残価にストレスをかける。

| ストレス | 説明 | 典型ヘアカット |
|---|---|---|
| ベースケース残価 | 案件開始時に貸手が契約上計上した残価 | — |
| 市場回収ベースケース | リース終了時の現実的な中値二次設備価値 | 契約残価の80-100% |
| ストレスシナリオ | 景気後退 + 二次市場流動性ストレス | 契約残価の50-70% |
| 厳しいストレスシナリオ | 設備陳腐化 + 市場崩壊 | 契約残価の25-50% |

各格付カテゴリーでの**残価ヘアカット**が、残価準備金のサイズを決める。AAA シニアでは、格付会社は通常、厳しいストレス（25-50%回収）までストレスし、プール残価の10-25%を残価準備金として利用可能にすることを求める。

**設備タイプ感応度**:
- IT 機器: 残価モデリングは厳しい。ムーアの法則に伴う陳腐化により、5 年目の二次価値は非常に不確実である。
- 機械: 残価はより安定するが、建設機械など景気循環型業界のプールでは、景気後退時に価値が大きく低下し得る。
- 車両: 日本の中古商用市場は流動的（USS トラックオークションなど）で、残価は予測しやすい。
- 医療: 先端設備は技術ライフサイクルが短い。古い機器は安定しつつも低下する価値を持つ。
- 再生可能 / 太陽光: 固定価格買取制度（FIT）が設備残価に影響する。パネルは再展開価値を持つ場合も、持たない場合もある。

## 5. オートリース ABS との比較

| 観点 | 設備リース ABS | オートリース ABS（通常は自動車 OEM キャプティブ） |
|---|---|---|
| プールサイズ | 数百から数千件のリース | 数万件のリース（より分散） |
| 借手プロファイル | 法人借手（SME + 大企業） | 法人フリート + 個人消費者の混合 |
| 集中リスク | 高い（法人借手により債務者集中が生じる） | 低い（個人プールは分散） |
| 残価リスク | 高い変動性（設備種類が混在） | 中程度（確立した中古車市場） |
| 期間 | 通常3-7 年 | 通常3-5 年 |
| デフォルト変動性 | 中程度（借手信用サイクルに敏感） | 低い（個人プールは分散） |
| AAA シニア向け劣後 | 10-15% | 6-10% |
| 残価準備金 | プール残価の10-25% | プール残価の8-15% |

設備リース ABS プールは、オートリースプールにはない**単一設備タイプ集中制限**にも直面する。たとえば IT 機器が25-35%を超えるプールでは、残価モデリングが不確実になり過ぎる。

## 6. 信用補完スタック

| レイヤー | AAA シニア（混合プール）での典型サイズ |
|---|---|
| 劣後（メザニン + エクイティ） | 当初プールの10-15% |
| クロージング時の現金準備金 | シニアの1.5-3.0% |
| 現金準備金ターゲット | 2.5-4.5%（超過スプレッドから積み上げ） |
| 残価準備金（現金準備金と別） | プール残価エクスポージャーの10-25% |
| 超過スプレッド（1番目の防衛線） | プールに対し年3-7% |

残価準備金はこの資産クラスを特徴づける。信用損失準備金と混同されず、残価実現不足に備えて**別途積み立てられ、リングフェンス**される。

## 7. ウォーターフォール — リース料と残価の分離

| 優先順位 | 項目 |
|---|---|
| 1 | サービサーフィー（年0.30-0.60%） |
| 2 | 受託者 / 口座銀行フィー |
| 3 | シニア利息 |
| 4 | メザニン利息 |
| 5 | 現金準備金の補充（信用損失準備金） |
| 6 | 残価準備金の補充 |
| 7 | 元本（案件に応じてシーケンシャルまたはプロラタ）— 月次リース料 + 設備処分代金から流れる |
| 8 | エクイティ / オリジネーターへの残余 |

特徴的な運営上の点は、元本キャッシュフローが**二つの流れ**から来ることである。すなわち、（1）毎月支払いのリース料部分（予測可能で予定されたもの）と、（2）**リース終了時の設備処分代金**（塊で入り、市場依存）である。このため、ローン ABS プールより元本返済タイミングが予測しにくい。

## 8. 格付会社手法の具体点

| 手法要素 | JCR / R&I のアプローチ |
|---|---|
| 借手信用 | 各借手の内部信用スコアリング + オリジネーターのスコアリング手法 |
| プール集中 | 単一借手、単一設備タイプ、単一業種集中への制限 |
| リース構造 | 真正リースとファイナンスリースの比率を開示。劣後はそれに応じて設定 |
| 残価 | 設備タイプ別の残価カーブ。ストレスシナリオごとのヘアカット |
| サービサー | オリジネーター（通常はリース会社自身）。運営能力 + バックアップサービサー |
| 回収 | 設備処分タイミング + 実現価値対帳簿残価 |

手法の詳細は[[structured-finance/jcr-ri-japan-securitization-rating-methodology-operating-playbook|operating playbook]]にある。

## 9. リース会社にとっての資金調達ミックス上の役割

[[JapanFG/mitsubishi-hc-capital|Mitsubishi HC Capital]] / [[JapanFG/tokyo-century|Tokyo Century]] / [[JapanFG/orix-corp|ORIX]]にとって、リース ABS は次と並ぶ。

- **銀行ライン調達**（メガバンクからのコミットメント付きクレジットファシリティ）。
- **社債発行**（これらの発行体は IG 格付を持つ）。
- **コマーシャルペーパー**（短期資金調達）。
- **Sukuk / クロスボーダー発行**（通貨 / 投資家多様化）。

ABS が提供するものは次のとおり。
- **オフバランスシートの資本負担軽減**（Basel III の証券化取扱いに基づく）。
- **資金調達多様化**（社債とは異なる投資家基盤）。
- **リース債権の期間に対する期間マッチング**。
- **格付アービトラージ**（IG 発行体格付にもかかわらず AAA シニア）。

銀行系リース会社（[[JapanFG/fuyo-lease|Fuyo Lease]]、SMFL、[[JapanFG/ibj-leasing|IBJ Leasing]]）はより安い親銀行資金にアクセスできるため、ABS 発行は機会的である。独立系に比べ、財務調達の中核ではない。

## 10. 反論点

- **「リース ABS は追加ルール付きのオートローン ABS にすぎない」** — 真正リースの残価リスクはキャッシュフロープロファイルを実質的に変える。残価準備金は見せかけではなく、意味ある構造上の工夫である。
- **「IT 機器リースは ABS プールに入れるべきではない」** — 批判者は残価不確実性が高過ぎると主張する。一方で擁護者は、ファイナンスリース分類 + ゼロ残価構造によりリスクは管理可能だと指摘する。
- **「集中が問題である」** — 法人借手により、中規模プールでも単一名リスクが測定可能になる。緩和策は集中制限と借手信用スコアリングである。
- **「日本の残価市場は浅い」** — 一部設備タイプ（特殊産業機械など）では二次市場が薄い。ヘアカットはこれを反映する。
- **「銀行系リースが支配しており、独立系 ABS 発行は縮小している」** — 統計上、銀行系はオリジネーション量が大きいが、資金調達ミックス上の経済性により、独立系の方が ABS 発行体としては大きい。
- **「再生可能エネルギーリース ABS は急拡大する」** — 太陽光 PV や洋上風力プロジェクトリースは成長しているが、オペレーティングリース対ファイナンスリースの分類と FIT 制度感応度により特殊事例である。

## 11. 未解決の論点

- ESG リンク型リース ABS（再生可能 / バッテリー / EV 充電インフラプール）が別個のサブセグメントになるか。
- IFRS 16 の採用（グローバルにはほとんどのオペレーティングリースを借手のオンバランスに移した）が、日本で真正リース / ファイナンスリースの経済性を意味ある形で変えるか。
- [[JapanFG/mitsubishi-hc-capital|Mitsubishi HC Capital]]の買収拡大が、ABS に多様な設備タイプのプールを追加し続けるか。
- [[JapanFG/tokyo-century|Tokyo Century]]の航空機 / 船舶ファイナンス資産が、リース ABS 構造（または別個の航空機 / 船舶 ABS）で果たす役割。
- デジタル設備 as-a-service（サーバー / ネットワーク as-a-service）のリースプールが証券化可能になるか。

## 関連項目

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]
- [[structured-finance/japan-consumer-loan-abs-structure|Japan consumer-loan ABS structure]]
- [[structured-finance/japan-credit-card-receivable-abs|Japan credit-card receivable ABS]]
- [[structured-finance/jcr-ri-japan-securitization-rating-methodology-operating-playbook|JCR / R&I securitization rating methodology operating playbook]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[structured-finance/fitch-moody-sp-japan-criteria|Fitch / Moody's / S&P Japan criteria]]
- [[structured-finance/aircraft-leasing-financing-japan-shosha|aircraft leasing financing Japan shosha]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK / TMK SPV vehicle]]
- [[structured-finance/japan-securitization-product-matrix|Japan securitization product matrix]]
- [[JapanFG/mitsubishi-hc-capital|Mitsubishi HC Capital]] ・ [[JapanFG/tokyo-century|Tokyo Century]] ・ [[JapanFG/orix-corp|ORIX]]
- [[JapanFG/fuyo-lease|Fuyo Lease]] ・ [[JapanFG/ibj-leasing|IBJ Leasing]] ・ [[JapanFG/ricoh-leasing|Ricoh Leasing]]
- [[finance/INDEX|finance index]] ・ [[real-estate-finance/INDEX|real-estate-finance index]]

## 出典

- JCR lease-receivable ABS criteria — https://www.jcr.co.jp/en/
- R&I lease-receivable ABS methodology — https://www.r-i.co.jp/en/
- Mitsubishi HC Capital investor relations — https://www.mitsubishi-hc-capital.com/
- Tokyo Century investor relations — https://www.tokyocentury.co.jp/
- ORIX Corp investor relations — https://www.orix.co.jp/grp/en/
- Japan Leasing Association — https://www.leasing.or.jp/
- JSDA structured-finance statistics — https://www.jsda.or.jp/en/
- ASF Japan — https://www.asf-japan.gr.jp/

---

> [!info] 検証状態
> confidence: **likely**. 真正リースとファイナンスリースの分類、残価リスクモデリング、設備タイプ集中制限、信用補完スタックは、JCR / R&I 基準と Japan Leasing Association 資料に記録されている。具体的な劣後・準備金レンジは業界開示案件データを反映し、設備タイプ別残価カーブは典型的な格付会社ストレスシナリオの例示である。
