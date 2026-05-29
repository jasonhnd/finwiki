---
title: "[opinion] CCTP V2 概観 · Circle USDC クロスチェーン burn-and-mint"
source_entry: systems/cctp-v2-overview.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — CCTP V2 概観 · Circle USDC クロスチェーン burn-and-mint

> 出典エントリー: `systems/cctp-v2-overview.md`

## Counterpoints

Circle の中央集権的役割は諸刃の剣:**利点**は単一 mint で §501 denylist を執行可能、コンプライアンス物語が強い;**欠点**は Circle が一度攻撃を受けるか法的に署名を強制されれば、USDC クロスチェーンの信頼が崩壊する。V2 Fast Transfer は Circle が自前 treasury($4.34B、IPO 後)で < 1 秒 finality 内のカウンターパーティリスクを担保するもの —— これは商業モデルであり暗号学的保証ではない。

さらに V2 Hooks はクロスチェーンが宛先チェーン契約を自動トリガーする UX を向上させる一方、攻撃面も拡大する —— hook コントラクト自体のセキュリティが新たなリスクポイントとなる。

## Open questions

- V1 退役の正確な時期は?(2026 予想だが具体的な四半期は未公表)
- Fast Transfer のカウンターパーティリスクのプライシングモデルは?Circle はどうヘッジするか?
- DeFi 統合における Hooks の実際のセキュリティ監査実践は?
- LayerZero/Wormhole 等の汎用ブリッジとの長期共存か、それとも置換か?([[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン 5 極対照マトリクス]] 参照)
