---
source: agent-economy/coinbase-cdp-developer-platform
source_hash: e278ca407d0779b5
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "Coinbase CDP · 開発者プラットフォーム · AI agent on-chain ウォレット基盤"
translated_at: 2026-06-26T08:29:09.691Z
---

# Coinbase CDP · 開発者プラットフォーム · AI agent on-chain ウォレット基盤

## ウィキ上の位置づけ

このエントリは [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]] の下に位置する。ピア／対比のコンテキストについては [[agent-economy/x402-http-payment-overview|x402 · HTTP 402 を復活させた AI agent 決済プロトコル(総覧)]] と、より広範なシステム／規制境界については [[payments/INDEX|payments index]] と照らし合わせて読むこと。

## 主要事実

- 登録開発者 ~**150K** · 統合 dApp ~**8K** · 月次アクティブ embedded ウォレット ~**5M**(2026-Q1) ^[extracted]
- デフォルトチェーンは Base · 8 チェーン対応(Ethereum, Base, Solana, Polygon, Arbitrum, Optimism, Avalanche, BNB) ^[extracted]
- モジュール構成:CDP ウォレット / Onramp / Staking / Paymaster(ERC-4337)/ Smart ウォレット / **AgentKit**(2025-04) ^[extracted]
- 2025-12 AWS Bedrock AgentCore が CDP + Privy をデフォルトウォレット provider として統合 ^[extracted]
- USDC + Base にデフォルトでバインド · gas-free transfer · onramp 直結 ^[extracted]
- Privy は Stripe が 2025-Q3 に買収 → CDP の主要競合も AgentCore のデュアル provider のひとつ ^[extracted]

## 仕組み / 動作方式

CDP は「Web3 統合」を「数ヶ月の開発 + 自己構築インフラ」から「数分の API 統合」へと圧縮する。開発者は SDK の 1 行で自社プロダクトに onchain ウォレットを組み込める([[fintech/embedded-wallet-fintech-disintermediation-overview|MPC 埋込ウォレットモデル]] + email/social ログイン + [[systems/erc-4337-overview|ERC-4337]] スマートコントラクトウォレット + 法定通貨 onramp + [[fintech/usd-stablecoin-interchange|USDC]] gas-free transfer を一体化)。AgentKit(2025-04 リリース)はこれらの能力を AI agent フレームワーク(LangChain/AutoGen 等)向けに専用公開し、AI agent が **自律的にウォレットを作成 → USDC を送受信 → DeFi コントラクトを呼び出す** ことを可能にする。AgentCore 統合後、AWS 上の Bedrock agent はデフォルトで CDP または Privy 経由でウォレット機能を取得する — **AI agent on-chain 決済の 50%+ のトラフィックが CDP/Privy を経由すると見込まれる**。

## 起源と進化

CDP の前身は Coinbase Cloud(B2B インフラ) + Coinbase ウォレット API で · 2023-Q4 に CDP として再パッケージされた。2024-Q3 Smart ウォレットローンチ(Coinbase 自社開発の ERC-4337、Base Paymaster と深く統合)。2025-04 **AgentKit** をリリースし AI agent 向け専用サービスを提供。2025-Q3 Stripe が Privy を買収し · CDP と Privy が embedded ウォレット の二強として確立。**2025-12 AWS Bedrock AgentCore が CDP + Privy を正式統合** が CDP 戦略最大のマイルストーン — AI agent on-chain 経済の入口を AWS のデフォルト層に降ろした。2026-Q1 CDP × Base × USDC × Onramp の閉ループが完成し · **「ゼロスリッページ・ゼロガス」のユーザー体験を実現**した。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル総覧]]
- [[agent-economy/ai-agent-payment-protocols-seven-layers|AI Agent 決済プロトコル7層]]
- [[agent-economy/ap2-overview|AP2 Protocol 総覧]]
- [[fintech/cbbtc-institutional-btc-wrapper|cbBTC ラップ BTC]]
- [[exchanges/vetoken-host-protocol-flywheel|veToken ホストプロトコルのフライホイール]]
<!-- /wiki-links:managed -->

## 出典

- Coinbase Developer Platform (CDP) docs — https://docs.cdp.coinbase.com/
