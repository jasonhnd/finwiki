---
source: structured-finance/abcp-conduit-japan-megabank
source_hash: fac280f5b1c9977c
lang: zh
status: machine
fidelity: ok
title: "ABCP 管道（资产支持商业票据）— 日本大型银行发起项目"
translated_at: 2026-06-01T04:15:40.158Z
---

# ABCP 管道（资产支持商业票据）— 日本大型银行发起项目

## TL;DR

ABCP 管道是表外特殊目的载体（[[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV structures]]），从企业卖方购买短期限应收款，并通过在日本证券业协会监督的国内 CP 市场发行日元商业票据为购买融资，同时由发起大型银行提供**流动性后盾**。在日本，重要的三个发起方是 [[JapanFG/mufg|MUFG]]（通过其银行部门和证券子公司）、[[JapanFG/smfg|SMFG / SMBC]] 和 [[JapanFG/mizuho-fg|Mizuho FG]]。各自运营一到两个多卖方管道项目，峰值 CP 余额从数千亿日元到超过一万亿日元不等。市场在 2008 金融危机后急剧收缩（当时全球 ABCP 市场冻结，日本管道动用流动性额度），又在 2010 Basel III 流动性框架提高发起方承诺资本成本后进一步缩小，并稳定在远小于危机前峰值的规模。当日元短端利率在交叉货币掉期基础上具有吸引力时，外国投资者是重要的 CP 买方。

## Wiki route

本条目位于 [[structured-finance/INDEX|structured-finance index]] 之下，作为**短期限证券化管道**节点。请对照 [[structured-finance/japan-abs-market-overview|Japan ABS market overview]] 阅读期限证券化市场，对照 [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]] 阅读法律实体层，对照 [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]] 阅读评级机构如何处理流动性后盾。系统框架见 [[finance/INDEX|finance index]]，用于理解更广泛的短期融资背景。与银行资产负债表管理相邻：[[JapanFG/mufg|MUFG]]、[[JapanFG/smfg|SMFG]]、[[JapanFG/mizuho-fg|Mizuho FG]] 均在其 Pillar 3 披露中披露 ABCP 管道敞口。

## 1. ABCP 管道的形态

```
企业卖方（汽车贷款发起人、
  贸易应收款发起人、设备
  出租人、区域消费金融公司）
   |
   |  出售应收款（真实出售给 SPV）
   v
+----------------------------------+
|        多卖方管道                |
|          (SPV — GK/TK)           |
|  - 为应收款购买融资              |
|  - 向 JSDA 市场发行日元 CP       |
+--------+----------------+--------+
         |                |
   CP 发行          流动性 / 信用
         |             后盾
         v                |
+--------+---------+      |
| CP 投资者        |      |
| (MMF、地方银行、 |      |
|  外国投资者、    |      |
|  寿险公司)       |      |
+------------------+      |
                          v
                 +--------+---------+
                 |   发起银行       |
                 | (MUFG / SMBC /   |
                 |  Mizuho — 100%   |
                 |  流动性额度)     |
                 +------------------+
```

主要特征：
- **多卖方**：单一管道汇集多个企业卖方的应收款，提供分散化
- **短期限**：底层应收款通常为 30–180 天；发行的 CP 为 1–3 个月
- **流动性后盾**：发起银行提供 100% 流动性便利，在市场冻结时为到期 CP 再融资 — 这是使 CP 获得最高评级的结构性“锚”
- **表外**（历史上）：Basel III 之前，管道不并入发起方资产负债表；Basel III 之后规则收紧了合并和资本处理

## 2. 日本大型银行管道项目

每家大型银行运营一个或多个多卖方管道项目。名称和详细结构在 Pillar 3 报告以及评级机构公开报告中披露。

| 发起方 | 典型管道结构 | 余额规模 |
|---|---|---|
| [[JapanFG/mufg|MUFG]] | 由 [[JapanFG/mufg|MUFG Bank]] 发起的多卖方管道，通过证券子公司管理；CP 在国内发行，并且历史上通过离岸载体以美元发行 | 峰值相当于数千亿至约 1 万亿日元 |
| [[JapanFG/smfg|SMFG / SMBC]] | 由 [[JapanFG/smfg|SMBC]] 发起的多卖方管道项目；以贸易应收款和汽车应收款为主 | 与 MUFG 规模相当 |
| [[JapanFG/mizuho-fg|Mizuho FG]] | 由 [[JapanFG/mizuho-fg|Mizuho Bank]] 发起的多卖方管道 | 略小于 MUFG / SMBC 组合 |

这些管道与大型银行自身的**直接企业 CP 承销**业务并存（有时也竞争）— 对于本身有资格发行 CP 的企业卖方（高投资级），以自身名义发行 CP 往往比将应收款卖给管道更便宜。

## 3. 流动性后盾 — 结构性锚

日本 ABCP 管道的定义性特征是发起银行提供的 **100% 流动性便利**。机制如下：

- 管道发行 CP，例如在发行后 90 天到期
- 如果管道在到期时无法滚续 CP（市场扰动），发起银行向管道放款以偿还到期 CP
- 银行随后要么在自身资产负债表上持有应收款，要么等待 CP 市场重新开放
- 因此，CP 投资者防范滚续风险的保护来自银行承诺，而不只是应收款池

流动性后盾解释了为什么大型银行发起的管道所发行的 ABCP 通常获得**最高短期评级**（JCR / R&I 的 J-1+，S&P 的 A-1+）— 信用风险实际上转移至发起银行的高级评级。

## 4. 2008 后的收缩

2008 全球金融危机是 ABCP 流动性后盾模型的首次现实压力测试：
- 全球 ABCP 市场（美国、欧盟）出现多起管道失败，流动性便利耗尽或发起方拒绝履约
- 日本管道在 2008 末期**大量动用流动性额度** — 管道没有失败，但发起银行因 CP 融资流失承担了显著成本
- 随着企业卖方减少 CP 融资的应收款融资、发起方减少承诺，市场显著缩小

随后 2010 **Basel III 流动性框架**施加了：
- 未提取流动性承诺的更高资本成本
- LCR（流动性覆盖率）对管道流动性额度的处理要求 HQLA 缓冲
- 在**基于风险的合并原则**下合并管道（如果发起方承担大部分风险，则必须合并管道）

综合影响使市场相对于 2008 前峰值显著收缩。

## 5. 当前市场规模与结构

收缩之后，日本 ABCP 市场明显小于 2008 前峰值，但仍然是以下资产的重要融资渠道：
- **汽车应收款** — [[JapanFG/toyota-tsusho-corp|Toyota Tsusho]] 及其他汽车制造商的专属汽车金融公司
- **贸易应收款** — 制造商和商社关联方
- **设备租赁应收款** — [[JapanFG/mitsubishi-hc-capital|Mitsubishi HC Capital]]、[[JapanFG/smfl|SMFL]]、[[JapanFG/orix-corp|ORIX]] 等租赁子公司
- **消费金融应收款** — 区域消费金融公司

JSDA 短期 CP 统计将 ABCP 与企业 CP 和银行 CP 合并统计，因此 ABCP 专项余额必须从发起方披露中推断。

## 6. 外国投资者基础

当**日元短端利率在交叉货币掉期基础上具有吸引力**时，外国投资者是日本 ABCP 的重要买方：
- 当以美元融资的外国投资者通过外汇掉期将美元换成日元时，他们赚取基差收益加 CP 收益率
- 在 USD/JPY 基差大幅为负的时期（例如雷曼后、贯穿 2010年代的阶段性事件），即使国内收益率很低，日元 ABCP 也变得有吸引力
- 主要买方：美国 prime 货币市场基金（在允许情况下）、欧洲 MMF、外国银行司库、主权财富基金

外国投资者占比随基差波动，并且 JSDA 只以汇总口径报告。

## 7. 与期限 ABS 的比较

| 维度 | ABCP 管道 | 期限 ABS |
|---|---|---|
| 期限 | 30–180 天 CP 滚续 | 2–7 年摊还债券 |
| 流动性风险 | 高 — 由发起方流动性便利承担 | 低 — 匹配融资 |
| 资本效率 | Basel III 前较高；之后降低 | 稳定 |
| 评级 | 锚定发起方短期评级 | 锚定资产池结构 |
| 投资者基础 | MMF、银行司库、短久期基金 | 寿险公司、地方银行 |
| 定价 | OIS + 少数 bp | 通常为 mid-swap + 20–60 bp |

对大多数卖方而言，选择管道融资还是期限 ABS 取决于应收款期限（短期 → 管道；较长摊还 → 期限 ABS），以及卖方是否需要持续项目灵活性（管道）还是一次性期限融资（ABS）。

## 8. 反方观点

- **“流动性后盾不是免费的”** — Basel III 之后，发起方提供 100% 流动性便利的资本成本不再微不足道；一些批评者认为，在计入真实成本后，管道融资不再明显便宜于直接银行贷款
- **“多卖方分散化被夸大”** — 实务中许多日本管道对少数大型卖方（例如某汽车金融 captive）存在集中敞口，因此分散化收益低于理论上的多卖方叙事
- **“风险转移是部分的”** — 因为发起方提供流动性后盾，ABCP 本质上是发起方信用风险的结构化包装；向 CP 投资者的真实风险转移有限
- **“FSA 监管不对称”** — 管道合并规则和资本处理已经演变；监管边界不如期限证券化清晰
- **“外国投资者容易撤离”** — 当交叉货币基差不利于日元 CP 时，外国需求消失，留下较小的国内投资者基础吸收供给

## 9. 未决问题

- 在 [[JapanFG/boj|BOJ]] 利率正常化下，日本 ABCP 市场是否会实质性恢复，从而重新建立日元短期融资的正 carry
- 是否会出现 ESG-linked ABCP 或绿色 ABCP，用于具有清晰可持续属性的应收款池（可再生能源租赁应收款、EV 汽车应收款）
- 如果 [[JapanFG/orix-corp|ORIX]] / [[JapanFG/tokyo-century|Tokyo Century]] 非大型银行管道更加活跃，其竞争地位如何
- 随着 [[JapanFG/japan-post-bank|Japan Post Bank]] 将短期限持仓从 JGB 多元化出去，它是否会成为更大的 ABCP 买方
- 影响发起方流动性便利经济性的 LCR / NSFR 规则细化路径

## Related

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[finance/INDEX|finance index]]
- [[JapanFG/mufg|MUFG]] · [[JapanFG/smfg|SMFG]] · [[JapanFG/mizuho-fg|Mizuho FG]]
- [[JapanFG/mitsubishi-hc-capital|Mitsubishi HC Capital]] · [[JapanFG/smfl|SMFL]] · [[JapanFG/orix-corp|ORIX]] · [[JapanFG/tokyo-century|Tokyo Century]]
- [[JapanFG/japan-exchange-group|JPX]] · [[JapanFG/japan-post-bank|Japan Post Bank]]

## Sources

- JSDA commercial paper statistics — https://www.jsda.or.jp/en/
- MUFG IR / Pillar 3 disclosures — https://www.mufg.jp/english/
- SMFG IR / Pillar 3 disclosures — https://www.smfg.co.jp/english/
- Mizuho FG IR / Pillar 3 disclosures — https://www.mizuho-fg.com/index.html
- BOJ short-term money market statistics — https://www.boj.or.jp/en/statistics/
- JCR / R&I conduit rating commentaries (public)

---

> [!info] 校核状态
> confidence: **likely**. ABCP conduit 结构、流动性后盾机制、2008 后收缩以及 Basel III 资本影响在 BIS 论文、FSA 披露和发起银行 Pillar 3 报告中都有充分记录。具体余额数字会随报告日期和汇总方法而变化 — 以上描述使用方向性语言而非精确数字。
