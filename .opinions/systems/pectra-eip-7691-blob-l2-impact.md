---
title: "[opinion] Pectra EIP-7691 · blob 倍増と L2 経済連鎖"
source_entry: systems/pectra-eip-7691-blob-l2-impact.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — Pectra EIP-7691 · blob 倍増と L2 経済連鎖

> 出典エントリー: `systems/pectra-eip-7691-blob-l2-impact.md`

## 推論 (from Key facts)

- EIP-7251 と共に「L1 厚化 + L2 拡張」のデュアルトラックを形成 ^[inferred]

## Counterpoints

- 7691 の -50% gas 優位は L2 ユーザー成長によって速やかに消費される可能性、長期的には価格は依然として blob fee に向けて調整
- L2 経済は sequencer 収入を圧迫する、しかし sequencer 集中度はかえって上昇(中央集権圧力)
- Vitalik「L2 が 99% のユーザーを担う」戦略は L1 セキュリティ予算を逆方向に蝕む可能性(staking yield 低下)([[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャー]] における staking 収益と ETH 価格のフィードバックループと対照)
- blob 容量倍増の非 rollup アプリ(DA バックアップ等)への影響は十分議論されていない

## Open questions

- 2027 Fusaka PeerDAS で blob 容量がさらに 10× になるか?
- L2 間で blob 共有から「blob fee 戦争」(誰がより多く取るか)が発生するか?
- Stripe / Coinbase は Base 上の stablecoin settlement を L1 staking yield 上昇に伴って L1 に戻すか?
- DEX の L2 上トラフィックは blob 倍増によってさらに集中するか?([[exchanges/global-dex-major-five-comparison|global DEX 主流 5 社対照]] を参照)
