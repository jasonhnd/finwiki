---
source: fintech/latin-america-cbdc-stablecoin-dollarization
source_hash: 5f55c1262273cdc1
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "ラテンアメリカの CBDC と USD ステーブルコインの力学"
translated_at: 2026-06-26T08:28:46.051Z
---
# ラテンアメリカの CBDC と USD ステーブルコインの力学

## ウィキ上の位置づけ

このエントリは [[fintech/INDEX|fintech index]] の配下に位置づけられ、ブラジルの法域別深掘りである専用 [[fintech/brazil-drex-timeline-2026]] エントリを補完する**ラテンアメリカ地域ビュー**であり、[[fintech/southeast-asia-stablecoin-regulatory-landscape]] の地域ビューと対になる。クロス EM の行動ベースライン（アルゼンチン、メキシコ、ブラジルはそこで明示的なデータ点）については [[fintech/em-market-crypto-dollarization-pattern]]、ラテンアメリカで USDT と USDC がたどる構造パターンについては [[fintech/gray-market-dollar-network-formalization]] と併せて読む。地政学的マクロの視点は [[fintech/jurisdiction-list-monetary-protectionism]] と [[fintech/global-stablecoin-regulatory-five-pole-matrix]] にある。

> [!info] 要約
> ラテンアメリカは、地球上で**最もステーブルコイン・ドル化が安定して進んだ単一地域**である。2026, までに、USDT と USDC はアルゼンチン、ベネズエラ、コロンビア、ペルー、ボリビアで、事実上の USD 貯蓄、送金、B2B 決済レイヤーとなり、メキシコとブラジルでも多用されている。政府側の対応は**大きく分岐**した。すなわち、(1) **アルゼンチン（Milei）**はドル化をレトリック上受け入れ、ペソ安定化を別に追求しながら USDT の実務利用を容認している。(2) **ブラジル（BCB）**は地域で最も制度的に本格的な CBDC プロジェクトである **DREX** を構築しており、USDT と直接競合するのではなく、Pix と相互運用する tokenized deposit プラットフォームとして明示的に設計している。(3) **メキシコ（Banxico）**は制度上の回答として CoDi 即時決済を選び、stablecoin フローの多くを民間 rails（Bitso）に任せている。(4) **エルサルバドル**は BTC + USDC の二重姿勢を維持する。(5) **ベネズエラ**は petro CBDC を放棄し、現在は事実上の USDT 経済で生活している。パターンは明確である。**国家発行 CBDC はリテール層を USDT と USDC に奪われているが、ホールセール / tokenized deposit 層では勝っている**。

## なぜラテンアメリカがグローバル stablecoin マップで重要か

ラテンアメリカは stablecoin 需要に関する**最も明瞭な自然実験**である。インフレ率は 5%（近年のペルー）から 200%+（2023-2024のアルゼンチン）、1,000%+（ベネズエラの累積）まで幅広く、資本規制は開放的な国（原則としてメキシコ、ペルー、コロンビア）から閉鎖的な国（2024, までのアルゼンチン、継続的なベネズエラ）まで異なる。一方で、ドルで貯蓄する文化は普遍的である。その結果、**USD ペッグ stablecoin に対する構造需要は、特定用途というより「ほぼどこにでもある」需要に近い**。これは [[fintech/em-market-crypto-dollarization-pattern]] の根底にある行動観察そのものである。同じ力学はクロスボーダー B2B レイヤーにも現れる。これは [[fintech/stablecoin-crossborder-b2b-growth]] で記録されている。

## アルゼンチン · USDT 経済 + Milei 改革

- **マクロ文脈**: アルゼンチンは 2024 に入った時点で前年比インフレが約 200%、複数の資本規制（cepo cambiario）、公式 USD と blue / MEP / CCL レートの並行レート格差を抱えていた。Milei 政権（2023 年 12 月以降）は 2024-2025 を通じて段階的に cepo cambiario を解体し、マネタリーベース目標を通じたペソ安定化を追求した。
- **2024以前の stablecoin の役割**: USDT は家計の USD 価値保存手段として支配的だった。現物の USD 紙幣より取得しやすく、公式レート制限を回避できたためである。
- **Milei 改革後の stablecoin の役割**: 需要は残っている。cepo が解体された後でも、USDT はドル貯蓄 rail として機能し続ける。オンランプ UX（Lemon、Ripio、Belo、Buenbit、Bitso Argentina）がレガシー銀行の USD 口座体験を上回るためである。
- **規制の方向性**: CNV（Comisión Nacional de Valores）は Law 27.739 （2024）に基づき virtual asset service providers を登録した。BCRA（中央銀行）は歴史的に crypto payment use cases に反対しており、2026-05時点でいかなる枠組みでも peso-stablecoin 発行を認可していない。
- **Lemon、Ripio、Belo、Buenbit、Bitso AR**: 稼働中の ウォレット stack。いずれも USDT-Tron 入金、USDC-Solana / Polygon、Visa card off-ramp、MEP に近いレートでのペソ転換を提供する。

アルゼンチンのパターンは、stablecoin による「通貨代替」の典型例であり、より広い [[fintech/em-market-crypto-dollarization-pattern]] と [[fintech/gray-market-dollar-network-formalization]] における制度化の流れの実証的アンカーである。

## ブラジル · DREX + Pix + 民間 rail stablecoin 競争

- **マクロ文脈**: BRL は地域内では相対的に安定している。ブラジルの stablecoin 需要は、インフレヘッジよりも **リテール crypto 投資** + **B2B クロスボーダー決済** + **送金**により強く牽引される。
- **Pix**: Banco Central do Brasil の即時決済システムで、2020, 以降稼働し、広く普及している。Pix は 1 日あたり数億件の取引を処理し、DREX ベースの programmable money use case にとって**非 stablecoin の競争ベースライン**である。
- **DREX**: BCB の tokenized deposit プラットフォーム。Hyperledger Besu 上に構築され、2026時点で第 2 パイロット段階にある。DREX は、単一のリテール CBDC token ではなく、permissioned DLT 上で認可銀行が発行する **tokenized deposits** として明示的に位置づけられている。詳細は専用 [[fintech/brazil-drex-timeline-2026]] エントリにある。
- **民間 rail stablecoin の状況**: Mercado Bitcoin（MB）、Foxbit、Ripio Brazil、Bitso Brazil が主要な国内 venue。Mercado Bitcoin は BRLA Digital インフラ上で BRL ペッグ stablecoin（MBRL）を試験導入した。**BRLA** は銀行パートナーを持つ独立 BRL ペッグ stablecoin 発行会社 であり、DREX の外側で稼働し、リテールおよび B2B 用に設計されている。
- **規制の方向性**: BCB の枠組み（CMN Resolutions + BCB Circulars 2024-2025）は、USD ペッグの stablecoins を主に**外国為替商品**として扱い、ブラジル居住者による発行・償還に FX-control mechanics を適用する。PL 4401 framework（Marco Legal das Criptomoedas、施行済み）は VASP を BCB 監督下に置く。

DREX と民間 BRL stablecoin の戦略的位置は、[[fintech/institutional-stablecoin-deposit-token-thesis]] の **tokenized deposit vs non-bank stablecoin** 論争、および [[fintech/japan-epi-three-types-overview]] の**日本型 trust-vs-bank-vs-資金移動** の分岐と構造的に似ている。

## メキシコ · Banxico CoDi vs stablecoin

- **マクロ文脈**: MXN はラテンアメリカで最も流動的な通貨であり、自由に交換可能で、銀行システムも厚い。インフレは中程度である。
- **CoDi**: Banxico の QR / NFC ベース即時決済システムで、SPEI 銀行間システム上に重ねられている。CoDi の普及はブラジルの Pix より遅い。
- **Bitso US-MX corridor**: ラテンアメリカ最大の stablecoin ベース送金 corridor。Bitso は USDC 決済を通じて相当量のクロスボーダー USD-MXN フローを処理し、Stripe との提携がカバレッジを拡張している。これはメキシコ側の stablecoin 成功例の典型である。
- **Banxico CBDC の姿勢**: 当初は 2021 にリテール CBDC 構想を公表した（2024 のタイムラインを示唆する発言）が、タイムラインは繰り返し遅れている。2026-05, 時点で Banxico CBDC は稼働していない。
- **規制の方向性**: Fintech Law（Ley para Regular las Instituciones de Tecnología Financiera、2018）は e-money 側を対象とする。Banxico は規制銀行システム内での crypto-asset 決済利用を認可しておらず、stablecoin フローは認可済み Fintech Law institutions と crypto-asset platforms を通じて流れる。

メキシコは、CBDC ではなく**即時決済 rails**（CoDi）が制度上の回答となり、**民間 stablecoin rails**（Bitso + USDC + Stripe）がクロスボーダー送金用途で勝った事例である。同じパターンは [[fintech/southeast-asia-stablecoin-regulatory-landscape]] を通じて東南アジアのマップにも見える。

## コロンビアとペルー · グレーマーケットの USDC 利用

- **コロンビア**: COP は地域内では安定している。stablecoin 需要は、**フリーランサー / リモートワーカーの USD 収入**と、米欧パートナーとの **B2B 決済**により牽引される。主要な国内取引場所は Bitso Colombia、Buda、Banexcoin（ペルー本社だが地域展開）。Banco de la República はリテール CBDC 発行を認可しておらず、探索的 CBDC 研究が進行中である。
- **ペルー**: PEN は安定しており、stablecoin 需要はコロンビアと似ている。主要取引場所は Buda Peru、Bitso Peru。Banco Central de Reserva del Perú は探索的 CBDC 段階にあり、リテール向けタイムラインは公表されていない。
- **共通パターン**: 両国では、**専門職 / フリーランサー / B2B** セグメントで USDC が USDT より高いシェアを持つ。Circle の銀行パートナーに基づく機関投資家級のオンランプがあるためである。一方、**リテール / 銀行未利用層** セグメントでは USDT-Tron が支配的である。
- **ベネズエラ-コロンビア corridor**: コロンビア在住のベネズエラ移民は、ベネズエラの家族へ価値を送るレイヤーとして USDT-Tron を使う。これは世界でも最も velocity の高い stablecoin remittance corridors の一つである。

## エルサルバドル · BTC 法定通貨 + USDC 二重政策

- **マクロ文脈**: エルサルバドルは 2001 に USD を正式な法定通貨として採用した（完全ドル化）。同国には金融政策の自律性も国内通貨もない。
- **BTC 採用**: 2021 Bitcoin Law は BTC を USD と並ぶ法定通貨にした。リテール採用は期待を下回り、国家支援の Chivo ウォレット は初期予測を下回った。
- **2024 IMF 合意**: IMF Extended Fund Facility の下で、エルサルバドルは BTC 受入義務を縮小し、Chivo を後景化することに同意した。ただし BTC の法定通貨としての地位は形式上維持している。
- **USDC の役割**: USDC は自由に流通する（ドル化経済の USD ペッグ = パリティ商品）。Circle は正式なインフラ上の存在感を持ち、USDC は crypto-native フローにおける USD のオンチェーン版として機能する。
- **Bitcoin Bonds / Volcano Bonds**: 2026, 時点では再構成され、静かな状態にある。当初の 2021-2022 大規模構想は実現していない。
- **CBDC**: 完全ドル化しているため CBDC プロジェクトはない。

エルサルバドルは、BTC + USD + USDC + 国家支援ウォレット という**二重 rail の極端な事例**であり、中央銀行の金融権限を持たない。マクロ上の教訓は [[fintech/jurisdiction-list-monetary-protectionism]] のより広い stablecoin 地政学にきれいに対応する。

## ベネズエラ · petro 廃止、USDT 送金経済

- **マクロ文脈**: ハイパーインフレが続いている（過去 10 年の累積インフレは数千パーセント）。bolívar は複数回デノミされ、資本規制は厳しい。
- **Petro CBDC**: ベネズエラ政府が発行する石油担保 crypto-asset として 2018 に開始された petro は、2024 までに実質的に失敗し、正式に放棄された。現在の流通はない。
- **USDT 経済**: 事実上のドル化は、ベネズエラ diaspora（米国、コロンビア、スペイン、チリ、ペルー、メキシコ）からの送金、商業決済、家計貯蓄において USDT-Tron 上で動く。Reserve ウォレット と Binance P2P が多用され、bolívares への off-ramp は非公式ローカル OTC を使う。
- **制裁文脈**: ベネズエラ国家機関に対する米 OFAC 制裁は正式な銀行アクセスに影響する。USDT-Tron はリテールフローにおける sanctions-permeable な USD レイヤーとして機能する。
- **規制の方向性**: Sunacrip（暗号資産監督機関）は制度的混乱を経ており、規制枠組みは流動的である。

ベネズエラは、**国家 CBDC が失敗**（petro）し、**民間 USD stablecoin が貨幣機能全体を埋めた**（USDT）事例である。これは EM-dollarization thesis にとって最も強い単一データ点である。

## 国別比較マトリックス

| 国 | インフレ regime | CBDC 状況 | 支配的 stablecoin | 支配的フロー |
|---|---|---|---|---|
| アルゼンチン | 高いが低下中 | 稼働なし | USDT（Tron） | 家計の USD 保存 + 送金 |
| ブラジル | 中程度 | DREX（Pilot 2 active） | USDC、USDT、BRLA | リテール投資 + B2B + 送金 |
| メキシコ | 中程度 | 稼働なし | USDC（Bitso 経由） | US-MX 送金 |
| コロンビア | 中程度 | 探索段階 | USDC + USDT | フリーランサー収入 + ベネズエラ回廊 |
| ペルー | 低い | 探索段階 | USDC + USDT | フリーランサー収入 |
| エルサルバドル | USD ドル化 | なし（ドル化済み） | USDC + BTC | オンチェーン USD + レガシー BTC 採用 |
| ベネズエラ | ハイパーインフレ | Petro 廃止 | USDT（Tron） | 送金 + 家計貯蓄 |

## LatAm 全体の構造パターン

1. **国家 CBDC はリテール層を失っている**。ブラジル DREX は意図的にリテール CBDC ではない。メキシコ Banxico のリテール CBDC は遅延し、ベネズエラの petro は失敗し、コロンビアとペルーは探索段階である。リテールの USD ペッグ需要は USDT と USDC に完全に捕捉されている。
2. **「tokenized deposit」という framing が機関層で勝っている**。ブラジルの DREX はこのパターンの地域旗艦であり、[[fintech/institutional-stablecoin-deposit-token-thesis]] および [[fintech/cbdc-multi-tier-architecture-overview]] の構造的主張と整合する。
3. **即時決済 rails が非 stablecoin のベースラインである**。ブラジルの Pix、メキシコの CoDi、コロンビアの PSE、ペルーの Yape / Plin が該当する。国内で即時決済が支配的な場合、国内通貨 stablecoin の価値は圧縮される。
4. **ステーブルコイン送金回廊が制度的な成功例である**。Bitso US-MX（USDC）、USDT-Tron Colombia-Venezuela、USDT-Tron Argentina-Spain、USDC freelancer-USD-to-LatAm が最も流速の高いステーブルコイン利用例である。
5. **親米政権と反米政権の「政策姿勢」ギャップは実在するが、予想より小さい**。Milei のアルゼンチン、Lula のブラジル、Sheinbaum のメキシコ、Maduro のベネズエラはいずれも同じ家計行動に直面する。すなわち、中央銀行が何を守ろうとしても USDT-Tron が代替する。
6. **ブラジルは日本型信託 EPI アーキテクチャに最も近い類例である**（[[fintech/japan-stablecoin-regulatory-landscape]] 参照）。DREX は、非銀行発行者モデルと異なる、規制銀行参加型の許可型 tokenized-deposit プラットフォームである。

## 関連項目

- [[fintech/INDEX|Wiki Index]]
- [[fintech/brazil-drex-timeline-2026|Brazil DREX timeline 2026]]
- [[fintech/southeast-asia-stablecoin-regulatory-landscape|SE Asia regulatory landscape]]
- [[fintech/em-market-crypto-dollarization-pattern|EM crypto-dollarization pattern]]
- [[fintech/gray-market-dollar-network-formalization|Gray market USD network formalization]]
- [[fintech/jurisdiction-list-monetary-protectionism|§501(d) jurisdiction list]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|Global five-pole matrix]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|Institutional SC + deposit-token thesis]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC multi-tier architecture]]
- [[fintech/india-anti-dollar-dpi-alliance|India anti-dollar DPI alliance]]
- [[fintech/national-license-private-stablecoin-with-dpi-export|National SC + DPI export]]
- [[fintech/stablecoin-crossborder-b2b-growth|B2B SC cross-border growth]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge multi-CBDC]]
- [[fintech/japan-stablecoin-regulatory-landscape|Japan SC regulatory landscape]]
- [[fintech/sovereign-fund-crypto-allocation-pattern|Sovereign-fund crypto allocation]]
- [[exchanges/global-vasp-regulatory-comparison-matrix|Global VASP regulatory matrix]]

## 出典

- Banco Central do Brasil — DREX project pages、BCB press releases、Marco Legal das Criptomoedas に基づく virtual asset service providers に関する CMN resolutions。
- Banco de México（Banxico）— CoDi system documentation および CBDC 関連の公開発言。
- Banco Central de la República Argentina（BCRA）— 決済システム資料および crypto-asset 利用に関する発言。
- Comisión Nacional de Valores（Argentina）— Law 27.739 に基づく VASP 登録。
- Banco Central de Venezuela（BCV）— 公開発言、Sunacrip 過去資料。
- Banco de la República（Colombia）— 探索的 CBDC 公開資料およびデジタル資産ワーキングペーパー。
- Banco Central de Reserva del Perú（BCRP）— 決済システムおよび CBDC 探索資料。
- Banco Central de Reserva de El Salvador（BCR）— Bitcoin Law 実装資料および IMF 合意の公開要約。
- Bank for International Settlements — ラテンアメリカ CBDC ワーキングペーパーおよび Project Nexus 関連公開資料。
