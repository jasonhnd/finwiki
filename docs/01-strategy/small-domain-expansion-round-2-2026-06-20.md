# Small-Domain Expansion Round 2 Re-scope - 2026-06-20

> Issue #25 planning output. Decision: no further small-domain expansion is warranted right now.

## Decision

Do not open a new content-execution issue for additional small-domain pages at this time.

Reason: the #16 shortlist has already been executed where it had a clear public-source gap (#9 created `financial-licenses/japan-trust-business-license-stack`). The remaining deferred ideas are either already covered by existing routes, too tangential to the finance corpus, or not triggered by a concrete public-source event.

## Review Basis

- Source docs: [domains.md](../02-product/domains.md) and [next-development-plan.md](next-development-plan.md).
- Current domain counts from root `INDEX.md` Domain Map:
  - `consumer-finance`: 5
  - `financial-conglomerates`: 7
  - `financial-licenses`: 8
  - `retail`: 10
  - `security`: 9
  - `trading-company-finance`: 7
- Prior #16 candidate domains reviewed again: `security`, `retail`, `consumer-finance`, `financial-licenses`, `trading-company-finance`, `financial-conglomerates`.

## Domain Decisions

| Domain | Current state | Decision | Future trigger |
|---|---|---|---|
| `financial-licenses` | 8 entries after #9; horizontal stack now covers bank, payment, securities, insurance, foreign-bank branch / agency, foreign-adjacent licences, and trust-business licence stack. | No new page now. Deferred lending / installment-credit stack remains partially covered by `card-issuers/installment-sales-act-2020-amendment`, `consumer-finance/INDEX`, and the credit lane in `financial-licenses/INDEX`. | Open a new issue only if a real route needs one page to unify Money Lending Business Act + Installment Sales Act + BNPL / credit-purchase boundaries and existing pages prove insufficient. |
| `security` | 9 technique pages; all four previously planned pages were created. | No expansion now. Non-EVM bytecode forensics and timelock-governance remain watchlist ideas, not committed routes. | Add only after a concrete public incident, regulator / exchange warning, or tool-standard source makes the technique finance-relevant. |
| `retail` | 10 entries; INDEX Expansion Backlog is fully Done. | No expansion now. Retail-finance coverage already has AEON, Seven & i, Lawson/KDDI, FamilyMart/Itochu, wedge matrix, retail-media loop, and economic-sphere comparison. | Add only when a new retail-finance structure changes bank / payment / point / card distribution, not for ordinary retailer profiles. |
| `consumer-finance` | 5 entries covering Acom, Acom operating profile, Aiful, SMBC Consumer Finance / Promise, and Shinsei Financial / Lake. | No expansion now. Major public-source operators and parent-group routes are covered for current FinWiki needs. | Add only if a registered lender materially clarifies a bank, card, guarantee, or consumer-credit exposure relationship not served by existing pages. |
| `trading-company-finance` | 7 entries, one finance / treasury arm per major sogo-shosha parent. | Complete for now. | Add only if a new group-treasury vehicle appears in public filings or a listed parent reorganizes its finance arm. |
| `financial-conglomerates` | 7 entries, one parent anchor for the same sogo-shosha set. | Complete for now. | Add only if the sogo-shosha parent set changes or a public restructuring creates a new parent anchor needed by finance-arm pages. |

## Deferred Ideas Kept On Watchlist

| Idea | Status | Why not now |
|---|---|---|
| `financial-licenses/lending-installment-credit-license-stack` | Watchlist | A useful possible horizontal page, but currently served by the Installment Sales Act page, consumer-finance domain, and financial-licenses credit lane. Needs a concrete execution use case. |
| `security/timelock-governance-pattern` | Watchlist | Relevant to crypto governance, but no current Japan-finance route gap or incident-triggered need. |
| `security/non-evm-bytecode-forensics` | Watchlist | Useful for Solana / Move ecosystems, but too broad and crypto-forensics-specific without a finance-facing trigger. |

## Closeout Packet

- Close #25 as a planning decision once this document is published.
- Do not unlock a new content issue from #25.
- Keep #26 separate: it should use [entity-deepening-shortlist-2026-06-20.md](entity-deepening-shortlist-2026-06-20.md), not this no-expansion decision.

