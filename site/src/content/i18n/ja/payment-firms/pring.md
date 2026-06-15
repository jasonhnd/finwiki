---
source: payment-firms/pring
source_hash: 720c1f1263320458
lang: ja
status: machine
fidelity: ok
title: "pring"
translated_at: 2026-06-15T03:48:21.898Z
---

# pring

## Wiki 上の位置づけ

本項は [[payment-firms/INDEX|payment-firms INDEX]]（そのドメインルート）の下に置かれる。ピア／対比（もう一つの P2P ウォレット資金移動業者）として [[payment-firms/kyash|Kyash]] と、監督・システムの境界として [[financial-regulators/fsa|the FSA]] および [[payments/funds-transfer-vs-prepaid-boundary|the funds-transfer vs prepaid boundary]] と照らし合わせて読むこと。

## 要点

株式会社pring（プリン）は、個人間送金（P2P）アプリとして知られた **資金移動業者**（funds-transfer operator under 資金決済法, FSA-supervised）。FSA funds-transfer 登録一覧では 関東財務局長 第00050号として掲載。2021 年に **Google**（米 Google International）が大株主メタップス等から全株式を取得し子会社化したことで広く注目された。公開報道では、資金移動業の廃業（2026 年 8 月）と全サービス終了（2026 年 12 月）が予告されており、Google 子会社としては短命に終わる winding-down 事例として扱う。

## 1. ライセンス／グループ境界

| 項目 | 注記 |
|---|---|
| 法人名 | 株式会社pring |
| ライセンス区分 | 資金移動業者（funds-transfer, 資金決済法）; FSA 関東財務局長 第00050号 |
| 親会社／グループ | Google（2021 年 Google International が全株取得、子会社化） |
| 主要レーン | P2P 送金アプリ、銀行口座への出金、ATM 現金引き出しサポート |
| ステータス注記 | 公開報道で資金移動業廃業（2026-08）・全サービス終了（2026-12）が予告 |
| Wiki 上の役割 | Google が買収した日本 funds-transfer operator のページ |

## 2. 事業モデル

pring は、大型プラットフォーム・ウォレットに先行した P2P ウォレットの波を代表する。送金アプリに銀行口座出金や ATM キャッシュアウトを重ねる設計を示し、[[payment-firms/kyash|Kyash]]・[[payment-firms/merpay|Merpay]]・[[payment-firms/paypay|PayPay]] の歴史的・登録上の comparator として有用。Google による買収は、米テック大手が日本決済市場に足がかりを得る動きとして公開報道で論じられた。

## 3. このページが重要な理由

- Google が保有した数少ない日本 funds-transfer operator を 実体名アンカー として固定する。
- プロダクト面が縮小・終了に向かう中でも、資金決済法上の登録実体としての位置づけを残す。
- 親会社が国内事業会社でなく米プラットフォーマーである稀なケースを記録する。

## 関連

- [[payment-firms/INDEX|payment-firms INDEX]]
- [[payment-firms/kyash|Kyash]]
- [[payment-firms/merpay|Merpay]]
- [[payment-firms/paypay|PayPay]]
- [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]
- [[INDEX|FinWiki index]]

## 出典

- pring company profile: https://www.pring.jp/company
- FSA funds-transfer service provider list (`shikin_idou.pdf`): https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
- ITmedia: Google による pring 買収公表（2021-07）: https://www.itmedia.co.jp/business/articles/2107/13/news112.html

> [!info] 校核状态
> confidence: likely。資金移動業登録（関東財務局長 第00050号）・Google による 2021 年買収は公開事実。2026 年の廃業・終了予定は公開報道ベースで、確定スケジュールは原典で要確認。
