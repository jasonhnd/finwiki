---
title: "Japan corporate CDS spread mechanics"
aliases:
  - "cds-japan-corporate-spread-mechanics"
  - "Japan corporate CDS spread"
  - "Japan single-name CDS mechanics"
  - "Japan CDS recovery auction"
  - "Japan CDS credit events"
  - "日本 コーポレート CDS スプレッド"
  - "日本社債 CDS メカニクス"
domain: derivatives
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [derivatives, cds, credit-event, isda, recovery-rate, auction, basis, jgb, life-insurer, pension]
status: active
sources:
  - "https://www.isda.org/2014/06/30/2014-credit-derivatives-definitions/"
  - "https://www.cdsdeterminationscommittees.org/"
  - "https://www.creditfixings.com/"
  - "https://www.fsa.go.jp/en/refer/councils/follow-up/index.html"
  - "https://www.boj.or.jp/en/statistics/index.htm"
  - "https://www.mof.go.jp/english/policy/jgbs/index.html"
  - "https://www.jpx.co.jp/jscc/en/cds/index.html"
  - "https://www.jsda.or.jp/en/"
---

# Japan corporate CDS spread mechanics

## TL;DR

Japan corporate CDS spread is the running-basis-point premium a protection buyer pays to a protection seller in exchange for default-contingent payment on a reference Japanese listed corporate. The spread decomposes into a credit risk premium (a function of expected default probability and assumed recovery) plus structural premia (basis to underlying bonds, dealer carry, regulatory capital cost). Japan corporate CDS prices off the **sovereign-vs-corporate spread**, with Japan sovereign CDS as the implicit credit-free anchor and individual corporate spreads layered on top. Credit-event triggers under 2014 ISDA Credit Derivatives Definitions cover **bankruptcy, failure-to-pay, and restructuring** (with Mod-R / Mod-Mod-R variants determining deliverable obligations). Recovery is determined by an **ISDA-administered auction** after a credit event. Life insurers and pension funds use CDS sparingly given ESR / accounting constraints, but credit-spread hedging via index CDS is a recurring topic in [[insurance/japan-life-insurance-alm-overview|life ALM]] discussions.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] as the spread-mechanics page that complements [[derivatives/japan-cds-market-overview|Japan CDS market overview]]. Read it together with [[derivatives/basis-trade-bond-cds-japan|bond-CDS basis trade]] for the arb structure, [[derivatives/japan-irs-market|Japan IRS market]] for the underlying yen rates curve, [[derivatives/yen-basis-swap-market|yen basis swap market]] for the JPY funding overlay, and [[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]] for the USD overlay that dominates Japanese institutional funding.

Cross-reference [[finance/INDEX|finance index]] and [[finance/japan-convertible-bond-mechanics|Japan convertible bond mechanics]] for the issuer-side credit context, [[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding unwinding economics]] for the equity-credit linkage, [[banking/INDEX|banking index]] for the megabank dealer / counterparty role, [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]] for the insurer credit-hedging use case, and [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage and institutional financing]] for the dealer-to-fund plumbing.

## Spread decomposition

### Building blocks

A Japan single-name corporate CDS spread *S(corp)* over horizon T can be conceptually decomposed:

```
S(corp, T) ≈ S(sovereign, T) + S(sector, T) + S(idiosyncratic, T) + basis_adjustment
```

| Component | Driver |
|---|---|
| Sovereign baseline *S(sovereign, T)* | Japan sovereign CDS spread at horizon T; near-zero for short tenors, modestly positive at 5Y / 10Y |
| Sector premium *S(sector, T)* | Sector-level credit factor (financials vs industrials vs telecoms, etc.) |
| Idiosyncratic component *S(idiosyncratic, T)* | Firm-specific leverage, cash-flow stability, governance, M&A profile |
| Basis adjustment | CDS-bond basis driven by dealer balance sheet, repo specials, regulatory cost — see [[derivatives/basis-trade-bond-cds-japan|bond-CDS basis trade]] |

This decomposition is conceptual, not algebraic. Market practice fits the corporate CDS curve directly via market quotes rather than building up from components.

### Risk-neutral default probability

The CDS spread implies a risk-neutral hazard rate (or term structure of hazard rates):

```
Risk-neutral default probability (per period) ≈ S / (1 - R)
```

where S is the running spread and R is the assumed recovery rate. For investment-grade Japan corporates with assumed R = 40 percent:

| 5Y CDS spread (bps) | Implied 5Y risk-neutral default probability |
|---|---|
| 25 bps | ~2.0 percent |
| 50 bps | ~4.1 percent |
| 100 bps | ~8.0 percent |
| 200 bps | ~15.5 percent |
| 500 bps | ~34 percent |
| 1000 bps | ~57 percent |

Risk-neutral default probability is not actual default probability; it embeds risk premium and liquidity premium. Historical default rates for IG Japan corporates are far below these risk-neutral implied levels under normal conditions.

### Recovery rate assumption

| Reference obligation type | Standard assumed recovery |
|---|---|
| Senior unsecured corporate (most Japan IG) | 40 percent |
| Subordinated corporate | 25 percent |
| Bank senior preferred | 40 percent |
| Bank senior non-preferred / Tier 2 | 25-40 percent depending on jurisdiction |
| Sovereign (developed market) | 40 percent (Japan) |

The 40 percent assumption is conventional, not market-implied. Post-credit-event auction determines actual recovery (described below).

## Credit events under 2014 ISDA Definitions

The 2014 ISDA Credit Derivatives Definitions specify the credit events that trigger CDS settlement. For Japan corporate CDS, three credit events are standard:

### Bankruptcy

| Trigger | Description |
|---|---|
| Filing for civil rehabilitation (民事再生) | Japanese in-court rehabilitation procedure for corporates |
| Filing for corporate reorganization (会社更生) | Japanese in-court reorganization for larger corporates |
| Special liquidation (特別清算) | Court-supervised liquidation |
| Foreign bankruptcy proceeding | If reference entity has foreign jurisdictional insolvency event |
| General dissolution / liquidation | Voluntary or involuntary dissolution |

Bankruptcy is the cleanest trigger. The ISDA Determinations Committee (DC) decides whether a filed event qualifies, and announces credit event determination publicly.

### Failure to pay

| Trigger | Description |
|---|---|
| Payment default | Failure to make scheduled payment on any obligation above threshold (typically USD 1 million equivalent) after grace period |
| Grace period | Standard grace period typically 3 business days unless contractual grace period applies |
| Cure period | Optional cure period before triggering |

For Japan corporates, scheduled bond or loan payments missed after grace period qualify, subject to DC determination.

### Restructuring (and variants)

| Variant | Coverage |
|---|---|
| Full Restructuring (R) | Original 1999 Definitions; broad coverage of debt-restructuring events |
| Modified Restructuring (Mod-R) | US convention; deliverable obligation maturity capped at 30 months from credit event |
| Modified-Modified Restructuring (Mod-Mod-R) | European / Japan convention; deliverable obligation maturity capped at 60 months |
| No Restructuring (No-R) | US post-2009; eliminates restructuring as credit event |

| Restructuring trigger | Detail |
|---|---|
| Coupon reduction | Reduction of agreed coupon |
| Principal reduction | Reduction of principal amount |
| Maturity extension | Extension of payment date |
| Subordination | Change in payment priority |
| Currency change | Change to non-permitted currency |

Japan corporate CDS conventionally trades with **Mod-Mod-R** (Modified-Modified Restructuring), aligned with European market convention. The Mod-Mod-R cap on deliverable-obligation maturity reduces the "cheapest-to-deliver" optionality that broad Restructuring creates.

### Governmental intervention (banks)

For Japan financial-institution CDS, the 2014 Definitions added a **Governmental Intervention** credit event covering bail-in and resolution actions:

| Event | Trigger |
|---|---|
| Bail-in | Statutory write-down or conversion of debt instruments |
| Resolution authority action | Transfer of obligations or imposition of haircut by competent authority |
| Forced asset sale | Compelled disposal that constitutes credit-event equivalent |

This is relevant for [[JapanFG/mufg|MUFG]], [[JapanFG/sumitomo-mitsui-banking-corp|SMBC]] (via SMFG), [[JapanFG/mizuho-bank|Mizuho]] (via Mizuho FG), and other Japan financial-institution CDS, where bank resolution under the Deposit Insurance Act and broader resolution framework matters for protection coverage.

## ISDA Determinations Committee (DC) process

| Stage | Activity |
|---|---|
| Event report | Market participant submits question to ISDA DC |
| DC review | DC reviews event vs published criteria within published timeline |
| Public announcement | DC issues binding determination on credit event yes / no |
| Auction or settlement decision | DC decides whether to convene auction |
| Auction administration | If auction convened, conducted via Creditex / Markit administered process |
| Final price | Auction-determined final price published |

The DC is a permanent committee composed of major dealer and buy-side firms by region (Americas, EMEA, Asia ex-Japan, Japan, Australia / New Zealand). For Japan reference entities, the relevant DC includes major Japan-active dealers.

DC determinations are publicly published on the ISDA Credit Derivatives Determinations Committees website and are binding for standard ISDA-documented CDS contracts.

## Recovery rate auction mechanics

After a credit event, the ISDA-administered auction sets the recovery rate used for cash-settled CDS:

| Stage | Activity |
|---|---|
| Auction announcement | ISDA / Creditex announces auction date and list of deliverable obligations |
| Initial bidding (Stage 1) | Participating bidders submit two-way markets; initial market midpoint calculated |
| Open interest published | Direction (buy or sell) of net open interest published |
| Limit order book (Stage 2) | Bidders submit limit orders to fill open interest |
| Final price | Auction-clearing price set; this is the "recovery rate" used for cash settlement |

Cash settlement: protection seller pays protection buyer (Notional) × (1 - Final Price). E.g. if final auction price is 35, recovery is 35 percent and protection seller pays 65 percent of notional.

Physical settlement (legacy and optional under most current contracts) involves delivery of qualifying obligations against payment of par. Most modern CDS contracts default to cash settlement via auction.

## Japan-specific auction history

Japan corporate credit events triggering ISDA auctions are infrequent. Historical episodes include:

| Period | Reference entity type | Auction outcome (illustrative pattern) |
|---|---|---|
| 2010 | Japan Airlines | Bankruptcy filing triggered credit event; auction set recovery |
| 2010 | Takefuji | Consumer finance bankruptcy; auction recovery reflected unsecured-creditor outlook |
| 2012-2015 | Various small-cap restructurings | Limited CDS coverage; small DC activity |
| 2017 | Toshiba (no formal credit event) | Market priced near-credit-event risk through CDS spread; no auction triggered |
| 2020-2024 | COVID and post-COVID period | No major Japan IG credit event; few small-cap distress cases without significant CDS exposure |

The infrequency of Japan IG credit events reflects the combination of low underlying default rate, strong bank-creditor support, and out-of-court workout norms.

## Basis to JGB benchmark

The CDS spread is typically compared to the corporate's bond spread over the **JGB benchmark curve** at matched tenor:

| Measure | Calculation |
|---|---|
| Z-spread to JGB | Constant spread added to JGB curve such that discounted cash flows match bond price |
| Asset swap spread | Spread vs swap curve; for Japan, typically vs TONA swap curve |
| CDS-bond basis | CDS spread - corresponding bond spread |
| Negative basis | CDS spread < bond spread; long-cash-short-CDS trade attractive |
| Positive basis | CDS spread > bond spread; short-cash-long-CDS trade attractive |

[[derivatives/basis-trade-bond-cds-japan|Bond-CDS basis trade]] develops the basis-trade economics in detail, including funding cost, repo availability, and balance-sheet constraints.

For Japan IG corporates, the basis is typically narrow but can widen during stress episodes (COVID Q1 2020, BOJ YCC adjustments in 2022-2023) when dealer balance-sheet capacity contracts or specific JGB repo dynamics shift relative-value pricing.

## Sector spread patterns

| Sector | Spread character |
|---|---|
| Megabank financials (MUFG, SMBC, Mizuho) | Modest 5Y spreads under normal conditions; episodic widening during global bank stress (2023 SVB / Credit Suisse, 2024 regional bank stress) |
| Large life / non-life insurers | Modest 5Y spreads; sensitivity to BOJ rate path and ESR profile |
| Trading houses (sogo shosha) | Modest 5Y spreads; commodity-cycle sensitivity in cyclical periods |
| Auto / industrial blue-chips | Low 5Y spreads in stable conditions; episodic widening on EV-transition stress |
| Telecoms / utilities | Wide range; TEPCO post-2011 sustained elevated levels for years |
| Real estate | Sensitive to interest-rate cycle and J-REIT funding conditions |
| SoftBank Group | Persistently the widest IG-or-crossover Japan name; Vision Fund mark-to-market drives episodic spread spikes |

SoftBank Group CDS is the most-traded Japan non-financial single-name CDS by a wide margin, reflecting its leverage profile, M&A history, and equity-volatility linkage.

## Use cases

### Life insurer and pension fund

| Use case | Detail |
|---|---|
| Credit-spread hedging | Portfolio-level CDS index hedge for credit-spread shock |
| Sector hedging | Sector-tranche CDS overlay (limited liquidity in Japan) |
| Single-name negative-view hedging | Selective single-name CDS protection on holdings of concern |
| Synthetic credit exposure | Selling CDS protection to gain credit exposure without bond purchase |

In practice, Japanese life insurers and pension funds use CDS sparingly due to:

- ESR accounting treatment that complicates hedge-effectiveness designation;
- JGAAP / IFRS 9 hedge-accounting requirements;
- internal risk-management governance constraints;
- liquidity constraints in single-name Japan CDS below Tier 1 names.

See [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]] for the broader hedging-toolkit context.

### Bank dealer and treasury

| Use case | Detail |
|---|---|
| Market-making | Inventory hedging on dealer book |
| Counterparty credit risk hedging | CDS on dealer counterparties (CVA hedging) |
| Own-name hedging | Limited; own-credit hedging accounting issues |
| Sovereign basis trades | Hedging JGB cross-currency basis exposure |

CVA (credit valuation adjustment) hedging is a regulatory and accounting driver for dealer CDS demand, particularly on financial counterparty names.

### Hedge fund

| Use case | Detail |
|---|---|
| Outright credit view | Buy / sell single-name CDS on directional view |
| Relative value | Long / short across CDS curve or across names |
| Capital-structure arb | CDS vs equity, CDS vs CB, CDS vs preferred |
| Basis trade | Long-cash-short-CDS for negative basis or vice versa — see [[derivatives/basis-trade-bond-cds-japan|bond-CDS basis trade]] |
| Index arb | iTraxx Japan vs constituent single-name CDS |

Capital-structure arbitrage is a recurring strategy in Japan given the active convertible-bond market — see [[finance/japan-convertible-bond-mechanics|Japan convertible bond mechanics]].

### Structured product issuer

| Use case | Detail |
|---|---|
| Credit-linked note (CLN) hedging | Issuer hedges by buying CDS protection on the reference name |
| Synthetic CDO | Pool-level CDS positions packaged into tranches |
| Bespoke credit products for retail / institutional | Single-name or basket CDS exposure embedded in note format |

CLN issuance and hedging is a recurring driver of single-name CDS protection-buying demand, contributing to occasional supply-demand imbalances on individual names. This intersects with the [[derivatives/structured-bond-japan-retail-issuance|structured bond Japan retail issuance]] market.

## Counterpoints

- The decomposition framework (sovereign + sector + idiosyncratic + basis) is conceptual; market practice fits curves directly from quotes.
- Risk-neutral default probability is not historical default probability; the gap embeds liquidity, risk premium, and recovery uncertainty.
- 40 percent recovery convention is a quoting standard, not an actual recovery prediction; auction-determined recovery has historically been lower for severely impaired credits.
- Restructuring credit event coverage is jurisdiction-sensitive; Mod-Mod-R is convention for Japan but bilateral contracts can vary.
- Single-name Japan CDS liquidity below Tier 1 names is thin; quoted spreads may not be executable in size.
- Out-of-court workout norms in Japan reduce the frequency of formal credit events, making CDS payoff modeling more dependent on bankruptcy filings than restructuring.

## Open questions

- Will the Governmental Intervention credit event mechanic be tested in a Japan financial-institution context under the FSA / Deposit Insurance Corporation resolution framework?
- How will Japan auction recoveries compare to global benchmarks if a major IG name defaults?
- Will the 2014 ISDA Definitions be updated to reflect sustainability-linked debt and contingent-coupon mechanics in Japan corporate issuance?
- How will the rise of private credit affect Japan CDS reference-obligation pools? See [[finance/japan-convertible-bond-mechanics|convertible bond mechanics]] for adjacent equity-linked debt.
- Will Japan life insurer credit-hedging via CDS scale up under refined ESR hedge-accounting treatment? See [[insurance/japan-life-insurance-alm-overview|life insurance ALM]].

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
- [[JapanFG/mufg]]
- [[JapanFG/sumitomo-mitsui-banking-corp]]
- [[JapanFG/mizuho-bank]]
- [[JapanFG/nomura-hd]]
- [[JapanFG/goldman-sachs-japan]]
- [[JapanFG/morgan-stanley-japan]]
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
