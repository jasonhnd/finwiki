---
source: fintech/japan-ecisb-license
source_hash: 0b05b363585f9afc
lang: zh
status: machine
fidelity: ok
title: "日本ECISB牌照"
translated_at: 2026-05-31T06:16:15.696Z
---

# 日本ECISB牌照


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> ⚠️ **未经验证**：2026 年 6 月的施行日期系对话讨论中的推测，尚未通过金融厅/《资金结算法》修正案官方公告的一次来源确认。使用前请确认。

2025 年 6 月成立、**2026 年 6 月全面施行（未经验证）**的《资金决済法》修正案引入了"电子支付手段及加密资产仲介业"（ECISB）牌照。

## 定位


## 红线

**严格禁止接受及托管用户资金。** 若业务涉及用户资金的临时保管（含清算过程中的暂时性资金池），则越过红线，须持有完整牌照。

## 核心义务

- 信息安全管理
- 对委托方的监督
- 用户保护
- 不触及用户资金

## AML义务

ECISBO在《犯罪收益转移防止法》（APTCP）下不负担直接的KYC/AML义务，相关责任由"所属方"（EPIESP或银行等主牌照持有者）承担。日本VASP监管全貌参见[[exchanges/jp-vasp-regulatory-timeline|日本 VASP 規制タイムテーブル]]。

## 申请流程与时间线

1. **事前面谈**（3-4 个月）：差距分析+业务模式审查
2. **正式面谈**：文件审查
3. **正式申请**

### 时间线桥接

| 时点 | 行动 |
|---------|------|
| 2026 Q2  | 法案全面施行（6 月）。同步开始ECISB事前调查 |
| 2026 Q2-Q3  | 事前面谈（3-4 个月） |
| 2026 Q3-Q4  | 正式申请 |
| 2027 Q1  | 目标取得牌照 |

2026 年 4 月时点尚无成功案例（法案待2026 年 6 月全面施行）。首家取得 = 先行合规优势。

## 对支付类应用的适配

非托管型支付类应用的3 层适配：

1. **Gateway（收款连接）**：仅构建未签名的交易指令，不触及资金 → 属于ECISB信息路由范畴
2. **Clearing（清算）**：汇总请款、计算净差额、生成智能合约调用指令、通过自托管钱包的签名完成结算 → 属于ECISB信息路由范畴

自托管原则（不接触私钥、不托管资金）既是设计理念，也是使用ECISB轻量牌照的前提条件。

## 所属方要求

ECISBO须以持有EPIESP或CAESP牌照的主体作为"所属方"。

**候选方：注册CEX**（持有加密资产交换业注册的注册交易所具备CAESP资格，满足所属方条件）— 注册制度详情参见[[exchanges/fsa-vasp-registration-system|FSA VASP 登録制度]]，自律规则参见[[exchanges/jvcea-self-regulatory-overview|JVCEA 自律規則概要]]。日本牌照体系综合索引[[JapanFG/legal-financial-licenses/INDEX|日本金融ライセンス・インデックス]]。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互換市場 —— $33 兆軌道上の 0.01% ビジネス]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]]
<!-- /wiki-links:managed -->
