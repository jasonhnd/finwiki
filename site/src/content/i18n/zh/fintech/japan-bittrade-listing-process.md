---
source: fintech/japan-bittrade-listing-process
source_hash: d02ee234071bb66a
lang: zh
status: machine
fidelity: needs_review
title: "日本 BitTrade 上市流程 — 8  注册交易所上市阶段结构"
translated_at: 2026-05-31T11:13:44.860Z
---

# 日本 BitTrade 上市流程 — 8  注册交易所上市阶段结构


## 维基路线

该条目位于 [[fintech/INDEX|fintech index]] 下。使用 [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] 读取相邻上下文，使用 [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] 读取更广泛的系统边界。

> [!info] 核心认知`[V?]`
> 日本注册交易所（BitTrade等）的上市过程本质上并不是“业务确定了就上市”，而是将某种代币转换成在日本监管体系内可以长期运营的金融产品的过程。 JVCEA自治法规+FSA监管+法律意见书+技术安全审查+AML/KYC+流动性稳定性6 重审必须同时清关。

## 验证状态图例

|标签|意义|
|------|------|
|`[V?]`|未验证 - 临时用户注释|
|`[V~]`|部分验证|
|`[V✓]`|确认的|
|`[V✗]`|反驳|

验证优先级：实际上市→JVCEA/FSA官方文件→BitTrade内部联系人→顾问/律师事务所。

## 8 舞台全景

```
1。初步业务联系（业务筛选）
   ↓
2。项目尽职调查 公司/代币/市场 3  层
   ↓
3。法律/合规审查（Token分类+证券判断）
   ↓
4。 技术安全审查（智能合约+链风险）
   ↓
5。 JVCEA / FSA兼容（自主审查+金融服务机构谈判）
   ↓
6。流动性和做市（MM协议+初始深度）
   ↓
7。上市执行（上线·技术合作+公关）
   ↓
8。上市后监控
```

## 阶段 1 ：初始业务联系 `[V?]`

**项目提交**：白皮书·代币经济学·团队·资金信息·GitHub·审计报告·法律结构·代币使用。

**BitTrade判断标准**（与海外CEX明显不同）：日本用户群·交易量/OTC能力·IEO适宜性·长期合作的可能性·**被FSA碾压**困难吗？

> 日本交易所最关心的不是自己是否受欢迎，而是能否向监管部门解释自己的产品，是否会引发事故。

## 阶段 2 ： 项目 Due Deli `[V?]`

- **公司层**：注册实体·股票构成·UBO·董事·制裁名单·银行交易·过去的诉讼
- **代币层**：总量·发行权限·管理密钥·冻结·黑名单·铸币/销毁·归属·解锁——强调**冻结能力/升级权限/所有者边界**（参见USDC / JPYC / XAU₮）
- **市场层**：做市商·流动性来源·场外交易备份·崩盘/洗牌交易风险（FSA 对市场操纵极其敏感）

## 阶段 3 ：法律/合规审查 `[V~]`

> 代币分类表=`[V✓]`（资金结算法/金融商品交易法/电子支付方式Sanki已通过多方验证）·“假实用程序，真证券”红线=`[V?]`

|类型|监管法|实际监管机构|
|------|--------|--------------|
|加密资产|资金结算法|关东地方财政局加密货币兑换业务|
|证券/ST|国际汽联|第一种金商业或PTS|
|电子支付方式（稳定币）|电子支付意味着交易业务|2026 制度|
|预付费型|预付支付工具|限定用途|

详情请参见[[fintech/japan-financial-regulation|日本金融規制 — 三法体系]]。

### “假公用事业，真证券”红线

危险信号（通过证券容易判断）：分配、本金担保、回购承诺、固定收益、资产净值对应、债务映射。

> “你不能通过合同承诺回购”是日本避免证券分类的典型经验法则。

## 阶段4 ：技术安全审查`[V?]`

- **智能合约**：审计报告（必填）·可升级性/代理·多重签名·紧急暂停·可重入·Oracle风险
- **链上风险**：公链安全·断链的可能性·桥梁风险·跨链复杂性

> 日本机构更喜欢**每链发行**来桥接（明确划分监管事件的责任）。

## Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.

**常见误解**：“日本交易所自行决定上市” → ❌

```
BitTrade → JVCEA（自主审查）→ FSA（金融服务机构）
```

**提交材料清单**：风险说明·用户保护措施·反洗钱风险分析·市场操纵风险评估·代币分类法律意见·技术风险说明·流动性计划。有关 JVCEA 自主考试的概述，请参阅 [[exchanges/jvcea-self-regulatory-overview|JVCEA 自律規則概要]]；有关 FSA 注册流程的概述，请参阅 [[exchanges/fsa-vasp-registration-system|FSA VASP 登録制度]]。

## 阶段 6 ：流动性和做市 `[V?]`

**许多项目就此消亡**。注意事项：上市后成交量·点差·场外承销·MM稳定性。

典型要求：MM协议·流动性提供者锁仓·初始深度承诺·保证做市资金。

## Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.

- **技术合作**：钱包集成·存款/取款·备忘录/标签·热/冷钱包·监控·旅行规则
- **公共关系**：新闻稿·AMA·活动·OTC促销·日本KOL

## Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.

**在日本，“上市不是结束”** 持续监控：代币解锁时间表·巨额汇款·市场操纵·立法变更·项目运营·国库健康状况。

情况严重的处理措施：暂停提币→下架→风险提示。

## IEO附加层`[V?]`

IEO在标准上市流程中增加了1 层：资金结构设计·日本用户销售规则·锁定·行权时间表·投资者保护·发行手册·风险披露。

## 日本 vs 海外场比较 `[V?]`

|项目|日本比特贸易|海外一般 CEX|
|------|---------------|--------------|
|法律审查|极重|光|
|JVCEA/FSA 的参与|可以是|没有任何|
|证券判断|极其严格|松动的|
|AML 要件|极重|中程度|
|技术审核|深的|逐案|
|上市速度|慢（几个月~1年+）|快（几周）|
|上市成本|昂贵的|中|
|可持续性|强的|波动大|

## BitTrade 真正关心 7  的 `[V?]` 指标

很多项目错误地认为，如果自己的技术优秀，就可以上市。实际优先级：

1。能长久生存吗？
2。会不会引发监管事故？
3。交易站会受到FSA的谴责吗？
4。会引起用户投诉吗？
5。您的 AML 干净吗？
6。 Token价格稳定吗？
7。将其定义为证券很难吗？

## 适用时间

- 对需要在日本注册交易所上市的项目进行评估
- 当海外代币项目询问“在日本上市需要多长时间/有多难？”时的回答框架
- 自我评估自己的代币设计是否触及证券化红线
- 首次与 BitTrade/bitbank/Coincheck 等注册交易所进行业务联系前进行自查。
- 有关日本 VASP 监管时间表的背景，请参阅 [[exchanges/jp-vasp-regulatory-timeline|日本 VASP 規制タイムテーブル]]

## 未核实的项目

- [ ] JVCEA考试实际所需时间
- [ ] FSA 参与的触发条件
- [ ] MM协议标准条款（初始深度/价差/时长）
- [ ] 上市申请实际拒绝率
- [ ] BitTrade 内部审查委员会的组成
- [ ] IEO 与直接上市成本/时间差异

## 来源

- 出版物：JVCEA 自治条例 / FSA 监管指南 / 资金结算法
- 行业通则：日本注册CEX上市做法

## 有关的
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-financial-regulation|日本金融規制]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]]
- [[fintech/gold-tokenization-scheme-comparison|日本におけるトークン発行スキーム比較]]
- [[fintech/japan-ecisb-license|日本 ECISB ライセンス]]
<!-- /wiki-links:managed -->
