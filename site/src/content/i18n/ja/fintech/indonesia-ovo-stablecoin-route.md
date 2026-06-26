---
source: fintech/indonesia-ovo-stablecoin-route
source_hash: e3e63a2e1ba18b82
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "インドネシア E-ウォレットエコシステムとステーブルコイン・ルート"
translated_at: 2026-06-26T08:29:01.755Z
---
# インドネシア E-ウォレットエコシステムとステーブルコイン・ルート

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の下に位置づけられる、インドネシア固有の深掘りである。地域別 [[fintech/southeast-asia-stablecoin-regulatory-landscape]] 項目が参照する OJK / BI の仕組みと IDR-stablecoin のグレー・コリドー・フローを扱う。クロスEMの行動基準線として [[fintech/em-market-crypto-dollarization-pattern]]、USDT が世界的にたどる構造パターンとして [[fintech/gray-market-dollar-network-formalization]]、OVO / GoPay / DANA / ShopeePay のようなプラットフォームが将来の rupiah-stablecoin ライセンスでなぜ戦略的位置にあるかについて 発行会社-distributor 分割を示す [[fintech/issuer-distributor-incentive-realignment-50-50-model]] とあわせて読む。

> [!info] 要約
> インドネシアの決済スタックは、BI の全国QRレール **QRIS** の上で動く **4つのeウォレット・スーパーアプリ**、すなわち OVO（Grab + Lippo 支配）、GoPay（GoTo Group）、DANA（Ant Group + Emtek）、ShopeePay（Sea Group）に支配されている。暗号資産監督は 2025-01  から、P2SK Law に基づき Bappebti から **OJK** へ移管されたが、2026-05 時点で**ルピアペッグのステーブルコイン発行はまだライセンス化されていない**。USD ステーブルコイン（USDT、USDC）は、ライセンス済み PMA 取引所（Tokocrypto、Indodax、Pintu、Reku、Triv、Pluang、Upbit Indonesia、Mobee）と、シンガポール、マレーシア、香港、サウジアラビアのインドネシア・ディアスポラを結ぶ**大規模な非公式 P2P 送金コリドー**を通じて流通している。2026-2027  の戦略的な問いは、OJK + BI が IDR ステーブルコインをライセンス化するか、そして発行体が4大eウォレット、ライセンス銀行（Bank Mandiri、BCA、BRI、BNI）、または新設の専業発行体のどれになるかである。

## 規制境界 · OJK vs BI vs Bappebti

| Function | Authority | Scope |
|---|---|---|
| 銀行 / 決済システム / FX / 金融政策 | Bank Indonesia (BI) | QRIS、BI-FAST、ルピア、FX制度、Project Garuda CBDC |
| 資本市場 + ノンバンク金融サービス +（2025-01以降）暗号資産 | Otoritas Jasa Keuangan (OJK) | 取引所、カストディ、ステーブルコイン・ライセンス（保留中） |
| 商品先物 + 過去の暗号資産規制当局（2018-2024） | Bappebti | 暗号資産監督から段階的に退出、将来は商品分野のみ |
| 電子マネー発行体ライセンス | PBI 23/6/PBI/2021  に基づく BI | OVO、GoPay、DANA、ShopeePay、LinkAja など |
| 送金ライセンス（PJP） | PBI 22/23/PBI/2020  に基づく BI | クロスボーダー送金サービスプロバイダー |

**主要な移行点**: **P2SK Law（UU 4/2023）**はインドネシアの金融監督を再編した。暗号資産 / デジタル金融資産の監督は、2025-01 から正式に Bappebti（商品デリバティブの枠組み）から OJK（金融サービスの枠組み）へ移った。この移行は、従来の商品取引の枠組みではなく、MAS SCS や HKMA モデルに近い**プルーデンシャル型ステーブルコイン・ライセンス**への道を暗黙に開く。

近隣司法管轄区との対比は鮮明である。MAS PS Act の枠組みは [[fintech/singapore-mas-payment-services-act-overview]]、HKMA の専用ライセンスモデルは [[fintech/hkma-stablecoin-licensing-overview]] を参照。OJK はフレームワークを示唆しているが、日程は確約していない。

### OVO · Lippo 起源、Grab 支配、Tokopedia パートナー

- **所有**: 元は Lippo Group。Grab が 2021 に支配持分を取得し、2024-2025 に追加統合。
- **ライセンス**: BI の電子マネー発行体 + 決済サービスプロバイダー（PJP）。PBI 23/6/PBI/2021 に基づく電子マネーとして規制される。
- **規模**: 登録アカウントは報道ベースで数億、月間アクティブは数千万。Grab の配車と Tokopedia のECに深く統合されている。
- **暗号資産上の視点**: 直接の暗号資産発行体ではない。ただし Grab Financial Group はマレーシアで GXBank を運営し、シンガポール SCS に隣接する体制を持つため、OJK が IDR-SC ライセンス経路を開けば Grab 側の能力をインドネシアへ移植できる。

### GoPay · GoTo（Gojek + Tokopedia 合併）

- **所有**: GoTo Group（Gojek-Tokopedia 合併、IDX 2022 上場）の金融部門である GoTo Financial。
- **ライセンス**: BI 電子マネー + PJP + GoPaylater（認可 multifinance 事業体を通じた BNPL）。
- **規模**: 月間アクティブユーザー 25M+ と報告。2023にローンチされた GoPay アプリと、Gojek / Tokopedia を通じたエコシステム到達を持つ。
- **暗号資産上の視点**: GoTo Group は **GoTo Treasury** / **Mitra Pajakku** の金融サービススタックを抱え、実験的なトークン化パイロットを行っている。現時点で直接のステーブルコイン発行はなく、OJK + BI の共同認可が必要になる。

### DANA · Ant Group + Emtek

- **所有**: Ant Group（Alipay）と Emtek（インドネシアのメディア複合企業）の合弁である DANA Indonesia。
- **License**: BI e-money + PJP.
- **規模**: 月間アクティブユーザーは数千万規模で、QRIS を通じた広い加盟店受容を持つ。
- **暗号資産上の視点**: インドネシア決済に入る最も直接的な中国本土系チャネルである。Ant International の香港ステーブルコイン・ライセンス申請（[[fintech/hkma-stablecoin-licensing-overview]]参照）は、HKMA が承認し OJK が同時に IDR-SC を自由化した場合、管轄区横断ブリッジになり得る。2027-2028 における低確率だが高インパクトのシナリオである。

### ShopeePay · Sea Group

- **所有**: Shopee、SeaMoney、Garena の親会社である Sea Limited（NYSE: SE）。
- **ライセンス**: BI 電子マネー + PJP。SeaBank Indonesia が認可銀行事業体として存在する。
- **規模**: Shopee marketplace に大規模に組み込まれ、SeaBank Indonesia が預金・貸出商品を提供する。
- **暗号資産上の視点**: Sea は歴史的に、他の3大スーパーアプリよりコンプライアンス保守的な姿勢を取ってきた。シンガポール本社により、インドネシアで直接ステーブルコイン発行を求めるより、MAS DPT ライセンスを通じて暗号資産エクスポージャーに参加できる。

### Cross-comparison

| ウォレット | 支配親会社 | 外国決済プラットフォームのDNA | 想定されるIDR-SC姿勢 |
|---|---|---|---|
| OVO | Grab（NASDAQ経由のSG上場）+ Lippo | Grab Financial Group SG | 能力は高く、意欲は中程度 |
| GoPay | GoTo（IDX上場） | インドネシア国内型 | 能力は高く、意欲も高い |
| DANA | Ant Group + Emtek | Alipay China | 能力は高く、意欲も高いが政治的感度が高い |
| ShopeePay | Sea Group（NYSE） | コンプライアンス保守的なSG型 | 能力は中程度、意欲は低い |

### eウォレットがステーブルコイン・ライセンスを求める（または求めない）理由

eウォレットが IDR-SC 発行を求める戦略的根拠は、**決済フロー上のインターチェンジ相当の経済価値を取り込みたいのか**、それとも**薄い分配レイヤーにとどまりたいのか**にかかっている。同じトレードオフは [[fintech/issuer-distributor-incentive-realignment-arc-strategy]] と、より広い [[fintech/usd-stablecoin-interchange]] の枠組みで検討されている。インドネシアの eウォレットにとっては次のようになる。

- **発行に賛成する理由**: 基礎準備資産の float / NIM を取り込み、分配をウォレットに固定し、銀行発行トークン化預金による代替に防御できる。
- **発行に反対する理由**: 健全性資本フロア、OJK + BI 共同制度下の追加監督、既存電子マネー収益モデルのカニバリゼーションが生じ得る。

同じ計算が Stripe による Bridge 買収を促し（[[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse]] と [[fintech/regulatory-window-strategic-acquisition]]参照）、世界の他の分配レイヤー事業者が採る [[fintech/protocol-hedge-strategy-stripe-pattern]] を形づけている。

## QRIS レールとステーブルコインへの影響

**QRIS** は BI の標準化QRコード決済規格であり、2020 以降、すべての電子マネーおよび銀行発行QR決済受容に義務づけられている。2026, までに QRIS は数億の加盟店接点を持ち、**1取引 IDR 10M 未満のリテール決済のデフォルトレール**になった。ルピア・ステーブルコインのライセンスに対する構造的含意は次のとおり。

1. 認可 IDR-SC は、リテール用途を取り込むため **QRIS と相互運用**する必要がある。
2. **Project Nexus**（BIS主導の ASEAN+India 即時決済連結）を通じた QRIS 連携、および Singapore PayNow（2023）、Malaysia DuitNow（2023）、Thailand PromptPay（2023）との二国間連携は、クロスボーダー送金に対する**非ステーブルコイン型の回答**を提供し、USDT P2P コリドーと直接競合する。
3. BI の **Project Garuda** ホールセールCBDCパイロット（Hyperledgerベース、二層アーキテクチャ）は QRIS を置き換えるのではなく上流に位置するよう設計されており、ノンバンク・ステーブルコイン・ライセンスとは別の**商業銀行発行トークン化預金**商品の構造的余地を残している。類似例は [[fintech/institutional-stablecoin-deposit-token-thesis]] の機関向け預金トークン枠組み、および [[fintech/japan-stablecoin-regulatory-landscape]] の日本の信託 / 銀行 / 資金移動業分割である。

### On-chain / licensed venue

- **Tokocrypto**（2024 のスピンオフまで Binance 系、現在は国内支配）: 取引量最大で IDR-USDT ペアが厚い。
- **Indodax**: 長期運営の国内取引所、IDR建てステーブルコイン現物。
- **Pintu**: モバイルファーストで、ネオバンクと提携。
- **Reku**、**Triv**、**Pluang**、**Upbit Indonesia**（Dunamu パートナー）、**Mobee**: 認可PMA名簿を補完する事業者群。

リテール取引量では USDT が支配的なステーブルコインである。2024 以降、機関投資家級オンランプの拡大に伴い USDC のシェアも伸びている。

### オフチェーン / P2P / インフォーマル

- **ディアスポラ送金コリドー**: Singapore-Indonesia、Malaysia-Indonesia、Hong Kong-Indonesia、Saudi Arabia-Indonesia。これらの市場のインドネシア移民労働者は、価値移転レイヤーとして **USDT-Tron** を使い、最終IDR転換は現地OTCデスクまたは Binance / OKX / Bybit の P2P を通じて行う。
- **クロスボーダーEC決済**: 中国から仕入れる小規模インドネシア輸入業者は、正式なFX決済摩擦を回避するため、USDT を支払いレイヤーとして使う。
- **グレーマーケット行動パターン**: [[fintech/em-market-crypto-dollarization-pattern]] が Nigeria、Argentina、Mexico で記録したものと同一である。Chainalysis Global Crypto Adoption Index における Indonesia の順位は、投機ではなくこれらのフローによって一貫して上位に押し上げられている。

## 保留中のIDRステーブルコイン・ライセンスシナリオ

| シナリオ | 想定される発行体像 | 確率 2026-2027 |
|---|---|---|
| OJK + BI が銀行発行 IDR-SC（Mandiri、BCA、BRI、BNI）を認可 | トークン化預金の枠組み | 中程度 |
| OJK が認知された電子マネー事業者発行のノンバンク IDR-SC を認可 | OVO / GoPay / DANA / ShopeePay | 低め |
| OJK + BI がコンソーシアム支援 IDR-SC を認可 | 複数銀行または電子マネー + 銀行JV | 中程度 |
| OJK が認可PMA取引所による exchange-IDR 発行を許可 | Tokocrypto / Indodax | 低い |
| 2026-2027 に IDR-SC ライセンスが発行されない | 現状維持 | 最も高い |

BI / OJK の姿勢と銀行安定性論の政治的重みを踏まえると、最も可能性が高い経路は、ノンバンク・ステーブルコインではなくトークン化預金として位置づけられる**銀行発行またはコンソーシアム発行**の IDR-SC である。これは日本の信託型EPI優位（[[fintech/japan-epi-three-types-overview]] と [[fintech/jp-trust-type-sc-architecture]]参照）および [[fintech/brazil-drex-timeline-2026]] に記録された Brazil DREX の方向性を映す。

### 資本・準備金フレームワークの想定

OJK が MAS-SCS に沿ったテンプレートを採る場合、健全性フロアにはおそらく次が含まれる。
- 現金、中央銀行預金、または短期ルピア建て国債による 100% 準備。
- OJK監督機関での分別カストディ。
- OJK認定監査人による月次または日次の準備資産証明。
- ノンバンク発行体向けの専用資本フロア（地域比較に基づけば IDR 10-50  billion レンジの可能性）。
- Travel Rule 対応を含む AML/CFT 義務（[[fintech/fatf-travel-rule-overview]] と [[fintech/fatf-travel-rule-cross-border-stack]]参照）。

OJK が代わりに BI の選好する**銀行発行トークン化預金**へ譲る場合、新しいライセンス区分を作るのではなく、既存の健全性銀行規制をトークン化預金商品へ拡張することになる。これは [[fintech/brazil-drex-timeline-2026]] に記録された Brazil DREX アーキテクチャに相当する。

### インドネシア国内における海外発行USDステーブルコインの戦略的位置別の論点は、OJK が**海外ライセンス済みUSDステーブルコイン**（GENIUS下の USDC、SBI Circle 下の JPY-USDC、将来の MAS-SCS USD 変種）について、現在の商品分類上の扱いより正式な形で、認可PMA取引所を通じて Indonesia 国内に分配する承認経路を作るかどうかである。最も近い類似例は日本のディストリビューターモデル（[[fintech/japan-stablecoin-regulatory-landscape]] と [[fintech/japan-epi-three-types-overview]]参照）と、[[fintech/japan-epi-four-camps-comparison]] で整理された戦略的バリューチェーン上の含意である。[[fintech/three-circles-stablecoin-mra-framework]] の三円MRAフレームワークと、その 2030  経済規模ビュー（[[fintech/three-circles-mra-2030-economic-scale]]）が、より広い政策背景になる。

## クロスボーダーIDR-SGDブリッジ

Singapore-Indonesia は、インドネシア・ディアスポラ送金と中小企業貿易決済における**最大規模の地域コリドー**である。2026 における競合レールは次のとおり。

1. **PayNow ↔ BI-FAST 二国間連携**（BIS主導の Project Nexus フレームワーク下）。リテール向けに取引上限付きでライブ。
2. **銀行コルレス SWIFT** — レガシーレールで、企業財務の取引量ではなお支配的。
3. **認可PMA取引所 + Singapore DPT ライセンス事業者を経由する USDT-Tron / USDC-Solana**（[[exchanges/sg-mas-dpt-licensing-overview]]参照） — 速いが、各レッグのKYC範囲は狭い。
4. **インフォーマル USDT P2P** — 最速・最安・可視性最低。OJK と MAS は共同でこのコリドーを圧縮しようとしている。

このコリドーの経済性は、より広い B2B ステーブルコイン成長パターン（[[fintech/stablecoin-crossborder-b2b-growth]]）および、トレーダーがルピア・シンガポールドルのレッグを回す際の [[fintech/dual-currency-stablecoin-arbitrage-overview]] の二通貨アービトラージ動学にも影響される。[[fintech/dual-currency-stablecoin-arbitrage-legal-hack]] で扱う二通貨アービトラージの法的メカニクスは、両端が正式に規制されてもこのコリドーがなお収益性を持つ理由を説明する。

### Indonesia ↔ Hong Kong という二次コリドー

Indonesia と Hong Kong の間には、規模は小さいが重要なコリドーがある。これはインドネシア華人ディアスポラのフロー、Hong Kong 銀行口座を持つインドネシア法人、そして Ant International / DANA の管轄区横断関係によって支えられる。HKMA が 2027  に中国本土系発行体によるUSDペッグ・ステーブルコインを承認した場合（[[fintech/hkma-stablecoin-licensing-implications]]参照）、Indonesia-HK コリドーは、片側に規制済み中国系USDステーブルコインを持つ**初のステーブルコイン・コリドー**となり、USDT-Tron の現行支配に対する地域競争地図を大きく変え得る。

### Indonesia ↔ Saudi Arabia / UAE remittance

Saudi Arabia と UAE のインドネシア移民労働者人口は、Indonesia 向けに相当規模の送金コリドーを生む。Middle East 側では規制済み USD ステーブルコインのオンランプ（UAE VARA ライセンス会場）とインフォーマル USDT の利用が増え、Indonesia 側は PMA 取引所またはインフォーマル P2P を通じて吸収する。このコリドーの機関投資家レイヤーを見るうえで、[[fintech/sovereign-capital-pool-aramco-anchor]] の Aramco / sovereign-capital の位置づけおよびより広い [[fintech/sovereign-fund-crypto-allocation-pattern]] とのアーキテクチャ上の並行性は注目に値する。

## 関連項目

- [[fintech/INDEX|Wiki Index]]
- [[fintech/southeast-asia-stablecoin-regulatory-landscape|SE Asia regulatory landscape]]
- [[fintech/em-market-crypto-dollarization-pattern|EM crypto-dollarization pattern]]
- [[fintech/gray-market-dollar-network-formalization|Gray market USD network formalization]]
- [[fintech/singapore-mas-payment-services-act-overview|MAS PS Act + SCS]]
- [[fintech/hkma-stablecoin-licensing-overview|HKMA stablecoin licensing]]
- [[fintech/india-anti-dollar-dpi-alliance|India anti-dollar DPI alliance]]
- [[fintech/national-license-private-stablecoin-with-dpi-export|National-license SC + DPI export]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge multi-CBDC]]
- [[fintech/stablecoin-crossborder-b2b-growth|B2B stablecoin cross-border growth]]
- [[fintech/dual-currency-stablecoin-arbitrage-overview|Dual-currency stablecoin arbitrage]]
- [[fintech/issuer-distributor-incentive-realignment-50-50-model|発行会社 / distributor 50/50 model]]
- [[exchanges/sg-mas-dpt-licensing-overview|SG MAS DPT licensing]]
- [[exchanges/global-vasp-regulatory-comparison-matrix|Global VASP regulatory matrix]]

## 出典

- Otoritas Jasa Keuangan — P2SK Law（UU 4/2023）後の監督移管声明。
- Bank Indonesia — QRIS 標準化通達、BI-FAST 即時決済システム資料、Project Garuda CBDC 発表。
- Bappebti — 暗号資産監督の段階的終了声明と最終PMA取引所名簿の引き継ぎ。
- Monetary Authority of Singapore — PayNow-BI-FAST 二国間連携資料と DPT ライセンス名簿。
- Bank for International Settlements — ASEAN+India 即時決済連結に関する Project Nexus ワーキングペーパー。
