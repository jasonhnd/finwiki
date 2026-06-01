---
source: fintech/cbbtc-institutional-btc-wrapper
source_hash: 64383861866c42bb
lang: zh
status: machine
fidelity: ok
title: "cbBTC · Coinbase 封装 BTC · 机构信任的 WBTC 替代・窗口产品"
translated_at: 2026-05-31T05:31:05.761Z
---

# cbBTC · Coinbase 封装 BTC · 机构信任的 WBTC 替代・窗口产品

## Wiki 路线

本条目位于 [[fintech/INDEX|金融科技索引]] 之下。可与 [[fintech/japan-financial-regulation|日本金融监管：代币、加密资产与支付法体系]] 对照阅读，以理解相邻监管语境；也可与 [[fintech/japan-stablecoin-regulatory-landscape|日本稳定币法律制度三层结构（JPYC・USDC・Project Pax）]] 对照阅读，以把握更广的制度边界。

> [!info] TL;DR
> cbBTC 是 Coinbase 托管的 ERC-20 封装 BTC(2024-09-12 上线),1:1 BTC 储备 · 2026-03 时点流通量 ~**89,000 cbBTC** / 市值 **$6.1B** / Base 上 TVL **$839M**。2024 年的 BitGo WBTC 治理风波后,cbBTC 抓住"机构 BTC-DeFi 仓位迁移"窗口确立替代地位,构成 Coinbase **veToken host protocol flywheel** 中的 host 资产层,将 BTC 从 CEX 托管资产升级为"链上自循环现金流引擎"。

## 关键事实

- 流通量 **~89,000 cbBTC** · 市值 **$6.1B** · Base TVL **$839M** (2026-03) ^[extracted]
- 1:1 BTC 储备 · Coinbase 托管 · 链上证明 ^[extracted]
- 上线日 2024-09-12 · ERC-20 多链(主要为 Base + Ethereum) ^[extracted]
- 流动性核心场所 Aerodrome / Curve 交易对 ^[extracted]
- 同一基础设施同时托管 BlackRock IBIT(Coinbase 是 IBIT 的主要托管方) ^[extracted]
- WBTC(BitGo)于 2024 年将储备多签移交至 Justin Sun 关联实体 → 机构信任迁移 → cbBTC 受益 ^[extracted]

## 机制

cbBTC 在 Coinbase 的四层闭环中作为 host 资产运作：**Coinbase CEX → 铸造 cbBTC（host 资产）→ 进入 Base（host 平台）→ Aerodrome 交易（host DEX）→ veAERO 激励（host token）**。Coinbase 在保留 CEX 托管 BTC 的托管费和价差收入的同时，使部分 BTC 在 DeFi 中产生两层流动性收益。整个闭环年化估计为 **$130-250M**（详见 [[exchanges/vetoken-host-protocol-flywheel|veToken host protocol flywheel]]）。这是针对 Circle Arc 主网吸收机构 USDC、从而削弱 Base 估值的风险所采取的**链上自给自足型防御**。

## 起源与演进

cbBTC 于 2024-09-12 上线，由 Coinbase 内部 BTC 业务团队与 Base 团队联合公布。2024-Q4，BitGo 因 WBTC 储备多签转移至 Justin Sun 关联实体而引发治理争议，机构信任出现迁移窗口；Coinbase 以“美国上市公司 + OCC 监管框架 + 透明储备”的组合承接迁移。2025-Q1，cbBTC 凭借 Aerodrome 流动性深度反超 WBTC。2025-Q3，Aerodrome 与 Velodrome 合并（94.5% : 5.5%）并进军 Ethereum L1 + Circle Arc，开启 cbBTC 的跨链复制路径。2026-03，cbBTC 流通量达到 89,000 BTC，约为 WBTC 历史峰值的 60%。**机构迁移窗口约 18-24 个月**；一旦仓位固化，迁移成本极高，这与 [[fintech/regulatory-window-strategic-acquisition|监管窗口与战略性收购]] 中“窗口期对手不可逆迁移”的逻辑同构。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[exchanges/vetoken-host-protocol-flywheel|veToken host protocol flywheel]]
- [[exchanges/native-dex-flip-incumbent-pattern|L2 native DEX flipping incumbent pattern]]
- [[fintech/wall-street-crypto-network-neutrality|Wall Street crypto network neutrality]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]]
<!-- /wiki-links:managed -->

## Sources
