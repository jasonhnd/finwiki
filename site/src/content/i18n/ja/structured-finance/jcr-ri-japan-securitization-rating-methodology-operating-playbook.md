---
source: structured-finance/jcr-ri-japan-securitization-rating-methodology-operating-playbook
source_hash: 39d5fbabe9356eed
lang: ja
status: machine
fidelity: ok
title: "JCR / R&I 日本証券化格付手法オペレーティング・プレイブック"
translated_at: 2026-06-19T13:13:22.634Z
---

# JCR / R&I 日本証券化格付手法オペレーティング・プレイブック

## TL;DR

JCR（株式会社日本格付研究所）と R&I（格付投資情報センター）は、日本のストラクチャードファイナンスを支配する 2 つの FSA 指定国内信用格付会社である。ABS / RMBS / CMBS / 消費者 / カード / リース格付に対するその**オペレーティング手法**は、四ステップのプレイブックに従う：(1) 日本のプール・データから導出されたヴィンテージ・カーブを用い、格付カテゴリーのストレス係数を乗じた**資産クラス別ストレス・デフォルト率 (SDR) の計算**（AAA = 期待デフォルトの 4–6×、AA = 3–4×、A = 2–3×、BBB = 1.5–2×）；(2) SDR をディール固有のウォーターフォール、期限前償還、回収、金利シナリオに通して、シニア・トランシェがストレスを生き延びることを検証する**キャッシュフロー・モデリング**；(3) 月次サービサー報告、四半期パフォーマンス・レビュー、格付アクション・トリガー（典型的には SDR 実現値対 SDR モデル値のドリフトが閾値を超えた場合、1-2 ノッチの格下げ）を伴う**サーベイランス**；(4) 格付決定に組み込まれた**格下げトリガー**（例：オリジネーターの信用劣化、プール集中の違反、サービサーの債務不履行事由）。グローバル格付会社（S&P / Moody's / Fitch Japan）と比べて、JCR / R&I は**日本に基づくデフォルト・データ**（複数法域のプーリングなし）、**より低いベースケース・デフォルト頻度**（歴史的な日本の消費者信用行動を反映）、そして**カントリー・シーリングの上限なし**（国内スケールで日本ソブリンを AAA と格付するため）を用いる；その結果が、[[structured-finance/fitch-moody-sp-japan-criteria|global vs JCR / R&I criteria]] に記録されているシニア・レイヤーでの 1–3 ノッチのスプリット格付ギャップである。本項目は、抽象的な手法文書ではなくアナリストのプレイブックのレベルで、オペレーティング・メカニクス — SDR 計算、キャッシュフロー・モデリング、サーベイランス頻度、格下げトリガー — を成文化する。

## Wiki ルート

本項目は [[structured-finance/INDEX|structured-finance index]] の下に**オペレーティング・プレイブック手法**ノードとして位置し、基礎となる [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology entry]] および比較の [[structured-finance/fitch-moody-sp-japan-criteria|Fitch / Moody's / S&P Japan criteria]] を補完する。資産クラスのオペレーティング・ページと照合して読むこと：[[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]、[[structured-finance/japan-consumer-loan-abs-structure|Japan consumer-loan ABS structure]]、[[structured-finance/japan-credit-card-receivable-abs|Japan credit-card receivable ABS]]、[[structured-finance/japan-equipment-lease-abs|Japan equipment lease ABS]]、[[structured-finance/japan-rmbs-issuance-structure|Japan RMBS issuance structure]]、[[structured-finance/japan-cmbs-issuance-structure|Japan CMBS issuance structure]]。規制アンカー：基礎となる法人レイヤーについては [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK / TMK SPV vehicle]]。

## 1. JCR と R&I — 格付会社のアイデンティティ

| Item | JCR | R&I |
|---|---|---|
| Japanese name | 株式会社日本格付研究所 | 株式会社格付投資情報センター |
| Established | 1985 | 1998 (前身を統合) |
| Ownership | 独立系、上場親会社 | 野村系 |
| FSA designation | FIEA 第 66-27 条に基づく | FIEA 第 66-27 条に基づく |
| Domestic sovereign rating | AAA | AA+ |
| Structured-finance staff (approx) | 60–80 名のアナリスト | 50–70 名のアナリスト |
| Annual SF rating actions (approx) | 200–400 (新規 + サーベイランス) | 150–300 |
| Office | 東京 (本社) | 東京 (本社) |

両社ともストラクチャードファイナンス商品について詳細な基準書およびサーベイランス報告を公表する；両社とも FSA に規制され、FIEA のもとで行為規制に拘束される。

## 2. 資産クラス手法アーキテクチャ

JCR と R&I は、各資産クラスについて別個の基準書を維持している：

| Asset class | Methodology features | Typical surveillance cadence |
|---|---|---|
| **Auto-loan ABS** | 新車 / 中古車区分別のヴィンテージ・カーブ；集中限度；バックアップ・サービサー要件 | 月次サービサー報告；四半期格付レビュー；年次フルレビュー |
| **Consumer-loan ABS** | APR / ローンサイズ・バケット別のヴィンテージ・カーブ；利息制限法の規制ショック・シナリオ；早期償却トリガーのキャリブレーション | 月次サービサー報告；四半期格付レビュー；半期フルレビュー |
| **Credit-card receivable ABS** | マスタートラスト・プールのダイナミクス；期間延長の条件付シナリオ；クロスシリーズ・コンテイジョン・ストレス | 月次サービサー報告；四半期格付レビュー |
| **Equipment lease ABS** | 真正リース対ファイナンス・リース区分；機器タイプ別残価カーブ；業種 / 機器 / レッシー別集中 | 月次サービサー報告；四半期格付レビュー |
| **RMBS** | LTV / DTI 階層化；地理的集中；期限前償還ヴィンテージ・カーブ；担保処分タイミングの前提 | 月次サービサー報告；四半期格付レビュー；半期フルレビュー |
| **CMBS** | 物件レベルの NCF ストレス；キャップレート・ストレス；リファイナンス・リスク；スペシャル・サービサー能力 | 月次サービサー報告；四半期格付レビュー；年次フルレビュー |
| **NPL securitization** | NPL ヴィンテージ / 資産タイプ別回収率；サービサーのワークアウト実績；法的クリアランス・リスク | 四半期サービサー報告；半期格付レビュー |
| **Project-finance** | プロジェクト・キャッシュフロー・ストレス；カウンターパーティ信用；完工リスク；運営コスト・ストレス | 年次格付レビュー (プロジェクト・ボンド)；マイルストーン事象での格付アクション |

基準書は各社のウェブサイトで日本語と英語で公表されている；それらは定期的に（主要な手法改訂については 3–7 年ごとに）更新される。

## 3. ストレス・デフォルト率 (SDR) の計算

中心的なオペレーティング・ツールは**ストレス・デフォルト率**であり、ターゲットのシニア・トランシェ格付と整合的なストレス・シナリオ下での期待プール・デフォルト頻度である。

### 3a. ベースケース・デフォルト頻度

| Asset class | Typical base-case lifetime default frequency | Source |
|---|---|---|
| Auto loan (new-car captive) | 1.5–3.0% | オリジネーターの過去プール・データ；格付会社のクロスイシュアー・データベース |
| Auto loan (used-car / multi-brand) | 3.0–5.5% | 同上 |
| Consumer loan (unsecured) | 8–15% | オリジネーター + 格付会社データベース |
| Credit-card receivable | 4–8% | オリジネーター + 格付会社データベース |
| Equipment lease (mixed pool) | 2.5–5.0% | 同上 |
| Residential mortgage (private RMBS) | 1.0–2.5% | オリジネーター + 格付会社データベース |
| Commercial mortgage (CMBS) | 3.0–8.0% | 物件固有 + 格付会社の過去データ |

### 3b. 格付カテゴリー別ストレス乗数

JCR / R&I は、ベースケースに格付カテゴリー固有のストレス乗数を適用する：

| Rating | Stress multiplier (typical) | Cumulative default frequency for SDR |
|---|---|---|
| AAA | 4–6× base | 最高ストレス — リセッション型シナリオ + テール事象を生き延びる |
| AA | 3–4× base | リセッション・シナリオ |
| A | 2–3× base | 軽度のリセッション |
| BBB | 1.5–2× base | 控えめなストレス |
| BB | 1.0–1.5× base | ベース + 小さなストレス |

ストレス乗数は**格付の定義**を反映する — AAA は「極端なストレスを生き延びる」を意味し、格付会社は資産クラス間でこの一貫性を実現するようストレス乗数をキャリブレーションする。

**計算例**（オートローン ABS）：
- ベースケースのライフタイム・デフォルト：2.5%
- AAA ストレス乗数：5×
- SDR (AAA)：12.5%
- 回収率の前提：40%
- SDR × (1 – 回収率) = 12.5% × 60% = 7.5% 純損失
- AAA に必要な劣後 + リザーブ + OC：7.5% + クッション = ~8.5%
- ディールの劣後構造は AAA を達成するために少なくとも 8.5% を提供しなければならない

### 3c. プール固有の特性に対する調整

SDR は以下について調整される：
- プール集中（単一債務者、地理的、ヴィンテージ）— SDR を増加させる
- オリジネーターの実績（長い歴史 + 低い過去のばらつき）— SDR を減少させる
- サービサー能力およびバックアップ体制 — 弱い場合に SDR を上方に修正する
- サービサーの立替実務 — SDR に直接ではなくキャッシュフロー・モデリングに影響する
- トリガーのキャリブレーション — 適切にキャリブレーションされたトリガーは有利な SDR 取扱いを得る

## 4. キャッシュフロー・モデリング

SDR は、ストレスを通じてウォーターフォールをシミュレートする**キャッシュフロー・モデル**に投入される：

| Modeling input | Description |
|---|---|
| Pool collection schedule | 期間ごとの元本 + 利息の期待回収 |
| Default timing curve | デフォルトがいつ発生するか（典型的には 12–36か月でピークを迎える S カーブ） |
| Recovery timing | 回収がいつ発生するか（典型的にはデフォルト後 6–18 か月） |
| Prepayment curve | 期間ごとの任意期限前償還 |
| Interest-rate scenarios | プールまたはボンドのいずれかのフローティングレート・エクスポージャー |
| Servicer-advance behavior | サービシング契約ごとにモデル化 |
| Trigger activation | トリガーがヒットすると、ウォーターフォールの挙動が切り替わる |
| Tranche payment | ディールのウォーターフォール・ロジックに従う |

モデルのアウトプット：
- SDR シナリオ下でのシニア・トランシェ完全返済確率
- シニア・トランシェの支払不足シナリオ
- メザニン・トランシェの支払不足シナリオ
- 劣後利用シナリオ
- リザーブ利用シナリオ

シニア・トランシェが AAA を得るためには、SDR にストレス・オーバーレイを加えた下で、**元本不足ゼロ**および**利息不足カバレッジ**を示さなければならない。

## 5. サーベイランス — 継続的モニタリング・レイヤー

格付が付与されると、JCR / R&I は**継続的サーベイランス**を実施する：

### 5a. サービサー報告レビュー（月次）

毎月、サービサーは受託者 + 格付会社に報告を提出する：
- プール残高（当月対前月）
- エイジング・バケット別延滞（30 / 60 / 90 / 120+ 日）
- 償却（グロス + 回収）
- 期限前償還
- プール利回り（加重平均 APR）
- リザーブ口座残高
- OC 水準
- これまでの累積純損失

格付会社は実績をモデル・パフォーマンスと比較する。

### 5b. 四半期格付レビュー

四半期ごとに（正式には；ストレスのあるディールについては時にはより頻繁に）：
- パフォーマンス・トレンド分析
- 同一資産クラスの他ディールとの比較
- オリジネーター信用レビュー
- サービサー業務レビュー
- トリガー・ステータス・チェック
- 格付アクションの検討

### 5c. 年次 / 半期フルレビュー

6–12 か月ごとに：
- 更新されたパフォーマンス・データによるキャッシュフロー・モデルの完全な再実行
- ベースケースがドリフトした場合の更新された SDR 計算
- プール構成の変化
- オリジネーターの戦略的展開
- マクロ経済の更新
- 格付アクションの推奨

### 5d. イベント駆動型レビュー

特定の事象によってトリガーされる：
- オリジネーターの破綻 / 格下げ
- サービサーの債務不履行事由
- トリガーの発動
- 資産クラスに影響する規制変更
- マクロショック（例：COVID、GFC）

## 6. 格下げトリガー — 格付が変わるとき

| Trigger | Typical downgrade magnitude |
|---|---|
| Originator rating downgraded below required threshold (e.g., BBB) | シニア 1 ノッチ；バックアップ・サービサーの発動が調整しうる |
| Servicer event of default → backup servicer activated | バックアップの運用能力が不確実な場合 1–2 ノッチ |
| Cumulative net loss > SDR × early-warning threshold | 当初 1 ノッチ；パターンが続けばさらに |
| 90+ delinquency > 1.5× modeled stress | 1–2 ノッチ |
| Reserve drawn below floor + not replenished within X months | 1 ノッチ |
| Trigger activated → early-amortization | 当初 1 ノッチ（メカニズムが機能したことを認識）；プールレベルの劣化が深刻ならさらに大きくなりうる |
| Pool concentration breach (lessee, geographic) | 1 ノッチ |
| Macroeconomic / regulatory shock | 持続的であればマルチノッチ |
| Methodology revision | 可変；影響を受けるユニバースについては潜在的に大きい |

格下げは自動的ではない — 格付会社のアナリストはサーベイランス・レビューにおいて判断を適用する。**単一のデータ・ポイントよりもパターンが重要である**。

## 7. グローバル格付会社との比較（S&P / Moody's / Fitch Japan）

| Dimension | JCR / R&I | S&P / Moody's / Fitch Japan |
|---|---|---|
| Default data source | 日本に基づく | 複数法域でプール |
| Base-case default frequency | より低い（日本の歴史的な低デフォルトを反映） | より高い（より高デフォルトの市場を含むプールされたグローバル・データ） |
| Stress multipliers | 日本のストレス・シナリオにキャリブレーション | グローバル・ストレスにキャリブレーション |
| Country-ceiling cap | なし（日本は国内スケールで AAA / AA+ と格付） | あり — 日本ソブリンで上限（S&P: A+；Moody's: A1；Fitch: A） |
| Recovery assumptions | 日本固有（住居系についてはしばしばより高い） | 一部のプールについてはより保守的（地方の住宅ローン） |
| Methodology update cadence | 定期的（3–7 年） | 定期的（3–5 年） |
| Rating consistency across asset classes | 日本国内スケール向けに設計 | グローバル・スケール向けに設計 |
| Surveillance frequency | 月次サービサー + 四半期レビュー | 同様 |
| Investor base recognition | 日本の機関投資家が優勢 | グローバルの機関投資家 |
| Repo eligibility / bank capital | 日本の規制目的で認識される | 銀行資本、ECB レポなどでグローバルに認識される |

**構造的なスプリット格付の結果**：日本国内のオートローン ABS のシニア・トランシェは通常、JCR / R&I から 7% の劣後で AAA を得るのに対し、S&P / Moody's からは 8.5–10% の劣後で AA / AA+ を得る — 同一プールについて。この 1–2 ノッチのギャップはメカニカルなものであり、手法のキャリブレーションを反映する；それは JCR / R&I の甘さではなく、異なる（日本に基づく対グローバルにプールされた）手法である。

## 8. 格付プロセス — オペレーショナル・タイムライン

| Step | Typical duration | Description |
|---|---|---|
| 1. エンゲージメント / マンデート | 1 週 | 発行体 / アレンジャーが格付会社をエンゲージ；格付会社がキャパシティを確認 |
| 2. 初期ストラクチャリング議論 | 2–4 週 | 格付会社が構造、劣後、トリガーについてフィードバックを提供 |
| 3. デューデリジェンス + プール・データ・レビュー | 4–6 週 | プール・データが提出され、格付会社が分析 |
| 4. キャッシュフロー・モデリング | 2–4 週 | 格付会社がモデルを実行；劣後についてアレンジャーと反復 |
| 5. 格付委員会 | 1–2 週 | 内部委員会が格付を承認 |
| 6. 格付公表 | プライシング前 1–2 週 | プレセール / プライシング前の格付公表 |
| 7. 発行後サーベイランス | 継続的 | 月次 + 四半期 + 年次レビュー |

マンデートから格付までの合計タイムライン：典型的には 8–14 週。グローバル格付会社と同様のタイムラインに匹敵する；エンゲージメント・モデルは異なる（JCR / R&I ではより細かな発行体エンゲージメント、グローバル格付会社の東京オフィスではより少ないスタッフ）。

## 9. 反論

- **「JCR / R&I は甘すぎる」** — 擁護派は、より低いベースケース・デフォルトを正当化する日本固有のデータを挙げる；批判派は、手法は日本のデフォルト率が上方に収束した後にのみグローバルと収束し、テール・リスクを生み出すと主張する
- **「ソブリン・キャップのメカニカルな例外は JCR / R&I に不公平」** — JCR / R&I はカントリー・シーリングに拘束されない；問題はこれが手法的に健全か、それとも構造的な優位かである
- **「SDR 乗数は恣意的」** — 批判派は 4–6× の AAA 乗数は経験的に導出されたのではなくキャリブレーションされたものだと指摘する；擁護派は格付カテゴリーの一貫性にはキャリブレーションが必要だと指摘する
- **「サーベイランスは後ろ向き」** — 月次サービサー報告レビューは応答的だが遅延がある；一部の事象（オリジネーターのストレス）は月次レビューが捕捉できるよりも速く動く
- **「手法更新はクリフ効果を生む」** — 格付会社が SDR 乗数または回収率の前提を更新すると、複数のディールが同時に動きうる；これは避けられないが破壊的である
- **「JCR / R&I のスプリットは本物 — 一つを選べ」** — 一部の発行体は JCR のみまたは R&I のみをエンゲージする；コ・レーティングは一般的だがコストを加える。選択はしばしば手法の選好ではなく歴史的関係を反映する

## 10. 未解決の問い

- 日本の資本市場が国際化するにつれ、JCR / R&I が手法をグローバル格付会社と収束させるかどうか
- 気候リスクおよび人口減少のシナリオが SDR 計算に体系的に組み込まれるかどうか
- FSA が格付会社により厳格な手法開示または独立した第三者レビューを迫るかどうか
- 新たな資産クラス（BNPL、EV 電池関連 ABS、トークン化 RWA）が、従来の資産クラスと同様のペースで手法開発を得るかどうか
- 受託者としての [[trust-banks/sumitomo-mitsui-trust|trust banks]] が、その受託者リスクが増大するにつれ、手法変更（例：より細かなサーベイランス頻度）を要求するかどうか
- BOJ の金利正常化がプールにストレスを与えモデリングの差異を露呈させた場合の、グローバル格付会社に対する JCR / R&I の競争的ポジション

## Related

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology (foundational)]]
- [[structured-finance/fitch-moody-sp-japan-criteria|Fitch / Moody's / S&P Japan criteria comparison]]
- [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]
- [[structured-finance/japan-consumer-loan-abs-structure|Japan consumer-loan ABS structure]]
- [[structured-finance/japan-credit-card-receivable-abs|Japan credit-card receivable ABS]]
- [[structured-finance/japan-equipment-lease-abs|Japan equipment lease ABS]]
- [[structured-finance/japan-rmbs-issuance-structure|Japan RMBS issuance structure]]
- [[structured-finance/japan-cmbs-issuance-structure|Japan CMBS issuance structure]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK / TMK SPV vehicle]]
- [[structured-finance/japan-securitization-product-matrix|Japan securitization product matrix]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[megabanks/mufg|MUFG]] · [[megabanks/smfg|SMFG]] · [[megabanks/mizuho-fg|Mizuho FG]]
- [[trust-banks/sumitomo-mitsui-trust|SMTB]] · [[trust-banks/nochu-trust-bank|Nochu Trust]]

## Sources

- JCR structured-finance criteria library — https://www.jcr.co.jp/en/
- R&I structured-finance methodology library — https://www.r-i.co.jp/en/
- FSA designated credit rating agency list — https://www.fsa.go.jp/en/
- JSDA structured-finance statistics — https://www.jsda.or.jp/en/
- ASF Japan structured-finance materials — https://www.asf-japan.gr.jp/

---

> [!info] 校核状態
> confidence: **likely**. SDR 計算の枠組み、ストレス乗数のレンジ、キャッシュフロー・モデリングのアーキテクチャ、およびサーベイランス頻度は、JCR / R&I の公開手法文書および業界で観察される実務を反映する。具体的なストレス乗数の値は、単一ソースの主張というより典型的なパターンを例示するものである；実際のディールのキャリブレーションは異なる。格下げトリガーの閾値はディール固有であり、オファリング文書で開示される。
