---
title: FATF Travel Rule 跨境四层 stack · 各国门槛差异 + §501 协同
aliases: [fatf-travel-rule-cross-border, EU TFR Japan FinCEN Travel Rule comparison]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: certain
tags: [fintech, law, regulation, fatf, travel-rule, eu, jp, us, hk, sg]
sources: []
status: candidate
---

# FATF Travel Rule 跨境四层 stack · 各国门槛差异 + §501 协同

> [!info] TL;DR
> 各国 Travel Rule 实施门槛差异巨大(EU TFR $0 · 日本 ¥100,000 · 美国 $3,000)但 R.16 是全球 floor。BSA Travel Rule + FATF R.16 + EU TFR + GENIUS §501 freeze 四层叠加 = 现代加密合规 stack。"差异化执行 + R.16 全球 floor" 是 GENIUS / MiCA / EPI 协同的底层 AML 层。

## Key facts

- 欧盟门槛 EUR 0(全部)· TFR 2023/1113 · 2024-12-30 生效 ^[extracted]
- 日本门槛 ¥100,000(≈$670)· 改正資金決済法 · 2023-06 生效 ^[extracted]
- 美国门槛 $3,000(拟降 $1,000)· BSA Travel Rule · 1996/2019 ^[extracted]
- 新加坡 SGD 1,500 · PS Act · 2024 ^[extracted]
- 香港 HKD 8,000 · AMLO Sched 2 · 2023 ^[extracted]
- 加拿大 CAD 1,000 · FINTRAC · 2021 ^[extracted]
- 欧盟最严 · 美国最宽松 ^[extracted]
- VASP 五类:法币兑换 / 加密互换 / 转账 / 托管 / 发行参与 ^[extracted]

## Mechanism / How it works

**四层 stack 叠加**:
```
BSA Travel Rule ($3,000)      ← 1996 原始
FATF R.16 (USD 1,000)         ← 2019 加密扩展(全球 floor)
EU TFR (EUR 0)                ← 2024-12-30 最严
GENIUS §501 freeze (30 分钟)   ← OFAC SDN 自动执行
```

四层叠加 = 现代加密合规 stack。**门槛差异化战略含义**:
- 欧盟最严 → MiCA + DORA + TFR 0 = 完整闭环 · USDT 等不合规玩家退出
- 美国 $3,000 → 与 FATF $1,000 不对齐 · 2026-Q3 调和
- 日本 ¥100,000 → 与零售用户体验平衡
- 新加坡 SGD 1,500 + DTSP Regime 2024-04 → 关闭灰色地带

**DeFi 灰区**:FATF 2021-10 Updated Guidance 指 "sufficient degree of control or influence" 则视为 VASP。纯智能合约 + 无 governance = 不是。实际操作中常追溯到 founders / DAO 成员(Tornado Cash 案例)。

## Origin & evolution

1996 美国先行,2019 G20 Osaka 加密扩展把 R.16 全球化,2023-2024 各国本地化(日本 6 月 · 欧盟 12 月)。2024-12-30 EU TFR 生效是分水岭 · USDT 在欧盟份额从 28% 跌到 3%(MiCA + TFR 双重打击)。2026-Q3 FinCEN 美国对齐计划 = 全球 floor 几乎统一。

## Counterpoints

- EU TFR EUR 0 阈值过激 · 实际执法压力高 · 部分中小机构合规失败
- 美国低于 FATF 标准 · 给国际套利留口子
- DeFi 是否 VASP 仍有解释空间 · Tornado Cash 案后仍未完全清晰

## Open questions

- FinCEN 2026-Q3 阈值降至 $1,000 是否一次到位?
- DeFi front-end / wallet aggregator 是否会被纳入 VASP?
- self-hosted wallet 与 VASP 转账的 KYC 责任分配?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/fatf-travel-rule-overview|FATF Travel Rule 概览]]
- [[fintech/aml-cft-fatf-grey-list-cross-border-implications|FATF Grey List 跨境含义]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/chain-level-ofac-freeze-precedent|链上 OFAC freeze 先例]]
<!-- /wiki-links:managed -->

## Sources

