---
source: payment-firms/net-protections-hd
source_hash: 2239116bdb84d047
lang: ja
status: machine
fidelity: ok
title: "ネットプロテクションズHD"
translated_at: 2026-06-02T14:54:39.101Z
---

# ネットプロテクションズHD

## ウィキ上の位置づけ

この項目は、純粋な **BNPL 事業者**として [[payment-firms/INDEX|payment-firms INDEX]] 配下に置く。制度メモの [[payment-firms/bnpl-landscape|Japan BNPL landscape]] と比較対象の [[payment-firms/paidy|Paidy]] を併せて読み、規制の見方は [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]]、METI 登録の流れは [[payments/credit-purchase-card-operators-japan-index|credit-purchase / card operator registry]] で確認する。

## 要約

Net Protections Holdings（東証 PRIME **7383**）は、日本で早期に立ち上がった BNPL 専業上場企業であり、EC 加盟店が「コンビニ / 銀行振込で後払い」の選択肢として組み込む請求書型 BtoC 商品 **NP 後払い** で知られる。グループはほかに、消費者側ウォレット型 BNPL の **atone**、台湾 / ベトナムを対象とする東南アジア BNPL の **AFTEE**、BtoB 請求書払いの **NP 掛け払い** も運営する。[[payment-firms/paidy|Paidy]] と異なり決済プラットフォーム傘下ではなく独立系であり、[[card-issuers/jaccs|Jaccs]] や [[card-issuers/orico|Orico]] と異なりクレジットカードのスタックには意図的に入らない。加盟店手数料型 BNPL の経済性がカードのインターチェンジとどう異なるかを見るには、[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] が最も見やすい。

## 1. 法人・ライセンス境界

| 項目 | 読み方 |
|---|---|
| 法人 | 株式会社ネットプロテクションズホールディングス |
| Operating subsidiary | 株式会社ネットプロテクションズ (NP 後払い / atone / NP 掛け払い 等を直接運営) |
| 上場 | 東証 PRIME 7383 (2021-12 上場) |
| Group lanes | EC 後払い (NP 後払い) / 消費者向け BNPL ウォレット (atone) / BtoB 掛け払い (NP 掛け払い) / 海外 BNPL (AFTEE: 台湾・ベトナム) |

## 2. 事業上の役割

- **NP 後払い** は日本の EC 後払い（請求書同梱型）の代表ブランドで、加盟店向けには **未回収リスクを丸抱えする保証型 BNPL** として与信判定 + 請求書発行 + 督促を一括サービス化している。^[extracted]
- **atone** は消費者側のアカウントを起点にする月締め BNPL ウォレットで、加盟店をまたいで「翌月コンビニ払い」を可能にする ([[payment-firms/paidy|Paidy]] と近い UX、但しブランド・経済圏は独立)。^[extracted]
- **NP 掛け払い** は BtoB 取引の請求書代行 + 与信 + 集金代行を BNPL 構造で提供し、伝統的な「請求書 → 振込 → 督促」フローを SaaS 化する。
- **AFTEE** は台湾・ベトナムの EC 後払い市場へ進出し、Net Protections の与信モデルを海外に移植している。^[extracted]

## 3. 独立ページが重要な理由

Net Protections は日本 BNPL の **取引高 / 加盟店数で最大級** の独立 operator にもかかわらず、コーポレートが [[payment-firms/paidy|Paidy]] や [[card-issuers/aplus|アプラス]] のように親グループ既存ページに吸収されないため、JapanFG 名前空間で **独立 BNPL ホールディング** として別ページ化する価値が高い。

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

- Net Protections HD コーポレートサイト: https://corp.netprotections.com/
- Net Protections IR: https://corp.netprotections.com/ir/
- NP 後払い 製品サイト: https://www.netprotections.com/
- atone 製品サイト: https://atone.be/
- AFTEE 製品サイト (海外 BNPL): https://aftee.jp/
- METI 割賦販売法上の登録事業者: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
