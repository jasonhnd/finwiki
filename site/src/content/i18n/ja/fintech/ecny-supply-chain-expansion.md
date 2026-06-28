---
source: fintech/ecny-supply-chain-expansion
source_hash: f95ba8067757ce33
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "e-CNY のサプライチェーン・クロスボーダー拡張 2025-2026"
translated_at: 2026-06-26T08:29:09.713Z
---
﻿







# e-CNY のサプライチェーン・クロスボーダー拡張 2025-2026

















## ウィキ上の位置づけ















この項目は [[fintech/INDEX|fintech index]] の配下に位置し、2025-2026  のクロスボーダー拡張フェーズにおける中国 e-CNY の国別詳細分析である。四か国比較の視点では [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]、ホールセール・ブリッジ構造では [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS 多 CBDC 跨境结算桥]]、同じ地域市場で競合する民間ステーブルコイン・レールでは [[fintech/hkma-stablecoin-licensing-overview|HKMA stablecoin licensing overview]] と組になる。より広いCBDCアーキテクチャの文脈は [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]] を参照。















> [!info] 要約







> 2026 年半ばまでに、e-CNYは国内限定のリテール実験ではなく、**複数国ホールセール決済リングのアンカーとなる主要経済圏初のリテールCBDC**になった。現在は三つの拡張レイヤーが稼働している。(i) 香港 / Greater Bay Area のクロスバウンダリー・リテールリンク、(ii) [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] ホールセール・ブリッジ（HKMA / BoT / CBUAE / SAMA / 2026 H2からの Brazil DREX を含む）、(iii) 中国SOEの相手方がコモディティおよびインフラ請求を e-CNY で決済する一帯一路プロジェクト・パイロット統合である。2026 時点で最大の競争変数は **HKMAステーブルコイン・ライセンス**（[[fintech/hkma-stablecoin-licensing-overview|HKMA SC licensing]]）であり、同じチャネル上にHKD建ておよびUSD建ての並行レールを作っている。















## 三つの拡張レイヤー















```







                  e-CNY 2025-2026 拡張（三つのレイヤー）







                                  │







        ┌─────────────────────────┼─────────────────────────────────┐







        ▼                         ▼                                 ▼







  L1 香港リンク        L2 mBridgeホールセール            L3 一帯一路プロジェクト・パイロット







   (リテール / SME)           (中央銀行RTGS)             (国有企業コモディティ / インフラ)







        │                         │                                 │







   GBA居住者          HKMA + BoT + CBUAE              CDB / China Exim / SOE







   e-CNYウォレット       + SAMA + Brazil DREX            コモディティ請求フロー







   クロスバウンダリー     PvPアトミック決済           オンチェーン







   決済用                 < 10 秒ファイナリティ               （パイロット範囲）







        │                         │                                 │







        └─────────────────────────┴─────────────────────────────────┘







                                  │







              競争環境: HKMA ステーブルコイン・ライセンス







              (HSBC HKD/USD + Anchorpoint HKD/USD — 第一陣 2026-05-21)







```















## レイヤー 1 — Hong Kong / GBA クロスバウンダリー・リテールリンク















| 項目 | 詳細 |







|---|---|







| プログラム | HK居住者が中国本土（まずGreater Bay Area）で e-CNY を利用し、その逆方向も可能にする PBoC-HKMA の技術的相互運用性。 |







| 開始 | 2020  のPoCから、2023  のHK居住者向け拡大パイロット、2025  の 11 GBA都市での通常利用へ段階的に拡大。 |







| ウォレットモデル | HK居住者は中国本土の銀行口座なしで e-CNY ウォレットを開設できる（HK ID + 電話番号による低階層KYC）。HKD銀行口座から FPS（Faster Payment System）でチャージする。 |







| 対象範囲 | 11 の全GBA都市（Shenzhen、Guangzhou、Zhuhai、Foshan、Huizhou、Dongguan、Zhongshan、Jiangmen、Zhaoqing、およびHK + Macau）。 |







| 日常フローの性格 | 観光、クロスバウンダリー通勤、軽量物品のSME B2B。 |















香港リンクは、**非居住者が大規模に利用できる主要経済圏で唯一のリテールCBDC**である。「リテールCBDC + クロスボーダー」の利用体験がどう見えるかを示す稼働モデルでもある。PBoCが香港を実験場に選んだ理由は、(i) RMB国際化政策がすでに香港をオフショアCNHハブに位置づけていること、(ii) HKMAにそれを接続する技術的深さと政治的整合性があること、(iii) GBA統合が中央政府の明示的な政策優先事項であることにある。香港側のアーキテクチャは、中国本土と同じ二層設計（PBoC → 10 運営機関 → 利用者）を使い、運営機関がHK側トラフィックをHKMA監督下のインフラへルーティングする。















香港リンクは、[[fintech/hkma-stablecoin-licensing-overview|HKMA Stablecoin Ordinance]] と直接相互作用する。同制度は 2025-08  に施行され、2026-05-21 に最初のライセンス（HSBC + Standard Chartered Anchorpoint）を発行した。HSBCとAnchorpointのステーブルコインはHKDまたはUSDにペッグされ、e-CNYレールの**内部ではなく隣**に置かれる。競争上の問いは、HKのSMEが中国本土向け請求にPBoC監督下のe-CNYを選ぶのか、グローバルフローにHKMAライセンス下のHKDステーブルコインを選ぶのかである。















## レイヤー 2 — mBridgeホールセール・リング















| 項目 | 詳細 |







|---|---|







| プログラム | [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] — 複数CBDCのホールセール決済プラットフォーム。 |







| 創設中央銀行 | PBoC + HKMA + Bank of Thailand + Central Bank of UAE（2021）。Saudi Central Bank（SAMA）は 2024-06  に参加。 |







| BISの役割 | BIS Innovation Hub Hong Kong Centre が 2021  からプロジェクトを育成。BISは 2024-10  / 2025-10 に運用上の役割から退出し、技術は中核運営者である PBoC + HKMA + BoT + CBUAE に移管された。 |







| アーキテクチャ | DLTの許可型台帳、HotStuff BFTコンセンサス。各中央銀行が検証ノードと自国CBDC台帳を運用し、共有mBridge台帳で通貨横断決済を行う。 |







| 決済方式 | PvP（Payment-versus-Payment）アトミック決済。テストでは 10 秒未満のファイナリティ。 |







| 状況（2026-05） | 2025-09  以降、MVP後の商用運用フェーズ。Brazil BCB DREX との統合テストは 2026 H2  に予定。 |







| 対象範囲 | 加盟国GDPは約 USD 23.3T。オブザーバー（India / Russia / South Africa / Iran が議論対象）を含めると、潜在的影響範囲は約 USD 35T（[[fintech/mbridge-non-usd-settlement-ring-scale|mBridge non-USD 決済 ring scale]]による）。 |















e-CNYは、mBridgeプラットフォーム上で決済される五つのソブリンCBDC（CN / HK / TH / AE / SA）の一つである。2026 H2  の Brazil DREX 統合は初の大陸間接続となり、影響範囲を世界GDPの三分の一へ実質的に広げる。構造的意義は、mBridgeが今日巨大な取引量を処理していることではない（処理量はSWIFTに比べて小さい）。重要なのは、**多国間の政治連合が存在し、BIS中立ガバナンスではなくPBoCとHKMAの主導下で運用されている**ことである。[[fintech/mbridge-bis-multi-cbdc-vs-agora|mBridge vs Agorá]] と [[fintech/mbridge-six-central-banks-roster|mBridge six central banks roster]] を参照。















[[fintech/bis-project-agora-overview|BIS Project Agorá]] との非対称性は、2025-2026  における最も明確な展開である。Agorá はBIS主導の 7-G10  ホールセールCBDC + トークン化預金実験（US FRBNY + UK BoE + France BdF + BoJ + BoK + Banxico + SNB + 40 + 商業銀行）である。mBridge は非G7 リングである。両者の間に正式な合意はなく、技術的相互運用性は未解決の論点である。戦略的対比は [[fintech/bis-project-agora-vs-mbridge|Agorá vs mBridge strategic comparison]] を参照。















## レイヤー 3 — Belt-and-Road プロジェクト・パイロット統合















| 項目 | 詳細 |







|---|---|







| チャネル | Chinese SOEs（CNPC、Sinopec、COSCOなど）+ 中国政策銀行（China Development Bank、China Exim）が、クロスボーダーのインフラおよびコモディティ・フローの請求決済に e-CNY を利用。 |







| パイロット公表 | 一部相手方とのコモディティ取引パイロット（石油、大豆、レアアース）。詳細は非公開のことが多く、PBoCの公開発信は細かな数値なしに「パイロット拡大」に言及する。 |







| 決済方式 | 双方のレッグがmBridge接続済みの場合、ホールセールe-CNY建て + mBridgeレールで決済する（例: PBoC側 ↔ CBUAE側）。 |







| 戦略的枠組み | より広いRenminbi国際化プログラムおよびBRICS+の決済協調議論と結びつく。 |







| 取引量 | 絶対額としては小さい。制約条件は取引スループットではなく、政治的価値と実証価値である。 |















一帯一路統合は最も不透明なレイヤーである。PBoC公表資料はパイロット拡大に言及するが、コリドー別の取引量を公表することは稀である。公開情報上のシグナルは、(a) mBridgeのSAMAレッグを通じたSaudi Aramcoの石油輸出インボイス（関連する資本プール文脈は [[fintech/sovereign-capital-pool-aramco-anchor|Aramco sovereign capital pool anchor]]）、(b) 2024-2025 以降ブラジル報道で繰り返し扱われる中国・ブラジル大豆取引決済、(c) Dubai Multi Commodities Centreメンバーを通じたUAE・中国の金取引決済との能動的な統合を示している。















中国の戦略的姿勢は「SWIFTを置き換える」ことではなく、**USDで清算したくない貿易相手方のために並行レールを構築する**ことである。これは [[fintech/jurisdiction-list-monetary-protectionism|jurisdiction-list monetary protectionism]] の論旨と同じであり、通貨の配管は政治的整合性に従う。















## 採用指標（直近の公開値）















| レイヤー | 指標 | 直近の公開値 | 出典 |







|---|---|---|---|







| 国内e-CNY | 累計取引額 | **CNY 1 兆超**（PBoC公開発信 2024-2025） | PBoC記者会見およびワーキングペーパー更新 |







| 国内e-CNY | 登録ウォレット | **180M+** 個人ウォレット（ワーキングペーパー推計） | PBoCワーキングペーパー |







| HKリンク | 対象GBA都市 | **11** / 11 GBA都市 + Macau | HKMA / PBoC 共同公表 |







| mBridge | 創設メンバー + 新規メンバー | **6** 中央銀行（CN / HK / TH / AE / SA、Brazil は 2026 H2） | BIS Innovation Hub 発表 2024-2025  |







| mBridge | 決済レイテンシ | テストで **< 10 秒** のファイナリティ | BIS Project mBridge 進捗報告 |







| Belt-and-Road | 稼働中のコモディティ・コリドー | パイロットは言及されているが、コリドー別取引量は未公表 | PBoC + 商業相手方プレスの混合 |















累計取引額は最も引用される統計だが、**2020-2025  累計**として、リテール、B2B、政府現金給付のすべてを束ねており、国有主体を介した給与支払いのような大型ヘッドライン取引も含む。独立観察者は、アクティブウォレット活動が登録ウォレット数を実質的に下回ると指摘する。この差は、CBDC報告で典型的な累計値とアクティブ値のギャップである（反論も参照）。















## 拡張フェーズのアーキテクチャと設計選択















| 設計選択 | 内容 | 中国が選んだ理由 |







|---|---|---|







| 二層型（PBoC → 10 運営機関 → 利用者） | 国内e-CNYと同じ二層モデルをHK / mBridgeへ拡張。 | 商業銀行の役割を維持し、[[fintech/cbdc-multi-tier-architecture-three-paradigms|three-paradigms]] の二層設計と整合させ、4  の国有商業銀行にとって政治的安定性を確保する。 |







| 管理可能な匿名性 | 低階層ウォレットは閾値未満で匿名、高階層KYCは本人情報を追跡。 | AML期待に対応し、中国本土の規制権限を保持する。 |







| プログラマビリティ（限定的） | 2023  以降、使途指定補助金や農業補助金などのスマートコントラクト・パイロット。 | 完全なDeFi化を避けつつ、政府現金給付のユースケースを可能にする。 |







| リテールe-CNYに利息なし | リテールウォレットの利息はゼロ。 | 商業銀行からの預金流出を防ぐ。 |







| クロスボーダーはホールセール限定 | mBridgeは中央銀行仲介のクロスボーダーのみを扱う。リテールHKリンクは例外。 | 資本勘定管理と為替政策を維持する。 |







| mBridge上のPvPアトミック決済 | 通貨横断CBDCスワップのHerstattリスクを除去する。 | コルレス銀行摩擦を減らし、貿易金融決済を高速化する。 |















2025-2026  フェーズを定義する構造的選択は、**ホールセール・リングを先に、リテール・クロスボーダーを後に**置くことである。中国はGBA国境を越えたe-CNY利用を容易にする意思はあるが、まだグローバルに開放する段階ではない。mBridgeリングは中央銀行対中央銀行の仕組みであり、リテール対リテールではないため、安全で管理された拡張である。















## 競争環境としての香港ステーブルコイン・ライセンス















e-CNY拡張にとって 2026  時点で最も重要な展開は、e-CNYそのものではない。[[fintech/hkma-stablecoin-licensing-overview|HKMA Stablecoin Ordinance]] である。同制度は 2025-08  に施行され、2026-05-21 に最初のライセンスを発行した である。第一陣は次のとおり。















| ライセンシー | ペッグ通貨 | 注記 |







|---|---|---|







| HSBC | HKDおよびUSD | グローバル銀行。政治リスクが最も低い申請者。 |







| Standard Chartered Anchorpoint（Animoca + HKT との共同ビークル） | HKDおよびUSD | 銀行 + テックのコンソーシアム。クロスボーダー貿易フロー向けの位置づけ。 |















中国本土系の申請者（Ant International、JD-HKD、Bank of China Hong Kong）とTetherは第一陣に含まれなかった。[[fintech/hkma-stablecoin-licensing-implications|HKMA licensing implications]] を参照。競争上の帰結は、**HKのSMEとグローバルな相手方が、クロスボーダーのHKD建てまたはUSD建て請求において、e-CNYに代わるライセンス済み手段を持つようになった**ことである。戦略上の問いは、HKMAステーブルコイン・レールがe-CNY香港リンクからフローを奪うのか、それとも顧客層が異なるため共存するのかである（本土向け支払いはe-CNY、グローバル貿易はHKDステーブルコイン）。















HKMAの公開シグナルは、この枠組みがe-CNYを置き換えるのではなく**補完する**ことを意図していると示唆する。どちらのレールもHK側ではHKMA監督下にあり、理論上はHK銀行を通じて決済でき、理論上は [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]] のトークン化預金インフラへ接続できる。実務上の問いは、SMEが自らのクロスボーダー用途において、摩擦の少ないPBoCライセンス下e-CNYを好むのか、信頼性の高いHKMAライセンス下ステーブルコインを好むのかである。















## 起源と進化















```







2014         PBoCがe-CNY研究を開始







2017         BIS / IMF / ECBがCBDCアーキテクチャに関する論文を公表







2020-04      PBoCが国内リテールe-CNYパイロットを開始（4 都市）







2021         BIS Innovation Hub Hong Kong CentreがPBoC + HKMA + BoT + CBUAEとmBridgeを開始







2022-04      国内e-CNYパイロットが 23 都市へ拡大







2023         HK居住者向けクロスバウンダリー・パイロットとスマートコントラクト・パイロットが開始







2024-03      HKMA Project Ensembleが開始（HKのトークン化預金サンドボックス）







2024-04      BIS Project Agoráが開始（7 G10 中央銀行 + 40+ 銀行）







2024-06      Saudi SAMAがmBridgeに参加（5番目の中央銀行）







2024-10      BISがmBridgeの運用上の役割から退出すると発表







2024-10      BoJほかがBIS技術ワークショップに参加







2025-08      HKMA Stablecoin Ordinanceが施行







2025-09      mBridgeが商用運用フェーズに入る







2025         GBA 11都市でe-CNYの通常利用が始まり、HK FPSチャージが一般化







2026-Q1      India RBIがホールセール ↔ リテール相互運用テストを実施（別プログラム）







2026-Q2      mBridge ↔ Brazil DREX統合テストが開始







2026-05-21  HKMAが最初のステーブルコイン・ライセンスを発行（HSBC + Anchorpoint）







2026-H2      Brazil DREXの正式なmBridge統合が見込まれる







```















**拡張パターン**: 各レイヤーは、前のレイヤーが閾値となる準備水準に達した時点で追加された。国内安定化 → 香港パイロット → mBridge MVP → mBridge商用化 → 大陸間統合という順序である。各ステップの政治的前提は相手方中央銀行からの二国間または多国間の同意であり、これはG7  通貨当局からよりも、一帯一路 / BRICS+ の整合性の中で実質的に得やすい。















## 関連項目















- [[INDEX|Wiki Index]]







- [[fintech/INDEX|Fintech Index]]







- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]







- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]







- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]







- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]







- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS 多 CBDC 跨境结算桥]]







- [[fintech/mbridge-bis-multi-cbdc-vs-agora|mBridge vs Agorá]]







- [[fintech/mbridge-six-central-banks-roster|mBridge six central banks roster]]







- [[fintech/mbridge-non-usd-settlement-ring-scale|mBridge non-USD 決済 ring scale]]







- [[fintech/bis-project-agora-overview|BIS Project Agorá]]







- [[fintech/bis-project-agora-vs-mbridge|Agorá vs mBridge strategic comparison]]







- [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]]







- [[fintech/hkma-stablecoin-licensing-overview|HKMA Stablecoin Licensing Overview]]







- [[fintech/hkma-stablecoin-licensing-implications|HKMA licensing implications]]







- [[fintech/jurisdiction-list-monetary-protectionism|jurisdiction-list monetary protectionism]]







- [[fintech/central-banking-function-unbundling|央行职能解体五层]]















## 出典















- People's Bank of China — e-CNY R&D progress and ワーキングペーパー: https://www.pbc.gov.cn/en/3688110/3688172/index.html







- HKMA — Project Ensemble, e-HKD, and Stablecoin Ordinance プレスリリース: https://www.hkma.gov.hk/eng/news-and-media/press-releases/







- BIS Innovation Hub — Project mBridge 進捗資料: https://www.bis.org/about/bisih/topics/cbdc.htm







- BIS ワーキングペーパー No. 1116  "The next-generation monetary system — a blueprint" および Innovation Hub の mBridge MVP 報告







- mBridgeガバナンス移行に関するBIS公開声明（2024-10  / 2025-10）







- Bank of Thailand — クロスボーダーCBDCに関するBoTプレスリリース: https://www.bot.or.th/en/news-and-media/news/







- Central Bank of the UAE — 公開発信: https://www.centralbank.ae/en/news/







- HKMA + PBoC — Greater Bay Area におけるクロスバウンダリーe-CNY利用に関する共同公表







- HKMA Stablecoin Ordinance プレスリリース（2025-08  の施行、2026-05-21 の初回ライセンス発行）







- BIS Innovation Hub Project Agorá 公開資料: https://www.bis.org/about/bisih/topics/cbdc/agora.htm
