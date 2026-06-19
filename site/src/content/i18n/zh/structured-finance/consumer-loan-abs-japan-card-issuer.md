---
source: structured-finance/consumer-loan-abs-japan-card-issuer
source_hash: 9caa44b6f699195f
lang: zh
status: machine
fidelity: ok
title: "日本消费贷款 / 卡债权 ABS（Aplus, Orico, JACCS, MUFG NICOS）"
translated_at: 2026-06-19T12:43:19.873Z
---

# 日本消费贷款 / 卡债权 ABS（Aplus, Orico, JACCS, MUFG NICOS）

## TL;DR

日本的消费贷款和卡债权 ABS 由主要的消费金融与发卡公司发行 — [[card-issuers/aplus]]、[[card-issuers/orico]]、[[card-issuers/jaccs]]、[[card-issuers/mufg-nicos]] 及其他 — 采用带有提前摊销触发的循环资产池结构。该资产类别在结构上与车贷 ABS 不同，因为卡债权是短期、循环的，并与对经济周期敏感的消费信贷需求挂钩。违约率比车贷 ABS 更具周期性，但带有硬触发的循环结构保护优先级债券持有人。本页用于 [[structured-finance/INDEX]] 中消费 / 卡 ABS 的结构机制，并连接到 [[structured-finance/INDEX]] 中的消费金融公司页面。

## Wiki 路线

| 你想了解 | 前往 |
|---|---|
| 市场概观 | [[structured-finance/japan-abs-market-overview]] |
| 车贷 ABS 比较 | [[structured-finance/auto-loan-abs-japan-toyota-honda]] |
| SPV 载体 | [[structured-finance/spv-tk-gk-vehicle-japan-tax]] |
| 评级方法 | [[structured-finance/credit-rating-methodology-jcr-r-and-i]] |
| 发卡公司页面 | [[card-issuers/jcb]] |

## 1。常态发行体

| 发行体 | 品牌 / 业务 | 典型证券化资产 |
|---|---|---|
| [[card-issuers/aplus]] | Aplus Financial（SBI / 其他系列） | 消费贷款、分期付款债权 |
| [[card-issuers/orico]] | Orient Corporation | 卡债权、车辆分期、消费贷款 |
| [[card-issuers/jaccs]] | JACCS Co., Ltd. | 分期付款债权、卡债权、消费贷款 |
| [[card-issuers/mufg-nicos]] | Mitsubishi UFJ NICOS | 卡债权 |
| [[card-issuers/jcb]] | JCB | 卡债权（JCB 品牌） |
| [[card-issuers/credit-saison]] | Credit Saison | 卡债权、分期付款债权 |
| [[card-issuers/aeon-financial-service]] | Aeon Financial Service（Aeon Card 等） | 卡债权、分期付款债权 |

这些是主要的常态发行体；部分案件采用银行系受托人结构，其他采用 TK-GK SPV。

## 2。循环结构

| 要素 | 说明 |
|---|---|
| 循环期 | 从债权池回收的现金用于购买新的合格债权，使资产池余额保持不变。 |
| 摊销期 | 循环期结束或触发命中后，现金流偿付债券。 |
| 合格标准 | 新债权必须满足既定的信用 / 集中度 / 账龄标准。 |
| 资产池余额 | 在循环阶段维持在目标水平。 |
| 债券久期 | 实际久期取决于循环期加上摊销速度。 |

循环结构适合卡债权，因为单笔债权快速周转（一笔刷卡债权可能在 30-60 天内偿付），但借款人关系是长期的。

## 3。提前摊销触发

| 触发类型 | 例 |
|---|---|
| 信用触发 | 超额利差跌破阈值；冲销率升破阈值；逾期超过阈值 |
| 资产池触发 | 资产池余额跌破所需水平；集中度限额被突破 |
| 发起人触发 | 发起人破产 / 评级下调；服务机构违约事件 |
| 结构触发 | 所需准备金账户未注资；优先级债券支付不足 |

触发命中时，交易从循环切换为摊销模式：现金流不再用于购买新债权，而是按优先顺序支付给债券持有人。这是优先级债券持有人的主要保护。

## 4。周期性违约率

| 期间 | 模式 |
|---|---|
| 2006 之前| 消费金融繁荣；债权扩张；竞争加剧导致违约率上升。 |
| 2006-2010 | 贷金业法修订（过付返还请求）；消费金融行业重组；违约上升。 |
| 2010-2015 | 行业整合；存活的发行体改善信用审核；违约率趋稳。 |
| 2015-2020 | 稳定；电子商务带动卡交易量；违约低位。 |
| 2020-至今 | COVID 冲击后复苏；违约对经济周期敏感。 |

2006 的贷金业法修订（以及随后的过付返还请求浪潮）是理解日本消费金融 ABS 的关键历史事件 — 许多消费金融公司倒闭或被收购，ABS 投资者学会将监管 / 诉讼风险纳入结构建模。修订后的行业更为集中、信用纪律更强。

## 5。分层

| 层级 | 典型买方 |
|---|---|
| 优先级（AAA / AA） | 寿险公司、资产管理人、巨型银行 ALM 账户 |
| 夹层（A / BBB） | 专门的利差投资者 |
| 权益 / 次级 | 发起人留存 |

次级化水平高于车贷 ABS，反映更高的违约波动性。

## 6。信用增级

| 机制 | 目的 |
|---|---|
| 次级化 | 初级层吸收首笔损失。 |
| 现金准备金 | 在交割时注资或由超额利差累积的准备金。 |
| 超额利差留存 | 当触发接近阈值时将超额利差留存至准备金。 |
| 服务机构垫款 | 服务机构为逾期款项向债券持有人垫付。 |
| 超额担保 | 债权面值超过债券面值。 |

超额利差留存对循环结构尤为重要，因为超额利差是触及次级化之前的第一道防线。

## 7。载体选择

日本大多数消费 / 卡债权 ABS 采用 TK-GK SPV（[[structured-finance/spv-tk-gk-vehicle-japan-tax]]）或信托受益权结构（[[structured-finance/japan-trust-beneficial-interest-vs-spv]]）。当受托人是 [[trust-banks/sumitomo-mitsui-trust]] 或 Mitsubishi UFJ Trust 等大型信托银行时，信托结构较为常见。

## 8。对发行体的融资构成作用

对于消费金融 / 发卡公司，ABS 与以下并列：

- 银行授信融资（来自巨型银行和地方银行的承诺信贷额度）
- 公司债发行（当发行体拥有投资级评级时）
- 银行股东融资（部分消费金融公司是银行子公司 — 例如作为 MUFG 集团公司的 MUFG NICOS）

ABS 提供：
- 融资多元化
- 表外资本释放
- 与债权存续期匹配的期限
- 评级套利（尽管发行体公司评级较低，优先级仍为 AAA）

## 关联

- [[structured-finance/INDEX]]
- [[structured-finance/japan-abs-market-overview]]
- [[structured-finance/auto-loan-abs-japan-toyota-honda]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax]]
- [[structured-finance/japan-trust-beneficial-interest-vs-spv]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[card-issuers/orico]]
- [[card-issuers/jaccs]]
- [[card-issuers/aplus]]
- [[card-issuers/mufg-nicos]]
- [[card-issuers/jcb]]

## 出处

- JCR（日本格付研究所），消费 / 卡 ABS 标准。
- R&I（格付投资情报中心），消费金融 ABS 方法。
- JSDA（日本证券业协会）。
- ASF Japan（资产证券化论坛日本）。
- JACCS、Orico、Aplus、NICOS 的公开 IR。
