---
source: exchanges/rwa-tokenization-cex-integration
source_hash: f37aeb554ff01eb9
lang: ja
status: machine
fidelity: ok
title: "RWA (Real World Asset) tokenization × CEX 取扱"
translated_at: 2026-06-02T12:19:04.204Z
---
﻿
# RWA (Real World Asset) tokenization × CEX 取扱

## ウィキ上の位置づけ

この項目は [[exchanges/INDEX|exchanges index]] 配下に位置する。[[exchanges/global-cex-top10-comparison|グローバル CEX top 10 ランキング比較 (2025-2026)]] とあわせて読むと同業比較・対照の文脈が分かり、[[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] とあわせて読むとより広い制度・規制境界が分かる。

## 概要

RWA（Real World Asset）トークン化とは、実物資産（米国債 / 不動産 / コモディティ / プライベート・クレジット）をオンチェーン・トークンとして発行する仕組みである。BlackRock BUIDL（2024-03 ローンチ · 米財務省 MMF）が触媒となり、2024-2026 に急成長した。総 RWA TVL は $12-20B（2026 推定）で、tokenized US Treasury が中心セグメントである。

## 主要プレイヤー

- **BlackRock BUIDL** (Ethereum) — Securitize 経由発行 · 米国機関投資家限定 · 5.4% 利回り · $1.5B AUM (2025)
- **Ondo Finance OUSG/USDY** — 米財務省 ETF (SHV) 担保 · OUSG (機関) + USDY (リテール) 二段階構造
- **Securitize** — トークン化プラットフォーム · BUIDL / Apollo / Hamilton Lane 発行受託
- **Maple Finance** — private credit lending on-chain
- **Centrifuge** — multi-asset RWA pool
- **Provenance Blockchain (Figure)** — 不動産 + private credit

## CEX 取扱状況

- **国内 (日本)**: 直接 spot 取扱なし · JVCEA WhiteList 未承認 · 三井物産 (Zipangcoin) 等 RWA 関連は別経路 (ST / 信託)
- **海外 (米)**: Coinbase は機関向け OUSG カストディ · Binance 一部 RWA prime 提供
- **CEX 戦略**: RWA は機関向け prime brokerage の延長 → リテール CEX より institutional CEX 強み

## CEX × RWA 統合戦略

- **custody**: BUIDL / OUSG は Coinbase Custody / Anchorage 受託多数
- **trading**: 機関 OTC のみ secondary market (リテール限定的)
- **settlement**: USDC / USDT 経由 24/7 settlement
- **税制 + 規制**: 米 SEC 監督 + Reg D / Reg S exemption + 機関適格投資家限定

## 国内 + アジア 展開

- **Progmat** (三菱 UFJ 信託 系) — 信託型 ST 国内 最大 (~68% シェア)
- **DCJPY** + **JPYC** — RWA settlement 補完候補
- **HK SFC** + **MAS DPT** が RWA 統合実験 進行 (HKMA Project Ensemble 等)
- 日本 retail RWA 取扱は 法令改正待ち (投信法 + 金商法)

## クロスリンク

- [[exchanges/btc-spot-etf-japan-impact]] (機関化並行)
- [[exchanges/global-institutional-custody-five-pillars]]
- [[exchanges/jp-cex-deposit-token-stablecoin-integration]]
- [[exchanges/global-cex-prime-brokerage-layer]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview]]
- [[fintech/blackrock-buidl-sc-issuer-adoption]]
- Ondo Finance USDY/OUSG
- [[fintech/jp-stablecoin-progmat]]
- [[exchanges/jp-cex-staking-lending-regulation]]
- [[JapanFG/progmat]] — Progmat operating-company anchor
- [[securities/japan-best-execution-sor-pts]] — japan best execution SOR/PTS
- [[payments/japan-payment-clearing-and-settlement-infrastructure]] — JP payment clearing & settlement infrastructure
