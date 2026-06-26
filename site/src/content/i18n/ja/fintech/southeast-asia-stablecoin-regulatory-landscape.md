---
source: fintech/southeast-asia-stablecoin-regulatory-landscape
source_hash: fd1ba5cf9c764e99
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "東南アジアのステーブルコイン規制ランドスケープ 2026"
translated_at: 2026-06-26T08:29:33.010Z
---
# 東南アジアのステーブルコイン規制ランドスケープ 2026



## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の配下にあり、ASEAN + 香港のステーブルコイン政策を地域別に案内する入口である。MAS と HKMA を世界地図に位置づける 5 極グローバル・マトリクス [[fintech/global-stablecoin-regulatory-five-pole-matrix]]、規制地図の下で利用者が実際に行うことを説明する新興国ドル化の反対パターン [[fintech/em-market-crypto-dollarization-pattern]] とあわせて読む。法域別の深掘りは [[fintech/singapore-mas-payment-services-act-overview]] と [[fintech/hkma-stablecoin-licensing-overview]] であり、この項目はタイ、インドネシア、フィリピン、ベトナム、マレーシアをそれらと並べる**地図ビュー**である。

> [!info] 要約
> 2026-05, までに、東南アジアのステーブルコイン規制は**3 つの階層**に分かれた。(1) **ライセンス済み発行制度** — シンガポール MAS SCS（2023-08から稼働）と香港 HKMA Stablecoin Ordinance（2025-08, から稼働、最初の 2 ライセンスは 2026-05-21）。(2) **パイロット／サンドボックス制度** — タイ SEC + BoT のステーブルコイン・サンドボックス（Programmable Payment 経由の THB ペッグ）、マレーシア BNM Discussion Paper 2026,、フィリピン BSP Project Agila サンドボックス。(3) **禁止またはグレー** — ベトナム SBV の暗号資産禁止、インドネシア OJK/BI の二重規制境界。ルピア連動 SC はまだライセンスされず、USDT は PMA ライセンス取引所と大規模な P2P / OTC 量を通じて流れる。構造的パターンは、**すべての ASEAN 中央銀行が CBDC を望み**、**多くが自国通貨ステーブルコイン・レールを望み**、**どこも USD ステーブルコインのリテール流通を望まない**というものだ。ただし執行能力は地域内で桁違いに異なる。

## 地域地図が重要な理由

US GENIUS、EU MiCA、日本 EPI の下で発行された USD ペッグ・ステーブルコインは、ASEAN に入ると**5 つの異なる法的取扱い**を受ける。XSGD のような MAS ライセンス SCS は、シンガポールでは規制対象の決済商品、インドネシアでは外貨資産、ベトナムでは未規制のデジタルトークン、フィリピンでは e-money に隣接する商品として扱われる。取扱いは**発行体の国籍とチェーン**によっても異なる。リテールウォレット内の Tron ベース USDT と、ライセンス broker を通る Solana ベース USDC では違う。この断片化は [[fintech/global-stablecoin-regulatory-five-pole-matrix]] がグローバル水準で記録するものと同じである。その結果、**地域 B2B ステーブルコイン・コリドー**（[[fintech/stablecoin-crossborder-b2b-growth]]参照）は、トークン自体ではなく、各レッグのライセンス主体に依存する狭い法的帯域で成立する。

同じ規制面のオンランプ／取引所側は [[exchanges/INDEX]]、[[exchanges/sg-mas-dpt-licensing-overview]]、地域横断ビューは [[exchanges/global-vasp-regulatory-comparison-matrix]] を参照。

### Singapore MAS · PSA + SCS + DTSP

- **法令**: Payment Services Act 2019 （PS Act）+ SCS Framework 2023-08  + DTSP Regime 2024-04 改正。
- **主管規制当局**: Monetary Authority of Singapore（MAS）。
- **ライセンス可能な SC 類型**: SGD または任意の単一 G10  法定通貨にペッグされた Single-Currency Stablecoin（SCS）。
- **準備資産**: 現金、現金同等物、または AA- 以上の短期ソブリン債で 100%。日次証明、分別保管。
- **資本下限**: S$1M を基礎とし、S$1M または年間 OpEx の 50% のいずれか高い方。
- **稼働中の SCS 発行体（2026-05）**: StraitsX XSGD（稼働中、MAS 規制対象）、Paxos USDP（オフショア子会社経由で pending）。
- **非 SCS の USD ステーブルコイン**: USDC、USDT、PYUSD は DPT ライセンシー（Coinbase Singapore、Crypto.com、Independent Reserve、HashKey、DBS Vickers、Sygnum、Anchorage Digital Singapore、StraitsX）経由で流通するが、「MAS 規制 SCS」ではない。
- **クロスボーダー**: 2026-03 に Singapore-US MRA が署名され、§501(d) の**アジア第 1 波参入**の有力候補（[[fintech/genius-act-501-denylist-mandate]] の下で）。

詳細な仕組みは [[fintech/singapore-mas-payment-services-act-overview]]、戦略的角度は [[fintech/singapore-mas-payment-services-act-strategic-implications]] にある。特に DTSP regime は、以前は未ライセンス発行体が SG 経由でフローを回せた「シンガポール法人がグローバル顧客にサービスする」抜け穴を閉じた。この点は現在、より広い [[fintech/jurisdiction-list-monetary-protectionism]] フレームワークで整理されている。

### Hong Kong HKMA · Stablecoin Ordinance (Cap. 656)

- **法令**: Stablecoin Ordinance は 2025-08, に制定され、2025-08-01に施行。
- **主管規制当局**: HKMA。SFC の下で並行する VASP ライセンスがある（[[exchanges/hk-sfc-vasp-licensing-overview]]参照）。
- **ライセンス可能な SC 類型**: HKD ペッグまたは任意の単一外国法定通貨（USD が中心）。
- **準備資産**: HKD / USD 短期国債、中央銀行準備、分別銀行預金で 100%。日次 mark-to-market。FRTB 資本取扱いは [[fintech/hk-frtb-stablecoin-reserve-overview]] に基づく。
- **資本下限**: 払込 HK$25M に加え、発行済み SC 価値の継続的な ≥2%。
- **第 1 陣決定 2026-05-21**: HSBC と Standard Chartered の「Anchorpoint」コンソーシアムが承認。その他 7 申請者（JD-HKD、Ant International、BOCHK、ZA Bank、Conflux、Tether、RD Technologies）は延期または pending。
- **クロスボーダー**: §501(d) の第 3 波候補（最速で 2027-H2）。e-CNY との境界線と OFAC SDN 調整が条件。

HK 制度は、Mainland China 関連発行体を現実的に載せ得る**唯一の ASEAN 隣接ルート**である。そのため JD、Ant International、BOCHK が申請した。Tether の HK 申請をめぐる戦略的非対称性は [[fintech/hkma-stablecoin-licensing-implications]]、より広いパターンは [[fintech/gray-market-dollar-network-formalization]] に詳しい。

### MAS vs HKMA · short comparison

| 軸 | MAS SCS（SG） | HKMA SC（HK） |
|---|---|---|
| 法令施行 | 2023-08 | 2025-08 |
| 資本下限 | S$1M | 払込 HK$25M + 継続的な 2% |
| 準備資産の満期限度 | ≤ 3 か月 | 明示的上限なし、短期 UST / HKGB |
| 証明頻度 | 日次の準備資産開示 | 独立監査人による月次証明 |
| ペッグ通貨範囲 | SGD + 任意の G10 | HKD + USD が中心、他の法定通貨も可 |
| 先行者優位 | StraitsX XSGD（2023） | HSBC + Anchorpoint（2026-05-21） |
| Mainland China 発行体ルート | DTSP により閉鎖 | 原則は開放、実務上は延期 |
| §501(d) MRA ステータス | アジア第 1 波候補 | 第 3 波候補 |

5 極（US / EU / JP / HK / SG）全体のマトリクス・ビューは [[fintech/global-stablecoin-regulatory-five-pole-matrix]] にある。二通貨アービトラージ軸における MAS と HKMA の対比は [[fintech/dual-currency-stablecoin-arbitrage-overview]] にある。

### Thailand · SEC + BoT stablecoin sandbox

- **主管規制当局**: 決済／金融政策境界はタイ銀行（BoT）、デジタル資産事業は SEC Thailand。
- **国内 SC ステータス**: 外貨担保ステーブルコイン（USDT / USDC）は SEC 通知 2022  により**決済手段としては禁止**（なお有効）だが、ライセンス済みデジタル資産取引所（Bitkub、Satang、破綻前 Zipmex Thailand、Upbit Thailand）で取引されるデジタル資産としては許容される。
- **THB ペッグ・ステーブルコイン**: 2026, 時点で、流通について BoT 審査を通過した**稼働中の THB ペッグ・ステーブルコインはない**。BoT の「Programmable Payment Sandbox」の下の規制サンドボックスは、Siam Commercial Bank と Kasikornbank のトークン化預金パイロットに加え、ホールセール CBDC パイロット（BoT 撤退前の Project Inthanon / BIS mBridge 参加の継続。[[fintech/mbridge-bis-multi-cbdc-overview]]参照）を支援する。
- **リテール CBDC**: BoT のリテール CBDC パイロット 2022-2023 は、拡大コミットメントなしで終了し、PromptPay 上の「Programmable Payment」インフラとして再整理された。
- **観光客向け暗号資産決済パイロット**: 2024-08 に SEC + BoT が、外国人訪問者がライセンス済み取引所を通じてデジタル資産を使い、加盟店側で THB に自動換金されるサンドボックスを発表。狭く囲い込まれた制度であり、SC 発行ライセンスではない。

### Malaysia · BNM Discussion Paper 2026 + SC Malaysia digital asset framework

- **主管規制当局**: 通貨／決済境界は Bank Negara Malaysia（BNM）、デジタル資産取引は Securities Commission Malaysia。
- **国内 SC ステータス**: リンギット・ペッグのステーブルコイン発行は**まだライセンス可能ではない**。BNM は 2026 初めに Stablecoins に関する Discussion Paper を公表し、MAS SCS 構造（100% 準備、単一通貨ペッグ、専用発行体ライセンス）をモデルにした将来のライセンス枠組みを示した。協議は 2026半ばに終了。
- **DuitNow / CBDC**: BNM は BIS Innovation Hub 参加を通じてホールセール CBDC 能力の開発を続けている。リテール CBDC は BNM 総裁発言 2024-2025 によれば「現段階では不要」のままである。
- **ライセンス済み取引所**: SC Malaysia の recognized market 事業者 regime の下で Luno Malaysia、SINEGY、MX Global、Tokenize Xchange。
- **クロスボーダー MYR-SGD**: BNM-MAS DuitNow-PayNow 連携（2023-04稼働）は、将来の MYR/SGD ステーブルコイン・ペアと素のコストで競合する即時決済コリドーを形成する。

### フィリピン · BSP Project Agila + 電子マネー + 仮想通貨

- **主管規制当局**: Bangko Sentral ng Pilipinas（BSP）。証券に隣接する暗号資産は SEC Philippines も関与する。
- **国内 SC ステータス**: PHP ペッグ・ステーブルコインの発行には BSP の認可が必要である。2026時点で稼働中の PHP ペッグ実証は、サンドボックス参加者 Coins.ph が発行する **PHPC** と、認可銀行経由のコンソーシアム型実証 **PHPX** である。
- **CBDC**: **Project Agila**（旧 Project CBDCPh）— Hyperledger Fabric 上の銀行間決済に焦点を置く BSP のホールセール CBDC 実証。リテール CBDC へのコミットメントはない。
- **電子マネーと SC の境界**: GCash、Maya などの大手電子マネー発行者は BSP Circular 649 （電子マネー発行者）の下で運営されており、これはステーブルコイン・ライセンスの**歴史的な類似制度**に当たる。BSP の整理では、「PHP ペッグ・ステーブルコイン」は電子マネーのトークン化形態であり、電子マネー発行者向けの健全性基準を満たす必要がある。
- **USD ステーブルコインの流れ**: USDT と USDC は、認可 Virtual Asset Service Provider（VASP）と送金コリドー（PHP-USD の海外フィリピン人労働者フロー）を通じてフィリピンのリテール層に届く。そこではステーブルコインが従来の MTO ブリッジを代替する。

### ベトナム · SBV の暗号資産禁止 + 事実上の USDT 経済

- **主管規制当局**: ベトナム国家銀行（SBV）。
- **法的位置づけ**: 暗号資産は SBV Directive 02/CT-NHNN（2018,、2026時点でなお有効）の下で**法定通貨として認められず**、**支払手段としても許可されない**。暗号資産を支払手段として発行・流通・使用すると行政罰の対象になる。
- **迂回経路**: ベトナムはリテール暗号資産採用で継続的に**世界トップ 3**に入る（Chainalysis Global Crypto Adoption Index 2023, 2024, 2025）。背景には、USDT P2P 送金、ゲームトークン収益（Sky Mavis Axie Infinity の系譜と新規プロジェクト）、加盟店側で表立って広告せずに受け入れるステーブルコイン決済がある。
- **保留中の規制**: Digital Asset Management に関する政令案は 2023以降、省庁間で回覧されている。報道された複数の最終化期限（2024, 2025, 2026）はいずれも後ろ倒しになった。想定される形はステーブルコイン発行ライセンスではなく、**認可仮想資産事業**の枠組みである。
- **実務上の含意**: リテール・レールでは USDT-Tron と USDT-TON が支配的である。ここでの Tether のグレーマーケット優位は、[[fintech/em-market-crypto-dollarization-pattern]] に記録されたパターンそのものだ。

### インドネシア · OJK + BI の二重規制境界

- **主管規制当局**: Otoritas Jasa Keuangan（OJK、金融サービス庁）と Bank Indonesia（BI、中央銀行）。2023 P2SK Law により、暗号資産監督は商品先物規制当局 Bappebti から OJK へ 2025-01付で移管された。
- **国内 SC ステータス**: ルピア・ペッグのステーブルコイン**発行はまだ認可されていない**。OJK はステーブルコイン・ライセンス経路を含むデジタル金融資産フレームワークを公表する意向を示しているが、2026-05 時点で IDR ステーブルコインは認可されていない。
- **海外 SC ステータス**: USDT、USDC などの USD ステーブルコインは、認可 Pedagang Aset Kripto（PMA）取引所（Tokocrypto、Indodax、Pintu、Reku、Triv、Pluang、Upbit Indonesia、Mobee）で、商品分類のデジタル資産として取引できる。
- **CBDC**: **Project Garuda** — BI のホールセール CBDC 実証。二層アーキテクチャで、BI-FAST 即時決済システムと統合される。現在は設計段階で、リテール発行のタイムラインはない。
- **送金コリドー**: シンガポール、マレーシア、香港、サウジアラビアにいるインドネシア人ディアスポラからの USDT P2P 送金は大きく、非公式性も強い。これは専用項目 [[fintech/indonesia-ovo-stablecoin-route]] の深い文脈である。

## 横断的な構造パターン

1. **すべての中央銀行が CBDC を望むが、多くはホールセール中心**。7 法域のうち 5 つ（MAS、HKMA、BoT、BNM、BSP、BI）がホールセール CBDC 実証を行っており、公表済み実証がないのはベトナム SBV のみである。リテール CBDC への熱意は地域全体で冷え込み、タイとシンガポールはリテール開始を公に後景化し、香港 e-HKD も実証にとどまる。
2. **自国通貨ステーブルコイン・ライセンスが新たな標準目標**。MAS と HKMA はすでに制度を持ち、BNM は草案を作成中、BoT は制度化に向けたサンドボックスを運営し、BSP は電子マネー枠組みをプロトライセンスとして使い、OJK も意向を示している。国内 SC 計画がないのは SBV のみである。
3. **USD ステーブルコインのリテール流通は一様に制約されるが、実務上は広く浸透**。USDC と USDT が DPT ライセンス業者で取引可能なシンガポールでさえ、それらは SCS としてライセンスできない。[[fintech/em-market-crypto-dollarization-pattern]] が記述する新興国ドル化パターンのリテール・フローは、ベトナム、インドネシア、フィリピンで構造的に同じである。
4. **クロスボーダー即時決済連携は同じコリドーでステーブルコインと競合する**。ASEAN-5 とインドは BIS Innovation Hub の支援を受け、PromptPay / DuitNow / PayNow / UPI / InstaPay を相互接続する Project Nexus を開始した。このレールは、現在 USDT と USDC が取り込む送金・B2B フローに対する**非ステーブルコイン型**の回答である。
5. **香港は中国本土系ステーブルコインの唯一の経路**。シンガポールの DTSP 閉鎖は、中国本土系支配の発行体を香港へ向かわせた。HKMA が第 1 陣で JD、Ant International、BOCHK を先送りしたことは、政治的ゲートが厳しいことを示す。結果として、アジア SC 市場は**二分化**する。グローバル銀行系発行体（HSBC、StanChart）が最初の香港ライセンスを得る一方、中国系発行体は PBoC のオフショア CNH 窓を待つ。同じ力学は [[fintech/sovereign-fund-crypto-allocation-pattern]] でも指摘されており、より広い [[fintech/national-license-private-stablecoin-with-dpi-export]] パターンの一部である。
6. **記録上の主管規制当局は技術より重要**。ASEAN のどの法域でも USDC トークンは同じオンチェーン・オブジェクトだが、保有者が MAS DPT ライセンシー、OJK PMA 取引所、BSP 認可 VASP、または無認可 P2P 取引のどれを通じて到達したかで扱いが変わる。同じ観察が [[fintech/global-stablecoin-regulatory-five-pole-matrix]] のグローバル五極比較を支え、[[fintech/issuer-distributor-incentive-realignment-50-50-model]] の発行体・分配体フレーミングを動機づけている。
7. **サンドボックスからライセンスまでの遅延は構造的に 2-3 年**。MAS の SCS フレームワークは実稼働ライセンスまで約 2 年の協議を要し、HKMA 条例は協議から初回ライセンスまでほぼ 3 年を要した。したがって Bank Negara Malaysia の 2026  Discussion Paper が 2028, 以前に稼働中の MYR-SC 発行体を生む可能性は低く、タイやインドネシアのタイムラインも同じ基準で読むべきである。

## 地域銀行の健全性規制下における資本・準備資産の扱い

銀行グループに属する認可発行体（HSBC、StanChart Anchorpoint、将来の銀行系マレーシア／インドネシア発行体など）では、ステーブルコイン準備資産に対する **Basel III FRTB 資本取扱い** が重要な二次制約となる。HKMA の FRTB 整合的な準備資産取扱いは [[fintech/hk-frtb-stablecoin-reserve-overview]]、暗号資産エクスポージャーに関するより広い Basel 上の含意は [[fintech/basel-iii-frtb-crypto-exposure-overview]] と [[fintech/basel-iii-frtb-crypto-exposure-implications]] に記載されている。非銀行発行体（シンガポールの StraitsX、将来の BNM / OJK 枠組み下の非銀行発行体）は、完全な銀行自己資本規制ではなく、専用のステーブルコイン発行体資本フロアの対象となる。

SCS 型フレームワーク（MAS）または専用 SC 発行体フレームワーク（HKMA）の下で規制される非銀行発行体では、規制資本フロアは銀行自己資本規制より明確に**低い**。そのため、コンプライアンス負担を加味しても、非銀行発行には構造的なコスト優位が生じる。

## 2025-2026

に観測されたクロスボーダー・ステーブルコイン・コリドー

| コリドー | 主なレール | 決済資産 | 注記 |
|---|---|---|---|
| SG ↔ HK | DPT 取引所 + 銀行 | USDC, USDT | 両端が MAS / HKMA / SFC ライセンス対象 |
| SG ↔ ID | OTC + PMA 取引所 | USDT（Tron） | インドネシア側はリテール P2P の比重が大きい |
| MY ↔ SG | DuitNow-PayNow 直接連携 | MYR-SGD 法定通貨 | 即時決済であり、SC は不要 |
| SG ↔ PH | OTC + Coins.ph | USDC, USDT | フィリピン OFW 送金の上乗せレイヤー |
| HK ↔ 中国本土 | 非公式 OTC | USDT | 資本規制のグレー・コリドー |
| TH ↔ 大メコン圏 | OTC + USDT（TRC-20） | USDT, USDC | 観光 + 越境貿易 |
| 任意地域 ↔ ASEAN | mBridge 候補（中国主導） | mCBDC | 参照: [[fintech/mbridge-bis-multi-cbdc-overview]] |
| 任意地域 ↔ ASEAN | SWIFT-API ハイブリッド | USD ホールセール | 参照: [[fintech/cross-border-sc-via-swift-api]] |

### コリドー別コメント

**SG ↔ HK** は、域内で最も密度の高い完全ライセンス型コリドーである。両端に主要 DPT / VASP ライセンシーと、アジア最大級の機関投資家向け暗号資産カストディ集積がある（[[exchanges/crypto-custody-provider-landscape-matrix]]、[[exchanges/global-institutional-custody-five-pillars]]参照）。USDC と USDT は両レッグでクリーンな KYC を伴って認可業者を通過し、アジアにおける**完全準拠 USD ステーブルコイン・コリドーに最も近い類型**となる。

**SG ↔ ID** は最も非対称なコリドーである。シンガポール側は MAS DPT + DTSP により厳格にライセンス化される一方、インドネシア側は認可 PMA 取引所に加え、はるかに大きい非公式 P2P レイヤーを持つ。このコリドーのコンプライアンス姿勢は、摩擦の低いレッグであるインドネシア側によって決まる。構造的力学は [[fintech/gray-market-dollar-network-formalization]] のグレーマーケット公式化分析を映している。

**MY ↔ SG** は**反例**である。即時決済連携（DuitNow ↔ PayNow）により、リテール量ではステーブルコイン代替が経済的に魅力を失う。このコリドーでのステーブルコイン利用は B2B と暗号資産ネイティブ領域に集中する。

**HK ↔ 中国本土** は、資本規制グレー・コリドーの典型である。支配的レールは USDT-Tron である。HKMA ライセンスの HKD ペッグ・ステーブルコイン（HSBC、StanChart Anchorpoint）は、構造上このコリドーをリテール水準で支えることを**禁じられる**。政治的制約は [[fintech/hkma-stablecoin-licensing-implications]] が記録する e-CNY の境界線と同じである。

**TH ↔ 大メコン圏**（タイ、ラオス、カンボジア、ミャンマー、中国南部）は非公式 OTC の比重が大きく、タイ以外のレッグでは監督が弱い。AML/CFT 脆弱性へのエクスポージャーが最も大きいコリドーであり、FATF Travel Rule の期待が暗黙に標的とする領域でもある（[[fintech/fatf-travel-rule-overview]]、[[fintech/fatf-travel-rule-cross-border-stack]]参照）。

## AML/CFTとFATF上の位置づけ

ASEAN の FATF グレーリスト動向は、ステーブルコイン・コリドーのリスクに直接影響する。フィリピンは 2025に FATF グレーリストから除外された。ベトナムは FATF の強化フォローアップ下に残り、ミャンマーは FATF ブラックリストに載っている。越境ステーブルコイン・フローへの含意は [[fintech/aml-cft-fatf-grey-list-overview]] と [[fintech/aml-cft-fatf-grey-list-cross-border-implications]] に記録されている。MAS / HKMA 法域の認可発行体は、グレーリスト隣接コリドーを起点とするフローを受け入れる際、**直接的なカウンターパーティリスク上の帰結**に直面する。

## 投資家・運営者への含意

- 2026-2027, にアジア法域を選ぶ**ステーブルコイン発行体**にとって、**最速で稼働ライセンスへ到達する経路はシンガポール MAS SCS** である。実証済み制度、低い資本フロア、グローバルブランドで補える日次証明コストが理由だ。香港は**政治的ゲートがより強く**、中国本土との関係を持つ合理性がある発行体に限って選好される。
- **VASP または DPT** がアジア拠点を選ぶ場合、選択肢は、より広いリテール接点と SCS ライセンス隣接性を持つ MAS、またはより深い銀行統合と広い機関投資家接点を持つ香港の間になる。[[exchanges/jp-crypto-bank-credit-facilities]] を通じる日本は、規制上保守的な第三極である。
- **B2B 決済ユースケース**では、ASEAN 内で最も費用対効果が高いコリドーは、USDC を使う **MAS / HKMA ライセンス主体間**である。その範囲を外れると、規制・AML 摩擦が大きく増える。
- インドネシア、フィリピン、ベトナム向けの**送金ユースケース**では、実務上のレールは**認可取引所を通じた USDT-Tron + 非公式オフランプ**である。ライセンス済み商品の代替案がコストを圧縮できるのは、Project Nexus の相互接続が該当コリドーに到達する場合に限られる。
- **クロスボーダー SC プロダクトチーム**には、[[fintech/protocol-hedge-strategy-stripe-pattern]] と [[fintech/embedded-wallet-fintech-disintermediation-overview]] の構造的教訓が直接当てはまる。各レッグで認可された現地主体との提携が必要であり、各レッグの規制境界が UX とコストの双方を形作る。

## 関連項目

- [[fintech/INDEX|Wiki Index]]
- [[fintech/singapore-mas-payment-services-act-overview|MAS PSA + SCS framework]]
- [[fintech/singapore-mas-payment-services-act-strategic-implications|MAS strategic implications]]
- [[fintech/hkma-stablecoin-licensing-overview|HKMA licensing overview]]
- [[fintech/hkma-stablecoin-licensing-implications|HKMA strategic implications]]
- [[fintech/hk-frtb-stablecoin-reserve-overview|HK FRTB reserve treatment]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|Global five-pole matrix]]
- [[fintech/jurisdiction-list-monetary-protectionism|§501(d) jurisdiction list]]
- [[fintech/indonesia-ovo-stablecoin-route|Indonesia OVO / stablecoin route]]
- [[fintech/em-market-crypto-dollarization-pattern|EM crypto-dollarization pattern]]
- [[fintech/india-anti-dollar-dpi-alliance|India anti-dollar DPI alliance]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC]]
- [[exchanges/sg-mas-dpt-licensing-overview|SG MAS DPT licensing]]
- [[exchanges/hk-sfc-vasp-licensing-overview|HK SFC VASP licensing]]
- [[exchanges/global-vasp-regulatory-comparison-matrix|Global VASP regulatory matrix]]

## 出典

- Monetary Authority of Singapore — Payment Services Act guidance and SCS Framework explainer.
- Hong Kong Monetary Authority — Stablecoin Ordinance press releases and licensing announcements (2025-2026).
- Securities and Exchange Commission Thailand — Digital asset business notifications.
- タイ銀行 — Digital Finance and Programmable Payment Sandbox materials.
- Otoritas Jasa Keuangan (Indonesia) — Crypto supervision transition statements following P2SK Law.
- 銀行 Indonesia — Project Garuda whitepaper materials.
- Bangko Sentral ng Pilipinas — Project Agila and VASP licensing circulars.
- State 銀行 of Vietnam — Directive 02/CT-NHNN and subsequent guidance.
- Bank Negara Malaysia — Discussion Paper on Stablecoins (2026).
- 銀行 for International Settlements — Project Nexus, mBridge, and ASEAN-related working papers.
