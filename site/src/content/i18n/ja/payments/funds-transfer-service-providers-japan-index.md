---
source: payments/funds-transfer-service-providers-japan-index
source_hash: 2e70677bbf51158e
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "日本の資金移動業者登録レジストリインデックス"
translated_at: 2026-06-26T08:28:46.063Z
---

# 日本の資金移動業者登録レジストリインデックス

## 概要金融庁の資金移動業者一覧には、**2026-04-30 時点で 83 の登録事業者**が含まれる。本ページは [[payments/funds-transfer-vs-prepaid-boundary|資金移動 vs 前払式]] 分析のためのレジストリ統制ルートであり、行レベルのレジストリデータをすべて再掲するものではない。

[[payments/INDEX|payments INDEX]] 配下の企業ページを、送金事業者・ウォレット事業者・送金プロバイダー・送金機能を持つ PSP・ステーブルコイン近接の決済会社として読む必要がある場合に、本ページを用いる。登録番号・日付・住所・サービス種別の列については、金融庁の公式 PDF が引き続き真正のソースである。

## レジストリスナップショット

| 指標 | 読み方 |
|---|---:|
| 金融庁の基準日 | 2026-04-30 |
| 登録資金移動業者の総数 | 83 |
| 主たる規制ルート | 金融庁 `資金移動業者登録一覧` |
| Wiki 再掲ポリシー | 83 の全行はコピーしない；金融庁を引用し、ここでは重要な wiki ルートを維持する。 |

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

| 境界 | 取扱い |
|---|---|
| 資金移動業者 | 資金決済法に基づき登録し、銀行免許ルート外で為替取引を行う。 |
| 第三者型前払式支払手段発行者 | 価値が払戻不可の貯蔵価値である場合は [[payments/prepaid-payment-instrument-issuers-japan-index|前払式発行会社 registry]] にルーティングする。 |
| 銀行／銀行代理業 | 中核製品が預金受入・銀行口座アクセス・銀行代理業である場合は [[banking/INDEX|banking]] にルーティングする。 |
| カード加盟店契約（アクワイアリング）| [[payments/card-acquiring-japan-stack|card アクワイアリング stack]] および経産省の割賦販売法一覧にルーティングする。 |
| ステーブルコイン／EPI | 電子決済手段が関わる場合は [[fintech/japan-stablecoin-regulatory-landscape|stablecoin regulation]] および EPI 事業者ページにルーティングする。 |

## 既存の重要 Wiki ルート以下のルートは、FinWiki で既にカバー済みまたは新たに昇格された重要事業者である。これらは 83行の金融庁一覧の完全な再掲ではない。

| セグメント | 公式／製品ルート | Wiki ルート | 境界注記 |
|---|---|---|---|
| 大手コード決済ウォレット | PayPay株式会社 | [[payment-firms/paypay]] | ウォレット、コード決済、プリペイド、資金移動、賃金デジタル払いの近接性 |
| マーケットプレイスウォレット | 株式会社メルペイ | [[payment-firms/merpay]] | マーケットプレイス決済とウォレットのルート |
| 通信ウォレット | auペイメント株式会社 | [[payment-firms/au-payment]] | au PAY の資金移動／プリペイド境界 |
| プリペイド電子マネー | 楽天Edy株式会社 | [[payment-firms/rakuten-edy]] | 貯蔵価値 + 資金移動レジストリのルート |
| 消費者ウォレット／プリペイドカード | 株式会社Kyash | [[payment-firms/kyash]] | ウォレット、プリペイドカード、資金移動 |
| 家計ウォレット | 株式会社スマートバンク | [[payment-firms/smartbank]] | 消費者ウォレットとカード連動貯蓄 UX |
| 小売／ATM 決済 | 株式会社セブン・ペイメントサービス | [[payment-firms/seven-payment-service]] | セブン & アイの決済インフラ |
| PSP／ゲートウェイ | GMOペイメントゲートウェイ株式会社 | [[payment-firms/gmo-payment-gateway]] | 資金移動登録を持つ上場 PSP |
| PSP／ゲートウェイ | GMOイプシロン株式会社 | [[payment-firms/gmo-epsilon]] | 中小加盟店 PSP／送金ルート |
| PSP／ゲートウェイ | SBペイメントサービス株式会社 | [[payment-firms/sb-payment-service]] | SoftBank／PayPay グループの加盟店 PSP |
| PSP／ゲートウェイ | 株式会社DGフィナンシャルテクノロジー | [[payment-firms/dg-financial-technology]] | デジタルガレージ PSP／加盟店決済ルート |
| QR ゲートウェイ | 株式会社ネットスターズ | [[payment-firms/netstars]] | StarPay QR／マルチキャッシュレスゲートウェイと資金移動登録 |
| COIN+／Air ウォレット | 株式会社リクルートMUFGビジネス | [[payment-firms/recruit-mufg-business]] | リクルート + MUFG のウォレット／送金事業者 |
| 旅行ウォレット | JALペイメント・ポート株式会社 | [[payment-firms/jal-payment-port]] | JAL Pay、プリペイド、銀行代理業、送金ルート |
| クロスボーダー送金 | ワイズ・ペイメンツ・ジャパン株式会社 | [[payment-firms/wise-payments-japan]] | クロスボーダー送金／多通貨送金 |
| クロスボーダー送金 | REVOLUT TECHNOLOGIES JAPAN株式会社 | [[payment-firms/revolut-technologies-japan]] | アプリベースの国際送金／ウォレットルート |
| クロスボーダー送金 | PayPal Pte. Ltd. | [[payment-firms/paypal-pte-ltd-japan]] | クロスボーダー決済／ウォレット境界 |
| クロスボーダー送金 | ペイオニア・ジャパン株式会社 | [[payment-firms/payoneer-japan]] | マーケットプレイス払出とクロスボーダー送金 |
| クロスボーダー送金 | ウエスタンユニオンジャパン株式会社 | [[payment-firms/western-union-japan]] | 送金ネットワーク |
| クロスボーダー送金 | SBIレミット株式会社 | [[payment-firms/sbi-remit]] | SBI グループの送金事業者 |
| FX／トラベルマネー | トラベレックスジャパン株式会社 | [[payment-firms/travelex-japan]] | リテール FX／送金近接性 |
| クロスボーダー法人決済 | Airwallex Japan株式会社 | [[payment-firms/airwallex-japan]] | クロスボーダー B2B 決済インフラ |
| ステーブルコイン近接の資金移動 | JPYC株式会社 | [[payment-firms/jpyc]] | 資金移動 + ステーブルコイン／EPI 近接性 |
| 銀行グループ消費者金融 | 株式会社アプラス | [[card-issuers/aplus]] | 割賦／カード／資金移動近接性 |
| 通信 FG ウォッチリスト | 株式会社NTTドコモ・フィナンシャルグループ | [[megabanks/ndfg]] | 新規レジストリ行；グループ構造の成熟に伴う事業会社ルーティングを注視 |

## 昇格ルールレジストリ行を独立した wiki ページへ昇格させるのは、その事業者が以下のいずれかである場合に限る：

- 大手消費者ウォレット、送金ネットワーク、加盟店 PSP、コード決済ゲートウェイ、上場グループ、またはステーブルコイン近接事業者；
- [[payments/cashless-jp-landscape|Japan cashless payment]] 分析スレッドにとって既に重要；
- 戦略・ライセンス境界・リスク分析を支えるのに十分な公開ソースを持つ；または
- [[financial-regulators/missing-financial-institutions-backlog|the JapanFG expansion backlog]] における親会社／事業会社の区別を解決するのに必要。

## 関連

- [[payments/INDEX]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/card-acquiring-japan-stack]]
- [[financial-licenses/INDEX]]
- [[financial-regulators/missing-financial-institutions-backlog]]
- [[INDEX|FinWiki index]]

## 出典

- 金融庁 免許／登録インデックス：https://www.fsa.go.jp/menkyo/menkyo.html
- 金融庁 資金移動業者一覧：https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
- 金融庁 資金移動業者向けの様式／規制ルート：https://www.fsa.go.jp/common/shinsei/shikinidou.html
