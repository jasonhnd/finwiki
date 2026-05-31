---
source: insurance/japan-life-insurance-alm-overview
source_hash: c6e0016bcac74ab4
lang: en
status: machine
fidelity: ok
title: "Japan life insurance ALM overview"
translated_at: 2026-05-31T11:13:44.900Z
---

# Japan life insurance ALM overview

## Wiki route

This entry sits under[[insurance/INDEX|insurance index]]and is the asset-liability management routing page for Japanese life insurers. Read it together with[[insurance/japan-life-insurance-big-four|Japan life big four]]for the entities, with[[insurance/sony-life-group-life-operating-model|Sony Life Lifeplanner / group-life operating model]]for the stock-company variant, with[[insurance/economic-value-based-solvency|economic-value-based solvency]]for the regulatory framing, with[[insurance/esr-economic-value-solvency|ESR]]for the company-ratio interpretation, with[[insurance/global-solvency-framework-comparison-matrix|global solvency framework matrix]]for cross-jurisdiction comparability, and with[[insurance/mutual-vs-stock-life-insurer|mutual vs stock life insurer]]for the policyholder-dividend versus shareholder-dividend trade-off that ALM ultimately serves.

ESR sensitivity drivers feed back into[[JapanFG/nippon-life|Nippon Life]],[[JapanFG/dai-ichi-life|Dai-ichi Life]],[[JapanFG/sumitomo-life|Sumitomo Life]],[[JapanFG/meiji-yasuda|Meiji Yasuda]], and[[JapanFG/sony-life|Sony Life]]balance-sheet analysis. Foreign-affiliate ALM nuances are captured in[[insurance/foreign-life-affiliate-japan-positioning|foreign-life affiliates positioning]].

## TL;DR

Japanese life insurers run one of the most duration-mismatched balance sheets in the global insurance industry. Liabilities are long-dated yen promises — whole-life, endowment, and annuity products with multi-decade payout horizons. Asset duration historically lagged liability duration because the JGB curve does not extend far enough at meaningful yield, and because post-2013 BoJ NIRP and yield-curve-control policy compressed yen yields close to zero across most of the curve.

Three ALM responses dominate: (1) extend yen-asset duration with super-long JGBs (20Y,30Y,40Y) accepting low absolute yield; (2) take foreign-bond exposure (mainly USD investment-grade credit and sovereigns) on either hedged or unhedged basis, accepting cross-currency basis cost on the hedged sleeve and FX volatility on the unhedged sleeve; (3) substitute credit assets (foreign IG credit, private debt, infrastructure debt) for sovereign yield under[[insurance/economic-value-based-solvency|economic-value]]capital constraints.

ESR sensitivity is dominated by the residual duration mismatch (interest-rate risk), the unhedged FX position (currency risk), the equity-holdings book (equity risk), and the credit-spread exposure on the foreign credit sleeve. ALM committees at the big-four mutual insurers and at[[JapanFG/sony-life|Sony Life]]are positioned to balance these drivers against policyholder-dividend or shareholder-return constraints.

### Duration

Whole-life and endowment products written before the late-1990s carry guaranteed crediting rates set when JGB yields were several hundred basis points higher than today. These legacy "negative spread" books remain on the balance sheet for decades because policyholders rationally do not lapse high-guarantee policies.

Newer business carries lower guarantees, foreign-currency-denominated guarantees, or variable-product structures that pass investment risk to the policyholder. The result is a layered liability book with:

- a long-tail legacy block at high guaranteed crediting rates;
- a middle block at moderate guarantees;
- a new-business block at low yen guarantees, foreign-currency guarantees, or floating / unit-linked structures.

Liability duration for a typical Japanese life insurer is materially longer than for a US or European life peer because:

- guaranteed savings and endowment products are a larger share of in-force;
- mortality-heavy whole-life is sold at younger ages and runs decades to claim;
- annuity-pension liabilities run multi-decade in payout.

### Crediting rate and guarantee structure

The Insurance Business Act and FSA supervision constrain the standard valuation interest rate (標準利率) used for reserving, separately from the policyholder-credited rate. Under[[insurance/economic-value-based-solvency|economic-value-based solvency]], the regulatory liability is discounted on a risk-free yield curve with[[insurance/global-solvency-framework-comparison-matrix|Ultimate Forward Rate extrapolation]]for long-dated tenors. The mismatch between the credited / guaranteed rate and the discount curve directly drives the economic value of liabilities and the ESR ratio.

### Yen government bonds (JGB)

JGBs remain the structural anchor for yen-duration matching. Super-long JGBs (20Y,30Y,40Y) are the only tenor that meaningfully extends asset duration on the yen sleeve. The trade-off is:

- yield was near zero through the BoJ NIRP / yield-curve-control regime (2016 onward), then crept higher as the BoJ normalized;
- holding super-long JGBs locks in low coupons but provides interest-rate hedging value;
- mark-to-market sensitivity is large — a50 bps parallel shift produces a meaningful equity move on the held-for-trading or available-for-sale buckets.

### Foreign bonds, hedged

The hedged foreign-bond sleeve is the single largest ALM lever for Japanese life insurers in the low-yen-yield environment. The mechanics:

- buy USD-denominated investment-grade credit or sovereign debt;
- hedge the USD exposure back to yen using rolling3M FX forwards or cross-currency swaps;
- net yield = USD bond yield minus hedge cost.

Hedge cost equals the USD vs JPY interest-rate differential plus the cross-currency basis. Through much of the2017-2024 cycle the USD-JPY rate differential was wide enough that hedge cost ate most or all of the USD bond yield pickup, and the cross-currency basis added further drag. In some periods the hedged USD investment-grade yield in yen was lower than the equivalent JGB yield, leading insurers to:

- shorten or unwind hedged USD positions;
- shift to unhedged foreign-bond positions, accepting FX risk;
- pivot toward higher-yielding credit or private debt that paid enough spread to absorb hedge cost.

### Foreign bonds, unhedged

The unhedged foreign-bond sleeve is run as a strategic FX exposure. Logic:

- structural USD strength versus JPY through monetary-policy divergence (2022-2024) made unhedged USD bonds attractive on a total-return basis;
- foreign-currency life products (USD-denominated whole-life sold to mass-affluent Japanese households) create matching FX-asset / FX-liability pairs;
- unhedged positions remove hedge cost but introduce P&L volatility and ESR FX sensitivity.

The unhedged share is a strategic asset-allocation decision overseen by the ALM committee and constrained by the[[insurance/economic-value-based-solvency|economic-value solvency]]capital charge on currency risk.

### Cross-currency basis (CCS basis)

The cross-currency basis is the additional cost on top of the interest-rate differential charged for borrowing USD against yen collateral. It widens during USD funding stress (year-end balance-sheet contraction, dollar-funding scarcity events) and narrows during normal periods. For yen-based insurers, a widening basis directly increases the cost of hedging USD bond positions.

Insurers manage basis through:

- diversifying hedge tenor (1M,3M,6M,1Y) and rolling timing;
- using cross-currency swaps versus shorter-dated FX forwards;
- swapping into other reserve currencies (EUR, AUD) where basis dynamics differ;
- accepting partial unhedged positions when basis is punitive.

### Credit-asset substitution post-2013 NIRP

After the BoJ entered the negative-interest-rate / yield-curve-control regime in2013-2016, Japanese life insurers ran out of meaningful yield on the yen-sovereign curve. The structural response:

- shift JGB allocation toward super-long tenors for duration matching only, not for yield;
- substitute into foreign investment-grade credit (USD IG corporate bonds, USD agency MBS);
- expand into private credit, infrastructure debt, real-estate debt, and private placements;
- expand alternative investments (private equity, real estate equity, hedge funds) within risk-budget limits;
- expand equity holdings (domestic and foreign) subject to ESR equity-risk charge.

This credit-substitution shift increases[[insurance/economic-value-based-solvency|economic-value solvency]]credit-risk capital charges and creates concentration in foreign-credit illiquidity premia. It is the single biggest structural change in Japan life ALM since the1990s low-rate regime.

### Domestic equities

Japanese life insurers historically held substantial cross-shareholdings with banking and industrial counterparties. Wind-down of cross-shareholdings is a multi-year program, but the residual equity book remains a meaningful ESR equity-risk exposure. Listed-insurer peers (notably[[JapanFG/dai-ichi-life|Dai-ichi Life]]at the holding level and the non-life[[insurance/japan-nonlife-big-three|big-three]]) disclose explicit wind-down schedules.

## ALM committee structure

A typical Japanese life insurer ALM committee comprises:

- chief investment officer and investment-division heads (asset side);
- chief actuary and product-development heads (liability side);
- chief risk officer / risk-management division (capital and risk-budget side);
- finance / treasury (liquidity, accounting, tax);
- sometimes ALM-secretariat or middle-office function.

Committee mandates typically include:

- strategic asset allocation review (annual / semi-annual);
- tactical asset allocation review (monthly / quarterly);
- duration-gap review and rebalancing decisions;
- FX-hedge ratio decisions on foreign-bond sleeve;
- credit-spread, equity, and alternatives sub-allocation review;
- stress-test review against FSA /[[insurance/economic-value-based-solvency|economic-value solvency]]scenarios;
- ORSA-style risk-and-solvency self-assessment.

Decisions feed into investment-division execution and into board-level capital and policyholder-dividend / shareholder-return decisions.

## ESR sensitivity

Under the[[insurance/economic-value-based-solvency|economic-value solvency]]regime the ESR ratio is materially sensitive to:

| Risk driver | Mechanism | Typical disclosure |
|---|---|---|
| Interest rates (yen) | Residual liability-asset duration gap; rate fall widens the gap, rate rise narrows it (for negative-gap insurers) | Sensitivity tables for parallel yen rate shifts |
| Interest rates (USD / foreign) | Foreign bond holdings and matching foreign liabilities | Sensitivity tables for foreign-rate shifts |
| FX rates | Unhedged foreign-asset sleeve; foreign-currency product matching | Sensitivity tables for USD-JPY (and EUR-JPY, AUD-JPY) |
| Equity | Domestic and foreign equity holdings, including cross-shareholdings | Sensitivity tables for equity-index moves |
| Credit spread | Foreign IG credit, private debt, infrastructure debt | Sensitivity tables for credit-spread widening |
| Real estate | Direct property, REITs, real-estate debt | Sensitivity tables where disclosed |

The sensitivity shape depends on each insurer's specific duration gap, hedge ratio, credit sleeve size, and equity holdings.[[insurance/esr-economic-value-solvency|ESR]]disclosures are the primary public source.

## Risk-budget and stress-testing process

Japanese life insurers operate ALM within a risk-budget framework that allocates economic capital across risk factors:

| Risk budget allocation | Typical example |
|---|---|
| Yen interest-rate risk | Duration-gap-aligned super-long JGB allocation |
| Foreign interest-rate risk | Hedged USD investment-grade credit sleeve |
| FX risk | Strategic unhedged foreign-bond and foreign-currency liability matching |
| Equity risk | Domestic and foreign equity holdings, including cross-shareholdings under wind-down |
| Credit-spread risk | Foreign IG credit, private debt, infrastructure debt |
| Liquidity risk | Cash, short-dated JGBs, repo capacity for stress periods |
| Operational risk | Capital allocated under[[insurance/economic-value-based-solvency|ESR]]operational-risk module |

Stress-testing is performed against FSA scenarios (interest-rate parallel shifts, equity-market drawdowns, FX shocks, credit-spread widening) and against insurer-internal scenarios (combined shock scenarios, historical-event replays, hypothetical regime changes). Results feed into ORSA disclosures, board-level risk reporting, and capital-planning decisions.

## Disclosure interaction with mutual vs stock governance

How ALM results are translated for stakeholders differs sharply by legal form:

| Form | ALM disclosure flow |
|---|---|
| Mutual insurer (Nippon, Meiji Yasuda, Sumitomo) | ALM results feed into policyholder dividend capacity; surplus distribution is governed by mutual policyholder-representative procedures |
| Listed stock insurer ([[JapanFG/dai-ichi-life|Dai-ichi Life Holdings]]) | ALM results feed into shareholder dividend / buyback capacity, ROE / cost-of-capital framing, and equity-market valuation |
| Stock subsidiary of non-financial parent ([[JapanFG/sony-life|Sony Life]]under[[JapanFG/sony-fg|Sony FG]]) | ALM results feed into intra-group dividend up-streaming to parent and indirect equity-market discipline at the ultimate parent level |

The[[insurance/mutual-vs-stock-life-insurer|mutual vs stock comparison]]is essential context: identical ALM positioning can produce structurally different stakeholder outcomes depending on legal form.

## Big-four ALM contrast

| Insurer | ALM character |
|---|---|
| [[JapanFG/nippon-life|Nippon Life]] | Largest balance sheet; broad ALM committee; broad foreign-asset diversification; substantial domestic equity holdings under wind-down disclosure |
| [[JapanFG/dai-ichi-life|Dai-ichi Life]] | Listed-holding capital discipline; explicit ESR target range; overseas insurance and asset-management adjuncts; clear sensitivity disclosure |
| [[JapanFG/meiji-yasuda|Meiji Yasuda]] | Mutual governance; long-duration domestic protection book; relationship-based corporate channel implications for liability profile |
| [[JapanFG/sumitomo-life|Sumitomo Life]] | Mutual governance; product reform and wellness-linked sales feed into newer liability cohorts; overseas asset investment portfolio |

[[JapanFG/sony-life|Sony Life]]'s ALM (see[[insurance/sony-life-group-life-operating-model|Lifeplanner / group-life operating model]]) sits adjacent to the big four with a stock-company foreign-tech-parent overlay and a meaningful foreign-currency product mix sold through the Lifeplanner channel.

## Practical reading order for insurer disclosure

When reading a Japanese life insurer's annual / integrated report for ALM purposes, the most efficient sequence is:

| Step | Read | What to extract |
|---|---|---|
| 1 | Balance-sheet summary | Asset composition by category, liability composition by product cohort |
| 2 | Asset-portfolio breakdown | JGB / foreign-bond / equity / credit / alternatives split; hedged vs unhedged foreign sleeve; duration disclosure |
| 3 | Liability composition | Product cohort, guaranteed crediting rate distribution, foreign-currency exposure |
| 4 | ALM / duration-gap disclosure | Asset duration, liability duration, residual gap, sensitivity tables |
| 5 | ESR / solvency margin | Headline ratio, sensitivity to rate / FX / equity / credit / cat shocks |
| 6 | Investment-strategy narrative | Strategic asset allocation outlook, planned shifts, hedge-ratio guidance |
| 7 | Capital-management narrative | Dividend policy (mutual: policyholder dividend; listed: shareholder dividend; subsidiary: intra-group up-stream) |
| 8 | Risk-management governance | ALM committee structure, ORSA disclosure, stress-testing outcomes |

Cross-referencing these sections produces a fuller picture than reading any single section in isolation.

## Related

- [[insurance/INDEX]]
- [[insurance/japan-life-insurance-big-four]]
- [[insurance/sony-life-group-life-operating-model]]
- [[insurance/economic-value-based-solvency]]
- [[insurance/esr-economic-value-solvency]]
- [[insurance/global-solvency-framework-comparison-matrix]]
- [[insurance/mutual-vs-stock-life-insurer]]
- [[insurance/internet-life-insurance-business-model]]
- [[insurance/foreign-life-affiliate-japan-positioning]]
- [[insurance/japan-iaig-ics-mapping]]
- [[JapanFG/nippon-life]]
- [[JapanFG/dai-ichi-life]]
- [[JapanFG/sumitomo-life]]
- [[JapanFG/meiji-yasuda]]
- [[JapanFG/sony-life]]
- [[JapanFG/sony-fg]]
- [[JapanFG/legal-financial-licenses/insurance-license-and-solvency]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: Economic-value solvency regime hub.
- Bank of Japan: monetary policy statements and statistics (JGB yields, FX, balance-sheet figures).
- Ministry of Finance Japan: JGB auction and outstanding statistics.
- Life Insurance Association of Japan: industry-aggregate and member-company disclosure.
- IAIS: Insurance Capital Standard publication.
- Nippon Life, Dai-ichi Life Holdings, Meiji Yasuda, Sumitomo Life, Sony Life: integrated reports and disclosure books for ALM and ESR sensitivity disclosure.
