---
title: SBI × JPYC × Circle 环形持股 — 日本稳定币分销通道
aliases: [sbi-jpyc-circle-ring, SBI Circle Holdings, jpy-usdc-channel, 日本稳定币环形通道]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: certain
tags: [fintech, stablecoin, sbi, jpyc, circle, japan, usdc, channel]
sources:
  - https://www.sbigroup.co.jp/news/
  - https://jpyc.co.jp/
  - https://www.circle.com/en/press
  - https://www.sbivc.co.jp/
status: candidate
---

# SBI × JPYC × Circle 环形持股 — 日本稳定币分销通道


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> SBI × Circle × JPYC 形成的**环形持股结构**是 2025-2026 日本稳定币最重要的分销通道——SBI Circle Holdings（2025-08 折半出资 50/50）持有 USDC 国内独占发行渠道，Circle 持 JPYC 3.51%，JPYC 作为 Circle Partner SC，三方互锁形成 **§501(d) 入榜后的跨境合规霸主架构**。日本 4 阵营评级中此通道 v2 评级 **#1 ★★★★★**，远高于 Progmat 信託型联盟（无跨境通道）。

## Key facts

- **2025-08**: SBI Holdings + Circle Internet Financial 折半出资设立 **SBI Circle Holdings**（50/50 JV）
- **环形持股**: Circle 持 [[JapanFG/jpyc|JPYC]] 约 3.51%；JPYC ∈ Circle Partner SC；SBI 通过 SBI Circle Holdings 间接关联 JPYC
- **国内通道**: [[exchanges/jp-exchange-sbi-vc-trade|SBI VC トレード]] = 国内第 1 号 EPI 業者（2025-03-04 認可）· USDC 国内取扱開始（2025-03-26）
- **资本投资**: SBI HD + SBI 新生 共计 $50M 投资 Circle IPO（2025-06-05 NYSE 上場）
- **拒绝 Progmat**: 北尾吉孝 2026-02 X 投稿"画一的・競争制限的・護送船団的"——明确不加入 Progmat 信託型联盟
- **JPYSC 補完**: SBI 新生信託銀行 × Startale "JPYSC" 信託型 SC（2026-Q2 上线）填补"日元侧"
- **アプラス 接入**: 2026 春 リアル店舗 USDC 決済 実証実験

## Mechanism / How it works

```
        Circle Internet Financial（USDC 発行体）
              │  50%
              │           3.51%
              ├─────────────> JPYC Inc.（資金移動業 EPI）
              │                  │ Circle Partner SC
              ▼                  │
  SBI Circle Holdings ◀──────────┤ 環形相互参照
              │  50%             │
        SBI Holdings ────────────┘
              │
              ├── SBI VC トレード（EPI #1）→ USDC 国内
              ├── アプラス → リアル店舗 決済
              ├── SBI 新生信託 × Startale → JPYSC（2026-Q2）
              └── Arc グローバル決済網日本独立通道
```

**通道功能**：
1. **USDC 入口**: SBI VC トレード 国内独占 EPI 渠道
2. **JPY 侧**: JPYC（资金移動業）+ JPYSC（信託型）双重日元稳定币选项
3. **跨境合规**: §501(d) 入榜后 USDC ↔ JPYC 双向合规通道
4. **零售触点**: アプラス 信用卡 + 实店場景

## Origin & evolution

```
2023-11-27  SBI HD + Circle 業務提携基本合意書
2025-03-04  SBI VC トレード = 国内第 1 号 EPI 業者
2025-03-25  SBI HD + Circle 合弁会社設立契約
2025-03-26  SBI VC トレード = USDC 国内取扱開始
2025-06-05  Circle NYSE 上場 · SBI 合计 $50M 投资
2025-08     SBI Circle Holdings 設立（50/50）
2025-12-16  SBI HD + Startale「JPYSC」信託型 SC 発表
2026-02     北尾吉孝 X：「Progmat ジョイン拒絶」
```

**v1 → v2 评级跃迁**: §501(d) 出台前，SBI 阵营被视为"独立路线 / #3"。出台后 USDC ↔ JPY 跨境合规通道价值激升，SBI Circle Holdings 升至 **#1 ★★★★★**——[[JapanFG/progmat|Progmat]]（三大行信託型）反降至 #3，原因是"无跨境合规通道"，详见 [[fintech/multi-megabank-consortium-governance|多大银行联邦治理]]。

## Counterpoints

- **集中风险**: USDC 国内独占等于把日本稳定币命脉绑在单一美方发行体上——若 Circle 出现合规事件（如 §501(d) 滑落），日本侧将断流
- **JPYSC 替代论**: SBI 自家 JPYSC（信託型）2026-Q2 上线，可能减弱对 USDC 路径的依赖（北尾"双押"实质）
- **Progmat 反击**: 三大行 Project Pax 跨境项目（2026 H2）尚未完成。如成功，"无跨境通道"的弱点会被部分弥补
- **環形持股稳定性**: 3.51% Circle→JPYC 持股极薄，关键时刻是否触发完整 disclosure 待观察
- **零售普及不足**: USDC 在日本 retail 渗透度远低于稳定币本土 narrative（JPYC 实际流通仍小）

## Open questions

- アプラス × USDC 实证若失败，对環形通道的实际杀伤
- JPYC 是否走独立 IPO 路径（vs 留在 SBI/Circle 環形）
- Project Pax 2026 H2 落地后，三大行能否撬动一部分环形外用例
- §501(d) 后若 GENIUS Act 进入 rulemaking 阶段对 USDC 通道再分配的影响
- JPYSC 信託型与 Progmat XJPY 的市场定位重叠度

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]]
- [[fintech/stablecoin-chain-sovereign-currency-divide|稳定币 × 链 × 主权货币三层分流]]
- [[fintech/stablecoin-revenue-split-economics|稳定币利息分润经济学]]
- [[fintech/three-circles-stablecoin-mra-framework|三圆 MRA 稳定币框架]]
- [[fintech/japan-financial-regulation|日本金融規制]]
<!-- /wiki-links:managed -->

## Sources
