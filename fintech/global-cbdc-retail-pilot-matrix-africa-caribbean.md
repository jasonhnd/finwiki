---
title: Global retail CBDC pilot comparison matrix — Africa, Caribbean, Asia, UK (eNaira / Sand Dollar / JAM-DEX / DCash / e-CNY / Bakong / digital pound)
aliases:
  - global-cbdc-retail-pilot-matrix-africa-caribbean
  - retail CBDC comparison matrix
  - small-economy CBDC matrix
  - eNaira vs Sand Dollar vs JAM-DEX
  - DCash discontinuation matrix
  - retail CBDC seven-pole comparison
domain: fintech
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [fintech, cbdc, retail-cbdc, matrix, comparison, africa, caribbean, asia, uk, enaira, sand-dollar, jam-dex, dcash, e-cny, bakong, digital-pound, adoption]
status: active
sources:
  - https://www.cbn.gov.ng/Out/2021/CCD/eNaira%20Design%20Paper.pdf
  - https://www.centralbankbahamas.com/payments-system/the-sand-dollar/sand-dollar-faqs
  - https://boj.org.jm/core-functions/currency/cbdc/
  - https://www.eccb-centralbank.org/p/about-the-project
  - https://www.pbc.gov.cn/en/3688110/3688172/index.html
  - https://www.nbc.gov.kh/english/economic_research/bakong.php
  - https://www.bankofengland.co.uk/the-digital-pound
  - https://www.imf.org/en/Publications/WP/Issues/2023/05/12/Nigerias-eNaira-One-Year-After-533487
  - https://www.imf.org/en/Publications/WP/Issues/2022/06/10/The-Bahamas-Sand-Dollar-CBDC-and-Lessons-Learned-518864
  - https://www.bis.org/publ/work1116.htm
  - https://www.bis.org/about/bisih/topics/cbdc.htm
---

# Global retail CBDC pilot comparison matrix — Africa, Caribbean, Asia, UK

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as the cross-jurisdiction comparison matrix for the seven most-cited live or in-design retail CBDC programmes. It complements the per-jurisdiction deep dives at [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]], [[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]], [[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]], [[fintech/boe-digital-pound-consultation|BoE digital pound consultation]], and [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]] by enabling side-by-side reading rather than narrative-by-narrative reading. For architecture context see [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]], [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]], and [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]; for the four-country adoption curve see [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]; for the wholesale-bridge layer see [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] and [[fintech/bis-project-agora-overview|BIS Project Agorá]].

> [!info] TL;DR
> Seven retail-CBDC programmes anchor the 2026-05 public dataset: **Sand Dollar** (Bahamas, live 2020-10, longest-running), **e-CNY** (China, live pilots from 2020-04, largest-by-registered-wallets), **DCash** (ECCB, pilot 2021-03, **discontinued 2024-01**), **eNaira** (Nigeria, live 2021-10, canonical adoption-failure case), **JAM-DEX** (Jamaica, live 2022-07, cleanest small-economy adoption), **Bakong** (Cambodia, live 2020-10, technically a payment-system + quasi-CBDC hybrid), and **digital pound** (UK, design phase since 2024, no decision to launch). Read across the matrix the structural pattern emerges: **technology vendor choice (Bitt vs eCurrency Mint vs in-house) is downstream of distribution-incentive design**, **legal-tender status correlates with explicit legislative authorisation rather than market acceptance**, and **adoption percentage tracks distribution-channel-ownership** (PBoC's state-bank mandate, NCB Lynk anchor, vs Bahamas multi-AFI dilution, vs Nigeria DMB+MMO incentive misalignment).

## Why a seven-pole comparison

The single-issuer narrative ("retail CBDCs are working in some places, failing in others") is correct but unhelpful — it does not isolate **which design choices drive which outcomes**. By placing all seven programmes side-by-side on **statute / issuance model / wallet model / KYC tiers / adoption / technology vendor / interoperability**, the structural correlations become visible. The matrix view also shows the **DCash discontinuation** as not a one-off failure but the visible tail of a pattern (small-economy + multi-AFI + Bitt-vendor + no anchor wallet + no enrolment incentive) that also constrains Sand Dollar and eNaira. For the broader CBDC vs private-rail competitive backdrop see [[fintech/em-market-crypto-dollarization-pattern|EM crypto dollarization pattern]] and [[fintech/gray-market-dollar-network-formalization|gray-market dollar formalization]].

## Matrix A · Statute, regulator, launch status

| Programme | Lead authority | Legal basis | Live date | Status 2026-05 |
|---|---|---|---|---|
| 🇧🇸 [[fintech/bahamas-sand-dollar-cbdc\|Sand Dollar]] | Central Bank of The Bahamas (CBOB) | CBOB Act 2020 (revised) | **2020-10-20** (first ever nation-wide) | Live, 5+ years, slow growth |
| 🇨🇳 e-CNY | PBoC + Digital Currency Research Institute | PBoC Law 2020 amendment | **2020-04** (pilots) | Live, mass-rollout phase |
| 🇰🇭 Bakong | National Bank of Cambodia (NBC) | NBC Law + payment-system framework | **2020-10** | Live, payment-system + quasi-CBDC hybrid |
| 🇪🇨 DCash | Eastern Caribbean Central Bank (ECCB) | ECCB Agreement Act + sandbox | **2021-03** pilot | **Discontinued 2024-01** after 2-month outage |
| 🇳🇬 [[fintech/nigeria-enaira-retail-cbdc\|eNaira]] | Central Bank of Nigeria (CBN) | CBN Act 2007 (existing currency-issuance) | **2021-10-25** (first African) | Live but de-emphasised |
| 🇯🇲 [[fintech/jamaica-jam-dex-cbdc\|JAM-DEX]] | Bank of Jamaica (BoJ) | BoJ (Amendment) Act 2022 | **2022-07** | Live, modest growth |
| 🇬🇧 [[fintech/boe-digital-pound-consultation\|digital pound]] | BoE + HMT | Existing BoE Acts; primary legislation required | Not live; Design Phase | **No decision to launch** |

The earliest mover is **Bahamas (2020-10) nation-wide** and **e-CNY (2020-04) pilots**; the latest live programme is **JAM-DEX (2022-07)**. The only **discontinued** programme is **DCash (2024-01)** — a cautionary data point, since DCash used the same Bitt vendor as Sand Dollar and eNaira. The UK is the only programme of the seven not yet committed to launch. Note: **e-CNY pilots predate the Sand Dollar's nation-wide launch by ~6 months**, but PBoC has not declared "national launch"; e-CNY remains in an extended-pilot phase covering 26+ cities.

## Matrix B · Legal-tender status and currency anchor

| Programme | Legal-tender status | Currency anchor | Notes |
|---|---|---|---|
| Sand Dollar | **Yes** — direct CBOB liability | B$ (pegged 1:1 to USD) | Inherits Bahamian USD peg via fixed FX regime |
| e-CNY | **Yes** — direct PBoC liability | CNY (managed-float) | First major-economy CBDC with explicit legal-tender |
| Bakong | **Quasi** — Bakong is payment-system tokenising commercial-bank balances + KHR currency; not a pure central-bank-liability CBDC | KHR + USD (dual circulation) | Bakong supports both KHR and USD wallets; structurally a hybrid |
| DCash | Yes (during pilot) | XCD (pegged 1:1 to USD at XCD 2.70 per USD) | Discontinued 2024-01 |
| eNaira | **Yes** — direct CBN liability | NGN (managed-float / de facto multi-band) | No explicit CBDC legislation; issued under existing CBN currency authority |
| JAM-DEX | **Yes** — explicit in BoJ Amendment Act 2022 | J$ (managed-float) | Cleanest legal structure; dedicated CBDC amendment |
| digital pound | Contemplated; primary legislation required | GBP | Would be BoE liability if launched |

The legal-tender split runs **Jamaica > Bahamas > UK proposal > Nigeria > China > Cambodia > DCash**. Jamaica's BoJ Amendment Act 2022 is the cleanest dedicated-CBDC legislation; the UK would require primary legislation it has not yet introduced; China amended the PBoC Law in 2020; Nigeria leaned on pre-existing currency-issuance authority and is unique in **never** passing CBDC-specific legislation despite the eNaira being live for 4+ years.

## Matrix C · Issuance and distribution model (direct vs intermediated)

| Programme | Issuance model | Distribution layer | Anchor wallet |
|---|---|---|---|
| Sand Dollar | Two-tier intermediated | **Authorized Financial Institutions (AFIs)** — interoperable across AFIs | Multiple AFI wallets (Island Pay, KANOO, MoneyMaxx, bank wallets) — **no single anchor** |
| e-CNY | Two-tier intermediated | **10 designated operators** — six state-owned commercial banks + four payment/telecom operators (incl. ICBC, BOC, CCB, ABC, AliPay-via-MyBank, WeChat-via-WeBank) | Multiple but ICBC + AliPay + WeChat Pay dominant |
| Bakong | Hybrid; NBC operates Bakong settlement layer; commercial-bank balances tokenised | All Cambodian commercial banks + payment institutions | Bakong app (NBC-operated) + bank apps |
| DCash | Pilot via banks | ECCU commercial banks | DCash app (ECCB-operated) |
| eNaira | Two-tier intermediated | DMBs (deposit money banks) + MMOs (mobile money operators) | eNaira Speed Wallet (CBN-operated) + DMB wallet apps + USSD *997# |
| JAM-DEX | Two-tier intermediated | Authorised PSPs + DTIs | **Lynk** (NCB Financial Group's TFOB subsidiary) — single dominant anchor |
| digital pound | Two-tier intermediated (proposed) | **PIPs** (Payment Interface Providers) + **ESIPs** (External Service Interface Providers) | Private-sector wallets only; BoE explicitly will not run consumer app |

**Distribution-channel-ownership** is the binding adoption variable. JAM-DEX's Lynk and e-CNY's state-bank mandate aligned distribution incentives; Sand Dollar's interoperable-AFI model is structurally clean but dilutes any single AFI's marketing incentive; eNaira's DMB+MMO stack had universally weak incentives (DMBs see eNaira as cannibalising fees, MMOs see it competing with their own e-money); DCash discontinuation traces to the same dilution dynamic plus operational vulnerability. The UK PIP/ESIP design has not been launch-tested.

## Matrix D · KYC tier structure and per-wallet limits

| Programme | Tier-1 (low-friction) | Tier-2 (verified) | Tier-3 (high-cap / business) |
|---|---|---|---|
| Sand Dollar | Phone-only; **B$500 wallet / B$1,500 monthly tx** | Gov-ID verified; **B$8,000 wallet / B$10,000 monthly tx** | Business wallet — KYB; higher caps by business type |
| e-CNY | Phone-only operator-tier; lowest cap CNY ~5,000 daily / 50,000 annual | ID-verified; higher operator-tier caps | Business + high-net-worth operator-tier; effectively uncapped within operator approval |
| Bakong | Phone + ID-light onboarding; ~$10,000 wallet cap | ID + bank-linked; higher caps | Business / cross-border (Thai PromptPay link); higher caps |
| DCash | Phone-only tier; gov-ID tier | Higher gov-ID tier | n/a (discontinued) |
| eNaira | Tier 0 — phone only, **₦120K daily / ₦300K max** | Tier 1 BVN-light, Tier 2 BVN-full | Tier 3 bank-account-linked, higher caps |
| JAM-DEX | Standard PSP onboarding (Lynk-aligned) | Tiered by PSP; higher caps | Merchant tier |
| digital pound | n/a (proposed); no tier structure published in detail | n/a | **Per-person holding cap proposed £10,000-£20,000** (not finalised) |

**Tier-1 caps as inclusion-targeting**: every live programme attempted a low-friction tier for the unbanked; **no live programme reports tier-1 dominance** — the IMF Working Papers on Sand Dollar and eNaira both note that tier-2 (ID-verified) users dominate actual usage. The inclusion design is structurally correct but did not bind on the unbanked at the scale targeted. The UK digital pound, uniquely, considers a **per-person holding cap** (£10K-£20K) instead of a tiered-KYC structure — this is the **biggest single design divergence** across the seven programmes.

## Matrix E · Adoption metrics — registered vs active vs population

| Programme | Registered wallets | Active wallets (representative) | Adoption % of adult population |
|---|---|---|---|
| Sand Dollar | ~30-50K personal + merchant | Single-digit-% of registered transacting monthly | **<1% of pop** (~400K total pop; small absolute base) |
| e-CNY | **180M+** registered | Single-digit-million daily-active (large absolute, small percentage) | **<1% daily-active**; higher monthly-active by user count |
| Bakong | ~10M+ Bakong-linked accounts (NBC) | Materially higher monthly active than peers due to QR-payment ubiquity | **40-60% of adult pop** (NBC public statements; payment-system blur) |
| DCash | <10K cumulative (peer estimates) | n/a (discontinued) | **<0.5% of pop**; one of the lowest |
| eNaira | ~700K–900K Y1; subsequent estimates conflated | **<1.5% of registered transacting** (IMF) | **<0.5% of adult pop** (IMF Y1; no major step-change since) |
| JAM-DEX | ~200K–300K Lynk-led | Materially smaller; BoJ has not disclosed precise daily-active | **Several % of adult pop** (~2M total adults; cleanest small-economy %) |
| digital pound | n/a (not live) | n/a | n/a |

**Cambodia Bakong is the outlier**. Its 40-60% adoption figure reflects that Bakong is technically a **payment-system + interoperability layer** that absorbed the existing QR-payment market, not a pure central-bank-liability retail CBDC. The number is genuine on the payment-system reading but not directly comparable to Sand Dollar / eNaira / JAM-DEX adoption metrics. **JAM-DEX is the cleanest small-economy success** on a percentage-of-population basis among comparable pure-retail-CBDC peers. **e-CNY is the largest absolute but small daily-active percentage**, similar to the registered-vs-active gap in eNaira. **DCash discontinuation** is the only outright failure terminal-case.

## Matrix F · Technology vendor and underlying tech

| Programme | Vendor | Underlying tech | Notes |
|---|---|---|---|
| Sand Dollar | **Bitt Inc.** (Barbados) | Permissioned DLT (Bitt platform; Hyperledger Fabric variant) | Same vendor as eNaira + DCash; cluster has mixed-to-poor adoption outcomes |
| e-CNY | **In-house PBoC** (Digital Currency Research Institute) | Proprietary architecture; account-based with hardware-wallet capability | No external vendor; built entirely in-house at PBoC scale |
| Bakong | **Soramitsu (Japan)** + NBC | Hyperledger Iroha-based; bespoke implementation | Soramitsu (Tokyo) is the architectural lead — distinct from Bitt/eCurrency Mint cluster |
| DCash | **Bitt Inc.** (Barbados) | Same Bitt platform as Sand Dollar | Two-month outage in Jan-March 2022; discontinued 2024-01 |
| eNaira | **Bitt Inc.** (Barbados) | Permissioned Hyperledger Fabric variant | Same Bitt vendor lineage as Sand Dollar / DCash |
| JAM-DEX | **eCurrency Mint** (US-HQ) | DSC2 (Digital Symbol Cryptography) hierarchical signatures | Distinct vendor from Bitt; cleanest small-economy adoption case in the seven-pole set |
| digital pound | **TBD** (vendor selection in flight during Design Phase) | n/a; Phase 2 design ongoing | BoE has run exploratory vendor PoCs but not committed to a vendor |

The **Bitt vendor cluster** (Sand Dollar / eNaira / DCash) covers three of the four worst adoption outcomes in the table. The **eCurrency Mint deployment** (JAM-DEX) is the cleanest small-economy outcome. **In-house** (e-CNY) and **Soramitsu** (Bakong) are the two non-Bitt/non-eCurrency Mint paths and both have stronger adoption — but with very different distribution models, so vendor choice is not the binding variable. The pattern is more **"distribution design constrains vendor outcome reach"** than "vendor capability determines adoption." For more on the vendor / governance interaction see [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]].

## Matrix G · Cross-border interoperability

| Programme | Cross-border CBDC integration | Bilateral CBDC bridge | Wholesale-bridge participation |
|---|---|---|---|
| Sand Dollar | None | None | None |
| e-CNY | **Yes — primary anchor of [[fintech/mbridge-bis-multi-cbdc-overview\|mBridge]]** | HK link (GBA cross-boundary retail) | mBridge + future BRICS-Pay candidate |
| Bakong | **Yes — Thai PromptPay bilateral** + Lao + Malaysia + Vietnam interoperability | Thai PromptPay (live); ASEAN multilateral planned | Not in mBridge; ASEAN regional QR-network |
| DCash | None | None | n/a (discontinued) |
| eNaira | None | None | Not in mBridge / Agorá / Project Dunbar |
| JAM-DEX | None | None | None |
| digital pound | None at retail; BoE participates in [[fintech/bis-project-agora-overview\|BIS Project Agorá]] at wholesale level | None planned | Agorá wholesale |

**Cross-border CBDC adoption is concentrated in two programmes**: e-CNY (via mBridge + GBA HK link) and Bakong (via PromptPay + ASEAN QR). The five remaining retail-CBDC programmes (Sand Dollar, DCash, eNaira, JAM-DEX, digital pound) have **no cross-border CBDC integration** as of 2026-05. This is the **largest single gap** in the small-economy retail-CBDC story — Caribbean and West-African programmes that would most benefit from cross-border remittance corridors have no CBDC-level bridge.

## Matrix H · Issuance ↔ distribution incentive alignment scorecard

| Programme | Issuer incentive | Distributor incentive | Anchor wallet | Aggregate score |
|---|---|---|---|---|
| Sand Dollar | High (CBOB committed) | Diluted across many AFIs; interoperability good for users, weak for distributor lock-in | None dominant | **Medium** |
| e-CNY | High (PBoC mandate) | High (state-bank mandate; AliPay / WeChat regulatory pressure) | AliPay + WeChat + ICBC | **High** |
| Bakong | High (NBC) | High (Bakong absorbed existing QR-payment payment economy) | Bakong app | **High** |
| DCash | High (ECCB) | Low (small ECCU banks; no anchor); operational fragility | None | **Low** (failed) |
| eNaira | High (CBN) | Low (DMBs cannibalised; MMOs competitive; agents prefer commissions) | None | **Very low** |
| JAM-DEX | High (BoJ) | High (NCB's TFOB committed; Lynk anchor wallet) | Lynk | **High** |
| digital pound | TBD | TBD (PIP/ESIP designed but unproven) | Private-sector PIPs only | **TBD** |

The single most powerful predictor of adoption among the live programmes is **whether a single anchor distributor or wallet has aligned commercial incentive** to push the CBDC. Jamaica's Lynk = NCB Financial Group commitment; China's state-bank mandate + AliPay/WeChat absorption; Cambodia's Bakong-as-payment-system network effect. The three weakest cases (DCash, eNaira, Sand Dollar) all fail this test for different reasons (operational fragility, incentive misalignment, and incentive dilution respectively).

## Why these dimensions

The eight matrix axes (statute, legal tender, issuance model, KYC tiers, adoption, technology vendor, cross-border, incentive alignment) were chosen because they map directly to the **gating variables in the BIS/IMF CBDC adoption literature**:

1. **Statute / legal tender** — determines legal enforceability and acceptance ceiling (theoretical max market share).
2. **Issuance / distribution** — determines who gets paid for distribution (the binding rate-of-adoption variable).
3. **KYC tiers** — determines accessibility floor for the unbanked (theoretical inclusion ceiling).
4. **Adoption %** — measures realised outcome (the only metric the public cares about).
5. **Technology vendor** — determines operational risk (DCash failure tied to vendor-platform fragility under load).
6. **Cross-border** — determines whether the CBDC has any role beyond domestic payments.
7. **Incentive alignment** — predicts the rate-of-adoption variable better than any other single measure.

Statute and legal tender are **necessary but not sufficient**; incentive alignment is **sufficient when present** (JAM-DEX, e-CNY, Bakong) and **decisive when absent** (eNaira, DCash, Sand Dollar). This is the central empirical finding the matrix view reveals that a per-jurisdiction narrative obscures.

## Reading the matrix

- **The Bitt vendor cluster pattern**: Sand Dollar, eNaira, DCash all used Bitt and all underperformed. The vendor is **not the binding variable** — distribution-incentive design is — but the vendor cluster correlation is striking enough that future small-economy programmes likely diversify vendors.
- **The "first ever" vs "best outcome" divergence**: Bahamas was first (2020-10-20 nation-wide) but JAM-DEX (2022-07) has the cleanest adoption percentage. Speed-to-launch does not predict adoption quality.
- **DCash as the canonical failure**: discontinued 2024-01 after a two-month outage in 2022 and persistent low adoption. The DCash post-mortem is now the most-cited case in the BIS CBDC operational-risk literature.
- **e-CNY as the registered-vs-active gap**: 180M+ registered wallets and single-digit-million daily active is a 25-50× gap; the same pattern (smaller in scale) is visible in eNaira. Registered wallets do not equal active users in any retail CBDC.
- **digital pound as the indefinite-design-phase pattern**: the BoE's "design phase, not commitment to launch" framing is politically convenient and may keep the programme in design phase indefinitely without formally cancelling, mirroring the Riksbank's e-krona path.
- **Bakong as the payment-system-CBDC hybrid**: Bakong achieves the highest adoption-percentage of any programme in the matrix precisely because it absorbed the existing QR-payment market rather than competing with it — an option not available to a pure CBDC that competes with existing payment rails (UK Faster Payments, Brazil Pix, India UPI).

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]]
- [[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]]
- [[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]]
- [[fintech/boe-digital-pound-consultation|BoE digital pound consultation]]
- [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]
- [[fintech/e-euro-retail-rollout|ECB digital euro retail rollout]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC bridge]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/em-market-crypto-dollarization-pattern|EM crypto dollarization pattern]]
- [[fintech/gray-market-dollar-network-formalization|gray-market dollar formalization]]
<!-- /wiki-links:managed -->

## Sources

- Central Bank of Nigeria — eNaira Design Paper (2021): https://www.cbn.gov.ng/Out/2021/CCD/eNaira%20Design%20Paper.pdf
- Central Bank of The Bahamas — Sand Dollar FAQ: https://www.centralbankbahamas.com/payments-system/the-sand-dollar/sand-dollar-faqs
- Bank of Jamaica — CBDC / JAM-DEX project: https://boj.org.jm/core-functions/currency/cbdc/
- Eastern Caribbean Central Bank — DCash project page (historic): https://www.eccb-centralbank.org/p/about-the-project
- People's Bank of China — public CBDC research and pilot updates: https://www.pbc.gov.cn/en/3688110/3688172/index.html
- National Bank of Cambodia — Bakong public materials: https://www.nbc.gov.kh/english/economic_research/bakong.php
- Bank of England — digital pound landing: https://www.bankofengland.co.uk/the-digital-pound
- IMF Working Paper — Nigeria's eNaira One Year After (Ree, 2023): https://www.imf.org/en/Publications/WP/Issues/2023/05/12/Nigerias-eNaira-One-Year-After-533487
- IMF Working Paper — Bahamas's Sand Dollar: CBDC and Lessons Learned (Kosse, Mattei, Glowka, 2022): https://www.imf.org/en/Publications/WP/Issues/2022/06/10/The-Bahamas-Sand-Dollar-CBDC-and-Lessons-Learned-518864
- BIS Working Paper No. 1116 — "The next-generation monetary system — a blueprint" (2024): https://www.bis.org/publ/work1116.htm
- BIS Innovation Hub CBDC topic landing: https://www.bis.org/about/bisih/topics/cbdc.htm
