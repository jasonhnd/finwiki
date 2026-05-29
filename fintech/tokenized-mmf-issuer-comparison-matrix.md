---
title: Tokenized MMF issuer comparison matrix — BUIDL, BENJI, ACRED, WTGXX, USYC, USTB, OUSG (eight-way)
aliases:
  - tokenized-mmf-issuer-comparison-matrix
  - tokenized MMF eight-way matrix
  - BUIDL vs BENJI vs OUSG comparison
  - tokenized money market fund matrix
  - RWA MMF issuer comparison
domain: fintech
created: 2026-05-25
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-25
confidence: likely
tags: [fintech, tokenization, mmf, matrix, comparison, buidl, benji, acred, wtgxx, usyc, ustb, ousg, rwa, securitize]
status: active
sources:
  - https://www.blackrock.com/us/individual/products/422581/
  - https://www.franklintempleton.com/investments/options/money-market-funds/products/29386/SINGLCLASS/franklin-on-chain-u-s-government-money-fund/FOBXX
  - https://apolloacademy.com/securitize/
  - https://www.wisdomtree.com/investments/etfs/fixed-income/wtgxx
  - https://www.usyc.com/
  - https://superstate.com/
  - https://ondo.finance/
  - https://www.sec.gov/edgar
  - https://www.circle.com/blog/circle-acquires-hashnote
  - https://defillama.com/protocol/franklin-templeton-benji
---

# Tokenized MMF issuer comparison matrix — BUIDL, BENJI, ACRED, WTGXX, USYC, USTB, OUSG

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as the eight-way side-by-side comparison matrix for tokenized money-market and yield-bearing RWA fund issuers. It complements the per-issuer deep dives at [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]], [[fintech/franklin-templeton-stablecoin-migration|Franklin BENJI / FOBXX]], [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]], [[fintech/tokenized-mmf-wisdomtree-hashnote|WisdomTree WTGXX + Hashnote USYC]], and [[fintech/ondo-finance-rusdy-adoption|Ondo OUSG / USDY / rUSDY]]. For the systemic role tokenized MMF plays as stablecoin yield infrastructure see [[fintech/circular-reserve-asset-flywheel-overview|準備金相互ロックフライホイール]] and [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL SC issuer adoption]]. For the regulatory boundary see [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]] and [[fintech/three-circles-stablecoin-mra-framework|三円 MRA framework]].

> [!info] TL;DR
> Eight tokenized fund products anchor the 2026-Q2 dataset: **BUIDL** (BlackRock + Securitize, ~$2.58B AUM, Reg D, eight chains, Aaa-mf), **BENJI / FOBXX** (Franklin Templeton, ~$650M, 1940 Act 2a-7, eight chains), **ACRED** (Apollo, ~$100M+, Reg D, private credit not MMF, seven chains), **WTGXX** (WisdomTree, ~$200M, 2a-7 retail, in-house Prime wallet), **USYC** (Hashnote → Circle 2024-12, ~$1B peak, Reg D, now USDC.YS yield engine), **USTB** (Superstate, ~$150M, Reg D), **OUSG** (Ondo, ~$650M, Reg D, **BUIDL-backed**, seven chains), and **PYUSD-MMF candidate** track (Paxos shelf, not yet live). Total tokenized-fund market crossed **$8B+ AUM** in 2026-Q2 vs ~$1B in 2024-Q1 — an 8× growth in 24 months, but still <0.1% of the ~$7T US MMF market. Read across the matrix: **regulatory wrapper (Reg D vs 1940 Act 2a-7) bifurcates the market**, **transfer agent and custodian concentration in Securitize + BNY Mellon is striking**, and **on-chain composability via Securitize / Ondo / Pendle / Morpho is the binding competitive moat** for second-tier products competing with BUIDL's "yield infrastructure" position.

## Why an eight-way comparison

Single-issuer narratives ("BUIDL dominates," "BENJI was first") capture different parts of the truth but conceal the structural pattern. By placing all eight products side-by-side on **NAV / AUM / settlement chain / transfer agent / custodian / regulatory wrapper / distribution / target investor / on-chain composability**, the competitive-positioning patterns become visible. The matrix also shows the **Reg D vs 2a-7 bifurcation** as the binding compliance choice (only WTGXX and FOBXX are 2a-7 registered, allowing retail US distribution), the **Securitize concentration** (transfer agent for BUIDL + ACRED), and the **BNY Mellon custodian concentration** (custodian for BUIDL Reserve, BENJI/FOBXX, OUSG underlying UST, USDC Reserve Fund). For the broader RWA tokenization landscape see [[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto bifurcation]].

## Matrix A · Issuer, NAV, AUM, inception

| Product | Issuer / sponsor | NAV target | AUM (2026-Q2) | Inception |
|---|---|---|---|---|
| **BUIDL** | [[fintech/blackrock-buidl-tokenized-mmf-overview\|BlackRock USD Institutional Digital Liquidity Fund]] | $1.00 per share | **~$2.58B** | 2024-03 |
| **BENJI / FOBXX** | [[fintech/franklin-templeton-stablecoin-migration\|Franklin Templeton Franklin OnChain U.S. Government Money Fund]] | $1.00 per share | **~$650M** | 2021-04 |
| **ACRED** | [[fintech/apollo-acred-private-credit-tokenization\|Apollo Diversified Credit Securitize Fund]] | n/a (private credit; not pegged) | **~$100M+** | 2025-01-30 |
| **WTGXX** | WisdomTree Government Money Market Fund (Prime tokenized class) | $1.00 per share | **~$200M** (within Prime) | 2024-Q3 (tokenized share class) |
| **USYC** | Hashnote (acquired by Circle 2024-12); now Circle USDC.YS yield engine | $1.00 per share | **~$1B peak** (pre-acquisition); integrated post-2025-Q1 | 2023; Circle acq 2024-12 |
| **USTB** | Superstate Short Duration US Government Securities Fund | $1.00 per share | **~$150M** | 2024-Q2 |
| **OUSG** | [[fintech/ondo-finance-rusdy-adoption\|Ondo Short-Term US Government Treasuries Fund]] | $1.00 per share | **~$650M** | 2023 (re-routed to BUIDL backing 2024-Q2) |
| **PYUSD-MMF (Paxos shelf)** | Paxos shelf-registered MMF (not yet live) | $1.00 per share | n/a | Planned |

The market-leader gap is real: **BUIDL alone is ~32% of the ~$8B tokenized-MMF market**; the second-tier products (BENJI + OUSG + USYC + WTGXX + USTB + ACRED) collectively sum to ~$2.5B+. Note **USYC's status is hybrid** after the Circle acquisition — USYC AUM is now reflected in USDC.YS adoption metrics, not as a standalone product. Note also **OUSG is structurally a BUIDL-distribution wrapper** — Ondo announced in 2024-Q2 that OUSG re-routes the majority of its reserve into BUIDL, making OUSG the **largest external BUIDL holder by some accounts ~40% of BUIDL's mid-2024 AUM**.

## Matrix B · Regulatory wrapper

| Product | Wrapper | Eligible investor | US retail access |
|---|---|---|---|
| BUIDL | **Reg D 506(c)** private placement (BVI structure) | US qualified purchaser + selected non-US institutions; **$5M minimum** | No (qualified purchaser only) |
| BENJI / FOBXX | **1940 Act 2a-7 registered MMF** | Retail US + institutional; **$0 minimum** in some channels | **Yes** (any accredited or non-accredited US investor) |
| ACRED | **Reg D** private placement | US qualified purchaser; institutional | No |
| WTGXX | **1940 Act 2a-7 registered MMF**; tokenized share class via WisdomTree Prime | Retail US (within Prime wallet) | **Yes** |
| USYC | **Reg D** private placement | Institutional | No |
| USTB | **Reg D** + Reg S | US qualified + non-US institutional | No |
| OUSG | **Reg D 506(c)** | US qualified purchaser + selected non-US institutions | No |
| USDY (Ondo retail) | **Reg S only**; not available to US persons | **Non-US individuals + institutions** | **No (explicitly forbidden to US persons)** |

The regulatory bifurcation is binding. **Only BENJI/FOBXX and WTGXX are 2a-7 registered**, the standard wrapper a US retail investor can access through a brokerage. BUIDL, ACRED, USYC, USTB, and OUSG are all Reg D — institutional-only. **USDY is unique** as the only sizable tokenized product explicitly built for **non-US** retail (a Reg S note structure). This split is the largest single divergence in the matrix and the binding factor for distribution strategy.

## Matrix C · Underlying, settlement chains, transfer agent, custodian

| Product | Underlying assets | Settlement chains live | Transfer agent | Custodian / treasury |
|---|---|---|---|---|
| BUIDL | 75% UST (1-3M) + 15% overnight repo + 10% cash; WAM <60 days | **Ethereum, Solana, BNB, Avalanche, Aptos, Arbitrum, Optimism, Polygon** (8 chains) | **Securitize** (BlackRock invested $100M + board seat) | **BNY Mellon** (Reserve Fund) |
| BENJI / FOBXX | UST securities + government repo + cash | **Stellar, Polygon, Arbitrum, Base, Avalanche, Aptos, Solana, Sui** (8 chains) | Franklin Templeton in-house (on-chain ledger = official record) | **BNY Mellon** |
| ACRED | Direct lending + asset-backed lending + structured credit (private credit, not UST) | Ethereum, Solana, Polygon, Avalanche, Aptos, Arbitrum, Sei (7 chains; Wormhole cross-chain) | **Securitize** (same as BUIDL) | Apollo administrator |
| WTGXX | UST + government repo + cash (standard MMF portfolio) | Stellar + Ethereum (planned; primary distribution within Prime wallet) | WisdomTree in-house | State Street custodial |
| USYC | UST + cash; pre-acquisition Hashnote model | Ethereum, Solana, Canton (post-acquisition integration) | Hashnote / Circle | Circle Reserve Fund custodial (BNY Mellon) post-acq |
| USTB | Short UST + cash | Ethereum, Solana | Superstate in-house | UMB Bank custodial |
| OUSG | **BlackRock BUIDL + short UST** (mid-2024 onward) | Ethereum, Solana, Polygon, Mantle, Sui, Aptos, XRPL (7 chains) | Ondo + Securitize | BNY Mellon (via underlying BUIDL) |
| USDY (Ondo retail) | Short UST + bank deposits | Ethereum, Solana, Mantle, Sui, Aptos, Cosmos, Noble, Arbitrum (8 chains) | Ondo | Ankura Trust |

**Concentration patterns**:
- **Securitize** is transfer agent for BUIDL + ACRED + OUSG (via re-routing) — **the most important transfer-agent concentration in tokenized finance**. BlackRock invested $100M into Securitize and took a board seat, formalising the relationship.
- **BNY Mellon** is custodian for BUIDL Reserve Fund, BENJI/FOBXX, OUSG (via BUIDL), USDC Reserve Fund (Circle), and historically USDP Reserve. This is the single largest custodian concentration in the stablecoin-and-tokenized-fund supply chain.
- **Stellar** is the only non-EVM chain that holds first-mover position (BENJI launched there in 2021; FOBXX is still primary-listed on Stellar despite multi-chain expansion).
- **Aaa-mf rating** (Moody's): BUIDL + Fidelity FYHXX received Aaa-mf on the same day (2026-05-13), signalling institutional acceptance of tokenized MMF as full-stack-equivalent to traditional MMF.

## Matrix D · Distribution channel and target investor

| Product | Primary distribution channel | Target investor segment |
|---|---|---|
| BUIDL | Institutional direct + Securitize platform + Coinbase Prime + Bitstamp institutional | Stablecoin issuers (USDC, USDB, RLUSD reserves), DeFi protocols (Aave RWA, Morpho), institutional treasuries (Siemens, Ondo) |
| BENJI / FOBXX | Franklin Templeton retail brokerage + Coinbase + Solana wallets | Retail US + institutional (multi-chain naming strategy) |
| ACRED | Coinbase Asset Management + Kraken + Securitize | Crypto-native institutions seeking private credit yield |
| WTGXX | WisdomTree Prime (in-house retail wallet + brokerage) | Retail US through WisdomTree's own distribution stack |
| USYC | Pre-acq: DeFi protocols (Frax, Ethena, Sky); post-acq: integrated into Circle USDC.YS | Post-acquisition: USDC yield-bearing wrapper users |
| USTB | Crypto-native institutional desks; Coinbase Asset Management | Institutional crypto desks |
| OUSG | Asian + Latin American qualified institutions; DeFi protocols (Flux, Pendle, Morpho) | Non-US qualified institutions; DeFi RWA listings |
| USDY (Ondo retail) | Non-US retail brokerages + Asian fintechs + LatAm wallets | **Non-US retail** (Latin America ~44%, SE Asia, MENA) |

The distribution layer is **the binding competitive moat** for second-tier products. BUIDL has institutional treasury distribution (BlackRock's existing client base) and is the **default reserve asset for the SC issuer flywheel**. BENJI/FOBXX leverages Franklin Templeton's brokerage distribution. WTGXX is locked inside the WisdomTree Prime wallet — its growth ceiling depends on Prime's retail-onboarding velocity. OUSG and USDY together give Ondo a **two-product retail + institutional Asia/LatAm stack** that no other issuer matches.

## Matrix E · On-chain composability and DeFi integration

| Product | DeFi integration depth | Listed as collateral on |
|---|---|---|
| BUIDL | **Highest**: accepted as IM collateral on **CME / Binance / Deribit / Crypto.com**; used by Apollo ACRED for redemption liquidity; integrated with Pendle for yield-trading; Aave RWA listings | Major derivatives venues + DeFi lending |
| BENJI / FOBXX | Medium: native to Solana DeFi (Kamino, Drift); Pendle | DeFi lending listings on Solana primarily |
| ACRED | sACRED (2025-06, with RedStone + Securitize) was **the first private-credit fund to obtain on-chain DeFi yield** | RedStone oracle-backed listings |
| WTGXX | Low: confined to WisdomTree Prime wallet ecosystem | Limited external DeFi integration |
| USYC | Pre-acq: deep DeFi (Frax, Ethena USDtb backing, Sky USDS RWA vault); post-acq: integrated into USDC.YS yield-bearing wrapper product | DeFi lending + yield protocols |
| USTB | Medium: crypto-native institutional DeFi | Early DeFi listings |
| OUSG | **Deep**: Flux Finance (Ondo's own lending market), Pendle yield-trading, Morpho RWA listings, Aave RWA candidate | DeFi lending + yield + Asia/LatAm wallets |
| USDY (Ondo retail) | High retail composability via Solana DeFi + Mantle / Sui ecosystems | Retail-grade DeFi listings (Kamino, others) |

BUIDL's DeFi integration depth is structural — it is **the cheapest source of T+0 redeemable yield-bearing collateral** available to derivatives venues and DeFi protocols simultaneously. The 2026-05-14 launch of the **$1B BlackRock × Goldman × DTCC × Janus instant-redemption facility** further entrenched BUIDL as the T+0 liquidity layer; competing products have to either route through BUIDL (OUSG model) or accept the T+1/T+2 redemption gap.

## Matrix F · Yield mechanism and economics

| Product | APY (2026-05 representative) | Sponsor fee | Yield distribution mechanism |
|---|---|---|---|
| BUIDL | ~4.3% | ~20bps | Daily distribution as dividend; rebased on-chain |
| BENJI / FOBXX | ~4.7% (7-day SEC yield) | 20bps | Daily distribution as dividend; on-chain rebase |
| ACRED | Variable (private credit; SOFR + spread) | ~75-150bps (typical private credit) | Quarterly distribution; private credit fund mechanics |
| WTGXX | ~4.7% (7-day SEC yield) | ~20bps | Daily distribution via Prime wallet |
| USYC (post-acq) | ~4.5% delivered as USDC.YS package | n/a (integrated into USDC.YS) | USDC + USYC share product package |
| USTB | ~4.5% | ~15bps | Daily distribution |
| OUSG | ~4.8% (SOFR-tracking; SOFR-25 to SOFR-40bps net) | ~15bps Ondo + 20bps BlackRock (via BUIDL underlying) | Daily distribution; routes through BUIDL |
| USDY (Ondo retail) | ~4.7% via rebase | ~20bps | Price-rebase (USDY) or supply-rebase (rUSDY) |

The economic model is unusually convergent: all UST-backed products deliver SOFR-adjacent yield with ~15-25bps sponsor fees. **OUSG's net APY structurally lags BUIDL by ~20bps** (the BlackRock 20bps fee + Ondo 15bps fee net of compounding) because OUSG sits downstream of BUIDL in the value chain. ACRED is the only product with a structurally different yield (private credit, longer duration, less liquid) and a structurally higher fee. USDY/rUSDY are the only products where **non-US retail can access yield directly without going through a US qualified-purchaser gate**.

## Matrix G · GENIUS Act §501 compliance status

| Product | GENIUS §501 classification | Notes |
|---|---|---|
| BUIDL | Out of §501 scope (registered security; not a payment stablecoin) | Cannot be marketed as "stablecoin" in US payments contexts |
| BENJI / FOBXX | Out of §501 scope (SEC-registered 2a-7 MMF) | Same logic as BUIDL |
| ACRED | Out of §501 scope (private credit; not a peg) | Categorically not a stablecoin |
| WTGXX | Out of §501 scope (SEC-registered 2a-7 MMF) | Same logic as BENJI |
| USYC | Out of §501 scope (Reg D fund); but **integrated into USDC.YS** which is a permitted GENIUS-compliant yield-bearing wrapper product | Circle's USDC.YS bundles USDC (GENIUS-compliant SC) + USYC (registered fund) to **avoid §501 SC-cannot-pay-interest** restriction |
| USTB | Out of §501 scope | Reg D fund |
| OUSG | Out of §501 scope (Reg D fund) | Reg D fund |
| USDY / rUSDY | Explicitly **not** marketable as SC under §501 (registered note; non-US only) | Distinct fourth-circle in [[fintech/three-circles-stablecoin-mra-framework\|MRA framework]] |

GENIUS Act §501's prohibition on stablecoin issuers paying interest **directly created the tokenized-MMF growth tailwind**. Yield-bearing dollars cannot legally be SCs in the US payments rail — but they can be tokenized MMF shares. The Circle × Hashnote acquisition and subsequent USDC.YS launch are the cleanest demonstration: Circle owns the SC issuer (USDC) and the yield engine (USYC) and bundles them as a product package, **routing around §501** while remaining technically compliant. Every second-tier tokenized-MMF benefits from this regulatory geometry.

## Why these dimensions

The nine matrix axes (NAV, AUM, settlement chain, transfer agent, custodian, regulatory wrapper, distribution, target investor, on-chain composability) were chosen because they map to the **gating variables in institutional adoption decisions**:

1. **NAV / AUM** — measures realised scale (the only metric LPs care about post-launch).
2. **Settlement chain** — determines on-chain composability ceiling (Solana DeFi vs Ethereum DeFi vs both).
3. **Transfer agent** — determines operational risk and regulatory chain-of-custody (Securitize concentration is structural).
4. **Custodian** — determines the underlying-asset safety (BNY Mellon concentration is structural).
5. **Regulatory wrapper** — bifurcates the eligible investor base (Reg D vs 2a-7 vs Reg S).
6. **Distribution channel** — predicts adoption velocity (the binding competitive moat).
7. **Target investor** — determines TAM (qualified purchaser vs retail vs non-US).
8. **On-chain composability** — determines DeFi integration depth (BUIDL's IM collateral acceptance is a structural moat).
9. **GENIUS §501 compliance** — determines whether the product can be bundled into yield-bearing SC wrappers (USDC.YS pattern).

These nine variables together explain why **BUIDL has captured 32% market share in 24 months from a standing start** (institutional distribution + Securitize + BNY Mellon + Reg D + IM collateral + 8 chains) and why **WTGXX is structurally constrained to Prime wallet's growth ceiling** (single-distribution-channel lock-in despite favourable 2a-7 wrapper). The matrix view exposes these patterns side-by-side.

## Reading the matrix

- **BUIDL is the "yield infrastructure" not just a product**: BUIDL is consumed as collateral by Apollo ACRED, integrated as reserve by Circle USDC, accepted as IM by CME/Binance/Deribit, and re-routed through Ondo OUSG. Its real economic footprint exceeds AUM by a multiple.
- **The second-tier is not converging on BUIDL — it is differentiating**: BENJI on retail brokerage, OUSG on Asia/LatAm distribution, ACRED on private credit, USDY on non-US retail, WTGXX on in-house Prime wallet, USYC on USDC.YS integration. None directly attacks BUIDL's institutional Reg D moat.
- **Securitize concentration is the most underappreciated risk**: transfer agent for BUIDL + ACRED + (via re-routing) OUSG means a Securitize operational failure cascades across the second-tier. BlackRock's $100M investment + board seat is partly a risk-mitigation play.
- **BNY Mellon custodian concentration is even larger**: custodian for BUIDL Reserve + BENJI/FOBXX + USDC Reserve + USDY underlying. A BNY operational issue would propagate to the entire compliant-USD-on-chain stack.
- **OUSG's structural dependency on BUIDL** means OUSG is not really a separate product — it is a BUIDL distribution wrapper for non-US institutional Asia/LatAm clients. Pure-substitute competition with BUIDL is structurally hard.
- **GENIUS §501 created the tailwind**: Circle's USDC.YS (USDC + USYC bundle) is the cleanest demonstration that tokenized-MMF + GENIUS-compliant-SC is a permitted yield-bearing-USD wrapper, validating second-tier MMF strategy.
- **The market is still ~0.1% of US MMF TAM** — $8B vs $7T. Even 10× growth still leaves ample headroom for additional issuers.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL SC issuer adoption]]
- [[fintech/franklin-templeton-stablecoin-migration|Franklin Templeton BENJI / FOBXX]]
- [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]]
- [[fintech/tokenized-mmf-wisdomtree-hashnote|WisdomTree WTGXX + Hashnote USYC]]
- [[fintech/ondo-finance-rusdy-adoption|Ondo OUSG / USDY / rUSDY]]
- [[fintech/circle-usdc-stablecoin|Circle USDC]]
- [[fintech/circular-reserve-asset-flywheel-overview|準備金相互ロックフライホイール]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン利息分配経済学]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS / sUSDS]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA framework]]
- [[fintech/m-network-m0-neutral-infrastructure|M^0 / M Network neutral infrastructure]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto bifurcation]]
<!-- /wiki-links:managed -->

## Sources

- BlackRock — BUIDL fund page: https://www.blackrock.com/us/individual/products/422581/
- Franklin Templeton — FOBXX fund page: https://www.franklintempleton.com/investments/options/money-market-funds/products/29386/SINGLCLASS/franklin-on-chain-u-s-government-money-fund/FOBXX
- Apollo + Securitize ACRED page: https://apolloacademy.com/securitize/
- WisdomTree — WTGXX fund page: https://www.wisdomtree.com/investments/etfs/fixed-income/wtgxx
- Hashnote USYC: https://www.usyc.com/
- Superstate USTB: https://superstate.com/
- Ondo Finance — OUSG / USDY / rUSDY product docs: https://ondo.finance/
- SEC EDGAR — registered MMF + 2a-7 filings: https://www.sec.gov/edgar
- Circle blog — Circle acquires Hashnote (2024-12): https://www.circle.com/blog/circle-acquires-hashnote
- DefiLlama BENJI protocol page: https://defillama.com/protocol/franklin-templeton-benji
- Moody's public rating action — Aaa-mf for BUIDL + FYHXX (2026-05-13)
- Public BlackRock × Goldman × DTCC × Janus $1B instant-redemption facility announcement (2026-05-14)
