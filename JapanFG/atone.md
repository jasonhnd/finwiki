---
title: "atone (アトネ)"
aliases:
  - "atone"
  - "アトネ"
  - "atone 翌月払い"
  - "atone Net Protections"
domain: JapanFG
created: 2026-05-24
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-20
confidence: likely
tags: [JapanFG, BNPL, atobarai, consumer-credit, wallet, net-protections]
status: active
sources:
  - "https://atone.be/"
  - "https://corp.netprotections.com/"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html"
---

# atone (アトネ)

## Wiki route

This entry sits under the [[JapanFG/INDEX|JapanFG index]] as a consumer **BNPL wallet** brand. Read it together with the [[JapanFG/bnpl-landscape|Japan BNPL landscape]] system note, the [[JapanFG/net-protections-hd|Net Protections HD]] corporate parent for ownership context, and the [[JapanFG/paidy|Paidy]] peer for direct comparator. The [[payments/japan-bnpl-credit-purchase-boundary|BNPL and credit-purchase boundary]] page sets the regulatory frame, the [[payments/credit-purchase-card-operators-japan-index|METI credit-purchase registry]] anchors registration evidence, and the [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] shows where atone fits next to card and code payment.

## TL;DR

atone は [[JapanFG/net-protections-hd|Net Protections HD]] が運営する **消費者側 BNPL ウォレット**。アカウント登録ベースで複数加盟店を横断し、月締めで翌月コンビニ・銀行振込・口座振替で一括払いする UX を提供する。NP 後払い（請求書同梱型）が **加盟店主導 BNPL** であるのに対し、atone は **消費者主導 BNPL** という二刀流の片翼を担う。[[JapanFG/paidy|Paidy]] と最も直接的に競合する。

## 1. 法人・ライセンス境界

| Item | Reading |
|---|---|
| Brand owner | 株式会社ネットプロテクションズ（[[JapanFG/net-protections-hd|Net Protections HD]] 100% 子会社） |
| Product type | Consumer BNPL wallet, 月締め / 翌月一括払い |
| Repayment rails | コンビニ収納 / 銀行振込 / 口座振替 / atone カード (Mastercard ベース) |
| 規制ルート | 割賦販売法 上の信用購入あっせん（包括 / 個別の境界は商品設計次第）。METI Installment Sales Act registry 経由 Net Protections として登録。^[inferred] |

## 2. Business role

- 加盟店をまたぐ **消費者アカウント型 BNPL** として、Net Protections のもう一つの主要ブランド（NP 後払いとの二本柱）。^[extracted]
- atone ポイント / atone カード等の付随プロダクトで月締め決済を消費者の主回路化することを狙う。^[inferred]
- 個別加盟店の請求書フローに依存しないため、サブスク EC / モバイル EC / 越境 EC でも導入が広がる。

## 3. Why this standalone page matters

[[JapanFG/net-protections-hd|Net Protections HD]] 本体ページは持株 / IR / 海外まで含むため、atone を消費者ブランドとして読み下す視点が別ページとして必要。[[JapanFG/paidy|Paidy]] と直接競合する BNPL 消費者 UX の比較軸として独立化する。

## 4. 規制・政策

- **割賦販売法**: 包括 / 個別信用購入あっせん区分の境界、与信判断モデル、苦情処理が継続論点。
- **資金決済法 隣接**: 月締め残高がチャージ式に近づく場合、前払式支払手段 / 資金移動業の境界が問題化しうる。^[ambiguous]
- **個人情報保護法**: アカウント登録に伴う与信データ取扱い、第三者提供の透明性。
- **多重債務 / 過剰与信**: BNPL 全体への規制議論は atone にも波及（[[payments/japan-bnpl-credit-purchase-boundary|BNPL boundary]] 参照）。^[inferred]

## Counterpoints

- 「[[JapanFG/paidy|Paidy]] との UX 差別化」: 電話 + メール認証ベースの Paidy に対し、atone は伝統的アカウント登録型。**手軽さ** で見劣りする可能性は議論あり。^[ambiguous]
- 「親会社の経済圏不在」: PayPal が後ろ盾の Paidy、メルカリ経済圏の [[JapanFG/merpay|メルペイ]] と比べ、Net Protections は独立純粋プレイヤーであり、流通経済圏との一体運営という強みを欠く。^[inferred]
- 「カード型 (atone カード) と既存カード会社の競合」: Mastercard ブランドで実店舗利用可となった場合、[[JapanFG/credit-saison|Credit Saison]] / [[JapanFG/jaccs|Jaccs]] 等の既存信販と消費者財布の取り合い。^[inferred]

## Open questions

- atone と NP 後払いの加盟店重複率と相互送客の効果は?
- atone カードの発行枚数 / 流通額の最新公表値は ([[JapanFG/net-protections-hd|Net Protections HD]] IR の開示粒度待ち)?
- [[JapanFG/paidy|Paidy]] と atone の MAU / GMV を直接比較できる公開資料は存在するか?

## Related

- [[JapanFG/net-protections-hd]]
- [[JapanFG/paidy]]
- [[JapanFG/bnpl-landscape]]
- [[JapanFG/merpay]]
- [[JapanFG/famima-digital-one]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-payment-scheme-economics-matrix]]

## Sources

- atone product site: https://atone.be/
- Net Protections HD corporate site: https://corp.netprotections.com/
- METI registered operators under the Installment Sales Act: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
