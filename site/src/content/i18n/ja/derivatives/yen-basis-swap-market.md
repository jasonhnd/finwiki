---
source: derivatives/yen-basis-swap-market
source_hash: 2bf45631b6f75634
lang: ja
status: machine
fidelity: ok
title: "円-米ドル・クロスカレンシー・ベーシススワップ市場"
translated_at: 2026-06-02T12:19:04.218Z
---
# 円-米ドル・クロスカレンシー・ベーシススワップ市場

## 要約

円-米ドル・クロスカレンシー・ベーシススワップ（CCBS）は、2つの取引相手が複数年の期間にわたり、元本と定期的な変動金利支払いを異なる2通貨間、典型的には JPY と USD の間で交換する OTC デリバティブである。「basis」は片方のレッグ、通常は JPY レッグに上乗せされるスプレッド（bp）であり、円資産を保有する非米国主体にとっての USD funding の相対的な希少性を価格化する。

円-米ドル basis は構造的にマイナスである（JPY レッグが USD 変動指数からスプレッドを差し引いた水準を支払う）。日本の銀行、生命保険会社、事業会社は、円建て負債に対して USD funding を必要とする需要が逆方向よりはるかに大きいためである。basis は、四半期末、年末、ドル不足局面（3月 2020, 、9月 2008–2009, 、12月 2011）など USD funding が逼迫すると拡大（よりマイナス）し、USD 供給が正常化すると縮小する。

FinWiki にとって、この市場は日本におけるドル調達価格そのものであり、メガバンクの USD 資産 funding、生命保険会社の外国債券ヘッジコスト、事業会社による USD 債発行後の円スワップバック採算、BoJ / Federal Reserve の USD swap line 政策に直接関係する。

## ウィキ上の位置づけ

本項目は [[derivatives/INDEX|derivatives index]] 配下に位置づける。単一通貨金利側は [[derivatives/japan-irs-market]]、JPY discounting curve は [[derivatives/ois-tona-curve]] と併読する。現金 funding 側は [[money-market/japan-money-market]]、事業会社エンドユーザー側は [[finance/japan-corporate-fx-and-rate-hedge-policy]] で扱う。

## 商品メカニクス

標準的な JPY-USD CCBS は以下の構造を持つ。

| 要素 | 詳細 |
|---|---|
| 期間 | 1か月から 30年。流動性の高いポイントは通常、3M、6M、1Y、2Y、3Y、5Y、7Y、10Y、30Y。 |
| 元本交換 | 取引開始時にその時点の spot FX rate で元本を交換し、満期時に同じレートで再交換する（swap 内に FX 再評価を組み込まない）。 |
| 変動レッグ | 歴史的には USD-LIBOR 対 JPY-LIBOR。IBOR 移行後は、SOFR（USD）対 TONA（JPY）の後決め複利に固定 basis spread を加える。 |
| basis spread | JPY レッグに加えるスプレッド（bp、JPY ではほぼ常にマイナス）。気配値は慣例的に「JPY pays SOFR + JPY-leg = TONA + basis」と表現される。basis が −60 bp の場合、JPY 支払者は SOFR flat を支払う代わりに TONA − 60 bp を受け取る。 |
| リセット頻度 | 通常は四半期ごと。 |
| 担保 | 日次 VM 付き CSA。post-2008  rules の下では、非清算相対取引の IM 交換は UMR phase-in に従う。 |
| 清算 | 標準化された一部 tenor は CCP 清算の対象となるが、FX 元本交換と非標準 tenor のため、多くの CCBS は相対取引として残る。 |

経済的には、USD 変動金利を支払い、JPY 変動金利からスプレッドを差し引いたものを受け取る取引は、ドルを借りて円に swap することで円資産を funding する合成取引と等価である。

## post-2008  の変化

世界金融危機以前、JPY-USD basis はほぼゼロだった。銀行が乖離を裁定していたため、カバー付き金利平価（CIP）は強く維持されていた。2008,  以降、持続的な非ゼロ basis は以下を反映している。

| 要因 | basis への影響 |
|---|---|
| 銀行のバランスシートコスト（leverage ratio、GSIB surcharge、FX swaps の RWA） | マイナス。乖離を閉じるためにバランスシートを拡大する裁定参加者が減る。 |
| 四半期末 / 年末の window dressing | マイナス方向の急拡大。dealer が repo と swap のバランスシート使用量を減らすため basis が拡大（よりマイナス）する。 |
| 生命保険会社、メガバンク、事業会社による日本国内の USD 需要 | JPY 負債を持つ国内主体が USD 債を買うため、持続的なマイナス圧力になる。 |
| BoJ マイナス金利期（2016–2024） | USD 債を通じた利回り需要が増幅し、basis が −50 から −80 bp の期間が 5Y で長く続いた。 |
| Federal Reserve の dollar swap lines（BoJ-Fed standing arrangement） | 極端な市場混乱の上限として機能する。3月 2020 （COVID）および過去の 2008–2009 で発動された。 |

CIP の乖離は現在、裁定機会ではなく構造的特徴である。規制資本、与信枠、バランスシート使用料という裁定制約が実在するためである。

## JPY funding swap による事業会社の USD funding

日本の事業会社または金融機関が USD 資産購入を funding する方法は2つある。

1. **直接 USD 借入** — USD 債を発行する、USD 銀行ローンを引き出す、または USD CP を利用する。
2. **JPY 借入 + JPY-USD swap（合成 USD）** — JPY 債を発行する、または JPY ローンを借り入れたうえで、CCBS と取引開始時の FX swap により JPY 元本とクーポンフローを USD に swap する。

合成 USD の all-in cost は以下で表せる。

```
synthetic USD cost ≈ JPY funding rate − basis (in bp, applied to JPY leg)
                    + SOFR + credit spread on the USD-receiving leg
```

basis が −60 bp の場合、JPY funding による合成 USD は、比較可能な native-USD borrowing より 60 bp 高くなる。つまり、発行体に USD 債の franchise があるなら、より安い経路は USD を直接発行することになる。逆に、円 funding を求める米ドル保有者は、swap に USD を貸し出すことで 60 bp の pickup を得る。これは basis が広いときに裁定資本が追う「yen pickup trade」である。

日本のメガバンク treasury にとって、basis は円建て預金（安価で潤沢）と USD 資産（高価で希少）の funding gap を直接価格化する。そのため、メガバンクの wholesale funding 戦略は basis 変動に敏感である。franchise レベルについては [[banking/INDEX]]、[[megabanks/mufg-bank]]、[[megabanks/sumitomo-mitsui-banking-corp]]、[[megabanks/mizuho-bank]] を参照。

## メガバンク dealer franchise

3メガバンクの dealer franchise、すなわち MUFG、SMFG、Mizuho FG とそれぞれの証券関連会社は、グローバル銀行（JPMorgan、Goldman Sachs、Citi、Deutsche Bank、BNP Paribas）および日本の証券会社（Nomura、Daiwa）と並ぶ、JPY-USD basis 市場の主要 market maker である。

franchise には2つの側面がある。

- **Client flow** — 日本の生命保険会社による USD 債購入、事業会社による USD 投資プログラムのヘッジ、海外発行体による円建て Samurai 債や Uridashi 債の調達資金を本国通貨へ swap back する取引。この flow は構造的に一方向（円 funding → USD 資産）であり、dealer はそこから生じる basis exposure を warehouse する。
- **Inventory and warehousing** — dealer は repo、FX-swap 市場、OTC counterparties を通じて basis を再循環させ、顧客需要を相殺する。warehousing 能力は RWA capacity、LCR / NSFR ratios、CSA terms に左右される。

dealer が bid-ask と run-rate carry を獲得できるとき、この双方向ビジネスは収益性がある。ただし 2015 以降、バランスシートコストが margin を圧縮している。ストレス時には dealer が退き basis が拡大する。これは BIS と BoJ の研究で記録されている CIP violation の「dealer-balance-sheet channel」である。

関連する単一通貨金利 franchise は [[derivatives/japan-irs-market]]、どの主体が dealer になれるかを規定する規制レイヤーは [[banking/japan-banking-license-tier-comparison-matrix]] を参照。

## basis 拡大トリガー

| トリガー | メカニズム | 典型的な規模（5Y JPY-USD basis） |
|---|---|---|
| 四半期末 | dealer がバランスシート snapshot を減らすため FX-swap と CCBS book を圧縮する一方、顧客の USD 需要は変わらない。 | 数日で −10 から −30 bp の拡大。 |
| 年末（12月） | 最も強い四半期末効果に、グローバル銀行の会計・報告期間が重なる。 | −20 から −60 bp の拡大。年末の 10–15 取引日前に peak となることが多い。 |
| ドル不足局面（2008, 2011, 2020） | グローバルな USD funding stress。クロスボーダーの interbank market が乾く。 | peak で −100 から −300+ bp。 |
| 日本固有の資金流出急増 | 生命保険会社または事業会社による USD 資産購入が継続する。 | −40 から −80 bp が 5Y で持続する期間がある。 |
| BoJ-Fed swap line activation | BoJ が担保に対して日本の銀行へ再貸出するための USD liquidity を供給する。発動 tenor で basis の下限を作る。 | swap-line cost（通常 OIS + fixed spread）で拡大を抑える。 |
| 規制再調整（例: 米銀の SLR exemption changes） | 米銀が裁定参加者として行動する意思を変化させる。 | 複数年にわたる持続的な shift。 |

新四半期の最初の週に反転しない四半期末 basis 拡大は、単なる window dressing を超える underlying funding stress を示すことが多い。

## EUR-USD basis との比較

| 観点 | JPY-USD basis | EUR-USD basis |
|---|---|---|
| 符号 | 持続的にマイナス（JPY レッグが USD floating から spread を差し引いて支払う）。 | 持続的にマイナスだが、規模は小さい。 |
| 要因 | 日本国内の USD 需要（生命保険会社、メガバンク、事業会社）。 | Eurozone bank の USD 資産 funding と、Greek crisis、Italian banking stress など周期的な eurozone stress。 |
| 近年の典型的な 5Y 水準 | 平時は −30 から −80 bp、危機時は −150 から −300+ bp。 | 平時は −20 から −50 bp、危機時は −100 から −200 bp。 |
| 年末の規模 | 日本固有の効果が大きい（会計年度の alignment、生命保険会社の reporting）。 | より小さいが、なお重要。 |
| 政策 backstop | BoJ-Fed standing USD swap line と permanent CCY swap arrangement。 | ECB-Fed swap line で、構造は類似。 |
| dealer set | 日本のメガバンクとグローバル dealer。 | 欧州銀行（BNP、SocGen、Deutsche）とグローバル dealer。 |

JPY-USD basis は、主要通貨 CCBS pairs の中で通常最も広く、最も変動しやすい。日本は非 USD 圏の中で最大の構造的 USD 資産需要を持ち、同時にドル収益を求める最大級の円建て balance sheet を抱えているためである。

## データ面

公開データ:

- **BIS Triennial Central Bank Survey and Semi-annual OTC Derivatives Statistics** — FX と金利デリバティブの gross notional と gross market value を、通貨ペア別・counterparty type 別に示す。
- **BoJ statistics** — BIS OTC derivatives survey の日本部分を半期ごとに公表。同じ release window で公開される。
- **ISDA SwapsInfo** — 清算済みおよび相対取引の weekly aggregated notional traded。
- **Tradeweb、Bloomberg、ICAP、BGC indicative quotes** — 日次の indicative basis curves。直接の取引データではない。

公開データは、FX-derivatives 全般について multi-trillion USD equivalent 規模の aggregate notional outstanding を示すが、個別取引の pricing、dealer P&L、具体的な counterparty exposures は示さない。dealer bank の IR disclosures は「FX and rates からの non-interest income」に言及することがあるが、basis P&L を切り出していない。

## 関連項目

- [[derivatives/INDEX]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/japan-irs-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/jgb-futures-curve]]
- [[money-market/INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[banking/INDEX]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[securities/japan-market-infrastructure-map]]
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[INDEX|FinWiki index]]

## 出典

- Bank for International Settlements: Semi-annual OTC derivatives statistics（通貨ペア別・商品種別の FX derivatives）。
- Bank for International Settlements: CIP deviations と FX-swap markets に関する Quarterly Review articles（複数、2016  以降）。
- Bank of Japan: BIS OTC derivatives survey の日本部分。
- Bank of Japan: Money Market surface と Tokyo Money Market Survey commentary。
- ISDA: SwapsInfo weekly aggregated transaction reports。
- Financial Services Agency: OTC derivatives oversight に関する FIEA framework。
- Japan Securities Clearing Corporation: clearing scope and product list。
- Federal Reserve and Bank of Japan: standing USD swap line documentation and usage releases。
