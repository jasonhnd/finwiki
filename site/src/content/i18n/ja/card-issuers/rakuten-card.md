---
source: card-issuers/rakuten-card
source_hash: a78d22131119c5bf
lang: ja
status: machine
fidelity: ok
title: "楽天カード (Rakuten Card)"
translated_at: 2026-06-15T03:48:21.825Z
---

# 楽天カード (Rakuten Card)


## ウィキ経路

本項目は [[card-issuers/INDEX|card-issuers INDEX]] の下に位置する。隣接する文脈として [[payments/INDEX|payments index]] と、より広いシステム境界として [[payments/funds-transfer-vs-prepaid-boundary|Funds transfer vs prepaid boundary in Japan]] と併せて読むこと。

## 要約

楽天カードは [[payment-firms/rakuten-fg|楽天グループ金融]] のカード issuer / payment touchpoint。楽天市場、楽天ポイント、楽天ペイ、楽天銀行、楽天証券との接続で、カード単体よりも ecosystem finance の中核として読む必要がある。

## 1. 法人・ライセンス境界

| 項目 | 読み方 |
|---|---|
| 法人 | 楽天カード株式会社 |
| グループ | [[payment-firms/rakuten-fg|Rakuten financial ecosystem]] |
| 主要レーン | クレジットカード発行、カードローン、銀行代理業 / 決済アプリ隣接 |
| 規制経路 | METI 割賦販売法 登録事業者一覧; 公式会社概要および貸金 / 銀行代理業の届出。 |

## 2. 事業上の役割

- 楽天の commerce・ポイント活動をカード利用と継続的な口座関係へ転換する。
- 楽天 ecosystem 全体にまたがる主要なデータ・リワードのインターフェースとして機能する; scheme economics は [[payments/japan-payment-scheme-economics-matrix]] にある。
- 楽天の消費者金融サーフェスにおける信用リスク・不正対策・ポイント負債分析の起点となる — issuer / acquirer / processor の分担は [[payments/japan-card-issuer-acquirer-processor-split]] を参照。
- [[card-issuers/paypay-card|PayPayカード]] の直接的な ecosystem-finance カウンターパートとして読める: いずれも預金ベースではなく commerce / wallet ベースに与信枠を載せている。

## 3. この独立ページの意義

楽天カードを汎用的な「楽天 finance」ページに統合すべきではない。これは、より広いグループ金融ループを計測可能にする消費者向けクレジット商品である。

## 関連

- [[payment-firms/rakuten-fg]]
- [[payments/cashless-jp-landscape]]
- [[loyalty/japan-points-landscape]]
- [[payments/card-acquiring-japan-stack]]

## 出典

- Rakuten Card corporate top: https://www.rakuten-card.co.jp/corporate/
- Rakuten Card company overview: https://www.rakuten-card.co.jp/corporate/info/about/
- METI registered operators under the Installment Sales Act: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
