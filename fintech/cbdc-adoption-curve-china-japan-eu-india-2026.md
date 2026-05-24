---
title: CBDC adoption curve 2026 — China e-CNY vs India eRupee vs EU digital euro vs Japan DCJPY
aliases:
  - cbdc-adoption-curve-china-japan-eu-india-2026
  - cbdc adoption curve 2026
  - cbdc cross-country comparison 2026
  - e-cny vs eRupee vs digital euro vs DCJPY
  - cbdc readiness matrix 2026
  - cbdc pilot adoption update 2026
domain: fintech
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [fintech, cbdc, e-cny, erupee, digital-euro, dcjpy, adoption, pilot-status, comparison]
status: active
sources:
  - https://www.pbc.gov.cn/en/3688110/3688172/index.html
  - https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx
  - https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html
  - https://www.boj.or.jp/en/paym/digital/index.htm
  - https://www.bis.org/publ/work1116.htm
  - https://www.bis.org/about/bisih/topics/cbdc.htm
  - https://www.decurret-dcp.com/pressrelease/
---

# CBDC adoption curve 2026 — China e-CNY vs India eRupee vs EU digital euro vs Japan DCJPY

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as the cross-jurisdictional adoption snapshot for retail / wholesale CBDC programmes in mid-2026. It complements the architecture-first lens of [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]] (which classifies designs by tiering) by sitting one layer above and asking which of the four major regimes have actually accumulated **users, transaction volume, and institutional infrastructure** versus those still in **legislative or preparation phase**. For the wholesale-CBDC cross-border lens see [[fintech/mbridge-bis-multi-cbdc-overview|mBridge 多 CBDC 跨境结算桥]] and [[fintech/bis-project-agora-overview|BIS Project Agorá]]. Per-country deep dives: [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]], [[fintech/erupee-india-pilot-status|eRupee pilot status]], [[fintech/e-euro-retail-rollout|digital euro retail rollout]], [[fintech/jp-stablecoin-dcjpy|DCJPY / ディーカレット DCP]].

> [!info] TL;DR
> By mid-2026 the four reference jurisdictions sit on **four very different points of the adoption curve**. China e-CNY reports cumulative transaction volume past the **CNY 1 trillion bar** with full retail availability in 30+ cities. India eRupee retail pilot has scaled past **millions of active users** with wholesale-CBDC inter-bank settlement live. The EU digital euro is still in **Preparation Phase** — no live retail issuance, no holding limit finalised, awaiting co-legislator approval. Japan deliberately chose a **non-CBDC** path: BoJ continues PoC for retail CBDC but the live deployment is the privately-issued tokenised-deposit DCJPY via DeCurret DCP. The structural takeaway: **adoption is not a function of technology readiness but of political mandate plus distribution channel ownership**.

## Why a four-country snapshot matters

Most CBDC commentary collapses the world into "China is ahead, EU is behind" — but the actual 2026 picture is **a four-shape distribution**, not a single curve. China runs a state-led mass-retail rollout with completed legal basis. India runs a parallel retail + wholesale dual-track tied to its existing UPI dominance ([[fintech/india-anti-dollar-dpi-alliance|India anti-dollar DPI alliance]]). The EU runs a deliberately slow, anti-disintermediation design where intermediated rollout is the explicit policy goal. Japan effectively de-facto delegated retail CBDC to the private-bank tokenised-deposit track ([[fintech/jp-stablecoin-dcjpy|DCJPY]]). Comparing them on a single "live / not-live" axis loses the most important variable — **who owns the distribution channel**.

For the geopolitics layer see [[fintech/three-circles-stablecoin-mra-framework|三圆 MRA framework]] and [[fintech/global-stablecoin-regulatory-five-pole-matrix|global stablecoin five-pole matrix]]; CBDC adoption interacts with private-stablecoin rollout because both compete for the same retail and B2B payment surface. Cross-pole architecture comparisons sit in [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]] and [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]].

## Matrix A · Programme name, regulator, legal status

| Pole | Programme | Lead authority | Legal basis | Live status (2026-05) |
|---|---|---|---|---|
| 🇨🇳 China | e-CNY (数字人民币 / DC/EP) | People's Bank of China (PBoC) | PBoC Law amendment 2020 + administrative guidance | **Live retail in 30+ cities**, fully integrated with the four state-owned commercial banks + Postal Savings + BOCom; wholesale via [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] |
| 🇮🇳 India | eRupee (Digital Rupee, e₹) | Reserve Bank of India (RBI) | RBI Act 1934 amendment via Finance Act 2022 | **Live retail pilot** in 20+ cities, **live wholesale pilot** (inter-bank G-sec settlement) since 2022-11 |
| 🇪🇺 EU | Digital euro | European Central Bank (ECB) | ECB Regulation proposal pending (EU Council + Parliament) | **Preparation Phase** since 2023-11, extended into 2026-Q4+; no live issuance |
| 🇯🇵 Japan | (Retail CBDC PoC + DCJPY tokenised deposit) | Bank of Japan (BoJ) for CBDC PoC; FSA for DCJPY | No CBDC-specific legislation passed; DCJPY operates under existing Banking Act + 電子決済等代行業 | **PoC Phase 2** ongoing (no live retail CBDC); **DCJPY** live B2B commercial use since 2024-08 |

The earliest mover is China (research from 2014, retail pilots from 2020). The latest in the pack is the EU (legislation still in trilogue). India's wholesale pilot is the **first live G-sec settlement CBDC** globally. Japan is the only G7 that chose **not** to ship a sovereign-issued retail CBDC and instead let DeCurret DCP carry the tokenised-money function through the deposit-token route — see [[fintech/jp-stablecoin-dcjpy|DCJPY]] and [[fintech/jp-stablecoin-progmat|Progmat]].

## Matrix B · Adoption metrics (most recent public)

| Pole | Cumulative tx volume | Wallets / users | Cities or geographic scope | Cross-border live |
|---|---|---|---|---|
| 🇨🇳 e-CNY | **CNY 1 trillion+** cumulative transaction value (PBoC officials cited; press conferences 2024-2025) | 180M+ personal wallets registered (PBoC working-paper estimate); active wallet count materially lower | 30+ cities including Beijing, Shanghai, Shenzhen, Suzhou, Chengdu, Xiong'an, and full provincial rollout in 6+ provinces | Yes — via [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] with HKMA / BoT / CBUAE / SAMA (and Brazil BCB integration testing 2026 H2) |
| 🇮🇳 eRupee | **CNY-equivalent ~INR 10B+** cumulative retail (RBI Annual Report 2024-2025); wholesale inter-bank tx ~daily on the G-sec settlement leg | **5M+ retail users** as of 2024 reports; 17 participating banks for retail pilot | 20+ cities across all 4 retail-pilot phases; nation-wide bank coverage on wholesale | Wholesale yes (G-sec settlement); cross-border CBDC under MoU discussion with UAE / Singapore — no live cross-border CBDC settlement yet |
| 🇪🇺 Digital euro | **0** (Preparation Phase only) | 0 retail wallets; ECB-led PSP working groups + selected technology vendors | None — no retail or merchant pilot | None |
| 🇯🇵 (DCJPY) | DCJPY: small commercial volume since 2024-08 (environmental-credit settlement first use); CBDC PoC: simulation only | DCJPY: institutional only (no retail); CBDC PoC: closed test environment | DCJPY: Tokyo + select prefectures (sponsor banks GMO Aozora / Yucho / SBI Shinsei etc.); CBDC: PoC only | Cross-border DCJPY tests via BIS / FSA technical channels; no live cross-border retail CBDC for JPY |

**Convergent line**: none. The four programmes occupy genuinely different adoption regimes. **Divergent line**: the live-retail-issuance gap is the single biggest fact — only China and India have visible retail throughput, and even China's active-wallet count is the subject of continued public dispute (see counterpoints).

## Matrix C · Architecture choice

| Pole | Tiering model | Issuer | Wallet provider | Programmability |
|---|---|---|---|---|
| 🇨🇳 e-CNY | **Two-tier** (PBoC → 10 designated operators → users); see [[fintech/cbdc-multi-tier-architecture-three-paradigms|three paradigms]] | PBoC (central bank liability) | 10 operators: 6 state commercial banks + 4 telecom / internet majors (Tencent / Ant / etc.) under a separate gateway | Limited; controllable-anonymity model; smart-contract pilots since 2023 |
| 🇮🇳 eRupee | **Two-tier** (RBI → participating banks → users) | RBI (central bank liability) | 17 participating banks + 4 payment apps via UPI interoperability bridge | Programmable money pilots since 2023 (agricultural subsidy, government cash transfers) |
| 🇪🇺 Digital euro | **Intermediated two-tier** (ECB → supervised PSPs → users); explicit anti-disintermediation by design | ECB (central bank liability) | Commercial banks and other supervised PSPs; ECB does not directly distribute | Conditional / triggered payments under discussion; not finalised |
| 🇯🇵 (DCJPY) | **Tokenised commercial-bank deposit** (not CBDC); issuer is the participating commercial bank | Commercial bank (DCJPY is a bank deposit on chain, not a PBC liability) | Same commercial bank that issued the deposit | Yes — built on the Amic Sign platform with explicit smart-contract / DvP support |

All four jurisdictions effectively converge on **preserving the commercial banking layer** — none chose a "direct-CBDC" universal account model. Japan went the furthest by choosing **not to issue** sovereign retail CBDC at all and instead enabling tokenised deposits.

## Matrix D · Holding limits and disintermediation defence

| Pole | Retail holding cap | Wholesale cap | Interest paid | Disintermediation defence |
|---|---|---|---|---|
| 🇨🇳 e-CNY | Tier-based wallet limits (low-tier ¥10K transaction cap, ¥50K balance; KYC-tier higher) | No formal cap | No | Tier limits + state-owned operator distribution preserves bank deposit base |
| 🇮🇳 eRupee | No published hard cap; daily transaction limits via app config | No formal cap | No | Programmability tied to government-cash-transfer use case (welfare) rather than savings replacement |
| 🇪🇺 Digital euro | Proposed €3,000-4,000 per person (under negotiation; not finalised); reverse-waterfall to bank account if exceeded | N/A (retail focus only); wholesale handled separately via TARGET / Eurosystem | **No interest** (explicit ECB design choice) | Holding cap + reverse-waterfall + no-interest are the three explicit anti-disintermediation measures; see [[fintech/e-euro-retail-rollout|e-euro retail rollout]] |
| 🇯🇵 (DCJPY) | N/A (DCJPY is a deposit on a bank balance sheet; covered by existing ¥10M deposit insurance per bank per depositor) | N/A | Tracks deposit-rate of issuing bank | Issuing-bank balance sheet is the disintermediation defence by construction |

The EU is **the only regime that has codified explicit limits as a design parameter** because it is the only one openly worried about runs on commercial bank deposits. China relies on operator-tier limits, India on the welfare-channel framing, Japan side-steps the question entirely by not issuing CBDC.

## Matrix E · Infrastructure readiness and distribution channel

| Pole | Wallet penetration | Merchant acceptance | Bank rails reliance | Cross-border infrastructure |
|---|---|---|---|---|
| 🇨🇳 e-CNY | App available on iOS / Android in pilot cities; integrated into existing AliPay / WeChat Pay sub-flows | Major retailers + government cash transfers + transportation; uneven outside pilot cities | High — 6 state commercial banks operate the user interface | [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] live; HKMA bridge live; Belt-and-Road project-pilot integration ongoing |
| 🇮🇳 eRupee | App from 17 participating banks; QR interoperable with UPI from 2023 | Limited (pilot merchant cohorts in 20+ cities); RBI explicit aim to widen via UPI rails | High — RBI relies on the same banks that distribute UPI | Cross-border MoU discussions only |
| 🇪🇺 Digital euro | None (no app) | None | Not yet defined; ECB consultation describes "supervised intermediaries" as the channel | None — the digital euro architecture explicitly defers cross-border to bilateral arrangements after retail launch |
| 🇯🇵 (DCJPY) | Institutional users only (no retail wallet) | Institutional only — environmental credit, ST DvP settlement, B2B invoice flows | Banks issue and host directly | International outreach via BIS / Money 20/20 Asia panels but no live cross-border DCJPY |

**Distribution-channel ownership is the binding constraint**. In China the PBoC has direct authority to mandate the 10 operators to ship. In India RBI piggybacked on UPI's distribution. In the EU the legal framework requires using existing PSPs but those PSPs have weak commercial incentive to push. In Japan there is no sovereign CBDC distribution problem because there is no sovereign CBDC.

## Matrix F · Political intent and pace

| Pole | Political mandate | Pace driver | Pace blocker |
|---|---|---|---|
| 🇨🇳 e-CNY | Strong — State Council and PBoC | State directive + integration with broader digital-yuan-Belt-and-Road framing | Mass-retail adoption competes with WeChat Pay / AliPay which already cover ~95% of digital payments |
| 🇮🇳 eRupee | Medium — RBI ahead of Finance Ministry; positioned as complement to UPI | RBI institutional commitment + programmable-money welfare use case | UPI's dominance means consumers see no marginal benefit from eRupee at the wallet level |
| 🇪🇺 Digital euro | Medium-low — ECB pushing; Council and Parliament moving slowly; commercial banks lobbying for tight holding caps | ECB executive board public commitment | Co-legislative process; bank lobby; lack of merchant or consumer pull |
| 🇯🇵 (DCJPY) | Low (for CBDC); high (for tokenised-deposit private rails) | Cross-industry consortium pull (Digital Currency Forum 100+ participants) | BoJ explicit caution on retail CBDC; preference for private-sector-led tokenised money |

The political signal from Japan is the most distinctive in the four-pole set: a **G7 central bank that explicitly delegated** the retail digital-money rail to private-sector tokenised deposits is the most direct counter-example to the assumption that "every major economy is racing for retail CBDC." See [[fintech/japan-stablecoin-regulatory-landscape|日本 SC 法制度三層構造]].

## Adoption curve plot (2026-05)

```
Active retail use     │
                      │   e-CNY                                            ★
                      │   ────────                                         │
   logarithmic axis   │              eRupee
                      │              ────────                              │
                      │                                                    │
                      │                                                   ▲│
                      │                                          DCJPY (B2B only — no retail)
                      │                                                    │
                      │                                                    │
                      │                                                    │
                      │                                Digital euro (Preparation Phase — pre-issuance)
                      │   ─────────────────────────────────────────────────│
                      └────────────────────────────────────────────────────►
                          Research → PoC → Pilot → Live (limited) → Live (broad)
```

(Schematic; the digital euro is genuinely **off the live segment** of the curve, while DCJPY sits on a separate non-CBDC curve.)

## Origin and evolution

```
2014        PBoC e-CNY research begins (first major-economy CBDC research project)
2017        ECB / BIS / IMF papers establish "two-tier vs direct" CBDC dichotomy
2020-04     PBoC e-CNY pilot launches in 4 cities (Shenzhen / Suzhou / Xiong'an / Chengdu)
2020-10     BoJ Liaison Committee on CBDC begins PoC Phase 1
2022-04     PBoC e-CNY pilot expands to 23 cities + multi-province
2022-11     RBI wholesale eRupee pilot launches (inter-bank G-sec settlement)
2022-12     RBI retail eRupee pilot launches in 4 cities
2023-10     ECB digital euro Investigation Phase concludes; Preparation Phase begins 2023-11
2024-03     HKMA Project Ensemble launches (tokenised-deposit sandbox)
2024-04     BIS Project Agorá launches (7 G10 central banks + 40+ commercial banks)
2024-08     DCJPY first commercial use (environmental-credit settlement, IIJ)
2024-10     BIS exits mBridge governance; technology transferred to PBoC + HKMA + BoT + CBUAE
2025-06     ECB digital euro Regulation proposal in EU Council + Parliament trilogue
2025-09     mBridge enters commercial operation phase (from MVP)
2026-Q1     India RBI wholesale CBDC ↔ retail CBDC interoperability tests
2026-Q2     mBridge ↔ Brazil DREX integration testing begins
2026-04     DCJPY tokenised-deposit inter-bank RTGS adopted into FSA FinTech Sandbox
2026-05-21  HKMA issues first stablecoin licenses (HSBC + Anchorpoint) — not CBDC but creates competitive context
```

**Pattern**: the four jurisdictions made their major architecture commitments by 2023, and the 2024-2026 window is spent on **deployment-channel execution**. The countries that pre-committed to a distribution channel (China via the 10 operators, India via UPI banks) shipped; the countries that left the channel to legislative or market negotiation (EU, Japan) are slower or chose not to issue at all.

## Comparison to private stablecoin and tokenised deposit competition

CBDC adoption is not happening in isolation. The same use cases are being claimed by:

- **Private USD-pegged stablecoins**: USDC / USDT / PYUSD / RLUSD / USDB / USD1 — covered in [[fintech/global-stablecoin-regulatory-five-pole-matrix|global stablecoin five-pole matrix]] and [[fintech/three-circles-stablecoin-mra-framework|三圆 MRA framework]]
- **Tokenised commercial-bank deposits**: JPMorgan JPMD, Citi Token Services, [[fintech/jp-stablecoin-dcjpy|DCJPY]], HKMA Project Ensemble participants
- **JPY-pegged regulated stablecoins**: JPYC, MUFG Progmat, SBI VC Trade USDC distribution
- **HKMA-licensed stablecoins**: HSBC (HKD/USD), Standard Chartered Anchorpoint (HKD/USD) — first batch 2026-05-21; see [[fintech/hkma-stablecoin-licensing-overview|HKMA SC licensing overview]]
- **Sovereign-currency tokenised deposits from BIS Project Agorá** (7 G10 central banks + 40+ banks)

The CBDC adoption curve **cannot be read in a vacuum** — it has to be cross-read with whether the same jurisdiction has a competing private rail. China deliberately squeezes private alternatives (no Tether, no USDC), so the e-CNY runway is uncontested. The EU keeps a tight MiCA EMT regime that funnels traffic into ECB-supervised intermediaries, so the digital euro will share rails with EU MiCA-licensed EMTs. Japan deliberately created the EPI three-type framework so private stablecoins (JPYC / Progmat / DCJPY) own the tokenised-money surface — and the BoJ CBDC PoC reflects that reality. India is the only case where the central bank is **both** running the CBDC and trying to keep UPI dominant.

## Counterpoints

- The widely-cited "**e-CNY cumulative CNY 1 trillion+**" headline is **cumulative** transaction value, not **active stock**. Independent observers note that **active monthly wallet count is materially smaller** than the registered-wallet headline (180M+), with daily-active estimates in the single-digit-million range. The same caveat applies to "30+ cities" — coverage is highly uneven outside the original 4 pilot cities.
- The "**India eRupee 5M+ users**" figure is from 2024 reporting; 2025-2026 growth has slowed because UPI captures the same use cases at scale (~22B+ monthly transactions per NPCI public data).
- The "**digital euro is way behind**" framing is partially misleading — the ECB explicitly chose a **slow, intermediated, anti-disintermediation** design as a policy preference, not a technical limitation. The EU position is that retail CBDC must not blow up bank deposit funding (€18T+); the slow timeline is the trade-off.
- The "**Japan delegated CBDC to private rails**" framing risks overstating Japan's commitment to DCJPY as a CBDC substitute. DCJPY is a **tokenised commercial-bank deposit**, not a central-bank liability; legally it is bank money, not central-bank money. The BoJ retains optionality to issue a retail CBDC later.
- All four programmes are **subject to revision** between 2026 and 2028 — Indian Finance Ministry sentiment on retail CBDC has visibly cooled, EU trilogue could re-open holding-limit clauses, China could add programmability layers, Japan could re-start a retail-CBDC PoC.

## Open questions

- Does the e-CNY active-wallet count stop being a state secret in 2026-2027, and if so does it confirm a sub-10% active rate?
- Does RBI quietly de-prioritise retail eRupee in favour of wholesale + programmable government payments?
- Does the EU Council adopt the digital euro Regulation before the next ECB executive-board rotation, and at what holding cap?
- Does the BoJ launch a Phase-3 retail CBDC PoC that materially differs from DCJPY, or does it formally cede the retail rail?
- Do mBridge and Project Agorá technically interoperate after Brazil joins mBridge, creating a single cross-border wholesale-CBDC settlement environment?
- Does the divergence between fast-mover China and slow-mover EU widen into a structural competitive issue for the euro's international role?
- How does the [[fintech/central-banking-function-unbundling|central-banking-function-unbundling]] thesis (Unit of Account stays sovereign, the other four functions get unbundled) map onto each of the four CBDC programmes?

## Related

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS 多 CBDC 跨境结算桥]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/bis-project-agora-vs-mbridge|Agorá vs mBridge]]
- [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]]
- [[fintech/bis-project-guardian-overview|MAS Project Guardian]]
- [[fintech/india-anti-dollar-dpi-alliance|印度反美元 DPI 联盟]]
- [[fintech/jp-stablecoin-dcjpy|DCJPY / ディーカレット DCP]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 SC 法制度三層構造]]
- [[fintech/hkma-stablecoin-licensing-overview|HKMA Stablecoin Licensing Overview]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|global stablecoin five-pole matrix]]
- [[fintech/central-banking-function-unbundling|央行职能解体五层]]
- [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]]
- [[fintech/erupee-india-pilot-status|eRupee India pilot status]]
- [[fintech/e-euro-retail-rollout|digital euro retail rollout]]

## Sources

- People's Bank of China — Working papers and digital-yuan public communications: https://www.pbc.gov.cn/en/3688110/3688172/index.html
- PBoC working paper on the progress of e-CNY R&D in China (2021 / updated 2023-2024)
- Reserve Bank of India — Concept Note on Central Bank Digital Currency (October 2022): https://www.rbi.org.in/Scripts/PublicationReportDetails.aspx?ID=1218
- RBI Press Releases on retail and wholesale CBDC pilots (2022-11, 2022-12, 2024 Annual Report): https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx
- European Central Bank — Digital euro project page and Preparation Phase progress reports: https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html
- ECB Governing Council statements on digital euro Preparation Phase (2023-11 launch; 2024 / 2025 progress updates)
- European Commission — Proposal for a Regulation establishing the digital euro (June 2023)
- Bank of Japan — Approach to Central Bank Digital Currency and PoC Phase 1/2 reports: https://www.boj.or.jp/en/paym/digital/index.htm
- DeCurret DCP press releases (2024-08 commercial launch; 2026-04-03 FinTech Sandbox adoption; 2026-04-24 ST DvP test): https://www.decurret-dcp.com/pressrelease/
- BIS Innovation Hub — CBDC topic landing page and mBridge / Agorá public materials: https://www.bis.org/about/bisih/topics/cbdc.htm
- BIS Working Paper No. 1116 "The next-generation monetary system — a blueprint" (2024 series)
- HKMA — Project Ensemble + Stablecoin Ordinance press releases: https://www.hkma.gov.hk/eng/news-and-media/press-releases/
