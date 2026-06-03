---
source: payments/visa-gift-card-japan
source_hash: b634c30c54639f4b
lang: ja
status: machine
fidelity: ok
title: "Visa Gift Card Japan：Visa ブランドのオープンループ型プリペイド"
translated_at: 2026-06-02T16:33:58.521Z
---

# Visa Gift Card Japan：Visa ブランドのオープンループ型プリペイド

## ウィキ上の位置づけ

このエントリは以下にあります[[payments/INDEX|payments index]]とペアになるVisaブランドのプリペイド発行会社ページとして[[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]]FSA レジストリ ビューの場合、[[payments/japan-card-issuer-acquirer-processor-split|Japan card issuer / acquirer / processor split]]ブランドネットワークの役割コンテキストと[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]4 クラス スキーム ビューの場合。と比較してください[[payments/amazon-gift-card-japan|Amazon Gift Card]], [[payments/apple-gift-card-japan|Apple Gift Card]], [[payments/google-play-gift-card-japan|Google Play Gift Card]](クローズドループプラットフォームギフト)、[[payments/quo-card-prepaid|QUO Card]](オープンループのマルチマーチャントペーパー/デジタルギフト)、および[[JapanFG/kyash|Kyash]](Visa ブランドのウォレットとカードのハイブリッド)。 Visa ギフト カードは **ブランド ネットワーク プリペイド** カテゴリに分類され、世界中で Visa が受け入れられる場所であればどこでも使用できます。これは、コンビニエンス ストアや小売店のみでのクローズド ループ ギフト カードの受け入れとは構造的に異なります。日本の発行者は通常、[[JapanFG/life-card|Life Card]]under the **Vプリカ** product brand.

## 要約

**Visa ギフト カード ジャパン** とは、日本で発行された **Visa ブランドのプリペイド カード** のファミリーを指します。最も有名なのは、** が発行した **V プリカ (V プリカ)** 製品です。[[JapanFG/life-card|Life Card Co Ltd]]** ビザスキームライセンスに基づいて。 Vプリカは、**日本が発行する主要なVisaブランドのプリペイドカード**であり、世界中のVisaを受け入れる加盟店でご利用いただけます（オンラインおよび店頭で物理的なカードのオプションあり）。と区別する[[payments/amazon-gift-card-japan|Amazon Gift Card]] / [[payments/apple-gift-card-japan|Apple Gift Card]] / [[payments/google-play-gift-card-japan|Google Play Gift Card]](すべてクローズドループ/プラットフォーム制限あり)、Visa ギフトカードは **オープンループ/ブランドネットワークプリペイド**であり、Visa のグローバル加盟店ネットワーク全体で使用できます。この製品は、**クレジット カードの契約なしでのオンライン購入**、**受取人がどこで使うかを選択する必要があるギフト配布**、および従来のクレジット カード履歴のないユーザー向けの **カードレス キャッシュレス オンランプ**向けに位置付けられています。 Vプリカは、ライフカード独自のサービスではなく、第三者のVisa加盟店で受け付けられるため、金融庁のもとに第三者型の前払式支払い手段として登録されています。

## 発行者と運用構造

| 寸法 | 読む |
|---|---|
| 主な日本発行Visaギフトカード | **Vプリカ (V Preca)** by[[JapanFG/life-card\|Life Card Co Ltd]] |
| ブランドネットワーク | 見る（経由）[[JapanFG/visa-worldwide-japan\|Visa Worldwide Japan]]ライセンス） |
| FSAプリペイド登録 | Life Card Co Ltd は `daisan.xlsx` に第三者型前払式支払手段発行者として掲載されている（法人番号3020001086810, 、2011-04-01登録。発行者はカード / プリペイド / 保証隣接領域を含む）。 |
| Launch year (Vプリカ) | 2010 (Vプリカ initial launch under Life Card) |
| カードフォーマット | オンライン/バーチャルカード付き16-桁番号、CVV、有効期限 — 特定の製品バリエーションの物理カード オプションも |
| 宗派 | ¥500 〜円30,000 選択可能な購入、複数のトップアップレール |
| 配電レール | オンライン直接購入、コンビニ支払い、ATM購入、Vプリカサイトチャージ |
| 承諾 | Visa を受け入れる加盟店 (世界中のオンラインおよび店舗) |
| 有効期限 | カードごとに割り当てられた有効期間（通常は1-2 発行からの年数/最後の請求) |

## 法的根拠: サードパーティのプリペイド (Visa ブランドのネットワーク アクセス)

Vプリカ is registered as **第三者型前払式支払手段** under[[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act (資金決済法)]]章3 なぜなら、支出面は発行会​​社独自のサービスではなく、Visa ネットワーク内の **サードパーティ販売者**だからです。主な規制上の影響:

- [[JapanFG/life-card|Life Card]]発行者としては[[payments/prepaid-payment-instrument-issuers-japan-index|FSA `daisan.xlsx`]].
- 半年ごとに法務局に**未使用残金**を供託。
- **発行中止時を除き、元の支払者への返金はありません** — Vプリカ残高はデフォルトで現金に返金できません。
- 取得者側の加盟店の受け入れ、交換フロー、チャージバック/紛争処理については **ビザ制度ルール** に基づいて運営されます — を参照してください。[[payments/japan-interchange-and-merchant-fee-stack|Japan interchange and merchant fee stack]]ブランドネットワークの経済的背景について。
- 日本クレジット協会のカード本人確認準拠（[[payments/japan-card-security-authentication-controls|J-CSC]]) 詐欺/認証制御は発行者側に適用されます。

## Visa ブランドネットワークの優位性

クローズド ループ プラットフォームのギフト カードとの構造的な違いは、**世界的な Visa の受け入れ実績**です。

| 寸法 | Vプリカ (Visa brand network) | Amazon / Apple / Google ギフト カード (クローズドループ) |
|---|---|---|
| 支出面 | 世界中のビザを受け入れる加盟店 | プラットフォーム限定（Amazon.co.jp / Apple / Google Playのみ） |
| オンラインでのクロスマーチャントの使用 | はい - あらゆる Visa 対応サイトで動作します | いいえ — プラットフォームに限定されます |
| 物理的なカード支払い | 限定的（Vプリカは主にオンライン/仮想であり、選択された物理カードのバリエーションが存在します） | 物理的なカード支払い面なし (デジタル コードのみ) |
| 国境を越えた購入 | はい - Visaを受け入れる海外の加盟店で動作します | 制限付き (プラットフォーム固有) |
| ギフトの受取人の選択 | ワイド — 受取人は任意の Visa 加盟店を選択します | 狭い — 受信者はプラットフォームに制限されています |
| 発行者 | ライフカード（日本） | Amazon / Apple / Google (プラットフォーム運営者) |
| 金融庁登録クラス | 第三者 | 自家型 (closed-loop) |

そのトレードオフは、Visa ブランドネットワークへのアクセスには、Visa スキーム手数料、交換フロー、および取得者側の販売業者の経済性が伴うということです。クローズドループのギフトカードは定義上、これらを回避します。

## ユースケース

| 使用事例 | 説明 |
|---|---|
| **クレジットカード契約なしのオンライン購入** | 購入者はVプリカを購入し、個人のクレジットカードを登録せずにVisa対応サイトで使用 |
| **受取人を選択できるギフト配布** | 送信者は、Visa ネットワーク全体でどこで使うかを選択した受信者に V プリカを提供します |
| **海外販売者からのカードレスオンライン購入** | Vプリカは海外のVisa受け入れサイトで動作します。クレジットカード契約に代わる消費者保護 |
| **キャッシュレスの導入** | カードレス層（未成年者、クレジットカードを持たない成人）は、Vプリカをコンビニエンスストアやオンラインで購入し、Visaで購入できるようになります |
| **プライバシーを考慮したオンライン購入** | 一部のユーザーは、定期的なクレジット カード請求のフットプリントを望まない取引の場合、クレジット カードよりも Vプリカを好みます。 |
| **サブスクリプションキャンセルの安全性** | 残高制限のあるカードはサブスクリプションの自動更新リスクを制限します |

## 流通・購入経路

| レール | 説明 |
|---|---|
| **オンラインで直接購入** | Vプリカ site direct purchase with various denominations |
| **コンビニ決済** | Pay at convenience store for online-ordered Vプリカ |
| **ATMでの購入** | Pay-easy / ATMレール |
| **トップアップ/リチャージ** | Existing Vプリカ holders can top up balance via Vプリカ site / convenience-store payment / ATM |
| **プロモーションキャンペーンの配信** | プロモーションギフト特典 |

コンビニ店頭の物理的なギフトカードとの比較（[[payments/amazon-gift-card-japan|Amazon]] / [[payments/apple-gift-card-japan|Apple]] / [[payments/google-play-gift-card-japan|Google Play]]）、Vプリカはコンビニエンスストアで**棚に陳列されるのではなく、主にオンラインで購入されます**。コンビニエンスストアの統合は、主にオンラインで注文されたVプリカの支払いチャネルであり、店頭に陳列される商品ではありません。

## 日本のその他 Visa ブランドプリペイド

Vプリカは主要なものですが、日本で唯一のVisaブランドのプリペイドではありません。その他の Visa ブランドのプリペイド カードには次のものがあります。

- **[[JapanFG/kyash|Kyash]]Visa カード** — Kyash Inc. が発行する、ウォレットとプリペイドの Visa カードのハイブリッド。 Vプリカ（シングルロードギフト/カードレス購入）とは異なるユースケース（リアルタイムウォレット+Visaプリペイド発行）を提供します。
- **さまざまなウォレット発行の Visa ブランドプリペイド** - 複数のフィンテック ウォレットが、ウォレットのサービスの一部として Visa プリペイドを発行しています (例:[[JapanFG/paypay|PayPay]]カード、さまざまな小型ウォレット Visa カード）。
- **[[JapanFG/au-payment|au PAY]]プリペイド カード** — au PAY ウォレットに関連して発行された Visa または Mastercard プリペイド カード。
- **銀行発行のプリペイド** — 一部の銀行発行の Visa プリペイド製品。

**Visa ギフト カード** (シングル ロード ギフト志向) と **Visa ブランド ウォレット プリペイド** (チャージして使うウォレット) の境界はやや曖昧です。どちらも Visa スキームの受け入れを使用していますが、製品の位置付けと顧客の使用例は異なります。

## KPI スナップショット

| メトリック | 読む |
|---|---|
| Vプリカ cumulative issuance | 素材数百万カード規模（ライフカード・Vプリカ公開） |
| 世界中のビザ受け入れ可能な加盟店ネットワーク | ~80世界中の M 加盟店 (Visa グループの開示) |
| Vプリカ denomination range | ¥500 〜円30,000  |
| 補充レールの利用可能性 | コンビニ、ATM、オンラインサイト、複数のチャージポイント |

正確な数字はライフカードの開示情報とVプリカのサイトに掲載されています。

## 戦略：カードレス・オンライン利用向けブランドネットワーク型プリペイド

Visa Gift Card Japan (principally Vプリカ) strategic role:

1. **ブランド ネットワークの普遍性** — ビザの受け入れ実績は、クローズド ループ プラットフォームのギフト カードを大幅に上回っています。
2. **カードレス オンライン購入** — クレジット カードの請求詳細をオンライン販売者に伝えたくないユーザーに役立ちます。
3. **受取人が選択できるギフト配布** — 受取人にとって幅広い支出対象範囲。
4. **国境を越えた購入機能** — 海外販売者ビザの受け入れ。
5. **残高制限付きサブスクリプションの安全性** — プリペイド残高により、サブスクリプションのサインアップ時の自動更新リスクが制限されます。

## 関連項目

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
- [[JapanFG/life-card]]
- [[JapanFG/visa-worldwide-japan]]
- [[JapanFG/kyash]]
- [[INDEX|FinWiki index]]

## 出典

- Visa Japan プリペイドカードのページ (visa.co.jp/pay-with-visa/find-a-card/prepaid-cards.html)。
- Vプリカ official site (vpc.lifecard.co.jp).
- ビザ・ジャパン コーポレートサイト（visa.co.jp）。
- ライフカード コーポレートサイト（lifecard.co.jp）。
- FSA、`daisan.xlsx` — サードパーティ前払商品発行者登録リスト (ライフ カード エントリ、登録済み)2011-04-01、法人番号3020001086810).
- FSA 前払式支払手段ポリシーのページ。
- 日本クレジット協会 — カードのセキュリティ ガイドライン。
- 経済産業省のキャッシュレス政策ページ。
