---
source: exchanges/bybit-lazarus-hack-detailed-analysis
source_hash: e158825ae10af916
lang: zh
status: machine
fidelity: ok
title: "Bybit Lazarus $14.6 億 黑客详细分析(2025-02)— 史上最大加密资产外流"
translated_at: 2026-05-31T03:19:56.481Z
---

# Bybit Lazarus $14.6 億 黑客详细分析(2025-02)— 史上最大加密资产外流

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin 流出事件 詳細分析 (2024-05) — Lazarus 帰属 4,502.9 BTC]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 1. 事件概要

2025-02-21,从 Bybit 的 ETH 冷钱包流出约 **$14.6 億(约 2,200 億円)**等值的 ETH + stETH + mETH 等。这是**史上最大的加密资产盗窃**,以名义换算计超过 Mt.Gox 2014 的 850,000 BTC 的规模。Chainalysis + Elliptic + ZachXBT 在事件发生后即以公开取证断定归属于 **Lazarus Group(朝鲜国家支持的黑客)**。Bybit 是总部位于阿联酋迪拜的全球前 3 大 CEX(衍生品交易量首屈一指)。

## 2. 技术原因(公开信息)

并非真正的冷钱包侵入,而是**签名 UI 的中间人攻击(供应链攻击)**:

- 在**冷 → 热多签签名流程**中,**Safe(旧称 Gnosis Safe)前端**被篡改,签名者批准了伪造的目标交易
- 攻击者侵入 Safe 的 web 基础设施,仅向 Bybit 签名者呈现伪造的 UI
- 签名者在显示正规目标地址的 UI 上批准 → 实际签署的是向攻击者钱包的转账
- 查明为**经由共用基础设施(Safe)的供应链攻击** → 暴露出全行业风险

## 3. 即时应对

- **2025-02-21** Bybit CEO Ben Zhou 在事件被发现后数小时内进行**直播应对**(异乎寻常的透明度)
- **发生 30 分钟后**开始请求 Tether + Circle + 主要 CEX 冻结 OFAC 相关地址
- **2025-02-22** Bybit 官方宣布以自有资金 + 合作方过桥贷款**保证全额补偿客户**
- **交易与提现业务持续** 未停业 → 证明了运营持续能力(流动性 + 透明度)
- 抑制了挤兑风险,将长期声誉损害限制在最小范围

## 4. OFAC 链上层级冻结先例

事件成为**美国链上层级经济制裁力的实证案例**:

- **2025-02 底** OFAC 将攻击相关钱包地址 200+ 加入 SDN 清单
- Tether / Circle / Coinbase / Binance 等主要 CEX 执行冻结
- **发生 30 分钟以内冻结约 $500M 的外流资金** = 史上最快的链上层级应对
- 经由 USDT / USDC 发行方的配合,证明了稳定币层级即时冻结的可行性
- 但 ETH 等原生资产难以冻结 → 大部分经由混币器 / 跨链桥被洗白

## 5. 战略含义

- Bybit 以 **CEO 透明度 + 业务持续**限制了声誉损害(事件后仍维持前 3 大 CEX 地位)
- **供应链攻击**(Safe 等共用基础设施)风险的显现 → 促使全行业强化签名 UI 验证
- **2026-03 底** Bybit 完全终止面向日本居民的服务(在 FSA 3 次警告后) → 与退出日本市场的直接因果关系不明,但是全球监管压力的象征
- 再次确认了 Lazarus 的持续威胁(与 [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis]] 并列的大型案件)

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
