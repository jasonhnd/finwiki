---
source: fintech/stablecoin-issuer-2025-2026-market-consolidation
source_hash: 268048033ce6bf2b
lang: ja
model: manual-issue-239-provenance-repair
status: machine
fidelity: ok
title: "ステーブルコイン発行会社 2025-2026 — 証拠主導の市場地図"
translated_at: 2026-07-29T17:58:52.645Z
---
# ステーブルコイン発行会社 2025-2026 — 証拠主導の市場地図

## TL;DR

ステーブルコイン市場の構造は、日付付き供給量データセットで測定し、発行会社ごとの一次資料で説明する必要がある。以前のページは、日付のない時価総額順位、法的表示、準備資産の主張、地域別の物語、予測を混在させ、資料より未来の日付を持つ値も含めていた。この改訂は定性的な発行会社地図を維持する一方、未検証の 2026 時価総額、固定集中度、架空の販売会社収益分配、裏付けのない地域別「優位」主張を削除した。また、決済用ステーブルコインを、合成 / 利回り付き商品やインフラ事業者と区別する。

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|フィンテック索引]] の配下にある。[[fintech/global-stablecoin-regulatory-five-pole-matrix|五極規制マトリクス]]、[[fintech/issuer-distributor-incentive-realignment-50-50-model|発行会社 / 販売会社の経済性]]、[[fintech/m0-network-infrastructure-update-2026|M0 インフラ]] とあわせて読む。

## 商品・発行会社地図

下表は各 issuer / protocol の現行公式規約、商品ページ、透明性ページを基準にする（2026-07-30 確認）。「issuer」は文書・法域・役割ごとに記録し、ブランド、発行主体、準備資産の保有 / 管理主体、distribution service を同一法人として扱わない。流通量順位は同一時点の chain-level dataset が必要なため掲載しない。

| 商品 | 文書で確認できる issuer / operating role（scope と文書日付） | 商品形態 | 一次確認画面 |
|---|---|---|---|
| USDT | 2026-02-26 更新の Token Terms では、El Salvador 法人 Tether International, S.A. de C.V. が Tether Token を発行・償還する counterparty | 法定通貨裏付け型ステーブルコイン | [Tether Token Terms](https://tether.to/en/legal/) と [透明性ページ](https://tether.to/en/transparency/) |
| USDC / EURC | EEA 外では、2025-12-12 更新の USDC terms が Circle Internet Financial, LLC（Delaware）を発行会社と記載。EEA では Circle Internet Financial Europe SAS（France、EMI）が USDC の共同発行会社かつ EURC の発行会社 | 法定通貨裏付け型ステーブルコイン | [USDC Terms](https://www.circle.com/legal/usdc-terms)、[MiCA USDC white paper](https://www.circle.com/legal/mica-usdc-whitepaper)、[透明性ページ](https://www.circle.com/transparency) |
| PYUSD | 現行発行会社は Paxos Trust Company, N.A.。OCC 転換記録は 2025-12-12 に承認・効力発生済みで、現行商品ページは OCC 監督を記載 | 法定通貨裏付け型決済用ステーブルコイン | [Paxos PYUSD ページ](https://www.paxos.com/pyusd) と [OCC 記録](https://apps.occ.gov/CAS/home/details?FilingID=342828&FilingSubtypeID=1117&FilingTypeID=23) |
| USDG | 現行 Paxos 文書がシンガポールの発行会社として記載する、MAS 監督下の Major Payment Institution、Paxos Digital Singapore Pte. Ltd. | MAS 監督下の単一通貨ステーブルコイン | [Paxos USDG 文書](https://docs.paxos.com/guides/stablecoin/usdg) |
| RLUSD | 2024-10-03 更新の米国 user terms は Standard Custody & Trust Company, LLC（New York limited-purpose trust）を発行会社と記載。他法域では各 Ripple 子会社の規約を確認する | 法定通貨裏付け型ステーブルコイン | [RLUSD User Terms](https://ripple.com/legal/stablecoin/) と [商品文書](https://ripple.com/solutions/stablecoin/) |
| FDUSD | FD121 (BVI) Limited は 2025-08-01 発効の規約上の発行会社 / account counterparty。First Digital Trust Limited は準備資産 custodian。「First Digital Labs」はブランドであり発行法人ではない | 法定通貨裏付け型ステーブルコイン | [FD121 Account User Agreement](https://www.firstdigitallabs.com/legal/fd121-account-user-agreement) と [法的開示](https://www.firstdigitallabs.com/legal) |
| USDe / sUSDe | Ethena プロトコルのコントラクトと、記載されたカストディ / ヘッジ構造 | 合成ドル / ステーキング報酬商品 | [Ethena 文書](https://docs.ethena.fi/) |
| USDS / sUSDS | Sky プロトコル | 分散型ステーブルコイン / 貯蓄ラッパー | [Sky](https://sky.money/) |
| frxUSD / sfrxUSD | Frax プロトコル | ステーブルコイン / ステーキングラッパー | [Frax 文書](https://docs.frax.finance/frax-v3-100-cr-and-more/frax-v3-overview) |
| USD1 | 2026-03-25 更新の BitGo Additional Terms は BitGo Bank & Trust, N.A. を発行会社と記載。WLF 資料は BitGo Trust Company, Inc. および / または BitGo Technologies LLC が準備資産を保有・維持し、World Liberty Financial 事業体がブランドを所有して一定の service を提供すると記載 | 法定通貨裏付け型ステーブルコイン | [BitGo Additional Terms](https://www.bitgo.com/legal/bitgo-additional-terms/) と [WLF FAQ](https://docs.worldlibertyfinancial.com/resources/faq) |

## 分類の境界

以下の表は [GENIUS Act の条文 / 要約](https://www.congress.gov/bill/119th-congress/senate-bill/1582) と商品文書を使い、分類上の誤りを防ぐ。

| 分類 | 中核的な請求権 | このページの例 | 推定してはならないこと |
|---|---|---|---|
| 決済用ステーブルコイン | 発行会社の規約に基づき固定通貨額で償還可能 | USDC、PYUSD、USDG と同様の構造を持つ商品 | 「USD」と呼ばれる全トークンが法定義を満たすこと |
| 合成ドル | 単純な法定通貨準備資産ではなく、ヘッジ / 担保機構に安定性を依存 | USDe | 許可された決済用ステーブルコインと同じリスク・規制範囲 |
| 貯蓄 / ステーキングラッパー | 保有者がプロトコルまたは準備資産に連動する報酬を受領 | sUSDe、sUSDS、sfrxUSD | ラッパーの利回りが保証され、無リスクであること |
| トークン化ファンド | NAV と目論見書を持つ証券 / ファンド持分 | BENJI、BUIDL（別ページ） | 決済用ステーブルコインであること |
| インフラ | 第三者の発行 / オーケストレーション向け技術 | M0, 発行プラットフォーム | インフラ事業者が、それを使う全トークンの法的な発行会社であること |

## 統合を確認できる証拠とできない証拠

下表は [Tether](https://tether.to/en/transparency/)、[Circle](https://www.circle.com/transparency)、[Paxos](https://docs.paxos.com/guides/stablecoin/usdg) の一次開示と市場データセットの役割を分ける。

| 主張 | 必要な証拠 | 発行会社ページだけでは不足する理由 |
|---|---|---|
| 市場シェア | 同一時点のトークン別・チェーン別供給量。重複するブリッジ供給を除外 | 発行会社は自社商品を報告し、市場全体の分母は報告しない |
| 集中度 | 定義済みの母集団と HHI / 上位 N 社の計算 | 合成 / 利回り商品を含めるかで「ステーブルコイン」の母集団が変わる |
| 地域別シェア | 手法を伴う取引会場 / ウォレット / フローデータセット | チェーンアドレスから利用者の地域を確実には特定できない |
| 準備資産の質 | 法的な発行会社ごとの現行準備資産報告と証明 | 商品マーケティングは準備資産明細ではない |
| 流通上の優位性 | 日付付き取引 / アクティブ利用者データと、公開されている場合は提携契約 | ブランドの到達範囲は、トークン利用や収益分配を証明しない |
| 規制上のアクセス | 現行免許登録と商品範囲 | 会社の免許が、全関連会社、トークン、法域を対象にするとは限らない |

## 発行会社 / 販売会社の経済性

販売提携は経済的に重要だが、公開証拠が一律の分配率を示すことはまれである。USDG のネットワーク資料は提携先への比例的な経済的便益を説明するが、固定 50/50 分配を証明しない。PYUSD の PayPal ブランドと Paxos による発行は異なる役割を示すが、すべての内部収益配分は開示しない。したがって [[fintech/issuer-distributor-incentive-realignment-50-50-model|発行会社 / 販売会社ページ]] は、全商品に適用する既定事実ではなく、契約分析の枠組みとして使う。

## ネットワーク展開

各発行会社は、権威あるコントラクトアドレスまたは対応ネットワーク一覧を維持する。有用な現在のスナップショットでは、次が必要である。

1. 標準コントラクトを特定する。
2. ネイティブ発行とブリッジ表現を分ける。
3. スナップショットに日付を付す。
4. 規約を確認せず、すべてのチェーン供給を同じ法的な発行会社へ帰属させない。
5. 一期間のチェーン分布を恒久的な戦略主張に変えない。

USDT の Tron 上の正確な比率、PYUSD の Solana 上の比率、USDC その他の商品に関する固定チェーン数は、日付付き計算と標準コントラクトの手法が伴わなかったため削除した。

## 規制上のチェックポイント

米国の GENIUS Act は 2025-07-18 に署名され、許可発行会社、準備資産の一対一保有、開示、連邦 / 州の監督を伴う決済用ステーブルコイン制度を設けた。すべての世界的トークンを白市場と灰色市場へ自動的に分ける「§501 準備資産許可リスト」を作ったわけではない。法律の適用、発効日、施行規則は直接確認する必要がある。修正済みの実施状況は [[fintech/treasury-stablecoin-policy-2025|米国政策ページ]] を参照。

## 日付付き市場スナップショットのテンプレート

確認済み市場データセットを利用できる場合に次の表を使い、記憶から埋めない。

| 項目 | 定義 |
|---|---|
| スナップショット時刻 | UTC の日付と時刻 |
| 母集団 | 法定通貨裏付け型のみ、または合成 / ラッパーを含む |
| 供給量 | 標準の発行残高から、重複するブリッジ表現を控除 |
| 分母 | 対象商品の合計 |
| 上位 2 のシェア | `(largest + second largest) / denominator` |
| 資料 | クエリ / API / エクスポートと取得日 |
| 注意事項 | 凍結、償還のみ、ラップ済み、争いのある残高 |

## 戦略的な読み方

証拠は、持続性のある三つの分析上の問いを裏付ける。

- 発行会社は、現在有効で範囲が明確な規制・償還経路を持つか。
- 商品は、特定可能な流通チャネルと実際の活動を持つか。
- 準備資産 / 担保リスクを独立に評価できるか。

これらの問いは、静的な「勝者 / 敗者」順位より強い。時価総額、利回り、提携先一覧は、日付付きで再確認せずに持ち越すには変化が速すぎる。

## 関連項目

- [[fintech/INDEX|フィンテック索引]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/ripple-rlusd-stablecoin|Ripple RLUSD]]
- [[fintech/first-digital-fdusd-hk-stablecoin|First Digital FDUSD]]
- [[fintech/frax-frxusd-defi-stablecoin|Frax frxUSD]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS]]
- [[fintech/world-liberty-usd1-political-stablecoin|WLF USD1]]
- [[fintech/m0-network-infrastructure-update-2026|M0 インフラ]]
- [[fintech/paxos-paxg-post-binance-pivot|BUSD 後の Paxos]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|世界のステーブルコイン規制]]

## Sources

- Tether transparency: https://tether.to/en/transparency/
- Tether Token Terms (updated 2026-02-26): https://tether.to/en/legal/
- Circle transparency: https://www.circle.com/transparency
- Circle USDC Terms (updated 2025-12-12): https://www.circle.com/legal/usdc-terms
- Circle MiCA USDC white paper: https://www.circle.com/legal/mica-usdc-whitepaper
- Paxos PYUSD: https://docs.paxos.com/guides/stablecoin/pyusd
- Paxos PYUSD current issuer page: https://www.paxos.com/pyusd
- OCC Paxos conversion record (effective 2025-12-12): https://apps.occ.gov/CAS/home/details?FilingID=342828&FilingSubtypeID=1117&FilingTypeID=23
- Paxos USDG: https://docs.paxos.com/guides/stablecoin/usdg
- Ripple stablecoin: https://ripple.com/solutions/stablecoin/
- Ripple RLUSD User Terms (updated 2024-10-03): https://ripple.com/legal/stablecoin/
- First Digital Labs: https://www.firstdigitallabs.com/
- First Digital legal disclosures: https://www.firstdigitallabs.com/legal
- FD121 Account User Agreement (effective 2025-08-01): https://www.firstdigitallabs.com/legal/fd121-account-user-agreement
- Ethena docs: https://docs.ethena.fi/
- Sky: https://sky.money/
- Frax docs: https://docs.frax.finance/frax-v3-100-cr-and-more/frax-v3-overview
- USD1: https://www.worldlibertyfinancial.com/usd1
- BitGo Additional Terms (updated 2026-03-25): https://www.bitgo.com/legal/bitgo-additional-terms/
- World Liberty Financial USD1 FAQ: https://docs.worldlibertyfinancial.com/resources/faq
- Congress.gov — GENIUS Act: https://www.congress.gov/bill/119th-congress/senate-bill/1582
