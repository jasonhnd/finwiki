---
title: "株式交付 (kabushiki koufu) — share-for-share acquisition regime under Japanese Companies Act 2021 revision"
aliases:
  - "kabushiki-koufu-stock-distribution-regime"
  - "株式交付"
  - "share-for-share acquisition japan"
  - "kabushiki koufu regime"
  - "japan share delivery system"
domain: "corporate-strategy"
created: 2026-05-25
last_updated: 2026-07-29
last_tended: 2026-07-29
review_by: 2027-01-29
confidence: likely
tags: [corporate-strategy, m-and-a, tax, japan, share-acquisition, 2021-companies-act-revision]
status: active
sources:
  - "https://laws.e-gov.go.jp/document?lawid=417AC0000000086"
  - "https://www.moj.go.jp/MINJI/minji07_00214.html"
  - "https://www.nta.go.jp/law/tsutatsu/kihon/hojin/01/01_04_05.htm"
  - "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1545.htm"
  - "https://www.mof.go.jp/tax_policy/summary/corporation/c06.htm"
  - "https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/"
  - "https://www.fsa.go.jp/en/"
---

# 株式交付 (kabushiki koufu) — share-for-share acquisition regime under Japanese Companies Act 2021 revision

## Wiki route

This entry sits under [[corporate-strategy/INDEX|corporate-strategy INDEX]] and routes into [[finance/INDEX|finance INDEX]] for transaction-finance context. Read with [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]] for the contrast against split-mechanism reorganizations, [[corporate-strategy/japan-kabushiki-bunpai-spinoff-regime|partial spinoff tax deferral]] for the distribution-side parallel, [[corporate-strategy/spinoff-decision-tree-japan|spinoff decision tree Japan]] for option-set context, and [[finance/japan-tender-offer-process|Japan tender offer process]] for the public-bid alternative.

## TL;DR

**株式交付 (kabushiki koufu)** is a Japanese Companies Act mechanism introduced in the **2021 Companies Act revision** (effective 2021-03-01) that enables a Japanese stock company to acquire another Japanese stock company's shares **using its own shares as consideration**, while keeping the target as a subsidiary rather than a wholly-owned subsidiary. The acquirer issues new shares directly to selling shareholders of the target in exchange for target shares.

This sits **between** two pre-existing regimes:

- **株式交換 (kabushiki koukan, share exchange)** — makes the target a **wholly-owned** subsidiary; requires 100% acquisition
- **株式移転 (kabushiki iten, share transfer)** — creates a **new holding company** above existing entity; only used for HoldCo conversions

株式交付 fills the gap: it enables share-as-consideration acquisitions where the acquirer wants a controlling stake (e.g., 50-90%) without forcing 100% ownership. Tax treatment under specified conditions allows the **selling shareholders to defer capital gains** on the share exchange (limited to the share portion of consideration), making it economically equivalent to a US "B reorganization" in spirit.

## 1. Why The 2021 Regime Was Created

Pre-2021 problem: A Japanese acquirer wanting to use its own shares to acquire a Japanese target faced a procedural trap:

- 株式交換 required acquiring 100% of target — too aggressive when minority retention preferred
- Direct share issuance to selling shareholders (in-kind capital increase) was complex; tax treatment uncertain for sellers
- TOB + cash consideration possible but required cash from acquirer balance sheet
- TOB + share exchange (公開買付 + 株式交換) was a 2-step sequence with timing and tax friction

Result: cross-shareholding unwinding, friendly carve-out acquisitions, and PE-backed roll-ups where parties wanted share consideration were forced into awkward structures. The Ministry of Justice's 2021 reform created **株式交付** to fill the gap explicitly.

## 2. Mechanism

| Element | Detail |
|---|---|
| Acquirer | Japanese stock company (株式会社) |
| Target | Japanese stock company |
| Consideration | Acquirer's own shares (cash / bond mixable, but share portion required for tax deferral) |
| Ownership after | Target becomes a **subsidiary** (>50% required, can be less than 100%) |
| Decision | Acquirer shareholders' meeting special resolution (2/3 threshold) |
| Selling shareholders | Each makes individual decision to tender / not tender; **not all shareholders required to participate** |
| Tax — selling shareholder | Gain on the parent-share portion can be deferred only if the statutory conditions are met, including the 80% consideration test and post-transaction family-company exclusion |
| Tax — acquirer | Determined under the applicable corporate-tax rules; this table does not label every 株式交付 “qualified” |
| Filings | Securities filing if subject to FIEA disclosure; ordinary M&A filings |

Sources: mechanism and procedure follow the Companies Act; shareholder tax treatment follows NTA No.1545 and the Ministry of Finance summary. “Subsidiary” is a legal-control result, not a universal arithmetic shortcut independent of voting-right and control facts. ^[Sources: https://laws.e-gov.go.jp/document?lawid=417AC0000000086; https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1545.htm; https://www.mof.go.jp/tax_policy/summary/corporation/c06.htm.]

## 3. Comparison Of Three Share-Side Reorganization Regimes

| Regime | Outcome | Share-for-share required | Minimum % | Use case |
|---|---|---|---|---|
| **株式交換 (kabushiki koukan)** | Target becomes wholly-owned subsidiary | Yes (or cash/mixed allowed with downside) | 100% | Full takeover with share consideration |
| **株式移転 (kabushiki iten)** | New holding company formed above existing entities | Yes | 100% (of each transferred) | Pure holding-company conversion or merger-of-equals |
| **株式交付 (kabushiki koufu)** | Target becomes (controlled) subsidiary; not wholly-owned | Yes (share portion for tax deferral) | >50% | Partial controlling acquisition with share consideration |

Sources: the legal outcomes are summarized from the Companies Act. Tax deferral is conditional and is not established merely by selecting one of these legal forms. ^[Sources: https://laws.e-gov.go.jp/document?lawid=417AC0000000086; https://www.mof.go.jp/tax_policy/summary/corporation/c06.htm.]

The decision tree:

- Want 100% ownership + share consideration → **株式交換**
- Want to convert to HoldCo structure → **株式移転**
- Want controlling stake (50-99%) + share consideration → **株式交付**

For asset-level (vs share-level) reorganizations, see [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割]].

## 4. Tax Treatment Mechanics

The selling shareholder receives acquirer shares plus possibly cash / bonds. Tax treatment splits:

| Consideration portion | Tax treatment to seller |
|---|---|
| Parent-share portion | Gain corresponding to the parent shares can be deferred if all conditions are met |
| Cash / other-property portion | Gain corresponding to non-share consideration is not covered by that deferral |

Sources: the table is scoped to the shareholder deferral described in NTA No.1545 and the Ministry of Finance organization-restructuring summary. ^[Sources: https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1545.htm; https://www.mof.go.jp/tax_policy/summary/corporation/c06.htm.]

Conditions for share-portion deferral include:

- Acquirer issues its **own shares** (not subsidiary shares) — direct issuance
- The target becomes the acquirer's subsidiary under the statutory 株式交付
- Parent shares represent at least **80%** of the total consideration value
- The post-transaction parent does not fall within the specified excluded family-company case

The 80% consideration test and excluded post-transaction family-company case are stated in those same sources.

## 5. Practical Use Cases

| Use case | Why 株式交付 fits |
|---|---|
| **Friendly partial-control acquisition** | Acquirer wants 60-80% ownership without forcing 100% squeeze-out |
| **Strategic alliance via cross-shareholding shift** | Convert mutual minority holdings into controlling stake with share consideration |
| **Pre-IPO consolidation** | Parent consolidates affiliated entities into subsidiary structure ahead of IPO |
| **Cross-shareholding unwinding** | Replace cross-held legacy positions with cleaner controlling-stake structure |

Sources: these are illustrative structure-selection hypotheses derived from the statutory mechanism, not claims about adoption frequency or named transactions. Availability still requires two Japanese stock companies and satisfaction of every legal, tax, disclosure, and competition condition. ^[Sources: https://www.moj.go.jp/MINJI/minji07_00214.html; https://laws.e-gov.go.jp/document?lawid=417AC0000000086.]

Note: 株式交付 is **only available between Japanese stock companies**. Cross-border share-for-share acquisitions still typically use the [[finance/cross-border-m-a-japan|cross-border M&A Japan]] structures rather than 株式交付 directly.

## 6. Procedural Requirements

The 株式交付 procedure under Companies Act art. 774-2 through 774-11:

1. **Acquirer prepares 株式交付計画 (share-delivery plan)** specifying target, consideration ratio, terms
2. **Acquirer board approves plan**
3. **Plan disclosed at acquirer head office** for 2 weeks before shareholders' meeting
4. **Acquirer shareholders' special resolution** approves plan (2/3 threshold)
5. **Solicitation of target shareholders** to tender shares (each makes individual decision)
6. **Tendering target shareholders agree to terms**
7. **Acquirer issues new shares to tendering target shareholders**
8. **Acquirer takes ownership of tendered target shares**
9. **Outcome: target is subsidiary if >50% shares tendered; if <50%, the 株式交付 fails**

If the threshold is not met, the entire transaction is rescinded — there's a "minimum tender" risk similar to a TOB minimum-tender condition.

## 7. Comparison With TOB-Plus-Squeeze-Out Path

| Dimension | 株式交付 | TOB + Squeeze-out |
|---|---|---|
| Consideration | Acquirer shares (with tax deferral) | Cash (typically) |
| Ownership outcome | Partial control (>50% to <100%) | Full ownership (100% via squeeze-out) |
| Tax to seller | Conditional deferral for the parent-share portion, including the 80% test | Cash disposition generally realizes gain |
| Approval threshold | Acquirer shareholders + individual seller decisions | Per [[finance/japan-tender-offer-process|TOB process]] + [[finance/japan-mbo-and-squeeze-out-process|squeeze-out]] |
| Timeline | Single integrated procedure | Multi-step (TOB → squeeze-out) |
| Use case | Strategic acquisition with share consideration | Cash-funded full takeover |

Sources: this is a legal / consideration comparison based on the Companies Act, NTA tax guidance, and the general tender-offer route. It does not state that either path is available or superior for a particular issuer. ^[Sources: https://laws.e-gov.go.jp/document?lawid=417AC0000000086; https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1545.htm; https://www.fsa.go.jp/policy/kaiji/tob/index.html.]

See [[finance/japan-tender-offer-process|Japan tender offer process]] for the TOB-side mechanism and [[finance/japan-mbo-and-squeeze-out-process|Japan MBO / squeeze-out process]] for the post-TOB take-private route.

## 8. Comparison With 会社分割 + 株式分配 (Spinoff Path)

株式交付 is an **acquisition** mechanism (buying into a target). 会社分割 + 株式分配 (the [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|kaisha bunkatsu]] + [[corporate-strategy/japan-kabushiki-bunpai-spinoff-regime|partial spinoff]] path) is a **divestiture** mechanism (separating an existing business). They occupy opposite sides of the corporate-reorganization map.

| Direction | Mechanism |
|---|---|
| Acquire control of separate entity using own shares | 株式交付 (this entry) |
| Acquire 100% of separate entity using own shares | 株式交換 |
| Form new HoldCo over existing entities | 株式移転 |
| Divest business by splitting into subsidiary | 会社分割 (新設分割 then distribute) |
| Divest subsidiary while retaining minority stake | パーシャルスピンオフ (kabushiki bunpai with regime) |
| Divest subsidiary with no retained stake | スピンオフ (kabushiki bunpai full distribution) |
| Acquire 100% via cash | TOB + 株式併合 squeeze-out |

Sources: the table is a directional map of Companies Act mechanisms. Each row is subject to its own tax, securities, creditor, minority-holder, and approval rules. ^[Sources: https://laws.e-gov.go.jp/document?lawid=417AC0000000086; https://www.mof.go.jp/tax_policy/summary/corporation/c06.htm.]

## 9. Counterpoints

- 株式交付 has limited adoption since 2021 introduction relative to alternative paths — partly because cash-funded TOB remains the dominant Japan M&A pattern
- Tax-deferral conditions are technical; advisor-driven structuring required
- Acquirer share dilution may be unacceptable to existing shareholders even if procedurally feasible
- Foreign-acquirer-side cannot use 株式交付 directly (must work via Japan subsidiary or alternative structure)
- The "fails-if-below-50%" trigger creates execution risk that pure TOB doesn't have (TOB can still execute at lower than-targeted tender amount in some structures)

## 10. Open Questions

- Will 株式交付 adoption increase as more Japan listed companies see it as a softer alternative to full-acquisition TOB?
- How will 株式交付 interact with future cross-border M&A reforms — could a parallel mechanism be created for foreign-acquirer use?
- What is the optimal hybrid structure for transactions that need partial cash + share consideration?
- How does the regime interact with post-acquisition minority shareholder protections (oppression remedies, dissenting-shareholder appraisal rights)?
- Will the regime see use in PE-backed Japanese acquisitions as a way to retain founder / management equity?

## Related

- [[corporate-strategy/INDEX|corporate-strategy INDEX]]
- [[corporate-strategy/japan-kabushiki-bunpai-spinoff-regime|partial spinoff tax deferral]]
- [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]]
- [[corporate-strategy/spinoff-decision-tree-japan|spinoff decision tree Japan]]
- [[finance/japan-tender-offer-process|Japan tender offer process]]
- [[finance/japan-mbo-and-squeeze-out-process|Japan MBO / squeeze-out process]]
- [[finance/japan-acquisition-finance|Japan acquisition finance]]
- [[finance/cross-border-m-a-japan|cross-border M&A Japan]]
- [[finance/japan-m-a-deal-process-comparison-matrix|Japan M&A deal-process comparison matrix]]
- [[finance/japan-cross-shareholding-unwinding-economics|Japan cross-shareholding unwinding economics]]
- [[INDEX|FinWiki index]]

## Sources

- Companies Act (会社法) provisions on 株式交付: https://laws.e-gov.go.jp/document?lawid=417AC0000000086
- 法務省 株式交付制度 解説: https://www.moj.go.jp/MINJI/minji07_00214.html
- 国税庁 法人税法基本通達: https://www.nta.go.jp/law/tsutatsu/kihon/hojin/01/01_04_05.htm
- 国税庁 No.1545「株式等を対価とする株式の譲渡に係る譲渡所得等の課税の特例」: https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1545.htm
- 財務省「組織再編税制に関する資料」: https://www.mof.go.jp/tax_policy/summary/corporation/c06.htm
- METI economic-affairs policy portal: https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/
- FSA English portal: https://www.fsa.go.jp/en/

---

> [!info] 校核状态
> confidence: **likely**. Statutory regime is fully effective since 2021-03; mechanism is settled. Tax-treatment specifics depend on case-by-case structuring. Adoption rate and future regime evolution remain to be observed.
