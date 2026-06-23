---
title: グローバル Perp DEX 主要 5 社比較 — Hyperliquid / dYdX / GMX / Vertex / Drift
aliases:
  - Global perp DEX comparison
  - Perpetual futures DEX top 5
  - Onchain perp exchange ranking
domain: exchanges
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-06-23
review_by: 2026-08-07
confidence: likely
tags:
  - exchanges
  - dex
  - perp
  - derivatives
  - defi
sources:
  - https://defillama.com/derivatives
  - https://dune.com/
status: active
---

# グローバル Perp DEX 主要 5 社比較


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-dex-major-five-comparison|global dex major five comparison]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 概要

Perp (Perpetual Futures) DEX は CEX 派生取引 (Binance / Bybit / OKX) のオンチェーン代替として、レバレッジ + funding-rate 機構をスマートコントラクトで再現する系統。設計は CLOB (Central Limit Order Book on-chain) と AMM/oracle-pricing の 2 大分岐に明確に分かれる。CLOB は Hyperliquid と dYdX v4 が主導し、AMM/oracle pricing は GMX と Drift が代表する。2024-2026 期は Hyperliquid が圧倒的台頭を見せ、CEX 並みの latency と注文板 UX を on-chain で実現した点で先行する。CEX との取引高対比は ([[exchanges/global-cex-top10-comparison]])、spot DEX は ([[exchanges/global-dex-major-five-comparison]]) を参照。

## 5 強プロファイル

- **Hyperliquid** — 自社 L1 (Hyperliquid Chain) 上の CLOB perp 専門 DEX。注文板を on-chain で運用しつつ低 latency を達成。perp 24h vol $1-3B で perp DEX top。HYPE トークンを 2024-11 に launch (プレ訪問なし emission ベース ユーザー獲得モデル)。創業 Jeff Yan。
- **dYdX v4** — 2023-10 に StarkEx L2 (Ethereum) から独自 Cosmos chain (dYdX Chain) へ完全移行。CLOB を validator 側で運用し、決済のみ on-chain に commit。DYDX トークン (Cosmos 上の native)。米国アクセスは規制対応で遮断済み。
- **GMX** — Arbitrum + Avalanche に展開。GLP プール (多資産プール) を LP が拠出し、全 trader の counterparty となる単一プールモデル。oracle pricing で価格は Chainlink + 内部 keeper。GMX トークン (governance + fee share)。2022-2023 ピーク → 2024 シェア低下。
- **Vertex Protocol** — Arbitrum 上の CLOB + AMM ハイブリッド。spot + perp + money market を 1 つの margin account に統合する multi-product 設計が特徴。VRTX トークン。
- **Drift Protocol** — Solana 上の oracle pricing + AMM perp。Solana エコシステム perp の中核 hub として機能。DRIFT トークン。Solana 高速性を活かす low-latency 設計。

## 比較表 (設計 / chain / token / 24h vol)

| 名称 | chain | 設計 | token | 24h vol (推定) |
|---|---|---|---|---|
| Hyperliquid | 自社 L1 | CLOB | HYPE | $1-3B |
| dYdX v4 | Cosmos (dYdX Chain) | CLOB | DYDX | $0.3-1B |
| GMX | Arbitrum + Avalanche | oracle/GLP プール | GMX | $0.1-0.3B |
| Vertex | Arbitrum | CLOB+AMM ハイブリッド | VRTX | $0.1-0.4B |
| Drift | Solana | oracle+AMM | DRIFT | $0.1-0.3B |

設計 trade-off — CLOB は注文タイプ多様 (limit / stop / IOC) + MEV resistance + 価格発見精度で優れる一方、開発複雑度と performance 要求が高い。AMM/oracle pricing は LP リスク (毒注文 toxic flow) + slippage + oracle 操作脆弱性を抱える反面、流動性ブートストラップが単純。規制位置はいずれの protocol も米国アクセス遮断進行 (Hyperliquid 含む)。日本では未上場 token として FSA 警告書発出の対象外だが、JVCEA WhiteList ([[exchanges/jvcea-whitelist-token-listing]]) に載っていないため国内取引所では非取扱。chain native DEX が先行 incumbent を flip する pattern は ([[exchanges/native-dex-flip-incumbent-pattern]]) を参照。取引高は市場変動が大きく、表中の数値は 2025-2026 時点の概算範囲で参考値。Solana 系の Drift は [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]] でも詳述、cross-chain 接続性は [[systems/cross-chain-four-poles-overview|cross-chain four poles overview]] と [[exchanges/cross-chain-bridge-cex-deposit-withdrawal|cross-chain bridge × CEX 入出金]] を併読。
