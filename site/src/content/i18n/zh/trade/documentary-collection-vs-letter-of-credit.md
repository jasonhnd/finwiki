---
source: trade/documentary-collection-vs-letter-of-credit
source_hash: 0c1ef61bfb4a4012
lang: zh
model: claude-opus-4-8
status: machine
fidelity: ok
title: "跟单托收 vs 信用证 —— 贸易结算方法比较"
translated_at: 2026-06-05T00:00:00.000Z
---
# 跟单托收 vs 信用证 —— 贸易结算方法比较

## 维基路径

本条目归属于 [[trade/INDEX|trade INDEX]]，是 [[trade/letter-of-credit-documentary-mechanism|信用证 / 跟单信用证机制]] 的直接比较伙伴。两者都是由单据驱动的结算方法，但它们在谁承担风险上截然不同。请与 [[trade/incoterms-2020-trade-terms-framework|Incoterms 2020]]（确定单据所证明的交付地点）一并阅读，关于位于结算旁的融资／保险层，参见 [[policy-finance/nexi-export-credit-insurance-products|NEXI 出口信用保险产品]] 与 [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC]]。

## 摘要

**跟单托收**是一种结算方法，其中银行充当**将装运单据从出口商转递至进口商的代理人**，凭付款或凭对汇票的承兑 —— 但**不**由任何银行给出付款保证。它由 ICC 的 **URC 522**（托收统一规则）规管。它比信用证更廉价、更简单，但出口商保留买方违约风险：银行只处理纸面，它们不承诺付款。

与**信用证（L/C）**的对比正是要点所在。在 L/C 之下，银行以自身信用替代买方信用，并承诺对相符单据付款（参见 [[trade/letter-of-credit-documentary-mechanism|跟单信用证机制]]）。在托收之下，**没有银行承诺任何事**，除了遵循指示。两者之间的选择本质上是**成本 vs 安全性**的权衡。

## 什么是跟单托收

在跟单托收中，出口商先发运货物，然后将单据集（通常还有一张**汇票**）连同托收指示一并交给其银行。银行将单据向下游传递，并仅在约定条件下放给进口商。在 URC 522 之下，「托收」是指银行按照指示处理单据，以取得付款及／或承兑，或凭付款／承兑交付单据，或按其他条件交付单据。

关键的结构性事实：银行是**通道与代理人**，而非担保人。若进口商拒绝付款或承兑，银行没有义务使出口商得到补偿 —— 它们只是按下一条指示行事（拒绝证书、入仓、退回或重新提示）。

## 两种托收类型：D/P 与 D/A

| 类型 | 放单条件 | 买方融资 | 出口商风险概况 |
|---|---|---|---|
| **D/P** —— 付款交单 | 代收行仅在进口商**付款**时放单 | 无 —— 当下付款以取得单据 | 较低：未付款不放货，但买方仍可能走开，将货物搁置 |
| **D/A** —— 承兑交单 | 代收行在进口商**承兑**一张远期汇票（承诺将来某日付款）时放单 | 有 —— 买方当下取货，日后付款 | 较高：买方在付款**之前**持有货物；在已承兑汇票违约时，出口商已失去货物而仅持有一项债权 |

D/P 是「凭单付现」；D/A 给予买方一段融资期，但在货物已交出后使卖方暴露于不付款。D/A 之下的承兑产生一项出口商有时可贴现的可流通债务，但信用风险仍为商业性的。

## URC 522 之下的各方当事人

| 当事人 | 角色 |
|---|---|
| 委托人 | 将托收委托给其银行的出口商／卖方 |
| 托收行 | 将单据与指示向前发送的出口商银行 |
| 代收行 | 除托收行外，参与该托收的任何银行 |
| 提示行 | 实际向进口商提示单据的代收行 |
| 付款人 | 接受提示（付款或承兑）的进口商 |

至关重要的是，**这些银行中没有一家担保付款**。这就是与 L/C 链条的结构性差异，在后者中开证行（并可选地保兑行）承担一项付款承诺。

## 并列比较

| 维度 | 跟单托收（URC 522） | 信用证（UCP 600） |
|---|---|---|
| 银行付款承诺 | **无** —— 银行仅为代理人 | **有** —— 开证行（及保兑行）承诺付款 |
| 规管的 ICC 规则 | URC 522 | UCP 600（加 ISBP、eUCP） |
| 主要风险承担方 | **出口商**（买方违约风险仍在） | 对相符单据，开证／保兑的**银行** |
| 成本 | 较低的银行费用 | 较高（开证、通知、保兑、不符点处理） |
| 速度／复杂度 | 更简单，更快设立 | 更多单据与步骤 |
| 审单 | 银行检查单据是否**按指示齐备**，而非对信用证严格相符 | 银行对信用证条款进行**严格相符**审查 |
| 典型用途 | 已确立的关系、中等风险、较低价值或重复贸易 | 新／薄弱对手方、较高风险走廊、卖方需要银行承诺之处 |

处理托收的银行**不**执行定义 L/C 的严格相符审单；它检查指示中列明的单据是否齐备并据此行事。该较轻的义务是托收更廉价的部分原因 —— 也是它给予出口商更少保护的原因。

## 结算方法谱系

跟单托收与 L/C 是一条更广连续体上的两个点，该连续体在卖方安全性与买方便利和成本之间权衡：

1. **预付货款** —— 买方先付。卖方安全性最大，买方安全性最小。
2. **信用证** —— 凭单据的银行承诺。以代价换取强卖方保护；参见 [[trade/letter-of-credit-documentary-mechanism|跟单信用证机制]]。
3. **跟单托收（先 D/P，后 D/A）** —— 银行转递单据，无保证。中间地带。
4. **赊销** —— 卖方发货并开票，买方日后付款。最廉价，卖方风险最高。

随着对手方建立信任，贸易倾向于沿此列表**下移**（朝赊销方向），常以**出口信用保险**而非银行承诺为后盾。在日本，该保险层由 NEXI 提供 —— 参见 [[policy-finance/nexi-export-credit-insurance-products|NEXI 出口信用保险产品]] —— 并位于 [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC]] 中所映射的出口机构之内。

## 选择实际如何作出

结算方法是与交付条件和融资计划一并谈判的：

- **对手方风险。** 未知或高风险买方／国家 → 倾向保兑 L/C；稳定市场中已确立的关系 → 托收或赊销可能足矣。
- **成本敏感度。** L/C 费用在薄利货物上可能相当可观；托收在卖方能容忍残余风险之处削减该成本。
- **融资需要。** D/A 与远期 L/C 都给予买方时间；卖方选择为该通融接受多少违约风险。
- **单据／交付契合。** [[trade/incoterms-2020-trade-terms-framework|Incoterms 2020]] 规则决定哪些单据（尤其是提单与任何保险单据）被转递，这反过来塑造托收还是 L/C 可行。
- **银行间结算。** 无论使用哪种方法，现金段最终都通过代理行业务与国家支付系统清算 —— 关于某一主要市场的清算层，参见 [[payments/japan-payment-clearing-and-settlement-infrastructure|日本支付清算与结算基础设施]]。

## 跟单托收的局限

- **无付款保证。** 出口商的保护在于单据（因而在海运条件下对货物的控制）在付款或承兑前被保留 —— 但买方仍可拒绝，将货物搁置在外国港口。
- **货物已发运的敞口。** 由于卖方在结算前发运，拒绝意味着要处理远离故乡的货物（仓储、转售、退回）—— 成本可能超过边际。
- **D/A 实质上风险更高。** 凭仅仅的承兑放单，即在付款前交出货物；卖方随后依赖买方的承诺与商法上的执行。
- **缓释。** 卖方常将托收与**货物保险**（[[insurance/marine-insurance-and-pi-cover-market|海运货物 / P&I 保险]]）及**出口信用保险**搭配，以覆盖银行拒绝承担的买方违约风险。

## 相关

- [[trade/INDEX|trade INDEX]]
- [[trade/letter-of-credit-documentary-mechanism|信用证 / 跟单信用证机制]]
- [[trade/incoterms-2020-trade-terms-framework|Incoterms 2020 贸易条件框架]]
- [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC 比较]]
- [[policy-finance/nexi-export-credit-insurance-products|NEXI 出口信用保险产品]]
- [[insurance/marine-insurance-and-pi-cover-market|海运货物 / P&I 保险]]
- [[payments/japan-payment-clearing-and-settlement-infrastructure|日本支付清算与结算基础设施]]
- [[policy-finance/INDEX|policy-finance INDEX]]
- [[INDEX|FinWiki index]]

## 来源

- ICC —— URC 522，托收统一规则: https://2go.iccwbo.org/urc-522-uniform-rules-for-collections-config-1+book_version-Book/
- Corporate Finance Institute —— 托收统一规则（URC）解析: https://corporatefinanceinstitute.com/resources/commercial-lending/uniform-rules-for-collections-urc/
- ICC —— 贸易金融概览: https://iccwbo.org/business-solutions/trade-finance/
- 美国商务部（trade.gov）—— 国际贸易中的支付方法: https://www.trade.gov/methods-payment
