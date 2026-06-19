---
source: securities/japan-security-token-secondary-market-route
source_hash: 6cf03985180be745
lang: zh
status: machine
fidelity: ok
title: "日本证券型代币二级市场路线"
translated_at: 2026-06-19T13:13:22.633Z
---

# 日本证券型代币二级市场路线

## 概述

日本证券型代币二级市场记录连接了金融商品交易法登记、第一种金融商品交易业、PTS / 替代交易场所功能、代币平台基础设施、证券公司分销、托管 / 记录保管，以及发行人披露。本页记录公开披露的证券型代币二级交易的市场结构路线。

本页属于 [[securities/INDEX|securities domain]]，并链接到 [[financial-licenses/securities-license-stack|Japan securities license stack]]、[[securities/japan-best-execution-sor-pts|best execution / SOR / PTS]]、[[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]]、[[securities/japan-market-infrastructure-map|market infrastructure map]]、[[securities/osaka-digital-exchange|Osaka Digital Exchange]]、[[payment-firms/progmat|Progmat]]、[[financial-regulators/jsda|JSDA]]、[[financial-regulators/japan-exchange-group|Japan Exchange Group]] 和 [[fintech/jp-stablecoin-progmat|Progmat stablecoin route]]。

## 路线图

| Layer | Public category | Public record field |
|---|---|---|
| Security token | 在适用情况下的代币化证券 / 电子记录可转让权利 | 发行人披露与平台资料。 |
| Securities firm | 第一种 FIBO 或相关 FIEA 登记 | FSA 金融商品交易业者名单。 |
| Trading venue | 在适用情况下的 PTS / 替代场所路线 | ODX / START 公开资料及 FSA / JSDA 背景。 |
| Self-regulatory route | JSDA 非上市证券 PTS 规则及日本 STO 协会讨论背景 | 规则范围、投资者保护目的、合格品种定义。 |
| Platform / token infrastructure | 代币发行 / 生命周期平台 | Progmat 及其他平台披露。 |
| Investor distribution | 证券公司 / 经纪商路线 | 产品文件与经纪商披露。 |
| Settlement / custody | 托管、转让、记录保管、受托人 / 平台角色 | 产品披露、信托 / 托管文件、平台条款。 |

## 政策与规则路线

日期为 2022-06-22的 FSA 市场制度工作组中期报告，论及了通过 PTS 功能更顺畅地流通包括证券型代币在内的非上市证券。JSDA 资料称，关于非上市证券 PTS 交易的规则，是在 FSA 中期报告以及与日本 STO 协会讨论之后制定的。

JSDA 将规则目的描述为非上市证券在 PTS 上的公平且顺畅的交易、投资者保护，以及流通市场的发展。JSDA 资料指明，`非上市核准 PTS 品种` 的范围包括代币化证券及某些特定投资者证券。

## ODX / START 路线

[[securities/osaka-digital-exchange|Osaka Digital Exchange]] 及其 START 证券型代币市场是公开二级市场证券型代币交易的主要 FinWiki 路线。ODX 宣布 START 于 2023-12-25开始运营，并将其描述为日本首个面向证券型代币的二级交易市场 / PTS。

START 上的交易经由 ODX 接纳为交易参与者的证券公司进行导向。ODX 公开资料称，ODX 本身不直接服务于非专业投资者。START 产品遵循 ODX 自身的规则，而非交易所上市规则，同时其金融商品和中介者仍处于 FIEA 相关披露和监管路线之内。

## Progmat 路线

[[payment-firms/progmat|Progmat]] 是一条与证券型代币、稳定币、实用型代币和平台基础设施相联系的代币化平台路线，前提是公开资料支持该联系。证券型代币产品页面在已披露的情况下，指明发行人、资产、经纪商、信托 / 托管和转让机制。

Progmat 公开概念页面的来源包记录了以下市场规模字段：

| Field | Value in source pack |
|---|---|
| Domestic cumulative security-token cases | 87 |
| Progmat-handled cumulative cases | 45 |
| Domestic outstanding balance | Over JPY 667.4 billion |
| Progmat-handled outstanding balance | Over JPY 452.2 billion |

这些字段与 Progmat 公开页面绑定，在用于时间敏感的概要时需要可见的页面日期。

## JPX / BOOSTRY 邻接

JPX 于 2023年 3 月公开宣布对 BOOSTRY 的投资及证券型代币业务联盟。JPX 还公开宣布了基于证券型代币的数字债券工作。这些记录属于发行 / 基础设施邻接，而非 START 场所记录。

主流 JPX 现货股票提供了一个比较基准，其中交易场所、清算和结算角色分离于交易所场所、[[securities/japan-securities-clearing-corp|JSCC]] 和 [[securities/japan-securities-depository-center|JASDEC]] 之间。

## 公开记录字段

| Field | Source route |
|---|---|
| Issuer / asset type | 产品披露与发行人资料。 |
| Token platform | Progmat / 平台公开页面。 |
| Securities firm | FSA FIBO 登记册与经纪商产品页面。 |
| Trading venue | ODX / START 公开页面及 PTS 相关资料。 |
| Trading participant | ODX 参与者披露与证券公司产品路线。 |
| Rule route | JSDA 非上市证券 PTS 规则及 FSA 市场制度资料。 |
| Eligibility / investor category | 产品文件与经纪商条款。 |
| Trading hours / matching method | 场所公开页面。 |
| Settlement / custody structure | 产品文件、受托人 / 托管人 / 平台披露。 |
| Secondary-market status | 场所通知、产品页面及发行人公告。 |

## 结算研究字段

| Field | Source route |
|---|---|
| Cash leg | 证券公司条款、信托银行 / 银行路线、已披露的代币化存款 / 稳定币实验页面。 |
| Token transfer | 平台披露与产品条款。 |
| DvP status | 已公开的 ODX / 平台 / 银行实验公告。 |
| Custody / recordkeeping | 产品文件与受托人 / 托管人披露。 |
| Investor statement route | 证券公司与产品文件。 |

## Related

- [[securities/INDEX]]
- [[financial-licenses/securities-license-stack]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-pts-liquidity-data-guide]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/osaka-digital-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/tokyo-stock-exchange]]
- [[payment-firms/progmat]]
- [[financial-regulators/jsda]]
- [[financial-regulators/japan-exchange-group]]
- [[securities-firms/sbi-securities]]
- [[securities-firms/mufg-mums]]
- [[fintech/jp-stablecoin-progmat]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: Market System Working Group interim report and working-group index.
- JSDA: unlisted securities PTS self-regulatory rules and term definition.
- ODX: START launch and corporate pages.
- Progmat: public concept page.
- JPX: BOOSTRY alliance and digital bond announcements.
- JPX: cash equity clearing / settlement outline and institution pages.
- FSA: financial instruments business operator list.
