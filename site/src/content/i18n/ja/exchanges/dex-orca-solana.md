---
source: exchanges/dex-orca-solana
source_hash: 2df99fe3d5e1fdb1
lang: ja
status: machine
fidelity: ok
title: "Orca Whirlpools — Solana 系集中流動性 AMM 概要"
translated_at: 2026-06-02T12:19:04.226Z
---

# Orca Whirlpools — Solana 系集中流動性 AMM 概要


## ウィキ上の位置づけ

本項目は [[exchanges/INDEX|exchanges index]] 配下に位置する。Solana AMM の同業比較は [[exchanges/dex-raydium-solana|Raydium]]、より広い Solana DEX 層は [[exchanges/solana-ecosystem-dex-comparison|Solana エコシステム DEX 群比較]]、システム上・設計上の境界は [[exchanges/amm-design-evolution|AMM 設計進化系譜]] とあわせて読む。

> 2021-02 ローンチ · ORCA トークン · concentrated liquidity AMM (Whirlpools, Uniswap v3 類似) · retail UX 重視

## 1. プロトコル概要

- **チェーン**：Solana L1（SVM 環境）
- **モデル**：concentrated liquidity AMM（Whirlpools 設計、Uniswap v3 と機能的類似）
- **ローンチ**：2021-02（standard AMM）、2022-03（Whirlpools CLMM）
- **トークン**：ORCA（governance、fee share）
- **公式 URL**：orca.so
- **TVL（2024–2026 概観）**：$300–500M レンジ、Solana DEX TVL の 5–10%
- **24h Volume**：Solana DEX 全体の 10–20% を継続的に占有

## 2. Whirlpools CLMM の設計

Orca の中核プロダクト **Whirlpools** は Uniswap v3 の集中流動性概念を Solana SVM 上に実装した CLMM。LP は価格レンジを指定して流動性を供給し、取引が指定レンジ内にあるときのみ fee を獲得する。

- **fee tier**：0.01% / 0.05% / 0.3% / 1% の 4 段階（資産ボラティリティに応じ選択）
- **tick spacing**：fee tier ごとに固定（細かいレンジ管理）
- **LP NFT**：各 LP ポジションは NFT として表現（Uniswap v3 と同様）
- **active liquidity**：レンジ外の流動性は fee 獲得不可（capital efficiency と LP リスクのトレードオフ）

## 3. UX / 設計思想

Orca は当初から **"the most user-friendly DEX on Solana"** を標榜し、retail 層への UX 優先設計で差別化：

- **Fair Price Indicator**：オラクル価格との乖離を UI 上で明示
- **シンプルな swap UI**：技術ユーザー向けの細かい設定を省略
- **クライメート貢献**：取引手数料の一部を環境団体に寄付する設計（2021–2022 期）
- **トークン上場審査**：memecoin 一律受け入れではなく、品質審査ベースの上場路線（Raydium との対比点）

## 4. Raydium との比較（Solana 2 大 AMM）

| 項目 | Orca | Raydium |
|---|---|---|
| 主設計 | Whirlpools（純粋 CLMM） | constant product + CLMM + orderbook hook |
| 上場ポリシー | 審査ベース（高品質志向） | 自由上場（memecoin 受け入れ） |
| TVL 規模 | $300–500M | $1.5–2.5B |
| memecoin 露出 | 限定的 | 圧倒的（Pump.fun 連動） |
| UX 評価 | retail フレンドリー | プロ向け |
| トークン 経済 | ORCA staking fee share | RAY buy-back |
| 強み | 安定 LP、機関志向、クリーン UX | aggregator routing 量、memecoin 流動性 |

両 DEX は競合関係にあるが、上場ポリシーの違いから棲み分けが成立。Orca は **stablecoin・blue-chip 集中型**、Raydium は **long-tail memecoin 集中型** という構図。

## 5. 主要事件・沿革

- **2021-02**：Orca standard AMM ローンチ
- **2021–2022**：Solana DeFi summer の中で Raydium と並ぶ二大 AMM の地位確立
- **2022-03**：Whirlpools CLMM ローンチ
- **2022-11**：FTX 破綻余波で Solana TVL 急減、Orca TVL も $1B → $100M レンジへ
- **2023**：Solana エコシステム回復に伴い段階的 TVL 回復
- **2024–2025**：Pump.fun memecoin マニア期において Raydium に Volume 主導権を譲るが、安定 LP 層として TVL シェア維持
- **2024**：Eclipse Mainnet（Solana SVM L2）への Whirlpools 展開発表

## 6. ガバナンス・経済モデル

- **ORCA token**：総供給 100M、governance + 一部 fee share
- **fee 配分**：standard AMM では LP 100%、Whirlpools では fee tier 内 LP 全額
- **protocol fee**：governance 投票で可変設定
- **Orca DAO**：Realms ベースのオンチェーン投票で運営
- **Foundation 形態**：Orca Foundation がプロトコル開発を主導

## 7. 国際比較・cross-chain 戦略

Orca は Solana 中心戦略を継続しつつ、Eclipse（SVM L2 on Ethereum）への展開で **multi-SVM** 戦略を取る。Aptos / Sui への展開実績はなし。EVM への展開計画は公表されていない。

Solana 全体の DEX 量・市場構造は [[exchanges/solana-ecosystem-dex-comparison]] を、EVM 系 DEX との対比は [[exchanges/global-dex-major-five-comparison]] を参照。集中流動性設計の系譜は [[exchanges/amm-design-evolution]] を参照。

## 関連項目

- [[exchanges/solana-ecosystem-dex-comparison]] — Solana DEX 群比較（最重要 相互参照）
- [[exchanges/dex-raydium-solana]] — Solana 競合 AMM（最直接比較対象）
- [[exchanges/amm-design-evolution]] — AMM 設計進化
- [[exchanges/global-dex-major-five-comparison]] — グローバル DEX 比較
- [[exchanges/INDEX]] — 取引所ドメインインデックス
- [[exchanges/native-dex-flip-incumbent-pattern]] — DEX flip パターン

## 出典

- 公開情報整理 (Orca 公式 docs / Whirlpools whitepaper, orca.so)
- 公開情報整理 (DefiLlama Orca ダッシュボード TVL / Volume)
- 公開情報整理 (Orca Foundation governance forum 発信)
- 公開情報整理 (Solana Foundation エコシステム発表)
- 公開情報整理 (Uniswap v3 whitepaper - 設計比較参照元)
