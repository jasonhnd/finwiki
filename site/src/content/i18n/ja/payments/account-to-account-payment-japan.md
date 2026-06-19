---
source: payments/account-to-account-payment-japan
source_hash: 3f3af38bae18064d
lang: ja
status: machine
fidelity: ok
title: "日本の口座間（account-to-account）決済ルート"
translated_at: 2026-06-19T06:09:18.149Z
---

# 日本の口座間（account-to-account）決済ルート

## 概要

日本の口座間決済は、従来型の銀行振込、ウォレット残高、カードアクワイアリング、コード決済の間に位置する。重要な制御上の問いはこうだ：**価値は預金口座から直接動いているのか、資金移動 / 前払い残高を通じて動いているのか、それとも加盟店アクワイアリング / カードネットワークの層を通じて動いているのか？**

このページは [[payments/INDEX|payments domain]], [[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]], [[payments/funds-transfer-service-providers-japan-index|funds-transfer registry]], [[payments/japan-code-payment-competitive-map|code-payment competitive map]], [[banking/quick-deposit-four-methods|quick deposit methods]], [[financial-licenses/INDEX|JapanFG legal / financial licenses]] と併せて使うこと。

## レールマップ

| レール | オペレーター / ソースルート | 顧客から見た姿 | FinWiki の読み方 |
|---|---|---|---|
| 従来型銀行振込 | 銀行と全銀システム | 銀行口座から銀行口座へ、多くは口座番号ベース。 | 中核的な銀行決済レール；バランスシートや銀行システムの構造が問題になる場合は [[banking/INDEX|banking domain]] を使う。 |
| ことら / ことら送金 | 全銀システムと連携することらシステム | 銀行アプリ、口座番号、電話番号、メール、または互換性のある口座識別子を使った少額の即時個人送金。 | 預金取扱機関と資金移動業者の間の A2A 相互運用レイヤー。 |
| Bank Pay | JEPPO / 日本電子決済推進機構 | 登録した銀行口座からの QR / バーコード決済で、口座引落型の決済を行う。 | コード決済と競合するが、口座直接資金供給のロジックを持つ加盟店決済レール。 |
| J-Debit | JEPPO / J-Debit インフラ | 加盟店でのキャッシュカードベースのデビット。 | レガシーな口座直接の加盟店デビット層であり、Bank Pay のインフラ基盤。 |
| ウォレットの銀行連携決済 | Pay アプリ、銀行 API / 口座接続、資金移動または前払い業者 | ユーザーには PayPay / Merpay / au PAY / その他ウォレットのフローとして見える。 | 口座からの資金供給、ウォレット残高、加盟店アクワイアリング、資金移動 / 前払いの分類を切り分ける必要がある。 |
| BaaS / 組込型銀行口座 | 銀行パートナーとアプリ提供者 | アプリは銀行やウォレットのように見える。 | [[banking/baas-japan-landscape|BaaS Japan landscape]] と [[banking/mercari-bank-license-stack|Mercari Bank license stack]] を使う。 |

## ことらシステムの読み方

全銀ネットの公式説明によれば、ことらは5つの都市銀行による 2020 少額決済インフラ構想の後に設立され、100,000 円以下の個人送金向けに 2022 年10月からことらシステムを通じたサービスが開始された。また、全銀システムと既存の仕組みをより新しい IT と組み合わせ、預金取扱金融機関だけでなく資金移動業者にも接続を開放し、接続業者の資金を全銀システムを通じて日中に2回決済するシステムとして説明している。

FinWiki にとって、これによりことらは以下の間の有用な架け橋となる：

- [[megabanks/mufg-bank|MUFG Bank]], [[megabanks/sumitomo-mitsui-banking-corp|SMBC]], [[megabanks/mizuho-bank|Mizuho Bank]], [[megabanks/resona-bank|Resona Bank]]、その他の預金取扱銀行；
- [[regional-banks/ssnb|SBI Sumishin Net Bank]] や [[banking/minna-bank-baas-model|Minna Bank BaaS]] のようなアプリ銀行・デジタル銀行ルート；
- [[payments/funds-transfer-service-providers-japan-index|Japan funds-transfer service providers registry]] を経由する資金移動業者；
- [[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]] のユーザー向けウォレット・コード決済ルート。

## Bank Pay / J-Debit の読み方

JEPPO は、口座直接決済インフラを通じて J-Debit と Bank Pay のキャッシュレスサービスを提供していると説明している。その Bank Pay ページでは、Bank Pay を JEPPO が運営するスマートフォン決済サービスとして説明し、銀行口座を持つユーザーが利用でき、事前のチャージなしに登録した銀行口座から直接決済できるとしている。同ページはまた、Bank Pay が J-Debit の決済インフラを利用し、複数口座の登録を可能にすると述べている。

これが重要なのは、Bank Pay は消費者には QR 決済のように見えるが、その経済的・リスク的な読み方は、まず残高を蓄えるウォレットとは異なるからである：

- 口座直接決済のレッグでは、ストアドバリュー残高は不要；
- 銀行口座の登録と認証の層が中心；
- 加盟店での受入、返金、不正対応、ユーザーサポートのルールがカードや前払いのレールとは異なる；
- Bank Pay はことら送金や料金支払の機能も表示できる。

## 商品の境界

| 商品パターン | 主要な問い | 典型的なルート |
|---|---|---|
| ことらによる個人間送金 | 送り手は銀行顧客か、ウォレット顧客か、資金移動顧客か？ | ことら / 全銀連携＋銀行または資金移動業者の開示。 |
| 銀行口座からの QR 加盟店決済 | 口座が直接引き落とされるのか、それともまずウォレット残高がチャージされるのか？ | Bank Pay / 口座直接ルート。 |
| 銀行チャージ後のウォレット決済 | 加盟店決済の前に価値がウォレットに蓄えられているか？ | [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]。 |
| PayPay / d払い / au PAY / 楽天ペイによる加盟店 QR 決済 | これはコード決済か、カードアクワイアリングか、前払いか、資金移動の経済性か？ | [[payments/japan-code-payment-competitive-map|code-payment competitive map]] と [[payments/psp-merchant-settlement-risk|PSP settlement risk]]。 |
| 証券 / 暗号資産口座へのクイック入金 | レールは銀行振込か、口座引落か、API 指図か、収納代行ルートか？ | [[banking/quick-deposit-four-methods|quick deposit methods]] と [[financial-licenses/INDEX|license stack]]。 |

## JapanFG との関連

- 口座間決済は最終的に預金口座の接続性と銀行のクリアリング / 決済ルールを必要とするため、メガバンクと中核銀行が中心となる。
- [[payment-firms/recruit-mufg-business|Recruit MUFG Business]] や COIN+ 型モデルは、口座連携レールを軸に加盟店・消費者の決済頻度を構築しようとする試みとして記録される。
- [[payment-firms/paypay|PayPay]], [[payment-firms/merpay|Merpay]], [[payment-firms/au-payment|au PAY]], [[payment-firms/rakuten-edy|Rakuten Edy]] は依然としてウォレット / コード決済のアンカーであり続けるが、その銀行連携フローは純粋な口座間決済とは別である。
- [[regional-banks/sbi-shinsei-bank|SBI Shinsei Bank]], [[regional-banks/fukuoka-fg|Fukuoka FG]]、および地方銀行のアプリルートは、ことらと Bank Pay が銀行アプリを日常的な決済サーフェスに変えられるため重要である。

## リスクと注意点

| リスク | 読み方 |
|---|---|
| 銀行口座の不正 / 不正引落 | 口座直接決済は、認証、端末移行、口座登録の制御を重要にする。 |
| 消費者の混乱 | QR 決済の UX は、その商品が口座直接か、前払いか、資金移動か、カードか、ウォレット残高かを隠しうる。 |
| 加盟店受入の断片化 | Bank Pay、J-Debit、ことら対応アプリ、コード決済アプリはそれぞれ異なる加盟店ネットワークを持つ。 |
| 決済タイミング | 顧客向けの即時完了と、業者間の最終決済は別の層である。 |
| 相互運用性の限界 | ことらの利用可否は参加するアプリと機関に依存する；Bank Pay の利用可否は登録銀行と加盟店に依存する。 |
| 規制上の分類 | 非銀行やウォレット業者が価値に触れる場合、資金移動および前払いの規制が依然として問題になる。 |

## 調査チェックリスト

1. 価値が銀行預金口座、ウォレット残高、カードライン、前払い残高のいずれから始まるかを特定する。
2. 加盟店または受取人が銀行マネー、ウォレット価値、資金移動価値のいずれを受け取るかを特定する。
3. オペレーターを確認する：銀行、資金移動業者、前払い発行者、PSP、コード決済プラットフォームのいずれか。
4. ことらについては、現行の参加アプリ / 機関のページを確認する。
5. Bank Pay については、現行の参加金融機関と加盟店受入を確認する。
6. ライセンスの主張を行う前に、会社ページを [[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]] と [[financial-licenses/INDEX|legal / financial licenses]] にリンクバックさせる。

## 関連

- [[payments/INDEX]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/funds-transfer-service-providers-japan-index]]
- [[payments/japan-code-payment-competitive-map]]
- [[payments/psp-merchant-settlement-risk]]
- [[banking/quick-deposit-four-methods]]
- [[banking/baas-japan-landscape]]
- [[financial-licenses/INDEX]]
- [[payment-firms/recruit-mufg-business]]
- [[payment-firms/paypay]]
- [[payment-firms/merpay]]
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[INDEX|FinWiki index]]

## 出典

- 全銀ネット：ことらシステム連携の説明。
- ことら：公式サービス、P2P 送金、参加業者のページ。
- JEPPO：組織および Bank Pay の公式ページ。
- 金融庁：資金移動業者登録簿。
