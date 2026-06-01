---
source: fintech/fatf-travel-rule-cross-border-stack
source_hash: 3780ac564cc56fc4
lang: zh
status: machine
fidelity: ok
title: "FATF Travel Rule 跨境四层合规堆栈：司法辖区阈值分化 + §501 联动"
translated_at: 2026-05-31T06:16:15.742Z
---

# FATF Travel Rule 跨境四层合规堆栈：司法辖区阈值分化 + §501 联动

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融监管：银行、证券、资金结算与牌照边界]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 监管格局：JPYC、USDC、Project Pax 等]] for the broader system boundary.

> [!info] TL;DR
> 各司法辖区对 Travel Rule 的实施阈值差异很大（EU TFR $0 · 日本 ￥100,000 · 美国 $3,000），但 R.16 仍是全球最低底线。BSA Travel Rule + FATF R.16 + EU TFR + GENIUS §501 冻结机制，构成了当代加密资产合规的四层堆栈。“差异化执法 + R.16 全球底线”是 GENIUS、MiCA、EPI 等制度协同的基础 AML 层。

## Key facts

- EU 阈值为 EUR 0（全量交易）· TFR 2023/1113 · 自 2024-12-30 生效 ^[extracted]
- 日本阈值为 ￥100,000（约 $670）· 修订后《资金结算法》· 自 2023-06 生效 ^[extracted]
- 美国阈值为 $3,000（拟下调至 $1,000）· BSA Travel Rule · 1996/2019 ^[extracted]
- 新加坡为 SGD 1,500 · PS Act · 2024 ^[extracted]
- 香港为 HKD 8,000 · AMLO Sched 2 · 2023 ^[extracted]
- 加拿大为 CAD 1,000 · FINTRAC · 2021 ^[extracted]
- EU 最严格 · 美国最宽松 ^[extracted]
- VASP 5 类活动：法币兑换 / 加密资产之间兑换 / 转移 / 托管 / 发行参与 ^[extracted]

## Mechanism / How it works

**四层堆栈叠加**:
```
BSA Travel Rule ($3,000)       · 1996 原始规则
FATF R.16 (USD 1,000)          · 2019 扩展至加密资产（全球底线）
EU TFR (EUR 0)                 · 2024-12-30 最严格生效
GENIUS §501 freeze (30 min)    · OFAC SDN 自动执行
```

四层叠加 = 当代加密资产合规堆栈。**阈值分化的战略含义**:
- EU 最严格 · MiCA + DORA + TFR 0 = 全封闭环路，像 USDT 这类不合规参与者被迫退出
- 美国 $3,000 · 与 FATF $1,000 不一致 · 预计 2026-Q3 调整
- 日本 ￥100,000 · 在零售用户体验与合规之间取平衡
- 新加坡 SGD 1,500 + DTSP Regime 2024-04 · 灰区被收口

**DeFi 灰区**: FATF 2021-10 Updated Guidance 指出，只要存在“sufficient degree of control or influence”，就可能被认定为 VASP。纯智能合约 + 无治理控制 = 原则上不适用。实际执法中，经常会追溯到创始人 / DAO 成员（Tornado Cash 案）。日本 VASP 时间线见 [[exchanges/jp-vasp-regulatory-timeline|日本 VASP 监管时间线]]；全球横向比较见 [[exchanges/global-vasp-regulatory-comparison-matrix|全球 VASP 监管比较矩阵]]。

## Origin & evolution

1996 年由美国率先推动；2019 年 G20 大阪会议通过对加密资产的扩展，使 R.16 全球化；2023-2024 年各司法辖区完成本地化实施（日本约 6 个月 · EU 约 12 个月）。2024-12-30 EU TFR 生效是关键拐点 · USDT 在 EU 的份额从 28% 急降至 3%（MiCA + TFR 双重打击）。2026-Q3 FinCEN 的美国对齐计划，意味着全球底线大体趋同。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/fatf-travel-rule-overview|FATF Travel Rule 概览]]
- [[fintech/aml-cft-fatf-grey-list-cross-border-implications|FATF Grey List 跨境影响]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/chain-level-ofac-freeze-precedent|链上 OFAC freeze 先例]]
<!-- /wiki-links:managed -->

## Sources
