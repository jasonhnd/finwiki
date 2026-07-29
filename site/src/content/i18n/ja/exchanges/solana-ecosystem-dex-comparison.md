---
source: exchanges/solana-ecosystem-dex-comparison
source_hash: 01db5473c0ae58e7
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "Solana エコシステム DEX 群比較"
translated_at: 2026-07-29T11:50:43.000Z
---
# Solana エコシステム DEX 群比較


## ウィキ上の位置づけ

この項目は [[exchanges/INDEX|exchanges index]] に属する。隣接・対比対象として [[exchanges/global-dex-major-five-comparison|global dex major five comparison]]、より広い制度・規制境界として [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] と併読する。

## 概要

Solana 上では、swap aggregator、複数方式の AMM、集中流動性、DLMM、perpetuals、オンチェーン CLOB など異なる設計のプロトコルが並存する。本稿は Jupiter、Raydium、Orca、Meteora、Drift、Phoenix の公式ドキュメントに基づいて機能を比較し、取引高順位、TVL シェア、固定的な手数料・ブロック時間は扱わない。EVM 生態系の比較は [[exchanges/global-dex-major-five-comparison]] を参照。

## 6 protocol プロファイル

- **Jupiter** — 複数の流動性ソースから swap ルートを探索する aggregator。
- **Raydium** — CPMM、CLMM 等の複数プール設計と swap / 流動性提供機能を持つ AMM。constant product だけに限定しない。
- **Orca** — Whirlpools による集中流動性 AMM。
- **Meteora** — DLMM と各種 dynamic pool を提供。
- **Drift Protocol** — perpetuals を中心に、注文・流動性・オラクルを組み合わせる取引プロトコル。[[exchanges/global-perp-dex-five-comparison]] にも掲載。
- **Phoenix** — Solana 上の fully on-chain central limit order book。

## 比較表 (設計 / 用途)

下表は各プロトコルの公式ドキュメントを 2026年7月29日に確認した機能比較である。トークンの有無、日次取引高、TVL、利用者層は変動するため表の評価軸にしない。 ^[Sources: https://dev.jup.ag/docs/; https://docs.raydium.io/raydium/; https://docs.orca.so/; https://docs.meteora.ag/; https://docs.drift.trade/; https://docs.phoenix.trade/.]

| 名称 | 公式資料で確認できる設計 | 主用途 |
|---|---|---|
| Jupiter | aggregator / routing | 複数流動性ソースをまたぐ swap |
| Raydium | CPMM、CLMM 等 | swap、流動性提供、プール作成 |
| Orca | Whirlpools（集中流動性 AMM） | swap、集中流動性提供 |
| Meteora | DLMM、dynamic pools | swap、流動性提供 |
| Drift | perpetuals、注文・流動性メカニズム | デリバティブ取引 |
| Phoenix | fully on-chain CLOB | 指値注文型 spot 取引 |

この分類は設計上の主機能を示し、プロトコル間の順位や「6層」の上下関係を意味しない。

## memecoin 経済学 (Solana 独自)

トークン発行プラットフォーム、AMM / DLMM、aggregator を組み合わせた流動性経路は Solana 上で見られるが、特定プラットフォームから特定 DEX へ必ず移行するわけではない。発行数・取引高・移行先の比率は期間で大きく変動するため固定値を置かない。

## 国際比較 — EVM 系との対比

EVM と Solana では実行環境・アカウントモデル・流動性の分布が異なるため、ブロック時間や手数料の一時点の数値だけで優劣を判断しない。AMM 設計進化系譜は [[exchanges/amm-design-evolution]]、ve(3,3) governance は [[exchanges/ve33-governance-mechanism]] を参照する。国内での SOL 取扱いとオンチェーン DEX へのアクセスは別論点であり、特定ウォレット経路しか存在しない、または CEX routing が存在しないとは断定しない。cross-chain ルート設計は [[systems/cross-chain-four-poles-overview]] と [[exchanges/cross-chain-bridge-cex-deposit-withdrawal]]、perp 横比は [[exchanges/global-perp-dex-five-comparison]] を併読。
