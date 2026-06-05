---
source: payments/japan-code-payment-competitive-map
source_hash: e3cdd6c74dfc41e0
lang: ja
status: machine
fidelity: ok
title: "日本コード決済競争マップ"
translated_at: 2026-06-02T16:33:58.527Z
---
# 日本コード決済競争マップ

## 概要

日本のコード決済市場は、ウォレット・エコシステム、加盟店受入ネットワーク、ロイヤルティ予算、決済 / 資金移動能力の争いとして記録される。METI の 2025  キャッシュレス決済比率リリースは、キャッシュレス比率を **58.0%** と報告し、コード決済をキャッシュレス決済金額の **10.2%、または 16.6 兆円** と位置づけている。Cashless Promotion Council は、店舗金額 / 件数、送金、チャージ残高、MAU を含むコード決済動向調査を公表している。

このページは、コード決済分析を [[payments/INDEX|payments]] 配下に置き、[[payments/INDEX|payments INDEX]] の消費者ウォレット事業者と、[[payment-firms/netstars|Netstars]] や [[payments/psp-merchant-settlement-risk|merchant settlement risk]] のような PSP / ゲートウェイインフラを接続する。

## 競争レーン

| レーン | 中核ルート | 戦略的な読み方 |
|---|---|---|
| SoftBank / LY ウォレット | [[payment-firms/paypay|PayPay]] と [[megabanks/paypay-fg|PayPay FG]] | 最大級の消費者ウォレットの重力、加盟店受入、ポイント / キャンペーン、銀行 / カード / 証券のクロスセル。 |
| Rakuten エコシステム | [[payment-firms/rakuten-fg|Rakuten FG]]、[[card-issuers/rakuten-card|Rakuten Card]]、[[payment-firms/rakuten-edy|Rakuten Edy]] | EC、カード、ポイント、銀行 / 証券隣接領域。アプリとカードの経済性が相互作用する。 |
| 通信ウォレット | [[payment-firms/au-payment|au PAY]] と [[megabanks/au-fh|au Financial Holdings]] | KDDI の流通力、通信料金請求、銀行 / カード / 証券 / 保険の束ね売り。 |
| NTT docomo ルート | [[megabanks/ndfg|NTT docomo FG]] | d払い / dカード / 銀行向け戦略は、構造が安定するにつれて NDFG 経由で追跡する。 |
| マーケットプレイス・ウォレット | [[payment-firms/merpay|Merpay]] と [[payment-firms/mercari-hd|Mercari HD]] | マーケットプレイス残高、BNPL / クレジット、本人確認、銀行ライセンス志向。 |
| 銀行連動ウォレット | [[payment-firms/recruit-mufg-business|Recruit MUFG Business]] | COIN+ / Air Wallet ルート。口座連動決済と Recruit の加盟店 / 消費者接点。 |
| 旅行ウォレット | [[payment-firms/jal-payment-port|JAL Payment Port]] | ロイヤルティ / 旅行組込金融、プリペイド、送金、銀行代理業。 |
| QR ゲートウェイ / PSP | [[payment-firms/netstars|Netstars]]、[[payment-firms/sb-payment-service|SBPS]]、[[payment-firms/gmo-payment-gateway|GMO-PG]] | 加盟店側の集約、オンボーディング、精算、リスク管理。 |

## 実際に競争を動かすもの

- 消費者の利用頻度: 決済アプリは、コンビニ、飲食店、交通隣接購買、小規模加盟店で習慣化したときに勝つ。
- 加盟店受入: 広い受入には、利用者インセンティブだけでなく、PSP、アクワイアラ、QR ゲートウェイ、低い運用摩擦が必要である。
- 資金源の経済性: プリペイド残高、銀行デビット、クレジットカード連動決済、後払いは、それぞれ異なるマージンとリスク特性を持つ。
- ロイヤルティ予算: ポイントは利用を買えるが、持続的な差別化には加盟店ツール、データループ、またはエコシステム横断のクロスセルが必要である。
- 規制境界: 多くのウォレットでは、[[payments/funds-transfer-service-providers-japan-index|funds transfer]]、[[payments/prepaid-payment-instrument-issuers-japan-index|prepaid]]、カードアクワイアリング、与信をまたぐ慎重なルーティングが必要になる。

## 事業者を見る視点

| 問い | ルート |
|---|---|
| これはウォレットか、それとも加盟店 PSP か。 | [[payment-firms/paypay|PayPay]] を [[payment-firms/netstars|Netstars]] および [[payments/psp-merchant-settlement-risk]] と比較する。 |
| 前払残高は払戻可能か、または送金可能か。 | [[payments/funds-transfer-vs-prepaid-boundary]] を使う。 |
| コード決済アプリの背後に与信があるか。 | [[payments/credit-purchase-card-operators-japan-index]] を使う。 |
| アプリはポイント経済性に依存しているか。 | [[loyalty/japan-points-landscape]] を使う。 |
| 銀行口座が資金供給レールになりつつあるか。 | [[banking/baas-japan-landscape]] と [[banking/INDEX]] を使う。 |

## 関連項目

- [[payments/INDEX]]
- [[payments/cashless-jp-landscape]]
- [[payments/funds-transfer-service-providers-japan-index]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/psp-merchant-settlement-risk]]
- [[payment-firms/paypay]]
- [[payment-firms/netstars]]
- [[loyalty/japan-points-landscape]]

## 出典

- METI、2025  キャッシュレス決済比率リリース: https://www.meti.go.jp/press/2025/03/20260331006/20260331006.html
- Cashless Promotion Council、コード決済動向調査公開ページ: https://paymentsjapan.or.jp/publications/code-payments-20260330/
- FSA 資金移動業者一覧: https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
