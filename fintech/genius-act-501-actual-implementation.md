---
title: GENIUS Act Lawful-Order Capability · Statute and 2026 Rulemaking
aliases:
  - genius-501-implementation
  - genius-501-actual-2025
  - ofac-stablecoin-denylist
  - stablecoin-freeze-mandate-us
  - genius-501-ofac-coordination
domain: fintech
created: 2026-05-25
last_updated: 2026-07-30
last_tended: 2026-07-30
review_by: 2026-10-30
confidence: confirmed
tags: [fintech, regulatory, usa, genius-act, ofac, stablecoin, sanctions, compliance]
status: active
sources:
  - "https://www.govinfo.gov/app/details/PLAW-119publ27"
  - "https://www.govinfo.gov/content/pkg/PLAW-119publ27/pdf/PLAW-119publ27.pdf"
  - "https://www.occ.gov/news-issuances/bulletins/2026/bulletin-2026-3.html"
  - "https://home.treasury.gov/news/press-releases/sb0435"
  - "https://ofac.treasury.gov/specially-designated-nationals-and-blocked-persons-list-sdn-human-readable-lists"
  - "https://ofac.treasury.gov/recent-actions"
---

# GENIUS Act Lawful-Order Capability · Statute and 2026 Rulemaking

## TL;DR

The GENIUS Act became Public Law 119-27 on July 18, 2025, but the enacted law does **not** contain a section 501. The relevant issuer obligations are in **section 4(a)(5)–(6)**: a permitted payment stablecoin issuer is treated as a financial institution for Bank Secrecy Act and sanctions purposes, must maintain controls to block, freeze, and reject impermissible transactions, and may issue only if it has the technological capability to comply with lawful orders. The Act becomes effective on the earlier of 18 months after enactment or 120 days after final implementing regulations. As of July 30, 2026, the OCC and Treasury materials cited here describe **proposed**, not final, implementation rules. ^[https://www.govinfo.gov/app/details/PLAW-119publ27] ^[https://www.occ.gov/news-issuances/bulletins/2026/bulletin-2026-3.html] ^[https://home.treasury.gov/news/press-releases/sb0435]

This page retains its historical filename so existing links do not break. It supersedes the earlier claim that a separate “§501 denylist mandate” had already created a 24-hour freeze clock, a GENIUS-only OFAC feed, monthly FinCEN freeze reports, or an IRS disposition workflow. None of those mechanisms appears in the enacted text or the official rulemaking notices reviewed for this update.

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/regulatory-reset-2025-usa-crypto-policy|US 2025 regulatory reset]], [[fintech/treasury-stablecoin-policy-2025|Treasury stablecoin policy]], and [[fintech/chain-level-ofac-freeze-precedent|chain-level OFAC freeze precedent]]. For cross-jurisdiction context, see [[fintech/global-stablecoin-regulatory-five-pole-matrix|five-pole matrix]] and [[fintech/mica-overview|MiCA overview]].

## What the enacted law requires

Public Law 119-27 section 4(a) establishes the relevant requirements. The following is a bounded paraphrase of the enacted text, not a regulator's technical implementation manual:

1. **BSA and sanctions status.** A permitted payment stablecoin issuer is treated as a financial institution and is subject to applicable anti-money-laundering, customer-identification, due-diligence, and economic-sanctions laws.
2. **Transaction controls.** Section 4(a)(5)(A)(iv) requires technical capabilities, policies, and procedures to block, freeze, and reject specific or impermissible transactions that violate federal or state law.
3. **Sanctions program.** Section 4(a)(5)(A)(vi) requires an effective economic-sanctions compliance program, including verification of sanctions lists.
4. **Lawful-order capability.** Section 4(a)(6)(B) says an issuer may issue payment stablecoins only if it has the technological capability to comply, and will comply, with any lawful order.
5. **Treasury coordination.** Section 4(a)(6)(A) directs Treasury, to the best of its ability, to coordinate with an issuer before certain blocking actions, while expressly stating that advance notice is not required.
6. **Rulemaking.** Section 4(a)(5)(B) requires Treasury rules tailored to issuer size and complexity. Section 13 sets the broader regulatory rulemaking process.

The law defines a lawful order as a final, valid court or agency order that identifies covered payment stablecoins or accounts with particularity and is reviewable in court. Depending on the order, it may direct seizure, freezing, burning, or prevention of transfer. ^[https://www.govinfo.gov/content/pkg/PLAW-119publ27/pdf/PLAW-119publ27.pdf]

## Effective date and current rulemaking status

The Act's effective date is the earlier of:

- January 18, 2027, which is 18 months after enactment; or
- 120 days after the primary federal payment stablecoin regulators issue final implementing regulations.

The second date can only be calculated after qualifying final regulations are issued. The OCC's 2026 bulletin describes its rule as a **notice of proposed rulemaking** and repeats this statutory trigger. Treasury's April 8, 2026 announcement likewise describes coordinated FinCEN and OFAC proposals for AML and sanctions implementation. These sources do not support describing the regime as fully operational in July 2025. ^[https://www.occ.gov/news-issuances/bulletins/2026/bulletin-2026-3.html] ^[https://home.treasury.gov/news/press-releases/sb0435]

## Public inputs and instruction channels

The table distinguishes public compliance inputs that can be verified today from implementation mechanisms that were asserted in the prior version. It is sourced to the enacted Act, OFAC's official list pages, and the 2026 Treasury proposal announcement. ^[https://www.govinfo.gov/app/details/PLAW-119publ27] ^[https://ofac.treasury.gov/specially-designated-nationals-and-blocked-persons-list-sdn-human-readable-lists] ^[https://home.treasury.gov/news/press-releases/sb0435]

| Input or channel | Confirmed public status as of 2026-07-30 | Evidence boundary |
|---|---|---|
| OFAC SDN List | Operational public sanctions list; some records include digital-currency addresses | The list is not a GENIUS-specific feed |
| OFAC Recent Actions | Operational public notice stream for sanctions actions | Publication timing does not itself create a universal issuer response deadline |
| Lawful court or agency order | Recognized in the Act | The order must meet the Act's validity, particularity, and reviewability criteria |
| FinCEN / OFAC implementing rules | Proposed in April 2026 | Proposed text must not be reported as a final rule |
| “GENIUS §501 JSON denylist” | No such official public channel identified in the reviewed sources | Earlier claim removed |

OFAC's normal sanctions authorities continue to apply independently of the GENIUS Act. The Act does not replace the SDN List with a new stablecoin-only list.

## Control map for an issuer

The law specifies outcomes and governance obligations, not a required blockchain design or staffing budget. The table maps each confirmed obligation to evidence an issuer could present; the implementation examples are analytical and do not claim regulator approval. ^[https://www.govinfo.gov/content/pkg/PLAW-119publ27/pdf/PLAW-119publ27.pdf]

| Confirmed requirement | Possible control evidence | What the statute does not prescribe |
|---|---|---|
| Block, freeze, and reject impermissible transactions | Sanctions-screening policy, access controls, test logs, incident records | A particular smart-contract pattern |
| Comply with lawful orders | Legal-validation workflow, authorized execution path, reconciliation record | A universal 24-hour clock |
| Maintain an effective sanctions program | List-ingestion records, risk assessment, escalation and review procedures | A GENIUS-only sanctions feed |
| Monitor and report suspicious transactions | BSA/AML monitoring and SAR controls under applicable rules | A monthly report of every freeze or burn |
| Maintain customer-identification controls | CIP procedures and records appropriate to account holders and high-value transactions | A single nationwide wallet-KYC architecture |

The correct design question is therefore whether an issuer can demonstrate reliable, governed compliance across every network on which it issues. Token-level blocklists, upgradeable contracts, permissioned networks, or other architectures may be used, but the cited public law does not endorse Circle Arc, Stripe Tempo, or any other named network as the required solution.

## Claims not supported by the current official record

The following claims from the prior version are intentionally withdrawn:

- a statutory section numbered “501”;
- a GENIUS-specific signed JSON denylist launched in 2025-Q4;
- a universal 24-hour freeze requirement;
- mandatory monthly FinCEN reports listing every freeze, burn, seizure, and refused issuance;
- a statutory civil-liability safe harbor with the previously described conditions;
- automatic treatment of frozen or seized tokens as a 1099-DA constructive disposition;
- a confirmed inter-agency working group operational since Q3 2025;
- named issuer staffing levels, annual compliance costs, and audit-fee ranges;
- confirmed post-GENIUS implementations by Circle Arc, Stripe Tempo, Paxos USDG, or RLUSD;
- two specific early constitutional cases described without docket citations.

Removing these statements does not imply that later final rules, issuer practices, court orders, or litigation cannot address the topics. It means the official sources reviewed here do not establish them as current facts.

## Product and risk implications

Three bounded implications follow from the statute:

1. **Multi-chain issuance increases control surface.** An issuer must be able to execute lawful controls wherever it issues; operational evidence has to cover each deployment.
2. **Governance matters as much as code.** Technical authority without validated order intake, segregation of duties, logging, and review would not demonstrate a complete compliance program.
3. **Proposals can change.** Architecture decisions made before final rules should preserve flexibility instead of assuming that proposed requirements or timelines are final.

These are analytical implications of the statutory obligations, not claims about an approved technical standard.

## Comparison boundary

The earlier version called the US provisions the “closest equivalent to MiCA Article 23.” That comparison was too specific and conflated different provisions. MiCA regulates asset-referenced and e-money tokens through its own authorization, reserve, redemption, governance, and supervisory framework. A reliable comparison should use the consolidated EU regulation and implementing standards requirement by requirement, rather than equating one MiCA article to the GENIUS Act's section 4. See [[fintech/mica-overview|MiCA overview]] and [[fintech/global-stablecoin-regulatory-five-pole-matrix|five-pole matrix]].

## Related

- [[fintech/INDEX|fintech index]]
- [[fintech/regulatory-reset-2025-usa-crypto-policy|US 2025 regulatory reset]]
- [[fintech/treasury-stablecoin-policy-2025|Treasury stablecoin policy framework]]
- [[fintech/occ-bank-charter-crypto-2025|OCC national bank charter for crypto]]
- [[fintech/chain-level-ofac-freeze-precedent|chain-level OFAC freeze precedent]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|five-pole matrix]]
- [[fintech/mica-overview|MiCA overview]]
- [[fintech/mica-cross-border-implications|MiCA cross-border]]
- [[exchanges/us-crypto-licensing-multi-layer-system|US crypto licensing multi-layer]]

## Sources

- Public Law 119-27, enacted text and legislative metadata: https://www.govinfo.gov/app/details/PLAW-119publ27
- Public Law 119-27 PDF: https://www.govinfo.gov/content/pkg/PLAW-119publ27/pdf/PLAW-119publ27.pdf
- OCC Bulletin 2026-3, proposed GENIUS Act rule: https://www.occ.gov/news-issuances/bulletins/2026/bulletin-2026-3.html
- Treasury announcement of proposed FinCEN and OFAC rules, 2026-04-08: https://home.treasury.gov/news/press-releases/sb0435
- OFAC SDN List: https://ofac.treasury.gov/specially-designated-nationals-and-blocked-persons-list-sdn-human-readable-lists
- OFAC Recent Actions: https://ofac.treasury.gov/recent-actions
