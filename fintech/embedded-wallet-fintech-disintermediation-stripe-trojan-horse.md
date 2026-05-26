---
title: 組込み型ウォレット · Fintech が Web3 を逆食いする Trojan Horse(Stripe 五層)
aliases: [embedded wallet fintech disintermediation stripe trojan horse, Stripe five layer collapse, fintech reverse disintermediation]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [fintech, embedded-wallet, stripe, privy, bridge, tempo, trojan-horse, vertical-integration]
sources:
  - https://stripe.com/newsroom
  - https://www.bridge.xyz/
  - https://www.privy.io/
  - https://tempo.xyz/
  - https://stripe.com/use-cases/crypto
status: candidate
---

# 組込み型ウォレット · Fintech が Web3 を逆食いする Trojan Horse(Stripe 五層)


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 組込み型ウォレットは Web3 が Fintech に浸透するのではなく · その逆 —— **Fintech が crypto をバックエンドに埋め込み · 5M+ 加盟店を crypto エントリーポイントに変え · ユーザーは「crypto user になる」必要がない**。Stripe 五層 collapse(L5 Checkout → L4 Privy → L3 Bridge USDB → L2 Tempo → L1 AP2/x402)はこの逆方向脱仲介化のサンプルアーキテクチャ · Privy は L4 で橋頭堡。

## Key facts

- Stripe 5M+ 加盟店 = 組込み型ウォレットのディストリビューション上限 ^[extracted]
- Stripe 2025.06 同時に Privy(L4)+ Bridge(L3)を買収 = $2.2B の戦略支出 ^[extracted]
- Tempo(L2)は Stripe + Paradigm が主導 · 2025 ローンチ ^[extracted]
- AP2 / x402 は L1 agent 決済プロトコル · Stripe は Tempo / Bridge を通じて実装を制御 ^[inferred]
- クロスボーダー決済 USDC + Tempo = 5 秒 + ~0 fee(vs SWIFT 3 日 + $25) ^[extracted]

## Mechanism / How it works

**Fintech が Web3 を逆食いする 5 ステップ**:

| ステップ | 伝統的 fintech | 組込み型ウォレット改造後 |
|---|---|---|
| ログイン | Stripe/PayPal アカウント | 同一ログイン · バックエンドで自動 wallet |
| 入金 | 法定通貨 | 法定通貨 + USDC 無感 |
| クロスボーダー | SWIFT 3 日 + $25 fee | USDC + Tempo 5 秒 · ~0 fee |
| Agent 決済 | 非対応 | x402 + AP2 per-call USDC |
| 収益分配 | 月次決済 | リアルタイム stablecoin |

→ ユーザーは「crypto user になる」必要がない · fintech が crypto をバックエンドに埋め込み · 加盟店は基盤チェーンを気にしなくてよい。

**Stripe 五層 collapse アーキテクチャ**:

- **L5 アプリ**:Checkout · Connect · 5M+ 加盟店 · Stripe の既存本拠地
- **L4 ウォレット**:[[agent-economy/privy-embedded-wallet-overview|Privy]] · 組込み型デフォルト · L5 加盟店に crypto エントリーポイントを無感で持たせる
- **L3 stablecoin**:Bridge · USDB · L4 ウォレットの保有 + 送金キャリアを提供
- **L2 チェーン**:Tempo · L3 stablecoin の高速性 + コンプライアンスを実現
- **L1 agent プロトコル**:[[agent-economy/ap2-overview|AP2]] / [[agent-economy/x402-http-payment-overview|x402]] · agent が L2-L5 のフルスタックを自律調整

Privy は L4 で Trojan horse —— L4 はユーザーが唯一直接触れるレイヤー · L4 を制御 = user identity + spending pattern + agent permission を制御 = 80 年代の Microsoft が Windows OS を制御したことと等価。

## Origin & evolution

2010-2020 = Stripe が L5 決済 SaaS のベンチマーク。2021-2023 = crypto に試水(USDC 入金) · だが依然として L5 + 第三者ブリッジ。2025.06 = Privy + Bridge を同時買収 · 垂直統合戦略を明示。2025-2026 Tempo ローンチ · L2 も自社化 · 五層 collapse 開始。2026-2027 予想 = 5M+ 加盟店のうち 5-10% が USDC + Tempo に切り替え · これが leading indicator。

## Counterpoints

「五層 collapse は不可能」との主張:規制 / 反トラストが必ず介入する(2024 Apple ↔ Google 事例) · 単一企業が同時に L1-L5 を制御 = 分割必須。Privy の中立性低下後 · 非 Stripe 加盟店は CDP / Magic / Web3Auth に移行する可能性 · L4 は実際には二強寡占で単独ではない、これは [[agent-economy/embedded-wallet-network-effects-moat|組込み型ウォレットネットワーク効果の堀]] が描く多強寡占収束トレンドと一致する。Tempo が institutional 顧客(Visa / SC)を支えられるかは不透明 · 失敗すれば L2 は陥落。

## Open questions

Stripe 五層 collapse の実際の進捗速度は(Privy 月間アクティブ加盟店数 + Bridge stablecoin volume + Tempo TVL)?規制はいつ介入するか · どのツールを用いるか(反トラスト / SAB 121 / OCC)?Visa / Mastercard はこの垂直統合戦略を mirror するか?Apple Pay / Google Pay は組込み型ウォレットに追従するか?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|組込み型ウォレット脱仲介化 · 概観]]
- [[agent-economy/embedded-wallet-network-effects-moat|組込み型ウォレット · 統合事業者の堀]]
- [[fintech/protocol-hedge-strategy-stripe-pattern|プロトコル・ヘッジ · Stripe パターン]]
- [[fintech/ai-payment-two-tracks|AI 決済二軌]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 加密文化の分離]]
<!-- /wiki-links:managed -->

## Sources

- Stripe Privy / Bridge 買収告知(2025.06)· Tempo ローンチ告知
