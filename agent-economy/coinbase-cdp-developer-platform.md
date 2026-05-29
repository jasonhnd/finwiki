---
title: Coinbase CDP · 開発者プラットフォーム · AI agent on-chain ウォレット基盤
aliases: [coinbase-cdp-developer-platform, Coinbase Developer Platform, CDP, embedded wallet, AgentKit]
domain: agent-economy
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: certain
tags: [agent-economy, coinbase, cdp, embedded-wallet, agentcore, agentkit, base, usdc]
sources:
  - https://docs.cdp.coinbase.com/
status: candidate
---

# Coinbase CDP · 開発者プラットフォーム · AI agent on-chain ウォレット基盤


## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[agent-economy/x402-http-payment-overview|x402 · HTTP 402 を復活させた AI agent 決済プロトコル(総覧)]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- 登録開発者 ~**150K** · 統合 dApp ~**8K** · 月次アクティブ embedded ウォレット ~**5M**(2026-Q1) ^[extracted]
- デフォルトチェーンは Base · 8 チェーン対応(Ethereum, Base, Solana, Polygon, Arbitrum, Optimism, Avalanche, BNB) ^[extracted]
- モジュール構成:CDP Wallets / Onramp / Staking / Paymaster(ERC-4337)/ Smart Wallets / **AgentKit**(2025-04) ^[extracted]
- 2025-12 AWS Bedrock AgentCore が CDP + Privy をデフォルトウォレット provider として統合 ^[extracted]
- USDC + Base にデフォルトでバインド · gas-free transfer · onramp 直結 ^[extracted]
- Privy は Stripe が 2025-Q3 に買収 → CDP の主要競合も AgentCore のデュアル provider のひとつ ^[extracted]

## Mechanism / How it works

CDP は「Web3 統合」を「数ヶ月の開発 + 自己構築インフラ」から「数分の API 統合」へと圧縮する。開発者は SDK の 1 行で自社プロダクトに onchain ウォレットを組み込める([[fintech/embedded-wallet-fintech-disintermediation-overview|MPC 埋込ウォレットモデル]] + email/social ログイン + [[systems/erc-4337-overview|ERC-4337]] スマートコントラクトウォレット + 法定通貨 onramp + [[fintech/usd-stablecoin-interchange|USDC]] gas-free transfer を一体化)。AgentKit(2025-04 リリース)はこれらの能力を AI agent フレームワーク(LangChain/AutoGen 等)向けに専用公開し、AI agent が **自律的にウォレットを作成 → USDC を送受信 → DeFi コントラクトを呼び出す** ことを可能にする。AgentCore 統合後、AWS 上の Bedrock agent はデフォルトで CDP または Privy 経由でウォレット機能を取得する — **AI agent on-chain 決済の 50%+ のトラフィックが CDP/Privy を経由すると見込まれる**。

## Origin & evolution

CDP の前身は Coinbase Cloud(B2B インフラ) + Coinbase Wallet API で · 2023-Q4 に CDP として再パッケージされた。2024-Q3 Smart Wallets ローンチ(Coinbase 自社開発の ERC-4337、Base Paymaster と深く統合)。2025-04 **AgentKit** をリリースし AI agent 向け専用サービスを提供。2025-Q3 Stripe が Privy を買収し · CDP と Privy が embedded wallet の二強として確立。**2025-12 AWS Bedrock AgentCore が CDP + Privy を正式統合** が CDP 戦略最大のマイルストーン — AI agent on-chain 経済の入口を AWS のデフォルト層に降ろした。2026-Q1 CDP × Base × USDC × Onramp の閉ループが完成し · **「ゼロスリッページ・ゼロガス」のユーザー体験を実現**した。

## Counterpoints

CDP は Base / USDC にデフォルトでバインドされており = Coinbase の支配色が強い · Privy の「マルチチェーン中立 + マルチステーブルコイン」設計哲学とは正反対。**真に中立な AI agent 開発者は Privy を好む可能性が高い**。Base の中央集権性向(Coinbase の単一 sequencer + cbBTC + Aerodrome の大株主)は · 規制対象エンタープライズ顧客における CDP のコンプライアンス審査リスクとなる。Magic / Web3Auth / Reown(旧 WalletConnect)は依然として embedded wallet のロングテール市場を占める。AWS AgentCore のデフォルトデュアル provider は · CDP が **継続的に Privy と価格 + DX で競争** する必要があることを意味し · 寝かせ収益にはならない。

## Open questions

CDP と Base の結合は 2027 に Base が sequencer を完全 decentralize した後に解けるか?AgentKit は [[systems/erc-7702-overview|ERC-7702]](EIP-7702 + [[systems/erc-7702-vs-erc-4337|7702/4337 hybrid]])普及後、EOA → Smart Account 移行をどう扱うか?CDP は単独で IPO するか、独立子会社として分離されるか?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル総覧]]
- [[agent-economy/ai-agent-payment-protocols-seven-layers|AI Agent 決済プロトコル7層]]
- [[agent-economy/ap2-overview|AP2 Protocol 総覧]]
- [[fintech/cbbtc-institutional-btc-wrapper|cbBTC ラップ BTC]]
- [[exchanges/vetoken-host-protocol-flywheel|veToken ホストプロトコルのフライホイール]]
<!-- /wiki-links:managed -->

## Sources

- Coinbase Developer Platform (CDP) docs — https://docs.cdp.coinbase.com/

