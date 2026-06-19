---
source: structured-finance/japan-green-securitization
source_hash: e703290c63bef882
lang: ja
status: machine
fidelity: ok
title: "日本のグリーン証券化 — グリーン RMBS、ABS、SLB、クライメート・ボンド認証"
translated_at: 2026-06-19T12:43:19.884Z
---

# 日本のグリーン証券化 — グリーン RMBS、ABS、SLB、クライメート・ボンド認証

## TL;DR

日本における **グリーン証券化** は、**グリーン / サステナブル債のラベル** を資産担保構造に適用するものである — 主に **グリーン RMBS**（エネルギー効率の高い住宅または認証済みグリーン住宅に対する住宅ローン）、**グリーン ABS**（太陽光、風力、EV 充電、その他のグリーンインフラ債権に対する資産担保プール）、そして発行体 SPV がサステナビリティ KPI にコミットし、未達成の場合にクーポンがステップアップする **サステナビリティ・リンク・ボンド（SLB）オーバーレイ** 構造である。市場は欧州のグリーン証券化よりも構造的に小さいが、2018  以降以下によって大幅に成長してきた：(i) フラット 35  S（エネルギー効率の高い住宅）ローンプールにアンカーされた **[[policy-finance/japan-housing-finance-agency|JHF]] グリーン MBS 発行**、(ii) 認証済みグリーン住宅ローンのポートフォリオに対する **メガバンクのグリーン RMBS**、(iii) 太陽光 / 風力の固定価格買取制度キャッシュフローからパッケージされた **再生可能プロジェクト債権 ABS**、(iv) セグメントが拡大するにつれての **EV 充電インフラ ABS**、そして (v) 自動車メーカーキャプティブが EV プールに移行するにつれての **グリーン / サステナブル自動車 ABS**。

市場は **ICMA グリーンボンド原則 / サステナビリティボンド・ガイドライン** フレームワークの下で運営され、日本固有の **FSA 原則**（最も顕著には FSA / METI / MOE グリーンボンドガイドライン）によって補完され、グローバル投資家の認知のために **クライメート・ボンド・イニシアティブ（CBI）認証** がますます利用されている。CBI タクソノミーはグリーン資産分類の適格性基準を提供する — エネルギー効率の高い建物、再生可能エネルギー発電、低炭素輸送、水インフラ。本項目を [[structured-finance/japan-abs-market-overview|Japan ABS market overview]] とより広範な ESG ファイナンスの間のグリーン証券化の架け橋として使用すること — グリーン証券化は、より広範なグリーン / サステナブル債市場との証券化ドメイン重複である。

## Wiki ルート

本項目は [[structured-finance/INDEX|structured-finance index]] の下に **グリーン証券化オーバーレイノード** として位置づけられる — 資産担保構造の ESG ファイナンス特化。証券化市場全体の文脈として [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]、最も近い担保側のいとこ（グリーン RMBS はサブセット）として [[structured-finance/japan-rmbs-issuance-structure|Japan RMBS issuance structure]]、公的セクターのグリーン MBS エンジンとして [[structured-finance/jhf-mbs-mechanics|JHF MBS mechanics]]、現在 EV プールに移行しているセグメントとして [[structured-finance/auto-loan-abs-japan-toyota-honda|auto loan ABS]]、グリーン ABS に供給する上流の再生可能プロジェクトレイヤーとして [[structured-finance/project-finance-spv-japan-renewable|project finance SPV Japan renewable]]、セカンドパーティオピニオン提供者の取扱いとして [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]] と対照して読むこと。システムの枠組み：グリーン・フラット 35 S アンカーとして [[policy-finance/japan-housing-finance-agency|JHF]]、メガバンクのグリーン住宅ローン組成として [[banking/INDEX|banking domain]]。

## 1. グリーン / サステナブル証券化 — フレームワーク

| ラベル | 説明 |
|---|---|
| **グリーンボンド** | 資金使途債 — 収益がグリーンプロジェクト（再生可能エネルギー、エネルギー効率、クリーン輸送、サステナブル水、など）にリングフェンスされる |
| **サステナビリティボンド** | 資金使途債 — グリーン + ソーシャルの組み合わせ使途収益 |
| **サステナビリティ・リンク・ボンド（SLB）** | 発行体 KPI 達成に連動したクーポン / 構造 — 資金使途制限なし |
| **グリーン証券化** | **原担保** がグリーン適格（例：エネルギー効率の高い住宅に対する住宅ローン、再生可能プロジェクトからの債権）である資産担保債 — 資産担保レベルでグリーンラベルを適用 |
| **クライメート・ボンド・イニシアティブ（CBI）認証** | CBI タクソノミーの下で発行され独立検証済み — 最も厳格なグローバルグリーンラベル |
| **ICMA グリーンボンド原則整合** | ICMA 任意プロセスガイドラインに整合 — 最も広く適用される |

グリーン証券化が特徴的なのは、それが **担保駆動** でありうる点である：グリーンラベルは発行体レベルの資金使途制限だけでなく、原資産プールのグリーン特性から流れる。これは標準的な事業会社グリーンボンドからの有意な区別である。

## 2. 日本の規制フレームワーク

| 当局 / フレームワーク | 役割 |
|---|---|
| **FSA グリーン / サステナビリティ / サステナビリティ・リンク・ボンド・ガイドライン** | ICMA に整合した、日本国内のグリーンボンド発行ガイドライン |
| **MOE（環境省）グリーンボンドガイドライン** | 環境政策支援フレームワーク |
| **METI** | 産業政策支援 — 特に再生可能 / EV 関連のグリーン証券化向け |
| **JCR / R&I セカンドパーティオピニオン（SPO）** | グリーンボンドラベル検証のための国内 SPO 提供者 |
| **CBI 認証** | 国際投資家ターゲット発行に使用されるグローバルで厳格な認証 |
| **ICMA グリーンボンド原則** | 任意のグローバル原則 |
| **EU グリーンボンド基準（EU GBS）** | 2024  の EU GBS 実装後、EU 機関投資家をターゲットとする発行に関連 |

日本には拘束力のある法定グリーンボンド制度はない；フレームワークは法定ではなく **ガイドラインベース** であり、SPO と CBI の第三者検証によって補完される。

## 3. グリーン RMBS — JHF グリーン・フラット 35 S アンカー

[[policy-finance/japan-housing-finance-agency|JHF]] は日本における最大のグリーンラベル付き住宅ローン担保構造の発行体であり、**フラット 35  S** ローンプールにアンカーされている。フラット 35  S は、フラット 35  固定金利住宅ローン商品のエネルギー効率プレミアムである — エネルギー効率の高い認証住宅（通常はトップランナー級効率、ZEH / ネット・ゼロ・エネルギー・ハウス）を建設または購入する借り手は、住宅ローンの初期数年間の金利ステップダウンの資格を得る。

| JHF グリーン MBS の特徴 | 読み |
|---|---|
| 担保 | 認証済みエネルギー効率住宅に裏付けられたフラット 35  S ローン |
| 認証 | 建築物省エネ法準拠、ZEH 認証、長期優良住宅認証 |
| 発行構造 | グリーンラベル付きの月次パススルー MBS 構造（標準 JHF MBS と同じ） |
| 投資家基盤 | 日本の機関投資家の ESG / サステナブルマンデートプラス外国 ESG 投資家 |
| 格付け | 高い投資適格（JHF 同等） |
| セカンドパーティオピニオン | 通常 JCR または R&I の SPO |

JHF グリーン MBS シリーズは、日本の機関投資家の ESG 債券マンデートのベンチマークとなっている。

### メガバンクのグリーン RMBS

メガバンク（[[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMFG]]、[[megabanks/mizuho-fg|Mizuho FG]]）と信託銀行は、認証済みグリーン住宅ローンのポートフォリオ — メガバンクチャネルを通じて組成されたトップランナー / ZEH / エネルギー効率住宅ローン — に対する **私募グリーン RMBS** を発行してきた。構造は、追加のグリーンラベル検証レイヤーを伴う [[structured-finance/japan-rmbs-issuance-structure|standard private RMBS]] に従う。

## 4. グリーン ABS — 再生可能および EV 充電債権

| グリーン ABS 資産クラス | 読み |
|---|---|
| **再生可能エネルギープロジェクト債権 ABS** | 太陽光 / 風力 / バイオマスプロジェクト SPV からのキャッシュフロー — 通常、固定価格買取制度（FIT）収入または PPA キャッシュフローに裏付けられる；上流については [[structured-finance/project-finance-spv-japan-renewable|project finance SPV Japan renewable]] を参照 |
| **EV 充電インフラ ABS** | EV 充電ネットワーク運営からの債権 — EV 展開が拡大するにつれての新興セグメント |
| **グリーン自動車ローン ABS** | 自動車メーカーキャプティブによって証券化された EV / ハイブリッド車両ローンプール — トヨタファイナンス、ホンダファイナンスの [[structured-finance/auto-loan-abs-japan-toyota-honda|auto loan ABS]] の EV 部分 |
| **エネルギー効率設備ファイナンス ABS** | エネルギー効率の高い産業用 / 商業用設備に対する設備ファイナンス債権 |
| **グリーンビルディング / グリーンモーゲージ商業証券化** | 認証済みグリーン商業物件に対する CMBS 隣接構造 |

再生可能債権 ABS 市場は **FIT 制度の安定性** に決定的に依存する — FIT 価格または期間の変更は、原キャッシュフローの予測可能性に影響する。

## 5. サステナビリティ・リンク・ボンド（SLB）オーバーレイ

一部の日本の証券化 SPV は、発行体が事前にコミットしたサステナビリティ KPI（例：CO2  排出削減、再生可能エネルギー容量追加）を達成できない場合に債券が **クーポンステップアップ** を伴う **SLB オーバーレイ構造** を発行してきた。

| SLB オーバーレイの特徴 | 読み |
|---|---|
| 資金使途制限 | なし（グリーンボンドとは異なり） |
| KPI コミットメント | 発行体がサステナビリティ KPI にコミット |
| クーポンステップアップ | KPI 未達成の場合、残存期間にわたりクーポンがステップアップ（通常 25-50  bps） |
| 検証 | 独立検証者が KPI 達成を評価 |
| 投資家のメリット | 発行体が KPI を達成するための構造的インセンティブ |

SLB オーバーレイは純粋な証券化ではあまり一般的でない（資産プール構造がすでに発行体の柔軟性を制約するため）が、事業会社発行体アンカー案件に現れる。

## 6. クライメート・ボンド・イニシアティブ（CBI）認証

| CBI の特徴 | 読み |
|---|---|
| タクソノミー | 資産クラス別の詳細な適格性基準（エネルギー効率、再生可能エネルギー、低炭素輸送、水インフラ） |
| 検証 | CBI 承認の検証者による発行前および発行後の独立検証 |
| ブランド認知 | グローバルに認知された厳格なグリーンラベル |
| 投資家アピール | 厳格なマンデートの ESG ファンドおよび国際 ESG 投資家をターゲット |
| 日本での採用 | 一部の証券化 SPV を含む大手日本グリーンボンド発行体によって使用 |
| 開示 | グリーン資産のパフォーマンスとインパクト指標に関する発行後報告 |

CBI 認証は ICMA グリーンボンド原則整合よりも厳格であり、国際 ESG マンデート投資家を明示的にターゲットとする発行にしばしば使用される。

## 7. 欧州のグリーン証券化との比較

| 側面 | 日本のグリーン証券化 | 欧州のグリーン証券化 |
|---|---|---|
| 市場規模 | より小さい；成長中 | より大きい；確立 |
| 規制フレームワーク | ガイドラインベース（FSA / MOE / METI ガイドライン + ICMA） | 法定 + 任意（EU GBS プラス ICMA / CBI） |
| アンカー商品 | フラット 35  S に対する JHF グリーン MBS | 加盟国全体にわたる複数の法定グリーン住宅ローン商品 |
| 投資家基盤 | 日本の機関投資家 ESG マンデートプラス国際 ESG 投資家 | 欧州の ESG マンデートプラスグローバル ESG 投資家 |
| 再生可能債権 ABS | より小さいが成長中 | 大規模に確立 |
| 価格メリット | 歴史的に小さな「グリーニアム」；案件により変動 | 一部セグメントでグリーニアムが存在 |
| 検証エコシステム | JCR / R&I プラス国際 SPO 提供者 | より大きく成熟した SPO および検証者エコシステム |

## 8. 反論

- **「グリーニアムは構造化の労力を正当化するには小さすぎる」** — 純粋な価格ベースでは真実だが、発行体の根拠は投資家基盤の多様化と ESG 報告の信頼性に及ぶ。
- **「グリーン証券化におけるグリーンウォッシングリスク」** — 重大な懸念。資産プールのグリーン適格性検証と発行後報告が緩和策である。
- **「日本のグリーン証券化は規模で見れば JHF グリーン MBS にすぎない」** — 部分的に真実。私募グリーン RMBS と再生可能 ABS はより小さいが成長中のセグメントである。
- **「FIT 依存の再生可能 ABS は FIT 制度変更のリスクにさらされている」** — 現実のリスク；ストラクチャードクレジットの引受モデルは FIT 関税変更シナリオを予期する必要がある。
- **「CBI 認証は小規模案件には高コストすぎる」** — 真実；ICMA グリーンボンド原則整合 + JCR/R&I の SPO が低コストの代替手段である。

## 関連

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
- [[megabanks/mufg|MUFG]] · [[megabanks/smfg|SMFG]] · [[megabanks/mizuho-fg|Mizuho FG]]
- [[INDEX|FinWiki index]]

## 出典

- FSA — https://www.fsa.go.jp/en/
- MOE（環境省）— https://www.env.go.jp/en/
- クライメート・ボンド・イニシアティブ — https://www.climatebonds.net/
- ICMA グリーンボンド原則 — https://www.icmagroup.org/sustainable-finance/
- JCR — https://www.jcr.co.jp/en/
- R&I — https://www.r-i.co.jp/en/
- JHF — https://www.jhf.go.jp/about/index.html
