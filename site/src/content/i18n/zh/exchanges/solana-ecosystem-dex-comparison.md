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

## Wiki 路径

本条目位于 [[exchanges/INDEX|exchanges index]] 之下。可与 [[exchanges/global-dex-major-five-comparison|全球五大 DEX 比较]] 对照阅读，并结合 [[exchanges/fsa-vasp-registration-system|FSA 暗号资产交换业登记制度]] 理解更广的系统与监管边界。

## 概要

Solana 在不同于 EVM 系（Ethereum / L2）的 SVM（Sealevel Virtual Machine）环境上，构建了独有的 DEX 生态系统。顶层是作为 DEX 聚合路由器的 Jupiter，其下并存 Raydium、Orca、Meteora 三大 AMM，又有专注永续合约的 Drift 与面向机构的 CLOB Phoenix，形成六层结构。400ms 出块、并行执行和低交易成本（低于 0.001 美元）构成支撑散户热潮与 memecoin 经济的基础，并在 2023-2026 年实现快速成长。EVM 生态系统比较参见 [[exchanges/global-dex-major-five-comparison]]。

## 六大协议概况

- **Jupiter** — 作为 aggregator 整合 Solana 全部 DEX 的 router 层。JUP token 于 2024-01 进行 airdrop launch (Solana 史上最大级别的 retroactive distribution)。Solana DEX 交易量的 70%+ 经由 Jupiter routing，是事实上的入口。
- **Raydium** — 作为老牌 AMM (constant product x*y=k) 自 2021 起运行。RAY token。拥有旧 Serum orderbook integration 的 legacy，现在则作为 memecoin 上市路径重新活跃。
- **Orca** — 采用 concentrated liquidity AMM (Whirlpools 设计、类似 Uniswap v3 )。ORCA token。以 UX 友好的 UI 在 retail 层颇有优势。
- **Meteora** — 凭借 DLMM（Dynamic Liquidity Market Maker）与 memecoin 池急速扩张。MET token 待 2024-2025 确认。作为 Pump.fun 发行 memecoin 的二次流动性层发挥作用。
- **Drift Protocol** — 永续合约 DEX，采用 oracle pricing + AMM 混合设计。DRIFT token。作为 Solana 永续合约枢纽也收录于 [[exchanges/global-perp-dex-five-comparison]]。
- **Phoenix** — 在 Solana 上实现 fully on-chain CLOB (订单簿方式)。面向机构的 low-latency 设计。

## 比较表 (设计 / 用途 / TVL)

| 名称 | 设计 | 主用途 | token |
|---|---|---|---|
| Jupiter | aggregator router | 整合 swap 入口 | JUP |
| Raydium | constant product AMM | 一般 spot + memecoin 上市 | RAY |
| Orca | concentrated liquidity AMM | retail UX swap | ORCA |
| Meteora | DLMM + memecoin 池 | memecoin 流动性 | MET（参考公开资料未明确披露） |
| Drift | oracle + AMM perp | 杠杆交易 | DRIFT |
| Phoenix | on-chain CLOB | 机构 spot 订单板 | (无) |

6 设计 (aggregator / 标准 AMM / concentrated / DLMM / perp / CLOB) 并存这一点，显示出 Solana 生态系统的厚度。24h vol 合计为 $0.5-2B 规模，其大半经由 Jupiter routing。Solana 生态系统 TVL 的 30-40% 由 DEX 群占据。

## memecoin 经济学 (Solana 独有)

作为 Solana 独有的现象，以 2024- 启动的 **Pump.fun** 为起点的 memecoin 发行平台正爆发性地推高 DEX 交易量。Pump.fun 发行 → bonding curve → Raydium / Meteora 上市 → Jupiter swap 即时交易，这一管线已确立，以 1000+ token/日 的规模新发行。高波动性与 retail mania 相结合，成为 DEX 交易量的结构性驱动因素。

## 国际比较 — 与 EVM 系的对比

在与 EVM（Uniswap / Curve / Aerodrome）生态系统的对比中，Solana SVM 凭借单一 L1、并行执行和 400ms 出块实现低成本与低延迟；EVM 则采取 rollup + sequencer model 的多链分散结构。AMM 设计进化谱系参见 [[exchanges/amm-design-evolution]]，ve(3,3) governance 参见 [[exchanges/ve33-governance-mechanism]]。chain-native DEX 翻转先发 incumbent 的模式对应 [[exchanges/native-dex-flip-incumbent-pattern]]。在监管和接入层面，日本国内 VASP 正推进 SOL spot 交易（[[exchanges/jvcea-whitelist-listing-timeline]]），但对 Solana DEX 本身的直接接入主要经由国内钱包，不存在经由 CEX 的自动路由。跨链路由设计请并读 [[systems/cross-chain-four-poles-overview|cross-chain four poles overview]] 与 [[exchanges/cross-chain-bridge-cex-deposit-withdrawal|cross-chain bridge x CEX deposit / withdrawal]]，永续合约横向比较请并读 [[exchanges/global-perp-dex-five-comparison|global perp DEX comparison]]。
