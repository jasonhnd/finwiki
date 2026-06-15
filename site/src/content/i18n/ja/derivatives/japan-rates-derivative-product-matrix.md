---
source: derivatives/japan-rates-derivative-product-matrix
source_hash: 4066057b3ccbd6aa
lang: ja
status: machine
fidelity: ok
title: "日本金利デリバティブ・プロダクトマトリクス"
translated_at: 2026-06-15T03:48:21.840Z
---

# 日本金利デリバティブ・プロダクトマトリクス

## 要点

日本の円金利デリバティブ複合体は、**TIBOR / TONA を参照する金利スワップ (IRS)、TONA を参照するオーバーナイト・インデックス・スワップ (OIS)、JGB 先物（10 年標準、5 年、20 年超長期、10 年ミニ）、インフレスワップの原資産となる JGB 物価連動債 (JGBi)、スワプション（円 IRS のオプション）、CMS（コンスタント・マチュリティ・スワップ）、インフレスワップ（CPI 連動）、および円-米ドル cross-currency basis swap (CCBS)** にまたがる。これらのプロダクトは、想定元本残高（2024 H2 までの BIS 半期 OTC デリバティブ統計を参照）、CCP 清算（円 IRS は JSCC；グローバルな円 IRS は LCH SwapClear；JGB 先物は JSCC）、テナー深度、市場参加者構成、生保のヘッジ用途、ディーラー銀行の収益貢献において異なる。本マトリクスは公開検証可能な各軸を集約し、カーブ・ヘッジ・カウンターパーティの問いが立てられる前に、任意の単一の円金利デリバティブページをより広範な金利デリバティブ・アーキテクチャの中に位置付けられるようにする。

## Wiki 上の位置

本項目は [[derivatives/INDEX|derivatives index]] に属する。これは、ヘッドラインの OTC スワップレーンとして [[derivatives/japan-irs-market|Japan yen IRS market]] と、ディスカウントカーブおよび RFR レーンとして [[derivatives/ois-tona-curve|OIS / TONA curve]] と、取引所上場のヘッジレーンとして [[derivatives/jgb-futures-curve|JGB futures curve]] と、cross-currency の交差点として [[derivatives/cross-currency-basis-swap-japan|yen-USD CCBS]] と、IRS オプションレーンとして [[derivatives/japan-swaption-market|Japan swaption market]] と、スロープカーブ・プロダクトとして [[derivatives/japan-cms-constant-maturity-swap|Japan CMS]] と、CPI 連動ヘッジレーンとして [[derivatives/japan-inflation-swap|Japan inflation swap]] と、現物側のインフレ連動原資産として [[derivatives/jgb-inflation-linked-bond-jgbi|JGBi]] と組み合わせて読む。現物市場は [[money-market/INDEX|money-market index]] であり、コーポレートのエンドユーザー側は [[finance/japan-corporate-fx-and-rate-hedge-policy|corporate FX and rate hedge policy]] である。

## 金利デリバティブ・プロダクトマトリクスが重要である理由

「日本の金利デリバティブ」という単一のフレーズは、清算venue、想定元本規模、参加者構成、エンドユーザーのユースケースがプロダクトごとに異なるという事実を覆い隠す。分類なしでは：

- 浮動参照（TIBOR vs TONA）とディスカウントカーブの役割が異なるにもかかわらず、円 IRS は円 OIS のように見える；
- 一方は取引所上場で現物決済され、他方は OTC でネット決済されるにもかかわらず、JGB 先物はスワップのように見える；
- 原資産 IRS カーブ上のオプション性レイヤーであり、特徴的な生保需要を持つにもかかわらず、スワプションはバニラオプションのように見える；
- 円と米ドルのターム調達を結び付ける調達裁定の商品であるにもかかわらず、CCBS は FX スワップのように見える；
- 一方は OTC デリバティブで他方は現物債券市場であるにもかかわらず、インフレスワップと JGBi は互換であるかのように見える。

このマトリクスは各プロダクトを所定の位置に置き、任意の単一のデリバティブページを、その代替ヘッジルートまたはその現物市場の原資産に照らして読めるようにする。

## プロダクト 1  —— 円 IRS（TIBOR フローティング）

- **商品タイプ。** TIBOR（1M、3M、または 6M）を浮動参照とする OTC 固定対変動スワップ；標準的な JPY ACT/365  日数計算。[[derivatives/japan-irs-market|Japan yen IRS market]] を参照。
- **想定元本残高。** BIS 半期 OTC デリバティブ統計において JPY 単一通貨 IRS 総想定元本の一構成要素として報告される；JPY IRS 想定元本は半期締めで USD 換算グロスで数十兆に集計される。TIBOR vs TONA のシェア配分は別途公表ではなく運用上のものである。
- **CCP 清算。** FIEA 清算義務の下、国内ディーラー間フローは JSCC で清算；主要グローバルディーラーが関与するクロスボーダーフローは LCH SwapClear で清算。
- **テナー深度。** 1Y、2Y、3Y、5Y、7Y、10Y、15Y、20Y、30Y が最も流動的なポイント；生保ヘッジ向けに 40Y まで。
- **市場参加者。** メガバンク財務部（ディーラー側）、証券会社の金利デスク、地域銀行の ALM、生保（長端ペイフィックスヘッジ）、外国銀行、ヘッジファンド、ローンヘッジのためのコーポレート・エンドユーザー。
- **生保のヘッジ用途。** 多い —— 長端 TIBOR / 混合参照 IRS は、固定金利負債キャッシュフローに対する生保の典型的な ALM ヘッジの一つである。
- **ディーラー銀行の収益貢献。** メガバンク証券子会社（MUFG MUMS、SMBC Nikko、Mizuho Securities、加えて Nomura と Daiwa）の金利ビジネスにおけるトップ貢献者の一角。

## プロダクト 2  —— 円 OIS（TONA）

- **商品タイプ。** TONA（Tokyo Overnight Average Rate）の後決め複利を浮動参照とする OTC 固定対変動スワップ；典型的なポスト LIBOR の円オーバーナイト RFR。[[derivatives/ois-tona-curve|OIS / TONA curve]] を参照。
- **想定元本残高。** BIS 半期 OTC デリバティブ統計における JPY IRS 総想定元本のサブセット；TONA OIS のシェアは LIBOR 移行後に実質的に増大し、新規発行の標準として拡大を続けている。
- **CCP 清算。** TIBOR IRS と同じ義務構造の下、JSCC および LCH SwapClear で清算。
- **テナー深度。** フロントエンドで最も流動的（1W、1M、3M、6M、1Y、2Y、3Y）；ディスカウントカーブ参照として 30Y まで取引もされる。ディスカウントカーブの役割は、OIS が主要な取引でない場合でも参照されることを意味する。
- **市場参加者。** メガバンク財務部、ディーラーの金利デスク、ヘッジファンドおよびマクロファンド、アセットマネージャー、外国銀行、短テナーヘッジのためのコーポレート。
- **生保のヘッジ用途。** 間接的 —— OIS は生保の ALM および IRS 評価に用いられるディスカウントカーブを設定する；直接的な OIS ヘッジは短端でより一般的。
- **ディーラー銀行の収益貢献。** 実質的；OIS レーンはポスト LIBOR のディスカウントカーブの役割をもって清算 IRS 市場を下支えする。

## プロダクト 3  —— JGB 先物（10Y 標準）

- **商品タイプ。** 10 年想定元本 JGB を原資産とする取引所上場の現物決済先物；価格ベースで最も取引される円金利デリバティブ。[[derivatives/jgb-futures-curve|JGB futures curve]] を参照。
- **想定元本残高。** 建玉はフロント限月で数十万枚の契約で測定される；契約想定元本は 1 契約あたり額面 ¥100 million。日次売買高は 10Y 標準に集中する。
- **CCP 清算。** JSCC 強制。
- **テナー深度。** 10 年想定元本；CTD バスケットは適格 JGB 銘柄から構成される。10Y 標準、10Y ミニ、5Y、20Y 超長期の各契約は異なる流動性水準で取引される。
- **市場参加者。** メガバンク財務部（ウェアハウス）、証券会社のトレーディングデスク、外国銀行、ヘッジファンドおよびマクロファンド、生保（随時のヘッジ用途）、信託銀行。
- **生保のヘッジ用途。** 中程度 —— 先物は短期間のデュレーション調整に用いられる；JGB 先物の 10Y CTD アンカーを踏まえ、長端ヘッジはスワップと JGB 現物に傾く。
- **ディーラー銀行の収益貢献。** マーケットメイク、現物-先物 basis トレーディング、CTD ロールのポジショニングを通じて顕著。

## プロダクト 4  —— JGB 先物（5Y、20Y 超長期、10Y ミニ）

- **商品タイプ。** より短いおよびより長い想定元本テナーを原資産とする付随的な取引所上場 JGB 先物に加え、十分の一サイズの 10Y ミニ。
- **想定元本残高。** 建玉は 10Y 標準より実質的に小さい；20Y 超長期の建玉は、長端リスクが再出現した QE 後期 / ポスト YCC 期に増大した。
- **CCP 清算。** JSCC 強制。
- **テナー深度。** 5Y、20Y、10Y ミニ。
- **市場参加者。** 生保（資産負債マッチングのため 20Y 超長期でより活発）、信託銀行、ディーラーのウェアハウス、より小規模なリテールおよび HFT（ミニにおいて）。
- **生保のヘッジ用途。** 20Y 超長期 JGB 先物は、現物 JGB および IRS とともに中長期デュレーションのオーバーレイに用いられる、保険会社にとって意味のあるヘッジ商品である。
- **ディーラー銀行の収益貢献。** 10Y 標準より低い；20Y / 5Y 契約はディーラーの ALM および裁定にとってニッチだが実在のフランチャイズを担う。

## プロダクト 5  —— JGB 物価連動債（JGBi）

- **商品タイプ。** 現物債券市場 —— それ自体がデリバティブではなくインフレデリバティブの原資産であり、インフレ-金利の交差点としてここに含める。JGBi は全国 CPI 除く生鮮食品指数に連動する MOF 発行のインフレ連動 JGB。[[derivatives/jgb-inflation-linked-bond-jgbi|JGBi]] を参照。
- **想定元本残高。** JGB 総残高のサブセット；名目 JGB と比べて小さいが、2013  の再発行以降に再活性化された。
- **CCP 清算。** JGB 現物決済は BoJ-NET 経由；JGB OTC 清算は該当する場合 JSCC で。
- **テナー深度。** 10 年の典型的な発行テナー。
- **市場参加者。** 生保、年金基金、アセットマネージャー、BoJ（歴史的および選択的な継続購入）、外国準備マネージャー、ヘッジファンド。
- **生保のヘッジ用途。** 直接的 —— 保険会社はインフレ連動またはインフレ感応的な負債の実質利回りエクスポージャーをヘッジするために JGBi を用いる。
- **ディーラー銀行の収益貢献。** 専門の金利デスク；ディーラーのフランチャイズは JGB プライマリーディーラー会社に集中。

## プロダクト 6  —— スワプション（円 IRS のオプション）

- **商品タイプ。** 将来のある日に原資産の円 IRS に入る権利を付与する OTC オプション（ヨーロピアンまたはバミューダンスタイル）；ペイヤー / レシーバー・スワプションの区別。[[derivatives/japan-swaption-market|Japan swaption market]] を参照。
- **想定元本残高。** 円スワプション想定元本は、BIS OTC デリバティブ統計において JPY 金利オプションの一構成要素として報告される。
- **CCP 清算。** 一部は JSCC / LCH で清算；オーダーメイドの行使価格 / テナーについては相当量の相対取引。
- **テナー深度。** 1Y、2Y、5Y、10Y の option-into-IRS テナーで最も流動的；長端スワプション（例えば 10Y into 20Y）は生保ヘッジに用いられる。
- **市場参加者。** 生保（金利保証特性をヘッジするためのレシーバー・スワプションの多用）、ディーラーのボラティリティデスク、ヘッジファンド（ボラ裁定）、コーポレート（ヘッジのヘッジまたはコーラブル債ヘッジのための随時のペイヤー・スワプション）。
- **生保のヘッジ用途。** 多い —— 日本の生保は、保証金利契約および ALM の凸性をヘッジしつつ、グローバルで長端の円レシーバー・スワプションの最大の買い手の一角である。
- **ディーラー銀行の収益貢献。** メガバンク証券子会社およびグローバルディーラーの金利ボラデスクにとって実質的；長端ボラサーフェスは意味のあるフランチャイズである。

## プロダクト 7  —— CMS（コンスタント・マチュリティ・スワップ）

- **商品タイプ。** 一方のレグがコンスタント・マチュリティ・スワップレート（例えば 10Y CMS）に対応する定期リセットレートを支払い、他方のレグが固定または浮動参照を支払う OTC スワップ。[[derivatives/japan-cms-constant-maturity-swap|Japan CMS]] を参照。
- **想定元本残高。** JPY IRS 総想定元本の専門的サブセット；ヘッドラインの BIS 集計では別途公表されない。
- **CCP 清算。** 標準化された場合は一部 JSCC / LCH で清算；オーダーメイド取引は相対。
- **テナー深度。** 参照が 5Y、10Y、または 20Y CMS の場合に最も流動的；取引テナーは 5Y から 30Y。
- **市場参加者。** 仕組債発行体（CMS 連動債）、ディーラーの金利デスク（ボラサーフェスおよび凸性調整）、ヘッジファンド、生保（カーブスロープヘッジ）。
- **生保のヘッジ用途。** 中程度 —— スワプションおよび IRS とともにカーブスロープおよび凸性のオーバーレイに用いられる。
- **ディーラー銀行の収益貢献。** ニッチ；CMS スプレッド商品（CMS スプレッドオプション、CMS スワップ）は仕組金利フランチャイズに位置する。

## プロダクト 8  —— インフレスワップ（CPI 連動）

- **商品タイプ。** 固定インフレ率を実現 CPI 指数と交換する OTC スワップ（日本ではゼロクーポン・インフレスワップが主流で、全国 CPI 除く生鮮食品を参照）。[[derivatives/japan-inflation-swap|Japan inflation swap]] を参照。
- **想定元本残高。** 名目 IRS より小さい；円インフレデリバティブ市場は円 IRS や OIS より実質的に流動性が低い。
- **CCP 清算。** 一部のインフレスワップ清算は LCH に存在；円インフレスワップ活動の大部分は相対。
- **テナー深度。** 最も流動的なのは 5Y、10Y；長端（20Y、30Y）は保険 / 年金のオーバーレイに用いられる。
- **市場参加者。** 生保、年金基金、アセットマネージャー、ディーラーの金利 / インフレデスク、ヘッジファンド、インフレ連動コストエクスポージャーを持つ随時のコーポレート・エンドユーザー。
- **生保のヘッジ用途。** 専門的 —— インフレ連動契約または年金債務を持つ保険会社は、JGBi とともにインフレスワップを用いる。
- **ディーラー銀行の収益貢献。** ニッチ；インフレデリバティブのフランチャイズは円では USD や EUR よりはるかに小さい。

## プロダクト 9  —— 円-米ドル cross-currency basis swap（CCBS）

- **商品タイプ。** 2 通貨（円と米ドル）で元本および変動金利キャッシュフローを交換し、basis spread（円レグ上の追加 bp）を価格とする OTC スワップ；典型的な円調達対米ドル調達の裁定商品。[[derivatives/cross-currency-basis-swap-japan|yen-USD CCBS]] および [[derivatives/yen-basis-swap-market|yen basis swap market]] を参照。
- **想定元本残高。** BIS 統計における円クロスカレンシー OTC デリバティブ総額の実質的な構成要素；四半期末の CCBS 活動は、日本の機関が米ドル調達をロールするにつれて拡大する。
- **CCP 清算。** 単一通貨 IRS と比べて CCBS の CCP 清算は限定的；大部分は相対のまま、相対担保および CSA の取り決めを伴う。
- **テナー深度。** 短端で 3M、6M、1Y；ターム端で 2Y、3Y、5Y、10Y。
- **市場参加者。** メガバンク財務部（米ドル調達の多用者）、生保（米ドル投資ヘッジ）、米ドル配分を持つアセットマネージャー、ディーラーの金利 / FX デスク、ドル流動性を供給する外国銀行。
- **生保のヘッジ用途。** 多い —— 日本の生保の大規模な米ドル債券および米ドルクレジットのポートフォリオは継続的な CCBS ヘッジを必要とし、CCBS に内包されるヘッジコストは保険業界の主要な P&L ドライバーである。
- **ディーラー銀行の収益貢献。** 円-米ドル調達コリドーで活動するメガバンク証券子会社およびグローバルディーラーにとって顕著；四半期末の CCBS プライシングは注視されるディーラー・フランチャイズのバロメーターである。

## クロスプロダクト比較マトリクス

| Dimension | Yen IRS (TIBOR) | Yen OIS (TONA) | JGB Fut 10Y | JGB Fut 5Y/20Y/mini | JGBi | Swaption | CMS | Inflation Swap | CCBS (¥/$) |
|---|---|---|---|---|---|---|---|---|---|
| **Instrument type** | OTC swap, fixed-vs-TIBOR | OTC swap, fixed-vs-TONA | Listed futures | Listed futures | Cash bond | OTC option on IRS | OTC swap referencing CMS rate | OTC swap, fixed-vs-CPI | OTC cross-currency swap |
| **Floating / variable reference** | 1M/3M/6M TIBOR | TONA compounded | JGB CTD price | JGB CTD price (each tenor) | All-Japan CPI ex-fresh-food | Underlying IRS | CMS yield | CPI | Yen FRN + USD FRN |
| **Notional outstanding reference** | BIS H2-2024: large share of total JPY IRS gross notional | BIS H2-2024: rapidly growing post-LIBOR share of total JPY IRS | JSCC / OSE OI: hundreds of thousands of contracts (front) | OSE OI: smaller than 10Y std | MOF JGBi: small share of total JGB outstanding | BIS H2-2024: JPY interest-rate options sub-aggregate | Specialist sub-aggregate | Specialist sub-aggregate | BIS H2-2024: meaningful share of yen-cross-currency OTC |
| **CCP clearing** | JSCC + LCH SwapClear | JSCC + LCH SwapClear | JSCC (mandatory) | JSCC (mandatory) | JSCC OTC where applicable | JSCC / LCH for standardized; bilateral for bespoke | JSCC / LCH for standardized; bilateral for bespoke | LCH partial; bulk bilateral | Limited CCP; bulk bilateral |
| **Tenor depth (liquid)** | 1Y–30Y; out to 40Y | 1W–10Y; up to 30Y | 10Y notional | 5Y, 20Y, 10Y mini | 10Y typical | 1Y, 2Y, 5Y, 10Y into IRS | 5Y, 10Y, 20Y CMS reference | 5Y, 10Y typical | 3M front through 10Y |
| **Megabank treasuries** | Heavy | Heavy | Heavy | Moderate | Moderate | Material | Moderate | Moderate | Heavy (USD funding) |
| **Securities-firm rates desks** | Heavy | Heavy | Heavy | Moderate | Moderate | Heavy | Moderate | Moderate | Heavy |
| **Life insurers** | Heavy (long-end pay-fix) | Indirect (discount curve) | Moderate | Heavy in 20Y super-long | Direct holder | Heavy (receiver swaption) | Moderate | Specialist | Heavy (USD-bond hedge) |
| **Hedge funds / macro** | Material | Material | Heavy | Material | Material | Material | Material | Specialist | Material |
| **Foreign banks** | Material | Material | Heavy | Material | Material | Material | Niche | Niche | Heavy |
| **Corporate end-user** | Loan-hedge | Short-tenor hedge | Limited | Limited | None directly | Callable-bond hedge | Niche | Niche | USD-revenue hedge |
| **Life-insurer hedging use** | Heavy | Indirect | Moderate | Heavy (20Y) | Direct | Heavy | Moderate | Specialist | Heavy |
| **Dealer-bank revenue role** | Top rates-business contributor | Material; post-LIBOR core | Significant via MM and basis trading | Lower than 10Y std | Specialist | Material vol-desk franchise | Niche | Niche | Significant in yen-USD corridor |

## このマトリクスの読み方

金利デリバティブ・プロダクトマトリクスは公開面のツールである。任意の単一のプロダクトページを読む際には：

1. **OTC vs 上場から始める。** OTC スワップ型プロダクト（IRS、OIS、スワプション、CMS、インフレスワップ、CCBS）は、該当する場合に CCP 清算のオーバーレイを伴うディーラー間およびディーラー対エンドユーザーの世界に存在する；上場 JGB 先物は取引所取引・JSCC 清算の世界に存在する。ヘッジの連関は境界を越える（例えば CTD basis トレード、現物-先物裁定）。
2. **浮動参照を確認する。** TIBOR vs TONA の移行は運用上複雑である；新規発行の JPY IRS は TONA に傾くが、TIBOR 参照 IRS は継続する。評価のためのディスカウントカーブ参照は OIS / TONA である。
3. **CCP venue を確認する。** JSCC は国内フローの円 IRS 清算で支配的；LCH SwapClear はクロスボーダーフローで支配的。両 venue は清算想定元本を別途報告する。JGB 先物は JSCC で清算。CCBS 清算は部分的。
4. **生保の列を確認する。** 日本の生保は円金利デリバティブ市場にとって異例に重要である —— 長端レシーバー・スワプション、20Y 超長期 JGB 先物、長端 IRS、米ドル債券ヘッジのための CCBS のすべてが、プライシングを形作る保険会社の需要を担う。
5. **ディーラー銀行のフランチャイズを確認する。** メガバンク証券子会社（MUMS、SMBC Nikko、Mizuho Securities）と主要な日本の証券会社（Nomura、Daiwa）に加えてグローバルディーラーがフランチャイズ層を形成する；本マトリクスはどのプロダクトが最大の収益貢献を担うかを示す。

## 境界事例と留意点

- **IRS vs OIS。** 両者とも固定対変動スワップである；違いは浮動参照（TIBOR vs TONA）である。運用上は別個だが、TIBOR が薄れるにつれて経済的に次第に重なる。
- **上場先物 vs OTC スワップ。** 10Y JGB 先物はデュレーションをヘッジするが 10Y CTD にアンカーされる；OTC 10Y IRS は取引テナーでの正確な 10Y スワップレートをヘッジする。保険会社の ALM は両者を用い、basis 挙動が異なる。
- **JGBi vs インフレスワップ。** JGBi はインフレ連動キャッシュフローを交付する現物 MOF 発行債券である；インフレスワップは元本交換のない OTC デリバティブである。両者とも全国 CPI 除く生鮮食品を参照する。ヘッジファンドのインフレ・ブレークイーブン・トレードは通常、JGBi と OIS を組み合わせるか、インフレスワップを直接用いる。
- **スワプション vs JGB 先物オプション。** スワプションはスワップレートのオプションである；JGB 先物オプション（取引所上場）は先物価格を参照する。円金利オプションの活動はスワプションに偏り、JGB 先物オプションは米国債先物オプションより発展していない。
- **CMS vs バニラスワップ。** CMS スワップは、定期リセットの短テナー浮動金利ではなく、定期リセットの CMS レート（コンスタント・マチュリティのスワップレート）を支払う。「コンスタント・マチュリティ」の特性が凸性とボラサーフェスへの依存を変える。
- **CCBS vs FX スワップ。** FX スワップは短テナーの near/far 調達商品である；CCBS は両通貨での変動金利キャッシュフローに加えて円レグ上の basis spread を伴うマルチピリオドのスワップである。CCBS はターム・クロスカレンシー調達レーンで支配的；FX スワップは短テナーレーンで支配的。
- **BIS 想定元本 vs グロス市場価値。** BIS はグロス想定元本残高とグロス市場価値の両方を半期で公表する。グロス想定元本は規模比較のためのヘッドライン数値；グロス市場価値（はるかに小さい）は実際のエクスポージャーにより近い数値である。常に調査のヴィンテージを引用すること。

## 関連

- [[derivatives/INDEX|derivatives index]]
- [[derivatives/japan-irs-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/cross-currency-basis-swap-japan]]
- [[derivatives/japan-swaption-market]]
- [[derivatives/japan-cms-constant-maturity-swap]]
- [[derivatives/japan-inflation-swap]]
- [[derivatives/jgb-inflation-linked-bond-jgbi]]
- [[derivatives/yen-basis-swap-market]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[money-market/INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-post-2024-floor-system-complementary-deposit-facility]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[securities/japan-securities-clearing-corp]]
- [[banking/INDEX]]
- [[INDEX|FinWiki index]]

## 出典

- Bank of Japan: BIS-coordinated OTC derivatives statistics for Japan (statistics/bis/yoshi).
- Bank for International Settlements: OTC derivatives statistics semi-annual release (derstats).
- Bank for International Settlements: OTC derivatives H2 2024  statistical release (otc_hy2502).
- Japan Securities Clearing Corporation (JSCC): IRS clearing services and JGB OTC clearing rules.
- LCH SwapClear: yen IRS clearing service description.
- Japan Exchange Group: JGB futures contract specifications.
- Japan Exchange Group: TONA 3-month futures specifications.
- Ministry of Finance: JGB auction calendar and JGB outstanding statistics.
- Ministry of Finance: JGB inflation-indexed bond (JGBi) issuance and outstanding pages.
- International Swaps and Derivatives Association (ISDA): SwapsInfo and IRS market-size publications.
- Financial Services Agency (FSA): FIEA framework for OTC derivatives clearing mandate.
