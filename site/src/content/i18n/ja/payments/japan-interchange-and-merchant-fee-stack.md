---
source: payments/japan-interchange-and-merchant-fee-stack
source_hash: 96c290f4de43a8da
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "日本のインターチェンジと加盟店手数料スタック"
translated_at: 2026-06-26T08:32:15.203Z
---
# 日本のインターチェンジと加盟店手数料スタック

## 概要

このページは、日本のカード加盟店手数料とインターチェンジ関連開示の公開構造を記録する。対象範囲は、カード加盟店手数料の構成、イシュア手数料 / インターチェンジ開示、アクワイアラ経済性、関連する公開政策資料である。より広い加盟店 PSP 価格、決済準備金、チャージバック配分、ゲートウェイ価格は [[payments/psp-merchant-settlement-risk|PSP 加盟店決済 risk]] と [[payments/card-acquiring-japan-stack|Japan card acquiring stack]] に振り分ける。

このページは [[payments/INDEX|payments domain]] に属し、[[payments/cashless-jp-landscape|Japan cashless payment landscape]]、[[payments/japan-card-issuer-acquirer-processor-split|発行会社 / アクワイアラ / processor split]]、[[payments/japan-card-security-authentication-controls|card security and authentication controls]]、[[payments/credit-purchase-card-operators-japan-index|credit / card registry]]、[[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]]、[[payments/merchant-bank-pay-account-direct-acquiring|加盟店 bank-account direct アクワイアリング]]、[[financial-licenses/payment-license-stack|Japan payment license stack]] へリンクする。

## 手数料構成マップ

| 構成要素 | 公開上の役割 | リンク先経路 |
|---|---|---|
| 加盟店手数料 | 加盟店がアクワイアラ / PSP / 加盟店契約主体に支払う手数料 | [[payments/card-acquiring-japan-stack]] |
| イシュア手数料 / インターチェンジ | カードネットワーク規則または二者間取り決めを通じて支払われるイシュア側の経済性 | [[payments/japan-card-issuer-acquirer-processor-split]] |
| アクワイアラ取り分 | 加盟店契約、決済、リスク、処理、ネットワーク接続の経済性 | [[payments/card-acquiring-japan-stack]] |
| 標準インターチェンジ率 | 二者間のイシュア・アクワイアラ設定がない場合の既定カードネットワーク料率 | カードブランド開示および Payments Japan ロードマップ経路 |
| ブランド / スキーム手数料 | カードネットワーク / ブランド層 | JCB / 国際ブランド開示 |
| プロセッサ / ゲートウェイ手数料 | オーソリ、売上確定、ルーティング、照合、API 層 | [[payments/psp-merchant-settlement-risk]] |
| セキュリティ / 認証コスト | EMV 3-D Secure、トークナイゼーション、PCI DSS、非保持、不正検知 | [[payments/japan-card-security-authentication-controls]] |
| チャージバック / 不正準備 | 加盟店リスク管理と決済準備金 | [[payments/psp-merchant-settlement-risk]] |
| 決済タイミング | 入金スケジュール、ローリングリザーブ、返金、取消対応 | 加盟店契約 / PSP 条項 |

## 公開開示タイムライン

| 日付 / 出典 | 公開事実フィールド |
|---|---|
| 2022 JFTC レポート | JFTC はクレジットカード加盟店手数料、インターチェンジ関連構成要素、加盟店規模別の手数料差、交渉パターンを検討した。 |
| 2022 Payments Japan ロードマップ | ロードマップは、Category I のオンアス外イシュア手数料をインターチェンジ手数料として扱い、二者間設定がない場合の既定 `standard rate` を説明した。 |
| 2023-06-01 METI / JFTC リリース | METI と JFTC は、JCB がクレジットカード加盟店手数料におけるイシュアとアクワイアラの配分率を開示したと発表した。 |
| 2023 Payments Japan ロードマップ | ロードマップは、Mastercard、UnionPay、Visa が日本のクレジットカード標準インターチェンジ率を公表したと記載した。 |

## 公開数値フィールド

| 出典 | フィールド | ソースパックに記録された値 |
|---|---|---|
| JFTC 2022 | 単純平均の加盟店手数料率 | 2.70% |
| JFTC 2022 | 推計加重平均の加盟店手数料率 | 1.66% |
| JFTC 2022 | 加盟店規模別パターン | 小規模加盟店は大規模加盟店より平均料率が高かった。 |
| JFTC 2022 | 交渉パターン | 交渉した加盟店は、交渉しなかった加盟店より平均料率が低かった。 |
| Payments Japan 2022 | Category I 平均加盟店手数料 | 2.63% |
| Payments Japan 2022 | Category II 平均加盟店手数料 | 2.89% |
| Payments Japan 2022 | Category I および Category II のイシュア手数料 | 両カテゴリとも 1.56%。 |

## 加盟店契約フィールド

| フィールド | 公開記録の出典 |
|---|---|
| 加盟店契約主体 | アクワイアラ / PSP の公式資料および加盟店規約。 |
| 対応ブランド | 加盟店申込ページ、アクワイアラ / PSP サービスページ。 |
| 加盟店手数料率 / 料金プラン | 公開されている場合の加盟店向け料金ページ。 |
| イシュア手数料 / インターチェンジ参照 | カードブランド開示、Payments Japan ロードマップ、JFTC / METI 資料。 |
| 決済サイクル | PSP / アクワイアラ加盟店規約。 |
| セキュリティ要件 | 日本のクレジットカード・セキュリティガイドライン、PCI DSS、EMV 3-D Secure 資料。 |
| チャージバック手続 | 公開されている範囲のアクワイアラ / PSP 規約およびブランド規則。 |
| 返金 / 取消対応 | 加盟店規約および PSP ドキュメント。 |

## カードセキュリティとの接続加盟店手数料とカードセキュリティは別フィールドだが、運用上はつながっている。EMV 3-D Secure、PCI DSS、トークナイゼーション、非保持、EC 加盟店の脆弱性管理、不正監視、チャージバック証跡は [[payments/japan-card-security-authentication-controls|Japan card security and authentication controls]] に振り分ける。

カードセキュリティ経路では、日本クレジット協会ガイドライン、PCI DSS、EMVCo 資料を使う。公開されている加盟店契約ページから、PSP、アクワイアラ、加盟店のどこが具体的な実装義務を負うかを特定できる場合がある。

## JapanFG 運営者リンク

- 主要カードイシュア / アクワイアラ: [[card-issuers/smbc-card]], [[card-issuers/mufg-nicos]], [[card-issuers/rakuten-card]], [[card-issuers/paypay-card]], [[card-issuers/aeon-financial-service]], [[card-issuers/jcb]].
- 加盟店 PSP / ゲートウェイ運営者: [[payment-firms/gmo-payment-gateway]], [[payment-firms/gmo-epsilon]], [[payment-firms/sb-payment-service]], [[payment-firms/dg-financial-technology]], [[payment-firms/netstars]].
- クレジット / 割賦レジストリ経路: [[payments/credit-purchase-card-operators-japan-index]].

## 関連項目

- [[payments/INDEX]]
- [[payments/cashless-jp-landscape]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/psp-merchant-settlement-risk]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-code-payment-competitive-map]]
- [[payments/merchant-bank-pay-account-direct-acquiring]]
- [[financial-licenses/payment-license-stack]]
- [[INDEX|FinWiki index]]

## 出典

- METI / JFTC: JCB 加盟店手数料配分率開示リリース。
- METI: キャッシュレス決済データページ。
- JFTC: 2022 クレジットカード加盟店手数料リリースおよびレポート。
- Payments Japan: 2022 および 2023 ロードマップ公表資料。
- 日本クレジット協会: クレジットカード・セキュリティガイドライン。
- JCB: ブランド / 決済ネットワーク公開資料。
- PCI Security Standards Council: PCI DSS。
- EMVCo: EMV 3-D Secure。
