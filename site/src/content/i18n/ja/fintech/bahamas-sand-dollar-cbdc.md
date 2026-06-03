---
source: fintech/bahamas-sand-dollar-cbdc
source_hash: 62f2424b1184bd25
lang: ja
status: machine
fidelity: ok
title: "バハマ Sand Dollar — 最長稼働のライブ retail CBDC、AFI 分配、小国経済の教訓"
translated_at: 2026-06-02T13:21:55.045Z
---
# バハマ Sand Dollar — 最長稼働のライブ retail CBDC、AFI 分配、小国経済の教訓

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の下に位置づけられる、**Sand Dollar** に関する司法管轄区別ケーススタディである。Sand Dollar は世界の中央銀行が発行した**初の全国規模ライブ retail CBDC**（バハマ、2020-10-20）である。クロス管轄区での位置づけとして [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]]（ライブ 2021-10, 、同じ Bitt ベンダー技術系譜）、[[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]]（ライブ 2022, 、第三のカリブ・大西洋ピア）、[[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]] とあわせて読む。アーキテクチャ文脈は [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]、[[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]、[[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]、より広い新興市場の行動基準線は [[fintech/em-market-crypto-dollarization-pattern|EM crypto dollarization pattern]] を参照。

> [!info] 要約
> The Central Bank of The Bahamas は **2020-10-20 に Sand Dollar をローンチ**し、世界初の**全国規模ライブ・リテールCBDC**となった。他のライブ・リテールCBDCより6か月早く、eNaira より1年、JAM-DEX よりほぼ2年先行した。設計は、消費者向けウォレットを **Authorized Financial Institutions（AFIs）** が提供する**二層仲介型リテールCBDC**で、**段階別KYC**（Tier 1  は電話番号のみで B$500/B$1,500 まで、Tier 2  はID確認済みで B$8,000/B$10,000 まで）と、中央銀行の直接負債としての**法定通貨性**を備える。採用は**絶対値では低い**（実利用は人口比一桁％）が、このプログラムはすでに**5年以上**ライブ稼働しており、他のどのライブ・リテールCBDCより長い。小国経済のCBDC設計における基礎的な政策実験ケースである。世界的に引用される主な設計教訓は、**金融包摂ターゲティング**（約700島の地理と銀行アクセスの空白）、**ローンチ時からの法定通貨等価性**、**相互運用可能なAFIウォレットモデル**、そして商業銀行の預金調達を守るため**利息を払わない**という意図的選択である。

## Programme architecture

```
                  The Bahamas 中央銀行
                              │
                              ▼
                  Sand Dollar (B$ リテールCBDC)
                              │
       ┌──────────────────────┴──────────────────────┐
       ▼                                              ▼
   発行体 (CBOB; 中央銀行負債)             技術パートナー
                                                (Bitt Inc.; バルバドス;
                                                許可型DLT)
       │                                              │
       ▼                                              ▼
   二層仲介型の分配                          AFIウォレットアプリ
   (CBOB → Authorized Financial Institutions   (AFI間で相互運用可能;
    (AFIs) → 消費者 / 加盟店ウォレット)       消費者が提供者を選ぶ)
       │
       ▼
   段階別KYC構造
   - Tier 1 （電話 + 低摩擦）: B$500 ウォレット / B$1,500 月間取引
   - Tier 2 （政府ID確認済み）: B$8,000 ウォレット / B$10,000 月間取引
   - 事業者ウォレット: 別建ての上限構造
```

## マトリクスA · 法令、規制当局、フェーズ状況

| 項目 | 詳細 |
|---|---|
| 主務当局 | **Central Bank of The Bahamas (CBOB)** |
| 法的根拠 | Central Bank of The Bahamas Act 2020 （デジタル通貨発行を明示的に可能にする改正規定）および同法に基づく Sand Dollar Regulations |
| パイロット段階 | **Exuma パイロット**は 2019-12 にローンチ、**Abaco** は 2020 年半ばに追加 |
| **ライブローンチ（全国規模）** | **2020-10-20** — 世界初の全国規模ライブ・リテールCBDC |
| 技術パートナー | **Bitt Inc.**（バルバドス本社、Nigeria eNaira と同じベンダー） |
| 基盤技術 | 許可型DLT（Bitt platform） |
| ホールセールCBDC | なし — Sand Dollar はリテール / ミッドマーケット専用 |
| クロスボーダーCBDC | 2026-05時点ではなし。[[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] または [[fintech/bis-project-agora-overview|BIS Project Agorá]] への参加もない |
| 法定通貨性 | あり — Sand Dollar は CBOB の直接負債であり、Bahamian dollar（B$）建てで 1:1 、そのB$自体が USD に 1:1  でペッグされる |

ローンチ時から法定通貨とした姿勢は、法定通貨性が規則案で想定されるもののまだ施行されていないEUデジタルユーロ計画や、同じく法定通貨として導入されたが2年遅れだった JAM-DEX と Sand Dollar を区別する。

## マトリクスB · 金融包摂優先・低摩擦オンボーディングの設計選択

| 設計選択 | 詳細 | 理由 |
|---|---|---|
| **AFI経由の二層仲介** | CBOB が発行し、消費者は Authorized Financial Institutions（商業銀行 + MMO + 決済サービスプロバイダー）を通じて取引する | 商業銀行の役割を維持し、オンボーディング負荷を分散する |
| **相互運用可能なウォレット** | 消費者の Sand Dollar はどのAFIウォレットでも利用できる | 囲い込み効果を避け、残高を失わずAFIを切り替えられる |
| **段階別KYC** | Tier 1  は電話番号のみ（B$500 ウォレット / B$1,500 月間取引）、Tier 2  はID確認済み（B$8,000 ウォレット / B$10,000 月間取引）、事業者ウォレットは別枠 | 離島の unbanked 層向けに設計 |
| **無利息** | Sand Dollar 残高に利回りはない | EUデジタルユーロと同じ反ディスインターメディエーション論理（[[fintech/e-euro-retail-rollout|digital euro retail rollout]]参照） |
| **取引手数料なし** | CBOB は取引ごとの手数料を課さない。AFI はサービス階層ごとに課金し得る | 包摂に配慮した価格設計 |
| **アカウント型台帳** | 残高は AFI オンボーディングを通じて識別済みウォレットに紐づく | AML/CFT と互換性があり、無記名 bearer token ではない |
| **オフライン対応設計** | 離島の接続ギャップ向けに限定的なオフライン取引能力を備える | 約700島の地理に合う |
| **B$ 1:1 USD ペッグの継承** | Sand Dollar は B$ であり、バハマの固定為替レート制度を通じて USD に 1:1  でペッグされる | ペッグを継承するだけで、独立通貨ではない |
| **中央銀行の直接負債** | Sand Dollar は CBOB 負債であり、商業銀行預金ではない | Japan DCJPY（トークン化預金であってCBDCではない）と異なる — [[fintech/jp-stablecoin-dcjpy|DCJPY]]参照 |

この設計は初期CBDCとしては異例に規律立っている。後続の主流CBDC文献（BIS、IMF、ECB）の多くは、Sand Dollar が本番環境で先行実装した原則を事後的に体系化したものといえる。

## マトリクスC · 採用指標（直近公開値）

| 指標 | 直近公開値 |
|---|---|
| ライブ状況 | **2020-10-20からライブ**（5年以上、最長稼働のライブ・リテールCBDC） |
| 登録ウォレット | 個人 + 加盟店ウォレットで約30-50K（CBOB が四半期推移を引用。小国経済として絶対規模は小さい） |
| **アクティブウォレット** | 当月に取引する総ウォレットの割合は一桁％ |
| **人口比普及率** | 成人バハマ人口比で一桁％（成人総数は約300K、絶対母数は小さい） |
| 累計取引額 | 絶対額では控えめで、広義マネー相当の 1% 未満 |
| カバレッジ | 全国規模（約700島の群島）。Family Islands の包摂に重点 |
| 加盟店受容 | 観光隣接領域と食品小売で拡大中だが、全国展開は飽和未満 |
| クロスボーダーCBDC | なし |

IMF Working Paper "The Bahamas's Sand Dollar: CBDC and Lessons Learned"（Kosse、Mattei ほか、2022）は、最も引用される公開診断である。同論文は Sand Dollar を、**ローンチ順序と運用安定性では政策上の成功**だが、アクティブウォレット普及率で見ると**採用が遅いケース**として位置づける。バハマの小国経済の基準線（総人口約400K、約700 島に分散）では、高い普及率でも絶対採用数は必然的に小さい。政策上重要なのは絶対人数ではなく**普及率**である。

## マトリクスD · AFI分配モデル — 典型的な二層リテールCBDC

```
   The Bahamas 中央銀行（Sand Dollar 発行体）
                  │
   ┌──────────────┼──────────────────────────────────┐
   ▼              ▼                                   ▼
  銀行AFI     送金業AFI                         決済サービスAFI
  (CIBC, FCIB, (KANOO, MoneyMaxx, etc.)       (Island Pay, etc.)
   RBC, etc.)
   │              │                                   │
   ▼              ▼                                   ▼
  消費者 + 加盟店ウォレットアプリ（全AFI間で相互運用可能）
   │
   ▼
  エンドユーザー — 群島上の消費者と加盟店
```

**AFI（Authorized Financial Institution）** は、この制度を特徴づける制度的構成要素である。AFI は CBOB が認可した主体、すなわち商業銀行、送金業者、決済サービスプロバイダーであり、エンドユーザー向け Sand Dollar ウォレットの発行・保有・取引を担える。重要なのは、**ウォレットがAFI間で相互運用可能**な点である。Island Pay 経由で保有する消費者の Sand Dollar 残高は、別のAFIウォレットを使う相手から受け取ることができ、消費者は残高を失わずにAFIを切り替えられる。

相互運用性要件は、一部の類似プログラムで生じた囲い込み型の構造を避ける（例えば e-CNY の運営機関レベルの相互運用はより複雑である）。これは、監督対象PSPがウォレットを提供しつつ、基礎残高はECB発行でポータブルとする EU デジタルユーロ設計と構造的に近い。

| AFI区分 | 機能 | 例 |
|---|---|---|
| **銀行AFI** | 銀行顧客向けウォレット発行 | バハマ商業銀行（CIBC、FCIB、RBC、BoB など） |
| **送金業AFI** | unbanked / underbanked 層向けウォレット発行 | KANOO、MoneyMaxx |
| **決済サービスAFI** | fintech アプリ経由のウォレット発行 | Island Pay |

AFIモデルは現在、**小国経済CBDCの標準的な分配パターン**として広く引用されている。CBOB が消費者向けアプリを直接運営する必要をなくし、規制対象仲介機関の役割を維持し、unbanked の離島住民に届くMMOおよび決済サービスAFIを通じた金融包摂ターゲティングを支える。

## マトリクスE · 段階別KYC — 包摂とAMLのバランス

| 階層 | KYC要件 | ウォレット上限 | 月間取引上限 | 対象ユーザー |
|---|---|---|---|---|
| **Tier 1 （個人）** | 電話番号 + 低摩擦オンボーディング | B$500 | B$1,500 | unbanked / underbanked 層、離島、観光客 |
| **Tier 2 （個人）** | 政府発行ID確認（NIB番号 / パスポート） | B$8,000 | B$10,000 | 一般消費者 |
| **事業者ウォレット** | KYB（Know Your Business）確認 | より高い上限、事業種別で段階化 | より高い上限 | 加盟店、小規模事業者 |

この段階別設計は、e-CNY の運営機関別階層モデルや eNaira の tier-0/1/2/3  モデルと構造的に似ている。Sand Dollar の tier-1  上限は eNaira の tier-0  上限（B$500  対 ₦300K）より実質的に低く、財政基盤の違いを反映する。ただし、unbanked 層向けの低摩擦階層と確認済み利用者向けの高階層という設計思想は共通している。

IMF ワーキングペーパーは、**Sand Dollar 利用者の大半が tier-2**（ID確認済み）であり、tier-1  ではないと指摘する。これは、包摂ターゲティング設計が unbanked 層へ大規模に届く点では完全には成功しなかったことを意味する。同じ観察は eNaira（tier-2  が優勢）と JAM-DEX にも当てはまる。

## マトリクスF · 類似する小国経済 / 新興市場CBDCとの比較

| 項目 | Bahamas Sand Dollar | [[fintech/nigeria-enaira-retail-cbdc\|Nigeria eNaira]] | [[fintech/jamaica-jam-dex-cbdc\|Jamaica JAM-DEX]] | Eastern Caribbean DCash |
|---|---|---|---|---|
| ライブ開始 | 2020-10-20（世界初） | 2021-10-25 | 2022-07 （正式ローンチ） | 2021-03 （パイロット）、2024 に廃止 |
| 発行体 | CBOB | CBN | Bank of Jamaica | Eastern Caribbean Central Bank |
| 分配 | AFI（相互運用可能） | DMB + MMO | 認可ウォレットプロバイダー | 銀行経由のパイロット |
| 技術パートナー | Bitt Inc. | Bitt Inc. | eCurrency Mint | Bitt Inc. |
| Tier-1  KYC上限 | B$500 / B$1,500 月 | ₦120K日次 / ₦300K最大 | J$100K / J$50K（階層により異なる） | 該当なし（廃止） |
| アクティブ普及率 | 人口比一桁％ | 成人人口の <0.5% | 人口比数％（Lynk主導） | 該当なし（廃止） |
| 状況（2026-05） | ライブ（5年以上） | ライブだが優先度低下 | ライブ | 2024 に廃止 |

Sand Dollar と JAM-DEX は現在、**安定してライブ稼働する2つの小国経済リテールCBDC**である。eNaira はライブだが優先度が下がり、DCash は廃止された。カリブ / アフリカ大西洋圏の小国経済CBDCに共通するパターンは明確で、**ローンチは可能だが、持続的採用が構造的課題**である。

## 起源と展開

```
2018-2019    CBOB がリテールCBDCの内部検討を実施。Bitt Inc. を技術パートナーに選定
2019-12      Exuma パイロットを開始（初の Family-Island パイロット）
2020-06      Abaco をパイロットに追加
2020-10-20   全国規模で Sand Dollar をローンチ — 世界初の全国規模リテールCBDC
2021         AFI名簿を拡大、加盟店受容パイロットを実施
2021-03      Eastern Caribbean DCash をローンチ（類似参照プログラム）
2021-10      Nigeria eNaira がライブ化（Sand Dollar 後の第2の大型EMリテールCBDC）
2022-06      IMF Working Paper "The Bahamas's Sand Dollar: CBDC and Lessons Learned"
2022-07      Jamaica JAM-DEX がライブ化
2023-2024    Sand Dollar は運用継続、ウォレット数と取引成長は控えめ
2024         Eastern Caribbean DCash は長期停止と限定的採用を経て廃止
2024-2025    Sand Dollar が4年連続稼働を超え、最長稼働のライブ・リテールCBDCとなる
2025-2026    ライブ継続。AFI / 加盟店展開は継続中で、大きな設計変更はなし
```

**パターン**: Sand Dollar の長期稼働は最も頻繁に引用されるデータポイントである。BIS / IMF / 学術研究の一巡をまたいで継続運用されている唯一のケースであり、その後のほぼすべてのCBDC設計が、二層仲介、段階別KYC、相互運用可能なウォレット、無利息、AFI型分配といった同モデルの要素を借用している。

## バハマにおける民間決済レール代替との比較

バハマにはすでに**機能する民間デジタル決済環境**があり、これが Sand Dollar の採用が爆発的ではなく漸進的である理由の一つである。

- **商業銀行のオンラインバンキングとカード**（CIBC、FCIB、RBC、BoB など）。
- **Island Pay**（Sand Dollar スタック内の決済サービスAFIであると同時に、単独のウォレット運営者でもある）。
- **MoneyMaxx、KANOO** — 送金業サービス。
- **観光経済におけるUSD受容** — USDペッグを背景に、観光セクターでは USD が B$ と並んで物理的に流通する。

バハマのリテールCBDCは、Nassau / Paradise Island / Freeport など主要島嶼クラスターにいる**すでに銀行化された多数派人口**と向き合う。そこでは既存決済レールから切り替える限界便益が小さい。構造的な包摂ターゲットは**外縁の Family Islands** と **unbanked / underbanked 層**であり、制約になるのはウォレット設計ではなく、スマートフォン普及、接続性、代理店ネットワーク密度といったインフラである。

これにより、Sand Dollar の設計がオフライン能力、低摩擦の tier-1  オンボーディング、AFI相互運用性に最適化された理由が説明できる。設計は構造的に正しい。制約はデジタルマネー設計ではなく、**物理的な包摂インフラ**である。

## 関連項目

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]]
- [[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]
- [[fintech/e-euro-retail-rollout|digital euro retail rollout]]
- [[fintech/em-market-crypto-dollarization-pattern|EM crypto dollarization pattern]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC bridge]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/jp-stablecoin-dcjpy|DCJPY / ディーカレット DCP]]

## 出典

- Central Bank of The Bahamas — 機関トップページ: https://www.centralbankbahamas.com/
- CBOB — Sand Dollar FAQ とプロジェクトページ: https://www.centralbankbahamas.com/payments-system/the-sand-dollar/sand-dollar-faqs
- Sand Dollar official site: https://www.sanddollar.bs/
- IMF Working Paper — "The Bahamas's Sand Dollar: CBDC and Lessons Learned" (Kosse, Mattei, Glowka, 2022): https://www.imf.org/en/Publications/WP/Issues/2022/06/10/The-Bahamas-Sand-Dollar-CBDC-and-Lessons-Learned-518864
- BIS Innovation Hub CBDC topic landing: https://www.bis.org/about/bisih/topics/cbdc.htm
- BIS Working Paper No. 1116 — "The next-generation monetary system — a blueprint" (2024)
- Central Bank of The Bahamas Act 2020 — 公開法令本文
- CBOB Sand Dollar Regulations — public publication under the Act
