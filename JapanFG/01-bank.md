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
---

# 01銀行 (01Bank)


## Wiki route

This entry sits under [[JapanFG/INDEX|JapanFG index]]. Read it against [[JapanFG/ui-bank|UI銀行 (UI Bank)]] for peer / contrast context, [[JapanFG/fukuoka-fg|ふくおか FG (FFG)]] for parent group context, and [[banking/INDEX|banking index]] for the broader system / regulatory boundary.

## TL;DR

01銀行は FSA の銀行免許リスト上「０１銀行株式会社」として掲載される新興 digital-bank operating company。**[[JapanFG/fukuoka-fg|ふくおか FG (FFG)]] 傘下の SME 特化型デジタル銀行**として 2024-02 に開業し、公式会社概要では「データでビジネスを応援する」を掲げ、決算書だけでなく事業活動データ（クラウド会計・SaaS 利用実績等）を融資判断に活用する SME finance / data banking model を志向する ^[extracted]。FFG の「みんなの銀行」(リテール向けフルクラウドネオバンク) と並ぶ第二弾デジタルバンク子会社で、ターゲットを **法人 / SME / freelance** に絞った棲み分け戦略 ^[inferred]。

## 1. 法人・ライセンス境界

| Item | Reading |
|---|---|
| Legal name | ０１銀行株式会社 |
| Brand | 01Bank |
| FSA category | その他銀行 |
| Bank license | 銀行法に基づく普通銀行免許 |
| Establishment | 2024-02 |
| 本店 | 東京都 ^[ambiguous]（公式 IR 要確認） |
| Parent | [[JapanFG/fukuoka-fg|ふくおか FG (FFG)]] 100% 子会社 ^[inferred] |
| Core model | Business-data based SME finance / digital banking |

## 2. KPI 表（v1.0 公開ベース概算）^[inferred]

開業から日が浅く（2024-02 開業）、独立した有価証券報告書はまだ整備されていない可能性が高い。以下は親会社 FFG の IR 開示 / 報道ベースの参考値で、確定値は FFG 連結 IR / 01Bank 公式開示で都度確認すべき。

| 指標 | 2024年度（概算）^[ambiguous] | 備考 |
|---|---|---|
| 預金残高 | 未開示 / 小規模 | 開業初年度、預金獲得は限定的 ^[inferred] |
| 貸出残高 | 未開示 | データ与信モデルの実装段階 ^[inferred] |
| 経常利益 | 開業期赤字を想定 | デジタル銀行の典型的立ち上がりパターン ^[inferred] |
| ROE | n/a | 黒字化前 ^[inferred] |
| 口座数 | 未開示 | 法人専業のため少数精鋭型 ^[inferred] |

参考：親会社 FFG 連結（2024年度）は預金 ¥21〜22兆円規模、ROE 5〜6% 級の地銀大手。

## 3. 重要年表

| 年月 | 事象 |
|---|---|
| 2023年中 | FFG が新たな SME 特化デジタル銀行構想を公表 ^[inferred] |
| 2024-02 | **01銀行 開業**（銀行免許取得・サービス開始） ^[extracted] |
| 2025-07-24 | 公式ニュースリリース「事業方針について」公開（データ与信モデルの方向性開示）^[extracted] |
| 2025-2026 | サービス拡充期・口座数蓄積段階 ^[inferred] |

## 4. 親会社 FFG との関係

[[JapanFG/fukuoka-fg|ふくおか FG (FFG)]] は福岡銀行を中核とする九州ベースの大手地銀 FG（東証プライム 8354）。傘下に：

- **福岡銀行**（中核 / 九州 retail + 法人）
- **熊本銀行**・**親和銀行**（隣接県カバー）
- **[[banking/minna-bank-baas-model|みんなの銀行]]**（2021-05 開業、フルクラウドネオバンク、リテール向け）
- **01銀行**（2024-02 開業、SME / 法人特化デジタル銀行）

FFG はメガバンク以外で **「複数のデジタル銀行子会社」を保有する唯一の地銀 FG** であり、リテール（みんなの銀行）と SME（01銀行）の二系統で「**地銀発デジタルプラットフォーマー**」戦略を貫く。みんなの銀行が GCP（Google Cloud）フルクラウドベースの先駆例だったのに対し、01銀行はクラウド会計・SaaS データ連携を融資判断に組み込む **データ与信特化型 SME bank** という別軸。

## 5. 業務モデル — データドリブン SME finance

- クラウドサービス等のビジネスデータを活用し、決算書中心では見えにくい事業活動実態を融資判断へ反映することを掲げる ^[extracted]
- 想定データソース：クラウド会計（freee / マネーフォワード等）、EC プラットフォーム、決済 PSP、SaaS 利用実績、銀行口座 API 連携 ^[inferred]
- メガバンク・地銀の既存チャネルではなく、データ連携型の新しい事業者向け銀行モデルとして位置付け
- 比較対象：[[JapanFG/ui-bank|UI銀行]]、[[banking/minna-bank-baas-model|みんなの銀行]]、[[banking/baas-japan-landscape|BaaS landscape]]

## 6. ピア比較 — 地銀デジタル子会社の系譜

| 銀行 | 親 FG | 開業 | ターゲット | アーキテクチャ |
|---|---|---|---|---|
| みんなの銀行 | [[JapanFG/fukuoka-fg|FFG]] | 2021-05 | リテール | GCP フルクラウド |
| **01銀行** | **[[JapanFG/fukuoka-fg|FFG]]** | **2024-02** | **SME / 法人** | **データ与信特化** ^[inferred] |
| [[JapanFG/ui-bank|UI銀行]] | きらぼし FG | 2022-01 | リテール / 中小法人 | クラウドベース |
| Tonari (BaaS) | [[JapanFG/hokkoku-fhd|北國 FHD]] / CCI | 2023-04 | 他地銀向け BaaS | Microsoft Azure |

FFG だけが「2 銀行体制」で、北國 FHD は「BaaS 外販」、きらぼしは「単一デジタル銀行」と路線が分岐。

## 7. 監督・規制

- **主管**：金融庁（FSA）、関東財務局（本店所在地に応じて）
- **業態**：銀行法に基づく普通銀行
- **預金保険**：預金保険機構加盟（普通預金は 1,000万円まで保護）
- **API 連携 / オープンバンキング**：銀行法改正後のオープン API 枠組み下で稼働 ^[inferred]
- **データ与信**：個人情報保護法 + 金商法（信用情報利用）+ 銀行法上の融資ガバナンス三重制約

## 8. Counterpoints

- **開業初期の収益性は構造的赤字** ^[inferred]：デジタル銀行の典型として、口座数・貸出残高の蓄積に数年単位を要する。みんなの銀行も開業 4 年経過後も黒字化未達ベース報道
- **データ与信モデルの信用リスク実証はこれから** ^[ambiguous]：決算書ベース以外の与信は理論的には先進的だが、デフォルト率実績がまだない。データソースのスコアリング有効性は中期検証が必要
- **FFG リソース配分の二重投資負荷** ^[inferred]：みんなの銀行 + 01銀行の同時運営は人材・IT 投資・規制コンプライアンスで二重負荷。グループ全体収益への寄与時期は未確定
- **SME デジタル銀行の競合密度** ^[ambiguous]：GMO あおぞらネット銀行、PayPay 銀行、住信 SBI ネット銀行など法人取引対応のネット銀行は既に複数存在。差別化軸（データ与信）の優位性持続性は要観察

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

---

> [!info] 校核状态
> confidence: **likely**（v1.1 公開ソース ベース、2026-05-25 拡張）。開業日（2024-02）・FSA 免許掲載・データ与信モデル方針は公開ベースで確認可能。親会社 FFG 100% 子会社という記述は連結子会社一覧での確認が望ましい ^[inferred]。KPI 数値は開業初期段階のため未開示が多く、有価証券報告書（FFG 連結）または独立開示の更新を要追跡。
