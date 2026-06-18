---
source: fintech/fx-onchain-as-stablecoin-final-boss
source_hash: 27af5a7483001174
lang: zh
status: machine
fidelity: ok
title: "外汇 onchain 化是稳定币领域的「最终 Boss」 — 主经纪商消失与 Herstatt Risk 化解"
translated_at: 2026-06-18T23:59:13.130Z
---

# 外汇 onchain 化是稳定币领域的「最终 Boss」 — 主经纪商消失与 Herstatt Risk 化解


## Wiki 路径

本条目归属于 [[fintech/INDEX|fintech index]]。请与 [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] 一并阅读以获取相邻脉络，并参阅 [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] 了解更广泛的体系边界。

> [!info] TL;DR
> 一旦日元稳定币 × 美元稳定币的 24/365 即时结算得以实现，(1) 外汇市场的主经纪商层将不再被需要，(2) 时差结算风险（Herstatt Risk）将消失。这是整个稳定币行业最大的上市利益，也是机构投资者市场「最终所指向之处（最终 Boss）」。

## 结论

机构结算中外汇 onchain 化的好处有三：

1. **主经纪商层的消失** — 现状下，与多家银行进行外汇结算的机构投资者（[[fintech/jpmorgan-jpmd-coin|JPM]]/高盛/摩根士丹利/[[megabanks/mufg|三菱]] 等）须委托主经纪商进行归集并支付成本。若采用 SC 直接结算，则此中间层不再必要
2. **Herstatt Risk 的消失** — 日元在日本银行、美元在美联储分别结算，因时差产生 12-14  小时缺口。在此期间若结算对手破产，则会产生已单边付款的损失（1974 Continental Illinois Bank 破产为历史案例）。若 24/365 同时结算则时差为零（跨链 PvP 设计请参阅 [[systems/cross-chain-five-pole-comparison-matrix|跨链五極対比マトリクス]]）
3. **资本效率改善** — 银行有义务为结算风险计提相应资本，一旦结算风险消失，即可将资本解放至其他用途 — 直接作用于经营效率

## 推理

- 被表述为「最终 Boss」的结构性终极课题
- 既是机构投资者市场最大的 use case，也是最大的 bottleneck
- ETF 流动性结算（数十亿规模）是「干净的用例」但无法规模化，真正的本命是外汇
- BIS Herstatt Risk 是以 1974 年 Bank Herstatt 破产案例命名的行业术语，化解手段此前唯有缩短结算周期
- 区块链带来的即时结算实现了「消除结算时差本身」这一质的飞跃

## 适用场景

- 设计面向机构投资者的稳定币 pitch 的长期愿景时
- 在「稳定币的上市利益何在？」的讨论中，不止步于短期 use case 而要讲清本质时
- 构建机构 B2B SC 战略（[[fintech/jp-stablecoin-progmat|Project Pax / Progmat]] 等）时
- 在面向监管当局的说明中论证「银行发行 SC 的社会价值」时
- 从 root cause 角度阐述既有外汇市场的低效率时

## 来源

- 历史事实：1974 Continental Illinois Bank 破产 → Herstatt Risk 业界称谓固定下来
- BIS Herstatt Risk 官方定义（公开文献）
- 一致性：[[fintech/stablecoin-crossborder-b2b-growth|stablecoin-crossborder-b2b-growth]] B2B 外汇 corridor 讨论

## 相关
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関投資家 SC = 預金トークン]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーンファイナンス分離]]
- [[fintech/stablecoin-crossborder-b2b-growth|stablecoin-crossborder-b2b-growth]]
<!-- /wiki-links:managed -->
