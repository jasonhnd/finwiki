---
source: securities/odx-start-stb-secondary-market
source_hash: ea535c2573f4e38e
lang: zh
status: machine
fidelity: ok
title: "ODX START 证券型代币二级市场"
translated_at: 2026-06-22T07:08:50.155Z
---

# ODX START 证券型代币二级市场

## Wiki 路径

本页面归属于 [[securities/INDEX|securities index]]，作为 [[securities/osaka-digital-exchange|Osaka Digital Exchange]] 的场所机制深化，以及 [[securities/japan-security-token-secondary-market-route|Japan security token secondary market route]] 的二级市场姊妹篇。请与 [[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]] 一起阅读以了解场所／参与者分离逻辑，与 [[securities/japan-best-execution-sor-pts|best execution / SOR / PTS]] 一起阅读以了解路由政策背景，与 [[securities/japan-market-infrastructure-map|Japan market infrastructure map]] 一起阅读以了解 ODX 在 TSE／Japannext PTS 与 JSCC／JASDEC 之间的位置。跨领域桥梁是 [[fintech/jp-stablecoin-progmat|Progmat stablecoin route]]，因为代币化现金腿支付基础设施是日本 ST 二级市场实现完整原子化 DvP 所缺失的轨道。

## TL;DR

ODX（大阪デジタルエクスチェンジ，Osaka Digital Exchange）是一家日本 FIEA 注册的 PTS 运营商，作为由 SBI HD、三井住友信托控股（SuMi TRUST／住信）和野村 HD 牵头的合资企业成立，另有证券业参与。其 START 市场于 2023-12-25 推出，公开描述为日本首个面向证券型代币（ST／セキュリティトークン）的二级交易 PTS，涵盖在 FIEA 电子记录可转让权利框架下发行的代币化股权、代币化债券和代币化房地产受益权。START 上的交易完全通过获接纳的证券公司交易参与者进行中介；ODX 本身不直接面对零售投资者。结算就上市证券相邻性与 [[securities/japan-securities-clearing-corp|JSCC]] 和 [[securities/japan-securities-depository-center|JASDEC]] 整合，并就链上代币转移腿与代币平台基础设施（如 [[payment-firms/progmat|Progmat]]、BOOSTRY／ibet）整合。START 上的新发行上市在二级交易启用之前，须经过 ODX 运营的注册批准（Approval to Register, ATR）门控流程。

## 场所身份

| 字段 | 公开读数 |
|---|---|
| 法律实体 | 株式会社大阪デジタルエクスチェンジ (Osaka Digital Exchange Co., Ltd.) |
| FIEA 注册 | 具有 PTS 运营授权的第一种金融商品交易业者；通过 [[securities/financial-instruments-business-operators-japan-index|FIBO registry]] 验证。 |
| 所有权脉络 | 以 [[megabanks/sbi-hd|SBI HD]] 为牵头锚成立，[[securities-firms/nomura-hd|Nomura HD]]，三井住友信托控股／SBI 住信合伙脉络。通过 ODX 公司页面验证当前股权结构。 |
| 自主规制 | [[financial-regulators/jsda|JSDA]] 会员；FSA 2022 市场制度工作组成果之后创设的非上市 PTS 规则涵盖证券型代币板块。 |
| 运营市场 | 股权 PTS（一般现金股票范围，比 Japannext 更窄）；START 证券型代币 PTS（于 2023-12-25 推出）。 |
| 投资者准入 | 通过获接纳的证券公司交易参与者；ODX 不直接服务非专业投资者。 |
| 清算／结算 | 现金股票 PTS 交易通过 [[securities/japan-securities-clearing-corp|JSCC]] 清算并经由 [[securities/japan-securities-depository-center|JASDEC]] 结算；ST 转移通过代币平台的转移机制进行路由，托管记录由信托或平台方处理。 |

在发布时效性材料之前，务必阅读场所的 About／News 页面以获取当前参与者名单、市场范围及运营公告。

## 所有权与战略协同

ODX 的创始资本结构是一个刻意的跨部门联盟，而非单一机构产品：

| 锚 | 战略利益 |
|---|---|
| [[megabanks/sbi-hd|SBI HD]]（及 SBI 集团实体）| PTS／数字资产／在线券商特许经营扩展；SBI 证券零售分销；Progmat／数字资产平台主题。 |
| [[securities-firms/nomura-hd|Nomura HD]] | 证券业领导股份；BOOSTRY（野村牵头的 ST 发行平台）发行方侧协同；机构 STO 分销。 |
| 三井住友信托集团／SBI 住信网络银行脉络 | 代币化信托受益权产品的信托银行托管／记录角色；现金腿基础设施。 |
| 其他证券公司（随时间作为参与者及／或股东加入）| 为 ST 发行方市场提供分销广度；参与唯一的日本 ST 二级场所。 |

联盟设计是一项特性，而非缺陷：单一公司拥有的 ST PTS 将缺乏引导市场所需的发行方侧和分销侧广度。其取舍是合资场所常见的治理摩擦。

## 在此场所背景下「证券型代币」是什么

日本监管框架中的证券型代币最常见的是：

- FIEA 下的电子记录可转让权利（電子記録移転権利），通常是使用 DLT／区块链基础设施进行「电子记录」的第二种受益权板块；
- 或通过 FSA 通知／内阁府令纳入 FIEA「代币化证券」处理的其他工具。

实践中，到达 START 二级市场的 ST 发行包括：

| 资产类型 | 示例结构 | 发行平台 |
|---|---|---|
| 代币化房地产受益权 | 持有房地产的信托中的信托受益权，为 DLT 记录而代币化 | [[payment-firms/progmat|Progmat]]、BOOSTRY、ibet for FIN |
| 代币化债券 | 作为电子记录权利发行的数字债券 | BOOSTRY（野村集团）、[[payment-firms/progmat|Progmat]] |
| 代币化股权／私募股权受益权 | 在 FIEA 范围允许的情况下的代币化基金／SPC 股权权益 | 平台各异 |

代币平台处理发行、转移和记录；ODX 提供二级市场场所功能；证券公司是面向客户的中介；信托银行或托管人持有底层资产权利。这是一个五方架构，而非现金股票的三方（发行方／交易所／券商）架构。

## ATR — 注册批准

ATR（Approval to Register，注册批准）是 ODX 在某发行被启用于 START 二级交易之前所运行的门控步骤。概念性序列：

1. **发行方请求注册**，通过保荐证券公司（交易参与者）。
2. **ODX 评估**发行方披露、代币平台整合、托管／受托安排、转移机制，以及对 JSDA 非上市 PTS 规则和 ODX 自身市场规则的合规性。
3. **ODX 为**符合资格标准的发行**签发 ATR**。
4. **发行在 START 规则下被启用交易**。
5. **持续监控**验证披露、市场诚信及运营连续性。

ATR 不等同于 TSE 上市审查。TSE 上市是具有完整持续披露义务和广泛零售可及性的公开市场准入。ATR 是面向 ST 发行的 PTS 准入，这些发行通常限于特定投资者类别，披露强度受限。

## JSCC 与 JASDEC 整合

ODX 的结算问题有两个答案，因为存在两个市场范围：

**现金股票 PTS 范围。** 当 ODX 作为面向上市股票的常规现金股票 PTS 运营时（功能比 Japannext 更窄），交易在 PTS 清算安排下通过 [[securities/japan-securities-clearing-corp|JSCC]] 清算，并经由 [[securities/japan-securities-depository-center|JASDEC]] 簿记按标准现金股票周期结算。

**证券型代币（START）范围。** 代币化证券的清算和结算方式不同，因为底层资产权利就代币腿而言记录在代币平台（Progmat／BOOSTRY／ibet）上而非 JASDEC。现金腿结算使用标准日元结算轨道（信托银行或银行电汇）；代币腿转移使用平台的转移机制。现金腿与代币腿之间真正的原子化 DvP 一直是多项日本银行／市场基础设施实验（如 DCJPY、代币化存款原型）的主题，并且仍处于开发中，作为一项市场基础设施主题，而非在 ST PTS 规模上完全部署的标准。

对于分析师而言，正确的框架是：
- 上市现金股票 = TSE／JSCC／JASDEC，成熟。
- 上市现金股票 PTS（Japannext／Cboe Japan／ODX 股权 PTS）= 相同的 JSCC／JASDEC 结算，成熟。
- ST PTS（START）= 代币平台转移 + 并行现金腿支付；DvP 设计各异；代币化现金腿整合仍在成熟中。

## 交易流程详解

代币化房地产受益权在 START 上交易的简化交易流程详解：

```text
投资者（特定投资者范围）
  -> 证券公司（ODX 交易参与者，FIEA 第一种 + 代币化证券分销范围）
    -> 向 ODX START 撮合引擎录入订单
      -> 与对手方订单撮合
        -> 向双方参与者发送交易确认
          -> 经由代币平台（Progmat／BOOSTRY／ibet）进行代币转移腿
          -> 经由信托银行／银行结算进行现金腿
            -> 在受托人／平台处更新托管／记录
              -> 在证券公司处更新投资者对账单
```

与现金股票流程（[[securities/japan-market-infrastructure-map|see infrastructure map]]）的对比在于，代币腿用代币平台转移取代了 JASDEC 簿记转移，而现金腿在可用时可使用专门的代币化存款／稳定币实验，而不仅是常规的全银／BOJ-NET 轨道。

## 投资者资格与范围

START 在 JSDA 非上市 PTS 框架下运营，该框架将许多 ST 发行的投资者范围约束为特定投资者（特定投資家）类别或其他窄于零售的受众。实践读数：

- 许多 ST 发行不像上市股票那样在零售在线券商处向普通零售投资者开放。
- 投资者资格检查在证券公司交易参与者层级运行。
- 披露强度低于 TSE 上市股票；投资者保护依赖于特定投资者框架、发行方层级披露及交易参与者适当性检查。
- 非日本投资者经由 ODX 交易参与者向日本进行的跨境分销，受 FIEA 和参与者自身客户接纳政策双重约束。

对于 [[securities/japan-asset-manager-landscape-matrix|asset managers]] 和机构配置者而言，这意味着 ST 敞口通常需要通过参与者直接接入 ST PTS，或包装在本身持有 ST 工具的 公募投信／私募投信 结构内。

## 与 Japannext PTS 的比较

| 维度 | Japannext PTS | ODX 股权 PTS | ODX START |
|---|---|---|---|
| 主要产品 | 现金股票明价 PTS（J-Market、X-Market）| 现金股票 PTS（范围更窄）| 证券型代币二级场所 |
| 投资者范围 | 经由券商的零售与机构 | 经由券商的零售与机构 | 特定投资者为主；由参与者中介 |
| 时段结构 | 日间 + 夜间时段 | 标准窗口 | 标准窗口 |
| 结算 | JSCC／JASDEC 标准 | JSCC／JASDEC 标准 | 代币平台 + 现金腿；混合 DvP 设计 |
| SOR 相关性 | 非常高；主流券商 SOR 包含它 | 在现金股票 SOR 中低于 Japannext | 不属于标准现金股票 SOR；独立的 STO 产品分销 |
| 创始脉络 | SBI／多方 | SBI／野村／SuMi TRUST | SBI／野村／SuMi TRUST |

关于 Japannext 的具体 SOR 背景，见 [[securities/japannext-sor-routing-deep-dive|Japannext PTS SOR routing deep dive]]。

## 监管与自主规制框架

| 层级 | 角色 |
|---|---|
| FSA | 授权具有 PTS 范围的第一种 FIBO；监管非上市 PTS 框架；发布了 2022-06-22 市场制度工作组中期报告，处理经由 PTS 的 ST 流通。 ^[FSA financial instruments operator list; FSA 2022-06-22 Market System Working Group interim report; ODX START launch page] |
| JSDA | 自主规制机构；在 FSA 2022 中期报告之后，为包括代币化证券在内的非上市证券 PTS 交易创设规则；定义 `非上市认可 PTS 发行` 范围。 |
| Japan STO 协会 | STO 市场发展的行业讨论论坛；并非主要监管者，但为 JSDA／FSA 规则设计背景提供输入。 |
| JSCC／JASDEC | ODX 现金股票范围的结算基础设施。 |
| 代币平台 | 在其自身平台规则下运营转移／生命周期机制；在相关情况下受信托银行／托管监管。 |

## 历史概述

- **2020-2022** — 关于 ST 市场发展、非上市 PTS 的 JSDA 自主规制规则设计以及 Progmat／BOOSTRY 平台推出的工作组讨论。
- **2022-06-22** — FSA 市场制度工作组关于经由 PTS 更顺畅流通包括证券型代币在内的非上市证券的中期报告。
- **2023** — ODX 基础性推出及 START 前运营准备。
- **2023-12-25** — START 二级市场推出；被描述为日本首个 ST PTS。
- **2024-2026** — Progmat／BOOSTRY／ibet 平台上的发行方增长；累计 ST 发行随 START 二级交易而增长。
- **持续中** — 将代币化现金腿支付基础设施（Progmat Coin／DCJPY／私人银行代币化存款）整合到 ST PTS 结算中是一个观察清单项；见 [[fintech/jp-stablecoin-progmat|Progmat stablecoin route]]。

## Related

- [[securities/INDEX]]
- [[securities/osaka-digital-exchange]]
- [[securities/japan-security-token-secondary-market-route]]
- [[securities/japan-pts-liquidity-data-guide]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japannext-securities]]
- [[securities/japannext-sor-routing-deep-dive]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/tokyo-stock-exchange]]
- [[securities/osaka-exchange]]
- [[securities/financial-instruments-business-operators-japan-index]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[megabanks/sbi-hd]]
- [[securities-firms/nomura-hd]]
- [[payment-firms/progmat]]
- [[financial-regulators/jsda]]
- [[financial-regulators/japan-exchange-group]]
- [[fintech/jp-stablecoin-progmat]]
- [[INDEX|FinWiki index]]

## Sources

- ODX（Osaka Digital Exchange）官方网站，About 页面，新闻（START 推出公告 2023-12-25），市场信息每日报告及历史数据页面。
- FSA，金融商品交易业者一览（kinyushohin.xlsx）；市场制度工作组 2022-06-22 中期报告。
- JSDA，非上市证券 PTS 自主规制规则及 `非上市认可 PTS 发行` 术语定义。
- JPX，股票清算／结算概要页面。
- Progmat 公开概念及平台页面。
