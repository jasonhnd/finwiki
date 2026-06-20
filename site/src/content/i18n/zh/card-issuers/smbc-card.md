---
source: card-issuers/smbc-card
source_hash: 81a986045f248a24
lang: zh
status: machine
fidelity: ok
title: "三井住友卡 (SMCC)"
translated_at: 2026-06-20T09:33:00.420Z
---

# 三井住友卡 (SMCC)

## Wiki route

本条目位于 [[card-issuers/INDEX|card-issuers INDEX]] 之下。可与 [[card-issuers/mufg-nicos|三菱UFJニコス (Mitsubishi UFJ NICOS)]] 对照阅读，以理解同业 / 对比背景；也可与 [[payments/INDEX|payments index]] 一起阅读，以理解更广义的系统和监管边界。

## TL;DR

三井住友卡是 [[megabanks/smfg|SMFG]] 卡、信贩和交易业务的核心运营公司。它不仅是发卡方，也整合面向加盟店的支付、交易服务，以及 Olive / V Point 周边的无现金触点，因此作为 [[payments/card-acquiring-japan-stack|card acquiring stack]] 的代表页面独立出来。

## 1. 法人 / 牌照边界

| Item | Reading |
|---|---|
| Legal entity | 三井住友卡株式会社 |
| Group | [[megabanks/smfg|SMFG]] |
| Main lanes | 信用卡、分期 / 信用销售、加盟店收单、交易服务 |
| Regulatory route | 分期销售法 / METI 登记运营商名单；贷款和卡号处理披露应以官方页面核对。 |

## 2. Business role

- 信用卡发行和加盟店服务位于 SMFG 零售无现金战略的中心。
- 该公司连接银行账户、卡、积分、app、加盟店受理、交易服务以及关联消费金融通道。
- 官方公司概要列出信用卡、借记 / 预付及其他支付服务、贷款、保证、信用销售和交易业务，因此 SMBC Card 应被读作多业务线支付 / 消费信用运营商，而不只是发卡机构。
- 它也是区分 SMFG 银行资产负债表业务与支付网络、信用销售和加盟店收单业务的有用边界页。

## 3. SMFG 平台与监管边界

| 层级 | 公开来源解读 |
|---|---|
| 集团角色 | 公司概要将 SMFG 识别为股东，并把 SMBC Card 放在核心 SMBC 集团支付表面内。 |
| 业务线 | 官方页面描述卡、信用销售和交易业务；这使 SMBC Card 同时是发卡机构和商户 / 交易服务运营商。 |
| Olive / V Point 相邻关系 | 公开的 SMBC 集团定位使卡公司成为银行账户、卡、app 和积分捆绑背后的运营层之一。讨论存款与卡信用时，应把银行页和卡公司页分开。 |
| 监管 | METI 注册经营者名单和官方贷款 / 卡号披露，是割赋销售法、卡号处理和消费信用边界的公开控制点。 |

## 4. Why this standalone page matters

母公司 FG 页面会隐藏运营公司边界。分析 issuer economics、merchant-acquiring risk、卡号合同管理和消费信用监管时，SMBC Card 是需要单独识别的实体。

## Related

- [[megabanks/smfg]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[consumer-finance/smbc-consumer-finance]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/cashless-jp-landscape]]

## Sources

- SMBC Card company outline: https://www.smbc-card.com/company/info/outline.jsp
- SMBC Card company information: https://www.smbc-card.com/company/index.jsp
- METI registered operators under the Installment Sales Act: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
