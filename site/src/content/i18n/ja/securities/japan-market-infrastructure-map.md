---
source: securities/japan-market-infrastructure-map
source_hash: 2c9adb0ba441c455
lang: ja
status: machine
fidelity: ok
title: "日本の市場インフラ地図"
translated_at: 2026-06-03T00:53:08.353Z
---
# 日本の市場インフラ地図

## 概要

日本の証券市場は、公共監督当局、自主規制機関、取引所市場、PTS、市場清算、決済、証券金融、証券会社、カストディアン、開示インフラが重なった階層型のインフラシステムである。証券会社のページは、その全体の一断面にすぎない。

このページは、[[securities/tokyo-stock-exchange|Tokyo Stock Exchange]]、[[securities/osaka-exchange|Osaka Exchange]]、[[securities/tokyo-commodity-exchange|Tokyo Commodity Exchange]]、[[securities/japan-securities-clearing-corp|JSCC]]、[[securities/japan-securities-depository-center|JASDEC]]、[[securities/japannext-securities|Japannext]]、[[securities/osaka-digital-exchange|ODX]]、[[financial-regulators/japan-securities-finance|Japan Securities Finance]]、[[foreign-financial-institutions/euroclear-bank-japan|Euroclear Bank Japan]]、[[foreign-financial-institutions/clearstream-banking-japan|Clearstream Banking Japan]]、[[financial-regulators/jsda|JSDA]]、および証券会社 / 引受関連ページへの経路図として使う。

これは[[securities/INDEX|securities domain]]内のインフラ経路である。論点が市場の配管から業者登録や法的地位に移る場合は、[[securities/financial-instruments-business-operators-japan-index|FIEA operator registry index]]および[[financial-licenses/INDEX|JapanFG legal / financial licenses]]を使う。

## レイヤー地図

| レイヤー | 主な主体 | 用途 |
|---|---|---|
| 公的監督 | FSA、財務局、決済 / 短期金融市場の配管が関係する場合の日本銀行 | 免許、登録、公的監督、開示、支払 / 決済の文脈。 |
| 自主規制 | [[financial-regulators/jsda|JSDA]]、取引所の自主規制機関、業界規則 | ディーラー行為、引受、勧誘、会員規則、市場規律。 |
| 取引所持株会社 | [[financial-regulators/japan-exchange-group|Japan Exchange Group]] | 中核取引所、清算、データインフラのグループレベルの所有者。 |
| 現物株式取引所 | [[securities/tokyo-stock-exchange|Tokyo Stock Exchange]] | 上場株式、ETF、REIT、上場規則、取引市場、発行体開示との隣接領域。 |
| 上場デリバティブ取引所 | [[securities/osaka-exchange|Osaka Exchange]] | 株価指数、JGB、その他の上場デリバティブ。 |
| 商品デリバティブ取引所 | [[securities/tokyo-commodity-exchange|Tokyo Commodity Exchange]] | JPX グループ内の商品先物およびエネルギー / 商品経路。 |
| PTS / 代替取引施設 | [[securities/japannext-securities|Japannext]]、[[securities/osaka-digital-exchange|ODX]] | 取引所外取引、SOR、夜間取引、セキュリティトークン市場の論点。 |
| 清算 | [[securities/japan-securities-clearing-corp|JSCC]] | 中央清算機関、証拠金、デフォルト管理、ネッティング、清算参加者リスク。 |
| 決済 / CSD | [[securities/japan-securities-depository-center|JASDEC]] | 振替制度、DVP、発行体 / 投資家口座インフラ、決済リスク削減。 |
| ICSD / グローバルカストディ接続 | [[foreign-financial-institutions/euroclear-bank-japan|Euroclear Bank Japan]]、[[foreign-financial-institutions/clearstream-banking-japan|Clearstream Banking Japan]]、[[banking/japan-trust-bank-custody-map|trust-bank custody map]] | クロスボーダー決済、カストディ、JGB 担保、開示、海外投資家による日本資産アクセス。 |
| 証券金融 | [[financial-regulators/japan-securities-finance|Japan Securities Finance]] | 信用取引貸付、貸株、資金と在庫の配管。 |
| 証券会社 / 引受会社 | [[securities-firms/nomura-hd|Nomura]]、[[securities-firms/daiwa-sg|Daiwa]]、[[securities-firms/sbi-securities|SBI Securities]]、[[securities-firms/rakuten-securities|Rakuten Securities]] | 顧客アクセス、引受、リサーチ、販売、執行、カストディ接続。 |

## 現物株式フロー

```text
Investor
  -> broker / online broker
  -> order routing / SOR
  -> TSE or PTS venue
  -> JSCC clearing
  -> JASDEC securities settlement
  -> Bank of Japan / settlement bank cash leg
```

JPX の清算 / 決済資料は、取引所取引における売買、清算、決済の機能分担を説明している。JASDEC の資料は、振替制度と DVP 決済インフラを説明している。FinWiki では、これは「株式取引」に関する問いが少なくとも四つのページ、すなわち証券会社、取引場所、清算レイヤー、決済レイヤーを必要とし得ることを意味する。

## 取引場所地図

| 取引場所 / インフラ | ページ | 読むべき要点 |
|---|---|---|
| JPX 持株会社 | [[financial-regulators/japan-exchange-group]] | TSE、OSE、TOCOM、JSCC、JPX-R、JPX Market Innovation & Research のグループレベルの所有とガバナンス。 |
| TSE | [[securities/tokyo-stock-exchange]] | 現物株式、上場、市場区分、TDnet との隣接領域。 |
| OSE | [[securities/osaka-exchange]] | 上場デリバティブ、指数先物 / オプション、JGB 先物経路。 |
| TOCOM | [[securities/tokyo-commodity-exchange]] | 統合取引所グループ内の商品デリバティブ。 |
| JSCC | [[securities/japan-securities-clearing-corp]] | CCP とデフォルトリスクの相互化。 |
| JASDEC | [[securities/japan-securities-depository-center]] | CSD、振替制度、DVP、決済照合。 |
| Japannext | [[securities/japannext-securities]] | PTS、代替流動性、SOR 経路。 |
| ODX | [[securities/osaka-digital-exchange]] | PTS およびセキュリティトークン二次市場の経路。 |
| JSF | [[financial-regulators/japan-securities-finance]] | 証券金融、信用取引貸付と貸株の配管。 |
| Euroclear / Clearstream | [[foreign-financial-institutions/euroclear-bank-japan]]、[[foreign-financial-institutions/clearstream-banking-japan]] | 日本資産向けの ICSD / クロスボーダーカストディおよび担保経路。 |

## 重要性

| 分析上の問い | インフラ経路 |
|---|---|
| 表面的なゼロ手数料証券仲介が、なぜなお経済的に意味を持ち得るのか。 | 証券会社の収益性を、PTS / SOR、信用取引金融、貸株、エコシステム内の相互補助と合わせて読む。 |
| ボラティリティが急上昇したときに何が起きるのか。 | JSCC の証拠金、決済タイミング、証券会社のリスク管理を読む。 |
| IPO はどのように売買可能な公開証券になるのか。 | [[securities/japan-underwriting-market-structure|underwriting]]、TSE 上場、JSCC、JASDEC、証券会社の販売を合わせて読む。 |
| セキュリティトークンはどこに位置づくのか。 | ODX / PTS、FIEA 上のトークン化証券、決済設計、開示経路を読む。 |
| なぜ JGB は証券市場にとって重要なのか。 | [[money-market/jgb-repo-market-japan|JGB repo]]、JSCC 清算、決済の資金側、担保チャネルを読む。 |

## 境界メモ

- **取引所と清算**: TSE / OSE / TOCOM は取引場所であり、JSCC は清算レイヤーである。
- **清算と決済**: 清算は債務をネッティングして保証し、決済は証券と資金を移転する。
- **証券会社と取引場所**: 個人向けアプリは市場そのものではなく、取引場所とインフラへの顧客アクセスである。
- **PTS とダーク / OTC**: PTS は規制された代替取引施設の経路であり、すべての取引所外執行を同一視してはいけない。
- **証券金融と証券仲介**: 信用取引には証券会社と[[financial-regulators/japan-securities-finance|JSF]]が関与し得る。資金調達と担保は別に分析する。
- **国内 CSD と ICSD**: [[securities/japan-securities-depository-center|JASDEC]]は国内 CSD 経路であり、[[foreign-financial-institutions/euroclear-bank-japan|Euroclear]]および[[foreign-financial-institutions/clearstream-banking-japan|Clearstream]]は ICSD / グローバルカストディ接続である。
- **公開会社とインフラページ**: [[financial-regulators/japan-exchange-group|JPX]]は上場持株会社である。証券領域のページは機能的インフラを説明する。

## 関連項目

- [[securities/INDEX]]
- [[financial-regulators/japan-exchange-group]]
- [[securities/tokyo-stock-exchange]]
- [[securities/osaka-exchange]]
- [[securities/tokyo-commodity-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/japannext-securities]]
- [[securities/osaka-digital-exchange]]
- [[financial-regulators/japan-securities-finance]]
- [[foreign-financial-institutions/euroclear-bank-japan]]
- [[foreign-financial-institutions/clearstream-banking-japan]]
- [[financial-regulators/jsda]]
- [[securities/japan-online-brokerage-competition]]
- [[securities/japan-underwriting-market-structure]]
- [[INDEX|FinWiki index]]

## 出典

- JPX: company profile and cash-equity clearing / settlement outline.
- JSCC: company and clearing overview pages.
- JASDEC: company outline and DVP settlement pages.
- Japan Securities Finance: company profile.
- Japannext and ODX official site pages.
- JSDA: organization overview.
