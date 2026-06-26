---
source: payments/visa-gift-card-japan
source_hash: 73f68a9214d18dad
lang: ja
status: machine
fidelity: ok
title: "Visa Gift Card Japan: Visa-branded open-loop 前払式"
translated_at: 2026-06-19T06:09:18.137Z
---

# Visa Gift Card Japan: Visa-branded open-loop 前払式

## ウィキ上の位置づけ

本エントリは [[payments/INDEX|payments index]] の下に、Visa ブランドのプリペイド発行者ページとして位置し、FSA レジストリビューについては [[payments/prepaid-payment-instrument-issuers-japan-index|前払式支払手段発行会社 registry]] と、ブランドネットワークの役割の文脈については [[payments/japan-card-issuer-acquirer-processor-split|Japan card 発行会社 / アクワイアラ / processor split]] と、四区分のスキームビューについては [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] と対になる。[[payments/amazon-gift-card-japan|Amazon Gift Card]]、[[payments/apple-gift-card-japan|Apple Gift Card]]、[[payments/google-play-gift-card-japan|Google Play Gift Card]]（クローズドループのプラットフォームギフト）、[[payments/quo-card-prepaid|QUO Card]]（オープンループのマルチ加盟店の紙／デジタルギフト）、[[payment-firms/kyash|Kyash]]（Visa ブランドのウォレットカードハイブリッド）と比較すること。Visa Gift Card は **ブランドネットワーク・プリペイド** のカテゴリに位置する — グローバルに Visa が受け入れられる場所ならどこでも使え、クローズドループのギフトカードのコンビニ・小売限定の受け入れとは構造的に異なる。日本での発行者は典型的に **Vプリカ** という製品ブランドのもとでの [[card-issuers/life-card|Life Card]] である。

## TL;DR

**Visa Gift Card Japan** は、日本で発行される **Visa ブランドのプリペイドカード** のファミリーを指す — 最も顕著なのは Visa スキームのライセンシングのもとで **[[card-issuers/life-card|Life Card Co Ltd]]** が発行する **Vプリカ (V Preca)** 製品である。Vプリカ は、世界中で Visa を受け入れるあらゆる加盟店（オンラインおよび店舗での物理カードオプション付き）で使える **日本発行の主要な Visa ブランドプリペイドカード** である。[[payments/amazon-gift-card-japan|Amazon Gift Card]] / [[payments/apple-gift-card-japan|Apple Gift Card]] / [[payments/google-play-gift-card-japan|Google Play Gift Card]]（いずれもクローズドループ／プラットフォーム限定）とは異なり、Visa Gift Card は **オープンループ／ブランドネットワーク・プリペイド** であり — Visa のグローバル加盟店ネットワーク全体で使える。この製品は **クレジットカードのコミットメントなしのオンライン購入**、**受取人が支出先を選ぶべきギフト配布**、そして従来のクレジットカード履歴を持たないユーザー向けの **カードレスのキャッシュレス・オンランプ** に位置付けられる。Vプリカ は、受け入れが Life Card 自身のサービスではなく第三者の Visa 受け入れ加盟店で行われるため、FSA のもとで 第三者型前払式支払手段 として登録されている。

## 発行会社 and operational structure

| 項目 | 読み方 |
|---|---|
| Principal Japan-issued Visa Gift Card | [[card-issuers/life-card\|Life Card Co Ltd]] による **Vプリカ (V Preca)** |
| Brand network | Visa（[[payment-firms/visa-worldwide-japan\|Visa Worldwide Japan]] ライセンス経由） |
| FSA 前払式 registration | Life Card Co Ltd は `daisan.xlsx` に 第三者型プリペイド発行者として掲載（法人番号 3020001086810, 登録 2011-04-01 — 発行者はカード／プリペイド／保証の隣接領域をカバー） |
| Launch year (Vプリカ) | 2010 （Life Card のもとでの Vプリカ当初ローンチ） |
| Card format | 16桁の番号、CVV、有効期限を持つオンライン／バーチャルカード — 特定の製品バリアントでは物理カードオプションも |
| Denominations | ¥500 から ¥30,000 まで選択可能な購入、複数のトップアップレール |
| Distribution rails | オンライン直接購入、コンビニ支払い、ATM 購入、Vプリカサイトチャージ |
| 受け入れ先 | Visa を受け入れるあらゆる加盟店（グローバルのオンラインおよび店舗） |
| Expiry | カードごとに割り当てられる有効期間（典型的には発行／最終チャージから 1-2 年） |

## Legal basis: 第三者型前払式 (Visa brand network access)

Vプリカ は、支出のサーフェスが発行者自身のサービスではなく Visa ネットワーク内の **第三者加盟店** であるため、[[payments/funds-transfer-vs-prepaid-boundary|資金決済法]] 第 3 章のもとで **第三者型前払式支払手段** として登録されている。主要な規制上の帰結：

- 発行者としての [[card-issuers/life-card|Life Card]] は [[payments/prepaid-payment-instrument-issuers-japan-index|FSA `daisan.xlsx`]] に掲載される。
- 法務局への半期ごとの **未使用残高の供託**。
- **発行停止時を除き原支払者への払い戻しなし** — Vプリカ の残高はデフォルトで現金への払い戻し不可。
- アクワイアラー側の加盟店受け入れ、インターチェンジのフロー、チャージバック／紛争処理について **Visa スキームルール** のもとで運用される — ブランドネットワークの経済的文脈については [[payments/japan-interchange-and-merchant-fee-stack|Japan interchange and 加盟店 fee stack]] を参照。
- 不正／認証のコントロールについて日本クレジット協会（[[payments/japan-card-security-authentication-controls|J-CSC]]）とのカード識別コンプライアンスが発行者側に適用される。

## Visa brand network advantage

クローズドループのプラットフォームギフトカードとの構造的な区別は、**グローバルな Visa 受け入れフットプリント** である：

| 項目 | Vプリカ (Visa brand network) | Amazon / Apple / Google Gift Card (closed-loop) |
|---|---|---|
| Spending surface | 世界中の Visa 受け入れ加盟店ならどこでも | プラットフォーム限定（Amazon.co.jp / Apple / Google Play のみ） |
| Online cross-加盟店 use | はい — Visa を受け入れるあらゆるサイトで機能 | いいえ — プラットフォームに限定 |
| Physical card payment | 限定的（Vプリカ は主にオンライン／バーチャル；選択された物理カードバリアントが存在） | 物理カード支払いのサーフェスなし（デジタルコードのみ） |
| Cross-border purchase | はい — Visa を受け入れる海外加盟店で機能 | 限定的（プラットフォーム固有） |
| Gift recipient choice | 広い — 受取人があらゆる Visa 加盟店を選択 | 狭い — 受取人はプラットフォームに限定 |
| 発行会社 | Life Card（日本） | Amazon / Apple / Google（プラットフォーム運営者） |
| FSA registration class | 第三者型 (third-party) | 自家型 (closed-loop) |

トレードオフは、Visa ブランドネットワークへのアクセスが Visa スキーム手数料、インターチェンジのフロー、アクワイアラー側の加盟店エコノミクスを伴うことである — クローズドループのギフトカードは定義上これらを回避する。

## Use cases

| Use case | Description |
|---|---|
| **クレジットカードのコミットメントなしのオンライン購入** | 購入者が Vプリカ を購入し、個人のクレジットカードを登録せずに Visa 受け入れサイトで使う |
| **受取人の選択を伴うギフト配布** | 送り手が Vプリカ を受取人に渡し、受取人が Visa ネットワーク全体で支出先を選ぶ |
| **海外加盟店からのカードレスオンライン購入** | Vプリカ は海外の Visa 受け入れサイトで機能；クレジットカードのコミットメントに代わる消費者保護の代替手段 |
| **キャッシュレス・オンランプ** | カードレスのコホート（未成年者、クレジットカードを持たない成人）がコンビニ／オンラインで Vプリカ を購入し、Visa 受け入れの購入能力を得る |
| **プライバシーを意識したオンライン購入** | 一部のユーザーは、繰り返しのクレジットカード請求の足跡を残したくない取引について、クレジットカードよりも Vプリカ を好む |
| **サブスクリプション解約の安全性** | 残高限定のカードがサブスクリプションの自動更新リスクを限定する |

## Distribution rails

| Rail | Description |
|---|---|
| **オンライン直接購入** | さまざまな額面での Vプリカサイトの直接購入 |
| **コンビニ支払い** | オンライン注文した Vプリカ のためのコンビニでの支払い |
| **ATM 購入** | Pay-easy / ATM レール |
| **トップアップ／リチャージ** | 既存の Vプリカ保有者は Vプリカサイト／コンビニ支払い／ATM 経由で残高をトップアップできる |
| **プロモーションキャンペーン配布** | プロモーションのギフト報酬 |

コンビニ棚の物理ギフトカード（[[payments/amazon-gift-card-japan|Amazon]] / [[payments/apple-gift-card-japan|Apple]] / [[payments/google-play-gift-card-japan|Google Play]]）と比較すると、Vプリカ は **コンビニで棚に陳列されるのではなく主にオンラインで購入される** — コンビニの統合は、主にオンライン注文した Vプリカ の支払いチャネルであり、棚陳列の製品ではない。

## Other Visa-branded 前払式 in Japan

Vプリカ は日本における主要だが唯一の Visa ブランドプリペイドではない。他の Visa ブランドプリペイドカードには以下が含まれる：

- **[[payment-firms/kyash|Kyash]] Visa card** — Kyash Inc. が発行するウォレット・アンド・プリペイド Visa カードのハイブリッド；Vプリカ（単一ロードのギフト／カードレス購入）とは異なるユースケース（リアルタイムウォレット + Visa プリペイド発行）に対応。
- **各種ウォレット発行の Visa ブランドプリペイド** — 複数のフィンテックウォレットがそのウォレット提供の一部として Visa プリペイドを発行する（例：[[payment-firms/paypay|PayPay]] card、各種の小規模なウォレット Visa カード）。
- **[[payment-firms/au-payment|au PAY]] 前払式 card** — au PAY ウォレットと連携して発行される Visa または Mastercard プリペイドカード。
- **銀行発行プリペイド** — 選択された銀行発行の Visa プリペイド製品。

**Visa Gift Card**（単一ロードのギフト志向）と **Visa ブランドウォレットプリペイド**（リチャージ・アンド・スペンドのウォレット）の境界はやや曖昧である — どちらも Visa スキームの受け入れを使うが、製品のポジショニングと顧客のユースケースが異なる。

## KPI snapshot

| 指標 | 読み方 |
|---|---|
| Vプリカ cumulative issuance | 相当な数百万枚規模（Life Card / Vプリカ公開開示） |
| Visa-accepting 加盟店 network globally | ~80M の世界中の加盟店（Visa グループ開示） |
| Vプリカ denomination range | ¥500 から ¥30,000 まで |
| Top-up rail availability | コンビニ、ATM、オンラインサイト、複数のチャージポイント |

正確な数字は Life Card の開示と Vプリカサイトに存在する。

## Strategy: brand-network 前払式 for cardless and online use

Visa Gift Card Japan（主に Vプリカ）の戦略的役割：

1. **ブランドネットワークの普遍性** — Visa の受け入れフットプリントはクローズドループのプラットフォームギフトカードを大きく上回る。
2. **カードレスのオンライン購入** — オンライン加盟店にクレジットカードの請求情報をコミットしたくないユーザーに対応する。
3. **受取人選択のギフト配布** — 受取人にとって広い支出のサーフェス。
4. **クロスボーダー購入能力** — 海外加盟店での Visa 受け入れ。
5. **残高限定のサブスクリプション安全性** — プリペイド残高がサブスクリプション登録時の自動更新リスクを限定する。

## Related

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/amazon-gift-card-japan]]
- [[payments/apple-gift-card-japan]]
- [[payments/google-play-gift-card-japan]]
- [[payments/quo-card-prepaid]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/japan-interchange-and-merchant-fee-stack]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[card-issuers/life-card]]
- [[payment-firms/visa-worldwide-japan]]
- [[payment-firms/kyash]]
- [[INDEX|FinWiki index]]

## Sources

- Visa Japan prepaid cards page (visa.co.jp/pay-with-visa/find-a-card/prepaid-cards.html).
- Vプリカ official site (vpc.lifecard.co.jp).
- Visa Japan corporate site (visa.co.jp).
- Life Card corporate site (lifecard.co.jp).
- FSA, `daisan.xlsx` — third-party prepaid-instrument issuer registration list (Life Card entry, registered 2011-04-01, corporate number 3020001086810).
- FSA prepaid payment instruments policy page.
- Japan Credit Association — card security guidelines.
- METI cashless policy page.
