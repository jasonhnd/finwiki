---
title: European Payments Initiative · Wero · 欧州銀行連合のリテール決済ウォレット · PayPal / Apple Pay 対抗
aliases: [european-payments-initiative-wero, EPI, Wero, EPI Wero, European Payments Initiative]
domain: fintech
created: 2026-05-25
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-25
confidence: likely
tags: [fintech, payments, epi, wero, european-bank-consortium, retail-wallet, sepa-instant, p2p, anti-paypal, digital-euro-prep]
status: candidate
sources:
  - https://www.epicompany.eu/
  - https://www.wero-wallet.eu/
  - https://www.epicompany.eu/news
  - https://www.ecb.europa.eu/paym/intro/news/html/index.en.html
  - https://www.bundesbank.de/en/tasks/payment-systems
---

# European Payments Initiative · Wero · 欧州銀行連合のリテール決済ウォレット · PayPal / Apple Pay 対抗

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/e-euro-retail-rollout|digital euro retail rollout]] for the ECB-issued retail money parallel track, and with [[fintech/fnality-wholesale-settlement|Fnality]] for the wholesale-side European bank-consortium pattern (Wero is the retail mirror).

> [!info] TL;DR
> European Payments Initiative (EPI Company SE, ベルギー登記) は 2020 年に欧州主要銀行 14 行 + Worldline + Nexi が共同設立したリテール決済連合で、旗艦製品 **Wero wallet** は **2024 年 7 月から DE / FR / BE / NL 4 カ国で段階的にローンチ**、P2P 送金を先行させ、加盟店決済とオンライン checkout が段階的にリリースされた。Wero の根本目的 = 欧州銀行による**リテール決済主権の奪還**であり、PayPal / Apple Pay / Google Pay / Visa-Mastercard 等の非欧州系に対抗。基盤は **SEPA Instant Credit Transfer (SCT Inst)** で、ECB が計画する [[fintech/e-euro-retail-rollout|digital euro]] と「銀行連合 vs 中銀直発」二者択一/並走構図を形成。

## Key facts

- 登記法人: EPI Company SE · Brussels · 2020-Q3 設立 ^[extracted]
- 株主 / 加盟銀行: BNP Paribas, BPCE, Crédit Mutuel, Deutsche Bank, DZ Bank, ING, KBC, La Banque Postale, Nationale-Nederlanden, Rabobank, Santander, Société Générale, Sparkassen-Finanzgruppe, UniCredit + Worldline + Nexi ^[extracted]
- Wero ローンチ: 2024-07 (DE / FR 初登場, P2P) → 2024-Q4 (BE / NL P2P) → 2025-Q2 (オンライン加盟店 checkout) → 2026-Q1 (NFC 実店舗, EU 他国へ拡張) ^[extracted]
- ユーザー数: ~ **30M+** Wero registered users (2026-Q1 連合公表) ^[extracted]
- 基盤決済: SEPA Instant Credit Transfer (SCT Inst, 10 秒以内に final settlement) ^[extracted]
- 累計株式 / 開発投資: ~€1.5B+ (2020-2024 の多次注資) ^[extracted]
- 拒否 / 撤退: スペイン BBVA、イタリア Intesa Sanpaolo 等が 2022-2023 に撤退 → 連合は 31 行から 14 行へ縮小 ^[extracted]
- EBA Clearing / SCT Inst との相互運用: Wero 送金は RT1 / TIPS rails (Eurosystem TARGET Instant Payment Settlement) を走る ^[extracted]

## Mechanism / How it works

Wero のコアモデル = **「欧州銀行連合のリテール決済ウォレット」**で、ユーザーは 14 行加盟銀行のアプリ内で**直接 P2P 送金 (電話番号またはメールアドレスを利用) + 加盟店 checkout + NFC 実店舗**が可能、全て SCT Inst 経由で 10 秒以内に完了。**重要な差異**: PayPal / Apple Pay は欧州消費者の決済データ + interchange 収益を米国に残す;Wero はそれらの価値を欧州銀行体系内に留める。これは [[fintech/jurisdiction-list-monetary-protectionism|管轄区域通貨保護主義]] の欧州サンプル—— 外資を遮断するのではなく、並行体系を構築することである。

技術 / 規制スタック: 基盤は [[systems/sepa-instant-overview|SEPA Instant Credit Transfer]] (10 秒以内に final、EBA Clearing RT1 + Eurosystem TIPS 二軌 rails)、Wero は SCT Inst 上の UX / addressing 層 (ユーザーは IBAN の代わりに電話番号/メールアドレスを使用)。**stablecoin / token / ブロックチェーンは導入せず**、完全に SEPA 内で運営される「伝統的決済の近代化」経路であり、[[fintech/circle-usdc-stablecoin|USDC]] / [[fintech/stripe-usdb-bridge-stablecoin|USDB]] の「オンチェーン・ドル」経路とは根本的に対照的。

[[fintech/e-euro-retail-rollout|digital euro]] との関係: **両者の目標重複度は 80%** —— 共に欧州リテール決済主権の方案。ECB の digital euro は中銀直発のリテール通貨 (CBDC)、Wero は銀行連合の商業方案。**ECB の実際の戦略 = digital euro を「銀行 + Wero 等ウォレット経由で分配」と設計し、完全代替ではなく** → これは Wero を digital euro の重要リテール分配チャネルの一つとして固定し、[[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ]] における「二層分配」モデルと一致。

## Origin & evolution

2020-Q3 EPI Company SE 設立 = 欧州 31 行 + 2 PSP (Worldline / Nexi) が共同発起、目標は「汎欧州決済方案 = カード + ウォレット + 即時決済」。2021-2022 戦略調整: 自前 card scheme の構築を断念 (Visa/MA との正面対抗コストが高すぎ) → wallet + SCT Inst に集中。**2022 BBVA / Intesa / Commerzbank 等が撤退**、連合は 31 行から ~16 行 (後 14 行で安定) に縮小、これは [[fintech/multi-megabank-consortium-governance|多大銀行連邦ガバナンス]] の典型的なガバナンス摩擦。2023-Q4 フランス **Payconiq International** (BE/NL/LU の既存 P2P ウォレット) を買収 = Wero の原型。**2024-07 Wero 初登場**: DE (Deutsche Bank / Sparkassen) + FR (BPCE / SocGen / Crédit Mutuel)、P2P 送金先行。2024-Q4 BE/NL 参加。2025-Q2 オンライン checkout 段階。2026-Q1 NFC 実店舗 + EU 他国拡張計画。**重要イベント**: 2025 EU **Instant Payments Regulation** が EUR 圏全銀行に SCT Inst 対応 (10 秒 + 追加料金なし) を義務化 → Wero は直接受益、Wero UX が SCT Inst 上のウォレット層であるため。2026-Q2 Wero ユーザー 30M+、[[fintech/circle-usdc-stablecoin|USDC]] 欧州リテールリーチとはほぼ重ならない (USDC は主に crypto-native ユーザー)。

## Counterpoints

Wero の「銀行連合」モデルは PayPal / Apple Pay の「単一企業意思決定」より本質的に遅い —— 2020 開始から 2024 P2P ローンチまで、その間に複数加盟行が撤退、**[[fintech/multi-megabank-consortium-governance|多大銀行連邦ガバナンス]] のスピード劣勢の生きたサンプル**。Apple Pay / Google Pay は欧州モバイル OS 層で構造的優位を持ち (iOS にプリインストール)、Wero アプリはユーザーの能動的ダウンロードが必要、**OS 層は Wero NFC の完全呼出に開放されない**(EU DMA が Apple に NFC 開放を要求した後に局所的に緩和されたが、UX 摩擦は残る)。[[fintech/e-euro-retail-rollout|digital euro]] と最終リテール流通でゲーミング —— ECB digital euro が Wero を「分配チャネルの一つ」に固定すれば Wero は独立ブランドを失い、ECB が直接リテールウォレットを発行 (商業銀行非依存) すれば Wero は周縁化。Wero はオンチェーン stablecoin に関与せず、**[[agent-economy/x402-http-payment-overview|x402 agent 決済]] / [[agent-economy/ap2-overview|AP2]] 等のオンチェーン agent エコノミーシナリオではほぼ完全に欠席** —— 欧州 agent エコノミーが立ち上がれば、Wero と USDC/USDB 経路が競合関係になる。

## Open questions

Wero は 2027 までに EU 27 加盟国全て (現状 DE/FR/BE/NL 4 カ国) に拡張可能か?ECB digital euro が 2027-2028 にローンチした後、Wero は「分配チャネル」に固定されるか周縁化されるか?Wero はある段階で EURC ([[fintech/circle-usdc-stablecoin|Circle EURC]]) またはユーロ TD をクロスボーダー / agent シナリオのオンチェーン決済として導入 (純 SEPA 境界を突破) するか?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/e-euro-retail-rollout|digital euro retail rollout]]
- [[fintech/fnality-wholesale-settlement|Fnality]]
- [[fintech/multi-megabank-consortium-governance|多大銀行連邦ガバナンス]]
- [[fintech/mica-overview|MiCA]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ]]
- [[fintech/jurisdiction-list-monetary-protectionism|管轄区域通貨保護主義]]
- [[fintech/circle-usdc-stablecoin|Circle USDC / EURC]]
- [[fintech/stripe-usdb-bridge-stablecoin|Stripe USDB]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC 採用カーブ]]
<!-- /wiki-links:managed -->

## Sources

- https://www.epicompany.eu/ — European Payments Initiative SE 公式トップページ
- https://www.wero-wallet.eu/ — Wero wallet 公式トップページ
- https://www.epicompany.eu/news — EPI ニュースリリース
- https://www.ecb.europa.eu/paym/intro/news/html/index.en.html — ECB 決済システムニュース
- https://www.bundesbank.de/en/tasks/payment-systems — Bundesbank 決済システムページ (EPI/Wero DE 側)
