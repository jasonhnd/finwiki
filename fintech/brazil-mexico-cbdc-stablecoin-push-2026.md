---
title: Brazil DREX × Mexico Banxico CoDi × 拉美 CBDC 与稳定币并行架构 2026
aliases:
  - brazil-mexico-cbdc-stablecoin-push-2026
  - DREX 2026
  - Brazil CBDC stablecoin
  - Mexico Banxico CoDi
  - MXNB M0 pilot
  - BRL stablecoin
  - Bitso role 2026
  - Mercado Bitcoin BRL
  - LatAm CBDC parallel
domain: fintech
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [fintech, stablecoin, cbdc, brazil, mexico, latam, drex, banxico, 2026-event]
status: active
sources:
  - https://www.bcb.gov.br/en/financialstability/drex_en
  - https://www.banxico.org.mx/sistemas-de-pago/codi-cobro-digital-banco.html
  - https://www.iadb.org/en/news/digital-currencies-latam-2026
  - https://bitso.com/blog/mxnb-stablecoin-pilot
  - https://www.mercadobitcoin.com.br/blog/brl-stablecoin
  - https://www.bis.org/publ/work1156.htm
  - https://www.reuters.com/business/finance/brazil-drex-second-phase-2026
---

# Brazil DREX × Mexico Banxico CoDi × 拉美 CBDC 与稳定币并行架构 2026

## TL;DR

巴西和墨西哥 2026 年同时进入 "CBDC + 私人稳定币 + 美元 SC 灰色化" 三轨并行阶段。**巴西 DREX** 在 2025-12 第二轮试点扩大到 16 家机构、覆盖批发 + 零售 dual-layer (与 [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]] 一致); **Mercado Bitcoin** 在 Polygon / Ethereum 发行**BRL-anchored 稳定币**作为 DREX 的市场版补充, 与 DREX 形成"公私双轨"。**墨西哥 Banxico** 不发零售 CBDC 但深化 **CoDi 即时支付**, 并默许 **Bitso × Mercado Bitcoin × M0 联合发行 MXNB** (墨西哥比索稳定币, 见 [[fintech/m0-network-infrastructure-update-2026|M0 2026 基础设施更新]]) 作为替代 USDC/USDT 灰色美元化的"防御性本币 SC"。这一格局把拉美变成 [[fintech/em-market-crypto-dollarization-pattern|EM 美元化模式]] 之外的**第二条路径**: 不是放弃本币, 而是用本币 SC + CBDC 并行抑制美元 SC 渗透。

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/em-market-crypto-dollarization-pattern|EM 市场加密美元化模式]] for the dollar pressure backdrop and [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS 多 CBDC 概览]] for the cross-CBDC payments context. 与 [[fintech/india-anti-dollar-dpi-alliance|India 反美元 DPI 联盟]] 是拉美 vs 印度两条本币防御路线的横向对比。

## Key facts (2026-05 snapshot)

- **DREX 第二轮试点** 2025-12 启动, 参与机构 16 家 (含 Itaú / Bradesco / Santander Brasil / Banco do Brasil / Caixa / BTG Pactual / Mercado Bitcoin / Visa Brasil 等) ^[bcb-press]
- **DREX TVL (pilot 阶段)** ~R$3.5B (~$700M) 流动中模拟金融资产 ^[bcb-press]
- **Mercado Bitcoin BRL stablecoin (MBR$)** 流通约 R$280M (~$56M, 2026-05); 部署链 Polygon + Ethereum + Avalanche ^[issuer-press]
- **Banxico CoDi 月交易量** ~7,200 万笔 (2026-03), 同比 +120% (受 SPEI 限额下沉驱动) ^[banxico]
- **MXNB stablecoin (M0 + Bitso)** 流通约 MXN 450M (~$25M); 第一阶段限于 Bitso 内部 + DeFi 测试 ^[bitso-press]
- **USDC/USDT 在巴西** 月链上流入约 $4.5B (2026-Q1), 主要通过 Bitso BR / Mercado Bitcoin / Foxbit ^[chainalysis-report]
- **USDC/USDT 在墨西哥** 月链上流入约 $2.8B (2026-Q1), Bitso 占交易所端 60%+ 份额 ^[chainalysis-report]
- **巴西 CVM (证监会) 2026-04 公告** 把 BRL-anchored SC 纳入 e-money / payment instrument 监管框架, 排除证券属性 ^[cvm-press]
- **墨西哥 CNBV / Banxico 2026-Q1 联合声明** 暗示对本币 SC 持"观察 + 不阻止"立场, 与对美元 SC 的"明确不背书"形成对比 ^[banxico-press]

## DREX (巴西) 详解

**项目全称**: Digital Real (DREX) — Brazil 央行 (Banco Central do Brasil, BCB) 主导, 2020 启动研究, 2023 第一轮试点, 2025-12 第二轮试点扩大。

**架构**: dual-tier — 批发 CBDC (interbank DLT 层, Hyperledger Besu private chain) + tokenized 商业银行存款 (CBDC-backed deposit token) 给零售。这与 [[fintech/cbdc-multi-tier-architecture-three-paradigms|多层 CBDC 架构三范式]] 中"间接发行 + 商业银行 token 化存款"范式一致。

**第二轮试点 (2025-12 启动) 关键变化**:

1. **资产范围扩展**: 第一轮只测试主权债 + 房地产代币化; 第二轮加入企业债 / 应收账款 / 农产品仓单 / 二级市场结算 / FX 兑换
2. **机构数量**: 从 2023 的 9 家扩到 16 家
3. **加密原生玩家入场**: Mercado Bitcoin 是首家加密交易所获 DREX 试点资格, 标志"私链 CBDC + 公链 SC" 互通的尝试
4. **跨境对接**: BCB 正与 BIS Innovation Hub 探讨与 mBridge 模式的兼容路径 (见 [[fintech/mbridge-bis-multi-cbdc-overview|mBridge 多 CBDC 概览]]), 但巴西**不是** mBridge 六家成员

**DREX 与 Pix 关系**: Pix (BCB 即时支付系统, 2020 上线) 已是巴西国民级支付通道, 月交易量 60 亿+。DREX 不取代 Pix, 而是给 Pix 之上加一层可编程性 + atomic settlement 给金融机构。**Pix 国民级 + DREX 机构级 + Mercado Bitcoin BRL SC 加密原生级** = 巴西支付层三轨架构。

## Mercado Bitcoin BRL 稳定币

**发行体**: Mercado Bitcoin (巴西最大本土加密交易所, 2013 成立, 2021 软银集团领投估值 $2.1B)

**机制**: BRL-anchored 1:1, 储备为巴西短期国债 (LFT) + 央行存款 + 商业银行存款。储备月度披露由 KPMG Brazil 审计。

**定位**: 不是要替代 DREX, 而是**填 DREX 上线前 (预计 2027-2028 全面上线) 的市场空白**, 同时为 DREX 时代提供"私人 BRL token 与 CBDC 互通"的桥头堡。

**链选择**: Polygon 为主 (受 [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 多层架构]] 中 Polygon 与多个 LatAm 央行的合作背景驱动) + Ethereum (跨境流动性) + Avalanche (DeFi 兼容)。

**用途**: (1) 加密交易所内 BRL pair 替代法币入金延迟; (2) 跨境支付 (向阿根廷 / 乌拉圭 / 巴拉圭 出口商结算 BRL); (3) DeFi 协议 BRL 抵押 / 流动性 mining; (4) Mercado Pago / 其他 fintech 嵌入 BRL token wallet。

## Banxico CoDi × MXNB pilot (墨西哥)

**Banxico (墨西哥央行) 立场**: 不发零售 CBDC、不发批发 CBDC, 但**深化 CoDi**(即时支付二维码协议, 2019 上线) 和 SPEI (银行间即时转账, 2004 上线)。Banxico 行长 Victoria Rodríguez 多次公开表态: "数字比索的本质问题不是技术, 是现有支付系统效率"。这与中国 e-CNY / 巴西 DREX 的强 CBDC 路线**反向**。

**CoDi 2026 状态**:

- 月交易量 ~7,200 万笔 (2026-03), 同比 +120%
- 关键驱动: SPEI 限额从 MXN 8,000 上限下沉到 0, 让小额 CoDi 与 SPEI 形成连续覆盖
- 商户接入数 ~3.5M (2026-05)
- 与 Pix 巴西比仍小 2 个数量级 (Pix 月 60 亿笔), 但增长率高

**MXNB (M0 + Bitso pilot)**:

- 发行体: Bitso 撮合, Mercado Bitcoin (巴西方) 作副 issuer, 底层基础设施 M0 (见 [[fintech/m0-network-infrastructure-update-2026|M0 2026 基础设施更新]])
- 链: Base / Ethereum / Polygon
- 储备: 墨西哥短债 (CETES) + 商业银行 MXN 存款
- 流通 MXN 450M (~$25M, 2026-05), 仍是 pilot 阶段
- 战略意图: 在 Banxico 不发 CBDC 的窗口期, 用 **私人本币 SC + M0 中性基础设施** 构建对抗 USDC/USDT 灰色化的本币防御层

**Bitso 角色**: Bitso 是墨西哥最大加密交易所 + Latam 跨境支付通道 (与 Stellar 长期合作做美墨 remittance)。2024 估值 $2.2B。Bitso 同时:

1. 是 USDC / USDT 最大墨西哥分销商 (无法抑制美元 SC 渗透)
2. 是 MXNB 共同发行方 (主动提供本币替代选项)
3. 是 Banxico CoDi 商户接入网关之一

这种 "三角站位" 让 Bitso 成为墨西哥支付层最关键的市场节点。

## 双轨 (CBDC + 本币 SC) vs 单轨 (灰色美元化)

| 维度 | 巴西 (DREX + BRL SC) | 墨西哥 (CoDi + MXNB) | 阿根廷 (无 CBDC + 灰色 USDT) | 委内瑞拉 (Petro 失败 + USDT) |
|---|---|---|---|---|
| CBDC 路线 | DREX 主动推进 | 无 (Banxico 拒绝) | 无 (政治不稳) | Petro 失败 |
| 本币 SC | Mercado Bitcoin BRL ~$56M | MXNB ~$25M | 几乎无 | 几乎无 |
| 美元 SC 月流入 | ~$4.5B | ~$2.8B | ~$2.5B (相对 GDP 比例最高) | ~$1.2B |
| 即时支付通道 | Pix 60 亿/月 | CoDi 7,200 万/月 | 弱 | 极弱 |
| 监管立场 | 主动 (BCB + CVM 明文框架) | 默许 + 观察 | 矛盾 (中央银行严控, 财政部宽松) | 名义严控, 实际放任 |
| 防美元 SC 效果 | 中 (Pix + DREX 提供本币替代) | 弱 (CoDi 规模小) | 失败 | 失败 |

**核心洞察**: 巴西用 **Pix + DREX + BRL SC** 三层把本币的便利性、可编程性、加密互通性都做到位, 这是当前 EM 国家最完整的"防美元化技术栈"。墨西哥次之 (CoDi + MXNB 还在 scale-up)。阿根廷 / 委内瑞拉则是"放弃本币 → USDT 化"的反例, 与 [[fintech/jurisdiction-list-monetary-protectionism|监管管辖列表 · 货币保护主义]] 中"主权货币崩塌国家"清单一致。

## 与 mBridge / Project Agora 的距离

巴西、墨西哥**都不是 mBridge 六家成员** (见 [[fintech/mbridge-bis-multi-cbdc-overview|mBridge 概览]])。BIS 2025-09 工作论文 (BIS WP No. 1156) 暗示, 拉美的多 CBDC 桥接更可能走 **IADB (Inter-American Development Bank) 主导的区域试点**, 而非加入 mBridge。

DREX 与 mBridge 技术兼容性 (都是 Hyperledger Besu permissioned chain) 让"将来对接"有可能, 但政治上巴西 + 墨西哥与中国主导的 mBridge 联盟保持距离。这与 [[fintech/jurisdiction-list-monetary-protectionism|监管管辖]] 中拉美的"不结盟 + 实用主义"立场一致。

## 与 M0 MXNB pilot 的纵深耦合

MXNB pilot 是 M0 (见 [[fintech/m0-network-infrastructure-update-2026|M0 2026 基础设施更新]]) 第一个**非美元 partner SC**, 也是拉美第一个**完全跑在中性 SC 基础设施上的本币 SC**。这与 Mercado Bitcoin BRL (自有基础设施) 形成对比:

| 维度 | MXNB (M0 基础设施) | Mercado Bitcoin BRL (自建) |
|---|---|---|
| 合规模板 | M0 标准化 + Bitso 本地接入 | Mercado Bitcoin 自家合规栈 |
| 智能合约 | M0 共用 (OpenZeppelin + Trail of Bits + Certora 审计) | 自研 + 自审计 |
| 储备接入 | M0 后端 (CETES + 商业银行存款) | 自家托管 (LFT + 央行存款 + 商业银行存款) |
| 跨链 | M Bridge canonical | LayerZero + 通用桥 |
| 治理 | $M DAO + Bitso/Mercado Bitcoin 实际控制 | Mercado Bitcoin 100% 控制 |
| 监管负担 | 共享 M0 模板降低单方负担 | 单方承担墨西哥/巴西监管负担 |

**含义**: 拉美 2027-2028 可能出现"自建 vs 共享基础设施"的分化 —— 大型本土玩家走自建 (Mercado Bitcoin BRL 模式), 中小玩家走共享 (M0 MXNB 模式)。这是 LatAm 版本的 [[fintech/stablecoin-chain-token-strategy-trilemma|稳定币-链-代币策略三难]]。

## 监管协同与冲突

- **巴西 CVM 2026-04 公告**: 明确 BRL-anchored SC = e-money (NOT 证券), 排除 Howey Test 适用, 给私人本币 SC 明确合规路径
- **巴西 BCB Resolução 2026-006 (草案)**: 提议把"BRL 锚定 SC 流通量"纳入支付系统监管 dashboard, 类似欧盟 MiCA 大型 EMT 限制条款 (见 [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART]])
- **墨西哥 CNBV 2026-Q1 声明**: "对私人本币 SC 持观察 + 不阻止立场, 对外币 SC 不背书"
- **拉美区域 IADB 2026-Q2 报告**: 建议成员国采用"统一本币 SC 监管框架" + "信息共享 KYC/AML 机制"
- **与 [[fintech/fatf-travel-rule-overview|FATF Travel Rule]] 兼容性**: 巴西 + 墨西哥都是 FATF / GAFILAT 成员, BRL/MXN SC 流转跨境时需符合 Travel Rule

## Counterpoints

- **MXNB $25M / BRL SC $56M 规模仍是"信号性"远非"防御性"**: 美元 SC 月流入墨西哥 $2.8B, 巴西 $4.5B, 本币 SC 渗透率 < 1%
- **DREX 距离全面上线 (预计 2027-2028) 还有 1.5-2.5 年, 期间 USDC/USDT 已巩固巴西加密用户心智**
- **墨西哥 Banxico 不发 CBDC** 让"CBDC + 本币 SC 双轨"在墨西哥实际是"只有本币 SC + 弱 CoDi", 防御力弱于巴西
- **拉美用户的实际偏好仍倾向 USDC/USDT**: 心智成本 (品牌认知) + 跨境兼容性 + DeFi 流动性深度三方面本币 SC 难匹敌
- **Mercado Bitcoin BRL SC 的合规模板可能在 BCB Resolução 2026-006 落地后被迫调整** (例如要求储备 100% 在央行直接监管账户), 拉高发行成本
- **拉美政治周期波动**: 巴西 (Lula 任期到 2026 底, 后续政府对加密政策可能转向)、墨西哥 (Sheinbaum 任期到 2030 但 Banxico 行长 6 年任期可能换人) 都让 5 年期监管稳定性存疑
- **mBridge 路径风险**: 如果拉美未来通过 IADB 区域试点引入 mBridge 兼容, 可能被卷入 [[fintech/mbridge-bis-multi-cbdc-overview|mBridge 多 CBDC]] 与美国财政部潜在的政治摩擦

## Open questions

- DREX 全面上线后是否会要求 BRL SC (Mercado Bitcoin) 强制对接 DREX 网络, 失去独立性?
- MXNB 能否在 2026 底突破 $200M, 成为拉美第二个有规模的本币 SC?
- 阿根廷 / 哥伦比亚 / 智利 / 秘鲁 是否会跟随巴西的"DREX + 私人本币 SC"双轨架构?
- 巴西 BCB Resolução 2026-006 落地后, USDC/USDT 在巴西的合规路径会变化吗?
- M0 在 LatAm 是否会继续承接更多本币 SC (COP / ARS / CLP), 形成"中性 SC 基础设施 × LatAm 本币层"网格?
- Bitso 在 USDC / MXNB / CoDi 三个身份之间如何平衡商业利益与本币防御责任?
- 拉美的本币 SC 是否会在 2027-2028 引发 [[fintech/gray-market-dollar-network-formalization|灰色市场美元网络正式化]] 路径的反向 —— 即"灰色美元 → 合规本币"迁移?
- 巴西 + 墨西哥的本币 SC 会否在跨境贸易场景 (Mercosur / 美墨/北美自贸) 之间形成"区域内本币 SC 互换"网络, 类似 [[fintech/mbridge-non-usd-settlement-ring-scale|mBridge 非美元结算环规模]]?

## Related

- [[fintech/INDEX|FinWiki Fintech Index]]
- [[fintech/em-market-crypto-dollarization-pattern|EM 市场加密美元化模式]]
- [[fintech/india-anti-dollar-dpi-alliance|India 反美元 DPI 联盟]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 多层架构三范式]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS 多 CBDC 概览]]
- [[fintech/jurisdiction-list-monetary-protectionism|管辖列表 · 货币保护主义]]
- [[fintech/gray-market-dollar-network-formalization|灰色市场美元网络正式化]]
- [[fintech/m0-network-infrastructure-update-2026|M0 2026 基础设施更新]]
- [[fintech/mbridge-non-usd-settlement-ring-scale|mBridge 非美元结算环规模]]
- [[fintech/stablecoin-chain-token-strategy-trilemma|稳定币-链-代币策略三难]]
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
