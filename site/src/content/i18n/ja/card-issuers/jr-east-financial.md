---
source: card-issuers/jr-east-financial
source_hash: 5ad8251e7f800078
lang: ja
status: machine
fidelity: ok
title: "JR東日本のカード・銀行代理サービス"
translated_at: 2026-07-29T07:29:14.000Z
---

# JR東日本のカード・銀行代理サービス

## Wiki route

This entry sits under [[card-issuers/INDEX|card-issuers INDEX]] to distinguish the legal entity 株式会社ビューカード from the JRE BANK service. Read [[card-issuers/aeon-bank|イオン銀行 / AFS]] as a retail-finance contrast: JRE BANK uses a bank-agency model rather than a group-owned bank. This page does not assert a separate “JR-East Financial” company or a payment subsidiary.

## TL;DR

株式会社ビューカードは JR 東日本の 100% 子会社で、クレジットカード業等を行う。JRE BANK は独立した子会社ではなく、ビューカードが楽天銀行を所属銀行とする銀行代理業者として契約締結を媒介するサービスで、2024-05-09 に開始された。^[verified-2026-07-29]

### 1.1 株式会社ビューカード（View Card）

| Item | 内容 |
|---|---|
| 正式名 | 株式会社ビューカード ^[extracted] |
| 英名 | Viewcard Co., Ltd. |
| 親会社 | 東日本旅客鉄道株式会社（連結子会社）|
| 主要事業 | クレジットカード発行（VIEW カード）・Suica 一体型カード・加盟店業務 |
| 主力カード | **ビュー・スイカカード**（Suica 一体型）・ビックカメラ Suica カード・JRE CARD・「ルミネカード」 |
| 国際ブランド | VISA / Mastercard / JCB |

Sources: [ビューカード会社概要](https://www.viewcard.co.jp/company.html).

### 1.2 JRE BANK（2024-05 開業）

| Item | 内容 |
|---|---|
| サービス名 | JRE BANK |
| 開業 | **2024-05-09** ^[extracted] |
| 所属銀行 / 銀行代理業者 | **[[banking/rakuten-bank|楽天銀行]]** / 株式会社ビューカード |
| 特典 | 預金残高・取引に応じた **JRE POINT 付与 + JR 東日本長距離切符の運賃割引** |

Sources: [JR東日本のJRE BANK開始リリース](https://www.jreast.co.jp/press/2024/20240409_ho02.pdf), which identifies 楽天銀行 as the affiliated bank and ビューカード as the bank agency operator.

## 2. 業務ライン（金融機能マップ）

| 機能 | 担い手 | 内容 |
|---|---|---|
| クレジットカード発行 | **ビューカード** | ビュー・スイカカード（Suica 一体型）を中核、ルミネカード・ビックカメラ Suica カード・JRE CARD 等の提携 |
| 交通 IC / 電子マネー | JR 東日本 / [[payments/suica-prepaid-jr-east|Suica]] | 公式 Suica サービスとして確認し、このページでは加盟店数を固定しない |
| 銀行代理サービス | **JRE BANK** | ビューカードが契約締結を媒介し、所属銀行は [[banking/rakuten-bank|楽天銀行]] |
Sources: [JR東日本のSuica案内](https://www.jreast.co.jp/suica/), [ビューカード会社概要](https://www.viewcard.co.jp/company.html), and [JRE BANK開始リリース](https://www.jreast.co.jp/press/2024/20240409_ho02.pdf). This table maps documented roles; JRE BANK is not a subsidiary.

## 3. 法人境界

- **株式会社ビューカード**：JR 東日本の 100% 子会社。会社概要はクレジットカード業、銀行代理業、前払式支払手段の発行業等を事業内容として列挙する。
- **JRE BANK**：会社ではなくサービス名。ビューカードが銀行代理業者、楽天銀行が所属銀行である。
- **Suica**：JR 東日本の公式サービスとして別に確認する。このページでは、資金移動業、独立子会社又は未確認の QR 決済サービスとは位置付けない。

## 6. 規制・監督

| 項目 | 内容 |
|---|---|
| ビューカード | 会社概要はクレジットカード業、金融業、銀行代理業、前払式支払手段の発行業等を事業内容として列挙 |
| JRE BANK | ビューカードが楽天銀行を所属銀行とする銀行代理業者として契約締結を媒介 |
| Suica | 前払式支払手段と資金移動業を同一視せず、サービスごとの公式表示と現行登録で確認 |

Sources: [ビューカード会社概要](https://www.viewcard.co.jp/company.html), [JRE BANK開始リリース](https://www.jreast.co.jp/press/2024/20240409_ho02.pdf), and [JR東日本のSuica案内](https://www.jreast.co.jp/suica/). Statutory treatment depends on the legal entity and service, not the group label alone.

## Related

- JR 東日本（親会社、東証 PRIME 9020）
- [[banking/rakuten-bank]] — JRE BANK の BaaS パートナー
- [[JapanFG/tokyu-card]] — 私鉄系金融子会社ピア
- [[JapanFG/odakyu-cards]] — 私鉄系金融子会社ピア
- [[regional-banks/seven-bank]] — 流通系銀行ピア（自前銀行型）
- [[card-issuers/aeon-bank]] — 流通系銀行ピア（自前銀行型）
- [[payments/suica-prepaid-jr-east]] — Suica エコシステム
- [[payments/suica-pasmo-fares]] — 交通系 IC 運賃エコシステム
- [[banking/baas-rakuten-jre-bank]] — BaaS アーキテクチャ
- [[card-issuers/INDEX]] — JapanFG namespace index

## Sources

- JR 東日本公式: 会社概要（aboutus/profile/）
- JR 東日本 JRE BANK開始リリース: https://www.jreast.co.jp/press/2024/20240409_ho02.pdf
- JR 東日本 Suica: https://www.jreast.co.jp/suica/
- ビューカード会社概要: https://www.viewcard.co.jp/company.html

---

> [!info] 校核状态
> confidence: **likely**（2026-07-29 再検証）。JRE BANK の開始日、ビューカードの銀行代理業者としての役割、楽天銀行の所属銀行としての役割は JR 東日本の公式リリースで確認。JR 東日本ペイメントサービス及び Suica Pay という entity / service は主張しない。
