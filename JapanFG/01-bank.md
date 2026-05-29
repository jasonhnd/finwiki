---
title: "01銀行 (01Bank)"
aliases: ["01Bank", "01 Bank", "01銀行", "０１銀行", "０１銀行株式会社"]
domain: JapanFG
created: 2026-05-20
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-20
confidence: likely
tags: [JapanFG, bank, digital-bank, sme-finance, operating-company, ffg-subsidiary]
status: active
sources:
  - "https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx"
  - "https://01bank.co.jp/aboutus/index.html"
  - "https://01bank.co.jp/news/pdf/2025/0724.pdf"
  - "Fukuoka FG IR 公開資料"
  - "Wikipedia: ふくおかフィナンシャルグループ (公開情報)"
  - "Wikipedia: 01銀行 (本店=大阪府吹田市・親会社=池田泉州HD, 2026-05-29 確認) https://ja.wikipedia.org/wiki/01銀行"
  - "PR TIMES: ０１銀行株式会社の開業、および事業方針について (本店=大阪府吹田市豊津町9番1号) https://prtimes.jp/main/html/rd/p/000000001.000166817.html"
---
# 01銀行 (01Bank)

## Wiki route

This entry sits under [[JapanFG/INDEX|JapanFG index]]. Read it against [[JapanFG/ui-bank|UI銀行 (UI Bank)]] for peer / contrast context, [[JapanFG/fukuoka-fg|ふくおか FG (FFG)]] for parent group context, and [[banking/INDEX|banking index]] for the broader system / regulatory boundary.

## 1. 法人・ライセンス境界

| Item | Reading |
|---|---|
| Legal name | ０１銀行株式会社 |
| Brand | 01Bank |
| FSA category | その他銀行 |
| Bank license | 銀行法に基づく普通銀行免許 |
| Establishment | 2024-02 |
| 本店 | 大阪府吹田市豊津町 9 番 1 号（EDGE 江坂 19 階）|
| Core model | Business-data based SME finance / digital banking |

## 3. 重要年表

| 年月 | 事象 |
|---|---|
| 2024-02 | **01銀行 開業**（銀行免許取得・サービス開始） ^[extracted] |
| 2025-07-24 | 公式ニュースリリース「事業方針について」公開（データ与信モデルの方向性開示）^[extracted] |

## 4. 親会社 FFG との関係

[[JapanFG/fukuoka-fg|ふくおか FG (FFG)]] は福岡銀行を中核とする九州ベースの大手地銀 FG（東証プライム 8354）。傘下に：

- **福岡銀行**（中核 / 九州 retail + 法人）
- **熊本銀行**・**親和銀行**（隣接県カバー）
- **[[banking/minna-bank-baas-model|みんなの銀行]]**（2021-05 開業、フルクラウドネオバンク、リテール向け）
- **01銀行**（2024-02 開業、SME / 法人特化デジタル銀行）

FFG はメガバンク以外で **「複数のデジタル銀行子会社」を保有する唯一の地銀 FG** であり、リテール（みんなの銀行）と SME（01銀行）の二系統で「**地銀発デジタルプラットフォーマー**」戦略を貫く。みんなの銀行が GCP（Google Cloud）フルクラウドベースの先駆例だったのに対し、01銀行はクラウド会計・SaaS データ連携を融資判断に組み込む **データ与信特化型 SME bank** という別軸。

## 5. 業務モデル — データドリブン SME finance

- クラウドサービス等のビジネスデータを活用し、決算書中心では見えにくい事業活動実態を融資判断へ反映することを掲げる ^[extracted]
- メガバンク・地銀の既存チャネルではなく、データ連携型の新しい事業者向け銀行モデルとして位置付け
- 比較対象：[[JapanFG/ui-bank|UI銀行]]、[[banking/minna-bank-baas-model|みんなの銀行]]、[[banking/baas-japan-landscape|BaaS landscape]]

## 6. ピア比較 — 地銀デジタル子会社の系譜

| 銀行 | 親 FG | 開業 | ターゲット | アーキテクチャ |
|---|---|---|---|---|
| みんなの銀行 | [[JapanFG/fukuoka-fg|FFG]] | 2021-05 | リテール | GCP フルクラウド |
| [[JapanFG/ui-bank|UI銀行]] | きらぼし FG | 2022-01 | リテール / 中小法人 | クラウドベース |
| Tonari (BaaS) | [[JapanFG/hokkoku-fhd|北國 FHD]] / CCI | 2023-04 | 他地銀向け BaaS | Microsoft Azure |

FFG だけが「2 銀行体制」で、北國 FHD は「BaaS 外販」、きらぼしは「単一デジタル銀行」と路線が分岐。

## 7. 監督・規制

- **主管**：金融庁（FSA）、近畿財務局（本店所在地 大阪府吹田市に応じて）
- **業態**：銀行法に基づく普通銀行
- **預金保険**：預金保険機構加盟（普通預金は 1,000万円まで保護）
- **データ与信**：個人情報保護法 + 金商法（信用情報利用）+ 銀行法上の融資ガバナンス三重制約

## 9. Open questions

- 01銀行の 2025年度 / 2026年度の口座数・貸出残高・経常利益開示は親 FFG 連結 IR でどこまで詳細化されるか？
- データ与信モデルのデフォルト率実績は公開されるか？ 業界ベンチマーク（メガ / 地銀の SME 融資デフォルト率）に対する優位性は？
- みんなの銀行 + 01銀行の 2 銀行体制を維持するか、将来的に統合される可能性は？
- 北國 FHD の Tonari (BaaS) や他地銀デジタル子会社との競合 / 連携の可能性は？
- 提携データソース（freee / マネーフォワード等）の具体的契約構造は？

## Related

- [[JapanFG/fukuoka-fg]] — 親会社、地銀大手
- [[banking/minna-bank-baas-model]] — FFG のもう一方のデジタル銀行子会社
- [[JapanFG/ui-bank]] — きらぼし FG デジタル銀行
- [[JapanFG/hokkoku-fhd]] — 北國 FHD（CCI グループ）、BaaS 路線の参考
- [[banking/baas-japan-landscape]] — BaaS / デジタル銀行ランドスケープ
- [[banking/INDEX]]

## Sources

- FSA, "銀行免許一覧", `ginkou.xlsx`.
- 01Bank, "01Bankについて（会社概要）", https://01bank.co.jp/aboutus/index.html
- 01Bank, "事業方針ニュースリリース" (2025-07-24), https://01bank.co.jp/news/pdf/2025/0724.pdf
- ふくおかフィナンシャルグループ IR 公開資料
- Wikipedia: ふくおかフィナンシャルグループ（公開情報）
- **Wikipedia: 01銀行** https://ja.wikipedia.org/wiki/01銀行 （2026-05-29 確認）— 本店 大阪府吹田市豊津町 9-1、親会社 池田泉州ホールディングス 100%
- **PR TIMES: ０１銀行株式会社の開業、および事業方針について** https://prtimes.jp/main/html/rd/p/000000001.000166817.html — 本店所在地 大阪府吹田市豊津町 9 番 1 号（EDGE 江坂 19 階）、株式会社池田泉州ホールディングス 100%

> [!warning] 親会社の要訂正
> 本エントリーは親会社を **ふくおか FG (FFG)** とし「みんなの銀行と並ぶ FFG の 2 デジタル銀行体制」と記述しているが、**01銀行の親会社は株式会社池田泉州ホールディングス（100%）であり FFG ではない**（Wikipedia / PR TIMES / 日本経済新聞「池田泉州 HD、デジタルバンクを月内に開業 地方銀行で 3 例目」/ ニッキン「金融庁、池田泉州 HD の『01Bank』に免許交付」で一致確認、2026-05-29）。免許取得 2025-02-28、開業 2025-07-28。今回の依頼範囲（曖昧タグ解消）は本店所在地の訂正にとどめ、親会社・系統に関する記述（frontmatter tags / セクション 4・6 / Related）は別タグ（抽出済み扱い）付きで本依頼の対象外のため未修正。要全面訂正。

---

> [!info] 校核状态
