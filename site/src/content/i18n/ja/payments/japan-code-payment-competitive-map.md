---
source: payments/japan-code-payment-competitive-map
source_hash: 12c89faffbd71346
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "Japan コード決済 competitive map"
translated_at: 2026-06-26T08:28:38.471Z
---

# Japan コード決済 competitive map

## Overview

日本のコード決済市場は、ウォレット・エコシステム、加盟店アクセプタンス・ネットワーク、ロイヤルティ予算、決済／資金移動の各能力をめぐる攻防として記録される。経済産業省の 2025 キャッシュレス決済リリースは、**58.0%** のキャッシュレス比率を報告し、コード決済を**キャッシュレス決済額の 10.2%、すなわち 16.6 兆円**と特定する一方、キャッシュレス推進協議会は店舗での金額／件数、送金、チャージ残高、MAU をカバーするコード決済動向調査を公表している。

このページは、コード決済分析を [[payments/INDEX|payments]] の下にルーティングし、[[payments/INDEX|payments INDEX]] の消費者向けウォレット事業者を、[[payment-firms/netstars|Netstars]] や [[payments/psp-merchant-settlement-risk|加盟店決済 risk]] といった PSP／ゲートウェイ・インフラと接続する。

## Competitive Lanes

| Lane | Core route | Strategic reading |
|---|---|---|
| SoftBank / LY ウォレット | [[payment-firms/paypay|PayPay]] and [[megabanks/paypay-fg|PayPay FG]] | 最大の消費者向けウォレットの重力、加盟店アクセプタンス、ポイント／キャンペーン、銀行／カード／証券のクロスセル。 |
| 楽天エコシステム | [[payment-firms/rakuten-fg|Rakuten FG]], [[card-issuers/rakuten-card|Rakuten Card]], [[payment-firms/rakuten-edy|Rakuten Edy]] | EC、カード、ポイント、銀行／証券の隣接性；アプリとカードの経済性が相互作用する。 |
| 通信系ウォレット | [[payment-firms/au-payment|au PAY]] and [[megabanks/au-fh|au Financial Holdings]] | KDDI のディストリビューション、通信料課金、銀行／カード／証券／保険のバンドル。 |
| NTT ドコモ・ルート | [[megabanks/ndfg|NTT docomo FG]] | d払い／d カード／銀行向け戦略は、構造が安定するにつれて NDFG を通じて追跡される。 |
| マーケットプレイス・ウォレット | [[payment-firms/merpay|Merpay]] and [[payment-firms/mercari-hd|Mercari HD]] | マーケットプレイス残高、BNPL／信用、本人確認、銀行免許への野心。 |
| 銀行連携ウォレット | [[payment-firms/recruit-mufg-business|Recruit MUFG Business]] | COIN+／Air ウォレットルート；口座連携決済とリクルートの加盟店／消費者サーフェス。 |
| トラベル・ウォレット | [[payment-firms/jal-payment-port|JAL Payment Port]] | ロイヤルティ／トラベルの組込型金融、前払式、資金移動、銀行代理業。 |
| QR ゲートウェイ／PSP | [[payment-firms/netstars|Netstars]], [[payment-firms/sb-payment-service|SBPS]], [[payment-firms/gmo-payment-gateway|GMO-PG]] | 加盟店側のアグリゲーション、オンボーディング、決済、リスク管理。 |

## What Actually Drives Competition

- 消費者の利用頻度：決済アプリは、コンビニ、レストラン、交通隣接の購買、小規模加盟店で習慣化されたときに勝つ。
- 加盟店アクセプタンス：広範なアクセプタンスには、ユーザーへのインセンティブだけでなく、PSP、アクワイアラー、QR ゲートウェイ、低い運用上の摩擦が必要である。
- 資金源の経済性：前払式残高、銀行デビット、クレジットカード連携決済、後払いは、それぞれ異なるマージンとリスクのプロファイルを生み出す。
- ロイヤルティ予算：ポイントは利用を買うことができるが、持続可能な差別化には加盟店向けツール、データ・ループ、またはエコシステムのクロスセルが必要である。
- 規制境界：多くのウォレットは、[[payments/funds-transfer-service-providers-japan-index|資金移動]]、[[payments/prepaid-payment-instrument-issuers-japan-index|前払式]]、カード・アクワイアリング、信用にまたがる慎重なルーティングを必要とする。

## 事業者 Lens

| Question | Route |
|---|---|
| これはウォレットか、それとも加盟店 PSP か？ | [[payment-firms/paypay|PayPay]] を [[payment-firms/netstars|Netstars]] および [[payments/psp-merchant-settlement-risk]] と比較する。 |
| ストアドバリューは出金可能か、または送金可能か？ | [[payments/funds-transfer-vs-prepaid-boundary]] を使う。 |
| コード決済アプリの背後に信用があるか？ | [[payments/credit-purchase-card-operators-japan-index]] を使う。 |
| アプリはポイントの経済性に依存しているか？ | [[loyalty/japan-points-landscape]] を使う。 |
| 銀行口座が資金供給レールになりつつあるか？ | [[banking/baas-japan-landscape]] および [[banking/INDEX]] を使う。 |

## Related

- [[payments/INDEX]]
- [[payments/cashless-jp-landscape]]
- [[payments/funds-transfer-service-providers-japan-index]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/psp-merchant-settlement-risk]]
- [[payment-firms/paypay]]
- [[payment-firms/netstars]]
- [[loyalty/japan-points-landscape]]

## Sources

- 経済産業省、2025 キャッシュレス決済比率リリース：https://www.meti.go.jp/press/2025/03/20260331006/20260331006.html
- キャッシュレス推進協議会、コード決済動向調査の公表ページ：https://paymentsjapan.or.jp/publications/code-payments-20260330/
- 金融庁 資金移動業者一覧：https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
