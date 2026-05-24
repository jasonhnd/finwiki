---
title: Solana エコシステム DEX 群 — Jupiter / Raydium / Orca / Drift / Phoenix / Meteora 比較
aliases:
  - Solana DEX comparison
  - Jupiter Raydium Orca Drift Phoenix Meteora
  - Solana ecosystem onchain exchanges
domain: exchanges
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-05-19
review_by: 2027-05-19
confidence: likely
tags:
  - exchanges
  - dex
  - solana
  - defi
  - ecosystem
sources:
  - https://jup.ag/
  - https://raydium.io/
  - https://www.orca.so/
status: candidate
---

# Solana エコシステム DEX 群比較


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-dex-major-five-comparison|global dex major five comparison]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 概要

Solana は EVM 系 (Ethereum / L2) と異なる SVM (Sealevel Virtual Machine) 環境上で、独自の DEX 生態系を構築している。トップ層には aggregator (DEX 統合 router) である Jupiter が君臨し、その下に Raydium / Orca / Meteora の 3 大 AMM、さらに perp 専門の Drift と機関向け CLOB の Phoenix が併存する 6 層構造。400ms ブロック + 並列実行 + 低 transaction cost (< $0.001) が、retail mania と memecoin 経済を支える基盤となり、2023-2026 期に急成長を遂げた。EVM 生態系の比較は ([[exchanges/global-dex-major-five-comparison]]) 参照。

## Top 6 protocol プロファイル

- **Jupiter** — aggregator として Solana 全 DEX を統合する router 層。JUP token を 2024-01 に airdrop launch (Solana 史上最大級 retroactive distribution)。Solana DEX 取引量の 70%+ が Jupiter 経由で routing される事実上の入口。
- **Raydium** — 古参 AMM (constant product x*y=k) として 2021 から稼働。RAY token。旧 Serum orderbook integration legacy を持つが、現在は memecoin 上場経路として再活性化。
- **Orca** — concentrated liquidity AMM (Whirlpools 設計、Uniswap v3 類似) を採用。ORCA token。UX フレンドリーな UI で retail 層に強い。
- **Meteora** — DLMM (Dynamic Liquidity Market Maker) と Memecoin プールで急伸。MET token は 2024-2025 確認待ち。Pump.fun 発 memecoin の二次流動性層として機能。
- **Drift Protocol** — perp DEX (oracle pricing + AMM ハイブリッド)。DRIFT token。Solana perp hub として ([[exchanges/global-perp-dex-five-comparison]]) にも掲載。
- **Phoenix** — fully on-chain CLOB (注文書方式) を Solana 上で実現。機関向け low-latency 設計。

## 比較表 (設計 / 用途 / TVL)

| 名称 | 設計 | 主用途 | token |
|---|---|---|---|
| Jupiter | aggregator router | 統合 swap 入口 | JUP |
| Raydium | constant product AMM | 一般 spot + memecoin 上場 | RAY |
| Orca | concentrated liquidity AMM | retail UX swap | ORCA |
| Meteora | DLMM + memecoin プール | memecoin 流動性 | MET (TBD) |
| Drift | oracle + AMM perp | レバレッジ取引 | DRIFT |
| Phoenix | on-chain CLOB | 機関 spot 注文板 | (なし) |

6 設計 (aggregator / 標準 AMM / concentrated / DLMM / perp / CLOB) が並存する点が Solana 生態系の厚みを示す。24h vol は合計 $0.5-2B 規模で、その大半が Jupiter 経由 routing。Solana エコシステム TVL の 30-40% を DEX 群が占有する。

## memecoin 経済学 (Solana 独自)

Solana 独自の現象として、2024- 立ち上がった **Pump.fun** を起点とする memecoin 発行プラットフォームが DEX 取引量を爆発的に押し上げている。Pump.fun で発行 → bonding curve → Raydium / Meteora 上場 → Jupiter swap で即時取引、というパイプラインが確立し、1000+ token/日 規模で新規発行される。高ボラティリティと retail mania が結合し、DEX 取引量の構造的駆動要因となっている。

## 国際比較 — EVM 系との対比

EVM (Uniswap / Curve / Aerodrome) 生態系との対比では、Solana SVM は単一 L1 + 並列実行 + 400ms ブロックにより低 cost + 低遅延を実現する一方、EVM は rollup + sequencer model で多チェーン分散構造を取る。AMM 設計進化系譜は ([[exchanges/amm-design-evolution]])、ve(3,3) governance は ([[exchanges/ve33-governance-mechanism]]) を参照。chain native DEX が先行 incumbent を flip する pattern は ([[exchanges/native-dex-flip-incumbent-pattern]]) に対応。規制 + アクセス面では、国内 VASP は SOL spot 取扱を進めているが ([[exchanges/jvcea-whitelist-listing-timeline]])、Solana DEX 自体への直接アクセスは国内 wallet 経由のみで、CEX 経由の自動 routing は存在しない。cross-chain ルート設計は [[systems/cross-chain-four-poles-overview|cross-chain four poles overview]] と [[exchanges/cross-chain-bridge-cex-deposit-withdrawal|cross-chain bridge × CEX 入出金]] を、perp 横比は [[exchanges/global-perp-dex-five-comparison|global perp DEX 5 社比較]] を併読。
