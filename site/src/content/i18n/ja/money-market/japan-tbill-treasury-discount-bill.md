---
source: money-market/japan-tbill-treasury-discount-bill
source_hash: 1d17427fbf914936
lang: ja
status: machine
fidelity: ok
title: "日本国庫短期証券 (TDB / 国庫短期証券)"
translated_at: 2026-06-19T06:09:18.179Z
---

# 日本国庫短期証券 (TDB / 国庫短期証券)

## Wiki ルート

このエントリは [[money-market/INDEX|money-market index]] の下に位置する。ピア / 対比のコンテキストとしては [[money-market/japan-cp-commercial-paper-market|Japan CP market]] と、より広範なシステム / 規制境界としては [[money-market/jgb-repo-market-japan|JGB repo market]] と照らし合わせて読むこと。

## TL;DR

国庫短期証券 (TDB / 国庫短期証券) は、日本の財務省 (MOF) が 3 ヶ月、6 ヶ月、1 年の満期で発行する短期の割引 (ゼロクーポン) 国債である。TDB は短期円マネーマーケットのソブリン構成要素であり、[[money-market/japan-cp-commercial-paper-market|CP]]、[[money-market/japan-ncd-negotiable-cd-market|NCD]]、および短期円レポのプライシングにとって自然なリスクフリー・ベンチマークである。

TDB は MOF の通常の JGB 入札カレンダーに載り、日銀ネット JGB 振替決済システムを通じてペーパーレス形態で保有され、日銀のオペレーションおよび相対レポにおいて最も純粋な円担保として受け入れられる。また、円短期金利エクスポージャーへの海外投資家の重要なエントリーポイントでもある。

## マーケットマップ

| レイヤー | 機能 | FinWiki ルート |
|---|---|---|
| ソブリン発行体 | MOF は短期資金の管理と一般会計のニーズの調達のため、通常の入札カレンダーで 3M / 6M / 1Y の TDB を発行する。 | MOF 国債局 |
| 入札オペレーター | 日銀は MOF の財政代理人として JGB 入札を運営する；結果は当日公表される。 | 日銀 市場オペレーション面 |
| 投資家プール | 銀行、証券会社、アセットマネージャー、MMF / MRF、外国中央銀行、海外投資家、保険会社。 | [[money-market/japan-mmf-money-market-mutual-fund]] |
| 決済 / 登録 | 日銀ネット JGB 振替決済システム。 | 日銀 JGB 振替フレームワーク |
| レポ / 担保 | TDB は GC および SC レポで取引され、日銀担保として受け入れられる。 | [[money-market/jgb-repo-market-japan]] |

## 発行メカニクス

| 要素 | 読み方 |
|---|---|
| 満期 | 3 ヶ月、6 ヶ月、および 1 年。資金繰りの平準化のため資金管理短期証券も発行されることがある。 |
| 形態 | ゼロクーポン割引；投資家は満期に額面を受け取る。 |
| 発行方法 | コンベンショナル方式の利回り競争入札；結果は MOF / 日銀により開示される。 |
| 頻度 | 年限に応じて定期的な週次 / 月次の頻度；MOF の JGB 入札カレンダーを参照。 |
| 登録 | 日銀ネット JGB 振替決済システム；完全ペーパーレス。 |
| 税 | 特定の外国投資家免除制度の下で非居住者保有者には源泉徴収ゼロ。 |

## 入札頻度

MOF は、利付 JGB と TDB の両方をカバーする JGB 入札カレンダーを公表する。TDB の入札サイクルは日本国債市場で最も信頼性の高い発行リズムの一つである：短期の満期はほぼ週次の 3ヶ月発行を必要とし、定期的な 6ヶ月および 1年のオペレーションを伴う。資金繰りが必要とする場合には資金管理短期証券の発行が追加されることがある。

入札はユニフォーム・プライスまたはコンベンショナル方式で、応札者は利回り入札を提出する。JGB 市場のプライマリーディーラーが主な応札者であるが、ディーラーの仲介を通じた非ディーラーの応札ルートも存在する。結果は当日公表され、クリーンな短期金利のマーカーを提供する。

## 投資家構成

TDB の保有は円マネーマーケット商品としては異例に多様である：

- **海外投資家**：TDB は歴史的に、短期円エクスポージャー、円調達管理、通貨ヘッジのベーシス取引のために大きな海外投資家シェアを引き付けてきた。海外保有シェアは為替ヘッジ後の利回り差で大きく変動してきた。
- **日銀**：日銀は緩和局面でのアウトライト買入オペを通じて TDB を保有する；保有は政策レジームによって変動する。
- **国内銀行**：銀行は高品質流動資産、日銀担保、短期円利回りのために TDB を銀行勘定で保有する。
- **MMF / MRF / 短期円ファンド**：TDB はこれらのビークルの典型的な保有資産である。
- **保険および信託勘定**：TDB は短デュレーションのソブリン・エクスポージャーを提供する。

MOF は投資家タイプ別の JGB および TDB 保有の内訳を公表しており、最新の数値はこれを参照すべきである。

## 日銀と TDB

日銀は複数のオペレーション面で TDB を使用する：

| 日銀の機能 | TDB の連関 |
|---|---|
| アウトライト買入 | 日銀は過去のフレームワークで資金供給オペの一部として TDB を買い入れてきた。 |
| レポ / 担保 | TDB は共通担保資金供給オペその他の有担保オペにおける日銀貸付のための純粋な円担保として受け入れられる。 |
| 日銀ネット | TDB の決済は日銀の JGB 振替レール上で行われる。 |
| 政策波及 | TDB 利回りは [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|post-2024 floor system]] 政策金利と相互作用するクリーンな短期金利マーカーを提供する。 |

## TDB 利回りの読み方

| 読み方のレンズ | 備考 |
|---|---|
| ソブリン短期金利 | リスクフリーの円短期金利に最も近い市場の読み。 |
| OIS スプレッド | TDB 利回り対 TONA OIS は担保 / 希少性プレミアを示す。 |
| CP / NCD スプレッド | TDB は [[money-market/japan-cp-commercial-paper-market|CP]] と [[money-market/japan-ncd-negotiable-cd-market|NCD]] の信用スプレッドのベンチマークとなる。 |
| 為替ヘッジ後利回り | USD / EUR ヘッジ後の海外投資家リターン；限界的な海外需要を駆動する。 |
| 日銀金利スプレッド | TDB 利回りと補完当座預金制度金利の差は担保の希少性を示す。 |

## 2024 後の文脈

ネガティブ金利を終了させた日銀の 2024 年 3 月のレジーム変更後、TDB 利回りはプラスに転じ、入札カレンダーは引き続き定期的な短期金利マーカーを提供している。読み方のルール：

- 政策金利の決定と実際の TDB の落札利回りを分けること；
- ヘッジ後利回りの計算によって駆動される変化について海外投資家シェアを注視すること；
- 日銀が買っているのか、保有しているのか、満期を償還させているのかを確認すること；
- TDB-OIS ベーシスを単一原因の指標ではなく、有用な担保・調達シグナルとして扱うこと。

## JapanFG との関連

- メガバンク [[megabanks/mufg]]、[[megabanks/smfg]]、[[megabanks/mizuho-fg]] は HQLA、担保、ALM のために TDB を保有する。
- 証券会社 [[securities-firms/mizuho-securities]]、[[securities-firms/mufg-mums]]、[[securities-firms/nomura-hd]]、[[securities-firms/daiwa-sg]] はプライマリーディーラーであり、TDB のマーケットメイクを行う。
- [[financial-regulators/tokyo-tanshi]]、[[financial-regulators/central-tanshi]]、[[financial-regulators/ueda-yagi-tanshi]] は隣接する短期マネーマーケットの仲介に参加する。

## 境界ケース

- **TDB 対 短期利付 JGB**：TDB はゼロクーポンで 3M / 6M / 1Y でのみ発行される；同じレンジの残存満期を持つ短期利付 JGB は別の商品であり、別個の流動性特性で取引される。
- **TDB 対 CP / NCD**：TDB はソブリンでリスクフリーである；CP / NCD は発行体の信用リスクを負い、スプレッドで取引される。
- **TDB 対 資金管理短期証券**：資金管理短期証券は資金繰りの平準化のためにアドホックに発行され、通常の入札スケジュールの一部ではない。

## 関連

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/japan-cp-commercial-paper-market]]
- [[money-market/japan-ncd-negotiable-cd-market]]
- [[money-market/japan-mmf-money-market-mutual-fund]]
- [[money-market/boj-post-2024-floor-system-complementary-deposit-facility]]
- [[financial-regulators/boj-monetary-policy]]
- [[financial-regulators/local-bond-market]]
- [[financial-regulators/tokyo-tanshi]]
- [[financial-regulators/central-tanshi]]
- [[financial-regulators/ueda-yagi-tanshi]]
- [[INDEX|FinWiki index]]

## 出典

- MOF：国債局ページおよび JGB 入札カレンダー。
- MOF：TDB の過去データのための入札結果ページ。
- MOF：投資家タイプ別の JGB および TDB 保有の内訳。
- 日本銀行：日銀ネット JGB 振替決済システムおよびマネーマーケット概観。
- 日本銀行：TDB 関連オペを含むオペレーションメニュー。
