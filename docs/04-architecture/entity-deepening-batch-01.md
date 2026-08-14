# Entity Deepening Batch 01

Status: accepted named batch for Issues #279 and #286

Date: 2026-08-14 JST

## Rule

Frontmatter-only entity work first. Every typed edge needs a public HTTPS `source` already cited on that page. No speculative peer edges. No UI.

## Batch 01 paths

| Path | Node | Edges / identity |
|---|---|---|
| `megabanks/resona-bank.md` | `operating_company` / `japan_core` / `anchor` | `subsidiary_of megabanks/resona-hd` (Resona group page); `regulated_by financial-regulators/fsa` (FSA bank list); `member_of_sro financial-regulators/zenginkyo` |
| `megabanks/saitama-resona-bank.md` | same node shape | `subsidiary_of megabanks/resona-hd`; `regulated_by financial-regulators/fsa` |
| `megabanks/japan-post-holdings.md` | `financial_group` / `japan_core` / `anchor` | none in this batch |
| `megabanks/smbc.md` | `operating_company` / `japan_core` / `mirror_member` | `canonical_anchor: megabanks/sumitomo-mitsui-banking-corp` plus one core-body wikilink to that anchor (same legal bank, existing duplicate route). No new typed edges. |

`megabanks/japan-financial-conglomerate-structure-overview.md` is an overview, not an entity. `megabanks/nippon-post.md` is a second Japan Post route and is **not** given a second group anchor in this batch.

## Public-source rule

Edge `source` values must be official HTTPS URLs already present in that page's frontmatter:

- Resona group: `https://www.resona-gr.co.jp/holdings/about/group/`
- FSA bank list: `https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx`
- Zenginkyo members: `https://www.zenginkyo.or.jp/en/members/`
- Japan Post IR: `https://www.japanpost.jp/en/ir/stock/index10.html`

## Validation

- `bun run entity:audit`
- `bun run wiki:audit:ci`
- `bun tools/release.ts --check --strict`
