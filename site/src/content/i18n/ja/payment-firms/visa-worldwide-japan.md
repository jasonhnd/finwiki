---
source: payment-firms/visa-worldwide-japan
source_hash: f045b2f1fa16deb7
lang: ja
status: machine
fidelity: ok
title: "ビザ・ワールドワイド・ジャパン (Visa Worldwide Japan)"
translated_at: 2026-06-19T06:09:18.108Z
---

# ビザ・ワールドワイド・ジャパン (Visa Worldwide Japan)

## ウィキ上の位置づけ

この項目は [[payment-firms/INDEX|payment-firms INDEX]] の下に位置する。ピア／対比のコンテキストとして [[card-issuers/jcb|JCB]]（Visa は global pure-scheme、JCB は Japan-origin hybrid）と、より広範なシステム／規制上の境界として [[payments/japan-card-issuer-acquirer-processor-split|Japan card 発行会社 / アクワイアラ / processor split]] と照らし合わせて読むこと。

## TL;DR

ビザ・ワールドワイド・ジャパンは、米 Visa Inc. (NYSE:V) の **日本拠点法人**で、Visa ブランドの日本国内ライセンス供与・スキーム運営を担う。日本では国際カードブランドとして **最大シェアの推定** を保持し ^[likely]、[[card-issuers/smbc-card|三井住友カード]] (Visa 提携主軸)、[[card-issuers/mufg-nicos|三菱UFJニコス]]、[[card-issuers/rakuten-card|楽天カード]] 等の主要発行会社 に Visa ブランドを供与。歴史的には **VJA (Visa Japan Association、ビザ・ジャパン協会)** という Visa ブランド国内発行会社連合体が三井住友カードを事務局として運営されてきた経緯があり、ブランド窓口 (Visa Worldwide Japan) と協会組織 (VJA) の 2 階建て構造が独特。

## 1. License / group boundary

| Item | Notes |
|---|---|
| Legal name | ビザ・ワールドワイド・ジャパン株式会社 (Visa Worldwide Japan Co., Ltd.) |
| Parent | Visa Inc. (米 NYSE:V) |
| Brand role | Pure 4-party scheme 事業者 / brand licensor — 自社では発行も加盟店契約もしない |
| 関連協会 | **VJA (Visa Japan Association)** — Visa 国内発行会社連合 (事務局: 三井住友カード)、共同事業 (ポイント・キャンペーン等) を運営 |
| Wiki role | Visa の日本拠点法人ページ。VJA は協会組織として注記、発行会社個別ページは別立て。 |

## 2. Business lines in Japan

- **ブランドライセンス供与**: SMBC 系 (三井住友カード主軸)、MUFG 系 ([[card-issuers/mufg-nicos|三菱UFJニコス]])、楽天カード、イオンカード等の主要発行会社 に Visa ブランド供与。
- **スキーム運営**: VisaNet を通じた国境横断の Authorization / 清算 / 決済提供。
- **インターチェンジ料率設定・モニタリング**: 日本市場向け料率を設定 — 詳細は [[payments/japan-interchange-and-merchant-fee-stack]] 参照。
- **VJA との協調事業**: Visa ブランドの全国共通プロモーション、海外旅行保険等の共同付帯サービス。VJA は協会会員発行会社横断のキャンペーンを実施。
- **加盟店戦略・テクノロジー導入**: Visa タッチ決済 (NFC 非接触)、Visa Click to Pay、トークン化、3-D Secure 2.0 等の国内普及。
- **B2B・コマーシャル・クロスボーダー**: 法人 purchasing card、Visa B2B Connect 等の供給。

ブランド窓口としては「Visa の日本における顔」だが、消費者向け発行 / 加盟店契約は一切しない — METI Installment Sales Act 登録業者ではない。

## 3. Strategy & competitive position vs JCB / domestic schemes

Visa は **日本国内シェア首位の国際ブランド** ^[likely]。圧倒的な国内発行会社数 (VJA 加盟は伝統的に 100 行超の地銀・信金等を含む)、加盟店受容性、グローバル相互利用性で他ブランドに先行する。[[card-issuers/jcb|JCB]] が「Japan brand」「アジア強い」を訴求するのに対し、Visa は「世界 200 ヵ国超で使える」「最大の加盟店ネットワーク」を訴求。[[payment-firms/mastercard-japan|Mastercard Japan]] とは 4-party 同士のグローバル覇権争いだが、日本では Visa が先行。楽天カードや Olive ([[card-issuers/smbc-card|三井住友カード]]) のような新規プロダクトにも Visa 採用が多いことが優位の源泉。VJA の存在は日本独特で、Visa グローバル本体がブランド供与を集約管理する一方、国内発行会社連合が共同事業を別途運営する「2-tier」構造を成す。

## 4. Why this page matters

- 「**Visa Worldwide Japan**」(ブランド窓口) と「**VJA**」(国内発行会社連合) の **2 階建て構造** を整理
- 国内最大シェア国際ブランドの **法人エンティティ境界** を明示
- カード発行会社ページ ([[card-issuers/smbc-card]] 等) との上下関係を整理する起点

## Related

- [[card-issuers/jcb|JCB]] (国内主要競合・3-party hybrid・日本起源)
- [[payment-firms/mastercard-japan|Mastercard Japan]] (4-party 直接競合)
- [[payment-firms/american-express-international-japan|American Express International Japan]] (3-party 競合)
- [[payment-firms/unionpay-international-japan|UnionPay International Japan]] (インバウンド競合)
- [[card-issuers/smbc-card]] (VJA 事務局・Visa 主軸発行会社)
- [[card-issuers/mufg-nicos]] / [[card-issuers/rakuten-card]] (Visa ブランド主要発行会社)
- [[payments/japan-card-issuer-acquirer-processor-split]] / [[payments/japan-interchange-and-merchant-fee-stack]]

## Sources

- Visa Japan 公式サイト: https://www.visa.co.jp/
- Visa ビジネス概要 (日本): https://www.visa.co.jp/about-visa/our_business/visa-japan.html
- Visa Inc. 投資家情報 (米): https://investor.visa.com/
