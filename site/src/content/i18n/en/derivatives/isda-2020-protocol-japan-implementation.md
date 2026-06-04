---
source: derivatives/isda-2020-protocol-japan-implementation
source_hash: 5f6805e07b1bfd59
lang: en
status: machine
fidelity: ok
title: "ISDA 2020 IBOR Fallback Protocol — Japan implementation (TIBOR / TONA / JPY LIBOR)"
translated_at: 2026-05-31T03:19:56.389Z
---

# ISDA 2020 IBOR Fallback Protocol — Japan implementation (TIBOR / TONA / JPY LIBOR)

## TL;DR

The **ISDA 2020 IBOR Fallback Protocol** (formally "ISDA 2020 IBOR Fallbacks Protocol," published October 2020, effective from 25 January 2021) is the multilateral contractual mechanism through which **legacy IBOR-referencing derivatives — including JPY LIBOR — were automatically amended to incorporate risk-free-rate (RFR) fallback language** without bilateral negotiation. For Japan, the protocol's central impact was the **JPY LIBOR cessation on 31 December 2021** (with synthetic JPY LIBOR phase-out completed by end-2023) — adhering parties' bilateral JPY LIBOR derivatives automatically converted to **TONA-compounded-in-arrears plus a fixed credit-adjustment spread (CAS)** at the cessation date. Japanese market adherence was high — the megabanks ([[megabanks/mufg|MUFG]], [[megabanks/smfg|SMFG]], [[megabanks/mizuho-fg|Mizuho FG]]), [[securities-firms/nomura-hd|Nomura]], life insurers, and major buy-side institutions all adhered, totalling >500 adhering parties from Japan alone. The protocol does **not** automatically convert TIBOR (which continued to be administered by [[financial-regulators/jsda|JSDA]]-affiliated JBATA after the Euroyen TIBOR / Z-TIBOR discontinuation in December 2024) — TIBOR contracts that need fallback to TONA require separate amendment. The **JSDA-led 2024 documentation update** modernised standard Japan-market derivative documentation templates to reflect post-LIBOR conventions, TONA-RFR clauses, and the residual TIBOR fallback architecture. For FinWiki, this entry covers protocol mechanics, JPY-specific fallback rates (CAS, observation shift), Japanese market adherence patterns, the post-LIBOR JPY discontinuation timeline, and the JSDA 2024 documentation update.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] as the **ISDA fallback protocol Japan implementation** node. Read against [[derivatives/japan-irs-market|Japan yen interest-rate swap market]] for the underlying IRS context, [[derivatives/ois-tona-curve|OIS TONA curve and JPY discounting]] for the post-LIBOR RFR architecture, [[derivatives/otc-clearing-jp-trade-repository|OTC clearing Japan trade repository]] for the cleared-derivative-side implementation, and [[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]] for the cross-currency fallback overlay. System anchor: [[money-market/INDEX|money-market index]] for the BoJ-administered TONA cash market mechanism. Regulatory anchor: [[banking/INDEX|banking index]] for FSA / BoJ supervisory context.

## 1. The ISDA 2020 Protocol — what it is

| Element | Detail |
|---|---|
| Publisher | International Swaps and Derivatives Association (ISDA) |
| Publication date | 23 October 2020 |
| Effective date | 25 January 2021 |
| Amends | ISDA Master Agreements and certain other ISDA documentation |
| Type | Multilateral adherence (each party adheres once; all bilateral covered relationships amend automatically) |
| Scope of covered transactions | New transactions after 25 January 2021 (incorporated via 2021 IBOR Fallbacks Supplement); existing transactions with adhering counterparties (amended via protocol adherence) |
| Cost | No fee for adherence |
| Adherence mechanism | Online via ISDA portal; one-time submission per legal entity |

The protocol is the **multilateral cure** for the bilateral negotiation problem — without it, every market participant would have had to amend every IBOR-referencing derivative bilaterally before LIBOR cessation, which was operationally impossible at industry scale.

## 2. The fallback rate architecture

When a covered IBOR (USD LIBOR, EUR LIBOR, GBP LIBOR, JPY LIBOR, CHF LIBOR, JPY TIBOR, etc.) experiences a designated "trigger event" (typically cessation announcement by the administrator), the protocol provides:

| Component | Description |
|---|---|
| Replacement rate | The currency-specific RFR (TONA for JPY, SOFR for USD, ESTR for EUR, SONIA for GBP, SARON for CHF) |
| Compounding methodology | Compounded-in-arrears observation across the same tenor period |
| Observation shift | 2-business-day backward observation shift (i.e., observation period starts 2 days before payment period starts) |
| Credit-adjustment spread (CAS) | A fixed spread (per tenor) added to the RFR to compensate for IBOR's credit-bank-funding premium |
| Effective date of fallback | The IBOR cessation date (e.g., 1 January 2022 for JPY LIBOR, since 31 December 2021 was the last LIBOR setting) |

The CAS is the **economic-equivalence adjustment** — since RFRs are risk-free and IBORs included a credit premium, the CAS approximates the historical IBOR-RFR median spread.

## 3. JPY LIBOR fallback specifics

| JPY LIBOR tenor | Replacement | CAS (bp, fixed at LIBOR cessation announcement date) |
|---|---|---|
| Overnight | TONA | ~ -1.8 bp (small negative — overnight LIBOR was below TONA) |
| 1-week | Compounded TONA (1-week, 2-day observation shift) | ~ -1.5 bp |
| 1-month | Compounded TONA (1-month, 2-day observation shift) | ~ -0.2 bp |
| 2-month | Compounded TONA | Median spread |
| 3-month | Compounded TONA (3-month, 2-day observation shift) | ~ +0.8 bp (positive — 3M LIBOR carried credit premium) |
| 6-month | Compounded TONA | ~ +5.8 bp |
| 12-month | Compounded TONA | ~ +16.6 bp |

(These CAS values are **fixed permanently** at the cessation announcement date — they don't change after. They reflect the 5-year median observed JPY LIBOR – RFR spread as of March 2021 when the cessation announcement was made by UK FCA.)

For a legacy JPY LIBOR derivative converted via the protocol, the floating leg post-cessation pays **TONA compounded over the equivalent period + the tenor-specific CAS**. The economic intent is for the converted derivative to behave like the original IBOR derivative, on average over time.

## 4. JPY LIBOR cessation timeline — the operational events

| Date | Event |
|---|---|
| 5 March 2021 | UK FCA confirmed JPY LIBOR (and other LIBORs) cessation dates; CAS spreads fixed permanently |
| 23 October 2020 | ISDA 2020 IBOR Fallbacks Protocol published |
| 25 January 2021 | Protocol effective date; adherence begins |
| Throughout 2021 | Japanese institutions adhere; new JPY derivative business shifts to TONA |
| 31 December 2021 | JPY LIBOR (1W, 1M, 2M, 3M, 6M, 12M) ceased on representative basis |
| 1 January 2022 | Adhering parties' legacy JPY LIBOR derivatives automatically converted to TONA + CAS |
| Throughout 2022 | Synthetic JPY LIBOR (1M, 3M, 6M only) administered by UK FCA as transitional bridge for legacy contracts |
| 30 June 2023 | Synthetic JPY LIBOR ceased |
| End-2023 | All JPY LIBOR-referencing derivatives migrated to TONA or equivalent RFR |

## 5. TIBOR — the JPY rate that survived

Unlike LIBOR, **TIBOR (Tokyo Interbank Offered Rate)** continued past LIBOR cessation:

| TIBOR type | Status | Administered by |
|---|---|---|
| **D-TIBOR (Domestic TIBOR)** | Active | JBATA (Japanese Bankers Association TIBOR Administration) |
| **Z-TIBOR (Euroyen TIBOR)** | Discontinued December 2024 | Previously JBATA; cessation reflected lower usage and consolidation |
| **JPY LIBOR** | Ceased end-2021 (synthetic phase-out 2023) | Was administered by ICE Benchmark Administration |

D-TIBOR continues to be used for:
- Term-fix JPY loans where lenders want a forward-looking term rate (not a backward-looking compounded RFR)
- Some legacy IRS that reference TIBOR rather than LIBOR
- New structured products requiring term-rate references

D-TIBOR is **not covered by the ISDA 2020 Protocol** in the same way as LIBOR — it's not slated for cessation, so derivatives referencing D-TIBOR continue to use it as-is. If D-TIBOR were to be discontinued in the future, separate fallback architecture would be needed (and JSDA has been preparing standard fallback language for that scenario; see section 7).

## 6. Japanese market adherence

Adherence to the ISDA 2020 Protocol was **very high** in Japan, reflecting the operational necessity:

| Adhering category | Adherence pattern |
|---|---|
| Megabanks ([[megabanks/mufg|MUFG]], [[megabanks/smfg|SMFG]], [[megabanks/mizuho-fg|Mizuho FG]]) | All adhered before cessation |
| Securities firms ([[securities-firms/nomura-hd|Nomura]], Daiwa, [[securities-firms/mufg-securities|MUFG MS]], [[securities-firms/smbc-nikko|SMBC Nikko]], [[securities-firms/mizuho-securities|Mizuho Securities]]) | All adhered |
| Life insurers (Nippon Life, Dai-ichi Life, Sumitomo Life, etc.) | Substantially all adhered |
| Regional banks | Major regional banks adhered; some smaller regional banks took longer |
| Buy-side institutions | Pension funds, asset managers — broadly adhered |
| Corporates (non-financial) | Larger corporates with derivative books adhered; many smaller corporates without LIBOR-derivative exposure didn't need to |
| Foreign banks in Japan | Adhered (through parent or local entity) |

Total Japanese adhering legal entities: 500+ (out of ~16,000 global adhering entities). FSA actively monitored adherence among regulated entities and supported industry-wide adoption.

For non-adhering counterparties, **bilateral amendments** were required. The vast majority of bilateral JPY LIBOR exposures were covered by protocol or bilateral by end-2021.

## 7. The JSDA 2024 documentation update

In 2024, [[financial-regulators/jsda|JSDA]] (Japan Securities Dealers Association) led a comprehensive update of standard Japan-market derivative documentation templates:

| Element | Pre-2024 | Post-2024 update |
|---|---|---|
| Floating rate definitions | Often referenced JPY LIBOR + TIBOR alternatives | TONA-compounded primary; TIBOR clauses retained for products requiring term-rate |
| Fallback architecture | LIBOR cessation language was provisional (added in 2018–2019 supplements) | Standardised TONA-fallback language consistent with ISDA 2020 Protocol; TIBOR-fallback language standardised |
| Day-count and observation shift | Mixed conventions | Standardised: ACT/365 for JPY, 2-business-day observation shift for TONA-compounded |
| Documentation language | Mixed English / Japanese | Standardised Japanese + English bilingual versions |
| Cross-product consistency | Different templates for IRS, swaption, structured product | Unified template with product-specific schedules |
| Counterparty hierarchy | Pre-defined for cross-border deals | Updated to reflect post-LIBOR market structure |

The 2024 update reflects the **operational lessons of the LIBOR transition** — having a single standardised template reduces bilateral negotiation friction and accelerates new-product launches. It also positions the Japanese market for any future TIBOR-related transition needs.

## 8. Cross-currency derivatives — the overlay

For cross-currency swaps where one leg is JPY (TIBOR or LIBOR) and the other is USD (LIBOR / SOFR) or EUR (LIBOR / ESTR), the protocol applies **per leg**:

| Cross-currency configuration | Pre-2022 fallback | Post-2022 (post-LIBOR-cessation) |
|---|---|---|
| JPY LIBOR vs USD LIBOR cross-currency swap | Both legs converted via protocol | JPY leg → TONA + CAS; USD leg → SOFR + CAS |
| JPY TIBOR vs USD LIBOR cross-currency swap | Only USD leg converted (TIBOR unaffected) | TIBOR leg unchanged; USD leg → SOFR + CAS |
| JPY TIBOR vs USD SOFR cross-currency swap | No fallback issue | No change |

See [[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]] for the basis-swap mechanics post-conversion.

## 9. Cleared derivative side — JSCC and CCP implementation

Japanese clearing houses ([[financial-regulators/jsda|JSCC]] = Japan Securities Clearing Corporation; and globally LCH SwapClear, CME) implemented the fallback architecture on cleared JPY LIBOR derivatives:

| Step | Description |
|---|---|
| 1. CCP rulebook amendment | CCPs updated rulebooks to provide that legacy JPY LIBOR cleared derivatives would convert to TONA + CAS at cessation |
| 2. Pre-cessation conversion | Some CCPs (e.g., LCH SwapClear) converted legacy positions pre-cessation via mandatory rule-based conversion |
| 3. Position rebalancing | Compensation payments between members for any value impact of conversion |
| 4. Risk-management adjustment | Updated initial-margin and variation-margin calibration |

JSCC's cleared-derivative book was relatively small for JPY LIBOR (JPY LIBOR derivatives were more often US / EU-cleared); the conversion was operationally smooth.

## 10. Counterpoints

- **"The protocol was over-engineered"** — Critics note adherence costs and operational complexity; defenders point out that bilateral amendment of millions of contracts was impossible at industry scale
- **"CAS over- or under-compensates"** — The fixed CAS is a 5-year median snapshot; if forward IBOR-RFR spreads diverged materially from historical median, conversions create value transfer. In practice, JPY CAS values are small (mostly < 20 bp), limiting the value-transfer concern
- **"TIBOR should also be moved to TONA"** — Some industry voices argue maintaining two reference rates (TONA + TIBOR) is inefficient; defenders argue term-rate users (corporate lenders especially) still need a forward-looking term rate
- **"JSDA documentation update is too late"** — Coming in 2024 (3 years after LIBOR cessation), the update was driven by accumulated lessons rather than urgency; criticism is that it could have been earlier
- **"Synthetic LIBOR confused everyone"** — The 2022–2023 synthetic JPY LIBOR phase was complicated; market participants and rating agencies had to handle a hybrid state
- **"Non-adhering smaller counterparties created tail risk"** — Some smaller regional banks and corporates didn't adhere in time; bilateral cleanup of these exposures took most of 2022

## 11. Open questions

- Whether [[financial-regulators/jbatibor|JBATA D-TIBOR]] survives long-term given the global trend toward RFR adoption (current FSA stance: D-TIBOR continues if usage is sustained)
- Whether term-RFR for JPY (e.g., forward-looking TONA term rates published by a designated administrator) gets developed and accepted for term-fix applications
- Whether the next major fallback event (e.g., a CCP rulebook change or a regulatory rate retirement) gets handled via similar multilateral mechanism
- The role of cross-border consistency — if JSDA / FSA push for stronger JPY documentation standardisation, how does it interact with ISDA global templates
- Whether the 2024 documentation update reduces the operational friction for new product types (climate-linked derivatives, structured products tied to non-financial benchmarks)

## Related

- [[derivatives/INDEX|derivatives index]]
- [[derivatives/japan-irs-market|Japan yen IRS market]]
- [[derivatives/ois-tona-curve|OIS TONA curve and JPY discounting]]
- [[derivatives/otc-clearing-jp-trade-repository|OTC clearing Japan trade repository]]
- [[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]]
- [[derivatives/yen-basis-swap-market|yen basis swap market]]
- [[derivatives/japan-interest-rate-derivatives-overview|Japan interest-rate derivatives overview]]
- [[derivatives/japan-rates-derivative-product-matrix|Japan rates derivative product matrix]]
- [[derivatives/japan-cms-constant-maturity-swap|Japan CMS constant maturity swap]]
- [[derivatives/japan-swaption-market|Japan swaption market]]
- [[derivatives/swap-execution-facility-japan|swap execution facility Japan]]
- [[money-market/INDEX|money-market index]]
- [[banking/INDEX|banking index]]
- [[megabanks/mufg|MUFG]] · [[megabanks/smfg|SMFG]] · [[megabanks/mizuho-fg|Mizuho FG]]
- [[securities-firms/nomura-hd|Nomura]] · [[financial-regulators/jsda|JSDA]]
- [[securities-firms/mufg-securities|MUFG MS]] · [[securities-firms/smbc-nikko|SMBC Nikko]] · [[securities-firms/mizuho-securities|Mizuho Securities]]
- [[financial-regulators/boj-financial-markets-dept|BoJ Financial Markets Dept]]

## Sources

- ISDA 2020 IBOR Fallbacks Protocol — https://www.isda.org/protocol/isda-2020-ibor-fallbacks-protocol/
- ISDA — https://www.isda.org/
- JSDA TIBOR / IBOR transition materials — https://www.jsda.or.jp/en/
- FSA IBOR transition materials — https://www.fsa.go.jp/en/
- BOJ Cross-Industry Committee on Japanese Yen Interest Rate Benchmarks — https://www.boj.or.jp/en/
- JBATA TIBOR Administration — https://www.jbatibor.or.jp/english/
- UK FCA LIBOR cessation announcement (5 March 2021) — https://www.fca.org.uk/
- JSCC — https://www.jscc.co.jp/en/

---

> [!info] 校核状態
> confidence: **likely**. ISDA 2020 Protocol mechanics, JPY LIBOR CAS values (publicly fixed by Bloomberg index methodology on 5 March 2021), JPY LIBOR cessation timeline, and Japanese market adherence patterns are publicly documented. The 2024 JSDA documentation update is industry-known. Specific adherence counts (500+ Japanese entities) are approximate based on the public ISDA adhering-party list snapshot. Z-TIBOR December 2024 discontinuation reflects JBATA's announced timeline.
