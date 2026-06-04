---
source: business/seven-bank-atm-platform-deconsolidation-case
source_hash: 5033f8c1bb6a4d3d
lang: ja
model: claude-opus-4-8
status: machine
fidelity: ok
title: "セブン銀行 ATM プラットフォーム + 連結除外事例 — 銀行間 ATM 手数料で資金調達する小売保有銀行、セブン & i の 2025 年ポートフォリオ再構成で 40% 未満に引き下げ"
translated_at: 2026-06-05T00:00:00.000Z
---

# セブン銀行 ATM プラットフォーム + 連結除外事例 — 銀行間 ATM 手数料で資金調達する小売保有銀行、セブン & i の 2025 年ポートフォリオ再構成で 40% 未満に引き下げ

## ウィキ上の位置づけ

この項目は [[business/INDEX|business INDEX]] の下に、特異な**ビジネスモデル**（ATM 手数料銀行）と **2025 年の連結除外（deconsolidation）**イベントを組み合わせた上場企業の戦略的事例として位置する。ビジネスモデルの側は [[business/toyota-financial-services-captive-finance-case|Toyota Financial Services captive-finance case]] に照らして読むこと — 両者は非預金主導の金融モデルだが、キャプティブが車を売るために ABS で資金調達するのに対し、セブン銀行は店舗 ATM ネットワークから銀行間手数料を稼ぐ。連結除外の側は、金融部門を分離する対照的な*課税繰延スピンオフ*ルートとして [[business/sony-fg-partial-spinoff-case|Sony FG partial spinoff case]] に照らし、株主圧力の下で金融子会社を部分売却する別のコングロマリットとして [[business/rakuten-group-mobile-finance-bundling-case|Rakuten Group mobile-finance bundling case]] に照らして読むこと。事業体 / セクターのプロフィールについては [[regional-banks/seven-bank|Seven Bank]]、[[card-issuers/seven-card-service|Seven Card Service]]、[[payment-firms/seven-payment-service|Seven Payment Service]]、親会社 [[retail/seven-and-i-hd|Seven & i Holdings]]、およびより深い [[retail/seven-i-holdings-finance-deep-dive|Seven & i finance deep dive]] を参照のこと。[[payments/nanaco-prepaid-seven-i|nanaco prepaid]] および [[retail/INDEX|retail INDEX]] とあわせて参照のこと。

## TL;DR

**セブン銀行（TSE プライム 8410）**は、従来型の預金・貸出銀行ではなく **ATM プラットフォーム銀行**である。2001 年に（当初は IY バンクとして）設立され、[[retail/seven-and-i-hd|Seven & i]] の店舗 — セブン-イレブンとイトーヨーカドー — に加え空港、駅、金融機関の支店に ATM を設置し、その機械を利用する顧客を持つ提携金融機関が支払う**1 件あたりの手数料**からコア収益を稼ぐ。これは B2B2C の「ATM-as-a-service」レールである：自身の預金と貸出は限定的で、フランチャイズは**機械のネットワークと引き出しごとの銀行間手数料**であって、ローンのバランスシートではない。

2025 年の戦略的イベント：広範なポートフォリオ再構成の一環として、アクティビストと市場の圧力の下、**セブン & i ホールディングスはセブン銀行への持分を 40% 未満（セブン-イレブン・ジャパンを ～39.9%）に引き下げた**。これはセブン銀行の自社株買いを通じて実行され、そこにセブン & i のユニットが売却した。これによりセブン銀行は**連結子会社から持分法適用関連会社へ**移行した — セブン & i の連結バランスシートから外す連結除外である。同じ 2025 年の計画には、～¥2tn の自社株買い、総合スーパー（スーパーマーケット）事業のベインキャピタルへの売却（公表 ～¥814.7bn）、および北米セブン-イレブン事業の上場計画が含まれていた。アーキテクチャ上の洞察はこうだ。セブン & i は**コンビニのコア**を保ち、収益性が高く著名な金融子会社でさえ**資本とフォーカスのために連結除外する**ポートフォリオ資産として扱った — 金融部門が製品から戦略的に分離不能である [[business/toyota-financial-services-captive-finance-case|captive-finance]] の論理の逆である。

## 1. ATM プラットフォームのビジネスモデル

| 要素 | 仕組み |
|---|---|
| 資産 | セブン-イレブン / イトーヨーカドーの店舗に加え空港、駅、銀行支店にある大規模な ATM フリート |
| コア収益 | カードホルダーがセブン銀行 ATM を利用したときに**提携金融機関が支払う 1 件あたりの手数料** |
| 顧客 | 数百の提携銀行 / カード発行会社のカードホルダー — セブン銀行は彼らを*自社の*預金者として必要としない |
| 自社の銀行業 | 限定的な預金、インターネットバンキング、一部のローン商品 — ATM レールに対して副次的 |
| 成長軸 | インバウンド（海外発行カードの受け入れ、多言語 ATM）と ASEAN 展開（例：フィリピン、インドネシア） |

通常の銀行は預金でファンドしたローンブックから純金利収入を稼ぐ。セブン銀行は代わりに**ユーティリティネットワーク上の交換手数料に類する手数料**を稼ぐ — 提携銀行の引き出しがその機械を多く流れるほど多く稼ぎ、自身の（小さな）預金基盤とはほぼ独立している。だからこそ、貸し手というより **ATM プラットフォーマー / 決済レール運営者**として読むのが最適である。

## 2. なぜ小売業者は ATM 銀行を築いたのか

| 理由 | 効果 |
|---|---|
| 店舗来店のマネタイズ | コンビニの来店を他行顧客からの反復的な手数料ストリームに転換 |
| 現金アクセスのユーティリティ | 買い物客に 24/7 の現金アクセスを与え、店舗を日常生活のハブとして強化 |
| 資本軽量の経済性 | ネットワーク上の手数料モデルは従来型銀行業の信用リスクのバランスシートを回避 |
| エコシステムの接着剤 | [[payments/nanaco-prepaid-seven-i|nanaco]] プリペイド、[[card-issuers/seven-card-service|Seven Card]]、[[payment-firms/seven-payment-service|Seven Payment Service]] と並んでグループの小売金融スタックに位置する |

小売業者のエッジは**物理的な流通** — 高来店の店舗内の不動産 — を金融ユーティリティのレールに変えたことにある。一般的なパターンについては [[retail/store-traffic-as-financial-distribution|store traffic as financial distribution]] を参照のこと。

## 3. 2025 年の連結除外イベント

ポートフォリオを簡素化し株主価値を引き上げる圧力（注目を集めた外部からのアプローチとアクティビストの精査のさなか）の下、セブン & i は 2025 年初頭に変革的な計画を発表した。セブン銀行のコンポーネントは次のとおり。

| ステップ | 詳細 |
|---|---|
| メカニズム | セブン銀行が**自社株買い**を実施；セブン-イレブン・ジャパンと他のセブン & i ユニットが**それに売却** |
| 結果 | セブン & i グループの議決権が **40% 未満（セブン-イレブン・ジャパン ～39.9%）**に低下 |
| 会計上の効果 | セブン銀行が**連結子会社 → 持分法適用関連会社**へ移行（連結除外） |
| より広い計画の文脈 | ～¥2tn の自社株買い；総合スーパー事業のベインキャピタルへの売却（公表 ～¥814.7bn）；北米セブン-イレブン事業の上場計画 |

自社株買いの構造で ～40% を下回ることが、会計を連結から持分法へ反転させ、セブン銀行のバランスシートをセブン & i の帳簿から外す一方で、セブン & i を重要な少数株主かつ商業パートナーにとどめる。（公開されたコメントは、連結除外後の単独のセブン銀行に対する信用格付けの注目に言及し、明示的な親会社連結の喪失を反映していた。）

## 4. 金融部門を分離する 2 つの方法（対照）

| ルート | メカニズム | 税務 / 会計 | 例 |
|---|---|---|---|
| **自社株買い主導の連結除外**（本事例） | 子会社が自社株を買い戻す；親会社が連結閾値を下回る | 持分法へ移行；自社株買いで現金を還元 | セブン銀行 ← セブン & i 2025 |
| **パーシャルスピンオフ（株式分配）** | 親会社株主への株式の現物分配、20% 未満を残存 | [[corporate-strategy/partial-spinoff-tax-deferral|partial-spinoff regime]] の下で課税繰延 | [[business/sony-fg-partial-spinoff-case|Sony FG]] |
| **IPO 売り出し** | 子会社を上場しトランシェを売却 | 売却部分にキャピタルゲイン；親会社へ現金 | [[banking/rakuten-bank|Rakuten Bank]] 2023 — [[business/rakuten-group-mobile-finance-bundling-case|Rakuten case]] 参照 |

セブン & i はセブン銀行についてスピンオフや新規 IPO ではなく自社株買いを通じた連結除外を選んだ（セブン銀行はすでに上場していた）。この選択は、*すでに上場している*子会社を反映しており、目的は新規上場による価値の結晶化ではなく**ポートフォリオの簡素化とバランスシートからの除去**であった。

## 5. 比較 — 日本の小売組み込み型金融モデル

| グループ | 金融ビークル | コア金融収益 | パターン |
|---|---|---|---|
| **セブン & i**（本事例） | [[regional-banks/seven-bank|Seven Bank]] + Seven Card + nanaco | **ATM 銀行間手数料** + カード + プリペイド | 小売 ATM レール、その後 2025 年に連結除外 |
| イオン | Aeon Bank + Aeon credit（Aeon Financial Service） | カード + 銀行スプレッド、汎アジアカード | 小売の完全 FG — [[business/aeon-financial-service-retail-bank-case|Aeon Financial Service case]] 参照 |
| ローソン × KDDI | Lawson Bank + au finance | 銀行 + テレコム金融の連携 | 小売 × テレコム — [[retail/lawson-kddi-retail-finance|Lawson × KDDI retail finance]] 参照 |
| ファミリーマート × 伊藤忠 | FamiPay finance | 決済 + クレジット | 商社系 — [[retail/familymart-itochu-financial-integration|FamilyMart × Itochu integration]] 参照 |

セブン銀行が特異なのは、そのコア金融収益が自社のローンの金利やカードのスプレッドではなく、**他行の顧客が利用する ATM ユーティリティ上の手数料**である点 — そして 2025 年に親会社がそれを**連結除外する**ことを選んだ唯一の存在である点にある。

## 6. 戦略的根拠

**セブン & i** にとって：

- グループをコンビニのコアと北米セブン-イレブンのエンジンに再フォーカスする
- セブン銀行のバランスシートを連結から除去しつつ、～39.9% の経済的持分と商業関係を維持する（ATM は店舗に残る）
- 資本を還元し（自社株買いの構造）、ポートフォリオ簡素化を求めるアクティビスト / 市場の圧力に応える

**セブン銀行** にとって：

- 持分法適用関連会社としてより大きな自律性；自前の立場でインバウンドと ASEAN の ATM 成長を追求できる
- その手数料モデルを支える店舗内 ATM 関係を継続する
- 明示的な親会社連結なしに単独の信用力の精査を負う

## 7. 反論

- 正確なパーセンテージと連結 vs 持分法の正確な閾値は、ガバナンスと会計のテストに依存する；「～39.9% / 40% 未満 / 連結除外」は **2025 年に公表された公開事実**として扱い、将来のあらゆる報告日についての主張ではない
- ATM 手数料モデルは、日本のキャッシュレス化に伴う構造的な現金利用減少に直面する（[[payments/cashless-jp-landscape|Japan cashless landscape]] 参照）；インバウンドの海外カードと ASEAN の取扱量はオフセットであって保証ではない
- 連結除外は資本とフォーカスを還元するが、収益性のある子会社のアップサイドを少数の地位に明け渡す
- 2025 年のポートフォリオ計画（ベインの総合スーパー売却、北米セブン-イレブン上場、～¥2tn の自社株買い）は一連の**公表された意図**である；完了のタイミングと条件は実行と承認に依存する
- 単独のセブン銀行は、大きな親会社の連結子会社でなくなれば、自身の資金調達と格付けの考慮事項を負う

## 8. 未解決の問い

- 国内の現金利用が落ち、コード決済が増えるなか、ATM 銀行間手数料モデルはどれだけ強靭か？
- インバウンド（海外発行カード）と ASEAN の ATM 拡大は、国内現金減少を規模感をもってオフセットするか？
- 持分法適用関連会社の地位は、セブン銀行が自前の銀行業 / 海外戦略をどれだけ積極的に追求するかを変えるか？
- セブン & i はセブン銀行への持分を時間とともにさらに引き下げるか、それとも商業的アンカーとして 39.9% 付近で保つか？
- セブン銀行の連結除外は、より広い 2025 年の再構成（ベインの総合スーパー売却、北米セブン-イレブン上場）に、「CVS のコアへのフォーカス」という単一のテーゼとしてどう適合するか？

## 関連

- [[business/INDEX|business INDEX]]
- [[business/toyota-financial-services-captive-finance-case|Toyota Financial Services captive-finance case]]
- [[business/sony-fg-partial-spinoff-case|Sony FG partial spinoff case]]
- [[business/rakuten-group-mobile-finance-bundling-case|Rakuten Group mobile-finance bundling case]]
- [[business/aeon-financial-service-retail-bank-case|Aeon Financial Service retail-bank case]]
- [[regional-banks/seven-bank|Seven Bank]]
- [[card-issuers/seven-card-service|Seven Card Service]]
- [[payment-firms/seven-payment-service|Seven Payment Service]]
- [[retail/seven-and-i-hd|Seven & i Holdings]]
- [[retail/seven-i-holdings-finance-deep-dive|Seven & i finance deep dive]]
- [[retail/store-traffic-as-financial-distribution|store traffic as financial distribution]]
- [[retail/lawson-kddi-retail-finance|Lawson × KDDI retail finance]]
- [[retail/familymart-itochu-financial-integration|FamilyMart × Itochu financial integration]]
- [[payments/nanaco-prepaid-seven-i|nanaco prepaid]]
- [[payments/cashless-jp-landscape|Japan cashless payment landscape]]
- [[corporate-strategy/partial-spinoff-tax-deferral|partial spinoff tax deferral]]
- [[retail/INDEX|retail INDEX]]
- [[INDEX|FinWiki index]]

## ソース

- Seven Bank corporate (English): https://www.sevenbank.co.jp/english/corp/
- Seven & i Holdings financial-services IR library (2025): https://www.7andi.com/en/ir/library/co_financial/2025/finance/
- Seven & i Holdings — "Plan to Unlock Shareholder Value Through Leadership Changes and Transformational Capital and Business Initiatives" (2025): https://www.prnewswire.com/news-releases/seven--i-holdings-announces-plan-to-unlock-shareholder-value-through-leadership-changes-and-transformational-capital-and-business-initiatives-302394438.html
- MarketScreener — "7-Eleven Owner Plans to Cut Stake in Financial-Services Business" (Seven Bank buyback / below 40%): https://www.marketscreener.com/quote/stock/SEVEN-BANK-LTD-10850636/news/7-Eleven-Owner-Plans-to-Cut-Stake-in-Financial-Services-Business-50283751/
- Seven & i Holdings — share / stock overview: https://www.7andi.com/ir/stocks/overview.html

---

> [!info] 校核状态
> confidence: **likely**. セブン銀行の ATM プラットフォーム手数料モデル、その店舗内 ATM フットプリント、そして 2025 年のセブン & i 持分のセブン銀行自社株買いを通じた 40% 未満（セブン-イレブン・ジャパン ～39.9%）への引き下げ — より広い 2025 年の再構成（～¥2tn の自社株買い、ベインの総合スーパー売却 ～¥814.7bn、北米セブン-イレブン上場計画）のなかでそれを持分法適用関連会社へ転換すること — は、セブン & i / セブン銀行の IR と信頼できる金融報道で開示されている。正確な継続的パーセンテージ、完了のタイミング、単独の格付け結果は時点ごと / フォワードルッキングであり、実行に依存する。
