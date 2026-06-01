---
source: fintech/frax-frxusd-defi-stablecoin
source_hash: 90722eb01b8c51f9
lang: zh
status: machine
fidelity: ok
title: "Frax frxUSD · DeFi 原生稳定币的\"半合规化\"路线"
translated_at: 2026-05-31T06:16:15.704Z
---

# Frax frxUSD · DeFi 原生稳定币的"半合规化"路线

## Wiki route

本条目位于 [[fintech/INDEX|金融科技索引]]。可与 [[fintech/japan-financial-regulation|日本金融监管]] 和 [[fintech/japan-stablecoin-regulatory-landscape|日本稳定币监管格局]] 配套阅读。

> [!info] TL;DR
> Frax Finance v3  升级（2024-Q2）以 frxUSD 替代旧版 FRAX，采用"**100% UST 准备金 + DAO 治理**"双轨路线——前者满足 §501  合规准备金要求，后者维持 DeFi 原生的去中心化治理。frxUSD 市值 **$1.2B**（2026-Q1），远小于 Sky USDS，但质押版 sfrxUSD 的 **7-9% APY** 在 DeFi 原生稳定币中位居首位。**2026-Q2  frxUSD 与 BlackRock BUIDL 约 $200M 完成对接**，成为首个直接持有 BUIDL 的 DeFi 协议 → §501  时代"半合规化"的代表性方案。

## 关键事实

- frxUSD 市值 **$1.2B**（2026-Q1）· sfrxUSD APY **7-9%**（跟随 SOFR + Frax 内部收益） ^[extracted]
- RWA 担保约 $1.0B（其中 BUIDL 约 $200M · 2026-Q2  对接） ^[extracted]
- Fraxtal L2  TVL **$450M**（Frax 自建 L2  · Optimism Superchain 成员 · 2024-02  上线） ^[extracted]
- FXS 代币市值约 $300M · veFXS 锁仓约 6500 万 FXS（占流通量 45%） ^[extracted]
- Frax 协议年收益约 **$45M**（2025  估计） ^[extracted]
- Frax Ether（frxETH）市值约 $700M · FPI（Frax CPI 锚定）市值约 $80M ^[extracted]
- v3  升级 3  要点：以 frxUSD 替代 FRAX / sfrxUSD 质押 / Fraxtal L2  ^[extracted]

## 运作机制

Frax 走中间路线：**准备金合规（[[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] + UST）+ 治理去中心化（veFXS DAO）**。有别于 Circle/Paxos 的完全合规（失去去中心化基因），也有别于 Sky USDS 的完全去中心化（失去合规渠道）。Sam Kazemian 于 2024-09  公开表明"frxUSD 走混合路线"。机制如下：用户存入 frxUSD → 获得 sfrxUSD → 自动获得 7-9% 收益（来自 SOFR + Frax 内部收益策略 + BUIDL 直接持有收益）。Fraxtal L2  = 以 frxUSD 为原生 gas 资产，**通过内部循环锁定流动性** —— 用户在 Fraxtal 上转账时消耗 frxUSD 而非 ETH 作为 gas，Frax 协议捕获全部 gas 经济，与 [[fintech/stablecoin-chain-token-strategy-trilemma|ステーブルコイン-チェーン-トークン戦略のトリレンマ]] 中"自有链捕获"极一致。与 [[fintech/sky-usds-decentralized-stablecoin|Sky USDS]] 形成镜像：Sky 走子 DAO 分散监管路线，Frax 通过准备金向 BUIDL 靠拢 —— 两者代表 §501  时代 DeFi 稳定币的 2  种生存策略。

## 起源与演变

Frax 旧版 FRAX 于 2020  上线（部分准备金 + 算法稳定币混合型）。2022-2023  UST/Luna 崩盘后市场对算法稳定币警惕性提升，Frax 主动从算法部分退场。**2024-Q2  v3  升级**：以 frxUSD 替代 FRAX，准备金从 USDC + 算法迁移至 100% UST + RWA。**2024-02  Fraxtal L2  上线**（原 Frax Chain · OP Superchain 成员）。2025  sfrxUSD 7-9% APY 超越同类去中心化稳定币。**2026-Q2  frxUSD vault 直接持有 BUIDL 约 $200M** = 首个直接持有 BUIDL 的 DeFi 协议（非通过 RWA 的间接 vault）。由此，frxUSD 推进至"半合规白圈"边缘 —— **准备金 100% 持有白圈资产，但发行方为 veFXS DAO**，[[fintech/genius-act-501-denylist-mandate|GENIUS §501]] 灰色合规。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS]]
- [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL SC issuer 採用マトリクス]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/three-circles-stablecoin-mra-framework|ステーブルコイン三円 MRA]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 加密文化の分離]]
<!-- /wiki-links:managed -->

## Sources
