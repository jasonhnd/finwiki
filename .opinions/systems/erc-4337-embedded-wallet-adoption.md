---
title: "[opinion] ERC-4337 embedded wallet 採用マップ · Privy/Coinbase/Alchemy/Safe"
source_entry: systems/erc-4337-embedded-wallet-adoption.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — ERC-4337 embedded wallet 採用マップ · Privy/Coinbase/Alchemy/Safe

> 出典エントリー: `systems/erc-4337-embedded-wallet-adoption.md`

## Counterpoints

**Safe{Core} と Privy/Coinbase の棲み分け**:Safe は機関向け multi-sig を主軸とし(すでに web3 機関の標準装備)・ Privy/Coinbase はリテール embedded を主軸 —— 両者は表面上は競合しないが · Safe Modular もリテール領域への浸透を進めている。長期的には合流する可能性がある。

**ERC-7702 からの逆風**:7702 によって「既存の EOA をワンクリックで SCW にアップグレード」できるようになり · Privy/Coinbase CDP の UX 差別化障壁を引き下げる。短期(2026-2027)では 4337 陣営のビジネスモデルにとって挑戦となる。

## Open questions

- Stripe + Privy 統合後の加盟店オンボーディング速度は?
- Coinbase CDP vs Privy の Base 上での市場シェアは?
- 7702 ローンチが 4337 embedded wallet を実際にどの程度浸食するか?
- 非 EVM(Solana / Move)における embedded wallet 類似標準はどのように 4337 と相互運用するか?
