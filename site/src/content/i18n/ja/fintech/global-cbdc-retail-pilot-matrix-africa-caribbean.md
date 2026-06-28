---
source: fintech/global-cbdc-retail-pilot-matrix-africa-caribbean
source_hash: 8d65a2987800626a
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "世界のリテール CBDC パイロット比較マトリクス — アフリカ、カリブ、アジア、英国"
translated_at: 2026-06-26T08:29:09.715Z
---
# 世界のリテール CBDC パイロット比較マトリクス — アフリカ、カリブ、アジア、英国

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の配下にあり、稼働中または設計中のリテール CBDC プログラムのうち最も引用される 7 件について、法域横断の比較マトリクスを提供する。[[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]]、[[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]]、[[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]]、[[fintech/boe-digital-pound-consultation|BoE digital pound consultation]]、[[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]] の法域別深掘りを、物語ごとの読みではなく横並びの読みで補完する。アーキテクチャ文脈は [[fintech/cbdc-multi-tier-architecture-overview|CBDC multi-tier architecture overview]]、[[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC three operating paradigms]]、[[fintech/cbdc-multi-tier-architecture-tradeoffs|four core trade-offs in CBDC architecture selection]]、4 か国の採用曲線は [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]、ホールセール・ブリッジ層は [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] と [[fintech/bis-project-agora-overview|BIS Project Agorá]] を参照。

> [!info] 要約
> 2026-05 の公開データセットの軸になるリテール CBDC プログラムは 7 件である。**Sand Dollar**（バハマ、2020-10, 稼働、最長運用）、**e-CNY**（中国、2020-04, から実証、登録ウォレット数で最大）、**DCash**（ECCB、2021-03, 実証、**2024-01に終了**）、**eNaira**（ナイジェリア、2021-10, 稼働、採用失敗の代表例）、**JAM-DEX**（ジャマイカ、2022-07, 稼働、小規模経済圏で最も整理された採用例）、**Bakong**（カンボジア、2020-10, 稼働、技術的には決済システム + 準 CBDC ハイブリッド）、**digital pound**（英国、2024, から設計段階、開始決定なし）。マトリクスを横断して読むと、**技術ベンダー選択（Bitt / eCurrency Mint / 内製）は配布インセンティブ設計の下流にある**、**法定通貨地位は市場受容ではなく明示的な立法授権と相関する**、**採用率は配布チャネルの所有構造に連動する**（PBoC の国有銀行マンデート、NCB Lynk アンカー、バハマの複数 AFI による希薄化、ナイジェリアの DMB+MMO インセンティブ不整合）という構造パターンが見える。

## 7 極比較が重要な理由

「リテール CBDC は一部で機能し、一部で失敗している」という単一発行体ごとの物語は正しいが、**どの設計選択がどの結果を生むか**を切り分けられないため有用性に限界がある。7 つのプログラムを **法令／発行モデル／ウォレットモデル／KYC 階層／採用／技術ベンダー／相互運用性**で横並びにすると、構造的な相関が見える。マトリクス表示は、**DCash の終了**が単発の失敗ではなく、Sand Dollar と eNaira も制約するパターン（小規模経済 + 複数 AFI + Bitt ベンダー + アンカーウォレットなし + 登録インセンティブなし）の見える末端であることも示す。CBDC と民間レールのより広い競争背景は [[fintech/em-market-crypto-dollarization-pattern|EM crypto dollarization pattern]] と [[fintech/gray-market-dollar-network-formalization|gray-market dollar formalization]] を参照。

## マトリクス A · 法令、規制当局、開始状況

| プログラム | 主管当局 | 法的根拠 | 稼働日 | 状態 2026-05 |
|---|---|---|---|---|
| 🇧🇸 [[fintech/bahamas-sand-dollar-cbdc\|Sand Dollar]] | バハマ中央銀行（CBOB） | CBOB Act 2020 （改正） | **2020-10-20**（史上初の全国展開） | 稼働中、5+ 年、成長は緩慢 |
| 🇨🇳 e-CNY | PBoC + Digital Currency Research Institute | PBoC Law 2020 改正 | **2020-04**（実証） | 稼働中、大規模展開段階 |
| 🇰🇭 Bakong | カンボジア国立銀行（NBC） | NBC Law + 決済システム枠組み | **2020-10** | 稼働中、決済システム + 準 CBDC ハイブリッド |
| 🇪🇨 DCash | 東カリブ中央銀行（ECCB） | ECCB Agreement Act + サンドボックス | **2021-03** 実証 | **2024-01に終了**（2か月の停止後） |
| 🇳🇬 [[fintech/nigeria-enaira-retail-cbdc\|eNaira]] | ナイジェリア中央銀行（CBN） | CBN Act 2007 （既存の通貨発行権限） | **2021-10-25**（アフリカ初） | 稼働中だが重点は低下 |
| 🇯🇲 [[fintech/jamaica-jam-dex-cbdc\|JAM-DEX]] | ジャマイカ銀行（BoJ） | BoJ (Amendment) Act 2022 | **2022-07** | 稼働中、成長は穏やか |
| 🇬🇧 [[fintech/boe-digital-pound-consultation\|digital pound]] | BoE + HMT | 既存の BoE 関連法。一次立法が必要 | 未稼働。設計段階 | **開始決定なし** |

最初期の動きは**バハマ（2020-10）の全国展開**と **e-CNY（2020-04）の実証**であり、最も新しい稼働プログラムは **JAM-DEX（2022-07）**である。唯一**終了**したプログラムは **DCash（2024-01）**であり、DCash は Sand Dollar や eNaira と同じ Bitt ベンダーを使っていたため、警戒すべきデータ点である。英国は 7 件のうち唯一、開始にコミットしていないプログラムである。注記: **e-CNY の実証は Sand Dollar の全国展開より約 6 か月早い**が、PBoC は「全国開始」を宣言していない。e-CNY は 26+ 都市を対象とする長期実証段階にとどまる。

## マトリクス B · 法定通貨地位と通貨アンカー

| プログラム | 法定通貨地位 | 通貨アンカー | 注記 |
|---|---|---|---|
| Sand Dollar | **あり** — CBOB の直接負債 | B$（USD に 1:1  でペッグ） | 固定為替制度を通じてバハマの USD ペッグを引き継ぐ |
| e-CNY | **あり** — PBoC の直接負債 | CNY（管理フロート） | 明示的な法定通貨地位を持つ初の主要経済圏 CBDC |
| Bakong | **準法定的** — Bakong は商業銀行残高 + KHR 通貨をトークン化する決済システムであり、純粋な中央銀行負債 CBDC ではない | KHR + USD（二重流通） | Bakong は KHR と USD の両ウォレットに対応し、構造的にはハイブリッド |
| DCash | あり（実証中） | XCD（USD に 1:1  でペッグ、1 USD = XCD 2.70） | 2024-01 に終了 |
| eNaira | **あり** — CBN の直接負債 | NGN（管理フロート／事実上の複数バンド） | 明示的な CBDC 法なし。既存の CBN 通貨権限の下で発行 |
| JAM-DEX | **あり** — BoJ Amendment Act 2022 で明示 | J$（管理フロート） | 最も整理された法的構造。専用 CBDC 改正 |
| digital pound | 想定中。一次立法が必要 | GBP | 開始されれば BoE の負債となる |

法定通貨地位の整理は **ジャマイカ > バハマ > 英国案 > ナイジェリア > 中国 > カンボジア > DCash** となる。ジャマイカの BoJ Amendment Act 2022  は最も整理された CBDC 専用立法である。英国はまだ提出していない一次立法を必要とし、中国は 2020に PBoC Law を改正した。ナイジェリアは既存の通貨発行権限に依拠しており、eNaira が 4+ 年稼働しているにもかかわらず CBDC 専用法を**一度も**成立させていない点で特異である。

## マトリクス C · 発行・配布モデル（直接型 vs 仲介型）

| プログラム | 発行モデル | 配布レイヤー | アンカーウォレット |
|---|---|---|---|
| Sand Dollar | 二層仲介型 | **Authorized Financial Institutions（AFIs）** — AFI 間で相互運用 | 複数 AFI ウォレット（Island Pay、KANOO、MoneyMaxx、銀行ウォレット）— **単一アンカーなし** |
| e-CNY | 二層仲介型 | **10 指定オペレーター** — 6 国有商業銀行 + 4 決済／通信オペレーター（ICBC、BOC、CCB、ABC、AliPay-via-MyBank、WeChat-via-WeBank を含む） | 複数あるが ICBC + AliPay + WeChat Pay が優勢 |
| Bakong | ハイブリッド。NBC が Bakong 決済レイヤーを運営し、商業銀行残高をトークン化 | カンボジアの全商業銀行 + 決済機関 | Bakong アプリ（NBC 運営）+ 銀行アプリ |
| DCash | 銀行経由の実証 | ECCU 商業銀行 | DCash アプリ（ECCB 運営） |
| eNaira | 二層仲介型 | DMB（deposit money banks）+ MMO（mobile money 事業者） | eNaira Speed ウォレット（CBN 運営）+ DMB ウォレットアプリ + USSD *997# |
| JAM-DEX | 二層仲介型 | 認可 PSP + DTI | **Lynk**（NCB Financial Group の TFOB 子会社）— 単一の支配的アンカー |
| digital pound | 二層仲介型（提案） | **PIP**（Payment Interface Providers）+ **ESIP**（External Service Interface Providers） | 民間ウォレットのみ。BoE は消費者アプリを運営しないと明示 |

**配布チャネルの所有構造**が採用を制約する変数である。JAM-DEX の Lynk と e-CNY の国有銀行マンデートは配布インセンティブを整合させた。Sand Dollar の相互運用 AFI モデルは構造的にはきれいだが、個々の AFI のマーケティング・インセンティブを希薄化する。eNaira の DMB+MMO スタックは全般にインセンティブが弱かった（DMB は eNaira を手数料のカニバリゼーションと見なし、MMO は自社 e-money との競合と見る）。DCash の終了も、同じ希薄化力学と運用上の脆弱性にたどれる。英国の PIP/ESIP 設計はまだ開始テストを受けていない。

## Matrix D · KYC tier structure and per-ウォレット limits

| プログラム | Tier-1 （低摩擦） | Tier-2 （確認済み） | Tier-3 （高上限／事業者） |
|---|---|---|---|
| Sand Dollar | 電話のみ。**B$500  ウォレット / B$1,500  月次取引** | 政府 ID 確認済み。**B$8,000  ウォレット / B$10,000  月次取引** | 事業者ウォレット — KYB、事業類型に応じて上限引き上げ |
| e-CNY | 電話のみのオペレーター階層。最低上限は日次 CNY 約 5,000  / 年次 50,000  | ID 確認済み、より高いオペレーター階層上限 | 事業者 + 富裕層オペレーター階層。オペレーター承認内では実質上限なし |
| Bakong | 電話 + 軽い ID オンボーディング、約 $10,000  のウォレット上限 | ID + 銀行連携、より高い上限 | 事業者／クロスボーダー（Thai PromptPay link）、より高い上限 |
| DCash | 電話のみ階層、政府 ID 階層 | より高い政府 ID 階層 | 該当なし（終了） |
| eNaira | Tier 0  — 電話のみ、**日次 ₦120K / 最大 ₦300K** | Tier 1  BVN-light、Tier 2  BVN-full | Tier 3  銀行口座連携、より高い上限 |
| JAM-DEX | 標準 PSP オンボーディング（Lynk 準拠） | PSP による階層化、より高い上限 | 加盟店階層 |
| digital pound | n/a（提案段階）。詳細な階層構造は未公表 | n/a | **1 人当たり保有限度額 £10,000-£20,000 が提案**（未確定） |

**包摂を狙う Tier-1 上限**: 稼働中の各プログラムは、銀行口座を持たない層向けに摩擦の低い階層を設けようとした。しかし**稼働中プログラムで tier-1 が支配的だと報告するものはない**。Sand Dollar と eNaira に関する IMF Working Paper はいずれも、実利用では tier-2 （ID 確認済み）ユーザーが中心だと指摘する。包摂設計は構造的には正しいが、狙った規模で未銀行層を拘束する要因にはならなかった。英国の digital pound は例外的に、階層型 KYC ではなく**1 人当たり保有限度額**（£10K-£20K）を検討しており、これが 7 プログラム間で**最大の設計上の相違**である。

## マトリクス E · 採用指標 — 登録、アクティブ、人口比

| プログラム | 登録ウォレット | アクティブウォレット（代表値） | 成人人口に対する採用率 |
|---|---|---|---|
| Sand Dollar | 個人 + 加盟店で約 30-50K | 月次取引は登録数の 1 桁 % | **人口比 <1%**（総人口約 400K、絶対規模は小さい） |
| e-CNY | **180M+** 登録 | 日次アクティブは 100 万台（絶対数は大きいが割合は小さい） | **日次アクティブ <1%**。月次アクティブは利用者数ベースでより高い |
| Bakong | Bakong 連携口座約 10M+（NBC） | QR 決済の普及により月次アクティブは同業比で大きい | **成人人口の 40-60%**（NBC 公表発言、決済システムとの境界は曖昧） |
| DCash | 累計 <10K（同業推計） | 該当なし（終了） | **人口比 <0.5%**。最低水準の一つ |
| eNaira | 約 700K–900K（Y1時点）。その後の推計は混在 | **登録者のうち取引者は <1.5%**（IMF） | **成人人口比 <0.5%**（IMF Y1。以後も大きな段差なし） |
| JAM-DEX | Lynk 主導で約 200K–300K | かなり小さい。BoJ は正確な日次アクティブを未開示 | **成人人口の数 %**（成人総数約 2M。小規模経済圏では最も明瞭な比率） |
| digital pound | 該当なし（未稼働） | 該当なし | 該当なし |

**カンボジア Bakong は外れ値**である。40-60%の採用率は、Bakong が純粋な中央銀行債務型リテール CBDC ではなく、既存 QR 決済市場を吸収した**決済システム + 相互運用レイヤー**であることを反映している。決済システムとして読めば数値は本物だが、Sand Dollar / eNaira / JAM-DEX の採用指標とは直接比較できない。比較可能な純リテール CBDC の同業内では、人口比で見ると **JAM-DEX が最も明瞭な小規模経済圏の成功例**である。**e-CNY は絶対数最大だが日次アクティブ比率は小さく**、eNaira の登録・アクティブ乖離と似ている。**DCash の終了**は唯一の完全な失敗終局例である。

## マトリクス F · 技術ベンダーと基盤技術

| プログラム | ベンダー | 基盤技術 | 注記 |
|---|---|---|---|
| Sand Dollar | **Bitt Inc.**（バルバドス） | 許可型 DLT（Bitt プラットフォーム、Hyperledger Fabric 変種） | eNaira + DCash と同じベンダー。採用結果は混在から低調 |
| e-CNY | **PBoC 内製**（Digital Currency Research Institute） | 独自アーキテクチャ。口座ベースでハードウェアウォレット機能を持つ | 外部ベンダーなし。PBoC 規模で完全内製 |
| Bakong | **Soramitsu（日本）** + NBC | Hyperledger Iroha ベース。専用実装 | 東京の Soramitsu がアーキテクチャ主導。Bitt / eCurrency Mint クラスターとは別系統 |
| DCash | **Bitt Inc.**（バルバドス） | Sand Dollar と同じ Bitt プラットフォーム | 2022 1-3 月に 2 か月停止。2024-01 に終了 |
| eNaira | **Bitt Inc.**（バルバドス） | 許可型 Hyperledger Fabric 変種 | Sand Dollar / DCash と同じ Bitt ベンダー系譜 |
| JAM-DEX | **eCurrency Mint**（米国本社） | DSC2 （Digital Symbol Cryptography）階層署名 | Bitt とは別ベンダー。7 極セットで最も明瞭な小規模経済圏の採用例 |
| digital pound | **未公表**（設計段階中にベンダー選定が進行中） | 該当なし。Phase 2 の設計が継続中 | BoE は探索的なベンダー PoC を実施したが、特定ベンダーへのコミットメントは公表していない |

**Bitt ベンダー・クラスター**（Sand Dollar / eNaira / DCash）は、表内で採用結果が最も低い 4 件のうち 3 件を占める。**eCurrency Mint の導入例**（JAM-DEX）は小規模経済圏で最も明瞭な成果である。**内製**（e-CNY）と **Soramitsu**（Bakong）は Bitt / eCurrency Mint 以外の 2 経路で、いずれも採用は強い。ただし分配モデルが大きく異なるため、ベンダー選択が拘束変数ではない。パターンは「ベンダー能力が採用を決める」よりも、**「分配設計がベンダー成果の到達範囲を制約する」**に近い。ベンダーとガバナンスの相互作用は [[fintech/cbdc-multi-tier-architecture-tradeoffs|four core trade-offs in CBDC architecture selection]] を参照。

## マトリクス G · クロスボーダー相互運用性

| プログラム | クロスボーダー CBDC 統合 | 二国間 CBDC ブリッジ | ホールセール・ブリッジ参加 |
|---|---|---|---|
| Sand Dollar | なし | なし | なし |
| e-CNY | **あり — [[fintech/mbridge-bis-multi-cbdc-overview\|mBridge]]の主要アンカー** | 香港リンク（GBA 越境リテール） | mBridge + 将来の BRICS-Pay 候補 |
| Bakong | **あり — Thai PromptPay 二国間連携** + ラオス + マレーシア + ベトナム相互運用 | Thai PromptPay（稼働中）。ASEAN 多国間を計画 | mBridge には未参加。ASEAN 地域 QR ネットワーク |
| DCash | なし | なし | 該当なし（終了） |
| eNaira | なし | なし | mBridge / Agorá / Project Dunbar には未参加 |
| JAM-DEX | なし | なし | なし |
| digital pound | リテールではなし。BoE はホールセール水準で [[fintech/bis-project-agora-overview\|BIS Project Agorá]] に参加 | 計画なし | Agorá ホールセール |

**クロスボーダー CBDC 採用は 2 プログラムに集中**している。mBridge + GBA 香港リンクを通じる e-CNY と、PromptPay + ASEAN QR を通じる Bakong である。残る 5 つのリテール CBDC プログラム（Sand Dollar、DCash、eNaira、JAM-DEX、digital pound）は、2026-05時点で**クロスボーダー CBDC 統合を持たない**。これは小規模経済圏のリテール CBDC 物語における**最大の単一ギャップ**である。越境送金コリドーから最も便益を得るはずのカリブ海・西アフリカのプログラムには、CBDC レベルのブリッジがない。

## マトリクス H · 発行と分配のインセンティブ整合スコアカード

| プログラム | 発行体インセンティブ | 分配体インセンティブ | アンカーウォレット | 総合スコア |
|---|---|---|---|---|
| Sand Dollar | 高い（CBOB がコミット） | 多数の AFI に分散。相互運用性は利用者に有利だが、分配体ロックインは弱い | 支配的なものなし | **中** |
| e-CNY | 高い（PBoC のマンデート） | 高い（国有銀行マンデート、AliPay / WeChat への規制圧力） | AliPay + WeChat + ICBC | **高** |
| Bakong | 高い（NBC） | 高い（Bakong が既存 QR 決済経済を吸収） | Bakong アプリ | **高** |
| DCash | 高い（ECCB） | 低い（小規模 ECCU 銀行、アンカーなし）。運用脆弱性あり | なし | **低**（失敗） |
| eNaira | 高い（CBN） | 低い（DMB がカニバリゼーションを受け、MMO と競合し、代理店は手数料を選好） | なし | **非常に低い** |
| JAM-DEX | 高い（BoJ） | 高い（NCB の TFOB がコミット、Lynk がアンカーウォレット） | Lynk | **高** |
| digital pound | 未公表 | 公的には未実証（PIP/ESIP は設計済みだが未検証） | 民間部門 PIP のみ | **公的には未実証** |

稼働中プログラムの採用を最も強く予測する単一要因は、CBDC を押し出す**単一のアンカー分配体またはウォレットに整合した商業インセンティブがあるか**である。ジャマイカでは Lynk = NCB Financial Group のコミットメント、中国では国有銀行マンデート + AliPay / WeChat の吸収、カンボジアでは決済システムとしての Bakong のネットワーク効果が該当する。最も弱い 3 例（DCash、eNaira、Sand Dollar）は、運用脆弱性、インセンティブ不整合、インセンティブ希薄化という異なる理由でこのテストに失敗している。

## これらの軸を採用する理由

8 つのマトリクス軸（法令、法定通貨性、発行モデル、KYC 階層、採用率、技術ベンダー、クロスボーダー、インセンティブ整合）は、**BIS / IMF の CBDC 採用文献におけるゲート変数**に直接対応するため採用した。

1. **法令 / 法定通貨性** — 法的執行可能性と受容上限（理論上の最大市場シェア）を決める。
2. **発行 / 分配** — 分配で誰が報酬を得るかを決める（採用速度を拘束する変数）。
3. **KYC 階層** — 未銀行層に対するアクセス下限（理論上の包摂上限）を決める。
4. **採用率** — 実現した成果を測る（公衆が気にする唯一の指標）。
5. **技術ベンダー** — 運用リスクを決める（DCash の失敗は負荷時のベンダー・プラットフォーム脆弱性と結びつく）。
6. **クロスボーダー** — CBDC が国内決済を超えた役割を持つかを決める。
7. **インセンティブ整合** — 他のどの単一指標よりも採用速度をよく予測する。

法令と法定通貨性は**必要だが十分ではない**。インセンティブ整合は、それがある場合（JAM-DEX、e-CNY、Bakong）には**十分条件に近く**、ない場合（eNaira、DCash、Sand Dollar）には**決定的な欠落要因**となる。これが、法域別の叙述では見えにくく、マトリクス表示が明らかにする中心的な実証結果である。

## マトリクスの読み方

- **Bitt ベンダー・クラスターのパターン**: Sand Dollar、eNaira、DCash はいずれも Bitt を使い、いずれも低調だった。拘束変数はベンダーではなく分配インセンティブ設計だが、ベンダー・クラスターの相関は目立つため、今後の小規模経済圏プログラムはベンダーを分散させる可能性が高い。
- **「世界初」と「最良の成果」の乖離**: バハマは最初（2020-10-20に全国展開）だったが、JAM-DEX（2022-07）が最も明瞭な採用率を示す。開始の速さは採用の質を予測しない。
- **典型的失敗例としての DCash**: 2024-01 に終了した。背景には 2022 の 2 か月停止と継続的な低採用があった。DCash の事後分析は、BIS の CBDC 運用リスク文献で最も引用される事例になっている。
- **登録とアクティブの乖離としての e-CNY**: 登録ウォレット 180M+ と日次アクティブ 100 万台の差は 25-50倍の乖離である。同じパターンは規模を小さくして eNaira にも見られる。どのリテール CBDC でも、登録ウォレットはアクティブ利用者と同義ではない。
- **無期限設計段階パターンとしての digital pound**: BoE の「設計段階であり、開始へのコミットメントではない」という整理は政治的に便利であり、正式に中止せずにプログラムを無期限に設計段階へ置く可能性がある。これは Riksbank の e-krona 経路を映している。
- **決済システム・CBDC ハイブリッドとしての Bakong**: Bakong がマトリクス内で最高の採用率を達成したのは、既存 QR 決済市場と競合するのではなく、それを吸収したからである。これは既存決済レール（英国 Faster Payments、ブラジル Pix、インド UPI）と競合する純粋 CBDC には使えない選択肢である。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]]
- [[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]]
- [[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]]
- [[fintech/boe-digital-pound-consultation|BoE digital pound consultation]]
- [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC multi-tier architecture overview]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC three operating paradigms]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|four core trade-offs in CBDC architecture selection]]
- [[fintech/e-euro-retail-rollout|ECB digital euro retail rollout]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC bridge]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/em-market-crypto-dollarization-pattern|EM crypto dollarization pattern]]
- [[fintech/gray-market-dollar-network-formalization|gray-market dollar formalization]]
<!-- /wiki-links:managed -->

## 出典

- ナイジェリア中央銀行 — eNaira Design Paper (2021): https://www.cbn.gov.ng/Out/2021/CCD/eNaira%20Design%20Paper.pdf
- バハマ中央銀行 — Sand Dollar FAQ: https://www.centralbankbahamas.com/payments-system/the-sand-dollar/sand-dollar-faqs
- ジャマイカ銀行 — CBDC / JAM-DEX project: https://boj.org.jm/core-functions/currency/cbdc/
- 東カリブ中央銀行 — DCash project page (historic): https://www.eccb-centralbank.org/p/about-the-project
- 中国人民銀行 — public CBDC research and pilot updates: https://www.pbc.gov.cn/en/3688110/3688172/index.html
- カンボジア国立銀行 — Bakong public materials: https://www.nbc.gov.kh/english/economic_research/bakong.php
- イングランド銀行 — digital pound landing: https://www.bankofengland.co.uk/the-digital-pound
- IMF Working Paper — Nigeria's eNaira One Year After (Ree, 2023): https://www.imf.org/en/Publications/WP/Issues/2023/05/12/Nigerias-eNaira-One-Year-After-533487
- IMF Working Paper — Bahamas's Sand Dollar: CBDC and Lessons Learned (Kosse, Mattei, Glowka, 2022): https://www.imf.org/en/Publications/WP/Issues/2022/06/10/The-Bahamas-Sand-Dollar-CBDC-and-Lessons-Learned-518864
- BIS Working Paper No. 1116 — "The next-generation monetary system — a blueprint" (2024): https://www.bis.org/publ/work1116.htm
- BIS Innovation Hub CBDC topic landing: https://www.bis.org/about/bisih/topics/cbdc.htm
