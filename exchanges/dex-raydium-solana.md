---
title: Raydium — Solana 系老舗 AMM / memecoin 流動性 hub
aliases:
  - Raydium
  - RAY
  - Raydium AMM
domain: exchanges
slug: dex-raydium-solana
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2027-05-25
confidence: likely
tags:
  - exchanges
  - dex
  - solana
  - amm
  - memecoin
status: active
sources:
  - 公開情報整理 (Raydium 公式 docs / Whitepaper, raydium.io)
  - 公開情報整理 (DefiLlama Raydium TVL/Volume データ, 2024-2026)
  - 公開情報整理 (Solana Foundation エコシステム発表 / Serum 終焉時系列, 2022-12)
  - 公開情報整理 (Pump.fun × Raydium bonding curve 連動仕様, 2024-2025)
---

# Raydium — Solana 系老舗 AMM / memecoin 流動性 hub overview


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/solana-ecosystem-dex-comparison|Solana エコシステム DEX 群比較]] for the Solana peer context, [[exchanges/global-dex-major-five-comparison|global DEX major five comparison]] for EVM 対比, and [[exchanges/amm-design-evolution|AMM 設計進化系譜]] for the broader system / design boundary.

> 2021-02 ローンチ · RAY token · constant product (x*y=k) AMM · 旧 Serum integration legacy · 現在は memecoin 流動性 hub

## 1. プロトコル概要

- **チェーン**：Solana L1（SVM 環境）
- **モデル**：constant product AMM（x*y=k）+ concentrated liquidity（CLMM）+ 旧 Serum/OpenBook orderbook ハイブリッド（legacy）
- **ローンチ**：2021-02-21
- **トークン**：RAY（governance / fee accrual / staking）
- **公式 URL**：raydium.io
- **TVL（2024–2026 概観）**：$1.5–2.5B レンジで推移、Solana DEX TVL の 20–30% を継続的に占有

## 2. 設計上の特徴（Serum legacy → OpenBook 移行 → 自前 CLMM）

Raydium は当初、Solana 上の **Serum 中央オーダーブック** に流動性を供給する「AMM-on-orderbook」設計で差別化していた。これは Solana 独自の高速 CLOB（Serum）と AMM の双方向アービトラージを自動化する仕組みで、EVM 系には類似がない設計。

- **2021–2022**：Serum CLOB + Raydium AMM のハイブリッド時代
- **2022-11**：FTX 破綻に伴い Serum（FTX 創業チーム主導）が事実上凍結
- **2022-12**：Solana コミュニティが Serum を fork し [[exchanges/openbook-fork-solana|OpenBook]] として継続。Raydium は OpenBook 連携に切替
- **2023 以降**：自前の **Concentrated Liquidity Market Maker（CLMM）** を実装。Uniswap v3 類似の集中流動性プールを提供
- **現在**：standard AMM + CLMM + OpenBook hook の 3 層併存

## 3. memecoin 経済における役割

Raydium が 2024–2026 年に最大の存在感を発揮しているのは **Pump.fun 連動の memecoin 上場経路** として。

- **Pump.fun bonding curve**：新規 memecoin が curve 上で約 $69k の market cap に到達すると、自動的に Raydium プールにマイグレーション
- **migration fee**：約 6 SOL（プロトコル徴収）+ Raydium 側 listing
- **結果**：Raydium 上の memecoin プール数が **1000+/日** ペースで増加（2024-Q4–2025）
- **流動性 routing**：Jupiter aggregator が Raydium プールを優先 routing するため、memecoin の事実上のデフォルト上場場所

## 4. Orca / Meteora との比較

| 項目 | Raydium | Orca | Meteora |
|---|---|---|---|
| 設計 | constant product + CLMM + orderbook hook | 集中流動性（Whirlpools） | DLMM（Dynamic Liquidity） |
| 主用途 | memecoin + 一般 spot | リテール向けスワップ | memecoin + 高度 LP |
| token | RAY | ORCA | MET（未発行 / 公開情報なし） |
| TVL 規模 | $1.5–2.5B | $300–500M | $400–800M |
| 強み | memecoin migration、aggregator 経由量 | UX、安定 LP | LP 効率、dynamic fee |

## 5. 主要事件・沿革

- **2021-02-21**：Raydium メインネットローンチ
- **2021-03–2022**：Serum AMM-on-orderbook 設計で急成長、Solana DeFi summer の中心
- **2022-11**：FTX 破綻 → Serum 凍結 → Raydium 暫定対応
- **2022-12**：OpenBook fork 開始
- **2023**：CLMM 実装、自前流動性層への移行
- **2023-12**：プロトコルハッキング（admin key 漏洩、約 $4.4M 損失）。修復・補償実施
- **2024-Q3 以降**：Pump.fun との migration 連動で memecoin hub 化
- **2025–2026**：Solana memecoin マニア期において Jupiter 経由 routing の中心 DEX として君臨

## 6. ガバナンス・経済モデル

- **RAY**：総供給 555M、staking で fee share 受給
- **fee 構造**：標準 0.25%（うち 0.22% LP、0.03% RAY staker への buy-back）
- **CLMM プール**：fee tier 選択可（0.01% / 0.05% / 0.25% / 1%）
- **governance**：オンチェーン投票よりもチーム主導、トークン分散度は比較的低い

## Related

- [[exchanges/solana-ecosystem-dex-comparison]] — Solana DEX 比較（最重要 cross-link）
- [[exchanges/dex-orca-solana]] — Solana 競合 AMM
- [[exchanges/global-dex-major-five-comparison]] — EVM DEX 対比
- [[exchanges/amm-design-evolution]] — AMM 設計進化
- [[exchanges/native-dex-flip-incumbent-pattern]] — 先行 DEX flip パターン
- [[exchanges/INDEX]] — 取引所ドメインインデックス
- [[exchanges/global-dex-major-five-comparison]] — グローバル DEX 比較

## Sources

- 公開情報整理 (Raydium 公式 docs, raydium.io)
- 公開情報整理 (DefiLlama Raydium ダッシュボード TVL/Volume)
- 公開情報整理 (Solana Foundation Serum 終焉時系列 / OpenBook fork 経緯)
- 公開情報整理 (Pump.fun ホワイトペーパー / Raydium migration 仕様)
- 公開情報整理 (Raydium 2023-12 admin key incident postmortem)
