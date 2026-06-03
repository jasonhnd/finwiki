---
source: structured-finance/repackaging-note-japan
source_hash: eb11f1726543d0fa
lang: ja
status: machine
fidelity: ok
title: "日本のリパッケージ債 — SPV ラップ型の債券 / ローン再組成"
translated_at: 2026-06-03T00:53:08.272Z
---
# 日本のリパッケージ債 — SPV ラップ型の債券 / ローン再組成

## 要約

**リパッケージ債（repack）**は、[[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV]]が基礎となる債務資産（債券、ローン、債券バスケット）を購入し、デリバティブの上乗せ（通貨スワップ、金利スワップ、ときにクレジットデフォルトスワップ）を組み合わせ、通貨、クーポン構造、満期、信用プロファイルの異なる新たなノートを投資家に再発行するストラクチャードクレジット商品である。日本市場には、**機関投資家向けリパック**（通常は大口で、メガバンク系証券や外資系投資銀行が日本の生命保険会社、地域銀行、[[JapanFG/japan-post-bank|JPost]]、年金基金、資産運用会社に販売し、例えば USD 社債を JPY 固定利付債に転換する）と、**個人向けリパック**（小口で、[[JapanFG/nomura-securities|Nomura]]、[[JapanFG/daiwa-securities|Daiwa]]、地域証券会社の個人向け証券ネットワークを通じて販売される。通常は FX や金利トリガーに連動する高クーポン債で、新興国ソブリン債を基礎資産に含むことが多い）がある。ディーラーフランチャイズは、**日本のメガバンク系証券子会社**（[[JapanFG/mufg-securities|MUFG MS]]、[[JapanFG/smbc-nikko|SMBC Nikko]]、[[JapanFG/mizuho-securities|Mizuho Securities]]）と、歴史的に日本でリパック事業を生み出した **外資系投資銀行**（Goldman、Morgan Stanley、J.P. Morgan、Citi、BNP Paribas など）に分かれる。

## ウィキ上の位置づけ

この項目は[[structured-finance/INDEX|structured-finance index]]の配下に置かれる、**デリバティブ上乗せ型ストラクチャード商品**ノードである。法的構造は[[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]、格付パススルーの力学は[[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]、クレジットデリバティブラップ型の変種は[[derivatives/japan-cds-market-overview|Japan CDS market overview]]と照らして読む。制度全体の枠組みは、より広いクレジット市場文脈として[[finance/INDEX|finance index]]を見る。関連項目は[[structured-finance/japan-abs-market-overview|Japan ABS market overview]]である。リパックは構造的に別商品だが、同様の SPV / 格付インフラを使う。

## 1. リパックの基本メカニクス

```
基礎資産
（例：流通市場から購入した
 USD 建て投資適格
 事業会社債）
        |
        v
+---------------------------------+
|      リパッケージ SPV           |
|       （TK / GK または          |
|        マスタートラストのセル） |
|  - 基礎債券を購入               |
|  - クロスカレンシースワップ締結 |
|     （USD クーポンを支払い、    |
|      JPY クーポンを受け取る）   |
|  - 金利スワップ締結             |
|     （任意。例：固定→FRN）      |
|  - JPY 建て新ノートを発行       |
+----+-----------+----------+----+
     |           |          |
 クーポン /   スワップ時価   ノート
 元本          フロー        払込金
     |           |          |
     v           v          v
+----+----+  +---+-----+ +----+----+
|投資家  |  |スワップ | |投資家  |
|ノート  |  |相手方   | |        |
|        |  |         | |        |
+--------+  +---------+ +--------+
```

主な特徴は次のとおり。

- **基礎資産**は通常、買い手ディーラーの在庫または公開市場から調達される。
- **デリバティブの上乗せ**は、キャッシュフローの姿を投資家需要（通貨、クーポン形状、コーラビリティ）に合わせて変換する。
- **ノート投資家**は、基礎発行体の信用リスクを持つ円建て（または他の対象通貨建て）ノートを見る。
- **スワップ相手方**は通常、ディーラーまたはその関連会社であり、ヘッジインフラを提供する。
- **格付**は通常、スワップ相手方リスクの考慮を条件に、基礎債券の格付を通過させる。

## 2. 機関投資家向けリパックと個人向けリパック

| 観点 | 機関投資家向けリパック | 個人向けリパック |
|---|---|---|
| チケットサイズ | 数十億円から数百億円 | 投資家 1 人あたり JPY 約1m から数億円 |
| 基礎資産 | 大型 IG 事業会社債、ときにソブリン | 新興国ソブリン債が多く、ときに仕組み株式連動型 |
| 投資家 | 生命保険会社、地域銀行、JPost、年金、資産運用会社 | 証券会社経由の個人富裕層、地域証券顧客基盤 |
| クーポン | 固定または単純な FRN が多い | FX / 金利トリガー付きの高クーポンが多い |
| 販売 | ディーラーによる機関投資家への直接販売 | 証券ネットワーク |
| ディーラー | メガバンク証券 + 外資系 IB | メガバンク + Nomura / Daiwa + 地域証券 |
| 開示 | 機関投資家向け開示基準 | 個人向け開示基準（より規定的） |
| 投資家リスク | 基礎信用、スワップ相手方、元本保護 | FX / 金利トリガーリスク、ときに元本毀損リスクが追加される |

日本の個人向けリパック市場は特に大きく、トルコ、南アフリカ、ブラジル、メキシコなどの新興国ソブリン信用を円建てノートに再組成して販売する重要なチャネルであった。

## 3. 用途 — 何がリパックされるか

| 用途 | 例示構造 | 投資家需要のドライバー |
|---|---|---|
| **USD 債 → JPY ノート** | USD 建て IG 事業会社債を買い、クロスカレンシースワップで JPY 化し、JPY ノートを発行 | 円資金投資家が FX リスクなしでエクスポージャーを求める |
| **固定 → 変動** | 固定クーポン債を買い、IRS で変動化し、FRN を発行 | 投資家が基礎信用への FRN エクスポージャーを求める |
| **長期 → 短期** | 10年債を買い、ロールオーバースワップまたはコーラブル構造で3年ノートを発行 | 投資家がより短い期間のエクスポージャーを求める |
| **単一発行体 → バスケット** | SPV に複数債券をプールし、トランチングしたノートを発行 | 分散 / 利回り向上 |
| **CDS ラップ型** | 参照債券を買い、CDS を重ね、信用保護付きノートを発行 | 信用保護の構造化 |
| **EM ソブリン個人向け** | EM ソブリン債を買い、FX スワップを組み、高クーポン JPY ノートを発行（FX トリガーによる早期償還機能を伴うことが多い） | ソブリン信用エクスポージャーを伴う利回り需要 |

## 4. ディーラーフランチャイズ — メガバンク証券対外資系 IB

**外資系投資銀行**（Goldman、Morgan Stanley、J.P. Morgan、Citi、BNP Paribas、Société Générale など）は、歴史的に日本におけるリパックフランチャイズの創始者であった。商品を可能にしたストラクチャリング専門性、デリバティブインフラ、クロスカレンシースワップ供給力を持ち込んだ。

**日本のメガバンク系証券子会社**は、時間をかけてリパック事業を構築した。
- [[JapanFG/mufg-securities|MUFG Morgan Stanley Securities]]（合弁）
- [[JapanFG/smbc-nikko|SMBC Nikko Securities]]
- [[JapanFG/mizuho-securities|Mizuho Securities]]

現在の分担はおおむね次のとおり。
- 機関投資家向けリパック: 外資系 IB はクロスカレンシーの複雑案件で強い。日本のメガバンク証券は、より単純な機関投資家向け再組成とリレーション主導の販売で強い。
- 個人向けリパック: 日本の証券会社（[[JapanFG/nomura-securities|Nomura]]、[[JapanFG/daiwa-securities|Daiwa]]、地域証券）が販売を主導する。

## 5. SPV / 法的構造

日本で販売されるリパックの多くは次のいずれかを使う。
- 国内法 SPV としての **TK / GK 構造**（[[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]）。
- 私募により日本の投資家基盤へ発行する **Cayman / Jersey SPV**。
- 1 つの SPV が異なる基礎資産に対して複数シリーズのノートを発行する **マルチイシュアンス・マスタートラスト**構造。

構造選択は、税務効率、投資家基盤、ディーラー選好に依存する。

## 6. 格付の取扱い

格付会社（[[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I]]とグローバル格付会社）は通常、リパックを次のように格付する。
- 基礎債券の**パススルー格付**を、**スワップ相手方リスク**で調整する。
- スワップ相手方の格付が基礎資産と同等以上であれば、リパックノートは通常、基礎資産の格付を得る。
- スワップ相手方の格付が低い場合、リパックノートは二者の低い方で格付され得る。

このため、リパック発行ではディーラー自身の信用格付が重要である。格付の高いディーラーほど、基礎債券の格付を維持したリパックを提供しやすい。

## 7. 2008 後の進化

2008 危機は複数のリパックリスクを露呈した。
- **スワップ相手方の破綻** — Lehman の破綻は、Lehman がスワップ相手方だったリパックノート紛争を引き起こした。
- **担保紛争** — 一部の SPV 担保手当が訴訟化した。
- **投資家損失** — EM エクスポージャーを持つ一部の個人向けリパックで重大な損失が発生した。

2008 後の改革は次のとおり。
- スワップ相手方に標準 CSA（collateral support annex）を導入。
- SPV レベルの担保分別を強化。
- 開示基準を厳格化。
- 個人向けリパック販売慣行に対する FSA の監視を強化。

リパック市場は2008 後も続いたが、より保守的な構造と明確な規制境界の下で運営されている。

## 8. 直接債券投資との比較

| 観点 | 直接債券投資 | リパッケージ債 |
|---|---|---|
| 発行体信用 | ある | ある（パススルー） |
| 通貨 | 発行通貨のまま | スワップにより再構成 |
| クーポン | 発行条件のまま | スワップにより再構成 |
| スワップ相手方リスク | ない | ある |
| 価格 | 市場で決定 | 構造化スプレッドで発行 |
| 流動性 | 流通市場 | 多くの場合より限定的（私募） |
| 利回り | 基礎資産の YTM | 基礎資産の YTM から構造化コストを控除 |

「構造化コスト」（ディーラーマージン）は、直接購入に比べて投資家利回りを低下させるが、カスタマイズの利便性がそのスプレッドを正当化することが多い。

## 9. 反論点

- **「個人向けリパックは不適切販売されている」** — 批判者は、FX トリガー機能（いわゆる「ノックアウト」や「コーラブル」構造）を持つ個人向けリパックが、組み込みオプション / トリガーリスクを十分理解しない投資家に販売されていると長く主張してきた。FSA はガイダンスを出し、開示を厳格化している。
- **「スワップ相手方が集中している」** — ほとんどのリパックノートは、少数の大手ディーラー・スワップ相手方への信用エクスポージャーを持つ。これはストラクチャードクレジット市場に制度的集中を生む。
- **「流動性は見せかけである」** — リパックノートは通常、組成ディーラーとのみ取引される。発行ディーラー外の二次市場流動性は限定的である。
- **「税務取扱いに不確実性がある」** — TK / GK 構造はクロスボーダー税務ルールと相互作用し、ときに投資家に望ましくない驚きを生む。
- **「コスト後の利回り上乗せは小さい」** — 機関投資家にとって、リパック価格に埋め込まれたディーラーマージンは、直接購入にクロスカレンシーヘッジを付けるなどの代替構造に比べ、利回り上乗せを控えめにしか残さないことがある。

## 10. 未解決の論点

- [[JapanFG/boj|BOJ]]の金利正常化下での個人向けリパック市場の規模。国内利回りの上昇が高クーポン個人向け構造への需要を減らすか。
- ESG リンク型リパック（例：グリーンボンドを基礎資産として円建てに再組成するもの）が意味あるシェアを得るか。
- 日本のリパックにおける外資系 IB と国内メガバンク証券の市場シェア推移。
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I]]とグローバル格付会社の手法差がリパック発行経済性に影響するか。
- EM ストレス期の後、新興国ソブリン個人向けリパックに対する FSA 規制が厳格化するか。

## 関連項目

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[structured-finance/abcp-conduit-japan-megabank|ABCP conduit]]
- [[derivatives/japan-cds-market-overview|Japan CDS market overview]]
- [[finance/INDEX|finance index]]
- [[real-estate-finance/INDEX|real-estate-finance index]]
- [[JapanFG/mufg|MUFG]] ・ [[JapanFG/smfg|SMFG]] ・ [[JapanFG/mizuho-fg|Mizuho FG]]
- [[JapanFG/japan-post-bank|Japan Post Bank]] ・ [[JapanFG/japan-exchange-group|JPX]]

## 出典

- JSDA bond market statistics — https://www.jsda.or.jp/en/
- MUFG Morgan Stanley Securities IR (parent disclosure)
- SMBC Nikko Securities IR (parent disclosure)
- Mizuho Securities IR (parent disclosure)
- FSA structured-products disclosure framework
- JCR / R&I public rating commentaries on repackaging notes

---

> [!info] 検証状態
> confidence: **likely**. リパックのメカニズム、ディーラーフランチャイズの分担、2008 後の進化は、業界論評および JSDA / FSA の開示で十分に記録されている。リパック固有の発行額とトランシェデータは公開ベースで集約されていないため、上記の記述は方向性を示す表現を用いている。個人向け不適切販売論争は公開された規制上の論評に基づく。
