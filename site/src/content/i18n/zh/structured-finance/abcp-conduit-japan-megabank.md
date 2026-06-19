---
source: structured-finance/abcp-conduit-japan-megabank
source_hash: 016c254e3b74bb60
lang: zh
status: machine
fidelity: ok
title: "ABCP 管道（资产支持商业票据）—— 日本大型银行发起的项目"
translated_at: 2026-06-19T12:43:19.859Z
---

# ABCP 管道（资产支持商业票据）—— 日本大型银行发起的项目

## TL;DR

ABCP 管道是一种表外特殊目的载体（[[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV structures]]），它从企业卖方购买短期限应收款，并通过向 JSDA 监管的国内 CP 市场发行日元计价的商业票据来为这些购买提供资金，同时配有来自发起方大型银行的**流动性后盾**。在日本，重要的三家发起方是 [[megabanks/mufg|MUFG]]（通过其银行部门和证券子公司）、[[megabanks/smfg|SMFG / SMBC]] 和 [[megabanks/mizuho-fg|Mizuho FG]]。每家都运营一到两个多卖方管道项目，峰值时未偿 CP 规模从数千亿日元到超过一万亿日元不等。市场在 2008 金融危机后急剧收缩（当时全球 ABCP 市场冻结，日本的管道动用了流动性额度），在 2010 巴塞尔 III 流动性框架对发起方承诺施加更高资本成本后再度收缩，如今已稳定在远小于危机前峰值的规模。当日元短端利率在跨货币掉期基础上具有吸引力时，外国投资者是相当可观的 CP 买家。

## Wiki route

本条目归属于 [[structured-finance/INDEX|structured-finance index]]，作为**短期限证券化管道**节点。请对照 [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]（期限证券化市场）、[[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]（法人实体层）以及 [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]（评级机构如何处理流动性后盾）阅读。系统框架：更宏观的短期融资背景见 [[finance/INDEX|finance index]]。与银行资产负债表管理的邻接性：[[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMFG]]、[[megabanks/mizuho-fg|Mizuho FG]] 各自在其支柱 3 披露中披露 ABCP 管道敞口。

## 1. ABCP 管道的样貌

```
Corporate sellers (auto-loan originators,
  trade-receivable originators, equipment
  lessors, regional consumer-finance cos)
   |
   |  sells receivables (true sale to SPV)
   v
+----------------------------------+
|        Multi-seller conduit      |
|          (SPV — GK/TK)           |
|  - Funds receivable purchase     |
|  - Issues yen CP into JSDA mkt   |
+--------+----------------+--------+
         |                |
   CP issuance      Liquidity / credit
         |             backstop
         v                |
+--------+---------+      |
| CP investors     |      |
| (MMFs, regional  |      |
|  banks, foreign  |      |
|  invs, life cos) |      |
+------------------+      |
                          v
                 +--------+---------+
                 |   Sponsor bank   |
                 | (MUFG / SMBC /   |
                 |  Mizuho — 100%   |
                 |  liquidity line) |
                 +------------------+
```

主要特征：
- **多卖方**：单一管道汇集来自多家企业卖方的应收款，提供分散化
- **短期限**：底层应收款通常为 30–180 天；发行的 CP 为 1–3 个月
- **流动性后盾**：发起方银行提供一项 100% 流动性便利，以在市场冻结时为到期 CP 再融资 —— 这是使该 CP 获得最高评级的结构性「锚」
- **表外**（历史上）：巴塞尔 III 之前，管道处于发起方资产负债表之外；巴塞尔 III 之后的规则收紧了并表和资本处理

## 2. 日本大型银行的管道项目

每家大型银行运营一个或多个多卖方管道项目。名称和详细结构在支柱 3 报告及评级机构公开报告中披露。

| Sponsor | Typical conduit structure | Outstanding scale |
|---|---|---|
| [[megabanks/mufg|MUFG]] | Multi-seller conduit sponsored by [[megabanks/mufg|MUFG Bank]], administered through securities subsidiary; CP issued domestically and (historically) in USD via offshore vehicles | Several hundred billion to ~1 trillion yen equivalent at peak |
| [[megabanks/smfg|SMFG / SMBC]] | Multi-seller conduit programs sponsored by [[megabanks/smfg|SMBC]]; trade-receivable and auto-receivable heavy | Comparable scale to MUFG |
| [[megabanks/mizuho-fg|Mizuho FG]] | Multi-seller conduit sponsored by [[megabanks/mizuho-fg|Mizuho Bank]] | Somewhat smaller than MUFG / SMBC pair |

这些管道与大型银行自身的**直接企业 CP 承销**业务并存（有时竞争）—— 对于本身即 CP 适格（高 IG）的企业卖方而言，以自身名义发行 CP 往往比将应收款出售给管道更便宜。

## 3. 流动性后盾 —— 结构性的锚

日本 ABCP 管道的定义性特征是来自发起方银行的**100% 流动性便利**。其机制：

- 管道发行（例如）自发行起 90 天到期的 CP
- 若管道在到期时无法滚动 CP（市场扰动），发起方银行向管道贷款以偿还到期 CP
- 银行随后要么将应收款持有于自身资产负债表上，要么等待 CP 市场重新开放
- 因此 CP 投资者受银行承诺、而不仅是应收款池的保护，免受滚动风险

流动性后盾正是大型银行发起方管道发行的 ABCP 通常获得**最高短期评级**（JCR / R&I 给予 J-1+，S&P 给予 A-1+）的原因 —— 信用风险实际上转移至发起方银行的优先级评级。

## 4. 2008 之后的收缩

2008 全球金融危机是 ABCP 流动性后盾模式的首次现实压力测试：
- 全球 ABCP 市场（美国、欧盟）出现多起管道破产，其中流动性便利被耗尽，或发起方拒绝履约
- 日本的管道在 2008 后期**大量动用流动性额度** —— 这些管道并未破产，但发起方银行因 CP 融资损失而付出的代价相当可观
- 随着企业卖方减少以 CP 融资的应收款融资、发起方减少承诺，市场大幅萎缩

随后，2010 **巴塞尔 III 流动性框架** 施加了：
- 对未动用流动性承诺的更高资本成本
- 对管道流动性额度的 LCR（流动性覆盖率）处理，要求 HQLA 缓冲
- 在**基于风险的并表原则**下对管道的并表（若发起方承担大部分风险，则必须将管道并表）

其综合效应使市场相对 2008 峰值显著收缩。

## 5. 当前市场规模与结构

收缩之后，日本 ABCP 市场较 2008 峰值明显缩小，但对以下领域仍是一条相当可观的融资渠道：
- **汽车应收款** —— [[financial-conglomerates/toyota-tsusho-corp|Toyota Tsusho]] 及其他汽车制造商的自有汽车金融公司
- **贸易应收款** —— 制造商及商社关联公司
- **设备租赁应收款** —— 如 [[leasing-firms/mitsubishi-hc-capital|Mitsubishi HC Capital]]、[[leasing-firms/smfl|SMFL]]、[[leasing-firms/orix-corp|ORIX]] 等租赁子公司
- **消费金融应收款** —— 区域消费金融公司

JSDA 的短期 CP 统计将 ABCP 与企业 CP 和银行 CP 合并，因此 ABCP 特定的未偿余额须从发起方披露中推断。

## 6. 外国投资者群体

当**日元短端利率在跨货币掉期基础上具有吸引力**时，外国投资者是日本 ABCP 的相当可观的买家：
- 当以美元融资的外国投资者通过 FX 掉期将美元换为日元时，他们赚取基差收益加上 CP 收益
- 在 USD/JPY 基差大幅为负的时期（如雷曼之后、贯穿 2010 年代的周期性事件），即便国内收益率极低，日元 ABCP 也变得有吸引力
- 主要买家：美国优质货币市场基金（在允许的情况下）、欧洲 MMF、外国银行财资部门、主权财富基金

外国投资者的份额随基差波动，且仅由 JSDA 以合计口径报告。

## 7. 与期限 ABS 的比较

| Dimension | ABCP conduit | Term ABS |
|---|---|---|
| Tenor | 30–180 day CP rollover | 2–7 year amortising bond |
| Liquidity risk | High — borne by sponsor liquidity facility | Low — match-funded |
| Capital efficiency | Was high pre-Basel III; reduced post | Stable |
| Rating | Anchored to sponsor short-term rating | Anchored to pool structure |
| Investor base | MMFs, bank treasuries, short-duration funds | Life insurers, regional banks |
| Pricing | OIS + few bp | Mid-swap + 20–60 bp typical |

对大多数卖方而言，在管道融资与期限 ABS 之间的选择取决于应收款期限（短期 → 管道；较长期摊销 → 期限 ABS），以及卖方是想要持续的项目灵活性（管道）还是一次性的期限融资（ABS）。

## 8. 反方观点

- **「流动性后盾并非免费」** —— 巴塞尔 III 之后，发起方提供 100% 流动性便利的资本成本已不再微不足道；一些批评者认为，一旦计入真实成本，管道融资已不再比直接银行贷款明显更便宜
- **「多卖方分散化被高估」** —— 实际上许多日本管道对少数大卖方（如某汽车自有金融公司）存在集中敞口，因此分散化收益小于理论上的多卖方框架所暗示的
- **「风险转移是部分的」** —— 由于发起方提供流动性后盾，ABCP 本质上是发起方信用风险的结构化包装；向 CP 投资者的真正风险转移有限
- **「FSA 监督的不对称」** —— 管道并表规则和资本处理一直在演变；监管边界不如期限证券化那样清晰
- **「外国投资者的善变」** —— 当跨货币基差对日元 CP 不利变动时，外国需求蒸发，留下（规模较小的）国内投资者群体来吸收供给

## 9. 未决问题

- 在 [[financial-regulators/boj|BOJ]] 利率正常化下，日本 ABCP 市场是否会显著复苏 —— 这可能为日元短期融资重新确立正向套息
- 是否会针对具有清晰可持续性属性的应收款池（可再生能源租赁应收款、EV 汽车应收款）出现 ESG 挂钩 ABCP 或绿色 ABCP
- 若 [[leasing-firms/orix-corp|ORIX]] / [[leasing-firms/tokyo-century|Tokyo Century]] 等非大型银行管道变得更为活跃，其竞争地位如何
- 随着 [[regional-banks/japan-post-bank|Japan Post Bank]] 将其短期持仓从 JGB 多样化，它是否会成为更大的 ABCP 买家
- 影响发起方流动性便利经济性的 LCR / NSFR 规则细化的走向

## Related

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[finance/INDEX|finance index]]
- [[megabanks/mufg|MUFG]] · [[megabanks/smfg|SMFG]] · [[megabanks/mizuho-fg|Mizuho FG]]
- [[leasing-firms/mitsubishi-hc-capital|Mitsubishi HC Capital]] · [[leasing-firms/smfl|SMFL]] · [[leasing-firms/orix-corp|ORIX]] · [[leasing-firms/tokyo-century|Tokyo Century]]
- [[financial-regulators/japan-exchange-group|JPX]] · [[regional-banks/japan-post-bank|Japan Post Bank]]

## Sources

- JSDA commercial paper statistics — https://www.jsda.or.jp/en/
- MUFG IR / Pillar 3 disclosures — https://www.mufg.jp/english/
- SMFG IR / Pillar 3 disclosures — https://www.smfg.co.jp/english/
- Mizuho FG IR / Pillar 3 disclosures — https://www.mizuho-fg.com/index.html
- BOJ short-term money market statistics — https://www.boj.or.jp/en/statistics/
- JCR / R&I conduit rating commentaries (public)

---

> [!info] 校核状态
> confidence: **likely**. ABCP 管道结构、流动性后盾机制、2008 之后的收缩，以及巴塞尔 III 的资本影响，在 BIS 论文、FSA 披露和各发起方银行的支柱 3 报告中均有充分记录。具体的未偿规模数字因报告日期和汇总方法而异 —— 上述描述使用方向性表述而非精确数字。
