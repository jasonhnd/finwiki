---
title: "[opinion] みんなの銀行 BaaS model"
source_entry: banking/minna-bank-baas-model.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — みんなの銀行 BaaS model

> 出典エントリー: `banking/minna-bank-baas-model.md`

## Counterpoints

- BaaS 口座数は primary bank relationship と同義ではない。口座開設後の残高、給与受取、決済頻度を別に見る必要がある。
- パートナー支店はブランド効果が強い一方、パートナーのサービス利用頻度に依存する。
- API 提供は技術力だけでなく、金融庁 / 財務局登録、事故時責任分界、AML / 不正送金対応が実装制約になる。
- 「金融ライセンス不要でも利用可能」という表現は機能範囲次第。資金移動指図や口座情報表示まで踏み込む場合は、電子決済等代行業などの確認が必要になる。

## Open questions

- BaaS 経由口座は、どの程度預金残高と日常決済に転換しているか。
- パートナー支店を複数持てる仕様変更後、支店間のカニバリゼーションは起きるか。
- [[JapanFG/fukuoka-fg|ふくおかFG]] は BaaS を単独銀行事業として黒字化できるか、それともグループ全体のデジタル実験投資と見るべきか。
