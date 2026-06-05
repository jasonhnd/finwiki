---
source: payment-firms/bnpl-landscape
source_hash: 72f658c26d821a6e
lang: ja
status: machine
fidelity: ok
title: "日本の BNPL 市場構造"
translated_at: 2026-06-02T14:01:20.926Z
---
# 日本の BNPL 市場構造

## ウィキ上の位置づけ

この項目は [[payment-firms/INDEX|payment-firms INDEX]] に属する。ピア / 対比の文脈では [[card-issuers/rakuten-card|楽天カード (Rakuten Card)]] を、より広いシステム / 規制境界では [[payments/INDEX|payments index]] を参照する。

## 要約

日本の BNPL / 「あと払い」市場は、**加盟店チェックアウトと消費者信用の境界問題**として理解するのが最もよい。[[payment-firms/paidy|Paidy]] はアンカー事例である。PayPal が同社を買収したのは、日本国内決済での関連性を高めるためだった。ただし BNPL は、クレジットカード、分割販売、コンビニ決済、ウォレット残高、ポイント主導のチェックアウトとも重なり合う。

JapanFG での統制上の問いは、**その商品が単なる後払い決済なのか、それとも分割信用、信用購入あっせん、貸金、カード類似の信用なのか**である。

## 市場マップ

| レイヤー | 日本での例 | 重要な理由 |
|---|---|---|
| 専業 BNPL | [[payment-firms/paidy|Paidy]] | 日本を代表する BNPL プラットフォームであり、PayPal 傘下にあるためグローバル決済との橋渡しになる。 |
| カード分割 / リボ | [[card-issuers/jcb|JCB]]、[[card-issuers/orico|Orico]]、[[card-issuers/jaccs|JACCS]]、[[card-issuers/credit-saison|Credit Saison]] | 既存の日本のクレジットには、すでに分割とリボの仕組みがある。 |
| コード決済系クレジット | PayPay、Rakuten、Merpay、d払い派生サービス | アプリウォレットは、既存の決済頻度の周辺に後払いや信用商品を追加できる。 |
| 加盟店チェックアウト | [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]、PSP、EC プラットフォーム | BNPL には加盟店での受入れと決済連携が必要である。 |
| コンビニ返済 | Paidy 型のコンビニ支払い行動 | オンライン購入からオフライン現金返済へつなぐ、日本固有の橋渡しである。 |

## 法務 / 商品境界

| 商品設計 | 法的論点 |
|---|---|
| 翌月一括請求で支払う | 後払いなのか、信用購入あっせんなのか、別の規制対象信用サービスなのか。 |
| 3  / 6  / 12 回に分けて支払う | 割賦販売または貸金に近い分析を誘発するか。 |
| 加盟店が BNPL 事業者に手数料を支払う | 加盟店手数料モデルはカード acquiring に似るが、消費者信用ルールもなお重要である。 |
| アプリウォレットが後払いを提供する | ウォレット残高、資金移動、前払式支払手段、信用、加盟店決済を切り分ける必要がある。 |
| バーチャルカード / カード類似利用 | カードネットワーク、割賦販売、発行体 / acquirer、カード番号取扱いの論点が現れる場合がある。 |
| 延滞 / 回収 | 消費者保護、信用情報、苦情対応、債権回収管理が重要になる。 |

## Paidy の位置づけ

Paidy が重要なのは、BNPL を日本向けにローカライズしたためである。

- 従来型カード登録ではなく、スマートフォン起点のチェックアウトを採用した。
- 月次でまとめて請求する方式を提供した。
- 設定に応じて、コンビニ、銀行振込、口座振替で返済できる。
- 加盟店側にはチェックアウト転換率を高める価値提案がある。
- PayPal 傘下であることが、グローバルな販売網とガバナンス層になる。

## 日本で BNPL が異なる理由

日本では、グローバル BNPL が普及する前から、成熟したクレジットカードの分割 / リボ制度と、強いコンビニ決済文化が存在していた。そのため BNPL はカードだけでなく、次とも競合する。

- 代金引換のレガシー行動。
- コンビニ払込票と現金返済。
- 若年層またはカード利用が薄いユーザー。
- チェックアウト摩擦を減らしたい加盟店。
- ポイントで信用供与を補助できるアプリ経済圏。

## JapanFG での意味

| JapanFG エンティティ | 関連性 |
|---|---|
| [[payment-firms/paidy|Paidy]] | 専業 BNPL のアンカーであり、PayPal の日本拡張事例である。 |
| [[card-issuers/jcb|JCB]] | 既存カード / 分割ネットワークと 発行体経済性。 |
| [[card-issuers/orico|Orico]] / [[card-issuers/jaccs|JACCS]] | 信用購入 / 割賦販売の既存事業者。 |
| [[card-issuers/credit-saison|Credit Saison]] | 加盟店および消費者信用との接点を持つカード / 金融の既存事業者。 |
| [[megabanks/paypay-fg|PayPay FG]] / [[payment-firms/rakuten-fg|Rakuten FG]] | 信用商品を追加し得るアプリ型決済 / ポイント経済圏。 |
| [[payments/cashless-jp-landscape|Cashless JP landscape]] | BNPL は、より広いキャッシュレス・チェックアウト・スタックの一層である。 |

## 関連項目

- [[payment-firms/paidy|Paidy]]
- [[card-issuers/installment-sales-act-2020-amendment|Installment Sales Act 2020 amendment]]
- [[payments/cashless-jp-landscape|Japan cashless payment landscape]]
- [[card-issuers/jcb|JCB]]
- [[card-issuers/orico|Orico]]
- [[card-issuers/jaccs|JACCS]]
- [[card-issuers/credit-saison|Credit Saison]]
- [[megabanks/paypay-fg|PayPay FG]]
- [[financial-licenses/INDEX|JapanFG legal / financial licenses]]
- [[INDEX|FinWiki index]]

## 出典

- Paidy 公式会社プロフィール。
- PayPal 投資家向け Paidy 買収リリース, 2021。
- PayPal Japan ニュースルームの Paidy 買収リリース, 2021。
