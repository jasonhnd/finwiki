---
source: fintech/erupee-india-pilot-status
source_hash: 377ba09f824c3086
lang: ja
model: manual-issue-239-provenance-repair
status: machine
fidelity: ok
title: "eRupee インド pilot status 2026 — retail・wholesale の二本立て、UPI 相互運用、programmable-money use case"
translated_at: 2026-07-29T17:58:52.645Z
---
# eRupee インド pilot status 2026 — retail・wholesale の二本立て、UPI 相互運用、programmable-money use case

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|フィンテック索引]] の配下にあり、2026 の pilot 拡張段階にあるインドの eRupee（Digital Rupee、e₹）を国別に詳しく扱う。四か国比較は [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]、インドの広範な digital-payment-stack geopolitics は [[fintech/india-anti-dollar-dpi-alliance|インド反ドル DPI alliance]]、architecture の文脈は [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層 architecture 概要]] とあわせて読む。Architecture の比較対象は [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC の三つの現役 paradigm]]、cross-border wholesale の文脈は [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] と [[fintech/bis-project-agora-overview|BIS Project Agorá]] を参照。

> [!info] TL;DR
> 2026-07 の確認時点で、eRupee は RBI の **二つの pilot track**、すなわち開始日が 2022-11, の **e₹-W** と、開始日が 2022-12。こちらの **e₹-R** で運用されている。2026-04-29 更新の RBI FAQ は wholesale の bank・non-bank participant を **16 participants**、retail bank を **19 banks** とし、参加する non-bank wallet provider も記載している。継続中の wholesale use case は三つで、国債流通市場取引の資金決済、call-money market の銀行間貸借決済、譲渡性預金証書の tokenised issuance・settlement である。e₹ wallet は UPI merchant QR を scan でき、その payment は UPI settlement timeline に従う。RBI FAQ と 2024-25 Annual Report は、programmable retail pilot、telecom-assisted・NFC offline exploration、cross-border roadmap の協議を説明する一方、現行の全国 active-user 数、aggregate transaction volume、全国 offline launch、稼働中の cross-border CBDC corridor は示していない。

## Programme architecture

```
                       RBI Digital Rupee Programme
                                  │
              ┌───────────────────┴────────────────────┐
              ▼                                        ▼
         e₹-Wholesale                              e₹-Retail
        (CBDC-W, 2022-11)                       (CBDC-R, 2022-12)
              │                                        │
   参加: 16 banks /                       参加: 19 banks
         non-banks                         + non-bank wallets
   用途: 3 ongoing cases:                 用途: P2P, P2M, gov transfer
         G-sec, call money,                     (pilot)
         tokenised CD issuance /
         settlement
              │                                        │
   Settlement: T+0 atomic                  Wallet: bank app
   on RBI ledger                          Tokens: ₹0.50, ₹1, ₹2, ₹5,
                                          ₹10, ₹20, ₹50, ₹100, ₹200,
                                          ₹500, ₹2000 denominations
              │                                        │
   Cross-border: exploratory               UPI QR scan supported
   in cited RBI sources                    (UPI settlement timeline)
```

二つの track の開始時期は 2022-11 と 2022-12。現行 RBI FAQ は e₹-W の継続中 use case を三つ記載する。国債流通市場取引の資金決済、call-money market の銀行間貸借決済、譲渡性預金証書の tokenised issuance・settlement である。RBI の公開資料は e₹-R の P2P / P2M payment・選定 programmable use case も説明する。二層 route（RBI → 参加機関 → user）は、開始理由、技術的安定性、相対的な採用深度を推定せず、[[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC architecture の 4 中核 trade-off]] を通じて他の intermediated CBDC design と比較できる。

## Matrix A · Track 別 status（最新公開情報）

下表は 2026-04-29 更新の RBI [Digital Rupee FAQ](https://www.rbi.org.in/scripts/FAQView.aspx/upload/FAQView.aspx?Id=169) と [2024-25 Annual Report](https://www.rbi.org.in/scripts/AnnualReportPublications.aspx?Id=1436) に基づき、2026-07-30 に確認した。数は古い launch cohort から推定せず、現行 FAQ の記載を使う。

| Track | Programme 名 | 開始 | 公開 status | Participant / scope |
|---|---|---|---|---|
| Wholesale | e₹-W（CBDC-W） | 2022-11 | 継続中 use case は三つ。国債流通市場決済、inter-bank call-money settlement、譲渡性預金証書の tokenised issuance / settlement | 2026-04-29 更新の RBI FAQ に記載された 16 の bank・non-bank participant |
| Retail | e₹-R（CBDC-R） | 2022-12 | Bank・non-bank wallet を通じた pilot P2P・P2M payment | 2026-04-29 更新の RBI FAQ に記載された 19 の bank と、参加する non-bank wallet provider |
| Programmable | e₹-R wallet を通じた条件付き利用 | Pilot 拡張 | RBI は DBT、farmer-credit、carbon-credit、employee-allowance の use case を報告 | 選定 sponsor、bank、beneficiary |
| Offline | 接続制限下の payment solution | 実験段階 | Telecom-assisted・NFC approach を検討中；全国 offline launch ではない | RBI と pilot participant |
| Cross-border | 二国間 / 多国間の検討 | 稼働中の retail corridor は未開示 | RBI は一部の国との roadmap・技術協議を報告 | 検討段階 |

証拠で裏付けられる比較は、二つの pilot track と公開済み use case に限られる。RBI 資料は、固有の世界順位や、一方の track が他方を検証するために開始されたことを示していない。各法域の記録は [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]] と [[fintech/e-euro-retail-rollout|digital euro retail project]] を参照。

## Matrix B · 採用指標（最新公開情報）

下表は引用した RBI 資料にある数値だけを報告し、bank の marketing disclosure を非公式な全国 total に合算しない。Sources: [RBI FAQ](https://www.rbi.org.in/scripts/FAQView.aspx/upload/FAQView.aspx?Id=169) and [RBI Annual Report 2024-25](https://www.rbi.org.in/scripts/AnnualReportPublications.aspx?Id=1436).

| 指標 | 最新公開値 | Source |
|---|---|---|
| e₹-R の現行 user | 引用した RBI FAQ / Annual Report に現行の全国 active-user total なし | RBI FAQ；RBI Annual Report 2024-25 |
| e₹-R の累積 transaction value | 引用資料に現行の全国 aggregate なし | RBI FAQ；RBI Annual Report 2024-25 |
| 参加 bank（retail） | 19 | RBI FAQ、2026-04-29 更新 |
| Wholesale participant | 16 の bank・non-bank | RBI FAQ、2026-04-29 更新 |
| 継続中の wholesale use case | 3: 国債流通市場決済；call-money settlement；譲渡性預金証書の tokenised issuance / settlement | RBI FAQ、2026-04-29 更新 |
| UPI QR 相互運用 | e₹ wallet は UPI QR を scan でき、payment は UPI settlement timeline に従う | RBI FAQ |
| Programmability | 複数 pilot；Odisha の Subhadra Yojana は報告日時点で約 88,000 の beneficiary に e₹ を使用 | RBI Annual Report 2024-25 |
| Offline test | Telecom-assisted・NFC solution を検討中 | RBI FAQ |

引用した RBI FAQ と Annual Report は、e₹-R の現行全国 active-user または aggregate transaction-volume series を示していない。古い wallet registration 数や bank marketing disclosure をその代わりに使うべきではない。公開記録は複数の pilot use case を裏付けるが、adoption slowdown、strategic pivot、UPI との因果比較を単独では確立しない。別途出典を付した DPI の文脈は [[fintech/india-anti-dollar-dpi-alliance|インド反ドル DPI alliance]] を参照。

## Matrix C · Architecture と design choice

Design table の出典は [RBI CBDC Concept Note](https://www.rbi.org.in/Scripts/PublicationReportDetails.aspx?ID=1218) と [Digital Rupee FAQ](https://www.rbi.org.in/scripts/FAQView.aspx/upload/FAQView.aspx?Id=169) である。Product-app limit は異なる可能性があり、法定 cap と扱うべきではない。

| Design choice | 内容 | 公開済みの境界 / function |
|---|---|---|
| Two-tier | RBI → 参加機関 → user | RBI が CBDC を発行し、intermediary が wallet・user-facing service を提供 |
| Token-based（額面別 digital token） | e₹-R は通常の currency denomination（₹0.50 から ₹2000）で発行 | RBI は currency の digital form と説明 |
| QR bridge 経由の UPI 相互運用 | eRupee wallet は UPI merchant QR を scan でき、RBI FAQ は payment が UPI settlement timeline を使うと記載 | 既存 acceptance network を利用 |
| Programmable money pilot | 選定 DBT、farmer-credit、carbon-credit、employee-allowance case の条件付き利用 | Pilot scope のみ；一般的な programmable-money rollout ではない |
| Offline CBDC test | Telecom-assisted・NFC approach を検討中 | 実験段階；全国 offline launch ではない |
| Retail wallet は無利息 | e₹-R balance の利息は zero | 引用資料は app setting を法定 rule にしない |
| 公開済み hard holding cap なし | Product-app limit は異なる可能性 | App limit を法定 cap と扱うべきではない |
| Wholesale RBI ledger | 継続中 use case は三つ。secondary-market G-sec settlement、call-money settlement、譲渡性預金証書の tokenised issuance / settlement | 2026-04-29 更新の RBI FAQ に記載された pilot scope |

RBI FAQ は **QR scan による UPI 相互運用**を確認している。e₹ wallet は UPI merchant QR を scan でき、その payment は UPI settlement timeline に従う。これは payment path を裏付けるが、国際順位、採用への影響、user が一方の rail を選ぶ理由までは裏付けない。

## Matrix D · Use case と pilot tranche

下表の use-case status は [RBI FAQ](https://www.rbi.org.in/scripts/FAQView.aspx/upload/FAQView.aspx?Id=169) と [RBI Annual Report 2024-25](https://www.rbi.org.in/scripts/AnnualReportPublications.aspx?Id=1436) に基づく（2026-07-30 確認）。

| Use case | 公開 status | 注記 |
|---|---|---|
| P2P / P2M retail payment | Pilot 稼働 | Bank・non-bank e₹ wallet；CBDC・UPI merchant QR 対応 |
| Programmable DBT / allowance | 複数 pilot | Farmer 関連 pilot、employee allowance、Odisha の Subhadra Yojana を含む |
| Inter-bank G-sec settlement | 2022-11 から wholesale pilot 稼働 | FAQ が挙げる三つの継続 wholesale use case の一つ |
| Call-money settlement | Wholesale pilot | FAQ が挙げる二番目の継続 wholesale use case |
| Tokenised certificates of deposit | Wholesale pilot | 三番目の継続 use case。譲渡性預金証書の tokenised issuance・settlement |
| Cross-border CBDC settlement | 検討中 | RBI は二国間 roadmap・多国間 initiative の作業を報告；引用資料に live corridor なし |
| Offline payment | 実験段階 | Telecom-assisted・NFC approach を検討中 |

引用資料が確立するのは、記載された pilot use case だけである。Cross-track interoperability timetable、unified-stack timetable、retail volume からの strategic shift は記録していない。

## UPI の規模との比較

UPI 列は [NPCI の May 2026 product statistics](https://www.npci.org.in/product/upi/product-statistics)、e₹ 列は RBI 資料を用い、未公開 aggregate は推定せず空白として扱う。

| 指標 | UPI（May 2026） | eRupee retail |
|---|---|---|
| 月間 transaction | 23.20193 billion | 引用した RBI 資料に現行の全国 monthly aggregate なし |
| 月間 value | ₹29.9042421 trillion | 引用した RBI 資料に現行の全国 monthly aggregate なし |
| 国内 scope | 全国 UPI network | Retail pilot |
| Wallet / user base | ここでは比較しない；NPCI transaction statistics は active-user count ではない | 引用した RBI 資料に現行の全国 active-user count なし |
| Merchant acceptance | UPI QR network | CBDC QR と、e₹ wallet が UPI merchant QR を scan する機能 |
| Cross-border | 別個の UPI linkage programme | 引用した RBI 資料では CBDC cross-border work は検討段階 |
| 基礎 money | VPA 経由の commercial-bank money | Central-bank money |
| Programmability | Native ではない | Pilot で programmable |

この表が規模比較を裏付けるのは、公開済み NPCI UPI transaction series だけである。引用した RBI 資料には e₹ の現行 active-user と全国 aggregate-volume series がないため、定量的 adoption gap、採用の因果説明、programmability・offline capability・cross-border work が利用を促すという予測は裏付けられない。

インドの広範な digital-stack story（UPI + MOSIP + ARC + JioCoin）は [[fintech/india-anti-dollar-dpi-alliance|インド反ドル DPI alliance]] を参照。eRupee は同じ広範な stack に含まれるが、rail substitute ではなく central-bank-money rail である。

## Cross-border と国際連携

下表は RBI が公開した CBDC exploration と稼働中 UPI link を分ける。Sources: [RBI Annual Report 2024-25](https://www.rbi.org.in/scripts/AnnualReportPublications.aspx?Id=1436) and [BIS Project Agorá](https://www.bis.org/about/bisih/topics/fmis/agora.htm).

| Channel | Status | 注記 |
|---|---|---|
| 一部の国との二国間 CBDC work | Roadmap、technical aspect、use case を検討中 | RBI Annual Report は live corridor を特定していない |
| 多国間 CBDC initiative | 参加を検討中 | Participant list なしに特定 project への参加を推定しない |
| BIS Project Agorá | 引用した BIS page の参加 central bank に RBI の記載なし | Project 参加は一般的な BIS membership と異なる |
| 既存 UPI cross-border link | 稼働中 payment-rail link は CBDC と別 | UPI settlement を cross-border e₹ と表現しない |

引用資料が裏付けるのは、検討段階の二国間 / 多国間 CBDC work と、別個の live UPI link だけである。Live e₹ corridor、選択済み bloc strategy、CBDC の指定 extension channel としての UPI は確立しない。

## 起源と展開

```
2017-2020     RBI internal study + IDRBT working group on CBDC
2021-01       RBI Governor public commitment to CBDC pilot
2022          Finance Act 2022 amends RBI Act to enable CBDC issuance
2022-10       RBI Concept Note on CBDC published
2022-11       e₹-W (wholesale) pilot launches (9 banks, secondary G-sec settlement)
2022-12       e₹-R (retail) pilot launches (4 cities first, 4 banks)
2023          Retail pilot expansion + UPI QR interoperability bridge live
2023-2024     Programmable-money pilots begin (agricultural subsidy, welfare)
2024          Offline-CBDC tech tests
2024-2025     RBI reports programmable retail and offline-solution pilots
2025-01       RBI FAQ lists 15 retail banks and 14 wholesale participants
2024-2025     RBI reports G-sec and call-money wholesale use cases
2024-2025     Cross-border roadmaps and technical aspects remain exploratory
2026-04       Current RBI FAQ lists 19 retail banks, 16 wholesale participants,
              and 3 ongoing wholesale use cases, adding tokenised CD issuance / settlement
```

Timeline は開示済み milestone と pilot boundary を記録する。現行 active-user scale、aggregate volume、adoption momentum、比較上の成功、programme pace の原因は確立しない。

## 関連項目

- [[INDEX|ウィキ索引]]
- [[fintech/INDEX|フィンテック索引]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層 architecture 概要]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC の三つの現役 paradigm]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC architecture の 4 中核 trade-off]]
- [[fintech/india-anti-dollar-dpi-alliance|インド反ドル DPI alliance]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS 多 CBDC cross-border settlement bridge]]
- [[fintech/mbridge-bis-multi-cbdc-vs-agora|mBridge vs Agorá]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/bis-project-agora-vs-mbridge|Agorá vs mBridge strategic comparison]]
- [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]]
- [[fintech/bis-project-guardian-overview|MAS Project Guardian]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|世界の stablecoin 五極 matrix]]
- [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]]
- [[fintech/e-euro-retail-rollout|digital euro retail project]]
- [[fintech/central-banking-function-unbundling|central-bank function の五層 unbundling]]

## Sources

- Reserve Bank of India — Central Bank Digital Currency の Concept Note（October 2022）: https://www.rbi.org.in/Scripts/PublicationReportDetails.aspx?ID=1218
- RBI — Wholesale CBDC pilot launch（2022-11-01）: https://www.rbi.org.in/SCRIPTs/BS_PressReleaseDisplay.aspx?prid=54616
- RBI — Retail CBDC pilot launch（2022-12-01）: https://www.rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=54773
- RBI Annual Report 2024-25 — Payment and Settlement Systems chapter: https://www.rbi.org.in/scripts/AnnualReportPublications.aspx?Id=1436
- RBI — Digital Rupee FAQ（updated 2026-04-29）: https://www.rbi.org.in/scripts/FAQView.aspx/upload/FAQView.aspx?Id=169
- NPCI — UPI Product Statistics: https://www.npci.org.in/what-we-do/upi/product-statistics
- BIS Innovation Hub — CBDC topic page: https://www.bis.org/about/bisih/topics/cbdc.htm
- BIS Working Paper No. 1116 —「The next-generation monetary system — a blueprint」
- BIS Project mBridge MVP report と公開資料
- BIS Project Agorá 公開資料: https://www.bis.org/about/bisih/topics/fmis/agora.htm
