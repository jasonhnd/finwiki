---
source: banking/japan-stablecoin-bank-perimeter-2025
source_hash: 7735502744a0ba8e
lang: ja
model: google-translate-guarded-line-sync+manual-review
status: machine
fidelity: ok
title: "日本のステーブルコイン / BaaS 銀行境界 (2025–2026)"
translated_at: 2026-07-29T03:30:48.110Z
---

# 日本のステーブルコイン / BaaS 銀行境界 (2025–2026)

## Wiki 経路

この項目は [[banking/INDEX|banking index]] の下に位置し、日本のステーブルコイン / 電子決済手段 (EPI) 規制アーキテクチャの銀行側境界ビューである。フィンテック側の境界ビューとしては [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]] と、プラットフォームの anchor である [[payment-firms/progmat|Progmat]] および発行体の anchor である [[payment-firms/jpyc|JPYC]]・[[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade USDC distribution]] と、[[fintech/jp-stablecoin-progmat|jp-stablecoin-progmat detailed]]・[[fintech/jp-trust-type-sc-architecture|jp trust-type SC architecture]]・[[fintech/jp-stablecoin-dcjpy|jp-stablecoin-dcjpy]]・[[fintech/japan-stablecoin-2026-event-tracker|Japan stablecoin 2026 event tracker]]・[[fintech/japan-epi-three-types-overview|Japan EPI three types overview]]・[[fintech/japan-epi-four-camps-comparison|Japan EPI four camps comparison]]・[[fintech/institutional-stablecoin-deposit-token-thesis|institutional stablecoin deposit-token thesis]] と、[[banking/baas-japan-landscape|BaaS Japan landscape]]・[[banking/japan-baas-operating-models|Japan BaaS operating models]] の BaaS フレームワークと併せて読むこと。ライセンススタックの文脈は [[financial-licenses/payment-license-stack|payment license stack]]・[[financial-licenses/bank-license-and-baas-boundary|bank license / BaaS boundary]] を経由すること。

## 要点（TL;DR）

日本の公開資料上の境界は、銀行預金トークンと資金決済法上の電子決済手段を区別する。FSA は第1号電子決済手段について資金移動業ルートを、第3号の信託受益権型電子決済手段について免許・登録を受けた信託会社**または**認可された信託兼営金融機関による発行を説明しており、信託ルートは信託銀行だけに限定されない。流通・交換には別途、電子決済手段等取引業の登録が必要である。2026-06-24 付 FSA workbook は同登録業者を SBI VC Trade の1社とし、取扱電子決済手段欄に USDC、RLUSD、JPYSC を掲げる。Progmat は法的発行体そのものに代わるものではなく機関向け tokenisation infrastructure を提供し、北國銀行の公式 release は預金型「トチカ」の 2024-04-01 開始を記録する。^[Sources: https://www.fsa.go.jp/news/27/sonota/20151214-2.html; https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx; https://progmat.co.jp/about/; https://www.hokkokubank.co.jp/other/news/2024/pdf/20240401a.pdf.]

## 1. 三層境界

| 層 | 正規ルート | 確認された周囲長 | 必要な電流チェック |
|---|---|---|---|
| 入金型トークン・決済サービス | 銀行法と商品固有の法的分析 | サービスは、デジタルレール上の銀行預金を表すことができますが、基礎となる請求は預金のままです | 商品条件、入金状況、振込条件、入金保険の取扱いについて |
| カテゴリー 1 EPI の発行 | 金融庁が認定した資金移動業登録はその一例です | 発行および資金移動の義務は登録発行者にあります | 現在の発行者の登録と商品条件 |
| 第3種信託受益権EPIの発行 | 認可・登録信託会社＋届出、または認定信託金融機関＋届出 | 金融庁のルートは信託銀行に限定されない | 正確な発行者、信託認可、申請、信託条件 |
| EPIの販売、交換、仲介又は管理 | 電子決済手段登録事業者 | 登録はアクティビティ固有であり、発行とは別のものです | 現在の FSA レジスターと取扱楽器フィールド |
| EPI・暗号資産サービス仲介事業 | 新制度発効 2026-06-01 | 登録媒介者は、提携登録事業者に代わって所定の取引を媒介することができます。 | 所属事業者、許可された活動、現在の登録状況 |

出典: ^[FSA FinTech FAQ Q9-1 to Q9-6, https://www.fsa.go.jp/news/27/sonota/20151214-2.html; FSA service-intermediary regime, https://www.fsa.go.jp/common/shinsei/denanchuukai/index.html; Payment Services Act, https://elaws.e-gov.go.jp/document?lawid=421AC0000000059.]

### 預金トークン — 標準的な銀行預金レジームの内側

「デポジット トークン」は製品/アーキテクチャのラベルであり、それ自体では法的扱いを決定するのに十分ではありません。銀行の規約から、顧客の請求が預金のままであるかどうか、誰がそれを転送できるか、どのように償還されるか、どのような保護が適用されるかを確認します。

| 確認の質問 | 一次証拠 |
|---|---|
| 顧客の法的請求は銀行預金ですか? | 銀行商品規約および適用される銀行法の開示 |
| 誰がトークンを保持し譲渡できるのでしょうか? | 現在の製品規約とシステム規則 |
| 預金保険は適用されますか？ | 商品規約と預金保険機構・規制当局のガイダンス |
| 仲介業者には別途登録が必要ですか? | FSA 登録と活動固有の法的分析 |

出典: ^[FSA licensed-bank register, https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx; issuer product terms; Deposit Insurance Corporation guidance where applicable.]

### 第一類EPI発行ルート

金融庁の FAQ には、第 1 種 EPI の発行手順の例として資金移動業の登録が挙げられています。商品固有の法的文書なしで、このカテゴリを一般的な「銀行発行預金 EPI」として再ラベル付けしないでください。

| 確認の質問 | 一次証拠 |
|---|---|
| どの法定 EPI カテゴリが適用されますか? | 発行者の法的文書と FSA のガイダンス |
| 発行者はどの組織ですか? | 現在の登録、出願、および金融商品の条件 |
| どの主体が販売、交換、仲介、管理を行っていますか? | FSA EPI サービスプロバイダー登録 |
| どのような償還および保護条件が適用されますか? | 金融商品の規約と法定開示 |

出典: ^[FSA FinTech FAQ Q9, https://www.fsa.go.jp/news/27/sonota/20151214-2.html; current FSA EPI service-provider register.]

### 信託型 EPI (信託型) — 機関投資家・プラットフォームのレーン

カテゴリ 3 の信託受益権 EPI の場合、FSA は、必要な届出を行った認可/登録信託会社、または必要な届出を行った認定信託金融機関の 2 つの可能な発行者ルートを特定します。テクノロジー プラットフォームは自動的に法的な発行者になるわけではありません。

| 確認の質問 | 一次証拠 |
|---|---|
| 発行者は信託会社または認定信託金融機関ですか？ | FSAルート、ライセンス/認可、必要な届出 |
| 信託財産と信託財産とは何ですか？ | 信託証書と商品条件 |
| 技術プラットフォームを運営しているのは誰ですか? | プラットフォームと発行者の契約/発表 |
| 配布や管理は誰が行うのですか？ | 現在の FSA EPI サービスプロバイダー登録 |

出典: ^[FSA FinTech FAQ Q9-1, https://www.fsa.go.jp/news/27/sonota/20151214-2.html; instrument-specific trust and issuer disclosures.]

## 3. 発行体 / 流通業者 anchor マップ (2025–2026)

| イニシアチブ/レジストリの表面 | 確認された公然の事実 | ステータスソース | 推測しないでください |
|---|---|---|---|
| FSA EPI サービスプロバイダー登録 | 2026-06-24 ワークブックには、SBI VC Trade と取扱商品 USDC、RLUSD、JPYSC がリストされています。 | 現在の FSA ワークブック | カウントまたは取扱楽器リストが取得日以降も変更されていないこと |
| FSAサービス仲介制度 | 新しい仲介制度が 2026 年 6 月 1 日に始まりました | FSA 制度ページと将来の登録 | 仲介者が発行者、プリンシパルディーラー、またはカストディアンであること |
| [[payment-firms/progmat|プログマット]] | 公式資料にはトークン化プラットフォームとコンセプトが説明されています | Progmat 社 / 日付付きプロジェクト発表 | 金融商品固有の発表を伴わない発行、発売、発行者、または流通状況 |
| [[payment-firms/jpyc|JPYC]] | 現在の公式ページに記載されている企業および製品の事実 | FSA 登録と発行者の文書 | 現在の法的地位の歴史的または計画的地位 |
| 北國銀行「トチカ」 | 公式銀行リリース記録サービスは 2024 年 4 月 1 日に開始 | 銀行リリースと現在の商品条件 | すべてのデポジット トークンが同じ法的または転送設計であること |
| [[fintech/jp-stablecoin-dcjpy|DCJPY]] | 日付入りの公式プロジェクト資料に示された取り組みの事実 | 現在の発行者/運営者の発表 | 現在確認されていないライブのマルチバンク商品または参加者リスト |

出典: ^[FSA EPI service-provider workbook, https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx; FSA intermediary regime, https://www.fsa.go.jp/common/shinsei/denanchuukai/index.html; Progmat official pages; 北國銀行 launch release, https://www.hokkokubank.co.jp/other/news/2024/pdf/20240401a.pdf.]

### なぜプラットフォームプロバイダー ≠ 発行体なのか

- Progmat の規制上の負担は、規制対象の金融機関のそれではなく、技術および運用プラットフォームプロバイダーのそれである。
- 発行体ステータス (および対応する 改正資金決済法上の義務) は信託銀行が担う——消費者保護と SC 償還の義務を規制対象の銀行バランスシート上に保つ。
- 複数の信託銀行が同じ Progmat プラットフォーム上で発行体として行動でき、単一の発行体でボトルネックになることなくより広範な機関投資家の採用を可能にする。

このパターンは、[[banking/baas-japan-landscape|BaaS]] が **パートナーブランド** (UX レイヤー) を **銀行** (ライセンス + バランスシート) から分離するやり方を映している; Progmat は **プラットフォーム** (技術) を **発行体** (ライセンス + 裏付資産) から分離する。

### 地域銀行に何ができ、何ができないか

- デポジットベースの商品の場合は、銀行、顧客の請求、商品条件、および参加しているすべての仲介業者を確認してください。
- カテゴリ 1 EPI の発行については、公式文書で特定されている資金移動またはその他の該当する発行者のルートを確認してください。
- 第3種EPIの発行については、発行者が認可・登録信託会社であるか認定信託金融機関であるか、また必要な届出が行われているかを確認してください。
- 銀行がコンソーシアムや技術試験に参加しても、その銀行が発行者であることや、製品が稼働していることは証明されません。

### BaaS パートナーチャネル流通

1. **EPI アクティビティ チェック。** EPI の販売、交換、仲介、または管理には、電子決済手段サービス プロバイダーの登録が必要な場合があります。 2026年6月1日より、提携事業者の特定仲介は、新たな仲介ルートを利用できるようになります。実際の活動と法人を決定します。 ^[Sources: https://www.fsa.go.jp/news/27/sonota/20151214-2.html; https://www.fsa.go.jp/common/shinsei/denanchuukai/index.html; https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx.]
2. **預金トークンの統合。** 各実装の基礎となる銀行預金条件、法人、および仲介者の役割を確認します。 北國銀行の公式リリースでは、「トチカ」の発売が2024年4月1日であることが確認されています。他の取り組みのステータスを確立するものではありません。

## 6. 預金トークン vs ステーブルコイン — 運用上の境界

| 寸法 | デポジットベースのトークン/サービス | EPI |
|---|---|---|
| 法的請求 | 顧客の請求が銀行預金のままであることを確認する | 該当する法定 EPI カテゴリと商品条件を確認します。 |
| 発行者 | 商品規約に記載されている銀行 | 発行者の文書で特定されたカテゴリ 1 またはカテゴリ 3 のルート |
| 配信・管理 | アクティビティ固有の分析。第三者は独自の許可を必要とする場合があります | EPI サービス プロバイダーの登録は、通常、対象となる販売、交換、仲介、または管理に適用されます。 |
| 中継ルート | 実際のアクティビティに対する銀行取引/支払い権限を確認してください | 2026年サービス仲介ルートは提携事業者の特定仲介に適用される場合があります |
| 預金保険 | 入金条件と該当する公式ガイダンスを確認する | 預金保険を前提としないでください。機器の法定保護構造を使用する |
| 譲渡と償還 | 製品固有の | 楽器固有 |

出典: ^[FSA FinTech FAQ Q9, https://www.fsa.go.jp/news/27/sonota/20151214-2.html; Payment Services Act; FSA service-intermediary regime page.]

## 7. 四つの EPI 陣営 (横断的サマリー)

| 研究レーン | 権限のあるステータスチェック | 主な区別 |
|---|---|---|
| カテゴリ 1 EPI 発行者 | FSA資金移動登録簿と発行者条件 | 発行は配布とは異なります |
| カテゴリ 3 信託 EPI 発行者 | 信託ライセンス/認可、申請、および商品の条件 | 信託会社ルートは信託銀行に限定されない |
| EPI サービスプロバイダー | 現在の FSA レジスターと取扱楽器フィールド | 登録されたアクティビティは発行とは異なります |
| EPI/暗号サービス仲介 | 新体制登録者と提携事業者 | 事業者のための調停は、元本取引や監護権とは異なります。 |
| デポジットベースのトークン | 銀行商品規約、FSA 銀行登録簿、および正式な開始通知 | 入金ステータスと送金デザインは商品ごとに異なります |
| テクノロジープラットフォーム | プラットフォームおよび機器固有のお知らせ | プラットフォーム運営者は自動的に発行者または販売者になるわけではありません |

出典: ^[FSA registers and FinTech FAQ; FSA 2026 intermediary-regime page; official issuer and platform materials.]

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
- FSA registered 資金移動 service providers list (https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf).
- FSA licensed bank list (https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx).
- 資金決済に関する法律 — 改正資金決済法 (e-Gov 法令検索: https://elaws.e-gov.go.jp/document?lawid=421AC0000000059).
- Progmat company outline / concept / press releases (https://progmat.co.jp/about/, https://progmat.co.jp/concept/, https://progmat.co.jp/en/news/2023-09-11-press/).
- JPYC corporate site (https://jpyc.co.jp/).
- SBI VC Trade USDC product page (https://www.sbivc.co.jp/usdc).
- 北國銀行 news release「日本初、預金型ステーブルコイン『トチカ』のサービス開始について」(2024-04-01, https://www.hokkokubank.co.jp/other/news/2024/pdf/20240401a.pdf) — 地銀預金トークン先行事例。
- FSA「電子決済手段・暗号資産サービス仲介業を行うみなさまへ」(https://www.fsa.go.jp/common/shinsei/denanchuukai/index.html) — 2026-06-01開始の新制度。
