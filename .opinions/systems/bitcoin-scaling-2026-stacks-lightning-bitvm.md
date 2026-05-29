---
title: "[opinion] Bitcoin Scaling 2026 · Stacks + Lightning + BitVM + Babylon 並列スタック"
source_entry: systems/bitcoin-scaling-2026-stacks-lightning-bitvm.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — Bitcoin Scaling 2026 · Stacks + Lightning + BitVM + Babylon 並列スタック

> 出典エントリー: `systems/bitcoin-scaling-2026-stacks-lightning-bitvm.md`

## Counterpoints

- **TVL の計算基準が不統一**:L2Beat と DefiLlama は BitVM-based L2 の「BTC TVL」の計算法が異なり、一部プロジェクトは wrapped BTC とネイティブ BTC を混算、真の trust-minimized TVL は自己申告数字を大きく下回る可能性
- **Lightning 容量のボトルネック**:5 年間ほぼ横ばい、LSP モデルにより実質的に Lightning は「銀行型カストディネットワーク」に変質、初期の self-custodial ビジョンを denies
- **Stacks Signer の集中度**:sBTC の 15 Signer 集合は理論上依然として multisig 信頼前提であり、「BTC ネイティブ」を標榜する trustless 化からは距離がある
- **BitVM challenge period が実用的でない**:7-14 日の challenge window はリテールユーザーには事実上受け入れ難く、liquidity provider が事前に肩代わりする必要がある(Optimism 初期に類似)、手数料がそのため高止まり
- **Babylon の経済安全は BTC 価格に循環依存**:slashing 価値は BTC スポット価格と正相関、ベアマーケットでは PoS チェーンへの安全共有の実際価値が大幅に縮小
- **Ordinals / Runes 逆風論**:Inscription / Runes が Bitcoin L1 fee を押し上げた結果、channel open/close を必要とする Lightning 等の L2 が逆に周縁化される

## Open questions

- CTV / CSFS / OP_CAT のうち少なくとも 1 つは 2027 前にアクティベートできるか?もし不可なら、BitVM 路線は長期主流となるか?
- sBTC Signer 集合は 15 から 100+ に拡大し、[[systems/eigenlayer-overview|EigenLayer]] 風の economic security を導入できるか?
- Babylon Genesis L1 vs Babylon を pure infrastructure として位置付ける戦略選択はどう展開されるか?
- BlackRock / Fidelity 等の BTC ETF 保有者は BTC を Babylon にデプロイして staking yield を獲得するか?[[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] の Ethereum 上でのデプロイ経験と対照
- BitVM-based EVM L2 と Ethereum L2 の AI agent payment シナリオでの競争結果は?[[agent-economy/x402-cloudflare-aws-edge-integration|x402 エッジ統合]] の settlement 選定と対照
- Lightning Network は [[agent-economy/INDEX|agent economy]] でマイクロペイメント rail として復活するか、それとも ERC-4337 / x402 に完全に置換されるか?
