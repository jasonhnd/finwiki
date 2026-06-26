---
source: payments/japan-bnpl-pay-later-operator-registry-matrix
source_hash: 9ca5e6397c450602
lang: ja
status: machine
fidelity: ok
title: "Japan BNPL / pay-later 事業者 registry matrix"
translated_at: 2026-06-19T06:09:18.049Z
---

# Japan BNPL / pay-later 事業者 registry matrix

## TL;DR

日本の BNPL / 後払い のランドスケープは、主に **割賦販売法** によって、**個別信用購入あっせん業者** の登録ラインを通じて規律されており、経済産業省（METI）が主要な規制当局である。METI の登録個別信用購入あっせん業者一覧には、[[payments/credit-purchase-card-operators-japan-index|credit-purchase card 事業者 registry]] によれば 2026-04 月末時点で約 138 の登録事業者が含まれており、そのうちより小さな部分集合 — おおよそ 15-20  — が、意味のある規模で消費者に見える BNPL / 後払い 商品を積極的に運営している。このマトリクスは、BNPL の経済性を決定する各軸にわたってそれらのアクティブな事業者をプロファイルする：親会社／所有、取引モデル（一括後払い vs 分割）、信用リスクモデル（事業者が損失を負う vs 加盟店が損失を負う vs 共有）、資金源、加盟店カテゴリーの特化、月間取引高のオーダー、登録年、そして 2020 改正割賦販売法 の枠組み（認定包括 / 少額包括 / 個別 / 適用除外）の下での規制ティア。このマトリクスは [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]] の事業者レベルの対をなすものであり、[[payments/japan-consumer-credit-operator-comparison-matrix|Japan consumer-credit 事業者 comparison matrix]] の BNPL 固有の断面である。

## ウィキ上の位置づけ

これは BNPL の事業者レベルのリファレンスとして [[payments/INDEX|payments index]] の配下にある。商品ごとの分類テストは [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]]、METI の登録の追跡は [[payments/credit-purchase-card-operators-japan-index|credit-purchase card 事業者 registry]]、より広い消費者信用の文脈における BNPL カテゴリーは [[payments/japan-consumer-credit-operator-comparison-matrix|Japan consumer-credit 事業者 comparison matrix]]、スキーム横断の経済性ビューにおける BNPL の行は [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]、BNPL が逸脱する役割分離の枠組みは [[payments/japan-card-issuer-acquirer-processor-split|card 発行会社 / アクワイアラ / processor split]]、そして事業者のアンカー [[payment-firms/net-protections-hd|Net Protections HD]]、[[payment-firms/atone|atone]]、[[payment-firms/kuroneko-atobarai|Kuroneko Atobarai]]、[[payment-firms/gmo-postpay|GMO Postpay]]、[[payment-firms/paidy|Paidy]]、[[payment-firms/mercari-hd|Mercari HD]]、[[card-issuers/aplus|APLUS]]、[[card-issuers/jaccs|JACCS]]、[[card-issuers/orico|Orico]]、[[card-issuers/credit-saison|Credit Saison]] と合わせて読むこと。

## なぜこのマトリクスが重要か

BNPL は、日本で最も規制上あいまいな決済カテゴリーである。同じチェックアウト UX（「コンビニ／銀行振込で後払い」または「翌月払い」のボタン）が、(a) 割賦販売法の下での個別信用購入あっせん登録事業者、(b) 個別登録を回避する適用除外しきい値の後払い構造、(c) 2020 改正割賦販売法 で導入された認定包括信用購入あっせん または 少額包括信用購入あっせん のレジーム、(d) 既存のカード発行会社の BNPL 拡張における包括信用購入あっせん のレジーム（PayPay あと払い → [[card-issuers/paypay-card|PayPay Card]] バックエンド）、または (e) 資金移動 + 後払い 層を組み合わせるハイブリッド（Mercari / Merpay）を通じてルーティングされうる。事業者ごとのビューがなければ、読者はチェックアウトで同一に見えるが、実質的に異なるライセンススタック、信用リスクモデル、消費者保護レジーム上にある事業者を混同してしまう。このマトリクスは、[[payments/japan-bnpl-credit-purchase-boundary|BNPL boundary]] ページが指し示す事業者レベルのサーフェスである。

消費者庁（CAA）は、**BNPL の現金化目的の悪用**（現金化目的後払い）および過剰借入を引き起こす UX パターンに関するアクティブな警告チャネルを維持している — 出典の CAA の決済トラブル注意喚起ページを参照。このマトリクスは規制ティアと登録履歴を追跡しており、読者がどの事業者がどのレベルの監督下にあるかを特定できるようにする。

### Net Protections HD (NP 後払い, TSE PRIME 7383)

[[payment-firms/net-protections-hd|Net Protections HD]]（TSE PRIME 7383）は日本の最も早期に動いた BNPL ピュアプレイであり、EC 加盟店が「コンビニ／銀行振込で後払い」のオプションとして付ける、請求書ベースの BtoC 商品である **NP 後払い** を運営している。グループはまた、**atone**（消費者側の月次サイクル BNPL ウォレット）、**NP 掛け払い**（BtoB 請求）、**AFTEE**（台湾／ベトナムを対象とする東南アジア BNPL）を運営している。NP 後払い の決定的な特徴は **保証モデル BNPL** である — Net Protections が加盟店手数料と引き換えに回収不能リスクを吸収するため、加盟店は債権管理を完全にオフロードする。METI 一覧に個別信用購入あっせん業者として登録。2021-12 に TSE PRIME に上場。

### atone (Net Protections の子会社)

[[payment-firms/atone|atone]] は Net Protections の消費者側の月次サイクル BNPL ウォレットであり、NP 後払い の取引ごとの請求モデルとは区別される。atone は、複数の加盟店にまたがる BNPL 購入を一つの月次のコンビニ／銀行振込の支払いに集約する口座を消費者に与える、UX 的には [[payment-firms/paidy|Paidy]] に類似するが、独立した（非 PayPal）経済性の上にある。規制の観点からは、atone は NP 後払い と同じ Net Protections のライセンススタック（割賦販売法個別信用購入あっせん）を使用する。ブランドの分割により、Net Protections は NP 後払い の「加盟店側 BNPL ゲートウェイ」ブランドを希薄化することなく、「月次サイクル BNPL ウォレット」セグメントで競争できる。

### Kuroneko Atobarai (ヤマトフィナンシャル・ホールディングス)

[[payment-firms/kuroneko-atobarai|Kuroneko Atobarai (クロネコ後払い)]] は、ヤマト運輸の全国配送ネットワークを活用する、ヤマトグループの金融エンティティが運営する BNPL 商品ラインである。特徴的な加盟店セグメントの適合は **ヤマト配送で発送される EC 購入** である — BNPL の回収を配送確認とバンドルでき、すでにヤマトを主要キャリアとして使用している EC 加盟店にとって、Kuroneko Atobarai に構造的なコスト優位性を与える。METI 登録個別信用購入あっせん業者一覧に登録。この商品は、加盟店の価値が「配送 + 回収を一つのパッケージで扱う」である「発送バンドル型の請求書 BNPL」セグメントで、[[payment-firms/net-protections-hd|Net Protections]] NP 後払い と自然に適合する。

### GMO Postpay (GMO ペイメントゲートウェイグループ)

[[payment-firms/gmo-postpay|GMO Postpay]] は [[business/gmo-internet-group|GMO Internet Group]] / [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] の 後払い 商品ラインであり、カード／コード／コンビニ決済方法と並ぶ 後払い オプションとして、より広い GMO-PG の加盟店ベースと統合するよう設計されている。GMO-PG 統合は、すでに GMO-PG にいる加盟店が、別個のゲートウェイ関係を設定することなく追加の決済方法として GMO Postpay を追加できることを意味する — 後払い 商品にとって構造的なチャネル優位性である。METI 登録個別信用購入あっせん業者一覧に登録。GMO-PG の約 30万 の加盟店ベースへの自然なクロスセルが主要なスケールドライバーである。

### Paidy (PayPal 所有)

[[payment-firms/paidy|Paidy]] は PayPal が所有する消費者側の月次サイクル BNPL 事業者であり、標準の月次コンビニ／銀行振込の支払い、3-pay（3 回の月次分割に分ける）、および高額購入向けのより長い分割バリアントを含む複数商品のバリアントを持つ。2021-09 に PayPal が約 2.7 億ドルで買収（[[payment-firms/paypal-pte-ltd-japan|PayPal Pte. Ltd. Japan]] エントリおよび PayPal Holdings の公開開示による）。Paidy の特徴的なスケール優位性は、**主要 EC 加盟店との統合（Amazon Japan が旗艦的な統合）** と PayPal のグローバルなフットプリントのクロスレバレッジである。METI 登録個別信用購入あっせん業者一覧に登録。

### Komoju Atobarai (Degica)

Komoju Atobarai は Degica / Komoju 自社ブランドの 後払い 商品であり、Komoju のカード／コード／コンビニ決済方法のカバレッジと並んで 後払い を提供したい加盟店向けに Komoju PSP ゲートウェイに統合されている（Komoju の垂直特化はデジタルコンテンツ／ゲーミング／クロスボーダー — [[payments/japan-merchant-psp-competitive-scorecard|Japan 加盟店 PSP competitive scorecard]] を参照）。METI 登録個別信用購入あっせん業者一覧に登録。自然な適合は、アクティブなクレジットカードを持たないカード保有者向けの代替として 後払い を望むデジタルコンテンツ／ゲーミングの加盟店である。

### Smarpay

Smarpay（株式会社Smartpay 等）は、BNPL ローンチの 2020年代の波で登場した比較的新しい BNPL の参入者であり、分割払いのオプション性を持つ消費者側の BNPL 商品を提供している。この事業者は METI 登録個別信用購入あっせん業者一覧に登録されている。読者の注意：このカテゴリークラスターの独立系 BNPL 事業者は規模が可変であり、事業者の継続性は消費者信用サイクルの状況に敏感である。

### Lattepay

Lattepay は、日本における 2020-2022 の BNPL ローンチの波に参加した、より小規模な BNPL 事業者の一つであり、割賦販売法個別信用購入あっせん のルートで登録されている。Smarpay と同様に、Lattepay は NP / Paidy / Atone より小規模で運営しており、事業者の継続性について読者の注意が当てはまる。支配的なピュアプレイと並んで複数の小規模 BNPL 事業者が存在することは、登録の障壁が意味があるが禁止的ではない 2020 改正割賦販売法後の環境の特徴である。

### Mercari Smart Money / Merpay BNPL 拡張

[[payment-firms/mercari-hd|Mercari HD]]（TSE PRIME 4385）は決済部門として [[payment-firms/merpay|Merpay]] を運営しており、メルペイ翌月払い（Merpay next-month payment）および Mercari Smart Money / メルペイスマートマネー の貸付商品を通じて BNPL に拡張している。決定的な特徴は **Mercari のピアツーピア・マーケットプレイスとの垂直統合** である — Merpay は、資金源と回収の両方が Mercari 経済圏内にある BNPL を提供でき、独立系 BNPL 事業者とは構造的に異なるユニットエコノミクスを与える。Merpay のライセンススタックは、信用購入がそのラインを通じてルーティングされる場合の資金移動業 と個別信用購入あっせん の登録を組み合わせ、さらに現金ベースの貸付商品向けの貸金業登録を組み合わせている — BNPL ピュアプレイの間では稀な複数ライセンスの組み合わせである。

### b/43 (Smartbank)

b/43 （Smartbank, Inc. が提供）は、分割／後払い のオプション性を持つプリペイド Visa カード + 家族口座支出管理の商品である。b/43  商品は、ピュア BNPL のピュアプレイよりも、BNPL 機能を持つ **家族金融／家計予算ツール** に近い位置づけをしている。信用／後払い のコンポーネントは、特定の商品機能に応じて、割賦販売法個別 / 資金決済法前払い のラインの下で適切にライセンスされている。読者の注意：b/43  のような主にプリペイドの商品の BNPL 拡張は、NP 後払い や Paidy のようなピュア BNPL のピュアプレイとはわずかに異なるカテゴリーにある。

### NP後払い (Net Protections の下での別個のブランド掲載)

NP後払い は、Net Protections の請求書ベースの BNPL 商品（Net Protections HD のセクションでカバーされたのと同じ商品）の顧客向けブランドである。ここで別個に掲載されているのは、**加盟店と消費者が一般に NP 後払い のブランドを Net Protections の法人名とは独立して認識している** ためであり、登録は持株会社エンティティではなく 株式会社ネットプロテクションズ（事業子会社）が保有しているためである。ブランド vs エンティティの区別は、METI 登録個別信用購入あっせん業者一覧に対する登録の照会にとって重要である — 登録簿の事業者名は事業子会社である。

### 三井住友カード / SMBC 側の BNPL 拡張

[[card-issuers/smbc-card|SMBC Card]] は、その Vpass / 三井住友カード あと払い + V Point 経済圏を通じて、カード保有者が特定の取引を購入後に分割払いの条件に変換できるようにする BNPL 隣接の拡張を持つ。これらの拡張は、原資産となる債権がカード発行の与信枠の債権であるため、別個の個別登録ではなく、既存の包括信用購入あっせん（カード発行会社）登録の上にある。消費者の観点からは BNPL のように見えるが、規制の観点からはカード与信枠の拡張機能である。同じパターンが [[card-issuers/mufg-nicos|MUFG NICOS]]、[[card-issuers/rakuten-card|Rakuten Card]]、その他の主要なカード発行会社にも当てはまる。

### PayPay あと払い (PayPay Card バックエンド経由)

PayPay あと払い は [[payment-firms/paypay|PayPay]] のウォレット UX を通じて提供される BNPL のように感じる商品であるが、与信枠のバックエンドは [[card-issuers/paypay-card|PayPay Card]]（カード発行会社エンティティ）である。PayPay ウォレットは消費者向けの UX 層として機能し、PayPay Card の包括信用購入あっせん 登録が与信債権を担う。これは **境界ケース** としてここに含まれている — 消費者の観点からは BNPL 相当であるが、規制の観点からはカード発行会社の登録の上にある。同じパターンが、リンクされたカード発行会社のバックエンドを通じて BNPL 相当の機能を拡張する d払い / au PAY / 楽天ペイ にも当てはまる。

### 信販側の BNPL：APLUS、JACCS、Orico、Credit Saison

[[card-issuers/aplus|APLUS]]（[[regional-banks/sbi-shinsei-bank|SBI Shinsei]] グループ）、[[card-issuers/jaccs|JACCS]]（[[megabanks/mufg|MUFG]] 持分法）、[[card-issuers/orico|Orico]]（[[megabanks/mizuho-fg|Mizuho]] + 伊藤忠）、[[card-issuers/credit-saison|Credit Saison]]（独立系）はすべて、その主要な信販事業ラインとして個別信用購入あっせん 登録を保有し、スタンドアロンの消費者向けブランドとして、または加盟店がフロントに立つ BNPL の提供のホワイトラベルのバックエンドとして、BNPL スタイルの商品を運営している。ピュアプレイ BNPL に対する彼らの構造的優位性は **複数ライン信販の経済性** である — BNPL チャネルを通じて獲得した顧客を、オートローン、リフォームローン、教育ローン、カード商品にクロスセルでき、単一商品の BNPL ピュアプレイが達成できない複数商品の LTV を生み出す。彼らがこのマトリクスに含まれているのは、ピュアプレイの意味で「BNPL 事業者」だからではなく、**ピュアプレイ BNPL 事業者が登録する個別信用購入あっせん 登録簿の主要な参加者だから** であり、信販ショッピングクレジットと BNPL の間の規制上の線が構造的にあいまいだからである。

## 大比較マトリクス表

| 事業者 | 親会社／所有 | ライセンス登録 | 上場 | 登録年（概算） | 取引モデル | 信用リスクモデル | 資金源 | 主要加盟店カテゴリー | 月間取引高のオーダー | 規制ティア（2020 改正割賦販売法 の枠組み） |
|---|---|---|---|---|---|---|---|---|---|---|
| **[[payment-firms/net-protections-hd\|Net Protections / NP 後払い]]** | 独立系（上場） | 個別信用購入あっせん業者 (METI) | TSE PRIME 7383 (上場 2021-12) | 2010 以前 | 取引ごとの請求書；≤2か月または分割 | 事業者が損失を負う（保証モデル） | エクイティ + ABS パイプライン台頭中 | EC 全般（アパレル、化粧品、食品、一般小売） | 年間数千万件の取引 | 個別 |
| **[[payment-firms/atone\|atone (Net Protections)]]** | Net Protections の子会社 | 個別信用購入あっせん業者 (METI) | 子会社 | 2010年代半ば | 月次サイクル集約 BNPL ウォレット | 事業者が損失を負う | エクイティ + 親会社 | 複数加盟店 BtoC 消費者 | 数百万ユーザー | 個別 |
| **[[payment-firms/kuroneko-atobarai\|Kuroneko Atobarai (Yamato)]]** | ヤマトフィナンシャル・ホールディングス | 個別信用購入あっせん業者 (METI) | 子会社 | 2000年代 | 取引ごとの請求書；≤2か月 | 事業者が損失を負う（保証モデル） | ヤマトグループのバランスシート | EC 全般（ヤマト配送で発送） | 年間数千万件の取引 | 個別 |
| **[[payment-firms/gmo-postpay\|GMO Postpay]]** | [[business/gmo-internet-group\|GMO Internet]] / [[payment-firms/gmo-payment-gateway\|GMO-PG]] | 個別信用購入あっせん業者 (METI) | 子会社 | 2010年代 | 取引ごとの請求書；≤2か月または分割 | 事業者が損失を負う + 加盟店共有のバリアント | GMO グループのバランスシート + ABS | EC 全般（GMO-PG の加盟店ベース） | 年間数百万件の取引 | 個別 |
| **[[payment-firms/paidy\|Paidy]]** | PayPal Holdings ([[payment-firms/paypal-pte-ltd-japan\|PayPal Pte. Ltd. Japan]])；2021-09 買収 | 個別信用購入あっせん業者 (METI) | PayPal の子会社 | 2010年代 | 月次サイクル集約 BNPL + 3-pay + 分割 | 事業者が損失を負う；ABS / 証券化 | エクイティ + 債権証券化ルート | EC 全般；Amazon Japan の旗艦統合 | 年間数千万件の取引 | 個別（認定/少額包括 のウォッチ付き） |
| **Komoju Atobarai (Degica)** | Degica / Komoju（独立系） | 個別信用購入あっせん業者 (METI) | Degica の子会社 | 2010年代-2020年代 | 取引ごとの請求書 | 事業者が損失を負う + 加盟店共有 | Komoju グループのバランスシート | デジタルコンテンツ、ゲーミング、クロスボーダー EC | より小規模；垂直特化 | 個別 |
| **Smarpay** | 独立系（Smartpay） | 個別信用購入あっせん業者 (METI) | 非上場 | 2020-2022 ローンチの波 | 取引ごと + 分割 | 事業者が損失を負う；より小規模 | エクイティ / 投資家の裏付け | EC 全般 | より小規模 | 個別 |
| **Lattepay** | 独立系 | 個別信用購入あっせん業者 (METI) | 非上場 | 2020-2022 ローンチの波 | 取引ごと | 事業者が損失を負う；より小規模 | エクイティ | EC 全般 | より小規模 | 個別 |
| **[[payment-firms/merpay\|Merpay / Mercari Smart Money]]** | [[payment-firms/mercari-hd\|Mercari HD]] (TSE PRIME 4385) | 個別信用購入あっせん業者 + 資金移動業 + 貸金業（複数ライセンス） | Mercari HD の子会社 | Merpay は 2010年代；Smart Money は後に | 月次サイクル集約 BNPL + 翌月払い + 現金貸付 | Mercari 経済圏内で事業者が損失を負う | Mercari グループのバランスシート | Mercari マーケットプレイス + 外部加盟店 | 年間数千万件の取引 | 個別 + 拡張における包括 |
| **b/43 (Smartbank)** | Smartbank, Inc.（独立系） | プリペイド（前払い式） + 与信拡張向け 個別信用購入あっせん | 非上場 | 2020年代 | プリペイド + 後払いオプション性のある家族金融 | 主にプリペイド；与信枠はより小規模 | エクイティ / 投資家の裏付け | 家族／家計金融 | より小規模 | 前払い式 + 個別（混合） |
| **NP後払い (別個のブランド)** | Net Protections の下で運営 | 個別信用購入あっせん業者 (METI) — Net Protections と同じ事業エンティティ | 上場エンティティの下のブランド | 2010 以前 | Net Protections HD のエントリと同じ | 事業者が損失を負う | エクイティ | EC 全般 | （Net Protections HD と同じ） | 個別 |
| **PayPay あと払い** | [[payment-firms/paypay\|PayPay]] ウォレット UX、[[card-issuers/paypay-card\|PayPay Card]] バックエンド | 包括信用購入あっせん（カード発行会社登録） | PayPay FG / SoftBank の子会社 | 2010年代（PayPay Card 設立） | カードラインの分割 / リボ + あと払い 機能 | カード発行会社モデル（事業者の信用審査） | カード発行会社のバランスシート + ABS パイプライン | PayPay 加盟店経済圏 + 一般 | 年間数千万件の取引 | 包括（カード発行会社ライン、個別 ではない） |
| **[[card-issuers/aplus\|APLUS]] BNPL 拡張** | [[regional-banks/sbi-shinsei-bank\|SBI Shinsei]] | 個別信用購入あっせん + 包括 | SBI 新生 の子会社 | 2010 以前 | 取引ごと + 分割；信販に根ざす | 信販が損失を負う；複数ライセンスの償却 | 銀行 FG の資金調達 + ABS | オート / ショッピング / 各種 | 年間数千万件の取引 | 個別 + 包括（信販、ピュア BNPL ではない） |
| **[[card-issuers/jaccs\|JACCS]] BNPL 拡張** | [[megabanks/mufg\|MUFG]] 持分法 | 個別信用購入あっせん + 包括 | TSE PRIME 8584 | 2010 以前 | 取引ごと + 分割 | 信販が損失を負う | 銀行 FG の資金調達 + ABS | オート / 教育 / リフォーム / 一般 | 年間数千万件の取引 | 個別 + 包括（信販） |
| **[[card-issuers/orico\|Orico]] BNPL 拡張** | [[megabanks/mizuho-fg\|Mizuho]] + 伊藤忠 | 個別信用購入あっせん + 包括 | TSE PRIME 8585 | 2010 以前 | 取引ごと + 分割 | 信販が損失を負う | 銀行 FG の資金調達 + ABS | オート / ショッピング / 一般 | 年間数千万件の取引 | 個別 + 包括（信販） |
| **[[card-issuers/credit-saison\|Credit Saison]] BNPL 拡張** | 独立系（上場） | 個別信用購入あっせん + 包括 | TSE PRIME 8253 | 2010 以前 | 取引ごと + カードラインのリボ | カード発行会社 + 信販の混合 | エクイティ + ABS | 一般消費者 + マルイ隣接の小売 | 年間数千万件の取引 | 個別 + 包括（カード発行会社 + 信販） |

### サイド軸 — 登録の追跡と監督ステータス

METI 登録個別信用購入あっせん業者 の PDF 一覧が正規の登録簿である。マトリクス内の特定の事業者に対する読者のワークフロー：

1. [[payments/credit-purchase-card-operators-japan-index|credit-purchase card 事業者 registry]] ポータルから METI 登録個別信用購入あっせん業者 の PDF を開く。
2. 事業エンティティ名で PDF を検索する（注：ブランド vs エンティティの区別 — 登録簿はブランドではなく 株式会社X を掲載する）。
3. 事業者がカード番号を直接扱う場合は、METI クレジットカード番号等取扱契約締結事業者 の PDF をクロスチェックする。
4. ウォレット／資金移動業 のレッグを持つ事業者（Mercari、PayPay、その他）については、FSA 資金移動業者一覧をクロスチェックする。
5. 行政処分が報告された BNPL 事業者については、METI 後払い行政処分状況ページをクロスチェックする。

METI 後払い 行政処分ページは、後払い 事業者に対するあらゆる監督上の措置に関する正規の出典である — BNPL 事業者リスクを追跡する読者は、二次的な報道に頼るのではなく、それを直接モニタリングすべきである。

### サイド軸 — 信用情報機関の加盟

| 事業者タイプ | JICC | CIC | KSC（銀行） |
|---|---|---|---|
| ピュアプレイ BNPL（NP、atone、Kuroneko、Paidy 等） | 一部 | 一部（Paidy の開示は CIC を参照） | 通常はなし |
| BNPL 拡張を持つ信販（APLUS、JACCS、Orico、Credit Saison） | あり | あり | 選択的 |
| カード発行会社の BNPL 拡張（PayPay Card、Rakuten Card、SMBC Card 等） | あり | あり | 選択的 |
| ウォレットアンカーの BNPL（Merpay） | あり | あり | 通常はなし |

機関の加盟は、事業者の信用審査を支える消費者信用情報の共有を形作る — 機関の加盟が限定的な事業者は、自社のデータの外で申込者の信用履歴を確実にチェックできず、これが、小規模のピュアプレイ BNPL 事業者が、完全な機関アクセスを持つ信販に根ざした事業者よりも高いデフォルト率に直面する構造的な理由の一つである。

## 2020 改正割賦販売法 の規制ティアの枠組み

2020 改正割賦販売法（2021-04施行）は、包括信用購入あっせん 事業者に対する、BNPL 事業者のランドスケープに影響を持つ階層化された枠組みを導入した：

| ティア | しきい値 | 事業者への含意 |
|---|---|---|
| **包括信用購入あっせん（標準）** | 標準的な包括信用購入あっせん 登録 | 改正割賦販売法 による完全な信用審査義務 |
| **認定包括信用購入あっせん業者** | 高度なデータ審査の認定の資格を持つ事業者 | 規制上の承認を伴う AI / データベースの審査の使用が許可される |
| **少額包括信用購入あっせん業者** | 小口 BNPL 向けのより低いしきい値 | 小口 BNPL に適した、より軽い審査義務 |
| **個別信用購入あっせん業者** | 取引ごとの信用購入あっせん業者 | ほとんどのピュアプレイ BNPL 事業者が乗っているライン |
| **適用除外のしきい値** | ≤2か月の一括後払い + 特定の加盟店フロントのモデル | 資格のある構造には個別登録が不要 |

認定包括 と 少額包括 の導入は、既存の 個別登録が月次サイクルの複数加盟店 BNPL ウォレット商品によく適合していなかったことを認識し、一部の BNPL 事業者を 包括レジームのより軽いバージョンに引き込むよう特別に設計された。2026, 時点で、特に 少額包括 として登録されている事業者の数は少ないが、枠組みは整っている。

改正割賦販売法 の下での 2024 の BNPL 明確化ラウンドは、適用除外の後払い と登録された個別信用購入あっせん の間の境界を引き締め続けた — 出現した商品ごとの分類テストについては [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]] を参照。

## 事業者セット全体にわたる資金源パターン

| 資金源パターン | 事業者 |
|---|---|
| **純エクイティ + 投資家資本** | Smarpay、Lattepay、Komoju Atobarai、b/43 |
| **エクイティ + 台頭中の ABS パイプライン** | Net Protections HD、atone、PayPal の下の Paidy |
| **親グループのバランスシート** | GMO Postpay（GMO Internet Group）、Kuroneko Atobarai（ヤマトフィナンシャル）、Merpay（Mercari） |
| **銀行 FG の資金調達 + 定常的な ABS** | APLUS（SBI 新生）、JACCS（MUFG 持分法）、Orico（みずほ + 伊藤忠）、Credit Saison（みずほ隣接）、カード発行会社の BNPL バックエンド（PayPay Card / Rakuten Card / SMBC Card 等） |
| **外国親会社のエクイティ + 日本側の資金調達** | PayPal Holdings の下の Paidy |

資金源パターンは、どの BNPL 事業者が急速な残高成長を維持できるか vs どれが資本制約されているかの最大の決定要因である。**定常的な ABS パイプライン** を持つ事業者（信販、カード発行会社、PayPal スタイルの親会社の下の大規模ピュアプレイ）は、比例的なエクイティ資本注入なしに成長できる；**純エクイティ + 投資家資本** の事業者は資金調達ラウンドによって制約され、消費者信用サイクルの下降局面で最も脆弱である。

これが、2020-2022 の BNPL ローンチの波が多くの小規模事業者を生み出した理由であり、そのうち 5-10 年の地平線にわたる生存パターンは、(a) 複数ライセンスの償却を伴う信販に根ざした BNPL、(b) カード発行会社の ABS パイプラインのアクセスを持つカード発行会社バックエンドの BNPL、(c) 定常的な ABS の経済性に十分なスケールに達する一握りのピュアプレイ、を有利にする可能性が高い — より小規模のピュアプレイは統合の圧力に直面する。

## 境界ケース

- **「[[payment-firms/paidy|Paidy]] は BNPL 事業者か、それとも PayPal 製品か？」** 両方。Paidy は、独自の消費者向けブランドと加盟店関係を持つスタンドアロンの個別信用購入あっせん 登録事業者である；それはまた、2021-09 の買収以来 PayPal Holdings の子会社でもある。買収は Paidy に PayPal のグローバルインフラとバランスシートの能力へのアクセスを与えたが、その日本のライセンススタックや規制上の位置を変えなかった。
- **「メルカリ翌月払い / Merpay BNPL は BNPL 事業者か、それともウォレット機能か？」** 両方 — そしてそれが境界の問題である。ウォレット（Merpay）は資金移動業登録の上にある；翌月払い 機能は個別信用購入あっせん 登録の上にある；現金貸付の拡張は貸金業登録の上にある。Merpay の複数ライセンススタックは BNPL にとって稀であり、[[payments/funds-transfer-vs-prepaid-boundary|資金移動 / 前払式 boundary]] を明示的に横断する。
- **「PayPay あと払い は BNPL か？」** 消費者の UX からは、はい。規制当局の観点からは、それは PayPay ウォレット UX を通じてルーティングされる [[card-issuers/paypay-card|PayPay Card]]（包括信用購入あっせん 登録）の機能である。それは構造的にカード発行会社の拡張であり、別個の BNPL 登録ではない。同じパターンが d払いカード などにも当てはまる。
- **「[[card-issuers/aplus|APLUS]]、[[card-issuers/jaccs|JACCS]]、[[card-issuers/orico|Orico]] は BNPL 事業者か？」** 彼らは主要ライセンスでは個別信用購入あっせん業者 であり、これは BNPL ピュアプレイが使用するのと同じライセンスである。彼らのコア事業は「BNPL」という用語よりも古い信販／ショッピングクレジットである；彼らをピュアプレイの意味で BNPL 事業者と呼ぶのはカテゴリーエラーであるが、彼らは同じ規制ラインの主要な参加者である。
- **「[[card-issuers/credit-saison|Credit Saison]] はカード発行会社か、信販か、それとも BNPL 事業者か？」** 三つすべて — Credit Saison は包括信用購入あっせん（カード発行会社ライン） + 個別信用購入あっせん（信販ライン） + 貸金業（現金貸付ライン）を保有しており、日本で最もライセンスが多様な消費者信用事業者の一つにしている。その「BNPL 拡張」は、別個の BNPL 登録ではなく既存のライセンススタックの上にある。
- **「METI 個別一覧の小規模／地方の事業者についてはどうか？」** 138事業者の登録簿には、消費者に見える BNPL のフットプリントが小さい多くの小規模／地方の事業者（地方の自動車ディーラーのキャプティブファイナンス、地方のショッピングクレジット事業者、ニッチ加盟店の 個別事業者）が含まれている。このマトリクスは、意味のある規模で消費者に見える BNPL 商品を運営する 15-20 の事業者に焦点を当てる；完全な登録簿を追跡する読者は、METI の PDF を直接参照すべきである。
- **「BNPL vs カードで消費者のチャージバック／紛争のメカニズムはどう機能するか？」** カードには割賦販売法抗弁の接続 に加えてブランドのチャージバックルール（Visa Dispute、Mastercard Chargeback、JCB Dispute）があり、加盟店が引き渡しに失敗した場合にカード保有者に戻る道を与える。BNPL ピュアプレイの紛争メカニズムは事業者によって異なる — Net Protections / Paidy 等は紛争手続きを公表しているが、法定の事業者横断のチャージバックの枠組みは存在しない（[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] のチャージバックのセクションを参照）。
- **「METI の行政処分を受けた 後払い 事業者についてはどうか？」** 現在の行政処分のステータスについては、METI 後払い行政処分状況ページ（atobaraigyouseisyobunnojoukyou.html）を参照。CAA の決済トラブル注意喚起ページも、一般的な 後払い の消費者保護の問題を参照している。

## 他のマトリクスとのクロスリファレンス

- vs **[[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]]**：そのエントリは、チェックアウトの BNPL 機能が個別信用購入あっせん、包括信用購入あっせん、認定包括、少額包括、適用除外、または資金移動業 の分類を発動するかどうかの商品ごとの分類テストを確立する。このマトリクスは、その分類テストが指し示す事業者レベルのサーフェスである。
- vs **[[payments/credit-purchase-card-operators-japan-index|credit-purchase card 事業者 registry]]**：そのエントリは、METI 登録個別信用購入あっせん業者（2026-04 月末時点で 138 事業者）および 登録包括信用購入あっせん業者（241 事業者）の登録追跡のサーフェスである。このマトリクスは、それらの登録の BNPL アクティブな部分集合をプロファイルする。
- vs **[[payments/japan-consumer-credit-operator-comparison-matrix|consumer-credit 事業者 comparison matrix]]**：そのエントリは、9 つの消費者信用事業者カテゴリー（カード / 消費者金融 / 信販 / BNPL / オート / 住宅 / 教育 / マイクロクレジット / PSP 隣接）をカバーする。このマトリクスは BNPL カテゴリーのズームであり、信販側の事業者（APLUS、JACCS、Orico、Credit Saison）が両方のサーフェスに登場する。
- vs **[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]**：そのエントリは、スキームクラスレベルでカード vs コード vs A2A vs プリペイド をカバーする。BNPL はカードクラス内のサブカテゴリーとして扱われる。このマトリクスは BNPL サブカテゴリーを事業者ごとに分解する。
- vs **[[payments/japan-jcb-issuer-ecosystem-positioning-matrix|JCB 発行会社経済圏 positioning matrix]]** および **[[payments/japan-merchant-psp-competitive-scorecard|加盟店 PSP competitive scorecard]]**：それらのマトリクスはそれぞれ発行者側と加盟店 PSP 側をカバーする；このマトリクスは両方に対する BNPL 事業者側の補完である。カード発行会社バックエンドの BNPL（PayPay Card 経由の PayPay あと払い）は、PayPay Card が JCB ブランドのライセンシーである JCB 発行者マトリクスとの交差点（該当する場合）、および SB Payment Service が PayPay アンカーの加盟店の加盟店側プロセッサーである PSP スコアカードとの交差点にある。

## 最近の規制圧力のタイムライン

| 日付 | 出典 | 何が変わったか |
|---|---|---|
| 2018 | METI | 改正割賦販売法 が 加盟店調査義務を強化 — 個別信用購入あっせん 登録の BNPL 事業者への直接的な影響、限界的な加盟店関係のオンボーディングコストを引き上げた |
| 2020 改正 | METI | 改正割賦販売法 が、一部の BNPL 事業者をより軽い 包括レジームの下に引き込むため、認定包括信用購入あっせん業者 + 少額包括信用購入あっせん業者 の枠組みを明示的に導入 |
| 2021-04 | METI | 2020 改正割賦販売法 の施行；新しいティアの枠組みが運用開始 |
| 2021-09 | クロスボーダー M&A | PayPal Holdings が [[payment-firms/paidy\|Paidy]] を約 2.7 億ドルで買収 — 日本の BNPL 領域における初の主要な外国親会社の買収 |
| 2021-12 | TSE | [[payment-firms/net-protections-hd\|Net Protections HD]] が TSE PRIME に上場（7383）；日本で初の上場したピュアプレイ BNPL 事業者 |
| 2024 | METI / CAA | 継続的な 改正割賦販売法 の下での BNPL 明確化ラウンド + CAA の決済トラブル警告チャネルの更新 |
| 2024-2025 | METI | あらゆる行政処分に対して 後払い行政処分状況ページが維持される；選択的な行政処分が発出された |
| 2025-03 | METI / J-CSC | EC カード決済に EMV 3-DS が義務化 — カード EC のフリクションが増加するにつれ、BNPL 採用への二次的効果（[[payments/japan-card-security-authentication-controls\|Japan card security and authentication controls]] を参照） |
| 継続中 | CAA | BNPL の現金化目的の悪用（現金化目的後払い）および過剰借入を引き起こす UX パターンに関するアクティブな警告 |

## 取引モデルの分解

このマトリクスをスキャンする読者は、「BNPL」を一つの形に平板化すべきではない。上記の BNPL 事業者は、それぞれ異なるリスクと経済的特性を持つ、少なくとも 4 つの異なる取引モデルを使用している：

| 取引モデル | 事業者 | 主要なリスク特性 |
|---|---|---|
| **取引ごとの請求書（≤2か月、一括払い）** | NP 後払い、Kuroneko Atobarai、GMO Postpay、Komoju Atobarai | 短期の債権；取引あたりの平均が低い；事業者レベルのデフォルトリスクが加盟店ミックスによって集中する；コンビニ／銀行振込の回収メカニクス |
| **月次サイクル集約ウォレット** | atone、Paidy、Merpay 翌月払い | 複数加盟店の集約請求；消費者側の与信枠管理；月次のデフォルト率が観察可能なサイクル |
| **分割 / 分割払い（3-pay、6-pay、より長期）** | Paidy 3-pay + 6-pay のバリアント、信販の分割レーン（APLUS、JACCS、Orico、Credit Saison） | より長期；取引あたりの価値が高いのが典型的；改正割賦販売法 の下での分割レベルの開示義務 |
| **カード発行会社バックエンドの BNPL 機能** | PayPay あと払い（PayPay Card 経由）、d払いカード の機能、その他 | カード発行会社の与信枠の経済性；個別 ではなく包括信用購入あっせん 登録を通じてルーティングされる |

取引モデルが重要なのは：(a) 取引ごとの請求書の事業者は、月次ウォレットの事業者とは非常に異なるユニットエコノミクスを持つ（単一加盟店の手数料 vs 消費者獲得の LTV）；(b) 分割 / 分割払い の事業者は、≤2か月の一括払いの適用除外モデルとは異なる開示義務に改正割賦販売法 の下で直面する；(c) カード発行会社バックエンドの BNPL は規制上はカード発行会社の機能であり、別個の BNPL 商品ではない、ためである。

## 信用リスクモデルの分解事業者が損失を負う vs 加盟店が損失を負う vs 共有 の線は、マトリクス全体で最も結果に影響する違いの一つである。3 つの主要なパターンが存在する：

| リスクモデル | 事業者 | 経済的含意 |
|---|---|---|
| **事業者が損失を負う（保証モデル）** | NP 後払い、Kuroneko Atobarai、Paidy、atone、ほとんどのピュアプレイ | 加盟店は債権リスクを完全にオフロードする；事業者はそれを補うためにより高い加盟店手数料を得る；事業者は効果的な信用審査 + 回収を運営しなければならない |
| **加盟店が損失を負う + 事業者が回収者として** | 一部のニッチ／より小規模の BNPL の構成 | 加盟店は債権リスクを保持する；事業者は回収 / 請求のサービスのみのためのより小さな手数料を得る |
| **共有 / 損失分割のモデル** | 一部の GMO Postpay / Komoju Atobarai の構成 | 加盟店と事業者が公式によって回収不能リスクを共有する；加盟店手数料が調整される |
| **カード発行会社の与信枠モデル** | PayPay あと払い、信販の分割、カード発行会社の BNPL バックエンド | カード発行会社 / 信販がカード保有者の与信枠の信用リスクを負う；消費者側の信用判断は取引ごととは別である |

ピュアプレイ BNPL 事業者は、加盟店が単に債権を吸収するのに対して事業者の別個の存在を正当化する加盟店手数料の経済性を生み出すのがそれであるため、ほぼ一律に事業者が損失を負うモデルを使用する。事業者が損失を負うことの構造的な課題は、事業者がそのバランスシート上で消費者信用サイクルのボラティリティを吸収しなければならないことであり、これが（上記の資金源の分析による）ABS パイプラインのアクセスが事業者の存続可能性にとってそれほど結果に影響する理由である。

## 事業者クラスターの要約マトリクス表を一緒に読むと、4 つの事業者クラスターが浮かび上がる：

1. **事業者が損失を負うモデルのピュアプレイ BNPL**：Net Protections HD / NP 後払い、atone、Kuroneko Atobarai（ヤマト）、PayPal の下の Paidy、Komoju Atobarai。これらは債権リスクを負い、加盟店手数料を得る；その経済性は引受モデル + ABS アクセスによって決定される。
2. **複数ライセンススタックを持つウォレットアンカーの BNPL**：Merpay / Mercari Smart Money、PayPay あと払い（PayPay Card バックエンド経由）、d払い / au PAY の拡張。これらは様々な構成で資金移動 + 個別 または 包括信用購入あっせん を組み合わせ、ウォレット側の消費者関係 + 該当する場合はカード発行会社の ABS パイプラインから恩恵を受ける。
3. **信販に根ざした BNPL 拡張**：APLUS、JACCS、Orico、Credit Saison。これらは、個別登録簿に参加し、多くのチャネルの一つ（オートローン、教育ローン、リフォーム、カード等）として BNPL スタイルの商品を提供する完全な信販事業者である。その構造的優位性は複数ライン信販の経済性 + 銀行 FG の資金調達である。
4. **より小規模 / より新しい / 垂直スペシャリストのピュアプレイ**：Smarpay、Lattepay、b/43,  に加えて、小規模の 個別登録簿事業者のロングテール。これらは、限定的な ABS アクセスと限定的なクロス商品 LTV を考えると、5-10 年の地平線で最も高い統合の圧力に直面する。

読者が事業者を割り当てるクラスターは、その現在の GMV や加盟店数よりも、その 3-5 年の競争上の軌道のより良い予測因子である。

## Related

- [[payments/INDEX]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-consumer-credit-operator-comparison-matrix]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/japan-interchange-and-merchant-fee-stack]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/japan-merchant-psp-competitive-scorecard]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/psp-merchant-settlement-risk]]
- [[payments/cashless-jp-landscape]]
- [[payment-firms/net-protections-hd]]
- [[payment-firms/atone]]
- [[payment-firms/kuroneko-atobarai]]
- [[payment-firms/gmo-postpay]]
- [[payment-firms/paidy]]
- [[payment-firms/mercari-hd]]
- [[payment-firms/merpay]]
- [[card-issuers/aplus]]
- [[card-issuers/jaccs]]
- [[card-issuers/orico]]
- [[card-issuers/credit-saison]]
- [[payment-firms/paypal-pte-ltd-japan]]
- [[card-issuers/paypay-card]]
- [[payment-firms/paypay]]
- [[regional-banks/sbi-shinsei-bank]]
- [[INDEX|FinWiki index]]

## Sources

- METI: 登録個別信用購入あっせん業者 PDF — https://www.meti.go.jp/policy/economy/consumer/credit/tourokukobetsuichiran.pdf
- METI: 登録包括信用購入あっせん業者 PDF — https://www.meti.go.jp/policy/economy/consumer/credit/tourokuhoukatsuichiran.pdf
- METI: クレジットカード番号等取扱契約締結事業者 PDF — https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
- METI: registered operator lists portal — https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
- METI: 割賦販売法 after-payment / 後払い FAQ — https://www.meti.go.jp/policy/economy/consumer/credit/kappuhanbaihoatobaraibunyanogaiyofaq.html
- METI: 改正割賦販売法 page — https://www.meti.go.jp/policy/economy/consumer/credit/11kappuhanbaihou.html
- Net Protections HD corporate / IR: https://corp.netprotections.com/ir/
- atone product page: https://www.atone.be/
- Yamato Group / Kuroneko Atobarai: https://www.kuronekoyamato.co.jp/ytc/business/option/payment/
- GMO Postpay: https://www.gmo-pp.co.jp/
- Paidy: https://paidy.com/
- Komoju Atobarai: https://komoju.com/ja/payments/atobarai/
- Mercari press releases: https://about.mercari.com/press/
- CAA (消費者庁) payment-trouble caution: https://www.caa.go.jp/policies/policy/consumer_policy/caution/internet/trouble/payment.html
- FSA: licensed / registered operators portal — https://www.fsa.go.jp/menkyo/menkyo.html
- Operator IR disclosure (公開分) for listed operators: [[payment-firms/net-protections-hd|Net Protections HD]] (TSE PRIME 7383), [[card-issuers/jaccs|JACCS]] (TSE PRIME 8584), [[card-issuers/orico|Orico]] (TSE PRIME 8585), [[card-issuers/credit-saison|Credit Saison]] (TSE PRIME 8253), [[payment-firms/mercari-hd|Mercari HD]] (TSE PRIME 4385)
