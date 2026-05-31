---
source: exchanges/jp-exchange-crypto-garage
source_hash: c25addc1be5fc798
lang: zh
status: machine
fidelity: ok
title: "株式会社 Crypto Garage — 日本加密资产交换业者 overview"
translated_at: 2026-05-31T03:19:56.400Z
---

# 株式会社 Crypto Garage — 日本加密资产交换业者 overview


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it with [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for adjacent context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system boundary.

> FSA 登记编号 关东财务局 第00029号 · JVCEA 会员 #1035 · 登记日 2021-06-29

## 1. 法人・股东

- **商号**：株式会社 Crypto Garage（英文：Crypto Garage, Inc.）
- **设立**：2018年9月
- **总部所在地**：东京都涩谷区惠比寿西 2-19-9 弗朗西斯大厦（Frances Building）
- **法人编号**：6011001124112
- **出资结构**（公布部分）：
  - 株式会社 Digital Garage（东证主板 4819）为最大出资方。创立时的合资伙伴为东京短资株式会社。于 2021年10月 实施以野村控股株式会社为承购方的第三方配股增资，野村 HD 作为新出资方参与。
  - Blockstream 亦列于公司网站的 "Backed By" 板块，公示了资本・技术合作伙伴关系。
  - 各公司的具体出资比例未公布。

Digital Garage 将该公司定位为金融科技・区块链领域的战略子公司，派遣董事 2 名（林 郁・踊 契三）。东京短资亦派遣董事 2 名（寺田 寿明・加藤 岬造）。

## 2. 牌照・登记状况

- **加密资产交换业**：关东财务局长 第00029号（登记日：2021年6月29日，基于资金结算法）
- **金融商品交易业**：无登记（JVCEA 第一种会员 #1035 仅为加密资产交换业，无衍生品登记）
- **电子结算手段等交易业 / 资金移动业**：无登记（公布部分）
- **JVCEA**：第一种会员 #1035（仅加密资产交换业）
- **Global Digital Finance**：加盟（业界自律监管团体）

## 3. 经办通货

经办币种数及具体一览，在官方网站・公布文件上未逐一列举，未公布。

由服务设计推测的币种特性：
- **Bitcoin (BTC)** 为核心资产（R&D 主题为 Bitcoin / Lightning / Liquid Network，BTC 计价 OTC・结算为核心）
- SETTLENET PRO 提供「日元计价代币（JPY 建）× 链上 DvP 结算」，使用日元计价代币（内部结算通货）
- 该公司的 R&D 包含 Discreet Log Contracts（DLC）及 Liquid Network 侧链资产
- 因其并非面向零售的多币种交易所，而是机构向特化型，故推测经办币种数为少数精锐

## 4. 业务范围

该公司**并非面向零售的现货交易所**，而是专注于机构・法人向数字资产基础设施的业者（自称："regulated institutional digital assets infrastructure company"）。主要服务线如下：

| 服务 | 内容 |
|----------|------|
| **SETTLENET PRO** | 加密资产业者间（交易商间）市场的中介・OTC 结算平台。提供非托管型 DvP 结算、日元计价代币（该公司发行）、时点净额结算功能 |
| **SETTLENET CUSTODY** | 符合国内监管的机构投资者・法人向数字资产保管服务（2023年4月开始）。带保险的分别管理、staking（2024年3月追加）、OES（Off Exchange Settlement）功能 |
| **SETTLENET OTC** | 面向法人・事业法人的加密资产 OTC 销售所（2023年4月开始）。活用全球 LP 网络，邮件/电话对应的高端服务 |
| **R&D** | 关于 Bitcoin・Lightning・Liquid Network 的研发，对 Discreet Log Contracts（DLC）协议的 OSS 贡献，P2P 衍生品交易研究 |
| **Blockchain Dev** | 面向法人客户的区块链开发受托 |
| **mahola** | 区块链后端服务（API），2024年10月正式上线 |

**法定通货入金渠道**：仅面向法人（银行汇款）。无便利店入金・快捷入金等面向零售的渠道。

## 5. 市占・成交量

- 成交量・账户数均**未公布**
- **客户层**：专注于机构投资者・事业法人・加密资产交易所・流动性提供商・富裕层・家族办公室・资产管理公司。不提供面向一般零售投资者的服务
- 市场定位：不参与零售成交量竞争的**利基（机构向基础设施）**玩家。推测以数十家左右的法人客户为对象，但定量数据未公布

## 6. 沿革・重大事件

| 年月 | 事项 |
|------|------|
| 2018-09 | 作为株式会社 Digital Garage × 东京短资株式会社的合资公司设立 |
| 2019-01 | 在内阁府监管沙盒制度下作为区块链・金融领域取得**第1号**认定 |
| 2019-01 | 发布 SETTLENET（面向区块链金融业者的应用开发支援产品）开发 |
| 2019-04 | 开发并发布实现 Bitcoin 结算虚拟货币衍生品交易的 P2P 协议 |
| 2020-06 | 面向 OTC 市场的结算平台「SETTLENET」商用服务开始 |
| 2021-02 | 基于加密资产交换业登记的 SETTLENET v2（追加价格流式传输・时点净额结算）服务开始 |
| 2021-06 | 加密资产交换业者登记完成（关东财务局 第00029号） |
| 2021-10 | 以野村控股为承购方的**第三方配股增资**及业务合作 |
| 2022-08 | 在 IEEE ICBC 2022 上 DLC 相关论文获采纳（学术认可） |
| 2023-04 | SETTLENET CUSTODY・OTC 服务开始（国内首个・面向机构投资者的托管）|
| 2023-11 | 与 Komainu（野村集团出资）就日本机构投资者向加密资产服务开发协作达成一致 |
| 2024-03 | SETTLENET CUSTODY 追加 staking 服务 |
| 2024-10 | 区块链后端服务「mahola」正式上线 |
| 2024-12 | 日产汽车「NISSAN PASSPORT」BETA 版的技术支援 |
| 2025-08 | 与 Pacific Meta 共同开发・提供企业加密资产持有支援咨询套餐 |
| 2025-12 | 在 IEEE Blockchain 2025 上 Custodial Wallet 相关论文获采纳 |

行政处分・遭黑客攻击・系统故障等重大事件：未公布（2024年6月「关于本公司对他社加密资产流出的应对」是对他社事案的提及，并非该公司自身的事故）。

## 7. 战略动向

- **机构向 × Bitcoin 原生**路线一贯维持。SETTLENET PRO 确立了加密资产交易商间市场这一国内唯一类别的利基定位
- **与 Blockstream / Liquid Network 的协作**：官方网站 "Backed By" 板块列有 Blockstream。R&D 主题特化于 Bitcoin・Lightning・Liquid Network，暗示其作为 Liquid Network 侧链技术在日本市场主要普及伙伴的角色（与 Blockstream 的具体出资额・合同内容未公布）
- **野村集团 × Komainu 联动**（2023年11月）：在面向机构投资者的托管服务领域协作。通过与 [[exchanges/jp-custody-komainu|Komainu]]（[[JapanFG/nomura-hd|野村 HD]] × Ledger × CoinShares 的合资托管行）的联动，推进全球级别的机构向基础设施建设（该公司的定位在 [[exchanges/jp-institutional-custody-three-pillars|JP institutional custody 三本柱]] 与 [[exchanges/jp-crypto-market-maker-otc-layer|JP crypto market maker / OTC レイヤー]] 中详述）
- **web3 开发受托的扩张**：2024年以降，面向日产汽车・日本英语检定协会・SKY Perfect JSAT・岩手县紫波町等非 crypto 领域的区块链开发支援案件增加。通过 mahola API 多元化面向开发者的业务线
- **最近 12 个月（2025年5月基准）**：与 Pacific Meta 共同提供加密资产持有咨询（2025年8月）、IEEE Blockchain 2025 论文采纳（2025年12月）。无关于 IPO・海外扩张的公开发布

## 8. 关联人物

- **代表董事 CEO**：大熊 将人（Masahito Okuma）
- **董事**（公布部分）：
  - 林 郁（株式会社 Digital Garage）
  - 踊 契三（株式会社 Digital Garage）
  - 寺田 寿明（东京短资株式会社）
  - 加藤 岬造（东京短资株式会社）
  - 佐佐木 俊典（野村控股株式会社）
- **监事**：六弥太 恭行（株式会社 Digital Garage）
- **创业背景**：由 Digital Garage（IT・FinTech 投资・基础设施事业）与东京短资（银行间短资市场）合资诞生。银行间市场 know-how × 区块链技术的融合为商业模式之核。

## Related

- [[fintech/japan-financial-regulation]] — 日本金融监管整体
- [[fintech/japan-bittrade-listing-process]] — 上币流程一般论
- [[fintech/japan-stablecoin-regulatory-landscape]] — 相关 stablecoin 制度
- [[fintech/jp-trust-type-sc-architecture]] — 相关 SC 制度
- [[exchanges/jp-exchange-bitflyer]] — 同业他社（大手）
- [[exchanges/jp-exchange-sbi-vc-trade]] — 同业他社（机构向）
- [[exchanges/jp-custody-komainu]] — 合作方 Komainu（institutional custody）
- [[exchanges/jp-institutional-custody-three-pillars]] — JP institutional custody 三大支柱
- [[exchanges/jp-crypto-market-maker-otc-layer]] — JP crypto market maker / OTC 层

## Sources

- [Crypto Garage 公式コーポレートサイト（トップ）](https://cryptogarage.co.jp/)（取得 2026-05-18）
- [Crypto Garage 会社概要（日本語）](https://cryptogarage.co.jp/about/)（取得 2026-05-18）
- [Crypto Garage Company Profile（英語）](https://cryptogarage.co.jp/en/about/)（取得 2026-05-18）
- [Crypto Garage SETTLENET PRO サービス詳細](https://cryptogarage.co.jp/services/pro/)（取得 2026-05-18）
- [Crypto Garage SETTLENET CUSTODY サービス詳細](https://cryptogarage.co.jp/services/custody/)（取得 2026-05-18）
- [Crypto Garage SETTLENET OTC サービス詳細](https://cryptogarage.co.jp/services/otc/)（取得 2026-05-18）
- [Crypto Garage R&D サービス詳細](https://cryptogarage.co.jp/services/rd/)（取得 2026-05-18）
- [Crypto Garage ニュース一覧（全3ページ）](https://cryptogarage.co.jp/news/)（取得 2026-05-18）
- [JVCEA 会員一覧](https://jvcea.or.jp/member/)（取得 2026-05-18）
- [FSA 暗号資産交換業者登録一覧 Excel](https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx)（snapshot 令和8年4月1日 = 2026-04-01）
