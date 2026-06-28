---
source: card-issuers/installment-sales-act-2020-amendment
source_hash: 04e6be00f953cc71
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "割賦販売法 2020 改正"
translated_at: 2026-06-26T08:31:59.842Z
---

# 割賦販売法 2020 改正

## 要約

2020年改正割賦販売法（令和2年法律第64号）は、クレジットカード / 後払い / BNPL のデジタル化に合わせて、(1) 認定包括信用購入あっせん業者、(2) 登録少額包括信用購入あっせん業者、(3) 決済代行・アクワイアリング側のカード番号管理、(4) 書面交付の電子化、(5) 業務停止命令を整備した改正。

JapanFG では、[[payment-firms/paidy]] のような BNPL、[[card-issuers/jcb]] のようなカード発行・加盟店ネットワーク、[[card-issuers/orico]] / [[card-issuers/jaccs]] のような信販会社、そして [[financial-licenses/INDEX]] の credit / installment ライセンス層を読むための基礎法制。重要な境界は、**BNPL = 自動的に登録少額包括信用購入あっせん業者ではない**こと。METI の登録事業者一覧では、令和8年4月末時点の登録少額包括信用購入あっせん業者は 0 社で、Paidy は 2024年の行政処分資料上、登録包括信用購入あっせん業者（関東（包）第122号）として扱われている。

## 制度マップ

| レイヤー | 対象範囲 | JapanFG での読み方 |
|---|---|---|
| 割賦販売 | 事業者が消費者に2か月以上かつ3回以上の分割払いで指定商品等を販売する取引 | 伝統的な分割販売。BNPL / card アクワイアリング とは別レイヤー |
| ローン提携販売 | 商品購入資金の借入れを販売業者等が保証する構造 | 目的ローンとの境界が問題になる |
| 包括信用購入あっせん | クレジットカード等で販売代金を立替払いし、消費者から2か月超で回収する業 | [[card-issuers/jcb]], [[card-issuers/orico]], [[card-issuers/jaccs]], [[payment-firms/paidy]] |
| 個別信用購入あっせん | 個別商品・役務ごとの信販 / ショッピングクレジット | 信販会社・耐久消費財・教育 / 美容等のローンで重要 |
| クレジットカード番号等取扱契約締結事業者 | 加盟店にカード取扱いを認める契約を締結する者。アクワイアラーや一部 PSP | アクワイアリング / PSP / 加盟店 onboarding の規制面 |
| カード番号等取扱業者 | カード番号等の適切管理義務を負う主体 | PCI DSS、非保持化、不正利用防止 |

METI FAQ は、後払分野の規制対象を「割賦販売業者」「ローン提携販売業者」「信用購入あっせん業者」「クレジットカード番号等取扱業者」「クレジットカード番号等取扱契約締結事業者」に整理している。

## 2020 改正の要点

METI は、2020年改正の背景を「少額かつ多頻度の後払サービス」「異業種企業の後払い参入」「インターネットやスマートフォン端末による決済拡大」と説明している。公布は 2020-06-24、施行は 2021-04-01。

### 1. 認定包括信用購入あっせん業者従来の画一的な「包括支払可能見込額調査」に代えて、事業者ごとの与信審査手法を使う特例。認定事業者は、自社データや技術を使える一方で、想定延滞率・実績延滞率の管理、定期報告、改善命令リスクを負う。

### 2. 登録少額包括信用購入あっせん業者極度額10万円以下の包括信用購入あっせん業を営む事業者向けの登録制度。BNPL のような「少額・多頻度・スマホ完結」の後払いサービスを想定して規制合理化されたが、2026-04末時点の METI 登録事業者一覧では、このカテゴリーの登録事業者は 0 社。

このため、[[payment-firms/paidy]] を読むときは「2020改正が BNPL を意識した制度を作った」と「Paidy が現に登録少額業者である」は分ける必要がある。少なくとも 2024-10-03 の関東経済産業局資料では、Paidy は登録包括信用購入あっせん業者として行政処分を受けている。

### 3. カード番号等の管理主体拡大

2020改正は、カード番号等の適切管理義務の主体も広げた。決済代行業者、コード決済事業者、カード番号を保存・再利用するサービス、後払い決済でカード番号を提供する事業者などが対象になり得る。

実務上は アクワイアリング / PSP の境界が重要。METI FAQ は、PSP がアクワイアラーから包括的に授権され、加盟店契約の実質的な最終決定権限と加盟店管理を持つ場合は PSP 側に登録が必要と説明している。一方、一次審査だけで最終判断を登録アクワイアラーが留保する場合は、PSP 側の登録は不要になり得る。

### 4. 電子化スマートフォン・パソコン完結型サービスに合わせ、利用明細や会員規約等の電子提供を認める方向で書面交付規制が調整された。ただしデジタルデバイドへの配慮として、書面交付請求が可能であること等の周知が必要。

### 5. 行政処分登録包括信用購入あっせん業者および登録少額包括信用購入あっせん業者に対して、業務停止命令などの監督手段が整備された。Paidy への 2024-10-03 改善命令は、このレイヤーが実際に BNPL / 後払い事業者へ効くことを示すケース。

## JapanFG での意義

- [[payment-firms/paidy]]: BNPL / あと払いは、商品代金を立替え、消費者から後日回収する構造を持つため、包括信用購入あっせんの規制分析が必要。2024年行政処分では、包括支払可能見込額調査・過剰与信防止義務の運用不備が問題化した。
- [[card-issuers/jcb]]: 発行会社 / アクワイアラ / network のどの機能を持つかで、包括信用購入あっせん業者、カード番号等取扱契約締結事業者、カード番号等取扱業者の複数レイヤーが重なる。
- [[card-issuers/orico]] / [[card-issuers/jaccs]]: 信販会社は包括・個別信用購入あっせんの両面を持ちやすい。2020改正は AI / data-driven 与信の余地を広げたが、延滞率・指定信用情報機関・過剰与信防止の監督が残る。
- [[financial-licenses/INDEX]]: 銀行法、貸金業法、資金決済法と並ぶ「後払い / installment / card credit」ライセンスの中核。貸付ではなく立替払い・信用購入あっせんとして構成される場合、金融庁だけでなく METI 管轄が前面に出る。

## 境界事例

| 事例 | 想定される扱い | 注意点 |
|---|---|---|
| 翌月一括 BNPL | 期間・契約形態次第。2か月超で回収する信用購入あっせんに該当するかを確認 | 「BNPL」という商標・UX ではなく、法的な支払期間・立替構造で見る |
| 3回 / 6回 / 12回 あと払い | 包括信用購入あっせんに近づく | 支払可能見込額、指定信用情報機関、過剰与信防止 |
| バーチャルカード型 BNPL | カード等の交付 / 付与として包括信用購入あっせん規制に乗りやすい | Paidy 行政処分ではカード等の極度額管理が問題化 |
| PSP が加盟店審査を代行 | 最終決定権限が誰にあるかで登録要否が変わる | アクワイアラーと PSP の契約実態 |
| 目的ローン | 金銭消費貸借でも販売契約との密接牽連性があれば個別信用購入あっせんになり得る | 販売店との提携、勧誘、手続一体性 |
| コード決済連携 | カード番号等の保存・連携・不正利用防止義務が問題になる | 非保持化、PCI DSS、EMV 3-Dセキュア等 |

## 関連項目

- [[payment-firms/paidy]]
- [[card-issuers/jcb]]
- [[card-issuers/orico]]
- [[card-issuers/jaccs]]
- [[card-issuers/credit-saison]]
- [[payment-firms/bnpl-landscape]]
- [[financial-licenses/INDEX]]

## 出典

- METI, 割賦販売法: https://www.meti.go.jp/policy/economy/consumer/credit/11kappuhanbaihou.html
- METI, 割賦販売法（後払分野）の概要・FAQ: https://www.meti.go.jp/policy/economy/consumer/credit/kappuhanbaihoatobaraibunyanogaiyofaq.html
- METI, 割賦販売法の一部を改正する法律について（令和2年法律第64号）: https://www.meti.go.jp/policy/economy/consumer/credit/R2kaiseinogaiyou.pdf
- METI, 「平均延滞率」及び「上限延滞率」の公表: https://www.meti.go.jp/policy/economy/consumer/credit/210414heikinentairituoyobijougenentairitu.html
- METI, 登録事業者一覧: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
- METI, 登録包括信用購入あっせん業者一覧 PDF: https://www.meti.go.jp/policy/economy/consumer/credit/tourokuhoukatsuichiran.pdf
- METI, 割賦販売法に基づく行政処分の状況（後払信用）: https://www.meti.go.jp/policy/economy/consumer/credit/atobaraigyouseisyobunnojoukyou.html
- Kanto METI / METI, 登録包括信用購入あっせん業者（株式会社Paidy）に対する行政処分 2024-10-03: https://www.meti.go.jp/policy/economy/consumer/credit/20241003.pdf

---

> [!info] 校核状态
> 信頼度: **likely**（2026-05-19）。2020改正の骨子、施行日、少額登録制度、acquiring / PSP 境界、Paidy 行政処分は METI / 関東経済産業局資料で確認。個別企業の現行サービス別該当性は、約款・登録情報・サービス仕様の追加確認が必要。
