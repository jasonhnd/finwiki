---
source: real-estate-finance/jrei-foreign-investment-tax-treatment
source_hash: 523ef4cf5b507e7f
lang: ja
status: machine
fidelity: ok
title: "日本不動産への外国投資の税務上の取扱い"
translated_at: 2026-06-03T00:53:08.267Z
---
# 日本不動産への外国投資の税務上の取扱い

## 要約

日本不動産への外国投資には、投資家の種類（非居住者法人か個人か）、保有構造（直接保有か、TK / GK-TK / TMK 経由か、J-REIT 経由か）、所得種類（賃料かキャピタルゲインか）、恒久的施設（PE）の有無、租税条約（DTT）の適用状況によって異なる日本税務上の取扱いがある。主要な論点には、賃料所得の源泉徴収、日本不動産リッチ法人を保有する非居住者へのキャピタルゲイン課税、適切に組成された TK 投資家の税務パススルー効率、エンティティレベルの税務パススルーを実現する J-REIT の90%分配ルールが含まれる。このページは経路とリンクのみを目的とし、税務・法務・投資助言ではない。意思決定に使う前に、すべての読み方について、最新の NTA / MoF ガイダンスに照らして日本税務の有資格専門家による確認が必要である。

## ウィキ上の位置づけ

この項目は[[real-estate-finance/INDEX]]の配下に置かれ、[[real-estate-finance/j-reit-market-overview|J-REIT market overview]]、[[real-estate-finance/j-reit-foreign-investor-ownership|J-REIT foreign-investor ownership]]、[[real-estate-finance/real-estate-private-credit-japan|real-estate private credit]]、[[real-estate-finance/bank-commercial-real-estate-lending-japan|bank CRE lending]]、[[real-estate-finance/real-estate-cap-rate-compression-2026|cap-rate compression]]、[[real-estate-finance/japan-real-estate-appraisal-methodology|appraisal methodology]]、[[real-estate-finance/j-reit-dividend-yield-vs-jgb-spread|J-REIT-vs-JGB spread analysis]]に対するクロスボーダー税務経路ページである。信託銀行・マスタートラスト側のストラクチャリングは[[JapanFG/mitsubishi-ufj-trust-bank]]と[[JapanFG/sumitomo-mitsui-trust]]にある。クロスボーダー構造のメガバンクアレンジャーは[[JapanFG/mufg-bank]]、[[JapanFG/sumitomo-mitsui-banking-corp]]、[[JapanFG/mizuho-bank]]である。政策金融の参照は[[JapanFG/dbj]]。プライベートファイナンス / プライベートエクイティの文脈は[[finance/INDEX]]、[[finance/japan-private-equity-operating-model]]、[[finance/japan-private-equity-fund-structure-matrix]]につながる。銀行と短期金融市場の文脈は[[banking/INDEX]]、[[banking/regional-bank-consolidation-pattern]]、[[money-market/japan-money-market]]にある。保険側のクロスリンクは、生命保険会社の不動産配分税務の読み方として[[insurance/japan-life-insurance-alm-overview]]に向かう。

## 税務面のマップ

| 所得 / 事象 | 非居住者投資家の税務面 |
|---|---|
| 賃料所得（直接保有） | 日本源泉所得。日本の法人税 / 所得税申告の対象。非居住者への支払いでは源泉徴収が適用される場合がある。 |
| 直接売却のキャピタルゲイン | 日本源泉所得。所定のルールに基づき非居住者キャピタルゲイン課税の対象。 |
| 日本不動産リッチ法人株式のキャピタルゲイン | 法人が定義された不動産保有割合の閾値を超える場合、源泉地ルールにより課税が適用され得る。 |
| J-REIT からの分配 | 日本の源泉徴収税の対象。DTT による軽減が適用され得る。 |
| J-REIT の二次売却キャピタルゲイン | 源泉地ルール上のキャピタルゲイン課税が適用され得る。ポートフォリオ保有者については DTT により通常軽減・免除される。 |
| TK 投資家への TK 分配 | TK 投資家に対する TK 所得として扱われる。具体的な源泉地ルール条件がある。 |
| GK-TK / TMK 分配 | 構造に応じて、投資家へのパススルーを伴うエンティティレベルの取扱い。 |
| 海外に支払うブリッジ / メザニン利息 | 利息支払いへの源泉徴収税。DTT による軽減が適用され得る。 |

上記はすべて公開情報に基づく一般的な要約である。実際の取扱いは、投資家の本国、条約、PE の有無、構造、現在の NTA / MoF ガイダンスに依存する。

## 投資家タイプの区別

| 投資家タイプ | 公開情報上の読み方 |
|---|---|
| 非居住者法人（日本 PE なし） | 制限納税義務ルールの対象。日本源泉所得は課税対象。条約ポジションが重要。 |
| 非居住者法人（日本 PE / 支店あり） | 日本 PE に帰属する所得について、日本国内法人に近い取扱い。 |
| 非居住者個人 | 制限納税義務ルールが適用。賃料所得の申告が必要。条約ポジションが重要。 |
| 外国年金基金 | 一部条約では J-REIT 分配に DTT 固有の免除が適用され得る。 |
| 外国ソブリンウェルスファンド | 条約によっては、主権免除に類する条約規定が適用され得る。 |
| 外国籍投資ビークル | 条約固有の透明性取扱いがない限り、法人の非居住者として扱われる。 |

PE / FPI（foreign-portfolio-investor）の区別は、最も一般的な分析上の入口である。PE 帰属所得は広いネットで課税され、非 PE 所得は源泉地ルールに限定される。

## 恒久的施設（PE）のロジック

| PE トリガーのパターン | コメント |
|---|---|
| 日本の支店 | 古典的な PE トリガー。支店に帰属する所得は日本で課税される。 |
| 建設 / 据付プロジェクトが12 か月超 | 多くの条約で建設 PE トリガーとなる。 |
| 日本の従属代理人 | 代理人が恒常的に権限を行使する場合の代理人 PE トリガー。 |
| 資産運用またはプロパティマネジメント活動 | 日本で行われる資産運用活動は、一部解釈の下で PE リスクを生む可能性がある。ストラクチャリングでは、信託銀行 / 適格資産運用者の手当を使って軽減する。 |

PE リスクは、外国 GP による日本不動産投資で中心的なストラクチャリング論点の一つである。信託銀行 / 適格資産運用者の手当は標準的な軽減パターンの一部であり、そのため[[JapanFG/mitsubishi-ufj-trust-bank]]と[[JapanFG/sumitomo-mitsui-trust]]における信託銀行の関与は構造的に重要である。

## 賃料所得への源泉徴収税

| 支払者 / 受取者 | 源泉徴収ロジック |
|---|---|
| テナントが非居住者賃貸人に支払う | 法定税率で源泉徴収義務が発生する場合がある。 |
| テナントが非居住者の日本居住代理人に支払う | 源泉徴収義務は通常、代理人 / 支払者側にある。 |
| プロパティマネージャーが非居住者へ送金する | 源泉徴収義務は通常、支払者側にある。 |
| 条約救済申請 | 条約により、届出 / 書類提出を条件に源泉税が軽減され得る。 |

非居住者賃貸人は通常、日本の法人税 / 所得税申告を行い、源泉徴収を実際の税額と相殺する。還付は申告を通じて行う。

## 非居住者のキャピタルゲイン

| 売却類型 | 源泉地ルール |
|---|---|
| 日本不動産の直接売却 | 日本源泉キャピタルゲイン。非居住者は純利益について日本のキャピタルゲイン課税対象。条約で通常免除されない。 |
| 日本不動産リッチ法人株式の売却 | 法人の不動産保有割合が閾値を超える場合、株式であっても源泉地ルールにより日本源泉所得として扱われ得る。 |
| J-REIT 投資口の売却（ポートフォリオ保有） | 条約居住者のポートフォリオ保有者については、特定の保有割合閾値と条約条件を満たす限り、通常日本のキャピタルゲイン課税から免除される。 |
| TMK 優先出資の売却 | 源泉地ルールと条約固有の分析が必要。 |
| 外国持株ビークル経由の間接売却 | 租税回避防止ルールにより、日本源泉ゲインが帰属認定される場合がある。 |

不動産リッチ法人ルール、すなわち法人の日本不動産保有割合が源泉地ルール上のキャピタルゲイン課税を発動するルールは、外国投資家の出口計画における主要なストラクチャリング上のゲートである。

## TK 投資家の税務効率

匿名組合（TK / silent partnership）は、外国投資家による日本不動産投資で長く使われてきた構造である。主な特徴は次のとおり。

| 特徴 | 読み方 |
|---|---|
| 法的形態 | TK 事業者（営業者）と TK 投資家（匿名組合員）の間の匿名組合。 |
| 投資家の可視性 | TK 投資家は外部から匿名であり、第三者と契約するのは TK 事業者のみである。 |
| 税務パススルー | TK 所得は TK 投資家へ流れ、日本税務上は投資家自身の所得として扱われる。 |
| 源泉地ルール | 非居住者 TK 投資家へ支払われる TK 分配は、通常、特定規定に基づき日本の源泉徴収対象となる。 |
| PE / 非 PE 区別 | 非居住者 TK 投資家は、匿名組合員であることのみでは PE を有するとみなされない。ストラクチャリング規律は必要。 |
| GK との組み合わせ | GK-TK が標準パターン。GK（LLC）が権原 / 契約を保有し、TK 投資家が匿名組合員として経済的エクスポージャーを取る。 |
| DTT との相互作用 | TK 所得に関する条約ポジションは条約によって異なる。一部条約には TK 所得の明示規定がある。 |

GK-TK 構造は、クロスボーダー不動産ファンドが日本へ投資する際の主力である。理由は次のとおり。

- TK 投資家の税務パススルーにより、エンティティレベル課税の二層目を回避する。
- TK 投資家は匿名組合員としての役割により、PE みなしステータスを回避する。
- 構造が確立しており、遵守されたパターンについて日本の税務当局に認識されている。

構造レベルでの展開文脈は[[real-estate-finance/real-estate-private-credit-japan|private credit]]へクロスリンクする。

## TMK の税務パススルー

特定目的会社（TMK / specific-purpose company）は、条件付き税務パススルーを持つ証券化ビークル構造である。

| 条件 | 効果 |
|---|---|
| TMK の適格要件を満たす | TMK がエンティティレベルで配当損金算入を受けられ、実質的なパススルーを実現する。 |
| 資産運用制限の遵守 | 適格ステータスに必要。 |
| 90%以上の配当可能所得の分配 | 配当損金算入の適格要件。 |
| 投資家基盤が基準を満たす | 適格ステータスに必要。 |
| 優先出資構造 | 標準パターン。優先出資保有者が経済的エクスポージャーを取る。 |

TMK は、投資家基盤が機関投資家である単一資産 / ポートフォリオ不動産案件におけるシニア・メザニン証券化の主力である。用途の文脈は[[real-estate-finance/real-estate-private-credit-japan|private credit]]と併せて読む。

## J-REIT 90%分配ルール

J-REIT（J-REIT / 投資法人）構造は、90%分配ルールを通じてエンティティレベルの税務パススルーを実現する。

| 特徴 | 読み方 |
|---|---|
| 法的形態 | J-REIT（投資法人）は、投資信託及び投資法人に関する法律に基づくクローズドエンド型投資法人である。 |
| 分配ルール | 分配可能所得の90%以上を分配すると、エンティティレベルで税務上の損金算入が認められる。 |
| 効果 | 90%ルールを満たすと、実質的にエンティティレベルの法人税がなくなる。 |
| 投資主への分配 | 投資主レベルで課税所得として扱われ、投資主レベルの源泉徴収対象となる（条約軽減あり）。 |
| 90%ルールの規律 | すべての上場 J-REIT は、適格ステータスを維持するよう分配を設計する。 |
| 資本留保制約 | 90%分配ルールは内部資本留保を実質的に制約する。J-REIT は主にエクイティ発行と債務で成長する。 |
| スポンサー支援手当 | スポンサーと資産運用会社の手当は、PE / 支配の問題を避けるよう設計される。 |

90%分配ルールは、J-REIT ビークルが営業キャッシュフローの大半を留保ではなく分配する構造的理由である。これは次を形づくる。

- J-REIT 投資家基盤（利回り重視）。
- J-REIT の成長パターン（エクイティ調達主導）。
- J-REIT の分配方針開示。
- [[real-estate-finance/j-reit-dividend-yield-vs-jgb-spread]]に基づく J-REIT 分配金利回りの読み方。

## 租税条約ネットワーク

日本は主要な外国投資家法域と広い租税条約ネットワークを持つ。不動産投資家の読み方で条約上関係する特徴は次のとおり。

| 条約規定 | 典型的な取扱い |
|---|---|
| 不動産所得条項 | 不動産からの所得は通常、源泉国（すなわち日本）で課税できる。条約は免除しない。 |
| キャピタルゲイン条項 | 不動産からの譲渡益は通常、源泉地で課税できる。不動産リッチ法人株式の譲渡益も通常、不動産ルールに従う。 |
| 配当条項 | 配当（J-REIT 分配を含む）は通常、源泉国の源泉徴収対象だが、条約税率（保有割合区分に応じてしばしば5% / 10% / 15%）で上限が設定される。 |
| 利息条項 | クロスボーダー利息は通常、源泉国の源泉徴収対象だが、条約税率で上限が設定される。 |
| TK / 匿名組合条項 | 明示的な TK 規定を持つ条約は少ない。デフォルトの扱いは異なる。 |
| 年金基金条項 | 一部条約は年金基金向け源泉分配を免除する。 |
| LOB（特典制限）条項 | 一部条約には条約漁りを防ぐ LOB がある。 |
| MAP / 仲裁条項 | 二重課税紛争解決に利用できる。 |

日本の主要条約（米国、英国、シンガポール、オランダ、オーストラリア、フランス、ドイツなど）は、外国投資家配分の実際の税引後経済性を形づくる。条約ポジションは、構造タイプの次に重要なストラクチャリング要因である。

## 一般的なクロスボーダー構造

| 構造 | 用途 | 税務経済ロジック |
|---|---|---|
| 外国法人による直接保有 | 単純な直接エクスポージャー | 限定的。源泉地ルールが全面適用され、パススルーはない。 |
| 外国 TK 投資家を伴う GK-TK | 外国ファンドによる単一資産またはポートフォリオへの投資 | TK パススルー、PE 管理、条約ポジションが重要。 |
| TMK 証券化 | 取得ポートフォリオのシニア・メザニン証券化 | 90%以上の分配による TMK エンティティパススルー、優先出資投資家基盤。 |
| 上場 J-REIT 投資口保有 | 日本の公開不動産エクイティへのポートフォリオ配分 | J-REIT エンティティパススルー、投資主レベル源泉徴収の条約軽減。 |
| GK-TK を保有する私募不動産ファンド（外国籍） | GP 主導のファンド投資 | TK パススルーがファンドへ流れる。ファンド投資家の税務ポジションは本国法域に依存する。 |
| クロスボーダー不動産デットファンド | メザニン / 優先出資 / ブリッジ貸付 | 利息源泉徴収、利息条項に関する条約ポジション。 |

構造の選択は、投資家タイプ、対象資産クラス、目標リターンプロファイル、出口計画、条約ポジションにより決まる。上記のどれも普遍的に最適ではない。構造選択は、有資格の日本税務アドバイザーの下で案件ごとに行う。

## 関連項目

- [[real-estate-finance/INDEX]]
- [[real-estate-finance/j-reit-market-overview]]
- [[real-estate-finance/japan-real-estate-appraisal-methodology]]
- [[real-estate-finance/j-reit-foreign-investor-ownership]]
- [[real-estate-finance/real-estate-cap-rate-compression-2026]]
- [[real-estate-finance/bank-commercial-real-estate-lending-japan]]
- [[real-estate-finance/j-reit-dividend-yield-vs-jgb-spread]]
- [[real-estate-finance/real-estate-private-credit-japan]]
- [[banking/INDEX]]
- [[banking/regional-bank-consolidation-pattern]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[money-market/japan-money-market]]
- [[finance/INDEX]]
- [[finance/japan-private-equity-fund-structure-matrix]]
- [[finance/japan-private-equity-operating-model]]
- [[JapanFG/mufg-bank]]
- [[JapanFG/sumitomo-mitsui-banking-corp]]
- [[JapanFG/mizuho-bank]]
- [[JapanFG/sumitomo-mitsui-trust]]
- [[JapanFG/mitsubishi-ufj-trust-bank]]
- [[JapanFG/dbj]]
- [[INDEX|FinWiki index]]

## 出典

- MoF (Ministry of Finance): tax-policy and tax-reform publications.
- NTA (National Tax Agency): English tax-information portal, withholding-tax guidance, international-taxation pages.
- MoF: international-policy and double-tax-treaty publications.
- FSA: investment-corporation and J-REIT-supervisory commentary.
- ARES (Association for Real Estate Securitization): J-REIT and real-estate-fund market guidance.
