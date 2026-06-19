---
source: structured-finance/japan-credit-card-receivable-abs
source_hash: ce83a1bc5667e0c8
lang: ja
status: machine
fidelity: ok
title: "日本のクレジットカード債権 ABS — マスタートラスト・フレームワーク、期間延長、デフォルト・トリガー"
translated_at: 2026-06-19T12:43:19.978Z
---

# 日本のクレジットカード債権 ABS — マスタートラスト・フレームワーク、期間延長、デフォルト・トリガー

## TL;DR

日本のクレジットカード債権 ABS — [[card-issuers/jcb|JCB]]、[[card-issuers/mufg-nicos|Mitsubishi UFJ Nicos]]、[[card-issuers/credit-saison|Credit Saison]]、[[card-issuers/orico|Orient Corp]]、[[card-issuers/aeon-financial-service|AEON Financial Service]]、[[card-issuers/jaccs|JACCS]] により控えめな年間発行量（約 400–700 億円）で発行される — は、単一のトラスト構造がカード債権（ショッピング + リボ + キャッシング残高）の継続的に補充されるプールを裏付けとして、時間をかけて複数シリーズのシニア債を発行する**マスタートラスト・フレームワーク**を用いる。スタンドアロン・トラストとは異なり、マスタートラストはすべての発行残シリーズにわたってプール・ダイナミクスを共有する；各新規シリーズは同一のリボルビング・プールに対するインベステッド・アマウント・プロラタの請求権を割り当てられる。本構造は各シリーズについて**スケジュールされたコントロールド・アモチゼーション期間**（通常 6–12 か月）を特徴とするが、**期間延長**条項を伴い、プール・パフォーマンスが堅調で再投資が引き続き効率的である場合に、発行体がスケジュールされたアモチゼーション開始日を後ろ倒しにすることを可能にする — US スタイルのマスタートラスト（Citi、Capital One、Discover）から借用し、JSDA 開示慣行に適合させた日本固有の特徴である。**早期償還トリガー**（消費者ローン ABS と同様）は、累積チャージオフまたは 90 日以上の延滞が閾値を超えた場合、あるいは組成体のデフォルト事由が発生した場合に即時の元本返済へ切り替えることで投資家を保護する。ほとんどの国内案件では [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I]] により格付けされる；クロスボーダー案件には選択的に S&P／Moody's（稀）。

## Wiki route

本エントリは [[structured-finance/INDEX|structured-finance index]] の下に**リボルビング・カード・マスタートラスト運営メカニクス**ノードとして位置する。より広範な発行体ランドスケープとしての [[structured-finance/consumer-loan-abs-japan-card-issuer|consumer-loan / card-receivable ABS Japan]]、クローズドエンド・ローンとの対比（異なるプロダクト、類似の早期償還トリガー）としての [[structured-finance/japan-consumer-loan-abs-structure|Japan consumer-loan ABS structure]]、有担保プールのシーケンシャル・ペイとの対比としての [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]、および方法論レイヤーとしての [[structured-finance/jcr-ri-japan-securitization-rating-methodology-operating-playbook|JCR / R&I securitization rating methodology operating playbook]] と対比して読まれたい。カード発行体のコーポレート・コンテキスト：カードネットワークおよびマーチャント・アクワイアリングの経済性については [[payments/INDEX|payments domain]]。

## 1. The six repeat issuers — Japan card-receivable ABS landscape

| Issuer | Parent | Card brand portfolio | Annual ABS issuance (approx) |
|---|---|---|---|
| [[card-issuers/jcb|JCB]] | Independent (cross-shareholding with megabanks) | JCB-branded credit cards (domestic network + international) | JPY 100–200 bn |
| [[card-issuers/mufg-nicos|Mitsubishi UFJ Nicos]] | MUFG group | MUFG Card, DC Card, NICOS, UFJ Card brands | JPY 80–150 bn |
| [[card-issuers/credit-saison|Credit Saison]] | Mizuho group affiliate / partly Seibu / partly Mizuho | SAISON Card brands | JPY 100–200 bn |
| [[card-issuers/orico|Orient Corp]] | Mizuho-Itochu group | Orico Card brands | JPY 50–100 bn |
| [[card-issuers/aeon-financial-service|AEON Financial Service]] | AEON Group | AEON Card (retailer-affinity) | JPY 50–100 bn (limited public ABS — more bank-line funded) |
| [[card-issuers/jaccs|JACCS]] | MUFG group | JACCS Card | JPY 30–80 bn |

カード発行体の ABS 発行は、量で上位 3 社に集中している。[[card-issuers/sumitomo-mitsui-card|Sumitomo Mitsui Card]]（SMFG グループ）は歴史的に発行してきたが、SMFG の銀行ラインおよび親銀行の取り決めを通じてより多く資金調達している。銀行系列のカード発行体（NICOS、Saison、SMBC Card）は一般により安価な親銀行の資金調達にアクセスできるため、ABS は支配的な資金調達チャネルというよりは多くのツールの一つである — マスタートラスト（Citi、Capital One、Discover、JPM Chase）がコアの財務インフラである US カード債権 ABS とは異なる。

## 2. The master-trust framework — what it is

マスタートラストとは、時間をかけて**複数の債券シリーズを裏付ける単一のトラスト構造**である：

| Element | Master trust | Stand-alone trust (typical auto-loan ABS) |
|---|---|---|
| 債券シリーズ数 | 複数（しばしば一度に 5–15 が発行残）| 一つ |
| プール共有 | すべてのシリーズが同一の原資産リボルビング・プールに対する請求権を共有する | 各案件のプールは専用 |
| シリーズ発行ケイデンス | 頻繁（市場が開いているとき 3–9 か月ごと）| エピソード的（一回限りの取引）|
| プール補充 | 継続的；各シリーズの観点からはプールは「無限」| 有限サイズのクローズド・プール |
| インベステッド・アマウント配分 | 各シリーズはプール回収に対するインベステッド・アマウント・プロラタの請求権を保有する | 各案件は自身のプールの 100% を保有する |
| 劣後 | シリーズ固有の劣後トランシェ | 案件固有の劣後 |
| 投資家管理 | 単一の受託者、単一の格付けアクション・ユニバース | 案件ごとの受託者 |

運営上の便益：
- **発行の柔軟性** — 組成体は、毎回新しいトラストを設定することなく、条件が有利なときに市場に来ることができる
- **プール分散** — いずれかの単一シリーズの投資家は、小さく切り出された部分ではなく、プールの全サイズから便益を得る
- **コスト効率** — 受託者、口座銀行、リーガルのインフラ一式がすべてのシリーズに供される

運営上のリスク：
- **クロスシリーズの伝染** — プール・パフォーマンスが悪化した場合、（一案件だけでなく）すべての発行残シリーズが同時に影響を受ける
- **シリーズ配分の複雑性** — プール回収は各分配日に正しい比率で各シリーズへ配分されなければならない
- **投資家アナリティクス** — 投資家はプール・ダイナミクスとシリーズ固有の配分メカニズムの両方を理解しなければならない

## 3. Card-receivable pool composition

| Receivable type | Description | Typical balance per cardholder | Default characteristic |
|---|---|---|---|
| **Shopping (一括払い / 1-pay)** | Single-payment purchases; no interest charged to cardholder | JPY 10K–50K | Very low default (settled at next monthly cycle) |
| **Shopping installment (分割払い)** | 2-pay, 3-pay, 6-pay, 12-pay, 24-pay options | JPY 50K–500K | Low default (1.0–2.5% annual) |
| **Revolving (リボ払い)** | Cardholder pays fixed monthly amount; balance carries interest | JPY 50K–500K | Moderate default (3.0–6.0% — higher-risk borrower pool) |
| **Cash advance (キャッシング)** | Direct cash withdrawal up to card limit | JPY 20K–200K | Higher default (5.0–9.0%) |

プール構成は発行体により異なる — [[card-issuers/jcb|JCB]] のプールはショッピング・インストールメント（低デフォルト）に傾く一方、[[card-issuers/credit-saison|Credit Saison]] と [[card-issuers/orico|Orient Corp]] はより高いリボ／キャッシングのシェア（高デフォルトだが高利回り）を持つ。

**利息制限法上の金利上限**（貸付サイズにより 15–20%）はリボおよびキャッシングの構成要素に適用される；ショッピング・インストールメントは割賦販売法の下で異なる扱いを受ける。

## 4. The 期間延長 (term extension) mechanism

日本のカード債権マスタートラストの固有の特徴は、**スケジュールされたアモチゼーション日の期間延長**である：

| Phase | Standard timeline | With 期間延長 |
|---|---|---|
| リボルビング期間 | シリーズ発行から 24–36 か月 | 同じ |
| スケジュールされたコントロールド・アモチゼーション開始 | 事前定義日（例：発行から 36 か月）| 条件を満たせば 6–24 か月後ろ倒し可能 |
| コントロールド・アモチゼーション期間 | 6–12 か月のスケジュールされた元本返済 | 延長発動後も同じ |
| シリーズ総テナー | 30–48 か月 | 最大 70–80 か月 |

**期間延長の条件**：
- プール超過スプレッドが閾値（通常、年率 4.0–5.0%）を上回る
- 累積チャージオフが閾値（通常 < 2.5–4.0%）を下回る
- 90 日以上の延滞が閾値（通常 < 3.0%）を下回る
- リザーブがフル・ターゲットにある
- マスタートラスト全体で未解消のトリガー違反がない
- 投資家／格付け機関への通知

組成体が期間延長を望む理由：
- 市場条件が有利なときの安価な資金調達の継続
- 再投資機会が乏しいときにパーで元本返済することの回避
- 組成体のリファイナンス・カレンダーの平準化

期間延長に対する投資家の見方：
- クーポンが魅力的であれば利回りの継続
- WAL 延長は契約に組み込まれており、組成体の一方的なオプションではない（格付け機関は投資家保護的な条件を要求する）
- シリーズの投資家基盤は、デュレーション延長を許容できる主に日本の機関投資家 ALM ブックである

期間延長は概念的には **US マスタートラストのソフト・ブレット構造**に類似するが、ドキュメンテーションおよび投資家コミュニケーションの慣行は日本固有（JSDA 開示テンプレート）である。

## 5. The series-issuance mechanics

既存のマスタートラストから新規シリーズが発行されるとき：

| Step | Action |
|---|---|
| 1. 組成体が受託者に意図を通知 | 目標シリーズ・サイズ、テナー、構造を設定 |
| 2. 受託者がプール・キャパシティを検証 | プール・サイズが新規インベステッド・アマウント配分を支えることを確認 |
| 3. 格付け機関の事前エンゲージメント | JCR／R&I がシリーズ固有の劣後、トリガー、プール・パフォーマンスをレビュー |
| 4. シリーズ・トランシェを構造化 | シニア AAA + メザニン AA／A + エクイティ（シリーズ固有の劣後）|
| 5. 配分インベステッド・アマウントを計算 | 新規シリーズがプール回収に対するプロラタの請求権を取得 |
| 6. メガバンク証券部門経由でシリーズを販売 | [[securities-firms/mufg-securities|MUFG MS]]、[[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/mizuho-securities|Mizuho Securities]] |
| 7. シリーズが資金調達される；組成体へ現金 | 組成体が手取り金を受領；エクイティ・トランシェは保持 |
| 8. シリーズがリボルビング・フェーズに入る | プール回収のプロラタの受領を開始 |

この発行ケイデンスは、組成体が需要に合わせてシリーズをサイジングすることを可能にする — 例：JPY 50  億円のシニア + JPY 5  億円のメザニン + JPY 5  億円の保持エクイティ、次のシリーズは 6  か月後に続く。

## 6. Default trigger structure

二つのトリガー・セットが適用される：**プールレベル・トリガー**（マスタートラスト全体に影響）と**シリーズレベル・トリガー**（特定のシリーズのみに影響）。

### Pool-level triggers (master-trust-wide)

| Trigger | Threshold (illustrative) | Effect |
|---|---|---|
| 組成体破綻／格付け < BBB | 組成体固有の事由 | すべての発行残シリーズにわたる早期償還；バックアップ・サービサーが発動 |
| サービサーのデフォルト事由 | 運営上の失敗 | バックアップ・サービサーの発動；シリーズ支払いが遅延し得る |
| トラストレベルのデフォルト事由 | 例：受託者の支払不能 | 受託者の交代；シリーズ支払いは継続 |

### Series-level triggers

| Trigger | Threshold | Effect |
|---|---|---|
| シリーズ固有の累積チャージオフ | オリジナル・シリーズ・インベステッド・アマウントの > 4–6% | シリーズが早期償還に入る |
| シリーズ固有の超過スプレッド圧縮 | 3 か月平均 < 年率 1.5–2.5% | シリーズが早期償還に入る |
| シリーズ固有のリザーブがフロアを下回る | リザーブが必要フロアを下回って取り崩される | シリーズが早期償還に入る |

プールレベル・トリガーは存続にかかわる深刻なものである（すべてのシリーズがアモチゼーションする）；シリーズレベル・トリガーは一シリーズに損害を封じ込める。このアーキテクチャはマスタートラストの**リスク分散の特徴**である — 異なるシリーズが同時に異なる早期償還ステージにあり得る。

## 7. Credit enhancement and waterfall

シリーズ固有の劣後レイヤー：

| Tranche | Typical sizing | Buyer |
|---|---|---|
| シニア AAA | シリーズの 80–88% | 生保、メガバンク ALM、アセットマネージャー |
| メザニン AA／A | 5–10% | スペシャリティ債券 |
| 劣後 BBB | 2–5% | スペシャリティ・クレジット |
| エクイティ／残余 | 5–8% | 組成体の保持 |

クロージング時のシリーズ固有リザーブ：シリーズ・インベステッド・アマウントの 1.0–2.0%。

各分配日のウォーターフォール：標準的なインタレスト・プライオリティ（フィー → シニア利息 → メザニン利息 → リザーブ・トップアップ → エクイティ）、次いで元本配分（リボルビング中は元本はプールへ再循環し、アモチゼーション中は元本がシリーズ・シニア、次いでメザニン、次いでエクイティへ支払われる）。

## 8. Rating-agency methodology — vintage curves and master-trust-specific factors

| Methodology element | JCR / R&I approach |
|---|---|
| ビンテージ・カーブ | 組成月からのコホート別デフォルト・トラッキング |
| マスタートラスト集計ストレス | 特定シリーズだけでなくマスタートラスト全体にストレスを適用 — すべてのシリーズがプール・リスクを共有するため重要 |
| シリーズ配分ストレス | 配分メカニズムがストレス・シナリオを処理することを検証 |
| 期間延長ストレス | 条件付き支払い延長シナリオをストレス |
| 補充品質ストレス | 組成体の継続的な組成能力をストレス |
| 組成体クレジット・リンケージ | 組成体格付けはバックアップ・サービサー要件に影響する；シニア格付けを直接キャップしないがトリガー較正に情報を与える |

方法論の詳細は JCR／R&I の基準ペーパーに公的に文書化されている — [[structured-finance/jcr-ri-japan-securitization-rating-methodology-operating-playbook|operating playbook]] 参照。

## 9. Counterpoints

- **「マスタートラストは複雑すぎる」** — 擁護者は反復発行体にとってのマスタートラストの効率性を指摘する；批判者は投資家がクロスシリーズの伝染リスクを常に理解しているわけではないと主張する
- **「期間延長は組成体にとって無料のオプションである」** — プール・パフォーマンスを条件とするが、条件が満たされれば組成体に便益をもたらす；その条件付き性こそが真の保護であると論じられる
- **「日本のカード債権 ABS は小さすぎる」** — 年間発行量約 JPY 400–700  億円に対し、オートローン ABS は約 JPY 1.5–2  兆円であり、カード発行体がメガバンク親会社からのより安価な銀行ライン資金調達にアクセスできるため小さい
- **「外国スタイルのマスタートラストは日本に適していない」** — 反論：本構造は 2000 年代初頭から使用されており、複数のサイクルを通じてパフォームしてきた；規制環境はそれを支えている
- **「カードホルダーレベルのデータは断片的である」** — プール・データは集計レベルで報告される；一部の投資家はこれを US マスタートラストの公開報告よりも粒度が低いと感じる
- **「シニア AAA がチャージオフしたことは一度もない — 劣後は過剰設計である」** — 擁護者はその深さこそがチャージオフが発生していない理由であると論じる；バッファーは機能した

## 10. Open questions

- デジタル専業／フィンテックのカード発行体（Kyash、Revolut Japan、Wise）がマスタートラスト ABS を発行するためのプール規模を構築するか
- プロダクトが成熟するにつれ、BNPL 債権がマスタートラスト・プールに統合されるか
- キャッシュレス決済政策の推進が全体のカード債権プール成長に与える影響（QR コードがシェアを取れば、カード支出の減少に対して）
- [[card-issuers/aeon-financial-service|AEON Financial Service]] が、そのリテーラー・アフィニティ・カード・ポートフォリオの成熟につれて ABS 発行を拡大するか
- クロスボーダーのカード債権発行を牽引するうえでの [[card-issuers/jcb|JCB]] の国際展開の役割

## Related

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
- [[card-issuers/jcb|JCB]] · [[card-issuers/mufg-nicos|MUFG Nicos]] · [[card-issuers/credit-saison|Credit Saison]]
- [[card-issuers/orico|Orient Corp]] · [[card-issuers/aeon-financial-service|AEON Financial Service]] · [[card-issuers/jaccs|JACCS]]
- [[payment-firms/bnpl-landscape|BNPL landscape]]
- [[payments/INDEX|payments domain]]

## Sources

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
> confidence: **likely**。マスタートラスト・フレームワーク、期間延長メカニズム、シリーズ発行メカニクス、およびトリガー・アーキテクチャは JCR／R&I の基準ペーパーおよび JSDA 開示慣行に公的に文書化されている。具体的な発行量、劣後レンジ、トリガー閾値は案件および組成体により異なる。シリーズ配分の計算は標準的だが、実装はマスタートラストにより異なる。
