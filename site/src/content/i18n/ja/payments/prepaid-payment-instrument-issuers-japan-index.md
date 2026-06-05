---
source: payments/prepaid-payment-instrument-issuers-japan-index
source_hash: a841889493016b76
lang: ja
status: machine
fidelity: ok
title: "日本の第三者型前払式支払手段発行者登録インデックス"
translated_at: 2026-06-02T16:33:58.491Z
---
# 日本の第三者型前払式支払手段発行者登録インデックス

## 要約

FSA の第三者型前払式支払手段発行者一覧には、**803 発行者が 2026-04-30時点で掲載されている**。このページは、前払式支払手段発行者面の登録統制ルートである。803 行すべてを転載するものではなく、公式 FSA ワークブックを完全な行単位の正本として扱う。

このページは、前払 / ストアドバリューの発行を、資金移動、クレジットカード、ポイント、ステーブルコイン / EPI ルートから切り分けるために使う。主要なウォレット、カード、小売、交通、ゲーム、fintech 事業者に限って独立ページを作成する。

## 境界

| 境界 | 取扱い |
|---|---|
| 第三者型前払式支払手段発行者 | 第三者の加盟店 / 店舗で利用可能な前払価値の登録発行者。全体母集団は FSA `daisan.xlsx` で管理する。 |
| 資金移動業者 | FSA 資金移動業者一覧と [[payments/funds-transfer-vs-prepaid-boundary]] を使う。 |
| クレジットカード / 割賦事業者 | METI 割賦販売法登録と [[payments/card-acquiring-japan-stack]] を使う。 |
| ロイヤルティポイント | 法的価値が前払式支払手段でない限り [[loyalty/INDEX]] に回す。 |
| ステーブルコイン / EPI | [[fintech/japan-stablecoin-regulatory-landscape]] と [[exchanges/jp-exchange-sbi-vc-trade]] に回す。 |

## 登録スナップショット

| 指標 | 読み方 |
|---|---:|
| FSA 基準日 | 2026-04-30 |
| 第三者型前払式支払手段発行者総数 | 803 |
| 発行者数が最大の管轄 | 関東財務局: 314 |
| 登録転載方針 | 803 行を wiki に複製しない。FSA ワークブックを引用し、管轄別件数と重要ルートをここに保持する。 |

## 管轄別件数

| 管轄 | 発行者数 |
|---|---:|
| 北海道財務局 | 44 |
| 東北財務局 | 99 |
| 関東財務局 | 314 |
| 東海財務局 | 62 |
| 北陸財務局 | 38 |
| 近畿財務局 | 71 |
| 中国財務局 | 59 |
| 四国財務局 | 36 |
| 福岡財務支局 | 39 |
| 九州財務局 | 35 |
| 沖縄総合事務局 | 6 |
| **合計** | **803** |

## 既存の重要 Wiki ルート

これらの行は、主要な前払式支払手段発行者すべてを網羅する主張ではない。FinWiki 内で現在ルーティング済みの重要事業者である。

| FSA 一覧上の正式名 | 登録日 | 法人番号 | Wiki ルート | 境界注記 |
|---|---|---:|---|---|
| 三菱ＵＦＪニコス株式会社 | 1991-11-22 | 8010001000016 | [[card-issuers/mufg-nicos]] | カード / 前払 / 精算グループ運営者 |
| 株式会社セブン・カードサービス | 2007-02-22 | 4010001088278 | [[card-issuers/seven-card-service]] | Seven & i カード / 前払隣接 |
| ａｕペイメント株式会社 | 2010-09-30 | 5010401069983 | [[payment-firms/au-payment]] | au PAY 前払 / 資金移動境界 |
| ＳＢペイメントサービス株式会社 | 2010-12-10 | 4010401058731 | [[payment-firms/sb-payment-service]] | 加盟店 PSP / 前払隣接 |
| ライフカード株式会社 | 2011-04-01 | 3020001086810 | [[card-issuers/life-card]] | カードおよび前払 / 保証隣接 |
| 株式会社エポスカード | 2015-01-08 | 6011201010186 | [[card-issuers/epos-card]] | Marui グループカード / 前払隣接 |
| 楽天Ｅｄｙ株式会社 | 2016-07-21 | 3010901038102 | [[payment-firms/rakuten-edy]] | 前払式電子マネー運営者 |
| 株式会社Ｋｙａｓｈ | 2017-01-16 | 9011001103831 | [[payment-firms/kyash]] | ウォレット / 前払カード / 資金移動 fintech |
| ＰａｙＰａｙ株式会社 | 2018-10-05 | 5010001192707 | [[payment-firms/paypay]] | コード決済ウォレット。前払 / 資金移動 / ポイント分解が必要 |
| 株式会社メルペイ | 2019-01-24 | 1010401135178 | [[payment-firms/merpay]] | マーケットプレイス・ウォレット / コード決済運営者 |
| イオンフィナンシャルサービス株式会社 | 2023-04-24 | 2010001010887 | [[card-issuers/aeon-financial-service]] | 小売金融グループ / 前払隣接 |
| 株式会社スマートバンク | 2024-03-26 | 8011001127534 | [[payment-firms/smartbank]] | 家計ウォレット / 前払カード隣接 |
| 三井住友カード株式会社 | 1990-12-03 | 3120001082353 | [[card-issuers/smbc-card]] | カード発行会社 / 前払隣接 |

## 昇格ルール

登録のみの発行者を独立ページへ昇格するのは、次の場合に限る。

- 主要なウォレット、コード決済、カード、交通、小売、ゲーム、プラットフォーム事業者である。
- 既に JapanFG / payments / fintech の分析スレッドにリンクしている。
- 前払 vs 資金移動 vs ポイントの分解に戦略上重要である。
- 独立ページを支える公開情報が十分に豊富である。

## 関連項目

- [[payments/INDEX]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/cashless-jp-landscape]]
- [[payments/card-acquiring-japan-stack]]
- [[financial-licenses/INDEX]]
- [[financial-regulators/missing-financial-institutions-backlog]]
- [[INDEX|FinWiki index]]

## 出典

- FSA, "前払式支払手段（第三者型）発行者登録一覧", `daisan.xlsx`, 2026-04-30 時点。
- FSA, 前払式支払手段政策ページ。
