---
source: fintech/stablecoin-channel-japan-sbi-jpyc-ring
source_hash: 04b94973ef4d3248
lang: zh
status: machine
fidelity: ok
title: "SBI × JPYC × Circle 环状持股：日本稳定币分发通道"
translated_at: 2026-05-31T07:28:06.125Z
---

# SBI × JPYC × Circle 环状持股：日本稳定币分发通道

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> SBI × Circle × JPYC 形成的**环状持股结构**，是 2025-2026 年 日本稳定币市场最重要的分发通道。SBI Circle Holdings（2025-08  各半出资的 JV，50/50）掌握 USDC 的日本国内独占发行通道，Circle 持有 JPYC 约 3.51%，而 JPYC 属于 Circle Partner SC。三方因此相互锁定，构成 **§501(d) 入榜后的跨境合规霸主架构**。在对日本 4  阵营的评估中，该通道被打到 v2  的 **#1 ★★★★★**，显著高于没有跨境通道的 Progmat 信托型联盟。

## Key facts

- **2025-08**：SBI Holdings + Circle Internet Financial 以各半出资方式设立 **SBI Circle Holdings**（50/50  JV）
- **环状持股**：Circle 持有 [[JapanFG/jpyc|JPYC]] 约 3.51%；JPYC 属于 Circle Partner SC；SBI 通过 SBI Circle Holdings 与 JPYC 间接相关
- **国内通道**：[[exchanges/jp-exchange-sbi-vc-trade|SBI VC トレード]] = 日本国内 第 1 号 EPI 业者（2025-03-04 许可）· 已开始 USDC 国内处理（2025-03-26）
- **资本投资**：SBI HD + SBI 新生合计向 Circle IPO 投资 $50M（2025-06-05 在 NYSE 上市）
- **不参加 Progmat**：北尾吉孝在 2026-02  的 X 发文称其“画一、限制竞争、护送船团式”，明确表示不加入 Progmat 信托型联盟
- **JPYSC 补完**：SBI 新生信托银行 × Startale 的信托型 SC“JPYSC”（2026-Q2  上线）补足“日元侧”
- **APLAS 接入**：2026  春开展线下门店 USDC 支付实证实验

## Mechanism / How it works

```
        Circle Internet Financial（USDC 发行体）
              │  50%
              │           3.51%
              ├─────────────> JPYC Inc.（资金移动业 EPI）
              │                  │ Circle Partner SC
              ▼                  │
  SBI Circle Holdings ◀──────────┤ 环状相互参照
              │  50%             │
        SBI Holdings ────────────┘
              │
              ├── SBI VC Trade（EPI #1）→ 日本国内 USDC
              ├── APLAS → 线下门店支付
              ├── SBI 新生信托 × Startale → JPYSC（2026-Q2）
              └── Arc 全球支付网络的日本独立通道
```

**通道功能**：
1. **USDC 入口**：SBI VC Trade 的日本国内独占 EPI 通道
2. **JPY 侧**：JPYC（资金移动业型）+ JPYSC（信托型）的双重日元稳定币选项
3. **跨境合规**：§501(d) 入榜后 USDC ↔ JPYC 的双向合规通道
4. **零售接点**：APLAS 信用卡 + 实体零售场景

## Origin & evolution

```
2023-11-27  SBI HD + Circle 业务合作基本协议
2025-03-04  SBI VC Trade = 日本国内 第 1 号 EPI 业者
2025-03-25  SBI HD + Circle 合资公司设立协议
2025-03-26  SBI VC Trade = 开始日本国内 USDC 处理
2025-06-05  Circle NYSE 上市 · SBI 合计投资 $50M
2025-08     SBI Circle Holdings 设立（50/50）
2025-12-16  SBI HD + Startale 发布信托型 SC“JPYSC”
2026-02     北尾吉孝在 X：“拒绝加入 Progmat”
```

**v1  → v2  的评级跃升**：在 §501(d) 公布前，SBI 阵营被视为“独立路线 / #3”。公布后，USDC ↔ JPY 跨境合规通道的价值急升，SBI Circle Holdings 被上调为 **#1 ★★★★★**。相比之下，[[JapanFG/progmat|Progmat]]（3  大型银行信托型路线）因“没有跨境合规通道”被降至 #3 ；详见 [[fintech/multi-megabank-consortium-governance|複数メガバンク連邦ガバナンス]]。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]]
- [[fintech/stablecoin-chain-sovereign-currency-divide|ステーブルコイン × チェーン × ソブリン通貨 3 層分流]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン利息分配経済学]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA ステーブルコインフレームワーク]]
- [[fintech/japan-financial-regulation|日本金融規制]]
<!-- /wiki-links:managed -->

## Sources
