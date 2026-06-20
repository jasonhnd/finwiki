---
source: payment-firms/merpay
source_hash: eede29db6d36dccc
lang: ja
status: machine
fidelity: ok
title: "メルペイ (Merpay)"
translated_at: 2026-06-20T09:33:00.420Z
---

# メルペイ (Merpay)


## ウィキ上の位置づけ

この項目は次の配下に位置づけられる: [[payment-firms/INDEX|payment-firms INDEX]]. 次と併読する: [[payments/INDEX|payments index]] for adjacent context and [[payments/funds-transfer-vs-prepaid-boundary|Funds transfer vs prepaid boundary in Japan]] for the 制度全体の境界.

## 要約

メルペイは [[payment-firms/mercari-hd|メルカリ]] の決済・与信 operating company。公式 About は資金移動業、前払式支払手段、信用購入あっせん、貸金業などの登録を示しており、marketplace balance / wallet / credit の接続点として独立ページが必要。

## 1. 法人・ライセンス境界

| 項目 | 読み方 |
|---|---|
| Legal entity | 株式会社メルペイ |
| Group | [[payment-firms/mercari-hd|Mercari]] |
| 主なレーン | Merpay ウォレット、Mercari 売上残高決済、資金移動、信用・貸付隣接領域 |
| FSA registry route | FSA funds-transfer list: 関東財務局長 第00057号, 株式会社メルペイ. |

## 2. 事業上の役割

- Mercari のマーケットプレイス売上金、買い手 / 売り手の ID、アプリ利用接点を、決済、ウォレット、信用利用へ転換する。
- C2C マーケットプレイスデータ、コード決済、前払価値、資金移動残高、後払い、銀行口座出金を橋渡しする。イシュア / アクワイアラ / プロセッサの分担は [[payments/japan-card-issuer-acquirer-processor-split]] を参照する。
- Mercari の資金決済法上の表示は、有償ポイントと Merpay 残高を分けて開示している。前払式支払手段の保全と資金移動の保全は同じ管理問題ではないため、この区別が重要である。
- PayPay、楽天ペイ、au PAY、d払いとの比較対象であり、[[payments/funds-transfer-service-providers-japan-index]] にも現れる。

## 3. 規制・商品境界

| レイヤー | 公開情報からの読み方 |
|---|---|
| 資金移動 | Merpay の公式ページと金融庁一覧は、同社を関東財務局第 00057 号として示している。表示文書は Merpay 残高が銀行預金ではなく、資金決済法に基づき保全されることを説明している。 |
| 前払ポイント | 有償ポイントは第三者型前払式支払手段として別に開示される。これは払戻し、有効期限、保証金処理に関わる。 |
| 信用 / 貸金隣接 | Merpay の会社ページは包括信用購入あっせん業者と貸金業者登録を列挙しているため、単なるコード決済ブランドではなくウォレット + 信用の operator として読むべきである。 |
| マーケットプレイス循環 | 戦略的な循環は、Mercari 売上金 -> Merpay 残高 / 決済 -> 信用または後払い商品 -> マーケットプレイスと加盟店での再利用である。 |

## 4. この単独ページが重要な理由

Mercari のマーケットプレイス事業と、Merpay の規制対象となる決済・信用事業では、リスクとコンプライアンス上の論点が異なる。このページでは金融サービス上の境界を明示する。

## 関連項目

- [[payment-firms/mercari-hd]]
- [[payments/cashless-jp-landscape]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[loyalty/japan-points-landscape]]

## 出典

- Merpay About: https://jp.merpay.com/about/
- Mercari 資金決済法上の表示: https://static.jp.mercari.com/shikin_kessai
- FSA 資金移動業者一覧: https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
