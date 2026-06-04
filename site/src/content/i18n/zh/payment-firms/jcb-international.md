---
source: japanfg/jcb-international
source_hash: 37765abe1b531ccd
lang: zh
status: machine
fidelity: ok
title: "JCB International"
translated_at: 2026-05-31T23:59:49.383Z
---
# JCB International

## Wiki route

This entry sits under [[JapanFG/INDEX|JapanFG index]]. Read it against [[card-issuers/jcb|JCB]] for peer / contrast context (parent / scheme operator relationship) and [[payments/japan-card-issuer-acquirer-processor-split|Japan card issuer / acquirer / processor split]] for the broader system / regulatory boundary.

## TL;DR

JCB International Co., Ltd. (JCBI) 是 [[card-issuers/jcb|JCB]] **负责海外业务的 100% 子公司**。它统一承担国际品牌 “JCB” 的 **海外发行、海外加盟店开拓（acquiring）和品牌授权** 等 3  功能。日本国内发行业务由母公司 JCB 直接负责；与海外被授权银行（亚洲、美洲、欧洲）的合作，以及海外加盟店网络的运营（包括与 Discover / UnionPay 的相互受理）则全部经由 JCBI。

## 1. 牌照 / 集团边界

| 项目 | 说明 |
|---|---|
| 法定名称 | JCB International Co., Ltd. |
| 品牌角色 | 品牌授权方 + 海外收单方 + 海外发行支持（3-party scheme 的海外展开部分） |
| 集团边界 | [[card-issuers/jcb|JCB]] 的 100% 子公司 — 日本国内 JCB 负责国内发行，JCBI 负责海外业务 |
| Wiki 角色 | JCB “品牌全球展开” 侧的实体页面。国内发行和国内加盟店在母公司 JCB 页面处理。 |

## 2. 日本业务线

JCBI 本身 **具有面向海外的功能，但法人总部设在东京（港区南青山）**，人员和总部功能集中在日本。其在日本国内的活动主要包括：

- **海外加盟店网络运营**：支持亚洲（中国、韩国、台湾、东南亚）、美洲（经 Discover 合作）以及欧洲主要旅游地的加盟店合约与支持。
- **面向访日外国人（入境）加盟店的支持**：当国内加盟店受理海外发行 JCB 卡持有人访日消费时，负责相关处理。
- **与海外被授权银行的品牌合约**：向亚洲合作银行（Bangkok Bank / Bank of Communications 等）授予 JCB 品牌许可。
- **与 Discover / UnionPay 等其他品牌的相互受理合约**：管理 JCB 卡在海外 Discover 加盟店、UnionPay 加盟店可用以及反向受理的业务合约。

由于国内消费者发行业务由母公司 [[card-issuers/jcb|JCB]] 负责，JCBI 与日本国内一般消费者几乎没有直接接点。

## 3. 相对 JCB / 国内卡组织的战略与竞争位置

JCB 具有接近 **3-party scheme** 的结构（类似 Amex：自家公司兼具发行、加盟店合约和品牌运营），但在海外采取通过被授权银行的 **4-party scheme** 混合方式。这个海外展开模式的执行主体就是 JCBI。Visa / Mastercard 是完全 4-party 的纯粹卡组织运营者；相较之下，JCB 同时使用 “自社直接发行 + 授权许可”。JCB 的海外加盟店覆盖远落后于 Visa / Mastercard，但通过 **与 Discover（美国）/ UnionPay（中国）的相互受理合作** 来补足空白，JCBI 则成为这些合作合约和运营的窗口。从日本国内 issuer 视角看，与 [[card-issuers/smbc-card|三井住友カード]]、[[card-issuers/mufg-nicos|三菱UFJニコス]] 这类以 Visa / Mastercard 为主的 issuer 不同，JCB 品牌 issuer（如乐天卡的 JCB 版本、JCB 自有卡）通过 JCBI 共享海外加盟店网络。

## 4. 本页意义

- 作为边界页面，在**法人层面分离整理** JCB 的 “海外品牌业务” 和 “国内发行业务”
- 明确 Discover / UnionPay 相互受理合约的 **签约主体**（不是 JCB，而是 JCBI）
- 整理国际品牌比较中 “JCB 是 3-party 还是 4-party” 的模糊性

## Related

- [[card-issuers/jcb|JCB]]（母公司 / 国内发行负责人）
- [[payment-firms/mastercard-japan|Mastercard Japan]] / [[payment-firms/visa-worldwide-japan|Visa Worldwide Japan]]（4-party 竞争卡组织）
- [[payment-firms/american-express-international-japan|American Express International Japan]]（3-party 竞争方）
- [[payment-firms/unionpay-international-japan|UnionPay International Japan]]（相互受理合作对象）
- [[card-issuers/smbc-card]] / [[card-issuers/rakuten-card]]（JCB 品牌国内 issuer）
- [[payments/japan-card-issuer-acquirer-processor-split]]

## Sources

- JCB Global (英文 corporate site): https://www.global.jcb/en/
- JCB 公司概要（日文）: https://www.global.jcb/ja/about-us/
- JCB International 海外展开介绍: https://www.global.jcb/ja/about-us/global-network.html
