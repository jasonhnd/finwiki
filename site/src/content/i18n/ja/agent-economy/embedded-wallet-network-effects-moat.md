---
source: agent-economy/embedded-wallet-network-effects-moat
source_hash: f1f459339a820e18
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "埋込ウォレットのネットワーク効果 · ウォレット本体ではなくインテグレーターの堀"
translated_at: 2026-06-26T08:28:46.037Z
---

# 埋込ウォレットのネットワーク効果 · ウォレット本体ではなくインテグレーターの堀

## ウィキ上の位置づけ

本項目は [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]] の下に位置する。ピア / 対比の文脈については [[agent-economy/privy-embedded-wallet-overview|Privy · Stripe 傘下の埋込型セルフカストディウォレット(総覧)]]、より広いシステム / 規制境界については [[payments/INDEX|payments index]] と対照して読むこと。

## 主要事実

- Privy インテグレーター 1000+ dApps:Hyperliquid · Friend.tech · Pump.fun · Story · ZkSync 等 ^[extracted]
- Coinbase CDP のユーザー基盤 = Coinbase 90M+ 登録アカウント + Base エコシステム ^[extracted]
- Privy は 2024.10 に $40M シリーズ B 完了(Ribbit / Sequoia / Paradigm) ^[extracted]
- AWS AgentCore Payments は 2025.07 GA · Privy がデフォルト · ユーザーは Magic / Web3Auth に切替可能 ^[extracted]

## 仕組み / 動作原理

**ネットワーク効果はインテグレーション層に存在 · 3層フライホイール**:

```
インテグレーター数 ↑
  ↓
クロス dApp ユーザー体験の一貫性 ↑
  ↓
新規インテグレーターのデフォルト選択肢 ↑
  ↓
インテグレーター数 ↑(ループ)
  ↑
AgentCore / AWS / 主要 SaaS ベンダーが追認(2025.07+)
  ↑
規制(GENIUS §501)フレンドリー(埋込ウォレットは USDC 残高を保有しない → 非 VASP)
```

インテグレーターが増えるほど → ユーザーがクロス dApp で ウォレット を「follow me」できる → 新インテグレーターは同じ ウォレット を選ぶ傾向が強まる → フライホイールが始動する。

**従来の決済との類比**:

| 類比 | 埋込ウォレットの対応物 |
|---|---|
| Stripe payments | バックエンド化 · インテグレーターはカード組織を理解する必要がない |
| Plaid bank linking | ユーザー認可 · バックエンド集約 |
| OAuth 2.0 | ウォレット = OAuth provider · dApp = OAuth consumer |
| Twilio SMS | 下層インフラの複雑さを抽象化 |

**Privy = "Stripe of Web3 ウォレット"** が 2024.Q4 以降 a16z / Sequoia の投資ロジックの核 · 2025-2026 に AWS AgentCore によって検証された。

**§501 規制フレンドリーの鍵となる設計**:ユーザーの USDC / USDB 残高は **直接ユーザーのオンチェーンウォレット**(Privy / CDP-derived address)に存在 · Privy / CDP 自体は **ユーザー残高を保有しない**(MPC + TEE 隔離) · 提供するのは key management / signing サービスのみ → money transmitter ではなく · custodian でもない([[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 denylist mandate]] 参照 · [[exchanges/cex-matching-engine-wallet-architecture|CEX カストディモデル]] と鮮やかな対照)。

## 起源と進化

2018-2022 = MetaMask 主導 · ユーザーが主体的にインストール。2023-2024 = Privy / Magic / CDP が b2b SaaS に切り込み · 1000+ dApps がデフォルト統合(技術基盤の普及は [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 埋込ウォレット採用]] 参照)。2025.07 = AWS AgentCore が Privy をデフォルトに選定 · 埋込ウォレットは crypto ツールから汎用決済インフラへとアップグレードした。2025-2026 Tempo / Base / Arc エコシステムが集団で埋込ウォレットを採用する見込み(自社構築ではなく) · 「業界全体のデフォルト」構図が形成される。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|埋込ウォレット中抜き · 総覧]]
- [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5層 Trojan horse]]
- [[fintech/ai-payment-two-tracks|AI 決済の二軌道]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 Denylist]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 暗号文化の分離]]
<!-- /wiki-links:managed -->

## 出典

- AWS Bedrock AgentCore Payments GA アナウンス(2025.07) · Privy $40M シリーズ B(2024.10)
- Privy docs — https://docs.privy.io/
- Coinbase Developer Platform (CDP) docs — https://docs.cdp.coinbase.com/
