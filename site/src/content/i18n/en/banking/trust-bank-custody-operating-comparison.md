---
source: banking/trust-bank-custody-operating-comparison
source_hash: 18f01360e442ef85
lang: en
status: machine
fidelity: ok
title: "Japan trust bank custody operating comparison"
translated_at: 2026-05-31T03:19:56.372Z
---

# Japan trust bank custody operating comparison

## Overview

Japan custody analysis uses institution types as a primary field. Full-service trust banks, asset-administration specialists, global custodians / ICSD branches, and settlement infrastructures perform different jobs. A "trust account" or custodian name in a shareholder table is usually a nominee / administration surface, not proof that the trust bank is the economic investor.

This page sits under [[banking/INDEX|banking domain]] and compares the operating layer behind trust-bank custody. Use it with [[banking/japan-trust-bank-custody-map|Japan trust bank and custody map]], [[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]], [[trust-banks/master-trust-bank|Master Trust Bank of Japan]], [[trust-banks/custody-bank|Custody Bank of Japan]], [[trust-banks/mitsubishi-ufj-trust-bank|Mitsubishi UFJ Trust Bank]], [[trust-banks/smtb|SMTB]], [[trust-banks/mizuho-trust-bank|Mizuho Trust]], [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]], [[foreign-financial-institutions/state-street-japan|State Street Japan]], [[foreign-financial-institutions/euroclear-bank-japan|Euroclear Bank Japan]], [[foreign-financial-institutions/clearstream-banking-japan|Clearstream Banking Japan]], [[securities/japan-market-infrastructure-map|securities market infrastructure]], and [[securities/japan-stock-lending-market-route|stock lending market route]].

## Institution-Type Comparison

| Type | Examples | Core function | What not to infer |
|---|---|---|---|
| Full-service trust bank | [[trust-banks/mitsubishi-ufj-trust-bank|Mitsubishi UFJ Trust]], [[trust-banks/smtb|SMTB]], [[trust-banks/mizuho-trust-bank|Mizuho Trust]] | Trust, pensions, real estate, securities agency, asset administration, custody as one business line | Do not assume custody is the whole business. |
| Asset-administration specialist | [[trust-banks/master-trust-bank|Master Trust Bank of Japan]], [[trust-banks/custody-bank|Custody Bank of Japan]] | Institutional custody, pension / investment-trust administration, fund accounting, corporate actions | Do not treat nominee holdings as proprietary investment. |
| Global custodian / sub-custodian | [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]], [[foreign-financial-institutions/state-street-japan|State Street Japan]] | Cross-border asset servicing, institutional custody, fund services, securities services | Do not infer local bank balance-sheet exposure from custody role alone. |
| ICSD / collateral infrastructure | [[foreign-financial-institutions/euroclear-bank-japan|Euroclear Bank Japan]], [[foreign-financial-institutions/clearstream-banking-japan|Clearstream Banking Japan]] | International settlement, collateral, cross-border custody | Do not treat ICSD branch presence as a domestic retail bank route. |
| Market infrastructure | [[securities/japan-securities-depository-center|JASDEC]], [[securities/japan-securities-clearing-corp|JSCC]], BoJ JGB book-entry | Book-entry transfer, clearing, DVP, JGB settlement | Infrastructure is not an investment manager. |

## Operating Functions

| Function | Who usually performs it | Analysis note |
|---|---|---|
| Safekeeping / book-entry administration | Custodian / trust bank / depository layer | Legal / recordkeeping function, not investment choice. |
| Settlement | Custodian plus market infrastructure | Connect to JASDEC, JSCC, BoJ JGB systems. |
| Corporate actions | Custodian / asset administrator | Executes rights events and notifications for underlying beneficial owner. |
| Voting operations | Custodian executes or supports instructions | Economic vote usually belongs to beneficial owner / manager. |
| Fund accounting / NAV | Asset-administration specialist | Operationally critical for investment trusts and pensions. |
| Securities lending support | Custodian, agent lender, beneficial owner, borrower | Link to [[securities/japan-stock-lending-market-route|stock lending market route]]. |
| Cross-border custody | Global custodian / ICSD / sub-custodian | Watch tax, settlement, disclosure, and collateral chain. |

## Master Trust Versus Custody Bank

[[trust-banks/master-trust-bank|Master Trust Bank of Japan]] and [[trust-banks/custody-bank|Custody Bank of Japan]] are domestic asset-administration specialists. Both are institution-facing entities with investment-trust, pension, and institutional asset-administration roles. Their appearance in shareholder lists is recorded as trust / nominee / administration structure unless proprietary ownership is separately disclosed.

Public comparison fields include ownership, client base, assets under custody / administration, fund-accounting role, pension / investment-trust coverage, corporate-action operations, securities-lending support, and connections to JASDEC / JSCC / BoJ. Numeric AUC / AuA claims are source-date specific.

## Full-Service Trust Banks

[[trust-banks/mitsubishi-ufj-trust-bank|Mitsubishi UFJ Trust Bank]], [[trust-banks/smtb|SMTB]], and [[trust-banks/mizuho-trust-bank|Mizuho Trust]] are broader trust-bank operators. They can combine custody / administration with real estate, pensions, securities agency, asset management, inheritance / wealth, and banking group services.

## Public-Filing Interpretation

| Filing artifact | Better reading |
|---|---|
| "信託口" in a major-shareholder table | Usually nominee / trust-account label. Identify beneficial owner or trust structure before drawing control conclusions. |
| Custodian appears as top shareholder | Custody / administration route unless disclosure says proprietary holding. |
| Investment-trust holdings | Look through to fund, manager, and beneficial-owner economics. |
| Securities-lending balances | Can reflect lending programs, collateral, and market plumbing rather than directional short thesis. |
| Foreign custodian name | Could be sub-custody or global custody for foreign investors. Do not assume local control intent. |

## Source Fields

1. Institution type.
2. Trustee, custodian, fund administrator, investment manager, securities agent, and proprietary investor roles.
3. Source dates for AUC / AuA / trust assets.
4. Book-entry / DVP route linked to [[securities/japan-market-infrastructure-map|market infrastructure]].
5. Securities-lending and short-sale route linked to [[securities/japan-stock-lending-market-route|stock lending]].
6. Beneficial-owner confirmation where a custody name appears in ownership data.

## Related

- [[banking/INDEX]]
- [[banking/japan-trust-bank-custody-map]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[trust-banks/master-trust-bank]]
- [[trust-banks/custody-bank]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/smtb]]
- [[trust-banks/mizuho-trust-bank]]
- [[foreign-financial-institutions/bny-mellon-japan]]
- [[foreign-financial-institutions/state-street-japan]]
- [[foreign-financial-institutions/euroclear-bank-japan]]
- [[foreign-financial-institutions/clearstream-banking-japan]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-stock-lending-market-route]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: trust-business financial institution list and supervisory guidance.
- Trust Companies Association of Japan: trust-bank explanation, member companies, and trust-assets statistics.
- Master Trust Bank of Japan: company / business overview.
- Custody Bank of Japan: company / business overview.
- JASDEC, JSCC, and BoJ: securities settlement, DVP, and JGB book-entry materials.
