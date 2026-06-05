---
title: "スマートバンク (SmartBank)"
aliases: ["SmartBank", "スマートバンク", "株式会社スマートバンク", "B/43", "ワンバンク"]
domain: payment-firms
created: 2026-05-21
last_updated: 2026-06-05
last_tended: 2026-06-05
review_by: 2026-11-21
confidence: likely
tags: [JapanFG, payments, wallet, prepaid, household-finance, funds-transfer]
status: active
sources:
  - "https://smartbank.co.jp/company"
  - "https://onebank.jp/settlement/"
  - "https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf"
---

# スマートバンク (SmartBank)

## Wiki route

This entry sits under [[payment-firms/INDEX|payment-firms INDEX]] (its domain route). Read it against [[payment-firms/kyash|Kyash]] for peer / contrast (prepaid + app-led fintech), and against [[financial-regulators/fsa|the FSA]] plus [[payments/funds-transfer-vs-prepaid-boundary|the funds-transfer vs prepaid boundary]] for the supervisory / system boundary.

## TL;DR

株式会社スマートバンクは、家計管理プリカ「B/43（ビーヨンサン、現「ワンバンク」へ改称）」を運営する household-finance / prepaid wallet fintech。公開情報では **二つの license** を保有する稀な構成 ——**資金移動業者**（関東財務局長 第00084号）と、2024 年取得の **第三者型前払式支払手段発行者**（関東財務局長 第00782号）。チャージ式 Visa プリペイドカードと家計簿アプリをセットにし、家計管理 UX に payment account を組み合わせる事例。

## 1. License / group boundary

| Item | Notes |
|---|---|
| Legal name | 株式会社スマートバンク |
| License route | 資金移動業者（関東財務局長 第00084号）＋ 第三者型前払式支払手段（関東財務局長 第00782号） |
| Parent / group | 独立系 fintech（スタートアップ） |
| Product surface | B/43 →「ワンバンク」家計管理アプリ＋ Visa プリカ |
| Main lanes | 前払式アカウント、家計予算管理、共有支出、funds transfer |
| Wiki role | 家計管理起点の prepaid / funds-transfer fintech ページ |

## 2. Operating model

スマートバンクは、家計予算管理という課題から payment / account-like UX を組み立てる。prepaid・資金移動業の双方の licensing を使い、共有支出やウォレットのフローを支える。メガバンクや通信系ウォレットに比べ小規模だが、銀行・コマースではなく「家計簿（budgeting）」から金融 UX を立ち上げる設計を示す点で、[[payment-firms/kyash|Kyash]] や [[payment-firms/paypay|PayPay]] super-app との対比が有用。BaaS 文脈は [[banking/baas-japan-landscape|BaaS Japan landscape]] を参照。

## 3. Why this page matters

- 一社で資金移動業と第三者型前払式支払手段の双方を持つ license 構成の具体例を固定する。
- 「prepaid（払戻し原則禁止）」と「funds-transfer（送金可）」を一社内で組み合わせる設計を可視化する。
- 独立系 fintech が家計管理を入り口に payment account を作る事例 anchor になる。

## Related

- [[payment-firms/INDEX|payment-firms INDEX]]
- [[payment-firms/kyash|Kyash]]
- [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]
- [[banking/baas-japan-landscape|BaaS Japan landscape]]
- [[INDEX|FinWiki index]]

## Sources

- SmartBank company profile: https://smartbank.co.jp/company
- ワンバンク: 資金決済法に基づく表示: https://onebank.jp/settlement/
- FSA funds-transfer service provider list (`shikin_idou.pdf`): https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf

> [!info] 校核状态
> confidence: likely。資金移動業（第00084号）・第三者型前払式支払手段（第00782号、2024 年登録）の二重 license は公開プレスリリース／登録一覧ベース。製品名称は B/43 →「ワンバンク」へ改称。
