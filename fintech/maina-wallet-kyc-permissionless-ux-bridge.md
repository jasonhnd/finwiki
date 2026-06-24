---
title: マイナウォレットモデルは「KYC 済水準 × パーミッションレス UX」を両立させる日本特有の解
aliases: [maina-wallet-bridge, maina-wallet-bank-app-in-app]
domain: fintech
kind: knowledge
topic: maina-wallet-kyc-permissionless-ux-bridge
created: 2026-05-12
last_updated: 2026-05-18
last_tended: 2026-06-24
review_by: 2026-08-08
confidence: likely
evidence_count: 3
challenges: 0
status: confirmed
tags: [fintech, stablecoin, kyc, japan]
sources:
  - "https://www.digital.go.jp/policies/mynumber/"
  - "https://www.soumu.go.jp/kojinbango_card/"
  - "Public company disclosures on My Number Card / wallet identity initiatives."
---

# マイナウォレットモデルは「KYC 済水準 × パーミッションレス UX」を両立させる日本特有の解


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> マイナンバーカードと連携した本人確認機能を持つウォレットを銀行アプリのアプリ内アプリとして組み込めば、銀行 KYC 水準を満たしつつパーミッションレスに近い UX を実現できる。日本のリテール SC が陥る[[fintech/retail-stablecoin-dual-bind|二律背反]]を打破する有力解。証券系・暗号資産系の事業者が 2025 年内に出資済（公開）。

## Conclusion

マイナウォレットモデルの構造:

```
ユーザー → 銀行アプリ起動
       → アプリ内アプリ：マイナウォレット
       → マイナンバーカード タップで本人確認
       → 既に銀行で KYC 済 + マイナで実在確認
       → KYC 済レイヤーで送金・SC 利用 (パーミッションレスに近い UX)
```

**核心**:
- マイナンバーカードのタップ確認 = アプリ内で物理的に「実在する人物」を grounding
- 銀行 KYC + マイナ実在確認 = 機関グレードの本人確認水準
- 銀行アプリ内のアプリ内アプリ形態 → 「ウォレットを意識しない」UX 実現

## Reasoning

- 複数銀行・大手クレカに「マイナウォレット組込み」が提案されている
- マイナンバーカードは 1 億発行超 = 日本社会インフラ化済
- マイナウォレット社の株主構造に証券系（Monex）と暗号資産系（Coincheck グループ）が並ぶ → 暗号資産業務 know-how と証券業務 know-how が交差する組合せ
- 病院決済 PoC、チケット転売防止、メルカリ偽物対策など、ID + 決済の組合せ use case が存在
- 銀行・既存決済企業が単独では作れない「ID × ウォレット × KYC」レイヤーを社会インフラとして提供する位置取り（プロトコル基礎は [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 embedded wallet adoption]] と同方向だが KYC 起点）

## Applicable When

- 日本リテール SC の差別化設計（マイナ連携 等、[[payment-firms/jpyc|JPYC]] と接続を検討する場面）
- 「USDC vs 国産 SC」議論で日本の構造的優位を語るとき → マイナがある日本は KYC ベース SC を最初から組める「チャンス」
- 銀行 BaaS × ウォレット連携の構造を設計するとき、[[exchanges/jp-cex-deposit-token-stablecoin-integration|JP CEX × 預金トークン/SC 統合]] と組み合わせて KYC レイヤーを共有する設計が成り立つ
- SC 発行体として KYC レイヤーを設計するとき
- ペイペイ・スイカ等既存リテール決済との差別化軸を組むとき

## Source

- 公開: Monex グループ マイナウォレット出資（公開済）
- 公開: マイナンバーカード発行枚数 1 億超（総務省）
- 整合: [[banking/minna-bank-baas-model|みんなの銀行 BaaS]] アプリ内アプリ形態と構造同型
- 整合: [[fintech/retail-stablecoin-dual-bind|retail-stablecoin-dual-bind]] の解

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/retail-stablecoin-dual-bind|リテール SC 二律背反]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 三層構造]]
- [[banking/minna-bank-baas-model|みんなの銀行 BaaS モデル]]
<!-- /wiki-links:managed -->
