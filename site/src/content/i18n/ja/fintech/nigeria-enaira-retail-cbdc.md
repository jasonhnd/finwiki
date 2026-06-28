---
source: fintech/nigeria-enaira-retail-cbdc
source_hash: 3f42a08ed208c712
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "ナイジェリア eNaira — 最低採用率のリテールCBDC、CBN流通、現金代替政策との衝突"
translated_at: 2026-06-26T08:32:07.534Z
---
﻿
# ナイジェリア eNaira — 最低採用率のリテールCBDC、CBN流通、現金代替政策との衝突

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の配下に位置し、**eNaira** を法域別に扱う事例研究である。eNaira は、Bahamian Sand Dollar に続き主要新興市場の中央銀行が発行した二例目の稼働中リテールCBDCであり、稼働中CBDCプログラムの中で世界的に最も研究されている**採用失敗**事例である。最も長く稼働するリテールCBDCで、小国ゆえの低採用という文脈を持つ [[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]]、類似の流通課題を抱えるカリブ / アフリカ大西洋圏の第三のリテールCBDCである [[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]]、中国、インド、EU、日本との比較上のナイジェリアの位置づけを示す [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]] とあわせて読む。アーキテクチャ上の文脈は [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]] および [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]、新興市場のドル化という広い背景は [[fintech/em-market-crypto-dollarization-pattern|EM crypto dollarization pattern]] を参照。

> [!info] 要約
> CBN は **2021-10-25に eNaira を開始**し、ナイジェリアはリテールCBDCを稼働させた**アフリカ初の国**であり、主要新興市場の中でも最初期の国の一つとなった。開始から四年以上が経過した現在、このプログラムは世界のCBDC文献における**典型的な採用失敗事例**である。独立したIMF分析は、初年度の**アクティブウォレット浸透率が成人人口の 0.5% 未満**であり、初回ダウンロード後のウォレットの大半が休眠状態になったと記録した。2022-2023  の**ナイラ刷新 / 現金引出上限**政策は、eNairaの普及を加速するのではなく、展開と衝突した。現金待ち行列から逃れたナイジェリア人は eNaira アプリではなく、**エージェント・バンキング、USSD、暗号資産 / USDT**へ移った。構造的教訓は広く引用されている。**リテールCBDCを発行するだけでは需要は生まれない**。**流通は発行に先行しなければならない**。そして、望まれていないCBDCの上に反現金政策を重ねると、公衆の信頼問題を解決するどころか悪化させ得る。

## プログラム・アーキテクチャ

```
                       CBN eNairaプログラム
                              │
       ┌──────────────────────┴──────────────────────┐
       ▼                                              ▼
   発行者（CBN — 中央銀行債務）        技術パートナー
                                                (Bitt Inc., Barbados;
                                                Hyperledger Fabric based)
                                                （Bitt Inc.、バルバドス本社。
                                                Hyperledger Fabric ベース）
   二層流通                       ウォレットアプリ
   (CBN → DMBs (預金取扱銀行)            - eNaira Speed Wallet
    + MMOs → 段階別消費者ウォレット)           - Speed Merchant
                                                - USSD *997#
       │
       ▼
   段階別KYC構造
   (Tier 0 — 電話番号のみ; Tier 1 — 軽量BVN;
    Tier 2 — 完全BVN; Tier 3 — 銀行口座連携)
```

## マトリクス A · 法令、規制当局、フェーズ状況

| 項目 | 詳細 |
|---|---|
| 主導当局 | **Central Bank of Nigeria (CBN)** |
| 法的根拠 | CBN Act 2007 （s.2,、s.17-18  の通貨発行権限）。eNaira はCBDC専用立法ではなく既存の法定通貨権限に基づき発行された。 |
| 開始前設計 | "eNaira Design Paper"（CBN、2021）。二層仲介型、段階別KYC、口座ベース台帳。 |
| 稼働開始 | **2021-10-25**（Buhari 大統領が Aso Rock で発表） |
| 技術パートナー | **Bitt Inc.**（バルバドス本社のDLTベンダー。Sand Dollar / JAM-DEX と同じベンダー・パターン） |
| 基盤技術 | 許可型 **Hyperledger Fabric** の派生構成 |
| 更新 | 2022-2023 にかけてアプリの再公開 / アップグレードを実施。フィーチャーフォン利用者向けに USSD *997# チャネルを 2022-08  に開始。 |
| ホールセールCBDC | なし。eNaira はリテール / ミッドマーケット向けのみ。 |
| クロスボーダーCBDC | 2026-05時点でなし。[[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] または [[fintech/bis-project-agora-overview|BIS Project Agorá]] への参加もない。 |

CBNはCBDC専用立法を求めるのではなく、既存の通貨発行権限の下で進めた。これは新たなEU共同決定規則を要するEUデジタルユーロとの構造的相違の一つであり、開始までの速さを部分的に説明する。

## マトリクス B · 設計選択 — 段階的KYC、無料配布、低摩擦だが低い効用

| 設計選択 | 詳細 | 含意 |
|---|---|---|
| **二層仲介型** | CBN → Deposit Money Banks（DMBs）+ Mobile Money 事業者（MMOs）→ 消費者ウォレット | [[fintech/cbdc-multi-tier-architecture-three-paradigms|three paradigms]] の二層モデルと同じ仲介型。 |
| **段階別KYC** | Tier 0 （電話番号のみ、低上限）→ Tier 1 （軽量BVN）→ Tier 2 （完全BVN）→ Tier 3 （銀行口座連携） | 銀行口座を持たない層の取り込みを意図したが、実際には高階層登録が中心となった。 |
| **口座ベース台帳** | 無記名トークンではなく、残高は識別済み口座に紐づく。 | AML / CFT とは整合するが、現金代替という説明を弱める。 |
| **無利息** | eNaira 残高に利回りは付かない。 | EUデジタルユーロと同じく、預金仲介を奪わないための設計。[[fintech/e-euro-retail-rollout|digital euro retail rollout]]を参照。 |
| **取引手数料なし** | CBN が取引コストを負担する。 | 銀行アプリやUSSD手数料と競争するための設計。 |
| **Speed ウォレット（消費者）+ Speed 加盟店（加盟店）** | 二つのアプリを使う構成。 | 加盟店側に追加のオンボーディング手順が生じる。 |
| **USSD *997# フォールバック** | フィーチャーフォン利用者向けに 2022-08  に追加。 | スマートフォン普及率の上限を認めた設計で、NIBSS のUSSDバンキング・パターンを映す。 |
| **階層別保有限度** | Tier 0  = 1日 ₦120,000  / 最大 ₦300,000、Tier 1  = ₦200,000  / ₦500,000、Tier 2 / 3  はより高い上限。 | e-CNYの運営機関別階層モデルに近い階層制限。 |

設計思想は、段階別KYC、手数料なし、無料流通、フィーチャーフォン対応という点で**最大限オンボーディングしやすい**ものだった。それでも採用は停滞した。実証上の教訓は、**技術的摩擦を取り除くだけでは需要側の問題は解決しない**という点である。

## マトリクス C · 採用指標（直近の公開値）

| 指標 | 直近の公開値 |
|---|---|
| ダウンロード済みウォレット（累計） | 約 700K-900K（Y1,  の複数CBN声明）。2023-2024  までの数百万規模という推計は、加盟店分やアプリ再ダウンロードを混同している。 |
| **アクティブウォレット** | IMFワーキングペーパー（2023）。ある月に取引したウォレットは累計ダウンロードの 1.5% 未満。 |
| **成人人口比の浸透率** | **成人人口の 0.5% 未満**（IMFのY1推計）。その後の独立報道でも大きな段差的改善は示されていない。 |
| 累計取引額（Y1） | 独立推計で約 ₦8B。現金流通残高の 1% を大きく下回る。 |
| 都市 / 対象範囲 | 全国（オンライン）だが、実態は Lagos / Abuja に集中。 |
| 加盟店受入れ | 限定的。e-CNY や Pix に匹敵する大手小売展開はない。 |
| クロスボーダーCBDC | なし。 |

IMFワーキングペーパー "Nigeria's eNaira, One Year After"（Ree、2023）は、最も引用される公開診断であり、**「稼働中CBDCの中で最低の採用率」**という位置づけの出典である。同ペーパーは累計ウォレット・ダウンロード（膨らませやすい指標）と月間アクティブ利用者（採用を判断する制約指標）を区別し、後者で見てもeNairaの浸透率は、すでに低水準であるBahamian Sand Dollarを実質的に下回ると結論づけている。

## マトリクス D · 2022-2023  ナイラ刷新との衝突

eNairaの物語で最も重要な出来事はローンチそのものではなく、**CBNの 2022  ナイラ刷新 + 現金引出上限政策**である。この政策はeNairaの展開と衝突し、採用を助けるどころか損なった。

**時系列:**

```
2022-10     CBN が ₦200, 、₦500, 、₦1,000  紙幣の刷新を発表
2022-12     現金引出上限を発表（個人 1日 ₦20K、週 ₦100K）
2023-01     旧紙幣の期限を設定。ATMと銀行支店に行列が発生
2023-02     現金不足が深刻化。全国的な抗議が起き、最高裁が介入
2023-03     最高裁が旧紙幣の期限を 2023-12-31 まで延長
2023-05     現金が徐々に戻り、キャッシュレス政策という説明は弱まる
2023-2024   新体制下のCBNで、eNairaのマーケティングは大幅に後退
```

**現金逼迫の間に一般利用者が取った行動:**

1. **エージェント・バンキング**（Opay、PalmPay、Moniepoint、Kuda）— 爆発的に成長した。Opayの利用者基盤、取引量、加盟店端末数はいずれも桁違いに増加した。
2. **USSDバンキング** — 既存DMBレール（NIBSS）を通じて利用された。
3. **暗号資産 / USDT** — ナイジェリアはもともと世界でも暗号資産採用率が高い国の一つであり、現金逼迫がそれをさらに深めた。Binance の NGN P2P 取引量は急増した。
4. **eNaira** — CBNがナイラ刷新を「キャッシュレス経済」を支える政策として積極的に説明したにもかかわらず、移動した現金需要のうちeNairaへ流れたのはごく一部だった。

構造的失敗は、**反現金政策とeNairaローンチをCBNは同一プロジェクトとして扱ったが、一般利用者は相互に敵対する別個の介入として受け止めた**点にある。公衆は強制的な脱現金化を没収的なものと読み、eNairaを監視と結びついた代替手段と読んだ。両者はまとめて拒否された。代わりにエージェント・バンキングと暗号資産が移動した需要を吸収した。

## マトリクス E · 流通モデルと銀行口座を持たない層

| レイヤー | 流通上の役割 | 強み | 弱み |
|---|---|---|---|
| **CBN** | 発行者およびスキーム運営者 | 直接の法的権限 | 一般利用者との小売関係を持たない |
| **DMBs** | 銀行顧客向けウォレット・オンボーディング | 既存顧客基盤 | eNairaを手数料収入のカニバリゼーションと見なし、推進姿勢は弱い |
| **MMOs** | 銀行口座を持たない層向けウォレット・オンボーディング | 銀行口座を持たない層への到達力 | eNairaが自社e-moneyと競合するためインセンティブがずれる |
| **エージェント・バンキング網** | 現金入出金 | 最大の物理的到達力 | エージェントは手数料ゼロのeNairaより、エージェント・バンキング取引で手数料を得ることを好む |
| **加盟店** | 受入れ | リテール循環に不可欠 | 大手小売のコミットメントがなく、非公式加盟店は現金またはPOSを好む |

**流通インセンティブ問題は過小診断されている失敗モードである。** 流通スタック内のすべての主体（DMB、MMO、エージェント、加盟店）は、eNairaよりも**自社商品**を推す商業的インセンティブが強い。CBNは、中国でPBoCが国有銀行への指示で解いたようにも、インドがUPIの便乗流通で解いたようにも、インセンティブ整合問題を解決しなかった。その結果、eNairaは構造的に推進意欲のない流通スタックの上に置かれた。

## マトリクス F · 他のリテールCBDCとの比較

| 項目 | Nigeria eNaira | [[fintech/bahamas-sand-dollar-cbdc\|Bahamas Sand Dollar]] | [[fintech/jamaica-jam-dex-cbdc\|Jamaica JAM-DEX]] | China e-CNY |
|---|---|---|---|---|
| 稼働開始 | 2021-10-25 | 2020-10-20 | 2022-07 （全面展開） | 2020-04 （パイロット） |
| 発行者 | CBN | Central Bank of The Bahamas | Bank of Jamaica | PBoC |
| 流通モデル | DMBs + MMOs（二層型） | Authorized Financial Institutions（AFIs） | Authorized ウォレット providers（Lynk ほか） | 10  の指定運営機関（六つの国有銀行 + 四つの決済大手） |
| アクティブウォレット vs 人口 | <0.5% | <0.5%（小人口の基準） | 約 5%（Lynkウォレットを含む広い指標） | 登録 180M+ に対し日次アクティブは一桁百万規模 |
| クロスボーダーCBDC | なし | なし | なし | mBridge 稼働中 |
| 基盤技術 | Hyperledger Fabric（Bitt） | DLT（Bitt） | DLT（eCurrency Mint） | PBoC独自アーキテクチャ |
| 現金代替政策との衝突 | **あり — 2022-2023 のナイラ刷新** | なし | なし | なし（AliPay / WeChat Pay による大規模キャッシュレス採用が先行） |
| 採用の位置づけ | 「失敗事例」 | 「遅い展開、小人口」 | 「有望だが小規模」 | 「国家主導の大規模展開」 |

eNaira と Sand Dollar は最も長く稼働する二つのリテールCBDCであり、どちらも人口比の採用率は 1% を大きく下回る。中国との対比は構造的である。制約変数は技術やローンチ速度ではなく、**流通チャネルの所有権**である。

## 起源と進化

```
2017-2019     CBN がCBDC政策研究を進め、Bahamas Sand Dollar の進捗を観察
2021-08       CBN と Bitt Inc. が契約を締結し、技術統合を開始
2021-09       当初は独立記念日（1 October）の開始を予定したが延期
2021-10-25   Buhari 大統領が Aso Rock で eNaira 稼働開始を発表。アフリカ初のリテールCBDC
2022-02       ウォレット・ダウンロードが 700K を超え、CBNが前向きな中間指標を公表
2022-08       フィーチャーフォン利用者向けに USSD *997# チャネルを開始
2022-10       CBN がナイラ刷新（₦200 / ₦500 / ₦1,000）を発表
2022-12       現金引出上限政策を発表
2023-01       現金不足により全国的な行列、抗議、最高裁案件が発生
2023-02-23   IMFワーキングペーパー "Nigeria's eNaira, One Year After" が低採用を正式に診断
2023-03       最高裁が旧紙幣の期限を延長し、現金は徐々に戻る
2023-05       政権が移行し、新CBN総裁 Yemi Cardoso が承認される
2023-2024     eNairaのマーケティングは大きく後退し、CBNの重点はFX改革へ移る
2024-2025     eNairaの大きなプログラム更新はなく、稼働中だが優先度は低下
2025-2026     稼働は継続するが、大きな再浮上はなく、採用は横ばいから小幅増にとどまる
```

**パターン**: 研究からリテール稼働まで五年未満とローンチは速かったが、ローンチ後の軌道は、2022-2023  の現金政策との衝突で悪化した流通インセンティブ不全により止まった。

## 民間レール代替との比較

eNaira はナイジェリア人向けのデジタルマネー・レールを目指したが、同じ時期に実際に成長したデジタルマネー・レールは次のものだった。

- **エージェント・バンキング網** — Opay、PalmPay、Moniepoint、Kuda、Carbon、FairMoney。合計アクティブ利用者数と加盟店端末数は、eNairaを桁違いに上回る。
- **NIBSS Instant Payment（NIP）** — 銀行間即時送金。正式な銀行間フローの主力であり続けている。
- **USSDバンキング** — DMBsを通じた高取引量の既存レール。特に銀行口座を持たない層 / 十分な銀行サービスを受けていない層で重要。
- **暗号資産 P2P（USDT、USDC）** — ナイジェリアは Chainalysis の世界暗号資産採用指数で上位層に位置する。Binance の NGN P2P、CBN制限後の代替 P2P 場所へと移った。[[fintech/em-market-crypto-dollarization-pattern|EM crypto dollarization pattern]] と [[fintech/gray-market-dollar-network-formalization|gray-market dollar formalization]] を参照。
- **MMOウォレット** — MTN MoMo、Airtel Money、9mobile。

ナイジェリアでは実際にキャッシュレス移行が進んでいる。ただし eNaira 経由ではない。この点が中心的な構造事実であり、eNairaがCBDC採用失敗の事例研究として扱われる実証上の理由である。

## 関連項目

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]]
- [[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]
- [[fintech/e-euro-retail-rollout|digital euro retail rollout]]
- [[fintech/em-market-crypto-dollarization-pattern|EM crypto dollarization pattern]]
- [[fintech/gray-market-dollar-network-formalization|gray-market dollar formalization]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC bridge]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]

## 出典

- Central Bank of Nigeria — 制度サイトおよび公表資料: https://www.cbn.gov.ng/
- CBN — "eNaira Design Paper"（2021）: https://www.cbn.gov.ng/Out/2021/CCD/eNaira%20Design%20Paper.pdf
- eNaira 公式サイト: https://enaira.gov.ng/
- IMF Working Paper — "Nigeria's eNaira, One Year After"（Jongsoon Ree、2023）: https://www.imf.org/en/Publications/WP/Issues/2023/05/12/Nigerias-eNaira-One-Year-After-533487
- BIS Innovation Hub CBDC トピックページ: https://www.bis.org/about/bisih/topics/cbdc.htm
- BIS ワーキングペーパー No. 1116  — "The next-generation monetary system — a blueprint"（2024）
- ナイラ刷新および現金引出上限政策に関するCBN公開プレスリリース（2022-10  から 2023-03）
- Chainalysis Global Crypto Adoption Index 公開報告（複数年、ナイジェリアは上位層）
