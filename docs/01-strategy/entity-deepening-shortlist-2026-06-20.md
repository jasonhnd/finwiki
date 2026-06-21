# Entity Deepening Shortlist - 2026-06-20

> Issue #22 planning output. This is a read-only task packet for unlocking #26. It does not change corpus pages.

## Review Method

- Scope reviewed: existing entity-style pages across institution, payments, card, foreign-financial-institution, securities, asset-management, leasing, insurance, trust, and manufacturer-finance domains.
- Thinness signal: body `word_like_tokens` from the current Markdown body, plus missing or generic sections for business model, regulatory positioning, or group / parent relationship.
- Candidate sources: public official pages, public regulator lists, public exchange / IR materials, or public industry lists already present in the candidate page or directly implied by its domain.
- Non-goal: no new routes, no page merges, no public facts written into corpus pages in this planning issue.

## Execution Guardrails For #26

- Edit only the listed candidate pages in the selected wave, plus direct cross-links / domain INDEX rows / generated surfaces required by those content edits.
- Verify each candidate source at execution time before adding facts; do not rely on this planning note as a factual citation.
- Add or strengthen sections, not generic prose: business model, regulatory licence / registration position, group / parent relationship, and cross-domain anchors.
- Preserve existing routes and distinct pages unless a separate issue explicitly approves a merge.
- Update `last_tended`, `last_updated` when materially changing a page body, and keep `## Sources` aligned with frontmatter `sources`.

## Recommended Batches

| Wave | Candidate pages | Rationale |
|---|---:|---|
| A - platform payments and card issuers | 8 | Highest reuse across payments, cards, retail, loyalty, and licence-boundary pages. |
| B - bank / foreign-branch positioning | 6 | Helps clarify branch, net-bank, regional-bank and cross-border corridor roles. |
| C - capital-markets and finance arms | 4 | Adds business-model detail to listed / regulated intermediaries with public IR sources. |
| D - insurance, trust and manufacturer anchors | 4 | Finishes high-value non-bank anchors that link into split institution and thematic pages. |

## Wave A - Payments And Card Platforms

| Priority | Page | Current thinness signal | Deepening angle | Candidate public sources |
|---:|---|---|---|---|
| A1 | `payment-firms/paypay.md` | 249 words; sections stop at licence boundary / business role; no explicit group-relationship section. | Add PayPay wallet economics, funds-transfer registration position, and PayPay FG / SoftBank ecosystem relationship. | PayPay company page `https://about.paypay.ne.jp/about/`; FSA funds-transfer list `https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf`. |
| A2 | `payment-firms/merpay.md` | 253 words; licence boundary is present but thin; group relation to Mercari is not developed. | Add Merpay / Mercari marketplace payment loop, funds-transfer and prepaid boundary, and credit / deferred-payment adjacency. | Merpay about `https://jp.merpay.com/about/`; Merpay legal / funds settlement page `https://static.jp.mercari.com/shikin_kessai`; FSA funds-transfer list. |
| A3 | `payment-firms/sb-payment-service.md` | 252 words; business role exists but lacks PSP product stack and SoftBank group positioning. | Add merchant PSP / acquiring / settlement role, Installment Sales Act adjacency, and SoftBank ecosystem placement. | SB Payment company and business pages `https://www.sbpayment.co.jp/info/`, `https://www.sbpayment.co.jp/info/business/`; METI credit registry. |
| A4 | `payment-firms/wise-payments-japan.md` | 278 words; licence boundary is present but cross-border operating model is minimal. | Add Type-I funds-transfer positioning, remittance corridor model, and difference from domestic wallet PSPs. | Wise Japan corporate page; Wise Japan Type-I licence newsroom; FSA funds-transfer list. |
| A5 | `payment-firms/net-protections-hd.md` | 470 words; has regulation heading but BNPL economics and group / listed-company relationship are thin. | Add NP Atobarai / atone / AFTEE product split, BNPL receivable / merchant-fee economics, and listed holding-company context. | Net Protections corporate / IR pages; NP, atone, AFTEE public service pages; METI credit registry. |
| A6 | `card-issuers/smbc-card.md` | 273 words; no developed SMFG / Olive / issuer-acquirer platform relationship. | Add SMBC Card as SMFG card / acquiring platform, credit-card registration boundary, and relationship to Olive / V Point pages. | SMBC Card company pages; METI credit registry. |
| A7 | `card-issuers/paypay-card.md` | 279 words; no explicit PayPay / Yahoo / SoftBank group route. | Add issuer role inside PayPay financial ecosystem, card vs wallet split, and Installment Sales Act registration position. | PayPay Card company page `https://www.paypay-card.co.jp/company/`; METI credit registry. |
| A8 | `card-issuers/seven-card-service.md` | 269 words; retail-group data / card / nanaco relationship is only implicit. | Add Seven & i card / electronic-money / retail-credit role and relationship to Seven Bank / Seven Payment Service. | Seven Card company and business pages; METI credit registry. |

## Wave B - Banking And Foreign Branches

| Priority | Page | Current thinness signal | Deepening angle | Candidate public sources |
|---:|---|---|---|---|
| B1 | `regional-banks/lawson-bank.md` | 503 words; ATM-platform facts exist but the banking licence and convenience-store platform model are not separated. | Add ATM network economics, bank licence positioning, Lawson group relationship, and contrast with Seven Bank. | Lawson Bank official IR / data page; FSA bank list; Seven Bank public ATM count for peer contrast. |
| B2 | `regional-banks/sbj-bank.md` | 200 words; very short; no developed Shinhan group / Korea-Japan corridor note. | Add bank-licence boundary, foreign-group ownership, Japan branch/subsidiary corridor role, and cross-links to foreign-bank pages. | FSA bank list; SBJ Bank about and history pages. |
| B3 | `regional-banks/hokuhoku-fg.md` | 484 words; generic company / segment / regulation structure; lacks dual-bank group operating model. | Add Hokuriku Bank + Hokkaido Bank two-region group structure, consolidation logic, and regional-bank holding-company positioning. | Hokuhoku FG public IR / securities reports; FSA bank list; official bank profiles. |
| B4 | `regional-banks/juroku-fg.md` | 483 words; has open questions; lacks post-merger / holding-company business model. | Add Juroku Bank / Gifu Bank merger history, holding-company relationship, and regional business-line map. | FSA 2012 merger notice; Juroku FG public IR / securities reports; official company profile. |
| B5 | `foreign-financial-institutions/ctbc-bank-japan.md` | 263 words; branch boundary exists but Taiwan corridor role and parent-group positioning are light. | Add Tokyo branch role, CTBC group relationship, customer / corridor focus, and Zengin / branch membership context. | FSA bank list; CTBC Japan public materials; Zengin member list. |
| B6 | `foreign-financial-institutions/taiwan-business-bank-japan.md` | 507 words; has research checklist but limited operating model. | Add SME-bank corridor thesis, Tokyo branch role, and how foreign branches differ from domestic subsidiaries. | FSA bank list; Zengin bank DB; Taiwan Business Bank Japan public branch materials. |

## Wave C - Securities, Asset Management And Leasing

| Priority | Page | Current thinness signal | Deepening angle | Candidate public sources |
|---:|---|---|---|---|
| C1 | `securities-firms/matsui-sec.md` | 503 words; generic structure; online brokerage economics and FIEA positioning are thin. | Add online brokerage revenue mix, Type-I FIBO registration, self-directed retail strategy, and peer links to SBI / Monex / Rakuten Securities pages. | Matsui official IR / corporate site; JPX listed-company materials; FSA FIBO list. |
| C2 | `securities-firms/aizawa-sg.md` | 501 words; generic company / policy sections; lacks regional / Asia-equity strategy. | Add Aizawa Securities Group strategy, retail brokerage / Asian equity positioning, and Type-I FIBO / JSDA membership boundary. | Aizawa SG public IR / securities report; FSA FIBO list; JSDA member list. |
| C3 | `asset-managers/tokio-marine-asset-management.md` | 454 words; group ownership is present but investment-management role and insurer-group channel are thin. | Add investment advisory / management registration, Tokio Marine group distribution relationship, and insurer-group asset-management role. | FSA FIBO list; Tokio Marine AM company profile; Tokio Marine Holdings group-company page. |
| C4 | `leasing-firms/mizuho-lease.md` | 482 words; good structure but group / alliance mechanics are still summary-level. | Add Mizuho relationship, Marubeni alliance / ownership context, leasing business lines, and finance-arm / trading-house adjacency. | Mizuho Leasing company data and IR pages; Marubeni public release. |

## Wave D - Insurance, Trust And Manufacturer Anchors

| Priority | Page | Current thinness signal | Deepening angle | Candidate public sources |
|---:|---|---|---|---|
| D1 | `life-insurers/lifenet.md` | 501 words; generic sections; online direct-life business model and listed-company context are not developed. | Add direct / internet life-insurance economics, solvency / licence boundary, and listed growth-company positioning. | JPX listed-company materials; Lifenet public IR / disclosure; FSA life-insurer list. |
| D2 | `life-insurers/orix-life.md` | 470 words; product list exists but ORIX group / bancassurance / direct channels are thin. | Add ORIX group relationship, product / channel mix, solvency and insurer licence position. | ORIX integrated report / IR; ORIX Life public disclosure; FSA life-insurer list. |
| D3 | `trust-banks/alterna-trust.md` | 466 words; new trust-company page with public context but thin regulatory / product positioning. | Add trust-company licence type, digital / alternative-asset custody angle, Mitsui X / SMTH relationship, and tokenized / real-estate trust boundary. | FSA trust-company list; Mitsui X public release; Sumitomo Mitsui Trust public release. |
| D4 | `manufacturer-finance/seiko-epson.md` | 277 words; manufacturer anchor is thin and lacks finance-use cases. | Add manufacturer operating segments, balance-sheet / treasury relevance, and why it belongs as an anchor behind finance-arm or supply-chain-finance pages. | Epson corporate profile; Epson annual / integrated reports. |

## #26 Execution Packet Seed

Recommended first execution issue:

- Title: `[Content] Execute entity-page deepening batch from #22 shortlist`.
- Scope: Wave A first (8 pages) unless the maintainer chooses a smaller batch; follow with Waves B-D as separate commits or issues.
- Acceptance: each edited page gains materially deeper public-source-backed business-model, regulatory-positioning, or group-relationship content; no unsourced claims; no unrelated formatting cleanup.
- Validation: `bun tools/release.ts --write`, `bun tools/release.ts --check --strict`, `bun run wiki:audit`, `bun run ai:audit`, `bun run surface:drift`, `git diff --check`; add `bun run i18n:status` if mirrors are changed.

