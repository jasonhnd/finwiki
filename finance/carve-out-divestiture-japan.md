---
title: "Carve-out and divestiture process in Japan"
aliases:
  - "carve-out-divestiture-japan"
  - "Japan carve-out process"
  - "Japan divestiture"
  - "Japan spin-off"
  - "事業承継 カーブアウト"
domain: "finance"
created: 2026-05-25
last_updated: 2026-07-29
last_tended: 2026-07-29
review_by: 2027-01-29
confidence: likely
tags: [finance, M&A, carve-out, divestiture, spin-off, TSA, asset-deal, share-deal, tax]
status: active
sources:
  - "https://www.meti.go.jp/english/press/2023/0419_002.html"
  - "https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/fair-ma-rule/ma-guideline-publications.html"
  - "https://www.fsa.go.jp/en/laws_regulations/faq_on_fiea.pdf"
  - "https://www.nta.go.jp/english/index.htm"
  - "https://www.jftc.go.jp/en/policy_enforcement/mergers/index.html"
  - "https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/saihenzeisei/spin-off.html"
  - "https://www.meti.go.jp/press/2023/02/20240214006/20240214006.html"
  - "https://www.japaneselawtranslation.go.jp/en/laws/view/4481/en"
  - "https://www.sony.com/en/SonyInfo/IR/news/20251001_E.pdf"
---

# Carve-out and divestiture process in Japan

## Overview

A Japanese carve-out separates a business unit from a parent and routes it to a new owner (trade sale), a new listed entity (IPO spin), or distributed shareholders (stock-distribution / demerger). The mechanical choice between **asset deal vs share deal vs company-split (会社分割) vs stock-distribution** drives tax outcome, consent triggers, [[finance/jftc-merger-control-process|JFTC merger-control]] burden, and [[finance/japan-tender-offer-process|TOB route]] interaction.

This page sits in [[finance/INDEX|finance]] alongside [[finance/cross-border-m-a-japan|cross-border M&A]] and [[finance/japan-leveraged-buyout-economics|LBO economics]]. Read it against [[finance/japan-mbo-and-squeeze-out-process|MBO / squeeze-out]], [[finance/japan-acquisition-finance|acquisition finance]], [[finance/japan-tender-offer-process|TOB process]], and the [[INDEX|FinWiki index]].

## Structure decision matrix

Source: the table is a route-level synthesis of the [Companies Act](https://www.japaneselawtranslation.go.jp/en/laws/view/4481/en), METI's [spin-off framework and current guide](https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/saihenzeisei/spin-off.html), and the transaction-specific tax analysis that must be confirmed against NTA materials.

| Structure | Mechanism | Stamp / tax | Consent triggers | Use case |
|---|---|---|---|---|
| **Asset deal** (事業譲渡) | Sell identified assets, liabilities, and contracts | Seller and buyer consequences depend on each transferred asset, liability, and applicable tax | Contract transfer and employee consent where the contract or governing law requires it | Transfer a selected business perimeter rather than the target entity |
| **Share deal** (株式譲渡) | Sell shares of a subsidiary | Seller may recognise gain or loss; buyer's tax basis in the acquired shares generally reflects acquisition cost, while the target's asset basis does not automatically step up | Change-of-control consent only where a contract or sector rule requires it | Transfer the entity with its existing assets and liabilities |
| **Company split** (会社分割) — absorption-type / incorporation-type | Statutory split under Companies Act Articles 757-816 | Tax deferral is available only when the applicable tax-qualification conditions are met | Companies Act creditor-protection procedure and employee-succession rules apply according to the structure | Reorganize a business perimeter through statutory succession |
| **Stock-distribution / spin-off** (株式分配) | Parent distributes subsidiary shares to its shareholders | Tax treatment depends on satisfying the statutory stock-distribution qualification conditions | Required corporate approvals depend on the distribution, articles, and transaction structure | Separate a subsidiary while distributing its shares to the parent's shareholders |
| **IPO carve-out** | Subsidiary lists while the parent retains a stake | Accounting and tax effects depend on the shares sold, retained interest, and applicable standards | TSE listing review and offering documentation where applicable | Raise public capital or create a listed subsidiary while retaining some ownership |

## Asset deal vs share deal

| Dimension | Asset deal | Share deal |
|---|---|---|
| Liability transfer | Only liabilities included under the transfer documents and applicable succession rules | Liabilities remain in the acquired entity |
| Contract assignment | Contract-by-contract transfer; consent where required | Contract remains with the entity; change-of-control consent where required |
| Tax — seller | Gain or loss is determined for the transferred business and assets | Gain or loss is determined on the transferred shares |
| Tax — buyer | Acquired-asset tax basis and depreciation depend on allocation and applicable tax rules | Acquired-share basis generally reflects acquisition cost; target assets do not automatically receive a tax step-up |
| Real-estate transfer tax | May arise when real estate is transferred | No direct real-estate transfer solely from the share transfer; other taxes and costs remain transaction-specific |
| Execution | Requires perimeter, transfer, consent, and succession analysis | Requires share-transfer, regulatory, and change-of-control analysis |
| Diligence scope | Focuses on the selected perimeter but must test excluded and shared liabilities | Covers the acquired entity, including retained liabilities |
| Employee transfer | Depends on the transfer route and labour-law requirements | Employment remains with the same legal entity, subject to transaction-specific measures |

## Stock-distribution vs trade sale

Source: the comparison table uses METI's [current spin-off guide](https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/saihenzeisei/spin-off.html); timing and tax outcomes are structure-dependent diligence fields rather than guaranteed results.

| Path | Stock-distribution | Trade sale |
|---|---|---|
| Buyer | Existing parent shareholders | Strategic / PE acquirer |
| Cash to parent | None (pure distribution) | Full purchase price |
| Tax to parent | Determine under the statutory qualification conditions and transaction facts; qualifying treatment may defer or otherwise change recognition | Determine under the applicable tax law and transaction structure; the trade-sale label alone does not establish a current taxable gain |
| Timing | Depends on corporate approvals, listing preparation, tax qualification, and operational separation | Depends on sale process, consents, financing, and applicable [[finance/jftc-merger-control-process|JFTC review]] |
| Control outcome | Sub becomes standalone listed entity | Sub goes into buyer's group |
| Strategic logic | Conglomerate discount unwind | Capital recycling, focus, debt paydown |

## TSA — transition services agreement

Some carve-outs use a transition services agreement (TSA) when the separated business cannot replace shared services by closing. Whether a TSA is needed, and its duration and pricing, must be established from the transaction documents:

Source: the table is an operational checklist informed by METI's [2026 entrepreneur-led carve-out guidebooks](https://www.meti.go.jp/press/2026/04/20260417003/20260417003.html); actual TSA scope, duration, and pricing are deal-specific and must be read from the signed transaction documents.

| Service | Typical TSA scope |
|---|---|
| IT / ERP | SAP / Oracle instance migration; data segregation, custom-code carve-out |
| HR / payroll | Continued payroll processing until sub builds capacity |
| Treasury / cash management | Inter-company cash pool unwind; new banking arrangement at sub |
| Procurement | Shared supplier contracts; bridge purchasing until sub renegotiates |
| Legal / compliance | Shared regulatory licenses (esp. financial-services under [[financial-licenses/securities-license-stack|securities-license stack]]) |
| Real estate | Continued shared office occupancy with cost allocation |

TSA pricing may use cost reimbursement, cost-plus, fixed-fee, usage-based, or other negotiated terms. Step-ups and reverse-TSAs are transaction-specific and should not be assumed without the signed agreement.

## Tax considerations

Japanese tax-qualified ("適格") reorganization rules contain different conditions for group reorganizations, joint-business reorganizations, and qualifying stock distributions. Ownership continuity, consideration, business continuity, employee continuity, and other tests must be checked for the specific statutory route; no single percentage or checklist on this page establishes qualification.

A non-qualified structure may produce current taxation or other transfer costs depending on the assets, parties, and steps. Confirm the enacted Corporation Tax Act, implementing rules, and current NTA guidance for the execution date; do not assume that a private ruling exists or that one factor determines the result. See also [[finance/multi-jurisdiction-identity-tax-leverage|tax-jurisdiction comparison]] for cross-border carve-outs.

## Carve-out workstreams

1. **Perimeter definition** — which assets, contracts, employees, IP, real estate, regulatory licenses transfer
2. **Standalone carve-out financials** — restate sub financials excluding parent allocations
3. **Day-1 readiness** — TSA scope, IT cut-over plan, treasury setup, bank account opening
4. **Regulatory** — [[finance/jftc-merger-control-process|JFTC]] notification if turnover crosses thresholds; sector regulators (banking, telecom); foreign FDI if cross-border
5. **Tax structuring** — assess 適格 status under applicable law, public guidance, and the transaction facts; obtain transaction-specific tax advice rather than assuming an NTA ruling
6. **Employee transfer** — Labor Contract Succession Act compliance for company-split; individual consent for asset deal
7. **Customer / supplier consent** — change-of-control walk-throughs

## Verified public example

Source: METI's [Sony reorganisation-plan certification](https://www.meti.go.jp/press/2023/02/20240214006/20240214006.html) records the planned structure, while Sony's [October 1, 2025 completion disclosure](https://www.sony.com/en/SonyInfo/IR/news/20251001_E.pdf) records execution and the retained interest. The table does not generalise that treatment to other transactions.

| Year | Parent | Carved-out business | Path | Notes |
|---|---|---|---|---|
| 2024 certification; completed October 1, 2025 | Sony Group | Sony Financial Group | Partial stock-distribution spin-off | Sony disclosed completion and a retained 16.40% interest in Sony Financial Group. |

## Research checklist

1. Pull TDnet / EDINET filings for the announcement, structure (asset / share / split / spin-off), and tax-qualified election.
2. Map [[finance/jftc-merger-control-process|JFTC]] notification timing vs deal-close conditions.
3. Identify TSA scope and termination triggers in the press release.
4. Check whether [[finance/japan-tender-offer-process|TOB]] is required (if listed-sub shares change hands above threshold).
5. Cross-reference with [[finance/japan-listed-financial-groups-investable-universe|listed FG universe]] for parent / sub valuation impact.

## Related

- [[finance/INDEX]]
- [[finance/cross-border-m-a-japan]]
- [[finance/japan-tender-offer-process]]
- [[finance/japan-mbo-and-squeeze-out-process]]
- [[finance/jftc-merger-control-process]]
- [[finance/japan-takeover-defense-poison-pill]]
- [[finance/japan-acquisition-finance]]
- [[finance/japan-leveraged-buyout-economics]]
- [[finance/multi-jurisdiction-identity-tax-leverage]]
- [[financial-licenses/securities-license-stack]]
- [[INDEX|FinWiki index]]

## Sources

- METI: M&A guidelines and Fair M&A Guidelines publication page.
- METI: 2023 Carve-out / Group Management Guidelines press release.
- NTA: Corporation Tax Act 適格組織再編 (qualified reorganization) rules.
- JFTC: notification thresholds for asset / company-split transactions.
- FSA: FIEA tender-offer interaction when listed-sub shares are transferred.
