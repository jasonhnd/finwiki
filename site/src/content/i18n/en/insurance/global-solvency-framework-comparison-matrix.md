---
source: insurance/global-solvency-framework-comparison-matrix
source_hash: 95247b04ea1026e2
lang: en
status: machine
fidelity: ok
title: "Global solvency framework comparison matrix"
translated_at: 2026-05-31T11:13:44.836Z
---

# Global solvency framework comparison matrix

## Wiki route

This entry sits under [[insurance/INDEX|insurance index]] and is the cross-jurisdiction comparison page for insurer capital frameworks. Read it against [[insurance/economic-value-based-solvency]] and [[insurance/esr-economic-value-solvency]] for the Japan-specific economic-value detail, against [[financial-licenses/insurance-license-and-solvency]] for the Japan license / regulatory boundary, and against [[insurance/japan-life-insurance-big-four]] and [[insurance/japan-nonlife-big-three]] for company-level Japanese impact. Catastrophe-risk modules feed back into [[insurance/natcat-reinsurance-japan]].The cleanest listed-equity entity anchor for Japan-side translation is [[life-insurers/dai-ichi-life]] and [[non-life-insurers/tokio-marine]].

##TL;DR

Four major regimes now coexist for insurer regulatory capital: Japan's FSA ESR (rolled out from 2025-04), the IAIS Insurance Capital Standard (ICS Version 2.0, finalized December 2024 and mandatory for Internationally Active Insurance Groups from 2025), the EU's Solvency II (operational since 2016 with a 2025 review package often called Solvency II 2.0), and the US NAIC Risk-Based Capital regime (life-RBC, P&C-RBC, health-RBC).ESR, ICS, and Solvency II share a market-consistent, economic-value philosophy; US RBC remains a statutory accounting / factor-based system. The four frameworks differ on valuation, capital tiering, discount-rate methodology, risk-module structure, and disclosure.

For Japanese insurer analysis, the practical reading rule is: ESR drives domestic regulatory capital, ICS drives IAIG-level group reporting, Solvency II shapes how European subsidiaries and competitors look, and US RBC drives the metric used by US life / P&C / health subsidiaries of Japanese groups.

## Framework matrix

### Identity and effective date

|Dimension|Japan FSA ESR|IAIS ICS 2.0 |EU Solvency II|US NAIC RBC|
|---|---|---|---|---|
|Regulator|Financial Services Agency (FSA)|International Association of Insurance Supervisors (IAIS)|European Insurance and Occupational Pensions Authority (EIOPA) and national supervisors|National Association of Insurance Commissioners (NAIC) and state regulators|
|Effective date|Rolled out from 2025-04 onward, after multi-year field tests|Version 2.0 finalized December 2024; mandatory for IAIGs from 2025 after a five-year monitoring period|Operational from 2016-01; Solvency II 2.0 review package adopted in 2025 |In force since the 1990s, evolving by line (life-RBC, P&C-RBC, health-RBC)|
|Scope|All Japan-licensed insurers and insurance holding companies; see [[financial-licenses/insurance-license-and-solvency]]|Internationally Active Insurance Groups (IAIGs) — large cross-border groups identified by the IAIS criteria|All insurers and reinsurers authorized in the EU / EEA|US-domiciled insurers; applied separately for life, P&C, and health lines|
|Headline metric|Economic Solvency Ratio (ESR) = qualifying capital / required capital|ICS ratio = qualifying capital resources / ICS required capital|Solvency Capital Requirement (SCR) coverage ratio = eligible own funds / SCR; plus Minimum Capital Requirement (MCR)|RBC ratio = Total Adjusted Capital / Authorized Control Level RBC, with regulatory action levels|

### Philosophy and valuation

|Dimension|Japan FSA ESR|IAIS ICS 2.0 |EU Solvency II|US NAIC RBC|
|---|---|---|---|---|
|Underlying philosophy|Economic value: market-consistent assessment of assets, liabilities, and risk|Economic value: market-adjusted valuation (MAV) of assets and liabilities|Economic value: market-consistent best estimate plus risk margin|Statutory accounting value (SAP): factor-based charges applied to book values|
|Valuation basis|Best estimate of insurance liabilities discounted on a risk-free yield curve plus risk margin|MAV best estimate plus margin over current estimate (MOCE)|Best estimate plus risk margin computed on a cost-of-capital basis|Statutory reserves and asset valuations as defined by NAIC accounting practices|
|Discount-rate methodology|Risk-free yield curve with Ultimate Forward Rate (UFR) extrapolation for long-tail life liabilities; volatility / matching adjustments under transition|Risk-free yield curve with three-segment extrapolation to Long-Term Forward Rate (LTFR)|EIOPA risk-free term structure with Last Liquid Point, convergence to UFR, volatility adjustment, and matching adjustment|Statutory reserve discount rates set by valuation law (e.g., commissioner's reserve valuation method) rather than a single market curve|
|Treatment of long-dated liabilities|UFR-based extrapolation reduces capital sensitivity at very long durations but exposes mismatch in the liquid part of the curve|LTFR with calibration designed to limit pro-cyclicality|UFR plus VA / MA tools designed to dampen short-term spread shocks|Formula does not directly value long-term cash-flow mismatch; treated via asset-adequacy testing instead|

### Capital structure

|Dimension|Japan FSA ESR|IAIS ICS 2.0 |EU Solvency II|US NAIC RBC|
|---|---|---|---|---|
|Capital tiering|Tiered qualifying capital with quality criteria broadly aligned to ICS principles; subordinated debt and capital instruments admitted subject to limits|Two-tier qualifying capital resources: Tier 1 (core, including unlimited Tier 1) and Tier 2; subject to limits on Tier 2 use|Three tiers: Tier 1 (unrestricted and restricted), Tier 2, Tier 3, each with eligibility limits relative to SCR and MCR|Total Adjusted Capital aggregates statutory capital and surplus, asset valuation reserve (life), and approved adjustments; no formal Tier 1 / 2 / 3 split|
|Internal model option|Standard model is the default; advanced firms may use internal-model components under FSA approval|Standard method is the reference; the Aggregation Method (AM) remains a comparable parallel calculation for some jurisdictions|Standard formula or full / partial internal model subject to supervisory approval|Single standard formula with prescribed factors; no internal-model alternative|
|Risk margin / MOCE basis|Cost-of-capital style margin over best estimate|Margin Over Current Estimate (MOCE) added to best estimate|Cost-of-capital risk margin (currently 4 percent CoC after 2025 review reduction)|No explicit risk margin; conservatism is embedded in statutory reserves and factor charges|

### Risk modules

|Dimension|Japan FSA ESR|IAIS ICS 2.0 |EU Solvency II|US NAIC RBC|
|---|---|---|---|---|
|Module structure|Life underwriting, non-life underwriting, market, credit, operational|Insurance (life and non-life), market, credit, operational risk|Life, non-life, health, market, counterparty default, operational, intangible-asset risk|Asset risk (C-1), insurance risk (C-2), interest-rate risk (C-3), business risk (C-4), market risk (C-3a in life-RBC)|
|Catastrophe risk|Non-life cat module covering earthquake, typhoon, flood — see [[insurance/natcat-reinsurance-japan]] for Japan-specific cat exposure and reinsurance interaction|Natural catastrophe risk included within insurance risk; jurisdictional scenarios used|Dedicated nat-cat sub-module with country-specific factors (e.g., windstorm, flood, earthquake by EU region)|P&C-RBC R5 for underwriting risk; cat risk added separately via R6 hurricane and R7 earthquake charges|
|Diversification benefit|Intra-module and cross-module diversification via correlation matrices, subject to FSA-specified limits|Aggregation via correlation matrices at sub-risk and total-risk level; aggregation method permits some recognition of geographic / line diversification|Variance-covariance aggregation with prescribed correlation matrices at module and sub-module level; ring-fenced funds limit certain diversification benefits|Square-root-of-sum-of-squares ("covariance") aggregation across major risk components; less granular than European frameworks|
|Operational risk|Capital charge layered on premiums / reserves with qualitative supervisory overlay|Factor-based charge with calibration aligned to international experience|Formula-based on premiums and technical provisions, capped relative to BSCR|Indirectly captured via business-risk component and Risk-Based Capital trend test|

### Disclosure and supervision

|Dimension|Japan FSA ESR|IAIS ICS 2.0 |EU Solvency II|US NAIC RBC|
|---|---|---|---|---|
|Pillar structure|FSA frames the regime as three pillars: regulatory capital, internal risk management / supervisory review (ORSA-style), and disclosure|Two-tier supervisory architecture: ICS as Prescribed Capital Requirement plus group-wide supervision|Three pillars: Pillar 1 quantitative (SCR / MCR), Pillar 2 governance and ORSA, Pillar 3 disclosure (SFCR, RSR, QRTs)|Confidential RBC report to state regulator with regulatory action levels; not a public Pillar-3-style disclosure regime|
|Public reporting|Insurer disclosure of ESR and methodology in integrated / annual reports; FSA publishes regime materials and field-test outcomes|IAIG-level confidential reporting to group-wide supervisor; aggregated outputs published by IAIS|Mandatory annual Solvency and Financial Condition Report (SFCR) plus quantitative reporting templates (QRTs)|Public disclosure limited to RBC ratio appearing in statutory filings; full RBC worksheet is confidential|
|Supervisory ladder|FSA monitors against thresholds; action levels under economic-value regime are calibrated during transition|ICS-level supervisory dialogue; no formal "ladder" but ICS ratio informs supervisory intervention|SCR breach triggers recovery plan; MCR breach triggers withdrawal of authorization absent short-term recovery|Four action levels: Company Action, Regulatory Action, Authorized Control, Mandatory Control|

### Convergence and divergence vs IAIS ICS

|Regime|Alignment with ICS|Key divergences|
|---|---|---|
|Japan FSA ESR|High conceptual alignment: economic-value philosophy, MAV-style valuation, cost-of-capital margin|Japan-specific calibrations for interest-rate, equity, and catastrophe scenarios; transition arrangements for legacy insurance liabilities|
|EU Solvency II|High alignment at conceptual level; EIOPA participated in ICS field testing|Three-tier capital structure (vs ICS two tiers); volatility / matching adjustments; intangible-asset module; SFCR-style disclosure deeper than ICS|
|US NAIC RBC|Lowest alignment; US argues for Aggregation Method (AM) as comparable outcome under IAIS comparability assessment|Statutory accounting basis, factor-based charges, no economic-value valuation, no formal Tier 1 / 2 / 3 split; AM permits comparable outcome via aggregation of jurisdictional ratios|

## Japan insurer impact

The Japanese insurance market translates these frameworks through specific entity layers:

- **Life big four**: [[insurance/japan-life-insurance-big-four|Japan life insurance big four]] — Nippon Life, Dai-ichi Life, Meiji Yasuda, Sumitomo Life — face the biggest economic-value sensitivity because of long-duration savings, foreign-currency annuity, and equity-holding exposures.ESR is the primary domestic metric; for [[life-insurers/dai-ichi-life]] specifically, listed-equity disclosure means ESR is read alongside dividend / buyback capacity. Mutual insurers translate ESR through policyholder return and surplus distribution rather than share repurchase.
- **Non-life big three**: [[insurance/japan-nonlife-big-three|Japan non-life big three]] — [[non-life-insurers/tokio-marine|Tokio Marine]], MS&AD, and SOMPO — translate ESR through nat-cat reinsurance pricing, overseas specialty insurance, and equity-holding wind-down programs. The non-life cat module under ESR is the regulatory counterpart to private and public catastrophe reinsurance.
- **IAIG-status groups**: Japanese groups designated as IAIGs by their group-wide supervisor face parallel ICS reporting on top of ESR, with the FSA acting as group-wide supervisor for relevant Japanese-headquartered groups.
- **Foreign subsidiaries**: Japanese groups with EU subsidiaries (e.g., reinsurance hubs, specialty platforms) face Solvency II at the subsidiary level; groups with US life / P&C / health subsidiaries face RBC.

## ESG / climate stress overlay

Each regime is layering climate / ESG considerations on top of the core capital framework rather than embedding them in the headline ratio:

|Regime|Climate / ESG approach|
|---|---|
|Japan FSA ESR|FSA climate-related scenario analyses for large insurers; ESG risk treated mostly through ORSA and supervisory dialogue rather than direct SCR-style add-on|
|IAIS ICS 2.0 |IAIS climate-risk supervisory expectations and stress-test exercises; ICS itself does not yet have a standalone climate capital module|
|EU Solvency II|EIOPA climate scenario exercises, integration of sustainability risks into prudential framework via the 2025 review, and stewardship via SFCR disclosures|
|US NAIC RBC|NAIC Climate Risk Disclosure Survey and TCDD-aligned reporting; not yet a direct RBC capital charge|

## Transition arrangements

|Regime|Transition mechanism|
|---|---|
|Japan FSA ESR|Phased run-in from 2025-04 with disclosure of legacy solvency margin in parallel; technical adjustments for in-force long-duration liabilities|
|IAIS ICS 2.0 |Five-year monitoring period (2020-2024) preceded the December 2024 finalization; jurisdictions implementing through 2025 onward|
|EU Solvency II|Original 2016 implementation included 16-year transitional measures on technical provisions and on the risk-free interest rate; 2025 review tightens some areas, eases others|
|US NAIC RBC|Continuous incremental updates by line (life, P&C, health); no single "big bang" transition|

## Decision use

Use this matrix when asking:

- whether a Japanese insurer's domestic ESR can be translated into ICS, Solvency II, or RBC equivalents for cross-jurisdiction comparison;
- whether a regulatory-capital change is structural (regime philosophy) or calibration (parameter update);
- whether a non-life group's catastrophe exposure is captured in a dedicated cat module or only in aggregate;
- whether a life insurer's long-duration liabilities benefit from UFR / LTFR extrapolation or volatility / matching adjustments;
- whether a US-domiciled or EU-domiciled subsidiary of a Japanese group is on a fundamentally different capital lens.

## Boundary

This page is not legal or regulatory advice and is not a substitute for reading the primary FSA, IAIS, EIOPA, or NAIC materials. Specific calibrations (correlation matrices, factor levels, UFR / LTFR values, transition measures) change over time and should be checked against the source date in each insurer's disclosure.The matrix above is conceptual: a single number from one regime should not be re-used in another without re-calibration.

## Related

- [[insurance/INDEX|insurance INDEX]]
- [[insurance/economic-value-based-solvency]]
- [[insurance/esr-economic-value-solvency]]
- [[insurance/japan-life-insurance-big-four]]
- [[insurance/japan-nonlife-big-three]]
- [[insurance/natcat-reinsurance-japan]]
- [[insurance/mutual-vs-stock-life-insurer]]
- [[financial-licenses/insurance-license-and-solvency]]
- [[life-insurers/dai-ichi-life]]
- [[non-life-insurers/tokio-marine]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: Economic value-based solvency regulation, etc. (regime hub).
- IAIS: Insurance Capital Standard activity / topic page.
- EIOPA: Solvency II regulatory framework and 2025 review materials.
- NAIC CIPR: Risk-Based Capital topic page.
- OECD: insurance and pensions statistics / policy hub.
