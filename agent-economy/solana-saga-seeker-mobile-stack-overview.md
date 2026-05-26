---
title: Solana Saga / Seeker · モバイルネイティブウォレットスタック(SMS 総覧)
aliases: [solana-saga-seeker-mobile-stack-overview, solana-saga, solana-seeker, solana-mobile-stack, SMS]
domain: agent-economy
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [agent-economy, wallet, mobile, solana, saga, seeker, seed-vault, mwa]
sources: []
status: candidate
---

# Solana Saga / Seeker · モバイルネイティブウォレットスタック(SMS 総覧)


## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[agent-economy/solana-saga-vs-embedded-wallet-os-thesis|Solana SMS vs Embedded Wallet · OS 層 vs App 層の経路争い]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- Saga は 2023 にローンチ · $1000 · 第一世代の実験的ハードウェア ^[extracted]
- Seeker は 2025 に量産 · $450 · 15 万台予約 ^[extracted]
- Seed Vault:Android システムレベル keystore · TEE ベース · 秘密鍵はチップから出ない ^[extracted]
- Mobile Wallet Adapter(MWA):オープンプロトコル · 任意の Android ウォレット app が実装可能 ^[extracted]
- Solana dApp Store:Google Play の in-app purchase 30% 手数料を回避 ^[extracted]
- Seeker は SKR token 経済を内蔵 · Helius RPC と深く統合 ^[extracted]
- MWA は Solana エコシステムの主流ウォレットすべてに採用済み(Phantom / Solflare / Backpack) ^[extracted]

## Mechanism / How it works

主流の embedded wallet(Privy / Coinbase CDP)は dapp 内部のウォレット UX を解決するが、すべての web/PWA ウォレットは依然として iOS Safari サンドボックス + Google Play / App Store 30% 手数料 + ブラウザ push の制限に縛られている。Solana はウォレットを OS 層に降ろさなければならないと判断した([[fintech/embedded-wallet-fintech-disintermediation-overview|埋込ウォレットによる fintech 中抜き]] と OS 層 vs App 層の経路分岐を形成)。**Seed Vault** は Android のシステムサービスレベルで TEE ベースの keystore を提供 · 秘密鍵は SoC から出ない · 任意の dapp が system intent 経由で署名をリクエスト · UI は OS が制御してフィッシングを防ぐ — ハードウェアウォレットをスマホに組み込むのと同じである。**MWA** はオープンプロトコルで · dapp は deep link / QR / Bluetooth でウォレットと通信し · ブラウザ内に JS を注入する必要はない。**dApp Store** は Saga/Seeker にプリインストールされ · 開発者は SOL/USDC を直接受け取れて platform fee がない(USDC settlement は [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]] 参照)。Seeker はさらに $450 という大衆価格 + Helius RPC 統合 + SKR token 経済でネイティブ体験を強化している。

## Origin & evolution

2022 Solana が Saga 計画を発表 · 同年に Anatoly Yakovenko が SMS コンセプトを公表。2023-Q1 Saga ローンチ · 初期評価は二極化(crypto-native は好評 + mainstream は高すぎると不満)。2024 Saga の販売は約 2 万台にとどまったが · SMS プロトコルは Phantom / Backpack / Solflare に全面採用された。2024-Q4 Seeker 発表 · $450 + 15 万台予約(Saga の 1/10 の販売数から 5 倍の予約数への転換が重要な証明)。2025-Q2 Seeker 量産。2025-2026 Solana Labs が Samsung / Xiaomi に Seed Vault 統合を働きかけ · SMS 標準化を推進。Stripe + Bridge + Solana Pay がマーチャント側で深く統合され · Saga/Seeker がコンシューマ側で閉ループを形成した。

## Counterpoints

- 15 万台 vs Apple 200M iPhone/年 · 実際の規模は依然として極小
- Seed Vault の標準化ロビイングが成功するかは不確実 · Samsung / Xiaomi は自社 Wallet を選好する可能性も残る
- 「OS レベル wallet」は規制の視点ではシステムコンポーネントに分類され · 新たなコンプラ課題を引き起こす可能性([[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 denylist mandate]] のノンカストディウォレット境界画定を参照)
- Stripe Tap to Pay とは直接競合せず · むしろ補完関係(Saga 消費者側 + Stripe マーチャント側)

## Open questions

- Samsung / Xiaomi / Google は 2027 までに Seed Vault 系ネイティブ keystore を統合するか?
- iOS は antitrust の圧力で同様の dApp Store を開放するか?
- Seeker 第 2 世代は $200 まで価格を下げて · 真の mainstream に到達するか?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/solana-saga-vs-embedded-wallet-os-thesis|SMS vs Embedded Wallet · OS 層 vs App 層]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|Embedded wallet による CEX 中抜き]]
<!-- /wiki-links:managed -->

## Sources

- Solana Mobile docs
