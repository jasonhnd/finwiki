---
source: card-issuers/life-card
source_hash: 0684637058f2e0b2
lang: ja
status: machine
fidelity: ok
title: "ライフカード (Life Card)"
translated_at: 2026-06-15T03:48:21.905Z
---

# ライフカード (Life Card)

## ウィキ経路

本項目は [[card-issuers/INDEX|card-issuers INDEX]] (そのドメイン経路) の配下に位置する。独立系 issuer の peer・対照として [[card-issuers/credit-saison|クレディセゾン]] および [[card-issuers/rakuten-card|楽天カード]] と、監督・システム境界として [[financial-regulators/fsa|the FSA]] および [[payments/INDEX|payments]] と対比して読むこと。準拠する acquiring 法規は [[card-issuers/installment-sales-act-2020-amendment|割賦販売法 2020 改正]] であり、貸付の親会社は [[consumer-finance/aiful|アイフル]] に存在する。

## TL;DR

ライフカード株式会社は [[consumer-finance/aiful|アイフル (AIFUL)]] グループのカード issuer。公式会社概要はクレジットカード、プリペイドカード、銀行保証、保険などを事業内容として示しており、カード発行・割賦は割賦販売法上の **包括信用購入あっせん** として行われる。消費者金融グループが lending と card の両方を持つ構造を明示し、AIFUL を「貸付専業」と誤読させないための product-boundary ページ。

## 1. ライセンス・グループ境界

| 項目 | 備考 |
|---|---|
| 法人 | ライフカード株式会社 / Life Card Co., Ltd. |
| グループ | [[consumer-finance/aiful|アイフル (AIFUL) group]] のカード事業会社 |
| カード／信用レーン | 割賦販売法上の包括信用購入あっせん（カード割賦・分割払い／リボ） |
| プリペイドレーン | プリペイドカード（資金決済法上の前払式支払手段の枠組み） |
| キャッシングレーン | カードのキャッシング枠は貸金業法の枠組み；グループの貸付本体は [[consumer-finance/aiful|アイフル]] |
| 監督 | 金融庁（貸金・前払式）＋ 経済産業省（割賦販売法）、自主規制は [[card-issuers/installment-sales-act-2020-amendment|日本クレジット協会]] |

## 2. オペレーティングモデル

ライフカードは AIFUL に、無担保貸付に加えてカード・プリペイドの payment surface を与える。割賦の中身は一括・分割払い (分割払い)・リボ (リボルビング)、加えて銀行保証・保険代理といった consumer-credit と payments の交差点に位置する事業を持つ。前払式（プリペイド）は割賦のカード発行とは別ライセンス系統（資金決済法）であり、貸付本体（貸金業法）とも切り分けて読む必要がある。[[consumer-finance/acom|アコム]] や bank-affiliated card issuer に対する good comparator になる。

## 3. このページが重要な理由

- consumer-finance グループはしばしば lending と card の両方を子会社で持つ。ライフカードがその product boundary を可視化し、[[consumer-finance/aiful|アイフル]] が loan-only ではないことを示す。
- 割賦（割賦販売法）・プリペイド（資金決済法）・貸付（貸金業法）という三系統のライセンスが一社／一グループ内で並ぶ構造の anchor を提供する。
- 独立系 issuer の peer（[[card-issuers/credit-saison|クレディセゾン]] 等）と並べて読む入口になる。

## 関連

- [[consumer-finance/aiful|アイフル]]
- [[consumer-finance/acom|アコム]]
- [[card-issuers/credit-saison|クレディセゾン]]
- [[card-issuers/installment-sales-act-2020-amendment|割賦販売法 2020 改正]]
- [[card-issuers/INDEX|card-issuers INDEX]]
- [[INDEX|FinWiki index]]

## 出典

- Life Card company outline.
- METI: registered operators under the Installment Sales Act (包括信用購入あっせん).
- 日本クレジット協会 (Japan Consumer Credit Association): industry self-regulation reference.

> [!info] 校核状態
> confidence: likely。ライフカードが AIFUL グループのカード会社で、カード・プリペイド・保証・保険を事業に掲げ、カード事業が割賦販売法の枠組みで行われることは公開会社概要に基づく。各事業の登録番号・規模は変わり得るため shape として読む。
