---
source: loyalty/jal-mileage-bank-vs-ana-mileage-club-comparison
source_hash: 2482dd8a91e6f522
lang: ja
status: machine
fidelity: ok
title: "JAL Mileage Bank と ANA Mileage Club の比較 — 積算、交換、提携ネットワーク、ステータス階層、繰延収益会計"
translated_at: 2026-06-02T16:33:58.503Z
---

# JAL Mileage Bank と ANA Mileage Club の比較 — 積算、交換、提携ネットワーク、ステータス階層、繰延収益会計

## ウィキ上の位置づけ

この項目は、日本の二大航空会社ロイヤルティプログラムについての **frequent-flyer-program (FFP) 比較ページ**として [[loyalty/INDEX|loyalty index]] の下に位置づける。横断的なロイヤルティ・エコシステム文脈は [[loyalty/japan-points-landscape|Japan points landscape]]、一般的な共通ポイントプログラムと大きく異なる契約負債処理は [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]、その IFRS-15 上の扱いとして読む。JAL Mileage Bank ↔ Pontaポイントの双方向交換関係は [[loyalty/ponta-points-deep-dive|Ponta points deep dive]]、航空マイルと相互交換する共通ポイントのピアは [[loyalty/d-point-detailed-ecosystem|d Point detailed ecosystem]] と [[loyalty/v-point-smbc-ccc-case|V Point case]]、JAL 側のカード発行・決済インフラスタックは [[card-issuers/jal-card|JAL Card]] と [[payment-firms/jal-payment-port|JAL Payment Port]]、ウォレット隣接の文脈は [[payments/japan-code-payment-operator-2025-market-share-matrix|Japan code-payment operator 2025 market share matrix]] と組み合わせる。

## 要約

**JAL Mileage Bank (JMB)** と **ANA Mileage Club (AMC)** は、日本を代表する二つの航空会社マイレージプログラムである。いずれも IFRS 15  / ASBJ Statement No.29 の下で、マイルベースの繰延収益型ロイヤルティプログラムとして扱われる。すなわち「重要な権利」フレームワークに基づく契約負債であり、dポイント、Pontaポイント、V Point、PayPay Points、Rakuten Points のような共通ポイントプログラムとは、構造的に三点で異なる。① **マイル建て通貨**であり、交換先の中心が小売購入価値ではなく航空座席在庫であること。② ラウンジアクセス、アップグレード優先順位、サービス階層を決める、搭乗収益マイル (FOP / PP) しきい値に基づく **ステータス階層ダイナミクス**。③ JAL は oneworld、ANA は Star Alliance という **アライアンス相互運用性**により、他航空会社でのマイル積算・交換が可能であること。両プログラムの積算側は、提携クレジットカード ([[card-issuers/jal-card|JAL Card]]、ANA Card シリーズ)、提携加盟店のスキャンキャンペーン、共通ポイントプログラムとの双方向交換を通じ、**非搭乗による獲得**へ大きく拡張している。マイル負債の会計処理は現金同等ポイントと大きく異なる。IFRS 15, の下では、航空会社は付与マイルについて、交換座席 / 特典の **独立販売価格**を用いて航空券収入の一部を配分し、マイルが交換された時点またはブレークエージとして認識された時点で収益化する。このため、航空会社の貸借対照表には大規模で持続的な契約負債残高が生じる。JAL と ANA を合わせると、通常は数千億円規模である。

## プログラム規模と ID レイヤー

| 項目 | JAL Mileage Bank (JMB) | ANA Mileage Club (AMC) |
|---|---|---|
| 運営者 | [[card-issuers/jal-card|日本航空 (JAL) ]] | ANA Holdings 全日本空輸 (ANA) |
| アライアンス | **oneworld** (創設メンバー) | **Star Alliance** (創設メンバー) |
| マイル有効期限 | 積算月から 36 か月 (従来の標準) | 積算月から 36 か月 |
| ステータス指標 | 搭乗収益マイルに基づく **FLY ON POINT (FOP)** | 搭乗収益マイルに基づく **PREMIUM POINT (PP)** |
| 会員基盤 (日本 + グローバル) | 数千万口座規模 (JMB + JGC 合算) | 数千万口座規模 (AMC + SFC 合算) |
| 生涯ステータス相当 | **JAL Global Club (JGC)** — 一度 FOP しきい値を満たし、JGC 対象 JAL Card を保有することで得る継続認識階層 | **Super Flyers Club (SFC)** — 同じモデルで、一度 PP しきい値を満たし、SFC 対象 ANA Card を保有することで得る継続認識 |
| 上位ステータス階層 | **JMB Diamond** (年間資格の最上位、FOP しきい値) | **AMC Diamond** (年間資格の最上位、PP しきい値) |
| 中核提携カード発行者 | [[card-issuers/jal-card|JAL Card]] (株式会社JALカード、JAL 100% 子会社) | ANA Card シリーズ — 提携カード会社 (JCB / VISA / Master / AmEx / Diners) が co-brand で発行 |
| マイレージプログラム運営者 | JAL 内部 (別運営会社なし) | ANA 内部 (別運営会社なし) |

**JGC / SFC の継続ステータス機構**は、日本の FFP に特有の特徴である。会員が単一年の暦年で FOP / PP しきい値を満たすと、JAL Global Club または Super Flyers Club クレジットカードに申し込める。「生涯チケット」に近いパターンであり、そのカードを保有し年会費を払い続ける限り、翌年以降の搭乗実績にかかわらず、Sapphire / Gold 相当のサービス階層を維持できる。このため、日本以外の FFP では同じ規模で見られにくい、構造的に大きな「元搭乗者」ステータス保有者層が生じる。

### 搭乗による積算

| 客室 / 運賃 | JMB 積算率 | AMC 積算率 |
|---|---|---|
| ファースト / J クラス / ビジネス (有償プレミアム運賃) | 飛行距離の 100-150% | 飛行距離の 100-150% |
| エコノミー (有償普通運賃) | 飛行距離の 70-100% | 飛行距離の 70-100% |
| 割引エコノミー | 飛行距離の 30-70% | 飛行距離の 30-70% |
| 特典航空券 | 0% | 0% |
| 提携航空会社便 (oneworld / Star Alliance) | 提携先・運賃予約クラスにより変動 | 提携先・運賃予約クラスにより変動 |

両プログラムは、運賃クラスごとの詳細な積算率表を公表している。構造は似ており、運賃バケットが高いほど積算率が高く、ステータス保有者にはボーナスが付く。

### 非搭乗による積算

現在のマイル発行量で実質的に大きいのは、主に提携クレジットカードと提携ポイント交換による非搭乗由来である。

| 非搭乗ソース | JMB | AMC |
|---|---|---|
| **提携カード** | [[card-issuers/jal-card|JAL Card]] (JCB / VISA / Master / AmEx / Diners、いずれも 5 国際ブランド) | ANA Card シリーズ (JCB / VISA / Master / AmEx / Diners、提携会社発行) |
| **カード利用積算** | カード階層により標準 0.5-1% mile/¥。「ショッピングマイル・プレミアム」任意 ¥3,300/年の追加で 1%に倍増 | 標準 0.5-1% mile/¥。「10マイルコース」の任意手数料体系で積算率を倍増 |
| **プレミアムカード階層** | JAL Card CLUB-A ゴールド, JAL Card プラチナ, JAL アメリカン・エキスプレス・カード CLUB-A ゴールド | ANA ワイドゴールドカード, ANA カード プレミアム, ANA アメリカン・エキスプレス・プレミアム・カード |
| **共通ポイント双方向交換** | **Pontaポイント ↔ JMB** (2 Pontaポイント → 1 mile、Pontaポイントからマイル方向の交換比率。[[loyalty/ponta-points-deep-dive|Ponta points deep dive]] 参照)、**dポイント ↔ JMB** (類似の双方向)、過去には他パートナーもあり | **Rakuten Points → AMC** (変動交換)、**Tポイント → AMC** (旧来)、**Pontaポイント → AMC** (標準的な直接ルートではない)、各種提携ポイント変換 |
| **モール型ショッピングポータル** | 「JAL ショッピングマイル・プログラム」+「JAL Mall」 | 「ANA Mall」+「ANAマイレージモール」 |
| **ホテル提携積算** | JAL ABC、JAL ホテル、提携グローバルホテルチェーン (oneworld + 非アライアンスのホテルパートナー) | ANA インターコンチネンタル、ANA Crowne Plaza、提携グローバルホテルチェーン |
| **その他** | レンタカー、レストラン、レジャー提携プログラム | レンタカー、レストラン、レジャー提携プログラム |

**最も深い構造差**は、**共通ポイント双方向交換**側にある。**JAL Mileage Bank は Pontaポイント** (Loyalty Marketing 運営、三菱系) との関係が特に強く、JAL が Pontaポイントのアライアンスメンバーであることによって補強されている。**ANA Mileage Club は Rakuten Points と、歴史的には Tポイント**との関係が強い。これは商業パートナー交渉の違いを反映する。[[retail/lawson-mitsubishi-corporation-tie-up-2024-deep|2024 Lawson + Mitsubishi take-private]] の下では、JAL ↔ Pontaポイント ↔ Lawson の横断エコシステムが、より一貫した三角形になる。

## マイル交換 — 座席在庫が中心

両プログラムの主な交換手段は、航空会社が管理する特典座席在庫に対する **特典航空券** である。

| 特典タイプ | JMB のパターン | AMC のパターン |
|---|---|---|
| **国内線往復特典** | 季節 / 路線により約 12,000-20,000 マイル | 季節 / 路線により約 12,000-21,000 マイル |
| **国際線エコノミー特典 (アジア)** | 季節 / 路線により約 30,000-50,000 マイル | 季節 / 路線により約 30,000-50,000 マイル |
| **国際線エコノミー特典 (太平洋横断)** | 約 50,000-80,000 マイル | 約 50,000-90,000 マイル |
| **国際線ビジネス特典 (太平洋横断)** | 約 80,000-150,000 マイル | 約 85,000-165,000 マイル |
| **アップグレード特典** | 利用可能。必要マイルは変動 | 利用可能。必要マイルは変動 |
| **提携航空会社特典 (アライアンス)** | oneworld パートナー (BA, AA, QF, CX, JL, IB など) | Star Alliance パートナー (UA, LH, SQ, AC, NH, OZ など) |
| **非航空交換** | 限定的 (電子マネー / 提携商品) | 限定的 (電子マネー / 提携商品) |
| **マイル → e-money 変換** | **JAL ペイ** (JAL Pay。マイルを JAL Pay 残高へ変換し、ePay 経由で払戻し) | **ANA Pay** (マイルを ANA Pay 残高へ変換) |

交換経済性の目安は、国際線プレミアムキャビン特典では **2-3¥ / マイル相当** が典型的な「スイートスポット」であり、閑散期の国内線エコノミーでは **約 1¥/マイル** である。これは共通ポイントの交換価値 (約 1¥/point) を大きく上回り、共通ポイントや現金へ換えるよりマイルを貯める経済的根拠になる。

**マイル → e-money 変換**ルート (JAL Pay、ANA Pay) は現金に近い出口を提供するが、通常はプレミアムキャビン特典交換より不利な交換比率である。経済的には主たる交換目標ではなく、「ソフトフロア」として機能する。

## ステータス階層ダイナミクス — FOP / PP と JGC / SFC

| ステータス階層 | JMB (FOP しきい値) | AMC (PP しきい値) | サービス階層相当 |
|---|---|---|---|
| 最上位 (Diamond / Premier) | JMB Diamond (約 100,000 FOP) | AMC Diamond (約 100,000 PP) | ファーストクラスラウンジ、全項目で最優先 |
| プレミアム (Sapphire) | JMB Sapphire (約 50,000 FOP) | AMC Platinum (約 50,000 PP) | ビジネスクラスラウンジ、oneworld Sapphire / Star Gold |
| Crystal / Bronze | JMB Crystal (約 30,000 FOP) | AMC Bronze (約 30,000 PP) | Ruby / Silver 相当 |
| カード経由の継続認識 | **JGC (JAL Global Club)** — カードに紐づく Sapphire 相当認識 | **SFC (Super Flyers Club)** — カードに紐づく Platinum 相当認識 | カード保有により継続 |

両プログラムは毎年リセットされる (暦年ベース) が、**JGC / SFC の継続ステータス機構**が日本固有の最重要特徴である。経済的には、**JGC / SFC カード保有者は、搭乗頻度が下がっても残り続ける継続ロイヤルティ会員の長い尾**を形成する。カード利用は安定したマイル発行フローを生み、航空会社はそれを契約負債として計上する必要がある。

## 繰延収益会計 — IFRS 15 契約負債

JAL と ANA はいずれも IFRS / J-GAAP と整合する基準で報告し、**未交換マイルを契約負債 (繰延収益)** として扱う。これは IFRS 15 の「重要な権利」フレームワークに基づく。

| 事象 | 会計処理 |
|---|---|
| **顧客がマイルを獲得する航空券を購入する** | 取引価格を、航空券サービス履行義務とマイル付与履行義務に、独立販売価格 (SSP) を用いて配分する。航空券サービス分は搭乗完了時に収益認識し、マイル分は契約負債として認識する |
| **顧客がマイルを獲得する航空券関連付帯サービスを購入する** (有償座席アップグレードなど) | 同じ処理。取引価格を SSP により分割する |
| **顧客が提携カード利用や提携加盟店積算でマイルを獲得する** | マイル発行者 (JAL / ANA) は、カード発行会社または提携先から購入マイル分の現金を受け取る。受領現金額を契約負債として認識する |
| **顧客が特典航空券にマイルを交換する** | 対応する契約負債を、交換日または搭乗日 (航空会社の認識方針による) に収益へ振り替える |
| **マイルが未交換のまま失効する** | ブレークエージ仮定に基づき契約負債を取り崩す。通常は過去の交換パターン統計モデルで推計し、IFRS 15 の下で実際の交換パターンに比例してブレークエージを認識する |

JAL と ANA の **契約負債残高**は、公開 IR 開示に基づけば **数千億円規模**である。正確な残高は年ごとに変動し、連結貸借対照表の「その他負債」/「契約負債」行に開示される。ブレークエージ仮定は毎年見直され、JAL の COVID 期およびポスト COVID 期の開示は、マイル有効期限延長や特別なブレークエージ仮定といったパンデミック期の認識方針が報告収益に大きく影響したことを示している。

**[[loyalty/d-point-detailed-ecosystem|dポイント]]** との対比では、NTT docomo の契約負債開示は dポイントと通信収益の繰延額を合わせている。一方、**JAL と ANA はマイル負債を識別しやすい契約負債行で開示している**。航空会社にとって、マイルが最大の非搭乗繰延収益義務であるためである。より広い枠組みは [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]] に整理されている。

## 提携ネットワークの深さ — アライアンスを超える範囲

**oneworld 対 Star Alliance** の配分が、航空会社横断の積算 / 交換面を決める。しかし両プログラムは、アライアンスの外側にも実質的に広い提携ネットワークを構築している。

| 提携カテゴリ | JMB の深さ | AMC の深さ |
|---|---|---|
| **アライアンス航空会社** | oneworld (BA, AA, QF, CX, IB, MH, S7, など) | Star Alliance (UA, LH, SQ, AC, OZ, EVA, TG など) |
| **コードシェアのみの提携航空会社 (非アライアンス)** | Emirates (コードシェア)、各種地域会社 | TUI など |
| **ホテル** | JAL ホテルチェーン + 提携チェーン (Hilton, IHG, Marriott のマイル変換など) | InterContinental Hotels Group, Hilton, Marriott |
| **レンタカー** | Hertz, Avis など | Hertz, Avis など |
| **共通ポイント双方向交換** | **Pontaポイント** (中核)、dポイント、その他 | **Rakuten Points** (中核)、Tポイント (旧来)、その他 |
| **提携カード** | [[card-issuers/jal-card|JAL Card]] (5 国際ブランド) | ANA Card シリーズ (提携発行会社経由の 5 国際ブランド) |
| **百貨店 / 電子マネー** | JR-East ViewCard (限定的)、各種小売 | au PAY (限定的)、各種小売 |
| **チャリティ寄付** | JMB チャリティプログラム | AMC チャリティプログラム |

## 競争上の位置づけ

| FFP | 中核航空会社 | アライアンス | 会員規模 | 中核共通ポイント提携先 | 提携カード |
|---|---|---|---|---|---|
| **JMB** | JAL | oneworld | 数千万 | Pontaポイント | [[card-issuers/jal-card|JAL Card]] |
| **AMC** | ANA | Star Alliance | 数千万 | Rakuten Points (中核)、旧 Tポイント | ANA Card |
| Skywards (Emirates) | Emirates | なし (独立) | グローバル | 日本ではなし | EK Emirates |
| MileagePlus (UA) | United | Star Alliance | グローバル | 日本ではなし | UA partner cards |
| AAdvantage (American) | AA | oneworld | グローバル | 日本ではなし | AA partner cards |
| BAEC (BA) | BA | oneworld | グローバル | 日本ではなし | BA partner cards |

JMB と AMC が日本国外の FFP に対して持つ構造的強みは、海外市場には同じ規模で存在しない **日本の共通ポイント双方向交換ネットワーク**である。Pontaポイントと Rakuten Points は、日本居住会員の非搭乗獲得フットプリントを大きく広げる。

## 関連項目

- [[loyalty/INDEX|loyalty index]]
- [[loyalty/japan-points-landscape|Japan points landscape]]
- [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]
- [[loyalty/ponta-points-deep-dive|Ponta points deep dive]]
- [[loyalty/d-point-detailed-ecosystem|d Point detailed ecosystem]]
- [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]]
- [[loyalty/d-point-au-kddi-docomo-telco-point-consolidation|d Point / au telco-point consolidation case]]
- [[loyalty/t-point-v-point-post-2024-merger|T Point + V Point post-2024 merger detail]]
- [[loyalty/jre-point-and-jre-bank-ecosystem|JRE Point + JRE Bank ecosystem]]
- [[loyalty/au-pay-loyalty-ecosystem-deep|au PAY loyalty ecosystem deep]]
- [[loyalty/sb-yahoo-paypay-points-unified-ecosystem|SB / Yahoo / PayPay unified points]]
- [[card-issuers/jal-card|JAL Card]]
- [[payment-firms/jal-payment-port|JAL Payment Port]]
- [[card-issuers/jr-east-financial|JR-East Financial Subsidiaries]]
- [[megabanks/au-fh|au Financial Holdings]]
- [[retail/lawson-mitsubishi-corporation-tie-up-2024-deep|Lawson + Mitsubishi 2024 deep tie-up]]
- [[payments/japan-code-payment-operator-2025-market-share-matrix|Japan code-payment operator 2025 market share matrix]]
- [[INDEX|FinWiki index]]

## 出典

- JAL Mileage Bank official site: https://www.jal.co.jp/jp/ja/jalmile/
- JAL Mileage Bank (English): https://www.jal.co.jp/jp/en/jmb/
- ANA Mileage Club official site: https://www.ana.co.jp/ja/jp/amc/
- ANA Mileage Club (English): https://www.ana.co.jp/en/us/amc/
- JAL Card official site: https://www.jal.co.jp/jp/ja/jalcard/
- ANA Card official site: https://www.ana.co.jp/ja/jp/amc/anacard/
- JAL Investor Relations: https://www.jal.com/ja/investor/
- ANA Investor Relations: https://www.ana.co.jp/group/investors/
- oneworld alliance official site: https://www.oneworld.com/
- Star Alliance official site: https://www.staralliance.com/
