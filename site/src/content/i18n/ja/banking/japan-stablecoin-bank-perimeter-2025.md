---
source: banking/japan-stablecoin-bank-perimeter-2025
source_hash: 9c5cd29beffe66e8
lang: ja
status: machine
fidelity: ok
title: "日本のステーブルコイン／BaaS 銀行ペリメータ (2025年–2026年)"
translated_at: 2026-06-02T11:47:37.309Z
---

# 日本のステーブルコイン／BaaS 銀行ペリメータ (2025年–2026年)

## ウィキ上の位置づけ

このエントリは [[banking/INDEX|banking index]] の下に位置し、日本のステーブルコイン／電子決済手段(EPI)規制アーキテクチャの銀行側ペリメータ視点である。フィンテック側のペリメータ視点については [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]] と、プラットフォームアンカー [[JapanFG/progmat|Progmat]] および発行体アンカー [[JapanFG/jpyc|JPYC]] · [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade USDC distribution]] と、[[fintech/jp-stablecoin-progmat|jp-stablecoin-progmat detailed]] · [[fintech/jp-trust-type-sc-architecture|jp trust-type SC architecture]] · [[fintech/jp-stablecoin-dcjpy|jp-stablecoin-dcjpy]] · [[fintech/japan-stablecoin-2026-event-tracker|Japan stablecoin 2026 event tracker]] · [[fintech/japan-epi-three-types-overview|Japan EPI three types overview]] · [[fintech/japan-epi-four-camps-comparison|Japan EPI four camps comparison]] · [[fintech/institutional-stablecoin-deposit-token-thesis|institutional stablecoin deposit-token thesis]] と、BaaS フレームワーク [[banking/baas-japan-landscape|BaaS Japan landscape]] · [[banking/japan-baas-operating-models|Japan BaaS operating models]] とともに読むこと。ライセンススタックのコンテキストについては [[JapanFG/legal-financial-licenses/payment-license-stack|payment license stack]] · [[JapanFG/legal-financial-licenses/bank-license-and-baas-boundary|bank license / BaaS boundary]] を経由する。

## 要約

**2025年**までに、銀行発行のデジタルマネーに対する日本の規制ペリメータは、改正資金決済法フレームワークのもとで3層アーキテクチャに固まった:(1)標準的な銀行法の預金負債レジームのもとで**銀行**が発行する**預金トークン**、(2)3つの発行体タイプ — 銀行(預金型 EPI)、資金移動業(資金移動型 EPI)、信託(信託型 EPI)— を認める新しい改正資金決済法レジームのもとで発行され、別個の**電子決済手段等取引業者**(EPI サービスプロバイダー)ライセンスによって流通される**ステーブルコイン／電子決済手段(電子決済手段)**、そして(3)同じ EPI サービスプロバイダーライセンスを通じてのみ日本で流通される**非発行の外国ステーブルコイン**(USDC など)。銀行側ペリメータには3つの具体的な帰結がある:(a)銀行のみが預金型 EPI を銀行預金担保のトークンとして発行できる;(b)信託銀行(信託兼営銀行)のみが [[JapanFG/progmat|Progmat]] のようなプラットフォーム下で信託型ステーブルコインの発行体になれる;(c)銀行による BaaS パートナーチャネル流通は、現在、異なるライセンススタック下の別個のステーブルコイン流通チャネルと共存する。**MUFG の Progmat プラットフォーム**(2023-10年以降の独立会社)は信託型 SC のための機関投資家向けレールを提供する;**JPYC** は資金移動業ベースの JPY SC を運営する;**SBI VC Trade** は唯一の登録外国 SC 流通業者(USDC)である。地方銀行のパイロットは出現しつつあるが、2025 の移行時点では運用上限定的である:北國銀行の預金型ステーブルコイン「トチカ」(トークン化された預金)が日本初のそうした商品として2024-04-01にローンチし、ゆうちょ銀行は DeCurret DCP を介したトークン化預金の取り扱いを FY2026を目標として発表した。

## 1. 3層ペリメータ

| レイヤー | ライセンス／ルート | 銀行ができること | 銀行ができないこと |
|---|---|---|---|
| **預金トークン(預金トークン)** | 銀行法の標準的な銀行預金 | 銀行のバランスシート上の預金負債に1:1 で裏付けられたトークン化された預金残高を発行;ピアツーピアまたは商業取引を決済;額面で償還 | 法形式の変更なしに銀行ネットワーク外に移転できない;非銀行口座保有者が直接保有できない |
| **銀行発行 EPI(預金型 EPI / 電子決済手段 第1号)** | 改正資金決済法 — EPI 発行体 | 預金に裏付けられた規制された電子決済手段を発行;銀行または非銀行の EPI サービスプロバイダーを通じて流通可能 | EPI レジーム(KYC、償還可能性、準備、行為ルール)の対象;非預金トークンを預金担保と偽装できない |
| **信託型 EPI(信託型 EPI / 電子決済手段 第3号)** | 改正資金決済法 — 信託銀行発行体 | 信託銀行(信託兼営銀行)は裏付け資産が信託にある信託型ステーブルコインを発行できる;機関投資家／プラットフォームベースのユースケース | 非信託銀行は信託型 EPI を発行できない;発行体の役割はプラットフォームプロバイダーの役割とは区別される |
| **資金移動型 EPI(資金移動型 EPI / 電子決済手段 第2号)** | 改正資金決済法 — 資金移動業発行体 | 資金移動業(第1〜3種)は EPI フレームワーク下で JPY ステーブルコインを発行できる | 銀行そのものは資金移動業を必要としない — 異なるレーン |
| **EPI 流通(電子決済手段等取引業)** | 改正資金決済法 — 別個の流通業者ライセンス | 電子決済手段等取引業ライセンスを保有する銀行または非銀行は EPI を顧客に流通できる;外国 SC(USDC)はこのライセンス経由でのみ流通可能 | 流通ライセンスは発行を認可しない |

### 預金トークン — 標準的な銀行預金レジームの中で

**預金トークン**は新しい法形式ではない。銀行は銀行法のもとで顧客預金負債を保持する;トークンはプログラム可能な台帳上のその預金残高のデジタル表現である。決済、償還、消費者保護はすべて標準的な銀行預金ルールに従う。例としては [[fintech/jp-stablecoin-dcjpy|DCJPY]](Decurret アンカーの銀行預金トークンイニシアチブ)が含まれる。

| 銀行にとっての利点 | 銀行にとっての欠点 |
|---|---|
| 新しいライセンス不要;既存の銀行法フレームワーク内に収まる | さらなる法形式の変更なしには銀行顧客から銀行顧客へのフローに限定 |
| 裏付けは銀行の預金残高 — 既に資本化され監督されている | 単一銀行を超えてスケールするには二国間／コンソーシアム合意が必要 |
| 顧客保護は預金と同一 | 預金負債の規制上の期待によるプログラマビリティの制約 |

### 銀行発行 EPI(預金型) — 預金とより広い流通の橋渡し

預金型 EPI のバリアントは、銀行が、裏付けは預金負債だが**流通**は電子決済手段等取引業の流通業者を介して単一銀行の顧客ベースを超えて拡張できる規制された電子決済手段を発行できるようにする。これは JPYC のような非銀行が使用する資金移動型 EPI の銀行側のアナログである。

| 銀行にとっての利点 | 銀行にとっての欠点 |
|---|---|
| 銀行のブランドとバランスシートが流通する SC をアンカーすることを可能にする | 銀行監督の上に EPI 規制レイヤー(流通業者への KYC 義務、償還可能性ルール、準備ルール)を追加 |
| 銀行間決済の設計と互換 | 流通業者は EPI 流通業者ライセンスを保有しなければならない — 調整負担を追加 |

### 信託型 EPI(信託型) — 機関投資家プラットフォームのレーン

**信託型 SC** は信託構造を使用する:信託銀行(信託兼営銀行)が発行体として機能する;裏付け資産(複数の銀行の JPY 預金、JGB など)は信託にある;プラットフォームプロバイダーが技術レールを手配する;機関投資家および法人ユーザーがトークンを保有し取引する。[[JapanFG/progmat|Progmat]] プラットフォームが主要な例である。

| 銀行にとっての利点 | 銀行にとっての欠点 |
|---|---|
| 信託の分別は SC 保有者の請求権が信託銀行の一般バランスシートではなく信託資産にあることを意味する | 信託銀行のみが発行できる — 発行体セットを少数の機関に制限 |
| マルチアセットの裏付けがより広い機関投資家の採用を可能にする | 単一銀行の預金トークンモデルより運用が複雑 |
| プラットフォームプロバイダーの役割(Progmat)は発行体の役割(信託銀行)とは区別される — 明確な規制のレイヤリング | 発行体／プラットフォーム／参加銀行／EPI 流通業者にわたる調整は簡単ではない |

## 3. 発行体／流通業者アンカーマップ (2025年–2026年)

| トークン | 裏付け形式 | 発行体 | プラットフォーム | 流通 | 規制レイヤー |
|---|---|---|---|---|---|
| **DCJPY**(預金トークン) | 銀行預金負債 | 参加銀行(マルチバンクパイロット) | DeCurret DCP | 限定的／パイロット | 銀行法 標準 |
| **Progmat Coin(計画中の信託型 SC)** | 信託保有の JPY 資産 | [[JapanFG/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]] およびその他の参加信託銀行 | [[JapanFG/progmat|Progmat]] | 銀行および非銀行の EPI 流通業者 | 改正資金決済法 信託型 EPI |
| **JPYC** | 資金移動業 — 資金移動業の資金管理ルール下で保持される裏付け | [[JapanFG/jpyc|JPYC株式会社]] | 自社インフラ | 直接 + 暗号資産取引所 | 改正資金決済法 資金移動型 EPI |
| **USDC(外国 SC、日本で流通)** | Circle 準備 | Circle(米国発行体) | (外国発行体インフラ) | [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] — 2025–2026 サイクル時点で USDC の唯一の登録 EPI 流通業者 | 改正資金決済法 電子決済手段等取引業(流通側のみ) |

### なぜプラットフォームプロバイダー ≠ 発行体なのか

- Progmat の規制負担は、規制対象の金融機関ではなく、技術および運用プラットフォームプロバイダーのものである。
- 発行体ステータス(および対応する改正資金決済法の義務)は信託銀行にある — 消費者保護と SC 償還義務を規制対象の銀行バランスシート上に保つ。
- 複数の信託銀行が同じ Progmat プラットフォーム上で発行体として機能でき、単一の発行体でボトルネックになることなくより広い機関投資家の採用を可能にする。

このパターンは、[[banking/baas-japan-landscape|BaaS]] が**パートナーブランド**(UX レイヤー)を**銀行**(ライセンス + バランスシート)から分離する方法を反映している;Progmat は**プラットフォーム**(技術)を**発行体**(ライセンス + 裏付け資産)から分離する。

### 地方銀行ができることとできないこと

- **預金トークン**は銀行法のもとでどの銀行にもアクセス可能 — 地方銀行はマルチバンク預金トークンイニシアチブに参加できる。
- **預金型 EPI の発行**は原則として地方銀行に開かれているが、EPI 規制レイヤーは単一銀行の地方銀行発行にはコスト効率的でない可能性のある運用および監督負担を追加する — 協調的なプラットフォーム参加が実際的なルートである。
- **信託型 EPI の発行**には信託銀行ライセンスが必要である;信託兼営銀行ライセンスを持つ地方銀行のみが発行体として直接参加できる。

### BaaS パートナーチャネル流通

1. **EPI 流通ライセンスのオーバーレイ。** パートナーブランドの顧客に SC を流通したい BaaS 参加地方銀行は、別個の電子決済手段等取引業ライセンスを必要とする。
2. **預金トークン統合。** BaaS パートナーブランドの顧客ジャーニーは、基盤となる銀行預金がトークン化されれば預金トークン決済を組み込むことができる — しかしこれは2025–2026 年時点ではまだパイロット／計画段階である(例:北國銀行「トチカ」が2024-04年から稼働;ゆうちょ銀行のトークン化預金の取り扱いは FY2026を目標;改正資金決済法 公布 2025-06-13)。

## 6. 預金トークン vs ステーブルコイン — 運用上の境界

| 次元 | 預金トークン | ステーブルコイン／EPI |
|---|---|---|
| 法的責任 | 銀行法のもとの銀行預金負債 | 改正資金決済法のもとの EPI(預金型、資金移動型、または信託型の裏付け) |
| 誰が発行できるか | 銀行 | 銀行(預金型 + 信託銀行経由の信託型)、資金移動業(資金移動型) |
| 顧客関係 | 発行体の銀行顧客 | EPI の保有者;必ずしも銀行顧客ではない |
| 預金保険 | 標準的な預金保険カバー | EPI には適用されない — EPI レジームの準備／分別ルールに置き換え |
| 機関間の移転可能性 | さらなる法形式の変更なしには銀行ネットワークに制約 | EPI 流通業者を介した流通のために構築 |
| プログラマビリティ | 預金負債の制約により限定的 | EPI フレームワーク下でより高いプログラマビリティ |
| ユースケース | 銀行間決済、法人トレジャリー、条件付き決済 | リテール／機関投資家の流通、クロスプラットフォーム決済 |
| 準備 | 銀行資産側でマッチされた銀行バランスシート負債 | EPI 固有の準備／信託ルール |

## 7. 4つの EPI 陣営(横断的要約)

| 陣営 | 主要運営者 | 法形式 | カバレッジ |
|---|---|---|---|
| 信託型／機関投資家 | [[JapanFG/progmat|Progmat]] プラットフォーム + 参加信託銀行 | 信託型 EPI | 機関投資家、法人、銀行間決済 |
| 資金移動型／リテール JPY | [[JapanFG/jpyc|JPYC]] | 資金移動型 EPI | リテール JPY SC、暗号資産取引所流通 |
| 外国 SC 流通 | [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]](USDC 流通業者) | 電子決済手段等取引業(流通のみ) | Circle の USDC の日本ユーザーへの流通 |
| 預金トークン(銀行レール) | DCJPY(DeCurret + 参加銀行) | 銀行法 標準預金負債 | 銀行間決済、法人トレジャリー |

4つの陣営と3つの発行体タイプのより深い比較については、[[fintech/japan-epi-four-camps-comparison|Japan EPI four camps comparison]] と [[fintech/japan-epi-three-types-overview|Japan EPI three types overview]] を参照。

## 関連項目

- [[banking/INDEX]]
- [[banking/baas-japan-landscape]]
- [[banking/japan-baas-operating-models]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[banking/minna-bank-baas-model]]
- [[banking/mercari-bank-license-stack]]
- [[banking/gmo-aozora-net-bank]]
- [[banking/japan-net-bank-competition-map]]
- [[banking/post-megabank-positioning]]
- [[JapanFG/INDEX]]
- [[JapanFG/progmat]]
- [[JapanFG/jpyc]]
- [[JapanFG/mufg]]
- [[JapanFG/mitsubishi-ufj-trust-bank]]
- [[JapanFG/sumitomo-mitsui-trust]]
- [[JapanFG/mizuho-trust-bank]]
- [[JapanFG/legal-financial-licenses/payment-license-stack]]
- [[JapanFG/legal-financial-licenses/bank-license-and-baas-boundary]]
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

- FSA 登録 EPI サービスプロバイダーリスト(https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx)。
- FSA 登録資金移動業者リスト(https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf)。
- FSA 免許銀行リスト(https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx)。
- 資金決済に関する法律 — 改正資金決済法(e-Gov 法令検索: https://elaws.e-gov.go.jp/document?lawid=421AC0000000059)。
- Progmat 会社概要／コンセプト／プレスリリース(https://progmat.co.jp/about/, https://progmat.co.jp/concept/, https://progmat.co.jp/en/news/2023-09-11-press/)。
- JPYC コーポレートサイト(https://jpyc.co.jp/)。
- SBI VC Trade USDC 商品ページ(https://www.sbivc.co.jp/usdc)。
- 北國銀行 ニュースリリース「日本初、預金型ステーブルコイン『トチカ』のサービス開始について」(2024-04-01, https://www.hokkokubank.co.jp/other/news/2024/pdf/20240401a.pdf) — 地銀預金トークン先行事例。
- BUSINESS LAWYERS「令和8年6月施行！改正資金決済法の概要と実務対応」(https://www.businesslawyers.jp/articles/1476) — 改正資金決済法 2025-06-13 公布 / 2026-06 施行、地域銀行・ゆうちょ銀行のトークン化預金 (FY2026 目途) 動向。
