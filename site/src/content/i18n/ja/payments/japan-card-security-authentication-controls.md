---
source: payments/japan-card-security-authentication-controls
source_hash: ddc68a139781a901
lang: ja
status: machine
fidelity: ok
title: "日本のカードセキュリティと認証管理"
translated_at: 2026-06-02T16:33:58.520Z
---

# 日本のカードセキュリティと認証管理

## 概要

日本ECカードのセキュリティは「だけではない」3-D Secure。」 便利な制御スタックは次のとおりです: カード データ保護 -> 加盟店脆弱性制御 -> EMV3-D 安全な認証 -> 不正行為の監視 -> アクワイアラ/PSP/販売者情報の共有 -> チャージバックと修復。

このページを使用するには[[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]], [[payments/card-acquiring-japan-stack|card acquiring stack]], [[payments/psp-merchant-settlement-risk|PSP settlement risk]], [[payments/credit-purchase-card-operators-japan-index|credit / card operator registry]]、 そして[[card-issuers/installment-sales-act-2020-amendment|Installment Sales Act 2020 amendment]].

## ガイドライン概況

| バージョン/ルート | パブリックソースの役割 | ウィキの読み方 |
|---|---|---|
| 置く2025-03-05リリース | クレジットカードセキュリティガイドライン改定を発表。 | EC加盟店セキュリティ強化の公共政策アンカー。 |
| 日本クレジット協会ガイドライン6.1  | カード セキュリティ管理に関する現在の主要な公開ガイドライン ソース。 | 非保持、EC セキュリティ、EMV に使用3-D 安全で不正行為を防止する語彙。 |
| PCI DSS | 国際的なカードデータセキュリティ規格。 | カード所有者データ環境および販売者/PSP のセキュリティ制御に使用します。 |
| EMV3-Dセキュア | 認証プロトコル/メッセージング標準。 | リスクベースの認証とチャレンジフロー分析に使用します。 |
| JCB加盟店・ブランドページ | 発行者、取得者、ブランド、販売者、および認証の役割の平易な言語モデル。 | すべての当事者を「カード会社」に分割するために使用します。 |

## 主体と責任のマップ

| 俳優 | 日本語・市場用語 | 中核的な責任 | セキュリティアーティファクト |
|---|---|---|---|
| 発行者 | イシュア / カード発行会社 | カード所有者の審査、承認、ACS / 認証の決定、請求、不正行為の監視。 | 認証ログ、ACS 結果、カード所有者の紛争/不正行為の監視。 |
| カードブランド・ネットワーク | 国際ブランド / ブランド | ネットワーク ルール、ディレクトリ ルーティング、ブランド セキュリティ ルール、相互運用性。 | スキーム ルール、ディレクトリ サーバー ルーティング、ブランド コンプライアンス。 |
| 取得者 | アクワイアラ / 加盟店契約会社 | マーチャントの引受業務、マーチャント契約、決済、チャージバックのルーティング。 | 販売者のデューデリジェンス、セキュリティステータス、チャージバックの監視。 |
| PSP/ゲートウェイ | 決済代行 / PSP | 支払いページ、トークン化、3DS サーバーの統合、トランザクション データ、調整。 | トークン化設計、3DS トランザクション ログ、不正行為フィルター。 |
| 商人 | ECフランチャイズ店 | サイトセキュリティ、顧客認証UX、配送・返金管理、証拠保全。 | 脆弱性管理、注文ログ、配送/返金の証拠。 |
| 3DSサーバー/DS/ACS | 3-D 安全なコンポーネント | データ転送、ディレクトリ ルーティング、発行者認証、チャレンジ/スムーズなフロー。 | AReq / ARes / チャレンジ結果、ECI / CAVV スタイルの認証データ。 |

## 管理策スタック

| 層 | 脅威 | 制御目標 | 正所有者 | 二次所有者 |
|---|---|---|---|---|
| カードデータの保護 | カード会員データの漏洩。 | 可能な限りカードデータの保存は避けてください。 PCI スコープの制御を維持します。 | マーチャント / PSP | 取得者 |
| トークン化/非保持 | Raw カード データの漏洩。 | カード データ処理をトークン / リダイレクト / JavaScript トークン モデルに置き換えます。 | PSP | 商人 |
| 販売者の脆弱性管理 | EC サイトの侵害、フォームジャッキング、アカウントの乗っ取り。 | EC サイト、プラグイン、管理者アカウント、支払いページを強化してください。 | 商人 | PSP/ECシステムプロバイダー |
| EMV3-Dセキュア | カード非提示による不正使用。 | リスクベースの発行者認証とチャレンジフローを追加します。 | 発行者 / ACS | 販売者 / PSP / ブランド |
| 不正行為の監視 | クレジットマスター/BIN攻撃、異常な注文パターン、再出荷詐欺。 | 不審な取引や配送を検出して停止します。 | 発行者 / 取得者 / PSP | 商人 |
| チャージバック/異議申し立て | 損失の配分と証拠の失敗。 | 注文、認証、配送、返金、通信の証拠を保存します。 | 取得者/販売者 | 発行者 / PSP |

## EMV 3-D Secure の経路

| ステップ | 成分 | リサーチクエスチョン |
|---|---|---|
| チェックアウト | マーチャント / PSP | トランザクション データはリスクベースの認証に十分な完全性を持っていますか? |
| 3DS リクエスト | 3DSサーバー | PSP または販売者が統合していますか?3DS サーバーは正しくありますか? |
| ディレクトリルーティング | ディレクトリサーバー | 認証リクエストを受け取るブランド/カードルートはどれですか? |
| 発行者の決定 | ACS / 発行者 | フローには摩擦がないのか、問題があるのか​​、拒否されているのか、それとも利用できないのか? |
| 認可 | 発行者/取得者 | 認証結果と認可結果はどのように結合されますか? |
| 紛争/責任 | 発行者/取得者/販売者 | 認証結果は実際に責任を変更するものですか、それとも証拠を追加するだけですか? |

3-D セキュアは、カードが存在しない詐欺のリスクを軽減しますが、加盟店の審査、カード データの保護、アカウント乗っ取りの制御、配送制御、またはチャージバックの証拠に代わるものではありません。このページがリンクされているのはそのためです[[payments/psp-merchant-settlement-risk|PSP settlement risk]]プロトコルのみのメモとしてではなく。

## 非保持化、トークン化、PCI DSS

| 統合パターン | カードデータの漏洩 | ウィキの読み方 |
|---|---|---|
| 支払いページをリダイレクトする | マーチャントは PSP / アクワイアラーがホストするページにリダイレクトします。 | 正しく実装されていれば、加盟店カードデータの漏洩が軽減されます。 |
| JavaScript トークン モデル | カード データはブラウザから PSP / トークン化エンドポイントに送信されます。 | ページの侵害によりスクリプトが変更される可能性があるため、販売者には依然としてサイトのセキュリティ制御が必要です。 |
| サーバー側のカード処理 | 加盟店サーバーがカードデータを受信します。 | PCI と運用負荷が最も高くなります。準拠していると説明する前に強力な証拠が必要です。 |
| 保存された認証情報 / 定期的な請求 | 後の支払いに使用されるトークンまたはファイル上の資格情報。 | 同意、ライフサイクル、キャンセル、不正行為の監視制御が必要です。 |

## EC 加盟店の不正対策

| パターン | コントロール |
|---|---|
| クレジットマスター/BIN攻撃 | レート制限、認証パターンの監視、発行者/取得者のアラート、支払いページの制御。 |
| アカウント乗っ取り | ログイン保護、デバイス/動作監視、ステップアップ認証、パスワードリセット監視。 |
| ハイリスク配送 | 住所/配送先変更の監視、配送保留、手動レビュー、キャンセル/返金管理。 |
| 返金の不正行為 | 返金承認ワークフロー、決済調整、販売者ダッシュボードの許可制御。 |
| サイトの侵害 | 脆弱性スキャン、パッチ適用、スクリプト整合性チェック、管理者 MFA、インシデント対応。 |

## JapanFG での関連性

カードのセキュリティ分析は、単一の「クレジット カード会社」ラベルではなく、発行者/取得者/PSP の役割を通じてルーティングされます。

- 発行者/取得者:[[card-issuers/jcb|JCB]], [[card-issuers/smbc-card|SMBC Card]], [[card-issuers/mufg-nicos|MUFG NICOS]], [[card-issuers/rakuten-card|Rakuten Card]], [[card-issuers/paypay-card|PayPay Card]], [[card-issuers/aeon-financial-service|AEON Financial Service]], [[card-issuers/orico|Orico]], [[card-issuers/jaccs|JACCS]], [[card-issuers/credit-saison|Credit Saison]].
- PSP/ゲートウェイ:[[payment-firms/gmo-payment-gateway|GMO Payment Gateway]], [[payment-firms/gmo-epsilon|GMO Epsilon]], [[payment-firms/sb-payment-service|SB Payment Service]], [[payment-firms/dg-financial-technology|DGFT]], [[payment-firms/netstars|Netstars]].
- 法務/レジストリ層:[[payments/credit-purchase-card-operators-japan-index|credit / card operator registry]]そして[[financial-licenses/INDEX|JapanFG legal / financial licenses]].

## Wiki 調査上の警戒サイン

1. 情報筋は「カード会社」と述べているが、それが発行会社、アクワイアラー、ブランド、プロセッサー、PSPのいずれを意味するのかは明らかにしていない。
2. 販売者の主張3-D サポートは安全ですが、脆弱性管理、トークン化、または詐欺行為の証拠はありません。
3. PSP はトークン化を主張していますが、販売者ページは依然として侵害されたスクリプトを通じてカード データを公開する可能性があります。
4. 不正指標は、分母なしで見積もられます: 取引額、注文数、承認率、チャレンジ率、チャージバック率、または不正額。
5. 責任移転声明は完全な損失保証として扱われます。

## 関連項目

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

## 出典

- 経済産業省：クレジットカードセキュリティガイドライン改訂版リリースとクレジット取引ポリシーのページ。
- 日本クレジット協会：クレジットカードセキュリティガイドライン6.1 そしてドキュメントインデックス。
- JCB: マーチャントEMV3-D セキュア通知とブランド/カード決済主体の説明。
- PCI Security Standard Council: PCI DSS の概要と日本語ドキュメント ライブラリ。
- EMVCo: EMV3-D セキュアなパブリック標準の概要。
- Payments Japan および FSA / PPC / METI の公安諮問資料。
