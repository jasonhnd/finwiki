---
source: exchanges/ve33-governance-mechanism
source_hash: fc7acc2300644603
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "ve（3,3）ガバナンス機構 — Curve veCRV → Solidly → Velodrome/Aerodrome 進化"
translated_at: 2026-06-26T08:29:09.710Z
---

# ve（3,3）ガバナンス機構 — Curve veCRV → Solidly → Velodrome/Aerodrome 進化


## ウィキ上の位置づけ

この項目は [[exchanges/INDEX|exchanges index]] の下位に位置づけられる。同業比較・対照の文脈は [[exchanges/global-dex-major-five-comparison|global dex major five comparison]]、より広いシステム・規制境界は [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] とあわせて読む。

## 概要

**ve(3,3)** は **vote-escrow (ve)** + **(3,3) game theory** の組み合わせ。LP リワード + プロトコル収益分配 + ガバナンス投票を統合する DeFi トークノミクス機制。Curve の veCRV (2020) が原点、Solidly (Andre Cronje, 2022) が抽象化、Velodrome (Optimism, 2022) / Aerodrome (Base, 2023) が実用化。今や数十の派生 protocol が L2 native DEX 経済の核として稼働。

## 基本構造

- **lock**: トークン を 1 週〜4 年 lock すると veToken (NFT) 発行 · lock 期間長いほど veToken 比率増 (例: 4 年 lock = 1.0x, 1 年 = 0.25x)
- **vote**: veToken 保有者が weekly epoch で emission の流向 (どの LP プールにリワード) を投票で決定
- **bribe**: 第三者 (トークンプロジェクト) が "投票誘導料" を支払い、自分の LP プールに emission 誘導 → bribe market 形成
- **rebase**: emission の一部が既存 veToken 保有者に再分配 → 希薄化緩和 + holder loyalty 醸成

## 主要 protocol 比較

- **Curve (veCRV)** (2020-08): ve original · 4 年 lock · LP gauge 投票 · CRV emission · stable swap 流動性 hub · Convex Finance との meta layer
- **Solidly** (2022-02): Andre Cronje が抽象化 · Fantom · 即座失敗 (rug + Cronje 引退) · 設計思想は後継に継承
- **Velodrome** (2022-06, Optimism): Solidly fork · veVELO · Optimism native DEX · 最初の成功実装
- **Aerodrome** (2023-08, Base): Velodrome v2 fork · veAERO · Base native DEX · Uniswap 反転事例 (Base 上で TVL #1)
- **Equalizer** (Sonic), **Thena** (BNB), **Camelot** (Arbitrum) 等多数経済圏派生

## 経済学的役割

- **流動性 segmentation**: emission 投票で "戦略 LP" 形成 (L2 主導方が重要資産プールに集中)
- **bribe market**: トークンプロジェクトが流動性誘導に支払い、リアルマネー化 (例: Aerodrome bribe = 週次数百万 USD)
- **host alignment**: L2 主導方 (Coinbase Ventures / Optimism Foundation) が veToken 保有で chain native economy 闭環 · cbBTC/USDC のような host 資産流動性を内製化

## リスクと制約

- **ガバナンス集中**: ve 保有 top 10 が emission 支配 → 寡頭化 · "veWhale" 問題
- **veトークンomics 複雑化**: 一般 LP の UX 悪化 · lock 期間 + NFT + bribe + rebase が learning curve 急
- **chain 依存性**: native DEX の宿命 (L2 衰退時連鎖) · Velodrome は Optimism stagnation で TVL 縮小
- **emission 持続性**: トークン価格下落で APR 崩壊 → flywheel 逆回転リスク

## 関連項目

- [[exchanges/native-dex-flip-incumbent-pattern]] (Aerodrome 反転事例)
- [[exchanges/vetoken-host-protocol-flywheel]] (Coinbase × Aerodrome × cbBTC)
- [[exchanges/global-dex-major-five-comparison]]
- [[exchanges/amm-design-evolution]]
- [[exchanges/solana-ecosystem-dex-comparison|Solana 経済圏 DEX comparison]]
- [[fintech/portfolio-winner-structure-arm-analog|portfolio winner structure arm analog]]
- [[exchanges/cex-native-token-strategy-comparison|CEX ネイティブトークン戦略比較]]
