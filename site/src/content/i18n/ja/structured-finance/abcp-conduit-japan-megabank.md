---
source: structured-finance/abcp-conduit-japan-megabank
source_hash: 016c254e3b74bb60
lang: ja
status: machine
fidelity: ok
title: "ABCP コンデュイット（資産担保コマーシャルペーパー）— 日本メガバンク・スポンサー型プログラム"
translated_at: 2026-06-19T12:43:19.859Z
---

# ABCP コンデュイット（資産担保コマーシャルペーパー）— 日本メガバンク・スポンサー型プログラム

## TL;DR

ABCP コンデュイットは、企業の売り手から短期の債権を購入し、その購入を JSDA が監督する国内 CP 市場へ円建てコマーシャルペーパーを発行することで資金調達するオフバランスの特別目的ビークル（[[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV structures]]）であり、スポンサーであるメガバンクからの**流動性バックストップ**を備える。日本において重要なスポンサーは [[megabanks/mufg|MUFG]]（その銀行部門および証券子会社経由）、[[megabanks/smfg|SMFG / SMBC]]、[[megabanks/mizuho-fg|Mizuho FG]] の 3 社である。各社は、ピーク時に数千億円から 1 兆円超の CP 残高に及ぶ、1〜2 のマルチセラー・コンデュイット・プログラムを運営している。市場は 2008 金融危機（グローバルな ABCP 市場が凍結し、日本のコンデュイットが流動性ラインを引き出した）後に急激に縮小し、2010 バーゼル III 流動性枠組みがスポンサーのコミットメントに高い資本コストを課したことで再び縮小し、危機前のピークよりはるかに小さい規模で安定している。外国人投資家は、円のショートレートがクロスカレンシースワップ・ベースで魅力的なとき、相応の CP の買い手となる。

## Wiki route

本エントリは [[structured-finance/INDEX|structured-finance index]] の下に**短期証券化コンデュイット**ノードとして位置する。ターム証券化市場については [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]、法人格レイヤーについては [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]、そして格付会社が流動性バックストップをどう扱うかについては [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]] と対照して読むこと。システムフレーム：より広範な短期資金調達の文脈については [[finance/INDEX|finance index]]。銀行のバランスシート管理との隣接性：[[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMFG]]、[[megabanks/mizuho-fg|Mizuho FG]] はいずれも各社のピラー 3 開示で ABCP コンデュイットのエクスポージャーを開示している。

## 1. ABCP コンデュイットの姿

```
Corporate sellers (auto-loan originators,
  trade-receivable originators, equipment
  lessors, regional consumer-finance cos)
   |
   |  sells receivables (true sale to SPV)
   v
+----------------------------------+
|        Multi-seller conduit      |
|          (SPV — GK/TK)           |
|  - Funds receivable purchase     |
|  - Issues yen CP into JSDA mkt   |
+--------+----------------+--------+
         |                |
   CP issuance      Liquidity / credit
         |             backstop
         v                |
+--------+---------+      |
| CP investors     |      |
| (MMFs, regional  |      |
|  banks, foreign  |      |
|  invs, life cos) |      |
+------------------+      |
                          v
                 +--------+---------+
                 |   Sponsor bank   |
                 | (MUFG / SMBC /   |
                 |  Mizuho — 100%   |
                 |  liquidity line) |
                 +------------------+
```

主な特徴：
- **マルチセラー**：単一のコンデュイットが多数の企業の売り手からの債権を集約し、分散を提供する
- **短期**：原債権は典型的に 30〜180 日；発行される CP は 1〜3 か月
- **流動性バックストップ**：スポンサー銀行が、市場が凍結した場合に満期到来 CP を借り換えるための 100% 流動性ファシリティを提供する —— これが CP を最高格付たらしめる構造的な「アンカー」である
- **オフバランス**（歴史的に）：バーゼル III 以前は、コンデュイットはスポンサーのバランスシート外にあった；バーゼル III 後のルールは連結と資本上の取扱いを厳格化した

## 2. 日本メガバンクのコンデュイット・プログラム

各メガバンクは 1 つ以上のマルチセラー・コンデュイット・プログラムを運営している。名称や詳細な構造はピラー 3 レポートおよび格付会社の公開レポートで開示されている。

| Sponsor | Typical conduit structure | Outstanding scale |
|---|---|---|
| [[megabanks/mufg|MUFG]] | Multi-seller conduit sponsored by [[megabanks/mufg|MUFG Bank]], administered through securities subsidiary; CP issued domestically and (historically) in USD via offshore vehicles | Several hundred billion to ~1 trillion yen equivalent at peak |
| [[megabanks/smfg|SMFG / SMBC]] | Multi-seller conduit programs sponsored by [[megabanks/smfg|SMBC]]; trade-receivable and auto-receivable heavy | Comparable scale to MUFG |
| [[megabanks/mizuho-fg|Mizuho FG]] | Multi-seller conduit sponsored by [[megabanks/mizuho-fg|Mizuho Bank]] | Somewhat smaller than MUFG / SMBC pair |

これらのコンデュイットは、メガバンク自身の**直接的な企業 CP 引受**業務と並存（時に競合）する —— それ自体が CP 適格（高 IG）である企業の売り手にとっては、債権をコンデュイットに売却するより自社名義で CP を発行する方が安いことが多い。

## 3. 流動性バックストップ — 構造的アンカー

日本の ABCP コンデュイットを定義づける特徴は、スポンサー銀行からの**100% 流動性ファシリティ**である。そのメカニズム：

- コンデュイットは（例えば）発行から 90 日で満期を迎える CP を発行する
- コンデュイットが満期時に CP をロールできない場合（市場の混乱）、スポンサー銀行がコンデュイットに貸し付けて満期到来 CP を返済する
- 銀行はその後、債権を自社のバランスシート上に保有するか、CP 市場の再開を待つ
- したがって CP 投資家は、債権プールだけでなく銀行のコミットメントによってロールオーバーリスクから保護される

流動性バックストップこそが、メガバンク・スポンサー型コンデュイットが発行する ABCP が通常**最高の短期格付**（JCR / R&I から J-1+、S&P から A-1+）を得る理由である —— 信用リスクは事実上スポンサー銀行のシニア格付へと移転する。

## 4. 2008 後の縮小

2008 グローバル金融危機は、ABCP 流動性バックストップ・モデルの最初の実地ストレステストであった：
- グローバルな ABCP 市場（米国、EU）では、流動性ファシリティが枯渇したり、スポンサーがその履行を拒否したりする複数のコンデュイット破綻が見られた
- 日本のコンデュイットは 2008 後半に**流動性ラインを大幅に引き出した** —— コンデュイットは破綻しなかったが、失われた CP 資金調達によるスポンサー銀行のコストは相当なものであった
- 企業の売り手が CP 資金調達による債権ファイナンスを縮小し、スポンサーがコミットメントを縮小したため、市場は大幅に縮小した

その後、2010 **バーゼル III 流動性枠組み**は以下を課した：
- 未引出の流動性コミットメントへの高い資本コスト
- HQLA バッファーを要求するコンデュイット流動性ラインの LCR（流動性カバレッジ比率）上の取扱い
- **リスクベース連結原則**の下でのコンデュイットの連結（スポンサーがリスクの大半を負う場合、コンデュイットを連結しなければならない）

その複合的効果により、市場は 2008 ピーク対比で大幅に縮小した。

## 5. 現在の市場規模と構造

縮小後、日本の ABCP 市場は 2008 ピークよりも著しく小さいが、以下にとって依然として相応の資金調達チャネルであり続けている：
- **オートローン債権** — [[financial-conglomerates/toyota-tsusho-corp|Toyota Tsusho]] およびその他自動車メーカーの自動車金融専属会社
- **売掛債権** — メーカーおよび商社系列
- **設備リース債権** — [[leasing-firms/mitsubishi-hc-capital|Mitsubishi HC Capital]]、[[leasing-firms/smfl|SMFL]]、[[leasing-firms/orix-corp|ORIX]] のようなリース子会社
- **消費者金融債権** — 地域の消費者金融会社

JSDA の短期 CP 統計は ABCP を企業 CP および銀行 CP と合算しているため、ABCP 固有の残高はスポンサー開示から推計する必要がある。

## 6. 外国人投資家のベース

外国人投資家は、**円のショートレートがクロスカレンシースワップ・ベースで魅力的**なとき、日本の ABCP の相応の買い手となる：
- USD で資金調達する外国人投資家が FX スワップで USD を円に交換するとき、ベーシスのピックアップに CP 利回りを加えて稼ぐ
- USD/JPY ベーシスが大きくマイナスである期間（例：リーマン後、2010年代を通じた周期的なエピソード）には、ごく低い国内利回りであっても円 ABCP が魅力的になった
- 主な買い手：米国のプライム MMF（許容される場合）、欧州 MMF、外国銀行のトレジャリー、ソブリン・ウェルス・ファンド

外国人投資家のシェアはベーシスとともに変動し、JSDA によって合算ベースでのみ報告される。

## 7. ターム ABS との比較

| Dimension | ABCP conduit | Term ABS |
|---|---|---|
| Tenor | 30–180 day CP rollover | 2–7 year amortising bond |
| Liquidity risk | High — borne by sponsor liquidity facility | Low — match-funded |
| Capital efficiency | Was high pre-Basel III; reduced post | Stable |
| Rating | Anchored to sponsor short-term rating | Anchored to pool structure |
| Investor base | MMFs, bank treasuries, short-duration funds | Life insurers, regional banks |
| Pricing | OIS + few bp | Mid-swap + 20–60 bp typical |

ほとんどの売り手にとって、コンデュイット資金調達とターム ABS の選択は、債権の期間（短期 → コンデュイット；より長い償却 → ターム ABS）と、売り手が継続的なプログラム柔軟性（コンデュイット）と一回限りのターム資金調達（ABS）のどちらを望むかに依存する。

## 8. 反論

- **「流動性バックストップは無料ではない」** — バーゼル III 後、スポンサーが 100% 流動性ファシリティを提供する資本コストはもはや些細なものではない；真のコストを織り込めば、コンデュイット・ファイナンスはもはや直接の銀行貸付より明確に安くはない、と一部の批判者は論じる
- **「マルチセラーの分散は過大評価されている」** — 実際には、多くの日本のコンデュイットは少数の大口の売り手（例：自動車専属会社）への集中したエクスポージャーを持つため、分散の便益は理論的なマルチセラーの枠組みが示唆するより小さい
- **「リスク移転は部分的である」** — スポンサーが流動性バックストップを提供するため、ABCP は本質的にスポンサーの信用リスクの構造化されたラッパーである；CP 投資家への真のリスク移転は限定的である
- **「FSA 監督の非対称性」** — コンデュイットの連結ルールと資本上の取扱いは進化してきた；規制の境界はターム証券化ほどクリーンではない
- **「外国人投資家の移ろいやすさ」** — クロスカレンシーベーシスが円 CP に不利に動くと、外国人需要は蒸発し、（規模の小さい）国内投資家ベースが供給を吸収するために残される

## 9. 未解決の論点

- [[financial-regulators/boj|BOJ]] 金利正常化の下で日本の ABCP 市場が相応に回復するかどうか —— これは円の ST 資金調達にプラスのキャリーを再確立しうる
- 明確なサステナビリティ・プロファイルを持つ債権プール（再生可能エネルギーのリース債権、EV オートローン債権）向けに、ESG リンク ABCP やグリーン ABCP が登場するかどうか
- [[leasing-firms/orix-corp|ORIX]] / [[leasing-firms/tokyo-century|Tokyo Century]] という非メガバンク・コンデュイットがより活発になる場合の競争上の位置づけ
- [[regional-banks/japan-post-bank|Japan Post Bank]] が JGB から短期保有を多様化するにつれて、より大きな ABCP の買い手となるかどうか
- スポンサーの流動性ファシリティのエコノミクスに影響を与える LCR / NSFR ルールの精緻化の道筋

## Related

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[finance/INDEX|finance index]]
- [[megabanks/mufg|MUFG]] · [[megabanks/smfg|SMFG]] · [[megabanks/mizuho-fg|Mizuho FG]]
- [[leasing-firms/mitsubishi-hc-capital|Mitsubishi HC Capital]] · [[leasing-firms/smfl|SMFL]] · [[leasing-firms/orix-corp|ORIX]] · [[leasing-firms/tokyo-century|Tokyo Century]]
- [[financial-regulators/japan-exchange-group|JPX]] · [[regional-banks/japan-post-bank|Japan Post Bank]]

## Sources

- JSDA commercial paper statistics — https://www.jsda.or.jp/en/
- MUFG IR / Pillar 3 disclosures — https://www.mufg.jp/english/
- SMFG IR / Pillar 3 disclosures — https://www.smfg.co.jp/english/
- Mizuho FG IR / Pillar 3 disclosures — https://www.mizuho-fg.com/index.html
- BOJ short-term money market statistics — https://www.boj.or.jp/en/statistics/
- JCR / R&I conduit rating commentaries (public)

---

> [!info] 校核状态
> confidence: **likely**. ABCP コンデュイットの構造、流動性バックストップのメカニズム、2008 後の縮小、およびバーゼル III の資本影響は、BIS の論文、FSA の開示、各スポンサー銀行のピラー 3 レポートで十分に文書化されている。具体的な残高の数値は報告日と集計方法によって異なる —— 上記の記述は正確な数字ではなく方向性を示す表現を用いている。
