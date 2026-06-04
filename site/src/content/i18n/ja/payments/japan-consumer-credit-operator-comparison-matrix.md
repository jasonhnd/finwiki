---
source: payments/japan-consumer-credit-operator-comparison-matrix
source_hash: c993d4c4f5ab8842
lang: ja
status: machine
fidelity: ok
title: "日本の消費者信用事業者比較マトリクス"
translated_at: 2026-06-02T16:33:58.470Z
---
# 日本の消費者信用事業者比較マトリクス

## 要約

日本の「消費者信用」は一つの産業ではない。店頭では似て見えても、少なくとも **九つの事業者カテゴリ**に分かれ、それぞれライセンス、監督当局、貸付上限、上限金利、消費者保護制度が異なる。カードローン、信販、消費者金融、BNPL、オートキャプティブ、住宅ローン、教育ローン、マイクロクレジット、PSP 内蔵型信用を一つの箱に平坦化すると、合併圧力、規制エクスポージャー、ABS パイプライン、銀行隣接性を読み誤る。このページは、会社レベルの分析に入る前に、事業者が**実際にはどの消費者信用カテゴリに属するか**を確認するために、[[payments/INDEX|payments index]] の他ページが参照する横断比較面である。

## ウィキ上の位置づけ

この項目は、カテゴリ横断の消費者信用リファレンスとして [[payments/INDEX|payments index]] 配下に置く。BNPL / 信販ラインは [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]]、カード側の役割分担は [[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]]、本項目が意図的に補完するスキーム横断比較は [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]、METI 登録簿の行レベル情報源は [[payments/credit-purchase-card-operators-japan-index|credit-purchase / card operator registry]]、規制カテゴリ対応は [[financial-licenses/payment-license-stack|Japan payment license stack]]、住宅ローン隣接の政策金融側は [[policy-finance/japan-housing-finance-agency|Japan Housing Finance Agency]] と合わせて読む。例示に用いるエンティティアンカーは [[consumer-finance/acom|ACOM]]、[[consumer-finance/aiful|AIFUL]]、[[consumer-finance/smbc-consumer-finance|SMBC Consumer Finance]]、[[card-issuers/aplus|APLUS]]、[[card-issuers/jaccs|JACCS]]、[[card-issuers/orico|Orico]]。

## 九つの事業者カテゴリ

FinWiki が従来型の三分類 (「カード / 消費者金融 / 信販」) ではなく九分類を維持する理由は、BNPL、オートキャプティブ、住宅ローン隣接、教育ローン、マイクロクレジット、PSP 内蔵型信用が、消費者から見える商品としては単一の「クレジット」体験に見える場合でも、**ライセンス経路、監督当局、消費者保護制度が異なる**ためである。

| # | カテゴリ | 日本語 | 主な根拠法 | 主な監督当局 |
|---|---|---|---|---|
| 1 | カード発行会社 | クレジットカード会社 / 包括信用購入あっせん業者 | 割賦販売法 | METI (経産省) |
| 2 | 消費者金融 / 商工ローン | 消費者金融 / 貸金業者 | 貸金業法 | FSA (金融庁) |
| 3 | 割賦信用 / 信販 | 信販会社 / 個別信用購入あっせん業者 | 割賦販売法 | METI (経産省) |
| 4 | BNPL 専業 | BNPL / 後払い | 割賦販売法 (選択的、免除閾値あり) | 主に METI、ウォレット / 資金移動と重なる場合は FSA |
| 5 | オートファイナンス / オートキャプティブ | 自動車ローン / オートクレジット | 割賦販売法 (個別 / 包括) + 無担保部分は貸金業法 | 主に METI、貸金業部分は FSA |
| 6 | 住宅ローン隣接 (JHF ルート) | 住宅ローン直接型 / フラット 35 | 住宅金融支援機構法 + 銀行法 | MLIT (国交省) + MOF + 銀行側 FSA |
| 7 | 教育ローン | 教育ローン | 銀行法 (民間) + JFC 法 (公的) | FSA (民間) + MOF (公的・JFC) |
| 8 | マイクロクレジット | マイクロクレジット | 多くは貸金業法、または社会金融ルート | 貸金業の場合は FSA、一部の社会的信用チャネルは MHLW |
| 9 | PSP 隣接信用 (EC 埋込型信用) | PSP 内蔵後払い / EC 埋込型クレジット | 割賦販売法 + ウォレット連動時は資金移動 / 前払 | METI + FSA (境界事例) |

各行は独立したライセンススタックである。複数を保有する事業者は、ただちに持株会社というわけではない。多くの場合、複数ライセンスを持つ販売金融 / 消費者信用事業者である (例: [[card-issuers/orico|Orico]] は包括信用購入あっせん、個別信用購入あっせん、貸金業を同時に保有。[[consumer-finance/aiful|AIFUL]] は Life Card 経由で貸金業 + 包括信用購入あっせんを保有。[[card-issuers/jaccs|JACCS]] は三つすべてに加え、包括信用購入あっせん + 個別信用購入あっせんを保有)。

## 比較マトリクス — 全体

| 観点 | カード発行会社 | 消費者金融 | 割賦信用 (信販) | BNPL 専業 | オートキャプティブ | 住宅ローン (JHF) | 教育ローン | マイクロクレジット | PSP 隣接信用 |
|---|---|---|---|---|---|---|---|---|---|
| **ライセンス** | 割賦販売法 (包括信用購入あっせん) | 貸金業法 | 割賦販売法 (個別信用購入あっせん + 多くは包括) | 割賦販売法 (Type II ≤ 2 mo + 個別の免除閾値) | 割賦販売法 (主に個別 / 包括) + 場合により貸金業法 | JHF 法 + 銀行法 (民間側) | 銀行法 + JFC 法 (公的側) | 通常は貸金業法 | 割賦販売法 + 資金決済法 (混合) |
| **監督当局** | METI | FSA | METI | METI (+ ウォレット連動時は FSA) | 主に METI | MLIT + MOF + 銀行側 FSA | FSA + MOF | 主に FSA | METI + FSA 境界 |
| **登録簿ルート** | METI 登録包括信用購入あっせん業者一覧 (241 登録、2026-04 月末時点) | FSA 貸金業者登録一覧 | METI 登録個別信用購入あっせん業者一覧 (138 登録、2026-04 月末時点) | 混合 — METI Type II / 個別免除 + FSA Type II / III 資金移動 | METI 個別/包括一覧 | JHF 取扱金融機関一覧 (民間) + JHF 直接 | 銀行商品開示 + JFC 商品開示 | FSA 貸金業者登録 + JICC / CIC | METI 登録 + FSA 資金移動業 + 第三者型前払 |
| **総量規制 (貸付上限)** | キャッシング部分は対象。ショッピングリボは別ルール | 対象 — 年収の 1/3  という硬い上限 | 対象外 (割賦販売法は総量規制ではなく支払可能見込額調査) | ≤ 2 mo の後払いでは実質的に対象外。登録される場合は個別信用購入あっせんルール | 対象外 (割賦販売法ルート) | 対象外 — 有担保 + 政策金融の例外 | 民間は対象外 (銀行商品)、JFC 公的ローンも対象外 | 対象 (1/3 上限が適用) | 実際に債権を計上するライセンス次第 |
| **上限金利** | キャッシングは利息制限法 15-20%、ショッピングは割賦販売法の実質年率 | 利息制限法 15-20% + 出資法 20% 刑事上限 | 利息制限法 + 割賦販売法の実質年率開示 | 一般に消費者には 0%。加盟店が MDR 相当を負担するモデル。延滞手数料型 | 割賦販売法の実質年率 | 民間住宅ローンは銀行市場金利、フラット 35 は固定 | 銀行ローンは市場金利、JFC は低い固定金利 | 利息制限法 + 出資法 20% | 混合 — 計上ライセンス次第 |
| **KYC / AML 義務** | 犯罪収益移転防止法 (犯収法) の完全義務 | 犯収法 + 貸金業法の厳格な KYC | 犯収法 + 割賦販売法の加盟店調査 | 少額では軽い犯収法対応、閾値超過時は完全対応 | 犯収法 + ディーラー KYC | 犯収法 + 銀行側の完全 KYC | 犯収法 + 銀行側の完全 KYC | 犯収法 + 貸金業 KYC | 適用がある場合は犯収法 + ウォレット / 資金移動業 KYC |
| **開示義務** | 割賦販売法の実質年率、加盟店表示、セキュリティ指針 (J-CSC) | 貸金業法 13 条 書面交付、17 条 契約書面 | 割賦販売法の実質年率、加盟店表示、個別契約 | METI 後払い FAQ 指針 + 消費者契約法 | 割賦販売法の実質年率 + ディーラー開示 | 重要事項説明書 + 銀行側開示 | 銀行側開示 + JFC 商品開示 | 貸金業法 13/17 条 | METI + 消費者契約法 + ウォレット規約 |
| **デフォルト率開示** | 発行会社 IR (年次のセグメント別貸倒率) | 有報 + JFSA 集計統計 | 信販 IR (セグメント別信用コスト率) | 限定的 — 後払い事業者が上場していれば IR (例: PayPal 開示の Paidy) | OEM 金融部門 IR (例: Toyota Finance 開示は OEM 連結報告に内包) | JHF 年次報告 + 銀行側貸倒率 | 銀行 IR + JFC 年次報告 | 上場貸金業者なら IR、それ以外は JFSA 集計 | 限定的。多くは親 PSP の IR 内部 |
| **負債 / 貸倒引当** | IFRS 9 / J-GAAP 引当金 + 割賦販売法上の加盟店リスク負担 | IFRS 9 / J-GAAP 引当金、過払金引当のレガシー | IFRS 9 / J-GAAP 引当金 + 加盟店求償 | 通常は加盟店と事業者が共同負担 | OEM 保証またはディーラーリコースモデルが一般的 | 銀行引当金 + フラット 35 の JHF 信用補完 | 銀行引当金 + JFC 財政裏付け | 貸金業引当金 + 残存する過払金リスク | 計上ライセンスにより混合 |
| **報告登録ルート** | METI 登録包括信用購入あっせん業者 PDF list | FSA 貸金業者登録 list (中央 + 都道府県) | METI 登録個別信用購入あっせん業者 PDF list | 該当する場合は METI 登録 + 後払い行政処分状況 page | METI 個別/包括 lists | JHF 取扱金融機関一覧 + JHF 直接 | 全銀協開示の銀行ローン商品、JFC 商品ページ | FSA 貸金業者登録 list | METI + FSA 横断登録 |
| **近時の規制圧力** | 改正割賦販売法 (2018, 2020, 2024 BNPL 明確化)、J-CSC 指針 6.0/6.1 (EC で EMV 3-DS 義務化 2025-03 ) | 改正貸金業法 (2010-06 完全施行: 20%上限 + 1/3 総量規制)、過払金の縮小 | 改正割賦販売法 (2018 加盟店調査強化)、2020 改正による認定包括 / 少額包括 | 2024 改正割賦販売法下の BNPL 明確化、消費者庁の現金化濫用警告 | EV / KINTO サブスクリプション移行圧力、OEM キャプティブ統合論 | フラット 35 不正利用問題 (2019-) + JHF 投資家基盤の変化 | 大きなものなし。授業料上昇に伴う教育ローン需要圧力 | 全国的枠組みは限定的。社会的金融の議論が継続 | 埋込型チェックアウト信用をめぐる METI + FSA 境界明確化 |
| **証券化 / ABS パイプライン** | 厚い — クレジットカード債権 ABS (V-RACE、S-RACE、Rakuten Card ABS の定例発行) | 厚い — ACOM / SMBCCF / AIFUL の消費者ローン ABS 定例 | 厚い — オートローン ABS (オート / ショッピングクレジット ABS 定例) | 新興 — PayPal 傘下 Paidy 債権の証券化ルート | 厚い — Toyota Finance / Honda Finance / Nissan Financial のオート ABS 定例 | 厚い — JHF によるフラット 35 MBS 定例発行 (機構 MBS、日本最大の MBS 発行体) | 限定的 — 教育ローン単独プールでの銀行ローン証券化は稀 | 最小 | 最小 |
| **銀行隣接性** | メガバンク FG 系: [[card-issuers/smbc-card\|SMBC Card]] (SMFG)、[[card-issuers/mufg-nicos\|MUFG NICOS]] (MUFG)、[[card-issuers/jcb\|JCB]] (複数銀行)、[[card-issuers/rakuten-card\|Rakuten Card]] (Rakuten FG)、[[card-issuers/paypay-card\|PayPay Card]] (PayPay FG) | 混合: [[consumer-finance/smbc-consumer-finance\|SMBC Consumer Finance / Promise]] (SMFG 100%)、[[consumer-finance/acom\|ACOM]] (MUFG 39.6% 持分法)、[[consumer-finance/aiful\|AIFUL]] (独立系) | 銀行 FG 系: [[card-issuers/jaccs\|JACCS]] (MUFG 持分法)、[[card-issuers/orico\|Orico]] (Mizuho + Itochu)、[[card-issuers/aplus\|APLUS]] (SBI Shinsei)、Credit Saison (独立 / Mizuho 隣接) | 主にノンバンク: Paidy (PayPal)、Atone (Net Protections)、NP後払い (Net Protections)。ただし銀行 FG 系カード発行会社も BNPL 類似商品を展開 | OEM キャプティブ: Toyota Finance、Honda Finance、Nissan Financial Services。ノンバンク系キャプティブで、銀行と提携する場合もある | 銀行フロント (民間): 全メガバンク + 地銀。JHF は政策金融ノンバンク | 銀行フロント (民間教育ローン)。JFC は政策金融ノンバンク | 多くはノンバンクの社会金融 + 小規模貸金業 | 親 PSP が銀行隣接なら銀行 FG 系 |
| **カードブランド受入依存** | 直接的 — 発行者が Visa / Mastercard / JCB / Amex / Diners ブランドを担う | なし (現金貸付でありカードブランド経由ではない) | 混合 — 多くの信販会社はブランドカードも発行 (Orico Card、JACCS Card) | 店頭チェックアウトでは一般にないが、BNPL の一部は仮想ブランドカードを提供 | ローン商品レベルではなし | ローン商品レベルではなし | なし | なし | 依存する場合あり — 一部 PSP 信用はブランドカード基盤を通る |

### 1. カード発行会社 (クレジットカード会社 / 包括信用購入あっせん業者)

カード発行会社は割賦販売法上の **包括信用購入あっせん業者**であり、METI に登録される (METI 登録包括信用購入あっせん業者 list によると 241 登録、2026-04 月末時点)。カード発行会社は、会員審査、与信枠設定、債権計上、不正監視を行う主体である。銀行 FG アンカーは [[card-issuers/smbc-card|SMBC Card]] (SMFG)、[[card-issuers/mufg-nicos|MUFG NICOS]] (MUFG)、[[card-issuers/jcb|JCB]] (複数銀行コンソーシアム)。ノンバンク FG アンカーは [[card-issuers/rakuten-card|Rakuten Card]] (Rakuten FG)、[[card-issuers/paypay-card|PayPay Card]] (PayPay FG)、[[card-issuers/aeon-financial-service|AEON Financial Service]] (AEON 小売 FG)。

カード商品内のキャッシングは貸金業制度にまたがる。その部分には総量規制 (年収の 1/3 上限) と利息制限法 20% の上限金利が適用される一方、**ショッピング**部分は総量規制ではなく割賦販売法の支払可能見込額調査により規律される。この二重制度構造はカード発行会社に固有である。

### 2. 消費者金融 / 商工ローン (消費者金融 / 貸金業者)

消費者金融事業者は貸金業法上の貸金業者であり、中央 (財務局) または都道府県ルートで FSA に登録される。現在の「3 大消費者金融」は [[consumer-finance/acom|ACOM]] (MUFG 持分法 39.6%)、[[consumer-finance/smbc-consumer-finance|SMBC Consumer Finance / Promise]] (SMFG 100% 子会社)、[[consumer-finance/aiful|AIFUL]] (独立系、創業家支配) である。武富士が 2010, に会社更生で破綻した後、同セグメントはこの三社を中心に集約された。

決定的な規制イベントは、2010-06に完全施行された **改正貸金業法** である。利息制限法の 20% 上限 (元本規模に応じた 15% / 18% / 20% の階層) が旧出資法 29.2% のグレーゾーンに置き換わり、総量規制 (年収の 1/3 という硬い上限) が拘束的になった。その後の過払金返還の波は、[[consumer-finance/aiful|AIFUL]] の事業再生 ADR (2009-09)、[[consumer-finance/acom|ACOM]] の MUFG TOB (2008-10)、Promise の SMFG 完全子会社化の背景となった。

銀行側の迂回ルートは **銀行カードローン** である。銀行発行商品は銀行法に基づき、歴史的に総量規制の対象ではなかったため、「実質総量規制超過」貸付をめぐる業界自主規制の議論を引き起こした。ACOM、Promise、AIFUL はいずれも銀行カードローン債権を保証する銀行保証の副業を持ち、そこから収益を得ている。

### 3. 割賦信用 / 信販 (信販会社 / 個別信用購入あっせん業者)

信販事業者は割賦販売法上の **個別信用購入あっせん業者**である (METI 登録個別信用購入あっせん業者 list によると 138 登録、2026-04 月末時点)。特徴は、加盟店契約を通じて、ローンが特定の購入 (個品割賦) に結び付く点である。典型例は、ディーラー経由のオートローン、リフォームローン、教育ローン (民間側)、楽器 / 家電 / 医療 / 住宅設備である。アンカーは [[card-issuers/orico|Orico]] (Mizuho + Itochu、オートローン #1)、[[card-issuers/jaccs|JACCS]] (MUFG 持分法、auto/education/reform 3 lanes)、[[card-issuers/aplus|APLUS]] (SBI Shinsei)、Credit Saison (独立 / Mizuho 隣接、カード比重大)。

信販会社は通常 **複数ライセンス** を持つ。個別信用購入あっせんに加え、発行カードのための包括信用購入あっせん、カードローンのための貸金業、銀行カードローン保証のための銀行保証、多くの場合は B2B 公共料金 / 継続課金 collection のための集金代行を組み合わせる。2018 改正割賦販売法は加盟店調査義務を強化し、限界的な加盟店関係のオンボーディングコストを高めた。

### 4. BNPL 専業 (BNPL / 後払い)

BNPL は **最も規制上あいまいな**カテゴリである。割賦販売法上、**≤ 2 か月かつ一括払い**の後払いは一般に包括信用購入あっせんに該当せず、一定の加盟店フロント型モデルにおける個別後払いは、加盟店表示ルートにより個別信用購入あっせん登録を回避できる場合がある。2020 改正割賦販売法 (2021-04施行) は、認定包括信用購入あっせん業者 / 少額包括信用購入あっせん業者の枠組みを追加し、一部の BNPL 事業者を包括制度の軽量版に明示的に取り込んだ。2024 の BNPL 明確化ラウンドも引き締めを継続した。

アンカーは [[payment-firms/paidy|Paidy]] (2021-09 に PayPal が約 USD 2.7 bn で買収)、Atone / NP後払い (Net Protections)。[[payments/japan-bnpl-credit-purchase-boundary|BNPL boundary]] ページは商品ごとの分類テストを説明する。消費者庁 (CAA) は、BNPL の **現金化濫用** (現金化目的後払い) や、後払いを現金のように感じさせる UX パターンについて、継続的な注意喚起チャネルを維持している。CAA の決済トラブル注意ページを参照。

### 5. オートファイナンス / オートキャプティブ (自動車ローン / オートクレジット)

オートファイナンスには二つの構造がある。(a) ディーラー加盟店ネットワークを通じて割賦販売法に基づき組成される信販フロント型オートローン (例: [[card-issuers/orico|Orico]] は国内オートローン #1 、[[card-issuers/jaccs|JACCS]] は #2-3)、(b) **OEM オートキャプティブ**、すなわち Toyota Finance、Honda Finance、Nissan Financial Services、Mitsubishi UFJ Lease & Finance (現 Mitsubishi HC Capital) など、親 OEM の車両販売を引き受けることを主目的とする金融子会社である。

OEM キャプティブの計上は、通常、割賦販売法の個別 + 包括 (OEM ブランドカードがあれば) + 場合により貸金業である。OEM は明示的または黙示的な信用支援 (KINTO 型サブスクリプションの残価保証など) を提供し、単独の信販オートローンブックに比べてキャプティブの貸倒引当負担を低減する。オート ABS 市場は、日本の消費者ローン ABS の中で MBS を除く最大セグメントであり、Toyota Finance が定例発行のベンチマーク発行体である。EV / KINTO サブスクリプション / カーシェアの潮流は、信販フロント型とキャプティブフロント型の双方が共有するディーラー信用チャネルへの構造的圧力である。

### 6. 住宅ローン隣接 (住宅ローン直接型 / フラット 35)

住宅ローンは大部分が銀行法下の銀行 FG 世界だが、**政策金融の上乗せ構造**が重要である。[[policy-finance/japan-housing-finance-agency|Japan Housing Finance Agency (JHF / 住宅金融支援機構)]] は **フラット 35** を運営する。これは、長期固定金利住宅ローンを取扱銀行が組成し、JHF に売却し、JHF が機構 MBS としてパッケージする仕組みである。JHF は日本最大の MBS 発行体である。

監督当局としては、MLIT (国交省) が JHF の主たる監督者 (住宅政策側) であり、MOF が JHF 法上の金融面を監督し、組成銀行側は銀行法に基づき FSA 監督を受ける。フラット 35 不正利用問題 (2019-)、すなわち投資用賃貸物件購入を自己居住用として偽装した問題は、JHF の取扱金融機関デューデリジェンス要件を構造的に厳格化した。JHF は割賦販売法または貸金業法の事業者ではない。独立行政法人の政策金融機関であり、METI / FSA の消費者信用登録簿の外に位置する。

### 7. 教育ローン (教育ローン)

教育ローンは **公的 / 民間** の線で分かれる。民間側は銀行法に基づいて銀行が提供する (民間ローンであり、割賦販売法登録は不要) もので、多くは無担保の教育目的ローン商品として組成される。公的側は **国民金融公庫 / Japan Finance Corporation (JFC / 日本政策金融公庫)** が JFC 法に基づいて運営する。JFC の教育一般貸付は主要な公的教育ローンであり、民間銀行商品に比べて低い固定金利である。JFC は MOF (財務省) の監督を受ける。

教育ローンブックは、教育ローン単独 ABS として定例的に証券化されることはない。銀行側エクスポージャーは、より広い無担保消費者ローンブックの中に入る。信販事業者 (例: [[card-issuers/jaccs|JACCS]]) も、教育機関の加盟店チャネルを通じて割賦販売法の個別ルートで教育ローンを提供する。これは銀行・民間、JFC・公的に並ぶ第三の教育信用ルートである。

### 8. マイクロクレジット (マイクロクレジット)

日本には、バングラデシュ / インド型のマイクロファイナンスに相当する発達した全国的マイクロクレジット枠組みはない。日本でマイクロクレジット風の小口消費者信用が存在する場合、多くは小規模貸金業者により **貸金業法** の下で計上される。つまり、利息制限法 20% 上限、出資法 20% 刑事上限、総量規制 1/3 上限、犯収法 KYC 義務という、貸金業制度全体のルールを引き継ぐ。

社会金融や NPO 経由の小口貸付チャネルも存在する (例: MHLW 資金を用い、都道府県社会福祉協議会が運営する生活福祉資金貸付)。ただし、これらは貸金業ではなく政策福祉チャネルである。したがって日本で「マイクロクレジット」を細分化する際は、事業者が貸金業 (FSA 監督) なのか、社会福祉 (MHLW 監督) なのかを確認する必要がある。消費者保護制度、登録ルート、開示義務がまったく異なるためである。

### 9. PSP 隣接信用 (EC 埋込型信用)

PSP 隣接信用は、この比較マトリクスの **境界事例**である。PSP (payment service provider) またはウォレット運営者がチェックアウト時の信用商品を提供する場合、その債権は、(a) 事業者が個別 / 包括 信用購入あっせん登録を持つ場合は割賦販売法、(b) ウォレット残高の立替として構成される場合は資金決済法の資金移動業、(c) 前払型の蓄積価値の延長として構成される場合は資金決済法の第三者型前払、(d) 稀な構成では貸金業法の下で計上され得る。したがって、同じチェックアウト UX でも、実際に債権を計上する法人がどれかによって異なるライセンスに変換される。

このカテゴリは、Mercari/Merpay (後払い機能が資金移動 + 後払いラインにまたがる)、PayPay (あと払いが [[card-issuers/paypay-card|PayPay Card]] を信用計上主体として使う)、EC マーケットプレイスのプラットフォーム側信用供与のような事業者のために存在する。[[payments/japan-bnpl-credit-purchase-boundary|BNPL boundary]] ページと [[financial-licenses/payment-license-stack|payment license stack]] ページが商品ごとの分類テストを示す。

## 信用情報機関のフットプリント

消費者信用事業者の照会・報告義務は、ライセンスカテゴリと信用情報機関の会員資格に依存する。主要な信用情報機関は三つある。

| 機関 | 会員基盤 | 典型的な事業者カバー範囲 |
|---|---|---|
| **JICC** (日本信用情報機構) | 主に貸金業 + 信販 | 消費者金融 / 商工ローン、信販、一部 BNPL |
| **CIC** (Credit Information Center) | 主に割賦販売法登録事業者 | カード発行会社、信販、オートファイナンス、個別信用購入あっせん業者 |
| **全国銀行個人信用情報センター (KSC)** | 銀行系 | 銀行、信用金庫、信用組合 — 住宅ローン + 教育ローン + 銀行カードローン |

**3 大消費者金融** 事業者は、通常 JICC + CIC + KSC の会員である。総量規制確認の基礎が信用情報機関横断チェックだからである。純粋な BNPL 事業者は、ライセンススタックに応じて JICC または CIC だけの会員である場合がある。JHF (フラット 35) は銀行の組成側を通じて KSC へ報告される。

## 銀行隣接マップ (統合)

カテゴリ 1, 2, 3, 4, 5, 6, 7 を合わせて読むと、日本の消費者信用における銀行 FG 隣接の構図は次のようになる。

| FG | カード発行会社 | 消費者金融 | 信販 | 注記 |
|---|---|---|---|---|
| [[megabanks/mufg|MUFG]] | [[card-issuers/mufg-nicos|MUFG NICOS]] (100%) | [[consumer-finance/acom|ACOM]] (39.6% 持分法) | [[card-issuers/jaccs|JACCS]] (持分法) | 一つの FG 内に 3ラインの消費者信用フットプリント |
| [[megabanks/smfg|SMFG]] | [[card-issuers/smbc-card|SMBC Card]] (100%) | [[consumer-finance/smbc-consumer-finance|SMBC Consumer Finance / Promise]] (100%) | (大手信販の内製なし。Credit Saison などと提携) | 2ラインで、信販は所有ではなく提携 |
| [[megabanks/mizuho-fg|Mizuho FG]] | (UC Card レガシー、提携) | (大手単独なし) | [[card-issuers/orico|Orico]] (持分法 + Itochu) | 信販が厚く、カードは軽い |
| [[regional-banks/sbi-shinsei-bank|SBI Shinsei]] | (Shinsei Financial カード商品) | Shinsei Financial / レイクALSA (旧 GE 系) | [[card-issuers/aplus|APLUS]] (グループ会社) | 旧 GE / Lake / APLUS ブックを通じた消費者信用色の強い FG |
| 独立 / ノンバンク FG | [[card-issuers/rakuten-card|Rakuten Card]]、[[card-issuers/paypay-card|PayPay Card]]、[[card-issuers/aeon-financial-service|AEON Financial Service]] | [[consumer-finance/aiful|AIFUL]] (創業家) | Credit Saison (独立)、[[card-issuers/aplus|APLUS]] (SBI 側) | 銀行 FG 所有がない、または部分的な領域 |

MUFG の 3ラインのフットプリント (NICOS カード + ACOM 消費者金融 + JACCS 信販) は、日本の消費者信用における銀行 FG として最も集中したポジションである。MUFG が将来的にこれを統合された消費者信用子会社へ集約するのか、それとも別々の上場 / 持分法エンティティとして維持するのかは、長期的な構造論点である。

## 近時の規制圧力

| 日付 | 出所 | 変更内容 |
|---|---|---|
| 2006-01-13 | 最高裁 | グレーゾーン金利判決により貸金業法のみなし弁済規定が実質的に無効化され、過払金返還の波を引き起こした |
| 2006-12 | 国会 | 改正貸金業法成立 (20%金利上限 + 1/3 総量規制) |
| 2008-04 | FSA | [[consumer-finance/aiful|AIFUL]] に対する業務改善命令 (取立行為問題) と全店業務停止命令 |
| 2008-10-22 | MUFG TOB | MUFG が約 40% の [[consumer-finance/acom|ACOM]] を取得し、持分法連結化 |
| 2010-06 | FSA | 改正貸金業法完全施行 (20%上限 + 1/3 総量規制、完全施行) |
| 2010-09 | 武富士 | Takefuji が会社更生を申請し、業界は 3 大消費者金融へ集約 |
| 2018 | METI | 改正割賦販売法 — 加盟店調査義務とカードデータセキュリティスタックを強化 |
| 2020 改正 | METI | 改正割賦販売法 — BNPL 向けの認定包括信用購入あっせん業者 + 少額包括信用購入あっせん業者の枠組み |
| 2021-04 | METI | 2020 改正割賦販売法の施行 |
| 2024 | METI / CAA | BNPL 明確化ラウンド、後払い事業者の行政処分状況ページ (atobaraigyouseisyobunnojoukyou.html) |
| 2025-03 | METI / J-Credit Association | EC カード決済で EMV 3-DS を義務化、J-CSC 指針 6.0 に基づく ([[payments/japan-card-security-authentication-controls|card security and authentication controls]] 参照) |
| 継続中 | CAA (消費者庁) | BNPL の現金化濫用と、後払いを現金のように感じさせる UX パターンに関する継続的注意喚起 |

2010-06 改正貸金業法施行は、現代日本の消費者信用における **最大の構造イベント** である。消費者金融を 4強 + 多数小規模の構図から、現在の 3 大 (ACOM、Promise、AIFUL) + 銀行カードローン提携の構図へ集約し、過払金返還の波は事業者資本の大半を十年近く消費した。

## 証券化 / ABS パイプライン要約

| カテゴリ | 定例 ABS / MBS パイプライン | コメント |
|---|---|---|
| カード発行会社 | 厚い — クレジットカード債権 ABS (V-RACE、S-RACE、Rakuten Card ABS) | 銀行 FG 系カード発行会社は定例発行し、ノンバンク FG 系カード発行会社は SPC 経由で発行 |
| 消費者金融 | 厚い — ACOM / SMBCCF / AIFUL の消費者ローン ABS 定例 | 過払金の波を経て、ABS は安定した二次資金調達ライン |
| 信販 (オート・ショッピング信用) | 厚い — オートローン + ショッピングクレジット ABS | Orico / JACCS / APLUS の定例パイプライン |
| BNPL | 新興 — PayPal 傘下 Paidy 債権の証券化ルート | まだ小さいが、パイプラインは開きつつある |
| オートキャプティブ (OEM) | 厚い — Toyota Finance / Honda Finance / Nissan Financial のオート ABS 定例 | MBS を除く最大の消費者ローン ABS セグメント |
| 住宅 (JHF) | 厚い — フラット 35 機構 MBS 定例 | JHF は日本最大の MBS 発行体 |
| 教育ローン | 単独プールとしては最小 | 銀行側では集計され、単独ではない |
| マイクロクレジット | 最小 | ABS の経済性には規模が小さすぎる |
| PSP 隣接 | 最小 | あれば親会社の他の ABS パイプラインに集約 |

ABS の観点は、**各事業者がどのように資金調達するか**を理解するうえで重要である。ABS が厚いカテゴリは、バランスシート資本を比例的に増やさずにブックを急成長させられる。一方、ABS が薄いカテゴリ (マイクロクレジット、教育ローン、PSP 隣接) は、親会社のバランスシート余力に成長を制約される。これが、PayPal 傘下の Paidy のように継続的な証券化を実現した BNPL 事業者が、自己資本で資金調達する BNPL 事業者に対して実質的な資本効率を得る理由の一つである。

## 関連項目

- [[payments/INDEX]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-interchange-and-merchant-fee-stack]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/cashless-jp-landscape]]
- [[financial-licenses/payment-license-stack]]
- [[financial-licenses/INDEX]]
- [[consumer-finance/acom]]
- [[consumer-finance/aiful]]
- [[consumer-finance/smbc-consumer-finance]]
- [[card-issuers/aplus]]
- [[card-issuers/jaccs]]
- [[card-issuers/orico]]
- [[card-issuers/smbc-card]]
- [[card-issuers/mufg-nicos]]
- [[card-issuers/jcb]]
- [[card-issuers/rakuten-card]]
- [[card-issuers/paypay-card]]
- [[card-issuers/aeon-financial-service]]
- [[payment-firms/paidy]]
- [[payment-firms/bnpl-landscape]]
- [[policy-finance/japan-housing-finance-agency]]
- [[INDEX|FinWiki index]]

## 出典

- METI Installment Sales Act portal: https://www.meti.go.jp/policy/economy/consumer/credit/
- METI credit-transaction index: https://www.meti.go.jp/policy/economy/consumer/credit/index.html
- METI registered operator lists portal: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
- METI 登録包括信用購入あっせん業者 PDF: https://www.meti.go.jp/policy/economy/consumer/credit/tourokuhoukatsuichiran.pdf
- METI 登録個別信用購入あっせん業者 PDF: https://www.meti.go.jp/policy/economy/consumer/credit/tourokukobetsuichiran.pdf
- METI クレジットカード番号等取扱契約締結事業者 PDF: https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
- METI 割賦販売法 after-payment FAQ: https://www.meti.go.jp/policy/economy/consumer/credit/kappuhanbaihoatobaraibunyanogaiyofaq.html
- METI 改正割賦販売法 page: https://www.meti.go.jp/policy/economy/consumer/credit/11kappuhanbaihou.html
- FSA Money-Lending Act portal: https://www.fsa.go.jp/menkyo/kashikin/
- FSA licensed / registered operators portal: https://www.fsa.go.jp/menkyo/menkyo.html
- FSA prepaid policy portal: https://www.fsa.go.jp/policy/prepaid/
- JICC (日本信用情報機構): https://www.jicc.co.jp/
- CIC (Credit Information Center): https://www.cic.co.jp/
- Japan Credit Association — Installment Sales Act consumer page: https://www.j-credit.or.jp/customer/sales_law/
- JHF (住宅金融支援機構): https://www.jhf.go.jp/
- JFC (日本政策金融公庫): https://www.jfc.go.jp/
- CAA (消費者庁) payment-trouble caution: https://www.caa.go.jp/policies/policy/consumer_policy/caution/internet/trouble/payment.html
- 各事業者の IR / 企業開示 (公開分): [[consumer-finance/acom|ACOM]] (TSE STD 8572), [[consumer-finance/aiful|AIFUL]] (TSE PRIME 8515), [[card-issuers/jaccs|JACCS]] (TSE PRIME 8584), [[card-issuers/orico|Orico]] (TSE PRIME 8585), [[card-issuers/aplus|APLUS]] (SBI Group corporate site), [[consumer-finance/smbc-consumer-finance|SMBC Consumer Finance / Promise]] (SMFG consolidated)
