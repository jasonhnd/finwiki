---
source: structured-finance/repackaging-note-japan
source_hash: 862d8e011c740306
lang: ja
status: machine
fidelity: ok
title: "日本のリパッケージ債（リパッケージ債）— SPV ラップ型 債券／ローン リパッケージ"
translated_at: 2026-06-19T12:43:19.955Z
---

# 日本のリパッケージ債（リパッケージ債）— SPV ラップ型 債券／ローン リパッケージ

## TL;DR

**リパッケージ債（リパッケージ債、"リパック"）** は、[[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV]] が原資産となる債務資産（債券、ローン、債券のバスケット）を購入し、デリバティブのオーバーレイ（通貨スワップ、金利スワップ、時にクレジット・デフォルト・スワップ）を組成し、通貨、クーポン構造、満期、または信用プロファイルの異なる組み合わせを持つ新たなノートを投資家向けに再発行する、ストラクチャード・クレジット商品である。日本市場には、**機関投資家向けリパック**（典型的には大口で、メガバンク証券部門や外資系投資銀行が日本の生命保険会社、地方銀行、[[regional-banks/japan-post-bank|JPost]]、年金基金、アセットマネージャーに販売し、例えば米ドル建ての社債を円建ての固定金利ノートに転換する）と、**リテール向けリパック**（小口で、[[securities-firms/nomura-securities|Nomura]]、[[securities-firms/daiwa-securities|Daiwa]]、地場証券会社のリテール証券ネットワークを通じて販売され、典型的には FX または金利のトリガーに連動する高クーポンのノートで、しばしば新興国のソブリン債を原資産とする）の両方がある。ディーラーのフランチャイズは、**日本のメガバンク証券子会社**（[[securities-firms/mufg-securities|MUFG MS]]、[[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/mizuho-securities|Mizuho Securities]]）と、日本でのリパック・フランチャイズの歴史的なオリジネーターであった **外資系投資銀行**（ゴールドマン、モルガン・スタンレー、J.P. モルガン、シティ、BNP パリバ、その他）との間で分かれている。

## Wiki route

このエントリは [[structured-finance/INDEX|structured-finance index]] の下に **デリバティブ・オーバーレイ型のストラクチャード商品** ノードとして位置する。法的ストラクチャーについては [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]] と、格付パススルーの動態については [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]] と、クレジット・デリバティブ・ラップ型のバリアントについては [[derivatives/japan-cds-market-overview|Japan CDS market overview]] と併せて読むこと。システムフレーム：より広いクレジット市場の文脈については [[finance/INDEX|finance index]]。関連：[[structured-finance/japan-abs-market-overview|Japan ABS market overview]]（リパックは構造的に別個の商品だが、類似の SPV ／格付インフラを用いる）。

## 1. リパック — 基本的な仕組み

```
Underlying asset
(e.g., USD investment-grade
 corporate bond bought
 from secondary market)
        |
        v
+---------------------------------+
|      Repackaging SPV            |
|       (TK / GK or cell of       |
|        master-trust)            |
|  - Buys underlying bond         |
|  - Enters cross-currency swap   |
|     (pays USD coupon, receives  |
|     JPY coupon)                 |
|  - Enters interest-rate swap   |
|     (optional, e.g., fixed↔FRN) |
|  - Issues new notes in JPY     |
+----+-----------+----------+----+
     |           |          |
   Coupon /    Swap MTM    Notes
   principal    flows       proceeds
     |           |          |
     v           v          v
+----+----+  +---+-----+ +----+----+
|Investor|   |Swap    | |Investor|
|notes   |   |counter-| |        |
|        |   |party   | |        |
+--------+   +--------+ +--------+
```

主な特徴：
- **原資産** は典型的には、買付ディーラーの在庫またはオープンマーケットから引き出される
- **デリバティブ・オーバーレイ** がキャッシュフロー・プロファイルを投資家の需要に合わせて変換する（通貨、クーポンの形状、期限前償還可能性）
- **ノート投資家** は、原資産の発行体の信用リスクを持つ、円建て（または他のターゲット通貨建て）のノートを見る
- **スワップ・カウンターパーティ** は典型的にはディーラーまたはその関連会社であり、ヘッジのインフラを提供する
- ノートの **格付** は典型的には原資産債券の格付をパススルーする（スワップ・カウンターパーティ・リスクの考慮事項に従う）

## 2. 機関投資家向けリパック vs リテール向けリパック

| Dimension | Institutional repack | Retail repack |
|---|---|---|
| チケットサイズ | 数十億〜数百億円 | 投資家一人あたり 1百万〜数億円 |
| 原資産 | 大型 IG 社債、時にソブリン | しばしば新興国ソブリン債、時に株式連動ストラクチャード |
| 投資家 | 生命保険会社、地方銀行、JPost、年金、アセットマネージャー | 証券会社経由の富裕層リテール、地場証券の顧客基盤 |
| クーポン | しばしば固定または単純な FRN | しばしば FX ／金利トリガー付きの高クーポン |
| 販売 | ディーラーによる機関投資家への直接販売 | 証券会社ネットワーク |
| ディーラー | メガバンク証券 + 外資系 IB | メガバンク + 野村／大和 + 地場証券 |
| 開示 | 機関投資家向け開示基準 | リテール開示基準（より規範的）|
| 投資家へのリスク | 原資産の信用、スワップ・カウンターパーティ、元本保護 | FX ／金利トリガー・リスクが加わり、時に元本リスク |

日本のリテール向けリパック市場は特に大きく、歴史的に新興国ソブリン・クレジット（トルコ、南アフリカ、ブラジル、メキシコのソブリン債を円建てノートにリパッケージしたもの）の意味ある販売チャネルであった。

## 3. ユースケース — 何がリパッケージされるか

| Use case | Example structure | Investor demand driver |
|---|---|---|
| **米ドル債 → 円ノート** | 米ドル IG 社債を購入し、クロスカレンシー・スワップで円に変換し、円ノートを発行 | 円調達の投資家が FX リスクなしでエクスポージャーを求める |
| **固定 → 変動** | 固定クーポン債を購入し、IRS で変動に変換し、FRN を発行 | 投資家が原資産の信用に対する FRN エクスポージャーを求める |
| **長期 → 短期** | 10年債を購入し、ロールオーバー・スワップ付きまたはコーラブルの 3年ノートを発行 | 投資家がより短い年限のエクスポージャーを求める |
| **単一発行体 → バスケット** | 複数の債券を SPV にプールし、トランシェ分割したノートを発行 | 分散／利回り向上 |
| **CDS ラップ型** | 参照債券を購入し、CDS を重ね、クレジット・プロテクション付きノートを発行 | クレジット・プロテクションのストラクチャリング |
| **新興国ソブリン リテール** | 新興国ソブリン債を購入し、FX スワップを行い、高クーポンの円ノートを発行（しばしば FX トリガー期限前償還機能付き）| 利回りとソブリン信用エクスポージャーを求めるリテール需要 |

## 4. ディーラー・フランチャイズ — メガバンク証券 vs 外資系 IB

**外資系投資銀行**（ゴールドマン、モルガン・スタンレー、J.P. モルガン、シティ、BNP パリバ、ソシエテ・ジェネラル、その他）は、日本でのリパック・フランチャイズの歴史的なオリジネーターであった——彼らが、商品を実現可能にしたストラクチャリングの専門知識、デリバティブのインフラ、クロスカレンシー・スワップのキャパシティをもたらした。

**日本のメガバンク証券子会社** は、時間をかけてリパック・ビジネスを構築してきた：
- [[securities-firms/mufg-securities|MUFG Morgan Stanley Securities]]（合弁）
- [[securities-firms/smbc-nikko|SMBC Nikko Securities]]
- [[securities-firms/mizuho-securities|Mizuho Securities]]

今日の分担はおおよそ次のとおり：
- 機関投資家向けリパック：外資系 IB がクロスカレンシーの複雑な案件で強く；日本のメガバンク証券がよりシンプルな機関投資家向けリパッケージと関係性主導のプレースメントで強い
- リテール向けリパック：日本の証券会社（[[securities-firms/nomura-securities|Nomura]]、[[securities-firms/daiwa-securities|Daiwa]]、地場証券）が販売を支配

## 5. SPV ／法的ストラクチャー

日本で販売されるリパックの大半は、次のいずれかを用いる：
- 国内法の SPV のための **TK ／ GK ストラクチャー**（[[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]）
- 私募により日本の投資家基盤にノートを発行する **ケイマン／ジャージーの SPV**
- 1 つの SPV が異なる原資産に対して複数シリーズのノートを発行する **マルチ発行マスタートラスト** ストラクチャー

ストラクチャリングの選択は、税効率、投資家基盤、ディーラーの選好に依存する。

## 6. 格付の取り扱い

格付機関（[[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I]] およびグローバルな機関）は、典型的にはリパックを次のように格付する：
- 原資産債券の **パススルー格付**、**スワップ・カウンターパーティ・リスクを調整した上で**
- スワップ・カウンターパーティが原資産と同等以上に格付されている場合、リパック・ノートは典型的には原資産の格付を得る
- スワップ・カウンターパーティがより低く格付されている場合、リパック・ノートは両者のうち低い方で格付されることがある

これが、リパック発行にとってディーラー自身の信用格付が重要となる理由である——より高格付のディーラーは、原資産債券の格付を保持するリパックを提供できる。

## 7. 2008 年後の進化

2008 年の危機はいくつかのリパック・リスクを露呈させた：
- **スワップ・カウンターパーティの破綻** — リーマンの破綻は、リーマンがスワップ・カウンターパーティであったリパック・ノートの紛争を引き起こした
- **担保紛争** — 一部の SPV 担保アレンジメントが訴訟になった
- **投資家損失** — 新興国エクスポージャーを持つ一部のリテール向けリパックが重大な損失を被った

2008 年後の改革：
- スワップ・カウンターパーティに対する標準的な CSA（担保サポート附属書）
- より強固な SPV レベルの担保分別
- より厳格な開示基準
- リテール向けリパック販売慣行に対する FSA の監視

リパック市場は 2008 年後も続いたが、より保守的なストラクチャリングとより明確な規制の境界を伴うものとなった。

## 8. 直接の債券投資との比較

| Dimension | Direct bond investment | Repackaged bond |
|---|---|---|
| 発行体信用 | あり | あり（パススルー）|
| 通貨 | 発行どおり | スワップにより再構成 |
| クーポン | 発行どおり | スワップにより再構成 |
| スワップ・カウンターパーティ・リスク | なし | あり |
| プライシング | 市場クリアリング | ストラクチャード・スプレッドで発行 |
| 流動性 | 流通市場 | しばしばより限定的（私募）|
| 利回り | 原資産の YTM | 原資産の YTM からストラクチャリング・コストを差し引いたもの |

「ストラクチャリング・コスト」（ディーラー・マージン）は、直接購入に比べて投資家への利回りを減少させるが、カスタマイズの利便性がしばしばそのスプレッドを正当化する。

## 9. 反論

- **「リテール向けリパックは不適切販売されている」** — 批判者は、FX トリガー機能（いわゆる「ノックアウト」または「コーラブル」ストラクチャー）を持つリテール向けリパッケージが、組み込まれたオプション／トリガー・リスクを十分に理解していない投資家に不適切販売されていると長く主張してきた；FSA はガイダンスを出し、開示を厳格化した
- **「スワップ・カウンターパーティの集中」** — リパック・ノートの大半は、少数の大手ディーラーのスワップ・カウンターパーティに対する信用エクスポージャーを持つ；これがストラクチャード・クレジット市場におけるシステミックな集中を生む
- **「流動性は幻想」** — リパック・ノートは典型的にはオリジネートしたディーラーとのみ取引される；発行ディーラー以外の流通市場の流動性は限定的
- **「税務取り扱いの不確実性」** — TK ／ GK ストラクチャーはクロスボーダーの税務規則と相互作用し、時に投資家にとって歓迎されない驚きを生むことがある
- **「コスト後の利回りピックアップは小さい」** — 機関投資家にとって、リパック・プライシングに組み込まれたディーラー・マージンは、代替ストラクチャー（例えば直接購入に対するクロスカレンシー・ヘッジ）と比べて、わずかな利回りピックアップしか残さないことがある

## 10. 未解決の問い

- [[financial-regulators/boj|BOJ]] の金利正常化の下でのリテール向けリパック市場の規模 — 国内利回りの上昇が高クーポンのリテール・ストラクチャーへの需要を減らすかどうか
- ESG 連動リパック（例えばグリーンボンドを原資産として円にリパッケージしたもの）が意味あるシェアを獲得するかどうか
- 日本のリパックにおける、外資系 IB の市場シェアの進化のペース対 国内メガバンク証券部門
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I]] とグローバル機関の手法の乖離がリパック発行の採算に影響を与えるかどうか
- 新興国ソブリンのリテール向けリパックが、EM ストレスの期間の後に厳格化された FSA 規制に直面するかどうか

## Related

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[structured-finance/abcp-conduit-japan-megabank|ABCP conduit]]
- [[derivatives/japan-cds-market-overview|Japan CDS market overview]]
- [[finance/INDEX|finance index]]
- [[real-estate-finance/INDEX|real-estate-finance index]]
- [[megabanks/mufg|MUFG]] · [[megabanks/smfg|SMFG]] · [[megabanks/mizuho-fg|Mizuho FG]]
- [[regional-banks/japan-post-bank|Japan Post Bank]] · [[financial-regulators/japan-exchange-group|JPX]]

## Sources

- JSDA 債券市場統計 — https://www.jsda.or.jp/en/
- 三菱 UFJ モルガン・スタンレー証券 IR（親会社開示）
- SMBC 日興証券 IR（親会社開示）
- みずほ証券 IR（親会社開示）
- FSA ストラクチャード商品開示フレームワーク
- JCR ／ R&I のリパッケージ債に関する公開格付コメンタリー

---

> [!info] 校核状态
> confidence: **likely**. リパックの仕組み、ディーラー・フランチャイズの分担、2008 年後の進化は、業界コメンタリーおよび JSDA ／ FSA の開示で十分に文書化されている。具体的な発行量とトランシェのデータは、リパック固有のレベルでは公開集計されていない；上記の記述は方向性を示す表現を用いている。リテール不適切販売をめぐる議論は、公的な規制コメンタリーの問題である。
