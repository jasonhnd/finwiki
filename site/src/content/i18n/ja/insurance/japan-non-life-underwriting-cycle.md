---
source: insurance/japan-non-life-underwriting-cycle
source_hash: 517b493e054ea4d7
lang: ja
status: machine
fidelity: ok
title: "日本の損害保険引受サイクル"
translated_at: 2026-06-02T14:01:20.914Z
---
# 日本の損害保険引受サイクル

## ウィキ上の位置づけ

この項目は [[insurance/INDEX|insurance index]] の下に位置し、日本の損害保険会社における引受サイクルの深掘りである。事業体レベルのルーティングは [[insurance/japan-nonlife-big-three|Japan non-life big three]]、自然災害プライシング層は [[insurance/natcat-reinsurance-japan|nat-cat reinsurance Japan]]、家計地震保険の切り出しは [[insurance/earthquake-insurance-public-private-scheme|earthquake insurance public-private scheme]]、規制枠組みは [[insurance/economic-value-based-solvency|economic-value-based solvency]]、法域横断比較は [[insurance/global-solvency-framework-comparison-matrix|global solvency framework matrix]]、グループレベル監督層は [[insurance/japan-iaig-ics-mapping|Japan IAIG-ICS mapping]]、事業費率を左右する販売層は [[insurance/insurance-agency-and-brokerage-japan|agency and brokerage Japan]] とあわせて読む。

事業会社ルートは [[JapanFG/tokio-marine-nichido-fire|Tokio Marine & Nichido Fire]]、[[JapanFG/mitsui-sumitomo-insurance|Mitsui Sumitomo Insurance]]、[[JapanFG/aioi-nissay-dowa-insurance|Aioi Nissay Dowa Insurance]]、[[JapanFG/sompo-japan-insurance|Sompo Japan Insurance]] を通る。持株会社ルートは [[JapanFG/tokio-marine|Tokio Marine]]、[[JapanFG/msad|MS&AD]]、[[JapanFG/sompo|Sompo]] を通る。免許の文脈は [[JapanFG/legal-financial-licenses/insurance-license-and-solvency|insurance license and solvency route]] にある。

## 要約

日本の損害保険引受サイクルは、三つの商品ラインの力学に支配される。型式別料率制度改革下の自動車料率の十分性、自然災害ロードの増加を受けた火災 / プロパティ料率の十分性、そしてグローバル市場環境から輸入される specialty line（cyber、D&O、marine）のサイクルである。事業会社レベルのコンバインドレシオは、損害率（支払保険金 + 支払備金変動 / 既経過保険料）と事業費率（獲得費 + 管理費 / 既経過保険料）に分解される。コンバインドレシオが 100% を下回れば引受利益、100% を上回れば投資収益で相殺される、または相殺されない引受損失を示す。

三大事業会社、すなわち [[JapanFG/tokio-marine-nichido-fire|Tokio Marine & Nichido Fire]]、MS&AD 傘下の [[JapanFG/mitsui-sumitomo-insurance|Mitsui Sumitomo Insurance]] + [[JapanFG/aioi-nissay-dowa-insurance|Aioi Nissay Dowa Insurance]]、および [[JapanFG/sompo-japan-insurance|Sompo Japan Insurance]] は、同じ国内市場構造を共有するが、商品ライン構成、チャネル集中、海外収益による相殺、再保険調達戦略が異なる。

再保険調達のタイミングは重要である。4月 1  更改は、日本の国内再保険 treaty サイクルの中心であり、日本の会計年度と揃っている。年央更改と1月更改も関連する。グローバル再保険のハードマーケット / ソフトマーケットのサイクルは、日本の火災 / プロパティおよび自然災害プライシングへ直接波及する。

## コンバインドレシオの分解

| 構成要素 | 定義 | 典型的なドライバー |
|---|---|---|
| 損害率 | （発生損害 + LAE）/ 既経過保険料 | 頻度、損害額、自然災害、備金進展 |
| 事業費率 | （獲得費 + 営業費）/ 既経過保険料 | 代理店手数料、支店間接費、IT 投資、行為規制対応コスト |
| コンバインドレシオ | 損害率 + 事業費率 | 投資収益を含まない |

コンバインドレシオ 95% は、投資収益控除前で、既経過保険料1円当たり 5  パーセントポイントの引受利益を意味する。コンバインドレシオは、自動車、火災、海上、賠償責任 / GL、傷害、その他の商品ラインに分解される。自然災害年には、火災や海外プロパティラインでコンバインドレシオが 100% を大きく上回り、非災害年には 100% を下回る水準へ戻ることがある。

### 自動車市場構造

任意自動車保険は、日本の損害保険会社にとって保険料で最大の商品ラインであり、別に運営される官民制度である自動車損害賠償責任保険 / 自賠責保険がこれを補完する。

### 型式別料率改革

任意自動車市場では、損害保険料率算出機構（GIROJ）の参考純率枠組みに基づく型式別料率クラス制度が使われる。車両はメーカー / モデル / 型式ごとの実績損害に基づき料率クラスへ割り当てられ、料率クラスは定期的に更新される。損害の大きい車両クラスは高い基礎保険料となり、損害の小さいクラスは低い保険料となる。

改革に関連する要点は次の通りである。

- 型式別料率の更新サイクルは、実績損害に純率シグナルを合わせる。
- ライドシェア、テレマティクス型 UBI、ADAS（先進運転支援）機能の普及は、基礎となる事故頻度と損害額を変える。
- 車両の電子部品、センサー、ADAS 部品が平均損害額を押し上げ、頻度が下がっても修理費は上昇している。
- 型式別料率制度はこうした変化に料率十分性を合わせることを目指すが、改革の周期は実績に1〜2サイクル遅れる可能性がある。

### 自動車損害率のドライバー

| ドライバー | 方向 | メカニズム |
|---|---|---|
| 保有車両の高齢化 | 混在 | 古い車両は代替価値が低い一方、修理頻度が高い可能性がある |
| ADAS 普及 | 頻度低下、損害額上昇 | 衝突は減るが、1件当たり修理費は高くなる |
| テレマティクス / UBI | より安全な運転者の自己選択 | UBI 加入者の頻度を下げる。クロス補助への含意がある |
| EV 移行 | 初期的には損害額上昇 | バッテリー損傷コストが高く、専門修理網が限られる |
| 運転者人口動態 | 高齢運転者基盤 | 頻度 / 損害額のパターンが変化する |
| 修理工場エコシステム | 集中 / 価格設定 | 代理店 / 修理工場関係が損害額の結果に影響する |

三大社の料率十分性対応には、参考純率の更新利用、GIROJ の純率ガイダンスを超える内部価格階層の高度化、過小料率の代理店ブックに対するチャネル規律、再保険保有額の調整が含まれる。

### 自動車事業費率のドライバー

日本の自動車販売は代理店主導色が強い（カーディーラー、修理工場、専業代理店）。代理店手数料と行為規制対応コストが事業費率を形作る。オンライン直販自動車損保のようなダイレクト配信の挑戦者は、低い事業費率で競争し、特定の消費者セグメントでシェアを築いてきた。

### 火災 / プロパティ構造

日本の火災保険は、住宅および商業用不動産を火災、水災、風災、その他の記名危険から補償する。家計地震リスクは [[insurance/earthquake-insurance-public-private-scheme|public-private earthquake insurance scheme]] へ切り出される。商業用地震プロパティは一般に民間で引き受けられ、cat 再保険と明示的なサブリミットを伴うことが多い。

### 自然災害ロードのトレンド

台風、洪水、secondary peril の複数年にわたる実績は、火災 / プロパティ料率の繰り返し引き上げを促してきた。

- Typhoon Jebi（2018）、Faxai（2019）、Hagibis（2019）は大きな保険損害を生んだ。
- その後の台風・洪水シーズンも追加損害実績を積み上げた。
- GIROJ の参考純率更新サイクルは、この実績を反映して上昇傾向となった。
- 再保険価格は、グローバル retro-pricing と日本固有の cat 実績に動かされ、上昇傾向となり、出再会社の正味リスク移転コストへ直接反映された。

### 火災コンバインドレシオの力学

非災害年の火災コンバインドレシオは、単年度ベースで 100% を下回ることがある。大規模自然災害年には、火災コンバインドレシオが 100% を大きく上回ることが多く、持株会社の結果を安定させるには再保険回収と過年度備金の十分性が必要になる。

三大社の料率十分性対応には次が含まれる。

- GIROJ 参考純率改定に沿った元受保険料率の引き上げ。
- 最もハザードの高い地域でのエクスポージャー集中削減。
- 免責、サブリミット、保険金支払条件などの補償条件再設計。
- 再保険保有額とレイヤードカバー構造の調整。
- 収益性の低い代理店配信ブックからの選択的撤退。

### サイバー

サイバー保険は、ランサムウェア、サプライチェーン攻撃、規制上の開示要件、法人顧客需要により伸びる specialty line である。グローバルサイバー市場のサイクルは、複数年単位でハード化 / ソフト化する。三大日本事業会社は国内だけでなく、Tokio Marine の HCC など海外 specialty franchise を通じてもサイバーを引き受ける。

サイバー引受サイクルのドライバー：

- ランサムウェアイベントの頻度と損害額。
- 規制上のサイバー開示期待（日本、US SEC、EU）。
- サイバー損害分布モデルの成熟度（なお発展途上）。
- サイバー peril に対する再保険キャパシティ（限定的で集中懸念がある）。

### D&O

役員賠償責任保険はグローバル D&O サイクルに従い、証券訴訟頻度、規制執行、企業ガバナンス失敗に動かされる複数年のハード / ソフトサイクルを持つ。日本の D&O は、日本の証券法、コーポレートガバナンス・コード、上場会社への期待に形作られる。

### Marine

Marine insurance（貨物、船体、P&I）はグローバルに取引される specialty line である。日本の marine は、主要海運グループ（NYK、MOL、K-Line）、商社の貨物流、Lloyd's を含むグローバルな船体 / 賠償責任シンジケート参加を軸に構成される。marine サイクルは、グローバル貿易フロー、地政学的混乱（紅海ルート変更、制裁、制裁執行）、損害実績に動かされる。

## 再保険調達のタイミング

日本の再保険 treaty は、日本の会計年度に合わせた主要な4月 1  更改サイクルに従い、1月と7月にも小規模更改がある。調達力学は次の通りである。

| 要素 | 説明 |
|---|---|
| 4月 1  更改 | 日本国内ブックの主要な出再 treaty 更改 |
| 1月 1  更改 | グローバル市場の参照サイクル。価格ベンチマークに影響する |
| 年央更改 | 選択されたラインとグローバル retrocession |
| 再保険ブローカー | Aon、Guy Carpenter、Howden Re など主要グローバルブローカーが仲介 |
| 再保険者パネル | Munich Re、Swiss Re、Hannover Re、SCOR、Berkshire Re、Lloyd's syndicates、日本の再保険部門を含む分散パネル |
| レイヤード構造 | 保有額を超える1事故 excess-of-loss レイヤー、aggregate covers、catastrophe layers、retrocession |
| 復元保険料 | cat イベント後に発動し、正味コスト経済性に影響する |

ハード再保険市場（大規模 cat 後）は価格を押し上げ、キャパシティを制約する。ソフト再保険市場（低 cat 年が複数サイクル続いた後）は価格を押し下げ、キャパシティを増やす。日本の出再会社は、国内損害実績だけでなくグローバル市場環境を踏まえて、保有額調整とレイヤー購入のタイミングを合わせる必要がある。

## 投資収益による相殺と資本レンズ

損害保険会社の最終損益は、引受結果（コンバインドレシオ）に契約者 float の投資収益を加え、税金を差し引いたものになる。ソフトな引受サイクルでは、投資収益による相殺が小幅な引受損失を吸収できる。ハードサイクルでは、投資収益の改善と引受回復が正に複合する。

[[insurance/economic-value-based-solvency|economic-value-based solvency]] regime の下で、ESR は引受リスク（損保 cat および non-cat）と市場リスク（株式、信用、金利）を統一された経済資本ベースで捉える。[[insurance/global-solvency-framework-comparison-matrix|global solvency framework matrix]] は規制資本アーキテクチャを、[[insurance/japan-iaig-ics-mapping|Japan IAIG-ICS mapping]] は同じグループレベル資本が指定 IAIG の ICS の下でどう報告されるかを扱う。

## ESR cat モジュール感応度

[[insurance/economic-value-based-solvency|economic-value-based ESR]] regime の下の損保 cat モジュールは、日本の主要 peril についてストレスシナリオを適用する。

| Peril | ESR cat モジュール上の扱い |
|---|---|
| 地震（商業用プロパティ） | 日本固有の地震エクスポージャーに校正された確率論的ショックシナリオ |
| 台風 | 太平洋台風経路分布を反映した風災・高潮シナリオ |
| 洪水 / 内水 | 河川洪水および内水氾濫シナリオ |
| 火山 | 該当する場合、降灰および lahar シナリオ |
| 海外自然災害 | 外国子会社の cat エクスポージャーをグループレベル資本へ重ねる |

家計地震リスクは、[[insurance/earthquake-insurance-public-private-scheme|public-private scheme]] に置かれ、[[JapanFG/japan-earthquake-reinsurance|Japan Earthquake Reinsurance]] を通じて運営されるため、民間損保 cat モジュール感応度の外側に構造的にある。商業用地震と海外地震エクスポージャーは民間であり、cat モジュールに流入する。

cat モジュールの資本賦課は、各三大グループが自社バランスシート上でどれだけの自然災害リスクを保有でき、どれだけ外部再保険者へ出再しなければならないかに直接影響する。したがって資本効率は、再保険だけ、または資本だけの意思決定ではなく、再保険と ESR を組み合わせた最適化に依存する。

## グループレベルと事業会社レベルの読み分け

よくある読み違いは、持株会社の統合報告書にあるコンバインドレシオ数値を、単一事業会社のコンバインドレシオのように読むことである。三大グループそれぞれの構造は次の通りである。

| グループ | グループに連結される事業会社コンバインドレシオ | グループレベル調整 |
|---|---|---|
| [[JapanFG/tokio-marine|Tokio Marine]] | [[JapanFG/tokio-marine-nichido-fire|TMNF]] 国内 + Philadelphia + HCC + Pure + Lloyd's syndicate + その他 | FX 換算、連結消去、グループ再保険回収 |
| [[JapanFG/msad|MS&AD]] | [[JapanFG/mitsui-sumitomo-insurance|MSI]] + [[JapanFG/aioi-nissay-dowa-insurance|ADI]] 国内 + MS Amlin + 海外 | FX 換算、連結消去、グループ内再保険 |
| [[JapanFG/sompo|Sompo]] | [[JapanFG/sompo-japan-insurance|Sompo Japan Insurance]] 国内 + Sompo International + その他 | FX 換算、連結消去、グループ内再保険 |

ある年度には、国内日本のコンバインドレシオと海外コンバインドレシオが逆方向に動くことがある（例：日本の台風が穏やかな年と、米国大西洋ハリケーンが活発な年の組み合わせ）。グループレベルの結果は分散効果で加重されたブレンドである。各グループの分散効果は、年ごと、また自然災害イベントが実際にどこで発生するかによって変わる。

### Tokio Marine Nichido Fire（Tokio Marine HD 傘下）

- 保険料規模で最大の単一国内損害保険事業会社。
- 自動車、火災、marine、specialty に分散している。
- 持株会社グループ（[[JapanFG/tokio-marine|Tokio Marine]]）は、Philadelphia Consolidated、HCC、Pure Group、Lloyd's syndicate などの大きな海外収益による相殺を持つ。
- 再保険調達は、海外子会社分散を含むグループ資本枠組みの中で管理される。

### MS&AD 事業会社 — MSI と ADI

- [[JapanFG/mitsui-sumitomo-insurance|Mitsui Sumitomo Insurance]] と [[JapanFG/aioi-nissay-dowa-insurance|Aioi Nissay Dowa Insurance]] はいずれも [[JapanFG/msad|MS&AD]] 傘下の主要国内事業会社である。
- ADI のモビリティ / Toyota franchise は、独自の自動車ライン販売と顧客基盤を作る。
- MS Amlin は specialty / reinsurance エクスポージャーに寄与する。
- 海外 P&C ポートフォリオがグループ収益を分散する。

### Sompo Japan Insurance（Sompo HD 傘下）

- [[JapanFG/sompo-japan-insurance|Sompo Japan Insurance]] は [[JapanFG/sompo|Sompo]] 傘下の単一の主要国内損害保険事業会社である。
- Sompo International は海外 specialty / reinsurance に寄与する。
- 代理店チャネルと顧客説明に関する行為規制論点は、近年の監督上の対話の一部である。
- 国内自動車と火災ラインがなお中核保険料基盤である。

## 関連

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
- [[JapanFG/tokio-marine]]
- [[JapanFG/msad]]
- [[JapanFG/sompo]]
- [[JapanFG/tokio-marine-nichido-fire]]
- [[JapanFG/mitsui-sumitomo-insurance]]
- [[JapanFG/aioi-nissay-dowa-insurance]]
- [[JapanFG/sompo-japan-insurance]]
- [[JapanFG/legal-financial-licenses/insurance-license-and-solvency]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[INDEX|FinWiki index]]

## 出典

- General Insurance Association of Japan（日本損害保険協会）: 業界概況と統計。
- General Insurance Rating Organization of Japan（損害保険料率算出機構, GIROJ）: 参考純率に関する公表資料。
- Tokio Marine Holdings: 統合報告書および年次報告書。
- MS&AD Holdings: 統合報告書および開示ライブラリ。
- Sompo Holdings: 統合報告書および年次報告書。
- FSA: 経済価値ベースのソルベンシー規制等について。
