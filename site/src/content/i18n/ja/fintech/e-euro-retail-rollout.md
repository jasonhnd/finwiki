---
source: fintech/e-euro-retail-rollout
source_hash: 48d48eac94c02d6b
lang: ja
model: manual-issue-239-provenance-repair
status: machine
fidelity: ok
title: "Digital euro retail project — 現行 phase、2027 beta pilot、条件付き 2029 readiness"
translated_at: 2026-07-29T17:58:52.645Z
---
# Digital euro retail project — 現行 phase、2027 beta pilot、条件付き 2029 readiness

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|フィンテック索引]] の配下にあり、ECB digital euro の 2026-07 現行 phase snapshot を法域別に詳しく扱う。四か国比較は [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]、architecture の文脈は [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層 architecture 概要]]、三つの paradigm 分類は [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC の三つの現役 paradigm]] とあわせて読む。法域別の比較対象は [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]] と [[fintech/erupee-india-pilot-status|eRupee India pilot status]]、EU 側に関係する wholesale-CBDC の文脈（BoF / BdF、BdI、Bundesbank が参加）は [[fintech/bis-project-agora-overview|BIS Project Agorá]] を参照。EU のより広い stablecoin 規制は [[fintech/mica-overview|MiCA overview]] と [[fintech/global-stablecoin-regulatory-five-pole-matrix|世界の stablecoin 五極 matrix]] を参照。

> [!info] TL;DR
> 2026-07, 時点で digital euro は Preparation Phase 終了後、**2025-11** に始まった現行 project phase にある。ECB は controlled beta pilot 向けに **36 PSPs** を選定し、**2027** の後半に operation を計画しているが、この pilot は digital euro の発行ではない。ECB は **2029** 中の潜在的な初回発行に向け technical readiness を整えることを目指す。条件は、提案中 EU legislation が 2026 に採択され、その後 ECB Governing Council が別途 decision を行うことである。**発行 decision はなく**、**発行済み retail wallet もなく**、**live digital-euro merchant network もない**。Design work には supervised PSP を通じた intermediated distribution、holding-limit calibration、waterfall / reverse-waterfall function、non-remuneration、online / offline mode が含まれるが、最終的な holding-limit amount は採択されていない。

## Programme architecture

```
                ECB Digital Euro Programme
                          │
       ┌──────────────────┴──────────────────┐
       ▼                                      ▼
   Investigation Phase                  Preparation Phase
   (2021-10 → 2023-10)                  (2023-11 → 2025-10)
       │                                      │
   Design exploration                   Rulebook drafting
   (offline / online                    Technology vendor
   modes, holding cap,                  selection
   intermediated model)                 Manual + provider
                                        testing
       │                                      │
   「Preparation へ進む」               完了；現行 phase は
   recommendation で終了                現行 phase 開始日は 2025-11
   recommendation                       │
                                            │
                                            ▼
                                  Controlled beta pilot
                                  (計画: 2027 H2)
                                            │
                                            ▼
                                  2029 readiness target
                                  (条件付き；発行ではない)
```

## Matrix A · 法令、regulator、phase status

下表は ECB の [current project page](https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html)、[progress record](https://www.ecb.europa.eu/euro/digital_euro/progress/html/index.en.html)、[pilot FAQ](https://www.ecb.europa.eu/euro/digital_euro/pilot/html/ecb.faq-digital-euro-pilot.ga.html) を反映し、2026-07-30 に確認した。

| 項目 | 詳細 |
|---|---|
| 主務 authority | European Central Bank（ECB）Governing Council + ECB Executive Board |
| Legislative basis | European Commission proposal of June 2023；発行にはなお EU Regulation の採択と、その後の ECB Governing Council decision が必要 |
| Investigation Phase | 2021-10 → 2023-10 （終了） |
| Preparation Phase | 2023-11 → 2025-10 （完了） |
| 現行 phase | 開始日は 2025-11；technical readiness、market engagement、legislative support に注力 |
| Beta pilot | Preparation 開始は 2026；operational phase は 2027 後半に計画され、digital euro の発行ではない |
| 潜在的発行 | ECB は 2029 中の readiness を目指す；legislation の採択は 2026；これが条件で、発行 decision は未実施 |

ECB は project progression と発行 decision を明確に区別する。発行には、(i) EU co-legislative regulation の採択、(ii) launch に関する別個の Governing Council decision が必要である。2026-07-30 の確認時点で発行 decision は行われていない。

## Matrix B · Design choice と記載された function

| Design choice | 詳細 | 公開上の説明 |
|---|---|---|
| **Two-tier intermediated** | ECB → supervised PSP（bank、EMI、payment institution）→ user；ECB は直接 distribution を行わない | PSP が提案 scheme の下で user-facing service を提供；[[fintech/cbdc-multi-tier-architecture-three-paradigms\|three-paradigms]] と比較 |
| **Per-person holding limit** | Calibration methodology は開発中；最終 euro amount は未採択 | 発行時の deposit outflow を制限することを意図 |
| **Reverse waterfall** | Payment が recipient の holding cap を超える場合、surplus を linked commercial-bank account へ自動 transfer | Cap 超の個別 payment で holding cap が UX blocker になることを回避 |
| **Zero interest** | Retail digital euro は利息を支払わない | Deposit を digital-euro balance へ移す incentive や、digital euro を savings substitute として使う incentive の低減を意図 |
| **Online + offline mode** | 一般利用の online mode；low-value cash-like P2P の offline mode | Offline は cash-like privacy・resilience、online は merchant payment を支援 |
| **Privacy tier** | Offline = small-value P2P の central record を持たない cash-like privacy；online = supervised PSP visibility と ECB data minimisation | Privacy expectation と AML/CFT obligation の balance |
| **Supervised PSP のみが distribution** | Wallet は bank + supervised PSP が提供；ECB は consumer-facing app を運営しない | User-facing distribution は提案 design の intermediary function |
| **Retail は無利息 + programmable money ではない** | ECB は programmable payment と programmable money を区別 | 確認した ECB 資料は digital euro 自体を programmable money と説明しない |
| **Wholesale は別 track** | Wholesale-CBDC use case は retail digital euro ではなく別の Eurosystem exploratory work で処理 | 二つの異なる track；legislative focus は retail |

中核となる三つの anti-disintermediation parameter、すなわち **holding limit + waterfall / reverse-waterfall funding + non-remuneration** は、legislation と design calibration の対象である。公開討論上の range を ECB decision として示してはならない。

## Matrix C · Preparation-Phase workstream

下表は [ECB progress page](https://www.ecb.europa.eu/euro/digital_euro/progress/html/index.en.html) と [digital euro pilot page](https://www.ecb.europa.eu/euro/digital_euro/pilot/html/index.en.html) から更新し、2026-07-30 に確認した。

| Workstream | Status（2026-07） |
|---|---|
| Rulebook | Draft version 0.91 を July 2026；公開済みだが最終 operating rulebook ではない |
| Platform provider | Framework provider を選定；project・legislation の進展に応じて段階的に work を稼働 |
| Pilot PSP selection | 36 PSPs を選定；2026 expression-of-interest process 後 |
| Pilot development | 2026-Q3；この時点から integration、certification、user onboarding の準備を計画 |
| Pilot operation | Controlled setting の beta digital euro を使い、2027 後半から 12 months を計画 |
| Legislative dialogue | 継続中；ECB は発行 decision を行っていない |

完了した Preparation Phase は public pilot では**なかった**。別個の controlled beta pilot は 2027 後半の operation 開始を計画しており、発行には当たらない。

## Matrix D · 採用指標（最新公開情報）

下表は、2026-07-30 に確認した [ECB pilot FAQ](https://www.ecb.europa.eu/euro/digital_euro/pilot/html/ecb.faq-digital-euro-pilot.ga.html) の controlled beta pilot と、発行済み CBDC を区別する。

| 指標 | 最新の公開 status |
|---|---|
| 発行済み digital-euro user | なし；発行 decision なし |
| 発行済み digital-euro merchant | なし |
| 発行済み digital-euro transaction volume | なし |
| Production wallet app | なし |
| Cross-border digital-euro settlement | なし |
| Beta-pilot PSP | 36 を選定；operational pilot は 2027 後半から計画 |
| 潜在的な初回発行 | 2029, この期間中の readiness target；2026 legislation と、その後の Governing Council decision が条件 |

証拠で裏付けられる status はより限定的である。発行済み digital euro または live retail activity はなく、controlled beta pilot の計画時期は 2027。後半に実施する。この status から programme ranking、policy motive、technical capability を推定しない。

## Matrix E · Holding limit と disintermediation defence（詳細）

```
Per-person holding-limit calibration（未最終化）
       │
       ▼
   最終 euro amount は未採択
       │
       ├── Cap 以下: PSP 提供 wallet で digital euro balance を保有
       │
       └── Cap 超: linked commercial-bank account へ reverse waterfall
                       (UX 上 payment を block しない)
```

三つの protection layer：

1. **一人当たり hard cap** — 開設 wallet 数にかかわらず、digital-euro holding balance の total を制限（cap は wallet 単位ではなく person 単位で、alias / identity look-up が必要）。
2. **Reverse waterfall** — Cap を超える payment は surplus を linked commercial-bank account へ自動 route。User は任意 amount を送受信でき、digital euro として保有する balance だけが cap の対象。
3. **Zero interest** — ECB は非付利を、bank deposit を digital-euro balance へ移す incentive や、digital euro を savings substitute として使う incentive の低減を意図した design feature と説明する。すべての非取引目的が排除されるとまでは示していない。

ECB は holding-limit methodology の開発を続けている。公開討論 range と scenario analysis は最終 ECB decision ではなく、発行に進む場合の operative design は採択 legislation と後の Governing Council decision が定める。

## Matrix F · Distribution model

| Layer | Distribution 上の role |
|---|---|
| ECB | Issuer（central-bank money）；underlying scheme + technical infrastructure を運営 |
| Supervised PSP（bank、EMI、payment institution） | Wallet provision；user onboarding；KYC；user-facing app |
| Merchant | Payment-scheme integration を通じて digital euro payment を受入れ |
| Consumer | PSP 提供 wallet で digital euro を保有；merchant payment；P2P |

提案 distribution model は user-facing onboarding、wallet、payment service を supervised PSP に割り当てる。発行が承認された場合、ECB は central-bank money を発行し、scheme・core infrastructure を運営する。この説明は cross-country ranking または motive を確立しない。

## Reference point · Sweden e-krona

Sweden の e-krona project は別個の central-bank research・policy process である。以下の比較は Riksbank の公開 e-krona page と ECB project page の事実に限り、一方の programme を他方の予測として扱わない。

- Riksbank は e-krona report と technical-pilot result を公開している。
- 確認した公開 page は e-krona 発行 decision を報告していない。
- 確認した公開 page は live retail e-krona product を記載していない。
- 将来の decision は Sweden の public-policy・legislative process に依存する。

これらの事実は、digital euro と e-krona が同じ trajectory をたどることや、policy、legal、market、technical factor のいずれが decisive かを確立しない。

下表の EU 欄は [ECB digital euro project / pilot pages](https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html)、Sweden 欄は [Riksbank e-krona page](https://www.riksbank.se/en-gb/payments--cash/e-krona/) に基づく 2026-07-30 時点の比較である。

| 項目 | EU digital euro | Sweden e-krona |
|---|---|---|
| Authority | ECB Governing Council | Sveriges Riksbank |
| Legislative basis | EU co-decision regulation が pending | Swedish parliamentary decision が必要 |
| Architecture | Supervised PSP 経由の two-tier intermediated | Two-tier intermediated model（design 中） |
| Holding cap | Methodology 開発中；最終 amount なし | 未最終化 |
| Live retail | なし | なし |
| Status（2026-07） | 現行 technical-readiness phase；beta pilot は 2027；発行 decision なし | 発行 decision なし |
| Public-source basis | [ECB project and pilot pages](https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html) | [Riksbank e-krona page](https://www.riksbank.se/en-gb/payments--cash/e-krona/) |
| Decision dependency | EU legislation + ECB Governing Council decision | Swedish public-policy・legislative process |

比較は異なる法的・制度的 decision route を確立する。観察された pace difference が純粋に政治的、または純粋に技術的であるという claim は裏付けない。

## 競争 context — MiCA EMT と wholesale Eurosystem

Digital euro の周辺には、二つの並行する EU development がある。

1. **MiCA EMT regime** — 2024-06-30（SC parts）と 2024-12-30（full）に発効；EU credit institution・EMI の regulated euro-denominated e-money token（EMT）はすでに market にある。EMT は private intermediary を通じて「digital euro」use case の一部（programmable euro payment）を提供する。[[fintech/mica-overview|MiCA overview]] と [[fintech/global-stablecoin-regulatory-five-pole-matrix|世界の stablecoin 五極 matrix]] を参照。
2. **Eurosystem wholesale exploratory work** — Retail digital euro と別で、central-bank money による wholesale settlement（DLT-based settlement を含む）の trial を行う。一部 euro-area central bank（BdF、Banca d'Italia、Bundesbank）は [[fintech/bis-project-agora-overview|BIS Project Agorá]] に参加し、独自 DLT pilot も持つ。

これらは別の legal・technical track である。その存在は retail digital euro を発行するか、いつ発行するかを決定せず、このページは法域 ranking や technical capability の推定に用いない。

## 起源と展開

```
2017-2019    ECB internal work on CBDC; Working Paper series
2020-10      ECB publishes "Report on a digital euro"; consultation launched
2021-10      Investigation Phase begins (2-year)
2023-06      European Commission proposes Regulation establishing the digital euro
2023-10      Investigation Phase concludes; ECB recommends entering Preparation Phase
2023-11      Preparation Phase begins (originally 2-year, to 2025-10)
2024-2025    Vendor framework agreements; rulebook drafting; technical pilots
2025         Preparation Phase progress reports published quarterly / periodically
2025-10      Preparation Phase completed
2025-11      Current phase begins: technical readiness, market engagement, legislative support
2026         36 PSPs selected; controlled beta-pilot preparation begins
2027 H2      Controlled beta-pilot operations planned for 12 months
2029         Conditional readiness target if legislation is adopted; no issuance decision
```

現行の公開 sequence は project milestone を確立するが、issuance forecast ではない。EU legislation の採択と、その後の ECB Governing Council decision は別々の条件である。

## 関連項目

- [[INDEX|ウィキ索引]]
- [[fintech/INDEX|フィンテック索引]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層 architecture 概要]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC の三つの現役 paradigm]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC architecture 選択の 4 中核 trade-off]]
- [[fintech/mica-overview|MiCA overview]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|世界の stablecoin 五極 matrix]]
- [[fintech/three-circles-stablecoin-mra-framework|米国・EU・日本のステーブルコイン市場アクセス比較]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/bis-project-agora-vs-mbridge|Agorá vs mBridge strategic comparison]]
- [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS 多 CBDC cross-border settlement bridge]]
- [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]]
- [[fintech/erupee-india-pilot-status|eRupee India pilot status]]
- [[fintech/jp-stablecoin-dcjpy|DCJPY / ディーカレット DCP]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 stablecoin 法制度の三層構造]]
- [[fintech/central-banking-function-unbundling|central-bank function unbundling の五層]]

## Sources

- European Central Bank — Digital euro project page: https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html
- ECB — Digital euro Preparation Phase progress report: https://www.ecb.europa.eu/euro/digital_euro/progress/html/index.en.html
- European Commission — Digital euro proposal・policy page: https://commission.europa.eu/business-economy-euro/euro-area/digital-euro_en
- European Commission — Digital euro の設置に関する Regulation proposal（June 2023）
- Council of the EU — Digital euro policy page: https://www.consilium.europa.eu/en/policies/digital-euro/
- ECB — Report on a digital euro（October 2020）
- ECB — CBDC design・analysis の Working Paper Series
- Sveriges Riksbank — e-krona project page・PoC report: https://www.riksbank.se/en-gb/payments--cash/e-krona/
- BIS Innovation Hub — CBDC topic page: https://www.bis.org/about/bisih/topics/cbdc.htm
- BIS Project Agorá 公開資料（Eurosystem central-bank participation）: https://www.bis.org/about/bisih/topics/fmis/agora.htm
