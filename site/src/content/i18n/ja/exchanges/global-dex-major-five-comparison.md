---
source: exchanges/global-dex-major-five-comparison
source_hash: fb89bebcf5bedc62
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "グローバル DEX 主要 5 社比較"
translated_at: 2026-06-26T08:29:25.272Z
---
# グローバル DEX 主要 5 社比較


## ウィキ上の位置づけ

本項目は [[exchanges/INDEX|exchanges index]] 配下に位置する。同業比較・対照の文脈では [[exchanges/global-cex-top10-comparison|グローバル CEX top 10 ランキング比較 (2025-2026)]]、より広いシステム・規制境界では [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] と併読する。

## 概要分散型取引所 (DEX) は設計面で AMM (Automated Market Maker) と CLOB (Central Limit Order Book on-chain) の 2 大潮流に分かれる。Uniswap が AMM の事実上の標準を確立し、流動性プール × xy=k 数式を業界共通言語にした一方、Hyperliquid は 2024 年以降に専用 L1 上の CLOB 無期限先物 で急台頭し「DEX = AMM」の前提を破った。EVM 多チェーン化が進む中で、Aerodrome (Base) のような chain 専属 native DEX が当該 chain で Uniswap を逆転する事例も観測される ([[exchanges/native-dex-flip-incumbent-pattern]])。本記事は取引高・流動性で代表的な 5 強をプロファイル化する。

## 5 強プロファイル

- **Uniswap** — AMM の祖。v1 / v2 / v3 (concentrated liquidity) / v4 (hooks) と進化系譜を持つ。Ethereum mainnet + 主要 L2 (Arbitrum / Optimism / Base / Polygon) ほぼ全展開。現物 24h vol $2-3B 規模。UNI トークンは ガバナンス中心 (手数料スイッチ は段階的議論)。創業 Hayden Adams (2018)。
- **Curve Finance** — ステーブルコイン / wrapped asset 向け stableswap AMM に特化。slippage を 1/100 に圧縮する数式が強み。CRV + veCRV (vote-escrow) によるガバナンス機構は ve(3,3) の原型となり、後続プロトコルが多数フォーク ([[exchanges/vetoken-host-protocol-flywheel]])。
- **Aerodrome** — Velodrome v2 フォーク として 2023 後半に Base 上で ローンチ。Base 専属 native DEX で ve(3,3) エミッション機構を採用。Coinbase Ventures が関与し Base エコシステムと深く統合。Base 上の DEX 取引量シェア ~63% で Uniswap を反転。
- **PancakeSwap** — BSC (BNB Chain) 専属 native DEX。CAKE トークン。現物 + 無期限先物 + lottery + NFT 市場place を 1 つに統合し、BSC 流動性の中核 hub として機能。中華圏ユーザー比率が高い。
- **Hyperliquid** — 自社 L1 (Hyperliquid Chain) 上の CLOB 無期限先物専門 DEX。注文板を on-chain で運用しつつ低 latency を実現。無期限先物 24h vol $1-3B で 2024-2025 に急成長。創業 Jeff Yan。token はなく 取引手数料リベート と ポイントプログラム で先行。

## 比較表 (chain / 設計 / token / 24h vol / 特徴)

| 名称 | 主要 chain | 設計 | token | 24h vol (推定) | 特徴 |
|---|---|---|---|---|---|
| Uniswap | ETH + L2 multi | AMM (v3 CL) | UNI | $2-3B | 業界標準・hooks v4 |
| Curve | ETH + multi | stableswap AMM | CRV/veCRV | $0.1-0.3B | stable 特化・ve(3,3) 祖 |
| Aerodrome | Base 専属 | ve(3,3) AMM | AERO/veAERO | $0.5-1B | Base native flip |
| PancakeSwap | BSC 専属 | AMM + 無期限先物 | CAKE | $0.3-0.8B | BSC hub・リテール |
| Hyperliquid | 自社 L1 | CLOB 無期限先物 | (なし) | $1-3B (無期限先物) | on-chain 板・points |

設計面の トレードオフ — AMM は流動性提供の単純さと MEV 耐性の課題を抱える一方、CLOB は注文タイプの多様性と価格発見の精度で優れる。Emission 構造は veToken 系 (Curve / Aerodrome) と固定発行系 (Uniswap)、取引手数料リベート (Hyperliquid) で大きく分岐。規制位置はいずれもアメリカからのアクセス遮断が進行中で、日本では未上場 token として FSA 警告書発出の対象外だが、JVCEA WhiteList ([[exchanges/jvcea-whitelist-token-listing]]) には載っていない (国内取引所では非取扱)。CEX との取引高対比は ([[exchanges/global-cex-top10-comparison]]) を参照。取引高は市場変動が大きく、表中の数値は 2025 時点の概算範囲。設計派閥比較は [[exchanges/amm-design-evolution|AMM design evolution]] と [[systems/cross-chain-four-poles-overview|cross-chain four poles overview]]、Solana 系は [[exchanges/solana-ecosystem-dex-comparison|Solana 経済圏 DEX comparison]] を参照。

出典: DefiLlama dexs ranking · Dune Analytics ダッシュボード · 各各プロトコルのホワイトペーパー / ドキュメント (Uniswap, Curve, Aerodrome, PancakeSwap, Hyperliquid)
