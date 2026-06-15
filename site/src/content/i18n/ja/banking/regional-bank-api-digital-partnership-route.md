---
source: banking/regional-bank-api-digital-partnership-route
source_hash: ffdf1c48bc294668
lang: ja
status: machine
fidelity: ok
title: "日本における地方銀行の API・デジタル提携ルート"
translated_at: 2026-06-02T11:47:37.265Z
---

# 日本における地方銀行の API・デジタル提携ルート

## 概要

日本における地方銀行のデジタル提携は、単なる「銀行アプリ」ではない。電子決済代行業の API 契約、共通 API プラットフォーム、銀行自社アプリ、会計 / 財務連携、BaaS 型の銀行提携、口座直結の決済レールに分かれる。

本ページは [[payments/japan-bank-api-payment-agency-route|bank API route]]、[[payments/japan-bank-api-incident-and-fraud-control|bank API incident controls]]、[[banking/baas-japan-landscape|BaaS Japan landscape]]、[[banking/regional-bank-consolidation-pattern|regional bank consolidation]]、[[payments/account-to-account-payment-japan|account-to-account payments]]、[[financial-licenses/INDEX|legal / financial licenses]] と併せて用いること。

## ルートマップ

| ルート | 銀行側の主体 | パートナー類型 | API / サービス機能 | 規制上のフック |
|---|---|---|---|---|
| 登録電子決済代行業 API | 地方銀行 | 会計、PFM、財務、決済、資金管理アプリ | スコープに応じて残高、取引履歴、振替指図。 | 金融庁の電子決済代行業登録および銀行 API 契約の開示。 |
| 共通地域 API プラットフォーム | 地方銀行アライアンス / システム子会社 | 共通 API プラットフォームおよびシステムベンダー | 複数行向けの同一仕様または共通接続層。 | 全銀協のオープン API 契約 / 原則に加え、各行の方針。 |
| 地方銀行公式アプリ | 地方銀行およびアプリ運営者 | 銀行アプリ、グループのフィンテック子会社、地域サービスプラットフォーム | 口座照会、振替、ポイント、デビット、貯蓄、地域コマース機能。 | 銀行免許、外部委託、該当する場合は電子決済代行業 / 銀行代理業ルート。 |
| BaaS / 組込サービス | 銀行またはデジタル銀行パートナー | 非銀行プラットフォームまたはフィンテック | 別のサービスに組み込まれた口座 / 決済 / 本人確認 / 残高 UX。 | 銀行免許に加え、API / 代理業 / 仲介の契約。 |
| 口座直結決済 | 地方銀行に決済ネットワークを加えたもの | Bank Pay / J-Debit / 口座直結の加盟店ルート | 銀行口座からの加盟店決済。 | [[payments/account-to-account-payment-japan|A2A route]] および [[payments/merchant-bank-pay-account-direct-acquiring|merchant acquiring controls]]。 |

## 地方銀行の例

| 例 | 公開情報としての意義 |
|---|---|
| [[regional-banks/yokohama-bank|Yokohama Bank]] API 開示 | 電子決済代行業の API 契約ルートおよびユーザー補償の文言を公開で列挙している。 |
| TSUBASA FinTech 共通基盤 | 共有 API / デジタルサービス基盤インフラに対する地方銀行アライアンスのアプローチを示す。 |
| [[regional-banks/chiba-bank|Chiba Bank]] / TSUBASA 参加行 | 地方銀行が別個の銀行主体であり続けながら技術をプールできることを例示する。 |
| [[regional-banks/fukuoka-fg|Fukuoka FG]] / iBank 型ルート | 単なる口座照会アプリを超えた地方銀行グループのアプリ / プラットフォーム戦略を示す。 |
| [[payment-firms/freee|freee]] および [[payment-firms/money-forward|Money Forward]] | 地方銀行 API 分析のための共通の会計 / PFM 連携アンカー。 |

## 確認のための問い

| 問い | 公開情報としての意義 |
|---|---|
| 誰が電子決済代行業の登録を持っているか? | API アクセスは銀行の技術的選択だけではない;登録された主体のルートである。 |
| API は読み取り専用か、指図が可能か? | 口座情報と決済指図のリスクは異なる。 |
| 接続は一つの銀行に直結か、共通プラットフォーム経由か? | 運用の集中度とベンダー依存が異なる。 |
| 銀行は API システムの運用を外部委託しているか? | 外部委託とインシデント責任が問題になる。 |
| アプリは銀行自社、銀行提携、第三者のいずれか? | 法人および利用者補償の経路が UX のブランディングと異なりうる。 |
| そのフローはウォレット残高を生むか、銀行口座の移動のみか? | 資金決済法上の分類が変わりうる。 |

## JapanFG との関連

- [[regional-banks/yokohama-bank|Yokohama Bank]]、[[regional-banks/chiba-bank|Chiba Bank]]、[[regional-banks/chugoku-bank|Chugoku Bank]]、[[regional-banks/tsukuba-bank|Tsukuba Bank]]、および TSUBASA に連なる地方銀行は、有用な API プラットフォームのアンカーである。
- [[regional-banks/fukuoka-fg|Fukuoka FG]] および [[banking/minna-bank-baas-model|Minna Bank BaaS model]] は、よりプラットフォームネイティブな地方銀行の方向性を示す。
- [[payment-firms/freee|freee]] および [[payment-firms/money-forward|Money Forward]] は、口座データ / 会計連携が中核のユースケースである場合に相互リンクされる。
- [[payments/japan-bank-api-incident-and-fraud-control|Bank API incident controls]] は、銀行 API 連携を低リスクの利便機能として扱う前に用いること。

## リサーチチェックリスト

1. 銀行、パートナー、API 機能、サービスブランドを特定する。
2. 金融庁の電子決済代行業登録簿と当該銀行の API 開示ページを確認する。
3. 読み取り専用の情報 API を、更新 / 振替指図の API と区別する。
4. システムが銀行固有の API か、共有のアライアンス / ベンダープラットフォームかを確認する。
5. 決済機能を [[payments/account-to-account-payment-japan|A2A payment route]] に、ウォレット機能を [[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]] にリンクする。

## 関連項目

- [[banking/INDEX]]
- [[payments/japan-bank-api-payment-agency-route]]
- [[payments/japan-bank-api-incident-and-fraud-control]]
- [[banking/baas-japan-landscape]]
- [[banking/minna-bank-baas-model]]
- [[banking/regional-bank-consolidation-pattern]]
- [[payments/account-to-account-payment-japan]]
- [[financial-licenses/INDEX]]
- [[regional-banks/yokohama-bank]]
- [[regional-banks/chiba-bank]]
- [[INDEX|FinWiki index]]

## 出典

- 金融庁: 電子決済代行業登録簿。
- 全国銀行協会: オープン API のあり方に関する検討会および API 契約のひな型。
- 横浜銀行: API / 電子決済代行業の連携開示。
- 日本銀行のワークショップ資料(TSUBASA FinTech 共通基盤に言及)。
- 筑波銀行: TSUBASA FinTech 共通基盤 / アプリ刷新のリリース。
