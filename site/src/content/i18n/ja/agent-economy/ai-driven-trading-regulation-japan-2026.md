---
source: agent-economy/ai-driven-trading-regulation-japan-2026
source_hash: 173df95f6783818d
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "AI 主導トレーディング規制 · 日本 FSA / SESC とグローバルな FCA / SEC / ESMA の比較 2026"
translated_at: 2026-06-26T08:32:15.193Z
---
# AI 主導トレーディング規制 · 日本 FSA / SESC とグローバルな FCA / SEC / ESMA の比較 2026

## 要約

2026 における AI 主導トレーディング規制は、独立した「AI トレーディング規則」としてではなく、**既存のアルゴリズム取引の規制境界**の上に位置している。日本の **FSA** + **SESC**（証券取引等監視委員会）のフレームは、**金商法第38条の2** アルゴ取引登録 + **FSA AI 原則 2021 （2024更新）** + **JPX（日本取引所グループ）参加者ルール**である。米国の **SEC** は、**Reg SCI / Reg SHO / Reg NMS** に加え、暗号資産および新興技術のカストディ開示のための **SAB 122 フレームワーク（2024）**、そして**予測データ分析**規則の軌道を用いている。EU は、**MIFID-II 第17条**（アルゴ取引ガバナンス）+ **MAR（市場濫用規則）** + **MIFID-II RTS 6** 組織要件 + オーバーレイとしての **EU AI 法 2024/1689** の下で運用されている。BoJ + FSA は、AI 主導の操作（クロス会場のスプーフィング、自律エージェントによるモメンタムイグニッション）を人間主導の操作とは別個のカテゴリとしてますます扱う **マーケットメーカー監視インフラ** を構築してきた。2025-2026 の規制パイロット — IOSCO の市場における AI レビュー、FCA AI サンドボックス金融コホート、MAS Veritas AI テストツールキット、日本 FSA AI 原則の更新 — は、**デプロイヤーの説明責任 + プレトレード管理 + 監査可能な意思決定証跡** という共通要件へと収束している。より広範なアプリケーション文脈については [[agent-economy/llm-agent-finance-application-overview-2026|LLM agent finance application overview]]、上流のシグナル生成層については [[agent-economy/agent-driven-market-data-interpretation-pipeline|agent-driven market data interpretation pipeline]] を参照のこと。

## ウィキ上の位置づけ

このエントリは [[agent-economy/INDEX|agent-economy index]] の配下にある。より広範なアプリケーションマップについては [[agent-economy/llm-agent-finance-application-overview-2026|LLM and AI agent applications in finance]]、上流の NLU シグナル生成については [[agent-economy/agent-driven-market-data-interpretation-pipeline|agent-driven market data interpretation pipeline]]、デプロイヤーの説明責任を基礎づける本人・代理人の教義については [[agent-economy/agent-legal-tax-liability-framework|agent legal and tax liability framework]]、AI エージェントのトレーディングエクスポージャーを制限する支出 / 権限付与の粒度については [[agent-economy/agent-custody-and-authorization-framework-2026|agent カストディ and authorization framework]] と照らし合わせて読むこと。隣接する文脈は、この規制が統御する機関の境界については [[securities/japan-market-maker-and-liquidity-provider-landscape|Japan market maker and liquidity provider landscape]] と [[securities/japan-prime-brokerage-and-institutional-financing|Japan prime brokerage and institutional financing]] に、AI トレーディングに最も晒される製品群については [[derivatives/INDEX|derivatives INDEX]] にある。

## 日本 · FSA + SESC + BoJ の規制境界

### FSA AI 原則 2021 （2024更新）

2021, に公表され 2024, に大幅更新された **FSA AI 原則**（金融分野におけるAI利活用に関するガイドライン）は、**すべての**規制対象金融サービスにおける AI 利用に適用される 7 つの原則を定義する — トレーディングに特化したものではない。これらは、AI 主導トレーディングが位置する傘を形成する：

1. **顧客保護** — 金融機関は AI の利用にかかわらず顧客の成果に対する完全な責任を保持する
2. **公平性** — バイアスのある訓練データからの差別がないこと
3. **透明性 / 説明可能性** — 機関は監督検査において AI 主導の意思決定を説明できなければならない
4. **プライバシー** — 個人情報保護法（APPI）の遵守
5. **セキュリティ** — モデルセキュリティと敵対的攻撃の緩和
6. **説明責任** — AI 主導の意思決定に対する明確な所有チェーン
7. **イノベーションの実現** — 規範ベースであり、規則の処方箋ベースではない

トレーディングに特化して、これらの原則は金商法第38条の2 （アルゴリズム取引業務の登録）および第38条の3 （高頻度取引の登録）と構成される。これらはいずれも当初 2017 年の金商法改正で追加されたが、ガイダンスが 2023-2025 に更新され、戦略が自動的に注文を生成・執行する場合には **AI 主導の戦略生成が対象範囲内である** ことが明確化された。

### 金商法第38条の2 + 38条の3 · アルゴリズムおよび HFT 登録

- **第38条の2**（アルゴ取引）：「アルゴリズム取引」を用いる第1 種金融商品取引業者は、その活動を登録しなければならない。定義は 2017 に明確化され、「市場データに基づいて注文のタイミング、価格、または数量を自動的に決定するコンピュータプログラム」を含むものとされた。
- **第38条の3**（HFT）：外国の HFT 企業は、FSA に「高速取引行為者」として登録し、日本に拠点（代表者または支店）を置かなければならない。速度、ボリューム、ダイレクトマーケットアクセスの利用によってトリガーされる。
- **2024-2025 のガイダンス明確化**：「ニュースを読む → トレーディングアイデアを生成する → アルゴが執行する」LLM 拡張戦略は、LLM が注文のタイミング / 価格 / 数量を決定するコンピュータプログラムシステムの一部であるため、第38条の2 に該当する。デプロイヤーはそのシステムをアルゴ取引として登録し、プレトレード管理を提出しなければならない。

### SESC 市場サーベイランス + AI 主導の操作検知

**SESC**（証券取引等監視委員会）は、市場操作、インサイダー取引、不公正取引慣行の執行を担う FSA の調査部門である。2024-2026 の更新の弧：

- SESC は独自の **AI 拡張サーベイランス** を構築してきた — ML モデルを用いて、クロス会場のスプーフィングパターン、レイヤード・クオーティング操作、人間のトレーダーのパターンを超えるモメンタムイグニッション戦略を検知する。
- **「AI 主導の操作」** カテゴリはますます別個のものになっている。すなわち、価格を動かすために複数の会場にまたがって 10,000 の小口注文を出す単一の自律エージェントは、人間のトレーダーのスプーフとは構造的に異なる。SESC の 2024-2025 のケースレビューは、サーベイランスが「人間主導であるとは説得力をもって考えられない」挙動をフラグした複数のインシデント（公開報告書では匿名化）をフラグした。
- **相互参照**：[[exchanges/bybit-lazarus-hack-detailed-analysis|Bybit Lazarus hack analysis]] は、SESC の市場ミクロ構造アプローチを補完するオンチェーンフォレンジックアプローチを示す。

### BoJ マーケットメーカー監視

**日本銀行** は市場行為規制当局ではないが、**JGB 市場** の流動性サーベイランスと **JPY マネーマーケット** の安定性のために重要なマーケットメーカー監視インフラを運用している。BoJ 金融市場局は、JGB 市場ミクロ構造への AI 主導トレーディングの影響を明示的に研究する 2024-2025 のワーキングペーパーを持ち、以下の知見を得ている：

- JGB 先物における AI 主導トレーディングの集中（[[derivatives/jgb-futures-curve|JGB futures curve]] にリンク）は中程度（ボリュームの ~15-20%）かつ安定している
- AI 主導のクロスプロダクト取引（JGB 現物 vs 先物 vs スワップ、[[derivatives/japan-irs-market|JPY IRS market]] を参照）は増加しているが、文書化されたストレスイベントは生じていない
- BoJ は AI を直接監督しないが、マクロ安定性監視について FSA と連携している

### JPX（日本取引所グループ）参加者ルール

JPX（TSE + OSE）参加者ルールは以下を要求する：
- すべてのアルゴ注文に対する **プレトレードリスク管理**（プライスカラー、ボリューム上限、反復注文の速度上限）
- 戦略を数秒以内に無効化できる **キルスイッチ**
- **DMA**（ダイレクトマーケットアクセス）参加者は顧客注文に対する責任を負わなければならない
- 2024-2025 の更新は、**AI 由来のシグナル** が同じ管理エンベロープを通ることを明確化する。参加者は防御として「AI がやった」と主張することはできない

## グローバル比較 · SEC / FCA / ESMA / MAS

### 米国 SEC · Reg SCI + SAB 122 + 予測データ分析の弧

- **Reg SCI**（システムコンプライアンスおよびインテグリティ、2014）— SRO、ATS、システム上重要な市場参加者のシステム（キャパシティ、インテグリティ、レジリエンシーを含む）をカバーする。AI 主導トレーディングシステムは、運用者が SCI 対象である場合に Reg SCI の対象となる。
- **Reg NMS / Reg SHO** — 注文処理と空売り規則は AI 主導の注文にも変わらず適用される。
- **SAB 122**（スタッフ会計公報、2024）— SAB 121 （暗号資産のカストディを銀行のバランスシート上で事実上禁止していた）を撤回し、フレームワークを再び開いた。間接的に関連：SAB 122 フレームワークの議論は、カストディアン銀行における AI 主導のトレーディングデスクをカバーする。それ自体は AI 規則ではないが、2024-2026 の SEC スタンスシフトの重要な一片である。
- **予測データ分析規則の軌道**：SEC は 2023 に、ブローカー・ディーラーと投資顧問に対し、顧客向け推奨における AI / 予測データ分析からの利益相反を排除または中和することを要求する規則を提案した。この規則は政権交代の下で 2025 に撤回 / 一時停止された。根底にある懸念（顧客の最善の利益と相反する AI 主導の推奨）は Reg BI を通じて残っている。
- **アルゴ取引の執行** は、Reg SCI + 取引所法第9 条 + 10(b) の下での市場濫用ケースを通じて継続している。

### EU MIFID-II 第17 条 + RTS 6 + MAR + AI 法

- **MIFID-II 第17条** — アルゴリズム取引に従事する投資会社は、効果的なシステムとリスク管理を備えなければならない。年次の自己評価 + 所管当局への報告。
- **MIFID-II RTS 6** — アルゴ取引に従事する投資会社の組織要件：システム開発管理、ストレステスト、キル機能、技術的知識を持つコンプライアンススタッフ。
- **市場濫用規則（MAR）** — スプーフィング、レイヤリング、モメンタムイグニッションをカバーする。ESMA の 2024-2025 ガイダンスは、MAR が AI 主導の操作にも等しく適用されることを明確化した。アルゴリズムの「意図」は、運用者の設計上の選択から帰属される。
- **EU AI 法（規則 2024/1689）** — トレーディングに用いられる AI システムは附属書 III の高リスクカテゴリに特に名指しされていない（信用と保険は名指しされているが、トレーディングは名指しされていない）が、**汎用 AI モデル** の義務はプロバイダに適用される。透明性義務は金融に用いられる AI に適用される。MIFID-II との相互作用は 2026-2027を通じて明確化されつつある。

### 英国 FCA · 金融サービスにおける AI + アルゴ管理

- **FCA アルゴリズム取引コンプライアンス** ソースブック + 上級管理職制度（SMR）は、アルゴ取引の個人説明責任をカバーする
- **FCA 金融サービスにおける AI ディスカッションペーパー（2024）** + **2025-2026 の協議の弧** — 規範ベース。FCA は EU の処方箋的な AI 法アプローチを拒否し、成果ベースの監督を選好してきた
- **上級管理職の説明責任** — 指名された上級管理職が AI トレーディングシステムを所有する。不正行為については SMCR の個人責任が適用される

### ESMA レベルの連携

ESMA は、AI が国内所管当局レベル（NCA レベル）の監督でどのように用いられているかを調査する **2024-2025 の金融市場における AI に関する報告書** を公表した。知見：
- AI 主導トレーディングは主要 EU 会場全体で「成長しているが支配的ではない」ボリュームのシェアである
- AI 主導トレーディングがどのように監督されるかについて NCA 間で不整合がある。ESMA は調和に向けて推進している
- 2026-2027に新たな EU 全体の AI トレーディング規則は計画されていない。既存の MIFID-II + MAR + AI 法のオーバーレイで十分とみなされている

### シンガポール MAS · FEAT + Veritas

- **FEAT 原則**（公平性、倫理、説明責任、透明性）— 2018, に公表され 2024, に更新され、MAS 規制対象金融サービスにおけるすべての AI に適用される
- **MAS Veritas AI テストツールキット** — MAS が規制対象企業に提供するオープンソースの AI 公平性 / 説明可能性ツール
- MAS のポジショニング：英国 FCA のように規範優先であり、AI トレーディングのイノベーションのためのサンドボックスプログラムを伴う。企業が FEAT をモデルリスク管理に内在化することへの監督上の期待

### IOSCO のグローバル連携

**IOSCO（証券監督者国際機構）** は、加盟管轄全体で 2024-2026 の資本市場における AI レビューを実施している。2025に回覧された予備的知見：
- AI 固有のトレーディング規則を策定した加盟管轄はない。すべて既存のアルゴ / 市場濫用 / 行為フレームワークの上に重ねている
- **デプロイヤーの説明責任 + 監査可能な意思決定証跡 + プレトレード管理 + ポストトレードサーベイランス** への収束
- **不利益処分の説明可能性** に関する相違（EU は厳格、米国 / 英国 / 日本 / シンガポールは規範ベース）

## AI 主導 vs 人間主導の操作 · 監督上の区別

2025-2026 の監督フレームは、AI 主導の操作を別個のカテゴリとしてますます区別する：

| 次元 | 人間主導の操作 | AI 主導の操作 |
|---|---|---|
| **速度 / ボリューム** | 人間に制約される（ミリ秒の反応、毎分数十の注文） | アルゴに制約される（マイクロ秒の反応、毎分数千の注文） |
| **クロス会場の連携** | 明示的な連携なしには困難（それ自体が違反） | 複数会場にまたがって動作する単一エージェントによって容易に執行される |
| **パターンの反復性** | トレーダーのシグネチャは検知可能だが可変 | アルゴリズムのシグネチャはエピソード間で高度に反復可能 |
| **意図の帰属** | トレーダーの証言、コミュニケーション、損益パターン | アルゴリズムの設計上の選択と訓練データから推論される |
| **提起される防御** | 「操作する意図はなかった」 | 「モデルが予期せぬ挙動をした」（ESMA / SESC の 2024-2025 ガイダンスにより却下） |
| **執行の対象** | トレーダー | アルゴリズムをデプロイした運用者 / 企業 |
| **検知手法** | トレーダーパターンのサーベイランス、コミュニケーションレビュー | クロス会場の注文フロー相関、モデル出力の異常検知 |

**「モデルが予期せぬ挙動をした」** という防御は、SESC、ESMA、FCA、SEC、MAS のガイダンスにおいて 2024-2025に一貫して却下されてきた。その立場は、運用者がデプロイ前に AI システムを理解・監督する責任を負うというものである。予期せぬ挙動はデプロイヤーの失敗であり、言い訳ではない。

## 2025-2026 の規制パイロット · 注視すべきもの

| パイロット | 管轄 | ステータス | 何をテストするか |
|---|---|---|---|
| **FSA AI 原則の更新の弧** | 日本 | 進行中 | AI 主導の意思決定アーティファクトが金商法の適合性 + 顧客保護のために「説明可能」とみなされるかどうか |
| **SESC AI 拡張サーベイランス** | 日本 | 本番 | JPX + PTS におけるクロス会場の AI 主導操作の検知 |
| **FCA AI サンドボックス金融コホート** | 英国 | 2025-2026 コホート稼働中 | 監督観察下にある実環境の AI トレーディングシステム |
| **MAS Veritas + AI サンドボックス** | シンガポール | 進行中 | FEAT 原則の運用化。企業が MAS サンドボックスでモデルをテストする |
| **IOSCO 資本市場における AI レビュー** | グローバル | 2026 まで進行中 | クロス管轄の収束に関する知見 |
| **EU AI 法高リスク実装** | EU | 2026-2027 まで段階的導入 | トレーディング固有のユースケースが附属書 III に追加されるかどうか |
| **SEC AI 利益相反規則** | 米国 | 2025に一時停止；ステータス不確実 | 予測データ分析規則が復活するかどうか |
| **JPX アルゴ取引規則の明確化** | 日本 | 2024-2025 公表ガイダンス | LLM 拡張戦略が対象範囲内であることを特に明確化 |

**統合 2026-05**：2026に AI 固有のトレーディング規則を出す態勢にある管轄はない。すべて既存フレームワークの下で観察している。主要な AI 固有トレーディング規則の最も早く考えられる窓は、AI 主導トレーディングに起因する公開市場のストレスイベント（重大な規模ではまだ発生していない）を条件として 2027-2028, である。

## エージェントエコノミースタックとの構成

ここでの規制フレームは、AI 主導トレーディングエージェントができることに対する **制約エンベロープ** である。より広範なエージェントエコノミースタックとの構成：

- **アプリケーション** — [[agent-economy/llm-agent-finance-application-overview-2026|LLM agent finance application overview]] カテゴリ (c) トレーディングと執行
- **データシグナル** — 上流のニュース / フィード → シグナルのステップについては [[agent-economy/agent-driven-market-data-interpretation-pipeline|agent-driven market data interpretation pipeline]]
- **アイデンティティ** — VTAP、KYA、Skyfire 発行体 ID については [[agent-economy/agent-identity-defi-and-traditional-finance-bridge|agent identity DeFi / TradFi bridge]]
- **カストディ / 権限付与** — トレーディングエクスポージャーを制限する支出上限と失効については [[agent-economy/agent-custody-and-authorization-framework-2026|agent カストディ and authorization framework]]
- **決済** — 決済については [[agent-economy/agent-payment-protocol-four-way-comparison-2026|agent payment protocol four-way comparison]]
- **責任のデフォルト** — 本人・代理人の教義については [[agent-economy/agent-legal-tax-liability-framework|agent legal and tax liability framework]]

## 出典

- 日本 FSA ニュース（fsa.go.jp/en/news）
- 日本 SESC ニュース（fsa.go.jp/sesc/english/news.html）
- 日本銀行ワーキングペーパーシリーズおよびレビューシリーズ（boj.or.jp）
- 米国 SEC スピーチおよび SAB 更新（sec.gov）
- CFTC スピーチ（cftc.gov）
- 英国 FCA ディスカッションペーパー（fca.org.uk）
- ESMA 文書および市場における AI に関する報告書（esma.europa.eu）
- EU MIFID-II 指令 2014/65/EU（eur-lex.europa.eu）
- EU AI 法 規則 2024/1689 （eur-lex.europa.eu）
- 決済および市場におけるアルゴ / AI に関する BIS CPMI 刊行物（bis.org）
- シンガポール MAS 協議および Veritas（mas.gov.sg）
- IOSCO 刊行物（iosco.org）

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/INDEX|agent-economy index]]
- [[agent-economy/llm-agent-finance-application-overview-2026|LLM agent finance application overview]]
- [[agent-economy/agent-driven-market-data-interpretation-pipeline|agent-driven market data interpretation pipeline]]
- [[agent-economy/agent-custody-and-authorization-framework-2026|agent custody and authorization framework]]
- [[agent-economy/agent-identity-defi-and-traditional-finance-bridge|agent identity DeFi and TradFi bridge]]
- [[agent-economy/agent-legal-tax-liability-framework|agent legal and tax liability framework]]
- [[agent-economy/agent-payment-protocol-four-way-comparison-2026|agent payment protocol four-way comparison]]
- [[agent-economy/agent-actorship-debate|agent actorship debate]]
- [[securities/japan-market-maker-and-liquidity-provider-landscape|Japan market maker landscape]]
- [[securities/japan-prime-brokerage-and-institutional-financing|Japan prime brokerage]]
- [[derivatives/INDEX|derivatives INDEX]]
- [[derivatives/jgb-futures-curve|JGB futures curve]]
- [[derivatives/japan-irs-market|JPY IRS market]]
- [[exchanges/bybit-lazarus-hack-detailed-analysis|Bybit Lazarus hack analysis]]
- [[fintech/INDEX|fintech index]]
<!-- /wiki-links:managed -->
