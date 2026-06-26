---
source: payments/suica-prepaid-jr-east
source_hash: 4f9dc7bb8b1dba9b
lang: ja
status: machine
fidelity: ok
title: "Suica：JR 東日本の交通系および汎用 IC プリペイド"
translated_at: 2026-06-19T06:09:18.122Z
---

# Suica：JR 東日本の交通系および汎用 IC プリペイド

## ウィキ上の位置づけ

この項目は [[payments/INDEX|payments index]] の下に、JR 東日本を起点とするプリペイド発行者ページとして位置し、FSA レジストリの観点では [[payments/prepaid-payment-instrument-issuers-japan-index|前払式支払手段発行会社 registry]] と、発行者横断のスキームの観点（10 IC 相互利用、サイバネ決済）では [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-前払式電子マネー economics]] とペアをなす。[[payments/pasmo-prepaid-tokyo-metro|PASMO]]（東京メトロ／私鉄コンソーシアムのカウンターパート）、[[payments/waon-prepaid-aeon|WAON]]／[[payments/nanaco-prepaid-seven-i|nanaco]]（小売を起点とする FeliCa ピア）、[[payments/edy-rakuten-prepaid|Rakuten Edy]]（プラットフォーム非依存の FeliCa）と比較すること。コーポレート／グループのアンカーは [[card-issuers/jr-east-financial|JR East financial services / Viewカード]]；技術的バックボーンはソニー／FeliCa Networks 経由の FeliCa；モバイル・レール拡張は Apple Pay／おサイフケータイの下で [[payments/japan-card-security-authentication-controls|tokenization controls]] にリンクする。

## TL;DR

**Suica**（Super Urban Intelligent Card）は、**東日本旅客鉄道株式会社（JR East / 東日本旅客鉄道株式会社）**が 2001-11-18 のローンチ以来発行する、**日本を代表する交通系および汎用 IC プリペイド電子マネー**。Suica は日本において**カード保有者数および取引件数で最大の交通系プリペイド発行者**であり、PASMO／ICOCA／Kitaca／TOICA／manaca／nimoca／SUGOCA／HAYAKAKEN／PiTaPa（最後のものはポストペイの例外）とともに [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|10 IC mutual-use scheme]] を支える。Suica は [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act 前払式 framework]] の下で**第三者型前払式支払手段**として登録され、コンビニエンスストア、自動販売機、タクシー、小売チェーン、および FeliCa 対応の任意の POS で加盟店横断のアクセプタンスを持つ。**モバイル Suica** は 2006 （携帯電話統合）にローンチし、Apple Pay 対応は 2016-10  に到来 — Suica を物理カード専用からスマートフォン・ネイティブへと転換させ、日本のインバウンド観光客のキャッシュレス・ストーリーを支えてきた海外発行の iPhone 統合を可能にした。

## 発行会社 and operational structure

| 項目 | 読み方 |
|---|---|
| ブランド・オーナー | 東日本旅客鉄道株式会社（JR East / 東日本旅客鉄道株式会社） |
| FSA プリペイド発行者 | 第三者型プリペイド発行者としての JR 東日本 |
| グループ関連カード | ビューカード（Viewカード）— Suica オートチャージ付きの JR 東日本コブランド・クレジットカード |
| ローンチ年 | 2001-11-18（物理カード）、2006 （モバイル Suica）、2016-10 （Apple Pay） |
| 技術 | FeliCa 非接触 IC（ソニー／FeliCa Networks） |
| モバイル・レール | モバイル Suica（おサイフケータイ → Apple Pay／Google Pay／Wear OS 対応） |
| チャージ上限 | ¥20,000 （標準的な Suica カード）；ビューカード・オートチャージ経由のモバイル Suica は拡張可能 |
| 発行者間決済 | 10 IC 発行者にまたがるサイバネ・システム |

## Legal basis: 前払式支払手段

Suica は [[payments/funds-transfer-vs-prepaid-boundary|資金決済法]] 第 3  章の下で**第三者型前払式支払手段**として登録されている。これは、**JR 東日本自身のサービスを超えた第三者加盟店**（コンビニ、自販機、小売）で受け入れられるためである。**他の鉄道事業者のネットワーク**上での相互利用スキームのタップ・アクセプタンスは、[[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-前払式 economics]] に文書化された発行者間契約によって規律される。主要な規制上の帰結：

- 発行者としての JR 東日本は、第三者型プリペイド発行について [[payments/prepaid-payment-instrument-issuers-japan-index|FSA `daisan.xlsx`]] に掲載される。
- 半期ごとの**未使用残高の供託**義務：未使用残高の半分を法務局に供託（供託）— Suica の導入ベースの規模を踏まえると相当な額となる。
- **発行停止時を除き原資払戻人への払戻不可** — ただし JR 東日本は物理カードの返却時に手数料を取って Suica 残高を払い戻しており、これは PSA が義務付けるものではなくサービスとしての払戻として構成されている。
- **ブレッキッジ**（観光客が購入した Suica カードで返却されず、残高が保持されるもの）は、P&L への重要な寄与要因であり、長年にわたる精査の対象である。

## The 10 IC mutual-use scheme

Suica は 2013-03-23 にローンチした**10 IC 相互利用スキーム**のアンカーであり、これにより Suica カード保有者は全国の参加鉄道／バス・ネットワークのいずれにもタップして乗車し、参加するいずれの小売加盟店でも支払うことができる。完全なスキーム横断マップは [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-前払式 economics]] にある：

| Card | 発行会社 | Region |
|---|---|---|
| **Suica** | JR 東日本 | 首都圏／北日本 |
| PASMO | PASMO 株式会社 | 首都圏の私鉄／バス |
| ICOCA | JR 西日本 | 関西／西日本 |
| Kitaca | JR 北海道 | 北海道 |
| TOICA | JR 東海 | 東海／名古屋 |
| manaca | 名鉄 + 名古屋市 | 名古屋／中部 |
| nimoca | 西鉄 | 福岡／九州 |
| SUGOCA | JR 九州 | 九州 |
| HAYAKAKEN | 福岡市地下鉄 | 福岡市 |
| PiTaPa | スルッと KANSAI（ポストペイ） | 関西（ICOCA と重複） |

発行者間決済は**サイバネ**（中央センター — JR 東日本 + JR グループ + 私鉄コンソーシアムが運営する中央決済）を通じて行われ、発行者横断でタップ取引をクリアリングする。

## Mobile Suica generations

| Generation | 年 | Key features |
|---|---|---|
| 物理 Suica のみ | 2001-2006 | カードベース；JR の券売機／定期券窓口でチャージ |
| モバイル Suica（おサイフケータイ） | 2006 | フィーチャーフォンからスマートフォンへのおサイフケータイ統合；FeliCa 搭載 Android デバイス |
| Apple Pay Suica | 2016-10 | iPhone 7  以降；主要な海外 iPhone 統合；SIM 地域非依存によりインバウンド観光客の利用を可能に |
| Google Pay／Wear OS | 2018  以降 | Google Pay 経由の Android 非おサイフケータイ・デバイス |
| Suica インターネットサービス／ウェブベースのチャージ | 継続中 | ウェブからビューカード／クレジットカードでチャージ |

Apple Pay Suica 2016  は、モバイル Suica を日本のキャリアのおサイフケータイ・デバイスに制約していた SIM 地域制限を取り除き、海外発行の iPhone が Suica ウォレットをプロビジョニングして日本国内の交通および小売で使用できるようにしたため、構造的に重要であった。これは主要なキャッシュレス・インバウンド観光客レーンの一つであり、海外からの訪問者の支払い期待を再形成してきた。

## KPI snapshot

| 指標 | Reading (most recent public disclosure) |
|---|---|
| 累計 Suica 発行 | モバイル Suica を含め 100M+（JR 東日本 IR 資料） |
| 日次交通タップ件数 | 日本において日次タップ件数で最大の単一交通系 IC 発行者 |
| モバイル Suica アカウント | 数千万（JR 東日本 IR 開示） |
| 未使用プリペイド残高 | 数千億円規模（JR 東日本有価証券報告書のプリペイド供託開示） |
| 年間小売タップ金額 | 相当な加盟店横断取引金額；JR 東日本 IR は電子マネー収益セグメントを内訳開示 |

正確な前期比 KPI 数値は JR 東日本 IR 資料にある；FinWiki はそれらを再現するのではなく、現行の四半期数値については発行者 IR にルーティングする。

## Strategy: transit-anchored cashless platform

JR 東日本における Suica の戦略的論理：

1. **交通系を起点とする導入ベース** — すべての JR 東日本通勤者は潜在的な Suica カード保有者であり、定期券から Suica IC カードへの転換が、小売を起点とするピアが及ばないマス・ディストリビューションを牽引してきた。
2. **ブレッキッジ／フロートの経済性** — 大きな未使用残高は低コストの資金源であり、紛失／未返却カードに対する P&L ブレッキッジの追い風である。
3. **インバウンド観光客キャッシュレス** — Apple Pay の有効化により、Suica は日本における事実上のインバウンド観光客キャッシュレス・レールとなった。
4. **JR 東日本グループのクロスセル** — ビューカードのクレジットカード発行、JRE POINT ロイヤルティ統合、駅ナカ小売アクセプタンス — すべて Suica に支えられている。
5. **オープンな相互利用 vs クローズドループ** — Suica が（JR 専用のクローズドではなく）10 IC 相互利用スキームに参加するという選択は、交通系 IC 経済圏全体にとって構造的に有効化要因であった；トレードオフはサイバネ経由で管理される発行者間決済の複雑性である。
6. **集中化（JRE PoiNT、JRE ウォレット とのモバイル Suica 統合）** — 近年の JR 東日本の戦略的方向性は、JRE プラットフォーム・ブランドの下での統合である。

## Related

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics]]
- [[payments/pasmo-prepaid-tokyo-metro]]
- [[payments/waon-prepaid-aeon]]
- [[payments/nanaco-prepaid-seven-i]]
- [[payments/edy-rakuten-prepaid]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/japan-card-security-authentication-controls]]
- [[card-issuers/jr-east-financial]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## Sources

- JR 東日本 Suica 公式サイト（jreast.co.jp/suica）。
- JR 東日本 モバイル Suica サイト（jreast.co.jp/mobilesuica）。
- JR 東日本 コーポレートサイトおよび IR 資料。
- 金融庁、`daisan.xlsx` — 第三者型前払式支払手段発行者の登録一覧。
- 金融庁 前払式支払手段ポリシー・ページ。
- FeliCa Networks コーポレートサイト（felicanetworks.co.jp）。
- 経済産業省 キャッシュレス・ポリシー・ページ。
