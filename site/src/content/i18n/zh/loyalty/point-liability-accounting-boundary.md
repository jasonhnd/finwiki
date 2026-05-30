---
source: loyalty/point-liability-accounting-boundary
source_hash: 0c88a0686e16b89a
lang: zh
status: machine
fidelity: ok
title: "积分负债会计边界（日本忠诚度计划）"
translated_at: 2026-05-30T14:48:27.668Z
---

# 积分负债会计边界（日本忠诚度计划）

## TL;DR

日本的「积分」并非单一会计概念。同一个词涵盖了（1）作为纯费用的**营销促销授予**，（2）在 IFRS 15 / ASBJ 第 29, 号公报下作为递延收入的**忠诚度负债**，（3）驱动收入最终何时确认的 **breakage 假设**，（4）跨越 [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer / prepaid boundary]] 并触发 FSA 注册的**已购预付价值**，以及（5）在运营方之间引入结算环节的**跨计划兑换积分**。将这些混为一谈是阅读日本忠诚度运营方申报文件时最常见的错误。

逐计划的覆盖见忠诚度领域中的 [[loyalty/japan-points-landscape]]，更广的 [[fintech/INDEX|fintech]] 与 [[payments/INDEX|payments]] 背景见 [[loyalty/INDEX|loyalty index]]。

## 五个会计桶

| 桶 | 触发条件 | 会计处理 | 监管层 |
|---|---|---|---|
| 营销促销成本 | 运营方发放奖励积分，无与过去销售挂钩的未来兑换义务 | 授予时费用化（促销 / 广告成本） | 通常在资金结算法之外 |
| 忠诚度负债（合约负债） | 从客户购买赚取、运营方须日后兑现的积分 | IFRS 15 下的递延收入（重大权利），或 JGAAP 下的计提负债（ASBJ 第 29 号公报框架） | JGAAP / IFRS 下的披露；若用于码支付则适用 Payments Japan 披露规范 |
| Breakage | 预期未使用余额 | 在预期兑换期内基于模式的收入确认 | 无独立登记；估算须可审计 |
| 已购 / 已充值价值 | 客户支付现金以充值余额 | 预付负债；可能成为受监管的预付式支付手段 | [[JapanFG/legal-financial-licenses/payment-license-stack|FSA prepaid issuer registry]] / 资金结算法 |
| 跨计划兑换 | 一家运营方的积分转换为另一家的 | 运营方之间的结算环节 + 负债转移 | 双边合约，有时涉及结算银行 |

## 1. 营销促销成本（无合约负债）

当一家日本运营方将「1,000 ポイント贈呈」优惠券作为某活动的一部分发放，而该活动**未**与过去的客户购买挂钩时，就不存在以过去对价为条件的可强制执行未来义务。其经济实质更接近广告：

- 授予时费用化（或当兑换概率可合理估计时）。
- 无递延收入分摊 —— 不存在可供分摊的先前履约义务。
- 在分部报告中作为客户获取成本的一部分处理。

最显著的例子是经常性的 PayPay / d払い / 楽天ペイ「100% 還元」或「5% 還元」活动。活动授予本身是促销成本，而*底层*的购买赚取积分则坐落于下文的忠诚度负债桶中。阅读 PayPay 或 Rakuten 活动披露时不分离这两层，会导致高估其有效折扣率。

## 2. IFRS 15 / ASBJ 第 29

号公报下的忠诚度负债

当客户通过消费赚取积分 —— 经典的「100円につき1ポイント」—— 日本的处理视发行方是按 JGAAP 还是 IFRS 报告而分化：

- **IFRS 15**：积分是一项**重大权利**（客户选择权）和单独的履约义务。交易价格使用相对单独售价在所售商品与所授予积分之间分摊。分摊至积分的收入作为合约负债**递延**，并在积分被兑换（或预期失效）时确认。Rakuten Group（IFRS 报告方）在分部附注中将积分相关递延收入披露于合约负债之下。
- **JGAAP / ASBJ 第 29号公报**：历史上日本确认一项**积分兑换估计负债**（「ポイント引当金」），对应分录计入 SG&A。自 FY2021 起生效的 ASBJ 第 29 号公报（「收入确认会计准则」，収益認識に関する会計基準）对上市公司而言已使 JGAAP 与 IFRS 15  大体对齐，将会计从准备金模型转向镜像 IFRS 处理的递延收入模型。许多大型运营方（AEON Financial Service、NTT docomo、JCB）围绕 FY2021 过渡重新列报了其披露。

阅读日本发行方申报文件时最有用的检验，是查看「ポイント引当金」是否仍为一个科目，抑或已迁移至「契約負債」（合约负债）。这一迁移告诉你该公司是否已完全采用收入确认模型。

## 3. Breakage 假设（递延收入何时确认）

Breakage —— 预期未使用余额 —— 驱动那些从未被兑换的积分的收入确认*时点*：

- 在 IFRS 15 与 ASBJ 第 29, 号公报之下，breakage 均按兑换模式成比例确认（而非在失效时一次性确认）。
- 预期 breakage 率须是基于历史数据的**可靠估计**；否则收入仅在进一步兑换的概率变得渺茫时才确认。
- 失效窗口较长或积分可转让的运营方须更长时间持有负债；这直接抑制近期收入。

Payments Japan 码支付披露预期（码支付发行方的行业自律框架）推动运营方以可比方式披露**兑换率、平均失效期与未结余额**，使 breakage 不被用作收入平滑的释放阀。

## 4. 已购 / 已充值价值（预付边界）

当客户支付现金充值余额 —— nanaco、WAON、Suica，或礼品卡 / 预付卡 —— 运营方跨入资金结算法的**预付式支付手段**层：

- 所收资金是预付负债，而非忠诚度负债。
- 运营方须向 FSA 注册为预付发行人（前払式支払手段発行者）—— 登记边界见 [[JapanFG/legal-financial-licenses/payment-license-stack|payment-license stack]]。
- 当未使用余额超过 10 百万日元时，适用资金结算法下的半年度**保全（资产保全）**要求。
- 若预付价值变得可现金退还或可在无关用户间自由转让，运营方可能进一步跨入**资金移动业**牌照 —— 该步骤见 [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]。

这是「积分」不再是忠诚度营销话题、而成为支付监管话题的界线。AEON（WAON）、Seven & i（nanaco）与 JR 东日本（Suica）等运营方坐落于这一侧。叠加在这些余额之上的大部分奖励积分仍是忠诚度会计，但底层已充值余额属于预付。

## 5. 跨计划兑换积分（结算环节 + 会计时点）

当积分在计划之间转换 —— Rakuten Point ↔ ANA 里程、dポイント ↔ JAL 里程、V Point ↔ 合作计划 —— 两个会计事件同时发生：

1. **负债转移**：发起运营方（按兑换比率）注销其负债，接收运营方在自身资产负债表上创建新负债。
2. **结算环节**：现金或近现金按合约约定的费率从发起运营方流向接收运营方，该费率往往低于面向消费者的兑换比率。该利差是接收运营方的获取收入，也是发起运营方的释放成本。

这之所以重要，是因为它使「未结积分负债」在运营方之间不可相加。同一日元的消费者购买力，在某次转换窗口的两个不同时刻可同时坐落于两条不同的负债科目。反滥用控制（费率上限、身份绑定、对异常转换模式的限流）叠加在这一流动之上。

## 运营方示例

| 运营方 | 负债形态 | 披露线索 |
|---|---|---|
| Rakuten Group | Rakuten Points 的 IFRS 合约负债；在合并资产负债表上规模可观 | 分部附注拆分「合约负债」并列出积分相关部分 |
| AEON Financial Service | WAON POINT 忠诚度负债 + WAON 预付负债坐落于不同科目 | AFS IR 区分忠诚度计划与预付余额；集团层面 AEON Retail 合并 WAON POINT 一侧 |
| NTT docomo / dポイント | 带电信客户队列的 dポイント 负债；在 IFRS 15 下与电信收入分摊捆绑 | NTT 年度报告披露兑换假设与递延收入分摊 |
| PayPay | PayPay 积分包含大量促销成分；活动悬置量是费用，而购买赚取积分是负债 | PayPay 与 SoftBank / LY 申报将「活动成本」与「积分负债」分离；活动成本科目往往占主导 |
| T Point → V Point（2024 统一之后，见 [[loyalty/v-point-smbc-ccc-case]]） | 负债在统一两侧坐落于发行运营方（SMBC Card / CCCMK）；旧有 T 余额按既定兑换规则迁移 | SMCC / SMFG IR 评论讨论迁移机制 |

## 这一边界为何对 JapanFG 分析重要

- 日本运营方 IR 幻灯片上一个高「积分余额」数字并不等于高*负债*。促销授予、忠诚度负债、预付余额与兑换绑定转移余额之间的拆分，决定了经济强度。
- 收购忠诚度运营方的银行或电信集团（SMBC + V Point、NTT + dポイント 合并）同时继承**负债会计与预付牌照义务**。该交易不仅是营销资产转移。
- 活动支出庞大的码支付运营方看似亏损，部分原因在于促销授予立即冲击损益，而其下的忠诚度负债层相对较小。
- 跨计划兑换创造了一个不可相加的系统。聚合的「日本积分经济」数字不应被解读为运营方报告余额之和。

## 相关

- [[loyalty/INDEX|loyalty index]]
- [[loyalty/japan-points-landscape]]
- [[loyalty/v-point-smbc-ccc-case]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[JapanFG/legal-financial-licenses/payment-license-stack|payment-license stack]]
- [[JapanFG/legal-financial-licenses/INDEX|JapanFG legal / financial licenses]]
- [[fintech/INDEX|fintech]]
- [[payments/INDEX|payments]]
- [[JapanFG/rakuten-fg|Rakuten FG]]
- [[JapanFG/aeon-bank|Aeon Bank / AFS]]
- [[JapanFG/paypay-fg|PayPay FG]]
- [[JapanFG/ndfg|NDFG]]
- [[INDEX|FinWiki index]]

## 来源

- ASBJ 第 29, 号公报「收入确认会计准则」（収益認識に関する会計基準），日本会计准则委员会。
- FSA 预付式支付手段发行人登记（前払式支払手段発行者登録一覧）。
- Payments Japan Association 码支付披露规范。
- Rakuten Group IR —— 合约负债分部附注。
- AEON Financial Service IR —— WAON POINT 与 WAON 预付披露。
- NTT docomo 年度报告 —— dポイント 会计与兑换披露。
- Vポイント公式（Vpoint.jp）—— 用于所引 SMBC / CCCMK 通用积分运营方的背景。
