---
source: derivatives/basis-trade-bond-cds-japan
source_hash: 51ead5321da09865
lang: en
status: machine
fidelity: ok
title: "Bond-CDS basis trade Japan"
translated_at: 2026-07-29T22:02:00.000Z
---

# Bond-CDS basis trade Japan

## TL;DR

The Japan bond-CDS basis compares a corporate CDS spread with a matched cash bond's credit spread over a stated government or swap benchmark. Under the convention used here, **basis = CDS spread minus bond spread**. A negative quoted basis can motivate a financed long-bond / bought-protection comparison, but it is not “free carry”: bond selection, hedge ratio, CDS deliverable terms, accrued interest, recovery, funding, margin, counterparty risk, liquidity, tax, and capital all affect the result. The public sources cited here do not provide a complete executable Japan corporate bond-CDS panel, so event direction, frequency, participant rankings, and realized returns are treated as research questions rather than market facts.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] as the arbitrage / relative-value layer that complements [[derivatives/japan-cds-market-overview|Japan CDS market overview]] and [[derivatives/cds-japan-corporate-spread-mechanics|Japan corporate CDS spread mechanics]]. Read it together with [[derivatives/japan-irs-market|Japan IRS market]] for the swap-curve anchor used in asset-swap pricing, [[derivatives/yen-basis-swap-market|yen basis swap market]] for the JPY funding-cost layer, and [[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]] for the USD-JPY funding interaction that affects USD-funded participants in JPY basis trades.

On the cash-bond side, cross-reference [[finance/INDEX|finance index]], [[finance/japan-convertible-bond-mechanics|convertible bond mechanics]], and [[money-market/INDEX|money-market index]] for bond and funding context. [[banking/INDEX|banking index]], [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]], and [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage and institutional financing]] provide adjacent institutional context; they do not establish ownership of a particular basis position.

### Definition

```
Bond-CDS basis = CDS spread - Bond Z-spread (or asset-swap spread) at matched tenor
```

The sign table follows the conventional matched-reference, matched-tenor comparison. It is a definition, not evidence that a frictionless arbitrage can be executed. ^[Sources: https://www.isda.org/2014/06/30/2014-credit-derivatives-definitions/; https://www.bis.org/publ/qtrpdf/r_qt0712e.pdf.]

| Sign | Interpretation |
|---|---|
| Negative basis | CDS spread < bond spread; a financed long-bond / bought-protection package may merit study after all adjustments |
| Zero basis | Pure-arbitrage equilibrium (theoretical) |
| Positive basis | CDS spread > bond spread; the reverse package may merit study, subject to bond-borrow and CDS terms |

### Why basis is not zero

In a frictionless world the basis would be zero. Real-world frictions create persistent and time-varying basis:

| Friction | Required treatment |
|---|---|
| Bond funding cost | Use executable rate, haircut, maturity, collateral terms, and balance-sheet charges |
| Credit-event coverage difference | Match deliverable obligations, restructuring terms, seniority, and reference entity |
| Delivery option | Value the applicable deliverable-obligation option rather than assigning a fixed sign |
| Counterparty risk | Include collateral, netting, margin, default, and replacement-cost terms |
| Liquidity asymmetry | Use same-time executable quotes and sizes for both legs |
| Regulatory capital cost | Apply the institution's governing prudential treatment to the actual package |
| Tax and accounting | Align recognition, withholding, valuation, and reporting for both legs |

### Structure

| Leg | Action |
|---|---|
| Long cash bond | Buy reference issuer's bond at par or near-par, funded in repo |
| Short CDS protection (i.e., buy protection) | Pay running spread for protection against credit event |
| Net carry | Bond yield - Funding rate - CDS premium |

A screen showing bond spread above CDS spread may imply positive modeled carry after stated costs, but the package does not lock in a risk-free return because the bond and CDS can differ in obligations, recovery, liquidity, funding, counterparty exposure, and settlement.

### P&L decomposition

```
Daily P&L ≈ (Bond accrual - Repo funding cost) - (CDS premium accrual)
           + Mark-to-market change in (Bond price - CDS protection value)
```

Mark-to-market direction depends on the stated basis sign, spread DV01 hedge ratio, accrued interest, recovery and funding treatment. The headline basis change alone is insufficient when the two legs are not duration- and contract-matched.

### Required holding period

The evaluation horizon must be stated. A hold-to-maturity analysis must model bond redemption and CDS maturity / settlement, while an earlier exit requires executable unwind prices and funding termination terms. The cited aggregate sources do not establish how funds historically held or rolled Japan positions.

## Funding cost considerations

The bond leg requires funding. A reproducible trade model states each funding input:

| Funding source | Cost driver |
|---|---|
| Repo (bilateral or tri-party) | Executable rate, haircut, collateral, maturity, substitution, and close-out terms |
| GC repo on JGB collateral | Relevant only if the actual funding chain uses JGB collateral; identify any collateral transformation |
| Specific-collateral repo on the corporate bond | Verify that the bond is accepted and record quote, size, haircut, and term |
| Bank balance-sheet funding | Institution-specific funds-transfer, liquidity, capital, and balance-sheet charges |
| Prime broker financing | Contracted financing spread, haircut, eligible collateral, margin, and termination terms; see [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage]] |

A quoted negative basis is not an executable profit measure. The threshold depends on the same-date bond and CDS quotes, hedge ratio, full funding stack, transaction costs, margin, capital, and exit assumptions.

## Repo-availability constraints

Repo availability must be established for the selected bond and date. The cited aggregate sources do not support a timeless Japan corporate-bond-versus-JGB liquidity ranking:

| Bond type | Evidence required |
|---|---|
| JGBs (on-the-run and benchmark) | Dated GC / specific-collateral quotes, size, and applicable BOJ operation data |
| JGBs (off-the-run) | Issue-specific quotes, fails, specialness, and available size |
| Japan IG corporate bonds (large issuers) | Bond-specific lender, quote, haircut, maturity, and executable size |
| Japan IG corporate bonds (small / mid issuers) | The same bond-specific evidence; issuer size is not a liquidity proxy |
| Japan high-yield corporate bonds | Direct evidence of financing availability; no “no repo” assumption |

No public source used here establishes a “Tier 1” cutoff, the prevalent financing channel, or relative scalability versus US-dollar or euro trades. Those claims require a dated transaction- or financing-level dataset.

### Basel III leverage ratio

Leverage exposure depends on the institution, booking entity, netting set, accounting treatment, and applicable prudential rules. A credit hedge does not by itself prove leverage-ratio offset, but the cited sources do not quantify dealer appetite or a resulting basis direction.

### Risk-weighted assets (RWA)

| Component | Effect |
|---|---|
| Bond leg | Determine banking- or trading-book classification and the applicable credit / market-risk treatment |
| CDS leg | Determine counterparty credit, CVA, market-risk, and collateral treatment as applicable |
| Net hedging recognition | Apply the governing standardised or model-based rules; do not assume full offset |

The package's RWA and leverage effects require institution-specific calculation; aggregate sources do not establish a dealer warehousing response.

### Single-counterparty credit limits

Large-exposure and counterparty limits depend on the booking entity and jurisdiction. The protection seller is a CDS counterparty distinct from the reference entity unless they are in fact the same legal entity; aggregation and netting follow the applicable rules.

### Liquidity Coverage Ratio (LCR)

LCR treatment depends on whether the specific bond qualifies as HQLA, the applicable level and haircut, encumbrance, cash outflows, collateral and derivative cash flows. No package-level LCR sign is inferred without that calculation.

## Japan-specific policy and market-study anchors

The following table identifies public policy and infrastructure dates. It does not assign a basis direction; a matched cash-CDS dataset is required for that conclusion. ^[Sources: https://www.jpx.co.jp/jscc/en/otc/member_cds.html; https://www.boj.or.jp/en/mopo/mpmdeci/index.htm.]

| Period | Public anchor for a basis study |
|---|---|
| July 2011 | JSCC began clearing CDS; use JSCC statistics only for its published clearing scope. |
| 2013-2015 | Align the study with BOJ QQE decisions and JGB-market data. |
| 2016 | Align the study with the introduction of negative rates and YCC. |
| 2020 | Review the COVID market shock and BOJ measures with matched instruments. |
| 2022-2023 | Review the dated YCC adjustments without treating 2023 as the end of YCC. |
| March 2024 onward | Review the monetary-policy framework change and subsequent observations. |

## COVID Q1 2020 basis blowout

Public central-bank and BIS materials document severe cash-bond liquidity stress and policy responses in March 2020, but they do not provide a complete name-by-name Japan corporate CDS-bond basis series. The following table is therefore a dated review framework, not a ranking of the dislocation or a claim about a particular benchmark name. ^[Sources: https://www.boj.or.jp/en/mopo/mpmdeci/mpr_2020/index.htm; https://www.bis.org/publ/bisbull2.htm; https://www.bis.org/publ/qtrpdf/r_qt2012.htm.]

| Review window | Evidence to compare |
|---|---|
| Late February 2020 | Compare cash-bond, CDS and funding measures as global risk repriced. |
| Early-to-mid March 2020 | Review bid-ask, executable quotes and funding terms rather than inferring the basis from one leg. |
| BOJ March 2020 decisions | Align BOJ measures with dated cash and CDS observations; do not infer immediate causality. |
| April-June 2020 | Test convergence separately by issuer, bond, CDS tenor and financing cost. |
| Second half of 2020 | Compare the resulting basis with the pre-shock sample using the same instruments. |

Any comparison with 2008-2009, duration estimate or realised trade return requires a defined issuer sample, executable prices and financing costs. The public sources cited above do not establish those results.

## 2022-2023 BOJ YCC adjustments

The following table uses BOJ decision dates as observable anchors. The basis effect is a research question requiring matched cash-bond and CDS observations, so no automatic direction or lag is asserted. ^[Source: https://www.boj.or.jp/en/mopo/mpmdeci/index.htm.]

| BOJ decision | Basis-study checkpoint |
|---|---|
| December 2022 YCC range adjustment | Compare JGB curves, cash-bond spreads, CDS quotes and financing around the decision. |
| July 2023 conduct of YCC adjustment | Repeat the matched-instrument comparison using the published decision window. |
| October 2023 further flexibility | Separate risk-free-curve repricing from issuer-credit and liquidity effects. |
| March 2024 monetary-policy framework change | Review post-decision observations without assuming a fixed normalization period. |

Lead-lag direction between cash bonds and CDS is a testable hypothesis, not a product rule. It should be estimated for each event window with synchronized quotes and liquidity controls.

### Participation evidence boundary

BIS and JSCC aggregates do not identify convertible-arbitrage funds, hedge funds, insurers or sovereign funds as owners of a particular Japan basis trade. The following table therefore lists evidence dimensions, not participant profiles. ^[Sources: https://www.bis.org/statistics/derstats.htm; https://www.jpx.co.jp/jscc/en/cash/cds/statistics.html.]

| Evidence dimension | Supported conclusion |
|---|---|
| BIS OTC aggregate | Market-wide notional and gross market-value context at the published classification level. |
| JSCC clearing statistics | Cleared activity within JSCC's published scope. |
| Fund or institution disclosure | Entity-specific position only when the disclosure names the instrument and period. |
| Executable trade evidence | Date-specific size, price, financing and counterparty terms. |

### Trade sizing

Basis trades are scaled by:

| Constraint | Practical effect |
|---|---|
| Repo / financing capacity for the bond leg | Caps long-cash size |
| CDS market liquidity for the short-protection leg | Caps short-CDS size at matched name and tenor |
| Counterparty CSA terms (margining, eligible collateral) | Affects funding cost on the CDS leg |
| Single-name credit-event tail risk | Even with hedge, gap-risk during credit event |
| Regulatory capital cost | Bank-owned positions consume RWA / leverage |

Trade size cannot be ranked from the public aggregate sources used here. Executable size depends on the particular bond, CDS tenor, financing terms, counterparty limits and date.

### Roll dynamics

If protection is to continue beyond the CDS maturity, a new contract may be needed (for example, after a 5Y CDS reaches its horizon, a new 5Y contract). The new spread, maturity, contract terms, transaction costs, and any index roll must be included rather than treated as mechanical.

## Related

- [[derivatives/INDEX]]
- [[derivatives/japan-cds-market-overview]]
- [[derivatives/cds-japan-corporate-spread-mechanics]]
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
- [[money-market/INDEX]]
- [[megabanks/mufg]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/goldman-sachs-japan]]
- [[securities-firms/morgan-stanley-japan]]
- [[INDEX|FinWiki index]]

## Sources

- BOJ: monetary policy framework materials, JGB market operations data, corporate-bond purchase facility documentation.
- MOF: JGB issuance and benchmark curve materials.
- FSA: derivatives clearing regulation, post-crisis CDS reforms, follow-up council materials.
- ISDA: CDS Definitions and Determinations Committee materials.
- JSCC: CDS clearing service materials.
- BIS: semi-annual OTC derivatives statistics including Japan reference-entity CDS.
- JSDA: member-firm and market structure materials.
