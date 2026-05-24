---
title: "Master Trust Bank of Japan operating model"
aliases:
  - "master-trust-bank-operating-model"
  - "日本マスタートラスト信託銀行 operating model"
  - "MTBJ operating model"
  - "Master Trust Bank operating depth"
domain: banking
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [banking, trust-bank, custody, asset-administration, pension, settlement-infrastructure, master-trust]
status: active
sources:
  - "https://www.mastertrust.co.jp/"
  - "https://www.mastertrust.co.jp/about/overview.html"
  - "https://www.mastertrust.co.jp/business/asset-management.html"
  - "https://www.mastertrust.co.jp/company/information.html"
  - "https://www.shintaku-kyokai.or.jp/en/pdf/trusts_under_management.pdf"
  - "https://www.fsa.go.jp/menkyo/menkyoj/kenei.pdf"
  - "https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx"
  - "https://www.jasdec.com/en/system/"
  - "https://www.jpx.co.jp/jscc/en/cash/cash/assumption-obligation/dvp.html"
  - "https://www.gpif.go.jp/"
---

# Master Trust Bank of Japan operating model

## Wiki route

This entry sits under [[banking/INDEX|banking index]]. Read it with the entity anchor [[JapanFG/master-trust-bank|日本マスタートラスト信託銀行 (MTBJ)]], the operating peer [[JapanFG/custody-bank|日本カストディ銀行 (CBJ)]], the landscape summary [[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]], the operating comparison [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]], and the cross-camp matrix [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|Japan trust bank vs global custodian comparison matrix]]. Pair it with the settlement-rail entries [[securities/japan-securities-depository-center|JASDEC]] and [[securities/japan-securities-clearing-corp|JSCC]] for the infrastructure side, with [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]] for the regulatory boundary, with the shareholder-side trust-bank pages [[JapanFG/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]] and [[JapanFG/nochu-trust-bank|農中信託銀行]], and with [[finance/japan-listed-financial-groups-investable-universe|Japan listed financial groups investable universe]] for the institutional context.

## TL;DR

The Master Trust Bank of Japan (MTBJ — 日本マスタートラスト信託銀行) is a custody-only specialist trust bank licensed under the dual 銀行法 + 信託業法 route, owned by a four-way consortium of MUFG Trust (46.5%), Nippon Life (33.5%), Meiji Yasuda Life (10%), and a Norinchukin-affiliated trust bank (10%). Its operating model bundles three core functions — pension trust administration, securities-investment-trust administration, and securities custody — on top of a JASDEC + BoJ JGB direct-settlement core. MTBJ does not write loans, take deposits, or run a retail or PB business; it is an institutional back office. Its name appears at the top of nearly every listed-company shareholder register as 「日本マスタートラスト信託銀行（信託口）」, but this is a nominee surface — the beneficial owners are the GPIF, corporate pensions, and large asset managers whose mandates it administers. With CBJ, MTBJ forms the two-anchor domestic custody infrastructure of Japan.

## 1. 機関位置

| Field | MTBJ |
|---|---|
| Legal name (JA) | 株式会社日本マスタートラスト信託銀行 |
| Legal name (EN) | The Master Trust Bank of Japan, Ltd. |
| Established | 2000-05 |
| HQ | 東京都港区浜松町 |
| License route | 銀行法 + 信託業法 (custody-only 信託銀行 / 信託兼営銀行) |
| Listing | Non-listed (4-way consortium JV) |
| Primary regulator | 金融庁 (FSA) — bank supervision + trust-business supervision |
| Industry body | 信託協会 (Trust Companies Association of Japan) |
| Functional position | Asset-administration specialist (no loans, no deposits, no PB, no real-estate trust) |
| Public AUC anchor | Approximately ¥700 trillion+ trust assets under custody (2024 public summary) ^[ambiguous] |
| Peer | [[JapanFG/custody-bank|Custody Bank of Japan (CBJ)]] |

### Shareholder structure (public disclosure)

| Shareholder | Stake | Reading |
|---|---|---|
| [[JapanFG/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]] (MUFG group) | 46.5% | Lead industrial shareholder; provides Mitsubishi-side mandate flow and trust-bank operating know-how |
| [[JapanFG/nippon-life|日本生命]] | 33.5% | Largest life-insurer shareholder; provides life-insurance separate-account custody plus corporate-pension mandate flow |
| [[JapanFG/meiji-yasuda|明治安田生命]] | 10.0% | Second life-insurer shareholder; rounds out the life-insurer-side mandate base |
| [[JapanFG/nochu-trust-bank|農中信託銀行]] (Norinchukin group) | 10.0% | Cooperative-finance shareholder; provides JA Bank / 農林系 mandate flow |

The 46.5% MUFG-trust stake is below 50% by design — life-insurer and cooperative-finance shareholders retain a structural block, which keeps MTBJ positioned as a multi-shareholder utility rather than a fully captive MUFG-internal back office. ^[inferred]

### Why a custody-only trust bank exists

A custody-only trust bank under the 銀行法 + 信託業法 dual route can:

1. participate **directly** in JASDEC book-entry transfer, JSCC central-counterparty clearing, and BoJ JGB book-entry settlement — none of which is open to a pure 信託会社 under 信託業法 alone;
2. issue trust-account ("信託口") nominee names that satisfy the Japanese securities-law and tax-treatment expectations for institutional separate-account holdings;
3. avoid the capital and supervisory load of a full commercial bank because it carries no loan book and only minimal deposit-funded exposure (custody fees, settlement-account residuals, and 預金保険機構 participation).

The MTBJ model was built specifically to let pension funds and investment trusts share a single high-volume, low-margin back-office utility rather than each rebuilding the same processing capacity internally. ^[inferred]

## 2. 主要業務

### Business-line map

| Segment | Core function | Typical client base | What it is not |
|---|---|---|---|
| **年金信託 (Pension trust administration)** | Trust contract for 厚生年金基金, 確定給付企業年金 (DB), and 確定拠出年金 (DC) — record-keeping, asset-owner reports, benefit-payment ops, member balances | GPIF, large corporate DB plans, DC plans (often through DC sponsor-side admins), 厚生年金基金 | Not the investment manager — investment discretion sits with [[JapanFG/mitsubishi-ufj-asset-management|asset managers]] and the asset owner's trustees |
| **投資信託受託 (Securities-investment-trust admin)** | Trust contract for 公募投信 and 私募投信 — fund accounting, NAV calculation, holdings register, distribution processing, audit support | [[JapanFG/mitsubishi-ufj-asset-management|MUFG asset management arm]], [[JapanFG/nomura-asset-management|Nomura AM]], [[JapanFG/sbi-asset-management|SBI AM]], other asset managers using MTBJ as 受託銀行 | Not the fund sponsor or the distributor; not the fund manager |
| **有価証券カストディ (Securities custody)** | Safekeeping of equities, JGB, corporate bonds, foreign securities; book-entry registration; corporate-actions processing; dividend / interest receipt; tax reclaim ops | Pension plans, asset managers, life insurers, foreign global custodians needing a Japan sub-custodian | Not a proprietary investor; the 「信託口」 nominee label is a recordkeeping construct |
| **議決権行使指図 (Voting administration)** | Mechanical voting execution per asset-owner / manager instruction; ICJ electronic-voting platform connection; proxy-advisor (ISS / Glass Lewis) materials handling | Asset managers, pension plans, foreign investors using MTBJ as sub-custodian | Not a discretionary voter — MTBJ does not form its own voting opinion |
| **特定金外信託 (Specified-money-trust ops)** | Special-purpose investment trust structures (特金) for corporate treasury and financial-institution assets | Corporates, regional banks, insurers using 特金 as an investment vehicle | Not a discretionary asset manager |

### Operating-function breakdown

| Function | Description |
|---|---|
| Safekeeping & book-entry admin | Direct connection to [[securities/japan-securities-depository-center|JASDEC]] book-entry transfer; BoJ JGB direct-account holder; recordkeeping for 投信受託; cash-settlement-account operation |
| Settlement (cash equity) | DVP-X1 / DVP-X2 / DVP-X3 connection via JASDEC for retail and institutional equity settlement |
| Settlement (JGB) | Direct participation in the BoJ JGB book-entry system, providing JGB custody for pension and 投信 mandates |
| Settlement (corporate bond / CP) | Book-entry transfer via JASDEC for 社債 and CP |
| Fund accounting / NAV calculation | Daily NAV calculation for 投信 mandates; valuation rules per 投信協会 guidance; audit-support workpapers |
| Corporate actions | Dividend / interest receipt, splits, rights offerings, conversions, mandatory / voluntary events, withholding-tax processing; foreign-asset CA via global custodian sub-network |
| Voting operations | Receipt of meeting materials, ICJ electronic-voting forwarding, mechanical execution of asset-owner / manager instructions |
| Sub-custody for foreign assets | Re-routing through global custodians ([[JapanFG/bny-mellon-japan|BNY Mellon]] / [[JapanFG/state-street-japan|State Street]] / [[JapanFG/jpmorgan-japan|JP Morgan]]) for non-JP assets in mandate portfolios |
| Securities-lending support | Lending program administration when client opts in; collateral posting; recall management |
| Member / participant ops | Pension member balance reporting (DB / DC), benefit payment ops, fund-of-funds look-through |

### The 「信託口」 nominee surface

Approximately every TOPIX-100 issuer disclosure shows 「日本マスタートラスト信託銀行（信託口）」 as a top-3 shareholder. The economic reading is:

- The legal record name is MTBJ.
- The beneficial owners are GPIF, corporate pensions, 投信ファンド, insurance separate accounts, and foreign-investor sub-custody clients of MTBJ.
- Voting instruction comes from the upstream asset manager or asset owner — not MTBJ.
- The bulk of the holding under that name is **passive index** exposure plus pension-mandate equity allocations. ^[inferred]

This is why MTBJ's apparent "concentration" in the public shareholder register cannot be read as a single voting bloc. The same body of holdings is fragmented across hundreds of underlying mandates with different voting policies.

## 3. 競合構造

### Three competitive layers

| Layer | Competitor | Overlap with MTBJ | Differentiation |
|---|---|---|---|
| Domestic custody-only specialists | [[JapanFG/custody-bank|Custody Bank of Japan (CBJ)]] | Near-identical product set — pension trust, 投信受託, securities custody | Different shareholder camp (SMTB + Mizuho + 第一生命) and different mandate base; both anchor the two-strong domestic infrastructure |
| Full-service trust-bank arms of megabanks | [[JapanFG/mitsubishi-ufj-trust-bank|MUFG Trust]], [[JapanFG/sumitomo-mitsui-trust|SMTB]], [[JapanFG/mizuho-trust-bank|Mizuho Trust]] | Full-service trust banks also run custody and pension trust internally — but typically offload back-office processing to MTBJ / CBJ for the asset-administration leg | Full-service trust banks add 不動産信託, 相続, PB, securities agency, 議決権電子化 service; they win the *front office* mandate while MTBJ / CBJ run the *processing* |
| Global custodians (foreign sub-custody chain) | [[JapanFG/bny-mellon-japan|BNY Mellon Japan]], [[JapanFG/state-street-japan|State Street Japan]], [[JapanFG/jpmorgan-japan|JP Morgan Japan]] | Cross-border custody, foreign-investor Japan sub-custody, foreign-asset processing for Japan mandates | Globals dominate cross-border; MTBJ dominates domestic-Japanese assets; the chains interconnect for GPIF and 投信 海外資産 |

### Cross-camp comparison table

| Dimension | MTBJ | CBJ | Megabank trust-bank arm | Global custodian (JP) |
|---|---|---|---|---|
| Loans / deposits | None | None | Yes (full-service) | Yes (branch + Japan trust sub) |
| Real-estate trust | No | No | Yes (large) | No |
| Inheritance / PB | No | No | Yes | Partial (UHNW only) |
| Pension trust admin | Yes (core) | Yes (core) | Yes (front-office mandate) | Partial (foreign-asset side) |
| 投信 受託 | Yes (core) | Yes (core) | Limited (often outsourced to MTBJ / CBJ) | Limited |
| Securities-only custody | Yes (core) | Yes (core) | Yes | Yes (Japan sub-custody for foreign) |
| ICSD (Euroclear / Clearstream) direct | Re-routed via globals | Re-routed via globals | Re-routed via globals | Direct |
| Public shareholder-register nominee | 「日本マスタートラスト信託銀行（信託口）」 | 「日本カストディ銀行（信託口）」 | Less prominent — full-service brand | Foreign-shareholder name in 外国法人 row |

### Why MTBJ + CBJ became a two-strong utility

The economics of pension-trust + 投信受託 + securities custody favour scale: NAV calculation, corporate-actions processing, 議決権 systems, JASDEC connectivity, and BoJ JGB book-entry systems all have steep fixed-cost curves. Splitting them across many small trust-bank operating units raised aggregate IT cost without improving the service to asset owners. The 2000-2020 consolidation arc (MTBJ in 2000, CBJ in 2020 via JTSB + TCSB merger) converged on a two-utility structure with one MUFG-led pole and one SMTB / Mizuho-led pole. ^[inferred]

## 4. 手数料・収益構造

MTBJ does not publicly disclose granular fee schedules. The public-domain reading is:

| Revenue line | Pricing basis | Public visibility |
|---|---|---|
| Pension trust administration fee | AUC bps (typically very low for large GPIF-scale mandates) | Not disclosed at line-item level; aggregate fee revenue inferable only from group / shareholder consolidated disclosure ^[ambiguous] |
| 投信受託 admin fee | AUC bps, generally a small fraction of the fund's total expense ratio | Disclosed in each fund's 信託約款 + 目論見書 as 「信託報酬 / 受託会社報酬」 — typically 0.01-0.05% / year of NAV ^[inferred] |
| Securities custody fee | AUC bps per asset class; settlement fees per ticket; cash-management spread | Not disclosed publicly |
| Voting administration / corporate-action ops | Typically bundled into custody fee | Not separately disclosed |
| Securities-lending admin / agent-lender fee | Revenue share of lending income with beneficial owner | Not separately disclosed |
| Cash-balance interest income | Low — short-dated funding placements | Not separately disclosed |

### Why fees are hard to read from outside

1. MTBJ is non-listed and publishes only minimum statutory disclosures; granular fee disclosure is at the shareholder consolidated level.
2. 投信受託 fees are observable per fund but vary by fund-family, asset class, and contract date; cross-fund aggregation requires manual scraping of each 信託約款.
3. Pension-trust contracts are individually negotiated, including for GPIF; only summary aggregate AUC × average bps inferences are possible from public data. ^[ambiguous]
4. Securities-custody fees for institutional clients are mandate-specific and not on standard public tariffs.

### Cross-bank fee-economy reading

| Aspect | MTBJ / CBJ (domestic specialists) | Megabank trust-bank arm | Global custodian (Japan) |
|---|---|---|---|
| Pricing power on JP equity custody | High (scale utility) | Medium (uses MTBJ / CBJ as back-end) | Medium (foreign-investor sub-custody premium) |
| Pricing power on JP-投信 受託 | High (utility scale, low per-bp fees) | Low (rarely a 受託会社 directly for major funds) | Low (rarely a JP 投信 受託会社) |
| Pricing power on foreign-asset custody | Low (re-routes through globals) | Low | High (global ICSD + sub-custody network) |
| Pricing power on pension trust admin | High (esp. GPIF-scale mandates) | Medium-high (full-service competing) | Medium (foreign-pension-side mandates) |
| Overall fee trend | Compressing under passive-fund growth + competitive pricing ^[inferred] | Bundled with other trust-bank fees | Stable in JP yen terms, growing in USD via $AUC growth |

For a granular cross-bank fee comparison see [[banking/trust-bank-fee-structure-comparison|trust bank fee structure comparison]].

## 5. 規制・会計

### Regulatory stack

| Layer | Statute / regulator | MTBJ implication |
|---|---|---|
| Bank supervision | 銀行法 + 金融庁 監督指針 (信託兼営銀行 section) | Capital adequacy, liquidity, governance, IT-risk supervision; MTBJ runs a low-risk balance sheet so capital is light |
| Trust-business supervision | 信託業法 + 金融庁 監督指針 (信託業 section) | Trust account separation, fiduciary-duty rules, conflict-of-interest controls, 受託者責任 standards |
| Securities-law overlay | 金融商品取引法 — 投資信託受託会社 / カストディ ops | NAV calc accountability, custody standards, 投信協会 compliance |
| Pension regulation | 厚生年金保険法, 確定給付企業年金法, 確定拠出年金法 | Pension trust admin ops, fiduciary reporting, member-balance reporting |
| Deposit insurance | 預金保険機構加盟 | Statutory membership though deposits are minor |
| AML / CFT | 金融庁 + 警察庁 + 国税庁 reporting | Custody-side AML applied to underlying client mandates |
| Stewardship / corporate-governance | スチュワードシップ・コード (voluntary code) | Voting-admin transparency expectations |
| Recordkeeping / data | 個人情報保護法, 金融分野ガイドライン | Pension member data, NISA-related account data |

### GPIF-custodian eligibility

GPIF's custodian / asset-administrator panel for domestic and overseas assets is set by GPIF tender. Public disclosure shows that MTBJ has been used as a 資産管理機関 for domestic equity and bond mandates. Cross-border legs use global custodians as sub-custodians. ^[inferred] Confirming the current panel composition requires reading GPIF's annual report and tender disclosures.

### Accounting treatment

| Item | Treatment |
|---|---|
| Trust-account assets ("信託財産") | **Off-balance-sheet** at MTBJ; on-balance-sheet for the beneficial owner |
| Custody fees | Recognized as fee income in P&L |
| 預金 (own-account deposits) | On-balance-sheet — but small relative to trust assets |
| Settlement-account residual balances | Short-duration; included in cash + due-from-banks |
| Capital | Statutory minimum 信託兼営銀行 capital plus internal buffer |

### Why off-balance-sheet treatment matters for fees

Because trust assets sit off the trustee's balance sheet, the bp-level fee rate × off-balance trust AUC translates into the trust-bank's revenue. A pure custodian's apparent "asset weight" (¥700tn+) does not imply commensurate equity / risk capital — the fee economics decouples from the AUC. This is the structural reason a custody-only specialist can run at a much smaller balance-sheet footprint than a full-service megabank trust arm with comparable AUC. ^[inferred]

## 6. JASDEC / clearing infrastructure connection

```
┌─────────────────────────────────────────────────────────────────┐
│ Beneficial owners (GPIF / pensions / 投信 / insurers)            │
└─────────────────────────────┬───────────────────────────────────┘
                              │  mandate
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ Asset managers (front-office discretion, voting opinion)         │
│ — MUFG-AM, Nomura AM, SBI AM, etc.                               │
└─────────────────────────────┬───────────────────────────────────┘
                              │  instruction
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ Master Trust Bank of Japan (trust account / nominee)             │
│ — recordkeeping, NAV, CA processing, voting admin                │
└─┬────────────┬────────────┬───────────────┬────────────────────┬─┘
  │            │            │               │                    │
  ▼            ▼            ▼               ▼                    ▼
┌───────────┐┌─────────────┐┌──────────────┐┌──────────────────┐┌─────────────────┐
│ JASDEC    ││ JSCC        ││ BoJ JGB      ││ Global custodian │ │ ICJ voting plat.│
│ (equities,││ (CCP for    ││ book-entry   ││ (foreign sub-    │ │ (electronic     │
│ corp bonds││ cash equity ││ (JGB         ││ custody — BNY,   │ │ proxy voting)   │
│ CP, 投信) ││ + CCP)      ││ settlement)  ││ State Street,    │ │                 │
│           ││             ││              ││ JPM, Citi)       │ │                 │
└───────────┘└─────────────┘└──────────────┘└──────────────────┘└─────────────────┘
```

### Direct JASDEC connection

MTBJ is a direct participant in [[securities/japan-securities-depository-center|JASDEC]] book-entry transfer for:

- 株式振替制度 (dematerialized listed shares)
- 一般債振替制度 (corporate bonds, including 普通社債, 転換社債)
- 短期社債振替制度 (CP / commercial paper)
- 投資信託振替制度 (publicly offered 投信 unit transfer)

### JSCC connection

Cash-equity settlement obligations of MTBJ are cleared through [[securities/japan-securities-clearing-corp|JSCC]] as central counterparty. The combination of JASDEC book-entry + JSCC CCP + BoJ funds settlement produces DVP-X1 / DVP-X2 / DVP-X3 settlement quality, which is the regulatory baseline for institutional-grade custody. ^[inferred]

### BoJ JGB book-entry

MTBJ holds a direct account in the BoJ JGB book-entry system, enabling DVP JGB settlement for pension and 投信 mandates. Without this direct account a custodian would have to sub-custody JGB through a megabank — which would add a layer of cost and operational risk. ^[inferred]

### Sub-custody chain for foreign assets

Foreign-asset legs of MTBJ-administered mandates (e.g. GPIF foreign equity, foreign bond portfolios in 投信) are routed through global custodians as Japan-side sub-custody. The chain is approximately:

```
MTBJ (record-name trust-account) → global custodian (BNY / State Street / JPM / Citi)
  → local sub-custodian in each foreign market → local CSD
```

This sub-custody dependency means MTBJ's foreign-asset processing cost is structurally a pass-through from the global custodian's fee schedule, which limits MTBJ's pricing power on foreign-asset legs but preserves it on domestic-asset legs.

### Tokenization / ST settlement

For tokenized securities issued via [[JapanFG/progmat|Progmat]] or similar 信託受益権 securitization platforms, the trust-bank acts as the underlying 受託銀行 for the 信託受益権. MTBJ's role in this segment is still emerging and the precise integration with JASDEC / non-JASDEC ledgers is an open question. ^[inferred]

## Counterpoints

- "MTBJ is a top shareholder of every TOPIX issuer" — formal accuracy only; nominee surface, not economic ownership. Beneficial owners are the underlying mandates. ^[extracted]
- "MTBJ is MUFG-controlled" — MUFG Trust holds 46.5% but does not exceed 50%; life-insurer and Norinchukin shareholders retain blocking power. ^[inferred]
- "AUC ¥700tn = Japan's largest investor" — wrong category. Trust assets are off-balance; MTBJ is a custodian, not an investor. ^[extracted]
- "MTBJ vs CBJ duopoly = anti-competitive" — the two-strong structure is the rational outcome of fixed-cost infrastructure economics in a market with one set of national settlement rails. ^[inferred]
- "Foreign assets sit at MTBJ" — only the record name does; the actual custody chain runs through global custodians on the foreign-side leg.
- "Custody-only banks pay no regulatory cost" — MTBJ remains a fully supervised trust bank under 銀行法 + 信託業法 with full FSA on-site examinations; operating-risk capital is non-trivial despite the light credit book. ^[inferred]

## Open questions

- What share of MTBJ's ¥700tn+ trust-asset base is GPIF mandate vs corporate-pension mandate vs 投信 受託 vs insurance separate account? Public disclosure is too aggregated to answer.
- How does MTBJ's per-bp fee schedule compare to CBJ's at GPIF scale? Both are silent.
- What is the post-2027 T+1 settlement roadmap and the IT-investment scale required for MTBJ?
- Will MTBJ and CBJ ever merge into a single national custody utility, or will the two-pole structure be politically stabilized by their distinct shareholder camps?
- How will MTBJ's role evolve for 信託受益権-based tokenized securities under [[JapanFG/progmat|Progmat]] and similar platforms?
- What is MTBJ's exposure to non-ICJ electronic-voting routes (foreign-proxy platforms)? The ICJ integration is documented; the broader proxy-platform integration map is not.

## Related

- [[banking/INDEX]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/japan-trust-bank-custody-map]]
- [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[banking/custody-bank-operating-model]]
- [[banking/jasdec-settlement-operations]]
- [[banking/trust-bank-fee-structure-comparison]]
- [[banking/pension-trust-mandate-allocation-japan]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[JapanFG/master-trust-bank]]
- [[JapanFG/custody-bank]]
- [[JapanFG/mitsubishi-ufj-trust-bank]]
- [[JapanFG/sumitomo-mitsui-trust]]
- [[JapanFG/mizuho-trust-bank]]
- [[JapanFG/nochu-trust-bank]]
- [[JapanFG/nippon-life]]
- [[JapanFG/meiji-yasuda]]
- [[JapanFG/bny-mellon-japan]]
- [[JapanFG/state-street-japan]]
- [[JapanFG/jpmorgan-japan]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-market-infrastructure-map]]
- [[finance/japan-listed-financial-groups-investable-universe]]

## Sources

- Master Trust Bank of Japan: official site, company overview, business / asset-management page, company-information page.
- Trust Companies Association of Japan: trust-assets-under-management statistics.
- FSA: trust-business financial institution list, bank license list.
- JASDEC: securities book-entry and depository system materials.
- JSCC: clearing and DVP cash-equity materials.
- BoJ: JGB book-entry settlement system materials.
- GPIF: public annual report and asset-administrator panel disclosures.
