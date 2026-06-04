---
source: insurance/japan-life-insurance-alm-overview
source_hash: c6e0016bcac74ab4
lang: ja
status: machine
fidelity: ok
title: "日本生命保険会社の ALM 概観"
translated_at: 2026-06-02T14:01:20.964Z
---

# 日本生命保険会社の ALM 概観

## ウィキ上の位置づけ

この項目は [[insurance/INDEX|insurance index]] 配下に位置づけ、日本の生命保険会社における資産負債管理（ALM）のルーティングページである。エンティティは [[insurance/japan-life-insurance-big-four|Japan life big four]]、株式会社形態のバリエーションは [[insurance/sony-life-group-life-operating-model|Sony Life Lifeplanner / group-life operating model]]、規制上の枠組みは [[insurance/economic-value-based-solvency|economic-value-based solvency]]、会社別比率の読み方は [[insurance/esr-economic-value-solvency|ESR]]、法域横断の比較可能性は [[insurance/global-solvency-framework-comparison-matrix|global solvency framework matrix]]、ALM が最終的に支える契約者配当と株主配当のトレードオフは [[insurance/mutual-vs-stock-life-insurer|mutual vs stock life insurer]] とあわせて読む。

ESR 感応度のドライバーは、[[life-insurers/nippon-life|Nippon Life]]、[[life-insurers/dai-ichi-life|Dai-ichi Life]]、[[life-insurers/sumitomo-life|Sumitomo Life]]、[[life-insurers/meiji-yasuda|Meiji Yasuda]]、[[life-insurers/sony-life|Sony Life]] のバランスシート分析にも戻ってくる。外資系関連会社の ALM 上のニュアンスは [[insurance/foreign-life-affiliate-japan-positioning|foreign-life affiliates positioning]] に収録する。

## 要約

日本の生命保険会社は、世界の保険業界の中でも特にデュレーション・ミスマッチの大きいバランスシートを運営している。負債は終身保険、養老保険、年金商品など、数十年単位の支払期間を持つ長期の円建て約束である。資産デュレーションは歴史的に負債デュレーションを下回ってきた。JGB カーブが意味のある利回りで十分遠い年限まで伸びていないこと、また 2013  以降の BoJ NIRP とイールドカーブ・コントロール政策によって、円金利がカーブの大半でゼロ近辺に圧縮されたことが背景である。

主要な ALM 対応は3つある。1つ目は、超長期 JGB（20Y、30Y、40Y）で円資産デュレーションを延ばし、絶対利回りの低さを受け入れること。2つ目は、主に USD 建て投資適格クレジットやソブリン債などの外債エクスポージャーをヘッジ付きまたはヘッジなしで保有し、ヘッジ付き部分ではクロスカレンシー・ベーシスコスト、ヘッジなし部分では FX 変動を受け入れること。3つ目は、[[insurance/economic-value-based-solvency|economic-value]] の資本制約の下で、ソブリン利回りの代替としてクレジット資産（外国 IG クレジット、プライベートデット、インフラデット）を使うことである。

ESR 感応度は、残存デュレーション・ミスマッチ（金利リスク）、ヘッジなし FX ポジション（通貨リスク）、株式保有簿（株式リスク）、外貨クレジット部分のクレジットスプレッド・エクスポージャーに大きく左右される。大手相互会社 [[life-insurers/sony-life|Sony Life]]社の ALM 委員会は、これらのドライバーを契約者配当または株主還元の制約とバランスさせる位置づけにある。

### デュレーション

1990年代後半以前に販売された終身保険・養老保険は、現在より JGB 利回りが数百ベーシスポイント高かった時期に設定された予定利率を持つ。こうしたレガシーの「逆ざや」ブックは、契約者が高保証の契約を合理的に解約しないため、数十年にわたりバランスシートに残る。

新契約では、低い保証、外貨建て保証、または投資リスクを契約者へ移転する変額商品構造が使われる。その結果、負債ブックは次の層に分かれる。

- 高い予定利率を持つロングテールのレガシーブロック。
- 中程度の保証を持つ中間ブロック。
- 低い円建て保証、外貨建て保証、または変動 / ユニットリンク型構造を持つ新契約ブロック。

典型的な日本の生命保険会社の負債デュレーションは、米国や欧州の生命保険ピアより実質的に長い。理由は次の通り。

- 保証付き貯蓄性商品と養老保険の保有契約比率が大きい。
- 死亡保障色の強い終身保険が若年層にも販売され、保険金支払いまで数十年続く。
- 年金・退職給付負債が数十年単位の支払期間を持つ。

### 予定利率と保証構造

保険業法と金融庁監督は、責任準備金計算に使う標準利率を、契約者への付与利率とは別に制約する。[[insurance/economic-value-based-solvency|economic-value-based solvency]] の下では、規制上の負債は長期年限に [[insurance/global-solvency-framework-comparison-matrix|Ultimate Forward Rate extrapolation]] を用いるリスクフリー・イールドカーブで割り引かれる。付与 / 保証利率と割引カーブの不一致は、負債の経済価値と ESR 比率を直接動かす。

### 円建て国債（JGB）

JGB は円デュレーション・マッチングの構造的なアンカーであり続ける。超長期 JGB（20Y、30Y、40Y）は、円建てスリーブで資産デュレーションを実質的に延ばせる唯一の年限である。トレードオフは次の通り。

- BoJ の NIRP / イールドカーブ・コントロール体制（2016 以降）を通じて利回りはゼロ近辺にあり、その後 BoJ の正常化に伴って徐々に上昇した。
- 超長期 JGB の保有は低いクーポンを固定する一方、金利ヘッジ価値を提供する。
- 時価評価感応度は大きく、50 bps のパラレルシフトでも、売買目的またはその他有価証券区分に意味のある資本変動を生む。

### ヘッジ付き外債

ヘッジ付き外債スリーブは、低い円金利環境にある日本の生命保険会社にとって最大の ALM レバーである。仕組みは次の通り。

- USD 建て投資適格クレジットまたはソブリン債を購入する。
- ローリング 3M の FX フォワードまたはクロスカレンシー・スワップで USD エクスポージャーを円に戻す。
- ネット利回り = USD 債券利回り − ヘッジコスト。

ヘッジコストは、USD と JPY の金利差にクロスカレンシー・ベーシスを加えたものに等しい。2017-2024 サイクルの多くの期間では USD-JPY 金利差が十分大きく、ヘッジコストが USD 債券利回りの上乗せ分の大半または全部を食い、さらにクロスカレンシー・ベーシスが追加の重荷になった。時期によっては、円換算のヘッジ付き USD 投資適格利回りが同等の JGB 利回りを下回り、保険会社は次の対応を取った。

- ヘッジ付き USD ポジションを短期化または解消する。
- FX リスクを受け入れて、ヘッジなし外債ポジションへ移行する。
- ヘッジコストを吸収できる十分なスプレッドを払う高利回りクレジットやプライベートデットへ軸足を移す。

### ヘッジなし外債

ヘッジなし外債スリーブは、戦略的な FX エクスポージャーとして運営される。ロジックは次の通り。

- 金融政策の乖離（2022-2024）を通じた JPY に対する構造的な USD 高が、トータルリターン面でヘッジなし USD 債券を魅力的にした。
- 外貨建て生命保険商品（日本のマス富裕層向けに販売される USD 建て終身保険）は、FX 資産 / FX 負債のマッチングペアを作る。
- ヘッジなしポジションはヘッジコストを取り除くが、P&L ボラティリティと ESR の FX 感応度を導入する。

ヘッジなし比率は、ALM 委員会が監督し、[[insurance/economic-value-based-solvency|economic-value solvency]] の通貨リスク資本賦課に制約される戦略的資産配分の判断である。

### クロスカレンシー・ベーシス（CCS ベーシス）

クロスカレンシー・ベーシスは、円担保で USD を借りる際に金利差の上に乗る追加コストである。USD 調達ストレス時（年末のバランスシート縮小、ドル調達不足イベント）には拡大し、平常時には縮小する。円ベースの保険会社にとって、ベーシス拡大は USD 債券ポジションのヘッジコストを直接増やす。

保険会社は次の方法でベーシスを管理する。

- ヘッジ年限（1M、3M、6M、1Y）とロール時点を分散する。
- 短期 FX フォワードではなくクロスカレンシー・スワップを使う。
- ベーシスの挙動が異なる他の準備通貨（EUR、AUD）へスワップする。
- ベーシスが不利な場合、部分的なヘッジなしポジションを受け入れる。

### 2013 NIRP 後のクレジット資産代替

BoJ が 2013-2016, にマイナス金利 / イールドカーブ・コントロール体制へ入った後、日本の生命保険会社は円ソブリンカーブ上で意味のある利回りを得られなくなった。構造的な対応は次の通り。

- JGB 配分を、利回り目的ではなくデュレーション・マッチング目的の超長期年限へ寄せる。
- 外国投資適格クレジット（USD IG 社債、USD エージェンシー MBS）へ代替する。
- プライベートクレジット、インフラデット、不動産デット、私募債へ拡大する。
- リスクバジェットの範囲内でオルタナティブ投資（プライベートエクイティ、不動産エクイティ、ヘッジファンド）を拡大する。
- ESR の株式リスク賦課を前提に、国内外の株式保有を拡大する。

このクレジット代替シフトは [[insurance/economic-value-based-solvency|economic-value solvency]] の信用リスク資本賦課を増やし、外貨クレジットの非流動性プレミアムへの集中を生む。これは 1990年代の低金利体制以降、日本の生命保険 ALM における最大の構造変化である。

### 国内株式

日本の生命保険会社は、銀行・事業会社の取引先との政策保有株を歴史的に相当量保有してきた。政策保有株の縮減は複数年のプログラムだが、残存する株式ブックはなお意味のある ESR 株式リスク・エクスポージャーである。上場保険会社ピア（特に持株会社レベルの [[life-insurers/dai-ichi-life|Dai-ichi Life]] と損保の [[insurance/japan-nonlife-big-three|big-three]]）は、明示的な縮減スケジュールを開示している。

## ALM 委員会の構造

典型的な日本の生命保険会社の ALM 委員会は、次のメンバーで構成される。

- 最高投資責任者と投資部門長（資産側）。
- チーフアクチュアリーと商品開発部門長（負債側）。
- 最高リスク責任者 / リスク管理部門（資本・リスクバジェット側）。
- 財務 / トレジャリー（流動性、会計、税務）。
- 場合により ALM 事務局またはミドルオフィス機能。

委員会の権限には通常、次が含まれる。

- 戦略的資産配分のレビュー（年次 / 半期）。
- 戦術的資産配分のレビュー（月次 / 四半期）。
- デュレーションギャップのレビューとリバランス判断。
- 外債スリーブの FX ヘッジ比率判断。
- クレジットスプレッド、株式、オルタナティブのサブ配分レビュー。
- FSA / [[insurance/economic-value-based-solvency|economic-value solvency]] シナリオに対するストレステストレビュー。
- ORSA 型のリスク・ソルベンシー自己評価。

判断は投資部門の執行と、取締役会レベルの資本・契約者配当 / 株主還元の判断に反映される。

## ESR 感応度

[[insurance/economic-value-based-solvency|economic-value solvency]] 制度の下で、ESR 比率は次に大きく感応する。

| リスクドライバー | メカニズム | 典型的な開示 |
|---|---|---|
| 金利（円） | 残存する負債・資産デュレーションギャップ。金利低下でギャップが拡大し、金利上昇で縮小する（負のギャップを持つ保険会社の場合） | 円金利のパラレルシフトに対する感応度表 |
| 金利（USD / 外貨） | 外債保有と対応する外貨負債 | 外貨金利シフトに対する感応度表 |
| FX レート | ヘッジなし外貨資産スリーブ、外貨建て商品のマッチング | USD-JPY（および EUR-JPY、AUD-JPY）に対する感応度表 |
| 株式 | 政策保有株を含む国内外株式保有 | 株価指数変動に対する感応度表 |
| クレジットスプレッド | 外国 IG クレジット、プライベートデット、インフラデット | クレジットスプレッド拡大に対する感応度表 |
| 不動産 | 直接保有不動産、REIT、不動産デット | 開示される場合の感応度表 |

感応度の形は、各保険会社固有のデュレーションギャップ、ヘッジ比率、クレジットスリーブ規模、株式保有に依存する。[[insurance/esr-economic-value-solvency|ESR]] 開示が主要な公開ソースである。

## リスクバジェットとストレステストのプロセス

日本の生命保険会社は、リスク要因ごとに経済資本を配分するリスクバジェットの枠組みの中で ALM を運営する。

| リスクバジェット配分 | 典型例 |
|---|---|
| 円金利リスク | デュレーションギャップに合わせた超長期 JGB 配分 |
| 外国金利リスク | ヘッジ付き USD 投資適格クレジットスリーブ |
| FX リスク | 戦略的なヘッジなし外債と外貨建て負債のマッチング |
| 株式リスク | 縮減中の政策保有株を含む国内外株式保有 |
| クレジットスプレッドリスク | 外国 IG クレジット、プライベートデット、インフラデット |
| 流動性リスク | ストレス時の現金、短期 JGB、レポ能力 |
| オペレーショナルリスク | [[insurance/economic-value-based-solvency|ESR]] のオペレーショナルリスク・モジュールに基づく資本配分 |

ストレステストは、FSA シナリオ（金利パラレルシフト、株式市場下落、FX ショック、クレジットスプレッド拡大）および保険会社内部シナリオ（複合ショック、過去イベントの再現、仮想的なレジーム変化）に対して実施される。結果は ORSA 開示、取締役会レベルのリスク報告、資本計画判断に反映される。

## 相互会社と株式会社ガバナンスにおける開示の相互作用

ALM 結果をステークホルダー向けにどう翻訳するかは、法的形態によって大きく異なる。

| 形態 | ALM 開示フロー |
|---|---|
| 相互会社（日本、明治安田、住友） | ALM 結果は契約者配当（契約者配当）の余力に反映される。剰余分配は相互会社の契約者代表手続により管理される。 |
| 上場株式会社保険会社（[[life-insurers/dai-ichi-life|Dai-ichi Life Holdings]]） | ALM 結果は株主配当 / 自社株買い余力、ROE / 資本コストの枠組み、株式市場評価に反映される。 |
| 非金融親会社の株式会社子会社（[[life-insurers/sony-life|Sony Life]]、[[megabanks/sony-fg|Sony FG]] 傘下） | ALM 結果は親会社へのグループ内配当の上納と、最終親会社レベルでの間接的な株式市場規律に反映される。 |

[[insurance/mutual-vs-stock-life-insurer|mutual vs stock comparison]] は重要な文脈である。同一の ALM ポジショニングでも、法的形態に応じてステークホルダーへの帰結が構造的に異なるためである。

## 大手4社の ALM 対比

| 保険会社 | ALM の性格 |
|---|---|
| [[life-insurers/nippon-life|Nippon Life]] | 最大のバランスシート、幅広い ALM 委員会、広範な外貨資産分散、縮減開示の対象となる相当量の国内株式保有 |
| [[life-insurers/dai-ichi-life|Dai-ichi Life]] | 上場持株会社としての資本規律、明示的な ESR 目標レンジ、海外保険・資産運用の隣接事業、明確な感応度開示 |
| [[life-insurers/meiji-yasuda|Meiji Yasuda]] | 相互会社ガバナンス、長期デュレーションの国内保障ブック、関係性重視の法人チャネルが負債プロファイルへ与える影響 |
| [[life-insurers/sumitomo-life|Sumitomo Life]] | 相互会社ガバナンス、商品改革とウェルネス連動販売が新しい負債コホートに反映、海外資産投資ポートフォリオ |

[[life-insurers/sony-life|Sony Life]] の ALM（[[insurance/sony-life-group-life-operating-model|Lifeplanner / group-life operating model]] 参照）は、大手4社に隣接しつつ、株式会社形態、外資系テック親会社の上乗せ、Lifeplanner チャネルで販売される意味のある外貨建て商品ミックスを持つ。

## 保険会社開示を読む実務順序

日本の生命保険会社の年次報告書 / 統合報告書を ALM 目的で読む場合、最も効率的な順序は次の通り。

| ステップ | 読む箇所 | 抽出する内容 |
|---|---|---|
| 1  | バランスシート要約 | 資産構成のカテゴリ別内訳、負債構成の商品コホート別内訳 |
| 2  | 資産ポートフォリオ内訳 | JGB / 外債 / 株式 / クレジット / オルタナティブの比率、ヘッジ付き・ヘッジなし外貨スリーブ、デュレーション開示 |
| 3  | 負債構成 | 商品コホート、予定利率分布、外貨エクスポージャー |
| 4  | ALM / デュレーションギャップ開示 | 資産デュレーション、負債デュレーション、残存ギャップ、感応度表 |
| 5  | ESR / ソルベンシーマージン | 見出し比率、金利 / FX / 株式 / クレジット / 巨大災害ショックへの感応度 |
| 6  | 投資戦略ナラティブ | 戦略的資産配分の見通し、計画されたシフト、ヘッジ比率ガイダンス |
| 7  | 資本管理ナラティブ | 配当方針（相互会社: 契約者配当、上場会社: 株主配当、子会社: グループ内上納） |
| 8  | リスク管理ガバナンス | ALM 委員会構造、ORSA 開示、ストレステスト結果 |

これらのセクションを相互参照することで、単一セクションだけを読むよりも全体像を把握しやすくなる。

## 関連

- [[insurance/INDEX]]
- [[insurance/japan-life-insurance-big-four]]
- [[insurance/sony-life-group-life-operating-model]]
- [[insurance/economic-value-based-solvency]]
- [[insurance/esr-economic-value-solvency]]
- [[insurance/global-solvency-framework-comparison-matrix]]
- [[insurance/mutual-vs-stock-life-insurer]]
- [[insurance/internet-life-insurance-business-model]]
- [[insurance/foreign-life-affiliate-japan-positioning]]
- [[insurance/japan-iaig-ics-mapping]]
- [[life-insurers/nippon-life]]
- [[life-insurers/dai-ichi-life]]
- [[life-insurers/sumitomo-life]]
- [[life-insurers/meiji-yasuda]]
- [[life-insurers/sony-life]]
- [[megabanks/sony-fg]]
- [[financial-licenses/insurance-license-and-solvency]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[INDEX|FinWiki index]]

## 出典

- FSA: 経済価値ベースのソルベンシー規制等について（経済価値ベースのソルベンシー制度ハブ）。
- Bank of Japan: 金融政策声明および統計（JGB 利回り、FX、バランスシート数値）。
- Ministry of Finance Japan: JGB 入札および残高統計。
- Life Insurance Association of Japan: 業界集計および会員会社開示。
- IAIS: Insurance Capital Standard 公表資料。
- Nippon Life、Dai-ichi Life Holdings、Meiji Yasuda、Sumitomo Life、Sony Life: ALM および ESR 感応度開示に関する統合報告書・ディスクロージャー誌。
