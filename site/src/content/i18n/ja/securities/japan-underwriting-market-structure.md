---
source: securities/japan-underwriting-market-structure
source_hash: 15a05a0c8e290982
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "日本の引受市場構造"
translated_at: 2026-06-26T08:29:17.591Z
---
# 日本の引受市場構造

## 概要日本の引受は、発行体、証券会社、投資家、取引所、開示システム、決済インフラをつなぐ資本調達の橋渡しである。主幹事・主務幹事の役割は、単なる販売網ではない。デューデリジェンス、上場準備、価格決定、ブックビルディング、シンジケート調整、投資家保護の統制も支える。

このページは、[[finance/japan-ib-league-table|Japan IB league table]]、[[financial-licenses/securities-license-stack|Japan securities license stack]]、[[securities/japan-market-infrastructure-map|Japan market infrastructure map]]、および[[securities-firms/nomura-hd|Nomura]]、[[securities-firms/daiwa-sg|Daiwa Securities Group]]、[[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/mizuho-securities|Mizuho Securities]]、[[securities-firms/mufg-mums|MUMSS]]のような発行体・ブローカー各ページと併せて使う。

## 機能チェーン

| 段階 | 主な関係者 | 分析上の読み方 |
|---|---|---|
| 発行体の準備 | 発行体、監査人、法律アドバイザー、主幹事証券会社 | ガバナンス、会計、内部統制、エクイティストーリー、対象市場への適格性。 |
| 引受デューデリジェンス | 主幹事とシンジケート参加会社 | JSDA の引受規則と各社の内部統制が、審査・承認プロセスを形づくる。 |
| 上場審査 | [[securities/tokyo-stock-exchange|Tokyo Stock Exchange]] / JPX-R と関係者 | 取引所の上場基準・審査プロセスは、証券会社の引受判断とは別レイヤーである。 |
| 開示 | EDINET、目論見書、法定開示・取引所開示 | 公開投資家向け情報と責任範囲。 |
| ブックビルディング / 価格決定 | 主幹事、シンジケート、機関投資家・個人投資家 | 需要把握、配分方針、バリュエーション、該当する場合の安定操作。 |
| 売買 / 決済 | 取引所 / PTS、[[securities/japan-securities-clearing-corp|JSCC]]、[[securities/japan-securities-depository-center|JASDEC]] | 新規発行または売出しされた証券が市場インフラ層に入る。 |

## 引受会社の類型

| 類型 | 典型的な役割 | FinWiki ページ |
|---|---|---|
| 独立系総合証券グループ | 大型 IPO / PO / 債券引受、リサーチ、販売、トレーディング、ウェルスチャネル。 | [[securities-firms/nomura-hd]], [[securities-firms/daiwa-sg]] |
| メガバンク系証券会社 | コーポレートバンキング関係と証券引受・販売の組み合わせ。 | [[securities-firms/smbc-nikko]], [[securities-firms/mizuho-securities]], [[securities-firms/mufg-mums]] |
| 外資系投資銀行 / ブローカー | クロスボーダー株式・債券、M&A、機関投資家向け販売、グローバルなセクターカバレッジ。 | [[securities-firms/goldman-sachs-japan]], [[foreign-financial-institutions/jpmorgan-japan]], [[securities-firms/morgan-stanley-japan]], [[foreign-financial-institutions/bnp-paribas-japan]], [[foreign-financial-institutions/ubs-japan]] |
| 中堅・地域証券会社 | 地域発行体へのアクセス、個人向け販売、副幹事的役割、地域ウェルスチャネル。 | [[securities-firms/okasan-sg]], [[securities-firms/tokai-tokyo-fh]], [[securities-firms/aizawa-sg]], [[securities-firms/iwai-cosmo-hd]] |
| オンラインブローカーの販売参加者 | 個人向け販売と上場後の取引アクセス。フルの主幹事中核を担うことは比較的少ない。 | [[securities-firms/sbi-securities]], [[securities-firms/rakuten-securities]], [[securities/japan-online-brokerage-competition]] |

## IPO / PO の読み方

IPO と公募・売出しを分析する際は、四つの問いを分ける。

1. **上場準備度**: 発行体は取引所の上場基準と開示期待を満たせるか。
2. **引受判断**: 主幹事はデューデリジェンスを完了し、防御可能な引受見解を形成できるか。
3. **販売力**: 誰が機関投資家と個人投資家に株式を配分できるか。
4. **上場後市場の質**: 上場後の流動性、ロックアップ、安定操作、リサーチカバレッジ、IR を含め、何が起きるか。

取引所側のプロセスには JPX の上場前・上場ガイドページが有用である。証券会社の行為規制レイヤーには JSDA の規則と自主規制資料が有用である。EDINET と目論見書資料は公開開示レイヤーである。

## DCM / 債券引受の読み方デット・キャピタル・マーケット分析では、別の制約群が加わる。

- 発行体格付 / クレジットスプレッド。
- 銀行関係と投資家基盤。
- 適格投資家の種類。
- JGB 利回りとスワップカーブ環境。
- [[securities/japan-securities-depository-center|JASDEC]]を通じた決済経路と資金決済の配管。
- 開示と継続義務のプロファイル。

そのため、証券引受のページであっても[[money-market/jgb-repo-market-japan|Japan JGB repo market]]と[[money-market/INDEX|money-market domain]]が重要になることがある。

## リーグテーブルの境界

[[finance/japan-ib-league-table|Japan IB league table]]はランキングの視点として記録されるもので、市場構造そのものではない。リーグテーブルは次の要因で変わる。

- 対象となる取引日の範囲。
- IPO、PO、CB、債券、M&A、ローン関連の役割を含めるか。
- 日本国内案件とクロスボーダー案件の定義。
- 引受クレジットの分割方法。
- 親会社グループ帰属か、法的エンティティ帰属か。

リーグテーブルは「この切り口で誰が活動しているか」を問うために使い、そのうえでこのページにより「その会社はどの役割を果たし、どの規制・インフラレイヤーが重要だったか」を問う。

## リスク統制と失敗モード

| リスク | 表れる場所 |
|---|---|
| 発行体デューデリジェンスの弱さ | 主幹事審査、監査人との連携、JPX 上場審査。 |
| 攻めすぎた価格設定 | ブックビルディング、バリュエーション、上場後パフォーマンス。 |
| 配分上の利益相反 | 機関投資家 / 個人投資家配分、グループ関係、コーナーストーン / 親会社顧客への懸念。 |
| 開示ギャップ | 目論見書、EDINET、TDnet、リスク要因の網羅性。 |
| 市場濫用 / 安定操作の境界 | JSDA 規則、取引所規則、内部コンプライアンス、モニタリング。 |
| 決済 / オペレーション不全 | JSCC、JASDEC、株主名簿管理人、ブローカーのバックオフィス。 |

## 関連項目

- [[securities/INDEX]]
- [[finance/japan-ib-league-table]]
- [[financial-licenses/securities-license-stack]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/tokyo-stock-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[financial-regulators/jsda]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/smbc-nikko]]
- [[securities-firms/mizuho-securities]]
- [[securities-firms/mufg-mums]]
- [[INDEX|FinWiki index]]

## 出典

- JPX: pre-listing company information and TSE new-listing guidebook pages.
- JSDA: rules page and underwriting-due-diligence glossary entry.
- FSA: licensed-operator list.
- EDINET disclosure portal.
