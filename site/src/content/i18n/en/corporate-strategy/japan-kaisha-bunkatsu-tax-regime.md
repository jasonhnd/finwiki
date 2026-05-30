---
source: corporate-strategy/japan-kaisha-bunkatsu-tax-regime
source_hash: 06259aa1c0c61bd4
lang: en
status: machine
fidelity: ok
title: "会社分割 (Japan corporate split) — 吸収 / 新設 split types, 適格 tax regime, and employee succession"
translated_at: 2026-05-30T15:31:43.920Z
---

# 会社分割 (Japan corporate split) — 吸収 / 新設 split types, 適格 tax regime, and employee succession

## Wiki route

This entry sits under [[corporate-strategy/INDEX|corporate-strategy INDEX]] and routes into [[finance/INDEX|finance INDEX]] for the transaction-finance overlay. Read with [[corporate-strategy/partial-spinoff-tax-deferral|partial spinoff tax deferral]] for the comparison to distribution-type spinoffs, [[finance/japan-mbo-and-squeeze-out-process|Japan MBO / squeeze-out process]] for the contrast with private take-out routes, and [[finance/japan-tender-offer-process|Japan tender offer process]] for the public-bid alternative.

## TL;DR

**会社分割 (kaisha bunkatsu)** is the Japanese Companies Act mechanism for splitting a company. It is **not** the same as a spinoff — spinoff is one outcome that uses bunkatsu as the legal plumbing. Two structural axes define the regime:

1. **Direction-of-transfer axis** — 吸収分割 (absorption-type, into an existing company) vs 新設分割 (incorporation-type, into a newly formed company).
2. **Tax-treatment axis** — 適格分割 (qualified, tax-deferred carryover-basis treatment) vs 非適格分割 (non-qualified, taxable mark-to-market treatment).

A separate statute — 労働契約承継法 (Act on Succession of Labor Contracts upon Company Split, Act No. 103 of 2000) — automatically transfers in-scope employment contracts to the successor company without individual consent, subject to defined consultation rights.

The high-level summary:

- **Companies Act articles 757-766** govern the corporate procedure.
- **Corporation Tax Act articles 2(12-11), 62-2, 62-3** govern the qualified / non-qualified distinction.
- **適格分割** requires meeting a defined set of tests (continuity-of-interest, business-relatedness, employee retention, business continuation, etc.).
- **吸収分割 + cash consideration** is generally **non-qualified** unless very narrow safe harbours apply.
- **新設分割 + share consideration** is the typical 適格 route used in carve-outs and pre-spinoff structuring.

## Two-Axis Structural Map

| | 吸収分割 (absorption) | 新設分割 (incorporation) |
|---|---|---|
| **適格 (qualified, tax-deferred)** | Existing company receives transferred business; consideration paid in successor stock; meets continuity / business / employee tests | Newly formed company receives transferred business; consideration in newco stock; meets continuity / business / employee tests — **most common pre-spinoff structure** |
| **非適格 (non-qualified, taxable)** | Existing company pays cash (or mixed) consideration; mark-to-market on transferred assets; deemed dividend risk for shareholders if distributed | New company funded by transferred business but consideration paid in cash to original shareholder; mark-to-market triggered |

### 吸収分割 (absorption-type, Companies Act art. 757-766)

The split company (分割会社) transfers a part of its business to an **already-existing** successor company (承継会社). The transfer is a single integrated act of corporate reorganisation, not a series of asset transfers.

- Common use case: M&A carve-out where a buyer takes a specific business line by absorbing it into the buyer's existing subsidiary
- Consideration can be: successor's own shares, cash, or other property — flexibility on the consideration side, but cash makes 適格 hard
- Companies Act creditor-protection procedures (公告 + individual notice if 異議 expected) and labour-consultation procedures both apply

### 新設分割 (incorporation-type, Companies Act art. 762-766)

The split company creates a **new** successor company at the moment of split. Consideration is the new company's own shares (sometimes paired with bonds).

- Common use case: pre-spinoff structuring — split out the business into a newco, then distribute newco shares to parent's shareholders (which may use [[corporate-strategy/partial-spinoff-tax-deferral|partial-spinoff tax deferral]] if conditions met)
- Common use case: holding-company conversion — operating company splits into pure holding + operating newco
- Common use case: joint-venture seed — two parents do parallel 新設分割 into a JV newco
- Consideration in share form is the most common path because it preserves 適格 treatment

## Tax Axis — 適格 vs 非適格

The 適格分割 regime (Corporation Tax Act art. 2(12-11) and surrounding articles) is the core question: does the split get **tax-deferred carryover-basis** treatment, or **mark-to-market** treatment?

### 適格分割 tests (simplified)

Three baseline scenarios, each with its own test set:

1. **100%-group internal 適格分割** — split inside a wholly-owned group; minimal extra tests beyond corporate-group continuity
2. **50-100%-group 適格分割** — split inside a majority-controlled group; adds business continuity + employee retention tests
3. **Joint-business 適格分割 (共同事業要件)** — split with a third party; adds all of:
   - **事業関連性** (business relatedness — transferred business and successor business must be related)
   - **事業規模 OR 経営参画** (similar scale OR specified-officer secondment)
   - **従業者引継ぎ** (≥80% of involved employees retained)
   - **事業継続** (transferred business continued post-split)
   - **株式交付** (consideration in successor stock only, no cash)
   - **継続保有** (specified shareholders hold the issued stock continuously)

### 非適格分割 consequences

- Mark-to-market on transferred assets at the split company level — embedded gains crystallise
- The receiving company picks up assets at fair value, not historic cost
- If the split is followed by a distribution of successor stock to original shareholders, **deemed dividend** risk arises at the shareholder level
- Loss carryforwards generally do **not** carry over to the successor company on non-qualified terms

### 適格分割 consequences

- Transferred assets move at historic book value — no immediate gain recognition at split-company level
- Receiving company picks up historic basis
- Loss carryforwards may carry over subject to specified limitation rules (Corporation Tax Act art. 57-3 et seq., anti-loss-trafficking provisions)
- Shareholder-level deemed dividend generally avoided when paired with qualified spinoff regime

## Comparison Table — Bunkatsu vs Spinoff vs Cash M&A

| Dimension | 適格 新設分割 + 株式分配 | パーシャルスピンオフ | 完全現金売却 (cash sale) |
|---|---|---|---|
| Companies Act vehicle | 新設分割 + 剰余金配当 (in-kind) | 株式分配 (現物分配) | 事業譲渡 or 株式譲渡 |
| Parent retained interest | Full (no distribution) or partial (post-spinoff) | Up to 20% retained (under partial-spinoff regime) | Zero (full divestiture) |
| Tax at parent level | Deferred under 適格 | Deferred under [[corporate-strategy/partial-spinoff-tax-deferral|partial-spinoff regime]] | Taxable gain on sale |
| Tax at shareholder level | None (no distribution) | None if regime conditions met | None (no distribution) |
| Employee transfer | Automatic under 労働契約承継法 | Automatic under 労働契約承継法 | Negotiated case-by-case (事業譲渡 requires consent) |
| Use case | Internal restructuring, JV seeding, pre-listing carve-out | Listed-parent simplification with retained alliance | Exit-focused divestiture |

The interaction with public-market take-out alternatives is documented in [[finance/japan-mbo-and-squeeze-out-process|Japan MBO / squeeze-out process]] (going-private route) and [[finance/japan-tender-offer-process|Japan tender offer process]] (public-bid route). Cross-border-buyer overlays are detailed in [[finance/multi-jurisdiction-identity-tax-leverage|multi-jurisdiction identity tax leverage]] for the tax-residency dimension.

## Employee Succession — 労働契約承継法

The 労働契約承継法 (Act on Succession of Labor Contracts upon Company Split, Act No. 103 of 2000, in force 2001) creates a **statutory automatic transfer** of in-scope employment contracts when 会社分割 is used.

### Three categories of employees

The Act classifies employees of the split company into three categories by their relationship to the transferred business:

1. **Mainly engaged in the transferred business** — contracts **automatically transfer** to the successor company by operation of law (no individual consent needed). Employee can object only if their contract was supposed to transfer but was excluded.
2. **Not mainly engaged in the transferred business, but listed in the split plan as transferring** — employee **can object** within the prescribed period; if objection valid, employee remains with split company.
3. **Not mainly engaged, not listed** — remains with split company by default; if employee believes they should have been transferred, can object the other way.

### Mandatory consultation procedure

- **7条措置 (Article 7 measures)** — split company must consult with all employees of the split business and explain the split plan
- **5条協議 (Article 5 consultation)** — split company must have individual consultation with each affected employee on the transfer decision
- Companies Act requires public notice + individual notice to creditors; the labour-side requires individual consultation with each transferring employee on top
- Failure to follow procedure does not invalidate the split itself but exposes the company to wrongful-transfer claims

### Contrast with 事業譲渡 (business transfer)

事業譲渡 (business transfer outside 会社分割) is governed by ordinary Civil Code rules — each employment contract requires the affected employee's individual consent to transfer. This is one of the largest practical differences between using 会社分割 and using 事業譲渡 to move a business:

| Aspect | 会社分割 | 事業譲渡 |
|---|---|---|
| Employment-contract transfer | Automatic under 労働契約承継法 (with consultation procedure) | Requires individual consent per employee |
| Creditor consent | Companies Act creditor-protection procedure (notice + 異議 process) | Individual creditor consent / novation per contract |
| Contracts with counterparties | Automatic transfer of legal position | Each contract must be assigned per its assignment clause |
| Tax treatment | Can be 適格 (tax-deferred) | Always taxable to seller |
| Speed | 2-3 months minimum | Variable, often longer for complex contract books |

This is why large carve-outs typically use **会社分割**, not 事業譲渡: the contract-transfer mechanics are dramatically simpler and the tax treatment is materially better. Cash-style exits where the buyer wants only specific contracts cherry-picked are the main remaining use case for 事業譲渡. The capital-side companion mechanic — financing the buyer's payment — sits in [[finance/japan-acquisition-finance|Japan acquisition finance]].

## Creditor Protection and Procedural Timeline

Beyond the tax and labour layers, Companies Act creditor-protection procedures define the **minimum execution timeline** for any 会社分割. The procedure is non-trivial and is the most common reason carve-out closings slip.

| Step | Statutory minimum period | Notes |
|---|---|---|
| Board approval of split plan / split agreement | — | Same-day possible |
| Disclosure of split-plan documents at head office | At least 2 weeks before shareholders' meeting | Available for shareholders, creditors, employees to inspect |
| Shareholders' meeting special resolution | — | Approval threshold: 2/3 (special resolution) |
| 債権者保護手続 — public notice in Official Gazette + individual notice to known creditors with right of objection | At least 1 month (objection period) | If 異議 (objection) raised, company must repay, provide security, or set aside equivalent property |
| 7条措置 (employee consultation under 労働契約承継法) | Statutory consultation period | Parallel to creditor protection |
| 5条協議 (individual employee consultation) | Per-employee basis | Must conclude before split effective date |
| Filing of split registration | — | Within 2 weeks of effective date |
| Tax / labour notifications | — | Post-effective-date filings to NTA, prefecture, social-insurance authorities |

Realistic execution timeline for a non-trivial 会社分割 is **2.5-4 months** from board approval to registration, even before any tax-ruling negotiations or external-counterparty consents. Carve-outs with material customer contracts requiring counterparty consent stretch longer.

## Cross-Border Variations

For multinational groups, 会社分割 mechanics differ in important ways from the equivalent US / UK / EU regimes:

| Element | Japan 会社分割 | US Sec. 355 spin-off | UK demerger (statutory or scheme) | EU Cross-Border Conversions Directive |
|---|---|---|---|---|
| Statutory automatic asset / liability transfer | Yes | Yes | Limited (statutory demerger via Cap. 626 of Companies Act 2006) | Yes (within EU) |
| Statutory automatic employment-contract transfer | Yes (労働契約承継法) | No (employee re-hire by successor) | TUPE (Transfer of Undertakings) regulations | Acquired Rights Directive |
| Tax-free treatment regime | 適格分割 tests | Sec. 355 active-trade / business-purpose tests | Sec. 110 IA 1986 / Sec. 213 ICTA reorganisations | Member-state-specific |
| Creditor protection | Companies Act 公告 + objection process | Limited statutory creditor protection | Court-supervised in scheme route | Member-state-specific |
| Cross-listing of successor | Domestic-listing process | SEC rule 17C / Form 10 | UKLA listing rules | Various |

Cross-border deals using Japanese 会社分割 to feed into a non-Japanese spin-off / demerger structure require careful coordination — the [[finance/cross-border-m-a-japan|cross-border M&A Japan]] entry covers the typical sequence for inbound and outbound carve-outs that touch Japan as one leg of a multi-jurisdiction transaction.

## Strategic reading

- **会社分割 is the legal-plumbing layer; 適格 vs 非適格 is the tax layer; spinoff is one outcome among many.** Confusing the three is the single most common mistake outside specialist M&A practice. The relationship between 新設分割 (the plumbing) and [[corporate-strategy/partial-spinoff-tax-deferral|partial-spinoff tax deferral]] (the tax regime that lets the resulting newco's shares be distributed to parent's shareholders without shareholder-level tax) is one of layering, not substitution.
- **Pre-IPO carve-out playbook**: parent uses 適格 新設分割 to put the carve-out business into a 100%-owned newco at historic basis. Newco builds independent management and audit history for 3-5 years. Newco lists via IPO (parent's interest dilutes through primary offering and possible secondary placement) — see [[finance/japan-ib-league-table|Japan IB league table]] for advisory landscape on these structures.
- **Holding-company conversion**: parent uses 新設分割 to spin operating business into operating newco, leaving parent as pure HoldCo. 適格 treatment makes this routinely tax-neutral.
- **Loss carryforward limitation matters**: the anti-trafficking provisions in Corporation Tax Act art. 57-3 restrict the use of loss carryforwards after qualified splits if specified ownership-change tests trigger. This is a quiet but consequential constraint in distressed restructurings.
- **Workforce-heavy splits hinge on procedure**: the [[governance/INDEX|governance]] cost of a 会社分割 with thousands of transferring employees is dominated by 7条措置 + 5条協議 execution, not by tax structuring. Plan with HR and legal jointly from day one.

## Related

- [[corporate-strategy/INDEX|corporate-strategy INDEX]]
- [[corporate-strategy/partial-spinoff-tax-deferral|partial-spinoff tax deferral]]
- [[finance/INDEX|finance INDEX]]
- [[finance/japan-mbo-and-squeeze-out-process|Japan MBO / squeeze-out process]]
- [[finance/japan-tender-offer-process|Japan tender offer process]]
- [[finance/japan-acquisition-finance|Japan acquisition finance]]
- [[finance/multi-jurisdiction-identity-tax-leverage|multi-jurisdiction identity tax leverage]]
- [[finance/japan-ib-league-table|Japan IB league table]]
- [[finance/cross-border-m-a-japan|cross-border M&A Japan]]
- [[INDEX|FinWiki index]]

## Sources

- Companies Act (会社法) on 会社分割 (art. 757-766): https://laws.e-gov.go.jp/document?lawid=417AC0000000086
- 国税庁 法人税法基本通達 1-4-5 (組織再編成): https://www.nta.go.jp/law/tsutatsu/kihon/hojin/01/01_04_05.htm
- METI スピンオフ手引き: https://www.meti.go.jp/policy/jigyou_saisei/kyousouryoku_kyouka/spinoff.html
- 厚労省 労働契約承継法 (制度説明): https://www.mhlw.go.jp/general/seido/koyou/kyousai/index.html
- 労働契約承継法 (Act No. 103 of 2000): https://elaws.e-gov.go.jp/document?lawid=412AC0000000103
