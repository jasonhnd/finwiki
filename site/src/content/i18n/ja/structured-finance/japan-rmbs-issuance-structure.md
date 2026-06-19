---
source: structured-finance/japan-rmbs-issuance-structure
source_hash: 32452d89f45d5fad
lang: ja
status: machine
fidelity: ok
title: "日本の RMBS 発行ストラクチャー"
translated_at: 2026-06-19T12:43:19.896Z
---

# 日本の RMBS 発行ストラクチャー

## TL;DR

日本のプライベート RMBS は通常、メガバンクが組成した住宅ローンを裏付けとするジャンボ案件である。これらは JHF MBS と並存しつつも区別される。JHF MBS は政府支援型で、フラット 35  の固定金利ローンを裏付けとするのに対し、プライベート RMBS はメガバンクの組成で、独自の信用補完とストラクチャーを持つ。シニアクラスは通常、高い投資適格格付けを受け、メザニンおよびエクイティクラスが信用リスクを吸収する。[[structured-finance/INDEX]] におけるプライベート RMBS のストラクチャーレイヤーを理解し、[[structured-finance/jhf-mbs-mechanics]] と対比するためにこのページを用いること。

## Wiki route

| You want | Go to |
|---|---|
| JHF MBS engine | [[structured-finance/jhf-mbs-mechanics]] |
| JHF vs private spread | [[structured-finance/jhf-mbs-vs-private-rmbs-spread]] |
| Trust beneficial interest vs SPV | [[structured-finance/japan-trust-beneficial-interest-vs-spv]] |
| Market overview | [[structured-finance/japan-abs-market-overview]] |
| Rating methodology | [[structured-finance/credit-rating-methodology-jcr-r-and-i]] |

## 1. オリジネーター

| Originator | Typical product |
|---|---|
| [[megabanks/mufg]] / Mitsubishi UFJ Bank | Variable-rate mortgages, jumbo pools |
| [[megabanks/smfg]] / Sumitomo Mitsui Banking Corporation | Variable-rate mortgages |
| [[megabanks/mizuho-fg]] / Mizuho Bank | Mixed-rate mortgages |
| Trust banks (Mitsubishi UFJ Trust, [[trust-banks/sumitomo-mitsui-trust]], Mizuho Trust) | Long-tenor fixed-rate mortgages |
| Regional banks (occasional) | Smaller, regional-pool deals |

メガバンクがプライベート RMBS 発行を支配しているのは、ジャンボ証券化を経済的に成立させるのに十分な大きさの住宅ローンポートフォリオを保有しているためである。

## 2. JHF MBS との比較

| Dimension | JHF MBS | Private RMBS |
|---|---|---|
| Originator | Private banks → JHF buys via securitization support | Private banks (megabanks) |
| Government support | Yes — senior class government-supported via JHF | No — senior class privately-credit-enhanced |
| Underlying product | Flat 35 (long-tenor fixed-rate) | Variable-rate or mixed-rate jumbo mortgages |
| Issuance cadence | Monthly | Intermittent, programmatic |
| Senior-class rating | Top-tier (effectively sovereign-linked) | AAA-AA via credit enhancement |
| Spread vs JGB | Tight (~10-30bp typical) | Wider (~50-100bp typical for senior) |
| Investor base | Lifers, regional banks, asset managers, public-credit investors | Lifers, asset managers, foreign investors at the senior class |

スプレッドのエコノミクスについては [[structured-finance/jhf-mbs-vs-private-rmbs-spread]] を参照。

## 3. ストラクチャー — 典型的なトランチング

| Tranche | Purpose |
|---|---|
| Senior | AAA / AA target; bulk of issuance; sold to lifers and asset managers |
| Mezzanine | Single-A or BBB target; smaller; sold to spread investors |
| Subordinated / equity | First-loss; often retained by originator |

トランチングは、劣後構造（キャッシュフローはまずシニアに、次にメザニン、最後にエクイティへ支払われる）と、以下に述べる追加的な信用補完によって達成される。

## 4. 信用補完

| Mechanism | Purpose |
|---|---|
| Subordination | Junior tranches absorb losses before senior. |
| Overcollateralization (OC) | Collateral pool exceeds bond face value; excess absorbs losses. |
| Excess spread | Coupon on collateral exceeds bond coupon + servicing fee; trapped if performance deteriorates. |
| Cash reserve / liquidity facility | Backup for shortfalls; sized to cover months of interest. |
| Servicer advance | Servicer advances delinquent payments to bondholders. |

プライベート RMBS のストラクチャーは、劣後構造に加えて超過担保に大きく依存する。準備金口座はシニアクラスにとって一般的である。

## 5. 期限前返済モデリング

| Driver | Effect |
|---|---|
| Refinancing waves | Falling rates trigger refinance; mortgages prepay, shortens bond duration. |
| Move / sale | Borrower sells house; prepays at par. |
| Default / foreclosure | Treated as prepayment for cash-flow purposes; losses absorbed by junior. |
| Curtailment | Partial prepayment reduces principal. |

日本の期限前返済行動は歴史的に米国 RMBS より緩やかである。日本の住宅ローン借換えはより摩擦が大きい（組成コスト、期限前返済手数料の仕組み、勤務先連動の福利厚生）ためである。格付機関の前提は通常、JCR / R&I の基準にキャリブレートされた保守的な期限前返済モデルを用いる。

## 6. ビークルの選択

日本のプライベート RMBS は、信託受益権ストラクチャーを用いることが最も多い。オリジネーターが住宅ローンプールを信託（受託者として [[trust-banks/sumitomo-mitsui-trust]] または別の信託銀行）に譲渡し、信託がトランチ化された信託受益権を投資家に発行する。信託と SPV のトレードオフについては [[structured-finance/japan-trust-beneficial-interest-vs-spv]] を参照。

一部の案件では、代わりに資産流動化法に基づく TMK（特定目的会社）を用いる。TMK ルートは正式な上場債の発行を可能にし、信託受益権ルートは通常私募である。[[structured-finance/spv-tk-gk-vehicle-japan-tax]] を参照。

## 7. サービシング

- オリジネーターは通常サービシング（ローン回収、顧客対応）を保持する。
- バックアップサービサーがシニアクラスのために指名され、オリジネーターが破綻した場合に発動される。
- サービサー・アドバンスは標準的である。オリジネーターは、回収可能性の限度まで、延滞ローンの予定返済を立て替える。

## 8. 投資家ベース

| Class | Investor | Why |
|---|---|---|
| Senior | Lifers, megabank ALM books, asset managers, foreign-investor accounts | JGB-plus yield with AAA-AA collateral |
| Mezz | Spread investors, hedge funds, certain pension funds | Yield pickup |
| Equity | Originator retention | Risk-retention compliance + economics |

日本は米国／EU の制度に類似したリスク・リテンション要件を一部維持している。通常、純経済的エクスポージャーの 5% がオリジネーターによって保有される。

## Related

- [[structured-finance/INDEX]]
- [[structured-finance/jhf-mbs-mechanics]]
- [[structured-finance/jhf-mbs-vs-private-rmbs-spread]]
- [[structured-finance/japan-trust-beneficial-interest-vs-spv]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[policy-finance/japan-housing-finance-agency]]
- [[real-estate-finance/INDEX]]
- [[banking/INDEX]]

## Sources

- JCR (Japan Credit Rating Agency), RMBS structured-finance criteria.
- R&I (Rating and Investment Information), RMBS methodology.
- Japan Housing Finance Agency, IR pages.
- JSDA (Japan Securities Dealers Association).
- Megabank IR (MUFG, SMFG, Mizuho FG).
