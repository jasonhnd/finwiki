---
source: derivatives/retail-fx-margin-trade-japan
source_hash: b6174f911dffa2a8
lang: en
status: machine
fidelity: ok
title: "Retail FX margin trading in Japan"
translated_at: 2026-07-29T10:14:41.416Z
---

# Retail FX margin trading in Japan

## TL;DR

Japan's retail FX margin trading market (FX 証拠金取引) is a regulated leveraged-derivatives market. A business offering FX transactions to residents of Japan must hold Financial Instruments Business registration; an overseas license alone is not sufficient. Individual OTC accounts require at least 4% margin, equivalent to leverage no greater than 25 times. Corporate OTC margin is calculated by currency pair from historical price movements rather than by a single universal leverage cap. The FSA warns that losses can exceed deposited margin even when a provider applies its loss-cut rule. ^[Source: https://www.fsa.go.jp/ordinary/iwagai/.]

This entry sits in the [[derivatives/INDEX|derivatives index]] as the retail-FX surface, distinct from the wholesale corporate FX covered by [[derivatives/corporate-fx-hedge-policy-japan-listed|corporate FX hedge policy at Japan listed companies]] and [[derivatives/fx-options-japan-corporate-treasury|FX options for Japan corporate treasury]].

## Wiki route

This page is the retail-FX brokerage entry in the [[derivatives/INDEX|derivatives index]]. Read it against [[derivatives/fx-stp-broker-aggregation|FX STP and broker liquidity aggregation]] for the back-end liquidity-routing view, [[derivatives/fx-options-japan-corporate-treasury|FX options for Japan corporate treasury]] for the wholesale counterpart, and [[money-market/japan-money-market|Japan money market]] for rate-environment context relevant to financing and swap points.

## Market size

FFAJ publishes a monthly bulletin for OTC retail FX handled by reporting members. The June 2026 bulletin, updated on July 14, 2026, provides the following dated snapshot. ^[Source: https://www.ffaj.or.jp/library/performance/fx_flash/.]

| Reported field | June 2026 snapshot | Interpretation boundary |
|---|---|---|
| OTC retail FX handling members / reporting members | 46 / 46 | Member-firm reporting population as of June 30, 2026 |
| Monthly trading volume | ¥667.5552 trillion (`6,675,552` hundred million yen) | Reported turnover, not customer assets or revenue |
| Month-end open positions | ¥11.1265 trillion (`111,265` hundred million yen) | Aggregate reported open positions as of June 30, 2026 |
| Short / long open positions | ¥6.2929 trillion / ¥4.8336 trillion (`62,929` / `48,336` hundred million yen) | Components of the reported month-end total |

### Statistical scope and interpretation

The FFAJ bulletin also links data files for trading volume by currency pair, major-currency open positions and deposit information. Any currency-pair ranking should identify the extracted file and month rather than be presented as a timeless market fact.

The snapshot establishes member-reported turnover and positions. It does not by itself establish a global market ranking, active-customer count, provider market share or the shares of day-trading, carry, automated and hedging strategies. "Mrs. Watanabe" is therefore a media label, not an FFAJ customer taxonomy.

## Leverage cap

A central structural rule is the minimum margin required for individual OTC FX:

The following table's historical and current individual thresholds follow FSA materials; the current legal statement is a minimum 4% margin, equivalent to leverage no greater than 25 times. ^[Sources: https://www.fsa.go.jp/ordinary/iwagai/; https://www.fsa.go.jp/news/21/syouken/20090731-6.html.]

| Effective period | Individual-account minimum margin | Implied maximum leverage |
|---|---|---|
| Before August 1, 2010 | The cited 2009 rule had not yet taken effect | Not established by the cited rule |
| August 1, 2010-July 31, 2011 | At least 2% under the transitional measure | At most 50x |
| From August 1, 2011 | At least 4% | At most 25x |
| Current FSA page | At least 4%, regardless of currency pair | At most 25x; provider terms may be stricter |

The 4% minimum-margin rule is equivalent to a maximum legal leverage of 25 times for an individual account. A provider may impose more conservative requirements. Each provider must establish a loss-cut rule; its agreed trigger and operation should be checked in the current pre-contract documents. The FSA page does not prescribe a universal 100% or 50% trigger.

For corporate (法人) accounts, FSA requires at least the currency-pair-specific margin amount calculated from historical market prices. The resulting maximum leverage varies by currency pair and recalculation period; it is not a single broker-selected cap.

### Loss-cut mechanism

FSA requires each FX dealer to establish a loss-cut rule, but does not prescribe the universal 100% / 50% thresholds previously shown here. ^[Source: https://www.fsa.go.jp/ordinary/iwagai/.]

| Phase | Regulatory position | Broker action |
|---|---|---|
| Before trigger | Threshold is defined in the broker's pre-contract documents | Broker monitors valuation loss and required margin |
| Loss-cut trigger | Broker-specific agreed level | Broker forcibly closes the position under its rule |
| Gap / illiquid market | Execution may occur beyond the trigger price | Realized loss can exceed deposited margin |

The rule is intended to limit further loss, but it does not guarantee a maximum loss. FSA explicitly warns that rapid market moves can produce losses greater than the deposited margin even when the loss-cut rule is applied.

## Registered-provider examples

The following entities appeared in FFAJ's OTC FX provider list dated June 1, 2026. The table is a registration cross-check, not a market-share or quality ranking. ^[Sources: https://www.fsa.go.jp/menkyo/menkyoj/kinyushohin.pdf; https://www.ffaj.or.jp/members/document/.]

| Provider | Registration number shown by FFAJ | Check before use |
|---|---|---|
| [[securities-firms/gmo-click-securities|GMO Click Securities]] | Kanto Local Finance Bureau (Financial Instruments) No. 77 | Current legal entity, registration, product documents and service availability |
| [[securities-firms/sbi-fx-trade|SBI FX Trade]] | Kanto Local Finance Bureau (Financial Instruments) No. 2635 | Current legal entity, registration, product documents and service availability |
| [[securities-firms/dmm-com-securities|DMM.com Securities]] | Kanto Local Finance Bureau (Financial Instruments) No. 1629 | Current legal entity, registration, product documents and service availability |
| [[securities-firms/matsui-sec|Matsui Securities]] | Kanto Local Finance Bureau (Financial Instruments) No. 164 | Current legal entity, registration, product documents and service availability |
| OANDA Securities | Kanto Local Finance Bureau (Financial Instruments) No. 2137 | Current legal entity, registration, product documents and service availability |
| [[securities-firms/saxo-bank-securities|Saxo Bank Securities]] | Kanto Local Finance Bureau (Financial Instruments) No. 239 | Current legal entity, registration, product documents and service availability |

The list is not exhaustive. Inclusion does not establish relative scale, pricing quality, execution quality or suitability.

### Provider-term comparison checklist

Provider terms change over time. A dated comparison should inspect:

- **Spread conditions**: advertised and actual spreads, applicable hours and exception conditions in current documents.
- **Swap points**: current receipts, payments and calendar treatment for the exact currency pair.
- **Platform and orders**: supported order types, minimum trade size and system requirements.
- **Execution**: execution policy, slippage handling, rejection handling and disclosed risk information.
- **System availability**: maintenance windows, incident disclosures and fallback channels.
- **Fees and incentives**: current fee schedule, campaign period, eligibility and exclusions.
- **Support**: current service hours, channels and supported languages.

## Regulation

FX transactions are derivatives under the Financial Instruments and Exchange Act (FIEA, 金融商品取引法). A business offering them to residents of Japan needs Financial Instruments Business registration. The main FSA investor-protection boundaries are:

The table summarizes FSA's investor-protection rules and registered-business boundary. ^[Sources: https://www.fsa.go.jp/ordinary/iwagai/; https://www.fsa.go.jp/menkyo/menkyoj/kinyushohin.pdf.]

| Requirement | Evidence-bounded position |
|---|---|
| Registration | Financial Instruments Business registration is required; an overseas license alone is insufficient for offering the business to Japan residents. |
| Provider disclosure | Registered firms disclose business and financial explanatory materials; OTC FX firms also publish specified risk information. |
| Margin | Individuals maintain at least 4%; corporate OTC FX uses a currency-pair-specific historical-price calculation. |
| Loss-cut | Each provider defines a rule and agreed trigger; a loss beyond deposited margin remains possible. |
| Client money | Customer assets must be clearly separated from provider assets through a money trust at a trust bank or equivalent arrangement. |
| Solicitation | The FSA lists prohibited solicitation practices, including specified unsolicited and repeated solicitation. |
| Self-regulatory route | FFAJ is the self-regulatory organization for participating firms; current membership and dispute routes must be checked directly. |

Trust segregation is intended to protect customer assets if a provider fails. The actual return process and amount remain subject to the trust arrangement, account records and applicable insolvency process; segregation is not a guarantee against trading losses.

## Segregated client funds (信託保全)

The FSA states that providers must manage customer assets separately from their own assets through a money trust at a trust bank or equivalent arrangement. The cited FSA page does not specify a universal valuation cadence, deposit cut-off, trustee or recovery timetable. Those operational details must be taken from the provider's current trust, account and pre-contract documents. ^[Source: https://www.fsa.go.jp/ordinary/iwagai/.]

Any claim about a segregation breach or enforcement outcome should be tied to a dated FSA order for the exact legal entity rather than inferred from an industry anecdote.

### Enforcement and withdrawal evidence boundary

A provider-failure, withdrawal or customer-transfer case requires three separate evidence checks:

- **Regulatory record**: exact entity, date, legal basis and disposition in an FSA or local-finance-bureau notice.
- **Service transition**: transfer, termination and withdrawal mechanics in dated provider and successor notices.
- **Customer-asset treatment**: applicable trust agreement, account records and insolvency or administration process.

Without those case records, this page does not assign a failure cause, recovery rate or customer-transfer outcome.

## Individual vs corporate leverage difference

The FSA distinguishes the margin rules for individuals and corporations:

The individual and corporate rows use the FSA's current margin rules; neither row guarantees that a broker will offer the maximum legally possible leverage. ^[Source: https://www.fsa.go.jp/ordinary/iwagai/.]

| Account type | Leverage cap | Notes |
|---|---|---|
| Individual (個人口座) | At most 25x under the 4% minimum-margin rule | Broker terms can be more conservative |
| Corporate (法人口座) | Variable by currency pair under the historical-price-based minimum-margin calculation | Actual leverage depends on the current required margin and broker terms |

Corporate-account availability, onboarding documents and permitted use are provider-specific. The existence of a corporate account does not establish the customer's hedging purpose or make it equivalent to a bank forward. Company-level hedging analysis still requires company disclosures and the framework in [[derivatives/corporate-fx-hedge-policy-japan-listed|corporate FX hedge policy at Japan listed companies]].

## Product taxonomy

Provider catalogues may include products beyond OTC FX margin trading, but product rules, registrations and legal entities can differ:

Product availability and legal entity vary by provider; the table is a taxonomy, not a claim that one FX registration covers every product. ^[Sources: https://www.fsa.go.jp/ordinary/iwagai/; https://www.fsa.go.jp/policy/virtual_currency02/index.html.]

| Product | Description | Verification boundary |
|---|---|---|
| OTC FX margin | Leveraged bilateral FX derivative between customer and provider | Confirm provider registration, pre-contract documents and available currency pairs |
| Mini / micro trade size | A smaller provider-defined contract or order size | Confirm current minimum size and increments; no universal lot size is implied |
| Automated / system trade | Order or strategy functionality delivered through a platform | Confirm supported functions, execution policy, fees and operational risks |
| Index / commodity CFD | A non-FX derivative linked to an index or commodity | Confirm the separate product documents, margin rule and registered entity |
| OTC binary option | A separate fixed-payout derivative category | Confirm the current registered-provider list and applicable rules |
| Crypto-asset service | Trading or intermediation involving crypto-assets | Confirm the separate regulatory perimeter, registration and legal entity |

The taxonomy does not establish that any named FX provider offers every row, or that one registration covers every product.

## Spread and fee evidence boundary

The FSA retail-risk page does not establish a broker's internalisation model, STP markup, fee mix or profitability. Those fields must be taken from the provider's current pre-contract document, fee schedule, execution policy and financial disclosure. This page therefore does not present a generic B-book / A-book revenue table or unsupported pip and fee ranges.

## Comparison with overseas retail FX regimes

Japan's regulatory model differs in meaningful ways from other major retail FX jurisdictions:

The comparison table is limited to leverage requirements stated by the cited regulators. Product definitions, client-money rules, negative-balance protection and eligibility differ by jurisdiction and must be checked separately; no cross-border legality conclusion follows from this table. ^[Sources: https://www.fsa.go.jp/ordinary/iwagai/; https://www.cftc.gov/PressRoom/PressReleases/8566-22; https://www.esma.europa.eu/press-news/esma-news/esma-adopts-final-product-intervention-measures-cfds-and-binary-options; https://www.fca.org.uk/publications/policy-statements/ps19-18-restricting-contract-difference-products; https://asic.gov.au/about-asic/news-centre/find-a-media-release/2020-releases/20-254mr-asic-product-intervention-order-strengthens-cfd-protections/.]

| Jurisdiction / product scope | Retail leverage limit in cited rule |
|---|---|
| Japan retail OTC FX margin | At most 25x under the 4% minimum-margin rule |
| US retail off-exchange forex | Security deposit of 2% for major currencies and 5% for other currencies, equivalent to 50x and 20x respectively |
| EU retail CFDs | 30:1 for major currency pairs, with lower limits for other underlyings |
| UK retail CFDs and CFD-like options | 30:1 to 2:1 according to underlying volatility |
| Australia retail CFDs | 30:1 for major currency pairs, with lower limits for other underlyings |

The cited regimes all constrain retail leverage, but their legal product perimeter and customer-protection architecture are not interchangeable.

## Tax evidence boundary

The National Tax Agency pages cited below describe the treatment of qualifying FX settlements and "miscellaneous income, etc. from futures transactions" under law current as of April 1, 2025. ^[Sources: https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1521.htm; https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1522.htm.]

| Feature | NTA statement | Scope guardrail |
|---|---|---|
| Applicable FX settlements | For FX settlements conducted on or after January 1, 2012, qualifying gains and losses enter the separated-tax framework described by the NTA | The exact transaction and taxpayer must satisfy the statutory scope |
| Stated rates | Income tax 15% plus local tax 5%; for filings from 2013 through 2037, reconstruction special income tax is generally 2.1% of the base income-tax amount | Do not apply a single effective-rate label without checking the taxpayer and filing year |
| Loss offset | A loss can be offset against other eligible "miscellaneous income, etc. from futures transactions" | It cannot be offset against income outside that category merely because it is investment income |
| Loss carryforward | A remaining eligible loss may be carried forward for each of the following 3 years, subject to conditions | Filing and continuity requirements must be satisfied |
| OTC counterparty boundary | For OTC derivatives from October 1, 2016, transactions with a counterparty other than a Type 1 Financial Instruments Business operator or registered financial institution fall outside the separated treatment described on the FX page | Verify the exact legal entity and current tax law |

Tax and filing consequences depend on the taxpayer, transaction and current law. This page is not tax advice.

## Related

- [[derivatives/INDEX|derivatives index]]
- [[derivatives/fx-stp-broker-aggregation]]
- [[derivatives/corporate-fx-hedge-policy-japan-listed]]
- [[derivatives/fx-options-japan-corporate-treasury]]
- [[derivatives/cross-currency-basis-swap-japan]]
- [[derivatives/yen-basis-swap-market]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[money-market/japan-money-market]]
- [[money-market/INDEX]]
- [[securities-firms/gmo-click-securities]]
- [[securities-firms/sbi-fx-trade]]
- [[securities-firms/dmm-com-securities]]
- [[securities-firms/matsui-sec]]
- [[securities-firms/saxo-bank-securities]]

## Sources

- Financial Services Agency: retail FX risks and investor-protection rules — https://www.fsa.go.jp/ordinary/iwagai/
- Financial Services Agency: 2009 margin-rule publication and transitional measure — https://www.fsa.go.jp/news/21/syouken/20090731-6.html
- Financial Services Agency: current Financial Instruments Business registry — https://www.fsa.go.jp/menkyo/menkyoj/kinyushohin.pdf
- Financial Futures Association of Japan: monthly OTC retail FX bulletin — https://www.ffaj.or.jp/library/performance/fx_flash/
- Financial Futures Association of Japan: registered OTC FX provider list — https://www.ffaj.or.jp/members/document/
- Financial Futures Association of Japan: corporate OTC FX margin regulation — https://www.ffaj.or.jp/regulation/corporate-customers/
- National Tax Agency: FX taxation — https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1521.htm
- National Tax Agency: special treatment for miscellaneous income from futures transactions — https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1522.htm
