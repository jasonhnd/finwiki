---
source: derivatives/japan-cms-constant-maturity-swap
source_hash: a66f8d7ebe020145
lang: zh
status: machine
fidelity: ok
title: "日本 CMS（固定期限互换）市场"
translated_at: 2026-05-31T03:19:56.420Z
---

# 日本 CMS（固定期限互换）市场

## TL;DR

固定期限互换（CMS）是一种场外利率衍生品，其中一腿支付固定参考利率（或浮动短端参考利率），另一腿支付定期重置的长期限互换利率——最常见的是在每个重置日的 10年期或 5年期日元互换利率。CMS 一腿的决定性特征在于，每次重置所参考的互换利率具有固定期限（例如每次重置都是 10年期），而在普通 IRS 中浮动参考利率具有固定的短期限（例如 3个月 TIBOR 或复利 TONA）。

CMS 是日本分销的一系列与收益率曲线形状挂钩的结构性产品的结构性构件：CMS 挂钩票据（支付以 10年期日元互换利率为指数的票息）、CMS 利差票据（支付以 10年期减 2年期利差或类似曲线陡峭度指标为指数的票息），以及带上限/下限的 CMS 浮动利率票据。CMS 定价需要凸性调整，因为 CMS 利率收益相对于标的远期互换利率是非线性的；凸性修正取决于标的互换利率的隐含波动率，直接借鉴 [[derivatives/japan-swaption-market|JPY swaption vol grid]]。

对 FinWiki 而言，本条目涵盖 CMS 机制、凸性调整、日元用例（CMS 挂钩票据、CMS 利差产品）、定价输入以及交易商业务。

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] in the rates-derivatives cluster. Read it against [[derivatives/japan-irs-market]] for the vanilla IRS basis the CMS rate is derived from, [[derivatives/japan-swaption-market]] for the vol-grid input that drives convexity pricing, and [[derivatives/ois-tona-curve]] for the discount curve. The structured-note distribution channel is covered in [[derivatives/structured-bond-japan-retail-issuance]] and [[derivatives/structured-product-eb-knockin-japan-retail]].

## 工具机制

标准日元 CMS 具有以下结构：

| 要素 | 详情 |
|---|---|
| 名义本金 | 已定义；不交换 |
| 期限 | 互换总期限（例如 5年总到期） |
| 重置频率 | 定期（通常按季度或半年） |
| 固定/利差腿 | 支付固定利率（由交易商定价的「CMS 互换利率」）或浮动短端利率 + 利差 |
| CMS 腿 | 在每个重置日支付当时的 N 年期日元互换利率（例如 10年期日元互换利率，在每次重置时观测） |
| 计息基准 | 日元通常为 ACT/365 |
| 结算 | 在每个票息日净额支付 |
| 文件 | ISDA 主协议 + CSA |

示例：一笔 5年期 CMS-10年互换，一腿支付 10年期日元互换利率（在每个季度重置时固定），另一腿支付固定利率或 3个月 TIBOR / 复利 TONA + 利差。

经济内涵：CMS 一腿的支付方对长端互换曲线随时间的水平（和形状）持有观点；CMS 一腿的收取方则在相反方向对冲或投机。

## 为何需要凸性调整

任何未来重置日的 CMS 利率是从该日开始的 N 年期互换的平价互换利率。CMS 一腿收益的现值相对于标的远期互换利率是非线性的，因为 CMS 一腿票息上「支付」的互换利率，是参照一笔互换计算的，而该互换自身的现值（若你以该利率进入标的 N 年期互换的现值）与其自身利率存在非平凡的关系。

标准定价方法将 CMS 收益分解为：

1. 使用当前贴现曲线，计算重置日 $T$ 上 N 年期标的互换的远期互换利率 $S(t, T, N)$。
2. 对远期互换利率施加凸性调整：$\hat{S} = S + \text{凸性调整}$，其中调整取决于标的互换利率的隐含波动率（来自 [[derivatives/japan-swaption-market|swaption vol grid]]）以及标的互换的期限结构。
3. 将 $\hat{S}$ 用作定价的 CMS 票息预期。

封闭式近似（Hagan、Brigo-Mercurio 等）被广泛使用；多因子短端利率模型（Hull-White、LMM）在复杂曲线情形下给出更精确的凸性调整。

实际结论：CMS 定价对互换期权波动率曲面具有显著敏感性，尤其是在所参考的互换利率期限处（例如 CMS-10年产品对应 10年期波动率）。这就是为何 CMS 市场与互换期权市场在交易商账簿中紧密耦合。

## 日元用例

日元 CMS 产品服务于多种终端用户用途：

| 产品 | 结构 | 终端用户吸引力 |
|---|---|---|
| CMS 挂钩票据（票息 = a + b × CMS-10年） | 定期票息与 10年期日元互换利率挂钩 | 相对普通浮动利率票据的收益增强；看涨长端利率的观点 |
| CMS 利差票据（票息 = a + b × (CMS-10年 − CMS-2年)） | 票息与曲线陡峭度挂钩 | 若曲线陡峭化则收益提升；防范曲线平坦化的保险 |
| 带上限的 CMS 浮动利率票据 | 带有参考 CMS 利率上限的浮动票息 | 为浮动票据设定上行空间；在存在加息担忧时受欢迎 |
| 带下限的 CMS 浮动利率票据 | 带有参考 CMS 利率下限的浮动票息 | 在低利率环境下设定下行空间 |
| 区间累计 CMS | 仅当 CMS 利率位于既定区间内时票息才累计 | 基于曲线区间方向性观点的收益增强 |
| 雪球 CMS | 票息根据过去 CMS 利率观测值累计增长 | 高度路径依赖；间歇性分销 |

日本 CMS 挂钩票据的终端用户涵盖：

- **地方银行**：在普通票息收入不足时，对日元债券组合进行收益增强。
- **信托银行/养老金基金**：作为更广泛固定收益委托的一部分进行与曲线形状挂钩的配置。
- **高净值零售（经由私人银行）**：分销支付增强票息的 CMS 利差票据。
- **寿险公司**：作为 ALM 组合构件的选择性使用。
- **企业财务**：直接使用有限；更多依赖普通 IRS。

成交量是间歇性的，集中于日元互换曲线相对平坦收益替代品呈现出有吸引力形状的时期。

## 定价输入

一个完整的日元 CMS 定价引擎需要：

| 输入 | 来源 |
|---|---|
| 日元 OIS-TONA 贴现曲线 | [[derivatives/ois-tona-curve|TONA-OIS curve]] |
| 日元互换远期利率曲线 | 从 [[derivatives/japan-irs-market|JPY IRS market]] 自举 |
| 日元互换期权隐含波动率曲面 | [[derivatives/japan-swaption-market|JPY swaption vol grid]]（到期 × 期限矩阵） |
| 相关性假设（用于 CMS 利差产品） | 跨期限相关性；可从历史或期权隐含数据反解 |
| 信用融资利差（用于交易商自身资产负债表） | xVA 框架（FVA、CVA、DVA） |

CMS 利差产品对两个互换利率之间的相关性（例如 10年期对 2年期）特别敏感，因为利差收益的波动率低于任一单独期限；相关性定价错误会显著地对产品估值产生偏差。

## 交易商业务

日元 CMS 做市位于以下机构更广泛的利率结构化部门之内：

| 交易商类别 | 活动 |
|---|---|
| 日本大型银行证券子公司（MUFG 证券、SMBC 日兴、瑞穗证券） | 构建 CMS 挂钩和 CMS 利差票据，经由银行渠道和证券渠道客户分销；用互换期权账簿承接 CMS 风险 |
| 独立日本证券（野村、大和） | 面向零售和机构分销的结构性产品发起 |
| 全球投资银行（摩根大通、高盛、花旗、德银、法巴、巴克莱、汇丰） | 面向机构流的 CMS 做市；跨境分销；跨币种 CMS 利差产品 |
| 交易商间经纪商 | 有限；CMS 更多是交易商对终端客户而非经由 IDB 交易 |

CMS 产品的交易商损益是利率部门内更广泛的利率/结构性产品条线的一部分；不单独披露。

## 流动性与市场深度

| 期限/结构 | 流动性 |
|---|---|
| 普通 CMS（例如 5年期 CMS-10年） | 中等；交易商按需报价；买卖价差宽于普通 IRS |
| CMS 挂钩票据（发行人侧） | 间歇性；取决于零售/机构意愿 |
| CMS 利差票据 | 间歇性；相关性敏感的定价意味着交易商严格管理敞口 |
| 百慕大可赎回 CMS | 有限；定制化；主要为交易商对发行人 |

日元 CMS 市场明显小于欧元 CMS 市场（在欧元市场，曲线陡峭度产品拥有大得多且更成熟的结构性分销基础），也小于美元 CMS。间歇性分销模式意味着，当曲线形状呈现出有吸引力的收益曲线时，CMS 成交量会激增。

## 清算

日元 CMS 主要为双边。JSCC 未像对普通 IRS 那样广泛地将清算范围扩展至 CMS；非清算 CMS 交易对在范围内的交易对手适用 UMR 阶段 IM 要求和标准 CSA 抵押安排。

## Related

- [[derivatives/INDEX]]
- [[derivatives/japan-irs-market]]
- [[derivatives/japan-swaption-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/japan-inflation-swap]]
- [[derivatives/structured-bond-japan-retail-issuance]]
- [[derivatives/structured-product-eb-knockin-japan-retail]]
- [[derivatives/dealer-bank-derivatives-revenue-mix]]
- [[securities/INDEX]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[money-market/INDEX]]
- [[money-market/japan-money-market]]
- [[banking/INDEX]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[megabanks/mufg-bank]]
- [[INDEX|FinWiki index]]

## Sources

- BIS: Semi-annual OTC Derivatives Statistics (JPY interest-rate derivatives).
- Bank of Japan: Japan portion of BIS OTC derivatives survey.
- Japan Securities Clearing Corporation: Clearing scope and product registry.
- Financial Services Agency: FIEA framework on OTC derivatives and structured-product distribution.
- ISDA: Standard documentation; product definitions for swap and CMS variants.
- Academic literature: Brigo-Mercurio "Interest Rate Models — Theory and Practice"; Hagan papers on CMS convexity.
- Industry publications: Risk Magazine, GlobalCapital structured-products coverage.
