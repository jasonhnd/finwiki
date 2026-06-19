---
source: loyalty/d-point-detailed-ecosystem
source_hash: 3d21aff8d80be53b
lang: zh
status: machine
fidelity: ok
title: "d Point detailed ecosystem (NTT docomo) — 累积机制、d Card / d払い 的融合、2025 改革"
translated_at: 2026-06-19T06:09:18.042Z
---

# d Point detailed ecosystem (NTT docomo) — 累积机制、d Card / d払い 的融合、2025 改革

## Wiki 路径

本词条归属于 [[loyalty/INDEX|loyalty index]]，是 dポイント 的 **operator-deep 页面**，与 [[loyalty/d-point-au-kddi-docomo-telco-point-consolidation|d Point / au telco-point consolidation case]] 配对用于电信锚点比较视角，与 [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]] 用于银行锚点对比，与 [[loyalty/japan-points-landscape|Japan points and loyalty landscape]] 用于生态系统地图，与 [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]] 用于 IFRS 15 处理，与 [[payments/japan-code-payment-operator-2025-market-share-matrix|Japan code-payment operator 2025 market share matrix]] 用于钱包层叠加，与 [[megabanks/ndfg|NDFG]] 用于母公司金融控股结构，与 [[retail/lawson-mitsubishi-corporation-tie-up-2024-deep|Lawson + Mitsubishi 2024 tie-up]] 用于存在争议的零售锚点对应物。

## TL;DR

**dポイント** 是 NTT docomo 在 **dポイントクラブ** 旗下运营的开放型通用积分计划。活跃 **d 账户 ID 基数超过 100 百万**（NTT docomo 公开披露），使其成为与乐天积分及 PayPay 积分并列的日本三大通用积分生态之一。dポイント 的战略角色是充当 **计划中的 [[megabanks/ndfg|NDFG (NTT docomo financial group)]] 整合的前端货币**，将移动线路签约用户绑定到 d払い（QR 支付）、d Card / d Card GOLD（信用）、d 账户银行合作伙伴、dスマートバンク（数字银行品牌），以及未来纳入 NDFG 的证券／保险／信托子公司。**2025 dポイントクラブ 改革**（于 2024-Q4, 公布，在 2025-2026期间分阶段推出）围绕 d払い 使用频率而非纯粹的积分累积重构了等级制度（4级「ランク」），将累积经济性实质性地转向钱包活动。在 IFRS 15 下的会计处理将积分获得负债连同 breakage 估计计入递延收入，而 2021 之后采用的 ASBJ 第 29 号准则已完全反映在 NTT docomo 年度报告的合同负债披露中。

## d 账户、dポイントクラブ 与会员规模

**d 账户** 是 NTT docomo 的通用客户 ID。它起源于面向移动线路签约用户的 docomo ID，但自 dポイント 从旧有的「docomo Premier Club」计划重新品牌化的 2015 前后起，向非 docomo 用户（没有 docomo 移动合约的一般消费者）开放。当前结构：

| 身份层 | 角色 | 规模 |
|---|---|---|
| **d 账户** | docomo、dポイント、d払い、d Card、d 账户银行合作伙伴的通用 ID | 100M+ 账户（NTT docomo 公开披露） |
| **dポイントクラブ** | 决定累积率与权益的忠诚度计划等级包装层 | 所有 d 账户持有者均自动注册为会员 |
| **d Card 会員** | NTT docomo 发行的 d 账户信用卡子公司 | 数千万；d 账户的子集 |
| **d Card GOLD 会員** | 对 docomo 账单具有倍率权益的金卡级别信用卡 | 数百万；高 ARPU 级别 |
| **d払い 会員** | 位于 d 账户之上的 QR 支付钱包会员 | 数千万 MAU；参见 [[payments/japan-code-payment-operator-2025-market-share-matrix|code-payment 2025 share matrix]] |

会员漏斗在 d 账户层扩展，向 d Card GOLD 收窄，每一级提供逐步更高的金融产品附着。

## 2025 dポイントクラブ 改革 — 等级制度大改

**于 2024-Q4 公布并在 2025-2026 期间分阶段推出的 dポイントクラブ 等级改革** 是自 2015 品牌重塑以来对 dポイント 累积经济性最重要的变更。公开资料描述了决定奖励累积的 **4级等级制度**：

| 等级 | 此前（2025之前）基准 | 新（2025-）基准 |
|---|---|---|
| 顶级 (★★★★) | 纯粹的 6个月积分累积门槛 | d払い 使用 + d Card 消费 + dポイント 累积的组合；对 d払い 频率更重加权 |
| 中上 (★★★) | 同上 | 门槛更低的组合指标 |
| 中下 (★★) | 同上 | 门槛更低的组合指标 |
| 基础 (★) | 默认注册 | 默认注册 |

经济意图是 **奖励 d払い 活动** 而非被动的积分累积，在历来通过 d Card 消费或 docomo 账单支付获得积分但不使用 d払い 的旧有 dポイント 持有者中加速钱包采用。这与 NTT docomo 在码支付矩阵中针对 [[payment-firms/paypay|PayPay]] 与 楽天ペイ 扩大 d払い 市场份额的战略优先事项相一致 — 参见 [[payments/japan-code-payment-operator-2025-market-share-matrix|2025 code-payment market share matrix]]。

该改革还调整了 **留存余额到期规则**（滚动 48个月规则而非固定日到期），并引入了 **与特定 d払い 加盟店类别挂钩的奖励倍率活动**。

## docomo 服务 vs 合作加盟店的累积率

1% 的 **标准累积率** 广泛适用，但实效率因界面而异显著：

| 累积界面 | 标准累积 | 含 d Card | 含 d Card GOLD | 备注 |
|---|---|---|---|---|
| docomo 移动账单 | 1%（由 d Card 支付） | docomo 账单上 1% 基础 + 10% 奖励 | docomo 账单上 1% 基础 + 10% 奖励 | docomo 账单上的 d Card GOLD 奖励是持有者为 ¥11,000/年 年费正名的结构性理由 |
| 光纤网络账单 | 1% | 可变 | 可变 | 与移动线路折扣捆绑 |
| d払い 码支付 | 0.5%（默认） | 1% | 1.5% | 改革期活动推高标称费率 |
| d Card 信用卡消费 | 1% | 1% | 1%（+ 类别奖励） | 标准信用卡奖励 |
| 旗舰合作加盟店（Lawson、麦当劳、松本清、ENEOS） | 扫码时 1% + 可变奖励 | 若使用则与 d Card 消费叠加 | 叠加 | 合作方出资的奖励活动常见 |
| 联盟合作伙伴（ベイシア、ヤマダデンキ 等） | 扫码时 1% | 叠加 | 叠加 | 低频合作伙伴网络 |
| 通过 d払い 的非合作加盟店 | 0.5-1.5% | 叠加 | 叠加 | 仅受理 — 无扫码累积 |

经济含义是：持有 d Card GOLD 并在旗舰合作加盟店使用 d払い 的 docomo 签约用户，在组合消费类别上可达到 **3-5%+ 的实效累积率**，这实质性地高于 PayPay 和 楽天ペイ 默认提供的 1% 基线。这解释了为何 d Card GOLD 在高消费 docomo 签约用户中留存率高。

## d Card GOLD — 金卡级别的门槛与经济性

**d Card GOLD** 是 NTT docomo 的高端信用卡级别，年费为 ¥11,000 （含税）。年费的结构性正名：

| 权益 | 大致经济价值 |
|---|---|
| docomo 移动 + ひかり 账单的 10% 奖励积分 | 对 docomo + ひかり 消费 ¥8,000+/月 的家庭具实质意义（¥80/月 奖励 = ¥960/年；组合 ¥15,000/月 时，约 ¥1,800/年 奖励） |
| 免费旅行保险（海外／国内） | 可变；与中位金卡相当 |
| 机场贵宾室使用（国内主要机场） | 可变；与中位金卡相当 |
| 手机补偿（¥100,000级别保障） | 若发生移动设备损坏则具实质意义 |
| dポイント 奖励活动 | 可与类别累积叠加 |

经济盈亏平衡门槛对于一个普通家庭而言，大致是 docomo + ひかり 组合消费 **¥8,000-10,000/月**，低于此则年费超过账单奖励的价值。NTT docomo 的 d Card GOLD 会员基础反映了这一细分 — 集中于拥有多条线路和捆绑服务的高 ARPU 家庭。

## d払い 的融合 — 钱包、卡与账单支付

**d払い**（d-barai）是 NTT docomo 的 QR 支付钱包，于 2018推出。与 dポイント 的融合模式：

| 功能 | d払い |
|---|---|
| 资金来源 | d Card 直接充值、银行账户直接充值、便利店充值、dポイント 直接使用 |
| 身份 | d 账户（与 dポイント 相同） |
| 结算 | 通过 docomo 运营商或已登记支付方式直接计费 |
| 忠诚度层 | dポイント 在 0.5-1.5% 自动累积（按等级与活动） |
| 加盟店受理 | 兼容 JPQR；在主线零售、餐饮、自动售货中部署 |

d払い 的战略角色是提供一个 **将积分累积与高频低单价消费挂钩的钱包界面** — 这是纯信用卡经济性难以经济高效地服务的类别。2025 dポイントクラブ 等级改革明确提高了 d払い 频率在等级判定指标中的权重，加速钱包采用。

d払い 的牌照结构视情况处于 **第三者型前払式支払手段**（第三方型预付式支付手段）与 **資金移動業**（资金移动业）的双重登记之下 — 关于结构性处理参见 [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]。

## 会计确认时点 — IFRS 15 合同负债

NTT docomo 按 IFRS 报告，dポイント 负债在「重大权利」框架下被作为 **合同负债**（IFRS 15 下的递延收入）处理。确认模式：

| 事件 | 会计处理 |
|---|---|
| 获得积分的客户购买 | 将交易价格在商品／服务与所授予积分之间分配（使用单独售价）；将积分部分确认为合同负债 |
| 客户兑换积分 | 将相应的递延收入释放为已确认收入 |
| 积分到期或确认 breakage | 基于预期兑换的模式（与实际兑换成比例）释放相应的递延收入 |
| 活动授予积分（无相应的客户购买） | 在授予时作为促销／营销费用处理 |

NTT docomo 的年度报告包含将通信收入递延额与 dポイント 负债合并的合同负债披露。breakage 假设每年基于历史兑换模式予以复核。关于更广泛的处理，参见涵盖「积分」可归入的五个会计桶的 [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]。

## 联盟合作伙伴网络 — Lawson 之争及其他

dポイント 的合作加盟店网络建立在与主要零售商的双边协议之上。最具争议的合作伙伴是 **Lawson**，它历来同时提供 Pontaポイント（KDDI / Loyalty Marketing）与 dポイント 累积 — 关于 KDDI 与三菱进行 2024 私有化后的战略重排，参见 [[retail/lawson-mitsubishi-corporation-tie-up-2024-deep|Lawson + Mitsubishi 2024 deep tie-up]]。其他旗舰合作伙伴：

| 合作伙伴 | 类别 | dポイント 角色 |
|---|---|---|
| Lawson | 便利店 | 扫码累积；在 2024 KDDI 所有权后与 Pontaポイント 存在争议 |
| 麦当劳 | QSR | 扫码累积；活动密集 |
| 松本清 | 药妆店 | 扫码累积；d払い 奖励的活动类别 |
| ENEOS | 燃料 | 在 SS 扫码累积 |
| Tower Records、タワレコ | 专门零售 | 扫码累积 |
| ベイシア、ヤマダデンキ、ジョーシン | GMS / 消费电子 | 参与情况可变 |
| マクドナルド・スターバックス | QSR | 可变；轮换活动 |

联盟经济性的运作方式与 au PAY ポイント / Pontaポイント 相同：合作加盟店为自身的发行与兑换出资，NTT docomo 与合作伙伴之间定期净额结算。合作伙伴参与的经济逻辑是以合作方出资的积分成本换取 **增量客流与篮子规模**。

## 竞争定位

| 通用积分 | 锚点 | 活跃会员 ID | 最强渠道 | d Point 的相对定位 |
|---|---|---|---|---|
| dポイント | NTT docomo 电信 | 100M+ | docomo 账单、d Card GOLD 倍率、Lawson / 麦当劳 | 基准 |
| au PAY ポイント (旧 Ponta) | KDDI au 电信 + Recruit / 三菱 联盟 | 100M+ | Lawson（KDDI 后）、Recruit 生态（じゃらん, Hot Pepper） | 直接的电信同类；Ponta 合并使 au 获得更广的非电信界面 |
| V Point | SMBC + CCCMK | 130M+ 统一 | SMBC Olive、SMBC Card、T 卡旧有网络 | 银行锚点；电信数据图谱较弱 |
| 乐天积分 | 乐天 EC + 卡 + 银行 + 移动 | 数千万活跃 | 乐天 EC、乐天卡、乐天 Mobile | 电商锚点；线上长尾更强 |
| PayPay 积分 | SoftBank / LY / PayPay 应用 | 70M+ 钱包用户 | PayPay QR 应用、活动、PayPay 卡 | 钱包锚点；活动驱动 |
| WAON POINT | AEON 集团 | 数千万 | AEON 门店、WAON、AEON 卡 | 零售集团内部 |
| nanaco point | Seven & i | 数千万 | 7-Eleven、伊藤洋华堂、nanaco | 零售集团内部 |

dポイント 最直接的同类是 **au PAY ポイント** — 两者都是以移动线路签约用户基础为核心护城河、以雄心勃勃的超级应用金融捆绑为终局的电信锚点通用积分。最重要的对比是作为银行锚点替代方案、具有不同客户获取漏斗的 **V Point**。

## 相关

- [[loyalty/INDEX|loyalty index]]
- [[loyalty/d-point-au-kddi-docomo-telco-point-consolidation|d Point / au telco-point consolidation case]]
- [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]]
- [[loyalty/japan-points-landscape|Japan points and loyalty landscape]]
- [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]
- [[loyalty/t-point-v-point-post-2024-merger|T-Point + V-Point post-2024 merger detail]]
- [[loyalty/ponta-points-deep-dive|Ponta points deep dive]]
- [[loyalty/sb-yahoo-paypay-points-unified-ecosystem|SB/Yahoo/PayPay unified points]]
- [[megabanks/ndfg|NDFG (NTT docomo financial group)]]
- [[payment-firms/paypay|PayPay]]
- [[megabanks/paypay-fg|PayPay FG]]
- [[payment-firms/rakuten-fg|Rakuten FG]]
- [[megabanks/au-fh|au Financial Holdings]]
- [[payment-firms/au-payment|au Payment]]
- [[payments/japan-code-payment-operator-2025-market-share-matrix|Japan code-payment operator 2025 market share matrix]]
- [[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]]
- [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]
- [[retail/lawson-mitsubishi-corporation-tie-up-2024-deep|Lawson + Mitsubishi 2024 deep tie-up]]
- [[retail/INDEX|retail index]]
- [[INDEX|FinWiki index]]

## Sources

- dポイントクラブ official site: https://dpoint.docomo.ne.jp/club/
- dポイント official site: https://dpoint.docomo.ne.jp/
- d Card official site: https://dcard.docomo.ne.jp/
- d払い official site: https://service.smt.docomo.ne.jp/keitai_payment/
- NTT docomo press releases (dポイントクラブ reform announcements): https://www.docomo.ne.jp/info/news_release/
- NTT docomo IR library (annual report contract-liability disclosure): https://www.docomo.ne.jp/corporate/ir/library/
- Cashless Promotion Council publications (code-payment trends): https://paymentsjapan.or.jp/category/publications/
