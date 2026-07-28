---
source: agent-economy/llm-agent-finance-application-overview-2026
source_hash: d6e55e48e8085a7e
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "金融における LLM・AI エージェントの応用 · 2026-05 応用領域の全体像"
translated_at: 2026-07-28T22:03:26.809Z
---
# 金融における LLM・AI エージェントの応用 · 2026-05 応用領域の全体像

## TL;DR

2026, 半ば時点で、金融における LLM / AI エージェントの活用範囲は、**本番稼働している領域**(顧客向けチャットボット、バックオフィス自動化、不正・AML トリアージ、開発者向けコパイロット)と、**制約付きパイロット段階の領域**(取引シグナル生成、与信判断支援、アドバイザリー水準の推奨)の二極に分化している。前者のクラスターは、G-SIB において「標準ツール」の閾値を越えた — Morgan Stanley AI @ Morgan Stanley、JPM IndexGPT / SpectrumGPT、Goldman GS AI Platform、BBVA / ING の Anthropic 導入、みずほ / SMBC / MUFG の社内コパイロット。後者のクラスターは依然として、**FSB / BIS / IMF の監督上の慎重姿勢**、**SEC の予測データ分析(predictive-data-analytics)ルールの方向性**、**FCA の AI-in-financial-services ペーパー**、そして日本の **FSA AI 原則 2024-2026** によって制約を受けており、これらはいずれも、顧客や市場に重大な影響を及ぼすあらゆる判断に human-in-the-loop 要件を課し続けている。カテゴリ別の成熟度マップ(本番 / パイロット / 研究)が、本エントリがエンコードする中核的なルーティングマップである。人格性(personhood)の枠組みについては [[agent-economy/agent-actorship-debate|agent actorship debate]] を、デプロイヤー責任のデフォルトについては [[agent-economy/agent-legal-tax-liability-framework|agent legal and tax liability framework]] を参照。

## Wiki ルート本エントリは [[agent-economy/INDEX|agent-economy index]] の配下に位置する。責任のウォーターフォールについては [[agent-economy/agent-legal-tax-liability-framework|agent legal and tax liability framework]]、その基盤となる決済レールの整備状況については [[agent-economy/agent-protocol-mainnet-adoption-2026|agent protocol mainnet adoption 2026]]、取引固有の規制当局スタンスについては [[agent-economy/ai-driven-trading-regulation-japan-2026|AI-driven trading regulation Japan 2026]] と併読すること。開発者向けツールについては [[agent-economy/claude-code-extension-architecture|Claude Code extension architecture]] と [[agent-economy/stripe-agent-toolkit-position|Stripe agent toolkit position]] を参照。データパイプライン / シグナルの観点については [[agent-economy/agent-driven-market-data-interpretation-pipeline|agent-driven market data interpretation pipeline]] を参照。カストディと権限付与の構成については [[agent-economy/agent-custody-and-authorization-framework-2026|agent カストディ and authorization framework 2026]] を参照。アイデンティティについては [[agent-economy/agent-identity-defi-and-traditional-finance-bridge|agent identity DeFi and traditional finance bridge]] を参照。

## 7 つの応用領域 · カテゴリ別成熟度

2026-05 7 つのカテゴリにわたる成熟度マップ。**PROD** = 少なくとも 1 社の G-SIB / AUM 上位 10の事業者が実際の顧客 / 規制トラフィックで稼働、**PILOT** = コンソーシアムまたは単独企業による公開開示を伴う規制下のパイロット、**RESEARCH** = 論文公表済みだが本番トラフィックのないパイロット前のプロトタイプ。

| Category | 公開上観測できる use class | Maturity claim に必要な最低 evidence | Core control questions |
|---|---|---|---|
| **(a) Customer-facing chat / assistance** | retrieval、drafting、service triage、staff-assisted response | named institution、dated first-party disclosure、affected users、production / pilot label、human-handoff design | disclosure、hallucination handling、authentication、complaint / escalation、record retention |
| **(b) Back-office automation** | document extraction、KYC / AML support、compliance search、workflow drafting | deployed workflow、decision boundary、data source、reviewer role、measured error / override data | access control、data lineage、model validation、reviewer independence、audit trail |
| **(c) Trading / execution support** | research summarization、event extraction、signal generation、execution support | order lifecycle における exact role、venue / asset scope、pre-trade limit、production evidence | market-abuse control、latency、kill switch、model / code change control、replay |
| **(d) Credit / underwriting support** | document analysis、feature generation、decision support、explanation drafting | AI が approval / pricing に影響するか、validation result、adverse-action process、applicable law | bias / fairness、explainability、data quality、override、appeal |
| **(e) Fraud / financial-crime detection** | risk scoring、alert triage、anomaly detection、investigation support | production scope、false-positive / false-negative evaluation、customer-impact boundary、review process | drift、feedback loop、appeal、watchlist / data quality、model governance |
| **(f) Advice / suitability support** | research、portfolio explanation、adviser copilot、recommendation drafting | licensed-entity disclosure、final decision maker、suitability / fiduciary control、monitored outcome | conflict、suitability、disclosure、human approval、communication record |
| **(g) Developer tooling** | code completion、testing、review、documentation、operations support | named tool、approved repository / data class、security review、production SDLC boundary | secrets / code leakage、dependency risk、review gate、testing、change management |

Sources: ^[https://www.fsb.org/2024/11/the-financial-stability-implications-of-artificial-intelligence/] ^[https://www.bis.org/publ/work1194.htm] ^[https://www.fsa.go.jp/en/news/2025/20250304/aidp.html]


**マップの読み方**: PROD と PILOT の間のギャップは、AI のアウトプットが **顧客向けの金融判断**(PILOT)なのか、それとも **有資格者がレビューするサポート / ドラフト / トリアージのアウトプット**(PROD)なのか、という点とほぼ完全に相関する。規制当局は金融における AI を阻止したのではない — 人間のサインオフなしに AI が顧客に影響を与える**最終**判断を下すことを阻止したのである。

## カテゴリ別の詳細

### (a) 顧客向けチャットボット

**本番の実態 2026-05**: Morgan Stanley の「AI @ Morgan Stanley Assistant」は 2023 に FA 向け用途で稼働を開始し、2024-2025 に FA-with-client の領域へと拡大、2026-Q1 までに FA レビューを条件とした顧客向けコミュニケーションのドラフト作成をサポートしている。BBVA + OpenAI のパートナーシップ(2025発表)は、スペインとメキシコでの顧客サービストリアージをカバーする。ING + Anthropic は、コールセンターのエージェントにリアルタイムで提示される社内向けのナレッジ検索に Claude を導入した。みずほの「M-AI Insight」と SMBC の「SMBC GAI」は社内で大規模に展開されているが、顧客向けの領域は依然として人間のエージェントを通じてゲートされている。

**ここで「PROD」が実際に意味するもの**: LLM がドラフトを作成し、有資格者が承認し、そのドラフトが顧客向けコミュニケーションとなる。LLM は重要な質問(住宅ローン金利、口座残高、アドバイス)について顧客にエンドツーエンドで直接回答することはない。例外はスクリプト化された FAQ(10 年前から ML / NLP 駆動だった) — それらは消費者保護の枠組みを再設計することなく、2024-2026 に静かに LLM へとアップグレードされた。

**規制当局スタンス**: FCA の 2024 「AI in financial services」ペーパーと 2025-2026 のコンサルテーションの流れは、人間のレビューを伴う LLM ドラフトの顧客コミュニケーションを明示的に受け入れている。日本の FSA AI 原則(2021,、2024更新)は、顧客向けチャットボットを「サポートツール」として扱い、金融機関が FIEA 第 35 条の適合性義務を完全に保持するものとしている。EU AI Act は、顧客向け金融チャットボットを「限定リスク」(透明性のみ)として扱うが、信用力評価に用いられる場合は「高リスク」となる((d) を参照)。

**主要ベンダー**: Anthropic Claude(BBVA、ING、みずほ)、OpenAI GPT-4o / GPT-5 (Morgan Stanley、Bank of America の初期パイロット)、Google Gemini(Citi のパイロット、2025開示)、Cohere(BlackRock Aladdin Copilot 隣接)、国内日本勢(NEC cotomi、NTT tsuzumi、PFN PLaMo)。

### (b) バックオフィス自動化 · KYC / AML / コンプライアンス審査

**本番の実態**: JPM の SpectrumGPT(コンプライアンス文書レビュー)、HSBC の AI コンプライアンスアシスタント、Citi のコンプライアンスコパイロット、野村の ops AI、みずほのリレーションシップマネージャーのノート作成向け RM-AI。機能セット: KYC 文書抽出(パスポート / 公共料金請求書 / 法人登記の OCR + 構造化データ抽出)、AML 取引モニタリングのアラートトリアージ(LLM が人間の調査担当者向けにアラートのコンテキストを要約)、疑わしい取引の届出(SAR)のドラフト作成(LLM がドラフトを作成し、人間のコンプライアンス担当者が承認)、制裁リスト近接性レビュー(LLM が OFAC / EU 制裁リストに対して名称一致をスコアリング)。

**このカテゴリが PROD として成熟している理由**: KYC / AML のアウトプットは顧客ではなく**社内の調査担当者**によって消費される。デプロイヤーのコンプライアンス担当者は [[fintech/aml-cft-fatf-grey-list-overview|FATF Recommendation 20]] および日本の犯罪収益移転防止法のもとで規制上の完全なアカウンタビリティを保持する。LLM は規制対象の判断を置き換えるのではなく、人間のスループットを加速させる。

**監査証跡要件**: 本番稼働するすべての主要な LLM 拡張コンプライアンスシステムは、事後レビューが LLM の推論トレースを再現できるよう、**判断ごとのプロンプトログ**と**モデルバージョンのスタンプ**を保持している。取引における類似の証跡については [[agent-economy/agent-driven-market-data-interpretation-pipeline|agent-driven market data interpretation pipeline]] を参照。

### (c) 取引・執行 · NLU ニュース → 取引シグナル / エージェント駆動ヘッジ

**パイロット状況 2026-05**: Goldman Marquee + Marquee AI(Goldman の機関向けアナリティクス + AI オーバーレイ)、JPM IndexGPT(2024-2025にローンチした LLM 駆動のテーマ別バスケット構築)、BlackRock Aladdin Copilot(ポートフォリオマネージャー向け LLM であり、顧客向けではない)、Renaissance / Two Sigma / Citadel の社内 AI 研究(詳細は非公開)。Bloomberg の BloombergGPT(2023 公表)と Bloomberg AI(Terminal 2024-2026でプロダクト化)は、バイサイド企業が独自のロジックを重ねる、金融特化型 LLM の領域を提供する。

**このカテゴリが PROD ではなく PILOT である理由**: 市場インパクトのリスク。$500M のオーダーを誤入力(fat-finger)する LLM 駆動の取引は、市場を動かしかねない。規制当局(Reg SCI / Reg SHO / 新 SAB 122, のもとでの SEC、MAR / MIFID-II アルゴ規制のもとでの FCA、FIEA 第 38-2 条のアルゴリズム取引ルールのもとでの FSA、MAR / MIFID-II RTS 6のもとでの ESMA)は、現行のいかなる LLM も自己証明できない**取引前コントロール**(価格カラー、サイズ制限)と**キルスイッチ**を要求する。妥協点: LLM が**シグナル**を生成し、決定論的な執行アルゴが**リスクコントロール**を強制する。シグナルは LLM 由来であってよいが、取引そのものは人間由来のシグナルと同じアルゴコントロールフレームワークを通る。

**[[agent-economy/ai-driven-trading-regulation-japan-2026|AI-driven trading regulation Japan 2026]]** で規制の詳細を解説する。

### (d) 与信審査 · LLM 拡張

**パイロット状況**: Upstart(FICO 補完型 ML、現在は LLM 拡張の文書解析 2024-2026)、Pagaya(消費者信用 AI 審査)、Klarna(BNPL AI 審査)、Affirm(同様)、楽天カード(日本の社内 AI 審査パイロット)、メルカリクレジット(AI を伴う BNPL)。ユースケース: LLM が非構造化文書(給与明細、銀行取引明細、ギグエコノミーの所得記録)を読み取り、審査モデルに供給される構造化された所得 / キャッシュフロー特徴量を生成する。

**PROD ではなく PILOT である理由**: 規制当局は**不利益処分の説明可能性**を要求する。米国 ECOA / Regulation B および CFPB Circular 2022-03 は、信用が拒否された場合、貸し手が申込者の行動可能な具体的理由を提示しなければならないと定める。LLM の「この申込者はリスクが高そうだ」は、受け入れ可能な不利益処分の理由ではない。2026 妥協点: LLM が構造化特徴量を生成し、従来型のスコアカードモデルが判断と理由コードを生成し、貸し手が理由コードを提示する。EU AI Act(2024/1689)は信用力評価を**高リスク**(Annex III §5(b))として列挙し、第 9-15 条の完全な遵守(リスク管理、データガバナンス、技術文書、人間の監督)を要求する。日本の FSA + METI AI 原則は、銀行法および貸金業法のもとで貸し手の完全な責任を維持する。

### (e) 不正検知

**本番の実態**: Visa Risk Manager + AI オーバーレイ、Mastercard Decision Intelligence、Stripe Radar(ML コア、加盟店コミュニケーション作成向けの LLM 拡張)、JCB Smart Code AI、Suica 不正モニタリング、JP 銀行協会の AI 不正パイロット。機能セット: リアルタイムのカード非提示(CNP)スコアリング、アカウント乗っ取り検知、加盟店オンボーディング不正(合成 ID 検知)、電信詐欺 / ビジネスメール詐欺(BEC)の防止。

**PROD である理由**: 不正は**リスクスコアリングののち決定論的アクション**(ブロック / ステップアップ / 許可)である。LLM はスコアリングを拡張し、決定論的ルールがアクションを処理する。不正ブロックについて、不利益な与信判断と同水準の「説明可能性」を要求する規制当局はないが、EU の PSD2 の強力な顧客認証(SCA)と日本の FSA 不正防止ガイドラインは、取引がブロックされた理由についての基本的な透明性を要求する。

### (f) アドバイザリー · ロボアドバイザーの進化

**パイロット状況**: WealthNavi AI アシスタント(LLM 駆動の会話型インターフェースを追加する日本のロボアドバイザー、2024-2026)、Schwab Intelligent Portfolios + AI、Vanguard Personal Advisor + AI、みずほ M-AI Insight、SMBC Trust AI ウェルスマネジメントパイロット。くさび: 既存のロボアドバイザー(Betterment、Wealthfront、WealthNavi、THEO)は、ルールベースのリバランスを伴う**ほぼ静的な** UX を持っていた;LLM は会話型インターフェース、シナリオシミュレーション、パーソナライズされたコメンタリーを追加する。

**PROD ではなく PILOT である理由**: 適合性とフィデューシャリー。SEC Reg BI は、ブローカーディーラーが書面による根拠とともに顧客の最善の利益のために行動することを要求する;日本 FIEA 第 38-2 条 + 40 は、第 1 種金融商品取引業者が商品を推奨する前に顧客属性を評価することを要求する;EU MIFID-II 第 25 条は、文書化を伴う適合性評価を要求する。文書化された適合性評価なしに「新興国債券にリバランスすべきです」と述べる LLM は、規制上のリスクを生む。2026 妥協点: LLM は「情報提供のみ、アドバイスではない」と明記されたコメンタリーを生成する;実際のリバランス推奨は、完全な適合性文書を伴う既存のルールベースエンジンから得られる。

日本のロボアドバイザーの正規の活用状況については [[payment-firms/wealthnavi|WealthNavi]] を参照。

### (g) 開発者向けツール

**本番の実態 2026-05**: Anthropic Claude Code は BBVA、みずほ、Goldman、Morgan Stanley の社内開発組織で採用;GitHub Copilot(OpenAI Codex / GPT-4 バックボーン)は JPM、Citi、BofA で展開;Bloomberg 社内 AI 開発ツール;国内日本勢(みずほ社内コード生成、NTT データ社内)。ユースケース: 社内向けの開発者生産性 — コードレビュー、テスト生成、Infrastructure-as-Code のドラフト作成、自然言語からの SQL 生成、規制文書からコードへの変換。

**規制当局の摩擦なしに PROD である理由**: 開発者向けツールは**社内利用**であり、顧客向けでも市場向けでもない。デプロイヤーは従来どおりコードレビューと CI/CD ゲートを保持する。主要な金融サービス AI ルールの大半は、社内利用の開発者向けツールをカーブアウトしている。リスクは金融判断のリスクではなく**コードサプライチェーン**のリスクである — 基盤となる脅威モデルについては [[security/module-path-confusion-supply-chain-attack|module-path-confusion supply chain attack]] と [[security/fork-and-rebrand-5-layer-audit-framework|fork and rebrand audit framework]] を参照。

## ベンダーランドスケープ · 2026-05 カテゴリ別リーダー

| Category | General model API role | Financial-data / domain-system role | In-house layer | 「leader」と名付ける前に必要な evidence |
|---|---|---|---|---|
| Customer chat | language generation、classification、tool use | authenticated customer / product knowledge と policy retrieval | conversation policy、escalation、channel integration | production scope、active users、quality / complaint data、first-party disclosure |
| Back-office / compliance | extraction、summarization、agent workflow | KYC / AML data、case system、policy corpus | access、reviewer workflow、audit logging | measured throughput / error change と decision boundary |
| Trading signal | text / event interpretation、research tooling | licensed market data、analytics、order / risk system | strategy code、pre-trade control、surveillance | live-vs-research status、asset / venue scope、monitored outcome |
| Credit underwriting | document / feature assistance、explanation support | bureau / cash-flow / application data、decision engine | policy、validation、adverse action、appeal | approval / pricing role、fairness / performance validation、legal review |
| Fraud | anomaly explanation、entity resolution、alert support | network / transaction data、case management | deterministic control、investigation、feedback | false-positive / loss metrics、production scope、customer-action boundary |
| Advisory | research synthesis、communication drafting | portfolio、risk、suitability、product data | licensed adviser workflow、conflict control | client-facing scope、adviser approval、suitability monitoring |
| Developer tooling | code generation、review、test | internal repository、package / vulnerability system | SDLC、CI、secrets、release control | approved use、adoption metric、defect / security outcome、source disclosure |

Sources: ^[https://docs.anthropic.com/] ^[https://platform.openai.com/docs/models] ^[https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models] ^[https://www.bloomberg.com/professional/products/ai/]


## エージェント決済スタックとの構成本エントリは**応用領域**をマッピングするものである;これらのアプリケーションが自律的に行動する際の基盤となる**トランザクションインフラ**は、agent-economy のプロトコルスタックでカバーされる。その構成:

- **応用領域**(本エントリ) — 「LLM は銀行のために何をするのか?」
- **アイデンティティレイヤー** — [[agent-economy/agent-identity-defi-and-traditional-finance-bridge|agent identity DeFi and traditional finance bridge]]
- **カストディと権限付与** — [[agent-economy/agent-custody-and-authorization-framework-2026|agent カストディ and authorization framework 2026]]
- **決済プロトコル** — [[agent-economy/agent-payment-protocol-four-way-comparison-2026|agent payment protocol four-way comparison 2026]]
- **データ解釈パイプライン** — [[agent-economy/agent-driven-market-data-interpretation-pipeline|agent-driven market data interpretation pipeline]]
- **規制当局フレームワーク(取引固有)** — [[agent-economy/ai-driven-trading-regulation-japan-2026|AI-driven trading regulation Japan 2026]]
- **メインネット整備状況** — [[agent-economy/agent-protocol-mainnet-adoption-2026|agent protocol mainnet adoption 2026]]

2026 本番展開の大半は、「金融における AI」を単一のモノリスとして扱うのではなく、**これらのレイヤーの 3-4 を構成する**。ここでのカテゴリ分けは、どの応用カテゴリが実際にどのインフラレイヤーを必要とするのかを明確にすることを意図している。

## 規制当局スタンスのまとめ · 2026-05

| Authority / source | 確認済みの公開 material | 確認できる focus | 過大解釈してはいけないもの |
|---|---|---|---|
| **FSB** | financial-stability implications of AI に関する 2024 report | third-party dependency、market correlation、cyber / model risk、information gap | binding firm-level AI rule |
| **BIS** | AI in finance / central banking に関する working paper と research | use case、governance、economics、supervisory question | private firm に対して発行された regulation |
| **IMF** | Fintech Notes と policy research | macro-financial、consumer-protection、capacity consideration | directly enforceable な national law |
| **US Federal Reserve** | SR 11-7 と financial-stability publication | applicable scope に応じた model-risk governance と system-wide vulnerability | 全 LLM use が自動的に SR 11-7 model だという statement |
| **US SEC** | speech / roundtable と June 2025 の predictive-data-analytics proposal withdrawal | existing securities duty、conflict、disclosure、oversight question | current final predictive-data-analytics rule |
| **UK FCA** | AI / financial-services publication と innovation work | safe adoption、accountability、existing regulatory outcome | 特定 model の blanket approval / prohibition |
| **European Union** | Regulation (EU) 2024/1689 と sectoral financial law | role / use-case-specific AI Act duty と existing financial obligation | finance LLM がすべて自動的に high-risk となる rule |
| **Japan FSA** | AI Discussion Paper v1.1 と AI 官民フォーラム | use case、governance、risk、regulatory-clarity dialogue | final AI-specific trading / banking rule。paper は preliminary analysis と明記 |
| **Singapore MAS** | public AI / data-governance、FEAT / Veritas、consultation material | fairness、ethics、accountability、transparency、sectoral supervision | universal certification / safe harbor |

Sources: ^[https://www.fsb.org/2024/11/the-financial-stability-implications-of-artificial-intelligence/] ^[https://www.bis.org/publ/work1194.htm] ^[https://www.imf.org/en/Publications/fintech-notes] ^[https://www.federalreserve.gov/supervisionreg/srletters/sr1107.htm] ^[https://www.sec.gov/rules-regulations/2025/06/s7-12-23] ^[https://www.fca.org.uk/publications] ^[https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689] ^[https://www.fsa.go.jp/en/news/2025/20250304/aidp.html] ^[https://www.mas.gov.sg/news]


法域横断的な収斂: **いかなる法域も AI エージェントの人格性を付与していない**;**すべての主要法域がデプロイヤーのアカウンタビリティを維持している**;**EU AI Act が事前(ex-ante)規制の最高水準を設定している**;**米 / 英 / JP / SG は、既存の金融サービスルールが大半の比重を担う原則ベースの監督に傾いている**。

## 出典

- FSB AI/ML レポート(fsb.org)
- BIS Working Paper 1194 (bis.org)
- IMF Fintech Notes(imf.org)
- 米連邦準備制度 Financial Stability Report(federalreserve.gov)
- 米 SEC のスピーチと PDA ルールの方向性(sec.gov)
- 英 FCA AI in financial services 公表資料(fca.org.uk)
- EU AI Act Regulation 2024/1689 (eur-lex.europa.eu)
- 日本 FSA ニュース 2024 (fsa.go.jp)
- シンガポール MAS FEAT 原則(mas.gov.sg)
- Bloomberg BloombergGPT 公表資料および Terminal AI 発表(bloomberg.com)
- JPMorgan IndexGPT / SpectrumGPT 公開プレス(jpmorgan.com)
- Goldman Marquee + Marquee AI 公開プレス(goldmansachs.com)
- Morgan Stanley AI @ Morgan Stanley プレスリリース(morganstanley.com)
- Anthropic 顧客ページ(anthropic.com/customers)
- OpenAI 金融顧客ページ(openai.com/index/finance)

## 関連
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/INDEX|agent-economy index]]
- [[agent-economy/agent-actorship-debate|agent actorship debate]]
- [[agent-economy/agent-legal-tax-liability-framework|agent legal and tax liability framework]]
- [[agent-economy/agent-payment-protocol-four-way-comparison-2026|agent payment protocol four-way comparison]]
- [[agent-economy/agent-protocol-mainnet-adoption-2026|agent protocol mainnet adoption 2026]]
- [[agent-economy/ai-driven-trading-regulation-japan-2026|AI-driven trading regulation Japan 2026]]
- [[agent-economy/agent-driven-market-data-interpretation-pipeline|agent-driven market data interpretation pipeline]]
- [[agent-economy/agent-custody-and-authorization-framework-2026|agent custody and authorization framework]]
- [[agent-economy/agent-identity-defi-and-traditional-finance-bridge|agent identity DeFi and traditional finance bridge]]
- [[agent-economy/claude-code-extension-architecture|Claude Code extension architecture]]
- [[agent-economy/stripe-agent-toolkit-position|Stripe agent toolkit position]]
- [[fintech/INDEX|fintech index]]
- [[payment-firms/wealthnavi|WealthNavi]]
- [[security/module-path-confusion-supply-chain-attack|module path confusion supply chain attack]]
- [[security/fork-and-rebrand-5-layer-audit-framework|fork and rebrand 5-layer audit framework]]
<!-- /wiki-links:managed -->
