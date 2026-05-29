---
title: "Japan non-life underwriting cycle"
aliases:
  - "japan-non-life-underwriting-cycle"
  - "Japan P&C combined ratio cycle"
  - "日本 損保 アンダーライティング サイクル"
  - "Japan non-life big three combined ratio"
domain: "insurance"
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [insurance, non-life, P&C, japan, underwriting-cycle, combined-ratio, reinsurance]
status: active
sources:
  - "https://www.sonpo.or.jp/about/gaiyo/"
  - "https://www.tokiomarinehd.com/en/ir/download/annual_report.html"
  - "https://www.ms-ad-hd.com/en/ir/library/disclosure.html"
  - "https://www.sompo-hd.com/en/ir/data/annual/"
  - "https://www.fsa.go.jp/policy/economic_value-based_solvency/index.html"
  - "https://www.giroj.or.jp/english/"
---

# Japan non-life underwriting cycle

## Wiki route

This entry sits under [[insurance/INDEX|insurance index]] and is the underwriting-cycle deep dive for Japanese non-life insurers. Read it together with [[insurance/japan-nonlife-big-three|Japan non-life big three]] for the entity-level routing, with [[insurance/natcat-reinsurance-japan|nat-cat reinsurance Japan]] for the catastrophe pricing layer, with [[insurance/earthquake-insurance-public-private-scheme|earthquake insurance public-private scheme]] for the household earthquake carve-out, with [[insurance/economic-value-based-solvency|economic-value-based solvency]] for the regulatory frame, with [[insurance/global-solvency-framework-comparison-matrix|global solvency framework matrix]] for cross-jurisdiction comparison, with [[insurance/japan-iaig-ics-mapping|Japan IAIG-ICS mapping]] for the group-level supervisory layer, and with [[insurance/insurance-agency-and-brokerage-japan|agency and brokerage Japan]] for the distribution layer that drives expense ratios.

Operating-company routing goes through [[JapanFG/tokio-marine-nichido-fire|Tokio Marine & Nichido Fire]], [[JapanFG/mitsui-sumitomo-insurance|Mitsui Sumitomo Insurance]], [[JapanFG/aioi-nissay-dowa-insurance|Aioi Nissay Dowa Insurance]], and [[JapanFG/sompo-japan-insurance|Sompo Japan Insurance]]. Holding-company routing goes through [[JapanFG/tokio-marine|Tokio Marine]], [[JapanFG/msad|MS&AD]], and [[JapanFG/sompo|Sompo]]. License context is in [[JapanFG/legal-financial-licenses/insurance-license-and-solvency|insurance license and solvency route]].

## TL;DR

The Japanese non-life underwriting cycle is dominated by three product-line dynamics: auto rate adequacy under the tier-rating reform regime, fire / property rate adequacy under increasing catastrophe loading, and specialty-line cycle dynamics (cyber, D&O, marine) imported from global market conditions. Combined ratio at the operating-company level decomposes into loss ratio (claims paid + reserve change / earned premium) plus expense ratio (acquisition + administration / earned premium). Combined ratios under 100% indicate underwriting profit; above 100% indicate underwriting loss offset (or not) by investment income.

The big-three operating entities — [[JapanFG/tokio-marine-nichido-fire|Tokio Marine & Nichido Fire]], [[JapanFG/mitsui-sumitomo-insurance|Mitsui Sumitomo Insurance]] + [[JapanFG/aioi-nissay-dowa-insurance|Aioi Nissay Dowa Insurance]] under MS&AD, and [[JapanFG/sompo-japan-insurance|Sompo Japan Insurance]] — share the same domestic market structure but differ in product-line mix, channel concentration, overseas earnings offset, and reinsurance procurement strategy.

Reinsurance procurement timing matters: April 1 renewal is the dominant Japan-domestic reinsurance treaty cycle (aligned with the Japan financial year), with mid-year and January renewals also relevant. Hard-market and soft-market cycles in global reinsurance feed directly into Japanese fire / property and catastrophe pricing.

## Combined-ratio decomposition

| Component | Definition | Typical drivers |
|---|---|---|
| Loss ratio | (incurred losses + LAE) / earned premium | Frequency, severity, catastrophe events, reserve development |
| Expense ratio | (acquisition + operating expenses) / earned premium | Agency commission, branch overhead, IT investment, conduct-compliance overhead |
| Combined ratio | Loss ratio + expense ratio | Excludes investment return |

A combined ratio of 95% means 5 percentage points of underwriting profit per yen of earned premium, before investment income. Combined ratios decompose by product line: auto, fire, marine, casualty / GL, accident, miscellaneous. Catastrophe-year combined ratios can spike well above 100% in fire and overseas property lines, then revert below 100% in non-cat years.

### Auto market structure

Voluntary auto insurance (任意自動車保険) is the largest line by premium for Japanese non-life insurers, complemented by compulsory automobile liability insurance (自動車損害賠償責任保険 / 自賠責保険) which is a public-private scheme administered separately.

### Tier-rating (型式別料率) reform

The voluntary auto market uses a tier-rating system (型式別料率クラス制度) operated through the General Insurance Rating Organization of Japan (損害保険料率算出機構, GIROJ) advisory pure-premium-rate framework. Vehicles are assigned to rating classes based on observed claim experience by make / model / type, and the rating class is updated periodically. Higher-loss vehicle classes face higher base premium; lower-loss classes face lower premium.

The reform-relevant points:

- the tier-rating refresh cycle adjusts pure-premium-rate signals to claim experience;
- ride-share, telematics-based usage-based insurance (UBI), and ADAS (advanced driver assistance) feature adoption changes the underlying claim frequency and severity;
- repair costs are rising as vehicle electronics, sensors, and ADAS components push average claim severity higher even when frequency falls;
- the tier-rating system aims to keep rate adequacy aligned with these shifts, but the reform cadence may lag actual experience by one to two cycles.

### Auto loss ratio drivers

| Driver | Direction | Mechanism |
|---|---|---|
| Aging vehicle parc | Mixed | Older vehicles may have lower replacement value but higher repair frequency |
| ADAS adoption | Lower frequency, higher severity | Fewer crashes but each crash costs more to repair |
| Telematics / UBI | Self-selection of safer drivers | Reduces frequency among UBI subscribers; cross-subsidy implications |
| EV transition | Higher severity initially | Battery damage costs are high; specialized repair networks limited |
| Driver demographics | Aging driver base | Frequency / severity patterns shift |
| Repair shop ecosystem | Concentration / pricing | Agency / repair-shop relationships matter for severity outcome |

Big-three rate-adequacy responses include refreshed pure-premium-rate use, internal pricing tier sophistication beyond GIROJ pure-premium-rate guidance, channel discipline on under-priced agency books, and reinsurance retention adjustment.

### Auto expense ratio drivers

Auto distribution in Japan is heavily agency-driven (car dealers, repair shops, professional agencies). Agency commission and conduct-compliance costs structure the expense ratio. Direct-distribution challengers (online direct auto P&C) compete on lower expense ratio and have built share in specific consumer segments.

### Fire / property structure

Fire insurance (火災保険) in Japan covers residential and commercial property against fire, water damage, wind, and other named perils. Earthquake risk for households is carved out into the [[insurance/earthquake-insurance-public-private-scheme|public-private earthquake insurance scheme]]; commercial earthquake property is generally underwritten privately, often with cat reinsurance and explicit sub-limits.

### Catastrophe loading trends

Multi-year experience of typhoon, flood, and secondary-peril events has driven repeated upward revisions of fire / property rates:

- Typhoon Jebi (2018), Faxai (2019), Hagibis (2019) produced large insured losses;
- subsequent typhoon and flood seasons added further loss experience;
- the GIROJ advisory pure-premium-rate refresh cycle has trended upward to reflect this experience;
- reinsurance pricing (driven by global retro-pricing and Japan-specific cat experience) has trended upward, feeding directly into the cedent's net cost of risk transfer.

### Fire combined ratio dynamics

Fire combined ratios in non-catastrophe years can run below 100% on a discrete-year basis. In major catastrophe years, fire combined ratios commonly exceed 100% materially and require reinsurance recovery + prior-year reserve adequacy to stabilize the holding-company result.

Big-three rate-adequacy responses include:

- raising direct premium rates per GIROJ advisory revisions;
- reducing exposure concentrations in highest-hazard zones;
- restructuring coverage terms (deductibles, sub-limits, claim-handling conditions);
- adjusting reinsurance retention and the layered cover structure;
- exiting unprofitable agency-distributed books selectively.

### Cyber

Cyber insurance is a growth specialty line driven by ransomware exposure, supply-chain attacks, regulatory disclosure requirements, and corporate-customer demand. The global cyber market cycle is hardening / softening on multi-year cycles. Big-three Japan operating companies write cyber both domestically and through international subsidiaries (notably Tokio Marine's overseas specialty franchise via HCC and others).

Cyber underwriting cycle drivers:

- ransomware event frequency and severity;
- regulatory cyber-disclosure expectations (Japan, US SEC, EU);
- model maturity for cyber loss distributions (still evolving);
- reinsurance capacity for cyber peril (limited; concentration concerns).

### D&O

Directors and officers liability follows the global D&O cycle, with multi-year hard / soft cycles driven by securities litigation frequency, regulatory enforcement, and corporate-governance failures. Japanese D&O is shaped by Japanese securities law, corporate governance code, and listed-company expectations.

### Marine

Marine insurance (cargo, hull, P&I) is a globally traded specialty line. Japanese marine is structured around major shipping groups (NYK, MOL, K-Line), trading-house cargo flows, and global hull / liability syndicate participation including Lloyd's. The marine cycle is driven by global trade flows, geopolitical disruption (Red Sea routing, sanctions, sanctions enforcement), and casualty experience.

## Reinsurance procurement timing

Japanese reinsurance treaties follow a primary April 1 renewal cycle aligned with the Japan financial year, with smaller renewals at January and July. Procurement dynamics:

| Element | Description |
|---|---|
| April 1 renewal | Primary cedent treaty renewal for Japan-domestic books |
| January 1 renewal | Global market reference cycle; affects pricing benchmarks |
| Mid-year renewal | Selected lines and global retrocession |
| Reinsurance broker | Major global brokers (Aon, Guy Carpenter, Howden Re) intermediate |
| Reinsurer panel | Diversified panel including global reinsurers (Munich Re, Swiss Re, Hannover Re, SCOR, Berkshire Re, Lloyd's syndicates) and Japanese reinsurance arms |
| Layered structure | Per-event excess-of-loss layers above retention, plus aggregate covers, plus catastrophe layers, plus retrocession |
| Reinstatement premium | Triggered after cat events; affects net-cost economics |

Hard reinsurance markets (post-large-cat) push pricing upward and constrain capacity. Soft reinsurance markets (post-low-cat-year multi-cycle) push pricing downward and increase capacity. Japanese cedents must time retention adjustments and layer purchases against global market conditions, not only domestic loss experience.

## Investment-income offset and capital lens

A non-life insurer's bottom line equals underwriting result (combined ratio) plus investment return on the policy-holder float, minus tax. In soft underwriting cycles the investment-income offset can absorb modest underwriting losses; in hard cycles investment-income improvement plus underwriting recovery compound positively.

Under the [[insurance/economic-value-based-solvency|economic-value-based solvency]] regime the ESR captures both underwriting risk (non-life cat and non-cat) and market risk (equity, credit, interest-rate) at a unified economic-capital basis. The [[insurance/global-solvency-framework-comparison-matrix|global solvency framework matrix]] discusses the regulatory-capital architecture; the [[insurance/japan-iaig-ics-mapping|Japan IAIG-ICS mapping]] discusses how the same group-level capital is reported under ICS for designated IAIGs.

## ESR cat-module sensitivity

The non-life cat module under the [[insurance/economic-value-based-solvency|economic-value-based ESR]] regime applies stress scenarios for major Japanese perils:

| Peril | ESR cat-module treatment |
|---|---|
| Earthquake (commercial property) | Probabilistic shock scenarios calibrated to Japan-specific seismic exposure |
| Typhoon | Wind and storm-surge scenarios reflecting Pacific typhoon track distribution |
| Flood / inland water | Riverine and pluvial flood scenarios |
| Volcanic | Where applicable, ash-fall and lahar scenarios |
| Overseas catastrophe | Foreign-subsidiary cat exposure layered into group-level capital |

Household earthquake risk is structurally outside private non-life cat-module sensitivity because it sits in the [[insurance/earthquake-insurance-public-private-scheme|public-private scheme]] administered through [[JapanFG/japan-earthquake-reinsurance|Japan Earthquake Reinsurance]]. Commercial earthquake and overseas earthquake exposure are private and feed into the cat module.

The cat-module capital charge directly affects how much catastrophe risk each big-three group can retain on its own balance sheet versus how much it must cede to external reinsurers. Capital efficiency thus depends on a combined reinsurance-and-ESR optimization rather than a reinsurance-only or capital-only decision.

## Group-level vs operating-company-level reading

A common reading mistake is to read a holding-company integrated report combined-ratio number as if it were a single operating-company combined ratio. The structure for each big-three group is:

| Group | Operating-company combined ratios consolidated into group | Group-level adjustments |
|---|---|---|
| [[JapanFG/tokio-marine|Tokio Marine]] | [[JapanFG/tokio-marine-nichido-fire|TMNF]] domestic + Philadelphia + HCC + Pure + Lloyd's syndicate + other | FX translation, consolidation eliminations, group reinsurance recoveries |
| [[JapanFG/msad|MS&AD]] | [[JapanFG/mitsui-sumitomo-insurance|MSI]] + [[JapanFG/aioi-nissay-dowa-insurance|ADI]] domestic + MS Amlin + overseas | FX translation, consolidation eliminations, intra-group reinsurance |
| [[JapanFG/sompo|Sompo]] | [[JapanFG/sompo-japan-insurance|Sompo Japan Insurance]] domestic + Sompo International + other | FX translation, consolidation eliminations, intra-group reinsurance |

The domestic Japan combined ratio and the overseas combined ratio can move in opposite directions in a given year (e.g., calm Japan typhoon year combined with active US Atlantic hurricane season). The group-level result is the diversification-weighted blend. For each group the diversification benefit varies by year and by where catastrophe events actually land.

### Tokio Marine Nichido Fire (under Tokio Marine HD)

- largest single domestic non-life operating company by premium;
- diversified across auto, fire, marine, specialty;
- holding-company group ([[JapanFG/tokio-marine|Tokio Marine]]) benefits from substantial overseas earnings offset (Philadelphia Consolidated, HCC, Pure Group, Lloyd's syndicate);
- reinsurance procurement managed within group capital framework with overseas-subsidiary diversification.

### MS&AD operating companies — MSI and ADI

- [[JapanFG/mitsui-sumitomo-insurance|Mitsui Sumitomo Insurance]] and [[JapanFG/aioi-nissay-dowa-insurance|Aioi Nissay Dowa Insurance]] are both major domestic operating companies under [[JapanFG/msad|MS&AD]];
- ADI's mobility / Toyota franchise creates a distinct auto-line distribution and customer base;
- MS Amlin contributes specialty / reinsurance exposure;
- overseas P&C portfolio diversifies group earnings.

### Sompo Japan Insurance (under Sompo HD)

- [[JapanFG/sompo-japan-insurance|Sompo Japan Insurance]] is the single major domestic non-life operating company under [[JapanFG/sompo|Sompo]];
- Sompo International contributes overseas specialty / reinsurance;
- agency channel and customer-explanation conduct topics have been part of recent supervisory dialogue;
- domestic auto and fire lines remain the core premium base.

## Related

- [[insurance/INDEX]]
- [[insurance/japan-nonlife-big-three]]
- [[insurance/natcat-reinsurance-japan]]
- [[insurance/earthquake-insurance-public-private-scheme]]
- [[insurance/economic-value-based-solvency]]
- [[insurance/esr-economic-value-solvency]]
- [[insurance/global-solvency-framework-comparison-matrix]]
- [[insurance/japan-iaig-ics-mapping]]
- [[insurance/insurance-agency-and-brokerage-japan]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[insurance/foreign-life-affiliate-japan-positioning]]
- [[insurance/saison-automobile-fire]]
- [[JapanFG/tokio-marine]]
- [[JapanFG/msad]]
- [[JapanFG/sompo]]
- [[JapanFG/tokio-marine-nichido-fire]]
- [[JapanFG/mitsui-sumitomo-insurance]]
- [[JapanFG/aioi-nissay-dowa-insurance]]
- [[JapanFG/sompo-japan-insurance]]
- [[JapanFG/legal-financial-licenses/insurance-license-and-solvency]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[INDEX|FinWiki index]]

## Sources

- General Insurance Association of Japan (日本損害保険協会): industry overview and statistics.
- General Insurance Rating Organization of Japan (損害保険料率算出機構, GIROJ): advisory pure-premium-rate publications.
- Tokio Marine Holdings: integrated and annual reports.
- MS&AD Holdings: integrated reports and disclosure library.
- Sompo Holdings: integrated and annual reports.
- FSA: 経済価値ベースのソルベンシー規制等について.
