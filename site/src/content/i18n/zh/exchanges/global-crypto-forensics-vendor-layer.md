---
source: exchanges/global-crypto-forensics-vendor-layer
source_hash: 8fad60588f2bd797
lang: zh
status: machine
fidelity: ok
title: "全球加密资产 forensics vendor 层 —— Chainalysis / Elliptic / TRM / Crystal 比较"
translated_at: 2026-05-31T03:19:56.501Z
---

# 全球加密资产 forensics vendor 层 —— Chainalysis / Elliptic / TRM / Crystal 比较

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/jp-vasp-aml-travel-rule-implementation|国内 VASP 犯収法 + FATF Travel Rule 国内実装 (2023-)]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 概述

CEX + 银行 + 执法机构在加密资产交易的 AML/CFT 监视、制裁筛查、非法资金追踪方面依赖专业 forensics vendor。Chainalysis（美）作为行业标准称雄，Elliptic / TRM Labs / Crystal Intelligence 构成竞争上位。它们是 OFAC freeze + Travel Rule + 制裁监视 + Lazarus/朝鲜 trace 的核心基础设施，现代加密资产监管事实上以这些 vendor 的存在为前提而成立。境内 VASP 也全部与境外 vendor 签订顾问合约。

## Top 4 vendor 比较

- **Chainalysis**（NY · 2014 设立）—— 行业标准。Reactor（investigation tool）+ KYT（real-time transaction monitoring）+ Crypto Crime Report（年度公开，行业圣经）。客户 = 美财政部 / FBI / IRS / 国税厅 / 众多 CEX。估值 $8.6B（2022 轮）
- **Elliptic**（London · 2013 设立）—— 创始人 Tom Robinson（前 BAML）。KYC + transaction monitoring + sanction screening。以机构投资者 + 银行为中心的客户层。凭借 Lazarus / Bybit hack 中 30 分钟内 freeze 而声名鹊起
- **TRM Labs**（San Francisco · 2018 设立）—— risk score + crypto-native API 优先。迭代快 + 对新兴 chain 支持面广。发行 Crypto Crime Report（Chainalysis 竞品）
- **Crystal Intelligence**（Bitfury 子公司，爱沙尼亚 → 瑞士）—— 欧洲 + 俄罗斯出身（现因监管问题趋于收缩）。面向执法机构有优势

## 主要服务

- **Transaction monitoring（KYT）**：实时链上分析。CEX 出入金时即时返回 risk score（带 mixer / sanctioned wallet / darknet market 标签）
- **Wallet labeling / clustering**：已知 wallet（Lazarus / Tornado Cash / Hydra Market / Garantex / Bitzlato）的聚类 DB
- **Sanction screening**：OFAC SDN list 自动核对 + EU/UK/UN 制裁名单整合
- **Investigation tools**：面向执法机构的 fund flow 追踪 UI（Reactor / Investigator / Forensics）

## 在重大事件中的角色

- **2022-02 Wormhole hack（$325M）**：Chainalysis 追踪并公开监测资金动向
- **2024-05 DMM Bitcoin Lazarus hack（$305M）**：Chainalysis + FBI + DC3 联合归属公布
- **2025-02 Bybit hack（$1.46B）**：Elliptic + ZachXBT 在 30 分钟内 freeze 联动，史上最快规模的追踪应对
- **2022-08 Tornado Cash OFAC 制裁**：全部 vendor 即刻进行 SDN 扩展应对，为合约地址打标签
- **2023-04 Bitzlato 查处**：Chainalysis 提供的数据成为起诉的核心证据

## 与境内 VASP 的关系

全部境内 VASP（bitFlyer / Coincheck / GMO コイン / SBI VC Trade / bitbank / DMM Bitcoin）均与 Chainalysis 或 Elliptic 签订顾问合约。JVCEA Travel Rule 实现亦以 vendor API 为前提。TRM Labs 以 B2C2 Japan / 机构为中心。Crystal 较为有限。不存在境内自有 vendor，呈境外依赖结构（主权风险 = 美 OFAC 政策变更直接影响境内 VASP 业务）。

## Cross-links

- [[exchanges/jp-vasp-aml-travel-rule-implementation]]
- [[exchanges/jp-vasp-security-audit-certification]]
- [[exchanges/bybit-lazarus-hack-detailed-analysis]]
- [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis]]
- [[exchanges/cross-chain-bridge-cex-deposit-withdrawal]]
- [[exchanges/jp-crypto-market-maker-otc-layer]]
- [[fintech/chain-level-ofac-freeze-precedent]]
- [[fintech/carf-1099da-end-of-crypto-anonymity]]
- [[security/forensic-identity-anchor-chain|forensic identity anchor chain]]
- [[security/bytecode-forensic-three-tier-verify|bytecode forensic 3-tier verify]]
- [[security/wayback-machine-as-forensic-tool|wayback machine as forensic tool]]
