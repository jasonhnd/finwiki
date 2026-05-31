---
source: exchanges/solana-ecosystem-dex-comparison
source_hash: 69306c395dbb59cb
lang: zh
status: machine
fidelity: ok
title: "Solana 生态系统 DEX 群比较"
translated_at: 2026-05-31T05:31:05.778Z
---

# Solana 生态系统 DEX 群比较

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-dex-major-five-comparison|global dex major five comparison]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 概要

Solana 在不同于 EVM 系 (Ethereum / L2) 的 SVM (Sealevel Virtual Machine) 环境上，构建了独有的 DEX 生态系统。顶层由作为 aggregator (DEX 聚合 router) 的 Jupiter 君临，其下并存着 Raydium / Orca / Meteora 这 3 大 AMM，更有 perp 专门的 Drift 与面向机构的 CLOB Phoenix 的 6 层结构。400ms 出块 + 并行执行 + 低 transaction cost (< $0.001) 成为支撑 retail mania 与 memecoin 经济的基础，在 2023-2026 期间实现了急速成长。EVM 生态系统的比较参见 ([[exchanges/global-dex-major-five-comparison]])。

## Top 6 protocol 概况

- **Jupiter** — 作为 aggregator 整合 Solana 全部 DEX 的 router 层。JUP token 于 2024-01 进行 airdrop launch (Solana 史上最大级别的 retroactive distribution)。Solana DEX 交易量的 70%+ 经由 Jupiter routing，是事实上的入口。
- **Raydium** — 作为老牌 AMM (constant product x*y=k) 自 2021 起运行。RAY token。拥有旧 Serum orderbook integration 的 legacy，现在则作为 memecoin 上市路径重新活跃。
- **Orca** — 采用 concentrated liquidity AMM (Whirlpools 设计、类似 Uniswap v3 )。ORCA token。以 UX 友好的 UI 在 retail 层颇有优势。
- **Meteora** — 凭借 DLMM (Dynamic Liquidity Market Maker) 与 Memecoin 池急速扩张。MET token 待 2024-2025 确认。作为 Pump.fun 发行 memecoin 的二次流动性层发挥作用。
- **Drift Protocol** — perp DEX (oracle pricing + AMM 混合)。DRIFT token。作为 Solana perp hub 也收录于 ([[exchanges/global-perp-dex-five-comparison]])。
- **Phoenix** — 在 Solana 上实现 fully on-chain CLOB (订单簿方式)。面向机构的 low-latency 设计。

## 比较表 (设计 / 用途 / TVL)

| 名称 | 设计 | 主用途 | token |
|---|---|---|---|
| Jupiter | aggregator router | 整合 swap 入口 | JUP |
| Raydium | constant product AMM | 一般 spot + memecoin 上市 | RAY |
| Orca | concentrated liquidity AMM | retail UX swap | ORCA |
| Meteora | DLMM + memecoin 池 | memecoin 流动性 | MET (TBD) |
| Drift | oracle + AMM perp | 杠杆交易 | DRIFT |
| Phoenix | on-chain CLOB | 机构 spot 订单板 | (无) |

6 设计 (aggregator / 标准 AMM / concentrated / DLMM / perp / CLOB) 并存这一点，显示出 Solana 生态系统的厚度。24h vol 合计为 $0.5-2B 规模，其大半经由 Jupiter routing。Solana 生态系统 TVL 的 30-40% 由 DEX 群占据。

## memecoin 经济学 (Solana 独有)

作为 Solana 独有的现象，以 2024- 启动的 **Pump.fun** 为起点的 memecoin 发行平台正爆发性地推高 DEX 交易量。Pump.fun 发行 → bonding curve → Raydium / Meteora 上市 → Jupiter swap 即时交易，这一管线已确立，以 1000+ token/日 的规模新发行。高波动性与 retail mania 相结合，成为 DEX 交易量的结构性驱动因素。

## 国际比较 — 与 EVM 系的对比

在与 EVM (Uniswap / Curve / Aerodrome) 生态系统的对比中，Solana SVM 凭借单一 L1 + 并行执行 + 400ms 出块实现低 cost + 低延迟，另一方面，EVM 采取 rollup + sequencer model 的多链分散结构。AMM 设计进化谱系参见 ([[exchanges/amm-design-evolution]])，ve(3,3) governance 参见 ([[exchanges/ve33-governance-mechanism]])。chain native DEX 翻转先行 incumbent 的 pattern 对应于 ([[exchanges/native-dex-flip-incumbent-pattern]])。在监管 + 接入层面，国内 VASP 正推进 SOL spot 交易 ([[exchanges/jvcea-whitelist-listing-timeline]])，但对 Solana DEX 本身的直接接入仅经由国内 wallet，不存在经由 CEX 的自动 routing。cross-chain 路由设计请并读 [[systems/cross-chain-four-poles-overview|cross-chain four poles overview]] 与 [[exchanges/cross-chain-bridge-cex-deposit-withdrawal|cross-chain bridge × CEX 入出金]]，perp 横向比较请并读 [[exchanges/global-perp-dex-five-comparison|global perp DEX 5 社比較]]。
