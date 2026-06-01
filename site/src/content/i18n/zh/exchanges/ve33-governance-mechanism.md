---
source: exchanges/ve33-governance-mechanism
source_hash: fc7acc2300644603
lang: zh
status: machine
fidelity: ok
title: "ve(3,3) 治理机制：Curve veCRV -> Solidly -> Velodrome / Aerodrome"
translated_at: 2026-05-31T05:31:05.758Z
---

# ve(3,3) 治理机制：Curve veCRV -> Solidly -> Velodrome / Aerodrome

## Wiki 路线

本条目位于 [[exchanges/INDEX|交易所索引]]。请与 [[exchanges/global-dex-major-five-comparison|全球主要 DEX 五项比较]] 和 [[exchanges/fsa-vasp-registration-system|FSA 加密资产交换业注册制度]] 配套阅读，以把握同业比较和监管边界。

## 概要

**ve(3,3)** 是 **vote-escrow (ve)** 与 **(3,3) 博弈论**结合形成的 DeFi 代币经济机制，用于把 LP 奖励、协议收入分配和治理投票整合在同一激励结构中。Curve 的 veCRV 是原型，Solidly 在 2022 年抽象化该设计，Velodrome（Optimism）和 Aerodrome（Base）进一步把它实用化。今天，多个 L2 native DEX 以 ve(3,3) 或其变体作为经济核心。

## 基本结构

- **锁仓**：用户将 token 锁定 1 周至 4 年，获得 veToken（通常为 NFT）；锁定时间越长，投票权重越高。
- **投票**：veToken 持有者在每个 weekly epoch 中投票决定 emission 流向，即奖励进入哪个 LP 池。
- **贿赂 / 投票激励**：第三方项目支付投票激励，把 emission 引向自己的 LP 池，从而形成 bribe market。
- **rebase**：部分 emission 再分配给现有 veToken 持有者，缓和稀释并培育持有人忠诚度。

## 主要协议比较

- **Curve (veCRV)**（2020-08）：ve 原型；4 年锁仓；LP gauge 投票；CRV emission；stable swap 流动性 hub，并与 Convex Finance 形成 meta layer。
- **Solidly**（2022-02）：Andre Cronje 在 Fantom 上抽象化设计；早期项目失败，但设计思想被后续协议继承。
- **Velodrome**（2022-06，Optimism）：Solidly fork；veVELO；Optimism native DEX；首个成功规模化实现。
- **Aerodrome**（2023-08，Base）：Velodrome v2 fork；veAERO；Base native DEX；在 Base 上实现对既有 DEX 的反超。
- **Equalizer**（Sonic）、**Thena**（BNB）、**Camelot**（Arbitrum）等生态衍生协议继续扩展该模型。

## 经济学角色

- **流动性分层**：通过 emission 投票形成战略 LP，L2 主导方可把奖励集中于关键资产池。
- **投票激励市场**：token 项目为引导流动性支付激励，使治理票权形成可观察的现金价值。
- **主链 / 主办方一致性**：Coinbase Ventures、Optimism Foundation 等 L2 主导方可通过持有 veToken 闭环 chain-native economy，并把 cbBTC / USDC 等 host 资产流动性内制化。

## 风险与制约

- **治理集中**：ve 持有量前列地址支配 emission，可能形成寡头结构和 veWhale 问题。
- **代币经济复杂化**：普通 LP 需要理解锁仓、NFT、bribe、rebase 和 epoch 机制，学习曲线陡峭。
- **链依赖性**：native DEX 的命运与所在 L2 绑定；若 L2 增长停滞，DEX TVL 也会承压。
- **emission 可持续性**：token 价格下跌会压缩 APR，引发 flywheel 逆转风险。

## Cross-links

- [[exchanges/native-dex-flip-incumbent-pattern]]（Aerodrome 反超案例）
- [[exchanges/vetoken-host-protocol-flywheel]]（Coinbase x Aerodrome x cbBTC）
- [[exchanges/global-dex-major-five-comparison]]
- [[exchanges/amm-design-evolution]]
- [[exchanges/solana-ecosystem-dex-comparison|Solana 生态 DEX 比较]]
- [[fintech/portfolio-winner-structure-arm-analog|组合赢家结构类比]]
- [[exchanges/cex-native-token-strategy-comparison|CEX 原生代币战略比较]]
