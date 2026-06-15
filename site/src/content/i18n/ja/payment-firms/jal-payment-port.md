---
source: payment-firms/jal-payment-port
source_hash: 2ce16eefc9fe53bf
lang: ja
status: machine
fidelity: ok
title: "JALペイメント・ポート"
translated_at: 2026-06-15T03:48:21.846Z
---

# JALペイメント・ポート

## Wiki 上の位置

本項目は [[payment-firms/INDEX|payment-firms INDEX]] に属する。規制上の文脈として [[payments/funds-transfer-service-providers-japan-index|funds-transfer registry]] を、ウォレット分類として [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid]] を、グループ隣接の銀行インフラとして [[megabanks/sbi-hd|SBI]] / [[regional-banks/ssnb|Sumishin SBI Net Bank]] を併せて参照のこと。

## 概要

JALペイメント・ポート株式会社は、JAL Pay / travel-wallet payment services を担う事業者である。JAL の公式会社概要には、第三者型前払式支払手段発行業、資金移動業、銀行代理業、金融商品仲介業が記載されており、FSA の資金移動業者一覧には関東財務局長 第00062号、登録日 2018-08-15 として記録されている。

FinWiki にとって、これは航空会社の会員制度、prepaid value、transfer capability、bank agency、金融商品仲介を結び付ける travel / loyalty ウォレットのルートである。

## 1. 法人・ライセンス境界

| Item | Reading |
|---|---|
| Legal entity | JALペイメント・ポート株式会社 / JAL Payment Port Co., Ltd. |
| Established | 2017-09-19, per JAL company profile |
| Shareholder route | JAL SBI FinTech, Japan Airlines, and [[regional-banks/ssnb|Sumishin SBI Net Bank]] are listed on the JAL company profile |
| Main products / lanes | JAL Pay, prepaid value, funds transfer, bank agency, financial instruments intermediary |
| FSA funds-transfer route | 関東財務局長 第00062号 |

## 2. 事業上の役割

- JAL Pay は、航空会社のロイヤルティ / 顧客アプリのサーフェスをウォレットおよび決済ルートへと変える。
- 会社概要は、prepaid、funds transfer、bank agency、金融商品仲介の各活動を明示的に組み合わせている。
- 戦略的な読み方は、travel をめぐる embedded finance である：payments、口座連携、remittance / transfer、そして場合によっては投資商品仲介が、マイレージや旅行予約のフローの隣に存在しうる。
- 資金移動業の payout / wallet operator として、[[payment-firms/seven-payment-service|セブン・ペイメントサービス]] と同じ cash-bridge の資金移動業ブラケットを共有するが、JAL のサーフェスは ATM 主導ではなくロイヤルティ主導である。

## 3. この独立ページが重要である理由

ほとんどの決済ページは bank、telecom、retail、marketplace のエコシステムに焦点を当てる。JAL Payment Port は、純粋な PSP や銀行アプリの競争よりも、ロイヤルティ主導の embedded finance に近い travel ecosystem ルートを示す。[[loyalty/japan-points-landscape|Japan points landscape]] や [[payments/japan-code-payment-competitive-map|code-payment competition]] と並べて読むとよい。

## 関連

- [[payments/INDEX]]
- [[payments/funds-transfer-service-providers-japan-index]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[loyalty/japan-points-landscape]]
- [[megabanks/sbi-hd]]
- [[regional-banks/ssnb]]

## 出典

- JAL Payment Port company profile: https://www.jal.co.jp/jp/ja/jmb/jalpay/pay/aboutus/index.html
- JAL Pay service page: https://www.jal.co.jp/jp/ja/jmb/jalpay/
- FSA funds-transfer service provider list: https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
