---
source: card-issuers/installment-sales-act-2020-amendment
source_hash: 04e6be00f953cc71
lang: zh
status: machine
fidelity: ok
title: "分期付款销售法 2020  修订"
translated_at: 2026-06-18T23:33:48.319Z
---

# 分期付款销售法 2020  修订

## TL;DR

2020年 修订的分期付款销售法（令和2年 法律 第64号）是配合信用卡 / 后付 / BNPL 的数字化，整备了 (1) 认定综合信用购买斡旋业者、(2) 登记小额综合信用购买斡旋业者、(3) 结算代理·收单侧的卡号管理、(4) 书面交付的电子化、(5) 业务停止命令的一次修订。

在 JapanFG 中，这是阅读 [[payment-firms/paidy]] 这类 BNPL、[[card-issuers/jcb]] 这类发卡·特约商户网络、[[card-issuers/orico]] / [[card-issuers/jaccs]] 这类信贩公司，以及 [[financial-licenses/INDEX]] 的 credit / installment 牌照层的基础法制。一个重要的边界是：**BNPL ≠ 自动成为登记小额综合信用购买斡旋业者**。在 METI 的登记业者一览中，截至 令和8年4月 末时点，登记小额综合信用购买斡旋业者为 0 社，而 Paidy 在 2024年 的行政处分资料上，被作为登记综合信用购买斡旋业者（关东（综合）第122号）处理。

## Regime Map

| Layer | What it covers | JapanFG reading |
|---|---|---|
| 割賦販売（分期付款销售） | 业者以 2 个月以上且 3 次以上的分期付款向消费者销售指定商品等的交易 | 传统的分期销售。与 BNPL / card acquiring 属于不同层 |
| ローン提携販売（贷款合作销售） | 由销售业者等对商品购买资金的借入予以担保的结构 | 与目的贷款的边界成为问题 |
| 包括信用購入あっせん（综合信用购买斡旋） | 以信用卡等垫付销售款，并从消费者处以超过 2 个月回收的业务 | [[card-issuers/jcb]], [[card-issuers/orico]], [[card-issuers/jaccs]], [[payment-firms/paidy]] |
| 個別信用購入あっせん（个别信用购买斡旋） | 按个别商品·服务进行的信贩 / 购物信用 | 在信贩公司·耐用消费品·教育 / 美容等贷款中重要 |
| クレジットカード番号等取扱契約締結事業者（缔结信用卡号等处理合约的业者） | 与特约商户缔结准许处理卡片的合约者。收单方及部分 PSP | acquiring / PSP / merchant onboarding 的监管层面 |
| カード番号等取扱業者（卡号等处理业者） | 负有适当管理卡号等义务的主体 | PCI DSS、不留存、防止盗用 |

METI FAQ 将后付领域的监管对象整理为「分期付款销售业者」「贷款合作销售业者」「信用购买斡旋业者」「信用卡号等处理业者」「缔结信用卡号等处理合约的业者」。

## 2020  Amendment

METI 将 2020年 修订的背景说明为「小额且多频次的后付服务」「异业种企业进入后付」「通过互联网及智能手机终端的结算扩大」。公布为 2020-06-24，施行为 2021-04-01。

### 1. 认定综合信用购买斡旋业者

代替以往划一的「综合可支付预估额调查」，按业者使用各自授信审查手法的特例。认定业者一方面可使用自有数据与技术，另一方面需承担预想拖欠率·实绩拖欠率的管理、定期报告以及改善命令风险。

### 2. 登记小额综合信用购买斡旋业者

面向经营极度额 10万円 以下的综合信用购买斡旋业务的业者的登记制度。虽然以 BNPL 这类「小额·多频次·智能手机完结」的后付服务为设想而进行了监管合理化，但在截至 2026-04 末的 METI 登记业者一览中，该类别的登记业者为 0 社。

因此，阅读 [[payment-firms/paidy]] 时需要将「2020 修订创设了意识到 BNPL 的制度」与「Paidy 现实上是登记小额业者」加以区分。至少在 2024-10-03 的关东经济产业局资料中，Paidy 是作为登记综合信用购买斡旋业者受到行政处分的。

### 3. 卡号等管理主体的扩大

2020 修订还扩大了适当管理卡号等义务的主体。结算代理业者、码结算业者、保存·再利用卡号的服务、在后付结算中提供卡号的业者等都可能成为对象。

实务上 acquiring / PSP 的边界很重要。METI FAQ 说明：当 PSP 获收单方综合授权，并持有对特约商户合约实质性的最终决定权限及特约商户管理时，需在 PSP 侧进行登记。另一方面，当仅由 PSP 进行初次审查、而由登记收单方保留最终判断时，PSP 侧的登记可能变为无需。

### 4. 电子化

配合智能手机·个人电脑完结型服务，书面交付监管朝着准许使用明细、会员规约等的电子提供方向作了调整。但出于对数字鸿沟的考虑，需告知可请求书面交付等事项。

### 5. 行政处分

针对登记综合信用购买斡旋业者及登记小额综合信用购买斡旋业者，整备了业务停止命令等监督手段。对 Paidy 的 2024-10-03 改善命令，是表明这一层实际对 BNPL / 后付业者生效的案例。

## JapanFG Relevance

- [[payment-firms/paidy]]：由于 BNPL / 后付具有垫付商品款项、并从消费者处于日后回收的结构，需要对综合信用购买斡旋进行监管分析。在 2024年 行政处分中，综合可支付预估额调查·防止过度授信义务的运用不足成为问题。
- [[card-issuers/jcb]]：视持有 issuer / acquirer / network 中的哪一职能，综合信用购买斡旋业者、缔结卡号等处理合约的业者、卡号等处理业者等多个层会发生重叠。
- [[card-issuers/orico]] / [[card-issuers/jaccs]]：信贩公司容易兼具综合·个别信用购买斡旋两面。2020 修订拓宽了 AI / data-driven 授信的余地，但对拖欠率·指定信用信息机构·防止过度授信的监督仍然存在。
- [[financial-licenses/INDEX]]：与银行法、贷金业法、资金结算法并列的「后付 / installment / card credit」牌照的核心。在被构成为并非贷款、而是垫付·信用购买斡旋的情形下，不仅金融厅，METI 的管辖也会走到前面。

## Boundary Cases

| Case | Likely treatment | Watch point |
|---|---|---|
| 次月一次性 BNPL | 视期间·合约形态而定。确认是否属于以超过 2 个月回收的信用购买斡旋 | 看法律上的支付期间·垫付结构，而非「BNPL」这一商标·UX |
| 3 期 / 6 期 / 12 期 后付 | 接近综合信用购买斡旋 | 可支付预估额、指定信用信息机构、防止过度授信 |
| 虚拟卡型 BNPL | 容易作为卡片等的交付 / 给付而落入综合信用购买斡旋监管 | 在 Paidy 行政处分中，卡片等的极度额管理成为问题 |
| PSP 代行特约商户审查 | 视最终决定权限在谁，登记的需否会发生变化 | 收单方与 PSP 的合约实态 |
| 目的贷款 | 即便是金钱消费借贷，若与销售合约存在密切牵连性，也可能成为个别信用购买斡旋 | 与销售店的合作、劝诱、手续一体性 |
| 码结算联动 | 卡号等的保存·联动·防止盗用义务成为问题 | 不留存、PCI DSS、EMV 3-D 安全等 |

## Related

- [[payment-firms/paidy]]
- [[card-issuers/jcb]]
- [[card-issuers/orico]]
- [[card-issuers/jaccs]]
- [[card-issuers/credit-saison]]
- [[payment-firms/bnpl-landscape]]
- [[financial-licenses/INDEX]]

## Sources

- METI, 割賦販売法: https://www.meti.go.jp/policy/economy/consumer/credit/11kappuhanbaihou.html
- METI, 割賦販売法（後払分野）の概要・FAQ: https://www.meti.go.jp/policy/economy/consumer/credit/kappuhanbaihoatobaraibunyanogaiyofaq.html
- METI, 割賦販売法の一部を改正する法律について（令和2年 法律 第64号）: https://www.meti.go.jp/policy/economy/consumer/credit/R2kaiseinogaiyou.pdf
- METI, 「平均延滞率」及び「上限延滞率」の公表: https://www.meti.go.jp/policy/economy/consumer/credit/210414heikinentairituoyobijougenentairitu.html
- METI, 登録事業者一覧: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
- METI, 登録包括信用購入あっせん業者一覧 PDF: https://www.meti.go.jp/policy/economy/consumer/credit/tourokuhoukatsuichiran.pdf
- METI, 割賦販売法に基づく行政処分の状況（後払信用）: https://www.meti.go.jp/policy/economy/consumer/credit/atobaraigyouseisyobunnojoukyou.html
- Kanto METI / METI, 登録包括信用購入あっせん業者（株式会社Paidy）に対する行政処分 2024-10-03: https://www.meti.go.jp/policy/economy/consumer/credit/20241003.pdf

---

> [!info] 校核状态
> confidence: **likely**（2026-05-19）。2020 修订的骨架、施行日、小额登记制度、acquiring / PSP 边界、Paidy 行政处分均已在 METI / 关东经济产业局资料中确认。个别企业的现行服务逐项的该当性，需追加确认约款·登记信息·服务规格。
