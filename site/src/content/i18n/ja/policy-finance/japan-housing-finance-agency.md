---
source: policy-finance/japan-housing-finance-agency
source_hash: 19876f923f884943
lang: ja
status: machine
fidelity: ok
title: "住宅金融支援機構 (JHF)"
translated_at: 2026-06-19T06:09:18.170Z
---

# 住宅金融支援機構 (JHF)

## Wiki ルート

このエントリは [[policy-finance/INDEX|policy-finance index]] の配下にあり、日本の住宅金融政策機関である。より広い公的信用の境界については [[policy-finance/japan-policy-finance-system|Japan policy finance system]] と照らし合わせて読み、証券化のプラミングについては [[structured-finance/jhf-mbs-mechanics|JHF MBS mechanics]] とペアにすること。JHF は [[financial-regulators/jfc|JFC]]（中小企業 / 農林水産 / 小規模事業）および [[financial-regulators/jbic|JBIC]]（国際金融）とは構造的に区別される — それは政策金融マップの住宅金融レーンである。

## TL;DR

住宅金融支援機構（住宅金融支援機構、JHF）は、日本の住宅金融政策機関である。直接融資を行う住宅金融公庫（住宅金融公庫、GHLC）を閉鎖した 2007  の民営化改革の再編の後、JHF は独立行政法人として、民間の住宅金融を間接的に支援するために創設された。それは（1）証券化支援 — 民間の貸し手から長期固定金利のフラット 35  住宅ローンを買い取り、MBS を資本市場へ発行する、（2）住宅ローン保険 — 民間の貸し手の住宅ローンを裏付ける、（3）災害復興、高齢者住宅、都市再生、耐震改修などの政策ギャップ分野における残余の直接融資、を通じて行う。このページを [[policy-finance/japan-policy-finance-system]] における住宅信用のレーンとして使用すること；MBS のプラミングは [[structured-finance/jhf-mbs-mechanics]] と [[structured-finance/jhf-mbs-vs-private-rmbs-spread]] にある。

## 1. 機関概要

| 項目 | 内容 |
|---|---|
| 法的形態 | 独立行政法人 (Incorporated Administrative Agency) |
| 日本語名 | 独立行政法人住宅金融支援機構 |
| 設立 | 2007-04-01 (succeeding 住宅金融公庫 / GHLC after 2003 reform planning) |
| 所管 | MLIT (国土交通省) and MOF (財務省) joint supervision |
| 法令 | 独立行政法人住宅金融支援機構法 (2005) |
| 本店 | 東京都文京区後楽 |
| 主要業務 | 証券化支援、住宅融資保険、直接融資（政策ギャップ分野） |
| MBS発行 | Monthly JHF MBS Trust issuance — largest yen-denominated structured-paper program |
| FinWiki lane | [[policy-finance/INDEX|policy-finance]] (not a JapanFG company page; not a bank) |

## 2. 業務マップ

| 業務 | 内容 | 取引相手 |
|---|---|---|
| 証券化支援（買取型） | 民間の貸し手からフラット 35  固定金利住宅ローンを買い取り；MBS 信託にプールし；シニア MBS を資本市場へ発行する。 | 民間オリジネーター（地域銀行、メガバンク、信用金庫、モーゲージ会社）；MBS 投資家。 |
| 証券化支援（保証型） | ローンを買い取ることなく、民間の貸し手の証券化を保証する。 | 民間の貸し手 / 証券化スポンサー。 |
| 住宅融資保険 | 民間の貸し手の住宅ローンを保険する（デフォルト / 特定事由保険）。 | 銀行、信用金庫、地域の貸し手。 |
| 直接融資 | 災害復興住宅、都市再生プロジェクト、高齢者住宅、耐震改修、子育て住宅支援。 | 適格なエンドボロワーおよびプロジェクトスポンサー。 |
| 業務委託 | ローンのサービシング、申込処理、民間パートナー銀行と連携した回収。 | [[banking/regional-bank-consolidation-pattern|Regional banks]] およびその他のパートナー金融機関。 |

## 3. フラット 35  プロダクトファミリー

JHF の旗艦プロダクトファミリーは、**フラット 35**（フラット35）の長期固定金利住宅ローンプログラムであり — 民間の銀行/貸し手によってオリジネートされ、JHF によって買い取られ、JHF MBS 信託を通じて証券化される。サブプロダクト：

- **フラット 35** — 標準の 15–35 年固定金利住宅ローン；ローン・トゥ・バリューは通常 90% まで（より高い LTV のバリアントあり）、技術基準の物件適格性（断熱、耐震性、耐久性）付き。
- **フラット 35S** — 強化された品質基準を満たす物件向けの金利割引版（プラン A：高性能のエネルギー / 耐震 / バリアフリー；プラン B：標準的な品質向上）。S 割引は最初の 5–10  年間に適用される。
- **フラット 50** — 長期優良住宅（長期優良住宅）向けの 36–50 年固定金利住宅ローン、非常に長い年限を優先する買い手向けのニッチ商品として導入。
- **フラット 35 子育てプラス** — フラット 35 ／ フラット 35S に上乗せされる子育て世帯割引。
- **フラット 35 借換** — 既存の住宅ローン向けの借換バリアント。
- **災害復興住宅融資** — 災害復興の直接融資（残余の直接融資チャネル）。
- **リフォーム融資 / 高齢者向け返済特例** — 直接融資のニッチ。

フラット 35  のオリジネーション量は年間で数十万件のローンに上り、ピーク期には兆円規模の年間貸付がある；JHF MBS 発行はこのオリジネーションフローの下流の資金調達レグである。

## 4. 年次の進化と 2007  の民営化してから再創設されたアーク

| Year | Event | Significance |
|---|---|---|
| 1950 | 住宅金融公庫 (GHLC) established | 直接融資の公的住宅金融機関；戦後の住宅供給政策のアンカー。 |
| 1950–2000s | GHLC peak | 直接の住宅ローンの貸し手 — 民間銀行と競争した；大きな住宅ローンブックを保有した。 |
| 2001 | Koizumi structural-reform agenda announced | 特殊法人改革；GHLC が転換の対象とされた。 |
| 2003 | 住宅金融公庫法改正 — direct-lending wind-down plan | GHLC は原則として新規の直接融資を停止（災害 / 政策ギャップの例外あり）；証券化支援モデルへの移行。 |
| 2005 | 独立行政法人住宅金融支援機構法 enacted | 後継機関としての JHF の法的基盤。 |
| 2007-04-01 | JHF established; GHLC dissolved | 「民営化してから再創設」 — 直接のリテール住宅ローンの役割は廃止；証券化支援および保険の役割が創設；残余の直接融資は政策ギャップのために維持。 |
| 2007–2012 | フラット 35  ramp; MBS program established | 月次の JHF MBS 信託発行がベンチマークの仕組み債プログラムとなる。 |
| 2011 | Tōhoku earthquake | 災害復興の直接融資チャネルが大規模に発動；JHF の復興住宅金融レグが再活性化。 |
| 2016 | NIRP / negative-rate era | 住宅ローン金利が崩落；民間銀行の変動金利住宅ローンがフラット 35 と積極的に競争する；フラット 35  のシェアが圧迫される。 |
| 2020–2022 | COVID-era housing-finance support | フラット 35  の貸付はレジリエントなままだった；一部の返済猶予 / 返済の柔軟性が追加された。 |
| 2022–2024 | BOJ YCC adjustments → exit | 長期金利が上昇し始める；フラット 35  の金利が徐々に上昇し、民間の変動金利とのギャップが縮まる。 |
| 2024–2025 | フラット 35 reform — 子育てプラス expansion | 子育て世帯向けのターゲット割引；人口政策との整合。 |
| 2024–2026 | BOJ short-rate normalization (post-NIRP) | 変動金利住宅ローンが再プライシングされる；フラット 35  対変動のスプレッドが再均衡する。 |

2007  の移行は、完全な民営化ではなく「**直接融資の民営化と政策インフラとしての再創設**」として読むのが最善である：GHLC の競争的な直接のリテール住宅ローンブックは巻き戻されたが、住宅金融政策のマンデートは、民間システムの背後に立つ証券化支援および保険を提供する機関として再構成された。

## 5. 証券化のリンケージ（JHF MBS）

JHF の経済的な核心は、月次の **JHF MBS 信託** プログラムである — 完全なプラミングについては [[structured-finance/jhf-mbs-mechanics]] を参照。フロー：

1. 民間オリジネーター（地域銀行、メガバンク、モーゲージ会社）が、JHF の引受基準および物件技術基準を適用して、住宅購入者へのフラット 35  ローンを承認する。
2. JHF が適合ローンをオリジネーターから買い取る（買取型証券化支援プログラム）。
3. JHF が買い取ったローンを月次で MBS 信託にプールする。
4. JHF がシニアのパススルー MBS を資本市場の投資家（銀行、生命保険会社、年金基金、資産運用会社）へ発行する。
5. シニア MBS は JHF の政府支援の信用（実質的にソブリン連動）を帯びる；JGB 対比のスプレッドは通常タイト（歴史的に 10–30 bp のレンジ）。
6. 民間オリジネーターはサービシング契約のもとでローンのサービシング（回収、顧客対応のオペレーション）を継続する。

JHF MBS プログラムは **最大の円建ての仕組み債プログラム** であり、規模で民間 RMBS の発行を圧倒し、円 RMBS カーブのベンチマークとなる。スプレッドの経済性については [[structured-finance/jhf-mbs-vs-private-rmbs-spread]] を参照。

## 6. ARR / 政策金利 スプレッドの経済性

JHF の住宅融資保険およびフラット 35  証券化支援の経済性は、以下の間のスプレッドに依存する：

- **資金調達レグ** — JHF MBS のクーポン（実質的に JGB 連動レート + 10–30 bp のシニアスプレッド）。
- **資産レグ** — 住宅購入者へのフラット 35  住宅ローン金利（通常、年限と商品に応じて資金調達レグより 100–200 bp 上）。
- **オリジネーターフィー** — フラット 35  のオリジネーターは、伝統的な銀行が得る正味利鞘ではなく、JHF からの手数料と継続的なサービシングマージンを得る。

BOJ が長期金利を人為的に低く保つとき（YCC 時代 2016–2024）、JHF の資金調達レグは圧縮される一方、フラット 35  の顧客金利は JGB プラスの構造にアンカーされたままであり — プログラムは機能し続けるが、民間の変動金利住宅ローン（短期金利 / 政策金利でプライシング）が積極的に競争する。BOJ が YCC を脱し長期金利が上昇するとき（2024–2026）、JHF の資金調達レグは拡大し、フラット 35  の金利は上昇し、借り手にとっての変動対固定の経済的意思決定がシフトする。政策金利（BOJ 無担保オーバーナイトレート）は変動金利住宅ローンカーブを押し上げ、フラット 35  固定金利のプロポジションの相対的な魅力を縮める。

## 7. 地域銀行のサービシングパートナーシップ

JHF はフラット 35  を直接リテールしない。オリジネーションは承認された民間金融機関（取扱金融機関）によって行われ、それには以下が含まれる：

- **メガバンク** — [[megabanks/mufg|MUFG]]（三菱 UFJ 銀行）、[[megabanks/smfg|SMFG]]（三井住友銀行）、[[megabanks/mizuho-fg|Mizuho Bank]] — もっともメガバンクのフラット 35  のシェアはリテール特化のプレイヤーより小さい。
- **地域銀行** — 日本全国の多くの [[banking/regional-bank-consolidation-pattern|regional banks]] が、特に借り手が長期固定金利の確実性を望む場合に、フラット 35  を住宅ローン商品ミックスの一部として提供する。
- **モーゲージバンク / 専門の貸し手** — ARUHI Corporation は歴史的に支配的なフラット 35  の専門業者；SBI アルヒ（旧 SBI モーゲージ）、楽天銀行、ソニー銀行が主要な非伝統的オリジネーターである。
- **信用金庫 / 信用組合** — 地域のデスクを通じてより小さな規模で参加する。

サービシングパートナーシップのモデルは、JHF が、日本の民間銀行システムが自然には大規模にオリジネートしない長期固定金利商品を、実質的に標準化することを意味する（日本の預金資金で運営される銀行は、預金負債にマッチした短期変動金利住宅ローンを構造的に選好するため）。これは、公的信用インフラが民間市場のギャップを埋める教科書的な例である。

## 8. 境界ケース

- **リテール銀行ではない** — JHF は預金を受け入れず、銀行の意味での支店を持たず、預金受入機関の意味での [[banking/INDEX|banking system]] の一部ではない。
- **旧 GHLC ページではない** — レガシーな歴史は引用できるが、現在の住宅金融トピックのルーティングは GHLC ではなく JHF を使用すべきである。
- **中小企業の信用保証ではない** — 中小企業の保証は [[policy-finance/japan-credit-guarantee-system]] と [[policy-finance/national-federation-credit-guarantee-corporations]] に属する。
- **農業 / 漁業の信用ではない** — それらは [[policy-finance/agriculture-credit-guarantee-system]] と [[policy-finance/fisheries-credit-guarantee-system]] を使用する。
- **フラット 35  のオリジネーターではない** — フラット 35  は JHF の商品だが、民間銀行によってオリジネートされる；特定の銀行のフラット 35  のマーケティングは JHF にルーティングすべきではない。

## 関連

- [[policy-finance/INDEX]]
- [[policy-finance/japan-policy-finance-system]]
- [[policy-finance/japan-credit-guarantee-system]]
- [[policy-finance/national-federation-credit-guarantee-corporations]]
- [[policy-finance/agriculture-credit-guarantee-system]]
- [[policy-finance/fisheries-credit-guarantee-system]]
- [[policy-finance/okinawa-development-finance-corp]]
- [[structured-finance/jhf-mbs-mechanics]]
- [[structured-finance/jhf-mbs-vs-private-rmbs-spread]]
- [[financial-regulators/jfc]]
- [[financial-regulators/jbic]]
- [[megabanks/mufg]]
- [[megabanks/smfg]]
- [[megabanks/mizuho-fg]]
- [[banking/regional-bank-consolidation-pattern]]
- [[banking/INDEX]]
- [[INDEX|FinWiki index]]

## 出典

- JHF, "私たちについて" (https://www.jhf.go.jp/about/index.html).
- JHF, "組織の概要" (https://www.jhf.go.jp/about/organization/outline/index.html).
- JHF, business overview (https://www.jhf.go.jp/about/business/index.html).
- JHF, MBS investor disclosures.
- MLIT, "独立行政法人 住宅金融支援機構" (https://www.mlit.go.jp/about/jhf_.html).
- MOF, public-finance and FILP disclosures (https://www.mof.go.jp/).
- Flat 35 official portal (https://www.flat35.com/).
