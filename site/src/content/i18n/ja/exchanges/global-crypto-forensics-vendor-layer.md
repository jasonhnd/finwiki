---
source: exchanges/global-crypto-forensics-vendor-layer
source_hash: 8fad60588f2bd797
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "グローバル暗号資産フォレンジックベンダー層 — Chainalysis / Elliptic / TRM / Crystal 比較"
translated_at: 2026-06-26T08:28:53.956Z
---
﻿
# グローバル暗号資産フォレンジックベンダー層 — Chainalysis / Elliptic / TRM / Crystal 比較

## ウィキ上の位置づけ

このエントリは [[exchanges/INDEX|exchanges index]] の配下に位置づけられる。ピア比較・対照の文脈では [[exchanges/jp-vasp-aml-travel-rule-implementation|国内 VASP 犯収法 + FATF Travel Rule 国内実装 (2023-)]]、より広いシステムおよび規制境界については [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] とあわせて読む。

## 概要

CEX + 銀行 + 法執行機関は、暗号資産取引の AML/CFT 監視、制裁スクリーニング、不正資金追跡で専門 forensics vendor に依存する。Chainalysis (米) が業界標準として君臨、Elliptic / TRM Labs / Crystal Intelligence が競合上位を形成。OFAC freeze + Travel Rule + 制裁監視 + Lazarus/北朝鮮 trace の中核インフラであり、現代の暗号資産規制は事実上これら vendor の存在を前提として成立している。国内 VASP も全社が海外 vendor と顧問契約。

## 上位 4 ベンダー比較

- **Chainalysis** (NY · 2014 設立) — 業界標準。Reactor (investigation tool) + KYT (real-time transaction monitoring) + Crypto Crime Report (年次公開、業界バイブル)。顧客 = 米財務省 / FBI / IRS / 国税庁 / 多数 CEX。評価額 $8.6B (2022 ラウンド)
- **Elliptic** (London · 2013 設立) — 創業 Tom Robinson (元 BAML)。KYC + transaction monitoring + sanction screening。機関投資家 + 銀行中心の顧客層。Lazarus / Bybit hack 30 分以内 freeze で名声
- **TRM Labs** (San Francisco · 2018 設立) — risk score + crypto-native API ファースト。速いイテレーション + 新興 chain サポートの広さ。Crypto Crime Report (Chainalysis 競合) 発行
- **Crystal Intelligence** (Bitfury 子会社、エストニア → スイス) — 欧州 + ロシア出自 (現在規制問題で縮小傾向)。法執行機関向けに強み

## 主要サービス

- **Transaction monitoring (KYT)**: リアルタイムチェーン分析。CEX 入出金時の risk score 即時返答 (mixer / sanctioned ウォレット / darknet market タグ付き)
- **ウォレット labeling / clustering**: 既知ウォレット (Lazarus / Tornado Cash / Hydra Market / Garantex / Bitzlato) のクラスタリング DB
- **Sanction screening**: OFAC SDN list 自動チェック + EU/UK/UN 制裁リスト統合
- **Investigation tools**: 法執行機関向け fund flow 追跡 UI (Reactor / Investigator / Forensics)

## 主要事件での役割

- **2022-02 Wormhole hack ($325M)**: Chainalysis 追跡で資金動向公開 monitor
- **2024-05 DMM Bitcoin Lazarus hack ($305M)**: Chainalysis + FBI + DC3 合同帰属公表
- **2025-02 Bybit hack ($1.46B)**: Elliptic + ZachXBT が 30 分以内 freeze 連携、史上最速規模の追跡対応
- **2022-08 Tornado Cash OFAC 制裁**: 全 vendor が即座 SDN 拡張対応、コントラクトアドレスをタグ付け
- **2023-04 Bitzlato 摘発**: Chainalysis 提供データが起訴の中核証拠

## 国内 VASP との関係全国内 VASP (bitFlyer / Coincheck / GMO コイン / SBI VC Trade / bitbank / DMM Bitcoin) は Chainalysis または Elliptic を顧問契約。JVCEA Travel Rule 実装でも vendor API が前提。TRM Labs は B2C2 Japan / 機関中心。Crystal は限定的。国内独自 vendor は存在せず海外依存構造 (主権リスク = 米 OFAC 政策変更が国内 VASP 業務に直結)。

## 関連項目

- [[exchanges/jp-vasp-aml-travel-rule-implementation]]
- [[exchanges/jp-vasp-security-audit-certification]]
- [[exchanges/bybit-lazarus-hack-detailed-analysis]]
- [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis]]
- [[exchanges/cross-chain-bridge-cex-deposit-withdrawal]]
- [[exchanges/jp-crypto-market-maker-otc-layer]]
- [[fintech/chain-level-ofac-freeze-precedent]]
- [[fintech/carf-1099da-end-of-crypto-anonymity]]
- [[security/forensic-identity-anchor-chain|forensic identity anchor chain]]
- [[security/bytecode-forensic-three-tier-verify|bytecode forensic 3-tier verify]]
- [[security/wayback-machine-as-forensic-tool|wayback machine as forensic tool]]
