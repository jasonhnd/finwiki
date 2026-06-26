---
source: securities/japan-pts-liquidity-data-guide
source_hash: 7f5a21c0f3b10acf
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "日本 PTS 流動性データガイド"
translated_at: 2026-06-26T08:29:40.688Z
---

# 日本 PTS 流動性データガイド

## Overview

PTS 流動性データは [[securities/japan-best-execution-sor-pts|Japan best execution, SOR, and PTS]] の背後にある証拠レイヤーである。これは、ある銘柄にとって代替的な取引の場が重要であるかどうかに答える助けとなるが、顧客固有の最良執行結果と同一ではない。有用な分析は、合計売買代金、銘柄レベルの活動、取引の場の利用可能性、スプレッド / 気配の質、注文サイズ、執行確率、そしてブローカーのルーティング方針を区別しなければならない。

本ページは [[securities/INDEX|securities domain]]、[[securities/japan-market-infrastructure-map|Japan market infrastructure map]]、[[securities/japannext-securities|Japannext]]、[[securities/osaka-digital-exchange|ODX]]、[[securities/tokyo-stock-exchange|Tokyo Stock Exchange]]、および [[securities/financial-instruments-business-operators-japan-index|FIEA 事業者 registry index]] と併せて用いること。

## Source Stack

| Source | What it is good for | Boundary |
|---|---|---|
| JSDA PTS statistics page | Monthly and annual data on trading of exchange-listed securities on PTS venues. | Public statistical route; not a live quote feed or a broker policy. |
| JSDA explanatory PDF | Definitions of exchange-traded, off-exchange, and PTS transactions; data source explanation. | Aggregated from reports by relevant JSDA members. |
| JPX equity statistics | Exchange-side trading value, market capitalization, margin, short-selling, and investor-type context. | Exchange data is not PTS data; compare denominators carefully. |
| Japannext public pages | Venue profile, regulations, session structure, and rules context. | Venue material is not a broker-specific best-execution policy. |
| ODX market information | Daily report, historical data, and Equity PTS / START context. | ODX itself notes that investors transact through accepted securities firms. |
| Broker policy pages | SOR, best execution, included venues, exclusions, fallback route. | Broker disclosure may not provide issue-level realized price-improvement data. |

## Reading The JSDA PTS Statistics

JSDA は、現在その website で公表されている PTS 統計が、以前は PTS Information Network を通じて公表されていたものであり、それが 1, 2025年 7 月に終了したと説明している。その英語の解説 PDF は以下を定義する：

- 取引所取引取引（exchange-traded transactions）を国内金融商品取引所における売買として；
- 取引所外取引（off-exchange transactions）をそれら取引所の外での取引として；
- PTS 取引を、JSDA 会員が行う承認された PTS 運営業務を通じた取引所外取引として；
- データソースを、PTS 運営業務を行う JSDA 会員および取引所外取引に従事する会員によって提出される売買高および売買代金に関する報告として。

これにより、JSDA のページは、一回限りの注文の執行監査のためではなく、**マーケットシェア / 流動性の文脈**のための正しい出発点となる。

## Core Metrics

| Metric | Useful question | Main caveat |
|---|---|---|
| Trading value | Is PTS liquidity economically material in this period? | High aggregate value may be concentrated in liquid large caps. |
| Trading volume | Is there share-count activity, not only yen value? | Low-priced stocks can distort volume comparison. |
| PTS share of total / off-exchange activity | How meaningful is PTS versus exchange and other off-exchange routes? | Denominator choice changes the answer. |
| Issue-level activity | Which securities actually trade on PTS? | Aggregate statistics can hide issue-level thinness. |
| Venue-level split | Is activity concentrated in one PTS? | Venue concentration can affect SOR value. |
| Time-of-day / session | Does after-hours or daytime PTS liquidity matter? | Public monthly statistics may not show intraday depth. |
| Spread / quote quality | Would routing improve price? | Requires quote / best-bid-offer data, not only executed value. |
| Fill probability | Can the order execute at useful size? | Hard to infer from monthly totals alone. |

## Analyst Workflow

1. 問いから始める：市場構造、ブローカー執行、発行体流動性、または取引戦略との関連性。
2. 合計 / 月次 / 年次の PTS の文脈には JSDA PTS 統計を用いる。
3. 取引所側の分母および市場全体の文脈を理解するには JPX 統計を用いる。
4. ルール、セッション構造、利用可能な市場データには取引の場のページを用いる。
5. 顧客がその取引の場にアクセスできるかどうかを判断するには、ブローカーの最良執行 / SOR 方針ページを用いる。
6. 特定の銘柄については、気配、スプレッド、注文サイズ、ブローカーのルーティングデータが裏付けない限り、価格改善のみで記録する。
7. ブローカーに関するいかなる結論も、PTS 統計をそれ自体で証拠として扱うのではなく、[[securities/japan-best-execution-sor-pts|best execution / SOR / PTS]] へと関連づけること。

## PTS Data Interpretation

| Interpretation | Good use | Bad use |
|---|---|---|
| "PTS share rose" | Ask whether alternative venue liquidity is becoming more relevant to brokers and SOR. | Claim every retail order gets better execution. |
| "PTS activity is concentrated" | Identify which securities and venues deserve deeper execution analysis. | Generalize liquidity to the full TSE universe. |
| "ODX / Japannext publish venue data" | Compare venue availability and session structure. | Treat venue marketing as independent execution-quality proof. |
| "Exchange volume dominates" | Explain why exchange liquidity remains the reference market. | Ignore PTS price improvement in specific large / liquid names. |
| "Monthly statistics are available" | Build trend charts and periodic reviews. | Use monthly aggregate data to audit a single order. |

## JapanFG Relevance

- [[securities-firms/sbi-securities|SBI Securities]] および [[securities-firms/rakuten-securities|Rakuten Securities]] は、SOR と PTS アクセスがリテールのバリュープロポジションの一部であるかを問う際に読むべき中核的なオンラインブローカーである。
- [[securities-firms/mufg-esmart-securities|MUFG eSmart Securities]] および [[securities-firms/paypay-securities|PayPay Securities]] が重要なのは、アプリ / エコシステム型の証券業がルートの複雑性を隠しつつ UX を簡素化しうるためである。
- [[securities-firms/nomura-hd|Nomura]]、[[securities-firms/daiwa-sg|Daiwa Securities Group]]、[[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/mizuho-securities|Mizuho Securities]]、および [[securities-firms/mufg-mums|MUMSS]] は機関投資家向けおよびフルサービスの執行にとって重要だが、ブローカー方針の証拠は依然としてエンティティごとに確認しなければならない。

## Caveats

- PTS 統計はライブの統合テープではない。
- PTS 執行は合計シェアが小さくても有用でありうるが、それは特定の注文、銘柄、時間帯に限られる。
- 執行品質分析にとっては、ヘッドラインの売買代金よりもスプレッド / 板の厚み / 約定データの方が重要である。
- ブローカーの SOR 組入れは、商品タイプ、注文タイプ、NISA、信用、単元未満株にわたって普遍的ではない。
- セキュリティトークン PTS の活動は、通常の現物株流動性分析に混ぜ込むのではなく、[[securities/osaka-digital-exchange|ODX]] および関連するトークン化証券のページへとルーティングされる。

## Related

- [[securities/INDEX]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japannext-securities]]
- [[securities/osaka-digital-exchange]]
- [[securities/tokyo-stock-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities-firms/sbi-securities]]
- [[securities-firms/rakuten-securities]]
- [[financial-regulators/jsda]]
- [[INDEX|FinWiki index]]

## Sources

- JSDA: PTS trading statistics page.
- JSDA: explanatory PDF for PTS equity statistics.
- JPX: equity statistics pages.
- Japannext: official site and regulations page.
- ODX: daily report and historical data pages.
