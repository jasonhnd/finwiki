---
source: japanfg/missing-financial-institutions-backlog
source_hash: 2606f321d3665e5f
lang: en
status: machine
fidelity: ok
title: "Missing Japan financial institutions expansion backlog"
translated_at: 2026-05-31T23:59:49.428Z
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
| Shinkin banks | 254 + Shinkin Central Bank | FSA shinkin license Excel | Keep [[cooperative-banks/shinkin-central|Shinkin Central Bank]] as main page; complete long-tail route via [[banking/shinkin-bank-registry-japan]]. |
| Credit cooperatives | 143 + central federation | FSA credit cooperative Excel | Keep [[cooperative-banks/zenshin-kumi|Zenshin-kumi]] as main page; complete long-tail route via [[banking/credit-cooperative-registry-japan]]. |
| Rokin banks | 13 + Rokinren | FSA rokin license Excel | Keep [[cooperative-banks/rokin-renraku|Rokinren]] as main page; complete member route via [[banking/rokin-bank-registry-japan]]. |
| Financial instruments business operators | 1,945 | FSA FIEA operator Excel | Registry route completed via [[securities/financial-instruments-business-operators-japan-index]]; [[financial-licenses/securities-license-stack|securities license stack]] routes Type I/II, registered-financial-institution, intermediary, advisory, management, PTS, and JSDA boundaries; standalone pages only for brokers, AMs, PTS, derivatives, and listed/publicly material operators. |
| Life insurers | 41 | FSA life insurer Excel | Add missing operating insurers and group subsidiaries with public disclosure pages. |
| Non-life insurers | 57 | FSA non-life insurer Excel | Major, direct, reinsurance, and selected specialty / foreign-affiliated routes covered through D3-D5 / D8-D9; remaining long tail should use registry or selective exception treatment. |
| Insurance holding companies | 15 | FSA insurance holding company Excel | Add missing HD pages where group strategy matters. |
| Trust companies | 38 | FSA trust company Excel | Registry route completed via [[trust-banks/trust-companies-japan-index]]; priority A / B / C standalone pages completed, and all 38 rows now have standalone or existing group wiki routes. |
| Funds transfer service providers | 83 | FSA funds transfer PDF / Excel / JPSA member list | Registry route completed via [[payments/funds-transfer-service-providers-japan-index]]; add standalone pages only for major wallet, remittance, PSP, and stablecoin-adjacent operators. |
| Crypto asset exchange operators | 27 | FSA crypto exchange Excel | Existing coverage is broad; add the two missing FSA rows first. |
| Electronic payment instrument service providers | 1 | FSA EPSP Excel | Covered via [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] context; cross-link from stablecoin/EPI pages. |
| Third-party prepaid payment instrument issuers | 803 | FSA prepaid issuer Excel | Registry route completed via [[payments/prepaid-payment-instrument-issuers-japan-index]]; standalone pages only for major wallet/card/retail operators. |
| Credit purchase / card operators | 241 comprehensive credit purchase intermediaries, 138 individual credit purchase intermediaries, 275 card-number handling contract concluding operators | METI Installment Sales Act lists | Registry route completed via [[payments/credit-purchase-card-operators-japan-index]]; standalone pages for card issuers, acquirers, PSPs, and BNPL/consumer-credit operators. |

## Batch A: Market infrastructure first

These are not optional. They are central to Japanese capital markets and currently appear only as references inside other pages.

| Status | Target page | Institution | Public relevance |
|---|---|---|---|
| [x] | `JapanFG/japan-exchange-group.md` | Japan Exchange Group | Listed exchange holding company; TSE/OSE/TOCOM parent. |
| [x] | `securities/tokyo-stock-exchange.md` | / TSE | Listing, TDnet, disclosure, market segments. |
| [x] | `securities/osaka-exchange.md` | / OSE | Derivatives market infrastructure. |
| [x] | `securities/tokyo-commodity-exchange.md` | / TOCOM | Commodity derivatives infrastructure. |
| [x] | `securities/japan-securities-clearing-corp.md` | Japan Securities Clearing Corp | Clearing house; cash, derivatives, OTC clearing. |
| [x] | `securities/japan-securities-depository-center.md` | Japan Securities Depository Center | Settlement / book-entry infrastructure. |
| [x] | `JapanFG/japan-securities-finance.md` | / JSF | Margin loan, securities finance, trust bank adjacency. |
| [x] | `securities/japannext-securities.md` | Japannext Securities | PTS / alternative trading venue. |
| [x] | `securities/osaka-digital-exchange.md` | Osaka Digital Exchange | PTS + security token market infrastructure. |

## Batch B: Bank operating-company pages

Many parent FG pages exist, but the licensed bank operating companies do not have standalone pages. Add them only when the operating company has separate public disclosure, strategic role, license boundary, or market importance.

### B1. Megabank / trust / internet-bank operating companies

| Status | Target page | Institution | Boundary note |
|---|---|---|---|
| [x] | `JapanFG/mizuho-bank.md` | Mizuho Bank | Under [[megabanks/mizuho-fg|Mizuho FG]]. |
| [x] | `JapanFG/sumitomo-mitsui-banking-corp.md` | companies banks / SMBC | Under [[megabanks/smfg|SMFG]]. |
| [x] | `JapanFG/mufg-bank.md` | companiesUFJ banks | Under [[megabanks/mufg|MUFG]]. |
| [x] | `JapanFG/resona-bank.md` | Resona Bank | Under [[megabanks/resona-hd|Resona HD]]. |
| [x] | `JapanFG/saitama-resona-bank.md` | Saitama Resona Bank | Resona group operating bank. |
| [x] | `JapanFG/mitsubishi-ufj-trust-bank.md` | UFJ banks | MUFG trust-bank operating company. |
| [x] | `JapanFG/mizuho-trust-bank.md` | Mizuho Trust Bank | Mizuho trust-bank operating company. |
| [x] | `JapanFG/smtb.md` | banks | Under [[trust-banks/sumitomo-mitsui-trust|SMTG]]. |
| [x] | `JapanFG/smbc-trust-bank.md` | SMBC banks | SMFG private-banking / trust boundary. |
| [x] | `JapanFG/nomura-trust-bank.md` | banks | Nomura group banking arm. |
| [x] | `JapanFG/nochu-trust-bank.md` | banks | Norinchukin trust arm. |
| [x] | `JapanFG/orix-bank.md` | Orix Bank | ORIX to Daiwa Next Bank ownership-transition watch. |
| [x] | `JapanFG/sony-bank.md` | Sony Bank | Under [[megabanks/sony-fg|Sony FG]]. |
| [x] | `JapanFG/daiwa-next-bank.md` | Daiwa Next Bank | Daiwa group bank. |
| [x] | `JapanFG/ui-bank.md` | UI banks | Kiraboshi / Tokyo Kiraboshi digital-bank arm. |
| [x] | `JapanFG/01-bank.md` | 01 banks | Data-driven SME digital-bank model. |
| [x] | `JapanFG/sbj-bank.md` | SBJ banks | Shinhan Bank Japan subsidiary. |
| [x] | `JapanFG/rcc.md` | / RCC | Bank-license special servicer / resolution entity. |

### B2. Regional banks still missing or only group-covered

| Status | Group | Institutions to resolve |
|---|---|---|
| [x] | Hokuhoku / Hokkoku / Hokuriku B2.1 | [[regional-banks/hokkaido-bank|Hokkaido Bank]], [[regional-banks/hokuriku-bank|Hokuriku Bank]], [[regional-banks/hokkoku-bank|Hokkoku Bank]], [[regional-banks/toyama-bank|Toyama Bank]], [[regional-banks/toyama-first-bank|Toyama First Bank]] |
| [x] | Tohoku / Fidea / Jimoto B2.2 | [[regional-banks/tohoku-bank|Tohoku Bank]], [[regional-banks/hokuto-bank|Hokuto Bank]], [[regional-banks/shonai-bank|Shonai Bank]], [[regional-banks/kita-nippon-bank|Kita Nippon Bank]], [[regional-banks/sendai-bank|Sendai Bank]], [[regional-banks/kirayaka-bank|Kirayaka Bank]], [[regional-banks/fukushima-bank|Fukushima Bank]], [[regional-banks/daito-bank|Daito Bank]] |
| [x] | Kanto B2.3 | [[regional-banks/tsukuba-bank|Tsukuba Bank]], [[regional-banks/ashikaga-bank|Ashikaga Bank]], [[regional-banks/kiraboshi-bank|Kiraboshi Bank]], [[regional-banks/yokohama-bank|Yokohama Bank]], [[regional-banks/higashi-nippon-bank|Higashi Nippon Bank]], [[regional-banks/tokyo-star-bank|Tokyo Star Bank]], [[regional-banks/kanagawa-bank|Kanagawa Bank]], [[regional-banks/tochigi-bank|Tochigi Bank]], [[regional-banks/taiko-bank|Taiko Bank]] |
| [x] | Chubu B2.4 | [[regional-banks/daishi-hokuetsu-bank|Daishi Hokuetsu Bank]], [[regional-banks/yamanashi-chuo-bank|Yamanashi Chuo Bank]], [[regional-banks/hachijuni-nagano-bank|Hachijuni Nagano Bank]], [[regional-banks/juroku-bank|Juroku Bank]], [[regional-banks/shizuoka-bank|Shizuoka Bank]], [[regional-banks/shimizu-bank|Shimizu Bank]], [[regional-banks/shizuoka-chuo-bank|Shizuoka Chuo Bank]], [[regional-banks/aichi-bank|Aichi Bank]], [[regional-banks/nagoya-bank|Nagoya Bank]], [[regional-banks/fukui-bank|Fukui Bank]] |
| [x] | Kansai / Chugoku B2.5 | [[regional-banks/kyoto-bank|Kyoto Bank]], [[regional-banks/kansai-mirai-bank|Kansai Mirai Bank]], [[regional-banks/ikeda-senshu-bank|Ikeda Senshu Bank]], [[regional-banks/tajima-bank|Tajima Bank]], [[regional-banks/tottori-bank|Tottori Bank]], [[regional-banks/chugoku-bank|Chugoku Bank]], [[regional-banks/hiroshima-bank|Hiroshima Bank]], [[regional-banks/momiji-bank|Momiji Bank]], [[regional-banks/tomato-bank|Tomato Bank]] |
| [x] | Shikoku B2.6 | [[regional-banks/awa-bank|Awa Bank]], [[regional-banks/iyo-bank|Iyo Bank]], [[regional-banks/shikoku-bank|Shikoku Bank]], [[regional-banks/tokushima-taisho-bank|Tokushima Taisho Bank]], [[regional-banks/kagawa-bank|Kagawa Bank]], [[regional-banks/ehime-bank|Ehime Bank]], [[regional-banks/kochi-bank|Kochi Bank]] |
| [x] | Kyushu / Okinawa B2.7 | [[regional-banks/fukuoka-bank|Fukuoka Bank]], [[regional-banks/chikuho-bank|Chikuho Bank]], [[regional-banks/nishi-nippon-city-bank|Nishi Nippon City Bank]], [[regional-banks/kitakyushu-bank|Kitakyushu Bank]], [[regional-banks/saga-bank|Saga Bank]], [[regional-banks/higo-bank|Higo Bank]], [[regional-banks/oita-bank|Oita Bank]], [[regional-banks/miyazaki-bank|Miyazaki Bank]], [[regional-banks/kagoshima-bank|Kagoshima Bank]], [[regional-banks/okinawa-bank|Okinawa Bank]] |
| [x] | Second regional long tail B2.8 | [[regional-banks/minato-bank|Minato Bank]], [[regional-banks/shimane-bank|Shimane Bank]], [[regional-banks/saikyo-bank|Saikyo Bank]], [[regional-banks/fukuoka-chuo-bank|Fukuoka Chuo Bank]], [[regional-banks/saga-kyoei-bank|Saga Kyoei Bank]], [[regional-banks/nagasaki-bank|Nagasaki Bank]], [[regional-banks/kumamoto-bank|Kumamoto Bank]], [[regional-banks/howa-bank|Howa Bank]], [[regional-banks/miyazaki-taiyo-bank|Miyazaki Taiyo Bank]], [[regional-banks/minami-nippon-bank|Minami Nippon Bank]], plus existing [[regional-banks/okinawa-kaiho-bank|Okinawa Kaiho Bank]] anchor |

## Batch C: Securities, asset management, and FIEA operators

Start with operators that have public strategic significance. Do not attempt to write all 1,945 FIEA operators as standalone pages.

The company-page layer is now supported by six control pages: [[financial-licenses/securities-license-stack|Japan securities license stack]], [[securities/japan-online-brokerage-competition|Japan online brokerage competition]], [[securities/japan-best-execution-sor-pts|Japan best execution, SOR, and PTS]], [[securities/japan-pts-liquidity-data-guide|Japan PTS liquidity data guide]], [[securities/japan-underwriting-market-structure|Japan underwriting market structure]], and [[securities/japan-market-infrastructure-map|Japan market infrastructure map]].

| Status | Target page | Institution | Source route |
|---|---|---|---|
| [x] | `JapanFG/sbi-securities.md` | SBI | FSA FIEA list / company disclosure / SBI group IR. |
| [x] | `JapanFG/mufg-esmart-securities.md` | MUFG Esmart Securities | FSA FIEA list / MUFG-KDDI boundary. |
| [x] | `JapanFG/paypay-securities.md` | PayPay | FSA FIEA list / PayPay group boundary. |
| [x] | `JapanFG/gmo-click-securities.md` | GMO Click Securities | FSA FIEA list / GMO FH disclosure. |
| [x] | `JapanFG/dmm-com-securities.md` | DMM.com | FSA FIEA list; separate from crypto-exchange page. |
| [x] | `JapanFG/traders-securities.md` | Traders Securities | FSA FIEA list; FX / derivatives. |
| [x] | `JapanFG/saxo-bank-securities.md` | Saxo Bank Securities | FSA FIEA list; foreign broker Japan entity. |
| [x] | `JapanFG/sbi-fx-trade.md` | SBI FX Trade | FSA FIEA list; SBI FX arm. |
| [x] | `JapanFG/nomura-asset-management.md` | Nomura Asset Management | FSA FIEA investment management route. |
| [x] | `JapanFG/nikko-asset-management.md` | Nikko Asset Management | 2025-09 name-change boundary captured. |
| [x] | `JapanFG/asset-management-one.md` | Asset Management One | Mizuho / Dai-ichi Life AM joint platform. |
| [x] | `JapanFG/mufg-asset-management.md` | MUFG Asset Management | MUFG AM platform. |
| [x] | `JapanFG/smd-am.md` | Smd Am | SMFG / Daiwa / insurer shareholder platform. |
| [x] | `JapanFG/daiwa-asset-management.md` | Daiwa Asset Management | Daiwa AM platform. |
| [x] | `JapanFG/sbi-asset-management.md` | SBI Asset Management | SBI AM platform. |

## Batch D: Insurance operating companies

Parent insurance HD pages are not enough for product/channel analysis. Add operating companies where public disclosure exists.

| Status | Group | Institutions to write or reconcile |
|---|---|---|
| [x] | Life insurers D1 | [[life-insurers/asahi-life|Asahi Life]], [[life-insurers/sbi-life|SBI Life]], [[life-insurers/nn-life-japan|Nn Life Japan]], [[life-insurers/fwd-life-japan|Fwd Life Japan]], [[life-insurers/sony-life|Sony Life]], [[life-insurers/sompo-himawari-life|Sompo Himawari Life]], [[life-insurers/dai-ichi-frontier-life|Dai Ichi Frontier Life]], [[life-insurers/taiju-life|Taiju Life]], [[life-insurers/daido-life|Daido Life]], [[life-insurers/taiyo-life|Taiyo Life]], [[life-insurers/tokio-marine-nichido-life|Tokio Marine Nichido Life]], [[life-insurers/fukoku-life|Fukoku Life]], [[life-insurers/rakuten-life|Rakuten Life]] |
| [x] | Life subsidiaries / specialty D2 | [[life-insurers/cardif-life|Cardif Life]], [[life-insurers/gibraltar-life|Gibraltar Life]], [[life-insurers/zurich-life|Zurich Life]], [[life-insurers/td-financial-life|Td Financial Life]], [[life-insurers/nanairo-life|Nanairo Life]], [[life-insurers/nissay-wealth-life|Nissay Wealth Life]], [[life-insurers/hanasaku-life|Hanasaku Life]], [[life-insurers/mitsui-sumitomo-aioi-life|Mitsui Sumitomo Aioi Life]], [[life-insurers/medicare-life|Medicare Life]] |
| [x] | Non-life majors D3 | [[non-life-insurers/tokio-marine-nichido-fire|Tokio Marine Nichido Fire]], [[non-life-insurers/mitsui-sumitomo-insurance|Mitsui Sumitomo Insurance]], [[non-life-insurers/aioi-nissay-dowa-insurance|Aioi Nissay Dowa Insurance]], [[non-life-insurers/sompo-japan-insurance|Sompo Japan Insurance]] |
| [x] | Direct / digital non-life D4 | [[non-life-insurers/sony-insurance|Sony Assurance]], [[non-life-insurers/sbi-insurance|SBI Insurance]], [[non-life-insurers/au-insurance|Au Insurance]], [[non-life-insurers/tokio-marine-direct|Tokio Marine Direct]], [[non-life-insurers/sompo-direct|Sompo Direct]], [[non-life-insurers/mitsui-direct|Mitsui Direct]], [[non-life-insurers/rakuten-general-insurance|Rakuten General Insurance]] |
| [x] | Specialty / reinsurance D5 | [[non-life-insurers/anicom-insurance|Anicom Insurance]], [[non-life-insurers/secom-insurance|Secom Insurance]], [[non-life-insurers/toa-reinsurance|Toa Reinsurance]], [[non-life-insurers/japan-earthquake-reinsurance|Japan Earthquake Reinsurance]], [[non-life-insurers/nisshin-fire|Nisshin Fire]], [[non-life-insurers/meiji-yasuda-general-insurance|Meiji Yasuda General Insurance]] |
| [x] | Insurance holding companies D6 | [[non-life-insurers/anicom-hd|Anicom HD]], [[non-life-insurers/ntt-docomo-sompo-hd|Ntt Docomo Sompo HD]], [[non-life-insurers/rakuten-insurance-hd|Rakuten Insurance HD]], [[life-insurers/dai-ichi-life|Dai Ichi Life]] |
| [x] | Remaining exact-name life insurers D7 | [[life-insurers/credit-agricole-life|Credit Agricole Life]], [[life-insurers/dai-ichi-life-insurance|Dai Ichi Life Insurance]], [[life-insurers/dai-ichi-neo-life|Dai Ichi Neo Life]], [[life-insurers/fukokushinrai-life|Fukokushinrai Life]], [[life-insurers/pgf-life|Pgf Life]], [[life-insurers/ms-primary-life|Ms Primary Life]], [[life-insurers/midori-life|Midori Life]], [[life-insurers/meiji-yasuda-trust-life|Meiji Yasuda Trust Life]] |
| [x] | Specialty non-life extension D8 | [[non-life-insurers/dai-ichi-ipet-insurance|Dai Ichi Ipet Insurance]], [[non-life-insurers/pet-and-family-insurance|Pet And Family Insurance]], [[non-life-insurers/yamap-naturance-insurance|Yamap Naturance Insurance]], [[non-life-insurers/ntt-docomo-sonpo|Ntt Docomo Sonpo]] |
| [x] | Specialty / foreign-affiliated non-life extension D9 | [[non-life-insurers/american-home-insurance-japan|American Home]], [[non-life-insurers/allianz-fire-marine-japan|Allianz Fire and Marine Japan]], [[non-life-insurers/hs-insurance|HS Insurance]], [[non-life-insurers/cardif-nonlife|Cardif Non-Life]], [[non-life-insurers/capital-insurance|Capital Insurance]], [[non-life-insurers/sakura-insurance|Sakura Insurance]], [[non-life-insurers/ji-accident-fire-insurance|JI Accident & Fire]], [[non-life-insurers/zenkankyo-reiwa-insurance|Zenkankyo Reiwa]], [[non-life-insurers/chubb-insurance-japan|Chubb Japan]], [[non-life-insurers/rescue-insurance|Rescue Insurance]], [[non-life-insurers/hyundai-marine-fire-japan|Hyundai Marine & Fire Japan]] |

## Batch E: Payments, cards, consumer credit, and remittance

This is the largest strategic gap after banks and insurance. Start from major consumer-facing platforms and registered funds-transfer / credit-card operators.

| Status | Segment | Institutions |
|---|---|---|
| [x] | Card issuers / acquirers E1 | [[card-issuers/smbc-card|Smbc Card]], [[card-issuers/mufg-nicos|MUFG Nicos]], [[card-issuers/rakuten-card|Rakuten Card]], [[card-issuers/paypay-card|Paypay Card]], [[card-issuers/aeon-financial-service|AEON Financial Service]], [[card-issuers/epos-card|Epos Card]], [[card-issuers/life-card|Life Card]], [[card-issuers/pocket-card|Pocket Card]], [[card-issuers/ucs-card|UCS]], [[card-issuers/seven-card-service|Seven Card Service]] |
| [x] | Consumer finance / installment E1 | [[consumer-finance/smbc-consumer-finance|Smbc Consumer Finance]], [[card-issuers/aplus|Aplus]] |
| [x] | Consumer finance / installment E2 | [[consumer-finance/shinsei-financial|Shinsei Financial]], [[card-issuers/toyota-finance|Toyota Finance]] page split from [[leasing-firms/toyota-financial|Toyota Financial Services]] |
| [x] | PSP / acquiring / gateway E1 | [[payment-firms/sb-payment-service|Sb Payment Service]], [[payment-firms/gmo-epsilon|GMO Epsilon]], [[payment-firms/dg-financial-technology|Dg Financial Technology]] |
| [x] | PSP / acquiring / gateway E2 | [[payment-firms/netstars|Netstars]], [[payment-firms/recruit-mufg-business|Recruit MUFG Business]], [[payment-firms/jal-payment-port|Jal Payment Port]] |
| [x] | Wallet / funds transfer E2 | [[payment-firms/paypay|PayPay]], [[payment-firms/merpay|Merpay]], [[payment-firms/au-payment|Au Payment]], [[payment-firms/rakuten-edy|Rakuten Edy]], [[payment-firms/kyash|Kyash]], [[payment-firms/smartbank|SmartBank]], [[payment-firms/pring|pring]], [[payment-firms/seven-payment-service|Seven Payment Service]] |
| [x] | Cross-border remittance E2 | [[payment-firms/wise-payments-japan|Wise Payments Japan]], [[payment-firms/revolut-technologies-japan|Revolut Japan]], [[payment-firms/paypal-pte-ltd-japan|PayPal Pte. Ltd.]], [[payment-firms/payoneer-japan|Payoneer Japan]], [[payment-firms/western-union-japan|Western Union Japan]], [[payment-firms/sbi-remit|SBI Remit]], [[payment-firms/travelex-japan|Travelex Japan]], [[payment-firms/airwallex-japan|Airwallex Japan]] |
| [x] | Stablecoin / EPI adjacency E3 | [[payment-firms/jpyc|JPYC]], [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade EPSP / USDC cross-link]], [[payment-firms/progmat|Progmat]] / [[trust-banks/mitsubishi-ufj-trust-bank|Mitsubishi UFJ Trust]] link map |

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

| Status | Priority | Institutions | Notes |
|---|---|---|---|
| [x] | P0 | [[foreign-financial-institutions/credit-agricole-bank-japan|Credit Agricole Bank Japan]], [[foreign-financial-institutions/natixis-japan|Natixis Japan]], [[foreign-financial-institutions/rbc-japan|Rbc Japan]], [[foreign-financial-institutions/commerzbank-japan|Commerzbank Japan]], [[foreign-financial-institutions/ing-bank-japan|ING Bank]], [[foreign-financial-institutions/dbs-bank-japan|Dbs Bank Japan]], [[foreign-financial-institutions/ocbc-bank-japan|Ocbc Bank Japan]], [[foreign-financial-institutions/uob-bank-japan|Uob Bank Japan]], [[foreign-financial-institutions/bbva-bank-japan|BBVA]], [[foreign-financial-institutions/intesa-sanpaolo-japan|Intesa Sanpaolo Japan]] | Major Europe / ASEAN majors |
| [x] | P1 | : [[foreign-financial-institutions/woori-bank-japan|Woori Bank Japan]], [[foreign-financial-institutions/hana-bank-japan|Hana Bank Japan]], [[foreign-financial-institutions/korea-development-bank-japan|Korea Development Bank Japan]], [[foreign-financial-institutions/industrial-bank-of-korea-japan|Industrial Bank Of Korea Japan]], [[foreign-financial-institutions/kb-kookmin-bank-japan|Kb Kookmin Bank Japan]] | Korean cluster |
| [x] | P1 | / : [[foreign-financial-institutions/bank-of-taiwan-japan|Bank Of Taiwan Japan]], [[foreign-financial-institutions/mega-icbc-japan|Mega Icbc Japan]], [[foreign-financial-institutions/ctbc-bank-japan|Ctbc Bank Japan]], [[foreign-financial-institutions/esun-bank-japan|Esun Bank Japan]], [[foreign-financial-institutions/bank-of-china-japan|Bank Of China Japan]], [[foreign-financial-institutions/icbc-japan|Icbc Japan]], [[foreign-financial-institutions/china-construction-bank-japan|China Construction Bank Japan]], [[foreign-financial-institutions/agricultural-bank-of-china-japan|Agricultural Bank Of China Japan]] | Greater China cluster |
| [x] | P2 strategic exceptions | [[foreign-financial-institutions/euroclear-bank-japan|Euroclear]], [[foreign-financial-institutions/clearstream-banking-japan|Clearstream]], [[foreign-financial-institutions/bank-of-communications-japan|Bank of Communications]], [[foreign-financial-institutions/bangkok-bank-japan|Bangkok Bank]], [[foreign-financial-institutions/state-bank-of-india-japan|State Bank of India]], [[foreign-financial-institutions/bank-of-india-japan|Bank of India]], [[securities-firms/anz-bank-japan|ANZ]] | ICSD / collateral / China / ASEAN / India / Australia-New Zealand corridor rows promoted from registry-only to standalone pages |
| [x] | P3 corridor exceptions | [[foreign-financial-institutions/commonwealth-bank-japan|Commonwealth Bank]], [[foreign-financial-institutions/national-australia-bank-japan|National Australia Bank]], [[foreign-financial-institutions/bank-negara-indonesia-japan|Bank Negara Indonesia]], [[foreign-financial-institutions/philippine-national-bank-japan|Philippine National Bank]], [[foreign-financial-institutions/metrobank-japan|Metrobank]], [[foreign-financial-institutions/banco-do-brasil-japan|Banco do Brasil]], [[foreign-financial-institutions/first-commercial-bank-japan|First Commercial Bank]], [[foreign-financial-institutions/taipei-fubon-bank-japan|Taipei Fubon Bank]] | Australia, Indonesia, Philippines, Brazil, and Taiwan corridor rows promoted from registry-only to standalone pages |
| [x] | P4 registry-only closure | [[foreign-financial-institutions/chang-hwa-bank-japan|Chang Hwa Bank Japan]], [[foreign-financial-institutions/taishin-bank-japan|Taishin Bank Japan]], [[foreign-financial-institutions/taiwan-business-bank-japan|Taiwan Business Bank Japan]], [[foreign-financial-institutions/taiwan-cooperative-bank-japan|Taiwan Cooperative Bank Japan]], [[foreign-financial-institutions/national-bank-of-pakistan-japan|National Bank Of Pakistan Japan]], [[foreign-financial-institutions/ubaf-japan|Ubaf Japan]] | Remaining 6 registry-only rows promoted to concise standalone branch / corridor pages; [[foreign-financial-institutions/foreign-bank-branches-japan-index]] now routes all 57 FSA rows |

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

The policy-finance namespace already covers [[financial-regulators/jfc|JFC]], [[financial-regulators/dbj|DBJ]], [[financial-regulators/jbic|JBIC]], [[policy-finance/jica|JICA]], [[policy-finance/jogmec|JOGMEC]], [[policy-finance/nexi|NEXI]], and [[policy-finance/okinawa-development-finance-corp|Okinawa Development Finance Corp]]. Add the remaining institutions that matter for credit creation and public guarantees.

| Status | Target page | Institution |
|---|---|---|
| [x] | `policy-finance/japan-housing-finance-agency.md` | / JHF |
| [x] | `policy-finance/japan-credit-guarantee-system.md` | / JFG |
| [x] | `policy-finance/national-federation-credit-guarantee-corporations.md` | |
| [x] | `policy-finance/agriculture-credit-guarantee-system.md` | / |
| [x] | `policy-finance/fisheries-credit-guarantee-system.md` | / |

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
| [x] | Recount root [[INDEX|INDEX]] after each batch. | Root domain table sum = 538 and filesystem count = 538 after B1; Batch J does not add entries. Post-Wave-13 refresh (2026-05-25): JapanFG headline now **620 entity entries**, filesystem .md count = **621** incl. INDEX / backlog / non-entity surfaces. |

### Batch J QA snapshot (2026-05-20)

This table is a source-control checkpoint, not a final coverage claim. `Machine match` is an exact / alias normalization lower bound from current wiki titles and aliases. It understates coverage where the wiki intentionally uses a parent group page, a foreign-bank Japan umbrella page, or an index route instead of a legal-name page.

| Registry | FSA as-of date | Official count | Machine match lower bound | Coverage decision | Next action |
|---|---:|---:|---:|---|---|
| Banks: city / trust / other | 2026-04-01 | 35 | 34 | Mostly covered after B1 plus specialty-trust reconciliation; [[trust-banks/sbi-shinsei-trust-bank]] and [[trust-banks/jsf-trust-bank]] now have standalone routes, while BNY Mellon Trust is handled inside [[foreign-financial-institutions/bny-mellon-japan]] to separate a duplicate custody umbrella page. | Refresh only when the FSA bank-license list changes or a trust-bank route needs deeper KPI / disclosure precision. |
| Foreign bank branches | 2026-05-13 | 57 | 57 | Registry/index route completed via [[foreign-financial-institutions/foreign-bank-branches-japan-index]]; all 57 rows have standalone / umbrella wiki routes after P2 strategic exceptions, P3 corridor promotions, and the P4 registry-only closure. | Refresh the registry index when FSA `ginkou.xlsx` changes; no registry-only rows remain, so future standalone changes should follow source changes or deeper strategic questions. |
| Regional banks | 2026-01-01 | 61 | 61 | First-regional bank license surface closed at standalone / intentional existing-anchor level after B2.1 Hokuriku / Hokkaido, B2.2 Tohoku / Fidea, B2.3 Kanto, B2.4 Chubu, B2.5 Kansai / Chugoku, B2.6 Shikoku, and B2.7 Kyushu / Okinawa. | Maintain boundary links; no new first-regional standalone gap unless FSA list changes. |
| Second regional banks | 2026-05-02 | 34 | 34 | Second-regional bank license surface closed at standalone / intentional existing-anchor level after B2.2 North Japan / Sendai / Kirayaka / Fukushima / Daito, B2.3 East Japan / Tokyo Star / Kanagawa / Tochigi / Taiko, B2.4 Shizuoka Chuo / Aichi / Nagoya, B2.5 Momiji / Tomato, B2.6 Tokushima Taisho / Kagawa / Ehime / Kochi, and B2.8 second-regional long tail. The same FSA sheet also has an `Other` row for [[megabanks/saitama-resona-bank|Saitama Resona Bank]], already covered in B1. | Maintain boundary links; no new second-regional standalone gap unless FSA list changes. |
| Bank holding companies | 2026-05-01 | 31 | 31 | Current-name route completed with [[financial-regulators/cci-group]]; [[regional-banks/hokkoku-fhd]] remains the historical / old-name bridge, and Kyushu parent boundary is already covered by existing [[regional-banks/kyushu-fg]] route. | Maintain current-name redirects and refresh when FSA bank-holding-company list changes. |
| Shinkin banks + Shinkin Central Bank | 2025-11-06 | 255 | 255 | Registry/index route completed via [[banking/shinkin-bank-registry-japan]]; do not create 254 standalone pages by default. | Refresh registry index when FSA workbook changes; standalone pages only for strategically material exceptions. |
| Credit cooperatives + Zenshinkumiren | 2026-02-20 | 144 | 144 | Registry/index route completed via [[banking/credit-cooperative-registry-japan]]; do not create 143 standalone pages by default. | Refresh registry index when FSA workbook changes; standalone pages only for central / strategically material exceptions. |
| Rokin banks + Rokinren | 2023-08-14 | 14 | 14 | Registry/index route completed via [[banking/rokin-bank-registry-japan]]. | Refresh registry index when FSA workbook changes; standalone pages only if a labor-bank entity needs deeper analysis. |
| Financial instruments business operators | 2026-04-30 | 1,945 | 1,945 | Registry route completed via [[securities/financial-instruments-business-operators-japan-index]]; material brokers, AMs, PTS, FX, and listed/publicly material operators have route anchors; license / brokerage / best-execution / PTS liquidity data / margin trading / securities finance / short-selling / stock-loan / stock-lending / prime brokerage / underwriting / infrastructure control pages are now linked. | Refresh when FSA `kinyushohin.xlsx` changes; standalone pages only for strategic exceptions. |
| Life insurers | 2026-04-13 | 41 | 41 | FSA 41 life-insurer surface closed at standalone / intentional group-anchor level after D1, D2, and D7. | Maintain name-change checks; do not add duplicate pages for parent/operating company boundaries already resolved. |
| Non-life insurers | 2026-04-01 | 57 | 37 | Major, direct / digital, specialty, reinsurance, pet-insurance, outdoor/platform, telco-linked, travel, rental-housing, foreign-affiliated, and product-specialty D3-D5/D8-D9 pages completed; remaining long-tail non-life insurers need registry/index treatment or strategic exception review. | Refresh when FSA `songai.xlsx` changes; next useful step is a non-life registry index or foreign reinsurer / P&I carrier map, not blanket company-page generation. |
| Insurance holding companies | 2026-04-01 | 15 | 14 | D6 completed for Anicom HD, NTT docomo non-life HD, Rakuten Insurance HD, and Dai-ichi Life Group name update. Current FSA holding-company list does not require an ipet-holdings standalone route. | Remaining HD gaps requires checking only when group strategy needs standalone coverage. |
| Trust companies | 2026-03-31 | 38 | 38 | Registry route completed via [[trust-banks/trust-companies-japan-index]]; all 38 rows now have standalone or existing group wiki routes after priority A / B / C promotion, and 0 rows remain registry-only. | Refresh when FSA `sintaku01.xlsx` changes; future work should focus on source URL drift refresh or report-source precision rather than raw registry completion. |
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
9. Batch G + H + I: foreign branches, cooperative-system gaps, and policy-finance adjacency. Batch G foreign-bank branch surface is closed at all-57-row route level via [[foreign-financial-institutions/foreign-bank-branches-japan-index]], P2 strategic exception pages, P3 corridor exception pages, and P4 registry-only closure pages. Batch H cooperative-system gaps are routed via [[banking/ja-bank-system-japan]] and [[banking/jf-marine-bank-system-japan]], and Batch I public-credit adjacency is routed via [[policy-finance/japan-housing-finance-agency]], [[policy-finance/japan-credit-guarantee-system]], [[policy-finance/national-federation-credit-guarantee-corporations]], [[policy-finance/agriculture-credit-guarantee-system]], and [[policy-finance/fisheries-credit-guarantee-system]]. Future foreign-bank work should be refresh / precision work, not raw list completion.
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
