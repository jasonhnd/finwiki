---
source: structured-finance/abcp-conduit-japan-megabank
source_hash: fac280f5b1c9977c
lang: ja
status: machine
fidelity: ok
title: "ABCP コンデュイット（資産担保コマーシャルペーパー）— 日本のメガバンク主導プログラム"
translated_at: 2026-06-03T00:53:08.335Z
---
# ABCP コンデュイット（資産担保コマーシャルペーパー）— 日本のメガバンク主導プログラム

## 要約

ABCP コンデュイットは、企業売り手から短期債権を買い取り、その購入資金を JSDA が監督する国内 CP 市場で円建てコマーシャルペーパーを発行して調達するオフバランスの特別目的ビークル（[[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV structures]]）であり、スポンサーであるメガバンクから **流動性バックストップ** を受ける。日本で重要なスポンサーは、[[JapanFG/mufg|MUFG]]（銀行部門および証券子会社を通じる）、[[JapanFG/smfg|SMFG / SMBC]]、[[JapanFG/mizuho-fg|Mizuho FG]] の三つである。各行は一つまたは二つのマルチセラー・コンデュイットプログラムを運営し、ピーク時の CP 残高は数千億円から 1 兆円超に及んだ。市場は 2008  金融危機後に急縮小した。グローバル ABCP 市場が凍結し、日本のコンデュイットも流動性ラインを引き出したためである。その後、2010  の Basel III 流動性枠組みがスポンサーコミットメントに高い資本コストを課したことでさらに縮小し、危機前ピークよりはるかに小さい規模で安定している。円短期金利がクロスカレンシースワップ・ベーシス上魅力的な場合、外国人投資家は重要な CP 買い手となる。

## ウィキ上の位置づけ

この項目は **短期証券化コンデュイット** ノードとして [[structured-finance/INDEX|structured-finance index]] 配下に置かれる。ターム証券化市場は [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]、法的エンティティ層は [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]、格付け機関が流動性バックストップをどう扱うかは [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]] と照合する。制度上の枠組みは、より広い短期資金調達文脈を扱う [[finance/INDEX|finance index]] である。銀行バランスシート管理との隣接関係として、[[JapanFG/mufg|MUFG]]、[[JapanFG/smfg|SMFG]]、[[JapanFG/mizuho-fg|Mizuho FG]] はそれぞれ Pillar 3  開示で ABCP コンデュイット・エクスポージャーを開示している。

## 1. ABCP コンデュイットの姿

```
企業売り手（自動車ローン・オリジネーター、
  売掛債権オリジネーター、設備
  リース会社、地域消費者金融会社）
   |
   |  債権を売却（SPV への真正売買）
   v
+----------------------------------+
|      マルチセラー・コンデュイット |
|          (SPV — GK/TK)           |
|  - 債権購入に資金を充当          |
|  - JSDA 市場で円 CP を発行       |
+--------+----------------+--------+
         |                |
   CP 発行          流動性 / 信用
         |          バックストップ
         v                |
+--------+---------+      |
| CP 投資家        |      |
| (MMF、地域銀行、 |      |
|  外国人投資家、  |      |
|  生命保険会社)   |      |
+------------------+      |
                          v
                 +--------+---------+
                 |  スポンサー銀行  |
                 | (MUFG / SMBC /   |
                 |  Mizuho — 100%   |
                 |  流動性ライン)  |
                 +------------------+
```

主な特徴:
- **マルチセラー**: 一つのコンデュイットが多数の企業売り手から債権を集約し、分散を提供する
- **短期**: 裏付け債権は通常 30–180  日、発行される CP は 1–3  か月
- **流動性バックストップ**: 市場が凍結した場合に満期 CP を借り換えるため、スポンサー銀行が 100% の流動性ファシリティを提供する。これが CP を最高格付けにする構造上の「アンカー」である
- **オフバランス**（歴史的に）: Basel III 前、コンデュイットはスポンサーのバランスシート外にあった。Basel III 後、連結と資本処理のルールが厳格化された

## 2. 日本のメガバンク・コンデュイットプログラム

各メガバンクは一つ以上のマルチセラー・コンデュイットプログラムを運営している。名称と詳細構造は、Pillar 3  報告書と格付け機関の公開レポートで開示される。

| スポンサー | 典型的なコンデュイット構造 | 残高規模 |
|---|---|---|
| [[JapanFG/mufg|MUFG]] | [[JapanFG/mufg|MUFG Bank]] がスポンサーとなり、証券子会社を通じて管理されるマルチセラー・コンデュイット。CP は国内で発行され、歴史的にはオフショアビークルを通じて USD でも発行 | ピーク時に数千億円から約 1  兆円相当 |
| [[JapanFG/smfg|SMFG / SMBC]] | [[JapanFG/smfg|SMBC]] がスポンサーとなるマルチセラー・コンデュイットプログラム。売掛債権と自動車債権の比重が高い | MUFG と同程度の規模 |
| [[JapanFG/mizuho-fg|Mizuho FG]] | [[JapanFG/mizuho-fg|Mizuho Bank]] がスポンサーとなるマルチセラー・コンデュイット | MUFG / SMBC の組よりやや小さい |

これらのコンデュイットは、メガバンク自身の **直接の企業 CP 引受** 事業と並存し、時には競合する。企業売り手自身が CP 適格（高い投資適格）である場合、債権をコンデュイットに売るより、自社名義で CP を発行する方が安いことが多い。

## 3. 流動性バックストップ — 構造上のアンカー

日本の ABCP コンデュイットの決定的な特徴は、スポンサー銀行からの **100% 流動性ファシリティ** である。仕組みは次のとおり。

- コンデュイットは、例えば発行から 90  日で満期を迎える CP を発行する
- コンデュイットが満期時に CP をロールできない場合（市場混乱）、スポンサー銀行がコンデュイットに貸し付け、満期 CP を償還させる
- 銀行はその後、債権を自らのバランスシートで保有するか、CP 市場の再開を待つ
- したがって CP 投資家は、債権プールだけでなく、銀行のコミットメントによりロールオーバーリスクから保護される

流動性バックストップがあるため、メガバンク主導コンデュイットが発行する ABCP は通常 **最高短期格付け**（JCR / R&I の J-1+、S&P の A-1+）を得る。信用リスクは実質的にスポンサー銀行のシニア格付けへ移転するためである。

## 4. 2008  後の縮小

2008  の世界金融危機は、ABCP 流動性バックストップモデルにとって最初の現実的なストレステストだった。
- グローバル ABCP 市場（米国、EU）では、流動性ファシリティが枯渇したりスポンサーが履行を拒んだりして、複数のコンデュイットが破綻した
- 日本のコンデュイットも 2008  後半に **流動性ラインを大きく引き出した**。コンデュイット自体は破綻しなかったが、スポンサー銀行にとって CP 調達を失うコストは大きかった
- 企業売り手が CP 資金による債権ファイナンスを減らし、スポンサーもコミットメントを縮小したため、市場は大きく縮小した

その後、2010  **Basel III 流動性枠組み** は次を課した。
- 未使用の流動性コミットメントに対する高い資本コスト
- コンデュイット流動性ラインに対する LCR（Liquidity Coverage Ratio）上の扱いと HQLA バッファー要件
- **リスクベース連結原則** によるコンデュイット連結（スポンサーがリスクの大半を負う場合、コンデュイットを連結しなければならない）

この複合効果により、市場は 2008  前のピークに比べて大幅に縮小した。

## 5. 現在の市場規模と構造

縮小後の日本の ABCP 市場は、2008  前のピークより実質的に小さいが、次の資金調達チャネルとしてなお意味を持つ。
- **自動車債権** — [[JapanFG/toyota-tsusho-corp|Toyota Tsusho]] およびその他自動車メーカーのキャプティブ自動車金融会社
- **売掛債権** — 製造業者および商社系関連会社
- **設備リース債権** — [[JapanFG/mitsubishi-hc-capital|Mitsubishi HC Capital]]、[[JapanFG/smfl|SMFL]]、[[JapanFG/orix-corp|ORIX]] などのリース子会社
- **消費者金融債権** — 地域消費者金融会社

JSDA の短期 CP 統計は ABCP を企業 CP や銀行 CP と合算しているため、ABCP 固有の残高はスポンサー開示から推定する必要がある。

## 6. 外国人投資家基盤

外国人投資家は、**円短期金利がクロスカレンシースワップ・ベーシス上魅力的な場合**、日本の ABCP の重要な買い手となる。
- USD 資金の外国人投資家が FX スワップで USD を円に交換する場合、ベーシス上乗せと CP 利回りを得る
- USD/JPY ベーシスが大きくマイナスになる時期（例: リーマン後、2010 年代を通じた断続的な局面）には、国内利回りが非常に低くても円 ABCP は魅力的になった
- 主な買い手: 米国プライム MMF（許容される場合）、欧州 MMF、外国銀行トレジャリー、政府系ファンド

外国人投資家比率はベーシスに応じて変動し、JSDA では集計値としてのみ報告される。

## 7. ターム ABS との比較

| 観点 | ABCP コンデュイット | ターム ABS |
|---|---|---|
| 期間 | 30–180  日 CP のロールオーバー | 2–7  年の償却型債券 |
| 流動性リスク | 高い — スポンサー流動性ファシリティが負担 | 低い — マッチファンディング |
| 資本効率 | Basel III 前は高かったが、その後低下 | 安定 |
| 格付け | スポンサー短期格付けにアンカー | プール構造にアンカー |
| 投資家基盤 | MMF、銀行トレジャリー、短期運用ファンド | 生命保険会社、地域銀行 |
| 価格 | OIS + 数 bp | mid-swap + 通常 20–60  bp |

多くの売り手にとって、コンデュイット調達とターム ABS の選択は、債権期間（短期ならコンデュイット、より長い償却型ならターム ABS）と、売り手が継続的なプログラム柔軟性（コンデュイット）を求めるのか、一回限りのターム調達（ABS）を求めるのかに依存する。

## 8. 反論・留意点

- **「流動性バックストップは無料ではない」** — Basel III 後、スポンサーが 100% 流動性ファシリティを提供する資本コストはもはや小さくない。真のコストを載せると、コンデュイット調達は直接銀行借入より実質的に安くないと批判する見方もある。
- **「マルチセラー分散は誇張されている」** — 実務上、多くの日本のコンデュイットは少数の大口売り手（例: 自動車キャプティブ）に集中しており、理論上のマルチセラー分散ほどの効果はない。
- **「リスク移転は部分的である」** — スポンサーが流動性バックストップを提供するため、ABCP は実質的にスポンサー信用リスクを構造化して包んだものであり、CP 投資家への真のリスク移転は限定的である。
- **「FSA 監督の非対称性」** — コンデュイット連結ルールと資本処理は進化してきた。規制境界はターム証券化ほど明確ではない。
- **「外国人投資家は逃げ足が速い」** — クロスカレンシー・ベーシスが円 CP に不利に動くと外国需要は消え、国内投資家基盤（小さい）が供給を吸収することになる。

## 9. 未解決の論点

- [[JapanFG/boj|BOJ]] の金利正常化の下で、日本の ABCP 市場が実質的に回復するかどうか。円短期資金調達にポジティブキャリーが再構築される可能性がある。
- 再生可能エネルギー・リース債権や EV 自動車債権など、明確なサステナビリティ特性を持つ債権プールで、ESG リンク ABCP またはグリーン ABCP が出現するかどうか。
- [[JapanFG/orix-corp|ORIX]] / [[JapanFG/tokyo-century|Tokyo Century]] の非メガバンク・コンデュイットがより活発化した場合の競争上の位置づけ。
- [[JapanFG/japan-post-bank|Japan Post Bank]] が短期保有を JGB から分散する中で、より大きな ABCP 買い手になるかどうか。
- スポンサー流動性ファシリティの経済性に影響する LCR / NSFR ルール改定の経路。

## 関連項目

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[finance/INDEX|finance index]]
- [[JapanFG/mufg|MUFG]] · [[JapanFG/smfg|SMFG]] · [[JapanFG/mizuho-fg|Mizuho FG]]
- [[JapanFG/mitsubishi-hc-capital|Mitsubishi HC Capital]] · [[JapanFG/smfl|SMFL]] · [[JapanFG/orix-corp|ORIX]] · [[JapanFG/tokyo-century|Tokyo Century]]
- [[JapanFG/japan-exchange-group|JPX]] · [[JapanFG/japan-post-bank|Japan Post Bank]]

## 出典

- JSDA commercial paper statistics — https://www.jsda.or.jp/en/
- MUFG IR / Pillar 3  disclosures — https://www.mufg.jp/english/
- SMFG IR / Pillar 3  disclosures — https://www.smfg.co.jp/english/
- Mizuho FG IR / Pillar 3  disclosures — https://www.mizuho-fg.com/index.html
- BOJ short-term money market statistics — https://www.boj.or.jp/en/statistics/
- JCR / R&I コンデュイット格付けコメント（公開資料）

---

> [!info] 校核状態
> confidence: **likely**. ABCP コンデュイット構造、流動性バックストップの仕組み、2008  後の縮小、Basel III の資本影響は、BIS 文書、FSA 開示、スポンサー銀行の Pillar 3  報告書でよく記録されている。具体的な残高数値は報告日と集計方法により異なるため、上記の説明は精密な数値ではなく方向性を示す表現を用いている。
