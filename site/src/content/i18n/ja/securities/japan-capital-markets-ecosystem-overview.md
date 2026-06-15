---
source: securities/japan-capital-markets-ecosystem-overview
source_hash: 295d18ea8342be12
lang: ja
status: machine
fidelity: ok
title: "日本の資本市場エコシステム概観"
translated_at: 2026-06-15T04:09:41.157Z
---

# 日本の資本市場エコシステム概観

## TL;DR

日本の**資本市場エコシステム**は、相互に結びついた 5 つのレイヤーから成る：**発行（プライマリー）**、**取引（セカンダリー）**、**清算**、**決済／振替（保管）**、および**規制／自主規制**。このシステムは、株式、債券（JGB および社債）、デリバティブ（上場および店頭）、証券化商品、セキュリティトークンの各市場にまたがり、取引所、清算機関、保管振替機関、規制当局、自主規制機関のネットワークによって支えられている。

この項目は、[[securities/INDEX|securities domain]] を束ねるとともに、[[finance/INDEX|finance]]（コーポレートファイナンス側）、[[derivatives/INDEX|derivatives]]（商品レイヤー）、[[money-market/INDEX|money market]]（短期側）、[[structured-finance/INDEX|structured finance]]（証券化）、[[real-estate-finance/INDEX|real-estate finance]]（J-REIT）の各ドメインへと橋渡しする、横断的なエコシステムのアンカーである。

## Wiki 上の位置づけ

この項目は [[securities/INDEX|securities index]] の配下に、エコシステムのアンカーとして位置する。取引所／清算／決済の配管の詳細については [[securities/japan-market-infrastructure-map]] と、上場 FG の投資可能ユニバースについては [[finance/japan-listed-financial-groups-investable-universe]] と併せて読むとよい。家計投資の側面は [[securities/nisa-2024-flow]] にある。コーポレートファイナンスの側面は [[finance/INDEX|finance index]] にある。

### 1. 発行（プライマリー市場）

プライマリー市場は、発行体が投資家から新規資本を調達する場である。

| 商品 | 場 | アンカー |
|---|---|---|
| 株式 IPO | 東証 Prime / Standard / Growth | [[securities/japan-ipo-listing-disclosure-route]], [[securities/japan-ipo-2024-2025-case-study-kioxia-tokyo-metro]] |
| 株式公募増資／ライツ | 東証 | [[securities/japan-underwriting-market-structure]] |
| 社債 | 店頭（大半は中央上場なし） | [[finance/japan-convertible-bond-mechanics]], [[securities/japan-underwriting-market-structure]] |
| JGB 発行 | 財務省入札、プライマリーディーラー網 | [[derivatives/jgb-special-participants-primary-dealer]], [[money-market/jgb-repo-market-japan]] |
| 地方債 | 財務省調整、JFM 共同発行 | [[policy-finance/local-government-bond-market]], [[policy-finance/japan-local-bond-association]] |
| 証券化 | 店頭／私募 | [[structured-finance/japan-abs-market-overview]] |
| セキュリティトークン | ODX／プライベートブロックチェーン発行 | [[securities/japan-security-token-secondary-market-route]], [[securities/osaka-digital-exchange]], [[securities/progmat-tokenized-securities-infrastructure]] |
| J-REIT IPO | 東証 REIT ボード | [[real-estate-finance/j-reit-market-overview]] |

プライマリー市場は次によって支えられる：

- **引受シンジケート団**、主要証券会社が主導（[[securities-firms/nomura-hd|Nomura]], [[securities-firms/daiwa-sg|Daiwa]], [[securities-firms/mufg-mums|Mitsubishi UFJ Morgan Stanley]], [[securities-firms/smbc-nikko|SMBC Nikko]], [[megabanks/mizuho-bank|Mizuho Securities]]）。
- **上場審査**、JPX-R（日本取引所自主規制法人）による。
- **開示**、EDINET（財務諸表開示）および TDnet（適時開示）を通じて。
- **JSDA 自主規制**、販売勧誘の行為規範について。

### 2. 取引（セカンダリー市場）

セカンダリー市場は、投資家が既発の商品を取引する場である。

| 商品 | 場 | アンカー |
|---|---|---|
| 上場株式 | [[securities/tokyo-stock-exchange|TSE]], [[exchanges/INDEX|other Japan exchanges]] | [[securities/japan-best-execution-sor-pts]], [[securities/japan-online-brokerage-competition]] |
| PTS（私設取引） | Cboe Japan / Japannext / ODX | [[securities/japannext-securities]], [[securities/japannext-sor-routing-deep-dive]], [[securities/japan-pts-liquidity-data-guide]] |
| 上場デリバティブ | OSE 上の [[derivatives/jgb-futures-curve|JGB futures]] / [[derivatives/nikkei-225-futures-options|Nikkei 225]] / TOPIX / TONA 先物 | [[derivatives/INDEX]], [[derivatives/topix-futures]] |
| 店頭株式／債券 | ディーラー市場、JSDA 気配システム | [[derivatives/INDEX]], [[securities/japan-market-infrastructure-map]] |
| 店頭デリバティブ | 相対の店頭、対象範囲は JSCC でクリア | [[derivatives/japan-otc-derivative-market-overview]], [[derivatives/otc-clearing-jp-trade-repository]] |
| 貸株 | 店頭相対＋ JSF | [[securities/japan-stock-lending-market-route]], [[financial-regulators/japan-securities-finance]] |
| 信用取引 | 証券会社の信用＋ JSF 貸借取引 | [[securities/japan-margin-trading-and-securities-finance]] |
| JGB 現物 | 店頭ディーラー間 | [[money-market/jgb-repo-market-japan]] |

セカンダリー市場は次によって支えられる：

- **最良執行義務**、FSA / JSDA ガイドラインのもとで。
- **スマート・オーダー・ルーティング（SOR）**、東証と PTS の各取引場間で。
- **マーケットメイカーおよびリクイディティ・プロバイダー**（[[securities/japan-market-maker-and-liquidity-provider-landscape]]）。
- **空売り規制**（[[securities/japan-short-selling-and-stock-loan-controls]]）。
- **信用／証券金融の配管**（[[financial-regulators/japan-securities-finance]]）。

### 3. 清算

清算は、相対のエクスポージャーを、中央清算機関（CCP）に対する多数当事者間のエクスポージャーへと変換する。

| 資産クラス | CCP | アンカー |
|---|---|---|
| 上場デリバティブ（OSE） | [[securities/japan-securities-clearing-corp|JSCC]] | JSCC はすべての JPX 上場デリバティブを清算する。 |
| 現物株式（東証） | [[securities/japan-securities-clearing-corp|JSCC]] | JSCC は東証の現物株式を清算する。 |
| 店頭 IRS / OIS（義務） | [[securities/japan-securities-clearing-corp|JSCC]] | FIEA のもとで対象範囲の円 IRS / OIS の清算が義務。 |
| 店頭 CDS（指定指数） | [[securities/japan-securities-clearing-corp|JSCC]] | JSCC CDS 清算サービス。 |
| クロスボーダー同等性 | JSCC EMIR 同等＋ CFTC 代替コンプライアンス | [[derivatives/otc-clearing-jp-trade-repository]] を参照。 |

### 4. 決済と保管振替

決済は清算済み取引の所有権を移転し、保管振替機関は原資産の記録を保持する。

| 資産クラス | 保管振替 | 決済 |
|---|---|---|
| 上場株式／社債／J-REIT | [[securities/japan-securities-depository-center|JASDEC]] | T+2 （株式）、T+1 （大半の JGB） |
| JGB | BoJ-NET（電子的ブックエントリー） | T+1 |
| ETF / J-REIT | JASDEC | T+2 |
| セキュリティトークン | [[securities/progmat-tokenized-securities-infrastructure|Progmat]]／プライベートブロックチェーン | プラットフォーム次第で T+0 ／ T+1 |
| ファンド（投資信託） | 信託銀行カストディ | ファンド種類次第で T+N |
| 投資信託 DVP | [[banking/jasdec-settlement-operations]] | 通常 T+2 |

統一された取引場／清算／決済の図については [[securities/japan-market-infrastructure-map]] を参照。

### 5. 規制と自主規制

規制は、市場行為、紛争解決、システミックリスクの監視を統括する。

| レイヤー | 機関 | 機能 |
|---|---|---|
| 法令 | FIEA（金融商品取引法） | 証券、デリバティブ、仲介業者、開示、市場行為を規律する。 |
| 監督 | 金融庁（FSA、金融庁） | FIEA 登録業者、JSCC、JASDEC、JPX-R を監督する。 |
| 取引所規制 | JPX-R（日本取引所自主規制法人） | 上場審査、市場監視、懲戒処分。 |
| 自主規制（証券） | 日本証券業協会（JSDA） | 販売勧誘の行為規範、店頭気配システム、勧誘ルール。 |
| 証券投資者保護 | 投資者保護基金（JIPF） | ディーラー破綻シナリオにおける顧客資産保護。 |
| AML / CFT | 国家公安委員会・警察庁傘下の FIU（JAFIC） | 疑わしい取引の届出。 |
| 法定監査 | CPAAOB | 監査人の監督。 |
| 税（NISA） | 国税庁＋財務省 | NISA の枠組み。[[securities/nisa-2024-flow]] を参照。 |

## 市場参加者

| カテゴリー | 例 |
|---|---|
| 発行体 | 上場企業（東証 Prime ~1,600, Standard ~1,500, Growth ~600）、JGB 発行体（財務省）、J-REIT スポンサー、社債発行体、ABS オリジネーター。 |
| 引受会社 | [[securities-firms/nomura-hd|Nomura]], [[securities-firms/daiwa-sg|Daiwa]], [[securities-firms/mufg-mums|MUMSS]], [[securities-firms/smbc-nikko|SMBC Nikko]], [[megabanks/mizuho-bank|Mizuho Securities]], 外資系 IB。 |
| 証券会社（リテール） | [[megabanks/sbi-hd|SBI Securities]], [[payment-firms/rakuten-fg|Rakuten Securities]], [[securities-firms/monex-group|Monex]], 松井証券, [[securities-firms/mufg-esmart-securities|MUFG eSmart]], [[securities-firms/paypay-securities|PayPay Securities]], GMO Click, DMM。[[securities/japan-online-brokerage-competition]] を参照。 |
| 資産運用会社 | [[asset-managers/asset-management-one|Asset Management One]]（みずほ）、[[asset-managers/mufg-asset-management|MUFG Asset Management]]、野村アセットマネジメント、日興アセットマネジメント、大和アセットマネジメント。[[securities/japan-asset-manager-landscape-matrix]] を参照。 |
| 信託銀行（カストディ） | [[banking/japan-master-trust-and-custody-bank-landscape|Master Trust Bank of Japan, Japan Trustee Services Bank, etc.]] |
| 機関投資家 | GPIF、生命保険会社、損害保険会社、日本銀行（JGB 保有）、外国機関投資家口座。 |
| 外国証券会社 | JPモルガン、ゴールドマン・サックス、シティ、モルガン・スタンレー、ドイツ銀行、BNP パリバ、HSBC、UBS、バークレイズ。 |
| マーケットメイカー／リクイディティ・プロバイダー | 国内＋外国のクオンツ／ HFT 業者。[[securities/japan-market-maker-and-liquidity-provider-landscape]] を参照。 |
| プライムブローカー | [[securities/japan-prime-brokerage-and-institutional-financing]]。 |
| 自主規制機関 | JSDA、JPX-R。 |
| 中央銀行 | 日本銀行（BoJ）—— JGB 保有者、金融政策の執行者、決済システムの運営者。 |

## クロスボーダーのリンケージ

| リンケージ | メカニズム |
|---|---|
| 外国人株式保有 | 外国人口座が東証 Prime の浮動株の約 30% を保有。 |
| 外国人 JGB 保有 | 外国人口座が JGB 浮動分の相当なシェアを保有。 |
| EMIR 同等性 | JSCC は EU のカウンターパーティに対し EMIR 同等。 |
| タイトル VII / CFTC 同等性 | JSCC は IRS 清算について CFTC 代替コンプライアンス／同等性の要素を有する。 |
| ICSD リンケージ | 外国銀行が ICSD として運営し、クロスボーダー決済を担う。[[foreign-financial-institutions/clearstream-banking-japan]] を参照。 |
| 東証上場 ETF のクロスリスティング | クロスリスティングは限定的；大半は相互承認。 |

## 公開データソース

| ソース | 示すもの |
|---|---|
| JPX 統計 | 売買代金、時価総額、上場企業数、デリバティブ出来高。 |
| JSCC 統計 | 清算高、清算参加者数、デフォルトファンド規模。 |
| JASDEC 統計 | 保管残高、決済高。 |
| JSDA 統計 | PTS 売買高、店頭債券売買、引受リーグテーブル。 |
| BoJ 統計 | JGB 保有、短期金融市場データ、決済システムデータ。 |
| MoF 統計 | JGB 発行カレンダー、プライマリーディーラーのフロー。 |
| FSA 開示 | 監督上のコメンタリー、市場行為の検査。 |
| EDINET | 上場企業の財務諸表開示。 |
| TDnet | 上場企業の適時開示。 |

## 関連

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
- [[financial-regulators/japan-exchange-group]]
- [[financial-regulators/japan-securities-finance]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/mufg-mums]]
- [[securities-firms/smbc-nikko]]
- [[INDEX|FinWiki index]]

## 出典

- 日本取引所グループ（JPX）: 取引・市場データのサーフェス；上場規則と統計。
- 金融庁（FSA）: FIEA、監督の枠組み、上場審査規則。
- 日本銀行（BoJ）: JGB 関連統計、決済オペレーション、金融政策の資料。
- 日本証券業協会（JSDA）: PTS 統計、引受リーグテーブル、店頭債券データ、自主規制ルール。
- 日本証券クリアリング機構（JSCC）: 清算規則、清算高統計、EMIR 同等性のドキュメント。
- 証券保管振替機構（JASDEC）: 保管・決済統計。
- 財務省（MoF）: JGB 発行カレンダー、プライマリーディーラー制度のドキュメント。
- 日本取引所自主規制法人（JPX-R）: 上場審査・市場監視の資料。
