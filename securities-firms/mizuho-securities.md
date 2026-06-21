---
title: "Mizuho Securities"
aliases:
  - "mizuho-securities"
  - "Mizuho Securities"
  - "みずほ証券"
domain: securities-firms
created: 2026-05-19
last_updated: 2026-05-20
last_tended: 2026-05-20
review_by: 2026-11-15
confidence: likely
tags: [JapanFG, securities, investment-banking, FIEA, Mizuho]
status: active
sources:
  - "https://www.mizuhogroup.com/jp/securities/who-we-are/profile"
  - "https://www.fsa.go.jp/menkyo/menkyoj/kinyushohin.pdf"
  - "https://www.fsa.go.jp/common/law/guide/city/index.html"
entity_node:
  kind: operating_company
  scope: japan_core
  status: anchor
entity_edges:
  - relation: registered_as
    target: financial-licenses/securities-license-stack
    evidence: fibo_registry
    source: "https://www.fsa.go.jp/menkyo/menkyo.html"
    as_of: 2026-06-21
    confidence: likely
  - relation: member_of_sro
    target: financial-regulators/jsda
    evidence: sro_membership
    source: "https://www.jsda.or.jp/"
    as_of: 2026-06-21
    confidence: likely
  - relation: regulated_by
    target: financial-regulators/fsa
    evidence: supervisory_authority
    source: "https://www.fsa.go.jp/"
    as_of: 2026-06-21
    confidence: likely
  - relation: subsidiary_of
    target: megabanks/mizuho-fg
    evidence: group_profile
    source: "public company profile / IR source listed in this page sources"
    as_of: 2026-06-21
    confidence: likely
---

# Mizuho Securities

## TL;DR

Mizuho Securities is the securities arm of [[megabanks/mizuho-fg|Mizuho Financial Group]]. It is a registered Financial Instruments Business Operator; FSA's financial instruments business operator list identifies みずほ証券株式会社 as Kanto Local Finance Bureau (FIBO) No. 94, with Type I / Type II / investment advisory & agency / investment management registrations and JSDA membership.

Use this page for Mizuho's securities / investment-banking layer, not for bank-deposit or trust-bank analysis.

## Positioning

| Lens | Reading |
|---|---|
| Group role | Securities subsidiary inside [[megabanks/mizuho-fg|Mizuho FG]]. |
| License lane | FIEA / Financial Instruments Business Operator; routed through [[financial-licenses/INDEX|JapanFG legal / financial licenses]]. |
| Business lane | Brokerage, underwriting, investment banking, markets, structured finance, and institutional / corporate securities services. |
| Competitor set | [[securities-firms/nomura-hd]], [[securities-firms/daiwa-sg]], [[securities-firms/smbc-nikko]], [[securities-firms/mufg-mums]]. |

## JapanFG Relevance

Mizuho Securities is important because Japan's megabank securities arms sit at the interface of:

- bank client relationships;
- corporate finance and bond / equity underwriting;
- retail and workplace asset-building distribution;
- JGB / rates / structured product markets;
- group-level conflict-management and firewall rules.

For retail household investment flow, connect to [[securities/nisa-2024-flow]]. For underwriting and league-table interpretation, connect to [[finance/japan-ib-league-table]].

## Boundary Cases

- Mizuho Securities is not the same legal entity as Mizuho Bank.
- Securities solicitation and underwriting are FIEA / JSDA issues; deposit-taking remains a banking-law issue.
- Group banking relationships can help origination, but also create conflict-management obligations.

## Related

- [[securities-firms/INDEX|securities-firms INDEX]]
- [[securities/INDEX|securities INDEX]]
- [[megabanks/mizuho-fg]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/smbc-nikko]]
- [[securities-firms/mufg-mums]]
- [[financial-regulators/jsda]]
- [[finance/japan-ib-league-table]]
- [[INDEX|FinWiki index]]

## Sources

- Mizuho Securities: Corporate Overview.
- FSA: Financial Instruments Business Operators registration list.
- FSA: major-bank supervision guideline for group / bank-securities boundary context.
