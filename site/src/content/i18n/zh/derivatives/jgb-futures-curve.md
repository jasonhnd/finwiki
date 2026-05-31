---
source: derivatives/jgb-futures-curve
source_hash: 89a91cb256a441ee
lang: zh
status: machine
fidelity: ok
title: "JGB 期货市场与曲线"
translated_at: 2026-05-31T03:19:56.405Z
---

# JGB 期货市场与曲线

## TL;DR

JGB 期货是以日本国债为标的的交易所上市利率衍生品，在日本交易所集团（JPX）旗下的大阪交易所（OSE）交易。它们包括三个标准规模的主要合约——10年期、5年期和 20年期——外加一个规模为标准十分之一的"迷你"10年期合约。结算通过 JSCC 进行实物交割：到期时，空头从既定篮子中交付一只合资格的 JGB 券种，选为最便宜可交割券（CTD）。

10年期 JGB 期货合约是按价格（而非利率）计算流动性最高的日元利率衍生品，是交易商 JGB 库存、机构久期管理及日本利率宏观布局的标准对冲工具。日成交量与未平仓量绝大部分集中于 10年期标准合约和 10年期迷你合约；5年期和 20年期成交量较稀薄但真实存在。

对 FinWiki 而言，本条目路由合约规格、CTD 机制、现货-期货基差交易、JSCC 清算与结算、交易商及对冲基金活动，以及 BoJ JGB 购买政策对期货市场运行的影响。

## Wiki route

本条目归于 [[derivatives/INDEX|derivatives index]] 之下。请对照 [[derivatives/japan-irs-market]]（场外互换对冲替代方案）和 [[derivatives/ois-tona-curve]]（贴现曲线相互作用）阅读。现货 JGB 与回购侧为 [[money-market/jgb-repo-market-japan]]；清算基础设施为 [[securities/japan-securities-clearing-corp]]。

## 合约规格

JPX/OSE 上市三个标准及一个迷你 JGB 期货合约：

| 合约 | 标的 | 标准规模 | 最小变动价位 | 上市月份 |
|---|---|---|---|---|
| 10年期 JGB 期货 | 名义 10年期 JGB，6% 票息，JPY 100 面值 | JPY 100 百万面值 | 每 JPY 100 为 JPY 0.01 （= 每变动价位 JPY 10,000 ） | 3 月/6 月/9 月/12 月 |
| 5年期 JGB 期货 | 名义 5年期 JGB，3% 票息，JPY 100 面值 | JPY 100 百万面值 | 每 JPY 100 为 JPY 0.01 | 3 月/6 月/9 月/12 月 |
| 20年期 JGB 期货 | 名义 20年期 JGB，6% 票息，JPY 100 面值 | JPY 100 百万面值 | 每 JPY 100 为 JPY 0.01 | 3 月/6 月/9 月/12 月 |
| 迷你 10年期 JGB 期货 | 与标准 10年期相同标的 | JPY 10 百万面值（1/10） | 每 JPY 100 为 JPY 0.005 | 3 月/6 月/9 月/12 月（最近两个） |

所有合约均针对一只名义债券按价格报价（而非按收益率报价），交割针对匹配剩余期限的实际 JGB 可交割篮子进行。

交易时段遵循 OSE 的两个交易节，包括与欧美白天时段重叠的夜盘，这正是外国宏观参与者最活跃之时。

最终结算通过实物交割（迷你合约适用现金结算）。标准合约在交割前第七个营业日终止交易。

## 最便宜可交割券（CTD）

由于 JGB 期货针对合资格 JGB 券种篮子而非单一债券结算，空头方拥有一个选择权：交割时，空头从可交割篮子中选取使空头利润最大化（或损失最小化）的 JGB。该选定券种即为 CTD。

CTD 通过转换因子（CF）系统识别。转换因子将每只合资格 JGB 的价格调整至名义 6%（或 5年期为 3%）票息基准，使得空头在交割时的发票金额等于：

```
invoice amount = futures settlement price × CF × face value + accrued interest
```

经济上的 CTD 是使总基差最小化的 JGB：

```
gross basis = (CTD spot price + accrued interest) − (futures price × CF)
```

在调整至交割期间的回购持有成本之后（净基差 = 总基差 − 回购持有成本），净基差最低的债券即为交易商将交割的 CTD。

CTD 框架的特性：

| 特性 | 含义 |
|---|---|
| 收益率曲线形态（陡峭度、水平） | 决定篮子中哪只债券为 CTD；更平坦的曲线和更低的收益率可使 CTD 转移至篮子内不同期限。 |
| 票息-收益率关系 | 当市场收益率低于名义票息（10年期为 6%）时，CTD 倾向于篮子中久期较低/票息较长的债券；高于时则相反。由于 JGB 收益率历史上远低于 6%，CTD 通常接近最短的可交割券。 |
| 切换风险 | 若收益率越过阈值，CTD 可从一只债券切换至另一只；空头卖方对切换具有负 gamma。 |
| 逼空风险 | 若某 CTD 在回购市场中变得稀缺，空头可能面临交割逼空。BoJ 对特定券种的持有放大此风险。 |

CTD 机制是 JGB 期货相对于场外 IRS 对冲最具特色的特征，也是现货-期货基差交易存在的原因。

## 基差交易

JGB 现货-期货基差交易是日本利率中主导性的对冲基金与交易商套利。该交易包括：

1. 在现货市场**买入** CTD JGB。
2. **卖出**相应数量的 JGB 期货合约（按转换因子缩放）。
3. 通过针对同一券种的 SC 回购为 CTD 买入**融资**。
4. **持有至交割**（或提前平仓），实现净基差加回购持有收益。

经济回报是净基差：在计入回购融资成本后，期货隐含价格与现货 CTD 价格之间的差距。正净基差意味着期货相对 CTD"便宜"；该交易赚取这一差距。

基差交易的风险：

| 风险 | 细节 |
|---|---|
| CTD 上的回购特殊性 | 若 CTD 上的 SC 回购处于特殊状态（回购利率极负），融资成本可能压倒基差。 |
| CTD 切换 | 若收益率变动足以使另一只篮子债券成为新 CTD，多现货/空期货头寸将出现对冲错配。 |
| 流动性压力 | 在错位市场中，由于交易商拒绝扩张资产负债表，即便现货-期货基差也会走阔（类似于 [[derivatives/yen-basis-swap-market]] 中的日元-美元基差动态）。 |
| BoJ 购买 | BoJ 直接购买 JGB（轮番操作 rinban）可吸收 CTD 券种，收紧现货市场供给并将 SC 回购推向更深的特殊性。 |

基差交易操作上简单但资产负债表密集；它需要回购额度、期货保证金（IM 和 VM）及资本配置。对冲基金和交易商自营台是多现货/空期货侧的主要参与者。

## 结算周期与 JSCC 清算

JGB 期货通过日本证券清算机构（JSCC）——JPX 集团 CCP——清算和结算。关键结算特征：

| 要素 | 细节 |
|---|---|
| CCP | JSCC；更替（novation）发生在交易执行时。 |
| 保证金 | 初始保证金（IM）和变动保证金（VM）由 JSCC 每日计算；SPAN 式组合保证金。 |
| 最终结算 | 标准合约（10年期、5年期、20年期）实物交割；迷你 10年期基于最终结算价现金结算。 |
| 交割期 | 空头在合约月份内既定交割窗口期间提交交割指令。 |
| 违约管理 | JSCC 瀑布：违约方保证金 → 违约方对违约基金的出资 → JSCC 资本分层 → 非违约会员违约基金 → JSCC 进一步资源。 |

JSCC 的角色消除了双边对手方风险并跨交易商群体标准化保证金，但集中了清算风险，JSCC 通过会员要求、资本充足性和压力测试加以管理。清算公司详情见 [[securities/japan-securities-clearing-corp]]。

## 场外回购基差

JGB 期货市场与 JGB 回购市场（在 [[money-market/jgb-repo-market-japan]] 中涵盖）密切相关。各项联系：

| 联系 | 机制 |
|---|---|
| CTD 融资 | 期货基差交易的空头必须通过回购为多现货 CTD 融资；CTD 上的 SC 回购特殊性直接影响基差经济性。 |
| 隐含回购利率 | 由期货价格得出的隐含回购利率（IRR）说明何种融资成本与现货和期货之间的无套利一致；现货 IRR 对市场回购利率揭示基差错位。 |
| BoJ 持有效应 | BoJ 直接购买及 BoJ 证券借贷便利（SLF）对特定券种的可得性改变 SC 回购利率和 CTD 稀缺性。 |
| 季末基差 | 季末回购资产负债表收缩可使现货-期货基差走阔，方式与其使日元-美元 CCBS 走阔相同。 |

一条实用解读规则：当最便宜可交割券上的 SC 回购变得深度特殊（如 −10 基点或更糟）时，CTD 基差交易承担不对称风险，交易商可能转向替代可交割券或转而通过 [[derivatives/japan-irs-market]] 进行场外 IRS 对冲。

## 对冲基金与交易商活动

| 参与者 | 活动 |
|---|---|
| 宏观对冲基金（外国） | 对日本利率的直接方向性布局；10年期对 5年期、10年期对 20年期相对价值曲线交易；对美国国债期货的基差交易（利差宏观）。 |
| 相对价值对冲基金 | 现货-期货基差套利、转换因子套利、跨合约月份的日历价差交易、沿 JGB 曲线的蝶式交易。 |
| 日本交易商（巨型银行证券子公司、野村、大和） | 双向做市、客户库存对冲、自营基差交易。 |
| 资产管理人、寿险公司 | JGB 组合的久期对冲；因长久期买入持有授权而对期货依赖降低，但仍用于战术调整。 |
| 企业/公共部门财资 | 直接期货使用有限；更多依赖通过 [[derivatives/japan-irs-market]] 的场外 IRS 进行对冲。 |
| 外国交易商银行 | 在欧美重叠时段（含 OSE 夜盘）双向做市。 |

夜盘活动由外国账户主导，且经常在美国国债数据或美联储评论前后显示最大的日内变动。

## BoJ JGB 控制影响

过去十年间，BoJ 政策一直是 JGB 期货上最大的单一外部力量：

| 政策机制 | 对期货市场的影响 |
|---|---|
| 量化与质化宽松（QQE，2013–） | 大规模直接购买 JGB 从市场吸收现货 JGB，减少交易商库存并收紧 CTD 回购状况。 |
| 收益率曲线控制（YCC，2016–2024） | BoJ 将 10年期 JGB 收益率锁定在 0%附近；在 YCC 上限附近形成硬"上限"；期货波动率周期性地对上限压缩，并在 YCC 参数变化前后飙升。 |
| YCC 调整（2022, 年 12 月、2023, 年 7 月、2023年 10 月） | YCC 区间的连续走阔导致期货定价的阶跃变化和波动率飙升；基差交易经济性发生实质性转变。 |
| YCC 终止及负利率退出（2024年 3 月） | 取消了明确上限；期货流动性和波动率开始正常化，但 BoJ JGB 资产负债表仍非常庞大。 |
| 2024 后正常化 | BoJ 一直在逐步减少 JGB 购买；市场运行指标（现货-期货基差、回购状况、SLF 使用）受到密切监测。 |

就分析而言，JGB 期货市场的正常化是更广泛日本利率市场运行的领先指标。BoJ 存在减少会增加交易商库存并较少收紧回购状况，这往往随时间改善现货-期货基差交易经济性和期货流动性。BoJ 操作详情见 [[money-market/boj-open-market-operations]]。

## 相关

- [[derivatives/INDEX]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/japan-irs-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/yen-basis-swap-market]]
- [[money-market/INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/call-market-structure]]
- [[securities/INDEX]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-securities-clearing-corp]]
- [[banking/INDEX]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[JapanFG/mufg-bank]]
- [[JapanFG/mizuho-bank]]
- [[JapanFG/sumitomo-mitsui-banking-corp]]
- [[JapanFG/japan-securities-finance]]
- [[INDEX|FinWiki index]]

## 来源

- 日本交易所集团/大阪交易所：JGB 期货合约规格及产品界面。
- 日本证券清算机构：JGB 期货的清算规则及保证金方法论。
- 日本银行：JGB 证券借贷便利及轮番（rinban）操作文档。
- 日本银行评论（Bank of Japan Review）：JGB 市场运行分析出版物。
- 金融厅：上市衍生品及清算的 FIEA 框架。
- JPX Trading and Statistics：OSE 衍生品月度成交量及未平仓量发布。
