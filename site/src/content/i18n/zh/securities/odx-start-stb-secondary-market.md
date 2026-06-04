---
source: securities/odx-start-stb-secondary-market
source_hash: 3d8d4b22d2c1f436
lang: zh
status: machine
fidelity: ok
title: "ODX START 证券代币二级市场"
translated_at: 2026-06-01T04:15:40.103Z
---
# ODX START 证券代币二级市场

## Wiki 路由

本页属于 [[securities/INDEX|securities index]]，作为 [[securities/osaka-digital-exchange|Osaka Digital Exchange]] 的交易场所机制深化，并作为 [[securities/japan-security-token-secondary-market-route|Japan security token secondary market route]] 的二级市场对应页。可结合 [[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]] 理解交易场所 / 参与者分离逻辑，结合 [[securities/japan-best-execution-sor-pts|best execution / SOR / PTS]] 理解路由政策背景，并结合 [[securities/japan-market-infrastructure-map|Japan market infrastructure map]] 理解 ODX 位于 TSE / Japannext PTS 与 JSCC / JASDEC 之间的位置。跨领域桥接为 [[fintech/jp-stablecoin-progmat|Progmat stablecoin route]]，因为代币化现金腿支付基础设施是日本 ST 二级市场实现完整原子 DvP 所缺失的轨道。

## TL;DR

ODX（大阪デジタルエクスチェンジ，Osaka Digital Exchange）是日本 FIEA 注册的 PTS 运营商，由 SBI HD、Sumitomo Mitsui Trust Holdings（SuMi TRUST / Sumishin）和 Nomura HD 牵头成立为合资公司，并有其他证券业参与方加入。其 START 市场于 2023-12-25 上线，公开表述为日本首个用于证券代币（ST / セキュリティトークン）二级交易的 PTS，覆盖在 FIEA 电子记录转让权框架下发行的代币化股权、代币化债券和代币化房地产受益权。START 交易只能通过获准证券公司交易参与者中介进行；ODX 本身不直接面对零售投资者。结算在上市证券相邻范围内与 [[securities/japan-securities-clearing-corp|JSCC]] 和 [[securities/japan-securities-depository-center|JASDEC]] 集成，并在链上代币转让腿上与代币平台基础设施（例如 [[payment-firms/progmat|Progmat]]、BOOSTRY / ibet）集成。START 上的新发行挂牌需先经过 ODX 运行的 Approval to Register (ATR) 门控流程，之后才可启用二级交易。

## 交易场所身份

| 字段 | 公开解读 |
|---|---|
| 法定实体 | 株式会社大阪デジタルエクスチェンジ (Osaka Digital Exchange Co., Ltd.) |
| FIEA 注册 | 具有 PTS 运营许可的 Type I Financial Instruments Business Operator；通过 [[securities/financial-instruments-business-operators-japan-index|FIBO registry]] 验证。 |
| 所有权脉络 | 由 [[megabanks/sbi-hd|SBI HD]] 作为主要 anchor、[[securities-firms/nomura-hd|Nomura HD]]、Sumitomo Mitsui Trust Holdings / SBI Sumishin 合作脉络共同创立。当前股权结构需通过 ODX 公司页面确认。 |
| 自律监管 | [[financial-regulators/jsda|JSDA]] 成员；FSA 2022  Market System Working Group 输出后制定的非上市 PTS 规则覆盖证券代币板块。 |
| 运营市场 | 股票 PTS（普通现金股票范围，比 Japannext 更窄）；START 证券代币 PTS（2023-12-25 上线）。 |
| 投资者接入 | 通过获准证券公司交易参与者接入；ODX 不直接服务非专业投资者。 |
| 清算 / 结算 | 现金股票 PTS 交易通过 [[securities/japan-securities-clearing-corp|JSCC]] 清算，并通过 [[securities/japan-securities-depository-center|JASDEC]] 结算；ST 转让通过代币平台的转让机制路由，托管记录由信托或平台方处理。 |

在发布具有时效性的材料前，务必阅读该交易场所的 About / News 页面，以确认当前参与者名单、市场范围和运营通知。

## 所有权与战略一致性

ODX 的创始资本结构是有意设计的跨行业联盟，而不是单一机构产品：

| Anchor | 战略利益 |
|---|---|
| [[megabanks/sbi-hd|SBI HD]]（及 SBI group entities） | PTS / 数字资产 / 在线券商业务延伸；SBI Securities 零售分销；Progmat / 数字资产平台 thesis。 |
| [[securities-firms/nomura-hd|Nomura HD]] | 证券业领导地位；BOOSTRY（Nomura 主导的 ST 发行平台）发行侧协同；机构 STO 分销。 |
| Sumitomo Mitsui Trust Group / SBI Sumishin Net Bank 脉络 | 代币化信托受益权产品的信托银行托管 / 记录维护角色；现金腿基础设施。 |
| 其他证券公司（逐步作为参与者和 / 或股东加入） | 扩大 ST 发行人市场分销范围；参与日本唯一 ST 二级交易场所。 |

联盟设计是特性而不是缺陷：单一公司拥有的 ST PTS 将缺乏启动市场所需的发行侧和分销侧广度。代价是 JV 交易场所常见的治理摩擦。

## 在该交易场所语境下什么是“证券代币”

在日本监管框架中，证券代币最常见的是：

- FIEA 下的电子记录转让权（電子記録移転権利），通常是使用 DLT / 区块链基础设施进行“电子记录”的 Type II 受益权部分；
- 或通过 FSA 通知 / 内阁府令纳入 FIEA“代币化证券”处理的其他工具。

实践中，进入 START 二级市场的 ST 发行包括：

| 资产类型 | 示例结构 | 发行平台 |
|---|---|---|
| 代币化房地产受益权 | 持有房地产的信托中的信托受益权，代币化用于 DLT 记录维护 | [[payment-firms/progmat|Progmat]]、BOOSTRY、ibet for FIN |
| 代币化债券 | 作为电子记录权发行的数字债券 | BOOSTRY（Nomura group）、[[payment-firms/progmat|Progmat]] |
| 代币化股权 / 私募股权受益权 | 在 FIEA 范围允许的情况下，代币化 fund / SPC equity interests | 平台不一 |

代币平台处理发行、转让和记录维护；ODX 提供二级市场交易场所功能；证券公司是面向客户的中介；信托银行或托管人持有底层资产权利。这是五方架构，而不是现金股票的三方（issuer / exchange / broker）架构。

## ATR — Approval to Register

ATR (Approval to Register) 是 ODX 在某项发行可在 START 上启用二级交易前运行的门控步骤。概念流程如下：

1. **Issuer requests registration**：通过 sponsoring securities firm（交易参与者）提交注册请求。
2. **ODX evaluates**：ODX 评估发行人披露、代币平台集成、托管 / 受托安排、转让机制，以及是否符合 JSDA 非上市 PTS 规则和 ODX 自身市场规则。
3. **ODX issues an ATR**：对符合资格标准的发行给予 ATR。
4. **Issue is enabled for trading**：根据 START 规则启用交易。
5. **Ongoing monitoring**：持续监测披露、市场完整性和运营连续性。

ATR 不等同于 TSE 上市审查。TSE 上市是具备完整持续披露义务和广泛零售可及性的公开市场准入。ATR 是面向 ST 发行的 PTS 准入，这些发行通常限制在特定投资者类别内，披露强度也更受约束。

## JSCC 与 JASDEC 集成

ODX 的结算问题有两个答案，因为存在两个市场范围：

**现金股票 PTS 范围。** 当 ODX 作为传统现金股票 PTS 运营上市股票（功能比 Japannext 更窄）时，交易按 PTS 清算安排通过 [[securities/japan-securities-clearing-corp|JSCC]] 清算，并在标准现金股票周期内通过 [[securities/japan-securities-depository-center|JASDEC]] 账簿转让结算。

**证券代币（START）范围。** 代币化证券以不同方式清算和结算，因为底层资产权利记录在代币平台（Progmat / BOOSTRY / ibet）上，而不是针对代币腿记录在 JASDEC。现金腿结算使用标准日元结算轨道（信托银行或银行转账）；代币腿转让使用平台的转让机制。现金腿与代币腿之间真正原子的 DvP 一直是多项日本银行 / 市场基础设施实验（例如 DCJPY、代币化存款原型）的主题，目前仍是市场基础设施 thesis，而不是在 ST PTS 规模上完全部署的标准。

对分析师而言，正确框架是：
- 上市现金股票 = TSE / JSCC / JASDEC，成熟。
- 上市现金股票 PTS（Japannext / Cboe Japan / ODX equity PTS）= 相同 JSCC / JASDEC 结算，成熟。
- ST PTS（START）= 代币平台转让 + 并行现金腿支付；DvP 设计不同；代币化现金腿集成仍在成熟中。

## 交易流程 walkthrough

以在 START 上交易的代币化房地产受益权为例，简化交易流程如下：

```text
Investor (specified-investor scope)
  -> Securities firm (ODX trading participant, FIEA Type I + tokenized-security distribution scope)
    -> Order entry to ODX START matching engine
      -> Match against counterparty order
        -> Trade confirmation to both participants
          -> Token transfer leg via token platform (Progmat / BOOSTRY / ibet)
          -> Cash leg via trust-bank / bank settlement
            -> Custody / recordkeeping update at trustee / platform
              -> Investor statement update at securities firm
```

与现金股票流程（[[securities/japan-market-infrastructure-map|see infrastructure map]]）的对比在于，代币腿以代币平台转让取代 JASDEC 账簿转让，现金腿在可用时可能使用专门的代币化存款 / stablecoin 实验，而不只是传统 Zengin / BOJ-NET 轨道。

## 投资者资格与范围

START 在 JSDA 非上市 PTS 框架下运行，该框架将许多 ST 发行的投资者范围限制在特定投资家（specified investor）类别或其他比零售更窄的受众。实践解读如下：

- 许多 ST 发行不像上市股票那样可由普通零售投资者通过零售在线券商购买。
- 投资者资格检查在证券公司交易参与者层面执行。
- 披露强度低于 TSE 上市股票；投资者保护依赖特定投资者框架、发行人层面披露和交易参与者适合性检查。
- 非日本投资者通过 ODX 交易参与者进入日本的跨境分销，同时受 FIEA 和参与者自身客户准入政策约束。

对 [[securities/japan-asset-manager-landscape-matrix|asset managers]] 和机构配置者而言，这意味着 ST 敞口通常需要通过参与者直接接入 ST PTS，或封装在本身持有 ST 工具的公募投信 / 私募投信结构中。

## 与 Japannext PTS 的比较

| 维度 | Japannext PTS | ODX equity PTS | ODX START |
|---|---|---|---|
| 主要产品 | 现金股票 lit PTS（J-Market, X-Market） | 现金股票 PTS（范围更窄） | 证券代币二级交易场所 |
| 投资者范围 | 通过券商面向零售和机构 | 通过券商面向零售和机构 | 偏特定投资者；由参与者中介 |
| 交易时段结构 | 日间 + 夜盘 | 标准窗口 | 标准窗口 |
| 结算 | JSCC / JASDEC 标准 | JSCC / JASDEC 标准 | 代币平台 + 现金腿；混合 DvP 设计 |
| SOR 相关性 | 很高；主流券商 SOR 包含它 | 在现金股票 SOR 中低于 Japannext | 不属于标准现金股票 SOR；属于单独 STO 产品分销 |
| 创始脉络 | SBI / 多方 | SBI / Nomura / SuMi TRUST | SBI / Nomura / SuMi TRUST |

关于 Japannext 的 SOR 背景，见 [[securities/japannext-sor-routing-deep-dive|Japannext PTS SOR routing deep dive]]。

## 监管与自律监管框架

| 层级 | 角色 |
|---|---|
| FSA | 授权带 PTS 范围的 Type I FIBO；监管非上市 PTS 框架；发布 2022-06-22 Market System Working Group 中期报告，讨论通过 PTS 流通 ST。 |
| JSDA | 自律监管机构；在 FSA 2022  中期报告后，为包括代币化证券在内的非上市证券 PTS 交易制定规则；定义 `unlisted approved PTS issue` 范围。 |
| Japan STO Association | STO 市场发展行业讨论论坛；不是主要监管者，但为 JSDA / FSA 规则设计背景提供输入。 |
| JSCC / JASDEC | ODX 现金股票范围的结算基础设施。 |
| Token platforms | 按自身平台规则运营转让 / 生命周期机制；在相关场景下受信托银行 / 托管监管。 |

## 历史梗概

- **2020-2022** — 关于 ST 市场发展、JSDA 非上市 PTS 自律规则设计，以及 Progmat / BOOSTRY 平台上线的工作组讨论。
- **2022-06-22** — FSA Market System Working Group 关于包括证券代币在内的非上市证券通过 PTS 更顺畅流通的中期报告。
- **2023** — ODX 基础上线及 START 前运营准备。
- **2023-12-25** — START 二级市场上线；被描述为日本首个 ST PTS。
- **2024-2026** — Progmat / BOOSTRY / ibet 平台上的发行人成长；累计 ST 发行与 START 二级交易同步增长。
- **Ongoing** — 将代币化现金腿支付基础设施（Progmat Coin / DCJPY / 私人银行代币化存款）整合进 ST PTS 结算，是观察清单事项；见 [[fintech/jp-stablecoin-progmat|Progmat stablecoin route]]。

## 相关

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

## 来源

- ODX (Osaka Digital Exchange) official site, About page, news (START launch announcement 2023-12-25), market information daily report and historical data pages.
- FSA, financial instruments business operator list (kinyushohin.xlsx); Market System Working Group 2022-06-22 interim report.
- JSDA, unlisted-securities PTS self-regulatory rules and `unlisted approved PTS issue` term definition.
- JPX, equity clearing / settlement outline pages.
- Progmat public concept and platform pages.
