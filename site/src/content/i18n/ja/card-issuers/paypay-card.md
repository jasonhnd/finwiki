---
source: card-issuers/paypay-card
source_hash: 5414d9f95b90c5e2
lang: ja
status: machine
fidelity: ok
title: "PayPayカード (PayPay Card)"
translated_at: 2026-06-26T03:26:36.035Z
---

# PayPayカード (PayPay Card)


## Wiki内の位置づけ

このページは [[card-issuers/INDEX|カード発行会社の索引]] に属する。周辺の制度文脈は [[payments/INDEX|決済領域の索引]] と併せて読み、資金移動業・前払式支払手段との境界は [[payments/funds-transfer-vs-prepaid-boundary|日本における資金移動と前払式支払手段の境界]] を参照する。

## 要点

PayPayカードは [[megabanks/paypay-fg|PayPay金融グループ]] のクレジットカード・PayPayクレジット運営会社。PayPay ウォレットの支払い体験に与信枠を組み込む役割を持つため、ウォレットとカード発行会社を分けて管理する必要がある。^[verified-2026-06-24]

## 1. 法人・ライセンス境界

| 項目 | 読み方 |
|---|---|
| 法人 | PayPayカード株式会社 |
| グループ | [[megabanks/paypay-fg|PayPay FG]] / SoftBank-LY 決済エコシステム |
| 主な領域 | PayPay Card、PayPay Card Gold、PayPayクレジット商品、貸金業関連の開示 |
| 規制上の確認経路 | 公式会社情報と、クレジットカード・割賦販売法管理に関する経済産業省の信用取引資料を確認する。^[verified-2026-06-24] |
| 会社ページ上の商品区分 | 公式会社ナビゲーションは PayPay Card、PayPay Card Gold、PayPay Credit を分けており、会社フッターでは貸金業登録も別に開示している。^[verified-2026-06-24] |

## 2. 事業上の役割

- PayPay のコード決済とアプリ配布基盤に、リボルビング払い・クレジットカードの経済性を加える。会社ページは、PayPay Card と PayPay Credit を PayPay アプリに隣接する与信商品として明示している。^[verified-2026-06-24]
- ポイント、アプリ内決済、カード加盟店管理の関係者、消費者信用を、一つのリテール金融導線としてつなぐ。発行会社・アクワイアラ・プロセッサの分担は [[payments/japan-card-issuer-acquirer-processor-split]] を参照する。
- カードと与信枠は [[payment-firms/paypay]] に吸収して読んではいけない。PayPay はウォレット・資金移動・前払式支払手段の運営会社であり、PayPayカードはクレジットカードと貸金業関連の開示を担う。^[verified-2026-06-24]
- PayPay を最も近い経済圏金融の比較対象である [[card-issuers/rakuten-card|楽天カード]]、au PAY、d払い、伝統的なカード発行会社と比べる際に重要である。スキーム経済性は [[payments/japan-payment-scheme-economics-matrix]] で整理する。

## 3. 単独ページにする理由

ウォレットとしての PayPay と、与信運営会社としての PayPayカードでは、ライセンス、バランスシート、利用者保護の論点が異なる。このページは、その境界を見える形に保つ。

## Related

- [[megabanks/paypay-fg]]
- [[securities-firms/paypay-securities]]
- [[payments/cashless-jp-landscape]]
- [[payments/card-acquiring-japan-stack]]

## Sources

- PayPayカード 会社ページ: https://www.paypay-card.co.jp/company/
- 経済産業省 信用取引政策ページ: https://www.meti.go.jp/policy/economy/consumer/credit/
- 経済産業省 登録クレジットカード番号等取扱契約締結事業者一覧 PDF: https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
