---
title: 日本信託型 SC 架構 —— 三型分化下的第 3 号 EPI 結構解剖
aliases: [信託型 SC, JP trust-type stablecoin, 第 3 号 EPI, trust-type EPI architecture]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [fintech, stablecoin, japan, regulation, trust-banking, progmat, td]
status: candidate
sources:
  - https://www.fsa.go.jp/en/policy/sftl/index.html
  - https://progmat.co.jp/
  - https://www.mufg.jp/english/
  - https://www.smtb.jp/business/digital_assets/
  - https://elaws.e-gov.go.jp/document?lawid=418AC0000000108
---

# 日本信託型 SC 架構


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it against [[fintech/multi-megabank-consortium-governance|多巨行联合体治理 —— 复数 megabank 共同持有 fintech 基础设施的治理模式]] for peer / contrast context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system / regulatory boundary.

> [!info] TL;DR
> 日本改正資金決済法把 SC 発行分成 **三型** —— **信託型(第 3 号 EPI)/銀行型(第 1 号 EPI)/資金移動業者型(第 1 号 EPI)** —— 各有不同法律根据 / 倒産隔離強度 / 送金上限。**信託型是 B2B 大口決算的唯一可行路径**(送金上限なし + 信託機構による 100% 倒産隔離),也是 Progmat Coin / 三大行共同 SC 的法律基盘。它在 §501(d) 互操作場景中構造性占優,但跨境通道依然開放。

## 三型構造比較

| 維度 | 信託型(Progmat Coin)| 銀行型(GMO あおぞらネット銀行 DCJPY)| 資金移動業者型(JPYC)|
|---|---|---|---|
| 法的根拠 | 資金決済法 2 条 9 項「特定信託受益権」 | 銀行法に基づく預金型トークン | 資金決済法 第二種資金移動業 |
| EPI 番号 | **第 3 号** | 第 1 号(銀行発行)| 第 1 号(資金移動業者発行)|
| 発行主体 | 信託銀行(受託者) | 銀行 | 資金移動業者 |
| 担保 | **信託財産 100% 分別管理**(現金)| 銀行自己資本 + 預金保険機構 | 100% 法定通貨を信託 or 履行保証 |
| 倒産隔離 | **法的に保証**(信託機構) | 預金保険まで 1,000 万円 | 履行保証で 100% 保護 |
| 送金上限 | **なし** | 銀行業務全般に準拠 | **1 回 100 万円** |
| 利息帰属 | **発行体に帰属**(信託受託報酬として)| 預金利息は預金者に | 受託資産利息は供託金扱い |
| 主要 user | B2B 大口 corporate | 個人零售 / Web3 native | 個人零售 / 中小企業 |
| KYC 二重性 | 委託銀行 + 信託銀行 二重 | 銀行のみ | 資金移動業者のみ |

## 信託型の構造的優位

**(a) 倒産隔離の強度**:信託型では受託銀行が破綻しても信託財産は委託者に帰属する。これは USDC 模型(Circle 破産リスク → 受託 BNY Mellon 保護)の日本版だが、**信託法明文規定により法律確定性がより高い**。

**(b) 送金上限なしの破壊力**:JPYC 等資金移動業者型は 1 回 100 万円という制約により **個人向け零售に限定**される。信託型は **B2B 大口決算(10 億円〜数百億円 1 笔)が可能** —— これが Progmat が信託型を選んだ根本理由。

**(c) 多銀行共同委託の意味**:[[payment-firms/progmat|Progmat Coin]] の信託スキームでは **複数銀行([[megabanks/mufg|MUFG]], [[megabanks/smfg|SMFG/SMBC]], Mizuho)が共同委託者**となり、**三菱 UFJ 信託 1 社が受託者**となる。これにより 3 つの megabank 客户预金を **統一支持一種共同 SC** することが法律上可能になる —— [[multi-megabank-consortium-governance|多巨行联合体治理]] の法律的基盤。

## §501(d) との関係

GENIUS Act §501(d) は跨境互操作のために「互操作司法管轄区」と「信認できる発行体」を要求する。信託型の **法的倒産隔離 + 規制重層性** は §501(d) 認定との親和性が高い。ただし:

- 信託型でも **§501(d) tier 自体は別途取得が必要**(自動でない)
- Progmat Coin は §501(d) 通道未確立 → cross-border 用には [[cross-border-sc-via-swift-api|Project Pax via SWIFT API]] 経由が現在の主流
- 将来的に信託型が **§501(d) tier 取得** すれば、信託機構の法律的強度を背景に USDC との互操作で構造的優位を持つ可能性

## 三型の市場分担(現状 2026)

| セグメント | 1 位 | 構造的理由 |
|---|---|---|
| B2B 大口決算 | **信託型(Progmat)** | 送金上限なし + 三大行客户基盤 |
| 零售決済 | 資金移動業者型(JPYC) | 認知度 + UX + §501(d) compat(SBI 経由)|
| 銀行口座連動 retail | 銀行型(みんなの銀行 Solana)| 既存口座 1:1 連動 |
| Cross-border 大口 | 信託型(Progmat) | 信託の法律強度 |

## 応用

- 任何 "信託 vs 銀行発行" の SC 設計議論で 構造比較を一発で引ける
- §501(d) 互操作 評価で日本 4 陣営を比較するときの基準枠
- 跨境合规通道(SWIFT API / IBC)を信託型上に乗せるパターン理解 → [[cross-border-sc-via-swift-api|跨境 SC via SWIFT API]]
- [[institutional-stablecoin-deposit-token-thesis|機関投資家市場 = 預金トークン唯一解]] の日本側実装解として

---


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度三層構造]]
- [[fintech/cross-border-sc-via-swift-api|跨境 SC via SWIFT API]]
- [[fintech/multi-megabank-consortium-governance|多巨行联合体治理]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関投資家市場 = 預金トークン唯一解]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 denylist]]
<!-- /wiki-links:managed -->
