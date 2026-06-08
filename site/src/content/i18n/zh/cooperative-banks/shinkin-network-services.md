---
source: cooperative-banks/shinkin-network-services
source_hash: a3f7124e5690f517
lang: zh
status: machine
fidelity: ok
title: "信金网络服务"
translated_at: 2026-06-01T02:31:57.134Z
---
# 信金网络服务

## Wiki 路线

本条目位于 [[cooperative-banks/INDEX|cooperative-banks INDEX]] 之下。可与 [[cooperative-banks/shinkin-central|信金中央金庫]] 对照阅读，以理解支撑信用金库系统的 operational central-bank counterpart；可与 [[financial-regulators/zenshin-kyo|全国信用金庫協会]] 一起阅读，以理解行业团体 / 政策层；也可与 [[banking/shinkin-bank-registry-japan|Japan shinkin bank registry]] 一起阅读，以把握完整会员群体路径。协同组织系统比较锚点位于 [[banking/japan-cooperative-banking-unified-federation-matrix|Japan cooperative-banking unified federation matrix]]。

## TL;DR

信金网络服务（Shinkin Network Services / SNS，通称“信金共同中心”）是信金中央金库集团的核心 IT 基础设施事业体，是面向协同组织金融机构的 IT service provider，运营全国 254  家信用金库（FSA 2025-11-06 时点）共同使用的 **ATM 网络、勘定系共同中心、电子结算系统**。信用金库行业中，无法单独进行大规模 IT 投资的中小金库占大多数，因此通过共同基础设施集约实现规模经济，是行业存续的关键。SNS 正是这一基础设施的实体 carrier，提供信用金库共同 ATM 服务（Shinkin ATM Network / Shinkin Cash Service, SCS）、面向信用金库的勘定系共同中心、互联网银行基础、全银网络连接网关等。

## 1. 法人 / 集团边界

| 项目 | 说明 |
|---|---|
| 法定名称 | 信金网络服务株式会社（株式会社，信金中央金库系列） |
| 集团路径 | 信金中央金库集团系列的 IT 共同基础设施公司 |
| 会员基础 | 全国信用金库 254 行（FSA 2025-11-06 时点）+ 信金中央金库 |
| Wiki 角色 | 信用金库行业 **共同 IT 基础设施运营公司** 的 anchor entry |
| Federation 层 counterpart | [[financial-regulators/zenshin-kyo|全国信用金庫協会]]（policy / industry body） |
| Central-bank 层 counterpart | [[cooperative-banks/shinkin-central|信金中央金庫]]（central liquidity / clearing） |

## 2. 业务内容

信金网络服务运营 / 提供以下共同基础设施：

1. **Shinkin ATM Network（Shinkin Cash Service, SCS）**
   - 全国 254  家信用金库之间的 ATM 相互使用网络。
   - 使信用金库 cash card 可在全国任何信用金库 ATM 上进行合作使用。
   - 与 megabank / regional bank 的 ATM 相互使用合作（参见 [[banking/atm-network-japan|Japan ATM network]]）的行业侧 counterpart。

2. **信用金库共同中心（勘定系共同使用）**
   - 面向无法单独保有勘定系系统的中小信用金库，提供共同勘定系。
   - 各信用金库以 tenant 方式使用，并共同负担运营成本。
   - 大型信用金库（如 [[cooperative-banks/kyoto-chuo-shinkin|京都中央信用金庫]]、[[cooperative-banks/osaka-shinkin|大阪信用金庫]] 等）也有持有独自勘定系的情况，但许多中坚 / 中小金库依赖共同中心。

3. **互联网银行 / 移动银行基础**
   - 面向信用金库的个人 / 法人互联网银行共同基础。
   - 各信用金库主要只在 branding 上差异化，backend 为共同基础。

4. **全银网络 / 全银 EDI / Zengin 系统连接**
   - 运营将信用金库行业整体连接至 [[banking/zengin-network|全銀ネット]] 的网关。
   - 不是由各信用金库直接连接全银网络，而是经由 SNS / 信金中金集约连接。

5. **AML/CFT 共同系统・本人确认（eKYC）共同基础**
   - 将反洗钱和本人确认系统行业共同化。
   - 集约提供单个信用金库规模下难以构建的合规 IT。

6. **无现金结算支持**
   - 面向信用金库的无现金共同基础，包括信用金库 cash card 的 debit 功能、智能手机支付联动等。

## 3. 战略定位（Why this entity matters）

### 协同组织金融机构的规模经济问题

信用金库行业已从 1990 年 年代高峰时超过 400 行 家，合并至 2025-11-06 时点的 254 行 家，但单家信用金库的平均资产规模仍仅为地银的几分之一。另一方面，银行 IT 基础设施（勘定系、AML/CFT、无现金）的更新成本逐年上升，**单个信用金库持续独立 IT 投资在结构上十分困难**。由 SNS 这类共同基础设施公司进行集约，已成为行业存续的前提条件。

### 与 megabank / regional bank 的对比

- **Megabanks（[[megabanks/mufg]]、[[megabanks/smfg]]、[[megabanks/mizuho-fg]]）**：自有并运营勘定系、AML/CFT、移动银行基础，年度 IT 投资规模达数千亿日元级。
- **Regional banks**：许多依赖 regional-bank joint center（NTT Data、Hitachi 等地银共同使用系统），但各地银仍有较大定制空间。
- **信用金库**：对 SNS 这类行业整体共同基础设施的依赖度最高，个别定制余地有限。这体现了协同组织模型下的“行业一体运营”。

### 与 [[cooperative-banks/shinkin-central|信金中金]] 的分工

- **信金中金**：流动性池、余资运用、系统内资金调整、全银网络最终连接。
- **SNS / 信金共同中心**：业务系 IT（ATM、勘定系、IB、AML 基础）的共同运营。
- 二者在信金中央金库集团内分工，SNS 承担 IT operations 核心，信金中金承担 financial operations 核心。

### 与 [[financial-regulators/zenshin-kyo|全信協]] 的分工

- **全信协**：政策提言、行业标准、自律 guideline 制定、行政应对。
- **SNS**：业务基础设施的实体运营。
- 其分工结构是：全信协是“决定层”，SNS 是“运行层”。

## 4. 相关 / 系统风险议题

### 集中风险

行业的 254 行 依赖共同基础设施，意味着 SNS / 信金共同中心的系统故障可能波及整个行业。这是银行业共同问题（如 megabank [[megabanks/mizuho-fg|みずほ FG]] 反复发生的系统故障所示），但在信用金库情形下，“整个行业同时停止”的可能性在结构上内含其中。

### 适应无现金趋势

ATM 网络（SCS）在现金使用减少的环境下运营成本负担加重，行业整体正在推进 ATM 设置台数削减和向智能手机支付转移的战略转换。SNS 也是这一转换的 carrier。

### 网络安全

由于单个信用金库的安全投资有限，SNS 的防御水平实质上决定了整个行业的安全水平。它作为 FSA / 金融厅行业共通 cybersecurity guideline 的适用主体也很重要。

## Related

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

- 全国信用金库协会（Zenshin-kyō）official site: https://www.shinkin.org/
- 信金中央金库 official site: https://www.shinkin-central-bank.jp/
- Shinkin Network Services related: https://www.shinkin.co.jp/network/
- 全信协「全信协について」: https://www.shinkin.org/zenshinkyo/about/
- FSA: 信用金库牌照名单（2025-11-06）: https://www.fsa.go.jp/menkyo/menkyoj/shinkin.xlsx

---

> [!info] Confidence note
> confidence: **likely**。SNS 是信金中央金库集团系列的行业共同 IT 基础设施公司；Shinkin Cash Service、信金共同中心、全银连接网关等业务范围，可从公开信息（全信协、信金中金 official site、行业 disclosure magazine）确认。不过，法人格详情、最新业务范围、出资结构的精细数值主要依赖信金中金集团内披露，外部一次资料粒度有限。最新值应参照信金中金 disclosure magazine 和全信协公表资料。
