---
source: fintech/fatf-travel-rule-cross-border-stack
source_hash: 3780ac564cc56fc4
lang: zh
status: machine
fidelity: needs_review
title: "FATF旅行规则跨境四层合规栈 · 各国阈值差异 + §501  联动"
translated_at: 2026-05-31T06:16:15.742Z
---

# FATF旅行规则跨境四层合规栈 · 各国阈值差异 + §501  联动

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 各国旅行规则执行阈值差异悬殊（EU TFR $0  · 日本 ¥100,000  · 美国 $3,000），但R.16 为全球底线。BSA旅行规则 + FATF R.16  + EU TFR + GENIUS §501 冻结的四层叠加 = 现代加密资产合规栈。"差异化执法 + R.16 全球底线"是GENIUS / MiCA / EPI协调的基础反洗钱层。

## Key facts

- EU阈值 EUR 0 （全件）· TFR 2023/1113  · 2024-12-30 施行 ^[extracted]
- 日本阈值 ¥100,000 （≈$670）· 修订《资金结算法》· 2023-06  施行 ^[extracted]
- 美国阈值 $3,000 （拟降至 $1,000）· BSA旅行规则 · 1996/2019  ^[extracted]
- 新加坡 SGD 1,500  · PS Act · 2024  ^[extracted]
- 香港 HKD 8,000  · AMLO Sched 2  · 2023  ^[extracted]
- 加拿大 CAD 1,000  · FINTRAC · 2021  ^[extracted]
- EU最严格 · 美国最宽松 ^[extracted]
- VASP 5  分类：法币兑换 / 加密资产互换 / 汇款 / 托管 / 参与发行 ^[extracted]

## Mechanism / How it works

**四层合规栈叠加**：
```
BSA旅行规则（$3,000）         ← 1996  原版
FATF R.16 （USD 1,000）        ← 2019  加密扩展（全球底线）
EU TFR（EUR 0）               ← 2024-12-30 最严格
GENIUS §501 冻结（30 分钟）   ← OFAC SDN自动执行
```

四层叠加 = 现代加密资产合规栈。**阈值差异化的战略含义**：
- EU最严格 → MiCA + DORA + TFR 0  = 完全闭环 · USDT等不合规参与方退出
- 美国 $3,000  → 与FATF $1,000  不一致 · 2026-Q3  调整
- 日本 ¥100,000  → 兼顾零售用户体验
- 新加坡 SGD 1,500  + DTSP制度 2024-04  → 关闭灰色地带

**DeFi的灰色地带**：FATF 2021-10  更新版指引指出，若存在"足够程度的控制或影响"则视为VASP。纯智能合约 + 无治理 = 不适用。实际运作中往往追溯至创始人 / DAO成员（Tornado Cash案例）。日本VASP时间线详见 [[exchanges/jp-vasp-regulatory-timeline|日本 VASP 規制タイムライン]]，全球横向比较详见 [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制比較マトリクス]]。

## Origin & evolution

1996  美国先行，2019  G20 大阪峰会通过加密扩展将 R.16  全球化，2023-2024  各国本地化（日本 6  月 · EU 12  月）。2024-12-30 EU TFR施行成为分水岭 · USDT的EU市场份额从 28% 骤降至 3%（MiCA + TFR双重打击）。2026-Q3  FinCEN美国对齐计划 = 全球底线基本统一。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/fatf-travel-rule-overview|FATF Travel Rule 概観]]
- [[fintech/aml-cft-fatf-grey-list-cross-border-implications|FATF Grey List クロスボーダー含意]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/chain-level-ofac-freeze-precedent|オンチェーン OFAC freeze 先例]]
<!-- /wiki-links:managed -->

## Sources
