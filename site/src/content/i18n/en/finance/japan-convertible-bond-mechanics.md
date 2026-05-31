---
source: finance/japan-convertible-bond-mechanics
source_hash: ad123e3128027510
lang: en
status: machine
fidelity: ok
title: "Japan convertible bond mechanics"
translated_at: 2026-05-31T06:16:15.748Z
---

# Japan convertible bond mechanics

## Wiki route

This page sits under [[finance/INDEX|finance domain]]. Read it with [[finance/japan-ib-league-table|Japan IB league table]] for bookrunner attribution, [[securities/japan-underwriting-market-structure|underwriting market structure]] for the issuance plumbing, [[securities/japan-ipo-listing-disclosure-route|IPO listing disclosure route]] for the disclosure-process analogue, [[finance/japan-fair-disclosure-and-insider-trading-controls|fair disclosure and insider trading controls]] for pre-launch information handling, and [[finance/japan-large-shareholding-disclosure|large shareholding disclosure]] for post-conversion ownership tracking.

## TL;DR

A Japan convertible bond (転換社債型新株予約権付社債, often called CB or MSCB depending on structure) is a debt security with embedded equity conversion right. Issuance flow: issuer board resolution → lead manager → bookbuilding → pricing (coupon, conversion premium, term, call / put schedule) → TDnet / EDINET disclosure → settlement → potential conversion / call / put. Conversion premium typically 15-40 percent above reference price for vanilla offerings. Hedge investors typically arbitrage equity vol against bond floor. Issuance dilution and shareholder-vote treatment depend on issuance structure (third-party allocation vs public offering) and dilution magnitude.

## Product taxonomy

| Type | Japanese term | Structural note |
|---|---|---|
| Vanilla convertible bond | 転換社債型新株予約権付社債 (CB with embedded warrants) | Fixed conversion price, coupon, term, hard / soft call protection |
| Zero-coupon convertible | Zero-coupon CB | Common in Japan large-cap issuance; CB market vol absorbs investor yield |
| Convertible bond with call spread | CB plus over-the-counter call-spread overlay | Effectively raises conversion premium for issuer |
| MSCB (moving-strike CB) | MSCB / 行使価額修正条項付転換社債 | Conversion price resets downward with stock price; significant dilution risk |
| Exchangeable bond | 交換社債 | Bond exchangeable into shares of another listed company held by issuer (e.g. cross-shareholding monetisation) |
| Mandatory convertible | Mandatory CB | Mandatory conversion at maturity; behaves more like equity |
| Pre-emptive rights offering with CB component | 株主割当 | Issued to existing shareholders pro-rata |

Vanilla zero-coupon CB and exchangeable bonds are the dominant Japan large-cap formats. MSCBs are less common at large-cap level due to reputational and dilution concerns but appear in some small / mid-cap restructuring contexts.

## Issuance flow

| Stage | Activity | Public source |
|---|---|---|
| Board resolution | Board approves issuance principle, structure, size, use of proceeds | TDnet release |
| Lead-manager appointment | Issuer selects bookrunner(s) and co-managers | Mandate often disclosed in TDnet pricing release |
| Structuring | Lead manager designs coupon, conversion premium, call / put schedule, anti-dilution, hedge mechanics | Private until pricing |
| Pre-marketing | Lead manager pre-sounds key investors | Subject to [[finance/japan-fair-disclosure-and-insider-trading-controls|fair disclosure controls]] |
| Bookbuilding | Marketed bookbuild, often after-hours or overnight | TDnet launch and pricing releases |
| Pricing | Final terms set: coupon, conversion price, premium, call / put | EDINET securities registration statement (yūkasai-keikoku-shorui), TDnet release |
| Settlement | Cash settlement and bond delivery | Settlement notice |
| Listing | Bond listing on TOKYO PRO-BOND Market or non-listed institutional placement | JPX listing notice if listed |
| Post-issuance | Conversion notices, call / put exercise, coupon payments | TDnet / EDINET amendments |

Many Japan CBs are launched after-hours overnight with same-day pricing to minimise market-risk exposure to issuer share price. The launch-to-pricing window is typically a few hours.

## Conversion premium economics

Conversion premium is the percentage above reference share price at which the bond converts.

| Premium range | Typical context |
|---|---|
| 0-10 percent | Distressed / restructuring CB, MSCB, low-vol issuers |
| 15-25 percent | Standard mid-market vanilla CB |
| 25-40 percent | Large-cap blue-chip CB with high implied vol |
| 40-60 percent | High-vol tech / growth issuers with strong demand |
| 60+ percent | Call-spread structures, mandatory features |

Reference share price is typically the volume-weighted average price (VWAP) during a specified pricing window, defined in the term sheet.

Implied volatility, credit spread, dividend yield, and stock-borrow cost feed the bond floor and option value calculation. Higher equity vol typically supports higher conversion premium.

## Bond floor and option value

The CB price decomposes economically into a bond floor (NPV of coupons and principal at credit-adjusted yield) plus an embedded call option on the stock.

| Component | Driver |
|---|---|
| Bond floor | Coupon, principal, yield curve, credit spread |
| Option value | Stock price, conversion ratio, volatility, time, dividend, rate |
| Total CB value | Bond floor + option value (with adjustment for early-call / put features) |

Investors split into:

| Investor type | Strategy |
|---|---|
| Outright fundamental | Long CB for asymmetric upside; coupon + conversion option |
| Convertible arbitrage | Long CB, short stock per delta-neutral hedge ratio; harvest vol |
| Equity-linked income | Outright with credit-and-yield focus |
| Mandatory / preferred-equivalent | Treat as quasi-equity at maturity |

Convertible-arb hedge funds are major demand source globally; Japan demand mix includes domestic life insurers, asset managers, and overseas convertible-focused funds.

## Hedge ratio (delta)

The hedge ratio measures sensitivity of CB price to stock price movement.

| Delta | Interpretation |
|---|---|
| 0.0-0.3 | Bond-like behaviour; deep out-of-the-money |
| 0.3-0.5 | Balanced; standard at-issue range for vanilla CB |
| 0.5-0.8 | Equity-sensitive; stock has rallied toward / above strike |
| 0.8-1.0 | Equity-equivalent; deep in-the-money, conversion likely |

Arbitrage investors typically borrow stock against long CB position. Stock-borrow availability and cost are inputs to pricing. Limited borrow can compress demand.

## Call and put protection

| Feature | Description |
|---|---|
| Hard call protection | Issuer cannot call before specified date |
| Soft call protection | Issuer may call only if stock trades above a threshold (e.g. 130 percent of conversion price for 20 of 30 trading days) |
| Issuer call | Right to redeem at par or specified premium |
| Investor put | Right to put back at par or specified premium on specified dates |
| Change-of-control put | Put right upon defined change-of-control trigger |
| Tax call | Right to call if tax law changes affect coupon deductibility |
| Make-whole | Compensates investor for lost option value on early call |

A typical Japan vanilla CB carries hard call protection for 3-4 years, then soft call thereafter, with put dates at intermediate intervals (e.g. years 3, 5, 7 of a 10-year structure).

## Dilution analysis

| Field | Calculation |
|---|---|
| Conversion shares | CB face / conversion price |
| Dilution percent | Conversion shares / (existing shares + conversion shares) |
| Treasury share offset | Issuer can use treasury shares to deliver, reducing new-issuance dilution |
| Anti-dilution adjustment | Conversion price adjusts for stock split, dividend, rights issue, etc. |

Significant dilution (above informal investor thresholds, e.g. ~20-25 percent) raises:

- Shareholder-vote requirement under Companies Act when third-party allocation with favourable terms triggers special-resolution rules.
- TSE / JPX disclosure obligation for material dilutive issuance (specific reporting and reasoning).
- Existing-shareholder feedback risk; possible activist response — see [[finance/japan-activist-investor-playbook|activist playbook]] and [[finance/japan-shareholder-proposal-and-agm-voting-route|shareholder proposal route]].

## Shareholder-vote considerations

Under the Companies Act, share-issuance route determines vote requirement.

| Route | Vote requirement |
|---|---|
| Public offering (kōbo) | Board resolution typically sufficient; subject to TSE rules and dilution thresholds |
| Third-party allocation (daisansha wariate) | Board resolution sufficient if not particularly favourable terms; special shareholder resolution required if terms are favourable |
| Large dilution | TSE rules may require independent committee opinion or shareholder vote for significant dilution |
| Rights offering | Pre-emptive offering to existing shareholders |

CB issuance follows analogous rules because conversion creates new shares. Pricing process documentation supports the not-particularly-favourable conclusion. See [[finance/japan-fair-disclosure-and-insider-trading-controls|fair disclosure controls]] for pre-launch information handling.

## Disclosure surfaces

| Surface | Document |
|---|---|
| Pre-launch | TDnet board-resolution release |
| Launch | TDnet launch notice, EDINET securities-registration statement (有価証券届出書) |
| Pricing | TDnet pricing release with final terms |
| Settlement | TDnet settlement notice |
| Listing | JPX bond-listing notice (where listed) |
| Ongoing | Coupon payments, conversion notices, call / put exercise via TDnet |
| Conversion-driven ownership change | EDINET large-shareholding reports (see [[finance/japan-large-shareholding-disclosure|large shareholding disclosure]]) |

EDINET filings are statutory and authoritative; TDnet filings provide timely market dissemination. Both routes feed [[finance/japan-tender-offer-process|tender offer process]]-style market-impact analysis when the CB is part of a larger capital-structure transaction.

## Lead-manager attribution

| Bank | Role in Japan CB |
|---|---|
| [[JapanFG/nomura-hd|Nomura]] | Frequent lead bookrunner, structuring agent |
| [[JapanFG/daiwa-sg|Daiwa]] | Frequent lead bookrunner |
| [[JapanFG/smbc-nikko|SMBC Nikko]] | Megabank-aligned lead and co-manager |
| [[JapanFG/mizuho-securities|Mizuho Securities]] | Megabank-aligned lead and co-manager |
| Mitsubishi UFJ Morgan Stanley (MUMSS) | Megabank / global JV lead |
| [[JapanFG/goldman-sachs-japan|Goldman Sachs Japan]] | Cross-border / structured CB lead |
| [[JapanFG/morgan-stanley-japan|Morgan Stanley Japan]] | Cross-border / structured CB lead |
| Other foreign banks | Cross-border lead-managers for global tranche |

League-table credit is allocated via [[finance/japan-ib-league-table|league table]] sources, separating ECM / equity-linked categories. Bookbuilding for vanilla zero-coupon CB is typically anchored by one or two leads.

## Recent large CBs by Japanese listed corporates

Process-level public observations only. FinWiki does not store private terms.

| Issuer category | Public process observation |
|---|---|
| Large-cap tech | Multi-tranche zero-coupon CB with call-spread overlays disclosed via TDnet / EDINET |
| Large-cap auto / industrial | Multi-billion-yen CB tranches for refinancing, capex, or M&A |
| Exchangeable into cross-shareholding | Exchangeable bonds used to monetise cross-shareholdings — see [[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding unwinding economics]] |
| Growth issuers (Prime / Standard / Growth) | Mid-cap CB issuance for capex / M&A |

Cross-reference public TDnet / EDINET filings for specific issuance terms.

## Use of proceeds

| Purpose | Frequency |
|---|---|
| Refinancing existing debt | Very common |
| Capex / R&D | Common |
| M&A war chest | Common |
| Share buyback hedge | Less common, sometimes paired with treasury-share programmes |
| Cross-shareholding monetisation (exchangeable) | Targeted use case |
| General corporate purposes | Common in routine issuance |

Issuer disclosure is required for use-of-proceeds in EDINET registration statements.

## Related

- [[finance/INDEX]]
- [[finance/japan-ib-league-table]]
- [[finance/japan-fair-disclosure-and-insider-trading-controls]]
- [[finance/japan-large-shareholding-disclosure]]
- [[finance/japan-shareholder-proposal-and-agm-voting-route]]
- [[finance/japan-activist-investor-playbook]]
- [[finance/japan-acquisition-finance]]
- [[finance/japan-tender-offer-process]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[securities/japan-ipo-listing-disclosure-route]]
- [[securities/japan-underwriting-market-structure]]
- [[JapanFG/nomura-hd]]
- [[JapanFG/daiwa-sg]]
- [[JapanFG/smbc-nikko]]
- [[JapanFG/mizuho-securities]]
- [[JapanFG/goldman-sachs-japan]]
- [[JapanFG/morgan-stanley-japan]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: FIEA tender-offer FAQ and securities-registration framework.
- JPX: TDnet timely-disclosure overview and listed-company search.
- EDINET: securities-registration statements and large-shareholding reports.
- Japanese Law Translation: Companies Act (share-issuance, third-party allocation, special resolution).
- BOJ: market statistics public hub.
- Nomura, Daiwa: investment banking and equity-linked public materials.
