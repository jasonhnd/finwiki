---
source: fintech/brazil-mexico-cbdc-stablecoin-push-2026
source_hash: 820a1911f27a95bf
lang: ja
model: manual-issue-239-provenance-repair
status: machine
fidelity: ok
title: "ブラジル Drex × メキシコ CoDi / MXNB · 公的・民間デジタルマネー経路 2026"
translated_at: 2026-07-29T16:39:22.568Z
---
# ブラジル Drex × メキシコ CoDi / MXNB · 公的・民間デジタルマネー経路 2026

## TL;DR

ブラジルとメキシコのデジタルマネー経路は同じではない。ブラジルの **Drex** は Banco Central do Brasil（BCB）が進める規制対象仲介機関型の DLT プラットフォームであり、2026-07-30 時点の公式ページでは、試験運用における利用者取引はシミュレーションで、Phase 2 は終了と表示されている。メキシコの **CoDi** は Banxico が SPEI 上で運営する QR / NFC 決済サービスであり、CBDC ではない。民間側では Bitso グループの Juno が **MXNB**（MXN、Arbitrum）と **BRL1**（BRL、Polygon）を発行する。従来このページにあった Mercado Bitcoin / M0 による共同発行、架空の流通量と月次フロー、Drex の開始日、CVM / Banxico による未確認の 2026 声明は削除した。

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|フィンテック索引]] の配下にある。[[fintech/em-market-crypto-dollarization-pattern|新興市場の暗号資産によるドル化パターン]]、[[fintech/brazil-drex-timeline-2026|ブラジル Drex のタイムライン]]、[[fintech/m0-network-infrastructure-update-2026|M0 インフラ更新]] とあわせて読む。

## 検証済みプログラム地図

下表は [BCB Drex ページ](https://www.bcb.gov.br/en/financialstability/drex_en)、[BCB 試験運用ページ](https://www.bcb.gov.br/estabilidadefinanceira/piloto-drex)、[Banxico CoDi ページ](https://www.banxico.org.mx/sistemas-de-pago/codi-cobro-digital-banco.html)、[Juno オペレーション文書](https://docs.bitso.com/juno/docs/overview-of-basic-operations) に基づく（2026-07-30 確認）。

| 経路 | 運営者 / 発行会社 | 公開状況 | 決済 / 裏付け |
|---|---|---|---|
| Drex プラットフォーム | Banco Central do Brasil と規制対象の試験参加者 | 試験運用中。試験運用ページ上の利用者取引はシミュレーション | 試験環境内の Drex のホールセール / リテール表現と、規制対象残高のトークン化 |
| Pix | Banco Central do Brasil のエコシステム | 本番稼働中の即時決済網 | 商業銀行 / 決済口座の通貨。CBDC ではない |
| CoDi | Banco de México / SPEI 参加者 | 本番稼働中の支払依頼 / QR-NFC サービス | SPEI に接続した銀行口座決済。CBDC ではない |
| MXNB | Bitso 傘下の Juno | 法人向けの発行 / 償還商品 | MXN に 1:1 で連動。公式文書では Arbitrum を記載 |
| BRL1 | Bitso 傘下の Juno | 法人向けの発行 / 償還商品 | BRL に 1:1 で連動。公式文書では Polygon を記載 |

## Drex：公式試験運用で確認できること

BCB は Drex プラットフォームを、規制対象の仲介機関が要求払預金と電子マネーの残高を変換し、顧客がスマート金融サービスを利用できるようにする DLT エコシステムと説明している。したがって、リテール向け残高のすべてを BCB の直接口座と説明したり、Drex をパブリックチェーンのステーブルコインと同一視したりするのは不正確である。

[Drex 試験運用ページ](https://www.bcb.gov.br/estabilidadefinanceira/piloto-drex) には、次の内容が記載されている。

- 最終利用者は試験参加者ではなく、その取引はシミュレーションされる。
- Phase 1 と Phase 2 は終了と表示されている。
- Phase 2 には 16 のコンソーシアム / 企業が参加し、13 のユースケーステーマが選定された。
- 試験対象には、債権、担保付信用、国債、貿易金融、FX 最適化、社債、農業関連資産、車両、実物資産、パブリックネットワーク上の資産が含まれた。

BCB の Phase 1 報告書は、プライバシー、データ保護、セキュリティについて、なお追加研究が必要だったと述べている。試験運用の終了から、日付を伴う全国展開の確約を推定すべきではない。

## CoDi：デジタルペソではなく決済網

[Banxico の CoDi ページ](https://www.banxico.org.mx/sistemas-de-pago/codi-cobro-digital-banco.html) は CoDi を、参加金融機関と SPEI を介して QR および NFC メッセージを利用する決済 / 代金回収の仕組みと説明している。このページは Banxico がリテール CBDC を恒久的に否定したことを示しておらず、従来の月間取引量や加盟店数の予測も裏付けない。CoDi はメキシコの CBDC と呼ぶのではなく、即時決済へのアクセス層として Pix や UPI と比較すべきである。

## MXNB と BRL1：明記された発行会社とチェーン

[Bitso の MXNB 商品ページ](https://bitso.com/br/business/products/mxnb-stablecoin) は、Bitso 傘下の Juno を発行会社として特定し、規制対象機関に保管されたペソおよび現金同等物によって MXN に 1:1 で裏付けられると述べている。[Juno のオペレーション文書](https://docs.bitso.com/juno/docs/overview-of-basic-operations) は次の内容を記載する。

- **MXNB** — MXN に 1:1 で連動し、Arbitrum 上に展開。SPEI または Bitso Transfer を介して発行 / 償還する。
- **BRL1** — BRL に 1:1 で連動し、Polygon 上に展開。Bitso Transfer を介して発行 / 償還する。

確認した公式資料は、M0 または Mercado Bitcoin を共同発行会社として挙げていない。また、従来の MXNB の Base / Ethereum / Polygon というチェーン一覧、$25M の流通量スナップショット、Banxico が金融政策として同商品を「容認」しているとの主張も裏付けない。

## 比較の境界

以下の表は [BCB Drex](https://www.bcb.gov.br/en/financialstability/drex_en)、[Banxico CoDi](https://www.banxico.org.mx/sistemas-de-pago/codi-cobro-digital-banco.html)、[Juno のオペレーション文書](https://docs.bitso.com/juno/docs/overview-of-basic-operations) から確定できる比較範囲を示す。日付を伴う取引データセットがなければ、市場シェアや反ドル化効果を付与しない。

| 質問 | ブラジル | メキシコ |
|---|---|---|
| 中央銀行のデジタルマネー事業 | Drex 試験運用 | CoDi 資料からは確認できない |
| 本番稼働中の即時決済網 | Pix | SPEI / CoDi |
| 確認資料に記載された民間の現地通貨トークン | Juno の BRL1 | Juno の MXNB |
| 発行会社文書に記載されたパブリックチェーン展開 | Polygon 上の BRL1 | Arbitrum 上の MXNB |
| これらの資料で確認できる最終利用者向け CBDC 発行 | なし。試験利用者はシミュレーション | なし |
| 公式開始日 / 普及数値 | 日付を伴う BCB 発表がなければ記載しない | CoDi のランディングページからは記載しない |

## デューデリジェンス上の含意

1. **試験運用**、**本番決済網**、**民間トークン発行**を別々の状況として扱う。
2. 発行会社の身元と償還契約を確認する。販売会社のブランドが自動的に法的な発行会社になるわけではない。
3. 流通量と証明書には、明示的な日付とコントラクトアドレスを付す。
4. 規制対象企業を通じてトークンを利用できることから、政府の承認、政策上の支持、金融政策上の意図を推定しない。
5. クロスボーダーで利用できても、FX、AML/CFT、税務、送金に関する規則は免除されない。

## 関連項目

- [[fintech/INDEX|FinWiki フィンテック索引]]
- [[fintech/em-market-crypto-dollarization-pattern|新興市場の暗号資産によるドル化パターン]]
- [[fintech/brazil-drex-timeline-2026|ブラジル Drex のタイムライン]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ概要]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 多層アーキテクチャの三類型]]
- [[fintech/m0-network-infrastructure-update-2026|M0 2026 インフラ更新]]
- [[fintech/fatf-travel-rule-overview|FATF トラベルルール]]

## Sources

- Banco Central do Brasil — Drex: https://www.bcb.gov.br/en/financialstability/drex_en
- Banco Central do Brasil — Piloto Drex: https://www.bcb.gov.br/estabilidadefinanceira/piloto-drex
- Banco Central do Brasil — Phase 2 themes: https://www.bcb.gov.br/en/pressdetail/2573/nota
- Banco de México — CoDi: https://www.banxico.org.mx/sistemas-de-pago/codi-cobro-digital-banco.html
- Bitso Business — MXNB: https://bitso.com/br/business/products/mxnb-stablecoin
- Juno docs — MXNB / BRL1 operations: https://docs.bitso.com/juno/docs/overview-of-basic-operations
