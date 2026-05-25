---
title: 三圆 MRA 经济量化 · $130B 合规圈 vs $384B 灰圈共存模式
aliases: [three circles MRA economic scale, $130B 三圆 2030, white-vs-gray ring economics, 合规圈 vs 灰圈]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [fintech, number, economic-pattern, mra, genius, mica, epi, white-gray-ring, 2030-forecast]
sources:
  - https://www.congress.gov/bill/119th-congress/senate-bill/394
  - https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1114
  - https://www.fsa.go.jp/en/policy/sftl/index.html
  - https://www.bis.org/cpmi/publ/d215.htm
  - https://www.imf.org/en/Publications/WEO
status: candidate
---

# 三圆 MRA 经济量化 · $130B 合规圈 vs $384B 灰圈共存模式


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 三圆合规圈(GENIUS + MiCA + EPI)2030 规模预测 **$130B**,仅占合规稳定币市场 35-40%;同期 USDT 灰区(7 国年流量 $384B)是合规圈的 **~3 倍**。这是一种"白圈与灰圈长期共存"的经济量化模式 —— 合规创造价值,但灰区不会消失。三圆并非"取代 USDT",而是从结构上把零售/灰区与机构/合规切分为两个不互通的市场。

## Key facts

- 三圆 2030 预测 = 美圆 $80B(USDC/USDB/PYUSD/RLUSD)+ 欧圆 $15B(EURC/EURCV/EURB)+ 日圆 $35B(JPYC/Progmat/银行币) ^[extracted]
- USDT 灰区 7 国月流量 $32B × 12 = $384B / 年(俄/伊朗/委内瑞拉/尼日利亚/土耳其/阿根廷/越南) ^[extracted]
- 合规白圈占合规稳定币市场 35-40% · 灰圈是白圈 ~3 倍规模 ^[inferred]
- 三圆 MRA 仍未正式签署(2026-05 互认草案讨论中) · 预计 2027-2028 落地 ^[extracted]
- 2030 规模严重依赖 fed funds rate(高利率 → 储备 yield → 发行人竞争意愿) ^[inferred]

## Mechanism / How it works

合规圈与灰圈的市场切分机制:

```
白圈($130B / 2030):       灰圈($384B+ / 年):
├── 机构托管(BUIDL/银行)   ├── 制裁规避(俄/伊朗)
├── CME 保证金              ├── 零售汇款(尼日利亚/菲律宾)
├── 银行 RTGS 互联          ├── 灰色商人结算
├── §501 链级 denylist 强制 ├── USDT on Tron P2P
└── 强 KYC / AML            └── 无 KYC 链上转账

切分逻辑: 监管要求 + 用户场景 + 渠道粘性形成 hard wall
         · 三圆扩张不会"吃掉"灰圈 —— 是两个市场
```

**单边互认 → 双边互认 → 三边 MRA** 的演化路径:
- 2026-02 U.S.-Japan MRA 已签(USDC × [[JapanFG/jpyc|JPYC]] 双向)
- 2026-Q3 U.S.-EU MRA 预计签署 — 详见 [[fintech/mica-cross-border-implications|MiCA 跨境含义]]
- 2027-2028 三圆 MRA 全签 → 持牌 issuer 自动 passporting

## Origin & evolution

[[fintech/genius-act-501-denylist-mandate|GENIUS Act]] 2025 通过 + [[fintech/mica-overview|MiCA]] 2024-12-30 全面生效 + 日本改正資金決済法 2023-06 升级为 [[fintech/japan-epi-three-types-overview|EPI 三型]] = 三圆基础齐备。$130B 2030 数字是在"互认协议 2028 签署 + EPI 信託型 2027 升级到允许利息分账"两个前提下的估算。若任一前提延迟,2030 规模可能降至 $80-100B。

## Counterpoints

$130B 是 likely 估算 · 实际取决于 issuer 是否真正接入 MRA(USDC 大概率会 · USDT 大概率不会)。$384B 灰圈数字是 Chainalysis 链上流量,部分是 round-tripping,实际"净流量"可能仅 30-50%。"白圈不会吃灰圈"的预设也可能错 —— 若 USDC 在新兴市场推出免 KYC 钱包(如 Yellow Card 模式扩张),可能侵蚀部分 USDT 份额。三圆 MRA 草案仍未签署 · 实际落地有 1-2 年延期风险。

## Open questions

EPI 信託型 2027 是否真能升级到允许"利息分账"?USDT 在 2030 是否会主动申请三圆合规(HK 牌照是信号)?三圆 MRA 与 BlackRock BUIDL "中立军火商"角色的相互加成(BUIDL 同时为美/欧/日 SC 提供储备)?中东数字资产基金 $200-500B 是否会作为"第四圆"参与白圈?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/three-circles-stablecoin-mra-framework|三圆 MRA 架构]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 链级 Denylist]]
- [[fintech/em-market-crypto-dollarization-pattern|新兴市场加密美元化]]
- [[fintech/stablecoin-revenue-split-economics|稳定币分润经济学]]
<!-- /wiki-links:managed -->

## Sources

- Chainalysis Geography of Cryptocurrency Report · BIS / FSB 三圆协调讨论文件
