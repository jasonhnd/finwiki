---
source: exchanges/jp-crypto-tax-software-vendor-layer
source_hash: d1a6172b32416041
lang: zh
status: machine
fidelity: ok
title: "国内加密资产税务软件供应商层（Cryptact / Gtax / CryptoLinc / Coinly 等）"
translated_at: 2026-05-31T03:19:56.461Z
---

# 国内加密资产税务软件供应商层（Cryptact / Gtax / CryptoLinc / Coinly 等）

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/jp-crypto-asset-taxation-detailed|国内暗号資産税制詳細]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度]] for the broader system / regulatory boundary.

## 概要

国内个人投资者的加密资产损益须作为**杂所得（综合课税・最高税率 55%）**申报，在多个 VASP 账户 + 海外交易所 + DeFi + NFT 使用混杂的情形下，手工计算实际上不可能。为解决这一问题的**加密资产税务 SaaS** 市场自 2018  起急速成长。国税厅（NTA）也自 2023  起强化要求 VASP 提交客户交易信息的支付调书，税务处理自动化需求日益增大。**Cryptact / Gtax（旧 Aerial Partners 系）/ CryptoLinc（旧 GxC）/ Koinly（海外大厂的日本对应）** 在国内形成 4  强格局。

## 国内主要供应商

### **Cryptact（株式会社 Cryptact）**

- **设立**：2018 年
- **总部**：东京
- **主要产品**：「Cryptact」（面向个人的税务计算 + 投资组合管理）、面向机构投资者的「Cryptact for Business」
- **优势**：支持 80+ 家交易所，解析 DeFi（Uniswap / Aave 等）+ NFT + L2 （Arbitrum / Optimism / Base / Polygon）的交易，支持 NEM/Symbol 等国内 alt
- **会计事务所合作**：面向会计师・税理士的 B2B 方案
- **官方**：https://www.cryptact.com/

### **Gtax（株式会社 Aerial Partners 提供）**

- **设立**：2017 年（Aerial Partners 创业）
- **总部**：东京
- **主要产品**：「Gtax」（面向个人的税务计算）、「Guardian」（面向法人的加密资产会计）
- **优势**：由会计师法人 Aerial Partners 运营，税理士监修。**面向法人的会计联动（freee / Money Forward 等）**为强项
- **特征**：支持移动平均法 / 总平均法的选择，历年 + 法人事业年度基准计算切换

### **CryptoLinc（旧 GxC / 株式会社 GxC）**

- **总部**：东京
- **主要产品**：「CryptoLinc」（面向个人 + 法人）
- **优势**：面向机构投资者・加密资产业者的实务（大量交易 + 合并会计对应）
- **特征**：强化对 JICPA 行业别委员会实务指针 第 61 号 的对应，与审计法人（[[exchanges/japan-crypto-audit-firm-landscape|国内クリプト監査法人ランドスケープ]]）的合作

### **Koinly（海外大厂的日本对应）**

- **据点**：英国
- **特征**：JPY 对应 + 国内交易所统合 + DeFi 全面对应。作为**国内 4  大最有力竞争者**在个人层使用扩大
- **优势**：凭借全球展开（在美・英・澳・加拿大等地为大厂）实现 DeFi / NFT 交易解析的覆盖广度

### **其他**
- **CRYPTO ZAIMU（株式会社 Coin Tax）** — 中等规模份额
- **TaxBit（美）/ CoinTracker（美）/ TokenTax（美）** — 美系大厂，面向日本用户的对应有限

## 主要功能（各公司共通）

1. **交易所 API / CSV 联动**：bitFlyer / GMO 币 / SBI VC Trade / Coincheck / bitbank / BitTrade 等主要 VASP 自动导入
2. **DeFi 交易解析**：输入 MetaMask / OKX Wallet 等的 wallet address → 链上交易自动分类
3. **NFT 买卖解析**：OpenSea / Magic Eden / Blur 等的交易解析
4. **移动平均法 / 总平均法切换**：基于国税厅通达的取得价额计算
5. **损益计算 + 申报材料输出**：用于确定申报附件的 PDF / e-Tax 联动
6. **多年度比较**：结转扣除（法人）/ 损益通算可否判定
7. **支付调书核对**：与 VASP 发行的支付调书突合功能（2023  强化）
8. **面向法人的期末时价评估**：法人税法 61  条对应（反映 2024  修订对自社发行・第三方持有 token 的排除）

## 与税制改革的联动

国内加密资产税制近年大幅变动 → [[exchanges/jp-crypto-asset-taxation-detailed|国内暗号資産税制詳細]]：

- **2024 年 年度** — 法人持有加密资产（自社发行 + 第三方发行）的期末时价评估排除（[[exchanges/jcba-japan-crypto-business-association|JCBA]] + [[exchanges/jvcea-self-regulatory-overview|JVCEA]] 联名要望结成果实）
- **个人的分离课税化** — 业界多年要望，尚未实现（杂所得・最高 55%・不可损益通算・不可 3  年结转扣除）
- **NFT 课税** — 二次流通的处理，存货资产 / 杂所得的区分判定为论点

各供应商在每次修订时更新逻辑，公开面向用户的解说文章。

## 面向机构投资者・法人的实务

面向法人以 **CryptoLinc + Guardian（Gtax 法人版）**为双璧。通过与 **[[exchanges/japan-crypto-audit-firm-landscape|Big4 監査法人]]** 的联动自动生成审计应对数据。**[[exchanges/japan-crypto-law-firm-landscape|大手法律事務所]]** 的税务建议 + 供应商的汇总数据 + 审计法人的保证 这一 3  段方案已确立。

## DeFi / Web3  用户特有的课题

- **NFT mint → flip → swap** 的连续交易，损益确认时点为论点
- **流动性提供（LP）** 的组入时 / 解除时损益，空投受领时的评估
- **质押奖励**（→ [[exchanges/jp-crypto-staking-as-a-service-operators|StaaS 事業者層]]）受领时时价
- **跨链桥**（[[exchanges/jp-crypto-on-off-ramp-bridge-layer|on/off ramp 層]] + L2  桥）的 wrap / unwrap 判定

各供应商持续更新这些自动分类逻辑。

## Related

- [[exchanges/jp-crypto-asset-taxation-detailed]] — 税制详情
- [[exchanges/japan-crypto-audit-firm-landscape]] — 审计法人
- [[exchanges/japan-crypto-law-firm-landscape]] — 律师事务所
- [[exchanges/jp-crypto-staking-as-a-service-operators]] — 质押
- [[exchanges/jcba-japan-crypto-business-association]] — JCBA 税制提言
- [[exchanges/jvcea-self-regulatory-overview]] — JVCEA
- [[exchanges/fsa-vasp-registration-system]] — FSA 注册
- [[fintech/japan-financial-regulation]] — 上位金融监管

## Sources

- Cryptact 官方：https://www.cryptact.com/
- Gtax（Aerial Partners）：https://crypto-city.net/
- CryptoLinc 官方：https://www.cryptolinc.com/
- Koinly 官方：https://koinly.io/
- 国税厅 加密资产相关：https://www.nta.go.jp/
