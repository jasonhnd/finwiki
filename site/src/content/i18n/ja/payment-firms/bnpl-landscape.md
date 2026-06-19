---
source: payment-firms/bnpl-landscape
source_hash: 99b6c4d9ee1c40e2
lang: ja
status: machine
fidelity: ok
title: "日本の BNPL ランドスケープ"
translated_at: 2026-06-19T06:09:18.093Z
---

# 日本の BNPL ランドスケープ

## Wiki route

この項目は [[payment-firms/INDEX|payment-firms INDEX]] の下に位置する。同業 / 対比の文脈については [[card-issuers/rakuten-card|楽天カード (Rakuten Card)]] と、より広いシステム / 規制境界については [[payments/INDEX|payments index]] と対比して読むこと。

## TL;DR

日本の BNPL /「あと払い」市場は、**加盟店チェックアウトと消費者信用の境界問題** として理解するのが最善である。PayPal が国内の日本決済における関連性を拡大するために買収したことから [[payment-firms/paidy|Paidy]] がアンカーケースとなるが、BNPL はクレジットカード、割賦販売、コンビニ決済、ウォレット残高、ロイヤルティ主導のチェックアウトとも重なり合う。

JapanFG にとって、コントロールの問いは次のとおりである：**その商品は単なる支払い後ろ倒しなのか、それとも割賦信用 / 信用購入あっせん / 貸金 / カード的な信用なのか？**

## マーケットマップ

| 層 | 日本の例 | なぜ重要か |
|---|---|---|
| 専用 BNPL | [[payment-firms/paidy|Paidy]] | 日本を代表する BNPL プラットフォーム；PayPal の所有がグローバル決済の橋渡しにする |
| カード割賦 / リボ | [[card-issuers/jcb|JCB]]、[[card-issuers/orico|Orico]]、[[card-issuers/jaccs|JACCS]]、[[card-issuers/credit-saison|Credit Saison]] | 既存の日本のクレジットはすでに割賦とリボの仕組みを持つ |
| コード決済の信用 | PayPay、楽天、Merpay、d払い のバリエーション | アプリウォレットは既存の決済頻度の周りに後払いまたは信用商品を追加できる |
| 加盟店チェックアウト | [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]、PSP、EC プラットフォーム | BNPL は加盟店の受容と決済の統合を必要とする |
| コンビニ返済 | Paidy 型のコンビニ払い行動 | オンライン購入からオフライン現金返済への日本特有の橋渡し |

## 法的 / 商品の境界

| 商品設計 | 法的な問い |
|---|---|
| 翌月に一括請求で支払う | これは支払い後ろ倒しか、信用購入あっせんか、または別の規制された信用サービスか？ |
| 3 / 6 / 12 回の支払いに分割する | 割賦販売または貸金的な分析を引き起こすか？ |
| 加盟店が BNPL 事業者に支払う | 加盟店手数料モデルはカードアクワイアリングに似るが、消費者信用ルールも依然重要 |
| アプリウォレットが後払いを提供 | ウォレット残高、資金移動、前払式、信用、加盟店決済を分離する必要がある |
| バーチャルカード / カード的な利用 | カードネットワーク、割賦販売、イシュア / アクワイアラ、カード番号の取扱いの問題が現れうる |
| 延滞 / 回収 | 消費者保護、信用情報、苦情、債権回収のコントロールが重要になる |

## Paidy アンカー

Paidy が重要なのは、BNPL を日本向けにローカライズしたからである：

- 伝統的なカード登録ではなくスマートフォン優先のチェックアウト；
- 統合された月次請求；
- 設定に応じてコンビニ、銀行振込、または口座引落を通じた返済；
- チェックアウトのコンバージョン周りの加盟店側の価値提案；
- グローバルな販売・ガバナンス層としての PayPal の所有。

## なぜ日本では BNPL が異なるのか

日本は、グローバルな BNPL が普及する前から、成熟したクレジットカードの割賦 / リボシステムと強いコンビニ決済文化をすでに持っていた。つまり BNPL は、カードだけでなく以下とも競合する：

- 代金引換のレガシー行動；
- コンビニの払込票と現金返済；
- 若年層またはカード保有の少ないユーザー；
- チェックアウトの摩擦を減らしたい加盟店；
- ポイントで信用を補助できるアプリエコシステム。

## JapanFG 関連性

| JapanFG 事業体 | 関連性 |
|---|---|
| [[payment-firms/paidy|Paidy]] | 専用 BNPL アンカーおよび PayPal Japan 拡大のケース |
| [[card-issuers/jcb|JCB]] | 既存のカード / 割賦ネットワークとイシュアの経済性 |
| [[card-issuers/orico|Orico]] / [[card-issuers/jaccs|JACCS]] | 信用購入 / 割賦販売の既存事業者 |
| [[card-issuers/credit-saison|Credit Saison]] | 加盟店および消費者信用のリンクを持つカード / 金融の既存事業者 |
| [[megabanks/paypay-fg|PayPay FG]] / [[payment-firms/rakuten-fg|Rakuten FG]] | 信用商品を追加できるアプリベースの決済 / ポイントエコシステム |
| [[payments/cashless-jp-landscape|Cashless JP landscape]] | BNPL はより広いキャッシュレス・チェックアウトのスタック内の一つの層である |

## Related

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

## Sources

- Paidy 公式会社概要。
- Paidy 買収に関する PayPal インベスターリリース、2021。
- Paidy 買収に関する PayPal Japan ニュースルームリリース、2021。
