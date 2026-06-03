---
source: fintech/cosmos-ibc-for-financial-institutions
source_hash: d81e5723ce57fffd
lang: ja
status: machine
fidelity: ok
title: "金融機関向け Cosmos IBC"
translated_at: 2026-06-02T13:21:55.099Z
---
# 金融機関向け Cosmos IBC

## ウィキ上の位置づけ

このエントリは [[fintech/INDEX|fintech index]] の配下にある。隣接文脈は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]、システム境界は [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]]。

## 要約

金融機関の cross-chain protocol 選定では、信頼最小化、検証可能性、規制親和性が中核要件である。Cosmos IBC + LCP は light client verification を備え、Progmat / Datachain が日本側で実装する。

## 代表 protocol 比較

代表 4 類型は IBC、CCIP、LayerZero、Hyperlane である。IBC は Cosmos ecosystem 2019、LayerZero は 2022、Hyperlane は 2023。Relayer 2 、chain coverage 70+ / 50+、LCP exploit 0 、CCIP exploit 0 、Hyperlane exploit 0  が比較点である。

## 優位性と弱点

IBC は §501(d) の執行可能性、§501(d) 認定、§[[fintech/genius-act-501-denylist-mandate|GENIUS Act §501(d)]](d) tier の観点で有利である。横比較は 501、middleware 選択は 501、SWIFT API 連携は 5 。

## 関連

- [[systems/cross-chain-five-pole-comparison-matrix|跨链 5 极比较矩阵]]
- [[jp-trust-type-sc-architecture|信託型 SC 架構]]
- [[cross-border-sc-via-swift-api|跨境 SC via SWIFT API]]
- [[INDEX|Wiki Index]]
- [[fintech/jp-trust-type-sc-architecture|日本信託型 SC 架構]]

## 参照順

- [[fintech/cross-border-sc-via-swift-api|跨境 SC via SWIFT API]]
- [[fintech/multi-megabank-consortium-governance|多巨行联合体治理]]
- [[fintech/central-banking-function-unbundling|央行职能解体五层]]
