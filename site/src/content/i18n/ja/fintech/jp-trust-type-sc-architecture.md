---
source: fintech/jp-trust-type-sc-architecture
source_hash: d631fd2ddde9935d
lang: ja
status: machine
fidelity: ok
title: "日本の信託型 SC アーキテクチャ"
translated_at: 2026-06-18T23:59:13.121Z
---

# 日本の信託型 SC アーキテクチャ


## Wiki ルート

本項目は [[fintech/INDEX|fintech index]] の配下に位置する。ピア／対比の文脈としては [[fintech/multi-megabank-consortium-governance|多巨行联合体治理 —— 复数 megabank 共同持有 fintech 基础设施的治理模式]] と、より広いシステム／規制の境界としては [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] と併せて読むこと。

> [!info] TL;DR
> 日本の改正資金決済法は SC 発行を **三型** に分ける —— **信託型（第 3 号 EPI）／銀行型（第 1 号 EPI）／資金移動業者型（第 1 号 EPI）** —— それぞれ異なる法的根拠／倒産隔離の強度／送金上限を持つ。**信託型は B2B の大口決済における唯一の実行可能な経路**（送金上限なし + 信託機構による 100% 倒産隔離）であり、Progmat Coin／三大行共同 SC の法的基盤でもある。§501(d) の相互運用シナリオでは構造的に優位だが、クロスボーダー通道は依然として開かれている。

## 三型構造の比較

| 次元 | 信託型（Progmat Coin）| 銀行型（GMO あおぞらネット銀行 DCJPY）| 資金移動業者型（JPYC）|
|---|---|---|---|
| 法的根拠 | 資金決済法 2 条 9 項「特定信託受益権」 | 銀行法に基づく預金型トークン | 資金決済法 第二種資金移動業 |
| EPI 番号 | **第 3 号** | 第 1 号（銀行発行）| 第 1 号（資金移動業者発行）|
| 発行主体 | 信託銀行（受託者） | 銀行 | 資金移動業者 |
| 担保 | **信託財産 100% 分別管理**（現金）| 銀行自己資本 + 預金保険機構 | 100% 法定通貨を信託 or 履行保証 |
| 倒産隔離 | **法的に保証**（信託機構） | 預金保険まで 1,000 万円 | 履行保証で 100% 保護 |
| 送金上限 | **なし** | 銀行業務全般に準拠 | **1 回 100 万円** |
| 利息帰属 | **発行体に帰属**（信託受託報酬として）| 預金利息は預金者に | 受託資産利息は供託金扱い |
| 主要 user | B2B 大口 corporate | 個人零售 / Web3 native | 個人零售 / 中小企業 |
| KYC 二重性 | 委託銀行 + 信託銀行 二重 | 銀行のみ | 資金移動業者のみ |

## 信託型の構造的優位

**(a) 倒産隔離の強度**：信託型では受託銀行が破綻しても信託財産は委託者に帰属する。これは USDC 模型（Circle 破産リスク → 受託 BNY Mellon 保護）の日本版だが、**信託法の明文規定により法律確定性がより高い**。

**(b) 送金上限なしの破壊力**：JPYC 等の資金移動業者型は 1 回 100 万円という制約により **個人向け零售に限定**される。信託型は **B2B 大口決済（10 億円〜数百億円 1 の取引）が可能** —— これが Progmat が信託型を選んだ根本理由である。

**(c) 複数銀行共同委託の意味**：[[payment-firms/progmat|Progmat Coin]] の信託スキームでは **複数の銀行（[[megabanks/mufg|MUFG]], [[megabanks/smfg|SMFG/SMBC]], Mizuho）が共同委託者**となり、**三菱 UFJ 信託 1 社が受託者**となる。これにより 3 行の megabank の顧客預金を **統一して一種類の共同 SC で支える**ことが法律上可能になる —— [[fintech/multi-megabank-consortium-governance|多巨行联合体治理]] の法的基盤である。

## §501(d) との関係

GENIUS Act §501(d) は、クロスボーダーの相互運用のために「相互運用司法管轄区」と「信認できる発行体」を要求する。信託型の **法的倒産隔離 + 規制の重層性** は §501(d) 認定との親和性が高い。ただし：

- 信託型であっても **§501(d) tier 自体は別途取得が必要**（自動ではない）
- Progmat Coin は §501(d) 通道が未確立 → クロスボーダー用には [[fintech/cross-border-sc-via-swift-api|Project Pax via SWIFT API]] 経由が現在の主流
- 将来的に信託型が **§501(d) tier を取得** すれば、信託機構の法律的強度を背景に、USDC との相互運用で構造的優位を持つ可能性がある

## 三型の市場分担（現状 2026）

| セグメント | 1 位 | 構造的理由 |
|---|---|---|
| B2B 大口決済 | **信託型（Progmat）** | 送金上限なし + 三大行の顧客基盤 |
| 零售決済 | 資金移動業者型（JPYC） | 認知度 + UX + §501(d) compat（SBI 経由）|
| 銀行口座連動 retail | 銀行型（みんなの銀行 Solana）| 既存口座 1:1 連動 |
| クロスボーダー大口 | 信託型（Progmat） | 信託の法律強度 |

## 応用

- 任意の「信託 vs 銀行発行」の SC 設計議論で 構造比較を一発で引ける
- §501(d) 相互運用の評価で日本 4 陣営を比較する際の基準枠
- クロスボーダー合規通道（SWIFT API / IBC）を信託型上に乗せるパターンの理解 → [[fintech/cross-border-sc-via-swift-api|跨境 SC via SWIFT API]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関投資家市場 = 預金トークン唯一解]] の日本側実装解として

---


## 関連
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度三層構造]]
- [[fintech/cross-border-sc-via-swift-api|跨境 SC via SWIFT API]]
- [[fintech/multi-megabank-consortium-governance|多巨行联合体治理]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関投資家市場 = 預金トークン唯一解]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 denylist]]
<!-- /wiki-links:managed -->
