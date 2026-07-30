---
source: fintech/central-banking-function-unbundling
source_hash: f0aecec9ef460b87
lang: ja
status: machine
fidelity: ok
title: "中央銀行機能のアンバンドリング 5 層"
translated_at: 2026-07-30T00:00:00+09:00
---

# 中央銀行機能のアンバンドリング 5 層


## ウィキ上の位置づけ

このエントリは [[fintech/INDEX|fintech index]] の配下に位置づけられる。比較・対照の文脈は [[fintech/three-circles-stablecoin-mra-framework|米国・EU・日本のステーブルコイン市場アクセス比較]]、より広いシステム / 規制上の境界は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] と併せて読む。

> [!info] 要約
> 本項目の「5 層」は、通貨・決済システムを **(1) 主権的な計算単位と通貨アンカー、(2) 決済に使う債務・資産、(3) メッセージング、清算、決済のインフラ、(4) 本人確認・アクセス・コンプライアンス運用、(5) 政策・監督・法執行・技術的制御**に分けて確認する分析 taxonomy である。歴史上これらを中央銀行だけが一体提供していた、2022 年以降に 4 層が民営化された、または特定年までに置換される、という事実認定ではない。BIS が説明する二層通貨システムでは中央銀行マネー、商業銀行預金、民間サービスが役割を分担し、同じ機能に中央銀行、商業銀行、PSP、民間ネットワークが重なり得る。

## 5 機能を分析 taxonomy として使う

| # | 分析する機能 | 公開資料で確認できる制度上の役割 | 証拠境界 |
|---|---|---|---|
| 1 | **計算単位・通貨アンカー** | BIS は、中央銀行が経済の計算単位を発行し、中央銀行マネーへの信頼が通貨の一体性を支えると説明する | 民間発行の預金、電子マネー、stablecoin も主権通貨建てになり得る。建値の利用と発行主体・法的債務を混同しない |
| 2 | **決済債務・決済資産** | 中央銀行準備、商業銀行預金、現金、規制対象の電子マネーや tokenized money は、保有者の請求権と発行者が異なる | 「デジタル」「tokenized」「1:1」を同じ信用リスク、償還権、預金保険、決済ファイナリティと扱わない |
| 3 | **メッセージング・清算・決済レール** | 中央銀行・民間運営者・銀行・PSP は、RTGS、即時決済、クリアリング、カード、メッセージング、DLT など異なる区間を運営・接続し得る | フロントエンド送金、メッセージ到達、清算、最終決済を分け、接続や実験を本番採用とみなさない |
| 4 | **本人確認・アクセス・コンプライアンス運用** | 銀行や規制対象 PSP は、適用法と顧客関係に応じて onboarding、KYC / AML、取引監視、権限管理を実施する | ID 技術、wallet permission、銀行 KYC、法的な顧客管理義務は別物。protocol の技術仕様だけで規制適合を判定しない |
| 5 | **政策・監督・法執行・技術的制御** | 中央銀行、監督当局、制裁当局、法執行機関、規制対象事業者はそれぞれ異なる法的権限と義務を持つ。民間 issuer / network にも freeze、denylist、upgrade key があり得る | 民間の技術的制御を主権的な法執行権と同一視せず、権限者、法的根拠、対象、異議申立て、監査証跡を確認する |

出典: [BIS Annual Economic Report 2023, Chapter III](https://www.bis.org/publ/arpdf/ar2023e3.htm)、[BIS central banks and payments report](https://www.bis.org/publ/othp33.htm)、[Federal Reserve System の構造と機能](https://www.federalreserve.gov/aboutthefed/structure-federal-reserve-system.htm)、[IMF fintech topic](https://www.imf.org/en/Topics/fintech)、[BIS CPMI](https://www.bis.org/cpmi/index.htm)。これらは中央銀行と民間部門の役割、決済・市場インフラ、fintech の検討範囲を示すが、5 層の歴史的「束」や 4 層の民営化を認定するものではない。

## 主張を検証するための evidence checklist

| 分析上の問い | 必要な一次証拠 | 避ける推論 |
|---|---|---|
| 誰の債務か | 法令、商品条件、発行者の財務・準備資産開示 | 同じ通貨単位や chain を使うだけで同じ money とみなす |
| どこで final settlement になるか | system rulebook、中央銀行・運営者資料、ledger / account の法的位置づけ | 処理速度、block finality、メッセージ完了を法的ファイナリティと同一視する |
| 誰が infrastructure を運営・変更するか | governance 文書、validator / operator、upgrade key、incident procedure、SLA | 買収、提携、PoC だけから全工程の支配や本番統合を推定する |
| 誰が利用でき、誰が compliance を負うか | 利用規約、登録・免許、顧客適格性、KYC / AML、制裁・監視手順 | permissioned という技術ラベルだけから法令適合や監督承認を推定する |
| 時系列の変化を何が説明するか | 同一定義・対象期間の dated disclosures、意思決定資料、当事者の因果説明 | 金利、制裁、AI 公開などの同時発生だけから単一の 2022 年 trigger を作る、または 2030 年の状態を事実として書く |

出典: 上表は本項目で用いる分析手順である。制度上の役割の根拠は直前の BIS / Federal Reserve / IMF / CPMI 資料を参照し、個別商品には各運営者の一次資料を追加する。

1944 年、1971 年、2008 年、2022 年はそれぞれ重要な歴史的文脈になり得るが、本項目の引用資料だけでは「5 層が束ねられた / 分離した」という単線的な因果 timeline を立証できない。歴史主張を使う場合は、その出来事、制度、機能ごとに一次資料を追加する。

## 主体別に見た役割の重なり

| 主体 | 重なり得る機能 | 確認すべき境界 |
|---|---|---|
| 中央銀行 | 計算単位、中央銀行債務、RTGS / settlement service、金融安定・支払システム監督 | 各法域の mandate と実際の運営範囲。顧客向け KYC や民間 network の運用まで当然に担うとは限らない |
| 商業銀行 | 預金発行、決済アクセス、顧客 onboarding、KYC / AML、決済サービス | 中央銀行マネーとの接続、預金者の請求権、参加者資格、利用時間、最終決済 |
| PSP / fintech | 顧客 interface、payment initiation、routing、wallet、対象業務の KYC / monitoring | 自社が発行者か仲介者か、資金を保有するか、どの rail と settlement asset に依存するか |
| 民間 network / protocol | message transport、ledger、validator、smart contract、token control | 法的運営主体、governance、upgrade / freeze 権限、外部 settlement、規制対象事業者との責任分界 |

この表は主体の強弱や望ましい統合順序を順位付けしない。実務では、同じ主体が複数機能を担う場合も、単一機能を複数主体が共同提供する場合もある。

## 公開 product を使った検証例

| Product / provider | 公式資料で確認できる事項 | 本項目で越えない証拠境界 |
|---|---|---|
| **Coinbase / Base** | Base は Coinbase 内で育成された Ethereum L2。Coinbase の公式説明は ETH をガストークンとし、新たな Base ネットワークトークンを発行する計画はないとしている。USDC は Base 上で利用可能だが Circle 発行 | Coinbase の顧客確認や規制義務を、Base 上の全アプリケーションに対するチェーンレベル執行と同一視しない |
| **Stripe / Bridge** | Stripe は 2025-02-04 に Bridge 買収完了を公表。これは stablecoin infrastructure と Stripe の決済・加盟店レールの統合を示す。[[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|関連分析]] | 買収発表だけでは「USDB」発行、OCC 認可、またはすべての利用者への統一 KYC / 執行範囲を証明しない |
| **Circle / Arc** | Circle は USDC 発行者で、Arc を open EVM-compatible L1 として 2025 年に公表し、同年10月に public testnet を開始 | 発行者・チェーン・規制申請は別の論点。Arc の技術説明から認可状態や法定 denylist 要件を推測しない |
| **J.P. Morgan / Kinexys** | J.P. Morgan の現行公式ページは JPM Coin を、Ethereum L2 の Base 上で発行される米ドル建ての銀行預金トークンと説明し、審査済みの機関顧客向けに 24/7 settlement を提供するとしている。[[fintech/jpmorgan-jpmd-coin|JPM Coin / JPMD 関連ノート]] | この特定商品の説明から、すべての deposit token が public chain 上で発行される、同じアクセス条件を持つ、または stablecoin と同じ法的区分になるとは推定しない |

出典: [Coinbase の Base 説明](https://help.coinbase.com/en/coinbase/other-topics/other/base)、[Stripe の Bridge 買収完了発表](https://stripe.com/en-fr/newsroom/news/stripe-completes-bridge-acquisition)、[Circle の Arc 公表](https://www.circle.com/es/blog/introducing-arc-an-open-layer-1-blockchain-purpose-built-for-stablecoin-finance)、[J.P. Morgan の JPM Coin 説明](https://www.jpmorgan.com/kinexys/digital-payments/jpm-coin)。この表は公開商品面の検証マップであり、順位表や規制承認一覧ではない。

このフレームワークでの「レイヤー・カバレッジ」は市場支配、主権、認可、法的優位、投資魅力度を示す score ではない。JPM Coin のような commercial-bank deposit arrangement は、発行者債務とアクセス条件を確認し、stablecoin と同じ規制区分に自動で置かない。

## 適用手順

- 対象 product の計算単位、発行者債務、償還権を最初に記録する
- message、clearing、settlement、finality を同じ「rail」にまとめず、それぞれの運営者と rulebook を確認する
- onboarding、KYC / AML、制裁対応、wallet / key control、法執行権限を別の欄で管理する
- PoC、testnet、買収完了、commercial launch、regulatory approval を同じ maturity と扱わない
- 比較は同じ基準日・法域・利用者範囲で行い、因果や将来予測には当事者資料と追加証拠を要求する

## 関連

- [[fintech/stablecoin-chain-sovereign-currency-divide|5 極地政学対立]]
- [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC charter 裁定]]
- [[fintech/three-circles-stablecoin-mra-framework|米国・EU・日本のステーブルコイン市場アクセス比較]]

---
