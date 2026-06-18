---
source: fintech/four-motive-classes-asymmetric-competition
source_hash: 44ef2ac1396245f2
lang: en
status: machine
fidelity: ok
title: "Asymmetric analysis of the 4  motive classes"
translated_at: 2026-06-18T23:59:13.120Z
---

# Asymmetric analysis of the 4  motive classes


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it against [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for peer / contrast context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system / regulatory boundary.

> [!info] TL;DR
> The common approach classifies market participants into "competitive camps" (the 7  camps in some financial group's deck, the 5  poles in v1  of this study, etc.). This implicitly contains a **symmetric-competition** assumption. **In reality players have 4  kinds of structural motive**, which correspond to **entirely different exit games**. Without understanding the motive classification, you cannot predict how each player will behave under pressure.

## The 4  motive classes

### Class 1: Locked-in Winners

**Characteristic**: Cannot retreat to another business model; win or die.

**Examples**:
- Circle (USDC is the only product line)
- [[fintech/tether-business-model-short-treasury-yield|Tether]] (USDT is the only product line)
- Paxos ([[fintech/paypal-pyusd-stablecoin|PYUSD]] / USAT / various SC issuance)
- Stripe (the vertical-integration bet is entirely on [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Bridge + Tempo + Privy]])
- Coinbase (Base + the USDC contract + Prime are core revenue)
- Stablecoin L1 / L2  chains

**Behavior under pressure**: **Accept high risk** + active acquisition + regulatory arbitrage.

### Class 2: Portfolio Winners

**Characteristic**: Invest in many; win if any one wins; diversify risk.

**Examples**:
- a16z crypto (lead the Arc $75M round + invest in many other SC / chain projects)
- BlackRock (Arc investment + [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] on the 8  chain + Tempo investment)
- Apollo (Arc investment + [[fintech/apollo-acred-private-credit-tokenization|ACRED]] on the 6  chain)
- SBI Holdings (Circle investment + holding [[payment-firms/jpyc|JPYC]] + holding SBI Circle Holdings 50% + many others)
- Mubadala (Arc + Middle East RWA fund investment)
- Visa (Arc investment + Tempo validator + accept all SCs + does not issue its own SC)
- Mastercard (same as Visa, but later in timing)

**Behavior under pressure**: **Maintain diversification** + do not unilaterally break the deadlock + accept the outcome of fragmentation persistent.

Reference: [[fintech/portfolio-winner-structure-arm-analog|ポートフォリオ勝者構造 / ARM アナロジー]]

### Class 3: Infrastructure Winners

**Characteristic**: Churn itself is revenue; sell to all combatant sides.

**Examples**:
- AWS / Azure / GCP (cloud infrastructure)
- Cloudflare (x402, AP2, AI inference agents)
- Anchorage (OCC charter as a service; provides white-label to 20 社's SC issuers)
- Bridge (OCC charter as a service)
- Chainalysis / TRM Labs / Elliptic (on-chain compliance as a service)
- FIDO Alliance / Linux Foundation AAIF (protocol standardization as governance)
- AT&T / Verizon (telecom KYC as a service; strong in Asia)

**Behavior under pressure**: **Welcome continued fragmentation** —— the more players, the more revenue.

### Class 4: Sovereign Coordinators

**Characteristic**: Do not participate in commercial competition; move by political logic.

**Examples**:
- BIS Project Agorá (7  central banks + 40  commercial banks)
- mBridge (China-led + UAE / Thailand / HK)
- Project Nexus (5  emerging economies, 2026  commercial use)
- Various central banks (PBoC, ECB, BoJ, Fed, RBI, MAS, HKMA, VARA)
- FATF (global AML/CFT framework)
- IMF / World Bank (system stability)

**Behavior under pressure**: **Move on a political timescale** (slow but irreversible) + do not accept commercial-logic arbitrage.

## Why this classification is more useful than "7  camps"

Some financial group's deck "7  camps" classification: private vs central-bank consortium / bank-only DLT / China state vertical / emerging-economy IPS / M&A / Big Tech / etc.

**The problem**: It places a16z (an investor) and Coinbase (an operator) on the same plane, and places Visa (a card network) and PayPal (a wallet) on the same plane. **But behavior under pressure is completely different**:
- a16z will not "sell" its stake in exchange for Coinbase's backing → Portfolio Winner
- Coinbase **will inevitably** counterattack under the pressure of the 2026-08  Circle contract → Locked-in Winner
- Visa will not unilaterally support either side → Portfolio Winner
- PayPal is under the pressure of a 4× growth rate on PYUSD → Locked-in Winner

**Predictable via the 4  motive classes**:
- Who **actively** escalates the conflict? Locked-in Winners
- Who **actively** mediates the conflict? Portfolio Winners + Infrastructure Winners
- Who **ignores** the conflict? Sovereign Coordinators (except where political intervention is required)

## Application template

**Analyze any market-structural event**:

1. List all major players
2. Classify into the 4  motive classes
3. Identify each class's "behavior under pressure"
4. Reason through **escalating pressure → who is active? who is passive? who exits?**

**Typical application 1: the stablecoin war**
- Locked-in Winners (5-7 社): head-on collision
- Portfolio Winners (8-10 社): diversified investment
- Infrastructure Winners (5-7 社): sell tools
- Sovereign Coordinators (10+ institutions): regulation + CBDC

**Typical application 2: the 2008  global financial crisis**
- Locked-in Winners: Lehman, Bear Stearns (forced failure / acquisition)
- Portfolio Winners: Goldman, JPMorgan (survived on a diversified revenue structure)
- Infrastructure Winners: BlackRock (took over distressed assets), ICE (structurally strengthened by taking over NYSE)
- Sovereign Coordinators: Fed, TARP, IMF (systemic intervention)

**The 4  motive-class classification method can be extended to any financial-infrastructure restructuring event**.

## Related

- [[fintech/wall-street-crypto-network-neutrality|Wall Street ネットワーク中立性]]
- [[fintech/portfolio-winner-structure-arm-analog|ポートフォリオ勝者構造]]
- [[fintech/central-banking-function-unbundling|中央銀行機能の解体 5 層]]

---
