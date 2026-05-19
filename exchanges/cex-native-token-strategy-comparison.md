---
title: CEX 自家 token 戦略比較 — BNB / OKB / HT / KCS / BGB 等の経済機制
aliases:
  - CEX native token strategy
  - 取引所自家トークン
  - BNB OKB HT KCS BGB comparison
domain: exchanges
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-05-19
review_by: 2027-05-19
confidence: likely
tags:
  - exchanges
  - cex
  - native-token
  - exchange-token
  - tokenomics
sources:
  - https://www.binance.com/
  - https://www.okx.com/
status: candidate
---

## 概要

海外大手 CEX は自社 token (exchange token) を発行し、(a) **手数料割引** (b) **利益還元 buyback&burn** (c) **自社 L1 ガス token** の 3 役割を統合する。これは取引所収益の token 化と顧客 lock-in を同時に実現する設計だが、**FTX FTT 暴落 (2022-11)** で balance sheet 担保利用の risk が顕在化した。**Binance BNB** は時価 $80-100B 規模の主要 utility token として継続するが、SEC 訴訟 (2023-06) で証券性論争を惹起した (2025-02 取下げ)。

## 主要 CEX 自家 token 比較

| Token | 取引所 | 役割 | 時価規模 |
|---|---|---|---|
| **BNB** | Binance | BSC L1 ガス + 手数料割引 25% + quarterly burn (利益の 20%) | $80-100B |
| **OKB** | OKX | X Layer (L2) ガス + 手数料割引 + buyback burn | $3-5B |
| **HT** | Huobi → HTX | buyback burn + 手数料割引 (2022 ダウン後縮小) | 縮小 |
| **KCS** | KuCoin | bonus rewards + 手数料割引 + KCC L1 ガス | 中規模 |
| **BGB** | Bitget | buyback burn + 手数料割引 + Bitget Wallet 連携 | 拡大中 |
| **MX** | MEXC | 手数料割引 + DAO ガバナンス | 小規模 |
| **FTT** | FTX | Alameda 自社買支え + 担保利用 → 2022-11 暴落・FTX 破綻トリガー | 消滅 |

## 経済機制の trade-off

- **buyback&burn**: 流通量減少 + 価格支え · SEC 証券認定リスク (Howey test)
- **手数料割引**: 顧客 lock-in + 取引量拡大 · 直接収益減
- **自社 L1 ガス**: chain 価値捕捉 + ecosystem 拡大 · L1 失敗時 token 価値喪失
- **担保利用 (FTX FTT パターン)**: balance sheet 拡大 · 暴落時 流動性危機 → 破綻 trigger

## 規制リスク (米 SEC + EU MiCA)

- **2023-06 SEC vs Binance/Coinbase**: BNB を未登録証券として訴え (Howey test 適用) · 訴訟係属 → **2025-02 SEC 取下げ** (Trump 政権下方針転換)
- 多くの自家 token は SEC 観点では証券性疑い (利益期待 + 共同事業性)
- **MiCA (EU 2024-12 全面施行)**: 自家 token は **ART** (Asset-Referenced Token) または **EMT** (E-Money Token) 分類 + ライセンス必要 · 多くは未対応

## 国内 CEX 不在の構造的理由

国内 CEX には自家 token なし — **JVCEA WhiteList 制度**の規制制約 (上場銘柄審査) + **改正資金決済法**上の **利益相反問題** (自社発行 token の自社取引所上場禁止) · 海外大手とは異なる ビジネスモデル (販売所スプレッド + ポイント連携) で代替

## 関連

- [[exchanges/global-cex-top10-comparison]]
- [[exchanges/jp-foreign-exchange-bitget]] (BGB)
- [[exchanges/jp-foreign-exchange-mexc]] (MX)
- [[exchanges/jp-foreign-exchange-kucoin]] (KCS)
- [[exchanges/jp-foreign-exchange-bybit]]
- [[exchanges/jp-exchange-binance-japan]]
- [[exchanges/jp-exchange-okcoin-japan]]
- [[exchanges/us-crypto-licensing-multi-layer-system]] (SEC 関連)
- [[exchanges/jvcea-whitelist-token-listing]]
