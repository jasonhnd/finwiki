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

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> cbBTC 是 Coinbase 托管的 ERC-20 封装 BTC(2024-09-12 上线),1:1 BTC 储备 · 2026-03 时点流通量 ~**89,000 cbBTC** / 市值 **$6.1B** / Base 上 TVL **$839M**。2024 年的 BitGo WBTC 治理风波后,cbBTC 抓住"机构 BTC-DeFi 仓位迁移"窗口确立替代地位,构成 Coinbase **veToken host protocol flywheel** 中的 host 资产层,将 BTC 从 CEX 托管资产升级为"链上自循环现金流引擎"。

## Key facts

- 流通量 **~89,000 cbBTC** · 市值 **$6.1B** · Base TVL **$839M** (2026-03) ^[extracted]
- 1:1 BTC 储备 · Coinbase 托管 · 链上 attestation ^[extracted]
- 上线日 2024-09-12 · ERC-20 多链(主要为 Base + Ethereum) ^[extracted]
- 流动性核心场所 Aerodrome / Curve 交易对 ^[extracted]
- 同一基础设施同时托管 BlackRock IBIT(Coinbase 是 IBIT 的主要托管方) ^[extracted]
- WBTC(BitGo)于 2024 年将储备多签移交至 Justin Sun 关联实体 → 机构信任迁移 → cbBTC 受益 ^[extracted]

## Mechanism / How it works

cbBTC 在 Coinbase 的 4 层闭环中作为 host 资产运作: **Coinbase CEX → mint cbBTC(host 资产) → 进军 Base(host 平台) → Aerodrome swap(host DEX) → veAERO bribe(host token)**。Coinbase 在保留 CEX 托管 BTC 的 custody fee + spread 的同时,实现该 BTC 部分在 DeFi 中产生 2 层流动性收益的结构。整个闭环年化估计为 **$130-250M**(详见 [[exchanges/vetoken-host-protocol-flywheel|veToken host protocol flywheel]])。这是针对 Circle Arc 主网吸收机构 USDC、致使 Base 估值受损 $20-25B 风险的 **链上自给自足型防御**。

## Origin & evolution

2024-09-12 cbBTC 上线(Coinbase 内部 BTC 事业部 + Base 团队联名公布)。2024-Q4 BitGo 治理风波(将 WBTC 储备多签移交至 Sun 关联实体)引发机构信任危机,Coinbase 以"美国上市企业 + OCC 监管下 + 透明储备"的 3 点组合主动承接迁移。2025-Q1 cbBTC 凭 Aerodrome 流动性深度反超 WBTC。2025-Q3 Aerodrome+Velodrome 合并(94.5% : 5.5%)并进军 Ethereum L1 + Circle Arc,开启 cbBTC 的跨链复制路径。2026-03 流通量达 89,000 BTC = WBTC 历史峰值的 ~60%。**机构迁移窗口约 18-24 个月**,仓位一旦固化迁移成本即极高的现象,与 [[fintech/regulatory-window-strategic-acquisition|規制ウィンドウ × 戦略的買収]] 中"窗口期对手不可逆迁移"逻辑同构。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[exchanges/vetoken-host-protocol-flywheel|veToken × 主導者 DEX 自己循環フライホイール]]
- [[exchanges/native-dex-flip-incumbent-pattern|L2 ネイティブ DEX が incumbent を逆転]]
- [[fintech/wall-street-crypto-network-neutrality|Wall Street 暗号ネットワーク中立性]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP 開発者プラットフォーム]]
<!-- /wiki-links:managed -->

## Sources
