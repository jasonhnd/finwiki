---
source: structured-finance/auto-loan-abs-japan-toyota-honda
source_hash: e76f049df9b2ad5e
lang: zh
status: machine
fidelity: ok
title: "日本汽车贷款 ABS（Toyota Finance、Honda Finance、Nissan Credit）"
translated_at: 2026-06-01T04:15:40.175Z
---
# 日本汽车贷款 ABS（Toyota Finance、Honda Finance、Nissan Credit）

## TL;DR

日本汽车贷款 ABS 由日本汽车 OEM 的 captive finance 子公司以及银行系汽车金融公司发行。最大的重复发行人包括 [[card-issuers/toyota-finance]]、[[leasing-firms/toyota-financial]]（用于跨境）、Honda Finance、Nissan Credit、Mitsubishi UFJ Capital Auto Loan ABS 和 SMBC Auto。结构通常是颗粒化资产池（数万笔贷款）、TK-GK SPV 形式，并采用 senior / mezz / equity 分层。租赁 ABS 变体除信用风险外还带有残值风险。使用本页理解 [[structured-finance/INDEX]] 中的汽车金融 ABS 层，并连接到 [[structured-finance/INDEX]] 中的 captive-finance 公司页面。

## Wiki 路由

| 你想了解 | 前往 |
|---|---|
| 市场概览 | [[structured-finance/japan-abs-market-overview]] |
| 消费者 / 信用卡 ABS 对比 | [[structured-finance/consumer-loan-abs-japan-card-issuer]] |
| SPV 载体 | [[structured-finance/spv-tk-gk-vehicle-japan-tax]] |
| 评级方法 | [[structured-finance/credit-rating-methodology-jcr-r-and-i]] |
| Toyota Finance 公司页面 | [[card-issuers/toyota-finance]] |

## 1. 重复发行人

| 发行人 | 归属 | 典型证券化产品 |
|---|---|---|
| [[card-issuers/toyota-finance]] | Toyota Group（日本国内 captive） | Toyota 零售汽车贷款、经销商 floorplan 贷款 |
| [[leasing-firms/toyota-financial]] | Toyota Financial Services（国际控股） | 跨境 Toyota 汽车贷款 ABS |
| Honda Finance | Honda Group captive | Honda 零售汽车贷款 |
| Nissan Credit (Nissan Financial Services) | Nissan Group captive | Nissan 零售汽车贷款 |
| Mitsubishi UFJ Capital Auto Loan ABS | MUFG 系 | 多品牌汽车贷款池 |
| SMBC Auto | SMBC 系 | 多品牌汽车贷款池 |
| [[leasing-firms/mitsubishi-hc-capital]] | Mitsubishi HC Capital（租赁） | 汽车租赁、设备租赁 |

OEM captive 发起人主导发行量，因为它们拥有日本最大的零售汽车贷款组合。银行系汽车金融是规模较小的次级渠道。

## 2. 典型结构

| 要素 | 典型设置 |
|---|---|
| 载体 | TK-GK SPV（[[structured-finance/spv-tk-gk-vehicle-japan-tax]]）或信托受益权 |
| 受托人 | [[trust-banks/sumitomo-mitsui-trust]] 或其他信托银行 |
| 服务机构 | 发起人（captive finance 公司） |
| 后备服务机构 | 指名，在发起人违约时启用 |
| 资产池规模 | 数万笔贷款，颗粒化 |
| 资产池构成 | 零售汽车贷款（3-7 年期限较典型） |
| 分层 | Senior（AAA）/ mezz / equity |

## 3. 加权平均 APR

- 日本零售汽车贷款 APR 通常处于低个位数区间（远低于美国汽车贷款 ABS）。
- Captive-OEM 贷款往往带有与车辆销售捆绑的促销 APR（0%-3%）；非促销利率更高。
- 多品牌汽车金融公司 APR（银行系）略高，反映缺少 OEM 补贴。
- 超额利差（抵押资产票息减债券票息再减服务费）比美国 ABS 更薄，因为基础 APR 更低；结构通过更高的次级化进行补偿。

## 4. 违约建模

| 驱动因素 | 影响 |
|---|---|
| 失业 | 主要违约触发因素；日本失业率历史上较低 → 违约率温和。 |
| 收入冲击 | 奖金削减年份（日本经济下行中的典型模式）会提高逾期。 |
| 车辆转售价值 | 影响收回车辆的回收率；日本受益于活跃的二手车出口市场。 |
| 资产池账龄 | 违约在第 12-36个月达到峰值；采用保守 ramp 假设。 |
| 地域集中 | 如果资产池没有全国分散，则存在区域集中风险。 |

JCR 和 R&I 对日本汽车贷款 ABS 的违约建模标准使用重复发行人的历史资产池数据；历史上违约率低于美国可比资产池。

## 5. 租赁 ABS — 残值风险

| 风险类型 | 覆盖内容 |
|---|---|
| 信用风险 | 承租人在租赁期内违约 |
| 残值风险 | 租赁到期时车辆价值低于合同残值；出租人（或 ABS）承担损失 |
| 自愿终止 | 承租人提前返还车辆；残值实现风险 |
| 维护 / 使用风险 | 过度磨损或里程；租赁合同罚金 |

租赁 ABS 与贷款 ABS 的风险轮廓根本不同：即便承租人从不违约，出租人也会在每份合同到期时面临残值风险。评级机构对租赁 ABS 资产池适用更高次级化，并在情景中对残值施加压力折扣。

[[leasing-firms/mitsubishi-hc-capital]] 和其他租赁公司发行租赁 ABS 交易；OEM captive 也发行与贷款 ABS 纳入同一 shelf 的租赁 ABS。

## 6. 投资者基础

| 类别 | 投资者 | 原因 |
|---|---|---|
| Senior | 寿险公司、地方银行、资产管理公司 | JGB-plus 收益、AAA、颗粒化资产池 |
| Mezz | 专门利差投资者 | 收益增强 |
| Equity | 发起人留存 | 风险留存 + 经济性 |

当通过跨境 shelf 发行时，外国投资者会选择性参与 senior 分层（通常是 Toyota Financial Services 国际 shelf，除 JCR / R&I 外还由 S&P、Moody's、Fitch 评级）。

## 7. 经销商 floorplan ABS

汽车金融 ABS 的一个子集将经销商库存融资（floorplan loans）证券化。这些交易具有：

- 更短期限（月，而不是年）
- 更高周转（循环）
- 不同的抵押品动态（新车库存，而非零售客户融资车辆）
- 不同的违约触发因素（经销商破产，而非零售客户违约）

在日本，floorplan ABS 的规模小于零售贷款 ABS，但它是 captive finance 公司管理经销商授信额度的常规工具。

## 8. 与 OEM 信用的关系

- Captive-finance ABS 在法律上独立于 OEM 母公司的信用（ABS 具有破产隔离）。
- 但在实际层面，captive finance 子公司的偿付能力依赖于母公司 OEM 的持续经营；在极端情景下，OEM 困境可能扰乱服务。
- 评级机构部分通过 OEM 视角分析 captive-finance ABS，后备服务机构安排和母公司信用联系都是因素。

## 相关

- [[structured-finance/INDEX]]
- [[structured-finance/japan-abs-market-overview]]
- [[structured-finance/consumer-loan-abs-japan-card-issuer]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax]]
- [[structured-finance/japan-trust-beneficial-interest-vs-spv]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[card-issuers/toyota-finance]]
- [[leasing-firms/toyota-financial]]
- [[leasing-firms/mitsubishi-hc-capital]]
- [[trust-banks/sumitomo-mitsui-trust]]

## 来源

- JCR (Japan Credit Rating Agency)，汽车贷款 ABS 标准。
- R&I (Rating and Investment Information)，汽车贷款 ABS 方法。
- Toyota Finance 公开公司网站。
- JSDA (Japan Securities Dealers Association)。
- ASF Japan (Asset Securitization Forum Japan)。
