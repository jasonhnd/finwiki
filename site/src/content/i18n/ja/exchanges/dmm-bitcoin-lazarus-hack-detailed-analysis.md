---
source: exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis
source_hash: 8c69901545d0ab8d
lang: ja
status: machine
fidelity: ok
title: "DMM Bitcoin 流出事件 詳細分析 (2024-05) — Lazarus 帰属 4,502.9 BTC"
translated_at: 2026-06-02T12:19:04.246Z
---
﻿
# DMM Bitcoin 流出事件 詳細分析 (2024-05) — Lazarus 帰属 4,502.9 BTC


## ウィキ上の位置づけ

このエントリは [[exchanges/INDEX|exchanges index]] の配下に位置づけられる。ピア比較・対照の文脈では [[exchanges/coincheck-nem-hack-detailed-analysis|Coincheck NEM 580 億円流出事件 詳細分析 (2018-01)]]、より広いシステムおよび規制境界については [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] とあわせて読む。

## 1. 事件概要

2024-05-31 夕方、DMM Bitcoin から **4,502.9 BTC (約 482 億円相当)** が不正流出。当時としては [[exchanges/jp-exchange-coincheck]] NEM 事件 (2018, 580 億円) に次ぐ国内大規模流出事件。後に FBI + 警察庁 + DC3 (米国防省サイバー犯罪センター) の三者合同で 2024-12 に北朝鮮 Lazarus 配下 **TraderTraitor** への帰属が公表された。

## 2. 技術原因 (公開情報範囲)

- **業務委託先システム** 経由のソーシャルエンジニアリング攻撃が推定経路
- **ホット鍵管理プロセス** の運用ミスが介在
- 詳細な侵入経路は捜査継続のため非公開
- 顧客資産の分別管理は機能しており、流出は会社資産分のみ (DMM 主張)

## 3. 緊急対応 + 顧客資産保全

- **2024-05-31** 全暗号資産取引停止
- **2024-06-05** DMM Bitcoin が自社グループから資金調達、顧客資産分相当 BTC を市場調達して保全
- **2024-09** [[exchanges/fsa-business-improvement-orders-history]] 業務改善命令発出
- **2024-12-01** サービス全面停止 + 廃業発表
- **2025-03-08** 顧客資産・口座を [[exchanges/jp-exchange-sbi-vc-trade]] に移管完了、DMM Bitcoin 法人解散

## 4. 帰属確認 (Lazarus / TraderTraitor)

- **2024-12-23** FBI + 警察庁 + DC3 三者合同声明で「TraderTraitor (Lazarus 配下) による」と公式帰属
- 北朝鮮国家関与暗号資産盗難として 2024 年度最大級規模
- Chainalysis 等 forensic ベンダーとの連携で資金フロー追跡継続中
- ミキサー経由のオフランプ阻止が課題

## 5. 制度的意味

- **廃業 + 競合移管モデル** という第 3 パターン (Coincheck 2018 = 子会社化吸収、FTX Japan 2023 = 分別管理で生存 + 100% 返還、DMM 2024 = 廃業 + 移管)
- **業務委託先リスク** の浮き彫り (EU CTPP / DORA と並行論点)
- グローバル Lazarus 脅威の国内立証
- 規制改正進行中 (2026 に向けて業務委託管理強化)

## 関連

- [[exchanges/jp-exchange-dmm-bitcoin]]
- [[exchanges/jp-exchange-sbi-vc-trade]]
- [[exchanges/jp-vasp-incident-history]]
- [[exchanges/coincheck-nem-hack-detailed-analysis]] (比較)
- [[exchanges/fsa-business-improvement-orders-history]]
- [[exchanges/jp-vasp-ma-consolidation-history]]
- [[security/forensic-identity-anchor-chain|forensic identity anchor chain]]
- [[security/bytecode-forensic-three-tier-verify|bytecode forensic 3-tier verify]]
- [[exchanges/bybit-lazarus-hack-detailed-analysis|Bybit Lazarus ハック詳細分析]]
- [[exchanges/global-crypto-forensics-vendor-layer|グローバル crypto forensics ベンダーレイヤー]]

出典: 公開情報整理 (DMM Bitcoin/SBI VC Trade IR 開示、FSA 業務改善命令、警察庁/NPA 公表、Chainalysis/Elliptic 公開トレース、Lazarus グループ追跡レポート)
