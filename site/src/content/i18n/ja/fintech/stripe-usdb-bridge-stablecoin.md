---
source: fintech/stripe-usdb-bridge-stablecoin
source_hash: ae5aefe234acc514
lang: ja
status: machine
fidelity: ok
title: "Stripe USDB · Bridge 買収後の決済会社ステーブルコイン · Tempo L1 + Agent 決済キャリア"
translated_at: 2026-06-02T14:01:20.935Z
---

# Stripe USDB · Bridge 買収後の決済会社ステーブルコイン · Tempo L1 + Agent 決済キャリア

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] 配下に置く。決済会社ブランド型ステーブルコイン3者の文脈では [[fintech/circle-usdc-stablecoin|Circle USDC]] と [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]、[[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5 層 Trojan Horse]] はStripeの垂直スタック内におけるUSDBのL3 ポジションとして併読する。

> [!info] 要約
> Stripe は 2024-10 に ~ **$1.1B** で Bridge（USDB 発行体）を買収、2025-Q2 より USDB を Stripe Connect / Checkout のバックエンドへ統合、2026-Q1 に [[agent-economy/privy-embedded-wallet-overview|Privy]]（2025-06 のもう 1 件 $1.1B 買収）とのウォレットスタック統合を完了した。USDB 流通量 ~ **$800M+**（2026-Q2）で、主要シーンは Stripe 5M+ マーチャントのクロスボーダー決済および [[agent-economy/x402-http-payment-overview|x402]] / [[agent-economy/ap2-overview|AP2]] エージェント決済。Tempo L1（Stripe + Paradigm 共同運営）は USDB の「メイン戦場チェーン」で、~ 5 秒決済 + ~0 fee による SWIFT 代替を目標とする。USDB は [[fintech/embedded-wallet-fintech-disintermediation-overview|組込ウォレットによるリバース脱仲介化]] 戦略の L3 キャリア —— USDC と「オープンホワイトサークル vs 垂直スタッククローズドホワイトサークル」の対比を形成する。

## 主要事実

- USDB 流通 **$800M+**（2026-Q2）· メインチェーン Ethereum + Base + 予定 Tempo L1 ^[extracted]
- 発行体：Bridge Inc.（Stripe 完全子会社、2024-10 買収、~$1.1B 現金 + 株式）^[extracted]
- 準備金：100% 短期国債 + 翌日リポ · 一部は [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] を通じて保有し 利回り を取得 ^[extracted]
- 月次 アテステーション：BPM LLP（USDC とは異なる監査法人）^[extracted]
- Stripe の戦略買収 2 件 2024-2025：Bridge $1.1B + Privy $1.1B = **$2.2B 戦略的垂直統合** ^[extracted]
- Tempo L1：Stripe + Paradigm 主導、2025-09 公開、2026-Q1 テストネット、目標は EVM互換 + サブ秒 + USDB native ^[extracted]
- USDB クロスボーダーユースケース：Stripe マーチャント収納 → USDB 自動ポジション → 5 秒で対象国へ（vs SWIFT 3 日 + $25 fee）^[extracted]
- エージェント決済：USDB は x402 / AP2 で推奨される清算資産、Stripe エージェントツールキット にデフォルト統合 ^[extracted]

## 仕組み / 作動方法

USDB のコア差別化 = **公開 DeFi 流動性は追求せず（USDC の強み）、リテール消費者ブランドも追求せず（PYUSD/RLUSD 経路）、Stripe 5M+ マーチャントバックエンド向けの「自動ステーブルコイン」に専念 —— マーチャントは自分がステーブルコインを受け取っていることを意識する必要がない**。これは [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5 層 collapse]] アーキテクチャの L3 ポジションを製品化したもの：L5 Checkout（既存メインベース）→ L4 Privy（組込ウォレット）→ **L3 USDB（オンチェーン USD キャリア）** → L2 Tempo（専用チェーン）→ L1 AP2/x402（エージェントプロトコル）。

USDB と [[fintech/circle-usdc-stablecoin|USDC]] の根本的対比：**USDC は「オープンホワイトサークル」—— あらゆるウォレット、あらゆるチェーン、あらゆる 発行体 が統合可能で、Circle は CCTP を通じて バーン・アンド・ミント の中立ブリッジを提供する；USDB は「クローズドホワイトサークル」—— Stripe スタック内でのみ流通し、Stripe が 発行 + チェーン + ウォレット + チェックアウト のフルスタックを統制する**。この差異により、USDB は Stripe マーチャントシーンで「勝者総取り」となるが、クロススタックシーン（非 Stripe マーチャント）ではほぼ浸透がない。経済モデル上、Stripe は準備金 利回り の 100% を取り込む（vs Circle × Coinbase の 50-50、vs Paxos × PayPal で PayPal に 80-90% を渡す）—— Stripe が配信インセンティブを必要としないのは、すべての配信チャネルが自営だから（[[fintech/protocol-hedge-strategy-stripe-pattern|Stripe プロトコル対冲戦法]]）。

エージェント決済サイド：USDB は [[agent-economy/x402-http-payment-overview|x402]] HTTPネイティブ 決済プロトコルで推奨される 清算資産、Stripe エージェントツールキット（2025-09 公開）はデフォルトで USDB + Privy 経由でコールあたりマイクロペイメントを完了する。これは USDB を「マーチャント決済」から「エージェント経済の清算資産」へ拡張し、エージェントシーンでの USDC のネイティブ地位（[[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]]）と正面競合する。

## 起源と変遷

2022 Bridge創業（Coinbase / Square 出身の Sean Yu / Zach Abrams。目標は「ステーブルコインで企業クロスボーダー決済を簡素化」）。2023 BridgeがSequoia主導の資金調達を完了し、Bridge Orchestration API（クロスチェーン・ステーブルコイン変換）を投入。**2024-10 Stripeが約$1.1Bの現金 + 株式でBridgeを買収**。これは当時の暗号領域で最大級のM&Aであり、Stripeは「ステーブルコインは決済の未来」と公に述べた。2024-Q4 Bridge USDB流通量は$200Mから2025-Q4 $800Mへ拡大（Stripe統合がドライバー）。**2025-06 StripeがPrivyを約$1.1Bで買収**し、L4 ウォレット + L3 ステーブルコインのダブルデフォルトを完了。**2025-09 Tempo L1 公開**（Stripe + Paradigm、[[systems/bft-validator-economy-overview|BFT validator economy]] ベースのEVM互換PoS）、2026-Q1 テストネット、2026-Q3 メインネット予定。2026-Q1 StripeエージェントツールキットがデフォルトでUSDB + Privy + x402 を採用し、[[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa/MA agentic commerce]] とエージェント決済のデュアルトラック競争を形成。**USDBは「垂直スタック・クローズドホワイトサークル」モデルを立ち上げた**。[[fintech/circle-usdc-stablecoin|USDC]]（オープンホワイトサークル）および[[fintech/jpmorgan-jpmd-coin|JPMD]]（銀行TD）と三脚並立し、GENIUS Act §501 後の第三のコンプライアンス経路を代表する。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/circle-usdc-stablecoin|Circle USDC]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/ripple-rlusd-stablecoin|Ripple RLUSD]]
- [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5 層 Trojan Horse]]
- [[fintech/protocol-hedge-strategy-stripe-pattern|Stripe プロトコル対冲戦法]]
- [[agent-economy/privy-embedded-wallet-overview|Privy 組込ウォレット]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP 決済プロトコル]]
- [[agent-economy/ap2-overview|AP2 Agent Payments Protocol]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
<!-- /wiki-links:managed -->

## 出典

- https://stripe.com/newsroom/news/stripe-acquires-bridge — Stripe 公式買収公表（2024-10）
- https://stripe.com/use-cases/ステーブルコインs — Stripe ステーブルコイン ユースケースページ
- https://www.bridge.xyz/ — Bridge（Stripe 子会社）ホームページ
- https://tempo.xyz/ — Tempo L1 ホームページ
- https://www.paradigm.xyz/2025/09/announcing-tempo — Paradigm Tempo 公開説明
- https://stripe.com/newsroom/news/usdb — USDB 製品ページ（Stripe 統合後）
