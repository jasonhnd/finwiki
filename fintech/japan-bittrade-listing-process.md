---
title: 日本 BitTrade 上币流程 — 持牌交易所 Listing 的 8 階段構造
aliases: [bittrade-listing, jp-cex-listing, 日本上币流程]
domain: fintech
created: 2026-05-13
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-13
confidence: possible
tags: [fintech, needs-verification]
status: candidate
sources:
  - https://www.bittrade.co.jp/
  - https://jvcea.or.jp/about/list/
  - https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx
  - https://www.bittrade.co.jp/news/
note: 用户标注「不一定对，需要持续跟踪」· 待用实际案例逐步核实
---

# 日本 BitTrade 上币流程 — 持牌交易所 Listing 的 8 階段構造


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] コア認知 `[V?]`
> 日本持牌交易所（BitTrade 等）的上币流程，本质不是"商务谈好就上线"，而是**把一个 token 变成日本监管体系内可被长期运营的金融商品**。需同时通过 JVCEA 自律規則 + FSA 监管 + 法律意见书 + 技术安全审查 + AML/KYC + 流动性稳定性 6 重审查。

## 核实状态图例

| 标签 | 含义 |
|------|------|
| `[V?]` | 待核实 — 暂为用户 memo |
| `[V~]` | 部分核实 |
| `[V✓]` | 已确认 |
| `[V✗]` | 已推翻 |

核实优先级：真实上币案例 → JVCEA / FSA 官方文件 → BitTrade 内部联络人 → 顾问 / 律所。

## 8 階段全景

```
1. 初步商务接触 (Business Screening)
   ↓
2. 项目尽调 (Due Diligence · 公司/Token/市场 3 层)
   ↓
3. 法律 / 合规审查 (Token 分类 + 证券判定)
   ↓
4. 技术安全审查 (Smart Contract + Chain Risk)
   ↓
5. JVCEA / FSA 对应 (自律审查 + 金融厅沟通)
   ↓
6. 流动性与做市 (MM Agreement + 初始深度)
   ↓
7. 上线执行 (Go Live · 技术联调 + 宣发)
   ↓
8. 上线后持续监管 (Post Listing Monitoring)
```

## 第 1 段階: 初步商务接触 `[V?]`

**项目方提交**: Whitepaper · Tokenomics · Team · 融资信息 · GitHub · Audit 报告 · 法律结构 · Token 用途。

**BitTrade 判断标准**（与海外 CEX 显著不同）：日本用户基础 · 交易量 / OTC 容量 · IEO 适配性 · 长期合作可能 · **是否容易被 FSA 卡死**。

> 日本交易所最在意的不是热度，而是"能不能解释给监管 / 会不会出事"。

## 第 2 段階: 项目尽调 `[V?]`

- **公司层**: 注册主体 · 股权 · UBO · 董事 · 制裁名单 · 银行关系 · 历史诉讼
- **Token 层**: 总量 · 增发权限 · Admin Key · Freeze · Blacklist · Mint/Burn · Vesting · Unlock — 重点关注**冻结能力 / upgrade 权限 / owner 边界**（参照 USDC / JPYC / XAU₮）
- **市场层**: 做市方 · 流动性来源 · OTC 支撑 · 暴跌 / wash trade 风险（FSA 对 market manipulation 敏感度极高）

## 第 3 段階: 法律 / 合规审查 `[V~]`

> Token 分类表 = `[V✓]`（資金決済法 / 金商法 / 電子決済手段 三轨已多源验证）· 「假 Utility 真证券」红线 = `[V?]`

| 类型 | 监管法 | 实际监管单位 |
|------|--------|--------------|
| 暗号資産 | 資金決済法 | 関東財務局 · 暗号資産交換業 |
| 有価証券 / ST | 金商法（FIEA） | 第一種金商業 or PTS |
| 電子決済手段（稳定币） | 電子決済手段等取引業 | 2026 制度 |
| 前払式 | 前払式支払手段 | 限定用途 |

详细参见 [[fintech/japan-financial-regulation|日本金融規制 — 三法体系]]。

### 「假 Utility，真证券」红线

危险信号（容易判定为证券）：分红 · 保底收益 · 回购承诺 · 固定收益 · NAV 对应 · 债权映射。

> "不能 contractually promise buyback" 是日本 avoiding securities classification 的典型 thumb rule。

## 第 4 段階: 技术安全审查 `[V?]`

- **Smart Contract**: 审计报告（必要）· Upgradeability / Proxy · MultiSig · Emergency Pause · Reentrancy · Oracle 风险
- **Chain 风险**: 公链安全性 · 停链可能 · Bridge 风险 · 跨链复杂度

> 日本机构倾向 **per-chain issuance** 而非 bridge（监管事故归因边界更清晰）。

## 第 5 段階: JVCEA / FSA 对应 `[V?]`

**常见误解**: "日本交易所自己决定上币" → ❌

```
BitTrade → JVCEA（自律审查） → FSA（金融厅）
```

**提交清单**: 风险说明 · 用户保护方案 · AML 风险分析 · 市场操纵风险评估 · Token 分类法律意见 · 技术风险说明 · 流动性方案。JVCEA 自律审查的全景见 [[exchanges/jvcea-self-regulatory-overview|JVCEA 自律規則概览]],FSA 持牌登録の流れ见 [[exchanges/fsa-vasp-registration-system|FSA VASP 登録制度]]。

## 第 6 段階: 流动性与做市 `[V?]`

**很多项目死掉的地方**。关注：上线后 volume · spread · OTC 承接 · MM 稳定。

通常要求：MM agreement · Liquidity provider 锁定 · 初始深度承诺 · 做市资金保证。

## 第 7 段階: 上线执行 `[V?]`

- **技术联调**: Wallet 集成 · Deposit / Withdrawal · Memo/tag · Hot/Cold wallet · Monitoring · Travel Rule
- **宣发**: 新闻稿 · AMA · Campaign · OTC 推广 · 日本 KOL

## 第 8 段階: 上线后持续监管 `[V?]`

**日本不是"上完就结束"**。持续监控：Token unlock 时间表 · 巨鲸转账 · 市场操纵 · 法律变化 · 项目运营 · Treasury 健康。

严重情况下手段：停止提现 → 下架 → 风险公告。

## IEO 追加層 `[V?]`

IEO 在标准上币流程之上加一层：募资结构设计 · 日本用户销售规则 · Lockup · Vesting 时间表 · 投资者保护 · 募集说明书 · 风险披露。

## 日本 vs 海外 上币对照 `[V?]`

| 项目 | 日本 BitTrade | 海外普通 CEX |
|------|---------------|--------------|
| 法律审查 | 极重 | 较轻 |
| JVCEA/FSA 介入 | 有 | 无 |
| 证券判定 | 极严格 | 很松 |
| AML 要求 | 极重 | 中等 |
| 技术审计 | 很深 | 看情况 |
| 上币速度 | 慢（数月〜1年+） | 快（数周） |
| 上线成本 | 高 | 中 |
| 可持续性 | 强 | 波动大 |

## BitTrade 真正关心的 7 个指标 `[V?]`

很多项目误以为"技术牛逼就能上"。实际优先级：

1. 能不能活很久
2. 会不会出监管事故
3. 会不会让交易所被 FSA 骂
4. 会不会引发用户投诉
5. AML 是否干净
6. Token 价格是否稳定
7. 是否容易被定义成证券

## Applicable When

- 需在日本持牌交易所上币的项目评估
- 海外 token 项目询问"日本上币要多久 / 多难"时的回答框架
- 评估自己手上 token 设计是否触发证券化红线
- 与 BitTrade / bitbank / Coincheck 等持牌交易所的初次商务接触前自检
- 日本 VASP 监管时间线背景见 [[exchanges/jp-vasp-regulatory-timeline|日本 VASP 监管时间表]]

## 待核实点

- [ ] JVCEA 审查实际时长
- [ ] FSA 介入触发条件
- [ ] MM agreement 标准条款（初始深度 / spread / 期限）
- [ ] 上币申请实际 reject 率
- [ ] BitTrade 内部审查委员会构成
- [ ] IEO vs 直接 listing 成本 / 时间差

## Sources

- 公開: JVCEA 自律規則 / FSA 監督指針 / 資金決済法
- 業界一般: 日本持牌 CEX 上币実务

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-financial-regulation|日本金融規制]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]]
- [[fintech/gold-tokenization-scheme-comparison|日本におけるトークン発行スキーム比較]]
- [[fintech/japan-ecisb-license|日本 ECISB 牌照]]
<!-- /wiki-links:managed -->
