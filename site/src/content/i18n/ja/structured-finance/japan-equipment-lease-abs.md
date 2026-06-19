---
source: structured-finance/japan-equipment-lease-abs
source_hash: 14fb1e37e61b86e8
lang: ja
status: machine
fidelity: ok
title: "Japan equipment lease ABS — residual-value risk, true-lease vs finance-lease split"
translated_at: 2026-06-19T12:43:19.989Z
---

# Japan equipment lease ABS — residual-value risk, true-lease vs finance-lease split

## TL;DR

日本の設備リース ABS は、三大独立系リース会社（[[leasing-firms/mitsubishi-hc-capital|Mitsubishi HC Capital]]、[[leasing-firms/tokyo-century|Tokyo Century]]、[[leasing-firms/orix-corp|ORIX]]）と銀行系リース部門（みずほ・丸紅傘下の [[leasing-firms/fuyo-lease|Fuyo Lease]]、SMFG 傘下の三井住友ファイナンス＆リース、みずほ傘下の [[leasing-firms/ibj-leasing|IBJ Leasing]]）によって控えめな年間ボリューム（約 JPY 200–400  十億）で発行され、**機械、輸送機器、IT/オフィス機器、医療機器、再生可能エネルギーインフラのリース債権** を ABS プールにパッケージ化する。このアセットクラスは、二つの特徴により **ローン ABS とは構造的に異なる**：（1）日本基準（J-GAAP）および IFRS 16  の下での **真正リース対ファイナンスリースの分類** — ファイナンスリースは実質的にすべてのリスク/リターンをレッシー（賃借人）に移転し、経済的にローンに似ている；真正リース（会計分類上のオペレーティングリース）は残価リスクをレッサー（賃貸人）に留保し、レッサーがリース終了時に機器の価値を予測・回収することを要求する；（2）レッシーの信用リスクの上に乗る **残価リスク** — レッシーのデフォルトがゼロであっても、機器のリース終了時の実現価値が計上残価を下回れば、レッサー（および ABS）は損失を被る。格付機関は、残価のヘアカットを吸収するために、オートローン ABS（6–12%）に対して **より高い劣後（AAA シニアで 10–15%）** を適用する；真正リース比率の高いプールはより深いエンハンスメントを伴う。オートリース ABS と比べて、設備リースプールは機器タイプがより異質であり（速く減価する IT/オフィスと、より長く価値を保つ機械を混在させる）、集中リスクがより高い（コーポレートのレッシー対粒度の細かい消費者）。格付は [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I]] による。

## Wiki route

この項目は **設備リース ABS の運用メカニクス** ノードとして [[structured-finance/INDEX|structured-finance index]] の下に位置する。比較可能な担保付プール ABS との対比については [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]] と、無担保との対比については [[structured-finance/japan-consumer-loan-abs-structure|Japan consumer-loan ABS structure]] と、リボルビングプールとの対比については [[structured-finance/japan-credit-card-receivable-abs|Japan credit-card receivable ABS]] と、方法論レイヤーについては [[structured-finance/jcr-ri-japan-securitization-rating-methodology-operating-playbook|JCR / R&I securitization rating methodology operating playbook]] と対照して読むこと。リース業界のルーティング：リース会社の経済性については [[finance/INDEX|finance domain]]；不動産リースとの対比については [[real-estate-finance/INDEX|real-estate-finance domain]]。

## 1. The repeat issuer landscape

| Issuer | Parent / affiliation | Asset focus | Annual ABS issuance (approx) |
|---|---|---|---|
| [[leasing-firms/mitsubishi-hc-capital|Mitsubishi HC Capital]] | 三菱（三菱 UFJ リースと日立キャピタルの合併により 2021  に設立） | 機械、IT/オフィス、輸送、不動産リース、再生可能エネルギー | JPY 80–150  十億 |
| [[leasing-firms/tokyo-century|Tokyo Century]] | 独立系（伊藤忠 / 東京 MUFG 関連の株主） | 航空機、船舶、IT/オフィス、輸送、再生可能エネルギー、環境 | JPY 60–120  十億 |
| [[leasing-firms/orix-corp|ORIX]] | 独立系の多角化金融グループ | 設備リース（機械、車両、IT）、加えてより広い金融 | JPY 50–100  十億 |
| [[leasing-firms/fuyo-lease|Fuyo Lease]] | みずほ / 丸紅 系列 | 一般設備 + オートフリートリース | JPY 30–60  十億 |
| Sumitomo Mitsui Finance & Leasing | SMFG / 住友商事 系列 | 設備 + ベンダーファイナンス | JPY 40–80  十億 |
| [[leasing-firms/ibj-leasing|IBJ Leasing]] | みずほグループ | 設備 + ストラクチャードリース | JPY 20–50  十億 |
| [[leasing-firms/ricoh-leasing|Ricoh Leasing]] | リコーグループ系列 | オフィス機器中心 | JPY 15–40  十億 |
| 地方銀行系列のリース部門（[[leasing-firms/chibagin-leasing|Chibagin Leasing]]、[[leasing-firms/iyogin-leasing|Iyogin Leasing]]、[[leasing-firms/yokohama-bank-leasing|Yokohama Bank Leasing]] など） | 各種地方銀行 | 地域中小企業の設備リース | 個別の発行は控えめ；一部プール案件 |

上位三独立系が公募リース ABS 発行の大半を占める。銀行系リース会社は親銀行の資金調達枠にアクセスでき、ABS への依存度が低い；彼らはコアのトレジャリーとしてではなく、資本リリーフや資金調達の多様化のために機会主義的に ABS を発行する。

## 2. Pool composition — equipment-type mix

| Equipment type | Typical share in mixed pool | Typical lease tenor | Residual-value profile |
|---|---|---|---|
| **機械（産業 / 建設 / 農業）** | 25–40% | 5–7  年 | リース終了時に原価の 30–50% の価値を保持 |
| **車両 / 輸送（商用トラック、フリート車両、フォークリフト）** | 15–30% | 3–5  年 | 25–40% の価値を保持（中古商用車市場は流動的） |
| **IT / オフィス機器（PC、サーバー、コピー機、ネットワーク機器）** | 15–25% | 3–5  年 | 5–15% の価値を保持（急速な技術的減価） |
| **医療機器（画像、モニタリング、ラボ）** | 5–15% | 5–7  年 | 30–60% の価値を保持（維持されれば長い耐用年数） |
| **再生可能エネルギー / 環境（太陽光パネル、バイオガス機器）** | 5–10% | 10–15  年 | 長期限；残価モデリングは複雑 |
| **その他 / 特殊** | 5–15% | 様々 | 機器固有 |

ミックスが重要な理由：
- **急速に減価する機器**（IT/オフィス）は、残価が低く予測可能であるため、しばしばファイナンスリース分類になる；プールの利回りはローンに似ている
- **緩やかに減価する機器**（機械、医療）は、残価が意味を持ち、レッサーがアップサイド（およびリスク）を保持したいため、しばしば真正リースになる；格付機関の劣後はより深い
- **ミックスプール** はこれらをバランスさせる — よく構造化された案件は、高残価リスク機器を定められた比率に制限する

## 3. True-lease vs finance-lease — the central distinction

日本基準および IFRS 16  はリースを経済的実質によって分類する：

| Classification | J-GAAP / IFRS 16 view | Economic substance | ABS treatment |
|---|---|---|---|
| **ファイナンスリース（ファイナンスリース）** | 実質的にすべてのリスク/リターンをレッシーに移転；レッサーは債権を計上；レッシーは資産+負債を計上 | 機器を担保とする担保付ローンと経済的に同等 | キャッシュフロープロファイルはローンに似ている；残価リスクは最小（通常はゼロ残価）；格付機関の取扱いはオートローン ABS に類似 |
| **真正リース / オペレーティングリース（オペレーティングリース）** | レッサーが実質的なリスク/リターンを留保；レッサーは資産を計上；レッシーは賃借料費用を計上 | レッサーが残価を予測・回収；レッサーが期末に機器を引き取る | キャッシュフロープロファイルは二つの構成要素を持つ：リース賃料ストリーム + 残価実現；ABS は両方について構造化しなければならない |

**ファイナンスリース ABS プール**：
- レッシーは固定の月次リース賃料を支払う = 全元本 + 利息
- リース終了時、レッシーは機器を返却する（事実上それを支払い済み）か、名目コストで買い取る（日本の用語で 1  円リース）かのいずれかが可能
- 機器の所有権は、常に法的にではないにせよ経済的に移転する
- ABS の構造化：劣後は信用リスクに合わせてサイズ設定；残価リスクはほぼゼロ（ゼロまたは 1 円残価）

**真正リース ABS プール**：
- レッシーは月次リース賃料を支払う = 機器コストの一部 + サービス構成要素
- リース終了時、レッサーは機器を引き取る；セカンダリー市場で売却する（または再リースする）
- 実現した再販価値（または再リース収入）はレッサー（および ABS 保有者）に帰属する
- ABS の構造化：劣後は **信用リスク + 残価リスク** に合わせてサイズ設定；より深いエンハンスメントが必要

**実務におけるプールミックス**：大半の日本の設備リース ABS プールは両方を組合せる。純ファイナンスリースプール（IT/オフィスに典型的）はローン ABS に類似して格付けされる；純真正リースプール（稀；航空機 / 船舶に典型的）は構造上のイノベーションを要する。ミックスプール案件は、残価エクスポージャーをリングフェンスするために **個別の残価リザーブ** を使用する。

## 4. Residual-value risk modelling

真正リース構成要素について、格付機関は以下を通じて残価をストレスする：

| Stress | Description | Typical haircut |
|---|---|---|
| Base-case residual | 案件開始時に計上されるレッサーの契約上残価 | — |
| Market-recovery base case | リース終了時の現実的なミッドマーケットのセカンダリー機器価値 | 契約上残価の 80–100% |
| Stress scenario | リセッション + セカンダリー市場の流動性ストレス | 契約上残価の 50–70% |
| Severe-stress scenario | 機器の陳腐化 + 市場崩壊 | 契約上残価の 25–50% |

各格付カテゴリーにおける **残価ヘアカット** が残価リザーブのサイズ設定を駆動する — AAA シニアについて、格付機関は通常シビアストレス（25–50% の回収）までストレスし、プール残価の 10–25% を残価リザーブとして利用可能にすることを要求する。

**機器タイプの感応度**：
- IT 機器：残価モデリングは容赦ない — ムーアの法則による陳腐化が 5  年目のセカンダリー価値を極めて不確実にする
- 機械：残価はより安定的だが、景気循環産業のプール（例：リセッション下の建設機械）は深刻な価値下落を見ることがある
- 車両：日本の中古商用車市場は流動的（USS トラックオークション等）；残価は予測可能
- 医療：先進機器の技術的ライフサイクルは短い；古い装置は着実だが逓減する価値を持つ
- 再生可能エネルギー / 太陽光：固定価格買取（FIT）制度が機器残価に影響する（パネルは再配置のために価値があるかもしれないし、ないかもしれない）

## 5. Comparison with auto-lease ABS

| Dimension | Equipment lease ABS | Auto-lease ABS (typically auto-OEM captive) |
|---|---|---|
| Pool size | 数百から数千のリース | 数万のリース（より粒度が細かい） |
| Lessee profile | コーポレートのレッシー（中小企業 + 大企業） | コーポレートフリート + リテール消費者のミックス |
| Concentration risk | より高い（コーポレートのレッシーは集中したオブリガーリスクを意味する） | より低い（粒度の細かいリテールプール） |
| Residual-value risk | 高い変動性（機器タイプのミックス） | 中程度（確立された中古車市場） |
| Tenor | 3–7  年が典型 | 3–5  年が典型 |
| Default volatility | 中程度（レッシーの信用サイクルに感応的） | より低い（消費者プールは粒度が細かい） |
| Subordination for AAA senior | 10–15% | 6–10% |
| Residual-value reserve | プール残価の 10–25% | プール残価の 8–15% |

設備リース ABS プールは、オートリースプールにはない **単一機器タイプの集中限度** にも直面する — 残価モデリングが過度に不確実になるため、プールは IT 機器を > 25–35% 保有できない。

## 6. Credit enhancement stack

| Layer | Typical sizing for AAA senior (mixed pool) |
|---|---|
| Subordination (mezz + equity) | 原プールの 10–15% |
| Cash reserve at closing | シニアの 1.5–3.0% |
| Cash reserve target | 2.5–4.5%（超過スプレッドから積み上げ） |
| Residual-value reserve (separate from cash reserve) | プール残価エクスポージャーの 10–25% |
| Excess spread (1st defense) | プールに対し年率 3–7% |

残価リザーブが特徴的な点である — それは残価実現のショートフォールのために **個別に資金手当てされリングフェンスされており**、信用損失リザーブとプールされない。

## 7. The waterfall — split between rental and residual

| Priority | Item |
|---|---|
| 1 | サービサーフィー（年率 0.30–0.60%） |
| 2 | トラスティー / アカウントバンクのフィー |
| 3 | シニア利息 |
| 4 | メザニン利息 |
| 5 | キャッシュリザーブの補充（信用損失リザーブ） |
| 6 | 残価リザーブの補充 |
| 7 | 元本（案件に応じてシーケンシャルまたはプロラタ） — 月次リース賃料 + 機器処分代金から流れる |
| 8 | エクイティ / 残価をオリジネーターへ |

異例の運用上の特徴：元本キャッシュフローは **二つのストリーム** から来る — （1）各月次支払いのリース賃料構成要素（予測可能、スケジュール化）、および（2）**リース終了時の機器処分代金**（ランピーで市場依存）。これにより、元本の返済タイミングがローン ABS プールよりも予測しにくくなる。

## 8. Rating-agency methodology specifics

| Methodology element | JCR / R&I approach |
|---|---|
| Lessee credit | 各レッシーへの内部信用スコアリング + オリジネーターのスコアリング方法論 |
| Pool concentration | 単一レッシー、単一機器タイプ、単一産業の集中に対する限度 |
| Lease structure | 真正リース対ファイナンスリースの分割を開示；劣後はそれに応じてサイズ設定 |
| Residual-value | 機器タイプ固有の残価カーブ；ストレスシナリオごとのヘアカット |
| Servicer | オリジネーター（通常はリース会社自身）；運用能力 + バックアップサービサー |
| Recovery | 機器処分のタイミング + 実現価値対計上残価 |

方法論の詳細は [[structured-finance/jcr-ri-japan-securitization-rating-methodology-operating-playbook|operating playbook]] に。

## 9. Funding mix role for leasing companies

[[leasing-firms/mitsubishi-hc-capital|Mitsubishi HC Capital]] / [[leasing-firms/tokyo-century|Tokyo Century]] / [[leasing-firms/orix-corp|ORIX]] にとって、リース ABS は以下と並ぶ：

- **銀行枠資金調達**（メガバンクからのコミット済み信用ファシリティ）
- **社債発行**（これらの発行体は IG 格付を持つため）
- **コマーシャルペーパー**（短期資金調達のため）
- **スクーク / クロスボーダー発行**（通貨 / 投資家の多様化のため）

ABS は以下を提供する：
- **オフバランスシートの資本リリーフ**（バーゼル III の証券化取扱いの下で）
- **資金調達の多様化**（社債とは異なる投資家ベース）
- リース債権の存続期間に対する **テナーマッチング**
- **格付アービトラージ**（IG 発行体格付にもかかわらず AAA シニア）

銀行系リース部門（[[leasing-firms/fuyo-lease|Fuyo Lease]]、SMFL、[[leasing-firms/ibj-leasing|IBJ Leasing]]）はより安価な親銀行資金調達にアクセスできるため、ABS 発行は機会主義的である — 独立系にとってよりも、彼らのトレジャリーにとってコアではない。

## 10. Counterpoints

- **「リース ABS はルールが追加されただけのオートローン ABS だ」** — 真正リースの残価リスクはキャッシュフロープロファイルを真に変える；残価リザーブは表面的なものではなく、意味のある構造上のイノベーションである
- **「IT 機器リースは ABS プールに入れるべきではない」** — 批判者は残価の不確実性が高すぎると主張する；擁護者はファイナンスリース分類 + ゼロ残価の構造化がリスクを管理可能にすると指摘する
- **「集中が問題だ」** — コーポレートのレッシーは、中規模のプールであっても測定可能な単一名リスクを意味する；緩和策は集中限度とレッシー信用スコアリングである
- **「日本では残価市場が浅い」** — 一部の機器タイプ（特殊な産業機械）について、セカンダリー市場は薄い；ヘアカットがこれを反映する
- **「銀行系リースが支配的 — 独立系の ABS 発行は縮小している」** — 統計的には銀行系の方がオリジネーションボリュームが大きいが、資金調達ミックスの経済性のために独立系の方が大きな ABS 発行体である
- **「再生可能エネルギーのリース ABS は爆発的に増える」** — 太陽光 PV と洋上風力のプロジェクトリースは成長しているが、オペレーティングリース対ファイナンスリースの分類と FIT 制度の感応度がこれを特殊なケースにしている

## 11. Open questions

- ESG リンクのリース ABS（再生可能エネルギー / バッテリー / EV 充電インフラのプール）が独立したサブセグメントになるかどうか
- IFRS 16  の採用（グローバルにレッシーにとって大半のオペレーティングリースをオンバランスシートに移した）が、日本で真正リース / ファイナンスリースの経済性を有意に再形成するかどうか
- [[leasing-firms/mitsubishi-hc-capital|Mitsubishi HC Capital]] の買収拡大が、多様な機器タイプのプールを ABS に追加し続けるかどうか
- リース ABS の構造化における [[leasing-firms/tokyo-century|Tokyo Century]] の航空 / 船舶ファイナンス資産の役割（あるいは個別の航空機 / 船舶 ABS を通じて）
- デジタル機器のアズ・ア・サービス（サーバー / ネットワーク・アズ・ア・サービス）のリースプールが証券化可能になるかどうか

## Related

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]
- [[structured-finance/japan-consumer-loan-abs-structure|Japan consumer-loan ABS structure]]
- [[structured-finance/japan-credit-card-receivable-abs|Japan credit-card receivable ABS]]
- [[structured-finance/jcr-ri-japan-securitization-rating-methodology-operating-playbook|JCR / R&I securitization rating methodology operating playbook]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[structured-finance/fitch-moody-sp-japan-criteria|Fitch / Moody's / S&P Japan criteria]]
- [[structured-finance/aircraft-leasing-financing-japan-shosha|aircraft leasing financing Japan shosha]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK / TMK SPV vehicle]]
- [[structured-finance/japan-securitization-product-matrix|Japan securitization product matrix]]
- [[leasing-firms/mitsubishi-hc-capital|Mitsubishi HC Capital]] · [[leasing-firms/tokyo-century|Tokyo Century]] · [[leasing-firms/orix-corp|ORIX]]
- [[leasing-firms/fuyo-lease|Fuyo Lease]] · [[leasing-firms/ibj-leasing|IBJ Leasing]] · [[leasing-firms/ricoh-leasing|Ricoh Leasing]]
- [[finance/INDEX|finance index]] · [[real-estate-finance/INDEX|real-estate-finance index]]

## Sources

- JCR lease-receivable ABS criteria — https://www.jcr.co.jp/en/
- R&I lease-receivable ABS methodology — https://www.r-i.co.jp/en/
- Mitsubishi HC Capital investor relations — https://www.mitsubishi-hc-capital.com/
- Tokyo Century investor relations — https://www.tokyocentury.co.jp/
- ORIX Corp investor relations — https://www.orix.co.jp/grp/en/
- Japan Leasing Association — https://www.leasing.or.jp/
- JSDA structured-finance statistics — https://www.jsda.or.jp/en/
- ASF Japan — https://www.asf-japan.gr.jp/

---

> [!info] 校核状態
> confidence: **likely**。真正リース対ファイナンスリースの分類、残価リスクモデリング、機器タイプの集中限度、および信用エンハンスメントスタックは、JCR / R&I の基準および日本リース事業協会の資料に文書化されている。具体的な劣後およびリザーブのレンジは業界が開示した案件データを反映する；機器タイプの残価カーブは典型的な格付機関のストレスシナリオを例示するものである。
