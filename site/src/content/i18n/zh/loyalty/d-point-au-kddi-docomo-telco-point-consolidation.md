---
source: loyalty/d-point-au-kddi-docomo-telco-point-consolidation
source_hash: 66b30eea4589ecf4
lang: zh
status: machine
fidelity: ok
title: "dポイント (NTT docomo) vs au PAY ポイント (KDDI) —— 以电信为锚的日本积分整合"
translated_at: 2026-05-30T14:48:27.661Z
---

# dポイント (NTT docomo) vs au PAY ポイント (KDDI) —— 以电信为锚的日本积分整合

## Wiki 路由

本条目归于 [[loyalty/INDEX|loyalty INDEX]]，是以金融为锚的 [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]] 在以电信为锚一侧的对应物。请与 [[loyalty/japan-points-landscape|Japan points and loyalty landscape]]（跨生态地图）、[[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]（breakage / IFRS-15 处理）以及 [[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]]（积分所栖身的钱包层叠加视图）一同阅读。

## TL;DR

日本三大「通用积分」计划沿**锚定业务**轴分化：

| 计划 | 锚点 | 联盟合作方 | 支付整合 | 金融集团整合 |
|---|---|---|---|---|
| **d Point** | NTT docomo 电信订户 | Lawson、麦当劳、松本清、ENEOS 等 | d払い（d-barai QR）、d Card 信用卡、d Card Prepaid | NTT Docomo 金融部门 → [[megabanks/ndfg|NDFG]]（含 SMBC 信托路径的计划性合并） |
| **au PAY ポイント（旧 Ponta）** | KDDI / au 电信订户 + Recruit Holdings 共锚联盟 | Lawson、GEO、Shell SS（出光昭和シェル）、Recruit 集团服务（じゃらん、Hot Pepper 等） | au PAY（QR）、au PAY カード、au PAY プリペイドカード | [[megabanks/au-fh|au FH (KDDI 金融持株)]] + [[payment-firms/au-payment|au Payment]] |
| **V Point** | SMBC 集团金融订户 + CCC 数据库 | T-Card 遗留网络（CCC）、SMBC 卡持卡人、Olive 账户 | Olive一体型、SMBC 卡、V NEAR PAY | [[megabanks/smfg|SMFG]] / SMBC 卡 |

两个以电信为锚的计划与以银行为锚的 V Point 之间的战略差异在于**身份起源**：

- **d Point / au PAY ポイント** 起始于**移动线路身份**（SIM、合约持有人、设备）—— 可计费的订户关系是护城河。
- **V Point** 起始于**银行 / 卡身份**（SMBC 账户、Olive、V Point Card）—— 金融产品关系是护城河。

两种锚点类型都试图收敛到同一个下游界面：全国性的 QR 支付 + 卡 + 银行 + 证券 + 保险捆绑。它们从客户获取漏斗的不同端起步。

## 以电信为锚的模式 —— 订户身份买到了什么

电信锚点带来了纯金融服务锚点所缺乏的四项资产：

1. **合约性计费关系** —— 月度直接扣款 / 信用卡收款，支付成功率高、流失率低
2. **已验证的个人身份** —— KYC 于移动线路签约时完成；地址、姓名、身份证件已验证
3. **以设备为锚的归因** —— SIM、智能手机、app 环境全部绑定到一个客户 ID
4. **日常使用的遥测界面** —— 位置、app 使用、浏览上下文（在获得同意的范围内）成为营销的归因数据

这四项资产压缩了**相邻金融产品**的客户获取漏斗：一位已用注册信用卡每月支付电话费的 docomo 订户，相比冷门潜客，转化为 d Card 持卡人、d払い 用户、d-account 银行客户或 NISA 开户者要便宜得多。

**au 一侧的对应物**在结构上相似 —— au 围绕遗留 Ponta 计划（现整合为 au PAY ポイント）与 Recruit Holdings 的联盟，带来了额外的非电信日常使用界面（じゃらん 旅行、Hot Pepper 餐饮、Air Regi POS）。其整合历史 —— Recruit-CCC-au-KDDI 交叉持股动作 —— 通过 KDDI 与 Recruit 的新闻稿公开记录在案。

## 并排比较

| 维度 | d Point (NTT docomo) | au PAY ポイント (KDDI) | V Point (SMBC × CCC) |
|---|---|---|---|
| 锚点 | NTT docomo 电信 | KDDI au 电信 + Recruit 联盟 | SMBC + CCC（T-Card 遗留） |
| 推出（现行形态） | 2015 （由 docomo Premier Club 品牌重塑） | 2010 （Ponta 推出）→ 2024-12 统一为 au PAY ポイント | 2024-04-22 统一 V Point（T Point + SMBC V Point 合并） |
| 近似会员 ID 基数 | 100M+ d-account ID（NTT docomo 公开披露） | 100M+ Ponta ID / au ID 合计（KDDI / Recruit 公开材料） | 130M+ 统一（合并时 CCC + SMBC 公开材料） |
| 钱包整合 | d払い（QR） | au PAY（QR） | V NEAR PAY（NFC）+ Olive一体型 |
| 卡 | d Card / d Card GOLD（NTT docomo 发行） | au PAY カード（au Financial Service 发行） | SMBC 卡 / Olive一体型（SMBC） |
| 银行 | （计划性 NDFG 合并；当前为合作银行） | au じぶん銀行（[[megabanks/au-fh|au FH]] 子公司） | SMBC + Olive |
| 证券 | （经 SMBC 联盟向 NTT 路径的计划性路线） | au カブコム証券（au FH 子公司） | SMBC日興証券 |
| 保险 | （NTT docomo 保险分销 + 计划性 NDFG 整合） | [[non-life-insurers/au-insurance|au 損害保険]] + au アセットマネジメント | 合作保险路线 |
| 零售旗舰 | Lawson、麦当劳、松本清、ENEOS | Lawson、GEO、出光、Recruit 生态 | T-card 遗留网络（Tsutaya、超市等） |
| 移动运营商 | NTT docomo（移动、ahamo、irumo） | au、UQ mobile、povo | （无） |

## Lawson 问题 —— 重叠的零售锚点

d Point 与 au PAY ポイント（Ponta）皆可在 Lawson 使用，而 Lawson 的 KDDI 联盟（KDDI 于 2024, 取得 Lawson 的控股股权，记录于 [[retail/lawson-kddi-retail-finance|Lawson × KDDI retail finance]]）使 Lawson 成为一个尤为争夺的忠诚度界面：

- Lawson 历史上给予 Ponta 积分（Recruit / au 联盟）
- 经跨联盟协议可在 Lawson 赚取 d Point
- 在 KDDI 的 2024 Lawson 收购之后，KDDI 的战略激励偏向 au PAY / Ponta 整合；d Point 的可赚取性变为合作而非股权关系

同一零售界面向两个相互竞争的积分计划付出，这在日本不寻常，反映了一个历史事实：积分联盟被当作营销工具而非竞争护城河来对待。KDDI 的 Lawson 收购开始使这些重叠成为真正的战略张力。

## NTT docomo —— d Point 作为 NDFG 的前端

d Point 计划是 NTT docomo 向**金融控股集团**结构更广推进的面向消费者层 —— 正在组建的合并结构见 [[megabanks/ndfg|NDFG (NTT docomo financial group)]]。战略脉络：

1. **d-account** 作为横跨 docomo、d払い、d Card、d-account 银行合作方、d-account NISA 合作方的单一客户 ID
2. **d Point** 作为将体验串联起来的忠诚度货币
3. **NDFG 控股公司** 作为监管载体，将银行、证券、保险、信托子公司整合于一个金融集团伞下
4. **SMBC 信托路径** 作为 NTT / SMBC 公告中公开披露的一项具体合并杠杆

NTT 公开材料所暗示的终局是一个**以电信为锚的金融超级集团**，在整合的积分-支付-金融服务捆绑上与 [[payment-firms/rakuten-fg|Rakuten FG]] 和 [[megabanks/paypay-fg|PayPay FG]] 抗衡，并以**电信订阅现金流作为底层锚点**。

## KDDI —— au FH 内的 au Point

KDDI 的并行结构在金融一侧比 NTT 更为**已经整合**。[[megabanks/au-fh|au FH (au Financial Holdings)]] 已拥有：

- au じぶん銀行（au Jibun Bank —— 互联网银行，MUFG 遗留联盟）
- au カブコム証券（au Kabu.com Securities）
- au 損害保険 / [[non-life-insurers/au-insurance|au 損害保険]]
- au アセットマネジメント
- [[payment-firms/au-payment|au Payment]]（au PAY 运营方）
- au Pay Card

au PAY ポイント 计划作为**忠诚度货币**，将所有这些子公司串联为一个客户漏斗叙事。Recruit 通过 Ponta 的联盟合作在此之上叠加了非电信界面（旅行、餐饮、服务）。

## 与 V Point 的对照 —— 以金融为锚 vs 以电信为锚

与 V Point 的结构性比较（见 [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]]）是解读 d Point 与 au PAY ポイント 两者最具信息量的方式：

| 问题 | 以电信为锚（d、au） | 以金融为锚（V Point） |
|---|---|---|
| 客户 ID 起源于何处？ | 移动合约签约 | 银行 / 卡申请 |
| 经常性计费关系是什么？ | 月度电话账单 | 月度卡对账单 |
| KYC 路径是什么？ | 购买 SIM 时 | 开户时 |
| 交叉销售方向是什么？ | 电信 → 金融 → 钱包 | 卡 / 银行 → 钱包 → 零售 |
| 数据图谱是什么？ | 位置 + app + 电信使用 | 消费 + 账户流水 + CCC 零售数据库 |
| 竞争护城河是什么？ | 移动线路切换的黏性 | 银行账户切换的黏性 |
| 监管锚点是什么？ | 電気通信事業法 + 資金決済法（用于支付） | 銀行法 + 割賦販売法 + 資金決済法 |
| 金融集团终局是什么？ | 以电信为锚的金融控股（[[megabanks/ndfg|NDFG]]、[[megabanks/au-fh|au FH]]） | 银行主导集团（[[megabanks/smfg|SMFG]] / Olive） |

两种锚点类型收敛到相同的下游产品（卡、银行、证券、保险、支付、零售媒体），但它们经由不同的获取漏斗抵达，且具有不同的防御性经济学。电信锚点在底层订阅上享有更低流失；金融锚点在每个活跃关系上享有更高收入。

## 发行与累积机制

两个电信计划之间可见的差异在于消费者界面（返现率、合作网络）。其底层的会计与运营机制在结构上相似：

| 机制 | d Point | au PAY ポイント |
|---|---|---|
| 自有服务标准累积率 | docomo 账单 / d払い / d Card 上 1% | au 账单 / au PAY / au PAY カード 上 1% |
| 旗舰合作方奖励累积 | 可变，促销期常额外 1-3% | 可变，促销期常额外 1-2% |
| 高级卡乘数 | d Card GOLD 在 docomo 账单上叠加进一步积分乘数 | au PAY ゴールドカード 在 au 账单上叠加乘数 |
| 兑换价值 | 大多零售合作方及 d払い / au PAY 上 1 积分 = 1 日元 | 相同 |
| 失效政策 | 标准积分通常在指定期限后失效；活动积分常失效更短 | 相同 |
| 可转让性 | 有限的个人对个人转让（规则范围内） | 有限 |
| 负债会计 | 忠诚度负债于发行时计提；breakage 按 IFRS-15 / J-GAAP 估算并随时间释放 | 相同 |

积分负债问题 —— 失效 / 作废积分是否应作为收入释放（breakage）以及以何种比率 —— 是一个非微不足道的会计议题，记录于 [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]。NTT docomo 与 KDDI 在合并资产负债表上均承载重大的忠诚度负债，且 breakage 比率假设直接影响所报告的收入。

## 联盟合作方机制

联盟结构 —— 哪些合作方受理哪些积分、谁为发行出资、谁为兑换付费 —— 是任何通用积分计划的运营核心。

| 方面 | d Point | au PAY ポイント |
|---|---|---|
| 发行出资 | NTT docomo 或合作商户为其门店发行的积分出资 | KDDI 或合作商户为其门店发行的积分出资 |
| 兑换出资 | 由合作商户在兑换时点出资；在联盟内净额结算 | 相同 |
| 各合作方经济学 | 双边协商；大合作方获得优惠条款 | 相同 |
| 联名卡 | d Card 与选定合作方联名（如 d Card Lawson PONTA） | au PAY カード 与选定合作方联名 |
| 结算周期 | docomo 与合作方之间定期净额结算 | KDDI 与合作方之间定期净额结算 |
| 跨联盟兑换 | 某些方向允许（如 d Point ↔ JAL 里程）按固定比率 | 允许（如 au PAY ポイント ↔ JAL 里程）按固定比率 |

合作方加入联盟的经济激励是以合作方出资的积分发行换取**增量客流与增量篮子规模**。只有当合作方确信增量客流超过积分出资成本时，这套算术才成立 —— 这正是为何高频 / 冲动购买零售（便利、药妆、燃油）是最易接受的细分，也是为何对这些细分的竞争最为激烈。

## 战略解读

- **以电信为锚的积分计划是日本最具成本效率的交叉销售平台**，因为移动合约已支付了 KYC、客户获取与经常性计费轨道；忠诚度层变现的是一段已经付清的关系。
- **d Point / au PAY ポイント 的较量是一场跨越数十年的角逐**，因为两个锚点都具备全国足迹，都拥有整合的金融控股，且都无结构性成本劣势。PayPay 的生态（[[megabanks/paypay-fg|PayPay FG]]）从不同起点（LY / SoftBank / Yahoo 数据资产，而非移动线路锚点）运作，并在第三条轴上竞争。
- **码支付渗透是更深层金融集团竞争的可见层** —— 钱包一侧视图见 [[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]]；d払い 与 au PAY 的存在主要为捕获交易级数据，并将交叉销售基础拓宽至卡 / 银行 / 保险 / 证券。
- **积分负债会计问题在电信规模上更为重要** —— d Point 与 au PAY ポイント 均承载数百亿日元的计提忠诚度负债，附带重大 breakage 假设。IFRS-15 / J-GAAP 处理记录于 [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]。
- **零售获取（Lawson、ENEOS、松本清）不再是商品化的** —— KDDI 的 [[retail/lawson-kddi-retail-finance|Lawson]] 动作改变了多积分合作的成本基础。留意 NTT docomo 在零售锚点上的类似股权动作。

## 相关

- [[loyalty/INDEX|loyalty INDEX]]
- [[loyalty/japan-points-landscape|Japan points and loyalty landscape]]
- [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]]
- [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]
- [[megabanks/ndfg|NDFG (NTT docomo financial group)]]
- [[megabanks/au-fh|au FH (au Financial Holdings)]]
- [[payment-firms/au-payment|au Payment]]
- [[non-life-insurers/au-insurance|au 損害保険]]
- [[payment-firms/rakuten-fg|Rakuten FG]]
- [[megabanks/paypay-fg|PayPay FG]]
- [[retail/lawson-kddi-retail-finance|Lawson × KDDI retail finance]]
- [[retail/INDEX|retail INDEX]]
- [[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]]
- [[INDEX|FinWiki index]]

## 来源

- d Point Club 官方网站：https://dpoint.docomo.ne.jp/
- au PAY ポイント（旧 Ponta）官方：https://aupay.wallet.auone.jp/contents/static/point/
- KDDI 企业新闻稿（au FH 合并、Lawson 收购）：https://www.kddi.com/corporate/newsrelease/
- NTT docomo 新闻稿（NDFG 合并公告）：https://www.docomo.ne.jp/info/news_release/
- Recruit Holdings 新闻中心（Ponta 历史与 au 联盟）：https://www.recruit.co.jp/newsroom/
