---
source: fintech/institutional-stablecoin-deposit-token-thesis
source_hash: a2e5da9b41049716
lang: ja
status: machine
fidelity: ok
title: "機関決済のデジタルマネー選択"
translated_at: 2026-07-30T00:00:00+09:00
---

# 機関決済のデジタルマネー選択


## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の配下に位置づけられる。隣接する文脈は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]、より広いシステム境界は [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] とあわせて読む。

> [!info] 要約
> 機関決済では、参加者適格性、発行者債務、償還、決済ファイナリティ、制裁 / AML、DvP / PvP、流動性を同時に満たす必要がある。銀行発行の預金トークンは有力な設計だが、唯一の解ではない。JPM Coin は銀行発行の預金トークンとして機関向けに提供され、BIS Project Agorá はトークン化商業銀行預金とトークン化中央銀行準備の組合せを実証した。一方、BlackRock BUIDL の適格投資家向けオフランプに USDC が使われる例もあり、「公開チェーンのステーブルコインは機関市場に構造上入れない」とは言えない。^[source:J.P. Morgan JPM Coin; BIS Project Agorá report 2026-05-27; Circle BUIDL-USDC announcement 2024-04-11]

## 結論

機関市場と個人 / 暗号資産市場はアクセス管理と法的ラッパーが異なり得るが、同じトークンや公開チェーンが両方の業務フローに現れる場合もある。分類は利用者ラベルではなく、保有者の請求権と運用管理で行う。

**デジタル決済資産の比較**：^[source:J.P. Morgan JPM Coin; BIS Project Agorá; Circle and Securitize BUIDL announcements; BIS CPMI-IOSCO stablecoin guidance]

| 形態 | 保有者の請求権 / 発行者 | アクセス・管理 | 公開事例 | 主な境界 |
|---|---|---|---|---|
| 銀行預金トークン | 商業銀行預金に対する請求権。発行銀行のバランスシート / 信用リスク | 銀行の顧客受入れ、承認済み相手方、取引監視 | [[fintech/jpmorgan-jpmd-coin|JPM Coin]] は Base 上の預金トークンとして、支払、担保、決済の用途を案内 | 単一銀行の流動性、銀行間相互運用性、預金法上の扱いを確認 |
| トークン化商業銀行預金 + 準備 | 商業銀行預金と中央銀行準備を共通プラットフォーム上で連携 | 参加中央銀行 / 商業銀行、組込み型コンプライアンス | BIS Project Agorá プロトタイプ | 本番展開、ガバナンス、法的ファイナリティは実装ごとに確認 |
| 規制対象の決済ステーブルコイン | 発行者に対する償還請求権と準備資産の仕組み | チェーン移転が公開でも、発行 / 償還、取引場所、アプリケーションは KYC / 許可リストを持ち得る | BUIDL 保有者が持分を Circle に移転して USDC を受け取るスマートコントラクト・オフランプ | 発行者 / 準備資産リスク、法域、ウォレット適格性、決済ファイナリティ |
| ホールセール CBDC / トークン化準備 | 中央銀行の債務 | 原則として適格機関 | Project Agorá の決済レッグ | 最終利用者アクセスは限定。商業銀行マネーとの接続が必要 |
| トークン化 MMF 持分 | ファンド / 証券に対する持分で、預金やステーブルコインではない | 証券適格性、移転制限、適格投資家 | BlackRock BUIDL | NAV、償還、市場 / 流動性リスク。キャッシュレッグと区別 |

## 理由づけ

- **KYC はトークンのラベルだけで決まらない**。発行者の顧客受入れ、ウォレットスクリーニング、取引場所の規則、資産許可リスト、相手方適格性を業務フロー全体で確認する。
- **公開チェーンと無許可アクセスは同義ではない**。JPM Coin は Base 上にある一方、J.P. Morgan は審査・承認済みの相手方のみが取引すると説明する。
- **預金トークンの利点**は、既存の銀行預金枠組み、銀行バランスシート、オン / オフランプ、トレジャリー統合を一体化しやすいこと。欠点は発行者固有の流動性と相互運用性である。
- **ステーブルコインの機関利用は実在する**。BUIDL-USDC オフランプは限定された業務フローの証拠であり、すべての証券決済に USDC が適格だという意味ではない。
- **ホールセール決済は複数形**。Project Agorá は商業銀行預金と中央銀行準備を組み合わせるため、「預金トークン単独のみ」という設計ではない。
- 旧版の「1 案件 200–300 億円」「DTCC / Nasdaq / Broadridge の全案件は個人向けステーブルコインに接続しない」は、対象取引と一次資料が示されていなかったため削除した。規模比較には [[fintech/tokenized-deposit-cumulative-volume-scale|TD 累計量級]] の期間・定義を個別に検証する。

## 適用場面

- 機関向け支払 / 証券決済のキャッシュレッグを比較するとき。
- 預金トークン、ステーブルコイン、ホールセール CBDC、トークン化 MMF を同じ「デジタルドル」と一括りにしないため。
- 公開 / 非公開チェーンではなく、参加者管理と法的請求権を基準にアーキテクチャを選ぶとき。
- [[fintech/jp-stablecoin-progmat|Project Pax]] や [[banking/minna-bank-baas-model|TD/SC]] を評価するときは、構想 / 実証 / 本番、発行者、法的形態、チェーン、適格利用者を分ける。

## 出典

- [J.P. Morgan — JPM Coin](https://www.jpmorgan.com/kinexys/digital-payments/jpm-coin) / [Kinexys 2026 milestones](https://www.jpmorgan.com/payments/newsroom/kinexys-milestones-2026) — 預金トークンの請求権、アクセス管理、機関用途、Base 展開。
- [BIS — Project Agorá](https://www.bis.org/about/bisih/topics/fmis/agora.htm) / [2026 report](https://www.bis.org/publ/othp110.pdf) — トークン化中央銀行準備と商業銀行預金のプロトタイプ。
- [Circle — BUIDL holders の USDC transfer](https://www.circle.com/pressroom/circle-announces-usdc-smart-contract-for-transfers-by-blackrocks-buidl-fund-investors) — 機関ファンド業務フローにおける USDC オフランプ。
- [Securitize — BlackRock BUIDL launch](https://investors.securitize.io/news/news-details/2024/BlackRock-Launches-Its-First-Tokenized-Fund-BUIDL-on-the-Ethereum-Network-03-20-2024/default.aspx) — 適格投資家、ファンド持分構造。
- [BIS CPMI-IOSCO — Application of PFMI to stablecoin arrangements](https://www.bis.org/cpmi/publ/d215.htm) — ステーブルコインの仕組みにおけるガバナンス / 決済リスク。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーンファイナンスとクリプトの DNA 分離]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 三層構造]]
- [[fintech/retail-stablecoin-dual-bind|リテール SC 二律背反]]
- [[banking/minna-bank-baas-model|みんなの銀行 BaaS モデル]]
<!-- /wiki-links:managed -->
