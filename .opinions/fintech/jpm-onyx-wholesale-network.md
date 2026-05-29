---
title: "[opinion] JPMorgan Onyx / Kinexys · 銀行内部ホールセール・ネットワーク · Liink × JPM Coin × Onyx Digital Assets"
source_entry: fintech/jpm-onyx-wholesale-network.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — JPMorgan Onyx / Kinexys · 銀行内部ホールセール・ネットワーク · Liink × JPM Coin × Onyx Digital Assets

> 出典エントリー: `fintech/jpm-onyx-wholesale-network.md`

## Counterpoints

Onyx/Kinexys の「単一銀行自営」モデルはネットワーク効果に天然の制約をもたらす——非 JPM 顧客には参加への強い動機がない(Liink 1100+ 行が接続するのは SWIFT 代替価値であり、JPM Coin ではない)。[[fintech/multi-megabank-consortium-governance|複数大手銀行の連邦ガバナンス]] では「競合銀行は自行の預金を JPM のチェーンに移したがらない」と明示されている。**Fnality(中央銀行準備金)と Partior(アジア多銀行)が異なる地域でホールセール市場の中立シェアを切り取る**ため、Kinexys の市場上限は JPM 自社顧客の預金規模(~$2.4T deposits)に依存する。Quorum 技術スタックはプライベートチェーンで、**public L2 / Canton へのクロスドメインは全て JPM 自社開発のブリッジに依存**し、[[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン 5 極]] において独立したトークン経済やコミュニティを持たない。Kinexys の法的位置づけは「TD ≠ SC」 → GENIUS §501 の直接的制約を受けないが、OCC / FRB が将来「TD は public L2 を越えてはならない」と明確化した場合、JPMD on Base / Canton は撤退を余儀なくされる。

## Open questions

Kinexys の 2030 予測収益 $7.2B は base-case であり、実際には「多銀行連邦が突破できるか」に依存する——現在の Liink 接続は主にパートナー銀行であり、**真の競合銀行(Citi / BofA / Wells Fargo)が Kinexys に加わるか**が、Kinexys が「JPM 専有」か「事実上の標準」かを決定する。Onyx Digital Assets と [[systems/canton-overview|Canton]] / DTCC Project Ion の tokenized securities 市場での役割分担は?Kinexys が JPM 本体から切り出して IPO する場合、2030 で $30-35B の予測だが、JPM 親会社が分離を受け入れるか?
