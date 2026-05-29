---
title: "[opinion] Coinbase CDP · 開発者プラットフォーム · AI agent on-chain ウォレット基盤"
source_entry: agent-economy/coinbase-cdp-developer-platform.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — Coinbase CDP · 開発者プラットフォーム · AI agent on-chain ウォレット基盤

> 出典エントリー: `agent-economy/coinbase-cdp-developer-platform.md`

## Counterpoints

CDP は Base / USDC にデフォルトでバインドされており = Coinbase の支配色が強い · Privy の「マルチチェーン中立 + マルチステーブルコイン」設計哲学とは正反対。**真に中立な AI agent 開発者は Privy を好む可能性が高い**。Base の中央集権性向(Coinbase の単一 sequencer + cbBTC + Aerodrome の大株主)は · 規制対象エンタープライズ顧客における CDP のコンプライアンス審査リスクとなる。Magic / Web3Auth / Reown(旧 WalletConnect)は依然として embedded wallet のロングテール市場を占める。AWS AgentCore のデフォルトデュアル provider は · CDP が **継続的に Privy と価格 + DX で競争** する必要があることを意味し · 寝かせ収益にはならない。

## Open questions

CDP と Base の結合は 2027 に Base が sequencer を完全 decentralize した後に解けるか?AgentKit は [[systems/erc-7702-overview|ERC-7702]](EIP-7702 + [[systems/erc-7702-vs-erc-4337|7702/4337 hybrid]])普及後、EOA → Smart Account 移行をどう扱うか?CDP は単独で IPO するか、独立子会社として分離されるか?
