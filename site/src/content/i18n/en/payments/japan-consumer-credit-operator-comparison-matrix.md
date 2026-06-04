---
source: payments/japan-consumer-credit-operator-comparison-matrix
source_hash: c993d4c4f5ab8842
lang: en
status: machine
fidelity: ok
title: "Japan consumer-credit operator comparison matrix"
translated_at: 2026-06-01T03:31:12.293Z
---

# Japan consumer-credit operator comparison matrix

## TL;DR

"Consumer credit" in Japan is not one industry: it is at least **nine operator categories** that look similar at checkout but sit on different licenses, different regulators, different lending caps, different interest-rate ceilings, and different consumer-protection regimes. A reader who flattens card loans, credit-sales companies, consumer finance, BNPL, auto-captive finance, housing loans, education loans, microcredit, and PSP-embedded credit into one bucket will misread merger pressure, regulatory exposure, ABS pipeline, and bank adjacency. This page is the side-by-side comparison surface that the rest of the [[payments/INDEX|payments index]] points to when the question is **which consumer-credit category an operator actually belongs to** before any company-level analysis.

## Wiki route

This sits under [[payments/INDEX|payments index]] as the cross-category consumer-credit reference. Read it with [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]] for the BNPL / 信販 line, [[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]] for the card-side role separation, [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] for the cross-scheme comparison this entry deliberately complements, [[payments/credit-purchase-card-operators-japan-index|credit-purchase / card operator registry]] for the METI registry row-level source, [[financial-licenses/payment-license-stack|Japan payment license stack]] for the regulatory category mapping, and [[policy-finance/japan-housing-finance-agency|Japan Housing Finance Agency]] for the policy-finance side of housing-loan adjacency. Entity anchors for examples are [[consumer-finance/acom|ACOM]], [[consumer-finance/aiful|AIFUL]], [[consumer-finance/smbc-consumer-finance|SMBC Consumer Finance]], [[card-issuers/aplus|APLUS]], [[card-issuers/jaccs|JACCS]], and [[card-issuers/orico|Orico]].

## Nine operator categories

The reason FinWiki keeps nine categories (rather than the conventional three of "card / shoko-loan / shinpan") is that BNPL, auto-captive, housing-loan adjacent, education-loan, microcredit, and PSP-embedded credit have **different license routes, different regulators, and different consumer-protection regimes** even when the consumer-visible product looks like a single "credit" experience.

| # | Category | Japanese | Primary statute | Primary regulator |
|---|---|---|---|---|
| 1  | Card issuer | Credit card company/comprehensive credit purchase intermediary | Installment Sales Act | METI (Ministry of Economy, Trade and Industry) |
| 2  | Consumer finance / shoko-loan | Consumer finance/money lender | Money-Lending Business Act | FSA (Financial Services Agency) |
| 3  | Installment credit / shinpan | Credit sales company/individual credit purchase broker | Installment Sales Act | METI (Ministry of Economy, Trade and Industry) |
| 4  | BNPL pure-play | BNPL / Postpaid | Installment Sales Act (selective; exemption thresholds apply) | METI primarily; FSA where wallet/funds-transfer overlap |
| 5  | Auto finance / auto-captive | Auto loan/auto credit | Installment Sales Act (individual / inclusive) + Money-Lending Act where unsecured | METI primarily; FSA for any money lending portion |
| 6  | Housing-loan adjacent (JHF route) | Direct home loan / flat 35  | JHF Act (Independent Administrative Person Housing Financial Support Agency Act) + Banking Act | MLIT (Ministry of Land, Infrastructure, Transport and Tourism) + MOF + bank-side FSA |
| 7  | Education loan | education loan | Banking Act (private) + JFC Act (public) | FSA (private) + MOF (public/JFC) |
| 8  | Microcredit | micro credit | Money-Lending Act (often) or social-finance route | FSA where moneylending; MHLW for some social-credit channels |
| 9  | PSP-adjacent credit (embedded EC credit) | PSP built-in deferred payment / EC embedded credit | Installment Sales Act + Funds-Transfer/Prepaid where wallet-linked | METI + FSA (boundary case) |

Each row is an independent license stack. An operator that holds more than one is **not** automatically a holding company — it is more often a multi-licensed sales-finance / consumer-credit operator (e.g., [[card-issuers/orico|Orico]] holds comprehensive credit purchase intermediation, individual credit purchase intermediation, and money lending simultaneously; [[consumer-finance/aiful|AIFUL]] holds money lending + comprehensive credit purchase intermediation through Life Card; [[card-issuers/jaccs|JACCS]] holds all three plus Comprehensive Credit Purchase Mediation + Individual Credit Purchase Mediation).

## Comparison matrix — full

| Dimension | Card issuer | Consumer finance | Installment credit (shinpan) | BNPL pure-play | Auto-captive | Housing-loan (JHF) | Education loan | Microcredit | PSP-adjacent credit |
|---|---|---|---|---|---|---|---|---|---|
| **License** | Installment Sales Act (comprehensive credit purchase mediation) | Money-Lending Business Act | Installment Sales Act (individual credit purchase mediation + often inclusive) | Installment Sales Act (Type II ≤ 2 mo + 個別 exemption thresholds) | Installment Sales Act (individual / including mostly) + Money-Lending Act sometimes | JHF Act + Banking Act (private side) | Banking Act + JFC Act (public side) | Money-Lending Act usually | Installment Sales Act + Payment Services Act (mixed) |
| **Regulator** | METI | FSA | METI | METI (+ FSA where wallet-linked) | METI primarily | MLIT + MOF + bank-side FSA | FSA + MOF | FSA primarily | METI + FSA boundary |
| **Registration registry** | METI Registered Comprehensive Credit Purchase Mediator list (241 as of 2026-04 month-end) | FSA money lender registration list | METI Registered Individual Credit Purchase Mediator List (138 as of 2026-04 month-end) | Mixed — METI Type II / 個別 exemption + FSA Type II / III funds-transfer | METI individual/including lists | JHF participating financial institution list (private) + JHF direct | Bank product disclosure + JFC product disclosure | FSA Money Lender Registration + JICC / CIC | METI Registration + FSA Funds Transfer Service + Third Party Advance Payment |
| **Total amount limit (lending cap)** | Yes for cash-advance portion; revolving shopping uses different rule | Yes — 1/3 of annual income hard cap | No (Installment Sales Act has estimated payable amount survey instead of total amount regulation) | Effectively no for ≤ 2 mo deferred-payment; full Individual credit purchase mediation rules where registered | No (Installment Sales Act path) | No — secured + policy-finance carve-out | No for 民間 (bank product); no for JFC public loan | Yes (1/3 cap applies) | Depends on which license actually books the receivable |
| **interest rate cap** | Interest Limitation Act 15-20% (cash-advance); Installment Sales Act Effective annual rate for shopping | Interest Limitation Law 15-20% + Capital Contribution Law 20% criminal cap | Interest Limitation Act + Installment Sales Act Actual annual rate disclosure | Generally 0% to consumer (merchant pays MDR-equivalent); late-fee model | Installment Sales Act Effective annual rate | Private housing-loan: bank market rate; flat 35 fixed | Bank loan: market rate; JFC: low fixed | Interest restriction law + investment law 20% | Mixed — depends on booking license |
| **KYC / AML obligations** | Act on Prevention of Transfer of Criminal Proceeds (Criminal Proceeds Act) full obligation | Criminal Proceeds Law + Money Lending Business Law KYC strict | Criminal Proceeds Act + Installment Sales Act Member store investigation | Criminal Proceeds Law light for small-ticket; full where over threshold | Criminal collection law + dealership KYC | Criminal collection law + bank-side full KYC | Criminal collection law + bank-side full KYC | Criminal Collection Law + Gold Loan Industry KYC | Criminal Collection Law + wallet / money movement industry KYC where applicable |
| **Disclosure obligation** | Installment Sales Act annual effective rate, merchant performance, security guideline (J-CSC) | Money Lending Business Act Article 13 document delivery and Article 17 contract document | Installment Sales Act annual effective rate, merchant indication, individual contract | METI pay-later FAQ guidance + Consumer Contract Act | Installment Sales Act annual effective rate + dealership disclosure | Important matters statement + bank-side disclosure | Bank-side disclosure + JFC product disclosure | Money Lending Business Act Articles 13 / 17 | METI + Consumer Contract Act + wallet T&C |
| **Default-rate disclosure** | Issuer IR (annual loan loss rate by segment) | There are reports + JFSA aggregate stats | Shinpan IR (segment-level credit cost rate) | Limited — Paidy operator IR if listed (e.g., Paidy via PayPal disclosure) | OEM finance arm IR (e.g., Toyota Finance disclosure embedded in OEM consolidated report) | JHF annual report + bank-side loan failure rate | Bank IR + JFC annual report | Money lending IR if listed; otherwise JFSA aggregate | Limited; mostly inside parent PSP IR |
| **Liability / bad-debt provisioning** | IFRS 9 / J-GAAP allowance + Installment Sales Act Member store risk burden | IFRS 9 / J-GAAP Provision, Provision for overpayments legacy | IFRS 9 / J-GAAP pawning money + franchise store claims | Merchant + operator co-share typically | OEM-guaranteed or dealer-recourse model common | Bank Reserve + JHF Credit Enhancement for Flat 35 buy-back | Bank reserve + JFC fiscal backing | Money lending business Reserve + Overpayment risk lingering | Mixed by booking license |
| **Reporting registry route** | METI registered comprehensive credit purchase intermediary company PDF list | FSA moneylender registration list (central + prefecture) | METI registered individual credit purchase intermediary company PDF list | METI registration (where applicable) + deferred payment administrative disposition status page | METI individual/including lists | List of JHF handling financial institutions + JHF Direct | Bank loan products in 全銀協 disclosure; JFC product page | FSA money lender registration list | METI + FSA cross-registry |
| **Recent regulatory pressure** | Revised Installment Sales Law (2018, 2020, 2024 BNPL clarification); J-CSC guideline 6.0/6.1 (EMV 3-DS mandatory 2025-03 for EC) | Amended Money Lending Business Law (2010-06 full enforcement: 20% cap + 1/3  amount regulation); Overpayment wind-down | Revised Installment Sales Law (2018  Member Store Investigation Strengthening); 2020 amendment for Certified Comprehensive/Small Amount Comprehensive | 2024 BNPL clarification under Installment Sales Act amendment; CAA / Consumer Affairs Agency warnings on cash-conversion abuse | EV / KINTO subscription transition pressure; OEM captive consolidation discussion | Flat 35  abuse problem (2019-) + JHF investor base shift | None major; education-loan demand pressure as tuition rises | Limited national framework; social financial discussions ongoing | METI + FSA boundary clarification on embedded checkout credit |
| **Securitization / ABS pipeline** | Heavy — credit-card receivables ABS (V-RACE, S-RACE, Rakuten Card ABS routine issuance) | Heavy — consumer-loan ABS routine for ACOM / SMBCCF / AIFUL | Heavy — auto-loan ABS (auto / shopping-credit ABS routine) | Emerging — Paidy receivables securitization route under PayPal | Heavy — Toyota Finance / Honda Finance / Nissan Financial auto ABS routine | Heavy — Flat 35 MBS routine issuance by JHF (JHF MBS, Japan's largest MBS issuer) | Limited — bank-loan portfolio rarely securitized for education-only pool | Minimal | Minimal |
| **Bank-adjacency** | Megabank-FG aligned: [[card-issuers/smbc-card\|SMBC Card]] (SMFG), [[card-issuers/mufg-nicos\|MUFG NICOS]] (MUFG), [[card-issuers/jcb\|JCB]] (multi-bank), [[card-issuers/rakuten-card\|Rakuten Card]] (Rakuten FG), [[card-issuers/paypay-card\|PayPay Card]] (PayPay FG) | Mixed: [[consumer-finance/smbc-consumer-finance\|SMBC Consumer Finance / Promise]] (SMFG 100%), [[consumer-finance/acom\|ACOM]] (MUFG 39.6% equity-method), [[consumer-finance/aiful\|AIFUL]] (independent) | Bank-FG aligned: [[card-issuers/jaccs\|JACCS]] (MUFG equity-method), [[card-issuers/orico\|Orico]] (Mizuho + Itochu), [[card-issuers/aplus\|APLUS]] (SBI Shinsei), Credit Saison (independent / Mizuho-adjacent) | Mostly non-bank: Paidy (PayPal), Atone (Net Protections), NP Postpay (Net Protections) — but bank-FG card issuers also extend BNPL-like products | OEM-captive: Toyota Finance (Toyota), Honda Finance, Nissan Financial Services — non-bank captive, sometimes bank-partnered | Bank-fronted (private): all megabanks + regional banks; JHF is policy-finance non-bank | Bank-fronted private education loan; JFC is policy-finance non-bank | Often non-bank social-finance + money lending small ops | Bank-FG aligned if parent PSP is bank-adjacent |
| **Card brand acceptance dependency** | Direct — issuer carries Visa / Mastercard / JCB / Amex / Diners brand | None (cash loan, not card-brand-routed) | Mixed — many shinpan also issue branded cards (Orico Card, JACCS Card) | Generally none at point-of-checkout (operator-direct), though some BNPL extends a virtual brand-card | None at the loan-product level | None at the loan-product level | None | None | Depends — some PSP credit routes through brand card backend |

### 1. Card issuer (credit card company/comprehensive credit purchase intermediary)

Card issuers are **Comprehensive Credit Purchase Intermediaries** under the Installment Sales Act, registered with METI (241 registrations as of 2026-04 month-end per the METI Registered Comprehensive Credit Purchase Intermediaries list). The card issuer is the entity that screens cardholders, sets credit limits, books the receivable, and runs fraud monitoring. Bank-FG anchors: [[card-issuers/smbc-card|SMBC Card]] (SMFG), [[card-issuers/mufg-nicos|MUFG NICOS]] (MUFG), [[card-issuers/jcb|JCB]] (multi-bank consortium). Non-bank-FG anchors: [[card-issuers/rakuten-card|Rakuten Card]] (Rakuten FG), [[card-issuers/paypay-card|PayPay Card]] (PayPay FG), [[card-issuers/aeon-financial-service|AEON Financial Service]] (AEON retail-FG).

Cash advances inside a card product cross into the money-lending-business regime: that portion is subject to total-volume regulation (1/3 of income cap) and the Interest Rate Restriction Act's 20% interest cap, while the **shopping** portion is governed by the Installment Sales Act's expected-payment-capacity investigation rather than total-volume regulation. This dual-regime structure is unique to card issuers.

### 2. Consumer finance / shoko-loan (consumer finance / money lender)

Consumer finance operators are 貸金業者 under the Money-Lending Business Act (貸金業法), registered with FSA via 中央 (財務局) or 都道府県 routes. The current "3 大消費者金融" are [[consumer-finance/acom|ACOM]] (MUFG equity-method 39.6%), [[consumer-finance/smbc-consumer-finance|SMBC Consumer Finance / Promise]] (SMFG 100% subsidiary), and [[consumer-finance/aiful|AIFUL]] (independent, founder-family controlled). After 武富士 collapsed via 会社更生 in 2010, the segment consolidated around these three.

The defining regulatory event is the **改正貸金業法** that fully enforced in 2010-06: 利息制限法 cap of 20% (15% / 18% / 20% tiered by principal size) replaced the old 出資法 29.2% gray-zone, and 総量規制 (1/3 of annual income hard cap) became binding. The 過払金 (overcharged-interest refund) wave that followed is responsible for the [[consumer-finance/aiful|AIFUL]] 事業再生 ADR (2009-09), the MUFG TOB of [[consumer-finance/acom|ACOM]] (2008-10), and the SMFG full-subsidiary-isation of Promise.

The bank-side workaround is **Bank Cardloan** — bank-issued products are governed by the Banking Act and historically did not face lending. ACOM, Promise, AIFUL all run a bank guarantee sideline that books revenue from guaranteeing bank-cardloan exposure.

### 3. Installment credit / shinpan (credit sales company / individual credit purchase broker)

Shinpan operators are **Individual credit purchase intermediaries** under the Installment Sales Act (138 registrations as of 2026-04 month-end per METI registered individual credit purchase intermediaries list). The distinguishing feature is that the loan is tied to a specific purchase, often via a merchant agreement — auto-dealership Loans, reform loans, education loans (private side), musical instruments / home appliances / medical / housing equipment. Anchors: [[card-issuers/orico|Orico]] (Mizuho + Itochu, auto-loan #1), [[card-issuers/jaccs|JACCS]] (MUFG equity-method, auto/education/reform 3 lanes), [[card-issuers/aplus|APLUS]] (SBI Shinsei), Credit Saison (independent / Mizuho-adjacent, card-heavy).

Shinpan operators typically hold **multiple licenses** — they almost always combine individual credit purchase intermediation with comprehensive credit purchase intermediation (for their issued cards), money-lending business registration (for card loans), bank guarantees (for bank-cardloan guarantees), and often payment-collection agency services (for B2B utility charges / recurring billing collection). The 2018 amended Installment Sales Act strengthened merchant-investigation obligations, which raised onboarding cost for marginal merchant relationships.

### 4. BNPL pure-play (BNPL / Postpaid)

BNPL is the **most regulatory-ambiguous** category. Under the Installment Sales Act, deferred payment of **≤ 2 months and single-payment** is generally not comprehensive credit purchase intermediation, and individual deferred payment under certain merchant-fronted models can avoid individual credit purchase intermediation registration through merchant-display routes. The 2020 amended Installment Sales Act (effective 2021-04) added certified comprehensive credit purchase intermediary and small-amount comprehensive credit purchase intermediary frameworks explicitly to bring some BNPL operators under a lighter version of the comprehensive regime; the 2024 BNPL clarification round continued tightening.

Anchor: [[payment-firms/paidy|Paidy]] (acquired by PayPal 2021-09 for ~ USD 2.7 bn), Atone / NP Postpaid (Net Protections). The [[payments/japan-bnpl-credit-purchase-boundary|BNPL boundary]] page walks through the per-product classification test. The Consumer Affairs Agency (CAA) maintains an active warning channel on **cash-conversion abuse** of BNPL (Pay Later) and on UX patterns that make deferred-payment feel cash-like — see CAA's payment-trouble caution page.

### 5. Auto finance / auto-captive (auto loan / auto credit)

Auto-finance has two structural shapes: (a) shinpan-fronted auto-loan (e.g., [[card-issuers/orico|Orico]] is the domestic #1 in auto-loan, [[card-issuers/jaccs|JACCS]] is #2-3) booked through dealership 加盟店 networks under the Installment Sales Act, and (b) **OEM auto-captive** — Toyota Finance (Toyota), Honda Finance, Nissan Financial Services, Mitsubishi UFJ Lease & Finance (now Mitsubishi HC Capital), etc. — that exists primarily to underwrite the parent OEM's vehicle sales.

OEM-captive booking is typically Installment Sales Act 個別 + 包括 (for the OEM-branded card if any) + 貸金業 in some cases. The OEM provides explicit or implicit credit support (residual-value guarantee for KINTO-style subscription), which reduces the captive's bad-debt provisioning need relative to a standalone shinpan auto-loan book. The auto-ABS market is the largest non-MBS Japanese consumer-loan ABS segment — Toyota Finance is the routine benchmark issuer. EV / KINTO subscription / car-sharing trends are the structural pressure on the dealership-credit channel that both shinpan-fronted and captive-fronted auto-loan share.

### 6. Housing-loan adjacent (Direct housing loan / Flat 35)

Housing-loan is mostly the bank-FG world under the Banking Act, but the **policy-finance overlay** matters: [[policy-finance/japan-housing-finance-agency|Japan Housing Finance Agency (JHF / Japan Housing Finance Agency)]] runs **Flat 35**: long-term fixed-rate housing loans that originating banks sell to JHF, which packages them as JHF MBS. JHF is Japan's largest MBS issuer.

Regulator: MLIT is the primary supervisor for JHF on the housing-policy side; MOF supervises the JHF Act financial side; the originating bank side is FSA-supervised under the Banking Act. The Flat 35 misuse issue (from 2019), in which investor-rental-property purchases were misrepresented as owner-occupied, triggered structural tightening of JHF's participating-financial-institution due-diligence requirements. JHF is **not** an Installment Sales Act or Money-Lending Act operator; it is an incorporated administrative agency policy-finance institution and sits outside the METI / FSA consumer-credit registries.

### 7. Education loan

Education loan splits along the **public / private** line. The private side is offered by banks under the Banking Act (no Installment Sales Act registration, since it is a private loan), often packaged as an unsecured education loan product. The public side is operated by **Japan Finance Corporation (JFC)** under the JFC Act — JFC's education loan is the primary public education loan, at fixed low rates relative to private bank products. JFC is supervised by MOF (Ministry of Finance).

Education-loan books are not routinely securitized as standalone education-loan ABS — bank-side exposure sits inside the broader unsecured-consumer-loan book. Shinpan operators (e.g., [[card-issuers/jaccs|JACCS]]) also offer educational-institution channels under the Installment Sales Act individual route, which is the third routing path for education credit alongside bank-private and JFC-public.

### 8. Microcredit

Japan does not have a developed national microcredit framework comparable to Bangladesh / India microfinance. Where microcredit-style small-ticket consumer credit exists in Japan, it is usually booked under the **Money-Lending Act** by small 貸金業者, which means it inherits the 利息制限法 20% cap, 出資法 20% criminal cap, 総量規制 1/3 cap, and 犯収法 KYC obligations of the full 貸金業 regime.

Social-finance and NPO-routed small-ticket lending channels exist (e.g., prefectural social welfare councils with MHLW funding) but those are not money lending — they are a policy-welfare channel. Sub-segmenting "microcredit" in Japan therefore requires checking whether the operator is money lending (FSA-supervised) or social welfare (MHLW-supervised), since the consumer-protection regime, registration route, and disclosure obligations differ entirely.

### 9. PSP-adjacent credit (e-commerce embedded credit)

PSP-adjacent credit is the **boundary case** for the comparison matrix. When a PSP (payment service provider) or wallet operator extends a checkout-time credit product, the receivable can be booked under (a) Installment Sales Act if the operator holds registration, (b) Payment Services Act if structured as a wallet-balance advance, (c) Payment Services Act if structured as prepaid stored-value extended, or (d) Money-Lending Act in rare structured cases. The same checkout UX can therefore translate to different licenses depending on which legal entity actually books the receivable.

This category exists because of operators like Mercari/Merpay (where the Pay Later feature crosses funds-transfer + PayPay lines), PayPay (where Pay Later uses [[card-issuers/paypay-card|PayPay Card]] as the credit booking), and platform-side credit entity extensions from EC marketplaces. The [[payments/japan-bnpl-credit-purchase-boundary|BNPL boundary]] page and the [[financial-licenses/payment-license-stack|payment license stack]] page give the per-product classification test.

## Credit-information bureau footprint

A consumer-credit operator's reporting/inquiry obligation depends on its license category and bureau membership. There are three major bureaus:

| Bureau | Membership base | Typical operator coverage |
|---|---|---|
| **JICC** (Japan Credit Information Agency) | Mostly Money lending industry + shinpan | Consumer finance / shoko-loan, shinpan, some BNPL |
| **CIC** (Credit Information Center) | Mostly Installment Sales Act registrants | Card issuers, shinpan, auto-finance, individual credit purchase intermediaries |
| **National Bank Personal Credit Information Center (KSC)** | Bank system | Banks, credit bank, credit combination — housing loan + education loan + bank card-loan |

A major-three consumer-finance operator is typically a member of JICC + CIC + KSC, since cross-bureau checking is the basis of total-volume-regulation verification. A pure BNPL operator may only be a JICC or CIC member depending on its license stack. JHF (Flat 35) reports through the bank-originator side to KSC.

## Bank-adjacency map (consolidated)

Reading category 1, 2, 3, 4, 5, 6, 7 together, the bank-FG adjacency picture for Japanese consumer credit is:

| FG | Card issuer | Consumer finance | Shinpan | Notes |
|---|---|---|---|---|
| [[megabanks/mufg|MUFG]] | [[card-issuers/mufg-nicos|MUFG NICOS]] (100%) | [[consumer-finance/acom|ACOM]] (39.6% equity-method) | [[card-issuers/jaccs|JACCS]] (equity-method) | 3-line consumer credit footprint inside one FG |
| [[megabanks/smfg|SMFG]] | [[card-issuers/smbc-card|SMBC Card]] (100%) | [[consumer-finance/smbc-consumer-finance|SMBC Consumer Finance / Promise]] (100%) | (no major shinpan in-house; partners with Credit Saison and others) | 2-line, with shinpan as partnership rather than ownership |
| [[megabanks/mizuho-fg|Mizuho FG]] | (UC Card legacy; partnership) | (no major standalone) | [[card-issuers/orico|Orico]] (equity-method + Itochu) | Shinpan-heavy, card-light |
| [[regional-banks/sbi-shinsei-bank|SBI Shinsei]] | (Shinsei Financial card products) | Shinsei Financial / Lake ALSA (formerly GE) | [[card-issuers/aplus|APLUS]] (group company) | Heavy consumer-credit FG via legacy GE / Lake / APLUS book |
| Independent / non-bank-FG | [[card-issuers/rakuten-card|Rakuten Card]], [[card-issuers/paypay-card|PayPay Card]], [[card-issuers/aeon-financial-service|AEON Financial Service]] | [[consumer-finance/aiful|AIFUL]] (founder-family) | Credit Saison (independent), [[card-issuers/aplus|APLUS]] (SBI-side) | Where bank-FG ownership is absent or partial |

The MUFG 3-line footprint (NICOS card + ACOM consumer finance + JACCS shinpan) is the single most concentrated bank-FG position in Japanese consumer credit. Whether MUFG eventually consolidates that into a unified consumer-credit subsidiary, or keeps them as separate listed/equity-method entities, is a long-running structural question.

## Recent regulatory pressure

| Date | Source | What changed |
|---|---|---|
| 2006-01-13 | Supreme Court | Gray zone interest rate effectively ruling voided the Money Lending Business Act provision, triggering overpayment refund wave |
| 2006-12  | National Diet | Amended Money Lending Business Act passed (20% interest cap + 1/3 total-volume cap) |
| 2008-04  | FSA | Business improvement order against [[consumer-finance/aiful|AIFUL]] (collection-practice issue), entire-business suspension order |
| 2008-10-22 | MUFG TOB | MUFG acquired ~ 40% of [[consumer-finance/acom|ACOM]], equity-method consolidation |
| 2010-06  | FSA | Amended Money Lending Business Act fully enforced (20% cap + 1/3 total-volume cap, fully enforced) |
| 2010-09  | Takefuji | Takefuji filed corporate reorganization, industry consolidates to 3  Consumer Finance |
| 2018  | METI | Revised Installment Sales Act — strengthened merchant investigation obligation, card-data security stack |
| 2020  revised | METI | Revised Installment Sales Act — Certified Comprehensive Credit Purchase Intermediary Operator + Small Amount Comprehensive Credit Purchase Intermediary Operator framework for BNPL |
| 2021-04  | METI | 2020  Revised Installment Sales Law enforcement |
| 2024  | METI / CAA | BNPL clarification round, pay-later operator administrative-action page (atobaraigyouseisyobunnojoukyou.html) |
| 2025-03  | METI / J-Credit Association | EMV 3-DS mandatory for EC card payments under J-CSC guideline 6.0 (see [[payments/japan-card-security-authentication-controls|card security and authentication controls]]) |
| Ongoing | CAA (Consumer Affairs Agency) | Active warnings on cash-conversion abuse of BNPL and on UX patterns that make deferred-payment feel cash-like |

The 2010-06  Amended Money Lending Business Law enforcement is the **single largest structural event** in modern Japanese consumer credit — it consolidated consumer finance from a 4-strong + many-small landscape to the current 3 大 (ACOM, Promise, AIFUL) + bank-cardloan partnerships, and the refund wave consumed the better part of a decade of operator equity.

## Securitization / ABS pipeline summary

| Category | Routine ABS / MBS pipeline | Comment |
|---|---|---|
| Card issuer | Heavy — credit-card receivables ABS (V-RACE, S-RACE, Rakuten Card ABS) | Bank-FG card issuers issue routinely; non-bank-FG card issuers via SPC |
| Consumer finance | Heavy — consumer-loan ABS routine for ACOM / SMBCCF / AIFUL | Post-overpayment wave, ABS is a stable secondary funding line |
| Shinpan (auto-shopping credit) | Heavy — auto-loan + shopping-credit ABS | Orico / JACCS / APLUS routine pipelines |
| BNPL | Emerging — Paidy receivables securitization route under PayPal ownership | Still small but pipeline is opening |
| Auto-captive (OEM) | Heavy — Toyota Finance / Honda Finance / Nissan Financial auto ABS routine | Largest non-MBS consumer-loan ABS segment |
| Housing (JHF) | Heavy — Flat 35  mechanism MBS routine | JHF is Japan's largest MBS issuer |
| Education loan | Minimal as standalone pool | Bank-side aggregate, not standalone |
| Microcredit | Minimal | Too small for ABS economics |
| PSP-adjacent | Minimal | Aggregated into parent's other ABS pipeline if any |

The ABS dimension matters for understanding **how each operator funds itself** — heavy-ABS categories can sustain rapid book growth without proportional balance-sheet capital, while light-ABS categories (microcredit, education-loan, PSP-adjacent) are growth-constrained by parent-balance-sheet capacity. This is one reason BNPL operators that achieve recurring securitization (Paidy under PayPal) gain real capital efficiency vs BNPL operators that fund out of equity.

## Related

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

## Sources

- METI Installment Sales Act portal: https://www.meti.go.jp/policy/economy/consumer/credit/
- METI credit-transaction index: https://www.meti.go.jp/policy/economy/consumer/credit/index.html
- METI registered operator lists portal: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
- METI Registered Comprehensive Credit Purchase Mediator PDF: https://www.meti.go.jp/policy/economy/consumer/credit/tourokuhoukatsuichiran.pdf
- METI Registered Individual Credit Purchase Mediator PDF: https://www.meti.go.jp/policy/economy/consumer/credit/tourokukobetsuichiran.pdf
- METI credit card number handling agreement contracted business operator PDF: https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
- METI Installment Sales Law after-payment FAQ: https://www.meti.go.jp/policy/economy/consumer/credit/kappuhanbaihoatobaraibunyanogaiyofaq.html
- METI Revised Installment Sales Law page: https://www.meti.go.jp/policy/economy/consumer/credit/11kappuhanbaihou.html
- FSA Money-Lending Act portal: https://www.fsa.go.jp/menkyo/kashikin/
- FSA licensed / registered operators portal: https://www.fsa.go.jp/menkyo/menkyo.html
- FSA prepaid policy portal: https://www.fsa.go.jp/policy/prepaid/
- JICC (Japan Credit Information Agency): https://www.jicc.co.jp/
- CIC (Credit Information Center): https://www.cic.co.jp/
- Japan Credit Association — Installment Sales Act consumer page: https://www.j-credit.or.jp/customer/sales_law/
- JHF (Housing Finance Support Organization): https://www.jhf.go.jp/
- JFC (Japan Finance Corporation): https://www.jfc.go.jp/
- CAA (Consumer Affairs Agency) payment-trouble caution: https://www.caa.go.jp/policies/policy/consumer_policy/caution/internet/trouble/payment.html
- Each operator's IR / corporate disclosure (公開分): [[consumer-finance/acom|ACOM]] (TSE STD 8572), [[consumer-finance/aiful|AIFUL]] (TSE PRIME 8515), [[card-issuers/jaccs|JACCS]] (TSE PRIME 8584), [[card-issuers/orico|Orico]] (TSE PRIME 8585), [[card-issuers/aplus|APLUS]] (SBI Group corporate site), [[consumer-finance/smbc-consumer-finance|SMBC Consumer Finance / Promise]] (SMFG consolidated)
