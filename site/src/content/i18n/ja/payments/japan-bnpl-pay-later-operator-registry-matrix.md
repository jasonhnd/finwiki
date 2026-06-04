---
source: payments/japan-bnpl-pay-later-operator-registry-matrix
source_hash: 6d17585c82222549
lang: ja
status: machine
fidelity: ok
title: "日本 BNPL / 後払い事業者登録マトリクス"
translated_at: 2026-06-02T16:33:58.506Z
---

# 日本 BNPL / 後払い事業者登録マトリクス

## 要約

日本の BNPL / 後払いランドスケープは、主に **割賦販売法 (Installment Sales Act)** によって規律され、**個別信用購入あっせん業者** の登録ラインを通じて、経済産業省が主な所管当局となる。経済産業省の登録個別信用購入あっせん業者一覧には、約 138 の登録事業者が、2026-04 月末時点で含まれる ([[payments/credit-purchase-card-operators-japan-index|credit-purchase card operator registry]] による)。そのうち、消費者から見える BNPL / 後払い商品を有意な規模で積極的に運営しているのは、より小さな一部、概ね 15-20 程度である。このマトリクスは、BNPL 経済性を決める軸、すなわち親会社 / 所有、取引モデル (一括後払いか分割か)、信用リスクモデル (事業者損失負担、加盟店損失負担、共同負担)、資金源、加盟店カテゴリ特化、月間取引量の概算、登録年、2020 改正割賦販売法フレームワーク上の規制階層 (認定包括 / 少額包括 / 個別 / 免除) に沿って、アクティブな事業者を整理する。これは [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]] の事業者レベルの補助ページであり、[[payments/japan-consumer-credit-operator-comparison-matrix|Japan consumer-credit operator comparison matrix]] の中にある BNPL 固有の横断面である。

## ウィキ上の位置づけ

この項目は、BNPL 事業者レベルの参照ページとして [[payments/INDEX|payments index]] の下に位置づける。商品別の分類テストは [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]]、経済産業省登録簿の追跡は [[payments/credit-purchase-card-operators-japan-index|credit-purchase card operator registry]]、より広い消費者信用文脈における BNPL カテゴリは [[payments/japan-consumer-credit-operator-comparison-matrix|Japan consumer-credit operator comparison matrix]]、スキーム横断の経済性ビューにおける BNPL 行は [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]、BNPL が逸脱する役割分離フレームワークは [[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]] とあわせて読む。事業者アンカーは [[payment-firms/net-protections-hd|Net Protections HD]]、[[payment-firms/atone|atone]]、[[payment-firms/kuroneko-atobarai|Kuroneko Atobarai]]、[[payment-firms/gmo-postpay|GMO Postpay]]、[[payment-firms/paidy|Paidy]]、[[payment-firms/mercari-hd|Mercari HD]]、[[card-issuers/aplus|APLUS]]、[[card-issuers/jaccs|JACCS]]、[[card-issuers/orico|Orico]]、[[card-issuers/credit-saison|Credit Saison]]。

## このマトリクスが重要な理由

BNPL は、日本の決済カテゴリの中で最も規制上の曖昧さが大きい領域である。同じチェックアウト UX、たとえば「コンビニ / 銀行振込で後払い」や「翌月払い」ボタンでも、(a) 割賦販売法上の個別信用購入あっせん登録事業者、(b) 個別登録を避ける免除しきい値内の後払い構造、(c) 2020 改正割賦販売法で導入された認定包括信用購入あっせんまたは少額包括信用購入あっせん制度、(d) 既存カード issuer の BNPL 拡張における包括信用購入あっせん制度 (PayPay あと払い → [[card-issuers/paypay-card|PayPay Card]] バックエンド)、(e) 資金移動 + 後払いレイヤーを組み合わせるハイブリッド (Mercari / Merpay) のいずれにもルーティングされ得る。事業者ごとの視点がないと、読者はチェックアウトでは同じに見えるが、ライセンススタック、信用リスクモデル、消費者保護制度が大きく異なる事業者を混同する。このマトリクスは、[[payments/japan-bnpl-credit-purchase-boundary|BNPL boundary]] ページが参照する事業者レベルの面である。

消費者庁 (CAA) は、**BNPL の現金化目的悪用**と、過剰借入を招く UX パターンについて、継続的な注意喚起チャネルを維持している。出典の決済トラブル注意喚起ページを参照。このマトリクスは、規制階層と登録履歴を追跡し、どの事業者がどの監督水準の対象かを読者が識別できるようにする。

### Net Protections HD (NP 後払い, TSE PRIME 7383)

[[payment-firms/net-protections-hd|Net Protections HD]] (TSE PRIME 7383) は、日本で最も早くから動いた BNPL 専業の一社であり、EC 加盟店が「コンビニ / 銀行振込で後払い」オプションとして付ける請求書型 BtoC 商品 **NP 後払い** を運営する。同グループは、消費者側の月次サイクル BNPL ウォレット **atone**、BtoB 請求の **NP 掛け払い**、台湾 / ベトナムを対象とする東南アジア BNPL **AFTEE** も運営する。NP 後払いの特徴は **保証モデル BNPL** である。Net Protections は加盟店手数料と引き換えに未回収リスクを吸収し、加盟店は売掛金管理を全面的に外部化できる。経済産業省一覧では個別信用購入あっせん業者として登録されている。2021-12 に TSE PRIME 上場。

### atone (Net Protections 子会社)

[[payment-firms/atone|atone]] は、Net Protections の消費者側月次サイクル BNPL ウォレットであり、NP 後払いの取引ごとの請求書モデルとは異なる。atone は、複数加盟店での BNPL 購入を一つの月次コンビニ / 銀行振込支払いに集約するアカウントを消費者に提供する。UX は [[payment-firms/paidy|Paidy]] に近いが、独立系、非 PayPal の経済性で動く。規制上は、atone は NP 後払いと同じ Net Protections のライセンススタック、すなわち割賦販売法上の個別信用購入あっせんを用いる。ブランドを分けることで、Net Protections は「加盟店側 BNPL ゲートウェイ」である NP 後払いブランドを薄めずに、「月次サイクル BNPL ウォレット」セグメントで競争できる。

### Kuroneko Atobarai (Yamato Financial Holdings)

[[payment-firms/kuroneko-atobarai|Kuroneko Atobarai (クロネコ後払い)]] は、ヤマトグループの金融エンティティが運営する BNPL 商品ラインであり、ヤマト運輸の全国配送ネットワークを活用する。特徴的な加盟店セグメントは、**ヤマト配送で出荷される EC 購入**である。BNPL 回収を配送確認と束ねられるため、主配送業者としてヤマトを既に使う EC 加盟店にとって、Kuroneko Atobarai は構造的なコスト優位を持つ。経済産業省の登録個別信用購入あっせん業者一覧に登録されている。この商品は、[[payment-firms/net-protections-hd|Net Protections]] NP 後払いと同じ「配送同梱型請求書 BNPL」セグメントに自然に収まり、加盟店価値は「配送 + 回収を一つのパッケージで処理する」点にある。

### GMO Postpay (GMO Payment Gateway group)

[[payment-firms/gmo-postpay|GMO Postpay]] は、[[business/gmo-internet-group|GMO Internet Group]] / [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] の後払い商品ラインであり、カード / コード / コンビニ決済手段と並ぶ後払いオプションとして、広い GMO-PG 加盟店基盤へ統合されるよう設計されている。GMO-PG との統合により、既に GMO-PG を使う加盟店は、別のゲートウェイ関係を構築せずに GMO Postpay を追加決済手段として導入できる。これは後払い商品にとって構造的なチャネル優位である。経済産業省の登録個別信用購入あっせん業者一覧に登録されている。GMO-PG の約 30万加盟店基盤への自然なクロスセルが主な規模拡大要因である。

### Paidy (PayPal-owned)

[[payment-firms/paidy|Paidy]] は PayPal 傘下の消費者側月次サイクル BNPL 事業者であり、標準的な月次コンビニ / 銀行振込払い、3-pay (3 回の月次分割)、高額購入向けのより長い分割バリエーションを含む複数商品を持つ。PayPal は 2021-09 に約 USD 2.7 billion で Paidy を買収した ([[payment-firms/paypal-pte-ltd-japan|PayPal Pte. Ltd. Japan]] 項目および PayPal Holdings の公開開示による)。Paidy の特徴的な規模優位は、**主要 EC 加盟店との統合、特に Amazon Japan を旗艦統合とすること**と、PayPal のグローバルフットプリントを横断活用できることである。経済産業省の登録個別信用購入あっせん業者一覧に登録されている。

### Komoju Atobarai (Degica)

Komoju Atobarai は、Degica / Komoju の自社ブランド後払い商品であり、Komoju のカード / コード / コンビニ決済手段カバレッジと並べて後払いを提供したい加盟店向けに、Komoju PSP ゲートウェイへ統合されている。Komoju の垂直特化はデジタルコンテンツ / ゲーム / クロスボーダーである。[[payments/japan-merchant-psp-competitive-scorecard|Japan merchant PSP competitive scorecard]] を参照。経済産業省の登録個別信用購入あっせん業者一覧に登録されている。自然な適合先は、アクティブなクレジットカードを持たないカード会員に代替手段として後払いを提示したいデジタルコンテンツ / ゲーム加盟店である。

### Smarpay

Smarpay (株式会社Smartpay など) は、2020年代の BNPL ローンチ波で登場した比較的新しい BNPL 参入者であり、分割払いオプションを持つ消費者側 BNPL 商品を提供する。事業者は経済産業省の登録個別信用購入あっせん業者一覧に登録されている。読者への注意として、このカテゴリの独立系 BNPL 事業者は規模にばらつきがあり、事業者の継続性は消費者信用サイクルの状況に左右されやすい。

### Lattepay

Lattepay は、日本の 2020-2022 BNPL ローンチ波に参加した小規模 BNPL 事業者の一つであり、割賦販売法上の個別信用購入あっせんルートで登録されている。Smarpay と同様、Lattepay は NP / Paidy / Atone より小規模に運営され、事業者継続性について読者は注意すべきである。支配的な専業事業者の横に複数の小規模 BNPL 事業者が存在することは、登録障壁が意味を持つが禁止的ではない、2020 改正割賦販売法後の環境の特徴である。

### Mercari Smart Money / Merpay BNPL extension

[[payment-firms/mercari-hd|Mercari HD]] (TSE PRIME 4385) は決済部門として [[payment-firms/merpay|Merpay]] を運営し、メルペイ翌月払いと Mercari Smart Money / メルペイスマートマネー融資商品を通じて BNPL へ拡張している。特徴は、**Mercari の個人間マーケットプレイスとの垂直統合**である。Merpay は、資金源と回収がともに Mercari エコシステム内にある形で BNPL を提供できるため、独立系 BNPL 事業者とは構造的に異なるユニットエコノミクスを持つ。Merpay のライセンススタックは、資金移動業と、信用購入がそのルートを通る場合の個別信用購入あっせん登録、さらに現金ベースの融資商品向け貸金業登録を組み合わせる。BNPL 専業では珍しい複数ライセンスの組み合わせである。

### b/43 (Smartbank)

b/43 (Smartbank, Inc. 提供) は、プリペイド Visa カード + 家族口座の支出管理商品であり、分割 / 後払いオプションを持つ。b/43 商品は、純粋な BNPL 専業というより、BNPL 機能を持つ **家族金融 / 家計管理ツール** に近い位置づけである。信用 / 後払い部分は、具体的な商品機能に応じ、割賦販売法の個別ラインまたは資金決済法の前払式ラインで適切にライセンスされる。読者への注意として、b/43 のような主にプリペイド商品の BNPL 拡張は、NP 後払いや Paidy のような BNPL 専業とはやや異なるカテゴリにある。

### NP後払い (Net Protections 配下の別ブランド表示)

NP後払いは、Net Protections の請求書型 BNPL 商品の顧客向けブランドであり、Net Protections HD セクションで扱ったものと同じ商品である。ここで別に掲げるのは、**加盟店と消費者が、Net Protections の法人名とは独立して NP 後払いブランドを認識することが多い**ためである。また、登録は持株会社ではなく、事業子会社である株式会社ネットプロテクションズが保有する。経済産業省の登録個別信用購入あっせん業者一覧を照合する際には、ブランドと法人の区別が重要である。登録簿上の事業者名は事業子会社である。

### Mitsui Sumitomo Card / SMBC-side BNPL extensions

[[card-issuers/smbc-card|SMBC Card]] は、Vpass / 三井住友カード あと払い + V Point エコシステムを通じ、カード会員が購入後に特定取引を分割払い条件へ変換できる BNPL 隣接拡張を持つ。これらの拡張は、別個の個別登録ではなく、既存の包括信用購入あっせん (カード issuer) 登録の上に乗る。基礎となる債権が、カード発行済み与信枠の債権だからである。消費者から見ると BNPL に見えるが、規制上はカード与信枠の拡張機能である。同じパターンは [[card-issuers/mufg-nicos|MUFG NICOS]]、[[card-issuers/rakuten-card|Rakuten Card]]、その他の主要カード issuer にも当てはまる。

### PayPay あと払い (via PayPay Card backend)

PayPay あと払いは、[[payment-firms/paypay|PayPay]] ウォレット UX を通じて提供される BNPL 的商品であるが、与信枠のバックエンドは [[card-issuers/paypay-card|PayPay Card]]、すなわちカード issuer エンティティである。PayPay ウォレットは消費者向け UX レイヤーとして機能し、PayPay Card の包括信用購入あっせん登録が信用債権を担う。これは **境界事例**として含めている。消費者から見ると BNPL 相当だが、規制上はカード issuer 登録に乗る。同じパターンは、d払い / au PAY / 楽天ペイが、紐づくカード issuer バックエンドを通じて BNPL 相当機能を拡張する場合にも当てはまる。

### 信販側 BNPL: APLUS, JACCS, Orico, Credit Saison

[[card-issuers/aplus|APLUS]] ([[regional-banks/sbi-shinsei-bank|SBI Shinsei]] group)、[[card-issuers/jaccs|JACCS]] ([[megabanks/mufg|MUFG]] equity-method)、[[card-issuers/orico|Orico]] ([[megabanks/mizuho-fg|Mizuho]] + Itochu)、[[card-issuers/credit-saison|Credit Saison]] (独立系) は、いずれも主要な信販事業ラインとして個別信用購入あっせん登録を持ち、単独の消費者向けブランドまたは加盟店前面型 BNPL のホワイトラベル・バックエンドとして BNPL 風商品を運営する。専業 BNPL に対する構造的な優位は、**複数ラインの信販経済性**である。BNPL チャネルで獲得した顧客に、オートローン、リフォームローン、教育ローン、カード商品をクロスセルでき、単一商品の BNPL 専業では得にくい複数商品 LTV を生む。このマトリクスに含めるのは、これらを専業型の「BNPL 事業者」と呼ぶためではなく、**専業 BNPL 事業者が登録する個別信用購入あっせん登録簿の主要参加者**であり、信販ショッピングクレジットと BNPL の規制上の線引きが構造的に曖昧だからである。

## 大型比較マトリクス表

| Operator | Parent / ownership | License registration | Listing | Registration year (approx) | Transaction model | Credit-risk model | Funding source | Primary merchant categories | Monthly tx volume order | Regulatory tier (2020 改正割賦販売法 framework) |
|---|---|---|---|---|---|---|---|---|---|---|
| **[[payment-firms/net-protections-hd\|Net Protections / NP 後払い]]** | 独立系 (上場) | 個別信用購入あっせん業者 (METI) | TSE PRIME 7383 (listed 2021-12) | Pre-2010 | 取引ごとの請求書、≤2か月または分割 | 事業者損失負担 (保証モデル) | エクイティ + ABS パイプラインが出始めている | EC general (アパレル、化粧品、食品、総合小売) | 年間数千万 tx | 個別 |
| **[[payment-firms/atone\|atone (Net Protections)]]** | Net Protections 子会社 | 個別信用購入あっせん業者 (METI) | 子会社 | Mid-2010s | 月次サイクル集約 BNPL ウォレット | 事業者損失負担 | エクイティ + 親会社 | 複数加盟店 BtoC 消費者 | 数百万ユーザー | 個別 |
| **[[payment-firms/kuroneko-atobarai\|Kuroneko Atobarai (Yamato)]]** | Yamato Financial Holdings | 個別信用購入あっせん業者 (METI) | 子会社 | 2000s | 取引ごとの請求書、≤2か月 | 事業者損失負担 (保証モデル) | ヤマトグループ B/S | EC general (ヤマト配送出荷) | 年間数千万 tx | 個別 |
| **[[payment-firms/gmo-postpay\|GMO Postpay]]** | [[business/gmo-internet-group\|GMO Internet]] / [[payment-firms/gmo-payment-gateway\|GMO-PG]] | 個別信用購入あっせん業者 (METI) | 子会社 | 2010s | 取引ごとの請求書、≤2か月または分割 | 事業者損失負担 + 加盟店共同負担バリエーション | GMO グループ B/S + ABS | EC general (GMO-PG 加盟店基盤) | 年間数百万 tx | 個別 |
| **[[payment-firms/paidy\|Paidy]]** | PayPal Holdings ([[payment-firms/paypal-pte-ltd-japan\|PayPal Pte. Ltd. Japan]]); acquired 2021-09 | 個別信用購入あっせん業者 (METI) | PayPal 子会社 | 2010s | 月次サイクル集約 BNPL + 3-pay + 分割 | 事業者損失負担、ABS / 証券化 | エクイティ + 債権証券化ルート | EC general、Amazon Japan 旗艦統合 | 年間数千万 tx | 個別 (認定 / 少額包括を注視) |
| **Komoju Atobarai (Degica)** | Degica / Komoju (独立系) | 個別信用購入あっせん業者 (METI) | Degica 子会社 | 2010s-2020s | 取引ごとの請求書 | 事業者損失負担 + 加盟店共同負担 | Komoju グループ B/S | デジタルコンテンツ、ゲーム、クロスボーダー EC | 小規模、垂直特化 | 個別 |
| **Smarpay** | 独立系 (Smartpay) | 個別信用購入あっせん業者 (METI) | 非上場 | 2020-2022 launch wave | 取引ごと + 分割 | 事業者損失負担、小規模 | エクイティ / 投資家支援 | EC general | 小規模 | 個別 |
| **Lattepay** | 独立系 | 個別信用購入あっせん業者 (METI) | 非上場 | 2020-2022 launch wave | 取引ごと | 事業者損失負担、小規模 | エクイティ | EC general | 小規模 | 個別 |
| **[[payment-firms/merpay\|Merpay / Mercari Smart Money]]** | [[payment-firms/mercari-hd\|Mercari HD]] (TSE PRIME 4385) | 個別信用購入あっせん業者 + 資金移動業 + 貸金業 (multi-license) | Mercari HD 子会社 | 2010s for Merpay; Smart Money later | 月次サイクル集約 BNPL + 翌月払い + cash-loan | Mercari エコシステム内で事業者損失負担 | Mercari グループ B/S | Mercari marketplace + 外部加盟店 | 年間数千万 tx | 個別 + 拡張では包括 |
| **b/43 (Smartbank)** | Smartbank, Inc. (独立系) | Prepaid (前払い式) + 個別信用購入あっせん for credit extensions | 非上場 | 2020s | プリペイド + 後払いオプション付き家族金融 | 主にプリペイド、与信枠は小規模 | エクイティ / 投資家支援 | 家族 / 家計金融 | 小規模 | 前払い式 + 個別 (mixed) |
| **NP後払い (separate brand)** | Net Protections 配下で運営 | 個別信用購入あっせん業者 (METI) — Net Protections と同一の事業エンティティ | 上場会社配下ブランド | Pre-2010 | Net Protections HD 項目と同じ | 事業者損失負担 | エクイティ | EC general | Net Protections HD と同じ | 個別 |
| **PayPay あと払い** | [[payment-firms/paypay\|PayPay]] wallet UX, [[card-issuers/paypay-card\|PayPay Card]] backend | 包括信用購入あっせん (card-issuer registration) | PayPay FG / SoftBank 子会社 | 2010s (PayPay Card founding) | カード与信枠の分割 / リボ + あと払い機能 | カード issuer モデル (事業者与信審査) | カード issuer B/S + ABS パイプライン | PayPay 加盟店エコシステム + general | 年間数千万 tx | 包括 (card-issuer line, not 個別) |
| **[[card-issuers/aplus\|APLUS]] BNPL extensions** | [[regional-banks/sbi-shinsei-bank\|SBI Shinsei]] | 個別信用購入あっせん + 包括 | SBI Shinsei 子会社 | Pre-2010 | 取引ごと + 分割、信販ルーツ | 信販側損失負担、複数ライセンス償却 | Bank-FG funding + ABS | Auto / shopping / various | 年間数千万 tx | 個別 + 包括 (shinpan, not pure BNPL) |
| **[[card-issuers/jaccs\|JACCS]] BNPL extensions** | [[megabanks/mufg\|MUFG]] equity-method | 個別信用購入あっせん + 包括 | TSE PRIME 8584 | Pre-2010 | 取引ごと + 分割 | 信販側損失負担 | Bank-FG funding + ABS | Auto / education / リフォーム / general | 年間数千万 tx | 個別 + 包括 (shinpan) |
| **[[card-issuers/orico\|Orico]] BNPL extensions** | [[megabanks/mizuho-fg\|Mizuho]] + Itochu | 個別信用購入あっせん + 包括 | TSE PRIME 8585 | Pre-2010 | 取引ごと + 分割 | 信販側損失負担 | Bank-FG funding + ABS | Auto / shopping / general | 年間数千万 tx | 個別 + 包括 (shinpan) |
| **[[card-issuers/credit-saison\|Credit Saison]] BNPL extensions** | 独立系 (上場) | 個別信用購入あっせん + 包括 | TSE PRIME 8253 | Pre-2010 | 取引ごと + カード与信枠リボ | カード issuer + 信販混合 | エクイティ + ABS | General consumer + Marui-adjacent retail | 年間数千万 tx | 個別 + 包括 (card-issuer + shinpan) |

### 補助軸 — 登録簿の追跡と監督状況

経済産業省の登録個別信用購入あっせん業者 PDF 一覧が正本の登録簿である。マトリクス内の特定事業者を確認する読者の手順は次のとおり。

1. [[payments/credit-purchase-card-operators-japan-index|credit-purchase card operator registry]] ポータルから経済産業省の登録個別信用購入あっせん業者 PDF を開く。
2. PDF 内で事業エンティティ名を検索する。ブランドと法人の区別に注意する。登録簿はブランドではなく株式会社 X を掲載する。
3. 事業者がカード番号を直接扱う場合は、経済産業省のクレジットカード番号等取扱契約締結事業者 PDF も照合する。
4. Mercari、PayPay など、ウォレット / 資金移動業レッグを持つ事業者については、金融庁の資金移動業者一覧も照合する。
5. 行政処分が報じられた BNPL 事業者については、経済産業省の後払い行政処分状況ページを照合する。

経済産業省の後払い行政処分ページは、後払い事業者に対する監督処分の正本情報源である。BNPL 事業者リスクを追跡する読者は、二次報道ではなく同ページを直接監視すべきである。

### 補助軸 — 信用情報機関への加盟

| 事業者タイプ | JICC | CIC | KSC (銀行系) |
|---|---|---|---|
| 専業 BNPL (NP, atone, Kuroneko, Paidy など) | 一部 | 一部 (Paidy 開示は CIC に言及) | 通常はなし |
| BNPL 拡張を持つ信販 (APLUS, JACCS, Orico, Credit Saison) | Yes | Yes | 選択的 |
| カード issuer BNPL 拡張 (PayPay Card, Rakuten Card, SMBC Card など) | Yes | Yes | 選択的 |
| ウォレットアンカー型 BNPL (Merpay) | Yes | Yes | 通常はなし |

信用情報機関への加盟は、事業者の与信審査を支える消費者信用情報共有を左右する。加盟が限定的な事業者は、自社データ以外で申込者の信用履歴を十分に確認しにくい。これは、小規模な専業 BNPL 事業者が、信用情報機関へ十分にアクセスできる信販ルーツ事業者より高いデフォルト率に直面しやすい構造的理由の一つである。

## 2020 改正割賦販売法の規制階層フレームワーク

2020 改正割賦販売法 (effective 2021-04) は、包括信用購入あっせん事業者向けに階層型の枠組みを導入し、BNPL 事業者ランドスケープにも影響を与えた。

| 階層 | しきい値 | 事業者への意味 |
|---|---|---|
| **包括信用購入あっせん (standard)** | 標準的な包括信用購入あっせん登録 | 改正割賦販売法に基づく完全な与信審査義務 |
| **認定包括信用購入あっせん業者** | 高度なデータ審査認定を受ける事業者 | AI / データベース審査を規制上認められた形で利用可能 |
| **少額包括信用購入あっせん業者** | 少額 BNPL 向けの低いしきい値 | 少額 BNPL に適した軽い審査義務 |
| **個別信用購入あっせん業者** | 取引ごとの信用購入仲介 | 多くの専業 BNPL 事業者が乗るライン |
| **免除しきい値** | ≤2か月の一括後払い + 一定の加盟店前面型モデル | 要件を満たす構造では個別登録不要 |

認定包括と少額包括の導入は、既存の個別登録が月次サイクル・複数加盟店型 BNPL ウォレット商品に十分適合しないことを認識し、一部の BNPL 事業者をより軽い包括制度へ取り込むために設計された。2026, 時点で、少額包括として特に登録された事業者数は少ないが、枠組み自体は存在する。

2024 BNPL 明確化ラウンドでは、改正割賦販売法の下で、免除される後払いと登録が必要な個別信用購入あっせんとの境界がさらに厳格化された。そこで現れた商品別分類テストについては [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]] を参照。

## 事業者群全体の資金源パターン

| 資金源パターン | 事業者 |
|---|---|
| **純エクイティ + 投資家資本** | Smarpay, Lattepay, Komoju Atobarai, b/43 |
| **エクイティ + 発展途上の ABS パイプライン** | Net Protections HD, atone, Paidy under PayPal |
| **親グループ B/S** | GMO Postpay (GMO Internet Group), Kuroneko Atobarai (Yamato Financial), Merpay (Mercari) |
| **Bank-FG funding + routine ABS** | APLUS (SBI Shinsei), JACCS (MUFG equity-method), Orico (Mizuho + Itochu), Credit Saison (Mizuho-adjacent), card-issuer BNPL backends (PayPay Card / Rakuten Card / SMBC Card / etc.) |
| **外国親会社エクイティ + 日本側資金調達** | Paidy under PayPal Holdings |

資金源パターンは、どの BNPL 事業者が急速な債権簿成長を維持できるか、どの事業者が資本制約を受けるかを決める最大の要因である。**routine ABS pipeline** を持つ事業者、すなわち信販、カード issuer、PayPal 型親会社の下にある大規模専業は、比例的なエクイティ注入なしに成長できる。**純エクイティ + 投資家資本**に依存する事業者は、資金調達ラウンドに制約され、消費者信用サイクルが悪化する局面で最も脆弱である。

このため、2020-2022 BNPL ローンチ波は多数の小規模事業者を生んだが、5-10 年程度の視野での生存パターンは、(a) 複数ライセンス償却を持つ信販ルーツ BNPL、(b) カード issuer ABS パイプラインへアクセスできるカード issuer バックエンド BNPL、(c) routine ABS 経済性に足る規模へ到達する少数の専業に有利になる可能性が高い。小規模専業は統合圧力に直面する。

## 境界事例

- **「[[payment-firms/paidy|Paidy]] は BNPL 事業者か、PayPal 商品か」** 両方である。Paidy は、自社の消費者向けブランドと加盟店関係を持つ単独の個別信用購入あっせん登録事業者であり、2021-09 買収以降は PayPal Holdings 子会社でもある。買収により Paidy は PayPal のグローバルインフラと B/S 能力にアクセスできるようになったが、日本でのライセンススタックや規制上の位置づけは変わっていない。
- **「メルカリ翌月払い / Merpay BNPL は BNPL 事業者か、ウォレット機能か」** 両方であり、それが境界問題である。ウォレット (Merpay) は資金移動業登録に乗り、翌月払い機能は個別信用購入あっせん登録に乗り、現金融資拡張は貸金業登録に乗る。Merpay の複数ライセンススタックは BNPL では珍しく、[[payments/funds-transfer-vs-prepaid-boundary|funds-transfer / prepaid boundary]] を明示的に横断する。
- **「PayPay あと払いは BNPL か」** 消費者 UX からは yes である。規制当局の視点では、PayPay ウォレット UX を通じてルーティングされる [[card-issuers/paypay-card|PayPay Card]] (包括信用購入あっせん登録) の機能である。構造的にはカード issuer 拡張であり、別個の BNPL 登録ではない。同じパターンは d払いカードなどにも当てはまる。
- **「[[card-issuers/aplus|APLUS]]、[[card-issuers/jaccs|JACCS]]、[[card-issuers/orico|Orico]] は BNPL 事業者か」** これらは主たるライセンスとして個別信用購入あっせん業者であり、専業 BNPL が使うのと同じライセンスである。中核事業は「BNPL」という用語より古い信販 / ショッピングクレジットであり、専業型の意味で BNPL 事業者と呼ぶのはカテゴリ誤りである。ただし同じ規制ラインの主要参加者ではある。
- **「[[card-issuers/credit-saison|Credit Saison]] はカード issuer か、信販か、BNPL 事業者か」** 三つすべてである。Credit Saison は包括信用購入あっせん (カード issuer ライン) + 個別信用購入あっせん (信販ライン) + 貸金業 (現金融資ライン) を持ち、日本で最もライセンス多様性の高い消費者信用事業者の一つである。同社の「BNPL 拡張」は別個の BNPL 登録ではなく、既存ライセンススタック上に乗る。
- **「経済産業省の個別一覧にある小規模 / 地域事業者はどう扱うか」** 138事業者の登録簿には、消費者から見える BNPL フットプリントが小さい多くの小規模 / 地域事業者、たとえば地域自動車ディーラー系キャプティブ金融、地域ショッピングクレジット事業者、ニッチ加盟店向け個別事業者が含まれる。このマトリクスは、消費者から見える BNPL 商品を有意な規模で運営する 15-20 事業者に焦点を当てる。全登録簿を追う読者は、経済産業省 PDF を直接参照すべきである。
- **「BNPL とカードで消費者のチャージバック / 紛争メカニズムはどう違うか」** カードには割賦販売法の抗弁の接続に加え、Visa Dispute、Mastercard Chargeback、JCB Dispute などのブランドチャージバック規則があり、加盟店が商品を届けない場合にカード会員が戻る経路を持つ。専業 BNPL の紛争メカニズムは事業者ごとに異なり、Net Protections / Paidy などは紛争手順を公表しているが、法定の事業者横断チャージバック枠組みは存在しない。[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] チャージバック section を参照。
- **「経済産業省の行政処分を受けた後払い事業者はどう確認するか」** 現在の行政処分状況は、経済産業省の後払い行政処分状況ページ (atobaraigyouseisyobunnojoukyou.html) を確認する。消費者庁の決済トラブル注意喚起ページも、一般的な後払い消費者保護問題に言及している。

## 他マトリクスとの相互参照

- vs **[[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]]**: この項目は、チェックアウト時の BNPL 機能が、個別信用購入あっせん、包括信用購入あっせん、認定包括、少額包括、免除、資金移動業分類のいずれを発動するかという商品別分類テストを示す。このマトリクスは、その分類テストが指す事業者レベルの面である。
- vs **[[payments/credit-purchase-card-operators-japan-index|credit-purchase card operator registry]]**: この項目は、経済産業省の登録個別信用購入あっせん業者 (138 operators as of 2026-04 month-end) と登録包括信用購入あっせん業者 (241 operators) の登録簿追跡面である。このマトリクスは、それら登録のうち BNPL アクティブな部分集合をプロファイルする。
- vs **[[payments/japan-consumer-credit-operator-comparison-matrix|consumer-credit operator comparison matrix]]**: この項目は、カード / 消費者金融 / 信販 / BNPL / 自動車 / 住宅 / 教育 / マイクロクレジット / PSP 隣接という九つの消費者信用事業者カテゴリを扱う。このマトリクスは BNPL カテゴリの拡大表示であり、信販側事業者 (APLUS、JACCS、Orico、Credit Saison) は両方の面に現れる。
- vs **[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]**: この項目は、カード、コード、A2A、プリペイドをスキーム分類レベルで扱う。BNPL はカード分類内のサブカテゴリとして扱われる。このマトリクスは、BNPL サブカテゴリを事業者ごとに分解する。
- vs **[[payments/japan-jcb-issuer-ecosystem-positioning-matrix|JCB issuer ecosystem positioning matrix]]** and **[[payments/japan-merchant-psp-competitive-scorecard|merchant PSP competitive scorecard]]**: これらのマトリクスは、それぞれ issuer 側と加盟店 PSP 側を扱う。本マトリクスは、その双方を BNPL 事業者側から補完する。カード issuer バックエンド BNPL (PayPay あと払い via PayPay Card) は、PayPay Card が該当時に JCB ブランドライセンシーである JCB issuer マトリクスとの交点にも、SB Payment Service が PayPay アンカー加盟店の加盟店側 processor である PSP スコアカードとの交点にも位置する。

## 近年の規制圧力タイムライン

| 日付 | 出所 | 変更点 |
|---|---|---|
| 2018 | METI | 改正割賦販売法が加盟店調査義務を強化。個別信用購入あっせん登録の BNPL 事業者に直接影響し、限界的な加盟店関係のオンボーディングコストを引き上げた |
| 2020 改正 | METI | 改正割賦販売法が認定包括信用購入あっせん業者 + 少額包括信用購入あっせん業者の枠組みを導入し、一部 BNPL 事業者をより軽い包括制度に明示的に取り込む |
| 2021-04 | METI | 2020 改正割賦販売法施行。新しい階層枠組みが運用開始 |
| 2021-09 | Cross-border M&A | PayPal Holdings が [[payment-firms/paidy\|Paidy]] を約 USD 2.7 bn で買収。日本 BNPL 領域で初の大型外資親会社による買収 |
| 2021-12 | TSE | [[payment-firms/net-protections-hd\|Net Protections HD]] が TSE PRIME (7383) に上場。日本初の専業 BNPL 事業者上場 |
| 2024 | METI / CAA | 改正割賦販売法の継続運用下で BNPL 明確化ラウンド、消費者庁の決済トラブル注意喚起チャネル更新 |
| 2024-2025 | METI | 後払い行政処分状況ページを行政処分確認用に維持。選択的な行政処分を発出 |
| 2025-03 | METI / J-CSC | EC カード決済で EMV 3-DS 義務化。カード EC 摩擦増加により BNPL 採用へ二次的影響 ([[payments/japan-card-security-authentication-controls\|Japan card security and authentication controls]] 参照) |
| Ongoing | CAA | BNPL の現金化目的悪用と、過剰借入を招く UX パターンについて継続的に注意喚起 |

## 取引モデルの分解

このマトリクスを読む際、「BNPL」を一つの形に平板化すべきではない。上記の BNPL 事業者は少なくとも四つの異なる取引モデルを使っており、それぞれリスクと経済性が異なる。

| 取引モデル | 事業者 | 主なリスク特性 |
|---|---|---|
| **取引ごとの請求書 (≤2か月、一括払い)** | NP 後払い, Kuroneko Atobarai, GMO Postpay, Komoju Atobarai | 短期債権、低い取引単価、加盟店ミックスにより事業者レベルのデフォルトリスクが集中、コンビニ / 銀行振込回収 |
| **月次サイクル集約ウォレット** | atone, Paidy, Merpay 翌月払い | 複数加盟店の集約請求、消費者側与信枠管理、月次デフォルト率を観測しやすいサイクル |
| **分割 / split-pay (3-pay, 6-pay, longer)** | Paidy 3-pay + 6-pay variants, 信販分割レーン (APLUS, JACCS, Orico, Credit Saison) | 期間が長く、取引単価が高くなりやすい。改正割賦販売法上の分割レベルの開示義務 |
| **カード issuer バックエンド BNPL 機能** | PayPay あと払い (via PayPay Card), d払いカード features, others | カード issuer 与信枠の経済性。個別ではなく包括信用購入あっせん登録を通る |

取引モデルが重要なのは、(a) 取引ごとの請求書事業者は、月次ウォレット事業者とユニットエコノミクスが大きく異なるためである。前者は単一加盟店手数料、後者は消費者獲得 LTV が中心になる。(b) 分割 / split-pay 事業者は、≤2か月一括払い免除モデルとは異なる改正割賦販売法上の開示義務を負う。(c) カード issuer バックエンド BNPL は、規制上はカード issuer 機能であり、別個の BNPL 商品ではない。

## 信用リスクモデルの分解

事業者損失負担、加盟店損失負担、共同負担の線引きは、マトリクス全体で最も重要な違いの一つである。主な三つのパターンは次のとおり。

| リスクモデル | 事業者 | 経済的意味 |
|---|---|---|
| **事業者損失負担 (保証モデル)** | NP 後払い, Kuroneko Atobarai, Paidy, atone, most pure-plays | 加盟店は売掛金リスクを完全に外部化する。事業者は補償として高い加盟店手数料を得る。事業者は有効な与信審査 + 回収を行う必要がある |
| **加盟店損失負担 + 事業者は回収者** | 一部のニッチ / 小規模 BNPL 構成 | 加盟店が売掛金リスクを保持する。事業者は回収 / 請求サービスのみで低めの手数料を得る |
| **共同負担 / split-loss モデル** | 一部の GMO Postpay / Komoju Atobarai 構成 | 加盟店と事業者が未回収リスクを計算式で分担する。加盟店手数料は調整される |
| **カード issuer 与信枠モデル** | PayPay あと払い, 信販分割, card-issuer BNPL backends | カード issuer / 信販がカード会員与信枠上の信用リスクを負う。消費者側の与信判断は取引ごととは別 |

専業 BNPL 事業者は、ほぼ例外なく事業者損失負担モデルを使う。加盟店が単に売掛金を自社で抱える場合と比べ、事業者が独立して存在する理由となる加盟店手数料の経済性を生むためである。事業者損失負担の構造的課題は、事業者が B/S 上で消費者信用サイクルの変動を吸収しなければならない点である。そのため、上記の資金源分析のとおり、ABS パイプラインへのアクセスが事業者の存続可能性にとって極めて重要になる。

## 事業者クラスターの要約

マトリクス表をまとめて読むと、四つの事業者クラスターが現れる。

1. **事業者損失負担モデルの専業 BNPL**: Net Protections HD / NP 後払い、atone、Kuroneko Atobarai (Yamato)、PayPal 傘下の Paidy、Komoju Atobarai。これらは売掛金リスクを負い、加盟店手数料を得る。経済性は引受モデル + ABS アクセスで決まる。
2. **複数ライセンススタックを持つウォレットアンカー型 BNPL**: Merpay / Mercari Smart Money、PayPay あと払い (via PayPay Card backend)、d払い / au PAY extensions。これらは資金移動 + 個別または包括信用購入あっせんをさまざまに組み合わせ、該当する場合はウォレット側の消費者関係 + カード issuer ABS パイプラインから恩恵を受ける。
3. **信販ルーツの BNPL 拡張**: APLUS、JACCS、Orico、Credit Saison。これらは個別登録簿に参加する完全な信販事業者であり、オートローン、教育ローン、リフォーム、カードなど多数の商品中の一チャネルとして BNPL 風商品を提供する。構造的優位は、複数ラインの信販経済性 + Bank-FG funding である。
4. **小規模 / 新興 / 垂直特化型の専業**: Smarpay、Lattepay、b/43, に加え、小規模な個別登録事業者のロングテール。ABS アクセスとクロスプロダクト LTV が限られるため、5-10 年程度の視野では最も高い統合圧力に直面する。

読者が事業者をどのクラスターへ割り当てるかは、その事業者の 3-5 年の競争軌道を予測するうえで、現在の GMV や加盟店数より有用である。

## 関連項目

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

## 出典

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
