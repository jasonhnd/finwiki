---
title: Sky USDS · §501 时代最大去中心化稳定币尝试 · MakerDAO 重塑
aliases: [sky-usds-decentralized-stablecoin, USDS, Sky, MakerDAO rebrand]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [fintech, stablecoin, sky, makerdao, usds, decentralized-sc, genius-501, endgame]
sources: []
status: candidate
---

# Sky USDS · §501 时代最大去中心化稳定币尝试 · MakerDAO 重塑


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> Sky (2024-09 由 MakerDAO 重塑) 发行 USDS, 从 DAI ($4B 衰减) 向 USDS 迁移 (2026-Q1 USDS **$8.5B** · 合计 $12.5B). 是 GENIUS §501 时代**唯一仍坚持去中心化路线的大体量 SC**——通过 sUSDS (质押版 5-8% APY) + Spark Protocol (DeFi 子协议 $3.2B TVL) + Endgame Subdao 分裂三招应对 §501 合规压力。**变相合规**: sUSDS 通过 RWA vault 间接持有 ~$300M BlackRock BUIDL,削弱去中心化纯度但提高真实美元锚定能力。

## Key facts

- USDS MCap **$8.5B** + DAI legacy **$4B** = Sky 合计 **$12.5B** (2026-Q1) ^[extracted]
- sUSDS APY 5-8% (SSR · 跟随 fed funds rate) ^[extracted]
- Spark Protocol TVL **$3.2B** · Sky 年收入 ~$60M ^[extracted]
- RWA 抵押 ~$1.5B (其中 BUIDL ~$300M 间接) ^[extracted]
- SKY 代币 MCap ~**$1.8B** · MKR 1:24000 转换 ^[extracted]
- 2024-09 MakerDAO → Sky 重塑 (Endgame 升级第 1 阶段) ^[extracted]
- 2026-Q1 Sky × Solana 集成完成 (跨非 EVM 用户扩展) ^[extracted]
- 主要 Subdao: Spark / Bloom / Sparkrock / Janus ^[extracted]

## Mechanism / How it works

Endgame 三招应对 §501: (1) **sUSDS 质押** = 用户存 USDS → sUSDS → 自动 5-8% yield (类 Coinbase × USDC 但合规路径不同,以 SSR 形式给 SC 持有人); (2) **Subdao 分裂** = Spark/Bloom 等子协议独立 token + 独立治理 → 分散监管风险; (3) **RWA vault 间接持有 BUIDL** = 通过去中心化 vault 接入 BlackRock 合规储备,变相获得机构级抵押。**与 §501 的张力**: GENIUS Act §501 要求 SC issuer 注册 + 100% 储备 + 不付利息。Sky Endgame 押注"完全去中心化 SC 不属于 §501 SC issuer 监管范围" → 若 SEC/Treasury 2027-2028 认定 USDS 仍属"受监管 SC", Sky 必须强制合规或退出美国市场。

## Origin & evolution

2017-12 MakerDAO DAI 上线 (DeFi 时代最重要的去中心化美元 · 2021 峰值 $10B). 2023 GENIUS Act 进入立法讨论后,DAI 法律地位变得模糊. **2024-09 Endgame 升级第 1 阶段** = MakerDAO → Sky 重塑 · DAI → USDS 双轨迁移. 2024-09 创始人 Rune Christensen 公开声明 "GENIUS Act 不适用于完全去中心化的 SC", 拒绝走 Circle / Paxos 的合规路径. 2025 sUSDS 上线 + Spark Protocol 成 DeFi 借贷前 5. 2026-Q1 Solana 集成 + RWA vault 间接持 BUIDL ~$300M. **5 年衰减期**: Sky 内部时间表是 5 年内让 DAI 自然衰减到 < $500M,完成 USDS 单轨化。

## Counterpoints

"间接持 BUIDL" 削弱了 Sky 的去中心化叙事——本质上 Sky 用户的 USDS 储备最终在 BlackRock 合规账户中. Vitalik Buterin 公开倡导 DAI/USDS 类去中心化 SC, 也承认这种 RWA 化趋势的两难. SKY token 治理活跃地址仅 ~2500, 远低于 Sky 主张的"真正去中心化"门槛. **DeFi 历史集成层 lock-in**: 数百个协议、数千合约硬编码 DAI 地址,Sky 选择"双轨 + 缓慢自然衰减"是路径依赖的理性选择,但也意味着 5 年内 Sky 必须同时维护两个 SC 合约系统. **与 Tether 灰圈不同**: Sky 通过技术去中心化主张"无 issuer 可监管",Tether 通过 jurisdictional 选择 (萨尔瓦多/BVI) → 两条路径都是 §501 灰区生存策略,但 Sky 更脆弱。

## Open questions

SEC/Treasury 2027-2028 会否专门立法定义 "去中心化 SC" 监管边界?Sky × Solana 跨链后,跨链桥引入新的中心化攻击面是否动摇去中心化主张?5 年衰减期内 DAI 是否会被市场恐慌挤兑触发提前 unwind?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/frax-frxusd-defi-stablecoin|Frax frxUSD]]
- [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL SC issuer 采用矩阵]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/three-circles-stablecoin-mra-framework|稳定币三圆 MRA]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|链上金融 vs 加密文化分离]]
<!-- /wiki-links:managed -->

## Sources

