---
source: fintech/eu-mica-implementation-status-2026
source_hash: 9133c712a99511bd
lang: en
status: machine
fidelity: ok
title: "EU MiCA implementation status 2026-05  · EMT/ART license diagram × USDT withdrawal × USDC market share reconstruction"
translated_at: 2026-05-31T11:13:44.831Z
---

# EU MiCA implementation status 2026-05  · EMT/ART license diagram × USDT withdrawal × USDC market share reconstruction

##TL;DR

EU MiCA (Markets in Crypto-Assets Regulation, Regulation (EU) 2023/1114) has entered a 18 -month steady implementation state after **2024-06 SC (EMT/ART) partial implementation** and **2024-12  full implementation**. Status as of 2026-05 : **about 22 社 EMT license holders** (spanning 13  member states), **only 3 社 ART license holders** (Bitstamp Pay / Quantoz EURD / some Société Générale products), **USDT circulation on major EU exchanges has almost disappeared** (from about 28% share in 2024-12  to about 1% in 2026-05 ), **the dual track of USDC (Circle Europe Tight) and EURC covers 90%+ of EU fiat SC circulation**, and **Société Générale-FORGE EURCV** plus **BBVA EUR stablecoin** have become the two major drivers of bank euro SC. On the regulatory side, **coordination among ESMA + EBA + national competent authorities (BaFin / AMF / CSSF / Banca d'Italia, etc.) has stabilized**, but 2  design issues have surfaced: **large EMT circulation caps** and **the near-disappearance of ART** —— see [[fintech/mica-overview|MiCA 概観]] and [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART 詳細]].

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it alongside [[fintech/mica-overview|MiCA 概観]] for the legal framework, [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART]] for token classification, and [[fintech/dora-eu-digital-operational-resilience-overview|DORA 概観]] for the "Business + Resilience" two-track architecture.

## Implementation timeline (2024-2026)

|date|event|meaning|
|---|---|---|
|2023-06-09|Regulation (EU) 2023/1114  adopted (MiCA main document)|starting point|
|2024-06-30|Title III (EMT) + Title IV (ART) 施行|Stablecoin part ahead|
|2024-12-30|Title V (CASP) + Fully Enforced|Including exchange/wallet custody/advisor etc.|
|2024-12-31|Tether proactively notifies EU exchanges of USDT delisting|USDT withdraws from EU mainstream market|
|2025-01-08|Coinbase Europe / Kraken EU / Bitstamp delists USDT for EU users|The mainstream is dead|
|2025-03 |Circle Europe Tight (SAS, France) obtains EMT license from ACPR in France|The first step towards USDC EU compliance|
|2025-05 |EURC acquires EMT license, distribution volume increases to €200M|Circle Two brands running side by side|
|2025-09 |Société Générale-FORGE EURCV and MiCA EMT free|First tile holding as a bank-affiliated Euro SC|
|2025-11 |BBVA announces Euro SC plan (in consultation with Spain's Banco de España)|Second banking company enters the market|
|2025-12 |Quantoz EURD receives ART license|ART Category One of the initial tile holding methods|
|2026-02 |MiCA passport mechanism begins to be used interchangeably among member countries|If you obtain an EMT license in the Netherlands, you can passport it in Germany/France/Italy.|
|2026-03 |BBVA EUR stablecoin (BBVA EURO) launches on Ethereum + Polygon|Second banking company launched|
|2026-04 |ESMA Q&A version 3  updated, clarification that DAI/USDS/LUSD is not subject to MiCA but EU public offer is prohibited|Gray zone boundaries of decentralized SC|
|2026-05 |EMT licensed party accumulated 22 社, ART licensed party 3 社|Implementation steady state|

## EMT (E-Money Token) licensed party (2026-05)

|licensed party|National Bureau|Main SC|Circulation scale (2026-05)|route|
|---|---|---|---|---|
|Circle Europe Tight|ACPR (France)|USDC + EURC|EURC €280M / USDC EU Circulation ~$8B|EMI upgrade|
|Société Générale-FORGE|ACPR (France)|EURCV|€60M|bank subsidiary|
|BBVA|Bank of Spain|BBVA EURO|€25M (2026-05  early launch)|bank direct|
|How much|DNB (Netherlands)|EURD (ART) + EURQ (EMT)|EURQ €40M|EMI|
|Membrane Finance|FIN-FSA (Finland)|EUROe|€35M|EMI|
|Banking Circle|CSSF (Luxembourg)|BC EUR / BC USD|€120M / $80M|commercial bank|
|Schuman Financial|CBI (Ireland)|EURØP|€25M|EMI|
|StablR|MFSA (Malta)|EURR / USDR|€15M / $20M|EMI|
|Crypto.com Europe|MFSA (Malta)|CDCEUR|€10M|EMI + CASP|
|Bitstamp Pay|LB (Lithuania)|BPC EUR|€18M|EMI|
|Others ~12 社 (including many EMI small SCs with Lithuanian license + German BaFin license 2 社)|Each joining country|Multiple small EUR/USD SCs|Total ~€80M|EMI|

**Core observations**:

1. **Circle (USDC + EURC) is the strongest**, distribution scale accounts for ~75% of total EMT volume
2. **France ACPR, Luxembourg CSSF, Lithuania LB, Malta MFSA** are EMT license concentration centers
3. **Bank issuers (Société Générale + BBVA) still have a smaller circulation than Circle**, but their growth curve is faster (BBVA launches €25M in 2  months)
4. **PYUSD (PayPal)** does not choose the MiCA EMT route — PayPal operates payments in the EU under the existing EMI license, PYUSD will not be distributed on mainstream EU exchanges for the time being

## ART (Asset-Referenced Token) licensed party (2026-05)

|licensed party|ART products|anchor asset|circulation|
|---|---|---|---|
|How much|EURD|Bank deposits + short-term bond basket|€15M|
|Bitstamp Pay|(Application pending)|Anchor schedule to currency basket|n/a|
|Société Générale-FORGE|CBV series (limited)|Multi-asset linkage|< €5M|

**ART is almost extinct**: Consistent with [[fintech/mica-overview|MiCA 概観]]'s prediction, ART has an excessive regulatory burden → almost no one will choose the ART route. ARTs under EBA supervision have (1) stricter reserve management regulations than EMTs, (2) upper limit on circulation amount for large ARTs (>€5B), (3) higher capital requirements, (4) It is necessary to meet the high frequency of continuous supervisory reporting, and as a result, the compliance cost is 3-5  times that of EMT, but there is no clear commercial advantage → ART has been reduced to "theoretically existing".

## USDT withdrawal from EU and restructuring of USDC share

**USDT retreat curve**:

|point in time|USDT distribution/share on EU mainstream exchanges|
|---|---|
|2024-09 |~28% of EU SC trading volume|
|2024-12-30|Tether announces active withdrawal|
|2025-01-08|Coinbase Europe / Kraken EU / Bitstamp delisted|
|2025-03 |~6% (remains on small exchange/OTC)|
|2025-09 |~3%|
|2026-05 |~1% (mainly gray channel outside EU regulations)|

**Inflow after USDT withdrawal**:

- **USDC pure inflow (EU)** ~$45B (2025-01~2026-05  cumulative)
- **EURC inflow** ~€220M (cumulative over the same period)
- **Banking Department ユーロ SC (EURCV + BBVA EURO + Banking Circle)** Total ~€180M

**USDC share** is 2026-05  and ~78% EU SC distribution, almost monopolized. **EURC + Bank Euro SC total** is still ~10% (~€400M), a difference of 20x from USDC EU circulation $8B+. **Smallness of the Euro SC market** is a structural reality after the implementation of MiCA - Although [[fintech/mica-overview|MiCA 概観]]'s initial judgment that ``the difference between EURC distribution and USDC is 300x'' has been significantly reduced (currently the difference is 20x), it has not caught up with it yet.

### Circle EURC

- First appeared in Stellar on 2022-06 , expanded to Ethereum/Avalanche/Solana/Base on 2023
- Acquire ACPR EMT license for 2025-05  (simultaneously with USDC)
- Reserves 100% Short-term government bonds + central bank deposits + cash, BlackRock partial custody
- 2026-05  Distribution €280M, Main use: Crypto exchange EUR pair / DeFi (Aave Polygon) / Euro cross-border payment
- USDC and Circle share the same compliance frame → euro side replication of [[fintech/circular-reserve-asset-flywheel-overview|循環準備資産フライホイール]]

### Société Générale-FORGE EURCV (Euro Coin Vertu)

- 2023-04  first appearance (as an internal product before MiCA)
- MiCA EMT application passed for 2025-09  (Société Générale-FORGE is a joint venture fintech subsidiary of SocGen)
- Launched on 2026-Q1  with Stellar + Ethereum + Solana
- Reserves French short-term government bonds + commercial bank deposits + ECB deposit facility
- 2026-05  Distribution €60M, Application: Large enterprises B2B Cross-border payment / institutional yield-bearing wallet test
- Fully consistent with [[fintech/institutional-stablecoin-deposit-token-thesis|機関ステーブルコイン / デポジットトークン論題]] —— SocGen positions EURCV as “half SC, half deposit token”

### BBVA EURO

- 2025-11  announced, 2026-03  launched
- Discussions with Banco de España + passport negotiations with ACPR
- Deployment chain Ethereum + Polygon (Base/Avalanche added later)
- Reserves are in BBVA in-house custody + third party audit (KPMG España)
- Distribution €25M (2026-05, initial stage)
- Application: Cross-border payments for the BBVA Spanish market (Spain + Mexico + Latin America BBVA subsidiaries)
- Linked with BBVA Spanish cross-border perspective in [[fintech/brazil-mexico-cbdc-stablecoin-push-2026|Brazil/Mexico CBDC 推進]]

### Small SC such as EUROe / EURØP / EURR etc.

- Mainly used in DeFi/crypto exchange EUR pair
- Single scale < €40M
- Long tail market → Possibility of future consolidation/acquisition

## ESMA × EBA × National Administration Coordination Mechanism

**MiCA Regulatory Architecture**:

- **ESMA (European Securities and Markets Authority)** is responsible for CASP (Crypto-Asset Service Provider) supervisory coordination + anti-market manipulation + cross-border information sharing
- **EBA (European Banking Authority)** is responsible for EMT + ART supervision (as SC is essentially an e-money/asset-linked product and falls under the banking category)
- **National Competent Authority (NCA)** is responsible for the actual license issuance + day-to-day supervision:
- ACPR (France) — Circle / SocGen
- BaFin (Germany) — EMI tile holding 2 社
- DNB (Netherlands) — Quantoz
- CSSF (Luxembourg) — Banking Circle
- CBI (Ireland) — Schuman Financial
- MFSA (Malta) — StablR / Crypto.com
- LB (Lithuania) — Bitstamp Pay + many small EMIs
- Bank of Spain — BBVA

**Passport mechanism**: EMT/ART holders can obtain a passport that is distributed throughout the EU after obtaining a license in a certain member state. From 2026-02 , the passport process has been standardized, and supervisory coordination among member countries has been completed through the ESMA + EBA supervisory college.

**Actual collaborative task**:

1. **Differences in examination stringency among national authorities**: France ACPR is strict, Malta MFSA is lenient → A trend towards regulatory arbitrage has emerged (similar to the phenomenon in which early EU funds were concentrated in Luxembourg)
2. **The boundary between ESMA on the CASP side and EBA on the EMT/ART side is unclear**: For example, if an exchange issues its own SC (Coinbase USDC or Coinbase Europe CASP), which one will lead the review?
3. **Large EMT (>€100M / >1M Users / Daily Transactions >€1M) Restrictive Clauses** Application Issues to USDC: ESMA 2026-03 Official statement states that USDC is EMT” threshold has been met, but specific restrictions (e.g. prohibition of non-euro trading pairs) are being evaluated on a case-by-case basis.

## Related

- [[fintech/INDEX|FinWiki Fintech Index]]
- [[fintech/mica-overview|MiCA 概観]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART 詳細]]
- [[fintech/mica-cross-border-implications|MiCA クロスボーダー含意]]
- [[fintech/dora-eu-digital-operational-resilience-overview|DORA 概観]]
- [[fintech/dora-eu-digital-operational-resilience-ctpp|DORA CTPP]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|グローバルステーブルコイン規制五極マトリクス]]
- [[fintech/circular-reserve-asset-flywheel-overview|循環準備資産フライホイール]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 SC MRA フレームワーク]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関ステーブルコイン / デポジットトークン論題]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/brazil-mexico-cbdc-stablecoin-push-2026|Brazil/Mexico CBDC × ステーブルコイン推進]]
- [[fintech/tether-business-model-short-treasury-yield|Tether ビジネスモデル]]

## Sources

- ESMA — Crypto-Assets policy https://www.esma.europa.eu/policy-activities/crypto-assets
- EBA — Crypto-Assets MiCA Regulation https://www.eba.europa.eu/regulation-and-policy/crypto-assets-mica
- Circle — EURC MiCA https://www.circle.com/en/legal/eurc-mica
- Société Générale-FORGE — EURCV product page https://www.sgforge.com/product/eurcv/
- BBVA — Euro stablecoin launch announcement https://www.bbva.com/en/innovation/bbva-launches-euro-stablecoin/
- Tether — EU delisting notice https://tether.to/en/news/2024-eu-delisting/
- MiCA — Regulation (EU) 2023/1114 full text https://eur-lex.europa.eu/eli/reg/2023/1114/oj
- BaFin — MiCAR landing page https://www.bafin.de/EN/Aufsicht/MiCAR/MiCAR_node.html
- ESMA Q&A on MiCA Title III/IV (v3, 2026-04, public release)
- EBA supervisory college report on large EMT/ART (2026-Q1, public release)

---

**Last refresh** (2026-05-26): reconciled EURC numbers with [[fintech/mica-overview|MiCA 概観]] (both now reference €280M / ~20x USDC EU gap, replacing earlier "300x" figure); confirmed bidirectional wikilinks.
