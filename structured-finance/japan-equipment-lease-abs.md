---
title: "Japan equipment lease ABS — residual-value risk, true-lease vs finance-lease split"
aliases:
  - "Japan equipment lease ABS"
  - "Mitsubishi HC Capital lease ABS"
  - "Tokyo Century lease ABS"
  - "ORIX lease ABS"
  - "Japan lease receivable ABS"
  - "True-lease vs finance-lease Japan ABS"
  - "Residual-value risk lease ABS"
  - "Equipment finance ABS Japan"
  - "structured-finance/japan-equipment-lease-abs"
domain: structured-finance
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [structured-finance, abs, lease, equipment, residual-value, true-lease, finance-lease, jcr, ri, japan]
status: active
sources:
  - "JCR lease-receivable ABS criteria — https://www.jcr.co.jp/en/"
  - "R&I lease-receivable ABS methodology — https://www.r-i.co.jp/en/"
  - "Mitsubishi HC Capital IR — https://www.mitsubishi-hc-capital.com/"
  - "Tokyo Century IR — https://www.tokyocentury.co.jp/"
  - "ORIX Corp IR — https://www.orix.co.jp/grp/en/"
  - "Japan Leasing Association — https://www.leasing.or.jp/"
  - "JSDA — https://www.jsda.or.jp/en/"
---

# Japan equipment lease ABS — residual-value risk, true-lease vs finance-lease split

## TL;DR

Japan equipment lease ABS — issued in modest annual volumes (~JPY 200–400 bn) by the three major independent leasing companies ([[leasing-firms/mitsubishi-hc-capital|Mitsubishi HC Capital]], [[leasing-firms/tokyo-century|Tokyo Century]], [[leasing-firms/orix-corp|ORIX]]) and bank-affiliated leasing arms ([[leasing-firms/fuyo-lease|Fuyo Lease]] under Mizuho-Marubeni, Sumitomo Mitsui Finance & Leasing under SMFG, [[leasing-firms/ibj-leasing|IBJ Leasing]] under Mizuho) — packages **lease receivables on machinery, transportation equipment, IT/office equipment, medical equipment, and renewable-energy infrastructure** into ABS pools. The asset class is **structurally distinct from loan ABS** because of two features: (1) **true-lease vs finance-lease classification** under Japanese GAAP (J-GAAP) and IFRS 16 — finance-leases transfer substantially all risks/rewards to the lessee and are economically loan-like; true-leases (operating leases under accounting taxonomy) retain residual-value risk with the lessor, requiring the lessor to predict and recover the equipment value at lease-end; (2) **residual-value risk** which sits on top of the credit risk of the lessee — even with zero lessee default, the lessor (and the ABS) loses money if the equipment's end-of-lease realised value falls below the booked residual. Rating agencies apply **higher subordination (10–15% for AAA senior) vs auto-loan ABS (6–12%)** to absorb residual-value haircuts; pools with high true-lease share carry deeper enhancement. Compared to auto-lease ABS, equipment lease pools have more heterogeneous equipment types (mixing IT/office that depreciates fast with machinery that holds value longer) and more concentration risk (corporate lessees vs granular consumer). Rated by [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I]].

## Wiki route

This entry sits under [[structured-finance/INDEX|structured-finance index]] as the **equipment-lease-ABS operating-mechanics** node. Read against [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]] for the comparable secured-pool ABS contrast, [[structured-finance/japan-consumer-loan-abs-structure|Japan consumer-loan ABS structure]] for the unsecured contrast, [[structured-finance/japan-credit-card-receivable-abs|Japan credit-card receivable ABS]] for the revolving-pool contrast, and [[structured-finance/jcr-ri-japan-securitization-rating-methodology-operating-playbook|JCR / R&I securitization rating methodology operating playbook]] for the methodology layer. Leasing-industry routing: [[finance/INDEX|finance domain]] for the leasing-company economics; [[real-estate-finance/INDEX|real-estate-finance domain]] for the real-estate-lease contrast.

## 1. The repeat issuer landscape

| Issuer | Parent / affiliation | Asset focus | Annual ABS issuance (approx) |
|---|---|---|---|
| [[leasing-firms/mitsubishi-hc-capital|Mitsubishi HC Capital]] | Mitsubishi (formed 2021 from merger of Mitsubishi UFJ Lease and Hitachi Capital) | Machinery, IT/office, transportation, real-estate-leasing, renewable | JPY 80–150 bn |
| [[leasing-firms/tokyo-century|Tokyo Century]] | Independent (Itochu / Tokyo MUFG-related shareholders) | Aircraft, ship, IT/office, transportation, renewable, environment | JPY 60–120 bn |
| [[leasing-firms/orix-corp|ORIX]] | Independent diversified financial group | Equipment lease (machinery, vehicle, IT), plus broader finance | JPY 50–100 bn |
| [[leasing-firms/fuyo-lease|Fuyo Lease]] | Mizuho / Marubeni affiliated | General equipment + auto-fleet leasing | JPY 30–60 bn |
| Sumitomo Mitsui Finance & Leasing | SMFG / Sumitomo Corp affiliated | Equipment + vendor finance | JPY 40–80 bn |
| [[leasing-firms/ibj-leasing|IBJ Leasing]] | Mizuho group | Equipment + structured leasing | JPY 20–50 bn |
| [[leasing-firms/ricoh-leasing|Ricoh Leasing]] | Ricoh group affiliated | Office equipment focus | JPY 15–40 bn |
| Regional-bank affiliated leasing arms ([[leasing-firms/chibagin-leasing|Chibagin Leasing]], [[leasing-firms/iyogin-leasing|Iyogin Leasing]], [[leasing-firms/yokohama-bank-leasing|Yokohama Bank Leasing]], etc.) | Various regional banks | Regional SME equipment leasing | Modest individual issuance; some pooled deals |

The top three independents account for the majority of public lease-ABS issuance. The bank-affiliated leasing companies have access to parent-bank funding lines and are less ABS-reliant; they issue ABS opportunistically for capital relief or funding diversification rather than as core treasury.

## 2. Pool composition — equipment-type mix

| Equipment type | Typical share in mixed pool | Typical lease tenor | Residual-value profile |
|---|---|---|---|
| **Machinery (industrial / construction / agricultural)** | 25–40% | 5–7 years | Holds value 30–50% of original at lease-end |
| **Vehicle / transportation (commercial truck, fleet auto, forklift)** | 15–30% | 3–5 years | Holds value 25–40% (used-commercial market is liquid) |
| **IT / office equipment (PCs, servers, copiers, network equipment)** | 15–25% | 3–5 years | Holds value 5–15% (rapid technological depreciation) |
| **Medical equipment (imaging, monitoring, lab)** | 5–15% | 5–7 years | Holds value 30–60% (long service life if maintained) |
| **Renewable / environment (solar panels, biogas equipment)** | 5–10% | 10–15 years | Long tenor; residual modelling complex |
| **Other / specialised** | 5–15% | Varies | Equipment-specific |

Why the mix matters:
- **Rapidly-depreciating equipment** (IT/office) often goes into finance-lease classification because residual value is low and predictable; pool yield is loan-like
- **Slowly-depreciating equipment** (machinery, medical) often goes into true-lease because the residual is meaningful and the lessor wants to retain the upside (and the risk); rating-agency subordination is deeper
- **Mixed pools** balance these — a well-structured deal limits high-residual-risk equipment to a defined share

## 3. True-lease vs finance-lease — the central distinction

Japanese GAAP and IFRS 16 classify leases by economic substance:

| Classification | J-GAAP / IFRS 16 view | Economic substance | ABS treatment |
|---|---|---|---|
| **Finance-lease (ファイナンスリース)** | Transfers substantially all risks/rewards to lessee; lessor records receivable; lessee records asset + liability | Economically equivalent to a secured loan with the equipment as collateral | Cash-flow profile is loan-like; residual risk minimal (typically zero residual); rating-agency treatment similar to auto-loan ABS |
| **True-lease / operating-lease (オペレーティングリース)** | Lessor retains substantial risks/rewards; lessor records asset; lessee records rental expense | Lessor predicts and recovers residual value; lessor takes equipment back at term-end | Cash-flow profile has two components: lease-rental stream + residual realisation; ABS must structure for both |

**Finance-lease ABS pool**:
- Lessee pays fixed monthly lease rentals = full principal + interest
- At lease-end, lessee can either return equipment (and have effectively paid for it) or buy it for nominal cost (1 yen lease in Japan parlance)
- Equipment ownership transfers economically though not always legally
- ABS structuring: subordination sized to credit risk; residual risk is near-zero (zero or 1-yen residual)

**True-lease ABS pool**:
- Lessee pays monthly lease rentals = portion of equipment cost + service component
- At lease-end, lessor takes equipment back; sells it in secondary market (or re-leases)
- The realised resale value (or re-lease income) belongs to the lessor (and the ABS holder)
- ABS structuring: subordination sized to **credit risk + residual risk**; deeper enhancement required

**Pool mix in practice**: most Japan equipment lease ABS pools combine both. Pure-finance-lease pools (typical for IT/office) are rated similar to loan ABS; pure-true-lease pools (rare; typical for aircraft / ship) require structural innovation. Mixed-pool deals use **separate residual-value reserves** to ring-fence residual exposure.

## 4. Residual-value risk modelling

For true-lease components, rating agencies stress residual value via:

| Stress | Description | Typical haircut |
|---|---|---|
| Base-case residual | Lessor's contractual residual booked at deal inception | — |
| Market-recovery base case | Realistic mid-market secondary-equipment value at lease-end | 80–100% of contractual residual |
| Stress scenario | Recession + secondary-market liquidity stress | 50–70% of contractual residual |
| Severe-stress scenario | Equipment obsolescence + market collapse | 25–50% of contractual residual |

The **residual-value haircut** at each rating category drives the residual-value reserve sizing — for AAA senior, agencies typically stress to severe-stress (25–50% recovery), requiring 10–25% of pool residual to be available as residual-value reserve.

**Equipment-type sensitivity**:
- IT equipment: residual modelling is unforgiving — Moore's law obsolescence makes year-5 secondary value highly uncertain
- Machinery: residual is more stable but cyclical-industry pools (e.g., construction equipment in recession) can see severe value drops
- Vehicle: used-commercial market in Japan is liquid (USS truck auction, etc.); residuals are predictable
- Medical: technical lifecycle is short for advanced equipment; older devices have steady but declining value
- Renewable / solar: feed-in-tariff (FIT) regime affects equipment residual (panels may be valuable for re-deployment, may not be)

## 5. Comparison with auto-lease ABS

| Dimension | Equipment lease ABS | Auto-lease ABS (typically auto-OEM captive) |
|---|---|---|
| Pool size | Hundreds to thousands of leases | Tens of thousands of leases (more granular) |
| Lessee profile | Corporate lessees (SMEs + large corp) | Mix of corporate fleet + retail consumer |
| Concentration risk | Higher (corporate lessees mean concentrated obligor risk) | Lower (granular retail pool) |
| Residual-value risk | High variability (mixed equipment types) | Moderate (well-established used-car market) |
| Tenor | 3–7 years typical | 3–5 years typical |
| Default volatility | Moderate (lessee credit cycle-sensitive) | Lower (consumer pool is granular) |
| Subordination for AAA senior | 10–15% | 6–10% |
| Residual-value reserve | 10–25% of pool residual | 8–15% of pool residual |

Equipment lease ABS pools also face **single-equipment-type concentration limits** that auto-lease pools don't — a pool can't have > 25–35% IT equipment because residual modelling becomes too uncertain.

## 6. Credit enhancement stack

| Layer | Typical sizing for AAA senior (mixed pool) |
|---|---|
| Subordination (mezz + equity) | 10–15% of original pool |
| Cash reserve at closing | 1.5–3.0% of senior |
| Cash reserve target | 2.5–4.5% (built from excess spread) |
| Residual-value reserve (separate from cash reserve) | 10–25% of pool residual exposure |
| Excess spread (1st defense) | 3–7% per annum on pool |

The residual-value reserve is the distinctive feature — it's **separately funded and ring-fenced** for residual realisation shortfalls, not pooled with credit-loss reserve.

## 7. The waterfall — split between rental and residual

| Priority | Item |
|---|---|
| 1 | Servicer fee (0.30–0.60% per annum) |
| 2 | Trustee / account-bank fees |
| 3 | Senior interest |
| 4 | Mezz interest |
| 5 | Cash reserve top-up (credit-loss reserve) |
| 6 | Residual-value reserve top-up |
| 7 | Principal (sequential or pro-rata depending on deal) — flows from monthly lease rentals + equipment-disposition proceeds |
| 8 | Equity / residual to originator |

The unusual operating feature: principal cash flow comes from **two streams** — (1) the lease-rental component of each monthly payment (predictable, scheduled), and (2) the **end-of-lease equipment disposition proceeds** (lumpy, market-dependent). This makes principal-paydown timing less predictable than loan-ABS pools.

## 8. Rating-agency methodology specifics

| Methodology element | JCR / R&I approach |
|---|---|
| Lessee credit | Internal credit-scoring on each lessee + originator-scoring methodology |
| Pool concentration | Limit on single lessee, single equipment-type, single industry concentration |
| Lease structure | True-lease vs finance-lease split disclosed; subordination sized accordingly |
| Residual-value | Equipment-type-specific residual curves; haircuts per stress scenario |
| Servicer | Originator (typically the leasing company itself); operational capability + backup servicer |
| Recovery | Equipment disposition timing + realised value vs booked residual |

Methodology details in [[structured-finance/jcr-ri-japan-securitization-rating-methodology-operating-playbook|operating playbook]].

## 9. Funding mix role for leasing companies

For [[leasing-firms/mitsubishi-hc-capital|Mitsubishi HC Capital]] / [[leasing-firms/tokyo-century|Tokyo Century]] / [[leasing-firms/orix-corp|ORIX]], lease ABS sits alongside:

- **Bank-line funding** (committed credit facilities from megabanks)
- **Corporate-bond issuance** (since these issuers have IG ratings)
- **Commercial paper** (for short-term funding)
- **Sukuk / cross-border issuance** (for currency / investor diversification)

ABS provides:
- **Off-balance-sheet capital relief** (under Basel III securitization treatment)
- **Funding diversification** (different investor base than corporate bonds)
- **Tenor matching** against lease-receivable life
- **Rating arbitrage** (AAA senior despite IG issuer rating)

Bank-affiliated leasing arms ([[leasing-firms/fuyo-lease|Fuyo Lease]], SMFL, [[leasing-firms/ibj-leasing|IBJ Leasing]]) have access to cheaper parent-bank funding, so ABS issuance is opportunistic — less core to their treasury than to the independents.

## 10. Counterpoints

- **"Lease ABS is just auto-loan ABS with extra rules"** — True-lease residual risk genuinely changes the cash-flow profile; the residual-value reserve is meaningful structural innovation, not cosmetic
- **"IT-equipment leases shouldn't be in ABS pools"** — Critics argue residual uncertainty is too high; defenders note finance-lease classification + zero-residual structuring makes the risk manageable
- **"Concentration is a problem"** — Corporate lessees mean even a moderate-size pool has measurable single-name risk; mitigants are concentration limits and lessee-credit scoring
- **"The residual market is shallow in Japan"** — For some equipment types (specialised industrial machinery), secondary markets are thin; haircuts reflect this
- **"Bank-affiliated leasing dominates — independent ABS issuance is shrinking"** — Statistically the bank-affiliateds have larger origination volumes, but the independents are larger ABS issuers because of funding-mix economics
- **"Renewable-energy lease ABS will explode"** — Solar PV and offshore wind project leases are growing, but operating-lease vs finance-lease classification and FIT-regime sensitivity make this a special case

## 11. Open questions

- Whether ESG-linked lease ABS (renewable / battery / EV-charging-infrastructure pools) becomes a distinct sub-segment
- Whether IFRS 16 adoption (which moved most operating leases to on-balance-sheet for lessees globally) reshapes the true-lease / finance-lease economics meaningfully in Japan
- Whether [[leasing-firms/mitsubishi-hc-capital|Mitsubishi HC Capital]]'s acquisition expansion continues to add diverse equipment-type pools to ABS
- The role of [[leasing-firms/tokyo-century|Tokyo Century]] aviation / ship-finance assets in lease-ABS structuring (or via separate aircraft / ship ABS)
- Whether digital-equipment-as-a-service (servers / network as-a-service) lease pools become securitisable

## Related

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]
- [[structured-finance/japan-consumer-loan-abs-structure|Japan consumer-loan ABS structure]]
- [[structured-finance/japan-credit-card-receivable-abs|Japan credit-card receivable ABS]]
- [[structured-finance/jcr-ri-japan-securitization-rating-methodology-operating-playbook|JCR / R&I securitization rating methodology operating playbook]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[structured-finance/fitch-moody-sp-japan-criteria|Fitch / Moody's / S&P Japan criteria]]
- [[structured-finance/aircraft-leasing-financing-japan-shosha|aircraft leasing financing Japan shosha]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK / TMK SPV vehicle]]
- [[structured-finance/japan-securitization-product-matrix|Japan securitization product matrix]]
- [[leasing-firms/mitsubishi-hc-capital|Mitsubishi HC Capital]] · [[leasing-firms/tokyo-century|Tokyo Century]] · [[leasing-firms/orix-corp|ORIX]]
- [[leasing-firms/fuyo-lease|Fuyo Lease]] · [[leasing-firms/ibj-leasing|IBJ Leasing]] · [[leasing-firms/ricoh-leasing|Ricoh Leasing]]
- [[finance/INDEX|finance index]] · [[real-estate-finance/INDEX|real-estate-finance index]]

## Sources

- JCR lease-receivable ABS criteria — https://www.jcr.co.jp/en/
- R&I lease-receivable ABS methodology — https://www.r-i.co.jp/en/
- Mitsubishi HC Capital investor relations — https://www.mitsubishi-hc-capital.com/
- Tokyo Century investor relations — https://www.tokyocentury.co.jp/
- ORIX Corp investor relations — https://www.orix.co.jp/grp/en/
- Japan Leasing Association — https://www.leasing.or.jp/
- JSDA structured-finance statistics — https://www.jsda.or.jp/en/
- ASF Japan — https://www.asf-japan.gr.jp/

---

> [!info] 校核状態
> confidence: **likely**. True-lease vs finance-lease classification, residual-value risk modelling, equipment-type concentration limits, and credit enhancement stack are documented in JCR / R&I criteria and Japan Leasing Association materials. Specific subordination and reserve ranges reflect industry-disclosed deal data; equipment-type residual curves are illustrative of typical agency stress scenarios.
