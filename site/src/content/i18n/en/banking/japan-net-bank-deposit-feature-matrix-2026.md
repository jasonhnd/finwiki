---
source: banking/japan-net-bank-deposit-feature-matrix-2026
source_hash: a66f9ca3fc29225a
lang: en
status: machine
fidelity: ok
title: "Japan net bank deposit & feature matrix 2026"
translated_at: 2026-06-15T03:48:21.887Z
---

# Japan net bank deposit & feature matrix 2026

## TL;DR

Japan's net-bank cohort entered 2026 as a clearly segmented competitive surface rather than one undifferentiated category. The ten-plus operators range from **trillion-yen deposit franchises** (Rakuten Bank, Sumishin SBI Net Bank, Sony Bank) to **specialist BaaS / partner-led brands** (Minna Bank, Sumishin SBI's NEOBANK partners), to **ecosystem-stacked retail banks** (PayPay Bank, au Jibun Bank), to **emerging fintech-issued banks** (Mercari Bank, UI Bank). This matrix compares them on parent group, deposit base, FX product depth, mortgage origination, debit / credit overlay, public bank API posture, 2025-2026 growth trajectory, fee schedule, deposit-rate tiering, and embedded-finance partnerships. Use it alongside [[banking/japan-net-bank-competition-map|Japan net bank competition map]] for segment framing, and the per-bank entries for granular detail.

## Wiki route

This page sits under [[banking/INDEX|banking index]] as a 2026-vintage deposit-and-feature comparison surface. The segment-level framing lives in [[banking/japan-net-bank-competition-map|Japan net bank competition map]] and [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]]. Specific per-bank pages: [[banking/sony-bank|Sony Bank]], [[banking/ui-bank|UI Bank]], [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]], [[banking/daiwa-next-bank|Daiwa Next Bank]], [[banking/rakuten-bank|Rakuten Bank]], [[banking/paypay-bank|PayPay Bank]], [[banking/au-jibun-bank|au Jibun Bank]], [[banking/minna-bank-baas-model|Minna Bank BaaS model]], [[banking/mercari-bank|Mercari Bank]], [[banking/mercari-bank-license-stack|Mercari Bank license stack]]. Operating models live in [[banking/japan-baas-operating-models|Japan BaaS operating models]] and [[banking/regional-bank-api-digital-partnership-route|regional bank API digital partnership route]]. Post-megabank context: [[banking/post-megabank-positioning|post-megabank positioning]].

## Why deposit feature comparison matters in 2026

Three structural shifts make a deposit-and-feature comparison especially useful in 2026.

1. **Rate normalisation has restarted deposit competition.** BOJ's exit from negative-rate policy across 2024-2025 returned positive short-rate territory, which broke the multi-year "all deposit rates are zero" simplification. Net banks are again differentiating on tiered rates, FX deposits, and structured deposit products — see [[banking/japan-net-bank-competition-map|Japan net bank competition map]] for the segment-level framing.
2. **Embedded finance via bank API is the new BaaS surface.** The bank API regime under [[fintech/INDEX|fintech]] has matured into mainstream distribution. [[banking/japan-baas-operating-models|Japan BaaS operating models]] documents partner-branch and white-label account architectures. Net banks differ materially in whether they publish bank APIs, white-label account containers, or both.
3. **Mortgage origination has become a primary scale axis for net banks.** [[banking/sony-bank|Sony Bank]], [[banking/au-jibun-bank|au Jibun Bank]], and [[banking/rakuten-bank|Rakuten Bank]] each run sizeable variable-rate mortgage flows. [[finance/japan-acquisition-finance|Japan acquisition finance]] context and [[banking/post-megabank-positioning|post-megabank positioning]] explain why net-bank mortgages now compete head-on with megabank originators in the variable-rate book.

## Bank universe in scope

Eleven banks anchor the comparison:

- **Ecosystem-anchored retail** — [[banking/rakuten-bank|Rakuten Bank]], [[banking/paypay-bank|PayPay Bank]], [[banking/au-jibun-bank|au Jibun Bank]].
- **Securities-adjacent / asset-formation** — [[banking/sony-bank|Sony Bank]], [[banking/daiwa-next-bank|Daiwa Next Bank]], [[regional-banks/sbi-shinsei-bank|SBI Shinsei]] context entries via [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] (the NEOBANK / mortgage-anchor net bank).
- **Corporate API / SME** — [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]].
- **BaaS / partner-led** — [[banking/minna-bank-baas-model|Minna Bank]] (Fukuoka FG digital-bank brand), [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] NEOBANK partner stack.
- **Regional digital** — [[banking/ui-bank|UI Bank]] (Tokyo Kiraboshi FG).
- **Fintech-issued** — [[banking/mercari-bank|Mercari Bank]] (2025-2026 launch).
- **Postal / government-anchored** — [[regional-banks/japan-post-bank|Japan Post Bank]] digital channel (Yucho Direct + Yucho Pay) is included as a digital-channel comparison even though it is not a pure net bank.

The cohort excludes corporate-only digital lenders (e.g. Funds), wallet-only operators ([[card-issuers/paypay-card|PayPay Card]] without the bank entity), and pre-launch projects.

## Core matrix — deposit base and parent ecosystem

| Bank | Parent group | Deposit base (¥tn, ~2026) | Account base (m) | Primary deposit driver |
|---|---|---|---|---|
| [[banking/rakuten-bank|Rakuten Bank]] | Rakuten Group ([[business/rakuten-group-mobile-finance-bundling-case|mobile-finance bundling]]) | ~10-12 | ~16-17 | Rakuten Pay sweep, salary settlement, Rakuten Card autopay |
| [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] | Sumitomo Mitsui Trust × [[megabanks/sbi-hd|SBI HD]] | ~10-11 | ~7-8 | Mortgage origination + JAL / SBI / Yamada / T-NEOBANK partner accounts |
| [[banking/paypay-bank|PayPay Bank]] | SoftBank / PayPay / Yahoo Japan stack | ~2-3 | ~7-8 | PayPay wallet top-up, salary account, ATM-light channel |
| [[banking/au-jibun-bank|au Jibun Bank]] | KDDI × MUFG ([[megabanks/au-fh|au FH]] × [[megabanks/mufg|MUFG]]) | ~5-6 | ~6-7 | au PAY linkage, mortgage book, salary account, FX retail |
| [[banking/sony-bank|Sony Bank]] | Sony Financial Group ([[business/sony-fg-partial-spinoff-case|SFG spinoff]]) | ~3-4 | ~1.7-2.0 | Mortgage book + multi-currency FX deposits + asset-formation accounts |
| [[banking/daiwa-next-bank|Daiwa Next Bank]] | [[securities-firms/daiwa-sg|Daiwa Securities Group]] | ~5-6 | ~1.5-1.7 | Securities-sweep deposits, structured deposits, asset-formation customer base |
| [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] | [[regional-banks/aozora-bank|Aozora Bank]] × [[business/gmo-internet-group|GMO Internet Group]] | ~1.5-2 | ~0.7-0.9 | SME / startup business accounts, API-based corporate treasury |
| [[banking/ui-bank|UI Bank]] | Tokyo Kiraboshi FG | ~0.3-0.5 | ~0.3-0.4 | App-only digital deposit channel for regional group |
| [[banking/minna-bank-baas-model|Minna Bank]] | Fukuoka FG | ~0.2-0.4 | ~0.9-1.1 | Mobile-native account + BaaS partner brands |
| [[banking/mercari-bank|Mercari Bank]] | Mercari Group | <0.2 (early) | early-stage | Mercari Marketplace seller cash flow + Mercari point bridge |
| [[regional-banks/japan-post-bank|Japan Post Bank]] (digital channel) | Japan Post Holdings | ~190 (entire bank) | ~120 (entire bank) | Branch + ATM base; Yucho Direct digital channel is overlay |

Deposit-base values are public-source approximations from bank IR pages, group annual reports, and FSA aggregate. Use the bank IR page for exact balance-sheet figures.

## Core matrix — FX, mortgage, card, and API depth

| Bank | FX product depth | Mortgage origination | Debit / credit overlay | Bank API publishing |
|---|---|---|---|---|
| [[banking/rakuten-bank|Rakuten Bank]] | Yen + USD + EUR retail FX, FX debit card | Variable-rate mortgages via group origination | Rakuten Card linkage (no own card brand) | Standard FA API for [[banking/japan-baas-operating-models|BaaS]] partners |
| [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] | Limited FX retail; FX via [[securities-firms/sbi-fx-trade|SBI FX Trade]] | Major variable-rate mortgage anchor | Mister Debit (Visa debit) | Extensive — NEOBANK API for JAL, T-NEOBANK, Yamada, SBI, etc. |
| [[banking/paypay-bank|PayPay Bank]] | Yen + USD retail FX, FX deposit | Limited — partner referral | PayPay debit (J-Debit + Visa debit), PayPay Card linkage | Standard bank API for PayPay wallet sweep |
| [[banking/au-jibun-bank|au Jibun Bank]] | Multi-currency FX deposit, FX margin, FX debit | Mortgage book growing | au PAY card / au PAY debit linkage | Standard bank API + au PAY linkage |
| [[banking/sony-bank|Sony Bank]] | **Strongest retail FX** — 11+ currencies, MoneyKit FX deposit, FX debit | Mortgage core product since launch | Sony Bank WALLET (Visa debit) | Standard bank API |
| [[banking/daiwa-next-bank|Daiwa Next Bank]] | Limited FX retail | None | None (deposit-only) | Securities-sweep linkage with [[securities-firms/daiwa-sg|Daiwa]] |
| [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] | Corporate FX via parent [[regional-banks/aozora-bank|Aozora]] | Limited retail mortgage | Visa Debit | **Extensive corporate API** — embedded payments, SaaS connectors |
| [[banking/ui-bank|UI Bank]] | Limited | Limited | Visa debit | Standard bank API |
| [[banking/minna-bank-baas-model|Minna Bank]] | None / limited | None | Visa debit | **Native BaaS architecture** with partner brand APIs |
| [[banking/mercari-bank|Mercari Bank]] | None initially | None | Bridge to Mercari Card | Mercari Marketplace integration |
| [[regional-banks/japan-post-bank|Japan Post Bank]] | Limited retail FX via Yucho | None | JP Bank Visa debit, JP Bank Card | Limited public API |

[[banking/sony-bank|Sony Bank]] historically anchored its differentiation in **multi-currency retail FX**, and 2026 still shows it as the broadest currency menu among net banks. [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] anchors the **corporate API** lane explicitly. [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] anchors **mortgage origination** and **NEOBANK BaaS** simultaneously.

## Core matrix — 2025-2026 growth, fees, interest, embedded-finance partnerships

| Bank | 2025-2026 deposit growth trajectory | ATM fee structure | Domestic transfer fee | FX spread tier | Interest-rate tier (2026) | Embedded-finance partner ecosystem |
|---|---|---|---|---|---|---|
| [[banking/rakuten-bank|Rakuten Bank]] | High single-digit YoY; salary-account drive | Free 1-7x/month by Happy Program tier | ¥52-145 by tier | Mid (e.g. 25 sen USD) | Tiered (0.02-0.10% baseline; promotional higher) | Rakuten Card, Rakuten Pay, Rakuten Securities, NTT Docomo (cross-discount post-Rakuten Mobile partnership rounds) |
| [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] | High — mortgage book + NEOBANK accounts | Free 2-15x/month by Smart Program rank | Free 1-20x/month by rank | Mid-tight | Tiered with deposit rate boost for high-rank | JAL NEOBANK, T-NEOBANK, SBI Securities, Yamada NEOBANK, [[megabanks/sbi-hd|SBI HD]] cross-stack |
| [[banking/paypay-bank|PayPay Bank]] | Strong — PayPay wallet top-ups | Free at 7-Eleven ATMs (limited), fee at others | Free with conditions | Wider | Promotional rate offers; baseline 0.02% | PayPay wallet, PayPay Card, Yahoo / LINE Yahoo ID linkage |
| [[banking/au-jibun-bank|au Jibun Bank]] | Steady; KDDI ecosystem | Free in tiers | Free with conditions | Mid | Tiered with au PAY card linkage boost | au PAY ecosystem, KDDI MNO, [[megabanks/mufg|MUFG]] |
| [[banking/sony-bank|Sony Bank]] | Steady; FX + mortgage | Free 4x/month + paid above | ¥110-330 by channel | Tight (FX-anchor positioning) | Tiered including FX deposits | Sony Group entities, mortgage origination partners |
| [[banking/daiwa-next-bank|Daiwa Next Bank]] | Securities-sweep driven | Limited (deposit-only model) | Limited (transfers via Daiwa) | n/a | Structured deposit promotional tiers | [[securities-firms/daiwa-sg|Daiwa Securities]] |
| [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] | Steady SME / corporate | Corporate-focused fee schedule | Highly competitive for corporates | Tight on corporate FX | Corporate deposit rate tiers | freee, MoneyForward, accounting SaaS, payroll, payment platforms |
| [[banking/ui-bank|UI Bank]] | Slow growth — niche | Limited (app-only) | Standard tier | n/a | Promotional high-yield deposit launches | Tokyo Kiraboshi FG regional partners |
| [[banking/minna-bank-baas-model|Minna Bank]] | Mobile / BaaS growth | App-only — no own ATM | App-anchored | n/a | Standard | Recruit, Trust Bank GW, partner brand BaaS |
| [[banking/mercari-bank|Mercari Bank]] | Early ramp via Mercari user base | Current public materials do not yet support a ranked ATM-footprint comparison | Current public materials do not yet support a fee-tier comparison | n/a | Public product conditions still require confirmation at launch scale | Mercari Marketplace, Mercari Card linkage |
| [[regional-banks/japan-post-bank|Japan Post Bank]] | Slight outflow as customers diversify | Free at Japan Post ATMs nationwide | ¥146-330 | Limited retail FX | Standard low | Yucho Pay (own wallet), connection with regional banks |

The growth trajectory line is qualitative because deposit growth is highly seasonal and promotional. Use the bank's IR site for quarterly disclosure of deposit balance.

## Differentiation axes

### Deposit-base scale tier

The cohort splits visibly into deposit tiers:

- **Trillion-yen tier (¥5tn+)** — [[banking/rakuten-bank|Rakuten Bank]], [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]], [[banking/au-jibun-bank|au Jibun Bank]], [[banking/daiwa-next-bank|Daiwa Next Bank]]. These compete with regional banks on raw deposit franchise.
- **Mid tier (¥1-5tn)** — [[banking/sony-bank|Sony Bank]], [[banking/paypay-bank|PayPay Bank]], [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]]. Specialised by product (FX, wallet, corporate API respectively).
- **Sub-trillion tier (<¥1tn)** — [[banking/ui-bank|UI Bank]], [[banking/minna-bank-baas-model|Minna Bank]], [[banking/mercari-bank|Mercari Bank]]. Early-stage or niche.
- **Postal anchor (¥190tn)** — [[regional-banks/japan-post-bank|Japan Post Bank]] sits in its own category. Yucho Direct as digital channel is comparable in feature terms but the bank's deposit base is from the branch and ATM franchise.

### FX-product depth as differentiation

[[banking/sony-bank|Sony Bank]] occupies the FX-depth corner explicitly. [[banking/au-jibun-bank|au Jibun Bank]] is the closest peer with multi-currency FX deposits and FX margin trading. [[banking/rakuten-bank|Rakuten Bank]] and [[banking/paypay-bank|PayPay Bank]] offer narrower FX product menus. The non-FX banks ([[banking/daiwa-next-bank|Daiwa Next Bank]], [[banking/minna-bank-baas-model|Minna Bank]], [[banking/mercari-bank|Mercari Bank]]) cede the FX-customer segment.

### Mortgage origination as scale lever

Variable-rate mortgages remain the largest single asset class for net banks that have entered the mortgage market. [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] is the largest net-bank originator. [[banking/sony-bank|Sony Bank]] and [[banking/au-jibun-bank|au Jibun Bank]] follow. [[banking/rakuten-bank|Rakuten Bank]] originates via group structures. [[banking/paypay-bank|PayPay Bank]] and [[banking/daiwa-next-bank|Daiwa Next Bank]] do not anchor mortgages.

### Bank-API publishing posture

Three publishing tiers are observable:

- **Extensive corporate API** — [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] is the anchor; explicit corporate-treasury and SaaS-connector API focus.
- **Extensive BaaS / white-label** — [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] (NEOBANK) and [[banking/minna-bank-baas-model|Minna Bank]] BaaS. These let partner brands publish their own bank-like UX while the bank holds the licence.
- **Standard retail bank API** — most others. Bank API is published for the [[banking/japan-baas-operating-models|electronic payment agency / FA]] regime but the bank does not pursue white-label distribution.

### Embedded-finance partner ecosystem

The embedded-finance partner column reveals which net banks are competing on **distribution surface** versus **direct customer-acquisition**. [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] partners with JAL, Yamada, T (CCC), and others through NEOBANK; [[banking/minna-bank-baas-model|Minna Bank]] partners with Recruit and others; [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] integrates with freee, MoneyForward, payroll SaaS. The ecosystem retail banks ([[banking/rakuten-bank|Rakuten Bank]], [[banking/paypay-bank|PayPay Bank]], [[banking/au-jibun-bank|au Jibun Bank]]) lean on their own group ecosystem rather than third-party partner brands.

## Cluster summary — competitive map by lever

A useful cluster reading:

- **FX + asset-formation cluster** — [[banking/sony-bank|Sony Bank]], [[banking/daiwa-next-bank|Daiwa Next Bank]], [[banking/au-jibun-bank|au Jibun Bank]].
- **Mortgage origination cluster** — [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]], [[banking/sony-bank|Sony Bank]], [[banking/au-jibun-bank|au Jibun Bank]], [[banking/rakuten-bank|Rakuten Bank]].
- **Ecosystem-wallet cluster** — [[banking/rakuten-bank|Rakuten Bank]], [[banking/paypay-bank|PayPay Bank]], [[banking/au-jibun-bank|au Jibun Bank]].
- **BaaS / partner cluster** — [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] NEOBANK, [[banking/minna-bank-baas-model|Minna Bank]].
- **Corporate / SME API cluster** — [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]].
- **Regional digital cluster** — [[banking/ui-bank|UI Bank]], [[regional-banks/01-bank|01 Bank]] (peer reference).
- **Fintech-issued cluster** — [[banking/mercari-bank|Mercari Bank]].
- **Postal anchor** — [[regional-banks/japan-post-bank|Japan Post Bank]].

## Source caveats

1. **Deposit-base figures** are public-source approximations from bank IR pages, group annual reports, and FSA aggregate. Quarterly disclosure should be used for exact comparisons.
2. **Account-base figures** mix bank-only retail customers with BaaS-partner accounts. The [[banking/japan-net-bank-competition-map|competition map]] discusses why BaaS accounts may overstate primary-bank conversion.
3. **Fee schedules** change frequently with promotional schemes. Use each bank's fee schedule page for current values.
4. **FX spreads** vary by currency, channel, and time of day. Use each bank's FX page for live rates.
5. **Interest-rate tiers** depend on BOJ policy. The 2026 baseline assumes positive short-rate territory; promotional rates above baseline are common.
6. **Mortgage origination volume** is disclosed annually by some banks; quarterly by others. Use each bank's IR page for verified flow data.

## Research checklist

When extending this matrix:

1. Pull the bank IR page or quarterly disclosure for deposit balance and account count.
2. Cross-check via FSA Bank Information Disclosure aggregate.
3. Read the bank's API developer portal for bank-API depth and partner list.
4. Use the [[banking/japan-baas-operating-models|BaaS operating models]] page to classify the bank's BaaS posture.
5. Use [[banking/quick-deposit-four-methods|quick deposit four methods]] for payment-channel context.
6. Use [[banking/japan-banking-license-tier-comparison-matrix|banking license tier comparison]] to confirm licence category.

## Related

- [[banking/INDEX]]
- [[banking/japan-net-bank-competition-map]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[banking/japan-baas-operating-models]]
- [[banking/post-megabank-positioning]]
- [[banking/sony-bank]]
- [[banking/ui-bank]]
- [[banking/gmo-aozora-net-bank]]
- [[banking/daiwa-next-bank]]
- [[banking/rakuten-bank]]
- [[banking/paypay-bank]]
- [[banking/au-jibun-bank]]
- [[banking/minna-bank-baas-model]]
- [[banking/mercari-bank]]
- [[banking/mercari-bank-license-stack]]
- [[banking/sumishin-sbi-net-bank]]
- [[banking/regional-bank-api-digital-partnership-route]]
- [[banking/quick-deposit-four-methods]]
- [[business/rakuten-group-mobile-finance-bundling-case]]
- [[business/sony-fg-partial-spinoff-case]]
- [[business/gmo-internet-group]]
- [[regional-banks/japan-post-bank]]
- [[megabanks/sbi-hd]]
- [[megabanks/mufg]]
- [[securities-firms/daiwa-sg]]
- [[regional-banks/01-bank]]
- [[INDEX|FinWiki index]]

## Sources

- FSA licensed bank list and bank disclosure aggregate.
- Sony Bank corporate profile and product disclosure.
- UI Bank corporate site and product page.
- GMO Aozora Net Bank company outline and corporate API documentation.
- Daiwa Next Bank corporate disclosure and securities-sweep documentation.
- Rakuten Bank press releases and group disclosure.
- PayPay Bank company information and product pages.
- Sumishin SBI Net Bank corporate profile and NEOBANK partner disclosure.
- au Jibun Bank performance disclosure.
- Minna Bank corporate site and BaaS partner page.
- Mercari Bank launch disclosure.
- Japan Post Bank IR.
