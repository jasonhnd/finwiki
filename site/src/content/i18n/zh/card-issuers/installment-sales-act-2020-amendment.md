---
source: japanfg/installment-sales-act-2020-amendment
source_hash: 232696e3708817d9
lang: zh
status: machine
fidelity: ok
title: "《分期销售法》2020 年修正"
translated_at: 2026-05-31T15:29:03.934Z
---

# 《分期销售法》2020 年修正

## TL;DR

修正后的《分期销售法》是日本在 METI 监管下处理延期付款、分期信用、信用卡号处理以及商户收单边界的核心法律。2020 年修正针对信用卡、延期付款和 BNPL 的数字化趋势，创设或细化了若干层次：经认证的综合信用购买中介、登记的小额综合信用购买中介、收单 / PSP 一侧的卡号处理与商户签约控制、法定文件的电子交付，以及行政处分。

对 FinWiki 来说，关键点在于：**BNPL 并不当然等于“登记的小额综合信用购买中介”这一类别**。其监管归类取决于付款期限、信用结构、是否处理卡号、最终商户审查权限以及登记状态。公开的 METI 与关东 METI 材料在相关行政处分语境中将 Paidy 视为登记的综合信用购买中介，因此不能仅凭 BNPL 标签就推断其属于小额登记类别。

## Regime Map

| 层级 | 覆盖内容 | JapanFG 视角 |
|---|---|---|
| 分期销售 | 向消费者销售指定商品或服务，并在法定期间和付款次数以上进行分期付款 | 传统分期销售；与 BNPL 和卡收单分开 |
| 贷款附随销售 | 卖方为消费者借款提供担保，并用该借款购买商品或服务的结构 | 在区分用途贷款与信用购买中介时很重要 |
| 综合信用购买中介 | 经营者先向商户付款，之后再向消费者收款的信用卡及类似结构 | [[card-issuers/jcb]], [[card-issuers/orico]], [[card-issuers/jaccs]], [[payment-firms/paidy]] |
| 个别信用购买中介 | 面向特定商品或服务交易提供信用，包括 shopping credit | 对销售金融公司、耐用品、教育、美容等融资购买很重要 |
| 信用卡号处理签约经营者 | 与商户签订受理信用卡合同的实体；包括收单机构和部分 PSP | acquiring / PSP / merchant onboarding 监管层 |
| 信用卡号处理经营者 | 对卡号进行适当管理的实体 | PCI DSS、非留存架构与防欺诈控制 |

METI 的 FAQ 将延期付款监管整理为分期销售商、贷款附随销售商、信用购买中介、信用卡号处理经营者以及信用卡号处理签约经营者等多个层次。因此，政策设计要比一个简单的“BNPL 牌照”标签更宽。

## 2020 Amendment

METI 将此次修正解释为对小额高频延期付款服务、非金融企业进入以及互联网与智能手机支付普及的回应。此次修正为数字化、数据驱动的信用业务建立了更细颗粒度的监管框架，同时保留了防止过度授信、逾期率监控和消费者保护义务。

### 经认证的综合信用购买中介

认证路径允许经营者利用自身数据和技术进行信用审查，而不必完全依赖传统统一的综合支付能力计算。作为交换，经认证经营者必须管理预期与实际逾期率、提交定期报告，并在控制不足时承担被下达改善命令的风险。

### 登记的小额综合信用购买中介

这一登记路径旨在覆盖在法定信用额度以下提供综合信用购买中介服务的经营者，其中包括小额、高频、可通过智能手机完成的延期付款服务。它为部分类似 BNPL 的服务提供了更合理化的监管方式，但具体经营者的真实状态仍须对照 METI 当前登记名单确认。

因此，FinWiki 应区分两句话：2020 年修正确实预想了类似 BNPL 的商业模式，但除非公共登记簿明确列示，否则不能把某一具体服务提供商认定为登记的小额经营者。

### 卡号处理控制的扩大

此次修正也扩大了适用适当卡号管理义务的主体范围。支付代理、二维码支付提供商、保存或重复使用卡号的服务，以及处理卡号的延期付款服务提供商，都可能依据其角色落入监管范围。

在实践中，acquiring / PSP 边界至关重要。METI FAQ 指出，如果 PSP 在实质上获得收单机构授权，并对商户签约和商户管理拥有最终权限，则 PSP 可能需要登记。反之，如果登记的收单机构保留最终批准权，而 PSP 仅执行初步审查，则 PSP 一侧未必需要登记。

### 电子交付

修正还调整了通过智能手机和 PC 完成服务场景下的书面文件交付规则，允许对使用明细和会员条款进行一定范围的电子交付。消费者保护上的安全阀仍然重要，包括在适用时仍可请求纸质交付的通知。

### 行政处分

此次修正强化了监督工具，包括针对登记的综合信用购买中介和小额综合信用购买中介的停业命令。Paidy 行政处分相关材料表明，这一层在 BNPL 与延期付款业务中会实际适用。

## JapanFG Relevance

- BNPL / 延期付款通常涉及经营者先向商户付款、之后再向消费者收款，因此需要进行综合信用购买中介分析。
- 相关监管层会随着实体是 issuer、acquirer、network participant、PSP、merchant-contracting operator 还是 card-number handler 而变化。
- 销售金融公司可能同时横跨综合与个别信用购买中介两条线。数据驱动审查并不会消除逾期率控制、指定信用信息机构义务或防止过度授信监管。
- 这是 METI 监管下延期付款、分期信用和卡信用结构的核心牌照路径，与《银行法》《放贷业法》和《支付服务法》并列。

## Boundary Cases

| 情形 | 可能归类 | 观察点 |
|---|---|---|
| 次月一次性 BNPL | 检查期限与合同结构是否落入信用购买中介 | 法定付款期间和预付款结构比 BNPL 的 UX 标签更重要 |
| 3 期 / 6 期 / 12 期延期付款 | 更接近综合信用购买中介 | 支付能力计算、指定信用信息机构、过度授信防止义务 |
| 虚拟卡 BNPL | 可能同时被视为卡发行 / 提供与综合信用购买中介 | 卡号与信用额度控制在 Paidy 行政处分语境中是核心点 |
| PSP 执行商户审查 | 是否需要登记取决于谁拥有最终批准权限 | 收单机构与 PSP 之间合同实质 |
| 用途贷款 | 如果与销售合同有足够紧密联系，可能转为个别信用购买中介 | 卖方协作、招揽方式与一体化流程 |
| 二维码支付联动 | 卡号保存、重复使用和防欺诈义务可能变得相关 | 非留存架构、PCI DSS、EMV 3-D Secure 及相邻控制 |

## Related

- [[payments/japan-bnpl-credit-purchase-boundary|BNPL and credit-purchase boundary]]
- [[payments/credit-purchase-card-operators-japan-index|METI credit-purchase registry index]]
- [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]
- [[payment-firms/paidy|Paidy]]
- [[payment-firms/gmo-postpay|GMO Postpay]]
- [[payment-firms/net-protections-hd|Net Protections HD]]
- [[payment-firms/kuroneko-atobarai|Kuroneko deferred payment]]

## Sources

- METI, Installment Sales Act: https://www.meti.go.jp/policy/economy/consumer/credit/kappuhanbaihou.html
- METI, Installment Sales Act deferred-payment FAQ: https://www.meti.go.jp/policy/economy/consumer/credit/kappuhanbaihoatobaraibunyanogaiyofaq.html
- METI, overview of the partial amendment to the Installment Sales Act: https://www.meti.go.jp/policy/economy/consumer/credit/R2kaiseinogaiyou.pdf
- METI, average and upper-limit delinquency rates: https://www.meti.go.jp/policy/economy/consumer/credit/heikinentairituoyobijougenentairitu.html
- METI, registered operators list: https://www.meti.go.jp/policy/economy/consumer/credit/tourokujigyousyaitiran.html
- METI, registered comprehensive credit-purchase intermediaries PDF: https://www.meti.go.jp/policy/economy/consumer/credit/tourokuhoukatsuichiran.pdf
- METI, administrative actions under the Installment Sales Act: https://www.meti.go.jp/policy/economy/consumer/credit/atobaraigyouseisyobunnojoukyou.html

---

> [!info] Verification status
> confidence: **likely**. The amendment outline, small-amount registration framework, acquiring / PSP boundary, and Paidy administrative-action layer are based on public METI and Kanto METI materials. Current service-level classification for individual companies requires confirmation against contracts, registration data, and product specifications.
