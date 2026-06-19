---
source: structured-finance/synthetic-securitization-japan-bank-rwa-relief
source_hash: ef9fdf96289a71b8
lang: ja
status: machine
fidelity: ok
title: "日本における合成証券化 — 参照ローンポートフォリオに対する CLN／CDS を通じた銀行 RWA 軽減"
translated_at: 2026-06-19T12:43:19.978Z
---

# 日本における合成証券化 — 参照ローンポートフォリオに対する CLN／CDS を通じた銀行 RWA 軽減

## TL;DR

合成証券化 — 銀行が原資産ローンを売却せずに、**クレジット・デフォルト・スワップ (CDS)** または**クレジット・リンク債 (CLN)** 構造を通じて参照ローンポートフォリオの信用リスクを外部投資家に移転するもの — は、銀行のバランスシート上の**リスク・ウェイト・アセット (RWA) 軽減**のための現代的な Basel III ツールである。日本では、3 メガバンク（[[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMFG]]、[[megabanks/mizuho-fg|Mizuho FG]]）が**事業会社向けローン**、**プロジェクトファイナンス**、および**インフラファイナンス**ポートフォリオの資本を解放するために、合成証券化を選択的に用いてきた。欧州のピア銀行のディールフローと比較すると、日本のメガバンクの合成 SRT（Significant Risk Transfer：重大なリスク移転）の発行はより小規模かつ低頻度であった — 日本の銀行は歴史的に潤沢な資本バッファーを有しており、RWA 軽減ディールを断続的にしか必要としてこなかった。投資家基盤はグローバルなスペシャリスト・クレジット投資家ファンド（ヘッジファンド、ストラクチャード・クレジット・ファンド、一部の年金基金）が支配しており、彼らがジュニアまたはメザニンのリスク移転トランシェを吸収できる。[[structured-finance/credit-rating-methodology-jcr-r-and-i|FSA capital-relief approval]] は、ディールが特定の会計および資本テストの下で真の信用リスク移転を実証することを要求する。

## Wiki route

本エントリは [[structured-finance/INDEX|structured-finance index]] の下に**銀行資本管理**証券化ノードとして位置する。[[structured-finance/japan-abs-market-overview|Japan ABS market overview]]（合成の代替としての真正売買 ABS）、法的構造レイヤーとしての [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]、および原資産となるクレジット・デリバティブ・インフラとしての [[derivatives/japan-cds-market-overview|Japan CDS market overview]] と対比して読まれたい。システムフレーム：より広範な銀行資本コンテキストとしての [[finance/INDEX|finance index]]、機関アンカー：[[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMFG]]、[[megabanks/mizuho-fg|Mizuho FG]]。

## 1. The problem — bank capital constraints on loan growth

Basel III ルールの下で、銀行はローンブックの信用リスクに対して規制資本を保有しなければならない：
- 事業会社向けローンは通常 50–100%+ のリスクウェイトを有する（借入人格付けにより変動）
- 資本比率（CET1, 、Tier 1, 、Total）が最大レバレッジを設定する
- 低格付け借入人への高品質ローンは、高格付け借入人よりも多くの資本を消費する

特定のセクターまたは地域で融資量を拡大しようとするメガバンク（例：インフラへのプロジェクトファイナンス融資、レバレッジドファイナンスの事業会社向けローン、または新興国向けの貿易金融）にとって、**RWA 制約は資金調達制約より先に効いてくることがある**。

## 2. The two paths to RWA relief

| パス | 仕組み | トレードオフ |
|---|---|---|
| **真正売買証券化** | 原資産ローンを SPV に売却する；ローンがバランスシートから離れる | 顧客関係への影響；サービシングの引き継ぎ；会計／開示上の複雑性の可能性 |
| **合成証券化** | ローンをバランスシートに残す；CDS／CLN を通じて信用リスクのみを移転する | 顧客関係は維持される；運営上の引き継ぎがより簡素；ただし資本軽減はリスク移転の規制承認に依存する |

ほとんどの大口の銀行顧客関係（銀行が将来の融資、アドバイザリー、クロスセルのために関係を生かし続けたい場合）にとって、合成証券化が選好される — 顧客対面のローンを維持しつつ資本を軽減する。

## 3. Synthetic securitisation structure

```
+---------------------------------+
|       Originating bank          |
|  - Holds reference loan         |
|     portfolio on balance sheet  |
|  - Pays protection premium      |
+----+----------------------+----+
     |                      |
   CDS/CLN              Capital relief
   protection           (FSA-approved
   premium              SRT)
     |                      
     v                      
+----+----------------------------+
|   Protection-selling SPV       |
|    or direct investor          |
|  - Funds collateral by issuing |
|     CLN tranches to investors  |
|  - Bears reference-portfolio    |
|     credit loss up to defined   |
|     attachment point            |
+----+----------------------+----+
     |                      |
   Junior tranche       Senior tranche
   (first-loss to        (higher loss
    investor)            attachment)
     |                      |
     v                      v
+----+-------+    +---------+--------+
|Specialist  |    |Pension /         |
|credit fund |    |insurer / less    |
|(hedge fund)|    |risk-tolerant inv |
+------------+    +------------------+
```

主要な構造要素：
- **参照ポートフォリオ**：銀行ローンの定義されたプール（例：100–300 の指名された事業会社借入人、またはプロジェクトファイナンスローンのポートフォリオ、または貿易金融ローンのようなテーマ別バスケット）
- **トランシェ化**：通常、ジュニア／ファーストロス・トランシェ（最も高価なプロテクションだが最大の資本軽減便益）、メザニン・トランシェ、およびシニア・トランシェ（しばしば銀行が保持するか、低リスク投資家に売却される）
- **ファンデッド vs アンファンデッド**：CLN は「ファンデッド」（投資家が前払いで現金を支払う；SPV が担保を保有する）；CDS は「アンファンデッド」であり得る（バイラテラル；カウンターパーティ信用リスクの考慮が適用される）
- **テナー**：通常、平均ローンポートフォリオ・ライフに合致する 5–7 年
- **参照債務**：通常は静的プール、時に補充可能なプール

## 4. FSA capital-relief approval — the structural test

組成銀行が合成証券化を**真のリスク移転**として計上する（そして RWA 削減を取る）ためには、ディールは規制テストを満たさなければならない：
- 重大なリスク移転（SRT）要件 — 意味のある信用リスクが銀行のバランスシートから移転していなければならない
- 銀行は不均衡な保持トランシェ／ファーストロスを保持してはならない
- プロテクションの売り手（SPV／カウンターパーティ）は、売却するプロテクションについて信頼できるものでなければならない
- 会計処理はリスク移転を反映しなければならない（または特定の Basel が認める非連結処理が存在しなければならない）

FSA は SRT コンプライアンスについて各ディールを個別に審査する。これは意味のあるストラクチャリング上の摩擦である — EU 市場で機能するディールが、日本の承認のために調整を必要とする場合がある。

## 5. Japanese megabank synthetic-SRT activity

日本のメガバンクの合成 SRT 発行は、欧州のピア銀行のフローよりも**小規模かつ低頻度**であった：
- 欧州の銀行（BNP Paribas、Deutsche Bank、Santander、Crédit Agricole、Barclays、その他）は 10 年以上にわたり合成 SRT の重度の利用者であり、頻繁に数十億ユーロ規模のディールを行ってきた
- 日本のメガバンクは合成構造をより選択的に用いてきたが、その一因は：
  - 資本比率が規制上の最低水準を快適に上回っていた
  - ローンの伸びが緩やかであり、恒常的な資本軽減ディールフローを必要としなかった
  - 文化的／関係的要因がローンをバランスシート上に目に見える形で保持することを選好する
- メガバンクが合成 SRT ディールを発行する場合、参照ポートフォリオはコアの国内事業会社向け融資ではなく、**プロジェクトファイナンスローン、インフラローン、レバレッジドファイナンスの事業会社向けローン、または特定の地理的エクスポージャーのブック**である傾向があった

市場は近年、Basel の最終化（Basel III／IV、アウトプット・フロア）が十分に資本化された銀行にさえ資本圧力を高めるなか、成長してきた。

## 6. Investor base

プロテクションの売り手側は以下が支配している：
- **スペシャリスト・クレジット投資家ファンド**（ヘッジファンド、ストラクチャード・クレジット・ファンド、専門の SRT 投資家ファンド）
- よりシニアなトランシェ向けの**年金基金および保険会社**（一部）
- 選択された大口取引向けの**ソブリン・ウェルス・ファンド**
- 投資家コミットメントを集約する**ファンド・オブ・ファンズ**ビークル

合成 SRT 向けの日本の投資家基盤は小さい — ほとんどの投資家はロンドン、NY、または香港のオフィスから SRT 取引をブッキングする US／EU チームを擁するグローバル企業である。

## 7. Comparison to true-sale ABS

| 次元 | 真正売買 ABS | 合成証券化 |
|---|---|---|
| ローンの所有権 | SPV に移転 | 銀行が保持 |
| 顧客関係 | サービサー管理（しばしば組成銀行に戻る）| 完全に保持 |
| 資本軽減 | 完全（ローンがバランスシート外へ）| 部分的（RWA 削減）|
| 資金調達 | あり（売却による現金）| なし（またはファンデッド CLN 構造を通じて部分的）|
| 運営上の複雑性 | より高い（ローン移転、サービサー引き継ぎ）| より低い（ローン移転なし）|
| 投資家基盤 | 銀行、保険会社、広範な債券投資家 | スペシャリスト・クレジット・ファンド（しばしば US／EU）|
| 税務／会計 | 真正売買会計 | デリバティブベース会計 |
| 典型的な用途 | 資金調達 + 資本 | 資本のみ |

関係性に敏感な事業会社ローンブックに対する純粋な RWA 管理には、合成が明確な選択である。グラニュラーな消費者ローンブックの資金調達多様化には、真正売買が明確な選択である。

## 8. Recent illustrative themes (descriptive only)

特定の取引を名指しせずに、日本のメガバンクの合成証券化発行における最近のテーマには以下が含まれる：
- **プロジェクトファイナンスおよびインフラローンのポートフォリオ** — これらのローンは大口かつ資本集約的であるため有用
- **レバレッジドファイナンスの事業会社ローンポートフォリオ** — 資本集約的であり、ファンド投資家が引き受ける意欲のある循環的な信用エクスポージャーを伴う
- **クロスボーダー貿易金融ポートフォリオ** — しばしば政治リスク加重融資に対して規制資本主導
- **ESG リンク型バリアント** — サステナビリティ指標に結び付いた構造への新たな関心

新規発行のペースは、Basel 最終化の発効日が近づくにつれて増加してきた。

## 9. Counterpoints

- **「規制資本アービトラージ」** — 批判者は、保持部分とファーストロス・ポジションが規制比率を良く見せるように構造化されている場合、合成 SRT が銀行のリスクプロファイルを実質的に変えることなく報告上の資本比率を最適化するために用いられ得ると主張する
- **「スペシャリスト投資家への集中」** — SRT 投資家基盤は小さい；グローバルな SRT 投資家資本が逼迫すれば、日本のメガバンクは新規発行を経済的に配置するのに苦労する可能性がある
- **「FSA 承認の摩擦」** — ケースバイケースの SRT 承認プロセスは執行上の不確実性を生む；ディールは承認中に再構造化され得て、経済性に影響する
- **「アンファンデッド構造におけるカウンターパーティ信用リスク」** — アンファンデッド CDS 構造は銀行をプロテクション売り手の信用リスクにさらす；ファンデッド CLN 構造はこれを回避するが、より大きな投資家資本を必要とする
- **「テールリスク移転への疑問」** — 深刻な信用ストレス下で、SPV／ファンドのカウンターパーティが実際にクレームを支払えるかは現実的な懸念である；AIG 型のプロテクション売り手の破綻が典型例である
- **「限定的な公開開示」** — 合成 SRT ディールはしばしば公に公表されないか、Pillar 3 開示において意図的に曖昧な用語で記述され、市場分析を困難にする

## 10. Open questions

- Basel 最終化圧力（アウトプット・フロアの発効日など）の下での日本のメガバンクの合成 SRT 発行のペース
- [[regional-banks/japan-post-bank|Japan Post Bank]] または大手地方銀行が合成 SRT を発行するか（これまでのところ活動はメガバンクに集中している）
- FSA 承認プロセスが時間とともにより標準化され、ストラクチャリングの摩擦を低減するか
- 日本の機関投資家（生命保険会社、年金基金）が合成 SRT ディールのシニア・トランシェへの選好を発達させるか
- 合成 SRT と [[structured-finance/aircraft-leasing-financing-japan-shosha|aircraft]]／[[structured-finance/ship-financing-japan-megabank|ship]]／[[structured-finance/project-finance-spv-japan-renewable|project-finance]] ローンブックとの相互作用 — 資本集約的なスペシャリティ・ローンポートフォリオは自然な候補である
- ESG リンク型合成 SRT 構造の扱い、およびそれらが規制または投資家需要の牽引力を獲得するか

## Related

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[structured-finance/abcp-conduit-japan-megabank|ABCP conduit]]
- [[structured-finance/repackaging-note-japan|repackaging note]]
- [[structured-finance/japan-clo-issuance-japanese-banks|Japan CLO investment]]
- [[structured-finance/aircraft-leasing-financing-japan-shosha|aircraft leasing financing]]
- [[structured-finance/ship-financing-japan-megabank|ship financing]]
- [[structured-finance/project-finance-spv-japan-renewable|renewable project finance]]
- [[structured-finance/infrastructure-finance-spv-japan|infrastructure finance SPV]]
- [[structured-finance/npl-securitization-japan|NPL securitisation Japan]]
- [[structured-finance/fitch-moody-sp-japan-criteria|Fitch/Moody's/S&P Japan criteria]]
- [[derivatives/japan-cds-market-overview|Japan CDS market overview]]
- [[finance/INDEX|finance index]] · [[finance/japan-leveraged-buyout-economics|Japan LBO economics]]
- [[real-estate-finance/INDEX|real-estate-finance index]]
- [[policy-finance/japan-project-finance-stack-diagram|Japan project finance stack]]
- [[megabanks/mufg|MUFG]] · [[megabanks/smfg|SMFG]] · [[megabanks/mizuho-fg|Mizuho FG]]
- [[cooperative-banks/norinchukin|Norinchukin]] · [[regional-banks/japan-post-bank|Japan Post Bank]] · [[financial-regulators/japan-exchange-group|JPX]]

## Sources

- FSA 自己資本規制フレームワーク開示
- メガバンク IR／Pillar 3 開示 — MUFG (https://www.mufg.jp/english/)、SMFG (https://www.smfg.co.jp/english/)、Mizuho FG (https://www.mizuho-fg.com/index.html)
- BOJ 金融システムレポート — https://www.boj.or.jp/en/
- JCR／R&I クレジット・リンク債格付けコメンタリー
- BIS Basel フレームワーク文書 — https://www.bis.org/

---

> [!info] 校核状态
> confidence: **likely**。合成 SRT の仕組み、Basel ルール要件、および欧州ピアに対する日本メガバンクの相対的活動は、BIS 論文および銀行 IR 開示において十分に文書化されている。特定の日本メガバンクの取引は、公開開示がディールレベルでしばしば意図的に曖昧であるため抽象化している。欧州ピア比較は業界標準の議論である。
