---
source: fintech/ecny-supply-chain-expansion
source_hash: fc09202bd1d2a137
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "e-CNY のサプライチェーン・クロスボーダー拡張 2025–2026"
translated_at: 2026-07-30T02:08:00+09:00
---
# e-CNY のサプライチェーン・クロスボーダー拡張 2025–2026

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の下にある、2025–2026 年 cross-border expansion phase の中国 e-CNY に関する country-specific deep dive である。4 か国比較は [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]、wholesale-bridge architecture は [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC cross-border settlement bridge]]、同じ地域市場で競合する private-stablecoin rail は [[fintech/hkma-stablecoin-licensing-overview|HKMA stablecoin licensing overview]]と対になる。より広い CBDC architecture context は [[fintech/cbdc-multi-tier-architecture-overview|CBDC multi-tier architecture overview]]を参照。

> [!info] 要約
> 公開資料は、異なる二つの cross-border surface を裏付ける。香港居住者は 2024 年 5 月から、香港 mobile number で e-CNY wallet を開設し、FPS を通じて top-up して Mainland pilot area で利用できる。一方、mBridge は 2024 年半ばに wholesale multi-CBDC MVP stage に達し、BIS は 2024 年 10 月に partner へ引き渡した。引用した公式資料は、2025 年の commercial mBridge launch、Brazil DREX membership、定量化された Belt-and-Road commodity corridor を立証しない。live HKMA register と issuer の直接発表は、2026-07-30 時点で香港の licensed stablecoin issuer 2 社を特定する。これらの licence は e-CNY を直接置換した証拠ではなく、別の regulated rail を生む。^[https://www.hkma.gov.hk/eng/news-and-media/press-releases/2024/05/20240517-4/; https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; https://www.hkma.gov.hk/eng/regulatory-resources/registers/register-of-licensed-stablecoin-issuers/]

## 三つの拡張レイヤー

```
                  e-CNY 2025-2026 拡張（三つのレイヤー）
                                  │
        ┌─────────────────────────┼─────────────────────────────────┐
        ▼                         ▼                                 ▼
  L1 香港 link             L2 mBridge wholesale             L3 Belt-and-Road project pilot
   （retail / SME）          （central-bank RTGS）             （SOE commodity / infra）
        │                         │                                 │
   香港居住者             HKMA + BoT + CBUAE                 公開証拠の境界:
   e-CNY wallet           + SAMA                              引用した公式資料には
   cross-boundary        PvP atomic settlement               corridor-level series
   Mainland pilot area   MVP / real-value enabled            がない
        │                         │                                 │
        └─────────────────────────┴─────────────────────────────────┘
                                  │
              競争上の文脈: HKMA stablecoin licensing
              （HSBC + Anchorpoint — 最初の licence 2026-04-10）
```

## レイヤー 1 — 香港 / GBA のクロスバウンダリー・リテール link

下表は HKMA の 2024 年 5 月 launch announcement と user guide に限定する。technical availability から、GBA 全都市での「routine use」や adoption を推定しない。^[https://www.hkma.gov.hk/eng/news-and-media/press-releases/2024/05/20240517-4/; https://www.hkma.gov.hk/media/eng/doc/key-information/press-release/2024/20240517e3a2.pdf]

| 項目 | 詳細 |
|---|---|
| Programme | 香港居住者向け cross-boundary e-CNY pilot の HKMA-PBoC 拡張 |
| Launch | 2024 年 5 月 17 日に service expansion を発表 |
| Wallet model | 香港 mobile number で登録。対象 wallet tier では Mainland bank account 不要 |
| Top-up | 参加香港 bank から FPS top-up。一部は HKD から RMB への conversion に対応 |
| 公表 limit | user guide は対象 wallet tier について、balance RMB 10,000、1 transaction RMB 2,000、daily RMB 5,000、annual RMB 50,000 を記載 |
| 利用の境界 | Mainland e-CNY pilot area での cross-boundary retail payment が目的。announcement は active-user や GBA-wide transaction total を公表していない |

香港 link は具体的な cross-boundary retail-CBDC access arrangement である。「at scale」、active use、first-place の比較主張には current transaction・user data が必要だが、引用した launch material は提供していない。

[[fintech/hkma-stablecoin-licensing-overview|HKMA Stablecoins Ordinance]] は 2025 年 8 月に発効した。licence status は live HKMA register、product・launch claim は issuer の直接発表で確認する必要がある。2026-07-30 時点で、register と直接発表は licensed issuer 2 社を裏付ける。これらの licence は法的に別の rail を創設し、それ自体では e-CNY activity の流出を立証しない。^[https://www.hkma.gov.hk/eng/regulatory-resources/registers/register-of-licensed-stablecoin-issuers/]

## レイヤー 2 — mBridge wholesale ring

下表は 2024 年 10 月の引渡し時点の BIS project page を用いる。「法域の準備状況を条件に real-value transaction が可能」は、一般的な commercial operation と同じではない。^[https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm]

| 項目 | 詳細 |
|---|---|
| Programme | [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] — multi-CBDC wholesale settlement platform |
| 創設中央銀行 | PBoC + HKMA + Bank of Thailand + Central Bank of UAE（2021）。Saudi Central Bank（SAMA）は 2024-06 に参加 |
| BIS の役割 | BIS Innovation Hub は 2021 年から project に取り組み、2024 年 10 月に partner へ引渡し |
| Architecture | peer-to-peer cross-border payment と FX を支える DLT platform の mBridge Ledger。4 founder が validator node を配置 |
| Settlement mode | real-time cross-border payment・foreign-exchange transaction。2022 pilot は real-value transaction を含む |
| Stage | 2024 年半ばに MVP 到達。法域の準備状況を条件に real-value transaction が可能 |
| Membership の境界 | SAMA は BIS が示す 5 番目の member。BCB と Bank Indonesia は引渡し時代の list では observer で、member ではない |

BIS 出典は 4 founder と SAMA が関わる MVP を裏付ける。Brazil integration timetable、世界 GDP の 3 分の 1 に届くとの範囲、または引渡し後の governance を PBoC と HKMA だけが control するとの主張を裏付けない。

[[fintech/bis-project-agora-overview|BIS Project Agorá]] は tokenised central-bank reserve と commercial-bank deposit を組み合わせる別 experiment である。BIS は 2026 年 5 月に 8 central bank と 40 超の regulated institution を報告した。引用した project material に Agorá と mBridge の正式 interoperability agreement はない。範囲を限定した比較は [[fintech/bis-project-agora-vs-mbridge|Agorá と mBridge の戦略比較]]を参照。

## レイヤー 3 — Belt-and-Road project pilot 統合

今回確認した PBoC・partner の公式資料には、特定 SOE、commodity、transaction volume、e-CNY settlement を結びつける再現可能な corridor-level dataset がなかった。したがって下表は press speculation を完了 transaction に変換せず、証拠の境界を記録する。^[https://www.pbc.gov.cn/en/3688110/3688172/index.html; https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm]

| Claim 領域 | 公開資料で裏付けられること | 未検証のこと |
|---|---|---|
| Cross-boundary retail | 香港 pilot と FPS top-up は HKMA が記録 | corridor 別 active user・transaction value |
| Wholesale multi-CBDC | mBridge MVP と 2022 real-value pilot は BIS が記録 | 引渡し後の production volume・corridor mix |
| Belt-and-Road invoice | RMB internationalisation は明示された policy context | e-CNY で特定 settlement された oil、soybean、rare-earth、infrastructure invoice |
| SOE / policy-bank participation | transaction-specific issuer または official statement による裏付けが必要 | CNPC、Sinopec、COSCO、CDB、China Exim の参加はここでは立証されない |
| Volume | 引用資料に公式の corridor 別 e-CNY series はない | methodology なしに aggregate claim を corridor へ割り当てない |

Belt-and-Road layer は、transaction-specific public record が party、asset、currency、date、settlement rail を特定するまで research question として扱うべきである。

引用資料が立証するのは、retail、wholesale、licensing の別々の rail である。単一の geopolitical purpose、SWIFT を置き換える協調 plan、または counterparty が USD / non-USD settlement を選ぶ動機は立証しない。[[fintech/jurisdiction-list-monetary-protectionism|法域 list を通じた通貨保護主義]]は、これら project source の認定事実ではなく分析上の thesis に留まる。

## 直近の公開普及指標

以下の figure は元の日付と reporting scope を維持する。PBoC の 2024–2025 financial-inclusion report は national pilot-area transaction total を示すが、比較可能な active-wallet count を提供しない。^[https://www.pbc.gov.cn/xindaishichangsi/5443861/5443865/5443892/5957f8d15a824e9e88d01710873482d3/2025110711361912922.pdf; https://www.hkma.gov.hk/eng/news-and-media/press-releases/2024/05/20240517-4/; https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm]

| レイヤー | Metric | 直近の公開数値 | 出典 |
|---|---|---|---|
| 国内 e-CNY | pilot-area の cumulative transaction value | 2024 年末 **CNY 9.4 trillion** | PBoC financial-inclusion indicators report |
| 国内 e-CNY | pilot-area の cumulative transaction | 2024 年末 **2.56 billion** | PBoC financial-inclusion indicators report |
| 香港 link | Wallet access | 香港 mobile-number registration と FPS top-up を 2024 年 5 月開始 | HKMA announcement・user guide |
| mBridge | 特定された member authority | **5**: 4 founder + SAMA | BIS handover-era project page |
| mBridge | Platform status | 2024 年半ばに MVP。法域の準備状況を条件に real-value enabled | BIS handover-era project page |
| Belt-and-Road | Commodity-corridor metric | 再現可能な公式 series を特定できず | aggregate e-CNY または RMB data で代替しない |

二つの数値は、記載された reporting date までの pilot-area における cumulative transaction と value である。active-wallet series ではなく、引用 report は比較可能な active-user または active-wallet denominator を提供していない。したがって、report が明記する範囲を超えて activity rate や use-case mix を立証することはできない。

## 拡張フェーズのアーキテクチャと設計選択

domestic design の行は PBoC white paper、mBridge の行は BIS project page を用いる。第 3 列は公表された目的または証拠の境界を記録し、performance measurement や推定した動機ではない。^[https://www.pbc.gov.cn/en/3688110/3688172/4157443/4293696/2021071614584691871.pdf; https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm]

| 設計選択 | 内容 | 証拠または公表 rationale |
|---|---|---|
| 二層（PBoC → authorised operator → user） | PBoC が e-CNY を発行し、authorised operator が国内 design と対応する香港 wallet link で exchange・circulation service を提供 | PBoC white paper は、二層 design が既存 resource を利用し commercial institution の役割を維持すると説明する。[[fintech/cbdc-multi-tier-architecture-three-paradigms|three-paradigms]] を参照 |
| Controllable anonymity | lower-tier wallet は少ない identifying information で利用でき、higher-tier service はより強い identification を要求 | PBoC は AML/CFT control とともに「small value の anonymity、high value の traceability」を説明 |
| Programmability（限定） | 公式資料は smart-contract programmability と範囲限定の pilot use を説明 | 引用資料は unrestricted または general-purpose DeFi functionality を立証しない |
| Retail e-CNY に利息なし | retail e-CNY は non-interest-bearing | PBoC は e-CNY を M0 instrument と位置づける。より広い deposit effect はここでは測定しない |
| Wholesale と retail の cross-border surface を分離 | mBridge は wholesale multi-CBDC platform、香港 wallet link は別の retail arrangement | 資料は二つの異なる service を記録し、universal cross-border policy を示さない |
| mBridge の PvP atomic settlement | PvP は cross-currency transaction の settlement risk 低減を目的とする | BIS は settlement objective を説明するが、本ページは comparative performance measure を提示しない |

文書で確認できる stage boundary はより限定的である。香港 link は retail cross-boundary access を提供し、mBridge は wholesale multi-CBDC MVP stage に到達して partner へ引き渡された。引用資料は global retail availability、望ましい将来 sequence、または一方の拡張がより安全・control 可能であるとの比較を立証しない。

## 競争上の文脈としての香港ステーブルコイン licence

[[fintech/hkma-stablecoin-licensing-overview|HKMA Stablecoins Ordinance]] は 2025 年 8 月 1 日に発効した。live HKMA register、HKMA の 2026 年 5 月 Legislative Council briefing、issuer の直接発表は、The Hongkong and Shanghai Banking Corporation Limited と Anchorpoint Financial Limited を最初の 2 licensee として特定し、grant date を 2026 年 4 月 10 日としている。下表は licence status と公表 product plan を分ける。licence だけでは token が live であることを立証しない。^[https://www.hkma.gov.hk/eng/regulatory-resources/registers/register-of-licensed-stablecoin-issuers/; https://www.hkma.gov.hk/media/eng/doc/about-the-hkma/legislative-council-issues/20260504e2.pdf; https://www.about.hsbc.com.hk/news-and-media/hsbc-welcomes-hkmas-grant-of-a-hong-kong-stablecoin-issuer-licence; https://www.sc.com/en/press-release/standard-chartered-backed-anchorpoint-granted-stablecoin-issuer-licence-by-the-hong-kong-monetary-authority/]

| Licensee | 公表 product scope | 証拠の境界 |
|---|---|---|
| The Hongkong and Shanghai Banking Corporation Limited | HSBC は 2026 年後半の HKD-denominated stablecoin launch を計画し、まず PayMe と HSBC HK App に統合して、特定の payment・tokenised-investment use case に使うとしている | これは HSBC の 2026-04-10 発表時点の計画であり、2026-07-30 に token が live だった証拠ではない。tokenised-investment use は関連する approval を条件とする |
| Anchorpoint Financial（Standard Chartered / HKT / Animoca joint venture） | phased issuance を計画する HKD-backed stablecoin の HKDAP | licence は 2026 年 4 月 10 日付与。planned issuance は live product と同じではない |

他 applicant の status は press shortlist から推定せず、live HKMA register で確認すべきである。[[fintech/hkma-stablecoin-licensing-implications|HKMA licence の含意]]を参照。2 licence は HKD-referenced alternative の可能性を確立するが、product launch、customer access、実際の cross-border use には別の証拠が必要である。^[https://www.hkma.gov.hk/eng/regulatory-resources/registers/register-of-licensed-stablecoin-issuers/]

HKMA 資料は stablecoin-issuer licensing regime と、別の e-CNY / FPS pilot を立証する。両 rail の substitution / complementarity、customer preference、香港 bank を通じた settlement integration、または [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]] との interoperability は立証しない。product-level または corridor-level の connection には別の証拠が必要である。

## 起源と進化

```
2014        PBoC が e-CNY research を開始
2017        CBDC architecture に関する BIS / IMF / ECB paper
2020-04     PBoC e-CNY domestic retail pilot を開始（4 都市）
2021        BIS Innovation Hub Hong Kong Centre が PBoC + HKMA + BoT + CBUAE と mBridge を開始
2022-04     国内 e-CNY pilot を 23 都市へ拡張
2023        香港居住者向け cross-boundary pilot。smart-contract pilot 開始
2024-03     HKMA Project Ensemble 開始（香港の tokenised-deposit sandbox）
2024-04     BIS Project Agorá を 7 central bank で開始
2024-05     香港 mobile-number wallet registration と FPS top-up 開始
2024-06     Saudi SAMA が mBridge に参加（5 番目の central bank）
2024-10     mBridge が MVP に達した後、BIS が partner へ引渡し
2025-08     HKMA Stablecoin Ordinance 発効
2026-04-10  香港で最初の 2 stablecoin issuer licence を付与
2026-05     Agorá が 8 central bank と 40 超の regulated institution による prototype を報告
2026-07-30  Brazil の mBridge 参加を確認する引用可能な公式資料なし
```

**非因果的な chronology**: 公開記録が示すのは domestic pilot、香港 retail link、mBridge の MVP 到達と partner への引渡し、別個の香港 stablecoin-issuer regime である。各 layer が前段階の readiness threshold を待ったこと、mBridge が general commercial operation に入ったこと、cross-continent integration が続いたこと、または特定 geopolitical bloc で consent を得やすいことは立証しない。

## 関連項目

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC multi-tier architecture overview]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC の三つの現行 paradigm]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC architecture 選択の 4 tradeoff]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC cross-border settlement bridge]]
- [[fintech/mbridge-bis-multi-cbdc-vs-agora|mBridge と Agorá]]
- [[fintech/mbridge-six-central-banks-roster|mBridge six central banks roster]]
- [[fintech/mbridge-non-usd-settlement-ring-scale|mBridge non-USD settlement ring scale]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/bis-project-agora-vs-mbridge|Agorá と mBridge の戦略比較]]
- [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]]
- [[fintech/hkma-stablecoin-licensing-overview|HKMA Stablecoin Licensing Overview]]
- [[fintech/hkma-stablecoin-licensing-implications|HKMA licensing implications]]
- [[fintech/jurisdiction-list-monetary-protectionism|法域 list と通貨保護主義]]
- [[fintech/central-banking-function-unbundling|中央銀行機能の五層分解]]

## 出典

- [HKMA — 香港における cross-boundary e-CNY pilot の拡張（2024-05-17）](https://www.hkma.gov.hk/eng/news-and-media/press-releases/2024/05/20240517-4/)
- [HKMA — e-CNY wallet user guide](https://www.hkma.gov.hk/media/eng/doc/key-information/press-release/2024/20240517e3a2.pdf)
- [BIS — mBridge handover 時点の project record](https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm)
- [PBoC — e-CNY white paper](https://www.pbc.gov.cn/en/3688110/3688172/4157443/4293696/2021071614584691871.pdf)
- [PBoC — 2024–2025 financial-inclusion indicators](https://www.pbc.gov.cn/xindaishichangsi/5443861/5443865/5443892/5957f8d15a824e9e88d01710873482d3/2025110711361912922.pdf)
- [HKMA — financial infrastructure に関する Legislative Council briefing（2026-05-04）](https://www.hkma.gov.hk/media/eng/doc/about-the-hkma/legislative-council-issues/20260504e2.pdf)
- [HKMA — Register of Licensed Stablecoin Issuers](https://www.hkma.gov.hk/eng/regulatory-resources/registers/register-of-licensed-stablecoin-issuers/)
- [HSBC — stablecoin issuer licence と HKD product plan（2026-04-10）](https://www.about.hsbc.com.hk/news-and-media/hsbc-welcomes-hkmas-grant-of-a-hong-kong-stablecoin-issuer-licence)
- [Standard Chartered — Anchorpoint licence と HKDAP product plan（2026-04-10）](https://www.sc.com/en/press-release/standard-chartered-backed-anchorpoint-granted-stablecoin-issuer-licence-by-the-hong-kong-monetary-authority/)
- [BIS — Project Agorá](https://www.bis.org/about/bisih/topics/fmis/agora.htm)
