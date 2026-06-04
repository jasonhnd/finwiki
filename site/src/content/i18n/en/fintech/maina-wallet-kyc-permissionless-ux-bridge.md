---
source: fintech/maina-wallet-kyc-permissionless-ux-bridge
source_hash: 31b098766004fe7a
lang: en
status: machine
fidelity: ok
title: "The MyNa Wallet model is Japan's distinctive answer for combining \"KYC-cleared assurance × permissionless UX\""
translated_at: 2026-05-31T07:28:06.190Z
---
# The MyNa Wallet model is Japan's distinctive answer for combining "KYC-cleared assurance × permissionless UX"


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> If a wallet with identity-verification functions linked to the My Number Card is embedded as an in-app app inside a banking app, it becomes possible to satisfy bank-grade KYC while still delivering a near-permissionless UX. This is a powerful solution to break through [[fintech/retail-stablecoin-dual-bind|二律背反]], the trap that Japanese retail SC faces. Securities-affiliated and crypto-asset-affiliated operators have already invested within 2025 年 (publicly disclosed).

## Conclusion

Structure of the MyNa Wallet model:

```
User → launches banking app
       → in-app app: MyNa Wallet
       → identity verified by tapping the My Number Card
       → already KYC-cleared at the bank + physical existence verified via My Number
       → transfer funds and use SC on a KYC-cleared layer (near-permissionless UX)
```

**Core**:
- Tapping the My Number Card = physically grounding a "real existing person" inside the app
- Bank KYC + My Number existence verification = institution-grade identity assurance
- In-app app form inside the banking app → enables a UX where the wallet does not need to be consciously "noticed"

## Reasoning

- Multiple banks and major credit-card players have been approached with "MyNa Wallet integration"
- My Number Card issuance has exceeded 1 億 = already social infrastructure in Japan
- The shareholder structure of MyNa Wallet places securities-side players (Monex) alongside crypto-asset-side players (Coincheck group) → a combination where crypto-asset operating know-how and securities-operating know-how intersect
- Use cases exist around hospital payments, ticket-resale prevention, Mercari counterfeit controls, and other ID + payment combinations
- It is positioned to provide an "ID × wallet × KYC" layer as social infrastructure, something banks and legacy payment companies cannot build alone (the protocol base points in the same direction as [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 embedded wallet adoption]], but starts from KYC)

## Applicable When

- Designing differentiation for Japanese retail SC (My Number linkage, etc.; where connection with [[payment-firms/jpyc|JPYC]] is under consideration)
- Explaining Japan's structural advantage in "USDC vs domestic SC" debates → Japan, with My Number, has the "chance" to build KYC-based SC from the outset
- Designing a bank BaaS × wallet linkage structure, where a shared KYC layer can be built in combination with [[exchanges/jp-cex-deposit-token-stablecoin-integration|JP CEX × 預金トークン/SC 統合]]
- Designing the KYC layer as an SC issuer
- Building a differentiation axis versus existing retail-payment rails such as PayPay and Suica

## Source

- Public: Monex Group investment in MyNa Wallet (already disclosed)
- Public: My Number Card issuance above 1 億 (MIC)
- Consistency: [[banking/minna-bank-baas-model|みんなの銀行 BaaS]] has the same app-in-app structure
- Consistency: the solution in [[fintech/retail-stablecoin-dual-bind|retail-stablecoin-dual-bind]]

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/retail-stablecoin-dual-bind|リテール SC 二律背反]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 三層構造]]
- [[banking/minna-bank-baas-model|みんなの銀行 BaaS モデル]]
<!-- /wiki-links:managed -->
