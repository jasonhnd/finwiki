---
source: policy-finance/jbic-overseas-investment-underwriting-process
source_hash: 2f068d2d6cec51e3
lang: ja
status: machine
fidelity: ok
title: "JBIC 海外投資融資の審査プロセス"
translated_at: 2026-06-19T12:43:19.849Z
---

# JBIC 海外投資融資の審査プロセス

## Wiki route

本エントリは [[policy-finance/INDEX|policy-finance index]] の下に、[[financial-regulators/jbic|国際協力銀行 (JBIC)]] に関する審査プロセスの詳細解説として位置する。JBIC 融資が [[policy-finance/nexi|NEXI]] 保険、[[policy-finance/jogmec|JOGMEC]] エクイティ、およびメガバンクの商業債務とどのように並ぶかについては [[policy-finance/japan-project-finance-stack-diagram|Japan project finance stack diagram]] と；JBIC が運営する期間上限については [[policy-finance/oecd-export-credit-arrangement|OECD Export Credit Arrangement]] と；政策分担の反対側にある ODA ファイナンスの境界については [[policy-finance/jica|JICA]] と；2012 以前の機関史については [[policy-finance/japan-eximbank-history|Japan Eximbank history]] と；そして同じメガバンクがプライベートなクロスボーダー案件をどのようにシンジケートし組成するかについては [[finance/japan-acquisition-finance|Japan acquisition finance]] と併せて読むこと。

## TL;DR

JBIC の審査は、二項対立の資金勘定の区別 —— **一般業務勘定** 対 **特別業務勘定** —— を軸として構成され、その上に **輸出バイヤーズクレジット / サプライヤーズクレジット** から **資源輸入のための輸入融資**、**海外投資融資（OIL）**、**アンタイドローン** を経て、選択的に **エクイティ参加** に及ぶプロダクト分類が重ねられている。特別業務勘定（2016創設）は、一般業務勘定では価格付けできない政策戦略的・高リスクな取引で損失を取ることを JBIC に明示的に認める —— 半ば政策銀行、半ば国費投入型のマーチャントバンクである。審査フロー自体はおおむね 6 つのフェーズで進行する：**(1) 政策 / パイプラインスクリーニング**（METI / MOFA / MAFF の優先事項および JBIC 中期経営計画に照らして）；**(2) 初期の信用・カントリーリスクスクリーニング**（JBIC のカントリーリミットおよびソブリン格付に照らして）；**(3) 詳細な信用委員会作業**（技術・環境・法務アドバイザーを伴い、プロジェクトファイナンスでは標準的なレンダーズ・エンジニア / マーケットコンサルタント / リーガル・デューデリジェンスのスタックが動員される）；**(4) **[[policy-finance/oecd-export-credit-arrangement|OECD Arrangement]]** コンプライアンスレビュー**（最低プレミアム、返済条件、気候 / 石炭セクターの諸了解）；**(5) インタークレジター・協調融資の組成**（メガバンク（[[megabanks/mufg|MUFG]] / [[megabanks/smfg|SMFG]] / [[megabanks/mizuho-fg|Mizuho FG]]）、[[policy-finance/nexi|NEXI]]、および関連する場合はピア ECA（US EXIM、K-EXIM、UKEF、KfW IPEX、Bpifrance）と）；そして **(6) 総裁承認・取締役会サインオフ**（コモンタームズ / ローン契約および担保信託の実行に先立つ）。JBIC の政策スタンスは 2022 以降、**GX（エネルギー / 脱炭素）、重要鉱物サプライチェーン、フレンドショアリング、半導体、選別された対外 M&A** 支援へと顕著にシフトしており、並行して新規石炭火力発電ファイナンスからの撤退と LNG 気候フレーミングの厳格化が進んでいる。

## 1. 機関 / 部門位置

| Item | Detail |
|---|---|
| Parent entity | [[financial-regulators/jbic|JBIC]] (株式会社国際協力銀行), 100% state-owned special company, sole shareholder 財務大臣 |
| Statutory basis | 株式会社国際協力銀行法 (平成 23 年法律第 39 号) |
| Predecessor history | 日本輸出銀行 (1950) → 日本輸出入銀行 (1953) → 統合 + OECF (1961) → 旧 JBIC (1999) → JFC 統合 (2008-10) → 再独立 (2012-04) — see [[policy-finance/japan-eximbank-history|Japan Eximbank history]] |
| Fund-account split | **一般業務勘定** (General Operations) for standard policy-finance lending and **特別業務勘定** (Special Operations) for higher-risk policy-strategic transactions, established 2016 |
| Business lines | Export credit (buyer / supplier), import credit (resource imports), overseas investment loan, untied loan, equity participation, guarantee, bond-purchase facilities |
| Funding base | FILP borrowing, government-guaranteed bond issuance, foreign-currency funding via FILP foreign-bond programs; balance-sheet currency mix mostly USD given underlying loan-book currency |
| Supervising authorities | 財務大臣 (株主・主管); METI on industrial-policy coordination; MOFA on bilateral / regional coordination |

一般業務勘定対特別業務勘定の区分は、審査の目的にとって最も重要な構造的特徴である。一般業務勘定は通常の政策銀行的な信用規律によって制約される；特別業務勘定は、さもなければファイナンス不可能な政策戦略的取引で JBIC が損失を取れるよう、明示的に創設された。

### 2.1 プロダクト分類

| Product line | Borrower | Typical use | OECD Arrangement applicability | Account |
|---|---|---|---|---|
| **Export buyer credit** | Foreign buyer of Japanese goods / services | Foreign purchase of Japanese plant, ship, rolling stock, satellite, equipment | Yes — Arrangement applies | General + Special |
| **Export supplier credit** | Japanese exporter | Receivables financing on long-tenor export contracts | Yes | General |
| **Import loan** | Japanese importer / commodity buyer | Long-term resource import contracts (LNG, oil, metals) tied back to Japanese energy / commodity security | Yes (where export-credit-equivalent terms) | General + Special |
| **Overseas investment loan (OIL)** | Japanese-affiliated overseas SPV / Japanese parent | Equity contributions, subordinated financing, working capital for overseas projects and subsidiaries | Partial (Arrangement applies to export-credit-equivalent slices) | General + Special |
| **Untied loan** | Sovereign / sovereign-adjacent foreign borrower | Industrial development, infrastructure, resource-security support without product-tied contract | Yes (untied loan disciplines) | General + Special |
| **Equity participation** | Project SPV / industrial entity | Minority equity in strategic projects (energy, supply chain, critical minerals, GX) | Outside Arrangement (equity, not loan) | Special primarily |
| **Guarantee** | Commercial banks / bondholders | Guarantee of commercial-bank loans, bond issuance | Yes for export-credit-equivalent terms | General + Special |
| **Bond purchase** | Foreign-state issuer / supranational | Direct purchase of foreign-state or supranational bonds | Outside core ECA frame | Special |

「JBIC 海外投資審査」が最も一般的に指す主力プロダクトは、**海外投資融資（OIL）** —— 日本関連の海外 SPV、または日本の親会社のクロスボーダー・エクイティ注入向けの長期融資である。

### 2.2 ODA 円借款 vs 特別業務勘定 — 分かれ目

重要な境界：**ODA 円借款** は [[policy-finance/jica|JICA]] によって運営され、JBIC ではない。1999-2008 の法定前身は、旧 JBIC の ODA 部門（OECF 系譜）をその政策金融部門と統合した；その後、2003-10 の ODA の JICA への移管、および 2008 / 2012 の JFC のエピソードが、商業グレードの海外金融を ODA のグラント / 譲許的融資から分離した。特別業務勘定は ODA **ではない** —— それは貧困削減基準に照らした譲許的 ODA ファイナンスではなく、潜在的損失に対する国会の歳出承認によって認可された、リスク負担型の政策金融融資およびエクイティ活動である。

審査に対する含意：フロンティア国のインフラプロジェクトは、ODA で資金調達される構成要素（技術協力、プロジェクトに隣接する公共インフラ —— JICA が資金供与）に加え、JBIC OIL + NEXI カバー + メガバンクのトランシェを伴う商業グレードのプロジェクトファイナンスを持ちうる。この 2 つのレーンは異なるドキュメンテーション、異なるガバナンス、異なる財政スタンスを持ち、JBIC の審査委員会は JICA 資金供与の構成要素を、自らの信用判断の一部ではなく外生的な背景として扱う。

### 2.3 最も頻繁に登場するセクターカテゴリー

実務上、JBIC の海外投資融資ブックは、繰り返し登場する一連のセクターバーティカルに偏っている：

- **エネルギー（LNG、石油・ガス上流、中流、IPP 発電）。** 歴史的にエクスポージャー最大；2021 以降、気候フレーミングによって急激に再形成された。
- **インフラ（鉄道 / メトロ、港湾、水、通信）。** しばしば鉄道車両や機器の輸出が絡み、バイヤーズクレジット / サプライヤーズクレジットのオーバーレイが現れる。
- **重要鉱物・電池サプライチェーン。** 2022 以降ウェイトが上昇 —— 銅、ニッケル、リチウム、コバルト、レアアース、加えて電池 / EV 下流。
- **半導体・ハイテク産業サプライチェーン。** フレンドショアリングのオーバーレイ。
- **対外日本企業 M&A。** JBIC OIL スライスがメガバンクのシンジケート型買収トランシェを補完する、中〜大型の日本企業クロスボーダー買収 —— [[finance/japan-acquisition-finance|Japan acquisition finance]] に記述された構造とつながるが、JBIC スライスは政策整合的なチケットを担う。
- **再生可能エネルギー、水素 / アンモニア、CCS。** 2022以降の GX フレームの下で大きく成長する領域。
- **航空宇宙・防衛隣接。** 選択的に、主に輸出バイヤーズクレジットを通じて。

このミックスは、JBIC 中期経営計画（現在は GX、サプライチェーンレジリエンス、フレンドショアリング、対外 M&A を強調）と、METI / MOFA の優先事項によって形作られる。

## 3. 審査 / underwriting プロセス

典型的な大型海外投資融資またはアンタイドローンのエンドツーエンドの審査フローは、6 つのフェーズを通って進行する。

### 3.1 Phase 1 — 政策 / パイプラインスクリーニング

- インバウンドの照会（日本のスポンサー、外国の借り手、ピア ECA の紹介）または JBIC の産業 / 地域担当者による能動的なカバレッジを通じたオリジネーション。
- JBIC **中期経営計画** の政策優先リストおよび METI / MOFA 主導のセクター別マスタープラン（エネルギー戦略、重要鉱物戦略、インフラ輸出戦略）に対するクロスチェック。
- 特別業務勘定の可能性がある案件については、その取引が損失を被りうるが政策上正当化されるかの早期判断（勘定選択を駆動する）。
- 気候センシティブなセクターについては、JBIC の公表された気候ファイナンススタンス（例：新規の海外石炭火力発電なし；LNG ファイナンスの条件厳格化）に対する早期チェック。

### 3.2 Phase 2 — 初期の信用・カントリーリスクスクリーニング

- [[policy-finance/oecd-export-credit-arrangement|OECD Arrangement]] カントリーリスク分類（Country Risk Classification 0–7）に整合した JBIC の内部カントリーグレーディングを用いたカントリーリスク分類。
- JBIC のポートフォリオリミットに対するカントリーエクスポージャーリミットのチェック。
- スポンサー / 借り手の予備的信用スクリーン —— プロジェクトファイナンスではスポンサーミックス（日本の商社、日本の電力会社、ホスト国の NOC / 国営鉱業会社、国際メジャー）に注目；日本の親会社向け OIL では親会社格付と連結レバレッジに注目。
- 初期の組成観 —— 単一名コーポレートローン対プロジェクトファイナンス対ソブリン裏付けアンタイドローン —— が下流のアドバイザー動員を駆動する。

### 3.3 Phase 3 — 詳細な信用委員会作業とデューデリジェンス

プロジェクトファイナンス OIL については、標準的なアドバイザースタックが動員される：

- **レンダーズ・テクニカルアドバイザー** — エンジニアリングおよび建設リスクのレビュー。
- **レンダーズ・マーケットコンサルタント** — オフテイク / 市場価格のモデリング（LNG ネットバック、鉱業オフテイクのエコノミクス、電力購入契約のキャッシュフロー安定性）。
- **レンダーズ・インシュアランスブローカー** — [[policy-finance/nexi|NEXI]] カバーおよび任意の民間政治リスク保険オーバーレイを含むバインド構造。
- **レンダーズ・リーガルカウンセル** — 日本側およびホスト国のカウンセル；ドキュメンテーション標準は通常、国際プロジェクトファイナンスの LMA スタイルの先例に整合。
- **環境・社会 DD** — JBIC の **環境社会配慮確認のためのガイドライン**（「JBIC ガイドライン」、OECD コモンアプローチおよびエクエーター原則に整合）に照らして評価。
- 内部信用モデリング（DSCR 予測、ダウンサイドケースのストレス、ローンライフカバレッジレシオ、カントリーリスクオーバーレイ）。
- 内部の産業 / セクターレビュー（例：LNG については長期ガス需要シナリオへの感応度；重要鉱物については価格暴落への感応度）。

単一名コーポレート OIL（例：外国買収に資金供与する日本の親会社向け融資）については、アドバイザー動員は通常より軽く、焦点は親会社格付分析、構造的信用補完、ディール後のモニタリングコベナンツへと移る —— [[finance/japan-acquisition-finance|Japan acquisition finance]] に記述されたメガバンクの買収ローンフローに類似する。

### 3.4 Phase 4 — OECD Arrangement コンプライアンスレビュー

- カントリーリスク分類の下での最低プレミアムレート（MPR）計算。
- 返済期間上限のチェック（現在、典型的な輸出信用で最大 10 年、再生可能 / 気候適合型取引で 14 年、セクター別了解の下での一部プロジェクトファイナンスカテゴリーで 18 年）。
- 頭金最低額（通常 15%）および構造化された返済プロファイルのコンプライアンス。
- **石炭セクター了解（2021 改訂）** — OECD Arrangement に従うメンバーにとって、新規石炭火力発電ファイナンスを事実上閉ざした。
- 再生可能エネルギー、水、一部の気候適合型プロジェクトのための **気候変動セクター了解**。
- アンタイドローンについては、Arrangement の下でのアンタイドローン諸規律。
- 特別業務勘定の取引については、勘定固有のコンプライアンスに加え、高リスクの政策正当化ドキュメンテーション。

このコンプライアンスレビューは結果を左右する：一般業務勘定の下で Arrangement パラメーターを満たさない取引は、明確な政策正当化を伴う場合にのみ、特別業務勘定へ再ルーティング可能となりうる。

### 3.5 Phase 5 — インタークレジター / 協調融資の組成

- **メガバンク協調融資の組成。** ほぼすべての大型 OIL 案件は、[[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMFG]]、[[megabanks/mizuho-fg|Mizuho FG]] によって提供される並行商業トランシェを伴い、通常は 1 行が **エージェント / ファシリティバンク** となる。
- **NEXI オーバーレイの組成。** 保険カバーは商業トランシェの一部またはエクイティエクスポージャーの一部をラップしうる；構造選択は JBIC と [[policy-finance/nexi|NEXI]] の間で共同で交渉される。
- **ピア ECA 協調融資。** 大型の LNG、鉱業、または鉄道 / メトロ案件については、US EXIM、K-EXIM、UKEF、KfW IPEX、Bpifrance、EDC と並ぶ並行 ECA ファイナンスが一般的。JBIC はピア ECA と共同でコモンタームズ契約およびインタークレジター契約に参加する。
- **マルチラテラル協調融資。** ADB / 世界銀行 / AIIB の参加は、コモンタームズ上で JBIC OIL と構造的に両立する。
- **担保信託およびインタークレジターのメカニクス。** 全シニアレンダー横断の共同担保エージェント；プロジェクト担保の取り分、議決閾値、エンフォースメントのメカニクス、エクイティキュア権はすべてコモンタームズ・ドキュメンテーションを通じて交渉される。

### 3.6 Phase 6 — 承認と実行

- 適切な閾値での **内部信用委員会** 承認（部門長 → 上級経営陣 → 総裁 → 取締役会、チケットサイズと政策的顕著性とともにエスカレート）。
- 標準的な委員会閾値を超える取引のための **総裁 / 執行役承認**。
- 最大の取引のための **取締役会サインオフ**。
- 協調融資当事者と並んだ **コモンタームズ契約** および **ファシリティ契約** の実行。
- ファイナンシャルクローズ後の **ドローダウンおよび継続的なコベナンツモニタリング**。

典型的な大型 OIL の案件サイクルは、初期マンデートからファイナンシャルクローズまで、プロジェクトファイナンスで 12–24 か月、単一名コーポレート OIL で 6–12 か月を要し、政治的にセンシティブな、または初物（first-of-a-kind）の取引では大幅に長いタイムラインとなる。

## 4. 民間金融機関との co-financing / 連携

JBIC の構造的なコ・カウンターパートは日本のメガバンクである。標準的なシンジケーション・ジオメトリー：

- **エージェントバンクとしての 1 つの日本のメガバンク。** [[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMFG]]、または [[megabanks/mizuho-fg|Mizuho FG]] がインタークレジターのメカニクス、ドローダウンウォーターフォール、クローズ後のモニタリングを運営する。
- **JBIC ダイレクトトランシェと並ぶメガバンクの商業トランシェ。** メガバンクからの純粋な商業ローン + JBIC OIL スライス + しばしば NEXI カバー付きスライス。JBIC と NEXI の相互作用は構造的である —— 完全な階層化については [[policy-finance/japan-project-finance-stack-diagram|Japan project finance stack diagram]] を参照、そこでは JBIC が直接の貸し手として、NEXI が商業スライスをラップする保険者として位置する。
- **地方銀行 / 信金 / 農林中金の参加。** 対外 M&A または国内アンカー型クロスボーダー構造内の日本所在 SPV ファイナンスについては、[[cooperative-banks/norinchukin|Norinchukin]] および大手地方銀行が参加しうる。
- **外国銀行の参加。** 大型の LNG および鉱業案件については、フランス、シンガポール、オーストラリア、米国、中国の銀行が日常的に協調融資する。
- **シンジケート内のピア ECA。** US EXIM、K-EXIM、UKEF、KfW IPEX、Bpifrance、EDC、Cesce —— コモンタームズ・ドキュメンテーション、調和された保険 / ダイレクトローン構造。

NEXI と JBIC の重複は構造的であり、めったに競合しない：JBIC は直接の貸し手、NEXI は保険者である。同じプロジェクトが JBIC 直接ローンと NEXI カバー付き商業ローンの両方を持つ場合、この 2 つの国家機関は重複、停止条件、情報共有について調整する。

ECA 関与のない純粋な民間の対外買収シンジケートについては、同じメガバンクが異なるシンジケーション・ジオメトリーを運営する —— [[finance/japan-acquisition-finance|Japan acquisition finance]] に記述されている。JBIC アンカー型スタックは、同じエージェントバンクを用いるにもかかわらず、純粋な商業スタックとは構造的に区別される。

## 5. 政策目標と政府関与

JBIC の海外投資政策スタンスは以下によって形作られる：

- **中期経営計画**（現在は GX、サプライチェーンレジリエンス、フレンドショアリング、対外 M&A、インフラ輸出を強調）。
- **内閣 / METI 主導のセクター別マスタープラン** —— エネルギー基本計画、重要鉱物戦略、GX 推進戦略、アジア・ゼロエミッション共同体（AZEC）イニシアティブ、インフラ輸出計画。
- **MOFA の二国間・地域調整** —— 特にソブリン・カウンターパーティのアンタイドローンおよび大型インフラファイナンスについて。
- **財政投融資（FILP）歳出** —— 国会承認の年次資金上限。
- **特別業務勘定（2016）** —— 高リスクの政策戦略的取引のためのリングフェンスされた権限とリザーブ。

JBIC の年間融資量と政策スタンスは各中期計画サイクルとともにローテーションし、セクターミックスは METI と内閣の優先事項が進化するにつれて、エネルギー / 資源、インフラ、製造業、サプライチェーンファイナンスの間でシフトする。

## 6. 経済安全保障 / 最近の方針シフト

おおむね 2022 以降、JBIC の政策スタンスは **経済安全保障** を軸として再構成されてきた：

- **重要鉱物サプライチェーン。** 銅、ニッケル、リチウム、コバルト、レアアース —— オーストラリア、インドネシア、カナダ、チリ、南米、アフリカにおける日本関連サプライチェーンプロジェクトへのエクイティ、OIL、アンタイドローン支援。
- **電池・EV サプライチェーン。** 重要鉱物の下流 —— 電池の正極 / 負極材料、セル製造。
- **半導体・ハイテク産業サプライチェーン。** 友好的な法域における拡張プロジェクトの協調融資を含む、日本関連の半導体材料・装置キャパシティのフレンドショアリング。
- **GX / エネルギートランジション。** 再生可能エネルギー、洋上風力、水素 / アンモニア、CCS、AZEC フレームの下での地域火力発電所におけるアンモニア混焼。
- **LNG 気候フレーミング。** 気候適合性フレームワークに照らした新規 LNG ファイナンスのより厳格なスクリーニング、一方で定められた文脈においてトランジション燃料としての LNG を引き続き支援。
- **新規の海外石炭火力発電ファイナンスなし。** 2021 G7 コミットメントおよび 2021 OECD 石炭セクター了解の更新に整合した公的スタンス。
- **対外 M&A 支援。** 主要な日本企業のクロスボーダー買収ファイナンスにおける OIL スライス。
- **カントリースタンスのシフト。** 経済安全保障またはサンクション上の考慮が適用される特定の法域への新規ファイナンスの事実上の縮小。

特別業務勘定は、一般業務勘定の信用規律では届かないこれら政策戦略的取引で、JBIC が損失負担リスクを取ることを可能にする制度的ビークルである。

## 7. Comparative position — JBIC OIL vs adjacent lenders

| Dimension | JBIC OIL (General Operations) | JBIC OIL (Special Operations) | Megabank cross-border loan | [[policy-finance/jica\|JICA]] overseas investment / finance | Peer ECA direct loan (US EXIM, K-EXIM, UKEF) |
|---|---|---|---|---|---|
| Lender type | State direct policy lender | State direct policy lender, expanded risk-bearing | Commercial deposit-funded lender | State direct lender with development mandate | State direct policy lender |
| Typical tenor | Up to 18+ yrs under sector understandings | Up to 18+ yrs | 5–10 yrs typically | Mid- to long-tenor concessional | Sector-understanding-bounded |
| Currency mix | USD, JPY, EUR | USD, JPY, EUR | Customer-driven | JPY-concessional + foreign-currency | USD primary |
| OECD Arrangement application | Applies (Arrangement member) | Applies | Outside Arrangement (pure commercial) | Distinct (ODA disciplines) | Applies |
| Risk-bearing posture | Disciplined policy-finance | Higher, loss-bearing authorised | Bank-balance-sheet-constrained | Development / concessional | Disciplined policy-finance |
| Typical co-lender | NEXI + megabanks + peer ECAs | NEXI + megabanks + peer ECAs | JBIC / NEXI / megabank peers | JBIC selectively + multilaterals | JBIC + multilaterals + commercial banks |
| Supervising authority | MoF (with METI / MOFA coordination) | MoF (with METI / MOFA coordination) | FSA | MOFA | National-specific (US Treasury, Korean MoEF, UK Treasury) |

JBIC 内部の一般 / 特別の区分は、最も重要な内部的差別化である。ピア ECA の比較は構造的に近い —— 日本の JBIC、韓国の K-EXIM、フランスの Bpifrance、ドイツの KfW IPEX、英国の UKEF、米国の EXIM はすべて同じ Arrangement 諸規律の下で運営され、頻繁にマルチ ECA スタック上で協調融資する。

## 8. Post-financial-close monitoring

ファイナンシャルクローズ後、典型的な大型 OIL における JBIC の継続的役割は以下のとおり：

1. **停止条件（CP）管理。** エージェントバンクと協調した、初回ドローダウン前の最終 CP 充足。
2. **ドローダウン管理。** NEXI カバー付き商業トランシェおよびスポンサーエクイティと並んだプロラタ・ドローダウン；JBIC のドローダウン規律は、しばしばレンダーズ・テクニカルアドバイザーによる建設マイルストーン認証に整合する。
3. **コベナンツモニタリング。** プロジェクト DSCR、市場条件テスト、スポンサーサポート義務、JBIC ガイドラインに沿った環境・社会コンプライアンス。
4. **信頼性テスト管理。** COD（商業運転開始日）において、プロジェクトは、スポンサーサポート確約から純粋なプロジェクトキャッシュフローサービスへ切り替わる前に、レンダー信頼性テストに合格しなければならない。
5. **リストラクチャリング管理。** ストレス時（コストオーバーラン、市場下落、セキュリティインシデントを含むフォースマジュール事象）には、リストラクチャリングがコモンタームズの債権者グループ横断で調整され、商業トランシェがカバーされている場合は並行して NEXI のクレーム処理が行われる。
6. **リファイナンス対応。** COD 後の商業トランシェの債券またはサステナビリティリンク市場へのリファイナンスは一般的；JBIC の直接ローントランシェは通常、その予定満期までそのまま残る。

単一名コーポレート OIL については、モニタリングはコーポレートローンのコベナンツトラッキングに近い —— レバレッジおよびインタレストカバレッジレシオのコンプライアンス、制限付支払いテスト、報告義務。

## Related

- [[policy-finance/INDEX]]
- [[policy-finance/japan-policy-finance-system]]
- [[policy-finance/japan-project-finance-stack-diagram]]
- [[policy-finance/japan-eximbank-history]]
- [[policy-finance/oecd-export-credit-arrangement]]
- [[policy-finance/nexi]]
- [[policy-finance/jogmec]]
- [[policy-finance/jica]]
- [[financial-regulators/jbic]]
- [[megabanks/mufg]]
- [[megabanks/smfg]]
- [[megabanks/mizuho-fg]]
- [[finance/japan-acquisition-finance]]

## Sources

- JBIC business overview (https://www.jbic.go.jp/en/efforts/economic/financial.html) — product taxonomy and policy framing.
- JBIC overseas investment loan page (https://www.jbic.go.jp/en/business-areas/finance/investment.html) — OIL eligibility and process.
- JBIC special operations page (https://www.jbic.go.jp/en/business-areas/finance/special_operations.html) — Special Operations Account scope.
- JBIC Environmental and Social Considerations Guidelines (https://www.jbic.go.jp/en/efforts/environment/guideline/) — environmental / social DD framework aligned with OECD Common Approaches.
- OECD Arrangement on Officially Supported Export Credits (https://www.oecd.org/trade/topics/export-credits/arrangement-and-sector-understandings/) — minimum premia, tenor caps, sector understandings.
- METI external-economy and trade-control hub (https://www.meti.go.jp/english/policy/external_economy/trade_control/) — policy framing of JBIC / NEXI roles and sanctions / export-control coordination.
- 株式会社国際協力銀行法 (平成 23 年法律第 39 号) — JBIC statute including business-line definitions.
