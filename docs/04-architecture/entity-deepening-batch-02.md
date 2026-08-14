# Entity Deepening Batch 02

Status: accepted named batch for Issue #292

Date: 2026-08-15 JST

Parents: Horizon 2 in [roadmap.md](../01-strategy/roadmap.md). Successor to [batch 01](entity-deepening-batch-01.md) (#279 / #286).

## Rule

Frontmatter-only entity work first. Every typed edge needs a public HTTPS `source` already cited on that page. No speculative peer edges. No UI.

Children declare `subsidiary_of`. Do not add the inverse on the parent in this batch.

## Batch 02 paths

| Path | Node | Edges / identity |
|---|---|---|
| `regional-banks/yucho.md` | `operating_company` / `japan_core` / `anchor` | `subsidiary_of megabanks/japan-post-holdings` from the existing ゆうちょ「株式の状況」URL |
| `regional-banks/japan-post-bank.md` | `operating_company` / `japan_core` / `mirror_member` | Existing `canonical_anchor: regional-banks/yucho`. `regulated_by financial-regulators/fsa` from the existing FSA bank list. No second `subsidiary_of` |
| `regional-banks/sony-bank.md` | `operating_company` / `japan_core` / `anchor` | `regulated_by financial-regulators/fsa` from the existing FSA bank list. `subsidiary_of megabanks/sony-fg` only if the existing Sony Bank profile URL still states the parent |
| `life-insurers/sony-life.md` | node already present | `regulated_by financial-regulators/fsa` from the existing FSA life-insurer list; `member_of_sro financial-regulators/seiho-kyokai` from the existing Seiho member list |
| `banking/sony-bank.md` | `operating_company` / `japan_core` / `mirror_member` | Existing `canonical_anchor: regional-banks/sony-bank`. No new typed edges |

`life-insurers/kampo-life.md` already has a node. It stays out of this batch because the page has no official HTTPS parent or registry URL to back a new edge. `megabanks/nippon-post.md` remains a second Japan Post route and is not given a group anchor.

## Public-source rule

Edge `source` values must be official HTTPS URLs already present in that page's frontmatter:

- Japan Post Bank stock / ownership: `https://www.jp-bank.japanpost.jp/ir/stock/ir_stk_situation.html`
- FSA bank list: `https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx`
- FSA life-insurer list: `https://www.fsa.go.jp/menkyo/hoken.pdf`
- Seiho members: `https://www.seiho.or.jp/member/list/`
- Sony Bank profile (parent check only): `https://sonybank.jp/corporate/aboutus/profile.html`

If the Sony Bank profile no longer states the parent, omit that one edge. Do not add a replacement URL in this packet.

## Validation

- `bun run entity:audit`
- `bun run wiki:audit:ci`
- `bun tools/release.ts --check --strict`
