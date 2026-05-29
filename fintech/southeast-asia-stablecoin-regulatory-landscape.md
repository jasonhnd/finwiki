---
title: Southeast Asia Stablecoin Regulatory Landscape 2026 (MAS / HKMA / BoT / OJK / BSP / SBV / BNM)
aliases:
  - sea-stablecoin-regulation
  - ASEAN stablecoin map
  - southeast-asia-sc-regulatory-landscape
  - SEA stablecoin 2026
  - mas-hkma-ojk-bot-bsp-bnm-comparison
  - asean cbdc stablecoin matrix
  - se-asia-payment-token-regulation
domain: fintech
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [fintech, stablecoin, cbdc, southeast-asia, asean, mas, hkma, ojk, bot, bsp, bnm, sbv, regulation]
status: active
sources:
  - "https://www.mas.gov.sg/regulation/payments"
  - "https://www.mas.gov.sg/regulation/explainers/regulatory-approach-to-stablecoin-related-activities"
  - "https://www.hkma.gov.hk/eng/news-and-media/press-releases/"
  - "https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/regulatory-regime-for-stablecoin-issuers/"
  - "https://www.sec.or.th/EN/Pages/Home.aspx"
  - "https://www.bot.or.th/en/financial-innovation/digital-finance.html"
  - "https://www.ojk.go.id/en/Default.aspx"
  - "https://www.bi.go.id/en/default.aspx"
  - "https://www.bsp.gov.ph/SitePages/Default.aspx"
  - "https://www.sbv.gov.vn/webcenter/portal/en/home"
  - "https://www.bnm.gov.my/"
  - "https://www.bis.org/publ/work1247.htm"
---

# Southeast Asia Stablecoin Regulatory Landscape 2026

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] and is the **regional routing surface** for ASEAN-plus-HK stablecoin policy. Read it alongside the five-pole global matrix at [[fintech/global-stablecoin-regulatory-five-pole-matrix]] (which slots MAS and HKMA into a world view) and the EM dollarization counter-pattern at [[fintech/em-market-crypto-dollarization-pattern]] (which describes what users actually do underneath any regulatory map). The two per-jurisdiction deep dives are [[fintech/singapore-mas-payment-services-act-overview]] and [[fintech/hkma-stablecoin-licensing-overview]]; this entry is the **map view** that places Thailand, Indonesia, Philippines, Vietnam, and Malaysia next to them.

> [!info] TL;DR
> By 2026-05, Southeast Asia has split into **three regulatory tiers** for stablecoins: (1) **licensed issuance regimes** — Singapore MAS SCS (live since 2023-08) and Hong Kong HKMA Stablecoin Ordinance (live since 2025-08, first two licenses 2026-05-21); (2) **pilot / sandbox regimes** — Thailand SEC + BoT stablecoin sandbox (THB-pegged via Programmable Payment), Malaysia BNM Discussion Paper 2026, Philippines BSP Project Agila sandbox; (3) **prohibited or grey** — Vietnam SBV crypto ban, Indonesia OJK/BI dual-regulator boundary where rupiah-pegged SC is not yet licensed and USDT flows through PMA-licensed exchanges plus large P2P / OTC volume. The structural pattern: **every ASEAN central bank wants a CBDC**, **most want a domestic-currency stablecoin rail**, and **none want USD-stablecoin retail circulation** — but enforcement capacity varies by an order of magnitude across the region.

## Why a regional map matters

A USD-pegged stablecoin issued under US GENIUS, EU MiCA, or Japan EPI gets **five different legal treatments** when it crosses into ASEAN. A single MAS-licensed SCS like XSGD is treated as a regulated payment instrument in Singapore, a foreign exchange asset in Indonesia, an unregulated digital token in Vietnam, and an e-money-adjacent product in the Philippines. The treatment also differs by **issuer nationality and chain** — Tron-based USDT in retail wallets vs. Solana-based USDC routed through a licensed broker — which is the same fragmentation that the [[fintech/global-stablecoin-regulatory-five-pole-matrix]] documents at the global level. The result is that **regional B2B stablecoin corridors** (see [[fintech/stablecoin-crossborder-b2b-growth]]) live in narrow legal bands that depend on the licensed entity at each leg rather than on the token itself.

For the on-ramp / exchange side of the same regulatory surfaces, see [[exchanges/INDEX]], [[exchanges/sg-mas-dpt-licensing-overview]], and the cross-region view at [[exchanges/global-vasp-regulatory-comparison-matrix]].

### Singapore MAS · PSA + SCS + DTSP

- **Statute**: Payment Services Act 2019 (PS Act) + SCS Framework 2023-08 + DTSP Regime 2024-04 amendment.
- **Lead regulator**: Monetary Authority of Singapore (MAS).
- **Licensable SC type**: Single-Currency Stablecoin (SCS) pegged to SGD or any single G10 fiat.
- **Reserve**: 100% in cash, cash equivalents, or short sovereign paper rated AA- or better; daily attestation; segregated custody.
- **Capital floor**: S$1M base + higher of S$1M or 50% of annual OpEx.
- **Active SCS issuers (2026-05)**: StraitsX XSGD (live, MAS-regulated); Paxos USDP (pending via offshore subsidiary).
- **Non-SCS USD stablecoins**: USDC, USDT, PYUSD circulate via DPT licensees (Coinbase Singapore, Crypto.com, Independent Reserve, HashKey, DBS Vickers, Sygnum, Anchorage Digital Singapore, StraitsX) but are not "MAS-regulated SCS".
- **Cross-border**: 2026-03 Singapore-US MRA signed → strong candidate for §501(d) **first-wave Asia entry** under [[fintech/genius-act-501-denylist-mandate]].

Full mechanics in [[fintech/singapore-mas-payment-services-act-overview]] and the strategic angle in [[fintech/singapore-mas-payment-services-act-strategic-implications]]. The DTSP regime in particular closed the "Singapore-incorporated entity serves global customers" loophole that previously let unlicensed issuers route flow through SG, which is now mapped by the broader [[fintech/jurisdiction-list-monetary-protectionism]] framework.

### Hong Kong HKMA · Stablecoin Ordinance (Cap. 656)

- **Statute**: Stablecoin Ordinance enacted 2025-08, took effect 2025-08-01.
- **Lead regulator**: HKMA, with parallel VASP licensing under SFC (see [[exchanges/hk-sfc-vasp-licensing-overview]]).
- **Licensable SC type**: HKD-pegged or any single foreign fiat (USD primary).
- **Reserve**: 100% in HKD / USD short Treasuries, central-bank reserves, segregated bank deposits; daily mark-to-market; FRTB capital treatment per [[fintech/hk-frtb-stablecoin-reserve-overview]].
- **Capital floor**: Paid-in HK$25M plus on-going ≥2% of issued SC value.
- **First-batch decision 2026-05-21**: HSBC and Standard Chartered "Anchorpoint" consortium approved; other seven applicants (JD-HKD, Ant International, BOCHK, ZA Bank, Conflux, Tether, RD Technologies) deferred or pending.
- **Cross-border**: §501(d) third-wave candidate (2027-H2 earliest), gated on e-CNY demarcation and OFAC SDN coordination.

The HK regime is the **only ASEAN-adjacent path that can plausibly carry a Mainland-China-affiliated issuer**, which is why JD, Ant International, and BOCHK applied. The strategic asymmetry around Tether's HK application is detailed in [[fintech/hkma-stablecoin-licensing-implications]] and the broader pattern in [[fintech/gray-market-dollar-network-formalization]].

### MAS vs HKMA · short comparison

| Axis | MAS SCS (SG) | HKMA SC (HK) |
|---|---|---|
| Statute live | 2023-08 | 2025-08 |
| Capital floor | S$1M | HK$25M paid-in + 2% on-going |
| Reserve maturity cap | ≤ 3 months | No explicit cap, short-dated USTs / HKGB |
| Attestation cadence | Daily reserve disclosure | Monthly attestation by independent auditor |
| Pegged currency scope | SGD + any G10 | HKD + USD primary, other fiat permitted |
| First-mover advantage | StraitsX XSGD (2023) | HSBC + Anchorpoint (2026-05-21) |
| Mainland China issuer route | Closed via DTSP | Open in principle, deferred in practice |
| §501(d) MRA status | First-wave Asia candidate | Third-wave candidate |

The matrix view across all five poles (US / EU / JP / HK / SG) lives at [[fintech/global-stablecoin-regulatory-five-pole-matrix]]. The contrast for MAS vs HKMA on the dual-currency arbitrage axis is in [[fintech/dual-currency-stablecoin-arbitrage-overview]].

### Thailand · SEC + BoT stablecoin sandbox

- **Lead regulators**: Bank of Thailand (BoT) for payment / monetary policy boundary, SEC Thailand for digital asset business.
- **Domestic SC status**: Foreign-currency-backed stablecoins (USDT / USDC) are **prohibited as a means of payment** by SEC notification 2022 (still in force), but permitted as a digital asset for trading on licensed digital asset exchanges (Bitkub, Satang, Zipmex Thailand pre-collapse, Upbit Thailand).
- **THB-pegged stablecoin**: As of 2026, **no live THB-pegged stablecoin** has cleared BoT review for circulation. A regulatory sandbox under BoT's "Programmable Payment Sandbox" supports tokenized-deposit pilots from Siam Commercial Bank and Kasikornbank, plus a wholesale CBDC pilot (continuation of Project Inthanon / BIS mBridge participation prior to BoT's withdrawal — see [[fintech/mbridge-bis-multi-cbdc-overview]]).
- **Retail CBDC**: BoT retail CBDC pilot 2022-2023 concluded with no scale-up commitment; reframed as "Programmable Payment" infrastructure on top of PromptPay.
- **Tourist crypto-payment pilot**: 2024-08 SEC + BoT announced sandbox allowing foreign visitors to spend digital assets via licensed exchanges that auto-convert to THB at merchant — narrow, ring-fenced, not a SC issuance license.

### Malaysia · BNM Discussion Paper 2026 + SC Malaysia digital asset framework

- **Lead regulators**: Bank Negara Malaysia (BNM) for currency / payments boundary; Securities Commission Malaysia for digital asset trading.
- **Domestic SC status**: Ringgit-pegged stablecoin issuance is **not yet licensable**; BNM published a Discussion Paper on Stablecoins in early 2026 outlining a future licensing framework modelled on MAS SCS structure (100% reserve, single-currency peg, dedicated issuer license) with consultation closing mid-2026.
- **DuitNow / CBDC**: BNM continues to develop wholesale CBDC capability through BIS Innovation Hub participation; retail CBDC remains "not necessary at this stage" per BNM Governor statements 2024-2025.
- **Licensed exchanges**: Luno Malaysia, SINEGY, MX Global, Tokenize Xchange under SC Malaysia recognized market operator regime.
- **Cross-border MYR-SGD**: BNM-MAS DuitNow-PayNow linkage (live 2023-04) creates an instant-payment corridor that competes with any future MYR/SGD-stablecoin pair on raw cost.

### Philippines · BSP Project Agila + e-money + virtual currency

- **Lead regulator**: Bangko Sentral ng Pilipinas (BSP), with SEC Philippines for securities-adjacent crypto.
- **Domestic SC status**: PHP-pegged stablecoin issuance requires BSP authorization. **PHPC** (issued by Coins.ph as a sandbox participant) and **PHPX** (consortium-backed pilot through licensed banks) are the live PHP-pegged pilots as of 2026.
- **CBDC**: **Project Agila** (formerly Project CBDCPh) — BSP's wholesale CBDC pilot, focused on interbank settlement on Hyperledger Fabric. No retail CBDC commitment.
- **e-money** vs SC boundary: GCash, Maya, and other large e-money issuers operate under BSP Circular 649 (e-money issuer), which is the **historical analog** of a stablecoin license — BSP's framing is that "PHP-pegged stablecoin" is a tokenized form of e-money and must therefore meet the e-money issuer prudential floor.
- **USD stablecoin flow**: USDT and USDC reach Philippine retail via licensed Virtual Asset Service Providers (VASPs) and through remittance corridors (PHP-USD overseas-Filipino-worker flow), where stablecoin substitutes for traditional MTO bridging.

### Vietnam · SBV crypto ban + de-facto USDT economy

- **Lead regulator**: State Bank of Vietnam (SBV).
- **Legal status**: Cryptocurrency is **not recognized as legal tender** and **not permitted as a means of payment** under SBV Directive 02/CT-NHNN (2018, still in force as of 2026). Issuance, distribution, and use of cryptocurrencies as payment instruments carry administrative fines.
- **Workarounds**: Vietnam consistently ranks in the **top three globally** for retail crypto adoption (Chainalysis Global Crypto Adoption Index 2023, 2024, 2025), driven by USDT P2P remittance, gaming-token earnings (Sky Mavis Axie Infinity legacy + newer projects), and merchant-side accepted-but-not-advertised stablecoin payments.
- **Pending regulation**: A draft Decree on Digital Asset Management has been in inter-ministerial circulation since 2023; multiple reported finalization deadlines (2024, 2025, 2026) have slipped. The expected shape is a **licensed virtual asset business** framework rather than a stablecoin issuance license.
- **Practical implication**: USDT-Tron and USDT-TON dominate the retail rail; Tether's grey-market dominance here is exactly the pattern documented in [[fintech/em-market-crypto-dollarization-pattern]].

### Indonesia · OJK + BI dual-regulator boundary

- **Lead regulators**: Otoritas Jasa Keuangan (OJK, financial services authority) and Bank Indonesia (BI, central bank). The 2023 P2SK Law transferred crypto supervision from Bappebti (commodity futures regulator) to OJK with effect 2025-01.
- **Domestic SC status**: Rupiah-pegged stablecoin **issuance is not yet licensed**; OJK has signalled an intent to publish a digital financial asset framework that includes a stablecoin licensing track, but as of 2026-05 no IDR-stablecoin has been authorized.
- **Foreign SC status**: USDT, USDC, and other USD-stablecoins are tradable as commodity-classified digital assets on licensed Pedagang Aset Kripto (PMA) exchanges (Tokocrypto, Indodax, Pintu, Reku, Triv, Pluang, Upbit Indonesia, Mobee).
- **CBDC**: **Project Garuda** — BI's wholesale CBDC pilot, two-tier architecture, integrated with the BI-FAST instant payment system. Currently in design phase with no retail-issuance timeline.
- **Remittance corridor**: USDT P2P remittance from Indonesian diaspora in Singapore / Malaysia / Hong Kong / Saudi Arabia is large and informal; this is the deep context for the dedicated entry [[fintech/indonesia-ovo-stablecoin-route]].

## Cross-cutting structural patterns

1. **Every central bank wants a CBDC, mostly wholesale**. Five of seven jurisdictions (MAS, HKMA, BoT, BNM, BSP, BI) run a wholesale CBDC pilot; only Vietnam SBV lacks an announced pilot. Retail CBDC enthusiasm has cooled across the region — Thailand and Singapore have publicly de-emphasised retail launches, and Hong Kong's e-HKD remains in pilot.
2. **Domestic-currency stablecoin license is the new normal target**. MAS already has one, HKMA has one, BNM is drafting one, BoT runs a sandbox toward one, BSP is leaning on the e-money framework as a proto-license, OJK is signalling intent. Only SBV has no domestic-SC plan.
3. **USD stablecoin retail circulation is universally constrained but practically pervasive**. Even in Singapore where USDC and USDT are tradable on DPT-licensed venues, they are **not** licensable as SCS. The retail flow that the EM dollarization pattern in [[fintech/em-market-crypto-dollarization-pattern]] describes is structurally identical across Vietnam, Indonesia, and the Philippines.
4. **Cross-border instant-payment linkages compete with stablecoins on the same corridors**. ASEAN-5 plus India launched Project Nexus to interlink instant-payment systems (PromptPay / DuitNow / PayNow / UPI / InstaPay), backed by BIS Innovation Hub. This rail is the **non-stablecoin** answer to the same remittance and B2B flow that USDT and USDC capture today.
5. **Hong Kong is the only Mainland-China-affiliated stablecoin route**. Singapore's DTSP closure pushed Mainland-Chinese-controlled issuers toward HK; HKMA's first-batch deferral of JD, Ant International, BOCHK signals tight political gating. The result is a **bifurcated Asian SC market** — global-bank issuers (HSBC, StanChart) get the first HK licenses, Chinese-affiliated issuers wait for the PBoC offshore-CNH window. The same dynamic was noted in [[fintech/sovereign-fund-crypto-allocation-pattern]] and is part of the broader [[fintech/national-license-private-stablecoin-with-dpi-export]] pattern.
6. **The regulator-of-record matters more than the technology**. In every ASEAN jurisdiction, a USDC token is the same on-chain object — what changes is whether the holder reached it via a MAS DPT licensee, an OJK PMA exchange, a BSP-licensed VASP, or an unlicensed P2P trade. The same observation underlies the global five-pole comparison in [[fintech/global-stablecoin-regulatory-five-pole-matrix]] and motivates the issuer-distributor framing in [[fintech/issuer-distributor-incentive-realignment-50-50-model]].
7. **Sandbox-to-license latency is structurally 2-3 years**. MAS's SCS framework took roughly two years of consultation before live licensing; HKMA's ordinance took nearly three years from consultation to first license. Bank Negara Malaysia's 2026 Discussion Paper is therefore unlikely to produce a live MYR-SC issuer before 2028, and Thai or Indonesian timelines should be read against the same baseline.

## Capital and reserve treatment under regional bank prudential frameworks

For licensed issuers that are part of a banking group (HSBC, StanChart Anchorpoint, possibly future bank-affiliated Malaysian or Indonesian issuers), the **Basel III FRTB capital treatment** of stablecoin reserves becomes an important second-order constraint. HKMA's FRTB-aligned treatment of stablecoin reserve assets is described in [[fintech/hk-frtb-stablecoin-reserve-overview]], and the broader Basel implications for crypto exposure are at [[fintech/basel-iii-frtb-crypto-exposure-overview]] and [[fintech/basel-iii-frtb-crypto-exposure-implications]]. Non-bank issuers (StraitsX in Singapore, future non-bank issuers under prospective BNM / OJK frameworks) are subject to the dedicated stablecoin-issuer capital floor rather than full bank capital adequacy.

For non-bank issuers regulated under either an SCS-type framework (MAS) or a dedicated SC-issuer framework (HKMA), the regulatory capital floor is meaningfully **lower** than bank capital adequacy, which creates a structural cost advantage for non-bank issuance even after compliance overhead.

## Cross-border stablecoin corridors observed in 2025-2026

| Corridor | Dominant rail | Settlement asset | Notes |
|---|---|---|---|
| SG ↔ HK | DPT exchange + bank | USDC, USDT | Both ends MAS / HKMA / SFC licensed |
| SG ↔ ID | OTC + PMA exchange | USDT (Tron) | Indonesia-side retail P2P heavy |
| MY ↔ SG | DuitNow-PayNow direct | MYR-SGD fiat | Instant payment, no SC needed |
| SG ↔ PH | OTC + Coins.ph | USDC, USDT | Philippine OFW remittance overlay |
| HK ↔ Mainland CN | Informal OTC | USDT | Capital-controls grey corridor |
| TH ↔ Greater Mekong | OTC + USDT (TRC-20) | USDT, USDC | Tourist + cross-border trade |
| Anywhere ↔ ASEAN | mBridge candidate (CN-led) | mCBDC | See [[fintech/mbridge-bis-multi-cbdc-overview]] |
| Anywhere ↔ ASEAN | SWIFT-API hybrid | USD wholesale | See [[fintech/cross-border-sc-via-swift-api]] |

### Corridor-by-corridor commentary

**SG ↔ HK** is the densest fully-licensed regional corridor. Both ends host major DPT / VASP licensees and the largest concentration of Asian institutional crypto custody (see [[exchanges/crypto-custody-provider-landscape-matrix]] and [[exchanges/global-institutional-custody-five-pillars]]). USDC and USDT flow through licensed venues with clean KYC at both legs; this is the **closest analog in Asia to a fully-compliant USD-stablecoin corridor**.

**SG ↔ ID** is the most asymmetric corridor: Singapore side is rigorously licensed (MAS DPT + DTSP), Indonesia side has licensed PMA exchanges plus a much larger informal P2P layer. The corridor's compliance posture is determined by the **lower-friction leg**, which is Indonesia. The structural dynamic mirrors gray-market formalization analysis in [[fintech/gray-market-dollar-network-formalization]].

**MY ↔ SG** is the **negative case** — instant-payment interlinkage (DuitNow ↔ PayNow) makes the stablecoin alternative economically unattractive for retail volumes. Stablecoin use on this corridor concentrates in B2B and crypto-native segments.

**HK ↔ Mainland CN** is the canonical capital-controls grey corridor. USDT-Tron is the dominant rail. Any HKMA-licensed HKD-pegged stablecoin (HSBC, StanChart Anchorpoint) is structurally **forbidden** from serving this corridor at the retail level; the political constraint is identical to the e-CNY demarcation that [[fintech/hkma-stablecoin-licensing-implications]] documents.

**TH ↔ Greater Mekong** (Thailand-Laos-Cambodia-Myanmar-southern China) is informal-OTC-heavy with weak supervision on the non-Thai legs; this is the corridor most exposed to AML/CFT vulnerabilities and is implicitly targeted by FATF Travel Rule expectations (see [[fintech/fatf-travel-rule-overview]] and [[fintech/fatf-travel-rule-cross-border-stack]]).

## AML/CFT and FATF positioning

ASEAN's FATF grey-list dynamics directly affect stablecoin corridor risk. The Philippines was removed from the FATF grey list in 2025; Vietnam remains under FATF enhanced follow-up; Myanmar is on the FATF black list. The implications for cross-border stablecoin flow are documented in [[fintech/aml-cft-fatf-grey-list-overview]] and [[fintech/aml-cft-fatf-grey-list-cross-border-implications]]. Licensed issuers in MAS and HKMA jurisdictions face **direct counterparty-risk consequences** when accepting flows that originate from grey-list-adjacent corridors.

## Investor / operator implications

- For a **stablecoin issuer** choosing an Asian jurisdiction in 2026-2027, the **fastest path to live licensing is Singapore MAS SCS** (proven framework, lowest capital floor, daily attestation cost compensated by global brand). HK is **more politically gated** and is preferred only by issuers with a Mainland-China-affiliation rationale.
- For a **VASP or DPT** choosing an Asian hub, the choice is between MAS (broader retail surface, SCS license adjacency) and HK (deeper banking integration, broader institutional surface), with Japan via [[exchanges/jp-crypto-bank-credit-facilities]] as a regulatory-conservative third pole.
- For a **B2B settlement use case**, the most cost-effective corridor inside ASEAN is **between MAS / HKMA licensed entities** using USDC. Outside that envelope, regulatory and AML friction increases meaningfully.
- For a **remittance use case** into Indonesia, the Philippines, or Vietnam, the practical rail is **USDT-Tron via licensed exchanges plus informal off-ramp**, and the licensed-product alternative compresses cost only if Project Nexus interlink reaches the relevant corridor.
- For a **cross-border SC product team**, the structural lessons in [[fintech/protocol-hedge-strategy-stripe-pattern]] and [[fintech/embedded-wallet-fintech-disintermediation-overview]] are directly applicable — partnership with licensed local entities at each leg is necessary, and the regulatory perimeter at each leg shapes both UX and cost.

## Related

- [[fintech/INDEX|Wiki Index]]
- [[fintech/singapore-mas-payment-services-act-overview|MAS PSA + SCS framework]]
- [[fintech/singapore-mas-payment-services-act-strategic-implications|MAS strategic implications]]
- [[fintech/hkma-stablecoin-licensing-overview|HKMA licensing overview]]
- [[fintech/hkma-stablecoin-licensing-implications|HKMA strategic implications]]
- [[fintech/hk-frtb-stablecoin-reserve-overview|HK FRTB reserve treatment]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|Global five-pole matrix]]
- [[fintech/jurisdiction-list-monetary-protectionism|§501(d) jurisdiction list]]
- [[fintech/indonesia-ovo-stablecoin-route|Indonesia OVO / stablecoin route]]
- [[fintech/em-market-crypto-dollarization-pattern|EM crypto-dollarization pattern]]
- [[fintech/india-anti-dollar-dpi-alliance|India anti-dollar DPI alliance]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC]]
- [[exchanges/sg-mas-dpt-licensing-overview|SG MAS DPT licensing]]
- [[exchanges/hk-sfc-vasp-licensing-overview|HK SFC VASP licensing]]
- [[exchanges/global-vasp-regulatory-comparison-matrix|Global VASP regulatory matrix]]

## Sources

- Monetary Authority of Singapore — Payment Services Act guidance and SCS Framework explainer.
- Hong Kong Monetary Authority — Stablecoin Ordinance press releases and licensing announcements (2025-2026).
- Securities and Exchange Commission Thailand — Digital asset business notifications.
- Bank of Thailand — Digital Finance and Programmable Payment Sandbox materials.
- Otoritas Jasa Keuangan (Indonesia) — Crypto supervision transition statements following P2SK Law.
- Bank Indonesia — Project Garuda whitepaper materials.
- Bangko Sentral ng Pilipinas — Project Agila and VASP licensing circulars.
- State Bank of Vietnam — Directive 02/CT-NHNN and subsequent guidance.
- Bank Negara Malaysia — Discussion Paper on Stablecoins (2026).
- Bank for International Settlements — Project Nexus, mBridge, and ASEAN-related working papers.
