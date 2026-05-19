---
title: Frax frxUSD · DeFi 原生稳定币的"半合规化"路线
aliases: [frax-frxusd-defi-stablecoin, frxUSD, Frax v3, sfrxUSD]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [fintech, stablecoin, frax, frxusd, sfrxusd, defi, decentralized-sc, genius-501, fraxtal]
sources: []
status: candidate
---

# Frax frxUSD · DeFi 原生稳定币的"半合规化"路线

> [!info] TL;DR
> Frax Finance v3 升级 (2024-Q2) 推出 frxUSD 取代原 FRAX,采用 "**100% UST 储备 + DAO 治理**" 双轨——前者满足 §501 合规储备要求,后者保留 DeFi 原生去中心化治理。frxUSD MCap **$1.2B** (2026-Q1) 远小于 Sky USDS,但 sfrxUSD (质押版) **7-9% APY** 是 DeFi 原生 SC 中最高。**2026-Q2 frxUSD 接入 BlackRock BUIDL ~$200M**,首个 DeFi 协议直持 BUIDL → §501 时代 "半合规化" 代表方案。

## Key facts

- frxUSD MCap **$1.2B** (2026-Q1) · sfrxUSD APY **7-9%** (跟随 SOFR + Frax 内部收益) ^[extracted]
- RWA 抵押 ~$1.0B (其中 BUIDL ~$200M · 2026-Q2 接入) ^[extracted]
- Fraxtal L2 TVL **$450M** (Frax 自有 L2 · Optimism Superchain 成员 · 2024-02 上线) ^[extracted]
- FXS 代币 MCap ~$300M · veFXS 锁定 ~6500 万 FXS (45% 流通) ^[extracted]
- Frax 协议年收入 ~**$45M** (2025 估算) ^[extracted]
- Frax Ether (frxETH) MCap ~$700M · FPI (Frax CPI 锚定) MCap ~$80M ^[extracted]
- v3 升级三招: frxUSD 替换 FRAX / sfrxUSD 质押 / Fraxtal L2 ^[extracted]

## Mechanism / How it works

Frax 走中间路线: **储备合规 (BUIDL + UST) + 治理去中心化 (veFXS DAO)**. 与 Circle/Paxos 完全合规不同 (失去去中心化基因), 也与 Sky USDS 完全去中心化不同 (失去合规通道). Sam Kazemian 2024-09 公开声明 "frxUSD 走 hybrid 路线"。机制: 用户存 frxUSD → 收 sfrxUSD → 自动 7-9% yield (来自 SOFR + Frax 内部 yield 策略 + BUIDL 直持收益). Fraxtal L2 = frxUSD 作 native gas 资产, **内部循环锁定流动性** —— 用户在 Fraxtal 上转账消耗 frxUSD 作 gas,而非 ETH,Frax 协议 capture 全部 gas 经济。 与 [[fintech/sky-usds-decentralized-stablecoin|Sky USDS]] 形成镜像: Sky 走 Subdao 分散监管, Frax 走储备靠拢 BUIDL —— 两者代表 DeFi SC 在 §501 时代的两种生存策略。

## Origin & evolution

Frax 原 FRAX 2020 上线 (部分储备 + 算法稳定币 hybrid). 2022-2023 受 UST/Luna 崩盘后市场对算法 SC 的高度警惕影响, Frax 主动从算法部分撤出. **2024-Q2 v3 升级**: frxUSD 替换 FRAX, 储备从 USDC + 算法迁到 100% UST + RWA. **2024-02 Fraxtal L2 上线** (原 Frax Chain · OP Superchain 成员). 2025 sfrxUSD 7-9% APY 跑赢同类去中心化 SC. **2026-Q2 frxUSD vault 直持 BUIDL ~$200M** = 首个 DeFi 协议直接持 BUIDL (不通过 RWA 间接 vault). 这把 frxUSD 推进到 "半合规白圈" 边缘 —— **储备 100% 在白圈资产, 但 issuer 是 veFXS DAO**, GENIUS §501 灰色合规。

## Counterpoints

frxUSD $1.2B 在 §501 时代仍是利基产品 (USDC $60B / USDS $8.5B / USDT $145B). veFXS 治理锁定量虽高 (45% 流通) 但活跃地址少, 实际治理由少数核心持有人主导, "去中心化" 名义大于实质. Fraxtal L2 TVL $450M 距离 Base $20B / Arbitrum $30B 差距巨大, 内部循环规模偏小. **法律风险**: 若 SEC/Treasury 在 2027-2028 把 "issuer = 实际控制者" 定义放在 veFXS DAO 上, Frax 必须强制合规. sfrxUSD 高 APY 部分来自 Pendle / Convex 二级市场杠杆,在压力测试下脆弱。

## Open questions

Frax 直持 BUIDL 是否会引发 BlackRock 对 KYC / Reg D 506(c) 的额外限制 (vault 是合约不是机构投资人)?Fraxtal L2 能否在 2027 突破 $2B TVL 形成内部循环规模?Liquity LUSD / GHO / crvUSD 等小型去中心化 SC 是否会跟随 Frax "半合规化" 路线?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS]]
- [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL SC issuer 采用矩阵]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/three-circles-stablecoin-mra-framework|稳定币三圆 MRA]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|链上金融 vs 加密文化分离]]
<!-- /wiki-links:managed -->

## Sources

