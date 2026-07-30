---
source: fintech/brazil-drex-timeline-2026
source_hash: 141cd5acdfb0e6cb
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "ブラジル DREX タイムライン 2024–2026"
translated_at: 2026-07-30T02:11:00+09:00
---
# ブラジル DREX タイムライン 2024–2026

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の下にあり、地域項目 [[fintech/latin-america-cbdc-stablecoin-dollarization]] が DREX の仕組みと Pix との関係を参照する**ブラジル固有の deep dive**である。比較文脈として、[[fintech/cbdc-multi-tier-architecture-overview]] の multi-tier CBDC architecture、[[fintech/institutional-stablecoin-deposit-token-thesis]] の tokenized-deposit institutional thesis、BIS の cross-CBDC interoperability surface である [[fintech/mbridge-bis-multi-cbdc-overview]] と [[fintech/bis-project-agora-overview]] をあわせて読む。

> [!info] 要約
> **DREX** は Banco Central do Brasil の digital-currency initiative の運用名称である。BCB は、wholesale Drex が central-bank money を表し、retail Drex が規制対象仲介機関の発行する tokenised deposit または payment-account balance を表す multi-layer DLT design と説明する。Pilot Phase 1 は 2023 年 7 月から 2024 年 10 月まで実施された。BCB pilot page で Phase 2 は現在 **closed** と表示され、2026-07-30 時点で report はなお作成中である。Phase 1 report は、pilot で使ったすべての client と asset が架空だったと記載する。また、6 validator node の QBFT network と、名称を明示した 4 privacy solution の test を記録しており、production result の report ではない。^[https://www.bcb.gov.br/content/estabilidadefinanceira/real_digital_docs/piloto/Relatorio_Drex_piloto_fase_1.pdf; https://www.bcb.gov.br/estabilidadefinanceira/piloto-drex]

## DREX を一段落で説明

DREX は**二層 tokenization platform**である。BCB は licensed bank と licensed payment institution に wholesale CBDC token を発行し、これらの機関は顧客に BRL 建ての**tokenized deposit**を発行する。end user が取引するのは BCB 発行 token ではなく tokenized deposit である。architecture は Bahamas Sand Dollar のような single-token retail CBDC より、日本の trust-type EPI model（[[fintech/jp-trust-type-sc-architecture]] と [[fintech/japan-epi-three-types-overview]] を参照）や香港の tokenized-deposit pilot に近い。

## 起源と名称

- **2020-08**: BCB が CBDC study を開始し、Real Digital 発行の意向を示した。
- **2022**: BCB technical staff、academia、industry の working group が初期要件を作成した。
- **2023-08**: 従来 Real Digital と呼ばれた project を正式に **Drex** と命名した。
- **2023-05**: BCB が technology stack に enterprise Ethereum-compatible permissioned blockchain implementation の **Hyperledger Besu** を選定した。
- **2023-Q4**: Pilot 1 participant の onboarding を開始した。
- **2023-07 から 2024-10**: Pilot Phase 1 が simulated asset で privacy、programmability、DvP を test した。
- **2024-09 以降**: Phase 2 が use case を選定し、participant-managed smart contract を test した。
- **2026-07-30 までに**: BCB pilot page は Phase 2 を closed とし、report は作成中としている。

### 二層発行モデル

下表は BCB が公表した wholesale Drex と retail Drex の区別に従う。live retail product ではなく target architecture を説明するもので、end user は pilot に直接参加していない。^[https://www.bcb.gov.br/meubc/faqs/p/drex; https://www.bcb.gov.br/content/about/presentationstexts/RG_Digital%20Money%20Summit%202025_may25_.pdf; https://www.bcb.gov.br/estabilidadefinanceira/piloto-drex]

| 層 | 発行体 | Token | 保有者 |
|---|---|---|---|
| Wholesale | BCB | central-bank money を表す Wholesale Drex | authorized financial・payment institution |
| Retail | BCB-authorized intermediary | tokenised demand-deposit または payment-account balance（「retail Drex」） | intermediary が維持する wallet を通じた顧客 |

公表 design では、顧客は wholesale BCB liability を直接保有せず、規制対象 intermediary を通じて platform に access する。これは [[fintech/cbdc-multi-tier-architecture-three-paradigms]] で調査する architecture pattern、[[fintech/cbdc-multi-tier-architecture-tradeoffs]] の policy-tradeoff analysis と同じである。

### 技術スタック

- **Network**: Hyperledger Besu（permissioned、EVM-compatible）。
- **Consensus**: Phase 1 report §2.2.5 に記載された、**6 validator node** の Quorum Byzantine Fault Tolerant（**QBFT**）。
- **Privacy**: Phase 1 report は、test した 4 solution として **Anonymous Zether、Rayls、Starlight、Microsoft Nova ZKP** を明記する。
- **Smart contract**: Solidity-compatible。approved participant による permissioned deployment。

これらの詳細は report が記述する Phase 1 pilot の deployment に限定される。後続の production topology や privacy stack の主張に読み替えてはならない。^[https://www.bcb.gov.br/content/estabilidadefinanceira/real_digital_docs/piloto/Relatorio_Drex_piloto_fase_1.pdf]

### Pilot 1（2024）

**範囲**: 選定 participant 間の closed-loop test。asset class:
- Wholesale CBDC（BCB 発行）。
- 参加 bank 発行の tokenized deposit。
- tokenized federal public debt（Tesouro Nacional と協働する Treasury bond）。
- Delivery-versus-Payment（DvP）test case。

**参加者**（2023–2024 年の BCB communication で公表）: BCB と Tesouro Nacional に加え、主要 Brazil bank（Itaú、Bradesco、BTG Pactual、Santander Brasil、Banco do Brasil、Caixa Econômica Federal）、fintech（Nubank、Inter）、payment-system entity を含む consortium。

**報告された test の境界**:
- 参加機関の架空顧客について、tokenised money と tokenised federal public debt の間の DvP を simulation した。
- report は実装・test 済み flow を記述するが、実顧客向け escrow product や production deployment は記録しない。
- **privacy は中心的な未解決課題として残った**。report は Phase 1 に配備された版の 4 solution を評価し、追加作業を提言する。

^[https://www.bcb.gov.br/content/estabilidadefinanceira/real_digital_docs/piloto/Relatorio_Drex_piloto_fase_1.pdf]

### Pilot 2（2025–2026）

**拡張軸**:
- より広い participant set（追加 bank、payment institution、fintech）。
- より多い asset class（private security、trade receivable を含む追加 tokenized asset）。
- より複雑な use case（cross-asset DvP、escrow、programmable-payment automation）。
- privacy-architecture の継続作業。

**2026-07-30 時点の状況**: BCB pilot page は Phase 2 を **closed**、report を「under construction」と表示する。BCB は production-launch date を発表しておらず、次の段階は結果次第で、privacy、data protection、transaction security が引き続き条件であるとしている。^[https://www.bcb.gov.br/estabilidadefinanceira/piloto-drex; https://www.bcb.gov.br/en/pressdetail/2601/nota]

## Pix 統合 · 構造上の anchor

**Pix** は BCB の instant-payment system で、2020 年 11 月に開始された。BCB は Pix と Drex を別々の公式 programme page で説明する。Pix は account-to-account の instant payment rail であり、Drex pilot は tokenised money・asset の DLT platform を test する。^[https://www.bcb.gov.br/en/financialstability/pix; https://www.bcb.gov.br/en/financialstability/drex_en]

引用資料は joint production architecture を公表しておらず、Drex が Pix の上流に位置する、Pix を cash leg として使う、Pix と adoption を競う、または特定の Pix cost・acceptance level を引き継ぐという dated evidence も示していない。integration claim には function、phase、launch status を特定する BCB technical / operational release が必要である。

## 対象とする programmable-money use case

下表は Phase 1 DvP simulation と、BCB が公表した例・Phase 2 theme を区別する。Phase 1 には実在の client や asset はなく、これらの行は commercial product、production result、検証済み cost saving ではない。^[https://www.bcb.gov.br/content/estabilidadefinanceira/real_digital_docs/piloto/Relatorio_Drex_piloto_fase_1.pdf; https://www.bcb.gov.br/en/pressdetail/2573/nota; https://www.bcb.gov.br/meubc/faqs/p/produtos-e-servicos-inteligentes-na-plataforma-drex]

| Use case | 公開 pilot の根拠 | Test 目的 |
|---|---|---|
| Federal public-bond DvP | 異なる機関の simulated client 間で行う Phase 1 use case | atomic exchange、privacy、programmability の test |
| Real-estate transaction | BCB public FAQ の例かつ Phase 2 theme | payment と tokenised title の simultaneous transfer を test |
| Receivables discounting | 選定された 13 の Phase 2 theme の一つ | credit workflow 用 participant-managed smart contract を test |
| Bank deposit certificate を collateral とする credit | 選定された 13 の Phase 2 theme の一つ | platform 上の collateral・credit operation を test |
| その他の選定 theme | Phase 2 は debenture と追加の regulated または non-BCB-regulated asset を含む | governance、privacy、regulator participation を test |

この pattern は [[fintech/institutional-stablecoin-deposit-token-thesis]] が論じる**機関・wholesale value proposition**と、[[fintech/stablecoin-crossborder-b2b-growth]] のより広い **B2B stablecoin growth** trajectory に一致する。

## 民間 BRL token に関する証拠の境界

引用した BCB・BIS 資料が立証するのは Drex pilot と一部の public-sector interoperability context であり、特定の民間 BRL token の current status、issuer、reserve、redemption term、supported chain、regulatory authorization、market position は立証しない。^[https://www.bcb.gov.br/en/financialstability/drex_en]

民間 token の例を追加する前に、次の各項目を current entity-specific / product-specific record で確認する。

1. 正確な issuing legal entity と regulator record。
2. token contract、supported network、current availability。
3. reserve asset、custody、segregation、attestation date。
4. redemption right、fee、eligible customer、geographic scope。
5. issuance、distribution、exchange、payment use の authorization。
6. volume、ranking、market-share claim の再現可能 dataset。

したがって、本ページは BRLA または MBRL に current status を付与せず、Mercado Bitcoin を最大 venue と記述せず、Drex または民間 token が特定 user segment で「勝つ」と予測しない。

## Cross-CBDC 相互運用の証拠

公式記録が裏付ける観察は限定的である。

- **Project mBridge** — [[fintech/mbridge-bis-multi-cbdc-overview]] を参照。BIS は 2024 年 10 月の引渡し時に Central Bank of Brazil を observer として掲載した。observer status は membership、joining timetable、DREX integration、interoperability を立証しない。
- **Project Agorá** — [[fintech/bis-project-agora-overview]] と [[fintech/bis-project-agora-vs-mbridge]] を参照。別の BIS experiment であり、current official roster は直接確認する必要がある。他の BIS work から participation を推定できない。
- **Project Ensemble** — [[fintech/bis-project-ensemble-overview]] と [[fintech/bis-project-ensemble-vs-mbridge-dual-track]] を参照。HKMA programme であり、引用資料は Drex connection や architectural interoperability を立証しない。

引用資料は Drex がこれら project のいずれかと integrated または interoperable であることを立証しない。observation、workshop participation、architectural resemblance を membership や live connection として報告してはならない。

## タイムライン要約

下表の日付と phase status は、BCB の Drex project、pilot、Phase 1 report page に基づく。^[https://www.bcb.gov.br/content/estabilidadefinanceira/real_digital_docs/piloto/Relatorio_Drex_piloto_fase_1.pdf; https://www.bcb.gov.br/en/financialstability/drex_en; https://www.bcb.gov.br/estabilidadefinanceira/piloto-drex]

| 年 | Milestone |
|---|---|
| 2020-08 | BCB CBDC study 開始 |
| 2022 | working group が要件を作成 |
| 2023-03 | platform test 開始 |
| 2023-07 | 16 の Phase 1 participant の onboarding 開始 |
| 2023-08 | Real Digital project を Drex に改称 |
| 2024-10 | Phase 1 period 終了。privacy は未解決のまま |
| 2024-09 以降 | Phase 2 use case と participant-managed smart-contract work を発表 |
| 2026-07-30 | BCB page は Phase 2 closed、report 作成中と表示 |
| 将来 | production-launch date の発表なし。次段階は pilot result に依存 |

## 関連項目

- [[fintech/INDEX|Wiki Index]]
- [[fintech/latin-america-cbdc-stablecoin-dollarization|Latin America CBDC + USD-SC dynamics]]
- [[fintech/southeast-asia-stablecoin-regulatory-landscape|東南アジア regulatory landscape]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC multi-tier architecture]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC three paradigms]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC tradeoff]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関向け SC + deposit-token thesis]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge multi-CBDC]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/bis-project-ensemble-overview|BIS Project Ensemble]]
- [[fintech/bis-project-agora-vs-mbridge|Agorá と mBridge]]
- [[fintech/em-market-crypto-dollarization-pattern|EM crypto-dollarization pattern]]
- [[fintech/stablecoin-crossborder-b2b-growth|B2B SC cross-border growth]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 SC regulatory landscape]]
- [[fintech/jp-trust-type-sc-architecture|日本 trust-type SC architecture]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act の実施状況]]
- [[exchanges/global-vasp-regulatory-comparison-matrix|Global VASP regulatory matrix]]

## 出典

- [Banco Central do Brasil — Relatório do Piloto Drex, Fase 1](https://www.bcb.gov.br/content/estabilidadefinanceira/real_digital_docs/piloto/Relatorio_Drex_piloto_fase_1.pdf)
- [Banco Central do Brasil — Drex project overview](https://www.bcb.gov.br/en/financialstability/drex_en)
- [Banco Central do Brasil — Drex pilot phase status](https://www.bcb.gov.br/estabilidadefinanceira/piloto-drex)
- [Banco Central do Brasil — Phase 1 report announcement](https://www.bcb.gov.br/en/pressdetail/2601/nota)
- [Banco Central do Brasil — Phase 2 selected themes](https://www.bcb.gov.br/en/pressdetail/2573/nota)
- [Banco Central do Brasil — Pix overview](https://www.bcb.gov.br/en/financialstability/pix)
