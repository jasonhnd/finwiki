---
title: 組込み型ウォレットによる Fintech の脱仲介化 · Privy/CDP/Magic/Web3Auth 四強構図
aliases: [embedded wallet fintech disintermediation overview, embedded wallets Privy CDP Magic Web3Auth, wallet UX disintermediation]
domain: fintech
created: 2026-05-18
last_updated: 2026-08-14
last_tended: 2026-08-14
review_by: 2026-11-12
confidence: certain
tags: [fintech, embedded-wallet, privy, coinbase-cdp, account-abstraction, disintermediation]
sources:
  - https://privy.io/blog/announcing-our-acquisition-by-stripe
  - https://docs.privy.io/wallets/overview/embedded
  - https://docs.cdp.coinbase.com/wallets/non-custodial-wallets/overview
  - https://docs.magic.link/embedded-wallets/quickstart/overview
  - https://web3auth.io/pricing.html
  - https://eips.ethereum.org/EIPS/eip-4337
  - https://eips.ethereum.org/EIPS/eip-7702
  - https://eips.ethereum.org/EIPS/eip-7715
status: active
---

# 組込み型ウォレットによる Fintech の脱仲介化 · 四強構図

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 組込み型ウォレットは、メール・SMS・OAuth 等の既存ログインとアプリ内ウォレットを結び、seed phrase や拡張機能を必須にしない導入経路を提供する。Privy、Coinbase Developer Platform、Magic、Web3Auth はこの領域の主要な実装候補だが、鍵管理、対応チェーン、account abstraction、価格、カストディ境界は製品・プランごとに異なる。Stripe による Privy 買収額は公表されていないため推計額を事実として扱わない。

## Key facts

- Privy は 2025-06-11 に Stripe による買収合意を公表し、買収額は非公表。公表時点で 75M+ accounts / 1,000+ developer teams と説明した。^[https://privy.io/blog/announcing-our-acquisition-by-stripe]
- Coinbase CDP は、email / SMS / social login を使う非カストディ型 user wallet と、API / TEE を使う system wallet を別モデルとして文書化している。^[https://docs.cdp.coinbase.com/wallets/non-custodial-wallets/overview]
- Magic は email OTP、SMS、OAuth 等の認証と 30+ blockchain 対応を文書化している。^[https://docs.magic.link/embedded-wallets/quickstart/integration]
- Web3Auth は social login、MFA、MPC/TSS、pre-generated wallet 等をプラン別機能として公開している。^[https://web3auth.io/pricing.html]

## Mechanism / How it works

**四製品の公表仕様対照**（2026-07-30確認）。下表は各社の公式ドキュメントで確認できる機能境界だけを比較し、未公開の鍵分割数、導入行数、顧客転換率は記載しない。^[https://docs.privy.io/wallets/overview/embedded; https://docs.cdp.coinbase.com/wallets/non-custodial-wallets/overview; https://docs.magic.link/embedded-wallets/quickstart/overview; https://web3auth.io/pricing.html]

| 次元 | Privy（Stripe） | Coinbase CDP | Magic | Web3Auth |
|---|---|---|---|---|
| 公表上の位置づけ | Stripe company、self-custodial user wallets と developer-controlled wallet fleet | Coinbase の non-custodial user / system wallets | Magic の embedded wallet SDK | Torus Labs / Web3Auth の Wallet Services |
| 認証 | email、SMS、OAuth、passkey 等 | email、SMS、social login；system wallet は API key | email OTP、SMS、OAuth 等 | email、SMS、wallet、passkey、social login、MFA |
| 鍵・制御境界 | user-controlled / developer-controlled を選択し、policy・MFA・m-of-n approvals を設定可能 | user wallet は non-custodial、system wallet は TEE 内で保護 | non-custodial embedded wallet と pre-generated wallet | self-custodial / MPC-TSS 等をプラン別に提供 |
| 対応範囲 | EVM / SVM に加え Bitcoin、TRON、Stellar 等を公式 docs に列挙 | EVM、Solana 等（製品別） | 30+ blockchains | blockchain-agnostic SDK、対応可否は SDK ごとに確認 |
| 導入判断 | Stripe / Privy product integration と policy engine が必要な場合 | Coinbase の wallet / onramp / paymaster / x402 stack と統合する場合 | 多様な client SDK と認証 UI を重視する場合 | 認証・MFA・MPC/TSS の構成選択を重視する場合 |

**導入時に個別検証する UX architecture checklist（draft）**:

- Onboarding: 各 product / plan の login provider、seed phrase 表示、custody、key export、recovery を確認する。Social login は TSS backend や seedless recovery を自動的に意味しない。
- Delegated execution / session: wallet 実装が session key、spend limit、expiry、revocation、再認証をどう扱うか確認する。EIP-7702 delegation と ERC-7715 permission request は別レイヤーであり、どちらも “一回認可後は popup 不要” を単独では保証しない。
- Gas: ERC-4337 paymaster、operator sponsorship、ERC-20 gas payment の対応 chain / token / quota / fallback を製品別に確認する。USDC gas payment は四製品の共通機能ではない。
- Recovery: device、cloud、server、MPC/TSS、guardian 等の採用有無と control boundary を product / plan ごとに確認する。固定の “device + cloud + server” 三分割を共通仕様としない。
- Cross-chain: bridge / messaging provider、finality、fee、failure recovery、残高表示を deployment ごとに確認する。Hyperlane / CCIP や single-balance UX は embedded-wallet product に自動付属しない。

**Standards status（2026-07-30）**: [[systems/erc-7702-overview|EIP-7702]] は Final で、EOA に delegation indicator を**永続的に**設定し、明示的な clear / redelegation まで残る。したがって “temporary upgrade” ではない。[[agent-economy/erc-7715-overview|ERC-7715]] は Draft の wallet permission-request interface であり、production-grade granular permission layer の一律採用を意味しない。[[systems/erc-4337-overview|ERC-4337]] を含め、採用状況は wallet、chain、bundler、paymaster ごとに確認する。 ^[https://eips.ethereum.org/EIPS/eip-7702] ^[https://eips.ethereum.org/EIPS/eip-7715] ^[https://eips.ethereum.org/EIPS/eip-4337]

## Origin & evolution

2018-2022 = browser extension と seed phrase が主流で、crypto-native 境界が明確。2023-2024 = embedded wallet / Wallet-as-a-Service が dApp から fintech、gaming、social へ拡大。Stripe は Bridge 買収を 2025-02-04 に完了し、Privy 買収合意は 2025-06-11 に公表された。2026-05 には Stripe / Privy と AWS が AgentCore payments を公表し、組込み型ウォレットの適用面が agent payments にも広がった。^[https://stripe.com/newsroom/news/stripe-completes-bridge-acquisition; https://privy.io/blog/announcing-our-acquisition-by-stripe; https://stripe.com/newsroom/news/aws-stripe-agentcore-privy]

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|組込み型ウォレット · Stripe 五層 Trojan horse]]
- [[agent-economy/embedded-wallet-network-effects-moat|組込み型ウォレット · 統合事業者の堀]]
- [[fintech/ai-payment-two-tracks|AI 決済二軌]]
- [[fintech/protocol-hedge-strategy-stripe-pattern|プロトコル・ヘッジ · Stripe パターン]]
<!-- /wiki-links:managed -->

## Sources

- [Privy and Stripe: acquisition announcement (2025-06-11)](https://privy.io/blog/announcing-our-acquisition-by-stripe)
- [Privy embedded wallet documentation](https://docs.privy.io/wallets/overview/embedded)
- [Coinbase CDP non-custodial wallets](https://docs.cdp.coinbase.com/wallets/non-custodial-wallets/overview)
- [Magic embedded wallet quickstart](https://docs.magic.link/embedded-wallets/quickstart/overview)
- [ERC-4337](https://eips.ethereum.org/EIPS/eip-4337)
- [EIP-7702](https://eips.ethereum.org/EIPS/eip-7702)
- [ERC-7715](https://eips.ethereum.org/EIPS/eip-7715)
- [Web3Auth pricing and published feature matrix](https://web3auth.io/pricing.html)
- [Stripe completes Bridge acquisition (2025-02-04)](https://stripe.com/newsroom/news/stripe-completes-bridge-acquisition)
