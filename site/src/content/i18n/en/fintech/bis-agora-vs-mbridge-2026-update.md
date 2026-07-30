---
source: fintech/bis-agora-vs-mbridge-2026-update
source_hash: 85e31d1a107cd212
lang: en
model: source-language-sync
status: machine
fidelity: ok
title: "BIS Project Agorá vs mBridge · 2026 Evidence-Bounded Update"
translated_at: 2026-07-29T17:52:19.228Z
---

# BIS Project Agorá vs mBridge · 2026 Evidence-Bounded Update

## TL;DR

The BIS handed mBridge to its partners in October 2024 after the platform reached minimum viable product (MVP) stage. The BIS page says the MVP is enabled for real-value transactions subject to each jurisdiction's preparedness; it does not document commercial operation, an additional-member negotiation, or Brazil DREX integration. Project Agorá reported a prototype on 27 May 2026, with eight participating central banks and more than 40 regulated private institutions, and plans further testing including selected real-value transactions. The BIS is the project convenor, not an additional central bank or a member central bank of either arrangement. Agorá is not a finished product. ^[https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; https://www.bis.org/about/bisih/topics/fmis/agora.htm]

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it against [[fintech/bis-project-agora-overview|BIS Project Agora 总览]] for the Agora technical baseline, [[fintech/bis-project-agora-vs-mbridge|Agora vs mBridge 初版对照]] for the prior framing, [[fintech/mbridge-bis-multi-cbdc-overview|mBridge 总览]] for the mBridge fundamentals, [[fintech/mbridge-bis-multi-cbdc-vs-agora|mBridge vs Agora · 2025 BIS 切换]] for the 2025 inflection event, [[fintech/mbridge-non-usd-settlement-ring-scale|mBridge 非美元结算环规模]] for volume context, [[fintech/mbridge-six-central-banks-roster|mBridge roster]] for the membership map, [[fintech/bis-project-ensemble-overview|BIS Project Ensemble]] / [[fintech/bis-project-ensemble-vs-mbridge-dual-track|Ensemble vs mBridge dual-track]] for the HK leg, and [[fintech/bis-project-guardian-overview|BIS Project Guardian]] / [[fintech/bis-project-guardian-vs-agora-asia-three-poles|Guardian vs Agora Asia 三极]] for the SG leg.

## What's new in 2026 vs the 2025 baseline

The source-backed changes from the 2024 baseline are:

1. **mBridge reached MVP and the BIS handed it over in October 2024.** The four founding authorities had validator nodes; SAMA joined in 2024.
2. **Observer status is not membership.** BCB, Bank Indonesia, RBI and SARB appeared in the BIS observer list as of the handover, but the BIS did not present them as members.
3. **Agorá delivered a prototype in May 2026.** BIS reports atomic multi-currency settlement using tokenised central-bank reserves and commercial-bank deposits.
4. **Agorá remains experimental.** BIS explicitly says it is not a finished product and that production would require further resilience, governance and operating-rule work.
5. **The public and private rosters are distinct.** The BIS describes eight participating central banks and more than 40 regulated private institutions; the BIS itself should not be counted as another central bank. ^[https://www.bis.org/about/bisih/topics/fmis/agora.htm]

## mBridge post-BIS — operational continuity

The table records only the status evidenced by BIS at the October 2024 handover and avoids inferring subsequent production operation. ^[https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; https://www.bis.org/speeches/sp241031.htm]

| Function | Documented at handover | Evidence boundary as of 2026-07-30 |
|---|---|---|
| Platform stage | MVP reached in mid-2024 | BIS does not describe a production launch |
| Participants | Four founding authorities plus SAMA, which joined in 2024 | No additional member is identified on the cited BIS page |
| Validator model | Each of the four founding authorities deployed a validator node | Later node topology is not specified by the cited sources |
| Transactions | MVP enabled for real-value transactions, subject to jurisdictional preparedness | No comparable post-handover volume series is published by BIS |
| Governance | Bespoke governance and legal framework, including a rulebook | BIS handed the project to partners in October 2024; later governance details are not stated |
| Observers | More than 30 institutions listed by BIS | Observer status does not establish membership or an onboarding timetable |

The handover permits the partners to determine next steps, but public BIS material does not support claims that it was intended to enable sanctioned-country recruitment or that specific countries are being negotiated.

## The "eighth member" question

The following institutions were observers in the BIS list published at handover. The list is evidence of observation only, not of candidate ranking, negotiation, accession, or a forecast. ^[https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm]

| Institution | BIS-listed status | What can safely be inferred |
|---|---|---|
| Central Bank of Brazil | Observer | It reviewed or followed the project; no membership or DREX integration follows from that status |
| Bank Indonesia | Observer | It reviewed or followed the project; no accession timetable is stated |
| Reserve Bank of India | Observer | It reviewed or followed the project; no accession timetable is stated |
| South African Reserve Bank | Observer | It reviewed or followed the project; no accession timetable is stated |
| Other listed observers | Observer | The live roster must be checked before describing any institution as a member |

For the roster baseline see [[fintech/mbridge-six-central-banks-roster|mBridge roster]]. When using that historical page, do not count the BIS as a central bank or infer membership from observer status.

## Agorá prototype scope

The BIS describes Agorá as a public-private collaboration involving eight central banks and more than 40 regulated private institutions. Participant counts establish the scale of the experiment, not production status or a mandate extending beyond the published wholesale-payment prototype. ^[https://www.bis.org/about/bisih/topics/fmis/agora.htm]

The prototype combines **tokenised central-bank reserves** and **tokenised commercial-bank deposits** on a shared programmable platform to test atomic, multi-currency settlement of wholesale cross-border payments. The BIS explicitly says the project delivered a prototype rather than a finished product; selected real-value testing is a next step, not a completed production launch. See [[fintech/institutional-stablecoin-deposit-token-thesis|deposit-token thesis]] for the broader analytical context. ^[https://www.bis.org/about/bisih/topics/fmis/agora.htm]

### What the prototype establishes

The 2026 result establishes that the tested reserve and deposit representations could be combined in a prototype and used for atomic multi-currency settlement. It does not establish tokenised fund shares, money-market funds, equity exposure, commercial operation, or replacement of existing wholesale-market infrastructure.

The prototype also does not establish a hierarchy between bank deposits, central-bank money and private stablecoins. Those instruments have different issuers, legal claims and use cases; any comparison belongs in a separately sourced market analysis such as [[fintech/onchain-finance-vs-crypto-bifurcation|on-chain finance vs crypto]].

## Legal and compliance boundary

The Agorá work treats settlement finality, AML/CFT and data privacy as legal and regulatory questions under examination. The prototype does not itself settle how every jurisdiction or participant will implement those requirements. Applicable law and future operating rules must be checked separately. ^[https://www.bis.org/about/bisih/topics/fmis/agora.htm]

## CBDC vs tokenized-deposit architecture trade-off

The table separates documented design features from analytical implications. mBridge's BIS page and Agorá's 2026 report are the sources for the project descriptions; the two projects have not published a common production benchmark. ^[https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; https://www.bis.org/about/bisih/topics/fmis/agora.htm]

| Architecture | mBridge | Agora |
|---|---|---|
| Project object | Shared multi-CBDC platform for cross-border payments and FX | Shared programmable platform combining tokenised commercial-bank deposits with jurisdiction-specific tokenised central-bank reserves |
| Commercial-bank role | Commercial banks conducted real-value transactions on the MVP | Commercial banks issue tokenised deposits and participate in payment workflows |
| Ledger design | mBridge Ledger with validators operated by founding authorities | Unifying layer for deposits plus separate central-bank-reserve ledgers |
| Settlement | Real-time peer-to-peer cross-border payments and FX; MVP enabled for real value subject to readiness | Prototype demonstrated atomic multi-currency settlement after validation and balance locking |
| Stage | MVP handed to partners in October 2024 | Prototype reported May 2026; selected real-value testing is planned |
| Analytical implication | More direct multi-CBDC arrangement | Explicitly preserves the two-tier central/commercial-bank structure |

The mBridge design centres direct exchange of wholesale CBDCs, while still involving participating commercial banks. Whether that design changes intermediation depends on access rules and implementation; the MVP alone does not prove economy-wide disintermediation.

The Agorá prototype explicitly preserves the two-tier system by combining tokenised deposits with central-bank reserves. The published project scope does not establish a broader capital-markets stack or production deployment (compare [[fintech/institutional-stablecoin-deposit-token-thesis|institutional stablecoin and deposit-token thesis]]).

## Separate project scopes as of 2026-07-30

The table is a scope comparison, not a claim of formal coordination, exclusivity, production readiness or inevitable interoperability. Each row is bounded to the cited official project description. ^[https://www.bis.org/about/bisih/topics/fmis/agora.htm; https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/fintech/project-ensemble/; https://www.mas.gov.sg/schemes-and-initiatives/project-guardian]

| Initiative | Public-sector anchors | Documented private-sector layer | Documented stage | Scope |
|---|---|---|---|---|
| **Agorá** | BIS and eight partner central banks | More than 40 regulated institutions on the published roster | Prototype; further tests including selected real-value transactions planned | Wholesale cross-border payments using tokenised deposits and reserves |
| **Ensemble / Guardian** | HKMA / MAS | Use-case-specific financial institutions named by each programme | Sandboxes, trials and industry workstreams | Tokenised assets and money in the Hong Kong and Singapore ecosystems |
| **mBridge** | Four founding authorities plus SAMA | Participating commercial banks in the MVP | MVP handed to partners; no production launch asserted here | Multi-CBDC cross-border payments and FX |

HKMA participates in mBridge and separately operates Project Ensemble. That overlap does not by itself establish a bridge, political pathway or coordination dependency between the programmes; see [[fintech/bis-project-ensemble-vs-mbridge-dual-track|Ensemble vs mBridge dual-track]].

Project Guardian and Project Agorá address different officially described scopes. Any comparison in [[fintech/bis-project-guardian-vs-agora-asia-three-poles|Guardian vs Agorá]] should preserve that separation.

The cited sources do not document an mBridge–Agorá interoperability pilot, a required future connection, or an HKMA/MAS-led route to one. Any later interoperability claim requires a dated direct announcement from the participating projects.

## Related

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/bis-project-agora-overview|BIS Project Agora 总览]]
- [[fintech/bis-project-agora-vs-mbridge|Agora vs mBridge 对照]]
- [[fintech/bis-project-ensemble-overview|BIS Project Ensemble 总览]]
- [[fintech/bis-project-ensemble-vs-mbridge-dual-track|Ensemble vs mBridge dual-track]]
- [[fintech/bis-project-guardian-overview|BIS Project Guardian 总览]]
- [[fintech/bis-project-guardian-vs-agora-asia-three-poles|Guardian vs Agora Asia 三极]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge 总览]]
- [[fintech/mbridge-bis-multi-cbdc-vs-agora|mBridge vs Agora · 2025 BIS 切换]]
- [[fintech/mbridge-non-usd-settlement-ring-scale|mBridge 非美元结算环规模]]
- [[fintech/mbridge-six-central-banks-roster|mBridge roster]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|deposit token 论题]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|on-chain finance vs crypto 分叉]]
- [[fintech/jurisdiction-list-monetary-protectionism|jurisdiction list = 通貨保護主義]]
<!-- /wiki-links:managed -->

## Sources

- [BIS: Project mBridge reached MVP stage](https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm)
- [BIS: October 2024 handover explanation](https://www.bis.org/speeches/sp241031.htm)
- [BIS: Project Agorá 2026 results and next stage](https://www.bis.org/about/bisih/topics/fmis/agora.htm)
- [BIS: Agorá private-sector participant list](https://www.bis.org/innovation_hub/projects/agora_list_participants.pdf)
- [BIS Annual Economic Report 2026, Chapter III](https://www.bis.org/publ/arpdf/ar2026e3.htm)
- [HKMA: Project Ensemble](https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/fintech/project-ensemble/)
- [MAS: Project Guardian](https://www.mas.gov.sg/schemes-and-initiatives/project-guardian)
