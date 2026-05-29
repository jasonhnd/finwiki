---
title: "[opinion] AP2 技術仕様 · Mandate · Payment Intent · Settlement Adapter"
source_entry: agent-economy/ap2-technical-spec.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — AP2 技術仕様 · Mandate · Payment Intent · Settlement Adapter

> 出典エントリー: `agent-economy/ap2-technical-spec.md`

## Counterpoints

Risk Score を Google 単独の AI が算出することは、**Google が暗黙的に AP2 ネットワークの fraud arbiter となる** ことを意味する — merchant は Google の判断を信頼するか?非 Google 系 merchant(特に EU)には vendor lock-in の懸念を生じさせ得る。さらに W3C VC 自体の撤回機構は status registry に依存しており、高 throughput な agent 決済シナリオでは registry の性能が潜在的ボトルネックになる(下層ウォレットは通常 [[systems/erc-4337-overview|ERC-4337]] ベース · UserOp 検証フローは [[systems/erc-4337-userop-bundler-flow|ERC-4337 bundler flow]] 参照)。

## Open questions

- mandate 撤回(ユーザーの事後キャンセル)のリアルタイム性は?Google は中央集権的な revocation registry を構築する必要があるか?
- マルチ agent 協調決済(MCP のクロス agent 呼び出しチェーン)における mandate ネスト構造のセマンティクスは?
- USDC settlement adapter と CCTP V2 の具体的ルーティング戦略は?
- merchant 側 SDK は v1.0 後にオープンソース化されるか?
