---
title: "Japan project finance stack diagram (JOGMEC / JBIC / NEXI / megabank / SPV)"
aliases:
  - "policy-finance/japan-project-finance-stack-diagram"
  - "japan-project-finance-stack-diagram"
  - "Japan overseas project finance stack"
  - "JOGMEC JBIC NEXI megabank stack"
  - "日本プロジェクトファイナンス・スタック"
domain: "policy-finance"
created: 2026-05-24
last_updated: 2026-05-24
last_tended: 2026-05-24
review_by: 2026-11-20
confidence: likely
tags: [policy-finance, project-finance, export-credit, lng, mining, infrastructure, japan, eca]
status: active
sources:
  - "https://www.jbic.go.jp/en/"
  - "https://www.nexi.go.jp/en/"
  - "https://www.jogmec.go.jp/english/"
  - "https://www.oecd.org/trade/topics/export-credits/arrangement-and-sector-understandings/"
  - "https://www.jbic.go.jp/en/information/press/press-2020/0703-013462.html"
  - "https://www.meti.go.jp/english/policy/trade_and_invest/export_invest.html"
---

# Japan project finance stack diagram (JOGMEC / JBIC / NEXI / megabank / SPV)

## Wiki route

This entry sits under [[policy-finance/INDEX|policy-finance index]] as the cross-institution map of how Japan finances overseas resource and infrastructure projects. Read it with [[financial-regulators/jbic]], [[policy-finance/nexi]], and [[policy-finance/jogmec]] for each institution in isolation, with [[policy-finance/oecd-export-credit-arrangement]] for the regulatory ceiling on official terms, and with [[finance/japan-acquisition-finance]] for how the same megabanks structure private syndicated debt outside the policy-finance perimeter.

## TL;DR

A typical Japanese overseas resource or infrastructure project does not sit on one balance sheet. Risk is sliced across four state and private layers stacked behind a sponsor SPV: [[policy-finance/jogmec|JOGMEC]] takes equity and exploration / geological risk at the upstream layer, [[financial-regulators/jbic|JBIC]] lends sovereign-aligned overseas investment loans, untied loans, and export buyer credit, [[policy-finance/nexi|NEXI]] insures political and commercial risk on top of commercial bank lending, and the megabank syndicate ([[megabanks/mufg|MUFG]], [[megabanks/smfg|SMFG / SMBC]], [[megabanks/mizuho-fg|Mizuho FG]]) provides commercial loans, often with one bank as agent / facility bank. The stack exists because no single balance sheet — public or private — can carry the full bundle of exploration risk, sovereign risk, political risk, and long-tenor commercial risk on its own.

## ASCII diagram of the stack

```
                         +---------------------------------------+
                         |        SPONSOR SPV / PROJECT CO       |
                         |  (trading houses, oil majors, IPP /   |
                         |   miners; equity sponsors;             |
                         |   limited-recourse borrower)           |
                         +-------------------+-------------------+
                                             ^
                                             |  equity + senior debt
                                             |
       +----------+   equity / +-------------+-------------+   commercial loan
       |          |  ex-risk   |       FINANCING STACK     |   tranche
       |  JOGMEC  |----------->|                           |<------------------+
       |          |  resource  |   senior debt  |  equity  |                   |
       +----------+  equity    |   tranches     |  layer   |                   |
            ^                  +---+-----+------+----+-----+                   |
            |  policy /            |     |           |                         |
            |  energy security     |     |           |                         |
            |                      v     v           v                         |
       +----+----+        +--------+   +-------+   +---------+        +--------+--------+
       |  METI / |        |  JBIC  |   | NEXI  |   |  Other  |        |    Megabank    |
       |  MOFA   |        | (ECA   |   |(ECA   |   | ECAs /  |        |    syndicate   |
       |  policy |        | direct |   |insur- |   | MDBs    |        | MUFG / SMBC /  |
       +---------+        | loan / |   |ance)  |   | (co-fin)|        |    Mizuho      |
                          | untied |   |       |   |         |        | (commercial    |
                          | loan / |   |       |   |         |        |  loans, agent  |
                          | buyer  |   |       |   |         |        |  bank, hedges) |
                          | credit)|   |       |   |         |        +--------+-------+
                          +---+----+   +---+---+   +----+----+                 |
                              |            |            |                      |
                              |  loan      |  insurance |  co-financing        | commercial
                              |  proceeds  |  cover     |                      | loan
                              v            v            v                      v
                         +----+------------+------------+----------------------+----+
                         |               COMMON TERMS / INTERCREDITOR              |
                         |  OECD Arrangement minimum premia + tenor caps;          |
                         |  Equator Principles ESG screen; common security trust   |
                         +----------------------------+---------------------------+
                                                      |
                                                      v
                                                Project cash flows
                                          (LNG offtake, mining offtake,
                                           power PPA, infra availability)
```

The diagram is stylised. Real deals shuffle the order — e.g., JBIC may take a direct equity stake via its special operations account, NEXI may wrap a portion of a commercial loan rather than an export contract, and multilaterals (ADB, World Bank, AIIB) or peer ECAs (K-EXIM, US EXIM, EDC, KfW IPEX) often sit alongside the Japanese stack.

### JOGMEC — equity / exploration risk

[[policy-finance/jogmec|JOGMEC]] is the resource-security node. On the project finance stack it carries the risk that other lenders refuse to underwrite: pre-FID exploration, geological and reserve risk, and equity participation in upstream oil, gas, and critical-mineral assets. Instruments include equity capital injection into resource-development subsidiaries of Japanese trading houses and utilities, asset acquisition support, and liability guarantees for exploration borrowings. JOGMEC's presence in the cap table is often the signal that lets [[financial-regulators/jbic|JBIC]] and the megabank syndicate move forward — once reserves are proved up and the project is bankable, the senior debt layer can be sized.

### JBIC — sovereign-aligned overseas investment loan, untied loan, export buyer credit

[[financial-regulators/jbic|JBIC]] is the Japanese state's direct lending arm for overseas projects. On the stack it typically appears as one or more of: an **export buyer credit** to a foreign buyer of Japanese equipment (e.g., a turbine, a liquefaction train, a rail system); an **overseas investment loan** to a Japanese-affiliated SPV co-lending alongside the megabanks; or an **untied loan** to a sovereign or sovereign-adjacent borrower to secure long-term resource imports back to Japan. JBIC's role is partly to bring sovereign-aligned tenor (15–25 years for resource and infrastructure) and partly to provide a state counterparty that commercial banks can sit behind.

### NEXI — political-risk / commercial-risk insurance

[[policy-finance/nexi|NEXI]] wraps risks the commercial lenders will not take naked. Core products on a project finance stack are **Overseas Investment Insurance** (covers expropriation, war, transfer-restriction, and breach of contract on equity investment); **Trade and Investment Insurance for Buyer's Credit** (covers political and commercial default risk on a commercial bank loan to a foreign buyer); and **Loan Insurance** (covers political / commercial default on overseas lending). With NEXI cover, the megabank tranche is effectively partly state-guaranteed for risk-weighted-asset purposes and country-limit purposes.

### Megabank syndicate — commercial bank loans, agent-bank role

The Japanese megabank trio — [[megabanks/mufg|MUFG]], [[megabanks/smfg|SMFG / SMBC]], and [[megabanks/mizuho-fg|Mizuho FG]] — provides the commercial loan tranche, almost always alongside foreign banks (French, Singaporean, US, Australian) on large LNG and mining deals. One bank typically takes the **agent / facility-agent** role, runs intercreditor mechanics, and manages drawdowns and waterfall. The megabanks also provide ancillary services: FX and interest-rate hedges, working-capital lines, trade finance for offtake flows, and post-COD refinancing into bond or sustainability-linked markets. Outside the policy-finance perimeter, the same banks structure pure private deals — see [[finance/japan-acquisition-finance|Japan acquisition finance]] for how the same syndicate machinery is reused for LBOs and corporate M&A.

### Sponsor SPV — project company, equity sponsors

The borrower of record is a single-purpose project company. Equity sponsors are typically a consortium of: a Japanese trading house ([[megabanks/mufg|MUFG]] / [[megabanks/smfg|SMFG]] / [[megabanks/mizuho-fg|Mizuho FG]] are not the equity sponsors — the trading houses are: Mitsui, Mitsubishi Corp, Sumitomo Corp, Itochu, Marubeni, Sojitz), a Japanese utility (JERA, Tokyo Gas, Osaka Gas, Kansai Electric), a host-country national oil company or national mining company, and one or more international resource majors (e.g., TotalEnergies, Shell, BHP, Rio Tinto). The SPV is limited-recourse: lenders look principally to project cash flows, not sponsor balance sheets.

## Typical deal flow timeline

| Stage | Months from start | What happens | Who is driving |
|---|---|---|---|
| Concept / LOI | 0–6 | Pre-feasibility, resource identification, host-country MOU, term sheet between sponsors | Trading houses, JOGMEC scoping |
| Pre-FEED / FEED | 6–24 | Engineering studies, environmental and social impact assessment, fiscal regime negotiation | Sponsors, EPC contractors |
| Bankability work | 18–36 | Lenders' technical advisor, market consultant, legal due diligence, insurance broker bind structure | Megabanks, JBIC, NEXI underwriters |
| FID | ~24–36 | Final investment decision by sponsors conditional on financing | Sponsor boards |
| Financial close | 24–42 | Common terms agreement, intercreditor agreement, ECA documentation, security trust | Agent bank, lenders' counsel |
| Drawdown / construction | 36–84 | Pro-rata drawdowns across JBIC, NEXI-covered commercial tranches, sponsor equity | EPC, owner's engineer |
| COD / first cargo | ~7 years | Mechanical completion, lender reliability test, switch from sponsor support to project cash flow | Project Co operations |
| Operations / refinance | 7+ years | Senior debt repayment from offtake revenues; potential bond refinancing of commercial tranche | Treasurer / agent bank |

Real deals slip. LNG mega-projects often take 5–8 years from FID to first cargo and another 10–15 years to full senior debt repayment.

## Recent illustrative examples

Only publicly announced involvement is named here; tranche sizes and structures are simplified.

- **Mozambique LNG (Area 1)** — JBIC arranged a senior loan as part of a multi-ECA package; NEXI provided insurance cover on commercial bank tranches; Japanese megabanks participated in the commercial tranche alongside US EXIM, UKEF, and other ECAs. Sponsor consortium included TotalEnergies (operator), Mitsui, ONGC Videsh, and others. The project illustrates ECA-stacking under force-majeure stress after the 2021 security incident.
- **Australia LNG (Ichthys, Wheatstone, and earlier North West Shelf expansions)** — Multiple Japanese-led LNG developments financed with JBIC direct lending, NEXI-covered commercial bank tranches, and megabank syndicates. Sponsors include INPEX (Ichthys operator), Chevron, Shell, and Japanese trading-house / utility equity slices.
- **Copper / lithium mining** — JOGMEC has publicly announced equity participation in copper, nickel, and lithium projects through Japanese trading houses (e.g., past investments in Chilean and Australian copper, Canadian and Australian lithium, Indonesian nickel) — typical JOGMEC stake is a minority equity line behind a Japanese sponsor, with commercial debt outside JOGMEC.
- **Infrastructure: power and rail** — JBIC overseas investment loans plus NEXI buyer-credit insurance have supported Japanese-led IPP projects (gas-fired and renewables) in South and Southeast Asia, and rolling-stock / urban-rail packages (e.g., MRT / metro deliveries) tied to Japanese rail manufacturers.

For specific tranche sizes, confirm against JBIC and NEXI press releases for the exact facility name and date.

## How this differs from pure commercial syndicated loans

A pure commercial syndicated loan — for a domestic Japanese acquisition or a corporate refinancing — does not need JOGMEC, JBIC, or NEXI. The megabanks lend on their own book against the corporate balance sheet, often with covenants tied to leverage and interest coverage, and tenors of 5–10 years. See [[finance/japan-acquisition-finance|Japan acquisition finance]] for that structure.

The project-finance stack is different in five ways:
1. **Risk slicing**: each layer takes a defined slice (exploration, sovereign tenor, political risk, commercial credit) rather than one balance sheet absorbing everything.
2. **Tenor**: ECA tranches push senior debt to 15–25 years, beyond what private syndicates support.
3. **Pricing discipline**: minimum premia and CIRR floors under the [[policy-finance/oecd-export-credit-arrangement|OECD Arrangement]] prevent ECA price competition from collapsing margins.
4. **Recourse**: limited to project cash flows and a defined sponsor-support envelope, not full corporate recourse.
5. **Documentation weight**: common terms agreements, intercreditor agreements, and ECA-specific covenants make the documentation package an order of magnitude heavier than a domestic syndicated loan.

## Why each layer exists — market-failure framing

- **Exploration risk (JOGMEC)**: Upstream geological risk has heavy-tailed loss distributions and long lead times. Private equity capital alone is unwilling to fund pre-FID exploration in geopolitically sensitive jurisdictions for marginal-return critical minerals. A state equity / risk-sharing vehicle is the only buyer of that risk at a price the Japanese policy objective (resource security) demands.
- **Sovereign-tenor lending (JBIC)**: Commercial banks face Basel risk-weighting and depositor-tenor mismatches that make 20-year unhedged sovereign-exposure lending economically unattractive. A state lender with access to government-backed funding can extend that tenor at a politically tolerable price.
- **Political-risk insurance (NEXI)**: Private political-risk insurance markets (Lloyd's, MIGA, private syndicates) have capacity caps per country and per peril. For a multi-billion-dollar LNG project in a frontier country, private capacity is insufficient; state insurance fills the gap.
- **Commercial-bank syndicate (megabanks)**: Even with ECA backing, private banks are needed for ancillary services (hedging, agent role, working capital) and to provide market-pricing discipline that pure state finance would lack. The presence of [[megabanks/mufg|MUFG]], [[megabanks/smfg|SMFG]], and [[megabanks/mizuho-fg|Mizuho FG]] also keeps the project compliant with Equator Principles ESG due diligence, which the state institutions also reference.
- **SPV / sponsor**: A limited-recourse vehicle is required so that project failure does not impair the trading-house or utility parent rated balance sheet, which is what allows the parent to participate in multiple parallel projects.

Each layer absorbs a risk that the layers below it cannot price. Remove any one layer and the deal does not get built — or it gets built only by a competitor's policy-finance stack.

## Related

- [[policy-finance/INDEX]]
- [[financial-regulators/jbic]]
- [[policy-finance/nexi]]
- [[policy-finance/jogmec]]
- [[policy-finance/oecd-export-credit-arrangement]]
- [[policy-finance/japan-policy-finance-system]]
- [[megabanks/mufg]]
- [[megabanks/smfg]]
- [[megabanks/mizuho-fg]]
- [[finance/japan-acquisition-finance]]

## Sources

- JBIC official site (https://www.jbic.go.jp/en/) — institutional role, lending products, overseas investment loan / untied loan / export buyer credit definitions.
- NEXI official site (https://www.nexi.go.jp/en/) — Overseas Investment Insurance, Trade and Investment Insurance, Loan Insurance product descriptions.
- JOGMEC official site (https://www.jogmec.go.jp/english/) — equity participation, asset acquisition support, exploration / development risk-sharing mandate.
- OECD Arrangement on Officially Supported Export Credits (https://www.oecd.org/trade/topics/export-credits/arrangement-and-sector-understandings/) — minimum premia, repayment-term caps, sector understandings including the Coal Sector Understanding.
- JBIC and project-sponsor public press releases for Mozambique LNG financing.
- METI export and investment insurance overview (https://www.meti.go.jp/english/policy/trade_and_invest/export_invest.html) — policy framing of NEXI / JBIC roles.
