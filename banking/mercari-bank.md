---
title: "メルカリバンク (Mercari Bank)"
aliases:
  - "mercari-bank"
  - "Mercari Bank"
  - "メルカリバンク"
  - "みんなの銀行 メルカリ支店"
domain: "banking"
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-05-19
review_by: 2026-11-15
confidence: likely
tags: [banking, baas, mercari, merpay, minna-bank]
status: active
sources:
  - "https://corporate.minna-no-ginko.com/common/pdf/news/2025/12/18/newsrelease_media_1218_01.pdf"
  - "https://www.minna-no-ginko.com/branches/baas-mercari/?id=program"
  - "https://help.jp.mercari.com/guide/articles/2074/"
  - "https://static.jp.mercari.com/electronic_payment_agency_business"
---

# メルカリバンク (Mercari Bank)

## TL;DR

メルカリバンクは、メルカリアプリ内でみんなの銀行口座を使えるようにした BaaS サービス。2025-12-18 に、みんなの銀行とメルペイの BaaS 業務提携により開始された。銀行主体は [[banking/minna-bank-baas-model|みんなの銀行]] であり、メルペイは API 連携・電子決済等代行業のレイヤーを担う。

## Product map

| Component | Description |
|---|---|
| Service front | メルカリアプリの残高 / おさいふ導線 |
| Bank account | みんなの銀行普通預金口座、パートナー支店「メルカリ支店」 |
| API connector | メルペイとみんなの銀行の API 連携 |
| Core use case | メルカリ売上金 / メルペイ残高を即時・手数料無料で銀行口座へ移す |
| Cash-out | セブン銀行 ATM などの出金導線、優遇条件あり |

## Strategic read

メルカリバンクの本質は、フリマの売上金を銀行預金へ変換する摩擦を下げること。従来の「売上金を出金する」UX は、手数料・待ち時間・外部銀行口座登録が心理的な負荷になりやすい。メルカリバンクは、売上金、メルペイ残高、銀行口座を同じアプリ導線に置くことで、売る・使う・貯めるを接続する。

この構造は、[[banking/baas-japan-landscape|Japan BaaS landscape]] の中でも強い例。メルカリは高頻度な C2C marketplace と決済残高を持ち、みんなの銀行は銀行ライセンスと API / partner branch を持つ。両者を組み合わせることで、銀行が単独で取りにくい生活接点を獲得できる。

## What it is not

- メルペイが銀行免許を取得したサービスではない。
- メルカリ支店は、みんなの銀行のパートナー支店であり、メルカリ単独の預金銀行ではない。
- メルカリ支店は、公開 FAQ 上、メルカリバンク以外の API 連携に制限があるため、汎用みんなの銀行口座と同じ UX とは限らない。

## Competitive meaning

メルカリバンクは [[banking/rakuten-bank|楽天銀行]] や [[banking/paypay-bank|PayPay 銀行]] のようなフル銀行グループ戦略とは違う。メルカリは銀行を自前で持つより、BaaS を使って金融機能をアプリ内に埋め込む道を選んでいる。

そのため比較軸は「銀行としての総合力」ではなく、次の 3 点になる。

| Axis | Question |
|---|---|
| Conversion | 売上金・残高をどれだけ預金化できるか |
| Stickiness | メルカリアプリの利用頻度を金融導線に転換できるか |
| License leverage | 自社ライセンスとみんなの銀行 API の境界をどこまで広げられるか |

## Counterpoints

- メルカリバンクの口座開設は marketplace ユーザーの利便性向上には強いが、給与受取やメインバンク化までは別問題。
- メルカリ支店の API 連携制限は、汎用銀行口座としての使い勝手に制約を残す。
- メルカリの本人確認、国籍条件、残高移動 UX は規制・AML 要件に左右される。
- みんなの銀行側から見ると、大口パートナー依存の口座獲得は伸びやすいが、パートナー施策停止時の残高維持が課題になる。

## Related

- [[banking/mercari-bank-license-stack]]
- [[banking/minna-bank-baas-model]]
- [[banking/baas-japan-landscape]]
- [[banking/quick-deposit-four-methods]]
- [[banking/paypay-bank]]
- [[banking/rakuten-bank]]
- [[JapanFG/gmo-aozora-net]]

## Sources

- みんなの銀行 / メルペイ, 2025-12-18: メルカリバンク service launch release.
- みんなの銀行: メルカリ支店 official FAQ / branch page.
- メルカリ Help: みんなの銀行口座をメルペイに連携する.
- メルカリ: 電子決済等代行業に関する表示等.
