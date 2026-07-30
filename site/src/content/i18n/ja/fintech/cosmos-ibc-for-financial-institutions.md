---
source: fintech/cosmos-ibc-for-financial-institutions
source_hash: 1252c7c984a7acdc
lang: ja
status: machine
fidelity: ok
title: "金融機関向けクロスチェーン・プロトコル比較 — IBC / LCP / CCIP / LayerZero / Hyperlane"
translated_at: 2026-07-30T03:20:00+09:00
---

# 金融機関向けクロスチェーン・プロトコル比較 — IBC / LCP / CCIP / LayerZero / Hyperlane

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の配下で、金融機関がクロスチェーン方式を比較する際の技術的デューデリジェンス項目を整理する。日本の制度境界は [[fintech/japan-financial-regulation|日本金融規制]] と [[fintech/japan-stablecoin-regulatory-landscape|日本のステーブルコイン規制構造]]、Project Pax の資料境界は [[fintech/cross-border-sc-via-swift-api|Swift API を利用するクロスボーダー SC]] とあわせて読む。本項は、特定プロトコルの法的適合性、本番利用、または規制上の優位を認定するものではない。

> [!info] 要約
> 比較の起点はプロトコル名ではなく、アプリケーションが何を移転し、どの検証モデルと追加仮定を採り、誰が設定・更新・中継・復旧を担うかである。IBC、LCP、CCIP、LayerZero、Hyperlane は検証と運用の境界が異なる。公開仕様、案件固有の設定、テスト結果、契約・法務・コンプライアンス確認を分けて記録し、技術仕様だけから AML/CFT 適合性、無事故、単一障害点の不存在、または本番採用を推論しない。

## プロトコル比較

| Protocol | 一次資料が示す仕組み | 金融機関が案件別に確認する事項 |
|---|---|---|
| **IBC Classic** | [ICS-02](https://github.com/cosmos/ibc/blob/main/spec/core/ics-002-client-semantics/README.md) は、信頼済み状態と validity predicate を組み合わせる client の共通要件を定める。[IBC documentation](https://docs.cosmos.network/ibc/latest/intro) は、相互チェーンの light client と relayer による packet 中継を説明する | client type、初期 trusted state、接続先 consensus、client update / freeze / recovery、relayer、timeout、upgrade |
| **IBC + LCP** | [How LCP works](https://docs.lcp.network/how-lcp-works/) は、Intel SGX enclave 内の light-client 検証結果を commitment と enclave key の署名にし、downstream 側で検証する構成を説明する。[Security Model](https://docs.lcp.network/security-model/) は追加仮定を明記する | TEE、MRENCLAVE、remote attestation、enclave key 登録、両チェーンの availability / consensus correctness、liveness のための honest LCP node |
| **Chainlink CCIP** | 現行の [CCIP offchain architecture](https://docs.chain.link/ccip/concepts/architecture/offchain/overview) は、v1.6 の単一 Role DON 上で Commit OCR と Executing OCR の plugins が動くと説明する。自動化された offchain RMN role は現行 deployment では停止中と明記される。[Swift 2023 report](https://www.swift.com/sites/default/files/files/results_report_swift_interoperability_experiments_final_310823.pdf) は CCIP を用いた実験を記録する | 利用 version、chain / token support、onchain controls、rate limits、upgrade / admin 権限、DON 運用、実験と本番の区別 |
| **LayerZero V2** | [DVN documentation](https://docs.layerzero.network/v2/concepts/modular-security/security-stack-dvns) は、OApp が pathway ごとに send / receive configuration、DVN、X-of-Y-of-N threshold、Executor を設定できると説明する | 各 pathway の明示設定、required / optional DVN、threshold、Executor、default 依存、変更管理、利用可能性 |
| **Hyperlane** | [ISM documentation](https://docs.hyperlane.xyz/docs/protocol/ISM/modular-security) は、destination 側で message を検証する ISM を application ごとに設定・合成・独自実装でき、未指定時は Mailbox の default Multisig ISM を使うと説明する | application-specific ISM、validator set、threshold、組合せ条件、default の扱い、upgrade / admin 権限、運用監視 |

出典: protocol comparison table. ^[source: IBC ICS-02; Cosmos IBC documentation; LCP documentation; Chainlink CCIP documentation; Swift 2023 results report; LayerZero documentation; Hyperlane documentation]

## IBC / LCP で確認すべき仮定

| 確認軸 | 一次資料から確認できること | 案件証拠として追加するもの |
|---|---|---|
| Remote state | ICS-02 は trusted state と client-specific validity predicate に基づく remote state update の検証を定義する | 採用 client、初期化手順、接続先 consensus / finality、監視対象 |
| Client lifecycle | ICS-02 は client update、misbehaviour detection、freeze を扱い、IBC documentation は relayer の役割を説明する | update 頻度、timeout、停止・復旧手順、chain upgrade 時の責任分界 |
| LCP execution | LCP は SGX enclave 内で light-client 検証を行い、Remote Attestation を経て登録された enclave key で proof を検証させる | SGX platform、MRENCLAVE 管理、attestation trust chain、key rotation、脆弱性対応 |
| Safety / liveness assumptions | LCP Security Model は TEE security、両チェーンの availability / consensus correctness、少なくとも 1 honest LCP node という仮定を列挙する | operator 構成、障害訓練、state recovery、monitoring、service objective |

出典: IBC / LCP assumptions table. ^[source: IBC ICS-02; Cosmos IBC documentation; LCP How LCP works; LCP Security Model]

## 共通の導入デューデリジェンス

| 領域 | 確認事項 | 受入証拠の例 |
|---|---|---|
| Application semantics | message と asset transfer を区別し、mint / burn / lock / release、nonce、replay、timeout、失敗時の状態を定義する | sequence diagram、contract tests、reconciliation test、asset-accounting review |
| Security configuration | client / DON / DVN / ISM、threshold、admin / upgrade key、default、変更手順を案件単位で固定する | signed configuration、権限表、upgrade rehearsal、independent review |
| Operations | relayer、LCP node、DON、DVN、Executor、validator の責任と監視範囲を記録する | runbook、alert、SLO、on-call、dependency inventory |
| Incident and recovery | pause、retry、timeout、manual execution、state recovery、reconciliation、利用者通知を定義する | failure-injection result、recovery log、incident playbook |
| Legal and compliance | asset claim、issuer / custodian、data privacy、AML/CFT、sanctions、liability / recourse、法域を技術評価から分離する | legal opinion、compliance approval、data-flow review、contractual allocation |

出典: common due-diligence table. ^[source: Swift 2023 results report; LayerZero DVN documentation; Hyperlane ISM documentation; Chainlink CCIP offchain architecture]

## Project Pax の資料で確認できる範囲

| 項目 | 2024-09-05 公告に記載された内容 | 本項での扱い |
|---|---|---|
| Project status | [Datachain / Progmat announcement](https://www.datachain.jp/ja/news/progmat-and-datachain-launch-project-pax) は、共同プロジェクトの開始と、prototype を用いる実証実験の計画を公表した | 公告時点の計画・設計資料として扱う |
| Existing interface | Swift の既存 API framework と API mock / simulation environment に適応するクロスボーダー SC 送金基盤を構築するとした | Swift API 連携の設計意図として扱い、本番接続の証拠とはしない |
| Cross-chain components | 異なる blockchain 間の取引に IBC と LCP を利用すると記載した | 指名された技術構成要素として扱い、個別 chain、finality、運用品質は別途確認する |
| Joint development | Progmat と Datachain が共同開発した SC contract を構成要素として記載した | 公告に記載された共同開発範囲として扱い、asset の法的効果や settlement 完了を推論しない |

出典: Project Pax evidence-boundary table. ^[source: Datachain and Progmat Project Pax announcement, 2024-09-05]

この資料から、個別金融機関の本番参加、特定 chain への deployment、asset の法的移転、finality、commercial operation を立証済みとは扱わない。Project Pax の出来事を更新する場合は、発表日と検証段階を明記し、後続資料を別に引用する。

## 候補比較の進め方

| Step | 判断内容 | 必要な成果物 |
|---|---|---|
| Scope | message、token、cash claim、securities、または workflow のどれを跨ぐかを定義する | use-case boundary、asset / data map、非目標 |
| Verification | remote state や message を誰が、どの情報と threshold で検証するかを比較する | trust-assumption register、threat model、configuration snapshot |
| Control | deploy、configure、upgrade、pause、recover できる主体を特定する | key / role matrix、change-control record |
| Operations | relay、execution、monitoring、reconciliation、incident response の責任を割り当てる | RACI、runbook、SLO、failure-test result |
| Approval | 技術試験と、security、risk、legal、compliance、procurement の承認を分離する | approval record、残存 risk、go-live criteria |

出典: candidate-comparison process table. ^[source: protocol documentation and project-specific due-diligence framework]

## 証拠の境界

- Light-client verification や公開仕様は、AML/CFT・制裁対応・ライセンス要件への適合を自動的に証明しない。
- Open-source / open-standard であることだけから、vendor lock-in、運用集中、upgrade control が低いとは断定しない。
- 本項の一次資料は、全期間の zero-incident、絶対的な security ranking、または single point of trust の不存在を立証しない。
- 実験、prototype、announcement は、本番採用、commercial operation、または規制承認と区別する。
- protocol version、application configuration、operator set、supported pathways は変わり得るため、導入時点の snapshot と再検証日を残す。

## 応用

- 金融機関向けクロスチェーン・プロトコルの RFI / RFP と technical due diligence
- Project Pax の公告・実証・後続更新を段階別に読むためのチェックリスト
- 信託型 SC を複数 ledger / chain で扱う際の middleware と責任分界の評価
- application configuration、operation、security、legal / compliance を分離した承認資料

---

## 関連
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/jp-trust-type-sc-architecture|日本の信託型ステーブルコイン構造]]
- [[fintech/cross-border-sc-via-swift-api|Swift API を利用するクロスボーダー SC]]
- [[fintech/japan-financial-regulation|日本金融規制]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本のステーブルコイン規制構造]]
<!-- /wiki-links:managed -->

## Sources

- [IBC ICS-02 Client Semantics](https://github.com/cosmos/ibc/blob/main/spec/core/ics-002-client-semantics/README.md)
- [Cosmos Docs — IBC documentation](https://docs.cosmos.network/ibc/latest/intro)
- [LCP — How LCP works](https://docs.lcp.network/how-lcp-works/)
- [LCP — Security Model](https://docs.lcp.network/security-model/)
- [Chainlink — CCIP offchain architecture](https://docs.chain.link/ccip/concepts/architecture/offchain/overview)
- [Swift — Blockchain interoperability experiments results report, August 2023](https://www.swift.com/sites/default/files/files/results_report_swift_interoperability_experiments_final_310823.pdf)
- [LayerZero V2 — Security Stack (DVNs)](https://docs.layerzero.network/v2/concepts/modular-security/security-stack-dvns)
- [Hyperlane — ISM Overview](https://docs.hyperlane.xyz/docs/protocol/ISM/modular-security)
- [Datachain / Progmat — Project Pax announcement, 2024-09-05](https://www.datachain.jp/ja/news/progmat-and-datachain-launch-project-pax)
