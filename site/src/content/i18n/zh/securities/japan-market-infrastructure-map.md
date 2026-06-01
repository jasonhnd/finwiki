---
source: securities/japan-market-infrastructure-map
source_hash: 2c9adb0ba441c455
lang: zh
status: machine
fidelity: ok
title: "日本市场基础设施地图"
translated_at: 2026-06-01T03:31:12.279Z
---
# 日本市场基础设施地图

## Overview

日本证券市场是一个分层基础设施系统：公共监管机构、自律组织、交易所场所、PTS 场所、清算、结算、证券金融、经纪商、托管机构和披露通道。单个经纪商页面只是整个系统的一部分。

将本页作为 [[securities/tokyo-stock-exchange|Tokyo Stock Exchange]]、[[securities/osaka-exchange|Osaka Exchange]]、[[securities/tokyo-commodity-exchange|Tokyo Commodity Exchange]]、[[securities/japan-securities-clearing-corp|JSCC]]、[[securities/japan-securities-depository-center|JASDEC]]、[[securities/japannext-securities|Japannext]]、[[securities/osaka-digital-exchange|ODX]]、[[JapanFG/japan-securities-finance|Japan Securities Finance]]、[[JapanFG/euroclear-bank-japan|Euroclear Bank Japan]]、[[JapanFG/clearstream-banking-japan|Clearstream Banking Japan]]、[[JapanFG/jsda|JSDA]] 以及经纪 / 承销页面的路线图。

这是 [[securities/INDEX|securities domain]] 内部的基础设施路线；当问题从市场管道转向机构注册或法律地位时，使用 [[securities/financial-instruments-business-operators-japan-index|FIEA operator registry index]] 和 [[JapanFG/legal-financial-licenses/INDEX|JapanFG legal / financial licenses]]。

## Layer Map

| Layer | Main actors | What to use it for |
|---|---|---|
| 公共监督 | FSA、地方财务局；在结算 / 货币市场管道相关时包括日本银行 | 牌照、注册、公共监督、披露、支付 / 结算语境。 |
| 自律 | [[JapanFG/jsda|JSDA]]、交易所自律机构、行业规则 | 交易商行为、承销、招揽、会员规则、市场纪律。 |
| 交易所控股公司 | [[JapanFG/japan-exchange-group|Japan Exchange Group]] | 核心交易所、清算和数据基础设施的集团层面所有者。 |
| 现金股票交易所 | [[securities/tokyo-stock-exchange|Tokyo Stock Exchange]] | 上市股票、ETF、REIT、上市规则、交易市场、发行人披露邻接。 |
| 上市衍生品交易所 | [[securities/osaka-exchange|Osaka Exchange]] | 股指、JGB 及其他上市衍生品。 |
| 商品衍生品交易所 | [[securities/tokyo-commodity-exchange|Tokyo Commodity Exchange]] | JPX 集团内部的商品期货和能源 / 商品路线。 |
| PTS / 替代场所 | [[securities/japannext-securities|Japannext]], [[securities/osaka-digital-exchange|ODX]] | 场外交易、SOR、夜间交易、证券型代币场所问题。 |
| 清算 | [[securities/japan-securities-clearing-corp|JSCC]] | 中央对手方、保证金、违约管理、净额结算、清算参与者风险。 |
| 结算 / CSD | [[securities/japan-securities-depository-center|JASDEC]] | 账簿记载转让、DVP、发行人 / 投资者账户基础设施、结算风险降低。 |
| ICSD / 全球托管接口 | [[JapanFG/euroclear-bank-japan|Euroclear Bank Japan]], [[JapanFG/clearstream-banking-japan|Clearstream Banking Japan]], [[banking/japan-trust-bank-custody-map|trust-bank custody map]] | 跨境结算、托管、JGB 抵押品、披露，以及全球投资者进入日本资产。 |
| 证券金融 | [[JapanFG/japan-securities-finance|Japan Securities Finance]] | 信用交易贷款、证券借贷、融资和库存管道。 |
| 经纪商 / 承销商 | [[JapanFG/nomura-hd|Nomura]], [[JapanFG/daiwa-sg|Daiwa]], [[JapanFG/sbi-securities|SBI Securities]], [[JapanFG/rakuten-securities|Rakuten Securities]] | 客户接入、承销、研究、分销、执行、托管接口。 |

## Cash Equity Flow

```text
Investor
  -> broker / online broker
  -> order routing / SOR
  -> TSE or PTS venue
  -> JSCC clearing
  -> JASDEC securities settlement
  -> Bank of Japan / settlement bank cash leg
```

JPX 的清算 / 结算材料说明了交易所交易中交易、清算和结算之间的功能划分。JASDEC 材料解释账簿记载和 DVP 结算基础设施。对 FinWiki 而言，这意味着一个关于“股票交易”的问题可能至少需要四个页面：经纪商、交易场所、清算层和结算层。

## Venue Map

| Venue / infrastructure | Page | Key reading |
|---|---|---|
| JPX 控股公司 | [[JapanFG/japan-exchange-group]] | TSE、OSE、TOCOM、JSCC、JPX-R、JPX Market Innovation & Research 的集团层面所有者和治理。 |
| TSE | [[securities/tokyo-stock-exchange]] | 现金股票、上市、市场区分、TDnet 邻接。 |
| OSE | [[securities/osaka-exchange]] | 上市衍生品、指数期货 / 期权、JGB 期货路线。 |
| TOCOM | [[securities/tokyo-commodity-exchange]] | 综合交易所集团下的商品衍生品。 |
| JSCC | [[securities/japan-securities-clearing-corp]] | CCP 和违约风险共同化。 |
| JASDEC | [[securities/japan-securities-depository-center]] | CSD、账簿记载转让、DVP、结算匹配。 |
| Japannext | [[securities/japannext-securities]] | PTS、替代流动性、SOR 路线。 |
| ODX | [[securities/osaka-digital-exchange]] | PTS 和证券型代币二级市场路线。 |
| JSF | [[JapanFG/japan-securities-finance]] | 证券金融、信用贷款和借贷管道。 |
| Euroclear / Clearstream | [[JapanFG/euroclear-bank-japan]], [[JapanFG/clearstream-banking-japan]] | 面向日本资产的 ICSD / 跨境托管和抵押品路线。 |

## Why This Matters

| Analytical question | Infrastructure route |
|---|---|
| 为什么标题式零佣金券商仍可能具备经济意义？ | 将券商经济性与 PTS / SOR、信用融资、证券借贷和生态交叉补贴一起阅读。 |
| 波动率飙升时会发生什么？ | 阅读 JSCC 保证金、结算时点和券商风险控制。 |
| IPO 如何成为可交易的公开证券？ | 将 [[securities/japan-underwriting-market-structure|underwriting]]、TSE 上市、JSCC、JASDEC 和券商分销一起阅读。 |
| 证券型代币放在哪里？ | 阅读 ODX / PTS、FIEA 代币化证券、结算设计和披露路线。 |
| JGB 为什么对证券市场重要？ | 阅读 [[money-market/jgb-repo-market-japan|JGB repo]]、JSCC 清算、结算现金腿和抵押品渠道。 |

## Boundary Notes

- **交易所 vs 清算**：TSE / OSE / TOCOM 是交易场所；JSCC 是清算层。
- **清算 vs 结算**：清算进行净额处理并保证债务；结算转移证券和现金。
- **经纪商 vs 场所**：零售 App 不是市场；它是客户进入交易场所和基础设施的入口。
- **PTS vs 暗池 / OTC**：PTS 是受监管的替代场所路线；不要把所有场外执行都视为同一类。
- **证券金融 vs 经纪业务**：信用交易可能涉及经纪商和 [[JapanFG/japan-securities-finance|JSF]]；融资和抵押品应单独分析。
- **国内 CSD vs ICSD**：[[securities/japan-securities-depository-center|JASDEC]] 是国内 CSD 路线；[[JapanFG/euroclear-bank-japan|Euroclear]] 和 [[JapanFG/clearstream-banking-japan|Clearstream]] 是 ICSD / 全球托管接口。
- **上市公司 vs 基础设施页面**：[[JapanFG/japan-exchange-group|JPX]] 是上市控股公司；证券领域页面解释功能性基础设施。

## Related

- [[securities/INDEX]]
- [[JapanFG/japan-exchange-group]]
- [[securities/tokyo-stock-exchange]]
- [[securities/osaka-exchange]]
- [[securities/tokyo-commodity-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/japannext-securities]]
- [[securities/osaka-digital-exchange]]
- [[JapanFG/japan-securities-finance]]
- [[JapanFG/euroclear-bank-japan]]
- [[JapanFG/clearstream-banking-japan]]
- [[JapanFG/jsda]]
- [[securities/japan-online-brokerage-competition]]
- [[securities/japan-underwriting-market-structure]]
- [[INDEX|FinWiki index]]

## Sources

- JPX：公司简介以及现金股票清算 / 结算概要。
- JSCC：公司和清算概要页面。
- JASDEC：公司概要和 DVP 结算页面。
- Japan Securities Finance：公司简介。
- Japannext 和 ODX 官方网站页面。
- JSDA：组织概要。
