---
source: corporate-strategy/japan-kaisha-bunkatsu-tax-regime
source_hash: 1e880c65428132d5
lang: en
model: source-language-sync
status: machine
fidelity: ok
title: "会社分割 (Japan corporate split) — 吸収 / 新設 split types, 適格 tax regime, and employee succession"
translated_at: 2026-07-29T05:13:34.783Z
---

# 会社分割 (Japan corporate split) — 吸収 / 新設 split types, 適格 tax regime, and employee succession

## Wiki route

This entry sits under [[corporate-strategy/INDEX|corporate-strategy INDEX]] and routes into [[finance/INDEX|finance INDEX]] for the transaction-finance overlay. Read with [[corporate-strategy/japan-kabushiki-bunpai-spinoff-regime|partial spinoff tax deferral]] for the comparison to distribution-type spinoffs, [[finance/japan-mbo-and-squeeze-out-process|Japan MBO / squeeze-out process]] for the contrast with private take-out routes, and [[finance/japan-tender-offer-process|Japan tender offer process]] for the public-bid alternative.

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
| **適格 (qualified, tax-deferred)** | Existing company receives the defined rights and obligations; all applicable relationship, consideration, continuity, employee, and business tests must be checked | Newly formed company receives the defined rights and obligations; all applicable qualification tests must be checked |
| **非適格 (non-qualified, taxable)** | Failure of the applicable qualification tests can trigger recognition on transferred assets | Failure of the applicable qualification tests can trigger recognition on transferred assets |

Sources: legal form and succession follow the Companies Act; tax treatment follows the Ministry of Finance's current organization-restructuring summary. Consideration alone does not establish qualification because the statutory test set depends on ownership and transaction facts. ^[Sources: https://laws.e-gov.go.jp/document?lawid=417AC0000000086; https://www.mof.go.jp/tax_policy/summary/corporation/c06.htm.]

### 吸収分割 (absorption-type, Companies Act art. 757-766)

The split company (分割会社) transfers a part of its business to an **already-existing** successor company (承継会社). The transfer is a single integrated act of corporate reorganisation, not a series of asset transfers.

- Common use case: M&A carve-out where a buyer takes a specific business line by absorbing it into the buyer's existing subsidiary
- Consideration can be: successor's own shares, cash, or other property — flexibility on the consideration side, but cash makes 適格 hard
- Companies Act creditor-protection procedures (公告 + individual notice if 異議 expected) and labour-consultation procedures both apply

### 新設分割 (incorporation-type, Companies Act art. 762-766)

The split company creates a **new** successor company at the moment of split. Consideration is the new company's own shares (sometimes paired with bonds).

- Common use case: pre-spinoff structuring — split out the business into a newco, then distribute newco shares to parent's shareholders (which may use [[corporate-strategy/japan-kabushiki-bunpai-spinoff-regime|partial-spinoff tax deferral]] if conditions met)
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

## Comparison Table — Company Split, Spin-off, and Business Sale

| Dimension | 会社分割 only | Qualified full / partial spin-off | 事業譲渡 (business sale) |
|---|---|---|---|
| Legal vehicle | 吸収分割 or 新設分割 | Company split where needed, followed by a qualifying share distribution | Asset / business transfer contract |
| Shareholder distribution | None by the split alone | Subsidiary / new-company shares distributed pro rata; current partial measure permits parent retention below 20% | None by the sale alone |
| Tax | Can be tax-deferred if the split qualifies | Can defer immediate parent / shareholder recognition only if all spin-off conditions are met | Seller generally recognizes consideration against transferred tax basis |
| Employment | Designated contracts are governed by 労働契約承継法 and required procedures | Same company-split rules if a split is used before distribution | Transfer requires employee consent |
| Structural purpose | Move a defined business or rights / obligations | Separate ownership of a business into shareholders' hands | Transfer a business to a buyer for consideration |

Sources: this table separates legal form from tax outcome using the Companies Act, Ministry of Finance tax summary, Labor Contract Succession Act, and METI's May 2026 spin-off guide. ^[Sources: https://laws.e-gov.go.jp/document?lawid=417AC0000000086; https://www.mof.go.jp/tax_policy/summary/corporation/c06.htm; https://elaws.e-gov.go.jp/document?lawid=412AC0000000103; https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/oshirase/spinoff-kaitei_20260522.html.]

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

Sources: the legal-transfer distinction follows the Companies Act and MHLW's Labor Contract Succession Act guidance. The speed row is only a planning heuristic and is not a statutory completion promise. ^[Sources: https://laws.e-gov.go.jp/document?lawid=417AC0000000086; https://www.mhlw.go.jp/general/seido/koyou/kyousai/index.html; https://elaws.e-gov.go.jp/document?lawid=412AC0000000103.]

This is why large carve-outs typically use **会社分割**, not 事業譲渡: the contract-transfer mechanics are dramatically simpler and the tax treatment is materially better. Cash-style exits where the buyer wants only specific contracts cherry-picked are the main remaining use case for 事業譲渡. The capital-side companion mechanic — financing the buyer's payment — sits in [[finance/japan-acquisition-finance|Japan acquisition finance]].

## Creditor Protection and Procedural Timeline

Beyond the tax and labour layers, Companies Act creditor-protection procedures define the **minimum execution timeline** for any 会社分割. The procedure is non-trivial and is the most common reason carve-out closings slip.

| Step | Statutory minimum period | Notes |
|---|---|---|
| Board approval of split plan / split agreement | — | Same-day possible |
| Disclosure of split-plan documents at head office | At least 2 weeks before shareholders' meeting | Available for shareholders, creditors, employees to inspect |
| Shareholders' meeting special resolution | — | Approval threshold: 2/3 (special resolution) |
| 債権者保護手続 — public notice in Official Gazette + individual notice to known creditors with right of objection | At least 1 month (objection period) | If 異議 (objection) raised, company must repay, provide security, or set aside equivalent property |
| Employee consultation and notices | Applicable statutory / guidance deadlines | Scope and timing depend on the employee category and split plan |
| Filing of split registration | — | Within 2 weeks of effective date |
| Tax / labour notifications | — | Post-effective-date filings to NTA, prefecture, social-insurance authorities |

Sources: this is an ordinary planning sequence, not a complete closing checklist. Companies Act exceptions, creditor classes, employee categories, transaction form, and sector rules can change which steps apply. ^[Sources: https://laws.e-gov.go.jp/document?lawid=417AC0000000086; https://www.mhlw.go.jp/general/seido/koyou/kyousai/index.html; https://elaws.e-gov.go.jp/document?lawid=412AC0000000103.]

Realistic execution timeline for a non-trivial 会社分割 is **2.5-4 months** from board approval to registration, even before any tax-ruling negotiations or external-counterparty consents. Carve-outs with material customer contracts requiring counterparty consent stretch longer.

## Cross-Border Boundary

Japanese 会社分割 does not by itself determine the treatment of foreign assets, employees, contracts, taxes, approvals, or listings:

| Element | What the Japanese regime establishes | What still requires separate review |
|---|---|---|
| Domestic legal succession | Rights and obligations identified in the split agreement / plan succeed under the Companies Act | Foreign-law recognition, registration, consent, and perfection |
| Employment | Japanese in-scope contracts follow the Labor Contract Succession Act and its procedures | Local employment / transfer rules outside Japan |
| Tax | Japanese qualified / non-qualified treatment is tested under Japanese tax law | Foreign corporate, shareholder, withholding, and indirect tax |
| Creditors and permits | Japanese statutory creditor procedures apply; permit transfer is sector-specific | Foreign creditor, regulatory, sanctions, and investment-review rules |
| Listing / disclosure | Japanese exchange and disclosure rules apply where relevant | Every foreign exchange and securities-law requirement |

Sources: the table deliberately states only the territorial boundary of the cited Japanese statutes. It does not assert equivalence with a US, UK, EU, or other foreign reorganization regime. ^[Sources: https://laws.e-gov.go.jp/document?lawid=417AC0000000086; https://www.mof.go.jp/tax_policy/summary/corporation/c06.htm; https://elaws.e-gov.go.jp/document?lawid=412AC0000000103.]

Cross-border deals using Japanese 会社分割 to feed into a non-Japanese spin-off / demerger structure require careful coordination — the [[finance/cross-border-m-a-japan|cross-border M&A Japan]] entry covers the typical sequence for inbound and outbound carve-outs that touch Japan as one leg of a multi-jurisdiction transaction.

## Strategic reading

- **会社分割 is the legal-plumbing layer; 適格 vs 非適格 is the tax layer; spinoff is one outcome among many.** Confusing the three is the single most common mistake outside specialist M&A practice. The relationship between 新設分割 (the plumbing) and [[corporate-strategy/japan-kabushiki-bunpai-spinoff-regime|partial-spinoff tax deferral]] (the tax regime that lets the resulting newco's shares be distributed to parent's shareholders without shareholder-level tax) is one of layering, not substitution.
- **Pre-IPO carve-out playbook**: parent uses 適格 新設分割 to put the carve-out business into a 100%-owned newco at historic basis. Newco builds independent management and audit history for 3-5 years. Newco lists via IPO (parent's interest dilutes through primary offering and possible secondary placement) — see [[finance/japan-ib-league-table|Japan IB league table]] for advisory landscape on these structures.
- **Holding-company conversion**: parent uses 新設分割 to spin operating business into operating newco, leaving parent as pure HoldCo. 適格 treatment makes this routinely tax-neutral.
- **Loss carryforward limitation matters**: the anti-trafficking provisions in Corporation Tax Act art. 57-3 restrict the use of loss carryforwards after qualified splits if specified ownership-change tests trigger. This is a quiet but consequential constraint in distressed restructurings.
- **Workforce-heavy splits hinge on procedure**: the [[non-profit/INDEX|governance]] cost of a 会社分割 with thousands of transferring employees is dominated by 7条措置 + 5条協議 execution, not by tax structuring. Plan with HR and legal jointly from day one.

## Related

- [[corporate-strategy/INDEX|corporate-strategy INDEX]]
- [[corporate-strategy/japan-kabushiki-bunpai-spinoff-regime|partial-spinoff tax deferral]]
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
- 財務省「組織再編税制に関する資料」: https://www.mof.go.jp/tax_policy/summary/corporation/c06.htm
- METI「スピンオフ」の活用に関する手引（令和8年5月）改訂案内: https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/oshirase/spinoff-kaitei_20260522.html
- 厚労省 労働契約承継法 (制度説明): https://www.mhlw.go.jp/general/seido/koyou/kyousai/index.html
- 労働契約承継法 (Act No. 103 of 2000): https://elaws.e-gov.go.jp/document?lawid=412AC0000000103
