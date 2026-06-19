---
source: structured-finance/japan-clo-issuance-japanese-banks
source_hash: b65ef6f8e28c8e88
lang: ja
status: machine
fidelity: ok
title: "CLO 投資家としての日本の銀行 —— 農林中金、ゆうちょ、地方銀行"
translated_at: 2026-06-19T12:43:19.940Z
---

# CLO 投資家としての日本の銀行 —— 農林中金、ゆうちょ、地方銀行

## TL;DR

日本の銀行 —— [[cooperative-banks/norinchukin|Norinchukin]] を筆頭に、[[regional-banks/japan-post-bank|Japan Post Bank]] およびその背後の地方銀行のティアを伴って —— は、2010 年代を通じて、米国の広範にシンジケートされたローン（BSL）CLO の世界最大の単一保有者となった。これは円建て JGB に対する利回りのピックアップと、シニア・トランシェの AAA / AA の安全性とみなされたものに引き寄せられたものである。このエクスポージャーは 3 つの規制上の転換点を通過した: **ドッド・フランク法第 941 条のリスク・リテンション・ルール**（2018  年の裁判所判決の後、オープンマーケット CLO マネージャーをリテンション要件から実質的に免除し、市場を解放した）、**2018  年のリスク・リテンション危機**（その間、農林中金とゆうちょは方法論および FSA 監督の不確実性をめぐって購入を一時停止した）、および **2024  年の農林中金の損失開示**（外国債券および CLO ポートフォリオの時価評価損が、外国信用リスク資産保有の削減表明を促した）である。地方銀行は同じ期間に、より小規模だが無視できない CLO ポートフォリオを構築した；FSA の開示および BOJ 金融システムレポートは現在、地方銀行の CLO エクスポージャーをウォッチリスト項目として扱っている。

## Wiki route

このエントリは [[structured-finance/INDEX|structured-finance index]] のもとに、**CLO 投資家としての日本** ノード —— 買い手側から見たストラクチャード・ファイナンスの角度 —— として位置する。国内発行側については [[structured-finance/japan-abs-market-overview|Japan ABS market overview]] と、グローバル格付け機関の基準との対比については [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]] と、ヘッジのコンテキストについては [[derivatives/japan-cds-market-overview|Japan CDS market]] と併せて読むこと。システムのフレーム: 上流のローン組成側については [[finance/INDEX|finance index]] および [[finance/japan-leveraged-buyout-economics|Japan LBO economics]]。機関のアンカー: [[cooperative-banks/norinchukin|Norinchukin]]、[[regional-banks/japan-post-bank|Japan Post Bank]]、および [[megabanks/mufg|MUFG]] / [[megabanks/smfg|SMFG]] / [[megabanks/mizuho-fg|Mizuho FG]]（メガバンクも CLO 保有者だが、相対的により小さい規模である）。

## 1. CLO とは何か —— 短い復習

米国の広範にシンジケートされたローン（BSL）の **ローン担保証券（CLO）** は、約 100–250 本のシニア・セキュアード・レバレッジド・ローン（典型的には米国の発行体、B/B+ 格付け）のポートフォリオを保有し、トランシェ化された負債を発行することでそのポートフォリオに資金を供給する [[structured-finance/spv-tk-gk-vehicle-japan-tax|special-purpose vehicle]] である:
- AAA シニア・トランシェ（資本構造の約 60%）
- AA / A / BBB / BB メザニン・トランシェ
- エクイティ・トランシェ（残余）

シニア AAA CLO の利回りは、(i) 構造的複雑性プレミアムおよび (ii) 原資産プールのレバレッジド・ローン・エクスポージャーのために、**同等の事業会社 AAA / AA 債券に対するピックアップ** を提供する。円で資金調達し USD にスワップする日本の銀行にとって、FX ヘッジ後のオールイン利回りは、歴史的に JGB のリターンに対して魅力的であった。

## 2. 日本の買い手基盤 —— 3 つの同心円的ティア

### ティア 1: 農林中金
- [[cooperative-banks/norinchukin|Norinchukin]] —— 農業協同組合の中央銀行 —— は 2010 年代後半までに米国 BSL CLO の世界最大の単一保有者となった
- ピーク時には、外国債券保有（CLO、エージェンシー MBS、ソブリン債、事業債を含む）は連結ベースで数十兆円に達した
- この戦略は、円建て JGB の構造的に低い利回りと、農業協同組合の組合員基盤に分配するためのリターンを生み出すという当機関のマンデートによって駆動された

### ティア 2: ゆうちょ銀行
- [[regional-banks/japan-post-bank|Japan Post Bank]] —— 日本郵政ホールディングスの預金受入部門 —— も民営化後に相当な外国債券およびストラクチャード・クレジットのポートフォリオを構築した
- CLO エクスポージャーは、外国信用配分の合計のうち意味があるが、より小さいシェアである
- ゆうちょの分散マンデート（JGB 主導の配分から離れること）が積み上げを駆動した

### ティア 3: 地方銀行
- いくつかの日本の地方銀行は、より小規模な CLO ポートフォリオを構築した —— 個々の銀行の典型的なエクスポージャーは数十億から数千億円の低位である
- 集中は不均一である —— 少数の地方銀行が不釣り合いに大きな CLO ポジションを取った
- FSA および BOJ は、外国信用ストラクチャード・プロダクトにおける地方銀行の集中について警告を公表してきた

## 3. ドッド・フランク法第 941 条のリスク・リテンション —— 2010 年代の規制の弧

米国のドッド・フランク法第 941 条は、証券化スポンサーがストラクチャード・クレジットの発行において信用リスクの ≥5% を保有することを要求し、2008 後にオリジネーターと投資家の利益を一致させることを意図していた。

### 2014–2016: 初期の実装
- 米国 BSL CLO マネージャーは、発行する各 CLO の 5% を保有しなければならなかった
- バランスシートのキャパシティを持たないより小規模な CLO マネージャーにとって、これは重大な構造的制約であった
- 一部のマネージャーは、過半数所有の関連エンティティを通じて発行するか、「ホリゾンタル」リテンション（エクイティの 5%）対「バーティカル」リテンション（各トランシェの 5%）を使用した

### 2018: LSTA 裁判所判決
- ローン・シンジケーション・アンド・トレーディング・アソシエーション（LSTA）は、オープンマーケット CLO マネージャー（ローンを組成するのではなく市場で購入する者）が第 941 条のもとで **「証券化人」ではない**、したがってリテンションの対象ではないとする裁判（LSTA v. SEC and Federal Reserve）に勝訴した
- これは米国 BSL CLO マネージャーからリテンションを実質的に取り除き、CLO の発行の回復が続いた

### 日本の買い手への影響
- リテンション要件の期間（2014–2018）は CLO の供給を制約し、価格を支えた
- 2018  年の裁判所判決は供給を解放した —— そして日本の買い手は 2018–2019
を通じて供給の大部分を吸収した- この判決はまた、日本の銀行監督者にとって **方法論の不確実性** を生み出した —— リテンションが要求されないならば、FSA は国内銀行が保有する CLO のアラインメント・リスクをどのように評価するのか？

## 4. 2018  年のリスク・リテンション危機（日本の銀行の角度）

リテンションの規制レジームが変化していた 2018,  年の間、いくつかの日本の監督および開示のイベントが、農林中金および他の日本の買い手に **CLO の購入を一時的に停止する** ことを促した:
- 海外信用プロダクトの保有に関する FSA の開示期待が厳格化した
- 日本の銀行の内部リスク方法論は、LSTA 判決後のリテンション情勢を反映するために更新を必要とした
- 一部の日本の買い手は 2 年下半期2018

の間に新発行への参加を減らした一時停止は穏当であり、農林中金は 2019,  年に市場に復帰したが、それはより大きな 2024  年のエピソードを予兆していた。

## 5. 2024  年の農林中金の外国債券損失開示

2024,  年半ばに、[[cooperative-banks/norinchukin|Norinchukin]] は外国債券および CLO ポートフォリオの時価評価損を公に開示した。その駆動要因は:
- 米国の利上げ（2022–2023）が固定金利の外国債券の市場価値を低下させた
- 2 年下半期2023 / 2024 の信用スプレッドの拡大が CLO の時価評価に影響した
- 円安が、ヘッジなしベースでの外貨建て損失の円換算後の規模を増大させた

当機関は以下を発表した:
- 外国信用リスク資産保有の計画的削減（具体的には外国債券を含む；CLO はより広範なカテゴリーの一部であった）
- 損失を吸収するための資本増強ステップ
- より多くの円建て、FX ヘッジ・コストにより敏感でない保有への中期的な戦略的シフト

この開示は、日本の地方銀行の CLO エクスポージャーへのより広範な精査を促した —— FSA と BOJ はともに、その後の刊行物で地方銀行の外国信用プロダクトの集中を監督上の懸念として指摘した。

## 6. 農林中金の開示後の地方銀行の CLO エクスポージャー

地方銀行のティアは異質である:
- 一部の地方銀行は外国信用ストラクチャード・プロダクトからほぼ撤退した
- 他の銀行（特に強力な投資有価証券チームを持つ一握り）は CLO ポジションを保持した
- FSA の検査プロセスは現在、CLO の評価、ヘッジ、および集中の精査を含む

2024  年後の図は依然として進展中である —— 一部の地方銀行は貸倒引当のキャパシティを使用して時価評価を吸収し保有を続けている一方、他の銀行は売却を通じて損失を顕在化させた。

## 7. 日本国内のストラクチャード・クレジットとの比較

日本の銀行は両方に投資する:
- **日本国内のストラクチャード・クレジット** —— [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I]] が格付けする RMBS、オートローン ABS、CMBS、円建て、FX リスクなし
- **海外のストラクチャード・クレジット** —— 主に米国 BSL CLO、USD 建てで FX ヘッジのオーバーレイ付き

海外配分は利回りピックアップ戦略を駆動したが、保有者を (i) 米国の信用スプレッド・リスク、(ii) FX ヘッジ・コスト（米/日の金利差が 2022 後に拡大するにつれて高価になった）、および (iii) クロスボーダーの監督上の複雑性にさらした。

## 8. 反論

- **「AAA CLO は一度もデフォルトしたことがない」** —— 日本の銀行の CLO 戦略の擁護者は、AAA CLO トランシェが 2008–2009 を通じてさえほぼゼロの歴史的デフォルト率を持つと指摘する；問題は時価評価であって実現損失ではない
- **「殺し屋は FX ヘッジ・コストであって信用ではない」** —— 2024  年の農林中金の損失は、CLO 固有の信用劣化よりも、むしろ米国の利上げ（デュレーション）と FX ヘッジの経済性によって駆動された；これは CLO の話というよりもむしろ満期ミスマッチ / ヘッジ・コストの話である
- **「集中は日本に固有ではない」** —— CLO の買い手としての農林中金の規模は目立っていたが、CLO へのグローバルな保険および年金のフローは同等である；日本の銀行のフレーミングは 1 つの買い手カテゴリーを切り離している
- **「地方銀行は分析インフラを欠いている」** —— 批評家は、地方銀行が米国 BSL CLO エクスポージャーを独立して引き受ける内部能力を持たず、格付け機関のラベルに依存していたと主張する —— FSA の監督上の注意を促した現実のリスクである
- **「リテンション免除は一度限りの贈り物だった」** —— 2018  年の LSTA 判決は、供給を拡大することで短期的に日本の買い手に利益をもたらしたが、その不在が次の信用サイクルにおいてのみ現れるかもしれないアラインメント・メカニズムを取り除いた

## 9. 未解決の問い

- 2026–2028
にわたる農林中金の外国信用資産削減のペースと規模- FSA が地方銀行に明示的な CLO 集中限度を課すかどうか
- 日本の投資家の需要が BSL CLO からミドルマーケットまたはダイレクト・レンディング・ファンドの構造へとローテーションするかどうか
- 日本の買い手が持続的に後退した場合の米国 CLO の新発行供給への含意
- [[regional-banks/japan-post-bank|Japan Post Bank]] が農林中金の軌跡に従うか、それとも分岐するか
- CLO の引受人としての、また直接的な CLO 購入の競争相手としての [[megabanks/mufg|MUFG]] / [[megabanks/smfg|SMFG]] / [[megabanks/mizuho-fg|Mizuho FG]] の証券子会社の役割

## Related

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]
- [[derivatives/japan-cds-market-overview|Japan CDS market overview]]
- [[finance/INDEX|finance index]] · [[finance/japan-leveraged-buyout-economics|Japan LBO economics]]
- [[cooperative-banks/norinchukin|Norinchukin]] · [[regional-banks/japan-post-bank|Japan Post Bank]]
- [[megabanks/mufg|MUFG]] · [[megabanks/smfg|SMFG]] · [[megabanks/mizuho-fg|Mizuho FG]]
- [[financial-regulators/japan-exchange-group|JPX]]

## Sources

- Norinchukin IR — https://www.nochubank.or.jp/en/
- Japan Post Bank IR — https://www.jp-bank.japanpost.jp/en/
- FSA bank supervision disclosures and Financial System Report references
- BOJ Financial System Report (regional-bank credit-product holdings) — https://www.boj.or.jp/en/
- JSDA structured-finance statistics — https://www.jsda.or.jp/en/
- LSTA v. SEC court decision (public court records, 2018)

---

> [!info] 校核状态
> confidence: **likely**。農林中金 / ゆうちょの CLO 保有者の話、2018  年のリテンション危機、および 2024  年の損失開示は、すべて公開 IR および監督上のコミュニケーションの事項である。具体的な残高の数字およびトランシェの配分は、ここでは単一点の精度では示されていない —— それらは開示間で実質的に異なる。地方銀行のエクスポージャーは、個々の銀行の開示が乏しいため、一般的な用語で記述されている。
