---
source: payment-firms/gmo-aozora-net
source_hash: ecc9ba5ced5fec7a
lang: zh
status: machine
fidelity: ok
title: "GMO 青空网络银行"
translated_at: 2026-05-31T15:29:03.952Z
---

# GMO 青空网络银行

## Wiki route

This entry sits under [[payment-firms/INDEX|payment-firms INDEX]]. Read it against [[regional-banks/ssnb|住信 SBI ネット銀行 (SBI Sumishin Net Bank) → ドコモ SMTB ネット銀行]] for peer / contrast context and [[banking/INDEX|banking index]] for the broader system / regulatory boundary.

## TL;DR

**法人特化 BaaS（Banking as a Service）軸**のネット銀行。旧 **あおぞら信託銀行**（[[aozora-bank]] 子会社）を母体に、2018-07 **GMO インターネットグループ**が議決権の過半を取得して改称・ネット銀行化。種類株式の再編後、株主構成は**普通株（持株）比率であおぞら銀行 50.00% / GMO インターネットグループ 25.00% / GMO フィナンシャルホールディングス 25.00%**、**議決権比率ではあおぞら銀行 85.12% / GMO 両社各 7.43%**（2026-02-20 時点、あおぞら保有分の一部が議決権制限付種類株式のため持株比率と議決権比率が乖離）。**個人重視の楽天銀行・PayPay 銀行・住信 SBI ネット銀行とは異なり、フリーランス・スタートアップ・fintech 連動の法人口座 + API 連携を主軸**に据える。代表サービスは「**あんしんワイド**」（法人向けビジネスローン）と「**銀行 API for Developers**」。freee・マネーフォワード・Square・Stripe 等の fintech との戦略提携でポジションを築いている。^[extracted]

## 1 。公司简介

**正式名称**：GMO Aozora Net Bank, Inc. ^[extracted]
**英文名称**：GMO Aozora Net Bank, Ltd.
**成立**：2004 - 04（以 Aozora 信托银行开始）^[extracted]
**当前结构已启动**：2018 - 07（GMO Internet Group 获得多数股权 → 重命名）^[extracted]
**总部**：东京涩谷区 ^[extracted]
**业务类型**：银行业务（普通银行/网银）

### 主要股东（截至 2026-02-20，官方公司简介）

|股东|持股比例|投票权比例 |
|---|---|---|
| [[aozora-bank]] (TSE PRIME 8304) | 50.00% | 85.12% |
| GMO 互联网集团 (TSE PRIME 9449 ) | 25.00% | 7.43% |
| GMO金融控股| 25.00% | 7.43% |

> 経緯：GMO は当初 15% 出資（2016-05）→ 2018-07 にネット銀行化（議決権ベースで過半取得）。2016 年の株主間契約に基づき、2023 年にあおぞら銀行保有の種類株式が GMO フィナンシャルホールディングスへ譲渡。普通株（持株）ベースではあおぞら 50% / GMO 両社計 50% だが、あおぞら保有分の一部が議決権制限付種類株式のため、**議決権ではあおぞら 85.12% / GMO 両社各 7.43%** となる。比率は IR 開示で動くため最新は各社開示を参照。

### 在组内的位置

```
GMO インターネットグループ（東証 PRIME 9449・熊谷正寿）
  ├── GMO あおぞらネット銀行（持株 25% [GMO IG] + 25% [GMO FH]、議決権各 7.43%）── 法人 BaaS ネット銀行
  ├── GMO ペイメントゲートウェイ（東証 PRIME 3769）── 決済処理 ICT
  ├── GMO コイン ── 暗号資産取引所
  ├── GMO クリック証券 ── ネット証券・FX
  ├── GMO クラウド / GMO ペパボ ── インフラ・ホスティング
  └── GMO リサーチ / GMO アドパートナーズ ── 広告・調査
[[aozora-bank]]（東証 PRIME 8304）
  └── GMO あおぞらネット銀行（持株 50%・議決権 85.12%、種類株式中心）── 筆頭株主
```

### 历史记录 ^[extracted]

|月 |活动 |
|---|---|
| 2004 - 04  | **青空信托银行**开业（[[aozora-bank]] 100%子公司，主要信托业务）|
| 2016 - 05  | GMO Internet向Aozora Trust Bank投资15% → 为合资公司转型为网上银行做准备|
| 2018 - 07  | **GMO 多数股权 → GMO Aozora Net Bank 更名并开始运营**（开始开设个人/企业账户）|
| 2019 ~ |企业金融科技关联账户是增长轴。 freee / 扩大与 Money Forward 等的 API 合作 |
| 2020 ~ | “安心宽”（企业商业贷款）上线，加速与BaaS合作伙伴合作|
| 2022 ~ |扩大与Stripe/Square/Wise等支付金融科技合作|
| 2023  |将Aozora Bank持有的类别股份转让给GMO Financial Holdings（基于股东协议）|

## 2 。业务板块图

|细分 |主营业务 |特点|
|---|---|---|
|企业账户|自由职业者、独资企业和初创账户|金融科技客户可在线完成开户手续并当天开户 |
|企业贷款| **Anshin Wide**（无担保商业贷款）| AI信用模型+GMO PG支付数据联动 |
| API/BaaS | **面向开发人员的银行 API** |对于企业/金融科技（开放API用于余额查询、转账、开户等）|
|合作伙伴协作 | freee / Money Forward / Square / Stripe / Wise 等 |账户直接链接到会计/支付SaaS |
|个人账户|对于自由职业者和副业|避免与个人专用网上银行（Rakuten / PayPay / Sumishin SBI等）直接竞争 |
|加密资产合作 | [[gmo-coin]]（姐妹公司）| GMO 集团内部的协同效应 |
|支付联动 | GMO 支付网关（姐妹公司/TSE PRIME 3769）|支付处理/商户数据联动 |

###企业BaaS轴的差异化

- **从专门针对个人的网上银行（Rakuten Bank / PayPay Bank / [[regional-banks/ssnb|sbi-sumishin-net]] / au Jibun Bank等）改变战场**：不与个人账户数量竞争，专注于**对应企业BaaS和API经济**
- “Anshin Wide”（企业商业贷款）使用GMO Payment Gateway的支付数据进行信贷 → 典型的集团协同效应
- 目标是“**已经使用会计SaaS/支付SaaS/云ERP的中小企业/个体工商户**”——金融科技关联账户的标准定位

### 与母公司转基因生物的协同作用

- **GMO 支付网关**（支付）/** [[gmo-coin]] **（加密资产）/**GMO Click 证券**（证券/外汇）和相互推荐
- 整个GMO集团“**互联网金融经济区**”的银行层（支付+证券+加密资产+银行）
- 虽然与 Rakuten、PayPay 和 SBI 的经济区相比规模较小，但它是一个明显针对企业/自由职业阶层的职位。

### API / 开放银行战略

- “**Bank API for Developers**”：为金融科技开发者提供余额查询、转账、开户等开放API。
- 直接连接freee / Money Forward等会计云 → 存款和取款自动记录
- 对接Stripe / Square等海外支付金融科技 → 支持跨境支付
- 捕捉“**个人金融科技专注于支付**”和“企业金融科技专注于会计/费用/信贷**”之间的细分差异

> 关于上市可能性的观察报告和猜测被隔离在“.opinions/JapanFG/gmo-aozora-net.md”（2026-05-29，未经证实）中。

## 4 。法规/政策

- **监督**：金融服务局 (FSA)
- **业务类型**：银行法规定的银行（普通银行）
- **存款保险**：加入存款保险公司
- **API 法规**：根据《银行法修正案》(2017) 提供开放 API 的义务 → “面向开发者的银行 API”是对此的系统扩展
- **与资金转账行业/虚拟货币行业的联系**：多业务许可证的集成是与 GMO 集团内的 [[gmo-coin]] 和 GMO 支付网关合作的一个问题
- **洗钱法规**：开设公司账户时进行更严格的身份识别/实质控制人验证（2023 ~ FATF 4 st 筛选兼容）

## Related

- [[aozora-bank]]（前母公司/现任 ~ 15% 股东）
- [[gmo-coin]]（姐妹公司/加密资产）
- [[regional-banks/ssnb|sbi-sumishin-net]]（住信 SBI 网上银行/竞争对手 BaaS）
- [[banking/paypay-bank|paypay-bank]]·[[banking/rakuten-bank|rakuten-bank]]·[[banking/au-jibun-bank|au-jibun-bank]]（个人网银/独立战场）
- [[banking/minna-bank-baas-model|minna-bank]] · [[banking/mercari-bank|mercari-bank]]（来自区域银行/竞争对手的新 BaaS/数字银行）
- [[banking/baas-japan-landscape]]（^[planned] 日本 BaaS 地图）

## Sources

- **维基百科：GMO Aozora 网络银行**（https://ja.wikipedia.org/wiki/GMO Aozora 网络银行，2026-05-19 摘录）
- **GMO Aozora 网银官方网站**（参见 https://gmo-aozora.com/, 2026-05-19）
- **GMO Internet Group IR**（参见 TSE PRIME 9449,  2026-05-19）
- GMO Aozora 网络银行公司简介（控股：Aozora 50% / GMO IG 25% / GMO FH 25%，投票权：Aozora 85.12% / GMO 7.43%，2026-02-20） — https://gmo-aozora.com/company/outline.html
- GMO互联网集团《关于收购GMO Aozora Net Bank类别股份的通知》（2023-06-19，根据股东协议转让类别股份） — https://group.gmo/news/article/ 8450/

---

> [!info] 验证状态
> 信心：**可能**（维基百科 + 官方 + 母公司 GMO IR 基础 2026-05-19，将官方公司简介中的股东构成更正为 2026-05-29）。 **最初表述的股东构成不正确，为“GMO ~ 85% / Aozora ~ 15%”** — 正确的是，持股比例为 Aozora 50.00% / GMO IG 25.00% / GMO FH 25.00%，投票权比例为 Aozora 85.12% / GMO 各 7.43% （2026-02-20，由于类别库存而导致的差异）。请参阅 GMO Aozora Net Bank 公司简介和各公司的 IR 了解最新值。上市准备报告独立于“.opinions”，未经证实。贷款余额/API合作伙伴数量等量化数据尚未收集（需补充）。
