---
source: securities/japan-capital-markets-ecosystem-overview
source_hash: 7d98a4215695448b
lang: ja
status: machine
fidelity: ok
title: "日本の資本市場エコシステム概観"
translated_at: 2026-06-03T00:53:08.290Z
---
# 日本の資本市場エコシステム概観

## 要約

日本の**資本市場エコシステム**は、相互につながる5つのレイヤーで構成される。**発行（プライマリー）**、**取引（セカンダリー）**、**清算**、**決済 / 保管振替**、**規制 / 自主規制**である。この制度は、株式、債券（JGBと社債）、デリバティブ（上場とOTC）、証券化商品、セキュリティトークン市場にまたがり、取引所、清算機関、保管振替機関、規制当局、自主規制機関のネットワークに支えられている。

この項目は、[[securities/INDEX|securities domain]] を束ね、[[finance/INDEX|finance]]（コーポレートファイナンス側）、[[derivatives/INDEX|derivatives]]（商品レイヤー）、[[money-market/INDEX|money market]]（短期市場）、[[structured-finance/INDEX|structured finance]]（証券化）、[[real-estate-finance/INDEX|real-estate finance]]（J-REIT）の各領域につなぐ横断的なエコシステム・アンカーである。

## ウィキ上の位置づけ

この項目は [[securities/INDEX|securities index]] 配下のエコシステム・アンカーである。取引所 / 清算 / 決済インフラの詳細は [[securities/japan-market-infrastructure-map]]、上場FGの投資可能ユニバースは [[finance/japan-listed-financial-groups-investable-universe]] と組み合わせる。家計投資側は [[securities/nisa-2024-flow]]、企業金融側は [[finance/INDEX|finance index]] にある。

### 1. 発行（プライマリー市場）

プライマリー市場は、発行体が投資家から新規資本を調達する場所である。

| 商品 | 場所 | アンカー |
|---|---|---|
| 株式IPO | TSE Prime / Standard / Growth | [[securities/japan-ipo-listing-disclosure-route]], [[securities/japan-ipo-2024-2025-case-study-kioxia-tokyo-metro]] |
| 株式公募増資 / ライツ | TSE | [[securities/japan-underwriting-market-structure]] |
| 社債 | OTC（大半は中央上場なし） | [[finance/japan-convertible-bond-mechanics]], [[securities/japan-underwriting-market-structure]] |
| JGB発行 | 財務省入札、プライマリーディーラーネットワーク | [[derivatives/jgb-special-participants-primary-dealer]], [[money-market/jgb-repo-market-japan]] |
| 地方債 | 財務省調整、JFM共同発行 | [[policy-finance/local-government-bond-market]], [[policy-finance/japan-local-bond-association]] |
| 証券化 | OTC / 私募 | [[structured-finance/japan-abs-market-overview]] |
| セキュリティトークン | ODX / 私設ブロックチェーン発行 | [[securities/japan-security-token-secondary-market-route]], [[securities/osaka-digital-exchange]], [[securities/progmat-tokenized-securities-infrastructure]] |
| J-REIT IPO | TSE REITボード | [[real-estate-finance/j-reit-market-overview]] |

プライマリー市場は以下に支えられる。

- **引受シンジケート**。主要証券会社（[[JapanFG/nomura-hd|Nomura]]、[[JapanFG/daiwa-sg|Daiwa]]、[[JapanFG/mufg-mums|Mitsubishi UFJ Morgan Stanley]]、[[JapanFG/smbc-nikko|SMBC Nikko]]、[[JapanFG/mizuho-bank|Mizuho Securities]]）が主導する。
- **上場審査**。JPX-R（日本取引所自主規制法人）が担う。
- **開示**。EDINET（財務諸表開示）と TDnet（適時開示）を通じて行われる。
- **JSDA自主規制**。販売行為を対象とする。

### 2. 取引（セカンダリー市場）

セカンダリー市場は、投資家が既存の商品を売買する場所である。

| 商品 | 場所 | アンカー |
|---|---|---|
| 上場株式 | [[securities/tokyo-stock-exchange|TSE]], [[exchanges/INDEX|other Japan exchanges]] | [[securities/japan-best-execution-sor-pts]], [[securities/japan-online-brokerage-competition]] |
| PTS（代替取引） | Cboe Japan / Japannext / ODX | [[securities/japannext-securities]], [[securities/japannext-sor-routing-deep-dive]], [[securities/japan-pts-liquidity-data-guide]] |
| 上場デリバティブ | [[derivatives/jgb-futures-curve|JGB futures]] / [[derivatives/nikkei-225-futures-options|Nikkei 225]] / TOPIX / OSE上のTONA先物 | [[derivatives/INDEX]], [[derivatives/topix-futures]] |
| OTC株式 / 債券 | ディーラー市場、JSDA気配システム | [[derivatives/INDEX]], [[securities/japan-market-infrastructure-map]] |
| OTCデリバティブ | 相対OTC、対象範囲はJSCCで清算 | [[derivatives/japan-otc-derivative-market-overview]], [[derivatives/otc-clearing-jp-trade-repository]] |
| 株券貸借 | OTC相対 + JSF | [[securities/japan-stock-lending-market-route]], [[JapanFG/japan-securities-finance]] |
| 信用取引 | 証券会社信用 + JSF貸借取引 | [[securities/japan-margin-trading-and-securities-finance]] |
| JGB現物 | OTCインターディーラー | [[money-market/jgb-repo-market-japan]] |

セカンダリー市場は以下に支えられる。

- FSA / JSDA ガイドラインに基づく**最良執行規則**。
- TSE と PTS 間の**スマート・オーダー・ルーティング（SOR）**。
- **マーケットメーカーと流動性供給者**（[[securities/japan-market-maker-and-liquidity-provider-landscape]]）。
- **空売り規制**（[[securities/japan-short-selling-and-stock-loan-controls]]）。
- **信用取引 / 証券金融インフラ**（[[JapanFG/japan-securities-finance]]）。

### 3. 清算

清算は、相対エクスポージャーを中央清算機関（CCP）に対する多者間エクスポージャーへ変換する。

| 資産クラス | CCP | アンカー |
|---|---|---|
| 上場デリバティブ（OSE） | [[securities/japan-securities-clearing-corp|JSCC]] | JSCC がすべてのJPX上場デリバティブを清算する。 |
| 現物株式（TSE） | [[securities/japan-securities-clearing-corp|JSCC]] | JSCC がTSE現物株式を清算する。 |
| OTC IRS / OIS（義務対象） | [[securities/japan-securities-clearing-corp|JSCC]] | FIEAに基づき、対象範囲の円IRS / OISは清算義務がある。 |
| OTC CDS（指定指数） | [[securities/japan-securities-clearing-corp|JSCC]] | JSCC のCDS清算サービス。 |
| クロスボーダー同等性 | JSCC の EMIR 同等性 + CFTC 代替コンプライアンス | [[derivatives/otc-clearing-jp-trade-repository]] を参照。 |

### 4. 決済と保管振替

決済は清算済み取引の所有権を移転し、保管振替機関は基礎となる記録を保持する。

| 資産クラス | 保管振替機関 | 決済 |
|---|---|---|
| 上場株式 / 社債 / J-REIT | [[securities/japan-securities-depository-center|JASDEC]] | T+2 （株式）、T+1 （大半のJGB） |
| JGB | BoJ-NET（電子記帳） | T+1  |
| ETF / J-REIT | JASDEC | T+2  |
| セキュリティトークン | [[securities/progmat-tokenized-securities-infrastructure|Progmat]] / 私設ブロックチェーン | プラットフォームにより T+0  / T+1  |
| ファンド（投資信託） | 信託銀行カストディ | ファンド類型により T+N |
| 投資信託DVP | [[banking/jasdec-settlement-operations]] | 通常 T+2  |

統一的な取引所 / 清算 / 決済図は [[securities/japan-market-infrastructure-map]] を参照。

### 5. 規制と自主規制

規制は、市場行為、紛争処理、システミックリスク監視を統制する。

| レイヤー | 機関 | 機能 |
|---|---|---|
| 法令 | FIEA（金融商品取引法） | 証券、デリバティブ、仲介業者、開示、市場行為を規律する。 |
| 監督 | Financial Services Agency（FSA, 金融庁） | FIEA登録業者、JSCC、JASDEC、JPX-Rを監督する。 |
| 取引所自主規制 | JPX-R（日本取引所自主規制法人） | 上場審査、市場監視、処分。 |
| 自主規制（証券） | Japan Securities Dealers Association（JSDA） | 販売行為、OTC気配システム、勧誘規則。 |
| 証券投資者保護 | Japan Investor Protection Fund（JIPF） | 証券会社破綻時の顧客資産保護。 |
| AML / CFT | 警察庁配下の FIU（JAFIC） | 疑わしい取引の届出。 |
| 法定監査 | CPAAOB | 監査人監督。 |
| 税制（NISA） | 国税庁 + 財務省 | NISA制度。[[securities/nisa-2024-flow]] を参照。 |

## 市場参加者

| カテゴリ | 例 |
|---|---|
| 発行体 | 上場会社（TSE Prime 約1,600, 、Standard 約1,500, 、Growth 約600）、JGB発行体（財務省）、J-REITスポンサー、社債発行体、ABSオリジネーター。 |
| 引受会社 | [[JapanFG/nomura-hd|Nomura]]、[[JapanFG/daiwa-sg|Daiwa]]、[[JapanFG/mufg-mums|MUMSS]]、[[JapanFG/smbc-nikko|SMBC Nikko]]、[[JapanFG/mizuho-bank|Mizuho Securities]]、外資系IB。 |
| 証券会社（リテール） | [[JapanFG/sbi-hd|SBI Securities]]、[[JapanFG/rakuten-fg|Rakuten Securities]]、[[JapanFG/monex-group|Monex]]、Matsui Securities、[[JapanFG/mufg-esmart-securities|MUFG eSmart]]、[[JapanFG/paypay-securities|PayPay Securities]]、GMO Click、DMM。[[securities/japan-online-brokerage-competition]] を参照。 |
| アセットマネージャー | [[JapanFG/asset-management-one|Asset Management One]]（Mizuho）、[[JapanFG/mufg-asset-management|MUFG Asset Management]]、Nomura Asset Management、Nikko Asset Management、Daiwa Asset Management。[[securities/japan-asset-manager-landscape-matrix]] を参照。 |
| 信託銀行（カストディ） | [[banking/japan-master-trust-and-custody-bank-landscape|Master Trust Bank of Japan, Japan Trustee Services Bank, etc.]] |
| 機関投資家 | GPIF、生保、損保、BoJ（JGB保有）、海外機関投資家口座。 |
| 外国ブローカー | JPMorgan、Goldman Sachs、Citi、Morgan Stanley、Deutsche Bank、BNP Paribas、HSBC、UBS、Barclays。 |
| マーケットメーカー / 流動性供給者 | 国内外のクオンツ / HFT 会社。[[securities/japan-market-maker-and-liquidity-provider-landscape]] を参照。 |
| プライムブローカー | [[securities/japan-prime-brokerage-and-institutional-financing]]。 |
| 自主規制機関 | JSDA、JPX-R。 |
| 中央銀行 | Bank of Japan（BoJ）— JGB保有者、金融政策執行者、決済システム運営者。 |

## クロスボーダー連関

| 連関 | 仕組み |
|---|---|
| 海外株式保有 | 海外口座はTSE Prime浮動株の約30%を保有する。 |
| 海外JGB保有 | 海外口座はJGB浮動分の相応のシェアを保有する。 |
| EMIR同等性 | JSCC はEUカウンターパーティ向けに EMIR同等性を持つ。 |
| Title VII / CFTC同等性 | JSCC はIRS清算について CFTC代替コンプライアンス / 同等性要素を持つ。 |
| ICSD連携 | 外国銀行はクロスボーダー決済を支えるICSDとして機能する。[[JapanFG/clearstream-banking-japan]] を参照。 |
| TSE上場ETFのクロス上場 | 限定的なクロス上場。主に相互承認。 |

## 公開データソース

| 情報源 | 確認できる内容 |
|---|---|
| JPX統計 | 売買代金、時価総額、上場会社数、デリバティブ取引量。 |
| JSCC統計 | 清算量、参加者数、デフォルトファンド規模。 |
| JASDEC統計 | 保管振替残高、決済量。 |
| JSDA統計 | PTS売買代金、OTC債券取引、引受リーグテーブル。 |
| BoJ統計 | JGB保有、短期金融市場データ、決済システムデータ。 |
| MoF統計 | JGB発行カレンダー、プライマリーディーラー動向。 |
| FSA開示 | 監督上のコメント、市場行為検査。 |
| EDINET | 上場会社の財務諸表開示。 |
| TDnet | 上場会社の適時開示。 |

## 関連項目

- [[securities/INDEX]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-ipo-listing-disclosure-route]]
- [[securities/japan-ipo-2024-2025-case-study-kioxia-tokyo-metro]]
- [[securities/japan-underwriting-market-structure]]
- [[securities/japan-online-brokerage-competition]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-pts-liquidity-data-guide]]
- [[securities/japan-margin-trading-and-securities-finance]]
- [[securities/japan-short-selling-and-stock-loan-controls]]
- [[securities/japan-stock-lending-market-route]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[securities/japan-prime-brokerage-and-institutional-financing-matrix]]
- [[securities/japan-fiea-operator-registry-segment-matrix]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[securities/japan-market-maker-and-liquidity-provider-landscape]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/tokyo-stock-exchange]]
- [[securities/osaka-exchange]]
- [[securities/osaka-digital-exchange]]
- [[securities/japannext-securities]]
- [[securities/japan-security-token-secondary-market-route]]
- [[securities/progmat-tokenized-securities-infrastructure]]
- [[securities/nisa-2024-flow]]
- [[securities/nisa-2025-tax-reform-update]]
- [[finance/INDEX]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[finance/japan-convertible-bond-mechanics]]
- [[finance/japan-ib-league-table]]
- [[derivatives/INDEX]]
- [[derivatives/japan-otc-derivative-market-overview]]
- [[derivatives/otc-clearing-jp-trade-repository]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/topix-futures]]
- [[derivatives/nikkei-225-futures-options]]
- [[derivatives/jgb-special-participants-primary-dealer]]
- [[money-market/INDEX]]
- [[money-market/jgb-repo-market-japan]]
- [[structured-finance/INDEX]]
- [[structured-finance/japan-abs-market-overview]]
- [[real-estate-finance/INDEX]]
- [[real-estate-finance/j-reit-market-overview]]
- [[policy-finance/local-government-bond-market]]
- [[policy-finance/japan-local-bond-association]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/jasdec-settlement-operations]]
- [[JapanFG/INDEX]]
- [[JapanFG/japan-exchange-group]]
- [[JapanFG/japan-securities-finance]]
- [[JapanFG/nomura-hd]]
- [[JapanFG/daiwa-sg]]
- [[JapanFG/mufg-mums]]
- [[JapanFG/smbc-nikko]]
- [[INDEX|FinWiki index]]

## 出典

- Japan Exchange Group (JPX): trading and market-data surface; listing rules and statistics.
- Financial Services Agency (FSA): FIEA, supervisory framework, listing-examination rules.
- Bank of Japan (BoJ): JGB-related statistics, payment-settlement operations, monetary-policy materials.
- Japan Securities Dealers Association (JSDA): PTS statistics, underwriting league tables, OTC bond data, self-regulatory rules.
- Japan Securities Clearing Corp (JSCC): clearing rules, clearing-volume statistics, EMIR equivalence documentation.
- Japan Securities Depository Center (JASDEC): depository and settlement statistics.
- Ministry of Finance (MoF): JGB issuance calendar, primary-dealer system documentation.
- Japan Exchange Regulation (JPX-R): listing-examination and market-oversight materials.
