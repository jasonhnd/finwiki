---
source: payment-firms/net-protections-hd
source_hash: 58268699de39ffa8
lang: ja
status: machine
fidelity: ok
title: "ネットプロテクションズHD (Net Protections HD)"
translated_at: 2026-06-26T03:26:36.039Z
---

# ネットプロテクションズHD (Net Protections HD)

## Wiki内の位置づけ

このページは [[payment-firms/INDEX|決済事業者の索引]] に属する、BNPL 専業の運営会社ページである。制度面は [[payment-firms/bnpl-landscape|日本の BNPL ランドスケープ]] と [[payments/japan-bnpl-credit-purchase-boundary|日本の BNPL と信用購入の境界]] を併せて読み、比較対象としては [[payment-firms/paidy|Paidy]] を置く。経済産業省登録の確認には [[payments/credit-purchase-card-operators-japan-index|信用購入・カード事業者の登録索引]] を使う。

## 要点

ネットプロテクションズホールディングス (東証プライム **7383**) は、日本で早くから BNPL 専業として展開してきた上場会社であり、EC 加盟店が「コンビニ・銀行振込で後払い」を選択肢として付けられる請求書型 BtoC 商品 **NP 後払い** で知られる。グループは **atone** (消費者側のウォレット型 BNPL)、**AFTEE** (台湾向け商品サイトを持つ海外 BNPL)、**NP 掛け払い** (BtoB 請求書払い) も運営する。[[payment-firms/paidy|Paidy]] と異なり決済プラットフォーム傘下ではない独立系であり、[[card-issuers/jaccs|Jaccs]] や [[card-issuers/orico|Orico]] と異なりクレジットカードのスタックには意図的に入らない。加盟店手数料型 BNPL の経済性がカードのインターチェンジとどう異なるかは、[[payments/japan-payment-scheme-economics-matrix|日本の決済スキーム経済性マトリクス]] で確認しやすい。^[verified-2026-06-24]

## 1. 法人・ライセンス境界

| 項目 | 読み方 |
|---|---|
| 法人 | 株式会社ネットプロテクションズホールディングス |
| 事業子会社 | 株式会社ネットプロテクションズ (NP 後払い / atone / NP 掛け払い 等を直接運営) ^[verified-2026-06-24] |
| 上場 | 東証プライム 7383 (2021-12 上場) |
| グループ内の領域 | EC 後払い (NP 後払い) / 消費者向け BNPL ウォレット (atone) / BtoB 掛け払い (NP 掛け払い) / 海外 BNPL (AFTEE) ^[verified-2026-06-24] |

## 2. 事業上の役割

- **NP 後払い** は日本の EC 後払い（請求書同梱型）の代表ブランドで、加盟店向けには **未回収リスクを丸抱えする保証型 BNPL** として与信判定 + 請求書発行 + 督促を一括サービス化している。NP 後払いの公式サイトは、商品到着後に請求書でコンビニ・銀行・郵便局払いを行う流れと、未回収リスク保証を訴求している。^[verified-2026-06-24]
- **atone** は消費者側のアカウントを起点にする月締め BNPL ウォレットで、加盟店をまたいで「翌月コンビニ払い」を可能にする。[[payment-firms/paidy|Paidy]] と近い利用体験を持つが、ブランドと経済圏は独立している。^[verified-2026-06-24]
- **NP 掛け払い** は BtoB 取引の請求書代行 + 与信 + 集金代行を BNPL 構造で提供し、伝統的な「請求書 → 振込 → 督促」の流れを SaaS 化する。^[verified-2026-06-24]
- **AFTEE** は海外 EC 後払いブランドとして Net Protections のコーポレートサイトから導線が置かれ、公式商品サイトでは台湾市場向けの BNPL 商品として展開されている。^[verified-2026-06-24]
- 商品ポートフォリオの違いは経済性を読むうえで重要である。NP 後払いは加盟店に接続する請求書型 BNPL、atone はアカウント起点の消費者向け BNPL、NP 掛け払いは BtoB の請求・集金、AFTEE は海外展開であり、持株会社を単一のチェックアウト商品だけに還元することはできない。^[verified-2026-06-24]

## 3. 単独ページにする理由

Net Protections は日本 BNPL の独立運営会社であり、[[payment-firms/paidy|Paidy]] や [[card-issuers/aplus|アプラス]] のように親グループの既存ページへ吸収して読む形にならない。そのため、JapanFG 名前空間では **独立 BNPL ホールディング** として別ページ化する価値が高い。

## 4. 規制・政策

- **個人情報保護法**: 与信判断のための個人データ（属性 / 取引履歴）取扱いと第三者提供範囲が論点。
- **東証プライム開示**: 上場会社として四半期 IR・有価証券報告書ベースで取扱高（GMV）・加盟店数・与信損失率が公表されているため、独立 BNPL の経済性を公開数字で読める数少ない事例である。^[extracted]

## Related

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

## Sources

- Net Protections HD コーポレートサイト: https://corp.netprotections.com/
- Net Protections IR: https://corp.netprotections.com/ir/
- NP 後払い 商品サイト: https://www.netprotections.com/
- atone 商品サイト: https://atone.be/
- NP 掛け払い 商品サイト: https://np-kakebarai.com/
- AFTEE 商品サイト (海外 BNPL): https://www.aftee.tw/
- 経済産業省 信用取引政策ページ: https://www.meti.go.jp/policy/economy/consumer/credit/
- 経済産業省 登録クレジットカード番号等取扱契約締結事業者一覧 PDF: https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
