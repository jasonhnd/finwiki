---
title: "JASDEC settlement operations"
aliases:
  - "jasdec-settlement-operations"
  - "JASDEC operations"
  - "Japan Securities Depository Center settlement operations"
  - "証券保管振替機構 settlement operations"
  - "ほふり settlement operations"
domain: banking
created: 2026-05-25
last_updated: 2026-07-29
last_tended: 2026-07-29
review_by: 2026-10-27
confidence: likely
tags: [banking, custody, settlement-infrastructure, jasdec, dvp, csd, market-infrastructure]
status: active
sources:
  - "https://www.jasdec.com/en/about/office/outline/"
  - "https://www.jasdec.com/en/about/office/history/"
  - "https://www.jasdec.com/en/system/less/"
  - "https://www.jasdec.com/en/system/sb/"
  - "https://www.jasdec.com/en/system/cp/outline/feature/"
  - "https://www.jasdec.com/en/system/fund/outline/basic/index.html"
  - "https://www.jasdec.com/en/system/finance/outline/range/"
  - "https://www.jasdec.com/en/system/dvp/outline/"
  - "https://www.jasdec.com/en/about/jdcc/outline/"
  - "https://www.jasdec.com/en/system/foreign/outline/"
  - "https://www.jasdec.com/en/rule/business-rules/index.html"
  - "https://www.jpx.co.jp/jscc/en/cash/cash/assumption-obligation/dvp.html"
  - "https://www.boj.or.jp/en/paym/jgb_bes/index.htm"
---

# JASDEC settlement operations

## Wiki route

This entry sits under [[banking/INDEX|banking index]] as a settlement-infrastructure companion to [[securities/japan-securities-depository-center|JASDEC entity page]] and [[securities/japan-securities-clearing-corp|JSCC clearing corp]]. Use it with [[banking/master-trust-bank-operating-model|Master Trust Bank operating model]], [[banking/custody-bank-operating-model|Custody Bank operating model]], [[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]], [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]], and [[securities/japan-market-infrastructure-map|Japan market infrastructure map]].

## TL;DR

JASDEC (株式会社証券保管振替機構 / Japan Securities Depository Center, Inc.) operates book-entry systems for shares and related instruments, corporate bonds, short-term corporate bonds, and investment trusts; a pre-settlement matching system; custody services for eligible foreign stock certificates; and other settlement services listed in its official company outline. JGBs use the separate Bank of Japan JGB Book-Entry System. JASDEC and its wholly owned subsidiary JDCC must also be kept distinct: JDCC is the financial-instruments clearing organization for JASDEC's DVP service for non-exchange transaction deliveries (NETDs). ^[Sources: https://www.jasdec.com/en/about/office/outline/; https://www.jasdec.com/en/about/jdcc/outline/; https://www.boj.or.jp/en/paym/jgb_bes/index.htm.]

## 1. Entity and legal-operating perimeter

| Field | Dated official fact |
|---|---|
| Legal name | Japan Securities Depository Center, Incorporated / 株式会社証券保管振替機構 |
| Incorporated | 2002-01-04; the prior nonprofit foundation's business transferred to the stock company in June 2002 |
| Paid-in capital | ¥4.25bn |
| Head office | 7-1 Nihonbashi Kabuto-cho, Chuo-ku, Tokyo |
| Published main businesses | Book-entry systems for shares, CP, corporate bonds, and investment trusts; NETD DVP; pre-settlement matching; foreign-stock-certificate custody; other businesses |
| DVP subsidiary | JASDEC DVP Clearing Corporation (JDCC), established 2003-06-06 and wholly owned by JASDEC |

Sources: identity, dates, capital, address, and the business inventory come from the current JASDEC and JDCC company outlines; historical succession comes from JASDEC's official history. ^[Sources: https://www.jasdec.com/en/about/office/outline/; https://www.jasdec.com/en/about/office/history/; https://www.jasdec.com/en/about/jdcc/outline/.]

## 2. System map

| System / service | Officially described scope | Boundary to preserve |
|---|---|---|
| Book-Entry Transfer System for Shares, etc. | Computerized issuance, transfer, and cancellation of rights in eligible shares and related instruments through JASDEC and account-management-institution accounts | Eligibility and issuer consent are instrument-specific |
| Corporate-bond system | Dematerialized handling of eligible corporate, municipal, specified, and qualifying foreign bonds | Do not collapse corporate bonds, CP, and JGBs into one system |
| Short-term corporate-bond system | Eligible CP issuance, transfer, and redemption; official materials describe BOJ-NET-linked gross-gross DVP | Product eligibility and minimum units come from current rules |
| Investment-trust system | Book-entry records for eligible domestic investment-trust beneficial interests; official materials describe BOJ-NET-linked DVP for relevant purchase/redemption flows | ETFs and REITs are handled under the shares system; offshore funds and mother funds are outside this system |
| Pre-Settlement Matching System (PSMS) | Post-trade, pre-settlement matching for covered users and transactions | Matching is not itself the final securities or funds settlement |
| DVP for NETDs | JDCC service linking securities delivery with payment for covered non-exchange transaction deliveries | JDCC's CCP role is distinct from JASDEC's CSD/book-entry role and from JSCC |
| Foreign-stock-certificate custody | Custody, book-entry settlement, deposit/delivery, rights processing, and notices for eligible foreign instruments traded on domestic exchanges | Scope is limited to eligible instruments and approved participants |
| JGB Book-Entry System | Operated by the Bank of Japan | Not a JASDEC book-entry system |

Sources: each row is scoped to the corresponding official system page; JGB separation is supported by the BoJ's own system page. ^[Sources: https://www.jasdec.com/en/system/less/; https://www.jasdec.com/en/system/sb/; https://www.jasdec.com/en/system/cp/outline/feature/; https://www.jasdec.com/en/system/fund/outline/basic/index.html; https://www.jasdec.com/en/system/finance/outline/range/; https://www.jasdec.com/en/system/dvp/outline/; https://www.jasdec.com/en/system/foreign/outline/; https://www.boj.or.jp/en/paym/jgb_bes/index.htm.]

## 3. Participant vocabulary

| Official term | Research reading |
|---|---|
| Issuer | Issuer of an instrument accepted into the relevant JASDEC system |
| Direct Account Management Institution | Institution for which JASDEC opens an account under the applicable system |
| Indirect Account Management Institution | Institution whose account is opened by another account-management institution and that may open accounts for another party |
| Participant | Person or institution for which JASDEC or an account-management institution opens an account enabling book-entry transfer |
| DVP participant | Participant satisfying the separate JDCC eligibility, operational, and financial criteria for the NETD DVP service |

Sources: terminology follows JASDEC's official shares-system structure and NETD DVP eligibility descriptions. A bank, trust bank, securities firm, or global custodian must not be called a direct participant without checking the current service-specific list. ^[Sources: https://www.jasdec.com/en/system/less/outline/organization/; https://www.jasdec.com/en/faq/.]

## 4. Clearing, matching, securities settlement, and cash settlement

| Layer | Operator / evidence route | What the layer establishes |
|---|---|---|
| Trade execution | Relevant exchange, PTS, or bilateral transaction venue | Executed trade; not by itself clearing or settlement |
| Pre-settlement matching | JASDEC PSMS for covered transactions | Matching of covered settlement instructions |
| Exchange-trade clearing | JSCC for the products and markets within its published scope | CCP assumption and net obligations under JSCC rules |
| NETD DVP clearing | JDCC for eligible NETDs | JDCC obligation assumption and risk controls under its rules |
| Securities book entry | JASDEC system applicable to the instrument | Increase, decrease, or transfer in the relevant book-entry records |
| Funds leg | Service-specific cash-settlement arrangement, including BOJ-NET where the official system page states it | Cash movement must be sourced per service; there is no single universal cash-leg description |
| JGB book entry | Bank of Japan | Separate JGB securities-settlement system |

Sources: this table separates functions that older summaries often conflate. The exact clearing and funds route must be read from JSCC, JDCC, JASDEC, and BoJ materials for the relevant product and transaction type. ^[Sources: https://www.jasdec.com/en/system/finance/outline/range/; https://www.jasdec.com/en/system/dvp/outline/; https://www.jasdec.com/en/about/jdcc/outline/; https://www.jpx.co.jp/jscc/en/cash/cash/assumption-obligation/dvp.html; https://www.boj.or.jp/en/paym/jgb_bes/index.htm.]

## 5. Corrections to avoid

| Unsupported shortcut | Correct publication rule |
|---|---|
| “JASDEC clears all Japanese securities trades” | Distinguish JASDEC book-entry functions, JSCC clearing, and JDCC's NETD DVP clearing |
| “JASDEC settles JGBs” | Route JGB book entry to the BoJ system |
| “Every named custodian is a direct JASDEC participant” | Check the current list for the specific JASDEC service and legal entity |
| “DVP-X1 / X2 / X3 are JASDEC quality tiers” | Do not use these labels unless an authoritative source defines them for the claim |
| “All JASDEC transfers have one cash leg” | Identify the asset class, transaction type, and applicable DVP/funds arrangement |
| “JASDEC fees are regulated utility rates” | Cite the applicable current JASDEC or JDCC fee schedule; publication alone does not prove a price-control characterization |
| “Settlement can never be reversed” | State finality only from the applicable statute, rules, and service-specific legal analysis |

Sources: the correction table is derived from the operator boundaries and current rule/fee inventories. It intentionally avoids extending one service's rules to another. ^[Sources: https://www.jasdec.com/en/rule/business-rules/index.html; https://www.jasdec.com/en/rule/dvp/whole/; https://www.jasdec.com/en/system/; https://www.boj.or.jp/en/paym/jgb_bes/index.htm.]

## 6. Trust-bank and custody research boundary

Trust banks and other custodians can interact with JASDEC as account-management institutions or participants where admitted under the applicable service. Their exact status is legal-entity and service specific. A “信託口” name in an issuer filing is therefore not enough to prove that the trust bank is the beneficial investor, and a custody mandate is not enough to prove direct JASDEC participation.

For a custody claim, record:

1. the legal entity;
2. the JASDEC system or service;
3. direct versus indirect account-management status;
4. the instrument and transaction type;
5. the clearing operator, if any;
6. the cash-settlement route; and
7. the source date.

Foreign-stock-certificate custody is also a specific JASDEC service: the official page describes use of local custodians, book-entry settlement, rights processing, and corporate-action notification for eligible instruments. It should not be generalized into a universal Euroclear/Clearstream link for every Japanese or foreign security. ^[Source: https://www.jasdec.com/en/system/foreign/outline/.]

## Related

- [[banking/INDEX]]
- [[banking/master-trust-bank-operating-model]]
- [[banking/custody-bank-operating-model]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/japan-trust-bank-custody-map]]
- [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[banking/trust-bank-fee-structure-comparison]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/tokyo-stock-exchange]]
- [[securities/osaka-exchange]]
- [[securities/osaka-digital-exchange]]
- [[securities/japan-security-token-secondary-market-route]]
- [[trust-banks/master-trust-bank]]
- [[trust-banks/custody-bank]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mizuho-trust-bank]]
- [[foreign-financial-institutions/bny-mellon-japan]]
- [[foreign-financial-institutions/state-street-japan]]
- [[foreign-financial-institutions/jpmorgan-japan]]
- [[foreign-financial-institutions/citigroup-japan]]
- [[foreign-financial-institutions/euroclear-bank-japan]]
- [[foreign-financial-institutions/clearstream-banking-japan]]
- [[finance/japan-listed-financial-groups-investable-universe]]

## Sources

- JASDEC company outline and official history.
- JASDEC official system pages for shares, corporate bonds, CP, investment trusts, PSMS, NETD DVP, and foreign-stock-certificate custody.
- JASDEC / JDCC current regulations and fee inventories.
- JSCC official clearing and DVP materials.
- Bank of Japan JGB Book-Entry System materials.
