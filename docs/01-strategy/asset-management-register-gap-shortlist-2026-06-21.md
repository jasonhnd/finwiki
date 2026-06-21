# Asset-Management Register Gap Shortlist

> Issue #43 planning artifact. This is design / shortlist only. It creates no corpus entry and does not change public routes.

## Goal

Scope the first asset-management gap from the Japanese-finance coverage gap-map into a downstream content packet. The current `asset-managers/` domain covers the domestic mega-bank / securities / insurance affiliated managers, while `real-estate-finance/` covers several J-REIT vehicles and sponsor mechanics. The remaining high-signal gap is selective coverage of foreign-affiliated managers, REIT asset-management companies, and bank / sponsor-adjacent managers that already appear in public source routes but do not have dedicated pages.

## Public Source Basis

Use these public sources first:

- IMAJ Full-Member of Investment Management Members: https://www.imaj.or.jp/en/about/members/investment_management/ (shown by IMAJ as of 2026-06-01).
- FSA licensed / registered operators page: https://www.fsa.go.jp/menkyo/menkyo.html, especially the Financial Instruments Business Operators list shown as of 2026-05-31.
- FSA financial business operator search: https://search.fsa.go.jp/.

These sources are sufficient for scoping, but each downstream corpus page must still verify its own company profile, registration status, and source markers at implementation time.

## Shortlist

| Candidate page | Why it matters | Candidate public source | Existing partial coverage |
|---|---|---|---|
| `asset-managers/blackrock-japan.md` | Largest global asset-management brand with local Japan ETF / mandate relevance; already appears in the landscape matrix as a foreign AM gap. | IMAJ member directory; FSA FIEA operator list / search. | `securities/japan-asset-manager-landscape-matrix.md` mentions BlackRock Japan but no dedicated page exists. |
| `asset-managers/jpmorgan-asset-management-japan.md` | Major foreign-affiliated AM used in Japanese bank / broker fund distribution and institutional mandates. | IMAJ member directory; FSA FIEA operator list / search. | Mentioned in `securities/japan-asset-manager-landscape-matrix.md`; no per-company page. |
| `asset-managers/amundi-japan.md` | Global AM with Japan investment trust and advisory footprint; useful peer for foreign AM lane. | IMAJ member directory; FSA FIEA operator list / search. | Not covered as a dedicated page; only the general foreign AM lane exists. |
| `asset-managers/alliancebernstein-japan.md` | Foreign active-management platform with Japan distribution relevance and IMAJ full-member listing. | IMAJ member directory; FSA FIEA operator list / search. | Not covered as a dedicated page; fits the foreign AM comparison lane. |
| `asset-managers/state-street-global-advisors-japan.md` | Index / ETF and institutional asset-management operator; useful bridge to custody / trust-bank and foreign institution coverage. | IMAJ member directory; FSA FIEA operator list / search. | No dedicated page; adjacent to custody and foreign-institution coverage. |
| `asset-managers/resona-asset-management.md` | Bank-group manager missing from the domestic-bank-affiliated AM set; useful for megabank vs regional-bank distribution contrast. | IMAJ member directory; FSA FIEA operator list / search. | `megabanks/resona-hd.md` and `megabanks/resona-bank.md` exist; no manager page. |
| `asset-managers/dbj-asset-management.md` | Policy-finance-adjacent asset manager; helps connect DBJ public-finance coverage with investment-management mandates. | IMAJ member directory; FSA FIEA operator list / search. | `financial-regulators/dbj.md` exists; no asset-management operating page. |
| `asset-managers/aeon-reit-management.md` | Retail sponsor REIT manager; bridges AEON retail finance and listed J-REIT management. | IMAJ member directory; FSA FIEA operator list / search; AEON REIT public disclosures. | `real-estate-finance/aeon-mall-financing-and-securitization.md` covers the REIT vehicle and sponsor loop, not the manager. |
| `asset-managers/japan-real-estate-asset-management.md` | Manager for Japan Real Estate Investment Corp.; high-value office J-REIT management company tied to Mitsubishi Estate sponsor coverage. | IMAJ member directory; FSA FIEA operator list / search; J-REIT public disclosures. | `real-estate-finance/japan-real-estate-j-reit-8952.md` covers the investment corporation. |
| `asset-managers/kenedix-real-estate-fund-management.md` | Kenedix / KDX REIT manager route; important for independent / financial sponsor REIT management. | IMAJ member directory; FSA FIEA operator list / search; J-REIT public disclosures. | `real-estate-finance/top-10-j-reit-overview-matrix.md` references Kenedix / KDX but no manager page. |
| `asset-managers/daiwa-real-estate-asset-management.md` | REIT manager connected to Daiwa group and listed real-estate vehicles; complements existing Daiwa AM and securities coverage. | IMAJ member directory; FSA FIEA operator list / search; J-REIT public disclosures. | `asset-managers/daiwa-asset-management.md` exists, but this REIT manager is a different operating surface. |
| `asset-managers/itochu-reit-management.md` | Trading-company sponsored REIT manager; connects real-estate finance, trading-company finance, and sponsor governance. | IMAJ member directory; FSA FIEA operator list / search; J-REIT public disclosures. | Trading-company finance pages exist, but no REIT manager route. |

## Triage Order

1. Foreign AM lane: BlackRock Japan, JPMorgan AM Japan, Amundi Japan, AllianceBernstein Japan, State Street Global Advisors Japan.
2. Domestic bank / policy-adjacent lane: Resona Asset Management, DBJ Asset Management.
3. REIT manager lane: AEON REIT Management, Japan Real Estate Asset Management, Kenedix Real Estate Fund Management, Daiwa Real Estate Asset Management, ITOCHU REIT Management.

## Non-Goals

- No registry-only stubs. Each page needs a reason beyond appearing in a directory.
- No issuer directory expansion, retail fund recommendation, ranking, or investment advice.
- No private-client, customer, counterparty, non-public, or local-path material.
- No corpus entry in this planning issue.
- No content issue creation inside this branch unless a reviewer asks for it after the planning PR is reviewed.

## Downstream Content Packet

```text
ROLE:
Content implementation agent for FinWiki public-source corpus.

GOAL:
Create a first batch of high-signal asset-management / REIT-manager pages from docs/01-strategy/asset-management-register-gap-shortlist-2026-06-21.md.

ALLOWED FILES:
- asset-managers/*.md for approved candidate pages only
- asset-managers/INDEX.md if the approved batch changes the domain map
- related existing corpus pages only when adding a directly relevant wikilink
- README.md, CHANGELOG.md, index.html, ai discovery outputs and release notes if public surfaces change

FORBIDDEN:
- No registry-only stubs
- No fund recommendation, ranking, investment advice, price data, or private information
- No docs/ leakage into generated public surfaces
- No broad Markdown formatting cleanup

ACCEPTANCE:
- Each page states why the operator matters, group / sponsor context, registration or member-source route, business scope, and public-source caveats.
- Each page uses public-source markers and frontmatter sources.
- Existing partial coverage links forward to the new page where useful.
- Domain counts and AI discovery surfaces are regenerated.

VALIDATION:
- bun tools/wiki_link_audit.ts --fail-on-issues
- bun tools/release.ts --check --strict
- bun run surface:drift
- bun run ai:audit
- git diff --check
```

## Closeout For Issue #43

Issue #43 is ready for review when this shortlist is linked from the coverage gap-map, `bun run docs:audit` passes, and `git diff --check` passes.
