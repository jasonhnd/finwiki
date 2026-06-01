---
source: fintech/circle-usdc-stablecoin
source_hash: 16473a2c8a098dd7
lang: en
status: machine
fidelity: ok
title: "Circle USDC · Compliant White-Circle Benchmark · NYSE-Listed Issuer · CCTP / BUIDL Interlock"
translated_at: 2026-05-31T06:16:15.684Z
---

# Circle USDC · Compliant White-Circle Benchmark · NYSE-Listed Issuer · CCTP / BUIDL Interlock

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]] and [[fintech/tether-business-model-short-treasury-yield|Tether USDT economics]] for the white-circle / grey-circle contrast, and with [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]] for the regulatory frame in which USDC has become the de facto white-circle benchmark.

> [!info] TL;DR
> Circle Internet Financial is the sole issuer of USDC and EURC. As of 2026-Q2 , USDC circulation stands at **$65B+** (second globally, behind USDT), and EURC at ~€350M. Circle completed its **NYSE IPO** in 2025-06  (ticker CRCL), IPO price $31, first-day gain ~170%, and 2026-05  market cap trading in the $30-40B range. Reserves are 100% short-term US Treasuries + cash, held primarily in the **Circle Reserve Fund (CRCL)**, advised by a BlackRock subsidiary and custodied by BNY Mellon. USDC is the "benchmark implementation" of the GENIUS Act §501 -compliant white-circle standard: CCTP V2  supports native burn-and-mint across 18+ chains, with BUIDL interlock absorbing yield, and a 50-50 distribution split with Coinbase. EURC is the only scaled non-bank euro stablecoin holding a MiCA EMT licence on the euro side.

## Key facts

- USDC circulation **$65B+** (2026-Q2 monthly average) · World's second-largest stablecoin, ~30% share of USD stablecoin circulation on public chains ^[extracted]
- EURC circulation ~**€350M** (2026-Q2) · MiCA EMT obtained; primary chains: Ethereum / Solana / Stellar / Avalanche / Base ^[extracted]
- Issuing entity: Circle Internet Financial Inc. (Boston) · Founded 2013  (Jeremy Allaire / Sean Neville) ^[extracted]
- **NYSE IPO 2025-06** · ticker **CRCL** · IPO proceeds ~$1.1B · post-IPO valuation ~$24B → 2026-05  market cap $30-40B range ^[extracted]
- Reserves 100% short-term US Treasuries + cash · primary vehicle **Circle Reserve Fund** (USDXX), BlackRock-managed · BNY Mellon custody ^[extracted]
- Monthly reserve transparency report + Deloitte attestation · holdings disclosed at the CUSIP level ^[extracted]
- **CCTP V2** supports native burn-and-mint across 18+ chains (Ethereum / Solana / Base / Arbitrum / Avalanche / Optimism / Polygon / Noble / Arc, etc.) ^[extracted]
- Coinbase distribution agreement: USDC reserve yield split **50-50 ** (Coinbase 2025  USDC revenue contribution ~$1B) ^[extracted]
- Regulatory licences: US MTL all-state + NY DFS BitLicense + EU MiCA EMT + Singapore MPI + Japan SBI VC Trade commenced ^[extracted]

## USDC reserve model, licensing stack, and distribution economics

USDC's core model = the **"white-circle compliance benchmark"**: 100% short-term Treasury reserves + monthly audit + Reserve Fund segregation + monthly CUSIP-level public report. This contrasts with [[fintech/tether-business-model-short-treasury-yield|Tether USDT (lean-team / grey-circle model)]] — Circle is a public entity, a listed company, with all reserves publicly disclosed; Tether is a private company, with reserves on a quarterly-attestation-only basis and no mandatory redemption for retail. USDC's economic model corresponds directly to [[fintech/stablecoin-revenue-split-economics|stablecoin interest-distribution economics]]: the issuer (Circle) earns only ~50% of the reserve yield, with **the other half going to Coinbase as a distribution incentive** — a sample case for [[fintech/issuer-distributor-incentive-realignment-50-50-model|50-50 realignment paradigm]] — creating a contrast in intensity with PayPal × Paxos PYUSD (Paxos transferred 80-90%).

On cross-chain architecture, USDC achieves "1  USDC, multiple chains" via [[systems/cctp-v2-overview|CCTP V2]]: USDC on every public chain is a native asset minted directly by Circle, with no wrapped versions; cross-chain transfers involve burning on the source chain + Circle Attestation Service signature + minting on the destination chain, with V2  fast-transfer latency < 1  seconds. **Reserve-use interlock**: Circle is one of the largest institutional LPs publicly acknowledged by [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] at initial scale, holding a portion of USDC reserves via BUIDL to capture MMF yield, forming a key node in the "USDC ↔ BUIDL ↔ UST" [[fintech/circular-reserve-asset-flywheel-overview|reserve-asset interlock flywheel]].

## Origin & evolution

2013  Circle founded (BTC wallet / remittance). 2015-2018  pivot → 2018-10  USDC jointly issued with Coinbase via **Centre Consortium** (Centre as JV governance entity). **2020-2023  USDC wave 1  scaling**: 2021-09  circulation first crossed $30B; 2022  post-Terra/LUNA collapse, USDC temporarily absorbed USDT selling pressure. **2023-03  SVB crisis**: Circle's Silicon Valley Bank reserve exposure $3.3B, USDC briefly depegged to $0.87 , recovered in 3  days; **post-event, Circle materially reduced bank-end exposure and concentrated reserves entirely in Circle Reserve Fund + BNY Mellon custody**. 2023-08  Circle acquired all Centre shares → USDC governance became independent; Coinbase transitioned to strategic shareholder + distribution partner. **2024  EU MiCA EMT obtained → EURC became the first euro EMT under the MiCA framework**. **2025-06  NYSE IPO**: Circle opted for direct listing rather than SPAC (2022  SPAC route failed), opened ~$31  → closed ~$84, a milestone event in which the "compliance-first" approach in [[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto bifurcation]] received capital-market validation. 2025-09  [[fintech/genius-act-501-denylist-mandate|GENIUS Act implementation]] → USDC directly qualifies under §501  with no structural adjustment required. 2026-Q1  [[systems/cctp-v2-overview|CCTP V2]] extended to Arc / Solana fast finality + Hooks (cross-chain + automated contract calls). 2026-Q2  USDC circulation $65B+, gap versus USDT $145B narrowed from 5× to 2.3×.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/tether-business-model-short-treasury-yield|Tether grey-circle model]]
- [[fintech/ripple-rlusd-stablecoin|Ripple RLUSD]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[fintech/stablecoin-revenue-split-economics|stablecoin interest-distribution economics]]
- [[fintech/issuer-distributor-incentive-realignment-50-50-model|50-50 realignment paradigm]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[systems/cctp-v2-overview|CCTP V2]]
- [[fintech/three-circles-stablecoin-mra-framework|three-circle MRA framework]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART]]
<!-- /wiki-links:managed -->

## Sources

- https://www.circle.com/transparency — Circle Reserve Fund monthly transparency + Deloitte attestation
- https://www.circle.com/usdc — USDC product / supply page
- https://developers.circle.com/stablecoins/cctp-getting-started — CCTP V2 developer docs
- https://investor.circle.com/ — Circle Internet Group investor relations (post-IPO)
- https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=circle — Circle SEC EDGAR filings
- https://www.bnymellon.com/us/en/insights/all-insights/circle-reserve-fund.html — BNY Mellon custodial role
