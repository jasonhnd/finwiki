---
source: payments/account-to-account-payment-japan
source_hash: 36cad5cc1aee1693
lang: ja
status: machine
fidelity: ok
title: "日本の口座間決済ルート"
translated_at: 2026-06-02T16:33:58.476Z
---
# 日本の口座間決済ルート

## 概要

日本の口座間決済は、古典的な銀行振込、ウォレット残高、カード加盟店契約、コード決済の間に位置する。重要な管理上の問いは、**価値が預金口座から直接移動しているのか、資金移動 / 前払残高を経由しているのか、加盟店契約 / カードネットワーク層を経由しているのか**である。

このページは [[payments/INDEX|payments domain]]、[[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]]、[[payments/funds-transfer-service-providers-japan-index|funds-transfer registry]]、[[payments/japan-code-payment-competitive-map|code-payment competitive map]]、[[banking/quick-deposit-four-methods|quick deposit methods]]、[[financial-licenses/INDEX|JapanFG legal / financial licenses]] とあわせて使用する。

## レールマップ

| レール | 運営者 / 参照経路 | 顧客からの見え方 | FinWiki での読み方 |
|---|---|---|---|
| 古典的な銀行振込 | 銀行および全銀システム | 銀行口座から銀行口座へ、口座番号ベースであることが多い。 | 中核的な銀行決済レール。バランスシートや銀行システム構造が重要な場合は [[banking/INDEX|banking domain]] を使う。 |
| Cotra / ことら送金 | 全銀システムと連携する Cotra システム | 銀行アプリ、口座番号、電話番号、メールアドレス、または対応する口座識別子を使う少額即時個人送金。 | 預金取扱金融機関と資金移動業者をつなぐ A2A 相互運用レイヤー。 |
| Bank Pay | JEPPO / 日本電子決済推進機構 | 登録銀行口座からの QR / バーコード決済。口座引落型の口座決済。 | コード決済と競合する加盟店決済レールだが、直接口座資金を用いるロジックを持つ。 |
| J-Debit | JEPPO / J-Debit インフラ | 加盟店でのキャッシュカードベースのデビット。 | 旧来の口座直結加盟店デビット層であり、Bank Pay のインフラ基盤。 |
| ウォレットの銀行連携決済 | Pay アプリ、銀行 API / 口座接続、資金移動業者または前払式発行者 | ユーザーには PayPay / Merpay / au PAY / その他ウォレットのフローとして見える。 | 口座入金、ウォレット残高、加盟店契約、資金移動 / 前払分類を分けて読む必要がある。 |
| BaaS / 組込型銀行口座 | 銀行パートナーとアプリ提供者 | アプリが銀行またはウォレットのように見える。 | [[banking/baas-japan-landscape|BaaS Japan landscape]] と [[banking/mercari-bank-license-stack|Mercari Bank license stack]] を使う。 |

## Cotra システムの読み方

Zengin-Net の公式説明によれば、Cotra は 2020 少額決済インフラ構想を受けて五つの都市銀行により設立され、2022 年10月から Cotra システムを通じて 100,000 円以下の個人間送金サービスを開始した。また同説明では、全銀システムと既存の仕組みに新しい IT を組み合わせ、預金取扱金融機関だけでなく資金移動業者にも接続を開き、接続事業者の資金を日中 2 回、全銀システムを通じて決済するとされている。

FinWiki では、これにより Cotra は次の間をつなぐ有用な橋渡しになる。

- [[megabanks/mufg-bank|MUFG Bank]]、[[megabanks/sumitomo-mitsui-banking-corp|SMBC]]、[[megabanks/mizuho-bank|Mizuho Bank]]、[[megabanks/resona-bank|Resona Bank]]、その他の預金取扱銀行；
- [[regional-banks/ssnb|SBI Sumishin Net Bank]] や [[banking/minna-bank-baas-model|Minna Bank BaaS]] などのアプリ銀行・デジタル銀行ルート；
- [[payments/funds-transfer-service-providers-japan-index|Japan funds-transfer service providers registry]] を通じて接続する資金移動業者；
- [[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]] に含まれるユーザー向けウォレットおよびコード決済ルート。

## Bank Pay / J-Debit の読み方

JEPPO は、自らを口座直結決済インフラを通じて J-Debit と Bank Pay のキャッシュレスサービスを提供する組織として説明している。Bank Pay のページでは、Bank Pay を JEPPO が運営するスマートフォン決済サービスとし、銀行口座を持つユーザーが事前チャージなしに登録銀行口座から直接支払えると説明している。同ページでは、Bank Pay が J-Debit 決済インフラを利用し、複数口座の登録を可能にしていることも示されている。

これは重要である。消費者から見ると Bank Pay は QR 決済に見えるが、経済性とリスクの読み方は、先に残高を保有するウォレットとは異なる。

- 直接口座決済のレッグでは、保存された価値残高は不要。
- 銀行口座登録と認証レイヤーが中心になる。
- 加盟店受入、返金、不正対応、ユーザーサポートのルールはカードや前払レールと異なる。
- Bank Pay は Cotra 送金や請求書払い機能を表面化させることもできる。

## 商品境界

| 商品パターン | 主な問い | 典型的な経路 |
|---|---|---|
| Cotra による個人間送金 | 送金者は銀行顧客、ウォレット顧客、資金移動顧客のどれか。 | Cotra / 全銀連携 + 銀行または資金移動事業者の開示。 |
| 銀行口座からの QR 加盟店決済 | 口座から直接引き落とされるのか、先にウォレット残高へチャージされるのか。 | Bank Pay / 口座直結経路。 |
| 銀行チャージ後のウォレット決済 | 加盟店決済前に価値がウォレットに保存されるのか。 | [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]。 |
| PayPay / d払い / au PAY / Rakuten Pay による加盟店 QR 決済 | これはコード決済、カード加盟店契約、前払、資金移動のどの経済性か。 | [[payments/japan-code-payment-competitive-map|code-payment competitive map]] と [[payments/psp-merchant-settlement-risk|PSP settlement risk]]。 |
| 証券 / 暗号資産口座へのクイック入金 | レールは銀行振込、口座引落、API 指図、決済代行のどれか。 | [[banking/quick-deposit-four-methods|quick deposit methods]] と [[financial-licenses/INDEX|license stack]]。 |

## JapanFG での関連性

- メガバンクと中核銀行は中心的である。口座間決済は最終的に預金口座接続と銀行清算 / 決済ルールを必要とするため。
- [[payment-firms/recruit-mufg-business|Recruit MUFG Business]] や COIN+ 型モデルは、口座接続レールの上で加盟店・消費者の決済頻度を作ろうとした試みとして記録する。
- [[payment-firms/paypay|PayPay]]、[[payment-firms/merpay|Merpay]]、[[payment-firms/au-payment|au PAY]]、[[payment-firms/rakuten-edy|Rakuten Edy]] は引き続きウォレット / コード決済のアンカーだが、それらの銀行連携フローは純粋な口座間決済とは分けて扱う。
- [[regional-banks/sbi-shinsei-bank|SBI Shinsei Bank]]、[[regional-banks/fukuoka-fg|Fukuoka FG]]、地域銀行アプリのルートは重要である。Cotra と Bank Pay は銀行アプリを日常的な決済面に変え得るため。

## リスクと注意点

| リスク | 読み方 |
|---|---|
| 銀行口座不正 / 無権限引落 | 口座直結決済では、認証、端末移行、口座登録管理が重要になる。 |
| 消費者の混同 | QR 決済 UX は、その商品が口座直結、前払、資金移動、カード、ウォレット残高のどれかを隠し得る。 |
| 加盟店受入の分断 | Bank Pay、J-Debit、Cotra 対応アプリ、コード決済アプリは加盟店ネットワークが異なる。 |
| 決済タイミング | 顧客向けの即時完了と事業者間の最終決済は別レイヤー。 |
| 相互運用の限界 | Cotra の利用可否は参加アプリ・参加機関に依存し、Bank Pay の利用可否は登録銀行・加盟店に依存する。 |
| 規制分類 | 非銀行またはウォレット事業者が価値に触れる場合、資金移動・前払制度はなお重要。 |

## 調査チェックリスト

1. 価値の出発点が銀行預金口座、ウォレット残高、カード与信枠、前払残高のどれかを特定する。
2. 加盟店または受取人が受け取るのは銀行マネー、ウォレット価値、資金移動価値のどれかを特定する。
3. 運営者を確認する: 銀行、資金移動サービス提供者、前払式発行者、PSP、コード決済プラットフォーム。
4. Cotra については、現在の参加アプリ / 参加機関ページを確認する。
5. Bank Pay については、現在の参加金融機関と加盟店受入を確認する。
6. ライセンス主張を行う前に、会社ページを [[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]] と [[financial-licenses/INDEX|legal / financial licenses]] へ戻してリンクする。

## 関連項目

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

- Zengin-Net: Cotra システム連携の説明。
- Cotra: 公式サービス、P2P 送金、参加事業者ページ。
- JEPPO: 組織および Bank Pay 公式ページ。
- FSA: 資金移動業者レジストリ。
