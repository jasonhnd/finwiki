---
source: structured-finance/japan-trust-beneficial-interest-vs-spv
source_hash: 17b28a9a18011659
lang: ja
status: machine
fidelity: ok
title: "信託受益権 vs SPV（日本の証券化ビークル）"
translated_at: 2026-06-19T12:43:19.860Z
---

# 信託受益権 vs SPV（日本の証券化ビークル）

## TL;DR

日本の証券化案件は、発行ビークルとして SPV（TK-GK、TMK 等）または信託受益権のいずれかを用いることができる。信託受益権は単なるラッパーではなく、それ自体が一つの証券化ビークルである。オリジネーターが資産を信託に移転し、信託が資産を保有し、信託受益権がトランシェに分割されて投資家に売却される。信託と SPV の選択は、税務上の取扱い、オフバランス基準、アセットクラスとの適合性、そして [[trust-banks/sumitomo-mitsui-trust]] のような信託銀行が受託者として果たす役割に依存する。一部の案件では、信託 + SPV を組み合わせたデュアルリスト構造が用いられる。本ページは信託対 SPV の選択ツリーとして用い、SPV 側については [[structured-finance/spv-tk-gk-vehicle-japan-tax]] と併せて参照すること。

## ウィキ上の位置づけ

| 目的 | 参照先 |
|---|---|
| SPV ビークルの選択 | [[structured-finance/spv-tk-gk-vehicle-japan-tax]] |
| 市場概観 | [[structured-finance/japan-abs-market-overview]] |
| RMBS の案件ストラクチャー | [[structured-finance/japan-rmbs-issuance-structure]] |
| JHF MBS 信託のストラクチャー | [[structured-finance/jhf-mbs-mechanics]] |
| CMBS のストラクチャー | [[structured-finance/japan-cmbs-issuance-structure]] |
| ドメイン索引 | [[structured-finance/INDEX]] |

## 1. 証券化ビークルとしての信託受益権

| 構成要素 | 説明 |
|---|---|
| 信託 | 信託法に基づく正式な信託。受託者、受益者、信託財産を伴う |
| 受託者 | 信託銀行（[[trust-banks/sumitomo-mitsui-trust]]、三菱 UFJ 信託、みずほ信託 等） |
| 信託財産 | オリジネーターから移転された証券化対象の資産プール |
| 受益権 | シニア、メザニン、劣後の各トランシェに分割される |
| 受益者 | 投資家。金融商品として信託受益権を保有する |

信託それ自体がビークルであり、純粋な信託構造においては別個の SPC エンティティは存在しない。

## 2. 単一資産信託（信託受益権の流動化）

| ユースケース | 説明 |
|---|---|
| 単一不動産 | 1 つの物件 → 信託 → トランシェ化された信託受益権 |
| 単一の住宅ローン・ポートフォリオ | オリジネーターの住宅ローン・プール → 信託 → トランシェ化された信託受益権 |
| リース・ポートフォリオ | 単一のリース会社のポートフォリオ → 信託 → トランシェ化された信託受益権 |

単一資産信託は私募 RMBS の支配的構造（[[structured-finance/japan-rmbs-issuance-structure]]）であり、シングルボロワー案件向け CMBS の一般的なバリアントである。

## 3. 複数資産信託

| ユースケース | 説明 |
|---|---|
| 住宅ローン・コンデュイット信託 | 複数オリジネーターからのプール → 単一の信託 → トランシェ化 |
| マルチテナント不動産信託 | 複数物件のプール → 信託 → トランシェ化 |
| コンデュイット ABS | 複数オリジネーター（オート／コンシューマー）からのプール → 信託 → トランシェ化 |

複数資産信託は日本では単一資産信託ほど一般的ではない。2008 以前の米国 CMBS を席巻したコンデュイットモデルは、ここではほぼ存在しない。

## 4. 信託 vs SPV 比較

| 観点 | 信託受益権 | SPV（TK-GK／TMK／SPC） |
|---|---|---|
| 法的主体 | 信託（独立した法人なし） | 法人（GK、TMK、KK 等） |
| 税務 | 税務上透明／原資産へのルックスルー | 適切に組成すればパススルー、そうでなければ二層課税 |
| 資産移転 | 受託者への信託譲渡 | SPV への売却 |
| 倒産隔離 | 信託財産は信託法により分別される | SPV はストラクチャー／資産流動化法により倒産隔離される |
| 債券発行 | 信託受益権（多くは私募による） | 特定社債（TMK）、社債、または TK 出資 |
| 公募上場 | 信託受益権そのものでは一般的でない | TMK の特定社債は上場可能 |
| 受託者の役割 | 能動的な受託信託銀行 | サービサー／アセットマネージャーの役割 |
| 投資家の見え方 | 信託受益権を保有 | 債券または TK 出資持分を保有 |
| 典型的なアセットクラス | RMBS、リース、不動産 | オート ABS、コンシューマー ABS、CMBS、RMBS（代替経路） |

## 5. RMBS に信託が用いられる理由

| 理由 | 詳細 |
|---|---|
| 信託銀行のインフラ | [[trust-banks/sumitomo-mitsui-trust]] をはじめとする信託銀行は、整備済みの受託者業務を備えている |
| 資産移転の簡便さ | 債権の信託譲渡は法的に十分確立している |
| 税務上の透明性 | 信託受益権は税務上ルックスルーとなる |
| サービサーの継続性 | 通常はオリジネーターが受託者の監督のもとサービシングを継続する |
| 投資家の馴染み | 生保や資産運用会社は、信託受益権を商品として扱うことに慣れている |

特に RMBS については、信託ルートは SPV で税務上のパススルーを達成するために必要となる追加のストラクチャリングを回避できる。

## 6. オート / コンシューマー ABS に SPV が用いられる理由

| 理由 | 詳細 |
|---|---|
| 標準化 | TK-GK はリピートイシュアーのオート／コンシューマー ABS において確立したストラクチャーである |
| 税効率 | TK オーバーレイは単層課税をすっきりと実現する |
| コスト | TK-GK はフルな信託アレンジメントより設定コストが安くなり得る |
| 債券発行の柔軟性 | TK 出資持分は契約上の投資であり、信託法の仕組みに制約されない |

リピートイシュアーの ABS プログラム（トヨタファイナンス、オリコ、ジャックス）にとって、TK-GK スキームは主力である —— [[structured-finance/spv-tk-gk-vehicle-japan-tax]] を参照。

## 7. デュアルリスト / 複合構造

一部の案件は信託 + SPV を組み合わせる：

| パターン | 説明 |
|---|---|
| 信託 + TMK | 信託が原資産を保有し、TMK が信託受益権を取得して特定社債を発行する |
| 信託 + GK | 信託が原資産を保有し、GK が信託受益権を取得、GK に TK をオーバーレイする |
| マルチ信託 + SPV | 複数のオリジネーター信託が単一の SPV 発行シェルフに資産を供給する |

これらの構造は以下の場合に用いられる：
- 上場債発行が望まれる（TMK 側）が、信託が自然な資産保有形態である場合
- 複数のオリジネーターが個別の信託を通じて拠出するが、単一の債券シリーズが好ましい場合
- 税務 / 規制上の考慮が階層化構造を有利とする場合

## 8. JHF MBS Trust との比較

JHF MBS Trust（[[structured-finance/jhf-mbs-mechanics]]）はそれ自体が信託受益権構造である。JHF はフラット 35 住宅ローンを信託に移転し、信託が MBS（トランシェ化された形での信託受益権）を発行し、投資家は JHF のサポート付きでシニアクラスを保有する。これは日本における信託受益権証券化の最大級の適用例の一つである。

## 9. 税務透明性のメカニクス

| 税務ポイント | 信託の取扱い |
|---|---|
| 信託の組成 | 原則として非課税事由（受託者への資産移転） |
| 信託収益 | 受益者へパススルーされる。信託自体は収益段階で法人課税の対象とならない |
| 受益者への分配 | 所得区分に応じて受益者段階で課税される |
| 信託の終了 | 受益者が残余財産を受領する。税務上の取扱いは事実関係による |

信託の透明性は、信託受益権が好まれる理由の一つである —— パススルー・ストラクチャリングによって回避すべき別個の SPC レベルの税が存在しない。

## 10. 規制上の取扱い

| 観点 | 信託受益権 | SPV 債券 |
|---|---|---|
| 金商法（FIEA）上の分類 | 受益権は金商法（第 2 条）上の「みなし有価証券」 | TMK の特定社債は金商法上の有価証券。TK 出資持分もみなし有価証券 |
| 開示 | 私募が一般的 | 私募が一般的。TMK 経由で公募も可能 |
| 投資家の制限 | 多くは適格機関投資家限定 | 多くは適格機関投資家限定 |
| FSA 登録 | 受託信託銀行が登録 | TMK は資産流動化計画を届け出る |

いずれのビークルも、同程度の開示負担で適格機関投資家への私募とすることができる。

## Related

- [[structured-finance/INDEX]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax]]
- [[structured-finance/japan-abs-market-overview]]
- [[structured-finance/japan-rmbs-issuance-structure]]
- [[structured-finance/japan-cmbs-issuance-structure]]
- [[structured-finance/jhf-mbs-mechanics]]
- [[structured-finance/auto-loan-abs-japan-toyota-honda]]
- [[structured-finance/consumer-loan-abs-japan-card-issuer]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[banking/INDEX]]
- [[banking/master-trust-bank-operating-model]]

## Sources

- JSDA (Japan Securities Dealers Association).
- FSA, FIEA / Trust Act regulatory pages.
- JCR (Japan Credit Rating Agency), trust-beneficial-interest criteria.
- R&I (Rating and Investment Information), trust-structured-finance methodology.
