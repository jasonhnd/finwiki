---
source: real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison
source_hash: 1d30cb014ef1f641
lang: ja
status: machine
fidelity: ok
title: "私募リート（日本）と上場 J-REIT の比較"
translated_at: 2026-06-19T12:43:19.888Z
---

# 私募リート（日本）と上場 J-REIT の比較

## TL;DR

私募リート（私募リート / 非上場REIT）と上場 [[real-estate-finance/j-reit-market-overview|J-REIT]] は、投資信託法の下では構造的に同じ種類の投資法人であるが、上場の有無が実務上の使われ方に関するほぼすべてを変える。上場 J-REIT は JPX で継続的に取引され、完全な継続開示義務と幅広い投資家層を持つ。私募リートは機関投資家や年金投資家に私募で募集され、市場取引ではなく構造化されたオープンエンド型のスケジュールで償還し、連続的な市場価格ではなく四半期ごとの NAV ベースの価格を提供する。

私募リートは、上場 REIT のボラティリティなしに鑑定評価ベースの不動産エクスポージャーを求める [[insurance/INDEX|life insurers]]、[[insurance/INDEX|corporate pension plans]]、地方銀行、その他の機関投資家プールにとって、安定した配分レーンへと成長してきた。トレードオフは外部の観察者にとっての透明性の低下であるが、長期負債や年金配分方針との適合性はより強い。ARES（不動産証券化協会）は J-REIT と私募リートの双方について業界の枠組みを維持し、会員統計を公表している。上場対私募のルーティングレイヤーについては [[real-estate-finance/j-reit-market-overview|J-REIT market overview]] の後にこのページを用いること。

## Wiki route

この比較は、上場 J-REIT のルーティングページの後に用いること: [[real-estate-finance/j-reit-market-overview|J-REIT market overview]]、[[real-estate-finance/j-reit-vs-us-reit-governance-comparison|US/JP governance comparison]]、[[real-estate-finance/j-reit-sponsor-structure-conflict|sponsor structure and conflict of interest]]、[[real-estate-finance/top-10-j-reit-overview-matrix|top 10 J-REIT overview matrix]]。ここからは、生命保険会社の配分の文脈については [[insurance/INDEX|insurance domain]] へ、ファイナンスレイヤーについては [[banking/INDEX|banking domain]] へ、上場デベロッパーのスポンサーの文脈については [[finance/INDEX|finance domain]] へルーティングする。私募不動産ファンドの内部にしばしば存在する証券化の仕組みについては、[[real-estate-finance/INDEX|real-estate-finance index]] で計画されている GK-TK SPV クラスターへたどること。

## 1. 並列比較

| Axis | Listed J-REIT | Private REIT (私募リート) |
|---|---|---|
| Legal form | Investment corporation under Investment Trust Act | Investment corporation under Investment Trust Act |
| Listing venue | JPX REIT segment | Not listed; private placement |
| Trading | Continuous market trading on JPX | Periodic subscription / redemption windows (often quarterly) at NAV |
| Pricing reference | Market price (continuous) | NAV per unit (appraisal-anchored) |
| Disclosure | Continuing public disclosure (有価証券報告書), IR, regulatory filings | Disclosure to qualified investors only; ARES industry statistics aggregate the segment |
| Investor base | Retail + institutional + foreign | Primarily institutional, pension, and life-insurance |
| Liquidity | High (listed market) | Limited; redemption-window-based |
| Sponsor structure | Same external-management model + sponsor | Same external-management model + sponsor |
| Tax treatment | Tax-pass-through (if distribution-payout test met) | Tax-pass-through (if distribution-payout test met) |
| Regulator | FSA, JPX | FSA |
| Industry body | ARES | ARES |
| Number of funds | Around 60 listed names | A few dozen funds, varies over time; track via ARES |

## 2. オープンエンド型の償還メカニクス

日本の私募リートは通常、連続的な取引ではなく、構造化された購入／償還の窓口を持つオープンエンド型ファンドとして運営される。メカニクスは運用会社ごとに異なるが、一般的なパターンは以下のとおりである。

| Step | Pattern |
|---|---|
| Subscription / redemption window | Periodic (often quarterly) at NAV per unit |
| NAV calculation | Independent appraisal-based, anchored to [[real-estate-finance/INDEX\|JREI methodology]] |
| Redemption cap | Soft / hard caps per window to protect the fund from forced asset sales |
| Suspension provision | Right to suspend redemptions in stressed market conditions |
| Distribution policy | Periodic distribution from rental NOI minus fees, financing costs, capex reserve |
| Reporting | Quarterly NAV and detailed asset-level reporting to qualified investors |

この償還構造こそが、私募リートを年金や生命保険の負債とよく適合させるものである。長期の資本、控えめな期待流動性ニーズ、そして市場価格のボラティリティの代わりに鑑定評価ベースの平準化を受け入れる意思である。同じ構造は、私募リートが、上場 J-REIT が日々の取引を通じて吸収できるのと同種の資金流入／流出ショックを受け入れられないことを意味する。

## 3. 手数料構造のトレードオフ

| Fee component | Listed J-REIT | Private REIT |
|---|---|---|
| Asset-management fee | Acquisition fee + asset-based + sometimes performance | Asset-based + acquisition fee + disposition fee |
| Marketing / placement fee | None (continuous market liquidity) | One-off placement fee on commitment |
| Custody / trustee fee | Trustee bank fee | Trustee bank fee |
| Audit + compliance | Continuing disclosure compliance cost | Periodic NAV / audit cost |
| Liquidity premium | Listed market provides liquidity for free | Investor accepts illiquidity discount |

総手数料負担は運用会社ごとに異なる。投資家の関心は歴史的に、表面的な手数料水準だけよりも、償還メカニクスとの整合性や鑑定評価の独立性に向けられてきた。

## 4. 年金・機関投資家の配分ユースケース

私募リートは、上場 J-REIT が完全には満たせない特定の投資家ニーズに応える。

| Investor type | Why private REIT |
|---|---|
| Corporate pension plans | Long-duration liability match, appraisal-smoothed return profile, lower headline volatility than listed J-REIT |
| Life insurers ([[insurance/INDEX\|insurance domain]]) | Diversification within real-estate sleeve; appraisal-anchored NAV fits with policy-reserve framework |
| Regional banks ([[banking/INDEX\|banking domain]]) | Real-estate sleeve outside direct bank-lending CRE exposure |
| Public pension and pension fund-of-funds | Vehicle that fits with long-horizon real-estate allocation policy |
| Sponsor-related investors | Group-treasury allocation aligned with sponsor real-estate strategy |

私募リートの償還メカニクスと年金負債のデュレーションとの適合こそが、上場 J-REIT が成長してもなおこのセグメントが意味を持ち続けてきた構造的な理由である。

## 5. 透明性のトレードオフ

| Public observer can see | Listed J-REIT | Private REIT |
|---|---|---|
| Aggregate market size | Yes (JPX, ARES) | Aggregate only (ARES private-REIT statistics) |
| Per-fund AUM | Yes | Aggregate only |
| Per-fund DPU yield | Yes | Aggregate only |
| Per-asset detail | Yes (IR materials) | No (qualified-investor-only disclosure) |
| Sponsor stake | Yes | No (private) |
| LTV | Yes | Aggregate / range only |
| Foreign-investor share | Yes (JPX trading by investor type) | Not applicable |

透明性のトレードオフが中心的な緊張点である。上場 J-REIT の分析は公開情報から行えるが、適格投資家の輪の外からの私募リートの分析は、ARES の業界統計とスポンサーレベルの公開開示に限られる。したがってこのページは集計／セグメントのレベルにとどまる。

## 6. ARES 会員エコシステム

ARES（不動産証券化協会, Association for Real Estate Securitization）は、上場 J-REIT と私募リートの双方、加えて GK-TK 私募不動産ファンドをカバーする業界団体である。ARES の会員企業には以下が含まれる。

- スポンサー（デベロッパー、金融グループ、海外資産運用会社）。
- J-REIT と私募リートを運営する資産運用会社。
- 受託者として行動する信託銀行（[[banking/trust-bank-custody-operating-comparison|trust bank custody operating comparison]]）。
- 鑑定会社（JREI 系列およびその他）。
- 証券化業界の法務／会計／アドバイザリー会社。

J-REIT および私募リートに関する ARES の集計統計は、適格投資家限定の開示領域に立ち入ることなくセグメントのトレンド分析を行うための有用な参照である。

## 7. GK-TK 私募不動産ファンドとの関係

私募リートは、どちらも日本における私募不動産ファイナンスのビークルであるとはいえ、GK-TK SPV 構造とは区別される。

| Feature | Private REIT | GK-TK SPV |
|---|---|---|
| Legal form | Investment corporation under Investment Trust Act | 合同会社 (GK) + 匿名組合 (TK) silent-partnership SPV |
| Open-endedness | Open-ended (periodic subscription / redemption) | Closed-end single asset or single-strategy SPV |
| Investor base | Multiple institutional / pension | Smaller set of TK silent-partnership investors |
| Tax treatment | Tax pass-through if distribution-payout test met | TK-level tax treatment; pass-through to TK investors |
| Use case | Long-duration appraisal-anchored real-estate sleeve | Single-deal or single-strategy securitization (single building, portfolio carve-out, bridge fund) |
| Disclosure | Qualified-investor disclosure | Private contractual disclosure to TK investors |

両形態は日本の不動産証券化業界において共存している。ARES は双方をカバーする。GK-TK 構造はよりディール固有であり、[[real-estate-finance/INDEX|CMBS-style securitization]] や J-REIT に供給するブリッジファンドのパイプラインにとって典型的なビークルである。

## 8. なぜこれが重要か

- 投資家の配分: 上場 J-REIT だけを理解すると、JPX に現れない年金／生命保険会社／地方銀行の私募リートレーンを見落とす。
- 市場サイクルの読み: 私募リートの NAV は上場 J-REIT の価格よりも緩やかに動くため、上場 REIT のインプライド利回りと私募リートの NAV 利回りの大きな乖離は不動産サイクルのシグナルである。
- スポンサー戦略: 多くのスポンサーは上場 J-REIT と私募リートを並行して運営しており、これは [[real-estate-finance/j-reit-sponsor-structure-conflict|sponsor conflict]] の議論に加えて配分に関する追加の問いを生み出す。
- 海外投資家の読み: 海外投資家は通常、私募リートではなく上場 J-REIT にアクセスするため、海外フローのデータはより大きな原市場への上場限定の窓となる。

## Related

- [[real-estate-finance/INDEX|real-estate-finance index]]
- [[real-estate-finance/j-reit-market-overview|J-REIT market overview]]
- [[real-estate-finance/j-reit-vs-us-reit-governance-comparison|J-REIT vs US REIT governance comparison]]
- [[real-estate-finance/j-reit-sponsor-structure-conflict|J-REIT sponsor structure and conflict of interest]]
- [[real-estate-finance/top-10-j-reit-overview-matrix|Top 10 J-REIT overview matrix]]
- [[banking/INDEX|banking index]]
- [[banking/trust-bank-custody-operating-comparison|trust bank custody operating comparison]]
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
