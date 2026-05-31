---
source: insurance/foreign-reinsurer-japan-landscape
source_hash: 63b4a843f0272c88
lang: zh
status: machine
fidelity: ok
title: "Foreign reinsurer Japan landscape"
translated_at: 2026-05-31T11:13:44.949Z
---

# Foreign reinsurer Japan landscape

## TL;DR

Japan's reinsurance market combines two domestic specialists ([[JapanFG/toa-reinsurance|Toa Re]] and [[JapanFG/japan-earthquake-reinsurance|Japan Earthquake Reinsurance]]) with a panel of seven foreign reinsurer branches operating under the FSA's 外国損害保険会社等 license category for non-life and the equivalent 外国生命保険会社等 category for life. The foreign panel — Munich Re, Swiss Re, Hannover Re, SCOR, Gen Re, RGA, and Pacific Life Re — supplies most of the *private* catastrophe and life-reinsurance capacity behind the 大手3社 ([[insurance/japan-nonlife-big-three|Japan non-life big three]]) and behind the [[insurance/japan-life-insurance-big-four|life big four]]. This page maps that landscape: cession patterns (proportional / non-proportional), capacity by line of business, regulatory boundary (再保険 license vs branch), and retro market.

The headline reading rule: residential earthquake risk is ceded through the public-private scheme described in [[insurance/earthquake-insurance-public-private-scheme]]; *every other* catastrophe and life cession from a Japanese primary insurer enters this private panel.

## Wiki route

This entry sits under [[insurance/INDEX|insurance index]]. Read it against [[insurance/natcat-reinsurance-japan|nat-cat reinsurance in Japan]] for the risk-driver layer, [[insurance/japan-nonlife-big-three|Japan non-life big three]] for the ceding-insurer layer, [[insurance/global-solvency-framework-comparison-matrix|global solvency framework comparison matrix]] for how each parent reinsurer is capitalised under its home regime, [[insurance/lloyds-japan-syndicate-operating-model|Lloyd's Japan syndicate operating model]] for the specialty / Lloyd's marketplace alternative, and [[insurance/captive-insurance-japan-market|captive insurance Japan market]] for the corporate alternative-risk-transfer route. The entity-level pages live in [[JapanFG/INDEX|JapanFG]] — [[JapanFG/munich-re-japan]], [[JapanFG/swiss-re-japan]], [[JapanFG/hannover-re-japan]], [[JapanFG/scor-japan]], [[JapanFG/gen-re-japan]], [[JapanFG/rga-japan]], [[JapanFG/pacific-life-re-japan]] — and the index surface is [[JapanFG/nonlife-insurer-registry-japan-index]].

## 1. Regulatory boundary: 再保険 license vs branch

| Pathway | What it is | FSA register | Examples |
|---|---|---|---|
| Domestic non-life reinsurer (内国損害保険会社, reinsurance business) | Japanese-incorporated company writing reinsurance | 損害保険会社免許一覧 (songai.pdf), domestic section ^[extracted] | [[JapanFG/toa-reinsurance|Toa Re]], [[JapanFG/japan-earthquake-reinsurance|JER]] |
| Foreign non-life reinsurer branch (外国損害保険会社等) | Foreign-parented branch licensed in Japan | songai.pdf, foreign section ^[extracted] | [[JapanFG/munich-re-japan|Munich Re Japan]], [[JapanFG/swiss-re-japan|Swiss Re Japan]], [[JapanFG/hannover-re-japan|Hannover Re Japan]], [[JapanFG/scor-japan|SCOR Japan]], [[JapanFG/gen-re-japan|Gen Re Japan]] |
| Foreign life reinsurer branch (外国生命保険会社等) | Foreign-parented branch licensed for life reinsurance | 生命保険会社免許一覧 (seimei.pdf), foreign section ^[extracted] | [[JapanFG/rga-japan|RGA Japan]], [[JapanFG/pacific-life-re-japan|Pacific Life Re Japan]], life arms of Munich Re / Swiss Re / Hannover Re / SCOR |

The "Big 2 + 2 + US-2 + life-1" matrix below shows where each panel reinsurer fits.

## 2. The panel: who is here

| Reinsurer | Japan-branch entity | Parent listing | Home regulator | Primary Japan focus |
|---|---|---|---|---|
| Munich Re | [[JapanFG/munich-re-japan]] | Münchener Rück AG, DAX: MUV2 ^[extracted] | BaFin (DE) | P&C natcat (EQ / typhoon), casualty, marine/aviation, life via Munich Re Life |
| Swiss Re | [[JapanFG/swiss-re-japan]] | Swiss Re Ltd., SIX: SREN ^[extracted] | FINMA (CH) | P&C reinsurance, Life & Health Re, Corporate Solutions (direct large-corporate), Public Sector Solutions (parametric) |
| Hannover Re | [[JapanFG/hannover-re-japan]] | Hannover Rück SE, FWB: HNR1 (Talanx-controlled) ^[extracted] | BaFin (DE) | P&C reinsurance, L&H reinsurance, structured / financial reinsurance |
| SCOR | [[JapanFG/scor-japan]] | SCOR SE, Euronext Paris: SCR ^[extracted] | ACPR (FR) | P&C treaty, L&H, specialty (marine / aviation / engineering / credit & surety) |
| Gen Re | [[JapanFG/gen-re-japan]] | General Re Corp. → Berkshire Hathaway, NYSE: BRK ^[extracted] | NAIC + BaFin (Gen Re AG) | P&C treaty, casualty, life via Gen Re Life |
| RGA | [[JapanFG/rga-japan]] | RGA Inc., NYSE: RGA ^[extracted] | Missouri DCI (US) | Life / health reinsurance specialist |
| Pacific Life Re | [[JapanFG/pacific-life-re-japan]] | Pacific Life Insurance Co. (US mutual) ^[extracted] | California DOI / UK PRA | Life / health reinsurance specialist |

## 3. Cession patterns: proportional vs non-proportional

Japanese primary insurers structure their outwards reinsurance in two main shapes, with most large 大手3社 programmes blending both.

### Proportional (quota share, surplus)

The cedent gives up a fixed share of premium *and* a matching share of losses. Used for:

Hannover Re's "Structured Reinsurance / Financial Solutions" and RGA's "Financial Solutions" target this segment.

### Non-proportional (excess of loss, stop loss, cat XL)

The cedent retains losses up to an attachment point; the reinsurer pays only the excess. Used for:

- natural-catastrophe protection (earthquake, typhoon, flood) — see [[insurance/natcat-reinsurance-japan]];

### Cession-shape summary

| Cession shape | Primary use | Lead foreign panel members |
|---|---|---|

## 4. Capacity by line of business

| Line | Foreign-panel role | Key panel members | Reference |
|---|---|---|---|
| Earthquake (residential) | Tail layer behind public scheme | Limited — JER + government absorb most of the residential layer | [[insurance/earthquake-insurance-public-private-scheme]] |
| Marine hull / cargo | Foreign panel + Lloyd's syndicates | Swiss Re, Hannover Re + Lloyd's | [[insurance/marine-insurance-and-pi-cover-market]] |
| P&I (船主賠償) | International Group pooling + global retro panel | Munich Re, Swiss Re, Hannover Re at retro layer | [[JapanFG/japan-pi-club]] |
| Aviation | Lloyd's-led, foreign panel co-participates | Lloyd's syndicates + Munich Re, Swiss Re | [[insurance/lloyds-japan-syndicate-operating-model]] |
| Energy / offshore | Specialty foreign panel | Swiss Re Corporate Solutions, Lloyd's | — |
| Cyber | Growing line; quota share + cat XL | Munich Re, Swiss Re, Hannover Re, Lloyd's | [[JapanFG/lloyd-japan]] |
| Political risk / credit / surety | Specialty | SCOR, Hannover Re, Lloyd's | — |
| Life mortality / morbidity | YRT / coinsurance | RGA, Munich Re Life, Swiss Re L&H, Pacific Life Re | [[insurance/japan-life-insurance-big-four]] |
| Longevity / annuity / pension | Capital-relief / longevity swap | RGA, Pacific Life Re, Swiss Re L&H | [[insurance/mutual-vs-stock-life-insurer]] |
| Medical / health | YRT, stop loss | RGA, Hannover Re L&H | [[JapanFG/aflac-japan]] |

## 5. Big 2 vs Big 4 vs US-2 vs life-specialist

This is the most useful editorial frame:

| Cluster | Members | What they bring |
|---|---|---|

The boundaries blur because Munich Re, Swiss Re, and Hannover Re each operate a life arm, and SCOR runs both P&C and L&H, but the panel cluster is still a useful first read.

## 6. Retro market: where the reinsurers' own risk goes

Reinsurers cede part of their own assumed risk to **retrocessionaires** ("retro") to manage peak exposures and to free capacity. The Japan-relevant retro flow runs through:

This retro layer is largely invisible to Japan-resident analysts because it sits outside FSA's licensed insurer / reinsurer register and is reported only at parent-reinsurer group level. Reading parent disclosure under each capital regime ([[insurance/global-solvency-framework-comparison-matrix]]) is the only public route.

## 7. Comparison: foreign panel vs domestic specialists

| Dimension | Foreign panel (Big 2 + 2 + US-2 + life-1) | Domestic specialist ([[JapanFG/toa-reinsurance|Toa Re]], [[JapanFG/japan-earthquake-reinsurance|JER]]) |
|---|---|---|
| License | 外国損害 / 外国生保 branch ^[extracted] | 内国損害 (Japan-incorporated) ^[extracted] |
| Earthquake (residential) role | Tail-layer participation | Core scheme operator (JER) ^[extracted] |
| Policyholder Protection Corp. coverage | Excluded (reinsurance only, no direct retail policies) ^[extracted] | Toa Re is a member ^[extracted]; JER coverage varies |

## 8. Why this landscape matters

- **Capital relief.** Quota share and structured reinsurance free FSA ESR capacity for the cedent; the price is a long-term partnership with one of the global panel members. See [[insurance/economic-value-based-solvency]].

## Related

- [[insurance/INDEX]]
- [[insurance/natcat-reinsurance-japan]]
- [[insurance/japan-nonlife-big-three]]
- [[insurance/japan-life-insurance-big-four]]
- [[insurance/earthquake-insurance-public-private-scheme]]
- [[insurance/economic-value-based-solvency]]
- [[insurance/global-solvency-framework-comparison-matrix]]
- [[insurance/marine-insurance-and-pi-cover-market]]
- [[insurance/lloyds-japan-syndicate-operating-model]]
- [[insurance/captive-insurance-japan-market]]
- [[JapanFG/nonlife-insurer-registry-japan-index]]
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

- FSA: 損害保険会社免許一覧 (songai.pdf) — foreign non-life and reinsurer entries.
- FSA: 生命保険会社免許一覧 (seimei.pdf) — foreign life reinsurer entries.
- Munich Re Japan office page.
- Swiss Re Japan office page; Sigma annual research series.
- Hannover Rück Japan branch page.
- SCOR Japan location page.
- Gen Re Japan location page.
- RGA Japan operations page.
- Pacific Life Re corporate site.
- Public IR disclosures of Tokio Marine Holdings, MS&AD Holdings, Sompo Holdings on ceded premium and reinsurance recoverables.
