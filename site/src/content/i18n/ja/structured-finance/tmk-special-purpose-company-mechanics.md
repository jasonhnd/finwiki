---
source: structured-finance/tmk-special-purpose-company-mechanics
source_hash: 821e30ec68589e3c
lang: ja
status: machine
fidelity: ok
title: "TMK（特定目的会社）特定目的会社整備士"
translated_at: 2026-06-03T00:53:08.317Z
---

# TMK（特定目的会社）特定目的会社整備士
## 要約
**TMK — 特定目的会社 (特定目的会社)** は、日本の **資産証券化法 (資産流動化法、1998)** に基づく **法定証券化手段**であり、資産担保証券の発行のために特別に設計された規制対象の SPV 形式です。 [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK-GK private-placement workhorse]] とは異なり、TMK は一般的な会社法ではなく **専用の法令**によって管理されており、**資産流動化計画 (資産流動化計画)** を規制当局に提出する必要があり、**特定社債 (特定社債)**、**特定短期社債**、**優先拠出金 (優先優先)**を投資家に公開して発行することができます。独特の**税金処理**は、TMKを多くの上場CMBS、特定の大規模不動産証券化取引、および複雑なマルチトランシェ構造にとって優先される手段にする構造上の特徴です。**投資家への利益分配はTMKレベルで損金算入可能**で、法定の分配要件（通常、分配可能利益の90%+）を満たしていれば、効果的な**単層課税**が実現します。
FinWiki にとって、TMK は日本の証券化業界における **規制対象の SPV ノード**です。 TMK と [[structured-finance/spv-tk-gk-vehicle-japan-tax|GK-TK]] のどちらを選択するかは、アレンジャーにとって **証券化手段の選択に関する基本的な決定**です。公債発行、規制上の開示取引、上場 CMBS、複雑な構造の場合は TMK。 GK-TKは、私募、柔軟な二国間取引、迅速な形成の私有不動産証券化を提供します。 TMK は **[[real-estate-finance/j-reit-market-overview|J-REIT investment corporation (投資法人)]]** とは異なる車両でもあります。どちらも不動産税転嫁車両ですが、異なる法律 (資産証券化法と投資信託法) に基づいて運営されています。
## ウィキ上の位置づけ
この項目は、**TMK 法定 SPV ノード** として [[structured-finance/INDEX|structured-finance index]] の下にあります。これは、私募の主力銘柄である [[structured-finance/spv-tk-gk-vehicle-japan-tax|GK-TK]] に相当する規制証券化サービスです。完全な車両選択ツリーについては [[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV TK / GK / TMK / SPC vehicle choice (Japan tax)]]、主要な CMBS ユースケースについては [[structured-finance/japan-cmbs-issuance-structure|Japan CMBS issuance structure]]、信頼対 SPV の代替については [[structured-finance/japan-trust-beneficial-interest-vs-spv|Japan trust beneficial interest vs SPV]]、および格付け処理については [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]] に対して読み取ります。クロスドメイン: 投資法人の代替パスの場合は [[real-estate-finance/j-reit-market-overview|J-REIT market overview]]、クロスドメインの不動産-金融フレームの場合は [[real-estate-finance/japan-cmbs-rmbs-securitization|Japan CMBS / RMBS securitization]]、代替の不動産-SPV パスの場合は [[real-estate-finance/gk-tk-bond-real-estate-spv|GK-TK bond real-estate SPV]]。
## 1。法的根拠 — 資産証券化法
| アイテム | TMKの法的根拠 |
|---|---|
| 法令 | 資産の流動化に関する法律（資産流動化法、1998、複数回改正） |
| の後継 | 1998 SPC法は、より幅広い資産クラスをカバーするために時間の経過とともに拡張されました |
| 規制当局 | 金融庁（設立登記、資産流動化計画の届出、継続的監督） |
| 車名 | 特定目的会社 (TMK、特定目的会社、特定目的会社) |
| 法定の目的 | 資産証券化（目的は法定に限定されており、TMKは証券化以外の一般的な事業活動を行うことはできません） |
| 資産流動化計画 | 必須の提出 — 証券化される資産、予想されるキャッシュフロー、発行される有価証券、再分配メカニズムについて説明します |
活動に対する法的制限は重要な特徴である。TMK の破産回避的性格の一部は、TMK が資産証券化の目的外で負債を負うことを防止する法的制限に起因している。
## 2。発行手段
TMK は投資家に数種類の証券を発行できます。
| 楽器 | 説明 |
|---|---|
| **特定社債（特定社債）** | シニア債務。公に掲載することができます。資産流動化計画の対象となる |
| **特定短期社債（特定短期社債）** | 同じ制度の下での短期債務 |
| **優先貢献 (優先)** | 株式のようなもの。投資家は優先分配権を受け取ります。税の転嫁（法定条件が満たされた場合） |
| **共通の貢献 (普通)** | 劣後株式。通常、オリジネーターまたはBピース投資家が保有 |
| **特定融資** | 資産流動化プランによる借入も可能 |
特定の債券 (シニア債) と優先出資 (メザニン/株式トランシェ) の組み合わせにより、国際証券化慣例を反映した **マルチトランシェ資本構造** が可能になります。
## 3。税務上の扱いが特徴的
| 要素 | TMKの税制上の取扱い |
|---|---|
| 法人税 | TMKは法人です。原則として法人税が課税される |
| 分配金控除 | **優先出資者および特定社債保有者への分配金（利息）はTMKレベルで控除可能です** |
| 効果的なパススルー | 分配金が分配可能利益の90%+を超える場合（法定条件）、TMKにおける残存課税所得は最小限になります - 実質的な単層課税 |
| パススルーの法定条件 | 公募・適格機関投資家募集条件、分配率条件、資産運用制限条件 |
| GK-TKとの比較 | GK-TK は TK オーバーレイを介してパススルーを実現します。 TMKは直接分配控除によるパススルーを実現 |
| J-REITとの比較 | J-REIT（投資法人）が投信法上の同様の90%分配ルールによるパススルーを実現 |
| 源泉徴収税 | 投資家への分配金は、投資家の分類に応じて源泉徴収の対象となる場合があります |
**流通控除**メカニズムにより、TMK は法的に法人でありながら、パススルー車両のように経済的に動作します。これは、国債発行における最もクリーンなパススルー メカニズムです。
## 4。 GK-TKとの比較
| 寸法 | TMK | [[structured-finance/spv-tk-gk-vehicle-japan-tax|GK-TK]] |
|---|---|---|
| 法的根拠 | 資産の流動化に関する法律 | 会社法（GK）＋商法（TK） |
| 形成 | 資産流動化計画の提出。金融庁登録済み | よりシンプル — GK を法人化し、TK 契約を締結する |
| 公債発行 | はい — 特定の債券を公募可能 | 限定的 - 通常は私募 |
| 株式の譲渡 | はい — 優先 + 共通の貢献 | TK オーバーレイは複数の TK 投資家にパススルーを提供します |
| 税金のパススルー | TMKレベルでの分配控除可能性 | GKレベルでのTK分配控除可能性 |
| 活動制限 | 法的には証券化目的に限定される | GK は法的に柔軟です。契約により定められたTKの目的 |
| 破産の遠隔性 | 強力 — 法的および契約上の層 | 契約上のみ |
| 一般的な使用方法 | 公債CMBS、大規模/複雑な取引、上場証券取引 | 私募不動産証券化、二国間取引、私募の迅速な組成 |
| 形成の速度 | 遅い（資産流動化計画の提出） | もっと早く |
| 開示負担 | より高い (FSA 登録 + 継続的な開示) | 下位（私募開示制度） |
## 5。現在のJ-REIT構造におけるTMK
よく混同されるのは、TMKとJ-REITの関係です。どちらも不動産税の転嫁手段ですが、異なる法令に基づいて運営されています。
| 車両 | 法令 | 形状 |
|---|---|---|
| **TMK** | 資産流動化法 | 特定目的会社（法人） |
| **[[real-estate-finance/j-reit-market-overview|J-REIT investment corporation]]** | 投資信託法（投資信託法） | 投資法人（投資法人） |
**現在の J-REIT の実践**では、TMK は **サブビークル レベル**で使用されることがあります。
| 使用事例 | 説明 |
|---|---|
| J-REITがTMK優先出資を取得 | 一部の J-REIT は、特に特定の資産クラスの節税効率の高い構造を目的として、不動産の直接所有権ではなく TMK 優先出資を保有しています。 |
| 倉庫としてのスポンサー側のTMK | スポンサーは、J-REITの取得前にTMKを使用して安定化資産を倉庫に保管することができます |
| J-REIT非適格資産のTMK | J-REITの基準に適合しない資産クラスは、機関投資家によってTMKストラクチャーで保有される可能性があります。 |
| 外国人投資家向け不動産のTMK | 一部の外国LP不動産投資では税金/源泉徴収の処理にTMK構造を使用しています |
TMK-J-REIT の相互作用は、より広範な日本の不動産と車両のエコシステムを理解するために重要です。 TMKは、J-REIT投資法人内またはJ-REIT投資法人と並行して設置できるビルディングブロックです。
## 6。上場CMBSのTMK
| TMK CMBS機能 | 読む |
|---|---|
| 発行者エンティティ | TMK（資産流動化法に基づく特定目的会社） |
| 発行 | 特定公募債券年功序列によって歪められる |
| 担保 | 商業用不動産を担保とする住宅ローンまたは商業用不動産の信託受益権 |
| 資産流動化計画 | FSAに提出。資産キャッシュフローの分配メカニズムを規定する |
| 評価 | 通常国内代理店([[financial-regulators/jcr|JCR]] / [[financial-regulators/rating-and-investment|R&I]])外国人投資家向け取引のグローバル代理店 ([[JapanFG/sp-global-ratings-japan|S&P]] / [[JapanFG/moodys-japan|Moody's]]) |
| 投資家ベース | 生命保険会社、資産運用会社、メガバンクALMブック、海外機関投資家 |
| サービサー・受託者 | 信託銀行または専門サービサーの役割 |
TMK は、日本の **単一借り手上場 CMBS** の主要な構造です ([[structured-finance/japan-cmbs-issuance-structure|Japan CMBS issuance structure]] によるポスト 2008 CMBS 形式)。公債発行機能と税転嫁機能の組み合わせにより、TMK は上場トランシーバー CMBS 取引にとって自然な選択肢となります。
## 7。 TMKのガバナンスと継続的な義務
| 義務 | 説明 |
|---|---|
| 資産流動化計画の遵守 | 資産流動化計画に記載された活動に限定される活動 |
| 監督構成 | TMKには法定の役割を担う取締役がいます。通常は独立した専門ディレクター |
| 監査役 | 監査役または監査法人 |
| 継続的な開示 | 投資家と金融庁への資産パフォーマンスと債券の状況に関する定期的な報告 |
| 流通の仕組み | 資産流動化計画に基づく分配金。法定の税転嫁条件 |
| リラックス | 資産が完全に償却または売却された場合、TMKは終了します |
## 関連項目項目
- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV TK / GK / TMK / SPC vehicle choice (Japan tax)]]
- [[structured-finance/japan-cmbs-issuance-structure|Japan CMBS issuance structure]]
- [[structured-finance/japan-rmbs-issuance-structure|Japan RMBS issuance structure]]
- [[structured-finance/japan-trust-beneficial-interest-vs-spv|Japan trust beneficial interest vs SPV]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[structured-finance/japan-covered-bond-mufg-smbc|Japanese megabank covered bonds]]
- [[structured-finance/japan-green-securitization|Japan green securitization]]
- [[structured-finance/synthetic-securitization-japan-bank-rwa-relief|synthetic securitization Japan bank RWA relief]]
- [[real-estate-finance/j-reit-market-overview|J-REIT market overview]]
- [[real-estate-finance/japan-cmbs-rmbs-securitization|Japan CMBS and RMBS securitization]]
- [[real-estate-finance/gk-tk-bond-real-estate-spv|GK-TK bond real-estate SPV]]
- [[real-estate-finance/INDEX|real-estate-finance index]]
- [[financial-regulators/jcr|JCR]]・[[financial-regulators/rating-and-investment|R&I]]
- [[INDEX|FinWiki index]]
## 出典
- 資産の流動化に関する法律 (資産流動化法) — 公的な立法文書 (日本の国会)。
- 金融庁 — https://www.fsa.go.jp/
- JSDA — https://www.jsda.or.jp/
- JCR — https://www.jcr.co.jp/
- R&I — https://www.r-i.co.jp/
- ARES — https://www.ares.or.jp/
