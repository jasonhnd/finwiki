---
source: banking/japan-trust-bank-custody-map
source_hash: 0102eb37e5bd1684
lang: zh
status: machine
fidelity: ok
title: "日本信托银行与托管地图"
translated_at: 2026-05-30T18:52:47.781Z
---

# 日本信托银行与托管地图

## Overview

日本的信托银行 / 托管层将法律所有权、受益所有者、资产管理、投资指图、公司行为、投票、证券借贷及基金会计区分开来。最常见的错误，是把申报中的「信托账户」名义人名称读成仿佛信托银行本身就是经济上的投资者。

请将本页与 [[banking/INDEX|banking domain]]、[[banking/japan-master-trust-and-custody-bank-landscape|master trust / custody bank landscape]]、[[trust-banks/master-trust-bank|Master Trust Bank of Japan]]、[[trust-banks/custody-bank|Custody Bank of Japan]]、[[trust-banks/sumitomo-mitsui-trust|Sumitomo Mitsui Trust]]、[[trust-banks/mitsubishi-ufj-trust-bank|Mitsubishi UFJ Trust Bank]]、[[securities/japan-stock-lending-market-route|stock lending route]] 及 [[securities/japan-market-infrastructure-map|securities market infrastructure]] 配合使用。

## Function Map

| Function | What it means |
|---|---|
| 信托银行业务 | 在信托 / 银行监管路线下兼具银行与信托业务职能。 |
| 资产管理 | 保管、结算、公司行为、收益收取、基金会计、报告及记录保存。 |
| 主托管 | 面向机构投资者 / 基金的集中化资产管理服务。 |
| 名义人名称 | 可能与受益所有者不同的法律所有权 / 簿记登记名称。 |
| 投资指图 | 通常来自资产所有者、投资管理人或基金结构，而非托管机构本身。 |
| 证券借贷支持 | 证券可在指图与控制安排下出借，形成证券融资链接。 |

## Main Institution Types

| Type | Examples | Typical role |
|---|---|---|
| 全能型信托银行 | [[trust-banks/mitsubishi-ufj-trust-bank|Mitsubishi UFJ Trust Bank]]、[[trust-banks/mizuho-trust-bank|Mizuho Trust]]、[[trust-banks/smtb|SMTB]] | 信托、不动产、养老金、证券代理、资产管理 / 管理。 |
| 资产管理专业机构 | [[trust-banks/master-trust-bank|Master Trust Bank of Japan]]、[[trust-banks/custody-bank|Custody Bank of Japan]] | 大规模机构托管及基金 / 养老金资产管理。 |
| 在日全球托管机构 / ICSD | [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]]、[[foreign-financial-institutions/state-street-japan|State Street Japan]]、[[foreign-financial-institutions/euroclear-bank-japan|Euroclear Bank Japan]]、[[foreign-financial-institutions/clearstream-banking-japan|Clearstream Banking Japan]] | 外国投资者 / 全球资产服务、结算、信息披露及抵押品桥梁。 |
| 证券存管 / 结算基础设施 | [[securities/japan-securities-depository-center|JASDEC]]、[[securities/japan-securities-clearing-corp|JSCC]] | 簿记过户、DVP、清算与结算管道。 |

## Interpretation Rules

| Public artifact | How to read it |
|---|---|
| 「信託口」主要股东名称 | 名义人 / 信托账户名称；不要推断信托银行的自有所有权。 |
| 托管余额 / 托管资产 | 受管理的客户资产，而非该银行自身的投资组合。 |
| 投票权披露 | 投票指图通常属于资产所有者 / 管理人；托管机构可能仅机械执行。 |
| 证券借贷收入 | 视借贷计划条款，可能部分归属受益所有者。 |
| 基金会计 / NAV 操作 | 运营层面的资产服务层，而非投资决策本身。 |

## Capital-Market Links

信托银行托管将银行业与证券市场基础设施相连：

- 通过 [[securities/japan-securities-depository-center|JASDEC]] 及市场基础设施进行结算与公司行为；
- 通过 [[foreign-financial-institutions/euroclear-bank-japan|Euroclear Bank Japan]] 及 [[foreign-financial-institutions/clearstream-banking-japan|Clearstream Banking Japan]] 进行 ICSD / 跨境托管；
- 通过 [[securities/japan-stock-lending-market-route|stock lending route]] 及 [[financial-regulators/japan-securities-finance|JSF]] 进行保证金 / 证券借贷；
- 通过 [[securities/nisa-2024-flow|NISA / household asset-building]] 及资产管理页面进行投资信托与养老金流动；
- 通过 [[securities/tokyo-stock-exchange|TSE]] 申报与主要股东表进行发行人股东分析。

## Research Checklist

1. 辨明该信托银行是作为受托人、托管人、基金管理人、过户代理人、证券代理人，还是自有资产负债表参与者。
2. 在得出所有权结论之前，将名义人名称与受益所有者分开。
3. 查阅 FSA 信托银行 / 信托公司名单及信托协会的说明。
4. 将证券借贷与卖空问题链接到 [[securities/japan-stock-lending-market-route|stock lending]]，而非把托管余额当作卖空信号。
5. 对于当前的 AUC / AuA 数据，记录来源日期，因为托管余额随市价与新委托而变动。

## Related

- [[banking/INDEX]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[trust-banks/master-trust-bank]]
- [[trust-banks/custody-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/mizuho-trust-bank]]
- [[foreign-financial-institutions/euroclear-bank-japan]]
- [[foreign-financial-institutions/clearstream-banking-japan]]
- [[securities/japan-stock-lending-market-route]]
- [[securities/japan-market-infrastructure-map]]
- [[INDEX|FinWiki index]]

## Sources

- FSA：信托业务金融机构名单。
- FSA：信托业务金融机构的信托公司监管指针章节。
- Trust Companies Association of Japan：信托银行说明及会员公司名单。
- JASDEC / JSCC / BoJ：证券结算、DVP 及 JGB 簿记的公开资料。
- Master Trust Bank of Japan：官方业务概览。
- Custody Bank of Japan：官方公司 / 业务说明。
