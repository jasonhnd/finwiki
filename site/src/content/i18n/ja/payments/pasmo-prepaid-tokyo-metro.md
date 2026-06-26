---
source: payments/pasmo-prepaid-tokyo-metro
source_hash: 6de350ef9f4db766
lang: ja
status: machine
fidelity: ok
title: "PASMO: 東京の私鉄・バス連合による前払 IC"
translated_at: 2026-06-02T16:33:58.485Z
---
# PASMO: 東京の私鉄・バス連合による前払 IC

## ウィキ上の位置づけ

この項目は、東京の私鉄 / バス連合による前払発行者ページとして [[payments/INDEX|payments index]] 配下にあり、FSA 登録簿の見方を扱う [[payments/prepaid-payment-instrument-issuers-japan-index|前払式支払手段発行会社 registry]] と、[[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-前払式電子マネー economics]] の 10 IC 相互利用スキーム文脈と対になります。[[payments/suica-prepaid-jr-east|Suica]]（JR East 側の比較対象で最大の相互利用ピア）、[[payments/waon-prepaid-aeon|WAON]] / [[payments/nanaco-prepaid-seven-i|nanaco]]（小売アンカー型 FeliCa）、[[payments/edy-rakuten-prepaid|Rakuten Edy]]（プラットフォーム非依存 FeliCa）と比較してください。PASMO 連合は、Tokyo Metro、Toei Subway、主要私鉄（Tokyu、Odakyu、Keio、Tobu、Seibu、Keisei、Sotetsu、Yokohama Minatomirai、Tama Monorail など）と首都圏バス網をカバーします。全事業者リストと Cyberne の発行者間精算は [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-前払式 economics]] を参照してください。

## 要約

**PASMO** は、**東京の私鉄・バス連合が運営する前払 IC 電子マネー** です。**株式会社パスモ (PASMO Co Ltd)** を中心とする複数事業者連合が、Tokyo Metro、Toei Subway、主要私鉄 / バス事業者（Tokyu、Odakyu、Keio、Tobu、Seibu、Keisei、Sotetsu、Yokohama Minatomirai Railway など）にまたがる発行と精算を束ねています。2007-03-18 に開始し、初日から [[payments/suica-prepaid-jr-east|Suica]] と相互利用できました。**10 IC 相互利用スキーム** には 2013-03-23 に参加し、首都圏における主要な非 JR 系交通 IC となっています。PASMO は **FeliCa** 非接触 IC 上で動作し、[[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act 前払式 framework]] に基づく **第三者型前払式支払手段** として登録されています。東京圏と、全国の 10-IC 対応 POS で横断的な小売受入があります。**Mobile PASMO** は Android Osaifu Keitai で 2020-03  に、Apple Pay で 2020-10  に開始しました。Mobile Suica の 2016  Apple Pay 開始より大きく遅れており、複数事業者合意に伴う連合調整コストを反映しています。

## 発行者と連合構造

| 観点 | 読み方 |
|---|---|
| 運営会社 | 株式会社パスモ (PASMO Co Ltd) |
| 連合メンバー | Tokyo Metro、Toei Subway、Tokyu、Odakyu、Keio、Tobu、Seibu、Keisei、Sotetsu、Yokohama Minatomirai Railway、Tama Monorail、Keikyu、Tokyo Monorail、Saitama Railway、Tsukuba Express、Hokuso Railway、その他。全リストは pasmo.co.jp。 |
| バス連合メンバー | Tokyu Bus、Odakyu Bus、Keio Bus、Tobu Bus、Seibu Bus、Keisei Bus、Yokohama City Bus など。 |
| FSA 前払発行者 | PASMO Co Ltd は FSA `daisan.xlsx` に第三者型前払式支払手段発行者として掲載。 |
| 開始年 | 2007-03-18（物理カード）、2020-03 （Mobile PASMO Android）、2020-10 （Apple Pay） |
| 技術 | FeliCa 非接触 IC |
| モバイル鉄道 | Mobile PASMO（Osaifu Keitai → Apple Pay / Google Pay） |
| チャージ上限 | ¥20,000 （一般的な PASMO カード） |
| 発行者間精算 | 10 IC 発行者間の Cyberne system |

## 法的根拠: 前払式支払手段

PASMO は、受入範囲が連合加盟事業者を超えて **第三者小売加盟店**（コンビニ、自動販売機、小売、駅ナカ店舗）に広がるため、[[payments/funds-transfer-vs-prepaid-boundary|資金決済法]] Chapter 3  に基づく **第三者型前払式支払手段** として登録されています。主な規制上の帰結は次のとおりです。

- PASMO Co Ltd は [[payments/prepaid-payment-instrument-issuers-japan-index|FSA `daisan.xlsx`]] に掲載されています。
- 法務局への半期ごとの **未使用残高供託** 義務があります。
- **発行終了時を除き、元の支払者への返金は不可** — PASMO は手数料付きで連合窓口でのサービス払戻ルートを提供します。
- **失効益** — 旅行者が購入して返却しない PASMO カードは、発行者に滞留資金と失効益を生みます。
- PSA 前払しきい値に基づく AML / KYC の例外があります。

## 連合調整と単一発行者の比較

PASMO が [[payments/suica-prepaid-jr-east|Suica]] と構造的に最も異なる点は、単一発行者商品ではなく **複数事業者連合** であることです。

| 観点 | PASMO（連合） | Suica（単一 JR East 発行者） |
|---|---|---|
| 発行権限 | PASMO Co Ltd（連合保有） | JR East が直接発行 |
| モバイルレール展開速度 | 遅い — 連合調整が必要 | 速い — 単一発行者が意思決定 |
| Apple Pay 開始 | 2020-10 | 2016-10 |
| 東京 Metro / 私鉄内の相互運用 | 連合メンバーすべてで初日から利用可能 | 相互利用スキーム（2013） |
| グループカード共同ブランド | 事業者別（TOKYU CARD、OPクレジットなど） | View Card（JR East） |
| ロイヤルティ統合 | 事業者別（TOKYU POINT、OPポイントなど） | JRE POINT |
| Mobile Suica vs Mobile PASMO 相互運用 | どちらも Apple Pay で使えるが、同一残高を同時に保持することはできない | 同じ |

**連合構造** は事業者カバレッジの広さでは強みですが、商品進化の速度に対して調整コストを課します。Mobile Suica に対する Apple Pay の 4 年遅れは、この点を反映しています。

## 10 IC 相互利用スキーム

PASMO と Suica の相互利用は、基礎となる 2007  開始イベントでした。PASMO 開始初日からこの二つは相互利用でき、より広い 2013 10 IC 相互利用スキームより三年早いものでした。相互利用参加者の全リストは [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-前払式 economics]] にあります。発行者間精算は Cyberne を通じて行われます。

## Mobile PASMO の世代

| 世代 | 年 | 主な特徴 |
|---|---|---|
| 物理 PASMO のみ | 2007-2020 | カードベース。連合加盟事業者の券売機でチャージ。 |
| Mobile PASMO Android | 2020-03 | Osaifu Keitai FeliCa 対応 Android 端末。 |
| Apple Pay PASMO | 2020-10 | iPhone 7  以降。海外 iPhone との主要な統合を実現。 |
| Google Pay PASMO | 2023  以降 | Android 非 Osaifu Keitai 端末。 |

Apple Pay PASMO の開始は、以前は物理 PASMO を使い続けるか、Mobile Suica に移るかを迫られていた **非 JR 通勤者** にとってとくに重要でした。Mobile Suica は JR East と連合メンバーネットワークで使えますが、PASMO 定期券をそのまま持ち越せません。

## KPI スナップショット

| 指標 | 読み方（公開情報） |
|---|---|
| PASMO 累計発行枚数 | 数千万枚規模（PASMO Co Ltd 開示） |
| 日次交通タップ件数 | 首都圏では Suica に次ぐ第2位の単一交通 IC 発行者 |
| 連合加盟鉄道 / バス事業者 | 鉄道 + バス合計で数十事業者 |
| Mobile PASMO アカウント | 2020  開始後に増加。連合が段階的なマイルストーンを報告 |
| 未使用前払残高 | 数十億円規模の重要な残高 |

正確な期間別 KPI は、集中型の投資家向け開示ではなく PASMO Co Ltd / 連合加盟事業者の開示にあります。

## 戦略: 連合をアンカーとする東京キャッシュレス

PASMO の連合レベルでの戦略ロジックは次のとおりです。

1. **連合効率** — 多数の私鉄 / バス事業者にまたがる単一 IC により、事業者ごとの IC 発行コストを避ける。
2. **JR East との共存** — Suica との初日からの相互運用は戦略的であり、任意ではなかった。通勤都市東京では、相互利用がなければ商業的に致命的だった。
3. **モバイル鉄道の追い上げ** — 2020  Mobile PASMO + Apple Pay は Mobile Suica に対する 4 年の不利を埋め、非 JR 通勤者のウォレット内ポジションを維持するうえで重要だった。
4. **訪日観光客** — Apple Pay 経由の Mobile PASMO により、東京の海外 iPhone ユーザーは PASMO と Suica のどちらのウォレットも選べる。収れんは旅行者のデフォルトとして Suica に有利だが、PASMO は非 JR 鉄道を使う旅行者の間でなお大きなシェアを保つ。
5. **事業者別共同ブランドカード** — TOKYU CARD、OPクレジット、Keio Pasport Card などが、単一クレジットカード発行者へ集中せずに、事業者ごとの通勤者・ロイヤルティ統合をアンカーする。

## 関連項目

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics]]
- [[payments/suica-prepaid-jr-east]]
- [[payments/waon-prepaid-aeon]]
- [[payments/nanaco-prepaid-seven-i]]
- [[payments/edy-rakuten-prepaid]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## 出典

- PASMO 公式サイト (pasmo.co.jp)。
- Tokyo Metro 企業サイト (tokyometro.jp)。
- Toei Subway / 東京都交通局サイト (kotsu.metro.tokyo.jp)。
- FSA `daisan.xlsx` — 第三者型前払式支払手段発行者登録一覧（PASMO Co Ltd 項目）。
- FSA 前払式支払手段政策ページ。
- FeliCa Networks 企業サイト (felicanetworks.co.jp)。
- METI キャッシュレス政策ページ。
