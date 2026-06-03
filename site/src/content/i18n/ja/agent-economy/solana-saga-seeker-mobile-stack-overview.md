---
source: agent-economy/solana-saga-seeker-mobile-stack-overview
source_hash: 4ba3424dbb74e0ee
lang: ja
status: machine
fidelity: ok
title: "Solana Saga / Seeker · モバイルネイティブウォレットスタック(SMS 総覧)"
translated_at: 2026-06-02T11:47:37.279Z
---

# Solana Saga / Seeker · モバイルネイティブウォレットスタック(SMS 総覧)

## ウィキ上の位置づけ

このエントリは [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]] の下に位置する。ピア / 対照の文脈については [[agent-economy/solana-saga-vs-embedded-wallet-os-thesis|Solana SMS vs Embedded Wallet · OS 層 vs App 層の経路争い]] と、より広範なシステム / 規制境界については [[payments/INDEX|payments index]] と併せて読むこと。

## 主要事実

- Saga は 2023 にローンチ · $1000 · 第一世代の実験的ハードウェア ^[extracted]
- Seeker は 2025 に量産 · $450 · 15 万台予約 ^[extracted]
- Seed Vault:Android システムレベル keystore · TEE ベース · 秘密鍵はチップから出ない ^[extracted]
- Mobile Wallet Adapter(MWA):オープンプロトコル · 任意の Android ウォレット app が実装可能 ^[extracted]
- Solana dApp Store:Google Play の in-app purchase 30% 手数料を回避 ^[extracted]
- Seeker は SKR token 経済を内蔵 · Helius RPC と深く統合 ^[extracted]
- MWA は Solana エコシステムの主流ウォレットすべてに採用済み(Phantom / Solflare / Backpack) ^[extracted]

## 仕組み / 動作原理

主流の embedded wallet(Privy / Coinbase CDP)は dapp 内部のウォレット UX を解決するが、すべての web/PWA ウォレットは依然として iOS Safari サンドボックス + Google Play / App Store 30% 手数料 + ブラウザ push の制限に縛られている。Solana はウォレットを OS 層に降ろさなければならないと判断した([[fintech/embedded-wallet-fintech-disintermediation-overview|埋込ウォレットによる fintech 中抜き]] と OS 層 vs App 層の経路分岐を形成)。**Seed Vault** は Android のシステムサービスレベルで TEE ベースの keystore を提供 · 秘密鍵は SoC から出ない · 任意の dapp が system intent 経由で署名をリクエスト · UI は OS が制御してフィッシングを防ぐ — ハードウェアウォレットをスマホに組み込むのと同じである。**MWA** はオープンプロトコルで · dapp は deep link / QR / Bluetooth でウォレットと通信し · ブラウザ内に JS を注入する必要はない。**dApp Store** は Saga/Seeker にプリインストールされ · 開発者は SOL/USDC を直接受け取れて platform fee がない(USDC settlement は [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]] 参照)。Seeker はさらに $450 という大衆価格 + Helius RPC 統合 + SKR token 経済でネイティブ体験を強化している。

## 起源と進化

2022 Solana が Saga 計画を発表 · 同年に Anatoly Yakovenko が SMS コンセプトを公表。2023-Q1 Saga ローンチ · 初期評価は二極化(crypto-native は好評 + mainstream は高すぎると不満)。2024 Saga の販売は約 2 万台にとどまったが · SMS プロトコルは Phantom / Backpack / Solflare に全面採用された。2024-Q4 Seeker 発表 · $450 + 15 万台予約(Saga の 1/10 の販売数から 5 倍の予約数への転換が重要な証明)。2025-Q2 Seeker 量産。2025-2026 Solana Labs が Samsung / Xiaomi に Seed Vault 統合を働きかけ · SMS 標準化を推進。Stripe + Bridge + Solana Pay がマーチャント側で深く統合され · Saga/Seeker がコンシューマ側で閉ループを形成した。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/solana-saga-vs-embedded-wallet-os-thesis|SMS vs Embedded Wallet · OS 層 vs App 層]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|Embedded wallet による CEX 中抜き]]
<!-- /wiki-links:managed -->

## 出典

- Solana Mobile docs
- Solana Mobile docs — https://docs.solanamobile.com/
