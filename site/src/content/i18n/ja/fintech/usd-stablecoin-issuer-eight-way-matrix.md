---
source: fintech/usd-stablecoin-issuer-eight-way-matrix
source_hash: e3ea42d3c4ac57da
lang: ja
status: machine
fidelity: ok
title: "米ドル建てトークン商品比較 — USDT / USDC / PYUSD / RLUSD / USD1 / FDUSD / USDS / USDe / M / USDB"
translated_at: 2026-07-29T17:38:08Z
---

# 米ドル建てトークン商品比較 — USDT / USDC / PYUSD / RLUSD / USD1 / FDUSD / USDS / USDe / M / USDB

## Wiki内の位置付け

この項目は [[fintech/INDEX|フィンテック索引]] に属し、一括して扱われることの多い10種類の米ドル建てトークンを、それぞれの規約、透明性ページ、またはプロトコル文書が裏付ける範囲だけで比較する。発行者別ページである [[fintech/tether-business-model-short-treasury-yield|USDT]]、[[fintech/circle-usdc-stablecoin|USDC]]、[[fintech/paypal-pyusd-stablecoin|PYUSD]]、[[fintech/ripple-rlusd-stablecoin|RLUSD]]、[[fintech/world-liberty-usd1-political-stablecoin|USD1]]、[[fintech/first-digital-fdusd-hk-stablecoin|FDUSD]]、[[fintech/sky-usds-decentralized-stablecoin|USDS]]、[[fintech/m-network-m0-neutral-infrastructure|M]]、[[fintech/stripe-usdb-bridge-stablecoin|USDB]]を補完する。

> [!info] 要点
> これら10の名称は、相互に置き換え可能な10の「発行者」を意味しない。USDT、USDC、PYUSD、RLUSD、USD1、FDUSD、USDBは中央管理型の法定通貨裏付け商品である。USDSはガバナンス下の担保プロトコルを通じて発行され、USDeは暗号資産を裏付けとしてデルタヘッジを行う合成ドル、Mは承認されたMinterが検証済みのオフチェーン担保を基に発行する。市場規模を比べる前に、法的な相手方、準備資産または担保の仕組み、直接償還の境界、報告頻度を比較する必要がある。2026-07-30時点でGENIUS Actは成立済みだがまだ発効しておらず、OCCの実施規則も提案段階にある。したがって、公式な商品別の「合格・不合格」一覧は存在しない。

## 比較の境界

「ステーブルコイン」という言葉には、性質の異なる複数の主張が隠れている。法定通貨裏付けトークンは通常、適格な直接顧客に、管理主体に対する契約上の償還経路を与える。プロトコルトークンは、スマートコントラクトの規則、担保、ガバナンス、Validator、ヘッジ、または市場流動性に依存する。流通市場の保有者は、発行者が承認した発行・償還顧客と同じ権利を持つとは限らない。このページは、発行者のマーケティング文言を信用格付けに置き換えず、attestationを発行者の事業全体に対する監査としても扱わない。

## マトリクスA · 商品形態と責任主体

| 商品 | 一次資料が裏付ける商品形態 | 発行者、管理者、または管理点 |
|---|---|---|
| **[[fintech/tether-business-model-short-treasury-yield\|USDT]]** | 発行者が開示する準備資産ポートフォリオに裏付けられた法定通貨建てTether Token | Tether International, S.A. de C.V.。同社の準備資産報告書は、2025年のEl Salvadorへの移転後、同社が法定通貨建てTether Tokenの唯一の発行者になったと記載 |
| **[[fintech/circle-usdc-stablecoin\|USDC]]** | 適格なCircle Mint顧客が1対1で償還できる、法定通貨裏付けデジタルドル | Circle。規約とライセンス開示で特定される発行関連会社を通じて発行 |
| **[[fintech/paypal-pyusd-stablecoin\|PYUSD]]** | PayPalブランドを冠する決済用ステーブルコイン | Paxos Trust Company N.A.が発行者であり、PayPalはブランド商品パートナー |
| **[[fintech/ripple-rlusd-stablecoin\|RLUSD]]** | 対応台帳上の法定通貨裏付け決済トークン | Standard Custody & Trust Company, LLCが発行者 |
| **[[fintech/world-liberty-usd1-political-stablecoin\|USD1]]** | World Liberty Financialがブランドを保有する法定通貨裏付けトークン | BitGoがUSD1を発行・償還し、World Liberty Financialがブランドを所有して所定のサービスを提供 |
| **[[fintech/first-digital-fdusd-hk-stablecoin\|FDUSD]]** | 適格な米国外利用者向けの法定通貨裏付けトークン | FD121 (BVI) Limitedが発行者で、First Digital Trust Limitedが準備資産を保管 |
| **[[fintech/sky-usds-decentralized-stablecoin\|USDS]]** | プロトコル担保に裏付けられたSky Protocolのネイティブ・ステーブルコイン | 発行とパラメータは、従来型の準備資産発行者契約ではなく、Sky ProtocolのスマートコントラクトとSKYガバナンスを通じて管理 |
| **USDe** | 暗号資産、流動性の高いステーブルコイン、対応するヘッジポジションに裏付けられた合成ドル | Ethena protocol。直接発行と償還は承認された相手方に限定 |
| **[[fintech/m-network-m0-neutral-infrastructure\|M]]** | 検証済みのオフチェーン担保を基に発行されるプロトコルトークン | 承認されたMinterが発行を提案し、Validatorが担保を証明し、MinterGatewayとM0 Governanceがプロトコル上限を執行 |
| **[[fintech/stripe-usdb-bridge-stablecoin\|USDB]]** | Bridge APIを通じて提供される、BridgeのTreasury裏付けステーブルコイン | BridgeはUSDBを発行・管理すると説明している。Stripeが所有していても、商品文書上のトークン発行者がStripeになるわけではない |

出典：[Tetherの2026年Q1準備資産報告発表](https://tether.io/news/tether-posts-1-04b-q1-2026-profit-despite-highly-volatile-global-markets-reaches-all-time-highs-8-23b-reserve-buffer-and-maintains-u-s-treasury-heavy-backing/)、[Circleの透明性ページ](https://www.circle.com/transparency)、[PaxosのPYUSD透明性ページ](https://www.paxos.com/pyusd-transparency)、[RLUSD規約](https://ripple.com/legal/stablecoin/)、[World Liberty Financial FAQ](https://docs.worldlibertyfinancial.com/resources/faq)、[FDUSD規約](https://www.firstdigitallabs.com/legal/fdd-terms)、[SkyのUSDS解説](https://sky.money/blog/what-is-usds)、[Ethena文書](https://docs.ethena.fi/)、[M0発行文書](https://docs.m0.org/protocol/minting-burning)、[Bridge USDB文書](https://apidocs.bridge.xyz/platform/issuance/usdb)。

## マトリクスB · 裏付け、償還、公開検証

| 商品 | 商品が開示する裏付けまたは担保 | 直接償還の境界 | 公開検証 |
|---|---|---|---|
| USDT | Tetherが報告する準備資産ポートフォリオ。2026年Q1報告は、米国債中心で短期かつ流動性の高い保有資産を説明し、基礎となる報告書ではその他の準備資産区分も分けている | 償還にはTetherの顧客規約と適格性要件が適用される | 四半期の準備資産報告書と独立した保証意見 |
| USDC | 現金、銀行預金、短期米国債、翌日物米国債レポ。過半がCircle Reserve Fundに保有される場合がある | Circle Mintでの償還は適格な機関顧客が対象。Circleは別途、MiCAに関する償還コミットメントを表明 | 保有資産とmint/burnの週次開示、第三者による月次保証 |
| PYUSD | Paxosが、Paxos発行トークンについて報告する準備資産 | 適格なPaxos顧客はPaxos規約に基づき発行・償還でき、流通市場へのアクセスとは別 | 経営者による月次準備資産報告書と独立した月次attestation。KPMGは2025-02-28以降の報告書を発行 |
| RLUSD | 現金と流動性の高い短期資産から成る分別準備資産。規約は、短期米国財務省短期証券、翌日物米国債レポ、政府系マネー・マーケット・ファンド、預金を認める | 直接購入と償還には、顧客契約が適用されるRippleとの顧客関係が必要 | 月次準備資産報告書と独立CPAのattestation |
| USD1 | BitGoが保有または維持する現金、短期米国債、政府系マネー・マーケット・ファンド、預金、その他認められた現金同等物 | 適格なBitGo顧客は直接償還でき、その他の保有者は対応する仲介業者または流通市場を利用 | 月次準備資産開示と、経営者主張に対する独立した検査 |
| FDUSD | USDおよびUSD建て資産。現在の透明性開示は現金、銀行預金、Treasury bill、リバースレポを特定 | 直接発行と償還には適格なFD121口座が必要で、規約は米国人を除外 | 月次準備資産報告書と独立したattestation |
| USDS | 多様化され、超過担保価値を持つプロトコル担保。USDS自体にはSky Savings Rateが付かない | 銀行または信託会社との償還契約上の請求権ではなく、プロトコルの交換・担保メカニズム | オンチェーンの担保・ガバナンスデータ。sUSDSは価値が増加する別トークン |
| USDe | デルタ中立性の維持を意図した、暗号資産・流動性の高いステーブルコインとデリバティブのショートポジションの組み合わせ | 直接発行と償還は、KYC/KYB済みの承認されたマーケットメイク相手方が対象。その他は市場で取得または処分 | オンチェーン裏付けデータとEthenaの開示。ヘッジと取引所外カストディには、法定通貨準備資産とは異なるリスクがある |
| M | SPVなどの仕組みを通じて保有される適格な実世界資産を一般的な対象とするオフチェーン担保。その価値はオンチェーンで報告・検証される | 発行と償却はMinterGatewayの規則に従い、単一の準備資産発行者に対するリテール償還ではない | Validatorが署名する担保更新と、オンチェーンの債務・発行・償却状態 |
| USDB | 現行のUSDBページは、設定済みのclosed-loop stablecoinとして説明し、Bridgeが準備資産、流動性、complianceを管理するとしているが、USDB固有の準備資産配分は記載していない | 商品はclosed-loop ecosystem内の資金移動向けであり、このページはopen-loopの公開償還権を立証しない | 引用したUSDBページは、公開されたUSDB固有のリアルタイム供給量・準備資産endpointやattestation reportを立証しない。Bridgeの別の汎用reportingページは、API keyが必要なxUSD endpoint、顧客向け月次報告、追加料金の対象となるBridge-issued stablecoinの四半期attestationを説明する |

出典：[Tetherの2026年Q1開示](https://tether.io/news/tether-posts-1-04b-q1-2026-profit-despite-highly-volatile-global-markets-reaches-all-time-highs-8-23b-reserve-buffer-and-maintains-u-s-treasury-heavy-backing/)、[Circleの透明性ページ](https://www.circle.com/transparency)、[PaxosのPYUSD透明性ページ](https://www.paxos.com/pyusd-transparency)、[RLUSD透明性ページ](https://ripple.com/solutions/stablecoin/transparency/)、[BitGo USD1 attestations](https://www.bitgo.com/usd1/attestations/)、[FDUSD透明性ページ](https://www.firstdigitallabs.com/transparency)、[SkyのUSDS解説](https://sky.money/blog/what-is-usds)、[EthenaのUSDe概要](https://docs.ethena.fi/solution-overview/usde-overview)、[M0の発行と償却](https://docs.m0.org/protocol/minting-burning)、[Bridge USDB文書](https://apidocs.bridge.xyz/platform/issuance/usdb)、[Bridge reporting / transparency文書](https://apidocs.bridge.xyz/platform/issuance/reporting-and-transparency)。

## マトリクスC · 法的境界とアクセス境界

| 商品 | 一次資料で確認できる主な境界 | 推論してはならない事項 |
|---|---|---|
| USDT | Tether Internationalは、El Salvadorにおけるステーブルコイン発行者およびデジタル資産サービス提供者としての認可を報告 | オフショア認可は、米国の認可決済用ステーブルコインに該当するとの判断ではない |
| USDC | Circleは、商品と法域に適用されるライセンスと発行関連会社を公表 | 「多数のライセンス」は、まだ発効していない連邦制度に基づく最終承認と同じ意味ではない |
| PYUSD | 米国の国法信託銀行が発行し、発行者の規約と健全性監督に従う | PayPalブランドによって、PayPalが法的な準備資産発行者になるわけではない |
| RLUSD | NYDFS監督下の限定目的信託会社が発行 | 州信託免許は、将来の連邦実施条件がすべて既に判断済みである証拠ではない |
| USD1 | USD1規約上、BitGoが発行者であり、責任を負うBitGo法人と規制上の根拠は、現行規約とattestationから確認する必要がある | 政治的関係またはブランドだけでは、規制上の承認も不適格性も証明されない |
| FDUSD | 発行者はBVI法人であり、規約は米国人と米国人による発行・償還を除外 | First Digital Trustが香港でカストディ業務を行うことによって、FD121 (BVI) Limitedが香港認可ステーブルコイン発行者になるわけではない |
| USDS | USDSとsUSDSを分けて持つガバナンス下のプロトコル | 「分散型」であること自体は、いずれかの法律の適用除外を証明しない |
| USDe | 直接発行・償還を制限する合成ドル・プロトコル | Ethenaの商品区分は、規制当局による拘束力のある法的分類ではない |
| M | プロトコルはMinter、Validator、ガバナンス、Mトークンを分離 | プロトコルのモジュール性によって、すべてのMinterまたはフロントエンドに一括適用される単一ライセンスが生じるわけではない |
| USDB | Bridgeの文書は、APIを通じた発行、準備資産、制限付き配布を説明 | StripeによるBridge買収だけでは、特定の連邦ステーブルコイン認可が成立したとはいえない |

出典：[Tether準備資産報告書の背景](https://tether.io/wp-content/uploads/2025/10/ISAE-3000R-Opinion-Tether-International-Financial-Figure-31-10-2025-RC187322025BD0440-Fascicolo.pdf)、[Circle USDC開示](https://www.circle.com/usdc)、[PaxosのPYUSD透明性ページ](https://www.paxos.com/pyusd-transparency)、[RLUSD透明性ページ](https://ripple.com/solutions/stablecoin/transparency/)、[BitGo USD1規約](https://www.bitgo.com/usd1-terms/)、[FDUSD規約](https://www.firstdigitallabs.com/legal/fdd-terms)、[SkyのUSDS解説](https://sky.money/blog/what-is-usds)、[Ethena文書](https://docs.ethena.fi/)、[M0発行文書](https://docs.m0.org/protocol/minting-burning)、[Bridge開発者契約](https://www.bridge.xyz/legal/developer-agreement)。

## GENIUS Act：現在の法的チェックポイント

GENIUS Actは、2025-07-18に承認されたPublic Law 119-27である。準備資産、償還、開示、監督、認可発行者に関する要件は、主に第3条から第8条に規定される。発行者による利息支払いの制限は第**4(a)(11)条**であり、これらの商品を「§501合格」または「§501不合格」と呼ぶ根拠はない。

第20条により、同法は次のいずれか早い日に発効する。

1. 成立から18か月後、すなわち2027-01-18
2. 主要な連邦決済用ステーブルコイン規制当局が最終実施規則を発出してから120日後

2026-07-30時点で、公的記録から確認できるOCCの包括的実施パッケージとTreasury、FinCEN、OFACのパッケージは提案であり、最終的な商品承認ではない。第18条は外国の同等制度の判断と登録に関するプロセスを設けるが、すべての外国トークンを自動的に承認するものではない。第3条は、法定の募集・販売制限が適用されるまで、米国のデジタル資産サービス提供者に別途3年間の移行期間も設けている。

出典：[Public Law 119-27第3条、第4条、第18条、第20条](https://www.govinfo.gov/content/pkg/PLAW-119publ27/pdf/PLAW-119publ27.pdf)、[OCCの2026-02-25付規則案発表](https://www.occ.treas.gov/news-issuances/news-releases/2026/nr-occ-2026-9.html)、[Treasuryの2026-04-08付規則案発表](https://home.treasury.gov/news/press-releases/sb0435)。

## マトリクスD · 証拠に基づく安全な比較チェックリスト

| 質問 | 必要な証拠 | 回避できる一般的な誤り |
|---|---|---|
| 誰が償還義務を負うか | 法的な相手方を明記した現行トークン規約 | ブランド、販売業者、親会社、カストディアンを発行者として扱うこと |
| 何がトークンを裏付けるか | 日付付きの準備資産報告書またはプロトコル担保仕様 | 過去の報告書の比率を、時点を特定しないマトリクスへ転記すること |
| 誰が直接償還できるか | 適格性要件と顧客規約 | すべてのウォレット保有者に無条件の1ドル請求権があると仮定すること |
| どのような保証があるか | 報告書の名称、範囲、測定日、会計事務所 | attestationを全社財務諸表監査と同様に順位付けすること |
| 保有者利回りはトークン自体の一部か | トークン規約と別商品の文書 | USDSとsUSDS、またはUSDeとsUSDeを混同すること |
| 法的結論は最終的か | 発効済みの法律、最終規則、規制当局命令、または裁判判断 | 発行者の「ready」という主張を政府の「合格」判定に置き換えること |
| 市場規模は比較可能か | 同一時点、同一の供給量定義、ブリッジ済みまたは非稼働トークンの扱い | 現在供給量、プロトコルTVL、準備資産、ブランド別トークン残高を混在させること |

出典：[Public Law 119-27](https://www.govinfo.gov/content/pkg/PLAW-119publ27/pdf/PLAW-119publ27.pdf)、[Paxosによる経営者報告書と独立attestationの説明](https://www.paxos.com/pyusd-transparency)、[Bridgeの汎用reporting / transparency文書](https://apidocs.bridge.xyz/platform/issuance/reporting-and-transparency)。

## マトリクスの読み方

- 単一の「コンプライアンス」スコアで商品を順位付けしない。法的な相手方、準備資産、保有者適格性規則、プロトコルリスクはそれぞれ異なる変数である。
- 測定日なしに現在供給量、チェーン別シェア、APY、準備資産比率を転記しない。商品規約が同じでも、これらの値は変化し得る。
- カストディアンが発行者だと仮定しない。FDUSDとUSD1はこの区別を特に明確に示し、PYUSDもPayPalのブランドとPaxosの発行者としての役割を分けている。
- 別の貯蓄トークンが基礎ステーブルコインに利息を支払うと仮定しない。SkyはUSDS自体には利回りがなく、sUSDSは価値が増加する別トークンであると説明している。Ethenaも同様にUSDeとsUSDeを区別する。
- 米国の法的分析では、成立済みの条文と現在の規則制定段階を引用する。「GENIUS-ready」のような商品マーケティングは、規制当局が発行した認可ではない。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki索引]]
- [[fintech/INDEX|フィンテック索引]]
- [[fintech/tether-business-model-short-treasury-yield|Tether USDTのビジネスモデル]]
- [[fintech/circle-usdc-stablecoin|Circle USDC]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/ripple-rlusd-stablecoin|Ripple RLUSD]]
- [[fintech/world-liberty-usd1-political-stablecoin|WLFI USD1]]
- [[fintech/first-digital-fdusd-hk-stablecoin|First Digital FDUSD]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS]]
- [[fintech/m-network-m0-neutral-infrastructure|M^0 / M Networkの中立インフラ]]
- [[fintech/stripe-usdb-bridge-stablecoin|Bridge USDB]]
- [[fintech/stablecoin-issuer-2025-2026-market-consolidation|2025–2026年のステーブルコイン発行者統合]]
- [[fintech/genius-act-501-actual-implementation|GENIUS Actの実施状況]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|ステーブルコイン5極規制マトリクス]]
- [[fintech/three-circles-stablecoin-mra-framework|米国・EU・日本のステーブルコイン市場アクセス比較]]
<!-- /wiki-links:managed -->

## 出典

- Tether準備資産報告：https://tether.io/news/tether-posts-1-04b-q1-2026-profit-despite-highly-volatile-global-markets-reaches-all-time-highs-8-23b-reserve-buffer-and-maintains-u-s-treasury-heavy-backing/
- Circle透明性ページ：https://www.circle.com/transparency
- Paxos PYUSD透明性ページ：https://www.paxos.com/pyusd-transparency
- Ripple RLUSD透明性ページ：https://ripple.com/solutions/stablecoin/transparency/
- World Liberty Financial USD1 FAQ：https://docs.worldlibertyfinancial.com/resources/faq
- BitGo USD1 attestations：https://www.bitgo.com/usd1/attestations/
- First Digital FDUSD規約：https://www.firstdigitallabs.com/legal/fdd-terms
- First Digital FDUSD透明性ページ：https://www.firstdigitallabs.com/transparency
- Sky USDS解説：https://sky.money/blog/what-is-usds
- Ethena文書：https://docs.ethena.fi/
- M0の発行と償却：https://docs.m0.org/protocol/minting-burning
- Bridge USDB文書：https://apidocs.bridge.xyz/platform/issuance/usdb
- Public Law 119-27：https://www.govinfo.gov/content/pkg/PLAW-119publ27/pdf/PLAW-119publ27.pdf
- OCC規則案発表：https://www.occ.treas.gov/news-issuances/news-releases/2026/nr-occ-2026-9.html
