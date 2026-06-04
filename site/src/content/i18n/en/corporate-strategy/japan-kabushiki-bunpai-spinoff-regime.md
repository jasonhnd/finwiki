---
source: corporate-strategy/japan-kabushiki-bunpai-spinoff-regime
source_hash: 55cb69a28774c1ec
lang: en
model: claude-opus-4-8
status: machine
fidelity: ok
title: "株式分配 (kabushiki bunpai) — Japan share-distribution / pure spin-off regime (適格株式分配) and how it differs from パーシャルスピンオフ"
translated_at: 2026-06-05T00:00:00.000Z
---

# 株式分配 (kabushiki bunpai) — Japan share-distribution / pure spin-off regime (適格株式分配) and how it differs from パーシャルスピンオフ

## Wiki route

This entry sits under [[corporate-strategy/INDEX|corporate-strategy INDEX]] and routes into [[finance/INDEX|finance INDEX]] for the capital-markets overlay. It is the **distribution-side** spin-off mechanism — the in-kind dividend that delivers subsidiary shares to a parent's own shareholders. Read it directly against [[corporate-strategy/partial-spinoff-tax-deferral|partial spinoff tax deferral]] (the *retained-stake* variant of the same idea), [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]] (the *carve-out plumbing* that usually precedes a distribution), and [[corporate-strategy/spinoff-decision-tree-japan|the spinoff decision tree]] for placement against every other divestiture route.

## TL;DR

**株式分配 (kabushiki bunpai, share distribution)** is the Japanese mechanism by which a parent company distributes **the shares of a wholly-owned subsidiary to its own shareholders** as an in-kind dividend (現物分配). It is the legal core of a **classic / full spin-off (スピンオフ)** — the parent ends up owning **nothing** of the subsidiary, which becomes an independent listed (or listable) company held directly by the former parent's shareholders in proportion to their existing holdings.

The key distinction this entry settles — the one the [[corporate-strategy/INDEX|domain index]] flags as "commonly confused":

- **株式分配 (full spin-off)** — parent distributes **100%** of the subsidiary and retains **0%**. The qualified form is **適格株式分配**, created by the 2017 spin-off tax reform.
- **パーシャルスピンオフ (partial spin-off)** — parent distributes most of the subsidiary but **retains up to 20%**. This is the 2023 special measure documented in [[corporate-strategy/partial-spinoff-tax-deferral|partial spinoff tax deferral]] — a relaxation built *on top of* the 株式分配 framework.
- **会社分割 (company split)** — the *asset-level* mechanism that moves a **business** into a subsidiary; it is the **plumbing** often used to create the wholly-owned subsidiary that is then distributed. See [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|the 会社分割 tax regime]].

In short: **会社分割 creates the box, 株式分配 hands the box to shareholders.** A "spinoff" in the everyday sense is usually 新設分割 (to form the subsidiary) followed by 適格株式分配 (to distribute it), executed as one planned sequence.

The statutory layer:

- **Companies Act art. 454 / 剰余金の配当** governs the in-kind distribution (現物配当) used to deliver the shares; a 100%-subsidiary distribution to all shareholders pro rata is the qualifying pattern.
- **Corporation Tax Act art. 2(12-15-2) / 2(12-15-3)** and surrounding 組織再編成 provisions define **適格株式分配** and its tax-deferred treatment.
- **適格株式分配** turns off both the **corporate-level gain** on the distributed shares and the **shareholder-level deemed dividend / capital gain** that a normal in-kind dividend would trigger.

## 1. Two Faces of a Spin-off in Japanese Tax Law

The 2017 spin-off reform actually defined **two** qualified spin-off patterns. Both aim at the same economic result — a business becomes an independent company held by the original shareholders — but they reach it differently:

| Pattern | Mechanism | What moves | Typical starting point |
|---|---|---|---|
| **適格株式分配 (qualified share distribution)** | 現物分配 of subsidiary shares | **Shares** of an existing wholly-owned subsidiary | Parent already holds the target as a 100% subsidiary |
| **単独新設分割型分割 (independent incorporation-type split)** | 新設分割 whose consideration goes **straight to the parent's shareholders** | **A business**, carved into a new company whose shares land with shareholders | Business still sits inside the parent and must first be carved out |

This entry focuses on **適格株式分配**, the more common route, because most spin-offs first use a [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|新設分割]] to put the business into a clean 100% subsidiary, *then* distribute that subsidiary via 株式分配. The split-type-split (分割型分割) collapses those two steps into one for businesses not yet siloed.

## 2. What "株式分配" Means Precisely

株式分配 is a **defined term** in the Corporation Tax Act: a 現物分配 (in-kind distribution) in which the distributing corporation hands over the shares of a **完全子法人 (wholly-owned subsidiary)** to its shareholders, such that after the distribution the shareholders hold the subsidiary directly **in proportion to their shareholding in the parent**.

Three features are essential:

1. **It is a dividend, not a sale.** No cash changes hands at the shareholder level; shareholders receive subsidiary stock instead of (or as) a distribution out of the parent.
2. **It must be pro rata.** Every shareholder receives subsidiary shares strictly in line with their existing parent stake. A non-pro-rata or selective distribution breaks the regime.
3. **The subsidiary must be 100%-owned immediately before.** 株式分配 distributes a 完全子法人; partial subsidiaries do not qualify (that is precisely the gap the [[corporate-strategy/partial-spinoff-tax-deferral|パーシャルスピンオフ]] regime later addressed from the *retention* side).

## 3. 適格株式分配 — the Qualified Tests

A bare 現物分配 of appreciated subsidiary shares would normally trigger tax twice — a corporate gain at the parent and a deemed dividend / capital gain at the shareholders. **適格株式分配** switches both off. To qualify, the distribution must satisfy a set of tests whose spirit matches the broader 組織再編成 framework in [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|the 会社分割 regime]]:

- **No prior control relationship that persists** — the parent must *not* be under the control of another party that would continue to control the spun-off company; the spin-off must genuinely cut the subsidiary loose (the "independence" spirit of a true spin-off).
- **No expected post-distribution control** — there must be no anticipated arrangement re-establishing a controlling relationship over the spun-off company after the distribution.
- **Pro-rata distribution of all subsidiary shares** — every share of the 完全子法人 is distributed, strictly in proportion to shareholders' parent holdings.
- **Employee retention (従業者継続)** — roughly **80%** of the subsidiary's employees are expected to continue in its business after the distribution.
- **Business continuation (事業継続)** — the subsidiary's main business is expected to continue after the spin-off.
- **Specified-officer continuation** — key officers (特定役員) of the subsidiary are expected to continue.

When these hold, the distributed shares move at **book value**, the parent recognizes **no gain**, and the shareholders are treated as simply **rolling their basis** into the new direct holding — **no immediate tax** at either level.

## 4. Tax Consequences — Qualified vs Non-Qualified

| | 適格株式分配 (qualified) | 非適格 現物分配 (non-qualified) |
|---|---|---|
| Parent-level gain on distributed shares | **None** — book-value transfer | Mark-to-market; embedded gain crystallizes |
| Shareholder-level tax | **None** — basis carries into the new direct holding | **Deemed dividend (みなし配当)** + possible capital gain |
| Subsidiary's tax attributes | Generally preserved | Disturbed; can interact with loss-limitation rules |
| Net effect | Tax-neutral separation | Double-layer tax — usually a deal-breaker |

The shareholder-level **deemed dividend (みなし配当)** is the headline risk a non-qualified distribution creates: shareholders can owe dividend tax on stock they merely received in place of their old shares, with no cash to pay it — the same "tax on illiquid receipt" trap that the [[corporate-strategy/japan-business-succession-jigyou-shoukei|business-succession regime]] tackles on the inheritance side. 適格 status is therefore not optional in practice; it is the whole point.

## 5. 株式分配 vs パーシャルスピンオフ vs 会社分割 — the Confusion Settled

This is the comparison the domain index singles out. The three are different layers, not alternatives:

| | 適格株式分配 (full spin-off) | パーシャルスピンオフ (partial) | 会社分割 (company split) |
|---|---|---|---|
| Level it operates on | **Share** distribution to shareholders | **Share** distribution to shareholders | **Asset / business** transfer |
| Parent's residual stake | **0%** | **Up to 20%** retained | N/A (no distribution by itself) |
| Reaches shareholders directly? | Yes — they hold the subsidiary | Yes — minus the retained slice | No — shares go to a successor company |
| Role | Hands an existing subsidiary to shareholders | Same, but keeps a minority alliance stake | **Creates** the subsidiary to be distributed |
| Regime | 適格株式分配 (2017) | Special measure (2023) — see [[corporate-strategy/partial-spinoff-tax-deferral|partial spinoff tax deferral]] | 適格分割 — see [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]] |

The decisive mental model: **会社分割 is the verb that builds the subsidiary; 株式分配 is the verb that gives it away; パーシャルスピンオフ is 株式分配 with a 20% leash.** A complete classic spin-off is usually **新設分割 → 適格株式分配** run as a single plan. The full option set sits in [[corporate-strategy/spinoff-decision-tree-japan|the spinoff decision tree]].

## 6. Why a Parent Runs a Full Spin-off

- **Pure-play focus / conglomerate discount**: separating an unrelated business lets each company be valued on its own multiple — the classic argument that also drives the cases in [[business/japan-listed-corp-strategic-restructuring-matrix|the listed-corp strategic-restructuring matrix]].
- **No-cash separation**: unlike a sale, a spin-off needs **no buyer and no financing** — value passes to existing shareholders rather than to a third party, contrasting with the cash routes in [[finance/japan-mbo-and-squeeze-out-process|the MBO / squeeze-out process]].
- **Management incentive alignment**: the spun-off company gets its own equity currency and an independent board.
- **Tax neutrality**: 適格株式分配 makes the separation tax-free at both levels — the feature that distinguishes a spin-off from an outright [[finance/japan-acquisition-finance|financed]] disposal, which is taxable to the seller.

The trade-off versus パーシャルスピンオフ is alliance retention: a **full** 株式分配 severs the parent entirely, whereas the partial regime lets the parent keep a strategic minority — the reason the 2023 measure was added.

## 7. Counterpoints and Caveats

- **適格 is the load-bearing requirement.** A spin-off that fails the qualified tests inflicts a double tax hit (corporate gain + shareholder deemed dividend) and is rarely worth doing. Confirm 適格 status per transaction against NTA guidance.
- **株式分配 ≠ パーシャルスピンオフ.** They share machinery but differ on the single most important parameter — retained stake (0% vs up to 20%). Do not treat them as interchangeable.
- **It needs a 100% subsidiary first.** If the business is still inside the parent, a [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割]] (or the 分割型分割 one-step variant) must precede the distribution.
- **Listing mechanics apply.** Spinning off a business as an independently listed company invokes exchange listing and disclosure rules — see [[securities/japan-ipo-listing-disclosure-route|the IPO listing / disclosure route]] — and FSA disclosure obligations referenced in [[finance/japan-large-shareholding-disclosure|large-shareholding disclosure]].
- **Policy guidance evolves.** METI refreshes its spin-off手引 periodically (latest editions 2024–2025); treat regime detail as needing re-confirmation against the current METI / NTA materials.

## Related

- [[corporate-strategy/INDEX|corporate-strategy INDEX]]
- [[corporate-strategy/partial-spinoff-tax-deferral|partial spinoff tax deferral]]
- [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]]
- [[corporate-strategy/spinoff-decision-tree-japan|spinoff decision tree Japan]]
- [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転 regime]]
- [[corporate-strategy/japan-business-succession-jigyou-shoukei|business succession (事業承継)]]
- [[finance/japan-mbo-and-squeeze-out-process|Japan MBO / squeeze-out process]]
- [[finance/japan-acquisition-finance|Japan acquisition finance]]
- [[finance/japan-large-shareholding-disclosure|Japan large-shareholding disclosure]]
- [[securities/japan-ipo-listing-disclosure-route|Japan IPO listing / disclosure route]]
- [[business/japan-listed-corp-strategic-restructuring-matrix|Japan listed-corp strategic-restructuring matrix]]
- [[finance/INDEX|finance INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- METI partial-spinoff / spin-off regime overview (株式分配・スピンオフ税制): https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/spinoff.html
- METI「スピンオフ」の活用に関する手引（制度編, 令和7年7月）: https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/pdf/20250714-spinoff.pdf
- 国税庁 法人税法基本通達 1-4-5 (組織再編成): https://www.nta.go.jp/law/tsutatsu/kihon/hojin/01/01_04_05.htm
- Companies Act (会社法) — 剰余金の配当 / 現物配当 (art. 454 et seq.): https://laws.e-gov.go.jp/document?lawid=417AC0000000086
- FSA English portal (disclosure rules interacting with spin-offs): https://www.fsa.go.jp/en/

---

> [!info] 校核状态
> confidence: **likely**. The 株式分配 / 適格株式分配 framework (2017 spin-off reform), the pro-rata 100%-subsidiary requirement, the ≈80% employee-retention and business/officer-continuation tests, and the distinction from the 2023 パーシャルスピンオフ measure are confirmed against METI and NTA materials. Exact article citations and qualified-test parameters are technical and fact-specific — confirm per transaction against current NTA / METI guidance.
