---
source: regional-banks/01-bank
source_hash: 6a3ca0f41b18c3f1
lang: ja
status: machine
fidelity: ok
title: "01銀行 (01Bank)"
translated_at: 2026-06-19T13:13:22.648Z
---
# 01銀行 (01Bank)

## Wiki route

This entry sits under [[regional-banks/INDEX|regional-banks INDEX]]. Read it against [[regional-banks/ui-bank|UI銀行 (UI Bank)]] and [[banking/minna-bank-baas-model|みんなの銀行]] for peer / contrast context (the two preceding 地銀デジタル銀行), [[regional-banks/ikeda-senshu-hd|池田泉州ホールディングス]] for parent group context, and [[banking/INDEX|banking index]] for the broader system / regulatory boundary.

## 1. 法人・ライセンス境界

| Item | Reading |
|---|---|
| Legal name | ０１銀行株式会社 |
| Brand | 01Bank |
| FSA category | その他銀行 |
| Bank license | 銀行法に基づく普通銀行免許（2025-02-28 免許交付）|
| 設立準備会社 | 2024-02（01Bank 設立準備株式会社）|
| 銀行免許取得 | 2025-02-28（金融庁が「01Bank 設立準備株式会社」へ免許交付、商号を「01銀行株式会社」へ変更）|
| 開業 | 2025-07-28（サービス提供開始）|
| 本店 | 大阪府吹田市豊津町 9 番 1 号（EDGE 江坂 19 階）|
| 親会社 | 株式会社池田泉州ホールディングス 100% |
| Core model | Business-data based SME finance / digital banking |

## 3. 重要年表

| 年月 | 事象 |
|---|---|
| 2024-02 | **01Bank 設立準備株式会社 設立**（開業準備会社の設立。銀行業はまだ開始していない） ^[extracted] |
| 2025-02-28 | **金融庁が銀行免許を交付**、準備会社の商号を「01銀行株式会社」へ変更（地方銀行系デジタルバンクとして 3 例目）^[extracted] |
| 2025-07-24 | 公式ニュースリリース「事業方針について」公開（データ与信モデルの方向性開示）^[extracted] |
| 2025-07-28 | **01銀行 開業**（サービス提供開始）^[extracted] |

## 4. 親会社 池田泉州 HD との関係

[[regional-banks/ikeda-senshu-hd|池田泉州ホールディングス]] は池田泉州銀行（大阪北部・北摂地盤）を中核とする関西の地銀持株会社（東証プライム 8714）。01銀行は同社の **100% 子会社**として 2025-07-28 に開業した中小企業（法人・個人事業主）向けデジタルバンクで、池田泉州 HD が 2020 に掲げた中期経営計画「Vision '25」のデジタルバンク構想の実行ビークルにあたる。

- **池田泉州銀行**（中核 / 関西 retail + 法人）
- **01銀行**（2025-07-28 開業、SME / 法人・個人事業主特化デジタル銀行、本ページ）

地方銀行系のデジタルバンク開業としては、**[[regional-banks/fukuoka-fg|ふくおか FG]] の [[banking/minna-bank-baas-model|みんなの銀行]]（2021-05）**、**東京きらぼし FG の [[regional-banks/ui-bank|UI銀行]]（2022-01）** に続く **3 例目**（日本経済新聞・ニッキン報道で一致）。みんなの銀行が GCP フルクラウドのリテール向け先駆例だったのに対し、01銀行はクラウド会計・SaaS データ連携を融資判断に組み込む **データ与信特化型 SME bank** という別軸。みんなの銀行とは資本系列の異なる **競合 / 比較対象**であって姉妹銀行ではない。

## 5. 業務モデル — データドリブン SME finance

- クラウドサービス等のビジネスデータを活用し、決算書中心では見えにくい事業活動実態を融資判断へ反映することを掲げる ^[extracted]
- メガバンク・地銀の既存チャネルではなく、データ連携型の新しい事業者向け銀行モデルとして位置付け
- 比較対象：[[regional-banks/ui-bank|UI銀行]]、[[banking/minna-bank-baas-model|みんなの銀行]]、[[banking/baas-japan-landscape|BaaS landscape]]

## 6. ピア比較 — 地銀デジタル子会社の系譜

| 銀行 | 親 FG | 開業 | ターゲット | アーキテクチャ |
|---|---|---|---|---|
| みんなの銀行 | [[regional-banks/fukuoka-fg|FFG]] | 2021-05 | リテール | GCP フルクラウド |
| [[regional-banks/ui-bank|UI銀行]] | きらぼし FG | 2022-01 | リテール / 中小法人 | クラウドベース |
| Tonari (BaaS) | [[regional-banks/hokkoku-fhd|北國 FHD]] / CCI | 2023-04 | 他地銀向け BaaS | Microsoft Azure |
| **01銀行** | [[regional-banks/ikeda-senshu-hd|池田泉州 HD]] | **2025-07** | SME / 法人・個人事業主 | データ与信特化 |

FFG はリテール（みんなの銀行）に加え SME 特化の 01銀行 ではなく、01銀行は **池田泉州 HD** 系の独立した第 3 の地銀デジタルバンク。北國 FHD は「BaaS 外販」、きらぼしは「単一デジタル銀行（UI銀行）」、池田泉州 HD は「SME / 個人事業主特化（01銀行）」と路線が分岐。

## 7. 監督・規制

- **主管**：金融庁（FSA）、近畿財務局（本店所在地 大阪府吹田市に応じて）
- **業態**：銀行法に基づく普通銀行
- **預金保険**：預金保険機構加盟（普通預金は 1,000万円まで保護）
- **データ与信**：個人情報保護法 + 金商法（信用情報利用）+ 銀行法上の融資ガバナンス三重制約

## 9. Open questions

- 01銀行の 2025年度 / 2026年度の口座数・貸出残高・経常利益開示は親 池田泉州 HD 連結 IR でどこまで詳細化されるか？（池田泉州 HD は「3 年で単年度黒字化」を掲げると報道）
- データ与信モデルのデフォルト率実績は公開されるか？ 業界ベンチマーク（メガ / 地銀の SME 融資デフォルト率）に対する優位性は？
- 先行する みんなの銀行（リテール）・UI銀行（リテール / 中小法人）に対し、01銀行の SME / 個人事業主特化が差別化として機能するか？
- 北國 FHD の Tonari (BaaS) や他地銀デジタル子会社との競合 / 連携の可能性は？
- 提携データソース（freee / マネーフォワード等）の具体的契約構造は？

## Related

- [[regional-banks/ikeda-senshu-hd]] — 親会社（池田泉州ホールディングス、関西地銀持株会社）
- [[banking/minna-bank-baas-model]] — FFG のデジタル銀行（地銀デジタルバンク 1 例目、比較対象）
- [[regional-banks/ui-bank]] — きらぼし FG デジタル銀行（2 例目、比較対象）
- [[regional-banks/fukuoka-fg]] — みんなの銀行の親 FG（地銀デジタルバンク先行事例の参考）
- [[regional-banks/hokkoku-fhd]] — 北國 FHD（CCI グループ）、BaaS 路線の参考
- [[banking/baas-japan-landscape]] — BaaS / デジタル銀行ランドスケープ
- [[banking/INDEX]]

## Sources

- FSA, "銀行免許一覧", `ginkou.xlsx`.
- 01Bank, "01Bankについて（会社概要）", https://01bank.co.jp/aboutus/index.html
- 01Bank, "事業方針ニュースリリース" (2025-07-24), https://01bank.co.jp/news/pdf/2025/0724.pdf
- ふくおかフィナンシャルグループ IR 公開資料
- Wikipedia: ふくおかフィナンシャルグループ（公開情報）
- **Wikipedia: 01銀行** https://ja.wikipedia.org/wiki/01銀行 （2026-05-30 確認）— 本店 大阪府吹田市豊津町 9-1、親会社 池田泉州ホールディングス 100%、免許交付 2025-02-28、開業 2025-07-28
- **PR TIMES: ０１銀行株式会社の開業、および事業方針について** https://prtimes.jp/main/html/rd/p/000000001.000166817.html — 「2025年2月28日に銀行免許を取得し」「2025年7月28日に開業」、主要株主 株式会社池田泉州ホールディングス 100%、本店 大阪府吹田市豊津町 9 番 1 号（EDGE 江坂 19 階）
- **日本経済新聞「池田泉州 HD、デジタルバンクを月内に開業 地方銀行で 3 例目」** https://www.nikkei.com/article/DGXZQOUF2270A0S5A720C2000000/ — 池田泉州 HD 傘下、ふくおか FG・東京きらぼし FG に続く 3 例目、2025-07-28 開業
- **ニッキン ONLINE「金融庁、池田泉州 HD の『01Bank』に免許交付」** https://www.nikkinonline.com/article/254475 — 2025-02-28 免許交付、準備会社（2024-02 設立）の商号を「01銀行株式会社」へ変更

> [!info] 親会社・系統の訂正済み（2026-05-30）
> 旧版は親会社を **ふくおか FG (FFG)** とし「みんなの銀行と並ぶ FFG の 2 デジタル銀行体制」「2024-02 開業」と記述していたが、いずれも誤り。正しくは **親会社 = 株式会社池田泉州ホールディングス（100%）**、**銀行免許交付 2025-02-28**、**開業 2025-07-28**。2024-02 は開業準備会社（01Bank 設立準備株式会社）の設立時点。地方銀行系デジタルバンクとしては FFG みんなの銀行（2021-05）・東京きらぼし FG UI銀行（2022-01）に続く 3 例目で、みんなの銀行とは資本系列の異なる競合であり姉妹銀行ではない（Wikipedia / PR TIMES / 日本経済新聞 / ニッキンで一致確認）。frontmatter tags・本店・セクション 4・6・年表・Related を全面訂正済み。

---

> [!info] 校核状态
