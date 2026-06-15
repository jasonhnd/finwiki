---
source: financial-regulators/jsda
source_hash: 11f950cdc9e44631
lang: en
status: machine
fidelity: ok
title: "Japan Securities Dealers Association (JSDA)"
translated_at: 2026-06-15T03:48:21.909Z
---

# Japan Securities Dealers Association (JSDA)

## TL;DR

JSDA / 日本証券業協会 is the core self-regulatory organization for Japan's securities-dealer layer. It is not a securities firm and not the statutory regulator itself. Its legal position is a Financial Instruments Firms Association authorized by the Prime Minister under the Financial Instruments and Exchange Act (FIEA), and its operational role sits between FSA supervision and member-firm compliance.[^jsda-profile]

For JapanFG mapping, JSDA is the cross-cutting rule and membership layer behind pages such as [[securities-firms/smbc-nikko]], [[securities-firms/nomura-hd]], [[securities-firms/daiwa-sg]], [[securities-firms/mizuho-securities]], and [[securities-firms/rakuten-securities]]. Use it with [[financial-licenses/INDEX]] when the question is: "what self-regulatory regime applies to securities brokerage, underwriting, sales representatives, customer solicitation, off-exchange transactions, and securities complaints?"

## Institution Map

| Layer | Institution / actor | Practical meaning |
|---|---|---|
| Public regulator | Financial Services Agency (FSA) / Local Finance Bureaus | Registration, supervision, administrative action, official licensed-operator lists, supervisory guidelines |
| Statutory law | Financial Instruments and Exchange Act (FIEA) | Defines financial instruments business, registered financial institutions, sales representatives, and association framework |
| Self-regulatory body | JSDA | Sets and enforces self-regulatory rules for association members; conducts inspection, monitoring, disciplinary action, sales-representative qualification/registration work, complaint counseling, and mediation |
| Member firms | Securities firms, Type I FIBOs, and registered financial institutions conducting securities business | Examples in this wiki include [[securities-firms/smbc-nikko]], [[securities-firms/nomura-hd]], [[securities-firms/daiwa-sg]], [[securities-firms/mizuho-securities]], [[securities-firms/rakuten-securities]] |
| Customer / market layer | Investors, issuers, PTS / off-exchange flows, OTC bond market | JSDA rules and market infrastructure affect solicitation, custody, segregation, trade reporting, dispute handling, and market transparency |

JSDA's own English profile describes it as both an SRO and an industry interlocutor. Its mission is investor protection through fair and smooth securities transactions by members, plus the sound development of Japan's financial instruments business.[^jsda-profile]

## Legal Position

JSDA's legal status is not merely "industry association." JSDA states that it is a Financial Instruments Firms Association authorized by the Prime Minister pursuant to FIEA Article 67-2, Paragraph 2.[^jsda-profile] FSA's official list of authorized Financial Instruments Firms Associations identifies 日本証券業協会, gives its corporate number, address, establishment date, purpose, and business lines.[^fsa-authorized]

Key boundary:

- **FSA / Local Finance Bureau registration** determines whether an entity is registered as a financial instruments business operator or registered financial institution.
- **JSDA membership and self-regulation** determine how securities-industry conduct rules, sales-representative obligations, inspections, disciplinary actions, and dispute-handling infrastructure apply in practice.
- A firm appearing in an FSA registration list should still be checked for its exact business categories and joined associations. FSA's licensed-operator portal is the source-of-truth entry point for these lists.[^fsa-licensed]

## Self-Regulatory Functions

JSDA's major self-regulatory functions are broad:

1. **Rulemaking and rule execution** - JSDA rules cover areas including OTC stock and bond transactions, underwriting, off-exchange listed-stock transactions, foreign securities transactions, safe custody, officer and employee conduct, internal administration, advertisements, investment solicitation, customer administration, agency business, segregated custody of customer assets, customer disputes, and accounting standards.[^jsda-activities]
2. **Inspection and monitoring** - JSDA conducts on-site inspections and off-site monitoring of members' internal administration, statutory compliance, self-regulatory-rule compliance, business conditions, and segregated custody of customer assets.[^jsda-activities]
3. **Disciplinary action** - JSDA enforces self-regulatory disciplinary actions when members, officers, or employees violate law or JSDA rules.[^jsda-activities]
4. **Sales representative qualification and registration** - JSDA conducts qualification examinations and renewal training, and carries out securities sales-representative registration work entrusted by the Commissioner of the FSA.[^jsda-activities] FSA's designated-corporation materials explain the FIEA basis for delegating sales-representative registration work to an association.[^fsa-salesrep]
5. **Complaint counseling and mediation** - JSDA provides counseling for customer complaints and mediation services for securities-transaction disputes involving members and customers.[^jsda-activities]
6. **Market infrastructure and publication** - JSDA publishes OTC bond reference data, compiles off-exchange transaction data reported by members, and publishes information related to proprietary trading systems (PTSs).[^jsda-activities]

The supervisory link matters: FSA's Type I Financial Instruments Business supervisory guideline explicitly refers to JSDA self-regulatory rules when describing supervisory viewpoints for market-intermediary operations, unfair-trade prevention, customer transaction monitoring, and insider-registration processes such as J-IRISS.[^fsa-guideline]

## JapanFG Relevance

JSDA is a hub node for JapanFG because it connects securities-company business models to law, compliance, and market practice.

| JapanFG question | Why JSDA matters |
|---|---|
| Is this entity a securities firm or a bank with securities business? | JSDA has Regular Members for Type I Financial Instruments Business Operators and Special Members for registered financial institutions conducting securities business.[^jsda-members] |
| How do large broker-dealers operationalize investor protection? | JSDA rules and inspections sit behind solicitation, customer management, custody, segregation, advertisements, internal administration, and sales-representative controls. |
| Why do bank-owned securities subsidiaries behave differently from banks? | Securities subsidiaries such as [[securities-firms/smbc-nikko]], [[securities-firms/mizuho-securities]], and group peers are in the FIEA / JSDA lane, not only the banking-supervision lane. |
| What separates "licensed" from "self-regulated"? | FSA registration is the public licensing / registration layer; JSDA membership and self-regulation are conduct and market-infrastructure layers. |
| How should securities pages cite compliance regimes? | Link the firm page to [[financial-licenses/INDEX]] for license stack and to this page for JSDA self-regulatory functions. |

As of JSDA's May 7, 2026 member-list page, JSDA reported 259 Regular Members, 14 Specified Business Members, and 198 Special Members.[^jsda-members] This count is useful for market scale but should be refreshed when making a current quantitative claim.

## Boundary Cases

- **JSDA vs FSA**: JSDA is an authorized self-regulatory association, not the FSA. Administrative licensing and public enforcement remain public-regulator functions.
- **Securities firm vs registered financial institution**: A bank may be a registered financial institution and JSDA Special Member for securities business, while a securities company conducting Type I business is generally in the Regular Member lane.[^jsda-members]
- **JSDA vs exchange self-regulation**: JSDA covers dealer / member conduct and OTC / off-exchange areas. Exchange listing, trading, and exchange-market self-regulation may involve exchange or exchange-group rules as well, routed through [[financial-regulators/japan-exchange-group|Japan Exchange Group (JPX)]] and its self-regulatory body.
- **JSDA vs crypto self-regulation**: Crypto-asset exchange and crypto derivatives questions usually route first to FSA registration and the crypto self-regulatory lane, not JSDA, unless the product is legally a FIEA securities / derivatives business.
- **Member count vs active product scope**: JSDA membership does not prove that a firm currently offers a specific product. Confirm product scope in the firm disclosure and FSA registration category.
- **Registration list latency**: FSA list pages are official but may have as-of dates and update intervals. Treat a checked registration as "found in the checked list as of X" rather than timeless status.

## Related

- [[financial-licenses/INDEX]]
- [[securities-firms/smbc-nikko]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/mizuho-securities]]
- [[securities-firms/rakuten-securities]]
- [[INDEX|FinWiki index]]

## Sources

[^jsda-profile]: JSDA, "Profile", https://www.jsda.or.jp/en/about/profile/index.html
[^jsda-activities]: JSDA, "Major Activities", https://www.jsda.or.jp/en/about/major-activities/index.html
[^jsda-members]: JSDA, "Members List", https://www.jsda.or.jp/en/about/members-list/index.html
[^fsa-authorized]: FSA, "認可金融商品取引業協会一覧", https://www.fsa.go.jp/koueki/koueki10a.html
[^fsa-salesrep]: FSA, "金融商品取引法に基づく外務員の登録及び抹消" PDF, https://www.fsa.go.jp/koueki/s_houjin/05.pdf
[^fsa-licensed]: FSA, "免許・許可・登録等を受けている事業者一覧", https://www.fsa.go.jp/menkyo/menkyo.html
[^fsa-guideline]: FSA, "金融商品取引業者等向けの総合的な監督指針 IV", https://www.fsa.go.jp/common/law/guide/kinyushohin/04a.html

---

> [!info] Verification status
> confidence: **likely**. Core legal position and functions are backed by JSDA official pages and FSA official pages as checked on 2026-05-19. Current firm-level membership / registration details should be refreshed from JSDA member lists and FSA registration files when used in a transaction-specific or enforcement-specific analysis.
