---
title: Jito — Solana 液体ステーキング + MEV 再分配プロトコル
aliases:
  - Jito
  - JitoSOL
  - JTO token
  - Jito Labs
domain: exchanges
slug: dex-jito-solana
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2027-05-25
confidence: likely
tags:
  - exchanges
  - solana
  - liquid-staking
  - mev
  - lst
status: active
sources:
  - 公開情報整理 (Jito Foundation 公式 docs, jito.network)
  - 公開情報整理 (Jito Labs MEV-aware validator client 仕様)
  - 公開情報整理 (DefiLlama JitoSOL TVL データ, 2024-2026)
  - 公開情報整理 (JTO airdrop 2023-12 launch event)
---

# Jito — Solana 液体ステーキング + MEV 再分配プロトコル overview


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/solana-ecosystem-dex-comparison|Solana エコシステム DEX 群比較]] for the Solana ecosystem context, [[exchanges/dex-raydium-solana|Raydium]] / [[exchanges/dex-orca-solana|Orca]] for adjacent DEX peer context, and [[exchanges/amm-design-evolution|AMM 設計進化系譜]] for the broader system / mechanism boundary.

> Jito Labs（MEV クライアント）+ Jito Foundation（LST プロトコル）の 2 層構造 · JitoSOL（LST）· JTO（governance token, 2023-12 airdrop launch）

## 1. プロトコル概要

Jito は Solana 上の **2 つの異なるプロダクトを束ねる総称**：

1. **Jito-Solana validator client**（Jito Labs）：Solana 標準 validator に MEV 抽出機能を組み込んだクライアント。Solana stake の **80%+** が採用（2026 年時点の事実上の標準実装）
2. **JitoSOL**（Jito Foundation）：Liquid Staking Token（LST）。SOL を stake してマージナル MEV 報酬込みで JitoSOL を発行
3. **JTO token**（governance）：2023-12-07 airdrop launch、Solana 史上最大級の retroactive distribution の 1 つ

- **チェーン**：Solana L1
- **公式 URL**：jito.network
- **TVL（2024–2026）**：$2–4B 規模、Solana LST 市場の **70%+** を JitoSOL が占有

## 2. JitoSOL の設計（MEV-aware LST）

JitoSOL は他の Solana LST（mSOL / bSOL 等）と異なり、**MEV 報酬を staking yield に内包** する設計：

- 一般 LST：validator inflation + 取引 fee（staking yield のみ）
- JitoSOL：上記 + **MEV tips（Jito-Solana client が抽出する block-builder tip）** を含む
- 結果：他 LST より 50–200 bps 高い APY を提供（市場ボラティリティに応じ変動）
- 1 JitoSOL の SOL 換算レートは経時的に増加（rebasing でなく exchange rate model）

## 3. MEV 再分配メカニズム（Jito-Solana client）

Solana 標準 validator client（Agave）に対し、Jito-Solana client は以下を追加：

- **block-builder auction**：Jito Block Engine が各 slot で bundle を募集
- **searcher bundle submission**：MEV searcher が atomic bundle（bid 付き）を submit
- **validator MEV tip**：勝者 bundle の tip が validator + JitoSOL staker に分配
- **anti-front-running 設計**：mempool が無い Solana で、ordered transaction inclusion を実現

Solana stake の 80%+ が Jito-Solana client を採用しているため、JitoSOL stake holder は事実上 Solana 全体の MEV 経済から間接的に yield を得る。

## 4. JTO token / Jito DAO

- **launch**：2023-12-07 airdrop launch（Solana 上の主要 LST staker、MEV searcher、validator 等が対象）
- **総供給**：1B JTO
- **配分**：community 約 34.3%、ecosystem development 約 25%、investors 約 16.2%、core contributors 約 24.5%
- **governance**：Jito DAO の Realms ベース投票で運営
- **2024–2026 launch 後**：Jito Restaking モジュール（Solana 上の LRT 概念導入）、Jito Network 機能拡張

## 5. Solana LST 市場での位置付け

| LST | TVL | 設計 | MEV 内包 |
|---|---|---|---|
| **JitoSOL** | $2–4B | exchange rate, MEV-aware | ○（中核差別化点） |
| mSOL (Marinade) | $0.8–1.5B | exchange rate, 分散 staking | × |
| bSOL (BlazeStake) | $200–400M | exchange rate | × |
| INF (Sanctum Infinite) | $300–600M | LST 集合体（meta-LST） | △（構成 LST に依存） |

JitoSOL は **2024 年に Marinade を抜き Solana LST 市場 1 位**を確立。MEV 内包の構造的 yield 優位が決定要因。

## 6. CEX / DeFi 統合

- **CEX 統合**：Binance / Coinbase / Kraken 等で JTO spot 上場（2023-12 launch 直後）
- **DeFi 統合**：Marginfi / Kamino / Drift 等の Solana lending で JitoSOL collateral として広く採用
- **Raydium / Orca プール**：JitoSOL / SOL ペアは Solana DEX で最大級の LST 流動性プール
- **Restaking**：2024 以降 Jito Restaking モジュールで LRT 概念を導入、Solana 上の AVS 経済を構築中

## 7. 主要事件・沿革

- **2021–2022**：Jito Labs が Solana validator MEV クライアント開発開始
- **2022 中**：JitoSOL ローンチ（liquid staking 提供開始）
- **2023-08**：Jito-Solana client が Solana validator stake の過半数を獲得
- **2023-12-07**：JTO airdrop launch、$165M 規模の retroactive distribution
- **2024**：Solana LST 市場で JitoSOL が首位獲得
- **2024–2025**：Jito Restaking モジュール展開、LRT 概念導入
- **2026**：Solana ETF 議論で JitoSOL 含有 ETF 提案も登場（公開資料の範囲内）

## Related

- [[exchanges/solana-ecosystem-dex-comparison]] — Solana エコシステム
- [[exchanges/dex-raydium-solana]] — Solana 主要 DEX
- [[exchanges/dex-orca-solana]] — Solana 主要 DEX
- [[exchanges/INDEX]] — 取引所ドメインインデックス
- [[exchanges/global-cex-top10-comparison]] — JTO 上場先 CEX
- [[exchanges/amm-design-evolution]] — AMM 設計（LST 流動性の文脈）

## Sources

- 公開情報整理 (Jito Foundation 公式 docs, jito.network)
- 公開情報整理 (Jito Labs MEV-aware validator client 仕様 / Block Engine docs)
- 公開情報整理 (DefiLlama JitoSOL ダッシュボード TVL)
- 公開情報整理 (JTO airdrop 2023-12-07 launch event 公式)
- 公開情報整理 (Solana Foundation validator stake distribution)
