---
source: fintech/hk-frtb-stablecoin-reserve-overview
source_hash: c1346985e5ff1cb8
lang: zh
status: machine
fidelity: ok
title: "香港 FRTB 稳定币准备金要求 · HKMA 准备金框架"
translated_at: 2026-05-31T06:16:15.686Z
---

# 香港 FRTB 稳定币准备金要求 · HKMA 准备金框架

## Wiki route

本条目位于 [[fintech/INDEX|fintech index]] 下。可与日本金融监管、MiCA 和稳定币储备监管页面一并阅读。

> [!info] TL;DR
> HKMA 2025-08 稳定币立法的准备金条款，是亚洲首个与 Basel III FRTB（基本交易账簿审查）标准对接的稳定币准备金框架。核心要求：100% 1：1 法定货币准备金 + Tier 1 资产（港元/美元短期国债 + HKMA 存款）+ 第三方托管 + 月度审计 + 注册资本 HKD 100M以上。与 GENIUS §501（≤93 日期限国债）+ MiCA EMT（≥30%银行存款）共同构成三圆架构的第三个差异化坐标。

## 关键事实

- HKMA 稳定币立法：2025-08 《稳定币条例》通过 ^[extracted]
- 资本门槛：HKD 100M+（远高于 MAS S$5M / MiCA EMT 资本最低要求 €350K）^[extracted]
- 准备金国债期限：≤1 年（介于 GENIUS 93 日与 MiCA 无限制之间）^[extracted]
- Tier 1 严格度：与 Basel III FRTB 标准方法对齐 · 亚洲首例 ^[extracted]
- 100% 1：1 法定货币准备金（港元挂钩或美元挂钩）^[extracted]
- 独立第三方托管（持牌 TCSP/信托）+ 月度审计 + 季度公开披露 ^[extracted]
- 破产隔离（Bankruptcy-remote segregation）^[extracted]
- 与数字人民币的边界划定：不接受中国内地零售客户 · 政治平衡的硬性条款 ^[extracted]

## 机制 / 运作方式

**HKMA 稳定币准备金的核心**：100% 1：1 法定货币准备金（港元/美元挂钩）+ Tier 1 资产构成（港元现金 + HKMA 中央银行存款 + 港元/美元短期国债 ≤1 年 + 有限比例商业票据）+ 独立第三方托管（持牌 TCSP/信托）+ 月度审计 + 季度公开披露 + 破产隔离 + HKD 100M+ 实缴资本。

**与 FRTB 的接轨**：HKMA 将稳定币准备金视同银行交易账簿类资产 → 适用 Basel III FRTB 标准方法（SA）。市场风险资本计算涵盖：利率风险 + 汇率风险 + 信用利差风险。这是全球首个将稳定币准备金明确纳入 Basel 资本框架的监管设计。资本计量向银行端传导所隐含的 USDC 相对 USDT 的溢价逻辑，详见 [[fintech/basel-iii-frtb-crypto-exposure-implications|Basel III FRTB 戦略的含意]]。

**三圆架构比较**：
| 维度 | HKMA | GENIUS §501  | MiCA EMT |
|---|---|---|---|
| 准备金比率 | 100% 1：1  | 100% 1：1  | 100% 1：1  |
| 国债期限 | ≤1 年 | ≤93 日期限国债 | 无限制 |
| 银行存款 | 无上限 | ≤50% 上限 | ≥30% 下限 |
| 中央银行存款 | HKMA 直接 | 美联储主账户（存争议） | 国家中央银行 |
| 注册资本 | HKD 100M | 由 OCC 牌照决定 | EMI 资本 + 比率 |
| 资本框架 | Basel III FRTB | 银行法案 + PCAOB | CRR/CRD VI |

## 起源与演进

HKMA 于 2022-12  开始稳定币咨询，2023-12  第二轮咨询文件建立了沙盒（ZA Bank / 渣打 / 汇丰 / Animoca × HKT 联合体），2025-08  通过《稳定币条例》。2026-04  HKMA 咨询文件《持牌稳定币的资本处理》直接引用 BCBS SCO60  为母基准。2026-05-21 首次牌照决定：9 社 份申请中实际仅批准 2 件 家（汇丰 + 渣打 Anchorpoint），战略含义详见 [[fintech/hkma-stablecoin-licensing-implications|HKMA ライセンス戦略的含意]]。亚洲/全球横向比较见 [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制比較マトリクス]]。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/hkma-stablecoin-licensing-overview|HKMA ステーブルコイン・ライセンス概観]]
- [[fintech/basel-iii-frtb-crypto-exposure-overview|Basel III FRTB 概観]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA フレームワーク]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
<!-- /wiki-links:managed -->

## 来源
