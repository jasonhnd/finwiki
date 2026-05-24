---
title: "Japan non-life insurer registry index"
aliases:
  - "Japan non-life insurer index"
  - "損害保険会社一覧"
  - "FSA non-life insurer list"
  - "Japan P&C insurer registry"
  - "外国損害保険会社等 list"
domain: JapanFG
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [JapanFG, insurance, non-life, P&C, registry, fsa, foreign-affiliated, public-source]
status: active
sources:
  - "https://www.fsa.go.jp/menkyo/menkyoj/songai.pdf"
  - "https://www.fsa.go.jp/menkyo/menkyoj/songai.xlsx"
  - "https://www.fsa.go.jp/menkyo/hoken.pdf"
  - "https://www.sonpo.or.jp/about/gaiyo/"
  - "https://www.sonpohogo.or.jp/outline/member-companies.html"
---

# Japan non-life insurer registry index

## TL;DR

FSA's non-life insurer license list (損害保険会社免許一覧, songai.pdf) is the single registry surface for every entity licensed under Japan's Insurance Business Act (保険業法) to underwrite non-life (損害) insurance. This page is the routing surface for that registry — it organises the list by ownership cluster (大手3社 / direct / specialty / foreign-affiliated / reinsurer) instead of forcing every page reader to interpret the raw FSA workbook. It mirrors the structure of [[JapanFG/trust-companies-japan-index]] and [[JapanFG/foreign-bank-branches-japan-index]].

Standalone insurer pages stay in [[JapanFG/INDEX|JapanFG]]. Concept pages (catastrophe risk, agency channel, solvency) stay in [[insurance/INDEX|insurance]]. This index sits between them and routes both ways.

## Wiki route

This entry sits under [[JapanFG/INDEX|JapanFG index]] as the non-life counterpart to [[JapanFG/trust-companies-japan-index|trust companies registry index]] and [[JapanFG/foreign-bank-branches-japan-index|foreign bank branches registry index]]. Read it against [[insurance/japan-nonlife-big-three|Japan non-life big three]] for the holding-company comparison layer, [[insurance/natcat-reinsurance-japan|nat-cat reinsurance in Japan]] for the risk-cession layer, and [[insurance/INDEX|insurance index]] for the broader operating-model map. Capital adequacy translation goes through [[insurance/economic-value-based-solvency|economic value-based solvency]] and [[insurance/global-solvency-framework-comparison-matrix|global solvency framework comparison matrix]]. Foreign-reinsurer-only entries are grouped on [[insurance/foreign-reinsurer-japan-landscape|foreign reinsurer Japan landscape]] and [[insurance/lloyds-japan-syndicate-operating-model|Lloyd's Japan syndicate operating model]] sister pages.

## Boundary

| Boundary | Treatment |
|---|---|
| Non-life direct insurer (元受損保) | Listed in this index. Promote to standalone JapanFG page when there is a clear strategic, channel, or capital story. |
| Reinsurer (再保険専業) | Listed here under the "Reinsurer" cluster but the cession-flow analysis lives on [[insurance/foreign-reinsurer-japan-landscape]]. |
| Lloyd's syndicate market | Listed as one Lloyd's Japan row. The marketplace structure detail lives on [[insurance/lloyds-japan-syndicate-operating-model]] and the entity page [[JapanFG/lloyd-japan]]. |
| Captive insurer | Not on this list. Japan does not have an onshore captive license, so captives live on [[insurance/captive-insurance-japan-market]]. |
| P&I mutual (船主相互保険組合) | Not on the FSA non-life list; it is licensed under 船主相互保険組合法. See [[JapanFG/japan-pi-club|Japan P&I Club]] and [[insurance/marine-insurance-and-pi-cover-market]]. |
| Holding company (持株会社) | Not on this list. See [[JapanFG/tokio-marine|Tokio Marine Holdings]], [[JapanFG/msad|MS&AD Holdings]], [[JapanFG/sompo|Sompo Holdings]] etc. |
| Life insurer (生命保険会社) | Not on this list — different FSA register (seimei.pdf). See [[insurance/japan-life-insurance-big-four]]. |
| Insurance agency / broker | Different licensing (募集人 / 仲立人). See [[insurance/insurance-agency-and-brokerage-japan]]. |

## Registry snapshot

| Metric | Reading |
|---|---:|
| FSA as-of date | 2026-04-01 ^[extracted] |
| Domestic non-life insurance companies (内国損害保険会社) | ~30 ^[ambiguous — number shifts as direct / specialty / holding-company subsidiaries are added or merged] |
| Foreign non-life insurance companies (外国損害保険会社等) | ~20 ^[ambiguous — list expands with foreign reinsurer branches] |
| Lloyd's Japan platform | 1 entry, separate from foreign-insurer-branch rows ^[extracted] |
| Specialist reinsurers (再保険専業) | 2 domestic ([[JapanFG/toa-reinsurance|Toa Re]], [[JapanFG/japan-earthquake-reinsurance|JER]]) + several foreign branches ^[inferred] |
| Total non-life-protection-corporation member companies | mirrors FSA register member set ^[inferred] |

The FSA file is updated on an irregular cadence; readers should always re-fetch the latest songai.pdf / songai.xlsx before treating any specific row count as final.

## Cluster map

### A. 大手3社 — domestic holding-company groups (元受)

| Holding company | Domestic non-life operating company | Direct subsidiary | Specialty subsidiary |
|---|---|---|---|
| [[JapanFG/tokio-marine|Tokio Marine Holdings]] | [[JapanFG/tokio-marine-nichido-fire|Tokio Marine & Nichido Fire]] ^[extracted] | [[JapanFG/tokio-marine-direct|Tokio Marine Direct]] (旧 e-design) ^[extracted] | [[JapanFG/nisshin-fire|Nisshin Fire & Marine]] ^[extracted] |
| [[JapanFG/msad|MS&AD Holdings]] | [[JapanFG/mitsui-sumitomo-insurance|Mitsui Sumitomo Insurance]] + [[JapanFG/aioi-nissay-dowa-insurance|Aioi Nissay Dowa Insurance]] ^[extracted] | [[JapanFG/mitsui-direct|Mitsui Direct General]] ^[extracted] | — |
| [[JapanFG/sompo|Sompo Holdings]] | [[JapanFG/sompo-japan-insurance|Sompo Japan Insurance]] ^[extracted] | [[JapanFG/sompo-direct|Sompo Direct]] (旧 Saison Automobile & Fire) ^[extracted] | — |

The 大手3社 cluster collectively underwrites the vast majority of Japan's domestic auto, fire, and commercial non-life premium ^[inferred]. The holding-company / operating-company / direct-subsidiary / specialty-subsidiary split matters because cession flows, governance scope, and regulatory disclosure cut differently at each layer — see [[insurance/japan-nonlife-big-three]].

### B. Direct (digital / telco / EC) non-life insurers

| Operating company | Distribution anchor | Cluster |
|---|---|---|
| [[JapanFG/sony-insurance|Sony Insurance]] | [[JapanFG/sony-fg|Sony Financial Group]] direct auto ^[extracted] | Direct-to-consumer auto, fire, medical |
| [[JapanFG/sbi-insurance|SBI Insurance]] | [[JapanFG/sbi-hd|SBI Group]] platform ^[extracted] | Direct auto / fire / cancer |
| [[JapanFG/au-insurance|au Insurance]] | [[JapanFG/au-fh|au Financial Holdings]] / KDDI ^[extracted] | Telco-bundled non-life |
| [[JapanFG/rakuten-general-insurance|Rakuten General Insurance]] | [[JapanFG/rakuten-fg|Rakuten Group]] / [[JapanFG/rakuten-insurance-hd|Rakuten Insurance HD]] ^[extracted] | EC-platform-bundled non-life |
| [[JapanFG/tokio-marine-direct]] | Tokio Marine HD ^[extracted] | Direct auto under big-three umbrella |
| [[JapanFG/sompo-direct]] | Sompo HD ^[extracted] | Direct auto under big-three umbrella |
| [[JapanFG/mitsui-direct]] | MS&AD HD ^[extracted] | Direct auto under big-three umbrella |

Direct insurers compete on cost and customer-acquisition channel rather than tied-agency density. They are still subject to FSA non-life licensing and to the catastrophe-risk economics described in [[insurance/natcat-reinsurance-japan]].

### C. Specialty / niche / regional non-life insurers

| Operating company | Specialty | Notes |
|---|---|---|
| [[JapanFG/anicom-insurance|Anicom Insurance]] | Pet insurance ^[extracted] | Holding [[JapanFG/anicom-hd]]; among largest Japan pet insurers |
| [[JapanFG/dai-ichi-ipet-insurance|Dai-ichi iPet Insurance]] | Pet insurance ^[extracted] | iPet brand under [[JapanFG/dai-ichi-life]] group |
| [[JapanFG/pet-and-family-insurance|Pet & Family Insurance]] | Pet insurance ^[extracted] | Pet specialty |
| [[JapanFG/yamap-naturance-insurance|YAMAP Naturance Insurance]] | Outdoor / hiking specialty ^[extracted] | YAMAP outdoor-app affiliated |
| [[JapanFG/ntt-docomo-sonpo|NTT Docomo Insurance]] | Telco-bundled mobile / travel ^[extracted] | Under [[JapanFG/ntt-docomo-sompo-hd]] |
| [[JapanFG/secom-insurance|SECOM Insurance]] | Security / home / medical ^[extracted] | Tied to SECOM physical security |
| [[JapanFG/daido-fire-marine|Daido Fire & Marine]] | Regional / commercial ^[extracted] | Long-standing mid-size non-life |
| [[JapanFG/kyoritsu-fire-marine|Kyoritsu Fire & Marine]] | Regional / commercial ^[extracted] | Long-standing mid-size non-life |
| [[JapanFG/nisshin-fire|Nisshin Fire & Marine]] | Auto / fire (Tokio Marine group) ^[extracted] | Tokio Marine subsidiary |
| [[JapanFG/meiji-yasuda-general-insurance|Meiji Yasuda General Insurance]] | Group-life-affiliated non-life ^[extracted] | Under [[JapanFG/meiji-yasuda]] |
| [[JapanFG/cardif-nonlife|Cardif Non-Life]] | Credit / loan-protection ^[extracted] | BNP Paribas Cardif group |
| [[JapanFG/capital-insurance|Capital Insurance]] | Specialty ^[extracted] | Niche |
| [[JapanFG/sakura-insurance|Sakura Insurance]] | Specialty ^[extracted] | Niche |
| [[JapanFG/sbi-insurance-group|SBI Insurance Group]] | Group holding ^[extracted] | SBI group |
| [[JapanFG/ji-accident-fire-insurance|JI Accident & Fire]] | Specialty accident / fire ^[extracted] | Specialty |
| [[JapanFG/zenkankyo-reiwa-insurance|Zenkankyo Reiwa Insurance]] | Specialty ^[extracted] | Specialty |
| [[JapanFG/rescue-insurance|Rescue Insurance]] | Travel / assistance ^[inferred] | Specialty |
| [[JapanFG/hs-insurance|HS Insurance]] | Travel ^[extracted] | H.I.S. travel-affiliated |

The specialty cluster reflects a 2010s-2020s structural shift: Japan's non-life premium has expanded into pet, outdoor, travel, mobility, telco-bundled, and EC-bundled niches that the 大手3社 cannot easily serve at their unit-cost base.

### D. Foreign-affiliated direct non-life insurers (外国損害保険会社等)

| FSA-listed name | Parent | Cluster |
|---|---|---|
| [[JapanFG/aig-japan|AIG Japan]] | AIG (NYSE: AIG) ^[extracted] | US-affiliated multi-line |
| [[JapanFG/axa-japan|AXA Japan]] | AXA SA (Euronext: CS) ^[extracted] | French multi-line |
| [[JapanFG/allianz-fire-marine-japan|Allianz Fire & Marine Insurance Japan]] | Allianz SE (DAX: ALV) ^[extracted] | German multi-line |
| [[JapanFG/chubb-insurance-japan|Chubb Insurance Japan]] | Chubb Limited (NYSE: CB) ^[extracted] | US-Swiss specialty/multi-line |
| [[JapanFG/hyundai-marine-fire-japan|Hyundai Marine & Fire Japan]] | Hyundai M&F (KOSPI) ^[extracted] | Korean multi-line |
| [[JapanFG/american-home-insurance-japan|American Home Insurance Japan]] | AIG group ^[extracted] | US-affiliated specialty |
| [[JapanFG/starr-insurance-japan|Starr Insurance Japan]] | Starr Companies (US) ^[extracted] | US specialty |

Foreign-affiliated direct insurers operate either as branches (外国損害保険会社) or as 100%-owned Japanese subsidiaries (株式会社 with foreign parent), depending on the FSA license category — see [[JapanFG/legal-financial-licenses/insurance-license-and-solvency]]. The Lloyd's Japan platform is treated separately because Lloyd's is a marketplace, not a single carrier.

### E. Lloyd's Japan (marketplace platform)

| Entity | Notes |
|---|---|
| [[JapanFG/lloyd-japan|Lloyd's Japan Inc. / ロイズ・ジャパン株式会社]] | Lloyd's of London's licensed Japan platform; licensed 2000 ^[inferred] |

Lloyd's Japan is structurally different from every other row on this list: it is the FSA-registered local channel through which Lloyd's syndicates write Japan-located risks, rather than a single risk-bearing carrier. See [[insurance/lloyds-japan-syndicate-operating-model]] for the syndicate-capacity model, marine / aviation / cyber / political-risk lines, and reinsurance-vs-direct boundary.

### F. Reinsurers in Japan

| Operating company | Parent / structure | Cluster |
|---|---|---|
| [[JapanFG/toa-reinsurance|Toa Reinsurance]] | Domestic listed (TSE) ^[extracted] | Japanese specialist reinsurer |
| [[JapanFG/japan-earthquake-reinsurance|Japan Earthquake Reinsurance (JER)]] | Public-private earthquake scheme operator ^[extracted] | Earthquake-only specialist |
| [[JapanFG/munich-re-japan|Munich Re Japan]] | Munich Re AG (DAX: MUV2) ^[extracted] | Foreign branch — global Big 2 |
| [[JapanFG/swiss-re-japan|Swiss Re Japan]] | Swiss Re Ltd. (SIX: SREN) ^[extracted] | Foreign branch — global Big 2 |
| [[JapanFG/hannover-re-japan|Hannover Re Japan]] | Hannover Rück SE (FWB: HNR1) / Talanx ^[extracted] | Foreign branch — European 3rd pillar |
| [[JapanFG/scor-japan|SCOR Japan]] | SCOR SE (Euronext: SCR) ^[extracted] | Foreign branch — European 4th pillar |
| [[JapanFG/gen-re-japan|Gen Re Japan]] | General Re Corp. → Berkshire Hathaway (NYSE: BRK) ^[extracted] | Foreign branch — US Berkshire-owned |
| [[JapanFG/rga-japan|RGA Japan]] | RGA Inc. (NYSE: RGA) ^[extracted] | Foreign branch — US life-specialist |
| [[JapanFG/pacific-life-re-japan|Pacific Life Re Japan]] | Pacific Life Insurance Co. (US mutual) ^[extracted] | Foreign branch — US life specialist |

Reinsurers are licensed as 外国損害保険会社等 (foreign branch) or 内国損害保険会社 (domestic) under the same FSA register as direct insurers, but they do not underwrite policyholder retail business directly and are therefore excluded from the Non-Life Insurance Policyholders Protection Corporation member set (see [[JapanFG/toa-reinsurance]] which is the exception, being a member). The reinsurance market structure is analysed on [[insurance/foreign-reinsurer-japan-landscape]].

## Promotion / standalone rules

A non-life insurer is worth a dedicated JapanFG page when at least one of these applies:

- it sits in the 大手3社 holding-company or operating-company layer;
- it is a registered direct (digital / telco / EC) non-life insurer with public IR or material brand presence;
- it is a foreign-affiliated insurer with a distinct Japan strategy, parent regulatory link, or specialty;
- it is a reinsurer with public group disclosure;
- it is a specialty insurer that creates a new product category (pet, outdoor, cyber, parametric) and is recurringly referenced in insurance / fintech / consumer-finance analysis.

A standalone page is *not* required for every FSA row that is captured here. Long-tail specialty rows can stay registry-only until a research question pulls them into wider analysis.

## How to read this registry

1. **Start at the holding-company layer** when the question is "who is this group?" — use [[insurance/japan-nonlife-big-three]].
2. **Drop to the operating-company layer** when the question is about underwriting entity, agency channel, or domestic merger lineage.
3. **Use the direct / specialty cluster** when comparing distribution economics or new product categories.
4. **Use the foreign-affiliated cluster** when analysing inbound capital, cross-border specialty placement, or parent-group strategy.
5. **Use the Lloyd's / reinsurer clusters** when the question is about risk transfer, marine / aviation / cyber capacity, or catastrophe cession.
6. **Cross-check with capital framework** via [[insurance/global-solvency-framework-comparison-matrix]] when comparing across regimes — a Japan-licensed branch and its parent may sit on different solvency lenses.

## Counterpoints

- The FSA non-life register groups branches, subsidiaries, and reinsurers into one workbook; the cluster split on this page is editorial, not regulatory. ^[inferred]
- The "大手3社" label is industry shorthand, not a regulatory category — there is no Insurance Business Act provision that gives the three holding companies a distinct status. ^[inferred]
- Several "specialty" insurers are legally identical in licensing to multi-line incumbents; the specialty label reflects business model, not license type. ^[extracted]

## Open questions

- How does the FSA workbook treat Lloyd's syndicates that participate via Lloyd's Japan — as one row or as syndicate-level entries? See [[insurance/lloyds-japan-syndicate-operating-model]]. ^[ambiguous]
- How many domestic non-life insurers are members of both the General Insurance Association of Japan (損保協会) and the Non-Life Insurance Policyholders Protection Corporation, and where do the lists diverge? ^[ambiguous]
- Are there Japan-incorporated captives licensed under any non-FSA route that the FSA non-life workbook does not cover? See [[insurance/captive-insurance-japan-market]] for the offshore-dominated answer. ^[ambiguous]

## Related

- [[JapanFG/INDEX]]
- [[JapanFG/trust-companies-japan-index]]
- [[JapanFG/foreign-bank-branches-japan-index]]
- [[insurance/INDEX]]
- [[insurance/japan-nonlife-big-three]]
- [[insurance/natcat-reinsurance-japan]]
- [[insurance/economic-value-based-solvency]]
- [[insurance/global-solvency-framework-comparison-matrix]]
- [[insurance/foreign-reinsurer-japan-landscape]]
- [[insurance/marine-insurance-and-pi-cover-market]]
- [[insurance/lloyds-japan-syndicate-operating-model]]
- [[insurance/captive-insurance-japan-market]]
- [[insurance/insurance-agency-and-brokerage-japan]]
- [[JapanFG/tokio-marine]]
- [[JapanFG/msad]]
- [[JapanFG/sompo]]
- [[JapanFG/tokio-marine-nichido-fire]]
- [[JapanFG/mitsui-sumitomo-insurance]]
- [[JapanFG/aioi-nissay-dowa-insurance]]
- [[JapanFG/sompo-japan-insurance]]
- [[JapanFG/toa-reinsurance]]
- [[JapanFG/japan-earthquake-reinsurance]]
- [[JapanFG/munich-re-japan]]
- [[JapanFG/swiss-re-japan]]
- [[JapanFG/hannover-re-japan]]
- [[JapanFG/scor-japan]]
- [[JapanFG/gen-re-japan]]
- [[JapanFG/rga-japan]]
- [[JapanFG/pacific-life-re-japan]]
- [[JapanFG/lloyd-japan]]
- [[JapanFG/japan-pi-club]]
- [[JapanFG/legal-financial-licenses/insurance-license-and-solvency]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: 損害保険会社免許一覧 (songai.pdf / songai.xlsx), as of 2026-04-01.
- FSA: 保険会社免許一覧 (hoken.pdf), all-insurer master register.
- General Insurance Association of Japan (損保協会): 業界概要.
- Non-Life Insurance Policyholders Protection Corporation of Japan: member-company list, as of 2026-04.
- Tokio Marine Holdings / MS&AD Holdings / Sompo Holdings: integrated / annual reports (operating-company subsidiaries disclosure).
