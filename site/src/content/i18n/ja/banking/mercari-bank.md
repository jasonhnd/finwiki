---
source: banking/mercari-bank
source_hash: 1eb4016940a0cfb4
lang: ja
status: machine
fidelity: ok
title: "メルカリバンク (Mercari Bank)"
translated_at: 2026-06-02T11:47:37.287Z
---

# メルカリバンク (Mercari Bank)

## ウィキ上の位置づけ

このエントリは [[banking/INDEX|banking index]] の下にある。ピア／対照の文脈については [[banking/mercari-bank-license-stack|メルカリバンク license stack]] と、より広範なシステム／規制境界については [[banking/cooperative-banking-japan|Cooperative banking in Japan]] と照らし合わせて読むこと。

## 要約

メルカリバンクは、メルカリアプリ内でみんなの銀行口座を使えるようにした BaaS サービス。2025-12-18 に、みんなの銀行とメルペイの BaaS 業務提携により開始された。銀行主体は [[banking/minna-bank-baas-model|みんなの銀行]] であり、メルペイは API 連携・電子決済等代行業のレイヤーを担う。

## プロダクトマップ

| コンポーネント | 説明 |
|---|---|
| サービスフロント | メルカリアプリの残高 / おさいふ導線 |
| 銀行口座 | みんなの銀行普通預金口座、パートナー支店「メルカリ支店」 |
| API コネクタ | メルペイとみんなの銀行の API 連携 |
| 中核ユースケース | メルカリ売上金 / メルペイ残高を即時・手数料無料で銀行口座へ移す |
| 出金 | セブン銀行 ATM などの出金導線、優遇条件あり |

## 戦略上の読み解き

メルカリバンクの本質は、フリマの売上金を銀行預金へ変換する摩擦を下げること。従来の「売上金を出金する」UX は、手数料・待ち時間・外部銀行口座登録が心理的な負荷になりやすい。メルカリバンクは、売上金、メルペイ残高、銀行口座を同じアプリ導線に置くことで、売る・使う・貯めるを接続する。

この構造は、[[banking/baas-japan-landscape|Japan BaaS landscape]] の中でも強い例。メルカリは高頻度な C2C marketplace と決済残高を持ち、みんなの銀行は銀行ライセンスと API / partner branch を持つ。両者を組み合わせることで、銀行が単独で取りにくい生活接点を獲得できる。

## これに当たらないもの

- メルペイが銀行免許を取得したサービスではない。
- メルカリ支店は、みんなの銀行のパートナー支店であり、メルカリ単独の預金銀行ではない。
- メルカリ支店は、公開 FAQ 上、メルカリバンク以外の API 連携に制限があるため、汎用みんなの銀行口座と同じ UX とは限らない。

## 競争上の意味

メルカリバンクは [[banking/rakuten-bank|楽天銀行]] や [[banking/paypay-bank|PayPay 銀行]] のようなフル銀行グループ戦略とは違う。メルカリは銀行を自前で持つより、BaaS を使って金融機能をアプリ内に埋め込む道を選んでいる。

そのため比較軸は「銀行としての総合力」ではなく、次の 3 点になる。

| 軸 | 問い |
|---|---|
| Conversion | 売上金・残高をどれだけ預金化できるか |
| Stickiness | メルカリアプリの利用頻度を金融導線に転換できるか |
| License leverage | 自社ライセンスとみんなの銀行 API の境界をどこまで広げられるか |

## 関連項目

- [[banking/mercari-bank-license-stack]]
- [[banking/minna-bank-baas-model]]
- [[banking/baas-japan-landscape]]
- [[banking/quick-deposit-four-methods]]
- [[banking/paypay-bank]]
- [[banking/rakuten-bank]]
- [[JapanFG/gmo-aozora-net]]

## 出典

- みんなの銀行 / メルペイ, 2025-12-18: メルカリバンク service launch release.
- みんなの銀行: メルカリ支店 official FAQ / branch page.
- メルカリ Help: みんなの銀行口座をメルペイに連携する.
- メルカリ: 電子決済等代行業に関する表示等.
