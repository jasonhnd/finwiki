---
source: payments/japan-bank-api-payment-agency-route
source_hash: fcdb8e57b056a50b
lang: ja
status: machine
fidelity: ok
title: "日本の銀行 API と電子決済等代行業ルート"
translated_at: 2026-06-02T16:33:58.490Z
---
# 日本の銀行 API と電子決済等代行業ルート

## 概要

日本の銀行 API / 電子決済等代行業ルートは、口座情報を取得したり、口座連動の指図を開始したり、顧客向けサービスを預金口座レールに接続したりする fintech アプリと銀行の間にある、法的・実務上の橋渡しである。銀行、資金移動業者、前払式支払手段発行者、カード加盟店契約会社、ウォレット運営者であることとは同じではない。

このページは [[payments/INDEX|payments domain]]、[[financial-licenses/INDEX|JapanFG legal / financial licenses]]、[[payments/account-to-account-payment-japan|Japan account-to-account payment route]]、[[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]]、[[banking/baas-japan-landscape|BaaS Japan landscape]]、[[banking/mercari-bank-license-stack|Mercari Bank license stack]] とあわせて使う。

## ルートマップ

| 役割 | 何をするか | 何ではないか |
|---|---|---|
| 銀行 | 預金を受け入れ、口座を維持し、銀行口座台帳上の資金移動を実行する。 | 単なるアプリのフロントエンドではない。 |
| 電子決済等代行業者 | 登録された電子決済等代行業ルートに基づき、口座情報 / 支払指図関連サービスのために銀行へ接続する。 | 自動的に資金移動業者や前払式支払手段発行者になるわけではない。 |
| 資金移動業者 | 資金決済法ルートに基づいて資金を移動する。 | 関連する銀行契約・法的ルートなしに銀行 API へアクセスできるわけではない。 |
| 前払式支払手段発行者 | ストアドバリュー型の手段を発行する。 | それ自体は口座情報取得サービスや支払指図サービスではない。 |
| BaaS / 組込金融アプリ | 提携銀行または免許・登録スタックを通じて銀行のような UX を提供する。 | 必ずしも免許を持つ銀行や電子決済等代行業者ではない。 |
| PSP / 加盟店ゲートウェイ | 加盟店の決済受入・精算サービスを提供する。 | 必ずしも口座情報 / 銀行 API の主体ではない。 |

## 出典スタック

| 出典 | 何を証明するか |
|---|---|
| FSA 免許・登録ポータル | 電子決済等代行業者および関連する免許・登録金融機関の公式入口。 |
| FSA 電子決済等代行業者一覧 | 調査対象の事業者名が電子決済等代行業者登録に掲載されているか。 |
| FSA 認定電子決済等代行事業者協会一覧 | 当該カテゴリに自主規制・協会ルートが存在するか。 |
| 全銀協 Open API モデル契約書 | 銀行 / 電子決済等代行業者間の実務契約論点と API 利用パターン。 |
| FAPI 関連団体リンク | 規制・技術標準議論への業界ナビゲーション面。 |

個別企業について結論を出す場合は、正確な法人名、登録番号、基準日、サービス範囲、銀行 API 契約開示を確認する。マーケティングページだけから登録を推定してはならない。

## プロダクト境界

| プロダクト / フロー | 最初の確認事項 | 典型的な wiki ルート |
|---|---|---|
| 口座集約 / PFM | アプリが利用者同意に基づいて銀行口座情報を取得しているか。 | 電子決済等代行業ルート + 銀行 API / 契約開示。 |
| 銀行口座からの支払開始 | 誰が利用者の指図を受け、誰が銀行口座の移動を実行するか。 | 電子決済等代行業ルート、[[payments/account-to-account-payment-japan|A2A payment route]]、銀行ページ。 |
| 銀行口座からのウォレットチャージ | 口座引落後にウォレット残高へ価値が移動するか。 | [[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]]。 |
| 加盟店 QR 口座直接決済 | 加盟店決済が Bank Pay / 口座直接型か、ウォレット残高型か。 | [[payments/merchant-bank-pay-account-direct-acquiring|merchant account-direct acquiring]]。 |
| 組込銀行口座 UX | 銀行口座をアプリ会社が持つのか、提携銀行が持つのか。 | [[banking/baas-japan-landscape|BaaS Japan landscape]]。 |
| ステーブルコイン / EPI 取扱い | その手段が電子決済手段か暗号資産か。 | [[fintech/japan-ecisb-license|ECISB]] と [[fintech/japan-stablecoin-regulatory-landscape|stablecoin regulation]]。 |

## JapanFG での関連性

- [[megabanks/mufg-bank|MUFG Bank]]、[[megabanks/sumitomo-mitsui-banking-corp|SMBC]]、[[megabanks/mizuho-bank|Mizuho Bank]]、[[megabanks/resona-bank|Resona Bank]] は、fintech の口座連携が銀行 API / 契約受入に依存するため重要である。
- [[payment-firms/sb-payment-service|SB Payment Service]]、[[payment-firms/money-forward|Money Forward]]、[[payment-firms/freee|freee]] は、口座情報、会計、支払、API ルートが戦略的に重要になり得る事業体の例である。
- [[payment-firms/merpay|Merpay]]、[[payment-firms/paypay|PayPay]]、[[payment-firms/au-payment|au PAY]] は、単一の「決済アプリ」カテゴリとしてではなく、ウォレット / 資金移動 / 前払 / 口座直接 / 銀行 API レイヤーに分けて読む必要がある。
- [[banking/mercari-bank-license-stack|Mercari Bank license stack]] は、銀行パートナー、アプリ UX、決済口座を分離できることを示す最も明確な内部ルートである。

## 統制上の確認事項

| 質問 | 公開情報上の意味 |
|---|---|
| 事業者は電子決済等代行業者として登録されているか。 | 登録はカテゴリ固有であり、FSA 一覧で確認する必要がある。 |
| どの銀行 API を使っているか。 | 銀行 API 契約とスコープは銀行・サービスごとに異なる。 |
| サービスは参照専用か、指図可能か。 | 情報取得と支払 / 振込指図ではリスク面が異なる。 |
| 誰が利用者認証を担うか。 | 銀行認証、アプリ認証、同意管理は分離され得る。 |
| 不正取引リスクを誰が負担するか。 | 利用者保護、銀行責任、アプリ責任、不正対応は法的・契約上のルートに依存する。 |
| 価値がアプリ側に滞留するか。 | 該当する場合、資金移動 / 前払 / ウォレット分類が必要になり得る。 |
| 加盟店が関与するか。 | 加盟店受入は PSP / アクワイアリング / 精算リスクを追加する。 |

## リスクと留意点

- 登録は、すべての API 機能や支払機能が稼働していることを証明しない。
- 銀行連動 UX は、アプリが単にデータを読んでいるのか、指図を開始しているのか、資金を移動しているのか、ウォレット残高を保持しているのかを隠すことがある。
- スクリーンスクレイピング、トークン化 API アクセス、契約ベースの API 利用は相互に置換できない。
- 顧客同意と認証は、単なるオンボーディング画面ではなく運用統制である。
- 銀行 API 障害は、下流の決済、会計、給与、照合の障害になり得る。
- 電子決済等代行業ルートは、電子決済手段 / ステーブルコインのルートとは別である。

## 調査チェックリスト

1. 法人名、サービス名、銀行パートナーを特定する。
2. FSA 電子決済等代行業者登録を確認する。
3. サービスが情報取得のみか、指図可能か、その両方かを確認する。
4. 価値が保管、送金、前払化されるのか、単に指図されるだけなのかを確認する。
5. 公開 API / 銀行パートナー開示と利用者保護告知を確認する。
6. 会社ページを [[financial-licenses/INDEX|legal / financial licenses]] および関連する決済・銀行ルートにリンクする。

## 関連項目

- [[payments/INDEX]]
- [[payments/account-to-account-payment-japan]]
- [[payments/merchant-bank-pay-account-direct-acquiring]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/funds-transfer-service-providers-japan-index]]
- [[banking/baas-japan-landscape]]
- [[banking/mercari-bank-license-stack]]
- [[financial-licenses/INDEX]]
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[payment-firms/money-forward]]
- [[payment-firms/freee]]
- [[INDEX|FinWiki index]]

## 出典

- FSA: 免許・登録金融機関ポータル。
- FSA: 電子決済等代行業者登録。
- FSA: 認定電子決済等代行事業者協会一覧。
- 全国銀行協会: API モデル契約書。
- FAPI association: 公式リンク集。
