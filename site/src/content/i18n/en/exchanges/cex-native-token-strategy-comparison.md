---
source: exchanges/cex-native-token-strategy-comparison
source_hash: 743ec65ea60ae75b
lang: en
status: machine
fidelity: ok
title: "CEX native token strategy comparison — economic mechanics of BNB / OKB / HT / KCS / BGB and others"
translated_at: 2026-05-31T03:19:56.482Z
---

# CEX native token strategy comparison — economic mechanics of BNB / OKB / HT / KCS / BGB and others

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-cex-top10-comparison|グローバル CEX top 10 ランキング比較 (2025-2026)]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## Overview

Large overseas CEXs issue their own token (exchange token), integrating the 3  roles of (a) **fee discounts**, (b) **profit-return buyback&burn**, and (c) **own-L1 gas token**. This is a design that simultaneously achieves tokenization of exchange revenue and customer lock-in, but the **FTX FTT crash (2022-11)** exposed the risk of balance-sheet collateral use. **Binance BNB** continues as a major utility token at a market-cap scale of $80-100B, but it provoked a securities-nature controversy in the SEC lawsuit (2023-06) (dismissed 2025-02 ).

## Comparison of major CEX native tokens

| Token | Exchange | Role | Market-cap scale |
|---|---|---|---|
| **BNB** | Binance | BSC L1 gas + fee discount 25% + quarterly burn (20% of profit) | $80-100B |
| **OKB** | OKX | X Layer (L2) gas + fee discount + buyback burn | $3-5B |
| **HT** | Huobi → HTX | buyback burn + fee discount (shrank after 2022  stepped down) | shrinking |
| **KCS** | KuCoin | bonus rewards + fee discount + KCC L1 gas | mid-scale |
| **BGB** | Bitget | buyback burn + fee discount + Bitget Wallet linkage | expanding |
| **MX** | MEXC | fee discount + DAO governance | small-scale |
| **FTT** | FTX | Alameda's own price-propping + collateral use → 2022-11 crash · triggered FTX bankruptcy | extinct |

## Trade-offs of the economic mechanisms

- **buyback&burn**: reduced circulating supply + price support · SEC securities-classification risk (Howey test)
- **fee discount**: customer lock-in + trading-volume expansion · direct revenue reduction
- **own-L1 gas**: chain value capture + ecosystem expansion · loss of token value if L1 fails
- **collateral use (FTX FTT pattern)**: balance-sheet expansion · liquidity crisis on a crash → bankruptcy trigger

## Regulatory risk (US SEC + EU MiCA)

- **2023-06 SEC vs Binance/Coinbase**: sued BNB as an unregistered security (applying the Howey test) · litigation pending → **2025-02 SEC dismissal** (policy reversal under the Trump administration)
- Many native tokens carry securities-nature suspicion from the SEC's viewpoint (profit expectation + common-enterprise nature)
- **MiCA (EU full enforcement 2024-12 )**: native tokens classified as **ART** (Asset-Referenced Token) or **EMT** (E-Money Token) + license required · many are not yet compliant

## Structural reasons for the absence of domestic CEX tokens

Domestic CEXs have no native token — owing to the regulatory constraints of the **JVCEA WhiteList system** (listing-token screening) plus the **conflict-of-interest issue** under the **revised Payment Services Act** (prohibition on listing a self-issued token on one's own exchange) · substituted by a business model different from large overseas platforms (sales-counter spread + points linkage)

## Related

- [[exchanges/global-cex-top10-comparison]]
- [[exchanges/jp-foreign-exchange-bitget]] (BGB)
- [[exchanges/jp-foreign-exchange-mexc]] (MX)
- [[exchanges/jp-foreign-exchange-kucoin]] (KCS)
- [[exchanges/jp-foreign-exchange-bybit]]
- [[exchanges/jp-exchange-binance-japan]]
- [[exchanges/jp-exchange-okcoin-japan]]
- [[exchanges/us-crypto-licensing-multi-layer-system]] (SEC-related)
- [[exchanges/jvcea-whitelist-token-listing]]
- [[exchanges/ve33-governance-mechanism]] — ve(3,3) governance mechanism
- [[exchanges/global-vasp-regulatory-comparison-matrix]] — global VASP regulatory comparison matrix
- [[fintech/portfolio-winner-structure-arm-analog]] — portfolio winner structure arm analog
