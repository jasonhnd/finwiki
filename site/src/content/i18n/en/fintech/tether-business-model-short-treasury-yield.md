---
source: fintech/tether-business-model-short-treasury-yield
source_hash: c3ef814138621f16
lang: en
status: machine
fidelity: ok
title: "Tether (USDT) Reserve Investment Model — FY2025 and Q1 2026 Disclosures"
translated_at: 2026-07-30T02:03:00+09:00
---

# Tether (USDT) Reserve Investment Model — FY2025 and Q1 2026 Disclosures


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> Tether International's public disclosures state that it holds reserve assets above its USD₮ token liabilities and invests most reserves in highly liquid assets such as short-term US Treasuries and repos. It reported more than $10 billion of net profit for FY2025 and $1.04 billion for Q1 2026. Profit and proprietary investments should not be conflated with the reserves backing outstanding tokens. The public materials do not substantiate the staffing or customer-level profitability figures previously stated here.

## Conclusion

The following figures are based on Tether's FY2025 disclosure and its Q1 disclosure as of 31 March 2026. A quarterly attestation provides assurance over management assertions at a point in time; it is not equivalent to a full-year financial-statement audit. ^[https://tether.io/news/tether-delivers-10b-profits-in-2025-6-3b-in-excess-reserves-and-record-141-billion-exposure-in-u-s-treasury-holdings/; https://tether.io/news/tether-posts-1-04b-q1-2026-profit-despite-highly-volatile-global-markets-reaches-all-time-highs-8-23b-reserve-buffer-and-maintains-u-s-treasury-heavy-backing/]

| Item | Disclosed figure / mechanism |
|---|---|
| Reference date | 31 March 2026 (Q1 attestation) |
| Token liabilities | Approximately $183.44 billion |
| Total assets including reserves | Approximately $191.77 billion |
| Excess assets | Approximately $8.23 billion |
| Q1 2026 net profit | Approximately $1.04 billion |
| US Treasury exposure | Approximately $141 billion, direct and indirect combined |
| Other reserve assets | Approximately $20 billion of physical gold and $7 billion of Bitcoin in the Q1 disclosure |
| FY2025 net profit | More than $10 billion, announced 30 January 2026 |
| Earnings structure | Interest and repo income plus market-price movements contribute to earnings. Tether says proprietary investments are funded from excess capital and profits and are separated from the reserves for outstanding tokens |

## Reasoning

- Reserve duration, liquidity, counterparties, and prevailing interest rates affect both profitability and redemption resilience. Interest income could shrink when short-term rates decline.
- The more-than-$10-billion FY2025 figure and the $1.04-billion Q1 2026 figure cover different periods. A fixed yen conversion would vary with exchange rates and is therefore omitted.
- USD₮ can be transferred broadly on supported networks, while a direct issuance or redemption relationship with Tether is subject to identity, eligibility, and minimum-transaction requirements. It is therefore inaccurate to describe the system categorically as having no KYC or as unusable by institutions.
- Tether publishes quarterly assurance reports and announced in March 2026 that it had engaged a Big Four firm to pursue its first full financial-statement audit. The scope of an attestation and an audit must remain distinct.

## Applicable When

- When discussing stablecoin economics (yen-denominated SC issuance design / commercial settlement design, see [[fintech/circular-reserve-asset-flywheel-overview|準備資産フライホイール]])
- The “is a yen SC profitable?” discussion → all else equal, lower Japanese-yen short-term rates reduce gross interest income available from reserve assets. Final viability also depends on issuance outstanding, fees, operating and compliance costs, liquidity management, and credit and market risks; low rates alone do not determine whether the model is viable
- Discussion of the design of where user funds are invested → a bank-issued deposit-token structure may rest on deposit liabilities and the bank's asset deployment, but that structure is not common to every legal type of stablecoin. For trust and funds-transfer types, verify the issuer, safeguarding method, and redemption claim separately
- When analysing a proposal to integrate USDT → assess issuance and redemption terms, reserve assets, jurisdiction, counterparties, sanctions, and AML controls separately

## Source

- [Tether Transparency and assurance reports](https://tether.io/en/transparency/)
- [FY2025 and Q4 2025 attestation (30 January 2026)](https://tether.io/news/tether-delivers-10b-profits-in-2025-6-3b-in-excess-reserves-and-record-141-billion-exposure-in-u-s-treasury-holdings/)
- [Q1 2026 attestation (1 May 2026)](https://tether.io/news/tether-posts-1-04b-q1-2026-profit-despite-highly-volatile-global-markets-reaches-all-time-highs-8-23b-reserve-buffer-and-maintains-u-s-treasury-heavy-backing/)
- [Engagement for a first full financial-statement audit (24 March 2026)](https://tether.io/news/tether-signs-big-four-firm-to-complete-first-full-audit-setting-a-new-quality-standard-for-the-digital-asset-economy/)

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関投資家 SC = 預金トークン]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|onchain-finance-vs-crypto-bifurcation]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 三層構造]]
<!-- /wiki-links:managed -->
