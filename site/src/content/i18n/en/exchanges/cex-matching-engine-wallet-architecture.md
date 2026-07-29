---
source: exchanges/cex-matching-engine-wallet-architecture
source_hash: 6dced29c86136959
lang: en
status: machine
fidelity: ok
title: "CEX matching engine + cold/hot wallet internal architecture"
translated_at: 2026-07-29T11:02:23.000Z
---

# CEX matching engine + cold/hot wallet internal architecture


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/jp-vasp-cold-storage-segregation-rules|国内 VASP コールド保管 95% + 分別管理制度]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 1. Matching engine overview

The core of a CEX = the **matching engine (order-book matching engine)**. Design philosophies broadly fall into 3  categories:

- **CLOB (Central Limit Order Book)** — industry standard. Matches buy and sell orders by price and time. Carried over from NYSE / NASDAQ to CEXs
- **RFQ (Request for Quote)** — centered on institutional OTC. Request a bid/ask quote → individual fill
- **AMM-like** — DEX family. AMMs are an alternative design to CEX matching (see [[exchanges/amm-design-evolution]])

CEXs (Binance / Coinbase / bitFlyer / all domestic firms) are CLOB-based. Large institutional trades are handled separately by an OTC desk via RFQ.

## 2. CLOB matching-engine design elements

| Element | Content |
|---|---|
| **FIFO (First-In First-Out)** | Same price fills by time priority |
| **price-time priority** | 2 -stage matching of price priority + time priority |
| **iceberg orders** | Display large orders in splits to suppress market impact |
| **post-only / IOC / FOK** | Order types (maker only / Immediate-or-Cancel / Fill-or-Kill) |
| **co-location** | Low-latency connectivity for institutional HFT (NYSE / Binance VIP) |

Representative implementations: **NYSE / Binance / Coinbase / dYdX v4  (Cosmos appchain)**. dYdX v4  implements a CLOB on top of on-chain validators, attempting to fuse CEX performance with DEX transparency.

## 3. RFQ / OTC engine

Institutional OTC (**Cumberland / B2C2  / FalconX / Genesis (bankrupt)**) adopts an **RFQ scheme** rather than a CLOB:

- A client requests a quote, e.g. "I want to buy 100  BTC"
- The market maker presents a bid/ask
- Individual fill (does not appear in the order book)
- Controls slippage + conceals price on large trades

Domestic OTC: bitFlyer / Coincheck provide similar functionality to retail customers under the "sales-counter (販売所)" label (see [[exchanges/jp-cex-sales-vs-exchange-model-economics]]).

## 4. Cold/hot wallet internal architecture

The 3 -tier structure based on domestic VASP obligations ([[exchanges/jp-vasp-cold-storage-segregation-rules]]):

- **Hot wallet (≤ 5% domestic obligation)** — directly connected to the matching engine · real-time deposit/withdrawal processing · maker/taker bot integration · signing via API
- **Warm wallet** — semi-offline · staging for large withdrawals · replenished from cold multiple times per 1  day
- **Cold wallet (≥ 95% domestic obligation)** — air-gapped signing · multi-sig (at least 2-of-3 ) · HSM or MPC mandatory

The Coincheck 2018  NEM 580 億円 incident was the result of "effectively hot 100%" ([[exchanges/coincheck-nem-hack-detailed-analysis]]). The regulatory tightening after that incident made 3 -tier separation a domestic obligation.

## 5. Major technology stack

Representative technology categories used for signing and key management ([[exchanges/global-institutional-custody-five-pillars]] / [[exchanges/jp-institutional-custody-three-pillars]]):

Source: The entire table is based on [Safe Signatures](https://docs.safe.global/advanced/smart-account-signatures), [NIST FIPS 140-3](https://csrc.nist.gov/pubs/fips/140-3/final), and [Fireblocks' MPC overview](https://www.fireblocks.com/report/what-is-mpc), checked on 2026-07-29.

| Technology | Public specification example | Role |
|---|---|---|
| **multi-signature** | Safe smart-account signatures | A smart-account model that supports multiple owner signatures; the threshold is configured for each account |
| **HSM / cryptographic module** | NIST FIPS 140-3 | Defines security requirements and four security levels for the design and implementation of cryptographic modules |
| **MPC** | Fireblocks MPC | Distributes private-key operations across multiple parties and key shares so that no complete private key is held in one place |

The signing method, threshold, and HSM / MPC configuration used by a particular CEX or custody provider can change. Do not infer an operator's implementation from this table. For an individual incident analysis, see [[exchanges/bybit-lazarus-hack-detailed-analysis]]; for forensic methods, see [[security/bytecode-forensic-three-tier-verify|bytecode forensic 3-tier verify]] and [[security/forensic-identity-anchor-chain|forensic identity anchor chain]].

---

Source: general industry knowledge + Binance / Coinbase tech blog + Gnosis Safe docs + Fireblocks whitepaper + Anchorage announcements.
