---
source: fintech/three-circles-mra-2030-economic-scale
source_hash: ac5ccf388c8944b0
lang: zh
status: machine
fidelity: ok
title: "三圆 MRA 经济量化 · $130B 合规圈 vs $384B 灰色圈共存模型"
translated_at: 2026-06-18T23:59:13.101Z
---

# 三圆 MRA 经济量化 · $130B 合规圈 vs $384B 灰色圈共存模型

## Wiki 路线

本条目归于 [[fintech/INDEX|fintech index]] 之下。请配合 [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] 阅读以获取邻接语境，并参阅 [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] 以了解更宏观的系统边界。

> [!info] TL;DR
> 三圆合规圈（GENIUS + MiCA + EPI）的 2030 规模预测为 **$130B**，仅占合规 stablecoin 市场的 35-40%。同期 USDT 灰色地带（7  个国家的年度流量 $384B）是合规圈的 **~3 倍**。这是一个「白圈与灰圈长期共存」的经济量化模型 —— 合规创造价值，但灰色地带并不会因此消失。三圆并非「替代 USDT」，而是从结构上把零售 / 灰色地带与机构 / 合规切分为相互不通的 2  个市场。

## Key facts

- 三圆 2030 预测 = 美圆 $80B（USDC/USDB/PYUSD/RLUSD）+ 欧圆 $15B（EURC/EURCV/EURB）+ 日圆 $35B（JPYC/Progmat/银行币） ^[extracted]
- USDT 灰色地带 7  个国家的月度流量 $32B × 12 = $384B / 年（俄罗斯/伊朗/委内瑞拉/尼日利亚/土耳其/阿根廷/越南） ^[extracted]
- 三圆 MRA 仍未正式签署（截至 2026-05  正在讨论相互认证草案）· 预计 2027-2028  落地 ^[extracted]

## Mechanism / How it works

合规圈与灰色圈的市场切分机制：

```
白圈($130B / 2030):    灰圈($384B+ / 年):
├── 机构托管(BUIDL/银行)     ├── 规避制裁(俄罗斯/伊朗)
├── CME 保证金                     ├── 零售汇款(尼日利亚/菲律宾)
├── 银行 RTGS 互联             ├── 灰色商户结算
├── §501 链级 denylist 强制  ├── USDT on Tron P2P
└── 强 KYC / AML                 └── 无 KYC 的链上转账

切分逻辑：监管要求 + 用户场景 + 渠道粘性形成 hard wall
                  · 三圆扩张不会「吃掉」灰圈 —— 2  个市场
```

**单向相互认证 → 双向相互认证 → 三边 MRA** 的演进路径：
- 2026-02 U.S.-Japan MRA 已签署（USDC × [[payment-firms/jpyc|JPYC]] 双向）
- 2026-Q3 U.S.-EU MRA 预计签署 — 详情参见 [[fintech/mica-cross-border-implications|MiCA クロスボーダー含意]]
- 2027-2028 三圆 MRA 全面签署 → 持牌 issuer 的自动 passporting

## Origin & evolution

[[fintech/genius-act-501-denylist-mandate|GENIUS Act]] 2025 通过 + [[fintech/mica-overview|MiCA]] 2024-12-30 全面施行 + 日本改正资金结算法 2023-06  升级为 [[fintech/japan-epi-three-types-overview|EPI 三型]] = 三圆的基础已经齐备。$130B 2030 的数字，是在「相互认证协定 2028 签署 + EPI 信托型 2027  升级为允许利息分配」这 2  个前提下的测算。任一前提一旦延迟，2030 规模可能下降至 $80-100B。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA アーキテクチャ]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 チェーン級 Denylist]]
- [[fintech/em-market-crypto-dollarization-pattern|新興市場暗号 USD 化]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン分配経済学]]
<!-- /wiki-links:managed -->

## Sources

- Chainalysis Geography of Cryptocurrency Report · BIS / FSB 三圆协调讨论文件
