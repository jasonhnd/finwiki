---
source: payments/japan-card-issuer-acquirer-processor-split
source_hash: d0156df45dc02ebb
lang: ja
status: machine
fidelity: ok
title: "日本のカード発行会社、アクワイアラー、プロセッサーの分担"
translated_at: 2026-06-02T16:33:58.513Z
---
# 日本のカード発行会社、アクワイアラー、プロセッサーの分担

## 概要

日本のカード決済は、少なくとも五つの役割に分かれる。イシュア、国際 / 国内ブランド、アクワイアラー、カード番号契約 / 加盟店契約事業者、プロセッサー / PSP である。一つのグループが複数の役割を持つことはあるが、FinWiki ではそれらを「クレジットカード会社」として平板化しない。

このページは [[payments/card-acquiring-japan-stack|Japan card acquiring stack]]、[[payments/japan-card-security-authentication-controls|card security and authentication controls]]、[[payments/credit-purchase-card-operators-japan-index|credit purchase and card operator registry]]、[[payments/psp-merchant-settlement-risk|PSP settlement risk]]、[[payments/cashless-jp-landscape|cashless landscape]]、[[JapanFG/jcb|JCB]]、[[JapanFG/smbc-card|SMBC Card]]、[[JapanFG/mufg-nicos|MUFG NICOS]] とあわせて使う。

## 役割マップ

| 役割 | 管理するもの | 典型的な JapanFG アンカー |
|---|---|---|
| イシュア | カード会員審査、与信枠、請求、リボ / 分割債権、不正監視。 | [[JapanFG/smbc-card|SMBC Card]], [[JapanFG/rakuten-card|Rakuten Card]], [[JapanFG/paypay-card|PayPay Card]], [[JapanFG/aeon-financial-service|AEON Financial Service]] |
| ブランド / スキーム | ネットワークルール、ブランド受け入れ、国際ルーティング、カード商品ルール。 | [[JapanFG/jcb|JCB]]、Visa / Mastercard / AMEX / Diners パートナー。 |
| アクワイアラー | 加盟店審査、加盟店契約、精算、チャージバック / 紛争ルーティング。 | [[JapanFG/jcb|JCB]], [[JapanFG/mufg-nicos|MUFG NICOS]], [[JapanFG/smbc-card|SMBC Card]], [[JapanFG/gmo-payment-gateway|GMO Payment Gateway]] |
| PSP / ゲートウェイ | 技術的な受け入れ、トークン化、決済ページ、不正フィルター、照合ファイル。 | [[JapanFG/gmo-payment-gateway|GMO Payment Gateway]], [[JapanFG/sb-payment-service|SB Payment Service]], [[JapanFG/gmo-epsilon|GMO Epsilon]], [[JapanFG/dg-financial-technology|DGFT]] |
| 加盟店 | カード決済を受け入れ、カード会員データを保護し、発送 / 返金 / 紛争証拠を扱う。 | [[retail/INDEX|retail INDEX]] 配下の小売 / EC 事業者、および [[business/gmo-internet-group|GMO Internet Group]] のようなプラットフォーム事例。 |

## 法務 / 登録境界

| 問い | ルート |
|---|---|
| そのエンティティは割賦販売 / 信用購入事業者か | METI の割賦販売法登録一覧と [[payments/credit-purchase-card-operators-japan-index|registry-control page]] を確認する。 |
| そのエンティティはカード番号取扱い / 契約締結で加盟店向けか | 加盟店契約とセキュリティガイドライン上の義務を確認する。 |
| そのエンティティはゲートウェイ / プロセッサーにすぎないか | 加盟店を引き受けているのか、技術処理だけを提供しているのかを確認する。 |
| その商品はリボ / 分割信用か | 割賦販売法と信用 / BNPL 境界を確認する。 |
| その商品はプリペイド / デビット / 銀行口座直結か | [[payments/funds-transfer-vs-prepaid-boundary|prepaid / funds-transfer boundary]] または [[payments/account-to-account-payment-japan|A2A route]] へルーティングする。 |

## セキュリティ管理スタック

日本クレジット協会のセキュリティガイドラインルートが重要なのは、不正とカードデータ漏えいの管理がイシュア管理だけではないためである。

- EC 加盟店と PSP はカード情報保護管理を必要とする。
- アクワイアラーと PSP は加盟店オンボーディングとセキュリティ是正を調整する。
- イシュア認証と 3-D Secure / 認証管理はカード会員側に位置する。
- チャージバック / 紛争証拠は、イシュア、アクワイアラー、PSP、加盟店のシステムを横断する。
- 継続課金とトークン化決済は、初回取引を超えたライフサイクル / 同意管理を追加する。

JCB の公開ブランド事業説明は、カード会員、加盟店、イシュア、アクワイアラー、ブランド / 決済ネットワークの役割を分けるための分かりやすいモデルであり、日本固有の登録とセキュリティ管理を追加する前の土台として有用である。

## よくある誤読

| 誤読 | よりよい読み方 |
|---|---|
| 「JCB はカード発行会社にすぎない」 | JCB は文脈に応じて、国内カードブランド、イシュア、アクワイアラー、ネットワーク主体として読める。 |
| 「PSP = アクワイアラー」 | PSP は技術ゲートウェイ、加盟店契約事業者、精算主体、またはそれらすべてであり得る。 |
| 「3-D Secure がカード不正を解決する」 | 認証は一つの管理にすぎない。加盟店審査、トークン化、監視、紛争処理はなお重要である。 |
| 「カード会社 = 消費者金融会社」 | イシュアの信用リスクは一つのレイヤーであり、加盟店アクワイアリングとスキームルールは別レイヤーである。 |

## 調査チェックリスト

1. エンティティがイシュア、アクワイアラー、ブランド、プロセッサー / PSP、加盟店、または複数役割のいずれかを特定する。
2. METI 登録区分と公開会社開示を確認する。
3. カードデータが保存、トークン化、または第三者プロセッサーにより処理されているかを確認する。
4. 商品にリボ、分割、BNPL が含まれるか、チャージカード精算だけかを確認する。
5. 加盟店リスクの問いは [[payments/psp-merchant-settlement-risk|PSP settlement risk]] に、消費者信用の問いは [[payments/japan-bnpl-credit-purchase-boundary|BNPL / credit-purchase boundary]] にリンクする。

## 関連項目

- [[payments/INDEX]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/psp-merchant-settlement-risk]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/cashless-jp-landscape]]
- [[JapanFG/jcb]]
- [[JapanFG/smbc-card]]
- [[JapanFG/mufg-nicos]]
- [[JapanFG/gmo-payment-gateway]]
- [[INDEX|FinWiki index]]

## 出典

- METI: 割賦販売法登録一覧。
- METI: カード / 後払い FAQ およびクレジットカード・セキュリティガイドライン改訂リリース。
- 日本クレジット協会: セキュリティガイドライン文書ページおよび 5.0 / 6.0 ガイドライン資料。
- JCB: カード決済参加者モデルおよび加盟店規約。
- FSA: 免許・登録金融機関ポータル。
- Payments Japan Association: 公開刊行物インデックス。
