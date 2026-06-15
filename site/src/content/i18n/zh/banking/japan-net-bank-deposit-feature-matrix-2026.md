---
source: banking/japan-net-bank-deposit-feature-matrix-2026
source_hash: a66f9ca3fc29225a
lang: zh
status: machine
fidelity: ok
title: "日本网络银行存款与功能矩阵 2026"
translated_at: 2026-06-15T03:48:21.886Z
---

# 日本网络银行存款与功能矩阵 2026

## TL;DR

日本的网络银行群体进入 2026 时，已是一个清晰分层的竞争面，而非一个无差别的单一类别。这十余家经营者从 **万亿日元级存款特许经营**（乐天银行、住信 SBI 网络银行、索尼银行）到 **专业 BaaS／合作伙伴主导品牌**（みんな银行、住信 SBI 的 NEOBANK 合作方）、再到 **生态叠加型零售银行**（PayPay 银行、au Jibun 银行）、以及 **新兴 fintech 发牌银行**（Mercari 银行、UI 银行）不等。本矩阵就母集团、存款基础、外汇产品深度、住房贷款发放、借记／信用叠加、公共银行 API 姿态、2025-2026 增长轨迹、费用表、存款利率分层及嵌入式金融合作关系对它们进行比较。请与 [[banking/japan-net-bank-competition-map|Japan net bank competition map]] 一并使用以作分层框定，并与各银行的条目一并使用以了解细颗粒度细节。

## Wiki route

本页位于 [[banking/INDEX|banking index]] 之下，作为 2026年份的存款与功能比较面。分部层级的框定见于 [[banking/japan-net-bank-competition-map|Japan net bank competition map]] 与 [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]]。各银行专属页面：[[banking/sony-bank|Sony Bank]]、[[banking/ui-bank|UI Bank]]、[[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]]、[[banking/daiwa-next-bank|Daiwa Next Bank]]、[[banking/rakuten-bank|Rakuten Bank]]、[[banking/paypay-bank|PayPay Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]、[[banking/minna-bank-baas-model|Minna Bank BaaS model]]、[[banking/mercari-bank|Mercari Bank]]、[[banking/mercari-bank-license-stack|Mercari Bank license stack]]。运营模型见于 [[banking/japan-baas-operating-models|Japan BaaS operating models]] 与 [[banking/regional-bank-api-digital-partnership-route|regional bank API digital partnership route]]。后超大型银行背景：[[banking/post-megabank-positioning|post-megabank positioning]]。

## 为什么存款功能比较在 2026

有意义三项结构性转变使存款与功能比较在 2026尤为有用。

1. **利率正常化重启了存款竞争。** 日本央行（BOJ）在 2024-2025 退出负利率政策，使短端利率重回正区间，打破了多年来「所有存款利率均为零」的简化认知。网络银行再次在分层利率、外汇存款及结构性存款产品上进行差异化 — 分部层级的框定见 [[banking/japan-net-bank-competition-map|Japan net bank competition map]]。
2. **经由银行 API 的嵌入式金融是新的 BaaS 面。** [[fintech/INDEX|fintech]] 下的银行 API 制度已成熟为主流分销渠道。[[banking/japan-baas-operating-models|Japan BaaS operating models]] 记录了合作伙伴分行与白标账户架构。网络银行在是否发布银行 API、白标账户容器、抑或两者兼具方面存在实质差异。
3. **住房贷款发放已成为网络银行的主要规模轴。** [[banking/sony-bank|Sony Bank]]、[[banking/au-jibun-bank|au Jibun Bank]] 与 [[banking/rakuten-bank|Rakuten Bank]] 各自运行着可观的浮动利率住房贷款流。[[finance/japan-acquisition-finance|Japan acquisition finance]] 背景与 [[banking/post-megabank-positioning|post-megabank positioning]] 解释了为何网络银行的住房贷款如今在浮动利率账册上与超大型银行发放方正面竞争。

## 纳入范围的银行全集

十一家银行构成比较的核心：

- **生态锚定零售** — [[banking/rakuten-bank|Rakuten Bank]]、[[banking/paypay-bank|PayPay Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]。
- **证券相邻／资产形成** — [[banking/sony-bank|Sony Bank]]、[[banking/daiwa-next-bank|Daiwa Next Bank]]、经由 [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]]（NEOBANK／住房贷款锚定网络银行）的 [[regional-banks/sbi-shinsei-bank|SBI Shinsei]] 背景条目。
- **企业 API／中小企业** — [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]]。
- **BaaS／合作伙伴主导** — [[banking/minna-bank-baas-model|Minna Bank]]（福冈 FG 数字银行品牌）、[[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] NEOBANK 合作伙伴体系。
- **地区数字** — [[banking/ui-bank|UI Bank]]（东京 Kiraboshi FG）。
- **fintech 发牌** — [[banking/mercari-bank|Mercari Bank]]（2025-2026 推出）。
- **邮政／政府锚定** — [[regional-banks/japan-post-bank|Japan Post Bank]] 数字渠道（Yucho Direct + Yucho Pay）被纳入作为数字渠道比较，尽管它并非纯粹的网络银行。

该群体不包括仅面向企业的数字放贷机构（如 Funds）、仅有钱包的经营者（无银行实体的 [[card-issuers/paypay-card|PayPay Card]]）以及尚未推出的项目。

## 核心矩阵 — 存款基础与母生态

| 银行 | 母集团 | 存款基础（¥万亿，~2026）| 账户基础（百万）| 主要存款驱动 |
|---|---|---|---|---|
| [[banking/rakuten-bank|Rakuten Bank]] | 乐天集团（[[business/rakuten-group-mobile-finance-bundling-case|mobile-finance bundling]]）| ~10-12 | ~16-17 | Rakuten Pay 归集、工资结算、Rakuten Card 自动扣款 |
| [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] | 三井住友信托 × [[megabanks/sbi-hd|SBI HD]] | ~10-11 | ~7-8 | 住房贷款发放 + JAL／SBI／Yamada／T-NEOBANK 合作账户 |
| [[banking/paypay-bank|PayPay Bank]] | SoftBank／PayPay／Yahoo Japan 体系 | ~2-3 | ~7-8 | PayPay 钱包充值、工资账户、轻 ATM 渠道 |
| [[banking/au-jibun-bank|au Jibun Bank]] | KDDI × MUFG（[[megabanks/au-fh|au FH]] × [[megabanks/mufg|MUFG]]）| ~5-6 | ~6-7 | au PAY 联动、住房贷款账册、工资账户、外汇零售 |
| [[banking/sony-bank|Sony Bank]] | 索尼金融集团（[[business/sony-fg-partial-spinoff-case|SFG spinoff]]）| ~3-4 | ~1.7-2.0 | 住房贷款账册 + 多币种外汇存款 + 资产形成账户 |
| [[banking/daiwa-next-bank|Daiwa Next Bank]] | [[securities-firms/daiwa-sg|Daiwa Securities Group]] | ~5-6 | ~1.5-1.7 | 证券归集存款、结构性存款、资产形成客户群 |
| [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] | [[regional-banks/aozora-bank|Aozora Bank]] × [[business/gmo-internet-group|GMO Internet Group]] | ~1.5-2 | ~0.7-0.9 | 中小企业／初创企业账户、基于 API 的企业资金管理 |
| [[banking/ui-bank|UI Bank]] | 东京 Kiraboshi FG | ~0.3-0.5 | ~0.3-0.4 | 面向地区集团的仅 App 数字存款渠道 |
| [[banking/minna-bank-baas-model|Minna Bank]] | 福冈 FG | ~0.2-0.4 | ~0.9-1.1 | 移动原生账户 + BaaS 合作品牌 |
| [[banking/mercari-bank|Mercari Bank]] | Mercari 集团 | <0.2 （早期）| 早期阶段 | Mercari Marketplace 卖家现金流 + Mercari 积分桥接 |
| [[regional-banks/japan-post-bank|Japan Post Bank]]（数字渠道）| 日本邮政控股 | ~190 （整家银行）| ~120 （整家银行）| 分行 + ATM 基础；Yucho Direct 数字渠道为叠加层 |

存款基础数值为来自银行 IR 页面、集团年报及 FSA 汇总的公开来源近似值。请使用银行 IR 页面获取精确的资产负债表数字。

## 核心矩阵 — 外汇、住房贷款、卡及 API 深度

| 银行 | 外汇产品深度 | 住房贷款发放 | 借记／信用叠加 | 银行 API 发布 |
|---|---|---|---|---|
| [[banking/rakuten-bank|Rakuten Bank]] | 日元 + 美元 + 欧元零售外汇、外汇借记卡 | 经由集团发放的浮动利率住房贷款 | Rakuten Card 联动（无自有卡品牌）| 面向 [[banking/japan-baas-operating-models|BaaS]] 合作方的标准 FA API |
| [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] | 有限的外汇零售；外汇经由 [[securities-firms/sbi-fx-trade|SBI FX Trade]] | 主要浮动利率住房贷款锚 | Mister Debit（Visa 借记）| 广泛 — 面向 JAL、T-NEOBANK、Yamada、SBI 等的 NEOBANK API |
| [[banking/paypay-bank|PayPay Bank]] | 日元 + 美元零售外汇、外汇存款 | 有限 — 合作伙伴转介 | PayPay 借记（J-Debit + Visa 借记）、PayPay Card 联动 | 面向 PayPay 钱包归集的标准银行 API |
| [[banking/au-jibun-bank|au Jibun Bank]] | 多币种外汇存款、外汇保证金、外汇借记 | 住房贷款账册增长中 | au PAY 卡／au PAY 借记联动 | 标准银行 API + au PAY 联动 |
| [[banking/sony-bank|Sony Bank]] | **最强零售外汇** — 11+ 币种、MoneyKit 外汇存款、外汇借记 | 自推出以来即为住房贷款核心产品 | Sony Bank WALLET（Visa 借记）| 标准银行 API |
| [[banking/daiwa-next-bank|Daiwa Next Bank]] | 有限的外汇零售 | 无 | 无（仅存款）| 与 [[securities-firms/daiwa-sg|Daiwa]] 的证券归集联动 |
| [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] | 经由母公司 [[regional-banks/aozora-bank|Aozora]] 的企业外汇 | 有限的零售住房贷款 | Visa Debit | **广泛的企业 API** — 嵌入式支付、SaaS 连接器 |
| [[banking/ui-bank|UI Bank]] | 有限 | 有限 | Visa 借记 | 标准银行 API |
| [[banking/minna-bank-baas-model|Minna Bank]] | 无／有限 | 无 | Visa 借记 | 带合作品牌 API 的 **原生 BaaS 架构** |
| [[banking/mercari-bank|Mercari Bank]] | 初期无 | 无 | 桥接至 Mercari Card | Mercari Marketplace 集成 |
| [[regional-banks/japan-post-bank|Japan Post Bank]] | 经由 Yucho 的有限零售外汇 | 无 | JP Bank Visa 借记、JP Bank Card | 有限的公共 API |

[[banking/sony-bank|Sony Bank]] 历来以 **多币种零售外汇** 锚定其差异化，且 2026 仍将其显示为网络银行中最广泛的币种菜单。[[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] 明确锚定 **企业 API** 通道。[[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] 同时锚定 **住房贷款发放** 与 **NEOBANK BaaS**。

## 核心矩阵 — 2025-2026 增长、费用、利息、嵌入式金融合作关系

| 银行 | 2025-2026 存款增长轨迹 | ATM 费用结构 | 境内转账费 | 外汇点差层级 | 利率层级（2026）| 嵌入式金融合作生态 |
|---|---|---|---|---|---|---|
| [[banking/rakuten-bank|Rakuten Bank]] | 高个位数同比；工资账户驱动 | 按 Happy Program 层级每月免费 1-7次 | 按层级 ¥52-145  | 中（例如 25 钱 美元）| 分层（0.02-0.10% 基线；促销更高）| Rakuten Card、Rakuten Pay、Rakuten Securities、NTT Docomo（Rakuten Mobile 合作轮次后的交叉折扣）|
| [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] | 高 — 住房贷款账册 + NEOBANK 账户 | 按 Smart Program 等级每月免费 2-15次 | 按等级每月免费 1-20次 | 中-紧 | 分层，高等级有存款利率加成 | JAL NEOBANK、T-NEOBANK、SBI Securities、Yamada NEOBANK、[[megabanks/sbi-hd|SBI HD]] 交叉体系 |
| [[banking/paypay-bank|PayPay Bank]] | 强 — PayPay 钱包充值 | 在 7-Eleven ATM 免费（有限），其他处收费 | 满足条件免费 | 更宽 | 促销利率优惠；基线 0.02% | PayPay 钱包、PayPay Card、Yahoo／LINE Yahoo ID 联动 |
| [[banking/au-jibun-bank|au Jibun Bank]] | 稳定；KDDI 生态 | 分层免费 | 满足条件免费 | 中 | 分层，含 au PAY 卡联动加成 | au PAY 生态、KDDI MNO、[[megabanks/mufg|MUFG]] |
| [[banking/sony-bank|Sony Bank]] | 稳定；外汇 + 住房贷款 | 每月免费 4次 + 超出付费 | 按渠道 ¥110-330  | 紧（外汇锚定定位）| 分层，含外汇存款 | 索尼集团实体、住房贷款发放合作方 |
| [[banking/daiwa-next-bank|Daiwa Next Bank]] | 证券归集驱动 | 有限（仅存款模型）| 有限（经由 Daiwa 转账）| 不适用 | 结构性存款促销层级 | [[securities-firms/daiwa-sg|Daiwa Securities]] |
| [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] | 稳定的中小企业／企业 | 以企业为中心的费用表 | 对企业极具竞争力 | 企业外汇上偏紧 | 企业存款利率层级 | freee、MoneyForward、会计 SaaS、薪资、支付平台 |
| [[banking/ui-bank|UI Bank]] | 缓慢增长 — 利基 | 有限（仅 App）| 标准层级 | 不适用 | 促销高收益存款推出 | 东京 Kiraboshi FG 地区合作方 |
| [[banking/minna-bank-baas-model|Minna Bank]] | 移动／BaaS 增长 | 仅 App — 无自有 ATM | App 锚定 | 不适用 | 标准 | Recruit、Trust Bank GW、合作品牌 BaaS |
| [[banking/mercari-bank|Mercari Bank]] | 经由 Mercari 用户群早期爬坡 | 目前公开资料尚不支持对 ATM 布点进行排名比较 | 目前公开资料尚不支持费用层级比较 | 不适用 | 公开产品条件在推出规模上仍需确认 | Mercari Marketplace、Mercari Card 联动 |
| [[regional-banks/japan-post-bank|Japan Post Bank]] | 随客户多元化略有流出 | 在全国日本邮政 ATM 免费 | ¥146-330 | 有限的零售外汇 | 标准偏低 | Yucho Pay（自有钱包）、与地区银行的连接 |

增长轨迹一行为定性描述，因为存款增长高度季节性且受促销影响。请使用银行的 IR 站点获取存款余额的季度披露。

## 差异化轴

### 存款基础规模层级

该群体明显分裂为各存款层级：

- **万亿日元层级（¥5万亿+）** — [[banking/rakuten-bank|Rakuten Bank]]、[[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]、[[banking/daiwa-next-bank|Daiwa Next Bank]]。它们在原始存款特许经营上与地区银行竞争。
- **中层（¥1-5万亿）** — [[banking/sony-bank|Sony Bank]]、[[banking/paypay-bank|PayPay Bank]]、[[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]]。分别按产品（外汇、钱包、企业 API）专业化。
- **次万亿层级（<¥1万亿）** — [[banking/ui-bank|UI Bank]]、[[banking/minna-bank-baas-model|Minna Bank]]、[[banking/mercari-bank|Mercari Bank]]。早期阶段或利基。
- **邮政锚（¥190万亿）** — [[regional-banks/japan-post-bank|Japan Post Bank]] 自成一类。Yucho Direct 作为数字渠道在功能层面可比，但该银行的存款基础来自分行与 ATM 特许经营。

### 外汇产品深度作为差异化

[[banking/sony-bank|Sony Bank]] 明确占据外汇深度一角。[[banking/au-jibun-bank|au Jibun Bank]] 是拥有多币种外汇存款与外汇保证金交易的最接近同业。[[banking/rakuten-bank|Rakuten Bank]] 与 [[banking/paypay-bank|PayPay Bank]] 提供较窄的外汇产品菜单。非外汇银行（[[banking/daiwa-next-bank|Daiwa Next Bank]]、[[banking/minna-bank-baas-model|Minna Bank]]、[[banking/mercari-bank|Mercari Bank]]）让出外汇客户分部。

### 住房贷款发放作为规模杠杆

对已进入住房贷款市场的网络银行而言，浮动利率住房贷款仍是最大的单一资产类别。[[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] 是最大的网络银行发放方。[[banking/sony-bank|Sony Bank]] 与 [[banking/au-jibun-bank|au Jibun Bank]] 紧随其后。[[banking/rakuten-bank|Rakuten Bank]] 经由集团结构发放。[[banking/paypay-bank|PayPay Bank]] 与 [[banking/daiwa-next-bank|Daiwa Next Bank]] 不锚定住房贷款。

### 银行 API 发布姿态

可观察到三个发布层级：

- **广泛的企业 API** — [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] 为锚点；明确聚焦企业资金管理与 SaaS 连接器 API。
- **广泛的 BaaS／白标** — [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]]（NEOBANK）与 [[banking/minna-bank-baas-model|Minna Bank]] BaaS。它们让合作品牌发布各自类银行的 UX，而由银行持有牌照。
- **标准零售银行 API** — 其余多数。银行 API 为 [[banking/japan-baas-operating-models|electronic payment agency / FA]] 制度而发布，但该银行不追求白标分销。

### 嵌入式金融合作生态

嵌入式金融合作伙伴一栏揭示了哪些网络银行在 **分销面** 上竞争，而哪些在 **直接获客** 上竞争。[[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] 经由 NEOBANK 与 JAL、Yamada、T（CCC）等合作；[[banking/minna-bank-baas-model|Minna Bank]] 与 Recruit 等合作；[[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] 与 freee、MoneyForward、薪资 SaaS 集成。生态零售银行（[[banking/rakuten-bank|Rakuten Bank]]、[[banking/paypay-bank|PayPay Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]）依靠各自的集团生态，而非第三方合作品牌。

## 集群小结 — 按杠杆划分的竞争图

一个有用的集群读法：

- **外汇 + 资产形成集群** — [[banking/sony-bank|Sony Bank]]、[[banking/daiwa-next-bank|Daiwa Next Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]。
- **住房贷款发放集群** — [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]]、[[banking/sony-bank|Sony Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]、[[banking/rakuten-bank|Rakuten Bank]]。
- **生态钱包集群** — [[banking/rakuten-bank|Rakuten Bank]]、[[banking/paypay-bank|PayPay Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]。
- **BaaS／合作伙伴集群** — [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] NEOBANK、[[banking/minna-bank-baas-model|Minna Bank]]。
- **企业／中小企业 API 集群** — [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]]。
- **地区数字集群** — [[banking/ui-bank|UI Bank]]、[[regional-banks/01-bank|01 Bank]]（同业参照）。
- **fintech 发牌集群** — [[banking/mercari-bank|Mercari Bank]]。
- **邮政锚** — [[regional-banks/japan-post-bank|Japan Post Bank]]。

## 来源注意事项

1. **存款基础数字** 为来自银行 IR 页面、集团年报及 FSA 汇总的公开来源近似值。精确比较应使用季度披露。
2. **账户基础数字** 将仅银行的零售客户与 BaaS 合作账户混合。[[banking/japan-net-bank-competition-map|competition map]] 论述了为何 BaaS 账户可能高估主银行转化。
3. **费用表** 随促销方案频繁变动。请使用各银行的费用表页面获取当前值。
4. **外汇点差** 因币种、渠道及一日中的时间而异。请使用各银行的外汇页面获取实时汇率。
5. **利率层级** 取决于日本央行政策。2026 基线假定处于正短端利率区间；高于基线的促销利率很常见。
6. **住房贷款发放量** 部分银行按年披露，部分按季度披露。请使用各银行的 IR 页面获取经核实的流量数据。

## 研究清单

扩展本矩阵时：

1. 拉取银行 IR 页面或季度披露以获取存款余额与账户数。
2. 经由 FSA 银行信息披露汇总交叉核对。
3. 阅读银行的 API 开发者门户以了解银行 API 深度与合作伙伴清单。
4. 使用 [[banking/japan-baas-operating-models|BaaS operating models]] 页面对该银行的 BaaS 姿态进行分类。
5. 使用 [[banking/quick-deposit-four-methods|quick deposit four methods]] 了解支付渠道背景。
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
- [[regional-banks/japan-post-bank]]
- [[megabanks/sbi-hd]]
- [[megabanks/mufg]]
- [[securities-firms/daiwa-sg]]
- [[regional-banks/01-bank]]
- [[INDEX|FinWiki index]]

## Sources

- FSA licensed bank list and bank disclosure aggregate.
- Sony Bank corporate profile and product disclosure.
- UI Bank corporate site and product page.
- GMO Aozora Net Bank company outline and corporate API documentation.
- Daiwa Next Bank corporate disclosure and securities-sweep documentation.
- Rakuten Bank press releases and group disclosure.
- PayPay Bank company information and product pages.
- Sumishin SBI Net Bank corporate profile and NEOBANK partner disclosure.
- au Jibun Bank performance disclosure.
- Minna Bank corporate site and BaaS partner page.
- Mercari Bank launch disclosure.
- Japan Post Bank IR.
