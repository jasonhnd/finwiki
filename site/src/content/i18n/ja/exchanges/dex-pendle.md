---
source: exchanges/dex-pendle
source_hash: 250618c944525932
lang: ja
status: machine
fidelity: ok
title: "Pendle Finance — 利回りトークン化プロトコル（PT/YT）概要"
translated_at: 2026-06-02T12:19:04.232Z
---
﻿
# Pendle Finance — 利回りトークン化プロトコル（PT/YT）概要


## ウィキ上の位置づけ

このエントリは [[exchanges/INDEX|exchanges index]] 配下に位置する。隣接する DEX 比較対象の文脈については [[exchanges/global-dex-major-five-comparison|global DEX major five comparison]]、より広いシステム上・設計上の境界については [[exchanges/amm-design-evolution|AMM 設計進化系譜]]、トークンエコノミーの対比については [[exchanges/cex-native-token-strategy-comparison|CEX native token strategy comparison]] とあわせて読む。

> 2021 ローンチ · multi-chain（Ethereum, Arbitrum, BNB, Mantle, Berachain, Sonic 等）· PENDLE token · yield-bearing asset を **PT（元本）+ YT（利回り）** に分離

## 1. プロトコル概要

- **チェーン**：Ethereum メインネット中心、Arbitrum / BNB Chain / Mantle / Berachain / Sonic 等にも展開
- **モデル**：yield tokenization（利回りトークン化）
- **ローンチ**：2021-06
- **トークン**：PENDLE（governance + vePENDLE による fee share）
- **公式 URL**：pendle.finance
- **TVL（2024–2026 概観）**：$3–7B レンジ、yield tokenization 分野で圧倒的首位

## 2. PT / YT メカニズム

Pendle のコア設計は yield-bearing asset（例：stETH、sDAI、USDe、sfrxETH）を **2 つのトークンに分離** する：

| トークン | 意味 | 価格挙動 |
|---|---|---|
| **PT（Principal Token）** | 元本相当部分（満期で原資産 1:1 交換可） | satisfaction yield 込みで割引価格、満期で 1.0 に収束 |
| **YT（Yield Token）** | 満期までの利回り受取権 | 残存期間と利回り期待値で価格決定、満期でゼロ |

これにより以下の戦略が可能：

- **PT を購入** → 「固定利回り」を確保（DeFi 版ゼロクーポン債）
- **YT を購入** → 「利回りに対するロング」、レバレッジ的に利回り変動を取りに行く
- **YT を売却** → 自分の利回りを即時現金化（forward yield selling）

## 3. 主要対応資産（2024–2026）

Pendle は yield-bearing asset の集中点として、主要 DeFi プロトコルと統合：

- **Lido stETH**（Ethereum LST）：最初期からの基幹市場
- **Maker sDAI**（Savings DAI）：stablecoin 利回り市場
- **Ethena USDe / sUSDe**（synthetic dollar）：2024 年に Pendle TVL を $1B → $5B+ に押し上げた決定的市場
- **Frax sfrxETH**：LST 市場
- **Aave aTokens**：lending 利回り市場
- **EigenLayer LRT 群**（eETH / pufETH / ezETH / rsETH 等）：2024 年に restaking 利回り市場で爆発的拡大

特に **Ethena USDe** との統合（2024 年）が Pendle TVL 急増の主要因。USDe holder が sUSDe を Pendle に持ち込み、固定利回り取得 + Sats（Ethena ポイント）受領のダブル戦略が成立した。

## 4. AMM 設計（カスタム curve）

Pendle 内部 AMM は **PT-asset ペア** の swap に最適化された独自 curve：

- 満期接近に伴い PT 価格が 1.0 に収束する性質を curve に組み込み
- LP は IL（変動損失）を最小化、satisfaction yield を継続的に獲得
- v2 では **time-decaying AMM** を導入、PT の理論価格に curve がフィット
- LP には swap fee + PENDLE incentive 配布

## 5. vePENDLE 経済

- **PENDLE token**：governance + ve（vote-escrow）モデル
- **vePENDLE**：PENDLE を最大 2 年ロックで取得
- **vePENDLE 保有者の権利**：プロトコル fee share、各プールへの emission 配分投票（gauge voting）、boost
- ve(3,3) governance design（[[exchanges/amm-design-evolution]] 参照）の variant として、Curve / Convex モデルを参考に設計
- bribe market（vlPENDLE への外部 incentive 提供）も成立、Equilibria / Penpie 等の booster プロトコル経由

## 6. 主要事件・沿革

- **2021-06**：Pendle v1 ローンチ
- **2022–2023**：DeFi 冬の時代に TVL 低迷、$50–200M レンジで耐久
- **2023-Q4**：LST 利回り市場拡大に伴い TVL 復活、$500M 突破
- **2024-Q1–Q2**：Ethena USDe 統合で **TVL $1B → $5B** へ急増。Pendle の構造的転換点
- **2024-Q3–Q4**：EigenLayer LRT 群の対応で更に拡大
- **2025**：Boros 開発開始（perpetual yield trading 拡張）
- **2025–2026**：multi-chain 展開加速（Berachain / Sonic / Mantle 等）

## 7. 国際比較・クロスチェーン 戦略

Pendle は yield tokenization 分野で類似プロトコル（Element Finance 撤退、Tempus 撤退、Sense Finance 規模小）を圧倒し、**事実上の独占的地位** を確立。EVM 系の固定利回り市場の代表格として機能している。

Solana 側には類似機能を持つプロトコルが少なく（[[exchanges/solana-ecosystem-dex-comparison]] では類似機能は限定的）、EVM 系の固有強みとなっている。Pendle は Ethereum L1 を中核に Arbitrum / BNB / Mantle / Berachain / Sonic 等へ展開、各チェーンの主要 yield-bearing asset を取り込む multi-chain 戦略。

## 関連項目

- [[exchanges/global-dex-major-five-comparison]] — グローバル DEX 比較
- [[exchanges/amm-design-evolution]] — AMM 設計進化（ve(3,3) 系譜）
- [[exchanges/dex-raydium-solana]] — 別チェーン主要 DEX
- [[exchanges/dex-orca-solana]] — 別チェーン主要 DEX
- [[exchanges/dex-jito-solana]] — LST 系（JitoSOL）対比
- [[exchanges/INDEX]] — 取引所ドメインインデックス
- [[exchanges/native-dex-flip-incumbent-pattern]] — DEX flip パターン

## 出典

- 公開情報整理 (Pendle 公式 docs / whitepaper, pendle.finance)
- 公開情報整理 (DefiLlama Pendle ダッシュボード TVL / Volume)
- 公開情報整理 (Ethena Labs USDe × Pendle 統合公式発表, 2024)
- 公開情報整理 (EigenLayer LRT 群 × Pendle 統合発表, 2024)
- 公開情報整理 (Lido / Maker / Frax プロトコル公式 — Pendle 対応資産記載)
