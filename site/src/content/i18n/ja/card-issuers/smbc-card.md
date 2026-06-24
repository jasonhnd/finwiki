---
source: card-issuers/smbc-card
source_hash: 1f9c7a3f5a80ae5e
lang: ja
status: machine
fidelity: ok
title: "三井住友カード (SMCC)"
translated_at: 2026-06-24T07:24:12.874Z
---
# 三井住友カード (SMCC)


## ウィキ上の位置づけ

この項目は [[card-issuers/INDEX|card-issuers INDEX]] の配下に位置する。ピア比較・対比の文脈では [[card-issuers/mufg-nicos|三菱UFJニコス (Mitsubishi UFJ NICOS)]]、より広い制度・規制上の境界では [[payments/INDEX|payments index]] とあわせて読む。

## 要約

三井住友カードは [[megabanks/smfg|SMFG]] のカード・信販・トランザクション事業の中核 operator。カード issuer だけでなく、加盟店向け決済、トランザクション、Olive / Vポイント周辺のキャッシュレス接点を束ねるため、[[payments/card-acquiring-japan-stack|card acquiring stack]] の代表ページとして独立させる。^[verified-2026-06-24]

## 1. 法人・ライセンス境界

| 項目 | 読み方 |
|---|---|
| 法人名 | 三井住友カード株式会社 |
| グループ | [[megabanks/smfg|SMFG]] |
| 主要レーン | クレジットカード、割賦 / 信用販売、加盟店アクワイアリング、トランザクションサービス |
| 規制上のルート | 割賦販売法 / METI 信用取引関連資料。貸金やカード番号取扱いの開示は公式ページと照合する必要がある。^[verified-2026-06-24] |
| 会社概要上の範囲 | 公式概要は、クレジットカード、デビット / プリペイド / その他決済、ローン、保証、信用販売、トランザクション、関連事業を列挙している。^[verified-2026-06-24] |

## 2. 事業上の役割

- クレジットカード発行と加盟店サービスは、SMFG の retail cashless strategy の中心にある。公式会社ページは、単なるカード発行ではなく、クレジットカード、信用販売、トランザクション事業を説明している。^[verified-2026-06-24]
- 同社は銀行口座、カード、ポイント、アプリ、加盟店受入レールをつなぐ。公式概要は [[consumer-finance/smbc-consumer-finance]]、SMBC GMO PAYMENT、V Point Marketing を関連 / 子会社に挙げており、SMCC が issuer、consumer-credit、merchant-payment、loyalty の各レイヤーをまたぐ hub であることを示す。^[verified-2026-06-24]
- このページは [[megabanks/smfg|SMFG]] 内の issuer-acquirer / transaction platform 境界として読むべきであり、一般的なクレジットカードブランドページではない。^[verified-2026-06-24]
- SMFG の銀行バランスシート事業と、決済ネットワーク / 信用販売事業を区別するためにも有用な境界ページである。

## 3. この単独ページが重要な理由

親 FG ページは operating-company boundary を隠しやすい。SMBC Card は issuer economics、merchant-acquiring risk、card-number contract management、consumer-credit regulation を比較する際に必要な事業主体である。

## 関連

- [[megabanks/smfg]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[consumer-finance/smbc-consumer-finance]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/cashless-jp-landscape]]

## 出典

- SMBC Card 会社概要: https://www.smbc-card.com/company/info/outline.jsp
- SMBC Card 会社情報: https://www.smbc-card.com/company/index.jsp
- METI 信用取引政策ページ: https://www.meti.go.jp/policy/economy/consumer/credit/
- METI クレジットカード番号等取扱契約締結事業者登録簿 PDF: https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
