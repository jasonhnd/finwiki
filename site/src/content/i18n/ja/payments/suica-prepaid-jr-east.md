---
source: payments/suica-prepaid-jr-east
source_hash: e078df1293c47ca3
lang: ja
status: machine
fidelity: ok
title: "Suica: JR East の交通系・汎用 IC プリペイド"
translated_at: 2026-06-02T16:33:58.514Z
---
# Suica: JR East の交通系・汎用 IC プリペイド

## ウィキ上の位置づけ

このエントリは、JR East をアンカーとする前払式支払手段発行者ページとして [[payments/INDEX|payments index]] の配下に位置する。FSA 登録面については [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]] と、発行者横断のスキーム面については [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-prepaid e-money economics]]（10 IC 相互利用、Cyberne 精算）と組み合わせる。[[payments/pasmo-prepaid-tokyo-metro|PASMO]]（東京メトロ / 私鉄コンソーシアム側の対応物）、[[payments/waon-prepaid-aeon|WAON]] / [[payments/nanaco-prepaid-seven-i|nanaco]]（小売アンカーの FeliCa ピア）、[[payments/edy-rakuten-prepaid|Rakuten Edy]]（プラットフォーム非依存 FeliCa）と比較する。企業 / グループのアンカーは [[JapanFG/jr-east-financial|JR East financial services / Viewカード]]、技術基盤は Sony / FeliCa Networks 経由の FeliCa、モバイル鉄道拡張は Apple Pay / おサイフケータイ配下の [[payments/japan-card-security-authentication-controls|tokenization controls]] にリンクする。

## 要約

**Suica** (Super Urban Intelligent Card) は、**East Japan Railway Company (JR East / 東日本旅客鉄道株式会社)** が 2001-11-18 の開始以来発行する、**日本を代表する交通系・汎用 IC プリペイド電子マネー**である。Suica は、日本でカード保有者数と取引件数が最大の交通系プリペイド発行者であり、PASMO / ICOCA / Kitaca / TOICA / manaca / nimoca / SUGOCA / HAYAKAKEN / PiTaPa（最後はポストペイの例外）と並んで [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|10 IC mutual-use scheme]] を支えている。Suica は [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act prepaid framework]] 上の **第三者型前払式支払手段**として登録されており、コンビニ、自動販売機、タクシー、小売チェーン、FeliCa 対応 POS など複数加盟店で利用できる。**Mobile Suica** は 2006 に開始され（携帯電話統合）、Apple Pay 対応は 2016-10 に到来した。これにより Suica は物理カード専用からスマートフォンネイティブへ移行し、海外発行 iPhone との統合が可能になって、日本の訪日観光客向けキャッシュレスの中心となった。

## 発行者と運用構造

| 次元 | 読み方 |
|---|---|
| ブランド所有者 | East Japan Railway Company (JR East / 東日本旅客鉄道株式会社) |
| FSA 前払式支払手段発行者 | 第三者型前払式支払手段発行者としての JR East |
| グループ提携カード | View Card (Viewカード) — Suica オートチャージ付きの JR East 提携クレジットカード |
| 開始年 | 2001-11-18（物理カード）、2006 (Mobile Suica)、2016-10 (Apple Pay) |
| 技術 | FeliCa 非接触 IC (Sony / FeliCa Networks) |
| モバイル鉄道 | Mobile Suica (おサイフケータイ → Apple Pay / Google Pay / Wear OS 対応) |
| チャージ上限 | ¥20,000 (通常の Suica カード)。Mobile Suica は View Card オートチャージで拡張可能 |
| 発行者間精算 | 10 IC 発行者を横断する Cyberne システム |

## 法的根拠: 前払式支払手段

Suica は、JR East 自社サービスを超えた**第三者加盟店**（コンビニ、自動販売機、小売）で利用できるため、[[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act (資金決済法)]] Chapter 3  上の **第三者型前払式支払手段**として登録されている。**他鉄道事業者のネットワーク**での相互利用タップ受け入れは、[[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-prepaid economics]] に記録された発行者間契約によって管理される。主な規制上の帰結は次のとおり。

- JR East は、第三者型前払式支払手段発行者として [[payments/prepaid-payment-instrument-issuers-japan-index|FSA `daisan.xlsx`]] に掲載される。
- 半期ごとの**未使用残高供託**義務: 未使用残高の半額を法務局に供託する。Suica の導入基盤規模を考えると大きい。
- **発行終了時を除き原支払者への払戻しは不可**。ただし JR East は物理カード返却時に手数料付きで Suica 残高を払い戻しており、これは資金決済法上義務づけられた払戻しではなくサービス上の返金として構成される。
- **失効益**（観光客が購入した Suica カードが返却されず、残高が残ること）は重要な損益貢献要素であり、長期にわたる注視対象である。

## 10 IC 相互利用スキーム

Suica は、**10 IC 相互利用スキーム**のアンカーであり、このスキームは 2013-03-23に開始された。このスキームにより、Suica 保有者は全国の参加鉄道 / バスネットワークでタップ乗車し、参加小売加盟店で支払える。全体の相互利用マップは [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-prepaid economics]] にある。

| カード | 発行者 | 地域 |
|---|---|---|
| **Suica** | JR East | 首都圏 / 北日本 |
| PASMO | PASMO Co Ltd | 首都圏私鉄 / バス |
| ICOCA | JR West | 関西 / 西日本 |
| Kitaca | JR Hokkaido | 北海道 |
| TOICA | JR Central | 東海 / 名古屋 |
| manaca | Meitetsu + Nagoya City | 名古屋 / 中部 |
| nimoca | Nishitetsu | 福岡 / 九州 |
| SUGOCA | JR Kyushu | 九州 |
| HAYAKAKEN | Fukuoka City Subway | 福岡市 |
| PiTaPa | Surutto KANSAI (ポストペイ) | 関西 (ICOCA と重複) |

発行者間精算は **Cyberne**（中央センター — JR East + JR グループ + 私鉄コンソーシアムが運営する中央精算）を通じて行われ、発行者を横断するタップ取引を清算する。

## Mobile Suica の世代

| 世代 | 年 | 主な機能 |
|---|---|---|
| 物理 Suica のみ | 2001-2006 | カードベース。JR 券売機 / 定期券窓口でチャージ |
| Mobile Suica (おサイフケータイ) | 2006 | フィーチャーフォンからスマートフォンへのおサイフケータイ統合。FeliCa 搭載 Android 端末 |
| Apple Pay Suica | 2016-10 | iPhone 7 以降。主要な海外 iPhone 統合。SIM 地域に依存しない訪日観光客利用を可能にした |
| Google Pay / Wear OS | 2018 以降 | Google Pay 経由の Android 非おサイフケータイ端末 |
| Suica Internet Service / web-based charge | 継続 | View Card / クレジットカードからウェブでチャージ |

Apple Pay Suica 2016 は、Mobile Suica を日本キャリアのおサイフケータイ端末に制約していた SIM 地域制限を取り除いたため、構造的に重要だった。これにより、海外発行 iPhone で Suica ウォレットを発行し、日本の交通と小売で使えるようになった。これは主要な訪日観光客キャッシュレスレーンの一つであり、海外訪問者の決済期待を再形成した。

## KPI スナップショット

| 指標 | 読み方（直近公開開示） |
|---|---|
| Suica 累計発行枚数 | Mobile Suica を含め 100M+ (JR East IR 資料) |
| 日次交通タップ件数 | 日本最大の単一交通系 IC 発行者の日次タップ件数 |
| Mobile Suica アカウント | 数千万規模 (JR East IR 開示) |
| 未使用プリペイド残高 | 数千億円規模 (JR East 有価証券報告書の前払式支払手段供託開示) |
| 年間小売タップ取扱高 | 大きな加盟店横断取引額。JR East IR は電子マネー収益セグメントを開示 |

正確な期間別 KPI 数値は JR East IR 資料にある。FinWiki は現在の四半期数値を転載するのではなく、発行者 IR にルーティングする。

## 戦略: 交通アンカー型キャッシュレスプラットフォーム

JR East における Suica の戦略ロジックは次のとおり。

1. **交通アンカーの導入基盤** — JR East のすべての通勤者が潜在的な Suica 保有者である。鉄道定期券の Suica IC カード化が、小売アンカーのピアにはできない大規模配布を牽引した。
2. **失効益 / フロート経済** — 大きな未使用残高は低コストの資金源であり、紛失 / 未返却カードの失効益は損益上の追い風である。
3. **訪日観光客キャッシュレス** — Apple Pay 対応により、Suica は日本における事実上の訪日観光客向けキャッシュレス鉄道レールになった。
4. **JR East Group のクロスセル** — View Card のクレジットカード発行、JRE POINT ロイヤルティ統合、エキナカ小売受け入れは、すべて Suica をアンカーとする。
5. **オープン相互利用とクローズドループ** — Suica が JR のみの閉じた仕組みではなく 10 IC 相互利用スキームに参加したことは、交通系 IC エコシステム全体を可能にした構造要因である。トレードオフは、Cyberne で管理される発行者間精算の複雑さである。
6. **集中化（JRE PoiNT、Mobile Suica と JRE WALLET の統合）** — 近年の JR East の戦略方向は、JRE プラットフォームブランドの下での統合である。

## 関連項目

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
- [[JapanFG/jr-east-financial]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## 出典

- JR East Suica 公式サイト (jreast.co.jp/suica)。
- JR East Mobile Suica サイト (jreast.co.jp/mobilesuica)。
- JR East 企業サイトおよび IR 資料。
- FSA, `daisan.xlsx` — 第三者型前払式支払手段発行者登録一覧。
- FSA 前払式支払手段政策ページ。
- FeliCa Networks 企業サイト (felicanetworks.co.jp)。
- METI キャッシュレス政策ページ。
