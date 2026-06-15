---
source: payments/prepaid-payment-instrument-issuers-japan-index
source_hash: 4d443bc782307451
lang: ja
status: machine
fidelity: ok
title: "日本 第三者型前払式支払手段発行者 レジストリ index"
translated_at: 2026-06-15T03:48:21.915Z
---

# 日本 第三者型前払式支払手段発行者 レジストリ index

## TL;DR

FSA の第三者型前払式支払手段発行者一覧には、**2026-04-30時点で 803 発行者** が含まれる。本ページは前払式発行者サーフェスの registry-control 経路である。全 803 行を再現するものではなく、公式の FSA ワークブックが完全な行レベルの source of truth であり続ける。

本ページは、前払式／ストアドバリュー発行を、資金移動・クレジットカード・ポイント・stablecoin／EPI 経路から切り分けるために用いる。重要な wallet、card、retail、transport、game、fintech オペレーターについてのみ standalone ページを作成すること。

## 境界

| 境界 | 取扱い |
|---|---|
| 第三者型前払式支払手段発行者 | 第三者の加盟店／店舗で利用可能な前払式価値の登録発行者。完全な母集団は FSA `daisan.xlsx` が管理する。 |
| 資金移動業者 | FSA 資金移動業一覧および [[payments/funds-transfer-vs-prepaid-boundary]] を用いる。 |
| クレジットカード／割賦業者 | METI 割賦販売法レジストリおよび [[payments/card-acquiring-japan-stack]] を用いる。 |
| ロイヤルティ・ポイント | 法的価値が前払式支払手段でない限り [[loyalty/INDEX]] に振り向ける。 |
| Stablecoin／EPI | [[fintech/japan-stablecoin-regulatory-landscape]] および [[exchanges/jp-exchange-sbi-vc-trade]] に振り向ける。 |

## レジストリ・スナップショット

| 指標 | 内容 |
|---|---:|
| FSA 基準日 | 2026-04-30 |
| 第三者型前払式発行者 総数 | 803 |
| 発行者数が最大の管轄 | 関東財務局: 314 |
| レジストリ再現方針 | 803 行をウィキにコピーしないこと；FSA ワークブックを引用し、管轄別カウント／重要経路をここに保持する。 |

## 管轄別カウント

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

## 既存の重要ウィキ経路

これらの行は、すべての主要な前払式発行者についての完全性の主張ではない。FinWiki に既に存在する、現在ルーティングされている重要オペレーターである。

| FSA 一覧上の正式名称 | 登録日 | 法人番号 | ウィキ経路 | 境界ノート |
|---|---|---:|---|---|
| 三菱ＵＦＪニコス株式会社 | 1991-11-22 | 8010001000016 | [[card-issuers/mufg-nicos]] | カード／前払式／決済グループオペレーター |
| 株式会社セブン・カードサービス | 2007-02-22 | 4010001088278 | [[card-issuers/seven-card-service]] | セブン＆アイ カード／前払式 隣接 |
| ａｕペイメント株式会社 | 2010-09-30 | 5010401069983 | [[payment-firms/au-payment]] | au PAY 前払式／資金移動 境界 |
| ＳＢペイメントサービス株式会社 | 2010-12-10 | 4010401058731 | [[payment-firms/sb-payment-service]] | 加盟店 PSP／前払式 隣接 |
| ライフカード株式会社 | 2011-04-01 | 3020001086810 | [[card-issuers/life-card]] | カードおよび前払式／保証 隣接 |
| 株式会社エポスカード | 2015-01-08 | 6011201010186 | [[card-issuers/epos-card]] | 丸井グループ カード／前払式 隣接 |
| 楽天Ｅｄｙ株式会社 | 2016-07-21 | 3010901038102 | [[payment-firms/rakuten-edy]] | 前払式電子マネー オペレーター |
| 株式会社Ｋｙａｓｈ | 2017-01-16 | 9011001103831 | [[payment-firms/kyash]] | Wallet／前払式カード／資金移動 fintech |
| ＰａｙＰａｙ株式会社 | 2018-10-05 | 5010001192707 | [[payment-firms/paypay]] | コード決済 wallet；前払式／資金移動／ポイントの分解が必要 |
| 株式会社メルペイ | 2019-01-24 | 1010401135178 | [[payment-firms/merpay]] | マーケットプレイス wallet／コード決済オペレーター |
| イオンフィナンシャルサービス株式会社 | 2023-04-24 | 2010001010887 | [[card-issuers/aeon-financial-service]] | リテール金融グループ／前払式 隣接 |
| 株式会社スマートバンク | 2024-03-26 | 8011001127534 | [[payment-firms/smartbank]] | 家計 wallet／前払式カード 隣接 |
| 三井住友カード株式会社 | 1990-12-03 | 3120001082353 | [[card-issuers/smbc-card]] | カード issuer／前払式 隣接 |

## プロモーション・ルール

発行者を registry-only から standalone ページへ昇格させるのは、以下のいずれかに該当する場合のみ：

- 主要な wallet、コード決済、card、transport、retail、game、または platform オペレーターである；
- 既に JapanFG／payments／fintech 分析スレッドにリンクされている；
- 前払式 vs 資金移動 vs ポイントの分解にとって戦略的に重要である；
- standalone ページを支えるに足るほど公開情報が豊富である。

## 関連

- [[payments/INDEX]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/cashless-jp-landscape]]
- [[payments/card-acquiring-japan-stack]]
- [[financial-licenses/INDEX]]
- [[financial-regulators/missing-financial-institutions-backlog]]
- [[INDEX|FinWiki index]]

## 出典

- FSA, "前払式支払手段（第三者型）発行者登録一覧", `daisan.xlsx`, as of 2026-04-30.
- FSA, prepaid payment instruments policy page.
