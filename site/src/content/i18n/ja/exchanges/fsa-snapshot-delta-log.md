---
source: exchanges/fsa-snapshot-delta-log
source_hash: feb870ac46a112c3
lang: ja
status: machine
fidelity: ok
title: "FSA 暗号資産交換業者レジストリ — snapshot 差分ログ"
translated_at: 2026-07-29T11:02:23.000Z
---
# FSA 暗号資産交換業者レジストリ — snapshot 差分ログ

## ウィキ上の位置づけ

この項目は [[exchanges/INDEX|exchanges index]] の配下に位置する。登録制度の枠組みは [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度]]、entity 統合の文脈は [[exchanges/jp-vasp-ma-consolidation-history|JP VASP M&A 史]]、海外無登録業者側は [[exchanges/fsa-foreign-exchange-warning-system|FSA 海外無登録警告書制度]] をあわせて読む。

## 目的

FSA「暗号資産交換業者登録一覧」(`kasoutuka.xlsx`) と JVCEA 会員一覧は、新規登録、廃業、社名変更、登録番号再付与などにより **継続的に変動する一次レジストリ** である。本ページは、その差分を時系列で記録するためのテンプレート / ログとして機能する。

個別 VASP entity ページ（[[exchanges/jp-exchange-bitbank|bitbank]] / [[exchanges/jp-exchange-line-xenesis|LINE Xenesis]] など）は時点 snapshot を記録するが、**「いつ何が変わったか」**の俯瞰は本ページに集約する。

## 記録テンプレート（snapshot 単位）

各 FSA 公表更新時に、以下のブロックを追記する：

```
## YYYY-MM-DD スナップショット差分

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

## 保存済み registry snapshot の比較

出典: 表全体は FSA `kasoutuka.xlsx` の [2024-08-20 保存版](https://web.archive.org/web/20240820011719/https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx)、[2025-02-06 保存版](https://web.archive.org/web/20250206070223/https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx)、[2025-09-07 保存版](https://web.archive.org/web/20250907103139/https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx) の各行を比較して集計した（2026-07-29 確認）。

| 保存時点 | 登録業者数 | 保存版で確認できる対象 |
|---|---|---|
| 2024-08-20 | 29 | FTX Japan を収載 |
| 2025-02-06 | 29 | DMM Bitcoin（第00010号）と CoinBest を収載 |
| 2025-09-07 | 28 | 第00010号は不在、OSL Japan を収載 |

この表は保存版そのものから確認できる差分だけを示す。保存日時の間に起きた変更の施行日や理由は、別の一次公表で確認しない限り推定しない。

## 更新ワークフロー

1. **FSA 公表確認** — `kasoutuka.xlsx` の更新（通常 半期ベース：4月/10月、随時更新あり）を直接 download
2. **前回 snapshot との diff** — 登録番号列 / 商号列 / 本店所在地列を機械的に比較
3. **本ページに snapshot delta ブロック追記**
4. **影響を受ける entity wiki の `last_tended` を更新**
5. **新規登録社が wiki 未整備** → [[financial-regulators/missing-financial-institutions-backlog|missing-financial-institutions-backlog]] に追加候補として記載
6. **廃業社の entity wiki** → `status: deprecated` に変更、廃業日を追記
7. **CHANGELOG 反映**（domain INDEX に snapshot 反映日を記録）

## JVCEA 会員一覧との突合

FSA 登録社と JVCEA 会員社は **完全に一致しない** ケースがある（登録直後で JVCEA 加盟手続き中 / 加盟拒否事例など）。本ログでは差分も併記する：

- **FSA 登録 + JVCEA 加盟済み**：標準形
- **FSA 登録 + JVCEA 未加盟**：要注視（自主規制非加盟ステータスは異例）
- **FSA 登録抹消 + JVCEA 残存**：典型的な廃業遅延パターン

## 関連

- [[exchanges/INDEX]] — exchanges domain INDEX
- [[exchanges/fsa-vasp-registration-system]] — 登録制度・番号体系
- [[exchanges/jp-vasp-regulatory-timeline]] — 規制タイムライン
- [[exchanges/jp-vasp-ma-consolidation-history]] — JP VASP M&A 史
- [[exchanges/jp-vasp-parent-company-map]] — 親会社マップ
- [[exchanges/fsa-foreign-exchange-warning-system]] — 海外無登録警告書制度（補完情報）
- [[exchanges/jvcea-spot-volume-statistics-analysis]] — JVCEA スポット統計

## 出典

- [FSA 暗号資産交換業者登録一覧 Excel](https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx) — 一次ソース（現行版のみ公開）（アクセス 2026-05-30）
- [JVCEA 会員一覧](https://jvcea.or.jp/member/) — 自主規制側突合ソース（アクセス 2026-05-30）
- [金融庁 暗号資産関連告示・行政処分公表ページ](https://www.fsa.go.jp/) — 廃業・行政処分側ソース（アクセス 2026-05-30）
- [FSA kasoutuka.xlsx Wayback 2024-08-20](https://web.archive.org/web/20240820011719/https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx) — 全業者数 29、「FTX Japan」収載。2024-10-01 行の改称前 snapshot（アクセス 2026-05-30）
- [FSA kasoutuka.xlsx Wayback 2025-02-06](https://web.archive.org/web/20250206070223/https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx) — 全業者数 29、第00010号（DMM Bitcoin）・CoinBest 収載。2025-04-01 diff の基準前 snapshot（アクセス 2026-05-30）
- [FSA kasoutuka.xlsx Wayback 2025-09-07](https://web.archive.org/web/20250907103139/https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx) — 全業者数 28、第00010号消失・OSL Japan 収載。DMM Bitcoin 抹消と CoinBest→OSL 改称を反映（アクセス 2026-05-30）
- [Custodiem「FTX Japan 株式会社の商号変更に関するお知らせ」](https://support.custodiem.com/hc/ja/articles/29710664413709-FTX-Japan-%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%81%AE%E5%95%86%E5%8F%B7%E5%A4%89%E6%9B%B4%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B) — FTX Japan→Custodiem 改称（bitFlyer HD 完全子会社化、2024-07-26 公表）（アクセス 2026-05-30、本文取得は検索スニペット経由）
- [赤坂経済新聞「OSL Group Limited 傘下の CoinBest が『OSL Japan 株式会社』へ社名変更」](https://akasaka.keizai.biz/release/377391/) — CoinBest→OSL Japan 改称（2025-02）（アクセス 2026-05-30）
- [ITmedia NEWS「『DMMビットコイン』廃業へ」](https://www.itmedia.co.jp/news/articles/2412/02/news093.html) — DMM Bitcoin 廃業意向 2024-12-01 公表、資産 SBI VC トレード移管（アクセス 2026-05-30）
- [SBI HD ニュースリリース（DMM Bitcoin 移管 14 銘柄取扱開始）](https://www.sbigroup.co.jp/news/2025/0226_15274.html) — SBI VC トレードへの口座・資産移管（2025-03）（アクセス 2026-05-30）
- [DMM Bitcoin — Wikipedia](https://ja.wikipedia.org/wiki/DMM_Bitcoin) — 関東財務局長 第00010号（平成29年12月1日登録）、2025-03-08 サービス終了（アクセス 2026-05-30）

---

> [!info] 校核状態
> confidence: **likely**（v1.0 テンプレートページ、2026-05-25 新規作成）。本ページは継続的に追記・更新するログ性 wiki であり、各 snapshot delta ブロック追加時に diff の真正性を FSA 一次ソースで確認すべきである。テンプレート構造自体は安定運用向け。
