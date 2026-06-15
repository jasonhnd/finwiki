---
title: "Japan M&A deal process comparison matrix"
aliases:
  - "japan-m-a-deal-process-comparison-matrix"
  - "Japan M&A process matrix"
  - "Japan deal type comparison"
  - "JP M&A structure comparison"
  - "Japan inbound outbound MBO TOB matrix"
  - "Japan acquisition route matrix"
  - "日本M&A取引類型マトリックス"
domain: finance
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [finance, matrix, m-a, tob, mbo, lbo, japan, regulatory, deal-process]
status: active
sources:
  - "https://www.jpx.co.jp/equities/listing/disclosure/tdnet/index.html"
  - "https://disclosure.edinet-fsa.go.jp/"
  - "https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/fair-ma-rule/ma-guideline-publications.html"
  - "https://www.meti.go.jp/english/press/2023/0831_001.html"
  - "https://www.fsa.go.jp/en/laws_regulations/faq_on_fiea/section04.html"
  - "https://www.mof.go.jp/en/policy/international_policy/gaitame_kawase/fdi/index.html"
  - "https://www.jftc.go.jp/en/policy_enforcement/mergers_acquisitions/index.html"
  - "https://www.jpx.co.jp/english/equities/listing/disclosure/tdnet/index.html"
  - "https://www.fsa.go.jp/en/"
  - "https://www.moj.go.jp/EN/index.html"
---

# Japan M&A deal process comparison matrix

## TL;DR

Japan M&A is not one process; it is at least seven distinct deal-type processes that share statutory plumbing but diverge on the buyer type, control mechanism, regulatory screen stack, financing form, and timeline. This matrix lays out **inbound** (foreign buyer of Japanese target), **outbound** (Japanese buyer of foreign target), **domestic strategic**, **domestic PE LBO**, **MBO / squeeze-out**, **JV formation**, and **TOB-mandated transactions** side-by-side across statutory control mechanisms (merger / share exchange / TOB / asset purchase / triangular merger), regulatory screens ([[finance/japan-fair-disclosure-and-insider-trading-controls|FSA disclosure]] / [[finance/japan-tender-offer-process|MOF FEFTA]] / [[finance/cross-border-m-a-japan|JFTC antitrust]]), financing structure, fairness opinion practice, minority appraisal rights, and statutory thresholds (5% / 30% / 50.1% / 66.67% / 90%). This is a route map, NOT legal, tax, or investment advice.

## Wiki route

This entry sits under [[finance/INDEX|finance index]]. Read it against [[finance/japan-acquisition-finance]] for the debt-stack interface, [[finance/japan-tender-offer-process]] for the public-bid mechanics, [[finance/japan-mbo-and-squeeze-out-process]] for management-led routes, [[finance/japan-leveraged-buyout-economics]] for sponsor cash-flow math, and [[finance/japan-ib-league-table]] for adviser-side franchise depth. Cross-domain links route into [[corporate-strategy/INDEX|corporate-strategy index]] for the [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|kaisha bunkatsu tax]] and [[corporate-strategy/japan-kabushiki-bunpai-spinoff-regime|partial spinoff]] tax-deferral surfaces.

## Why this matrix matters

Most external commentary on Japan M&A blurs together the deal type, the statutory mechanic, and the regulatory screen. In practice, a foreign strategic buyer of a TSE-listed target hits a wholly different gate stack (mandatory TOB + FEFTA prior-notification + JFTC pre-merger filing + listed-target fairness opinion + appraisal rights) than a Japanese sponsor doing a take-private MBO of the same target, even though both end up acquiring the same shares. A practitioner needs a side-by-side view of:

- which **buyer types** trigger which **regulatory screens**;
- which **control mechanisms** the statute makes available, and which are tax-efficient under [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|kaisha bunkatsu tax]];
- when **TOB is mandatory** vs **optional**;
- when **fairness opinion** is functionally required vs market-practice;
- when **appraisal rights** create a real cash-out lever for minorities;
- which **statutory share thresholds** unlock what mechanic.

This matrix is the comparison surface for those questions. The detailed mechanics live in the linked per-process pages.

## Deal-type taxonomy

| Deal type | Short definition |
|---|---|
| **Inbound** | Foreign (non-Japan) buyer acquires a Japanese target. |
| **Outbound** | Japanese buyer acquires a non-Japan target (Japanese disclosure / tax perimeter only). |
| **Domestic strategic** | Japanese buyer acquires a Japanese target for industrial / strategic reasons. |
| **Domestic PE LBO** | Domestic PE sponsor acquires a Japanese target using leverage. |
| **MBO / squeeze-out** | Incumbent management + sponsor take a listed Japanese target private. |
| **JV formation** | Two or more parties contribute assets / cash into a new joint vehicle. |
| **TOB-mandated** | Any deal where FIEA mandates a public tender offer (e.g. > 1/3 acquisition outside market). |

Read this taxonomy with [[finance/cross-border-m-a-japan|cross-border M&A Japan]] for the inbound/outbound counterpart map.

## Statutory control mechanisms (the "how")

| Mechanism | Statute anchor | Typical use |
|---|---|---|
| Statutory merger (合併) | Companies Act §§748-756 | Two entities combine; surviving / new entity issues shares; supermajority shareholder vote. |
| Share exchange (株式交換) | Companies Act §§767-771 | Acquirer becomes 100% parent; target stays as wholly-owned subsidiary; stock-for-stock. |
| Share transfer (株式移転) | Companies Act §§772-774 | Two existing companies form a new holding company above them. |
| Tender offer (TOB / 公開買付け) | FIEA §§27-2 et seq. | Cash bid for listed-target shares; mandatory above certain thresholds. |
| Asset purchase (事業譲渡) | Companies Act §§467-470 | Buyer takes a defined business unit; not shares. |
| Triangular merger (三角合併) | Companies Act §§749 + 768 | Surviving entity issues parent (often foreign) company shares as consideration. |
| Cash squeeze-out (キャッシュ・アウト) | Companies Act §§179 / 179-2 (special-controlling-shareholder demand) | Holder of ≥ 90% cashes out remaining minority without further vote. |
| Demand for sale (株式等売渡請求) | Companies Act §179 (post-2014 reform) | Special-controlling-shareholder cash-out at ≥ 90%. |

For sponsor-led mechanics, [[finance/japan-mbo-and-squeeze-out-process]] is the operating page; for public-bid mechanics, [[finance/japan-tender-offer-process]] is the operating page.

## Regulatory screen stack

| Screen | Authority | Trigger |
|---|---|---|
| **TOB regulation** | [[finance/japan-tender-offer-process|FSA / Local Finance Bureau]] | Off-exchange acquisition that crosses 5% / 1/3 / 50% thresholds, or other FIEA triggers. |
| **Large shareholding report (大量保有報告)** | [[finance/japan-large-shareholding-disclosure|EDINET]] | Beneficial ownership ≥ 5% of listed issuer; change report on ≥ 1% movement. |
| **Insider trading control** | [[finance/japan-fair-disclosure-and-insider-trading-controls|FSA / Stock Exchange Surveillance]] | Material non-public information during pre-announcement window. |
| **FEFTA prior-notification** | MOF / sector regulators | Foreign investor acquiring listed JP issuer in designated sector ≥ 1%, or unlisted issuer ≥ certain thresholds. |
| **Antitrust pre-merger filing** | JFTC | Combined domestic sales above thresholds (acquirer group ¥20bn AND target ¥5bn for share acquisitions; thresholds vary by mechanism). |
| **Sector regulators** | BOJ, FSA, METI, MIC, MHLW, MLIT, etc. | Banking, insurance, broadcasting, telecom, healthcare, etc. require sector approvals. |
| **Foreign antitrust** | EU Commission, US DOJ/FTC, PRC SAMR, KFTC, CMA, others | If outbound or cross-border deal crosses foreign thresholds. |
| **CFIUS / national-security equivalents** | Counterparty jurisdiction | Foreign investment in sensitive sectors (mostly outbound Japan into US, etc.). |

The screen stack is order-sensitive. FEFTA prior-notification must be cleared **before** the foreign investor consummates; antitrust filings can run in parallel; TOB period sequencing is dictated by FIEA. Open [[finance/japan-tender-offer-process]] before relying on a process timeline.

## Per-deal-type process

### Inbound (foreign strategic / sponsor of Japanese target)

| Dimension | Typical reading |
|---|---|
| Buyer type | Foreign corporate strategic, foreign PE sponsor (e.g. Bain, KKR, CVC, Carlyle), or foreign SWF / pension. |
| Control mechanism | Cash TOB for listed targets; share / asset purchase for private; rarely triangular merger because of cash-preference. |
| Regulatory screens | TOB regulation + FEFTA prior-notification (often the binding gate) + JFTC + sector approvals + foreign-side approvals. |
| Financing structure | Cash bid typical; debt at SPC / newco; leverage often clubbed across [[megabanks/mufg-bank]], [[megabanks/mizuho-bank]], [[megabanks/sumitomo-mitsui-banking-corp|SMBC]], plus foreign banks. |
| Typical timeline | 4-9 months from announcement to settlement when FEFTA / antitrust are clean; longer with sector approval. |
| Fairness opinion | Market-practice required for listed-target board; often dual-FO if conflicted committee. |
| Minority appraisal rights | Available under Companies Act for objecting shareholders if combined with subsequent share consolidation / cash squeeze-out. |
| Statutory thresholds | 5% LSR notice; 1/3 mandatory TOB; 2/3 supermajority for charter amendments / squeeze-out; 90% for special-controlling-shareholder cash-out. |
| Adviser map | Foreign IB often runs sell-side / buy-side advice in parallel with Japan-house ([[securities-firms/nomura-hd|Nomura]], [[securities-firms/daiwa-sg|Daiwa]], [[securities-firms/smbc-nikko|SMBC Nikko]], [[securities-firms/mizuho-securities|Mizuho Securities]]); see [[finance/japan-ib-league-table]]. |

Read this section against [[finance/cross-border-m-a-japan]] for the cross-border legal stack and [[finance/japan-activist-investor-playbook]] for the engagement angle when the inbound is a hostile or unsolicited foreign sponsor.

### Outbound (Japanese buyer of foreign target)

| Dimension | Typical reading |
|---|---|
| Buyer type | Japanese strategic (e.g. trading houses, megabank FG subsidiaries, large industrial), Japanese sponsor (e.g. JIC, J-STAR, Advantage), or Japan-listed financial group. |
| Control mechanism | Share purchase governed by foreign law (UK SPA, Delaware SPA, etc.); statutory merger / scheme depending on target jurisdiction. |
| Regulatory screens | Foreign-side dominates: foreign antitrust, foreign FDI (CFIUS, UK NSI, EU FSR, etc.); Japan-side typically only post-acquisition EDINET / governance disclosure if material. |
| Financing structure | Cross-currency: JPY borrowing + cross-currency swap, or USD / EUR direct loan; bridge takeout via JPY bond or USD bond; samurai vs offshore bond decision. |
| Typical timeline | 6-12 months from signing to closing; foreign antitrust and FDI dominate. |
| Fairness opinion | Buyer-side FO common at Japanese acquirer for board / governance defense. |
| Minority appraisal rights | Foreign-law concept (e.g. Delaware appraisal, UK scheme dissent) replaces Companies Act mechanics. |
| Statutory thresholds | Foreign-law thresholds apply for target-side; Japan disclosure perimeter only triggers under [[finance/japan-large-shareholding-disclosure]] if acquirer issues new equity to fund. |
| Adviser map | Foreign IB usually leads target-side process; Japan-house pairs as buyer-side adviser; see [[finance/japan-ib-league-table]] and [[securities-firms/goldman-sachs-japan]], [[securities-firms/morgan-stanley-japan]]. |

Outbound deals are governed by the **target jurisdiction**, NOT Japanese statutory M&A; the matrix below shows only the Japan-perimeter touchpoints.

### Domestic strategic (Japanese buyer + Japanese target)

| Dimension | Typical reading |
|---|---|
| Buyer type | Japanese listed corporate, industrial conglomerate, megabank FG strategic acquirer. |
| Control mechanism | Share exchange (株式交換) common for stock-for-stock; statutory merger (合併) for full integration; TOB if listed target; asset purchase for carve-outs. |
| Regulatory screens | TOB regulation if listed + JFTC + sector approvals. FEFTA does not apply (no foreign investor). |
| Financing structure | Stock-for-stock common; cash via balance-sheet, syndicated loan, or bond issuance; rarely high-leverage. |
| Typical timeline | 4-7 months; can shorten if pure share exchange with no foreign approval. |
| Fairness opinion | Practice-standard for listed-target board, especially when special committee is constituted. |
| Minority appraisal rights | Companies Act §§785, 797, 806 grant dissenting shareholders right to demand fair-price purchase. |
| Statutory thresholds | 2/3 supermajority for share exchange / merger; 1/3 mandatory TOB; 90% for squeeze-out. |
| Adviser map | Megabank-affiliated securities arms dominate ([[securities-firms/smbc-nikko]], [[securities-firms/mizuho-securities]], [[securities-firms/mufg-mums|MUFG / MUMS]]); see [[finance/japan-ib-league-table]]. |

### Domestic PE LBO

| Dimension | Typical reading |
|---|---|
| Buyer type | Japan-incorporated PE sponsor (e.g. Advantage, J-STAR, JIC Capital, Polaris) or Japan-team of global sponsor (KKR Japan, Bain Japan, Carlyle Japan). |
| Control mechanism | SPC / newco TOB for listed targets; private SPA for non-listed; sometimes share exchange between sponsor SPC and target HoldCo. |
| Regulatory screens | TOB regulation if listed + JFTC + sector approvals; FEFTA NOT triggered if sponsor is Japan-incorporated GP managing offshore LP fund (interpretation-dependent). |
| Financing structure | Senior LBO loan (often clubbed with [[megabanks/mufg-bank]], [[megabanks/mizuho-bank]], [[megabanks/sumitomo-mitsui-banking-corp|SMBC]], [[trust-banks/smtb|SMTB]]); mezzanine / sub-debt occasional; bridge takeout via bond infrequent in Japan vs US. |
| Typical timeline | 4-8 months from sponsor commitment to closing; staple financing common in auction. |
| Fairness opinion | Required-by-practice for listed-target board; FO from independent IB often dual-track. |
| Minority appraisal rights | Companies Act §172 fair-price determination available post-squeeze-out. |
| Statutory thresholds | 1/3 TOB trigger; 2/3 vote for back-end squeeze; 90% for cash-out demand. |
| Operating model | See [[finance/japan-private-equity-operating-model]] and [[finance/japan-leveraged-buyout-economics]] for IRR math. |

### MBO / squeeze-out

| Dimension | Typical reading |
|---|---|
| Buyer type | Incumbent management + sponsor (rarely pure management). |
| Control mechanism | Two-step: (1) cash TOB to maximize tender; (2) back-end squeeze-out via §179 demand for sale (≥ 90%) or §180 share consolidation (≥ 2/3 vote). |
| Regulatory screens | TOB regulation + heightened fairness scrutiny under [[finance/japan-mbo-and-squeeze-out-process|METI Fair M&A Guidelines]]; JFTC if combined turnover thresholds met. |
| Financing structure | Sponsor equity + LBO loan into newco; sometimes preferred / convertible to management. |
| Typical timeline | 6-10 months; longer if independent committee or shareholder litigation. |
| Fairness opinion | Effectively mandatory under METI Fair M&A Guidelines; usually dual-FO (one for special committee, one for offeror). |
| Minority appraisal rights | Most active in MBO context; courts have repeatedly recalibrated fair price (e.g. classic Tecmo / Rex / Cybird / JCOM-line precedents). |
| Statutory thresholds | 2/3 squeeze-out / consolidation vote; 90% special-controlling-shareholder cash-out. |
| Key protection | Independent special committee, market check, majority-of-minority condition increasingly market standard. |

Read against [[finance/japan-mbo-and-squeeze-out-process]] for the procedural sequencing and [[finance/japan-activist-investor-playbook]] for activist response in MBO context.

### JV formation

| Dimension | Typical reading |
|---|---|
| Buyer type | Two or more strategic parties contributing assets, cash, IP, or business units. |
| Control mechanism | Newco formation + contribution-in-kind (現物出資) or asset transfer (事業譲渡); often via [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|kaisha bunkatsu]] for tax-deferral. |
| Regulatory screens | JFTC if combined sales meet threshold; sector approvals; FEFTA if foreign JV partner. |
| Financing structure | Capital contribution from each parent + JV-level financing; sometimes parent guarantee. |
| Typical timeline | 6-12 months including governance / shareholder-agreement negotiation. |
| Fairness opinion | Rare unless one party is listed and contribution is material. |
| Minority appraisal rights | If formation involves listed-target carve-out, dissenting shareholders may exercise rights under Companies Act §785 / §806. |
| Statutory thresholds | 2/3 vote if material asset transfer; 1/2 + 1 for ordinary JV approvals. |
| Tax structure | Often structured as tax-qualified [[corporate-strategy/japan-kabushiki-bunpai-spinoff-regime|partial spinoff]] / share-for-share to defer Japanese capital-gains. |

### TOB-mandated transactions

| Dimension | Typical reading |
|---|---|
| Trigger | Off-exchange acquisition that crosses 5% (rapid acquisition) or 1/3 (mandatory) thresholds, or other FIEA-defined trigger (e.g. mass small-lot acquisitions). |
| Buyer type | Any: strategic, sponsor, individual, parent buying out subsidiary, activist. |
| Control mechanism | Cash TOB under FIEA §§27-2 et seq.; rarely securities-consideration TOB. |
| Regulatory screens | FIEA tender-offer chapter is binding; FEFTA + JFTC + sector overlay if applicable. |
| Financing structure | "Certainty of funds" required under FIEA; equity, debt, or both must be evidenced. |
| Typical timeline | 30-60 business day offer period; extensions possible if competing bid or material change. |
| Fairness opinion | Target board MUST issue opinion (賛同 / 反対 / 中立) within 10 business days; FO is market practice. |
| Minority appraisal rights | If TOB combined with back-end squeeze, appraisal applies; standalone partial TOB rarely triggers appraisal. |
| Statutory thresholds | 5% / 1/3 / 50% trigger gates; 2/3 supermajority for back-end; 90% cash-out demand. |
| Disclosure | Tender Offer Notice + Public Notice + Tender Offer Statement filed on EDINET; daily and amendment notices on TDnet. |

## Big comparison matrix table

The following matrix is a side-by-side comparison across the seven deal types. Every cell is a categorical descriptor based on public-surface statute, METI guidelines, and JFTC / FSA practice. NOT legal, tax, or investment advice; verify each cell against the most recent METI / FSA / JFTC publication before use.

| Dimension | Inbound | Outbound | Domestic strategic | Domestic PE LBO | MBO / squeeze-out | JV formation | TOB-mandated |
|---|---|---|---|---|---|---|---|
| **Buyer type** | Foreign corporate / sponsor / SWF | Japanese corporate / sponsor | Japanese listed corporate | Japan PE sponsor (incl. global PE Japan team) | Management + sponsor | Two or more strategic parties | Any acquirer crossing FIEA threshold |
| **Target type** | Japanese listed / private | Foreign listed / private | Japanese listed / private | Japanese listed / private | Japanese listed | Newco contribution from each parent | Japanese listed (TOB only applies to listed) |
| **Primary control mechanism** | Cash TOB or share / asset purchase | Foreign-law share / scheme / merger | Share exchange or merger | SPC cash TOB | Two-step cash TOB + squeeze-out | Newco formation + asset contribution | Cash TOB |
| **FIEA TOB regulation** | Yes (if listed target) | No (Japan perimeter only) | Yes (if listed target) | Yes (if listed target) | Yes (mandatory) | Only if listed shares involved | Yes (mandatory) |
| **Large shareholding report (LSR)** | Yes ≥ 5% | Only if Japan equity issued | Yes ≥ 5% | Yes ≥ 5% (SPC) | Yes ≥ 5% (offeror) | Yes if listed shares contributed | Yes ≥ 5% |
| **FEFTA prior notification** | Yes if foreign investor + designated sector | Foreign-side FDI applies | No | Sponsor-dependent | Sponsor-dependent | Yes if foreign JV partner | Sponsor-dependent |
| **JFTC pre-merger filing** | Yes if turnover threshold | Foreign antitrust dominates | Yes if turnover threshold | Yes if turnover threshold | Yes if turnover threshold | Yes if turnover threshold | Yes if turnover threshold |
| **Sector regulator approval** | Sector-specific (banking, insurance, telecom, broadcasting, etc.) | Foreign-side | Sector-specific | Sector-specific | Sector-specific | Sector-specific | Sector-specific |
| **Foreign approvals (target / acquirer side)** | Foreign foreign-side if acquirer assets cross threshold | Yes (target-side CFIUS, EU, etc.) | Limited | Limited | Limited | Foreign FDI if foreign JV partner | Limited |
| **Financing structure** | Cash; SPC LBO or balance-sheet | JPY + cross-currency + USD/EUR bond | Stock-for-stock or cash balance-sheet | SPC LBO loan + sponsor equity | SPC LBO loan + sponsor equity | Capital contribution + JV-level finance | Cash; certainty-of-funds required |
| **Typical leverage** | Low-to-mid for strategic; mid-to-high for sponsor | Low (corporate balance-sheet) | Low (stock-for-stock common) | Mid-to-high (5-7x EBITDA typical band) | Mid-to-high (5-7x EBITDA typical band) | Low (parent-supported) | Variable |
| **Typical timeline** | 4-9 months | 6-12 months | 4-7 months | 4-8 months | 6-10 months | 6-12 months | 30-60 BD offer period + back-end |
| **Fairness opinion (target side)** | Market practice; dual-FO if conflicts | Buyer-side FO common | Practice-standard for listed target | Practice-standard for listed target | Effectively mandatory; usually dual-FO | Rare unless listed-target carve-out | Practice-standard |
| **Independent special committee** | Common for listed target | Not Japan perimeter | Common for listed target | Common for listed target | Mandatory (per METI Fair M&A Guidelines) | Rare | Common for listed target |
| **Majority-of-minority (MoM) condition** | Increasingly common in conflict cases | Not Japan perimeter | Sometimes | Sometimes | Market-standard | Rare | Sometimes |
| **Minority appraisal rights** | Yes (Companies Act §§172, 785, 797, 806) | Foreign-law equivalent | Yes | Yes | Yes (most active site) | Yes (if listed parent involved) | Yes (if combined with back-end) |
| **Key statutory thresholds** | 5% / 1/3 / 2/3 / 90% | Foreign-law thresholds | 5% / 2/3 supermajority | 5% / 1/3 / 2/3 / 90% | 1/3 / 2/3 / 90% | 2/3 if material asset transfer | 5% / 1/3 / 50% TOB gates |
| **Tax mechanism** | Cash exit for sellers; capital-gains | Cross-border; foreign-side mostly | Tax-qualified share exchange possible | Cash exit; capital-gains | Cash exit; capital-gains | Often tax-qualified [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|kaisha bunkatsu]] | Cash exit |
| **Adviser franchise** | Foreign IB lead + Japan-house pair; see [[finance/japan-ib-league-table]] | Foreign IB target-side + Japan-house buyer-side | Megabank-affiliated securities | Megabank + sponsor in-house | Megabank + independent IB | Both parents' principal IBs | Both sides have advisers; FA + agent broker |
| **Disclosure path** | TDnet + EDINET + foreign filings | EDINET if material; foreign-side dominant | TDnet + EDINET | TDnet + EDINET | TDnet + EDINET + special-committee report | TDnet + EDINET if listed | EDINET Tender Offer Statement + TDnet daily |
| **Litigation risk** | Foreign-investor scrutiny + appraisal | Foreign-law litigation | Appraisal occasional | Appraisal occasional | Appraisal heavily litigated | Rare unless conflict | Appraisal + TOB-rule violation |
| **Adviser fee structure** | Success fee + retainer; sometimes M-fee for foreign IB | Cross-border premium | Success fee + retainer | Success fee + sponsor "transaction fee" | Success fee + sponsor fee; FO fee | Cross-engagement letters | TOB-agent fees + advisory fees |

## Statutory-threshold quick reference

| Threshold | Trigger | Applicable mechanism |
|---|---|---|
| **5%** | Large shareholding report (大量保有報告) | [[finance/japan-large-shareholding-disclosure]] |
| **5% (rapid)** | Mandatory TOB if rapid off-exchange acquisition | FIEA §27-2 |
| **1/3** | Mandatory TOB for off-exchange acquisition crossing 1/3 | FIEA §27-2 |
| **50% + 1** | Simple majority; board control via shareholder vote | Companies Act |
| **2/3 supermajority** | Charter amendments, statutory merger, share exchange, business transfer | Companies Act §309 |
| **90%** | Special-controlling-shareholder cash-out demand | Companies Act §179 |

For TOB-specific thresholds (5% rapid acquisition, 1/3 mandatory), open [[finance/japan-tender-offer-process]] for the full FIEA gate map.

## Fairness opinion practice map

| Deal type | FO practice | Rationale |
|---|---|---|
| Inbound | Market practice; sometimes dual | Listed-target board defense; conflict cases need dual. |
| Outbound | Buyer-side FO common | Japanese acquirer board / governance defense. |
| Domestic strategic | Practice-standard | Listed-target board defense. |
| Domestic PE LBO | Practice-standard | Listed-target board defense; sponsor not on FO. |
| MBO / squeeze-out | Effectively mandatory; usually dual | METI Fair M&A Guidelines; severe conflict. |
| JV formation | Rare | Usually no listed perimeter unless carve-out from listed parent. |
| TOB-mandated | Market practice | Required by board duty to opine. |

FO is NOT a statutory requirement under the Companies Act or FIEA; it is market practice driven by board fiduciary duty and METI Fair M&A Guidelines. The supplier landscape pairs to [[finance/japan-ib-league-table]] (Nomura, Daiwa, SMBC Nikko, Mizuho Securities, MUFG / MUMS, GS Japan, MS Japan, JPM Japan, Plutus, Houlihan Lokey Japan).

## Appraisal-rights heat map

| Mechanism | Triggering vote | Appraisal route |
|---|---|---|
| Statutory merger | 2/3 supermajority | Companies Act §785 (absorbed) / §797 (surviving) |
| Share exchange | 2/3 supermajority | Companies Act §785 / §797 |
| Share transfer | 2/3 supermajority | Companies Act §806 |
| Business transfer | 2/3 supermajority | Companies Act §469 |
| Share consolidation (back-end of TOB) | 2/3 supermajority | Companies Act §172 |
| Special-controlling-shareholder demand (Companies Act §179) | No vote (administrative) | Companies Act §179-8 |
| Cash TOB (standalone, no back-end) | None | None (until back-end squeeze) |

Most appraisal litigation in Japan clusters around MBO / squeeze-out back-end cases. The classic JCOM-line price-determination jurisprudence underlies current market-practice for "fair price" determination.

## Financing-structure cross-cut

| Deal type | Equity source | Debt source | Bridge | Hedge / FX |
|---|---|---|---|---|
| Inbound | Sponsor fund + foreign capital | Clubbed JPY senior + foreign currency | Bond takeout less common in JP | Cross-currency swap if foreign sponsor |
| Outbound | Acquirer balance-sheet | Samurai / Eurobond / cross-currency loan | JPY bridge + bond takeout | Cross-currency swap mandatory |
| Domestic strategic | Stock-for-stock or balance-sheet | Syndicated loan / bond | Rare | Limited |
| Domestic PE LBO | Sponsor equity + co-invest | Clubbed JPY senior LBO loan | Bond takeout rare | Limited (mostly JPY) |
| MBO / squeeze-out | Sponsor equity + management roll-over | Clubbed JPY senior LBO loan | Bond takeout rare | Limited |
| JV formation | Parent contribution | JV-level facility + parent guarantee | Rare | Depends on JV currency |
| TOB-mandated | Cash (acquirer balance-sheet or SPC) | Bridge or term loan with certainty-of-funds | Often bridge to bond / loan | Depends |

See [[finance/japan-acquisition-finance]] for the debt-stack detail, [[finance/japan-leveraged-buyout-economics]] for the LBO IRR math, and [[finance/japan-convertible-bond-mechanics]] for equity-linked takeout instruments.

## Adviser franchise overlay

| Deal type | Likely lead adviser archetypes |
|---|---|
| Inbound | Foreign IB lead + Japan-house pair: [[securities-firms/goldman-sachs-japan]] / [[securities-firms/morgan-stanley-japan]] + [[securities-firms/nomura-hd]] / [[securities-firms/daiwa-sg]] |
| Outbound | Foreign IB target-side + Japan-house buyer-side: [[securities-firms/nomura-hd]] / [[securities-firms/daiwa-sg]] + foreign IB |
| Domestic strategic | Megabank-affiliated securities: [[securities-firms/smbc-nikko]] / [[securities-firms/mizuho-securities]] / [[securities-firms/mufg-mums|MUFG / MUMS]] |
| Domestic PE LBO | Megabank + sponsor in-house adviser |
| MBO / squeeze-out | Megabank + independent IB + boutique FO provider |
| JV formation | Both parents' principal IBs |
| TOB-mandated | Both sides; agent broker [[securities-firms/nomura-hd|Nomura]] / [[securities-firms/daiwa-sg|Daiwa]] common |

Read this with [[finance/japan-ib-league-table]] for adviser-side franchise depth.

## Cross-shareholding interface

Deal processes that involve crossing 5% in a target with active cross-holdings (e.g. megabank FG, insurer, large industrial) interact with [[finance/japan-cross-shareholding-unwinding-economics]] because incumbent cross-holders often (a) tender into the TOB providing the offer's pivotal block, (b) decline to tender forcing back-end squeeze-out, or (c) become a defensive block against hostile inbound. The cross-holding behavior dictates timeline and price.

## Activist / engagement interface

For listed targets, an activist position can derail or accelerate a deal-process. See [[finance/japan-activist-investor-playbook]] for the engagement route and [[finance/japan-shareholder-proposal-and-agm-voting-route]] for the AGM voting interface. The "bumpitrage" pattern (activist accumulates above offer price to force bump) is increasingly observed in Japan listed-target MBO and inbound cases.

## Multi-jurisdiction tax surface

For inbound and outbound deals, the tax structure crosses jurisdictions. See [[finance/multi-jurisdiction-identity-tax-leverage]] for the multi-jurisdiction tax-leverage framing; and [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime]] for the kaisha bunkatsu tax-deferral mechanism used in JV / carve-out cases. None of this is tax advice; verify with statutory text and METI / NTA guidance.

## Boundary cases

The seven-deal-type taxonomy above does NOT cleanly classify all real-world deals. Common boundary cases:

- **Inbound sponsor with Japan-incorporated SPC**: A foreign sponsor (e.g. Bain, KKR) often acquires through a Japan-incorporated SPC funded by an offshore LP. FEFTA prior-notification interpretation depends on whether the SPC is treated as a foreign investor; usually it is treated as such if the offshore fund is ultimately controlled by foreign LPs and a foreign GP. Open the MOF / METI FEFTA interpretation guidance before relying on a treatment.

- **Outbound deal with Japan-listed acquirer raising fresh equity**: An outbound acquisition financed by a new Japan-listed equity issuance pulls the deal back into the Japan disclosure perimeter (EDINET securities registration statement, shareholder vote if necessary, [[finance/japan-large-shareholding-disclosure|large shareholding]] triggers on the equity placement).

- **Reverse-merger / SPAC-style**: Rare in Japan; Tokyo Stock Exchange does not currently support a US-style SPAC. Reverse-merger cases via Standard / Growth-segment listings can trigger TSE delisting review and shell-company rules.

- **Cross-holding sale via off-market block trade**: A megabank FG / insurer unwinding 5% in a listed industrial via off-market block is NOT a TOB if structured properly under FIEA's TOB-exemption rules; see [[finance/japan-cross-shareholding-unwinding-economics]] for the mechanics and [[finance/japan-fair-disclosure-and-insider-trading-controls]] for the insider-trading screen.

- **Two-step TOB by parent company**: Parent already owning > 50% running a "delisting TOB" of subsidiary to take it private. Treated as MBO-style under METI Fair M&A Guidelines due to inherent conflict; independent committee mandatory in practice.

- **Hostile TOB**: Rare in Japan but increasing. Triggers heightened activist / proxy-fight overlay; defensive measures (poison pill, white-knight, ESOP loyalty) subject to METI Buyout Defensive Measures Guidelines.

- **Carve-out structured as kaisha bunkatsu + share sale**: Two-step structure: (1) parent splits target unit into a newco via [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|kaisha bunkatsu]] (tax-qualified); (2) sells newco shares to buyer. Tax-efficient but timeline-extended.

- **Triangular merger with foreign parent stock as consideration**: Post-2007 Companies Act amendment allows foreign parent stock as merger consideration; rarely used because of tax-qualification and shareholder-approval complexity.

- **JV formation between listed parents involving carve-out**: If a JV is formed by carving out a listed parent's business unit, the carve-out side triggers [[finance/japan-large-shareholding-disclosure]], appraisal rights for dissenters, and potentially TOB if the JV partner takes > 1/3.

- **Consortium / club deals**: Multiple sponsors / strategics in a consortium each carry their own FEFTA notification (if applicable) and their own [[finance/japan-large-shareholding-disclosure|LSR]] obligations on a "joint holder" basis.

- **Pre-deal toehold accumulation**: Acquiring up to 4.99% on-market before announcement avoids LSR; crossing 5% within 5 business days starts LSR clock and may push toward TOB regulation depending on speed.

## Practitioner verification checklist

Before relying on any cell above in a real-world process:

1. Read the [[finance/japan-tender-offer-process]] page and verify the current FIEA TOB thresholds against the FSA notice.
2. Read the [[finance/japan-mbo-and-squeeze-out-process]] page and verify against the current METI Fair M&A Guidelines edition.
3. Pull the most recent JFTC notification thresholds from the JFTC English page.
4. Pull MOF / METI FEFTA designated-sector list and threshold rules from the MOF FDI page.
5. Cross-check disclosure path against [JPX TDnet](https://www.jpx.co.jp/equities/listing/disclosure/tdnet/index.html) and [EDINET](https://disclosure.edinet-fsa.go.jp/) for live filing examples.
6. Verify adviser-franchise reading against [[finance/japan-ib-league-table]].
7. Date-stamp the verification step; statutory thresholds and METI guideline editions rotate.

## Caveats

- This is a route map, NOT legal, tax, or investment advice.
- Cell-level descriptors are categorical only; verify against statute, guideline, and most recent agency notice.
- Treatment of joint-holders, foreign-investor status under FEFTA, and tax-qualification of share exchange / kaisha bunkatsu varies case-by-case; consult counsel.
- METI Fair M&A Guidelines and Buyout Defensive Measures Guidelines have been revised multiple times; verify the operative edition for any specific deal.
- TSE listing rules around delisting, change-of-control, and squeeze-out can shift; check the most recent TSE rulebook revisions.

## Related

- [[finance/INDEX|finance INDEX]]
- [[finance/japan-acquisition-finance]]
- [[finance/japan-tender-offer-process]]
- [[finance/japan-mbo-and-squeeze-out-process]]
- [[finance/japan-large-shareholding-disclosure]]
- [[finance/japan-fair-disclosure-and-insider-trading-controls]]
- [[finance/japan-ib-league-table]]
- [[finance/cross-border-m-a-japan]]
- [[finance/japan-activist-investor-playbook]]
- [[finance/japan-shareholder-proposal-and-agm-voting-route]]
- [[finance/japan-leveraged-buyout-economics]]
- [[finance/japan-private-equity-operating-model]]
- [[finance/japan-convertible-bond-mechanics]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[finance/multi-jurisdiction-identity-tax-leverage]]
- [[corporate-strategy/INDEX|corporate-strategy INDEX]]
- [[corporate-strategy/japan-kabushiki-bunpai-spinoff-regime]]
- [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/smbc-nikko]]
- [[securities-firms/mizuho-securities]]
- [[securities-firms/goldman-sachs-japan]]
- [[securities-firms/morgan-stanley-japan]]
- [[securities-firms/mufg-mums]]
- [[megabanks/mufg-bank]]
- [[megabanks/mizuho-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[trust-banks/smtb]]
- [[financial-regulators/dbj]]
- [[INDEX|FinWiki index]]

## Sources

- JPX TDnet and EDINET timely-disclosure portals (live filing examples for each deal type).
- METI: Fair M&A Guidelines (公正なM&Aの在り方に関する指針) and M&A Guideline publication pages.
- METI: Buyout Defensive Measures Guidelines (買収防衛策に関する指針).
- FSA: FIEA tender-offer FAQ and rule guides.
- MOF: Foreign Exchange and Foreign Trade Act (FEFTA) inward direct investment guidance.
- JFTC: pre-merger filing rules and notification thresholds (English).
- Ministry of Justice: Companies Act English text.
- Listed-target tender-offer statement examples on EDINET (statutory format reference, not deal-specific advice).
