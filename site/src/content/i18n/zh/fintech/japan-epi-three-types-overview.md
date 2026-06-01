---
source: fintech/japan-epi-three-types-overview
source_hash: 7703d8b0fe48a969
lang: zh
status: machine
fidelity: ok
title: "日本 EPI 三型架构 · 信托型 / 银行型 / 资金移转业者型 概览"
translated_at: 2026-05-31T07:28:06.159Z
---
# 日本 EPI 三型架构 · 信托型 / 银行型 / 资金移转业者型 概览

## Wiki route

本条目位于 [[fintech/INDEX|fintech index]] 下。可与日本金融监管、稳定币监管和支付索引一并阅读。

> [!info] TL;DR
> 日本《资金结算法》修正（2023）构建了**全球最细腻的稳定币框架**：EPI（Electronic Payment Instrument）三型架构，即信托型（Progmat XJPY）/ 银行型（Minna no Ginko + 福冈 FG）/ 资金移转业者型（JPYC）。三种类型在监管负担、灵活性和流通限制上差异很大。日本是全球首个以成文法明确界定稳定币法律地位的主要经济体（比 GENIUS Act 早 2  年）。

## Key facts

- 《资金结算法》修正于 2023  通过，并于 2023-06  生效 ^[extracted]
- 比 GENIUS Act 早约 2  年 ^[extracted]
- Progmat 的信托型结构被设计为 non-MUFG-controlled（单一最大股东 49% + 通过 51% 实现治理多元化）^[extracted]
- JPYC 是日本唯一的资金移转业者型 SC 持有者 ^[extracted]
- JPYC 在 2026-Q1  的流通量为 21 億円 + 6 万 holders + 在 3  个月内增长 2.6  倍 ^[extracted]
- SBI Circle Holdings 于 2025-08  设立，采用 50/50  对半出资，并获得 USDC 在日本的独家分销权 ^[extracted]
- Project Pax = 日本三大银行 + Datachain 的跨境 SC 项目，仅解决了 SWIFT 兼容性问题 ^[extracted]
- 资金移转业者型的流通上限：每笔 ¥100 万（部分场景）^[extracted]

## Mechanism / How it works

**EPI 三型对比**：
| 类型 | 发行人 | 监管 | 灵活性 | 流通上限 | 代表例 |
|---|---|---|---|---|---|
| 信托型 | 信托银行 | 信托业法 + EPI | 高（可任意金额发行） | 无 | Progmat XJPY（MUFG 信托 + 三井住友信托 + 瑞穗信托） |
| 银行型 | 银行 | 银行业法 + EPI | 中（与存款联动） | 与银行资产负债表挂钩 | Minna no Ginko SC（Solana 路线） |
| 资金移转业者型 | 资金移转业者 | 资金结算法 | 低（部分小额跨境场景受 ¥100 万 限制） | 每笔 ¥100 万（部分场景） | JPYC（冈部典孝） |

**信托型**（[[JapanFG/progmat|Progmat]] XJPY）：由三菱 UFJ、三井住友、瑞穗三大银行与 Datachain 合资，采用 non-MUFG-controlled 设计（单一最大股东 49% + 通过 51% 实现治理多元化），面向大额 B2B 资金。**银行型**（Minna no Ginko）：福冈 FG / Minna no Ginko + Solana 路线，面向银行零售客户。**资金移转业者型**（[[JapanFG/jpyc|JPYC]]）：由冈部典孝主导，是日本唯一的资金移转业者型 SC 持有者，在 3  个月内增长 2.6  倍。

## Origin & evolution

2017 年《资金结算法》修正首次定义“虚拟货币”。2019-04  年修正法引入“加密资产”概念。2022-06  年修正案通过，引入 EPI 三型框架。2023-06  年生效后，日本成为全球首个以成文法明确界定稳定币法律地位的主要经济体。2025-08  年 SBI Circle Holdings 成立，格局随之变化：USDC 在日本独家分销，再加上 JPYC / Progmat / Minna no Ginko，共同形成 4  阵营；详见 [[fintech/japan-epi-four-camps-comparison|日本 SC 四陣営比較]]。日本 VASP 总览见 [[exchanges/jp-vasp-regulatory-timeline|日本 VASP 規制タイムテーブル]]。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-epi-four-camps-comparison|日本 SC 四陣営比較]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 SC 規制全景]]
- [[fintech/jp-trust-type-sc-architecture|日本信託型 SC アーキテクチャ]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
<!-- /wiki-links:managed -->

## Sources
