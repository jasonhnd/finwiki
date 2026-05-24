---
title: BlackRock BUIDL · 稳定币与 DeFi 协议储备采用矩阵
aliases: [blackrock-buidl-sc-issuer-adoption, BUIDL SC adoption, BUIDL collateral matrix]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [fintech, tokenization, mmf, blackrock, stablecoin-reserve, defi-collateral, im-collateral]
sources: []
status: candidate
---

# BlackRock BUIDL · 稳定币与 DeFi 协议储备采用矩阵


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> BUIDL 是 GENIUS Act §501 之后唯一一只**横跨所有"白圈"+"DeFi 灰圈" SC issuer 的中立储备资产**——USDB(Stripe/Bridge)/ Frax sfrxUSD / Ondo OUSG / Ethena USDtb / Spark sUSDS 都以不同方式把 BUIDL 写入储备或抵押。BUIDL 同时被 CME / Binance / Deribit / Crypto.com 接受为衍生品保证金。这种"无差别 servicing"是 BlackRock 的 **中立军火商定位**,与 JPMorgan 闭环银行模式形成镜像。

## Key facts

- **USDB** (Stripe/Bridge): 主要在 BlackRock MMF · ~$1.8B 走 BUIDL ^[extracted]
- **Frax sfrxUSD**: v3 用 BUIDL 替换部分 USDC · ~$200M ^[extracted]
- **Ondo OUSG**: 100% 后端为 BUIDL · ~$650M ^[extracted]
- **Ethena USDtb**: 完全由 BUIDL 支撑 · ~$1.4B ^[extracted]
- **Spark sUSDS** (Maker → Sky): 通过 RWA vault 间接持有 · ~$300M ^[extracted]
- IM collateral 接受方: CME (prime broker)、Binance (BNB Chain 2025-11)、Deribit、Crypto.com ^[extracted]
- Apollo ACRED 用 BUIDL 提供赎回流动性 ^[extracted]

## Mechanism / How it works

BUIDL 在三种角色上同时使用:(1) **SC 储备资产** ——issuer 持有 BUIDL,把"国债 yield" 通过"SC 流通"杠杆化;(2) **DeFi 协议抵押品** ——RWA vault 接 BUIDL 后,USDS / sfrxUSD 等去中心化 SC 也可间接获得机构合规储备;(3) **衍生品 IM** ——交易所与 prime broker 把 BUIDL 列入合格保证金,让机构在不动现金的情况下吃 4.3% APY。**横跨白圈 + 灰圈是关键**:BUIDL 不挑客户(中立军火商),只要 KYC 通过都能买 → 这与 [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]] 只服务自家客户的闭环模式形成镜像,也呼应 [[fintech/wall-street-crypto-network-neutrality|Wall Street 加密网络中立]] 的中立军火商范式。

## Origin & evolution

2024-03 BUIDL 上线时主要服务 Ondo OUSG 单一客户(早期 $400M+ 来自 Ondo)。2024-Q4 Ethena USDtb + Frax v3 + Spark RWA vault 接入。2025-Q3 USDB (Stripe/Bridge) 上线后成为最大单一 SC issuer 客户。2025-11 Binance 把 BUIDL 接入 BNB Chain 作 IM,**首次有 CEX 直接接受代币化 MMF 作保证金**,扩大了 [[exchanges/rwa-tokenization-cex-integration|CEX RWA 抵押集成]] 的标准模板。2026-Q1 Apollo ACRED 用 BUIDL 做赎回流动性后备,**首次有 private credit fund 用 BUIDL 解决 T+0 流动性**。2026-05-14 $1B 即时赎回设施进一步把 BUIDL 锁定为流动性网络中心节点。

## Counterpoints

"BUIDL 是中立军火商"叙事过于干净——BlackRock 同时投资 Securitize($100M + 董事会席位)+ Circle Arc ($222M 私募)+ Tempo (B 轮),Coinbase IBIT 托管;BUIDL 实质上**带 BlackRock 阵营色彩**。Tether USDT 完全不用 BUIDL(灰圈选择),JPMorgan JPMD 用自家 MONY/JLTXX 不用 BUIDL(闭环银行),Goldman+BNY Canton 用自家方案——BUIDL 的"无差别 servicing" 实际覆盖率约为 SC 市场 50-55%,不是 100%。

## Open questions

BSTBL (2a-7 公募的链上份额类) 上线后,SC issuer 会否从 BUIDL 迁到 BSTBL 以避免 Reg D 私募 $5M 起投门槛?Sky USDS 通过 Spark RWA vault 间接持有 BUIDL 的比例会否在 §501 强制执法压力下上升 (变相合规化)?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL 代币化 MMF 标杆]]
- [[fintech/circular-reserve-asset-flywheel-overview|储备金互锁飞轮]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS]]
- [[fintech/frax-frxusd-defi-stablecoin|Frax frxUSD]]
- [[fintech/stablecoin-revenue-split-economics|稳定币利息分润经济学]]
<!-- /wiki-links:managed -->

## Sources

- Apollo ACRED + Ethena USDtb + Ondo OUSG 公开披露与 BUIDL 链上 attestation
