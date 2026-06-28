---
source: exchanges/jp-vasp-aml-travel-rule-implementation
source_hash: 6244094904490df3
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "国内 VASP 犯収法 + FATF Travel Rule 国内実装 (2023-)"
translated_at: 2026-06-26T08:29:09.708Z
---
# 国内 VASP 犯収法 + FATF Travel Rule 国内実装 (2023-)

## 概要国内 VASP は **犯罪収益移転防止法（犯収法）** により、本人確認、取引監視、疑わしい取引の届出を義務づけられている。**FATF Recommendation 16 （Travel Rule）** は 2023-06 の改正犯収法施行により完全実装され、仮想資産送金が **≥ 10 万円相当** の場合、送受信双方の KYC データ伝達が義務化された。AML/CFT 体系は、FSA 監督、JAFIC（警察庁）による情報集約、JVCEA 自主規制の三層構造で運用される。

## 犯収法上の義務 4 本柱

1. **本人確認 (KYC)**: 顧客特定事項確認（氏名・住所・生年月日）+ 取引時確認（200 万円超送金 / 10 万円超振込）
2. **取引記録の保存**: 7 年間（顧客識別 + 取引明細）
3. **疑わしい取引の届出**: JAFIC（警察庁犯罪収益移転防止対策室）経由で報告
4. **AML 体制整備**: 内部統制 + 役職員研修 + リスク評価書の年次更新

## Travel Rule 国内実装

- **施行日**: 2023-06-01（改正犯収法）
- **対象**: 暗号資産送金 ≥ 10 万円相当
- **伝達データ**: 送信者（氏名・住所・口座番号）+ 受信者（氏名・口座番号）
- **対応技術スタック**: TRUST (TRP) / VASPnet / Sumsub / Notabene などの vendor 経由
- **国内 VASP 対応状況**: 全 27 社が **VASPnet**（国内 standard）または **TRUST** に接続済み

## 海外との相互運用

- **米国 → 日本**: Coinbase / Kraken / Gemini などが Notabene 経由で VASPnet に接続
- **シンガポール → 日本**: MAS 規制 VASP が同様に接続
- **海外無登録 → 日本**: データ伝達不可。Travel Rule 不準拠の海外取引所からの送金は **受信拒否**（国内 VASP 側で着金停止）

## リスクと課題

- **Sunrise issue**: 各国の実装速度差（US は連邦法レベルでは後発・EU は MiCA 2024 で完全実装）
- **non-custodial ウォレット問題**: self-hosted ウォレット送金時の KYC が困難（MAS / FCA で論点継続）
- **プライバシー懸念**: BTC/ETH のオンチェーン透明性と KYC データ照合により、送金者の財務状況が推定されるリスク

## 関連項目

- [[exchanges/jvcea-self-regulatory-overview]]
- [[exchanges/jp-vasp-regulatory-timeline]]
- [[exchanges/fsa-vasp-registration-system]]
- [[exchanges/jp-vasp-cold-storage-segregation-rules]]
- [[fintech/fatf-travel-rule-overview]]
- [[fintech/fatf-travel-rule-cross-border-stack]]
- [[fintech/carf-1099da-end-of-crypto-anonymity]]
