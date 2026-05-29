---
title: Hyperlane vs LayerZero/CCIP · Permissionless vs Gated ルート対照
aliases: [hyperlane-vs-layerzero, hyperlane-vs-ccip, bridge-comparison]
domain: systems
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [systems, cross-chain, bridge, hyperlane, layerzero, ccip, comparison]
sources:
  - https://docs.hyperlane.xyz/
  - https://docs.layerzero.network/v2
  - https://docs.chain.link/ccip
status: candidate
---

# Hyperlane vs LayerZero/CCIP · Permissionless vs Gated ルート対照

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cross-chain-four-poles-overview|cross chain four poles overview]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Hyperlane は完全 permissionless · 誰でも fork + deploy 可能 ^[extracted]
- LayerZero は半 gated · チームが新規チェーンを評価 · DVN はアプリ側で選択可 ^[extracted]
- CCIP は強い gated · Chainlink DON が展開 + RMN リスク管理 ^[extracted]
- Cosmos / Solana / app-chain は Hyperlane がデフォルト(LayerZero は非 EVM チェーンでの展開が遅い) ^[extracted]

## Mechanism / How it works

**三大プロトコルの詳細対照**:

| 観点 | LayerZero | Chainlink CCIP | Hyperlane |
|---|---|---|---|
| 展開モデル | Gated(チーム評価) | Heavily gated(DON 展開) | Permissionless |
| 検証方式 | DVN(アプリ側選択可) | OCR 委員会 + RMN | Modular ISM(アプリ側自選) |
| 非 EVM サポート | 遅い · EVM を主軸 | ほぼなし | 強い · Cosmos/Solana/Move が一等市民 |
| 機関の裏付け | 強い(Stargate 等 DeFi 大手) | 最強(Chainlink) | 弱い(開発者向け) |
| セキュリティ責任 | プロトコル側が部分的に裏付け | Chainlink が全面裏付け | 完全にアプリ開発者の責任 |
| 適合シナリオ | 主流 EVM dApp | 機関の高額クロスチェーン | ロングテール / app-chain / 非 EVM |

**Tempo / Arc の選択ロジック**:新興 L1 として · LayerZero や CCIP チームの承認タイムテーブルを待つことはできない。Hyperlane の permissionless 展開により Tempo/Arc は立ち上げと同時に EVM 流動性に接続できる。ただし同時に、より多くの dApp にリーチするため LayerZero / CCIP の並行統合も行う可能性があり · 三足鼎立の構図となる。

**非 EVM 流動性の重要なボトルネック**:Cosmos / Solana / Move 等の非 EVM チェーンが EVM エコシステム(USDC / USDT の流動性は主に EVM 上)に接続する際 · LayerZero / CCIP の展開は遅く —— Hyperlane が事実上の標準となっている(金融機関シナリオでの浸透については [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC 機関対照]] と対照)。これにより Hyperlane はロングテール市場で先行優位を持つ。

## Origin & evolution

三大プロトコルは同時期(2021-2022)に立ち上がったが · その後の方向性は大きく異なる:
- LayerZero は 2021-2022 に大規模調達 + 積極的なマーケティング · 初期マインドシェアでリード
- CCIP は 2022-2023 に Chainlink が主推進 · Chainlink 既存の機関関係を利用
- Hyperlane は 2021-2022 に立ち上げ · 初期は無名 · 2023-2024 に Cosmos / Solana 市場で逆襲

2024-2026 年にかけて構図は安定:LayerZero は主流 EVM dApp を主導 · CCIP は機関の高額領域を主導 · Hyperlane はロングテール / 非 EVM / app-chain を主導。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/hyperlane-overview|Hyperlane Overview]]
- [[systems/hyperlane-ism-modular-security|Hyperlane ISM]]
- [[systems/cctp-v2-overview|CCTP V2(USDC 専用 bridge 対照)]]
<!-- /wiki-links:managed -->

## Sources

- LayerZero docs · Chainlink CCIP docs · Hyperlane docs
- Hyperlane docs — https://docs.hyperlane.xyz/
- LayerZero V2 docs — https://docs.layerzero.network/v2
- Chainlink CCIP docs — https://docs.chain.link/ccip
