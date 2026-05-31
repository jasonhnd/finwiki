---
source: fintech/brazil-mexico-cbdc-stablecoin-push-2026
source_hash: f0cb0e25ad6120f7
lang: zh
status: machine
fidelity: ok
title: "巴西 DREX × 墨西哥 Banxico CoDi × 拉丁美洲 CBDC 与稳定币并行架构 2026"
translated_at: 2026-05-31T06:16:15.702Z
---

# 巴西 DREX × 墨西哥 Banxico CoDi × 拉丁美洲 CBDC 与稳定币并行架构 2026

## TL;DR

巴西和墨西哥于 2026 年 同期进入"央行数字货币 + 私人稳定币 + 美元稳定币灰色化"三轨并行阶段。**巴西 DREX** 于 2025-12  将第 2  轮试点运行扩大至 16  家机构，覆盖批发与零售的双层架构（与 [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ概要]] 一致）；**Mercado Bitcoin** 在 Polygon / Ethereum 上发行 **BRL 锚定稳定币**，补充 DREX 的市场版本，与 DREX 构成"公私双轨"。**墨西哥 Banxico** 不发行零售 CBDC，而是深化 **CoDi 即时支付**，同时默许 **Bitso × Mercado Bitcoin × M0  联合发行的 MXNB**（墨西哥比索稳定币，参见 [[fintech/m0-network-infrastructure-update-2026|M0 2026 インフラ更新]]），以此提供应对 USDC/USDT 美元化的"防御性本国货币稳定币"替代方案。这一格局将拉丁美洲定位为 [[fintech/em-market-crypto-dollarization-pattern|EM ドル化パターン]] 之外的**第二条路径**：并非放弃本国货币，而是通过本国货币稳定币与 CBDC 并行运转来抑制美元稳定币的渗透。

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/em-market-crypto-dollarization-pattern|EM 市場暗号ドル化パターン]] for the dollar pressure backdrop and [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS マルチ CBDC 概要]] for the cross-CBDC payments context. [[fintech/india-anti-dollar-dpi-alliance|India 反ドル DPI アライアンス]] 与本条目构成拉丁美洲 vs 印度 2  条本国货币防御路径的横向比较。

## 关键事实（2026-05  快照）

- **DREX 第 2  轮试点运行** 2025-12  启动，参与机构 16 社 家（包含 Itaú / Bradesco / Santander Brasil / Banco do Brasil / Caixa / BTG Pactual / Mercado Bitcoin / Visa Brasil 等） ^[bcb-press]
- **DREX TVL（试点阶段）** 约 R$3.5B（约 $700M）的模拟金融资产在流通 ^[bcb-press]
- **Mercado Bitcoin BRL 稳定币（MBR$）** 流通量约 R$280M（约 $56M，2026-05）；部署链为 Polygon + Ethereum + Avalanche ^[issuer-press]
- **Banxico CoDi 月交易量** 约 7,200 万 笔（2026-03），同比 +120%（SPEI 限额下调驱动） ^[banxico]
- **MXNB 稳定币（M0 + Bitso）** 流通量约 MXN 450M（约 $25M）；第 1  阶段仅限 Bitso 内部 + DeFi 测试 ^[bitso-press]
- **巴西 USDC/USDT** 月链上流入额约 $4.5B（2026-Q1），主要通过 Bitso BR / Mercado Bitcoin / Foxbit ^[chainalysis-report]
- **墨西哥 USDC/USDT** 月链上流入额约 $2.8B（2026-Q1），Bitso 占据交易所端 60%+ 份额 ^[chainalysis-report]
- **巴西 CVM（证券委员会）2026-04  公告** 将 BRL 锚定稳定币纳入电子货币 / 支付工具监管框架，排除证券属性 ^[cvm-press]
- **墨西哥 CNBV / Banxico 2026-Q1  联合声明** 暗示对本国货币稳定币持"观察 + 不阻止"立场，与对美元稳定币"明确不推荐"的立场形成对比 ^[banxico-press]

## DREX（巴西）详情

**项目正式名称**：数字雷亚尔（DREX）—— 由巴西中央银行（Banco Central do Brasil，BCB）主导，2020 年 启动研究，2023 年 完成第 1  轮试点运行，2025-12  扩大第 2  轮试点运行。

**架构**：双层架构 —— 批发 CBDC（银行间 DLT 层，Hyperledger Besu 私有链）+ 代币化商业银行存款（CBDC 支撑的存款代币）覆盖零售端。与 [[fintech/cbdc-multi-tier-architecture-three-paradigms|多層 CBDC アーキテクチャ三パラダイム]] 中"间接发行 + 商业银行代币化存款"范式一致。

**第 2  轮试点运行（2025-12  启动）的主要变化**：

1. **资产范围扩大**：第 1  轮仅测试国债 + 房地产代币化；第 2  轮新增企业债 / 应收账款 / 农产品仓储收据 / 二级市场结算 / 外汇兑换
2. **机构数量**：从 2023 年 的 9 社 家扩大至 16 社 家
3. **加密原生参与方入场**：Mercado Bitcoin 成为首家取得 DREX 试点运行资格的加密交易所，达成"私有链 CBDC + 公有链稳定币"互操作试验的里程碑
4. **跨境连接**：BCB 正在与 BIS 创新中心探讨与 mBridge 模式的兼容路径（参见 [[fintech/mbridge-bis-multi-cbdc-overview|mBridge マルチ CBDC 概要]]），但巴西**并非** mBridge 6  国成员

**DREX 与 Pix 的关系**：Pix（BCB 即时支付系统，2020  上线）已成为巴西国民级支付渠道，月交易量超 60 億 笔。DREX 并非取代 Pix，而是在 Pix 之上为金融机构增加可编程性 + 原子结算层。**Pix 国民级 + DREX 机构级 + Mercado Bitcoin BRL 稳定币加密原生级** = 巴西支付层的三轨架构。

## Mercado Bitcoin BRL 稳定币

**发行方**：Mercado Bitcoin（巴西最大本土加密交易所，2013  成立，2021 年 由软银集团领投，估值 $2.1B）

**机制**：BRL 1：1  锚定，准备金为巴西短期国债（LFT）+ 中央银行存款 + 商业银行存款。准备金月度披露由毕马威巴西审计。

**定位**：并非取代 DREX，而是**填补 DREX 全面上线前（预计 2027-2028 ）的市场空白**，同时为 DREX 时代"私人 BRL 代币与 CBDC 互操作"提供桥头堡。

**链选择**：以 Polygon 为主轴（由 [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 多層アーキテクチャ]] 中 Polygon 与多家拉丁美洲中央银行的合作背景驱动）+ Ethereum（跨境流动性）+ Avalanche（DeFi 兼容）。

**用途**：（1）替代交易所内 BRL 交易对的法定入金延迟；（2）跨境支付（向阿根廷/乌拉圭/巴拉圭出口商进行 BRL 结算）；（3）在 DeFi 协议中作为 BRL 抵押品 / 流动性挖矿；（4）嵌入 Mercado Pago 等金融科技的 BRL 代币钱包。

## Banxico CoDi × MXNB 试点（墨西哥）

**Banxico（墨西哥中央银行）立场**：不发行零售 CBDC 也不发行批发 CBDC，但深化 **CoDi**（即时支付二维码协议，2019  上线）+ SPEI（银行间即时转账，2004  上线）。Banxico 行长 Victoria Rodríguez 多次公开表明："数字比索的本质问题不在于技术，而在于现有支付系统的效率。"这与中国数字人民币 / 巴西 DREX 的强力 CBDC 路线**方向相反**。

**CoDi 2026  状况**：

- 月交易量约 7,200 万 笔（2026-03），同比 +120%
- 主要驱动因素：SPEI 上限从 MXN 8,000  下调至 0 ，小额 CoDi 与 SPEI 连续覆盖
- 接入商户数约 3.5M（2026-05）
- 与 Pix（巴西，月 60 億 笔）相比仍低 2  个数量级，但增长率较高

**MXNB（M0 + Bitso 试点）**：

- 发行方：Bitso 主导安排，Mercado Bitcoin（巴西方）为副发行方，基础设施为 M0（参见 [[fintech/m0-network-infrastructure-update-2026|M0 2026 インフラ更新]]）
- 链：Base / Ethereum / Polygon
- 准备金：墨西哥短期国债（CETES）+ 商业银行 MXN 存款
- 流通量 MXN 450M（约 $25M，2026-05），仍处于试点阶段
- 战略意图：在 Banxico 不发行 CBDC 期间，利用**私人本国货币稳定币 + M0  中立基础设施**，构建应对 USDC/USDT 灰色化的本国货币防御层

**Bitso 的角色**：Bitso 是墨西哥最大加密交易所 + 拉美跨境支付渠道（与 Stellar 长期合作提供美墨间汇款服务）。2024  估值 $2.2B。Bitso 同时担任：

1. USDC / USDT 在墨西哥最大分销商（无法抑制美元稳定币渗透）
2. MXNB 联合发行方（主动提供本国货币替代选项）
3. Banxico CoDi 商户接入网关之 1 

这一"三角定位"使 Bitso 成为墨西哥支付层中最重要的市场节点。

## 双轨（CBDC + 本国货币稳定币）vs 单轨（美元化）

| 维度 | 巴西（DREX + BRL 稳定币） | 墨西哥（CoDi + MXNB） | 阿根廷（无 CBDC + 灰色 USDT） | 委内瑞拉（Petro 失败 + USDT） |
|---|---|---|---|---|
| CBDC 路线 | DREX 积极推进 | 无（Banxico 拒绝） | 无（政治不稳定） | Petro 失败 |
| 本国货币稳定币 | Mercado Bitcoin BRL 约 $56M | MXNB 约 $25M | 几乎没有 | 几乎没有 |
| 美元稳定币月流入 | 约 $4.5B | 约 $2.8B | 约 $2.5B（相对 GDP 占比最高） | 约 $1.2B |
| 即时支付渠道 | Pix 60 億 笔/月 | CoDi 7,200 万 笔/月 | 薄弱 | 极度薄弱 |
| 监管立场 | 积极（BCB + CVM 明文框架） | 默许 + 观察 | 矛盾（央行严格，财政部宽松） | 名义上严格，实质放任 |
| 抗美元稳定币效果 | 中等（Pix + DREX 提供本国货币替代）  | 弱（CoDi 规模较小） | 失败 | 失败 |

**核心洞察**：巴西以 **Pix + DREX + BRL 稳定币** 三层架构全面覆盖本国货币的便利性、可编程性与加密互操作性，这是当前新兴市场国家中完成度最高的"去美元化技术栈"。墨西哥次之（CoDi + MXNB 仍在扩大规模）。阿根廷/委内瑞拉是"放弃本国货币 → USDT 化"的反例，与 [[fintech/jurisdiction-list-monetary-protectionism|規制管轄リスト · 通貨保護主義]] 中"主权货币崩溃国"名单一致。

## mBridge / Project Agora 的距离

巴西和墨西哥**均非 mBridge 6  国成员**（参见 [[fintech/mbridge-bis-multi-cbdc-overview|mBridge 概要]]）。BIS 2025-09  工作论文（BIS WP No. 1156）显示，拉丁美洲的多 CBDC 互联更可能走向**泛美开发银行（IADB）主导的区域试验**，而非参与 mBridge。

DREX 与 mBridge 的技术兼容性（两者均采用 Hyperledger Besu 许可链）使"未来连接"在技术上可行，但政治上巴西 + 墨西哥与中国主导的 mBridge 联盟保持距离。这与 [[fintech/jurisdiction-list-monetary-protectionism|規制管轄]] 中拉丁美洲"不结盟 + 实用主义"立场一致。

## M0  MXNB 试点的深度耦合

MXNB 试点对于 M0（参见 [[fintech/m0-network-infrastructure-update-2026|M0 2026 インフラ更新]]）而言是其首个**非美元合作稳定币**，也是拉丁美洲首个**在完全中立稳定币基础设施上运行的本国货币稳定币**。这与 Mercado Bitcoin BRL（自建基础设施）形成对比：

| 维度 | MXNB（M0  基础设施） | Mercado Bitcoin BRL（自主构建） |
|---|---|---|
| 合规模板 | M0  标准化 + Bitso 本地化接入 | Mercado Bitcoin 自有合规栈 |
| 智能合约 | M0  共用（OpenZeppelin + Trail of Bits + Certora 审计） | 自主开发 + 自行审计 |
| 准备金接入 | M0  后端（CETES + 商业银行存款） | 自有托管（LFT + 中央银行存款 + 商业银行存款） |
| 跨链 | M Bridge 标准桥 | LayerZero + 通用桥 |
| 治理 | $M DAO + Bitso/Mercado Bitcoin 实质控制 | Mercado Bitcoin 100% 控制 |
| 监管负担 | 通过 M0  模板共享分摊单一负担 | 独自承担墨西哥/巴西监管负担 |

**含义**：拉丁美洲在 2027-2028  可能出现"自主构建 vs 共享基础设施"的分化 —— 大型本地参与方选择自主构建（Mercado Bitcoin BRL 模式），中小参与方选择共享（M0  MXNB 模式）。这是拉美版的 [[fintech/stablecoin-chain-token-strategy-trilemma|stablecoin-chain-token 戦略トリレンマ]]。

## 监管协调与分歧

- **巴西 CVM 2026-04  公告**：明确将 BRL 锚定稳定币定性为电子货币（非证券），排除 Howey 检验适用，为私人本国货币稳定币提供明确合规路径
- **巴西 BCB Resolução 2026-006（草案）**：提议将"BRL 锚定稳定币流通量"纳入支付系统监管仪表板，与欧盟 MiCA 的大型电子货币代币限制条款类似（参见 [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART]]）
- **墨西哥 CNBV 2026-Q1  声明**：对私人本国货币稳定币持"观察 + 不阻止"立场，对外汇稳定币持"不推荐"立场
- **拉丁美洲区域 IADB 2026-Q2  报告**：建议成员国采用"统一本国货币稳定币监管框架" + "KYC/AML 信息共享机制"
- **与 [[fintech/fatf-travel-rule-overview|FATF Travel Rule]] 的兼容性**：巴西 + 墨西哥均为 FATF / GAFILAT 成员，BRL/MXN 稳定币的跨境流通须符合旅行规则（Travel Rule）

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

- Banco Central do Brasil — DREX 官方页面 https://www.bcb.gov.br/en/financialstability/drex_en
- Banxico — CoDi（Cobro Digital）https://www.banxico.org.mx/sistemas-de-pago/codi-cobro-digital-banco.html
- IADB — "数字货币与拉丁美洲稳定币：2026 展望" https://www.iadb.org/en/news/digital-currencies-latam-2026
- Bitso 博客 — MXNB 试点公告 https://bitso.com/blog/mxnb-stablecoin-pilot
- Mercado Bitcoin 博客 — BRL 稳定币（MBR$）上线 https://www.mercadobitcoin.com.br/blog/brl-stablecoin
- BIS 工作论文 No. 1156  — "拉丁美洲的多 CBDC 安排"（2025）https://www.bis.org/publ/work1156.htm
- 路透社 — "巴西 DREX 进入第二阶段，16  家机构参与"（2025-12）https://www.reuters.com/business/finance/brazil-drex-second-phase-2026
- CVM Comunicado 2026-04  — BRL 稳定币分类（公开发布）
- Chainalysis 加密地理报告 2026  — 拉丁美洲章节（通过汇总统计数据引用）
