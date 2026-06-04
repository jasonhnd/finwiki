---
source: securities/japan-stock-lending-market-route
source_hash: f90a7ecb0938e173
lang: zh
status: machine
fidelity: ok
title: "Japan stock lending market route"
translated_at: 2026-06-01T04:15:40.130Z
---

# Japan stock lending market route

## Overview

日本的股票借贷是一条市场基础设施路径，连接托管人、机构投资者、经纪商、证券金融公司、保证金交易、卖空、抵押品、清算、结算和公司行动。在将其分析为看跌信号之前，应先将其作为基础管道来分析。

请将本页与 [[securities/INDEX|securities domain]]、[[securities/japan-short-selling-and-stock-loan-controls|short-selling and stock-loan controls]]、[[securities/japan-margin-trading-and-securities-finance|margin trading and securities finance]]、[[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage and institutional financing]]、[[financial-regulators/japan-securities-finance|Japan Securities Finance]]、[[banking/japan-trust-bank-custody-map|trust-bank custody map]]、[[securities/japan-market-infrastructure-map|market infrastructure map]] 和 [[money-market/jgb-repo-market-japan|JGB repo market]] 一起使用。

## Route Map

| 参与者 | 角色 |
|---|---|
| 资产所有人 | 在经济上拥有证券，通常通过养老金、投资信托、保险公司或机构账户持有。 |
| 托管人 / 信托银行 | 持有证券、处理公司行动，并可按指令支持证券借贷计划。 |
| 经纪商 / 证券公司 | 为客户保证金、做市、对冲、结算补仓或类似 prime-brokerage 的需求借入证券。 |
| [[financial-regulators/japan-securities-finance|Japan Securities Finance]] | 向证券公司提供资金和证券，用于标准化保证金交易及更广泛的证券金融活动。 |
| 清算 / 存管 | [[securities/japan-securities-clearing-corp|JSCC]] 和 [[securities/japan-securities-depository-center|JASDEC]] 支持交易后结算管道。 |
| 抵押品提供方 | 根据借贷协议和市场惯例提供现金或证券抵押品。 |

## Flow Types

| 流程 | 说明 | 公开相关性 |
|---|---|---|
| 与保证金相关的借贷 | 提供证券以支持标准化的保证金卖出。 | 对散户保证金交易和 JSF 数据解读至关重要。 |
| 机构股票借贷 | 托管 / 资产所有人的证券被借给经纪商或其他借入方。 | 可为受益所有人带来增量收入。 |
| 结算补仓 | 为避免交割失败而借入。 | 属于操作性事项，不一定具有方向性。 |
| 做市 / 对冲借券 | 为流动性提供或对冲而借入。 | 通常与衍生品或客户交易流活动相关。 |
| 特殊 / 稀缺借券 | 个券层面的稀缺性通过费用 / premium charge 定价。 | 可能产生 squeeze、限制或监控信号。 |

## Custody Link

信托银行和托管银行很重要，因为法律所有权、受益所有人、借贷指令、抵押品、公司行动和投票权路径是分离的。在解读以信托银行 nominee name 标记账户中的股票借贷供给前，请先阅读 [[banking/japan-trust-bank-custody-map|trust-bank custody map]]。

## Control Questions

| 问题 | 公开相关性 |
|---|---|
| 谁是受益所有人？ | 托管人名称并不识别经济所有人。 |
| 该借贷是否与标准化保证金交易或 OTC 股票借贷相关？ | JSF / TSE 数据与机构借贷数据是不同界面。 |
| 提供了什么抵押品？ | 抵押品风险连接到货币市场和 repo 分析。 |
| 谁可以召回股票？ | 公司行动、投票和结算时点很重要。 |
| 借券是否稀缺？ | 稀缺性可能影响 premium charge、卖空经济性和个券限制。 |
| 借贷计划是否披露？ | 公开细节因托管人、基金和资产所有人而异。 |

## JapanFG Relevance

- [[trust-banks/custody-bank|Custody Bank of Japan]] 和 [[trust-banks/master-trust-bank|Master Trust Bank of Japan]] 作为国内资产管理和 nominee-name 基础设施很重要。
- [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]] 和 [[foreign-financial-institutions/state-street-japan|State Street Japan]] 对全球托管和外国投资者路径很重要。
- [[financial-regulators/japan-securities-finance|Japan Securities Finance]] 是专门的证券金融节点。
- [[securities-firms/nomura-hd|Nomura]]、[[securities-firms/daiwa-sg|Daiwa Securities Group]]、[[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/mizuho-securities|Mizuho Securities]] 和 [[securities-firms/mufg-mums|MUMSS]] 是经纪商 / 交易商侧锚点。

## Research Checklist

1. 判断问题是关于借贷供给、借券需求、卖空、保证金交易，还是结算补仓。
2. 将托管人 nominee 与受益所有人分开。
3. 如果借贷与保证金相关，检查 JSF / JPX 个券层面的限制和保证金交易数据。
4. 当证券借贷计划具有重要性时，检查托管人 / 基金 / 资产所有人披露。
5. 将货币市场问题连接到 [[money-market/jgb-repo-market-japan|repo / collateral context]]。

## Related

- [[securities/INDEX]]
- [[securities/japan-short-selling-and-stock-loan-controls]]
- [[securities/japan-margin-trading-and-securities-finance]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[securities/japan-market-infrastructure-map]]
- [[financial-regulators/japan-securities-finance]]
- [[banking/japan-trust-bank-custody-map]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[INDEX|FinWiki index]]

## Sources

- JSF：证券金融业务和公司信息页面。
- JSDA：关于股票等借贷交易的指南。
- JPX：保证金交易概览和限制。
- JASDEC / JSCC / JPX：DVP、存管、清算和结算公开页面。
