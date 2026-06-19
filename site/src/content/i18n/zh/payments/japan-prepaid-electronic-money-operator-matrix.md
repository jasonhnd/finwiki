---
source: payments/japan-prepaid-electronic-money-operator-matrix
source_hash: 26932cc78e14e231
lang: zh
status: machine
fidelity: ok
title: "日本预付电子货币运营商矩阵"
translated_at: 2026-06-19T06:09:18.037Z
---

# 日本预付电子货币运营商矩阵

## TL;DR

日本的预付电子货币格局**并非单一行业**——它至少是三个不同的栈（零售预付、交通预付、数字钱包预付），在结账时看似相似，但在资金结算法（資金決済法）下处于不同的**预付牌照类别**、不同的**技术基础**（FeliCa vs MIFARE vs 纯数字）以及不同的**集团法人结构**（零售 FG、交通铁道 FG、电商 FG）之上。将 Edy、nanaco、WAON、Suica、PASMO、ICOCA、Kitaca、TOICA、manaca、nimoca、SUGOCA 平摊进一个桶里的读者，会误读退款政策、移动整合深度、加盟店网络经济学，以及各发行人的集团银行如何为浮存金兜底。本条目是一个并排比较面，当问题是**某个特定品牌实际属于哪家预付电子货币运营商**时（先于任何加盟店侧或消费者侧分析），[[payments/INDEX|payments index]] 的其余部分都指向这里。后付费 / 信用侧请与 [[payments/japan-consumer-credit-operator-comparison-matrix|JP consumer credit operator matrix]] 比较。

## Wiki 路径

这作为跨类别预付电子货币参考位于 [[payments/INDEX|payments index]] 之下。请将其与 [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers JP index]]（按发行人登记来源）、[[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]（决定各运营商持有哪种牌照的监管边界）、[[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|JP transit prepaid Suica/PASMO/ICOCA economics]]（交通侧深度剖析）、[[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco retail prepaid comparison]]（零售侧深度剖析）、[[payments/famipay-valucreate-strategy|FamiPay ValuCreate strategy]]（便利店 FG 预付通道）、[[payments/japan-payment-scheme-economics-matrix|JP payment scheme economics matrix]]（跨方案经济学），以及 [[payments/japan-code-payment-competitive-map|JP code-payment competitive map]]（这些预付品牌有时叠加于其上的 QR / 码支付叠加层）一并阅读。集团实体锚点为 [[payment-firms/rakuten-edy|Rakuten Edy]]、[[card-issuers/seven-card-service|Seven Card Service]]（nanaco 运营商）和 [[card-issuers/aeon-financial-service|AEON Financial Service]]（WAON 运营商），更广泛的集团面位于 [[loyalty/japan-points-landscape|JP points landscape]]、[[retail/seven-and-i-hd|Seven & i HD]] 和 [[retail/aeon-group|AEON Group]]。

## 为何此矩阵重要

日本的预付电子货币是 **JPY 25万亿级结算层**（全部 11+ 品牌的年交易额），按发行人的差异对以下方面有重大影响：(a) **预付余额浮存金经济学**——多少日元在发行人资产负债表上停留多久，以及在资金结算法下适用哪种监管存缴 / 担保义务，(b) **加盟店侧受理经济学**——Suica/PASMO 受理受交通 FG 运营成本约束费率，而 WAON/nanaco 受理受零售 FG 集团内交叉补贴约束费率，(c) **移动整合深度**——Apple Pay / Google Pay 支持以不同顺序在不同品牌落地，Mobile FeliCa vs 仅数字钱包途径分道扬镳，(d) **退款 / 消费者保护制度**——交通品牌拥有完善的挂失 / 退款流程，而纯预付品牌往往缺乏，以及 (e) **集团银行兜底**——浮存金负债由母集团的银行或银行邻接实体隐性或显性兜底。

下方矩阵列出这些维度，使读者能够区分"Suica 是拥有 JR 东日本资产负债表支持的、银行法邻接的交通发行人"与"nanaco 是拥有 Seven Bank / Seven & i 集团支持的资金结算法第三者型预付发行人"以及"乐天 Edy 是乐天 FG 超级商店内的资金结算法第三者型预付发行人"——三个在结构上不同、却共享 FeliCa 触碰 UX 的运营商画像。

## 按发行人画像

### Edy — 乐天 Edy（乐天集团 4755）

**运营商**：[[payment-firms/rakuten-edy|Rakuten Edy Co., Ltd.]]（乐天集团的子公司，TSE Prime 4755）。**牌照**：资金结算法第三者型预付式支付手段发行人（third-party-type prepaid issuer）。**技术**：FeliCa（Edy IC 芯片；也含面向 Apple Pay / Google Pay / Osaifu-Keitai 的 Mobile FeliCa）。**推出**：2001 由 bitWallet 推出（乐天于 2010, 收购，于 2012更名为乐天 Edy）。**分销**：实体 Edy 卡、Mobile FeliCa、Apple Pay Edy、Google Pay Edy。**加盟店网络**：约 1.1M 个点位（预付品牌中最广泛者之一）。**移动整合**：非常深——Apple Pay 于 2016-10, 加入 Edy，Google Pay 于 2018-05, 加入，自推出起即为原生 Osaifu-Keitai。**退款政策**：可在乐天 Edy 办事处退余额（手续繁琐）。**集团银行兜底**：乐天银行（TSE Prime 5838）为集团互联网银行；Edy 浮存金由乐天 FG 资产负债表兜底。**集团交叉链接**：乐天点数整合——经 Edy 赚取 / 使用乐天点数。跨方案比较请参见 [[payments/japan-payment-scheme-economics-matrix|JP payment scheme economics matrix]]。

### nanaco — Seven Card Service（Seven & i HD 3382）

**运营商**：[[card-issuers/seven-card-service|Seven Card Service Co., Ltd.]]（[[retail/seven-and-i-hd|Seven & i HD]] 内的子公司，TSE Prime 3382）。**牌照**：资金结算法第三者型预付式支付手段发行人。**技术**：FeliCa（nanaco 卡 + Mobile FeliCa）。**推出**：2007-04 （首日，可在全国 7-Eleven 使用）。**分销**：实体 nanaco 卡、nanaco 移动版（Android Osaifu-Keitai）、Apple Pay nanaco。**加盟店网络**：约 0.7M 个点位，严重偏向 Seven & i 集团门店（7-Eleven、伊藤洋华堂、SOGO/西武 遗留、Denny's）。**移动整合**：Apple Pay 于 2019-10加入 nanaco。**退款政策**：可在 Seven Bank 柜台退余额（Seven Bank ATM 为现金出入口）。**集团银行兜底**：[[regional-banks/seven-bank|Seven Bank]]（TSE Prime 8410）为集团银行；nanaco 的现金出入口以 Seven Bank ATM 为主导渠道——这在预付品牌中具有结构性特殊性（大多数使用第三方便利店或合作银行 ATM）。**集团交叉链接**：nanaco 点数（Seven & i 集团购买为 1.0%，标准为 0.5%），以及在 Seven Card Service 内与 [[payments/funds-transfer-service-providers-japan-index|funds-transfer]] 及信用卡流的整合。直接对决细节请参见 [[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco retail prepaid comparison]]。

### WAON — AEON 集团（AEON 8267 / AEON Financial Service 8570）

**运营商**：[[card-issuers/aeon-financial-service|AEON Financial Service Co., Ltd.]]（[[retail/aeon-group|AEON Group]] 内的子公司，母公司 AEON Co. TSE Prime 8267；AEON Financial Service 另行在 TSE Prime 8570 上市）。**牌照**：资金结算法第三者型预付式支付手段发行人。**技术**：FeliCa（WAON 卡 + Mobile FeliCa）。**推出**：2007-04 （与 nanaco 实质上同一推出月份，有意的零售预付竞争）。**分销**：实体 WAON 卡、移动版 WAON（Android Osaifu-Keitai）、Apple Pay WAON。**加盟店网络**：约 1.0M 个点位，严重偏向 AEON 集团门店（AEON Mall、MaxValu、MiniStop、AEON 药局、大荣）。**移动整合**：Apple Pay 于 2021-05 加入 WAON（明显晚于 nanaco）。**退款政策**：可在 AEON 服务柜台退余额。**集团银行兜底**：[[card-issuers/aeon-bank|AEON Bank]]（集团互联网银行）与 AEON Financial Service 资产负债表共同为 WAON 浮存金兜底。**集团交叉链接**：WAON 点数 + AEON Card 自动充值整合；主导的 AEON 购物者 UX 是与 AEON Card 关联的 **WAON 自動チャージ** 自动充值。请参见 [[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco retail prepaid comparison]]。

### Suica — JR 东日本（东日本旅客铁道 9020）

**运营商**：东日本旅客铁道公司（JR 东日本，TSE Prime 9020）——Suica 由 **JR 东日本直接运营**（而非由单独子公司），这与上述零售预付发行人在结构上不同。**牌照**：资金结算法第三者型预付式支付手段发行人。**技术**：FeliCa（Suica IC + Mobile Suica，在交通卡中拥有最广泛的 Apple Pay / Google Pay / Mobile FeliCa 支持）。**推出**：2001-11 （最初为仅交通的车费支付卡；于 2004-03扩展至购物支付）。**分销**：实体 Suica 卡、Mobile Suica（Android）、Apple Pay Suica（自 2016-10 起——日本 iOS 的头条推出）、Google Pay Suica。**加盟店网络**：约 1.6M 个点位（预付电子货币中最广泛），包括所有可互操作的全国相互利用交通卡受理加盟店。**移动整合**：最深——Apple Pay Suica 2016-10 是日本一次重大的 iOS 推出事件。**退款政策**：完善——在 JR 东日本绿色窗口（Midori-no-Madoguchi）售票柜台退 Suica 余额及 500 日元押金，外加保留余额的记名 Suica 挂失补发。**集团银行兜底**：JR 东日本不经营银行；Suica 浮存金作为带有资金结算法强制拨备的预付负债停留在 JR 东日本合并资产负债表上。**集团交叉链接**：JRE POINT（JR 东日本忠诚计划）整合、Atre / NewDays / Beck's Coffee 门店网络、ekinet（在线购票）整合、JR 东日本 Bank Card（合作方瑞穗）联名。Suica 是让 10 主要交通卡跨彼此网络运行的全国相互利用方案的**互操作性主干**；参见 [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|JP transit prepaid Suica/PASMO/ICOCA economics]]。

### PASMO — PASMO 公司

**运营商**：PASMO 株式会社（由 25+ 东京都市圈私铁与巴士运营商持有的合资发行人，包括东急、小田急、京王、东武、西武、京成、东京 Metro、都营等）。**牌照**：资金结算法第三者型预付式支付手段发行人。**技术**：FeliCa（PASMO 卡 + Mobile PASMO）。**推出**：2007-03 （在 Suica-PASMO 全国相互利用推出前一个月）。**分销**：实体 PASMO 卡、Mobile PASMO（Android，2020-10）、Apple Pay PASMO（2020-10 ——与 Mobile PASMO Android 同时推出）。**加盟店网络**：与 Suica 相同的可互操作全国相互利用网络（约 1.6M 个点位）。**移动整合**：Apple Pay PASMO 于 2020-10, 到来，**晚于 Apple Pay Suica 4 年**——这一滞后反映了让 25+ 利益相关运营商达成一致的合资协调成本，相对于作为单一决策者的 JR 东日本。**退款政策**：在发行铁道售票处退余额（手续因发行铁道而异）、保留余额的记名 PASMO 补发。**集团银行兜底**：各成员铁道承担其按比例的浮存金负债份额；无单一银行兜底。**集团交叉链接**：各成员铁道的忠诚计划（东急 TOKYU POINT、小田急 OdakyuPoints、东京 Metro To Me Card 等）——PASMO 是共享的铁道技术，但忠诚计划按发行铁道碎片化。参见 [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|JP transit prepaid Suica/PASMO/ICOCA economics]]。

### ICOCA — JR 西日本（西日本旅客铁道 9021）

**运营商**：西日本旅客铁道公司（JR 西日本，TSE Prime 9021），直接运营。**牌照**：资金结算法第三者型预付式支付手段发行人。**技术**：FeliCa（ICOCA 卡 + Mobile ICOCA）。**推出**：2003-11。**分销**：实体 ICOCA 卡、Mobile ICOCA（Android 2023-06）、Apple Pay ICOCA（2023-06 ——因 JR 西日本技术投资时机而远晚于 Suica）。**加盟店网络**：相同的可互操作全国相互利用网络。**移动整合**：Apple Pay ICOCA 2023-06 （约晚于 Suica 7 年）。**退款政策**：在 JR 西日本售票处退余额、记名 ICOCA 补发。**集团银行兜底**：JR 西日本资产负债表（无集团银行）。**集团交叉链接**：ICOCA POINT（忠诚）与 J-WEST Card（合作方 SMBC）。请参见 [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|JP transit prepaid Suica/PASMO/ICOCA economics]]。

### Kitaca — JR 北海道

**运营商**：北海道旅客铁道公司（JR 北海道，非公开——未在 TSE 上市，作为特殊会社与政府相关）。**牌照**：资金结算法第三者型预付式支付手段发行人。**技术**：FeliCa（Kitaca 卡；截至 2026无 Mobile Kitaca）。**推出**：2008-10。**分销**：仅实体卡（无移动整合）。**加盟店网络**：经全国相互利用可互操作（受理使用更广泛网络）。**移动整合**：**无**——Kitaca 是主要 10 交通卡中唯一没有 Mobile / Apple Pay / Google Pay 支持者，反映 JR 北海道受限的财务状况。**退款政策**：在 JR 北海道售票处退余额。**集团银行兜底**：JR 北海道资产负债表。**集团交叉链接**：忠诚计划深度极小。

### TOICA — JR 东海（中央旅客铁道 9022）

**运营商**：中央旅客铁道公司（JR 东海，TSE Prime 9022），直接运营。**牌照**：资金结算法第三者型预付式支付手段发行人。**技术**：FeliCa（TOICA 卡；截至 2026Mobile TOICA 处于试点/有限阶段）。**推出**：2006-11。**分销**：实体卡，移动版待定。**加盟店网络**：全国相互利用可互操作。**移动整合**：相对 Suica/PASMO 有限 / 较晚——JR 东海历来优先于 Mobile TOICA 之上推进新干线车费整合（EX-IC、SmartEX）。**退款政策**：售票处退款。**集团银行兜底**：JR 东海资产负债表。**集团交叉链接**：JR Central Tower / JR 东海相关零售、东海道新干线预约的 EX-IC 整合。

### manaca — 名铁 / 名古屋铁道

**运营商**：株式会社 MIC（名铁 IC 卡）——名铁（名古屋铁道）与名古屋市交通局的合资。**牌照**：资金结算法第三者型预付式支付手段发行人。**技术**：FeliCa（manaca 卡；无广泛移动整合）。**推出**：2011-02。**分销**：实体卡。**加盟店网络**：全国相互利用可互操作。**移动整合**：有限。**退款政策**：售票处退款。**集团银行兜底**：名铁资产负债表 + 名古屋市交通局。**集团交叉链接**：名铁忠诚（名铁 MEMBERS）、名古屋市交通卡遗留。

### nimoca — 西铁 / 西日本铁道

**运营商**：株式会社 Nimoca（Nimoca Co., Ltd.）——由西日本铁道（西铁）控制的合资。**牌照**：资金结算法第三者型预付式支付手段发行人。**技术**：FeliCa（nimoca 卡）。**推出**：2008-05。**分销**：实体卡。**加盟店网络**：全国相互利用可互操作。**移动整合**：有限。**退款政策**：售票处退款。**集团银行兜底**：西铁资产负债表。**集团交叉链接**：nimoca 点数、福冈都市圈的西铁巴士 / 铁道整合。

### SUGOCA — JR 九州（九州旅客铁道 9142）

**运营商**：九州旅客铁道公司（JR 九州，TSE Prime 9142），直接运营。**牌照**：资金结算法第三者型预付式支付手段发行人。**技术**：FeliCa（SUGOCA 卡）。**推出**：2009-03。**分销**：实体卡。**加盟店网络**：全国相互利用可互操作。**移动整合**：截至 2026 有限（JR 九州新干线整合经由单独的 EX-IC 途径）。**退款政策**：售票处退款。**集团银行兜底**：JR 九州资产负债表。**集团交叉链接**：JR 九州零售与旅行忠诚。

## 大比较矩阵表

| 品牌 | 运营商 | 母集团 | 牌照（资金结算法） | 技术 | 推出 | 加盟店网络（约） | Apple Pay 支持起始 | 退款政策 | 集团银行兜底 | 集团交叉链接 | 栈层级 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **Edy** | [[payment-firms/rakuten-edy\|Rakuten Edy]] | 乐天集团（4755） | 第三者型前払 | FeliCa（Mobile FeliCa） | 2001 | 约 1.1M | 2016-10 | 办事处（手续） | 乐天银行（5838） | 乐天点数 | 零售 / 电商 |
| **nanaco** | [[card-issuers/seven-card-service\|Seven Card Service]] | [[retail/seven-and-i-hd\|Seven & i HD]]（3382） | 第三者型前払 | FeliCa（Mobile FeliCa） | 2007-04 | 约 0.7M | 2019-10 | Seven Bank 柜台 | [[regional-banks/seven-bank\|Seven Bank]]（8410） | nanaco 点数 + 7&i 集团 | 零售（CVS 聚焦） |
| **WAON** | [[card-issuers/aeon-financial-service\|AEON Financial Service]]（8570） | [[retail/aeon-group\|AEON Group]]（8267） | 第三者型前払 | FeliCa（Mobile FeliCa） | 2007-04 | 约 1.0M | 2021-05 | AEON 服务柜台 | [[card-issuers/aeon-bank\|AEON Bank]] | WAON 点数 + AEON Card 自动充值 | 零售（购物中心聚焦） |
| **Suica** | JR 东日本（直接运营） | JR 东日本（9020） | 第三者型前払 | FeliCa（Mobile FeliCa） | 2001-11 | 约 1.6M | 2016-10 | 绿色窗口（完善） | JR 东日本资产负债表（无集团银行） | JRE POINT + ekinet + Atre | 交通（东京·东日本） |
| **PASMO** | PASMO 公司（25+ 铁道的 JV） | 都市圈私铁 | 第三者型前払 | FeliCa（Mobile FeliCa） | 2007-03 | 约 1.6M（相互利用） | 2020-10 | 各发行铁道办事处 | 成员铁道资产负债表 | 各铁道忠诚（TOKYU POINT 等） | 交通（东京 Metro 私铁） |
| **ICOCA** | JR 西日本（直接运营） | JR 西日本（9021） | 第三者型前払 | FeliCa（Mobile FeliCa） | 2003-11 | 约 1.6M（相互利用） | 2023-06 | JR 西日本售票处 | JR 西日本资产负债表 | ICOCA POINT + J-WEST Card（SMBC 合作方） | 交通（关西） |
| **Kitaca** | JR 北海道（直接运营） | JR 北海道（特殊会社） | 第三者型前払 | FeliCa | 2008-10 | 相互利用 | **无** | JR 北海道售票处 | JR 北海道资产负债表 | 极小 | 交通（北海道） |
| **TOICA** | JR 东海（直接运营） | JR 东海（9022） | 第三者型前払 | FeliCa | 2006-11 | 相互利用 | 有限 / 较晚 | JR 东海售票处 | JR 东海资产负债表 | EX-IC 新干线整合 | 交通（东海） |
| **manaca** | MIC | 名铁 + 名古屋市 | 第三者型前払 | FeliCa | 2011-02 | 相互利用 | 有限 | 各运营商办事处 | 名铁 + 市交通局 | 名铁 MEMBERS | 交通（名古屋） |
| **nimoca** | Nimoca 公司 | 西铁（西日本铁道） | 第三者型前払 | FeliCa | 2008-05 | 相互利用 | 有限 | 各运营商办事处 | 西铁资产负债表 | nimoca 点数 + 西铁整合 | 交通（福冈） |
| **SUGOCA** | JR 九州（直接运营） | JR 九州（9142） | 第三者型前払 | FeliCa | 2009-03 | 相互利用 | 有限 | JR 九州售票处 | JR 九州资产负债表 | JR 九州旅行/零售 | 交通（九州） |

## 跨轴：零售 FG vs 交通铁道 FG vs 电商 FG

上方矩阵列出 11 个品牌，但它们收敛为决定交叉链接经济学、退款流程复杂性以及集团银行兜底姿态的**三个运营商类别**：

### 零售 FG 预付（由零售集团的金融子公司发行）

- **nanaco** — 由 Seven & i HD 内的 Seven Card Service 发行
- **WAON** — 由 AEON 集团内的 AEON Financial Service 发行

**定义性特征**：加盟店网络严重集中于母集团门店、现金出入口经母集团银行 ATM（nanaco 的 Seven Bank）或母门店柜台（WAON 的 AEON）、忠诚计划与母集团购物行为深度整合、自动充值关联母集团信用卡（AEON Card → WAON 自动充值）、集团内信用卡交叉销售为主导的单位经济学驱动力。零售 FG 预付**在运营上是带有预付包装的零售忠诚计划**——预付负债停留在金融子公司资产负债表上，但经济逻辑是捕获购物者频率而非提取支付利差。直接对决细节请参见 [[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco retail prepaid comparison]]。

### 交通铁道 FG 预付（由铁道运营商发行）

- **Suica** — JR 东日本
- **PASMO** — 东京 Metro 私铁 JV
- **ICOCA** — JR 西日本
- **Kitaca** — JR 北海道
- **TOICA** — JR 东海
- **manaca** — 名铁 + 名古屋市
- **nimoca** — 西铁
- **SUGOCA** — JR 九州

**定义性特征**：预付作为车费收取基础设施的延伸而发行、完善的退款流程（铁道售票处网络处理零售 FG 预付所苦战的挂失 / 退款流）、全国相互利用相互可操作性主干将 10 主要品牌连接成单一受理网络、移动整合时机取决于各运营商的技术预算（Suica 最早，ICOCA 晚 7 年，Kitaca 仍完全没有）、大多数情况下无集团银行（铁道资产负债表直接承担浮存金负债）。交通 FG 预付**在运营上是扩展至零售受理的交通支付系统**——最初目的是触碰乘车，零售受理是副产品。交通侧深度剖析请参见 [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|JP transit prepaid Suica/PASMO/ICOCA economics]]。

### 电商 FG 预付

- **Edy** — 乐天集团内的乐天 Edy

**定义性特征**：母 FG 是互联网 / 电商企业集团、预付在多产品钱包栈内与 QR / 码支付（乐天 Pay）、卡（乐天 Card）、点数（乐天点数）并列、补充电商母公司在线存在的实体门店触点、与母公司更广泛电商生态的深度忠诚计划整合。Edy 是此运营商类别中**唯一的主要日本预付电子货币**，这反映了历史时序——Edy 于 2001 （乐天收购前）推出，当时零售 FG 与交通 FG 预付尚未进入市场，随后被纳入乐天的超级商店战略。

## 互操作性主干——全国相互利用（Nationwide Mutual Use）

10 个主要交通卡品牌（Suica、PASMO、Kitaca、TOICA、manaca、ICOCA、PiTaPa、nimoca、SUGOCA、はやかけん）经 **全国相互利用方案**（于 2013-03 推出）相连——在任何兼容读卡器、任何参与交通或加盟店终端上的单次触碰，无论卡属于哪个品牌都能运行。这创造了横跨全部 10 个品牌的**约 1.6M 个点位的单一共享受理网络**，是全球最大的非接触预付受理网络之一。

经济效应是较小的交通品牌发行人（Kitaca、TOICA、manaca、nimoca、SUGOCA）无需承担构建它的全部获取成本即可获得对完整网络的访问。作为 Suica 发行人的 JR 东日本是事实上的网络主干提供者，这是 JR 东日本的 Suica 平台投资作为公共物品在结构上被低估定价的原因之一。

请注意 **PiTaPa**（关西地区私铁预付，由 Surutto KANSAI 发行）是上方预付电子货币运营商矩阵中**未列入**的唯一主要交通卡品牌，因为 PiTaPa 使用**后付费**模型（月末信用计费）而非预付。PiTaPa 在结构上是铁道上的信用卡而非预付卡，并登记为个别信用购买斡旋 / 综合信用购买斡旋而非第三者型前払——后付费分类请参见 [[payments/japan-consumer-credit-operator-comparison-matrix|JP consumer credit operator matrix]]。

## 边界情形

- **日本市场中的 FeliCa vs MIFARE** — 此矩阵中的每个品牌均为 **FeliCa 基础**，而非 MIFARE。MIFARE 是交通非接触的全球主导标准（用于伦敦 Oyster、香港 Octopus 在 Visa 叠加前、新加坡 EZ-Link、纽约 OMNY 等），但在日本交通预付栈中基本缺席。FeliCa 的选择由 2004 前后 NTT DoCoMo 的 Osaifu-Keitai 倡议与 JR 东日本更早的 Suica-FeliCa 选定做出，将日本市场锁定在 FeliCa 约 25 年。这是日本预付 IC 跨交通 + 零售无缝运行（单一芯片标准）、却无法在没有叠加的情况下轻易与全球 MIFARE 基础交通系统互操作的结构性原因（Visa Touch / EMV Contactless 叠加现作为变通方案按铁道逐一推出）。
- **Suica 的监管分类** — Suica 在资金结算法下登记为第三者型前払式支付手段，但 JR 东日本**既非银行法银行，亦非资金移动业资金移动运营商**。Suica 浮存金（在任一时点全部余额估计 > JPY 200B+）作为带有法定存缴担保条款的 JR 东日本预付负债停留，而非处于银行系统保护之下。这是 Suica 退款流程为运营商侧而非存款保险侧的原因。
- **PASMO 合资浮存金分配** — PASMO 的浮存金负债按发行比例分布于 25+ 成员铁道发行人。在东急车站加载的余额是东急资产负债表负债，即使随后在东京 Metro 车站使用；成员铁道间发生内部结算。这与 JR 东日本 / JR 西日本 / JR 九州的单一实体模型在结构上不同。
- **作为竞争标记的 Apple Pay 支持缺口** — Apple Pay 支持时机（Suica 2016-10 → nanaco 2019-10 → PASMO 2020-10 → WAON 2021-05 → ICOCA 2023-06 → 其他尚未）是一个竞争标记。Suica 在 iOS-日本整合中的先发优势巩固了其在东京 Metro 数字原住民中的主导；ICOCA 的 7年滞后明显影响了关西侧数字预付采用。
- **nanaco 的 Seven Bank ATM 现金轨道独特性** — nanaco 是矩阵中现金出入口以**专用集团银行 ATM 网络为主要渠道**的唯一品牌（Seven Bank ATM 位于每家 7-Eleven 内）。其他零售品牌（Edy、WAON）使用母公司的客服柜台或第三方便利店 ATM。这是在远离 JR 的客户中 nanaco 的充值 UX 在零售预付细分中最顺畅的结构性原因。
- **WAON 自動チャージ（自动充值）整合** — WAON 关联 AEON Card 的自动充值是 AEON 购物者的主导 UX，是 AEON Card 持有者维持卡关系最常被引用的原因之一。这是没有集团内信用卡发行人的纯预付品牌无法复制的结构性交叉链接。
- **乐天 Edy 的电商 FG 定位** — Edy 是矩阵中母 FG 为**电商 / 互联网企业集团**而非零售 FG 或交通铁道 FG 的唯一预付电子货币。乐天 Edy 在乐天生态内的角色部分是提供补充乐天 Pay（QR / 码支付）与乐天 Card（信用卡）的实体门店触点——参见 [[payments/japan-code-payment-competitive-map|JP code-payment competitive map]]。
- **Kitaca 的无移动缺口** — Kitaca 是截至 2026无任何 Mobile / Apple Pay / Google Pay 产品的唯一主要全国相互利用成员。移动整合的财务投资成本是被引用的原因；JR 北海道受限的财务状况限制了可自由支配的技术支出。
- **破损（breakage）与未赎回余额经济学** — 所有预付电子货币发行人均承担**破损**负债（已加载但从未花费的余额），资金结算法要求发行人在半年截止日维持至少为未赎回余额 50% 的发行保证金。破损项目对零售预付（WAON、nanaco、Edy）是重大利润驱动力，但对用户更频繁小额充值的交通预付（Suica、PASMO）则不然。此维度不在矩阵的列行中（对公开来源矩阵而言过于依赖估计），但却是预付发行人商业模式背后的关键经济故事——监管存缴机制请参见 [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]。
- **Mobile FeliCa 锁定于 Android + Apple Pay** — Mobile FeliCa 在拥有正确 NFC 芯片支持的 Android 手机（基本上是 2010时代 Osaifu-Keitai 以来的所有日本市场 Android）以及自 iPhone 7 （伴随 Apple Pay 日本推出的 2016 ）以来的 iPhone 上运行。Mobile FeliCa **在非日本市场 Android 手机上不可用**，这是这些预付品牌的入境游客 UX 限于 Visit Suica / Welcome Suica 实体卡产品而非移动版的原因之一。
- **QR / 码支付叠加**：这些预付品牌中的若干越来越多地经由 QR / 码支付叠加访问（例如乐天 Pay 将 Edy 充值作为其资金来源之一；nanaco 可经各种 QR 轨道加载）。因此"预付电子货币品牌"与"QR 码支付品牌"之间的清晰分离正在侵蚀——叠加格局请参见 [[payments/japan-code-payment-competitive-map|JP code-payment competitive map]]。

## 浮存金规模的近似排序

任一时点未赎回预付余额的公开来源粗略排序（数字因半年截止而异，且在各发行人间未以相同格式一致披露）：

1. **Suica** — 日本最大的单品牌预付浮存金，JPY 200-300B 区间
2. **WAON** — JPY 100-200B 区间
3. **PASMO** — JPY 100-200B 区间（分布于 25+ 成员铁道资产负债表）
4. **nanaco** — JPY 100-200B 区间
5. **Edy** — JPY 50-100B 区间
6. **ICOCA** — JPY 50-100B 区间
7. **TOICA / manaca / nimoca / SUGOCA / Kitaca** — 各自低于 JPY 50B

横跨全部 10+ 品牌的合计**预付浮存金在任一时点为 JPY 1-1.5 万亿级**。在资金结算法下，发行人须在最近的法务局维持至少为半年截止未赎回余额 50% 的发行保证金（issuance guarantee deposit），这意味着**约 JPY 500-750 亿日元的发行保证金作为对预付用户的保护存缴于日本政府**。这是日本金融系统中最大的消费者保护存缴池之一，也是资金结算法预付制度受到严格监管的结构性原因。监管细节请参见 [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]。

## 集团银行兜底姿态

矩阵中的"集团银行兜底"列是较为微妙的维度之一，值得展开：

- **拥有集团内银行的零售 FG**（nanaco/Seven Bank、WAON/AEON Bank、Edy/乐天银行）——集团内银行经 ATM 提供运营性现金出入口以及吸收预付负债压力的资产负债表容量
- **无集团银行的交通 FG**（Suica/JR 东日本、ICOCA/JR 西日本、SUGOCA/JR 九州、TOICA/JR 东海、nimoca/西铁 等）——铁道运营商的资产负债表直接承担预付负债；现金出入口使用合作银行 ATM（Suica 的瑞穗-JR 东日本合作、ICOCA 的 SMBC-JR 西日本）
- **PASMO 合资** — 25+ 成员铁道资产负债表承担按比例负债；无单一兜底实体
- **Kitaca / 北海道边缘情形** — JR 北海道是拥有政府支持结构性援助的特殊会社；预付负债停留在部分由政府支持的运营商内，不同于完全私有化的 JR 本州三社（东日本/西日本/东海）

集团内银行的有无影响：(a) 发行人在无外部过桥融资的情况下能多快地扭转承压的预付负债事件，(b) 监管接触是何样貌（有集团银行兜底的发行人可经由银行既有的金融厅 / 日银监管渠道而非从头开始路由对话），以及 (c) 发行人能多容易地试验邻接金融科技功能（经集团信用卡自动充值需集团信用卡配合，在统一的零售 FG 内更容易）。

## 资金结算法下的监管存缴义务

矩阵中的全部 11 个品牌均在资金结算法（資金決済法）下登记为 **第三者型前払式支付手段发行人**（third-party-type prepaid issuer），其规定：

- **发行保证金（issuance guarantee deposit）** — 在每个半年截止日（3-31 与 9-30），发行人须在最近的法务局以现金、国债或银行担保存缴至少为半年末未赎回余额 50% 的金额。该存缴在发行人破产时起到用户保护作用
- **业务报告书（business report）** — 向金融厅年度提交，含预付余额、交易额、退款指标
- **苦情处理（complaint handling）** — 须加入指定的投诉处理机构（ADR）
- **加盟店管理（merchant management）** — 对于第三者型发行人（vs 自家型单一加盟店预付），发行人承担管理参与加盟店关系的义务
- **业务改善命令** — 若出现合规问题，金融厅可发出业务改善命令

第三者型 vs 自家型的区分是结构性的：第三者型是"在众多加盟店受理的通用"模型（此矩阵的全部 11 个品牌），而自家型是"仅在发行人自家门店受理"的模型（例如仅在该百货店使用的百货店预付卡）。自家型制度的监管负荷较轻。边界检查是预付是否在发行人集团外的"第三方"加盟店受理——边界细节请参见 [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]。

## 与资金移动制度的比较

不熟悉日本支付的读者常将**预付电子货币**与**资金移动（資金移動業）**混淆——两者共享钱包余额 UX，但处于规则有重大差异的不同牌照之下：

| 维度 | 预付 第三者型前払 | 资金移动 資金移動業 |
|---|---|---|
| 余额向现金的可退性 | 有限（按资金结算法 20条修订时代规则；大多数品牌经服务柜台提供有限现金返还） | 是——运营商须使余额可提取至银行账户 |
| 用户间转账（送金） | 预付制度下一般不允许 | 是——资金移动业的定义性能力 |
| 单笔交易限额 | 牌照未规定（因发行人政策而异） | 按牌照类型（第 1 / 2 / 3种）分级设上限 |
| 用户资金保护 | 发行保证金 50% 存缴 | 完全分离 + 信托或担保 |
| 示例 | Suica、WAON、nanaco、Edy、PASMO、ICOCA 等 | Merpay、PayPay、乐天 Pay（在其支持用户间转账时）、LINE Pay、Kyash |

该界线日益模糊——PayPay 与 Merpay 等产品**同时运行多个牌照栈**（基本钱包用预付，转账功能用资金移动业，按功能启用相应牌照）。一些预付品牌产品正悄然迁移至资金移动业底层以启用转账功能。资金移动侧请参见 [[payments/funds-transfer-service-providers-japan-index|funds-transfer service providers JP index]]。

## Mobile FeliCa 生态演进

Mobile FeliCa 的推出模式塑造了哪些预付品牌主导了移动优先使用：

| 年份 | 事件 | 影响 |
|---|---|---|
| 2001 | Suica 实体卡推出 | 设定 FeliCa-on-transit 先例 |
| 2004 | NTT DoCoMo / FeliCa Networks 推出 Mobile FeliCa | 将日本移动支付锁定于 FeliCa 标准 |
| 2006-01 | Mobile Suica Android（FOMA Osaifu-Keitai） | 首个移动交通预付 |
| 2007-04 | nanaco + WAON 推出 | 零售预付 FeliCa 采用 |
| 2010 | 乐天收购 Edy | 电商 FG 进入预付 |
| 2016-10 | 伴随 Suica + Edy 的 Apple Pay 日本推出 | iPhone 进入日本预付生态 |
| 2018-05 | 伴随 Suica + Edy 的 Google Pay 日本推出 | Android 非 Osaifu-Keitai 途径打开 |
| 2019-10 | Apple Pay 加入 nanaco | 零售预付 iPhone 追赶 |
| 2020-10 | Apple Pay + Mobile PASMO 推出（同时） | 东京私铁进入移动 |
| 2021-05 | Apple Pay 加入 WAON | 零售预付完全上 iPhone |
| 2023-06 | Apple Pay 加入 ICOCA + Mobile ICOCA | 关西在 7年滞后后追赶 |
| 待定 | TOICA / manaca / nimoca / SUGOCA / Kitaca 移动 | 较小交通运营商仍处于仅实体或部分阶段 |

Apple Pay 支持时机差异是日本预付分析中最常被引用的竞争标记之一——Suica（2016）与 ICOCA（2023）之间的 7年缺口重大影响了关西侧数字预付采用步伐，而 Kitaca 持续缺席 Mobile / Apple Pay 限制了北海道侧预付数字原住民转化。

## 加盟店经济学项目

日本预付电子货币的加盟店受理费通常视发行人-加盟店谈判处于 **2-3% 的 MDR（merchant discount rate）**，低于全信用卡 MDR（标准费率为 3-4%），但高于 QR / 码支付 MDR（通常 1-2%，促销期间有时 0%）。3档 MDR 结构是加盟店受理多种支付方式而非选择单一主导方式的原因之一——每种方式对应不同的费用状况。

对预付发行人的经济含义为：
- **零售 FG 预付（nanaco、WAON、Edy）** — 当交易发生在母集团门店时，加盟店费用大多在母集团内部内化，因此集团内交易的实际 MDR 更接近转移定价安排而非公平交易费用。这是集团内受理主导交易量的结构性原因之一
- **交通 FG 预付（Suica、PASMO、ICOCA 等）** — MDR 对发行铁道是真实的第三方费用收入，这是使 Suica/PASMO 在车费收取用途之外对 JR 东日本与 PASMO 财团具经济吸引力的项目之一
- **跨品牌互操作性费用分配** — 当 Suica 触碰经全国相互利用发生在 WAON 受理加盟店时，发行人间结算将费用的一部分分配给 Suica 的发行人（JR 东日本），一部分给受理基础设施。费用分配规则对参与发行人保密，但一般偏向其终端基础设施被使用的品牌

加盟店费用维度是理解为何一些预付发行人持续积极扩展加盟店网络（交通 FG），而另一些聚焦集团内整合深度（零售 FG）的关键背景。

## 破损维度

**破损（breakage）**——已加载但从未花费的预付余额部分——是预付发行人的重大利润项目。确切数字未在各发行人间以相同格式披露，但结构性模式为：

- 零售 FG 预付（WAON、nanaco、Edy）往往有**更高破损**，因为用户以更大金额、更低频率充值，而微小残余余额留在很少使用的卡上
- 交通 FG 预付（Suica、PASMO、ICOCA）往往有**更低破损**，因为用户为日常通勤支出以更小金额、更频繁充值，残余余额一般在数日或数周内被消费

破损按发行人选择在不同会计处理下被确认为收入——一些在半年截止日基于统计预期支出模型确认，另一些仅在确认的非赎回事件（例如卡到期无退款申请）时确认。资金结算法未强制规定特定的破损确认方法。

## 入境游客 UX 缺口

矩阵级品牌均共享一个**根本性的入境游客 UX 缺口**：Mobile FeliCa 仅在日本市场手机（Android Osaifu-Keitai + Apple Pay 日本 iPhone）上运行，而非在日本境外购买的手机上。因此入境游客限于**实体卡产品**——Welcome Suica / Visit Suica（JR 东日本）、PASMO PASSPORT（PASMO 公司）、ICOCA & HARUKA 组合（JR 西日本）——它们是常规卡的限时、面向游客的变体。

此 UX 缺口是 JR 东日本、JR 九州、南海等已开始在 FeliCa 读卡器之上叠加的 **Visa Touch / EMV Contactless 叠加推出**背后的结构性驱动力之一——持 EMV-Contactless 卡的国际游客无需转换为日本市场 FeliCa 设备即可乘车与购物。该叠加在技术上是附加性的（同一读卡器处理 FeliCa 与 EMV），但在商业上对既有预付发行人收入模型具破坏性，因为游客以海外 EMV 卡触碰会完全绕过预付浮存金。更广泛的非接触推出故事请参见 [[payments/cashless-jp-landscape|JP cashless landscape]]。

## 关联

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics]]
- [[payments/waon-nanaco-retail-prepaid-comparison]]
- [[payments/famipay-valucreate-strategy]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/japan-code-payment-competitive-map]]
- [[payments/japan-consumer-credit-operator-comparison-matrix]]
- [[payments/cashless-jp-landscape]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/japan-interchange-and-merchant-fee-stack]]
- [[payment-firms/rakuten-edy]]
- [[card-issuers/seven-card-service]]
- [[card-issuers/aeon-financial-service]]
- [[regional-banks/seven-bank]]
- [[card-issuers/aeon-bank]]
- [[financial-licenses/payment-license-stack]]
- [[loyalty/japan-points-landscape]]
- [[retail/seven-and-i-hd]]
- [[retail/aeon-group]]
- [[INDEX|FinWiki index]]

## 来源

- 金融厅预付政策门户：https://www.fsa.go.jp/policy/prepaid/
- 金融厅 全国前払式支付手段发行人一览（已登记预付发行人）：https://www.fsa.go.jp/menkyo/menkyoj/zenshikoukinrishou.pdf
- 金融厅 第三者型前払式支付手段发行人登记一览：https://www.fsa.go.jp/menkyo/menkyoj/zendaisanshakogata.pdf
- 乐天集团 公司网站：https://corp.rakuten.co.jp/
- Seven & i 控股 公司网站：https://www.7andi.com/
- AEON 集团 公司网站：https://www.aeon.info/
- JR 东日本 公司网站：https://www.jreast.co.jp/
- PASMO 公司 公司网站：https://www.pasmo.co.jp/
- JR 西日本 公司网站（JR Odekake）：https://www.jr-odekake.net/
- JR 北海道 公司网站：https://www.jrhokkaido.co.jp/
- JR 东海 公司网站：https://jr-central.co.jp/
- 名铁 公司网站：https://www.meitetsu.co.jp/
- 西铁（西日本铁道） 公司网站：https://www.nishitetsu.jp/
- JR 九州 公司网站：https://www.jrkyushu.co.jp/
- 日本银行 支付系统政策：https://www.boj.or.jp/
- 各运营商关于预付浮存金与未赎回余额的 IR 披露：JR 东日本、JR 西日本、JR 东海、JR 九州（TSE Prime 上市）；乐天集团、AEON Co. / AEON Financial Service、Seven & i HD（TSE Prime 上市）；非公开运营商（PASMO 公司、Nimoca 公司、MIC、JR 北海道）按监管申报
