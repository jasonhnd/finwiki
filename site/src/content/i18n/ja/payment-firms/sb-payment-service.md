---
source: payment-firms/sb-payment-service
source_hash: 6310ec2bda2daaec
lang: ja
status: machine
fidelity: ok
title: "SBペイメントサービス"
translated_at: 2026-06-20T09:33:00.420Z
---

# SBペイメントサービス


## ウィキ上の位置づけ

この項目は [[payment-firms/INDEX|payment-firms INDEX]] の配下に置く。比較・対照の文脈は [[payment-firms/gmo-epsilon|GMOイプシロン (GMO Epsilon)]] と照合し、より広い制度・規制上の境界は [[payments/INDEX|payments index]] とあわせて読む。

## 要約

SBペイメントサービスは SoftBank グループ の 加盟店決済・PSP 事業者。公式事業紹介はオンラインから店舗までの決済サービスと、アクワイアラとしての加盟店審査・管理・決済サービス提供を示しており、[[payments/card-acquiring-japan-stack|card acquiring stack]] の主要ページ。

## 1. 法人・ライセンス境界

| 項目 | 読み方 |
|---|---|
| 法人 | SBペイメントサービス株式会社 |
| グループ context | SoftBank・LY・PayPay 決済エコシステム |
| 主要レーン | PSP、加盟店獲得、オンライン・オフライン決済サービス |
| 規制上の位置づけ | 経済産業省の登録事業者一覧と公式事業開示を通じて、カード番号取扱契約締結・アクワイアリング管理を確認する。 |

## 2. 事業上の役割

- PayPay の消費者向けウォレットを超えて、オンラインチェックアウト、店舗向け決済サービス、カード / ポイントサービス、集金代行、送金、関連コンサルティングまで含む加盟店向け決済インフラを提供する。
- カード受入、オンラインチェックアウト、決済運用、セキュリティ管理、加盟店管理を接続する。したがって、消費者向けウォレットブランドというより PSP / アクワイアリング管理レイヤーに近い。
- 公式会社概要は SoftBank が 100% 株主であることを示し、PayPay SC を関連会社として列挙しているため、より広い SoftBank / PayPay の加盟店サービススタックの中で読むべきである。
- [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]、[[payment-firms/gmo-epsilon|GMO Epsilon]]、[[payment-firms/dg-financial-technology|DGFT]] と比較するうえで有用である。

## 3. PSP スタックと規制上の位置

| レイヤー | 公開情報からの読み方 |
|---|---|
| 加盟店 PSP | 公式事業ページは、SBPS をオンラインから実店舗チャネルまで企業向けに決済サービスを提供する事業者として位置づけている。 |
| 決済 / 集金 | 会社概要は、決済サービス、カード / ポイントサービス、集金代行サービス、送金サービス、関連コンサルティングを列挙している。 |
| 割賦販売法隣接 | METI の登録事業者ページは、カード番号取扱契約締結とクレジットカード取扱境界の管理点である。 |
| その他登録 | 公式会社概要は、第三者型前払式支払手段発行者、資金移動業者、電気通信事業者、クレジットカード番号等取扱契約締結事業者、電子決済等代行業者の登録を列挙している。これらは一つの PSP operator にある別々の法的表面である。 |

## 4. この独立ページが重要な理由

SoftBank の決済スタックには、消費者向けウォレット、カード発行会社、加盟店向け PSP の層がある。SBPS は加盟店サービスの層に位置するため、独立した事業会社ページとして扱う必要がある。

## 関連項目

- [[megabanks/paypay-fg]]
- [[card-issuers/paypay-card]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/cashless-jp-landscape]]

## 出典

- SB Payment Service 会社情報: https://www.sbpayment.co.jp/info/
- SB Payment Service 会社概要: https://www.sbpayment.co.jp/info/profile/
- SB Payment Service 事業ページ: https://www.sbpayment.co.jp/info/business/
- METI 割賦販売法上の登録事業者: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
