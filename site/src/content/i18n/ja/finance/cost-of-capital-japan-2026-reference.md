---
source: finance/cost-of-capital-japan-2026-reference
source_hash: 116989d16e686c58
lang: ja
status: machine
fidelity: ok
title: "日本の資本コスト 2026 リファレンス"
translated_at: 2026-06-02T13:21:55.036Z
---

# 日本の資本コスト 2026 リファレンス

## 要約

資本コストは、あらゆる [[finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework|DCF valuation]] において最もレバレッジの効く入力値であり、[[finance/japan-leveraged-buyout-economics|LBO economics]]、[[real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework|real-estate IRR underwriting]]、[[finance/japan-acquisition-finance|acquisition finance pricing]] の構造的なアンカーである。2026, 時点の日本について、構造的入力は次の通り。(1) 10年 JGB 利回り（おおむね 1.0-1.5% クラス）を基準とするリスクフリー参照レート。JPY LIBOR 停止後は、短期側の参照として TONA ベースの OIS を用いる。(2) 約 5-6% の歴史的 ERP と、BoJ の NIRP 終了後に圧縮してきたインプライド ERP。(3) TOPIX に沿ったベータ取得と日本固有のセクター調整。(4) 日本のソブリン格付けと準備通貨ステータスを踏まえた小幅なカントリーリスク・プレミアム。(5) TSE Prime 上場会社の WACC は大企業で通常 5-8%、中堅企業で 6-10% のレンジ。(6) BoJ の 2024 後フロア・システムが短期参照レートを実質的に押し上げ、変動金利調達コストへ波及している。このページは方法論のリファレンスであり、投資助言でも特定会社の WACC でもない。

## ウィキ上の位置づけ

このページは [[finance/INDEX|finance domain]] に位置づけられる。バリュエーションにおける割引率の役割は [[finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework|DCF / multiples / NAV framework]]、負債コストの価格付けは [[finance/japan-leveraged-buyout-economics|Japan LBO economics]]、資本構成の価格参照は [[finance/japan-acquisition-finance|Japan acquisition finance]]、不動産側の類似概念は [[real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework|cap-rate / NOI / IRR real-estate framework]]、短期参照レートは [[money-market/japan-money-market|Japan money market]]、政策金利の配管は [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|BoJ post-2024 floor system]]、カーブ構築レイヤーは [[derivatives/ois-tona-curve|OIS TONA curve]] と併読する。バリュエーション・フレームワークの文脈は [[real-estate-finance/japan-real-estate-appraisal-methodology|Japan real-estate appraisal methodology]] と [[finance/real-options-valuation-japan-applications|real options valuation Japan applications]] に接続する。

## 資本コスト — 構造式

WACC = (E/V) × Re + (D/V) × Rd × (1 − Tc)

ここで:
- Re = 株主資本コスト = Rf + β × ERP +（カントリーリスク）+（サイズ / ガバナンス・プレミアム）
- Rd = 負債コスト = Rf + クレジット・スプレッド
- Tc = 実効法人税率
- E, D, V = 株式、負債、総資本の市場価値

日本では、各入力値に米国や欧州の参照フレームワークとは異なる構造的特徴がある。

### 長期側（10年 JGB）

| 読み取り項目 | 2026 クラス |
|---|---|
| 10年 JGB 利回り | 約 1.0-1.5% のレンジ。MOF / BoJ のデータページで確認 |
| 出所 | MOF JGB 入札カレンダー、BoJ 統計 |
| 用途 | 長期 DCF、ターミナルバリュー割引率、プロジェクトファイナンスのシニア価格付け |

NIRP 後の正常化により、10年 JGB は NIRP 期のほぼゼロの底値から大きく上昇した。単一時点よりも経路が重要であり、ある時点の 10年に固定した割引率モデルは、四半期内でも古い評価を生み得る。

### 短期側（TONA / OIS）

| 読み取り項目 | 2026 クラス |
|---|---|
| TONA (Tokyo Overnight Average Rate) | JPY LIBOR 停止後の変動金利 JPY 向けベンチマーク |
| OIS TONA カーブ | フォワード金利期待の構築に用いる。[[derivatives/ois-tona-curve|OIS TONA curve]] を参照 |
| 用途 | 変動金利ローン価格付け、短期スワップ割引、LBO シニア・マージン参照 |

OIS TONA カーブは短期金利構築において JPY LIBOR を置き換えた。シニア LBO ローンと変動金利の企業融資枠は、TONA + マージンを参照する。

### 中期 / ベリー

3年-7年の割引率構築では、JGB 利回りカーブの補間または同等の OIS カーブ・ポイントを用いる。実務家の多くは、より短期のキャッシュフローを評価する場合でも、簡便性のため 10年を単一のリスクフリー・アンカーとして使う。

### 歴史的 ERP

| 方法論 | 読み取り項目 |
|---|---|
| 長期の算術平均超過リターン | 日本株式対 JGB の歴史的超過リターンは開始時点により大きく変わる。注意点付きで長期では約 5-7% クラス |
| 長期の幾何平均 | 算術平均より低く、しばしば 1-2pp 低い |
| ローリング・ウィンドウ | バブル期 / バブル後期を含めるかに非常に敏感 |

日本のヒストリカル ERP は構造的に議論が多い。1990 後のバブル調整が長期推計を歪めるためである。日本のフェアネス・オピニオン実務では、作業用のヒストリカル ERP として 5-6% を用いることが多い。

### インプライド ERP

インプライド ERP は、指数価格と予想配当またはフリーキャッシュフローの現在価値を一致させる割引率を解くことで導かれる。

| 読み取り項目 | 2026 クラス |
|---|---|
| TOPIX 予想 EPS からのインプライド ERP | BoJ の NIRP 終了後に圧縮。4-5% クラスが 2026 半ばでは妥当 |
| 検証可能性 | BoJ データ + JPX 指数予想利益を用いてアナリストが再計算可能 |
| 用途 | 将来志向の割引率構築、四半期末更新 |

インプライド ERP と歴史的 ERP はしばしば 100-200bp 乖離する。実務家は通常、一方をアンカーにし、もう一方を感応度テストする。

## ベータの出所

| 出所 | 読み取り項目 |
|---|---|
| 市場指数としての TOPIX | 日本株ベータ回帰で標準的に用いられる市場指数 |
| 回帰ウィンドウ | 通常は月次 5 年または週次 2 年。どちらも一般的 |
| Bloomberg / Refinitiv 調整ベータ | 標準的なデータ端末ソース。Blume 公式（0.67 × 生ベータ + 0.33 × 1.0）で調整 |
| Damodaran セクター・ベータ | [[finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework|DCF framework]] 参照値と照合する。非上場 / IPO 前評価で有用 |
| ボトムアップ・ベータ | ピアセットの中央値アセット・ベータから再レバレッジ。不公開対象会社では好まれる |

### 日本固有のベータ論点

- 持ち合い効果により、共通ショックで相関する持分が一緒に動くため、測定ベータが低く出ることがある
- TOPIX は銀行、自動車、電機などへのセクター集中があり、S&P 500  ほど分散されていないため、セクター傾斜が重要になる
- 外国人投資家フローは、転換点付近の短期ベータを増幅または抑制し得る
- 小型上場会社のベータはノイズが大きく信頼性が低いため、ボトムアップ推定が好まれる

## カントリーリスク・プレミアム

| 読み取り項目 | クラス |
|---|---|
| ソブリン格付け | 日本は高位投資適格 |
| 準備通貨ステータス | 円は主要準備通貨の一つ |
| カントリーリスク・プレミアム | 多くの実務フレームワークでは日本は最小からゼロ |
| ソブリン CDS | 利用可能だが取引は薄い |

新興国評価と異なり、日本では通常、カントリーリスク・プレミアムを別途適用しない。例外は、機関内の一貫性のため非米国ターゲットすべてに一律のカントリーリスク加算を適用する一部のクロスボーダー M&A フレームワークである。

## TSE Prime 大型株 WACC レンジ（目安）

| セクター | 目安 WACC クラス（2026） |
|---|---|
| メガバンク（[[megabanks/mufg|MUFG]] / [[megabanks/smfg|SMFG]] / [[megabanks/mizuho-fg|Mizuho FG]]） | 株式側 7-9% / グループ混合 4-6% |
| 総合商社（[[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding-heavy]]） | 6-8% |
| 通信（例: NTT、KDDI） | 5-7% |
| 上場不動産デベロッパー | 5-7% |
| 成熟した大型製造業 | 6-8% |
| TSE Prime 中型株（中央値） | 7-10% |
| TSE Standard / 小型株 | 8-12%（非流動性 / サイズ・プレミアム） |

これらのレンジはクラス記述であり、会社固有の値ではない。対象企業の資本構成、ベータ、クレジット・スプレッド、実効税率で必ず検証する。

## 中堅 / 小型株調整

| 調整項目 | 方向 |
|---|---|
| サイズ・プレミアム | 小型上場銘柄に +1.0-3.0pp（学術文献ベース、サンプル期間に依存） |
| 非流動性プレミアム | 取引の薄い銘柄に +0.5-2.0pp |
| 支配株主構造 | 少数株主がガバナンス・リスクに直面する場合 +0.5-1.5pp |
| 単一事業集中 | 変動的。ベータまたは非対称シナリオ加重に反映 |
| 情報不透明性 | 変動的。より高いインプライド ERP に反映 |

日本の小型株サイズ・プレミアムの実証結果は一貫しておらず、強いコンセンサスがないまま実務では 1-3pp のレンジを用いることがある。非上場対象会社では、割引率ではなく価値そのものに非上場会社の非流動性ディスカウント（多くは 20-30%）を適用する。

## 負債コスト

負債コストは、シニア、劣後、その他の有利子負債の税引後加重コストである。

| レイヤー | 2026 価格参照 |
|---|---|
| メガバンクのシニア企業ローン | TONA + マージン。投資適格マージンは 2022, 前に圧縮し、2022 後に拡大 |
| 公募債（投資適格） | JGB + クレジット・スプレッド。NIRP 後正常化で拡大 |
| LBO シニアローン | TONA + マージン。プライシング区分は [[finance/japan-leveraged-buyout-economics|LBO economics]] を参照 |
| メザニン | オールインで一桁台半ばから後半の利回り |
| 劣後資本（銀行 / 保険会社） | 損失吸収 / 規制資本分類のため高いクーポン |

実効税率は、日本の法定法人税率約 30% を対象企業の実効税率に合わせて調整して適用する。

## 2024 後の BoJ フロア・システムの影響

[[money-market/boj-post-2024-floor-system-complementary-deposit-facility|BoJ post-2024 floor system]] は短期側の調達コストを構造的に押し上げた。

| チャネル | 影響 |
|---|---|
| 変動金利ローンのマージン基準 | TONA アンカー。フロア・システムが TONA をほぼゼロから押し上げた |
| シニア LBO 価格付け | 変動金利ベースが上昇し、フロア上昇に伴いシニア負債の総コストも上昇 |
| 銀行調達コスト | 預金金利競争と調達コストの正常化 |
| 不動産ファイナンス | [[real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework|cap-rate / NOI / IRR framework]] 引受参照が上昇 |
| 企業 WACC | 負債コスト要素が小幅に上方シフト |

この金利フロア上昇は、WACC 式と OIS カーブのフォワード金利期待を通じて複合的に効く。10年 JGB アンカーは YCC 期のピン留めから大きく上昇したが、経路は非線形で政策に依存する。

## バリュエーションへの帰結

WACC が 100bp 上昇すると、ターミナルバリュー比重にもよるが、長期 DCF の株式価値は通常 15-25% 低下する。[[real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework|cap-rate sensitivity]] では、キャップレートが 25bp 動くだけで NAV が 5-10% 変動し得る。したがって NIRP 後正常化の経路は、2026の日本企業・不動産分析において最もレバレッジの効く評価論点である。

## 関連項目

- [[finance/INDEX]]
- [[finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework]]
- [[finance/real-options-valuation-japan-applications]]
- [[finance/esg-sustainability-cross-domain-framework]]
- [[real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework]]
- [[finance/japan-leveraged-buyout-economics]]
- [[finance/japan-acquisition-finance]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[real-estate-finance/japan-real-estate-appraisal-methodology]]
- [[real-estate-finance/real-estate-cap-rate-compression-2026]]
- [[money-market/japan-money-market]]
- [[money-market/boj-post-2024-floor-system-complementary-deposit-facility]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/japan-irs-market]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[insurance/economic-value-based-solvency]]
- [[INDEX|FinWiki index]]

## 出典

- BoJ: 金利、利回り、フロア・システム政策データ、金融システムレポート。
- 財務省: JGB 発行予定と入札結果。
- JPX: TOPIX 指数と Prime 市場のガバナンス・エンゲージメント関連公表資料。
- FSA: 規制フレームワークと ICS / EVS ガイダンス。
- Damodaran（NYU Stern）: 日本固有データセットを含む ERP とベータ方法論の参照資料。
