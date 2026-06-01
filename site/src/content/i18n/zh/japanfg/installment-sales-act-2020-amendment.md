---
source: japanfg/installment-sales-act-2020-amendment
source_hash: 232696e3708817d9
lang: zh
status: machine
fidelity: needs_review
title: "2020年《分期付款销售法》修订"
translated_at: 2026-05-31T15:29:03.934Z
---

# 2020年《分期付款销售法》修订

## TL;DR

2020年《分期付款销售法》修订，是日本围绕信用卡、后付款、BNPL 以及数字化收单环境进行的核心制度调整。修订重点包括：认证综合信用购买中介机构、注册小额综合信用购买中介机构、支付代理 / 收单侧的卡号管理，以及书面交付的电子化。对 JapanFG 来说，这一页是理解 BNPL、信用卡发行与加盟店网络、信贩公司，以及 credit / installment 牌照层的基础法制。

关键边界是：**BNPL 并不自动等同于注册小额综合信用购买中介机构**。是否落入该类别，需要根据支付期限、代垫结构、额度、注册状态和服务实际形态判断。公开资料中，Paidy 的行政处分案例显示，BNPL / 后付款业务可能受到综合信用购买中介规则约束。

## Regime Map

| 层级 | 涵盖范围 | JapanFG 读法 |
|---|---|---|
| 分期付款销售 | 经营者向消费者销售指定商品等，并以两个月以上、三次以上的分期方式收款 | 传统分期销售；与 BNPL / card acquiring 不是同一层级 |
| 贷款协同销售 | 销售商对消费者购买资金借入承担保证的结构 | 与目的型贷款的边界需要具体判断 |
| 综合信用购买中介 | 通过信用卡等方式代垫销售价款，并在消费者端以后续期限回收 | 信用卡、BNPL、信贩和后付款业务的重要入口 |
| 个别信用购买中介 | 针对个别商品或服务的信贩 / shopping credit | 信贩公司、耐用消费品、教育、美容等分期贷款中重要 |
| 卡号等处理合同缔结业务者 | 与加盟店签订允许其处理卡交易的合同者，包括收单机构和部分 PSP | acquiring / PSP / merchant onboarding 的监管层 |
| 卡号等处理业务者 | 对卡号等承担适当管理义务的主体 | PCI DSS、非保持化、防止不正当使用 |

METI FAQ 将后付款领域的监管对象整理为分期付款销售业者、贷款协同销售业者、信用购买中介业者、卡号等处理业务者，以及卡号等处理合同缔结业务者。实务上，应先识别交易到底是“销售分期”“信用购买中介”“收单 / PSP”还是“卡号处理”，再判断牌照和登记义务。

## 2020 Amendment

METI 将修订背景说明为：小额且高频的后付款服务增加，异业种企业进入后付款领域，以及通过互联网和智能手机终端进行的支付持续扩大。修订的制度目的，是在维持过度授信防止、卡号安全和消费者保护的同时，为数字化信用和后付款服务提供更具弹性的监管路径。

### 1. 认证综合信用购买中介机构

修订允许在一定条件下，用经营者自身的授信审查方法替代传统统一的“综合支付能力预计额调查”。认证经营者可以使用自有数据和技术进行授信，但也承担预期逾期率、实际逾期率管理、定期报告以及改善命令风险。

### 2. 注册小额综合信用购买中介机构

对于额度在法定上限以下的综合信用购买中介业务，修订设置了登记制度，意图覆盖 BNPL 等“小额、高频、手机完结”的后付款服务。公开登记列表的时点口径需要逐项核对；不能仅因为服务被市场称为 BNPL，就直接推定其属于注册小额综合信用购买中介机构。

因此，阅读 Paidy 等个案时，应区分两句话：一是 2020 年修订确实考虑了 BNPL 及后付款数字化；二是具体公司是否属于注册小额类别，必须依据 METI 登记、行政处分文书和服务结构确认。公开行政处分资料中，Paidy 被作为注册综合信用购买中介机构处理。

### 3. 卡号管理主体扩大

修订还扩大了卡号等适当管理义务的主体。支付代理商、代码支付运营商、保存并再利用卡号的服务，以及在后付款支付中提供卡号的业务，都可能进入监管范围。

实务上，acquiring / PSP 的边界尤其重要。METI FAQ 指出，如果 PSP 从收单机构获得实质授权，并对加盟店合同的最终决定和加盟店管理具有实质权限，PSP 侧可能需要登记。相反，如果 PSP 只进行一次审查，而最终判断仍由登记收单机构保留，则 PSP 侧登记义务可能不同。

### 4. 电子化

为配合智能手机和电脑完结型服务，修订方向允许利用明细、会员规则等以电子方式提供，并调整书面交付规则。但出于数字鸿沟保护，需要告知消费者仍可请求书面交付等事项。

### 5. 行政处分

对注册综合信用购买中介机构和注册小额综合信用购买中介机构，制度整备了业务停止命令等监督手段。Paidy 的改善命令案例显示，该监管层实际可以作用于 BNPL / 后付款经营者，特别是在综合支付能力预计额调查、额度管理和过度授信防止义务存在缺陷时。

## JapanFG Relevance

- 对 BNPL / 后付款业务，核心不是市场营销名称，而是是否存在代垫销售价款并以后续期限向消费者回收的结构。
- 对 issuer / acquirer / network / PSP，需要区分综合信用购买中介、卡号等处理合同缔结业务者和卡号等处理业务者等不同层。
- 信贩公司可能同时涉及综合信用购买中介和个别信用购买中介。数据驱动授信扩大了商业空间，但逾期率、指定信用信息机构和过度授信防止仍是监管核心。
- 该法制与银行法、贷金业法、资金决算法并列，是后付款、installment 和 card credit 牌照判断的中枢。它不是贷款本身的规则，而是围绕代垫、信用购买中介和卡号处理的监管框架。

## Boundary Cases

| 案例 | 可能处理 | 关注点 |
|---|---|---|
| 次月一次性 BNPL | 视期限和合同形态，确认是否属于以后续期限回收的信用购买中介 | 不看“BNPL”名称或 UX，而看法定支付期限和代垫结构 |
| 三期 / 六期 / 十二期后付款 | 更接近综合信用购买中介 | 支付能力预计额、指定信用信息机构、过度授信防止 |
| 虚拟卡型 BNPL | 可能作为卡等交付 / 赋予而进入综合信用购买中介监管 | Paidy 案例中，卡等额度管理是问题点之一 |
| PSP 代行加盟店审查 | 登记要否取决于最终决定权限归属 | 收单机构与 PSP 的合同实质 |
| 目的型贷款 | 即使是金钱消费借贷，如果与销售合同存在紧密牵连，也可能进入个别信用购买中介判断 | 与销售店的合作、勧诱、手续一体性 |
| 代码支付联动 | 卡号保存、联动和不正当使用防止义务可能成为问题 | 非保持化、PCI DSS、EMV 3-D Secure 等 |

## Related

- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/card-acquiring-japan-stack]]
- [[JapanFG/paidy]]
- [[JapanFG/visa-worldwide-japan]]
- [[JapanFG/jcb]]

## Sources

- METI, Installment Sales Act overview: https://www.meti.go.jp/policy/economy/consumer/credit/kappuhanbaihou.html
- METI, Installment Sales Act after-payment overview and FAQ: https://www.meti.go.jp/policy/economy/consumer/credit/kappuhanbaihoatobaraibunyanogaiyofaq.html
- METI, outline of the amendment to the Installment Sales Act: https://www.meti.go.jp/policy/economy/consumer/credit/
- METI, publication of average delinquency rate and upper-limit delinquency rate: https://www.meti.go.jp/policy/economy/consumer/credit/
- METI, registered operators list: https://www.meti.go.jp/policy/economy/consumer/credit/
- METI, registered comprehensive credit purchase intermediary list PDF: https://www.meti.go.jp/policy/economy/consumer/credit/tourokuhoukatsuichiran.pdf
- METI, administrative dispositions under the Installment Sales Act in the after-payment credit area: https://www.meti.go.jp/policy/economy/consumer/credit/atobaraigyouseisyobunnojoukyou.html

---

> [!info] 校核状态
> confidence: **likely**。2020 年修订的骨子、数字化后付款背景、小额登记制度、acquiring / PSP 边界，以及 Paidy 行政处分层，均按 METI 和关东经济产业局公开资料整理。个别企业当前服务的具体适用性，需要逐项核对合同、登记信息和服务仕様。
