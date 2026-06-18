---
source: finance/japan-corporate-fx-and-rate-hedge-policy
source_hash: fcfbc40e9c76741d
lang: ja
status: machine
fidelity: ok
title: "日本企業の為替・金利ヘッジ方針"
translated_at: 2026-06-18T23:59:13.076Z
---

# 日本企業の為替・金利ヘッジ方針

## Wiki 経路

このページは [[finance/INDEX|finance domain]] の下に位置する。ディール・ファイナンスのヘッジ接点については [[finance/japan-acquisition-finance|Japan acquisition finance]]、LBO の金利ヘッジの背骨については [[finance/japan-leveraged-buyout-economics|Japan leveraged buyout economics]]、関連する FV-OCI 会計枠組みについては [[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding unwinding economics]]、ヘッジ開示情報の取扱いについては [[finance/japan-fair-disclosure-and-insider-trading-controls|fair disclosure controls]]、ヘッジ・カウンターパーティの選定については [[finance/japan-listed-financial-groups-investable-universe|listed financial groups investable universe]] と併せて読むこと。

## TL;DR

日本の上場企業は、為替（USD・EUR・RMB ほかに対する JPY エクスポージャー）、金利（変動金利債務・スワップ・エクスポージャー）、コモディティ（エネルギー・金属・農産物）リスクを対象とする正式なヘッジ方針を運用している。ヘッジ比率の決定は、取締役会承認のヘッジ方針、エクスポージャーのテナー・プロファイル、IFRS 9 ／ JGAAP のもとでのヘッジ会計適格性、デリバティブコストとナチュラルヘッジの利用可能性、組込デリバティブの考慮事項に依存する。大手商社（[[financial-conglomerates/mitsubishi-corp|Mitsubishi Corp]]、[[financial-conglomerates/mitsui-co|Mitsui & Co]]、[[financial-conglomerates/itochu-corp|Itochu Corp]]）や大手製造業は、高度な複数通貨・複数コモディティのヘッジプログラムを運用している。メガバンク（[[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMFG]]、[[megabanks/mizuho-fg|Mizuho FG]]）が支配的なヘッジ・カウンターパーティである。

## ヘッジ方針の枠組み

| 層 | 典型的な構造 |
|---|---|
| 取締役会方針 | 取締役会が承認するリスク管理方針。ヘッジの目的、商品、カウンターパーティ、限度額 |
| 財務方針 | 詳細なヘッジ比率目標、テナー・バケット、キャッシュフローヘッジ指定ルール |
| リスク委員会 | エクスポージャー、ヘッジ有効性、カウンターパーティ・エクスポージャーの定期的レビュー |
| ヘッジ会計文書 | IFRS 9 ／ JGAAP 準拠の指定、有効性テスト、ヘッジ比率の定義 |
| 報告 | 四半期ごとの取締役会／委員会報告、年次の有価証券報告書開示 |

開示は、有価証券報告書の金融商品関連注記、統合報告書、リスク管理セクションに見られる。

### エクスポージャーの種類

| エクスポージャー | 源泉 |
|---|---|
| 取引エクスポージャー | 外貨建ての債権／債務 |
| 換算エクスポージャー | 外国子会社の貸借対照表の換算 |
| 経済的エクスポージャー | 外貨建ての将来の収益／費用フロー |
| 純投資エクスポージャー | 外国事業に対する純資本 |

### 典型的なヘッジ比率のフィールド

| バケット | 典型的なヘッジ手法 |
|---|---|
| 0～3 か月 | 多くの場合、為替予約またはナチュラルヘッジで全額ヘッジ |
| 3～12 か月 | 確定受注／契約済みフローに対する高比率ヘッジ |
| 12～36 か月 | フォワード、オプション、またはゼロコスト・カラーを用いた部分ヘッジ |
| 36か月以上 | より低いヘッジ比率。一部の企業は特定プロジェクト向けに長期スワップを使用 |
| 換算 | 多くの場合、未ヘッジ、または純投資ヘッジ指定により部分的にヘッジ |

ヘッジ比率は取締役会方針の変数である。JPY コスト／ USD 収益の製品を輸出する製造業（自動車、電子機器）は、予想収益の一部を頻繁にヘッジする。輸入業者（エネルギー、食品）は確定購入注文をヘッジする。

### 商品の選定

| 商品 | 用途 |
|---|---|
| 為替予約 | 最も一般的。特定の日について為替レートを固定する |
| 為替オプション | アップサイドを保持しつつヘッジを提供。プレミアムコストあり |
| 為替スワップ／通貨スワップ | 資金調達側のヘッジ。JPY 負債を USD に、またはその逆に転換する |
| ゼロコスト・カラー | 合意したストライクでの買いプット＋売りコールの組合せ。プレミアムゼロ |
| カレンシー・オーバーレイ | ポートフォリオ・レベルの通貨エクスポージャー管理 |
| ナチュラルヘッジ | 外貨建て収益を外貨建て費用／債務とマッチさせる |

通貨スワップは、外国子会社の資金調達のために JPY 債券の調達資金を USD にスワップする目的で、JPY 発行体の多国籍企業に多用される。

### エクスポージャーの種類

| エクスポージャー | 源泉 |
|---|---|
| 変動金利債務 | TONA 基準の JPY ローン、LIBOR 代替の USD ／ EUR ローン |
| 変動金利リース | IFRS 16 リース会計の変動部分 |
| 年金負債 | 割引率感応度 |
| 債券借換 | 発行前のパイプラインヘッジ |
| 投資ポートフォリオ | 保険／財務 ALM |

### 典型的なヘッジ商品

| 商品 | 用途 |
|---|---|
| 金利スワップ（IRS） | 変動を固定に転換（ペイ・フィックス・スワップ）、またはその逆 |
| 通貨金利スワップ（CCIRS） | 通貨と金利を組み合わせたスワップ |
| キャップ／フロア | トリガー上限／下限を超える任意の金利保護 |
| カラー | 買いキャップ＋売りフロアの組合せ |
| ボンドフォワード／トレジャリーロック | 債券プライシング前に利回りを固定 |
| スワップション | 将来のスワップに対するオプション |

### TONA 移行

JPY-LIBOR 廃止後、TONA（無担保コール O/N 物レート、日本銀行が算出）が JPY 変動金利エクスポージャーの主要なリスクフリー・ベンチマークである。企業の変動金利ローンおよび大半の新規スワップは TONA 基準の複利を参照する。レガシーの LIBOR 連動エクスポージャーは、ISDA 2020 IBOR フォールバック・プロトコルおよび同等の JSDA 国内慣行のもとで定義されたフォールバック文言を使用する。

## IFRS 9

のもとでのヘッジ会計

IFRS 9 は、IAS 39に代わる原則主義のヘッジ会計枠組みを導入した。主要なフィールド：

| フィールド | IFRS 9 の取扱い |
|---|---|
| 適格性 | より広範なヘッジ対象およびヘッジ手段が許容される |
| 有効性 | 経済的関係の定性的／定量的評価。固定的な 80～125% ルールなし |
| ヘッジ比率 | リスク管理で実際に用いられる比率を反映 |
| ヘッジ会計の類型 | 公正価値ヘッジ、キャッシュフローヘッジ、純投資ヘッジ |
| 文書化 | 開始時の指定文書が必須 |
| リバランス | ヘッジ比率がドリフトしても経済的関係が継続する場合に許容 |
| 中止 | 理由なき任意の中止はもはや認められない。リスク管理目的の変更が必要 |
| オプションの時間価値 | ヘッジコストの概念。OCI に繰り延べ |
| フォワード・ポイント | フォワードレート・ヘッジについてヘッジコストを OCI に繰り延べ |

### キャッシュフローヘッジの仕組み

| ステップ | 取扱い |
|---|---|
| 予定取引を指定（例：USD 収益） | ヘッジ手段：USD を売る為替予約 |
| 有効部分 | 損益をキャッシュフローヘッジ準備金（OCI）に繰り延べ |
| 振替 | ヘッジ対象取引が発生したとき、OCI を P&L にリサイクル |
| 非有効部分 | 直ちに P&L に認識 |

### 公正価値ヘッジの仕組み

| ステップ | 取扱い |
|---|---|
| 認識済みの資産／負債を指定（例：固定金利債券） | ヘッジ手段：ペイ・フィックス IRS |
| 両項目を公正価値で再測定 | 変動が P&L に流れる |
| 純効果 | 公正価値の変動を相殺 |

### 純投資ヘッジの仕組み

| ステップ | 取扱い |
|---|---|
| 外国事業に対する純投資を指定 | ヘッジ手段：外貨建て借入またはフォワード |
| 有効部分 | OCI 内の CTA（累積換算調整）準備金に繰り延べ |
| 振替 | 外国事業を処分したとき、CTA を P&L にリサイクル |

## JGAAP のもとでのヘッジ会計

日本基準のヘッジ会計は、IFRS と概念的に整合しつつも適用範囲・詳細に技術的差異を残す ASB ／ FASF のガイダンスに従う。

| フィールド | JGAAP の取扱い |
|---|---|
| 主要カテゴリー | 繰延ヘッジ会計および時価ヘッジ会計 |
| 特例処理 | 厳格な要件を満たす金利スワップに適用可能。スワップの公正価値は別個に認識されない |
| 振当処理 | 為替ヘッジに適用可能。ヘッジ対象はヘッジレートで記録される |
| 有効性 | 歴史的には所定の比率バンドによる定量テスト。原則主義への改定が進行中 |
| 文書化 | 開始時に必要 |
| 中止 | 文書化された理由により許容 |

IRS の特例処理と為替予約の振当処理は、適格ヘッジについて P&L のボラティリティを低減する、日本特有の一般的な簡便法である。

## 組込デリバティブの開示

IFRS 9, のもとでは、ホストとなる金融負債に組み込まれたデリバティブは特定の区分ルールに従う。日本企業の文脈における一般的な組込デリバティブ：

| 種類 | 例 |
|---|---|
| 株式転換オプション | [[finance/japan-convertible-bond-mechanics|Convertible bond]] の組込転換権 |
| コール／プットオプション | 債券の早期償還権 |
| インデックス連動クーポン | 為替、株価指数、コモディティ、インフレに連動するクーポン |
| 外貨建てキャッシュフロー | 機能通貨以外で表示される債券 |
| インデックス連動元本 | インフレ連動またはコモディティ連動の元本 |

区分ルールでは、組込デリバティブがホスト契約と密接に関連しておらず、複合金融商品が公正価値を通じて P&L で測定されておらず、かつ組込デリバティブが独立したデリバティブの定義を満たす場合には、当該組込デリバティブをデリバティブとして別個に会計処理することが求められる。

日本企業が発行する転換社債については、株式転換権は、自社株式の現物総額決済により決済され、フィックスト・フォー・フィックスト基準を満たす場合、通常は（デリバティブではなく）資本として扱われる。これは IAS 32 ／ IFRS 9 のもとでの「自己資本」例外であり、CB 会計に決定的に重要である ── [[finance/japan-convertible-bond-mechanics|convertible bond mechanics]] を参照。

### 商社のコモディティヘッジ

商社は現物コモディティ（エネルギー、金属、穀物、ソフトコモディティ）を取引し、高度なコモディティ・デリバティブ・ブックを運用している。

| グループ | 公開開示の情報源 |
|---|---|
| [[financial-conglomerates/mitsubishi-corp|Mitsubishi Corp]] | 年次有価証券報告書。コモディティ・エクスポージャーとヘッジ比率の記述 |
| [[financial-conglomerates/mitsui-co|Mitsui & Co]] | 年次有価証券報告書。エネルギー／金属エクスポージャー |
| [[financial-conglomerates/itochu-corp|Itochu Corp]] | 年次有価証券報告書。資源／非資源セグメントのエクスポージャー |

コモディティのヘッジ手段には、取引所上場先物（CME、ICE、TOCOM、LME、SHFE）、OTC スワップ、オプション、および対をなす買い／売り契約を通じた現物ナチュラルヘッジが含まれる。

### 製造業のコモディティヘッジ

| セクター | コモディティ・エクスポージャー | 典型的なヘッジ |
|---|---|---|
| 自動車 | 鋼材、アルミ、銅、パラジウム、リチウム、レアアース | 長期供給契約＋選択的な先物ヘッジ |
| 電子機器 | 銅、金、レアメタル、エネルギー | サプライヤー契約＋選択的なヘッジ |
| 化学 | 原油、ナフサ、ガス | 原油先物、ナフサ・スワップ |
| 鉄鋼 | 鉄鉱石、原料炭、スクラップ | 長期契約、随時のスワップ |
| 食品／醸造 | 穀物、砂糖、ホップ、包材 | 先渡購入、取引所上場先物 |
| エネルギー／公益 | LNG、石油、石炭、電力 | 長期 LNG 契約、先物、OTC スワップ |

大規模産業需要家のエネルギー調達は、複数年の供給契約、ヘッジ、貯蔵戦略を伴う専門機能として別個に運営されている。

## ヘッジ・カウンターパーティの選定

| カウンターパーティ | 役割 |
|---|---|
| [[megabanks/mufg|MUFG]] ／ MUFG 銀行 | 日本企業向けの支配的な為替／ IRS カウンターパーティ |
| [[megabanks/smfg|SMFG]] ／ SMBC | 支配的な為替／ IRS カウンターパーティ |
| [[megabanks/mizuho-fg|Mizuho FG]] ／みずほ銀行 | 支配的な為替／ IRS カウンターパーティ |
| 信託銀行（SMTB、MUFJ Trust） | 専門的なヘッジ／カストディ／ ALM |
| グローバル銀行 | クロスボーダー、エキゾチック、大型想定元本のヘッジ |
| 取引所清算 | TOCOM、JSCC、OSE 上場デリバティブ |
| コモディティ取引所 | コモディティヘッジ向けの CME ／ ICE ／ LME ／ SHFE |

カウンターパーティ・エクスポージャーは通常、カウンターパーティの信用格付、想定元本上限、CSA 担保化により財務方針のもとで制限される。クレジット・サポート・アネックス（CSA）担保化は、大型想定元本の相対 OTC デリバティブにおいて標準的である。

## 開示の場面

| 場面 | 文書 |
|---|---|
| 有価証券報告書の金融商品関連注記 | 年次。公正価値開示、ヘッジ指定、カウンターパーティ・リスク、感応度 |
| 四半期報告書 | 重要な変更に関する更新 |
| 統合報告書のリスク管理セクション | ヘッジ方針および結果に関する記述 |
| TDnet | 開示基準を満たした場合の重要なデリバティブ損益の開示 |
| 取締役会／委員会報告 | 内部のヘッジ有効性報告 |

[[finance/japan-fair-disclosure-and-insider-trading-controls|Fair disclosure and insider trading controls]] は、株価を動かしうる重要なヘッジ情報に適用される。

## 発行前の債券ヘッジ

日本企業が外貨建て債券の発行を計画する場合、発行前ヘッジは通常、金利リスク（トレジャリーロックまたはフォワードスターティング・スワップ）と執行通貨リスクをカバーする。発行後は、資金使途に応じて、通貨スワップにより外貨建ての調達資金を JPY に（またはその逆に）スワップすることがある。これは、M&A 資金調達のための [[finance/japan-acquisition-finance|Japan acquisition finance]]、および CB がヘッジ・オーバーレイと組み合わされる [[finance/japan-convertible-bond-mechanics|convertible bond]] ヘッジとの決定的な接点である。

## アクティビストおよび投資家の精査

ヘッジ方針は、以下の場合に折に触れてアクティビストの論点となる：

- ヘッジ損失が重要な P&L 項目となる場合。
- 未ヘッジの為替エクスポージャーが報告利益のボラティリティを生む場合。
- コモディティヘッジまたは投機の損失が公の不祥事となる場合。
- ヘッジ会計の指定が可視的な OCI のボラティリティを生む場合。

アクティビストの要求と対応のルーティングについては [[finance/japan-activist-investor-playbook|activist playbook]] および [[finance/japan-shareholder-proposal-and-agm-voting-route|shareholder proposal route]] を参照。

## 関連

- [[finance/INDEX]]
- [[finance/japan-acquisition-finance]]
- [[finance/japan-leveraged-buyout-economics]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[finance/japan-convertible-bond-mechanics]]
- [[finance/japan-fair-disclosure-and-insider-trading-controls]]
- [[finance/japan-activist-investor-playbook]]
- [[finance/japan-shareholder-proposal-and-agm-voting-route]]
- [[finance/japan-large-shareholding-disclosure]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[finance/japan-ib-league-table]]
- [[finance/japan-tender-offer-process]]
- [[finance/japan-mbo-and-squeeze-out-process]]
- [[finance/cross-border-m-a-japan]]
- [[finance/multi-jurisdiction-identity-tax-leverage]]
- [[banking/regional-bank-consolidation-pattern]]
- [[securities/japan-underwriting-market-structure]]
- [[megabanks/mufg]]
- [[megabanks/smfg]]
- [[megabanks/mizuho-fg]]
- [[financial-conglomerates/mitsubishi-corp]]
- [[financial-conglomerates/mitsui-co]]
- [[financial-conglomerates/itochu-corp]]
- [[financial-regulators/dbj]]
- [[INDEX|FinWiki index]]

## 出典

- FSA：コーポレートガバナンス・コードのハブ。
- JPX：TDnet 適時開示の概要および上場会社検索。
- EDINET：有価証券報告書。
- 日本銀行：TONA ／ TONIA 参照レート統計。
- 財務省：外国為替および国際政策の統計。
- 経済産業省：貿易・産業統計。
- ASB（企業会計基準委員会）：ヘッジ会計のガイダンス。
