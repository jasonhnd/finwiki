---
source: corporate-strategy/japan-group-tsusan-consolidated-tax-regime
source_hash: 680dfe0d59619ad5
lang: en
model: claude-opus-4-8
status: machine
fidelity: ok
title: "グループ通算制度 (Japan group tax-sharing regime) — the 2022 successor to 連結納税, loss-offsetting in wholly-owned groups, and its interaction with restructuring"
translated_at: 2026-06-05T00:00:00.000Z
---

# グループ通算制度 (Japan group tax-sharing regime) — the 2022 successor to 連結納税, loss-offsetting in wholly-owned groups, and its interaction with restructuring

## Wiki route

This entry sits under [[corporate-strategy/INDEX|corporate-strategy INDEX]] and routes into [[finance/INDEX|finance INDEX]] for the group-capital overlay. It covers the **ongoing group-tax regime** that becomes a live design factor the moment a group sits under a parent — so read it directly after [[corporate-strategy/japan-holding-company-conversion|holding-company conversion]] (which creates the parent-subsidiary structure this regime taxes), alongside [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]] for how the loss-carryforward rules interact with splits, and with [[corporate-strategy/japan-gappei-merger-regime|合併 merger regime]] for how losses move on combination.

## TL;DR

**グループ通算制度 (group tsūsan seido, group tax-sharing system)** is Japan's regime for taxing a **wholly-owned corporate group** as an economic unit while keeping each company a **separate taxpayer**. It is the **successor to the old 連結納税制度 (consolidated-tax system)**, which was **abolished and replaced effective for fiscal years beginning on or after 1 April 2022**.

The single most important feature is **損益通算 (loss-offsetting)**: profits of one group company can be offset against losses of another in the same wholly-owned group, so the group pays tax on its **net** position rather than taxing winners while stranding losers' losses.

The headline change from the old regime:

- **連結納税 (old, pre-2022)** — the **parent filed one consolidated return** for the whole group; a correction in any subsidiary forced a group-wide recomputation, creating heavy administrative burden on the parent.
- **グループ通算 (new, from 2022)** — **each company files its own return** and computes its own tax, with loss-offsetting and certain items adjusted *across* the group. A later correction at one company is largely **ring-fenced (遮断)** to that company, sparing the rest a full re-file.

Two distinct concepts must not be confused — Japan has **two** group-tax frameworks running in parallel:

1. **グループ法人税制 (group corporation-tax rules)** — **mandatory and automatic** for *every* 100%-group, covering things like tax-free intra-group asset transfers and full dividend exclusion. No election.
2. **グループ通算制度 (group tax-sharing)** — **elective**, adds **損益通算** of profits and losses across the wholly-owned group. You opt in.

## 1. Why a Group-Tax Regime Exists

Absent any group regime, each company is taxed standalone: a parent earning ¥100 of profit pays tax on ¥100 even if a sister subsidiary lost ¥100 the same year — the group as a whole made nothing, yet pays tax. A group regime fixes this by letting the loss **offset** the profit. This is precisely the lever that makes a [[corporate-strategy/japan-holding-company-conversion|holding-company structure]] tax-efficient: once operating businesses sit as subsidiaries under a parent, the group can net their results instead of being penalized for housing winners and losers in separate legal entities.

The trade-off is complexity and commitment — which is why the regime is **elective**, scoped to **完全支配関係 (100%-ownership) groups only**, and hedged with anti-abuse rules so groups cannot cherry-pick losses opportunistically.

## 2. 連結納税 → グループ通算 — What the 2022 Reform Changed

| Feature | 連結納税制度 (pre-2022) | グループ通算制度 (from 2022) |
|---|---|---|
| Filing unit | **Parent files one** consolidated return | **Each company files its own** return |
| Tax computation | Group computed as a single entity | Individual computation + cross-group adjustments |
| Effect of a later correction | Group-wide recomputation | **遮断 (ring-fenced)** to the affected company in most cases |
| Loss-offsetting (損益通算) | Yes | **Yes — retained** (the core benefit survives) |
| Administrative burden | Heavy on the parent | Distributed; e-filing mandated |
| Scope | 100%-group | 100%-group (完全支配関係) |

The reform's purpose was to **keep the損益通算 benefit but kill the administrative drag** of single-return consolidation. Groups already in 連結納税 generally transitioned into グループ通算 automatically unless they filed a notice to opt out before the first fiscal year starting on/after 1 April 2022.

## 3. グループ法人税制 vs グループ通算制度 — Two Layers, Don't Confuse Them

This is the regime's most common point of confusion, mirroring the 株式分配-vs-パーシャルスピンオフ confusion that the [[corporate-strategy/japan-kabushiki-bunpai-spinoff-regime|株式分配 regime]] entry settles on the spin-off side:

| | グループ法人税制 (group corp-tax rules) | グループ通算制度 (group tax-sharing) |
|---|---|---|
| Election | **Mandatory / automatic** | **Elective** (opt in) |
| Scope | Every 100%-group | 100%-group that elects |
| Core content | Tax-deferred intra-group asset transfers (譲渡損益の繰延); **100% dividend exclusion** between group members; donation/receipt adjustments | **損益通算** of profits and losses across the group; group-level use of certain credits |
| Mental model | The **baseline** rules that apply to *any* wholly-owned group whether you like it or not | An **add-on** that nets the group's taxable income |

So a 100%-group **always** gets the グループ法人税制 baseline (e.g., it can shuffle assets between members without triggering gain), and **may additionally elect** グループ通算 to net profits against losses. The two coexist.

## 4. How 損益通算 Works (High Level)

Under グループ通算, in a given fiscal year:

- Each company computes its own income or loss.
- The **losses** of loss-making members are **allocated against the income** of profit-making members in proportion (按分) to their respective income, lowering the group's aggregate tax base.
- A later correction at one company is, in most cases, **遮断 (blocked)** from disturbing the others' computations — the key administrative improvement over the old single-return model.

The benefit is real cash: a profitable parent in a [[corporate-strategy/japan-holding-company-conversion|HoldCo structure]] can absorb an investment subsidiary's start-up losses, deferring or reducing group tax during the build-out phase — which is one reason the regime interacts so closely with restructuring strategy.

## 5. Interaction with Restructuring — Where This Domain Cares

グループ通算 is not just an accounting election; it shapes **whether and when** restructuring is tax-efficient:

- **Holding-company conversion** — after a [[corporate-strategy/japan-holding-company-conversion|持株会社化]], the new HoldCo + operating subsidiaries form a 100%-group eligible for グループ通算, so the conversion's *ongoing* tax efficiency (not just the one-time 適格 treatment) depends on this regime. The conversion mechanics route through [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式移転 / 株式交換]].
- **会社分割 and loss carryforwards** — when a business is carved out by [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割]], the **anti-loss-trafficking** rules (Corporation Tax Act art. 57 et seq.) interact with how 繰越欠損金 can be used inside a 通算 group; an ownership change can restrict otherwise-usable losses.
- **合併 and inherited losses** — a [[corporate-strategy/japan-gappei-merger-regime|qualified merger]] can carry a target's 繰越欠損金 to the survivor, again subject to the anti-trafficking tests; whether those losses then feed group-wide offsetting depends on the 通算 status of the survivor's group.
- **Joining / leaving a group (加入・離脱)** — when a company enters or exits a 100%-group (e.g., via acquisition or spin-off through [[corporate-strategy/japan-kabushiki-bunpai-spinoff-regime|株式分配]]), the regime has specific rules on **time-apportionment, asset mark-to-market on entry/exit, and treatment of pre-entry losses** — designed to stop groups importing or stripping losses around the membership boundary.

This is the "recurring tax-versus-structure tension" the [[corporate-strategy/INDEX|domain index]] points at: the *legal* structure (who owns whom) and the *tax* regime (how the group is netted) have to be designed together.

## 6. Why It Sits in Corporate Strategy, Not Just Tax

A group-tax regime might look like pure compliance, but it is a **strategic structuring input**:

- It is a primary reason groups adopt a [[corporate-strategy/japan-holding-company-conversion|pure-HoldCo]] model — a neutral apex over 100%-owned operating subsidiaries that can net results across the portfolio.
- It influences **where to house a loss-making new venture** (inside the 通算 group, so its losses offset group profits, vs outside it).
- It interacts with the **dividend-flow design** of a HoldCo (the 100% intra-group dividend exclusion under グループ法人税制 keeps cash moving up to the parent untaxed).
- For regulated financial groups, it overlays the HoldCo supervision that organizes the entities in [[finance/japan-listed-financial-groups-investable-universe|the listed-financial-groups universe]] and [[corporate-strategy/INDEX|corporate-strategy INDEX]].

## 7. Counterpoints and Caveats

- **Election is a commitment, not a toggle.** グループ通算 is opted into for the group and is not casually reversed; the decision interacts with each member's loss position and forecast.
- **遮断 is "in most cases," not absolute.** Certain group-level items and anti-abuse adjustments can still reach across companies; the ring-fencing is a major improvement, not a wall.
- **Two regimes, one group.** Do not conflate the mandatory グループ法人税制 baseline with the elective グループ通算 add-on — they answer different questions (intra-group transfers/dividends vs profit-loss netting).
- **Anti-trafficking rules govern loss movement.** Losses do not flow freely through restructurings; the same art. 57-series limits that constrain [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|splits]] and [[corporate-strategy/japan-gappei-merger-regime|mergers]] constrain what a 通算 group can ultimately use.
- **Rules evolve annually.** Group-tax detail is adjusted by successive 税制改正; confirm current treatment against NTA guidance before relying on specifics.

## Related

- [[corporate-strategy/INDEX|corporate-strategy INDEX]]
- [[corporate-strategy/japan-holding-company-conversion|holding-company conversion]]
- [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転 regime]]
- [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]]
- [[corporate-strategy/japan-gappei-merger-regime|合併 merger regime]]
- [[corporate-strategy/japan-kabushiki-bunpai-spinoff-regime|株式分配 spin-off regime]]
- [[corporate-strategy/spinoff-decision-tree-japan|spinoff decision tree Japan]]
- [[finance/japan-listed-financial-groups-investable-universe|Japan listed-financial-groups investable universe]]
- [[finance/INDEX|finance INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- 国税庁「グループ通算制度」: https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/hojin/group_tsusan/index.htm
- 国税庁 法人税法基本通達 1-4-5 (組織再編成): https://www.nta.go.jp/law/tsutatsu/kihon/hojin/01/01_04_05.htm
- METI 経済法制 policy portal: https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/
- 法人税法 (Corporation Tax Act, Act No. 34 of 1965 — グループ通算 / 組織再編成 provisions): https://laws.e-gov.go.jp/document?lawid=340AC0000000034
- FSA English portal (group / holding-company supervision context): https://www.fsa.go.jp/en/

---

> [!info] 校核状态
> confidence: **likely**. The replacement of 連結納税制度 by グループ通算制度 effective for fiscal years beginning on/after 1 April 2022, the retention of 損益通算, the shift to per-company filing with 遮断 of corrections, the 完全支配関係 scope, and the distinction from the mandatory グループ法人税制 baseline are confirmed against NTA materials. Detailed mechanics (loss-allocation, entry/exit mark-to-market, anti-trafficking interaction) are technical and revised by annual 税制改正 — confirm current treatment per NTA guidance and specialist advice.
