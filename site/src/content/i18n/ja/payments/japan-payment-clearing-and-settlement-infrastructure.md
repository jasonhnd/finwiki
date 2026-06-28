---
source: payments/japan-payment-clearing-and-settlement-infrastructure
source_hash: 21d8d902c60b350a
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "Japan payment 清算 and 決済 infrastructure"
translated_at: 2026-06-26T08:32:15.204Z
---

# Japan payment 清算 and 決済 infrastructure

## Overview

日本の決済インフラには、中央銀行の決済資産、日銀ネット、銀行間振替清算、小口振替インフラ、口座直結決済、デビット決済、カード決済、ウォレット決済、および民間の清算取決めが含まれる。本ページは、顧客向けの決済プロダクトを、清算・決済に用いられるシステムおよびルールから切り分ける。

このページは [[payments/INDEX|payments domain]] に属し、[[payments/account-to-account-payment-japan|account-to-account payment route]]、[[payments/merchant-bank-pay-account-direct-acquiring|加盟店 bank-account direct アクワイアリング]]、[[payments/funds-transfer-vs-prepaid-boundary|資金移動 vs 前払式 boundary]]、[[payments/japan-bank-api-payment-agency-route|bank API route]]、[[payments/japan-bank-api-incident-and-fraud-control|bank API incident and fraud-control map]]、[[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]]、[[payments/card-acquiring-japan-stack|Japan card acquiring stack]]、[[banking/quick-deposit-four-methods|quick deposit four methods]]、[[financial-licenses/INDEX|JapanFG legal / financial licenses]] にリンクする。

## Infrastructure Map

| Layer | Public system / route | Public function |
|---|---|---|
| Central-bank 決済 | BOJ accounts and BOJ-NET | 決済資産および資金／国債決済サービス。 |
| Interbank bank transfer | Zengin System | 全国オンラインの国内銀行間資金振替システム。 |
| Zengin net 決済 | Zengin 清算 route and BOJ current accounts | 参加銀行間のネットポジションおよび日銀当座勘定決済。 |
| Large-value transfer | BOJ-NET RTGS where applicable | 100 百万円以上の振替を日銀ネット RTGS を通じて行う。 |
| Small-value transfer | Cotra | 銀行口座および参加事業者に接続された小口の個人向け振替経路。 |
| Account-direct 加盟店 payment | Bank Pay | 銀行口座直結のスマートフォン加盟店決済経路。 |
| Debit payment | J-Debit | 銀行キャッシュカードのデビット決済経路。 |
| Bank API / payment instruction | Electronic payment agency / Open API | 口座情報および支払指図のインターフェース経路。 |
| Card payment | 発行会社 / アクワイアラ / brand / PSP stack | カードのオーソリゼーション、クリアリング、チャージバック、決済。 |

## BOJ 決済 Layer

日本銀行は決済資産を提供し、日銀ネットを運営する。日銀の資料は、決済資産を移転された資金または証券として説明し、決済システムを、システム、ルール、取決め、場合によっては関連する法令を含みうる組織化された取決めとして説明する。

日銀当座勘定間の資金振替は、銀行間短期金融市場取引、JGB その他の証券取引の現金部分、および民間清算システムからのネットポジションに用いられる。日銀当座勘定の借記・貸記は、短期金融市場操作、金融機関との貸付取引、国庫資金、ならびに国債の発行・償還にも用いられる。

## Zengin System Route

全銀システムは、全国オンラインの銀行間国内資金振替システムである。全銀ネットの資料は、その銀行振替の役割および関連する清算経路を説明している。同システムは日本のほぼすべての民間銀行をカバーする。

全銀の清算資料は、ネットされたポジションおよび日銀当座勘定決済を銀行間決済層として特定する。100 百万円以上の振替は、通常のネット決済ではなく日銀ネット RTGS を通じて経路される。

## Cotra Route

ことら（Cotra）は、五大都市銀行の小口インフラ構想および 2021 に設立された運営会社に接続された、小口の銀行口座振替経路である。公開のサービス資料は、100,000 以下の個人向け振替と 2022 年 10 月のサービス開始を特定する。

ことらの公開資料は、預金取扱金融機関および資金移動業者を参加カテゴリーとして特定する。同サービスは、口座番号による経路指定と、送金側の名義確認を伴う電話番号／メールアドレス形式のエイリアスのフローをサポートする。公開のソース資料には、接続された事業者の資金が最終決済のために全銀を通じて日中 2 回清算されることが記録されている。

## JEPPO, J-Debit, and Bank Pay Route

JEPPO は口座連動の決済インフラを推進する。その公開のサービスページは、J-Debit と Bank Pay を中核の口座連動決済サービスとして特定する。

| Service | Public model |
|---|---|
| J-Debit | 顧客がキャッシュカードを提示し暗証番号を入力する。資金は銀行口座から即時に引き落とされ、加盟店には後で支払われる。 |
| Bank Pay | 銀行口座保有者向けに JEPPO が運営するスマートフォン決済サービス。登録された銀行口座からの直接引落とし。事前のチャージ／入金は不要。 |
| Bank Pay infrastructure | J-Debit の決済インフラを使用する。 |
| Bank Pay adjacent functions | 加盟店決済、ことら送金、請求書払いのフローが同一のアプリ画面に併存しうる。 |

## Product-To-Infrastructure Crosswalk

| Product surface | Infrastructure route |
|---|---|
| Bank transfer | 全銀システムおよび銀行口座台帳。 |
| High-value bank transfer | 該当する場合、100 百万円以上は日銀ネット RTGS。 |
| Small-value P2P transfer | 参加する銀行／アプリが当該サービスを利用する場合のことら経路。 |
| 加盟店 QR from bank account | Bank Pay／口座直結の加盟店アクワイアリング経路。 |
| Cash-card debit at 加盟店 | J-Debit 経路。 |
| Immediate deposit to broker / ウォレット | 銀行 API、クイック入金、口座振替、または連携銀行決済経路。 |
| Card checkout | カードネットワーク／アクワイアラー／PSP／プロセッサー／イシュアー経路。 |
| ウォレット top-up | 条件に応じて、銀行 API、カード、資金移動、前払式、または口座間経路。 |

## Public Record Fields

| 項目 | Source route |
|---|---|
| System 事業者 | 日銀、全銀ネット、ことら、JEPPO、カードスキーム、または PSP の開示。 |
| Participant category | 銀行、資金移動業者、決済サービス提供者、加盟店、PSP、またはアプリ。 |
| Transfer type | 銀行間振替、小口振替、デビット、口座直結の加盟店決済、カード、ウォレットチャージ。 |
| 清算 layer | 全銀清算、ことら清算、カード清算、スキーム経路、または相対の銀行口座経路。 |
| 決済 asset | 日銀当座勘定残高、銀行預金、前払残高、資金移動残高、カード債権、またはその他の請求権。 |
| 決済 timing | システム文書および参加者規約。 |
| Refund / cancellation route | スキーム文書および加盟店規約。 |
| Incident / reconciliation route | 銀行 API のインシデントページ、スキーム資料、および企業開示。 |

## Related Routes

[[payments/account-to-account-payment-japan|Account-to-account payment Japan]] はことら／Bank Pay／J-Debit および口座直結のフローを記録する。[[payments/merchant-bank-pay-account-direct-acquiring|加盟店 bank-account direct アクワイアリング]] は銀行口座直結決済の加盟店オンボーディング、返金、連携事業者、決済管理を記録する。[[payments/japan-bank-api-incident-and-fraud-control|Bank API incident and fraud-control map]] は障害、不正指図、補償、AML、照合の項目を記録する。

## JapanFG 事業者 Links

- 銀行ネットワークの文脈：[[megabanks/mufg-bank]]、[[megabanks/sumitomo-mitsui-banking-corp]]、[[megabanks/mizuho-bank]]、[[megabanks/resona-bank]]、および地方銀行のページ。
- ウォレット／資金移動：[[payment-firms/paypay]]、[[payment-firms/merpay]]、[[payment-firms/au-payment]]、[[payment-firms/rakuten-edy]]。
- 加盟店 PSP／アクワイアリング：[[payment-firms/gmo-payment-gateway]]、[[payment-firms/sb-payment-service]]、[[payment-firms/netstars]]。

## Related

- [[payments/INDEX]]
- [[payments/account-to-account-payment-japan]]
- [[payments/merchant-bank-pay-account-direct-acquiring]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-bank-api-payment-agency-route]]
- [[payments/japan-bank-api-incident-and-fraud-control]]
- [[payments/japan-code-payment-competitive-map]]
- [[payments/card-acquiring-japan-stack]]
- [[banking/quick-deposit-four-methods]]
- [[financial-licenses/payment-license-stack]]
- [[money-market/INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- Bank of Japan: payment and settlement systems overview.
- Bank of Japan: payment and settlement system review materials.
- Zengin-Net: Zengin System and clearing public pages.
- Zengin-Net / Cotra: Cotra public pages.
- Cotra: service and member pages.
- Japan Electronic Payment Promotion Organization: Bank Pay and J-Debit.
- Payments Japan: cashless / payment publications.
