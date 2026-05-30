---
source: banking/japan-net-bank-deposit-feature-matrix-2026
source_hash: 6f2405a47c80e62f
lang: zh
status: machine
fidelity: ok
title: "日本网络银行存款与功能矩阵 2026"
translated_at: 2026-05-30T18:52:47.777Z
---

# 日本网络银行存款与功能矩阵 2026

## TL;DR

日本的网络银行群进入 2026  时，已是一个清晰分层的竞争面，而非一个未加区分的单一类别。这十余家运营方涵盖从**万亿日元级存款特许经营**（Rakuten Bank、Sumishin SBI Net Bank、Sony Bank），到**专业 BaaS / 合作方主导品牌**（Minna Bank、Sumishin SBI 的 NEOBANK 合作方），到**生态系统叠加型零售银行**（PayPay Bank、au Jibun Bank），再到**新兴金融科技发行银行**（Mercari Bank、UI Bank）。本矩阵就母集团、存款基础、外汇产品深度、住房贷款发放、借记 / 信用叠加、公开银行 API 姿态、2025-2026  增长轨迹、费用表、存款利率分层及嵌入式金融合作关系对它们进行比较。请将其与 [[banking/japan-net-bank-competition-map|Japan net bank competition map]]（分层框架）及各银行单独条目（细颗粒度细节）一并使用。

## Wiki route

本页归属于 [[banking/INDEX|banking index]]，作为一个 2026 年代的存款与功能比较面。分层框架位于 [[banking/japan-net-bank-competition-map|Japan net bank competition map]] 及 [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]]。各银行专属页面：[[banking/sony-bank|Sony Bank]]、[[banking/ui-bank|UI Bank]]、[[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]]、[[banking/daiwa-next-bank|Daiwa Next Bank]]、[[banking/rakuten-bank|Rakuten Bank]]、[[banking/paypay-bank|PayPay Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]、[[banking/minna-bank-baas-model|Minna Bank BaaS model]]、[[banking/mercari-bank|Mercari Bank]]、[[banking/mercari-bank-license-stack|Mercari Bank license stack]]。运营模式位于 [[banking/japan-baas-operating-models|Japan BaaS operating models]] 及 [[banking/regional-bank-api-digital-partnership-route|regional bank API digital partnership route]]。后大型银行背景：[[banking/post-megabank-positioning|post-megabank positioning]]。

## Why deposit feature comparison matters in 2026

Three structural shifts make a deposit-and-feature comparison especially useful in 2026.

1. **利率正常化重启了存款竞争。** BOJ 在 2024-2025  间退出负利率政策，使短期利率回到正值区间，打破了多年来「所有存款利率都是零」的简化。网络银行再度在分层利率、外汇存款及结构性存款产品上进行差异化——分层框架参见 [[banking/japan-net-bank-competition-map|Japan net bank competition map]]。
2. **经由银行 API 的嵌入式金融是新的 BaaS 面。** [[fintech/INDEX|fintech]] 下的银行 API 制度已成熟为主流分销。[[banking/japan-baas-operating-models|Japan BaaS operating models]] 记录了合作分行与白标账户架构。网络银行在是否发布银行 API、白标账户容器，或两者兼具上有实质性差异。
3. **住房贷款发放已成为网络银行的主要规模轴。** [[banking/sony-bank|Sony Bank]]、[[banking/au-jibun-bank|au Jibun Bank]] 及 [[banking/rakuten-bank|Rakuten Bank]] 各自经营可观的浮动利率住房贷款流。[[finance/japan-acquisition-finance|Japan acquisition finance]] 背景及 [[banking/post-megabank-positioning|post-megabank positioning]] 解释了为何网络银行住房贷款如今在浮动利率账簿上与大型银行发放方正面竞争。

## Bank universe in scope

十一家银行锚定本比较：

- **生态系统锚定型零售** — [[banking/rakuten-bank|Rakuten Bank]]、[[banking/paypay-bank|PayPay Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]。
- **证券邻接 / 资产形成** — [[banking/sony-bank|Sony Bank]]、[[banking/daiwa-next-bank|Daiwa Next Bank]]、[[JapanFG/sbi-shinsei-bank|SBI Shinsei]] 背景条目经由 [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]]（NEOBANK / 住房贷款锚点网络银行）。
- **法人 API / 中小企业** — [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]]。
- **BaaS / 合作方主导** — [[banking/minna-bank-baas-model|Minna Bank]]（Fukuoka FG 数字银行品牌）、[[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] NEOBANK 合作方栈。
- **区域数字** — [[banking/ui-bank|UI Bank]]（Tokyo Kiraboshi FG）。
- **金融科技发行** — [[banking/mercari-bank|Mercari Bank]]（2025-2026  启动）。
- **邮政 / 政府锚定** — [[JapanFG/japan-post-bank|Japan Post Bank]] 数字渠道（Yucho Direct + Yucho Pay）虽非纯网络银行，仍作为数字渠道比较纳入。

该群剔除仅法人的数字放贷机构（如 Funds）、仅钱包的运营方（无银行实体的 [[JapanFG/paypay-card|PayPay Card]]），以及启动前项目。

## Core matrix — deposit base and parent ecosystem

| Bank | Parent group | Deposit base (¥tn, ~2026) | Account base (m) | Primary deposit driver |
|---|---|---|---|---|
| [[banking/rakuten-bank|Rakuten Bank]] | Rakuten Group ([[business/rakuten-group-mobile-finance-bundling-case|mobile-finance bundling]]) | ~10-12 | ~16-17 | Rakuten Pay sweep、工资结算、Rakuten Card 自动扣款 |
| [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] | Sumitomo Mitsui Trust × [[JapanFG/sbi-hd|SBI HD]] | ~10-11 | ~7-8 | 住房贷款发放 + JAL / SBI / Yamada / T-NEOBANK 合作方账户 |
| [[banking/paypay-bank|PayPay Bank]] | SoftBank / PayPay / Yahoo Japan 栈 | ~2-3 | ~7-8 | PayPay 钱包充值、工资账户、ATM-light 渠道 |
| [[banking/au-jibun-bank|au Jibun Bank]] | KDDI × MUFG ([[JapanFG/au-fh|au FH]] × [[JapanFG/mufg|MUFG]]) | ~5-6 | ~6-7 | au PAY 联动、住房贷款账簿、工资账户、外汇零售 |
| [[banking/sony-bank|Sony Bank]] | Sony Financial Group ([[business/sony-fg-partial-spinoff-case|SFG spinoff]]) | ~3-4 | ~1.7-2.0 | 住房贷款账簿 + 多币种外汇存款 + 资产形成账户 |
| [[banking/daiwa-next-bank|Daiwa Next Bank]] | [[JapanFG/daiwa-sg|Daiwa Securities Group]] | ~5-6 | ~1.5-1.7 | 证券扫存存款、结构性存款、资产形成客户基础 |
| [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] | [[JapanFG/aozora-bank|Aozora Bank]] × [[business/gmo-internet-group|GMO Internet Group]] | ~1.5-2 | ~0.7-0.9 | 中小企业 / 初创企业账户、基于 API 的法人资金管理 |
| [[banking/ui-bank|UI Bank]] | Tokyo Kiraboshi FG | ~0.3-0.5 | ~0.3-0.4 | 面向区域集团的仅 app 数字存款渠道 |
| [[banking/minna-bank-baas-model|Minna Bank]] | Fukuoka FG | ~0.2-0.4 | ~0.9-1.1 | 移动原生账户 + BaaS 合作方品牌 |
| [[banking/mercari-bank|Mercari Bank]] | Mercari Group | <0.2 （早期） | early-stage | Mercari Marketplace 卖家现金流 + Mercari 积分桥接 |
| [[JapanFG/japan-post-bank|Japan Post Bank]]（数字渠道） | Japan Post Holdings | ~190 （整家银行） | ~120 （整家银行） | 分行 + ATM 基础；Yucho Direct 数字渠道为叠加层 |

存款基础数值为来自各银行 IR 页面、集团年报及 FSA 汇总的公开来源近似值。请使用各银行 IR 页面获取精确的资产负债表数据。

## Core matrix — FX, mortgage, card, and API depth

| Bank | FX product depth | Mortgage origination | Debit / credit overlay | Bank API publishing |
|---|---|---|---|---|
| [[banking/rakuten-bank|Rakuten Bank]] | 日元 + 美元 + 欧元零售外汇、外汇借记卡 | 经由集团发放的浮动利率住房贷款 | Rakuten Card 联动（无自有卡品牌） | 面向 [[banking/japan-baas-operating-models|BaaS]] 合作方的标准 FA API |
| [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] | 有限的零售外汇；外汇经由 [[JapanFG/sbi-fx-trade|SBI FX Trade]] | 主要的浮动利率住房贷款锚点 | Mister Debit（Visa 借记） | 广泛——面向 JAL、T-NEOBANK、Yamada、SBI 等的 NEOBANK API |
| [[banking/paypay-bank|PayPay Bank]] | 日元 + 美元零售外汇、外汇存款 | 有限——合作方转介 | PayPay 借记（J-Debit + Visa 借记）、PayPay Card 联动 | 面向 PayPay 钱包扫存的标准银行 API |
| [[banking/au-jibun-bank|au Jibun Bank]] | 多币种外汇存款、外汇保证金、外汇借记 | 住房贷款账簿增长中 | au PAY 卡 / au PAY 借记联动 | 标准银行 API + au PAY 联动 |
| [[banking/sony-bank|Sony Bank]] | **最强零售外汇**——11+ 币种、MoneyKit 外汇存款、外汇借记 | 自启动以来的住房贷款核心产品 | Sony Bank WALLET（Visa 借记） | 标准银行 API |
| [[banking/daiwa-next-bank|Daiwa Next Bank]] | 有限的零售外汇 | 无 | 无（仅存款） | 与 [[JapanFG/daiwa-sg|Daiwa]] 的证券扫存联动 |
| [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] | 经由母公司 [[JapanFG/aozora-bank|Aozora]] 的法人外汇 | 有限的零售住房贷款 | Visa Debit | **广泛的法人 API**——嵌入式支付、SaaS 连接器 |
| [[banking/ui-bank|UI Bank]] | 有限 | 有限 | Visa 借记 | 标准银行 API |
| [[banking/minna-bank-baas-model|Minna Bank]] | 无 / 有限 | 无 | Visa 借记 | 带合作方品牌 API 的**原生 BaaS 架构** |
| [[banking/mercari-bank|Mercari Bank]] | 初期无 | 无 | 桥接至 Mercari Card | Mercari Marketplace 整合 |
| [[JapanFG/japan-post-bank|Japan Post Bank]] | 经由 Yucho 的有限零售外汇 | 无 | JP Bank Visa 借记、JP Bank Card | 有限的公开 API |

[[banking/sony-bank|Sony Bank]] 历史上将其差异化锚定于**多币种零售外汇**，且 2026  仍显示其为网络银行中最广的币种菜单。[[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] 明确锚定**法人 API**赛道。[[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] 同时锚定**住房贷款发放**与 **NEOBANK BaaS**。

## Core matrix — 2025-2026 growth, fees, interest, embedded-finance partnerships

| Bank | 2025-2026 deposit growth trajectory | ATM fee structure | Domestic transfer fee | FX spread tier | Interest-rate tier (2026) | Embedded-finance partner ecosystem |
|---|---|---|---|---|---|---|
| [[banking/rakuten-bank|Rakuten Bank]] | 高个位数同比；工资账户驱动 | 按 Happy Program 分层每月免费 1-7 次 | 按分层 ¥52-145  | 中（如 25  钱美元） | 分层（0.02-0.10% 基线；促销更高） | Rakuten Card、Rakuten Pay、Rakuten Securities、NTT Docomo（Rakuten Mobile 合作轮次后的交叉折扣） |
| [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] | 高——住房贷款账簿 + NEOBANK 账户 | 按 Smart Program 等级每月免费 2-15 次 | 按等级每月免费 1-20 次 | 中偏紧 | 分层，对高等级有存款利率加成 | JAL NEOBANK、T-NEOBANK、SBI Securities、Yamada NEOBANK、[[JapanFG/sbi-hd|SBI HD]] 交叉栈 |
| [[banking/paypay-bank|PayPay Bank]] | 强——PayPay 钱包充值 | 在 7-Eleven ATM 免费（有限），其他收费 | 满足条件免费 | 较宽 | 促销利率优惠；基线 0.02% | PayPay 钱包、PayPay Card、Yahoo / LINE Yahoo ID 联动 |
| [[banking/au-jibun-bank|au Jibun Bank]] | 稳健；KDDI 生态系统 | 分层免费 | 满足条件免费 | 中 | 分层，对 au PAY 卡联动有加成 | au PAY 生态系统、KDDI MNO、[[JapanFG/mufg|MUFG]] |
| [[banking/sony-bank|Sony Bank]] | 稳健；外汇 + 住房贷款 | 每月免费 4 次 + 超出收费 | 按渠道 ¥110-330  | 紧（外汇锚点定位） | 分层，含外汇存款 | Sony Group 实体、住房贷款发放合作方 |
| [[banking/daiwa-next-bank|Daiwa Next Bank]] | 证券扫存驱动 | 有限（仅存款模式） | 有限（经由 Daiwa 转账） | n/a | 结构性存款促销分层 | [[JapanFG/daiwa-sg|Daiwa Securities]] |
| [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] | 稳健的中小企业 / 法人 | 法人导向的费用表 | 对法人极具竞争力 | 对法人外汇紧 | 法人存款利率分层 | freee、MoneyForward、会计 SaaS、薪资、支付平台 |
| [[banking/ui-bank|UI Bank]] | 缓慢增长——利基 | 有限（仅 app） | 标准分层 | n/a | 促销高收益存款上线 | Tokyo Kiraboshi FG 区域合作方 |
| [[banking/minna-bank-baas-model|Minna Bank]] | 移动 / BaaS 增长 | 仅 app——无自有 ATM | app 锚定 | n/a | 标准 | Recruit、Trust Bank GW、合作方品牌 BaaS |
| [[banking/mercari-bank|Mercari Bank]] | 经 Mercari 用户基础早期爬坡 | 待定 | 待定 | n/a | 待定 | Mercari Marketplace、Mercari Card 联动 |
| [[JapanFG/japan-post-bank|Japan Post Bank]] | 随客户多元化略有流出 | 在全国 Japan Post ATM 免费 | ¥146-330 | 有限的零售外汇 | 标准低 | Yucho Pay（自有钱包）、与区域银行连接 |

增长轨迹行是定性的，因为存款增长高度季节性且促销驱动。请使用各银行的 IR 网站获取存款余额的季度披露。

## Differentiation axes

### Deposit-base scale tier

该群明显分为多个存款层：

- **万亿日元层（¥5tn+）** — [[banking/rakuten-bank|Rakuten Bank]]、[[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]、[[banking/daiwa-next-bank|Daiwa Next Bank]]。它们在原始存款特许经营上与区域银行竞争。
- **中层（¥1-5tn）** — [[banking/sony-bank|Sony Bank]]、[[banking/paypay-bank|PayPay Bank]]、[[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]]。分别按产品（外汇、钱包、法人 API）专业化。
- **次万亿层（<¥1tn）** — [[banking/ui-bank|UI Bank]]、[[banking/minna-bank-baas-model|Minna Bank]]、[[banking/mercari-bank|Mercari Bank]]。早期阶段或利基。
- **邮政锚点（¥190tn）** — [[JapanFG/japan-post-bank|Japan Post Bank]] 自成一类。Yucho Direct 作为数字渠道在功能上可比，但该行的存款基础来自分行与 ATM 特许经营。

### FX-product depth as differentiation

[[banking/sony-bank|Sony Bank]] 明确占据外汇深度的角落。[[banking/au-jibun-bank|au Jibun Bank]] 是最接近的同侪，拥有多币种外汇存款与外汇保证金交易。[[banking/rakuten-bank|Rakuten Bank]] 与 [[banking/paypay-bank|PayPay Bank]] 提供较窄的外汇产品菜单。非外汇银行（[[banking/daiwa-next-bank|Daiwa Next Bank]]、[[banking/minna-bank-baas-model|Minna Bank]]、[[banking/mercari-bank|Mercari Bank]]）让出了外汇客户分层。

### Mortgage origination as scale lever

浮动利率住房贷款对已进入住房贷款市场的网络银行而言，仍是最大的单一资产类别。[[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] 是最大的网络银行发放方。[[banking/sony-bank|Sony Bank]] 与 [[banking/au-jibun-bank|au Jibun Bank]] 紧随其后。[[banking/rakuten-bank|Rakuten Bank]] 经由集团结构发放。[[banking/paypay-bank|PayPay Bank]] 与 [[banking/daiwa-next-bank|Daiwa Next Bank]] 不锚定住房贷款。

### Bank-API publishing posture

可观察到三个发布层：

- **广泛的法人 API** — [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] 是锚点；明确聚焦法人资金管理与 SaaS 连接器 API。
- **广泛的 BaaS / 白标** — [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]]（NEOBANK）与 [[banking/minna-bank-baas-model|Minna Bank]] BaaS。它们让合作方品牌发布自己的类银行 UX，而银行持有牌照。
- **标准零售银行 API** — 多数其他银行。银行 API 为 [[banking/japan-baas-operating-models|electronic payment agency / FA]] 制度发布，但该银行不追求白标分销。

### Embedded-finance partner ecosystem

嵌入式金融合作方一列揭示了哪些网络银行在**分销面**而非**直接获客**上竞争。[[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] 经由 NEOBANK 与 JAL、Yamada、T（CCC）等合作；[[banking/minna-bank-baas-model|Minna Bank]] 与 Recruit 等合作；[[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] 与 freee、MoneyForward、薪资 SaaS 整合。生态系统零售银行（[[banking/rakuten-bank|Rakuten Bank]]、[[banking/paypay-bank|PayPay Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]）依靠自有集团生态系统，而非第三方合作方品牌。

## Cluster summary — competitive map by lever

一个有用的分群解读：

- **外汇 + 资产形成群** — [[banking/sony-bank|Sony Bank]]、[[banking/daiwa-next-bank|Daiwa Next Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]。
- **住房贷款发放群** — [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]]、[[banking/sony-bank|Sony Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]、[[banking/rakuten-bank|Rakuten Bank]]。
- **生态系统钱包群** — [[banking/rakuten-bank|Rakuten Bank]]、[[banking/paypay-bank|PayPay Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]。
- **BaaS / 合作方群** — [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] NEOBANK、[[banking/minna-bank-baas-model|Minna Bank]]。
- **法人 / 中小企业 API 群** — [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]]。
- **区域数字群** — [[banking/ui-bank|UI Bank]]、[[JapanFG/01-bank|01 Bank]]（同侪参照）。
- **金融科技发行群** — [[banking/mercari-bank|Mercari Bank]]。
- **邮政锚点** — [[JapanFG/japan-post-bank|Japan Post Bank]]。

## Source caveats

1. **存款基础数据**为来自各银行 IR 页面、集团年报及 FSA 汇总的公开来源近似值。精确比较应使用季度披露。
2. **账户基础数据**将仅银行的零售客户与 BaaS 合作方账户混合。[[banking/japan-net-bank-competition-map|competition map]] 讨论了为何 BaaS 账户可能高估主银行转化。
3. **费用表**随促销方案频繁变动。请使用各银行的费用表页面获取当前数值。
4. **外汇点差**因币种、渠道及时段而异。请使用各银行的外汇页面获取实时汇率。
5. **利率分层**取决于 BOJ 政策。2026  基线假设正短期利率区间；高于基线的促销利率很常见。
6. **住房贷款发放量**有些银行按年披露；有些按季披露。请使用各银行的 IR 页面获取经核实的流量数据。

## Research checklist

扩展本矩阵时：

1. 拉取各银行 IR 页面或季度披露以获取存款余额与账户数。
2. 经由 FSA 银行信息披露汇总进行交叉核对。
3. 阅读该银行的 API 开发者门户以获取银行 API 深度与合作方名单。
4. 使用 [[banking/japan-baas-operating-models|BaaS operating models]] 页面对该银行的 BaaS 姿态进行分类。
5. 使用 [[banking/quick-deposit-four-methods|quick deposit four methods]] 获取支付渠道背景。
6. 使用 [[banking/japan-banking-license-tier-comparison-matrix|banking license tier comparison]] 确认牌照类别。

## Related

- [[banking/INDEX]]
- [[banking/japan-net-bank-competition-map]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[banking/japan-baas-operating-models]]
- [[banking/post-megabank-positioning]]
- [[banking/sony-bank]]
- [[banking/ui-bank]]
- [[banking/gmo-aozora-net-bank]]
- [[banking/daiwa-next-bank]]
- [[banking/rakuten-bank]]
- [[banking/paypay-bank]]
- [[banking/au-jibun-bank]]
- [[banking/minna-bank-baas-model]]
- [[banking/mercari-bank]]
- [[banking/mercari-bank-license-stack]]
- [[banking/sumishin-sbi-net-bank]]
- [[banking/regional-bank-api-digital-partnership-route]]
- [[banking/quick-deposit-four-methods]]
- [[business/rakuten-group-mobile-finance-bundling-case]]
- [[business/sony-fg-partial-spinoff-case]]
- [[business/gmo-internet-group]]
- [[JapanFG/japan-post-bank]]
- [[JapanFG/sbi-hd]]
- [[JapanFG/mufg]]
- [[JapanFG/daiwa-sg]]
- [[JapanFG/01-bank]]
- [[INDEX|FinWiki index]]

## Sources

- FSA 持牌银行名单及银行披露汇总。
- Sony Bank 公司简介与产品披露。
- UI Bank 公司网站与产品页面。
- GMO Aozora Net Bank 公司概要与法人 API 文档。
- Daiwa Next Bank 公司披露与证券扫存文档。
- Rakuten Bank 新闻稿与集团披露。
- PayPay Bank 公司信息与产品页面。
- Sumishin SBI Net Bank 公司简介与 NEOBANK 合作方披露。
- au Jibun Bank 业绩披露。
- Minna Bank 公司网站与 BaaS 合作方页面。
- Mercari Bank 启动披露。
- Japan Post Bank IR。
