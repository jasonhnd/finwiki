---
source: fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage
source_hash: 740cc46b4eec7aad
lang: en
status: machine
fidelity: ok
title: "Federal stablecoin bank arbitrage route using OCC trust bank charter"
translated_at: 2026-05-31T11:13:44.885Z
---

# Federal stablecoin bank arbitrage route using OCC trust bank charter


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> **trust bank charter conditional approval** issued by OCC (Office of the Comptroller of the Currency) = a “stablecoin bank” at the federal level, **50 Exempts state Money Transmitter License (MTL) and provides **FedWire direct connectivity**. Bridge is 2026-02 Acquired, it is the first stablecoin issuer in fintech history to reach this route, creating a complacent moat that competitors cannot replicate in the short term.

**Core mechanism**:

1OCC trust bank charter is at the federal level, **Supersedes state MTL systems due to Supremacy Clause**
2. Immediate deposit acceptance/loan provision is not required at the conditional approval stage (avoiding the trigger of the Bank Holding Company Act)
3Direct connection to **FedWire / Fedwire Securities / FedNow**, payment tier equivalent to JPMorgan / BofA
4Reserves can be stored in a Fed master account, **eliminates intermediary custodian counterparty risk**
5.No state filing required for interstate business, **≥50 State × 2-5 Year of Compliance Cost Savings (Estimated $30-100M)**

**Bridge Case Timeline**:

| Point in time | Event |
|---|---|
| 2023-2024 | Bridge launches as stablecoin infrastructure company |
| 2025-Q1 | Sequoia etc. lead, valuation $2.2B |
| 2025-Q3 | Stripe is $1.1B acquired Bridge (Sequoia was 2 in a month 5 times exit) |
| 2026-02 | OCC trust bank charter conditional approval 取得 |
| 2026-Q3 Schedule | GENIUS Act implementation regulations announced, Bridge route to be reference case |

**Comparison with other routes**:

| Route | Federal Backing | MTL Exemption | FedWire | Time Cost | Capital Requirement |
|---|---|---|---|---|---|
| OCC trust bank charter | Yes | Yes | Yes | 12–24 Month | $5–20M tier 1 |
| Apply for each state MTL by state | None | None | None | 3–5 Year(48–50 State) | $100k–500k/state surety bond |
| NYDFS BitLicense | NY state only | None | None | 18–36 Month | $5M |
| Credit Portfolio / Industrial Bank Charter | Part | Part | Part | 24–48 Month | $10–50M |
| Offshore e-money license | None | None | None | 6–12 Month | $2–5M |

**Trigger condition**:

- Business requires USD on-chain tokenization + US payments
- Reserve size/customer base attracts OCC review (usually >$500M AUM or backed by large strategic shareholders)
- Strategic shareholder/parent company has the ability to comply with the Bank Holding Company Act (Stripe = important)

**Versatility/Applicability**:

- USDC (Circle) has already applied for a similar route (related to First Citizens)
- PYUSD (PayPal) can be connected indirectly via Paxos
- USD pegged stablecoin issuers in general
- Future RWA tokenization platforms (BlackRock BUIDL, Apollo ACRED)

SEC/CFTC jurisdiction background [[fintech/cftc-sec-crypto-jurisdiction|CFTC vs SEC 暗号管轄争い]] A cross-sectional comparison of stablecoin licenses in each country is [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制比較マトリクス]] See.

**Counterexample/realm**:

- Not applicable to non-USD stablecoins (EUR, JPY, SGD require their respective federal regulatory routes)
- Possibility of OCC withdrawing conditional approval when political cycle changes (2024-2025 multiple precedents)
- Trust bank ≠ full bank: demand deposit cannot be accepted, loan cannot be provided
- After the Bank Holding Company Act triggers, the entire Stripe group will be subject to Fed regulation, **ecosystem costs may exceed compliance benefits**

**Valuation/Decision Implications**:

- Bridge valuation 25–35% is derived from OCC charter exclusivity (core explanation of Stripe acquisition premium)
- Competitors (USDC, PYUSD, USD1) Valuation requires “route delay” discount
- Investment judgment: the future 18 Maximum number of OCC charters per month (OCC results) 5–10 件 / year) = scarcity premium
- M&A signal: **Acquisition premium if private stablecoin company reaches OCC conditional stage 3–5×**(The regulatory window logic is [[fintech/regulatory-window-strategic-acquisition|規制ウィンドウ前戦略買収]] )


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 Denylist]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA アーキテクチャ]]
- [[fintech/regulatory-window-strategic-acquisition|規制ウィンドウ前戦略買収]]
<!-- /wiki-links:managed -->
