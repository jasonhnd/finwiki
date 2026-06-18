---
source: fintech/tether-business-model-short-treasury-yield
source_hash: e689a5eaad009b38
lang: en
status: machine
fidelity: ok
title: "Tether's (USDT) business model = buying US short-term Treasuries with user funds and directly profiting from the yield, with an annual 1.5 兆円·40 -person setup"
translated_at: 2026-06-18T23:59:13.094Z
---

# Tether's (USDT) business model = buying US short-term Treasuries with user funds and directly profiting from the yield, with an annual 1.5 兆円·40 -person setup


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> Tether (the USDT issuer) invests the user funds it holds in US short-term Treasuries and books the yield directly as profit, earning roughly 1.5 兆円 in profit per year with a 40 -person setup. Its origin was a gray-zone-ish start of issuing USDT by collateralizing BTC/ETH, but it scaled up by happenstance. However, due to a KYC-layer mismatch, it cannot enter the institutional-investor market.

## Conclusion

| Item | Figure / mechanism |
|---|---|
| Staff setup | ~40  people |
| Annual profit | ~1.5 兆円 |
| Profit source | USD-equivalent funds deposited by users → invested in US short-term Treasuries → the yield directly becomes profit |
| Origin | Issuing USDT by receiving crypto assets such as BTC/ETH (not receiving USD directly) |
| Side investment | Gold, US Treasuries, others → additional gains from appreciation |
| Weakness | A KYC layer premised on permissionlessness → a mismatch with the settlement standard of the institutional-investor market; cannot enter institutional |

## Reasoning

- Industry insiders' assessment: an origin described as "making money by happenstance" and "at first like a scam-ish business"
- The structure of "directly profiting" from short-term interest rates in the stablecoin market is similarly held by regulated stablecoins (USDC · [[payment-firms/jpyc|JPYC]] · bank-issued deposit tokens), but Tether maximizes its profit margin through scale × minimization of KYC costs
- Profit surged with the tailwind of the US short-term-interest-rate upswing period (2023-2025); while the rise in Japanese yen interest rates is sluggish, Japanese SC issuers cannot create an equivalent profit structure (the same "who takes the interest" question is organized in [[fintech/stablecoin-revenue-split-economics|稳定币利息分润経済学]])
- It structurally cannot enter the institutional-investor market due to [[fintech/institutional-stablecoin-deposit-token-thesis|預金トークン論]]; its main uses are retail / on-exchange / overseas remittance

## Applicable When

- When discussing stablecoin economics (yen-denominated SC issuance design / commercial settlement design, see [[fintech/circular-reserve-asset-flywheel-overview|準備資産フライホイール]])
- The "is a yen SC profitable?" discussion → while Japanese yen short-term interest rates are low, the same business model does not hold; SC economics depend on the interest-rate environment
- Discussion of the design of where user funds are invested → a bank-issued SC has the same structure of "funds are deposits, investment is banking business"
- When analyzing a proposal that tries to bring in USDT → can be used as a reason why it cannot enter the institutional market

## Source

- Public: Tether's public financials (annual profit · investment composition)
- Public: Tether's founding background (the BTC/ETH collateralization start)
- Consistency: the USDT-mention portion of [[fintech/japan-stablecoin-regulatory-landscape|日本 SC 三層構造]]

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関投資家 SC = 預金トークン]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|onchain-finance-vs-crypto-bifurcation]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 三層構造]]
<!-- /wiki-links:managed -->
