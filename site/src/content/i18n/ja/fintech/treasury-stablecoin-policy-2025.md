---
source: fintech/treasury-stablecoin-policy-2025
source_hash: a8dd0ae3524217d3
lang: ja
status: machine
fidelity: ok
title: "Treasury 2025 ステーブルコイン政策枠組み · PWG 勧告と二系統チャーター"
translated_at: 2026-06-02T14:01:20.920Z
---

# Treasury 2025 ステーブルコイン政策枠組み · PWG 勧告と二系統チャーター

## 要約

Treasury の 2025 ステーブルコイン政策枠組みは、**GENIUS Act**を3つの連動した流れで実装する。（1）第一に、EO 14178 の下で再編された **President’s Working Group on Digital Asset Markets (PWG-DAM)** が、発行体適格性、準備資産構成、償還保証、取り付けリスク緩和に関する勧告を公表した。（2）第二に、**連邦・州の二系統**チャーター構造が確定し、発行体は共通の連邦フロアと州レベルの上乗せの下で、**OCC**、**Federal Reserve**、または**州監督当局**から免許を得られるようになった。（3）第三に、**T-bill 準備資産要件**は、**満期≤93日**の Treasuries、付保預金取扱機関の要求払い預金、Treasuries 担保のリバースレポに調整され、より長いデュレーションの証券、社債・CP、暗号資産担保は明示的に除外された。これは 2023 年3月の USDC 事案で顕在化した取り付けリスクへの対応である。償還保証は法律上 **T+1 で額面償還**とされ、最低閾値で同日現金化可能性を求める**流動性バッファ**サブルールも置かれる。この枠組みは、EU MiCA の単一パスポート型とも、日本 EPI の三類型モデルとも意図的に異なる。Federal Reserve ルートや OCC ルートを単独で見る場合と比べると、Treasury の役割は**政策調整と準備資産の特定**であり、直接監督ではない。個別発行体の**監督当局**は、主たる連邦または州の監督当局に残る。

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の下に位置し、[[fintech/regulatory-reset-2025-usa-crypto-policy|US 2025 regulatory reset]] に対する Treasury 側の補完ページである。監督当局側の仕組みは [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust-bank charter]] と [[fintech/occ-bank-charter-crypto-2025|OCC national bank charter for crypto 2025]]、コンプライアンス・スタック層は [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]] と [[fintech/genius-act-501-actual-implementation|§501 implementation]] と併せて読む。国際比較の枠組みは [[fintech/mica-overview|EU MiCA]]、[[fintech/global-stablecoin-regulatory-five-pole-matrix|five-pole matrix]]、[[fintech/three-circles-stablecoin-mra-framework|three circles MRA]] を参照。

## この項目が存在する理由

2025 ステーブルコイン枠組みにおける Treasury の役割は、**SEC reset**（[[fintech/regulatory-reset-2025-usa-crypto-policy|2025 reset]]）や **OCC 監督ルート**（[[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|trust-bank charter]] および [[fintech/occ-bank-charter-crypto-2025|2025 OCC charter]]）とは構造的に異なる。Treasury は**準備資産、償還、取り付けリスクに関する政策パラメータ**を設定するが、発行体を直接チャーターしたり監督したりはしない。**President’s Working Group** は、これらのパラメータを省庁間で調整する場である。この項目は、**Treasury が実際に公表した内容**、GENIUS §4(d) の準備資産リストに影響した**準備資産構成の根拠**、OCC、Federal Reserve、州監督当局の管轄重複を整理する**連邦・州調整メカニズム**を記録する。

## デジタル資産市場に関する President’s Working Group

President’s Working Group on Financial Markets (PWG) は、Reagan 政権下の 1988 年に Executive Order により設置され、当初は1987 年10月の株式市場クラッシュ後の懸念に対応するためのものだった。デジタル資産への拡張は、2021 PWG Report on Stablecoins や 2022 省庁間枠組みなど、より早い形で存在していた。**EO 14178**（2025年1月23日）は、より具体的な構成と 180 日間の成果物タイムラインを伴って、同グループを **President’s Working Group on Digital Asset Markets (PWG-DAM)** として再編した。

### 構成と議長

| 役割 | 保有者 |
|---|---|
| 議長 | ホワイトハウス AI・暗号資産担当官（David Sacks） |
| Treasury | 財務長官 |
| SEC | 委員長（Paul Atkins） |
| CFTC | 委員長 |
| OCC | 通貨監督官 |
| Federal Reserve | 理事会議長 |
| FDIC | 委員長 |
| Commerce | 商務長官 |
| FinCEN | 長官 |
| OFAC | 長官（Treasury 経由） |
| 司法長官 | 司法省（DOJ）からの代表 |

この構成は、Treasury、Federal Reserve、SEC、CFTC を中心としていた歴史的な PWG より**明示的に広い**。ステーブルコイン、制裁、AML/CFT、銀行業務、証券 / コモディティ監督が収れんするため、**複数当局の調整ニーズ**を反映している。

### 初期勧告（2025-Q3 公表）

PWG-DAM の最初の正式な成果物は、180日間の EO 14178 期限内に提出され、次の6領域を扱った。

1. **発行体適格性の枠組み** — 連邦と州の二系統構造に、共通の連邦フロアを置く。
2. **準備資産構成** — 現金、付保預金取扱機関の要求払い預金、満期≤93日の Treasury bills、Treasuries 担保リバースレポに限定する。
3. **償還保証** — T+1 で額面償還し、流動性バッファを持つ。
4. **取り付けリスク緩和** — 日次の準備資産透明性、月次 attest、流動性ストレステスト。
5. **省庁間調整プロトコル** — OCC、Federal Reserve、FDIC、州監督当局の間で監督情報を共有する。
6. **クロスボーダー枠組み** — EU MiCA、UK FCA、Japan FSA、Hong Kong HKMA、Singapore MAS を優先法域とする MRA 型の相互承認。

準備資産構成に関する勧告は、**GENIUS §4(d)** の法文へ直接反映された。償還保証に関する勧告は GENIUS §4(e) に入り、取り付けリスクに関する勧告は GENIUS §6 に基づく OCC、Federal Reserve、FDIC の実施規則を通じて成文化された。

## 連邦・州の二系統アーキテクチャ

GENIUS Act は、EU MiCA の単一パスポート型ではなく、**二系統**構造を採用する。

| 区分 | 監督当局 | 範囲 | 流通上限 | 資本フロア |
|---|---|---|---|---|
| 連邦（OCC） | OCC | ナショナル決済ステーブルコイン発行体チャーター | 無制限 | ~$50M の tier-1 フロア（OCC 裁量） |
| 連邦（Federal Reserve） | Federal Reserve Board | 銀行持株会社（BHC）子会社の発行体 | BHC 構造に連動 | BHC 枠組みに従う |
| 州 | 主たる州監督当局＋二次的な連邦レビュー | 州資格の決済ステーブルコイン発行体 | 発行残高 $10 billion | 州監督当局が設定（連邦フロアを下限とする） |

**連邦フロア**は次から構成される。

- §4(d) の準備資産構成リスト。
- §4(e) の T+1 額面償還要件。
- §501  の denylist 義務。
- §6  の監督上の最低基準（資本、流動性、ガバナンス）。
- §7  の attest と透明性要件。

州監督当局は、追加的な消費者保護、資本クッション、運営要件を課すことができるが、連邦フロアを緩和することはできない。州資格発行体が**発行残高 $10 billion** の上限を超える場合、連邦チャーターへ移行するか、発行を制限しなければならない。

この構造は、1860年代から存在する**二元銀行制度**の影響を受けており、[[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust-bank charter]] に見られる**州トラストバンクと連邦トラストバンクの区別**に実務上近い。単一パスポートではなく**二系統**を選んだ背景には、次がある：

- 既存の米国二元銀行制度という先例。
- 単一の連邦パスポート制度に反対したであろう州監督当局（NYDFS、California DFPI、Texas Department of Banking）の政治的基盤。
- **州レベルのイノベーション実験**（Wyoming SPDI、Nebraska digital-asset depositories、Utah industrial banks）を維持したいという意図。

並行する州銀行コンプライアンス・マップは [[exchanges/us-crypto-licensing-multi-layer-system|US crypto licensing multi-layer system]] を参照。

## 準備資産構成 · T-bill 要件と根拠

§4(d) の準備資産リストは意図的に狭く設計されている。

| 許容準備資産 | 根拠 |
|---|---|
| 米国通貨 | 信用リスクがゼロで、完全な額面価値を持つ |
| 付保預金取扱機関の要求払い預金 | 保険限度額までは FDIC により裏付けられ、それを超える金額は破産隔離構造で扱われる |
| 満期≤93日の Treasury bills | ソブリン信用と短期デュレーションにより、ストレス時の価格リスクを最小化する |
| Treasuries 担保リバースレポ | 担保付きで日次流動性があり、money-market funds でも類似目的で使われる |

許容リストから**除外**されるもの：

- **より長期の Treasuries**（>93 日）— SVB 破綻と 2023 年3月の USDC デペッグにつながったデュレーション損失の再現を避けるため。
- **社債・CP**（commercial paper、社債）— Tether の 2023 以前の準備資産構成で顕在化した**信用リスク**の幅を避けるため（[[fintech/tether-business-model-short-treasury-yield|Tether business model]] を参照）。
- **暗号資産担保**（BTC、ETH、その他ステーブルコイン）— 暗号資産市場がストレスを受けると SC もデペッグするという逆相関リスクを避けるため。
- **MMF 持分** — 形式上除外される。[[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] のような tokenized MMF shares は現時点で**許容準備資産ではない**が、枠組みは将来の組み入れ余地を残している。

**93日満期上限**は、次に合わせて調整されている。

1. 政府系 money-market funds の適格資産に関する **SEC Rule 2a-7** の「加重平均満期」の定義に合わせる。
2. 準備資産を **T+1 償還ウィンドウ**内に、価格影響を最小限に抑えて現金化できるようにする。
3. Federal Reserve の金利ショック・シナリオに対する安全余裕を設ける（100bp の変動が 93日物 bill に生じると約 0.25% の時価損失が発生し、90 日以内に回収可能）。

より広い準備資産フライホイールの力学は [[fintech/circular-reserve-asset-flywheel-overview|circular reserve flywheel]]、リスクケース分析は [[fintech/circular-reserve-asset-flywheel-risk-cases|circular reserve risk cases]] を参照。

### 許容準備資産の比較：GENIUS vs MiCA vs Japan EPI

| 制度 | 現金 | 要求払い預金 | 満期≤93日の Treasuries | より長期の Treasuries | MMF 持分 | 社債・CP | 暗号資産 |
|---|---|---|---|---|---|---|---|
| US GENIUS | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✗ |
| EU MiCA (EMT) | ✓ | ✓（非重要トークンは≤60%、重要トークンは≤30%） | ✓ | 限定的 | 限定的 | ✗ | ✗ |
| Japan EPI (trust type) | ✓ | ✓ | ✓ | 限定的 | ✗ | ✗ | ✗ |
| Japan EPI (bank type) | 銀行健全性規制に準拠 | | | | | | |
| HK Stablecoin Ord. | ✓ | ✓ | ✓ | 限定的 | ✗ | ✗ | ✗ |
| MAS SCS | ✓ | ✓ | ✓ | 限定的 | ✗ | ✗ | ✗ |

5つの制度圏にまたがる**収れん**は際立っている。いずれも現金、要求払い預金、短期 Treasuries を認め、暗号資産担保と社債・CP を除外し、長期の証券を制限している。**相違点**は、MiCA の預金集中制限（SVB / USDC 事案が欧州に波及したことへの反応）と、日本の銀行健全性規制の上乗せにある。完全なクロスウォークは [[fintech/global-stablecoin-regulatory-five-pole-matrix|five-pole matrix]] を参照。

## 償還保証 · T+1 額面償還

GENIUS §4(e) は、発行体にトークンを提示するすべての保有者について **T+1以内の額面償還**を求める。Treasury 枠組みはこれを次の形で実装する。

| 要件 | 詳細 |
|---|---|
| **額面償還** | 流通市場価格にかかわらず、発行体は 1:1  の額面価値で償還しなければならない |
| **T+1 決済** | 資金は償還請求後の翌営業日終了までに保有者口座へ到達しなければならない |
| **最低閾値** | 発行体は合理的な最低償還サイズを設定できる（典型例：$100,000  のホールセール階層、$1  のリテール階層） |
| **KYC ゲート** | 償還は、保有者が KYC 要件を満たすことを条件にできる |
| **流動性バッファ** | 発行体は、通常の償還に備え、即時に現金化できるバッファ（典型例：流通量の 5〜10%）を保有しなければならない |

**バッファ要件**は最も重要な技術的サブルールである。これは、**2023 年3月の USDC 事案**に対応するものだ。この事案では、Circle の Silicon Valley Bank 預金への $3.3B エクスポージャーが週末に凍結され、Federal Reserve / Treasury / FDIC が月曜日に銀行預金保証を発表する前に USDC が大きくデペッグした。新枠組みの下では、単一の無保険預金取扱機関に同程度集中する発行体は監督上の措置に直面する。

### 取り付けリスクの緩和

Treasury 枠組みは、ステーブルコインを取り付けリスク上は **準 money-market fund** として扱い、MMF 型の複数の緩和策を適用する。

1. **分散要件。** 準備資産は、単一点障害へのエクスポージャーを避けるため、少なくとも3つの相手方または発行体（Treasuries、預金取扱機関）に分散しなければならない。
2. **日次準備資産開示。** 発行体は日次の準備資産構成スナップショットを公表する。Circle USDC ではすでに標準であり、透明性の低い発行体には新たな義務となる。
3. **月次 attest。** 登録公開会計事務所が、月末時点の準備資産構成と分別管理について attest する。
4. **流動性ストレステスト。** 発行体は四半期ごとに、(a) 1日で 20% の償還、(b) 1週間で 50% の償還、(c) 上位3つの預金取扱機関の一つが破綻する、といったシナリオに対するストレステストを行う。
5. **再建・破綻処理計画。** 閾値（発行残高およそ $10B）を超える発行体は、秩序だった縮小のための living-will 型計画を提出する。
6. **流動性バッファ最低基準。** リテール向け発行体について、法定の 5% の当日流動性フロアを置く。

これらの規定は、**SVB / USDC の 2023年3月事案からの教訓**と、2008 後および 2020後の **money-market reform** の流れを明示的に踏まえる。概念上の系譜は、Securities and Exchange Commission の 2010 年および 2014 年の、MMF を規律する Rule 2a-7  改革にある。

並行する循環型準備資産フライホイールのリスク面は [[fintech/circular-reserve-asset-flywheel-risk-cases|circular reserve risk cases]] を参照。

## Treasury・Federal Reserve・OCC の役割分担

よく混同される点は、**Treasury、Federal Reserve、OCC** のどれが payment stablecoin 発行体をチャーターするのかである。答えは区分によって異なる。

| 区分 | 免許付与権限 | 主監督当局 | 破綻処理権限 | 準備資産カストディアン |
|---|---|---|---|---|
| OCC ナショナル PPSI チャーター | OCC | OCC | FDIC（付保預金債務について）＋ OCC | 預金取扱機関または Fed マスターアカウント |
| Federal Reserve BHC 子会社 | Federal Reserve | Federal Reserve | FDIC（付保分）＋ Federal Reserve | BHC 枠組みに従う |
| 州 PPSI チャーター | 州監督当局＋二次的な連邦レビュー | 州＋二次的な連邦監督 | 州＋FDIC（付保部分） | 預金取扱機関または適格な場合は Fed マスターアカウント |

**Treasury** はこのマップでは、PWG-DAM を通じた**政策調整者**、**OFAC 制裁権限**、FinCEN を通じた **AML/CFT 政策**、そしてステーブルコイン準備資産を構成する Treasury bills の発行体としての**財政上の接点**である。Treasury は PPSI 発行体を**免許付与または直接監督しない**。

この分離は、**money-market funds** に適用される分離と同じである。SEC が設定・監督し、Treasury がソブリン債発行政策を定め、Federal Reserve が discount window を運営する。その構図はデジタル資産スタックにも反映されている。比較対象となる trust-bank-charter 分析は [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust-bank charter]] を参照。

## ステーブルコインを Treasury 買い手として捉える見方

Treasury の枠組みへの関心は、消費者保護政策を超える。**準備資産構成ルールは、ステーブルコイン業界を大規模な Treasury bill の買い手に変える**。

| 発行体区分 | 推定発行残高（2026-Q1） | 生じる推定 T-bill 需要 |
|---|---|---|
| Tether (USDT) | ~$120B | ~$80B の T-bills（公開 attest ベース。国際的には non-PPSI） |
| Circle (USDC) | ~$45B | ~$30B の T-bills |
| Paxos (USDG、USDP、BUSD legacy) | ~$5B | ~$4B の T-bills |
| PayPal (PYUSD) | ~$1B | ~$0.8B の T-bills |
| その他 | ~$10B | ~$7B の T-bills |
| **ステーブルコイン・セクター合計** | **~$180B** | **~$120B の T-bills** |

現在の約 $120B から、$400B〜$1T に達するもっともらしい成長経路を今後 5〜7 年で想定すると、ステーブルコイン・セクターは**短期 Treasury 債務の構造的な新規買い手**になる。その規模は、単一の外国中央銀行による準備資産配分に匹敵し得る。この力学が、消費者保護のガードレールを前提に、規制されたステーブルコイン・セクターを**抑制するより成長させる**という Treasury の政策関心を支えている。**循環的な準備資産フライホイール**（発行増 → T-bill 需要増 → 利回り獲得 → 準備資産増 → さらなる発行）の力学は [[fintech/circular-reserve-asset-flywheel-overview|circular reserve flywheel]] で詳述され、[[fintech/circular-reserve-asset-flywheel-risk-cases|risk cases]] でリスクと対比される。

## 国際調整：MRA と Treasury の二国間チャネル

Treasury の PWG-DAM 勧告には、優先法域向けの **二国間相互承認協定（MRA）** トラックが含まれる。

| 相手方 | 状況（Q1 2026） | Treasury 側の主担当 |
|---|---|---|
| EU（Commission + EBA） | 枠組み MOU を交渉中 | Treasury 国際部門＋国務省 |
| UK FCA + HM Treasury | 二国間協議が稼働中 | 米英対話 |
| Japan FSA | 常設チャネルが稼働中（SBI / Circle / JPYC ルート後） | Treasury アジア部局 |
| Hong Kong HKMA | 協議開始段階（Stablecoin Ordinance 後） | 限定的 |
| Singapore MAS | 協議が稼働中 | Treasury アジア部局 |
| Canada OSFI | 初期段階 | 限定的 |
| Switzerland FINMA | 銀行秘密枠組みに関する既存チャネル | 稼働中 |

MRA トラックは、国内の連邦・州二系統構造に対応する**国際版**である。外国発行体に US 市場アクセスのため US PPSI 免許取得を求めるのではなく、§501 相当のコンプライアンスを条件に、同等の外国枠組みを承認できる。この政策作業に先行した三円 MRA 枠組みは [[fintech/three-circles-stablecoin-mra-framework|three circles MRA]] と [[fintech/three-circles-mra-2030-economic-scale|three circles MRA 2030 scale]] を参照。

## 実装タイムライン

| 日付 | 行動 |
|---|---|
| 2025-01-23 | EO 14178  が PWG-DAM を再チャーターし、180日間の成果物期限を設定 |
| 2025-04 | PWG-DAM の作業部会構造が稼働 |
| 2025-07-18 | GENIUS Act が法律として成立 |
| 2025-Q3 | PWG-DAM の初期勧告を公表 |
| 2025-Q4 | OCC が PPSI チャーターに関する規則案告示を実施 |
| 2026-Q1 | Federal Reserve、FDIC、OCC が準備資産構成と監督に関する共同最終規則を公表 |
| 2026-Q2 | FinCEN の報告基準を最終化 |
| 2026-Q2 見込み | 最終規則の下で最初の連邦 PPSI チャーターを発行 |
| 2026-H2 見込み | EU との最初の二国間 MRA を最終化 |

周辺の政策環境は [[fintech/regulatory-reset-2025-usa-crypto-policy|US 2025 regulatory reset]] を参照。

## 関連項目

- [[fintech/INDEX|fintech index]]
- [[fintech/regulatory-reset-2025-usa-crypto-policy|US 2025 regulatory reset]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS §501 mandate]]
- [[fintech/genius-act-501-actual-implementation|GENIUS §501 actual implementation]]
- [[fintech/occ-bank-charter-crypto-2025|OCC national bank charter for crypto 2025]]
- [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust-bank charter]]
- [[fintech/cftc-sec-crypto-jurisdiction|CFTC vs SEC jurisdiction]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|five-pole matrix]]
- [[fintech/mica-overview|EU MiCA overview]]
- [[fintech/mica-cross-border-implications|MiCA cross-border]]
- [[fintech/three-circles-stablecoin-mra-framework|three circles MRA]]
- [[fintech/circular-reserve-asset-flywheel-overview|circular reserve flywheel]]
- [[fintech/circular-reserve-asset-flywheel-risk-cases|circular reserve risk cases]]
- [[fintech/tether-business-model-short-treasury-yield|Tether business model]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[business/larry-fink-blackrock-digital-asset-template|Larry Fink template]]
- [[exchanges/us-crypto-licensing-multi-layer-system|US crypto licensing multi-layer]]

## 出典

- Treasury デジタル資産政策: https://home.treasury.gov/policy-issues/financial-markets-financial-institutions-and-fiscal-service/digital-assets
- Treasury プレスリリース: https://home.treasury.gov/news/press-releases
- President’s Working Group on Financial 市場業務: https://home.treasury.gov/policy-issues/financial-markets-financial-institutions-and-fiscal-service/presidents-working-group-on-financial-markets
- FinCEN news: https://www.fincen.gov/news-room
- Federal Reserve プレスリリース: https://www.federalreserve.gov/newsevents/pressreleases.htm
- OCC ニュース・通達: https://occ.treas.gov/news-issuances/
- White House EO 14178: https://www.whitehouse.gov/presidential-actions/
- GENIUS Act 法定本文（2025年7月に Public Law として成立）。
- 実施規則に関する Federal Register 提出資料: https://www.federalregister.gov/
- PWG 2021  Report on Stablecoins（先行文書）: https://home.treasury.gov/system/files/136/StableCoinReport_Nov1_508.pdf
