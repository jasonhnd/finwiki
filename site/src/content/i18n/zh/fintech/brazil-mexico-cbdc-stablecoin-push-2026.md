---
source: fintech/brazil-mexico-cbdc-stablecoin-push-2026
source_hash: 09d1303d82049bb2
lang: zh
status: machine
fidelity: ok
title: "Brazil DREX × Mexico Banxico CoDi × 拉丁美洲 CBDC 与 stablecoin 并行架构 2026"
translated_at: 2026-06-15T03:48:21.830Z
---

# Brazil DREX × Mexico Banxico CoDi × 拉丁美洲 CBDC 与 stablecoin 并行架构 2026

## TL;DR

巴西与墨西哥将在 2026 年 同期进入「CBDC + 民间 stablecoin + 美元 SC 灰色化」的三轨道并行阶段。**巴西 DREX** 在 2025-12  将第 2  轮试点扩大至 16  家机构，覆盖批发 + 零售的 dual-layer（与 [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ概要]] 一致）；**Mercado Bitcoin** 在 Polygon / Ethereum 上发行 **锚定 BRL 的 stablecoin** 以补充 DREX 的市场版，与 DREX 形成「公私双轨」。**墨西哥 Banxico** 不发行零售 CBDC，而是深化 **CoDi 即时结算**，并通过默许 **Bitso × Mercado Bitcoin × M0  联合发行的 MXNB**（墨西哥比索 stablecoin，参见 [[fintech/m0-network-infrastructure-update-2026|M0 2026 インフラ更新]]），对 USDC/USDT 灰色美元化提出「防御性本国货币 SC」的替代。这一格局将拉丁美洲定位为 [[fintech/em-market-crypto-dollarization-pattern|EM ドル化パターン]] 之外的 **第二条路径**：并非放弃本国货币，而是让本国货币 SC + CBDC 并行，以抑制美元 SC 的渗透。

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/em-market-crypto-dollarization-pattern|EM 市場暗号ドル化パターン]] for the dollar pressure backdrop and [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS マルチ CBDC 概要]] for the cross-CBDC payments context. 与 [[fintech/india-anti-dollar-dpi-alliance|India 反ドル DPI アライアンス]] 则是拉丁美洲 vs 印度这 2  条本国货币防御路径的横向比较。

## Key facts（2026-05  快照）

- **DREX 第 2  轮试点** 2025-12  启动，参与机构 16 社（包括 Itaú / Bradesco / Santander Brasil / Banco do Brasil / Caixa / BTG Pactual / Mercado Bitcoin / Visa Brasil 等） ^[bcb-press]
- **DREX TVL（pilot 阶段）** 约 R$3.5B（约 $700M）的模拟金融资产在流通 ^[bcb-press]
- **Mercado Bitcoin BRL stablecoin（MBR$）** 流通量约 R$280M（约 $56M, 2026-05）；部署链为 Polygon + Ethereum + Avalanche ^[issuer-press]
- **Banxico CoDi 月度交易量** 约 7,200 万 笔（2026-03）、同比 +120%（由 SPEI 限额下调拉动） ^[banxico]
- **MXNB stablecoin（M0  + Bitso）** 流通量约 MXN 450M（约 $25M）；第 1  阶段仅限于 Bitso 内部 + DeFi 测试 ^[bitso-press]
- **巴西的 USDC/USDT** 月度链上流入额约 $4.5B（2026-Q1）、主要经由 Bitso BR / Mercado Bitcoin / Foxbit ^[chainalysis-report]
- **墨西哥的 USDC/USDT** 月度链上流入额约 $2.8B（2026-Q1）、Bitso 占据交易所侧 60%+ 的份额 ^[chainalysis-report]
- **巴西 CVM（证券委员会）2026-04  公告** 将锚定 BRL 的 SC 纳入 e-money / payment instrument 监管框架，排除证券属性 ^[cvm-press]
- **墨西哥 CNBV / Banxico 2026-Q1  联合声明** 暗示对本国货币 SC 持「观察 + 不阻止」的立场，与对美元 SC「明确不推荐」的立场形成对照 ^[banxico-press]

## DREX（巴西）详解

**项目正式名称**: Digital Real (DREX) —— 由巴西中央银行 (Banco Central do Brasil, BCB) 主导，于 2020 年 启动研究，于 2023 年 进行第 1  轮试点，于 2025-12  将第 2  轮试点扩大。

**架构**: dual-tier —— 批发 CBDC（银行间 DLT 层，Hyperledger Besu private chain） + 代币化商业银行存款（CBDC 背书的存款代币）以对应零售。这与 [[fintech/cbdc-multi-tier-architecture-three-paradigms|多層 CBDC アーキテクチャ三パラダイム]] 中的「间接发行 + 商业银行代币化存款」范式一致。

**第 2  轮试点（2025-12  启动）的主要变化**:

1. **资产范围扩大**: 第 1  轮仅测试国债 + 不动产代币化；第 2  轮新增企业债 / 应收账款 / 农产品仓单 / 二级市场结算 / FX 兑换
2. **机构数量**: 由 2023 年 的 9 社 扩大至 16 社
3. **加密资产原生经营者的加入**: Mercado Bitcoin 成为首个取得 DREX 试点资格的加密交易所，成为「私有链 CBDC + 公有链 SC」互操作试行的里程碑
4. **跨境连接**: BCB 正在研究与 BIS Innovation Hub 及 mBridge 模型的兼容路径（参见 [[fintech/mbridge-bis-multi-cbdc-overview|mBridge マルチ CBDC 概要]]），但巴西 **并非** mBridge 6  国成员

**DREX 与 Pix 的关系**: Pix（BCB 即时结算系统，2020  上线）已成为巴西国民级别的支付渠道，月度交易量超 60 億 笔。DREX 并非取代 Pix，而是在 Pix 之上为金融机构叠加一层可编程性 + 原子结算。**Pix 国民级 + DREX 机构级 + Mercado Bitcoin BRL SC 加密原生级** = 巴西支付层的三轨道架构。

## Mercado Bitcoin BRL stablecoin

**发行体**: Mercado Bitcoin（巴西最大的本土加密交易所，2013  设立，2021 年 由软银集团领投、估值 $2.1B）

**机制**: BRL 1:1  锚定，储备为巴西短期国债（LFT） + 中央银行存款 + 商业银行存款。储备的月度披露由 KPMG Brazil 审计。

**定位**: 并非取代 DREX，而是 **填补 DREX 全面上线前（2027-2028  预计）的市场空白**，同时为 DREX 时代「民间 BRL 代币与 CBDC 的互操作」提供桥头堡。

**选链**: 以 Polygon 为主轴（受 [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 多層アーキテクチャ]] 中 Polygon 与多家拉丁美洲中央银行协作背景驱动） + Ethereum（跨境流动性） + Avalanche（DeFi 兼容）。

**用途**: (1) 在加密交易所内以 BRL 配对替代法币入金延迟；(2) 跨境结算（向阿根廷 / 乌拉圭 / 巴拉圭的出口商进行 BRL 结算）；(3) 在 DeFi 协议中作为 BRL 抵押 / 流动性挖矿；(4) 嵌入 Mercado Pago 及其他 fintech 的 BRL 代币钱包。

## Banxico CoDi × MXNB pilot（墨西哥）

**Banxico（墨西哥中央银行）的立场**: 既不发行零售 CBDC 也不发行批发 CBDC，而是深化 **CoDi**（即时结算 QR 码协议，2019  上线） + SPEI（银行间即时汇款，2004  上线）。Banxico 行长 Victoria Rodríguez 反复公开表态：「数字比索的本质问题不在技术，而在现有支付系统的效率。」这与中国 e-CNY / 巴西 DREX 的强 CBDC 路线 **方向相反**。

**CoDi 2026  现状**:

- 月度交易量 约 7,200 万 笔（2026-03）、同比 +120%
- 主要驱动: SPEI 上限由 MXN 8,000  下调至 0 ，使小额 CoDi 与 SPEI 连续覆盖
- 加盟店接入数 约 3.5M（2026-05）
- 与 Pix（巴西，月 60 億 笔）相比仍小 2  个数量级，但增长率高

**MXNB（M0  + Bitso pilot）**:

- 发行体: 由 Bitso 安排，Mercado Bitcoin（巴西侧）为副 issuer，底层基础设施为 M0（参见 [[fintech/m0-network-infrastructure-update-2026|M0 2026 インフラ更新]]）
- 链: Base / Ethereum / Polygon
- 储备: 墨西哥短期国债（CETES） + 商业银行 MXN 存款
- 流通 MXN 450M（约 $25M, 2026-05）、仍处 pilot 阶段
- 战略意图: 在 Banxico 不发行 CBDC 的时期，利用 **民间本国货币 SC + M0  中立基础设施**，构建对抗 USDC/USDT 灰色化的本国货币防御层

**Bitso 的角色**: Bitso 是墨西哥最大的加密交易所 + Latam 跨境结算渠道（与 Stellar 长期协作提供美墨之间的 remittance）。2024  估值 $2.2B。Bitso 同时:

1. USDC / USDT 在墨西哥的最大分销商（无法抑制美元 SC 渗透）
2. MXNB 的共同发行体（主动提供本国货币替代选项）
3. Banxico CoDi 加盟店接入网关之 1 

这一「三角定位」使 Bitso 成为墨西哥支付层中最重要的市场节点。

## 双轨道（CBDC + 本国货币 SC） vs 单轨道（灰色美元化）

| 维度 | 巴西 (DREX + BRL SC) | 墨西哥 (CoDi + MXNB) | 阿根廷 (无 CBDC + 灰色 USDT) | 委内瑞拉 (Petro 失败 + USDT) |
|---|---|---|---|---|
| CBDC 路线 | DREX 积极推进 | 无（Banxico 拒绝） | 无（政治不稳定） | Petro 失败 |
| 本国货币 SC | Mercado Bitcoin BRL ~$56M | MXNB ~$25M | 几乎无 | 几乎无 |
| 美元 SC 月度流入 | ~$4.5B | ~$2.8B | ~$2.5B（占 GDP 比最高） | ~$1.2B |
| 即时结算渠道 | Pix 60 億/月 | CoDi 7,200 万/月 | 弱 | 极弱 |
| 监管立场 | 积极（BCB + CVM 的明文框架） | 默许 + 观察 | 矛盾（中央银行严格，财政部宽松） | 名义上严格，实质放任 |
| 反美元 SC 效果 | 中（以 Pix + DREX 提供本国货币替代） | 弱（CoDi 规模小） | 失败 | 失败 |

**核心洞察**: 巴西以 **Pix + DREX + BRL SC** 三层，将本国货币的便利性、可编程性、加密互操作性悉数齐备，这是当前 EM 国家中完成度最高的「反美元化技术栈」。墨西哥次之（CoDi + MXNB 仍在扩容中）。阿根廷 / 委内瑞拉则是「放弃本国货币 → USDT 化」的反例，与 [[fintech/jurisdiction-list-monetary-protectionism|規制管轄リスト · 通貨保護主義]] 中的「主权货币崩溃国」名单一致。

## 与 mBridge / Project Agora 的距离

巴西、墨西哥 **均非 mBridge 6  国成员**（参见 [[fintech/mbridge-bis-multi-cbdc-overview|mBridge 概要]]）。BIS 2025-09  工作论文 (BIS WP No. 1156) 暗示，拉丁美洲的多 CBDC 桥接更可能走向 **IADB（Inter-American Development Bank）主导的地区试点**，而非加入 mBridge。

由 DREX 与 mBridge 的技术兼容性（两者皆为 Hyperledger Besu permissioned chain）来看，「未来连接」是可能的，但在政治上巴西 + 墨西哥与中国主导的 mBridge 联盟保持距离。这与 [[fintech/jurisdiction-list-monetary-protectionism|規制管轄]] 中拉丁美洲的「不结盟 + 务实主义」立场一致。

## 与 M0  MXNB pilot 的纵深结合

MXNB pilot 是 M0（参见 [[fintech/m0-network-infrastructure-update-2026|M0 2026 インフラ更新]]）的首个 **非美元 partner SC**，也是拉丁美洲首个 **完全运行在中立 SC 基础设施之上的本国货币 SC**。这与 Mercado Bitcoin BRL（自建基础设施）形成对照:

| 维度 | MXNB (M0  基础设施) | Mercado Bitcoin BRL (自建) |
|---|---|---|
| 合规模板 | M0  标准化 + Bitso 本地接入 | Mercado Bitcoin 自有合规栈 |
| 智能合约 | M0  共用（OpenZeppelin + Trail of Bits + Certora 审计） | 自研 + 自审计 |
| 储备接入 | M0  后端（CETES + 商业银行存款） | 自有托管（LFT + 中央银行存款 + 商业银行存款） |
| 跨链 | M Bridge canonical | LayerZero + 通用桥 |
| 治理 | $M DAO + Bitso/Mercado Bitcoin 的实质控制 | Mercado Bitcoin 100% 控制 |
| 监管负担 | 以 M0  模板共享减轻单一负担 | 单独承担墨西哥/巴西监管负担 |

**含义**: 在拉丁美洲，2027-2028  可能出现「自建 vs 基础设施共享」的分化 —— 大型本地玩家自建（Mercado Bitcoin BRL 模型），中小玩家共享（M0  MXNB 模型）。这是 Latam 版的 [[fintech/stablecoin-chain-token-strategy-trilemma|stablecoin-chain-token 戦略トリレンマ]]。

## 监管协调与对立

- **巴西 CVM 2026-04  公告**: 明示锚定 BRL 的 SC = e-money（NOT 证券），排除 Howey Test 适用，为民间本国货币 SC 提供清晰的合规路径
- **巴西 BCB Resolução 2026-006（草案）**: 提议将「锚定 BRL 的 SC 流通量」纳入支付系统监督仪表盘，与 EU MiCA 的大型 EMT 限制条款类似（参见 [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART]]）
- **墨西哥 CNBV 2026-Q1  声明**: 「对民间本国货币 SC 持观察 + 不阻止立场，对外币 SC 不推荐」
- **拉丁美洲地区 IADB 2026-Q2  报告**: 建议成员国采用「统一本国货币 SC 监管框架」 + 「KYC/AML 信息共享机制」
- **与 [[fintech/fatf-travel-rule-overview|FATF Travel Rule]] 的兼容性**: 巴西 + 墨西哥均为 FATF / GAFILAT 成员，BRL/MXN SC 的跨境流通须遵守 Travel Rule

## Related

- [[fintech/INDEX|FinWiki Fintech Index]]
- [[fintech/em-market-crypto-dollarization-pattern|EM 市場暗号ドル化パターン]]
- [[fintech/india-anti-dollar-dpi-alliance|India 反ドル DPI アライアンス]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ概要]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 多層アーキテクチャ三パラダイム]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS マルチ CBDC 概要]]
- [[fintech/jurisdiction-list-monetary-protectionism|管轄リスト · 通貨保護主義]]
- [[fintech/gray-market-dollar-network-formalization|グレーマーケット・ドル・ネットワークの正式化]]
- [[fintech/m0-network-infrastructure-update-2026|M0 2026 インフラ更新]]
- [[fintech/mbridge-non-usd-settlement-ring-scale|mBridge 非ドル決済リング規模]]
- [[fintech/stablecoin-chain-token-strategy-trilemma|stablecoin-chain-token 戦略トリレンマ]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART]]
- [[fintech/fatf-travel-rule-overview|FATF Travel Rule]]

## Sources

- Banco Central do Brasil — DREX official page https://www.bcb.gov.br/en/financialstability/drex_en
- Banxico — CoDi (Cobro Digital) https://www.banxico.org.mx/sistemas-de-pago/codi-cobro-digital-banco.html
- IADB — "Digital currencies and stablecoins in Latin America: 2026 outlook" https://www.iadb.org/en/news/digital-currencies-latam-2026
- Bitso blog — MXNB pilot announcement https://bitso.com/blog/mxnb-stablecoin-pilot
- Mercado Bitcoin blog — BRL stablecoin (MBR$) launch https://www.mercadobitcoin.com.br/blog/brl-stablecoin
- BIS Working Paper No. 1156 — "Multi-CBDC arrangements in Latin America" (2025) https://www.bis.org/publ/work1156.htm
- Reuters — "Brazil's DREX enters second phase with 16 institutions" (2025-12) https://www.reuters.com/business/finance/brazil-drex-second-phase-2026
- CVM Comunicado 2026-04 — BRL stablecoin classification (public release)
- Chainalysis Geography of Crypto 2026 — LatAm chapter (referenced via aggregate stat)
