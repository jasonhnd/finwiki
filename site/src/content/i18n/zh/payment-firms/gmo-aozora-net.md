---
source: payment-firms/gmo-aozora-net
source_hash: 9bb0e217ef0f7e63
lang: zh
status: machine
fidelity: ok
title: "GMO 青空网络银行"
translated_at: 2026-06-19T06:09:18.164Z
---

# GMO 青空网络银行

## Wiki 路由

本条目位于 [[payment-firms/INDEX|payment-firms INDEX]] 之下。请与 [[regional-banks/ssnb|住信 SBI ネット銀行 (SBI Sumishin Net Bank) → ドコモ SMTB ネット銀行]] 对照阅读以获取同业／对比语境，并与 [[banking/INDEX|banking index]] 对照以了解更广泛的体系／监管边界。

## TL;DR

以 **法人专注 BaaS（Banking as a Service）为轴** 的网络银行。以旧 **青空信托银行**（[[regional-banks/aozora-bank]] 子公司）为母体，2018-07 由 **GMO 互联网集团** 取得表决权过半而更名・网络银行化。在种类股票重组后，股东构成为**以普通股（持股）比例计 青空银行 50.00% / GMO 互联网集团 25.00% / GMO 金融控股 25.00%**，**以表决权比例计 青空银行 85.12% / GMO 两家公司各 7.43%**（2026-02-20 时点，因青空持有部分中有一部分为附表决权限制的种类股票，故持股比例与表决权比例出现背离）。**与重视个人的乐天银行・PayPay 银行・住信 SBI 网络银行不同，它以自由职业者・初创企业・fintech 联动的法人账户 + API 连接为主轴**。代表服务为「**安心 Wide**」（面向法人的商业贷款）与「**银行 API for Developers**」。通过与 freee・Money Forward・Square・Stripe 等 fintech 的战略合作建立其定位。^[extracted]

## 1. 公司概要

**正式名称**：株式会社 GMO 青空网络银行 ^[extracted]
**英文名**：GMO Aozora Net Bank, Ltd.
**成立**：2004-04（作为青空信托银行开业）^[extracted]
**现体制成立**：2018-07（GMO 互联网集团取得过半数 → 更名）^[extracted]
**总部**：东京都涩谷区 ^[extracted]
**业态**：银行业（普通银行 / 网络银行）

### 主要股东（2026-02-20 时点・官方公司概要）

| 股东 | 持股比例 | 表决权比例 |
|---|---|---|
| [[regional-banks/aozora-bank]]（东证 PRIME 8304）| 50.00% | 85.12% |
| GMO 互联网集团（东证 PRIME 9449）| 25.00% | 7.43% |
| GMO 金融控股 | 25.00% | 7.43% |

> 经纬：GMO 最初出资 15%（2016-05）→ 2018-07 网络银行化（以表决权计取得过半）。基于 2016 年的股东间合同，于 2023 年将青空银行持有的种类股票转让给 GMO 金融控股。以普通股（持股）计为青空 50% / GMO 两家公司合计 50%，但因青空持有部分中有一部分为附表决权限制的种类股票，故**以表决权计为青空 85.12% / GMO 两家公司各 7.43%**。比例会因 IR 披露而变动，最新值请参照各家公司披露。

### 集团内定位

```
GMO 互联网集团（东证 PRIME 9449・熊谷正寿）
  ├── GMO 青空网络银行（持股 25% [GMO IG] + 25% [GMO FH]，表决权各 7.43%）── 法人 BaaS 网络银行
  ├── GMO Payment Gateway（东证 PRIME 3769）── 结算处理 ICT
  ├── GMO Coin ── 加密资产交易所
  ├── GMO Click 证券 ── 网络证券・FX
  ├── GMO Cloud / GMO Pepabo ── 基础设施・主机托管
  └── GMO Research / GMO AD Partners ── 广告・调查
[[regional-banks/aozora-bank]]（东证 PRIME 8304）
  └── GMO 青空网络银行（持股 50%・表决权 85.12%，以种类股票为主）── 第一大股东
```

### 沿革 ^[extracted]

| 年月 | 事件 |
|---|---|
| 2004-04 | **青空信托银行** 开业（[[regional-banks/aozora-bank]] 100% 子公司，以信托业务为中心） |
| 2016-05 | GMO 互联网 向青空信托银行 15% 出资 → 准备转型网络银行的合资 |
| 2018-07 | **GMO 取得过半数 → GMO 青空网络银行 更名・开始营业**（开始开设个人・法人账户） |
| 2019起 | 法人 fintech 联动账户成为成长轴。与 freee / Money Forward 等的 API 连接扩大 |
| 2020起 | 「安心 Wide」（面向法人的商业贷款）启动，BaaS 伙伴联动加速 |
| 2022起 | 与 Stripe / Square / Wise 等结算 fintech 的联动扩大 |
| 2023 | 基于股东间合同，将青空银行持有的种类股票转让给 GMO 金融控股 |

## 2. 事业分部・地图

| 分部 | 主要事业 | 特征 |
|---|---|---|
| 法人账户 | 自由职业者・个人事业主・初创企业账户 | 开户手续线上完成・支持当日开户，在 fintech 层强 |
| 法人贷款 | **安心 Wide**（无担保商业贷款）| AI 授信模型 + GMO PG 结算数据联动 |
| API / BaaS | **银行 API for Developers** | 面向法人 / fintech（开放余额查询・转账・开户等 API） |
| 伙伴联动 | freee / Money Forward / Square / Stripe / Wise 等 | 与会计・结算 SaaS 直连的账户 |
| 个人账户 | 面向自由职业者层・副业层 | 回避与个人专注网络银行（乐天 / PayPay / 住信 SBI 等）的正面对决 |
| 加密资产联动 | [[payment-firms/gmo-coin]]（兄弟公司）| GMO 集团内协同 |
| 结算联动 | GMO Payment Gateway（兄弟公司・东证 PRIME 3769）| 结算处理・加盟店数据联动 |

### 法人 BaaS 轴的差异化

- **与个人专注的网络银行（乐天银行 / PayPay 银行 / [[regional-banks/ssnb|sbi-sumishin-net]] / au Jibun 银行 等）改变战场**：不以个人账户数比拼，而集中于**法人 BaaS 与 API 经济的应对**
- 「安心 Wide」（面向法人的商业贷款）将 GMO Payment Gateway 的结算数据活用于授信 → 集团协同的典型
- 目标是「**已在使用会计 SaaS / 结算 SaaS / 云 ERP 的中小 / 个人事业主**」层 — fintech 联动账户的标准定位

### 与母公司 GMO 的协同

- **GMO Payment Gateway**（结算）/ **[[payment-firms/gmo-coin]]**（加密资产）/ **GMO Click 证券**（证券・FX）相互送客
- GMO 集团整体的「**互联网金融经济圈**」的银行层（结算 + 证券 + 加密资产 + 银行）
- 与乐天・PayPay・SBI 的经济圈相比规模较小，但明确押注于**法人 / 自由职业者层**的定位

### API / Open Banking 战略

- 「**银行 API for Developers**」：面向 fintech 开发者整备余额查询・转账・开户等 API 的开放
- 与 freee / Money Forward 等会计云直连 → 收支自动记账
- 与 Stripe / Square 等海外结算 fintech 也连接 → 应对跨境结算
- 把握「**个人 fintech 以结算为中心**」与「**法人 fintech 以会计 / 费用 / 授信为中心**」这一分部差异

> 关于上市可能性的观测报道・推测被隔离至 `.opinions/JapanFG/gmo-aozora-net.md`（2026-05-29，无确证）。

## 4. 监管・政策

- **主管**：金融厅（FSA）
- **业态**：银行法上的银行（普通银行）
- **存款保险**：加入存款保险机构
- **API 监管**：基于银行法修订（2017）的 Open API 提供义务 → 「银行 API for Developers」是其制度性延伸
- **与资金移动业 / 虚拟货币业的连接**：与 GMO 集团内 [[payment-firms/gmo-coin]] 或 GMO Payment Gateway 的联动中，多个业法牌照的整合成为议题
- **反洗钱监管**：法人开户的本人确认 / 实质支配者确认的严格化（2023起 FATF 第 4 次审查应对）

## 关联

- [[regional-banks/aozora-bank]]（旧母公司・现 ~15% 股东）
- [[payment-firms/gmo-coin]]（兄弟公司・加密资产）
- [[regional-banks/ssnb|sbi-sumishin-net]]（住信 SBI 网络银行・竞争 BaaS）
- [[banking/paypay-bank|paypay-bank]] · [[banking/rakuten-bank|rakuten-bank]] · [[banking/au-jibun-bank|au-jibun-bank]]（个人网络银行・另一战场）
- [[banking/minna-bank-baas-model|minna-bank]] · [[banking/mercari-bank|mercari-bank]]（新型 BaaS / 地方银行发起的数字银行・竞争对手）
- [[banking/baas-japan-landscape]]（^[planned] 日本 BaaS 地图）

## 出处

- **Wikipedia: GMO 青空网络银行**（https://ja.wikipedia.org/wiki/GMOあおぞらネット銀行, 2026-05-19 抽取）
- **GMO 青空网络银行 官方网站**（https://gmo-aozora.com/, 2026-05-19 参照）
- **GMO 互联网集团 IR**（东证 PRIME 9449, 2026-05-19 参照）
- GMO 青空网络银行 公司概要（持股：青空 50% / GMO IG 25% / GMO FH 25%，表决权：青空 85.12% / GMO 各 7.43%，2026-02-20） — https://gmo-aozora.com/company/outline.html
- GMO 互联网集团「关于取得 GMO 青空网络银行种类股票的通知」（2023-06-19，基于股东间合同的种类股票转让） — https://group.gmo/news/article/8450/

---

> [!info] 验证状况
> confidence: **likely**（基于 Wikipedia + 官方 + 母公司 GMO IR 2026-05-19，于 2026-05-29 以官方公司概要订正股东构成）。**股东构成 最初记载的「GMO ~85% / 青空 ~15%」有误** — 正确为持股比例 青空 50.00% / GMO IG 25.00% / GMO FH 25.00%，表决权比例 青空 85.12% / GMO 两家公司各 7.43%（2026-02-20，因种类股票产生背离）。最新值需参照 GMO 青空网络银行 公司概要及各家公司 IR。上市准备报道无确证，已隔离至 `.opinions`。融资余额 / API 伙伴数等定量数据尚未收集（需补充）。
