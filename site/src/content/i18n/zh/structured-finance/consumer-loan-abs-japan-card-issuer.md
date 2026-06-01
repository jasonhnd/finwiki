---
source: structured-finance/consumer-loan-abs-japan-card-issuer
source_hash: cbbad183721ba81d
lang: zh
status: machine
fidelity: ok
title: "日本消费贷款 / 信用卡应收款 ABS（Aplus、Orico、JACCS、MUFG NICOS）"
translated_at: 2026-06-01T04:15:40.092Z
---
# 日本消费贷款 / 信用卡应收款 ABS（Aplus、Orico、JACCS、MUFG NICOS）

## TL;DR

日本的消费贷款和信用卡应收款 ABS 由主要消费金融和发卡公司发行，包括 [[JapanFG/aplus]]、[[JapanFG/orico]]、[[JapanFG/jaccs]]、[[JapanFG/mufg-nicos]] 等，并采用带有提前摊还触发机制的循环池结构。该资产类别在结构上不同于汽车贷款 ABS，因为信用卡应收款期限短、循环性强，并与对经济周期敏感的消费信贷需求相关。违约率比汽车贷款 ABS 更具周期性，但带有硬触发机制的循环结构保护优先级债券持有人。使用本页理解 [[structured-finance/INDEX]] 中的消费 / 信用卡 ABS 结构机制，并连接到 [[JapanFG/INDEX]] 中的消费金融公司页面。

## Wiki 路径

| 你想了解 | 前往 |
|---|---|
| 市场概览 | [[structured-finance/japan-abs-market-overview]] |
| 汽车贷款 ABS 对比 | [[structured-finance/auto-loan-abs-japan-toyota-honda]] |
| SPV 工具 | [[structured-finance/spv-tk-gk-vehicle-japan-tax]] |
| 评级方法 | [[structured-finance/credit-rating-methodology-jcr-r-and-i]] |
| 发卡公司页面 | [[JapanFG/jcb]] |

## 1. 重复发行人

| 发行人 | 品牌 / 业务 | 典型证券化资产 |
|---|---|---|
| [[JapanFG/aplus]] | Aplus Financial（SBI / 其他关联方） | 消费贷款、分期应收款 |
| [[JapanFG/orico]] | Orient Corporation | 信用卡应收款、汽车分期、消费贷款 |
| [[JapanFG/jaccs]] | JACCS Co., Ltd. | 分期应收款、信用卡应收款、消费贷款 |
| [[JapanFG/mufg-nicos]] | Mitsubishi UFJ NICOS | 信用卡应收款 |
| [[JapanFG/jcb]] | JCB | 信用卡应收款（JCB 品牌） |
| [[JapanFG/credit-saison]] | Credit Saison | 信用卡应收款、分期应收款 |
| [[JapanFG/aeon-financial-service]] | Aeon Financial Service（Aeon Card 等） | 信用卡应收款、分期应收款 |

这些是主要的重复发行人；部分交易采用银行关联的受托人结构，其他交易采用 TK-GK SPV。

## 2. 循环结构

| 要素 | 说明 |
|---|---|
| 循环期 | 从应收款池回收的现金用于购买新的合格应收款，使池余额保持平稳。 |
| 摊还期 | 循环期结束或触发事件发生后，现金流用于偿还债券。 |
| 合格标准 | 新应收款必须满足规定的信用 / 集中度 / 账龄标准。 |
| 池余额 | 循环阶段维持在目标水平。 |
| 债券久期 | 有效久期取决于循环期加摊还速度。 |

循环结构适合信用卡应收款，因为单笔应收款周转很快（一笔信用卡消费应收款可能在 30-60 天内支付），但借款人关系是长期的。

## 3. 提前摊还触发机制

| 触发类型 | 示例 |
|---|---|
| 信用触发 | 超额利差低于阈值；核销高于阈值；逾期超过阈值 |
| 池触发 | 池余额低于要求水平；集中度限制被突破 |
| 发起人触发 | 发起人破产 / 评级下调；服务机构违约事件 |
| 结构触发 | 所需准备金账户未得到资金；优先级债券出现付款短缺 |

触发事件发生时，交易从循环模式切换到摊还模式：现金流不再用于购买新的应收款，而是按优先顺序支付给债券持有人。这是优先级债券持有人的主要保护。

## 4. 周期性违约率

| 时期 | 模式 |
|---|---|
| 2006 前 | 消费金融繁荣；应收款增长；竞争加剧导致违约率上升。 |
| 2006-2010  | 贷金业法修订（过付款返还请求）；消费金融行业重组；违约上升。 |
| 2010-2015  | 行业整合；幸存发行人改善信用承销；违约率稳定。 |
| 2015-2020  | 平稳；电子商务推动信用卡交易量；违约较低。 |
| 2020至今 | COVID 冲击后复苏；违约对经济周期敏感。 |

2006 贷金业法修正案（以及随后出现的大量过付款返还请求）是理解日本消费金融 ABS 的关键历史事件 —— 许多消费金融公司倒闭或被收购，ABS 投资者也学会将监管 / 诉讼风险纳入结构建模。修正后的行业更加集中，也更有信用纪律。

## 5. 分层

| 分层 | 典型买方 |
|---|---|
| 优先级（AAA / AA） | 生命保险公司、资产管理公司、巨型银行 ALM 账簿 |
| 夹层（A / BBB） | 专门利差投资者 |
| 权益 / 次级 | 发起人留存 |

由于违约波动性更高，次级化水平高于汽车贷款 ABS。

## 6. 信用增级

| 机制 | 目的 |
|---|---|
| 次级化 | 初始损失由劣后层吸收。 |
| 现金准备金 | 交割时出资的准备金，或由超额利差累积形成。 |
| 超额利差锁定 | 触发机制接近阈值时，将超额利差锁定进准备金。 |
| 服务机构垫付 | 服务机构向债券持有人垫付逾期付款。 |
| 超额抵押 | 应收款面值高于债券面值。 |

超额利差锁定对循环结构尤其重要，因为在触及次级化之前，超额利差是第一道防线。

## 7. 工具选择

大多数日本消费 / 信用卡应收款 ABS 使用 TK-GK SPV（[[structured-finance/spv-tk-gk-vehicle-japan-tax]]）或信托受益权结构（[[structured-finance/japan-trust-beneficial-interest-vs-spv]]）。当受托人为 [[JapanFG/sumitomo-mitsui-trust]] 或 Mitsubishi UFJ Trust 等主要信托银行时，信托结构较为常见。

## 8. 发行人的融资组合角色

对消费金融 / 发卡公司而言，ABS 与以下融资并存：

- 银行额度融资（来自巨型银行和地方银行的承诺信贷额度）
- 公司债发行（当发行人拥有投资级评级时）
- 银行股东融资（部分消费金融公司是银行子公司，例如 MUFG NICOS 是 MUFG 集团公司）

ABS 提供：
- 融资多元化
- 表外资本缓释
- 与应收款寿命匹配的期限
- 评级套利（即使发行人公司评级较低，优先级仍可达到 AAA）

## 相关

- [[structured-finance/INDEX]]
- [[structured-finance/japan-abs-market-overview]]
- [[structured-finance/auto-loan-abs-japan-toyota-honda]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax]]
- [[structured-finance/japan-trust-beneficial-interest-vs-spv]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[JapanFG/orico]]
- [[JapanFG/jaccs]]
- [[JapanFG/aplus]]
- [[JapanFG/mufg-nicos]]
- [[JapanFG/jcb]]

## 来源

- JCR (Japan Credit Rating Agency), consumer / card ABS criteria.
- R&I (Rating and Investment Information), consumer-finance ABS methodology.
- JSDA (Japan Securities Dealers Association).
- ASF Japan (Asset Securitization Forum Japan).
- Public IR from JACCS, Orico, Aplus, NICOS.
