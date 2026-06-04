---
source: fintech/jp-trust-type-sc-architecture
source_hash: 92e0976b5167f48f
lang: ja
status: machine
fidelity: ok
title: "日本信託型 SC アーキテクチャ"
translated_at: 2026-06-02T13:21:55.102Z
---
# 日本信託型 SC アーキテクチャ

## ウィキ上の位置づけ

このエントリは [[fintech/INDEX|fintech index]] の配下にある。比較は [[fintech/multi-megabank-consortium-governance|多巨行联合体治理 —— 复数 megabank 共同持有 fintech 基础设施的治理模式]]、制度境界は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]。

## 要約

日本の SC は信託型（第 3 号 EPI）、銀行型（第 1 号 EPI）、資金移動業者型（第 1 号 EPI）に分かれる。信託型は B2B 大口決済の主経路で、100%倒産隔離と §501(d) 互操作が焦点である。

## 三型比較

信託型は資金決済法 2 条 9 項、EPI 第 3 号、銀行型は 第 1 号、資金移動業者型は 第 1 号。信託財産 100%分別管理、100%法定通貨、預金保険 1,000 万円、履行保証 100%、送金上限 1 回 100 万円、B2B、Web3 native が比較点である。

## 構造的優位

資金移動業者型は 1 回 100 万円の制約があり、信託型は B2B 大口決済（10 億円〜数百億円 1 件）が可能である。[[payment-firms/progmat|Progmat Coin]]の信託スキームでは [[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMFG/SMBC]]、Mizuho が委託者、三菱 UFJ 信託 1 社が受託者となり、3 つの megabank 預金を共通 SC で支える。[[multi-megabank-consortium-governance|多巨行联合体治理]]が法的基盤である。

## §(d) と市場分担

GENIUS Act §501(d)、§501(d)、§501(d) tier、§501(d)チャネル、501経由、§[[cross-border-sc-via-swift-api|Project Pax via SWIFT API]](d) tier が論点。現状 501では 2026、B1 位B、§2(d) compat、501:1連動が市場分担を作る。

## 応用

§1 (d) 評価、日本 501陣営比較、4 、[[cross-border-sc-via-swift-api|跨境 SC via SWIFT API]] の日本側実装解に使う。

## 関連

- [[institutional-stablecoin-deposit-token-thesis|機関投資家市場 = 預金トークン唯一解]]
- [[INDEX|Wiki Index]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度三層構造]]
- [[fintech/cross-border-sc-via-swift-api|跨境 SC via SWIFT API]]
- [[fintech/multi-megabank-consortium-governance|多巨行联合体治理]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関投資家市場 = 預金トークン唯一解]]

## 参照順

- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 denylist]]
