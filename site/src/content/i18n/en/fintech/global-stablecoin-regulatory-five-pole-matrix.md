---
source: fintech/global-stablecoin-regulatory-five-pole-matrix
source_hash: 7baf14737caf3a76
lang: en
status: machine
fidelity: ok
title: "Global Stablecoin Regulation: Five-Pole Comparison Matrix"
translated_at: 2026-05-31T07:28:06.121Z
---

# Global Stablecoin Regulation: Five-Pole Comparison Matrix

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] and is the cross-jurisdictional matrix view that sits above the per-regime overviews. It complements the geopolitical lens of [[fintech/three-circles-stablecoin-mra-framework]] (which collapses the world into three MRA circles), by instead enumerating **all five active stablecoin licensing regimes** on a feature-by-feature basis so a counsel or treasury team can pick a jurisdiction matrix-wise rather than narratively. For VASP / on-ramp adjacency see [[exchanges/INDEX|exchanges]].

> [!info] TL;DR
> By 2026-05  there are **five operational stablecoin licensing regimes** worldwide — the US GENIUS Act, EU MiCA (EMT/ART), Japan's three-type EPI regime, the HKMA Stablecoin Ordinance, and MAS PSA + SCS — and they have **converged on roughly five non-negotiable principles** (1:1  reserves in cash / short sovereign paper, segregated custody, monthly attestation, mandatory legal redemption rights, and a ban on algorithmic SCs) while **diverging materially** on (a) permitted issuer types, (b) cross-border / third-country access, (c) capital thresholds, and (d) fine print of reserve composition. The result is a **regulatory-arbitrage window of 18–24  months** before MRA passporting closes the gaps.

## Why a five-pole comparison

The single-issuer narrative ("USDC dominates everywhere") is incorrect once you cross the Atlantic or Pacific. A US-qualified payment stablecoin issued under GENIUS does not automatically get EU EMT status, JP EPI listing, an HK issuer license, or SG SCS recognition. Each regime applies its own reserve, governance, capital, redemption, and AML/CFT rules — and the **same USD-pegged token** can hold five different legal classifications depending on which entity issues it and where it is offered. The matrix below is the working surface for that reality. For the per-pole deep dives see [[fintech/genius-act-501-denylist-mandate]] (US), [[fintech/mica-overview]] (EU), [[fintech/japan-stablecoin-regulatory-landscape]] (JP), [[fintech/hkma-stablecoin-licensing-overview]] (HK), [[fintech/singapore-mas-payment-services-act-overview]] (SG).

## Matrix A · Statute, regulator, dates

| Pole | Statute | Lead regulator | Effective | Transition window |
|---|---|---|---|---|
| 🇺🇸 US GENIUS | Payment Stablecoin Act (GENIUS) | OCC + Federal Reserve + state regulators (dual-track) | Signed 2025-07, ; rule finalization 2026-H2  | 18  months for non-compliant issuers to exit the US market |
| 🇪🇺 EU MiCA | Regulation (EU) 2023/1114  | EBA (significant) + ESMA + national NCAs | SC parts in force 2024-06-30; full MiCA 2024-12-30 | 18 -month grandfathering ended 2026-07  |
| 🇯🇵 Japan EPI | Amended Payment Services Act (PSA 2022  revision) | FSA + Kanto Local Finance Bureau + Trust Association | In force 2023-06-01 | No transition — the new regime was built around three new license types |
| 🇭🇰 HK | Stablecoin Ordinance (Cap. 656) | HKMA | In force 2025-08-01; first licenses 2026-05-21 | 6-month sandbox-to-license bridge for existing sandbox participants |
| 🇸🇬 SG | PS Act 2019  + SCS Framework 2023-08  + DTSP Regime 2024-04  | MAS | PSA 2020-01; SCS Aug 2023; DTSP Apr 2024  | DTSP grandfathering closed 2025-06  |

Japan (2023-06) was the earliest mover, HKMA (2025-08) is the latest live regime, and GENIUS (2025-07) carries the greatest institutional weight. MiCA is the only regime written as a single 400-page regulation rather than as a license category attached to a payments act.

## Matrix B · Scope and excluded designs

| Pole | Pegged currency scope | Algorithmic SC | Multi-asset baskets | Bearer / unregistered |
|---|---|---|---|---|
| US GENIUS | USD only (payment stablecoin) | ❌ Banned | ❌ Out of scope (treated as commodity / security) | ❌ |
| EU MiCA | Any single fiat (EMT) or multi-asset / multi-fiat (ART) | ❌ Banned (Art. 19) | ✅ ART category exists but adoption is near zero | ❌ |
| Japan EPI | JPY + foreign fiat (USD via SBI Circle) | ❌ Implicitly banned (must be redeemable at par) | ❌ Not contemplated | ❌ |
| HKMA | Any single fiat (primarily HKD + USD) | ❌ Banned | ❌ Out of scope | ❌ |
| MAS SCS | SGD + any G10  single fiat | ❌ Banned | ❌ Out of scope (governed by DPT only, not SCS) | ❌ |

**Convergent line**: **all five poles ban algorithmic stablecoins** as a direct response to the May-2022  UST collapse. **Divergent line**: only MiCA created a multi-asset class (ART), and it has essentially failed in the market — no large ART issuer has emerged, confirming the same regulation-shapes-product dynamic visible in [[fintech/genius-act-501-denylist-mandate]].

## Matrix C · Permitted issuer types

| Pole | Issuer types allowed |
|---|---|
| US GENIUS | (a) Federally qualified payment stablecoin issuer (OCC charter), (b) state-qualified issuer up to $10B in circulation, (c) bank subsidiary |
| EU MiCA | (a) Credit institution (EU bank), (b) authorized e-money institution (EMI) for EMT, (c) authorized ART issuer (separate license) |
| Japan EPI | (a) Trust type (trust bank as issuer), (b) bank type (bank as issuer), (c) funds-transfer-operator type (registered funds transfer operator) |
| HKMA | (a) HK-incorporated stablecoin issuer (new dedicated license), with no piggybacking on an existing bank license |
| MAS SCS | (a) MAS-licensed SCS issuer (dedicated category under the PS Act), incorporated in Singapore with local management |

**Convergent line**: every pole now recognizes a **dedicated stablecoin issuer license** rather than allowing only banks. **Divergent line**: only Japan splits the issuer category into three distinct legal forms (trust / bank / funds transfer) with materially different operating envelopes — see [[fintech/japan-epi-three-types-overview]] for the trust-vs-bank-vs-funds-transfer split.

## Matrix D · Reserve composition, redemption, capital

| Pole | Reserve composition | Redemption right | Capital / liquidity minimum |
|---|---|---|---|
| US GENIUS | 100% in (i) US currency, (ii) demand deposits at insured depositories, (iii) Treasuries up to 93 days, (iv) Treasury-backed reverse repo | Mandatory at par, T+1  by statute | Set by the primary federal regulator; OCC charter floor around $50M |
| EU MiCA | EMT: 30%+ in EU bank deposits (or 60% for significant EMT) + remainder in HQLA; segregated and bankruptcy remote | Mandatory at par, T+1  (Art. 39) | EMI minimum capital €350K + own-funds requirement scaling with circulation |
| Japan EPI | Trust type: 100% trust segregation; bank type: linked to bank balance sheet + deposit insurance up to ¥10M; funds-transfer type: full segregation via deposit / bond | Mandatory at face value, T+0/T+1  depending on type | Trust ≥ ¥100M paid-in; bank: banking-law capital adequacy; funds transfer: ¥10M + per-transaction cap |
| HKMA | 100% in HKD / USD short Treasuries, central-bank reserves, and segregated bank deposits; daily mark-to-market | Mandatory at par, T+1; rejection grounds limited to AML | Paid-in capital ≥ HK$25M and additionally ≥ 2% of issued SC value as ongoing capital |
| MAS SCS | 100% in cash, cash equivalents, or sovereign debt up to 3 months rated AA−; held in segregated custody at MAS-approved entities | Mandatory at par, redemption within 5  business days | Base capital ≥ S$1M and the higher of S$1M or 50% of annual OpEx |

The **strictest** reserve regime is **MAS SCS** (3-month sovereign paper, AA− floor, daily attestation), while the **most permissive** is **US GENIUS** (which allows demand deposits at depository institutions and reverse repo). EU MiCA is the only regime that requires a **fixed share** of reserves to be held at EU banks regardless of credit quality, with the side effect of subsidizing EU banks at the expense of issuer NIM.

## Matrix E · Cross-border and third-country access

| Pole | Foreign issuer access | Third-country regime |
|---|---|---|
| US GENIUS | Only via a US-domiciled qualified issuer or the Treasury-recognized "comparable foreign regulator" route (§502) | Treasury controls the "comparable foreign regulator" list; MRA-driven; Japan signed 2026-02, , EU expected to sign 2026-Q3  |
| EU MiCA | Foreign EMT issuers must establish an EU CRR credit institution or EMI; no passive-marketing carve-out | Third-country offers are prohibited unless by reverse solicitation; no equivalence regime is built into MiCA Level 1  |
| Japan EPI | Foreign SC can be distributed only via a licensed EPI service provider (e.g., SBI VC Trade for USDC); foreign issuers cannot offer directly | Distributor model + bilateral MRA (US-Japan MRA 2026-02) |
| HKMA | Foreign-anchor SC (e.g., USD-pegged) must be issued by an HK-licensed local entity; offshore branches are not accepted | No third-country equivalence; only bilateral MoUs |
| MAS SCS | Foreign issuers must incorporate a Singapore subsidiary and obtain an SCS license; an existing DPT license does not auto-upgrade | The DTSP regime closes the "Singapore hub serves global customers" loophole; no equivalence regime |

This is the **single biggest divergence**. The US created a deliberate equivalence on-ramp (§502  + MRA); the EU built a closed garden with reverse solicitation as the only escape valve; Japan uses the distributor model; HK and SG both require local incorporation. The 18-month arbitrage window mentioned in the TL;DR comes from the time lag between bilateral MRAs being signed (2026–2027) and becoming fully operational (2027–2028).

## Matrix F · Disclosure, audit, AML, resolution

| Pole | Attestation cadence | AML/CFT | Resolution regime |
|---|---|---|---|
| US GENIUS | Monthly reserve composition + annual financial-statement audit; CEO/CFO certification | BSA, OFAC SDN screening, Travel Rule via FinCEN | FDIC-style receivership for state-qualified issuers; federal issuers wound down via OCC |
| EU MiCA | Monthly reserve attestation + quarterly disclosures + annual audit; white paper + ongoing reporting to the NCA | AMLD6  + Transfer-of-Funds Regulation (Travel Rule) + EU sanctions | Bank Recovery & Resolution Directive (BRRD) extended to significant EMT issuers |
| Japan EPI | Monthly reserve disclosure (trust type via the Trust Association); annual audited financials | Act on Prevention of Transfer of Criminal Proceeds (AML) + Travel Rule via industry association + METI sanctions | Trust Business Act segregation ensures holder priority; banking-law resolution for bank type |
| HKMA | Monthly reserve attestation by an independent auditor; quarterly public disclosure | AMLO + JFIU + UN/HKMA sanctions screening; Travel Rule applied to issuer flows | HK Financial Institutions (Resolution) Ordinance applies; issuer-specific recovery plan mandatory |
| MAS SCS | Daily reserve disclosure + monthly third-party attestation; annual audit | PS Act AML + MAS Notice PSN02  + Travel Rule + UN/MAS sanctions | Issuer-specific recovery and resolution plan; MAS receivership powers |

MAS is uniquely strict on **daily** disclosure. All five poles converged on **monthly third-party attestation** as the floor and **Travel Rule + sanctions screening** as required AML controls. Resolution regimes remain fragmented — only the EU and HK have explicitly extended bank-resolution machinery to SC issuers.

## Matrix G · Permitted use, distribution, interoperability

| Pole | Retail use | Wholesale / institutional | Embedded wallet distribution |
|---|---|---|---|
| US GENIUS | Yes, with no per-transaction ceiling; intended for payments | Yes, including DvP and tokenized deposits | Permitted; OCC supervised |
| EU MiCA | Yes for EMT; significant EMT (>€5B) faces extra transaction-volume caps | Yes; ART is used mostly for tokenized funds | Permitted, but only via an EU-licensed wallet operator |
| Japan EPI | Yes; funds-transfer type capped at roughly ¥1M per transaction (partial caps by sub-license) | Trust type designed for B2B large-ticket settlement | Permitted; CASP / wallet provider needs separate EPI distributor registration |
| HKMA | Yes; KYC required at the on-ramp; no per-transaction cap stated | Yes; the primary use case is cross-border trade with Mainland anchor banks | Permitted; HKMA-licensed only |
| MAS SCS | Yes; subject to DPT-distributor KYC if offered through a DPT venue | Yes | Permitted; MAS-licensed DPT distributor required |

## Cross-regime interoperability and arbitrage windows

1. **MRA bridges as the only legal passport.** Without a bilateral MRA, a token compliant under one regime is **not** automatically compliant in another. The US-Japan MRA (signed 2026-02) allows a US-qualified USDC to be distributed in Japan via SBI VC Trade as an EPI; there is still no equivalent passport between the US and EU or the US and HK. See [[fintech/three-circles-stablecoin-mra-framework]].
2. **Reserve arbitrage.** An SG-licensed SCS issuer must hold 3-month sovereign paper rated AA−; a US-qualified issuer can hold 93-day Treasuries and demand deposits. The net-interest-margin differential is approximately 30–60  bps depending on the rate cycle, pushing high-volume USD issuers toward the US charter.
3. **Capital arbitrage.** A floor of S$1M in Singapore versus HK$25M in Hong Kong versus an effective ~$50M in an OCC charter versus €350K for an EU EMI — a four-order-of-magnitude spread. Smaller issuers gravitate toward SG/EU, scale issuers toward US/HK.
4. **Cross-border treatment gap.** US §502  and Japan's distributor model are open; the EU/HK/SG are closed. Until equivalence treaties arrive, the same token will need separate legal wrappers in each closed market.
5. **Algorithmic exclusion is universal.** UST-style designs have **no compliant path** anywhere — confirmed across all five poles. This pushes algorithmic SC capacity into unregulated chains and reinforces the bifurcation laid out in [[fintech/genius-act-501-denylist-mandate]].
6. **Wallet / VASP distribution.** Every regime requires the **distributor** (exchange, wallet, on-ramp) to hold its own license separate from the issuer license — making the [[exchanges/INDEX|exchanges]] surface the rate-limiting step for SC adoption in each jurisdiction.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/three-circles-stablecoin-mra-framework|三圆 MRA 框架]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/mica-overview|MiCA 概览]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 SC 法制度の三層構造]]
- [[fintech/japan-epi-three-types-overview|日本 EPI 三型]]
- [[fintech/hkma-stablecoin-licensing-overview|HKMA 牌照概览]]
- [[fintech/singapore-mas-payment-services-act-overview|MAS PSA + SCS 概览]]
- [[exchanges/INDEX|Exchanges]]
<!-- /wiki-links:managed -->

## Sources

- US Treasury · Digital Assets policy hub: https://home.treasury.gov/policy-issues/financial-markets-financial-institutions-and-fiscal-service/digital-assets
- OCC · Charters and licensing: https://occ.treas.gov/topics/charters-and-licensing/index-charters-and-licensing.html
- ESMA · Crypto-assets policy: https://www.esma.europa.eu/policy-activities/crypto-assets
- EBA · MiCA technical standards: https://www.eba.europa.eu/regulation-and-policy/markets-in-crypto-assets-mica
- FSA Japan · EPI / electronic payment instruments: https://www.fsa.go.jp/policy/dem_dl/index.html
- HKMA · Stablecoin Ordinance press releases: https://www.hkma.gov.hk/eng/news-and-media/press-releases/
- MAS · Payments regulation: https://www.mas.gov.sg/regulation/payments
- MAS · Digital token offering guide: https://www.mas.gov.sg/regulation/explainers/a-guide-to-digital-token-offerings
