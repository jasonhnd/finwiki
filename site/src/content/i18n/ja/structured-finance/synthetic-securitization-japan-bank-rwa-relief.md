---
source: structured-finance/synthetic-securitization-japan-bank-rwa-relief
source_hash: b48f54355b9c15fc
lang: ja
status: machine
fidelity: ok
title: "日本における合成証券化 — 参照ローンポートフォリオに対する CLN / CDS を通じた銀行 RWA 救済"
translated_at: 2026-06-03T00:53:08.306Z
---

# 日本における合成証券化 — 参照ローンポートフォリオに対する CLN / CDS を通じた銀行 RWA 救済

## 要約

合成証券化 — 銀行が裏付けとなるローンを売却せずに、**クレジット・デフォルト・スワップ (CDS)** または **クレジット・リンク・ノート (CLN)** 構造を介して、参照ローン・ポートフォリオの信用リスクを外部投資家に移転する方法 – は、銀行のバランスシート上の **リスク加重資産 (RWA) 救済**のための最新のバーゼル III ツールです。日本では、3 つのメガバンク ([[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMFG]]、[[megabanks/mizuho-fg|Mizuho FG]]) が、**企業融資**、**プロジェクト ファイナンス**、**インフラストラクチャ ファイナンス** ポートフォリオの資本を解放するために合成証券化を選択的に使用してきました。欧州のピアバンクとの取引の流れと比較すると、日本のメガバンクの合成SRT（重要リスク移転）発行は規模が小さく、頻度も低い。日本の銀行は歴史的に十分な資本バッファーを持っており、RWA救済取引は断続的にしか必要としてこなかった。投資家ベースは、世界的な専門的なクレジット投資家ファンド（ヘッジファンド、ストラクチャード・クレジット・ファンド、一部の年金基金）によって占められており、ジュニアまたはメザニンのリスク移転トランシェを吸収することができます。 [[structured-finance/credit-rating-methodology-jcr-r-and-i|FSA capital-relief approval]] では、取引には、特定の会計および資本テストの下で真の信用リスク移転を証明することが求められています。

## ウィキ上の位置づけ

このエントリは、**銀行資本管理** 証券化ノードとして [[structured-finance/INDEX|structured-finance index]] の下にあります。 [[structured-finance/japan-abs-market-overview|Japan ABS market overview]] (合成の代替としての実際の販売 ABS)、法的構造レイヤーの [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]、および基礎となるクレジット デリバティブ インフラストラクチャの [[derivatives/japan-cds-market-overview|Japan CDS market overview]] に対して読み取ります。システムフレーム: [[finance/INDEX|finance index]] (より広範な銀行資本コンテキスト用)、および機関アンカー: [[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMFG]]、[[megabanks/mizuho-fg|Mizuho FG]]。

## 1。問題 — 融資の増加に対する銀行資本の制約

バーゼル III 規則に基づき、銀行は融資帳簿の信用リスクに対して規制上の自己資本を保持する必要があります。
- 法人ローンは通常、50～100%+のリスクウェイトを持ちます（借り手の格付けによって異なります）。
- 資本比率 (CET1, Tier 1, Total) が最大レバレッジを設定します
- 低格付けの借り手に対する高品質の融資は、高格付けの借り手よりも多くの資本を消費します

特定のセクターまたは地域（インフラストラクチャへのプロジェクトファイナンス融資、レバレッジドファイナンス企業向け融資、新興国市場への貿易金融など）で融資額を拡大しようとしているメガバンクの場合、**RWA の制約が資金調達の制約よりも優先される可能性があります**。

## 2。 RWA救済への2つの道

| 経路 | 仕組み | トレードオフ |
|---|---|---|
| **本物の証券化** | 裏付けとなるローンを SPV に売却する。ローンが貸借対照表から離れる | 顧客関係への影響。サービス引き継ぎ。会計/開示が複雑になる可能性がある |
| **合成証券化** | 貸付金を貸借対照表に載せておく。信用リスクは CDS / CLN 経由でのみ移転します | 顧客との関係は維持されます。運用上の引き継ぎがより簡単になります。しかし、資本救済はリスク移転の規制上の承認に依存します |

ほとんどの大規模銀行と顧客の関係（銀行が将来の融資、アドバイザリー、クロスセルのために関係を維持したい場合）では、合成証券化が好まれます。これにより、顧客向けローンを維持しながら資本を軽減できます。

## 3. Synthetic securitisation structure

```
+---------------------------------+
|       発信銀行          |
|  - リファレンスローンを保有         |
|     貸借対照表上のポートフォリオ  |
|  - 保障保険料を支払う      |
+----+----------------------+----+
          |                                            |
   CDS/CLN 資本救済
   保護 (FSA 承認済み)
   プレミアムSRT）
          |
     v
+----+----------------------------+
|   プロテクション販売型 SPV       |
|    または直接投資家          |
|  - 発行による担保資金の調達 |
|     投資家へのCLNトランシェ  |
|  - ベアーズリファレンスポートフォリオ    |
|     定義された信用損失まで   |
|     アタッチメントポイント            |
+----+----------------------+----+
          |                                            |
   ジュニアトランシェ シニアトランシェ
   (最初の損失から (より高い損失)
    投資家）別紙）
          |                                            |
     v                      v
+----+-------+    +---------+--------+
|スペシャリスト  |        |年金 /         |
|信用基金 |        |保険会社/以下    |
|(ヘッジファンド)|        |リスク許容度の高い投資 |
+------------+    +------------------+
```

主要な構造要素:
- **参照ポートフォリオ**: 定義された銀行ローンのプール (例: 100 ～ 300  指定された法人借り手、プロジェクト ファイナンス ローンのポートフォリオ、貿易金融ローンなどのテーマ別バスケット)
- **トランチング**: 通常、ジュニア/ファースト・ロス・トランシェ(最も高価な保護だが、資本救済のメリットが最も大きい)、メザニン・トランシェ、およびシニア・トランシェ(多くの場合、銀行が保有するか、低リスク投資家に売却される)
- **資金提供ありと資金なし**: CLN は「資金提供」されています (投資家は現金を前払いし、SPV は担保を保持します)。 CDS は「資金提供なし」にすることができます (二国間、取引相手の信用リスクに関する考慮事項が適用されます)
- **期間**: 通常、ローン ポートフォリオの平均耐用年数に一致する 5 ～ 7  年
- **参照義務**: 通常は静的プール、場合によっては補充可能なプール

## 4。 FSA 資本救済承認 - 構造テスト

組成銀行が合成証券化を **真のリスク移転**としてカウントする (したがって RWA の削減を受ける) には、取引が規制上のテストを満たしている必要があります。
- 重大なリスク移転 (SRT) 要件 - 重大な信用リスクが銀行のバランスシートから除外されている必要があります
- 銀行は不均衡な保留トランシェ/初回損失を保留してはなりません
- プロテクション販売者 (SPV / カウンターパーティ) は、販売するプロテクションに関して信頼できる必要があります。
- 会計処理はリスク移転を反映する必要があります (または、バーゼルで許可されている特定の非連結処理が必要です)

FSA は、SRT 準拠に関して各取引を個別に審査します。これは意味のある構造的摩擦であり、EU市場で機能する取引は日本の承認のために調整が必要になる可能性がある。

## 5。日本のメガバンクの合成SRT活動

日本のメガバンクのシンセティック SRT 発行は、ヨーロッパのピアバンクに比べて**規模が小さく、頻度も低い**です。
- 欧州の銀行 (BNP パリバ、ドイツ銀行、サンタンデール、クレディ・アグリコル、バークレイズなど) は 10 年以上にわたって合成 SRT のヘビーユーザーであり、数十億ユーロ規模の取引が頻繁に行われています。
- 日本のメガバンクは、次のような理由から、合成構造をより選択的に使用してきました。
  - 自己資本比率は規制上の最低水準を余裕で上回っている
  - 融資の伸びは緩やかで、継続的な資本救済取引の流れは必要ない
  - 文化的/人間関係の要因により、貸借対照表上で目に見える形でローンを保持することが有利になる
- メガバンクが合成 SRT 取引を発行する場合、参照ポートフォリオは、中核となる国内企業向け融資ではなく、**プロジェクト ファイナンス ローン、インフラストラクチャ ローン、レバレッジド ファイナンス コーポレート ローン、または特定の地理的エクスポージャー ブック**となる傾向があります。

バーゼルの最終決定（バーゼルIII/IV、アウトプットフロア）により、資本の充実した銀行に対しても資本圧力が高まる中、市場は近年成長しています。

## 6. 投資家ベース

プロテクションの売り手側は以下によって支配されます。
- **専門的なクレジット投資家ファンド** (ヘッジ ファンド、ストラクチャード クレジット ファンド、専用の SRT 投資家ファンド)
- **年金基金および保険会社** (一部) より上級のトランシェ向け
- **政府系ファンド**による厳選された高額取引
- **ファンド・オブ・ファンズ** 投資家のコミットメントを集約する手段

合成 SRT に対する日本の投資家ベースは小規模です。ほとんどの投資家は、ロンドン、ニューヨーク、または香港のオフィスから SRT 取引を予約する米国/EU チームを持つ世界的な企業です。

## 7. Comparison to true-sale ABS

| 次元 | 本物のABS | 合成証券化 |
|---|---|---|
| ローンの所有権 | SPVに移籍 | 銀行が保管 |
| 顧客との関係 | サービサー管理（多くの場合、元の銀行に戻されます） | 完全に保持 |
| 資本救済 | フル（オフバランスローン） | 部分的（RWA削減） |
| Funding | はい（売上による現金） | なし（または部分的に資金提供された CLN 構造による） |
| 運用の複雑さ | 高額（ローン譲渡、サービサー引き継ぎ） | 低額（ローン移籍なし） |
| 投資家ベース | 銀行、保険会社、広範な債券 | 専門の信用基金 (多くの場合、米国/EU) |
| 税務・会計 | 実売会計 | デリバティブベースの会計 |
| 典型的な用途 | 資金＋資本 | 資本のみ |

人間関係に敏感な企業融資帳簿上の純粋な RWA 管理の場合、合成は明確な選択です。消費者ローンの詳細な帳簿に基づいて資金を多様化するには、実際の販売が明確な選択です。

## 8。最近のイラストテーマ (説明のみ)

特定の取引の名前は挙げませんが、日本のメガバンクの総合証券化発行における最近のテーマは次のとおりです。
- **プロジェクト ファイナンスおよびインフラストラクチャ ローン ポートフォリオ** - これらのローンは高額で資本集約的であるため便利です
- **レバレッジド・ファイナンス企業向け融資ポートフォリオ** — 資本集約的であり、ファンド投資家が喜んで引き受ける景気循環的な信用エクスポージャーを伴う
- **国境を越えた貿易金融ポートフォリオ** — 多くの場合、政治リスク加重融資のための規制資本主導型
- **ESG関連のバリアント** — 持続可能性の指標に関連する構造への関心の高まり

バーゼルの最終決定発効日が近づくにつれて、新規発行のペースは増加しています。

## 9. 反対論点

- **「規制資本裁定取引」** — 批評家は、留保部分と初回損失ポジションが規制比率に適合するように構成されている場合、銀行のリスクプロファイルを大幅に変更することなく、報告される自己資本比率を最適化するために合成 SRT を使用できると主張
- **「専門投資家への集中」** — SRT の投資家ベースは小さい。世界のSRT投資家資本が逼迫すれば、日本のメガバンクは経済的に新規発行に苦戦する可能性がある
- **「FSA 承認の摩擦」** — ケースバイケースの SRT 承認プロセスにより、執行の不確実性が生じます。承認中に取引が再構築される可能性があり、経済に影響を与える
- **「未積立構造における取引先信用リスク」** — 未積立 CDS 構造により、銀行はプロテクションの売り手に対する信用リスクにさらされます。資金提供された CLN 構造はこれを回避しますが、より大きな投資家資本を必要とします
- **「テールリスク移転が疑問視されている」** — 深刻な信用ストレスにおいて、SPV/ファンドの取引相手が実際に保険金を支払うことができるかどうかは大きな懸念事項です。 AIG流のプロテクション売りの失敗は典型的な例だ
- **「限定的な公開」** — 合成 SRT 取引は多くの場合、公表されないか、柱 3  開示で意図的に曖昧な用語で説明されているため、市場分析が困難になります。

## 10. 未解決の論点

- バーゼル最終決定圧力下における日本のメガバンクのシンセティックSRT発行ペース（出力下限発効日など）
- [[regional-banks/japan-post-bank|Japan Post Bank]] または大手地方銀行が合成 SRT を発行するかどうか (これまでのところ、活動はメガバンクに集中しています)
- FSA の承認プロセスが時間の経過とともにより標準化され、構造上の摩擦が軽減されるかどうか
- 日本の機関投資家（生命保険会社、年金基金）が合成SRT取引のシニアトランシェへの意欲を高めるかどうか
- 合成 SRT と [[structured-finance/aircraft-leasing-financing-japan-shosha|aircraft]] / [[structured-finance/ship-financing-japan-megabank|ship]] / [[structured-finance/project-finance-spv-japan-renewable|project-finance]] ローンブックとの相互作用 — 資本集約型の特殊ローン ポートフォリオが自然な候補です
- ESG関連の合成SRT構造の扱いと、それらが規制や投資家の需要の牽引力を獲得するかどうか

## 関連項目

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[structured-finance/abcp-conduit-japan-megabank|ABCP conduit]]
- [[structured-finance/repackaging-note-japan|repackaging note]]
- [[structured-finance/japan-clo-issuance-japanese-banks|Japan CLO investment]]
- [[structured-finance/aircraft-leasing-financing-japan-shosha|aircraft leasing financing]]
- [[structured-finance/ship-financing-japan-megabank|ship financing]]
- [[structured-finance/project-finance-spv-japan-renewable|renewable project finance]]
- [[structured-finance/infrastructure-finance-spv-japan|infrastructure finance SPV]]
- [[structured-finance/npl-securitization-japan|NPL securitisation Japan]]
- [[structured-finance/fitch-moody-sp-japan-criteria|Fitch/Moody's/S&P Japan criteria]]
- [[derivatives/japan-cds-market-overview|Japan CDS market overview]]
- [[finance/INDEX|finance index]]・[[finance/japan-leveraged-buyout-economics|Japan LBO economics]]
- [[real-estate-finance/INDEX|real-estate-finance index]]
- [[policy-finance/japan-project-finance-stack-diagram|Japan project finance stack]]
- [[megabanks/mufg|MUFG]]・[[megabanks/smfg|SMFG]]・[[megabanks/mizuho-fg|Mizuho FG]]
- [[cooperative-banks/norinchukin|Norinchukin]]・[[regional-banks/japan-post-bank|Japan Post Bank]]・[[financial-regulators/japan-exchange-group|JPX]]

## 出典

- FSA capital-adequacy framework disclosures
- Megabank IR / Pillar 3 disclosures — MUFG (https://www.mufg.jp/english/), SMFG (https://www.smfg.co.jp/english/), Mizuho FG (https://www.mizuho-fg.com/index.html)
- BOJ Financial System Report — https://www.boj.or.jp/en/
- JCR / R&I credit-linked note rating commentaries
- BIS Basel framework documentation — https://www.bis.org/

---

> [!info] 校核状态
> 確度: **高い可能性**。Synthetic SRT の仕組み、バーゼル規制上の要件、日本のメガバンクの欧州同業比での相対的な活動状況は、BIS 論文や銀行 IR 開示で十分に文書化されている。日本のメガバンクによる個別取引は、公開開示が案件レベルでは意図的に曖昧にされることが多いため、抽象化して扱う。欧州同業との比較は、業界で標準的に議論される論点である。
