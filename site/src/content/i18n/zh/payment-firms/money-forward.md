---
source: payment-firms/money-forward
source_hash: 64fa0848ee70cb02
lang: zh
status: machine
fidelity: ok
title: "株式会社 Money Forward（Money Forward）"
translated_at: 2026-06-19T06:09:18.034Z
---

# 株式会社 Money Forward（Money Forward）

## Wiki 路径

本条目位于 [[payment-firms/INDEX|payment-firms INDEX]] 之下。请将其与 [[payment-firms/freee|freee 株式会社 (freee K.K.)]] 对照阅读以了解同业 / 对比背景，并与 [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] 对照以了解更广泛的体系 / 监管边界。

## TL;DR

日本最大的 PFM（Personal Financial Management）+ 面向中小企业的会计 SaaS 领军企业。**个人记账应用「Money Forward ME」(1500 万万以上用户) 与面向法人的「Money Forward Cloud」两大轴心**。创始人·**辻庸介**（原 Monex 集团）于 2012-05-18 设立，2017-09-29 于东证 Mothers 上市 → 2022 东证 Growth → 东证 PRIME（3994）。**与 1500 行以上金融机构的 API 对接**是技术性护城河。2025-04-15 单独取得与 MUFG 的合资公司「Biz Forward」(保理) 的持分，强化独立性。中期计划的盈利化计划延期致股价疲软，但 SaaS ARR 仍呈扩张基调。^[extracted]

## 1. 公司概要

**正式名称**：株式会社 Money Forward ^[extracted]
**英文名**：Money Forward, Inc.
**证券代码**：东证 PRIME 3994 (2017-09-29 Mothers 上市 → 2022 Growth → PRIME)
**设立**：2012-05-18 ^[extracted]
**总部**：东京都港区
**创始人·代表**：辻庸介（代表取缔役社长 CEO，原 Monex 证券员工）
**事业领域**：个人 PFM + 法人会计 SaaS + 金融机构 BPaaS

### 创始人·辻庸介

- 原 Monex 集团员工（Monex 证券）
- 京大农学部 → 京大农学硕士 → 宾夕法尼亚大学沃顿商学院 MBA
- 2012-05 从 Monex 分拆并创立 Money Forward
- 接受来自 Monex·AS Capital 等的初期出资

### 主要股东·资本合作（随时点变动）

| 股东 | 概要 |
|---|---|
| Monex 集团 | 创业期出资，维持关系 |
| SBI HD | 2018 业务合作 |
| MUFG | 2021〜2025-04 合资伙伴（Biz Forward） |
| 各类 VC·机构投资者 | Growth 上市后流动化 |

### 主要子公司·服务结构

```
Money Forward（持株·上市 3994）
  ├── 面向个人事业（BtoC）
  │     └── Money Forward ME ── 1500 万 UB 以上，PFM #1
  ├── 面向法人事业（BtoB）
  │     ├── Money Forward Cloud ── 会计·薪资·经费·账单
  │     │     └── 中小企业 SaaS 主战场，与 freee / 弥生 / TKC 竞争
  │     ├── Money Forward Business Company ── 法人整合品牌
  │     ├── Money Forward PFP ── 面向大企业的资金周转 SaaS
  │     └── Money Forward Biz Forward ── 保理（旧 MUFG 合资 → 2025-04 单独化）
  └── 面向金融机构事业（BtoFI）
        └── API 对接基础 ── 1500 行以上，Open API 枢纽功能
```

### 重要年表 ^[extracted]

| 年月 | 事件 |
|---|---|
| 2012-05-18 | 辻庸介 创业，作为原 Monex 集团员工分拆 |
| 2012〜 | Money Forward ME（个人记账应用）发布 |
| 2014 | Money Forward Cloud（法人会计）发布 |
| **2017-09-29** | **东证 Mothers 上市**（证券代码 3994） |
| 2018 | **与 SBI HD 业务合作** ── 强化金融机构 API 对接基础 |
| 2019〜 | 个人付费会员扩大 + 法人 SaaS ARR 加速 |
| **2021-04** | **与 MUFG 设立合资公司「Biz Forward」** ── 保理（账单买取） |
| 2022 | 东证市场区分重新审视 → **东证 Growth**，后转 **东证 PRIME** |
| 2023 | Money Forward ME 突破 1500 万用户 |
| 2024 | 中期经营计划 发表盈利化计划延期 → 股价疲软局面 |
| **2025-04-15** | **MUFG 将 Biz Forward 持分出售给 Money Forward → 解散合资·单独化** ★ |
| 2025〜 | 法人 SaaS + BPaaS 战略加速，AI 功能扩充 |

## 2. 业务分部·地图

| 分部 | 主要服务 | 目标 | 竞争对手 |
|---|---|---|---|
| 个人 PFM | Money Forward ME | 个人用户（1500 万万以上） | Zaim / OsidOri / 各银行应用 |
| 法人 SaaS | Money Forward Cloud（会计·薪资·经费·账单） | 中小企业 | freee / 弥生 / TKC / 勘定奉行 |
| 大企业 | Money Forward PFP | 大企业 CFO 部门（资金周转 SaaS） | Oracle / SAP / 国内大型 ERP |
| 法人整合 | Money Forward Business Company | 中坚〜大企业 | freee / 各 ERP |
| 保理 | Money Forward Biz Forward | 中小企业（账单买取） | OLTA / Yup / 各银行系 |
| 金融机构 BPaaS | API 对接基础（1500 行以上） | 金融机构 | TIS / NTT Data / Plaid |

### 个人 PFM × 法人 SaaS 两大轴心战略

- **Money Forward ME**: 1500 万万以上用户为 PFM 国内最大，记账 + 资产可视化 + 金融机构一括对接
- **Money Forward Cloud**: 中小企业 SaaS 主战场，ARR 扩张基调 vs freee 的同等规模竞争对手
- **两大轴心的互补性**: 以 BtoC 个人数据获得信赖性 + 以 BtoB 法人会计构成收益支柱

### 金融机构 API 对接（技术性护城河）

- **API 枢纽型定位**: 对金融机构侧而言是 PFM 对接的事实标准
- **竞争进入壁垒**: 对接实现的累积成本阻碍新进入者

### 大企业 BPaaS（Business Process as a Service）

- **Money Forward PFP**: 面向大企业的资金周转 SaaS，以 CFO 部门为目标
- **与既有 ERP 的竞争·互补**: 并非 Oracle/SAP 的替代，而是前段的资金管理层
- **收益扩大的下一支柱**: 超越中小 SaaS 客单价上限的方向性

### 合作·收购战略

- **与 Monex 的关系**: 创始人·辻庸介为原 Monex 出身，自创业期维持关系
- **SBI HD 业务合作**（2018）: 强化金融机构 API 对接基础，与 SBI 经济圈联动
- **MUFG 合资公司「Biz Forward」**（2021-04 设立〜2025-04-15 解散）★: 保理合资，经 4 年解散并单独化 ── **确保从依赖大型金融机构中独立**
- **AS Capital 合作**: 自创业期起的 VC 伙伴

### 竞争与差异化

| 竞争对手 | 优势 | 与 Money Forward 之差异 |
|---|---|---|
| freee | 同等规模 SaaS，税理士渠道强 | freee 倾向完全云端闭环 vs Money Forward 重视与既有业务的对接 |
| 弥生 | 国内份额老牌，桌面端强 | 弥生以本地·税理士渠道为中心 vs Money Forward 偏移动/个人对接 |
| TKC | 专注会计事务所 BtoB | TKC 偏税理士 OS vs Money Forward 向事业公司直销 |
| 各银行应用 | 银行正强化自有 PFM | 银行应用限于自家账户 vs Money Forward 横跨对接 |

## 4. 监管·政策

- **主管**: 金融厅（FSA）── 作为电子结算等代行业者登记
- **电子结算等代行业**: 基于银行法修订（2017）的登记业者，API 对接的法律依据
- **个人信息保护**: 大量持有个人金融数据 → 个人信息保护委员会（PPC）监督
- **近期政策论点**:
  - 2024〜 银行 API 开放义务化进展 → Money Forward 顺风
  - 2025〜 电子账簿保存法·发票制度应对 → 法人 SaaS 需求顺风
  - 2026〜 稳定币制度 → PFM 对接论点化的可能性

## 关联

- [[megabanks/mufg]] · [[megabanks/smfg]] · [[megabanks/mizuho-fg]] · [[megabanks/sbi-hd]] · [[megabanks/ndfg]]
- [[payment-firms/INDEX|payment-firms INDEX]]（PRIME 上市 fintech 类别）

## 来源

- **Wikipedia: 株式会社 Money Forward**（2026-05-19 抽取）
- Money Forward 官方 IR·中期经营计划（公开资料）
- 东证适时披露（Biz Forward 持分转让 2025-04-15 披露等）

---

> [!info] 验证状态
> confidence: **likely**（v1.0 Wikipedia + 公开 IR 校核 2026-05-19）。用户数（1500 万）/ 对接行数（1500 行）/ MUFG 合资解散日（2025-04-15）基于公开信息。财务数值·最新分部销售需以季度 IR 更新。创始人·辻庸介的经历基于公开采访报道。
