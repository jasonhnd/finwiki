---
source: payment-firms/smartbank
source_hash: 67c6fa9daab60900
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "スマートバンク (SmartBank)"
translated_at: 2026-06-26T08:31:59.836Z
---

# スマートバンク (SmartBank)

## ウィキ経路本項目は [[payment-firms/INDEX|payment-firms INDEX]]（そのドメイン経路）の下に位置する。ピア / 対比（プリペイド + アプリ主導の fintech）として [[payment-firms/kyash|Kyash]] と、監督 / システムの境界として [[financial-regulators/fsa|the FSA]] および [[payments/funds-transfer-vs-prepaid-boundary|the 資金移動 vs 前払式 boundary]] と対照して読むこと。

## 要約株式会社スマートバンクは、家計管理プリカ「B/43（ビーヨンサン、現「ワンバンク」へ改称）」を運営する household-finance / 前払式ウォレット fintech。公開情報では **二つの license** を保有する稀な構成 ——**資金移動業者**（関東財務局長第00084号）と、2024 年取得の **第三者型前払式支払手段発行者**（関東財務局長第00782号）。チャージ式 Visa プリペイドカードと家計簿アプリをセットにし、家計管理 UX に payment account を組み合わせる事例。

## 1. ライセンス / グループ境界

| 項目 | 注記 |
|---|---|
| 法人名 | 株式会社スマートバンク |
| ライセンス経路 | 資金移動業者（関東財務局長第00084号）＋ 第三者型前払式支払手段（関東財務局長第00782号） |
| 親会社 / グループ | 独立系 fintech（スタートアップ） |
| 商品サーフェス | B/43 →「ワンバンク」家計管理アプリ＋ Visa プリカ |
| 主要レーン | 前払式アカウント、家計予算管理、共有支出、資金移動 |
| ウィキ上の役割 | 家計管理起点の 前払式 / 資金移動 fintech ページ |

## 2. 運営モデルスマートバンクは、家計予算管理という課題から payment / account-like UX を組み立てる。前払式・資金移動業の双方の licensing を使い、共有支出やウォレットのフローを支える。メガバンクや通信系ウォレットに比べ小規模だが、銀行・コマースではなく「家計簿（budgeting）」から金融 UX を立ち上げる設計を示す点で、[[payment-firms/kyash|Kyash]] や [[payment-firms/paypay|PayPay]] super-app との対比が有用。BaaS 文脈は [[banking/baas-japan-landscape|BaaS Japan landscape]] を参照。

## 3. このページの意義

- 一社で資金移動業と第三者型前払式支払手段の双方を持つ license 構成の具体例を固定する。
- 「前払式（払戻し原則禁止）」と「資金移動（送金可）」を一社内で組み合わせる設計を可視化する。
- 独立系 fintech が家計管理を入り口に payment account を作る事例 anchor になる。

## 関連

- [[payment-firms/INDEX|payment-firms INDEX]]
- [[payment-firms/kyash|Kyash]]
- [[payments/funds-transfer-vs-prepaid-boundary|資金移動 vs 前払式 boundary]]
- [[banking/baas-japan-landscape|BaaS Japan landscape]]
- [[INDEX|FinWiki index]]

## 出典

- SmartBank company profile: https://smartbank.co.jp/company
- ワンバンク: 資金決済法に基づく表示: https://onebank.jp/settlement/
- FSA funds-transfer service provider list (`shikin_idou.pdf`): https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf

> [!info] 校核状態
> confidence: likely。資金移動業（第00084号）・第三者型前払式支払手段（第00782号、2024 年登録）の二重 license は公開プレスリリース／登録一覧ベース。製品名称は B/43 →「ワンバンク」へ改称。
