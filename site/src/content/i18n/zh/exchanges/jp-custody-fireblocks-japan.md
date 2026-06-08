---
source: exchanges/jp-custody-fireblocks-japan
source_hash: 96aa07b66a264ace
lang: zh
status: machine
fidelity: ok
title: "Fireblocks — 全球 MPC 托管基础设施提供商(日本展开)"
translated_at: 2026-05-31T03:19:56.488Z
---

# Fireblocks — 全球 MPC 托管基础设施提供商(日本展开)


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it with [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for adjacent context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system boundary.

> 无 FSA 加密资产交换业登记 · 非 JVCEA 加盟 · B2B 基础设施供应商 · 美国总部(纽约)· 设有东京据点(员工 5 名前后 · LinkedIn 确认)

## 1. 法人·股东

- **商号(全球)**:Fireblocks Inc.
- **英文名**:Fireblocks
- **日本据点**:正式法人设立尚未确认(2026-05 时点)。LinkedIn 上确认有 5 名前后驻东京的员工
- **全球总部**:New York City, USA(登记上)。研发·创业在以色列特拉维夫
- **设立**:2018 年(发源于以色列,其后迁至美国 HQ)
- **形态**:非上市私人公司
- **主要股东**:Sequoia Capital(Series D 共同领投)、Paradigm(Series B 领投)、BNY Mellon(出资参与 2021-03)、Google Ventures 及其他多家 VC
- **最近估值**:$8 billion(2022-01 Series E 时点)

## 2. 牌照·登记状况

- **日本 FSA 加密资产交换业**:无登记(作为基础设施 SaaS 供应商向日本 VASP 提供 B2B)
- **JVCEA 会员**:非加盟
- **美国境内牌照**:持有 Fireblocks Trust Company(美国信托公司)(2024 年以后)
- **EU**:作为符合 MiCA 的基础设施,正扩大向欧洲银行·机构的提供
- **日本监管上的定位**:面向日本国内 VASP·银行·信托银行提供系统·基础设施的外资软件供应商。由于并非自行保管·经手加密资产的业者,故构造上无需日本加密资产交换业登记

## 3. 对应资产

- BTC·ETH·EVM 系 altcoin 全般、Solana、Sui 及其他主要 L1/L2
- 稳定币(USDC·USDT·各行发行的电子结算手段)
- 代币化 RWA(不动产·大宗商品·有价证券)
- NFT 管理(B2B 基础设施层级)
- 公布对应链数:50+ 区块链(定期扩展中)

## 4. 业务范围·主要产品

- **MPC Custody(Multi-Party Computation)**:将私钥分散保管。硬件隔离 + MPC 的组合。面向全球金融机构提供产业标准级别的安全性
- **Policy Engine**:可设定转账规则·审批流程·合规闸门的治理层
- **Treasury Management**:在不暴露私钥的情况下,执行与交易所·交易对手方收发数字资产的 Fireblocks Network
- **Wallet-as-a-Service (WaaS)**:面向企业提供非托管·托管型 MPC 钱包的 API
- **Embedded Wallets**:面向消费者的白标钱包(通过收购 Dynamic 公司强化)
- **Tokenization Engine**:RWA 的铸造·转移·智能合约管理
- **Fireblocks Network for Payments**:专注稳定币结算的网络(2025-09 开始提供)
- **DeFi Access**:与 policy engine 联动的 DeFi 协议接入
- **COR Compliance**:符合 MiCA·AML/CFT 的合规套装

## 5. 市场地位·竞品比较

### 全球 institutional custody 市场

| 供应商 | 特征 | 地位 |
|---|---|---|
| **Fireblocks** | MPC + policy engine、SaaS、2,400+ 机构 | 全球份额最大级别的机构向 MPC 基础设施 |
| BitGo | 信托 + MPC 并用、符合美国监管 | 机构向老牌。亦做直接 custody |
| Anchorage Digital | 持有联邦银行 charter(美国唯一) | 合规型,以美国为中心 |
| Ledger Enterprise | HSM + Vault、发源于法国 | 面向大型银行,重 HW |
| Komainu | 野村 + Ledger + CoinShares 系 | 面向机构,亚洲展开(详情参见 [[exchanges/jp-custody-komainu]]) |

### 日本国内竞品·分工

**vs. [[exchanges/jp-custody-ginco|Ginco]](国内独立系)**:
- Ginco 标榜"日本国内份额 No.1 面向加密资产业务的钱包",获取国内 VASP·金融机构的 MPC 钱包需求。日语支持·FSA 监管对应 know-how·国产 HSM 联动是其强项(业界配置参见 [[exchanges/jp-institutional-custody-three-pillars|JP institutional custody 三本柱]])
- Fireblocks 在同一领域竞争,但以全球网络(Fireblocks Network)·丰富的 DeFi 集成·policy engine 的完成度差异化。积累大型超级银行·外资机构的选用业绩
- 实际上 STIR(国内 Web3 咨询)承担了使用 Fireblocks 的面向 CoinTrade 的质押系统构建支援(2024-02),经由国内供应商的采用亦在推进

**vs. Komainu(Nomura 系)**:
- Komainu 作为面向机构的合规型托管商提供直接 custody(Jersey TCSP 牌照·Dubai VARA 牌照)。自身成为托管商
- Fireblocks 作为"基础设施 SaaS",提供金融机构自行承担 custody 业务所需的工具。商业模式不同,与其说竞争不如说分工
- 不过在信托银行·VASP 的自家 custody 强化案件中,有时会并立检讨 Fireblocks vs Komainu

## 6. 沿革·日本展开

| 年月 | 事件 |
|---|---|
| 2017 | 在调查 Lazarus Group 对韩国交易所 $200M 窃取事件期间,Michael Shaulov 等 Check Point 出身者产生危机感 |
| 2018 | Fireblocks Inc. 设立(以色列)|
| 2019-06 | 从隐身状态以 $16M 融资正式发表 |
| 2020-11 | Series B $30M(Paradigm 领投) |
| 2021-03 | Series C $133M·BNY Mellon 出资参与 |
| 2021-07 | Series D $310M(Sequoia 共同领投),估值 $2.2B |
| 2022-01 | Series E $550M,估值 $8B |
| 2022 | 以 $100M 收购 First Digital(以色列 stablecoin 结算)。与 FIS 面向机构共同展开 |
| 2023 | 收购 BlockFold(澳大利亚,智能合约) |
| 2024-02 | 日本:STIR 支援使用 Fireblocks MPC 的 CoinTrade 质押系统构建 |
| 2025-04 | 日本:三井住友金融集团·三井住友银行·TIS·Ava Labs·Fireblocks 的 5 社共同检讨稳定币商用化(发表 2025-04-07) |
| 2025-09 | Fireblocks Network for Payments 启动(稳定币结算专用网络) |
| 2025-10 | 以 $90M 收购 Dynamic(美国,钱包技术) |
| 2026-01 | 以 $130M 收购 TRES Finance(加密资产会计) |
| 2026-05 | 日本:与 AndGo Wallet(国产 HW 钱包)的集成实证完成(与 Intertrade 等共同) |

**日本早期参与**:
- 与 Minna no Bank·TIS·Solana Japan 共同检讨 stablecoin + Web3 钱包事业化(时期未定,2024-2025 前后)
- Mitsui & Co. Digital Commodities(MDC):三井物产设立的 RWA 代币公司。采用 Fireblocks 作为 multi-chain 展开基盘。发行 Zipangcoin(黄金担保)·铂金·白银担保代币。MDC 披露了 JPY 39 億円的发行上限(2022-02 以后运营)

## 7. 最近动向(2025-2026)

- **截至 2026-05 时点已有全球 2,400 机构**利用 Fireblocks($10T+ 交易、550M+ 钱包)
- 在 **Asian Banker Business Achievement Awards 2026** 荣获 "Best Blockchain Technology Platform (Digital Assets)"(吉隆坡,2026)
- 欧洲银行 12 行家组成的联盟"Qivalis"采用其作为 EUR 稳定币发行基盘(2026)
- Western Union 采用其作为 $USDPT 稳定币的 settlement 基础设施(菲律宾·玻利维亚先行展开)
- **日本**:2026-05 有 CoinPost CEO 访谈"Fireblocks CEO 讲述日本市场战略"的报道(详细内容需确认公开文章)
- 有 IPO 观测:Bloomberg 2025-11报道"Fireblocks 正在检讨面向员工持分回购的融资"

## 8. 经营层·日本据点

**全球创始人 3 名**:
- **Michael Shaulov** — CEO·共同创始人(以色列出身,Check Point 元员工)
- **Pavel Berengoltz** — CTO·共同创始人
- **Idan Ofrat** — CPO·共同创始人

**日本据点**:
- 在 LinkedIn 确认有驻东京员工 5 名前后(2026-05 时点)
- 日本据点代表·Country Manager 的姓名未能确认公开(无公开)
- 据点的法人登记形态(分店 / 合同会社 / 联络事务所等)未确认

## Related

- [[exchanges/jp-custody-komainu]] — Nomura 系面向机构 custody 竞品
- [[exchanges/jp-exchange-sbi-vc-trade]] — SBI VC Trade(Fireblocks 客户候选)
- [[agent-economy/embedded-wallet-network-effects-moat]] — embedded wallet 竞争论
- [[fintech/maina-wallet-kyc-permissionless-ux-bridge]] — 钱包 × KYC 设计
- [[fintech/japan-stablecoin-regulatory-landscape]] — 日本 stablecoin 监管
- [[fintech/jp-trust-type-sc-architecture]] — 信托型 SC 架构
- [[exchanges/jp-institutional-custody-three-pillars]] — JP institutional custody 三大支柱
- [[exchanges/global-institutional-custody-five-pillars]] — 全球 institutional custody 5 大支柱
- [[exchanges/jp-vasp-cold-storage-segregation-rules]] — JP VASP cold storage 分别管理规则

## Sources

- [Fireblocks About](https://www.fireblocks.com/about/)(取得 2026-05-19）
- [Fireblocks Mitsui Customer Story](https://www.fireblocks.com/customers/mitsui/)(取得 2026-05-19）
- [Fireblocks — Wikipedia](https://en.wikipedia.org/wiki/Fireblocks)(取得 2026-05-19）
- [Fireblocks LinkedIn](https://www.linkedin.com/company/fireblocks/)(取得 2026-05-19）
- [CoinPost Fireblocks 检索结果](https://coinpost.jp/?s=Fireblocks)(取得 2026-05-19）
- [あたらしい経済 Fireblocks 三井住友](https://www.neweconomy.jp/?s=Fireblocks+%E4%B8%89%E4%BA%95%E4%BD%8F%E5%8F%8B)(取得 2026-05-19）
- [CoinPost: 三井住友银行·Fireblocks·Ava Labs·TIS 稳定币检讨](https://coinpost.jp/?s=Fireblocks+SMBC)(取得 2026-05-19）
- [Ginco Inc. 官方](https://www.ginco.co.jp/en)(取得 2026-05-19、用于竞品比较）
