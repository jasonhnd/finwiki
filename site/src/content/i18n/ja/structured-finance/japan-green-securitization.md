---
source: structured-finance/japan-green-securitization
source_hash: 481aee56ee8d3b9a
lang: ja
status: machine
fidelity: ok
title: "日本のグリーン証券化 — グリーンRMBS、ABS、SLB、気候変動債券認証"
translated_at: 2026-06-03T00:53:08.284Z
---

# 日本のグリーン証券化 — グリーンRMBS、ABS、SLB、気候変動債券認証

## 要約

日本**グリーン証券化**は、**グリーン/サステナブルボンドラベル**を資産保障構造に適用します。 主に**グリーンRMBS**（エネルギー効率の高い住宅またはグリーン認定住宅に対する住宅ローン）、**グリーンABS**（太陽光、風力、EV充電、またはその他のグリーンインフラストラクチャによる資産担保プール）、および発行体SPVが持続可能性を発揮する**サステナビリティリンクボンド（SLB）オーバーレイ**構造です。 この市場は構造的に欧州のグリーン証券化よりも小さいですが、2018 以降、次の約束によって大幅に成長しています:(i) フラット35 S (エネルギー効率の高い住宅) ローンプールを基盤とした **[[policy-finance/japan-housing-finance-agency|JHF]] グリーンMBS発行**、(ii) グリーン認定住宅ローンのポートフォリオに対する**メガバンクのグリーンRMBS**、(iii) 太陽光発電からパッケージ化された **再生可能エネルギープロジェクトの資金 ABS** (iv) そのうちの拡大に伴う **EV 充電インフラ ABS**、および (v) 自動車メーカーのキャプティブが EV プールに移行する際の **グリーン/持続可能な自動車 ABS**。

この市場は、**ICMA グリーンボンド原則 / サステナビリティ ボンド ガイドライン** の枠組みに基づいて運営されており、これに日本固有の **金融庁原則** (最も注目すべきは金融庁 / 経済産業省 / 環境省グリーンボンド ガイドライン) が補足されており、世界の投資家に認知されるよう **気候ボンド イニシアティブ (CBI) 認証**が増えています。 CBI 分類法は、エネルギー効率の高い建物、再生可能エネルギー生成、低炭素輸送、水インフラなどのグリーン資産分類の適格基準を提供します。 このエントリは、[[structured-finance/japan-abs-market-overview|Japan ABS market overview]] とより広範な ESG 金融との間のグリーン証券化の橋渡しとして使用してください。グリーン証券化は、より広範なグリーン/サステナブル債券市場と証券化領域が重なるものです。

## ウィキ上の位置づけ

このエントリは、資産担保証券における ESG 金融特化である**グリーン証券化オーバーレイノード**として [[structured-finance/INDEX|structured-finance index]] の下にあります。証券化市場全体の文脈については [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]、最も近い担保側の親類（グリーン RMBS はその一部）については [[structured-finance/japan-rmbs-issuance-structure|Japan RMBS issuance structure]]、公的部門のグリーン MBS エンジンについては [[structured-finance/jhf-mbs-mechanics|JHF MBS mechanics]]、EV プールへ移行しつつあるセグメントについては [[structured-finance/auto-loan-abs-japan-toyota-honda|auto loan ABS]]、グリーン ABS に供給される上流の再生可能プロジェクト層については [[structured-finance/project-finance-spv-japan-renewable|project finance SPV Japan renewable]]、セカンドパーティ・オピニオン提供者の扱いについては [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]] と照らし合わせて読んでください。システム面では、グリーン Flat-35-S のアンカーとして [[policy-finance/japan-housing-finance-agency|JHF]]、メガバンクのグリーン住宅ローン組成として [[banking/INDEX|banking domain]] を参照します。

## 1。 グリーン/持続可能な証券化 — フレームワーク

| ラベル | 説明 |
|---|---|
| **グリーンボンド** | 収益使用債券 — 収益はグリーン プロジェクト (再生可能エネルギー、エネルギー効率、クリーンな交通、持続可能な水など) のために環囲されています。
| **サステナビリティボンド** | 収益使用債券 — グリーン + 社会利用収益を組み合わせたもの |
| **サステナビリティ・リンク・ボンド (SLB)** | 発行者の KPI 達成にリンクされたクーポン / 構造 – 収益の用途は制限されない |
| **グリーン証券化** | **基礎となる担保**がグリーン適格である資産担保債券 (エネルギー効率の高い住宅に対する住宅ローン、再生可能プロジェクトからの債権など) — 資産担保レベルでグリーンラベルを適用します。
| **気候債券イニシアチブ (CBI) 認定** | CBI 分類法に基づいて発行され、独立して検証された、最も厳格な世界的なグリーンラベル |
| **ICMA グリーンボンド原則の整合** | ICMA の自主プロセス ガイドラインに準拠 — 最も広く適用されている |

グリーン証券化は、**担保主導型**であるという点で特徴的です。グリーンラベルは、発行体レベルでの収益の使用制限からだけでなく、原資産プールのグリーン特性からもたらされます。 これは、標準的な企業グリーンボンドとは大きく異なります。

## 2。 日本の規制枠組み

| 権限・枠組み | 役割 |
|---|---|
| **FSA グリーン / サステナビリティ / サステナビリティリンク ボンド ガイドライン** | ICMAと連携した日本国内のグリーンボンド発行ガイドライン |
| **MOE（環境省）グリーンボンドガイドライン** | 環境政策支援体制 |
| **経済産業省** | 産業政策支援 — 特に再生可能エネルギー/EV関連のグリーン証券化に対する支援 |
| **JCR / R&I 第二次粒子オピニオン（SPO）** | グリーンボンドラベルのための検証の国内SPOプロバイダー |
| **CBI 認証** | 国際的な投資家を対象とした発行に使用される世界的に厳しい認証 |
| **ICMA グリーンボンド原則** | 自主的な世界原則 |
| **EU グリーンボンド基準 (EU GBS)** | 2024 EU GBS 導入後の EU 機関投資家を対象とした発行に関連 |

日本には法定のグリーンボンド制度がありません。 このフレームワークは法定ではなく **ガイドライン ベース**であり、SPO および CBI による第三者検証によって補完されています。

## 3。 緑 RMBS — JHF 緑 Flat-35-S アンカー

[[policy-finance/japan-housing-finance-agency|JHF]] は、**フラット 35 S** ローンプールを基盤とした、グリーンラベルの住宅ローン保障構造の日本最大の発行会社です。 フラット 35 S は、フラット 35  固定住宅ローン商品のエネルギー効率プレミアムです。 を建設または購入する借入手は、住宅ローンの初期段階で検討の対象となります。

| JHFグリーンMBS特集 | 読書 |
|---|---|
| 担保 | 認定されたエネルギー効率の高い住宅を裏付けとしたフラット 35 S ローン |
| 認証 | 建築エネルギー基準適合、ZEH認定、長期優良住宅認定 |
| 発行構造 | マンスリーパススルーMBS構造（標準JHF MBSと同じ）、グリーンラベル付き |
| 投資家ベース | 日本の機関投資家のESG / 持続可能な義務と外国のESG投資家 |
| 評価 | 高投資適格（住宅金融支援機構相当） |
| 第三者意見 | 通常は JCR または R&I SPO |

JHF グリーン MBS シリーズは、日本の機関投資家の ESG 債券義務のベンチマークとなっています。

### メガバンクグリーンRMBS

メガバンク ([[JapanFG/mufg|MUFG]]、[[JapanFG/smfg|SMFG]]、[[JapanFG/mizuho-fg|Mizuho FG]]) と慈善銀行は、メガバンクこどもチャネルが提供されるグリーン認定住宅ローン (トップランナー / ZEH / エネルギー効率の高い住宅ローン) のポートフォリオに対して **プライベートグリーン RMBS** を発行しました。 構造は [[structured-finance/japan-rmbs-issuance-structure|standard private RMBS]] その後、グリーンラベル検証レイヤーが追加されています。

## 4。 グリーン ABS — 再生可能および EV 充電債権

| Green-ABS アセットクラス | 読書 |
|---|---|
| **再生可能エネルギープロジェクト債権 ABS** | 太陽光 / 風力 / バイオマス プロジェクト SPV からのキャッシュ フロー — 通常、固定価格買取制度 (FIT) 収益または PPA キャッシュ フローによって裏付けられます。 アップストリームについては [[structured-finance/project-finance-spv-japan-renewable|project finance SPV Japan renewable]] を参照してください。
| **EV 充電インフラ ABS** | EV 充電ネットワーク運営からの収益 — EV 導入の拡大に伴い新興セグメント |
| **グリーン オート ローン ABS** | 自動車メーカーキャプティブによって証券化されたEV/ハイブリッド車ローンプール — トヨタファイナンス、ホンダファイナンス [[structured-finance/auto-loan-abs-japan-toyota-honda|auto loan ABS]]のEV部分 |
| **エネルギー効率の高い機器の ABS への融資** | エネルギー効率の高い産業用/商業用機器の設備ファイナンス債権 |
| **グリーンビルディング/グリーンモーゲージ商業証券化** | グリーン認定商業施設上の CMBS 隣接構造物 |

再生可能債権 ABS 市場は **FIT 制度の安定性**に大きく依存しており、FIT の価格設定や期間の変更は基礎的なキャッシュ フローの予測可能性に影響を与えます。

## 5。 サステナビリティ・リンク・ボンド (SLB) オーバーレイ

一部の日本の証券化 SPV は **SLB オーバーレイ構造**を発行しており、発行体が事前に約束した持続可能性 KPI (例: CO2  排出削減、再生可能エネルギー容量の追加) を達成できなかった場合に、債券に **クーポン ステップアップ**が付与されます。

| SLB オーバーレイ機能 | 読書 |
|---|---|
| 収益の使途制限 | なし（グリーンボンドとは異なります） |
| KPI へのコミットメント | 発行体はサステナビリティ KPI に取り組んでいます |
| クーポンステップアップ | KPIを達成できなかった場合、残りの期間のクーポンがステップアップします (通常、25 ～ 50 bps)。
| 検証 | 独立した検証者が KPI 達成度を評価 |
| 投資家のメリット | 発行者が KPI を達成するための構造的なインセンティブ |

SLB オーバーレイは純粋な証券化ではあまり一般的ではありませんが (資産プール構造により発行体の柔軟性がすでに制約されているため)、企業と発行体を中心とした取引では見られます。

## 6。 気候変動債券イニシアチブ (CBI) 認証

| CBI 機能 | 読書 |
|---|---|
| 分類 | 資産クラス別の詳細な適格基準 (エネルギー効率、再生可能エネルギー、低炭素輸送、水インフラ) |
| 検証 | CBI 承認の検証者による発行前および発行後の独立した検証 |
| ブランド認知 | 世界的に認められた厳格なグリーンラベル |
| 投資家へのアピール | 厳格な義務を負うESGファンドと国際的なESG投資家を対象 |
| 日本の養子縁組 | 一部の証券化 SPV を含む日本の大手グリーンボンド発行会社によって使用されています。
| 開示 | グリーン資産のパフォーマンスと影響指標に関する発行後のレポート |

CBI 認証は ICMA グリーンボンド原則の整合性よりも厳格であり、ESG 義務を負う国際的な投資家を明示的にターゲットにした発行によく使用されます。

## 7。 欧州のグリーン証券化との比較

| 側面 | 日本のグリーン証券化 | 欧州のグリーン証券化 |
|---|---|---|
| 市場規模 | より小さい; 成長中 | より大きな; 設立 |
| 規制の枠組み | ガイドラインベース（金融庁・環境省・経産省ガイドライン＋ICMA） | 法定 + 任意 (EU GBS プラス ICMA / CBI) |
| アンカー製品 | フラット 35 S の JHF グリーン MBS | 加盟国にわたる複数の法定グリーン住宅ローン商品 |
| 投資家ベース | 日本の機関投資家による ESG 義務と国際的な ESG 投資家 | 欧州の ESG 義務と世界の ESG 投資家 |
| 再生可能なABS | 小さいながらも成長中 | 大規模に確立 |
| 価格設定のメリット | 歴史的には小さな「グリニウム」。 取引により異なります | 一部のセグメントにグリニウムが存在 |
| エコシステムの検証 | JCR / R&Iプラス国際SPOプロバイダー | 大規模で成熟したSPOと人々のエコシステムを検証 |

## 8。 対位法

- **「Greenium は規模が小さすぎて構造化の取り組みを正当化できない」** — 純粋な価格ベースでは真実ですが、発行者の理論的根拠は投資家ベースの多様化と ESG レポートの信頼性にまで及びます。
- **「グリーン証券化におけるグリーンウォッシングリスク」** — 重大な懸念。 資産プールのグリーン適格性の検証と発行後の報告が緩和策です。
- **「日本のグリーン証券化は、大規模な JHF グリーン MBS に過ぎません。」** — 部分的には真実です。 民間のグリーン RMBS と再生可能 ABS は規模は小さいものの、成長を続けているセグメントです。
- **「FIT に依存する再生可能 ABS は FIT 制度変更のリスクにさらされている」** — 現実的なリスク。 構造化信用引受モデルは、FIT 料金変更シナリオを予測する必要があります。
- **「CBI 認定は小規模な取引にはコストが高すぎる」** — 本当です。 ICMA グリーンボンド原則の調整 + JCR/R&I SPO が低コストの代替手段です。

## 関連項目

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[structured-finance/japan-rmbs-issuance-structure|Japan RMBS issuance structure]]
- [[structured-finance/jhf-mbs-mechanics|JHF MBS mechanics]]
- [[structured-finance/auto-loan-abs-japan-toyota-honda|auto loan ABS Japan]]
- [[structured-finance/project-finance-spv-japan-renewable|project finance SPV Japan renewable]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV TK / GK / TMK / SPC vehicle choice]]
- [[structured-finance/japan-covered-bond-mufg-smbc|Japanese megabank covered bonds]]
- [[structured-finance/tmk-special-purpose-company-mechanics|TMK special-purpose company mechanics]]
- [[policy-finance/japan-housing-finance-agency|JHF]]
- [[policy-finance/INDEX|policy-finance index]]
- [[JapanFG/mufg|MUFG]] [[JapanFG/smfg|SMFG]] [[JapanFG/mizuho-fg|Mizuho FG]]
- [[INDEX|FinWiki index]]

## 出典

- 金融庁 — https://www.fsa.go.jp/en/
- MOE (環境省) — https://www.env.go.jp/en/
- 気候変動イニシアチブ — https://www.climatebonds.net/
- ICMA グリーンボンド原則 — https://www.icmagroup.org/sustainable-finance/
- JCR — https://www.jcr.co.jp/en/
- R&I — https://www.r-i.co.jp/en/
- JHF — https://www.jhf.go.jp/about/index.html
