---
source: exchanges/dex-orca-solana
source_hash: cfd3a920f0455eb0
lang: ja
status: machine
fidelity: ok
title: "Orca Whirlpools — Solana 系集中流動性 AMM 概要"
translated_at: 2026-07-29T11:02:23.000Z
---

# Orca Whirlpools — Solana 系集中流動性 AMM 概要


## ウィキ上の位置づけ

本項目は [[exchanges/INDEX|exchanges index]] 配下に位置する。Solana AMM の同業比較は [[exchanges/dex-raydium-solana|Raydium]]、より広い Solana DEX 層は [[exchanges/solana-ecosystem-dex-comparison|Solana エコシステム DEX 群比較]]、システム上・設計上の境界は [[exchanges/amm-design-evolution|AMM 設計進化系譜]] とあわせて読む。

> 2021 年ローンチ · Solana 上の open-source concentrated liquidity AMM · ORCA governance / utility token

## 1. プロトコル概要

- **チェーン**：Solana L1（SVM 環境）
- **モデル**：concentrated liquidity AMM（Whirlpools 設計、Uniswap v3 と機能的類似）
- **ローンチ**：2021 年（standard AMM）、2022 年（Whirlpools CLMM）
- **トークン**：ORCA（governance / utility。現行の権利は公式 Tokenomics で確認）
- **公式 URL**：orca.so
- **流動性提供**：permissionless pool creation と full-range / custom-range position を提供

## 2. Whirlpools CLMM の設計

Orca の中核プロダクト **Whirlpools** は Uniswap v3 の集中流動性概念を Solana SVM 上に実装した CLMM。LP は価格レンジを指定して流動性を供給し、取引が指定レンジ内にあるときのみ fee を獲得する。

- **fee tier**：pool ごとの fee configuration は変更され得るため、現行の公式 documentation で確認
- **tick spacing**：fee tier ごとに固定（細かいレンジ管理）
- **LP NFT**：各 LP ポジションは NFT として表現（Uniswap v3 と同様）
- **active liquidity**：レンジ外の流動性は fee 獲得不可（capital efficiency と LP リスクのトレードオフ）

## 3. UX / 設計思想

Orca の現行公式 About は、onchain trading と liquidity provision を明瞭な interface、open infrastructure、Solana-native tool で利用しやすくする方針を示す：

- **明瞭な tool**：token swap と liquidity provision の interface を提供
- **permissionless pool creation**：pool 作成と liquidity management を支援
- **open infrastructure**：audited smart contract、SDK、API を開発者向けに公開

## 4. Orca 公開仕様スナップショット

出典: 表全体は Orca 公式の [About](https://docs.orca.so/support/about)、[Developer Overview](https://docs.orca.so/developers/overview)、[ORCA Tokenomics](https://docs.orca.so/governance/tokenomics)（2026-07-29 確認）に基づく。

| 項目 | 公式確認内容 |
|---|---|
| ネットワーク / AMM | Solana 上の open-source CLMM（Whirlpools） |
| 流動性 position | full-range または custom-range を作成・管理可能 |
| プロトコル沿革 | 2021 年 Orca、2022 年 Whirlpools、2024 年 v2 UI をローンチ |
| ORCA token | Solana SPL の governance / utility token。供給量や関連 parameter は公式 Tokenomics で都度確認する |
| ガバナンス | DAO の提案・投票・委任を含む現行の仕組みは、公式 governance documentation で都度確認する |

動的な TVL、volume、market share や他プロトコルの listing policy はこの静的スナップショットに含めない。

## 5. 主要事件・沿革

- **2021**：Orca を constant-product AMM としてローンチ
- **2022**：concentrated liquidity program の Whirlpools をローンチ
- **2024**：trader、liquidity provider、token creator、builder 向け v2 UI をローンチ

## 6. ガバナンス・経済モデル

- **ORCA token**：Solana SPL の governance / utility token
- **token / fee mechanism**：xORCA、protocol fee、treasury に関する比率や配分は変更され得るため、固定値を転記せず公式 [ORCA Tokenomics](https://docs.orca.so/governance/tokenomics) で確認する
- **Orca DAO**：提案、投票、委任、Council を含む現行の権利と手続は公式 governance documentation で確認する

## 7. 国際比較・cross-chain 戦略

現行の公式 Developer Overview は Whirlpools を **Solana 上の open-source CLMM** として説明する。本項目では、現行公式資料で確認できない active deployment や multi-chain / multi-SVM 戦略を推定しない。

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
