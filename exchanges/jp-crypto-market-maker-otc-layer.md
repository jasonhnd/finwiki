---
title: 国内暗号資産マーケットメイカー / OTC デスク業界 overview
aliases:
  - JP crypto market maker
  - 国内暗号資産 OTC
  - JP crypto liquidity provider layer
domain: exchanges
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-05-19
review_by: 2027-05-19
confidence: likely
tags:
  - exchanges
  - market-maker
  - otc
  - liquidity
  - institutional
sources:
  - https://www.b2c2.com/
  - https://wintermute.com/
  - https://www.falconx.io/
status: candidate
---

# 国内暗号資産マーケットメイカー / OTC デスク業界 overview

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-cex-prime-brokerage-layer|global cex prime brokerage layer]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 概要

国内 CEX の表面板の裏には、機関注文と高額取引を担う MM (マーケットメイカー) / OTC デスク層が存在する。国内 VASP の表面取引高の多くは、これら MM の continuous quoting に依存しており、リテール板の流動性は実質的にこの層によって支えられている。

## グローバル MM の国内展開

- **B2C2 Japan** — 関東財務局長 第00012号 (2017 登録)。英本社 B2C2 は 2021-12 に SBI Holdings が買収し子会社化。国内機関 OTC の大手プレイヤー。
- **Wintermute** — 国内法人なし。一部国内 VASP に対し、KYC ベースの API 接続で流動性を提供。
- **Cumberland (DRW 系)** — 国内法人なし。OTC 中心の機関プレイヤー。
- **GSR Markets** — 国内法人なし。海外拠点から国内機関向けに quoting。

## 国内 OTC デスク独自プレイヤー

- **Crypto Garage (SETTLENET / OTC)** — DG (デジタルガレージ) × 東京短資 × 野村 HD 系の機関向けインフラ。
- **Custodiem OTC** — 旧 FTX Japan、現 bitFlyer HD 系。リテールから機関 OTC 専業へ転換中。
- **bitbank OTC** — 関係子会社 / マーキュリー (CoinTrade) 経由で機関向け OTC を提供。

## ビジネスモデル

bid/ask スプレッド + 大口プレミアムが主収益源。取扱 token は BTC / ETH / USDT / USDC が中心で、ロングテール alt の OTC は限定的。国内最低取引額は概ね 500 万円〜が目安。

## 規制関係

MM 専業プレイヤーは、VASP 登録 (資金決済法) または金商法上の自己発注業者 (DPM) 登録のいずれかが必要。KYC + AML 義務は CEX と同等に課され、FSA monitoring 対象。

## 関連

- [[exchanges/jp-exchange-crypto-garage]]
- [[exchanges/jp-exchange-custodiem]]
- [[exchanges/jp-exchange-bitbank]]
- [[exchanges/jp-exchange-mercury]]
- [[exchanges/jp-institutional-custody-three-pillars]]
- [[exchanges/jp-vasp-parent-company-map]]
- [[exchanges/global-cex-prime-brokerage-layer]] — グローバル CEX prime brokerage レイヤー
- [[securities/japan-best-execution-sor-pts]] — japan best execution SOR/PTS
- [[exchanges/jvcea-spot-volume-statistics-analysis]] — JVCEA spot volume 統計分析
