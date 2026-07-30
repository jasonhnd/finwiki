---
source: fintech/franklin-templeton-stablecoin-migration
source_hash: 67f0b53190949088
lang: ja
model: manual-issue-239-provenance-repair
status: machine
fidelity: ok
title: "Franklin Templeton FOBXX (BENJI) · Stellar 単一チェーンからマルチチェーン RWA へ · 「トークン化ファンド ≠ ステーブルコイン」のパラダイム"
translated_at: 2026-07-29T17:58:52.645Z
---
# Franklin Templeton FOBXX (BENJI) · Stellar 単一チェーンからマルチチェーン RWA へ · 「トークン化ファンド ≠ ステーブルコイン」のパラダイム

## TL;DR

**Franklin OnChain U.S. Government Money Fund**（ticker FOBXX、1 share を表すオンチェーン token が **BENJI**）は 2021-04 に設定された米国登録 money market fund で、公開 blockchain を取引処理・持分記録の公式 system of record に使った先行例である。Stellar で開始し、2023-2025 に Polygon、Arbitrum、Avalanche、Ethereum、Aptos、Base、Solana、BNB Smart Chain へ順次拡張した。これは payment stablecoin ではなく、1940 Act / Rule 2a-7 の下で運営される fund share である。AUM、yield、対応 network は変動するため、以下では Franklin Templeton の 2026-05 公開値と公式 Benji deployment list を基準にする。

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|フィンテック索引]] の配下にある。別のトークン化ファンド構造として [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]、private-credit tokenization の例として [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]]、トークン化ファンドとステーブルコインが別の分類として認識されつつある理由については [[fintech/stablecoin-issuer-2025-2026-market-consolidation|ステーブルコイン発行会社 2025-2026 統合]] とあわせて読む。ここでは、同日・同手法の dataset に基づかない市場 tier や商品順位を付けない。

## 商品の基本情報

下表は [Franklin Templeton 商品ページ](https://www.franklintempleton.com/investments/options/money-market-funds/products/29386/SINGLCLASS/franklin-on-chain-u-s-government-money-fund/FOBXX)、[目論見書](https://www.franklintempleton.com/forms-literature/download-preview/9001-P)、[Benji 公式ページ](https://digitalassets.franklintempleton.com/benji/) に基づく（数値は明記した基準日、2026-07-30 確認）。

| 項目 | 内容 |
|---|---|
| 法的名称 | Franklin OnChain U.S. Government Money Fund |
| ティッカー | FOBXX |
| オンチェーン持分類の記号 | BENJI |
| ファンド種別 | 1940 Act 登録 money market fund（米国、SEC） |
| 設定 | 2021-04 |
| 純資産総額 | $813.50M（2026-05-31） |
| 経費率 | グロス 0.22%；ネット 0.20%（2025-08-01 開示） |
| 投資方針 | 少なくとも 99.5% を米国政府証券、現金、完全担保付レポに投資 |
| NAV 目標 | 一口当たり $1.00 の維持を目指すが、保証されない |
| 分配頻度 | 毎日 |
| 公式記録 | transfer agent 独自の blockchain 統合 Benji platform |
| Franklin 掲載ネットワーク | Stellar、Polygon、Arbitrum、Avalanche、Ethereum、Aptos、Base、Solana、BNB Smart Chain |

## Stellar での開始から複数ネットワーク対応へ

FOBXX の Stellar での開始日は 2021-04。Franklin と Stellar Development Foundation の [五周年リリース](https://www.franklintempleton.com/press-releases/news-room/2026/franklin-templeton-stellar-development-foundation-mark-five-years-of-benji-the-first-u.s.-registered-tokenized-money-market-fund) は、開始時の関係と、公開 blockchain を公式 system of record として利用したことを確認している。その後、Franklin の公式 timeline は 2023 以降に追加されたネットワークを記録している。公開資料はこの順序を裏付けるが、以前記載されていた gas cost、地域 market maker の需要、BUIDL の競争圧力を原因とする主張までは裏付けないため、それらの解釈は削除した。

## マルチチェーン拡張 timeline

下表は [Benji 公式 milestone timeline](https://digitalassets.franklintempleton.com/benji/) に記載された network availability date のみを収録する。

| 日付 | 追加チェーン | 公開上の状態 |
|---|---|---|
| 2021-04 | Stellar（開始） | 単一チェーン段階 |
| 2023-04 | Polygon | 最初の EVM 拡張；EVM 上の transfer-agent-on-chain を検証 |
| 2024-08 | Arbitrum、Avalanche | 機関向け提供 |
| 2024-09 | Ethereum、Aptos | 機関向け提供 |
| 2024-10 | Base | 機関向け提供 |
| 2025-02 | Solana | 機関向け提供 |
| 2025-07 | BNB Smart Chain | 機関向け提供 |

Franklin の公式 deployment list は network ごとに contract を示す。network 間の移動方法や即時交換可能性は契約条件・account eligibility に依存し、「任意の chain 間で自由に fungible」とは断定しない。

## 「トークン化ファンド対ステーブルコイン」— この商品が示す規制上の区別

FOBXX / BENJI は **payment stablecoin ではない**。下表は [FOBXX 目論見書](https://www.franklintempleton.com/forms-literature/download-preview/9001-P) と payment stablecoin の一般的な product structure を区別するための比較であり、個別 stablecoin の法的評価は発行地・発行体ごとに異なる。

| 項目 | ステーブルコイン（USDC、PYUSD、USDG） | トークン化 MMF（BENJI、BUIDL） |
|---|---|---|
| 法的分類 | 法域と構造に固有の決済手段 | 米国登録 money market fund の持分 |
| リターン | 商品条件によって異なる；payment coin は一般にファンド分配を約束しない | 毎日宣言されるファンド収益分配；金額は保証されない |
| 日々の価値 | 通常は発行会社の条件に基づき記載額面で償還 | 安定した $1.00 の一口価格を目指すが、損失の可能性は残る |
| 適格購入者 | 発行会社、取引場、法域による | ファンド資料に基づく account eligibility と移転管理 |
| 規制当局 | 発行会社と法域による | SEC 登録ファンド；その他の適用ある米国規則 |
| 用途 | 決済、settlement、取引担保 | treasury reserve 管理、RWA 担保、遊休資金の運用 |
| 米国 payment-stablecoin 法 | 法定義を満たす場合のみ適用 | money market fund として規律され、Franklin は payment stablecoin と説明していない |

商品境界は、普遍的な treasury allocation の型ではなく、現行資料から評価する必要がある。特定の BENJI / stablecoin workflow では、次を確認する。

1. 投資家と wallet がファンドおよび選択した network の適格要件を満たすか。
2. ファンドの購入 / 償還 cut-off、settlement、移転規則。
3. 指定された broker、custodian、取引場が、求める conversion pair への対応を公開しているか。
4. stablecoin 発行会社自身の償還要件と account 要件。
5. 関連法域における法的取扱い。

確認した Franklin 資料は BENJI のファンド構造と取引 channel を裏付ける。一方で BNY Mellon、State Street、Goldman Sachs、Anchorage が普遍的な同日 BENJI-to-stablecoin 変換サービスを提供することや、米国の全 stablecoin があらゆる yield 関連 arrangements を法的に禁じられていることは裏付けない。

## 収益分配の仕組み

FOBXX は目論見書に記載された portfolio から収益を積み上げる。Franklin の現行目論見書は、収益分配が毎日宣言され、追加持分へ自動再投資されるとしている。Benji ページは、新たに mint された BENJI token を通じた日々の accrual と distribution を説明している。

運用上の要点：

- 分配：現行目論見書に基づき、収益分配は毎日宣言され、自動的に再投資される。
- Wallet への影響：追加持分は再投資された分配を表す。投資家の税務上の取扱いは事情によるため、課税繰延べと推定してはならない。
- Network 実装：Franklin は network ごとの contract を公開している。ここで確認した公開資料は「全 chain への atomic push」という主張を裏付けない。

## 採用状況のスナップショット

Franklin の商品ページは、**2026-05-31 時点の純資産総額 $813.50M** を報告している。以前ここに掲載されていた四半期別 AUM、holder 数、market share の時系列は、引用された公式資料から再現できなかったため削除した。BUIDL / OUSG との相対順位は、固定した事実として引き継ぐのではなく、日付付きで手法が一貫した dataset から再計算すべきである。

## 戦略的な文脈

検証できる戦略上の事実は、単一のファンドと transfer-agent platform の下で複数 network を利用できることである。Network coverage は適格投資家の integration mismatch を減らし得るが、普遍的な提供、cross-chain fungibility、各 chain での採用を証明するものではない。戦略的な結論は、展開 contract 数から推定せず、日付付き AUM、holder、transfer data と照合すべきである。

## Benji app と web platform

[Franklin の Benji ページ](https://digitalassets.franklintempleton.com/benji/) は、shareholder が mobile app で account 情報を閲覧して取引を行え、institution が web platform を利用できるとしている。また、対応 network 上の peer-to-peer transfer と、日々の yield accrual / distribution を説明している。適格性、onboarding、network availability、移転制限には、現行の account 資料とファンド資料が適用される。確認した Franklin の公式資料は、以前の「~40K KYC-verified users」という数値を開示していないため、削除した。

## BENJI と他のトークン化 cash 商品の比較

下表は BENJI 列を [Franklin 商品ページと目論見書](https://www.franklintempleton.com/investments/options/money-market-funds/products/29386/SINGLCLASS/franklin-on-chain-u-s-government-money-fund/FOBXX) で確定し、他商品を比較するときの checklist を示す。peer の数値はそれぞれの current issuer document で同一基準日に揃える必要がある。

| 項目 | BENJI（FOBXX） | その他の private / tokenized 商品 |
|---|---|---|
| 法的形態 | 米国登録 government money market fund | private fund、security token、その他の wrapper の可能性 |
| Portfolio 方針 | ≥99.5% を政府証券、現金、完全担保付 repo に投資 | 商品固有 |
| 分配 | 現行目論見書に基づき収益を毎日宣言し、再投資 | 商品固有 |
| 経費率 | 記載された開示日時点でグロス 0.22%；ネット 0.20% | 商品固有 |
| 流動性 | 購入 / 償還にはファンドの営業日と cut-off 規則が適用 | 商品固有 |
| Network | 確認時点の Benji 公式ページに九つを掲載 | 商品固有 |
| AUM | 2026-05-31 時点で $813.50M | 比較前に同日付の資料が必要 |
| 記録管理 | Franklin 独自の blockchain 統合 system | 商品固有 |

信頼できる構造上の違いは、BENJI が公開目論見書と blockchain に基づく公式記録管理を持つ登録 money market fund であることだ。適格性、minimum、transferability は、現行のファンド / account 資料で確認する必要がある。以前の「Reg A accredited-retail share class」という記述は、引用した目論見書に裏付けられていないため削除した。

## 監視項目

- 公式商品ページの純資産総額と現行 yield。
- Benji 公式 contract ページの新しい network contract。
- 適格性、移転、償還、分配条件に関する目論見書の変更。
- 二次市場からの帰属推定ではなく、integration に関する発行会社の公開発表。
- payment stablecoin とは分けた、tokenized fund share の規制上の取扱い。

## 関連項目

- [[fintech/INDEX|フィンテック索引]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL SC 発行会社 adoption matrix]]
- [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]]
- [[fintech/ondo-finance-rusdy-adoption|Ondo Finance · OUSG / USDY / Ondo Chain]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/ripple-rlusd-stablecoin|Ripple RLUSD]]
- [[fintech/first-digital-fdusd-hk-stablecoin|First Digital FDUSD]]
- [[fintech/frax-frxusd-defi-stablecoin|Frax frxUSD]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS]]
- [[fintech/world-liberty-usd1-political-stablecoin|WLF USD1]]
- [[fintech/m-network-m0-neutral-infrastructure|M^0 中立インフラ]]
- [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]]
- [[fintech/tether-business-model-short-treasury-yield|Tether 事業モデル]]
- [[fintech/stablecoin-issuer-2025-2026-market-consolidation|ステーブルコイン発行会社 2025-2026 統合]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|世界のステーブルコイン五極 matrix]]
- [[fintech/three-circles-stablecoin-mra-framework|米国・EU・日本のステーブルコイン市場アクセス比較]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関向け deposit-token thesis]]
- [[fintech/protocol-hedge-strategy-stripe-pattern|Protocol hedge strategy · Stripe pattern]]
- [[fintech/cbbtc-institutional-btc-wrapper|cbBTC 機関向け wrapper]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融と crypto の bifurcation]]
- [[exchanges/jp-cex-deposit-token-stablecoin-integration|日本 CEX deposit-token integration]]
- [[exchanges/INDEX|取引所索引]]
- [[business/larry-fink-blackrock-digital-asset-template|Larry Fink BlackRock デジタル資産 template]]
- [[business/paolo-ardoino-tether-business-model-template|Paolo Ardoino Tether template]]

## Sources

- Franklin Templeton — FOBXX 商品ページ: https://www.franklintempleton.com/investments/options/money-market-funds/products/29386/SINGLCLASS/franklin-on-chain-u-s-government-money-fund/FOBXX
- Franklin Templeton — FOBXX 目論見書: https://www.franklintempleton.com/forms-literature/download-preview/9001-P
- Franklin Templeton Digital Assets — Benji 公式ページと deployment list: https://digitalassets.franklintempleton.com/benji/
- Franklin Templeton / Stellar Development Foundation — BENJI 五周年リリース: https://www.franklintempleton.com/press-releases/news-room/2026/franklin-templeton-stellar-development-foundation-mark-five-years-of-benji-the-first-u.s.-registered-tokenized-money-market-fund
