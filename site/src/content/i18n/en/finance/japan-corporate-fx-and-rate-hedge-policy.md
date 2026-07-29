---
source: finance/japan-corporate-fx-and-rate-hedge-policy
source_hash: f623e0f1a097fe82
lang: en
status: machine
fidelity: ok
title: "Japan corporate FX and rate hedge policy"
translated_at: 2026-07-29T00:00:00.000Z
---

# Japan corporate FX and rate hedge policy

## Wiki route

This page sits under [[finance/INDEX|finance domain]]. Read it with [[finance/japan-acquisition-finance|Japan acquisition finance]] for the deal-financing hedge interface, [[finance/japan-leveraged-buyout-economics|Japan leveraged buyout economics]] for the LBO interest-rate-hedge spine, [[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding unwinding economics]] for the related FV-OCI accounting framework, [[finance/japan-fair-disclosure-and-insider-trading-controls|fair disclosure controls]] for hedge-disclosure information handling, and [[finance/japan-listed-financial-groups-investable-universe|listed financial groups investable universe]] for hedge-counterparty selection.

## TL;DR

Japan listed corporates may use policies covering FX, interest-rate, and commodity risk. Hedge-ratio decisions depend on the company's approved risk policy, exposure tenor, accounting eligibility under its chosen GAAP, derivative cost, natural hedges, and counterparty limits. The approved counterparty is the contracted legal entity; this page does not rank banks or infer market share.

## Hedge policy framework

Table source note: This is a governance and documentation checklist, not a claim that every issuer uses each named committee or reporting cadence. IFRS 9 supplies the hedge-accounting designation requirements, and issuer-specific governance must be verified in EDINET/TDnet disclosures. ^[Sources: https://www.ifrs.org/issued-standards/list-of-standards/ifrs-9-financial-instruments/, https://disclosure2.edinet-fsa.go.jp/, and https://www.jpx.co.jp/english/equities/listing/disclosure/tdnet/.]

| Layer | Issuer-specific verification |
|---|---|
| Board policy | Identify the approving organ and the disclosed objectives, permitted instruments, counterparties, and limits |
| Treasury policy | If disclosed, record the actual hedge-ratio targets, tenor buckets, and designation rules |
| Risk committee | Identify the responsible body, mandate, and review frequency rather than assuming a named committee |
| Hedge-accounting documentation | Apply the reporting framework's designation, effectiveness, and hedge-ratio requirements to the documented relationship |
| Reporting | Record the actual internal and public reporting cadence from dated evidence |

Public disclosure may appear in Securities Report (有価証券報告書) financial-instruments notes, integrated reports, and risk-management sections; absence from one surface does not establish absence of a policy.

### Exposure types

Table source note: The table separates transaction, translation, economic, and net-investment exposure for analysis. Accounting designation and presentation depend on the reporting framework and the issuer's documented risk-management objective. ^[Source: https://www.ifrs.org/issued-standards/list-of-standards/ifrs-9-financial-instruments/.]

| Exposure | Source |
|---|---|
| Transaction exposure | Receivables / payables in foreign currency |
| Translation exposure | Foreign subsidiary balance-sheet translation |
| Economic exposure | Forward revenue / cost streams in foreign currency |
| Net investment exposure | Net equity in foreign operation |

### Hedge-ratio evidence fields

Table source note: No tenor bucket carries a presumed hedge ratio. For each issuer, use its dated risk policy and hedge-accounting disclosures to establish the exposure, forecast-transaction eligibility, designated ratio, instrument, and horizon. ^[Sources: https://www.ifrs.org/issued-standards/list-of-standards/ifrs-9-financial-instruments/, https://disclosure2.edinet-fsa.go.jp/, and https://www.jpx.co.jp/english/equities/listing/disclosure/tdnet/.]

| Exposure field | Verification |
|---|---|
| Contracted receivable / payable | Match currency, amount, due date, natural offsets, derivative notional, and designation |
| Highly probable forecast transaction | Verify the forecast period, probability evidence, designated component, and hedge ratio |
| Longer-dated forecast exposure | Verify policy authority, forecast reliability, liquidity, cost, and rollover assumptions |
| Translation exposure | Distinguish translation sensitivity from a qualifying net-investment hedge |
| Project or financing exposure | Read the project, debt, derivative, and termination terms together |

Hedge ratio is an issuer-policy and designation variable. Sector labels do not prove that an exporter hedges forecast revenue or that an importer hedges purchase orders; cite the named issuer, period, exposure, instrument, and ratio.

### Instrument selection

Table source note: These are instrument mechanics, not a frequency ranking or recommendation. Eligibility, payoff, credit terms, liquidity, accounting designation, and actual use must be established from the contract and issuer disclosure. ^[Sources: https://www.ifrs.org/issued-standards/list-of-standards/ifrs-9-financial-instruments/ and https://disclosure2.edinet-fsa.go.jp/.]

| Instrument | Mechanical capability and check |
|---|---|
| FX forward | Fixes an exchange rate for specified cash flows and dates; verify notional, rate, settlement, and rollover |
| FX option | Creates a contingent payoff; verify premium, strike, expiry, exercise, and sold-option exposure |
| FX swap / cross-currency swap | Exchanges specified currency cash flows; verify principal exchanges, legs, basis, collateral, and termination |
| Collar | Combines bought and sold options; an offsetting upfront premium does not remove payoff, credit, or liquidity risk |
| Currency overlay | May manage portfolio-level currency exposure under a documented mandate |
| Natural hedge | Match only demonstrably offsetting foreign-currency revenue, cost, assets, liabilities, or debt |

For any claimed bond-proceeds swap, cite the named issuer's bond, cross-currency swap or accounting disclosure, currency direction, period, and use of proceeds. Issuer nationality alone does not establish use.

### Exposure types

Table source note: These are rate-sensitive exposure categories for treasury review, not assertions that every item qualifies as an IFRS 9 hedged item. Eligibility and documentation are instrument- and entity-specific. ^[Source: https://www.ifrs.org/issued-standards/list-of-standards/ifrs-9-financial-instruments/.]

| Exposure | Source |
|---|---|
| Floating-rate debt | TONA-based JPY loans, LIBOR-replacement USD / EUR loans |
| Variable-rate lease | IFRS 16 lease accounting variable component |
| Pension liability | Discount-rate sensitivity |
| Bond refinancing | Pre-issuance pipeline hedge |
| Investment portfolio | Insurance / treasury ALM |

### Possible hedge instruments

Table source note: The table describes possible mechanics, not issuer use or accounting eligibility. The designated risk, hedged item, instrument terms, and documentation determine the result. ^[Source: https://www.ifrs.org/issued-standards/list-of-standards/ifrs-9-financial-instruments/.]

| Instrument | Use |
|---|---|
| Interest rate swap (IRS) | Convert floating to fixed (pay-fixed swap) or vice versa |
| Cross-currency interest rate swap (CCIRS) | Combined currency and rate swap |
| Cap / floor | Optional rate protection above / below trigger |
| Collar | Combination of bought cap + sold floor |
| Bond forward / treasury lock | Lock yield ahead of bond pricing |
| Swaption | Option on a future swap |

### TONA transition

The BOJ publishes the uncollateralized overnight call rate used as TONA. A JPY contract may reference compounded TONA, TIBOR, a fixed rate, or another contractually defined benchmark; read the named loan, bond, or swap rather than inferring the benchmark or compounding method. For a legacy JPY-LIBOR contract, verify its actual cessation, fallback, spread adjustment, consent, and amendment documents.

## Hedge accounting under IFRS 9

IFRS 9 introduced a principles-based hedge-accounting framework replacing IAS 39. Major fields:

Table source note: The summary is scoped to the issued IFRS 9 hedge-accounting requirements; preparers must apply the standard and current amendments to their facts rather than rely on this table. ^[Source: https://www.ifrs.org/issued-standards/list-of-standards/ifrs-9-financial-instruments/.]

| Field | IFRS 9 treatment |
|---|---|
| Eligibility | Wider range of hedged items and hedging instruments permitted |
| Effectiveness | Qualitative / quantitative assessment of economic relationship; no fixed 80-125% rule |
| Hedge ratio | Reflects actual ratio used in risk management |
| Hedge-accounting types | Fair-value hedge, cash-flow hedge, net-investment hedge |
| Documentation | Mandatory designation document at inception |
| Rebalancing | Allowed when hedge ratio drifts but economic relationship persists |
| Discontinuation | Apply IFRS 9's prospective-discontinuation criteria when the qualifying criteria are no longer met, after considering required rebalancing |
| Time value of options | If excluded from designation, apply the applicable cost-of-hedging requirements and transaction classification |
| Forward points | If excluded from designation, apply the applicable cost-of-hedging requirements rather than assuming OCI treatment |

### Cash-flow hedge mechanics

| Step | Treatment |
|---|---|
| Designate forecast transaction (e.g. USD revenue) | Hedge instrument: FX forward selling USD |
| Effective portion | Gains / losses deferred in cash-flow-hedge reserve (OCI) |
| Reclassification | When hedged transaction occurs, OCI recycles to P&L |
| Ineffective portion | Recognised in P&L immediately |

### Fair-value hedge mechanics

| Step | Treatment |
|---|---|
| Designate recognised fixed-rate liability for interest-rate risk | A receive-fixed / pay-floating IRS may offset the liability's fair-value sensitivity; use the actual designated relationship |
| Hedging instrument and designated-risk adjustment | The derivative's fair-value change and the hedged item's change attributable to the designated risk are recognised in P&L under the applicable hedge-accounting rules |
| Net effect | Offsets fair-value movement |

### Net-investment hedge mechanics

| Step | Treatment |
|---|---|
| Designate net investment in foreign operation | Hedge instrument: foreign-currency borrowing or forward |
| Effective portion | Deferred in CTA (cumulative translation adjustment) reserve in OCI |
| Reclassification | When foreign operation disposed, CTA recycles to P&L |

## Hedge accounting under JGAAP

Japanese GAAP hedge accounting follows ASBJ standards and implementation guidance. Apply the version effective for the reporting period; this page does not assert equivalence with IFRS 9.

Table source note: The current ASBJ financial-instruments standard and implementation guidance control. The table preserves high-level categories only and must not be used as a substitute for the version effective for the reporting period. ^[Source: https://www.asb-j.jp/en/accounting_standards.html.]

| Field | JGAAP treatment |
|---|---|
| Primary categories | Deferral hedge accounting (繰延ヘッジ会計) and fair-value hedge accounting (時価ヘッジ会計) |
| Special hedge accounting (特例処理) | Available for interest-rate swaps meeting strict criteria; swap fair value not separately recognised |
| Designated hedge accounting (振当処理) | Available for FX hedges; hedged item recorded at hedge rate |
| Effectiveness | Apply the current ASBJ standard and implementation guidance for the reporting period; this page does not carry forward a historical test band |
| Documentation | Required at inception |
| Discontinuation | Apply the current standard's prospective discontinuation conditions, such as expiry, sale, termination or exercise of the hedging instrument, loss of qualifying criteria, or a forecast transaction no longer being expected; documentation alone is insufficient |

Special hedge accounting (特例処理) for an interest-rate swap and designated hedge accounting (振当処理) for a foreign-exchange forward are available only when the applicable requirements are met. Verify the entity's election and presentation from its accounting policy and notes; this page makes no frequency claim.

## Embedded derivative disclosure

Under IFRS 9, embedded derivatives in host financial liabilities follow specific separation rules. Possible features to assess include:

| Type | Examples |
|---|---|
| Equity-conversion option | [[finance/japan-convertible-bond-mechanics|Convertible bond]] embedded conversion right |
| Call / put options | Bond early-redemption rights |
| Indexed coupons | Coupon linked to FX, equity index, commodity, inflation |
| Foreign-currency cash flows | Bond denominated in non-functional currency |
| Index-linked principal | Inflation-linked or commodity-linked principal |

Separation rules require an embedded derivative to be separately accounted for as a derivative if it is not closely related to the host contract, the combined instrument is not measured at fair value through P&L, and the embedded derivative would meet the definition of a stand-alone derivative.

For a convertible bond, classification of the conversion feature depends on the exact contractual terms and IAS 32's own-equity requirements; gross delivery of own shares alone does not establish equity classification. Test the number of shares, amount and currency of consideration, reset/contingent-settlement clauses, and any applicable exception before applying IFRS 9 — see [[finance/japan-convertible-bond-mechanics|convertible bond mechanics]].

### Shōsha commodity hedge

Shōsha may disclose physical commodity exposures and derivative or natural-hedge arrangements. Use each group's dated securities report rather than inferring the size or sophistication of a derivatives book.

| Group | Public disclosure source |
|---|---|
| [[financial-conglomerates/mitsubishi-corp|Mitsubishi Corp]] | Annual securities report; commodity exposure and hedge ratio narrative |
| [[financial-conglomerates/mitsui-co|Mitsui & Co]] | Annual securities report; energy / metals exposure |
| [[financial-conglomerates/itochu-corp|Itochu Corp]] | Annual securities report; resource / non-resource segment exposure |

Commodity hedge instruments include exchange-traded futures (CME, ICE, TOCOM, LME, SHFE), OTC swaps, options, and physical natural hedges through paired buy / sell contracts.

### Manufacturing commodity-risk review

Table source note: Sector labels identify possible input exposures and evidence to inspect, not a claim that a company uses the listed hedge. Confirm the named company's procurement contract, derivative, natural offset, volume, horizon, and accounting treatment. ^[Sources: https://disclosure2.edinet-fsa.go.jp/ and https://www.meti.go.jp/english/statistics/index.html.]

| Sector | Possible commodity exposure | Evidence to verify |
|---|---|---|
| Auto | Steel, aluminium, copper, palladium, lithium, rare earths | Supplier contracts, price-adjustment clauses, inventories, and any disclosed derivatives |
| Electronics | Copper, gold, rare metals, energy | Supplier contracts, pass-through terms, inventories, and any disclosed derivatives |
| Chemicals | Crude oil, naphtha, gas | Feedstock pricing formulas, purchase contracts, and any disclosed futures or swaps |
| Steel | Iron ore, coking coal, scrap | Purchase contracts, sales-price linkage, inventories, and any disclosed derivatives |
| Food / brewing | Grains, sugar, hops, packaging | Purchase commitments, pricing clauses, and any disclosed forwards or futures |
| Energy / utilities | LNG, oil, coal, electricity | Supply contracts, generation/sales offsets, storage, and any disclosed futures, options, or swaps |

For a large industrial consumer, verify which legal entity owns procurement, contracting, derivatives, and storage decisions; organisational form and contract tenor are issuer-specific.

## Hedge counterparty selection

Table source note: The table is a non-ranked counterparty-category map as of 2026-07-29, not evidence of dominance or a recommendation. Dealer participation and exchange-traded activity must be verified from the contracting entity, BOJ turnover statistics, and the relevant exchange product/clearing disclosures. ^[Sources: https://www.boj.or.jp/en/statistics/bis/deri/index.htm and https://www.jpx.co.jp/english/derivatives/.]

| Counterparty | Role |
|---|---|
| Japanese bank dealers | Potential FX / IRS counterparties; confirm the approved contracting entity and product permissions |
| Trust-bank dealers | Potential hedge, custody, or ALM counterparties; functions vary by entity |
| Global bank dealers | Potential cross-border or structured-hedge counterparties |
| Exchange and clearing venues | Listed or cleared derivatives where the relevant contract is admitted |
| Commodity exchanges | Venue choice depends on the commodity, contract, jurisdiction, and access arrangement |

For each counterparty relationship, verify approved-entity limits, credit criteria, notional and mark-to-market exposure, netting, collateral, clearing, wrong-way risk, and termination terms. A CSA is contract-specific and cannot be inferred from notional size.

## Disclosure surfaces

| Surface | Document |
|---|---|
| Securities Report financial-instruments notes | Annual; fair-value disclosure, hedge designation, counterparty risk, sensitivity |
| Statutory interim filing | Verify the current filing regime and reporting period; do not assume the former quarterly Securities Report remains required |
| Risk-management section of integrated report | Narrative on hedge policy and outcomes |
| TDnet | Material derivative loss / gain disclosure if disclosure threshold triggered |
| Board / committee reports | Internal hedge-effectiveness reports |

[[finance/japan-fair-disclosure-and-insider-trading-controls|Fair disclosure and insider trading controls]] apply to material hedge information that could move stock price.

## Pre-issuance bond hedge

Before a foreign-currency bond issuance, an issuer may consider a treasury lock, forward-starting swap, FX instrument, no derivative, or another documented strategy. After issuance, it may consider a cross-currency swap in either direction depending on the actual proceeds and liabilities. Establish the decision, designation, notional, timing, counterparties, and termination terms from named evidence; do not infer a hedge from the issuance alone. Related interfaces include [[finance/japan-acquisition-finance|Japan acquisition finance]] and any separately documented overlay discussed in [[finance/japan-convertible-bond-mechanics|convertible bond mechanics]].

## Related

- [[finance/INDEX]]
- [[finance/japan-acquisition-finance]]
- [[finance/japan-leveraged-buyout-economics]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[finance/japan-convertible-bond-mechanics]]
- [[finance/japan-fair-disclosure-and-insider-trading-controls]]
- [[finance/japan-activist-investor-playbook]]
- [[finance/japan-shareholder-proposal-and-agm-voting-route]]
- [[finance/japan-large-shareholding-disclosure]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[finance/japan-ib-league-table]]
- [[finance/japan-tender-offer-process]]
- [[finance/japan-mbo-and-squeeze-out-process]]
- [[finance/cross-border-m-a-japan]]
- [[finance/multi-jurisdiction-identity-tax-leverage]]
- [[banking/regional-bank-consolidation-pattern]]
- [[securities/japan-underwriting-market-structure]]
- [[megabanks/mufg]]
- [[megabanks/smfg]]
- [[megabanks/mizuho-fg]]
- [[financial-conglomerates/mitsubishi-corp]]
- [[financial-conglomerates/mitsui-co]]
- [[financial-conglomerates/itochu-corp]]
- [[financial-regulators/dbj]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: Corporate Governance Code hub.
- JPX: TDnet timely-disclosure overview and listed-company search.
- EDINET: securities reports.
- BOJ: TONA / TONIA reference rate statistics.
- MoF: foreign exchange and international policy statistics.
- METI: trade and industry statistics.
- ASBJ (Accounting Standards Board of Japan): hedge-accounting guidance.
