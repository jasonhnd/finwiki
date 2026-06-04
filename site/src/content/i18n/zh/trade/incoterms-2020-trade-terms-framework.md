---
source: trade/incoterms-2020-trade-terms-framework
source_hash: 53ac46c0c66ecbbd
lang: zh
model: claude-opus-4-8
status: machine
fidelity: ok
title: "Incoterms 2020 —— ICC 贸易条件框架"
translated_at: 2026-06-05T00:00:00.000Z
---
# Incoterms 2020 —— ICC 贸易条件框架

## 维基路径

本条目归属于 [[trade/INDEX|trade INDEX]]，并与 [[trade/letter-of-credit-documentary-mechanism|信用证 / 跟单信用证机制]] 直接配对，因为合同所选的 Incoterms 规则决定 L/C 必须要求哪些运输与保险单据。它还连接到 [[insurance/marine-insurance-and-pi-cover-market|海运货物 / P&I 保险]] 中的货物风险转移层，以及 [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC]] 中所映射的更广泛的日本出口机构。

## 摘要

**Incoterms**（国际贸易术语）是由**国际商会（ICC）**发布的一套标准化三字母贸易术语。它们在卖方与买方之间，就货物交付分配三件事：**（1）谁安排并支付运输，（2）灭失或损坏风险在何处转移，以及（3）谁处理出口／进口手续与成本。** 当前版本是 **Incoterms 2020**，包含 **11 项规则**。

Incoterms **不做**的事同样重要：它们不是销售合同，不转移所有权／物权，不设定价格或付款方法，也不规管违约救济。它们只定义交付与成本／风险接口 —— 其余部分留在销售合同中。

## Incoterms 2020 的 11 项规则

规则按运输方式分为两族。

### 适用于任何运输方式（含多式联运）

| 规则 | 名称 | 风险转移（大致） |
|---|---|---|
| EXW | 工厂交货 | 在卖方场所；买方几乎做一切 |
| FCA | 货交承运人 | 当货物交给买方指定的承运人时 |
| CPT | 运费付至 | 当交给第一承运人时；卖方支付至目的地的运费 |
| CIP | 运费保险费付至 | 同 CPT，加卖方购买保险（2020 下更高保障） |
| DAP | 目的地交货 | 当在指定地置于买方处置之下时，未卸货 |
| DPU | 卸货地交货 | 当由卖方在指定地卸货时 |
| DDP | 完税后交货 | 在目的地，由卖方承担进口关税／清关 |

### 仅适用于海运与内河水运

| 规则 | 名称 | 风险转移（大致） |
|---|---|---|
| FAS | 船边交货 | 当货物在指定港置于船边时 |
| FOB | 船上交货 | 当货物在指定港在船上时 |
| CFR | 成本加运费 | 在船上；卖方支付至目的港的运费 |
| CIF | 成本保险费加运费 | 同 CFR，加卖方购买保险（2020 下最低保障） |

一个反复出现的实务错误是，对在内陆码头交接的集装箱货物使用仅限海运的术语（FOB、CIF）—— 而那里 **FCA / CIP** 才是正确规则，因为卖方在集装箱抵达船舷之前就失去了对它的控制。

## 成本／风险转移点 —— 核心思想

每一项 Incoterms 规则都回答用户常混淆的两个独立问题：

- **风险在何处转移？** 越过该点，货物的灭失或损坏即为买方的问题。
- **卖方承担成本至何处？** 在「C」术语（CPT、CIP、CFR、CIF）下，卖方**支付至目的地的运输**，但**风险仍早期转移**（在交接／在船上）。这一分裂 —— 卖方支付向前的运费，但买方承担在途风险 —— 是该框架最被误解的特征。

从 EXW 到 DDP 沿字母顺序阅读，大致跟踪**卖方义务递增**：EXW 把几乎一切放在买方身上；DDP 把几乎一切放在卖方身上，包括进口清关。

## 从 Incoterms 2010 到 2020 有何变化

2020 年修订保持了相同数量（11 项规则），但做了若干实质性变更：

1. **DAT 改名为 DPU。**「目的港码头交货」变为「卸货地交货」，以明确目的地不必是码头 —— 它可以是任何地点 —— 而 DPU 仍是卖方在目的地**卸货**的唯一规则。（DAP 是未卸货的对应物。）
2. **CIP 与 CIF 的保险保障水平不同。** 在 2020 下，**CIP** 要求卖方取得更高保障 —— **协会货物条款（A）**（「一切险」，受除外限制）—— 而 **CIF** 保留最低，**协会货物条款（C）**。各方总可约定不同水平，但默认值如今分歧。
3. **FCA 可选的已装船提单。** FCA 经修订，使各方可约定由买方指示承运人在装船后向卖方签发**已装船提单** —— 在 L/C 要求已装船 B/L 但交付为 FCA 之处很重要。
4. **承认自有运输工具。** FCA、DAP、DPU 与 DDP 如今明确设想由卖方或买方的**自有运输**承运，而不仅通过第三方承运人。
5. **安全保障相关的义务与成本被明确化**，并在每项规则内分配。
6. **合并的成本清单。** 一项规则的所有成本如今集中于 **A9/B9** 条，使用户能一目了然地看到所选术语的完整成本划分。

## 与信用证及贸易金融的相互作用

Incoterms 与单据结算紧密耦合。所选规则指令**哪些单据存在以及谁能提示它们**：

- 在 **CIF / CIP** 下，卖方采购保险，因此一份跟单信用证将在卖方提示中要求一份**保险单据**。在 **FOB / FCA** 下，保险是买方的关切，通常**不**是卖方需提交的信用证要求单据。
- 在海运术语下，**提单**（常为已装船 B/L）是 L/C 所要求的关键物权凭证；2020 年的 FCA 已装船 B/L 变更正是为了使 FCA 交付与该 L/C 要求相调和而存在。
- 交付地点确定**最迟装运日期**以及证明装运的单据 —— 两者都是由 [[trade/letter-of-credit-documentary-mechanism|UCP 600]] 规管的跟单信用证的核心字段。

因此，Incoterms 规则应**与**付款方法一并选择。一对不匹配（例如，卖方约定 FOB 但信用证要求一份保险单据）是 L/C 不符点的经典来源，也是 [[trade/documentary-collection-vs-letter-of-credit|跟单托收]] 下所见较轻摩擦的来源。

## Incoterms 刻意省略的内容

| 问题 | 它实际所在之处 |
|---|---|
| **所有权／物权**的转移 | 销售合同与适用的财产法 —— **而非** Incoterms |
| **价格**与**付款方法** | 销售合同（及 L/C ／托收条款） |
| **违约、救济、争议解决** | 销售合同及其准据法 |
| **关税／海关关税率** | 进口方／出口方的国家海关法 |
| 超出 CIF / CIP 最低限的详细**保险条款** | 货物保单本身 —— 参见 [[insurance/marine-insurance-and-pi-cover-market|海运货物 / P&I 保险]] |

把 Incoterms 当作一份完整的贸易合同是最常见的概念错误；它们是合同所引用的**标准化模块**，而非合同本身。

## 这在公共贸易知识栈中位于何处

Incoterms 与 UCP 600 一样，是 **ICC 维护的自愿标准**，而非条约或制定法 —— 其权威来自近乎普遍的商业采用以及在销售合同中被以引用方式纳入。它们构成跨境贸易中反复出现的三联组的一脚：**交付条件（Incoterms）**、**付款机制（跟单信用证或 [[trade/documentary-collection-vs-letter-of-credit|跟单托收]]）**，以及**风险保障（货物保险加上，在融资侧，诸如 [[policy-finance/nexi-export-credit-insurance-products|NEXI 的产品]] 之类的出口信用保险）**。关于融资与保险两脚在日本具体如何组织，请经由 [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC]] 与更广泛的 [[policy-finance/INDEX|policy-finance INDEX]] 路由。

## 相关

- [[trade/INDEX|trade INDEX]]
- [[trade/letter-of-credit-documentary-mechanism|信用证 / 跟单信用证机制]]
- [[trade/documentary-collection-vs-letter-of-credit|跟单托收 vs 信用证]]
- [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC 比较]]
- [[insurance/marine-insurance-and-pi-cover-market|海运货物 / P&I 保险]]
- [[policy-finance/nexi-export-credit-insurance-products|NEXI 出口信用保险产品]]
- [[policy-finance/INDEX|policy-finance INDEX]]
- [[INDEX|FinWiki index]]

## 来源

- ICC —— Incoterms 2020: https://iccwbo.org/business-solutions/incoterms-rules/incoterms-2020/
- ICC Academy —— Incoterms 2020 vs 2010，有何变化: https://academy.iccwbo.org/incoterms/article/incoterms-2020-vs-2010-whats-changed/
- 美国商务部（trade.gov）—— Know Your Incoterms: https://www.trade.gov/know-your-incoterms
- Wikipedia —— Incoterms（规则清单与版本沿革）: https://en.wikipedia.org/wiki/Incoterms
