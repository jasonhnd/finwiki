---
source: fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse
source_hash: 71950d5373e0421e
lang: ja
status: machine
fidelity: ok
title: "組込み型ウォレット · Fintech が Web3 を逆食いする Trojan Horse（Stripe 五層）"
translated_at: 2026-07-30T02:10:00+09:00
---
# 組込み型ウォレット · Fintech が Web3 を逆食いする Trojan Horse(Stripe 五層)

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の配下に位置づけられる。隣接する文脈は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]、より広いシステム境界は [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] とあわせて読む。

> [!info] 要約
> Stripe の公開情報は、決済、stablecoin オーケストレーション、組込み型ウォレット、決済特化チェーン、agent payment を組み合わせられることを示す。Stripe は 2025 年実績として、直接または platform 経由で利用する事業者が 500 万超と公表した。Bridge の買収完了は 2025 年 2 月、Privy の買収は同年 7 月、Tempo の公表は同年 9 月であり、現在 Tempo は mainnet 稼働を案内している。ただし、これは **全 Stripe 事業者が wallet、stablecoin、Tempo、AP2 / x402 を一体利用していることの証明ではない**。以下の「五層」は組み合わせ可能性を整理する分析モデルである。

## 主要事実

- Stripe は 2025 年実績として、直接または platform 経由で利用する事業者が 500 万超と公表した。これは組込み型ウォレットの導入数や導入上限を意味しない。
- Stripe は Bridge の買収を 2025 年 2 月に完了した。Privy は 2025 年 6 月に買収合意を公表し、Stripe の年次更新は同年 7 月の買収として記録している。両社を「2025 年 6 月に同時買収」した事実や、合計 22 億ドルという公表額は確認できない。
- Tempo は Stripe と Paradigm が incubate した payments-first blockchain として 2025 年 9 月に公表され、公式サイトは現在 mainnet 稼働を案内している。
- Tempo は sub-second finality と predictable low fees を設計目標として掲げるが、chain finality は cross-border payment の end-to-end settlement time と同義ではない。公式資料は「SWIFT 3 日・25 ドル」に対する「Tempo 5 秒・ほぼ無料」という普遍的比較を裏付けない。

出典注: 上記 4 点は [Stripe 2025 annual update](https://stripe.com/in/newsroom/news/stripe-2025-update)、[Bridge 買収完了](https://stripe.com/en-fr/newsroom/news/stripe-completes-bridge-acquisition)、[Privy 買収合意](https://privy.io/blog/announcing-our-acquisition-by-stripe)、[Tempo 公表](https://tempo.xyz/blog/introducing-tempo)、[Tempo official site](https://tempo.xyz/) の直接開示に基づく。これらの資料が公表していない adoption、価格、end-to-end settlement の数値は推定しない。

## 仕組み

**公開情報で確認できる機能と境界**:

| ユーザー工程 | 公開情報で確認できる機能 | 検証上の境界 |
|---|---|---|
| ログイン / onboarding | Privy は embedded wallet を提供し、Stripe Projects から wallet を provision できる | wallet 作成条件、custody、recovery、同意設計は各 app の実装による |
| 入出金 | Stripe / Bridge は fiat と stablecoin の orchestration を提供する | 対応資産、地域、fee、settlement は product と jurisdiction ごとに異なる |
| cross-border payment | Tempo は stablecoin payment 向けに sub-second finality と predictable low fees を掲げる | chain finality は off-ramp や受取人着金を含む end-to-end 所要時間ではない |
| agent payment | AP2 は payment-agnostic な open protocol で、A2A x402 extension も公表されている。Stripe は stablecoin micropayment を含む machine payment を案内する | AP2 / x402 の採用、authorization、資産、merchant acceptance、fee policy は個別実装による |
| payout / revenue distribution | programmable stablecoin settlement を組み込める | 即時・常時・無料を保証せず、compliance、liquidity、off-ramp に依存する |

→ crypto rail を backend に隠す UX は構築可能だが、ユーザーが chain を意識しないことや全工程が一社で自動化されることは、各 product の公開だけからは導けない。

**Stripe 五層 collapse アーキテクチャ**:

- **L5 アプリ / distribution**: Checkout、Connect、および Stripe を直接または platform 経由で利用する 500 万超の事業者
- **L4 wallet interface**: [[agent-economy/privy-embedded-wallet-overview|Privy]] の embedded wallet と Stripe Projects 連携
- **L3 stablecoin orchestration**: Bridge による stablecoin infrastructure。特定の「USDB」を全 stack の既定資産とする公表は確認できない
- **L2 payment chain**: Tempo。Stripe / Paradigm が incubate した独立した payments-first blockchain
- **L1 agent protocol options**: [[agent-economy/ap2-overview|AP2]] / [[agent-economy/x402-http-payment-overview|x402]]。公開仕様を組み合わせ得るが、Stripe が両 protocol を所有し、五層を一体運用するという意味ではない

この分類は product ownership や technical dependency をそのまま表す stack diagram ではなく、distribution から protocol までを確認するための分析用チェックリストである。Wallet interface は identity、authorization、recovery に近いため重要だが、Privy の利用だけで spending data や agent permission の排他的支配が成立するとは限らない。

## 起源と展開

公開記録上の節目は、Bridge 買収完了（2025 年 2 月）、Privy 買収合意公表（同年 6 月）と Stripe による買収記録（同年 7 月）、Tempo 公表（同年 9 月）である。これらは隣接機能への展開を示すが、500 万超の事業者の 5–10% が 2026–2027 年に USDC / Tempo へ切り替えるという公開予測や実績は確認できない。今後の leading indicator は、wallet provision 数、active wallet、stablecoin volume、Tempo 上の実 settlement、地域別 availability を同じ期間・定義で追うことである。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|組込み型ウォレット脱仲介化 · 概観]]
- [[agent-economy/embedded-wallet-network-effects-moat|組込み型ウォレット · 統合事業者の堀]]
- [[fintech/protocol-hedge-strategy-stripe-pattern|プロトコル・ヘッジ · Stripe パターン]]
- [[fintech/ai-payment-two-tracks|AI 決済二軌]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 加密文化の分離]]
<!-- /wiki-links:managed -->

## 出典

- [Stripe 2025 annual update（2026-02-24）](https://stripe.com/in/newsroom/news/stripe-2025-update) — 500 万超の事業者、Privy / Tempo、stablecoin と machine payment の公開状況。
- [Stripe completes Bridge acquisition（2025-02-04）](https://stripe.com/en-fr/newsroom/news/stripe-completes-bridge-acquisition) — Bridge 買収完了日。
- [Privy acquisition announcement（2025-06-11）](https://privy.io/blog/announcing-our-acquisition-by-stripe) — 買収合意時点と closing 条件。
- [Privy is live in Stripe Projects（2025-10-15）](https://privy.io/blog/privy-is-live-in-stripe-projects) — Stripe Projects からの wallet provision。
- [Introducing Tempo（2025-09-04）](https://tempo.xyz/blog/introducing-tempo) / [Tempo official site](https://tempo.xyz/) — incubator、設計目標、現在の network status。
- [Google Cloud: AP2 announcement（2025-09-16）](https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol) — payment-agnostic protocol と A2A x402 extension。
