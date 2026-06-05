---
source: corporate-strategy/japan-holding-company-conversion
source_hash: 03e07dff28605a38
lang: en
model: claude-opus-4-8
status: machine
fidelity: ok
title: "持株会社化 (Japan holding-company conversion) — 株式移転 / 株式交換 / 会社分割 (抜け殻方式) routes to pure and operating HoldCo structures"
translated_at: 2026-06-05T00:00:00.000Z
---

# 持株会社化 (Japan holding-company conversion) — 株式移転 / 株式交換 / 会社分割 (抜け殻方式) routes to pure and operating HoldCo structures

## Wiki route

This entry sits under [[corporate-strategy/INDEX|corporate-strategy INDEX]] and routes into [[finance/INDEX|finance INDEX]] for the group-capital overlay. It is a **structure-selection guide**, not a regime page: it picks among the regimes documented in [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転 regime]] and [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]]. Read it alongside [[corporate-strategy/spinoff-decision-tree-japan|the spinoff decision tree]] for the divestiture-side counterpart, and [[finance/japan-listed-financial-groups-investable-universe|the listed-financial-groups universe]] for why so many Japanese groups sit under a holding company.

## TL;DR

**持株会社化 (mochikabu-gaisha-ka, holding-company conversion / "ホールディングス化")** is the act of reorganizing a group so that a **holding company (持株会社)** sits at the top, owning the operating businesses as subsidiaries. It is not itself a Companies Act mechanism — it is a *goal* reached through one of three underlying mechanisms.

Two structural choices define any conversion:

1. **Type of HoldCo** — **純粋持株会社 (pure holding company)**, which only holds subsidiary shares and lives off dividends, vs **事業持株会社 (operating holding company)**, which holds subsidiaries *and* runs its own business.
2. **Conversion method** — **株式移転 (share transfer)**, **株式交換 (share exchange)**, or **会社分割 (company split, "抜け殻方式" / shell method)**.

The standard mappings:

- **株式移転** → the company puts *itself* under a newly created pure HoldCo. The most common route to a 純粋持株会社 for a single listed company.
- **株式交換** → an existing company becomes the 100% parent (operating or pure) of a target — used when the future HoldCo already exists.
- **会社分割 (抜け殻方式)** → the operating company *splits its business out* into a subsidiary, leaving the **original legal entity as the HoldCo shell** (the "抜け殻", empty husk). Preserves the original entity's listing, licenses, and history at the top.

Because Japan **lifted the post-war ban on pure holding companies in 1997** (Antimonopoly Act revision), 持株会社化 became a mainstream group-design tool, and it underlies a large share of the "○○ホールディングス" names across Japanese listed groups.

## 1. Pure vs Operating Holding Company

| | 純粋持株会社 (pure) | 事業持株会社 (operating) |
|---|---|---|
| Own business | None — only holds and manages subsidiaries | Runs a business *and* holds subsidiaries |
| Revenue | Subsidiary dividends + group-management fees | Operating revenue + dividends |
| Typical name | "○○ホールディングス" / "○○グループ本社" | The original operating company, now also a parent |
| Strengths | Clean group governance, neutral capital allocator, flexible bolt-on M&A | Lower setup cost; no new top entity needed |
| Trade-offs | New entity, group-relief / consolidated-tax considerations, dividend-only cash flow | Conflicts of interest between the parent's own business and group oversight |

The pure-HoldCo model is favored where the group wants a **neutral apex** that allocates capital across competing operating subsidiaries without favoring any one — a recurring theme in the strategic-restructuring cases collected in [[business/japan-listed-corp-strategic-restructuring-matrix|the listed-corp strategic-restructuring matrix]].

## 2. The Three Conversion Methods

### Method A — 株式移転 (share transfer): build a new roof

The operating company executes a single-company [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式移転]]: a **new pure HoldCo is incorporated**, the operating company becomes its wholly-owned subsidiary, and shareholders swap operating-company shares for HoldCo shares (typically one-for-one).

- **Result**: cleanest path to a 純粋持株会社.
- **Listing**: the *new* HoldCo lists in place of the operating company (technical re-listing / 上場維持 handled under exchange rules).
- **Multi-company variant**: two companies do simultaneous 株式移転 into one HoldCo — the joint-HoldCo / merger-of-equals pattern behind many financial groups in [[corporate-strategy/INDEX|corporate-strategy INDEX]].

### Method B — 株式交換 (share exchange): point an existing company upward

Where the intended HoldCo (or acquirer) **already exists**, a [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換]] makes it the 100% parent of the target. This typically yields an **事業持株会社** if the acquiring parent keeps running its own business, or extends an existing HoldCo over a new subsidiary.

### Method C — 会社分割 (抜け殻方式 / shell method): hollow out the operating company

The original company performs a [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|新設分割]] (or 吸収分割), transferring **all** of its operating business into a newly created (or existing) subsidiary. The **original legal entity stays at the top as the HoldCo**, now holding only the shares of the operating subsidiary — an "empty husk" (抜け殻).

- **Key advantage**: the apex entity is **unchanged**, so its stock-exchange listing, regulatory licenses, contracts, and corporate history all remain at the HoldCo level without a re-listing event.
- **Employee transfer**: because this uses 会社分割, employment contracts transfer **automatically** under 労働契約承継法 (with the statutory consultation procedure) — the succession mechanics detailed in [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|the 会社分割 regime]].
- **Trade-off**: the split must satisfy 適格 tests to be tax-deferred, and the creditor-protection / employee-consultation timeline applies.

## 3. Method-Selection Matrix

| Goal | Best method | Why |
|---|---|---|
| Single listed company → pure HoldCo, clean | **株式移転** | Creates a neutral apex; shareholders simply roll into the new HoldCo |
| Keep the *original* entity (its listing / licenses) at the top | **会社分割 (抜け殻方式)** | The apex never changes; only the business moves down |
| Future parent already exists; absorb a target to 100% | **株式交換** | Points the existing company upward over the target |
| Two firms combine under one neutral parent | **株式移転 (joint)** | Parallel transfers into a single new HoldCo (merger-of-equals) |
| Partial control only (not 100%) — *not* a full HoldCo conversion | **株式交付** | See [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付 regime]]; stops below 100% |

## 4. Tax Layer — 適格 Treatment Carries Through

A holding-company conversion is only attractive if it is **tax-neutral**, which means the underlying mechanism must qualify (適格). The tests are the standard 組織再編成 tests:

- **株式移転 / 株式交換**: a single-company conversion is normally a **100%-group (完全支配関係)** transaction — the lightest test set — so 適格 (tax-deferred) treatment is routine. See [[corporate-strategy/japan-kabushiki-koukan-iten-regime|the 株式交換 / 株式移転 regime]] for the test detail.
- **会社分割 (抜け殻方式)**: the split into the subsidiary must meet 適格分割 tests (a wholly-owned-group split is again the lightest case), keeping assets at carryover basis. Loss-carryforward anti-trafficking rules (Corporation Tax Act art. 57 et seq.) can bite if ownership-change tests trigger.

Once the HoldCo exists, ongoing group taxation (the **グループ通算制度** consolidated-group regime, dividends-received treatment between parent and subsidiaries) becomes a live design factor — the recurring tax-versus-structure tension across [[corporate-strategy/INDEX|this domain]].

## 5. Why Groups Convert — Strategic Drivers

- **Group governance & capital allocation**: a neutral apex can shift capital between operating subsidiaries on portfolio logic rather than internal politics.
- **M&A agility**: bolt-on acquisitions slot in as new subsidiaries under the HoldCo without disturbing existing operating entities; the financing sits in [[finance/japan-acquisition-finance|Japan acquisition finance]].
- **Business succession**: for owner-managed firms, interposing a HoldCo can concentrate control and reshape the share base ahead of a generational handover — the interaction with the succession-tax framework is in [[corporate-strategy/japan-business-succession-jigyou-shoukei|business succession (事業承継)]].
- **Risk ring-fencing**: separate operating subsidiaries isolate liabilities; a problem in one does not directly contaminate the apex or sister companies.
- **Regulated-industry structure**: in finance, the HoldCo model aligns with bank / insurance holding-company supervision under the FSA — a primary reason the entities in [[finance/japan-listed-financial-groups-investable-universe|the listed-financial-groups universe]] are organized this way.

## 6. Regulatory and Antitrust Layer

- **Antimonopoly Act**: pure holding companies were **banned until the 1997 revision**; today they are permitted but the Japan Fair Trade Commission still polices group structures that would create excessive concentration — the merger-control overlay is in [[finance/jftc-merger-control-process|the JFTC merger-control process]].
- **Sector HoldCo rules**: bank / insurance holding companies sit under dedicated FSA supervision (持株会社 認可), layered on top of the generic Companies Act mechanism.
- **Listing continuity**: under 株式移転 the exchange handles technical re-listing of the new apex; under 会社分割 (抜け殻方式) the apex's listing is preserved — a distinction that interacts with [[securities/japan-ipo-listing-disclosure-route|the listing / disclosure route]].

## 7. Counterpoints and Caveats

- **A HoldCo is not free**: a new apex adds a layer of administration, board, and audit cost, and dividend-only cash flow at the pure-HoldCo level needs deliberate group-dividend policy.
- **適格 must be confirmed**: tax-neutrality depends on satisfying the qualified tests of the chosen mechanism; cash consideration or failed continuity tests can turn the conversion taxable.
- **Conflicts in 事業持株会社**: an operating HoldCo can face conflicts between running its own business and overseeing subsidiaries — a reason many groups eventually move to a 純粋持株会社.
- **Method is means, not end**: 持株会社化 is the *outcome*; the live choice is which of [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式移転 / 株式交換]] or [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割]] to use to get there.

## Related

- [[corporate-strategy/INDEX|corporate-strategy INDEX]]
- [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転 regime]]
- [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]]
- [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付 regime]]
- [[corporate-strategy/spinoff-decision-tree-japan|spinoff decision tree Japan]]
- [[corporate-strategy/japan-business-succession-jigyou-shoukei|business succession (事業承継)]]
- [[finance/jftc-merger-control-process|JFTC merger-control process]]
- [[finance/japan-acquisition-finance|Japan acquisition finance]]
- [[finance/japan-listed-financial-groups-investable-universe|Japan listed-financial-groups investable universe]]
- [[business/japan-listed-corp-strategic-restructuring-matrix|Japan listed-corp strategic-restructuring matrix]]
- [[securities/japan-ipo-listing-disclosure-route|Japan IPO listing / disclosure route]]
- [[INDEX|FinWiki index]]

## Sources

- Companies Act (会社法) — 株式移転 / 株式交換 / 会社分割 provisions: https://laws.e-gov.go.jp/document?lawid=417AC0000000086
- 国税庁 法人税法基本通達 1-4-5 (組織再編成): https://www.nta.go.jp/law/tsutatsu/kihon/hojin/01/01_04_05.htm
- 公正取引委員会 (JFTC) — antimonopoly / holding-company policy (English): https://www.jftc.go.jp/en/
- METI 経済法制 policy portal: https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/
- FSA English portal — bank / insurance holding-company supervision: https://www.fsa.go.jp/en/

---

> [!info] 校核状态
> confidence: **likely**. Method mechanics (株式移転 / 株式交換 / 抜け殻方式) and the 1997 Antimonopoly Act lifting of the pure-HoldCo ban are settled public facts. The optimal method and 適格 status are case-specific — confirm tax treatment and sector-regulatory approvals per transaction.
