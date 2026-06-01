---
source: fintech/japan-bittrade-listing-process
source_hash: d02ee234071bb66a
lang: zh
status: machine
fidelity: ok
title: "日本 BitTrade 上市流程 — 注册交易所 Listing 的 8 阶段结构"
translated_at: 2026-05-31T11:13:44.860Z
---

# 日本 BitTrade 上市流程 — 注册交易所 Listing 的 8 阶段结构

## Wiki 路线

本条目位于 [[fintech/INDEX|fintech index]] 下。建议与 [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] 一起阅读，以理解相邻监管语境；也可结合 [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] 把握更大的制度边界。

> [!info] 核心认知 `[V?]`
> 日本注册交易所（如 BitTrade）的上币流程，本质上不是“业务谈成了就上线”，而是把某个 token 转化为能够在日本监管体系下长期运营的金融产品。发行方必须同时穿过 JVCEA 自律规则、FSA 监管、法律意见书、技术安全审查、AML/KYC、流动性稳定性等多重门槛。

## 验证状态图例

| 标签 | 含义 |
|---|---|
| `[V?]` | 未验证，暂作用户备忘 |
| `[V~]` | 部分验证 |
| `[V✓]` | 已确认 |
| `[V✗]` | 已被反证 |

验证优先级：实际上市案例 -> JVCEA / FSA 官方文件 -> BitTrade 内部接触 -> 顾问 / 律师事务所。

## 8 阶段全景

```text
1. 初期业务接触（Business Screening）
   ->
2. 项目尽调（Due Diligence：公司 / Token / 市场三层）
   ->
3. 法务 / 合规审查（Token 分类 + 证券性判断）
   ->
4. 技术安全审查（Smart Contract + Chain Risk）
   ->
5. JVCEA / FSA 对应（自律审查 + 金融厅沟通）
   ->
6. 流动性与做市（MM Agreement + 初始深度）
   ->
7. 上市执行（Go Live：技术联调 + 宣传）
   ->
8. 上市后持续监控（Post Listing Monitoring）
```

## 第 1 阶段：初期业务接触 `[V?]`

**项目方提交材料**：Whitepaper、Tokenomics、Team、融资信息、GitHub、审计报告、法律结构、Token 用途。

**BitTrade 的判断标准**（与海外 CEX 明显不同）：

- 日本用户基础
- 交易量 / OTC 承接能力
- IEO 适配性
- 长期合作可能性
- **是否不容易被 FSA 否掉**

> 日本交易所最在意的，不是题材热度，而是“能否向监管机关讲清楚”以及“会不会出事故”。

## 第 2 阶段：项目尽调 `[V?]`

- **公司层**：登记主体、股权结构、UBO、董事、制裁名单、银行往来、过往诉讼
- **Token 层**：总量、发行权限、Admin Key、Freeze、Blacklist、Mint/Burn、Vesting、Unlock
  核心关注点是 **冻结能力 / 升级权限 / owner 边界**（可对照 USDC / JPYC / XAU₮）
- **市场层**：做市商、流动性来源、OTC 备份、暴跌 / wash trade 风险
  FSA 对 market manipulation 的敏感度极高

## 第 3 阶段：法务 / 合规审查 `[V~]`

> Token 分类表 = `[V✓]`（资金结算法 / 金商法 / 电子支付手段三轨已由多个来源验证）
> “假 Utility、真证券”的红线 = `[V?]`

| 类型 | 监管法 | 实际监管主体 |
|---|---|---|
| 加密资产 | 资金结算法 | 关东财务局 / 加密资产交换业 |
| 有价证券 / ST | 金商法（FIEA） | 第一种金商业或 PTS |
| 电子支付手段（稳定币） | 电子支付手段等交易业 | 2026 制度 |
| 预付式 | 预付式支付手段 | 限定用途 |

详情可参见 [[fintech/japan-financial-regulation|日本金融規制 — 三法体系]]。

### “假 Utility、真证券”红线

危险信号包括：

- 分配收益
- 本金保证
- 回购承诺
- 固定收益
- NAV 对应
- 债权映射

> “不能在合同上承诺 buyback” 是日本回避证券分类时常见的经验规则。

## 第 4 阶段：技术安全审查 `[V?]`

- **Smart Contract**：审计报告（必需）、Upgradeability / Proxy、MultiSig、Emergency Pause、Reentrancy、Oracle 风险
- **Chain 风险**：公链安全性、停链可能性、Bridge 风险、跨链复杂度

> 日本机构通常更偏好 **per-chain issuance**，而不是依赖 bridge，因为这样更容易划清监管事故的责任边界。

## 第 5 阶段：JVCEA / FSA 对应 `[V?]`

**常见误解**：
“日本交易所可以自己决定上币” -> ❌

```text
BitTrade -> JVCEA（自律审查） -> FSA（金融厅）
```

**提交材料清单**：

- 风险说明
- 用户保护措施
- AML 风险分析
- 市场操纵风险评估
- Token 分类法律意见书
- 技术风险说明
- 流动性方案

JVCEA 自律审查的全貌见 [[exchanges/jvcea-self-regulatory-overview|JVCEA 自律規則概要]]，FSA 注册路径见 [[exchanges/fsa-vasp-registration-system|FSA VASP 登録制度]]。

## 第 6 阶段：流动性与做市 `[V?]`

这是**很多项目会死掉的环节**。核心检查点包括：

- 上市后的 volume
- spread
- OTC 承接
- MM 稳定性

典型要求包括：

- MM agreement
- 流动性提供方锁定安排
- 初始深度承诺
- 做市资金保证

## 第 7 阶段：上市执行 `[V?]`

- **技术联调**：Wallet 集成、Deposit / Withdrawal、Memo / tag、Hot / Cold wallet、Monitoring、Travel Rule
- **宣传**：新闻稿、AMA、Campaign、OTC 推广、日本 KOL

## 第 8 阶段：上市后持续监控 `[V?]`

**在日本，上币不是结束。** 持续监控包括：

- Token unlock 时间表
- 巨鲸转账
- 市场操纵
- 法规变化
- 项目运营情况
- Treasury 健康度

严重情况下的处理工具包括：暂停出金 -> 下架 -> 风险提示。

## IEO 追加层 `[V?]`

IEO 相比标准上币流程，会多出一层与募资相关的设计：

- 融资结构设计
- 面向日本用户的销售规则
- Lockup
- Vesting 时间表
- 投资者保护
- 募集说明书
- 风险披露

## 日本 vs 海外 上市比较 `[V?]`

| 项目 | 日本 BitTrade | 海外一般 CEX |
|---|---|---|
| 法务审查 | 极重 | 较轻 |
| JVCEA / FSA 参与 | 有 | 无 |
| 证券性判断 | 极严 | 较松 |
| AML 要求 | 极重 | 中等 |
| 技术审计 | 深 | 个案式 |
| 上市速度 | 慢（数月到 1 年以上） | 快（数周） |
| 上市成本 | 高 | 中 |
| 可持续性 | 强 | 波动大 |

## BitTrade 真正在意的 7 个指标 `[V?]`

很多项目误以为“技术够强就能上”。实际优先顺序更接近：

1. 能否长期存活
2. 会不会引发监管事故
3. 交易所会不会因此被 FSA 问责
4. 会不会引发用户投诉
5. AML 是否干净
6. Token 价格是否稳定
7. 是否不容易被定义为证券

## Applicable When

- 评估需要在日本注册交易所上市的项目
- 回答海外 token 项目“在日本上市要多久 / 难度多高”
- 自评 token 设计是否踩到证券化红线
- 在与 BitTrade / bitbank / Coincheck 等注册交易所首次接触前做自查
- 日本 VASP 监管时间线背景可参见 [[exchanges/jp-vasp-regulatory-timeline|日本 VASP 規制タイムテーブル]]

## 未验证项目

- [ ] JVCEA 审查实际耗时
- [ ] FSA 介入的触发条件
- [ ] MM agreement 的标准条款（初始深度 / spread / 期限）
- [ ] 上市申请的实际拒绝率
- [ ] BitTrade 内部审查委员会构成
- [ ] IEO 与直接 listing 的成本 / 时间差

## 来源

- 公开来源：JVCEA 自律规则 / FSA 监管指引 / 资金结算法
- 行业通识：日本注册 CEX 的上市实务

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-financial-regulation|日本金融規制]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]]
- [[fintech/gold-tokenization-scheme-comparison|日本におけるトークン発行スキーム比較]]
- [[fintech/japan-ecisb-license|日本 ECISB ライセンス]]
<!-- /wiki-links:managed -->
