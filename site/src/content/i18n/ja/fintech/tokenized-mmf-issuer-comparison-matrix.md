---
source: fintech/tokenized-mmf-issuer-comparison-matrix
source_hash: de8f91a03b7973da
lang: ja
status: machine
fidelity: ok
title: "トークン化キャッシュ・クレジットファンド比較 — BUIDL、BENJI、WTGXX、ACRED、USYC、USTB、OUSG"
translated_at: 2026-07-29T17:58:12Z
---

# トークン化キャッシュ・クレジットファンド比較 — BUIDL、BENJI、WTGXX、ACRED、USYC、USTB、OUSG

## Wiki ルート

本項目は、エビデンスに基づく分類マトリクスとして [[fintech/INDEX|フィンテック索引]] の配下に位置します。[[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]、[[fintech/franklin-templeton-stablecoin-migration|Franklin BENJI / FOBXX]]、[[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]]、[[fintech/tokenized-mmf-wisdomtree-hashnote|WTGXX と USYC]]、[[fintech/ondo-finance-rusdy-adoption|Ondo OUSG / USDY]]を補完します。

> [!info] 要約
> これらの商品は、単一で均質な「トークン化 MMF」カテゴリーではありません。**FOBXX と WTGXX は米国登録マネー・マーケット・ファンドです。BUIDL は、適格投資家に免除規定に基づいて募集される未登録の私募ファンド持分です。ACRED は分散型クレジット戦略に投資するトークン化フィーダーであり、マネー・マーケット・ファンドではありません。USYC は Cayman ファンドの持分を表し、非米国人だけに提供されます。USTB と OUSG は適格購入者向けの私募ファンドです。** したがって、有用な比較は、変動する AUM ランキングや共通の $1 ペッグという仮定ではなく、法的ラッパー、適格投資家、基礎エクスポージャー、償還の仕組みから始まります。

## 商品および法的ラッパーのマトリクス

| 商品 | トークンが表すもの | 公開資料で説明されるラッパー | 適格投資家の境界 |
|---|---|---|---|
| BUIDL | BlackRock USD Institutional Digital Liquidity Fund の持分 | BVI ファンド。持分は Securities Act に基づき登録されておらず、免除規定に基づいて募集される | 適格投資家 / 事前承認済み投資家 |
| BENJI / FOBXX | BENJI トークン一枚が Franklin OnChain U.S. Government Money Fund の一口に対応 | 米国登録マネー・マーケット・ミューチュアル・ファンド | Franklin が開示する個人・機関向けチャネルを通じたアクセス（口座適格性を条件とする） |
| WTGXX | ブロックチェーン統合型の記録管理を通じて記録される WisdomTree Treasury Money Market Digital Fund の持分 | 米国登録の 1940 Act デジタル・マネー・マーケット・ファンド | WisdomTree が開示するチャネルを通じて利用可能（適格性を条件とする） |
| ACRED | Apollo Diversified Credit Fund へのエクスポージャーを提供するトークン化フィーダーの持分 | オフショア私募。トークン化フィーダーについて Form D が提出されている | 募集文書および投資家資格の制限が適用される |
| USYC | Hashnote International Short Duration Yield Fund Ltd. の持分のデジタル表象 | Cayman Islands のミューチュアル・ファンド。Circle International Bermuda がトークン管理者 | 非米国人のみ。追加制限が適用される場合がある |
| USTB | Superstate Short Duration US Government Securities Fund の持分 | トークン化私募ファンド、Delaware 州法定信託のシリーズ | 対応法域の適格購入者 |
| OUSG | Ondo I LP のリミテッド・パートナーシップ持分 | Section 3(c)(7) 私募ファンド。Rule 506(c) に基づく募集 | 確認済みの認定投資家および適格購入者 |

出典：[BUIDL のローンチおよび募集開示](https://investors.securitize.io/news/news-details/2024/BlackRock-Launches-Its-First-Tokenized-Fund-BUIDL-on-the-Ethereum-Network-03-20-2024/default.aspx)、[Franklin FOBXX ファンドページ](https://www.franklintempleton.com/investments/options/money-market-funds/products/29386/SINGLCLASS/franklin-on-chain-u-s-government-money-fund/FOBXX)、[Franklin BENJI の説明](https://digitalassets.franklintempleton.com/benji/)、[WisdomTree WTGXX ファクトシート](https://www.wisdomtree.com/-/media/us-media-files/documents/resource-library/fund-fact-sheets/digital/wtgxx.pdf)、[ACRED のローンチ](https://investors.securitize.io/news/news-details/2025/Apollo-and-Securitize-Announce-Partnership-and-Launch-Tokenized-Access-to-Credit-Fund-on-Aptos-Avalanche-Ethereum-Ink-Polygon-and-Solana-Networks-01-30-2025/default.aspx)、[ACRED フィーダーの Form D](https://www.sec.gov/Archives/edgar/data/2056038/000205603825000001/xslFormDX01/primary_doc.xml)、[Circle USYC](https://www.circle.com/usyc)、[Superstate USTB](https://superstate.com/ustb)、[Ondo OUSG の法的注記](https://docs.ondo.finance/qualified-access-products/ousg/important-notes)。

## エクスポージャーと価値の仕組み

| 商品 | 開示された投資エクスポージャー | 確認すべき価値 / 収益の仕組み |
|---|---|---|
| BUIDL | 現金、米国財務省短期証券、レポ取引 | トークン当たり $1 を目指す。日次で発生する配当は毎月、新規トークンとして支払われる |
| BENJI / FOBXX | 99.5% 以上を米国政府証券、現金、政府証券を完全担保とするレポに投資 | 安定した $1 NAV を目指す。日次配当。マネー・マーケット・ファンドの損失リスクは残る |
| WTGXX | 2025-11-01 の名称・戦略変更後の財務省証券マネー・マーケット戦略 | 安定した $1 NAV を目指す。収益と費用は目論見書および最新のファクトシートに従う |
| ACRED | 基礎となる Apollo ファンドを通じた企業向けダイレクトレンディング、資産担保融資、正常債権・ディスロケーション・ストラクチャードクレジット | フィーダーの日次 NAV が開示される。信用リスクと流動性リスクは財務省証券商品と異なる |
| USYC | 財務省短期証券および短期米国政府証券を担保とするリバースレポ | トークン価格の上昇を通じて利回りが蓄積する。償還は即時償還枠に依存し、その枠を超える場合は T+0 または T+1 で決済され得る |
| USTB | 短期財務省証券 / 米国政府証券 | 一口当たりの継続的 NAV。保証された $1 ステーブルコインとして表示されていない |
| OUSG | トークン化された財務省証券商品、マネー・マーケット商品、流動性資産のポートフォリオ。保有資産は変更され得る | 日次で増加するファンド価値。適格投資家向けに開示された 24/7 の発行 / 償還機能 |

出典：[BUIDL のローンチ](https://investors.securitize.io/news/news-details/2024/BlackRock-Launches-Its-First-Tokenized-Fund-BUIDL-on-the-Ethereum-Network-03-20-2024/default.aspx)、[FOBXX ファンドページ](https://www.franklintempleton.com/investments/options/money-market-funds/products/29386/SINGLCLASS/franklin-on-chain-u-s-government-money-fund/FOBXX)、[WTGXX ファクトシート](https://www.wisdomtree.com/-/media/us-media-files/documents/resource-library/fund-fact-sheets/digital/wtgxx.pdf)、[ACRED のローンチ](https://investors.securitize.io/news/news-details/2025/Apollo-and-Securitize-Announce-Partnership-and-Launch-Tokenized-Access-to-Credit-Fund-on-Aptos-Avalanche-Ethereum-Ink-Polygon-and-Solana-Networks-01-30-2025/default.aspx)、[Circle USYC](https://www.circle.com/usyc)、[Superstate USTB](https://superstate.com/ustb)、[Ondo OUSG](https://ondo.finance/ousg)。

## 直接比較できる事項

以下の比較軸は、日付の明示された発行体資料から記録する場合に有用です。

| 比較軸 | 重要である理由 | エビデンス基準 |
|---|---|---|
| 法的ラッパー | 登録、開示、投資家適格性を決定する | 目論見書、募集覚書の開示、SEC 提出書類、または公式の法的注記 |
| 適格投資家 | 個人向けアクセス、認定投資家向けアクセス、適格購入者向けアクセス、非米国人向けアクセスを区別する | 最新の申込 / 適格性開示 |
| 基礎エクスポージャー | 政府 MMF、財務省証券の私募ファンド、分散型クレジットを区別する | 最新の目論見書、保有資産、または公式商品ページ |
| NAV / 収益方式 | 安定 NAV、価格蓄積型、配当トークン分配は異なる仕組みである | ファンド会計および分配に関する開示 |
| 償還 | 「オンチェーン」であっても、無制限の即時流動性が保証されるわけではない | 締切時刻、上限、手数料、決済、ゲーティングに関する開示 |
| 所有権記録 | トークンが正式な持分記録の場合も、統合型記録管理システムの一要素の場合もある | 名義書換代理人および目論見書の開示 |
| ネットワーク対応 | チェーンの利用可否は時間とともに変化し、シェアクラスごとに異なる場合がある | 最新の公式コントラクト / ネットワーク一覧 |
| サービス提供者 | 名義書換代理人、管理会社、カストディアン、トークン化プラットフォームは異なる役割である | 募集文書または発行体の発表 |

出典：比較方法は、商品マトリクスに列挙した発行体資料および提出書類から導出しています。これは分析上のチェックリストであり、七つの商品が同一の運用モデルを採用しているとの主張ではありません。

## よくある比較上の誤りの訂正

### ACRED は MMF ではない

ACRED は、Apollo Diversified Credit Fund へのアクセスを提供するトークン化フィーダーです。そのエクスポージャーには、ダイレクトレンディング、資産担保融資、その他のクレジット戦略が含まれます。これを MMF の利回りまたは安定 NAV のランキングに入れると、信用リスク、デュレーション、流動性、ファンド構造の重要な差異が見えなくなります。

出典：[Apollo と Securitize による ACRED のローンチ](https://investors.securitize.io/news/news-details/2025/Apollo-and-Securitize-Announce-Partnership-and-Launch-Tokenized-Access-to-Credit-Fund-on-Aptos-Avalanche-Ethereum-Ink-Polygon-and-Solana-Networks-01-30-2025/default.aspx)および[Apollo Diversified Credit Fund の SEC 提出書類](https://www.sec.gov/Archives/edgar/data/1676197/000119312526192295/d335502d486bpos.htm)。

### USTB は私募ファンド

現在の Superstate ページは、USTB を適格購入者向けのトークン化私募ファンドと明記しています。以前の登録届出書では登録ファンドへの再編案が説明されていましたが、提案を商品の現在開示されている構造の代わりとして扱うべきではありません。

出典：[Superstate USTB](https://superstate.com/ustb)および[再編案を説明した 2025 年の SEC 提出書類](https://www.sec.gov/Archives/edgar/data/1982577/000110465925042142/tm2513524d1_n1a.htm)。

### OUSG は単なる「BUIDL ラッパー」ではない

Ondo の法的開示では、OUSG は同社独自の私募ファンドに対するリミテッド・パートナーシップ持分とされています。Ondo の現在の商品資料は、複数の資産運用会社の商品、銀行預金、流動性資産を含み得るポートフォリオを示しています。BUIDL は重要な保有資産であり続けてきましたが、それによって OUSG のファンド層がなくなるわけでも、固定配分が証明されるわけでもありません。

出典：[Ondo の信頼性およびセキュリティに関する開示](https://docs.ondo.finance/trust-and-security)、[OUSG の法的注記](https://docs.ondo.finance/qualified-access-products/ousg/important-notes)、[現在の OUSG 商品ページ](https://ondo.finance/ousg)。

### サービス提供者の集中には役割別のエビデンスが必要

Securitize は、BUIDL の名義書換代理人、トークン化プラットフォーム、募集代理人であり、ACRED フィーダーのマネージャーでもあると公表しています。Ondo は OUSG にトークン化および助言の役割を提供しています。これらの関係は、Securitize が OUSG の名義書換代理人であることも、障害が必ずすべての商品へ連鎖することも立証しません。カストディも商品ごとに確認する必要があります。「基礎保有資産を介する」ことは、当該ファンドの直接のカストディアンであることと同じではありません。

出典：[BUIDL のローンチ](https://investors.securitize.io/news/news-details/2024/BlackRock-Launches-Its-First-Tokenized-Fund-BUIDL-on-the-Ethereum-Network-03-20-2024/default.aspx)、[ACRED のローンチ](https://investors.securitize.io/news/news-details/2025/Apollo-and-Securitize-Announce-Partnership-and-Launch-Tokenized-Access-to-Credit-Fund-on-Aptos-Avalanche-Ethereum-Ink-Polygon-and-Solana-Networks-01-30-2025/default.aspx)、[OUSG の法的注記](https://docs.ondo.finance/qualified-access-products/ousg/important-notes)。

## AUM、利回り、チェーン数に関する方針

ライブの AUM、APY、保有資産、ネットワーク数、手数料は異なる周期で変化します。そのため、本ページでは日付の一致しない数値を組み合わせて市場シェアを主張しません。これらの項目を使用する場合は、次を守ります。

- 各数値に発行体の基準日を付す。
- 「ピーク AUM」を現在の AUM に加算しない。
- ファンド AUM、トークン化シェアクラス AUM、プロトコル TVL を区別する。
- 表示利回りを保証済みまたは将来予測として説明しない。
- チェーンへの展開だけからカストディ、販売、担保としての採用を推論しない。

例えば Franklin は、FOBXX の純資産総額を $813.50 million（基準日 2026-05-31）と報告し、WisdomTree は WTGXX の純資産を $827.70 million（基準日 2026-03-31）と報告しました。これらは同一日時点の観測値ではなく、同日比較であるかのように順位付けすべきではありません。

出典：[Franklin FOBXX](https://www.franklintempleton.com/investments/options/money-market-funds/products/29386/SINGLCLASS/franklin-on-chain-u-s-government-money-fund/FOBXX)および[WisdomTree WTGXX 2026-Q1 ファクトシート](https://dataspanapi.wisdomtree.com/pdr/documents/WEBSITE_FUND_DETAILS/WDT/US/EN-US/WTGXX_2/)。

## ステーブルコイン法との境界

ファンド持分や私募ファンド持分は、トークン化されていることや低ボラティリティを目指すことだけを理由に、決済用ステーブルコインとして扱うべきではありません。GENIUS Act の発行体による利息付与の制限は section 4(a)(11) にあり、一般的な「§501」規則ではありません。同法が成立したという事実だけでは、同法がトークン化ファンドの成長をもたらしたことも、ステーブルコインとファンドを組み合わせたワークフローが規制上の迂回策であることも証明されません。

法的状態と施行段階については [[fintech/regulatory-reset-2025-usa-crypto-policy|米国の 2025–2026 年政策リセット]] を参照し、実際の募集文書を用いて決済用ステーブルコインと証券・ファンド持分を区別してください。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki 索引]]
- [[fintech/INDEX|フィンテック索引]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[fintech/franklin-templeton-stablecoin-migration|Franklin BENJI / FOBXX]]
- [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]]
- [[fintech/tokenized-mmf-wisdomtree-hashnote|WTGXX と USYC]]
- [[fintech/ondo-finance-rusdy-adoption|Ondo OUSG / USDY / rUSDY]]
- [[fintech/regulatory-reset-2025-usa-crypto-policy|米国ステーブルコイン法の状況]]
<!-- /wiki-links:managed -->

## 出典

- [BUIDL のローンチおよび構造](https://investors.securitize.io/news/news-details/2024/BlackRock-Launches-Its-First-Tokenized-Fund-BUIDL-on-the-Ethereum-Network-03-20-2024/default.aspx)
- [Franklin FOBXX](https://www.franklintempleton.com/investments/options/money-market-funds/products/29386/SINGLCLASS/franklin-on-chain-u-s-government-money-fund/FOBXX)
- [WisdomTree WTGXX ファクトシート](https://www.wisdomtree.com/-/media/us-media-files/documents/resource-library/fund-fact-sheets/digital/wtgxx.pdf)
- [ACRED のローンチ](https://investors.securitize.io/news/news-details/2025/Apollo-and-Securitize-Announce-Partnership-and-Launch-Tokenized-Access-to-Credit-Fund-on-Aptos-Avalanche-Ethereum-Ink-Polygon-and-Solana-Networks-01-30-2025/default.aspx)
- [ACRED フィーダーの Form D](https://www.sec.gov/Archives/edgar/data/2056038/000205603825000001/xslFormDX01/primary_doc.xml)
- [Circle USYC](https://www.circle.com/usyc)
- [Superstate USTB](https://superstate.com/ustb)
- [Ondo OUSG の信頼性およびセキュリティに関する開示](https://docs.ondo.finance/trust-and-security)
- [Ondo OUSG の法的注記](https://docs.ondo.finance/qualified-access-products/ousg/important-notes)
