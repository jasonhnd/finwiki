---
source: securities/japan-short-selling-and-stock-loan-controls
source_hash: d764b7bd2fb3612a
lang: zh
status: machine
fidelity: ok
title: "日本卖空与融券控制"
translated_at: 2026-06-01T04:15:40.123Z
---
# 日本卖空与融券控制

## 概览

日本卖空位于三个相互连接的控制层面上：法律上的卖空规则、借券 / 证券金融可得性，以及交易所 / 经纪商的个股层面限制。不要把卖空余额、JSF 融券余额、信用卖出和证券借贷视为同一个数字。

请将本页与 [[securities/INDEX|securities domain]]、[[securities/japan-margin-trading-and-securities-finance|margin trading and securities finance]]、[[securities/japan-stock-lending-market-route|stock lending market route]]、[[financial-regulators/japan-securities-finance|Japan Securities Finance]]、[[securities/japan-best-execution-sor-pts|best execution / SOR / PTS]]、[[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]] 和 [[securities/tokyo-stock-exchange|Tokyo Stock Exchange]] 一起使用。

## 控制层

| 层级 | 控制内容 | 来源路径 |
|---|---|---|
| 标记 / 确认 | 卖出订单是否被标记为空头或多头，并由经纪商确认。 | FIEA / JPX 卖空规则说明。 |
| 价格限制 | 当满足个股层面条件时触发卖空价格限制。 | JPX 卖空限制。 |
| 裸卖空禁止 | 未持有或未安排借入的卖出受到限制。 | FSA 卖空措施。 |
| 空头头寸报告 | 超过阈值的大额空头头寸需要通过报告 / 披露路径处理。 | FSA 卖空措施和交易所披露。 |
| 借券可得性 | 借入股票来自信用 / 贷借交易、证券借贷或协商借入。 | [[financial-regulators/japan-securities-finance|JSF]]、经纪商、机构出借方。 |
| 个股层面信用交易限制 | TSE / JSF 可以限制信用交易或信用交易用贷款。 | JPX 信用交易限制、JSF 通知。 |

## 数据地图

| 数据信号 | 用途 | 注意点 |
|---|---|---|
| 卖空交易金额 | 资金流压力和市场结构监测。 | 不等同于未平仓空头头寸。 |
| 空头头寸披露 | 持有人披露的较大头寸。 | 有阈值限制，并非完整市场库存。 |
| TSE 信用交易余额 | 散户 / 经纪商信用仓位。 | 包含制度信用 / 一般信用的复杂性。 |
| JSF 融券余额 | 制度信用 / 证券金融供需路径。 | 不包括所有场外股票借贷或经纪商内部供给。 |
| 品贷费 / 融券费率 | 借券稀缺信号。 | 可能是临时且个股特定的。 |
| PTS 份额 / 执行场所数据 | 交易场所互动和 SOR 路由。 | 需要来自 JPX / JSDA 数据的分母。 |

## 股票借贷 vs 卖空

股票借贷是一种融资和结算机制。卖空是一种交易行为。同一笔借入股票可以支持做市、套期保值、信用卖出、结算补位或方向性空头敞口。这就是为什么在基于借券数据作出方向性判断之前，应阅读 [[securities/japan-stock-lending-market-route|stock lending market route]]。

## JapanFG 相关性

- [[financial-regulators/japan-securities-finance|Japan Securities Finance]] 是支持制度信用 / 贷借交易的核心机构。
- [[securities-firms/sbi-securities|SBI Securities]]、[[securities-firms/rakuten-securities|Rakuten Securities]]、[[securities-firms/matsui-sec|Matsui Securities]]、[[securities-firms/gmo-click-securities|GMO Click Securities]] 和 [[securities-firms/dmm-com-securities|DMM.com Securities]] 对散户信用交易和活跃交易者资金流很重要。
- [[securities-firms/nomura-hd|Nomura]]、[[securities-firms/daiwa-sg|Daiwa Securities Group]]、[[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/mizuho-securities|Mizuho Securities]] 和 [[securities-firms/mufg-mums|MUMSS]] 对机构股票借贷、主经纪业务邻近领域以及承销 / 对冲资金流很重要。
- 当卖空控制与交易场所选择发生交互时，[[securities/japan-best-execution-sor-pts|Best execution / SOR / PTS]] 很重要。

## 研究清单

1. 识别观察对象是卖空订单、信用卖出、已披露空头头寸、融券余额，还是品贷费信号。
2. 检查该证券是否存在 JPX / TSE / JSF 限制。
3. 检查该交易是制度信用、一般信用、场外借入、套期保值，还是做市。
4. 避免把信托银行名义持股、出借供给和方向性做空视为同一件事。
5. 将发行人特定分析链接到准确日期，因为卖空和贷借限制可能快速变化。

## 相关

- [[securities/INDEX]]
- [[securities/japan-margin-trading-and-securities-finance]]
- [[securities/japan-stock-lending-market-route]]
- [[financial-regulators/japan-securities-finance]]
- [[securities/tokyo-stock-exchange]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-pts-liquidity-data-guide]]
- [[securities/japan-market-infrastructure-map]]
- [[money-market/jgb-repo-market-japan]]
- [[INDEX|FinWiki index]]

## 来源

- JPX：卖空限制说明。
- JPX：未平仓卖空头寸、卖空金额统计，以及信用 / 贷借限制页面。
- FSA：卖空监管公告和历史措施。
- FSA Access：关于将裸卖空禁止永久化并扩大 PTS 处理的说明。
- JSF：证券金融业务页面。
