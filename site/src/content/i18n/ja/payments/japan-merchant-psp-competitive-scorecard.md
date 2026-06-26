---
source: payments/japan-merchant-psp-competitive-scorecard
source_hash: 837071ef5461c24f
lang: ja
status: machine
fidelity: ok
title: "日本の加盟店 PSP 競争スコアカード"
translated_at: 2026-06-19T06:09:18.183Z
---

# 日本の加盟店 PSP 競争スコアカード

## TL;DR

日本の加盟店 PSP（Payment サービス提供事業者、決済代行業者）市場は、消費者から見えるキャッシュレスのランドスケープが示唆するよりも **断片化し、より階層化している**。市場は少なくとも四つの次元に沿って分かれる — (a) 従来型カードゲートウェイ PSP（[[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]、[[payment-firms/sb-payment-service|SB Payment Service]]、[[payment-firms/dg-financial-technology|DG Financial Technology]]、[[payment-firms/gmo-epsilon|GMO Epsilon]]）、(b) QR アグリゲーター PSP（[[payment-firms/netstars|Netstars]]）、(c) グローバルチェックアウト PSP（Stripe Japan、PayPal Japan、Square Japan、Komoju）、(d) ウォレットプラットフォームアクワイアラ（Amazon Pay、Rakuten Payment、Recruit Card / 受取代行）— それぞれが異なる加盟店手数料の経済性、決済スピード、垂直特化、M&A 史を持つ。このスコアカードは、ゲートウェイを選ぶ加盟店と、日本における EC 決済フローを実際に誰が支配しているかを理解しようとするセクター読者にとって重要な軸に沿って、十二の主要 PSP を並べて比較する。これは [[payments/japan-card-issuer-acquirer-processor-split|card 発行会社 / アクワイアラ / processor split]] の加盟店側の対であり、[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] の事業者側の対である。

## ウィキ上の位置づけ

これは [[payments/INDEX|payments index]] の下に加盟店側 PSP リファレンスとして位置する。技術スタックの観点については [[payments/card-acquiring-japan-stack|Japan card acquiring stack]] と、役割分離のフレームワークについては [[payments/japan-card-issuer-acquirer-processor-split|card 発行会社 / アクワイアラ / processor split]] と、決済サイクルと加盟店エクスポージャーの観点については [[payments/psp-merchant-settlement-risk|PSP 加盟店決済 risk]] と、PSP がますます担う A2A ラインについては [[payments/account-to-account-payment-japan|account-to-account payment in Japan]] と、銀行側の直接ルートについては [[payments/merchant-bank-pay-account-direct-acquiring|加盟店 Bank Pay account direct-acquiring]] と、このエントリが意図的に補完するクロススキームの経済性については [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] と、そして事業者のアンカーである [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]、[[payment-firms/gmo-epsilon|GMO Epsilon]]、[[payment-firms/sb-payment-service|SB Payment Service]]、[[payment-firms/dg-financial-technology|DG Financial Technology / DGFT]]、[[payment-firms/netstars|Netstars]]、[[payment-firms/freee|freee]]、[[payment-firms/money-forward|Money Forward]]、[[payment-firms/famima-digital-one|FamiMa Digital One]]、[[payment-firms/seven-payment-service|Seven Payment Service]] と併せて読むこと。

## なぜこのマトリクスが重要なのか

PSP を選ぶ加盟店 — または日本の EC スタックを読もうとするセクター読者 — は、並列比較なしには通常、三つの構造的ポイントを読み違える。第一に、**「PSP」は一つの商品ではない**：カード受け入れゲートウェイは QR アグリゲーターとは構造的に異なり、それは Stripe のようなグローバルチェックアウト商品とは構造的に異なる。第二に、**アクワイアラの役割**：一部の PSP は外部アクワイアラにパススルーする純粋な技術的プロセッサーであり、他のものはそれ自身が割賦販売法上の加盟店契約締結事業者（アクワイアラ）であり、加盟店のリスクエクスポージャーはそれに応じて異なる（[[payments/psp-merchant-settlement-risk|PSP 加盟店決済 risk]] を参照）。第三に、**決済スピードと手数料モデル**：Square や PayPay の加盟店プランの小規模加盟店は、GMO-PG や SB Payment Service の契約の大企業とは根本的に異なる決済体験を得る。このスコアカードは三つすべてを浮かび上がらせる。

### GMO ペイメントゲートウェイ（GMO-PG、東証 PRIME 3769）

[[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] は、加盟店数と処理高で日本最大の純粋 PSP である。1995-03-25 に株式会社カードコマースとして設立され、2000,  に GMO-PG に改称、2005,  に東証マザーズに上場、2008 に東証一部（現 PRIME）へ移行。[[business/gmo-internet-group|GMO Internet Group]] の連結子会社。EC 加盟店基盤は報道では 30 万+ 店舗。マルチプロダクトライン：カードゲートウェイ、コード決済、コンビニ決済、銀行振込収納、BtoB インボイス / 後払い、Pay.JP デベロッパー SDK（Stripe 型の競合）、NextPay（ベトナム）・ECPay（台湾）経由のトランスアジアゲートウェイ。SMBC GMO PAYMENT JV 経由で [[card-issuers/smbc-card|SMBC Card]] と戦略的関係。加盟店決済データに基づくトランザクションレンディングの副業。

GMO-PG の特徴的なポジション：**マルチアクワイアラ関係ブローカー** — PSP はブランドごとに複数のカードアクワイアラに加盟店をルーティングし、METI のクレジットカード番号等取扱契約締結事業者リストに自身の加盟店契約締結事業者登録を保有し、決済の信頼性と統合の深さが表面的な手数料率よりも重要な大量取引の加盟店アカウントを争う。

### GMO イプシロン（GMO-PG の子会社）

[[payment-firms/gmo-epsilon|GMO Epsilon]] は GMO ペイメントゲートウェイの中小加盟店に特化した PSP であり、GMO-PG のエンタープライズ / ミッドマーケットの保有契約とは異なる加盟店セグメントに対応するため、別個のブランドとして構築されている。両者は [[business/gmo-internet-group|GMO Internet Group]] 決済の傘下で兄弟エンティティとして運営され、GMO イプシロンがより高ボリューム / 小口の加盟店アカウント（小規模 EC ストア、オンラインサービス、コンテンツ課金加盟店）を扱い、GMO-PG がより大きなエンタープライズ契約を扱う。

特徴的なポジション：**一つのグループ内での二ブランドの小規模加盟店＋エンタープライズの分割** — GMO インターネットグループは、別個のブランドの PSP を通じて加盟店規模スペクトルの両端を運営しており、これは Stripe（すべての規模に一つの商品）や Square（小規模・マイクロに一つの商品）とは構造的に異なる。

### SB ペイメントサービス（SBPS、SoftBank Group）

[[payment-firms/sb-payment-service|SB Payment Service / SBペイメントサービス]] は SoftBank Group の PSP であり、コード決済処理のために [[payment-firms/paypay|PayPay]] と、EC 加盟店受け入れのために Yahoo! Japan Shopping と深く統合している。SBPS は SoftBank グループの EC 加盟店基盤と、単一の PSP から統合されたカード＋コード＋PayPay の受け入れを望む外部 EC 加盟店基盤を扱う。METI のクレジットカード番号等取扱契約締結事業者リスト上の加盟店契約締結事業者であり、包括信用購入あっせん業者ラインの事業者である。

特徴的なポジション：**ウォレットアンカー型 PSP** — SBPS の PayPay 統合は、コード決済を主要チャネルとして望む加盟店に対して構造的優位を与え、その SoftBank グループのアンカーは Yahoo! Japan Shopping / ZOZOTOWN / LINE 付属の EC プロパティとの関係上の強さを与える。

### DG フィナンシャルテクノロジー / DGFT（デジタルガレージグループ）

[[payment-firms/dg-financial-technology|DG Financial Technology / DGFT]] はデジタルガレージ（東証 PRIME 4819）の決済子会社であり、クロスボーダー受け入れ、マルチカレンシー決済、Square との統合（デジタルガレージは Square が独自の日本エンティティを設立する前は Square の日本パートナーだった）に重点を置いて、ハイエンドの EC とエンタープライズ加盟店にサービスを提供する。DGFT は Veritrans（デジタルガレージが買収した長年の PSP ブランド）のアグリゲーターとしても機能する。

特徴的なポジション：**エンタープライズ＋クロスボーダー PSP** — DGFT はマルチカレンシー処理、高度な不正スクリーニング、テクノロジーパートナー経済圏（DG は多くのフィンテック隣接スタートアップに投資を保有）で差別化し、国際カード受け入れと受け入れ率最適化がコモディティ PSP に対するプレミアム手数料構造を正当化する加盟店をターゲットとする。

### Netstars（QR アグリゲーターの純粋）

[[payment-firms/netstars|Netstars]] は日本の主導的な **マルチウォレット QR アグリゲーター** であり、一つの端末 / 一つの QR コードで複数のコード決済ウォレット（PayPay、d払い、au PAY、楽天ペイ、メルペイ、WeChat Pay、Alipay+、AppPay など）を受け入れられる StarPay 加盟店受け入れ商品を運営する。各ウォレット契約を直接結ぶよりも、単一の統合経由でのマルチウォレット受け入れの方が構造的に効率的な加盟店カテゴリー — コンビニ、ドラッグストア、レストラン、小売チェーン、インバウンド観光客の多い加盟店 — をターゲットとする。

特徴的なポジション：**ウォレット非依存ゲートウェイ** — GMO-PG や SBPS（カードファーストでコードを付加機能とする傾向）とは異なり、Netstars はコード決済ファーストの加盟店向けに目的特化して構築されており、クロスウォレット受け入れ需要の自然な相手方である。構造的リスクは、ウォレット事業者がアグリゲーターを迂回する独自の加盟店直接の経済性を推進する可能性があることである。

### Square Japan（Block Inc. 子会社）

Square Japan は Block, Inc.（旧 Square, Inc.）の日本部門である。カードリーダー＋mPOS アプリ＋統合決済サービスパッケージで小規模 / マイクロ加盟店をターゲットとし、その米国商品と形が同一である。決済スピードが Square を差別化する：翌営業日決済（みずほ銀行 / 三井住友銀行の口座保有者ではさらに高速）が、T+M の従来型加盟店バッチに対する目玉の価値提案である。カードブランド受け入れは Visa、Mastercard、JCB、AMEX、Diners、Discover、加えて QR コード決済（PayPay 等）と Square Reader 経由の Suica / IC カードをカバーする。

特徴的なポジション：**マイクロ加盟店＋摩擦のないオンボーディング** — Square の価値提案は「土曜にアカウントを開設し、月曜に決済を受け入れる」であり、月額料金なし、最低ボリューム要件なし。Stripe（オンライン重視）に対してはより小売 POS に優しいことで、PayPay（無料のゼロ手数料プロモ）に対しては PayPay が提供しないクレジットカードブランド受け入れを提供することで競争する。

### Stripe Japan

Stripe Japan は Stripe, Inc. の日本部門である。API ファーストの決済統合で、デベロッパー、スタートアップ、デジタルファーストの加盟店をターゲットとし、カードブランド（Visa、Mastercard、JCB、AMEX）、コード決済（PayPay、コンビニ決済、銀行振込、Apple Pay、Google Pay）、定期課金 / サブスクリプションのプリミティブをサポートする。Stripe Japan は自身の物理的 POS ハードウェアを運営しない；商品は完全にオンライン / アプリ組み込みである。

特徴的なポジション：**デベロッパー API ファースト** — Stripe のドキュメントの深さ、API の使い勝手、SDK の品質は、同様のボリュームに対する GMO-PG や SBPS からの交渉済み料率よりも高い表面手数料率にもかかわらず、カスタムチェックアウトを構築する技術系加盟店のデフォルトの選択肢とする。Pay.JP（GMO-PG のデベロッパー SDK 商品）がこの軸での主要な日本ネイティブの競合である。

### PayPal Japan

PayPal Japan（PayPal Pte. Ltd. 日本支店、[[payment-firms/paypal-pte-ltd-japan|PayPal Pte. Ltd. Japan]]）は日本の加盟店向けに PayPal チェックアウト商品を運営し、また [[payment-firms/paidy|Paidy]]（2021-09  に約 USD 2.7bn で買収）を所有しており、これがそのコアのチェックアウト事業に隣接して PayPal Japan に後払い / BNPL のフットプリントを与える。PayPal の加盟店提案はクロスボーダー受け入れ、購入者保護、グローバルチェックアウトフローとの統合を強調する。

特徴的なポジション：**クロスボーダーファースト** — PayPal の価値提案はそのグローバルな受け入れフットプリントに依拠し、日本から国際的に販売する加盟店、またはインバウンドの外国人購入者に販売する加盟店に対して最も強い。国内ファーストの加盟店は、国内の代替（GMO-PG、SBPS、Stripe）が成熟したため、2015  以前よりも PayPal への選好が少ない。Paidy の所有は、PayPal チェックアウトの主にカード / ウォレットのベースを補完する後払いラインを加える。

### Komoju（Degica、ゲーム / デジタルコンテンツ重視）

Komoju（株式会社 Degica）は **デジタルコンテンツ、ゲーム、ソフトウェア、インバウンドのクロスボーダー EC** 加盟店に特化した東京本社の PSP である。国際カードブランド、コンビニ決済、Pay-Easy（銀行振込）、コード決済、後払い / Atobarai（Komoju Atobarai は Komoju 自社ブランドの BNPL 商品）を含む幅広い決済方法のミックスをサポートする。Komoju Atobarai は METI リスト上の個別信用購入あっせん登録である。

特徴的なポジション：**垂直特化型 PSP** — Komoju のゲーム / デジタルコンテンツ重視は、マイクロトランザクション課金、仮想通貨決済、ゲーム加盟店に典型的なクロスボーダーの購入者ミックスにおける専門性を与える。Steam / Sony PlayStation / 各種ゲームパブリッシャーは例示的な加盟店セグメントである。

### Amazon Pay

Amazon Pay（Amazon Japan G.K. / Amazon Web Services Japan）は、Amazon アカウントをチェックアウトとする商品であり、サードパーティの加盟店が購入者の保存済み Amazon アカウント（カードオンファイル、住所オンファイル）経由で決済を受け入れられる。Amazon の登録済み購入者基盤を活用してチェックアウトの摩擦を減らしたい EC 加盟店をターゲットとする。

特徴的なポジション：**アカウントアンカー型 PSP** — Amazon Pay の価値はゲートウェイの効率性ではなく、**購入者側の保存済みアカウント＋Amazon Prime の隣接性** である。加盟店手数料はカードゲートウェイ PSP と競争力があるが、加盟店にとっての戦略的価値は手数料率の効率性ではなく、摩擦のないチェックアウトによる購入者転換の引き上げである。

### Rakuten Payment / 楽天ペイメント楽天ペイメント株式会社は、加盟店向けに [[payment-firms/rakuten-fg|Rakuten FG]] 決済スタックを運営する — Rakuten Pay（コード決済）、Rakuten Card 受け入れ、Rakuten Bank 決済、R-Card 連携。[[card-issuers/rakuten-card|Rakuten Card]]（カード発行者）と Rakuten Point ロイヤルティ層と密接に統合。Rakuten 経済圏の購入者獲得（Rakuten Members 登録、Rakuten Point の獲得 / 利用）から利益を得る加盟店をターゲットとする。

特徴的なポジション：**経済圏アンカー型 PSP** — SoftBank の SB Payment Service や Amazon の Amazon Pay と同様に、Rakuten Payment の構造的優位は Rakuten 経済圏の専属購入者基盤である。Rakuten 経済圏外の加盟店も Rakuten Pay を使用できるが、価値提案の経済圏引き上げ要素を失う。

### Recruit Card / Recruit MUFG Business

[[payment-firms/recruit-mufg-business|Recruit MUFG Business]] は Recruit Holdings と [[megabanks/mufg|MUFG]] の JV であり、Recruit Card 商品と、Air PAY（Recruit が運営する mPOS / QR 受け入れ商品）や Air Regi（POS 統合）を含む関連加盟店サービスの提供を運営する。Air PAY は日本の小規模加盟店 / レストラン / パーソナルサービス加盟店セグメントにおいて意味のあるカード / コード受け入れ商品である。

特徴的なポジション：**Recruit 経済圏＋mPOS** — Recruit の HotPepper Beauty / HotPepper Gourmet / Jalan / SUUMO の予約・発見商品は、Air PAY に他のどの PSP も持たない加盟店獲得チャネルを与える。予約フロー＋決済受け入れ＋POS 統合の組合せは構造的に複製が困難である。

## 大比較マトリクス表

| PSP | 親会社 / グループ | 上場 | 設立 | 主力加盟店基盤 | 報道された加盟店数 | カードブランドサポート | コード決済サポート | A2A / Bank Pay サポート | コンビニ / 銀行振込 | Suica / IC プリペイド | BNPL / 後払い統合 | 決済スピード（典型）| 手数料モデル（小規模加盟店ベースライン）| 垂直特化 | アクワイアラの役割（自社 / 外部）| M&A / 親会社史 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **[[payment-firms/gmo-payment-gateway\|GMO-PG]]** | [[business/gmo-internet-group\|GMO Internet Group]] | 東証 PRIME 3769 | 1995 （カードコマースとして）| エンタープライズ＋ミッドマーケット EC | ~30万+ 店舗 | Visa / MC / JCB / AMEX / Diners / Discover | ゲートウェイ経由で PayPay / d払い / au PAY / 楽天ペイ | Bank Pay / 銀行振込 | あり（マルチコンビニ）| 限定的 | BtoB 後払い 自社＋3rd-party | 設定可能 T+5 ～T+M | ボリュームで交渉；大量取引の料率は最低水準 | マルチ垂直；エンタープライズ | 自社加盟店契約＋マルチアクワイアラルーティング | GMO グループ内部；[[card-issuers/smbc-card\|SMBC Card]] との SMBC GMO PAYMENT JV |
| **[[payment-firms/gmo-epsilon\|GMO Epsilon]]** | [[business/gmo-internet-group\|GMO Internet Group]] | 子会社 | 2000 年代 | 中小 EC、コンテンツ / サブスクリプション | 数万 | Visa / MC / JCB / AMEX | PayPay / d払い / au PAY 等 | Bank Pay | あり | 限定的 | 3rd-party 後払い統合 | T+M～T+5 | より低い最低；GMO-PG エンタープライズより高い表面料率 | 小規模加盟店 EC | GMO-PG インフラ / 外部アクワイアラへのパススルー | GMO インターネットグループ内部のポジショニング |
| **[[payment-firms/sb-payment-service\|SB Payment Service]]** | SoftBank Group + PayPay FG | 子会社 | 2004 （Yahoo! ウォレット前身）| Yahoo! Japan Shopping、ZOZOTOWN、LINE-EC、外部 | 数十万 | Visa / MC / JCB / AMEX | PayPay（深い統合）＋楽天ペイ / au PAY / d払い | Bank Pay | あり | 限定的 | PayPay あと払い / BNPL 統合 | T+M 従来型；PayPay アンカーでより高速 | 交渉；PayPay 加盟店に有利な料率 | SoftBank 経済圏＋LINE 連携 EC | 自社加盟店契約 | Yahoo!ウォレット前身；PayPay FG 下で再編 |
| **[[payment-firms/dg-financial-technology\|DG Financial Technology]]** | デジタルガレージ（東証 PRIME 4819）| 子会社 | Veritrans の遺産 | エンタープライズ＋クロスボーダー EC | 数万 | Visa / MC / JCB / AMEX / Diners / UnionPay | あり（マルチウォレット）| Bank Pay | あり | 限定的 | 3rd-party 後払い統合 | 設定可能 | エンタープライズクロスボーダーにプレミアム | エンタープライズクロスボーダー | 自社加盟店契約 | デジタルガレージが Veritrans を買収；Square 直接参入前は Square Japan パートナー |
| **[[payment-firms/netstars\|Netstars]]** | 独立系（Recruit Strategic Partners / その他のエクイティ裏付け）| 非上場 | 2009 | マルチウォレット加盟店受け入れ | 数十万の加盟店ロケーション（マルチウォレット）| 限定的なカード重視 | すべての主要コードウォレット＋Alipay+ / WeChat Pay | 限定的 | 限定的 | 限定的 | 限定的 | T+M 典型 | トランザクションごとのマルチウォレット手数料 | コードファーストのマルチウォレット集約 | パススルーアグリゲーター | 独立系の QR パイオニア；Recruit 隣接の投資家基盤 |
| **Square Japan** | Block, Inc.（米国親会社）| 子会社 | 2013  日本参入 | マイクロ / 小規模加盟店小売 | 数十万 | Visa / MC / JCB / AMEX / Diners / Discover | Square Reader とコード受け入れ経由で PayPay / d払い | 限定的 | 限定的 | Square Reader 経由で Suica / IC カード | 限定的 | 翌営業日（みずほ / SMBC パートナー）| 3.25-3.75% MDR；月額料金なし | マイクロ加盟店小売 / レストラン | 自社加盟店契約 | Block（米国）親会社；Square Japan 以前は DGFT-Square パートナーシップ経由 |
| **Stripe Japan** | Stripe, Inc.（米国親会社）| 子会社 | 2016  日本参入 | デベロッパー / スタートアップ / デジタル | 公表は数万 | Visa / MC / JCB / AMEX | PayPay / コンビニ / 銀行振込 / Apple Pay / Google Pay | 銀行振込経由で限定的 | コンビニ決済、銀行振込 | 限定的 | 限定的（カスタム加盟店側統合）| 設定可能 | 3.6% ベースライン；ボリューム階層 | デベロッパー API ファースト / デジタル | 自社加盟店契約 | Stripe（米国）親会社；決済のため mizuho-fg / SMBC と提携 |
| **[[payment-firms/paypal-pte-ltd-japan\|PayPal Japan]]** | PayPal Holdings（米国親会社）| 子会社 | 2000 年代の日本 | クロスボーダー EC；SaaS；国際加盟店 | 数十万 | Visa / MC / JCB / AMEX（PayPal ウォレット連携経由）| PayPal ウォレット自体 | 限定的 | 限定的 | 限定的 | Paidy（[[payment-firms/paidy\|Paidy]]）後払い統合 | T+M；PayPal ウォレットは PayPal 残高へ即時 | 3.6% + JPY 40 / tx ベースライン（変動）| クロスボーダー / 国際 EC | 自社加盟店契約 | Paidy を 2021-09  に買収（~USD 2.7bn）|
| **Komoju（Degica）** | Degica（独立系＋投資家裏付け）| 非上場 | 2013 | ゲーム / デジタルコンテンツ / インバウンド EC | 数万 | Visa / MC / JCB / AMEX | PayPay / d払い / 楽天ペイ / au PAY | 銀行振込 | コンビニ決済、Pay-Easy | 限定的 | Komoju Atobarai（自社ブランド BNPL）| 設定可能 | 方法ごとのプライシング | ゲーム / デジタルコンテンツ / クロスボーダー | 自社加盟店契約＋自社 BNPL | 独立系；投資家裏付け |
| **Amazon Pay** | Amazon Japan / Amazon 米国親会社 | 子会社 | 2007  日本ローンチ | EC 加盟店（Amazon 購入者アカウント活用者）| 数万 | 購入者 Amazon アカウント経由のカードオンファイル | 限定的 | 限定的 | 限定的 | 限定的 | 限定的 | 設定可能 | カードゲートウェイ料率と同等 | EC チェックアウト摩擦の削減 | 購入者アカウントアンカー付きパススルー | Amazon 米国親会社戦略 |
| **Rakuten Payment** | [[payment-firms/rakuten-fg\|Rakuten FG]] | 子会社 | Rakuten Pay 2016  ローンチ | Rakuten 経済圏加盟店＋外部 | 数十万 | Rakuten Card 直接＋Visa / MC / JCB / AMEX | Rakuten Pay アンカー | 限定的 | 限定的 | 限定的 | Rakuten グループ BNPL 隣接 | T+M；Rakuten 経済圏優遇 | 交渉；Rakuten 経済圏に有利 | Rakuten 経済圏加盟店 | 自社＋Rakuten Card 連携 | Rakuten グループ内部再編 |
| **[[payment-firms/recruit-mufg-business\|Recruit Card / Air PAY]]** | Recruit Holdings + [[megabanks/mufg\|MUFG]] JV | 子会社 | Air PAY 2012  ローンチ | 小規模加盟店＋レストラン＋パーソナルサービス | 数十万の Air PAY アカウント | Visa / MC / JCB / AMEX / Diners | PayPay / d払い / au PAY / 楽天ペイ等 | 限定的 | 限定的 | Air PAY Reader 経由で Suica / IC カード | 限定的 | T+M；みずほ / SMBC 口座は翌日オプション | 3.24-3.74% MDR；月額料金なし | レストラン＋ビューティー＋小規模サービス | 自社加盟店契約 | カード / 決済のため Recruit-MUFG JV 設立 |

## サイド軸 — 処理 GMV（おおよその公開報道の指標）

報道された GMV / 処理高の数字はこのピアセット全体で一様に開示されていないため、このサイド軸は部分的である。GMO ペイメントゲートウェイは年次の処理高を IR で公表している（兆円のレンジで、そのエンタープライズ加盟店基盤を反映）。SB ペイメントサービスの処理高は、スタンドアロンの PSP としてではなく SoftBank Group / PayPay FG の連結開示の中で報告される。DGFT の処理高はデジタルガレージのセグメント開示の中で報告される。Square Japan、Stripe Japan、PayPal Japan、Komoju、Amazon Pay、Rakuten Payment は PSP セグメントレベルで一貫してスタンドアロン開示されていない；読者は開示された構成要素について親会社の IR を参照すべきである。

| PSP | 処理高の開示面 | 桁感（公開ソースの指標）|
|---|---|---|
| **GMO-PG** | 自社 IR、四半期 | 年間処理高兆円 |
| **SB Payment Service** | SoftBank Group / PayPay FG 連結 | PayPay コード決済ボリュームを集約すれば 兆円 |
| **DGFT** | デジタルガレージのセグメント開示 | 数千億～低い兆円 |
| **Netstars** | 公開は限定的；マルチウォレット集約 | ウォレットごとの処理は公開で集約されていない |
| **Square Japan** | Block 連結 | 数百億円規模（日本部分）|
| **Stripe Japan** | スタンドアロン開示なし | 公開開示なし |
| **PayPal Japan** | スタンドアロン開示なし | 公開開示なし |
| **Komoju** | スタンドアロン開示なし | 公開開示なし |
| **Amazon Pay** | スタンドアロン開示なし | 公開開示なし（Amazon セグメント）|
| **Rakuten Payment** | Rakuten グループのセグメント開示 | Rakuten Pay + Rakuten Card を集約すれば 兆円 |
| **Recruit / Air PAY** | Recruit Holdings のセグメント開示 | 数百億円規模 |

読者は、いかなる具体的な数字も **公開ソース引用のみ** として扱い、当該年度の最新の IR と照合して検証すべきである — 処理高の数字は、EC 浸透がシフトし PSP の加盟店チャーンが起こるにつれて、前年比で大きく動く。

## クロス PSP の技術的差別化

| 能力 | GMO-PG | GMO Epsilon | SBPS | DGFT | Netstars | Square | Stripe | PayPal | Komoju | Amazon Pay | Rakuten Pay | Recruit / Air PAY |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| EMV 3-DS 2.x 準拠（2025-03  義務）| あり | あり | あり | あり | 該当なし（コードファースト）| あり | あり | あり | あり | あり | あり | あり |
| トークン化（ネットワークトークン）| あり | あり | あり | あり | 該当なし | あり | あり | あり | あり | あり | あり | あり |
| 定期課金 / サブスクリプション | あり | あり | あり | あり | 限定的 | あり（Subscription）| あり（Billing）| あり（Subscriptions）| あり | 限定的 | あり | 限定的 |
| Apple Pay / Google Pay | あり | あり | あり | あり | 限定的 | あり | あり | あり | あり | 限定的 | あり | あり |
| マルチカレンシー決済 | あり（限定的）| 限定的 | 限定的 | あり（強み）| 限定的 | 限定的（日本のみ）| あり | あり | あり（クロスボーダー重視）| 限定的（日本-USD）| 限定的 | 限定的 |
| マーケットプレイス / 分割決済 | あり（カスタム）| 限定的 | あり | あり | 限定的 | あり（一部）| あり（Connect）| あり（Adaptive）| あり | 限定的 | あり | 限定的 |
| カスタム消し込みファイル | あり | あり | あり | あり | あり | 限定的 | あり | あり | あり | あり | あり | あり |
| インバウンド観光客ウォレットサポート（Alipay+、WeChat Pay）| あり（パートナー経由）| 限定的 | あり（パートナー経由）| あり（強み）| あり（ネイティブ）| 限定的 | 限定的 | 限定的 | あり | 限定的 | 限定的 | あり（パートナー経由）|

## 手数料の経済性 — 小規模加盟店の観点

どの PSP をオンボードするかを決める商店街の小規模加盟店にとって、表面手数料の比較は通常このように見える。実際の手数料は加盟店ごと、MCC ごとに交渉される。

| PSP | カード MDR ベースライン（小規模加盟店）| トランザクションごとの固定 | 月額最低 | オンボーディング時間 | ハードウェアコスト |
|---|---|---|---|---|---|
| **GMO-PG** | ボリュームで交渉；通常 2.5-3.5% | 変動 | エンタープライズではしばしば必須 | 数日～数週間 | EC：ゼロ；POS：外部 |
| **GMO Epsilon** | 3.0-3.6% | 変動 | GMO-PG より低い | 数日～一週間 | EC：ゼロ |
| **SB Payment Service** | 交渉 | 変動 | しばしば必須 | 数日～数週間 | EC：ゼロ |
| **DGFT** | 交渉；プレミアム階層 | 変動 | エンタープライズでは必須 | 数週間 | EC：ゼロ |
| **Netstars** | ウォレットごとの料率（通常 1.8-3.0% レンジ）| 変動 | より低い | 数日～一週間 | 印刷 QR または端末 |
| **Square Japan** | Visa/MC 3.25%；JCB/AMEX 3.75% | なし | なし | 承認後 1  営業日 | JPY 7,980 （Square Reader）またはゼロ（電話経由 mPOS）|
| **Stripe Japan** | 3.6% ベースライン | なし | なし | 1-2  営業日 | なし（オンラインのみ）|
| **PayPal Japan** | 3.6% + JPY 40 / tx（変動）| JPY 40 | なし | 1-2  営業日 | なし（オンラインのみ）|
| **Komoju** | 方法ごとのプライシング（変動）| 変動 | なし | 1-2  営業日 | なし（オンライン）|
| **Amazon Pay** | カード MDR と同等 | 変動 | なし | 数日 | なし（オンライン）|
| **Rakuten Pay** | 交渉；Rakuten 経済圏に有利 | 変動 | より低い | 数日～一週間 | EC：ゼロ |
| **Air PAY** | Visa/MC 3.24%；JCB/AMEX 3.74% | なし | なし | 1-2  週間 | Air PAY Reader はサブスクリプション / プロモで無料 |

## M&A と親会社史のパターン日本の PSP 市場は、このスコアカードが可視化する三つのおおまかな M&A / 再編の時代を経てきた：

1. **2010  以前 — 銀行側カードプロセッサーの統合。** 銀行系 FG のカードプロセッサーが現在の MUFG NICOS / SMBC Card の構成に合併し、純粋 PSP が成長する余地を残した。
2. **2010 年代 — 純粋 PSP のスケーリング。** [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] は [[business/gmo-internet-group|GMO Internet Group]] の傘下＋SMBC GMO PAYMENT JV 経由で成長；[[payment-firms/dg-financial-technology|DGFT]] はデジタルガレージの Veritrans 買収を通じて成長；[[payment-firms/sb-payment-service|SB Payment Service]] は SoftBank Group の再編経由で拡大；Netstars が QR アグリゲーターの純粋として登場。
3. **2020 年代 — グローバルチェックアウトの参入＋経済圏アンカーの統合。** Stripe Japan、Square Japan、PayPal Japan / [[payment-firms/paidy|Paidy]] 買収（2021-09）がグローバルチェックアウト PSP のフットプリントを確立；PayPay FG / SoftBank が SB Payment Service の下でウォレット側の受け入れを統合；Rakuten Payment が Rakuten 側の受け入れを統合。

第四の時代が **BNPL 統合**（PayPal 傘下の Paidy、Komoju Atobarai 等）と **A2A 受け入れ**（加盟店直接の Bank Pay）をめぐって 2024-2026  の窓で plausibly に出現しつつある — 両者ともまだ部分的で、PSP の経済性を再形成する。

## 境界ケース

- **「[[payment-firms/netstars|Netstars]] は PSP かウォレットアグリゲーターか？」** 両方。Netstars は加盟店ゲートウェイ（PSP 機能）とウォレットルーティング集約（マルチウォレット受け入れ）を提供する。カードアクワイアラではなく、主要なカード契約締結事業者として METI のクレジットカード番号等取扱契約締結事業者リストには載っていないが、ウォレット側の契約を通じてコード決済トランザクションをルーティングする。
- **「[[payment-firms/freee|freee]] や [[payment-firms/money-forward|Money Forward]] は PSP か？」** 古典的な意味では違う — これらは決済受け入れ機能（freee Pay、Money Forward Pay）を持つが、基盤となる PSP（しばしば GMO-PG、GMO Epsilon、またはパートナーアクワイアラ）を通じてルーティングする会計 / SaaS プラットフォームである。これらは決済統合を持つ加盟店側ソフトウェアであり、それ自体が PSP ではない。
- **「[[payment-firms/famima-digital-one|FamiMa Digital One]] や [[payment-firms/seven-payment-service|Seven Payment Service]] は PSP か？」** これらは、自身の小売ネットワーク向けの決済受け入れ能力に加えてより広いコード決済 / ウォレットの役割を持つコンビニ系 FG の決済事業者であるが、GMO-PG / SBPS / DGFT の意味でのマルチ加盟店 PSP ではない。これらは加盟店ゲートウェイ PSP よりも [[payments/funds-transfer-vs-prepaid-boundary|資金移動 / 前払式 boundary]] に近い位置にある。
- **「[[payment-firms/jal-payment-port|JAL Payment Port]] はどうか？」** これは JAL グループの決済と JAL グループ / マイレージプログラムの加盟店直接決済に特化した [[payment-firms/jal-payment-port|JAL Payment Port]] エンティティであり、マルチ加盟店の汎用 PSP ではない。
- **「UnionPay International Japan、Visa Worldwide Japan、Mastercard Japan はどうか？」** これらは PSP ではなくスキーム / ブランド事業者である。役割スタックにおいて PSP 層の上に位置する — 役割分離については [[payments/japan-card-issuer-acquirer-processor-split|card 発行会社 / アクワイアラ / processor split]] を参照。
- **「[[card-issuers/smbc-card|SMBC Card]]（アクワイアララインとして）のような加盟店アクワイアラはどこに当てはまるか？」** SMBC Card は発行者でありアクワイアラであり、PSP ではない。加盟店の SMBC Card との関係は通常、直接の加盟店アクワイアラ関係ではなく PSP（しばしば SMBC GMO PAYMENT JV 経由の GMO-PG）によって仲介される。SMBC Card のアクワイアララインは [[payments/card-acquiring-japan-stack|Japan card acquiring stack]] エントリに現れる。
- **「このマトリクスは [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] とどう関係するか？」** そのマトリクスはスキームクラスレベルでカード対コード対 A2A 対プリペイドをカバーする。このマトリクスは、四つすべてのスキームクラスの加盟店受け入れ側内の PSP / 加盟店ゲートウェイの次元を分解する。両者は直交している。

## PSP に対する最近の規制圧力

| 日付 | 出典 | 何が変わったか |
|---|---|---|
| 2018 | METI | 改正割賦販売法が加盟店調査義務を強化 — 加盟店契約締結事業者登録を保有する PSP のオンボーディングコストを引き上げた |
| 2020-2021 | METI / J-CSC | クレジットカードセキュリティガイドライン 5.0 / 5.1 — PCI DSS の期待、脆弱性スキャン義務、非保持の執行 |
| 2022-04-08 | JFTC | クレジットカード加盟店手数料報告 — PSP-加盟店手数料の透明性への圧力 |
| 2023-06-01 | METI + JFTC | JCB 加盟店手数料配分率の開示 — JCB ボリュームをルーティングする PSP に影響 |
| 2024-2025 | METI / J-CSC | ガイドライン 6.0 / 6.1：**2025-03 から EC カード決済に EMV 3-DS 必須**；非保持ルールの強化；脆弱性スキャン義務の拡大 — コンプライアンス負担は EC-PSP に重くのしかかる |
| 2025-2026 | METI | 手数料開示への継続的圧力がカードクラスからコード決済とプリペイド PSP 層へと広がる |

2025-03  の EMV 3-DS 義務は EC-PSP セグメントにとって最も重大な変更である。なぜなら、コンプライアンス作業は 3-DS 認証をチェックアウトフローに統合するために PSP 側にかかるからである。

## 他のマトリクスとのクロスリファレンス

- **[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]** との対比：そのマトリクスは事業者レベルでカード / コード / A2A / プリペイドのスキームクラスをカバーする。このマトリクスは、ほとんどの主要 PSP がマルチスキーム決済を受け入れるため、四つすべてのスキームクラスにわたる加盟店側ゲートウェイ / PSP 層を分解する。
- **[[payments/card-acquiring-japan-stack|Japan card acquiring stack]]** との対比：そのエントリは POS / EC チェックアウトから発行者決済までの技術スタックをカバーする。このマトリクスは、そのスタックのゲートウェイ / PSP 層に位置する特定の事業者を名指しする。
- **[[payments/japan-card-issuer-acquirer-processor-split|card 発行会社 / アクワイアラ / processor split]]** との対比：そのエントリは役割分離のフレームワークを確立する。このマトリクスは PSP / プロセッサー列を名指しの事業者で埋め、そのうちのどれが加盟店契約締結事業者の役割を追加で保有するかを示す。
- **[[payments/psp-merchant-settlement-risk|PSP 加盟店決済 risk]]** との対比：そのエントリは決済を PSP に依存することの加盟店側のリスクプロファイルをカバーする。このマトリクスは、そのリスクプロファイルが乗っている事業者ごとのインベントリを与える。
- **[[payments/japan-jcb-issuer-ecosystem-positioning-matrix|Japan JCB 発行会社経済圏 positioning matrix]]** および **[[payments/japan-bnpl-pay-later-operator-registry-matrix|BNPL 事業者 registry matrix]]** との対比：それらのマトリクスはそれぞれ発行者側と BNPL 事業者側をカバーする；このマトリクスは両者に対する加盟店ゲートウェイ側の補完である。

## 加盟店にとっての PSP 選択の意思決定レンズ

PSP を選択する日本の小規模または中規模加盟店は、通常、四方向の意思決定に直面する：カード受け入れフットプリント、コード決済受け入れフットプリント、決済スピード要件、統合複雑性の許容度。このマトリクスは以下の意思決定ツリーのショートカットをサポートする：

| 加盟店プロファイル | 最適合の PSP クラスター |
|---|---|
| **マイクロ / 個人 / カジュアルセラー、小売 POS** | Square Japan（無料リーダー、翌日決済）または Air PAY（Recruit、HotPepper チャネルで同様の経済性）|
| **中小 EC、デベロッパーフレンドリー、デジタルファースト** | Stripe Japan または Komoju（垂直特化）または GMO Epsilon |
| **マルチアクワイアラルーティングと統合の深さを伴うエンタープライズ EC** | [[payment-firms/gmo-payment-gateway\|GMO Payment Gateway]] または [[payment-firms/dg-financial-technology\|DGFT]]（クロスボーダー）または [[payment-firms/sb-payment-service\|SB Payment Service]]（PayPay アンカー）|
| **インバウンドの外国人購入者に販売するクロスボーダー EC** | [[payment-firms/paypal-pte-ltd-japan\|PayPal Japan]] または DGFT または Komoju（クロスボーダースペシャリスト）|
| **コードファーストのマルチウォレット受け入れ（小売チェーン、コンビニ、ドラッグストア）** | [[payment-firms/netstars\|Netstars]]（マルチウォレットアグリゲーター）|
| **Rakuten / Amazon / PayPay / Recruit 内の経済圏アンカー加盟店** | 経済圏ネイティブ PSP を優先（[[payment-firms/rakuten-fg\|Rakuten Payment]] / Amazon Pay / [[payment-firms/sb-payment-service\|SB Payment Service]] / Recruit）し、非経済圏ボリュームには汎用 PSP |
| **予約フロー統合を伴う大量取引のレストラン / パーソナルサービス** | Recruit / Air PAY（HotPepper Beauty / Gourmet 統合）|
| **ゲーム / デジタルコンテンツ / マイクロトランザクション加盟店** | Komoju（垂直スペシャリスト）|

このマトリクスは単一の「最良」の答えを生み出さない — 加盟店の具体的なオペレーションプロファイル、決済サイクルのニーズ、統合能力がどの PSP クラスターが適合するかを決定し、多くの加盟店は異なるボリュームスライスに対して **複数の PSP** を運営する（例：主要なカード受け入れに GMO-PG ＋マルチウォレットコードに Netstars ＋対面イベントに Square）。

## Related

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

## Sources

- GMO ペイメントゲートウェイ コーポレートサイトと IR：https://corp.gmo-pg.com/ および https://corp.gmo-pg.com/ir/
- GMO イプシロン（Epsilon）：https://www.epsilon.jp/
- SB ペイメントサービス（SBペイメントサービス）：https://www.sbpayment.jp/
- DG フィナンシャルテクノロジー（DGFT）：https://www.dgft.jp/
- Netstars（StarPay）：https://netstars.co.jp/
- Square Japan：https://squareup.com/jp/
- Stripe Japan：https://stripe.com/jp
- PayPal Japan business：https://www.paypal.com/jp/business
- Komoju（Degica）：https://komoju.com/ja/
- Amazon Pay Japan：https://pay.amazon.co.jp/
- Rakuten Payment：https://payment.rakuten.co.jp/
- Recruit Card / Air PAY：https://recruit-card.jp/
- METI：登録包括信用購入あっせん業者リストポータル — https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
- METI：クレジットカード番号等取扱契約締結事業者 PDF — https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
- FSA：免許 / 登録オペレーターポータル — https://www.fsa.go.jp/menkyo/menkyo.html
- FSA：資金移動業者リスト PDF — https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
- Payments Japan Association 刊行物 — https://paymentsjapan.or.jp/category/publications/
