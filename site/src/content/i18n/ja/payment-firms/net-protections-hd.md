---
source: payment-firms/net-protections-hd
source_hash: 21d85cd2e0b94dde
lang: ja
status: machine
fidelity: ok
title: "ネットプロテクションズHD (Net Protections HD)"
translated_at: 2026-06-24T07:24:12.876Z
---
# ネットプロテクションズHD (Net Protections HD)

## ウィキ上の位置づけ

この項目は pure-play **BNPL operator** として [[payment-firms/INDEX|payment-firms INDEX]] の配下に位置する。対比では [[payment-firms/bnpl-landscape|Japan BNPL landscape]] の system note と [[payment-firms/paidy|Paidy]] の peer、規制レンズでは [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]]、METI 登録の導線では [[payments/credit-purchase-card-operators-japan-index|credit-purchase / card operator registry]] とあわせて読む。

## 要約

Net Protections Holdings (東証 PRIME **7383**) は、日本の早期 BNPL pure-play であり、EC 加盟店が「商品到着後にコンビニ / 銀行振込で払う」選択肢として付ける invoice-based BtoC product **NP 後払い** で知られる。グループは **atone** (consumer-side wallet BNPL)、**AFTEE** (Taiwan product site を持つ overseas BNPL)、**NP 掛け払い** (BtoB invoicing) も運営する。[[payment-firms/paidy|Paidy]] と異なり payments platform owned ではない独立系で、[[card-issuers/jaccs|Jaccs]] や [[card-issuers/orico|Orico]] と異なり credit-card stack には意図的に入らない。merchant-fee BNPL economics が card interchange と異なる理由を見るには [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] が最も整理しやすい。^[verified-2026-06-24]

## 1. 法人・ライセンス境界

| 項目 | 読み方 |
|---|---|
| 法人名 | 株式会社ネットプロテクションズホールディングス |
| 事業子会社 | 株式会社ネットプロテクションズ (NP 後払い / atone / NP 掛け払い 等を直接運営) ^[verified-2026-06-24] |
| 上場 | 東証 PRIME 7383 (2021-12 上場) |
| グループレーン | EC 後払い (NP 後払い) / consumer BNPL wallet (atone) / BtoB 掛け払い (NP 掛け払い) / overseas BNPL (AFTEE) ^[verified-2026-06-24] |

## 2. 事業上の役割

- **NP 後払い** は日本の EC 後払い（請求書同梱型）の代表ブランドで、加盟店向けには **未回収リスクを丸抱えする保証型 BNPL** として与信判定 + 請求書発行 + 督促を一括サービス化している。NP 後払いの公式 site は、商品到着後に請求書でコンビニ・銀行・郵便局払いを行う流れと、未回収リスク保証を訴求している。^[verified-2026-06-24]
- **atone** は消費者側のアカウントを起点にする月締め BNPL ウォレットで、加盟店をまたいで「翌月コンビニ払い」を可能にする ([[payment-firms/paidy|Paidy]] と近い UX、但しブランド・経済圏は独立)。^[verified-2026-06-24]
- **NP 掛け払い** は BtoB 取引の請求書代行 + 与信 + 集金代行を BNPL 構造で提供し、伝統的な「請求書 → 振込 → 督促」フローを SaaS 化する。^[verified-2026-06-24]
- **AFTEE** は海外 EC 後払いブランドとして Net Protections corporate site から導線が置かれ、公式 product site は Taiwan market 向けの BNPL product として展開されている。^[verified-2026-06-24]
- ポートフォリオの切り分けが経済性を読むうえで重要である。NP 後払いは merchant-attached invoice BNPL、atone は account-based consumer BNPL、NP 掛け払いは BtoB invoicing / collection、AFTEE は overseas extension であり、holding company は単一の checkout product には還元できない。^[verified-2026-06-24]

## 3. この単独ページが重要な理由

Net Protections は日本 BNPL の独立 operator として、コーポレートが [[payment-firms/paidy|Paidy]] や [[card-issuers/aplus|アプラス]] のように親グループ既存ページに吸収されないため、JapanFG 名前空間で **独立 BNPL ホールディング** として別ページ化する価値が高い。

## 4. 規制・政策

- **個人情報保護法**: 与信判断のための個人データ（属性 / 取引履歴）取扱いと第三者提供範囲が論点。
- **東証 PRIME 開示**: 上場会社として四半期 IR・有価証券報告書ベースで取扱高（GMV）・加盟店数・与信損失率が公表されているため、独立 BNPL の経済性が公開数字で読める数少ない事例。^[extracted]

## 関連

- [[payment-firms/bnpl-landscape]]
- [[payment-firms/paidy]]
- [[payment-firms/merpay]]
- [[card-issuers/jaccs]]
- [[card-issuers/orico]]
- [[card-issuers/credit-saison]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[card-issuers/installment-sales-act-2020-amendment]]

## 出典

- Net Protections HD corporate site: https://corp.netprotections.com/
- Net Protections IR: https://corp.netprotections.com/ir/
- NP 後払い product site: https://www.netprotections.com/
- atone product site: https://atone.be/
- NP 掛け払い product site: https://np-kakebarai.com/
- AFTEE product site (overseas BNPL): https://www.aftee.tw/
- METI 信用取引政策ページ: https://www.meti.go.jp/policy/economy/consumer/credit/
- METI クレジットカード番号等取扱契約締結事業者登録簿 PDF: https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
