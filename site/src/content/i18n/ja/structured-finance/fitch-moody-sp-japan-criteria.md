---
source: structured-finance/fitch-moody-sp-japan-criteria
source_hash: b30514a0576fdf52
lang: ja
status: machine
fidelity: ok
title: "Fitch / Moody's / S&P の日本ストラクチャードファイナンス基準 — グローバル格付機関 vs JCR / R&I"
translated_at: 2026-06-19T13:13:22.644Z
---

# Fitch / Moody's / S&P の日本ストラクチャードファイナンス基準 — グローバル格付機関 vs JCR / R&I

## TL;DR

日本の証券化はデュアル格付けである: 国内機関である [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR and R&I]] は円建て投資家基盤（生命保険会社、地方銀行、[[regional-banks/japan-post-bank|Japan Post Bank]]）をカバーし、一方ディールが外国投資家やUSD建てトランシェを狙う場合にはMoody's、S&P、Fitchが追加される。スプリット格付けのギャップはシニア層で 1–3 ノッチに達し得る。その要因は、(i) **ソブリン格付けキャップ** — グローバル機関は日本のストラクチャードトランシェを日本のソブリン格付け（現在 A+/A1）以下にキャップするが、JCRとR&Iは国内でソブリンを AAA / AA+ と格付ける; (ii) 日本の住宅ローンおよびオートプールに対する**回収率の前提**の差異（グローバル機関は住宅の差押えタイミングや地方担保の再販価値について典型的により保守的）; (iii) グローバル機関のより厳しい**遷移行列**が同一プールに対してより高いモデル化デフォルト頻度を生む、ことである。結果として、JCRがAAAと格付けるシニアオートABSトランシェがS&PではしばしばAまたはAAと格付けられ、これが外国アセットマネージャーがそれをグローバルIGマンデートで保有できるかどうかを決定する。

## Wiki route

本項目は [[structured-finance/INDEX|structured-finance index]] の下に **格付機関基準比較** ノードとして位置する。国内機関の見方については [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]、投資家需要側については [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]、格付けが乗る法的エンティティ層については [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]] と対照して読むこと。関連するクロスボーダーの観点: [[real-estate-finance/INDEX|real-estate-finance index]]（RMBS / J-REIT債）および、より広い信用スプレッドの文脈については [[finance/INDEX|finance index]]。

## 1. The three global agencies — Japan structured-finance footprint

| Agency | Japan SF focus | Office | Typical mandates |
|---|---|---|---|
| **Moody's Japan K.K.** | RMBS, auto ABS, CMBS, consumer ABS, repackaging notes | Tokyo | Cross-border tranches, foreign-investor-marketed deals |
| **S&P Global Ratings Japan** | RMBS, ABCP conduits, auto ABS, CLO investor analysis | Tokyo | Megabank-sponsored deals, USD-denominated tranches |
| **Fitch Ratings Japan** | RMBS, auto ABS, repackaging, occasional CMBS | Tokyo | Foreign-investor demand-driven mandates |

三機関すべてが、FSAの [[financial-regulators/japan-exchange-group|JPX]] 近接の規制レジーム（元々は 2008 危機の後に登録と行為規範を課した金融商品取引法への 2010 改正）の下で **信用格付業者** として登録されている。

## 2. Sovereign-rating cap — the structural ceiling

グローバル機関はストラクチャードファイナンス発行に **ソブリン格付けキャップ（または「カントリーシーリング」）** を適用する。そのメカニズム:

| Step | Rule |
|---|---|
| Country ceiling | The cap on any structured-finance tranche issued out of a given jurisdiction, anchored to the sovereign rating |
| Japan sovereign rating | S&P: A+ / Moody's: A1 / Fitch: A (as of recent cycle, historically downgraded from AA / Aa during the 2010s) |
| Tranche ceiling | Typically equal to or one notch above the sovereign ceiling for highly-rated structured-finance instruments meeting "rated above sovereign" criteria |
| Result | A Japanese RMBS senior tranche cannot easily be rated AAA by S&P, even if the underlying pool would otherwise qualify — typical ceiling AA+ / AA |

対照的に、**JCRとR&Iは日本のソブリンを国内スケールで AAA（または AA+）と格付ける** が、これにはカントリーシーリングの問題がない。したがって、JCRからAAAを得るシニアトランシェは日常的にS&PからAA / AA-に着地する — シニア層での 2ノッチのスプリットである。

## 3. Differences in modelling assumptions

### 3a. Default frequency / transition matrix

グローバル機関は、多管轄区域のデフォルトデータセット（大半は米国、EU、英国）から導かれた長期 **遷移行列** を用いる。日本のプールに適用すると、これはJCR / R&Iの国内経験ベースの行列よりも高いモデル化デフォルト頻度を生む。後者は、(i) 歴史的に低い日本の消費者デフォルト率、(ii) 文化的な支払い規律、(iii) 1997–2003 の銀行危機期間においてさえ低かった住宅ローンの差押え率、を反映している。

### 3b. Recovery assumption

| Asset class | JCR / R&I assumption | Global-agency assumption | Gap |
|---|---|---|---|
| Residential mortgage (urban) | 60–75% LGD-adjusted recovery over 18–24 months | 50–65% over 24–36 months | Modest |
| Residential mortgage (rural / regional) | 50–65% recovery | 35–50% (foreclosure liquidity / resale value haircut) | Material |
| Auto loan | 35–45% recovery (used-car wholesale value) | 25–40% | Modest |
| Consumer unsecured | 0–5% recovery | 0–5% | Negligible |
| CMBS (Tokyo CBD office) | 65–80% recovery | 55–75% | Modest |
| CMBS (regional retail / hotel) | 45–60% recovery | 30–50% | Material |

地方担保の回収率ギャップが、地方プールディールにおけるスプリット格付けの最大の要因である。

### 3c. Cash-flow stress

グローバル機関は追加のストレスシナリオ — 金利ショック、期限前償還率ストレス、サービサー機能停止のテールリスク — を重ね合わせるが、JCR / R&Iはこれらをそれほど積極的にモデル化しないか、定性的考慮事項として扱う。

## 4. Transition matrix differences — empirical observation

JCR格付けのSFトランシェは、同一の名目レター格付けを持つグローバル機関格付けのトランシェと比較して、歴史的に非常に低い遷移率（格下げ）を示す。このギャップは、(i) 異なるモデル化哲学、(ii) 異なるサンプル母集団（JCRサンプルは圧倒的に日本中心、グローバル機関サンプルは多管轄区域）、(iii) JCRによる定性的考慮事項（サービサーの強さ、オリジネーターのトラックレコード、[[megabanks/mufg|MUFG]] / [[megabanks/smfg|SMFG]] / [[megabanks/mizuho-fg|Mizuho FG]] スポンサーサポート）のより強い重み付け、を反映している。

これは争点である — JCRは自社の国内アンカー型方法論が実際の日本プールパフォーマンスをよりよく反映すると主張し、グローバル機関は自社の方法論がより保守的でグローバルに比較可能だと主張する。

## 5. Recent JCR / S&P split-rating cases — illustrative pattern

特定の取引を名指しせずとも、公開されたJSDAのSF統計における反復パターンは以下を示す:

| Deal type | JCR typical | S&P / Moody's typical | Spread implication |
|---|---|---|---|
| Megabank-sponsored auto ABS (senior) | AAA | AA / AA+ | 5–15 bp pickup for foreign investors |
| Regional-bank RMBS (senior) | AAA | A+ / AA- | 20–40 bp pickup |
| CMBS senior (Tokyo CBD) | AAA | AA- / AA | 15–25 bp pickup |
| CMBS senior (regional) | AA / AA+ | A / A+ | 30–60 bp pickup |
| ABCP (megabank conduit) | A-1+ / J-1+ | A-1+ | Minimal |

2010年代には、JCRが格付けを維持し続けた日本のSFトランシェをS&PまたはMoody'sが格下げし、方法論の乖離について発行体と投資家からコメントを生んだ周期的なエピソードが見られた。

## 6. Why dual-rating still happens

スプリット格付けのコストにもかかわらず、デュアルまたはトリプル格付けは依然として一般的である。その理由は:

1. **外国投資家基盤** — グローバルIGマンデートを運用するグローバルアセットマネージャーは、債券を保有するためにグローバル機関の格付けを要求する; JCRのみでは不十分
2. **レポ適格性** — クロスボーダーレポ（例: ECB担保枠組み、米国トライパーティレポ）では、グローバル機関の格付けのみがカウントされる
3. **銀行資本の取扱い** — バーゼルIII標準的手法の下では、承認されたECAIからの格付けのみがカウントされる; 一部の管轄区域ではJCR / R&Iは承認されていない
4. **マーケティングの見栄え** — グローバル機関の格付けは、価格がJCRをベースに設定されていても「外国口座にとって投資可能」を示唆する

ディーラー（[[securities-firms/mufg-securities|MUFG MS]] / [[securities-firms/smbc-nikko|SMBC Nikko]] / [[securities-firms/mizuho-securities|Mizuho Securities]]）は、ターゲットとする投資家リストに基づきどの機関に依頼するかを選択する。

## 7. Counterpoints

- **「ソブリンキャップは機械的」** — 批判者は、カントリーシーリングが過度に機械的であり、自国通貨建てJGBが一度もデフォルトしていないことを反映していないと主張する; よく構築された日本のSFトランシェはキャップを外されてしかるべきだと論じる。グローバル機関は、日本にそのような制限がないにもかかわらず、移転・交換性リスクの観点からキャップを維持している
- **「JCR / R&Iは甘すぎる」** — 外国投資家は時に、JCR / R&IのAAA格付けをS&PのAA-に対して過大評価とみなし、国内格付けのみが利用可能な場合でもグローバル機関の水準に近い価格を付ける
- **「遷移行列のサンプリングバイアス」** — JCRの、自社サンプルが日本特有の行動をよりよく反映しているという弁護は妥当だが、日本の信用状況がグローバル規範に収斂する場合（例: 家計レバレッジの上昇、[[financial-regulators/boj|BOJ]] の金利正常化下での住宅ローンストレス）には前向きの盲点を生む
- **「東京オフィスの人員制約」** — グローバル機関は国内機関よりも小規模なチームで日本のSFをカバーする; 一部の発行体は格付け所要時間の長さと、より粒度の粗い発行体エンゲージメントを報告している
- **「方法論の更新がクリフリスクを生む」** — グローバル機関がストラクチャードファイナンス基準を更新すると、大量の格付けレビューが日本のSFユニバース全体で同時格下げを生み得て、JCRのみのディールが回避するスプレッド拡大を生む

## 8. Open questions

- [[financial-regulators/boj|BOJ]] が金利を正常化し、日本の家計デフォルト率がグローバル平均へと上昇する場合、スプリット格付けギャップがどれだけ縮小するか
- FSAが最終的に、高品質な日本のSFについてグローバル機関にソブリンキャップメカニズムの引き上げを迫るかどうか
- 新しい日本のSF資産クラス（ESG連動オートABS、グリーンRMBS）が五機関すべてに格付けられるか、管轄区域別にスプリットされるか
- より多くの外国投資家が日本のSF市場に参入し、グローバル機関の格付けを既定として要求する場合の [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I]] の競争上の立ち位置
- 中国拠点の機関（Dagong等）がクロスボーダーディールのカバレッジのために日本のSFでフットプリントを獲得するかどうか

## Related

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]
- [[real-estate-finance/INDEX|real-estate-finance index]]
- [[finance/INDEX|finance index]]
- [[derivatives/japan-cds-market-overview|Japan CDS market overview]]
- [[megabanks/mufg|MUFG]] · [[megabanks/smfg|SMFG]] · [[megabanks/mizuho-fg|Mizuho FG]]
- [[financial-regulators/japan-exchange-group|JPX]] · [[cooperative-banks/norinchukin|Norinchukin]]

## Sources

- JCR official methodology — https://www.jcr.co.jp/en/
- R&I official methodology — https://www.r-i.co.jp/en/
- JSDA structured-finance statistics — https://www.jsda.or.jp/en/
- Moody's Japan K.K. methodology library (public)
- S&P Global Ratings Japan structured-finance criteria (public)
- Fitch Ratings Japan structured-finance criteria (public)
- FSA registered credit rating agencies list (public)

---

> [!info] 校核状态
> confidence: **likely**. Sovereign-cap mechanism and split-rating dynamics are well-documented in public methodology papers from all three global agencies and in JCR / R&I commentary. Specific recent split-rating cases are abstracted to avoid naming individual transactions. Transition-matrix numbers are illustrative and reflect typical industry-discussed gaps, not single-source claims.
