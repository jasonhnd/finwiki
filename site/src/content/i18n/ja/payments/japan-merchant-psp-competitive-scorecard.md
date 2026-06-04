---
source: payments/japan-merchant-psp-competitive-scorecard
source_hash: a72013337045de68
lang: ja
status: machine
fidelity: ok
title: "日本の加盟店 PSP 競争スコアカード"
translated_at: 2026-06-02T16:33:58.491Z
---
# 日本の加盟店 PSP 競争スコアカード

## 要約

日本の加盟店 PSP（Payment Service Provider）市場は、消費者から見えるキャッシュレス市場が示すよりも **細分化され、かつ多層的** である。市場は少なくとも四つの軸に分かれる。すなわち、(a) 伝統的なカードゲートウェイ PSP（[[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]、[[payment-firms/sb-payment-service|SB Payment Service]]、[[payment-firms/dg-financial-technology|DG Financial Technology]]、[[payment-firms/gmo-epsilon|GMO Epsilon]]）、(b) QR 集約 PSP（[[payment-firms/netstars|Netstars]]）、(c) グローバルチェックアウト PSP（Stripe Japan、PayPal Japan、Square Japan、Komoju）、(d) ウォレット・プラットフォーム型アクワイアラ（Amazon Pay、Rakuten Payment、Recruit Card / 受取代行）である。それぞれ加盟店手数料の経済性、精算速度、業種特化、M&A 履歴が異なる。このスコアカードは、ゲートウェイを選ぶ加盟店と、日本の EC 決済フローを実際に誰が支配しているかを理解したいセクター読者にとって重要な軸で、主要十二 PSP を横並びにする。これは [[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]] の加盟店側コンパニオンであり、[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] の運営者側コンパニオンである。

## ウィキ上の位置づけ

この項目は、加盟店側 PSP 参照として [[payments/INDEX|payments index]] の下に位置する。技術スタックの見方は [[payments/card-acquiring-japan-stack|Japan card acquiring stack]]、役割分離フレームワークは [[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]]、精算サイクルと加盟店エクスポージャーは [[payments/psp-merchant-settlement-risk|PSP merchant settlement risk]]、[[payments/account-to-account-payment-japan|account-to-account payment in Japan]] は PSP が担う場面が増えている A2A の線、銀行側の直接ルートは [[payments/merchant-bank-pay-account-direct-acquiring|merchant Bank Pay account direct-acquiring]]、この項目が意図的に補完するスキーム横断の経済性は [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]、運営者アンカーは [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]、[[payment-firms/gmo-epsilon|GMO Epsilon]]、[[payment-firms/sb-payment-service|SB Payment Service]]、[[payment-firms/dg-financial-technology|DG Financial Technology / DGFT]]、[[payment-firms/netstars|Netstars]]、[[payment-firms/freee|freee]]、[[payment-firms/money-forward|Money Forward]]、[[payment-firms/famima-digital-one|FamiMa Digital One]]、[[payment-firms/seven-payment-service|Seven Payment Service]] とあわせて読む。

## このマトリクスが重要な理由

加盟店が PSP を選ぶ場合、またはセクター読者が日本の EC スタックを読む場合、横並び比較がないと三つの構造点を誤読しやすい。第一に、**「PSP」は一つの商品ではない**。カード受入ゲートウェイは QR 集約事業と構造的に異なり、Stripe のようなグローバルチェックアウト商品とも構造的に異なる。第二に、**アクワイアリング上の役割**である。PSP の中には外部アクワイアラへ通す純粋な技術処理事業者もあれば、割賦販売法上の加盟店契約締結事業者（アクワイアラ）として自ら加盟店契約を持つ事業者もあり、加盟店のリスク・エクスポージャーはそれにより異なる（[[payments/psp-merchant-settlement-risk|PSP merchant settlement risk]] 参照）。第三に、**精算速度と手数料モデル**である。Square や PayPay の加盟店プランを使う小規模加盟店は、GMO-PG や SB Payment Service と契約する大企業とは根本的に異なる精算体験を持つ。このスコアカードはこの三点を可視化する。

### GMO Payment Gateway（GMO-PG、東証 PRIME 3769）

[[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] は、加盟店数と処理金額で日本最大の独立系 PSP である。1995-03-25に株式会社カードコマースとして創業し、2000, に GMO-PG へ改称、2005, に東証 Mothers 上場、2008に東証一部（現 PRIME）へ移行した。[[business/gmo-internet-group|GMO Internet Group]] の連結子会社である。EC 加盟店基盤は 30 万+ 店舗とされる。商品ラインは、カードゲートウェイ、コード決済、コンビニ決済、銀行振込収納、BtoB 請求 / 後払い、Pay.JP 開発者 SDK（Stripe 型競合）、NextPay（Vietnam）や ECPay（Taiwan）経由のアジア横断ゲートウェイなど多岐にわたる。[[card-issuers/smbc-card|SMBC Card]] とは SMBC GMO PAYMENT JV を通じた戦略関係を持つ。加盟店決済データに基づくトランザクション・レンディングも周辺事業として持つ。

GMO-PG の特徴的なポジションは、**複数アクワイアラ関係の仲介事業者**である点にある。PSP として、ブランドごとに複数のカードアクワイアラへ加盟店をルーティングし、自社で METI のクレジットカード番号等取扱契約締結事業者登録を保有し、見出し上の料率よりも精算信頼性と統合深度が重要な大口加盟店契約で競争する。

### GMO Epsilon（GMO-PG 子会社）

[[payment-firms/gmo-epsilon|GMO Epsilon]] は GMO Payment Gateway の中小加盟店向け PSP であり、GMO-PG の大企業 / 中堅加盟店帳簿とは異なる加盟店セグメントに対応するため別ブランドとして構成される。両社は [[business/gmo-internet-group|GMO Internet Group]] payments 傘下の兄弟事業として運営され、GMO Epsilon はより件数が多く小口の加盟店口座（小規模 EC 店舗、オンラインサービス、コンテンツ課金加盟店）を扱い、GMO-PG はより大きな大企業契約を扱う。

特徴的なポジションは、**一つのグループ内で小規模加盟店 + 大企業を二ブランドに分けて扱う構造**である。GMO Internet Group は別ブランド PSP により加盟店規模の両端を運営しており、全規模を一商品で扱う Stripe や、小規模・零細に寄る Square とは構造が異なる。

### SB Payment Service（SBPS、SoftBank Group）

[[payment-firms/sb-payment-service|SB Payment Service / SBペイメントサービス]] は SoftBank Group の PSP であり、コード決済処理では [[payment-firms/paypay|PayPay]] と深く統合され、Yahoo! Japan Shopping の EC 加盟店受入とも結び付く。SBPS は SoftBank グループの EC 加盟店基盤と、単一 PSP からカード + コード + PayPay 受入を統合したい外部 EC 加盟店を扱う。同社は METI のクレジットカード番号等取扱契約締結事業者一覧に掲載される加盟店契約締結事業者であり、包括信用購入あっせん業者の線も持つ。

特徴的なポジションは、**ウォレット起点 PSP** である。SBPS の PayPay 統合は、コード決済を主要チャネルにしたい加盟店に構造的な優位を与える。また SoftBank Group との結び付きにより、Yahoo! Japan Shopping / ZOZOTOWN / LINE 連携 EC 物件に対する関係力を持つ。

### DG Financial Technology / DGFT（Digital Garage group）

[[payment-firms/dg-financial-technology|DG Financial Technology / DGFT]] は Digital Garage（東証 PRIME 4819）の決済子会社で、高付加価値 EC と大企業加盟店を対象に、クロスボーダー受入、多通貨精算、Square との統合を重視する。Digital Garage は Square が日本法人を設立する前の Square の日本パートナーだった。DGFT は Digital Garage が買収した老舗 PSP ブランド Veritrans の集約事業者としても機能する。

特徴的なポジションは、**大企業 + クロスボーダー PSP** である。DGFT は多通貨対応、高度な不正検知、技術パートナー・エコシステム（DG は fintech 隣接スタートアップへの投資を多く持つ）で差別化し、国際カード受入や承認率最適化がコモディティ PSP より高い手数料構造を正当化する加盟店を狙う。

### Netstars（QR 集約専業）

[[payment-firms/netstars|Netstars]] は日本の主要な **複数ウォレット QR 集約事業者** であり、StarPay 加盟店受入商品を運営する。これにより、単一端末 / 単一 QR コードで複数のコード決済ウォレット（PayPay、d払い、au PAY、楽天ペイ、メルペイ、WeChat Pay、Alipay+、AppPay ほか）を受け入れられる。個別に各ウォレット契約を結ぶより、単一統合で複数ウォレットを受け入れる方が構造的に効率的な加盟店カテゴリ、すなわちコンビニ、ドラッグストア、飲食店、小売チェーン、インバウンド観光客の多い加盟店を対象とする。

特徴的なポジションは、**ウォレット非依存ゲートウェイ** である。カード先行でコードを追加する GMO-PG や SBPS と異なり、Netstars はコード決済先行の加盟店向けに設計されており、複数ウォレット受入需要の自然な相手方である。構造的リスクは、ウォレット運営者が集約事業者を迂回する自社直接加盟店経済を推進する可能性である。

### Square Japan（Block Inc. 子会社）

Square Japan は Block, Inc.（旧 Square, Inc.）の日本法人である。カードリーダー + mPOS アプリ + 決済サービス一体パッケージで小規模 / 零細加盟店を対象とし、米国商品と同じ形を取る。Square の差別化は精算速度であり、翌営業日精算（みずほ銀行 / 三井住友銀行口座保有者はさらに速い）が、T+M の伝統的加盟店バッチに対する見出し価値である。対応カードブランドは Visa、Mastercard、JCB、AMEX、Diners、Discover に加え、Square Reader 経由で QR コード決済（PayPay 等）と Suica / IC カードに対応する。

特徴的なポジションは、**零細加盟店 + 摩擦の少ないオンボーディング** である。「土曜に口座を開き、月曜に決済を受け入れる」という価値提案を、月額費用なし・最低取扱高なしで提供する。オンライン重視の Stripe とは小売 POS への親和性で差別化し、無料・低料率キャンペーンの PayPay とは、PayPay が持たないクレジットカードブランド受入で競争する。

### Stripe Japan

Stripe Japan は Stripe, Inc. の日本法人である。開発者、スタートアップ、デジタル先行加盟店を対象とする API 優先の決済統合を提供し、カードブランド（Visa、Mastercard、JCB、AMEX）、コード決済（PayPay）、Konbini Payment、Bank Transfer、Apple Pay、Google Pay、継続課金 / サブスクリプション部品をサポートする。Stripe Japan は自社の物理 POS ハードウェアを運営せず、商品は完全にオンライン / アプリ組込型である。

特徴的なポジションは、**開発者 API 優先** である。Stripe のドキュメントの深さ、API の使いやすさ、SDK 品質は、同規模の GMO-PG や SBPS の交渉料率より見出し料率が高くても、カスタムチェックアウトを構築する技術系加盟店にとって標準選択肢になっている。この軸では Pay.JP（GMO-PG の開発者 SDK 商品）が日本発の主要競合である。

### PayPal Japan

PayPal Japan（PayPal Pte. Ltd. Japan branch、[[payment-firms/paypal-pte-ltd-japan|PayPal Pte. Ltd. Japan]]）は日本の加盟店向けに PayPal チェックアウト商品を運営し、さらに [[payment-firms/paidy|Paidy]] を保有する。同社は 2021-09 に約 USD 2.7bn で買収され、PayPal Japan に中核チェックアウト事業に隣接する後払い / BNPL の足場を与えた。PayPal の加盟店向け価値提案は、クロスボーダー受入、買い手保護、グローバルチェックアウトフローとの統合を重視する。

特徴的なポジションは、**クロスボーダー優先** である。PayPal の価値提案は世界的な受入網に依拠し、日本から海外向けに販売する加盟店、または訪日・海外購入者へ販売する加盟店で最も強い。国内先行加盟店における PayPal 選好は、2015 以前より低下している。これは GMO-PG、SBPS、Stripe など国内代替が成熟したためである。Paidy 保有は、カード / ウォレットを中心とする PayPal チェックアウトを補完する後払いレーンを加える。

### Komoju（Degica、ゲーム / デジタルコンテンツ特化）

Komoju（株式会社 Degica）は東京本社の PSP で、**デジタルコンテンツ、ゲーム、ソフトウェア、インバウンド・クロスボーダー EC** 加盟店に特化する。国際カードブランド、Konbini Payment、Pay-Easy（Bank Transfer）、コード決済、後払い / Atobarai（Komoju Atobarai は Komoju 自社ブランド BNPL 商品）など、幅広い決済手段をサポートする。Komoju Atobarai は METI 一覧上の個別信用購入あっせん登録である。

特徴的なポジションは、**業種特化 PSP** である。Komoju のゲーム / デジタルコンテンツ特化は、マイクロトランザクション課金、仮想通貨的残高の精算、ゲーム加盟店に典型的なクロスボーダー購入者構成への知見を与える。Steam / Sony PlayStation / 各種ゲームパブリッシャーは代表的な加盟店セグメントである。

### Amazon Pay

Amazon Pay（Amazon Japan G.K. / Amazon Web Services Japan）は、Amazon アカウントをチェックアウトとして使う商品であり、第三者加盟店が購入者の保存済み Amazon アカウント（登録カード、登録住所）を通じて支払いを受けられるようにする。Amazon の登録購入者基盤を使ってチェックアウト摩擦を下げたい EC 加盟店を対象とする。

特徴的なポジションは、**アカウント・アンカー型 PSP** である。Amazon Pay の価値はゲートウェイ効率ではなく、**購入者側の保存済みアカウント + Amazon Prime 隣接性**にある。加盟店手数料はカードゲートウェイ PSP と競争可能だが、加盟店にとっての戦略価値は料率効率ではなく、摩擦の少ないチェックアウトによる購入転換率向上である。

### Rakuten Payment / 楽天ペイメント

Rakuten Payment Inc. は、加盟店向けの [[payment-firms/rakuten-fg|Rakuten FG]] 決済スタック、すなわち Rakuten Pay（コード決済）、Rakuten Card 受入、Rakuten Bank 精算、R-Card 連携を運営する。[[card-issuers/rakuten-card|Rakuten Card]]（カード発行会社）および Rakuten Point ロイヤルティ層と密接に統合される。Rakuten Members 登録、Rakuten Point の付与 / 利用といった楽天エコシステムの購入者獲得から利益を得る加盟店を対象とする。

特徴的なポジションは、**エコシステム起点 PSP** である。SoftBank における SB Payment Service、Amazon における Amazon Pay と同様、Rakuten Payment の構造的優位は Rakuten エコシステムの囲い込み済み購入者基盤である。楽天エコシステム外の加盟店も Rakuten Pay を利用できるが、エコシステムによる送客上乗せの価値は低くなる。

### Recruit Card / Recruit MUFG Business

[[payment-firms/recruit-mufg-business|Recruit MUFG Business]] は Recruit Holdings と [[megabanks/mufg|MUFG]] の JV であり、Recruit Card 商品と関連加盟店サービスを運営する。Air PAY（Recruit 運営の mPOS / QR 受入商品）と Air Regi（POS 統合）を含む。Air PAY は、日本の小規模加盟店 / 飲食店 / 個人サービス加盟店セグメントで意味のあるカード / コード受入商品である。

特徴的なポジションは、**Recruit エコシステム + mPOS** である。Recruit の HotPepper Beauty / HotPepper Gourmet / Jalan / SUUMO といった予約・発見商品は、他の PSP にはない加盟店獲得チャネルを Air PAY に与える。予約フロー + 決済受入 + POS 統合の組合せは構造的に模倣しにくい。

## 大型比較マトリクス

| PSP | 親会社 / グループ | 上場 | 創業 | 主な加盟店基盤 | 公表加盟店数 | カードブランド対応 | コード決済対応 | A2A / Bank Pay 対応 | コンビニ / 銀行振込 | Suica / IC プリペイド | BNPL / 後払い統合 | 精算速度（典型） | 手数料モデル（小規模加盟店基準） | 業種特化 | アクワイアラ役割（自社/外部） | M&A / 親会社履歴 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **[[payment-firms/gmo-payment-gateway\|GMO-PG]]** | [[business/gmo-internet-group\|GMO Internet Group]] | TSE PRIME 3769 | 1995 （カードコマースとして） | 大企業 + 中堅 EC | 約 30万+ 店舗 | Visa / MC / JCB / AMEX / Diners / Discover | PayPay / d払い / au PAY / 楽天ペイをゲートウェイ経由で対応 | Bank Pay / 銀行振込 | 対応（複数コンビニ） | 限定的 | BtoB 後払い自社 + 3rd-party | T+5 から T+M まで設定可能 | 取扱高に応じた交渉制、大口では低水準 | 複数業種、大企業 | 自社加盟店契約 + 複数アクワイアラ・ルーティング | GMO group 内部、[[card-issuers/smbc-card\|SMBC Card]] との SMBC GMO PAYMENT JV |
| **[[payment-firms/gmo-epsilon\|GMO Epsilon]]** | [[business/gmo-internet-group\|GMO Internet Group]] | 子会社 | 2000s era | 中小 EC、コンテンツ / サブスクリプション | 数万規模 | Visa / MC / JCB / AMEX | PayPay / d払い / au PAY 等 | Bank Pay | 対応 | 限定的 | 3rd-party 後払い統合 | T+M から T+5  | 最低水準は低いが、GMO-PG 大企業向けより見出し料率は高い | 小規模加盟店 EC | GMO-PG インフラ / 外部アクワイアラへの通過 | GMO Internet Group 内部で位置づけ |
| **[[payment-firms/sb-payment-service\|SB Payment Service]]** | SoftBank Group + PayPay FG | 子会社 | 2004 （Yahoo! ウォレット前身） | Yahoo! Japan Shopping、ZOZOTOWN、LINE-EC、外部 | 数十万規模 | Visa / MC / JCB / AMEX | PayPay（深い統合）+ 楽天ペイ / au PAY / d払い | Bank Pay | 対応 | 限定的 | PayPay あと払い / BNPL 統合 | T+M 伝統型、PayPay 起点では高速化 | 交渉制、PayPay 加盟店に有利な料率 | SoftBank エコシステム + LINE 連携 EC | 自社加盟店契約 | Yahoo!ウォレット前身、PayPay FG 傘下で再編 |
| **[[payment-firms/dg-financial-technology\|DG Financial Technology]]** | Digital Garage（TSE PRIME 4819） | 子会社 | Veritrans の系譜 | 大企業 + クロスボーダー EC | 数万規模 | Visa / MC / JCB / AMEX / Diners / UnionPay | 対応（複数ウォレット） | Bank Pay | 対応 | 限定的 | 3rd-party 後払い統合 | 設定可能 | 大企業クロスボーダー向けプレミアム | 大企業クロスボーダー | 自社加盟店契約 | Digital Garage が Veritrans を買収、Square 日本直接参入前は Square Japan パートナー |
| **[[payment-firms/netstars\|Netstars]]** | 独立系（Recruit Strategic Partners ほか出資） | 非上場 | 2009 | 複数ウォレット加盟店受入 | 数十万の加盟店拠点（複数ウォレット） | カード重視は限定的 | 主要コードウォレット + Alipay+ / WeChat Pay 全般 | 限定的 | 限定的 | 限定的 | 限定的 | T+M が典型 | 複数ウォレットの取引手数料 | コード先行の複数ウォレット集約 | 通過型集約事業者 | 独立系 QR 先駆者、Recruit 隣接の投資家基盤 |
| **Square Japan** | Block, Inc.（米国親会社） | 子会社 | 2013 日本参入 | 零細 / 小規模小売加盟店 | 数十万規模 | Visa / MC / JCB / AMEX / Diners / Discover | Square Reader とコード受入で PayPay / d払い | 限定的 | 限定的 | Square Reader 経由で Suica / IC カード | 限定的 | 翌営業日（みずほ / SMBC 提携） | 3.25-3.75% MDR、月額なし | 零細小売 / 飲食 | 自社加盟店契約 | Block（米国）親会社、Square Japan 前は DGFT-Square 提携 |
| **Stripe Japan** | Stripe, Inc.（米国親会社） | 子会社 | 2016 日本参入 | 開発者 / スタートアップ / デジタル | 公開情報では数万規模 | Visa / MC / JCB / AMEX | PayPay / Konbini / Bank Transfer / Apple Pay / Google Pay | Bank Transfer 経由で限定的 | Konbini Payment、Bank Transfer | 限定的 | 限定的（加盟店側カスタム統合） | 設定可能 | 3.6% 基準、取扱高階層あり | 開発者 API 優先 / デジタル | 自社加盟店契約 | Stripe（米国）親会社、mizuho-fg / SMBC と精算提携 |
| **[[payment-firms/paypal-pte-ltd-japan\|PayPal Japan]]** | PayPal Holdings（米国親会社） | 子会社 | 2000s era Japan | クロスボーダー EC、SaaS、国際加盟店 | 数十万規模 | PayPal ウォレット連携経由で Visa / MC / JCB / AMEX | PayPal ウォレット自体 | 限定的 | 限定的 | 限定的 | Paidy（[[payment-firms/paidy\|Paidy]]）後払い統合 | T+M、PayPal ウォレット内は PayPal 残高へ即時 | 3.6% + JPY 40 / tx 基準（変動） | クロスボーダー / 国際 EC | 自社加盟店契約 | Paidy を 2021-09 に買収（約 USD 2.7bn） |
| **Komoju (Degica)** | Degica（独立系 + 投資家支援） | 非上場 | 2013 | ゲーム / デジタルコンテンツ / インバウンド EC | 数万規模 | Visa / MC / JCB / AMEX | PayPay / d払い / 楽天ペイ / au PAY | Bank Transfer | Konbini Payment、Pay-Easy | 限定的 | Komoju Atobarai（自社ブランド BNPL） | 設定可能 | 決済手段別価格 | ゲーム / デジタルコンテンツ / クロスボーダー | 自社加盟店契約 + 自社 BNPL | 独立系、投資家支援 |
| **Amazon Pay** | Amazon Japan / Amazon 米国親会社 | 子会社 | 2007 日本開始 | EC 加盟店（Amazon 購入者アカウント活用） | 数万規模 | 購入者 Amazon アカウントの登録カード | 限定的 | 限定的 | 限定的 | 限定的 | 限定的 | 設定可能 | カードゲートウェイ料率に近い | EC チェックアウト摩擦低減 | 購入者アカウントをアンカーにした通過型 | Amazon 米国親会社戦略 |
| **Rakuten Payment** | [[payment-firms/rakuten-fg\|Rakuten FG]] | 子会社 | Rakuten Pay 2016 開始 | 楽天エコシステム加盟店 + 外部 | 数十万規模 | Rakuten Card 直接 + Visa / MC / JCB / AMEX | Rakuten Pay 起点 | 限定的 | 限定的 | 限定的 | Rakuten group BNPL 隣接 | T+M、楽天エコシステム内は優遇 | 交渉制、楽天エコシステムでは有利 | 楽天エコシステム加盟店 | 自社 + Rakuten Card 連携 | Rakuten Group 内部再編 |
| **[[payment-firms/recruit-mufg-business\|Recruit Card / Air PAY]]** | Recruit Holdings + [[megabanks/mufg\|MUFG]] JV | 子会社 | Air PAY 2012 開始 | 小規模加盟店 + 飲食店 + 個人サービス | 数十万の Air PAY アカウント | Visa / MC / JCB / AMEX / Diners | PayPay / d払い / au PAY / 楽天ペイ 等 | 限定的 | 限定的 | Air PAY Reader 経由で Suica / IC カード | 限定的 | T+M、みずほ / SMBC 口座は翌日オプション | 3.24-3.74% MDR、月額なし | 飲食 + 美容 + 小規模サービス | 自社加盟店契約 | カード / 決済のため Recruit-MUFG JV 設立 |

## 横軸 — 処理 GMV（公開報告からの概算示唆）

この同業群では GMV / 処理金額が一様に開示されていないため、この横軸は部分的である。GMO Payment Gateway は IR で年間処理金額を公表しており、大企業加盟店基盤を反映して兆円単位である。SB Payment Service の処理金額は、単独 PSP ではなく SoftBank Group / PayPay FG の連結開示に含まれる。DGFT の処理金額は Digital Garage のセグメント開示に含まれる。Square Japan、Stripe Japan、PayPal Japan、Komoju、Amazon Pay、Rakuten Payment は PSP セグメント単独では一貫して開示されていない。読者は、開示されている構成要素について親会社 IR を参照する必要がある。

| PSP | 処理金額の開示面 | 規模感（公開情報からの示唆） |
|---|---|---|
| **GMO-PG** | 自社 IR、四半期 | 年間処理金額は兆円規模 |
| **SB Payment Service** | SoftBank Group / PayPay FG 連結 | PayPay コード決済量を合算すれば兆円規模 |
| **DGFT** | Digital Garage セグメント開示 | 数千億円から低位兆円規模 |
| **Netstars** | 公開情報は限定的、複数ウォレット集約 | ウォレット別処理金額は公開上集約されない |
| **Square Japan** | Block 連結 | 日本部分は数百億円規模 |
| **Stripe Japan** | 単独開示なし | 公開されていない |
| **PayPal Japan** | 単独開示なし | 公開されていない |
| **Komoju** | 単独開示なし | 公開されていない |
| **Amazon Pay** | 単独開示なし | 公開されていない（Amazon セグメント） |
| **Rakuten Payment** | Rakuten Group セグメント開示 | Rakuten Pay + Rakuten Card を合算すれば兆円規模 |
| **Recruit / Air PAY** | Recruit Holdings セグメント開示 | 数千億円規模 |

具体的な数値は **公開ソースで引用されたものに限る** と扱い、対象年の最新 IR で検証する必要がある。EC 浸透率の変化と PSP 加盟店離脱により、処理金額は年ごとに大きく動く。

## PSP 横断の技術的差別化

| 機能 | GMO-PG | GMO Epsilon | SBPS | DGFT | Netstars | Square | Stripe | PayPal | Komoju | Amazon Pay | Rakuten Pay | Recruit / Air PAY |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| EMV 3-DS 2.x 対応（2025-03 義務化） | 対応 | 対応 | 対応 | 対応 | N/A（コード先行） | 対応 | 対応 | 対応 | 対応 | 対応 | 対応 | 対応 |
| トークン化（ネットワークトークン） | 対応 | 対応 | 対応 | 対応 | N/A | 対応 | 対応 | 対応 | 対応 | 対応 | 対応 | 対応 |
| 継続課金 / サブスクリプション | 対応 | 対応 | 対応 | 対応 | 限定的 | 対応（Subscription） | 対応（Billing） | 対応（Subscriptions） | 対応 | 限定的 | 対応 | 限定的 |
| Apple Pay / Google Pay | 対応 | 対応 | 対応 | 対応 | 限定的 | 対応 | 対応 | 対応 | 対応 | 限定的 | 対応 | 対応 |
| 多通貨精算 | 対応（限定的） | 限定的 | 限定的 | 対応（強み） | 限定的 | 限定的（日本のみ） | 対応 | 対応 | 対応（クロスボーダー強み） | 限定的（日本-USD） | 限定的 | 限定的 |
| マーケットプレイス / 分割支払 | 対応（カスタム） | 限定的 | 対応 | 対応 | 限定的 | 対応（一部） | 対応（Connect） | 対応（Adaptive） | 対応 | 限定的 | 対応 | 限定的 |
| カスタム照合ファイル | 対応 | 対応 | 対応 | 対応 | 対応 | 限定的 | 対応 | 対応 | 対応 | 対応 | 対応 | 対応 |
| インバウンド観光客向けウォレット対応（Alipay+, WeChat Pay） | 対応（提携経由） | 限定的 | 対応（提携経由） | 対応（強み） | 対応（ネイティブ） | 限定的 | 限定的 | 限定的 | 対応 | 限定的 | 限定的 | 対応（提携経由） |

## 手数料経済性 — 小規模加盟店の見方

商店街の小規模加盟店がどの PSP を導入するかを決める場合、見出し手数料の比較は通常次のように見える。実際の手数料は加盟店ごと、MCC ごとに交渉される。

| PSP | カード MDR 基準（小規模加盟店） | 取引固定費 | 月額最低 | 導入期間 | ハードウェア費用 |
|---|---|---|---|---|---|
| **GMO-PG** | 取扱高に応じて交渉、通常 2.5-3.5% | 変動 | 大企業向けでは必要なことが多い | 数日から数週間 | EC: ゼロ、POS: 外部 |
| **GMO Epsilon** | 3.0-3.6% | 変動 | GMO-PG より低い | 数日から 1 週間 | EC: ゼロ |
| **SB Payment Service** | 交渉制 | 変動 | 必要なことが多い | 数日から数週間 | EC: ゼロ |
| **DGFT** | 交渉制、プレミアム階層 | 変動 | 大企業向けでは必要 | 数週間 | EC: ゼロ |
| **Netstars** | ウォレット別料率（1.8-3.0%程度が典型） | 変動 | 低め | 数日から 1 週間 | 印刷 QR または端末 |
| **Square Japan** | 3.25% Visa/MC、3.75% JCB/AMEX | なし | なし | 承認後 1 営業日 | JPY 7,980 （Square Reader）またはゼロ（スマホ mPOS） |
| **Stripe Japan** | 3.6% 基準 | なし | なし | 1-2 営業日 | なし（オンラインのみ） |
| **PayPal Japan** | 3.6% + JPY 40 / tx（変動） | JPY 40 | なし | 1-2 営業日 | なし（オンラインのみ） |
| **Komoju** | 決済手段別価格（変動） | 変動 | なし | 1-2 営業日 | なし（オンライン） |
| **Amazon Pay** | カード MDR に近い | 変動 | なし | 数日 | なし（オンライン） |
| **Rakuten Pay** | 交渉制、楽天エコシステムでは有利 | 変動 | 低め | 数日から 1 週間 | EC: ゼロ |
| **Air PAY** | 3.24% Visa/MC、3.74% JCB/AMEX | なし | なし | 1-2 週間 | Air PAY Reader は加入 / キャンペーンで無料 |

## M&A と親会社履歴のパターン

日本の PSP 市場は、このスコアカードで見える三つの大まかな M&A / 再編期を経てきた。

1. **2010 以前 — 銀行側カード処理会社の統合。** 銀行 FG 系カード処理会社が現在の MUFG NICOS / SMBC Card 構成へ統合され、独立系 PSP が成長する余地が生まれた。
2. **2010年代 — 独立系 PSP の拡大。** [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] は [[business/gmo-internet-group|GMO Internet Group]] 傘下 + SMBC GMO PAYMENT JV により成長し、[[payment-firms/dg-financial-technology|DGFT]] は Digital Garage の Veritrans 買収で成長し、[[payment-firms/sb-payment-service|SB Payment Service]] は SoftBank Group 再編で拡大した。Netstars は QR 集約専業として登場した。
3. **2020年代 — グローバルチェックアウト参入 + エコシステム・アンカー統合。** Stripe Japan、Square Japan、PayPal Japan / [[payment-firms/paidy|Paidy]] 買収（2021-09）がグローバルチェックアウト PSP の足場を確立した。PayPay FG / SoftBank はウォレット側受入を SB Payment Service の下で統合し、Rakuten Payment は楽天側受入を統合した。

第四期は、2024-2026 の窓で **BNPL 統合**（PayPal 傘下 Paidy、Komoju Atobarai 等）と **A2A 受入**（加盟店直接 Bank Pay）をめぐって始まりつつある。どちらもまだ部分的であり、PSP の経済性を作り替える。

## 境界事例

- **「[[payment-firms/netstars|Netstars]] は PSP か、ウォレット集約事業者か。」** 両方である。Netstars は加盟店ゲートウェイ（PSP 機能）とウォレット・ルーティング集約（複数ウォレット受入）を提供する。カードアクワイアラではなく、METI のクレジットカード番号等取扱契約締結事業者一覧に主要なカード契約締結事業者として掲載されているわけではないが、ウォレット側契約を通じてコード決済取引をルーティングする。
- **「[[payment-firms/freee|freee]] や [[payment-firms/money-forward|Money Forward]] は PSP か。」** 古典的な意味では違う。これらは会計 / SaaS プラットフォームであり、決済受入機能（freee Pay、Money Forward Pay）を持つが、基礎となる PSP（多くは GMO-PG、GMO Epsilon、提携アクワイアラ）へルーティングする。加盟店側ソフトウェアに決済統合を持つのであって、PSP そのものではない。
- **「[[payment-firms/famima-digital-one|FamiMa Digital One]] や [[payment-firms/seven-payment-service|Seven Payment Service]] は PSP か。」** これらはコンビニ FG 系の決済運営者で、自社小売ネットワーク向けの決済受入機能に加え、より広いコード決済 / ウォレット役割を持つ。ただし GMO-PG / SBPS / DGFT 型の複数加盟店 PSP ではない。加盟店ゲートウェイ PSP より [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer / prepaid boundary]] に近い。
- **「[[payment-firms/jal-payment-port|JAL Payment Port]] はどうか。」** JAL グループの決済および JAL グループ / マイレージプログラム向け加盟店直接精算に焦点を当てる [[payment-firms/jal-payment-port|JAL Payment Port]] 事業体であり、汎用の複数加盟店 PSP ではない。
- **「UnionPay International Japan、Visa Worldwide Japan、Mastercard Japan はどうか。」** これらはスキーム / ブランド運営者であり、PSP ではない。役割スタックでは PSP の上位レイヤーに位置する。役割分離は [[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]] を参照。
- **「[[card-issuers/smbc-card|SMBC Card]] のような加盟店アクワイアラ線はどこに入るか。」** SMBC Card はイシュアでありアクワイアラでもあるが、PSP ではない。加盟店と SMBC Card の関係は、直接加盟店アクワイアラ関係よりも、通常は PSP（SMBC GMO PAYMENT JV 経由の GMO-PG など）を介して仲介される。SMBC Card のアクワイアラ線は [[payments/card-acquiring-japan-stack|Japan card acquiring stack]] の項目に現れる。
- **「このマトリクスは [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] とどう関係するか。」** そのマトリクスはカード vs コード vs A2A vs 前払をスキーム分類レベルで扱う。このマトリクスは、四つのスキーム分類すべての加盟店受入側にある PSP / 加盟店ゲートウェイ次元を分解する。両者は直交する。

## PSP に対する直近の規制圧力

| 日付 | 出典 | 変更点 |
|---|---|---|
| 2018 | METI | 改正割賦販売法が加盟店調査義務を強化し、加盟店契約締結事業者登録を持つ PSP のオンボーディングコストを引き上げた |
| 2020-2021 | METI / J-CSC | クレジットカード・セキュリティガイドライン 5.0 / 5.1  — PCI DSS 期待、不正アクセス脆弱性診断義務、非保持化の徹底 |
| 2022-04-08 | JFTC | クレジットカード加盟店手数料報告 — PSP と加盟店間手数料の透明性に圧力 |
| 2023-06-01 | METI + JFTC | JCB 加盟店手数料の配分率開示 — JCB 取扱量をルーティングする PSP に影響 |
| 2024-2025 | METI / J-CSC | ガイドライン 6.0 / 6.1: **EC カード決済で EMV 3-DS が 2025-03から必須化**。非保持化ルールが厳格化し、脆弱性診断義務が拡大。EC-PSP に重い対応負担がかかる |
| 2025-2026 | METI | 手数料開示圧力がカード分類からコード決済・前払 PSP レイヤーへ広がり続ける |

2025-03 の EMV 3-DS 義務化は、EC-PSP セグメントにとって最も重要な変化である。3-DS 認証をチェックアウトフローへ組み込むコンプライアンス作業が PSP 側にかかるためである。

## 他マトリクスとの相互参照

- vs **[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]**: そのマトリクスはカード / コード / A2A / 前払のスキーム分類を運営者レベルで扱う。このマトリクスは、多くの主要 PSP が複数スキーム決済を受け入れるため、四分類すべてにまたがる加盟店側ゲートウェイ / PSP レイヤーを分解する。
- vs **[[payments/card-acquiring-japan-stack|Japan card acquiring stack]]**: その項目は POS / EC チェックアウトからイシュア精算までの技術スタックを扱う。このマトリクスは、そのスタックのゲートウェイ / PSP レイヤーに位置する具体的な運営者名を挙げる。
- vs **[[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]]**: その項目は役割分離フレームワークを確立する。このマトリクスは PSP / 処理事業者列に具体名を入れ、どの事業者が追加的に加盟店契約締結事業者役割を持つかを示す。
- vs **[[payments/psp-merchant-settlement-risk|PSP merchant settlement risk]]**: その項目は、加盟店が PSP に精算を依存する場合のリスクプロファイルを扱う。このマトリクスは、そのリスクプロファイルが載る運営者別の棚卸しを提供する。
- vs **[[payments/japan-jcb-issuer-ecosystem-positioning-matrix|Japan JCB issuer ecosystem positioning matrix]]** および **[[payments/japan-bnpl-pay-later-operator-registry-matrix|BNPL operator registry matrix]]**: それらのマトリクスは、それぞれイシュア側と BNPL 運営者側を扱う。このマトリクスは、両者に対する加盟店ゲートウェイ側の補完である。

## 加盟店の PSP 選定レンズ

日本の小規模または中規模加盟店が PSP を選ぶ場合、通常はカード受入範囲、コード決済受入範囲、精算速度要件、統合複雑性への許容度という四つの判断に直面する。このマトリクスは次の判断ツリーの近道を支える。

| 加盟店プロファイル | 適合しやすい PSP クラスター |
|---|---|
| **零細 / 個人 / カジュアル販売者、小売 POS** | Square Japan（無料リーダー、翌日精算）または Air PAY（Recruit、HotPepper チャネル付きで類似経済性） |
| **中小 EC、開発者に優しい、デジタル先行** | Stripe Japan、Komoju（業種特化）、または GMO Epsilon |
| **複数アクワイアラ・ルーティングと統合深度が必要な大企業 EC** | [[payment-firms/gmo-payment-gateway\|GMO Payment Gateway]]、[[payment-firms/dg-financial-technology\|DGFT]]（クロスボーダー）、または [[payment-firms/sb-payment-service\|SB Payment Service]]（PayPay 起点） |
| **訪日・海外購入者に販売するクロスボーダー EC** | [[payment-firms/paypal-pte-ltd-japan\|PayPal Japan]]、DGFT、Komoju（クロスボーダー特化） |
| **コード先行の複数ウォレット受入（小売チェーン、コンビニ、ドラッグストア）** | [[payment-firms/netstars\|Netstars]]（複数ウォレット集約） |
| **Rakuten / Amazon / PayPay / Recruit 内のエコシステム起点加盟店** | まずエコシステム純正 PSP（[[payment-firms/rakuten-fg\|Rakuten Payment]] / Amazon Pay / [[payment-firms/sb-payment-service\|SB Payment Service]] / Recruit）、非エコシステム取扱分は汎用 PSP |
| **予約フロー統合が必要な高取扱高の飲食 / 個人サービス** | Recruit / Air PAY（HotPepper Beauty / Gourmet 統合） |
| **ゲーム / デジタルコンテンツ / マイクロトランザクション加盟店** | Komoju（業種特化） |

このマトリクスは単一の「最良」回答を出すものではない。加盟店の具体的な運用プロファイル、精算サイクル要件、統合能力によって、どの PSP クラスターが適合するかは変わる。多くの加盟店は、取扱量の異なる部分に対して **複数の PSP** を併用する（例: 主要カード受入に GMO-PG + 複数ウォレットコードに Netstars + 対面イベントに Square）。

## 関連項目

- [[payments/INDEX]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/psp-merchant-settlement-risk]]
- [[payments/account-to-account-payment-japan]]
- [[payments/merchant-bank-pay-account-direct-acquiring]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/japan-interchange-and-merchant-fee-stack]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/cashless-jp-landscape]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/japan-payment-clearing-and-settlement-infrastructure]]
- [[payment-firms/gmo-payment-gateway]]
- [[payment-firms/gmo-epsilon]]
- [[payment-firms/sb-payment-service]]
- [[payment-firms/dg-financial-technology]]
- [[payment-firms/netstars]]
- [[payment-firms/freee]]
- [[payment-firms/money-forward]]
- [[payment-firms/famima-digital-one]]
- [[payment-firms/seven-payment-service]]
- [[payment-firms/recruit-mufg-business]]
- [[payment-firms/paypal-pte-ltd-japan]]
- [[payment-firms/paidy]]
- [[payment-firms/rakuten-fg]]
- [[payment-firms/paypay]]
- [[business/gmo-internet-group]]
- [[INDEX|FinWiki index]]

## 出典

- GMO Payment Gateway 公式企業サイトおよび IR: https://corp.gmo-pg.com/ および https://corp.gmo-pg.com/ir/
- GMO Epsilon (Epsilon): https://www.epsilon.jp/
- SB Payment Service (SBペイメントサービス): https://www.sbpayment.jp/
- DG Financial Technology (DGFT): https://www.dgft.jp/
- Netstars (StarPay): https://netstars.co.jp/
- Square Japan: https://squareup.com/jp/
- Stripe Japan: https://stripe.com/jp
- PayPal Japan 事業者向けサイト: https://www.paypal.com/jp/business
- Komoju (Degica): https://komoju.com/ja/
- Amazon Pay Japan: https://pay.amazon.co.jp/
- Rakuten Payment: https://payment.rakuten.co.jp/
- Recruit Card / Air PAY: https://recruit-card.jp/
- METI: 登録包括信用購入あっせん業者一覧ポータル - https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
- METI: クレジットカード番号等取扱契約締結事業者 PDF — https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
- FSA: licensed / registered operators portal — https://www.fsa.go.jp/menkyo/menkyo.html
- FSA: 資金移動業者 list PDF — https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
- Payments Japan Association 公開資料 - https://paymentsjapan.or.jp/category/publications/
