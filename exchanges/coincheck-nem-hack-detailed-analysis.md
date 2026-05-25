---
title: Coincheck NEM 580 億円流出事件 詳細分析 (2018-01)
aliases:
  - Coincheck NEM hack 2018
  - コインチェック NEM 流出事件
  - Coincheck 580億 incident
domain: exchanges
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-05-19
review_by: 2027-05-19
confidence: likely
tags:
  - exchanges
  - coincheck
  - nem
  - hack
  - incident
  - regulation
sources:
  - https://corporate.coincheck.com/
  - https://www.fsa.go.jp/
  - https://ja.wikipedia.org/wiki/コインチェック
status: candidate
---

# Coincheck NEM 580 億円流出事件 詳細分析 (2018-01)


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin 流出事件 詳細分析 (2024-05) — Lazarus 帰属 4,502.9 BTC]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 1. 事件概要

2018-01-26 早朝、Coincheck の NEM (XEM) ホットウォレットから **約 5.2 億 XEM (当時 約 580 億円相当)** が外部に流出。当時 **史上最大規模の暗号資産盗難** 事件であり、Mt.Gox (2014) を超える金額として国際的に注目された。NEM Foundation が開発した **モザイクタグ追跡** によって流出資金のフローはリアルタイムで追跡可能だったが、ダークウェブ DEX 経由での現金化を完全には阻止できず、約 60% 相当が他通貨へロンダリングされたとされる。

## 2. 技術原因

- **ホットウォレット 100% 運用**: 流出時点で XEM のオフライン (コールド) 保管比率は 0%。全資産が常時オンライン状態
- **マルチシグ 未実装**: XEM は当時すでにマルチシグに対応していたが、Coincheck は実装コストを理由に **単一署名運用**
- **秘密鍵管理の脆弱性**: 単一鍵ホットウォレット構成 + 鍵管理プロセスのドキュメント未整備
- **侵入経路**: 業務用 PC へのスピアフィッシングメール経由のマルウェア感染 (後の警察庁調査で **北朝鮮 Lazarus / APT38** 帰属推定)

## 3. 補償スキーム

- **2018-01-28 (流出 2 日後)**: 顧客 26 万人 + 約 580 億円相当の **全額 JPY 補償** を公式発表
- **2018-03-12**: 補償完了 (**1 XEM = 88.549 円** 換算)
- **Coincheck 自己資本から拠出** (Monex 子会社化前の独立期)
- 法的弁済義務が確定していない段階での自主補償は **世界的に異例** — 倒産せず事業継続できた稀少ケース

## 4. 規制反射

- **2018-03**: FSA が国内 VASP 16 社一斉立入検査 + Coincheck に **業務改善命令**
- **2018-04**: **JVCEA 設立** (自主規制法人発足)
- **2018-04**: **Monex Group が Coincheck 完全子会社化** (36 億円)
- **2020-05**: 改正金商法 + 監督指針で **ホットウォレット 5% / コールド 95% の分別管理義務** を制度化

## 5. 国際比較

後の **Mt.Gox** (2014 流出 · 弁済 12 年経過後の 2026 も継続) や **FTX International** (2022 · 弁済 3 年経過時点で部分弁済) と対比し、Coincheck は **50 日で全額 JPY 補償** を完遂した。制度設計外の自主対応として、結果的に国内規制 (95% コールド義務 + JVCEA) の **実証事例** となった。

## Cross-links

- [[exchanges/jp-exchange-coincheck]]
- [[exchanges/jp-vasp-incident-history]]
- [[exchanges/jp-vasp-cold-storage-segregation-rules]]
- [[exchanges/fsa-business-improvement-orders-history]]
- [[exchanges/jvcea-self-regulatory-overview]]
- [[exchanges/jp-vasp-ma-consolidation-history]] (Monex 子会社化)
- [[exchanges/mtgox-bankruptcy-processing-timeline]]
- [[exchanges/ftx-japan-100pct-return-case-study]]
- [[security/forensic-identity-anchor-chain|forensic identity anchor chain]]
- [[security/bytecode-forensic-three-tier-verify|bytecode forensic 3-tier verify]]
- [[exchanges/bybit-lazarus-hack-detailed-analysis|Bybit Lazarus ハック詳細分析]]

来源: 公開情報整理 (Coincheck/マネックスグループ IR 開示、FSA 業務改善命令・記者会見、警察庁 NEM 流出事案関連発表、Chainalysis/Elliptic 公開トレース、Lazarus グループ追跡レポート)
