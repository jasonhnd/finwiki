---
title: FSA crypto operator registry — snapshot delta log
aliases:
  - FSA snapshot delta log
  - JP VASP snapshot diff
  - 暗号資産交換業者一覧 差分ログ
domain: exchanges
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags:
  - exchanges
  - vasp
  - registry
  - fsa
  - snapshot
  - delta-log
sources:
  - https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx
  - https://jvcea.or.jp/member/
status: candidate
---

# FSA crypto operator registry — snapshot delta log

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度]] for the registration framework, [[exchanges/jp-vasp-ma-consolidation-history|JP VASP M&A 史]] for entity consolidation context, and [[exchanges/fsa-foreign-exchange-warning-system|FSA 海外無登録警告書制度]] for the unregistered foreign-operator side.

## 目的

FSA「暗号資産交換業者登録一覧」(`kasoutuka.xlsx`) と JVCEA 会員一覧は、新規登録・廃業・社名変更・登録番号再付与等で **継続的に変動する一次レジストリ** である。本ページは、その差分を時系列で記録するためのテンプレート / ログとして機能する。

個別 VASP entity ページ（[[exchanges/jp-exchange-bitbank|bitbank]] / [[exchanges/jp-exchange-line-xenesis|LINE Xenesis]] 等）は時点 snapshot を記録するが、**「いつ何が変わったか」**の俯瞰は本ページに集約する。

## 記録テンプレート（snapshot 単位）

各 FSA 公表更新時に、以下のブロックを追記する：

```
## YYYY-MM-DD snapshot delta

- **ベース snapshot**: 令和X年Y月Z日付 FSA kasoutuka.xlsx
- **総登録社数**: NN 社（前回 MM 社、差分 ±N）
- **新規登録**:
  - 関東財務局 第NNNNN号 — 〇〇株式会社（YYYY-MM-DD 登録）
- **廃業 / 登録抹消**:
  - 関東財務局 第NNNNN号 — 〇〇株式会社（YYYY-MM-DD 廃業）
- **社名変更**:
  - 関東財務局 第NNNNN号 — 旧 △△株式会社 → 新 □□株式会社（YYYY-MM-DD）
- **吸収合併**:
  - △△株式会社 → □□株式会社へ吸収（YYYY-MM-DD）
- **本店所在地変更**（重要案件のみ）:
  - 〇〇株式会社 — 旧 ××都港区 → 新 ××都中央区（YYYY-MM-DD）
- **JVCEA 会員ステータス変動**:
  - 第一種 → 第一種 + 第二種（暗号資産デリバティブ取引業 取得）
- **本ページ entity 影響**:
  - [[exchanges/jp-exchange-XXX]] — last_tended 更新が必要
- **業界トピック**:
  - （特筆事項：制度変更・大型 M&A・大手新規参入等）
```

## 既知の主要 snapshot 変動履歴（過去 2 年）

| Snapshot 時点 | 主要変動 | 参考 entity wiki |
|---|---|---|
| 令和6年4月1日（2024-04-01） | FTX Japan → bitbank 吸収完了反映 | [[exchanges/jp-exchange-bitbank]] / [[exchanges/ftx-japan-100pct-return-case-study]] |
| 令和6年10月1日（2024-10-01） | （差分要再確認） | — |
| 令和7年4月1日（2025-04-01） | （差分要再確認） | — |
| 令和7年10月1日（2025-10-01） | （差分要再確認） | — |
| **令和8年4月1日（2026-04-01）** | 最新 snapshot 基準（[[exchanges/jp-exchange-bitbank]] / [[exchanges/jp-exchange-line-xenesis]] etc. 引用元） | 個別ページ参照 |
| 令和8年10月1日（2026-10-01）予定 | **LINE Xenesis 廃業反映予定**（2026-06-01 サービス終了） | [[exchanges/jp-exchange-line-xenesis]] |

## 更新ワークフロー

1. **FSA 公表確認** — `kasoutuka.xlsx` の更新（通常 半期ベース：4月/10月、随時更新あり）を直接 download
2. **前回 snapshot との diff** — 登録番号列 / 商号列 / 本店所在地列を機械的に比較
3. **本ページに snapshot delta ブロック追記**
4. **影響を受ける entity wiki の `last_tended` を更新**
5. **新規登録社が wiki 未整備** → [[JapanFG/missing-financial-institutions-backlog|missing-financial-institutions-backlog]] に追加候補として記載
6. **廃業社の entity wiki** → `status: deprecated` に変更、廃業日を追記
7. **CHANGELOG 反映**（domain INDEX に snapshot 反映日を記録）

## JVCEA 会員一覧との突合

FSA 登録社と JVCEA 会員社は **完全に一致しない** ケースがある（登録直後で JVCEA 加盟手続き中 / 加盟拒否事例等）。本ログでは差分も併記する：

- **FSA 登録 + JVCEA 加盟済み**：標準形
- **FSA 登録 + JVCEA 未加盟**：要注視（自主規制非加盟ステータスは異例）
- **FSA 登録抹消 + JVCEA 残存**：典型的廃業遅延パターン

## 関連

- [[exchanges/INDEX]] — exchanges domain INDEX
- [[exchanges/fsa-vasp-registration-system]] — 登録制度・番号体系
- [[exchanges/jp-vasp-regulatory-timeline]] — 規制タイムライン
- [[exchanges/jp-vasp-ma-consolidation-history]] — JP VASP M&A 史
- [[exchanges/jp-vasp-parent-company-map]] — 親会社マップ
- [[exchanges/fsa-foreign-exchange-warning-system]] — 海外無登録警告書制度（補完情報）
- [[exchanges/jvcea-spot-volume-statistics-analysis]] — JVCEA スポット統計

## Sources

- [FSA 暗号資産交換業者登録一覧 Excel](https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx) — 一次ソース
- [JVCEA 会員一覧](https://jvcea.or.jp/member/) — 自主規制側突合ソース
- [金融庁 暗号資産関連告示・行政処分公表ページ](https://www.fsa.go.jp/) — 廃業・行政処分側ソース

---

> [!info] 校核状态
> confidence: **likely**（v1.0 テンプレートページ、2026-05-25 新規作成）。本ページは継続的に追記・更新するログ性 wiki で、各 snapshot delta ブロック追加時に diff の真正性を FSA 一次ソースで確認すべき。テンプレート構造自体は安定運用向け。
