---
source: payments/japan-card-security-authentication-controls
source_hash: 726a81f3eecdaee7
lang: ja
status: machine
fidelity: ok
title: "Japan card security and authentication controls"
translated_at: 2026-06-19T06:09:18.109Z
---

# Japan card security and authentication controls

## Overview

日本の EC カードセキュリティは「3-D Secure」だけではない。有用な統制スタックは次のとおり：カードデータ保護 → 加盟店の脆弱性統制 → EMV 3-D Secure 認証 → 不正監視 → アクワイアラ／PSP／加盟店の情報共有 → チャージバックと是正。

このページは [[payments/japan-card-issuer-acquirer-processor-split|card 発行会社 / アクワイアラ / processor split]]、[[payments/card-acquiring-japan-stack|card acquiring stack]]、[[payments/psp-merchant-settlement-risk|PSP 決済 risk]]、[[payments/credit-purchase-card-operators-japan-index|credit / card 事業者 registry]]、[[card-issuers/installment-sales-act-2020-amendment|Installment Sales Act 2020 amendment]] と併せて使うこと。

## Guideline Snapshot

| Version / route | Public-source role | Wiki reading |
|---|---|---|
| METI 2025-03-05 release | クレジットカードセキュリティガイドラインの改訂を公表。 | EC 加盟店のセキュリティ強化に関する公的政策アンカー。 |
| Japan Credit Association guideline 6.1 | カードセキュリティ統制に関する現行の主要な公的ガイドラインソース。 | 非保持、EC セキュリティ、EMV 3-D Secure、不正統制の語彙に使用。 |
| PCI DSS | 国際的なカードデータセキュリティ標準。 | カード会員データ環境および加盟店／PSP のセキュリティ統制に使用。 |
| EMV 3-D Secure | 認証プロトコル／メッセージング標準。 | リスクベース認証とチャレンジフロー分析に使用。 |
| JCB 加盟店 / brand pages | イシュア、アクワイアラ、ブランド、加盟店、認証の各役割の平易なモデル。 | すべての当事者を「カード会社」に一括りにすることを切り分けるために使用。 |

## Actor And Responsibility Map

| Actor | Japanese / market term | Core responsibility | Security artifact |
|---|---|---|---|
| 発行会社 | イシュア / カード発行会社 | カード会員の審査、オーソリゼーション、ACS／認証判断、請求、不正監視。 | オーソリゼーションログ、ACS 結果、カード会員の異議申立／不正監視。 |
| Card brand / network | 国際ブランド / ブランド | ネットワークルール、ディレクトリルーティング、ブランドセキュリティルール、相互運用性。 | スキームルール、ディレクトリサーバルーティング、ブランドコンプライアンス。 |
| アクワイアラ | アクワイアラ / 加盟店契約会社 | 加盟店の引受審査、加盟店契約、決済、チャージバックルーティング。 | 加盟店のデューデリジェンス、セキュリティ状況、チャージバック監視。 |
| PSP / gateway | 決済代行 / PSP | 決済ページ、トークン化、3DS Server 連携、取引データ、消込。 | トークン化設計、3DS 取引ログ、不正フィルタ。 |
| 加盟店 | EC 加盟店 | サイトセキュリティ、顧客認証 UX、配送／返金統制、証跡保持。 | 脆弱性統制、注文ログ、配送／返金証跡。 |
| 3DS Server / DS / ACS | 3-D Secure components | データ転送、ディレクトリルーティング、イシュア認証、チャレンジ／フリクションレスフロー。 | AReq / ARes / チャレンジ結果、ECI / CAVV スタイルの認証データ。 |

## Control Stack

| Layer | Threat | Control objective | Primary owner | Secondary owner |
|---|---|---|---|---|
| Card-data protection | カード会員データの漏洩。 | 可能な限りカードデータを保存しない；PCI スコープを統制下に保つ。 | 加盟店 / PSP | アクワイアラ |
| Tokenization / non-retention | 生のカードデータの露出。 | カードデータの取り扱いをトークン／リダイレクト／JavaScript トークンモデルに置き換える。 | PSP | 加盟店 |
| 加盟店 vulnerability control | EC サイトの侵害、フォームジャッキング、アカウント乗っ取り。 | EC サイト、プラグイン、管理者アカウント、決済ページを堅牢に保つ。 | 加盟店 | PSP / EC system provider |
| EMV 3-D Secure | 不正なカード非提示利用。 | リスクベースのイシュア認証とチャレンジフローを追加する。 | 発行会社 / ACS | 加盟店 / PSP / brand |
| Fraud monitoring | クレジットマスター／BIN 攻撃、異常な注文パターン、転送詐欺。 | 疑わしい取引と配送を検知し阻止する。 | 発行会社 / アクワイアラ / PSP | 加盟店 |
| Chargeback / dispute | 損失配分と証跡の不備。 | 注文、認証、配送、返金、コミュニケーションの証跡を保全する。 | アクワイアラ / 加盟店 | 発行会社 / PSP |

## EMV 3-D Secure Route

| Step | Component | Research question |
|---|---|---|
| Checkout | 加盟店 / PSP | リスクベース認証に十分なほど取引データは完全か？ |
| 3DS request | 3DS Server | PSP または加盟店は 3DS Server を正しく連携しているか？ |
| Directory routing | Directory Server | どのブランド／カードルートが認証要求を受け取るか？ |
| 発行会社 decision | ACS / 発行会社 | フローはフリクションレス、チャレンジ、拒否、または利用不可のいずれか？ |
| Authorization | 発行会社 / アクワイアラ | 認証結果とオーソリゼーション結果はどのように組み合わされるか？ |
| Dispute / liability | 発行会社 / アクワイアラ / 加盟店 | 認証結果は実際に責任を変えるのか、それとも証跡を追加するだけか？ |

3-D Secure はカード非提示の不正リスクを低減するが、加盟店審査、カードデータ保護、アカウント乗っ取り統制、配送統制、チャージバック証跡を置き換えるものではない。だからこそこのページは、プロトコルのみの注記としてではなく [[payments/psp-merchant-settlement-risk|PSP 決済 risk]] とリンクされている。

## Non-retention, Tokenization, And PCI DSS

| Integration pattern | Card-data exposure | Wiki reading |
|---|---|---|
| Redirect payment page | 加盟店が PSP／アクワイアラのホスト型ページにリダイレクトする。 | 正しく実装されれば加盟店のカードデータ露出はより低い。 |
| JavaScript token model | カードデータがブラウザから PSP／トークン化エンドポイントへ送られる。 | ページ侵害がスクリプトを改変しうるため、加盟店は依然としてサイトセキュリティ統制が必要。 |
| Server-side card handling | 加盟店サーバがカードデータを受け取る。 | PCI および運用上の負担が最も高い；準拠と記述する前に強固な証跡が必要。 |
| Stored credential / recurring billing | 後続の決済にトークンまたはオンファイルクレデンシャルを使用する。 | 同意、ライフサイクル、解約、不正監視の統制が必要。 |

## EC 加盟店 Fraud Controls

| Pattern | Control |
|---|---|
| Credit master / BIN attack | レート制限、オーソリゼーションパターン監視、イシュア／アクワイアラのアラート、決済ページ統制。 |
| Account takeover | ログイン保護、デバイス／挙動監視、ステップアップ認証、パスワードリセット監視。 |
| High-risk delivery | 住所／配送変更の監視、配送保留、手動レビュー、解約／返金統制。 |
| Refund abuse | 返金承認ワークフロー、決済消込、加盟店ダッシュボードの権限統制。 |
| Site compromise | 脆弱性スキャン、パッチ適用、スクリプト完全性チェック、管理者 MFA、インシデント対応。 |

## JapanFG Relevance

カードセキュリティ分析は、単一の「クレジットカード会社」というラベルではなく、イシュア／アクワイアラ／PSP の役割を経由してルーティングされる：

- 発行会社 / アクワイアラ: [[card-issuers/jcb|JCB]]、[[card-issuers/smbc-card|SMBC Card]]、[[card-issuers/mufg-nicos|MUFG NICOS]]、[[card-issuers/rakuten-card|Rakuten Card]]、[[card-issuers/paypay-card|PayPay Card]]、[[card-issuers/aeon-financial-service|AEON Financial Service]]、[[card-issuers/orico|Orico]]、[[card-issuers/jaccs|JACCS]]、[[card-issuers/credit-saison|Credit Saison]]。
- PSP / gateway: [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]、[[payment-firms/gmo-epsilon|GMO Epsilon]]、[[payment-firms/sb-payment-service|SB Payment Service]]、[[payment-firms/dg-financial-technology|DGFT]]、[[payment-firms/netstars|Netstars]]。
- Legal / registry layer: [[payments/credit-purchase-card-operators-japan-index|credit / card 事業者 registry]] および [[financial-licenses/INDEX|JapanFG legal / financial licenses]]。

## Red Flags For Wiki Research

1. ある情報源が「カード会社」と言っているが、それがイシュア、アクワイアラ、ブランド、プロセッサ、PSP のいずれを意味するかを述べていない。
2. 加盟店が 3-D Secure 対応を主張しているが、脆弱性統制、トークン化、不正対応運用の証跡がない。
3. PSP がトークン化を主張しているが、侵害されたスクリプトを通じて加盟店ページが依然としてカードデータを露出しうる。
4. 不正指標が分母なしで引用されている：取引金額、注文件数、承認率、チャレンジ率、チャージバック率、または不正金額。
5. ライアビリティシフトの言明が、完全な損失保証として扱われている。

## Related

- [[payments/INDEX]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/psp-merchant-settlement-risk]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/japan-bank-api-incident-and-fraud-control]]
- [[card-issuers/installment-sales-act-2020-amendment]]
- [[card-issuers/jcb]]
- [[INDEX|FinWiki index]]

## Sources

- METI: クレジットカードセキュリティガイドライン改訂の公表およびクレジット取引政策ページ。
- Japan Credit Association: クレジットカードセキュリティガイドライン 6.1 および文書索引。
- JCB: 加盟店向け EMV 3-D Secure 案内およびブランド／カード決済の当事者説明。
- PCI Security Standards Council: PCI DSS 概要および日本語文書ライブラリ。
- EMVCo: EMV 3-D Secure 公開標準概要。
- Payments Japan および FSA / PPC / METI の公開セキュリティ勧告資料。
