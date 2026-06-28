---
source: payments/japan-consumer-credit-operator-comparison-matrix
source_hash: 2dfc88f5aaadbef9
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "日本の消費者信用オペレーター比較マトリクス"
translated_at: 2026-06-26T08:29:01.765Z
---

# 日本の消費者信用オペレーター比較マトリクス

## TL;DR

日本の「消費者信用」は一つの産業ではない — チェックアウトでは似て見えるが、異なるライセンス、異なる規制当局、異なる貸付上限、異なる金利上限、異なる消費者保護レジームの上に位置する、少なくとも **9つのオペレーター・カテゴリー** である。カードローン、信販、消費者金融、BNPL、オートキャプティブ、住宅ローン、教育ローン、マイクロクレジット、PSP 組込型クレジットを一つのバケットに平板化する読み手は、合併圧力、規制エクスポージャー、ABS パイプライン、銀行隣接性を読み誤る。このページは、いかなる企業レベルの分析の前にも、問いが **あるオペレーターが実際にどの消費者信用カテゴリーに属するか** であるときに、[[payments/INDEX|payments index]] の残りが指し示す並列比較サーフェスである。

## Wiki ルート

これは [[payments/INDEX|payments index]] の配下にあり、クロスカテゴリーの消費者信用リファレンスである。BNPL / 信販ラインについては [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]]、カード側の役割分離については [[payments/japan-card-issuer-acquirer-processor-split|card 発行会社 / アクワイアラ / processor split]]、このエントリが意図的に補完するクロススキーム比較については [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]、経産省レジストリの行レベルのソースについては [[payments/credit-purchase-card-operators-japan-index|credit-purchase / card 事業者 registry]]、規制カテゴリーのマッピングについては [[financial-licenses/payment-license-stack|Japan payment license stack]]、住宅ローン隣接性のポリシーファイナンス側については [[policy-finance/japan-housing-finance-agency|Japan Housing Finance Agency]] と併せて読むこと。例の主体アンカーは [[consumer-finance/acom|ACOM]]、[[consumer-finance/aiful|AIFUL]]、[[consumer-finance/smbc-consumer-finance|SMBC Consumer Finance]]、[[card-issuers/aplus|APLUS]]、[[card-issuers/jaccs|JACCS]]、[[card-issuers/orico|Orico]] である。

## 9つのオペレーター・カテゴリー

FinWiki が（従来の「カード / 商工ローン / 信販」の3つではなく）9つのカテゴリーを維持する理由は、BNPL、オートキャプティブ、住宅ローン隣接、教育ローン、マイクロクレジット、PSP 組込型クレジットが、消費者から見える商品が単一の「クレジット」体験のように見える場合でも、**異なるライセンスルート、異なる規制当局、異なる消費者保護レジーム** を持つからである。

| # | カテゴリー | 日本語 | 主たる法令 | 主たる規制当局 |
|---|---|---|---|---|
| 1 | カード発行体 | クレジットカード会社 / 包括信用購入あっせん業者 | 割賦販売法（割賦販売法） | 経産省（経産省） |
| 2 | 消費者金融 / 商工ローン | 消費者金融 / 貸金業者 | 貸金業法（貸金業法） | 金融庁（金融庁） |
| 3 | 割賦信用 / 信販 | 信販会社 / 個別信用購入あっせん業者 | 割賦販売法（割賦販売法） | 経産省（経産省） |
| 4 | BNPL ピュアプレー | BNPL / 後払い | 割賦販売法（限定的；適用除外の閾値が適用される） | 主として経産省；ウォレット / 資金移動が重なる場合は金融庁 |
| 5 | オートファイナンス / オートキャプティブ | 自動車ローン / オートクレジット | 割賦販売法（個別 / 包括）+ 無担保の場合は貸金業法 | 主として経産省；貸金業の部分については金融庁 |
| 6 | 住宅ローン隣接（JHF ルート）| 住宅ローン直接型 / フラット 35 | JHF 法（独立行政法人住宅金融支援機構法）+ 銀行法 | 国交省（国交省）+ 財務省 + 銀行側の金融庁 |
| 7 | 教育ローン | 教育ローン | 銀行法（民間）+ JFC 法（公的） | 金融庁（民間）+ 財務省（公的・JFC） |
| 8 | マイクロクレジット | マイクロクレジット | 貸金業法（多くの場合）またはソーシャルファイナンスのルート | 貸金業の場合は金融庁；一部のソーシャルクレジット・チャネルは厚労省 |
| 9 | PSP 隣接クレジット（組込型 EC クレジット）| PSP 内蔵後払い / EC 埋込型クレジット | 割賦販売法 + ウォレット連携の場合は資金移動 / 前払い | 経産省 + 金融庁（境界ケース） |

各行は独立したライセンススタックである。複数を保有するオペレーターは **自動的に** 持株会社になるわけではない — それはより多くの場合、マルチライセンスの販売金融 / 消費者信用オペレーターである（例：[[card-issuers/orico|Orico]] は包括信用購入あっせん、個別信用購入あっせん、貸金業を同時に保有する；[[consumer-finance/aiful|AIFUL]] は Life Card を通じて貸金業 + 包括信用購入あっせんを保有する；[[card-issuers/jaccs|JACCS]] はこの3つすべてに加えて包括信用購入あっせん + 個別信用購入あっせんを保有する）。

## 比較マトリクス — フル

| 次元 | カード発行体 | 消費者金融 | 割賦信用（信販） | BNPL ピュアプレー | オートキャプティブ | 住宅ローン（JHF） | 教育ローン | マイクロクレジット | PSP 隣接クレジット |
|---|---|---|---|---|---|---|---|---|---|
| **ライセンス** | 割賦販売法（包括信用購入あっせん） | 貸金業法（貸金業） | 割賦販売法（個別信用購入あっせん + しばしば包括） | 割賦販売法（Type II ≤ 2 ヶ月 + 個別の適用除外閾値） | 割賦販売法（大半は個別 / 包括）+ 場合により貸金業法 | JHF 法 + 銀行法（民間側） | 銀行法 + JFC 法（公的側） | 通常は貸金業法 | 割賦販売法 + 資金決済法（混合） |
| **規制当局** | 経産省 | 金融庁 | 経産省 | 経産省（+ ウォレット連携の場合は金融庁） | 主として経産省 | 国交省 + 財務省 + 銀行側の金融庁 | 金融庁 + 財務省 | 主として金融庁 | 経産省 + 金融庁の境界 |
| **登録レジストリ** | 経産省登録包括信用購入あっせん業者一覧（2026-04 月末時点で 241） | 金融庁貸金業者登録一覧 | 経産省登録個別信用購入あっせん業者一覧（2026-04 月末時点で 138） | 混合 — 経産省 Type II / 個別の適用除外 + 金融庁 Type II / III の資金移動 | 経産省個別/包括一覧 | JHF 取扱金融機関一覧（民間）+ JHF 直接 | 銀行商品の開示 + JFC 商品の開示 | 金融庁貸金業者登録 + JICC / CIC | 経産省登録 + 金融庁資金移動業 + 第三者型前払 |
| **総量規制（貸付上限）** | キャッシング（キャッシング）部分については適用；リボ払いの買物は別ルール | 適用 — 年収の 1/3 のハードキャップ | なし（割賦販売法は総量規制の代わりに支払可能見込額調査を持つ） | ≤ 2 ヶ月の後払いについては実質なし；登録される場合は完全な個別信用購入あっせんのルール | なし（割賦販売法ルート） | なし — 担保付 + ポリシーファイナンスのカーブアウト | 民間（銀行商品）にはなし；JFC の公的ローンにもなし | 適用（1/3 のキャップが適用される） | どのライセンスが実際に債権を計上するかによる |
| **上限金利（金利上限）** | 利息制限法 15-20%（キャッシング）；買物については割賦販売法実質年率 | 利息制限法 15-20% + 出資法 20% の刑事上限 | 利息制限法 + 割賦販売法実質年率の開示 | 消費者には一般に 0%（加盟店が MDR 相当を支払う）；遅延損害金モデル | 割賦販売法実質年率 | 民間住宅ローン：銀行の市場金利；フラット 35 固定 | 銀行ローン：市場金利；JFC：低固定 | 利息制限法 + 出資法 20% | 混合 — 計上ライセンスによる |
| **KYC / AML 義務** | 犯罪収益移転防止法（犯収法）の完全な義務 | 犯収法 + 貸金業法の KYC（厳格） | 犯収法 + 割賦販売法加盟店調査 | 小口については犯収法は軽め；閾値超の場合は完全 | 犯収法 + ディーラーシップ KYC | 犯収法 + 銀行側の完全な KYC | 犯収法 + 銀行側の完全な KYC | 犯収法 + 貸金業 KYC | 犯収法 + 該当する場合はウォレット / 資金移動業 KYC |
| **開示義務** | 割賦販売法実質年率、加盟店表示、セキュリティガイドライン（J-CSC） | 貸金業法 13 条書面交付、17 条契約書面 | 割賦販売法実質年率、加盟店表示、個別契約 | 経産省後払い FAQ ガイダンス + 消費者契約法 | 割賦販売法実質年率 + ディーラーシップの開示 | 重要事項説明書 + 銀行側の開示 | 銀行側の開示 + JFC 商品の開示 | 貸金業法 13/17 条 | 経産省 + 消費者契約法 + ウォレット T&C |
| **デフォルト率の開示** | 発行体 IR（セグメント別の年次貸倒率） | 有報 + 金融庁の集計統計 | 信販 IR（セグメントレベルの 信用コスト率） | 限定的 — 上場していれば後払いオペレーターの IR（例：PayPal の開示を通じた Paidy） | OEM ファイナンス部門の IR（例：OEM 連結報告書に組み込まれた Toyota Finance の開示） | JHF 年次報告書 + 銀行側の 貸倒率 | 銀行 IR + JFC 年次報告書 | 上場していれば貸金業 IR；そうでなければ金融庁の集計 | 限定的；大半は親 PSP の IR 内 |
| **負債 / 貸倒引当** | IFRS 9 / J-GAAP 引当金 + 割賦販売法加盟店リスク負担 | IFRS 9 / J-GAAP 引当金、過払金引当 のレガシー | IFRS 9 / J-GAAP 引当金 + 加盟店求償 | 通常は加盟店 + オペレーターの共同負担 | OEM 保証またはディーラー・リコースのモデルが一般的 | 銀行引当金 + フラット 35 買戻のための JHF 信用補完 | 銀行引当金 + JFC の財政的裏付け | 貸金業引当金 + 過払金リスクが残存 | 計上ライセンスにより混合 |
| **報告レジストリのルート** | 経産省登録包括信用購入あっせん業者 PDF 一覧 | 金融庁貸金業者登録一覧（中央 + 都道府県） | 経産省登録個別信用購入あっせん業者 PDF 一覧 | 経産省登録（該当する場合）+ 後払い行政処分状況ページ | 経産省個別/包括一覧 | JHF 取扱金融機関一覧 + JHF 直接 | 全銀協の開示における銀行ローン商品；JFC の商品ページ | 金融庁貸金業者登録一覧 | 経産省 + 金融庁のクロスレジストリ |
| **最近の規制圧力** | 改正割賦販売法（2018, 2020, 2024 BNPL の明確化）；J-CSC ガイドライン 6.0/6.1 （EC については 2025-03 に EMV 3-DS が必須） | 改正貸金業法（2010-06 完全施行：20% のキャップ + 1/3 総量規制）；過払金 の収束 | 改正割賦販売法（2018 加盟店調査強化）；認定包括/少額包括 のための 2020 改正 | 割賦販売法改正の下での 2024 BNPL の明確化；現金化乱用に関する CAA / 消費者庁 の警告 | EV / KINTO サブスクリプションへの移行圧力；OEM キャプティブの統合議論 | フラット 35 不正利用問題（2019-）+ JHF の投資家基盤のシフト | 大きなものはなし；授業料上昇に伴う教育ローン需要の圧力 | 限定的な国家フレームワーク；社会的金融 の議論が進行中 | 組込型チェックアウトクレジットに関する経産省 + 金融庁の境界の明確化 |
| **証券化 / ABS パイプライン** | 多い — クレジットカード債権 ABS（V-RACE、S-RACE、Rakuten Card ABS の定例発行） | 多い — ACOM / SMBCCF / AIFUL の消費者ローン ABS の定例 | 多い — オートローン ABS（オート / ショッピングクレジット ABS の定例） | 萌芽 — PayPal の下での Paidy 債権証券化ルート | 多い — Toyota Finance / Honda Finance / Nissan Financial のオート ABS の定例 | 多い — JHF によるフラット 35 MBS の定例発行（機構 MBS、日本最大の MBS 発行体） | 限定的 — 銀行ローンのポートフォリオが教育専用プールのために証券化されることは稀 | 最小限 | 最小限 |
| **銀行隣接性** | メガバンク FG 系：[[card-issuers/smbc-card\|SMBC Card]]（SMFG）、[[card-issuers/mufg-nicos\|MUFG NICOS]]（MUFG）、[[card-issuers/jcb\|JCB]]（マルチバンク）、[[card-issuers/rakuten-card\|Rakuten Card]]（楽天 FG）、[[card-issuers/paypay-card\|PayPay Card]]（PayPay FG） | 混合：[[consumer-finance/smbc-consumer-finance\|SMBC Consumer Finance / Promise]]（SMFG 100%）、[[consumer-finance/acom\|ACOM]]（MUFG 39.6% 持分法）、[[consumer-finance/aiful\|AIFUL]]（独立） | 銀行 FG 系：[[card-issuers/jaccs\|JACCS]]（MUFG 持分法）、[[card-issuers/orico\|Orico]]（みずほ + 伊藤忠）、[[card-issuers/aplus\|APLUS]]（SBI Shinsei）、Credit Saison（独立 / みずほ隣接） | 大半は非銀行：Paidy（PayPal）、Atone（Net Protections）、NP後払い（Net Protections） — ただし銀行 FG のカード発行体も BNPL 類似の商品を提供する | OEM キャプティブ：Toyota Finance（Toyota）、Honda Finance、Nissan Financial Services — 非銀行のキャプティブ、場合により銀行と提携 | 銀行が前面（民間）：すべてのメガバンク + 地銀；JHF はポリシーファイナンスの非銀行 | 銀行が前面（民間教育ローン）；JFC はポリシーファイナンスの非銀行 | しばしば非銀行のソーシャルファイナンス + 貸金業 の小規模オペレーション | 親 PSP が銀行隣接であれば銀行 FG 系 |
| **カードブランド受入への依存** | 直接 — 発行体が Visa / Mastercard / JCB / Amex / Diners ブランドを持つ | なし（現金ローンであり、カードブランド経由ではない） | 混合 — 多くの信販がブランドカードも発行する（Orico Card、JACCS Card） | チェックアウト時点では一般になし（オペレーター直接）、ただし一部の BNPL はバーチャルなブランドカードを拡張する | ローン商品レベルではなし | ローン商品レベルではなし | なし | なし | 依存する — 一部の PSP クレジットはブランドカードのバックエンドを経由する |

### 1. カード発行体（クレジットカード会社 / 包括信用購入あっせん業者）

カード発行体は割賦販売法の下での **包括信用購入あっせん業者** であり、経産省に登録される（経産省登録包括信用購入あっせん業者一覧によれば 2026-04 月末時点で 241 登録）。カード発行体は、カード会員をスクリーニングし、与信限度を設定し、債権を計上し、不正モニタリングを行う主体である。銀行 FG のアンカー：[[card-issuers/smbc-card|SMBC Card]]（SMFG）、[[card-issuers/mufg-nicos|MUFG NICOS]]（MUFG）、[[card-issuers/jcb|JCB]]（マルチバンク・コンソーシアム）。非銀行 FG のアンカー：[[card-issuers/rakuten-card|Rakuten Card]]（楽天 FG）、[[card-issuers/paypay-card|PayPay Card]]（PayPay FG）、[[card-issuers/aeon-financial-service|AEON Financial Service]]（イオンのリテール FG）。

カード商品内のキャッシング（キャッシング）は貸金業レジームへ越境する — その部分は総量規制（収入の 1/3 のキャップ）と利息制限法 20% の金利上限の対象となる一方、**買物** 部分は総量規制ではなく割賦販売法支払可能見込額調査によって統治される。このデュアルレジーム構造はカード発行体に固有である。

### 2. 消費者金融 / 商工ローン（消費者金融 / 貸金業者）

消費者金融オペレーターは貸金業法（貸金業法）の下での貸金業者であり、中央（財務局）または都道府県のルートを通じて金融庁に登録される。現在の「3 大消費者金融」は [[consumer-finance/acom|ACOM]]（MUFG 持分法 39.6%）、[[consumer-finance/smbc-consumer-finance|SMBC Consumer Finance / Promise]]（SMFG 100% 子会社）、[[consumer-finance/aiful|AIFUL]]（独立、創業家支配）である。武富士が 2010, に会社更生で破綻した後、当セグメントはこの3社の周辺に統合された。

決定的な規制イベントは、2010-06に完全施行された **改正貸金業法** である：利息制限法の 20%（元本サイズにより 15% / 18% / 20% に段階分け）のキャップが旧出資法 29.2% のグレーゾーンに取って代わり、総量規制（年収の 1/3 のハードキャップ）が拘束力を持つようになった。続いて起こった過払金（過払い利息の返還）の波は、[[consumer-finance/aiful|AIFUL]] の事業再生 ADR（2009-09）、MUFG による [[consumer-finance/acom|ACOM]] の TOB（2008-10）、SMFG による Promise の完全子会社化の原因である。

銀行側の回避策は **銀行カードローン** である — 銀行が発行する商品は銀行法によって統治され、歴史的に総量規制に直面しなかったため、「実質総量規制超過」貸付をめぐる業界の自主規制の議論を引き起こした。ACOM、Promise、AIFUL はいずれも、銀行カードローンのエクスポージャーを保証することから収益を計上する 銀行保証 のサイドラインを運営している。

### 3. 割賦信用 / 信販（信販会社 / 個別信用購入あっせん業者）

信販オペレーターは割賦販売法の下での **個別信用購入あっせん業者** である（経産省登録個別信用購入あっせん業者一覧によれば 2026-04 月末時点で 138 登録）。識別上の特徴は、ローンが特定の購入（個品割賦）に紐づき、しばしば加盟店契約（加盟店）を経由することである — 自動車ディーラーのローン、リフォームローン、教育ローン（民間側）、楽器 / 家電 / 医療 / 住宅設備。アンカー：[[card-issuers/orico|Orico]]（みずほ + 伊藤忠、オートローン #1）、[[card-issuers/jaccs|JACCS]]（MUFG 持分法、オート/教育/リフォームの 3 レーン）、[[card-issuers/aplus|APLUS]]（SBI Shinsei）、Credit Saison（独立 / みずほ隣接、カード中心）。

信販オペレーターは通常 **複数のライセンス** を保有する — ほぼ常に個別信用購入あっせんを、包括信用購入あっせん（自社発行カードのため）、貸金業（カードローンのため）、銀行保証（銀行カードローンの保証のため）、しばしば集金代行（B2B の公共料金 / 継続課金の収納のため）と組み合わせる。2018 改正割賦販売法は 加盟店調査義務を強化し、限界的な加盟店関係のオンボーディングコストを引き上げた。

### 4. BNPL ピュアプレー（BNPL / 後払い）

BNPL は **最も規制的に曖昧な** カテゴリーである。割賦販売法の下では、**≤ 2 ヶ月かつ一括払い** の後払いは一般に包括信用購入あっせんではなく、特定の加盟店が前面に立つモデルの下での個別後払いは、加盟店表示のルートを通じて個別信用購入あっせんの登録を回避しうる。2020 改正割賦販売法（2021-04施行）は、一部の BNPL オペレーターをより軽い版の包括レジームの下に取り込むために、明示的に 認定包括信用購入あっせん業者 / 少額包括信用購入あっせん業者 のフレームワークを追加した；2024 BNPL の明確化のラウンドが引き締めを続けた。

アンカー：[[payment-firms/paidy|Paidy]]（PayPal が 2021-09 に約 USD 2.7 十億で買収）、Atone / NP後払い（Net Protections）。[[payments/japan-bnpl-credit-purchase-boundary|BNPL boundary]] のページが商品ごとの分類テストを順を追って説明する。消費者庁（消費者庁 / CAA）は、BNPL の **現金化乱用**（現金化目的後払い）について、および後払いを現金的に感じさせる UX パターンについて、活発な警告チャネルを維持している — CAA の決済トラブル注意ページを参照。

### 5. オートファイナンス / オートキャプティブ（自動車ローン / オートクレジット）

オートファイナンスは2つの構造的な形を持つ：(a) 割賦販売法の下でディーラーシップの加盟店ネットワークを通じて計上される、信販が前面に立つオートローン（例：[[card-issuers/orico|Orico]] はオートローンで国内 #1、[[card-issuers/jaccs|JACCS]] は #2-3）、(b) 主として親 OEM の車両販売を引き受けるために存在する **OEM オートキャプティブ** — Toyota Finance（Toyota）、Honda Finance、Nissan Financial Services、Mitsubishi UFJ Lease & Finance（現 Mitsubishi HC Capital）など。

OEM キャプティブの計上は通常、割賦販売法個別 + 包括（OEM ブランドのカードがあれば）+ 場合により貸金業である。OEM は明示的または黙示的な信用サポート（KINTO 型サブスクリプションの残価保証）を提供し、これがスタンドアロンの信販オートローンのブックに対してキャプティブの貸倒引当の必要性を低減する。オート ABS 市場は非 MBS の日本の消費者ローン ABS の最大セグメントである — Toyota Finance が定例のベンチマーク発行体である。EV / KINTO サブスクリプション / カーシェアリングのトレンドは、信販が前面に立つオートローンとキャプティブが前面に立つオートローンの双方が共有する、ディーラーシップ・クレジット・チャネルへの構造的な圧力である。

### 6. 住宅ローン隣接（住宅ローン直接型 / フラット 35）

住宅ローンは大半が銀行法の下での銀行 FG の世界だが、**ポリシーファイナンスのオーバーレイ** が重要である：[[policy-finance/japan-housing-finance-agency|Japan Housing Finance Agency (JHF / 住宅金融支援機構)]] は **フラット 35** を運営する — 組成銀行が JHF へ売却し、JHF がそれを 機構 MBS としてパッケージする長期固定金利の住宅ローン。JHF は日本最大の MBS 発行体である。

規制当局：国交省（国交省）が JHF（住宅政策側）の主たる監督者である；財務省が JHF 法の金融側を監督する；組成銀行側は銀行法の下で金融庁に監督される。フラット 35 不正利用問題（2019-）— 投資用賃貸物件の購入を自己居住用と偽ったもの — は、JHF の 取扱金融機関 のデューデリジェンス要件の構造的な引き締めを引き起こした。JHF は割賦販売法または貸金業法のオペレーターでは **ない**；それは 独立行政法人 のポリシーファイナンス機関であり、経産省 / 金融庁の消費者信用レジストリの外に位置する。

### 7. 教育ローン（教育ローン）

教育ローンは **公的 / 民間** のラインに沿って分かれる。民間側は銀行法の下で銀行が提供し（民間ローンであるため割賦販売法の登録はなし）、しばしば無担保の 教育目的ローン商品としてパッケージされる。公的側は JFC 法の下で **国民金融公庫 / Japan Finance Corporation（JFC / 日本政策金融公庫）** が運営する — JFC の 教育一般貸付 が主たる 公的教育ローンであり、民間銀行商品に対して低固定金利である。JFC は財務省（財務省）に監督される。

教育ローンのブックは、スタンドアロンの教育ローン ABS として定例的に証券化されることはない — 銀行側のエクスポージャーはより広範な無担保消費者ローンのブック内に位置する。信販オペレーター（例：[[card-issuers/jaccs|JACCS]]）も、割賦販売法個別ルートの下で教育機関の加盟店チャネルを通じて教育ローンを提供しており、これは銀行-民間と JFC-公的と並ぶ、教育クレジットの第3のルーティング経路である。

### 8. マイクロクレジット（マイクロクレジット）

日本には、バングラデシュ / インドのマイクロファイナンスに匹敵する発達した国家的マイクロクレジット・フレームワークはない。日本でマイクロクレジット型の小口消費者信用が存在する場合、それは通常、小規模な貸金業者によって **貸金業法** の下で計上され、これは完全な貸金業レジームの利息制限法 20% のキャップ、出資法 20% の刑事上限、総量規制 1/3 のキャップ、犯収法 の KYC 義務を継承することを意味する。

ソーシャルファイナンスおよび NPO 経由の小口貸付チャネルは存在する（例：厚労省の資金で 都道府県社会福祉協議会 が運営する 生活福祉資金貸付）が、それらは貸金業では **ない** — それらはポリシー福祉のチャネルである。したがって、日本で「マイクロクレジット」をサブセグメント化するには、オペレーターが貸金業（金融庁監督）か 社会福祉（厚労省監督）かを確認する必要がある。なぜなら、消費者保護レジーム、登録ルート、開示義務がまったく異なるからである。

### 9. PSP 隣接クレジット（e コマース組込型クレジット）

PSP 隣接クレジットは比較マトリクスの **境界ケース** である。PSP（ペイメント・サービス・プロバイダー）またはウォレットオペレーターがチェックアウト時のクレジット商品を拡張する場合、債権は (a) オペレーターが個別 / 包括信用購入あっせんの登録を保有していれば割賦販売法、(b) ウォレット残高の前貸しとして構成されていれば資金決済法資金移動業、(c) 前払いストアドバリューの拡張として構成されていれば資金決済法第三者型前払、(d) 稀な構造化ケースでは貸金業法、の下で計上されうる。したがって、同じチェックアウト UX が、どの法的主体が実際に債権を計上するかに応じて異なるライセンスへ翻訳されうる。

このカテゴリーは、Mercari/Merpay（後払い機能が資金移動 + 後払いのラインを越境する）、PayPay（あと払いが [[card-issuers/paypay-card|PayPay Card]] をクレジット計上主体として用いる）、EC マーケットプレイスからのプラットフォーム側のクレジット拡張のようなオペレーターのために存在する。[[payments/japan-bnpl-credit-purchase-boundary|BNPL boundary]] のページと [[financial-licenses/payment-license-stack|payment license stack]] のページが商品ごとの分類テストを与える。

## 信用情報機関のフットプリント消費者信用オペレーターの報告 / 照会義務は、そのライセンスカテゴリーと機関への加盟による。3つの主要機関がある：

| 機関 | 加盟基盤 | 典型的なオペレーターのカバレッジ |
|---|---|---|
| **JICC**（日本信用情報機構）| 大半が貸金業 + 信販 | 消費者金融 / 商工ローン、信販、一部の BNPL |
| **CIC**（Credit Information Center）| 大半が割賦販売法の登録業者 | カード発行体、信販、オートファイナンス、個別信用購入あっせん業者 |
| **全国銀行個人信用情報センター（KSC）**| 銀行系 | 銀行、信用金庫、信用組合 — 住宅ローン + 教育ローン + 銀行カードローン |

**3 大消費者金融** のオペレーターは通常、JICC + CIC + KSC のメンバーである。なぜなら、機関横断的なチェックが総量規制の検証の基礎だからである。ピュアな BNPL オペレーターは、そのライセンススタックに応じて JICC または CIC のメンバーにとどまる場合がある。JHF（フラット 35）は、銀行組成側を通じて KSC に報告する。

## 銀行隣接性マップ（連結）

カテゴリー 1, 2, 3, 4, 5, 6, 7 を併せて読むと、日本の消費者信用の銀行 FG 隣接性の図は以下の通りである：

| FG | カード発行体 | 消費者金融 | 信販 | 備考 |
|---|---|---|---|---|
| [[megabanks/mufg|MUFG]] | [[card-issuers/mufg-nicos|MUFG NICOS]]（100%）| [[consumer-finance/acom|ACOM]]（39.6% 持分法）| [[card-issuers/jaccs|JACCS]]（持分法）| 一つの FG 内の 3ラインの消費者信用フットプリント |
| [[megabanks/smfg|SMFG]] | [[card-issuers/smbc-card|SMBC Card]]（100%）| [[consumer-finance/smbc-consumer-finance|SMBC Consumer Finance / Promise]]（100%）| （主要な信販はインハウスになし；Credit Saison その他と提携）| 2ライン、信販は所有ではなく提携として |
| [[megabanks/mizuho-fg|Mizuho FG]] | （UC Card のレガシー；提携）| （主要なスタンドアロンはなし）| [[card-issuers/orico|Orico]]（持分法 + 伊藤忠）| 信販が多く、カードが少ない |
| [[regional-banks/sbi-shinsei-bank|SBI Shinsei]] | （Shinsei Financial のカード商品）| Shinsei Financial / レイクALSA（旧 GE 系）| [[card-issuers/aplus|APLUS]]（グループ会社）| レガシーの GE / Lake / APLUS のブックを通じた消費者信用の多い FG |
| 独立 / 非銀行 FG | [[card-issuers/rakuten-card|Rakuten Card]]、[[card-issuers/paypay-card|PayPay Card]]、[[card-issuers/aeon-financial-service|AEON Financial Service]] | [[consumer-finance/aiful|AIFUL]]（創業家）| Credit Saison（独立）、[[card-issuers/aplus|APLUS]]（SBI 側）| 銀行 FG の所有が欠如または部分的な場合 |

MUFG の 3ラインのフットプリント（NICOS カード + ACOM 消費者金融 + JACCS 信販）は、日本の消費者信用における単一で最も集中した銀行 FG のポジションである。MUFG が最終的にそれを統合された消費者信用子会社に統合するのか、それとも別々の上場 / 持分法主体として維持するのかは、長く続く構造的な問いである。

## 最近の規制圧力

| 日付 | ソース | 何が変わったか |
|---|---|---|
| 2006-01-13 | 最高裁判所 | グレーゾーン金利 の判決が貸金業法の みなし弁済規定を事実上無効化し、過払金返還の波を引き起こした |
| 2006-12 | 国会 | 改正貸金業法成立（20% の金利上限 + 1/3 総量規制のキャップ） |
| 2008-04 | 金融庁 | [[consumer-finance/aiful|AIFUL]] に対する業務改善命令（取立慣行の問題）、全業務停止命令 |
| 2008-10-22 | MUFG TOB | MUFG が [[consumer-finance/acom|ACOM]] の約 40% を取得、持分法連結 |
| 2010-06 | 金融庁 | 改正貸金業法完全施行（20% のキャップ + 1/3 総量規制のキャップ、完全施行） |
| 2010-09 | 武富士 | 武富士が会社更生（会社更生）を申請、業界が 3 大消費者金融 に統合 |
| 2018 | 経産省 | 改正割賦販売法 — 加盟店調査義務の強化、カードデータ・セキュリティスタック |
| 2020 改正 | 経産省 | 改正割賦販売法 — BNPL のための 認定包括信用購入あっせん業者 + 少額包括信用購入あっせん業者 のフレームワーク |
| 2021-04 | 経産省 | 2020 改正割賦販売法 の施行 |
| 2024 | 経産省 / CAA | BNPL の明確化のラウンド、後払いオペレーターの行政処分ページ（atobaraigyouseisyobunnojoukyou.html） |
| 2025-03 | 経産省 / 日本クレジット協会 | J-CSC ガイドライン 6.0 の下で EC のカード決済について EMV 3-DS が必須（[[payments/japan-card-security-authentication-controls|card security and authentication controls]] を参照） |
| 進行中 | CAA（消費者庁）| BNPL の現金化乱用、および後払いを現金的に感じさせる UX パターンに関する活発な警告 |

2010-06 改正貸金業法 の施行は、現代の日本の消費者信用における **単一で最大の構造的イベント** である — それは消費者金融を 4社 + 多数の小規模という地形から、現在の 3 大（ACOM、Promise、AIFUL）+ 銀行カードローンの提携へと統合し、過払金返還の波がオペレーターの自己資本の十年分近くを消費した。

## 証券化 / ABS パイプラインサマリー

| カテゴリー | 定例 ABS / MBS パイプライン | コメント |
|---|---|---|
| カード発行体 | 多い — クレジットカード債権 ABS（V-RACE、S-RACE、Rakuten Card ABS）| 銀行 FG のカード発行体は定例的に発行する；非銀行 FG のカード発行体は SPC を経由 |
| 消費者金融 | 多い — ACOM / SMBCCF / AIFUL の消費者ローン ABS の定例 | 過払金 の波の後、ABS は安定したセカンダリーの資金調達ライン |
| 信販（オート・ショッピングクレジット）| 多い — オートローン + ショッピングクレジット ABS | Orico / JACCS / APLUS の定例パイプライン |
| BNPL | 萌芽 — PayPal の所有下での Paidy 債権証券化ルート | まだ小さいがパイプラインは開きつつある |
| オートキャプティブ（OEM）| 多い — Toyota Finance / Honda Finance / Nissan Financial のオート ABS の定例 | 非 MBS の消費者ローン ABS の最大セグメント |
| 住宅（JHF）| 多い — フラット 35 機構 MBS の定例 | JHF は日本最大の MBS 発行体 |
| 教育ローン | スタンドアロンのプールとしては最小限 | 銀行側の集計であり、スタンドアロンではない |
| マイクロクレジット | 最小限 | ABS の経済性には小さすぎる |
| PSP 隣接 | 最小限 | あれば親の他の ABS パイプラインに集約される |

ABS の次元は、**各オペレーターがどのように自らを資金調達するか** を理解するために重要である — ABS の多いカテゴリーは比例的なバランスシート資本なしに急速なブックの成長を維持できる一方、ABS の少ないカテゴリー（マイクロクレジット、教育ローン、PSP 隣接）は親のバランスシートの余力によって成長を制約される。これは、定例的な証券化を達成する BNPL オペレーター（PayPal 下の Paidy）が、自己資本から資金調達する BNPL オペレーターに対して実質的な資本効率を得る理由の一つである。

## 関連

- [[payments/INDEX]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-interchange-and-merchant-fee-stack]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/cashless-jp-landscape]]
- [[financial-licenses/payment-license-stack]]
- [[financial-licenses/INDEX]]
- [[consumer-finance/acom]]
- [[consumer-finance/aiful]]
- [[consumer-finance/smbc-consumer-finance]]
- [[card-issuers/aplus]]
- [[card-issuers/jaccs]]
- [[card-issuers/orico]]
- [[card-issuers/smbc-card]]
- [[card-issuers/mufg-nicos]]
- [[card-issuers/jcb]]
- [[card-issuers/rakuten-card]]
- [[card-issuers/paypay-card]]
- [[card-issuers/aeon-financial-service]]
- [[payment-firms/paidy]]
- [[payment-firms/bnpl-landscape]]
- [[policy-finance/japan-housing-finance-agency]]
- [[INDEX|FinWiki index]]

## 出典

- 経産省 割賦販売法 ポータル：https://www.meti.go.jp/policy/economy/consumer/credit/
- 経産省 信用取引インデックス：https://www.meti.go.jp/policy/economy/consumer/credit/index.html
- 経産省 登録業者一覧 ポータル：https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
- 経産省 登録包括信用購入あっせん業者 PDF：https://www.meti.go.jp/policy/economy/consumer/credit/tourokuhoukatsuichiran.pdf
- 経産省 登録個別信用購入あっせん業者 PDF：https://www.meti.go.jp/policy/economy/consumer/credit/tourokukobetsuichiran.pdf
- 経産省 クレジットカード番号等取扱契約締結事業者 PDF：https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
- 経産省 割賦販売法 後払い FAQ：https://www.meti.go.jp/policy/economy/consumer/credit/kappuhanbaihoatobaraibunyanogaiyofaq.html
- 経産省 改正割賦販売法 ページ：https://www.meti.go.jp/policy/economy/consumer/credit/11kappuhanbaihou.html
- 金融庁 貸金業法 ポータル：https://www.fsa.go.jp/menkyo/kashikin/
- 金融庁 免許 / 登録業者 ポータル：https://www.fsa.go.jp/menkyo/menkyo.html
- 金融庁 前払い政策 ポータル：https://www.fsa.go.jp/policy/prepaid/
- JICC（日本信用情報機構）：https://www.jicc.co.jp/
- CIC（Credit Information Center）：https://www.cic.co.jp/
- 日本クレジット協会 — 割賦販売法 消費者ページ：https://www.j-credit.or.jp/customer/sales_law/
- JHF（住宅金融支援機構）：https://www.jhf.go.jp/
- JFC（日本政策金融公庫）：https://www.jfc.go.jp/
- CAA（消費者庁）決済トラブル注意：https://www.caa.go.jp/policies/policy/consumer_policy/caution/internet/trouble/payment.html
- 各オペレーターの IR / コーポレート開示（公開分）：[[consumer-finance/acom|ACOM]]（TSE STD 8572）、[[consumer-finance/aiful|AIFUL]]（TSE PRIME 8515）、[[card-issuers/jaccs|JACCS]]（TSE PRIME 8584）、[[card-issuers/orico|Orico]]（TSE PRIME 8585）、[[card-issuers/aplus|APLUS]]（SBI Group コーポレートサイト）、[[consumer-finance/smbc-consumer-finance|SMBC Consumer Finance / Promise]]（SMFG 連結）
