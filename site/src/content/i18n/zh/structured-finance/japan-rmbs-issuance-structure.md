---
source: structured-finance/japan-rmbs-issuance-structure
source_hash: 32452d89f45d5fad
lang: zh
status: machine
fidelity: ok
title: "日本 RMBS 发行结构"
translated_at: 2026-06-01T04:15:40.125Z
---
# 日本 RMBS 发行结构

## TL;DR

日本私募 RMBS 通常是由兆型银行发起的住房抵押贷款支持的大型交易。它们与 JHF MBS 并存但不同：JHF MBS 获得政府支持，并由 Flat 35 固定利率贷款支持；而私募 RMBS 是兆型银行发起资产，具有自身的信用增级和结构。Senior 类别通常获得高投资级评级；夹层和权益类别吸收信用风险。使用本页理解 [[structured-finance/INDEX]] 中的私募 RMBS 结构层，并与 [[structured-finance/jhf-mbs-mechanics]] 对比。

## Wiki 路径

| 你想了解 | 前往 |
|---|---|
| JHF MBS 引擎 | [[structured-finance/jhf-mbs-mechanics]] |
| JHF vs 私募利差 | [[structured-finance/jhf-mbs-vs-private-rmbs-spread]] |
| 信托受益权 vs SPV | [[structured-finance/japan-trust-beneficial-interest-vs-spv]] |
| 市场概览 | [[structured-finance/japan-abs-market-overview]] |
| 评级方法 | [[structured-finance/credit-rating-methodology-jcr-r-and-i]] |

## 1. 发起机构

| 发起机构 | 典型产品 |
|---|---|
| [[megabanks/mufg]] / Mitsubishi UFJ Bank | 浮动利率住房贷款、大型资产池 |
| [[megabanks/smfg]] / Sumitomo Mitsui Banking Corporation | 浮动利率住房贷款 |
| [[megabanks/mizuho-fg]] / Mizuho Bank | 混合利率住房贷款 |
| 信托银行（Mitsubishi UFJ Trust、[[trust-banks/sumitomo-mitsui-trust]]、Mizuho Trust） | 长期限固定利率住房贷款 |
| 地方银行（偶发） | 规模较小的区域资产池交易 |

兆型银行主导私募 RMBS 发行，因为它们持有足够大的住房贷款组合，使大型证券化具有经济性。

## 2. 与 JHF MBS 的比较

| 维度 | JHF MBS | 私募 RMBS |
|---|---|---|
| 发起机构 | 私营银行 → JHF 通过证券化支持购买 | 私营银行（兆型银行） |
| 政府支持 | 有 — senior 类别通过 JHF 获得政府支持 | 无 — senior 类别通过私营信用增级 |
| 底层产品 | Flat 35 （长期固定利率） | 浮动利率或混合利率大型住房贷款 |
| 发行节奏 | 每月 | 间歇性、程序化 |
| Senior 类别评级 | 顶级（实质上与主权相关） | 通过信用增级达到 AAA-AA |
| 相对 JGB 利差 | 较窄（典型约 10-30bp） | 较宽（senior 典型约 50-100bp） |
| 投资者基础 | 寿险公司、地方银行、资产管理公司、公共信用投资者 | 寿险公司、资产管理公司、senior 类别的外国投资者账户 |

利差经济请见 [[structured-finance/jhf-mbs-vs-private-rmbs-spread]]。

## 3. 结构 — 典型分层

| 分层 | 目的 |
|---|---|
| Senior | AAA / AA 目标；发行主体；出售给寿险公司和资产管理公司 |
| 夹层 | Single-A 或 BBB 目标；规模较小；出售给利差投资者 |
| 次级 / 权益 | 第一损失；通常由发起机构留存 |

分层通过从属结构（现金流先支付 senior，再支付夹层，最后支付权益）以及下述额外信用增级实现。

## 4. 信用增级

| 机制 | 目的 |
|---|---|
| 从属结构 | 次级分层先于 senior 吸收损失。 |
| 超额抵押 (OC) | 抵押资产池超过债券面值；超额部分吸收损失。 |
| 超额利差 | 抵押资产票息超过债券票息 + 服务费；若表现恶化则被锁定。 |
| 现金储备 / 流动性便利 | 用于短缺的备用资金；按可覆盖数月利息设置规模。 |
| 服务机构垫付 | 服务机构向债券持有人垫付逾期付款。 |

私募 RMBS 结构高度依赖从属结构加超额抵押。Senior 类别通常设置储备账户。

## 5. 提前还款建模

| 驱动因素 | 影响 |
|---|---|
| 再融资浪潮 | 利率下降触发再融资；住房贷款提前偿还，缩短债券久期。 |
| 搬迁 / 出售 | 借款人出售房屋；按面值提前偿还。 |
| 违约 / 法拍 | 出于现金流目的被视为提前还款；损失由次级吸收。 |
| 部分提前还款 | 部分提前偿还降低本金。 |

日本提前还款行为历史上慢于美国 RMBS，因为日本住房贷款再融资摩擦更高（发起成本、提前还款费结构、与雇主相关的福利）。评级机构假设通常使用依据 JCR / R&I 标准校准的保守提前还款模型。

## 6. 工具选择

日本私募 RMBS 最常使用信托受益权结构：发起机构将住房贷款资产池转让给信托（[[trust-banks/sumitomo-mitsui-trust]] 或其他信托银行作为受托人），信托向投资者发行分层信托受益权。信托 vs SPV 权衡见 [[structured-finance/japan-trust-beneficial-interest-vs-spv]]。

部分交易改用资产证券化法下的 TMK（特定目的会社）。TMK 路径允许正式上市债券发行；信托受益权路径通常是私募。见 [[structured-finance/spv-tk-gk-vehicle-japan-tax]]。

## 7. 服务

- 发起机构通常保留服务职能（贷款回收、客户互动）。
- Senior 类别会指定备用服务机构；若发起机构失效则启动。
- 服务机构垫付是标准安排，即发起机构在可回收性限度内垫付逾期贷款的计划付款。

## 8. 投资者基础

| 类别 | 投资者 | 原因 |
|---|---|---|
| Senior | 寿险公司、兆型银行 ALM 账簿、资产管理公司、外国投资者账户 | AAA-AA 抵押品带来的 JGB-plus 收益 |
| 夹层 | 利差投资者、对冲基金、部分养老基金 | 收益提升 |
| 权益 | 发起机构留存 | 风险留存合规 + 经济性 |

日本保留了一些类似美国 / 欧盟制度的风险留存要求，通常由发起机构持有净经济敞口的 5%。

## 相关

- [[structured-finance/INDEX]]
- [[structured-finance/jhf-mbs-mechanics]]
- [[structured-finance/jhf-mbs-vs-private-rmbs-spread]]
- [[structured-finance/japan-trust-beneficial-interest-vs-spv]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[policy-finance/japan-housing-finance-agency]]
- [[real-estate-finance/INDEX]]
- [[banking/INDEX]]

## 来源

- JCR（Japan Credit Rating Agency），RMBS 结构化金融标准。
- R&I（Rating and Investment Information），RMBS 方法论。
- Japan Housing Finance Agency，IR 页面。
- JSDA（Japan Securities Dealers Association）。
- 兆型银行 IR（MUFG、SMFG、Mizuho FG）。
