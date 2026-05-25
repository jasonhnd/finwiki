---
title: グローバル機関カストディ五強 — Coinbase Custody / Fidelity / Anchorage / BitGo / Komainu
aliases:
  - Global institutional custody comparison
  - 機関暗号資産カストディ 5 強
  - Top 5 institutional crypto custodians
domain: exchanges
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-05-19
review_by: 2027-05-19
confidence: likely
tags:
  - exchanges
  - custody
  - institutional
  - global
  - comparison
sources:
  - https://www.coinbase.com/custody
  - https://www.fidelitydigitalassets.com/
  - https://www.anchorage.com/
  - https://www.bitgo.com/
  - https://komainu.com/
status: candidate
---

# グローバル機関カストディ五強 — Coinbase Custody / Fidelity / Anchorage / BitGo / Komainu

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-cex-top10-comparison|グローバル CEX top 10 ランキング比較 (2025-2026)]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 概要

機関向け暗号資産カストディは、VASP の自己保管モデルとは構造的に異なる。米国市場では Qualified Custodian (SEC Rule 206(4)-2) ステータス + 信託銀行業務免許 (Trust Charter) 保有が機関投資家受託の事実上の要件となる。米系 4 強 (Coinbase / Fidelity / Anchorage / BitGo) + 欧/日系 Komainu の 5 大プレイヤーが ETF・年金・SWF 等の超機関市場を主導する。

## 五強プロファイル比較

- **Coinbase Custody Trust** — NY DFS Trust Charter (2018-)。Coinbase Global 子会社、AUM $200B+ (推定)。BlackRock IBIT 等 米現物 BTC ETF の受託カストディアン多数。SOC 1/2 Type II 認証。
- **Fidelity Digital Assets** — 2018 設立。MA Trust Charter + NY DFS。Fidelity Investments 老舗機関基盤を活用、FBTC (Fidelity Wise Origin Bitcoin ETF) 自社受託。年金・財団に強い。
- **Anchorage Digital** — 2021-01 米国初の Federal Trust Chartered Crypto Bank (OCC 認可)。MPC + HSM ハイブリッド技術が強み。連邦規制下唯一の暗号銀行という独自ポジション。
- **BitGo** — 2013 設立 (業界最古参)。SD State Trust Charter + multi-state 拡張。multi-sig + MPC ハイブリッド。三井物産 MDC 提携経由で日本市場接触。
- **Komainu** — Jersey 法人 (2018)。Nomura HD + CoinShares + Ledger 合弁。cold custody 専業、主権国家 (UAE 政府等) ・規制資産受託に特化。Jersey JFSC 認可。

## 技術スタック分布

- **MPC (Multi-Party Computation)**: Anchorage / BitGo (hybrid) / Fireblocks (vendor 層)
- **Multi-sig + HSM**: Coinbase / BitGo (hybrid モデル)
- **Cold storage + offline signing**: Komainu / Fidelity (保守的アプローチ)

## 規制ライセンス比較

- **米系**: NYDFS Trust Charter (Coinbase) / OCC Federal Trust (Anchorage 唯一) / 各州 Trust Charter + MA Trust (Fidelity) / SD Trust (BitGo)
- **欧/日**: Jersey JFSC (Komainu) / BitGo Japan 提携 (三井物産 MDC 信託業)
- **アジア**: HK SFC Type 1+7 + Custodian Trust (BitGo Trust HK)

## 日本市場接触

Komainu は Nomura HD 親会社経由で日本機関大手 (生保・地銀・SWF) 深耕中。Coinbase は 2023 日本 CEX 撤退。Fidelity は日本拠点未進出。BitGo は三井物産 MDC との提携で間接接触。Anchorage は API ベース海外接続のみ、日本実体なし。国内 3 強 ([[exchanges/jp-institutional-custody-three-pillars]]) とは補完関係。

## 関連

- [[exchanges/jp-institutional-custody-three-pillars]] — 国内 3 強 (Fireblocks Japan / Ginco / Komainu) 比較
- [[exchanges/jp-custody-komainu]] / [[exchanges/jp-custody-fireblocks-japan]] / [[exchanges/jp-custody-ginco]]
- [[exchanges/global-cex-top10-comparison]] — Coinbase CEX 側
- [[exchanges/jp-exchange-laser-digital-japan]] — Nomura 系 (Komainu Board 重なり)

来源: 公開情報整理 (FSA 暗号資産交換業者公表・海外無登録警告書一覧、Nomura HD/SMFG/MUFG IR、Komainu/Fireblocks 公式、Chainalysis Crypto Crime Report 2024-2025)
