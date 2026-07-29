---
source: derivatives/cds-japan-corporate-spread-mechanics
source_hash: b4919f2b533c6175
lang: en
status: machine
fidelity: ok
title: "Japan corporate CDS spread mechanics"
translated_at: 2026-07-29T22:35:00.000Z
---

# Japan corporate CDS spread mechanics

## TL;DR

Japan corporate CDS spread is the running-basis-point premium a protection buyer pays to a protection seller in exchange for contractually specified credit protection on a Japanese reference entity. Market quotes embed default risk, recovery assumptions, liquidity, funding and other premia; a sovereign-plus-sector decomposition is an analytical framework rather than the quoting rule. Applicable credit events and settlement follow the transaction's confirmation and incorporated ISDA definitions. After a credit event, an auction may establish a final price where the relevant Determinations Committee and protocol provide for one.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] as the spread-mechanics page that complements [[derivatives/japan-cds-market-overview|Japan CDS market overview]]. Read it together with [[derivatives/basis-trade-bond-cds-japan|bond-CDS basis trade]] for the relative-value structure, [[derivatives/japan-irs-market|Japan IRS market]] for yen rates-curve context, [[derivatives/yen-basis-swap-market|yen basis swap market]] for JPY funding context, and [[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]] when a transaction has a cross-currency funding or collateral overlay.

Cross-reference [[finance/INDEX|finance index]] and [[finance/japan-convertible-bond-mechanics|Japan convertible bond mechanics]] for issuer credit context, [[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding unwinding economics]] for possible equity-credit linkages, [[banking/INDEX|banking index]], [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]], and [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage and institutional financing]] for adjacent institutional context. These pages do not establish a CDS position, dealer role, or hedge direction for a named entity.

### Building blocks

A Japan single-name corporate CDS spread *S(corp)* over horizon T can be conceptually decomposed:

```
S(corp, T) ≈ S(sovereign, T) + S(sector, T) + S(idiosyncratic, T) + basis_adjustment
```

| Component | Driver |
|---|---|
| Sovereign baseline *S(sovereign, T)* | If used, specify the dated sovereign instrument, currency, horizon T, and quote source |
| Sector premium *S(sector, T)* | Define the comparison universe and dated sector measure |
| Idiosyncratic component *S(idiosyncratic, T)* | Residual analytical term after the chosen market factors; not directly quoted |
| Basis adjustment | Match the cash bond, benchmark, seniority, tenor, funding, and CDS terms — see [[derivatives/basis-trade-bond-cds-japan|bond-CDS basis trade]] |

This decomposition is conceptual, not algebraic. Market practice fits the corporate CDS curve directly via market quotes rather than building up from components.

### Risk-neutral default probability

The CDS spread implies a risk-neutral hazard rate (or term structure of hazard rates):

```
Risk-neutral default probability (per period) ≈ S / (1 - R)
```

where S is the annual running spread and R is a model recovery input. The following table is an illustrative constant-hazard calculation with R = 40%, continuous survival and no term-structure calibration; it is not an actual default forecast or a quoted standard-model output. ^[Sources: https://www.cdsmodel.com/; https://www.isda.org/2014/06/30/2014-credit-derivatives-definitions/.]

| 5Y CDS spread (bps) | Implied 5Y risk-neutral default probability |
|---|---|
| 25 bps | ~2.0 percent |
| 50 bps | ~4.1 percent |
| 100 bps | ~8.0 percent |
| 200 bps | ~15.5 percent |
| 500 bps | ~34 percent |
| 1000 bps | ~57 percent |

Risk-neutral default probability is not an actual default forecast. It reflects the pricing model, recovery input, discount curve, risk premia, liquidity and contract terms; no comparison with historical Japan default rates is inferred here.

### Recovery rate assumption

Recovery assumptions are model inputs and can vary by contract, instrument seniority and calibration. The following table replaces the former unsupported statement of universal "standard" Japan recoveries with scenario inputs that must be disclosed when used. ^[Source: https://www.cdsmodel.com/.]

| Reference obligation type | Illustrative model input |
|---|---|
| Senior unsecured corporate | State the chosen input; 40% is a common illustration, not an observed recovery. |
| Subordinated obligation | Use an explicitly documented, instrument-specific input. |
| Bank senior obligation | Distinguish the contractual tier and resolution framework. |
| Bank subordinated / capital instrument | Do not reuse a senior-debt input without justification. |
| Sovereign | Use the applicable contract and model documentation; do not infer from corporate convention. |

The 40 percent figure in the illustration is an input, not an observed or market-implied Japan recovery. If an applicable credit-event auction occurs, distinguish its published final price from an ex-ante model recovery input.

## Credit events under 2014 ISDA Definitions

The 2014 ISDA Credit Derivatives Definitions provide credit-event terms, but the incorporated definitions and confirmation govern each transaction. No universal Japan event set is inferred here:

### Bankruptcy

| Trigger | Description |
|---|---|
| Civil rehabilitation filing (民事再生) | Requires analysis under the incorporated Bankruptcy definition and the facts |
| Corporate reorganization filing (会社更生) | Requires the same contract-specific legal analysis |
| Special liquidation (特別清算) | Court process alone is not summarized here as an automatic determination |
| Foreign bankruptcy proceeding | Assess the proceeding, reference entity, obligations, and governing definitions |
| General dissolution / liquidation | Apply the complete contractual tests and any determination process |

A submitted question may be considered under the applicable Determinations Committee rules. This page does not pre-judge whether a Japanese proceeding satisfies every contractual element.

### Failure to pay

The following table summarizes concepts in the incorporated ISDA definitions. Thresholds, grace periods and obligation characteristics are transaction-specific and must be read from the definitions and confirmation; the table does not prescribe USD 1 million or three business days for every Japan CDS. ^[Source: https://www.isda.org/2014/06/30/2014-credit-derivatives-definitions/.]

| Trigger | Description |
|---|---|
| Payment requirement | Failure to make a required payment meeting the applicable threshold and obligation criteria. |
| Grace period | Apply the contractual grace period and the incorporated definitions. |
| Cure / determination | Review any cure and the relevant Determinations Committee process. |

A missed bond or loan payment may satisfy Failure to Pay only if the applicable obligation, threshold, grace-period, amount, and other contractual tests are met.

### Restructuring (and variants)

The variant table is a high-level terminology map; deliverable-obligation limits and applicability must be taken from the governing definitions and transaction documentation. ^[Source: https://www.isda.org/2014/06/30/2014-credit-derivatives-definitions/.]

| Variant | Coverage |
|---|---|
| Full Restructuring (R) | Original 1999 Definitions; broad coverage of debt-restructuring events |
| Modified Restructuring (Mod-R) | US convention; deliverable obligation maturity capped at 30 months from credit event |
| Modified-Modified Restructuring (Mod-Mod-R) | European / Japan convention; deliverable obligation maturity capped at 60 months |
| No Restructuring (No-R) | US post-2009; eliminates restructuring as credit event |

The following restructuring-trigger table is likewise a summary of defined categories, not a substitute for the complete contractual tests. ^[Source: https://www.isda.org/2014/06/30/2014-credit-derivatives-definitions/.]

| Restructuring trigger | Detail |
|---|---|
| Coupon reduction | Reduction of agreed coupon |
| Principal reduction | Reduction of principal amount |
| Maturity extension | Extension of payment date |
| Subordination | Change in payment priority |
| Currency change | Change to non-permitted currency |

The confirmation and incorporated definitions determine whether Restructuring applies and which variant governs. No universal **Mod-Mod-R** convention is asserted for all Japan corporate CDS.

### Governmental intervention (banks)

The 2014 Definitions include a **Governmental Intervention** credit-event framework for relevant transactions. The complete definition and confirmation govern:

| Event | Trigger |
|---|---|
| Bail-in | Statutory write-down or conversion of debt instruments |
| Resolution authority action | Transfer of obligations or imposition of haircut by competent authority |
| Other authority action | Apply the complete Governmental Intervention terms; do not infer a trigger from an asset transaction alone |

For [[megabanks/mufg|MUFG]], [[megabanks/sumitomo-mitsui-banking-corp|SMBC]] (via SMFG), [[megabanks/mizuho-bank|Mizuho]] (via Mizuho FG), or any other financial group, a claim about protection coverage requires the exact reference entity, obligation tier, transaction type, incorporated terms, and applicable resolution action.

## ISDA Determinations Committee (DC) process

| Stage | Activity |
|---|---|
| Event report | Market participant submits question to ISDA DC |
| DC review | DC reviews event vs published criteria within published timeline |
| Public announcement | DC issues binding determination on credit event yes / no |
| Auction or settlement decision | DC decides whether to convene auction |
| Auction administration | If auction convened, conducted via Creditex / Markit administered process |
| Final price | Auction-determined final price published |

Current committee structure, membership, voting rules, and regional responsibility must be read from the Determinations Committees' published rules and website. A Japan reference entity does not by itself establish which named dealer participates.

Determinations are published on the Credit Derivatives Determinations Committees website. Their effect on a transaction depends on the documents, rules, protocol and terms that apply to that transaction.

## Recovery rate auction mechanics

Where an auction is held under the applicable process, its final price is used in covered cash settlements. The following table summarizes the published auction stages; the current auction terms and deliverable obligations control. ^[Sources: https://www.cdsdeterminationscommittees.org/; https://www.creditfixings.com/.]

| Stage | Activity |
|---|---|
| Auction announcement | ISDA / Creditex announces auction date and list of deliverable obligations |
| Initial bidding (Stage 1) | Participating bidders submit two-way markets; initial market midpoint calculated |
| Open interest published | Direction (buy or sell) of net open interest published |
| Limit order book (Stage 2) | Bidders submit limit orders to fill open interest |
| Final price | Auction-clearing price set; this is the "recovery rate" used for cash settlement |

Cash settlement: protection seller pays protection buyer (Notional) × (1 - Final Price). E.g. if final auction price is 35, recovery is 35 percent and protection seller pays 65 percent of notional.

Physical settlement involves delivery of qualifying obligations against payment under the contract. Whether a transaction settles through an auction, cash or physical delivery depends on its documentation and the applicable determination.

## Japan-specific auction-history verification

The cited primary sources permit event-by-event verification but do not support a complete frequency claim or an uncited Japan auction chronology:

| Evidence surface | Item to verify | Boundary |
|---|---|---|
| DC published decision | Reference entity, question, determination date | Do not infer an auction without the applicable decision |
| Auction terms and result | Auction date, deliverable obligations, final price | Applies only to the stated auction and covered transactions |
| JSCC product / statistics | Eligible products and JSCC-cleared activity | Does not establish bilateral or other-CCP exposure |
| Issuer and court disclosure | Legal proceeding and obligation facts | Does not itself determine CDS contractual treatment |
| FSA or resolution disclosure | Authority action and legal basis | Apply the exact transaction's Governmental Intervention terms |

Any historical count, default-rate comparison, or causal explanation requires a defined reference-entity universe, observation period, contract coverage, and primary event record.

## Basis to JGB benchmark

The following table defines common cash-versus-synthetic comparison measures. The chosen government or swap curve, bond, seniority and tenor must match the study. ^[Sources: https://www.mof.go.jp/english/policy/jgbs/; https://www.isda.org/2014/06/30/2014-credit-derivatives-definitions/.]

| Measure | Calculation |
|---|---|
| Z-spread to JGB | Constant spread added to JGB curve such that discounted cash flows match bond price |
| Asset swap spread | Spread versus the explicitly selected swap curve and asset-swap convention |
| CDS-bond basis | CDS spread - corresponding bond spread |
| Negative basis | CDS spread < bond spread; evaluate a financed long-bond / bought-protection package after all adjustments |
| Positive basis | CDS spread > bond spread; evaluate the reverse package subject to bond-borrow and CDS terms |

[[derivatives/basis-trade-bond-cds-japan|Bond-CDS basis trade]] develops the basis-trade economics in detail, including funding cost, repo availability, and balance-sheet constraints.

The level and direction of the basis must be measured from a dated, matched cash-bond and CDS sample. No normal-range or event-direction claim is inferred from the definition table.

## Sector review map

The following table identifies factors that can be reviewed for reference entities in JSCC's live eligible-product list. It is not a current spread ranking, and the named examples formerly shown here have been removed because aggregate public sources do not establish dealer activity or relative spread levels. ^[Sources: https://www.jpx.co.jp/jscc/en/cash/cds/product.html; https://www.jpx.co.jp/jscc/en/cash/cds/statistics.html.]

| Sector | Factors to review |
|---|---|
| Financial groups | Contractual seniority, resolution framework, funding and disclosed capital position. |
| Insurers | Asset risk, solvency disclosures and interest-rate sensitivity. |
| Trading companies | Leverage, commodity exposure and portfolio concentration. |
| Auto / industrial | Cash flow, leverage, cyclicality and transition investment. |
| Utilities | Regulatory framework, fuel costs, liabilities and issuer-specific events. |
| Real estate | Funding maturity, rates, asset values and occupancy. |

### Institution-specific evidence boundary

| Use case | Detail |
|---|---|
| Credit-spread hedging | A CDS index hedge is one possible structure; verify portfolio and hedge documentation |
| Sector hedging | A sector or tranche overlay requires product, venue, liquidity, and position evidence |
| Single-name hedging | Verify the reference entity, direction, notional, horizon, and disclosed holding |
| Synthetic credit exposure | Protection selling can create synthetic exposure; do not infer that an institution uses it |

The cited aggregate sources do not establish how often Japanese life insurers or pension funds use CDS. Institution-specific analysis should check:

- applicable solvency and capital treatment;
- the entity's accounting policy and hedge designation;
- disclosed risk-management governance and limits;
- dated executable liquidity for the exact CDS rather than a “Tier 1” label.

See [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]] for the broader hedging-toolkit context.

### Bank dealer and treasury

| Use case | Detail |
|---|---|
| Market-making | Possible inventory hedge; requires a dated dealer or transaction disclosure |
| Counterparty credit risk hedging | Possible CDS component of CVA hedging; verify reference entity and hedge relationship |
| Own-name hedging | Analyze accounting, regulation, and instrument terms; no usage claim is made |
| Sovereign basis trades | Define the sovereign, cash / derivative legs, currency, funding, and hedge objective |

CVA hedging can involve CDS, but the cited sources do not establish Japan dealer demand, product mix, or a concentration in financial reference entities.

### Hedge fund

| Use case | Detail |
|---|---|
| Outright credit view | Possible protection purchase or sale; requires a dated position disclosure |
| Relative value | Possible curve or cross-name package; specify both legs and hedge ratio |
| Capital-structure comparison | Compare CDS with equity, CB, or preferred securities only with matched issuer and dates |
| Basis trade | Evaluate cash / CDS packages under the conditions in [[derivatives/basis-trade-bond-cds-japan|bond-CDS basis trade]] |
| Index comparison | Compare iTraxx Japan with constituents using current series rules, weights, and quotes |

The sources used here do not establish the frequency or ownership of capital-structure arbitrage in Japan. See [[finance/japan-convertible-bond-mechanics|Japan convertible bond mechanics]] for CB mechanics.

### Structured product issuer

| Use case | Detail |
|---|---|
| Credit-linked note (CLN) hedging | Possible hedge mapping; verify whether the issuer buys, sells, or offsets protection |
| Synthetic CDO | Possible pool and tranche structure; confirm constituents and transaction documents |
| Bespoke credit products for retail / institutional | Confirm whether a note embeds single-name or basket CDS exposure and on which terms |

No recurring protection-buying direction or name-level imbalance is inferred from general CLN issuance. A claim requires the specific note, issuer hedge, date, notional, and CDS transaction; see [[derivatives/structured-bond-japan-retail-issuance|structured bond Japan retail issuance]].

## Related

- [[derivatives/INDEX]]
- [[derivatives/japan-cds-market-overview]]
- [[derivatives/basis-trade-bond-cds-japan]]
- [[derivatives/structured-bond-japan-retail-issuance]]
- [[derivatives/structured-product-eb-knockin-japan-retail]]
- [[derivatives/japan-irs-market]]
- [[derivatives/yen-basis-swap-market]]
- [[derivatives/cross-currency-basis-swap-japan]]
- [[finance/INDEX]]
- [[finance/japan-convertible-bond-mechanics]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[banking/INDEX]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[megabanks/mufg]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/goldman-sachs-japan]]
- [[securities-firms/morgan-stanley-japan]]
- [[INDEX|FinWiki index]]

## Sources

- ISDA: 2014 Credit Derivatives Definitions public materials.
- ISDA Credit Derivatives Determinations Committees: published determinations and process documentation.
- Creditex / Markit (auction administrators): auction results and methodology.
- FSA: derivatives regulation, post-crisis CDS reforms, follow-up council materials.
- BOJ: yen funding and credit statistics.
- MOF: JGB benchmark curve and issuance materials.
- JSCC: CDS clearing service materials.
- JSDA: member-firm regulatory materials.
