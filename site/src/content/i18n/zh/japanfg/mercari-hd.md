---
source: japanfg/mercari-hd
source_hash: 0c28b6c5c9a067a2
lang: zh
status: machine
fidelity: ok
title: "Mercari HD（株式会社メルカリ）"
translated_at: 2026-05-31T23:59:49.342Z
---

# Mercari HD（株式会社メルカリ）

## Wiki 路线

本条目位于 [[JapanFG/INDEX|JapanFG index]] 之下。可对照 [[JapanFG/monex-group|マネックスグループ (Monex Group)]] 理解同业 / 对比背景，并参照 [[banking/INDEX|banking index]] 理解更广泛的系统 / 监管边界。

## TL;DR

日本最大级 **C2C 跳蚤市场 app + 支付 + 加密资产** 垂直整合生态系统。2013-02-01 由山田進太郎创立，2018-06-19 东证 Mothers IPO（2022  PRIME 迁移，东证 PRIME **4385**）。以 **Mercari（跳蚤市场）+ Merpay（支付 / 后払い）+ Mercoin（Bitcoin）+ Mercard（JCB 合作）** 为 4  轴。国内 MAU **2,304 万**（FY2025.6 4Q）、Marketplace GMV **1.12 兆円**（FY2025.6  全年）、Mercard 发行 **超过 300 万 张**、Mercoin 账户 **超过 200 万**。FY2025.6  全年销售收入 **1,926 億円**（YoY +3%）、当期利润 **261 億円**（YoY +94%、3  期连续最高利润），并实现**美国业务首次全年盈利**（US GMV 728 百万 美元 ≒ 1,091 億円）。未持有银行牌照（资金转移业者）。不同于 megabank 系 [[mufg]] / [[smfg]]，其特点是从 marketplace 起点走向金融平台化。

## 1. 公司概要

**正式名称**：株式会社メルカリ（英: Mercari, Inc.）  
**证券代码**：东证 PRIME **4385**（2018-06-19 Mothers 上市 -> 2022-04  PRIME 迁移）  
**设立**：2013-02-01（旧称: 株式会社コウゾウ -> 2013-11  改名为メルカリ）  
**总部**：东京都港区六本木 6-10-1  六本木 Hills Mori Tower  
**创始人 / 代表**：山田進太郎（代表取締役 CEO，原ウノウ创始人）  
**业态**：C2C marketplace + 支付 + 后払い + 信用卡 + 加密资产 + spot work

> 注：メルカリ不持有银行牌照，而是通过メルペイ（资金转移业者）和メルコイン（加密资产交易业者）开展金融业务的 EC 起点集团。本 wiki/JapanFG 内分类处理（是否作为“EC / Bank 一体型”垂直整合示例）属于编辑判断，参见 `.opinions/JapanFG/mercari-hd.md`。

### 主要子公司 / 新业务

```
株式会社メルカリ（控股功能 + 跳蚤市场运营 / 上市 4385）
  ├── 株式会社メルペイ（100%, 2017-11  设立）── 支付、后払い、code payment
  │     ├── メルペイスマート払い（2020-04  开始）── 后払い / 授信
  │     └── メルカード（2022-11  发行，JCB 合作）── 实体 / virtual
  ├── 株式会社メルコイン（100%, 2021-04  设立）── 加密资产交易业
  │     └── Bitcoin 交易服务（2023-03  开始）
  ├── メルカリハロ（2024-03  开始，新业务）── spot work / gig
  ├── Mercari, Inc.(US)（美国法人）── 美国跳蚤市场（FY2025.6  全年盈利）
  ├── 株式会社ソウゾウ（旧子公司，已解散）── 新业务实验室历史
  └── 鹿岛鹿角 FC（2019-08  取得经营权）── 体育业务
```

### 重要年表

| 年月 | 事项 |
|---|---|
| 2013-02-01 | 株式会社コウゾウ设立（山田進太郎创立） |
| 2013-07  | “メルカリ” app iOS 版发布 |
| 2013-11  | 公司名称改为株式会社メルカリ |
| 2014-09  | 美国版 “Mercari” 发布 |
| 2017-03  | 国内累计达到 5,000 万 下载 |
| **2017-11** | **株式会社メルペイ设立**（支付子公司） |
| **2018-06-19** | **东证 Mothers IPO**（初始价格 5,000 円 / 发行价格 3,000 円） |
| 2019-02  | Merpay code payment 服务开始 |
| 2019-08  | 取得鹿岛鹿角 FC 经营权 |
| **2020-04** | **Merpay Smart Payments 开始**（后払い服务） |
| **2021-04** | **株式会社メルコイン设立**（加密资产子公司） |
| 2022-04  | 东证市场区分变更 -> PRIME 市场 |
| **2022-11** | **Mercard 发行开始**（JCB 合作，实体卡） |
| **2023-03** | **Mercoin Bitcoin 交易服务开始** |
| 2023-08  | Mercoin 用户突破 100 万 人 |
| 2023-11  | Mercard 发行突破 200 万 张（开始提供后约 11  个月） |
| 2024-03  | メルカリハロ（spot work）开始；Mercard 突破 300 万 张 |
| 2024-06 期 | 国内 Marketplace GMV 突破 1 兆円 |
| **2025-06 期** | **销售收入 1,926 億円 / 当期利润 261 億円**（YoY +94%、3  期连续最高利润），**美国业务首次全年盈利** |

## 2. 业务板块地图

| 板块 | 主要运营者 | 特征 |
|---|---|---|
| C2C marketplace | Mercari 本体 | 日本最大跳蚤市场 app，MAU 2,304 万（FY2025.6 4Q） |
| 支付（code payment） | Merpay | 资金转移业，QR / barcode payment |
| BNPL / 后払い | Merpay Smart Payments | 授信功能，将 Mercari 销售收入作为担保化基础 |
| 信用卡 | Mercard（JCB 合作） | 2022-11〜，可用 Mercari 销售收入 / Merpay 余额支付，发行超过 300 万 张 |
| 加密资产 | Mercoin | Bitcoin 交易（2023-03〜），账户超过 200 万 |
| Spot work | メルカリハロ | 2024-03〜，注册者 800 万、合作地点 12 万 店 |
| 美国跳蚤市场 | Mercari US | FY2025.6  首次全年盈利（US GMV 728M USD ≒ 1,091 億円） |
| 体育业务 | 鹿岛鹿角 FC | 2019-08〜，B2C branding |

### 服务联动特征

- **Mercari 销售收入 -> Merpay 余额 -> Mercoin 购买 / Mercard 结算**：在单一钱包中完成 EC、支付、加密资产、授信的垂直整合
- **Merpay Smart Payments**：利用 Mercari 销售收入作为“准收入证明”的授信模型
- **Mercard**：JCB 品牌，但审查 / 授信依据 Merpay 自有标准
- **Fintech 债权余额**：约 2,000 億円 规模（FY2025.6 4Q 说明资料时点）── 后払い + Mercard 的授信积累

### 垂直整合战略

- **Marketplace + 支付 + 授信 + 加密资产**：在单一 app 中完成的金融平台化
- **Mercoin**：不同于 Rakuten Wallet / SBI VC Trade / bitFlyer 等，其优势是“跳蚤市场销售收入 -> 加密资产”导线
- **Mercard**：通过 JCB 合作，**实体 / virtual 两种形态均支持**，可即时用 Mercari 销售收入抵充

### 海外战略

- **美国业务（Mercari US）在 FY2025.6  全年首次盈利**：GMV 728 百万 美元，segment profit 737 百万円
- 与重组、成本削减措施并行，转向追求盈利定着阶段
- 避免与全球 EC（Amazon / eBay）直接竞争，转向深耕日本国内 + 维持美国盈利

### 银行牌照（现状）

- 现状：**未持有自有银行**，Merpay 作为资金转移业者（关东财务局长 第 00058 号）+ 预付式支付手段发行者运营
- 未来银行牌照取得情景、BaaS 联动 vs 自行取得的战略观察，已分离到 `.opinions/JapanFG/mercari-hd.md`（公开资料未确定）

### 竞争格局

| 领域 | 主要竞争 |
|---|---|
| C2C 跳蚤市场 | Yahoo! Auctions（LY）、Rakuma（Rakuten）、PayPay Flea Market |
| Code payment | [[paypay-fg]]（PayPay）、Rakuten Pay、d払い、au PAY |
| BNPL / 后払い | Paidy（PayPal 旗下）、atone、NP 后払い |
| 加密资产 | bitFlyer、Coincheck、bitbank、Rakuten Wallet、SBI VC Trade |
| 信用卡 | JCB 系、三井住友 [[smfg]]、Rakuten Card |
| Spot work | Timee、Sharefull、LINE Sukimani |

## 4. 监管 / 政策

- **主管**：
  - Mercari 本体：经济产业省（特定商取引法）
  - Merpay：**资金转移业者**（关东财务局长 第 00058 号，资金结算法）+ 预付式支付手段发行者
  - Mercoin：**加密资产交易业者**（关东财务局长 第 00029 号，资金结算法）
- **JVCEA（日本暗号資産取引業協会）加盟**：Mercoin 为正式会员
- **JADA（日本资金决济业协会）加盟**：Merpay
- **近期政策论点**：
  - 2023〜 加密资产 staking 监管整备 -> 关注对 Mercoin 的影响
  - 2024〜 BNPL（后払い）监管讨论 -> 对 Merpay Smart Payments 的影响
  - 个人信息保护法 / 古物营业法 -> Mercari 本体的出品管理

## 经营数值（公开资料 / FY2025.6  全年）

| 项目 | 数值 | 时点 / 来源 |
|---|---|---|
| 销售收入（合并） | **1,926 億円**（YoY +3%） | FY2025.6  全年决算短信 |
| 当期利润（合并） | **261 億円**（YoY +94%、3  期连续最高利润） | 同上 |
| Core operating profit | **275 億円**（YoY +46%） | FY2025.6 4Q 说明资料 |
| 调整后 core operating margin（Marketplace JP） | 38% | 同上 |
| Marketplace GMV（JP 全年） | **1 兆 1,209 億円**（YoY +4%） | 同上 |
| US GMV（全年） | 728 百万 美元（≒ 1,091 億円） | 同上 |
| US segment profit | 737 百万円（首次全年盈利） | 同上 |
| 国内 MAU | **2,304 万**（FY2025.6 4Q） | 4Q 说明资料 |
| Fintech 债权余额 | 约 2,000 億円 | 同上 |
| Mercoin 交易收入 | 1,705 百万円（全年） | 全年短信 |
| Mercard 会员数 | **超过 500 万 张**（FY2025.6 4Q）／超过 300 万 张（2024-03  时点） | FY2025.6 4Q 说明资料・新闻稿 |
| Mercoin 账户数 | **超过 200 万**（2024-03  时点） | 新闻稿 |
| メルカリハロ注册者 | 800 万 人 / 合作 12 万 个地点 | 4Q 说明资料 |

> MAU 季度推移（FY2025.6）：Q1 2,251 万 -> Q2 2,279 万 -> Q3 2,291 万 -> Q4 2,304 万。摆脱 FY2024  前半增长放缓局面后，自 Q3  起回到温和增长趋势。

## Related

- [[paypay-fg]] · [[rakuten-fg]] · [[au-fh]] · [[sbi-hd]]
- [[mufg]] · [[smfg]] · [[mizuho-fg]] · [[ndfg]]
- [[banking/mercari-bank-license-stack]] · [[banking/minna-bank-baas-model]]

## Sources

- **Wikipedia: 株式会社メルカリ**（https://ja.wikipedia.org/wiki/メルカリ, 2026-05-19 抽出）
- **Mercari 官方 IR 网站**（https://about.mercari.com/ir/, 2026-05-19 抽出）
- **FY2025.6  全年决算短信〔IFRS〕（合并）2025-08-05 开示**（经由 pdf.irpocket.com/C4385/bffO/gPP8/tY1k.pdf）
- **FY2025.6 4Q 决算说明资料 2025-08-05 开示**（披露 Mercard 会员数突破 500 万 张。经由 nikkei.com/nkd/disclosure/tdnr/20250804529612/ / 原文 https://finance-frontend-pc-dist.west.edge.storage-yahoo.jp/disclosure/20250805/20250804529612.pdf）
- **Merpay 官方服务概要**（https://www.merpay.com/, 2026-05-19 抽出）
- **Mercoin 官方服务概要**（https://www.mercoin.com/, 2026-05-19 抽出）
- **Mercard 发行张数新闻稿**（jbpress.ismedia.jp/articles/-/89238  以及 2024-03  报道，突破 300 万 张）
- **MAU 季度推移**（trail-numbers.jp/mercari-mau/ 汇总，基于 IR 披露）
- **JVCEA 会员名册**（https://jvcea.or.jp/, 2026-05-19 确认）
- **关东财务局 加密资产交易业者登记一览**（2026-05-19 确认）

---

> [!info] 校核状态
> confidence: **likely**（v1.1 FY2025.6  全年决算 2025-08-05 开示反映，2026-05-19 编辑）。GMV / MAU / 销售收入 / 当期利润基于全年短信，可信度较高。正文表中的 Mercard“超过 300 万 张”/ Mercoin“超过 200 万 账户”是 2024-03  新闻稿时点值（2024-03  突破报道）。之后 FY2025.6 4Q 决算说明（2025-08-05）披露 Mercard 会员数已突破 500 万 张，因此正文中的 2024-03  值属于较旧时点值（Mercoin 账户数的 FY2025.6  更新值在公开资料中未单独确认）。银行牌照取得情景、美国业务盈利定着、Mercoin 扩展计划均未由公开信息确定（参见 `.opinions`）。
