---
source: fintech/circle-usdc-stablecoin
source_hash: 16473a2c8a098dd7
lang: zh
status: machine
fidelity: ok
title: "Circle USDC：合规白名单基准、NYSE 上市发行方、CCTP / BUIDL 联动"
translated_at: 2026-05-31T06:16:15.683Z
---

# Circle USDC：合规白名单基准、NYSE 上市发行方、CCTP / BUIDL 联动

## Wiki 路径

本文归入 [[fintech/INDEX|fintech index]]。可结合 [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]] 与 [[fintech/tether-business-model-short-treasury-yield|Tether USDT 经济模式]] 对比白名单 / 灰名单路径，也可结合 [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]] 理解 USDC 成为事实上的白名单基准这一监管背景。

> [!info] TL;DR
> Circle Internet Financial 是 USDC 与 EURC 的唯一发行方。到 2026-Q2，USDC 流通量为 **$65B+**，位列全球第 2，仅次于 USDT；EURC 约为 **€350M**。Circle 于 2025-06 完成 **NYSE IPO**，股票代码为 CRCL，IPO 价格为 $31，首日涨幅约 170%，到 2026-05 市值交易区间约为 $30-40B。其储备为 100% 短期美国国债加现金，主要放在 **Circle Reserve Fund** 中，由 BlackRock 旗下实体担任投资顾问，BNY Mellon 提供托管。USDC 也是符合 GENIUS Act §501 的“白名单”稳定币基准样本：通过 CCTP V2 在 18+ 条链上实现原生 burn-and-mint，并与 BUIDL 形成收益联动，同时与 Coinbase 采用 50-50 分成模式。EURC 则是在欧元侧少数实现规模化、并取得 MiCA EMT 许可的非银行稳定币。

## 关键事实

- USDC 流通量 **$65B+**（2026-Q2）: 全球第 2 大稳定币，约占公开链美元稳定币流通量的 30% ^[extracted]
- EURC 流通量约 **€350M**（2026-Q2）: 已取得 MiCA EMT 许可，主要链为 Ethereum / Solana / Stellar / Avalanche / Base ^[extracted]
- 发行实体: Circle Internet Financial Inc.（Boston），2013 年创立，创始人为 Jeremy Allaire / Sean Neville ^[extracted]
- **NYSE IPO 2025-06**: 股票代码 **CRCL**，IPO 募资约 $1.1B，IPO 后估值约 $24B；到 2026-05 市值约为 $30-40B ^[extracted]
- 储备为 100% 短期美国国债 + 现金，主要载体为 **Circle Reserve Fund**，由 BlackRock 管理，BNY Mellon 托管 ^[extracted]
- 每月发布储备透明度报告，并附 Deloitte 鉴证；持仓披露细到 CUSIP 层级 ^[extracted]
- **CCTP V2** 支持 18+ 条链上的原生 burn-and-mint，包括 Ethereum / Solana / Base / Arbitrum / Avalanche / Optimism / Polygon / Noble / Arc 等 ^[extracted]
- 与 Coinbase 的分销协议中，USDC 储备收益按 **50-50** 分成；Coinbase 在 2025 年来自 USDC 的收入贡献约为 $1B ^[extracted]
- 监管许可栈包括: 美国各州 MTL、NY DFS BitLicense、EU MiCA EMT、Singapore MPI，以及日本经 SBI VC Trade 开始处理 ^[extracted]

## USDC 储备模型、许可栈与分销经济

USDC 的核心模型可以概括为“**白名单合规基准**”: 100% 短期国债储备、每月透明度报告、Reserve Fund 隔离，以及按 CUSIP 层级公开披露。它与 [[fintech/tether-business-model-short-treasury-yield|Tether USDT 经济模式]] 形成鲜明对照: Circle 是上市公司，储备披露更公开；Tether 则是非上市公司，主要依赖季度级别的鉴证。USDC 的经济结构也直接对应 [[fintech/stablecoin-revenue-split-economics|stablecoin 利息分配经济学]]: 发行方 Circle 仅保留约一半储备收益，**另一半通过 Coinbase 作为分销激励分出**，这也成为 [[fintech/issuer-distributor-incentive-realignment-50-50-model|50-50 激励再对齐范式]] 的样板案例。

在跨链架构上，USDC 通过 [[systems/cctp-v2-overview|CCTP V2]] 实现“1 个 USDC，多条链”的原生结构: 各链上的 USDC 都是 Circle 直接铸造的原生资产，而非包装版本。跨链流程为源链 burn、Circle Attestation Service 签名、目标链 mint。另一个重要机制是**储备运用与代币化资产联动**: Circle 被公开视为 [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] 初期的重要机构 LP 之一，部分 USDC 储备通过 BUIDL 获取 MMF 收益，构成 [[fintech/circular-reserve-asset-flywheel-overview|储备资产联动飞轮]] 中的关键节点。

## 起源与演进

2013 年 Circle 成立，最初从 BTC 钱包 / 汇款业务起步。2015-2018 年完成转型，并于 2018-10 与 Coinbase 通过 **Centre Consortium** 推出 USDC。**2020-2023 年是 USDC 第一轮扩张期**: 2021-09 流通量首次突破 $30B；2022 年 Terra/LUNA 崩盘后，USDC 一度承接了部分 USDT 卖压。**2023-03 SVB 事件** 中，Circle 在 Silicon Valley Bank 的储备风险敞口为 $3.3B，USDC 一度脱锚至 $0.87，后于 3 天内恢复。**事后 Circle 大幅压缩银行端风险敞口，并把储备集中到 Circle Reserve Fund + BNY Mellon 托管结构中**。2023-08，Circle 收购 Centre 全部股权，USDC 治理进一步独立，Coinbase 转为战略股东 + 分销伙伴。**2024 年取得 EU MiCA EMT 许可**，EURC 成为 MiCA 框架下较早的欧元 EMT 之一。**2025-06 完成 NYSE IPO**，而非采用 SPAC 路径。2025-09，[[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]] 的实施使 USDC 在结构上可直接适配。到 2026-Q1，[[systems/cctp-v2-overview|CCTP V2]] 扩展至 Arc / Solana fast finality + Hooks；到 2026-Q2，USDC 流通量达 $65B+，与 USDT $145B 的差距由约 5 倍收窄至约 2.3 倍。

## 相关
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/tether-business-model-short-treasury-yield|Tether 灰名单模式]]
- [[fintech/ripple-rlusd-stablecoin|Ripple RLUSD]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[fintech/stablecoin-revenue-split-economics|stablecoin 利息分配经济学]]
- [[fintech/issuer-distributor-incentive-realignment-50-50-model|50-50 激励再对齐范式]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[systems/cctp-v2-overview|CCTP V2]]
- [[fintech/three-circles-stablecoin-mra-framework|三圈 MRA 框架]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART]]
<!-- /wiki-links:managed -->

## 来源

- https://www.circle.com/transparency - Circle Reserve Fund 月度透明度报告与 Deloitte 鉴证
- https://www.circle.com/usdc - USDC 产品与流通量页面
- https://developers.circle.com/stablecoins/cctp-getting-started - CCTP V2 开发者文档
- https://investor.circle.com/ - Circle Internet Group 投资者关系页面
- https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=circle - Circle SEC EDGAR 披露
- https://www.bnymellon.com/us/en/insights/all-insights/circle-reserve-fund.html - BNY Mellon 托管角色说明
