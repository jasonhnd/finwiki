---
title: 国内 VASP コールド保管 95% + 分別管理制度
aliases:
  - JP VASP cold storage rule
  - ホットウォレット 5% ルール
  - 暗号資産分別管理義務
domain: exchanges
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-05-19
review_by: 2027-05-19
confidence: likely
tags:
  - exchanges
  - vasp
  - regulation
  - cold-storage
  - custody
  - segregation
sources:
  - https://www.fsa.go.jp/
  - https://jvcea.or.jp/
status: candidate
---

# 国内 VASP コールド保管 95% + 分別管理制度

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for peer / contrast context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system / regulatory boundary.

## 制度概要

改正資金決済法施行規則（2020-05 施行）により、顧客から預託された暗号資産の **95% 以上をコールドウォレット（オフライン環境）で保管する義務**が国内 VASP に課された。残り 5% 以下のみがホット運用許容（出金原資・流動性確保用）。直接のトリガーは [[exchanges/jp-vasp-incident-history]] の 2018-01 Coincheck NEM 580 億円流出事件。事件当時 NEM 全量がホット保管下にあった反省から、業界全体への規制反射として導入された。違反は業務改善命令の根拠となる（[[exchanges/fsa-business-improvement-orders-history]] 参照）。

## コールド/ホットの定義と例外

「コールド」とはネットワークから物理的に切断（エアギャップ）された署名環境を指す。鍵生成・署名はオフライン端末で実施、署名済み TX のみネット移送が原則。マルチシグ（M-of-N）構成や HSM（Hardware Security Module）使用時は、運用設計次第で「コールド相当」として認定可能（JVCEA 自主規制ガイドラインで個別審査）。MPC（Multi-Party Computation）型は新興技術として認定枠組み整備中。

## 分別管理の 3 形態

- **信託型**（法的分別最強）: 信託銀行に顧客暗号資産を信託、倒産隔離が法的に最強。三井住友信託・三菱 UFJ 信託が主受託者。
- **個別管理型**（内部分別）: 自社資産と顧客資産を別アカウント・別ウォレット・別記帳で管理。技術的分別だが法的倒産隔離は信託型より弱い。
- **混合型**: 一部信託 + 一部個別の現実的運用。主要 VASP の大半がこの形態。

## 国内主要 VASP の運用例

- [[exchanges/jp-exchange-bitflyer]]: 信託 + 一部個別（混合型）
- [[exchanges/jp-exchange-gmo-coin]]: 個別管理型中心
- [[exchanges/jp-exchange-coincheck]]: 2018 事件後に信託型へ全面移行
- [[exchanges/jp-exchange-sbi-vc-trade]]: 信託型多用（SBI グループ信託銀行活用）

## グローバル比較

- 米国 NYDFS BitLicense: 信託銀行 segregation 義務、Trust Charter 取得型カストディアン台頭（Coinbase Custody Trust 等）
- 香港 SFC Type 1 + VASP ライセンス: 顧客資産との混蔵（Co-Mingling）禁止、独立 Trust Company 経由必須
- EU MiCA CASP（2024 施行）: 顧客資産の完全分別保管義務、第三者カストディアン許容

参考: [[exchanges/jvcea-self-regulatory-overview]] · [[exchanges/jp-vasp-regulatory-timeline]] · [[exchanges/jp-institutional-custody-three-pillars]]
