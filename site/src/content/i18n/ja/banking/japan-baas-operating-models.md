---
source: banking/japan-baas-operating-models
source_hash: ce3a3f7251fa53ce
lang: ja
status: machine
fidelity: ok
title: "日本の BaaS オペレーティングモデル"
translated_at: 2026-06-02T11:47:37.321Z
---

# 日本の BaaS オペレーティングモデル

## 概要

日本の BaaS は、顧客の帰属、預金契約の保有者、UI の管理者、API 提供者、KYC / AML / 不正監視の責任、そしてライセンススタックによって記述できる。パートナーブランドのアプリは銀行的な UX を提示しながら、銀行口座は法的には引き続き免許銀行に帰属しうる。

このページは [[banking/INDEX|banking domain]] の配下にあり、[[banking/baas-japan-landscape|Japan BaaS landscape]] に対するオペレーティングモデルの補完として位置づけられる。[[banking/minna-bank-baas-model|Minna Bank BaaS model]]、[[banking/mercari-bank|Mercari Bank]]、[[banking/mercari-bank-license-stack|Mercari Bank license stack]]、[[banking/quick-deposit-four-methods|quick deposit four methods]]、[[JapanFG/ssnb|SSNB]]、[[JapanFG/gmo-aozora-net|GMO Aozora Net Bank]]、[[JapanFG/ui-bank|UI Bank]]、[[banking/japan-net-bank-competition-map|Japan net bank competition map]]、[[banking/regional-bank-api-digital-partnership-route|regional bank API route]] にリンクしている。

## オペレーティングモデル・マトリクス

| モデル | 顧客接点 | 預金契約 | 典型例 | 主な分析論点 |
|---|---|---|---|---|
| API 提供型バンキング | パートナーアプリが振込・残高・決済・口座連携を組み込む | 免許銀行 | [[banking/minna-bank-baas-model|Minna Bank API]]、クイック入金経路 | API 同意、電子決済代行、AML / 不正の分担。 |
| パートナー支店 | 銀行アプリまたは銀行口座体験がパートナーのブランド / 支店を冠する | 免許銀行 | みんなの銀行のパートナー支店 | パートナーのマーケティングと銀行の法的責任。 |
| フルバンキング・ホワイトラベル / NEOBANK | パートナーブランドがより包括的な銀行口座提案を配信する | 免許銀行 | [[JapanFG/ssnb|SSNB]] NEOBANK | 顧客関係、口座経済性、サポートを誰が所有するか。 |
| 法人 API バンク | 法人口座と決済ワークフローが SaaS / 会計 / プラットフォーム業務に組み込まれる | 免許銀行 | [[JapanFG/gmo-aozora-net|GMO Aozora Net Bank]] | API の信頼性、財務オペレーション、SME の KYC、webhook / 連携リスク。 |
| 銀行代理経由 | 非銀行または隣接する銀行パートナーが銀行代理構造の下で銀行サービスを取り次ぐ / 取り扱う | 免許銀行 | [[JapanFG/ui-bank|UI Bank]] / CQ BANK 型経路 | 代理権限と顧客説明の境界。 |
| ナローBaaS | クイック入金や口座直接引落しのような単一の銀行機能 | 免許銀行＋決済 / API レイヤー | [[banking/quick-deposit-four-methods|quick deposit]] | 完全な銀行関係がなくともナローな実用性が価値を持ちうる。 |

## 法的スタック対 UX スタック

日本では、法的スタックと UX スタックがしばしば乖離する:

- 顧客はパートナーブランドを通じて口座を開設しうるが、預金は銀行が負う債務である。
- パートナーはアプリ上の体験を管理しうるが、KYC、AML、疑わしい取引のモニタリング、口座管理は引き続き銀行水準の義務として残る。
- 口座情報 API と決済指図 API は電子決済代行経路に触れうる。
- ウォレット残高、プリペイド残高、資金移動残高は銀行預金と同じではない。
- 証券 / 暗号資産 / 決済アプリは、銀行にならずに銀行振込を組み込むことができる。

関連する法的・決済経路には [[payments/japan-bank-api-payment-agency-route|bank API payment agency route]]、[[payments/account-to-account-payment-japan|account-to-account payment Japan]]、[[fintech/japan-financial-regulation|Japan financial regulation]] が含まれる。

## ケースセット

### みんなの銀行

[[banking/minna-bank-baas-model|Minna Bank]] は API 提供型バンキングとパートナー支店モデルを公に区別している。公開されているパートナーカテゴリには、小売、クリエイティブマーケットプレイス、証券、保険、FX、エンタテインメント、C2C プラットフォームが含まれる。

### SSNB NEOBANK

[[JapanFG/ssnb|SSNB]] NEOBANK はフルバンキングの BaaS モデルである。パートナーブランドの銀行口座体験を提供し、預金、振込、貸付、カード、証券隣接機能を接続できる。

### GMO あおぞら

[[JapanFG/gmo-aozora-net|GMO Aozora Net Bank]] は法人 API / SME オペレーティングモデルである。その BaaS の価値は、口座開設、振込、決済オペレーション、会計連携、API / webhook ワークフロー、スタートアップ / プラットフォームの財務にある。

### UI 銀行 / CQ BANK

[[JapanFG/ui-bank|UI Bank]] は銀行代理 / 地域グループのデジタルバンクの例である。アプリとパートナーチャネルを用いてデジタル口座の接点を作り出す一方、預金受入れは引き続き銀行の機能である。

## 責任の境界

| 責任 | 通常の帰属先 | 注記 |
|---|---|---|
| 預金債務 | 免許銀行 | パートナーブランドと預金債務者は別でありうる。 |
| UI / 顧客獲得 | パートナー、銀行、またはその両方 | CAC とデータアクセスを左右する。 |
| KYC / AML | 銀行、場合によりパートナーの支援を伴う | アウトソーシングによる支援は銀行の責任を取り除かない。 |
| 不正 / インシデント対応 | 銀行＋パートナーのオペレーション | API インシデントには協調的な対応が必要。 |
| カスタマーサポート | 銀行、パートナー、または分担 | 苦情とオペレーショナルリスクにとって重要。 |
| データ利用 / 同意 | 関連するプライバシー / API 規約の下での銀行とパートナー | 組込型金融の収益化にとって重要。 |
| 経済的アップサイド | 銀行、パートナー、またはレベニューシェア | 預金、貸付、手数料、クロスセルに依存する。 |

## 公開データ項目

1. パートナーの顧客セグメントと口座のアクティビティ。
2. 預金、貸付、決済、証券、保険、口座数。
3. API / オペレーショナルリスクの開示とサービスレベル情報。
4. 規制対象銀行の識別と顧客保護経路。
5. 公に開示されている場合の、銀行代理、電子決済代行、資金移動、プリペイド、証券、または保険の販売カテゴリ。

## 関連項目

- [[banking/INDEX]]
- [[banking/baas-japan-landscape]]
- [[banking/minna-bank-baas-model]]
- [[banking/mercari-bank]]
- [[banking/mercari-bank-license-stack]]
- [[banking/quick-deposit-four-methods]]
- [[banking/japan-net-bank-competition-map]]
- [[JapanFG/ssnb]]
- [[JapanFG/gmo-aozora-net]]
- [[JapanFG/ui-bank]]
- [[payments/japan-bank-api-payment-agency-route]]
- [[INDEX|FinWiki index]]

## 出典

- みんなの銀行: BaaS およびアライアンスサービスのページ。
- SSNB: NEOBANK BaaS のページ。
- GMO あおぞらネット銀行: 会社および API 仕様のページ。
- UI 銀行 / CQ BANK の公開ページ。
- FSA: 電子決済等代行業制度および登録簿。
- 全国銀行協会: オープン API 検討会の資料。
