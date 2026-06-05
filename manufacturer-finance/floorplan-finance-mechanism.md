---
title: "Floorplan / Wholesale Finance Mechanism (フロアプラン・在庫金融の仕組み)"
aliases:
  - "floorplan-finance-mechanism"
  - "floorplan finance mechanism"
  - "floor plan financing"
  - "wholesale finance mechanism"
  - "dealer inventory finance"
  - "floorplan curtailment"
  - "フロアプランファイナンス"
  - "在庫金融の仕組み"
  - "ディーラー在庫与信"
domain: "manufacturer-finance"
created: 2026-06-03
last_updated: 2026-06-03
last_tended: 2026-06-03
review_by: 2026-12-03
confidence: likely
tags: [manufacturing, floorplan, wholesale-finance, dealer-inventory, captive-finance, curtailment, mechanism, japan, global]
status: active
sources:
  - "https://www.fdic.gov/risk-management-manual-examination-policies/floor-plan-lending"
  - "https://www.dllgroup.com/us/en-us/blog/latest/Floor-plan-financing-in-the-construction-transportation-and-industrial-sectors"
  - "https://www.autofinance.com/insights/floorplan-financing/"
  - "https://disclosure2.edinet-fsa.go.jp/"
---

# Floorplan / Wholesale Finance Mechanism (フロアプラン・在庫金融の仕組み)

## Wiki route

This entry sits under [[manufacturer-finance/INDEX|manufacturing index]] as a **mechanism page**, focused on the *upstream* (dealer-inventory) half of manufacturer finance. It is the wholesale-side complement to the *downstream* (consumer) [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]], and a sibling to [[manufacturer-finance/export-finance-mechanism|export finance mechanism]]. The OEM finance arms that run floorplan programs are documented in [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]], [[manufacturer-finance/honda-finance|Honda Finance]], [[manufacturer-finance/nissan-financial-services|Nissan Financial Services]], and — for heavy equipment — [[manufacturer-finance/komatsu-captive-finance|Komatsu 顧客金融]]. The bank-affiliated leasing companies that compete on wholesale credit are [[leasing-firms/mitsubishi-hc-capital|三菱HCキャピタル]] / [[leasing-firms/orix-corp|オリックス]] / [[leasing-firms/tokyo-century|東京センチュリー]]. Pair with [[manufacturer-finance/INDEX|manufacturer-finance INDEX]] for the regulatory boundary.

## TL;DR

**Floorplan finance (フロアプラン / 在庫金融、wholesale finance とも)** とは、ディーラー (販売店) が **在庫 (新車・中古車・建機・船舶など) を仕入れる段階の与信** を、メーカー captive または金融機関がコミットメントラインで支える仕組み。captive が消費者に貸す retail finance ([[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]]) の **上流 (流通段階)** に当たる。本質は **「メーカー → ディーラー → 消費者」の流通在庫を、売れるまでの間 lender が立替える** こと。lender はメーカー/オークションに代金を直接支払い、**在庫そのものを担保 (collateral)** に取る。返済は **pay-as-sold (売れたら返す)** が基本で、長期滞留在庫には **curtailment (元本の一部前倒し返済)** が課される。manufacturing 視点では、captive が retail と wholesale の両方を握ることで **販売チャネルを上流から支配** できる点が核心。

## 1. floorplan finance とは何か

| 観点 | 内容 |
|---|---|
| 与信対象 | ディーラー (流通段階)。消費者ではない |
| 担保 | 在庫資産そのもの (車両・建機・船舶等)、しばしば動産担保 |
| 資金の流れ | lender がメーカー/オークションに直接支払い、ディーラーは在庫を受領 |
| 返済モデル | **pay-as-sold (売れた個別在庫の代金で当該与信を返済)** + 経過利息 |
| 滞留対応 | **curtailment**: 一定期間ごとに元本の一部を前倒し返済 |
| 監査 | lender による定期的な **在庫実査 (floor check / audit)** |
| 提供主体 | メーカー captive、銀行、独立系 wholesale lender |

floorplan は retail (消費者向け) と対になる概念で、両者を合わせて captive は流通全体を金融面から制御する。retail 側の仕組みは [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]] を参照。

## 2. なぜ floorplan が必要か (ディーラー視点 / メーカー視点)

- **ディーラー視点**: 在庫を現金で仕入れると巨額の運転資金が固定される。floorplan により **頭金なし / 少額で在庫を確保** でき、売れるまで代金支払いを繰り延べられる。流動性と仕入れ余力が向上し、品揃えと需要対応が速くなる。
- **メーカー視点**: captive が floorplan を提供すると、**メーカーは出荷時点で売上を計上** できる (ディーラーが在庫を引き取るため)。生産・出荷の平準化、ディーラーロイヤルティの確保、販売網の維持につながる。captive が retail と wholesale を一体運用すると、上流から下流まで送客と与信を握れる。
- **トレードオフ**: メーカー captive にとって floorplan はディーラーの信用リスク・在庫滞留リスク・不正 (sold-out-of-trust = 売却済なのに返済しない) リスクを負う事業。これを curtailment と audit で管理する。

## 3. curtailment と audit (滞留・不正の管理)

floorplan の中核リスクは **在庫が長く売れ残る** ことと **売れたのに返済されない** こと。lender は次で管理する。

- **Curtailment (カータルメント / 元本一部返済)**: 在庫が一定期間 (例: 30 / 60 / 90 / 120 日) 売れ残ると、ディーラーは元本の一部 (典型的には原与信額の 5〜20% 程度) を前倒しで返済する。滞留在庫の与信残高を逓減させ、陳腐化・価格下落リスクを抑える。curtailment スケジュールは lender / 商品ごとに異なる。
- **Floor check / audit (在庫実査)**: lender は定期・抜き打ちで現物在庫を確認し、台帳と突合する。担保が現存するか、既に売却 (sold) されていないかを検証し、**sold-out-of-trust** (売却済なのに floorplan を返済しない不正) を防ぐ。
- **金利・手数料**: 在庫保有期間に応じて利息が発生し、メーカーの販促キャンペーン (一定期間の利息補助 = floorplan subvention) で軽減されることがある。これは retail 側の lease subvention と同型の販促手段。

## 4. 主体別の floorplan 提供パターン

| 提供主体 | 例 | 特徴 |
|---|---|---|
| **OEM captive (自動車)** | [[manufacturer-finance/toyota-financial-services|TFS]] / [[manufacturer-finance/honda-finance|AHFC]] / [[manufacturer-finance/nissan-financial-services|NMAC]] | 自社ディーラー網の在庫を captive が wholesale 与信。retail と一体運用 |
| **OEM captive (建機・重機)** | [[manufacturer-finance/komatsu-captive-finance|Komatsu Financial]] | 30+ ディストリビューターと顧客に wholesale / retail / lease を提供 |
| **銀行 / 独立系 wholesale lender** | 銀行・専業 wholesale finance | captive を持たない/補完するメーカーのディーラー在庫を与信 |
| **銀行系リース会社** | [[leasing-firms/mitsubishi-hc-capital|三菱HCキャピタル]] / [[leasing-firms/orix-corp|オリックス]] / [[leasing-firms/tokyo-century|東京センチュリー]] | リース・在庫金融で captive と競合 / 提携 |

「captive が自前で floorplan を回す型」(Toyota / Honda / Nissan / Komatsu) と「銀行系・独立系に委ねる型」の対比は、本ドメインの分析軸の一つ。captive を持たない型については [[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]] を参照。

## 5. 規制・政策・funding

- **動産担保・登録 (国内)**: 在庫 (動産) を担保に取るため、動産譲渡登記等の担保法制が関わる。割賦販売・貸金の側面では割賦販売法・貸金業法の対象になりうる。
- **監督 (米国)**: floorplan lending は銀行監督上の融資カテゴリーとして審査される (FDIC の検査方針に floor plan lending の項目がある)。captive は証券化開示の対象になる。
- **funding (証券化)**: wholesale (floorplan) 債権も dealer floorplan ABS / master trust 構造で証券化されることがあり、captive の funding 手段の一つ。retail auto ABS との関係は [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan]] と [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]] を参照。
- **会計**: メーカーがディーラー出荷時に売上計上できるかは、在庫の支配移転 (収益認識基準) の判断に依存する。

## Related

- [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]] (downstream / retail sibling) · [[manufacturer-finance/export-finance-mechanism|export finance mechanism]]
- [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]] · [[manufacturer-finance/honda-finance|Honda Finance]] · [[manufacturer-finance/nissan-financial-services|Nissan Financial Services]] · [[manufacturer-finance/komatsu-captive-finance|Komatsu 顧客金融]]
- [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan]] · [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]
- [[leasing-firms/mitsubishi-hc-capital|三菱HCキャピタル]] · [[leasing-firms/orix-corp|オリックス]] · [[leasing-firms/tokyo-century|東京センチュリー]]
- [[manufacturer-finance/INDEX|manufacturing INDEX]] · [[manufacturer-finance/INDEX|manufacturer-finance INDEX]] · [[INDEX|FinWiki index]]

## Sources

- FDIC「Floor Plan Lending」(検査方針): https://www.fdic.gov/risk-management-manual-examination-policies/floor-plan-lending
- DLL「Floor plan financing in the construction, transportation and industrial sectors」: https://www.dllgroup.com/us/en-us/blog/latest/Floor-plan-financing-in-the-construction-transportation-and-industrial-sectors
- AutoFinance「What is Dealer Floor Plan Financing?」: https://www.autofinance.com/insights/floorplan-financing/
- EDINET (メーカー / captive のセグメント開示): https://disclosure2.edinet-fsa.go.jp/

---

> [!info] 校正ステータス
> confidence: **likely**。floorplan / wholesale finance・pay-as-sold・curtailment・floor check (audit)・sold-out-of-trust の各機構は、公開された業界解説 (DLL / AutoFinance) ・FDIC 検査方針・OEM captive の一般的な運用に基づく仕組みの記述。curtailment 比率 (5〜20% / 30・60・90・120 日) は業界一般の目安で、実際の条件は lender / 商品ごとに異なる。特定社の floorplan 残高・金利は本ページでは扱わず、企業別エントリに委ねる。脆い financial figures より mechanism 知識を優先。
