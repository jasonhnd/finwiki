---
source: card-issuers/smbc-card
source_hash: 81a986045f248a24
lang: ja
status: machine
fidelity: ok
title: "三井住友カード"
translated_at: 2026-06-20T09:33:00.420Z
---

# 三井住友カード


## ウィキ上の位置づけ

この項目は [[card-issuers/INDEX|card-issuers INDEX]] の配下に置く。比較・対照の文脈は [[card-issuers/mufg-nicos|三菱UFJニコス (Mitsubishi UFJ NICOS)]] と照合し、より広い制度・規制上の境界は [[payments/INDEX|payments index]] とあわせて読む。

## 要約

三井住友カードは [[megabanks/smfg|SMFG]] のカード・信販・トランザクション事業の中核 operator。カード issuer だけでなく、加盟店向け決済、トランザクション、Olive / Vポイント周辺のキャッシュレス接点を束ねるため、[[payments/card-acquiring-japan-stack|card acquiring stack]] の代表ページとして独立させる。

## 1. 法人・ライセンス境界

| 項目 | 読み方 |
|---|---|
| 法人 | 三井住友カード株式会社 |
| グループ | [[megabanks/smfg|SMFG]] |
| 主要レーン | クレジットカード、割賦・信用販売、加盟店獲得、トランザクションサービス |
| 規制上の位置づけ | 割賦販売法と経済産業省の登録事業者一覧を確認し、貸付やカード番号取扱の開示は公式ページと照合する。 |

## 2. 事業上の役割

- クレジットカード発行と加盟店サービスは、SMFG のリテールキャッシュレス戦略の中心にある。
- 同社は銀行口座、カード、ポイント、アプリ、加盟店受入、トランザクションサービス、関連する消費者金融レーンを接続する。
- 公式会社概要は、クレジットカード、デビット / プリペイドその他決済、ローン、保証、信販、トランザクション事業を列挙しているため、SMBC Card は単なるカード発行会社ではなく、複数レーンの決済 / 消費者信用 operator として読むべきである。
- SMFG の銀行バランスシート事業と、決済ネットワーク、信用販売、加盟店アクワイアリング事業を切り分ける境界ページとしても有用である。

## 3. SMFG プラットフォームと規制境界

| レイヤー | 公開情報からの読み方 |
|---|---|
| グループ上の役割 | 会社概要は SMFG を株主として示し、SMBC Card を中核的な SMBC グループ決済表面の中に位置づけている。 |
| 事業ライン | 公式ページはカード、信販、トランザクション事業を説明しており、SMBC Card は issuer であると同時に加盟店 / トランザクションサービス operator でもある。 |
| Olive / V Point 隣接 | 公開されている SMBC グループ上の位置づけから、カード会社は銀行口座、カード、アプリ、ポイントを束ねる背後の運営レイヤーの一つである。預金とカード信用を論じる時は、銀行ページとカード会社ページを分けて扱う。 |
| 規制 | METI 登録事業者一覧と公式の貸金 / カード番号開示が、割賦販売法、カード番号取扱、消費者信用境界の公開管理点である。 |

## 4. この独立ページが重要な理由

親会社 FG のページだけでは、事業会社としての境界が見えにくい。 三井住友カードは、アナリストが比較する際に参照すべき事業会社である。対象は イシュアー収益性、加盟店獲得リスク、カード番号契約管理、消費者信用規制.

## 関連項目

- [[megabanks/smfg]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[consumer-finance/smbc-consumer-finance]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/cashless-jp-landscape]]

## 出典

- SMBC Card 会社概要: https://www.smbc-card.com/company/info/outline.jsp
- SMBC Card 会社情報: https://www.smbc-card.com/company/index.jsp
- METI 割賦販売法上の登録事業者: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
