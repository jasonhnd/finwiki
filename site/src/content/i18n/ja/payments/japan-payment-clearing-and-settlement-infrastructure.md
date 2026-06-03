---
source: payments/japan-payment-clearing-and-settlement-infrastructure
source_hash: be2defa929cfa7db
lang: ja
status: machine
fidelity: ok
title: "日本の決済クリアリング・セトルメントインフラ"
translated_at: 2026-06-02T16:33:58.499Z
---
# 日本の決済クリアリング・セトルメントインフラ

## 概要

日本の決済インフラには、中央銀行決済資産、BOJ-NET、銀行間振込清算、少額送金インフラ、口座直結決済、デビット決済、カード決済、ウォレット決済、民間部門の清算取決めが含まれる。このページは、顧客向け決済商品と、清算・決済に用いられるシステムおよびルールを切り分ける。

このページは [[payments/INDEX|payments domain]] に属し、[[payments/account-to-account-payment-japan|account-to-account payment route]]、[[payments/merchant-bank-pay-account-direct-acquiring|merchant bank-account direct acquiring]]、[[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]]、[[payments/japan-bank-api-payment-agency-route|bank API route]]、[[payments/japan-bank-api-incident-and-fraud-control|bank API incident and fraud-control map]]、[[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]]、[[payments/card-acquiring-japan-stack|Japan card acquiring stack]]、[[banking/quick-deposit-four-methods|quick deposit four methods]]、[[JapanFG/legal-financial-licenses/INDEX|JapanFG legal / financial licenses]] にリンクする。

## インフラマップ

| レイヤー | 公開システム / ルート | 公開上の機能 |
|---|---|---|
| 中央銀行決済 | BOJ 当座預金および BOJ-NET | 決済資産および資金 / JGS 決済サービス。 |
| 銀行間銀行振込 | 全銀システム | 全国オンラインの国内銀行間資金移動システム。 |
| 全銀ネット決済 | 全銀清算ルートおよび BOJ 当座預金 | 参加銀行間のネットポジションと BOJ 口座決済。 |
| 大口送金 | 該当する場合の BOJ-NET RTGS | BOJ-NET RTGS を通じた JPY 100 million 以上の送金。 |
| 少額送金 | Cotra | 銀行口座および参加事業者に接続する少額個人送金ルート。 |
| 口座直結加盟店決済 | Bank Pay | 銀行口座直結のスマートフォン加盟店決済ルート。 |
| デビット決済 | J-Debit | 銀行キャッシュカードによるデビット決済ルート。 |
| 銀行 API / 支払指図 | 電子決済等代行業 / Open API | 口座情報および支払指図インターフェースルート。 |
| カード決済 | イシュア / アクワイアラ / ブランド / PSP スタック | カードのオーソリゼーション、清算、チャージバック、決済。 |

## BOJ 決済レイヤー

日本銀行は決済資産を提供し、BOJ-NET を運営する。BOJ 資料は、決済資産を移転済みの資金または証券として説明し、決済システムを、システム、ルール、合意、ときには関連する法令を含みうる組織的取決めとして説明している。

BOJ 口座間の資金移動は、銀行間短期金融市場取引、JGB その他の証券取引の資金決済部分、民間清算システムから生じるネットポジションに用いられる。BOJ 口座の借記・貸記は、金融市場調節、金融機関との貸出取引、国庫金、JGS 発行 / 償還にも用いられる。

## 全銀システムルート

全銀システムは、全国オンラインの銀行間国内資金移動システムである。全銀ネット資料は、その銀行振込上の役割と関連する清算ルートを説明している。このシステムは日本のほぼすべての民間銀行をカバーする。

全銀清算資料は、ネット化されたポジションと BOJ 当座預金決済を銀行間決済レイヤーとして特定している。JPY 100 million 以上の送金は、通常のネット決済ではなく BOJ-NET RTGS にルートされる。

## Cotra ルート

Cotra は、五大銀行の少額インフラ構想と 2021 に設立された運営会社に接続する少額銀行口座送金ルートである。公開サービス資料は、JPY 100,000 以下の個人送金と、2022年 10 月のサービス開始を示している。

公開 Cotra 資料は、預金取扱金融機関と資金移動業者を参加者カテゴリとして特定している。このサービスは、口座番号ルーティングと、電話番号 / メールアドレス型のエイリアスフローに送金人側の名義確認を組み合わせてサポートする。公開ソースパックは、接続事業者の資金が最終決済のために全銀を通じて日中 2 回清算されると記録している。

## JEPPO、J-Debit、Bank Pay ルート

JEPPO は口座連動型決済インフラを推進する。公開サービスページは、J-Debit と Bank Pay を中核的な口座連動型決済サービスとして特定している。

| サービス | 公開モデル |
|---|---|
| J-Debit | 顧客がキャッシュカードを提示して PIN を入力する。資金は銀行口座から即時引き落とされ、加盟店には後日支払われる。 |
| Bank Pay | 銀行口座保有者向けの JEPPO 運営スマートフォン決済サービス。登録銀行口座から直接引き落とされ、事前チャージ / 入金は不要。 |
| Bank Pay インフラ | J-Debit 決済インフラを利用する。 |
| Bank Pay 隣接機能 | 加盟店決済、Cotra 送金、請求書支払フローが同一アプリ面に載りうる。 |

## 商品とインフラのクロスウォーク

| 商品面 | インフラルート |
|---|---|
| 銀行振込 | 全銀システムおよび銀行口座元帳。 |
| 大口銀行振込 | 該当する場合、JPY 100 million 以上は BOJ-NET RTGS。 |
| 少額 P2P 送金 | 参加銀行 / アプリがサービスを利用する場合の Cotra ルート。 |
| 銀行口座からの加盟店 QR | Bank Pay / 口座直結加盟店管理ルート。 |
| 加盟店でのキャッシュカードデビット | J-Debit ルート。 |
| 証券口座 / ウォレットへの即時入金 | 条件に応じて、銀行 API、クイック入金、口座振替、連携銀行決済ルート。 |
| カードチェックアウト | カードネットワーク / アクワイアラ / PSP / プロセッサ / イシュアルート。 |
| ウォレットチャージ | 条件に応じて、銀行 API、カード、資金移動、前払、口座間ルート。 |

## 公開記録フィールド

| フィールド | ソースルート |
|---|---|
| システム運営者 | BOJ、全銀ネット、Cotra、JEPPO、カードスキーム、または PSP 開示。 |
| 参加者カテゴリ | 銀行、資金移動業者、決済サービスプロバイダー、加盟店、PSP、アプリ。 |
| 送金種別 | 銀行間送金、少額送金、デビット、口座直結加盟店決済、カード、ウォレットチャージ。 |
| 清算レイヤー | 全銀清算、Cotra 清算、カード清算、スキームルート、または相対の銀行口座ルート。 |
| 決済資産 | BOJ 口座残高、銀行預金、前払残高、資金移動残高、カード債権、その他の請求権。 |
| 決済タイミング | システム文書および参加者規約。 |
| 返金 / 取消ルート | スキーム文書および加盟店規約。 |
| インシデント / 照合ルート | 銀行 API インシデントページ、スキーム資料、会社開示。 |

## 関連ルート

[[payments/account-to-account-payment-japan|Account-to-account payment Japan]] は Cotra / Bank Pay / J-Debit と口座直結フローを記録する。[[payments/merchant-bank-pay-account-direct-acquiring|Merchant bank-account direct acquiring]] は、銀行口座直結決済の加盟店オンボーディング、返金、接続事業者、精算管理を記録する。[[payments/japan-bank-api-incident-and-fraud-control|Bank API incident and fraud-control map]] は、障害、不正指図、補償、AML、照合フィールドを記録する。

## JapanFG 事業者リンク

- 銀行ネットワーク文脈: [[JapanFG/mufg-bank]]、[[JapanFG/sumitomo-mitsui-banking-corp]]、[[JapanFG/mizuho-bank]]、[[JapanFG/resona-bank]]、および地方銀行ページ。
- ウォレット / 資金移動: [[JapanFG/paypay]]、[[JapanFG/merpay]]、[[JapanFG/au-payment]]、[[JapanFG/rakuten-edy]]。
- 加盟店 PSP / アクワイアリング: [[JapanFG/gmo-payment-gateway]]、[[JapanFG/sb-payment-service]]、[[JapanFG/netstars]]。

## 関連項目

- [[payments/INDEX]]
- [[payments/account-to-account-payment-japan]]
- [[payments/merchant-bank-pay-account-direct-acquiring]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-bank-api-payment-agency-route]]
- [[payments/japan-bank-api-incident-and-fraud-control]]
- [[payments/japan-code-payment-competitive-map]]
- [[payments/card-acquiring-japan-stack]]
- [[banking/quick-deposit-four-methods]]
- [[JapanFG/legal-financial-licenses/payment-license-stack]]
- [[money-market/INDEX]]
- [[INDEX|FinWiki index]]

## 出典

- 日本銀行: 決済システム概要。
- 日本銀行: 決済システムレビュー資料。
- 全銀ネット: 全銀システムおよび清算の公開ページ。
- 全銀ネット / Cotra: Cotra 公開ページ。
- Cotra: サービスおよび会員ページ。
- 日本電子決済推進機構: Bank Pay および J-Debit。
- Payments Japan: キャッシュレス / 決済刊行物。
