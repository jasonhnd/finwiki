---
source: securities/japan-security-token-secondary-market-route
source_hash: 0219c0c14a8b06fb
lang: zh
status: machine
fidelity: ok
title: "日本证券型代币二级市场路线"
translated_at: 2026-06-01T04:15:40.113Z
---
# 日本证券型代币二级市场路线

## 概览

日本证券型代币二级市场记录连接金融商品交易法注册、第一类金融工具业务、PTS / 替代交易场所功能、代币平台基础设施、证券公司分销、托管 / 记账以及发行人披露。本页记录公开披露的证券型代币二级交易的市场结构路线。

本页属于 [[securities/INDEX|securities domain]]，并链接到 [[JapanFG/legal-financial-licenses/securities-license-stack|Japan securities license stack]]、[[securities/japan-best-execution-sor-pts|best execution / SOR / PTS]]、[[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]]、[[securities/japan-market-infrastructure-map|market infrastructure map]]、[[securities/osaka-digital-exchange|Osaka Digital Exchange]]、[[JapanFG/progmat|Progmat]]、[[JapanFG/jsda|JSDA]]、[[JapanFG/japan-exchange-group|Japan Exchange Group]] 和 [[fintech/jp-stablecoin-progmat|Progmat stablecoin route]]。

## 路线图

| 层级 | 公开类别 | 公开记录字段 |
|---|---|---|
| 证券型代币 | 代币化证券 / 在适用情况下的电子记录转让权利 | 发行人披露与平台资料。 |
| 证券公司 | 第一类 FIBO 或相关 FIEA 注册 | FSA 金融工具业务运营商名单。 |
| 交易场所 | 在适用情况下的 PTS / 替代场所路线 | ODX / START 公开资料以及 FSA / JSDA 背景。 |
| 自律路线 | JSDA 未上市证券 PTS 规则和 Japan STO Association 讨论背景 | 规则范围、投资者保护目的、合格发行定义。 |
| 平台 / 代币基础设施 | 代币发行 / 生命周期平台 | Progmat 和其他平台披露。 |
| 投资者分销 | 证券公司 / 经纪商路线 | 产品文件与经纪商披露。 |
| 结算 / 托管 | 托管、转让、记账、受托人 / 平台角色 | 产品披露、信托 / 托管文件、平台条款。 |

## 政策与规则路线

FSA Market System Working Group 日期为 2022-06-22 的中期报告通过 PTS 功能讨论了包括证券型代币在内的未上市证券更顺畅流通。JSDA 资料称，未上市证券 PTS 交易规则是在 FSA 中期报告以及与 Japan STO Association 讨论之后制定的。

JSDA 将规则目的描述为在 PTS 上公平、顺畅地交易未上市证券、保护投资者以及发展流通市场。JSDA 资料将 `unlisted approved PTS issue` 的范围识别为包括代币化证券和若干特定投资者证券。

## ODX / START 路线

[[securities/osaka-digital-exchange|Osaka Digital Exchange]] 及其 START 证券型代币市场是 FinWiki 中公开二级市场证券型代币交易的主路线。ODX 宣布 START 于 2023-12-25 开始运营，并将其描述为日本首个证券型代币二级交易市场 / PTS。

START 上的交易通过被 ODX 接受为交易参与者的证券公司进行。ODX 公开资料称，ODX 本身不直接服务非专业投资者。START 产品遵循 ODX 自身规则，而非交易所上市规则，同时工具和中介仍处于 FIEA 相关披露与监管路线内。

## Progmat 路线

[[JapanFG/progmat|Progmat]] 是与证券型代币、稳定币、功能型代币和平台基础设施相连的代币化平台路线，前提是公开资料支持这种连接。证券型代币产品页面在披露时会识别发行人、资产、经纪商、信托 / 托管以及转让机制。

Progmat 公开概念页 source pack 记录了以下市场规模字段：

| 字段 | source pack 中的数值 |
|---|---|
| 国内累计证券型代币案例 | 87 |
| Progmat 处理的累计案例 | 45 |
| 国内未偿余额 | 超过 JPY 667.4 billion |
| Progmat 处理的未偿余额 | 超过 JPY 452.2 billion |

这些字段与 Progmat 公开页面绑定，在用于时间敏感型摘要时需要可见页面日期。

## JPX / BOOSTRY 相邻关系

JPX 在 2023 年 3 月公开宣布投资 BOOSTRY 并建立证券型代币业务联盟。JPX 也公开宣布过基于证券型代币的数字债券工作。这些记录属于发行 / 基础设施相邻关系，而不是 START 场所记录。

主流 JPX 现金股票提供了一个比较基准，其中交易场所、清算和结算角色在交易所场所、[[securities/japan-securities-clearing-corp|JSCC]] 和 [[securities/japan-securities-depository-center|JASDEC]] 之间分离。

## 公开记录字段

| 字段 | 来源路线 |
|---|---|
| 发行人 / 资产类型 | 产品披露和发行人资料。 |
| 代币平台 | Progmat / 平台公开页面。 |
| 证券公司 | FSA FIBO 登记和经纪商产品页面。 |
| 交易场所 | ODX / START 公开页面和 PTS 相关资料。 |
| 交易参与者 | ODX 参与者披露和证券公司产品路线。 |
| 规则路线 | JSDA 未上市证券 PTS 规则和 FSA 市场系统资料。 |
| 合格性 / 投资者类别 | 产品文件和经纪商条款。 |
| 交易时间 / 撮合方法 | 场所公开页面。 |
| 结算 / 托管结构 | 产品文件、受托人 / 托管人 / 平台披露。 |
| 二级市场状态 | 场所通知、产品页面和发行人公告。 |

## 结算研究字段

| 字段 | 来源路线 |
|---|---|
| 现金腿 | 证券公司条款、信托银行 / 银行路线、代币化存款 / 稳定币实验页面（如有披露）。 |
| 代币转让 | 平台披露和产品条款。 |
| DvP 状态 | ODX / 平台 / 银行实验公告（公开时）。 |
| 托管 / 记账 | 产品文件和受托人 / 托管人披露。 |
| 投资者对账单路线 | 证券公司和产品文件。 |

## 相关

- [[securities/INDEX]]
- [[JapanFG/legal-financial-licenses/securities-license-stack]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-pts-liquidity-data-guide]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/osaka-digital-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/tokyo-stock-exchange]]
- [[JapanFG/progmat]]
- [[JapanFG/jsda]]
- [[JapanFG/japan-exchange-group]]
- [[JapanFG/sbi-securities]]
- [[JapanFG/mufg-mums]]
- [[fintech/jp-stablecoin-progmat]]
- [[INDEX|FinWiki index]]

## 来源

- FSA：Market System Working Group 中期报告和工作组索引。
- JSDA：未上市证券 PTS 自律规则和术语定义。
- ODX：START 启动和公司页面。
- Progmat：公开概念页。
- JPX：BOOSTRY 联盟和数字债券公告。
- JPX：现金股票清算 / 结算概要和机构页面。
- FSA：金融工具业务运营商名单。
