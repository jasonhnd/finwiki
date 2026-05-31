---
source: banking/quick-deposit-four-methods
source_hash: d0d419a5eb522691
lang: zh
status: machine
fidelity: ok
title: "快速入金的4方式分解框架"
translated_at: 2026-05-31T03:19:56.418Z
---

# 快速入金的4方式分解框架


## Wiki route

This entry sits under [[banking/INDEX|banking index]]. Read it against [[banking/regional-bank-consolidation-pattern|Regional bank consolidation pattern]] for peer / contrast context and [[banking/cooperative-banking-japan|Cooperative banking in Japan]] for the broader system / regulatory boundary.

> [!info] TL;DR
> 「决定即时入金 UX 的，是背后的银行连接方式」

## 核心命题

日本的即时入金（快速入金）看似相似，但**契约前提、认证负荷、责任分界完全不同的 4 方式**可被分解出来。对引入企业进行现状诊断和提出 UX 改善方案时，此分类必不可少。

## 4方式的比较

| 方式 | 契约前提 | 首次认证 | 每次认证 | UX负荷 | 代表案例 |
|------|---------|---------|---------|--------|---------|
| **1. 银行登录型** | 事业者 × 银行（非收纳机构） | 无 | 每次登录+OTP | 高 | 乐天证券、SBI网络银行 |
| **2. 账户联动型（OAuth）** | 事业者 × 银行（需电代业登记） | OAuth同意 | **不需要** | **最小** | **大和Connect证券×Minna银行**、Merpay×住信SBI、Revolut×Minna银行 |
| **3. Pay-easy/MPN型** | 事业者 × 收纳机构编号 | 无 | 每次登录+3编号 | 高 | Coincheck、GMO Coin、SBI VC Trade |
| **4. 结算代理经由型** | 事业者 × 结算代理 × 银行 | 无 | 每次登录 | 中 | GMO-PG「PG Multi Payment Service」 |

## 方式选择的论点

### 事业者侧的观点

- **认证负荷的结构性削减** → 方式 2（OAuth）几乎是唯一选择
- **初期投资的轻量化** → 方式 3（Pay-easy）较低（无需电代业登记）
- **规避结算代理依赖** → 方式 1 或 2（方式 4 依赖中间业者）
- **获取账户份额的正式关系** → 方式 2（OAuth token 是持续关系的实现）

### 用户侧的观点

- **仅首次认证、之后一键完成** → 仅方式 2 
- **对银行品牌的信任感** → 方式 1 / 3 也能保障
- **明细的透明性** → 任何方式都会记录在银行侧明细中

### 副产物：Pay-easy 7日汇款限制

使用方式 3（Pay-easy）的许多加密资产事业者，在入金后 **7天内限制外部汇款**（反洗钱对策）。
切换到方式 2（OAuth）后，在某些情况下可以放宽此限制。**这是 UX 上的巨大差异**。

## 电子结算等代理业登记的意义

- 2017 年银行法修订时新设
- **正式提供方式 2（账户联动型）时，事业者侧通常需要电代业登记**
- 方式 1 / 3 / 4 无需电代业登记即可运营（依赖银行侧网上银行）
- **电代业登记 = 「能够调用银行API更新系的业者资格」的事实上的门槛**

## 参照系 API 与 更新系 API

| 区分 | 参照系 | 更新系 |
|------|-------|-------|
| 操作 | 余额查询・交易明细 | 转账・划转 |
| 用途 | 在事业者应用中显示银行余额 | 快速入金的基础 |
| 认证 | OAuth 2.0 | OAuth + 电子签名 |

采用方式 2 后，**会产生同时提供参照系 API 的余地，使「在事业者应用内整合显示银行余额」这一 UX 进化成为可能**。

## 适用场景

- **加密资产交换业者的入金导流设计** — 若现状为方式 1/3 ，则升级至方式 2 是首要的 UX 改善候选
- **Fintech 初创企业的银行联动选型** — 在方式 2 的电代业登记门槛与 UX 提升之间权衡
- **银行侧 BaaS 业务的战略设计** — 提供方式 2 的银行，其「与事业者的关系结构」本身就是差异化要素
- **公司内部战略研讨资料的现状分析章节** — 在提出「我们现在以何种方式运作」这一问题时的框架

## 关联

- [[banking/minna-bank-baas-model|minna-bank-baas-model]] — Minna银行 BaaS 的 2 模型（API 提供型 × 合作分行型）的框架
- [[fintech/japan-financial-regulation|japan-financial-regulation]] — 电代业登记的法律依据（资金结算法/银行法）
- [[banking/mercari-bank-license-stack|mercari-bank-license-stack]] — 包含电代业的牌照阶梯的具体示例

来源: 公开信息整理 (各 BaaS 提供银行官方网站・FSA 电代业登记一览・全国银行协会发布资料)

## Sources

- 金融厅「电子结算等代理业者登记申请时的注意事项等」（2017年银行法修订引入登记制・银行法第2条第21项第1号 汇兑指令/更新系 与 第2号 账户信息获取/参照系 的区别） — https://www.fsa.go.jp/common/shinsei/dendai/01.pdf
- 金融厅「电子结算等代理业制度概要」手册（制度宗旨・开放创新） — https://www.fsa.go.jp/common/about/pamphlet/dendaigyo_start.pdf

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[banking/minna-bank-baas-model|みんなの銀行 BaaS モデル]]
- [[banking/mercari-bank-license-stack|メルカリバンクのライセンス三層構造]]
<!-- /wiki-links:managed -->
