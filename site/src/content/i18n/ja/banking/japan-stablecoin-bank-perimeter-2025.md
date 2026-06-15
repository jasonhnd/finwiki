---
source: banking/japan-stablecoin-bank-perimeter-2025
source_hash: ec46cd5f66800068
lang: ja
status: machine
fidelity: ok
title: "日本のステーブルコイン / BaaS 銀行境界 (2025–2026)"
translated_at: 2026-06-15T03:48:21.917Z
---

# 日本のステーブルコイン / BaaS 銀行境界 (2025–2026)

## Wiki 経路

この項目は [[banking/INDEX|banking index]] の下に位置し、日本のステーブルコイン / 電子決済手段 (EPI) 規制アーキテクチャの銀行側境界ビューである。フィンテック側の境界ビューとしては [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]] と、プラットフォームの anchor である [[payment-firms/progmat|Progmat]] および発行体の anchor である [[payment-firms/jpyc|JPYC]]・[[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade USDC distribution]] と、[[fintech/jp-stablecoin-progmat|jp-stablecoin-progmat detailed]]・[[fintech/jp-trust-type-sc-architecture|jp trust-type SC architecture]]・[[fintech/jp-stablecoin-dcjpy|jp-stablecoin-dcjpy]]・[[fintech/japan-stablecoin-2026-event-tracker|Japan stablecoin 2026 event tracker]]・[[fintech/japan-epi-three-types-overview|Japan EPI three types overview]]・[[fintech/japan-epi-four-camps-comparison|Japan EPI four camps comparison]]・[[fintech/institutional-stablecoin-deposit-token-thesis|institutional stablecoin deposit-token thesis]] と、[[banking/baas-japan-landscape|BaaS Japan landscape]]・[[banking/japan-baas-operating-models|Japan BaaS operating models]] の BaaS フレームワークと併せて読むこと。ライセンススタックの文脈は [[financial-licenses/payment-license-stack|payment license stack]]・[[financial-licenses/bank-license-and-baas-boundary|bank license / BaaS boundary]] を経由すること。

## 要点（TL;DR）

**2025** までに、銀行発行のデジタルマネーに対する日本の規制境界は、改正資金決済法の枠組みの下で三層アーキテクチャへと固まった: (1) 標準的な 銀行法 の預金債務レジームの下で **銀行** が発行する **預金トークン (deposit tokens)**、(2) 三つの発行体類型——銀行 (預金型 EPI)、資金移動業 (funds-transfer-type EPI)、信託 (信託型 EPI)——を認める新たな改正資金決済法レジームの下で発行され、別個の **電子決済手段等取引業者** (EPI service provider) ライセンスによって流通される **ステーブルコイン / 電子決済手段 (電子決済手段)**、そして (3) 同じ EPI サービスプロバイダーライセンスを通じてのみ日本で流通される **非発行の外国ステーブルコイン (USDC 等)**。銀行側の境界には三つの具体的な帰結がある: (a) 預金型 EPI を銀行預金裏付けトークンとして発行できるのは銀行のみ; (b) [[payment-firms/progmat|Progmat]] のようなプラットフォームの下で 信託型 ステーブルコインの発行体になれるのは信託銀行 (信託兼営銀行) のみ; (c) 銀行による BaaS パートナーチャネル流通は、いまや異なるライセンススタックの下での別個のステーブルコイン流通チャネルと共存する。**MUFG の Progmat プラットフォーム** (2023-10 以降は独立企業) は 信託型 SC のための機関投資家向けレールを提供する; **JPYC** は 資金移動業 ベースの JPY SC を運営する; **SBI VC Trade** は唯一登録された外国 SC 流通業者 (USDC) である。地域銀行のパイロットは出現しつつあるが、2025 移行時点では運用上限定的である: 北國銀行の預金型ステーブルコイン「トチカ」 (トークン化預金) は日本初のそうした商品として 2024-04-01 にローンチされ、ゆうちょ銀行は DeCurret DCP 経由のトークン化預金取扱を FY2026 をターゲットに発表した。

## 1. 三層境界

| Layer | License / route | What banks can do | What banks cannot do |
|---|---|---|---|
| **預金トークン (預金トークン)** | 銀行法 standard bank deposit | Issue tokenized deposit balances backed 1:1 by deposit liabilities on the bank's balance sheet; settle peer-to-peer or commercial transactions; redeem at par | Cannot be transferred outside the bank network without legal-form change; cannot be held by non-bank-account holders directly |
| **銀行発行 EPI (預金型 EPI / 電子決済手段 第1号)** | 改正資金決済法 — EPI issuer | Issue a regulated electronic-payment-instrument backed by deposits; distributable through bank or non-bank EPI service providers | Subject to EPI regime (KYC, redeemability, reserve, conduct rules); cannot disguise non-deposit tokens as deposit-backed |
| **信託型 EPI (信託型 EPI / 電子決済手段 第3号)** | 改正資金決済法 — trust-bank issuer | Trust banks (信託兼営銀行) can issue 信託型 stablecoin where backing assets sit in trust; institutional / platform-based use case | Non-trust-banks cannot issue 信託型 EPI; issuer role distinct from platform-provider role |
| **資金移動型 EPI (資金移動型 EPI / 電子決済手段 第2号)** | 改正資金決済法 — funds-transfer-business issuer | A funds-transfer business (資金移動業, 第1〜3種) can issue a JPY stablecoin under the EPI framework | A bank as such does not need 資金移動業 — different lane |
| **EPI 流通 (電子決済手段等取引業)** | 改正資金決済法 — separate distributor license | Banks or non-banks holding the 電子決済手段等取引業 license can distribute EPI to customers; foreign SCs (USDC) are distributable only via this license | Distribution license does not authorise issuance |

### 預金トークン — 標準的な銀行預金レジームの内側

**預金トークン** は新たな法形式ではない。銀行は 銀行法 の下で顧客の預金債務を保有する; トークンはプログラマブルな台帳上のその預金残高のデジタル表現である。決済、償還、消費者保護はいずれも標準的な銀行預金ルールに従う。例としては [[fintech/jp-stablecoin-dcjpy|DCJPY]] (Decurret を anchor とする銀行預金トークンの取り組み) が含まれる。

| Pros for the bank | Cons for the bank |
|---|---|
| No new license; fits inside existing 銀行法 framework | Limited to bank-customer-to-bank-customer flow without further legal-form changes |
| Backing is the bank's deposit balance — already capitalised and supervised | Requires bilateral / consortium agreements to scale beyond a single bank |
| Customer protection identical to deposit | Programmability constraints from deposit-liability regulatory expectations |

### 銀行発行 EPI (預金型) — 預金とより広範な流通を橋渡しする

預金型 EPI のバリアントは、裏付けが預金債務でありながらその **流通** が 電子決済手段等取引業 流通業者を介して単一銀行の顧客基盤を超えて広がり得る、規制された電子決済手段を銀行が発行することを可能にする。これは JPYC のような非銀行が用いる 資金移動型 (funds-transfer-type) の 資金移動型 EPI に対する銀行側のアナログである。

| Pros for the bank | Cons for the bank |
|---|---|
| Allows the bank's brand and balance sheet to anchor a circulating SC | Adds the EPI regulatory layer (KYC obligations on distributors, redeemability rules, reserve rules) on top of banking supervision |
| Compatible with cross-bank settlement design | Distributors must hold the EPI distributor license — adds a coordination burden |

### 信託型 EPI (信託型) — 機関投資家・プラットフォームのレーン

**信託型 SC** は信託構造を用いる: 信託銀行 (信託兼営銀行) が発行体となる; 裏付資産 (複数銀行の JPY 預金、JGB 等) は信託の中に置かれる; プラットフォームプロバイダーが技術レールを整える; 機関投資家・法人ユーザーがトークンを保有し取引する。[[payment-firms/progmat|Progmat]] プラットフォームが代表例である。

| Pros for the bank | Cons for the bank |
|---|---|
| Trust segregation means SC holders' claim is on the trust assets, not on the trust bank's general balance sheet | Only trust-banks can issue — restricts the issuer set to a few institutions |
| Multi-asset backing enables broader institutional adoption | More operational complexity than a single-bank deposit-token model |
| Platform-provider role (Progmat) is distinct from issuer role (trust bank) — clear regulatory layering | Coordination across issuer / platform / participating-bank / EPI distributor is non-trivial |

## 3. 発行体 / 流通業者 anchor マップ (2025–2026)

| Token | Backing form | Issuer | Platform | Distribution | Regulatory layer |
|---|---|---|---|---|---|
| **DCJPY** (deposit token) | Bank deposit liability | Participating banks (multi-bank pilot) | DeCurret DCP | Limited / pilot | 銀行法 standard |
| **Progmat Coin (planned 信託型 SC)** | Trust-held JPY assets | [[trust-banks/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]] and other participating trust banks | [[payment-firms/progmat|Progmat]] | Bank and non-bank EPI distributors | 改正資金決済法 信託型 EPI |
| **JPYC** | 資金移動業 — backing held under 資金移動業 funds management rules | [[payment-firms/jpyc|JPYC株式会社]] | Own infrastructure | Direct + crypto exchanges | 改正資金決済法 資金移動型 EPI |
| **USDC (foreign SC, distributed in Japan)** | Circle reserve | Circle (US issuer) | (foreign issuer infrastructure) | [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] — the single registered EPI distributor for USDC as of the 2025–2026 cycle | 改正資金決済法 電子決済手段等取引業 (distribution side only) |

### なぜプラットフォームプロバイダー ≠ 発行体なのか

- Progmat の規制上の負担は、規制対象の金融機関のそれではなく、技術および運用プラットフォームプロバイダーのそれである。
- 発行体ステータス (および対応する 改正資金決済法 上の義務) は信託銀行が担う——消費者保護と SC 償還の義務を規制対象の銀行バランスシート上に保つ。
- 複数の信託銀行が同じ Progmat プラットフォーム上で発行体として行動でき、単一の発行体でボトルネックになることなくより広範な機関投資家の採用を可能にする。

このパターンは、[[banking/baas-japan-landscape|BaaS]] が **パートナーブランド** (UX レイヤー) を **銀行** (ライセンス + バランスシート) から分離するやり方を映している; Progmat は **プラットフォーム** (技術) を **発行体** (ライセンス + 裏付資産) から分離する。

### 地域銀行に何ができ、何ができないか

- **預金トークン** は 銀行法 の下で任意の銀行がアクセス可能である——地域銀行は複数銀行の預金トークンの取り組みに参加できる。
- **預金型 EPI 発行** は原則として地域銀行に開かれているが、EPI 規制レイヤーが単一銀行の地域発行にとって費用対効果が見合わないかもしれない運用・監督上の負担を加える——協調的なプラットフォーム参加が現実的な経路である。
- **信託型 EPI 発行** は信託銀行ライセンスを要する; 信託兼営銀行 ライセンスを持つ地域銀行のみが発行体として直接参加できる。

### BaaS パートナーチャネル流通

1. **EPI 流通ライセンスのオーバーレイ。** パートナーブランドの顧客に SC を流通させたい BaaS 参加地域銀行は、別個の 電子決済手段等取引業 ライセンスを必要とする。
2. **預金トークンの統合。** BaaS パートナーブランドの顧客ジャーニーは、裏付けとなる銀行預金がトークン化されれば預金トークン決済を組み込むことができる——ただしこれは 2025–2026 時点ではまだパイロット / 計画段階である (例: 北國銀行「トチカ」は 2024-04 よりライブ; ゆうちょ銀行のトークン化預金取扱は FY2026 をターゲット; 改正資金決済法 公布 2025-06-13)。

## 6. 預金トークン vs ステーブルコイン — 運用上の境界

| Dimension | Deposit token | Stablecoin / EPI |
|---|---|---|
| Legal liability | Bank-deposit liability under 銀行法 | EPI under 改正資金決済法 (deposit-, funds-transfer-, or trust-type backing) |
| Who can issue | Banks | Banks (預金型 + 信託型 via trust bank), 資金移動業 (資金移動型) |
| Customer relationship | Bank-customer-of-the-issuer | Holder-of-the-EPI; not necessarily a bank customer |
| Deposit insurance | Standard 預金保険 coverage | Does not apply to EPI — replaced by EPI-regime reserve / segregation rules |
| Cross-institution transferability | Constrained to bank network without further legal-form change | Built for circulation via EPI distributors |
| Programmability | Limited by deposit-liability constraints | Higher programmability under EPI framework |
| Use cases | Inter-bank settlement, corporate treasury, conditional payments | Retail / institutional circulation, cross-platform settlement |
| Reserves | Bank-balance-sheet liabilities matched by bank-asset side | EPI-specific reserve / trust rules |

## 7. 四つの EPI 陣営 (横断的サマリー)

| Camp | Lead operator | Legal form | Coverage |
|---|---|---|---|
| Trust-type / institutional | [[payment-firms/progmat|Progmat]] platform + participating trust banks | 信託型 EPI | Institutional, corporate, cross-bank settlement |
| Funds-transfer-type / retail JPY | [[payment-firms/jpyc|JPYC]] | 資金移動型 EPI | Retail JPY SC, crypto-exchange-distributed |
| Foreign-SC distribution | [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] (USDC distributor) | 電子決済手段等取引業 (distribution only) | Distribution of Circle's USDC to Japanese users |
| Deposit-token (bank-rails) | DCJPY (DeCurret + participating banks) | 銀行法 standard deposit liability | Inter-bank settlement, corporate treasury |

四つの陣営と三つの発行体類型のより深い比較については、[[fintech/japan-epi-four-camps-comparison|Japan EPI four camps comparison]] と [[fintech/japan-epi-three-types-overview|Japan EPI three types overview]] を参照。

## 関連

- [[banking/INDEX]]
- [[banking/baas-japan-landscape]]
- [[banking/japan-baas-operating-models]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[banking/minna-bank-baas-model]]
- [[banking/mercari-bank-license-stack]]
- [[banking/gmo-aozora-net-bank]]
- [[banking/japan-net-bank-competition-map]]
- [[banking/post-megabank-positioning]]
- [[payment-firms/progmat]]
- [[payment-firms/jpyc]]
- [[megabanks/mufg]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mizuho-trust-bank]]
- [[financial-licenses/payment-license-stack]]
- [[financial-licenses/bank-license-and-baas-boundary]]
- [[fintech/japan-stablecoin-regulatory-landscape]]
- [[fintech/jp-stablecoin-progmat]]
- [[fintech/jp-trust-type-sc-architecture]]
- [[fintech/jp-stablecoin-dcjpy]]
- [[fintech/japan-stablecoin-2026-event-tracker]]
- [[fintech/japan-epi-three-types-overview]]
- [[fintech/japan-epi-four-camps-comparison]]
- [[fintech/institutional-stablecoin-deposit-token-thesis]]
- [[fintech/stablecoin-channel-japan-sbi-jpyc-ring]]
- [[exchanges/jp-exchange-jpyc]]
- [[exchanges/jp-exchange-sbi-vc-trade]]

## 出典

- FSA registered EPI service providers list (https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx).
- FSA registered funds-transfer service providers list (https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf).
- FSA licensed bank list (https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx).
- 資金決済に関する法律 — 改正資金決済法 (e-Gov 法令検索: https://elaws.e-gov.go.jp/document?lawid=421AC0000000059).
- Progmat company outline / concept / press releases (https://progmat.co.jp/about/, https://progmat.co.jp/concept/, https://progmat.co.jp/en/news/2023-09-11-press/).
- JPYC corporate site (https://jpyc.co.jp/).
- SBI VC Trade USDC product page (https://www.sbivc.co.jp/usdc).
- 北國銀行 news release「日本初、預金型ステーブルコイン『トチカ』のサービス開始について」(2024-04-01, https://www.hokkokubank.co.jp/other/news/2024/pdf/20240401a.pdf) — 地銀預金トークン先行事例。
- BUSINESS LAWYERS「令和8年6月施行！改正資金決済法の概要と実務対応」(https://www.businesslawyers.jp/articles/1476) — 改正資金決済法 2025-06-13 公布 / 2026-06 施行、地域銀行・ゆうちょ銀行のトークン化預金 (FY2026 目途) 動向。
