---
title: 国内 CEX × 預金トークン / EPI 統合戦略 — DCJPY / Progmat / JPYC 連携
aliases:
  - JP CEX deposit token integration
  - 国内 CEX × EPI stablecoin
  - DCJPY Progmat JPYC × CEX strategy
domain: exchanges
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-05-19
review_by: 2027-05-19
confidence: likely
tags:
  - exchanges
  - cex
  - stablecoin
  - deposit-token
  - epi
  - jpyc
  - dcjpy
sources:
  - https://jpyc.co.jp/
  - https://progmat.co.jp/
  - https://www.decurret-dcp.com/
status: candidate
---

# 国内 CEX × 預金トークン / EPI 統合戦略 — DCJPY / Progmat / JPYC 連携

## 概要

2022-06 改正資金決済法により EPI（電子決済手段）三型 — **信託型 / 銀行型 / 資金移動業者型** — の制度が施行され、円ペッグ stablecoin と預金トークンの法的位置付けが確立した。既存 VASP は EPI 発行体ではないものの、2025-2026 にかけて取扱統合が急速に進行している。CEX × EPI の連携モデルが国内市場の流動性 hub 化を推進する局面に入りつつある。

## 主要 EPI / 預金トークン プレイヤー

- **[[exchanges/jp-exchange-jpyc|JPYC 株式会社]]**（資金移動業者型 EPI · JVCEA Type 1 #1042）— 円ペッグ stablecoin **JPYC** 発行 + 自社 JPYC EX マーケット運営。リテール志向。
- **[[fintech/jp-stablecoin-progmat|株式会社 Progmat]]**（信託型 EPI platform · 三菱 UFJ 信託 49% 出資）— 多巨行 SC 発行プラットフォーム + Project Pax クロスボーダー決済。機関志向。
- **[[fintech/jp-stablecoin-dcjpy|DCJPY]]**（株式会社 ディーカレット DCP · 銀行型 預金トークン）— IIJ + SBI + ゆうちょ + KDDI + NTT + MUFG 出資。2024-08 商用開始。銀行間決済志向。

## CEX 側の対応

- **[[exchanges/jp-exchange-sbi-vc-trade|SBI VC トレード]]** — USDC / EP USDC 取扱開始 + EPI 発行体予定（三種牌照唯一保有）
- **[[exchanges/jp-exchange-bitflyer|bitFlyer]]** / **[[exchanges/jp-exchange-gmo-coin|GMO コイン]]** / **[[exchanges/jp-exchange-bitbank|bitbank]]** — JPYC 取扱検討中
- **[[exchanges/jp-exchange-crypto-garage|Crypto Garage]]** — Progmat SETTLENET PRO 提携 + 機関向け決済インフラ提供

## ビジネス含意

- **CEX → EPI 取扱**: 顧客 JPY ⇔ stablecoin スワップ機能追加により国内決済 / 海外送金チャネル拡大が可能。CEX の業務範囲を payment rails へ拡張。
- **預金トークン（DCJPY）**: 銀行直接連携 + 機関決済利用が中心。CEX 経由不要（Banking infra 直結型）。CEX とは競合・補完併存。
- **競合関係**: Progmat（機関）vs JPYC（リテール）vs DCJPY（銀行間決済）の 3 極競争構造。各々が異なる顧客層・用途に最適化。
- **§501 denylist 関連**: 2026 [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]] 影響下で日本 EPI が "[[fintech/three-circles-stablecoin-mra-framework|MRA 互認]]" 候補 として浮上。

## 戦略ロードマップ

2026 H2 以降、各 CEX が EPI 系 stablecoin 取扱を順次解禁予定。CEX × EPI 統合の進行により、国内市場全体の流動性 hub 化が加速する見込み。預金トークン（DCJPY）は B2B 機関決済 layer として並走し、二層構造（リテール EPI + 機関預金トークン）が完成へ向かう。

## 関連エントリ

- [[fintech/japan-epi-three-types-overview]]
- [[fintech/japan-epi-four-camps-comparison]]
- [[fintech/three-circles-stablecoin-mra-framework]]
- [[fintech/genius-act-501-denylist-mandate]]
