---
source: payments/funds-transfer-service-providers-japan-index
source_hash: 4f5cf344ee7b1162
lang: ja
status: machine
fidelity: ok
title: "日本の資金移動業者登録インデックス"
translated_at: 2026-06-02T16:33:58.461Z
---
# 日本の資金移動業者登録インデックス

## 概要

FSA の資金移動業者一覧には、**83  の登録事業者**が含まれる（2026-04-30 時点）。このページは [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid]] 分析のための登録管理ルートであり、行単位の登録データをすべて再掲するものではない。

[[JapanFG/INDEX|JapanFG]] 配下の会社ページを、送金事業者、ウォレット運営者、資金移動プロバイダー、資金移動機能を持つ PSP、またはステーブルコイン隣接の決済会社として読む必要がある場合に、このページを使う。登録番号、登録日、住所、サービス種別欄については、公式 FSA PDF を正本とする。

## 登録スナップショット

| 指標 | 読み方 |
|---|---:|
| FSA 基準日 | 2026-04-30 |
| 登録資金移動業者の総数 | 83 |
| 主管規制ルート | FSA `資金移動業者登録一覧` |
| ウィキでの再掲方針 | 83  行すべてをコピーせず、FSA を引用し、重要なウィキ上のルートをここで維持する。 |

## 管轄別件数

| 管轄 | 事業者数 |
|---|---:|
| 北海道財務局 | 2 |
| 関東財務局 | 76 |
| 東海財務局 | 1 |
| 北陸財務局 | 1 |
| 近畿財務局 | 3 |
| **合計** | **83** |

## 境界

| 境界 | 扱い |
|---|---|
| 資金移動業者 | 銀行免許ルート外で為替取引を行うため、資金決済法に基づき登録される。 |
| 第三者型前払式支払手段発行者 | 払戻しできない蓄価型価値の場合は [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid issuer registry]] にルートする。 |
| 銀行 / 銀行代理業 | 中核商品が預金受入、銀行口座アクセス、銀行代理業である場合は [[banking/INDEX|banking]] にルートする。 |
| カードアクワイアリング / 加盟店契約 | [[payments/card-acquiring-japan-stack|card acquiring stack]] および METI の割賦販売法関連一覧にルートする。 |
| ステーブルコイン / EPI | 電子決済手段が関係する場合は [[fintech/japan-stablecoin-regulatory-landscape|stablecoin regulation]] と EPI 事業者ページにルートする。 |

## 既存の重要ウィキルート

以下のルートは、FinWiki で既に扱っている、または新たに昇格させた重要事業者である。83 行の FSA 一覧を完全に再掲するものではない。

| セグメント | 公式 / 商品ルート | ウィキルート | 境界メモ |
|---|---|---|---|
| 大規模コード決済ウォレット | PayPay株式会社 | [[JapanFG/paypay]] | ウォレット、コード決済、前払式、資金移動、賃金デジタル払い隣接 |
| マーケットプレイスウォレット | 株式会社メルペイ | [[JapanFG/merpay]] | マーケットプレイス決済とウォレットルート |
| 通信系ウォレット | auペイメント株式会社 | [[JapanFG/au-payment]] | au PAY の資金移動 / 前払式境界 |
| 前払式電子マネー | 楽天Edy株式会社 | [[JapanFG/rakuten-edy]] | 蓄価型価値に加え、資金移動登録ルートを持つ |
| 消費者ウォレット / プリペイドカード | 株式会社Kyash | [[JapanFG/kyash]] | ウォレット、プリペイドカード、資金移動 |
| 家計ウォレット | 株式会社スマートバンク | [[JapanFG/smartbank]] | 消費者ウォレットとカード連動貯蓄 UX |
| 小売 / ATM 決済 | 株式会社セブン・ペイメントサービス | [[JapanFG/seven-payment-service]] | Seven & i の決済インフラ |
| PSP / ゲートウェイ | GMOペイメントゲートウェイ株式会社 | [[JapanFG/gmo-payment-gateway]] | 資金移動登録を持つ上場 PSP |
| PSP / ゲートウェイ | GMOイプシロン株式会社 | [[JapanFG/gmo-epsilon]] | SME 加盟店 PSP / 移転ルート |
| PSP / ゲートウェイ | SBペイメントサービス株式会社 | [[JapanFG/sb-payment-service]] | SoftBank / PayPay グループの加盟店 PSP |
| PSP / ゲートウェイ | 株式会社DGフィナンシャルテクノロジー | [[JapanFG/dg-financial-technology]] | Digital Garage 系 PSP / 加盟店決済ルート |
| QR ゲートウェイ | 株式会社ネットスターズ | [[JapanFG/netstars]] | StarPay QR / マルチキャッシュレスゲートウェイと資金移動登録 |
| COIN+ / Air Wallet | 株式会社リクルートMUFGビジネス | [[JapanFG/recruit-mufg-business]] | Recruit + MUFG のウォレット / 資金移動事業者 |
| トラベルウォレット | JALペイメント・ポート株式会社 | [[JapanFG/jal-payment-port]] | JAL Pay、前払式、銀行代理業、資金移動ルート |
| クロスボーダー送金 | ワイズ・ペイメンツ・ジャパン株式会社 | [[JapanFG/wise-payments-japan]] | クロスボーダー送金 / 多通貨移転 |
| クロスボーダー送金 | REVOLUT TECHNOLOGIES JAPAN株式会社 | [[JapanFG/revolut-technologies-japan]] | アプリ型国際送金 / ウォレットルート |
| クロスボーダー送金 | PayPal Pte. Ltd. | [[JapanFG/paypal-pte-ltd-japan]] | クロスボーダー決済 / ウォレット境界 |
| クロスボーダー送金 | ペイオニア・ジャパン株式会社 | [[JapanFG/payoneer-japan]] | マーケットプレイス支払いとクロスボーダー送金 |
| クロスボーダー送金 | ウエスタンユニオンジャパン株式会社 | [[JapanFG/western-union-japan]] | 送金ネットワーク |
| クロスボーダー送金 | SBIレミット株式会社 | [[JapanFG/sbi-remit]] | SBI グループの送金事業者 |
| FX / 旅行資金 | トラベレックスジャパン株式会社 | [[JapanFG/travelex-japan]] | 店頭 FX / 送金隣接 |
| クロスボーダー法人決済 | Airwallex Japan株式会社 | [[JapanFG/airwallex-japan]] | クロスボーダー B2B 決済インフラ |
| ステーブルコイン隣接の資金移動 | JPYC株式会社 | [[JapanFG/jpyc]] | 資金移動 + ステーブルコイン / EPI 隣接 |
| 銀行系消費者金融 | 株式会社アプラス | [[JapanFG/aplus]] | 割賦 / カード / 資金移動隣接 |
| 通信系 FG ウォッチリスト | 株式会社NTTドコモ・フィナンシャルグループ | [[JapanFG/ndfg]] | 新規登録行。グループ構造の成熟に合わせ、事業会社ルートを監視する。 |

## 昇格ルール

登録行を独立したウィキページへ昇格させるのは、その事業者が次の条件を満たす場合に限る。

- 主要な消費者ウォレット、送金ネットワーク、加盟店 PSP、コード決済ゲートウェイ、上場グループ、またはステーブルコイン隣接事業者である。
- 既に [[payments/cashless-jp-landscape|Japan cashless payment]] の分析スレッドで重要である。
- 戦略、ライセンス境界、リスク分析を支える公開情報が十分にある。
- [[JapanFG/missing-financial-institutions-backlog|the JapanFG expansion backlog]] における親会社 / 事業会社の区別を解決するために必要である。

## 関連項目

- [[payments/INDEX]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/card-acquiring-japan-stack]]
- [[JapanFG/legal-financial-licenses/INDEX]]
- [[JapanFG/missing-financial-institutions-backlog]]
- [[INDEX|FinWiki index]]

## 出典

- FSA license / registration index: https://www.fsa.go.jp/menkyo/menkyo.html
- FSA funds-transfer service provider list: https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
- FSA forms / regulatory route for funds-transfer operators: https://www.fsa.go.jp/common/shinsei/shikinidou.html
