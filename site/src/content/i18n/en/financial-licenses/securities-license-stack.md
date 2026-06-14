---
source: financial-licenses/securities-license-stack
source_hash: a57653de86a1cac5
lang: en
status: machine
fidelity: ok
title: "Japan securities license stack"
translated_at: 2026-05-31T23:59:49.329Z
---
# Japan securities license stack

## Overview

Japan securities activity is not controlled by one generic "broker license." The practical stack is built from the Financial Instruments and Exchange Act (FIEA), FSA / Local Finance Bureau registration lists, JSDA self-regulation, exchange / PTS participation rules, clearing and settlement access, and customer-protection obligations.

Use this page with [[financial-licenses/INDEX|JapanFG legal / financial licenses]], [[securities/INDEX|securities domain]], [[securities/financial-instruments-business-operators-japan-index|FIEA operator registry index]], and [[financial-regulators/jsda|JSDA]] when a company page needs to say what kind of regulated securities role it is actually playing.

This page is a public-source research route, not legal advice. A live product or transaction still be checked against the latest FSA list, e-Gov law text, JSDA rules, supervisory guidelines, and counsel / regulator confirmation.

## Source-of-Truth Stack

| Layer | Primary source | What it proves | What it does not prove |
|---|---|---|---|
| Statute | e-Gov law text for FIEA and related ordinances | The current legal category and defined terms. | Whether a named company is registered today. |
| Registration | FSA "Lists of businesses that have received licenses, permits, registrations, etc." | Whether a firm appears in the checked official registry category and the registry as-of date. | Full product scope or commercial scale. |
| Supervisory view | FSA supervisory guidelines for financial instruments business operators | Public supervisory expectations for conduct, internal control, monitoring, customer protection, and market-intermediary behavior. | A private regulator opinion on a specific product. |
| Self-regulation | [[financial-regulators/jsda|JSDA]] member lists and rules | Whether the firm is in the dealer self-regulatory route and which conduct / underwriting / solicitation rules may be relevant. | Statutory licensing by itself. |
| Venue / infrastructure | [[securities/tokyo-stock-exchange|TSE]], [[securities/japannext-securities|Japannext]], [[securities/osaka-digital-exchange|ODX]], [[securities/japan-securities-clearing-corp|JSCC]], [[securities/japan-securities-depository-center|JASDEC]] | Trading, clearing, settlement, and PTS route. | Broker registration or suitability. |
| Product disclosure | Firm pages, prospectuses, EDINET / TDnet, official product pages | Whether the firm currently markets the product and what disclosures attach to it. | A general license conclusion. |

FSA's license portal checked on 2026-05-22 listed the financial instruments business operator, registered financial institution, financial instruments intermediary, securities finance company, clearing, depository, and related registry routes with current as-of dates. The dedicated FinWiki registry-control page keeps the 1,945-row FSA financial instruments business operator population at summary level rather than copying the official workbook.

## Regime Map

| Activity | Typical legal route | FinWiki reading |
|---|---|---|
| Securities brokerage / dealing / underwriting | Type I Financial Instruments Business Operator | Core route for major securities firms such as [[securities-firms/nomura-hd|Nomura]], [[securities-firms/daiwa-sg|Daiwa Securities Group]], [[securities-firms/smbc-nikko|SMBC Nikko]], [[securities-firms/mizuho-securities|Mizuho Securities]], and [[securities-firms/mufg-mums|MUMSS]]. |
| Fund interests / certain private placements / Type II products | Type II Financial Instruments Business Operator | Often appears in fund distribution, private placement, crowdfunding, and structured investment routes; do not equate it with full retail stock brokerage. |
| Investment advice / agency | Investment advisory and agency business | Explains advisory, fund selection, and wealth-advice boundaries; product execution may still require another route. |
| Investment management | Investment management business | Core route for asset managers such as [[asset-managers/nomura-asset-management|Nomura Asset Management]], [[asset-managers/asset-management-one|Asset Management One]], and [[asset-managers/mufg-asset-management|MUFG Asset Management]]. |
| Bank or trust-bank securities business | Registered financial institution | Banks can conduct specified securities-related businesses through registration, but the reading differs from a securities subsidiary's Type I route. |
| App / platform referral and solicitation support | Financial instruments intermediary or financial-service intermediary route | Useful for embedded finance and app distribution. Confirm the principal financial instruments operator and product scope. |
| PTS / off-exchange trading venue | PTS approval and Type I / venue-specific route | Relevant to [[securities/japannext-securities|Japannext]] and [[securities/osaka-digital-exchange|ODX]]. |
| Electronic public offering / security token handling | FIEA electronic offering and tokenized securities rows where applicable | Treat as a securities-registry and product-disclosure question, not only a fintech UX question. |
| Securities finance | Securities finance company | Relevant to [[financial-regulators/japan-securities-finance|Japan Securities Finance]] and margin / lending plumbing. |
| Clearing / depository | Clearing organization / depository institution | Relevant to [[securities/japan-securities-clearing-corp|JSCC]] and [[securities/japan-securities-depository-center|JASDEC]]. |

## Practical Decision Tree

| Question | First place to check | Second check |
|---|---|---|
| Is this company a securities firm? | FSA financial instruments business operator list. | JSDA member list and company disclosure. |
| Is this a bank selling investment products? | FSA registered financial institution list. | Bank disclosure, JSDA special-member route, product documents. |
| Is this just an app front end? | Intermediary / financial-service intermediary registration. | Principal operator, custody of assets, instruction flow. |
| Is this an underwriter? | Type I FIBO status and JSDA underwriting rules. | Prospectus / EDINET / JPX listing documents. |
| Is this investment advice? | Investment advisory / agency registration. | Contract form, compensation, and whether discretionary management is provided. |
| Is this investment management? | Investment management registration. | Fund documents, trustee / custodian structure, and product disclosures. |
| Is this a PTS? | FSA registry and venue approval. | Venue rulebook, JSDA / exchange data, clearing / settlement route. |
| Is this security-token related? | FIEA tokenized securities rows and product classification. | Whether the token is an electronic payment instrument, crypto asset, or FIEA security. |

## JapanFG Relevance

The same customer journey can contain multiple regulated roles:

- [[securities-firms/sbi-securities|SBI Securities]] and [[securities-firms/rakuten-securities|Rakuten Securities]] use online brokerage, NISA acquisition, points / ecosystem linkage, and SOR / PTS execution policies as competitive levers.
- [[securities-firms/mizuho-securities|Mizuho Securities]], [[securities-firms/mufg-mums|MUMSS]], and [[securities-firms/smbc-nikko|SMBC Nikko]] sit inside megabank groups, so entity analysis separate bank balance-sheet activity from securities subsidiary activity.
- [[securities-firms/paypay-securities|PayPay Securities]] and app-embedded brokers require extra attention to whether the app is the broker, an intermediary, or a distribution surface connected to a broker.
- [[securities-firms/monex-group|Monex Group]], [[securities-firms/gmo-click-securities|GMO Click Securities]], and [[securities-firms/dmm-com-securities|DMM.com Securities]] often sit near crypto, FX, CFD, and derivatives boundaries. Check whether the product is spot securities, derivatives, crypto asset, or another regulated category.
- [[financial-regulators/jsda|JSDA]] is the self-regulatory layer behind solicitation, underwriting, advertising, customer administration, and off-exchange practice.

## Boundary Cases

| Boundary | Why it is easy to misread | FinWiki treatment |
|---|---|---|
| License vs product offering | A firm may be registered for a category but not actively market a specific product. | Record the registry category and the actual public product separately. |
| Bank vs securities subsidiary | A group brand may show both bank and securities services. | Link the group page, bank page, and securities page separately. |
| Advice vs execution | Robo / advisory UX can blur advice, agency, and discretionary management. | Check advisory / agency and investment-management registration separately. |
| PTS vs broker SOR | Customer sees one order ticket, but execution may route to TSE, PTS, or internalized OTC flow. | Link to [[securities/japan-market-infrastructure-map|Japan market infrastructure map]] and venue pages. |
| Securities token vs crypto asset | A token can be marketed as digital, but legal classification changes the regime. | Route to FIEA first when it represents securities rights; route to [[exchanges/INDEX|exchanges]] for crypto-asset exchange status. |
| "Unlisted" vs "unlicensed" | Not finding a firm in one list may mean wrong category or stale spelling. | Record "not found in checked source as of date" rather than asserting unlicensed status. |

## Research Checklist

1. Start from the company legal name and corporate number where available.
2. Check the FSA license portal category that matches the activity.
3. If securities-related, check the FSA financial instruments business operator list and registered financial institution list.
4. Check JSDA member category when dealer self-regulation matters.
5. Check the firm disclosure for registration number, principal operator, customer asset segregation, and service scope.
6. For underwriting, check JPX listing material, EDINET / prospectus material, and JSDA underwriting rules.
7. For PTS / SOR, check venue rules and execution policy, not only fee marketing.
8. Write the conclusion with the as-of date and source category.

## Related

- [[financial-licenses/INDEX]]
- [[securities/INDEX]]
- [[securities/financial-instruments-business-operators-japan-index]]
- [[securities/japan-online-brokerage-competition]]
- [[securities/japan-underwriting-market-structure]]
- [[securities/japan-market-infrastructure-map]]
- [[financial-regulators/jsda]]
- [[securities-firms/sbi-securities]]
- [[securities-firms/rakuten-securities]]
- [[securities-firms/mizuho-securities]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: "Lists of businesses that have received licenses, permits, registrations, etc."
- FSA: "Financial Instruments Business Operator Registration List", as of 2026-04-30 on the checked FSA portal.
- FSA: comprehensive supervisory guidelines for financial instruments business operators.
- JSDA: organization overview, member list, and rules pages.
- e-Gov law search.
