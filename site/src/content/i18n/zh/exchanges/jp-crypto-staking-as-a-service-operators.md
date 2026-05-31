---
source: exchanges/jp-crypto-staking-as-a-service-operators
source_hash: f43328f5505d7180
lang: zh
status: machine
fidelity: ok
title: "面向国内的质押即服务（StaaS）事业者层"
translated_at: 2026-05-31T03:19:56.446Z
---

# 面向国内的质押即服务（StaaS）事业者层

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/jp-institutional-custody-three-pillars|国内機関カストディ三本柱]] for peer / contrast context and [[exchanges/jvcea-self-regulatory-overview|JVCEA 自主規制]] for the broader system / regulatory boundary.

## 概要

将 PoS 系链（Ethereum / Solana / Cardano / Polkadot / Cosmos / Tezos / Avalanche 等）的验证人（validator）运营委托给专业公司的**质押即服务（StaaS）**市场，自 Ethereum The Merge（2022-09）以来，在面向机构投资者的领域急速增长。在国内，存在**国内 VASP 的零售服务**与**海外 StaaS 事业者面向机构的 B2B 提供**的双层结构。FSA 采用「由托管人（custodian）进行的委托质押 = 加密资产交换业范围之内」的运用解释，面向零售的委托质押仅限持有 VASP 牌照者。

## 国内 VASP 的零售质押服务

国内 FSA 注册 VASP 各公司面向其自营托管客户提供：

- **[[exchanges/jp-exchange-bitflyer|bitFlyer]]（旧 SBI VC Trade 系）**— 将 ETH / SOL / DOT 等的质押报酬分配给客户（参见官方「质押」页面）
- **[[exchanges/jp-exchange-gmo-coin|GMO コイン]]** — 依次扩大 DOT / TEZ / XTZ / ATOM 等对象币种
- **[[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]** — ETH / SOL / DOT / ADA / ATOM 等广泛覆盖
- **[[exchanges/jp-exchange-coincheck|Coincheck]]** — 同时提供借贷（lending）+ 质押双方
- **[[exchanges/jp-exchange-bitbank|bitbank]]** — 提供 XTZ / DOT 等
- **[[exchanges/jp-exchange-bittrade|BitTrade]]（HUOBI 系）**— 全球 HUOBI 质押产品的国内展开

报酬率因币种而异，约为年率 1-10%，在扣除 VASP 手续费后分配给客户。**法律性质相当于「加密资产的借贷 / 寄存」**，按寄存数量于日后返还报酬的方案。

## 海外 StaaS 事业者的对日 B2B 提供

面向机构投资者的 StaaS 由海外专业事业者支配。由于无国内法人，**国内机构经由海外签约 + KYC + Travel Rule 接入**：

- **Kiln（旧 SkillZ・巴黎本部 2018-）**— 机构级非托管 StaaS。**B2B API + 仪表盘**。与 Komainu 合作，整合 Crypto.com・Ledger Live・Stakewise 等 100+
- **Figment（加拿大・多伦多 2018-）**— 与 Coinbase Custody・Anchorage Digital・BitGo 等北美机构托管人深度整合。**多链支持（40+ 链）**
- **Allnodes / Stakefish / Chorus One / P2P.org / Blockdaemon** — 各自为独立系，机构 + 零售混合
- **Coinbase Cloud（旧 Bison Trails）**— 面向全球机构，与 Coinbase 系产品整合
- **Lido（基于 DAO）**— 去中心化 Liquid Staking 协议。自 2024  开始**面向机构的 Lido Institutional（DSL）**流

### 国内机构的利用模式

国内机构（寿险 / 信托 / FoF）取得 ETH 质押敞口时的典型路径：

1. **[[exchanges/jp-custody-komainu|Komainu]]（野村 HD + CoinShares + Ledger JV）+ Kiln** — 直接验证人 + 报告书一体提供
2. **[[exchanges/jp-custody-fireblocks-japan|Fireblocks Japan]] + 海外验证人（Figment / Chorus One）**— 经由 Fireblocks MPC 钱包的非托管委托
3. **国内 VASP 的面向机构 OTC + 质押组合** — 经由 [[exchanges/jp-crypto-market-maker-otc-layer|国内 MM / OTC 層]]

## 监管论点

- **资金结算法**：委托质押 = 加密资产的管理业务 → 须 VASP 注册（FSA 运用解释）
- **金商法上的有价证券该当性**：Lido stETH / 流动性质押代币（LST）的有价证券性尚未确定
- **税务**：质押报酬 = 按受领时市价课税（个人=杂所得・法人=益金）→ [[exchanges/jp-crypto-asset-taxation-detailed|暗号資産税制]]
- **会计**：JICPA 业种别委员会实务指针（报酬认识时点・账簿价额）仍在持续讨论
- **AML / Travel Rule**：[[exchanges/jp-vasp-aml-travel-rule-implementation|犯収法 + FATF Travel Rule]] 的对象范围解释
- **JVCEA 规则**：[[exchanges/jvcea-self-regulatory-overview|JVCEA]] 以「关于加密资产借贷的规则」运用含质押在内的借贷交易上限规制

## 流动性质押代币（LST）与国内经办

stETH（Lido）/ rETH（Rocket Pool）/ cbETH（Coinbase）等 LST，在国内 JVCEA WhiteList 的上市仍然有限。**ETH 直接 + 国内 VASP 委托质押**为主流。今后 LST 在国内的经办可否，取决于监管 + JVCEA WhiteList 的进展。

## 与审计 + 法务的协作

利用 StaaS 的机构向 **[[exchanges/japan-crypto-audit-firm-landscape|監査法人]]** 与 **[[exchanges/japan-crypto-law-firm-landscape|法律事務所]]** 寻求并行建议。验证人罚没（slashing）・MEV（Maximum Extractable Value）治理・多验证人分散策略等为论点。

## Related

- [[exchanges/jp-institutional-custody-three-pillars]] — 机构托管
- [[exchanges/jp-custody-komainu]] — Komainu
- [[exchanges/jp-custody-fireblocks-japan]] — Fireblocks Japan
- [[exchanges/jp-custody-ginco]] — Ginco
- [[exchanges/jp-crypto-market-maker-otc-layer]] — MM / OTC 层
- [[exchanges/jvcea-self-regulatory-overview]] — JVCEA
- [[exchanges/fsa-vasp-registration-system]] — FSA 注册制度
- [[fintech/japan-financial-regulation]] — 上位金融监管

## Sources

- Kiln 官方: https://www.kiln.fi/
- Figment 官方: https://www.figment.io/
- bitFlyer 质押: https://www.bitflyer.com/ja-jp/staking
- GMO 코인: https://coin.z.com/jp/
- SBI VC Trade: https://www.sbivc.co.jp/
- JVCEA 官方（规则类）: https://jvcea.or.jp/
