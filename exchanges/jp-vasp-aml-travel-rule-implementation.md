---
title: 国内 VASP 犯収法 + FATF Travel Rule 国内実装 (2023-)
aliases:
  - JP VASP AML Travel Rule
  - 犯収法 + Travel Rule
  - FATF Recommendation 16 JP implementation
domain: exchanges
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-05-19
review_by: 2027-05-19
confidence: likely
tags:
  - exchanges
  - vasp
  - aml
  - cft
  - travel-rule
  - fatf
  - regulation
sources:
  - https://www.fsa.go.jp/
  - https://www.npa.go.jp/sosikihanzai/jafic/
  - https://jvcea.or.jp/
  - https://www.fatf-gafi.org/
status: candidate
---

## 概要

国内 VASP は **犯罪収益移転防止法 (犯収法)** で本人確認 + 取引監視 + 疑わしい取引届出を義務化されている。**FATF Recommendation 16 (Travel Rule)** は 2023-06 改正犯収法施行で完全実装され、仮想資産送金が **≥ 10 万円相当** で送受信両者の KYC データ伝達が義務化された。AML/CFT 体系は FSA 監督 + JAFIC (警察庁) 情報集約 + JVCEA 自主規制の三層構造で運用される。

## 犯収法上の義務 4 本柱

1. **本人確認 (KYC)**: 顧客特定事項確認 (氏名・住所・生年月日) + 取引時確認 (200 万円超送金 / 10 万円超振込)
2. **取引記録 保存**: 7 年間 (顧客識別 + 取引明細)
3. **疑わしい取引届出**: JAFIC (警察庁犯罪収益移転防止対策室) 経由で報告
4. **AML 体制整備**: 内部統制 + 役職員研修 + リスク評価書 年次更新

## Travel Rule 国内実装

- **施行日**: 2023-06-01 (改正犯収法)
- **対象**: 暗号資産送金 ≥ 10 万円相当
- **伝達データ**: 送信者 (氏名・住所・口座番号) + 受信者 (氏名・口座番号)
- **対応技術スタック**: TRUST (TRP) / VASPnet / Sumsub / Notabene 等 vendor 経由
- **国内 VASP 対応状況**: 全 27 社が **VASPnet** (国内 standard) または **TRUST** 接続済

## 海外との相互運用

- **米国 → 日本**: Coinbase / Kraken / Gemini 等が Notabene 経由で VASPnet 接続
- **シンガポール → 日本**: MAS 規制 VASP が同様に接続
- **海外無登録 → 日本**: データ伝達不可 → Travel Rule 不準拠の海外取引所は **受信拒否** (国内 VASP 側で着金停止)

## リスクと課題

- **Sunrise issue**: 各国実装速度差 (US は連邦法レベル後発 · EU は MiCA 2024 完全実装)
- **non-custodial wallet 問題**: self-hosted wallet 送金時の KYC 困難 (MAS / FCA で論点継続)
- **プライバシー懸念**: BTC/ETH オンチェーン透明性 + KYC データ照合で送金者の財務状況推定リスク

## Cross-links

- [[exchanges/jvcea-self-regulatory-overview]]
- [[exchanges/jp-vasp-regulatory-timeline]]
- [[exchanges/fsa-vasp-registration-system]]
- [[exchanges/jp-vasp-cold-storage-segregation-rules]]
- [[fintech/fatf-travel-rule-overview]]
- [[fintech/fatf-travel-rule-cross-border-stack]]
- [[fintech/carf-1099da-end-of-crypto-anonymity]]
