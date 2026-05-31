---
source: fintech/blackrock-buidl-sc-issuer-adoption
source_hash: 0f5b9dc17c64543d
lang: zh
status: machine
fidelity: ok
title: "BlackRock BUIDL · stablecoin 与 DeFi 协议的储备资产采用矩阵"
translated_at: 2026-05-31T05:31:05.779Z
---

# BlackRock BUIDL · stablecoin 与 DeFi 协议的储备资产采用矩阵

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 自 GENIUS Act §501 以降，BUIDL 是**横跨所有“白圈” + “DeFi 灰圈”SC issuer 的中立储备资产**这一唯一的存在 — USDB（Stripe/Bridge） / Frax sfrxUSD / Ondo OUSG / Ethena USDtb / Spark sUSDS 均以某种形式将 BUIDL 纳入储备或抵押品。BUIDL 同时被 CME / Binance / Deribit / Crypto.com 接受为衍生品保证金。这种“无差别 servicing”正是 BlackRock 作为**中立军火商**的定位，与 JPMorgan 的闭环银行模式互为镜像。

## Key facts

- **USDB** (Stripe/Bridge): 主要以 BlackRock MMF 运用 · ~$1.8B 经由 BUIDL ^[extracted]
- **Frax sfrxUSD**: v3 中 BUIDL 替换了部分 USDC · ~$200M ^[extracted]
- **Ondo OUSG**: 后端为 100% BUIDL · ~$650M ^[extracted]
- **Ethena USDtb**: 完全由 BUIDL 支持 · ~$1.4B ^[extracted]
- **Spark sUSDS** (Maker → Sky): 经由 RWA vault 间接持有 · ~$300M ^[extracted]
- 接受其作为 IM 抵押品的一方: CME (prime broker)、Binance (BNB Chain 2025-11)、Deribit、Crypto.com ^[extracted]
- Apollo ACRED 将 BUIDL 用作赎回流动性 ^[extracted]

## Mechanism / How it works

BUIDL 同时以 3 个角色被运用: (1) **SC 储备资产** — issuer 持有 BUIDL，从而以“SC 流通”杠杆化“国债收益率”;(2) **DeFi 协议抵押品** — RWA vault 纳入 BUIDL，从而使 USDS / sfrxUSD 等去中心化 SC 也能间接获取机构级合规储备;(3) **衍生品 IM** — 交易所与 prime broker 将 BUIDL 列为合格保证金，从而使机构无需动用现金即可享受 4.3% APY。**横跨白圈 + 灰圈是关键**: BUIDL 不挑选客户（中立军火商），只要通过 KYC 任何人都可购买 → 这与 [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]] 仅服务自家客户的闭环模式互为镜像，亦呼应 [[fintech/wall-street-crypto-network-neutrality|Wall Street 暗号ネットワーク中立性]] 的中立军火商范式。

## Origin & evolution

2024-03 BUIDL 推出时，主要服务于 Ondo OUSG 这一单一客户（初期 $400M+ 经由 Ondo）。2024-Q4 Ethena USDtb + Frax v3 + Spark RWA vault 接入。2025-Q3 USDB (Stripe/Bridge) 推出后，成为最大的单一 SC issuer 客户。2025-11 Binance 在 BNB Chain 上将 BUIDL 接入为 IM — **CEX 首次直接接受代币化 MMF 作为保证金的案例**，扩展了 [[exchanges/rwa-tokenization-cex-integration|CEX RWA 担保統合]] 的标准模板。2026-Q1 Apollo ACRED 采用 BUIDL 作为赎回流动性的备份 — **private credit fund 首次以 BUIDL 解决 T+0 流动性的案例**。凭借 2026-05-14 的 $1B 即时赎回设施，BUIDL 作为流动性网络中心节点的地位进一步巩固。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL トークン化 MMF のベンチマーク]]
- [[fintech/circular-reserve-asset-flywheel-overview|準備資産インターロック・フライホイール]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS]]
- [[fintech/frax-frxusd-defi-stablecoin|Frax frxUSD]]
- [[fintech/stablecoin-revenue-split-economics|stablecoin 金利分配エコノミクス]]
<!-- /wiki-links:managed -->

## Sources

- Apollo ACRED + Ethena USDtb + Ondo OUSG 的公开披露及 BUIDL 的 onchain attestation
