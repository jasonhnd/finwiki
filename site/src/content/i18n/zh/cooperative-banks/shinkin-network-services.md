---
source: cooperative-banks/shinkin-network-services
source_hash: b5c3476ac652cb53
lang: zh
status: machine
fidelity: ok
title: "Shinkin Network Services (信金网络服务)"
translated_at: 2026-06-18T23:33:48.362Z
---

# Shinkin Network Services (信金网络服务)

## Wiki 路径

本条目位于 [[cooperative-banks/INDEX|cooperative-banks INDEX]] 之下。请将其与 [[cooperative-banks/shinkin-central|信金中央金庫]] 对照阅读以了解锚定信金系统的运营中央银行对应方，与 [[financial-regulators/zenshin-kyo|全国信用金庫協会]] 对照以了解行业团体 / 政策层，与 [[banking/shinkin-bank-registry-japan|Japan shinkin bank registry]] 对照以了解完整的会员群体路径。合作系统比较锚点位于 [[banking/japan-cooperative-banking-unified-federation-matrix|Japan cooperative-banking unified federation matrix]]。

## TL;DR

信金网络服务（Shinkin Network Services / SNS，通称「信金共同中心」）是信金中央金库集团的核心 IT 基础设施运营实体，是一家面向合作组织的 IT 服务提供商，运营由全国 254 家信用金库（截至 FSA 2025-11-06）共同使用的 **ATM 网络・核心账务共同中心・电子结算系统**。由于信用金库业界大半为无法独立进行大规模 IT 投资的中小金库，通过共同基础设施集约实现的规模经济成为业界存续的关键。SNS 即为其实体性载体，提供信用金库共同 ATM 服务（信金 ATM 网络 / Shinkin Cash Service, SCS），以及面向信用金库的核心账务共同中心・网上银行基础・全银网连接网关等。

## 1. Legal / group boundary

| Item | Notes |
|---|---|
| 法人名称 | 信金网络服务株式会社（株式会社，信金中央金库系列） |
| 集团路径 | 信金中央金库集团系列的 IT 共同基础设施公司 |
| 会员基础 | 全国信用金库 254 行家（截至 FSA 2025-11-06）+ 信金中央金库 |
| Wiki 角色 | 信用金库业界**共同 IT 基础设施运营公司**的锚点条目 |
| 联合会层对应方 | [[financial-regulators/zenshin-kyo|全国信用金庫協会]]（政策 / 行业团体） |
| 中央银行层对应方 | [[cooperative-banks/shinkin-central|信金中央金庫]]（中央流动性 / 清算） |

## 2. 业务内容

信金网络服务运营・提供如下共同基础设施：

1. **信金 ATM 网络（Shinkin Cash Service, SCS）**
   - 全国 254 家信用金库间的 ATM 互用网络。
   - 使信用金库现金卡可在全国任一信用金库 ATM 上通过合作互用。
   - 与巨型银行・地方银行的 ATM 互用合作（参见 [[banking/atm-network-japan|Japan ATM network]]）的业界侧对应方。

2. **信用金库共同中心（核心账务共同利用）**
   - 面向无法独立持有核心账务系统的中小信用金库，提供共通核心账务。
   - 各信用金库以租户方式使用，共同分担运营成本。
   - 大型信用金库（如 [[cooperative-banks/kyoto-chuo-shinkin|京都中央信用金庫]]・[[cooperative-banks/osaka-shinkin|大阪信用金庫]] 等）也有自有核心账务的情形，但许多中坚・中小金库依赖共同中心。

3. **网上银行・移动银行基础**
   - 面向信用金库的个人 / 法人网上银行共通基础。
   - 各信用金库仅在品牌上差异化，后端为共通。

4. **全银网 / 全银 EDI / Zengin 系统连接**
   - 运营将信用金库业界整体连接至 [[banking/zengin-network|全銀ネット]] 的网关。
   - 个别信用金库并非直接连接全银网，而是经 SNS / 信金中金集约连接。

5. **AML/CFT 共通系统・身份核实（eKYC）共通基础**
   - 反洗钱对策・身份核实系统的业界共通化。
   - 将以个别信用金库规模难以构建的合规 IT 集约提供。

6. **无现金支付对应**
   - 信用金库现金卡的借记功能・智能手机支付联动等，面向信用金库的无现金对应的共通基础设施。

## 3. 战略定位（Why this entity matters）

### 合作组织金融机构的规模经济问题

信用金库业界由 1990 年年代峰值时的超 400 行家 → 截至 2025-11-06 的 254 行家，合并持续推进，但即便如此，个别信用金库的平均资产规模仍仅为地方银行的数分之一。另一方面，银行 IT 基础设施（核心账务・AML/CFT・无现金）的更新成本逐年上升，**个别信用金库独自持续 IT 投资在结构上颇为困难**。由 SNS 这类共同基础设施公司进行集约，已成为业界存续的前提条件。

### 与巨型银行 / 地方银行的对比

- **巨型银行（[[megabanks/mufg]]・[[megabanks/smfg]]・[[megabanks/mizuho-fg]]）**：自行持有・运营核心账务・AML/CFT・移动银行基础，IT 投资额为每年数千亿日元规模。
- **地方银行**：多数依赖地方银行共同中心（NTT 数据・日立等的地方银行共同利用系统），但各地方银行存在较大的定制空间。
- **信用金库**：对 SNS 这类业界整体共通基础设施的依赖度最高，个别定制空间有限。这体现了合作模式特有的「业界一体运营」。

### 与 [[cooperative-banks/shinkin-central|信金中金]] 的分工

- **信金中金**：流动性池・余资运用・系统内资金调节・全银网最终连接。
- **SNS / 信金共同中心**：业务系 IT（ATM・核心账务・IB・AML 基础）的共同运营。
- 两者在信金中央金库集团内分担职能，SNS 承担 IT 运营的核心，信金中金承担金融运营的核心。

### 与 [[financial-regulators/zenshin-kyo|全信協]] 的分工

- **全信协**：政策建言・业界标准・自主监管指引制定・行政对应。
- **SNS**：业务基础设施的实体性运营。
- 形成全信协为「决策层」、SNS 为「执行层」的分工结构。

## 4. 相关 / 系统性风险议题

### 集中风险

业界 254 行依赖共通基础设施，意味着 SNS / 信金共同中心的系统故障有波及全业界的风险。这是银行业界共通的课题（如巨型银行 [[megabanks/mizuho-fg|みずほ FG]] 反复出现的系统故障所示），但就信用金库而言，「全业界同时停摆」的可能性在结构上内在存在。

### 对无现金潮流的适应

ATM 网络（SCS）在现金使用减少之中运营成本负担加重，业界整体向削减 ATM 安装台数・转向智能手机支付的战略转型正在推进。SNS 也是这一转型的载体。

### 网络安全

正因个别信用金库的安全投资有限，SNS 的防御水平实质上决定了全业界的安全水准。作为 FSA / 金融厅业界共通网络安全指引的适用主体也至关重要。

## 相关

- [[cooperative-banks/INDEX|cooperative-banks INDEX]]
- [[cooperative-banks/shinkin-central|信金中央金庫]]
- [[financial-regulators/zenshin-kyo|全国信用金庫協会]]
- [[cooperative-banks/kyoto-chuo-shinkin|京都中央信用金庫]]
- [[cooperative-banks/osaka-shinkin|大阪信用金庫]]
- [[cooperative-banks/jonan-shinkin|城南信用金庫]]
- [[cooperative-banks/yokohama-shinkin|横浜信用金庫]]
- [[banking/shinkin-bank-registry-japan|Japan shinkin bank registry]]
- [[banking/japan-cooperative-banking-unified-federation-matrix|Japan cooperative-banking unified federation matrix]]
- [[banking/cooperative-banking-japan|Cooperative banking in Japan]]
- [[banking/zengin-network|全銀ネット]]
- [[banking/atm-network-japan|Japan ATM network]]
- [[banking/INDEX|banking index]]

## Sources

- 全国信用金库协会（Zenshin-kyō）官方网站: https://www.shinkin.org/
- 信金中央金库 官方网站: https://www.shinkin-central-bank.jp/
- 信金网络服务相关: https://www.shinkin.co.jp/network/
- 全信协「关于全信协」: https://www.shinkin.org/zenshinkyo/about/
- FSA: 信用金库免许一览（2025-11-06）: https://www.fsa.go.jp/menkyo/menkyoj/shinkin.xlsx

---

> [!info] Confidence note
> confidence: **likely**。SNS 是信金中央金库集团系列的业界共同 IT 基础设施公司，其 Shinkin Cash Service・信金共同中心・全银连接网关等业务范围可从公开信息（全信协・信金中金官方网站・业界披露杂志）确认。但因法人资格细节・最新业务范围・出资结构的精确数值以信金中金集团内披露为主，外部可得的一次资料粒度有限。最新值请参照信金中金披露杂志・全信协公布资料。
