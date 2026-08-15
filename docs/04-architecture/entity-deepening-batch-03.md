# Entity Deepening Batch 03

Status: accepted named batch for Issue #296

Date: 2026-08-15 JST

Parents: Horizon 2 in [roadmap.md](../01-strategy/roadmap.md). Successor to [batch 02](entity-deepening-batch-02.md) (#292) and [batch 01](entity-deepening-batch-01.md) (#279 / #286).

## Rule

Frontmatter-only entity work first. Every typed edge needs a public HTTPS `source` already cited on that page. No speculative peer edges. No UI.

Children declare `subsidiary_of`. Do not add the inverse on the parent in this batch.

## Batch 03 paths

All six pages receive `entity_node` `operating_company` / `japan_core` / `anchor` and `regulated_by financial-regulators/fsa` from the existing FSA 信託兼営 list.

| Path | Parent candidate | Parent source already on the page |
|---|---|---|
| `trust-banks/mitsubishi-ufj-trust-bank.md` | `megabanks/mufg` | `https://www.tr.mufg.jp/ippan/about/index.html` |
| `trust-banks/mizuho-trust-bank.md` | `megabanks/mizuho-fg` | `https://www.mizuho-tb.co.jp/company/about/info.html` |
| `trust-banks/smtb.md` | `trust-banks/sumitomo-mitsui-trust` | `https://www.smtb.jp/corporate/summary/` |
| `trust-banks/smbc-trust-bank.md` | `megabanks/sumitomo-mitsui-banking-corp` | `https://www.smbctb.co.jp/aboutus/information/` |
| `trust-banks/nomura-trust-bank.md` | `securities-firms/nomura-hd` | `https://www.nomura-trust.co.jp/company/corp.html` |
| `trust-banks/nochu-trust-bank.md` | `cooperative-banks/norinchukin` | `https://www.nochutb.co.jp/about/summary.html` |

Add `subsidiary_of` only if that overview URL still states the parent. If it does not, omit that one edge. Do not add a replacement URL in this packet.

Independent / management-type trust companies on the FSA `sintaku01` list stay out. Holding-company parents do not receive new edges here.

## Public-source rule

Edge `source` values must be official HTTPS URLs already present in that page's frontmatter:

- FSA 信託兼営金融機関認可一覧: `https://www.fsa.go.jp/menkyo/menkyoj/kenei.pdf`
- The company-overview URL listed for each parent check above

## Validation

- `bun run entity:audit`
- `bun run wiki:audit:ci`
- `bun tools/release.ts --check --strict`
