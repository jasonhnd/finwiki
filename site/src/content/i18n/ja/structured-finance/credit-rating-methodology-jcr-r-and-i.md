---
source: structured-finance/credit-rating-methodology-jcr-r-and-i
source_hash: b326886005549815
lang: ja
status: machine
fidelity: ok
title: "日本のストラクチャードファイナンスにおける信用格付手法（JCR、R&I）"
translated_at: 2026-06-03T00:53:08.271Z
---
# 日本のストラクチャードファイナンスにおける信用格付手法（JCR、R&I）

## 要約

JCR（Japan Credit Rating Agency）と R&I（Rating and Investment Information）は、日本のストラクチャードファイナンスにおける二大国内信用格付会社である。両社はいずれも FSA 指定の信用格付業者であり、これは米国の NRSRO 指定に相当する日本版の制度上の位置づけである。両社は ABS、RMBS、CMBS、証券化 SPC について詳細なストラクチャードファイナンス格付基準を公表している。その手法は、日本固有の消費者信用、住宅ローン、商業用不動産サイクルに合わせて較正されており、2008-2010 の CMBS デフォルト波からの教訓も反映している。日本国内向けストラクチャード案件の多くでは JCR / R&I 格付が必要であり、S&P、Moody's、Fitch はクロスボーダー案件で選択的に追加される。このページは[[structured-finance/INDEX]]における格付会社手法の文脈として使う。

## ウィキ上の位置づけ

| 見たいもの | 移動先 |
|---|---|
| 市場概観 | [[structured-finance/japan-abs-market-overview]] |
| 個別ストラクチャー | [[structured-finance/japan-rmbs-issuance-structure]], [[structured-finance/japan-cmbs-issuance-structure]], [[structured-finance/auto-loan-abs-japan-toyota-honda]], [[structured-finance/consumer-loan-abs-japan-card-issuer]] |
| SPV ビークルの文脈 | [[structured-finance/spv-tk-gk-vehicle-japan-tax]] |
| JHF MBS の文脈 | [[structured-finance/jhf-mbs-mechanics]] |
| ドメイン索引 | [[structured-finance/INDEX]] |

## 1. JCR — Japan Credit Rating Agency

| 項目 | 詳細 |
|---|---|
| 日本語名 | 株式会社日本格付研究所 |
| 設立 | 1985 |
| 所有関係 | 独立系、上場親会社 |
| 規制上の指定 | FIEA に基づく FSA 指定信用格付業者 |
| クロスボーダーでの同等性 | グローバル格付会社と並び、クロスボーダー案件で認識されることが多い |
| 本社 | 東京 |

JCR は、事業会社、ソブリン、金融機関、ストラクチャードファイナンス商品を格付する。ストラクチャードファイナンスでは、RMBS、CMBS、ABS、証券化 SPC について詳細な基準ページを維持している。

## 2. R&I — Rating and Investment Information

| 項目 | 詳細 |
|---|---|
| 日本語名 | 株式会社格付投資情報センター |
| 設立 | 1998 （前身機関の統合） |
| 所有関係 | Nomura 系 |
| 規制上の指定 | FIEA に基づく FSA 指定信用格付業者 |
| クロスボーダーでの同等性 | クロスボーダー案件で認識される |
| 本社 | 東京 |

R&I は JCR と同じ商品群を格付する。手法と格付スケールは概念的には同等だが、較正と具体的基準は異なる。

## 3. FSA 指定（NRSRO 相当）

| 観点 | 詳細 |
|---|---|
| 規制制度 | 金融商品取引法（FIEA）の信用格付業者規定 |
| 指定 | FIEA 第66-27 条に基づく「信用格付業者」ステータス |
| 要件 | 独立性、手法開示、利益相反管理 |
| 国際的に認識される相当概念 | 米国の NRSRO（Nationally Recognized Statistical Rating Organization） |

JCR と R&I は指定業者であり、S&P、Moody's、Fitch（これらも FSA 指定業者）と同等の規制上の足場に立つ。FSA 指定業者の格付は、銀行の自己資本ウェイトや保険会社の投資ガイドラインなど、各種の規制・健全性目的で利用できる。

## 4. S&P / Moody's / Fitch との手法差

| 観点 | JCR / R&I | S&P / Moody's / Fitch |
|---|---|---|
| 較正 | 日本国内の消費者信用 / 住宅ローン / 不動産サイクル | グローバル / 地域別手法 |
| デフォルトモデル | 日本の過去デフォルトデータを主に使用 | 日本を含むクロスボーダーデータをプール |
| 回収モデル | 日本固有の不動産・倒産制度 | グローバル比較 |
| ストレスシナリオ | 日本固有（地域経済の悪化、人口減少など） | グローバルストレス手法 |
| 格付スケール | AAA から D（類似スケール） | AAA から D |
| ノッチ比較 | 同一の日本案件で、グローバル格付会社より同等または1ノッチ高いことがしばしばある | — |

よくある観察として、JCR / R&I は日本国内のストラクチャード案件について、比較可能なグローバル格付会社の格付と同等またはそれ以上の格付を付与することがある。これは、特に日本の消費者・住宅ローンポートフォリオで歴史的に観測された低いデフォルト率を反映した、デフォルトモデル較正の違いによる。

## 5. ストラクチャードファイナンス基準 — 共通要素

| 要素 | 格付会社が分析する内容 |
|---|---|
| プール品質 | 過去のデフォルト / 延滞 / 回収データ、集中度指標 |
| サービサー | オリジネーター能力、バックアップサービサー手当、サービサーアドバンスの実務 |
| 構造 | トランチング、劣後、OC、準備金、トリガー、ウォーターフォール |
| 法務 | 真正売買、倒産隔離、相殺リスク、資産分別 |
| カウンターパーティ | 受託者、スワップ相手、口座銀行の格付と交替条項 |
| キャッシュフローシナリオ分析 | 期限前返済、デフォルト、回収、金利シナリオのストレス |

格付は、格付カテゴリーに整合するストレス下で、対象トランチに想定されるデフォルト時損失シナリオを反映する。

## 6. RMBS 基準の具体点

| 要素 | JCR / R&I のアプローチ |
|---|---|
| プール層別 | LTV バケット、DTI バケット、ローン期間、固定 / 変動金利、地域分布 |
| デフォルト頻度 | 日本の過去住宅ローンデフォルト（低い基礎率）にストレス倍率を加えて較正 |
| 損失率 | 不動産回収シナリオのストレス（日本固有のヘアカット） |
| 期限前返済 | 保守的。日本では米国より遅い基礎率 |
| シニア支援 | 格付カテゴリーのストレスに合わせて劣後 + OC + 準備金を設定 |

構造上の適用は[[structured-finance/japan-rmbs-issuance-structure]]を参照。

## 7. CMBS 基準の具体点

| 要素 | JCR / R&I のアプローチ |
|---|---|
| 物件分析 | NCF（純キャッシュフロー）ストレス、キャップレートストレス、リファイナンスリスク |
| ローン構造 | LTV、DSCR、アモチゼーション、バルーンリスク |
| シニア支援 | 2008-2010 のデフォルト波の教訓に基づき、高い劣後を要求 |
| スペシャルサービサー | 能力、フィー経済性、ワークアウト実績 |
| 集中 | 単一資産 / 単一借入人分析と分散プール分析 |

2008 以降の CMBS 基準は、2008 以前のヴィンテージより顕著に保守的である。これはデフォルト波への格付会社の対応を反映している。[[structured-finance/japan-cmbs-issuance-structure]]を参照。

## 8. 最近の格付アクション

| 年 | パターン |
|---|---|
| 2008-2012 | CMBS の大幅格下げ、コンデュイット案件の損失 |
| 2012-2018 | 安定。ストラクチャード格下げは少なく、私募市場は小規模 |
| 2018-2020 | 安定。一部 CMBS が復活 |
| 2020-現在 | COVID 期のモニタリング（影響は限定的）。物流 CMBS は堅調な実績 |

## 9. 案件経済性における格付会社の役割

| ステークホルダー | 格付が重要な理由 |
|---|---|
| 投資家 | ALM / 規制ポートフォリオの適格性を決め、スプレッドの手がかりになる |
| オリジネーター | 達成可能なシニアクラス規模を決め、劣後の経済性を左右する |
| 受託者 / アレンジャー | 基準に沿った構造（トリガー、準備金）を交渉する |
| 規制当局 | 銀行の自己資本ウェイト、保険会社の投資適格性 |

目標とするシニアクラス格付（通常 AAA）を達成することが、案件組成作業の大半を動かす。

## 10. クロスボーダー案件

| パターン | 典型的な格付の組み合わせ |
|---|---|
| 純粋な日本国内案件 | JCR + R&I（両方の場合も、一方だけの場合もある） |
| 外国投資家を含む日本案件 | JCR または R&I + グローバル格付会社 1 社（S&P、Moody's、Fitch のいずれか） |
| Toyota Financial Services のクロスボーダー棚 | 複数のグローバル格付会社 + JCR または R&I |
| グローバル投資家基盤を持つ日本籍 CLO | JCR / R&I + Moody's または Fitch |

グローバル投資家を対象とする案件では、JCR / R&I とグローバル格付会社のデュアル格付が一般的である。

## 関連項目

- [[structured-finance/INDEX]]
- [[structured-finance/japan-abs-market-overview]]
- [[structured-finance/japan-rmbs-issuance-structure]]
- [[structured-finance/japan-cmbs-issuance-structure]]
- [[structured-finance/auto-loan-abs-japan-toyota-honda]]
- [[structured-finance/consumer-loan-abs-japan-card-issuer]]
- [[structured-finance/jhf-mbs-mechanics]]
- [[structured-finance/jhf-mbs-vs-private-rmbs-spread]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax]]
- [[structured-finance/japan-trust-beneficial-interest-vs-spv]]
- [[banking/INDEX]]
- [[finance/INDEX]]

## 出典

- JCR (Japan Credit Rating Agency), corporate site and structured-finance criteria.
- R&I (Rating and Investment Information), corporate site and structured-finance methodology.
- FSA, credit-rating-agency designation pages.
- JSDA (Japan Securities Dealers Association).
