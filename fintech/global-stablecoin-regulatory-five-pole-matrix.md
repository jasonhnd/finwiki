---
title: グローバル・ステーブルコイン規制 五極比較マトリクス（US GENIUS / EU MiCA / 日本 EPI / HK / SG）
aliases:
  - global-stablecoin-regulatory-five-pole-matrix
  - five-pole stablecoin matrix
  - stablecoin global comparison
  - GENIUS vs MiCA vs EPI vs HKMA vs MAS
domain: fintech
created: 2026-05-24
last_updated: 2026-05-24
last_tended: 2026-05-24
review_by: 2026-11-20
confidence: likely
tags: [fintech, stablecoin, regulation, comparison, GENIUS, MiCA, EPI, HKMA, MAS, matrix]
status: active
sources:
  - "https://home.treasury.gov/policy-issues/financial-markets-financial-institutions-and-fiscal-service/digital-assets"
  - "https://occ.treas.gov/topics/charters-and-licensing/index-charters-and-licensing.html"
  - "https://www.esma.europa.eu/policy-activities/crypto-assets"
  - "https://www.eba.europa.eu/regulation-and-policy/markets-in-crypto-assets-mica"
  - "https://www.fsa.go.jp/policy/dem_dl/index.html"
  - "https://www.hkma.gov.hk/eng/news-and-media/press-releases/"
  - "https://www.mas.gov.sg/regulation/payments"
  - "https://www.mas.gov.sg/regulation/explainers/a-guide-to-digital-token-offerings"
---

# グローバル・ステーブルコイン規制 五極比較マトリクス

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] and is the cross-jurisdictional matrix view that sits above the per-regime overviews. It complements the geopolitical lens of [[fintech/three-circles-stablecoin-mra-framework]] (which collapses the world into three MRA circles), by instead enumerating **all five active stablecoin licensing regimes** on a feature-by-feature basis so a counsel or treasury team can pick a jurisdiction matrix-wise rather than narratively. For VASP / on-ramp adjacency see [[exchanges/INDEX|exchanges]].

> [!info] TL;DR
> By 2026-05 there are **five operational stablecoin licensing regimes** worldwide — US GENIUS Act, EU MiCA (EMT/ART), Japan EPI three-type, HKMA Stablecoin Ordinance, and MAS PSA + SCS — and they have **converged on roughly five non-negotiable principles** (1:1 reserves in cash / short sovereign paper, segregated custody, monthly attestation, mandatory legal redemption right, algorithmic SC ban) while **diverging materially** on (a) permitted issuer types, (b) cross-border / third-country access, (c) capital thresholds, and (d) reserve composition fine print. The result is a **regulatory arbitrage window of 18–24 months** before MRA passporting closes the gaps.

## Why a five-pole comparison

The single-issuer narrative ("USDC dominates everywhere") is incorrect once you cross the Atlantic or Pacific. A US-qualified payment stablecoin issued under GENIUS does not automatically get EU EMT status, JP EPI listing, HK issuer license, or SG SCS recognition. Each regime applies its own reserve, governance, capital, redemption, and AML/CFT rules — and the **same USD-pegged token** can hold five different legal classifications depending on which entity issues it and where it is offered. The matrix below is the working surface for that reality. For the per-pole deep dives see [[fintech/genius-act-501-denylist-mandate]] (US), [[fintech/mica-overview]] (EU), [[fintech/japan-stablecoin-regulatory-landscape]] (JP), [[fintech/hkma-stablecoin-licensing-overview]] (HK), [[fintech/singapore-mas-payment-services-act-overview]] (SG).

## Matrix A · Statute, regulator, dates

| Pole | Statute | Lead regulator | Effective | Transition window |
|---|---|---|---|---|
| 🇺🇸 US GENIUS | Payment Stablecoin Act (GENIUS) | OCC + Federal Reserve + state regulators (dual-track) | Signed 2025-07, rule-finalization 2026-H2 | 18 months for non-compliant issuers to exit US market |
| 🇪🇺 EU MiCA | Regulation (EU) 2023/1114 | EBA (significant) + ESMA + national NCAs | SC parts in force 2024-06-30; full MiCA 2024-12-30 | 18 months grandfathering ended 2026-07 |
| 🇯🇵 Japan EPI | 改正資金決済法 (PSA 2022 revision) | FSA + 関東財務局 + 信託業界協会 | In force 2023-06-01 | No transition — new regime built around three new license types |
| 🇭🇰 HK | Stablecoin Ordinance (Cap. 656) | HKMA | In force 2025-08-01; first licenses 2026-05-21 | 6-month sandbox-to-license bridge for existing sandbox participants |
| 🇸🇬 SG | PS Act 2019 + SCS Framework 2023-08 + DTSP Regime 2024-04 | MAS | PSA 2020-01; SCS Aug 2023; DTSP Apr 2024 | DTSP grandfathering closed 2025-06 |

The earliest mover is Japan (2023-06), the latest live regime is HKMA (2025-08), and the most institutionally weighty is GENIUS (2025-07). MiCA is the only regime drafted as a single 400-page regulation rather than a license category bolted onto a payments act.

## Matrix B · Scope and excluded designs

| Pole | Pegged currency scope | Algorithmic SC | Multi-asset baskets | Bearer / unregistered |
|---|---|---|---|---|
| US GENIUS | USD only (payment stablecoin) | ❌ Banned | ❌ Out of scope (treated as commodity / security) | ❌ |
| EU MiCA | Any single fiat (EMT) or multi-asset / multi-fiat (ART) | ❌ Banned (Art. 19) | ✅ ART category exists but adoption near-zero | ❌ |
| Japan EPI | JPY + foreign fiat (USD via SBI Circle) | ❌ Implicitly banned (must be redeemable at face) | ❌ Not contemplated | ❌ |
| HKMA | Any single fiat (HKD + USD primary) | ❌ Banned | ❌ Out of scope | ❌ |
| MAS SCS | SGD + any G10 single fiat | ❌ Banned | ❌ Out of scope (governed by DPT only, not SCS) | ❌ |

**Convergent line**: **all five poles ban algorithmic stablecoins** as a direct response to the May-2022 UST collapse. **Divergent line**: only MiCA created a multi-asset class (ART) and it has essentially failed in market — no large ART issuer has materialized, confirming the same regulation-shapes-product dynamic visible in [[fintech/genius-act-501-denylist-mandate]].

## Matrix C · Permitted issuer types

| Pole | Issuer types allowed |
|---|---|
| US GENIUS | (a) Federally-qualified payment stablecoin issuer (OCC charter), (b) state-qualified issuer ≤ $10B circulation, (c) bank subsidiary |
| EU MiCA | (a) Credit institution (EU bank), (b) authorized e-money institution (EMI) for EMT, (c) authorized ART issuer (separate license) |
| Japan EPI | (a) 信託型 (trust bank as issuer), (b) 銀行型 (bank as issuer), (c) 資金移動業者型 (registered funds-transfer operator) |
| HKMA | (a) HK-incorporated stablecoin issuer (new dedicated license), no piggybacking on existing bank license |
| MAS SCS | (a) MAS-licensed SCS issuer (dedicated category under PS Act), must be Singapore-incorporated with local management |

**Convergent line**: every pole now recognizes a **dedicated stablecoin issuer license** (rather than only allowing banks). **Divergent line**: only Japan splits the issuer category into three distinct legal forms (trust / bank / funds-transfer) with materially different operating envelopes — see [[fintech/japan-epi-three-types-overview]] for the trust-vs-bank-vs-funds-transfer split.

## Matrix D · Reserve composition, redemption, capital

| Pole | Reserve composition | Redemption right | Capital / liquidity minimum |
|---|---|---|---|
| US GENIUS | 100% in (i) US currency, (ii) demand deposits at insured depository, (iii) ≤ 93-day Treasuries, (iv) reverse-repo backed by Treasuries | Mandatory at par, T+1 by statute | Determined by primary federal regulator; OCC charter ~ $50M floor |
| EU MiCA | EMT: 30%+ in EU bank deposits (or 60% for significant EMT) + balance in HQLA; segregated, bankruptcy-remote | Mandatory at par, T+1 (Art. 39) | EMI minimum capital €350K + own-funds requirement scaling with circulation |
| Japan EPI | Trust-type: 100% trust segregation; Bank-type: tied to bank BS + deposit insurance up to ¥10M; Funds-transfer: full segregation via deposit / bond | Mandatory at face value, T+0/T+1 per type | Trust ≥ ¥100M paid-in; Bank: banking-law capital adequacy; Funds-transfer ¥10M + per-tx ceiling |
| HKMA | 100% in HKD / USD short Treasuries, central-bank reserves, and segregated bank deposits; daily marking-to-market | Mandatory at par, T+1; rejection grounds limited to AML | Paid-in capital ≥ HK$25M, additionally ≥ 2% of issued SC value as on-going capital |
| MAS SCS | 100% in cash, cash equivalents, or ≤ 3-month sovereign debt rated AA−; held in segregated custody at MAS-approved entities | Mandatory at par, redemption within 5 business days | Base capital ≥ S$1M and higher of S$1M or 50% of annual OpEx |

The **most stringent** reserve regime is **MAS SCS** (3-month sovereign, AA− floor, daily attestation), the **most permissive** is **US GENIUS** (allows demand deposits at depository institutions and reverse-repo). EU MiCA is the only regime that mandates a **fixed share** of reserves at EU banks regardless of credit quality, which has the side-effect of subsidizing EU banks at the expense of issuer NIM.

## Matrix E · Cross-border and third-country access

| Pole | Foreign issuer access | Third-country regime |
|---|---|---|
| US GENIUS | Only via US-domiciled qualified issuer or by Treasury-recognized "comparable foreign regulator" route (§502) | "Comparable foreign regulator" list controlled by Treasury; MRA-driven; Japan signed 2026-02, EU signed 2026-Q3 expected |
| EU MiCA | Foreign EMT issuer must establish EU CRR credit institution or EMI; no passive marketing carve-out | Third-country offers prohibited unless reverse-solicitation; no equivalence regime built into MiCA Level 1 |
| Japan EPI | Foreign SC distributed only via licensed EPI service provider (e.g. SBI VC Trade for USDC); foreign issuer cannot offer direct | Distributor model + bilateral MRA (US-Japan MRA 2026-02) |
| HKMA | Foreign-anchor SC (e.g. USD-pegged) must be issued by HK-licensed local entity; offshore branches not accepted | No third-country equivalence; bilateral MoUs only |
| MAS SCS | Foreign issuer must incorporate Singapore subsidiary and obtain SCS license; existing DPT license does not auto-upgrade | DTSP regime closes the "Singapore hub serves global customers" loophole; no equivalence regime |

This is the **single largest divergence**. The US created a deliberate equivalence on-ramp (§502 + MRA); the EU built a closed garden with reverse-solicitation as the only escape valve; Japan uses the distributor model; HK and SG both require local incorporation. The 18-month arbitrage window mentioned in the TL;DR comes from the time lag between bilateral MRAs being signed (2026–2027) and being fully operational (2027–2028).

## Matrix F · Disclosure, audit, AML, resolution

| Pole | Attestation cadence | AML/CFT | Resolution regime |
|---|---|---|---|
| US GENIUS | Monthly reserve composition + annual financial-statement audit; CEO/CFO certification | BSA, OFAC SDN screening, Travel Rule via FinCEN | FDIC-style receivership for state-qualified issuers; federal issuers wound down via OCC |
| EU MiCA | Monthly reserve attestation + quarterly disclosures + annual audit; white paper + on-going reporting to NCA | AMLD6 + Transfer-of-Funds Reg (Travel Rule) + EU sanctions | Bank Recovery & Resolution Directive (BRRD) extended to significant EMT issuers |
| Japan EPI | Monthly reserve disclosure (trust-type via 信託業協会); annual audited financials | 犯罪収益移転防止法 (AML) + Travel Rule via 業界協会 + 経産省 sanctions | 信託業法 (trust segregation) ensures holder priority; banking-law resolution for bank-type |
| HKMA | Monthly reserve attestation by independent auditor; quarterly public disclosure | AMLO + JFIU + UN/HKMA sanctions screening; Travel Rule applied to issuer flows | HK Financial Institutions (Resolution) Ordinance applies; issuer-specific recovery plan mandatory |
| MAS SCS | Daily reserve disclosure + monthly third-party attestation; annual audit | PS Act AML + MAS Notice PSN02 + Travel Rule + UN/MAS sanctions | Issuer-specific recovery and resolution plan; MAS receivership powers |

MAS is uniquely strict on **daily** disclosure. All five poles converged on **monthly third-party attestation** as the floor and **Travel Rule + sanctions screening** as required AML controls. Resolution regimes are still fragmented — only EU and HK have explicitly extended bank-resolution machinery to SC issuers.

## Matrix G · Permitted use, distribution, interoperability

| Pole | Retail use | Wholesale / institutional | Embedded wallet distribution |
|---|---|---|---|
| US GENIUS | Yes, no per-tx ceiling; payment use intended | Yes, including DvP and tokenized deposits | Permitted; OCC-supervised |
| EU MiCA | Yes for EMT; significant EMT (>€5B) faces additional caps on transaction volume | Yes; ART used mostly for tokenized funds | Permitted but EU-licensed wallet operator only |
| Japan EPI | Yes; 資金移動業者型 capped ~¥1M per transaction (partial cap by sub-license) | 信託型 designed for B2B large-ticket | Permitted; CASP / wallet provider needs separate EPI distributor registration |
| HKMA | Yes; KYC required at on-ramp; no per-tx cap stated | Yes; primary use case is cross-border trade with Mainland anchor banks | Permitted; HKMA-licensed only |
| MAS SCS | Yes; subject to DPT-distributor KYC if offered via DPT venue | Yes | Permitted; MAS-licensed DPT distributor needed |

## Cross-regime interoperability and arbitrage windows

1. **MRA bridges as the only legal passport.** Without a bilateral MRA, a token compliant under one regime is **not** automatically compliant in another. The US-Japan MRA (signed 2026-02) lets a US-qualified USDC be distributed in Japan via SBI VC Trade as an EPI; no equivalent passport exists yet between US and EU or US and HK. See [[fintech/three-circles-stablecoin-mra-framework]].
2. **Reserve arbitrage.** A SG-licensed SCS issuer must hold 3-month sovereign paper at AA−; a US-qualified issuer can hold 93-day Treasuries and demand deposits. Net interest margin differential ≈ 30–60 bps depending on rate cycle, biasing high-volume USD issuers to the US charter.
3. **Capital arbitrage.** S$1M floor in Singapore vs. HK$25M in Hong Kong vs. effective ~$50M in OCC charter vs. €350K in EU EMI — a four-order-of-magnitude spread. Smaller issuers gravitate to SG/EU, scale issuers to US/HK.
4. **Cross-border treatment gap.** US §502 and Japan distributor model are open; EU/HK/SG are closed. Until equivalence treaties land, the same token will require separate legal wrappers in each closed market.
5. **Algorithmic exclusion is universal.** UST-style designs have **no compliant path** anywhere — confirmed across all five poles. This forces algorithmic SC capacity into unregulated chains and reinforces the bifurcation laid out in [[fintech/genius-act-501-denylist-mandate]].
6. **Wallet / VASP distribution.** Every regime requires the **distributor** (exchange, wallet, on-ramp) to hold its own license separate from the issuer license — making the [[exchanges/INDEX|exchanges]] surface the rate-limiting step for SC adoption in each jurisdiction.

## Open questions

- Will the US §502 "comparable regulator" list extend beyond Japan + EU to include HK and SG by end-2027?
- Will MiCA Level 2/3 technical standards effectively close the EU to non-EU stablecoins, or carve out US issuers under the upcoming MRA?
- Will Japan's 改正資金決済法 second revision lift the ¥1M per-tx cap on funds-transfer-type issuers to remain competitive with HK/SG?
- Will HKMA's "low political risk" issuer preference (HSBC + Anchorpoint first) hold when Mainland-backed applicants (蚂蚁国际, 京东 JD-HKD, BOCHK) re-apply in 2026-Q4?
- Will MAS's daily attestation requirement become the global floor by 2028?

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
- FSA Japan · EPI / 電子決済手段: https://www.fsa.go.jp/policy/dem_dl/index.html
- HKMA · Stablecoin Ordinance press releases: https://www.hkma.gov.hk/eng/news-and-media/press-releases/
- MAS · Payments regulation: https://www.mas.gov.sg/regulation/payments
- MAS · Digital token offering guide: https://www.mas.gov.sg/regulation/explainers/a-guide-to-digital-token-offerings
