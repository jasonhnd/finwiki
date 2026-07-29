---
source: finance/japan-convertible-bond-mechanics
source_hash: baef8defb7e691d3
lang: en
status: machine
fidelity: ok
title: "Japan convertible bond mechanics"
translated_at: 2026-07-29T00:00:00.000Z
---

# Japan convertible bond mechanics

## Wiki route

This page sits under [[finance/INDEX|finance domain]]. Read it with [[finance/japan-ib-league-table|Japan IB league table]] for bookrunner attribution, [[securities/japan-underwriting-market-structure|underwriting market structure]] for the issuance plumbing, [[securities/japan-ipo-listing-disclosure-route|IPO listing disclosure route]] for the disclosure-process analogue, [[finance/japan-fair-disclosure-and-insider-trading-controls|fair disclosure and insider trading controls]] for pre-launch information handling, and [[finance/japan-large-shareholding-disclosure|large shareholding disclosure]] for post-conversion ownership tracking.

## TL;DR

A Japan convertible bond (転換社債型新株予約権付社債, commonly abbreviated CB) is a debt security with an embedded equity conversion right; an MSCB is a terms-specific moving-strike structure, not a synonym for every CB. Issuance flow, conversion premium, coupon, term, call / put schedule, and settlement mechanics are instrument-specific and must be read from the issuer's TDnet and EDINET filings. Any numerical call or delta case below is an illustrative modelling input as of 2026-07-29, not a market statistic. Dilution and shareholder-protection procedures depend on the legal issuance route, terms, and dilution magnitude.

## Product taxonomy

Table source note: The table is a legal/structural taxonomy rather than a market-share statement. Convertible-bond and warrant mechanics derive from the Companies Act; listed issuers' dilutive financings are also subject to JPX's equity-finance framework. ^[Sources: https://www.japaneselawtranslation.go.jp/en/laws/view/3206/en and https://www.jpx.co.jp/english/regulation/listing/equity-finance/.]

| Type | Japanese term | Structural note |
|---|---|---|
| Vanilla convertible bond | 転換社債型新株予約権付社債 (CB with embedded warrants) | Fixed conversion price, coupon, term, hard / soft call protection |
| Zero-coupon convertible | Zero-coupon CB | Coupon and all economics must be read from the named filing; no frequency claim is made |
| Convertible bond with call spread | CB plus over-the-counter call-spread overlay | Read the separate overlay terms and model its actual dilution/economic effect |
| MSCB (moving-strike CB) | MSCB / 行使価額修正条項付転換社債 | Conversion price resets downward with stock price; significant dilution risk |
| Exchangeable bond | 交換社債 | Bond exchangeable into shares of another listed company held by issuer (e.g. cross-shareholding monetisation) |
| Mandatory convertible | Mandatory CB | Conversion obligation and settlement follow the instrument terms; accounting/economic classification is not inferred here |
| Pre-emptive rights offering with CB component | 株主割当 | Issued to existing shareholders pro-rata |

Vanilla zero-coupon CBs, exchangeable bonds, and other structures can be observed in issuer filings, but this page does not assert a current format ranking or market share. Verify the instrument mix over a defined period from EDINET/TDnet before making a market-frequency claim.

## Issuance flow

Table source note: The table maps the public disclosure workflow; actual order and documents depend on the offering. TDnet is JPX's timely-disclosure channel and EDINET is the statutory filing channel. ^[Sources: https://www.jpx.co.jp/english/equities/listing/disclosure/tdnet/ and https://disclosure2.edinet-fsa.go.jp/.]

| Stage | Activity | Public source |
|---|---|---|
| Board resolution | Board approves issuance principle, structure, size, use of proceeds | TDnet release |
| Lead-manager appointment | Identify any bookrunner(s), managers, or agents from the named filing | TDnet / EDINET document in which the role is actually disclosed |
| Structuring | Determine from the named filing whether a lead manager or another adviser participated in designing coupon, conversion premium, call / put schedule, anti-dilution, or hedge mechanics; do not infer the role from appointment alone | Named filing or offering document where the role is disclosed |
| Pre-marketing | Record investor pre-sounding only when the named filing or offering document discloses it; do not infer it from bookbuilding | Named filing or offering document where disclosed; apply [[finance/japan-fair-disclosure-and-insider-trading-controls|fair disclosure controls]] |
| Bookbuilding | Verify marketing and pricing timing from the named disclosures; do not assume an overnight process | TDnet launch and pricing releases |
| Pricing | Final terms set: coupon, conversion price, premium, call / put | EDINET securities registration statement (yūkasai-keikoku-shorui), TDnet release |
| Settlement | Cash settlement and bond delivery | Settlement notice |
| Listing | Bond listing on TOKYO PRO-BOND Market or non-listed institutional placement | JPX listing notice if listed |
| Post-issuance | Conversion notices, call / put exercise, coupon payments | TDnet / EDINET amendments |

For each issuance, compare the timestamps in the board, launch, pricing, and EDINET/TDnet documents. This page makes no general claim that pricing is overnight, same-day, or completed within a few hours.

## Conversion premium economics

Conversion premium is the percentage above reference share price at which the bond converts.

| Field | Deal-specific verification |
|---|---|
| Reference share price | Cite the exact price, date/time, venue, and definition in the final terms |
| Conversion price | Cite the exact initial/reset price and adjustment formula |
| Stated conversion premium | Recalculate from the filing's defined reference price; do not import a market band |
| Call-spread overlay | Model separately from the CB and use the executed terms, not a generic premium effect |
| Reset / mandatory feature | Apply the actual floor, cap, dates, settlement, and anti-dilution provisions |

The reference price may be VWAP, closing price, or another defined measure. Use only the definition and window in the named final terms.

Implied volatility, credit spread, dividend yield, stock-borrow cost, calls/puts, resets, and settlement can enter valuation. Their effect on negotiated premium is model- and deal-specific; do not infer investor demand or a direction from one input alone.

## Bond floor and option value

The CB price decomposes economically into a bond floor (NPV of coupons and principal at credit-adjusted yield) plus an embedded call option on the stock.

| Component | Driver |
|---|---|
| Bond floor | Coupon, principal, yield curve, credit spread |
| Option value | Stock price, conversion ratio, volatility, time, dividend, rate |
| Total CB value | Bond floor + option value (with adjustment for early-call / put features) |

Possible strategy labels include:

| Investor type | Strategy |
|---|---|
| Outright fundamental | Long CB for asymmetric upside; coupon + conversion option |
| Convertible arbitrage | Long CB, short stock per delta-neutral hedge ratio; harvest vol |
| Equity-linked income | Outright with credit-and-yield focus |
| Mandatory / preferred-equivalent strategy label | Classify the instrument from its conversion, settlement, loss-absorption, maturity, and applicable accounting or mandate terms; do not infer quasi-equity treatment |

Establish the demand mix only from a named book, allocation disclosure, fund holding, or other dated evidence. The strategy taxonomy does not prove participation by hedge funds, life insurers, asset managers, or overseas funds.

## Hedge ratio (delta)

The hedge ratio measures sensitivity of CB price to stock price movement.

| Delta | Interpretation |
|---|---|
| 0.0-0.3 | Bond-like behaviour; deep out-of-the-money |
| 0.3-0.5 | Illustrative intermediate-delta bin; not a standard at-issue range |
| 0.5-0.8 | Equity-sensitive; stock has rallied toward / above strike |
| 0.8-1.0 | Equity-equivalent; deep in-the-money, conversion likely |

Table source note: The delta bands are illustrative analytical bins, not a standard at-issue distribution. Calculate instrument delta from the selected model and exact terms as of a stated date. ^[Source: https://pages.stern.nyu.edu/~adamodar/pdfiles/papers/realopt.pdf.]

If a strategy shorts shares against a long CB, verify locate, borrow cost, recall, dividends, corporate actions, delta model, and rebalancing. Do not infer demand compression without deal-level evidence.

## Call and put protection

Table source note: These are generic contractual features, not terms implied by law or a current market standard. Any threshold or protected period shown as an example must be replaced by the final terms in the issuer's EDINET/TDnet filings. ^[Sources: https://disclosure2.edinet-fsa.go.jp/ and https://www.jpx.co.jp/english/equities/listing/disclosure/tdnet/.]

| Feature | Description |
|---|---|
| Hard call protection | Issuer cannot call before specified date |
| Soft call protection | Issuer may call only after satisfying the instrument's stated share-price and observation-period test (a 130-percent / 20-of-30 test is illustrative only) |
| Issuer call | Right to redeem at par or specified premium |
| Investor put | Right to put back at par or specified premium on specified dates |
| Change-of-control put | Put right upon defined change-of-control trigger |
| Tax call | Right to call if tax law changes affect coupon deductibility |
| Make-whole | Compensates investor for lost option value on early call |

Protection periods and put dates are instrument-specific. A 3-4-year hard-call period or intermediate put dates may be used as modelling examples, but are not asserted here as current Japan-market norms.

## Dilution analysis

| Field | Calculation |
|---|---|
| Conversion shares | CB face / conversion price |
| Dilution percent | Conversion shares / (existing shares + conversion shares) |
| Treasury share offset | Issuer can use treasury shares to deliver, reducing new-issuance dilution |
| Anti-dilution adjustment | Conversion price adjusts for stock split, dividend, rights issue, etc. |

Potentially significant dilution raises:

- Shareholder-vote requirement under Companies Act when third-party allocation with favourable terms triggers special-resolution rules.
- JPX shareholder-protection procedures for a third-party allotment with 25% or greater dilution, subject to the current rules and exceptions.
- Existing-shareholder feedback risk; possible activist response — see [[finance/japan-activist-investor-playbook|activist playbook]] and [[finance/japan-shareholder-proposal-and-agm-voting-route|shareholder proposal route]].

## Shareholder-vote considerations

Under the Companies Act, share-issuance route determines vote requirement.

Table source note: Companies Act approval depends on the security, authorization, and whether terms are “particularly favourable.” Separately, JPX requires shareholder-protection procedures for a third-party allotment with 25% or greater dilution and applies additional rules at still higher dilution; the table is a routing summary, not legal advice. ^[Sources: https://www.japaneselawtranslation.go.jp/en/laws/view/3206/en and https://www.jpx.co.jp/english/regulation/listing/equity-finance/.]

| Route | Vote requirement |
|---|---|
| Public offering (kōbo) | Determine the security, authorized amount, issuing organ, terms, favourable-issuance analysis, articles, and applicable Companies Act / JPX requirements; no blanket board-only conclusion |
| Third-party allocation (daisansha wariate) | Apply the exact Companies Act provisions to the company/security and whether terms are particularly favourable; identify the required corporate organ and procedure |
| Third-party allotment with 25% or greater dilution | JPX shareholder-protection procedures apply; consult the current rules for the permitted opinion/approval route and any exception |
| Rights offering | Pre-emptive offering to existing shareholders |

For a CB with share-acquisition rights, analyse the provisions applicable to the bond and rights rather than assuming an analogy to an ordinary share issuance. Pricing documentation is evidence to review, not proof that terms are not particularly favourable. See [[finance/japan-fair-disclosure-and-insider-trading-controls|fair disclosure controls]] for pre-launch information handling.

## Disclosure surfaces

Table source note: The rows identify the two official public channels and possible filing stages; not every instrument is listed or produces every document named. ^[Sources: https://www.jpx.co.jp/english/equities/listing/disclosure/tdnet/ and https://disclosure2.edinet-fsa.go.jp/.]

| Surface | Document |
|---|---|
| Board resolution / announcement | TDnet board-resolution or issuance announcement where disclosed |
| Launch | TDnet launch notice, EDINET securities-registration statement (有価証券届出書) |
| Pricing | TDnet pricing release with final terms |
| Settlement | TDnet settlement notice |
| Listing | JPX bond-listing notice (where listed) |
| Ongoing | Coupon payments, conversion notices, call / put exercise via TDnet |
| Conversion-driven ownership change | EDINET large-shareholding reports (see [[finance/japan-large-shareholding-disclosure|large shareholding disclosure]]) |

EDINET filings are statutory and authoritative; TDnet filings provide timely market dissemination. Both routes feed [[finance/japan-tender-offer-process|tender offer process]]-style market-impact analysis when the CB is part of a larger capital-structure transaction.

## Lead-manager attribution

Table source note: The linked firms are search routes, not a CB league table or role attribution. Assign a role only from the named issuer's TDnet/EDINET or offering document for a stated deal and date. ^[Sources: https://disclosure2.edinet-fsa.go.jp/ and https://www.jpx.co.jp/english/equities/listing/disclosure/tdnet/.]

| Bank | Role in Japan CB |
|---|---|
| [[securities-firms/nomura-hd|Nomura]] | Verify any lead, manager, agent, or structuring role in the named filing |
| [[securities-firms/daiwa-sg|Daiwa]] | Verify the exact role in the named filing |
| [[securities-firms/smbc-nikko|SMBC Nikko]] | Verify the exact role and legal entity in the named filing |
| [[securities-firms/mizuho-securities|Mizuho Securities]] | Verify the exact role and legal entity in the named filing |
| Mitsubishi UFJ Morgan Stanley (MUMSS) | Verify the exact role and legal entity in the named filing |
| [[securities-firms/goldman-sachs-japan|Goldman Sachs Japan]] | Verify the exact role and legal entity in the named filing |
| [[securities-firms/morgan-stanley-japan|Morgan Stanley Japan]] | Verify the exact role and legal entity in the named filing |
| Other banks | Add only when a named filing identifies the entity and role |

Any league-table attribution must use [[finance/japan-ib-league-table|league table]] sources with a defined category, period, and crediting rule. Do not assume one or two leads.

## Recent large CBs by Japanese listed corporates

Process-level public observations only. FinWiki does not store private terms.

| Issuer category | Public process observation |
|---|---|
| Large-cap tech | Search the selected period and cite each actual CB, tranche, and overlay filing |
| Large-cap auto / industrial | Search the selected period; do not infer size or proceeds from issuer category |
| Exchangeable into cross-shareholding | Verify the referenced shares, settlement, and stated purpose — see [[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding unwinding economics]] |
| Growth issuers (Prime / Standard / Growth) | Search the selected market segment and period; category alone proves no issuance or purpose |

Cross-reference public TDnet / EDINET filings for specific issuance terms.

## Use of proceeds

| Purpose | Filing check |
|---|---|
| Refinancing existing debt | Cite the exact amount, debt, timing, and allocation from the named filing |
| Capex / R&D | Cite the project, amount, period, and permitted reallocation |
| M&A funding | Cite the named or conditional purpose and any fallback use |
| Share buyback / treasury-share programme | Verify the legal and economic linkage; do not infer a hedge |
| Cross-shareholding monetisation (exchangeable) | Verify the referenced shares, purpose, and settlement terms |
| General corporate purposes | Record the filing language and allocation limits; do not infer frequency |

Read the applicable EDINET registration statement and amendments to determine the required and actual use-of-proceeds disclosure for the named offering.

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
- [[securities-firms/nomura-hd]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/smbc-nikko]]
- [[securities-firms/mizuho-securities]]
- [[securities-firms/goldman-sachs-japan]]
- [[securities-firms/morgan-stanley-japan]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: FIEA tender-offer FAQ and securities-registration framework.
- JPX: TDnet timely-disclosure overview and listed-company search.
- EDINET: securities-registration statements and large-shareholding reports.
- Japanese Law Translation: Companies Act (share-issuance, third-party allocation, special resolution).
- BOJ: market statistics public hub.
- Nomura, Daiwa: investment banking and equity-linked public materials.
