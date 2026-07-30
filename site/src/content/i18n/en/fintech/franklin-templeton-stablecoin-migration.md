---
source: fintech/franklin-templeton-stablecoin-migration
source_hash: 67f0b53190949088
lang: en
model: manual-issue-239-provenance-repair
status: machine
fidelity: ok
title: "Franklin Templeton FOBXX (BENJI) · From Stellar-only to multichain RWA · The \"tokenized fund ≠ stablecoin\" paradigm"
translated_at: 2026-07-29T17:58:52.645Z
---
# Franklin Templeton FOBXX (BENJI) · From Stellar-only to multichain RWA · The "tokenized fund ≠ stablecoin" paradigm

## TL;DR

The **Franklin OnChain U.S. Government Money Fund** (ticker FOBXX, with the on-chain **BENJI** token representing 1 share) is a U.S.-registered money market fund launched in 2021-04 and an early example of using a public blockchain as the official system of record for transaction processing and share ownership. It started on Stellar, then expanded to Polygon, Arbitrum, Avalanche, Ethereum, Aptos, Base, Solana, and BNB Smart Chain during 2023-2025 as a sequence. This is a fund share operated under the 1940 Act / Rule 2a-7 and is not a payment stablecoin. Because AUM, yield, and supported networks change, this page uses Franklin Templeton's published 2026-05 figures and official Benji deployment list as its baseline.

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] as another tokenized-fund structure, with [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]] as a private-credit tokenization example, and with [[fintech/stablecoin-issuer-2025-2026-market-consolidation|stablecoin issuer 2025-2026 consolidation]] for why tokenized funds and stablecoins are increasingly recognized as distinct categories. No same-date, same-method dataset is used here to assign market tiers or rank these products.

## Product fundamentals

The table below is based on the [Franklin Templeton product page](https://www.franklintempleton.com/investments/options/money-market-funds/products/29386/SINGLCLASS/franklin-on-chain-u-s-government-money-fund/FOBXX), [prospectus](https://www.franklintempleton.com/forms-literature/download-preview/9001-P), and [official Benji page](https://digitalassets.franklintempleton.com/benji/) (figures use the stated reference dates; checked 2026-07-30).

| Attribute | Value |
|---|---|
| Legal name | Franklin OnChain U.S. Government Money Fund |
| Ticker | FOBXX |
| On-chain share class symbol | BENJI |
| Fund type | 1940 Act registered money market fund (US, SEC) |
| Inception | 2021-04 |
| Total net assets | $813.50M (2026-05-31) |
| Expense ratio | Gross 0.22%; net 0.20% (2025-08-01 disclosure) |
| Underlying policy | At least 99.5% in U.S. government securities, cash, and fully collateralized repos |
| NAV objective | Seeks to maintain $1.00 per share; not guaranteed |
| Dividend frequency | Daily |
| Official record | Transfer agent's proprietary blockchain-integrated Benji platform |
| Networks listed by Franklin | Stellar, Polygon, Arbitrum, Avalanche, Ethereum, Aptos, Base, Solana, BNB Smart Chain |

## From Stellar launch to multi-network availability

FOBXX launched on Stellar in 2021-04. Franklin and the Stellar Development Foundation's [five-year release](https://www.franklintempleton.com/press-releases/news-room/2026/franklin-templeton-stellar-development-foundation-mark-five-years-of-benji-the-first-u.s.-registered-tokenized-money-market-fund) confirms the launch relationship and the use of a public blockchain as the official system of record. Franklin's official timeline then records additional networks from 2023 onward. Public materials establish the sequence, but do not establish the former causal claims about gas cost, regional market-maker demand, or competitive pressure from BUIDL; those interpretations have been removed.

## Multi-chain expansion timeline

The table below includes only the network-availability dates shown in the [official Benji milestone timeline](https://digitalassets.franklintempleton.com/benji/).

| Date | Chain added | Public status |
|---|---|---|
| 2021-04 | Stellar (launch) | Single-chain phase |
| 2023-04 | Polygon | First EVM expansion; tested transfer-agent-on-chain in EVM |
| 2024-08 | Arbitrum, Avalanche | Institutional availability |
| 2024-09 | Ethereum, Aptos | Institutional availability |
| 2024-10 | Base | Institutional availability |
| 2025-02 | Solana | Institutional availability |
| 2025-07 | BNB Smart Chain | Institutional availability |

Franklin's official deployment list shows a contract for each network. The method for moving between networks and any immediate convertibility depend on contractual terms and account eligibility; the shares should not be described as "freely fungible across any chain."

## "Tokenized fund vs stablecoin" — the regulatory distinction this product defined

FOBXX / BENJI is **not a payment stablecoin**. The table below distinguishes the [FOBXX prospectus](https://www.franklintempleton.com/forms-literature/download-preview/9001-P) structure from a typical payment-stablecoin product structure; the legal assessment of any particular stablecoin varies by place of issuance and issuer.

| Attribute | Stablecoin (USDC, PYUSD, USDG) | Tokenized MMF (BENJI, BUIDL) |
|---|---|---|
| Legal classification | Jurisdiction- and structure-specific payment instrument | U.S.-registered money market fund share |
| Return | Product terms vary; payment coins generally do not promise fund dividends | Daily-declared fund income dividends; amount not guaranteed |
| Daily value | Usually redemption at stated par under issuer terms | Seeks stable $1.00 share price; loss remains possible |
| Eligible buyer | Depends on issuer, venue, and jurisdiction | Account eligibility and transfer controls under fund documents |
| Regulator | Depends on issuer and jurisdiction | SEC-registered fund; other applicable U.S. rules |
| Use case | Payments, settlement, trading collateral | Treasury reserve management, RWA collateral, idle-cash yield |
| U.S. payment-stablecoin statute | Applies only where the statutory definition is met | Fund is governed as a money market fund, not described by Franklin as a payment stablecoin |

The product boundary should be evaluated from current documents rather than a universal treasury-allocation pattern. For a specific BENJI / stablecoin workflow, verify:

1. whether the investor and wallet are eligible for the fund and selected network;
2. the fund's purchase / redemption cut-off, settlement and transfer rules;
3. whether a named broker, custodian or venue publicly supports the requested conversion pair;
4. the stablecoin issuer's own redemption and account requirements; and
5. the legal treatment in the relevant jurisdiction.

The reviewed Franklin materials establish BENJI's fund structure and transaction channels. They do not establish that BNY Mellon, State Street, Goldman Sachs or Anchorage provides a universal same-day BENJI-to-stablecoin conversion service, nor that all U.S. stablecoins are legally barred from every yield-related arrangement.

## Yield distribution mechanics

FOBXX accrues income from the portfolio described in its prospectus. Franklin's current prospectus states that income dividends are declared daily and automatically reinvested in additional shares; the Benji page describes daily accrual and distribution through newly minted BENJI tokens.

Operational specifics:

- Distribution: income dividends are declared daily and automatically reinvested under the current prospectus.
- Wallet impact: additional shares represent reinvested distributions; investor tax treatment depends on circumstances and should not be inferred as tax-deferred.
- Network implementation: Franklin publishes per-network contracts; the public materials reviewed here do not support an “atomic push across all chains” claim.

## Adoption snapshot

Franklin's product page reports **$813.50M total net assets as of 2026-05-31**. Earlier quarterly AUM, holder-count, and market-share series previously shown here were not reproducible from the cited official materials and have therefore been removed. Relative ranking against BUIDL / OUSG should be recomputed from a dated, methodologically consistent dataset rather than carried forward as a fixed fact.

## Strategic context

The verifiable strategic fact is multi-network availability under a single fund and transfer-agent platform. Network coverage can reduce integration mismatch for eligible investors, but it does not prove universal availability, cross-chain fungibility, or adoption on each chain. Any strategic conclusion should be tested against dated AUM, holder and transfer data rather than inferred from the number of deployed contracts.

## The Benji app and web platform

[Franklin's Benji page](https://digitalassets.franklintempleton.com/benji/) states that shareholders can view account information and conduct transactions through the mobile app, while institutions can use the web platform. It also describes peer-to-peer transfers on enabled networks and daily yield accrual / distribution. Eligibility, onboarding, network availability and transfer restrictions remain subject to current account and fund documents. Franklin's reviewed official materials do not disclose the former “~40K KYC-verified users” figure, so it has been removed.

## How BENJI compares to other tokenized cash products

The table below fixes the BENJI column from the [Franklin product page and prospectus](https://www.franklintempleton.com/investments/options/money-market-funds/products/29386/SINGLCLASS/franklin-on-chain-u-s-government-money-fund/FOBXX) and provides a checklist for comparing other products. Peer figures must be aligned to the same reference date using each product's current issuer documents.

| Attribute | BENJI (FOBXX) | Other private / tokenized products |
|---|---|---|
| Legal type | U.S.-registered government money market fund | May be a private fund, security token, or another wrapper |
| Portfolio policy | ≥99.5% government securities, cash, fully collateralized repo | Product-specific |
| Distribution | Income declared and reinvested daily under current prospectus | Product-specific |
| Expense ratio | Gross 0.22%; net 0.20% at stated disclosure date | Product-specific |
| Liquidity | Purchases/redemptions follow fund business-day and cut-off rules | Product-specific |
| Networks | Nine listed on official Benji page as of review | Product-specific |
| AUM | $813.50M at 2026-05-31 | Requires same-date source before comparison |
| Recordkeeping | Franklin proprietary blockchain-integrated system | Product-specific |

The reliable structural delta is that BENJI is a registered money market fund with a public prospectus and blockchain-based official recordkeeping. Eligibility, minimums, and transferability must be checked in the current fund/account documents; the prior “Reg A accredited-retail share class” statement was not supported by the cited prospectus and has been removed.

## What to monitor

- total net assets and current yield on the official product page;
- new network contracts on the official Benji contract page;
- prospectus changes to eligibility, transfer, redemption and distribution terms;
- public issuer announcements for integrations rather than secondary-market attribution;
- regulatory treatment of tokenized fund shares separately from payment stablecoins.

## Related

- [[fintech/INDEX|fintech index]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL SC-issuer adoption matrix]]
- [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]]
- [[fintech/ondo-finance-rusdy-adoption|Ondo Finance · OUSG / USDY / Ondo Chain]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/ripple-rlusd-stablecoin|Ripple RLUSD]]
- [[fintech/first-digital-fdusd-hk-stablecoin|First Digital FDUSD]]
- [[fintech/frax-frxusd-defi-stablecoin|Frax frxUSD]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS]]
- [[fintech/world-liberty-usd1-political-stablecoin|WLF USD1]]
- [[fintech/m-network-m0-neutral-infrastructure|M^0 neutral infrastructure]]
- [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]]
- [[fintech/tether-business-model-short-treasury-yield|Tether business model]]
- [[fintech/stablecoin-issuer-2025-2026-market-consolidation|Stablecoin issuer 2025-2026 consolidation]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|Global stablecoin five-pole matrix]]
- [[fintech/three-circles-stablecoin-mra-framework|US/EU/Japan stablecoin market-access comparison]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|Institutional deposit-token thesis]]
- [[fintech/protocol-hedge-strategy-stripe-pattern|Protocol hedge strategy · Stripe pattern]]
- [[fintech/cbbtc-institutional-btc-wrapper|cbBTC institutional wrapper]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|Onchain finance vs crypto bifurcation]]
- [[exchanges/jp-cex-deposit-token-stablecoin-integration|JP CEX deposit-token integration]]
- [[exchanges/INDEX|exchanges index]]
- [[business/larry-fink-blackrock-digital-asset-template|Larry Fink BlackRock digital-asset template]]
- [[business/paolo-ardoino-tether-business-model-template|Paolo Ardoino Tether template]]

## Sources

- Franklin Templeton — FOBXX product page: https://www.franklintempleton.com/investments/options/money-market-funds/products/29386/SINGLCLASS/franklin-on-chain-u-s-government-money-fund/FOBXX
- Franklin Templeton — FOBXX prospectus: https://www.franklintempleton.com/forms-literature/download-preview/9001-P
- Franklin Templeton Digital Assets — official Benji page and deployment list: https://digitalassets.franklintempleton.com/benji/
- Franklin Templeton / Stellar Development Foundation — five-year BENJI release: https://www.franklintempleton.com/press-releases/news-room/2026/franklin-templeton-stellar-development-foundation-mark-five-years-of-benji-the-first-u.s.-registered-tokenized-money-market-fund
