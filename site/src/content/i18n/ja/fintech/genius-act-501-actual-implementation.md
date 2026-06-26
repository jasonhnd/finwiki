---
source: fintech/genius-act-501-actual-implementation
source_hash: 4a45f33f40a3c34d
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "GENIUS Act §501  Denylist Mandate · 2025  実装実態"
translated_at: 2026-06-26T08:29:33.004Z
---
# GENIUS Act §501  Denylist Mandate · 2025  実装実態

## 要約

GENIUS Act §501 （18 2025年7月署名）は、米国のすべての**許可済み決済ステーブルコイン発行体**に対し、OFAC SDN 指定、GENIUS 固有の denylist 指示、または裁判所命令を受領した後、定められた応答時間内に**制裁対象アドレスのトークンを凍結・差押え・バーンできる技術能力**を持つことを求める。2025  の実装は、(a) SDN リストと並行して機械可読アドレスリストを公表する**ステーブルコイン専用 OFAC 報告チャネル**、(b) 技術的理由で延長可能な制裁対象アドレス凍結の **24時間応答枠**、(c) トークンコントラクト更新または事前配置 freezelist mapping による**スマートコントラクト執行**、(d) 発行体が指定に善意で対応した場合の**セーフハーバー責任保護**、(e) すべての凍結・バーン・差押え行為の FinCEN への月次**発行体報告**、(f) 凍結・差押え残高を 1099-DA 報告ストリームへ流す **IRS 連携**によって運用化される。この枠組みは、Circle と Tether が 2018–2020 以来持っていた blacklist 機能のような**任意の発行体慣行**を、**定義済みの執行時計を伴う法定義務**へ転換するもので、EU の **MiCA Article 23** に米国法上最も近い対応物である。相互運用性に関する個別の実装選択（Circle Arc のチェーンレベル denylist precompile、Stripe Tempo の許可制バリデータ denylist）は、この制度を見越して配置されている。

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の下に位置づけられる、より広い [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 mandate]] ノートの**運用上のフォローアップ**である。周辺の政策環境は [[fintech/regulatory-reset-2025-usa-crypto-policy|US 2025 regulatory reset]]、Treasury 側のフレームワークは [[fintech/treasury-stablecoin-policy-2025|Treasury 2025 stablecoin policy]]、制定前の事例史は [[fintech/chain-level-ofac-freeze-precedent|chain-level OFAC freeze precedent]] とあわせて読む。欧州比較は [[fintech/mica-overview|MiCA overview]] と [[fintech/mica-cross-border-implications|MiCA cross-border]] を参照。

## この項目が存在する理由

[[fintech/genius-act-501-denylist-mandate|§501 denylist mandate]] のノートは、§501  の**政策意図と設計意図**を記録しており、Circle が管理型 L1 として Arc を構築せざるを得なかった理由の逆算説明も含む。この項目は、法律が 2025 年7月に稼働した後の最初の18か月に**実際に何が起きたか**、すなわち OFAC チャネル設計、測定可能な発行体コンプライアンス負担、浮上した技術実装パターン（スマートコントラクト更新 vs precompile vs バリデータレベルフィルター）、初期の法的異議、OFAC・FinCEN・IRS の省庁間連携を記録する。両ノートはあわせて**政策から実務へのペア**を形成する。

## §501 法文 — 法律が実際に求めること

GENIUS Act §501  は、すべての許可済み決済ステーブルコイン発行体（PPSI）がライセンス条件として示すべき**最低限の能力**を定める。

1. **凍結能力** — 定められた応答時間内に指定残高を移転不能にする能力。
2. **バーン / 差押え能力** — 裁判所命令または OFAC 指令に従い、指定残高を永久消滅させる、または指定アドレスへ移転する能力。
3. **発行拒否** — 制裁対象アドレスへの mint および制裁対象アドレスからの償還を拒否する能力。
4. **報告** — すべての凍結、バーン、差押え、発行拒否イベントを FinCEN へ月次開示すること。
5. **監査証跡** — トリガー（SDN 指定、裁判所命令、OFAC GENIUS 指示）と、その結果生じたオンチェーン行為の改変不能な記録。
6. **セーフハーバー** — 有効な指定または命令に善意で対応した場合の民事責任保護。

この法律は、その能力を技術的に**どのように**実装するかまでは定めていない。実装パターンは、OCC、Federal Reserve、または州規制当局の監督承認を条件に発行体へ委ねられる（[[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust-bank charter]] で説明する二重トラック構造）。

## OFAC Denylist の範囲とチャネル設計

2025  実装では、既存の SDN リストの上に重ねる形で**ステーブルコイン専用の OFAC チャネル**が作られた。

| 情報源 | チャネル | 形式 | 更新頻度 | 含まれる内容 |
|---|---|---|---|---|
| OFAC SDN リスト | 公開ウェブ + RSS + CSV | 自由記述。BTC/ETH/TRX アドレスを含む場合がある | 指定発生時 | 世界の制裁対象者 |
| OFAC SDN 暗号資産アドレス別紙 | 同じ SDN フィードのアドレス欄 | チェーン別タグ付きアドレス文字列 | 指定発生時 | 既知ウォレットアドレスを持つ SDN 掲載対象の一部 |
| OFAC GENIUS §501  ステーブルコイン denylist | 新しい機械可読フィード（2025-Q4） | 署名付きJSON | 指定から 24  時間以内 | 制裁対象アドレス + 裁判所命令対象アドレス + GENIUS固有指示対象アドレス |
| FinCEN 情報共有 | Section 314(a) 並行枠 | 要請ごと | 要請時 | 銀行型の情報共有 |
| 裁判所命令 | 発行体への直接送達 | 法的文書 | 事案ごと | 民事差押え、刑事没収、判決債権者指示 |

新しい GENIUS §501  フィードは、発行体コンプライアンスの**運用上の背骨**であり、少なくとも次を含む。

- デジタル資産アドレスが判明している、既存 OFAC 権限下の**制裁対象者**（Specially Designated Nationals、セクター別制裁、地域別プログラム制限）。
- Treasury's Office of Terrorism and Financial Intelligence が特定した**テロ資金アドレス**。
- 米国連邦裁判所による**裁判所命令上の差押え**。執行の一貫性を確保するため OFAC チャネル経由で発行体へ転送される。
- OFAC と連携して FBI / FinCEN が特定した**ランサムウェア支払いアドレス**。

チェーンレベルの OFAC 凍結事例史（[[fintech/chain-level-ofac-freeze-precedent|chain-level freeze precedent]]参照）は、GENIUS チャネルを調整するための経験的基準線である。法制化前の先例として最も引用されるのは、2022  の Tornado Cash に関する Circle / Tether による USDC/USDT 凍結であり、当時は任意対応、2025年7月以降は法定対応となる。

## 発行体のコンプライアンス負担許可済み決済ステーブルコイン発行体にとって、§501  コンプライアンスはおおむね次の運用形態に変換される。

| コンプライアンス領域 | 運用要素 | 概算コスト / 要員 |
|---|---|---|
| アドレスリスト取込 | OFAC GENIUS フィードのリアルタイム消費 | 1–2 人のプラットフォームエンジニア |
| 凍結執行 | スマートコントラクトまたは precompile の凍結機能 + バックオフィス手順 | 2–4 人のエンジニア + コンプライアンス運用 |
| バーン / 差押えワークフロー | 裁判所命令確認を伴う multisig またはガバナンス手順 | 法務 + コンプライアンス + エンジニアリングで分担 |
| 月次 FinCEN 報告 | 凍結、バーン、差押え、発行拒否イベントの構造化報告 | 1 人のコンプライアンスアナリスト |
| 監査証跡 | 改ざん困難な内部ログ + オンチェーン参照 | 既存エンジニアリング能力 |
| 外部証明 | §501  管理が記述どおり運用されたことの監査確認 | 年間 $200k–$1M の監査費用 |
| 法務 | 指定レビュー、裁判所命令確認、セーフハーバー適用 | 年間 $500k–$3M |

ランレート費用は**年間 $3M–$10M**程度と見積もるのが妥当で、中規模発行体（流通額 $50B 未満）でも規模とともに上昇する。**固定費部分**は大規模発行体に有利に働く。**小規模または新規参入者**は構造的なコンプライアンスの堀に直面し、これは §501 の過小評価されがちな効果の一つである。

## 技術実装パターン発行体の実装は、レイテンシ、分散性、コストのトレードオフが異なる**4つの実装パターン**へ収束している。

### パターン1  · ERC-20  blacklist mapping（旧来の Circle / Tether 型）

トークンコントラクトが `blacklisted` mapping を保持する。特権ロール（通常は発行体が保有する multi-sig）がアドレスをブラックリスト化でき、`_beforeTokenTransfer` hook が各移転前に確認する。

- **レイテンシ**: 発行体 multi-sig の署名速度に左右され、通常は数分から数時間。
- **カバレッジ**: チェーンごと。発行体はトークンを展開したすべてのチェーンで執行する必要がある。
- **限界**: **sequencer やチェーン自体は凍結できない**ため、敵対的フォークは検閲耐性を持つコピーを作り得る。
- **実例**: Arc 以前の USDC、全チェーンの USDT、USDP、PYUSD。

### パターン2  · freezelist を伴うトークンレベル更新（§501 後の強化）

トークンコントラクトを更新するか、初期設計から `frozen_balances` mapping を追加し、アドレスごとの差押え額を記録する。これによりアドレス単位のブラックリストだけでなく**部分凍結**が可能になる。

- **レイテンシ**: 更新 timelock に左右される（多くは 24 時間）。
- **Coverage**: per-chain.
- **利点**: **部分差押え命令**（例: $5M を $20M 残高から差し押さえる）に対応できる。
- **実例**: Paxos USDG（2025-Q4発表）、Ripple RLUSD（[[fintech/ripple-rlusd-stablecoin|RLUSD]]参照）。

### パターン3  · チェーンレベル precompile（Circle Arc モデル）

凍結機能を、トークンコントラクトではなくガバナンスモジュールが制御するコンセンサス層の**状態付き precompile**として実装する。Circle Arc はこの経路を取った。

- **レイテンシ**: validator consensus に左右される（サブブロック）。
- **Coverage**: entire chain.
- **利点**: **エンドツーエンド執行**。DEX や wrapper の有無にかかわらず、denylist がトークンに適用される。
- **限界**: 発行体が L1 を所有するか強く影響する必要がある。敵対的フォークはなお非準拠のチェーンコピーを作り得る。

### パターン4  · 許可型validatorフィルター（Stripe Tempo モデル）

チェーンの validator set を**許可型**にし（通常はパートナーが運営する少数のKYB済み validator。選定パターンは [[fintech/wall-street-crypto-network-neutrality|network neutrality]] 参照）、各 validator が denylist 対象アドレスに触れる取引を破棄するフィルターを実行する。トークンコントラクトは通常型だが、validator の挙動で執行する。

- **レイテンシ**: validator の挙動に左右される（サブブロック）。
- **Coverage**: entire chain.
- **利点**: precompile より単純で、validator 多様性によって正統性を補える。
- **限界**: 許可型チェーンが必要であり、Ethereum のような permissionless L1 では実行困難。

パターン選択は**政策とアーキテクチャが結合**した問題である。パターン3  と 4  は発行体によるチェーン支配を要求し、これが [[fintech/genius-act-501-denylist-mandate|§501 → chain ownership]] のリバースエンジニアリング上の核心である。発行体・チェーンのトリレンマ比較は [[fintech/stablecoin-chain-token-strategy-trilemma|stablecoin chain trilemma]] を参照。

## セーフハーバーによる責任保護

§501  は、denylist 対象アドレスに生じた損失について、次の場合に発行体を民事責任から保護する**セーフハーバー**を含む。

- 発行体が**有効な OFAC 指定**、**裁判所命令**、または **GENIUS §501  指示**に基づいて行動した。
- 行為が**比例的**であった（例: 部分命令には部分差押え、全面指定には全面凍結）。
- 発行体が要求期限内に FinCEN チャネルを通じてその行為を**報告**した。
- 発行体がトリガーの**監査証跡証拠**を維持した。

セーフハーバーは、次について発行体を保護しない。

- 有効な指定または命令なしに行った**誤った自己開始凍結**。
- 部分差押え命令に対して全面凍結を行うような**不比例な行為**。
- 有効な指定を無視した場合の**不作為請求**。

これは §501 の**保険的な脚**である。これがなければ、発行体は 2025 以前の任意凍結者が負っていたのと同じ訴訟エクスポージャーに直面する。したがって、この法律自体がコンプライアンス姿勢を取る発行体にとっての**リスク低減ツール**となる。

### FinCEN 報告（月次）

発行体は、すべての凍結、バーン、差押え、発行拒否イベントについて、次を含む構造化報告を提出する。

- トリガー文書（SDN指定、OFAC指示、裁判所命令）。
- 影響を受けるアドレス。
- ドル金額とトークン数量。
- 対象チェーン。
- オンチェーン行為のタイムスタンプ。
- 行為後の処理状況。

このストリームは、FinCEN、OFAC、そして省庁横断の Bank Secrecy Act 装置にとっての**構造化された監視データセット**になる。より広い制裁アーキテクチャは [[fintech/aml-cft-fatf-grey-list-overview|FATF grey list]] と [[fintech/aml-cft-fatf-grey-list-cross-border-implications|FATF cross-border]] を参照。

### IRS 連携凍結・差押え残高は既存の **1099-DA 報告ストリーム**へ流れる（[[fintech/irs-1099-da|IRS 1099-DA]] と [[fintech/carf-1099da-end-of-crypto-anonymity|CARF + 1099-DA]] 参照）。差し押さえられた残高は元の保有者にとって**みなし処分**として扱われ、税務上の影響が生じ得る。IRS-OFAC-FinCEN 連携は、Q3 2025 から活動する省庁横断共同ワーキンググループを通じて運用化されている。

### 州規制当局との連携発行体が GENIUS の二重トラックの下で州規制対象である場合、発行体の本拠州規制当局は同じ月次報告を受け取り、OCC および Federal Reserve と連携して連邦基準の充足を確認する。州規制当局は**追加的な消費者保護権限**を保持するが、§501  の最低基準を緩和することはできない。

## 比較 · GENIUS §501  vs MiCA Article 23



| 比較軸 | GENIUS §501 （米国） | MiCA Art. 23 （EU） |
|---|---|---|
| 適用範囲 | すべての許可済み決済ステーブルコイン発行体 | すべての EMT / ART 発行体 |
| トリガー源 | OFAC SDN + GENIUS §501  フィード + 裁判所命令 | EU制裁 + 各国裁判所命令 + EBA 重要発行体指示 |
| 応答時間 | 24 時間（技術的理由で延長可能） | 「不当な遅滞なく」（解釈上は通常 24–72 時間） |
| 実装ガイダンス | 監督当局承認を条件に発行体が選択 | EBA 技術基準（2025統合版） |
| 報告頻度 | FinCEN へ月次 | NCA + EBA へ四半期ごと |
| セーフハーバー | あり、条件付き | 一般的な金融サービス責任枠組みを通じて黙示的 |
| クロスボーダーアドレス | 単一のグローバル denylist | EU全域リストを各国リストと調整 |
| アルゴリズム型ステーブルコイン | 禁止 | 禁止 |
| 許可型チェーン義務 | 機能的にはあり（技術中立だが実務上チェーン支配が必要） | 機能的にはあり（同様の de facto 結果） |

**機能的な帰結**は収束している。両制度とも、コンプライアンス条件として実質的に**チェーン支配または同等の執行能力**を求め、アルゴリズム型ステーブルコインを禁止する。**運用上の相違**は主に報告頻度とセーフハーバー枠組みの厚みにある。規制横断比較は [[fintech/global-stablecoin-regulatory-five-pole-matrix|five-pole matrix]] を参照。

## 法的異議申立てと初期判例面

Q1 2026, までに、初期の法的異議が2件具体化している。

1. **§501  発行拒否に対する憲法上の異議。** 聴聞なしに指定された制裁対象の米国人アドレスへの mint 拒否を発行体に義務づけることは Due Process に反する、という主張で異議が提起されている。行政法面、すなわち OFAC 指定手続の Administrative Procedure Act 上の審査が主な争点である。
2. **Tornado Cash 残存訴訟。** 法制化前の Tornado Cash 章（Van Loon v. Treasury、2025-Q1,  における OFAC の Tornado Cash 指定撤回、および同時期の Circle / Tether 凍結への異議）は、「何が制裁可能なアドレスか」という教義上の境界を引き続き試している。これは新しい OFAC GENIUS フィードの**入力集合**を決めるため、§501 に関係する。

どちらの異議も短期的に §501 の存続を脅かすものではないが、denylist の**範囲**（人間の管理者がいない smart-contract アドレスを指定できるか、mixer アドレスが該当するか）と、指定前に必要な**手続的保護**を形づくる。

## ステーブルコインのプロダクト設計で何が変わるか

§501  実装は、プロダクト設計に3つの現実を強制する。

1. **アーキテクチャ選択は政策選択である。** permissionless EVM への展開は、発行体がトークンコントラクトレベルで凍結できる場合にのみ運用上準拠する。管理型 L1  または permissioned L2  はエンドツーエンドで運用上準拠する（[[fintech/genius-act-501-denylist-mandate|§501 → chain ownership reverse explanation]]）。
2. **クロスチェーン展開は負債である。** トークンを展開する各チェーンは別個のコンプライアンス執行面になる。§501 後の発行体フットプリントは、より強い執行力を持つ**少数チェーンへの集約**へ向かっている（2022–2024  の「どこでもマルチチェーン」戦略の逆）。
3. **DeFi 統合には境界がある。** permissionless DEX や AMM との統合はコンプライアンスを破らない（凍結はトークンコントラクトレベルでなお機能する）が、mixer、privacy protocol、匿名化ツールとの統合は法的・評判上高コストになる。複数の主要発行体は Q3 2025 以降、privacy-protocol 統合から公然と距離を置いている。

より広い市場構造上の含意は [[fintech/onchain-finance-vs-crypto-bifurcation|on-chain finance vs crypto bifurcation]] と [[fintech/stablecoin-chain-sovereign-currency-divide|stablecoin chain / sovereign currency divide]] を参照。

## 米国外発行体への含意

**米国人へ提供**したい非米国発行体は、GENIUS Act 上の PPSI となった時点で §501  の対象になる。米国人に提供しない発行体は直接義務を避けられるが、次を通じた**二次的エクスポージャー**に直面する。

- **米国居住 validator の参加**（トークンが建てられた permissionless chain 上の米国人 validator は、それ自体が OFAC 対象になる）。
- **オフランプ圧力**（米国規制下の取引所は、§501 相当の凍結を執行できないトークンを上場しない）。
- **銀行関係圧力**（米国コルレス銀行が関係を拒む）。

純効果は、OFAC のドル決済を通じた域外適用パターンに似た**ソフトな域外到達**である。管轄権到達の比較分析は [[fintech/mica-cross-border-implications|MiCA cross-border implications]] と [[fintech/jurisdiction-list-monetary-protectionism|jurisdiction list as monetary protectionism]] を参照。

## 関連項目

- [[fintech/INDEX|fintech index]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS §501 mandate (policy)]]
- [[fintech/regulatory-reset-2025-usa-crypto-policy|US 2025 regulatory reset]]
- [[fintech/treasury-stablecoin-policy-2025|Treasury 2025 stablecoin policy framework]]
- [[fintech/occ-bank-charter-crypto-2025|OCC national bank charter for crypto 2025]]
- [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust-bank charter]]
- [[fintech/cftc-sec-crypto-jurisdiction|CFTC vs SEC jurisdiction]]
- [[fintech/chain-level-ofac-freeze-precedent|chain-level OFAC freeze precedent]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|five-pole matrix]]
- [[fintech/mica-overview|MiCA overview]]
- [[fintech/mica-cross-border-implications|MiCA cross-border]]
- [[fintech/paypal-pyusd-stablecoin|PYUSD]]
- [[fintech/tether-business-model-short-treasury-yield|Tether 事業モデル]]
- [[fintech/circular-reserve-asset-flywheel-overview|circular reserve flywheel]]
- [[fintech/circular-reserve-asset-flywheel-risk-cases|circular reserve risk cases]]
- [[business/hester-peirce-sec-regulatory-pivot-case|Hester Peirce pivot case]]
- [[business/larry-fink-blackrock-digital-asset-template|Larry Fink template]]
- [[exchanges/us-crypto-licensing-multi-layer-system|US crypto licensing multi-layer]]

## 出典

- OFAC SDN list and recent actions: https://ofac.treasury.gov/
- OFAC GENIUS §501  チャネル文書: Treasury publications 2025-Q4
- Treasury デジタル資産政策: https://home.treasury.gov/policy-issues/financial-markets-financial-institutions-and-fiscal-service/digital-assets
- FinCEN news room: https://www.fincen.gov/news-room
- IRS digital assets: https://www.irs.gov/digital-assets
- GENIUS Act statutory text (Public Law as enacted July 2025)
- Federal Register filings on §501 implementing rules
- MiCA Article 23  に関する EBA 技術基準（比較用）: https://www.eba.europa.eu/regulation-and-policy/markets-in-crypto-assets-mica
- ESMA MiCA 文書: https://www.esma.europa.eu/policy-activities/crypto-assets
