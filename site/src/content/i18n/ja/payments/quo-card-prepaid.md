---
source: payments/quo-card-prepaid
source_hash: 489b969add1ca93b
lang: ja
status: machine
fidelity: ok
title: "QUOカード: ギフトカードおよび紙 / デジタルプリペイド・フランチャイズ"
translated_at: 2026-06-02T16:33:58.507Z
---

# QUOカード: ギフトカードおよび紙 / デジタルプリペイド・フランチャイズ

## ウィキ上の位置づけ

この項目は、QUO Card ギフトカード型プリペイド発行者ページとして [[payments/INDEX|payments index]] の下に位置づけ、金融庁登録簿の見方については [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]] と組み合わせる。ギフトカード型プリペイドのピアとして [[payments/amazon-gift-card-japan|Amazon Gift Card Japan]]、[[payments/apple-gift-card-japan|Apple Gift Card Japan]]、[[payments/google-play-gift-card-japan|Google Play Gift Card Japan]]、[[payments/visa-gift-card-japan|Visa Gift Card Japan]] と比較する。小売アンカー型 ([[payments/waon-prepaid-aeon|WAON]] / [[payments/nanaco-prepaid-seven-i|nanaco]]) や交通アンカー型 ([[payments/suica-prepaid-jr-east|Suica]] / [[payments/pasmo-prepaid-tokyo-metro|PASMO]]) のプリペイドシステムとは対照的に、QUO Card は単一の小売親会社を持たず、小売受入網を利用する **第三者ギフト流通** カテゴリに位置する。法的枠組みは [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]。

## 要約

**QUO Card (クオカード)** は、**株式会社クオカード (QUO Card Co Ltd)** が発行する、日本を代表する紙・デジタル型ギフトカード・フランチャイズである。もともと日本電信電話 (NTT) グループのプリペイドカード系譜の一部として 1987 に開始され、現在は金融庁登録の前払式支払手段発行者として独立運営されている第三者型プリペイド・フランチャイズである。QUO Card は、広い加盟店受入、額面の柔軟性 (¥500 / ¥1,000 / ¥2,000 / ¥3,000 / ¥5,000 / ¥10,000)、法人利用者向けにカスタムデザインを印刷できること (オリジナルQUOカード) から、日本では **企業ギフト、株主優待、販促景品、調査回答者への謝礼** として広く使われる。2019 に開始されたデジタル拡張版 **QUO Card Pay (クオカードPay)** は、メールやメッセージアプリで送れる URL / バーコード型デジタルギフトとして、紙カードからデジタルギフト流通へフランチャイズを広げた。受入先は、コンビニエンスストア (Lawson、FamilyMart、MiniStop、Daily Yamazaki、Seicomart、NewDays。ただし **7-Eleven は不可**)、ドラッグストア、ガソリンスタンド、飲食店、書店、その他小売にまたがる。

## 発行者と運営構造

| 軸 | 読み方 |
|---|---|
| 運営会社 | 株式会社クオカード (QUO Card Co Ltd) |
| グループ文脈 | 独立系プリペイドカード発行者。起源は NTT グループ系譜 |
| 金融庁前払式発行者 | QUO Card は金融庁 `daisan.xlsx` 第三者型前払式発行者一覧に掲載 |
| 開始年 | 1987 (紙のオリジナル QUO Card)、2019 (デジタルの QUO Card Pay) |
| 技術 | 磁気ストライプ付き紙カード (紙の QUO Card)、URL / バーコード (QUO Card Pay) |
| 額面 | ¥500, ¥1,000, ¥2,000, ¥3,000, ¥5,000, ¥10,000 (¥500 / ¥1,000 が最も一般的なギフト額面) |
| カスタムデザイン | オリジナルQUOカード — 企業が法人ギフト向けにブランド入りカードデザインを印刷できる |
| 流通レール | コンビニ店頭販売、QUO Card サイトでのオンライン販売、B2B 法人大口購入、株主優待配布 |
| QUO Card Pay 形式 | メール / LINE / SMS で配信される URL / バーコード。レジで読み取って支払う |

## 法的根拠: 前払式支払手段

QUO Card は、[[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act (資金決済法)]] 第 3章に基づく **第三者型前払式支払手段** として登録されている。QUO Card フランチャイズは、資金決済法上の前払式支払手段枠組みの形成に影響した初期世代の紙型プリペイド商品の一つである。主な規制上の帰結は次のとおり。

- QUO Card Co Ltd は、登録第三者型前払式発行者として [[payments/prepaid-payment-instrument-issuers-japan-index|FSA `daisan.xlsx`]] に掲載される。
- 半期ごとの **未使用残高供託** 義務。QUO Card は大きな未使用紙カード残高を持ち、カード寿命が長く、ギフトカードの未利用パターンも一般的なため、供託義務は重要である。
- **発行終了時を除き、元の支払者への払戻しはない**。紙の QUO Card は明示的に払戻不可である。
- **ブレークエージ**。紙の QUO Card は、引き出しにしまわれて忘れられる、額面消化前に使われなくなるなど、長期の未使用残高パターンを持つ。ブレークエージはフランチャイズの損益上重要である。
- 資金決済法上の前払式支払手段しきい値に基づく AML / KYC の適用除外。

## 利用場面: QUO Card が強い領域

QUO Card の経済的役割は、小売消費者ウォレットというより、主に **法人 / B2B ギフト流通** である。主な利用カテゴリは次のとおり。

| 利用場面 | 説明 |
|---|---|
| **株主優待** | 上場会社の株主優待プログラムでは、優待品として QUO Card が頻繁に配布される。額面の柔軟性と広い受入網が株主優待配布に合う。 |
| **調査回答者 / 応募者への謝礼** | 市場調査会社は、参加者報酬として QUO Card をよく発行する (¥500 / ¥1,000 が典型)。 |
| **法人ギフト / 年末のお歳暮** | B2B から従業員 / 顧客への法人ギフト配布。 |
| **販促 / キャンペーン景品** | 販売インセンティブ、記念品、広告販促プレミアム。 |
| **大口 B2B 購入** | 企業が複数の社内配布プログラムに使うため、紙の QUO Card を小幅な割引で大口購入する。 |
| **QUO Card Pay デジタルギフト** | メール / LINE 配信型のデジタルギフトカード。オンライン調査、アプリ販促、リモートワーク時代の配布など、紙の配送が現実的でない用途で利用が増えている。 |

受入網は **7-Eleven** を除外している。Seven & i Group が自社の [[payments/nanaco-prepaid-seven-i|nanaco]] プリペイド・フランチャイズを持ち、歴史的に自店舗で QUO Card を受け入れていないためである。これは、汎用ギフトカードに対する QUO Card の主要な使い勝手上の制約の一つである。

## 受入フットプリント

| 階層 | 受入先 |
|---|---|
| コンビニエンスストア | Lawson, FamilyMart, MiniStop, Daily Yamazaki, Seicomart, NewDays — **7-Eleven は不可** |
| ドラッグストア | マツモトキヨシ, ココカラファイン, スギ薬局, ウエルシア (一部) など |
| ガソリンスタンド | ENEOS, JX, 出光, コスモ石油 (一部) |
| レストラン / ファストフード | 一部チェーンレストラン |
| 書店 | Kinokuniya, Maruzen, Sanseido, Junkudo, Bunkyodo |
| その他 | Hanamasa, ホテルチェーン、一部専門小売 |

## QUO Card Pay: デジタル拡張

**QUO Card Pay (クオカードPay)** は、2019 に開始された、メール、LINE、SMS で配信される **URL / バーコード型デジタルギフトカード** である。

- 受取人は URL を受け取り、参加加盟店のレジで開き、バーコード / QR を読み取って支払う。
- アプリのインストールは不要で、IC や FeliCa ハードウェアも不要である。
- オンライン調査報酬、アプリ販促インセンティブ、在宅勤務時代のインセンティブ、従業員表彰など、**リモート配布** に有用である。
- 送付者 (法人または個人) は QUO Card Pay サイトでクレジットを購入し、受取人へ配布する。
- 紙の QUO Card と受入先は重なるが、加盟店統合は別であり、1:1 で完全に同一の受入網ではない。
- PayPay / au PAY / d払い のような [[payments/japan-code-payment-competitive-map|wallet-style code payments]] とは異なり、QUO Card Pay はチャージ / トップアップ機能を持たない **単回利用型ギフト** である。

## KPI スナップショット

| 指標 | 読み方 (公開情報) |
|---|---|
| 紙の QUO Card 累計発行枚数 | 1987 開始以来、数億枚規模 |
| 年間ギフトカード発行額 | 数千億円規模 (業界推計) |
| 受入店舗数 (紙の QUO Card) | 全国約 60,000+ 店 |
| QUO Card Pay カバレッジ | 2019 開始以降拡大中 |
| 株主優待配布シェア | 日本で最も使われる株主優待資産タイプの一つ |

正確な数値は、QUO Card Co Ltd の公開情報およびギフトカード業界レポートにある。

## 戦略: 法人ギフト流通フランチャイズ

QUO Card の戦略上の位置づけは次のとおり。

1. **小売アンカーを持たない中立性** — [[payments/waon-prepaid-aeon|WAON]] (AEON) / [[payments/nanaco-prepaid-seven-i|nanaco]] (Seven & i) と異なり、QUO Card には小売アンカー親会社がなく、複数チェーンで使える **中立的なギフト通貨** として位置づけられる。
2. **法人 B2B 販売への集中** — 大口法人購入、カスタムデザイン印刷、株主優待配布が主要な収益レーンである。
3. **紙 + デジタルの併存** — 伝統的な法人ギフトでは紙カードがなお中心であり、QUO Card Pay はリモート / デジタル配布の成長を取り込む。
4. **ブレークエージ経済性** — 長期未使用残高パターンは構造的な損益追い風になる。
5. **受入網の堀** — 7-Eleven を除く広い加盟店横断フットプリントが、ギフト通貨としての位置づけを支える。

## 関連項目

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/amazon-gift-card-japan]]
- [[payments/apple-gift-card-japan]]
- [[payments/google-play-gift-card-japan]]
- [[payments/visa-gift-card-japan]]
- [[payments/waon-prepaid-aeon]]
- [[payments/nanaco-prepaid-seven-i]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[INDEX|FinWiki index]]

## 出典

- QUO Card official site (quocard.com).
- QUO Card Pay site (quocard.com/pay).
- QUO Card corporate site (quocard.co.jp).
- FSA, `daisan.xlsx` — third-party prepaid-instrument issuer registration list.
- FSA prepaid payment instruments policy page.
- METI cashless policy page.
