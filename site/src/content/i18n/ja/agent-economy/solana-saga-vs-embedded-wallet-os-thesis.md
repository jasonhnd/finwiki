---
source: agent-economy/solana-saga-vs-embedded-wallet-os-thesis
source_hash: 549bc94ac2867356
lang: ja
status: machine
fidelity: ok
title: "Solana SMS vs Embedded ウォレット · OS 層 vs App 層の経路争い"
translated_at: 2026-06-02T11:47:37.286Z
---

# Solana SMS vs Embedded ウォレット · OS 層 vs App 層の経路争い

## ウィキ上の位置づけ

このエントリは [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]] の下にある。ピア／対照の文脈については [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS Bedrock AgentCore · AI エージェント経済のデフォルトウォレットポジショニング]] と、より広範なシステム／規制境界については [[payments/INDEX|payments index]] と照らし合わせて読むこと。

## 主要な事実

- Embedded ウォレット経路の代表:Privy + Coinbase CDP · dapp 内 UX を提供 ^[extracted]
- SMS 経路の代表:Solana Saga + Seeker · ウォレットをシステムサービス化 ^[extracted]
- Embedded ウォレット を制約する根本原因:iOS サンドボックス + Google Play 30% 手数料 + ブラウザ push の制限 ^[extracted]
- SMS は Seed Vault + MWA + dApp Store の 3 つで上記の 3 大制約を回避 ^[extracted]
- Coinbase ウォレット は既に Android で MWA 互換(ハイブリッド経路) ^[extracted]
- Stripe Tap to Pay は SMS パラダイム寄り(NFC をシステム層に · マーチャント側) ^[extracted]

## OS 層ウォレットと embedded ウォレット の競争構造

Embedded ウォレット は秘密鍵を iCloud / Google passkey 同期に隠して UX をスムーズにするが OS プロバイダにバインドされる([[systems/erc-4337-embedded-wallet-adoption|ERC-4337 埋込ウォレット採用]] 参照)。SMS はウォレットを OS 内蔵サービス化し · 任意の dapp が system intent 経由で呼び出す。UI と署名 prompt は OS が制御 — フィッシング耐性は強いが ハードウェアプリインストールが必要だ。両経路は排他的ではない:Coinbase ウォレット は Android 上で既に「二刀流」 — embedded ウォレット として dapp に統合される一方で MWA も実装して Saga / Seeker と相互運用できる。中長期的には:**OS 層はより深い moat**(システムベンダーの決定権)· **App 層はより広い reach**(任意のスマホで利用可能)。Samsung / Xiaomi / Google が Seed Vault 系のネイティブ keystore を本当に統合すれば、embedded ウォレットベンダーは Android のロングテールで互換性を保つために MWA をサポートせざるを得ない。

## 起源と進化

2018-2022 初期のウォレットはすべて app 内方式(MetaMask / Phantom)だった。2021-2023 embedded ウォレット が台頭(Magic Link / Privy / Web3Auth)· オンボーディングの痛点を解決したが依然として app 層だった。2022 Solana が SMS コンセプトを提唱し · OS 層に賭けた。2023 Saga がローンチされ 基本的な実現可能性を検証。2024 Seeker を公表し · SMS パラダイムがコミュニティから支持を得たことを示した。2025 Stripe が Privy + Bridge を買収し · embedded ウォレット と stablecoin マーチャントの閉ループを構築([[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5層 Trojan horse]]);同期して Solana Mobile が Samsung / Xiaomi に Seed Vault 統合を働きかけた。2026-05 AWS AgentCore がデフォルトで Privy + Coinbase CDP を選択 — これは AI agent シナリオにおける embedded 経路の重要な勝利である — ただし SMS はコンシューマ側モバイル決済では依然として独立した戦場(汎用決済通貨としての USDC は [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]] 参照)。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/solana-saga-seeker-mobile-stack-overview|Solana SMS 総覧]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded ウォレット]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|Embedded ウォレット による CEX 中抜き]]
<!-- /wiki-links:managed -->

## 出典

- Solana Mobile 公式ドキュメント（Seed Vault / MWA / dApp Store · SMS 経路）— https://docs.solanamobile.com/
- Privy docs（embedded ウォレット経路の代表）— https://docs.privy.io/
- Coinbase Developer Platform（CDP ウォレット · Android MWA ハイブリッド）— https://docs.cdp.coinbase.com/
- Privy「Privy and Stripe: Bringing crypto to everyone」（Stripe 買収 · embedded × stablecoin 閉ループ）— https://privy.io/blog/announcing-our-acquisition-by-stripe
