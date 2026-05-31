---
source: exchanges/global-institutional-custody-five-pillars
source_hash: a87de83ece028339
lang: zh
status: machine
fidelity: ok
title: "全球机构托管五强 — Coinbase Custody / Fidelity / Anchorage / BitGo / Komainu"
translated_at: 2026-05-31T03:19:56.396Z
---

# 全球机构托管五强 — Coinbase Custody / Fidelity / Anchorage / BitGo / Komainu

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-cex-top10-comparison|グローバル CEX top 10 ランキング比較 (2025-2026)]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 概要

面向机构的加密资产托管，与 VASP 的自我保管模式在结构上不同。在美国市场，Qualified Custodian（SEC Rule 206(4)-2）资格 + 持有信托银行业务牌照（Trust Charter）事实上成为受托机构投资者的要件。美系 4  强（Coinbase / Fidelity / Anchorage / BitGo）+ 欧/日系 Komainu 这 5  大玩家主导 ETF・养老金・SWF 等超机构市场。

## 五强档案比较

- **Coinbase Custody Trust** — NY DFS Trust Charter（2018-）。Coinbase Global 子公司，AUM $200B+（推定）。BlackRock IBIT 等美国现货 BTC ETF 的受托托管行众多。SOC 1/2 Type II 认证。
- **Fidelity Digital Assets** — 2018  设立。MA Trust Charter + NY DFS。运用 Fidelity Investments 老牌机构基盘，自行受托 FBTC（Fidelity Wise Origin Bitcoin ETF）。对养老金・财团强。
- **Anchorage Digital** — 2021-01  美国首家 Federal Trust Chartered Crypto Bank（OCC 认可）。MPC + HSM 混合技术为强项。联邦监管下唯一加密银行这一独特定位。
- **BitGo** — 2013  设立（业界最元老）。SD State Trust Charter + multi-state 扩张。multi-sig + MPC 混合。经由三井物产 MDC 提携接触日本市场。
- **Komainu** — Jersey 法人（2018）。Nomura HD + CoinShares + Ledger 合资。cold custody 专营，特化于主权国家（UAE 政府等）・受监管资产受托。Jersey JFSC 认可。

## 技术栈分布

- **MPC (Multi-Party Computation)**：Anchorage / BitGo (hybrid) / Fireblocks（vendor 层）
- **Multi-sig + HSM**：Coinbase / BitGo（hybrid 模式）
- **Cold storage + offline signing**：Komainu / Fidelity（保守路径）

## 监管牌照比较

- **美系**：NYDFS Trust Charter (Coinbase) / OCC Federal Trust (Anchorage 唯一) / 各州 Trust Charter + MA Trust (Fidelity) / SD Trust (BitGo)
- **欧/日**：Jersey JFSC (Komainu) / BitGo Japan 提携（三井物产 MDC 信托业）
- **亚洲**：HK SFC Type 1+7 + Custodian Trust (BitGo Trust HK)

## 日本市场接触

Komainu 经由 Nomura HD 母公司深耕日本机构大手（寿险・地银・SWF）。Coinbase 已 2023  撤退日本 CEX。Fidelity 日本据点未进出。BitGo 经由与三井物产 MDC 的提携间接接触。Anchorage 仅 API 基础的海外连接，日本无实体。与国内 3  强（[[exchanges/jp-institutional-custody-three-pillars]]）为互补关系。

## 关联

- [[exchanges/jp-institutional-custody-three-pillars]] — 国内 3  强（Fireblocks Japan / Ginco / Komainu）比较
- [[exchanges/jp-custody-komainu]] / [[exchanges/jp-custody-fireblocks-japan]] / [[exchanges/jp-custody-ginco]]
- [[exchanges/global-cex-top10-comparison]] — Coinbase CEX 侧
- [[exchanges/jp-exchange-laser-digital-japan]] — Nomura 系（Komainu Board 重叠）

来源: 公開情報整理 (FSA 暗号資産交換業者公表・海外無登録警告書一覧、Nomura HD/SMFG/MUFG IR、Komainu/Fireblocks 公式、Chainalysis Crypto Crime Report 2024-2025)
