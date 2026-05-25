---
title: "Missing Japan financial institutions expansion backlog"
aliases: ["日本金融機関追加候補実行リスト", "日本金融机构补写执行清单", "Japan financial institution missing backlog"]
domain: JapanFG
created: 2026-05-20
last_updated: 2026-05-22
last_tended: 2026-05-22
review_by: 2026-06-20
confidence: likely
tags: [JapanFG, financial-institutions, backlog, registry, execution-checklist]
status: active
sources:
  - "FSA: 免許・許可・登録等を受けている業者一覧"
  - "JBA / JSDA / LIAJ / GIAJ / JVCEA public member lists"
  - "JPX / JASDEC / JSCC public market-infrastructure pages"
  - "Zengin-Net / Cotra / JEPPO public account-to-account payment pages"
  - "METI: 割賦販売法 registered business operator lists"
  - "FSA / JPX / JSDA / JASDEC / JSCC public short-selling, stock-lending, and TOB materials"
  - "JBA / JCA / FISC public bank API, card-security, and payment-control materials"
---

# Missing Japan financial institutions expansion backlog

## Overview

This page is the execution checklist for expanding [[JapanFG/INDEX|JapanFG]] from a major-institution wiki into a registry-aware Japan financial institution map.

The current wiki already has a strong core: megabanks, major FG, regional-bank groups, policy finance, insurers, securities groups, leasing, payment, fintech, foreign Japan subsidiaries, and crypto exchange pages. It is not yet exhaustive against official license / registration lists.

Execution rule:

1. Create standalone pages for systemically important institutions, listed financial companies, major operating subsidiaries, market infrastructure, and fintech/payment operators with public sources.
2. Use registry / index pages for very large populations such as shinkin banks, credit cooperatives, prepaid issuers, and long-tail FIEA operators.
3. Do not create company pages from non-public context. Every page must be sourceable from public registry, IR, disclosure, company profile, annual report, association list, or law / policy documents.

## Official registry baseline

| Registry | Official count / scope | Source route | Wiki treatment |
|---|---:|---|---|
| Banks: city, trust, other | 35 | FSA bank license Excel | Add missing operating-company pages; reconcile parent-vs-subsidiary boundaries. |
| Foreign bank branches | 57 | FSA bank license Excel | Registry route now has standalone / umbrella wiki routes for all 57 rows; future edits should follow FSA list changes or new strategic questions. |
| Regional banks | 61 | FSA bank license Excel | Add missing direct bank pages or mark as covered by parent FG. |
| Second regional banks | 34 | FSA bank license Excel | Add missing direct bank pages or mark as covered by parent FG. |
| Bank holding companies | 31 | FSA bank holding company Excel | Mostly covered; verify post-2026 names and mergers. |
| Shinkin banks | 254 + Shinkin Central Bank | FSA shinkin license Excel | Keep [[JapanFG/shinkin-central|Shinkin Central Bank]] as main page; complete long-tail route via [[banking/shinkin-bank-registry-japan]]. |
| Credit cooperatives | 143 + central federation | FSA credit cooperative Excel | Keep [[JapanFG/zenshin-kumi|Zenshin-kumi]] as main page; complete long-tail route via [[banking/credit-cooperative-registry-japan]]. |
| Rokin banks | 13 + Rokinren | FSA rokin license Excel | Keep [[JapanFG/rokin-renraku|Rokinren]] as main page; complete member route via [[banking/rokin-bank-registry-japan]]. |
| Financial instruments business operators | 1,945 | FSA FIEA operator Excel | Registry route completed via [[securities/financial-instruments-business-operators-japan-index]]; [[JapanFG/legal-financial-licenses/securities-license-stack|securities license stack]] routes Type I/II, registered-financial-institution, intermediary, advisory, management, PTS, and JSDA boundaries; standalone pages only for brokers, AMs, PTS, derivatives, and listed/publicly material operators. |
| Life insurers | 41 | FSA life insurer Excel | Add missing operating insurers and group subsidiaries with public disclosure pages. |
| Non-life insurers | 57 | FSA non-life insurer Excel | Major, direct, reinsurance, and selected specialty / foreign-affiliated routes covered through D3-D5 / D8-D9; remaining long tail should use registry or selective exception treatment. |
| Insurance holding companies | 15 | FSA insurance holding company Excel | Add missing HD pages where group strategy matters. |
| Trust companies | 38 | FSA trust company Excel | Registry route completed via [[JapanFG/trust-companies-japan-index]]; priority A / B / C standalone pages completed, and all 38 rows now have standalone or existing group wiki routes. |
| Funds transfer service providers | 83 | FSA funds transfer PDF / Excel / JPSA member list | Registry route completed via [[payments/funds-transfer-service-providers-japan-index]]; add standalone pages only for major wallet, remittance, PSP, and stablecoin-adjacent operators. |
| Crypto asset exchange operators | 27 | FSA crypto exchange Excel | Existing coverage is broad; add the two missing FSA rows first. |
| Electronic payment instrument service providers | 1 | FSA EPSP Excel | Covered via [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] context; cross-link from stablecoin/EPI pages. |
| Third-party prepaid payment instrument issuers | 803 | FSA prepaid issuer Excel | Registry route completed via [[payments/prepaid-payment-instrument-issuers-japan-index]]; standalone pages only for major wallet/card/retail operators. |
| Credit purchase / card operators | 241 comprehensive credit purchase intermediaries, 138 individual credit purchase intermediaries, 275 card-number handling contract concluding operators | METI Installment Sales Act lists | Registry route completed via [[payments/credit-purchase-card-operators-japan-index]]; standalone pages for card issuers, acquirers, PSPs, and BNPL/consumer-credit operators. |

## Batch A: Market infrastructure first

These are not optional. They are central to Japanese capital markets and currently appear only as references inside other pages.

| Status | Target page | Institution | Public relevance |
|---|---|---|---|
| [x] | `JapanFG/japan-exchange-group.md` | 日本取引所グループ / JPX | Listed exchange holding company; TSE/OSE/TOCOM parent. |
| [x] | `securities/tokyo-stock-exchange.md` | 東京証券取引所 / TSE | Listing, TDnet, disclosure, market segments. |
| [x] | `securities/osaka-exchange.md` | 大阪取引所 / OSE | Derivatives market infrastructure. |
| [x] | `securities/tokyo-commodity-exchange.md` | 東京商品取引所 / TOCOM | Commodity derivatives infrastructure. |
| [x] | `securities/japan-securities-clearing-corp.md` | 日本証券クリアリング機構 / JSCC | Clearing house; cash, derivatives, OTC clearing. |
| [x] | `securities/japan-securities-depository-center.md` | 証券保管振替機構 / JASDEC / ほふり | Settlement / book-entry infrastructure. |
| [x] | `JapanFG/japan-securities-finance.md` | 日本証券金融 / JSF | Margin loan, securities finance, trust bank adjacency. |
| [x] | `securities/japannext-securities.md` | ジャパンネクスト証券 | PTS / alternative trading venue. |
| [x] | `securities/osaka-digital-exchange.md` | 大阪デジタルエクスチェンジ / ODX | PTS + security token market infrastructure. |

## Batch B: Bank operating-company pages

Many parent FG pages exist, but the licensed bank operating companies do not have standalone pages. Add them only when the operating company has separate public disclosure, strategic role, license boundary, or market importance.

### B1. Megabank / trust / internet-bank operating companies

| Status | Target page | Institution | Boundary note |
|---|---|---|---|
| [x] | `JapanFG/mizuho-bank.md` | 株式会社みずほ銀行 | Under [[JapanFG/mizuho-fg|Mizuho FG]]. |
| [x] | `JapanFG/sumitomo-mitsui-banking-corp.md` | 株式会社三井住友銀行 / SMBC | Under [[JapanFG/smfg|SMFG]]. |
| [x] | `JapanFG/mufg-bank.md` | 株式会社三菱UFJ銀行 | Under [[JapanFG/mufg|MUFG]]. |
| [x] | `JapanFG/resona-bank.md` | 株式会社りそな銀行 | Under [[JapanFG/resona-hd|Resona HD]]. |
| [x] | `JapanFG/saitama-resona-bank.md` | 株式会社埼玉りそな銀行 | Resona group operating bank. |
| [x] | `JapanFG/mitsubishi-ufj-trust-bank.md` | 三菱UFJ信託銀行 | MUFG trust-bank operating company. |
| [x] | `JapanFG/mizuho-trust-bank.md` | みずほ信託銀行 | Mizuho trust-bank operating company. |
| [x] | `JapanFG/smtb.md` | 三井住友信託銀行 | Under [[JapanFG/sumitomo-mitsui-trust|SMTG]]. |
| [x] | `JapanFG/smbc-trust-bank.md` | SMBC信託銀行 | SMFG private-banking / trust boundary. |
| [x] | `JapanFG/nomura-trust-bank.md` | 野村信託銀行 | Nomura group banking arm. |
| [x] | `JapanFG/nochu-trust-bank.md` | 農中信託銀行 | Norinchukin trust arm. |
| [x] | `JapanFG/orix-bank.md` | オリックス銀行 | ORIX to Daiwa Next Bank ownership-transition watch. |
| [x] | `JapanFG/sony-bank.md` | ソニー銀行 | Under [[JapanFG/sony-fg|Sony FG]]. |
| [x] | `JapanFG/daiwa-next-bank.md` | 大和ネクスト銀行 | Daiwa group bank. |
| [x] | `JapanFG/ui-bank.md` | UI銀行 | Kiraboshi / Tokyo Kiraboshi digital-bank arm. |
| [x] | `JapanFG/01-bank.md` | 01銀行 | Data-driven SME digital-bank model. |
| [x] | `JapanFG/sbj-bank.md` | SBJ銀行 | Shinhan Bank Japan subsidiary. |
| [x] | `JapanFG/rcc.md` | 整理回収機構 / RCC | Bank-license special servicer / resolution entity. |

### B2. Regional banks still missing or only group-covered

| Status | Group | Institutions to resolve |
|---|---|---|
| [x] | Hokuhoku / Hokkoku / Hokuriku B2.1 | [[JapanFG/hokkaido-bank|北海道銀行]], [[JapanFG/hokuriku-bank|北陸銀行]], [[JapanFG/hokkoku-bank|北國銀行]], [[JapanFG/toyama-bank|富山銀行]], [[JapanFG/toyama-first-bank|富山第一銀行]] |
| [x] | Tohoku / Fidea / Jimoto B2.2 | [[JapanFG/tohoku-bank|東北銀行]], [[JapanFG/hokuto-bank|北都銀行]], [[JapanFG/shonai-bank|荘内銀行]], [[JapanFG/kita-nippon-bank|北日本銀行]], [[JapanFG/sendai-bank|仙台銀行]], [[JapanFG/kirayaka-bank|きらやか銀行]], [[JapanFG/fukushima-bank|福島銀行]], [[JapanFG/daito-bank|大東銀行]] |
| [x] | Kanto B2.3 | [[JapanFG/tsukuba-bank|筑波銀行]], [[JapanFG/ashikaga-bank|足利銀行]], [[JapanFG/kiraboshi-bank|きらぼし銀行]], [[JapanFG/yokohama-bank|横浜銀行]], [[JapanFG/higashi-nippon-bank|東日本銀行]], [[JapanFG/tokyo-star-bank|東京スター銀行]], [[JapanFG/kanagawa-bank|神奈川銀行]], [[JapanFG/tochigi-bank|栃木銀行]], [[JapanFG/taiko-bank|大光銀行]] |
| [x] | Chubu B2.4 | [[JapanFG/daishi-hokuetsu-bank|第四北越銀行]], [[JapanFG/yamanashi-chuo-bank|山梨中央銀行]], [[JapanFG/hachijuni-nagano-bank|八十二長野銀行]], [[JapanFG/juroku-bank|十六銀行]], [[JapanFG/shizuoka-bank|静岡銀行]], [[JapanFG/shimizu-bank|清水銀行]], [[JapanFG/shizuoka-chuo-bank|静岡中央銀行]], [[JapanFG/aichi-bank|あいち銀行]], [[JapanFG/nagoya-bank|名古屋銀行]], [[JapanFG/fukui-bank|福井銀行]] |
| [x] | Kansai / Chugoku B2.5 | [[JapanFG/kyoto-bank|京都銀行]], [[JapanFG/kansai-mirai-bank|関西みらい銀行]], [[JapanFG/ikeda-senshu-bank|池田泉州銀行]], [[JapanFG/tajima-bank|但馬銀行]], [[JapanFG/tottori-bank|鳥取銀行]], [[JapanFG/chugoku-bank|中国銀行]], [[JapanFG/hiroshima-bank|広島銀行]], [[JapanFG/momiji-bank|もみじ銀行]], [[JapanFG/tomato-bank|トマト銀行]] |
| [x] | Shikoku B2.6 | [[JapanFG/awa-bank|阿波銀行]], [[JapanFG/iyo-bank|伊予銀行]], [[JapanFG/shikoku-bank|四国銀行]], [[JapanFG/tokushima-taisho-bank|徳島大正銀行]], [[JapanFG/kagawa-bank|香川銀行]], [[JapanFG/ehime-bank|愛媛銀行]], [[JapanFG/kochi-bank|高知銀行]] |
| [x] | Kyushu / Okinawa B2.7 | [[JapanFG/fukuoka-bank|福岡銀行]], [[JapanFG/chikuho-bank|筑邦銀行]], [[JapanFG/nishi-nippon-city-bank|西日本シティ銀行]], [[JapanFG/kitakyushu-bank|北九州銀行]], [[JapanFG/saga-bank|佐賀銀行]], [[JapanFG/higo-bank|肥後銀行]], [[JapanFG/oita-bank|大分銀行]], [[JapanFG/miyazaki-bank|宮崎銀行]], [[JapanFG/kagoshima-bank|鹿児島銀行]], [[JapanFG/okinawa-bank|沖縄銀行]] |
| [x] | Second regional long tail B2.8 | [[JapanFG/minato-bank|みなと銀行]], [[JapanFG/shimane-bank|島根銀行]], [[JapanFG/saikyo-bank|西京銀行]], [[JapanFG/fukuoka-chuo-bank|福岡中央銀行]], [[JapanFG/saga-kyoei-bank|佐賀共栄銀行]], [[JapanFG/nagasaki-bank|長崎銀行]], [[JapanFG/kumamoto-bank|熊本銀行]], [[JapanFG/howa-bank|豊和銀行]], [[JapanFG/miyazaki-taiyo-bank|宮崎太陽銀行]], [[JapanFG/minami-nippon-bank|南日本銀行]], plus existing [[JapanFG/okinawa-kaiho-bank|沖縄海邦銀行]] anchor |

## Batch C: Securities, asset management, and FIEA operators

Start with operators that have public strategic significance. Do not attempt to write all 1,945 FIEA operators as standalone pages.

The company-page layer is now supported by six control pages: [[JapanFG/legal-financial-licenses/securities-license-stack|Japan securities license stack]], [[securities/japan-online-brokerage-competition|Japan online brokerage competition]], [[securities/japan-best-execution-sor-pts|Japan best execution, SOR, and PTS]], [[securities/japan-pts-liquidity-data-guide|Japan PTS liquidity data guide]], [[securities/japan-underwriting-market-structure|Japan underwriting market structure]], and [[securities/japan-market-infrastructure-map|Japan market infrastructure map]].

| Status | Target page | Institution | Source route |
|---|---|---|---|
| [x] | `JapanFG/sbi-securities.md` | SBI証券 | FSA FIEA list / company disclosure / SBI group IR. |
| [x] | `JapanFG/mufg-esmart-securities.md` | 三菱UFJ eスマート証券 | FSA FIEA list / MUFG-KDDI boundary. |
| [x] | `JapanFG/paypay-securities.md` | PayPay証券 | FSA FIEA list / PayPay group boundary. |
| [x] | `JapanFG/gmo-click-securities.md` | GMOクリック証券 | FSA FIEA list / GMO FH disclosure. |
| [x] | `JapanFG/dmm-com-securities.md` | DMM.com証券 | FSA FIEA list; separate from crypto-exchange page. |
| [x] | `JapanFG/traders-securities.md` | トレイダーズ証券 | FSA FIEA list; FX / derivatives. |
| [x] | `JapanFG/saxo-bank-securities.md` | サクソバンク証券 | FSA FIEA list; foreign broker Japan entity. |
| [x] | `JapanFG/sbi-fx-trade.md` | SBI FXトレード | FSA FIEA list; SBI FX arm. |
| [x] | `JapanFG/nomura-asset-management.md` | 野村アセットマネジメント | FSA FIEA investment management route. |
| [x] | `JapanFG/nikko-asset-management.md` | 日興アセットマネジメント / Amova | 2025-09 name-change boundary captured. |
| [x] | `JapanFG/asset-management-one.md` | アセットマネジメントOne | Mizuho / Dai-ichi Life AM joint platform. |
| [x] | `JapanFG/mufg-asset-management.md` | 三菱UFJアセットマネジメント | MUFG AM platform. |
| [x] | `JapanFG/smd-am.md` | 三井住友DSアセットマネジメント | SMFG / Daiwa / insurer shareholder platform. |
| [x] | `JapanFG/daiwa-asset-management.md` | 大和アセットマネジメント | Daiwa AM platform. |
| [x] | `JapanFG/sbi-asset-management.md` | SBIアセットマネジメント | SBI AM platform. |

## Batch D: Insurance operating companies

Parent insurance HD pages are not enough for product/channel analysis. Add operating companies where public disclosure exists.

| Status | Group | Institutions to write or reconcile |
|---|---|---|
| [x] | Life insurers D1 | [[JapanFG/asahi-life|朝日生命]], [[JapanFG/sbi-life|SBI生命]], [[JapanFG/nn-life-japan|NN生命]], [[JapanFG/fwd-life-japan|FWD生命]], [[JapanFG/sony-life|ソニー生命]], [[JapanFG/sompo-himawari-life|SOMPOひまわり生命]], [[JapanFG/dai-ichi-frontier-life|第一フロンティア生命]], [[JapanFG/taiju-life|大樹生命]], [[JapanFG/daido-life|大同生命]], [[JapanFG/taiyo-life|太陽生命]], [[JapanFG/tokio-marine-nichido-life|東京海上日動あんしん生命]], [[JapanFG/fukoku-life|富国生命]], [[JapanFG/rakuten-life|楽天生命]] |
| [x] | Life subsidiaries / specialty D2 | [[JapanFG/cardif-life|カーディフ生命]], [[JapanFG/gibraltar-life|ジブラルタ生命]], [[JapanFG/zurich-life|チューリッヒ生命]], [[JapanFG/td-financial-life|T&Dフィナンシャル生命]], [[JapanFG/nanairo-life|なないろ生命]], [[JapanFG/nissay-wealth-life|ニッセイ・ウェルス生命]], [[JapanFG/hanasaku-life|はなさく生命]], [[JapanFG/mitsui-sumitomo-aioi-life|三井住友海上あいおい生命]], [[JapanFG/medicare-life|メディケア生命]] |
| [x] | Non-life majors D3 | [[JapanFG/tokio-marine-nichido-fire|東京海上日動火災]], [[JapanFG/mitsui-sumitomo-insurance|三井住友海上火災]], [[JapanFG/aioi-nissay-dowa-insurance|あいおいニッセイ同和]], [[JapanFG/sompo-japan-insurance|損害保険ジャパン]] |
| [x] | Direct / digital non-life D4 | [[JapanFG/sony-insurance|ソニー損保]], [[JapanFG/sbi-insurance|SBI損保]], [[JapanFG/au-insurance|au損保]], [[JapanFG/tokio-marine-direct|東京海上ダイレクト]], [[JapanFG/sompo-direct|SOMPOダイレクト]], [[JapanFG/mitsui-direct|三井ダイレクト]], [[JapanFG/rakuten-general-insurance|楽天損保]] |
| [x] | Specialty / reinsurance D5 | [[JapanFG/anicom-insurance|アニコム損保]], [[JapanFG/secom-insurance|セコム損保]], [[JapanFG/toa-reinsurance|トーア再保険]], [[JapanFG/japan-earthquake-reinsurance|日本地震再保険]], [[JapanFG/nisshin-fire|日新火災]], [[JapanFG/meiji-yasuda-general-insurance|明治安田損保]] |
| [x] | Insurance holding companies D6 | [[JapanFG/anicom-hd|アニコムHD]], [[JapanFG/ntt-docomo-sompo-hd|NTTドコモ損害保険HD]], [[JapanFG/rakuten-insurance-hd|楽天インシュアランスHD]], [[JapanFG/dai-ichi-life|第一ライフグループ name-update check]] |
| [x] | Remaining exact-name life insurers D7 | [[JapanFG/credit-agricole-life|クレディ・アグリコル生命]], [[JapanFG/dai-ichi-life-insurance|第一生命保険]], [[JapanFG/dai-ichi-neo-life|第一ネオ生命]], [[JapanFG/fukokushinrai-life|フコクしんらい生命]], [[JapanFG/pgf-life|PGF生命]], [[JapanFG/ms-primary-life|三井住友海上プライマリー生命]], [[JapanFG/midori-life|みどり生命]], [[JapanFG/meiji-yasuda-trust-life|明治安田トラスト生命]] |
| [x] | Specialty non-life extension D8 | [[JapanFG/dai-ichi-ipet-insurance|第一アイペット損害保険]], [[JapanFG/pet-and-family-insurance|ペット＆ファミリー損害保険]], [[JapanFG/yamap-naturance-insurance|ヤマップネイチャランス損害保険]], [[JapanFG/ntt-docomo-sonpo|NTTドコモ損害保険]] |
| [x] | Specialty / foreign-affiliated non-life extension D9 | [[JapanFG/american-home-insurance-japan|American Home]], [[JapanFG/allianz-fire-marine-japan|Allianz Fire and Marine Japan]], [[JapanFG/hs-insurance|HS Insurance]], [[JapanFG/cardif-nonlife|Cardif Non-Life]], [[JapanFG/capital-insurance|Capital Insurance]], [[JapanFG/sakura-insurance|Sakura Insurance]], [[JapanFG/ji-accident-fire-insurance|JI Accident & Fire]], [[JapanFG/zenkankyo-reiwa-insurance|Zenkankyo Reiwa]], [[JapanFG/chubb-insurance-japan|Chubb Japan]], [[JapanFG/rescue-insurance|Rescue Insurance]], [[JapanFG/hyundai-marine-fire-japan|Hyundai Marine & Fire Japan]] |

## Batch E: Payments, cards, consumer credit, and remittance

This is the largest strategic gap after banks and insurance. Start from major consumer-facing platforms and registered funds-transfer / credit-card operators.

| Status | Segment | Institutions |
|---|---|---|
| [x] | Card issuers / acquirers E1 | [[JapanFG/smbc-card|三井住友カード]], [[JapanFG/mufg-nicos|三菱UFJニコス]], [[JapanFG/rakuten-card|楽天カード]], [[JapanFG/paypay-card|PayPayカード]], [[JapanFG/aeon-financial-service|イオンフィナンシャルサービス]], [[JapanFG/epos-card|エポスカード]], [[JapanFG/life-card|ライフカード]], [[JapanFG/pocket-card|ポケットカード]], [[JapanFG/ucs-card|UCS]], [[JapanFG/seven-card-service|セブン・カードサービス]] |
| [x] | Consumer finance / installment E1 | [[JapanFG/smbc-consumer-finance|SMBCコンシューマーファイナンス]], [[JapanFG/aplus|アプラス]] |
| [x] | Consumer finance / installment E2 | [[JapanFG/shinsei-financial|新生フィナンシャル]], [[JapanFG/toyota-finance|Toyota Finance]] page split from [[JapanFG/toyota-financial|Toyota Financial Services]] |
| [x] | PSP / acquiring / gateway E1 | [[JapanFG/sb-payment-service|SBペイメントサービス]], [[JapanFG/gmo-epsilon|GMOイプシロン]], [[JapanFG/dg-financial-technology|DGフィナンシャルテクノロジー]] |
| [x] | PSP / acquiring / gateway E2 | [[JapanFG/netstars|ネットスターズ]], [[JapanFG/recruit-mufg-business|リクルートMUFGビジネス]], [[JapanFG/jal-payment-port|JALペイメント・ポート]] |
| [x] | Wallet / funds transfer E2 | [[JapanFG/paypay|PayPay]], [[JapanFG/merpay|Merpay]], [[JapanFG/au-payment|au PAY / auペイメント]], [[JapanFG/rakuten-edy|楽天Edy]], [[JapanFG/kyash|Kyash]], [[JapanFG/smartbank|SmartBank]], [[JapanFG/pring|pring]], [[JapanFG/seven-payment-service|Seven Payment Service]] |
| [x] | Cross-border remittance E2 | [[JapanFG/wise-payments-japan|Wise Payments Japan]], [[JapanFG/revolut-technologies-japan|Revolut Japan]], [[JapanFG/paypal-pte-ltd-japan|PayPal Pte. Ltd.]], [[JapanFG/payoneer-japan|Payoneer Japan]], [[JapanFG/western-union-japan|Western Union Japan]], [[JapanFG/sbi-remit|SBI Remit]], [[JapanFG/travelex-japan|Travelex Japan]], [[JapanFG/airwallex-japan|Airwallex Japan]] |
| [x] | Stablecoin / EPI adjacency E3 | [[JapanFG/jpyc|JPYC]], [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade EPSP / USDC cross-link]], [[JapanFG/progmat|Progmat]] / [[JapanFG/mitsubishi-ufj-trust-bank|Mitsubishi UFJ Trust]] link map |

## Batch F: Crypto and digital-asset cleanup

The exchange namespace is strong, but the current FSA list has at least two direct missing operators.

| Status | Target page | Institution | Note |
|---|---|---|---|
| [x] | `exchanges/jp-exchange-finx-jcrypto.md` | FINX JCrypto | FSA registered crypto asset exchange operator. |
| [x] | `exchanges/jp-exchange-coinhub.md` | COINHUB | FSA registered crypto asset exchange operator. |
| [x] | `exchanges/INDEX.md` | Registered-operator completeness table | Mark all 27 FSA operators and JVCEA membership class. |
| [x] | `exchanges/jp-exchange-sbi-vc-trade.md` | SBI VC Trade | Add EPSP / USDC electronic payment instrument cross-link. |

## Batch G: Foreign bank branches and global financial institutions

Current wiki already covers several major US / European banks. The FSA list contains 57 foreign bank branches, so use a tiered approach.

| Status | Priority | Institutions |
|---|---|---|
| [x] | P0 | [[JapanFG/credit-agricole-bank-japan|クレディ・アグリコル銀行]], [[JapanFG/natixis-japan|ナティクシス]], [[JapanFG/rbc-japan|RBC / カナダロイヤル銀行]], [[JapanFG/commerzbank-japan|コメルツ銀行]], [[JapanFG/ing-bank-japan|ING Bank]], [[JapanFG/dbs-bank-japan|DBS銀行]], [[JapanFG/ocbc-bank-japan|OCBC銀行]], [[JapanFG/uob-bank-japan|UOB銀行]], [[JapanFG/bbva-bank-japan|BBVA]], [[JapanFG/intesa-sanpaolo-japan|インテーザ・サンパオロ]] |
| [x] | P1 | 韓国系: [[JapanFG/woori-bank-japan|ウリィ銀行]], [[JapanFG/hana-bank-japan|ハナ銀行]], [[JapanFG/korea-development-bank-japan|韓国産業銀行]], [[JapanFG/industrial-bank-of-korea-japan|中小企業銀行]], [[JapanFG/kb-kookmin-bank-japan|國民銀行]] |
| [x] | P1 | 台湾 / 中国系: [[JapanFG/bank-of-taiwan-japan|台湾銀行]], [[JapanFG/mega-icbc-japan|兆豐國際商業銀行]], [[JapanFG/ctbc-bank-japan|中國信託商業銀行]], [[JapanFG/esun-bank-japan|玉山銀行]], [[JapanFG/bank-of-china-japan|中國銀行]], [[JapanFG/icbc-japan|中国工商銀行]], [[JapanFG/china-construction-bank-japan|中国建設銀行]], [[JapanFG/agricultural-bank-of-china-japan|中国農業銀行]] |
| [x] | P2 strategic exceptions | [[JapanFG/euroclear-bank-japan|Euroclear]], [[JapanFG/clearstream-banking-japan|Clearstream]], [[JapanFG/bank-of-communications-japan|Bank of Communications]], [[JapanFG/bangkok-bank-japan|Bangkok Bank]], [[JapanFG/state-bank-of-india-japan|State Bank of India]], [[JapanFG/bank-of-india-japan|Bank of India]], [[JapanFG/anz-bank-japan|ANZ]] | ICSD / collateral / China / ASEAN / India / Australia-New Zealand corridor rows promoted from registry-only to standalone pages. |
| [x] | P3 corridor exceptions | [[JapanFG/commonwealth-bank-japan|Commonwealth Bank]], [[JapanFG/national-australia-bank-japan|National Australia Bank]], [[JapanFG/bank-negara-indonesia-japan|Bank Negara Indonesia]], [[JapanFG/philippine-national-bank-japan|Philippine National Bank]], [[JapanFG/metrobank-japan|Metrobank]], [[JapanFG/banco-do-brasil-japan|Banco do Brasil]], [[JapanFG/first-commercial-bank-japan|First Commercial Bank]], [[JapanFG/taipei-fubon-bank-japan|Taipei Fubon Bank]] | Australia, Indonesia, Philippines, Brazil, and Taiwan corridor rows promoted from registry-only to standalone pages. |
| [x] | P4 registry-only closure | [[JapanFG/chang-hwa-bank-japan|彰化商業銀行]], [[JapanFG/taishin-bank-japan|台新國際商業銀行]], [[JapanFG/taiwan-business-bank-japan|台湾中小企業銀行]], [[JapanFG/taiwan-cooperative-bank-japan|合作金庫商業銀行]], [[JapanFG/national-bank-of-pakistan-japan|パキスタン・ナショナル銀行]], [[JapanFG/ubaf-japan|ユバフーアラブ・フランス連合銀行]] | Remaining 6 registry-only rows promoted to concise standalone branch / corridor pages; [[JapanFG/foreign-bank-branches-japan-index]] now routes all 57 FSA rows. |

## Batch H: Cooperative and community financial institutions

Do not create hundreds of pages one by one until registry indexes exist.

| Status | Target page | Scope |
|---|---|---|
| [x] | `banking/shinkin-bank-registry-japan.md` | 254 shinkin banks + Shinkin Central Bank; prefecture index and official-name registry rows. |
| [x] | `banking/credit-cooperative-registry-japan.md` | 143 credit cooperatives + Zenshin-kumi; prefecture index and official-name registry rows. |
| [x] | `banking/rokin-bank-registry-japan.md` | 13 rokin banks + Rokinren; labor-union finance map and official-name registry rows. |
| [x] | `banking/ja-bank-system-japan.md` | JA Bank / Norinchukin / prefectural Shinren / JA boundary. |
| [x] | `banking/jf-marine-bank-system-japan.md` | JF Marine Bank / fishery cooperative finance boundary. |

## Batch I: Policy finance and public-credit adjacency

The policy-finance namespace already covers [[JapanFG/jfc|JFC]], [[JapanFG/dbj|DBJ]], [[JapanFG/jbic|JBIC]], [[policy-finance/jica|JICA]], [[policy-finance/jogmec|JOGMEC]], [[policy-finance/nexi|NEXI]], and [[policy-finance/okinawa-development-finance-corp|Okinawa Development Finance Corp]]. Add the remaining institutions that matter for credit creation and public guarantees.

| Status | Target page | Institution |
|---|---|---|
| [x] | `policy-finance/japan-housing-finance-agency.md` | 住宅金融支援機構 / JHF |
| [x] | `policy-finance/japan-credit-guarantee-system.md` | 信用保証協会制度 / JFG |
| [x] | `policy-finance/national-federation-credit-guarantee-corporations.md` | 全国信用保証協会連合会 |
| [x] | `policy-finance/agriculture-credit-guarantee-system.md` | 農業信用保証 / 農業信用基金協会 |
| [x] | `policy-finance/fisheries-credit-guarantee-system.md` | 漁業信用保証 / 漁業信用基金協会 |

## Batch J: Data QA and index control

Complete these before writing more than 20 new pages.

| Status | Task | Output |
|---|---|---|
| [x] | Download and normalize FSA registry Excel files into a temporary working table outside the public wiki. | Working copy created outside the public wiki; no local worksheet committed. |
| [x] | Match official names to existing wiki slugs. | Machine exact / alias lower-bound match completed; group-covered entries require human review. |
| [x] | Add a compact completeness table to this backlog. | See QA snapshot below; no personal data, no local path. |
| [x] | Add or update domain indexes after each batch. | `JapanFG/INDEX.md` and root [[INDEX|INDEX]] synced after A/F and B1; Batch J recorded in [[JapanFG/INDEX|JapanFG INDEX]]. |
| [x] | Run wikilink health check after each batch. | Changed-file wikilinks: 42 files ok after B1. |
| [x] | Update [[CHANGELOG|CHANGELOG]] for each batch. | A/F, B1, and Batch J recorded with JST time, scope, validation, and remaining work. |
| [x] | Recount root [[INDEX|INDEX]] after each batch. | Root domain table sum = 538 and filesystem count = 538 after B1; Batch J does not add entries. Note 2026-05-25: post-batch headline now 580 entity entries (filesystem .md count = 573 incl. non-entity surfaces). |

### Batch J QA snapshot (2026-05-20)

This table is a source-control checkpoint, not a final coverage claim. `Machine match` is an exact / alias normalization lower bound from current wiki titles and aliases. It understates coverage where the wiki intentionally uses a parent group page, a foreign-bank Japan umbrella page, or an index route instead of a legal-name page.

| Registry | FSA as-of date | Official count | Machine match lower bound | Coverage decision | Next action |
|---|---:|---:|---:|---|---|
| Banks: city / trust / other | 2026-04-01 | 35 | 34 | Mostly covered after B1 plus specialty-trust reconciliation; [[JapanFG/sbi-shinsei-trust-bank]] and [[JapanFG/jsf-trust-bank]] now have standalone routes, while BNY Mellon Trust is handled inside [[JapanFG/bny-mellon-japan]] to separate a duplicate custody umbrella page. | Refresh only when the FSA bank-license list changes or a trust-bank route needs deeper KPI / disclosure precision. |
| Foreign bank branches | 2026-05-13 | 57 | 57 | Registry/index route completed via [[JapanFG/foreign-bank-branches-japan-index]]; all 57 rows have standalone / umbrella wiki routes after P2 strategic exceptions, P3 corridor promotions, and the P4 registry-only closure. | Refresh the registry index when FSA `ginkou.xlsx` changes; no registry-only rows remain, so future standalone changes should follow source changes or deeper strategic questions. |
| Regional banks | 2026-01-01 | 61 | 61 | First-regional bank license surface closed at standalone / intentional existing-anchor level after B2.1 Hokuriku / Hokkaido, B2.2 Tohoku / Fidea, B2.3 Kanto, B2.4 Chubu, B2.5 Kansai / Chugoku, B2.6 Shikoku, and B2.7 Kyushu / Okinawa. | Maintain boundary links; no new first-regional standalone gap unless FSA list changes. |
| Second regional banks | 2026-05-02 | 34 | 34 | Second-regional bank license surface closed at standalone / intentional existing-anchor level after B2.2 North Japan / Sendai / Kirayaka / Fukushima / Daito, B2.3 East Japan / Tokyo Star / Kanagawa / Tochigi / Taiko, B2.4 Shizuoka Chuo / Aichi / Nagoya, B2.5 Momiji / Tomato, B2.6 Tokushima Taisho / Kagawa / Ehime / Kochi, and B2.8 second-regional long tail. The same FSA sheet also has an `Other` row for [[JapanFG/saitama-resona-bank|埼玉りそな銀行]], already covered in B1. | Maintain boundary links; no new second-regional standalone gap unless FSA list changes. |
| Bank holding companies | 2026-05-01 | 31 | 31 | Current-name route completed with [[JapanFG/cci-group]]; [[JapanFG/hokkoku-fhd]] remains the historical / old-name bridge, and Kyushu parent boundary is already covered by existing [[JapanFG/kyushu-fg]] route. | Maintain current-name redirects and refresh when FSA bank-holding-company list changes. |
| Shinkin banks + Shinkin Central Bank | 2025-11-06 | 255 | 255 | Registry/index route completed via [[banking/shinkin-bank-registry-japan]]; do not create 254 standalone pages by default. | Refresh registry index when FSA workbook changes; standalone pages only for strategically material exceptions. |
| Credit cooperatives + Zenshinkumiren | 2026-02-20 | 144 | 144 | Registry/index route completed via [[banking/credit-cooperative-registry-japan]]; do not create 143 standalone pages by default. | Refresh registry index when FSA workbook changes; standalone pages only for central / strategically material exceptions. |
| Rokin banks + Rokinren | 2023-08-14 | 14 | 14 | Registry/index route completed via [[banking/rokin-bank-registry-japan]]. | Refresh registry index when FSA workbook changes; standalone pages only if a labor-bank entity needs deeper analysis. |
| Financial instruments business operators | 2026-04-30 | 1,945 | 1,945 | Registry route completed via [[securities/financial-instruments-business-operators-japan-index]]; material brokers, AMs, PTS, FX, and listed/publicly material operators have route anchors; license / brokerage / best-execution / PTS liquidity data / margin trading / securities finance / short-selling / stock-loan / stock-lending / prime brokerage / underwriting / infrastructure control pages are now linked. | Refresh when FSA `kinyushohin.xlsx` changes; standalone pages only for strategic exceptions. |
| Life insurers | 2026-04-13 | 41 | 41 | FSA 41 life-insurer surface closed at standalone / intentional group-anchor level after D1, D2, and D7. | Maintain name-change checks; do not add duplicate pages for parent/operating company boundaries already resolved. |
| Non-life insurers | 2026-04-01 | 57 | 37 | Major, direct / digital, specialty, reinsurance, pet-insurance, outdoor/platform, telco-linked, travel, rental-housing, foreign-affiliated, and product-specialty D3-D5/D8-D9 pages completed; remaining long-tail non-life insurers need registry/index treatment or strategic exception review. | Refresh when FSA `songai.xlsx` changes; next useful step is a non-life registry index or foreign reinsurer / P&I carrier map, not blanket company-page generation. |
| Insurance holding companies | 2026-04-01 | 15 | 14 | D6 completed for Anicom HD, NTT docomo non-life HD, Rakuten Insurance HD, and Dai-ichi Life Group name update. Current FSA holding-company list does not require an ipet-holdings standalone route. | Remaining HD gaps requires checking only when group strategy needs standalone coverage. |
| Trust companies | 2026-03-31 | 38 | 38 | Registry route completed via [[JapanFG/trust-companies-japan-index]]; all 38 rows now have standalone or existing group wiki routes after priority A / B / C promotion, and 0 rows remain registry-only. | Refresh when FSA `sintaku01.xlsx` changes; future work should focus on source URL drift refresh or report-source precision rather than raw registry completion. |
| Funds transfer service providers | 2026-04-30 | 83 | 83 registry-routed | Registry route completed via [[payments/funds-transfer-service-providers-japan-index]]; material wallet / remittance / PSP routes now include PayPay, Merpay, au PAY, Rakuten Edy, Kyash, SmartBank, Seven Payment Service, Wise, Revolut, PayPal, Payoneer, Western Union, SBI Remit, Travelex, Airwallex, Netstars, Recruit MUFG Business, JAL Payment Port, JPYC, NTT docomo FG watch route, [[payments/account-to-account-payment-japan|account-to-account payment route]], [[payments/merchant-bank-pay-account-direct-acquiring|merchant bank-account direct acquiring route]], [[payments/japan-bank-api-payment-agency-route|bank API / electronic payment agency route]], [[payments/japan-bank-api-incident-and-fraud-control|bank API incident / fraud controls]], and [[payments/japan-card-security-authentication-controls|card security / authentication controls]]. | Refresh when FSA `shikin_idou.pdf` changes; standalone pages only for strategic exceptions. |
| Credit purchase / card operators | 2026-04 month-end | 241 comprehensive / 138 individual / 275 card-number contract operators | registry-routed | Registry route completed via [[payments/credit-purchase-card-operators-japan-index]]; major card issuers, consumer-finance, auto-finance, PSP, and wallet-adjacent operators have material wiki routes; [[payments/japan-card-issuer-acquirer-processor-split|card role split]] and [[payments/japan-bnpl-credit-purchase-boundary|BNPL / credit-purchase boundary]] now route role and product classification. | Refresh when METI lists change; standalone pages only for major issuers, acquirers, PSPs, BNPL, auto-finance, or consumer-credit exceptions. |
| Crypto asset exchange operators | 2026-04-01 | 27 | 23 | Manual `exchanges/INDEX.md` completeness table is the source of truth after Batch F. | Keep exact-name aliases improving over time; no immediate standalone gap from the FSA 27 list. |
| Electronic payment instrument service providers | 2025-03-04 | 1 | 1 | Complete via [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]. | Maintain stablecoin / EPI cross-links. |
| Third-party prepaid issuers | 2026-04-30 | 803 | 803 | Registry route completed via [[payments/prepaid-payment-instrument-issuers-japan-index]]; jurisdiction counts and material wiki routes fixed, full row-level source remains FSA workbook. | Refresh when FSA `daisan.xlsx` changes; standalone pages only for material wallet/card/retail exceptions. |

## Recommended execution order

1. Batch A: market infrastructure, because it unlocks securities, IPO, TDnet, settlement, clearing, and PTS links.
2. Batch F: two missing crypto operators and registered-operator completeness table, because it is small and makes the crypto surface clean.
3. Batch B1: bank operating companies for megabank / trust / internet-bank boundaries.
4. Batch J: registry QA snapshot, because A/F + B1 already added more than 20 pages and future batches need a coverage control table.
5. Batch C: securities and asset-management operators; FIEA registry, securities license stack, online brokerage, best-execution / SOR / PTS, PTS liquidity data, margin trading / securities finance, underwriting, and market-infrastructure control maps are completed.
6. Batch E: payment / card / funds-transfer operators. E1-E3 and Batch K extension are completed at material-page / registry-control level; continue only for strategic exceptions.
7. Batch D: insurance operating companies. D1-D9 completed for life-insurers, major / direct / specialty non-life insurers, pet / outdoor / telco-linked / travel / rental-housing / foreign-affiliated specialty insurers, and insurance holding-company anchors; FSA 41 life-insurer surface closed at standalone / intentional group-anchor level. Continue with registry/index or precision work rather than duplicating life-insurer pages.
8. Batch B2 + H: regional-bank pages and cooperative-finance registry indexes. B2.1-B2.8 and H shinkin / shinkumi / rokin registry routes are completed.
9. Batch G + H + I: foreign branches, cooperative-system gaps, and policy-finance adjacency. Batch G foreign-bank branch surface is closed at all-57-row route level via [[JapanFG/foreign-bank-branches-japan-index]], P2 strategic exception pages, P3 corridor exception pages, and P4 registry-only closure pages. Batch H cooperative-system gaps are routed via [[banking/ja-bank-system-japan]] and [[banking/jf-marine-bank-system-japan]], and Batch I public-credit adjacency is routed via [[policy-finance/japan-housing-finance-agency]], [[policy-finance/japan-credit-guarantee-system]], [[policy-finance/national-federation-credit-guarantee-corporations]], [[policy-finance/agriculture-credit-guarantee-system]], and [[policy-finance/fisheries-credit-guarantee-system]]. Future foreign-bank work should be refresh / precision work, not raw list completion.
10. Completed strategic control gaps: [[payments/account-to-account-payment-japan|account-to-account payment route]], [[payments/merchant-bank-pay-account-direct-acquiring|merchant bank-account direct acquiring detail]], [[payments/japan-bank-api-payment-agency-route|bank API / electronic payment agency route]], [[payments/japan-bank-api-incident-and-fraud-control|bank API incident / fraud controls]], [[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]], [[payments/japan-card-security-authentication-controls|card security / authentication controls]], [[payments/japan-bnpl-credit-purchase-boundary|BNPL / credit-purchase boundary]], [[securities/japan-best-execution-sor-pts|best-execution / SOR / PTS detail]], [[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]], [[securities/japan-margin-trading-and-securities-finance|margin trading / securities finance route]], [[securities/japan-short-selling-and-stock-loan-controls|short-selling / stock-loan controls]], [[securities/japan-stock-lending-market-route|stock lending route]], [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage / institutional financing]], [[banking/japan-trust-bank-custody-map|trust-bank custody map]], [[banking/japan-master-trust-and-custody-bank-landscape|master trust / custody landscape]], [[banking/regional-bank-api-digital-partnership-route|regional bank API route]], [[finance/japan-tender-offer-process|TOB process]], [[finance/japan-acquisition-finance|acquisition finance]], and [[finance/japan-activist-investor-playbook|activist investor playbook]]. Next candidates are source URL drift refresh, a non-life insurer registry index, foreign reinsurer / P&I carrier map, or deeper report-source precision.

## Source URLs

- FSA license / registration index: https://www.fsa.go.jp/menkyo/menkyo.html
- FSA funds-transfer service provider list: https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
- METI registered operators under the Installment Sales Act: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
- FSA bank license list: https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx
- FSA life-insurance company list: https://www.fsa.go.jp/menkyo/hoken.pdf
- FSA non-life insurance company list: https://www.fsa.go.jp/menkyo/menkyoj/songai.pdf
- FSA insurance holding-company list: https://www.fsa.go.jp/menkyo/menkyoj/hokenmochikabu.pdf
- Life Insurance Association of Japan member list: https://www.seiho.or.jp/member/list/
- Non-Life Insurance Policyholders Protection Corporation member list: https://www.sonpohogo.or.jp/outline/member-companies.html
- FSA bank holding company list: https://www.fsa.go.jp/menkyo/menkyoj/ginkoumochikabu.xlsx
- FSA financial instruments business operator list: https://www.fsa.go.jp/menkyo/menkyoj/kinyushohin.xlsx
- FSA life insurer list: https://www.fsa.go.jp/menkyo/hoken.xlsx
- FSA non-life insurer list: https://www.fsa.go.jp/menkyo/menkyoj/songai.xlsx
- FSA insurance holding company list: https://www.fsa.go.jp/menkyo/menkyoj/hokenmochikabu.xlsx
- FSA trust company list: https://www.fsa.go.jp/menkyo/menkyoj/sintaku01.xlsx
- FSA funds transfer service provider list: https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.xlsx
- FSA crypto asset exchange operator list: https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx
- FSA electronic payment instrument service provider list: https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx
- FSA third-party prepaid payment instrument issuer list: https://www.fsa.go.jp/menkyo/menkyoj/daisan.xlsx
- FSA shinkin list: https://www.fsa.go.jp/menkyo/menkyoj/shinkin.xlsx
- FSA credit cooperative list: https://www.fsa.go.jp/menkyo/menkyoj/shinkumi.xlsx
- FSA rokin list: https://www.fsa.go.jp/menkyo/menkyoj/rokin.xlsx
- JBA member banks: https://www.zenginkyo.or.jp/abstract/outline/organization/member-01/
- JSDA member list: https://www.jsda.or.jp/about/kanyu/
- Life Insurance Association of Japan member list: https://www.seiho.or.jp/member/list/
- General Insurance Association of Japan member list: https://www.sonpo.or.jp/about/outline/members/
- JVCEA member list: https://jvcea.or.jp/member/
- Japan Payment Service Association funds transfer member service list: https://www.s-kessai.jp/consumer/funds_transfer/member_service.html
- METI Installment Sales Act overview / registered operators: https://www.meti.go.jp/policy/economy/consumer/credit/kappuhanbaihoatobaraibunyanogaiyofaq.html
- JPX short-selling restrictions: https://www.jpx.co.jp/english/equities/trading/regulations/02.html
- JSDA borrowing and lending guidelines: https://www.jsda.or.jp/en/activities/research-studies/html/BLT_Guidelines_en.pdf
- JPX TDnet overview: https://www.jpx.co.jp/english/equities/listing/disclosure/tdnet/index.html
- Japan Credit Association security materials: https://www.j-credit.or.jp/security/document/index.html
