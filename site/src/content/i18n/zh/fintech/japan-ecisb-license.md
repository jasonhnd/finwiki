---
source: fintech/japan-ecisb-license
source_hash: 289d320f91401278
lang: zh
status: machine
fidelity: ok
title: "日本 ECISB 牌照"
translated_at: 2026-06-18T23:59:13.062Z
---

# 日本 ECISB 牌照


## Wiki route

本条目归属于 [[fintech/INDEX|fintech index]]。请结合 [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] 阅读以获取相邻语境，并参照 [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] 了解更广阔的体系边界。

> [!info] TL;DR
> ⚠️ **未经核实**:2026 年 6 月的施行日期为会话中讨论的推测，尚未在金融厅 / 资金结算法修订公告的官方来源中得到确认。使用前需确认。

经由 2025 年 6 月成立、**于 2026 年 6 月全面施行(未经核实)** 的「资金结算法」修订案，引入了「电子支付手段及加密资产中介业」(ECISB)牌照。

## 定位


## 红线

**绝对禁止接收·托管用户资金。** 若业务涉及对用户资金的临时保管(含净额结算过程中的暂定资金池)，即已越过红线，需要完整牌照。

## 核心义务

- 信息安全管理
- 委托方监督
- 用户保护
- 不触碰用户资金

## AML 义务

ECISBO 不承担「犯罪收益移转防止法」(APTCP)项下的直接 KYC/AML 义务。这些责任由「所属方」(EPIESP 或银行等主牌照持有者)承担。日本 VASP 监管的全景请参见 [[exchanges/jp-vasp-regulatory-timeline|日本 VASP 規制タイムテーブル]]。

## 申请流程与时间线

1. **事前面谈**(3-4 个月):差距分析 + 业务模式审查
2. **正式面谈**:文件审查
3. **正式申请**

### 时间线衔接

| 时点 | 行动 |
|---------|------|
| 2026 Q2 | 修订案全面施行(6 月)。同时启动 ECISB 事前调查 |
| 2026 Q2-Q3 | 事前面谈(3-4 个月) |
| 2026 Q3-Q4 | 正式申请 |
| 2027 Q1 | 取得目标 |

截至 2026 年 4 月尚无成功案例(修订案在等待 2026 年 6 月的全面施行)。首个取得 = 先行合规优势。

## 对支付类应用的适配

非托管支付类应用的 3 层适配:

1. **Gateway**(收款接入):仅构建未签名的交易指令，不触碰资金 → 属于 ECISB 信息路由范畴
2. **Clearing**(清算):汇总账单、计算净差额、生成智能合约调用指令、以 self-custody 钱包签名完成结算 → 属于 ECISB 信息路由范畴

self-custody 原则(不触碰私钥、不托管资金)不仅是设计理念，也是使用 ECISB 轻量牌照的前提条件。

## 所属方要求

ECISBO 需要一个持有 EPIESP 或 CAESP 牌照的主体作为「所属方」。

**候选:已注册 CEX**(持有加密资产交换业注册的注册交易所具备 CAESP 资格，满足所属方条件)— 详细的注册制度请参见 [[exchanges/fsa-vasp-registration-system|FSA VASP 登録制度]]，自律规则请参见 [[exchanges/jvcea-self-regulatory-overview|JVCEA 自律規則概要]]。日本牌照体系的综合索引见 [[financial-licenses/INDEX|日本金融ライセンス・インデックス]]。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互換市場 —— $33 兆軌道上の 0.01% ビジネス]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]]
<!-- /wiki-links:managed -->
