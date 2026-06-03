---
source: structured-finance/spv-tk-gk-vehicle-japan-tax
source_hash: 66c84c64967de0e8
lang: ja
status: machine
fidelity: ok
title: "SPV / TK / GK / TMK / SPC のビークル選択（日本の税務）"
translated_at: 2026-06-03T00:53:08.295Z
---
# SPV / TK / GK / TMK / SPC のビークル選択（日本の税務）

## 要約

日本の証券化案件では、主に4つのSPV構造が使われる。TK（匿名組合）、GK（合同会社）、TMK（資産流動化法上の特定目的会社）、または汎用SPCである。最も一般的な私募構造は「TK-GK」であり、GK が資産保有主体となり、TK の匿名組合レイヤーが投資家への税務パススルーを提供する。案件が資産流動化法上の正式な上場債発行を必要とする場合は、TMK が選好される。ビークル選択は、税務パススルー、オフバランス要件、公募か私募か、資産クラス、オリジネーターの戦略によって決まる。このページはSPVビークルの選択ツリーとして使い、信託とSPVの比較については [[structured-finance/japan-trust-beneficial-interest-vs-spv]] と組み合わせて読む。

## ウィキ上の位置づけ

| 知りたいこと | 開くページ |
|---|---|
| 信託とSPVの比較 | [[structured-finance/japan-trust-beneficial-interest-vs-spv]] |
| 市場概観 | [[structured-finance/japan-abs-market-overview]] |
| RMBS 案件構造 | [[structured-finance/japan-rmbs-issuance-structure]] |
| CMBS 案件構造 | [[structured-finance/japan-cmbs-issuance-structure]] |
| JHF MBS 構造 | [[structured-finance/jhf-mbs-mechanics]] |
| 領域索引 | [[structured-finance/INDEX]] |

## 1. ビークル類型 — 概観

| ビークル | 正式名称 | 法制度 | 典型的な用途 |
|---|---|---|---|
| TK | 匿名組合 | 商法 | 投資家への税務パススルーを提供するオーバーレイ構造 |
| GK | 合同会社 | 会社法 | TK-GK 私募案件における資産保有主体 |
| TMK | 特定目的会社 | 資産流動化法 | 資産流動化法の制度下での上場債発行 |
| SPC（汎用） | 特定目的会社 / 株式会社 / その他 | 会社法 | 資産流動化法外のSPCを含む各種案件構造 |

「SPC」という略称は、資産流動化法上の TMK と、会社法上の汎用特別目的会社の双方に使われるため紛らわしい。正確には、資産流動化法固有の形態は TMK であり、「SPC」はより広い用語である。

## 2. TK-GK スキーム — 主力構造

| レイヤー | 役割 |
|---|---|
| GK（資産保有者） | 証券化資産を保有する。法人として扱われ、倒産隔離される |
| TK（オーバーレイ） | 匿名組合投資家が GK に出資し、パススルー分配を受ける |
| オリジネーター | 資産を GK に売却する。リスク保持として TK 持分を保有する場合がある |
| 投資家 | GK に対する TK 持分を引き受け、パススルー利回りを受け取る |
| 受託者 / サービサー | 資産キャッシュフローを管理する |

TK-GK スキームは以下を組み合わせる。
- 倒産隔離された資産保有者としての GK
- 税務パススルービークルとしての TK（投資家への TK 分配は GK レベルで損金算入され、実質的に一層課税を実現する）

これは日本の私募案件における支配的な構造である。

## 3. TMK — 資産流動化法上の特定目的会社

| 要素 | 説明 |
|---|---|
| 法的根拠 | 資産流動化法 |
| 設立 | 規制当局への資産流動化計画の届出が必要 |
| 発行 | 特定社債、特定短期社債、優先出資を公募で発行できる |
| 税務 | 一定条件を満たせば税務パススルーが可能（分配要件） |
| 用途 | 公募上場債、大型または複雑な案件、不動産証券化 |

TMK が選好されるのは以下の場合である。
- 案件が正式な公募上場債発行を必要とする
- 資産が不動産である（TMK は一定条件下で不動産税制上の優遇を持つ）
- 資産流動化法の規制インフラが案件に有用である

## 4. 税務パススルーの仕組み

| ビークル | 税務上の仕組み |
|---|---|
| TK-GK | TK 分配が GK レベルで損金算入され、投資家側で一度だけ課税される |
| TMK | 分配要件を満たせば、投資家への分配を損金算入できる（通常、税前利益の 90%+） |
| 汎用SPC | 特別な選択または個別処理がない限り二層課税 |
| 信託 | 信託受益権は税務透明（原資産へのルックスルー）— [[structured-finance/japan-trust-beneficial-interest-vs-spv]] を参照 |

税務パススルーの経済的な要点は二重課税を避けることである。SPVレベルの資産が生むキャッシュフローは、SPVと投資家の双方ではなく、投資家レベルで課税されるべきである。

## 5. オフバランス要件

オリジネーターのオフバランス処理には、SPV が以下を達成する必要がある。

| 基準 | テスト |
|---|---|
| 真正売買 | 資産移転が法的に完了し、金融取引として再性格付けされない |
| 倒産隔離 | SPV がオリジネーターの倒産財団に連結されない |
| リスク移転 | 実質的な信用リスクが第三者投資家に移転される |
| 支配移転 | オリジネーターが資産への実効支配を保持しない |
| 会計上の認識中止 | 資産の認識中止に関する会計基準（JGAAP / IFRS）を満たす |

オリジネーターによるリスク保持（一般に 5%）は、適切に組成されていればオフバランス処理と両立する。保持は「skin-in-the-game」または規制目的のためであり、支配保持のためではない。

## 6. 資産流動化法SPCと一般SPC

| 次元 | 資産流動化法上の TMK | 一般SPC（株式会社 / その他） |
|---|---|---|
| 規制制度 | 資産流動化法。FSA / MOF 監督 | 会社法 |
| 届出 | 資産流動化計画が必要 | SPV設立に関して不要 |
| 税務パススルー | 分配要件を満たせば利用可能 | 通常は二層課税。ただし個別構造を除く |
| 債券発行 | 資産流動化法上の特定社債 | FIEA 上の社債 |
| 公開上場 | 可能 | 可能だが一般的ではない |
| 不動産処理 | 一定の不動産案件で優遇 | 通常の法人処理 |

TMK ルートは規制上重いが、資産流動化法制度下の公募上場債発行を可能にする。一般SPCは軽いが、資産流動化法上の便益は得られない。

## 7. 公募と私募

| 募集形態 | 典型的なビークル | 注記 |
|---|---|---|
| 公募上場 | TMK | 資産流動化法上の特定社債。TSE Bond Market などに上場 |
| 私募 | TK-GK | 民間RMBS、ABS、不動産案件で最も一般的 |
| 信託受益権私募 | 信託 + 私募 | [[structured-finance/japan-trust-beneficial-interest-vs-spv]] を参照 |

日本の証券化案件の大半は私募であり、公募上場のストラクチャード債は少数派である。公募ルートは、TMK の上場債発行能力に価値がある最大級案件に限られる。

## 8. ビークル選択ツリー

選択は以下に依存する。

| 要因 | 適した構造 |
|---|---|
| 公開上場が必要 | TMK |
| 資産が不動産 | TMK（税務優遇）または信託 |
| 私募、複雑なトランチング | TK-GK |
| 単純な単一資産不動産 | TMK または信託 |
| オリジネーターとの近さを保ちたい（限定的な開示） | TK-GK 私募 |
| 銀行受託者を伴う住宅ローン証券化 | 信託受益権 |
| 標準的な自動車 / 消費者 ABS | TK-GK |

## 9. 実務上の例

| 案件類型 | 典型的なビークル |
|---|---|
| 自動車ローンABS | TK-GK（[[structured-finance/auto-loan-abs-japan-toyota-honda]]） |
| カード債権ABS | TK-GK または信託（[[structured-finance/consumer-loan-abs-japan-card-issuer]]） |
| 民間RMBS | 通常は信託受益権（[[structured-finance/japan-rmbs-issuance-structure]]） |
| CMBS | TMK（単一借入人）または TK-GK（[[structured-finance/japan-cmbs-issuance-structure]]） |
| JHF MBS | 「MBS Trust」— 信託受益権の派生形（[[structured-finance/jhf-mbs-mechanics]]） |
| 不動産単一資産 | TMK |

## 関連項目

- [[structured-finance/INDEX]]
- [[structured-finance/japan-trust-beneficial-interest-vs-spv]]
- [[structured-finance/japan-abs-market-overview]]
- [[structured-finance/japan-rmbs-issuance-structure]]
- [[structured-finance/japan-cmbs-issuance-structure]]
- [[structured-finance/auto-loan-abs-japan-toyota-honda]]
- [[structured-finance/consumer-loan-abs-japan-card-issuer]]
- [[structured-finance/jhf-mbs-mechanics]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[real-estate-finance/INDEX]]
- [[banking/INDEX]]
- [[finance/INDEX]]

## 出典

- JSDA (Japan Securities Dealers Association), securitization-product guidance.
- FSA, asset-securitization-law regulatory pages.
- JCR (Japan Credit Rating Agency), structured-finance criteria.
- R&I (Rating and Investment Information), structured-finance methodology.
