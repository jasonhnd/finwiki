---
source: fintech/usd-stablecoin-issuer-eight-way-matrix
source_hash: 97106643e41ed0bb
lang: en
status: machine
fidelity: ok
title: "USD stablecoin issuer ten-way comparison matrix — USDT / USDC / PYUSD / RLUSD / USD1 / FDUSD / USDS / USDe / M / USDB"
translated_at: 2026-05-31T11:13:44.875Z
---

# USD stablecoin issuer ten-way comparison matrix — USDT / USDC / PYUSD / RLUSD / USD1 / FDUSD / USDS / USDe / M / USDB

## Wiki route

This entry sits under[[fintech/INDEX|fintech index]]as the cross-issuer side-by-side comparison matrix for the ten most-cited USD-denominated stablecoin products and issuers in the2026-Q2 dataset. It complements the per-issuer deep dives at[[fintech/tether-business-model-short-treasury-yield|Tether USDT]], [[fintech/circle-usdc-stablecoin|Circle USDC]], [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]], [[fintech/ripple-rlusd-stablecoin|Ripple RLUSD]], [[fintech/world-liberty-usd1-political-stablecoin|World Liberty USD1]], [[fintech/first-digital-fdusd-hk-stablecoin|First Digital FDUSD]], [[fintech/sky-usds-decentralized-stablecoin|Sky USDS]], [[fintech/m-network-m0-neutral-infrastructure|M^0 / M Network]], and[[fintech/stripe-usdb-bridge-stablecoin|Stripe USDB]]. For the regulatory context see[[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]], [[fintech/global-stablecoin-regulatory-five-pole-matrix|five-pole regulatory matrix]], and[[fintech/three-circles-stablecoin-mra-framework|三圆 MRA framework]]; for the broader consolidation arc see[[fintech/stablecoin-issuer-2025-2026-market-consolidation|2025-2026 market consolidation]].

> [!info] TL;DR
> Ten USD stablecoin issuers anchor the2026-Q2 dataset: **USDT** (Tether, ~$145B, gray-circle dominant), **USDC** (Circle, ~$65B, white-circle dominant), **USDS** (Sky / ex-MakerDAO, ~$8.5B + DAI$4B legacy, decentralised RWA-backed), **USDe** (Ethena, ~$5.2B, synthetic delta-neutral), **FDUSD** (First Digital, ~$3B, Binance-pair), **USD1** (WLFI, ~$2.1B, political-brand), **PYUSD** (PayPal, ~$1B+, payment-company-branded), **USDB** (Stripe Bridge, ~$800M, vertically-integrated), **RLUSD** (Ripple, ~$700M+, bank-grade compliance), **M** (M0 Foundation managed across8+ issuers, ~$300M aggregate, neutral infrastructure). Total ~$235B USD stablecoin supply, with USDT + USDC ~85%concentration despite challenger growth. Read across the matrix: **reserves model bifurcates** between UST + cash (compliant) and mixed-collateral / synthetic (Tether and Ethena); **regulatory home bifurcates** between GENIUS-compliant US issuers (Circle, Paxos, BitGo, Standard Custody) and offshore/non-US (Tether, First Digital, Sky); **transfer mechanism bifurcates** between mint/burn (centralised issuers) and swap (decentralised USDS); **GENIUS §501 compliance status** is now the binding regulatory variable that determines US institutional distribution access.

## Why a ten-way comparison

Single-issuer narratives ("USDT dominates EM," "USDC is the compliant standard") capture different parts of the truth but conceal the **structural bifurcation** introduced by GENIUS Act §501. By placing all ten products side-by-side on **supply / reserves model / regulatory home / custodian / audit firm / transfer mechanism / yield distribution / chain coverage / GENIUS §501 compliance**, the post-§501 market structure becomes visible. The matrix also exposes the **three categorical types** that have crystallised: (a) **payment stablecoins** (USDT, USDC, PYUSD, RLUSD, USDB, FDUSD, USD1 — pegged1:1, redeemable), (b) **synthetic/decentralised dollars** (USDS, USDe — different reserves model, different regulatory home), and (c) **neutral infrastructure** (M^0 — not a brand but a white-label issuance layer). For the issuer × distributor incentive split see[[fintech/issuer-distributor-incentive-realignment-50-50-model|50-50 model]]and[[fintech/stablecoin-revenue-split-economics|stablecoin revenue split economics]].

## Matrix A · Supply, market cap, inception

| Issuer / token | Supply (2026-Q2) | Inception | Issuer entity |
|---|---|---|---|
| **[[fintech/tether-business-model-short-treasury-yield\|Tether USDT]]** | **~$145B** |2014 | Tether Limited (BVI / El Salvador) |
| **[[fintech/circle-usdc-stablecoin\|Circle USDC]]** | **~$65B** |2018-10 | Circle Internet Financial Inc. (Boston; NYSE: CRCL since2025-06) |
| **[[fintech/sky-usds-decentralized-stablecoin\|Sky USDS]]** + DAI legacy | **~$8.5B USDS + $4B DAI** = $12.5B aggregate | USDS2024-09 (rebrand from DAI/MakerDAO) | Sky / MakerDAO (DAO governance) |
| **Ethena USDe** + sUSDe | **~$5.2B** |2024-02 | Ethena Labs (BVI) |
| **[[fintech/first-digital-fdusd-hk-stablecoin\|First Digital FDUSD]]** | **~$3B** |2023-06 | First Digital Trust (Hong Kong) |
| **[[fintech/world-liberty-usd1-political-stablecoin\|WLFI USD1]]** | **~$2.1B** |2025-Q1 deployment (2024-09 launch) | World Liberty Financial; BitGo Trust Company (SD State Trust) issues |
| **[[fintech/paypal-pyusd-stablecoin\|PayPal PYUSD]]** | **~$1B+** |2023-08-07| Paxos Trust Company (NY DFS Trust) |
| **[[fintech/stripe-usdb-bridge-stablecoin\|Stripe USDB]]** | **~$800M+** |2024-Q1 (USDB) | Bridge Inc. (Stripe wholly-owned subsidiary since2024-10) |
| **[[fintech/ripple-rlusd-stablecoin\|Ripple RLUSD]]** | **~$700M+** |2024-12-17| Standard Custody (Ripple subsidiary; NY DFS Trust) |
| **[[fintech/m-network-m0-neutral-infrastructure\|M0 Network M]]** | **~$300M aggregate** (across8+ white-label issuers) |2024-10 mainnet | M^0 Foundation; multiple front-end issuers |

The **double-oligopoly hardening** is the headline pattern: USDT + USDC ~$210B = ~85%of total USD stablecoin supply; the eight challengers + M^0 collectively ~$30B = ~15%. This concentration has **increased** since2023 (then ~70%), not decreased, despite the challenger entry wave — the GENIUS Act and MiCA killed the weak tail (BUSD, TUSD, GUSD, USDP retail) and locked in a small but legitimate second tier.

## Matrix B · Reserves model

| Issuer | Reserves composition | Reserves segregation | Yield source |
|---|---|---|---|
| USDT | Mixed: ~75%UST + secured loans + BTC + gold + other; quarterly attestation (BDO) | Not narrow-reserve; mixed-asset commercial portfolio | UST yield + non-Treasury earning assets |
| USDC | **100%short UST + cash** in Circle Reserve Fund (SEC-registered MMF, BlackRock-managed) | BNY Mellon custody; segregated MMF wrapper | UST yield only |
| USDS / DAI | **RWA-backed**: ~$1.5B RWA collateral including ~$300M BlackRock BUIDL (indirect via vault) + ETH-collateralised CDPs + other crypto + USDC | Smart-contract collateralised vaults | UST yield (via BUIDL) + RWA yield + protocol fees |
| USDe | **ETH delta-neutral basis trade** (long ETH spot + short ETH perp) + tokenised UST | Off-chain perp positions + on-chain UST | ETH perp funding rate + UST yield |
| FDUSD |85%UST +12%cash +3%MMF | First Digital Trust HK custodial; **disputed reserve-custody question** (2024-12 The Block investigation) | UST yield |
| USD1 | **100%UST + cash via BitGo Trust** | BitGo custodial | UST yield (channelled to WLFI token holders, not USD1 holders) |
| PYUSD | **100%UST + cash via Paxos** | Paxos NY DFS Trust segregation | UST yield (80-90%to PayPal as distribution incentive) |
| USDB | **100%short UST + overnight repo**; partial via BUIDL holding | Bridge / Stripe custodial | UST yield (100%retained by Stripe) |
| RLUSD | **100%short UST1-3M + cash via Standard Custody** | Standard Custody NY DFS Trust | UST yield |
| M | **BUIDL + UST + cash** (M^0 unified template); individual issuer flexibility | M^0 smart-contract template + Securitize-style segregation per issuer | UST yield (via BUIDL); shared by white-label issuer |

The reserves bifurcation is binary: **narrow UST + cash** (USDC, PYUSD, RLUSD, USDB, USD1, M^0) vs **mixed-collateral or synthetic** (USDT, USDS, USDe). FDUSD sits at the edge — narrow on paper but with disputed custody arrangements. The narrow-reserve cluster maps **almost perfectly** onto GENIUS §501 compliance status (see Matrix I below).

## Matrix C · Regulatory home and licensure

| Issuer | Issuer-entity jurisdiction | Operating license / charter |
|---|---|---|
| Tether USDT | BVI + El Salvador (since2025); no US license | None US; El Salvador Digital Asset Service Provider; offshore-first |
| Circle USDC | Boston, US (NYSE-listed CRCL) | US MTL all-states + NY DFS BitLicense + EU MiCA EMT + Singapore MPI |
| Sky USDS | DAO governance (no single legal entity) | DAO; protocol-level operation; legal structure intentionally diffuse |
| Ethena USDe | BVI | Offshore; explicitly carved out of GENIUS payment-stablecoin scope as "synthetic" |
| First Digital FDUSD | Hong Kong | HK trust; **HKMA stablecoin license pending** (2026-Q3 expected; delayed from Q2 over Sun-affiliate dispute) |
| WLFI USD1 | US (BitGo SD State Trust as issuer) | BitGo SD State Trust charter |
| PayPal PYUSD | US (Paxos NY DFS Trust as issuer) | Paxos NY DFS Trust |
| Stripe USDB | US (Bridge as Stripe subsidiary) | Bridge MTL + state charters; EU + Japan licensure pending |
| Ripple RLUSD | US (Standard Custody NY DFS Trust as issuer) | Standard Custody NY DFS Trust; **Ripple OCC National Bank Charter application2026-Q1 (pending)** |
| M0 M | US foundation + multi-issuer (decentralised governance) | $M DAO token + multi-jurisdiction issuer compliance |

The regulatory-home pattern shows **four categorical structures**: (a) **US trust-issuer** (PYUSD, RLUSD, USD1, partially USDC) — the most regulator-friendly path; (b) **US operating company** (USDC, USDB) — full payment-services licensure; (c) **offshore** (USDT, USDe) — explicitly outside GENIUS payment-stablecoin scope; (d) **DAO / multi-issuer** (USDS, M) — intentionally diffuse. The **HK trust** route (FDUSD) is a fifth category — designed for Asia-Pacific compliance with HKMA but not GENIUS.

## Matrix D · Custodian and audit firm

| Issuer | Custodian | Audit / attestation firm | Cadence |
|---|---|---|---|
| USDT | Mixed bank relationships (not publicly comprehensive) | BDO Italia (Cantor Fitzgerald confirmation2024) | Quarterly |
| USDC | **BNY Mellon** (Circle Reserve Fund) | **Deloitte** + Circle Reserve Fund SEC reporting | Monthly + SEC filings |
| USDS | Multi-vault smart-contract architecture | On-chain transparency + RWA vault attestations | Continuous on-chain + per-vault |
| USDe | Off-chain perp custody (Copper, Ceffu, others) + on-chain UST | **Chaos Labs** + multiple attestation partners | Monthly |
| FDUSD | First Digital Trust HK | **Prescient Assurance** | Monthly |
| USD1 | BitGo Trust Company | BitGo internal attestation (limited disclosure) | Monthly |
| PYUSD | Paxos in-house + bank deposits | **WithumSmith+Brown** | Monthly |
| USDB | Bridge custodial; partial BUIDL via BNY (through BUIDL underlying) | **BPM LLP** | Monthly |
| RLUSD | Standard Custody (NY DFS Trust) | **BDO USA** | Monthly |
| M | M^0 smart-contract template + Securitize | OpenZeppelin + Trail of Bits + Certora smart-contract audits | Continuous + audit per issuer |

The **audit firm tier** is visible: Deloitte (USDC) > WithumSmith+Brown (PYUSD) > BDO USA (RLUSD) > Withum (PYUSD) > BPM LLP (USDB) > Prescient Assurance (FDUSD) > BitGo internal (USD1) > BDO Italia (USDT quarterly). The **custodian tier** is similarly stratified: BNY Mellon (USDC) > Paxos NY DFS Trust (PYUSD) > Standard Custody (RLUSD) > BitGo (USD1) > Bridge custodial (USDB) > FDT HK (FDUSD) > Tether mixed bank relationships (USDT). The bilateral concentration of **BNY Mellon as custodian** for USDC + BUIDL + indirectly USDB (via BUIDL routing) + indirectly USDS (via BUIDL RWA vault) is now the largest single custody concentration in the USD stablecoin supply chain.

## Matrix E · Transfer mechanism (mint/burn vs swap vs hybrid)

| Issuer | Transfer mechanism | Cross-chain mechanism |
|---|---|---|
| USDT | Mint/burn at issuer level; per-chain wrapped USDT | Multi-chain native + Tether bridges |
| USDC | **Mint/burn at Circle; native on every supported chain** | **CCTP V2 burn-and-mint** across18+ chains (no wrapped versions) |
| USDS | **Vault-based mint/burn against collateral**; DAO-governed | Native on Ethereum, Base, Solana (2026-Q1) |
| USDe | **Mint via collateral deposit (ETH spot + perp short)**; redeem by closing position | Ethereum-only (delta-neutral basis requires deep ETH perp) |
| FDUSD | Mint/burn at First Digital Trust | Multi-chain wrapping; **Justin Sun reserve dispute** affects custody-chain trust |
| USD1 | Mint/burn at BitGo | Multi-chain wrapping |
| PYUSD | Mint/burn at Paxos | Multi-chain wrapping; Solana primary (~80%) |
| USDB | Mint/burn at Bridge | Multi-chain wrapping; Tempo L1 in development |
| RLUSD | Mint/burn at Standard Custody | Dual-launch XRPL + Ethereum native; expansion planned |
| M | **Mint/burn via M^0 unified contract template**; white-label per issuer | M^0 multi-chain template |

The transfer-mechanism bifurcation is between **centralised mint/burn** (every issuer in the table except USDS and USDe) and **DAO / collateral-vault-based mechanisms** (USDS, USDe). USDe is uniquely **synthetic** — it does not hold $1 of UST per $1 of USDe issued; it holds ETH spot + short ETH perp positions such that the net delta-neutral position is approximately worth $1. USDS is uniquely **decentralised-collateralised** — it mints against multi-asset vaults rather than1:1 reserve. USDC's **CCTP V2 burn-and-mint architecture** is the cleanest cross-chain mechanism — every chain's USDC is Circle-issued native, not a wrapped variant.

## Matrix F · Yield distribution and economics

| Issuer | Issuer reserve yield | Holder receives yield? | Distributor share |
|---|---|---|---|
| USDT | Tether retains ~all UST/loan yield; ~$1.5T/year profit | **No** | n/a (no formal distributor share) |
| USDC | Circle retains, splits50-50 with Coinbase | **No** (GENIUS §501 forbids SC issuer paying yield) | Coinbase50%share (~$1B/year2025) |
| USDS / sUSDS | Sky retains protocol fees; **sUSDS staked variant receives5-8%APY** (Spark SSR rate) | **Yes via sUSDS staking** (routes around §501) | DAO governance |
| USDe / sUSDe | Ethena Labs retains some; **sUSDe staked variant receives12-18%APY in bull cycles** | **Yes via sUSDe staking** | n/a (DeFi-protocol-distributor mix) |
| FDUSD | First Digital retains; Binance receives undisclosed non-yield incentives (market-maker preferences) | No | Binance (informal) |
| USD1 | WLFI / BitGo retains UST yield; **channelled to WLFI token holders** | **No** (USD1 holders get nothing; yield routes to WLFI token) | WLFI token distribution mechanism |
| PYUSD | Paxos retains nominal; **80-90%of yield to PayPal** | No | PayPal80-90%share |
| USDB | **Stripe retains100%of yield** (no distributor split — Stripe is both issuer and distributor) | No | n/a (vertically integrated) |
| RLUSD | Standard Custody / Ripple retains | No | Ripple internal economics |
| M | M^0 charges bps fees; white-label issuer captures most yield | No (white-label issuer determines) | Per-issuer model |

The **yield-distribution economics** are the canonical case for the[[fintech/issuer-distributor-incentive-realignment-50-50-model|50-50 distributor-realignment model]]: **distributors capture50-90%of USD stablecoin economics** because they control consumer reach. USDB is the unique exception — Stripe retains100%because Stripe **is** both issuer and distributor (vertically integrated). USDe and USDS are the only products where **the SC holder receives yield directly** (via the staked variant) — both route around GENIUS §501 by structuring yield as a separate-product staking opportunity rather than as direct SC interest. USD1 is the most unusual — yield routes to **WLFI token holders (political-supporter economic reward)** rather than to USD1 holders.

## Matrix G · Chain coverage

| Issuer | Primary chains | Total chains live |
|---|---|---|
| USDT | **Throne (~58%) + Ethereum + BSC + Solana** |12+ |
| USDC | **Ethereum + Base + Solana +18 more via CCTP** |18+ native (all via CCTP) |
| USDS | **Ethereum + Base + Solana (2026-Q1)** | 3 primary |
| USDe | **Ethereum-only** |1 (basis trade requires ETH perp depth) |
| FDUSD | **BNB Chain (~55%) + Ethereum (~40%) + Solana (5%)** | 3 |
| USD1 | **BNB Chain + Tron + Ethereum + Solana** |4 |
| PYUSD | **Solana (~80%) + Ethereum + Decision** |3 |
| USDB | **Ethereum + Base + Tempo L1 (planned2026-Q3)** | 2 (3 planned) |
| RLUSD | **XRPL + Ethereum** |2 |
| M | **Ethereum + Base + Arbitrum + Solana (planned)** |3 (4 planned) |

**Chain-deployment specialisation** is itself a signal of consolidation: each issuer places focused bets on1-3 primary chains. USDC's CCTP V2 is the broadest reach (18+ chains); USDe is the most concentrated (Ethereum-only); FDUSD and USDT lean to BSC/Tron (Binance and EM-remittance chains respectively); PYUSD made the **2024-05 strategic break to Solana-primary** that no other top-10 stablecoin had previously done; USDB / Tempo L1 is the **first vertically-integrated stablecoin-and-chain stack** (Stripe + Paradigm building both).

## Matrix H · Distribution channel

| Issuer | Primary distribution channel |
|---|---|
| USDT | Global gray-circle exchanges (Binance, OKX, Bybit) + EM remittance (LATAM, Africa, MENA) |
| USDC | Coinbase + Binance + global CEX + institutional treasury + DeFi (Aave, Compound, Morpho) |
| USDS | DeFi-native (Spark Protocol, MakerDAO heritage protocols); USDS Solana for new-user reach |
| USDe | DeFi perps + delta-neutral funds + crypto-degen wallets |
| FDUSD | **Binance main pair only** (BTC/FDUSD ~$1.5B/day); single-distributor risk |
| USD1 | Bridge (Stripe) + political-network distribution + sovereign treasury allocations |
| PYUSD | PayPal (~400M active accounts) + Venmo + PayPal World cross-border P2P |
| USDB | **Stripe5M+ merchants** (vertically integrated; B2B-merchant default) |
| RLUSD | RippleNet200+ banks + ODL corridor + Bitstamp (post-Robinhood acquisition) |
| M |8+ white-label issuers (long-tail stablecoin operators) |

The distribution-channel pattern reveals **complementary niches rather than direct overlap**: USDT owns gray-circle EM; USDC owns compliant institutional + DeFi; PYUSD owns consumer P2P retail; RLUSD owns bank-to-bank cross-border; FDUSD owns Binance trading-pair market; USDB owns B2B merchant rails; USDS / USDe own DeFi degen + native-yield seekers; USD1 owns the political-network niche; M^0 owns the long-tail "want our own SC but cannot run reserves" market. This is **the picture of bimodal competition with niche differentiation** rather than direct head-to-head competition.

## Matrix I · GENIUS Act §501 compliance status

| Issuer | §501 reserve-quality compliance | §501 issuer-licensing compliance | US institutional distribution access |
|---|---|---|---|
| USDT | **Fails** (mixed reserves; BTC/Gold) | **Fails** (no US trust / issuer license) | **Blocked** — international gray-circle continues |
| USDC | **Passes** | **Passes** (Circle MTL + NY DFS BitLicense) | **Full access** — white-circle benchmark |
| USDS | Borderline (RWA vault + BUIDL indirect); decentralised governance argues "no issuer to license" | Decentralised governance argues out-of-scope; **untested in court** | **Tenuous** — depends on Treasury / SEC interpretation by2027-2028 |
| USDe | Classified as **synthetic; explicitly carved out of payment SC scope** | Out of payment SC scope | **Out of scope** — different regulatory category |
| FDUSD | Passes on paper (UST + cash + MMF); reserve-custody disputed | **No US license** (HK trust); GENIUS-compliant only via foreign-issuer recognition route | **Blocked from US institutional** — Asia/Pacific market |
| USD1 | Passes (UST + cash via BitGo Trust) | Passes (BitGo SD State Trust) | Full access; **political-credibility risk to GENIUS §501 neutrality** |
| PYUSD | **Passes** | **Passes** (Paxos NY DFS Trust) | **Full access** |
| USDB | **Passes** | **Passes** (Bridge subsidiary; Stripe US licenses) | **Full access** |
| RLUSD | **Passes** | **Passes** (Standard Custody NY DFS Trust); OCC National Bank Charter pending | **Full access** |
| M | M^0 template passes per issuer; varies by white-label | Per issuer | Per issuer |

The GENIUS §501 compliance status **bifurcates the market** into:
- **Passing**: USDC, PYUSD, RLUSD, USD1, USDB, M^0 (per issuer) — full US institutional access
- **Failing on reserves**: USDT (mixed reserves; offshore strategy)
- **Failing on licensing**: FDUSD (HK trust without US recognition)
- **Out of scope**: USDe (synthetic), USDS (decentralised; legally contested)

This matrix is the single most consequential dimension because it determines which issuers can offer **institutional services** (treasury management, asset-management custody, settlement for tokenized securities) in the US. The five "passes" issuers will collectively define the institutional USD-on-chain market by2028. The "fails" issuers will continue but in gray-circle EM (USDT) or Asia-Pacific (FDUSD) markets.

## Why these dimensions

The nine matrix axes (supply, reserves, regulatory home, custodian, audit firm, transfer mechanism, yield distribution, chain coverage, GENIUS §501 compliance) were chosen because they map to the **gating variables in post-GENIUS USD stablecoin market structure**:

1. **Supply** — measures realised scale (only metric LPs care about).
2. **Reserves** — determines GENIUS §501 reserve-quality compliance (binary).
3. **Regulatory home** — determines GENIUS §501 issuer-licensing compliance.
4. **Custodian** — determines BNY-concentration risk and supply-chain dependencies.
5. **Audit firm** — determines transparency tier and institutional acceptance.
6. **Transfer mechanism** — determines cross-chain reach and operational architecture.
7. **Yield distribution** — determines the economic split between issuer and distributor (the binding business-model variable).
8. **Chain coverage** — determines accessible TAM.
9. ** GENIUS §501 compliance status** — determines US institutional distribution access (binary).

Together, these nine variables explain why **USDT and USDC have $210B combined supply** (concentration), why **PYUSD/RLUSD/USDB/USD1 are the new "passing" entrants** (regulatory geometry), why **USDS and USDe are structurally different products** (different reserves model, different regulatory classification), and why **M^0 represents the consolidating long-tail layer** (neutral infrastructure for niche issuers). The matrix view exposes the structural map that per-issuer narratives obscure.

## Reading the matrix

- **The post-GENIUS market is bimodal**: USDT and USDC own ~85%; the remaining ~15%is split among eight legitimate challengers + M^0. The challenger wave did **not** dilute USDT/USDC — it killed the weak tail (BUSD, TUSD, GUSD, USDP) and crystallised a small but legitimate second tier.
- **The economic value sits with distributors, not issuers** — confirmed by Coinbase50%of USDC, PayPal80-90%of PYUSD, Binance market-maker preferences in FDUSD, and Stripe's100%retention as the only vertically integrated case (USDB). For pure issuers without distribution lock-in (Paxos brand-only USDP, Gemini GUSD), the business is dying.
- **Reserve-asset quality is the regulatory moat** — issuers that can run a narrow-UST reserve get GENIUS-compliant institutional access; issuers that cannot get the international gray market. USDT's mixed reserves earn higher yield (~$1.5T annual profit) but block US institutional access.
- **The three "categorically different" products are USDS, USDe, M**. USDS is decentralised-collateralised (vault model, not1:1 UST); USDe is synthetic delta-neutral (no UST per token); M is neutral infrastructure (not a brand). These three should not be directly volume-compared to PYUSD or USDC — they serve fundamentally different markets and regulatory frameworks.
- **The BNY Mellon concentration is now systemic**: custodian for Circle Reserve Fund (USDC) + BlackRock BUIDL (which backs USDB, USDS RWA vault indirectly, OUSG via Ondo). A BNY operational disruption would cascade across the compliant-USD-on-chain stack.
- **PYUSD's2024-05 Solana-primary migration** was the first time a top-10 stablecoin treated Solana as primary rather than secondary. USDC's CCTP V2 broad reach + PYUSD Solana migration + USDB Tempo L1 announcement together mean **multi-chain native deployment is now the table-stakes architecture**.
- **USD1's political-brand model is unique** in routing reserve yield to WLFI token holders (political-supporter economic reward) rather than to USD1 holders. This is the cleanest GENIUS §501 workaround (yield goes to a separate token, not the SC), but it raises significant questions about §501 "neutrality" and the integrity of the[[fintech/three-circles-stablecoin-mra-framework|three-circles MRA framework]].
- **FDUSD's HKMA license delay** (originally Q2, now Q3 2026) and the **Justin Sun reserve-custody dispute** mean FDUSD is the most fragile of the top-tier ($3B MCap is large but single-distributor + custody-dispute is a risk profile not present in PYUSD/RLUSD).

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/tether-business-model-short-treasury-yield|Tether USDT business model]]
- [[fintech/circle-usdc-stablecoin|Circle USDC]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/ripple-rlusd-stablecoin|Ripple RLUSD]]
- [[fintech/world-liberty-usd1-political-stablecoin|WLFI USD1]]
- [[fintech/first-digital-fdusd-hk-stablecoin|First Digital FDUSD]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS]]
- [[fintech/m-network-m0-neutral-infrastructure|M^0 / M Network neutral infrastructure]]
- [[fintech/stripe-usdb-bridge-stablecoin|Stripe USDB]]
- [[fintech/stablecoin-issuer-2025-2026-market-consolidation|stablecoin issuer 2025-2026 consolidation]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 denylist]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|stablecoin five-pole regulatory matrix]]
- [[fintech/three-circles-stablecoin-mra-framework|三圆 MRA framework]]
- [[fintech/stablecoin-revenue-split-economics|stablecoin revenue split economics]]
- [[fintech/issuer-distributor-incentive-realignment-50-50-model|50-50 issuer-distributor model]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[fintech/tether-usat-anchorage|Tether USAT (Anchorage)]]
- [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]]
<!-- /wiki-links:managed -->

## Sources

- Tether transparency:https://tether.to/en/transparency/
- Circle transparency:https://www.circle.com/transparency
- PayPal PYUSD product:https://www.paypal.com/us/digital-wallet/manage-money/crypto/pyusd
- Ripple RLUSD:https://ripple.com/insights/ripple-launches-rlusd-stablecoin/
- World Liberty Financial:https://www.worldlibertyfinancial.com/
- First Digital Labs:https://firstdigitallabs.com/
- Sky / MakerDAO:https://sky.money/
- Athena:https://ethena.fi/
- M^0 Foundation:https://m0.org/
- Stripe stablecoin use cases:https://stripe.com/use-cases/stablecoins
- DefiLlama stablecoin dashboard:https://defillama.com/stablecoins
- US Treasury — Digital Assets policy:https://home.treasury.gov/policy-issues/financial-markets-financial-institutions-and-fiscal-service/digital-assets
- GENIUS Act §501 public text (US Treasury / Congress.gov)
