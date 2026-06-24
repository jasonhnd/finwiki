---
title: Bybit Lazarus $14.6 億 hack 詳細分析 (2025-02) — 史上最大暗号資産流出
aliases:
  - Bybit hack 2025
  - Bybit Lazarus 14.6 billion
  - Bybit ETH cold wallet hack
domain: exchanges
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-06-24
review_by: 2026-08-08
confidence: likely
tags:
  - exchanges
  - bybit
  - lazarus
  - hack
  - incident
  - ofac
sources:
  - https://www.bybit.com/
  - https://www.chainalysis.com/
  - https://home.treasury.gov/
status: active
---

# Bybit Lazarus $14.6 億 hack 詳細分析 (2025-02) — 史上最大暗号資産流出

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin 流出事件 詳細分析 (2024-05) — Lazarus 帰属 4,502.9 BTC]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 1. 事件概要

2025-02-21、Bybit の ETH コールドウォレットから約 **$14.6 億 (約 2,200 億円)** 相当の ETH + stETH + mETH 等が流出。**史上最大の暗号資産盗難** であり、名目換算で Mt.Gox 2014 の 850,000 BTC を上回る規模。Chainalysis + Elliptic + ZachXBT が事件発生後即時に **Lazarus Group (北朝鮮国家後援ハッカー)** への帰属を公開フォレンジックで断定。Bybit は UAE Dubai を本拠とする世界 top 3 CEX (デリバ取引高首位級)。

## 2. 技術原因 (公開情報)

真のコールドウォレット侵入ではなく **署名 UI の中間者攻撃 (サプライチェーン攻撃)**:

- **コールド → ホット マルチシグ署名プロセス** において、**Safe (旧 Gnosis Safe) フロントエンド** が改竄され、署名者が偽の宛先トランザクションを承認
- 攻撃者は Safe の web インフラに侵入し、Bybit 署名者にのみ偽 UI を提示
- 署名者は正規の宛先を表示している UI 上で承認 → 実際は攻撃者ウォレットへの transfer に署名
- **共通インフラ (Safe) を介したサプライチェーン攻撃** と判明 → 業界全体のリスク露呈

## 3. 即時対応

- **2025-02-21** Bybit CEO Ben Zhou が事件発覚から数時間以内に **ライブストリーミング対応** (異例の透明性)
- **発生 30 分後** Tether + Circle + 主要 CEX に OFAC 関連アドレス freeze を要請開始
- **2025-02-22** Bybit が自社資金 + 提携先 bridge loan で **顧客全額補償保証** を公式発表
- **取引・出金業務継続** 業務停止せず → 運営継続力 (流動性 + 透明性) を立証
- bank run リスクを抑制し、長期的 reputation damage を限定化

## 4. OFAC chain-level freeze 先例

事件は **米国 chain-level 経済制裁力の実証ケース** となった:

- **2025-02 末** OFAC が攻撃関連ウォレットアドレス 200+ を SDN リストに追加
- Tether / Circle / Coinbase / Binance 等 主要 CEX が freeze 実行
- **発生 30 分以内に約 $500M の流出資金を freeze** = 史上最速の chain-level 対応
- USDT / USDC 発行体の協力により stablecoin レイヤーの即時凍結が可能と証明
- ただし ETH 等 native asset は freeze 困難 → 大部分は mixer / cross-chain bridge 経由で洗浄

## 5. 戦略含意

- Bybit は **CEO 透明性 + 業務継続** で reputation damage を限定 (事件後も top 3 CEX 地位維持)
- **サプライチェーン攻撃** (Safe 等共通インフラ) リスクの顕在化 → 業界全体に署名 UI 検証強化を促進
- **2026-03 末** Bybit は日本居住者向けサービス完全終了 (FSA 3 回警告後) → 日本市場撤退との直接因果関係は不明だが、世界規制圧力の象徴
- Lazarus の継続的脅威 ([[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis]] と並ぶ大型案件) を再確認

## Cross-links

- [[exchanges/jp-foreign-exchange-bybit]]
- [[exchanges/jp-vasp-incident-history]]
- [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis]]
- [[exchanges/coincheck-nem-hack-detailed-analysis]]
- [[exchanges/mtgox-bankruptcy-processing-timeline]]
- [[exchanges/uae-vara-licensing-overview]]
- [[exchanges/global-cex-top10-comparison]]
- [[fintech/chain-level-ofac-freeze-precedent]]
- [[security/forensic-identity-anchor-chain|forensic identity anchor chain]]
- [[security/bytecode-forensic-three-tier-verify|bytecode forensic 3-tier verify]]
- [[security/module-path-confusion-supply-chain-attack|module path confusion supply chain attack]]
- [[exchanges/global-crypto-forensics-vendor-layer|グローバル crypto forensics ベンダーレイヤー]]

来源: 2026-05-19 jp-crypto-exchange-research Phase 5
