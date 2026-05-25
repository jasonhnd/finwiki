---
title: 日本 ECISB 牌照——专为"不碰资金的交易路由中介"设计的轻量牌照
aliases: []
domain: fintech
kind: knowledge
topic: japan-ecisb-license
created: 2026-04-18
last_updated: 2026-05-03
last_tended: 2026-05-05
review_by: 2026-10-30
confidence: likely
tags: [fintech, needs-verification]
status: candidate
sources:
  - https://www.fsa.go.jp/en/policy/sftl/index.html
  - https://www.fsa.go.jp/news/r5/sonota/20231121/2023_paymentservices.html
  - https://www.fsa.go.jp/common/law/index.html
  - https://www.fsa.go.jp/en/news/
  - https://elaws.e-gov.go.jp/document?lawid=421AC0000000059
note: 2026-06 全面施行日期为会话中推测，未经官方来源确认
---

# 日本 ECISB 牌照


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> ⚠️ **待核实**：2026 年 6 月施行日期为会话讨论中的推测，尚未经金融庁/資金決済法改正公告的官方来源核验。使用前需先查証。

2025 年 6 月通过、**2026 年 6 月全面施行（待核实）**的《资金結算法》修正案引入了"電子支払手段及び暗号資産仲介業"（ECISB）牌照。

## 定位


## 红线

**绝对禁止接收或托管用户资金。** 如果业务涉及用户资金的暂存（哪怕是轧差过程中的临时池），就越过红线，需要全牌照。

## 核心义务

- 信息安全管理
- 委外监督
- 用户保护
- 不碰用户资金

## AML 义务

ECISBO 不需要承担《犯罪収益移転防止法》（APTCP）下的直接 KYC/AML 义务。这些责任由"所属方"（Affiliated 的主牌照持有方，如 EPIESP 或银行）承担。日本 VASP 监管全景见 [[exchanges/jp-vasp-regulatory-timeline|日本 VASP 监管时间表]]。

## 申请流程与时间线

1. **事前商谈**（3-4 个月）：差距分析 + 業務モデル審査
2. **正式面接**：文件審査
3. **提出申請**

### 時間線桥接

| 时间节点 | 行动 |
|---------|------|
| 2026 Q2 | 法案全面施行（6 月）。同时启动 ECISB 预研 |
| 2026 Q2-Q3 | 事前商谈（3-4 个月） |
| 2026 Q3-Q4 | 正式申请 |
| 2027 Q1 | 目标取得 |

截至 2026 年 4 月，尚无成功案例（法案 2026 年 6 月才全面生效）。首批拿到 = 先发合规优势。

## 与決済系应用的适配

非托管決済系应用的三层适配：

1. **Gateway**（收款接入）：只构造未签名交易指令，不碰资金 → ECISB 信息路由范畴
2. **Clearing**（清算）：汇总账单、计算轧差净额、生成智能合约调用指令，由 self-custody 钱包签名结算 → ECISB 信息路由范畴

self-custody 原则（不碰私钥、不托管资金）不仅是设计理念，是使用 ECISB 轻量牌照的先决条件。

## 所属方要求

ECISBO 需要一个持有 EPIESP 或 CAESP 牌照的主牌照方作为"所属方"。

**候选：持牌 CEX**（持有暗号資産交換業登録的持牌交易所均具备 CAESP 资质，满足所属方条件）— 详细登録制度见 [[exchanges/fsa-vasp-registration-system|FSA VASP 登録制度]]、自律規則は [[exchanges/jvcea-self-regulatory-overview|JVCEA 自律規則概览]]。日本牌照体系総合索引 [[JapanFG/legal-financial-licenses/INDEX|日本金融牌照索引]]。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/usd-stablecoin-interchange|USD 稳定币互换市场——$33 万亿轨道上的 0.01% 生意]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]]
<!-- /wiki-links:managed -->
