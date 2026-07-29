---
source: real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison
source_hash: 88fe5e48dee49dd1
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "私募リート（日本）と上場 J-REIT の比較"
translated_at: 2026-07-30T00:05:39+09:00
---

# 私募リート（日本）と上場 J-REIT の比較

## TL;DR

私募リート（私募リート / 非上場REIT）と上場 [[real-estate-finance/j-reit-market-overview|J-REIT]] は、いずれも投資信託法上の投資法人形態を利用し得るが、上場の有無は取引と開示を大きく変える。上場 J-REIT は公開継続開示ルールの下で JPX において取引される。私募リートの申込、償還、NAV および投資家向け報告の条件はファンドごとに異なり、各商品の文書から確認する必要がある。

ARES の調査は私募リートのセグメントを示すが、投資家適格性、実際の保有者、配分動機、評価方針、負債との適合は商品・投資家ごとに異なる。外部の観察者が得られるファンド単位の公開情報は、一般に上場 J-REIT より少ないが、それだけで低リスクまたは負債との適合性が高いとはいえない。ARES（不動産証券化協会）は J-REIT と私募不動産ファンドの業界統計を公表する。上場対私募のルーティングレイヤーについては [[real-estate-finance/j-reit-market-overview|J-REIT market overview]] の後にこのページを用いる。

## Wiki route

この比較は、上場 J-REIT のルーティングページの後に用いること: [[real-estate-finance/j-reit-market-overview|J-REIT market overview]]、[[real-estate-finance/j-reit-vs-us-reit-governance-comparison|US/JP governance comparison]]、[[real-estate-finance/j-reit-sponsor-structure-conflict|sponsor structure and conflict of interest]]、[[real-estate-finance/top-10-j-reit-overview-matrix|top 10 J-REIT overview matrix]]。ここからは、生命保険会社の配分の文脈については [[insurance/INDEX|insurance domain]] へ、ファイナンスレイヤーについては [[banking/INDEX|banking domain]] へ、上場デベロッパーのスポンサーの文脈については [[finance/INDEX|finance domain]] へルーティングする。GK-TK 構造は、適用される取引文書に従い、私募不動産取引で用いられる場合がある。その取引固有の経路については、[[real-estate-finance/INDEX|real-estate-finance index]] で計画されている GK-TK SPV クラスターへたどる。

## 1. 並列比較

表の根拠（2026-07-29 確認）：[FSA の投資法人制度概要](https://www.fsa.go.jp/en/refer/legislation/20130416/02.pdf)、[JPX 上場 REIT 一覧](https://www.jpx.co.jp/english/equities/products/reits/issues/index.html)、[ARES 2026 年 1 月私募ファンド調査](https://www.ares.or.jp/news/uploads/private_fund_survey202601.pdf)。私募ファンドの条件は商品文書ごとに異なる。

| Axis | Listed J-REIT | Private REIT (私募リート) |
|---|---|---|
| Legal form | Investment corporation under Investment Trust Act | Investment corporation under Investment Trust Act |
| Listing venue | JPX REIT segment | Not listed; private placement |
| Trading | 取引所取引時間中の JPX 市場取引 | 申込・償還条件はファンドごとに異なり、取引所市場はない |
| Pricing reference | 取引所価格。発行体 NAV または鑑定指標は別の尺度 | ファンドの NAV／一口当たり価格算式、評価入力、鑑定人、頻度を記録 |
| Disclosure | 継続的な公開開示（有価証券報告書）、IR、規制当局への提出 | 商品文書と投資家向け報告は異なる。ARES はセグメント集計統計を公表 |
| Investor base | 日付付き投資主開示を使い、所有と JPX 売買フローを区別 | 適格性と実際の投資家構成はファンド固有。商品・投資家報告を使う |
| Liquidity | 取引所流動性は発行体と市場環境によって異なる | ファンド固有の申込、償還、上限および停止条件に従う |
| Management / sponsor structure | 外部運用。スポンサーまたはサポート会社との関係は発行体ごとに異なる | 外部運用。スポンサーまたはサポート会社との関係はファンドごとに異なる |
| Tax treatment | 投資法人の期間別導管性要件と投資家の税務上の扱いを確認 | ファンド文書と税務助言から、ビークル、期間別導管性要件、投資家の税務上の扱いを確認 |
| Regulator | FSA, JPX | FSA |
| Industry body | ARES | ARES |
| Current count / scale | 最新の JPX 上場データを使用 | 最新の ARES 調査を使用；私募ファンド全体の総額から私募 REIT 数を推定しない |

## 2. オープンエンド型の償還メカニクス

日本の私募リートの多くはオープンエンド型と説明されるが、申込・償還の仕組みはファンドごとに異なる。以下は標準条件ではなく、デューデリジェンス項目である。

| Step | Pattern |
|---|---|
| Subscription / redemption window | ファンド文書に記載された日付、通知期間および適格要件を記録 |
| NAV calculation | 評価方針、鑑定人、頻度および一口当たり価格の算式を記録 |
| Redemption cap | 上限、待ち行列、ゲートまたは按分処理の有無を記録 |
| Suspension provision | 発動条件、決定者および再開手続を記録 |
| Distribution policy | 開示された分配可能所得の定義、準備金および頻度を記録 |
| Reporting | 実際に提供される頻度、対象者および物件別詳細を記録 |

「オープンエンド型」というラベルから負債適合やショック耐性を推定しない。各ファンドの通知期間、上限、待ち行列、ゲート、停止、現金バッファ、クレジットライン、実際の償還履歴を、投資家の日付付き負債・流動性要件と比較する。上場市場の売買は投資家間で投資口を移転するものであり、それ自体は発行体が資金流入・流出を吸収することを意味しない。

## 3. 手数料構造のトレードオフ

表の根拠（2026-07-29 確認）：[ARES 私募ファンド調査](https://www.ares.or.jp/news/uploads/private_fund_survey202601.pdf)は市場セグメントを示すが、実際の手数料は各ファンドの募集・運用文書に基づく。以下は考え得る手数料区分であり、全商品共通の条件ではない。

| Fee component | Listed J-REIT | Private REIT |
|---|---|---|
| Asset-management fee | 発行体の現行の資産、利益、業績、取引連動の算式、受領者、分母を記録 | ファンドの現行算式、受領者、ハードル、キャッチアップ、上限、分母を記録 |
| Marketing / placement fee | 引受、仲介その他適用される発行・売買コストを記録 | 商品文書に記載された販売、申込または流通手数料を記録 |
| カストディ／事務 | 任命された主体、契約範囲、手数料を記録 | 任命された主体、契約範囲、手数料を記録 |
| Audit + compliance | 発行体開示から実際の監査、上場、提出、コンプライアンス費用を記録 | ファンド文書から実際の評価、監査、報告、コンプライアンス費用を記録 |
| Liquidity cost / discount | ビッド・アスク・スプレッド、市場インパクトおよび発行コストを測定 | ファンド固有の流動性制限と評価ディスカウントを検討 |

総手数料負担と投資家の優先事項は商品・マンデートごとに異なる。計算基準、業績期間、取引前提、流動性条件、グロス／ネットのリターン定義を揃えてから手数料を比較する。

## 4. 年金・機関投資家の配分ユースケース

以下は検証すべき配分仮説であり、上場 J-REIT が満たせないニーズという主張ではない。

表の根拠（2026-07-29 確認）：[ARES 2026 年 1 月私募ファンド調査](https://www.ares.or.jp/news/uploads/private_fund_survey202601.pdf)。投資家用途の行は分析上のユースケースであり、全ての投資家区分が全ての私募 REIT を保有するとの主張ではない。

| Investor type | ファンド・マンデート固有の検証 |
|---|---|
| Corporate pension plans | 適格性、目標リターン、評価方針、流動性、手数料、キャッシュフロー予定をマンデート・負債と比較 |
| Life insurers ([[insurance/INDEX\|insurance domain]]) | 資本規制、評価、ALM、集中、流動性、ルックスルー要件を検証 |
| Regional banks ([[banking/INDEX\|banking domain]]) | 資本規制、CRE 集中、流動性、ガバナンス、ルックスルー・エクスポージャーを検証 |
| Public pension and pension fund-of-funds | 方針上の適格性、ベンチマーク、運用マンデート、流動性予算、実際の配分を確認 |
| Sponsor-related investors | 所有、ガバナンス、関連当事者条件、トレジャリー方針、明示された配分理由を確認 |

ARES が示すセグメント成長だけでは特定の配分動機を立証しない。日付付きの投資家マンデート、調査、開示から動機を確認し、ファンド運用会社のマーケティングと分ける。

## 5. 透明性のトレードオフ

| Public observer can see | Listed J-REIT | Private REIT |
|---|---|---|
| Aggregate market size | Yes (JPX, ARES) | Aggregate only (ARES private-REIT statistics) |
| Per-fund AUM | 利用可能な場合は日付入りの発行体開示を使用 | 公開状況は異なる。利用可能な場合はファンドまたは運用会社の公開資料を使用 |
| Per-fund DPU yield | 日付付き発行体・市場データから算出 | 公開状況とリターン定義は異なる |
| Per-asset detail | 発行体 IR 資料を使用し、省略があれば明記 | 公開状況は異なり、適格投資家向け報告の方が詳細な場合がある |
| Sponsor stake | 日付付き発行体投資主開示を使用 | 利用可能な場合はファンド固有の開示を使用 |
| LTV | 発行体の日付付き定義を使用 | 範囲を明記してファンド固有開示または ARES 集計を使用 |
| Investor ownership | 日付付き ARES 保有データまたは発行体投資主開示を使用。JPX フローは所有ではない | ファンド固有開示または範囲を限定した ARES 調査を使用 |

透明性のトレードオフが中心的な緊張点である。上場 J-REIT の分析は公開情報から行えるが、適格投資家の輪の外からの私募リートの分析は、ARES の業界統計とスポンサーレベルの公開開示に限られる。したがってこのページは集計／セグメントのレベルにとどまる。

## 6. ARES 会員エコシステム

ARES（不動産証券化協会, Association for Real Estate Securitization）は、上場 J-REIT と私募リートの双方、加えて GK-TK 私募不動産ファンドをカバーする業界団体である。ARES の会員企業には以下が含まれる。

- スポンサー（デベロッパー、金融グループ、海外資産運用会社）。
- J-REIT と私募リートを運営する資産運用会社。
- 受託者として行動する信託銀行（[[banking/trust-bank-custody-operating-comparison|trust bank カストディ operating comparison]]）。
- 鑑定会社（JREI 系列およびその他）。
- 証券化業界の法務／会計／アドバイザリー会社。

J-REIT および私募リートに関する ARES の集計統計は、適格投資家限定の開示領域に立ち入ることなくセグメントのトレンド分析を行うための有用な参照である。

## 7. GK-TK 私募不動産ファンドとの関係私募リートは、どちらも日本における私募不動産ファイナンスのビークルであるとはいえ、GK-TK SPV 構造とは区別される。

| Feature | Private REIT | GK-TK SPV |
|---|---|---|
| Legal form | Investment corporation under Investment Trust Act | 合同会社 (GK) + 匿名組合 (TK) silent-partnership SPV |
| Open-endedness | 私募リートの申込、償還、ゲート、停止条件を記録 | 契約・取引固有。GK-TK は期間、延長、複数資産、複数クロージングを取り得る |
| Investor base | 適格性と実際の保有者はファンド固有 | TK 投資家の適格性、人数、属性は取引固有 |
| Tax treatment | 期間ごとの導管性要件と投資家の扱いを確認 | 取引ごとに GK・TK の税務、源泉徴収、投資家への影響を確認 |
| Use case | ファンドが明示する戦略、適格資産、期間を記録 | 単一または複数資産を保有し、取得、開発、運営、ポートフォリオ戦略を支え得る |
| Disclosure | Qualified-investor disclosure | Private contractual disclosure to TK investors |

両形態は日本の私募不動産市場に共存する。GK-TK を CMBS と同一視しない。債務証券化、担保、証券発行、倒産隔離は取引文書から立証する。同様に、J-REIT への移転は取引固有であり、ブリッジファンドのパイプラインを前提にしない。

## 8. なぜこれが重要か

- 投資家の配分: JPX データは私募リートの保有を示さない。ARES 集計と日付付きのファンド／投資家開示を、範囲を明記して使う。
- 市場サイクルの読み: 上場インプライド利回りと私募 NAV 利回りの差は仮説であり、単独のサイクルシグナルではない。アセット構成、レバレッジ、手数料、評価日、鑑定前提、償還条件を揃えてから解釈する。
- スポンサー戦略: スポンサーが上場・私募ビークルの両方を運用する場合は、現行法人、適格資産、配分方針、実際の各取引を確認してから [[real-estate-finance/j-reit-sponsor-structure-conflict|sponsor conflict]] の枠組みを適用する。
- 海外投資家の読み: 適格性とアクセスは各商品の文書から判断する。上場市場のフローデータだけでは私募リートへのアクセスや保有を立証できない。

## Related

- [[real-estate-finance/INDEX|real-estate-finance index]]
- [[real-estate-finance/j-reit-market-overview|J-REIT market overview]]
- [[real-estate-finance/j-reit-vs-us-reit-governance-comparison|J-REIT vs US REIT governance comparison]]
- [[real-estate-finance/j-reit-sponsor-structure-conflict|J-REIT sponsor structure and conflict of interest]]
- [[real-estate-finance/top-10-j-reit-overview-matrix|Top 10 J-REIT overview matrix]]
- [[banking/INDEX|banking index]]
- [[banking/trust-bank-custody-operating-comparison|trust bank カストディ operating comparison]]
- [[finance/INDEX|finance index]]
- [[finance/japan-listed-financial-groups-investable-universe|Japan listed financial groups investable universe]]
- [[insurance/INDEX|insurance index]]
- [[policy-finance/INDEX|policy-finance index]]
- [[policy-finance/japan-housing-finance-agency|JHF]]
- [[retail/aeon-group|AEON Group]]
- [[retail/seven-and-i-hd|Seven & i HD]]
- [[trust-banks/mitsubishi-ufj-trust-bank|Mitsubishi UFJ Trust Bank]]
- [[trust-banks/sumitomo-mitsui-trust|SMTB]]
- [[INDEX|FinWiki index]]

## Sources

- J-REIT.jp (ARES portal), English.
- ARES, "About ARES" English page.
- JPX, "REIT Market" English landing.
- FSA, English landing for investment-corporation and Investment Trust Act framework.
