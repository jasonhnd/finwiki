---
source: structured-finance/jcr-ri-japan-securitization-rating-methodology-operating-playbook
source_hash: 39d5fbabe9356eed
lang: en
status: machine
fidelity: ok
title: "JCR / R&I Japan securitization rating methodology operating playbook"
translated_at: 2026-06-01T04:15:40.151Z
---
# JCR / R&I Japan securitization rating methodology operating playbook

## TL;DR

JCR(株式会社日本格付研究所) and R&I(格付投資情報センター) are the two FSA-designated domestic credit rating agencies dominating Japan structured finance. Their **operating methodology** for ABS / RMBS / CMBS / consumer / card / lease ratings follows a four-step playbook: (1) **asset-class-specific stressed default rate(SDR) calculation** using vintage curves derived from Japanese pool data, multiplied by rating-category stress factors(AAA = 4–6× expected default, AA = 3–4×, A = 2–3×, BBB = 1.5–2×); (2) **cash-flow modeling** running the SDR through deal-specific waterfall, prepayment, recovery, and interest-rate scenarios to verify the senior tranche survives stress; (3) **surveillance** with monthly servicer reports, quarterly performance reviews, and rating-action triggers(typically 1-2 notches downgrade if SDR-realised vs SDR-modeled drift exceeds threshold); (4) **downgrade triggers** baked into the rating decision(e.g., originator credit deterioration, pool concentration breach, servicer event of default). Compared to global agencies(S&P / Moody's / Fitch Japan), JCR / R&I use **Japan-anchored default data**(no multi-jurisdiction pooling), **lower base-case default frequency**(reflecting historical Japanese consumer credit behaviour), and **no country-ceiling cap**(since they rate the Japan sovereign AAA on domestic scale); the result is split-rating gaps of 1–3 notches at the senior layer documented in [[structured-finance/fitch-moody-sp-japan-criteria|global vs JCR / R&I criteria]]. This entry codifies the operating mechanics — SDR calculation, cash-flow modeling, surveillance frequency, downgrade triggers — at the level of the analyst playbook rather than the abstract methodology document.

## Wiki route

This entry sits under [[structured-finance/INDEX|structured-finance index]] as the **operating-playbook methodology** node, complementing the foundational [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology entry]] and the comparison [[structured-finance/fitch-moody-sp-japan-criteria|Fitch / Moody's / S&P Japan criteria]]. Read against the asset-class operating pages: [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]], [[structured-finance/japan-consumer-loan-abs-structure|Japan consumer-loan ABS structure]], [[structured-finance/japan-credit-card-receivable-abs|Japan credit-card receivable ABS]], [[structured-finance/japan-equipment-lease-abs|Japan equipment lease ABS]], [[structured-finance/japan-rmbs-issuance-structure|Japan RMBS issuance structure]], [[structured-finance/japan-cmbs-issuance-structure|Japan CMBS issuance structure]]. Regulatory anchor: [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK / TMK SPV vehicle]] for the underlying legal-entity layer.

## 1. JCR and R&I — the agency identities

| Item | JCR | R&I |
|---|---|---|
| Japanese name | 株式会社日本格付研究所 | 株式会社格付投資情報センター |
| Established | 1985 | 1998 (merged predecessor) |
| Ownership | Independent, listed parent | Nomura-affiliated |
| FSA designation | Under FIEA Article 66-27 | Under FIEA Article 66-27 |
| Domestic sovereign rating | AAA | AA+ |
| Structured-finance staff(approx) | 60–80 analysts | 50–70 analysts |
| Annual SF rating actions(approx) | 200–400 (new + surveillance) | 150–300 |
| Office | Tokyo(HQ) | Tokyo(HQ) |

Both publish detailed criteria papers and surveillance reports for structured-finance products; both are FSA-regulated and conduct-rule-bound under FIEA.

## 2. The asset-class methodology architecture

JCR and R&I maintain separate criteria papers for each asset class:

| Asset class | Methodology features | Typical surveillance cadence |
|---|---|---|
| **Auto-loan ABS** | Vintage curve by new-car / used-car split; concentration limits; backup-servicer requirement | Monthly servicer report; quarterly rating review; annual full review |
| **Consumer-loan ABS** | Vintage curve by APR / loan-size bucket; Interest Rate Restriction Act regulatory shock scenario; early-amortization trigger calibration | Monthly servicer report; quarterly rating review; semi-annual full review |
| **Credit-card receivable ABS** | Master-trust pool dynamics; term-extension conditional scenario; cross-series contagion stress | Monthly servicer report; quarterly rating review |
| **Equipment lease ABS** | True-lease vs finance-lease split; equipment-type residual curves; concentration by industry / equipment / lessee | Monthly servicer report; quarterly rating review |
| **RMBS** | LTV / DTI stratification; geographic concentration; prepayment vintage curves; foreclosure-timing assumption | Monthly servicer report; quarterly rating review; semi-annual full review |
| **CMBS** | Property-level NCF stress; cap-rate stress; refinancing risk; special-servicer capability | Monthly servicer report; quarterly rating review; annual full review |
| **NPL securitization** | Recovery-rate by NPL vintage / asset type; servicer workout track record; legal-clearance risk | Quarterly servicer report; semi-annual rating review |
| **Project-finance** | Project-cash-flow stress; counterparty credit; completion risk; operating-cost stress | Annual rating review(project bonds); rating actions on milestone events |

The criteria papers are published on each agency's website in Japanese and English; they are updated periodically(every 3–7 years for major methodology revisions).

## 3. The stressed default rate(SDR) calculation

The central operating tool is the **stressed default rate** — the expected pool default frequency under a stress scenario consistent with the target senior-tranche rating.

### 3a. Base-case default frequency

| Asset class | Typical base-case lifetime default frequency | Source |
|---|---|---|
| Auto loan(new-car captive) | 1.5–3.0% | Originator historical pool data; agency cross-issuer database |
| Auto loan(used-car / multi-brand) | 3.0–5.5% | Same |
| Consumer loan(unsecured) | 8–15% | Originator + agency database |
| Credit-card receivable | 4–8% | Originator + agency database |
| Equipment lease(mixed pool) | 2.5–5.0% | Same |
| Residential mortgage(private RMBS) | 1.0–2.5% | Originator + agency database |
| Commercial mortgage(CMBS) | 3.0–8.0% | Property-specific + agency historical data |

### 3b. Stress multipliers by rating category

JCR / R&I apply rating-category-specific stress multipliers to the base case:

| Rating | Stress multiplier(typical) | Cumulative default frequency for SDR |
|---|---|---|
| AAA | 4–6× base | Highest stress — survives recession-style scenario plus tail event |
| AA | 3–4× base | Recession scenario |
| A | 2–3× base | Mild recession |
| BBB | 1.5–2× base | Modest stress |
| BB | 1.0–1.5× base | Base + small stress |

The stress multipliers reflect the **rating definition** — AAA means "survives extreme stress," and the agencies calibrate the stress multiplier to deliver this consistency across asset classes.

**Example calculation**(auto-loan ABS):
- Base-case lifetime default: 2.5%
- AAA stress multiplier: 5×
- SDR(AAA): 12.5%
- Recovery rate assumption: 40%
- SDR × (1 – recovery) = 12.5% × 60% = 7.5% net loss
- Required subordination + reserve + OC for AAA: 7.5% + cushion = ~8.5%
- Deal subordination structure must deliver at least 8.5% to achieve AAA

### 3c. Adjustments for pool-specific features

The SDR is adjusted for:
- Pool concentration(single obligor, geographic, vintage) — increases SDR
- Originator track record(long history + low historical variance) — reduces SDR
- Servicer capability and backup arrangements — modifies the SDR upward if weak
- Servicer-advance practices — affects cash-flow modeling, not directly SDR
- Trigger calibration — well-calibrated triggers earn favorable SDR treatment

## 4. Cash-flow modeling

The SDR feeds into a **cash-flow model** that simulates the waterfall through stress:

| Modeling input | Description |
|---|---|
| Pool collection schedule | Period-by-period principal + interest expected collections |
| Default timing curve | When defaults occur(typically S-curve peaking at months 12–36) |
| Recovery timing | When recoveries occur(typically months 6–18 after default) |
| Prepayment curve | Voluntary prepayment by period |
| Interest-rate scenarios | Floating-rate exposure on either pool or bonds |
| Servicer-advance behavior | Modeled per servicing agreement |
| Trigger activation | When triggers hit, waterfall switches behavior |
| Tranche payment | Per the deal's waterfall logic |

The model outputs:
- Senior tranche full repayment probability under SDR scenario
- Senior tranche payment-shortfall scenarios
- Mezz tranche payment-shortfall scenarios
- Subordination utilization scenarios
- Reserve utilization scenarios

For the senior tranche to earn AAA, it must show **zero principal shortfall** and **interest-shortfall coverage** under SDR plus stress overlays.

## 5. Surveillance — the ongoing monitoring layer

Once a rating is assigned, JCR / R&I conduct **ongoing surveillance**:

### 5a. Servicer-report review(monthly)

Each month, the servicer submits a report to trustee + rating agencies:
- Pool balance(current vs prior month)
- Delinquencies by aging bucket(30 / 60 / 90 / 120+ day)
- Charge-offs(gross + recoveries)
- Prepayments
- Pool yield(weighted-average APR)
- Reserve account balance
- OC level
- Cumulative net loss to date

Agencies compare actual against modeled performance.

### 5b. Quarterly rating review

Every quarter(formally; sometimes more frequently for stressed deals):
- Performance trend analysis
- Comparison to other deals in the same asset class
- Originator credit review
- Servicer operational review
- Trigger status check
- Rating-action consideration

### 5c. Annual / semi-annual full review

Every 6–12 months:
- Full re-running of cash-flow model with updated performance data
- Updated SDR calculation if base-case has drifted
- Pool composition changes
- Originator strategic developments
- Macro-economic update
- Rating-action recommendation

### 5d. Event-driven reviews

Triggered by specific events:
- Originator bankruptcy / rating downgrade
- Servicer event of default
- Trigger activation
- Regulatory change affecting asset class
- Macro shock(e.g., COVID, GFC)

## 6. Downgrade triggers — when ratings change

| Trigger | Typical downgrade magnitude |
|---|---|
| Originator rating downgraded below required threshold(e.g., BBB) | Senior 1 notch; backup servicer activation may modulate |
| Servicer event of default → backup servicer activated | 1–2 notches if backup operational capacity uncertain |
| Cumulative net loss > SDR × early-warning threshold | 1 notch initially; further if pattern continues |
| 90+ delinquency > 1.5× modeled stress | 1–2 notches |
| Reserve drawn below floor + not replenished within X months | 1 notch |
| Trigger activated → early-amortization | 1 notch initially(recognising mechanism worked); could be more if pool-level deterioration severe |
| Pool concentration breach(lessee, geographic) | 1 notch |
| Macroeconomic / regulatory shock | Multi-notch if persistent |
| Methodology revision | Variable; potentially significant for affected universe |

Downgrades are not automatic — agency analysts apply judgment in the surveillance review. The **pattern matters more than any single data point**.

## 7. Comparison with global agencies(S&P / Moody's / Fitch Japan)

| Dimension | JCR / R&I | S&P / Moody's / Fitch Japan |
|---|---|---|
| Default data source | Japan-anchored | Multi-jurisdiction pooled |
| Base-case default frequency | Lower(reflects Japan historical low default) | Higher(pooled global data including higher-default markets) |
| Stress multipliers | Calibrated to Japan stress scenarios | Calibrated to global stress |
| Country-ceiling cap | None(Japan rated AAA / AA+ on domestic scale) | Yes — capped at Japan sovereign(S&P: A+; Moody's: A1; Fitch: A) |
| Recovery assumptions | Japan-specific(often higher for residential) | More conservative for some pools(rural mortgages) |
| Methodology update cadence | Periodic(3–7 years) | Periodic(3–5 years) |
| Rating consistency across asset classes | Designed for Japan-domestic-scale | Designed for global-scale |
| Surveillance frequency | Monthly servicer + quarterly review | Similar |
| Investor base recognition | Japanese institutional dominant | Global institutional |
| Repo eligibility / bank capital | Recognised for Japan regulatory purposes | Recognised globally for bank capital, ECB repo, etc. |

**The structural split-rating outcome**: a Japan-domestic auto-loan ABS senior tranche typically earns AAA from JCR / R&I at 7% subordination, vs AA / AA+ from S&P / Moody's at 8.5–10% subordination — for the same pool. The 1–2 notch gap is mechanical and reflects the methodology calibration; it is not JCR / R&I leniency, but a different(Japan-anchored vs global-pooled) methodology.

## 8. The rating process — operational timeline

| Step | Typical duration | Description |
|---|---|---|
| 1. Engagement / mandate | 1 week | Issuer / arranger engages agency; agency confirms capacity |
| 2. Initial structuring discussion | 2–4 weeks | Agency provides feedback on structure, subordination, triggers |
| 3. Diligence + pool data review | 4–6 weeks | Pool data submitted; agency analyses |
| 4. Cash-flow modeling | 2–4 weeks | Agency runs model; iterates with arranger on subordination |
| 5. Rating committee | 1–2 weeks | Internal committee approves rating |
| 6. Rating release | 1–2 weeks pre-pricing | Pre-sale / pre-pricing rating release |
| 7. Post-issuance surveillance | Ongoing | Monthly + quarterly + annual reviews |

Total timeline from mandate to rating: typically 8–14 weeks. Compares to global agencies at similar timeline; engagement model differs(more granular issuer engagement at JCR / R&I, less staff at global agencies' Tokyo offices).

## 9. Counterpoints

- **"JCR / R&I are too lenient"** — Defenders cite Japan-specific data justifying lower base-case defaults; critics argue methodology converges with global only after Japan default rates converge upward, creating tail risk
- **"Sovereign-cap mechanical exception is unfair to JCR / R&I"** — JCR / R&I are not bound by the country-ceiling; the question is whether this is methodologically sound or a structural advantage
- **"SDR multipliers are arbitrary"** — Critics note the 4–6× AAA multiplier is calibrated rather than empirically derived; defenders note rating-category consistency requires calibration
- **"Surveillance is back-looking"** — Monthly servicer-report review is responsive but lagged; some events(originator stress) move faster than monthly review can capture
- **"Methodology updates create cliff effects"** — When agencies update SDR multipliers or recovery assumptions, multiple deals can move simultaneously; this is unavoidable but disruptive
- **"JCR / R&I split is genuine — choose one"** — Some issuers engage only JCR or only R&I; co-rating is common but adds cost. The choice often reflects historical relationship rather than methodology preference

## 10. Open questions

- Whether JCR / R&I converge methodology with global agencies as Japan capital markets internationalise
- Whether climate-risk and demographic-decline scenarios get incorporated systematically into SDR calculation
- Whether the FSA pressures rating agencies for tighter methodology disclosure or independent third-party review
- Whether new asset classes(BNPL, EV-battery-related ABS, tokenized RWA) get methodology development at similar pace to traditional asset classes
- Whether [[trust-banks/sumitomo-mitsui-trust|trust banks]] as trustees demand methodology changes(e.g., more granular surveillance frequency) as their fiduciary risk grows
- The competitive position of JCR / R&I vs global agencies if BOJ rate normalization stresses pools and reveals modelling differences

## Related

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology (foundational)]]
- [[structured-finance/fitch-moody-sp-japan-criteria|Fitch / Moody's / S&P Japan criteria comparison]]
- [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]
- [[structured-finance/japan-consumer-loan-abs-structure|Japan consumer-loan ABS structure]]
- [[structured-finance/japan-credit-card-receivable-abs|Japan credit-card receivable ABS]]
- [[structured-finance/japan-equipment-lease-abs|Japan equipment lease ABS]]
- [[structured-finance/japan-rmbs-issuance-structure|Japan RMBS issuance structure]]
- [[structured-finance/japan-cmbs-issuance-structure|Japan CMBS issuance structure]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK / TMK SPV vehicle]]
- [[structured-finance/japan-securitization-product-matrix|Japan securitization product matrix]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[megabanks/mufg|MUFG]] · [[megabanks/smfg|SMFG]] · [[megabanks/mizuho-fg|Mizuho FG]]
- [[trust-banks/sumitomo-mitsui-trust|SMTB]] · [[trust-banks/nochu-trust-bank|Nochu Trust]]

## Sources

- JCR structured-finance criteria library — https://www.jcr.co.jp/en/
- R&I structured-finance methodology library — https://www.r-i.co.jp/en/
- FSA designated credit rating agency list — https://www.fsa.go.jp/en/
- JSDA structured-finance statistics — https://www.jsda.or.jp/en/
- ASF Japan structured-finance materials — https://www.asf-japan.gr.jp/

---

> [!info] Verification status
> confidence: **likely**. SDR calculation framework, stress-multiplier ranges, cash-flow modelling architecture, and surveillance frequencies reflect public methodology papers from JCR / R&I and industry-observed practice. Specific stress-multiplier values are illustrative of typical patterns rather than single-source claims; actual deal calibrations vary. Downgrade-trigger thresholds are deal-specific and disclosed in offering documents.
