---
title: Franklin Templeton FOBXX (BENJI) · Stellar 単一チェーンからマルチチェーン RWA へ · 「トークン化ファンド ≠ ステーブルコイン」のパラダイム
aliases: [franklin-templeton-stablecoin-migration, FOBXX, BENJI, Franklin OnChain US Government Money Fund, franklin-templeton-tokenized-fund, ft-onchain-multichain, BENJI-multichain]
domain: fintech
created: 2026-05-25
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-25
confidence: likely
tags: [fintech, franklin-templeton, fobxx, benji, tokenized-fund, mmf, stellar, ethereum, multichain, rwa, 2025-2026]
status: active
sources:
  - https://www.franklintempleton.com/
  - https://www.franklintempleton.com/investments/options/money-market-funds/products/29386/SINGLCLASS/franklin-on-chain-u-s-government-money-fund/FOBXX
  - https://www.sec.gov/edgar
  - https://defillama.com/protocol/franklin-templeton-benji
  - https://www.stellar.org/
  - https://www.benji.io/
---

# Franklin Templeton FOBXX (BENJI) · Stellar 単一チェーンからマルチチェーン RWA へ · 「トークン化ファンド ≠ ステーブルコイン」のパラダイム

## TL;DR

**Franklin OnChain US Government Money Fund** (ticker FOBXX、オンチェーンシェアクラス **BENJI**) は**米国初の SEC-registered 1940 Act money market fund がシェアを完全にオンチェーン化したプロダクト** (2021-04 ローンチ)。当初は**約 3 年間 Stellar 単一チェーンで運営**、2024-2025 から**マルチチェーン拡大**を完了:Polygon (2023-04 追加) + Arbitrum (2024-04) + Base (2024-09) + Avalanche (2024-10) + Aptos (2024-11) + Solana (2025-02) + Sui (2025-Q4) + 一部 EVM プライベートチェーン。2026-05 BENJI AUM **~$650M+**、tokenized MMF 第 2 位 (首位は [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] $2.5B+)。**FOBXX のコア戦略的価値**:業界で**最も早く「tokenized fund ≠ stablecoin」パラダイムが機能することを証明したプロダクト** —— SEC-registered 証券、yield-bearing、オンチェーンで daily NAV を計算、transfer agent をオンチェーン化、USDC/USDT とは全く異なるコンプライアンス分類に属する。

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] for the dominant tokenized-MMF peer that BENJI now competes with, with [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]] for the second-tier RWA segmentation, and with [[fintech/stablecoin-issuer-2025-2026-market-consolidation|stablecoin issuer 2025-2026 consolidation]] for why tokenized funds and stablecoins are increasingly recognized as distinct categories.

## Product fundamentals

| Attribute | Value |
|---|---|
| Legal name | Franklin OnChain U.S. Government Money Fund |
| Ticker | FOBXX |
| On-chain share class symbol | BENJI |
| Fund type | 1940 Act registered money market fund (US, SEC) |
| Inception | 2021-04 |
| AUM (2026-05) | ~$650M+ |
| 7-day SEC yield (2026-05) | ~4.7% |
| Expense ratio | 0.20% |
| Underlying | US Treasury securities, government repos, cash |
| NAV target | $1.00 per share, daily computed |
| Custody (Treasury) | BNY Mellon |
| Transfer agent | Franklin Templeton (on-chain ledger is the official record) |
| Distribution share class | Reg D for institutions, Reg A for accredited retail US, Reg S non-US |
| Chains live (2026-05) | Stellar, Polygon, Arbitrum, Base, Avalanche, Aptos, Solana, Sui |

Source: Franklin Templeton public fund documents + DefiLlama BENJI protocol page, snapshot 2026-05-15.

## The "Stellar-first 3 years" — what made it the right call (and what eventually broke it)

FOBXX launched on **Stellar in 2021-04**, becoming the **first SEC-registered tokenized money market fund** to use a public blockchain as its share-class registry. The 2021-2024 Stellar-only era reflected several deliberate choices:

1. **Compliance-first chain selection**: Stellar's built-in regulated-asset tooling (issuer accounts, asset trustlines, multi-sig, clawback) was operationally closer to traditional transfer-agent functions than Ethereum's ERC-20 model in 2021.
2. **No DeFi composability friction**: Stellar's lack of a heavy DeFi ecosystem meant Franklin did not have to deal with secondary trading, lending, or rehypothecation of fund shares — which would have raised SEC concerns about whether BENJI was being repurposed in ways the prospectus did not contemplate.
3. **Lower gas / operational cost**: Stellar's near-zero transaction cost made daily NAV updates and dividend rebases inexpensive vs Ethereum gas circa 2021-2022.
4. **Stellar Development Foundation as a strategic collaborator**: Franklin had a multi-year relationship with SDF and was not building from scratch.

The **break point** was 2023-2024. Three things shifted:

1. **[[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] launched in 2024-03 on Ethereum** and immediately attracted institutional capital that wanted DeFi-composable RWA exposure. BUIDL reached $500M MCap within 90 days. Franklin's Stellar-only product was structurally unable to capture that flow.
2. **EVM-chain institutional traction grew** through 2023-2024: Polygon, Arbitrum, and Base each landed multi-billion-dollar TradFi pilots. Tokenized funds increasingly needed to be on the chain where the institutional buyer's existing infrastructure already lived.
3. **Asia institutional interest required different chains**: Aptos (used by Asia-Pacific market-makers), Sui (Singapore / HK adoption), and Solana (broad institutional resurgence post-2023) each had non-trivial Asia-Pacific demand pockets.

Franklin's response was a **deliberate multi-chain expansion plan**, executed 2023-2025.

## Multi-chain expansion timeline

| Date | Chain added | Notable context |
|---|---|---|
| 2021-04 | Stellar (launch) | Single-chain phase |
| 2023-04 | Polygon | First EVM expansion; tested transfer-agent-on-chain in EVM |
| 2024-04 | Arbitrum | First L2; positioned for DeFi composability |
| 2024-09 | Base | Coinbase's L2; institutional reach via Coinbase rails |
| 2024-10 | Avalanche | Subnet-friendly, used by some TradFi pilots |
| 2024-11 | Aptos | First non-EVM, non-Stellar; Move VM; Asia-Pacific institutional reach |
| 2025-02 | Solana | High-throughput; alignment with PYUSD / USDC Solana flows |
| 2025-Q4 | Sui | Asia-Pacific institutional + Mysten Labs partnership |

By 2025-end Franklin had **eight chains live**, all carrying the **same single fund** (FOBXX) with on-chain shares interchangeable across chains via Franklin's controlled cross-chain transfer agent (no third-party bridge — Franklin keeps the transfer-agent function in-house). This is different from Ondo's multi-chain approach, which uses LayerZero / Axelar / Wormhole; Franklin keeps full custodial control of inter-chain movement.

## "Tokenized fund vs stablecoin" — the regulatory distinction this product defined

FOBXX / BENJI is **not a stablecoin**. The distinction is critical for the broader [[fintech/stablecoin-issuer-2025-2026-market-consolidation|stablecoin issuer 2025-2026 consolidation]] picture:

| Attribute | Stablecoin (USDC, PYUSD, USDG) | Tokenized MMF (BENJI, BUIDL) |
|---|---|---|
| Legal classification | E-money / payment instrument / trust deposit | 1940 Act registered security |
| Yield to holder | Zero (yield captured by issuer + distributor) | Yes (daily dividend rebase ~4-5% APY) |
| Daily NAV | Constant $1.00 (par redemption guarantee) | $1.00 target, fluctuates marginally, computed daily |
| Eligible buyer | Largely permissionless (USDC) or KYC-gated (USDG) | Accredited / qualified / non-US (per share class) |
| Regulator | NY DFS / OCC / MAS / HKMA depending on issuer | SEC primarily |
| Use case | Payments, settlement, trading collateral | Treasury reserve management, RWA collateral, idle-cash yield |
| GENIUS Act applicability | Yes (must meet §501) | No (separate 1940 Act regime) |

This distinction matters because **the same buyer can hold both, for different purposes**, and increasingly does:

1. Treasury teams hold BENJI / BUIDL for **idle-cash yield**.
2. Treasury teams hold USDC / PYUSD for **operational payments**.
3. **Conversion between them is a same-day function** at major prime brokers (BNY Mellon / State Street / Goldman / Anchorage).

The 2024-2026 institutional pattern is **"BENJI / BUIDL for the yield-bearing layer, USDC for the payment layer"** — and Franklin / BlackRock both benefit by occupying the yield layer that stablecoins cannot legally occupy in the US.

## Yield distribution mechanics

FOBXX accrues income daily from its UST + repo + cash portfolio. Income is distributed to BENJI holders via **monthly share-balance rebase** (additional BENJI tokens minted to wallet, proportional to accrued NAV gain). This avoids the price-rebase model used by USDY / sUSDe (which can complicate book-keeping for institutional buyers) and aligns with traditional MMF distribution conventions (where investors are issued additional shares from reinvested dividends).

Operational specifics:

- Distribution accrual: daily, based on previous-day weighted yield.
- Rebase frequency: monthly (currently), with weekly considered.
- Wallet impact: holders see their BENJI balance grow each month; no taxable event triggered until redemption (US tax treatment per fund prospectus).
- Cross-chain consistency: rebase is computed at the fund level and pushed to all 8 chains atomically via Franklin's transfer-agent system.

## Adoption metrics 2024-2026

| Metric | 2024-Q1 | 2024-Q4 | 2025-Q2 | 2025-Q4 | 2026-05 |
|---|---|---|---|---|---|
| BENJI AUM | $360M | $410M | $480M | $580M | $650M+ |
| Chains live | 2 (Stellar, Polygon) | 5 | 7 | 8 | 8 |
| Institutional holders (disclosed) | ~12 | ~30 | ~55 | ~80 | ~100+ |
| Tokenized MMF market share vs BUIDL | ~95% (BUIDL pre-launch) → ~40% (post BUIDL launch in 2024-03) | ~25% | ~22% | ~21% | ~20% |

Source: Franklin Templeton public AUM disclosures + DefiLlama BENJI dashboard, snapshot 2026-05-15.

The trend: BENJI **grew in absolute AUM** ($360M → $650M+ in ~26 months) but **lost relative market share** to BUIDL, which leveraged BlackRock's institutional Rolodex more aggressively. Franklin chose to stay in the multi-chain RWA race rather than retrench, and the [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]] / [[fintech/ondo-finance-rusdy-adoption|Ondo OUSG]] entries into the RWA segment created a 4-way race (BUIDL / BENJI / OUSG / ACRED) where Franklin held second place in MMF and fourth place overall by AUM.

## Strategic context — why the multi-chain bet matters

Franklin's CEO Jenny Johnson and EVP Roger Bayston have publicly emphasized that **tokenization is not optional** for asset managers competing for the next decade of treasury flows. Franklin's bet:

1. **Stellar-only would have meant ceding the EVM-dominant TradFi DeFi market** to BUIDL and OUSG entirely.
2. **8-chain coverage means any institutional buyer can hold BENJI on their preferred chain** — no need to switch to BUIDL just because their custodian / prime broker / treasury system uses chain X.
3. **The transfer-agent-on-chain model** Franklin has proven across 8 chains is **directly reusable for future Franklin tokenized funds** (equity funds, bond funds, ETF analogs). FOBXX is the proof-of-concept; the real value is the platform.
4. **Validator participation in [[fintech/ondo-finance-rusdy-adoption|Ondo Chain]]** (Franklin announced as a design partner) suggests Franklin is positioning to also be a **validator-class RWA chain participant**, not only an issuer.

This is the same logic as BlackRock's [[business/larry-fink-blackrock-digital-asset-template|digital-asset template]] — start with one product, prove the operational model, then template across the full fund lineup.

## The Benji wallet and direct retail surface

In 2024 Franklin launched the **Benji wallet** — a mobile-first interface that lets accredited US retail (Reg A share class) and non-US retail (Reg S) buy BENJI directly from Franklin without going through a brokerage account. Key features:

1. **Direct issuer relationship** — wallet holders are direct shareholders of FOBXX, not through a broker intermediary.
2. **Tap-to-pay / send mechanics** — BENJI can be sent peer-to-peer between Benji wallets (and to compatible external wallets on supported chains).
3. **In-app yield display** — daily yield accrual visible in the app interface.
4. **KYC built into wallet onboarding** — Franklin's transfer-agent identity layer is the gate.
5. **Cross-chain hold view** — a single wallet can hold BENJI on multiple chains simultaneously.

The Benji wallet is **the cleanest example so far of a tokenized fund being delivered with a consumer-fintech UX**. It is competitive with how Robinhood Gold delivers USDG yield, or how Coinbase delivers USDC + yield products, but with the added benefit that Franklin owns the issuer side of the relationship. By 2026-05 Benji wallet had ~40K KYC-verified users — modest but growing.

## How BENJI compares to BUIDL, OUSG, ACRED operationally

| Attribute | BENJI (FOBXX) | BUIDL | OUSG | ACRED |
|---|---|---|---|---|
| Legal type | 1940 Act registered MMF (open-end) | 1940 Act exempt private fund | 1940 Act exempt private fund | 1933 Act Reg D + Reg S fund |
| Underlying | UST + repo + cash | UST + repo + cash | BUIDL + UST | Private credit (corporate direct lending + ABS) |
| Eligible buyer | Accredited (Reg A) + non-US retail (Reg S) + institutional | Qualified purchaser ($5M+) | Qualified purchaser ($5M+) | Qualified purchaser |
| Yield distribution | Monthly rebase | Monthly distribution as additional BUIDL tokens | Yield in NAV / mint-burn | Quarterly distribution |
| Expense ratio | 0.20% | 0.20% (50 bps before partner share) | ~0.15% sponsor + BUIDL pass-through | 0.45% |
| Daily liquidity | Yes (T+0 within fund hours) | Yes (T+0 via Circle facility) | Yes (T+0 via BUIDL stack) | Limited (T+10 quarterly windows) |
| Chains live (2026-05) | 8 | 7 | 7 | 7 |
| AUM | $650M+ | $2.5B+ | $830M | $100M+ |
| Issuance platform | Franklin in-house | Securitize | Securitize | Securitize |

The **structural delta** between BENJI and BUIDL/OUSG is the **share-class eligibility** — BENJI's Reg A registration makes it the **only one of the four available to accredited US retail investors** (not just qualified purchasers). This is a meaningful but underexploited differentiator: most retail demand still goes to yield-bearing dollars (USDY, sUSDe) that do not require accredited status, and BENJI's accredited-only restriction caps the addressable market.

## Notable institutional integrations 2024-2026

| Integrator | Use case | Date | Significance |
|---|---|---|---|
| WisdomTree | Cross-fund collateral arrangements | 2024-Q3 | TradFi-to-TradFi tokenized collateral pilot |
| Mantle Network | Mantle Treasury holds BENJI | 2024-Q4 | Major L2 treasury allocation to tokenized MMF |
| Aptos Labs | Aptos Foundation treasury allocation | 2024-Q4 | Layer-1 foundation treasury use case |
| BNY Mellon | Custody of underlying Treasuries | Ongoing | Largest US custodian as backing infrastructure |
| Solana Foundation | Co-marketing BENJI on Solana | 2025-Q1 | Solana ecosystem expansion alliance |
| Sui Foundation | BENJI launch on Sui | 2025-Q4 | Asia-Pacific institutional reach |
| Ondo Chain (announced) | Validator partner | 2025-Q1 | RWA-L1 cross-issuer alignment |

The integration pattern shows Franklin executing the **"be everywhere institutions are, on their chosen chain"** strategy. Mantle's treasury allocation in 2024-Q4 was particularly important as a public signal — it showed that **L2 foundations themselves are buyers of tokenized MMF** for their own treasury management, not just users of stablecoins.

## Competition outlook 2026-2028

Three structural questions will determine whether BENJI grows from $650M to $2B+:

1. **Does BlackRock launch a retail BUIDL share class?** If yes, BENJI's only accredited-retail advantage disappears and Franklin reverts to a pure second-tier institutional position.
2. **Does Franklin launch a BENJI-2 product?** A tokenized intermediate-Treasury fund (5-10 year duration) or a tokenized investment-grade corporate bond fund would extend Franklin's platform without entering BlackRock's territory directly. Public statements suggest this is being planned but no public launch date.
3. **Does the SEC clarify how tokenized funds interact with stablecoin regulation?** Currently BENJI's 1940 Act status keeps it cleanly separated from GENIUS Act stablecoin requirements. If post-GENIUS Treasury guidance creates ambiguity (especially for cross-collateral use of BENJI within stablecoin reserve structures), Franklin's positioning could become more or less attractive overnight.

These questions also drive the broader [[fintech/onchain-finance-vs-crypto-bifurcation|onchain-finance vs crypto bifurcation]] dynamic: tokenized funds are increasingly part of the institutional onchain-finance stack, while stablecoins remain the payments / settlement layer. The clearer this separation becomes, the more valuable Franklin's platform investment is.

## Related

- [[fintech/INDEX|fintech index]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL SC-issuer adoption matrix]]
- [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]]
- [[fintech/ondo-finance-rusdy-adoption|Ondo Finance · OUSG / USDY / Ondo Chain]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/ripple-rlusd-stablecoin|Ripple RLUSD]]
- [[fintech/first-digital-fdusd-hk-stablecoin|First Digital FDUSD]]
- [[fintech/frax-frxusd-defi-stablecoin|Frax frxUSD]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS]]
- [[fintech/world-liberty-usd1-political-stablecoin|WLF USD1]]
- [[fintech/m-network-m0-neutral-infrastructure|M^0 neutral infrastructure]]
- [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]]
- [[fintech/tether-business-model-short-treasury-yield|Tether business model]]
- [[fintech/stablecoin-issuer-2025-2026-market-consolidation|Stablecoin issuer 2025-2026 consolidation]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|Global stablecoin five-pole matrix]]
- [[fintech/three-circles-stablecoin-mra-framework|Three circles SC MRA framework]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|Institutional deposit-token thesis]]
- [[fintech/protocol-hedge-strategy-stripe-pattern|Protocol hedge strategy · Stripe pattern]]
- [[fintech/cbbtc-institutional-btc-wrapper|cbBTC institutional wrapper]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|Onchain finance vs crypto bifurcation]]
- [[exchanges/jp-cex-deposit-token-stablecoin-integration|JP CEX deposit-token integration]]
- [[exchanges/INDEX|exchanges index]]
- [[business/larry-fink-blackrock-digital-asset-template|Larry Fink BlackRock digital-asset template]]
- [[business/paolo-ardoino-tether-business-model-template|Paolo Ardoino Tether template]]

## Sources

- Franklin Templeton official page (franklintempleton.com)
- FOBXX fund product page (franklintempleton.com)
- BENJI official page (benji.io)
- Franklin Templeton SEC EDGAR filings (sec.gov/edgar)
- DefiLlama Franklin Templeton BENJI dashboard (defillama.com)
- Stellar Development Foundation public documentation (stellar.org)
- Publicly disclosed chain-launch announcements from Franklin Templeton press releases
