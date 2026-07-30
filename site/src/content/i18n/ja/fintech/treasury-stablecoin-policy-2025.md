---
source: fintech/treasury-stablecoin-policy-2025
source_hash: b5990b188957f40d
lang: ja
model: manual-issue-239-provenance-repair
status: machine
fidelity: ok
title: "2025 GENIUS Act 後の米国ステーブルコイン政策"
translated_at: 2026-07-29T17:18:53.188Z
---
# 2025 GENIUS Act 後の米国ステーブルコイン政策

## TL;DR

**GENIUS Act（Public Law 119-27）**は **July 18, 2025** に成立した。許可された payment-stablecoin 発行会社の連邦・州 framework を設け、法定リストに含まれる識別可能な準備資産を少なくとも 1:1 で保有すること、償還方針の公開と準備資産の月次報告を求め、州制度と外国制度の route を定める。ただし、法律自体が T+1 償還、全社共通の固定資本 floor、預金保険を約束するわけではない。**July 30, 2026** 時点で、OCC の主要な実施規則と、その後の AML/CFT および顧客識別規則はなお **notice of proposed rulemaking（NPR）** として掲載されていたため、提案を最終規則や付与済み charter と表現してはならない。^[Law and status: https://www.congress.gov/bill/119th-congress/senate-bill/1582; enacted text: https://www.congress.gov/bill/119th-congress/senate-bill/1582/text; OCC proposal: https://www.occ.treas.gov/news-issuances/news-releases/2026/nr-occ-2026-9.html; OCC 2026 proposed-issuances list: https://www.occ.treas.gov/topics/laws-and-regulations/occ-regulations/proposed-issuances/occ-proposed-issuances-2026.html]

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|フィンテック索引]] の配下にあり、[[fintech/regulatory-reset-2025-usa-crypto-policy|米国の 2025 規制 reset]] に対応する米国の法律・規則制定ページである。[[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust-bank charter]]、[[fintech/genius-act-501-denylist-mandate|GENIUS Act の実施状況]]、[[fintech/genius-act-501-actual-implementation|GENIUS Act 成立法本文の実施状況]] とあわせて読む。国際比較は [[fintech/mica-overview|EU MiCA]] と [[fintech/global-stablecoin-regulatory-five-pole-matrix|五極 matrix]] を参照。

## 成立済みの内容と未成立の内容

権威ある基準は政策予測ではなく、成立した条文である。Congress.gov は S.1582 を Public Law 119-27, と記録し、White House は July 18, 2025 の署名を記録している。法律は framework を定め、実施の詳細を連邦・州の規制当局に委ねる。February 25, 2026, OCC は **proposal** を公表し意見を募集したと説明した。OCC の 2026 index は、March 2 の中核規則、June 22 の顧客識別規則、June 24 の AML/CFT・sanctions risk management 規則を引き続き NPR と表示している。^[https://www.congress.gov/bill/119th-congress/senate-bill/1582; https://www.whitehouse.gov/briefings-statements/2025/07/the-president-signed-into-law-s-1582/; https://www.occ.treas.gov/news-issuances/news-releases/2026/nr-occ-2026-9.html; https://www.occ.treas.gov/topics/laws-and-regulations/occ-regulations/proposed-issuances/occ-proposed-issuances-2026.html]

下表は、成立済みの要件と、確認日時点で提案段階または根拠のない主張を分ける。Sources: https://www.congress.gov/bill/119th-congress/senate-bill/1582/text and https://www.occ.treas.gov/topics/laws-and-regulations/occ-regulations/proposed-issuances/occ-proposed-issuances-2026.html.

| 論点 | 証拠で裏付けられる状態 |
|---|---|
| GENIUS Act | July 18, 2025 に Public Law 119-27 として成立 |
| OCC の中核実施規則 | NPR は March 2, 2026; ここでは最終規則として扱わない |
| AML/CFT・sanctions risk management 規則 | NPR は June 24, 2026 に開始 |
| 顧客識別規則 | NPR は June 22, 2026 に開始 |
| T+1 償還保証 | 成立条文 section 4 の償還規定には記載なし |
| 全社共通の固定資本 floor | 記載なし；規制当局は発行会社の事業モデルとリスクに応じて資本規則を調整する必要がある |

## 連邦・州の二重 route architecture

法律は、insured depository institution の子会社、連邦 qualified nonbank payment-stablecoin issuer、州 qualified payment-stablecoin issuer という三つの発行会社区分を認める。州制度が連邦 framework と substantially similar であれば、連結発行残高が **$10 billion 以下**のときに州 route を利用できる。$10 billion を超えると移行または発行停止条項が作動するが、法律は waiver も設け、移行が連邦 charter への転換を必要としないことも明記している。^[Congress.gov summary: https://www.congress.gov/bill/119th-congress/senate-bill/1582; enacted sections 4 and 5: https://www.congress.gov/bill/119th-congress/senate-bill/1582/text]

下表は、charter 種別や資本額を作り出すことなく、法定区分を要約する。Source: https://www.congress.gov/bill/119th-congress/senate-bill/1582/text.

| 発行会社区分 | 主な route | 主要な境界 |
|---|---|---|
| Insured-depository-institution の子会社 | 適用ある primary federal regulator による承認・監督 | 銀行規制の範囲に加え、法定 payment-stablecoin framework の下で運営 |
| 連邦 qualified nonbank issuer | OCC による承認と排他的な連邦監督 | 資本、流動性、risk 規則は法定制限内で規制当局が定義 |
| 州 qualified issuer | Substantially similar と認証された州制度 | 州 route は通常 $10B 以下に適用；threshold 超では移行、発行停止、waiver 条項が適用 |

Treasury の法定役割には、州制度が substantially similar かどうかを判断する広範な原則の策定が含まれる。その後、Stablecoin Certification Review Committee が州の認証を審査する。これは Treasury が全発行会社へ直接 charter を付与することとは異なる。

## 準備資産の構成 · T-bill 要件と理由

Section 4 は識別可能な準備資産を **少なくとも 1:1 の basis** で保有することを求める。93-day 制限は許可リスト内の Treasury securities と特定の repo 構造に適用されるもので、全許可資産の略記ではない。このページの旧版と異なり、要件を満たす登録 government money-market-fund securities と、一定の要件を満たす tokenized reserve assets も含まれる。^[Enacted section 4: https://www.congress.gov/bill/119th-congress/senate-bill/1582/text]

下表は成立条文の準備資産区分を言い換えたものである。https://www.congress.gov/bill/119th-congress/senate-bill/1582/text にある完全な法定条件とあわせて読む必要がある。

| 法定準備資産区分 | Section 4 の主な条件 |
|---|---|
| 米国の coin・currency、または Federal Reserve Bank の資金 | 少なくとも 1:1 の識別可能な裏付け |
| Demand deposit または要求払い可能なその他の deposit；insured share | 規制当局の safety-and-soundness 制限に従う |
| Treasury bill、note、bond | 残存満期が 93 days 以下、または発行時満期が 93 days 以下 |
| 特定の repo と reverse repo | Overnight 構造と法定の collateral / counterparty 条件 |
| 登録 government money-market-fund securities | 許可された基礎区分だけに投資するファンド |
| 同様に流動性の高いその他の federal-government assets | Primary federal regulator の承認。該当時は州規制当局と協議 |
| 指定された許可資産の tokenized form | 適用法令に従う必要 |

法律は原則として準備資産の pledge、rehypothecation、reuse を禁止する。例外は section 4（狭く限定されたもの）に記載されている。また規制当局に、調整された資本、流動性、準備資産分散、operational resilience、risk management の要件を実施するよう指示する。旧版が主張した全社共通の $50 million 資本 floor、三つの counterparty 最低要件、5% 流動性 buffer、stress-test 比率は設定していない。

## 償還と開示 · Section 4 が実際に定めること

Section 4 は発行会社に、**timely redemption** の明確な手続を公開し、購入・償還 fee をすべて平易な言葉で開示するよう求める。Fee の変更には少なくとも seven days の事前通知が必要である。また、発行残高と準備資産の金額、構成、平均 tenor、custody geography の月次公表、登録 public accounting firm による月次 examination、CEO/CFO certification を求める。ここで確認した成立条文は、全社共通の T+1 settlement deadline や、旧版にあった例示的な最低償還額を定めて**いない**。^[https://www.congress.gov/bill/119th-congress/senate-bill/1582/text]

下表は法定条文と、後の最終規則または発行会社方針を必要とする主張を分ける。Source: https://www.congress.gov/bill/119th-congress/senate-bill/1582/text.

| 項目 | 成立条文の基準 |
|---|---|
| 償還手続 | 明確で目立ち、timely であること |
| 償還 fee | 開示が必要；変更には少なくとも seven days の通知が必要 |
| 準備資産開示 | 平均 tenor と custody geography を含む月次の金額・構成 |
| 独立 review | 登録 public accounting firm による月次 examination |
| 経営者 certification | 適用ある規制当局への月次 CEO/CFO certification |
| T+1 deadline または固定最低償還額 | 確認した法定条文には規定なし |

Payment stablecoin は、GENIUS Act に従うだけで米国政府の保証を受けるものではなく、連邦 deposit insurance または share insurance の対象にもならない。法律は反対の表示を違法とする。「1:1 reserves」を解釈する際にはこの区別が重要であり、資産の裏付けは連邦保証と同じではない。

## Treasury、OCC、その他の規制当局 · 異なる役割

法律は単一の「Treasury charter」を設けず、異なる役割を割り当てる。Treasury は州制度の comparability 原則を策定し、外国制度の comparability determination を行い、reciprocal arrangement に取り組み、指定された illicit-finance と non-payment-stablecoin の作業を行う。OCC は連邦 qualified nonbank issuer を監督し、法律に基づく外国発行会社登録を扱う。適切な federal banking regulator は insured depository institution の発行子会社を監督し、認証された州制度は federal framework と移行規則に従って州 qualified issuer を監督する。^[https://www.congress.gov/bill/119th-congress/senate-bill/1582/text]

下表は成立条文に基づく役割地図であり、承認済み発行会社の一覧ではない。Source: https://www.congress.gov/bill/119th-congress/senate-bill/1582/text.

| 機関 | この項目に関係する役割 |
|---|---|
| Treasury Secretary | 州 comparability 原則；外国制度の determination と reciprocity；指定された rulemaking と調査 |
| OCC | 連邦 qualified nonbank issuer の承認 / 監督；外国発行会社登録；OCC 実施規則 |
| Federal banking regulators | 既存の銀行規制範囲における発行子会社の監督；法定実施 |
| 州規制当局と certification committee | Substantial-similarity framework の下での州制度の認証、監督、review |

## 外国発行会社 · 推定 MRA ではなく comparability

外国発行会社の例外には、home regime が comparable であるという Treasury determination、OCC 登録、reciprocal arrangement が別途認めない限り米国顧客の流動性向けに米国内で十分な準備資産を保有することなどが必要である。Treasury は comparability determination を行った国の現行一覧を公開し、agreement は発効前に公開しなければならない。したがってこのページは、対応する公式 determination または公開 arrangement がなければ、EU、UK、日本、香港、Singapore、その他の法域との協議を締結済み mutual-recognition agreement と表現しない。^[https://www.congress.gov/bill/119th-congress/senate-bill/1582/text]

## 発効日と規則制定の状態

GENIUS Act は、**成立後 18 months** または **primary federal regulator が最終実施規則を発行してから 120 days** のうち早い日に発効する。法律は原則として、各 primary federal regulator、Treasury、各州規制当局に、成立から one year 以内に実施規則を公布するよう求める。これらの規定により、成立済み法律、NPR、最終規則の区別は運用上重要である。^[https://www.congress.gov/bill/119th-congress/senate-bill/1582/text]

確認日は July 30, 2026。下表は公式ページで裏付けられる日付付き event だけを記録する。Sources: https://www.congress.gov/bill/119th-congress/senate-bill/1582, https://www.occ.treas.gov/news-issuances/news-releases/2026/nr-occ-2026-9.html and https://www.occ.treas.gov/topics/laws-and-regulations/occ-regulations/proposed-issuances/occ-proposed-issuances-2026.html.

| 日付 | 証拠で裏付けられる event |
|---|---|
| 2025-07-18 | S.1582 が Public Law 119-27 となった |
| 2026-02-25 | OCC が中核実施規則の提案を発表 |
| 2026-03-02 | OCC の中核 NPR が開始；comment は May 1 に締切 |
| 2026-06-22 | Customer-identification-program NPR が開始 |
| 2026-06-24 | AML/CFT・sanctions risk management NPR が開始 |
| 2026-07-30 review | 引用した OCC index は、これら三つをなお proposed issuance と分類 |

周辺の政策環境は [[fintech/regulatory-reset-2025-usa-crypto-policy|米国の 2025 規制 reset]] を参照。準備資産需要の economics は、出典のない市場規模予測を法定政策として扱わず、別途出典を付した [[fintech/circular-reserve-asset-flywheel-overview|循環型 reserve flywheel]] を参照する。

## 関連項目

- [[fintech/INDEX|フィンテック索引]]
- [[fintech/regulatory-reset-2025-usa-crypto-policy|米国の 2025 規制 reset]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act の実施状況]]
- [[fintech/genius-act-501-actual-implementation|GENIUS Act 成立法本文の実施状況]]
- [[fintech/occ-bank-charter-crypto-2025|暗号資産向け OCC national bank charter 2025]]
- [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust-bank charter]]
- [[fintech/cftc-sec-crypto-jurisdiction|CFTC と SEC の管轄]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|五極 matrix]]
- [[fintech/mica-overview|EU MiCA 概要]]
- [[fintech/mica-cross-border-implications|MiCA cross-border]]
- [[fintech/three-circles-stablecoin-mra-framework|米国・EU・日本のステーブルコイン市場アクセス比較]]
- [[fintech/circular-reserve-asset-flywheel-overview|循環型 reserve flywheel]]
- [[fintech/circular-reserve-asset-flywheel-risk-cases|循環型 reserve の risk case]]
- [[fintech/tether-business-model-short-treasury-yield|Tether 事業モデル]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[business/larry-fink-blackrock-digital-asset-template|Larry Fink template]]
- [[exchanges/us-crypto-licensing-multi-layer-system|米国暗号資産 licensing の多層構造]]

## Sources

- Congress.gov — S.1582 の状態と CRS 要約: https://www.congress.gov/bill/119th-congress/senate-bill/1582
- Congress.gov — 成立済み法定条文: https://www.congress.gov/bill/119th-congress/senate-bill/1582/text
- Congressional Research Service — S.1582：概要: https://www.congress.gov/crs-product/IN12553
- White House — 署名 notice、July 18, 2025: https://www.whitehouse.gov/briefings-statements/2025/07/the-president-signed-into-law-s-1582/
- OCC — February 25, 2026 の proposal 発表: https://www.occ.treas.gov/news-issuances/news-releases/2026/nr-occ-2026-9.html
- OCC — 2026 proposed-issuances index: https://www.occ.treas.gov/topics/laws-and-regulations/occ-regulations/proposed-issuances/occ-proposed-issuances-2026.html
