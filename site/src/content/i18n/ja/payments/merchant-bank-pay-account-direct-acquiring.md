---
source: payments/merchant-bank-pay-account-direct-acquiring
source_hash: cf95d821def01a8c
lang: ja
status: machine
fidelity: ok
title: "日本における加盟店向け銀行口座ダイレクトアクワイアリング"
translated_at: 2026-06-02T16:33:58.470Z
---
# 日本における加盟店向け銀行口座ダイレクトアクワイアリング

## 概要

加盟店向け銀行口座ダイレクトアクワイアリングは、[[payments/account-to-account-payment-japan|Japan account-to-account payment route]] を加盟店側から読むためのページである。Bank Pay や J-Debit は店頭では通常の QR / デビット受入のように見えることがあるが、管理面はカードアクワイアリング、前払ウォレット、資金移動ウォレットとは異なる。支払いは銀行口座から開始され、加盟店オンボーディングには Bank Pay / J-Debit の参加者ルールが関わり、運用リスクの中心は口座認証、返金処理、登録審査、システム接続、精算にある。

このページは [[payments/INDEX|payments domain]]、[[payments/card-acquiring-japan-stack|Japan card acquiring stack]]、[[payments/psp-merchant-settlement-risk|PSP merchant settlement risk]]、[[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]]、[[JapanFG/legal-financial-licenses/INDEX|JapanFG legal / financial licenses]] と合わせて使う。

## 加盟店ルートマップ

| ルート | 加盟店側からの読み方 | 主な管理上の問い |
|---|---|---|
| Bank Pay 直接加盟店 | 加盟店が直接、または Bank Pay 参加者構造を通じて登録する。 | 加盟店審査、登録、サポート、返金 / 取消プロセス、精算照合を誰が行うか。 |
| Bank Pay 間接 / 接続アプリルート | 接続事業者またはアプリが決済 UI や加盟店システム接続を提供する。 | 接続提供者は誰か、どの Bank Pay ガイドライン / 契約義務が下流へ流れるか。 |
| J-Debit 加盟店 | 加盟店が J-Debit インフラを通じて銀行キャッシュカード・デビットを受け入れる。 | 加盟店は直接 / 間接の J-Debit 受入を行っているか、端末 / PIN 管理はどうなっているか。 |
| PSP ゲートウェイレイヤー | PSP または決済ゲートウェイが、口座ダイレクト受入を他の決済手段とまとめる。 | Bank Pay / J-Debit 義務を、カードアクワイアリング、コード決済、ウォレット精算リスクから分離する。 |
| Cotra 隣接の請求 / アプリフロー | 口座ダイレクトのアプリ決済が、Cotra 送金や請求書支払い機能として現れる場合もある。 | 個人間送金、税金 / 請求書支払い、加盟店購入受入を混同しない。 |

## Bank Pay 参加者スタック

JEPPO の Bank Pay 加盟店登録規程は、Bank Pay 加盟店登録を定義し、直接加盟店、任意団体、金融機関加盟店、間接加盟店、代表間接加盟店、接続事業者ルートを区別している。登録規程では、登録資料を提出する前に、Bank Pay 加盟店銀行が業種、サービス内容、財務健全性、反社会的勢力チェックについて審査することも求めている。

Bank Pay ガイドラインは、さらに接続事業者と再接続事業者を定義している。実務上は次のように理解する。

- 加盟店だけが唯一の運用主体とは限らない。
- 接続アプリまたはシステム提供者が、加盟店と Bank Pay インフラの間に入ることがある。
- 金融機関と JEPPO ルールが、オンボーディングと継続的なコンプライアンスを形作る。
- アプリ / サーバー接続、取引中継、清算、返金 / 取消処理は、宣伝文句ではなく運用レイヤーとして理解する必要がある。

## 管理マトリクス

| 管理領域 | 公開情報上の重要性 |
|---|---|
| 加盟店審査 | 口座ダイレクトレールは銀行口座から資金を移動するため、業種、禁止商材、不正リスク、財務健全性が重要。 |
| 反社会的勢力チェック | JEPPO 登録規程は、反社会的勢力に関連する拒絶 / 確認ルートを明示している。 |
| 接続事業者ガバナンス | Bank Pay には接続事業者や再接続事業者が関わり得るため、義務をアプリ / システム提供者へ流す必要がある。 |
| 顧客認証 | 銀行口座登録、アプリ認証、端末移行、取引承認が中心的なリスクポイント。 |
| 返金 / 取消 | 口座ダイレクトの返金は、カードチャージバックやウォレット残高取消とは異なる。 |
| 精算照合 | 加盟店側精算、清算センター出力、銀行口座の資金移動を、加盟店台帳と PSP レポートに一致させる必要がある。 |
| システム可用性 | JEPPO の公開通知には Bank Pay 機能のメンテナンス / 障害メッセージがあるため、運用可用性は加盟店リスクレビューに含めるべき。 |
| 利用者説明 | 消費者は QR 決済を見ても、資金源が口座ダイレクト、ウォレット残高、カード、前払価値のどれかを理解していない場合がある。 |

## カードおよびウォレットのアクワイアリングとの比較

| 論点 | 口座ダイレクト / Bank Pay / J-Debit | カードアクワイアリング / PSP | ウォレット / コード決済 |
|---|---|---|---|
| 資金源 | 銀行預金口座。 | クレジットライン、デビットカード、プリペイドカード、カードネットワーク口座。 | ウォレット残高、連携銀行 / カード、前払、資金移動残高。 |
| 加盟店オンボーディング | Bank Pay / J-Debit 参加者と銀行 / JEPPO ルート。 | アクワイアラー / PSP / カードネットワークルール。 | ウォレット運営者 / PSP / 加盟店契約ルート。 |
| 紛争処理の経済性 | 返金 / 取消および口座引落ルール。標準的なクレジットカード・チャージバックモデルではない。 | チャージバックとカードスキームの紛争処理ルール。 | ウォレット固有の返金、不正、準備金、精算ルール。 |
| リスク焦点 | 口座乗っ取り、不正引落、アプリ登録、加盟店審査。 | カード不正、チャージバック、PCI DSS、アクワイアラーリスク。 | ウォレット残高、加盟店不正、ボーナス / キャンペーン濫用、AML / 資金移動境界。 |
| データ価値 | 銀行口座決済頻度と加盟店カテゴリ。 | カードネットワークおよびアクワイアラー取引データ。 | アプリ頻度、ロイヤルティ、ウォレット、キャンペーン、加盟店データ。 |

## JapanFG での関連性

- [[JapanFG/mufg-bank|MUFG Bank]]、[[JapanFG/sumitomo-mitsui-banking-corp|SMBC]]、[[JapanFG/mizuho-bank|Mizuho Bank]]、[[JapanFG/resona-bank|Resona Bank]] は、口座ダイレクト決済が銀行参加と清算 / 精算接続に依存するため重要である。
- [[JapanFG/recruit-mufg-business|Recruit MUFG Business]] / COIN+ は、単なる別の QR ウォレットではなく、加盟店ネットワークと口座ダイレクト取得の観点からルーティングする。
- [[JapanFG/gmo-payment-gateway|GMO Payment Gateway]]、[[JapanFG/gmo-epsilon|GMO Epsilon]]、[[JapanFG/sb-payment-service|SB Payment Service]]、[[JapanFG/dg-financial-technology|DGFT]]、[[JapanFG/netstars|Netstars]] は、口座ダイレクト受入がカード、ウォレット、コード決済受入と束ねられる場合に比較する PSP / ゲートウェイページである。
- [[JapanFG/paypay|PayPay]]、[[JapanFG/merpay|Merpay]]、[[JapanFG/au-payment|au PAY]]、[[payments/japan-code-payment-competitive-map|code-payment competition]] は、ウォレット経済性と口座ダイレクト経済性が QR 形式では似て見えても、法的・運用的には異なるため、別に扱う。

## 調査チェックリスト

1. 加盟店ルートが Bank Pay、J-Debit、ウォレットコード決済、カードアクワイアリング、PSP バンドルのどれかを特定する。
2. 加盟店契約当事者を特定する: 銀行、JEPPO 関連ルート、PSP、接続事業者、ウォレット運営者、アクワイアラー。
3. 加盟店が直接、間接、または別のアプリ / システム提供者経由で接続されているかを確認する。
4. 返金、取消、決済失敗、照合プロセスをマッピングする。
5. 加盟店がリアルタイム口座引落に依存する場合は、システムメンテナンス / 障害通知を確認する。
6. 口座ダイレクトの不正対策を、カードチャージバック管理や前払 / 資金移動ウォレット管理から分離する。

## 関連項目

- [[payments/INDEX]]
- [[payments/account-to-account-payment-japan]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/psp-merchant-settlement-risk]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-code-payment-competitive-map]]
- [[JapanFG/recruit-mufg-business]]
- [[JapanFG/gmo-payment-gateway]]
- [[JapanFG/netstars]]
- [[JapanFG/mufg-bank]]
- [[JapanFG/sumitomo-mitsui-banking-corp]]
- [[JapanFG/legal-financial-licenses/INDEX]]
- [[INDEX|FinWiki index]]

## 出典

- JEPPO: 公式組織 / サービスページ。
- JEPPO: Bank Pay 公式ページ。
- JEPPO: Bank Pay 加盟店登録規程 PDF。
- JEPPO: Bank Pay ガイドライン PDF。
- Zengin-Net: Cotra システム説明。
- Cotra: 公式 P2P transfer page。
- FSA: 資金移動業者登録簿。
