---
source: trade/letter-of-credit-documentary-mechanism
source_hash: f8f131d9c46b4f93
lang: zh
model: claude-opus-4-8
status: machine
fidelity: ok
title: "信用证（跟单信用证） —— 贸易结算机制"
translated_at: 2026-06-05T00:00:00.000Z
---
# 信用证（跟单信用证） —— 贸易结算机制

## 维基路径

本条目归属于 [[trade/INDEX|trade INDEX]]，是锚定于 [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC]] 的制度性页面的贸易金融对应物。请与 [[trade/incoterms-2020-trade-terms-framework|Incoterms 2020]]（定义信用证单据须证明的交付地点）以及 [[trade/documentary-collection-vs-letter-of-credit|跟单托收 vs 信用证]]（更轻量、由银行中介的替代方案）一并阅读。关于位于其旁的风险转移层，参见 [[insurance/marine-insurance-and-pi-cover-market|海运货物 / P&I 保险]] 与 [[policy-finance/nexi-export-credit-insurance-products|NEXI 出口信用保险产品]] 中的出口信用保障。

## 摘要

**信用证（L/C）**，正式称为**跟单信用证**，是银行不可撤销的承诺，承诺向卖方（*受益人*）支付一笔规定的金额，条件是卖方提交一套与信用证条款表面相符的规定单据。它以银行的信用替代买方的信用，从而使向自己难以评估的对手方装运货物的出口商，凭单据而非凭信任获得付款。

该机制由一部私人规则手册 —— ICC 的 **UCP 600**（跟单信用证统一惯例）—— 规管，全球银行自愿以引用方式纳入。两项原则定义了这一工具：**独立（自主）原则** —— 信用证是与基础销售合同相分离的交易 —— 以及**严格相符原则** —— 银行只审查单据，并只对相符的提示付款。

## 它解决什么问题

跨境贸易存在结构性的信任鸿沟。出口商希望在交出货物前付款；进口商希望在交出钱款前得到货物（或装运证明）；而双方都无法在对方的管辖区廉价地强制执行判决。跟单信用证通过插入银行作为受信任的中介来弥合这一鸿沟：

- **进口商的银行**承诺在单据相符时付款，因此出口商不再依赖进口商的善意。
- 出口商装运并汇集*表征*货物的单据（发票、运输单据、保险、各类证书）。
- 付款是对**单据**流动，而非对货物本身或销售合同的履行流动。

这就是 L/C 被描述为跟单机制的原因：银行处理的是纸面（或电子记录），而货物被抽象为一套单据。

## 各方当事人

| 当事人 | 角色 |
|---|---|
| 开证申请人 | 指示其银行开立信用证的买方／进口商 |
| 开证行 | 开立信用证并承担首要付款承诺的买方银行 |
| 受益人 | 有权在信用证项下支取的卖方／出口商 |
| 通知行 | 鉴别并将信用证转交受益人的银行（通常在卖方所在国） |
| 保兑行 | 在开证行承诺之上添加**自身**付款承诺的银行（在开证行或其所在国构成信用风险时使用） |
| 指定银行 | 获授权在信用证项下付款、承兑或议付的银行 |
| 偿付行 | 代开证行向付款／议付行偿付的银行 |

**保兑**层正是使出口商能将遥远或薄弱的开证行风险转换为其本国市场中银行风险的因素 —— 这是保兑信用证在新兴市场贸易中保持需求的核心原因。

## 生命周期

1. **销售合同** —— 买卖双方约定货物、价格、一项 [[trade/incoterms-2020-trade-terms-framework|Incoterms 2020]] 规则，并约定以跟单信用证付款。
2. **申请** —— 买方（申请人）指示开证行，规定金额、到期日、所需单据与最迟装运日期。
3. **开证** —— 开证行开立信用证，并通常通过银行间报文将其传送给通知行。
4. **通知／保兑** —— 通知行鉴别信用证并将其转交受益人；若有要求且愿意，它（或另一银行）予以保兑。
5. **装运** —— 卖方装运并取得运输单据。
6. **提示** —— 卖方在信用证的有效期与提示期内，向指定／保兑行提交单据。
7. **审单** —— 银行依据信用证、UCP 600 及 ICC 审单惯例审查单据。在 UCP 600 之下，银行在提示后最多有 **5 个银行营业日**来决定单据是否相符。
8. **承付或拒付** —— 若相符，银行承付（付款、承担延期付款承诺或承兑汇票）；若不符，可拒付，以单次通知列明所有不符点，并保留或退回单据。
9. **偿付与放单** —— 开证行沿链条向上偿付，并向申请人放单，申请人凭以向承运人提取货物。

## 独立与严格相符 —— 两项规管原则

这两项原则正是使 L/C 运作的因素，也是最常令首次使用者意外的因素：

- **独立（自主）。** 信用证「与其可能据以开立的销售或其他合同相分离」。银行的付款义务取决于单据相符，**而非**取决于货物是否实际相符，甚至是否已装运。买方就货物质量的争议本身并不解除银行的承诺。这就是为何欺诈本质上是法院承认的唯一狭窄例外。
- **严格相符。** 银行对*表面上*与信用证条款相符且彼此相符的单据付款。看似琐碎的不一致（拼写错误、缺失印章、发票与运输单据之间的矛盾）都可使提示不符。该标准是单据性的，而非对基础贸易的「实质履行」测试。

实务后果是，**不符点是 L/C 使用中占主导的运营风险**。很大比例的首次提示含有不符点，这随后需要申请人弃权、修改或重新提示 —— 侵蚀了该工具本应提供的确定性。

## 规则手册：UCP 600、ISBP 与 eUCP

L/C 主要并非制定法的产物；它运行于一套由**国际商会（ICC）**发布、私人维护、以契约方式纳入的规则集之上：

| 文件 | 规管内容 |
|---|---|
| UCP 600 | 跟单信用证的核心规则（自 2007 年起施行）；当信用证声明其适用 UCP 600 时适用 |
| ISBP | 国际标准银行实务 —— ICC 关于**如何**审单的指引，与 UCP 600 一并阅读 |
| eUCP（v2.1，2023 年 7 月施行） | 一项使记录得以**电子**提示的补充，用于数字或混合提示，与 UCP 600 并用 |
| ISP98 | 通常用于**备用**信用证（功能更像保函）的另一套规则集 |
| URDG 758 | 关于**见索即付保函**的 ICC 规则 —— 一种相关但不同的工具 |

由于规则是以引用方式纳入而非由法律施加，其权威来自近乎普遍的银行采用。这使 L/C 成为全球协调、行业自治金融标准最清晰的范例之一 —— 与 [[policy-finance/INDEX|policy-finance]] 中所记录的以国家为锚的框架形成对比。

## 常见信用证种类

| 种类 | 区别特征 |
|---|---|
| 不可撤销 | 未经各方同意不得修改或撤销（UCP 600 信用证默认不可撤销） |
| 保兑 | 第二家银行添加自身的付款承诺 |
| 即期 | 对相符提示即期付款 |
| 远期／延期 | 在提示或装运后规定期限付款（给买方融资时间） |
| 可转让 | 受益人可将支取权转让给一名或多名第二受益人（由中间商／贸易商使用） |
| 背对背 | 凭一份收到的主信用证之信用开立的另一份信用证（一种中间商结构） |
| 循环 | 在一项额度下为重复装运自动恢复 |
| 红条款 | 允许向受益人提供装运前预付 |
| 备用 | 仅在申请人**未能**履行时付款 —— 经济上为保函，通常在 ISP98 之下 |

## L/C 在贸易金融与结算栈中的位置

L/C 是若干结算方法之一，以其提供多少银行风险替代以及以何种成本来区分：

- **赊销** —— 卖方装运并开票；最廉价，卖方风险最高。
- **跟单托收** —— 银行对付款或承兑转递单据，但**不**给出任何付款承诺；参见 [[trade/documentary-collection-vs-letter-of-credit|跟单托收 vs 信用证]]。
- **跟单信用证（L/C）** —— 凭单据的银行承诺；成本更高，卖方保护强。
- **预付款** —— 买方先付；买方风险最高。

L/C 结算的银行间段最终通过代理行业务与支付系统轨道清算；关于某一主要市场的国内清算层，参见 [[payments/japan-payment-clearing-and-settlement-infrastructure|日本支付清算与结算基础设施]]。该工具还常与**出口信用保险**和政策性银行融资搭配 —— 该层的日本版本在 [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC]] 与 [[policy-finance/nexi-export-credit-insurance-products|NEXI 出口信用保险产品]] 中映射 —— 并与 [[insurance/marine-insurance-and-pi-cover-market|海运货物 / P&I 保险]] 所述货物保障搭配。

## 局限与现代走向

- **成本与摩擦。** 开证、通知、保兑与不符点处理都带来费用与延迟；对受信任的对手方，许多贸易商已转向赊销加保险。
- **不符点风险。** 严格相符标准意味着文书性单据错误（而非贸易争议）是最常见的不付款原因。
- **欺诈例外。** 独立性保护银行，但单据欺诈是被承认的狭窄例外 —— 也是大宗商品融资中反复出现的关切。
- **数字化。** eUCP 与更广泛的贸易数字化努力（电子运输记录、电子可转让记录的法律承认）旨在削减纸面负担，但各走廊的采用仍不均衡。

## 相关

- [[trade/INDEX|trade INDEX]]
- [[trade/incoterms-2020-trade-terms-framework|Incoterms 2020 贸易条件框架]]
- [[trade/documentary-collection-vs-letter-of-credit|跟单托收 vs 信用证]]
- [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC 比较]]
- [[policy-finance/nexi-export-credit-insurance-products|NEXI 出口信用保险产品]]
- [[policy-finance/oecd-export-credit-arrangement|OECD 出口信用安排]]
- [[insurance/marine-insurance-and-pi-cover-market|海运货物 / P&I 保险]]
- [[payments/japan-payment-clearing-and-settlement-infrastructure|日本支付清算与结算基础设施]]
- [[policy-finance/INDEX|policy-finance INDEX]]
- [[INDEX|FinWiki index]]

## 来源

- ICC —— 贸易金融概览: https://iccwbo.org/business-solutions/trade-finance/
- ICC —— UCP 600，跟单信用证统一惯例: https://2go.iccwbo.org/ucp-600-uniform-rules-for-documentary-credits-config-1+book_version-Book/
- ICC Academy —— 跟单信用证：规则、指引与术语: https://academy.iccwbo.org/international-trade/article/documentary-credits-rules-guidelines-terminology/
- ICC —— eUCP 版本 2.1: https://iccwbo.org/news-publications/policies-reports/eucp-version-2-1-icc-uniform-customs-and-practice-for-documentary-credits/
- Wikipedia —— 跟单信用证统一惯例（UCP 600 背景）: https://en.wikipedia.org/wiki/Uniform_Customs_and_Practice_for_Documentary_Credits
