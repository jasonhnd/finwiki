---
source: loyalty/d-point-detailed-ecosystem
source_hash: c43a2c0479e6f635
lang: zh
status: machine
fidelity: ok
title: "d Point 详细生态（NTT docomo）—— 累积机制、d Card / d払い 融合、2025 改革"
translated_at: 2026-05-30T14:48:27.662Z
---

# d Point 详细生态（NTT docomo）—— 累积机制、d Card / d払い 融合、2025 改革

## Wiki 路由

本条目归于 [[loyalty/INDEX|loyalty index]]，作为 dポイント 的**运营商深度页面**，与 [[loyalty/d-point-au-kddi-docomo-telco-point-consolidation|d Point / au telco-point consolidation case]]（电信锚点比较视角）、[[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]]（以银行为锚的对照）、[[loyalty/japan-points-landscape|Japan points and loyalty landscape]]（生态地图）、[[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]（IFRS-15 处理）、[[payments/japan-code-payment-operator-2025-market-share-matrix|Japan code-payment operator 2025 market share matrix]]（钱包层叠加视图）、[[JapanFG/ndfg|NDFG]]（母公司金融控股结构）以及 [[retail/lawson-mitsubishi-corporation-tie-up-2024-deep|Lawson + Mitsubishi 2024 tie-up]]（争夺性零售锚点的对应物）配合阅读。

## TL;DR

**dポイント** 是 NTT docomo 在 **dポイントクラブ** 伞下运营的开放型通用积分计划。活跃 **d-account ID 基数超过 100 百万**（NTT docomo 公开披露），使其与 Rakuten Points 及 PayPay Points 并列为日本三大通用积分生态之一。dポイント 的战略角色是充当**计划性 [[JapanFG/ndfg|NDFG (NTT docomo financial group)]] 合并的前端货币**，将移动线路订户绑定到 d払い（QR 支付）、d Card / d Card GOLD（信用卡）、d-account 银行合作方、dスマートバンク（数字银行品牌），以及未来由 NDFG 包裹的证券 / 保险 / 信托子公司。**2025 dポイントクラブ 改革**（于 2024-Q4, 公布，分阶段贯穿 2025-2026推出）将等级体系（4级「ランク」）围绕 d払い 使用频率而非纯粹的积分累积重构，实质性地将累积经济学转向钱包活动。IFRS 15 下的会计处理将积分赚取负债计入递延收入并估算 breakage，且 2021 ASBJ 第 29 号公报采用后已完全反映在 NTT docomo 年度报告的合约负债披露中。

## d-account、dポイントクラブ 与会员规模

**d-account** 是 NTT docomo 的通用客户 ID。它起源于移动线路订户的 docomo ID，但自 2015 前后（当 dポイント 由旧有的「docomo Premier Club」计划品牌重塑时）起向非 docomo 用户（无 docomo 移动合约的一般消费者）开放。当前结构：

| 身份层 | 角色 | 规模 |
|---|---|---|
| **d-account** | docomo、dポイント、d払い、d Card、d-account 银行合作方的通用 ID | 100M+ 账户（NTT docomo 公开披露） |
| **dポイントクラブ** | 决定累积率与权益的忠诚度计划等级载体 | 所有 d-account 持有者自动注册为会员 |
| **d Card 会員** | d-account 的信用卡子集，由 NTT docomo 发行 | 数千万；d-account 的子集 |
| **d Card GOLD 会員** | 在 docomo 账单上具备乘数权益的金卡身份信用卡 | 数百万；高 ARPU 层 |
| **d払い 会員** | 栖身于 d-account 之上的 QR 支付钱包会员 | 数千万 MAU；见 [[payments/japan-code-payment-operator-2025-market-share-matrix|code-payment 2025 share matrix]] |

会员漏斗在 d-account 层最宽，向 d Card GOLD 收窄，每一层提供逐步更高的金融产品附着。

## 2025 dポイントクラブ 改革 —— 等级体系大修

于 2024-Q4 公布并分阶段贯穿 2025-2026 推出的 **dポイントクラブ 等级改革**，是自 2015 品牌重塑以来对 dポイント 累积经济学最重大的改变。公开材料描述了一个决定奖励累积的 **4级等级体系**：

| 等级层 | 此前（2025之前）基准 | 新（2025-）基准 |
|---|---|---|
| 顶层（★★★★） | 纯 6个月积分累积阈值 | 综合 d払い 使用 + d Card 消费 + dポイント 累积；更重 d払い 频率权重 |
| 中上（★★★） | 相同 | 阈值更低的综合指标 |
| 中下（★★） | 相同 | 阈值更低的综合指标 |
| 基础（★） | 默认注册 | 默认注册 |

经济意图是**奖励 d払い 活动**而非被动的积分累积，加速那些历史上通过 d Card 消费或 docomo 账单支付赚取积分而不使用 d払い 的旧有 dポイント 持有者的钱包采用。这与 NTT docomo 在码支付矩阵中扩大 d払い 市场份额、对抗 [[JapanFG/paypay|PayPay]] 与 楽天ペイ 的战略优先一致 —— 见 [[payments/japan-code-payment-operator-2025-market-share-matrix|2025 code-payment market share matrix]]。

该改革还调整了**保留余额失效规则**（滚动 48个月规则而非固定日期失效），并引入了**与特定 d払い 商户类别挂钩的奖励乘数活动**。

## docomo 服务 vs 合作商户的累积率

**标准累积率** 1% 广泛适用，但有效率因界面而显著不同：

| 赚取界面 | 标准累积 | 含 d Card | 含 d Card GOLD | 备注 |
|---|---|---|---|---|
| docomo 移动账单 | 1%（由 d Card 支付） | docomo 账单上 1% 基础 + 10% 奖励 | docomo 账单上 1% 基础 + 10% 奖励 | docomo 账单上的 d Card GOLD 奖励是持有者证明 ¥11,000/年 年费合理的结构性原因 |
| Hikari 网络账单 | 1% | 可变 | 可变 | 与移动线路折扣捆绑 |
| d払い 码支付 | 0.5%（默认） | 1% | 1.5% | 改革期活动推高名义率 |
| d Card 信用卡消费 | 1% | 1% | 1%（+ 类别奖励） | 标准信用卡回馈 |
| 旗舰合作商户（Lawson、麦当劳、松本清、ENEOS） | 扫码 1% + 可变奖励 | 若使用则与 d Card 消费叠加 | 叠加 | 合作方出资的奖励活动常见 |
| 联盟合作方（ベイシア、ヤマダデンキ 等） | 扫码 1% | 叠加 | 叠加 | 较低频率的合作网络 |
| 经 d払い 的非合作商户 | 0.5-1.5% | 叠加 | 叠加 | 仅受理 —— 无扫码赚取 |

经济含义是：持有 d Card GOLD 并在旗舰合作方使用 d払い 的 docomo 订户，在合并消费类别上可达到 **3-5%+ 的有效累积率**，这实质性高于 PayPay 与 Rakuten Pay 默认提供的 1% 基线。这解释了为何 d Card GOLD 在重度消费的 docomo 订户中留存率高。

## d Card GOLD —— 金卡身份门槛与经济学

**d Card GOLD** 是 NTT docomo 的高级信用卡层，年费 ¥11,000 （税込）。该费用的结构性正当性：

| 权益 | 近似经济价值 |
|---|---|
| docomo 移动 + ひかり 账单 10% 奖励积分 | 对每月 docomo + ひかり 消费 ¥8,000+ 的家庭有实质意义（¥80/月 奖励 = ¥960/年；对每月合计 ¥15,000，约 ¥1,800/年 奖励） |
| 免费旅行保险（海外 / 国内） | 可变；与中间层金卡相当 |
| 机场贵宾室准入（国内主要空港） | 可变；与中间层金卡相当 |
| ケータイ補償（¥100,000级别保障） | 若移动设备损坏则有实质意义 |
| dポイント 奖励活动 | 可与类别累积叠加 |

经济盈亏平衡门槛对一般家庭约为**每月 ¥8,000-10,000 的 docomo + ひかり 合计消费**，低于此则年费超过账单奖励价值。NTT docomo 的 d Card GOLD 会员基础反映了这一细分 —— 集中于拥有多条线路与捆绑服务的高 ARPU 家庭。

## d払い 融合 —— 钱包、卡与账单支付

**d払い**（d-barai）是 NTT docomo 的 QR 支付钱包，于 2018推出。与 dポイント 的融合模式：

| 功能 | d払い |
|---|---|
| 资金来源 | d Card 直接充值、银行账户直接充值、便利店充值、dポイント直接使用 |
| 身份 | d-account（与 dポイント 相同） |
| 结算 | 通过 docomo 运营商或已注册支付方式直接计费 |
| 忠诚度层 | dポイント 自动累积，0.5-1.5%（依等级与活动） |
| 商户受理 | 兼容 JPQR；部署于主线零售、餐厅、自动售货 |

d払い 的战略角色是提供一个**将积分累积绑定到高频低客单消费的钱包界面** —— 这是纯信用卡经济学难以低成本服务的类别。2025 dポイントクラブ 等级改革明确提高了 d払い 频率在等级决定指标中的权重，加速钱包采用。

d払い 的牌照结构视情形归于 **第三者型前払式支払手段**（第三方型预付式支付手段）与 **資金移動業（资金移动业）** 双重注册 —— 结构性处理见 [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]。

## 会计确认时点 —— IFRS 15 合约负债

NTT docomo 按 IFRS 报告，dポイント 负债在「material right（重大权利）」框架下被作为**合约负债**（IFRS 15下的递延收入）处理。确认模式：

| 事件 | 会计处理 |
|---|---|
| 赚取积分的客户购买 | 在商品/服务与所授予积分之间分摊交易价格（使用单独售价）；将积分部分确认为合约负债 |
| 客户兑换积分 | 将相应递延收入释放为已确认收入 |
| 积分失效或确认 breakage | 基于预期兑换模式（与实际兑换成比例）释放相应递延收入 |
| 活动授予积分（无底层客户购买） | 在授予时作为促销 / 营销费用处理 |

NTT docomo 的年度报告包含将电信收入递延金额与 dポイント 负债合并的合约负债披露。breakage 假设每年基于历史兑换模式审视。更广泛的处理见 [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]，其涵盖「积分」可能落入的五个会计桶。

## 联盟合作网络 —— Lawson 之争及其他

dポイント 合作商户网络建立在与主要零售商的双边协议之上。最具争议的合作方是 **Lawson**，其历史上同时提供 Pontaポイント（KDDI / Loyalty Marketing）与 dポイント 累积 —— KDDI 与三菱的 2024 私有化之后的战略洗牌见 [[retail/lawson-mitsubishi-corporation-tie-up-2024-deep|Lawson + Mitsubishi 2024 deep tie-up]]。其他旗舰合作方：

| 合作方 | 类别 | dポイント 角色 |
|---|---|---|
| Lawson | 便利店 | 扫码赚取；在 2024 KDDI 持股后与 Pontaポイント 争夺 |
| 麦当劳 | QSR | 扫码赚取；活动密集 |
| 松本清 | 药妆店 | 扫码赚取；d払い 奖励的活动类别 |
| ENEOS | 燃油 | 在 SS 扫码赚取 |
| Tower Records、タワレコ | 专业零售 | 扫码赚取 |
| ベイシア、ヤマダデンキ、ジョーシン | GMS / 消费电子 | 参与情况可变 |
| マクドナルド・スターバックス | QSR | 可变；轮换活动 |

联盟经济学的运作方式与 au PAY ポイント / Pontaポイント 相同：合作商户为其自身的发行与兑换出资，NTT docomo 与合作方之间定期净额结算。合作方参与的经济逻辑是以合作方出资的积分成本换取**增量客流与篮子规模**。

## 竞争定位

| 通用积分 | 锚点 | 活跃会员 ID | 最强渠道 | d Point 的相对位置 |
|---|---|---|---|---|
| dポイント | NTT docomo 电信 | 100M+ | docomo 账单、d Card GOLD 乘数、Lawson / 麦当劳 | 参照 |
| au PAY ポイント（旧 Ponta） | KDDI au 电信 + Recruit / 三菱 联盟 | 100M+ | Lawson（KDDI 之后）、Recruit 生态（じゃらん、Hot Pepper） | 直接电信同类；Ponta 合并为 au 提供更广非电信界面 |
| V Point | SMBC + CCCMK | 130M+ 统一 | SMBC Olive、SMBC Card、T-card 遗留网络 | 以银行为锚；电信数据图谱较弱 |
| Rakuten Points | Rakuten EC + 卡 + 银行 + 移动 | 数千万活跃 | Rakuten EC、Rakuten Card、Rakuten Mobile | 以电商为锚；在线长尾更强 |
| PayPay Points | SoftBank / LY / PayPay app | 70M+ 钱包用户 | PayPay QR app、活动、PayPay Card | 以钱包为锚；活动驱动 |
| WAON POINT | AEON 集团 | 数千万 | AEON 门店、WAON、AEON Card | 零售集团内部 |
| nanaco point | Seven & i | 数千万 | 7-Eleven、Ito-Yokado、nanaco | 零售集团内部 |

dポイント 最直接的同类是 **au PAY ポイント** —— 两者皆为以电信为锚的通用积分，以移动线路订户基础为核心护城河，并以志在打造的超级 app 金融捆绑为终局。最重要的对照是作为以银行为锚的替代、具备不同客户获取漏斗的 **V Point**。

## 相关

- [[loyalty/INDEX|loyalty index]]
- [[loyalty/d-point-au-kddi-docomo-telco-point-consolidation|d Point / au telco-point consolidation case]]
- [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]]
- [[loyalty/japan-points-landscape|Japan points and loyalty landscape]]
- [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]
- [[loyalty/t-point-v-point-post-2024-merger|T-Point + V-Point post-2024 merger detail]]
- [[loyalty/ponta-points-deep-dive|Ponta points deep dive]]
- [[loyalty/sb-yahoo-paypay-points-unified-ecosystem|SB/Yahoo/PayPay unified points]]
- [[JapanFG/ndfg|NDFG (NTT docomo financial group)]]
- [[JapanFG/paypay|PayPay]]
- [[JapanFG/paypay-fg|PayPay FG]]
- [[JapanFG/rakuten-fg|Rakuten FG]]
- [[JapanFG/au-fh|au Financial Holdings]]
- [[JapanFG/au-payment|au Payment]]
- [[payments/japan-code-payment-operator-2025-market-share-matrix|Japan code-payment operator 2025 market share matrix]]
- [[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]]
- [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]
- [[retail/lawson-mitsubishi-corporation-tie-up-2024-deep|Lawson + Mitsubishi 2024 deep tie-up]]
- [[retail/INDEX|retail index]]
- [[INDEX|FinWiki index]]

## 来源

- dポイントクラブ 官方网站：https://dpoint.docomo.ne.jp/club/
- dポイント 官方网站：https://dpoint.docomo.ne.jp/
- d Card 官方网站：https://dcard.docomo.ne.jp/
- d払い 官方网站：https://service.smt.docomo.ne.jp/keitai_payment/
- NTT docomo 新闻稿（dポイントクラブ 改革公告）：https://www.docomo.ne.jp/info/news_release/
- NTT docomo IR 资料库（年度报告合约负债披露）：https://www.docomo.ne.jp/corporate/ir/library/
- Cashless Promotion Council 出版物（码支付趋势）：https://paymentsjapan.or.jp/category/publications/
