---
source: payments/japan-bank-api-incident-and-fraud-control
source_hash: 0bf16dee83164eb7
lang: ja
status: machine
fidelity: ok
title: "日本の銀行 API インシデントと不正管理マップ"
translated_at: 2026-06-02T16:33:58.483Z
---
# 日本の銀行 API インシデントと不正管理マップ

## 概要

日本における銀行 API リスクは、サイバーセキュリティだけの問題ではありません。銀行認証、顧客同意、電子決済等代行業登録、API 契約、不正引出し対応、不審取引モニタリング、補償 / 苦情処理、下流の照合にまたがる管理チェーンです。

このページは [[payments/japan-bank-api-payment-agency-route|Japan bank API route]]、[[payments/account-to-account-payment-japan|Japan account-to-account payment route]]、[[payments/merchant-bank-pay-account-direct-acquiring|merchant account-direct acquiring]]、[[payments/psp-merchant-settlement-risk|PSP settlement risk]]、[[banking/quick-deposit-four-methods|quick deposit methods]]、[[financial-licenses/INDEX|JapanFG legal / financial licenses]] とあわせて使います。

## インシデント面

| インシデント種別 | 最初の問い | 確認ルート |
|---|---|---|
| 口座情報漏えい | そのサービスは読み取り専用の口座集約か、支払指図が可能か。 | 電子決済等代行業登録、銀行 API 契約、同意ログ。 |
| 不正指図 | 誰が指図を受け付け、誰が銀行口座の資金移動を実行したか。 | 銀行認証、API スコープ、アプリログイン、取引確認、顧客通知。 |
| 銀行 API 障害 | 障害箇所は銀行 API、電子決済等代行業者、アプリ、下流の会計 / 給与ルートのどこか。 | 銀行ステータス通知、API SLA / 契約、照合例外。 |
| アカウント乗っ取り | 銀行、アプリ、端末、共通認証情報レイヤーのどこでログインが侵害されたか。 | 端末 / IP / ログイン異常、追加認証、銀行不正対応窓口。 |
| 架空 / 口座売買・受け子口座フロー | その口座は不審取引の通過口座として使われているか。 | FSA 不審取引参考事例、銀行 AML モニタリング。 |
| 返金 / 取消し破綻 | 支払指図は決済されたが、加盟店または会計上の状態が失敗したか。 | A2A 支払ルート、PSP 照合、加盟店契約。 |

## 管理スタック

| レイヤー | 管理 |
|---|---|
| 法的登録 | 事業者が FSA 電子決済等代行業者登録簿に載っているか確認する。 |
| 監督上の管理 | 電子決済等代行業リスクの要点について、FSA 監督指針 / セキュリティ強化資料を確認する。 |
| 銀行契約 | 銀行 / 電子決済等代行業者の API 契約、サービス範囲、公開開示を確認する。 |
| 顧客同意 | 同意の時点、範囲、目的、取消しルートを記録する。 |
| 強固な認証 | 銀行認証、アプリ認証、取引確認を分離する。 |
| API スコープ管理 | 読み取り / 書き込み権限、支払開始スコープ、トークン有効期間を最小化する。 |
| 取引モニタリング | 試験送金、端末 / IP 異常、通常と異なる給与風入金、口座売買・受け子口座パターンを監視する。 |
| 照合 | 銀行元帳、アプリ状態、加盟店 / 会計状態、ユーザー通知状態を比較する。 |
| インシデント対応 | ログを保全し、不審ルートを凍結し、銀行 / ユーザー / 加盟店へ通知し、苦情処理へ回す。 |

## 境界が重要な理由

同じチェックアウトや会計 UX でも、異なる法的レールの上に置かれることがあります。

- [[payments/japan-bank-api-payment-agency-route|electronic payment agency]] を通る銀行口座情報サービス。
- [[payments/account-to-account-payment-japan|Cotra / Bank Pay / J-Debit style rails]] を通る口座間送金。
- [[payments/funds-transfer-vs-prepaid-boundary|funds transfer or prepaid classification]] を通るウォレット残高。
- [[payments/psp-merchant-settlement-risk|PSP settlement risk]] を通る加盟店 PSP 精算問題。
- [[banking/baas-japan-landscape|BaaS Japan landscape]] または [[banking/mercari-bank-license-stack|Mercari Bank license stack]] を通る組込銀行商品。

これらをすべて「銀行 API 不正」と表現してはいけません。業務上の証拠と法的責任は大きく異なり得ます。

## JapanFG での関連性

- [[megabanks/mufg-bank|MUFG Bank]]、[[megabanks/sumitomo-mitsui-banking-corp|SMBC]]、[[megabanks/mizuho-bank|Mizuho Bank]]、[[megabanks/resona-bank|Resona Bank]]、大手地方銀行は、API / 認証 / 苦情処理ルートの銀行口座側を運営するため重要です。
- [[payment-firms/money-forward|Money Forward]]、[[payment-firms/freee|freee]] は会計 / 口座集約の比較アンカーとして有用です。
- [[payment-firms/merpay|Merpay]]、[[payment-firms/paypay|PayPay]]、[[card-issuers/rakuten-card|Rakuten Card]]、[[payment-firms/au-payment|au PAY]] は、銀行 API、ウォレット、前払、資金移動、加盟店レールに分けて分析する必要があります。
- [[payment-firms/sb-payment-service|SB Payment Service]]、[[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]、[[payment-firms/netstars|Netstars]] は、API 障害が加盟店チェックアウト、精算、照合へ流れ込む場合に重要です。

## 調査チェックリスト

1. 正確な法人、ユーザー向けサービス、銀行パートナー、API 機能を特定する。
2. FSA 電子決済等代行業登録と、銀行の公開 API / 電子決済等代行業者開示を確認する。
3. 読み取り専用の口座情報と、支払指図または送金関連機能を分離する。
4. アプリログイン、同意、銀行認証、指図、銀行元帳記帳、加盟店状態、通知にまたがって時系列を再構成する。
5. 取引モニタリング信号を FSA 不審取引参考事例と照合する。
6. 同じインシデントが資金移動、前払、PSP、加盟店アクワイアリング、カード、AML 報告ルートも発動するか確認する。
7. FinWiki には公開事実のみを記録し、インシデント固有の非公開データをこの公開リポジトリに入れない。

## 関連項目

- [[payments/INDEX]]
- [[payments/japan-bank-api-payment-agency-route]]
- [[payments/account-to-account-payment-japan]]
- [[payments/merchant-bank-pay-account-direct-acquiring]]
- [[payments/psp-merchant-settlement-risk]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[banking/quick-deposit-four-methods]]
- [[banking/baas-japan-landscape]]
- [[financial-licenses/INDEX]]
- [[INDEX|FinWiki index]]

## 出典

- FSA: 電子決済等代行業登録ガイダンスおよび登録簿。
- FSA: 電子決済等代行業の監督・セキュリティ強化資料。
- FSA: 不審取引に関する参考事例。
- FSA: 不正引出し / 身に覚えのない取引に関する利用者向け公開注意喚起。
- 全国銀行協会: API 利用契約のひな型文書。
- FISC / JEPPO: API および Bank Pay の公開管理資料。
- FAPI association: 公開されている規制 / 技術標準リンク集。
