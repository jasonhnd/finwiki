---
source: fintech/blackrock-buidl-sc-issuer-adoption
source_hash: 0f5b9dc17c64543d
lang: zh
status: machine
fidelity: ok
title: "BlackRock BUIDL · 稳定币与 DeFi 协议储备资产采用矩阵"
translated_at: 2026-05-31T05:31:05.779Z
---

# BlackRock BUIDL · 稳定币与 DeFi 协议储备资产采用矩阵

## Wiki 路径

本条目位于 [[fintech/INDEX|金融科技索引]] 之下。请与 [[fintech/japan-financial-regulation|日本金融监管：代币、加密资产与支付法体系]] 以及 [[fintech/japan-stablecoin-regulatory-landscape|日本稳定币法制度三层结构（JPYC、USDC、Project Pax）]] 配套阅读，以把握邻接监管与体系边界。

> [!info] TL;DR
> 自 GENIUS Act §501 以降，BUIDL 是**横跨所有“白圈” + “DeFi 灰圈”SC issuer 的中立储备资产**这一唯一的存在 — USDB（Stripe/Bridge） / Frax sfrxUSD / Ondo OUSG / Ethena USDtb / Spark sUSDS 均以某种形式将 BUIDL 纳入储备或抵押品。BUIDL 同时被 CME / Binance / Deribit / Crypto.com 接受为衍生品保证金。这种“无差别 servicing”正是 BlackRock 作为**中立军火商**的定位，与 JPMorgan 的闭环银行模式互为镜像。

## 关键事实

- **USDB** (Stripe/Bridge): 主要以 BlackRock MMF 运用 · ~$1.8B 经由 BUIDL ^[extracted]
- **Frax sfrxUSD**: v3 中 BUIDL 替换了部分 USDC · ~$200M ^[extracted]
- **Ondo OUSG**: 后端为 100% BUIDL · ~$650M ^[extracted]
- **Ethena USDtb**: 完全由 BUIDL 支持 · ~$1.4B ^[extracted]
- **Spark sUSDS** (Maker → Sky): 经由 RWA vault 间接持有 · ~$300M ^[extracted]
- 接受其作为 IM 抵押品的一方: CME (prime broker)、Binance (BNB Chain 2025-11)、Deribit、Crypto.com ^[extracted]
- Apollo ACRED 将 BUIDL 用作赎回流动性 ^[extracted]

## 机制 / 运作方式

BUIDL 同时以三种角色被运用：(1) **稳定币储备资产**，发行方持有 BUIDL，从而以稳定币流通撬动国债收益率；(2) **DeFi 协议抵押品**，RWA vault 纳入 BUIDL，使 USDS / sfrxUSD 等去中心化稳定币也能间接取得机构级合规储备；(3) **衍生品初始保证金**，交易所与 prime broker 将 BUIDL 列为合格保证金，使机构无需动用现金即可享受 4.3% APY。关键在于 BUIDL 横跨“白圈”和“灰圈”：它不挑选客户，只要通过 KYC 即可购买。这与 [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]] 仅服务自家客户的闭环模式互为镜像，也呼应 [[fintech/wall-street-crypto-network-neutrality|华尔街加密网络中立性]] 所描述的中立基础设施范式。

## 起源与演进

2024-03 BUIDL 推出时，主要服务 Ondo OUSG 这一单一客户（初期 $400M+ 经由 Ondo）。2024-Q4，Ethena USDtb、Frax v3 与 Spark RWA vault 接入。2025-Q3 USDB（Stripe / Bridge）推出后，成为最大的单一稳定币发行方客户。2025-11，Binance 在 BNB Chain 上将 BUIDL 接入为初始保证金，这是中心化交易所首次直接接受代币化 MMF 作为保证金的案例，扩展了 [[exchanges/rwa-tokenization-cex-integration|CEX RWA 担保整合]] 的标准模板。2026-Q1，Apollo ACRED 采用 BUIDL 作为赎回流动性备份，构成 private credit fund 以 BUIDL 解决 T+0 流动性的早期案例。凭借 2026-05-14 的 $1B 即时赎回设施，BUIDL 作为流动性网络中心节点的地位进一步巩固。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL 代币化 MMF 基准]]
- [[fintech/circular-reserve-asset-flywheel-overview|储备资产互锁飞轮]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS]]
- [[fintech/frax-frxusd-defi-stablecoin|Frax frxUSD]]
- [[fintech/stablecoin-revenue-split-economics|稳定币利息分配经济学]]
<!-- /wiki-links:managed -->

## Sources

- Apollo ACRED、Ethena USDtb、Ondo OUSG 的公开披露及 BUIDL 的链上证明
