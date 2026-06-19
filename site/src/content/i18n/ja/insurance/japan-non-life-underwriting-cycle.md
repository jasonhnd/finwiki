---
source: insurance/japan-non-life-underwriting-cycle
source_hash: f783c8f2669e4cef
lang: ja
status: machine
fidelity: ok
title: "Japan non-life underwriting cycle"
translated_at: 2026-06-19T06:09:18.186Z
---

# Japan non-life underwriting cycle

## Wiki route

This entry sits under [[insurance/INDEX|insurance index]] and is the underwriting-cycle deep dive for Japanese non-life insurers. Read it together with [[insurance/japan-nonlife-big-three|Japan non-life big three]] for the entity-level routing, with [[insurance/natcat-reinsurance-japan|nat-cat reinsurance Japan]] for the catastrophe pricing layer, with [[insurance/earthquake-insurance-public-private-scheme|earthquake insurance public-private scheme]] for the household earthquake carve-out, with [[insurance/economic-value-based-solvency|economic-value-based solvency]] for the regulatory frame, with [[insurance/global-solvency-framework-comparison-matrix|global solvency framework matrix]] for cross-jurisdiction comparison, with [[insurance/japan-iaig-ics-mapping|Japan IAIG-ICS mapping]] for the group-level supervisory layer, and with [[insurance/insurance-agency-and-brokerage-japan|agency and brokerage Japan]] for the distribution layer that drives expense ratios.

オペレーティングカンパニー単位のルーティングは [[non-life-insurers/tokio-marine-nichido-fire|Tokio Marine & Nichido Fire]]、[[non-life-insurers/mitsui-sumitomo-insurance|Mitsui Sumitomo Insurance]]、[[non-life-insurers/aioi-nissay-dowa-insurance|Aioi Nissay Dowa Insurance]]、[[non-life-insurers/sompo-japan-insurance|Sompo Japan Insurance]] を通る。ホールディングカンパニー単位のルーティングは [[non-life-insurers/tokio-marine|Tokio Marine]]、[[non-life-insurers/msad|MS&AD]]、[[non-life-insurers/sompo|Sompo]] を通る。免許の文脈は [[financial-licenses/insurance-license-and-solvency|insurance license and solvency route]] にある。

## TL;DR

日本の損保引受サイクルは、3 つのプロダクトライン・ダイナミクスに支配される：階級別料率改革レジームのもとでの自動車の料率妥当性、巨大災害ロードの増大のもとでの火災／財物の料率妥当性、そしてグローバル市況から輸入されるスペシャルティライン・サイクル・ダイナミクス（サイバー、D&O、海上）である。オペレーティングカンパニー単位のコンバインドレシオは、損害率（既払保険金 + 準備金変動 / 経過保険料）に事業費率（新契約費 + 維持費 / 経過保険料）を加えたものに分解される。100%を下回るコンバインドレシオは引受利益を、100%を上回るものは投資収益で相殺される（あるいはされない）引受損失を示す。

ビッグ 3 のオペレーティング・エンティティ ── [[non-life-insurers/tokio-marine-nichido-fire|Tokio Marine & Nichido Fire]]、MS&AD 傘下の [[non-life-insurers/mitsui-sumitomo-insurance|Mitsui Sumitomo Insurance]] + [[non-life-insurers/aioi-nissay-dowa-insurance|Aioi Nissay Dowa Insurance]]、および [[non-life-insurers/sompo-japan-insurance|Sompo Japan Insurance]] ── は同一の国内市場構造を共有するが、プロダクトラインの構成、チャネル集中度、海外収益による相殺、再保険調達戦略において異なる。

再保険調達のタイミングは重要である：4 月 1 更改が日本国内の支配的な再保険特約サイクル（日本の会計年度に整合）であり、年央および 1 月の更改も関連する。グローバル再保険におけるハードマーケットとソフトマーケットのサイクルは、日本の火災／財物および巨大災害の料率設定に直接波及する。

## Combined-ratio decomposition

| Component | Definition | Typical drivers |
|---|---|---|
| Loss ratio | （発生損害額 + 損害調査費）/ 経過保険料 | 頻度、severity、巨大災害事象、準備金の発展 |
| Expense ratio | （新契約費 + 営業費）/ 経過保険料 | 代理店手数料、支店の間接費、IT 投資、コンダクト・コンプライアンスの間接費 |
| Combined ratio | 損害率 + 事業費率 | 投資収益を含まない |

95%のコンバインドレシオは、投資収益控除前で、経過保険料 1 円あたり 5 パーセントポイントの引受利益を意味する。コンバインドレシオはプロダクトライン別 ── 自動車、火災、海上、傷害／賠償責任（GL）、傷害、その他 ── に分解される。巨大災害年のコンバインドレシオは、火災および海外財物ラインで 100%を大きく上回って跳ね上がり、非災害年には 100%を下回って反転しうる。

### Auto market structure

任意自動車保険は日本の損保にとって保険料ベースで最大のラインであり、別途運営される官民スキームである自動車損害賠償責任保険（自賠責保険）がこれを補完する。

### Tier-rating (型式別料率) reform

任意自動車市場は、損害保険料率算出機構（GIROJ）の参考純率の枠組みを通じて運営される型式別料率クラス制度を用いる。車両は、メーカー／車種／型式別に観測される保険金経験に基づいて料率クラスに割り当てられ、料率クラスは定期的に更新される。損害の大きい車両クラスはより高い基準保険料に直面し、損害の小さいクラスはより低い保険料に直面する。

改革に関連する論点：

- 型式別料率の更新サイクルは、参考純率のシグナルを保険金経験に合わせて調整する；
- ライドシェア、テレマティクスに基づく走行距離連動型保険（UBI）、および ADAS（先進運転支援）機能の採用は、基礎となる保険金頻度と severity を変化させる；
- 車両の電子機器、センサー、ADAS 部品が、頻度が低下しても平均的な保険金 severity を押し上げるため、修理費は上昇している；
- 型式別料率制度はこれらの変化に料率妥当性を整合させ続けることを目指すが、改革のペースは実際の経験に 1〜2 サイクル遅行しうる。

### Auto loss ratio drivers

| Driver | Direction | Mechanism |
|---|---|---|
| 高齢化する車両保有台数 | Mixed | 古い車両は再調達価値が低い一方で修理頻度が高いことがある |
| ADAS の採用 | 頻度低下、severity 上昇 | 衝突は減るが、各衝突の修理費が高くなる |
| テレマティクス／UBI | より安全な運転者の自己選択 | UBI 加入者の頻度を低下させる；内部補助の含意 |
| EV への移行 | 当初は severity 上昇 | バッテリー損傷費が高い；専門修理ネットワークが限定的 |
| 運転者の人口構成 | 高齢化する運転者基盤 | 頻度／severity のパターンが変化する |
| 修理工場のエコシステム | 集中度／価格設定 | 代理店／修理工場の関係が severity の結果に影響する |

ビッグ 3 の料率妥当性への対応には、更新された参考純率の利用、GIROJ 参考純率ガイダンスを超える社内プライシングティアの高度化、価格不足の代理店ブックに対するチャネル規律、再保険保有額の調整が含まれる。

### Auto expense ratio drivers

日本の自動車の販売チャネルは代理店主導（カーディーラー、修理工場、専業代理店）が強い。代理店手数料とコンダクト・コンプライアンスのコストが事業費率を構成する。直販のチャレンジャー（オンライン直販の自動車 P&C）は、より低い事業費率で競争し、特定の消費者セグメントでシェアを築いてきた。

### Fire / property structure

日本の火災保険は、住宅および商業財物を、火災、水濡れ、風災、その他の列挙された危険に対して補償する。家計の地震リスクは [[insurance/earthquake-insurance-public-private-scheme|public-private earthquake insurance scheme]] に切り出されている；商業地震財物は一般に民間で引き受けられ、しばしば巨大災害再保険と明示的なサブリミットを伴う。

### Catastrophe loading trends

台風、洪水、二次的危険の事象の複数年の経験が、火災／財物料率の度重なる上方修正を促してきた：

- 台風 Jebi（2018）、Faxai（2019）、Hagibis（2019）が大規模な保険損害を生じた；
- その後の台風・洪水シーズンがさらなる損害経験を加えた；
- GIROJ の参考純率の更新サイクルは、この経験を反映して上昇トレンドにある；
- 再保険の料率設定（グローバルなレトロ料率と日本固有の巨大災害経験に駆動される）は上昇トレンドにあり、出再者のリスク移転正味コストに直接波及している。

### Fire combined ratio dynamics

火災のコンバインドレシオは、非巨大災害年には単年度ベースで 100%を下回ることがある。主要な巨大災害年には、火災のコンバインドレシオは 100%を実質的に超えるのが通常であり、ホールディングカンパニーの結果を安定させるために再保険回収 + 過年度準備金の妥当性を要する。

ビッグ 3 の料率妥当性への対応には以下が含まれる：

- GIROJ の参考改定に沿った元受保険料率の引き上げ；
- 最も危険度の高いゾーンにおけるエクスポージャー集中の削減；
- 補償条件（免責金額、サブリミット、損害処理条件）の再構築；
- 再保険保有額と階層型カバー構造の調整；
- 不採算の代理店販売ブックの選択的撤退。

### Cyber

サイバー保険は、ランサムウェアのエクスポージャー、サプライチェーン攻撃、規制上の開示要件、法人顧客の需要に駆動される成長スペシャルティラインである。グローバルなサイバー市場サイクルは複数年サイクルでハード化／ソフト化している。日本のビッグ 3 オペレーティングカンパニーは、国内および国際子会社（特に HCC 等を通じた東京海上の海外スペシャルティ・フランチャイズ）の両方でサイバーを引き受ける。

サイバー引受サイクルのドライバー：

- ランサムウェア事象の頻度と severity；
- 規制上のサイバー開示の期待（日本、米国 SEC、EU）；
- サイバー損害分布のモデル成熟度（依然として発展途上）；
- サイバー危険の再保険キャパシティ（限定的；集中の懸念）。

### D&O

会社役員賠償責任はグローバルな D&O サイクルに従い、証券訴訟の頻度、規制上のエンフォースメント、コーポレートガバナンスの失敗に駆動される複数年のハード／ソフトサイクルを伴う。日本の D&O は、日本の証券法、コーポレートガバナンス・コード、上場会社の期待によって形作られる。

### Marine

海上保険（貨物、船体、P&I）はグローバルに取引されるスペシャルティラインである。日本の海上は、主要海運グループ（日本郵船、商船三井、川崎汽船）、商社の貨物フロー、ロイズを含むグローバルな船体／賠償責任シンジケートへの参加を中心に構成される。海上サイクルは、グローバルな貿易フロー、地政学的混乱（紅海の航路変更、制裁、制裁のエンフォースメント）、および事故経験に駆動される。

## Reinsurance procurement timing

日本の再保険特約は、日本の会計年度に整合した主たる 4 月 1 更改サイクルに従い、1 月と 7 月により小規模な更改がある。調達のダイナミクス：

| Element | Description |
|---|---|
| 4 月 1 更改 | 日本国内ブックの主たる出再者特約更改 |
| 1 月 1 更改 | グローバル市場の参照サイクル；料率設定のベンチマークに影響 |
| 年央更改 | 一部のラインとグローバル・レトロセッション |
| Reinsurance broker | 主要なグローバル・ブローカー（Aon、Guy Carpenter、Howden Re）が仲介 |
| Reinsurer panel | グローバル再保険会社（Munich Re、Swiss Re、Hannover Re、SCOR、Berkshire Re、ロイズ・シンジケート）および日本の再保険部門を含む分散されたパネル |
| Layered structure | 保有額の上に積まれる事象ごとの超過損害額（excess-of-loss）レイヤー、加えてアグリゲートカバー、加えて巨大災害レイヤー、加えてレトロセッション |
| Reinstatement premium | 巨大災害事象後にトリガーされる；正味コストの経済性に影響 |

ハードな再保険市場（大規模災害後）は料率を押し上げ、キャパシティを制約する。ソフトな再保険市場（低災害年の複数サイクル後）は料率を押し下げ、キャパシティを増加させる。日本の出再者は、国内の損害経験だけでなく、グローバルな市況に対して保有額の調整とレイヤーの購入のタイミングを計らねばならない。

## Investment-income offset and capital lens

損保の最終損益は、引受結果（コンバインドレシオ）に保険契約者フロートに対する投資収益を加え、税を控除したものに等しい。ソフトな引受サイクルでは、投資収益による相殺が緩やかな引受損失を吸収しうる；ハードなサイクルでは、投資収益の改善に引受の回復が加わり、ポジティブに複合する。

[[insurance/economic-value-based-solvency|economic-value-based solvency]] レジームのもとで、ESR は引受リスク（損保の巨大災害および非巨大災害）と市場リスク（株式、信用、金利）の双方を、統一された経済資本ベースで捕捉する。[[insurance/global-solvency-framework-comparison-matrix|global solvency framework matrix]] は規制資本のアーキテクチャを論じ、[[insurance/japan-iaig-ics-mapping|Japan IAIG-ICS mapping]] は同じグループ単位の資本が指定された IAIG について ICS のもとでどのように報告されるかを論じる。

## ESR cat-module sensitivity

[[insurance/economic-value-based-solvency|economic-value-based ESR]] レジームのもとでの損保巨大災害モジュールは、主要な日本の危険についてストレスシナリオを適用する：

| Peril | ESR cat-module treatment |
|---|---|
| 地震（商業財物） | 日本固有の地震エクスポージャーに較正された確率的ショックシナリオ |
| 台風 | 太平洋の台風経路分布を反映する風災・高潮シナリオ |
| 洪水／内水 | 河川氾濫および内水氾濫のシナリオ |
| 火山 | 該当する場合、降灰および火山泥流（ラハール）のシナリオ |
| 海外巨大災害 | 海外子会社の巨大災害エクスポージャーをグループ単位の資本に積み上げ |

家計の地震リスクは、[[non-life-insurers/japan-earthquake-reinsurance|Japan Earthquake Reinsurance]] を通じて運営される [[insurance/earthquake-insurance-public-private-scheme|public-private scheme]] に位置するため、構造的に民間損保の巨大災害モジュール感応度の外にある。商業地震および海外地震のエクスポージャーは民間であり、巨大災害モジュールに反映される。

巨大災害モジュールの資本賦課は、各ビッグ 3 グループが自社のバランスシートにどれだけの巨大災害リスクを保有できるか対外部再保険会社にどれだけ出再せねばならないかに直接影響する。したがって資本効率は、再保険のみ、または資本のみの意思決定ではなく、再保険と ESR の複合最適化に依存する。

## Group-level vs operating-company-level reading

よくある読み違いは、ホールディングカンパニーの統合報告書のコンバインドレシオの数値を、単一のオペレーティングカンパニーのコンバインドレシオであるかのように読むことである。各ビッグ 3 グループの構造は以下のとおり：

| Group | Operating-company combined ratios consolidated into group | Group-level adjustments |
|---|---|---|
| [[non-life-insurers/tokio-marine|Tokio Marine]] | [[non-life-insurers/tokio-marine-nichido-fire|TMNF]] 国内 + Philadelphia + HCC + Pure + ロイズ・シンジケート + その他 | 為替換算、連結消去、グループ再保険回収 |
| [[non-life-insurers/msad|MS&AD]] | [[non-life-insurers/mitsui-sumitomo-insurance|MSI]] + [[non-life-insurers/aioi-nissay-dowa-insurance|ADI]] 国内 + MS Amlin + 海外 | 為替換算、連結消去、グループ内再保険 |
| [[non-life-insurers/sompo|Sompo]] | [[non-life-insurers/sompo-japan-insurance|Sompo Japan Insurance]] 国内 + Sompo International + その他 | 為替換算、連結消去、グループ内再保険 |

日本国内のコンバインドレシオと海外のコンバインドレシオは、ある年に逆方向に動きうる（例：穏やかな日本の台風年と活発な米国大西洋ハリケーンシーズンの組合せ）。グループ単位の結果は分散加重のブレンドである。各グループにとって、分散効果は年により、また巨大災害事象が実際にどこに着地するかにより変動する。

### Tokio Marine Nichido Fire (under Tokio Marine HD)

- 保険料ベースで最大の単一国内損保オペレーティングカンパニー；
- 自動車、火災、海上、スペシャルティに分散；
- ホールディングカンパニーグループ（[[non-life-insurers/tokio-marine|Tokio Marine]]）は、相当な海外収益による相殺（Philadelphia Consolidated、HCC、Pure Group、ロイズ・シンジケート）の恩恵を受ける；
- 再保険調達は、海外子会社の分散を伴うグループ資本フレームワークの中で管理される。

### MS&AD operating companies — MSI and ADI

- [[non-life-insurers/mitsui-sumitomo-insurance|Mitsui Sumitomo Insurance]] と [[non-life-insurers/aioi-nissay-dowa-insurance|Aioi Nissay Dowa Insurance]] はともに [[non-life-insurers/msad|MS&AD]] 傘下の主要な国内オペレーティングカンパニー；
- ADI のモビリティ／トヨタ・フランチャイズは、独自の自動車ライン販売チャネルと顧客基盤を生み出す；
- MS Amlin がスペシャルティ／再保険のエクスポージャーに寄与する；
- 海外 P&C ポートフォリオがグループ収益を分散させる。

### Sompo Japan Insurance (under Sompo HD)

- [[non-life-insurers/sompo-japan-insurance|Sompo Japan Insurance]] は [[non-life-insurers/sompo|Sompo]] 傘下の唯一の主要な国内損保オペレーティングカンパニー；
- Sompo International が海外スペシャルティ／再保険に寄与する；
- 代理店チャネルと顧客説明コンダクトの論点は、近年の監督対話の一部となってきた；
- 国内の自動車および火災ラインがコアの保険料基盤であり続ける。

## Related

- [[insurance/INDEX]]
- [[insurance/japan-nonlife-big-three]]
- [[insurance/natcat-reinsurance-japan]]
- [[insurance/earthquake-insurance-public-private-scheme]]
- [[insurance/economic-value-based-solvency]]
- [[insurance/esr-economic-value-solvency]]
- [[insurance/global-solvency-framework-comparison-matrix]]
- [[insurance/japan-iaig-ics-mapping]]
- [[insurance/insurance-agency-and-brokerage-japan]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[insurance/foreign-life-affiliate-japan-positioning]]
- [[insurance/saison-automobile-fire]]
- [[non-life-insurers/tokio-marine]]
- [[non-life-insurers/msad]]
- [[non-life-insurers/sompo]]
- [[non-life-insurers/tokio-marine-nichido-fire]]
- [[non-life-insurers/mitsui-sumitomo-insurance]]
- [[non-life-insurers/aioi-nissay-dowa-insurance]]
- [[non-life-insurers/sompo-japan-insurance]]
- [[financial-licenses/insurance-license-and-solvency]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[INDEX|FinWiki index]]

## Sources

- General Insurance Association of Japan (日本損害保険協会): industry overview and statistics.
- General Insurance Rating Organization of Japan (損害保険料率算出機構, GIROJ): advisory pure-premium-rate publications.
- Tokio Marine Holdings: integrated and annual reports.
- MS&AD Holdings: integrated reports and disclosure library.
- Sompo Holdings: integrated and annual reports.
- FSA: 経済価値ベースのソルベンシー規制等について.
