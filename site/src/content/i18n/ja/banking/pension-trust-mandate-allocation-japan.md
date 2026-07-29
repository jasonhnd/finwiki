---
source: banking/pension-trust-mandate-allocation-japan
source_hash: b61c115c2f58d054
lang: ja
model: google-translate-guarded-line-sync+manual-review
status: machine
fidelity: ok
title: "年金信託マンデート配分（日本）"
translated_at: 2026-07-29T03:30:48.115Z
---

# 年金信託マンデート配分（日本）

## Wiki route

本エントリは [[banking/INDEX|banking index]] の下に位置し、年金側の需要を信託銀行側の供給に結び付ける。機関のアンカーである [[trust-banks/master-trust-bank|MTBJ]] と [[trust-banks/custody-bank|CBJ]]、オペレーティングモデルの [[banking/master-trust-bank-operating-model|Master Trust Bank operating model]] と [[banking/custody-bank-operating-model|カストディ Bank operating model]]、ランドスケープ・ビューの [[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]]、陣営横断マトリクスの [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|Japan trust bank vs global custodian comparison matrix]]、オペレーティング比較の [[banking/trust-bank-custody-operating-comparison|trust-bank カストディ operating comparison]]、および手数料スタディの [[banking/trust-bank-fee-structure-comparison|trust bank fee structure comparison]] と併読されたい。レールについては [[banking/jasdec-settlement-operations|JASDEC settlement operations]] と；規制ティアについては [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]] と；フロントオフィスの信託銀行側については [[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]]、[[trust-banks/sumitomo-mitsui-trust|SMTB]]、[[trust-banks/mizuho-trust-bank|Mizuho Trust]] と；外貨資産レッグのサブカストディについては [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]] / [[foreign-financial-institutions/state-street-japan|State Street Japan]] / [[foreign-financial-institutions/jpmorgan-japan|JP Morgan Japan]] とペアで読むこと。機関投資家の文脈については [[finance/japan-listed-financial-groups-investable-universe|Japan listed financial groups investable universe]] を参照。

## TL;DR

日本の公的年金と私的年金は、いくつかの法的に異なる取り決めを採用しています。 GPIFは運用体制や運用者・保管者の情報を公開しています。企業の DB および DC の取り決めは、プラン規則、契約、および法定開示によって異なります。このページでは、役割と証拠ルートをマップします。これは、未公開の顧客の義務を推測したり、「デフォルトの勝者」の名前を指定したり、信託銀行の価格をランク付けしたりするものではありません。

### 年金システムの 3 レイヤー

| レイヤー | 説明 | 法令 | 概算規模 |
|---|---|---|---|
| **GPIF**（年金積立金管理運用独立行政法人） | 公的年金積立金 | 厚生年金保険法 + 国民年金法 + 独立行政法人法 | 約 ¥250兆 AUM |
| **企業 DB**（確定給付企業年金） | 企業がスポンサーとなる確定給付年金信託 | 確定給付企業年金法（2001） | 受託資産約 ¥66.0兆（確定給付企業年金、令和5年3月末；DB + 厚生年金基金合算約 ¥80.5兆） |
| **企業型 DC + iDeCo**（確定拠出年金） | 企業がスポンサー / 個人型の DC | 確定拠出年金法（2001） | 合計約 ¥29兆（企業型 DC ¥22.8兆 + iDeCo ¥6.2兆、2024-03末）；NISA / DC 改革後に急速に成長 |

出典: ^[GPIF official site and operating framework, https://www.gpif.go.jp/, https://www.gpif.go.jp/operation/operationalformat.html; MHLW pension statistics, https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000147284.html; iDeCo statistics, https://www.ideco-koushiki.jp/library/pdf/statistics_202403.pdf. Figures are dated snapshots.]

### マンデート配分の役割分離

| 役割 | 機能 | 例 |
|---|---|---|
| 運用機関（投資運用機関） | 投資判断は一任。ポートフォリオの構築。取引執行 | 委任/任命の開示に名前が記載されている機関 |
| 資産管理機関（資産管理者・信託銀行） | 信託口座の保管、決済、記録管理および関連管理 | 任命開示に記載されている機関名 |
| 受託金融機関（受託金融機関） | 年金信託の設定と協定に基づく受託者の保有 | 計画/信託書類に記載されている機関 |
| 運営管理機関（DC運営責任者） | 法的役割の範囲内での会員アカウントの記録管理、プラン管理、および製品情報 | 現在の計画・事業者の開示 |
| サブカストディアン（海外資産） | 外国市場の保管および決済機能 | 特定の保管チェーン内で指定された機関 |

出典: ^[GPIF operating framework, MHLW pension materials, FSA trust-business list, and official service descriptions of the appointed entities.]

### GPIF のマンデート配分

GPIFは運用枠組みや日付入りの任命・報告資料を公表しています。静的なマネージャー リストではなく、これらの出版物を使用してください。

| GPIFの公開面 | それが確立するもの | 掲載ルール |
|---|---|---|
| 運用形態 | GPIFが示す役割分担と運営体制 | GPIF の用語と発効日を使用する |
| 投資運用会社の開示 | 開示期間において GPIF が命名した運用会社・戦略 | 過去の予定を繰り越さないでください |
| 資産管理の開示 | 開示された役割と期間について GPIF が指定した機関 | すべてのサブカストディチェーンを推測しないでください |
| 年次報告書/スチュワードシップレポート | 古い資産、パフォーマンス、ガバナンス、管理情報 | 期間、単位、GPIF の定義を保持する |
| 調達・選定通知 | 特定の選考プロセスの範囲とステータス | 申請、選択、任命、解雇を区別する |

出典: ^[GPIF operational format and current disclosures, https://www.gpif.go.jp/operation/operationalformat.html, https://www.gpif.go.jp/.]

### 企業 DB プランのマンデート配分パターン

| DBの役割 | 指定プラン/プロバイダーの主張に必要な証拠 |
|---|---|
| 企画スポンサーとルール | 公式開示を計画または後援する |
| 受託者・受取金融機関 | 計画文書または予定のお知らせ |
| 投資マネージャー | 任務を命名する計画/スポンサーまたはマネージャーの発表 |
| 資産管理者/保管者 | 計画、受託者、または指定された機関の開示 |
| 数理業務、助言業務、給付金支払い業務 | 計画契約の開示または名指しの公式発表 |

出典: ^[MHLW defined-benefit pension materials, https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000147284.html; plan- and provider-specific primary disclosures.]

### DC プランのマンデート配分パターン

| 枠 | 配分者 | 典型的な参加者 |
|---|---|---|
| 運営管理機関（レコードキーピング、加入者管理） | スポンサー / プラン規則 | 信託銀行（三菱 UFJ 信託、SMTB、みずほ信託の DC 部門）、証券会社（野村、大和、SMBC 日興）、専門オペレーター NRK |
| 運用商品メニューの提供 | 運営管理機関 | 選定された 投信ラインナップ |
| 信託側カストディ（資産管理） | 資産管理機関 | 運営管理機関 が選定した 投信受託会社経由の MTBJ / CBJ |
| メニュー内の各ファンドの 投信受託会社 | 投信受託 としての信託銀行 | MTBJ / CBJ / メガバンク信託部門 |
| 外貨資産レッグ | サブカストディアン・チェーン | 信託銀行経由 → グローバル・カストディアン |

出典: ^[MHLW defined-contribution pension materials; iDeCo official statistics; each plan, operator, fund, and trustee's statutory disclosures.]

### なぜ役割分離が重要か

| 読み方 | 含意 |
|---|---|
| 投資判断 は 運用機関 にある | 信託銀行ではなくアセットマネージャーが、銘柄を選び議決権を行使する（議決権行使ガイドラインに従って） |
| 資産保管 は 資産管理機関 にある | 信託銀行は「信託口」名義で保有する — 発行体の株主名簿に表示される |
| 受託者責任 の分割 | 信託銀行は資産安全性の受託者責任を負い；アセットマネージャーは投資判断の受託者責任を負う |
| 議決権の権限 | アセットマネージャーの議決権行使ガイドラインに従って機能し、信託銀行によって機械的に執行される |
| 加入者残高（DC） | 運営管理機関 で保有される — ただし基礎となる 投信 の保有は 受託会社 として信託銀行にある |

出典: ^[GPIF operating materials for GPIF roles; MHLW DB / DC materials and fund statutory documents for private-plan roles. A nominee row alone does not identify the underlying mandate.]

この分離が、「MTBJ + CBJ」がすべての TOPIX 発行体の筆頭株主として表示されることが、統一された議決権ブロックとして読まれ得ない構造的理由である。

### 年金レイヤー横断の競争マップ

| 年金層 | 権限のある役割のソース | 指定プロバイダーの証拠 |
|---|---|---|
| GPIF | GPIFの運用形態と現在の任命開示 | 機関と役割を命名した GPIF 出版物 |
| 企業DB | 規約、計画規則、スポンサー/計画の開示 | 計画、スポンサー、受託者、またはプロバイダーの発表 |
| 企業型DC | 法令、計画規則、運営者および製品の文書 | スポンサー/運営者/ファンドの法定開示 |
| iDeCo | iDeCo/厚生労働省の公式ルールと運営者向け資料 | 現在の事業者と製品の開示 |

出典: ^[GPIF, MHLW, and iDeCo official materials listed in the frontmatter.]

### 信託銀行横断の年金マンデート競争

| 機関の主張 | 最低限の公的証拠 |
|---|---|
| GPIFの任命 | 現在の GPIF の開示機関と役割の名称 |
| 企業DBの任命 | 指定されたプラン/スポンサー/受託者の一次情報源 |
| DC運営管理者の役割 | 現在の厚生労働省/事業者登録または正式な計画資料 |
| 基金の受託者の役割 | 特定のファンドの現在の目論見書/信託証書 |
| 相対的なスケールまたは「メジャー/限定」ラベル | 比較される母集団をカバーする、同じ周囲、同じ期間の公開データ |

出典: ^[GPIF, MHLW, FSA, plan, and fund primary documents. Group affiliation does not establish a pension mandate.]

### なぜ MTBJ + CBJ が資産管理を支配するか

| 考えられる説明 | 出版前に必要な証拠 |
|---|---|
| 規模の経済性 | 同等のコスト、量、サービス範囲の開示 |
| 選定履歴 | 日付付きの GPIF または計画調達/任命記録 |
| アウトソーシング体制 | 指定受託者/管理者の合意または発表 |
| 手数料のメリット | 公開された料金表または契約の証拠 |
| 規制/インフラの壁 | 現在の FSA ライセンスとインフラストラクチャへの参加要件 |

出典: ^[GPIF procurement / appointment disclosures; FSA and infrastructure rules. The public record does not support “default winner” or pricing-power claims without additional evidence.]

## 4. 手数料・収益構造

| 料金欄 | 公的な証拠ルート | 掲載ルール |
|---|---|---|
| 投資運用料 | 開示または基金法定文書の義務化 | 企業全体の料金を推測しないでください |
| 資産管理手数料 | 公の場での義務/調達開示 | 未公開の契約条件を未公開として扱う |
| DC・iDeCo加入者手数料 | 現在の運営者と公式商品料金ページ | レコード取得日と条件 |

出典: ^[GPIF procurement disclosures, fund statutory documents, and official DC / iDeCo operator fee pages.]

銀行ごとの粒度の細かい手数料分析については [[banking/trust-bank-fee-structure-comparison|trust bank fee structure comparison]] を参照。

### 規制枠組み

| 法令 / 規制当局 | 範囲 |
|---|---|
| 厚生年金保険法 + 国民年金法 | 公的年金、GPIF 設立の根拠 |
| 独立行政法人通則法 + GPIF 個別法 | GPIF のガバナンスとオペレーティング枠組み |
| 確定給付企業年金法 | 企業 DB プラン |
| 確定拠出年金法 | 企業型 DC + iDeCo |
| 信託業法 + 銀行法 | 年金信託受託 のための信託銀行ライセンス |
| 金商法（投信受託 / カストディ ops） | 投信受託会社 / カストディの基準 |
| 厚生労働省監督指針 | 年金プランの監督 |
| 金融庁監督指針（信託業 + 信託銀行） | 信託銀行の監督 |
| GPIF 投資原則 / スチュワードシップ原則 | GPIF 固有のガバナンス / スチュワードシップ |
| 個人情報保護法 + 金融分野ガイドライン | 加入者データの保護 |

出典: ^[GPIF, MHLW, FSA trust-business list, and the statutes / official guidance identified in the table.]

### 受託者責任の配分

| 当事者 | 受託者責任の範囲 |
|---|---|
| アセットマネージャー（運用機関） | 投資判断の責任: ポートフォリオ構築、銘柄選択、議決権行使の意見 |
| 信託銀行（資産管理機関 / 受託金融機関） | 資産安全性の責任: 保管、分別管理、正確な記録管理、機械的な議決権行使の執行 |
| DC 運営管理機関 | 加入者口座の受託者責任: 正確なレコードキーピング、公正なメニュー提供、引出しのコンプライアンス |
| プランスポンサー（企業 DB / DC） | プラン設計の受託者責任: プラン規則、拠出水準、ガバナンス |

### 会計上の取扱い

| 項目 | 認識される場所 |
|---|---|
| 年金プラン信託資産 | 信託銀行にとってはオフバランス；年金プラン / GPIF にとってはオンバランス |
| 年金信託管理手数料 | 信託銀行の損益計算書での収益 |
| 年金プラン加入者残高（DC） | 運営管理機関 の記録で保有；投信受取債権 + 現金で裏付け |
| 年金プランの拠出（DB） | 信託銀行ではなく、プラン / スポンサーにて |

## 6. JASDEC / 清算インフラへの接続

```
┌──────────────────────────────────────────────────────────────────────┐
│ 年金プラン・レイヤー                                                   │
│ - GPIF（約 ¥250兆）                                                    │
│ - 企業 DB（多数の plans）                                              │
│ - 企業型 DC + iDeCo（多数の plans、加入者口座）                        │
└────────────┬────────────────────────────────────────────────────────┬─┘
             │ マンデート                                              │ 加入者管理（DC）
             ▼                                                         ▼
┌────────────────────────────────┐                          ┌─────────────────────────┐
│ 運用機関（アセットマネージャー）│                          │ DC 運営管理機関（DC ops） │
│ — JP-AM + 外貨-AM                │                          │ — 三菱 UFJ 信託 DC、     │
│ — 裁量的な投資                   │                          │   SMTB DC、みずほ信託    │
│   判断 + 議決権行使の意見        │                          │   DC、野村、大和、       │
└────────────┬───────────────────┘                          │   SMBC 日興、NRK         │
             │ 取引指図                                       └─────────────────────────┘
             ▼
┌──────────────────────────────────────────────────────────────────────┐
│ 資産管理機関 / 受託金融機関（信託銀行）                                │
│ — MTBJ + CBJ（カストディ専業ユーティリティ）                          │
│ — 三菱 UFJ 信託 / SMTB / みずほ信託（フルサービス + 管理）             │
│ — 農中信託（協同組織金融）                                            │
└─┬────────────┬────────────┬───────────────┬────────────────────────┬─┘
  │            │            │               │                        │
  ▼            ▼            ▼               ▼                        ▼
┌───────────┐┌─────────────┐┌──────────────┐┌──────────────────────┐┌─────────────────┐
│ JASDEC    ││ JSCC        ││ BoJ JGB      ││ グローバル・          │ │ ICJ / 議決権    │
│ CP、投信）││             ││ 決済）       ││ の BNY / ステート・   │ │ （議決権執行）  │
│           ││             ││              ││ ストリート / JPM /    │ │                 │
│           ││             ││              ││ シティ）              │ │                 │
└───────────┘└─────────────┘└──────────────┘└──────────────────────┘└─────────────────┘
```

### 年金マンデートの外貨資産レッグ年金マンデートが外国株式 / 債券 / オルタナティブを含む場合:

年金の義務に外国株式/債券/オルタナティブが含まれる場合:

```
年金プラン
  → 運用機関（アセットマネージャー）
    → 資産管理機関（MTBJ / CBJ / メガバンク信託銀行）
      → 外貨サブカストディアン（BNY / ステート・ストリート / JPM / シティ・ジャパン）
        → 外国市場の現地サブカストディアン
          → 現地 CSD または ICSD
```

## Related

- [[banking/INDEX]]
- [[banking/master-trust-bank-operating-model]]
- [[banking/custody-bank-operating-model]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/japan-trust-bank-custody-map]]
- [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[banking/trust-bank-fee-structure-comparison]]
- [[banking/jasdec-settlement-operations]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[trust-banks/master-trust-bank]]
- [[trust-banks/custody-bank]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mizuho-trust-bank]]
- [[trust-banks/smbc-trust-bank]]
- [[trust-banks/nochu-trust-bank]]
- [[life-insurers/nippon-life]]
- [[life-insurers/dai-ichi-life]]
- [[life-insurers/meiji-yasuda]]
- [[foreign-financial-institutions/bny-mellon-japan]]
- [[foreign-financial-institutions/state-street-japan]]
- [[foreign-financial-institutions/jpmorgan-japan]]
- [[foreign-financial-institutions/citigroup-japan]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[finance/japan-listed-financial-groups-investable-universe]]

## Sources

- GPIF: 公式サイト、運用形態ページ、英語サマリー。
- 厚生労働省: 企業年金政策ページ。
- 日本マスタートラスト信託銀行: 公式サイト。
- 日本カストディ銀行: 公式サイト。
- 信託協会: 信託銀行の説明、信託財産統計。
- 企業年金連合会: 企業年金データ。
- 投資信託協会: 投資信託統計。
- FSA: 信託業金融機関一覧。
- 信託協会・生命保険協会・JA共済連「企業年金（確定給付型）の受託概況（令和5年3月末現在）」（DB 資産残高 66兆238億円 / DB+厚生年金基金 合計 80兆5,006億円）: https://www.shintaku-kyokai.or.jp/archives/013/202305/NR20230530-1.pdf
- 運営管理機関連絡協議会「確定拠出年金統計資料（2024年3月末）」（企業型DC 22兆7,880億円 / iDeCo 6兆1,883億円）: https://www.ideco-koushiki.jp/library/pdf/statistics_202403.pdf
